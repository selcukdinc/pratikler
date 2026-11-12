// Sanal Git'in doğruluk testleri: aynı komut dizisi hem motorda hem de geçici bir
// klasörde gerçek git ile, aynı saat ve kimlikle çalıştırılır. Ardından dallar, HEAD,
// index (aşamalarıyla), çalışma dizini ve her komutun çıkış kodu karşılaştırılır.
// Nesne kimlikleri gerçek Git'in biçimiyle hesaplandığı için commit kimlikleri de
// birebir tutmalıdır. "! " ile başlayan satırların çıktısı da karşılaştırılır.
// Makinede git yoksa testler atlanır.
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { BASLANGIC_SAATI, calistir, yeniOrtam, type Ortam } from "./index";
import { lsFiles } from "./temel";

const gitVar = spawnSync("git", ["--version"]).status === 0;
const kok = mkdtempSync(join(tmpdir(), "gitsim-"));
afterAll(() => rmSync(kok, { recursive: true, force: true }));

const GLOBAL = { "user.name": "Ayse Yilmaz", "user.email": "ayse@example.com", "init.defaultbranch": "main" };

interface Durum {
  refs: Record<string, string>;
  head: string;
  index: string;
  dosyalar: Record<string, string>;
  kodlar: boolean[];
  ciktilar: string[];
}

let sayac = 0;
function gercek(satirlar: string[]): Durum {
  const dizin = join(kok, `d${sayac++}`);
  const ev = join(dizin, "ev");
  const proje = join(dizin, "proje");
  mkdirSync(ev, { recursive: true });
  mkdirSync(proje, { recursive: true });
  const cfg = join(ev, ".gitconfig");
  writeFileSync(cfg, "[user]\n\tname = Ayse Yilmaz\n\temail = ayse@example.com\n[init]\n\tdefaultBranch = main\n[core]\n\tautocrlf = false\n[advice]\n\tdetachedHead = true\n[log]\n\tdecorate = short\n");
  let saat = BASLANGIC_SAATI;
  const kodlar: boolean[] = [];
  const ciktilar: string[] = [];
  for (const ham of satirlar) {
    const satir = ham.replace(/^! /, "");
    const env = {
      PATH: process.env.PATH!,
      HOME: ev,
      GIT_CONFIG_GLOBAL: cfg,
      GIT_CONFIG_NOSYSTEM: "1",
      GIT_AUTHOR_DATE: `@${saat} +0000`,
      GIT_COMMITTER_DATE: `@${saat} +0000`,
      GIT_EDITOR: "true",
      GIT_PAGER: "cat",
      LANG: "C",
      LC_ALL: "C",
    };
    const r = spawnSync("bash", ["-c", satir], { cwd: proje, env, encoding: "utf8" });
    kodlar.push(r.status === 0);
    if (ham.startsWith("! ")) ciktilar.push((r.stdout + r.stderr).replace(/\n$/, ""));
    saat += 60 * (satir.match(/(^|&& |; )git /g)?.length ?? 0);
  }
  const git = (...a: string[]) => execFileSync("git", a, { cwd: proje, encoding: "utf8", env: { PATH: process.env.PATH!, HOME: ev, GIT_CONFIG_GLOBAL: cfg } });
  const refs: Record<string, string> = {};
  for (const s of git("for-each-ref", "--format=%(objectname) %(refname)").split("\n").filter(Boolean)) {
    const [h, r] = s.split(" ");
    refs[r!] = h!;
  }
  let head: string;
  try {
    head = execFileSync("git", ["symbolic-ref", "-q", "HEAD"], { cwd: proje, encoding: "utf8" }).trim();
  } catch {
    head = git("rev-parse", "HEAD").trim();
  }
  const dosyalar: Record<string, string> = {};
  const gez = (k: string, onek: string) => {
    for (const ad of readdirSync(k)) {
      if (ad === ".git") continue;
      const tam = join(k, ad);
      if (statSync(tam).isDirectory()) gez(tam, `${onek}${ad}/`);
      else dosyalar[onek + ad] = readFileSync(tam, "utf8");
    }
  };
  gez(proje, "");
  return { refs, head, index: git("ls-files", "-s").replace(/\n$/, ""), dosyalar, kodlar, ciktilar };
}

function sanal(satirlar: string[]): Durum {
  let o: Ortam = yeniOrtam({ globalConfig: GLOBAL });
  const kodlar: boolean[] = [];
  const ciktilar: string[] = [];
  for (const ham of satirlar) {
    const r = calistir(o, ham.replace(/^! /, ""));
    o = r.ortam;
    kodlar.push(r.sonuc.kod === 0);
    if (ham.startsWith("! ")) ciktilar.push(r.sonuc.cikti);
  }
  const d = o.depo!;
  const head = d.head.tur === "ref" ? d.head.ref : d.head.hash;
  return { refs: { ...d.refs }, head, index: lsFiles(o, ["-s"]), dosyalar: o.dosyalar, kodlar, ciktilar };
}

function karsilastir(satirlar: string[]) {
  const g = gercek(satirlar);
  const s = sanal(satirlar);
  expect(s.kodlar, "çıkış kodları").toEqual(g.kodlar);
  expect(s.refs, "dallar ve etiketler").toEqual(g.refs);
  expect(s.head, "HEAD").toBe(g.head);
  expect(s.index, "index").toBe(g.index);
  expect(s.dosyalar, "çalışma dizini").toEqual(g.dosyalar);
  expect(s.ciktilar, "çıktılar").toEqual(g.ciktilar);
}

const ILK = ["git init", "echo 'merhaba' > README.md", "git add README.md", "git commit -m 'İlk commit'"];

const SENARYOLAR: Record<string, string[]> = {
  "ilk commit ve -am": [...ILK, "echo 'ikinci satır' >> README.md", "git commit -am 'README güncellendi'", "! git log --oneline", "! git status"],
  "durum çıktıları": [
    "git init",
    "! git status",
    "echo a > a.txt",
    "echo b > b.txt",
    "mkdir src",
    "echo c > src/c.js",
    "! git status",
    "! git status -s",
    "git add a.txt",
    "! git status -s",
    "git commit -m ilk",
    "echo değişti >> a.txt",
    "git add b.txt",
    "rm b.txt",
    "! git status -s",
    "! git status",
  ],
  "commit'lenecek bir şey yok": [...ILK, "! git commit -m 'boş'", "echo x > yeni.txt", "! git commit -m 'boş'", "echo y >> README.md", "! git commit -m 'boş'"],
  "dal ve fast-forward": [
    ...ILK,
    "git branch ozellik",
    "git switch ozellik",
    "echo 'özellik' > ozellik.txt",
    "git add .",
    "git commit -m 'Özellik eklendi'",
    "git switch main",
    "! git merge ozellik",
    "! git branch",
    "! git log --oneline",
  ],
  "üç yollu birleştirme": [
    ...ILK,
    "git switch -c ozellik",
    "echo 'a' > a.txt",
    "git add a.txt",
    "git commit -m 'a eklendi'",
    "git switch main",
    "echo 'b' > b.txt",
    "git add b.txt",
    "git commit -m 'b eklendi'",
    "git merge ozellik",
    "! git log --oneline --all",
  ],
  "dev dalına birleştirme mesajı": [...ILK, "git switch -c dev", "git switch -c ozellik", "echo x > x.txt", "git add x.txt", "git commit -m x", "git switch dev", "echo y > y.txt", "git add y.txt", "git commit -m y", "git merge ozellik", "! git log -1 --oneline"],
  "--no-ff": [...ILK, "git switch -c ozellik", "echo x > x.txt", "git add .", "git commit -m x", "git switch main", "git merge --no-ff ozellik"],
  "çakışma, çözüm ve commit": [
    "git init",
    "printf 'bir\\niki\\nüç\\n' > sayi.txt",
    "git add .",
    "git commit -m ilk",
    "git switch -c ozellik",
    "printf 'bir\\nİKİ\\nüç\\n' > sayi.txt",
    "git commit -am 'büyük harf'",
    "git switch main",
    "printf 'bir\\n2\\nüç\\n' > sayi.txt",
    "git commit -am rakam",
    "! git merge ozellik",
    "! git status -s",
    "! git switch ozellik",
    "printf 'bir\\n2 (İKİ)\\nüç\\n' > sayi.txt",
    "git add sayi.txt",
    "git commit -m 'Birleştirme: sayı çakışması çözüldü'",
  ],
  "merge --abort": [
    "git init",
    "echo bir > f.txt",
    "git add .",
    "git commit -m ilk",
    "git switch -c x",
    "echo iki > f.txt",
    "git commit -am iki",
    "git switch main",
    "echo üç > f.txt",
    "git commit -am üç",
    "git merge x",
    "git merge --abort",
  ],
  "çakışmada --theirs ve --ours": [
    "git init", "echo bir > f.txt", "echo a > g.txt", "git add .", "git commit -m ilk",
    "git switch -c x", "echo iki > f.txt", "echo b > g.txt", "git commit -am x",
    "git switch main", "echo üç > f.txt", "echo c > g.txt", "git commit -am m",
    "! git merge x", "! git checkout --theirs f.txt", "! git checkout --ours g.txt", "! git ls-files -s", "! git status -s",
    "git add .", "git commit -m birlesti",
  ],
  "silme ile değiştirme çakışması": ["git init", "echo bir > f.txt", "git add .", "git commit -m ilk", "git switch -c x", "git rm f.txt", "git commit -m sil", "git switch main", "echo iki > f.txt", "git commit -am iki", "git merge x"],
  "reset kipleri": [
    ...ILK,
    "echo 2 >> README.md",
    "git commit -am iki",
    "echo 3 >> README.md",
    "git commit -am üç",
    "git reset --soft HEAD~1",
    "! git status -s",
    "git reset HEAD~1",
    "! git status -s",
    "git reset --hard HEAD",
    "echo yeni > yeni.txt",
    "git add yeni.txt",
    "git reset --hard",
  ],
  "revert": [...ILK, "echo hata > hata.txt", "git add .", "git commit -m 'Hatalı özellik'", "echo düzgün >> README.md", "git commit -am düzgün", "git revert HEAD~1", "! git log --oneline"],
  "cherry-pick": [...ILK, "git switch -c ozellik", "echo a > a.txt", "git add .", "git commit -m a", "echo b > b.txt", "git add .", "git commit -m 'b düzeltmesi'", "git switch main", "git cherry-pick ozellik"],
  "cherry-pick çakışması ve abort": ["git init", "echo 1 > f", "git add .", "git commit -m 1", "git switch -c x", "echo 2 > f", "git commit -am 2", "git switch main", "echo 3 > f", "git commit -am 3", "git cherry-pick x", "git cherry-pick --abort"],
  "rebase": [
    ...ILK,
    "git switch -c ozellik",
    "echo a > a.txt",
    "git add .",
    "git commit -m a",
    "echo b > b.txt",
    "git add .",
    "git commit -m b",
    "git switch main",
    "echo m > m.txt",
    "git add .",
    "git commit -m m",
    "git switch ozellik",
    "git rebase main",
    "! git log --oneline",
  ],
  "rebase çakışması ve devam": [
    "git init",
    "echo 1 > f",
    "git add .",
    "git commit -m 1",
    "git switch -c x",
    "echo 2 > f",
    "git commit -am 2",
    "echo yeni > g",
    "git add g",
    "git commit -m g",
    "git switch main",
    "echo 3 > f",
    "git commit -am 3",
    "git switch x",
    "git rebase main",
    "echo 23 > f",
    "git add f",
    "git rebase --continue",
  ],
  "rebase abort": ["git init", "echo 1 > f", "git add .", "git commit -m 1", "git switch -c x", "echo 2 > f", "git commit -am 2", "git switch main", "echo 3 > f", "git commit -am 3", "git switch x", "git rebase main", "git rebase --abort"],
  "stash": [
    ...ILK,
    "echo değişiklik >> README.md",
    "echo yeni > yeni.txt",
    "git add yeni.txt",
    "! git stash",
    "! git stash list",
    "git stash pop",
    "! git status -s",
  ],
  "etiketler": [...ILK, "git tag v1.0", "echo 2 >> README.md", "git commit -am iki", "git tag -a v1.1 -m 'Sürüm 1.1'", "! git tag", "! git log --oneline"],
  "amend": [...ILK, "echo unutulan > unutulan.txt", "git add .", "git commit --amend -m 'İlk commit (tam)'", "git commit --amend --no-edit"],
  "rm, gitignore ve restore": [
    ...ILK,
    "echo SIFRE=123 > .env",
    "git add .env",
    "git commit -m 'env eklendi (hata)'",
    "git rm --cached .env",
    "echo .env > .gitignore",
    "git add .gitignore",
    "git commit -m 'env izlenmiyor'",
    "! git status -s",
    "echo log > a.log",
    "echo '*.log' >> .gitignore",
    "! git status -s",
    "! git add a.log",
    "echo x >> README.md",
    "git add README.md",
    "git restore --staged README.md",
    "git restore README.md",
  ],
  "kopuk HEAD": [...ILK, "echo 2 >> README.md", "git commit -am iki", "git checkout HEAD~1", "echo deneme > deneme.txt", "git add .", "git commit -m deneme", "git switch -c kurtarilan"],
  "alt klasörler ve mv": ["git init", "mkdir -p src/lib", "echo a > src/lib/a.js", "echo b > src/b.js", "echo c > c.md", "git add .", "git commit -m ilk", "git mv c.md docs.md", "git commit -m tasi", "! git ls-files"],
  "dal silme": [...ILK, "git switch -c x", "echo x > x", "git add .", "git commit -m x", "git switch main", "! git branch -d x", "! git branch -D x"],
  "yerel değişiklik dal geçişini durdurur": [
    "git init",
    "echo 1 > f",
    "git add .",
    "git commit -m 1",
    "git switch -c x",
    "echo 2 > f",
    "git commit -am 2",
    "git switch main",
    "echo yerel > f",
    "git switch x",
    "echo yeni > g",
    "git switch x",
  ],
  "commit çıktıları": ["git init", "echo a > a.txt", "git add .", "! git commit -m ilk", "echo b >> a.txt", "echo c > c.txt", "git add .", "! git commit -m ikinci", "git rm a.txt", "! git commit -m sil", "! git commit --allow-empty -m bos"],
  "diff çıktıları": [
    "git init",
    "printf 'bir\\niki\\nüç\\ndört\\nbeş\\naltı\\nyedi\\nsekiz\\ndokuz\\non\\n' > s.txt",
    "echo silinecek > sil.txt",
    "git add .",
    "git commit -m ilk",
    "printf 'bir\\nİKİ\\nüç\\ndört\\nbeş\\naltı\\nyedi\\nsekiz\\ndokuz\\nON\\non bir\\n' > s.txt",
    "! git diff",
    "git add s.txt",
    "! git diff",
    "! git diff --staged",
    "echo yeni > yeni.txt",
    "git add yeni.txt",
    "git rm -q sil.txt",
    "! git diff --cached",
    "git commit -m iki",
    "! git diff HEAD~1 HEAD --stat",
    "! git show --stat",
  ],
  "son satırında yeni satır olmayan dosya": ["git init", "printf 'a\\nb' > f", "git add .", "git commit -m ilk", "printf 'a\\nc' > f", "! git diff"],
  "kopuk HEAD çıktısı": [...ILK, "echo 2 >> README.md", "git commit -am iki", "! git checkout HEAD~1", "! git status", "! git branch", "! git switch -"],
  "iç yapı": [...ILK, "! git cat-file -t HEAD", "! git cat-file -p HEAD", "! git cat-file -p HEAD^{tree}", "! git ls-files -s", "! git rev-parse HEAD", "! git hash-object README.md", "! git show-ref"],
  "dosya bazlı reset ve checkout": [
    ...ILK,
    "echo 2 >> README.md",
    "git commit -am iki",
    "echo 3 >> README.md",
    "git add README.md",
    "! git reset README.md",
    "! git status -s",
    "git checkout -- README.md",
    "git checkout HEAD~1 -- README.md",
    "! git status -s",
  ],
  "dal yeniden adlandırma ve önceki dal": [...ILK, "git switch -c ozellik", "git branch -m yeni-ozellik", "! git branch", "git switch main", "! git switch -", "! git branch -m main"],
  "add/add çakışması": ["git init", "echo a > a", "git add .", "git commit -m a", "git switch -c x", "echo x > yeni", "git add .", "git commit -m x", "git switch main", "echo y > yeni", "git add .", "git commit -m y", "! git merge x", "! git ls-files -s"],
  "revert çakışması": [
    "git init",
    "echo 1 > f",
    "git add .",
    "git commit -m 1",
    "echo 2 > f",
    "git commit -am 2",
    "echo 3 > f",
    "git commit -am 3",
    "! git revert HEAD~1",
    "! git status",
    "echo 3 > f",
    "git add f",
    "! git revert --continue",
  ],
  "rebase atlama": ["git init", "echo 1 > f", "git add .", "git commit -m 1", "git switch -c x", "echo 2 > f", "git commit -am 2", "git switch main", "echo 3 > f", "git commit -am 3", "git switch x", "git rebase main", "git rebase --skip"],
  "rebase zaten güncel": [...ILK, "git switch -c x", "echo a > a", "git add .", "git commit -m a", "! git rebase main"],
  "cherry-pick birden çok": [...ILK, "git switch -c x", "echo a > a", "git add .", "git commit -m a", "echo b > b", "git add .", "git commit -m b", "git switch main", "git cherry-pick x~1 x"],
  "stash -u, apply ve drop": [
    ...ILK,
    "echo değişti >> README.md",
    "echo izlenmeyen > u.txt",
    "! git stash push -u -m 'yarım iş'",
    "! git status -s",
    "! git stash list",
    "git stash apply",
    "! git status -s",
    "! git stash drop",
    "! git stash list",
    "! git stash",
  ],
  "stash çakışması": ["git init", "echo 1 > f", "git add .", "git commit -m 1", "echo 2 > f", "git stash", "echo 3 > f", "git commit -am 3", "! git stash pop", "! git stash list"],
  "gitignore kalıpları": [
    "git init",
    "mkdir -p build logs src",
    "echo x > build/out.js",
    "echo x > logs/a.log",
    "echo x > logs/onemli.log",
    "echo x > src/app.js",
    "echo x > src/app.log",
    "printf 'build/\\n*.log\\n!onemli.log\\n' > .gitignore",
    "! git status -s",
    "git add .",
    "! git ls-files",
  ],
  "etiket hataları ve silme": [...ILK, "git tag v1", "! git tag v1", "! git tag -d v1", "! git tag -d v1"],
  "hatalı komutlar": [...ILK, "! git add yok.txt", "! git switch yok", "! git merge yok", "! git comit -m x", "! git branch 'bad name'", "! git log yok"],
  "kirli dizinde birleştirme": [...ILK, "git switch -c x", "echo x >> README.md", "git commit -am x", "git switch main", "echo yerel >> README.md", "! git merge x"],
  "değişmiş dosyayı rm": [...ILK, "echo x >> README.md", "! git rm README.md", "git rm --cached README.md", "! git status -s"],
  "kimlik yok": ["git init", "echo a > a", "git add .", "git -c user.name= commit -m a", "! git -c user.name=Mert commit -m a", "! git log -1"],
};

describe.skipIf(!gitVar)("sanal git gerçek git ile aynı sonucu verir", () => {
  it.each(Object.entries(SENARYOLAR))("%s", (_, satirlar) => karsilastir(satirlar));
});
