// Deponun ortak işlemleri: revizyon çözümleme, HEAD ve dallar, reflog, ataları
// bulmak, çalışma dizinini bir ağaca çevirmek, .gitignore ve durum karşılaştırması.
import { agacAc, blobIcerigi, blobYaz, commitAgaci, commitOku, GitHatasi, oku } from "./nesne";
import type { Depo, Kisi, Ortam } from "./tipler";

export const DAL = "refs/heads/";
export const ETIKET = "refs/tags/";
export const UZAK = "refs/remotes/";

export const kisa = (h: string) => h.slice(0, 7);

export function yeniDepo(varsayilanDal: string): Depo {
  return {
    nesneler: {},
    refs: {},
    head: { tur: "ref", ref: DAL + varsayilanDal },
    index: {},
    catisma: {},
    config: {},
    reflog: [],
    dalReflog: {},
    stash: [],
    islem: null,
  };
}

export function depoGerekli(o: Ortam): Depo {
  if (!o.depo) throw new GitHatasi("fatal: not a git repository (or any of the parent directories): .git");
  return o.depo;
}

// Ayar: önce depo, sonra kullanıcı düzeyi
export const ayar = (o: Ortam, ad: string): string | undefined => o.depo?.config[ad] ?? o.globalConfig[ad];

export function kisi(o: Ortam): Kisi {
  const ad = ayar(o, "user.name");
  const eposta = ayar(o, "user.email");
  if (!ad || !eposta)
    throw new GitHatasi(
      "Author identity unknown\n\n*** Please tell me who you are.\n\nRun\n\n  git config --global user.email \"you@example.com\"\n  git config --global user.name \"Your Name\"\n\nto set your account's default identity.\nOmit --global to set the identity only in this repository.\n\nfatal: unable to auto-detect email address",
    );
  return { ad, eposta, zaman: o.saat };
}

// HEAD'in gösterdiği dal (kopuk HEAD'de null)
export const gecerliDal = (d: Depo): string | null => (d.head.tur === "ref" ? d.head.ref : null);
export const dalAdi = (ref: string) => ref.replace(/^refs\/(heads|tags|remotes)\//, "");

// HEAD'in commit'i; henüz commit yoksa null
export function headCommit(d: Depo): string | null {
  if (d.head.tur === "kopuk") return d.head.hash;
  return d.refs[d.head.ref] ?? null;
}

export function reflogYaz(d: Depo, hash: string, mesaj: string, ref?: string | null) {
  d.reflog.push({ hash, mesaj });
  const r = ref === undefined ? gecerliDal(d) : ref;
  if (r) (d.dalReflog[r] ??= []).push({ hash, mesaj });
}

// HEAD'i (dalı ya da kopuk HEAD'i) yeni commit'e ilerletir
export function headIlerlet(d: Depo, hash: string, mesaj: string) {
  if (d.head.tur === "ref") d.refs[d.head.ref] = hash;
  else d.head = { tur: "kopuk", hash };
  reflogYaz(d, hash, mesaj);
}

// Etiket nesnesini gösterdiği commit'e çevirir
export function soy(d: Depo, h: string): string {
  const n = d.nesneler[h];
  if (n?.tur === "tag") return soy(d, n.nesne);
  return h;
}

// Revizyon çözümleme: HEAD, @, dal, etiket, uzak dal, kimlik (en az 4 karakter),
// ORIG_HEAD, MERGE_HEAD, HEAD@{n}, dal@{n} ve ~n, ^n ekleri
export function coz(d: Depo, rev: string): string {
  const h = cozYumusak(d, rev);
  if (!h) throw new GitHatasi(`fatal: ambiguous argument '${rev}': unknown revision or path not in the working tree.\nUse '--' to separate paths from revisions, like this:\n'git <command> [<revision>...] -- [<file>...]'`);
  return h;
}

export function cozYumusak(d: Depo, rev: string): string | null {
  const tip = /^(.*)\^\{(tree|commit|)\}$/.exec(rev);
  if (tip) {
    const c = cozYumusak(d, tip[1]!);
    if (!c) return null;
    return tip[2] === "tree" ? (d.nesneler[c]?.tur === "commit" ? commitOku(d, c).agac : null) : c;
  }
  const m = /^(.*?)((?:[~^]\d*)*)$/.exec(rev);
  if (!m) return null;
  let taban = m[1]!;
  const ekler = m[2]!;
  let h: string | null = null;
  const reflogM = /^(.*)@\{(\d+)\}$/.exec(taban);
  if (reflogM) {
    const ad = reflogM[1] || "HEAD";
    const kayitlar = ad === "HEAD" ? d.reflog : d.dalReflog[cozRef(d, ad) ?? ""];
    const n = Number(reflogM[2]);
    const k = kayitlar?.[kayitlar.length - 1 - n];
    h = k?.hash ?? null;
  } else {
    if (taban === "@") taban = "HEAD";
    h = refCommit(d, taban);
  }
  if (!h) return null;
  h = soy(d, h);
  for (const ek of ekler.match(/[~^]\d*/g) ?? []) {
    const n = ek.length > 1 ? Number(ek.slice(1)) : 1;
    const c: import("./tipler").Nesne | undefined = d.nesneler[h!];
    if (c?.tur !== "commit") return null;
    if (ek[0] === "~") {
      for (let i = 0; i < n; i++) {
        const cc = commitOku(d, h!);
        if (!cc.ebeveynler[0]) return null;
        h = cc.ebeveynler[0];
      }
    } else {
      if (n === 0) continue;
      const p: string | undefined = c.ebeveynler[n - 1];
      if (!p) return null;
      h = p;
    }
  }
  return h;
}

// Bir adın tam ref'i (dal, etiket, uzak dal)
export function cozRef(d: Depo, ad: string): string | null {
  for (const r of [ad, DAL + ad, ETIKET + ad, UZAK + ad, `${UZAK}${ad}/HEAD`]) if (d.refs[r] !== undefined) return r;
  return null;
}

function refCommit(d: Depo, ad: string): string | null {
  if (ad === "HEAD") return headCommit(d);
  if (ad === "ORIG_HEAD") return d.origHead ?? null;
  if (ad === "MERGE_HEAD") return d.islem?.tur === "merge" ? d.islem.onlar : null;
  if (ad === "CHERRY_PICK_HEAD") return d.islem?.tur === "cherry-pick" ? d.islem.commit : null;
  const r = cozRef(d, ad);
  if (r) return d.refs[r]!;
  if (/^[0-9a-f]{4,40}$/.test(ad)) {
    const adaylar = Object.keys(d.nesneler).filter((h) => h.startsWith(ad));
    if (adaylar.length === 1) return adaylar[0]!;
    if (adaylar.length > 1) throw new GitHatasi(`error: short object ID ${ad} is ambiguous`);
  }
  return null;
}

export function commitMi(d: Depo, h: string) {
  return d.nesneler[h]?.tur === "commit";
}

// Bir commit'in bütün ataları (kendisi dahil)
export function atalar(d: Depo, h: string): Set<string> {
  const goruldu = new Set<string>();
  const yigin = [h];
  while (yigin.length) {
    const x = yigin.pop()!;
    if (goruldu.has(x)) continue;
    goruldu.add(x);
    yigin.push(...commitOku(d, x).ebeveynler);
  }
  return goruldu;
}

export const ataMi = (d: Depo, ata: string, h: string) => atalar(d, h).has(ata);

// En iyi ortak ata: ortak atalardan başka bir ortak atanın atası olmayan
export function ortakAta(d: Depo, a: string, b: string): string | null {
  const A = atalar(d, a);
  const ortak = [...atalar(d, b)].filter((x) => A.has(x));
  const enIyi = ortak.filter((x) => !ortak.some((y) => y !== x && atalar(d, y).has(x)));
  if (!enIyi.length) return null;
  // Birden çoksa (çapraz birleşme) en yeni zamanlıyı seç
  enIyi.sort((x, y) => commitOku(d, y).isleyen.zaman - commitOku(d, x).isleyen.zaman);
  return enIyi[0]!;
}

// Commit'ler en yeniden eskiye (git log sırası: zamana göre, eşitse keşif sırası)
export function gecmis(d: Depo, baslar: string[], haric: string[] = []): string[] {
  const disarida = new Set<string>();
  for (const h of haric) for (const a of atalar(d, h)) disarida.add(a);
  const sonuc: string[] = [];
  const goruldu = new Set<string>();
  const kuyruk = baslar.filter((h) => !disarida.has(h));
  for (const h of kuyruk) goruldu.add(h);
  while (kuyruk.length) {
    // En yeni committer zamanlıyı al; eşitlikte önce eklenen
    let en = 0;
    for (let i = 1; i < kuyruk.length; i++) if (commitOku(d, kuyruk[i]!).isleyen.zaman > commitOku(d, kuyruk[en]!).isleyen.zaman) en = i;
    const h = kuyruk.splice(en, 1)[0]!;
    sonuc.push(h);
    for (const p of commitOku(d, h).ebeveynler)
      if (!goruldu.has(p) && !disarida.has(p)) {
        goruldu.add(p);
        kuyruk.push(p);
      }
  }
  return sonuc;
}

// ---- .gitignore ----

interface Kural {
  desen: RegExp;
  olumsuz: boolean;
  klasor: boolean;
}

function kalipRegex(k: string): RegExp {
  const kokten = k.startsWith("/") || k.slice(0, -1).includes("/");
  const temiz = k.replace(/^\//, "");
  let r = "";
  for (let i = 0; i < temiz.length; i++) {
    const c = temiz[i]!;
    if (c === "*" && temiz[i + 1] === "*") {
      r += ".*";
      i++;
      if (temiz[i + 1] === "/") i++;
    } else if (c === "*") r += "[^/]*";
    else if (c === "?") r += "[^/]";
    else r += c.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`${kokten ? "^" : "(^|/)"}${r}$`);
}

export function yokSaymaKurallari(o: Ortam): Kural[] {
  const metin = o.dosyalar[".gitignore"] ?? "";
  return metin
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith("#"))
    .map((s) => {
      const olumsuz = s.startsWith("!");
      let k = olumsuz ? s.slice(1) : s;
      const klasor = k.endsWith("/");
      if (klasor) k = k.slice(0, -1);
      return { desen: kalipRegex(k), olumsuz, klasor };
    });
}

// Yol yok sayılıyor mu? Klasörlerinden biri yok sayılıyorsa dosya da yok sayılır.
export function yokSayilir(kurallar: Kural[], yol: string): boolean {
  const parcalar = yol.split("/");
  for (let i = 1; i < parcalar.length; i++) if (tekYol(kurallar, parcalar.slice(0, i).join("/"), true)) return true;
  return tekYol(kurallar, yol, false);
}

function tekYol(kurallar: Kural[], yol: string, klasorMu: boolean): boolean {
  let sonuc = false;
  for (const k of kurallar) {
    if (k.klasor && !klasorMu) continue;
    if (k.desen.test(yol)) sonuc = !k.olumsuz;
  }
  return sonuc;
}

// ---- çalışma dizini, index ve HEAD karşılaştırması ----

export interface Durum {
  // HEAD -> index
  hazir: { yol: string; tur: "new file" | "modified" | "deleted" }[];
  // index -> çalışma dizini
  hazirDegil: { yol: string; tur: "modified" | "deleted" }[];
  izlenmeyen: string[];
  catisma: { yol: string; tur: string }[];
}

export function durum(o: Ortam, d: Depo): Durum {
  const head = commitAgaci(d, headCommit(d));
  const hazir: Durum["hazir"] = [];
  const hazirDegil: Durum["hazirDegil"] = [];
  const catisma: Durum["catisma"] = [];
  for (const yol of [...new Set([...Object.keys(head), ...Object.keys(d.index)])].sort()) {
    if (d.catisma[yol]) continue;
    if (!(yol in head)) hazir.push({ yol, tur: "new file" });
    else if (!(yol in d.index)) hazir.push({ yol, tur: "deleted" });
    else if (head[yol] !== d.index[yol]) hazir.push({ yol, tur: "modified" });
  }
  for (const yol of Object.keys(d.index).sort()) {
    if (d.catisma[yol]) continue;
    if (!(yol in o.dosyalar)) hazirDegil.push({ yol, tur: "deleted" });
    else if (blobIcerigi(d, d.index[yol]!) !== o.dosyalar[yol]) hazirDegil.push({ yol, tur: "modified" });
  }
  for (const [yol, c] of Object.entries(d.catisma).sort()) {
    const tur = c.biz && c.onlar ? (c.taban ? "both modified" : "both added") : c.biz ? "deleted by them" : "deleted by us";
    catisma.push({ yol, tur });
  }
  const kurallar = yokSaymaKurallari(o);
  const izlenmeyen = Object.keys(o.dosyalar)
    .filter((y) => !(y in d.index) && !d.catisma[y] && !yokSayilir(kurallar, y))
    .sort();
  return { hazir, hazirDegil, izlenmeyen, catisma };
}

// İzlenmeyen dosyaları Git gibi özetler: içinde hiç izlenen dosya olmayan klasör "klasor/" olur
export function izlenmeyenOzet(d: Depo, izlenmeyen: string[]): string[] {
  const izlenenKlasorler = new Set<string>();
  for (const y of [...Object.keys(d.index), ...Object.keys(d.catisma)]) {
    const p = y.split("/");
    for (let i = 1; i < p.length; i++) izlenenKlasorler.add(p.slice(0, i).join("/"));
  }
  const sonuc = new Set<string>();
  for (const y of izlenmeyen) {
    const p = y.split("/");
    let ozet = y;
    for (let i = 1; i < p.length; i++) {
      const k = p.slice(0, i).join("/");
      if (!izlenenKlasorler.has(k)) {
        ozet = k + "/";
        break;
      }
    }
    sonuc.add(ozet);
  }
  return [...sonuc].sort();
}

// Çalışma dizininde HEAD'e göre commit'lenmemiş değişiklik var mı (izlenmeyenler hariç)
export function kirliMi(o: Ortam, d: Depo): boolean {
  const s = durum(o, d);
  return s.hazir.length > 0 || s.hazirDegil.length > 0 || s.catisma.length > 0;
}

// Bir commit'e geçerken index ve çalışma dizinini günceller. Yerel değişikliği
// ya da izlenmeyen bir dosyayı ezecekse Git gibi durur. zorla: reset --hard gibi.
export function agacaGec(o: Ortam, d: Depo, hedef: string | null, zorla = false, islemAdi: "checkout" | "merge" = "checkout") {
  const eski = commitAgaci(d, headCommit(d));
  const yeni = commitAgaci(d, hedef);
  if (!zorla) {
    const ezilecek: string[] = [];
    const izlenmeyenEzilecek: string[] = [];
    for (const yol of new Set([...Object.keys(eski), ...Object.keys(yeni)])) {
      if (eski[yol] === yeni[yol]) continue;
      const indexte = d.index[yol];
      const hedefIcerik = yeni[yol] === undefined ? undefined : blobIcerigi(d, yeni[yol]!);
      if (indexte === undefined && eski[yol] === undefined) {
        // İzlenmeyen bir dosya hedefteki dosyanın yerine geçecek
        if (yol in o.dosyalar && o.dosyalar[yol] !== hedefIcerik) izlenmeyenEzilecek.push(yol);
        continue;
      }
      const calisan = o.dosyalar[yol];
      const indexIcerik = indexte === undefined ? undefined : blobIcerigi(d, indexte);
      const yerelDegisik = indexte !== eski[yol] || calisan !== indexIcerik;
      // Yerel hal zaten hedefteki hale eşitse sorun yok
      if (yerelDegisik && !(indexte === yeni[yol] && calisan === hedefIcerik)) ezilecek.push(yol);
    }
    const liste = (l: string[]) => l.sort().map((y) => "\t" + y).join("\n");
    if (ezilecek.length)
      throw new GitHatasi(
        `error: Your local changes to the following files would be overwritten by ${islemAdi}:\n${liste(ezilecek)}\nPlease commit your changes or stash them before you ${islemAdi === "merge" ? "merge" : "switch branches"}.\nAborting`,
        1,
      );
    if (izlenmeyenEzilecek.length)
      throw new GitHatasi(
        `error: The following untracked working tree files would be overwritten by ${islemAdi}:\n${liste(izlenmeyenEzilecek)}\nPlease move or remove them before you ${islemAdi === "merge" ? "merge" : "switch branches"}.\nAborting`,
        1,
      );
  }
  for (const yol of new Set([...Object.keys(eski), ...Object.keys(yeni), ...(zorla ? Object.keys(d.index) : [])])) {
    if (!zorla && eski[yol] === yeni[yol]) continue;
    if (yeni[yol] === undefined) {
      delete d.index[yol];
      delete o.dosyalar[yol];
    } else {
      d.index[yol] = yeni[yol]!;
      o.dosyalar[yol] = blobIcerigi(d, yeni[yol]!);
    }
  }
  if (zorla) d.catisma = {};
}

// Index'i bir ağaçla değiştirir (reset --mixed), çalışma dizinine dokunmaz
export function indexiAyarla(d: Depo, hedef: string | null) {
  d.index = { ...commitAgaci(d, hedef) };
  d.catisma = {};
}

export const icerik = (d: Depo, h: string) => blobIcerigi(d, h);
export { agacAc, blobYaz, commitAgaci, commitOku, oku };
