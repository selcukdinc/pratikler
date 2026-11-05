// Hafta 3 ders şekilleri: temel diziler, üstel ve sinüzoidal diziler,
// simetri, sinyal dönüşümleri, blok diyagramı, dürtülerle ayrıştırma ve
// sistem özellikleri.

import { kutu, ok, yazi } from "./cizim";
import { aralik, eksen, stem, tikler } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

const v2 = (x: number) => x.toFixed(2).replace(".", ",").replace("-", "−");

// Bir diziyi n ekseninde stem olarak çizer; ymin/ymax verilmezse veriden bulunur
export function diziCiz(
  ns: number[], xs: number[], o: { x?: number; y?: number; w?: number; h?: number; renk?: "a" | "b" | "c" | "d"; ad?: string; y0?: number; y1?: number } = {},
) {
  const { x = 50, y = 24, w = 540, h = 150, renk = "a", ad = "x(n)" } = o;
  const lo = o.y0 ?? Math.min(0, ...xs);
  const hi = o.y1 ?? Math.max(1, ...xs);
  const pay = (hi - lo) * 0.12 || 1;
  const y0 = lo < 0 ? lo - pay : 0;
  const y1 = hi + pay;
  const nMin = ns[0]!;
  const nMax = ns[ns.length - 1]!;
  const adim = nMax - nMin > 24 ? 5 : nMax - nMin > 12 ? 2 : 1;
  const e = eksen({
    x, y, w, h, x0: nMin - 0.7, x1: nMax + 0.7, y0, y1, xTik: aralik(Math.ceil(nMin / adim) * adim, adim, nMax),
    yTik: tikler(y0, y1, 3).filter((t) => t >= lo - 1e-9 && t <= hi + 1e-9), sifirdan: true, izgara: true, xAd: "n", yAd: ad,
  });
  return e.s + stem(e, ns, xs, renk);
}

// ---- G-H3-01: Temel diziler ----
export type TemelDizi = "durtu" | "basamak" | "rampa";
export function temelDizi(tur: TemelDizi, n0: number) {
  const ns = aralik(-8, 1, 10);
  const xs = ns.map((n) => {
    const m = n - n0;
    return tur === "durtu" ? (m === 0 ? 1 : 0) : tur === "basamak" ? (m >= 0 ? 1 : 0) : m >= 0 ? m : 0;
  });
  const ad = tur === "durtu" ? "δ" : tur === "basamak" ? "u" : "uᵣ";
  const ifade = n0 === 0 ? `${ad}(n)` : `${ad}(n ${n0 > 0 ? "−" : "+"} ${Math.abs(n0)})`;
  return { s: diziCiz(ns, xs, { ad: ifade, y1: tur === "rampa" ? 10 : 1, h: 170 }), ifade };
}

// ---- G-H3-02: Gerçek üstel dizi aⁿ ----
export function ustelCiz(a: number) {
  const ns = aralik(0, 1, 15);
  const xs = ns.map((n) => a ** n);
  const sinir = Math.min(8, Math.max(1, ...xs.map(Math.abs)));
  const k = xs.map((x) => Math.max(-sinir, Math.min(sinir, x)));
  return diziCiz(ns, k, { ad: `(${v2(a)})ⁿ`, y0: Math.min(0, ...k), y1: Math.max(...k, 0.5), h: 180 });
}

// ---- G-H3-03: Karmaşık üstel dizi e^{(σ + jω₀)n} ----
export function karmasikUstelCiz(sigma: number, w0: number) {
  const ns = aralik(-10, 1, 10);
  const re = ns.map((n) => Math.exp(sigma * n) * Math.cos(w0 * n));
  const im = ns.map((n) => Math.exp(sigma * n) * Math.sin(w0 * n));
  const m = Math.min(6, Math.max(1, ...re.map(Math.abs), ...im.map(Math.abs)));
  const kirp = (x: number) => Math.max(-m, Math.min(m, x));
  let s = yazi(170, 14, "gerçel kısım", "g-mini g-kalin") + yazi(490, 14, "sanal kısım", "g-mini g-kalin");
  s += diziCiz(ns, re.map(kirp), { x: 30, y: 30, w: 280, h: 170, ad: "", y0: -m, y1: m });
  s += diziCiz(ns, im.map(kirp), { x: 350, y: 30, w: 280, h: 170, renk: "b", ad: "", y0: -m, y1: m });
  return s;
}

// ---- G-H3-04: Çift ve tek kısımlar ----
function ciftTek(): string {
  const ns = aralik(-4, 1, 4);
  const x = ns.map((n) => (n >= 0 && n <= 3 ? [1, 2, 3, 1][n]! : 0));
  const xr = ns.map((n) => x[ns.indexOf(-n)]!);
  const xe = x.map((v, i) => (v + xr[i]!) / 2);
  const xo = x.map((v, i) => (v - xr[i]!) / 2);
  const o = { w: 180, h: 110, y0: -1.6, y1: 3.2 };
  let s = yazi(105, 14, "x(n)", "g-kucuk g-kalin") + yazi(325, 14, "xₑ(n) = [x(n) + x(−n)] / 2", "g-mini g-kalin") + yazi(545, 14, "xₒ(n) = [x(n) − x(−n)] / 2", "g-mini g-kalin");
  s += diziCiz(ns, x, { ...o, x: 20, y: 30, ad: "" });
  s += diziCiz(ns, xe, { ...o, x: 240, y: 30, ad: "", renk: "c" });
  s += diziCiz(ns, xo, { ...o, x: 460, y: 30, ad: "", renk: "b" });
  s += yazi(330, 190, "çift kısım n = 0'a göre ayna simetrik, tek kısım ters simetrik; toplamları x(n)'dir", "g-mini g-soluk");
  return s;
}

// ---- G-H3-05: Zamanda kaydırma, ters çevirme ve ölçekleme ----
// Temel dizi: n = 0..4 için 1 2 3 2 1 benzeri, kolay izlenen değerler
export const DONUSUM_X: Record<number, number> = { [-1]: 1, 0: 3, 1: 2, 2: 4, 3: 1, 4: 2 };
const xAl = (n: number) => DONUSUM_X[n] ?? 0;
export function donusumCiz(k: number, n0: number) {
  const ns = aralik(-10, 1, 10);
  const y = ns.map((n) => xAl(k * n - n0));
  const ifade = `y(n) = x(${k === 1 ? "" : k === -1 ? "−" : k}n${n0 === 0 ? "" : n0 > 0 ? ` − ${n0}` : ` + ${-n0}`})`;
  let s = yazi(60, 12, "x(n)", "g-mini g-kalin", "start");
  s += diziCiz(ns, ns.map(xAl), { x: 50, y: 24, w: 540, h: 95, y0: 0, y1: 4, ad: "" });
  s += yazi(60, 150, ifade, "g-kod g-kucuk g-kalin", "start");
  s += diziCiz(ns, y, { x: 50, y: 164, w: 540, h: 95, y0: 0, y1: 4, ad: "", renk: "b" });
  return { s, ifade };
}

// ---- G-H3-06: Blok diyagramı simgeleri ----
function bloklar(): string {
  const daire = (x: number, y: number, isaret: string) => `<circle cx="${x}" cy="${y}" r="13" class="g-kutu"/>` + yazi(x, y, isaret, "g-kalin");
  let s = "";
  // Toplama
  s += yazi(110, 16, "toplama", "g-kucuk g-kalin");
  s += yazi(30, 50, "x₁(n)", "g-mini", "start") + ok([[70, 50], [97, 50]]) + daire(110, 50, "+") + ok([[123, 50], [170, 50]]);
  s += yazi(110, 100, "x₂(n)", "g-mini") + ok([[110, 88], [110, 63]]) + yazi(175, 50, "x₁(n) + x₂(n)", "g-mini", "start");
  // Çarpma
  s += yazi(390, 16, "çarpma (iki sinyal)", "g-kucuk g-kalin");
  s += yazi(310, 50, "x₁(n)", "g-mini", "start") + ok([[350, 50], [377, 50]]) + daire(390, 50, "×") + ok([[403, 50], [450, 50]]);
  s += yazi(390, 100, "x₂(n)", "g-mini") + ok([[390, 88], [390, 63]]) + yazi(455, 50, "x₁(n) · x₂(n)", "g-mini", "start");
  // Sabitle çarpma
  s += yazi(110, 130, "sabitle çarpma (kazanç)", "g-kucuk g-kalin");
  s += yazi(30, 165, "x(n)", "g-mini", "start") + ok([[62, 165], [95, 165]]);
  s += `<polygon points="95,150 95,180 125,165" class="g-kutu"/>` + yazi(105, 165, "c", "g-mini g-kalin");
  s += ok([[125, 165], [165, 165]]) + yazi(170, 165, "c · x(n)", "g-mini", "start");
  // Gecikme
  s += yazi(390, 130, "birim gecikme", "g-kucuk g-kalin");
  s += yazi(310, 165, "x(n)", "g-mini", "start") + ok([[342, 165], [365, 165]]) + kutu(365, 150, 50, 30, "g-dolu") + yazi(390, 165, "z⁻¹", "g-kod g-kucuk");
  s += ok([[415, 165], [445, 165]]) + yazi(450, 165, "x(n − 1)", "g-mini", "start");
  return s;
}

// ---- G-H3-07: Bir dizinin kaydırılmış dürtülerin toplamı olarak yazılması ----
function durtuAyristirma(): string {
  const deger: [number, number][] = [[-1, 2], [0, 1], [1, -1], [2, 3]];
  const ns = aralik(-3, 1, 4);
  let s = yazi(330, 10, "x(n) = 2δ(n + 1) + δ(n) − δ(n − 1) + 3δ(n − 2)", "g-kod g-kucuk g-kalin");
  s += diziCiz(ns, ns.map((n) => deger.find(([k]) => k === n)?.[1] ?? 0), { x: 40, y: 50, w: 250, h: 120, ad: "x(n)", y0: -1, y1: 3 });
  s += yazi(320, 100, "=", "g-kalin");
  deger.forEach(([k, a], i) => {
    const x = 345 + (i % 2) * 150;
    const y = 36 + Math.floor(i / 2) * 92;
    s += diziCiz(ns, ns.map((n) => (n === k ? a : 0)), { x, y, w: 120, h: 62, ad: "", y0: -1, y1: 3, renk: "c" });
    const katsayi = a === 1 ? "" : a === -1 ? "−" : `${a}·`;
    s += yazi(x + 60, y + 82, `${katsayi}δ(n${k === 0 ? "" : k < 0 ? ` + ${-k}` : ` − ${k}`})`, "g-mini g-kod");
  });
  return s;
}

// ---- G-H3-08: Sistem özellikleri tezgâhı ----
export interface SistemOrnegi {
  ifade: string;
  // doğrusal, zamanla değişmez, nedensel, hafızasız, kararlı, tersinir
  ozellik: [boolean, boolean, boolean, boolean, boolean, boolean];
  neden: string;
}
export const OZELLIK_ADLARI = ["doğrusal", "zamanla değişmez", "nedensel", "hafızasız (statik)", "kararlı (BIBO)", "tersinir"];
export const SISTEMLER: SistemOrnegi[] = [
  { ifade: "y(n) = 3x(n)", ozellik: [true, true, true, true, true, true], neden: "Sabitle çarpma: her özelliği sağlar. Girişi bulmak için çıkışı 3'e bölmek yeter." },
  { ifade: "y(n) = x(n) + x(n − 1)", ozellik: [true, true, true, false, true, false], neden: "Bir önceki örneği de kullandığı için hafızalıdır. x(n) = (−1)ⁿ girişi her n'de 0 verir; sıfır girişin çıkışı da 0 olduğundan iki farklı giriş aynı çıkışı verir: tersinir değil." },
  { ifade: "y(n) = x(n + 1)", ozellik: [true, true, false, false, true, true], neden: "Gelecekteki bir örneğe (n + 1) bağlıdır: nedensel değildir. Bir örnek geciktirerek giriş geri bulunur." },
  { ifade: "y(n) = x²(n)", ozellik: [false, true, true, true, true, false], neden: "Kare alma homojen değildir: 2x'in çıkışı 4x². x ve −x aynı çıkışı verdiği için tersinir de değildir." },
  { ifade: "y(n) = x(n) + 3", ozellik: [false, true, true, true, true, true], neden: "Sabit eklemek doğrusallığı bozar: sıfır girişin çıkışı 0 değil 3'tür (homojenlik bozulur)." },
  { ifade: "y(n) = n·x(n)", ozellik: [true, false, true, true, false, false], neden: "Katsayı n zamana bağlıdır: girişi kaydırınca çıkış aynı biçimde kaymaz. u(n) gibi sınırlı bir giriş n·u(n) gibi sınırsız bir çıkış verir. n = 0'da x(0) kaybolur: tersinir değil." },
  { ifade: "y(n) = x(−n)", ozellik: [true, false, false, false, true, true], neden: "Ters çevirme zamanla değişir: x(n − n₀) girişi x(−n − n₀) verir ama y(n − n₀) = x(−n + n₀)'dır. n < 0 için gelecekteki örnekleri kullanır." },
  { ifade: "y(n) = Σₖ₌₋∞ⁿ x(k)", ozellik: [true, true, true, false, false, true], neden: "Biriktirici (toplayıcı): bütün geçmişi kullanır. u(n) girişi (n + 1)u(n) verir ve sınırsız büyür: kararsız. x(n) = y(n) − y(n − 1) ile geri bulunur." },
];

export function sistemCiz(i: number): string {
  const s0 = SISTEMLER[i]!;
  let s = kutu(220, 20, 200, 44, "g-dolu") + yazi(320, 42, s0.ifade, "g-kod g-kucuk g-kalin");
  s += ok([[150, 42], [218, 42]]) + yazi(146, 42, "x(n)", "g-mini", "end") + ok([[420, 42], [490, 42]]) + yazi(494, 42, "y(n)", "g-mini", "start");
  OZELLIK_ADLARI.forEach((ad, k) => {
    const x = 40 + (k % 3) * 200;
    const y = 96 + Math.floor(k / 3) * 46;
    const evet = s0.ozellik[k]!;
    s += kutu(x, y, 180, 34, evet ? "g-ton1" : "g-hata");
    s += yazi(x + 16, y + 17, evet ? "✓" : "✗", `g-kalin ${evet ? "g-renk-c" : "g-renk-b"}`, "start");
    s += yazi(x + 36, y + 17, ad, "g-mini", "start");
  });
  return s;
}

export const HAFTA_3_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H3-01",
    baslik: "Birim dürtü, birim basamak ve birim rampa",
    aciklama: "Seçilen temel dizinin n ekseninde stem çizimi. Kaydırma miktarı değiştikçe dizi sağa (gecikme) ya da sola (ilerleme) kayar.",
    en: 640, boy: 225, icerik: temelDizi("durtu", 0).s, etkilesim: "temeldizi",
  },
  {
    kod: "G-H3-02",
    baslik: "Gerçek üstel dizi aⁿ",
    aciklama: "n = 0'dan 15'e aⁿ dizisi. a'nın büyüklüğü 1'den küçükse dizi söner, büyükse büyür; a negatifse işaret her örnekte değişir.",
    en: 640, boy: 232, icerik: ustelCiz(0.8), etkilesim: "ustel",
  },
  {
    kod: "G-H3-03",
    baslik: "Karmaşık üstel dizi",
    aciklama: "e üzeri (σ + jω₀)n dizisinin gerçel ve sanal kısımları. σ zarfı (sönme ya da büyüme), ω₀ salınım hızını belirler.",
    en: 660, boy: 225, icerik: karmasikUstelCiz(-0.1, Math.PI / 6), etkilesim: "karmasikustel",
  },
  {
    kod: "G-H3-04",
    baslik: "Bir dizinin çift ve tek kısımları",
    aciklama: "n = 0, 1, 2, 3 için değerleri bir, iki, üç, bir olan dizi; bunun çift kısmı (n = 0'a göre simetrik) ve tek kısmı (ters simetrik). İki kısım toplanınca dizinin kendisi çıkar.",
    en: 660, boy: 200, icerik: ciftTek(),
  },
  {
    kod: "G-H3-05",
    baslik: "Zamanda kaydırma, ters çevirme ve ölçekleme",
    aciklama: "Üstte temel dizi x(n), altta seçilen dönüşümle elde edilen y(n) = x(kn − n₀). k = −1 ters çevirir, k = 2 her ikinci örneği alır, n₀ kaydırır.",
    en: 640, boy: 290, icerik: donusumCiz(1, 2).s, etkilesim: "donusum",
  },
  {
    kod: "G-H3-06",
    baslik: "Blok diyagramı simgeleri",
    aciklama: "Ayrık zamanlı sistemlerin yapı taşları: iki sinyali toplayan ve çarpan daireler, sabitle çarpan üçgen (kazanç) ve bir örnek geciktiren kutu.",
    en: 600, boy: 200, icerik: bloklar(),
  },
  {
    kod: "G-H3-07",
    baslik: "Bir dizinin kaydırılmış dürtülerin toplamı olarak yazılması",
    aciklama: "Dört sıfırdan farklı örneği olan bir dizi; her örnek, o konuma kaydırılmış ve o değerle çarpılmış bir birim dürtüdür.",
    en: 650, boy: 236, icerik: durtuAyristirma(),
  },
  {
    kod: "G-H3-08",
    baslik: "Sistem özellikleri",
    aciklama: "Seçilen sistemin altı özelliği sağlayıp sağlamadığı: doğrusallık, zamanla değişmezlik, nedensellik, hafızasızlık, kararlılık ve tersinirlik.",
    en: 640, boy: 190, icerik: sistemCiz(1), etkilesim: "sistem",
  },
];
