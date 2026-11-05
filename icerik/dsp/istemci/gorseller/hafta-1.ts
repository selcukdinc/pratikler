// Hafta 1 ders şekilleri: sürekli ve ayrık sinyal, eksenlerin adları,
// ortalama/standart sapma/rms, histogram, pmf ve pdf, normal dağılım, rastgele
// sayılarla gürültü üretimi, kesinlik ve doğruluk.

import { cizgi, kutu, ok, satirlar, yazi } from "./cizim";
import { aralik, cubuklar, dolgu, egri, eksen, fonksiyon, gosterge, kisa, rastgele, seviye, stem, tikler } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

// Tohumlu Gauss sayılar (Box-Muller)
export function gaussUret(adet: number, tohum: number, mu = 0, sigma = 1) {
  const r = rastgele(tohum);
  const v: number[] = [];
  while (v.length < adet) {
    const u1 = Math.max(r(), 1e-12);
    const u2 = r();
    const m = Math.sqrt(-2 * Math.log(u1));
    v.push(mu + sigma * m * Math.cos(2 * Math.PI * u2), mu + sigma * m * Math.sin(2 * Math.PI * u2));
  }
  return v.slice(0, adet);
}

export function istatistik(x: number[]) {
  const N = x.length;
  const mu = x.reduce((a, b) => a + b, 0) / N;
  const s2 = x.reduce((a, b) => a + (b - mu) ** 2, 0) / (N - 1);
  const rms = Math.sqrt(x.reduce((a, b) => a + b * b, 0) / N);
  return { mu, sigma: Math.sqrt(s2), rms, min: Math.min(...x), max: Math.max(...x) };
}

const virgul = (v: number, b = 2) => v.toFixed(b).replace(".", ",").replace("-", "−");

// ---- G-H1-01: ADC: örnekleme ve niceleme ----
export const ADC_BITLER = [1, 2, 3, 4, 6, 8];
export const ADC_FS = [5, 10, 20, 50, 100];
const surekli = (t: number) => 0.5 + 0.32 * Math.sin(2 * Math.PI * 1.5 * t) + 0.12 * Math.sin(2 * Math.PI * 4 * t + 0.6);

export function adcCiz(bit: number, fs: number): string {
  const L = 2 ** bit;
  const e = eksen({
    x: 60, y: 30, w: 540, h: 200, x0: 0, x1: 1, y0: 0, y1: 1,
    xTik: aralik(0, 0.2, 1), yTik: [0, 0.25, 0.5, 0.75, 1], izgara: true, xAd: "t (s)", yAd: "genlik (V)",
  });
  let s = e.s;
  // Niceleme seviyeleri (çok sıkışmayacak kadarı)
  if (L <= 16) for (let k = 0; k < L; k++) s += cizgi([[e.X(0), e.Y((k + 0.5) / L)], [e.X(1), e.Y((k + 0.5) / L)]], "g-izgara");
  s += fonksiyon(e, surekli, "g-seri-a g-ince");
  const ts: number[] = [];
  const qs: number[] = [];
  for (let n = 0; n / fs <= 1 + 1e-9; n++) {
    const t = n / fs;
    const k = Math.min(L - 1, Math.floor(surekli(t) * L));
    ts.push(t);
    qs.push((k + 0.5) / L);
  }
  s += stem(e, ts, qs, "b", fs > 50 ? 2 : 3.5);
  s += gosterge(80, 268, [["g-seri-a g-ince", "sürekli sinyal x(t)"], ["g-seri-b", "ayrık (nicelenmiş) örnekler x[n]"]], 190);
  s += yazi(620, 268, `${L} seviye · Ts = ${kisa(1000 / fs)} ms`, "g-mini g-kalin", "end");
  return s;
}

// ---- G-H1-02: Bir sinyal grafiğinin adları ----
function eksenAdlari(): string {
  const e = eksen({ x: 70, y: 40, w: 330, h: 160, x0: 0, x1: 40, y0: -1.2, y1: 1.2, xTik: [0, 10, 20, 30, 40], yTik: [-1, 0, 1] });
  const r = rastgele(7);
  const xs = aralik(0, 1, 40);
  const ys = xs.map((n) => 0.8 * Math.sin(n / 4) + 0.2 * (r() - 0.5));
  let s = e.s + stem(e, xs, ys, "a", 2.4);
  s += satirlar(235, 238, ["örnek numarası (n)", "bağımsız değişken · x ekseni · apsis"], "g-mini", "middle", 14);
  // Alanlar
  const alan: [string, string][] = [["zaman alanı", "yatay eksen zaman / örnek no."], ["frekans alanı", "yatay eksen frekans"], ["uzaysal alan", "yatay eksen mesafe"]];
  alan.forEach(([a, b], i) => {
    const y = 48 + i * 62;
    s += kutu(440, y, 190, 48, i === 0 ? "g-dolu g-secili" : "g-dolu") + yazi(535, y + 16, a, "g-kucuk g-kalin") + yazi(535, y + 34, b, "g-mini");
  });
  s += yazi(535, 30, "Sinyalin alanı = yatay eksendeki nicelik", "g-mini g-kalin");
  return s;
}

// Döndürülmüş dikey yazı
const dikey = (x: number, y: number, ss: string[]) =>
  ss.map((t, i) => `<text x="${x + i * 13}" y="${y}" dy="0.35em" text-anchor="middle" transform="rotate(-90 ${x + i * 13} ${y})" class="g-metin g-mini">${t}</text>`).join("");

function eksenAdlariSekli(): string {
  return eksenAdlari() + dikey(22, 120, ["genlik · bağımlı değişken", "y ekseni · ordinat"]);
}

// ---- G-H1-03: Dalga biçimleri, ortalama, standart sapma ve rms ----
export type DalgaTuru = "sinus" | "kare" | "ucgen" | "gurultu";
export const DALGA_ADLARI: [DalgaTuru, string][] = [["sinus", "sinüs"], ["kare", "kare"], ["ucgen", "üçgen"], ["gurultu", "Gauss gürültü"]];

export function dalgaOrnekleri(tur: DalgaTuru, tepe: number, dc: number, N = 1000): number[] {
  const g = tur === "gurultu" ? gaussUret(N, 11) : [];
  return Array.from({ length: N }, (_, k) => {
    const f = (2 * k) / N; // iki periyot
    const p = f % 1;
    const v =
      tur === "sinus" ? Math.sin(2 * Math.PI * f)
      : tur === "kare" ? (p < 0.5 ? 1 : -1)
      : tur === "ucgen" ? (p < 0.5 ? 4 * p - 1 : 3 - 4 * p)
      : g[k]! / 3; // ±3σ yaklaşık ±1
    return dc + tepe * v;
  });
}

export function istatistikCiz(tur: DalgaTuru, tepe: number, dc: number): string {
  const x = dalgaOrnekleri(tur, tepe, dc);
  const st = istatistik(x);
  const e = eksen({
    x: 60, y: 24, w: 470, h: 220, x0: 0, x1: x.length, y0: -3, y1: 3,
    yTik: [-3, -2, -1, 0, 1, 2, 3], izgara: true, xAd: "n", yAd: "x[n]",
  });
  const xs = x.map((_, k) => k);
  let s = e.s;
  // μ ± σ bandı
  s += `<rect x="${e.X(0)}" y="${e.Y(st.mu + st.sigma)}" width="${e.o.w}" height="${e.Y(st.mu - st.sigma) - e.Y(st.mu + st.sigma)}" class="g-dolgu-c"/>`;
  s += egri(e, xs, x, tur === "gurultu" ? "g-seri-a g-ince" : "g-seri-a");
  s += seviye(e, st.mu, "μ", "g-seri-c g-ince");
  s += seviye(e, st.rms, "rms", "g-kesik");
  s += yazi(560, 40, `μ  = ${virgul(st.mu)}`, "g-kod g-mini", "start");
  s += yazi(560, 58, `σ  = ${virgul(st.sigma)}`, "g-kod g-mini", "start");
  s += yazi(560, 76, `rms = ${virgul(st.rms)}`, "g-kod g-mini", "start");
  s += yazi(560, 94, `Vpp = ${virgul(st.max - st.min)}`, "g-kod g-mini", "start");
  if (st.sigma > 1e-9) s += yazi(560, 118, `Vpp/σ = ${virgul((st.max - st.min) / st.sigma)}`, "g-kod g-mini g-kalin", "start");
  s += yazi(560, 150, "yeşil bant: μ ± σ", "g-mini g-soluk", "start");
  s += yazi(560, 166, "kesikli: rms düzeyi", "g-mini g-soluk", "start");
  return s;
}

// ---- G-H1-04: Tepeden tepeye değer ve standart sapma ----
function vppSigma(): string {
  const paneller: [string, (p: number) => number, string][] = [
    ["kare", (p) => (p % 1 < 0.5 ? 1 : -1), "Vpp = 2σ"],
    ["üçgen", (p) => (p % 1 < 0.5 ? 4 * (p % 1) - 1 : 3 - 4 * (p % 1)), "Vpp = √12 σ ≈ 3,46σ"],
    ["sinüs", (p) => Math.sin(2 * Math.PI * p), "Vpp = 2√2 σ ≈ 2,83σ"],
  ];
  const g = gaussUret(400, 3).map((v) => v / 3.2);
  let s = "";
  paneller.forEach(([ad, f, k], i) => {
    const x0 = 20 + i * 160;
    const e = eksen({ x: x0 + 10, y: 40, w: 130, h: 90, x0: 0, x1: 2, y0: -1.3, y1: 1.3 });
    s += yazi(x0 + 75, 20, ad, "g-kucuk g-kalin");
    s += fonksiyon(e, f, "g-seri-a g-ince", 400);
    s += cizgi([[x0 + 4, e.Y(1)], [x0 + 4, e.Y(-1)]], "g-cizgi") + yazi(x0 + 75, 152, k, "g-mini g-kod");
  });
  const x0 = 500;
  const e = eksen({ x: x0, y: 40, w: 130, h: 90, x0: 0, x1: g.length, y0: -1.3, y1: 1.3 });
  s += yazi(x0 + 65, 20, "rastgele gürültü", "g-kucuk g-kalin");
  s += egri(e, g.map((_, k) => k), g, "g-seri-a g-ince");
  s += yazi(x0 + 65, 152, "Vpp ≈ 6σ … 8σ", "g-mini g-kod");
  s += yazi(330, 186, "Tepeden tepeye değeri (Vpp) belli dalgalarda σ ile sabit bir oranla bağlıdır; gürültüde yalnızca kabaca.", "g-mini g-soluk");
  return s;
}

// ---- G-H1-05: Örnek sayısı arttıkça histogram ----
export const HIST_N = [128, 1024, 8192, 65536];
const hVeri = gaussUret(65536, 21, 128, 18).map((v) => Math.max(0, Math.min(255, Math.round(v))));

export function histogramCiz(N: number, pmf: boolean) {
  const H = new Array(256).fill(0);
  for (let k = 0; k < N; k++) H[hVeri[k]!]++;
  let topl = 0;
  let kare = 0;
  for (let i = 0; i < 256; i++) topl += i * H[i];
  const mu = topl / N;
  for (let i = 0; i < 256; i++) kare += (i - mu) ** 2 * H[i];
  const sigma = Math.sqrt(kare / (N - 1));
  const y = pmf ? H.map((h) => h / N) : H;
  const ymax = Math.max(...y) * 1.15;
  const e = eksen({
    x: 70, y: 24, w: 520, h: 210, x0: 60, x1: 200, y0: 0, y1: ymax,
    xTik: aralik(60, 20, 200), yTik: tikler(0, ymax),
    yEtiket: (v) => (pmf ? kisa(v, 4) : kisa(v, 0)), izgara: true, xAd: "değer i", yAd: pmf ? "pmf = Hᵢ / N" : "Hᵢ (adet)",
  });
  let s = e.s + cubuklar(e, aralik(59.5, 1, 200.5), y.slice(60, 201), "g-cubuk-a");
  // Beklenen eğri
  const ideal = (i: number) => ((pmf ? 1 : N) / (18 * Math.sqrt(2 * Math.PI))) * Math.exp(-((i - 128) ** 2) / (2 * 18 * 18));
  s += fonksiyon(e, ideal, "g-seri-b g-ince");
  s += gosterge(80, 268, [["g-seri-b g-ince", "örneklerin geldiği dağılım"]], 200);
  return { s, mu, sigma, toplam: pmf ? 1 : N };
}

// ---- G-H1-06: pmf ve pdf ----
function pmfPdf(): string {
  const deger = [1, 2, 3, 4, 5, 6];
  const e1 = eksen({ x: 40, y: 40, w: 230, h: 130, x0: 0, x1: 7, y0: 0, y1: 0.25, xTik: deger, yTik: [0, 1 / 6], yEtiket: (v) => (v ? "1/6" : "0"), xAd: "değer" });
  let s = yazi(155, 16, "pmf: zar atışı (ayrık)", "g-kucuk g-kalin");
  s += e1.s + stem(e1, deger, deger.map(() => 1 / 6), "a");
  s += yazi(155, 208, "her çubuk bir olasılık; toplamları 1", "g-mini g-soluk");
  const p = (x: number) => Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
  const e2 = eksen({ x: 360, y: 40, w: 260, h: 130, x0: -3.5, x1: 3.5, y0: 0, y1: 0.45, xTik: [-3, -2, -1, 0, 1, 2, 3], yTik: [0, 0.2, 0.4], xAd: "x", sifirdan: false });
  const xs = aralik(0.5, 0.02, 1.5);
  s += yazi(490, 16, "pdf: sürekli gerilim", "g-kucuk g-kalin");
  s += e2.s + dolgu(e2, xs, xs.map(p), "g-dolgu-a") + fonksiyon(e2, p, "g-seri-a");
  s += ok([[575, 62], [e2.X(1), e2.Y(0.12)]], "g-cizgi g-renk-a-cizgi", "g-renk-a") + yazi(655, 50, "alan = P(0,5 < x < 1,5)", "g-mini g-kalin g-renk-a", "end");
  s += yazi(490, 208, "olasılık eğrinin altındaki alan; toplam alan 1", "g-mini g-soluk");
  return s;
}

// ---- G-H1-07: Normal dağılım ----
export function gaussCiz(mu: number, sigma: number, k: number) {
  const p = (x: number) => Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (Math.sqrt(2 * Math.PI) * sigma);
  const e = eksen({ x: 60, y: 30, w: 540, h: 210, x0: -6, x1: 6, y0: 0, y1: 0.85, xTik: aralik(-6, 1, 6), yTik: [0, 0.2, 0.4, 0.6, 0.8], izgara: true, xAd: "x", yAd: "P(x)" });
  const a = mu - k * sigma;
  const b = mu + k * sigma;
  const xs = aralik(Math.max(-6, a), (b - a) / 200, Math.min(6, b));
  let s = e.s + dolgu(e, xs, xs.map(p), "g-dolgu-a") + fonksiyon(e, p, "g-seri-a", 400);
  s += cizgi([[e.X(mu), e.Y(0)], [e.X(mu), e.Y(p(mu))]], "g-kesik");
  s += yazi(e.X(mu), e.Y(Math.min(0.83, p(mu))) - 10, "μ", "g-mini g-kalin");
  const alan = erf(k / Math.SQRT2);
  return { s, tepe: p(mu), alan };
}

// Hata fonksiyonu (Abramowitz-Stegun 7.1.26)
export function erf(x: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return x >= 0 ? y : -y;
}

// ---- G-H1-08: Rastgele sayıları toplayarak gürültü ----
const RND = (() => {
  const r = rastgele(5);
  return Array.from({ length: 12 * 20000 }, () => r());
})();

export function rndToplamCiz(k: number) {
  const N = 20000;
  const toplam = Array.from({ length: N }, (_, i) => {
    let t = 0;
    for (let j = 0; j < k; j++) t += RND[i * 12 + j]!;
    return t;
  });
  const st = istatistik(toplam);
  const kutuSay = 40;
  const gen = k / kutuSay;
  const H = new Array(kutuSay).fill(0);
  for (const v of toplam) H[Math.min(kutuSay - 1, Math.floor(v / gen))]++;
  const pdf = H.map((h) => h / (N * gen));
  const ymax = Math.max(1.2, ...pdf) * 1.1;
  const ymaxT = k === 1 ? 1.4 : ymax;
  const e = eksen({
    x: 60, y: 30, w: 500, h: 200, x0: 0, x1: k, y0: 0, y1: ymaxT,
    xTik: aralik(0, k <= 4 ? 0.5 : 1, k).filter((_, i, a) => a.length <= 13 || i % 2 === 0),
    yTik: [0, 0.5, 1].filter((v) => v < ymaxT), izgara: true, xAd: "toplam", yAd: "olasılık yoğunluğu",
  });
  let s = e.s + cubuklar(e, aralik(0, gen, k), pdf, "g-cubuk-a");
  const m = k / 2;
  const sg = Math.sqrt(k / 12);
  s += fonksiyon(e, (x) => Math.exp(-((x - m) ** 2) / (2 * sg * sg)) / (Math.sqrt(2 * Math.PI) * sg), "g-seri-b g-ince");
  s += gosterge(80, 268, [["g-seri-b g-ince", "aynı μ ve σ'lı Gauss eğrisi"]], 200);
  return { s, mu: st.mu, sigma: st.sigma, kuramMu: m, kuramSigma: sg };
}

// ---- G-H1-09: Kesinlik ve doğruluk ----
function kesinlikDogruluk(): string {
  const e = eksen({ x: 40, y: 40, w: 300, h: 150, x0: 990, x1: 1010, y0: 0, y1: 0.4, xTik: [990, 995, 1000, 1005, 1010], xAd: "ölçülen (m)" });
  const p = (x: number) => Math.exp(-((x - 1003) ** 2) / (2 * 1.6 * 1.6)) / (Math.sqrt(2 * Math.PI) * 1.6);
  let s = e.s + fonksiyon(e, p, "g-seri-a");
  s += cizgi([[e.X(1000), e.Y(0)], [e.X(1000), e.Y(0.36)]], "g-seri-c g-ince") + yazi(e.X(1000) - 4, e.Y(0.36), "gerçek değer", "g-mini g-kalin g-renk-c", "end");
  s += cizgi([[e.X(1003), e.Y(0)], [e.X(1003), e.Y(0.36)]], "g-kesik") + yazi(e.X(1003) + 4, e.Y(0.36), "ortalama", "g-mini g-kalin", "start");
  s += ok([[e.X(1000), e.Y(0.29)], [e.X(1003), e.Y(0.29)]], "g-cizgi g-renk-b-cizgi", "g-renk-b") + yazi(e.X(1001.5), e.Y(0.315), "doğruluk", "g-mini g-kalin g-renk-b");
  s += ok([[e.X(1003), e.Y(p(1004.6))], [e.X(1004.6), e.Y(p(1004.6))]], "g-cizgi g-renk-a-cizgi", "g-renk-a") + yazi(e.X(1004.8) + 4, e.Y(p(1004.6)), "kesinlik (σ)", "g-mini g-kalin g-renk-a", "start");
  // Hedefler
  const hedefler: [string, number, number, number][] = [
    ["kesin ve doğru", 0, 0, 4], ["kesin, doğru değil", 16, -10, 4],
    ["doğru, kesin değil", 0, 0, 16], ["ne kesin ne doğru", 14, 10, 16],
  ];
  hedefler.forEach(([ad, dx, dy, yay], i) => {
    const cx = 420 + (i % 2) * 120;
    const cy = 70 + Math.floor(i / 2) * 104;
    s += `<circle cx="${cx}" cy="${cy}" r="36" class="g-kutu"/><circle cx="${cx}" cy="${cy}" r="22" class="g-kutu"/><circle cx="${cx}" cy="${cy}" r="8" class="g-dolu"/>`;
    const r = rastgele(40 + i);
    for (let j = 0; j < 7; j++) s += `<circle cx="${(cx + dx + (r() - 0.5) * yay * 1.6).toFixed(1)}" cy="${(cy + dy + (r() - 0.5) * yay * 1.6).toFixed(1)}" r="2.6" class="g-renk-b"/>`;
    s += yazi(cx, cy + 46, ad, "g-mini");
  });
  return s;
}

// ---- G-H1-10: Kayan noktalı veride kutulama ----
// 0 ile 10 arasında değer alan 400 örnek; iki tepeli bir dağılımdan gelir.
const KUTU_A = 0;
const KUTU_B = 10;
export const KUTU_SAYILARI = [5, 10, 20, 50, 100, 250];
const kutuPdf = (x: number) =>
  (0.7 * Math.exp(-((x - 4) ** 2) / (2 * 1.1 ** 2))) / (1.1 * Math.sqrt(2 * Math.PI)) +
  (0.3 * Math.exp(-((x - 7.5) ** 2) / (2 * 0.6 ** 2))) / (0.6 * Math.sqrt(2 * Math.PI));
export const KUTU_VERI: number[] = [...gaussUret(280, 31, 4, 1.1), ...gaussUret(120, 32, 7.5, 0.6)].map((v) => Math.min(9.999, Math.max(0, v)));

// Değerin kutusu: k = ⌊(x − a) / w⌋. Üst sınırın kendisi son kutuya düşer.
export const kutuNo = (x: number, M: number) => Math.min(M - 1, Math.floor(((x - KUTU_A) * M) / (KUTU_B - KUTU_A)));

export function kutulamaCiz(M: number, x: number, yogunluk: boolean) {
  const w = (KUTU_B - KUTU_A) / M;
  const N = KUTU_VERI.length;
  const H: number[] = new Array(M).fill(0);
  for (const v of KUTU_VERI) H[kutuNo(v, M)]!++;
  const y = yogunluk ? H.map((h) => h / (N * w)) : H;
  const k = kutuNo(x, M);
  const ymax = Math.max(yogunluk ? 0.4 : 0, ...y) * 1.15;
  const kenar = Array.from({ length: M + 1 }, (_, i) => KUTU_A + i * w);
  // Üst şerit: örneklerin sayı doğrusundaki yerleri ve kutu sınırları
  const u = { x: 70, w: 540, y: 34, h: 30 };
  const X = (v: number) => u.x + ((v - KUTU_A) / (KUTU_B - KUTU_A)) * u.w;
  let s = `<rect x="${X(k * w)}" y="${u.y - 3}" width="${Math.max(2, X(w) - X(0))}" height="${u.h + 6}" class="g-bolge-a"/>`;
  for (const v of KUTU_VERI) s += cizgi([[X(v), u.y + 5], [X(v), u.y + u.h - 5]], "g-cizgi g-ince g-soluk");
  if (M <= 100) for (const v of kenar) s += cizgi([[X(v), u.y], [X(v), u.y + u.h]], "g-kesik");
  s += cizgi([[u.x, u.y + u.h], [u.x + u.w, u.y + u.h]], "g-cizgi g-eksen");
  s += yazi(u.x - 8, u.y + u.h / 2 + 4, "örnekler", "g-mini g-soluk", "end");
  s += ok([[X(x), u.y - 14], [X(x), u.y + 2]], "g-cizgi g-renk-b-cizgi", "g-renk-b");
  s += yazi(Math.min(Math.max(X(x), u.x + 30), u.x + u.w - 30), u.y - 18, `x = ${virgul(x)}`, "g-mini g-kalin g-renk-b");
  // Alt: histogram
  const e = eksen({
    x: 70, y: 100, w: 540, h: 170, x0: KUTU_A, x1: KUTU_B, y0: 0, y1: ymax,
    xTik: aralik(0, 1, 10), yTik: tikler(0, ymax), yEtiket: (v) => kisa(v, yogunluk ? 2 : 0), izgara: true,
    xAd: "değer", yAd: yogunluk ? "Hₖ / (N·w)" : "Hₖ (adet)",
  });
  s += e.s + cubuklar(e, kenar, y, "g-cubuk-a") + cubuklar(e, [kenar[k]!, kenar[k + 1]!], [y[k]!], "g-cubuk-b");
  if (yogunluk) s += fonksiyon(e, kutuPdf, "g-seri-b g-ince") + gosterge(80, 318, [["g-seri-b g-ince", "örneklerin geldiği pdf"]], 200);
  return { s, w, k, Hk: H[k]!, bos: H.filter((h) => h === 0).length, alt: kenar[k]!, ust: kenar[k + 1]!, N };
}

export const HAFTA_1_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H1-01",
    baslik: "Örnekleme ve niceleme: sürekli sinyalden ayrık sinyale",
    aciklama: "Sürekli bir gerilim eğrisi ve bunun belirli aralıklarla alınmış, belirli seviyelere yuvarlanmış örnekleri. Bit sayısı seviye sayısını, örnekleme hızı örnekler arasındaki süreyi belirler.",
    en: 640, boy: 285, icerik: adcCiz(3, 20), etkilesim: "adc",
  },
  {
    kod: "G-H1-02",
    baslik: "Bir sinyal grafiğinin eksenleri ve alanı",
    aciklama: "Dikey eksen genliktir (bağımlı değişken, ordinat); yatay eksen örnek numarası ya da zamandır (bağımsız değişken, apsis). Yatay eksendeki nicelik sinyalin alanını belirler: zaman, frekans ya da uzaysal alan.",
    en: 650, boy: 260, icerik: eksenAdlariSekli(),
  },
  {
    kod: "G-H1-03",
    baslik: "Ortalama, standart sapma ve rms",
    aciklama: "Seçilen dalga biçiminin örnekleri, ortalama çizgisi, ortalama artı eksi bir standart sapma bandı ve rms düzeyi. Yanında ölçülen μ, σ, rms ve tepeden tepeye değer yazar.",
    en: 660, boy: 270, icerik: istatistikCiz("sinus", 1, 0), etkilesim: "istatistik",
  },
  {
    kod: "G-H1-04",
    baslik: "Tepeden tepeye değer ile standart sapma arasındaki ilişki",
    aciklama: "Kare dalgada tepeden tepeye değer iki standart sapmadır, üçgen dalgada karekök 12 standart sapma, sinüste iki karekök iki standart sapma; rastgele gürültüde yaklaşık altı ile sekiz standart sapma arasındadır.",
    en: 660, boy: 200, icerik: vppSigma(),
  },
  {
    kod: "G-H1-05",
    baslik: "Histogram ve pmf: örnek sayısı arttıkça",
    aciklama: "Sekiz bitlik bir sinyalin histogramı: her değerden kaç örnek olduğu. Örnek sayısı arttıkça histogram pürüzsüzleşir ve örneklerin geldiği dağılıma yaklaşır. pmf, histogramın örnek sayısına bölünmüş halidir.",
    en: 640, boy: 285, icerik: histogramCiz(1024, false).s, etkilesim: "histogram",
  },
  {
    kod: "G-H1-06",
    baslik: "pmf ayrık değerlerin, pdf sürekli değerlerin olasılığı",
    aciklama: "Solda bir zarın pmf'i: altı değerin her biri altıda bir olasılıklı. Sağda bir pdf eğrisi: belirli bir aralığın olasılığı eğrinin altındaki alandır.",
    en: 660, boy: 220, icerik: pmfPdf(),
  },
  {
    kod: "G-H1-10",
    baslik: "Kayan noktalı veride kutulama",
    aciklama: "0 ile 10 arasında değer alan 400 örnek. Üstte örneklerin sayı doğrusundaki yerleri ve kutu sınırları, altta her kutuya düşen örnek sayısı. İşaretli değerin düştüğü kutu vurgulanır; kutu sayısı arttıkça kutular daralır ve boş kalanlar çoğalır.",
    en: 660, boy: 330, icerik: kutulamaCiz(20, 3.14, false).s, etkilesim: "kutulama",
  },
  {
    kod: "G-H1-07",
    baslik: "Normal (Gauss) dağılım",
    aciklama: "Ortalaması ve standart sapması ayarlanabilen çan eğrisi; ortalamadan k standart sapma uzaklığa kadar olan alan boyalı.",
    en: 640, boy: 270, icerik: gaussCiz(0, 1, 1).s, etkilesim: "gauss",
  },
  {
    kod: "G-H1-08",
    baslik: "Düzgün rastgele sayıları toplayarak Gauss gürültü",
    aciklama: "0 ile 1 arasında düzgün dağılmış k rastgele sayının toplamının histogramı. k = 1'de düz, k = 2'de üçgen, k = 12'de neredeyse Gauss biçimlidir.",
    en: 640, boy: 285, icerik: rndToplamCiz(2).s, etkilesim: "rndtoplam",
  },
  {
    kod: "G-H1-09",
    baslik: "Kesinlik ve doğruluk",
    aciklama: "Solda 1000 metre uzaklıktaki bir hedefin ölçümlerinin dağılımı: ortalamanın gerçek değerden uzaklığı doğruluğu, dağılımın genişliği kesinliği gösterir. Sağda dört hedef tahtası kesinlik ve doğruluğun dört birleşimini gösterir.",
    en: 640, boy: 230, icerik: kesinlikDogruluk(),
  },
];
