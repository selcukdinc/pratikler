// Dal ve geçmiş komutları: branch, switch, checkout, merge, reset, revert,
// cherry-pick, rebase, stash, tag, reflog.
import {
  agacaGec,
  ataMi,
  ayar,
  coz,
  commitAgaci,
  commitMi,
  commitOku,
  cozRef,
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
  indexiAyarla,
  kisa,
  kisi,
  ortakAta,
  reflogYaz,
  UZAK,
} from "./depo";
import { ucYollu } from "./fark";
import { agacAc, agacYaz, blobIcerigi, blobYaz, GitHatasi, nesneKimligi, yaz } from "./nesne";
import { status, statVeMod, suslemeler } from "./temel";
import type { Commit, Depo, Kisi, Ortam } from "./tipler";
import { ayir, degisimOzeti, ilk, mesajTemizle, ozetSatiri, var_ } from "./yardim";

const GECERSIZ_DAL = /(^[-./])|(\.\.)|([\s~^:?*[\\])|(\/$)|(\.lock$)|(@\{)|(^@$)|(\.$)/;

function dalAdiDenetle(ad: string) {
  if (!ad || GECERSIZ_DAL.test(ad)) throw new GitHatasi(`fatal: '${ad}' is not a valid branch name`);
}

function cozumsuzIndex(d: Depo) {
  if (Object.keys(d.catisma).length) throw new GitHatasi("error: you need to resolve your current index first", 1);
}

// ---- branch ----

export function branch(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-u", "--set-upstream-to"]);
  const dal = gecerliDal(d);
  const silD = var_(a, "-d", "--delete");
  const silZorla = var_(a, "-D") || (silD && var_(a, "-f", "--force"));
  if (silD || silZorla) {
    if (!a.kalan.length) throw new GitHatasi("fatal: branch name required");
    const c: string[] = [];
    for (const ad of a.kalan) {
      const r = DAL + ad;
      const h = d.refs[r];
      if (h === undefined) throw new GitHatasi(`error: branch '${ad}' not found.`, 1);
      if (r === dal) throw new GitHatasi(`error: Cannot delete branch '${ad}' checked out at '/proje'`, 1);
      const head = headCommit(d);
      const upstream = d.config[`branch.${ad}.merge`] && d.config[`branch.${ad}.remote`] ? d.refs[`${UZAK}${d.config[`branch.${ad}.remote`]}/${dalAdi(d.config[`branch.${ad}.merge`]!)}`] : undefined;
      const birlesmis = (head && ataMi(d, h, head)) || (upstream && ataMi(d, h, upstream));
      if (!silZorla && !birlesmis) throw new GitHatasi(`error: the branch '${ad}' is not fully merged.\nIf you are sure you want to delete it, run 'git branch -D ${ad}'`, 1);
      delete d.refs[r];
      delete d.dalReflog[r];
      for (const k of Object.keys(d.config)) if (k.startsWith(`branch.${ad}.`)) delete d.config[k];
      c.push(`Deleted branch ${ad} (was ${kisa(h)}).`);
    }
    return c.join("\n");
  }
  if (var_(a, "-m", "-M", "--move")) {
    const [x, y] = a.kalan.length === 1 ? [dal ? dalAdi(dal) : "", a.kalan[0]!] : [a.kalan[0]!, a.kalan[1]!];
    dalAdiDenetle(y);
    const eski = DAL + x;
    if (d.refs[eski] === undefined && !(eski === dal && headCommit(d) === null)) throw new GitHatasi(`error: refname refs/heads/${x} not found\nfatal: Branch rename failed`);
    if (d.refs[DAL + y] !== undefined && !var_(a, "-M")) throw new GitHatasi(`fatal: a branch named '${y}' already exists`);
    if (d.refs[eski] !== undefined) {
      d.refs[DAL + y] = d.refs[eski]!;
      delete d.refs[eski];
      d.dalReflog[DAL + y] = d.dalReflog[eski] ?? [];
      delete d.dalReflog[eski];
    }
    if (dal === eski) d.head = { tur: "ref", ref: DAL + y };
    return "";
  }
  const upstreamAyari = ilk(a, "-u", "--set-upstream-to");
  if (upstreamAyari) {
    const ad = a.kalan[0] ?? (dal ? dalAdi(dal) : "");
    const [uzak, ...p] = upstreamAyari.split("/");
    if (!d.refs[`${UZAK}${upstreamAyari}`]) throw new GitHatasi(`fatal: the requested upstream branch '${upstreamAyari}' does not exist`);
    d.config[`branch.${ad}.remote`] = uzak!;
    d.config[`branch.${ad}.merge`] = DAL + p.join("/");
    return `branch '${ad}' set up to track '${upstreamAyari}'.`;
  }
  if (a.kalan.length && !var_(a, "--list", "-a", "-r", "--all", "-v", "-vv")) {
    const [ad, baslangic] = a.kalan;
    dalAdiDenetle(ad!);
    if (d.refs[DAL + ad] !== undefined && !var_(a, "-f")) throw new GitHatasi(`fatal: a branch named '${ad}' already exists`);
    const h = baslangic ? cozYumusak(d, baslangic) : headCommit(d);
    if (!h || !commitMi(d, h)) throw new GitHatasi(`fatal: not a valid object name: '${baslangic ?? (dal ? dalAdi(dal) : "HEAD")}'`);
    d.refs[DAL + ad] = h;
    (d.dalReflog[DAL + ad] ??= []).push({ hash: h, mesaj: `branch: Created from ${baslangic ?? "HEAD"}` });
    // Uzak daldan açılırsa onu izler
    if (baslangic && d.refs[UZAK + baslangic] !== undefined) {
      const [uzak, ...p] = baslangic.split("/");
      d.config[`branch.${ad}.remote`] = uzak!;
      d.config[`branch.${ad}.merge`] = DAL + p.join("/");
      return `branch '${ad}' set up to track '${baslangic}'.`;
    }
    return "";
  }
  const ayrintili = var_(a, "-v", "-vv");
  const c: string[] = [];
  if (!dal) c.push(`* (HEAD detached at ${kisa(headCommit(d)!)})`);
  const yerel = Object.keys(d.refs).filter((r) => r.startsWith(DAL)).sort();
  const genislik = Math.max(0, ...yerel.map((r) => dalAdi(r).length));
  for (const r of yerel) {
    const h = d.refs[r]!;
    const ad = dalAdi(r);
    let satir = `${r === dal ? "* " : "  "}${ayrintili ? ad.padEnd(genislik) + " " + kisa(h) + " " + ozetSatiri(commitOku(d, h).mesaj) : ad}`;
    if (var_(a, "-vv") && d.config[`branch.${ad}.remote`]) satir = satir.replace(kisa(h) + " ", `${kisa(h)} [${d.config[`branch.${ad}.remote`]}/${dalAdi(d.config[`branch.${ad}.merge`] ?? "")}] `);
    c.push(satir);
  }
  if (var_(a, "-a", "--all", "-r")) {
    if (var_(a, "-r")) c.length = 0;
    for (const r of Object.keys(d.refs).filter((x) => x.startsWith(UZAK)).sort()) c.push(`  ${var_(a, "-r") ? "" : "remotes/"}${dalAdi(r)}`);
  }
  return c.join("\n");
}

// ---- switch / checkout ----

// Kopuk HEAD'den başka bir commit'e geçerken Git eski konumu hatırlatır
function oncekiKonum(d: Depo, yeni: string | null): string {
  const eski = headCommit(d);
  if (d.head.tur !== "kopuk" || !eski || eski === yeni) return "";
  return `Previous HEAD position was ${kisa(eski)} ${ozetSatiri(commitOku(d, eski).mesaj)}\n`;
}

function dalaGec(o: Ortam, d: Depo, ref: string, yeni: boolean): string {
  const once = gecerliDal(d);
  const oncekiAd = once ? dalAdi(once) : kisa(headCommit(d) ?? "");
  if (ref === once && !yeni) return `Already on '${dalAdi(ref)}'` + yerelDegisiklikler(o, d);
  const onceki = oncekiKonum(d, d.refs[ref] ?? null);
  agacaGec(o, d, d.refs[ref] ?? null);
  d.head = { tur: "ref", ref };
  reflogYaz(d, d.refs[ref] ?? "", `checkout: moving from ${oncekiAd} to ${dalAdi(ref)}`, null);
  return onceki + (yeni ? `Switched to a new branch '${dalAdi(ref)}'` : `Switched to branch '${dalAdi(ref)}'`) + yerelDegisiklikler(o, d);
}

function yerelDegisiklikler(o: Ortam, d: Depo): string {
  const s = durum(o, d);
  const harf = { "new file": "A", modified: "M", deleted: "D" } as const;
  const m = new Map<string, string>();
  for (const x of s.hazir) m.set(x.yol, harf[x.tur]);
  for (const x of s.hazirDegil) m.set(x.yol, harf[x.tur]);
  const satirlar = [...m].sort().map(([y, h]) => `${h}\t${y}`);
  return satirlar.length ? "\n" + satirlar.join("\n") : "";
}

function kopukGec(o: Ortam, d: Depo, h: string, rev: string): string {
  const once = gecerliDal(d);
  const oncekiAd = once ? dalAdi(once) : kisa(headCommit(d) ?? "");
  const onceki = oncekiKonum(d, h);
  agacaGec(o, d, h);
  d.head = { tur: "kopuk", hash: h };
  reflogYaz(d, h, `checkout: moving from ${oncekiAd} to ${rev}`, null);
  const ipucu = ayar(o, "advice.detachedhead") === undefined ? "Turn off this advice by setting config variable advice.detachedHead to false\n\n" : "";
  if (ayar(o, "advice.detachedhead") === "false") return `${onceki}HEAD is now at ${kisa(h)} ${ozetSatiri(commitOku(d, h).mesaj)}`;
  return `${onceki}Note: switching to '${rev}'.\n\nYou are in 'detached HEAD' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by switching back to a branch.\n\nIf you want to create a new branch to retain commits you create, you may\ndo so (now or later) by using -c with the switch command. Example:\n\n  git switch -c <new-branch-name>\n\nOr undo this operation with:\n\n  git switch -\n\n${ipucu}HEAD is now at ${kisa(h)} ${ozetSatiri(commitOku(d, h).mesaj)}`;
}

function oncekiDal(d: Depo): string {
  for (let i = d.reflog.length - 1; i >= 0; i--) {
    const m = /^checkout: moving from (\S+) to /.exec(d.reflog[i]!.mesaj);
    if (m) return m[1]!;
  }
  throw new GitHatasi("fatal: invalid reference: @{-1}");
}

function yeniDalAc(o: Ortam, d: Depo, ad: string, baslangic: string | undefined, zorla: boolean): string {
  dalAdiDenetle(ad);
  if (d.refs[DAL + ad] !== undefined && !zorla) throw new GitHatasi(`fatal: a branch named '${ad}' already exists`);
  const h = baslangic ? coz(d, baslangic) : headCommit(d);
  const ref = DAL + ad;
  if (h === null) {
    // Henüz commit yokken yalnızca HEAD'in gösterdiği dal adı değişir
    d.head = { tur: "ref", ref };
    return `Switched to a new branch '${ad}'`;
  }
  agacaGec(o, d, h);
  d.refs[ref] = h;
  (d.dalReflog[ref] ??= []).push({ hash: h, mesaj: `branch: Created from ${baslangic ?? "HEAD"}` });
  let ek = "";
  if (baslangic && d.refs[UZAK + baslangic] !== undefined) {
    const [uzak, ...p] = baslangic.split("/");
    d.config[`branch.${ad}.remote`] = uzak!;
    d.config[`branch.${ad}.merge`] = DAL + p.join("/");
    ek = `branch '${ad}' set up to track '${baslangic}'.\n`;
  }
  const once = gecerliDal(d);
  d.head = { tur: "ref", ref };
  reflogYaz(d, h, `checkout: moving from ${once ? dalAdi(once) : kisa(h)} to ${ad}`, null);
  return `${ek}Switched to a new branch '${ad}'` + yerelDegisiklikler(o, d);
}

// Uzakta olup yerelde olmayan dal adına geçilince izleyen yerel dal açılır
function uzaktanDal(d: Depo, ad: string): string | null {
  const adaylar = Object.keys(d.refs).filter((r) => r.startsWith(UZAK) && r.endsWith("/" + ad) && r.split("/").length === 4);
  return adaylar.length === 1 ? dalAdi(adaylar[0]!) : null;
}

export function switchKomutu(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-c", "-C", "--create"]);
  if (d.islem) {
    const fiil = { merge: "merging", "cherry-pick": "cherry-picking", revert: "reverting", rebase: "rebasing" }[d.islem.tur];
    throw new GitHatasi(`fatal: cannot switch branch while ${fiil}\nConsider "git ${d.islem.tur === "rebase" ? "rebase" : d.islem.tur} --quit" or "git worktree add".`);
  }
  cozumsuzIndex(d);
  const yeni = ilk(a, "-c", "--create", "-C");
  if (yeni) return yeniDalAc(o, d, yeni, a.kalan[0], a.deger.has("-C"));
  const hedef = a.kalan[0];
  if (!hedef) throw new GitHatasi("fatal: missing branch or commit argument", 128);
  if (var_(a, "--detach", "-d")) {
    const h = coz(d, hedef);
    return kopukGec(o, d, h, hedef);
  }
  const ad = hedef === "-" ? oncekiDal(d) : hedef;
  if (d.refs[DAL + ad] !== undefined || (gecerliDal(d) === DAL + ad && headCommit(d) === null)) return dalaGec(o, d, DAL + ad, false);
  const uzak = uzaktanDal(d, ad);
  if (uzak) return yeniDalAc(o, d, ad, uzak, false);
  if (cozYumusak(d, ad)) throw new GitHatasi(`fatal: a branch is expected, got ${d.refs[ETIKET + ad] ? "tag" : "commit"} '${ad}'\nhint: If you want to detach HEAD at the commit, try again with the --detach option.`);
  throw new GitHatasi(`fatal: invalid reference: ${ad}`);
}

export function checkout(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-b", "-B"]);
  const yeni = ilk(a, "-b", "-B");
  if (yeni) {
    cozumsuzIndex(d);
    return yeniDalAc(o, d, yeni, a.kalan[0], a.deger.has("-B"));
  }
  // checkout [rev] -- yollar  ya da  checkout dosya
  const yollar = a.yollar;
  const ilkArg = a.kalan[0];
  if (yollar || (ilkArg && !cozYumusak(d, ilkArg === "-" ? "HEAD" : ilkArg) && !uzaktanDal(d, ilkArg) && ilkArg !== "-")) {
    const rev = yollar ? a.kalan[0] : undefined;
    const liste = yollar ?? a.kalan;
    const kaynak = rev ? commitAgaci(d, coz(d, rev)) : null;
    let sayi = 0;
    for (const spec of liste.map((x) => (o.cwd ? `${o.cwd}/${x}` : x).replace(/\/$/, "").replace(/^\.$/, ""))) {
      const evren = kaynak ? Object.keys(kaynak) : Object.keys(d.index);
      const eslesen = evren.filter((y) => spec === "" || y === spec || y.startsWith(spec + "/"));
      if (!eslesen.length) throw new GitHatasi(`error: pathspec '${spec}' did not match any file(s) known to git`, 1);
      for (const y of eslesen) {
        const h = kaynak ? kaynak[y]! : d.index[y]!;
        if (kaynak) d.index[y] = h;
        o.dosyalar[y] = blobIcerigi(d, h);
        sayi++;
      }
    }
    return `Updated ${sayi} path${sayi === 1 ? "" : "s"} from ${rev ? "the index" : "the index"}`.replace("from the index", rev ? `from ${kisa(coz(d, rev))}` : "from the index");
  }
  cozumsuzIndex(d);
  if (!ilkArg) throw new GitHatasi("fatal: you must specify a branch or path", 128);
  const ad = ilkArg === "-" ? oncekiDal(d) : ilkArg;
  if (d.refs[DAL + ad] !== undefined && !var_(a, "--detach")) return dalaGec(o, d, DAL + ad, false);
  const uzak = d.refs[DAL + ad] === undefined ? uzaktanDal(d, ad) : null;
  if (uzak && !var_(a, "--detach")) return yeniDalAc(o, d, ad, uzak, false);
  return kopukGec(o, d, coz(d, ad), ad);
}

// ---- birleştirme çekirdeği ----

interface BirlesimSonucu {
  catismalar: string[];
  satirlar: string[];
}

// taban -> biz ve taban -> onlar değişikliklerini index ve çalışma dizinine uygular.
// Önce yerel değişikliklerin ezilmeyeceğini denetler.
function agaclariBirlestir(o: Ortam, d: Depo, taban: Record<string, string>, biz: Record<string, string>, onlar: Record<string, string>, bizEtiket: string, onlarEtiket: string, islemAdi: string): BirlesimSonucu {
  const yollar = [...new Set([...Object.keys(taban), ...Object.keys(biz), ...Object.keys(onlar)])].sort();
  const hazir = Object.keys({ ...biz, ...d.index }).filter((y) => biz[y] !== d.index[y]);
  const etkilenen = yollar.filter((y) => biz[y] !== onlar[y] && taban[y] !== onlar[y]);
  const kirli = etkilenen.filter((y) => {
    const calisan = o.dosyalar[y];
    const bizIcerik = biz[y] ? blobIcerigi(d, biz[y]!) : undefined;
    return calisan !== bizIcerik;
  });
  const ezilecek = [...new Set([...hazir, ...kirli])].sort();
  if (ezilecek.length)
    throw new GitHatasi(
      `error: Your local changes to the following files would be overwritten by ${islemAdi}:\n${ezilecek.map((y) => "\t" + y).join("\n")}\nPlease commit your changes or stash them before you ${islemAdi}.\nAborting`,
      1,
    );
  const satirlar: string[] = [];
  const catismalar: string[] = [];
  for (const y of yollar) {
    const t = taban[y];
    const b = biz[y];
    const n = onlar[y];
    let sonuc: string | undefined;
    if (b === n) sonuc = b;
    else if (t === b) sonuc = n;
    else if (t === n) sonuc = b;
    else if (b === undefined || n === undefined) {
      const silen = b === undefined ? bizEtiket : onlarEtiket;
      const degistiren = b === undefined ? onlarEtiket : bizEtiket;
      satirlar.push(`CONFLICT (modify/delete): ${y} deleted in ${silen} and modified in ${degistiren}.  Version ${degistiren} of ${y} left in tree.`);
      d.catisma[y] = { ...(t ? { taban: t } : {}), ...(b ? { biz: b } : {}), ...(n ? { onlar: n } : {}) };
      delete d.index[y];
      o.dosyalar[y] = blobIcerigi(d, (b ?? n)!);
      catismalar.push(y);
      continue;
    } else {
      satirlar.push(`Auto-merging ${y}`);
      const m = ucYollu(t ? blobIcerigi(d, t) : "", blobIcerigi(d, b), blobIcerigi(d, n), bizEtiket, onlarEtiket);
      if (m.catisma) {
        satirlar.push(`CONFLICT (${t ? "content" : "add/add"}): Merge conflict in ${y}`);
        d.catisma[y] = { ...(t ? { taban: t } : {}), biz: b, onlar: n };
        delete d.index[y];
        o.dosyalar[y] = m.metin;
        catismalar.push(y);
        continue;
      }
      sonuc = blobYaz(d, m.metin);
    }
    if (sonuc === undefined) {
      delete d.index[y];
      delete o.dosyalar[y];
    } else {
      d.index[y] = sonuc;
      o.dosyalar[y] = blobIcerigi(d, sonuc);
    }
  }
  return { catismalar, satirlar };
}

function commitYaz(d: Depo, c: Commit): string {
  return yaz(d, c);
}

// ---- merge ----

export function merge(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-m", "--message"]);
  if (var_(a, "--abort")) {
    if (d.islem?.tur !== "merge") throw new GitHatasi("fatal: There is no merge to abort (MERGE_HEAD missing).");
    agacaGec(o, d, headCommit(d), true);
    d.islem = null;
    return "";
  }
  if (var_(a, "--continue")) {
    if (d.islem?.tur !== "merge") throw new GitHatasi("fatal: There is no merge in progress (MERGE_HEAD missing).");
    return devamCommit(o, d);
  }
  if (d.islem?.tur === "merge") throw new GitHatasi("error: Merging is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.");
  if (d.islem) throw new GitHatasi(`fatal: You have not concluded your ${d.islem.tur} (${d.islem.tur === "rebase" ? "rebase" : d.islem.tur.toUpperCase().replace("-", "_") + "_HEAD"} exists).`);
  const hedefAd = a.kalan[0];
  if (!hedefAd) throw new GitHatasi("fatal: No remote for the current branch.");
  const onlar = cozYumusak(d, hedefAd);
  if (!onlar) throw new GitHatasi(`merge: ${hedefAd} - not something we can merge`);
  const biz = headCommit(d);
  const dal = gecerliDal(d);
  if (biz === null) {
    agacaGec(o, d, onlar);
    headIlerlet(d, onlar, `merge ${hedefAd}: Fast-forward`);
    return "";
  }
  if (ataMi(d, onlar, biz)) return "Already up to date.";
  const ff = ataMi(d, biz, onlar);
  const noFf = var_(a, "--no-ff");
  if (var_(a, "--ff-only") && !ff) throw new GitHatasi("fatal: Not possible to fast-forward, aborting.");
  const squash = var_(a, "--squash");
  if (ff && !noFf && !squash) {
    const once = commitAgaci(d, biz);
    try {
      agacaGec(o, d, onlar, false, "merge");
    } catch (e) {
      if (e instanceof GitHatasi) throw new GitHatasi(`Updating ${kisa(biz)}..${kisa(onlar)}\n${e.message}`, e.kod);
      throw e;
    }
    headIlerlet(d, onlar, `merge ${hedefAd}: Fast-forward`);
    d.origHead = biz;
    return [`Updating ${kisa(biz)}..${kisa(onlar)}`, "Fast-forward", statVeMod(d, once, commitAgaci(d, onlar))].join("\n");
  }
  const taban = ortakAta(d, biz, onlar);
  const once = commitAgaci(d, biz);
  const r = agaclariBirlestir(o, d, commitAgaci(d, taban), once, commitAgaci(d, onlar), "HEAD", hedefAd, "merge");
  d.origHead = biz;
  const mesaj = mesajTemizle(ilk(a, "-m", "--message") ?? birlesmeMesaji(d, hedefAd, dal));
  if (squash) {
    return [...r.satirlar, r.catismalar.length ? "Squash commit -- not updating HEAD\nAutomatic merge failed; fix conflicts and then commit the result." : "Squash commit -- not updating HEAD"].join("\n");
  }
  if (r.catismalar.length) {
    d.islem = { tur: "merge", onlar, mesaj };
    throw new GitHatasi([...r.satirlar, "Automatic merge failed; fix conflicts and then commit the result."].join("\n"), 1);
  }
  const ben = kisi(o);
  const h = commitYaz(d, { tur: "commit", agac: agacYaz(d, d.index), ebeveynler: [biz, onlar], yazar: ben, isleyen: ben, mesaj });
  headIlerlet(d, h, `merge ${hedefAd}: Merge made by the 'ort' strategy.`);
  return [...r.satirlar, "Merge made by the 'ort' strategy.", statVeMod(d, once, commitAgaci(d, h))].filter(Boolean).join("\n");
}

function birlesmeMesaji(d: Depo, ad: string, dal: string | null): string {
  let m: string;
  if (d.refs[DAL + ad] !== undefined) m = `Merge branch '${ad}'`;
  else if (d.refs[ETIKET + ad] !== undefined) m = `Merge tag '${ad}'`;
  else if (d.refs[UZAK + ad] !== undefined) m = `Merge remote-tracking branch '${ad}'`;
  else m = `Merge commit '${ad}'`;
  const hedef = dal ? dalAdi(dal) : null;
  if (hedef && hedef !== "main" && hedef !== "master") m += ` into ${hedef}`;
  return m;
}

// Çakışma çözüldükten sonra commit (merge --continue, cherry-pick/revert --continue)
function devamCommit(o: Ortam, d: Depo): string {
  if (Object.keys(d.catisma).length)
    throw new GitHatasi("error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.");
  const islem = d.islem!;
  if (islem.tur === "rebase") throw new GitHatasi("fatal: rebase in progress");
  const ben = kisi(o);
  const head = headCommit(d)!;
  const ebeveynler = islem.tur === "merge" ? [head, islem.onlar] : [head];
  const agac = agacYaz(d, d.index);
  if (islem.tur === "revert" && agac === commitOku(d, head).agac) throw new GitHatasi(status(o, []), 1);
  if (islem.tur !== "merge" && agac === commitOku(d, head).agac) {
    throw new GitHatasi(`${status(o, [])}\nThe previous ${islem.tur} is now empty, possibly due to conflict resolution.\nIf you wish to commit it anyway, use:\n\n    git commit --allow-empty\n\nOtherwise, please use 'git ${islem.tur} --skip'`, 1);
  }
  const yazar = islem.tur === "cherry-pick" ? islem.yazar : ben;
  const h = commitYaz(d, { tur: "commit", agac, ebeveynler, yazar, isleyen: ben, mesaj: islem.mesaj });
  headIlerlet(d, h, `commit${islem.tur === "merge" ? " (merge)" : ""}: ${ozetSatiri(islem.mesaj)}`);
  d.islem = null;
  const dal = gecerliDal(d);
  return `[${dal ? dalAdi(dal) : "detached HEAD"} ${kisa(h)}] ${ozetSatiri(islem.mesaj)}`;
}

// ---- reset ----

export function reset(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const kip = var_(a, "--hard") ? "hard" : var_(a, "--soft") ? "soft" : "mixed";
  const head = headCommit(d);
  // reset [rev] -- yollar  ya da  reset dosya: yalnızca index
  const yollar = a.yollar ?? (a.kalan.length && !cozYumusak(d, a.kalan[0]!) ? a.kalan : a.kalan.length > 1 ? a.kalan.slice(1) : null);
  if (yollar) {
    const rev = a.yollar ? a.kalan[0] : !cozYumusak(d, a.kalan[0]!) ? undefined : a.kalan[0];
    if (kip !== "mixed") throw new GitHatasi(`fatal: Cannot do ${kip} reset with paths.`);
    const kaynak = commitAgaci(d, rev ? coz(d, rev) : head);
    for (const spec of yollar.map((x) => (o.cwd ? `${o.cwd}/${x}` : x).replace(/^\.$/, ""))) {
      const eslesen = [...new Set([...Object.keys(kaynak), ...Object.keys(d.index)])].filter((y) => spec === "" || y === spec || y.startsWith(spec + "/"));
      for (const y of eslesen) {
        if (kaynak[y]) d.index[y] = kaynak[y]!;
        else delete d.index[y];
        delete d.catisma[y];
      }
    }
    return degisikListesi(o, d);
  }
  const rev = a.kalan[0] ?? "HEAD";
  const hedef = coz(d, rev);
  if (!commitMi(d, hedef)) throw new GitHatasi(`fatal: Could not parse object '${rev}'.`);
  if (head) d.origHead = head;
  if (kip === "hard") agacaGec(o, d, hedef, true);
  else if (kip === "mixed") indexiAyarla(d, hedef);
  if (d.head.tur === "ref") d.refs[d.head.ref] = hedef;
  else d.head = { tur: "kopuk", hash: hedef };
  reflogYaz(d, hedef, `reset: moving to ${rev}`);
  if (kip !== "soft") d.islem = d.islem?.tur === "rebase" ? d.islem : null;
  if (kip === "hard") return `HEAD is now at ${kisa(hedef)} ${ozetSatiri(commitOku(d, hedef).mesaj)}`;
  if (kip === "mixed") return degisikListesi(o, d);
  return "";
}

function degisikListesi(o: Ortam, d: Depo): string {
  const s = durum(o, d);
  if (!s.hazirDegil.length) return "";
  return "Unstaged changes after reset:\n" + s.hazirDegil.map((x) => `${x.tur === "deleted" ? "D" : "M"}\t${x.yol}`).join("\n");
}

// ---- cherry-pick ve revert ----

function etiket(d: Depo, h: string) {
  return `${kisa(h)} (${ozetSatiri(commitOku(d, h).mesaj)})`;
}

// Tek bir commit'in değişikliğini HEAD'e uygular; çakışmada işlemi kaydedip durur
function uygula(o: Ortam, d: Depo, h: string, tur: "cherry-pick" | "revert" | "rebase"): { commit: string | null; satirlar: string[]; catisma: boolean; bos: boolean } {
  const c = commitOku(d, h);
  if (c.ebeveynler.length > 1) throw new GitHatasi(`error: commit ${h} is a merge but no -m option was given.\nfatal: ${tur === "revert" ? "revert" : "cherry-pick"} failed`);
  const ust = c.ebeveynler[0] ?? null;
  const head = headCommit(d)!;
  const revert = tur === "revert";
  const taban = revert ? agacAc(d, c.agac) : commitAgaci(d, ust);
  const onlar = revert ? commitAgaci(d, ust) : agacAc(d, c.agac);
  const onlarEtiket = revert ? `parent of ${etiket(d, h)}` : etiket(d, h);
  const r = agaclariBirlestir(o, d, taban, commitAgaci(d, head), onlar, "HEAD", onlarEtiket, tur === "rebase" ? "merge" : tur === "revert" ? "revert" : "cherry-pick");
  const mesaj = revert ? `Revert "${ozetSatiri(c.mesaj)}"\n\nThis reverts commit ${h}.\n` : c.mesaj;
  if (r.catismalar.length) {
    if (tur === "cherry-pick") d.islem = { tur: "cherry-pick", commit: h, mesaj, yazar: c.yazar };
    if (tur === "revert") d.islem = { tur: "revert", commit: h, mesaj };
    return { commit: null, satirlar: r.satirlar, catisma: true, bos: false };
  }
  const agac = agacYaz(d, d.index);
  if (agac === commitOku(d, head).agac) return { commit: null, satirlar: r.satirlar, catisma: false, bos: true };
  const ben = kisi(o);
  const yazar: Kisi = revert ? ben : c.yazar;
  const yeni = commitYaz(d, { tur: "commit", agac, ebeveynler: [head], yazar, isleyen: ben, mesaj });
  return { commit: yeni, satirlar: r.satirlar, catisma: false, bos: false };
}

export function cherryPick(o: Ortam, args: string[]): string {
  return secVeUygula(o, args, "cherry-pick");
}

export function revert(o: Ortam, args: string[]): string {
  return secVeUygula(o, args, "revert");
}

function secVeUygula(o: Ortam, args: string[], tur: "cherry-pick" | "revert"): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-m", "--mainline"]);
  if (var_(a, "--abort")) {
    if (d.islem?.tur !== tur) throw new GitHatasi(`error: no ${tur} in progress\nfatal: ${tur} failed`);
    agacaGec(o, d, headCommit(d), true);
    d.islem = null;
    return "";
  }
  if (var_(a, "--continue")) {
    if (d.islem?.tur !== tur) throw new GitHatasi(`error: no ${tur} in progress\nfatal: ${tur} failed`);
    return devamCommit(o, d);
  }
  if (var_(a, "--skip")) {
    if (d.islem?.tur !== tur) throw new GitHatasi(`error: no ${tur} in progress\nfatal: ${tur} failed`);
    agacaGec(o, d, headCommit(d), true);
    d.islem = null;
    return "";
  }
  if (d.islem) throw new GitHatasi(`error: ${d.islem.tur === tur ? `${tur} is already in progress` : "you have unmerged files"}\nhint: try "git ${tur} (--continue | --abort | --quit)"\nfatal: ${tur} failed`);
  if (!a.kalan.length) throw new GitHatasi(`usage: git ${tur} [<options>] <commit-ish>...`, 129);
  if (!headCommit(d)) throw new GitHatasi(`fatal: your current branch '${dalAdi(gecerliDal(d)!)}' does not have any commits yet`);
  const commitler = a.kalan.map((r) => coz(d, r));
  const c: string[] = [];
  for (const h of commitler) {
    const r = uygula(o, d, h, tur);
    c.push(...r.satirlar);
    if (r.catisma) {
      const fiil = tur === "revert" ? "revert" : "apply";
      c.push(
        `error: could not ${fiil} ${kisa(h)}... ${ozetSatiri(commitOku(d, h).mesaj)}`,
        `hint: After resolving the conflicts, mark them with`,
        `hint: "git add/rm <pathspec>", then run`,
        `hint: "git ${tur} --continue".`,
        `hint: You can instead skip this commit with "git ${tur} --skip".`,
        `hint: To abort and get back to the state before "git ${tur}",`,
        `hint: run "git ${tur} --abort".`,
      );
      throw new GitHatasi(c.join("\n"), 1);
    }
    if (r.bos) {
      c.push(`On branch ${gecerliDal(d) ? dalAdi(gecerliDal(d)!) : "HEAD"}`, `The previous ${tur} is now empty, possibly due to conflict resolution.`);
      d.islem = tur === "cherry-pick" ? { tur, commit: h, mesaj: commitOku(d, h).mesaj, yazar: commitOku(d, h).yazar } : { tur, commit: h, mesaj: "" };
      throw new GitHatasi(c.join("\n"), 1);
    }
    const once = commitAgaci(d, headCommit(d));
    const mesaj = commitOku(d, r.commit!).mesaj;
    headIlerlet(d, r.commit!, `${tur}: ${ozetSatiri(mesaj)}`);
    const dal = gecerliDal(d);
    c.push(`[${dal ? dalAdi(dal) : "detached HEAD"} ${kisa(r.commit!)}] ${ozetSatiri(mesaj)}`);
    if (tur === "cherry-pick") c.push(` Date: ${tarihKisa(commitOku(d, r.commit!).yazar.zaman)}`);
    c.push(degisimOzeti(d, once, commitAgaci(d, r.commit!)));
  }
  return c.filter(Boolean).join("\n");
}

function tarihKisa(s: number) {
  return new Date(s * 1000).toUTCString();
}

// ---- rebase ----

// Bir commit'in yaptığı değişikliğin özeti (aynı yamayı ikinci kez uygulamamak için)
function yamaKimligi(d: Depo, h: string): string {
  const c = commitOku(d, h);
  const once = commitAgaci(d, c.ebeveynler[0] ?? null);
  const sonra = agacAc(d, c.agac);
  const parcalar: string[] = [];
  for (const y of [...new Set([...Object.keys(once), ...Object.keys(sonra)])].sort()) {
    if (once[y] === sonra[y]) continue;
    parcalar.push(`${y}:${once[y] ? blobIcerigi(d, once[y]!) : ""}->${sonra[y] ? blobIcerigi(d, sonra[y]!) : ""}`);
  }
  return parcalar.join("\0");
}

export function rebase(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["--onto"]);
  const islem = d.islem;
  if (var_(a, "--abort")) {
    if (islem?.tur !== "rebase") throw new GitHatasi("fatal: No rebase in progress?");
    agacaGec(o, d, islem.eskiUc, true);
    if (islem.dal) {
      d.refs[islem.dal] = islem.eskiUc;
      d.head = { tur: "ref", ref: islem.dal };
    } else d.head = { tur: "kopuk", hash: islem.eskiUc };
    reflogYaz(d, islem.eskiUc, `rebase (abort): returning to ${islem.dal ?? islem.eskiUc}`, null);
    d.islem = null;
    return "";
  }
  if (var_(a, "--continue") || var_(a, "--skip")) {
    if (islem?.tur !== "rebase") throw new GitHatasi("fatal: No rebase in progress?");
    if (var_(a, "--skip")) agacaGec(o, d, headCommit(d), true);
    else {
      if (Object.keys(d.catisma).length)
        throw new GitHatasi(`${Object.keys(d.catisma).map((y) => `${y}: needs merge`).join("\n")}\nYou must edit all merge conflicts and then\nmark them as resolved using git add`, 1);
      const duran = islem.duran!;
      const agac = agacYaz(d, d.index);
      const head = headCommit(d)!;
      if (agac !== commitOku(d, head).agac) {
        const c = commitOku(d, duran);
        const yeni = commitYaz(d, { tur: "commit", agac, ebeveynler: [head], yazar: c.yazar, isleyen: kisi(o), mesaj: c.mesaj });
        d.head = { tur: "kopuk", hash: yeni };
        reflogYaz(d, yeni, `rebase (continue): ${ozetSatiri(c.mesaj)}`, null);
      }
    }
    islem.duran = undefined;
    return rebaseIlerle(o, d);
  }
  if (islem) throw new GitHatasi(`fatal: It seems that there is already a rebase-merge directory, and\nI wonder if you are in the middle of another rebase.`);
  if (var_(a, "-i", "--interactive")) throw new GitHatasi("Etkileşimli rebase bu sandbox'ta görsel düzenleyiciyle yapılır (11. ünite); şimdilik `git rebase <dal>` kullan.", 1);
  const upstreamAd = a.kalan[0];
  if (!upstreamAd) throw new GitHatasi("fatal: no upstream configured for the current branch");
  const upstream = coz(d, upstreamAd);
  const ontoAd = ilk(a, "--onto");
  const onto = ontoAd ? coz(d, ontoAd) : upstream;
  const head = headCommit(d);
  if (!head) throw new GitHatasi("fatal: invalid upstream");
  const s = durum(o, d);
  if (s.hazir.length || s.hazirDegil.length) throw new GitHatasi("error: cannot rebase: You have unstaged changes.\nerror: Please commit or stash them.", 1);
  const dal = gecerliDal(d);
  if (!ontoAd && ataMi(d, upstream, head)) return `Current branch ${dal ? dalAdi(dal) : "HEAD"} is up to date.`;
  const ustYamalar = new Set(gecmis(d, [onto], [head]).map((h) => yamaKimligi(d, h)));
  const kalan = gecmis(d, [head], [upstream])
    .reverse()
    .filter((h) => commitOku(d, h).ebeveynler.length < 2 && !ustYamalar.has(yamaKimligi(d, h)));
  d.origHead = head;
  agacaGec(o, d, onto);
  d.head = { tur: "kopuk", hash: onto };
  reflogYaz(d, onto, `rebase (start): checkout ${ontoAd ?? upstreamAd}`, null);
  d.islem = { tur: "rebase", dal, eskiUc: head, onto, kalan };
  return rebaseIlerle(o, d);
}

function rebaseIlerle(o: Ortam, d: Depo): string {
  const islem = d.islem;
  if (islem?.tur !== "rebase") return "";
  const c: string[] = [];
  while (islem.kalan.length) {
    const h = islem.kalan.shift()!;
    const r = uygula(o, d, h, "rebase");
    c.push(...r.satirlar);
    if (r.catisma) {
      islem.duran = h;
      c.push(
        `error: could not apply ${kisa(h)}... ${ozetSatiri(commitOku(d, h).mesaj)}`,
        "hint: Resolve all conflicts manually, mark them as resolved with",
        'hint: "git add/rm <conflicted_files>", then run "git rebase --continue".',
        'hint: You can instead skip this commit: run "git rebase --skip".',
        'hint: To abort and get back to the state before "git rebase", run "git rebase --abort".',
        `Could not apply ${kisa(h)}... ${ozetSatiri(commitOku(d, h).mesaj)}`,
      );
      throw new GitHatasi(c.join("\n"), 1);
    }
    if (r.commit) {
      d.head = { tur: "kopuk", hash: r.commit };
      reflogYaz(d, r.commit, `rebase (pick): ${ozetSatiri(commitOku(d, h).mesaj)}`, null);
    }
  }
  const son = headCommit(d)!;
  if (islem.dal) {
    d.refs[islem.dal] = son;
    (d.dalReflog[islem.dal] ??= []).push({ hash: son, mesaj: `rebase (finish): ${islem.dal} onto ${islem.onto}` });
    d.head = { tur: "ref", ref: islem.dal };
    d.reflog.push({ hash: son, mesaj: `rebase (finish): returning to ${islem.dal}` });
  }
  d.islem = null;
  c.push(`Successfully rebased and updated ${islem.dal ?? "detached HEAD"}.`);
  return c.join("\n");
}

// ---- stash ----

export function stash(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const alt = args[0] && !args[0].startsWith("-") ? args[0] : "push";
  const a = ayir(alt === "push" && args[0] !== "push" ? args : args.slice(1), ["-m", "--message"]);
  const head = headCommit(d);
  const dal = gecerliDal(d);
  const dalGosterim = dal ? dalAdi(dal) : "(no branch)";
  const stashAdi = (i: number) => `stash@{${i}}`;
  const sec = (): number => {
    const r = a.kalan[0];
    if (!r) return 0;
    const m = /^(?:stash@\{)?(\d+)\}?$/.exec(r);
    if (!m || !d.stash[d.stash.length - 1 - Number(m[1])]) throw new GitHatasi(`error: ${r} is not a valid reference`, 1);
    return Number(m[1]);
  };
  const kayit = (i: number) => d.stash[d.stash.length - 1 - i]!;
  switch (alt) {
    case "push":
    case "save": {
      if (!head) throw new GitHatasi("You do not have the initial commit yet", 1);
      cozumsuzIndex(d);
      const s = durum(o, d);
      const izlenmeyenDe = var_(a, "-u", "--include-untracked");
      if (!s.hazir.length && !s.hazirDegil.length && !(izlenmeyenDe && s.izlenmeyen.length)) return "No local changes to save";
      const ben = kisi(o);
      const hc = commitOku(d, head);
      const tanim = `${dalGosterim}: ${kisa(head)} ${ozetSatiri(hc.mesaj)}`;
      const iCommit = commitYaz(d, { tur: "commit", agac: agacYaz(d, d.index), ebeveynler: [head], yazar: ben, isleyen: ben, mesaj: `index on ${tanim}\n` });
      const calisma: Record<string, string> = {};
      for (const y of Object.keys(d.index)) if (y in o.dosyalar) calisma[y] = blobYaz(d, o.dosyalar[y]!);
      const ebeveynler = [head, iCommit];
      if (izlenmeyenDe && s.izlenmeyen.length) {
        const u: Record<string, string> = {};
        for (const y of s.izlenmeyen) u[y] = blobYaz(d, o.dosyalar[y]!);
        ebeveynler.push(commitYaz(d, { tur: "commit", agac: agacYaz(d, u), ebeveynler: [], yazar: ben, isleyen: ben, mesaj: `untracked files on ${tanim}\n` }));
      }
      const m = ilk(a, "-m", "--message");
      const mesaj = m ? `On ${dalGosterim}: ${m}` : `WIP on ${tanim}`;
      const w = commitYaz(d, { tur: "commit", agac: agacYaz(d, calisma), ebeveynler, yazar: ben, isleyen: ben, mesaj });
      d.stash.push({ hash: w, mesaj });
      d.refs["refs/stash"] = w;
      agacaGec(o, d, head, true);
      if (izlenmeyenDe) for (const y of s.izlenmeyen) delete o.dosyalar[y];
      return `Saved working directory and index state ${mesaj}`;
    }
    case "list":
      return d.stash
        .map((s, i) => `${stashAdi(d.stash.length - 1 - i)}: ${s.mesaj}`)
        .reverse()
        .join("\n");
    case "show": {
      if (!d.stash.length) throw new GitHatasi("error: No stash entries found.", 1);
      const k = kayit(sec());
      const w = commitOku(d, k.hash);
      return degisimOzeti(d, commitAgaci(d, w.ebeveynler[0]!), agacAc(d, w.agac), false);
    }
    case "drop":
    case "pop":
    case "apply": {
      if (!d.stash.length) throw new GitHatasi("error: No stash entries found.", 1);
      const i = sec();
      const k = kayit(i);
      const c: string[] = [];
      if (alt !== "drop") {
        if (!head) throw new GitHatasi("error: no HEAD", 1);
        const w = commitOku(d, k.hash);
        const taban = commitAgaci(d, w.ebeveynler[0]!);
        const indexAgaci = commitAgaci(d, w.ebeveynler[1]!);
        const yeniler = Object.keys(indexAgaci).filter((y) => !(y in taban));
        const r = agaclariBirlestir(o, d, taban, commitAgaci(d, head), agacAc(d, w.agac), "Updated upstream", "Stashed changes", "merge");
        // Index eski haline döner; yalnızca stash'te yeni eklenen dosyalar hazırlıkta kalır
        if (!r.catismalar.length) {
          const headAgac = commitAgaci(d, head);
          for (const y of Object.keys(d.index)) if (!yeniler.includes(y)) (headAgac[y] ? (d.index[y] = headAgac[y]!) : delete d.index[y]);
        }
        if (w.ebeveynler[2]) {
          const u = commitAgaci(d, w.ebeveynler[2]);
          for (const [y, h] of Object.entries(u)) {
            if (y in o.dosyalar) throw new GitHatasi(`${y} already exists, no checkout\nerror: could not restore untracked files from stash`, 1);
            o.dosyalar[y] = blobIcerigi(d, h);
          }
        }
        c.push(...r.satirlar);
        if (r.catismalar.length) {
          c.push(status(o, []), "The stash entry is kept in case you need it again.");
          throw new GitHatasi(c.join("\n"), 1);
        }
        c.push(status(o, []));
      }
      if (alt !== "apply") {
        d.stash.splice(d.stash.length - 1 - i, 1);
        if (d.stash.length) d.refs["refs/stash"] = d.stash[d.stash.length - 1]!.hash;
        else delete d.refs["refs/stash"];
        c.push(`Dropped refs/stash@{${i}} (${k.hash})`);
      }
      return c.join("\n");
    }
    case "clear":
      d.stash = [];
      delete d.refs["refs/stash"];
      return "";
    default:
      throw new GitHatasi(`error: unknown subcommand: \`${alt}'`, 129);
  }
}

// ---- tag ----

export function tag(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-m", "--message"]);
  if (var_(a, "-d", "--delete")) {
    const c: string[] = [];
    for (const ad of a.kalan) {
      const h = d.refs[ETIKET + ad];
      if (!h) throw new GitHatasi(`error: tag '${ad}' not found.`, 1);
      delete d.refs[ETIKET + ad];
      c.push(`Deleted tag '${ad}' (was ${kisa(h)})`);
    }
    return c.join("\n");
  }
  const [ad, rev] = a.kalan;
  if (!ad || var_(a, "-l", "--list")) {
    return Object.keys(d.refs)
      .filter((r) => r.startsWith(ETIKET))
      .map(dalAdi)
      .sort()
      .join("\n");
  }
  if (GECERSIZ_DAL.test(ad)) throw new GitHatasi(`fatal: '${ad}' is not a valid tag name.`);
  if (d.refs[ETIKET + ad] && !var_(a, "-f")) throw new GitHatasi(`fatal: tag '${ad}' already exists`);
  const h = coz(d, rev ?? "HEAD");
  const mesaj = ilk(a, "-m", "--message");
  if (var_(a, "-a", "--annotate") || mesaj !== undefined) {
    if (mesaj === undefined) throw new GitHatasi("hint: Waiting for your editor to close the file...\nfatal: no tag message?\n(Bu sandbox'ta editör açılmaz: mesajı -m \"...\" ile ver.)");
    d.refs[ETIKET + ad] = yaz(d, { tur: "tag", nesne: h, nesneTuru: "commit", ad, etiketleyen: kisi(o), mesaj: mesajTemizle(mesaj) });
  } else d.refs[ETIKET + ad] = h;
  return "";
}

// ---- reflog ----

export function reflog(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const hedef = a.kalan.filter((x) => x !== "show")[0];
  const ref = hedef && hedef !== "HEAD" ? cozRef(d, hedef) : null;
  if (hedef && hedef !== "HEAD" && !ref) throw new GitHatasi(`fatal: ambiguous argument '${hedef}': unknown revision or path not in the working tree.`);
  const kayitlar = ref ? (d.dalReflog[ref] ?? []) : d.reflog;
  const ad = ref ? dalAdi(ref) : "HEAD";
  const c: string[] = [];
  for (let i = kayitlar.length - 1; i >= 0; i--) {
    const k = kayitlar[i]!;
    const n = kayitlar.length - 1 - i;
    c.push(`${kisa(k.hash)}${suslemeler(d, k.hash)} ${ad}@{${n}}: ${k.mesaj}`);
  }
  return c.join("\n");
}

export { nesneKimligi };
