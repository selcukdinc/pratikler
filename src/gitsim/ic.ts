// Git'in içi ve kurtarma: plumbing komutları (ls-tree, update-ref, symbolic-ref),
// erişilemeyen nesneler (fsck), çöp toplama (gc, prune), reflog'u kısaltma
// (reflog expire) ve git filter-repo'nun sade bir karşılığı. ls-tree, update-ref,
// symbolic-ref, fsck, gc ve reflog expire git 2.43 ile karşılaştırılır
// (gitsim.test.ts); filter-repo ayrı bir araçtır, çıktısı sadeleştirilmiştir.
import { agacaGec, commitAgaci, commitOku, coz, cozRef, DAL, depoGerekli, gecerliDal, gecmis, headCommit, reflogYaz, UZAK } from "./depo";
import { agacYaz, GitHatasi, yaz } from "./nesne";
import type { Depo, Nesne, Ortam } from "./tipler";
import { ayir, ilk, var_, yolCoz } from "./yardim";

// ---------------- ls-tree ----------------

export function lsTree(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const [rev, ...yollar] = a.kalan;
  if (!rev) throw new GitHatasi("usage: git ls-tree [<options>] <tree-ish> [<path>...]", 129);
  let h: string;
  try {
    h = coz(d, rev.replace(/\^\{tree\}$/, ""));
  } catch {
    throw new GitHatasi(`fatal: Not a valid object name ${rev}`);
  }
  let n = d.nesneler[h];
  if (n?.tur === "tag") n = d.nesneler[(h = n.nesne)];
  if (n?.tur === "commit") n = d.nesneler[(h = n.agac)];
  if (n?.tur !== "tree") throw new GitHatasi("fatal: not a tree object");
  const ozyineli = var_(a, "-r");
  const yalnizAd = var_(a, "--name-only", "--name-status");
  const c: string[] = [];
  const gez = (agac: string, onek: string) => {
    const t = d.nesneler[agac] as Extract<Nesne, { tur: "tree" }>;
    for (const g of t.girdiler) {
      const yol = onek + g.ad;
      const klasor = g.mod === "40000";
      if (yollar.length && !yollar.some((y) => y === yol || y.replace(/\/$/, "") === yol || yol.startsWith(y.replace(/\/?$/, "/")) || y.startsWith(yol + "/"))) continue;
      if (klasor && (ozyineli || yollar.some((y) => y.startsWith(yol + "/")))) {
        gez(g.hash, yol + "/");
        continue;
      }
      c.push(yalnizAd ? yol : `${klasor ? "040000 tree" : "100644 blob"} ${g.hash}\t${yol}`);
    }
  };
  gez(h, "");
  return c.join("\n");
}

// ---------------- update-ref, symbolic-ref ----------------

const SIFIR = "0".repeat(40);
const BOS_AGAC = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

export function updateRef(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-m"]);
  const sil = var_(a, "-d");
  const [ref, deger, eski] = a.kalan;
  if (!ref || (!sil && !deger)) throw new GitHatasi("usage: git update-ref [<options>] -d <refname> [<old-val>]\n   or: git update-ref [<options>]    <refname> <new-val> [<old-val>]", 129);
  const tam = ref === "HEAD" ? (gecerliDal(d) ?? "HEAD") : ref;
  const simdiki = tam === "HEAD" ? headCommit(d) : (d.refs[tam] ?? null);
  const beklenen = sil ? deger : eski;
  if (beklenen !== undefined) {
    const b = beklenen === "" || /^0+$/.test(beklenen) ? null : coz(d, beklenen);
    if (b !== simdiki) throw new GitHatasi(`fatal: update_ref failed for ref '${tam}': cannot lock ref '${tam}': is at ${simdiki ?? SIFIR} but expected ${b ?? SIFIR}`);
  }
  if (sil) {
    if (tam === "HEAD") throw new GitHatasi("error: cannot lock ref 'HEAD'");
    delete d.refs[tam];
    delete d.dalReflog[tam];
    return "";
  }
  let h: string;
  try {
    h = coz(d, deger!);
  } catch {
    throw new GitHatasi(`fatal: ${deger}: not a valid SHA1`);
  }
  const mesaj = ilk(a, "-m") ?? "";
  if (tam === "HEAD") {
    d.head = { tur: "kopuk", hash: h };
    reflogYaz(d, h, mesaj, null);
    return "";
  }
  d.refs[tam] = h;
  if (tam.startsWith(DAL)) {
    if (gecerliDal(d) === tam) reflogYaz(d, h, mesaj, tam);
    else (d.dalReflog[tam] ??= []).push({ hash: h, mesaj });
  }
  return "";
}

export function symbolicRef(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const [ad, hedef] = a.kalan;
  if (ad !== "HEAD") throw new GitHatasi("usage: git symbolic-ref [-m <reason>] <name> <ref>\n   or: git symbolic-ref [-q] [--short] <name>", 129);
  if (hedef) {
    if (!hedef.startsWith("refs/")) throw new GitHatasi(`fatal: Refusing to point HEAD outside of refs/`);
    d.head = { tur: "ref", ref: hedef };
    return "";
  }
  if (d.head.tur !== "ref") {
    if (var_(a, "-q")) throw new GitHatasi("", 1);
    throw new GitHatasi("fatal: ref HEAD is not a symbolic ref");
  }
  return var_(a, "--short") ? d.head.ref.replace(/^refs\/(heads|tags|remotes)\//, "") : d.head.ref;
}

// ---------------- erişilebilirlik ----------------

// Bir nesnenin doğrudan gösterdikleri
function cocuklar(n: Nesne): string[] {
  if (n.tur === "commit") return [n.agac, ...n.ebeveynler];
  if (n.tur === "tree") return n.girdiler.map((g) => g.hash);
  if (n.tur === "tag") return [n.nesne];
  return [];
}

function kapanis(d: Depo, baslar: Iterable<string>): Set<string> {
  const gorulen = new Set<string>();
  const yigin = [...baslar];
  while (yigin.length) {
    const h = yigin.pop()!;
    if (gorulen.has(h) || !d.nesneler[h]) continue;
    gorulen.add(h);
    yigin.push(...cocuklar(d.nesneler[h]!));
  }
  return gorulen;
}

// Ref'ler, HEAD, index ve (istenirse) reflog'lardan erişilenler
export function erisilenler(d: Depo, reflogDahil = true): Set<string> {
  const k: string[] = [...Object.values(d.refs), ...Object.values(d.index)];
  const h = headCommit(d);
  if (h) k.push(h);
  for (const c of Object.values(d.catisma)) for (const x of [c.taban, c.biz, c.onlar]) if (x) k.push(x);
  if (reflogDahil) {
    for (const r of d.reflog) k.push(r.hash);
    for (const l of Object.values(d.dalReflog)) for (const r of l) k.push(r.hash);
    for (const s of d.stash) k.push(s.hash);
  }
  return kapanis(d, k);
}

// Git'in nesne tablosundaki sıra: kimliğin ilk dört baytı (little-endian) tablo boyuna göre
function tabloSirasi(hashler: string[], toplam: number): string[] {
  let boy = 32;
  while (toplam >= boy / 2) boy *= 2;
  const yuva = new Array<string | undefined>(boy);
  for (const h of [...hashler].sort()) {
    const b = [0, 2, 4, 6].map((i) => parseInt(h.slice(i, i + 2), 16));
    let i = ((b[0]! | (b[1]! << 8) | (b[2]! << 16) | (b[3]! << 24)) >>> 0) & (boy - 1);
    while (yuva[i]) i = (i + 1) & (boy - 1);
    yuva[i] = h;
  }
  return yuva.filter((x): x is string => !!x);
}

export function fsck(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const ulasilan = erisilenler(d, !var_(a, "--no-reflogs"));
  // Boş ağaç Git'te her zaman vardır (sanal nesne), sayılmaz
  const kopuk = Object.keys(d.nesneler).filter((h) => !ulasilan.has(h) && h !== BOS_AGAC);
  const kume = new Set(kopuk);
  const kullanilan = new Set<string>();
  for (const h of kopuk) for (const c of cocuklar(d.nesneler[h]!)) if (kume.has(c)) kullanilan.add(c);
  const hepsi = var_(a, "--unreachable");
  const c: string[] = [];
  for (const h of tabloSirasi(kopuk, Object.keys(d.nesneler).length)) {
    const tur = d.nesneler[h]!.tur;
    if (hepsi) c.push(`unreachable ${tur} ${h}`);
    else if (!kullanilan.has(h)) c.push(`dangling ${tur} ${h}`);
  }
  return c.join("\n");
}

// Erişilemeyen nesneleri siler (git gc --prune=now, git prune)
function buda(d: Depo) {
  const ulasilan = erisilenler(d);
  for (const h of Object.keys(d.nesneler)) if (!ulasilan.has(h)) delete d.nesneler[h];
}

export function gc(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  // Varsayılan: iki haftadan genç erişilemeyen nesneler korunur
  if (ilk(a, "--prune") === "now" || ilk(a, "--prune") === "all") buda(d);
  return "";
}

export function prune(o: Ortam): string {
  buda(depoGerekli(o));
  return "";
}

// git reflog expire --expire=now [--expire-unreachable=now] --all | <ref>
export function reflogExpire(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args);
  const hepsi = ilk(a, "--expire") === "now" || ilk(a, "--expire") === "all";
  const erisilemeyen = hepsi || ilk(a, "--expire-unreachable") === "now" || ilk(a, "--expire-unreachable") === "all";
  if (!erisilemeyen) return "";
  const hedefler = var_(a, "--all") ? ["HEAD", ...Object.keys(d.dalReflog)] : a.kalan.map((r) => (r === "HEAD" ? "HEAD" : (cozRef(d, r) ?? r)));
  for (const r of hedefler) {
    const uc = r === "HEAD" ? headCommit(d) : d.refs[r];
    const ulasilan = new Set(uc ? gecmis(d, [uc]) : []);
    const suz = (l: { hash: string; mesaj: string }[]) => (hepsi ? [] : l.filter((k) => ulasilan.has(k.hash)));
    if (r === "HEAD") d.reflog = suz(d.reflog);
    else if (d.dalReflog[r]) d.dalReflog[r] = suz(d.dalReflog[r]!);
  }
  return "";
}

// ---------------- git filter-repo (sade) ----------------

export function filterRepo(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["--path", "--replace-text"]);
  const yollar = a.deger.get("--path") ?? [];
  const ters = var_(a, "--invert-paths");
  const metinDosyasi = ilk(a, "--replace-text");
  if (!yollar.length && !metinDosyasi) throw new GitHatasi("usage: git filter-repo [--path <yol> [--invert-paths]] [--replace-text <dosya>] [--force]", 2);
  // Taze bir clone değilse (reflog'da birden çok hareket) --force ister
  const cokKayit = d.reflog.length > 1 ? "HEAD" : Object.entries(d.dalReflog).find(([, l]) => l.length > 1)?.[0];
  if (!var_(a, "--force", "-f") && cokKayit)
    throw new GitHatasi(
      `Aborting: Refusing to destructively overwrite repo history since\nthis does not look like a fresh clone.\n  (expected at most one entry in the reflog for ${cokKayit})\n` +
      "Please operate on a fresh clone instead.  If you want to proceed\nanyway, use --force.",
      1,
    );
  const degisimler: [string, string][] = [];
  if (metinDosyasi) {
    const m = o.dosyalar[yolCoz(o, metinDosyasi)];
    if (m === undefined) throw new GitHatasi(`Error: could not open ${metinDosyasi}`, 1);
    for (const satir of m.split("\n").filter((x) => x.trim())) {
      const [eski, yeni] = satir.includes("==>") ? satir.split("==>") : [satir, "***REMOVED***"];
      degisimler.push([eski!, yeni ?? "***REMOVED***"]);
    }
  }
  const kalsin = (yol: string) => {
    if (!yollar.length) return true;
    const eslesti = yollar.some((p) => yol === p || yol.startsWith(p.replace(/\/?$/, "/")));
    return ters ? !eslesti : eslesti;
  };
  const yeniAgac = (eski: Record<string, string>): Record<string, string> => {
    const s: Record<string, string> = {};
    for (const [yol, h] of Object.entries(eski)) {
      if (!kalsin(yol)) continue;
      let ic = (d.nesneler[h] as Extract<Nesne, { tur: "blob" }>).icerik;
      const once = ic;
      for (const [x, y] of degisimler) ic = ic.split(x).join(y);
      s[yol] = ic === once ? h : yaz(d, { tur: "blob", icerik: ic });
    }
    return s;
  };
  // Taze clone'daki origin/* dalları yerel dala çevrilir ki onların geçmişi de
  // yeniden yazılsın; sonra origin kaldırılır: yeni geçmiş yanlışlıkla eski depoya gitmesin
  const c: string[] = [];
  const url = d.config["remote.origin.url"];
  if (url) {
    for (const [r, h] of Object.entries(d.refs)) {
      if (!r.startsWith(UZAK + "origin/") || r === UZAK + "origin/HEAD") continue;
      const yerel = DAL + r.slice((UZAK + "origin/").length);
      if (!d.refs[yerel]) d.refs[yerel] = h;
    }
    c.push(`NOTICE: Removing 'origin' remote; see 'Why is my origin removed?'\n        in the manual if you want to push back there.\n        (was ${url})`);
    for (const k of Object.keys(d.config)) if (k.startsWith("remote.origin.")) delete d.config[k];
    for (const k of Object.keys(d.config)) {
      const m = /^branch\.(.+)\.remote$/.exec(k);
      if (m && d.config[k] === "origin") {
        delete d.config[k];
        delete d.config[`branch.${m[1]}.merge`];
      }
    }
    for (const r of Object.keys(d.refs)) if (r.startsWith(UZAK + "origin/")) delete d.refs[r];
    for (const r of Object.keys(d.semboller ?? {})) if (r.startsWith(UZAK + "origin/")) delete d.semboller![r];
  }
  // Dallar ve etiketlerden erişilen commit'ler, eskiden yeniye
  const yerelRefler = Object.keys(d.refs).filter((r) => !r.startsWith(UZAK) && r !== "refs/stash");
  const baslar = yerelRefler.map((r) => d.refs[r]!).map((h) => (d.nesneler[h]?.tur === "tag" ? (d.nesneler[h] as Extract<Nesne, { tur: "tag" }>).nesne : h));
  const sirali = gecmis(d, [...new Set(baslar)]).reverse();
  const harita = new Map<string, string | null>();
  for (const h of sirali) {
    const k = commitOku(d, h);
    const ebeveynler = [...new Set(k.ebeveynler.map((p) => harita.get(p)).filter((p): p is string => !!p))];
    const agac = agacYaz(d, yeniAgac(commitAgaci(d, h)));
    const eskiBos = k.ebeveynler.length === 1 && commitOku(d, k.ebeveynler[0]!).agac === k.agac;
    // Filtre yüzünden boşalan commit atılır (zaten boş olan kalır)
    if (ebeveynler.length === 1 && k.ebeveynler.length === 1 && commitOku(d, ebeveynler[0]!).agac === agac && !eskiBos) {
      harita.set(h, ebeveynler[0]!);
      continue;
    }
    if (!ebeveynler.length && k.ebeveynler.length === 0 && !Object.keys(commitAgaci(d, h)).some(kalsin)) {
      harita.set(h, null);
      continue;
    }
    harita.set(h, yaz(d, { ...k, agac, ebeveynler }));
  }
  const eskiHead = headCommit(d);
  const yeniHead = eskiHead ? (harita.get(eskiHead) ?? null) : null;
  // Çalışma dizini ve index yeni HEAD'e (reset --hard)
  agacaGec(o, d, yeniHead, true);
  for (const r of yerelRefler) {
    const h = d.refs[r]!;
    const n = d.nesneler[h];
    if (n?.tur === "tag") {
      const yeni = harita.get(n.nesne);
      if (yeni) d.refs[r] = yaz(d, { ...n, nesne: yeni });
      else delete d.refs[r];
    } else {
      const yeni = harita.get(h);
      if (yeni) d.refs[r] = yeni;
      else delete d.refs[r];
    }
  }
  if (d.head.tur === "kopuk" && yeniHead) d.head = { tur: "kopuk", hash: yeniHead };
  // Eski geçmiş reflog'larla birlikte silinir (reflog expire, gc --prune=now)
  d.reflog = [];
  d.dalReflog = {};
  d.origHead = undefined;
  buda(d);
  c.push(`Parsed ${sirali.length} commits`, "New history written in 0.02 seconds; now repacking/cleaning...", "Repacking your repo and cleaning out old unneeded objects");
  if (yeniHead) c.push(`HEAD is now at ${yeniHead.slice(0, 7)} ${commitOku(d, yeniHead).mesaj.split("\n")[0]}`);
  c.push("Completely finished after 0.09 seconds.");
  return c.join("\n");
}
