// Temel Git komutları: init, config, status, add, rm, mv, restore, commit, log,
// diff, show, ls-files, cat-file, hash-object, rev-parse, show-ref.
import {
  ayar,
  coz,
  commitAgaci,
  commitOku,
  cozYumusak,
  DAL,
  dalAdi,
  depoGerekli,
  durum,
  ETIKET,
  gecerliDal,
  gecmis,
  headCommit,
  headIlerlet,
  izlenmeyenOzet,
  kisa,
  kisi,
  UZAK,
  yeniDepo,
  yokSaymaKurallari,
  yokSayilir,
} from "./depo";
import { farkParcalari } from "./fark";
import { agacAc, agacYaz, blobIcerigi, blobYaz, GitHatasi, nesneKimligi, oku } from "./nesne";
import type { Commit, Depo, Ortam } from "./tipler";
import { ayir, degisimOzeti, eslesir, goreli, ilk, KOK, mesajTemizle, ozetSatiri, tarih, var_, yolCoz } from "./yardim";

export function init(o: Ortam, args: string[]): string {
  const a = ayir(args, ["-b", "--initial-branch"]);
  if (o.cwd) throw new GitHatasi("fatal: bu sanal ortamda depo yalnızca proje kökünde açılır; önce `cd /proje` yaz");
  if (o.depo) return `Reinitialized existing Git repository in ${KOK}/.git/`;
  const dal = ilk(a, "-b", "--initial-branch") ?? ayar(o, "init.defaultbranch") ?? "master";
  o.depo = yeniDepo(dal);
  const ipucu = ayar(o, "init.defaultbranch") || ilk(a, "-b", "--initial-branch")
    ? ""
    : "hint: Using 'master' as the name for the initial branch. This default branch name\nhint: is subject to change. To configure the initial branch name to use in all\nhint: of your new repositories, which will suppress this warning, call:\nhint:\nhint: \tgit config --global init.defaultBranch <name>\n";
  return `${ipucu}Initialized empty Git repository in ${KOK}/.git/`;
}

export function config(o: Ortam, args: string[]): string {
  const a = ayir(args);
  const global = var_(a, "--global");
  const hedef = (): Record<string, string> => (global ? o.globalConfig : depoGerekli(o).config);
  if (var_(a, "--list", "-l")) {
    const satir = (k: Record<string, string>) => Object.entries(k).map(([x, y]) => `${x}=${y}`);
    if (global) return satir(o.globalConfig).join("\n");
    if (var_(a, "--local")) return satir(depoGerekli(o).config).join("\n");
    return [...satir(o.globalConfig), ...(o.depo ? satir(o.depo.config) : [])].join("\n");
  }
  const [anahtar, deger] = a.kalan;
  if (!anahtar) throw new GitHatasi("usage: git config [<options>]", 129);
  if (!/^[a-zA-Z][\w-]*(\.[^\s]+)?\.[a-zA-Z][\w-]*$/.test(anahtar)) throw new GitHatasi(`error: key does not contain a section: ${anahtar}`, 1);
  const k = anahtar.toLowerCase().replace(/^([^.]+)\.(.+)\.([^.]+)$/, (_, b: string, o_: string, s: string) => `${b}.${o_}.${s}`);
  if (var_(a, "--unset")) {
    delete hedef()[k];
    return "";
  }
  if (deger === undefined) {
    const v = global ? o.globalConfig[k] : var_(a, "--local") ? depoGerekli(o).config[k] : ayar(o, k);
    if (v === undefined) throw new GitHatasi("", 1);
    return v;
  }
  hedef()[k] = deger;
  return "";
}

// ---- status ----

export function status(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const s = durum(o, d);
  const kisaCikti = var_(a, "-s", "--short");
  const dalSatiri = var_(a, "-b", "--branch");
  const dal = gecerliDal(d);
  const commitYok = headCommit(d) === null;
  const izlenmeyen = izlenmeyenOzet(d, s.izlenmeyen);
  if (kisaCikti) {
    const satirlar: string[] = [];
    if (dalSatiri) satirlar.push(dal ? (commitYok ? `## No commits yet on ${dalAdi(dal)}` : `## ${dalAdi(dal)}`) : "## HEAD (no branch)");
    const harita = new Map<string, [string, string]>();
    const harf = { "new file": "A", modified: "M", deleted: "D" } as const;
    for (const x of s.hazir) harita.set(x.yol, [harf[x.tur], " "]);
    for (const x of s.hazirDegil) harita.set(x.yol, [harita.get(x.yol)?.[0] ?? " ", harf[x.tur]]);
    const cat = { "both modified": "UU", "both added": "AA", "deleted by them": "UD", "deleted by us": "DU" } as Record<string, string>;
    for (const x of s.catisma) harita.set(x.yol, [cat[x.tur]![0]!, cat[x.tur]![1]!]);
    for (const [yol, [x, y]] of [...harita].sort((p, q) => (p[0] < q[0] ? -1 : 1))) satirlar.push(`${x}${y} ${goreli(o, yol)}`);
    for (const y of izlenmeyen) satirlar.push(`?? ${goreli(o, y)}`);
    return satirlar.join("\n");
  }
  const c: string[] = [];
  if (dal) c.push(`On branch ${dalAdi(dal)}`);
  else c.push(`HEAD detached at ${kisa(headCommit(d)!)}`);
  if (d.bisect) {
    const b = d.bisect.baslangic;
    c.push(`You are currently bisecting, started from branch '${b}'.`, '  (use "git bisect reset" to get back to the original branch)');
  }
  const islem = d.islem;
  if (islem?.tur === "rebase") {
    c[0] = `interactive rebase in progress; onto ${kisa(islem.onto)}`;
    if (islem.etkilesimli && islem.yapilan) {
      const n = islem.yapilan.length;
      c.push(`Last command${n === 1 ? "" : "s"} done (${n} command${n === 1 ? "" : "s"} done):`, ...islem.yapilan.slice(-2).map((x) => `   ${x}`));
      if (n > 2) c.push("  (see more in file .git/rebase-merge/done)");
      const kalan = islem.komutlar ?? [];
      if (kalan.length) {
        const m = kalan.length;
        c.push(`Next command${m === 1 ? "" : "s"} to do (${m} remaining command${m === 1 ? "" : "s"}):`, ...kalan.slice(0, 2).map((k) => `   ${k.islem} ${kisa(k.hash)} ${ozetSatiri(commitOku(d, k.hash).mesaj)}`), '  (use "git rebase --edit-todo" to view and edit)');
      } else c.push("No commands remaining.");
    }
    c.push(`You are currently rebasing branch '${islem.dal ? dalAdi(islem.dal) : "HEAD"}' on '${kisa(islem.onto)}'.`);
    c.push(s.catisma.length ? '  (fix conflicts and then run "git rebase --continue")' : '  (all conflicts fixed: run "git rebase --continue")');
    c.push('  (use "git rebase --skip" to skip this patch)', '  (use "git rebase --abort" to check out the original branch)');
  }
  if (islem?.tur === "cherry-pick" || islem?.tur === "revert") {
    const ad = islem.tur === "cherry-pick" ? "cherry-picking" : "reverting";
    c.push(`You are currently ${ad} commit ${kisa(islem.commit)}.`);
    c.push(s.catisma.length ? '  (fix conflicts and run "git ' + islem.tur + ' --continue")' : '  (all conflicts fixed: run "git ' + islem.tur + ' --continue")');
    c.push(`  (use "git ${islem.tur} --skip" to skip this patch)`, `  (use "git ${islem.tur} --abort" to cancel the ${islem.tur} operation)`);
  }
  const upstream = upstreamSatiri(d);
  if (upstream) c.push(upstream);
  if (commitYok) c.push("", "No commits yet", "");
  if (islem?.tur === "merge") {
    if (upstream) bosluk(c);
    if (s.catisma.length) c.push("You have unmerged paths.", '  (fix conflicts and run "git commit")', '  (use "git merge --abort" to abort the merge)');
    else c.push("All conflicts fixed but you are still merging.", '  (use "git commit" to conclude merge)');
  }
  if (s.hazir.length) {
    bosluk(c);
    c.push("Changes to be committed:", commitYok ? '  (use "git rm --cached <file>..." to unstage)' : '  (use "git restore --staged <file>..." to unstage)');
    for (const x of s.hazir) c.push(`\t${(x.tur + ":").padEnd(12)}${goreli(o, x.yol)}`);
  }
  if (s.catisma.length) {
    bosluk(c);
    c.push("Unmerged paths:");
    if (!islem || islem.tur === "revert" || (islem.tur === "rebase" && islem.etkilesimli)) c.push('  (use "git restore --staged <file>..." to unstage)');
    c.push('  (use "git add <file>..." to mark resolution)');
    for (const x of s.catisma) c.push(`\t${(x.tur + ":").padEnd(17)}${goreli(o, x.yol)}`);
  }
  if (s.hazirDegil.length) {
    bosluk(c);
    c.push("Changes not staged for commit:", `  (use "git add${s.hazirDegil.some((x) => x.tur === "deleted") ? "/rm" : ""} <file>..." to update what will be committed)`, '  (use "git restore <file>..." to discard changes in working directory)');
    for (const x of s.hazirDegil) c.push(`\t${(x.tur + ":").padEnd(12)}${goreli(o, x.yol)}`);
  }
  if (izlenmeyen.length) {
    bosluk(c);
    c.push("Untracked files:", '  (use "git add <file>..." to include in what will be committed)');
    for (const y of izlenmeyen) c.push(`\t${goreli(o, y)}`);
  }
  bosluk(c);
  if (s.hazir.length) {
    // Git burada son bir boş satır bırakır
  } else if (s.hazirDegil.length || s.catisma.length) c.push('no changes added to commit (use "git add" and/or "git commit -a")');
  else if (izlenmeyen.length) c.push('nothing added to commit but untracked files present (use "git add" to track)');
  else if (commitYok) c.push('nothing to commit (create/copy files and use "git add" to track)');
  else c.push("nothing to commit, working tree clean");
  return c.join("\n");
}

// Bölümler arasına (başlık satırlarından hemen sonra değil) boş satır
function bosluk(c: string[]) {
  const son = c[c.length - 1];
  if (son !== "" && !/^(On branch|HEAD detached)/.test(son ?? "")) c.push("");
}

// "Your branch is ahead of 'origin/main' by 2 commits." (uzak depo varsa)
export function upstreamSatiri(d: Depo): string | null {
  const dal = gecerliDal(d);
  if (!dal) return null;
  const ad = dalAdi(dal);
  const uzak = d.config[`branch.${ad}.remote`];
  const birlesim = d.config[`branch.${ad}.merge`];
  if (!uzak || !birlesim) return null;
  const uzakRef = `${UZAK}${uzak}/${dalAdi(birlesim)}`;
  const u = d.refs[uzakRef];
  const h = headCommit(d);
  const gosterim = `${uzak}/${dalAdi(birlesim)}`;
  // Henüz commit'i olmayan dalda Git upstream'den söz etmez
  if (!u && !h) return null;
  if (!u) return `Your branch is based on '${gosterim}', but the upstream is gone.\n  (use "git branch --unset-upstream" to fixup)`;
  if (!h) return null;
  const once = gecmis(d, [h], [u]).length;
  const geri = gecmis(d, [u], [h]).length;
  const commits = (n: number) => `${n} commit${n === 1 ? "" : "s"}`;
  if (!once && !geri) return `Your branch is up to date with '${gosterim}'.`;
  if (once && !geri) return `Your branch is ahead of '${gosterim}' by ${commits(once)}.\n  (use "git push" to publish your local commits)`;
  if (!once && geri) return `Your branch is behind '${gosterim}' by ${commits(geri)}, and can be fast-forwarded.\n  (use "git pull" to update your local branch)`;
  return `Your branch and '${gosterim}' have diverged,\nand have ${once} and ${geri} different commits each, respectively.\n  (use "git pull" if you want to integrate the remote branch with yours)`;
}

// ---- add, rm, mv, restore ----

function yolListesi(o: Ortam, a: { kalan: string[]; yollar: string[] | null }): string[] {
  return [...a.kalan, ...(a.yollar ?? [])].map((x) => yolCoz(o, x));
}

export function add(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  if (var_(a, "-p", "--patch", "-i", "--interactive")) throw new GitHatasi("bu sandbox'ta parça parça ekleme (-p) yok; dosyaları tek tek ekleyebilirsin", 1);
  const tumu = var_(a, "-A", "--all");
  const yalnizIzlenen = var_(a, "-u", "--update");
  const zorla = var_(a, "-f", "--force");
  let specler = yolListesi(o, a);
  if (!specler.length) {
    if (tumu || yalnizIzlenen) specler = [""];
    else return "Nothing specified, nothing added.\nhint: Maybe you wanted to say 'git add .'?";
  }
  const kurallar = yokSaymaKurallari(o);
  const yoksayilanlar: string[] = [];
  for (const spec of specler) {
    const adaylar = new Set([...Object.keys(o.dosyalar), ...Object.keys(d.index), ...Object.keys(d.catisma)].filter((y) => eslesir(y, spec)));
    if (!adaylar.size) throw new GitHatasi(`fatal: pathspec '${goreli(o, spec) || "."}' did not match any files`);
    for (const yol of adaylar) {
      const izleniyor = yol in d.index || !!d.catisma[yol];
      if (yalnizIzlenen && !izleniyor) continue;
      if (yol in o.dosyalar) {
        if (!izleniyor && !zorla && yokSayilir(kurallar, yol)) {
          if (spec === yol) yoksayilanlar.push(yol);
          continue;
        }
        d.index[yol] = blobYaz(d, o.dosyalar[yol]!);
      } else delete d.index[yol];
      delete d.catisma[yol];
    }
  }
  if (yoksayilanlar.length)
    throw new GitHatasi(`The following paths are ignored by one of your .gitignore files:\n${yoksayilanlar.join("\n")}\nhint: Use -f if you really want to add them.\nhint: Turn this message off by running\nhint: "git config advice.addIgnoredFile false"`, 1);
  return "";
}

export function rm(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const cached = var_(a, "--cached");
  const zorla = var_(a, "-f", "--force");
  const ozyineli = var_(a, "-r");
  const head = commitAgaci(d, headCommit(d));
  const silinecek: string[] = [];
  for (const spec of yolListesi(o, a)) {
    const eslesen = Object.keys(d.index).filter((y) => eslesir(y, spec));
    if (!eslesen.length) throw new GitHatasi(`fatal: pathspec '${goreli(o, spec)}' did not match any files`);
    if (!ozyineli && !eslesen.includes(spec) && !/[*?]/.test(spec)) throw new GitHatasi(`fatal: not removing '${goreli(o, spec)}' recursively without -r`);
    silinecek.push(...eslesen);
  }
  if (!zorla) {
    const yerel = silinecek.filter((y) => {
      const ix = d.index[y]!;
      const calisan = o.dosyalar[y];
      const staged = ix !== head[y];
      const unstaged = calisan !== undefined && calisan !== blobIcerigi(d, ix);
      return cached ? staged && unstaged : staged || unstaged;
    });
    if (yerel.length)
      throw new GitHatasi(
        `error: the following file${yerel.length > 1 ? "s have" : " has"} local modifications:\n${yerel.map((y) => "    " + y).join("\n")}\n(use --cached to keep the file, or -f to force removal)`,
        1,
      );
  }
  const c: string[] = [];
  for (const y of [...new Set(silinecek)].sort()) {
    delete d.index[y];
    if (!cached) delete o.dosyalar[y];
    c.push(`rm '${y}'`);
  }
  return c.join("\n");
}

export function mv(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const [kaynak, hedef] = yolListesi(o, a);
  if (kaynak === undefined || hedef === undefined) throw new GitHatasi("usage: git mv [<options>] <source>... <destination>", 129);
  if (!(kaynak in d.index)) throw new GitHatasi(`fatal: not under version control, source=${kaynak}, destination=${hedef}`);
  const hedefYol = Object.keys(o.dosyalar).some((y) => y.startsWith(hedef + "/")) || o.klasorler.includes(hedef) ? `${hedef}/${kaynak.split("/").pop()}` : hedef;
  if (hedefYol in o.dosyalar && !var_(a, "-f")) throw new GitHatasi(`fatal: destination exists, source=${kaynak}, destination=${hedefYol}`);
  d.index[hedefYol] = d.index[kaynak]!;
  delete d.index[kaynak];
  if (kaynak in o.dosyalar) {
    o.dosyalar[hedefYol] = o.dosyalar[kaynak]!;
    delete o.dosyalar[kaynak];
  }
  return "";
}

export function restore(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-s", "--source"]);
  const staged = var_(a, "--staged", "-S");
  const worktree = var_(a, "--worktree", "-W") || !staged;
  const kaynakRev = ilk(a, "-s", "--source");
  const specler = yolListesi(o, a);
  if (!specler.length) throw new GitHatasi("fatal: you must specify path(s) to restore");
  const head = commitAgaci(d, headCommit(d));
  const kaynak = kaynakRev ? commitAgaci(d, coz(d, kaynakRev)) : staged ? head : null;
  for (const spec of specler) {
    const evren = new Set([...Object.keys(d.index), ...Object.keys(head), ...Object.keys(kaynak ?? {}), ...Object.keys(d.catisma)]);
    const eslesen = [...evren].filter((y) => eslesir(y, spec));
    if (!eslesen.length) throw new GitHatasi(`error: pathspec '${goreli(o, spec)}' did not match any file(s) known to git`, 1);
    for (const y of eslesen) {
      if (staged) {
        const h = (kaynak ?? head)[y];
        if (h) d.index[y] = h;
        else delete d.index[y];
        delete d.catisma[y];
      }
      if (worktree) {
        if (!staged && !kaynakRev && d.catisma[y]) throw new GitHatasi(`error: path '${y}' is unmerged`, 1);
        const h = kaynak ? kaynak[y] : d.index[y];
        if (h) o.dosyalar[y] = blobIcerigi(d, h);
        else if (kaynak || y in d.index) delete o.dosyalar[y];
      }
    }
  }
  return "";
}

// ---- commit ----

export interface CommitSecenek {
  mesaj?: string;
  amend?: boolean;
  bosIzin?: boolean;
}

export function commit(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-m", "--message", "-C", "-c"]);
  const mesajlar = a.deger.get("-m") ?? a.deger.get("--message");
  const amend = var_(a, "--amend");
  if (var_(a, "-a", "--all")) {
    for (const y of Object.keys(d.index)) {
      if (y in o.dosyalar) d.index[y] = blobYaz(d, o.dosyalar[y]!);
      else delete d.index[y];
    }
  }
  if (Object.keys(d.catisma).length)
    throw new GitHatasi(
      "error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.",
    );
  const head = headCommit(d);
  const islem = d.islem;
  let mesaj: string | undefined;
  if (mesajlar) mesaj = mesajlar.join("\n\n");
  else if (amend && head) mesaj = commitOku(d, head).mesaj;
  else if (islem && islem.tur !== "rebase") {
    mesaj = islem.mesaj;
    // --no-edit'te editör açılmadığı için "# Conflicts:" notu mesajda kalır
    if (islem.tur === "merge" && var_(a, "--no-edit") && islem.catismalar?.length) mesaj += `\n# Conflicts:\n${islem.catismalar.map((y) => `#\t${y}`).join("\n")}\n`;
  }
  if (mesaj === undefined)
    throw new GitHatasi("hint: Waiting for your editor to close the file...\nAborting commit due to empty commit message.\n(Bu sandbox'ta editör açılmaz: mesajı -m \"...\" ile ver.)", 1);
  mesaj = mesajTemizle(mesaj);
  if (!mesaj) throw new GitHatasi("Aborting commit due to empty commit message.", 1);
  if (amend && !head) throw new GitHatasi("fatal: You have nothing to amend.");
  const ebeveynler = amend ? commitOku(d, head!).ebeveynler : head ? [head] : [];
  if (!amend && islem?.tur === "merge") ebeveynler.push(islem.onlar);
  const agac = agacYaz(d, d.index);
  const oncekiAgac = head ? commitOku(d, head).agac : agacYaz(d, {});
  if (agac === oncekiAgac && !amend && islem?.tur !== "merge" && !var_(a, "--allow-empty")) throw new GitHatasi(status(o, []), 1);
  const ben = kisi(o);
  const yazar = amend ? commitOku(d, head!).yazar : islem?.tur === "cherry-pick" ? islem.yazar : ben;
  const c: Commit = { tur: "commit", agac, ebeveynler, yazar, isleyen: ben, mesaj };
  const h = blobsuzYaz(d, c);
  const tur = amend ? " (amend)" : ebeveynler.length === 0 ? " (initial)" : ebeveynler.length > 1 ? " (merge)" : "";
  headIlerlet(d, h, `commit${tur}: ${ozetSatiri(mesaj)}`);
  if (islem && islem.tur !== "rebase") d.islem = null;
  const dal = gecerliDal(d);
  const baslik = `[${dal ? dalAdi(dal) : "detached HEAD"}${ebeveynler.length === 0 ? " (root-commit)" : ""} ${kisa(h)}] ${ozetSatiri(mesaj)}`;
  const ozet = degisimOzeti(d, ebeveynler[0] ? commitAgaci(d, ebeveynler[0]) : {}, d.index);
  return [baslik, ...(amend ? [` Date: ${tarih(yazar.zaman)}`] : []), ...(ozet ? [ozet] : [])].join("\n");
}

const blobsuzYaz = (d: Depo, c: Commit) => {
  const h = nesneKimligi(c);
  d.nesneler[h] ??= c;
  return h;
};

// ---- log, show, diff ----

export function suslemeler(d: Depo, h: string): string {
  const s: string[] = [];
  const dal = gecerliDal(d);
  if (headCommit(d) === h) s.push(dal ? `HEAD -> ${dalAdi(dal)}` : "HEAD");
  // Git süslemeleri ref sırasının tersiyle yazar (etiket, uzak dallar, yerel dallar)
  const refler = Object.keys(d.refs).sort().reverse();
  for (const r of refler) {
    if (r === dal) continue;
    const hedef = d.refs[r]!;
    const commitHedef = d.nesneler[hedef]?.tur === "tag" ? (d.nesneler[hedef] as { nesne: string }).nesne : hedef;
    if (commitHedef !== h) continue;
    if (r.startsWith(ETIKET)) s.push(`tag: ${dalAdi(r)}`);
    else if (r.startsWith(DAL) || r.startsWith(UZAK)) s.push(dalAdi(r));
  }
  return s.length ? ` (${s.join(", ")})` : "";
}

function revAraligi(d: Depo, revler: string[]): { baslar: string[]; haric: string[] } {
  const baslar: string[] = [];
  const haric: string[] = [];
  for (const r of revler) {
    if (r.includes("..")) {
      const [x, y] = r.split("..");
      haric.push(coz(d, x || "HEAD"));
      baslar.push(coz(d, y || "HEAD"));
    } else if (r.startsWith("^")) haric.push(coz(d, r.slice(1)));
    else baslar.push(coz(d, r));
  }
  return { baslar, haric };
}

export function log(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-n", "--max-count", "--author", "--grep"]);
  const head = headCommit(d);
  const dal = gecerliDal(d);
  const tumu = var_(a, "--all");
  if (!head && !tumu && !a.kalan.length) throw new GitHatasi(`fatal: your current branch '${dal ? dalAdi(dal) : "HEAD"}' does not have any commits yet`);
  const { baslar, haric } = revAraligi(d, a.kalan);
  if (tumu) baslar.push(...Object.values(d.refs).map((h) => cozYumusak(d, h)).filter((h): h is string => !!h && d.nesneler[h]?.tur === "commit"));
  if (!baslar.length && head) baslar.push(head);
  let liste = gecmis(d, [...new Set(baslar)], haric);
  const yollar = a.yollar?.map((y) => yolCoz(o, y));
  if (yollar?.length)
    liste = liste.filter((h) => {
      const c = commitOku(d, h);
      const once = commitAgaci(d, c.ebeveynler[0] ?? null);
      const sonra = agacAc(d, c.agac);
      return [...new Set([...Object.keys(once), ...Object.keys(sonra)])].some((y) => once[y] !== sonra[y] && yollar.some((s) => eslesir(y, s)));
    });
  const yazar = ilk(a, "--author");
  if (yazar) liste = liste.filter((h) => new RegExp(yazar, "i").test(`${commitOku(d, h).yazar.ad} <${commitOku(d, h).yazar.eposta}>`));
  const grep = ilk(a, "--grep");
  if (grep) liste = liste.filter((h) => new RegExp(grep, "i").test(commitOku(d, h).mesaj));
  const n = ilk(a, "-n", "--max-count");
  if (n !== undefined) liste = liste.slice(0, Number(n));
  const tekSatir = var_(a, "--oneline");
  const graf = var_(a, "--graph");
  const yama = var_(a, "-p", "--patch");
  const stat = var_(a, "--stat");
  const c: string[] = [];
  for (const h of liste) {
    const cm = commitOku(d, h);
    const on = graf ? "* " : "";
    if (tekSatir) {
      c.push(`${on}${kisa(h)}${suslemeler(d, h)} ${ozetSatiri(cm.mesaj)}`);
    } else {
      if (c.length) c.push("");
      c.push(...commitBasligi(d, h, cm).map((s, i) => (graf ? (i === 0 ? "* " : "| ") + s : s)));
    }
    if (yama || stat) {
      const ek = commitFarki(d, cm, stat && !yama);
      if (ek) c.push("", ek);
    }
  }
  return c.join("\n");
}

// git bisect'in bulduğu ilk kötü commit: süslemesiz başlık ve dosya özeti
export function bisectGosterimi(d: Depo, h: string): string {
  const cm = commitOku(d, h);
  const s = commitBasligi(d, h, cm);
  s[0] = `commit ${h}`;
  const f = cm.ebeveynler.length > 1 ? "" : statVeMod(d, commitAgaci(d, cm.ebeveynler[0] ?? null), agacAc(d, cm.agac));
  return [...s, ...(f ? ["", f] : [])].join("\n");
}

function commitBasligi(d: Depo, h: string, cm: Commit): string[] {
  const s = [`commit ${h}${suslemeler(d, h)}`];
  if (cm.ebeveynler.length > 1) s.push(`Merge: ${cm.ebeveynler.map(kisa).join(" ")}`);
  s.push(`Author: ${cm.yazar.ad} <${cm.yazar.eposta}>`, `Date:   ${tarih(cm.yazar.zaman)}`, "");
  s.push(...cm.mesaj.replace(/\n$/, "").split("\n").map((x) => "    " + x));
  return s;
}

function commitFarki(d: Depo, cm: Commit, yalnizStat: boolean): string {
  if (cm.ebeveynler.length > 1) return "";
  const once = commitAgaci(d, cm.ebeveynler[0] ?? null);
  const sonra = agacAc(d, cm.agac);
  if (yalnizStat) return statCiktisi(d, once, sonra);
  return agacFarki(d, once, sonra, (h) => blobIcerigi(d, h));
}

function statSatirlari(d: Depo, once: Record<string, string>, sonra: Record<string, string>): string[] {
  const yollar = [...new Set([...Object.keys(once), ...Object.keys(sonra)])].filter((y) => once[y] !== sonra[y]).sort();
  const sayilar = yollar.map((y) => {
    const f = farkParcalari(once[y] ? blobIcerigi(d, once[y]!) : "", sonra[y] ? blobIcerigi(d, sonra[y]!) : "").split("\n");
    return [f.filter((s) => s.startsWith("+")).length, f.filter((s) => s.startsWith("-")).length] as const;
  });
  const genislik = Math.max(0, ...yollar.map((y) => y.length));
  const sayiGenislik = Math.max(1, ...sayilar.map(([x, y]) => String(x + y).length));
  return yollar.map((y, i) => {
    const [art, eks] = sayilar[i]!;
    return ` ${y.padEnd(genislik)} | ${String(art + eks).padStart(sayiGenislik)}${art + eks ? " " : ""}${"+".repeat(art)}${"-".repeat(eks)}`;
  });
}

function statCiktisi(d: Depo, once: Record<string, string>, sonra: Record<string, string>): string {
  return [...statSatirlari(d, once, sonra), degisimOzeti(d, once, sonra, false)].join("\n");
}

// merge ve pull çıktısındaki dosya tablosu, özet ve "create mode" satırları
export function statVeMod(d: Depo, once: Record<string, string>, sonra: Record<string, string>): string {
  return [...statSatirlari(d, once, sonra), degisimOzeti(d, once, sonra)].join("\n");
}

// İki yol->içerik kimliği haritası arasındaki birleşik fark. Çalışma dizini tarafı
// için kimlikler nesneKimligi ile hesaplanır, depoya yazılmaz.
export function agacFarki(d: Depo, once: Record<string, string>, sonra: Record<string, string>, icerikAl: (h: string) => string, yollar?: string[]): string {
  const c: string[] = [];
  for (const y of [...new Set([...Object.keys(once), ...Object.keys(sonra)])].sort()) {
    if (once[y] === sonra[y]) continue;
    if (yollar?.length && !yollar.some((s) => eslesir(y, s))) continue;
    const e = once[y];
    const s = sonra[y];
    c.push(`diff --git a/${y} b/${y}`);
    if (!e) c.push("new file mode 100644", `index 0000000..${kisa(s!)}`);
    else if (!s) c.push("deleted file mode 100644", `index ${kisa(e)}..0000000`);
    else c.push(`index ${kisa(e)}..${kisa(s)} 100644`);
    const eskiMetin = e ? icerikAl(e) : "";
    const yeniMetin = s ? icerikAl(s) : "";
    const parcalar = farkParcalari(eskiMetin, yeniMetin);
    if (parcalar) c.push(e ? `--- a/${y}` : "--- /dev/null", s ? `+++ b/${y}` : "+++ /dev/null", parcalar.replace(/\n$/, ""));
  }
  void d;
  return c.join("\n");
}

export function diff(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const staged = var_(a, "--staged", "--cached");
  const yollar = a.yollar?.map((y) => yolCoz(o, y));
  // Çalışma dizinindeki içerikler için geçici kimlikler
  const gecici = new Map<string, string>();
  const calisma = (): Record<string, string> => {
    const r: Record<string, string> = {};
    for (const [y, s] of Object.entries(o.dosyalar)) {
      if (!(y in d.index) && !d.catisma[y]) continue;
      const h = nesneKimligi({ tur: "blob", icerik: s });
      gecici.set(h, s);
      r[y] = h;
    }
    return r;
  };
  const icerikAl = (h: string) => gecici.get(h) ?? blobIcerigi(d, h);
  let once: Record<string, string>;
  let sonra: Record<string, string>;
  const revler = a.kalan.flatMap((r) => (r.includes("..") ? r.split("..").map((x) => x || "HEAD") : [r]));
  if (revler.length >= 2) {
    once = commitAgaci(d, coz(d, revler[0]!));
    sonra = commitAgaci(d, coz(d, revler[1]!));
  } else if (revler.length === 1) {
    once = commitAgaci(d, coz(d, revler[0]!));
    sonra = staged ? { ...d.index } : calisma();
  } else if (staged) {
    once = commitAgaci(d, headCommit(d));
    sonra = { ...d.index };
  } else {
    once = { ...d.index };
    sonra = calisma();
    // Çakışmalı dosyalar
    for (const y of Object.keys(d.catisma)) if (!(y in once)) delete sonra[y];
  }
  if (var_(a, "--name-only")) return Object.keys({ ...once, ...sonra }).filter((y) => once[y] !== sonra[y] && (!yollar?.length || yollar.some((s) => eslesir(y, s)))).sort().join("\n");
  if (var_(a, "--stat")) {
    for (const [h, s] of gecici) if (!d.nesneler[h]) d.nesneler[h] = { tur: "blob", icerik: s };
    return statCiktisi(d, once, sonra);
  }
  return agacFarki(d, once, sonra, icerikAl, yollar);
}

export function show(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const rev = a.kalan[0] ?? "HEAD";
  const iki = rev.indexOf(":");
  if (iki > 0) {
    const c = coz(d, rev.slice(0, iki));
    const yol = rev.slice(iki + 1);
    const agac = commitAgaci(d, c);
    if (!agac[yol]) throw new GitHatasi(`fatal: path '${yol}' does not exist in '${rev.slice(0, iki)}'`);
    return blobIcerigi(d, agac[yol]!).replace(/\n$/, "");
  }
  const ref = refAdi(d, rev);
  const ham = ref ? d.refs[ref]! : coz(d, rev);
  const c: string[] = [];
  const n = d.nesneler[ham];
  if (n?.tur === "tag") {
    c.push(`tag ${n.ad}`, `Tagger: ${n.etiketleyen.ad} <${n.etiketleyen.eposta}>`, `Date:   ${tarih(n.etiketleyen.zaman)}`, "", n.mesaj.replace(/\n$/, ""), "");
  }
  const h = coz(d, rev);
  const cm = commitOku(d, h);
  c.push(...commitBasligi(d, h, cm));
  const f = commitFarki(d, cm, var_(a, "--stat"));
  if (f) c.push("", f);
  return c.join("\n");
}

function refAdi(d: Depo, ad: string): string | null {
  for (const r of [ETIKET + ad, ad]) if (d.refs[r]) return r;
  return null;
}

// ---- iç yapı (plumbing) ----

export function lsFiles(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const asamali = var_(a, "-s", "--stage");
  const c: string[] = [];
  const yollar = [...new Set([...Object.keys(d.index), ...Object.keys(d.catisma)])].sort();
  for (const y of yollar) {
    const g = goreli(o, y);
    if (d.catisma[y]) {
      const k = d.catisma[y]!;
      if (asamali) {
        if (k.taban) c.push(`100644 ${k.taban} 1\t${g}`);
        if (k.biz) c.push(`100644 ${k.biz} 2\t${g}`);
        if (k.onlar) c.push(`100644 ${k.onlar} 3\t${g}`);
      } else c.push(g);
    } else c.push(asamali ? `100644 ${d.index[y]} 0\t${g}` : g);
  }
  return c.join("\n");
}

export function catFile(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const rev = a.kalan[0];
  if (!rev) throw new GitHatasi("usage: git cat-file (-t | -s | -e | -p | <type>) <object>", 129);
  let h: string;
  const iki = rev.indexOf(":");
  if (iki >= 0) {
    const commit = coz(d, rev.slice(0, iki) || "HEAD");
    const yol = rev.slice(iki + 1).replace(/\/$/, "");
    // Klasör yolu tree'ye, dosya yolu blob'a çözülür
    let n: string | undefined = oku(d, commit, "commit").agac;
    for (const parca of yol ? yol.split("/") : []) {
      const t: (typeof d.nesneler)[string] | undefined = d.nesneler[n!];
      n = t?.tur === "tree" ? t.girdiler.find((g) => g.ad === parca)?.hash : undefined;
      if (!n) break;
    }
    if (!n) throw new GitHatasi(`fatal: path '${yol}' does not exist in '${rev.slice(0, iki)}'`);
    h = n;
  } else {
    const r = refAdi(d, rev) ?? (rev.includes("refs/") ? rev : null);
    h = r && d.refs[r] ? d.refs[r]! : (cozHam(d, rev) ?? "");
  }
  const n = d.nesneler[h];
  if (!n) throw new GitHatasi(`fatal: Not a valid object name ${rev}`);
  if (var_(a, "-e")) return "";
  if (var_(a, "-t")) return n.tur;
  if (var_(a, "-s")) return String(new TextEncoder().encode(n.tur === "blob" ? n.icerik : "").length || govdeBoyu(n));
  if (n.tur === "blob") return n.icerik.replace(/\n$/, "");
  if (n.tur === "tree") return n.girdiler.map((g) => `${g.mod === "40000" ? "040000 tree" : "100644 blob"} ${g.hash}\t${g.ad}`).join("\n");
  if (n.tur === "commit")
    return [`tree ${n.agac}`, ...n.ebeveynler.map((p) => `parent ${p}`), `author ${n.yazar.ad} <${n.yazar.eposta}> ${n.yazar.zaman} +0000`, `committer ${n.isleyen.ad} <${n.isleyen.eposta}> ${n.isleyen.zaman} +0000`, "", n.mesaj.replace(/\n$/, "")].join("\n");
  return [`object ${n.nesne}`, `type ${n.nesneTuru}`, `tag ${n.ad}`, `tagger ${n.etiketleyen.ad} <${n.etiketleyen.eposta}> ${n.etiketleyen.zaman} +0000`, "", n.mesaj.replace(/\n$/, "")].join("\n");
}

function govdeBoyu(n: Parameters<typeof nesneKimligi>[0]): number {
  // nesneKimligi ile aynı gövde; boyutu yeniden hesaplamak için
  const enc = new TextEncoder();
  if (n.tur === "tree") return n.girdiler.reduce((t, g) => t + enc.encode(`${g.mod} ${g.ad}\0`).length + 20, 0);
  if (n.tur === "commit")
    return enc.encode([`tree ${n.agac}`, ...n.ebeveynler.map((p) => `parent ${p}`), `author ${n.yazar.ad} <${n.yazar.eposta}> ${n.yazar.zaman} +0000`, `committer ${n.isleyen.ad} <${n.isleyen.eposta}> ${n.isleyen.zaman} +0000`].join("\n") + "\n\n" + n.mesaj).length;
  return 0;
}

function cozHam(d: Depo, rev: string): string | null {
  if (/^[0-9a-f]{4,40}$/.test(rev)) {
    const adaylar = Object.keys(d.nesneler).filter((h) => h.startsWith(rev));
    if (adaylar.length === 1) return adaylar[0]!;
  }
  return cozYumusak(d, rev);
}

export function hashObject(o: Ortam, args: string[]): string {
  const a = ayir(args);
  const yol = a.kalan[0];
  if (!yol) throw new GitHatasi("usage: git hash-object [-t <type>] [-w] [--stdin] <file>...", 129);
  const y = yolCoz(o, yol);
  if (!(y in o.dosyalar)) throw new GitHatasi(`fatal: could not open '${yol}' for reading: No such file or directory`);
  if (var_(a, "-w")) return blobYaz(depoGerekli(o), o.dosyalar[y]!);
  return nesneKimligi({ tur: "blob", icerik: o.dosyalar[y]! });
}

export function revParse(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  if (var_(a, "--show-toplevel")) return KOK;
  if (var_(a, "--git-dir")) return ".git";
  const c: string[] = [];
  for (const r of a.kalan) {
    if (var_(a, "--abbrev-ref")) {
      if (r === "HEAD") {
        c.push(gecerliDal(d) ? dalAdi(gecerliDal(d)!) : "HEAD");
        continue;
      }
    }
    const h = coz(d, r);
    c.push(var_(a, "--short") ? kisa(h) : h);
  }
  return c.join("\n");
}

export function showRef(o: Ortam): string {
  const d = depoGerekli(o);
  return Object.keys(d.refs)
    .sort()
    .map((r) => `${d.refs[r]} ${r}`)
    .join("\n");
}

export { oku };
