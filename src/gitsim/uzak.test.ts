// Uzak depo komutlarının doğruluk testleri: gitsim.test.ts'teki gibi aynı komutlar
// hem motorda hem gerçek git ile çalışır. Uzak depo, gerçek tarafta geçici klasörde
// çıplak (--bare) bir depodur; motorda aynı adresle açılan sanal uzak depodur.
// "URL" yazılan yerlere bu adres konur; "@ayse komut" ekip arkadaşının klasöründe çalışır.
// Projenin ve uzak deponun dalları, HEAD, index, çalışma dizini, çıkış kodları ve
// "! " ile başlayan satırların çıktısı karşılaştırılır.
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { BASLANGIC_SAATI, calistir, editorIcerigi, editorKaydet, ekipCalistir, yeniOrtam, type Ortam } from "./index";
import { lsFiles } from "./temel";
import { uzakBul, uzakOlustur } from "./uzak";

const gitVar = spawnSync("git", ["--version"]).status === 0;
const kok = mkdtempSync(join(tmpdir(), "gitsim-uzak-"));
afterAll(() => rmSync(kok, { recursive: true, force: true }));

const GLOBAL = { "user.name": "Ayse Yilmaz", "user.email": "ayse@example.com", "init.defaultbranch": "main" };

interface Durum {
  refs: Record<string, string>;
  head: string;
  index: string;
  dosyalar: Record<string, string>;
  uzakRefs: Record<string, string>;
  uzakHead: string;
  kodlar: boolean[];
  ciktilar: string[];
}

let sayac = 0;

// "git rebase -i ... # todo: pick 1, squash 2, reword 3": yapılacaklar listesinin yeni
// hâli (numara özgün satırın sırası; yazılmayan satır silinir). Aynı işlev gerçek
// tarafta GIT_SEQUENCE_EDITOR olarak çalışır.
function todoDuzenle(metin: string, tarif: string): string {
  const komutlar = metin.split("\n").filter((x) => x && !x.startsWith("#"));
  const yeni = tarif.split(",").map((p) => {
    const [fiil, n] = p.trim().split(/\s+/);
    return komutlar[Number(n) - 1]!.replace(/^\S+/, fiil!);
  });
  return yeni.join("\n") + "\n";
}
const todoTarifi = (satir: string) => /# todo: (.*)$/.exec(satir)?.[1];

function gercek(satirlar: string[], url: string, dizin: string): Durum {
  const ev = join(dizin, "ev");
  const proje = join(dizin, "proje");
  for (const k of [ev, proje, join(dizin, "ayse"), join(dizin, "mert")]) mkdirSync(k, { recursive: true });
  const cfg = join(ev, ".gitconfig");
  writeFileSync(cfg, "[user]\n\tname = Ayse Yilmaz\n\temail = ayse@example.com\n[init]\n\tdefaultBranch = main\n[core]\n\tautocrlf = false\n[advice]\n\tdetachedHead = true\n[log]\n\tdecorate = short\n");
  const temelEnv = { PATH: process.env.PATH!, HOME: ev, GIT_CONFIG_GLOBAL: cfg, GIT_CONFIG_NOSYSTEM: "1" };
  execFileSync("git", ["init", "-q", "--bare", "--initial-branch=main", url], { env: temelEnv });
  let saat = BASLANGIC_SAATI;
  const kodlar: boolean[] = [];
  const ciktilar: string[] = [];
  for (const ham of satirlar) {
    let satir = ham.replace(/^! /, "");
    let cwd = proje;
    const ekip = /^@(\w+) (.*)$/.exec(satir);
    if (ekip) {
      cwd = join(dizin, ekip[1]!);
      satir = ekip[2]!;
    }
    const env: Record<string, string> = { ...temelEnv, GIT_AUTHOR_DATE: `@${saat} +0000`, GIT_COMMITTER_DATE: `@${saat} +0000`, GIT_EDITOR: "true", GIT_PAGER: "cat", LANG: "C", LC_ALL: "C" };
    const tarif = todoTarifi(satir);
    if (tarif) {
      const betik = join(dizin, "todo.cjs");
      writeFileSync(betik, `const fs = require("fs");\nconst todoDuzenle = ${todoDuzenle.toString()};\nfs.writeFileSync(process.argv[2], todoDuzenle(fs.readFileSync(process.argv[2], "utf8"), ${JSON.stringify(tarif)}));\n`);
      env.GIT_SEQUENCE_EDITOR = `node ${betik}`;
    }
    const r = spawnSync("bash", ["-c", satir], { cwd, env, encoding: "utf8" });
    kodlar.push(r.status === 0);
    // Terminaldeki gibi: \r ile başa dönen ilerleme satırlarının yalnızca sonu kalır
    if (ham.startsWith("! ")) ciktilar.push((r.stdout + r.stderr).replace(/\n$/, "").split("\n").map((x) => x.slice(x.lastIndexOf("\r") + 1).replace(/\x1b\[K/g, "")).join("\n"));
    saat += 60 * (satir.match(/(^|&& |; )git /g)?.length ?? 0);
  }
  const git = (gitDir: string, ...a: string[]) => execFileSync("git", ["--git-dir", gitDir, ...a], { encoding: "utf8", env: temelEnv });
  const refler = (gitDir: string) => {
    const r: Record<string, string> = {};
    for (const s of git(gitDir, "for-each-ref", "--format=%(objectname) %(refname)").split("\n").filter(Boolean)) {
      const [h, ref] = s.split(" ");
      r[ref!] = h!;
    }
    return r;
  };
  const projeGit = join(proje, ".git");
  let head = "";
  try {
    head = git(projeGit, "symbolic-ref", "-q", "HEAD").trim();
  } catch {
    head = git(projeGit, "rev-parse", "HEAD").trim();
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
  return {
    refs: refler(projeGit),
    head,
    index: execFileSync("git", ["ls-files", "-s"], { cwd: proje, encoding: "utf8", env: temelEnv }).replace(/\n$/, ""),
    dosyalar,
    uzakRefs: refler(url),
    uzakHead: git(url, "symbolic-ref", "HEAD").trim(),
    kodlar,
    ciktilar,
  };
}

function sanal(satirlar: string[], url: string): Durum {
  let o: Ortam = yeniOrtam({ globalConfig: GLOBAL });
  uzakOlustur(o, url);
  const kodlar: boolean[] = [];
  const ciktilar: string[] = [];
  for (const ham of satirlar) {
    const satir = ham.replace(/^! /, "");
    const ekip = /^@(\w+) (.*)$/.exec(satir);
    let r = ekip ? ekipCalistir(o, ekip[1]!, ekip[2]!, GLOBAL) : calistir(o, satir);
    // Editör: yapılacaklar listesi tarife göre düzenlenir, mesaj olduğu gibi kaydedilir
    const parcalar: string[] = [r.sonuc.cikti];
    while (r.sonuc.editor && !ekip) {
      const yol = r.sonuc.editor;
      const tarif = todoTarifi(satir);
      const metin = editorIcerigi(r.ortam, yol);
      r = editorKaydet(r.ortam, yol, yol.endsWith("git-rebase-todo") && tarif ? todoDuzenle(metin, tarif) : metin);
      parcalar.push(r.sonuc.cikti);
    }
    r = { ...r, sonuc: { ...r.sonuc, cikti: parcalar.filter(Boolean).join("\n") } };
    o = r.ortam;
    kodlar.push(r.sonuc.kod === 0);
    if (ham.startsWith("! ")) ciktilar.push(r.sonuc.cikti);
  }
  const d = o.depo!;
  const u = uzakBul(o, url)!;
  return {
    refs: { ...d.refs },
    head: d.head.tur === "ref" ? d.head.ref : d.head.hash,
    index: lsFiles(o, ["-s"]),
    dosyalar: o.dosyalar,
    uzakRefs: { ...u.refs },
    uzakHead: u.head.tur === "ref" ? u.head.ref : "",
    kodlar,
    ciktilar,
  };
}

function karsilastir(sablon: string[]) {
  const dizin = join(kok, `d${sayac++}`);
  const url = join(dizin, "uzak", "kafe.git");
  const satirlar = sablon.map((s) => s.replaceAll("URL", url));
  const g = gercek(satirlar, url, dizin);
  const s = sanal(satirlar, url);
  expect(s.kodlar, "çıkış kodları").toEqual(g.kodlar);
  expect(s.ciktilar, "çıktılar").toEqual(g.ciktilar);
  expect(s.refs, "dallar ve etiketler").toEqual(g.refs);
  expect(s.head, "HEAD").toBe(g.head);
  expect(s.index, "index").toBe(g.index);
  expect(s.dosyalar, "çalışma dizini").toEqual(g.dosyalar);
  expect(s.uzakRefs, "uzak deponun dalları").toEqual(g.uzakRefs);
  expect(s.uzakHead, "uzak HEAD").toBe(g.uzakHead);
}

const ILK = ["git init", "echo 'merhaba' > README.md", "git add README.md", "git commit -m 'İlk commit'"];
// Proje uzak depoya bağlanmış ve main push edilmiş; Ayşe klonlamış
const BAGLI = [...ILK, "git remote add origin URL", "git push -u origin main", "@ayse git clone URL ."];

const SENARYOLAR: Record<string, string[]> = {
  "remote add, -v, ilk push": [...ILK, "git remote add origin URL", "! git remote -v", "! git push", "! git push origin main", "! git status", "! git log --oneline"],
  "push -u ve izleme": [...ILK, "git remote add origin URL", "git push -u origin main", "! git status", "! git branch -vv", "echo iki >> README.md", "git commit -am iki", "! git status", "! git push", "! git status"],
  "boş depoyu klonla": ["git clone URL .", "! git status", "echo a > a.txt", "git add .", "git commit -m a", "git config --get branch.main.merge", "git push", "git status"],
  "klonla ve fetch/pull": [
    ...BAGLI,
    "@ayse echo ayse >> README.md",
    "@ayse git commit -am 'Ayşe değişikliği'",
    "@ayse git push",
    "! git status",
    "! git fetch",
    "! git status",
    "! git log --oneline --all",
    "! git pull",
    "! git status",
  ],
  "push reddi: fetch first": [...BAGLI, "@ayse echo ayse > a.txt", "@ayse git add .", "@ayse git commit -m a", "@ayse git push", "echo ben > b.txt", "git add .", "git commit -m b", "! git push"],
  "push reddi: non-fast-forward ve ayrışmış pull": [
    ...BAGLI,
    "@ayse echo ayse > a.txt",
    "@ayse git add .",
    "@ayse git commit -m a",
    "@ayse git push",
    "echo ben > b.txt",
    "git add .",
    "git commit -m b",
    "git fetch",
    "! git status",
    "! git push",
    "! git pull",
    "! git pull --no-rebase",
    "! git log --oneline",
    "git push",
  ],
  "pull --rebase": [
    ...BAGLI,
    "@ayse echo ayse > a.txt",
    "@ayse git add .",
    "@ayse git commit -m a",
    "@ayse git push",
    "echo ben > b.txt",
    "git add .",
    "git commit -m b",
    "! git pull --rebase",
    "! git log --oneline",
    "! git push",
  ],
  "pull çakışması": [
    ...BAGLI,
    "@ayse echo ayse > README.md",
    "@ayse git commit -am a",
    "@ayse git push",
    "echo ben > README.md",
    "git commit -am b",
    "git pull --no-rebase",
    "! git status",
    "echo birlesik > README.md",
    "git add .",
    "git commit --no-edit",
    "git push",
  ],
  "yeni dal push ve uzaktan dal": [
    ...BAGLI,
    "git switch -c ozellik",
    "echo x > x.txt",
    "git add .",
    "git commit -m x",
    "! git push",
    "git push -u origin ozellik",
    "@ayse git fetch",
    "@ayse git switch ozellik",
    "! git branch -a",
    "! git branch -vv",
  ],
  "dal silme ve prune": [
    ...BAGLI,
    "git switch -c eski",
    "git push -u origin eski",
    "git switch main",
    "@ayse git fetch",
    "! git push origin --delete eski",
    "! git branch -a",
    "@ayse git branch -r",
    "! @ayse git fetch --prune",
  ],
  "force ve force-with-lease": [
    ...BAGLI,
    "echo iki >> README.md",
    "git commit -am iki",
    "git push",
    "git commit --amend -m 'iki (düzeltildi)'",
    "! git push",
    "! git push --force-with-lease",
    "@ayse git pull --rebase",
    "@ayse echo a > a.txt",
    "@ayse git add .",
    "@ayse git commit -m a",
    "@ayse git push",
    "git commit --amend -m 'iki (yine)'",
    "! git push --force-with-lease",
    "git fetch",
    "! git status",
  ],
  "etiket push": [...BAGLI, "git tag v1.0", "! git push origin v1.0", "@ayse git fetch", "@ayse git tag"],
  "remote rename ve remove": [...BAGLI, "git remote rename origin github", "! git remote", "! git branch -vv", "! git status", "git remote remove github", "! git remote", "! git branch -a"],
  "dolu depoyu klonla": [
    "@ayse git init",
    "@ayse echo a > a.txt",
    "@ayse git add .",
    "@ayse git commit -m a",
    "@ayse git tag v1",
    "@ayse git switch -c dev",
    "@ayse echo d > d.txt",
    "@ayse git add .",
    "@ayse git commit -m d",
    "@ayse git remote add origin URL",
    "@ayse git push origin main dev v1",
    "git clone URL .",
    "! git log --oneline --all",
    "! git branch -a",
    "! git status",
    "! git switch dev",
    "! git branch -vv",
  ],
  "etkileşimli rebase: squash ve reword": [
    ...ILK,
    "echo 2 >> README.md", "git commit -am iki",
    "echo 3 >> README.md", "git commit -am üç",
    "echo 4 >> README.md", "git commit -am dört",
    "! git rebase -i HEAD~3 # todo: pick 1, squash 2, reword 3",
    "! git log --oneline",
    "! git log -2",
  ],
  "etkileşimli rebase: sıra, drop ve fixup": [
    ...ILK,
    "echo a > a.txt", "git add .", "git commit -m a",
    "echo b > b.txt", "git add .", "git commit -m b",
    "echo c > c.txt", "git add .", "git commit -m c",
    "echo d > d.txt", "git add .", "git commit -m d",
    "! git rebase -i HEAD~4 # todo: pick 3, pick 1, fixup 4",
    "! git log --oneline",
    "! git status",
  ],
  "etkileşimli rebase: çakışma ve continue": [
    ...ILK,
    "echo 2 >> README.md", "git commit -am iki",
    "echo 3 >> README.md", "git commit -am üç",
    "! git rebase -i HEAD~2 # todo: pick 2, pick 1",
    "! git status",
    "printf 'merhaba\\n3\\n' > README.md",
    "git add README.md",
    "! git rebase --continue",
  ],
  "upstream olmadan pull": [...ILK, "git remote add origin URL", "git push origin main", "! git pull"],
};

describe.skipIf(!gitVar)("uzak depo komutları gerçek git ile aynı sonucu verir", () => {
  it.each(Object.entries(SENARYOLAR))("%s", (_, satirlar) => karsilastir(satirlar));
});
