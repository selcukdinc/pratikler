// Hafta 5 ders şekilleri: dönen nokta ve sinüs, sinüsün parametreleri,
// sinüslerin toplamı, Fourier serisi, darbenin spektrumu, sarma makinesi,
// zaman ve frekans gösterimi, sürenin dönüşüme etkisi.

import { cizgi, ok, yazi } from "./cizim";
import { aralik, egri, eksen, fonksiyon, kisa, stem, tikler } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

const PI = Math.PI;
const derece = (r: number) => Math.round((r * 180) / PI);

// ---- G-H5-01: Dönen nokta ve sinüs eğrisi ----
export function cemberCiz(teta: number) {
  const cx = 110;
  const cy = 112;
  const r = 80;
  const px = cx + r * Math.cos(teta);
  const py = cy - r * Math.sin(teta);
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" class="g-cizgi g-eksen"/>`;
  s += ok([[cx - r - 14, cy], [cx + r + 16, cy]], "g-cizgi g-eksen") + ok([[cx, cy + r + 14], [cx, cy - r - 16]], "g-cizgi g-eksen");
  s += cizgi([[cx, cy], [px, py]], "g-seri-a");
  s += cizgi([[px, py], [px, cy]], "g-kesik") + cizgi([[px, py], [cx, py]], "g-kesik");
  s += cizgi([[cx, cy], [px, cy]], "g-seri-d") + cizgi([[cx, py], [cx, cy]], "g-seri-c");
  s += `<circle cx="${px}" cy="${py}" r="5" class="g-stem-uc g-stem-a"/>`;
  s += yazi(cx + r + 4, cy + 14, "cos θ", "g-mini g-kalin", "start") + yazi(cx + 6, cy - r - 10, "sin θ", "g-mini g-kalin", "start");
  const e = eksen({
    x: 250, y: cy - 96, w: 380, h: 192, x0: 0, x1: 4 * PI, y0: -1.2, y1: 1.2,
    xTik: [PI, 2 * PI, 3 * PI, 4 * PI], xEtiket: (v) => (Math.round(v / PI) === 1 ? "π" : `${Math.round(v / PI)}π`), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "θ",
  });
  s += e.s + fonksiyon(e, Math.sin, "g-seri-c g-ince");
  const t = ((teta % (4 * PI)) + 4 * PI) % (4 * PI);
  s += cizgi([[px, py], [e.X(t), e.Y(Math.sin(t))]], "g-kesik");
  s += `<circle cx="${e.X(t)}" cy="${e.Y(Math.sin(t))}" r="5" class="g-stem-uc g-stem-c"/>`;
  return { s, cos: Math.cos(teta), sin: Math.sin(teta), derece: derece(teta) };
}

// ---- G-H5-02: Genlik, frekans ve faz ----
export function sinusCiz(A: number, f: number, faz: number) {
  const e = eksen({ x: 50, y: 22, w: 560, h: 170, x0: 0, x1: 2, y0: -2.4, y1: 2.4, xTik: aralik(0, 0.5, 2), yTik: [-2, -1, 1, 2], sifirdan: true, izgara: true, xAd: "t (s)" });
  let s = e.s + fonksiyon(e, (t) => Math.sin(2 * PI * t), "g-kesik", 300);
  s += fonksiyon(e, (t) => A * Math.sin(2 * PI * f * t + faz), "g-seri-a", 500);
  s += cizgi([[60, 212], [78, 212]], "g-kesik") + yazi(84, 212, "sin(2πt): A = 1, f = 1 Hz, φ = 0", "g-mini", "start");
  s += cizgi([[330, 212], [348, 212]], "g-seri-a") + yazi(354, 212, `${kisa(A, 2)}·sin(2π·${kisa(f, 2)}t + ${derece(faz)}°)`, "g-mini", "start");
  return s;
}

// ---- G-H5-03: İki sinüsün toplamı ----
export function toplamCiz(A2: number, f2: number, faz2: number) {
  const s1 = (t: number) => Math.sin(2 * PI * t);
  const s2 = (t: number) => A2 * Math.sin(2 * PI * f2 * t + faz2);
  const e = eksen({ x: 50, y: 22, w: 560, h: 190, x0: 0, x1: 2, y0: -3, y1: 3, xTik: aralik(0, 0.5, 2), yTik: [-2, -1, 1, 2], sifirdan: true, izgara: true, xAd: "t (s)" });
  let s = e.s + fonksiyon(e, s1, "g-seri-a g-ince", 400) + fonksiyon(e, s2, "g-seri-b g-ince", 400) + fonksiyon(e, (t) => s1(t) + s2(t), "g-seri-c", 600);
  s += cizgi([[60, 234], [78, 234]], "g-seri-a g-ince") + yazi(84, 234, "sin(2πt)", "g-mini", "start");
  s += cizgi([[200, 234], [218, 234]], "g-seri-b g-ince") + yazi(224, 234, `${kisa(A2, 2)}·sin(2π·${f2}t + ${derece(faz2)}°)`, "g-mini", "start");
  s += cizgi([[440, 234], [458, 234]], "g-seri-c") + yazi(464, 234, "toplam", "g-mini", "start");
  // Aynı frekansta sonuç: genlik ve faz (fazörlerin toplamı)
  const re = 1 + A2 * Math.cos(faz2);
  const im = A2 * Math.sin(faz2);
  return { s, genlik: Math.hypot(re, im), faz: derece(Math.atan2(im, re)) };
}

// ---- G-H5-04: Fourier serisiyle kare, üçgen ve testere dalga ----
export type Dalga = "kare" | "ucgen" | "testere";
export const DALGA_ADLARI: Record<Dalga, string> = { kare: "kare dalga", ucgen: "üçgen dalga", testere: "testere dişi" };
// k. harmoniğin sin(2πkt) katsayısı
export function katsayi(d: Dalga, k: number): number {
  if (d === "kare") return k % 2 ? 4 / (PI * k) : 0;
  if (d === "ucgen") return k % 2 ? ((((k - 1) / 2) % 2 ? -1 : 1) * 8) / (PI * PI * k * k) : 0;
  return ((k % 2 ? 1 : -1) * 2) / (PI * k);
}
function hedef(d: Dalga, t: number): number {
  const u = ((t % 1) + 1) % 1;
  if (d === "kare") return u < 0.5 ? 1 : -1;
  if (d === "ucgen") return u < 0.25 ? 4 * u : u < 0.75 ? 2 - 4 * u : 4 * u - 4;
  const v = ((t + 0.5) % 1 + 1) % 1 - 0.5;
  return 2 * v;
}
// Sıfırdan farklı ilk N harmonik
export function harmonikler(d: Dalga, N: number): number[] {
  const r: number[] = [];
  for (let k = 1; r.length < N; k++) if (katsayi(d, k) !== 0) r.push(k);
  return r;
}
export function seriCiz(d: Dalga, N: number) {
  const ks = harmonikler(d, N);
  const kismi = (t: number) => ks.reduce((a, k) => a + katsayi(d, k) * Math.sin(2 * PI * k * t), 0);
  const e = eksen({ x: 50, y: 20, w: 570, h: 160, x0: 0, x1: 2, y0: -1.5, y1: 1.5, xTik: aralik(0, 0.5, 2), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "t (s)" });
  let s = e.s;
  const ts = aralik(0, 0.0025, 2);
  s += egri(e, ts, ts.map((t) => hedef(d, t)), "g-kesik");
  s += egri(e, ts, ts.map(kismi), "g-seri-a");
  const e2 = eksen({ x: 50, y: 232, w: 570, h: 86, x0: 0, x1: 26, y0: 0, y1: 1.4, xTik: aralik(1, 2, 25), yTik: [0.5, 1], izgara: true, xAd: "k (harmonik)", yAd: "|bₖ|" });
  const tum = aralik(1, 1, 25);
  const genlik = tum.map((k) => Math.abs(katsayi(d, k)));
  s += e2.s + stem(e2, tum, genlik.map((g, i) => (ks.includes(tum[i]!) ? g : 0)), "a", 3) + stem(e2, tum, genlik.map((g, i) => (ks.includes(tum[i]!) ? 0 : g)), "d", 2.2);
  // Gibbs: kısmi toplamın en büyük değeri
  let tepe = 0;
  for (const t of aralik(0, 0.0005, 0.5)) tepe = Math.max(tepe, kismi(t));
  return { s, ks, tepe };
}

// ---- G-H5-05: Dikdörtgen darbe ve spektrumu ----
export function darbeCiz(tau: number) {
  const e1 = eksen({ x: 50, y: 24, w: 560, h: 80, x0: -2, x1: 2, y0: 0, y1: 1.3, xTik: aralik(-2, 0.5, 2), yTik: [1], sifirdan: true, izgara: true, xAd: "t (s)", yAd: "x(t)" });
  let s = e1.s + egri(e1, [-2, -tau / 2, -tau / 2, tau / 2, tau / 2, 2], [0, 0, 1, 1, 0, 0], "g-seri-a");
  const e2 = eksen({ x: 50, y: 150, w: 560, h: 130, x0: -6, x1: 6, y0: -0.6, y1: 2.2, xTik: aralik(-6, 1, 6), yTik: [-0.5, 0.5, 1, 1.5, 2], sifirdan: true, izgara: true, xAd: "f (Hz)", yAd: "X(f)" });
  const X = (f: number) => (f === 0 ? tau : Math.sin(PI * f * tau) / (PI * f));
  s += e2.s + fonksiyon(e2, X, "g-seri-c", 600);
  s += cizgi([[e2.X(1 / tau), e2.Y(0) - 6], [e2.X(1 / tau), e2.Y(0) + 6]], "g-seri-b") + cizgi([[e2.X(-1 / tau), e2.Y(0) - 6], [e2.X(-1 / tau), e2.Y(0) + 6]], "g-seri-b");
  return { s, sifir: 1 / tau };
}

// ---- G-H5-06: Sarma makinesi ----
export type SarmaSinyal = "kayik" | "kaymasiz" | "iki";
export const SARMA_ADLARI: [SarmaSinyal, string][] = [
  ["kayik", "1 + cos(2π·3t)"],
  ["kaymasiz", "cos(2π·3t)"],
  ["iki", "1 + [cos(2π·2t) + cos(2π·3t)]/2"],
];
const SARMA_T = 4;
const SARMA_NT = 1600;
const sarmaG = (tur: SarmaSinyal, t: number) =>
  tur === "kayik" ? 1 + Math.cos(2 * PI * 3 * t) : tur === "kaymasiz" ? Math.cos(2 * PI * 3 * t) : 1 + (Math.cos(2 * PI * 2 * t) + Math.cos(2 * PI * 3 * t)) / 2;
export function kutleMerkezi(tur: SarmaSinyal, f: number): [number, number] {
  let re = 0;
  let im = 0;
  for (let i = 0; i < SARMA_NT; i++) {
    const t = (i * SARMA_T) / SARMA_NT;
    const g = sarmaG(tur, t);
    re += g * Math.cos(2 * PI * f * t);
    im -= g * Math.sin(2 * PI * f * t);
  }
  return [re / SARMA_NT, im / SARMA_NT];
}
const kmEgrisi = new Map<SarmaSinyal, { fs: number[]; xs: number[] }>();
function egriAl(tur: SarmaSinyal) {
  let r = kmEgrisi.get(tur);
  if (!r) {
    const fs = aralik(0, 0.025, 5);
    r = { fs, xs: fs.map((f) => kutleMerkezi(tur, f)[0]) };
    kmEgrisi.set(tur, r);
  }
  return r;
}
export function sarmaCiz(tur: SarmaSinyal, f: number) {
  // Üstte sinyal
  const e0 = eksen({ x: 50, y: 18, w: 590, h: 60, x0: 0, x1: SARMA_T, y0: -1.2, y1: 2.2, xTik: aralik(0, 1, 4), yTik: [1, 2], sifirdan: true, izgara: true, xAd: "t (s)", yAd: "g(t)" });
  let s = e0.s + fonksiyon(e0, (t) => sarmaG(tur, t), "g-seri-a", 800);
  // Solda sarılmış eğri
  const cx = 150;
  const cy = 222;
  const b = 46;
  s += `<circle cx="${cx}" cy="${cy}" r="${2 * b}" class="g-izgara"/>` + `<circle cx="${cx}" cy="${cy}" r="${b}" class="g-izgara"/>`;
  s += ok([[cx - 2 * b - 10, cy], [cx + 2 * b + 14, cy]], "g-cizgi g-eksen") + ok([[cx, cy + 2 * b + 8], [cx, cy - 2 * b - 12]], "g-cizgi g-eksen");
  s += yazi(cx + 2 * b + 12, cy + 12, "gerçel", "g-mini g-soluk", "end") + yazi(cx + 6, cy - 2 * b - 8, "sanal", "g-mini g-soluk", "start");
  let p = "";
  for (let i = 0; i <= 1200; i++) {
    const t = (i * SARMA_T) / 1200;
    const g = sarmaG(tur, t);
    const x = cx + b * g * Math.cos(2 * PI * f * t);
    const y = cy + b * g * Math.sin(2 * PI * f * t); // saat yönü: sanal kısım −sin, ekranda y aşağı
    p += `${x.toFixed(1)},${y.toFixed(1)} `;
  }
  s += `<polyline points="${p.trim()}" class="g-seri-d g-ince"/>`;
  const [mr, mi] = kutleMerkezi(tur, f);
  s += `<circle cx="${cx + b * mr}" cy="${cy - b * mi}" r="6" class="g-stem-uc g-stem-b"/>`;
  s += yazi(cx, cy + 2 * b + 24, `sarma frekansı ${kisa(f, 2)} devir/s`, "g-mini g-kalin");
  // Sağda kütle merkezinin x'i, sarma frekansına göre
  const { fs, xs } = egriAl(tur);
  const e = eksen({ x: 330, y: 132, w: 310, h: 170, x0: 0, x1: 5, y0: -0.3, y1: 1.1, xTik: aralik(0, 1, 5), yTik: [0.5, 1], sifirdan: true, izgara: true, xAd: "f", yAd: "kütle merkezinin x'i" });
  s += e.s + egri(e, fs, xs, "g-seri-c");
  s += `<circle cx="${e.X(f)}" cy="${e.Y(mr)}" r="5" class="g-stem-uc g-stem-b"/>`;
  return { s, km: [mr, mi] as [number, number] };
}

// ---- G-H5-07: Zaman ve frekans gösterimi ----
function zamanFrekans(): string {
  const e1 = eksen({ x: 30, y: 40, w: 220, h: 100, x0: 0, x1: 2, y0: -2, y1: 2, xTik: [1, 2], yTik: [], sifirdan: true, xAd: "t" });
  let s = yazi(140, 14, "zaman: x(t)", "g-kucuk g-kalin");
  s += e1.s + fonksiyon(e1, (t) => Math.sin(2 * PI * 2 * t) + 0.6 * Math.sin(2 * PI * 5 * t), "g-seri-a", 400);
  const e2 = eksen({ x: 400, y: 40, w: 220, h: 100, x0: 0, x1: 7, y0: 0, y1: 1.2, xTik: [2, 5], yTik: [], sifirdan: true, xAd: "f" });
  s += yazi(510, 14, "frekans: X(f)", "g-kucuk g-kalin") + e2.s + stem(e2, [2, 5], [1, 0.6], "c");
  s += ok([[275, 70], [375, 70]]) + yazi(325, 56, "Fourier dönüşümü", "g-mini g-kalin");
  s += ok([[375, 112], [275, 112]]) + yazi(325, 128, "ters Fourier dönüşümü", "g-mini g-kalin");
  s += yazi(325, 170, "aynı sinyal, iki gösterim: 2 Hz'de 1, 5 Hz'de 0,6 genlikli iki sinüs", "g-mini g-soluk");
  return s;
}

// ---- G-H5-08: Süre uzadıkça tepe yükselir ve daralır ----
// ∫₀ᵀ cos(2π f₀ t) e^{−j2πft} dt'nin büyüklüğü
function sonluDonusum(f0: number, T: number, f: number) {
  const parca = (a: number): [number, number] => {
    // ∫₀ᵀ e^{j2πat} dt
    if (Math.abs(a) < 1e-9) return [T, 0];
    const w = 2 * PI * a;
    return [Math.sin(w * T) / w, (1 - Math.cos(w * T)) / w];
  };
  const [r1, i1] = parca(f0 - f);
  const [r2, i2] = parca(-(f0 + f));
  return Math.hypot((r1 + r2) / 2, (i1 + i2) / 2);
}
export function sureCiz(T: number) {
  const e1 = eksen({ x: 50, y: 22, w: 570, h: 70, x0: 0, x1: 8, y0: -1.3, y1: 1.3, xTik: aralik(0, 1, 8), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "t (s)", yAd: "g(t)" });
  let s = e1.s + fonksiyon(e1, (t) => (t <= T ? Math.cos(2 * PI * 3 * t) : 0), "g-seri-a", 1600);
  const e2 = eksen({ x: 50, y: 136, w: 570, h: 130, x0: 0, x1: 6, y0: 0, y1: 4.4, xTik: aralik(0, 1, 6), yTik: tikler(0, 4, 4), sifirdan: true, izgara: true, xAd: "f (Hz)", yAd: "|ĝ(f)|" });
  s += e2.s + fonksiyon(e2, (f) => sonluDonusum(3, T, f), "g-seri-c", 900);
  return { s, tepe: sonluDonusum(3, T, 3), genislik: 2 / T };
}

export const HAFTA_5_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H5-01",
    baslik: "Çember üzerinde dönen nokta ve sinüs eğrisi",
    aciklama: "Birim çember üzerinde θ açısında bir nokta. Noktanın yatay izdüşümü cos θ, dikey izdüşümü sin θ'dır. θ arttıkça dikey izdüşüm sağdaki sinüs eğrisini çizer.",
    en: 660, boy: 228, icerik: cemberCiz(PI / 3).s, etkilesim: "cember",
  },
  {
    kod: "G-H5-02",
    baslik: "Sinüsün genliği, frekansı ve fazı",
    aciklama: "Kesikli çizgi referans sinüs sin(2πt); düz çizgi seçilen genlik, frekans ve fazla A·sin(2πft + φ). Genlik yüksekliği, frekans saniyedeki salınım sayısını, faz eğrinin zamanda kaymasını belirler.",
    en: 640, boy: 224, icerik: sinusCiz(1.5, 1, 0), etkilesim: "sinus",
  },
  {
    kod: "G-H5-03",
    baslik: "İki sinüsün toplamı",
    aciklama: "1 Hz'lik bir sinüs, genliği, frekansı ve fazı ayarlanabilen ikinci bir sinüs ve ikisinin toplamı. Frekanslar eşitse toplam yine aynı frekansta bir sinüstür; farklıysa toplam sinüs değildir ama periyodiktir.",
    en: 640, boy: 246, icerik: toplamCiz(1, 1, PI / 2).s, etkilesim: "sinustoplam",
  },
  {
    kod: "G-H5-04",
    baslik: "Fourier serisi: sinüslerden kare, üçgen ve testere dalga",
    aciklama: "Üstte hedef dalga (kesikli) ve ilk N harmoniğin toplamı; altta harmoniklerin genlikleri. Kare dalgada yalnızca tek harmonikler 1/k ile, üçgen dalgada tek harmonikler 1/k² ile azalır; testere dişinde bütün harmonikler vardır.",
    en: 660, boy: 340, icerik: seriCiz("kare", 3).s, etkilesim: "fourierserisi",
  },
  {
    kod: "G-H5-05",
    baslik: "Dikdörtgen darbe ve frekans spektrumu",
    aciklama: "Üstte τ süreli bir dikdörtgen darbe, altta Fourier dönüşümü sin(πfτ)/(πf). Spektrum sürekli bir eğridir; ilk sıfırı f = 1/τ'dadır. Darbe kısaldıkça spektrum genişler.",
    en: 640, boy: 300, icerik: darbeCiz(1).s, etkilesim: "darbe",
  },
  {
    kod: "G-H5-06",
    baslik: "Sarma makinesi: sinyali çemberin etrafına sarmak",
    aciklama: "Üstte g(t). Solda g(t), saniyede f devirle dönen bir çemberin etrafına sarılmış; kırmızı nokta eğrinin kütle merkezi. Sağda kütle merkezinin yatay konumu sarma frekansına göre çizilmiş; sinyalin frekansında (3 Hz) belirgin bir tepe vardır.",
    en: 680, boy: 356, icerik: sarmaCiz("kayik", 3).s, etkilesim: "sarma",
  },
  {
    kod: "G-H5-07",
    baslik: "Zaman ve frekans gösterimi",
    aciklama: "Solda iki sinüsün toplamı olan bir zaman sinyali, sağda aynı sinyalin frekans gösterimi: 2 Hz ve 5 Hz'de iki çizgi. Fourier dönüşümü zamandan frekansa, ters dönüşüm frekanstan zamana götürür.",
    en: 650, boy: 184, icerik: zamanFrekans(),
  },
  {
    kod: "G-H5-08",
    baslik: "Gözlem süresi ve Fourier dönüşümünün tepesi",
    aciklama: "Üstte yalnızca T saniye boyunca gözlenen 3 Hz'lik kosinüs, altta dönüşümün büyüklüğü. T uzadıkça 3 Hz'deki tepe yükselir (yaklaşık T/2) ve daralır (genişlik yaklaşık 2/T).",
    en: 640, boy: 290, icerik: sureCiz(2).s, etkilesim: "sure",
  },
];
