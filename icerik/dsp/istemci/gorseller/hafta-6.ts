// Hafta 6 ders şekilleri: özfonksiyon ve frekans yanıtı, büyüklük/dB/faz,
// periyodiklik ve simetri, ideal filtreler, doğrusal faz ve grup gecikmesi,
// filtre bağlantıları, DTFT örnekleri, modülasyon, konvolüsyon teoremi ve
// ters sistem.

import { cizgi, yazi } from "./cizim";
import { aralik, dolgu, egri, eksen, kisa, stem } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

const PI = Math.PI;
type C = [number, number];
const bol = (a: C, b: C): C => {
  const p = b[0] * b[0] + b[1] * b[1];
  return [(a[0] * b[0] + a[1] * b[1]) / p, (a[1] * b[0] - a[0] * b[1]) / p];
};
const buyukluk = (a: C) => Math.hypot(a[0], a[1]);
const aci = (a: C) => Math.atan2(a[1], a[0]);

// Sonlu bir dizinin DTFT'si; x[0] n0 konumundadır
export function dtft(x: number[], n0: number, w: number): C {
  let r = 0;
  let i = 0;
  x.forEach((v, k) => {
    r += v * Math.cos(w * (n0 + k));
    i -= v * Math.sin(w * (n0 + k));
  });
  return [r, i];
}

// ω ekseni: −π..π (ya da daha geniş) için π cinsinden etiket
const piEtiket = (v: number) => {
  const k = Math.round((v / PI) * 2) / 2;
  if (k === 0) return "0";
  const s = k === 1 ? "π" : k === -1 ? "−π" : Number.isInteger(k) ? `${k}π` : `${k}π`;
  return s.replace("-", "−").replace(".", ",");
};
const piTik = (a: number, b: number, adim = PI / 2) => aralik(a, adim, b);

// Örnek sistemler: H(ω) kapalı formda
export interface Sistem {
  ad: string;
  H: (w: number) => C;
  h?: number[];
}
const ortalama = (M: number): Sistem => ({ ad: `${M} noktalı ortalama`, h: new Array<number>(M).fill(1 / M), H: (w) => dtft(new Array<number>(M).fill(1 / M), 0, w) });
const ustelSistem = (a: number): Sistem => ({ ad: `aⁿu(n), a = ${kisa(a)}`, H: (w) => bol([1, 0], [1 - a * Math.cos(w), a * Math.sin(w)]) });
const tamGeciren = (a: number): Sistem => ({
  ad: `tam geçiren, α = ${kisa(a)}`,
  H: (w) => bol([Math.cos(w) - a, -Math.sin(w)], [1 - a * Math.cos(w), a * Math.sin(w)]),
});
export const SISTEMLER_6: Sistem[] = [
  ortalama(2),
  ortalama(5),
  { ad: "birinci fark: δ(n) − δ(n − 1)", h: [1, -1], H: (w) => dtft([1, -1], 0, w) },
  ustelSistem(0.8),
];
export const FAZ_SISTEMLERI: Sistem[] = [ortalama(5), ustelSistem(0.8), tamGeciren(0.5)];

const grupGecikmesi = (s: Sistem, w: number) => {
  const d = 1e-4;
  const oran = bol(s.H(w + d), s.H(w - d));
  // Büyüklüğün sıfırlarında faz π sıçrar; bu sıçrama gecikme sayılmaz
  let a = aci(oran);
  if (a > PI / 2) a -= PI;
  if (a < -PI / 2) a += PI;
  return -a / (2 * d);
};

// ---- G-H6-01: Karmaşık üstel ve kosinüs LTI sistemden geçer ----
export function ozfonksiyonCiz(w0: number) {
  const s = ortalama(3);
  const H = s.H(w0);
  const A = buyukluk(H);
  const f = aci(H);
  const ns = aralik(0, 1, 24);
  const e = eksen({ x: 50, y: 22, w: 360, h: 170, x0: -0.7, x1: 24.7, y0: -1.3, y1: 1.3, xTik: aralik(0, 4, 24), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "n" });
  let g = e.s + stem(e, ns, ns.map((n) => Math.cos(w0 * n)), "a", 2.6);
  g += stem(e, ns.map((n) => n + 0.3), ns.map((n) => A * Math.cos(w0 * n + f)), "b", 2.6);
  g += `<circle cx="70" cy="216" r="3" class="g-stem-uc g-stem-a"/>` + yazi(80, 216, "x(n) = cos(ω₀n)", "g-mini", "start");
  g += `<circle cx="220" cy="216" r="3" class="g-stem-uc g-stem-b"/>` + yazi(230, 216, "y(n) = |H|·cos(ω₀n + ∠H)", "g-mini", "start");
  const e2 = eksen({ x: 470, y: 22, w: 170, h: 150, x0: 0, x1: PI, y0: 0, y1: 1.15, xTik: [0, PI / 2, PI], xEtiket: piEtiket, yTik: [0.5, 1], izgara: true, xAd: "ω", yAd: "|H(e^jω)|" });
  const ws = aralik(0, PI / 200, PI);
  g += e2.s + egri(e2, ws, ws.map((w) => buyukluk(s.H(w))), "g-seri-c");
  g += `<circle cx="${e2.X(w0)}" cy="${e2.Y(A)}" r="5" class="g-stem-uc g-stem-b"/>`;
  g += yazi(555, 206, "h(n): 3 noktalı ortalama", "g-mini g-soluk");
  return { s: g, A, faz: f };
}

// ---- G-H6-02: Büyüklük, dB ve faz ----
export function yanitCiz(i: number) {
  const s = SISTEMLER_6[i]!;
  const ws = aralik(-PI, PI / 200, PI);
  const Hs = ws.map((w) => s.H(w));
  const mag = Hs.map(buyukluk);
  const ustSinir = Math.max(1.2, ...mag) * 1.08;
  const ortak = { w: 170, h: 140, x0: -PI, x1: PI, xTik: piTik(-PI, PI, PI), xEtiket: piEtiket, sifirdan: true, izgara: true, xAd: "ω" };
  const e1 = eksen({ ...ortak, x: 40, y: 30, y0: 0, y1: ustSinir, yTik: [0.5, 1, 2, 3, 4, 5].filter((t) => t < ustSinir) });
  const db = mag.map((m) => Math.max(-40, 20 * Math.log10(Math.max(m, 1e-6))));
  const dbUst = Math.max(6, ...db) + 4;
  const e2 = eksen({ ...ortak, x: 275, y: 30, y0: -42, y1: dbUst, yTik: [-40, -20, 0, 6, 20].filter((t) => t < dbUst) });
  const e3 = eksen({ ...ortak, x: 500, y: 30, y0: -PI * 1.1, y1: PI * 1.1, yTik: [-PI, -PI / 2, PI / 2, PI], yEtiket: piEtiket });
  let g = yazi(130, 12, "|H(e^jω)|", "g-mini g-kalin") + yazi(350, 12, "20 log₁₀|H| (dB)", "g-mini g-kalin") + yazi(570, 12, "∠H(e^jω)", "g-mini g-kalin");
  g += e1.s + egri(e1, ws, mag, "g-seri-a");
  g += e2.s + egri(e2, ws, db, "g-seri-c");
  // Faz: sıçramalarda çizgi kopsun
  let parca: [number[], number[]] = [[], []];
  let onceki: number | null = null;
  g += e3.s;
  ws.forEach((w, k) => {
    const p = aci(Hs[k]!);
    if (onceki !== null && Math.abs(p - onceki) > PI) {
      g += egri(e3, parca[0], parca[1], "g-seri-b");
      parca = [[], []];
    }
    parca[0].push(w);
    parca[1].push(p);
    onceki = p;
  });
  g += egri(e3, parca[0], parca[1], "g-seri-b");
  const H0 = buyukluk(s.H(0));
  const Hpi = buyukluk(s.H(PI));
  return { s: g, H0, Hpi, ad: s.ad };
}

// ---- G-H6-03: Periyodiklik ve simetri ----
function periyodiklik(): string {
  const s = ustelSistem(0.6);
  const ws = aralik(-3 * PI, PI / 100, 3 * PI);
  const o = { x: 60, w: 560, h: 90, x0: -3 * PI, x1: 3 * PI, xTik: piTik(-3 * PI, 3 * PI, PI), xEtiket: piEtiket, sifirdan: true, izgara: true, xAd: "ω" };
  const e1 = eksen({ ...o, y: 24, y0: 0, y1: 2.8, yTik: [1, 2] });
  const e2 = eksen({ ...o, y: 150, y0: -0.8, y1: 0.8, yTik: [-0.5, 0.5] });
  let g = dolgu(e1, [-PI, PI], [2.8, 2.8], "g-dolgu-a") + dolgu(e2, [-PI, PI], [0.8, 0.8], "g-dolgu-a", -0.8);
  g += e1.s + egri(e1, ws, ws.map((w) => buyukluk(s.H(w))), "g-seri-a") + yazi(70, 18, "|H(e^jω)|: çift", "g-mini g-kalin", "start");
  g += e2.s + egri(e2, ws, ws.map((w) => aci(s.H(w))), "g-seri-b") + yazi(70, 142, "∠H(e^jω): tek", "g-mini g-kalin", "start");
  g += yazi(o.x + o.w / 2, 260, "gölgeli bölge −π..π: bir periyot yeterlidir; h(n) = (0,6)ⁿu(n)", "g-mini g-soluk");
  return g;
}

// ---- G-H6-04: İdeal frekans seçici filtreler ----
function idealFiltreler(): string {
  const w1 = 0.35 * PI;
  const w2 = 0.7 * PI;
  const turler: [string, (w: number) => number][] = [
    ["alçak geçiren", (w) => (Math.abs(w) <= w1 ? 1 : 0)],
    ["yüksek geçiren", (w) => (Math.abs(w) >= w2 ? 1 : 0)],
    ["bant geçiren", (w) => (Math.abs(w) >= w1 && Math.abs(w) <= w2 ? 1 : 0)],
    ["bant durduran", (w) => (Math.abs(w) >= w1 && Math.abs(w) <= w2 ? 0 : 1)],
  ];
  let g = "";
  turler.forEach(([ad, f], i) => {
    const x = 30 + (i % 2) * 320;
    const y = 30 + Math.floor(i / 2) * 120;
    const e = eksen({ x, y, w: 270, h: 70, x0: -PI, x1: PI, y0: 0, y1: 1.3, xTik: [-PI, -w2, -w1, w1, w2, PI], xEtiket: (v) => (Math.abs(v) === PI ? piEtiket(v) : v > 0 ? (v === w1 ? "ω₁" : "ω₂") : v === -w1 ? "−ω₁" : "−ω₂"), yTik: [1], sifirdan: true, xAd: "ω" });
    const ws = aralik(-PI, PI / 400, PI);
    g += e.s + dolgu(e, ws, ws.map(f), "g-dolgu-a") + egri(e, ws, ws.map(f), "g-seri-a") + yazi(x + 135, y - 14, ad, "g-kucuk g-kalin");
  });
  return g;
}

// ---- G-H6-05: Doğrusal faz, grup gecikmesi ve tam geçiren ----
export function fazCiz(i: number) {
  const s = FAZ_SISTEMLERI[i]!;
  const ws = aralik(0, PI / 200, PI);
  const o = { w: 180, h: 140, x0: 0, x1: PI, xTik: [0, PI / 2, PI], xEtiket: piEtiket, sifirdan: true, izgara: true, xAd: "ω", y: 30 };
  const mag = ws.map((w) => buyukluk(s.H(w)));
  const e1 = eksen({ ...o, x: 40, y0: 0, y1: Math.max(1.2, ...mag) * 1.08, yTik: [0.5, 1, 2, 3, 4, 5].filter((t) => t <= Math.max(1.2, ...mag)) });
  // Paketi açılmış faz
  const faz: number[] = [];
  let ek = 0;
  let onceki = aci(s.H(0));
  for (const w of ws) {
    let p = aci(s.H(w));
    // Büyüklüğün sıfırlarında π'lik sıçramalar olur; onları da açarız
    while (p + ek - (onceki + 0) > PI / 2 + 1e-9) ek -= PI;
    while (p + ek - onceki < -PI / 2 - 1e-9) ek += PI;
    p += ek;
    faz.push(p);
    onceki = p;
  }
  const fMin = Math.min(...faz, -0.5);
  const fMax = Math.max(...faz, 0.5);
  const e2 = eksen({ ...o, x: 260, y0: fMin * 1.1, y1: fMax * 1.1, yTik: aralik(Math.ceil(fMin / PI) * PI, PI, fMax).filter((t) => t !== 0), yEtiket: piEtiket });
  const gd = ws.map((w) => grupGecikmesi(s, w));
  const gMax = Math.max(4, ...gd.filter(Number.isFinite)) * 1.08;
  const e3 = eksen({ ...o, x: 480, y0: Math.min(0, ...gd) * 1.1, y1: gMax, yTik: aralik(1, 1, gMax).filter((t) => t <= 10 && (gMax < 6 || t % 2 === 0)) });
  let g = yazi(130, 12, "|H(e^jω)|", "g-mini g-kalin") + yazi(350, 12, "faz (paketi açılmış)", "g-mini g-kalin") + yazi(570, 12, "grup gecikmesi τ(ω)", "g-mini g-kalin");
  g += e1.s + egri(e1, ws, mag, "g-seri-a") + e2.s + egri(e2, ws, faz, "g-seri-b") + e3.s + egri(e3, ws, gd, "g-seri-c");
  const gdMin = Math.min(...gd);
  const gdMaks = Math.max(...gd);
  return { s: g, ad: s.ad, sabitMi: gdMaks - gdMin < 1e-3, gd0: gd[0]!, magSabit: Math.max(...mag) - Math.min(...mag) < 1e-6 };
}

// ---- G-H6-06: Bağlantılarla bant geçiren ve bant durduran ----
export function baglantiCiz(w1: number, w2: number) {
  const LP = (c: number) => (w: number) => (Math.abs(w) <= c ? 1 : 0);
  const HP = (c: number) => (w: number) => (Math.abs(w) >= c ? 1 : 0);
  const ws = aralik(0, PI / 400, PI);
  const panel = (x: number, y: number, f: (w: number) => number, ad: string, renk = "g-seri-a") => {
    const e = eksen({ x, y, w: 150, h: 50, x0: 0, x1: PI, y0: 0, y1: 1.4, xTik: [0, PI], xEtiket: piEtiket, yTik: [1], sifirdan: true, xAd: "ω" });
    return e.s + dolgu(e, ws, ws.map(f), "g-dolgu-a") + egri(e, ws, ws.map(f), renk) + yazi(x + 75, y - 12, ad, "g-mini g-kalin");
  };
  let g = yazi(10, 20, "kaskat", "g-kucuk g-kalin", "start") + yazi(10, 140, "paralel", "g-kucuk g-kalin", "start");
  g += panel(70, 40, LP(w2), "alçak geçiren, kesim ω₂") + yazi(240, 66, "×", "g-kalin") + panel(260, 40, HP(w1), "yüksek geçiren, kesim ω₁") + yazi(430, 66, "=", "g-kalin");
  g += panel(450, 40, (w) => LP(w2)(w) * HP(w1)(w), w1 < w2 ? "bant geçiren" : "boş (hiçbir şey geçmez)", "g-seri-c");
  g += panel(70, 160, LP(w1), "alçak geçiren, kesim ω₁") + yazi(240, 186, "+", "g-kalin") + panel(260, 160, HP(w2), "yüksek geçiren, kesim ω₂") + yazi(430, 186, "=", "g-kalin");
  g += panel(450, 160, (w) => Math.min(2, LP(w1)(w) + HP(w2)(w)), w1 < w2 ? "bant durduran" : "çakışan bölgede 2", "g-seri-c");
  return g;
}

// ---- G-H6-07: Dikdörtgen dizinin DTFT'si ----
export function dikdortgenDtftCiz(N: number) {
  const x = new Array<number>(N).fill(1);
  const ns = aralik(-2, 1, 18);
  const e1 = eksen({ x: 50, y: 24, w: 250, h: 120, x0: -2.7, x1: 18.7, y0: 0, y1: 1.3, xTik: aralik(0, 5, 15), yTik: [1], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)" });
  let g = e1.s + stem(e1, ns, ns.map((n) => (n >= 0 && n < N ? 1 : 0)), "a", 2.6);
  const ws = aralik(-PI, PI / 300, PI);
  const e2 = eksen({ x: 360, y: 24, w: 270, h: 120, x0: -PI, x1: PI, y0: 0, y1: 17, xTik: piTik(-PI, PI, PI / 2), xEtiket: piEtiket, yTik: [5, 10, 15], sifirdan: true, izgara: true, xAd: "ω", yAd: "|X(e^jω)|" });
  g += e2.s + egri(e2, ws, ws.map((w) => buyukluk(dtft(x, 0, w))), "g-seri-c");
  const sifir = (2 * PI) / N;
  if (N > 1) g += cizgi([[e2.X(sifir), e2.Y(0) - 6], [e2.X(sifir), e2.Y(0) + 6]], "g-seri-b") + cizgi([[e2.X(-sifir), e2.Y(0) - 6], [e2.X(-sifir), e2.Y(0) + 6]], "g-seri-b");
  return { s: g, sifir };
}

// ---- G-H6-08: Modülasyon: kosinüsle çarpma spektrumu kaydırır ----
export function modulasyonCiz(w0: number) {
  const N = 12;
  const ns = aralik(0, 1, N - 1);
  const x = ns.map((n) => Math.cos(w0 * n));
  const e1 = eksen({ x: 50, y: 24, w: 250, h: 120, x0: -0.7, x1: N - 0.3, y0: -1.3, y1: 1.3, xTik: aralik(0, 2, N - 1), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)·cos(ω₀n)" });
  let g = e1.s + stem(e1, ns, x, "a", 2.6);
  const ws = aralik(-PI, PI / 300, PI);
  const e2 = eksen({ x: 360, y: 24, w: 270, h: 120, x0: -PI, x1: PI, y0: 0, y1: 13, xTik: piTik(-PI, PI, PI / 2), xEtiket: piEtiket, yTik: [6, 12], sifirdan: true, izgara: true, xAd: "ω" });
  g += e2.s + egri(e2, ws, ws.map((w) => buyukluk(dtft(new Array<number>(N).fill(1), 0, w))), "g-kesik");
  g += egri(e2, ws, ws.map((w) => buyukluk(dtft(x, 0, w))), "g-seri-c");
  g += cizgi([[e2.X(w0), e2.Y(0)], [e2.X(w0), e2.Y(13)]], "g-izgara") + cizgi([[e2.X(-w0), e2.Y(0)], [e2.X(-w0), e2.Y(13)]], "g-izgara");
  g += yazi(495, 170, "kesikli: kosinüssüz 12 örneklik dikdörtgen; düz: modüle edilmiş", "g-mini g-soluk");
  return g;
}

// ---- G-H6-09: Konvolüsyon teoremi ----
export function konvTeoremCiz(i: number) {
  const N = 48;
  const ns = aralik(0, 1, N - 1);
  const x = ns.map((n) => Math.cos(0.15 * PI * n) + Math.cos(0.75 * PI * n));
  const h = i === 0 ? new Array<number>(5).fill(0.2) : [0.5, -0.5];
  const ws = aralik(0, PI / 300, PI);
  const X = ws.map((w) => buyukluk(dtft(x, 0, w)));
  const H = ws.map((w) => buyukluk(dtft(h, 0, w)));
  const Y = X.map((v, k) => v * H[k]!);
  const o = { w: 180, h: 110, x0: 0, x1: PI, xTik: [0, PI / 2, PI], xEtiket: piEtiket, sifirdan: true, izgara: true, xAd: "ω", y: 30 };
  const e1 = eksen({ ...o, x: 40, y0: 0, y1: 28, yTik: [10, 20] });
  const e2 = eksen({ ...o, x: 260, y0: 0, y1: 1.15, yTik: [0.5, 1] });
  const e3 = eksen({ ...o, x: 480, y0: 0, y1: 28, yTik: [10, 20] });
  let g = yazi(130, 12, "|X(e^jω)|", "g-mini g-kalin") + yazi(350, 12, "|H(e^jω)|", "g-mini g-kalin") + yazi(570, 12, "|Y| = |X|·|H|", "g-mini g-kalin");
  g += e1.s + egri(e1, ws, X, "g-seri-a") + e2.s + egri(e2, ws, H, "g-seri-b") + e3.s + egri(e3, ws, Y, "g-seri-c");
  return g;
}

// ---- G-H6-10: Ters sistem ----
function tersSistem(): string {
  const ns = aralik(0, 1, 8);
  const o = { w: 160, h: 80, sifirdan: true, izgara: true, y: 34 };
  const e1 = eksen({ ...o, x: 40, x0: -0.7, x1: 8.7, y0: -0.7, y1: 1.2, xTik: aralik(0, 2, 8), yTik: [-0.5, 1], xAd: "n" });
  const e2 = eksen({ ...o, x: 250, x0: -0.7, x1: 8.7, y0: -0.7, y1: 1.2, xTik: aralik(0, 2, 8), yTik: [-0.5, 1], xAd: "n" });
  let g = yazi(120, 14, "h(n) = δ(n) − 0,5δ(n − 1)", "g-mini g-kalin") + yazi(330, 14, "g(n) = (0,5)ⁿu(n)", "g-mini g-kalin");
  g += e1.s + stem(e1, ns, ns.map((n) => (n === 0 ? 1 : n === 1 ? -0.5 : 0)), "a", 2.6);
  g += e2.s + stem(e2, ns, ns.map((n) => 0.5 ** n), "c", 2.6);
  const ws = aralik(0, PI / 200, PI);
  const H = (w: number) => buyukluk([1 - 0.5 * Math.cos(w), 0.5 * Math.sin(w)]);
  const e3 = eksen({ ...o, x: 470, x0: 0, x1: PI, y0: 0, y1: 2.2, xTik: [0, PI / 2, PI], xEtiket: piEtiket, yTik: [1, 2], xAd: "ω" });
  g += yazi(550, 14, "|H|, |G| = 1/|H| ve çarpımı", "g-mini g-kalin");
  g += e3.s + egri(e3, ws, ws.map(H), "g-seri-a") + egri(e3, ws, ws.map((w) => 1 / H(w)), "g-seri-c") + egri(e3, ws, ws.map(() => 1), "g-kesik");
  g += yazi(330, 160, "h(n) * g(n) = δ(n)  ⇔  H(e^jω)·G(e^jω) = 1", "g-kod g-kucuk g-kalin");
  return g;
}

export const HAFTA_6_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H6-01",
    baslik: "Kosinüs girişi ve LTI sistemin çıkışı",
    aciklama: "Solda ω₀ frekanslı kosinüs girişi ve 3 noktalı ortalamanın çıkışı: çıkış yine aynı frekansta bir kosinüstür, yalnızca genliği |H| ile çarpılmış ve fazı ∠H kadar kaymıştır. Sağda sistemin büyüklük yanıtı ve ω₀'daki değeri.",
    en: 660, boy: 228, icerik: ozfonksiyonCiz(PI / 4).s, etkilesim: "ozfonksiyon",
  },
  {
    kod: "G-H6-02",
    baslik: "Frekans yanıtının büyüklüğü, desibel ölçeği ve fazı",
    aciklama: "Seçilen sistemin −π ile π arasında büyüklük yanıtı, 20 log₁₀ ile desibel olarak büyüklük ve faz yanıtı.",
    en: 680, boy: 200, icerik: yanitCiz(1).s, etkilesim: "frekansyaniti",
  },
  {
    kod: "G-H6-03",
    baslik: "Frekans yanıtının periyodikliği ve simetrisi",
    aciklama: "Gerçel bir dürtü yanıtının frekans yanıtı −3π ile 3π arasında. Yanıt 2π ile periyodiktir; büyüklük ω = 0'a göre çift, faz tektir.",
    en: 660, boy: 270, icerik: periyodiklik(),
  },
  {
    kod: "G-H6-04",
    baslik: "İdeal frekans seçici filtreler",
    aciklama: "Alçak geçiren, yüksek geçiren, bant geçiren ve bant durduran ideal filtrelerin büyüklük yanıtları. Yanıtın 1 olduğu aralıklar geçiş bandı, 0 olduğu aralıklar durdurma bandıdır; sınırlar kesim frekanslarıdır.",
    en: 640, boy: 250, icerik: idealFiltreler(),
  },
  {
    kod: "G-H6-05",
    baslik: "Doğrusal faz, grup gecikmesi ve tam geçiren filtre",
    aciklama: "Seçilen sistemin büyüklüğü, paketi açılmış fazı ve grup gecikmesi. Simetrik dürtü yanıtlı ortalamanın fazı doğrudur ve grup gecikmesi sabittir; tam geçiren filtrenin büyüklüğü her frekansta 1'dir.",
    en: 680, boy: 200, icerik: fazCiz(0).s, etkilesim: "dogrusalfaz",
  },
  {
    kod: "G-H6-06",
    baslik: "Filtre bağlantıları: bant geçiren ve bant durduran",
    aciklama: "Üstte alçak geçiren ile yüksek geçirenin kaskat bağlantısı: frekans yanıtları çarpılır ve bant geçiren elde edilir. Altta paralel bağlantı: yanıtlar toplanır ve bant durduran elde edilir.",
    en: 640, boy: 236, icerik: baglantiCiz(0.3 * PI, 0.7 * PI), etkilesim: "baglanti",
  },
  {
    kod: "G-H6-07",
    baslik: "Dikdörtgen dizinin DTFT'si",
    aciklama: "Solda N örnekli dikdörtgen dizi, sağda DTFT'sinin büyüklüğü. Tepe değeri N'dir, ilk sıfır ω = 2π/N'de: dizi uzadıkça ana lob daralır.",
    en: 660, boy: 172, icerik: dikdortgenDtftCiz(8).s, etkilesim: "dikdortgendtft",
  },
  {
    kod: "G-H6-08",
    baslik: "Modülasyon özelliği",
    aciklama: "Dikdörtgen bir dizi ω₀ frekanslı kosinüsle çarpılıyor. Spektrum ±ω₀'a kayar ve her kopyanın yüksekliği yarıya iner.",
    en: 660, boy: 182, icerik: modulasyonCiz(PI / 2), etkilesim: "modulasyon",
  },
  {
    kod: "G-H6-09",
    baslik: "Konvolüsyon teoremi: zamanda konvolüsyon, frekansta çarpım",
    aciklama: "Biri alçak, biri yüksek frekanslı iki kosinüsün toplamı olan giriş, seçilen filtre ve çıkış. Çıkışın spektrumu giriş spektrumu ile frekans yanıtının çarpımıdır.",
    en: 680, boy: 172, icerik: konvTeoremCiz(0), etkilesim: "konvteorem",
  },
  {
    kod: "G-H6-10",
    baslik: "Ters sistem",
    aciklama: "Birinci farka benzeyen bir sistem ve onun ters sistemi olan üstel dizi. Frekans yanıtlarının çarpımı her frekansta 1'dir.",
    en: 660, boy: 176, icerik: tersSistem(),
  },
];
