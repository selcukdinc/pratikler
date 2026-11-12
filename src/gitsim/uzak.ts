// Uzak depolar: clone, remote, fetch, pull, push. Uzak depo, ortamın içinde
// adresiyle tutulan çıplak (çalışma dizini olmayan) bir depodur; GitHub ya da
// GitLab'daki deponun yerini tutar. Ekip arkadaşları aynı uzak depoya kendi
// ortamlarından push eder (ekipCalistir).
import { agacaGec, ataMi, ayar, cozYumusak, DAL, dalAdi, depoGerekli, ETIKET, gecerliDal, headCommit, kisa, reflogYaz, UZAK, yeniDepo } from "./depo";
import { merge, rebase } from "./dal";
import { pushKorumasi } from "./platform";
import { botTaramasi, commitlerdekiGizliler, pushKorumasiSatirlari } from "./gizli";
import { GitHatasi } from "./nesne";
import type { Depo, Nesne, Ortam } from "./tipler";
import { ayir, ilk, var_ } from "./yardim";

// Adresin anahtarı: sondaki / ve .git önemsizdir (GitHub ikisini de kabul eder)
export const adresAnahtari = (url: string) => url.replace(/\/+$/, "").replace(/\.git$/, "");

// Fetch çıktısındaki ve birleştirme mesajındaki gösterim: sondaki .git atılır
const gosterim = (url: string) => url.replace(/\/+$/, "").replace(/\.git$/, "");

const GITHUB = /^https:\/\/github\.com\//;
const GITLAB = /^https:\/\/gitlab\.com\//;

// Boş bir uzak depo oluşturur (GitHub'da "New repository")
export function uzakOlustur(o: Ortam, url: string, varsayilanDal = "main"): Depo {
  const d = yeniDepo(varsayilanDal);
  (o.uzaklar ??= {})[adresAnahtari(url)] = d;
  return d;
}

export function uzakBul(o: Ortam, url: string): Depo | null {
  return o.uzaklar?.[adresAnahtari(url)] ?? null;
}

function bulunamadi(url: string): GitHatasi {
  return new GitHatasi(`remote: Repository not found.\nfatal: repository '${url.replace(/\/?$/, "/")}' not found`);
}

// Bir commit'ten ulaşılan bütün nesneleri (commit, ağaç, blob, etiket) kaynaktan hedefe kopyalar
export function nesneleriKopyala(kaynak: Depo, hedef: Depo, baslar: string[]) {
  const yigin = [...baslar];
  while (yigin.length) {
    const h = yigin.pop()!;
    if (hedef.nesneler[h]) continue;
    const n: Nesne | undefined = kaynak.nesneler[h];
    if (!n) continue;
    hedef.nesneler[h] = n;
    if (n.tur === "commit") yigin.push(n.agac, ...n.ebeveynler);
    else if (n.tur === "tree") yigin.push(...n.girdiler.map((g) => g.hash));
    else if (n.tur === "tag") yigin.push(n.nesne);
  }
}

// Etiketi gösterdiği commit'e soyar (yalnızca verilen depoda)
function soyulmus(d: Depo, h: string): string {
  const n = d.nesneler[h];
  return n?.tur === "tag" ? soyulmus(d, n.nesne) : h;
}

// origin/HEAD gibi sembolik ref'lerin değerini hedeflerine eşitler
export function sembolleriGuncelle(d: Depo) {
  for (const [ref, hedef] of Object.entries(d.semboller ?? {})) {
    if (d.refs[hedef] !== undefined) d.refs[ref] = d.refs[hedef]!;
    else delete d.refs[ref];
  }
}

const uzakAdlari = (d: Depo) => Object.keys(d.config).flatMap((k) => /^remote\.(.+)\.url$/.exec(k)?.[1] ?? []);

function uzakDepo(o: Ortam, d: Depo, ad: string): { url: string; uzak: Depo } {
  const url = d.config[`remote.${ad}.url`];
  if (!url) throw new GitHatasi(`fatal: '${ad}' does not appear to be a git repository\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.`);
  const uzak = uzakBul(o, url);
  if (!uzak) throw bulunamadi(url);
  return { url, uzak };
}

export const uzakHeadDali = (u: Depo) => (u.head.tur === "ref" ? u.head.ref : null);

// ---- clone ----

export function clone(o: Ortam, args: string[]): string {
  const a = ayir(args, ["-b", "--branch", "-o", "--origin"]);
  const [url, klasor] = a.kalan;
  if (!url) throw new GitHatasi("fatal: You must specify a repository to clone.", 129);
  const ad = klasor ?? (gosterim(url).split("/").pop() || "repo");
  if (o.depo) throw new GitHatasi("Bu sandbox'ta her terminalde tek depo var ve burada zaten bir depo açık. Klonlamayı boş bir terminalde dene (Baştan).", 128);
  if (Object.keys(o.dosyalar).length || o.klasorler.length || o.cwd)
    throw new GitHatasi(`fatal: destination path '${ad}' already exists and is not an empty directory.`, 128);
  const uzak = uzakBul(o, url);
  if (!uzak) throw bulunamadi(url);
  const uzakAd = ilk(a, "-o", "--origin") ?? "origin";
  const istenen = ilk(a, "-b", "--branch");
  const headRef = istenen ? DAL + istenen : uzakHeadDali(uzak);
  if (istenen && uzak.refs[DAL + istenen] === undefined) throw new GitHatasi(`fatal: Remote branch ${istenen} not found in upstream ${uzakAd}`, 128);
  const d = yeniDepo(headRef ? dalAdi(headRef) : "main");
  o.depo = d;
  o.kokAd = klasor === "." ? undefined : ad;
  d.config[`remote.${uzakAd}.url`] = url;
  d.config[`remote.${uzakAd}.fetch`] = `+refs/heads/*:refs/remotes/${uzakAd}/*`;
  const satirlar = [`Cloning into '${ad}'...`];
  const baslar = Object.values(uzak.refs);
  nesneleriKopyala(uzak, d, baslar);
  for (const [r, h] of Object.entries(uzak.refs)) {
    if (r.startsWith(DAL)) d.refs[`${UZAK}${uzakAd}/${dalAdi(r)}`] = h;
    else if (r.startsWith(ETIKET)) d.refs[r] = h;
  }
  const varsayilan = uzakHeadDali(uzak);
  if (varsayilan && uzak.refs[varsayilan] !== undefined) {
    d.semboller = { [`${UZAK}${uzakAd}/HEAD`]: `${UZAK}${uzakAd}/${dalAdi(varsayilan)}` };
    sembolleriGuncelle(d);
  }
  if (!headRef || uzak.refs[headRef] === undefined) {
    // Boş depoda da dal izleme ayarı yazılır: ilk düz git push çalışır
    const bos = headRef ? dalAdi(headRef) : gecerliDal(d)!.replace(DAL, "");
    d.config[`branch.${bos}.remote`] = uzakAd;
    d.config[`branch.${bos}.merge`] = DAL + bos;
    satirlar.push("warning: You appear to have cloned an empty repository.");
    return satirlar.join("\n");
  }
  const dal = dalAdi(headRef);
  d.refs[headRef] = uzak.refs[headRef]!;
  d.config[`branch.${dal}.remote`] = uzakAd;
  d.config[`branch.${dal}.merge`] = headRef;
  agacaGec(o, d, d.refs[headRef]!, true);
  reflogYaz(d, d.refs[headRef]!, `clone: from ${url}`);
  return satirlar.join("\n");
}

// ---- remote ----

export function remote(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const [alt, ...kalan] = args;
  const adlar = uzakAdlari(d);
  if (!alt || alt === "-v" || alt === "--verbose") {
    if (!alt) return adlar.join("\n");
    return adlar.flatMap((ad) => [`${ad}\t${d.config[`remote.${ad}.url`]} (fetch)`, `${ad}\t${d.config[`remote.${ad}.url`]} (push)`]).join("\n");
  }
  const yok = (ad: string) => new GitHatasi(`error: No such remote: '${ad}'`, 2);
  switch (alt) {
    case "add": {
      const [ad, url] = kalan.filter((x) => !x.startsWith("-"));
      if (!ad || !url) throw new GitHatasi("usage: git remote add [<options>] <name> <url>", 129);
      if (!/^[A-Za-z0-9._-]+$/.test(ad)) throw new GitHatasi(`fatal: '${ad}' is not a valid remote name`, 128);
      if (d.config[`remote.${ad}.url`]) throw new GitHatasi(`error: remote ${ad} already exists.`, 3);
      d.config[`remote.${ad}.url`] = url;
      d.config[`remote.${ad}.fetch`] = `+refs/heads/*:refs/remotes/${ad}/*`;
      return "";
    }
    case "remove":
    case "rm": {
      const ad = kalan[0]!;
      if (!d.config[`remote.${ad}.url`]) throw yok(ad);
      for (const k of Object.keys(d.config)) if (k.startsWith(`remote.${ad}.`)) delete d.config[k];
      for (const k of Object.keys(d.config)) {
        const m = /^branch\.(.+)\.remote$/.exec(k);
        if (m && d.config[k] === ad) {
          delete d.config[k];
          delete d.config[`branch.${m[1]}.merge`];
        }
      }
      for (const r of Object.keys(d.refs)) if (r.startsWith(`${UZAK}${ad}/`)) delete d.refs[r];
      for (const r of Object.keys(d.semboller ?? {})) if (r.startsWith(`${UZAK}${ad}/`)) delete d.semboller![r];
      return "";
    }
    case "rename": {
      const [eski, yeni] = kalan;
      if (!eski || !yeni) throw new GitHatasi("usage: git remote rename [--[no-]progress] <old> <new>", 129);
      if (!d.config[`remote.${eski}.url`]) throw yok(eski);
      if (d.config[`remote.${yeni}.url`]) throw new GitHatasi(`error: remote ${yeni} already exists.`, 3);
      const yeniConfig: Record<string, string> = {};
      for (const [k, v] of Object.entries(d.config)) {
        if (k.startsWith(`remote.${eski}.`)) yeniConfig[`remote.${yeni}.${k.slice(`remote.${eski}.`.length)}`] = v.replace(`refs/remotes/${eski}/`, `refs/remotes/${yeni}/`);
        else if (/^branch\..+\.remote$/.test(k) && v === eski) yeniConfig[k] = yeni;
        else yeniConfig[k] = v;
      }
      d.config = yeniConfig;
      for (const r of Object.keys(d.refs)) {
        if (!r.startsWith(`${UZAK}${eski}/`)) continue;
        d.refs[`${UZAK}${yeni}/${r.slice(`${UZAK}${eski}/`.length)}`] = d.refs[r]!;
        delete d.refs[r];
      }
      if (d.semboller) d.semboller = Object.fromEntries(Object.entries(d.semboller).map(([k, v]) => [k.replace(`${UZAK}${eski}/`, `${UZAK}${yeni}/`), v.replace(`${UZAK}${eski}/`, `${UZAK}${yeni}/`)]));
      return "";
    }
    case "get-url": {
      const ad = kalan[0]!;
      if (!d.config[`remote.${ad}.url`]) throw yok(ad);
      return d.config[`remote.${ad}.url`]!;
    }
    case "set-url": {
      const [ad, url] = kalan;
      if (!ad || !url) throw new GitHatasi("usage: git remote set-url [--push] <name> <newurl> [<oldurl>]", 129);
      if (!d.config[`remote.${ad}.url`]) throw yok(ad);
      d.config[`remote.${ad}.url`] = url;
      return "";
    }
    default:
      throw new GitHatasi(`error: unknown subcommand: \`${alt}'`, 129);
  }
}

// ---- fetch ----

interface FetchSatiri {
  kod: string;
  ozet: string;
  uzak: string;
  yerel: string;
  hata?: string;
}

function fetchCiktisi(url: string, satirlar: FetchSatiri[], silinen: FetchSatiri[]): string {
  if (!satirlar.length && !silinen.length) return "";
  let genislik = 10;
  for (const s of satirlar) {
    const len = 21 + s.uzak.length + 4 + s.yerel.length;
    if (len < 80 && s.uzak.length > genislik) genislik = s.uzak.length;
  }
  const bicim = (s: FetchSatiri) => ` ${s.kod} ${s.ozet.padEnd(17)} ${s.uzak.padEnd(genislik)} -> ${s.yerel}${s.hata ? `  (${s.hata})` : ""}`;
  return [`From ${gosterim(url)}`, ...silinen.map(bicim), ...satirlar.map(bicim)].join("\n");
}

// Bir uzak deponun dallarını (ve onlara ulaşan etiketleri) yerele getirir
function getir(o: Ortam, d: Depo, uzakAd: string, budama: boolean, yalniz?: string): string {
  const { url, uzak } = uzakDepo(o, d, uzakAd);
  const satirlar: FetchSatiri[] = [];
  const silinen: FetchSatiri[] = [];
  const onek = `${UZAK}${uzakAd}/`;
  if (budama) {
    for (const r of Object.keys(d.refs).sort()) {
      if (!r.startsWith(onek) || r === `${onek}HEAD`) continue;
      if (uzak.refs[DAL + r.slice(onek.length)] !== undefined) continue;
      delete d.refs[r];
      silinen.push({ kod: "-", ozet: "[deleted]", uzak: "(none)", yerel: `${uzakAd}/${r.slice(onek.length)}` });
    }
  }
  const dallar = Object.keys(uzak.refs).filter((r) => r.startsWith(DAL) && (!yalniz || r === DAL + yalniz)).sort();
  nesneleriKopyala(uzak, d, dallar.map((r) => uzak.refs[r]!));
  for (const r of dallar) {
    const ad = dalAdi(r);
    const yeni = uzak.refs[r]!;
    const yerelRef = onek + ad;
    const eski = d.refs[yerelRef];
    if (eski === yeni) continue;
    d.refs[yerelRef] = yeni;
    (d.dalReflog[yerelRef] ??= []).push({ hash: yeni, mesaj: eski ? "fetch: fast-forward" : "fetch: storing head" });
    if (eski === undefined) satirlar.push({ kod: "*", ozet: "[new branch]", uzak: ad, yerel: `${uzakAd}/${ad}` });
    else if (ataMi(d, eski, yeni)) satirlar.push({ kod: " ", ozet: `${kisa(eski)}..${kisa(yeni)}`, uzak: ad, yerel: `${uzakAd}/${ad}` });
    else satirlar.push({ kod: "+", ozet: `${kisa(eski)}...${kisa(yeni)}`, uzak: ad, yerel: `${uzakAd}/${ad}`, hata: "forced update" });
  }
  // Getirilen geçmişe ulaşan etiketler kendiliğinden gelir
  for (const r of Object.keys(uzak.refs).filter((x) => x.startsWith(ETIKET)).sort()) {
    if (d.refs[r] !== undefined) continue;
    const hedef = soyulmus(uzak, uzak.refs[r]!);
    if (!d.nesneler[hedef]) continue;
    nesneleriKopyala(uzak, d, [uzak.refs[r]!]);
    d.refs[r] = uzak.refs[r]!;
    satirlar.push({ kod: "*", ozet: "[new tag]", uzak: dalAdi(r), yerel: dalAdi(r) });
  }
  sembolleriGuncelle(d);
  return fetchCiktisi(url, satirlar, silinen);
}

function upstream(d: Depo): { uzak: string; dal: string } | null {
  const r = gecerliDal(d);
  if (!r) return null;
  const ad = dalAdi(r);
  const uzak = d.config[`branch.${ad}.remote`];
  const m = d.config[`branch.${ad}.merge`];
  return uzak && m ? { uzak, dal: dalAdi(m) } : null;
}

export function fetch(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const budama = var_(a, "-p", "--prune") || ayar(o, "fetch.prune") === "true";
  if (var_(a, "--all")) return uzakAdlari(d).map((ad) => getir(o, d, ad, budama)).filter(Boolean).join("\n");
  const uzakAd = a.kalan[0] ?? upstream(d)?.uzak ?? (d.config["remote.origin.url"] ? "origin" : null);
  if (!uzakAd) throw new GitHatasi("fatal: No remote repository specified.  Please, specify either a URL or a\nremote name from which new revisions should be fetched.");
  return getir(o, d, uzakAd, budama, a.kalan[1]);
}

// ---- pull ----

const AYRISMIS = `hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.`;

export function pull(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const r = gecerliDal(d);
  const u = upstream(d);
  const uzakAd = a.kalan[0] ?? u?.uzak;
  const dalAd = a.kalan[1] ?? (a.kalan[0] ? (u?.uzak === a.kalan[0] ? u.dal : null) : u?.dal);
  if (!uzakAd || !dalAd) {
    if (!uzakAd && !uzakAdlari(d).length) throw new GitHatasi("fatal: No remote repository specified.  Please, specify either a URL or a\nremote name from which new revisions should be fetched.");
    throw new GitHatasi(
      `There is no tracking information for the current branch.\nPlease specify which branch you want to merge with.\nSee git-pull(1) for details.\n\n    git pull <remote> <branch>\n\nIf you wish to set tracking information for this branch you can do so with:\n\n    git branch --set-upstream-to=${uzakAd ?? "origin"}/<branch> ${r ? dalAdi(r) : "HEAD"}\n`,
      1,
    );
  }
  const { url, uzak } = uzakDepo(o, d, uzakAd);
  if (uzak.refs[DAL + dalAd] === undefined) {
    getir(o, d, uzakAd, false);
    throw new GitHatasi(`fatal: couldn't find remote ref ${dalAd}`, 1);
  }
  const cikti: string[] = [];
  const f = a.kalan[0] && a.kalan[1] ? getir(o, d, uzakAd, false, dalAd) : getir(o, d, uzakAd, false);
  if (f) cikti.push(f);
  const hedef = uzak.refs[DAL + dalAd]!;
  const head = headCommit(d);
  const rebaseKipi = var_(a, "--rebase", "-r") ? true : var_(a, "--no-rebase") ? false : ayar(o, "pull.rebase") === "true" ? true : ayar(o, "pull.rebase") === "false" ? false : null;
  const yalnizFf = var_(a, "--ff-only") || (ayar(o, "pull.ff") === "only" && rebaseKipi === null);
  const sonuc = (metin: string) => [...cikti, metin].filter(Boolean).join("\n");
  const hata = (e: unknown) => (e instanceof GitHatasi ? new GitHatasi(sonuc(e.message), e.kod) : e);
  if (!head || ataMi(d, head, hedef)) {
    if (head === hedef) return sonuc("Already up to date.");
    try {
      return sonuc(merge(o, ["--ff-only", hedef]));
    } catch (e) {
      throw hata(e);
    }
  }
  if (ataMi(d, hedef, head)) return sonuc("Already up to date.");
  if (yalnizFf) throw new GitHatasi(sonuc("hint: Diverging branches can't be fast-forwarded, you need to either:\nhint:\nhint: \tgit merge --no-ff\nhint:\nhint: or:\nhint:\nhint: \tgit rebase\nhint:\nhint: Disable this message with \"git config advice.diverging false\"\nfatal: Not possible to fast-forward, aborting."), 128);
  if (rebaseKipi === null) throw new GitHatasi(sonuc(AYRISMIS), 128);
  try {
    if (rebaseKipi) return sonuc(rebase(o, [hedef]));
    const dal = r ? dalAdi(r) : null;
    let mesaj = `Merge branch '${dalAd}' of ${gosterim(url)}`;
    if (dal && dal !== "main" && dal !== "master") mesaj += ` into ${dal}`;
    return sonuc(merge(o, ["--no-ff", "-m", mesaj, hedef]));
  } catch (e) {
    throw hata(e);
  }
}

// ---- push ----

interface PushSatiri {
  kod: string;
  ozet: string;
  kaynak?: string;
  hedef: string;
  hata?: string;
  reddedildi?: boolean;
}

const HINT_FETCH_FIRST = `hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.`;

const HINT_NON_FF = `hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.`;

const HINT_NON_FF_DIGER = `hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. If you want to integrate the remote changes, use 'git pull'
hint: before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.`;

export function push(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const r = gecerliDal(d);
  const u = upstream(d);
  const izle = var_(a, "-u", "--set-upstream");
  const zorla = var_(a, "-f", "--force");
  const kira = var_(a, "--force-with-lease") || [...a.deger.keys()].includes("--force-with-lease");
  const sil = var_(a, "-d", "--delete");
  const uzakAd = a.kalan[0] ?? u?.uzak ?? (d.config["remote.origin.url"] ? "origin" : null);
  if (!uzakAd)
    throw new GitHatasi("fatal: No configured push destination.\nEither specify the URL from the command-line or configure a remote repository using\n\n    git remote add <name> <url>\n\nand then push using the remote name\n\n    git push <name>\n");
  let refspecler = a.kalan.slice(1);
  if (var_(a, "--all", "--branches")) refspecler = [...refspecler, ...Object.keys(d.refs).filter((x) => x.startsWith(DAL)).sort().map(dalAdi)];
  if (var_(a, "--tags")) refspecler = [...refspecler, ...Object.keys(d.refs).filter((x) => x.startsWith(ETIKET)).map(dalAdi)];
  if (!refspecler.length) {
    if (!r) throw new GitHatasi("fatal: You are not currently on a branch.\nTo push the history leading to the current (detached HEAD)\nstate now, use\n\n    git push origin HEAD:<name-of-remote-branch>\n");
    const dal = dalAdi(r);
    if (u && u.uzak === uzakAd) {
      if (u.dal !== dal)
        throw new GitHatasi(`fatal: The upstream branch of your current branch does not match\nthe name of your current branch.  To push to the upstream branch\non the remote, use\n\n    git push ${uzakAd} HEAD:${u.dal}\n\nTo push to the branch of the same name on the remote, use\n\n    git push ${uzakAd} HEAD\n\nTo avoid automatically configuring an upstream branch when its name\nwon't match the local branch, see option 'simple' of branch.autoSetupMerge\nin 'git help config'.\n`);
      refspecler = [dal];
    } else if (izle || ayar(o, "push.autosetupremote") === "true" || (u && u.uzak !== uzakAd)) {
      refspecler = [dal];
    } else {
      throw new GitHatasi(`fatal: The current branch ${dal} has no upstream branch.\nTo push the current branch and set the remote as upstream, use\n\n    git push --set-upstream ${uzakAd} ${dal}\n\nTo have this happen automatically for branches without a tracking\nupstream, see 'push.autoSetupRemote' in 'git help config'.\n`);
    }
  }
  const { url, uzak } = uzakDepo(o, d, uzakAd);
  const satirlar: PushSatiri[] = [];
  const izlenecek: string[] = [];
  const githubNotu: string[] = [];
  // Sunucunun (GitHub) "remote:" satırları, ör. korumalı dal reddi
  const uzakSatirlari: string[] = [];
  let ilkGelen: string | undefined;
  const korumaReddi = (ref: string, tur: "guncelle" | "zorla" | "sil", kaynak: string | undefined, hedef: string) => {
    const red = pushKorumasi(uzak, ref, tur);
    if (!red) return false;
    uzakSatirlari.push(...red);
    satirlar.push({ kod: "!", ozet: "[remote rejected]", kaynak, hedef, hata: uzak.platform?.tur === "gitlab" ? "pre-receive hook declined" : "protected branch hook declined", reddedildi: true });
    return true;
  };
  for (const spec of refspecler) {
    const arti = spec.startsWith("+");
    const temiz = arti ? spec.slice(1) : spec;
    let [kaynak, hedef] = temiz.includes(":") ? (temiz.split(":") as [string, string]) : [temiz, temiz];
    if (sil) [kaynak, hedef] = ["", temiz];
    if (kaynak === "HEAD") {
      if (!r) throw new GitHatasi("fatal: HEAD does not point to a branch");
      kaynak = dalAdi(r);
      if (hedef === "HEAD") hedef = kaynak;
    }
    // Silme: ":dal" ya da --delete dal
    if (!kaynak) {
      const uzakRef = hedef.startsWith("refs/") ? hedef : uzak.refs[ETIKET + hedef] !== undefined && uzak.refs[DAL + hedef] === undefined ? ETIKET + hedef : DAL + hedef;
      if (uzak.refs[uzakRef] === undefined) throw new GitHatasi(`error: unable to delete '${hedef}': remote ref does not exist\nerror: failed to push some refs to '${url}'`, 1);
      if (korumaReddi(uzakRef, "sil", undefined, dalAdi(uzakRef))) continue;
      delete uzak.refs[uzakRef];
      if (uzakRef.startsWith(DAL)) delete d.refs[`${UZAK}${uzakAd}/${dalAdi(uzakRef)}`];
      sembolleriGuncelle(d);
      satirlar.push({ kod: "-", ozet: "[deleted]", hedef: dalAdi(uzakRef) });
      continue;
    }
    const yerelRef = d.refs[DAL + kaynak] !== undefined ? DAL + kaynak : d.refs[ETIKET + kaynak] !== undefined ? ETIKET + kaynak : null;
    const yerelHash = yerelRef ? d.refs[yerelRef]! : cozYumusak(d, kaynak);
    if (!yerelHash) throw new GitHatasi(`error: src refspec ${kaynak} does not match any\nerror: failed to push some refs to '${url}'`, 1);
    const etiketMi = yerelRef?.startsWith(ETIKET) ?? false;
    const hedefRef = hedef.startsWith("refs/") ? hedef : (etiketMi ? ETIKET : DAL) + hedef;
    const uzakHash = uzak.refs[hedefRef];
    const kisaKaynak = yerelRef ? dalAdi(yerelRef) : kaynak;
    const kisaHedef = dalAdi(hedefRef);
    const izleyen = `${UZAK}${uzakAd}/${kisaHedef}`;
    if (uzakHash === yerelHash) {
      satirlar.push({ kod: "=", ozet: "[up to date]", kaynak: kisaKaynak, hedef: kisaHedef });
      if (!etiketMi) izlenecek.push(kisaKaynak);
      continue;
    }
    let kod = " ";
    let ozet = "";
    let hata: string | undefined;
    if (uzakHash === undefined) {
      kod = "*";
      ozet = etiketMi ? "[new tag]" : "[new branch]";
      if (!etiketMi && (GITHUB.test(url) || GITLAB.test(url))) githubNotu.push(kisaHedef);
    } else if (etiketMi && !zorla && !arti) {
      satirlar.push({ kod: "!", ozet: "[rejected]", kaynak: kisaKaynak, hedef: kisaHedef, hata: "already exists", reddedildi: true });
      continue;
    } else if (d.nesneler[uzakHash] && ataMi(d, uzakHash, yerelHash)) {
      ozet = `${kisa(uzakHash)}..${kisa(yerelHash)}`;
    } else {
      // İleri sarılamayan güncelleme: zorlanmadıkça reddedilir
      if (kira && !zorla && !arti) {
        const beklenen = d.refs[izleyen];
        if (beklenen !== uzakHash) {
          satirlar.push({ kod: "!", ozet: "[rejected]", kaynak: kisaKaynak, hedef: kisaHedef, hata: "stale info", reddedildi: true });
          continue;
        }
      } else if (!zorla && !arti) {
        satirlar.push({ kod: "!", ozet: "[rejected]", kaynak: kisaKaynak, hedef: kisaHedef, hata: d.nesneler[uzakHash] ? "non-fast-forward" : "fetch first", reddedildi: true });
        continue;
      }
      if (korumaReddi(hedefRef, "zorla", kisaKaynak, kisaHedef)) continue;
      kod = "+";
      ozet = `${kisa(uzakHash)}...${kisa(yerelHash)}`;
      hata = "forced update";
    }
    if (kod !== "+" && korumaReddi(hedefRef, "guncelle", kisaKaynak, kisaHedef)) continue;
    // Uzakta zaten olan dallardan ulaşılmayan commit'ler yenidir: gizli bilgi taraması onlara bakar
    const bilinen = Object.values(uzak.refs).filter((h) => d.nesneler[h]);
    if (uzak.platform?.gizliKoruma && !etiketMi) {
      const bulgular = commitlerdekiGizliler(d, [yerelHash], bilinen);
      if (bulgular.length) {
        uzakSatirlari.push(...pushKorumasiSatirlari(hedefRef, bulgular));
        satirlar.push({ kod: "!", ozet: "[remote rejected]", kaynak: kisaKaynak, hedef: kisaHedef, hata: "push declined due to repository rule violations", reddedildi: true });
        continue;
      }
    }
    nesneleriKopyala(d, uzak, [yerelHash]);
    botTaramasi(o, uzak, [yerelHash], bilinen);
    uzak.refs[hedefRef] = yerelHash;
    if (!etiketMi) ilkGelen ??= hedefRef;
    if (!etiketMi) {
      d.refs[izleyen] = yerelHash;
      (d.dalReflog[izleyen] ??= []).push({ hash: yerelHash, mesaj: "update by push" });
      izlenecek.push(kisaKaynak);
    }
    satirlar.push({ kod, ozet, kaynak: kisaKaynak, hedef: kisaHedef, hata });
  }
  // Boş depoya ilk push: varsayılan dal gelmediyse ilk gelen dal olur (GitHub gibi)
  const varsayilan = uzakHeadDali(uzak);
  if (ilkGelen && (!varsayilan || uzak.refs[varsayilan] === undefined) && Object.keys(uzak.refs).filter((x) => x.startsWith(DAL)).length === Object.keys(uzak.refs).filter((x) => x.startsWith(DAL) && satirlar.some((y) => !y.reddedildi && y.hedef === dalAdi(x))).length) {
    uzak.head = { tur: "ref", ref: ilkGelen };
  }
  sembolleriGuncelle(d);
  const gorunen = satirlar.filter((s) => s.kod !== "=");
  const reddedilen = satirlar.filter((s) => s.reddedildi);
  const c: string[] = [];
  if (!gorunen.length) c.push("Everything up-to-date");
  else {
    if (githubNotu.length) {
      for (const dal of githubNotu) {
        if (GITLAB.test(url)) c.push("remote: ", `remote: To create a merge request for ${dal}, visit:`, `remote:   ${gosterim(url)}/-/merge_requests/new?merge_request%5Bsource_branch%5D=${encodeURIComponent(dal)}`, "remote: ");
        else c.push("remote: ", `remote: Create a pull request for '${dal}' on GitHub by visiting:`, `remote:      ${gosterim(url)}/pull/new/${dal}`, "remote: ");
      }
    }
    c.push(...uzakSatirlari);
    c.push(`To ${url}`);
    for (const s of gorunen) c.push(` ${s.kod} ${s.ozet.padEnd(17)} ${s.kaynak ? `${s.kaynak} -> ${s.hedef}` : s.hedef}${s.hata ? ` (${s.hata})` : ""}`);
  }
  if (izle && !reddedilen.length) {
    for (const dal of izlenecek) {
      d.config[`branch.${dal}.remote`] = uzakAd;
      d.config[`branch.${dal}.merge`] = DAL + dal;
      c.push(`branch '${dal}' set up to track '${uzakAd}/${dal}'.`);
    }
  }
  if (reddedilen.length) {
    c.push(`error: failed to push some refs to '${url}'`);
    const ilkRed = reddedilen[0]!;
    if (ilkRed.hata === "fetch first") c.push(HINT_FETCH_FIRST);
    else if (ilkRed.hata === "non-fast-forward") c.push(r && ilkRed.kaynak === dalAdi(r) ? HINT_NON_FF : HINT_NON_FF_DIGER);
    else if (ilkRed.hata === "already exists") c.push("hint: Updates were rejected because the tag already exists in the remote.");
    throw new GitHatasi(c.join("\n"), 1);
  }
  return c.join("\n");
}

// Uzak depodaki bir dalın son commit'i (görev hedefleri için)
export function uzakDalUcu(o: Ortam, url: string, dal: string): string | null {
  return uzakBul(o, url)?.refs[DAL + dal] ?? null;
}

