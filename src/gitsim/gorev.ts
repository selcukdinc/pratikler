// Git sandbox'ının görevleri: bir başlangıç durumu, bir hikâye ve ortamın son
// hâline bakan hedefler. Hedefler komutlara değil duruma bakar; aynı sonuca
// giden her yol kabul edilir. Görev listesi pratiğin istemci içeriğinden gelir
// (icerik/git/istemci, gitSandbox) ve sandbox sayfası açılınca yüklenir.
import { calistir, editorIcerigi, editorKaydet, ekipCalistir, kur, yeniOrtam } from "./index";
import { commitAgaci, commitOku, durum, gecerliDal, gecmis, headCommit, icerik, soy } from "./depo";
import type { Depo, Ortam } from "./tipler";

export interface Hedef {
  aciklama: string;
  denetle: (o: Ortam) => boolean;
}

export interface Gorev {
  id: string;
  // 1 Acemi, 2 Çırak, 3 Kalfa, 4 Usta, 5 Profesyonel
  kademe: number;
  unite: number;
  baslik: string;
  // Görevin hikâyesi (kısa, durumu anlatır)
  hikaye: string;
  dosyalar?: Record<string, string>;
  // Verilmezse VARSAYILAN_KIMLIK
  globalConfig?: Record<string, string>;
  // Başlangıç durumunu kuran komutlar (kullanıcı görmez, sayılmaz)
  kurulum?: string[];
  hedefler: Hedef[];
  // Sırayla açılan ipuçları
  ipuclari: string[];
  // Örnek çözüm; test her görevin bununla bittiğini denetler
  cozum: string[];
  // Üç yıldız için en fazla git komutu (verilmezse çözümdeki git komutu sayısı)
  enAz?: number;
  // Görev bitince gösterilen kısa not
  sonNot?: string;
  // Sanal ekip arkadaşlarının olayları: koşul ilk kez tutunca komutlar onun
  // bilgisayarında çalışır ve terminale bildirim düşer (ör. "Ayşe push etti")
  olaylar?: Olay[];
  // Çözümdeki bir komut düzenleyici açarsa (git rebase -i) testin metne sırayla
  // uyguladığı dönüşümler
  editorCozum?: ((metin: string) => string)[];
}

export interface Olay {
  id: string;
  kosul: (o: Ortam) => boolean;
  kim: string;
  komutlar: string[];
  bildirim: string;
}

// Koşulu tutan ve henüz olmamış olayları işletir
export function olaylariIslet(g: { olaylar?: Olay[] }, o: Ortam): { ortam: Ortam; bildirimler: string[] } {
  let x = o;
  const bildirimler: string[] = [];
  for (const olay of g.olaylar ?? []) {
    if (x.tetiklenen?.includes(olay.id) || !olay.kosul(x)) continue;
    for (const k of olay.komutlar) x = ekipCalistir(x, olay.kim, k).ortam;
    x = { ...x, tetiklenen: [...(x.tetiklenen ?? []), olay.id] };
    bildirimler.push(olay.bildirim);
  }
  return { ortam: x, bildirimler };
}

// Örnek çözümü çalıştırır: düzenleyici açılınca editorCozum'daki sıradaki
// dönüşümü uygular, her adımdan sonra olayları işletir (testler kullanır)
export function cozumuCalistir(
  o: Ortam,
  satirlar: string[],
  secenek: { editorCozum?: ((metin: string) => string)[]; gorev?: { olaylar?: Olay[] }; adim?: (satir: string, kod: number, cikti: string, o: Ortam) => void } = {},
): Ortam {
  const donusumler = [...(secenek.editorCozum ?? [])];
  let x = o;
  for (const s of satirlar) {
    let r = calistir(x, s);
    secenek.adim?.(s, r.sonuc.kod, r.sonuc.cikti, r.ortam);
    while (r.sonuc.editor) {
      const f = donusumler.shift();
      if (!f) throw new Error(`düzenleyici açıldı ama editorCozum kalmadı: ${s}`);
      const yol = r.sonuc.editor;
      r = editorKaydet(r.ortam, yol, f(editorIcerigi(r.ortam, yol)));
      secenek.adim?.(s, r.sonuc.kod, r.sonuc.cikti, r.ortam);
    }
    x = r.ortam;
    if (secenek.gorev) x = olaylariIslet(secenek.gorev, x).ortam;
  }
  if (donusumler.length) throw new Error("kullanılmayan editorCozum kaldı");
  return x;
}

export const VARSAYILAN_KIMLIK = {
  "user.name": "Deniz Kaya",
  "user.email": "deniz@ornek.dev",
  "init.defaultBranch": "main",
};

export function gorevOrtami(g: Gorev): Ortam {
  const o = yeniOrtam({ dosyalar: g.dosyalar, globalConfig: g.globalConfig ?? VARSAYILAN_KIMLIK });
  return kur(o, g.kurulum ?? []);
}

// Durumu yalnızca gösteren komutlar yıldız sayımına girmez: bakmak serbest
const OKUYAN = new Set(["status", "log", "diff", "show", "reflog", "help", "--help", "ls-files", "cat-file", "rev-parse", "show-ref", "blame", "fetch"]);

function degistirenMi(parca: string): boolean {
  const w = parca.trim().split(/\s+/);
  // GitHub CLI: PR açmak, onaylamak, birleştirmek, kapatmak sayılır; bakmak sayılmaz
  if (w[0] === "gh") return w[1] === "pr" && ["create", "review", "merge", "close"].includes(w[2] ?? "");
  if (w[0] !== "git" || !w[1] || OKUYAN.has(w[1])) return false;
  const alt = w[1];
  const kalan = w.slice(2);
  if ((alt === "branch" || alt === "tag") && kalan.every((x) => /^(-a|-v|-vv|-l|-r|--list|--all)$/.test(x))) return false;
  if (alt === "stash" && (kalan[0] === "list" || kalan[0] === "show")) return false;
  if (alt === "remote" && (!kalan.length || kalan[0] === "-v" || kalan[0] === "get-url")) return false;
  if (alt === "config" && (kalan.some((x) => x === "--list" || x === "-l" || x === "--get") || kalan.filter((x) => !x.startsWith("-")).length === 1)) return false;
  return true;
}

// Durumu değiştiren git komutlarının sayısı (zincirlenmiş komutlar ayrı sayılır)
export const gitKomutuSayisi = (satirlar: string[]) =>
  satirlar.reduce((n, s) => n + s.split(/&&|;|\|\|/).filter(degistirenMi).length, 0);

export const enAzKomut = (g: Gorev) => g.enAz ?? gitKomutuSayisi(g.cozum);

export function yildiz(g: Gorev, komutSayisi: number): 1 | 2 | 3 {
  const en = enAzKomut(g);
  return komutSayisi <= en ? 3 : komutSayisi <= en + 2 ? 2 : 1;
}

export const tamamMi = (g: Gorev, o: Ortam) => g.hedefler.every((h) => h.denetle(o));

// ---- hedef yazmak için yardımcılar ----

export const depo = (o: Ortam): Depo | null => o.depo;

// HEAD'deki commit'in dosyaları (yol -> içerik)
export function headDosyalari(o: Ortam): Record<string, string> {
  const d = o.depo;
  if (!d) return {};
  const a = commitAgaci(d, headCommit(d));
  return Object.fromEntries(Object.entries(a).map(([y, h]) => [y, icerik(d, h)]));
}

export function commitSayisi(o: Ortam): number {
  const d = o.depo;
  const h = d && headCommit(d);
  return d && h ? gecmis(d, [h]).length : 0;
}

// Çalışma dizini ve index HEAD ile aynı mı (izlenmeyen dosyalar sayılmaz)
export function temizMi(o: Ortam, izlenmeyenDahil = false): boolean {
  const d = o.depo;
  if (!d) return false;
  const s = durum(o, d);
  return !s.hazir.length && !s.hazirDegil.length && !s.catisma.length && (!izlenmeyenDahil || !s.izlenmeyen.length);
}

export const izleniyor = (o: Ortam, yol: string) => !!o.depo && yol in o.depo.index;

// Herhangi bir commit'in ağacında bu yol var mı (geçmişe hiç girdi mi)
export function gecmisteVarMi(o: Ortam, yol: string): boolean {
  const d = o.depo;
  if (!d) return false;
  const baslar = Object.entries(d.refs).map(([, h]) => soy(d, h));
  const head = headCommit(d);
  if (head) baslar.push(head);
  return gecmis(d, [...new Set(baslar)]).some((c) => yol in commitAgaci(d, c));
}

export const dalAdiniAl = (o: Ortam) => {
  const r = o.depo && gecerliDal(o.depo);
  return r ? r.replace(/^refs\/heads\//, "") : null;
};

export function sonMesaj(o: Ortam): string {
  const d = o.depo;
  const h = d && headCommit(d);
  return d && h ? commitOku(d, h).mesaj.trim() : "";
}
