// Hafta 7 ders şekilleri: periyodik uzatma, DFT'nin DTFT örnekleri olması,
// DFT'nin taban üstelleri, eşlenik simetri, dairesel kaydırma, dairesel
// konvolüsyon, dairesel ile doğrusal konvolüsyonun ilişkisi, DFT ile
// konvolüsyon ve blok konvolüsyon (örtüşme-ekleme, örtüşme-kaydetme).

import { cizgi, kutu, ok, yazi } from "./cizim";
import { aralik, egri, eksen, kisa, stem } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

const PI = Math.PI;
type C = [number, number];
const buyukluk = (a: C) => Math.hypot(a[0], a[1]);
const mod = (a: number, N: number) => ((a % N) + N) % N;

// x'in N noktalı DFT'si (x N'den kısaysa sıfırla doldurulur)
export function dft(x: number[], N: number): C[] {
  const X: C[] = [];
  for (let k = 0; k < N; k++) {
    let r = 0;
    let i = 0;
    x.forEach((v, n) => {
      if (n >= N) return;
      r += v * Math.cos((2 * PI * k * n) / N);
      i -= v * Math.sin((2 * PI * k * n) / N);
    });
    X.push([r, i]);
  }
  return X;
}
const dtft = (x: number[], w: number): C => {
  let r = 0;
  let i = 0;
  x.forEach((v, n) => {
    r += v * Math.cos(w * n);
    i -= v * Math.sin(w * n);
  });
  return [r, i];
};

export const dogrusalKonv = (x: number[], h: number[]) => {
  const y = new Array<number>(x.length + h.length - 1).fill(0);
  x.forEach((a, i) => h.forEach((b, j) => (y[i + j]! += a * b)));
  return y;
};
export const daireselKonv = (x: number[], h: number[], N: number) => {
  const y = new Array<number>(N).fill(0);
  dogrusalKonv(x, h).forEach((v, n) => (y[n % N]! += v));
  return y;
};

const piEtiket = (v: number) => {
  const k = Math.round((v / PI) * 2) / 2;
  if (k === 0) return "0";
  if (k === 1) return "π";
  if (k === 2) return "2π";
  return `${k}π`.replace(".", ",");
};

// ---- G-H7-01: Periyodik uzatma ----
function periyodikUzatma(): string {
  const x = [1, 2, 1.5, 0.5];
  const N = 4;
  const e1 = eksen({ x: 40, y: 30, w: 150, h: 100, x0: -1.7, x1: 5.7, y0: 0, y1: 2.4, xTik: aralik(0, 1, 4), yTik: [1, 2], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)" });
  const ns1 = aralik(-1, 1, 5);
  let g = e1.s + stem(e1, ns1, ns1.map((n) => (n >= 0 && n < N ? x[n]! : 0)), "a", 3);
  g += yazi(115, 166, "N = 4 örneklik sonlu dizi", "g-mini g-soluk");
  g += ok([[214, 80], [262, 80]], "g-cizgi") + yazi(238, 68, "periyodik", "g-mini") + yazi(238, 98, "uzatma", "g-mini");
  const e2 = eksen({ x: 290, y: 30, w: 350, h: 100, x0: -8.7, x1: 11.7, y0: 0, y1: 2.4, xTik: aralik(-8, 4, 8), yTik: [1, 2], sifirdan: true, izgara: true, xAd: "n", yAd: "x̃(n) = x((n))₄" });
  g += `<rect x="${e2.X(-0.5)}" y="30" width="${e2.X(3.5) - e2.X(-0.5)}" height="100" class="g-bolge-a"/>`;
  const ns2 = aralik(-8, 1, 11);
  g += e2.s + stem(e2, ns2, ns2.map((n) => x[mod(n, N)]!), "c", 2.6);
  g += yazi(465, 166, "gölgeli bölge: asıl dizi; her 4 örnekte bir aynen tekrar eder", "g-mini g-soluk");
  return g;
}

// ---- G-H7-02: DFT, DTFT'nin örnekleridir; sıfır doldurma ----
const ORNEK_X = [1, 1, 1, 0.5, 0.5, 0.5];
export function dftOrnekCiz(N: number) {
  const x = ORNEK_X;
  const ws = aralik(0, PI / 200, 2 * PI);
  const e1 = eksen({ x: 40, y: 30, w: 170, h: 120, x0: -0.7, x1: 31.7, y0: 0, y1: 1.3, xTik: aralik(0, 8, 32), yTik: [0.5, 1], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)" });
  const ns = aralik(0, 1, N - 1);
  let g = e1.s + stem(e1, ns, ns.map((n) => x[n] ?? 0), "a", N > 20 ? 1.8 : 2.4);
  g += yazi(125, 186, `${x.length} örnek + ${N - x.length} sıfır`, "g-mini g-soluk");
  const e2 = eksen({ x: 270, y: 30, w: 370, h: 120, x0: 0, x1: 2 * PI, y0: 0, y1: 5, xTik: aralik(0, PI / 2, 2 * PI), xEtiket: piEtiket, yTik: [2, 4], sifirdan: true, izgara: true, xAd: "ω", yAd: "|X(e^jω)| ve |X(k)|" });
  g += e2.s + egri(e2, ws, ws.map((w) => buyukluk(dtft(x, w))), "g-kesik");
  const X = dft(x, N);
  const wk = ns.map((k) => (2 * PI * k) / N);
  g += stem(e2, wk, X.map(buyukluk), "c", N > 20 ? 2 : 3);
  g += yazi(455, 186, `kesikli: DTFT; noktalar: ${N} noktalı DFT, aralık 2π/${N}`, "g-mini g-soluk");
  return { s: g, adim: (2 * PI) / N };
}

// ---- G-H7-03: DFT'nin taban üstelleri ----
export function tabanCiz(N: number, k: number) {
  const cx = 130;
  const cy = 120;
  const r = 82;
  let g = `<circle cx="${cx}" cy="${cy}" r="${r}" class="g-cizgi g-eksen"/>`;
  g += ok([[cx - r - 14, cy], [cx + r + 16, cy]], "g-cizgi g-eksen") + ok([[cx, cy + r + 14], [cx, cy - r - 16]], "g-cizgi g-eksen");
  // Aynı noktaya düşen n'leri birlikte yaz
  const etiketler = new Map<number, number[]>();
  let tr = 0;
  let ti = 0;
  for (let n = 0; n < N; n++) {
    const a = (2 * PI * k * n) / N;
    tr += Math.cos(a);
    ti += Math.sin(a);
    const yer = mod(k * n, N);
    etiketler.set(yer, [...(etiketler.get(yer) ?? []), n]);
  }
  for (const [yer, nler] of etiketler) {
    const a = (2 * PI * yer) / N;
    const px = cx + r * Math.cos(a);
    const py = cy - r * Math.sin(a);
    g += cizgi([[cx, cy], [px, py]], "g-izgara");
    g += `<circle cx="${px}" cy="${py}" r="5" class="g-stem-uc g-stem-a"/>`;
    const lx = cx + (r + 18) * Math.cos(a);
    const ly = cy - (r + 18) * Math.sin(a) + 4;
    const yaz = nler.length > 3 ? `${nler.slice(0, 2).join(",")}…` : nler.join(",");
    g += yazi(lx, ly, `n=${yaz}`, "g-mini");
  }
  const sx = cx + (r * tr) / N;
  const sy = cy - (r * ti) / N;
  g += `<circle cx="${sx}" cy="${sy}" r="5" class="g-stem-uc g-stem-b"/>`;
  g += yazi(cx, cy + r + 34, "kırmızı nokta: noktaların ortalaması", "g-mini g-soluk");
  const ns = aralik(0, 1, N - 1);
  const o = { x: 330, w: 310, h: 70, x0: -0.7, x1: N - 0.3, y0: -1.3, y1: 1.3, xTik: aralik(0, N > 12 ? 4 : 2, N - 1), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "n" };
  const e1 = eksen({ ...o, y: 30 });
  const e2 = eksen({ ...o, y: 140 });
  g += yazi(485, 16, `cos(2π·${k}·n/${N})`, "g-mini g-kalin") + e1.s + stem(e1, ns, ns.map((n) => Math.cos((2 * PI * k * n) / N)), "a", 2.6);
  g += yazi(485, 126, `sin(2π·${k}·n/${N})`, "g-mini g-kalin") + e2.s + stem(e2, ns, ns.map((n) => Math.sin((2 * PI * k * n) / N)), "c", 2.6);
  const toplam: C = [Math.abs(tr) < 1e-9 ? 0 : tr, Math.abs(ti) < 1e-9 ? 0 : ti];
  return { s: g, toplam };
}

// ---- G-H7-04: Eşlenik simetri ----
export const SIMETRI_DIZILERI: { ad: string; re: number[]; im: number[] }[] = [
  { ad: "gerçel dizi", re: [2, 1, -1, 0.5, 1, 0, -0.5, 1], im: [0, 0, 0, 0, 0, 0, 0, 0] },
  { ad: "gerçel ve çift dizi", re: [2, 1, 0.5, 0, -1, 0, 0.5, 1], im: [0, 0, 0, 0, 0, 0, 0, 0] },
  { ad: "saf sanal dizi", re: [0, 0, 0, 0, 0, 0, 0, 0], im: [2, 1, -1, 0.5, 1, 0, -0.5, 1] },
];
export function simetriCiz(i: number) {
  const d = SIMETRI_DIZILERI[i]!;
  const N = 8;
  const X: C[] = [];
  for (let k = 0; k < N; k++) {
    let r = 0;
    let im = 0;
    for (let n = 0; n < N; n++) {
      const c = Math.cos((2 * PI * k * n) / N);
      const s = -Math.sin((2 * PI * k * n) / N);
      r += d.re[n]! * c - d.im[n]! * s;
      im += d.re[n]! * s + d.im[n]! * c;
    }
    X.push([Math.abs(r) < 1e-9 ? 0 : r, Math.abs(im) < 1e-9 ? 0 : im]);
  }
  const ks = aralik(0, 1, N - 1);
  const o = { w: 280, h: 120, x0: -0.7, x1: N - 0.3, xTik: ks, sifirdan: true, izgara: true, xAd: "k", y: 34 };
  const e1 = eksen({ ...o, x: 40, y0: -6, y1: 6, yTik: [-4, 4] });
  const e2 = eksen({ ...o, x: 360, y0: -6, y1: 6, yTik: [-4, 4] });
  let g = yazi(180, 16, "Re X(k)", "g-mini g-kalin") + yazi(500, 16, "Im X(k)", "g-mini g-kalin");
  for (const e of [e1, e2]) g += cizgi([[e.X(N / 2), 30], [e.X(N / 2), 160]], "g-kesik");
  g += e1.s + stem(e1, ks, X.map((v) => v[0]), "a", 3) + e2.s + stem(e2, ks, X.map((v) => v[1]), "c", 3);
  g += yazi(340, 196, "kesikli çizgi k = N/2: k ile N − k bu çizgiye göre aynalanır", "g-mini g-soluk");
  return { s: g, X, ad: d.ad };
}

// ---- G-H7-05: Dairesel kaydırma ----
const KAYDIRMA_X = [3, 1, 2, 0.5, 1.5, 2.5, 1, 0];
export function daireselKaydirCiz(n0: number) {
  const N = 8;
  const x = KAYDIRMA_X;
  const y = aralik(0, 1, N - 1).map((n) => x[mod(n - n0, N)]!);
  const cx = 120;
  const cy = 112;
  const r = 70;
  let g = `<circle cx="${cx}" cy="${cy}" r="${r}" class="g-cizgi g-eksen"/>`;
  // n = 0 en üstte; n saat yönünde artar. Kaydırma diziyi saat yönünde döndürür.
  for (let n = 0; n < N; n++) {
    const a = PI / 2 - (2 * PI * n) / N;
    const px = cx + r * Math.cos(a);
    const py = cy - r * Math.sin(a);
    const asil = mod(n - n0, N);
    g += `<circle cx="${px}" cy="${py}" r="${6 + 3 * y[n]!}" class="g-stem-uc ${asil === 0 ? "g-stem-b" : "g-stem-a"}"/>`;
    g += yazi(cx + (r + 26) * Math.cos(a), cy - (r + 26) * Math.sin(a) + 4, `${kisa(y[n]!, 1)}`, "g-mini g-kalin");
    g += yazi(cx + (r - 22) * Math.cos(a), cy - (r - 22) * Math.sin(a) + 4, `${n}`, "g-mini g-soluk");
  }
  g += yazi(cx, cy + 4, "n", "g-mini g-soluk") + yazi(cx, 222, "kırmızı: x(0)'ın yeni yeri", "g-mini g-soluk");
  const ns = aralik(0, 1, N - 1);
  const o = { x: 300, w: 330, h: 70, x0: -0.7, x1: N - 0.3, y0: 0, y1: 3.4, xTik: ns, yTik: [1, 3], sifirdan: true, izgara: true, xAd: "n" };
  const e1 = eksen({ ...o, y: 26 });
  const e2 = eksen({ ...o, y: 138 });
  g += yazi(465, 14, "x(n)", "g-mini g-kalin") + e1.s + stem(e1, ns, x, "a", 2.8);
  g += yazi(465, 126, `x((n − ${n0}))₈`, "g-mini g-kalin") + e2.s + stem(e2, ns, y, "c", 2.8);
  return { s: g, y };
}

// ---- G-H7-06: Dairesel konvolüsyon: iç içe iki çember ----
export const DK_X = [1, 2, 3, 4];
export const DK_H = [1, 1, 0, 0];
export function daireselKonvCiz(n: number) {
  const N = 4;
  const x = DK_X;
  const h = DK_H;
  const y = daireselKonv(x, h, N);
  const cx = 130;
  const cy = 120;
  const r1 = 88;
  const r2 = 56;
  let g = `<circle cx="${cx}" cy="${cy}" r="${r1}" class="g-cizgi g-eksen"/><circle cx="${cx}" cy="${cy}" r="${r2}" class="g-cizgi g-eksen"/>`;
  let terimler: string[] = [];
  for (let m = 0; m < N; m++) {
    // m = 0 sağda; m saat yönünün tersine artar
    const a = (2 * PI * m) / N;
    const hv = h[mod(n - m, N)]!;
    const ox = cx + r1 * Math.cos(a);
    const oy = cy - r1 * Math.sin(a);
    const ix = cx + r2 * Math.cos(a);
    const iy = cy - r2 * Math.sin(a);
    g += cizgi([[ix, iy], [ox, oy]], hv !== 0 ? "g-seri-c" : "g-izgara");
    g += `<circle cx="${ox}" cy="${oy}" r="13" class="g-kutu"/>` + yazi(ox, oy + 4, kisa(x[m]!), "g-mini g-kalin");
    g += `<circle cx="${ix}" cy="${iy}" r="11" class="g-kutu"/>` + yazi(ix, iy + 4, kisa(hv), "g-mini g-kalin");
    g += yazi(cx + (r1 + 24) * Math.cos(a), cy - (r1 + 24) * Math.sin(a) + 4, `m=${m}`, "g-mini g-soluk");
    if (hv !== 0) terimler.push(`${kisa(x[m]!)}·${kisa(hv)}`);
  }
  if (!terimler.length) terimler = ["0"];
  g += yazi(cx, cy - 4, "dış: x(m)", "g-mini g-soluk") + yazi(cx, cy + 10, `iç: h((${n} − m))₄`, "g-mini g-soluk");
  const ns = aralik(0, 1, N - 1);
  const e = eksen({ x: 330, y: 40, w: 290, h: 130, x0: -0.7, x1: N - 0.3, y0: 0, y1: 8, xTik: ns, yTik: [2, 4, 6, 8], sifirdan: true, izgara: true, xAd: "n", yAd: "y(n)" });
  g += e.s + stem(e, ns.filter((k) => k < n), y.filter((_, k) => k < n), "a", 3) + stem(e, [n], [y[n]!], "c", 4.5);
  g += yazi(475, 212, `y(${n}) = ${terimler.join(" + ")} = ${kisa(y[n]!)}`, "g-kucuk g-kalin");
  return { s: g, y: y[n]!, terimler };
}

// ---- G-H7-07: Dairesel ve doğrusal konvolüsyon ----
export const DD_X = [1, 2, 3, 2];
export const DD_H = [1, 1, 1];
export function daireselDogrusalCiz(N: number) {
  const yd = dogrusalKonv(DD_X, DD_H);
  const L = yd.length;
  const yc = daireselKonv(DD_X, DD_H, N);
  const ns = aralik(0, 1, 9);
  const o = { w: 280, h: 120, x0: -0.7, x1: 9.7, y0: 0, y1: 9, xTik: ns, yTik: [3, 6, 9], sifirdan: true, izgara: true, xAd: "n", y: 34 };
  const e1 = eksen({ ...o, x: 40 });
  const e2 = eksen({ ...o, x: 360 });
  let g = yazi(180, 16, `doğrusal: ${L} örnek`, "g-mini g-kalin") + yazi(500, 16, `${N} noktalı dairesel`, "g-mini g-kalin");
  g += `<rect x="${e1.X(-0.5)}" y="34" width="${e1.X(N - 0.5) - e1.X(-0.5)}" height="120" class="g-bolge-a"/>`;
  const ici = ns.filter((n) => n < L && n < N);
  const disi = ns.filter((n) => n < L && n >= N);
  g += e1.s + stem(e1, ici, ici.map((n) => yd[n]!), "a", 3) + stem(e1, disi, disi.map((n) => yd[n]!), "b", 3);
  // Taşan örneklerin başa katlandığı yerler
  const cn = aralik(0, 1, N - 1);
  g += e2.s + stem(e2, cn, yc, "c", 3);
  for (const n of disi) g += stem(e2, [n % N], [yd[n]!], "b", 2);
  const esit = N >= L;
  g += yazi(340, 196, esit ? `N = ${N} ≥ ${L}: dairesel sonuç doğrusal sonuçla aynı (sonda ${N - L} sıfır)` : `N = ${N} < ${L}: kırmızı örnekler n − ${N} konumuna katlanıp toplanıyor`, "g-mini g-soluk");
  return { s: g, esit, yc, L };
}

// ---- G-H7-08: DFT ile doğrusal konvolüsyon ----
function dftIleKonv(): string {
  const k = (x: number, y: number, w: number, s: string) => kutu(x, y, w, 34) + yazi(x + w / 2, y + 21, s, "g-mini g-kalin");
  let g = yazi(30, 42, "x(n)", "g-kucuk g-kalin", "start") + yazi(30, 122, "h(n)", "g-kucuk g-kalin", "start");
  g += ok([[66, 38], [90, 38]]) + k(92, 21, 140, "N'ye sıfırla doldur") + ok([[232, 38], [256, 38]]) + k(258, 21, 100, "N noktalı DFT") + ok([[358, 38], [400, 38], [400, 62]]);
  g += ok([[66, 118], [90, 118]]) + k(92, 101, 140, "N'ye sıfırla doldur") + ok([[232, 118], [256, 118]]) + k(258, 101, 100, "N noktalı DFT") + ok([[358, 118], [400, 118], [400, 94]]);
  g += yazi(380, 32, "X(k)", "g-mini") + yazi(380, 134, "H(k)", "g-mini");
  g += `<circle cx="400" cy="78" r="15" class="g-kutu"/>` + yazi(400, 83, "×", "g-kalin");
  g += ok([[415, 78], [446, 78]]) + k(448, 61, 104, "ters DFT") + ok([[552, 78], [580, 78]]) + yazi(586, 82, "y(n)", "g-kucuk g-kalin", "start");
  g += yazi(430, 64, "Y(k)", "g-mini");
  g += yazi(330, 176, "N ≥ N₁ + N₂ − 1 seçilirse y(n) = x(n) * h(n): dairesel sonuç doğrusal sonuca eşit olur", "g-mini g-soluk");
  return g;
}

// ---- G-H7-09: Örtüşme-ekleme ----
function ortusmeEkleme(): string {
  const M = 4;
  const h = [1, 1, 1];
  const x = [1, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1];
  const ns = aralik(0, 1, 13);
  const o = { x: 60, w: 560, h: 34, x0: -0.7, x1: 13.7, y0: 0, y1: 7, xTik: [] as number[], sifirdan: true, xAd: "n" };
  let g = "";
  const satir = (y: number, ad: string) => {
    const e = eksen({ ...o, y });
    g += e.s + yazi(52, y + 28, ad, "g-mini g-kalin", "end");
    return e;
  };
  const ex = satir(14, "x(n)");
  for (let b = 0; b < 3; b++) g += `<rect x="${ex.X(b * M - 0.45)}" y="10" width="${ex.X((b + 1) * M - 0.55) - ex.X(b * M - 0.45)}" height="42" class="${b % 2 ? "g-bolge-b" : "g-bolge-a"}"/>`;
  g += stem(ex, ns.slice(0, 12), x.map((v) => v * 1.6), "a", 2.4);
  const renk = ["a", "c", "d"] as const;
  for (let b = 0; b < 3; b++) {
    const yb = dogrusalKonv(x.slice(b * M, (b + 1) * M), h);
    const e = satir(70 + b * 50, `y${b + 1}(n)`);
    const ks = yb.map((_, i) => b * M + i);
    g += stem(e, ks, yb, renk[b]!, 2.4);
    // Bir sonraki blokla örtüşen kuyruk
    if (b < 2) g += `<rect x="${e.X((b + 1) * M - 0.45)}" y="${e.Y(7)}" width="${e.X((b + 1) * M + 1.45) - e.X((b + 1) * M - 0.45)}" height="38" class="g-cerceve"/>`;
  }
  const ey = satir(230, "y(n)");
  const y = dogrusalKonv(x, h);
  g += stem(ey, y.map((_, i) => i), y, "b", 2.4);
  g += yazi(340, 290, "her blok M = 4 örnek; h(n) 3 örnek, her çıkış 6 örnek: çerçeveli 2 örnek bir sonrakiyle toplanır", "g-mini g-soluk");
  return g;
}

// ---- G-H7-10: Örtüşme-kaydetme ----
function ortusmeKaydetme(): string {
  const N = 6;
  const L = 3;
  const h = [1, 1, 1];
  const x = [1, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1];
  const xp = [0, 0, ...x];
  const ns = aralik(-2, 1, 13);
  const o = { x: 60, w: 560, h: 34, x0: -2.7, x1: 13.7, y0: 0, y1: 7, xTik: [] as number[], sifirdan: true, xAd: "n" };
  let g = "";
  const satir = (y: number, ad: string) => {
    const e = eksen({ ...o, y });
    g += e.s + yazi(52, y + 28, ad, "g-mini g-kalin", "end");
    return e;
  };
  const ex = satir(14, "x(n)");
  g += stem(ex, ns.slice(2, 14), x.map((v) => v * 1.6), "a", 2.4) + stem(ex, [-2, -1], [0, 0], "a", 2.4);
  const adim = N - L + 1;
  const renk = ["a", "c", "d"] as const;
  for (let b = 0; b < 3; b++) {
    const bas = b * adim - (L - 1);
    const blok = xp.slice(b * adim, b * adim + N);
    while (blok.length < N) blok.push(0);
    const yc = daireselKonv(blok, h, N);
    const e = satir(70 + b * 50, `y${b + 1}(n)`);
    g += `<rect x="${e.X(bas - 0.45)}" y="${e.Y(7) - 2}" width="${e.X(bas + N - 0.55) - e.X(bas - 0.45)}" height="42" class="${b % 2 ? "g-bolge-b" : "g-bolge-a"}"/>`;
    const at = yc.slice(0, L - 1);
    const tut = yc.slice(L - 1);
    g += stem(e, at.map((_, i) => bas + i), at, "b", 2.4);
    g += stem(e, tut.map((_, i) => bas + L - 1 + i), tut, renk[b]!, 2.4);
    g += yazi(e.X(bas + 0.5), e.Y(7) - 6, "atılır", "g-mini g-soluk");
  }
  const ey = satir(230, "y(n)");
  const y = dogrusalKonv(x, h).slice(0, 12);
  g += stem(ey, y.map((_, i) => i), y, "b", 2.4);
  g += yazi(340, 290, "gölgeli: N = 6 örneklik örtüşen bloklar; her dairesel sonucun ilk L − 1 = 2 örneği atılır, kalan 4'ü kaydedilir", "g-mini g-soluk");
  return g;
}

export const HAFTA_7_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H7-01",
    baslik: "Sonlu dizinin periyodik uzatması",
    aciklama: "Solda 4 örneklik sonlu bir dizi. Sağda aynı dizinin her 4 örnekte bir tekrarlanmasıyla elde edilen periyodik dizi; n'nin değeri 4'e göre modülo alınarak bulunur.",
    en: 660, boy: 178, icerik: periyodikUzatma(),
  },
  {
    kod: "G-H7-02",
    baslik: "DFT katsayıları DTFT'nin örnekleridir",
    aciklama: "Solda 6 örneklik bir dizi ve eklenen sıfırlar. Sağda dizinin DTFT büyüklüğü kesikli eğri olarak, N noktalı DFT büyüklüğü 2πk/N frekanslarında noktalar olarak. Sıfır doldurdukça noktalar aynı eğri üzerinde sıklaşır.",
    en: 660, boy: 198, icerik: dftOrnekCiz(6).s, etkilesim: "dftornek",
  },
  {
    kod: "G-H7-03",
    baslik: "DFT'nin taban üstelleri birim çemberde",
    aciklama: "Solda k. taban üstelin n = 0..N − 1 için birim çemberdeki değerleri. Sağda gerçel ve sanal kısımları. k sıfır değilse noktalar çembere eşit dağılır ve ortalamaları sıfırdır: üsteller birbirine diktir.",
    en: 660, boy: 250, icerik: tabanCiz(8, 1).s, etkilesim: "dfttaban",
  },
  {
    kod: "G-H7-04",
    baslik: "DFT'nin eşlenik simetrisi",
    aciklama: "8 noktalı bir dizinin DFT'sinin gerçel ve sanal kısımları. Gerçel dizide gerçel kısım k = N/2'ye göre aynalı, sanal kısım ters işaretli aynalıdır.",
    en: 660, boy: 206, icerik: simetriCiz(0).s, etkilesim: "dftsimetri",
  },
  {
    kod: "G-H7-05",
    baslik: "Dairesel kaydırma",
    aciklama: "8 örneklik dizi bir çemberin üzerine dizilmiş. Dairesel kaydırma çemberi saat yönünde döndürür; sağdan taşan örnek başa geçer. Sağda asıl dizi ve kaydırılmış dizi.",
    en: 660, boy: 232, icerik: daireselKaydirCiz(2).s, etkilesim: "daireselkaydirma",
  },
  {
    kod: "G-H7-06",
    baslik: "Dairesel konvolüsyon: iç içe iki çember",
    aciklama: "Dış çemberde x(m), iç çemberde ters çevrilip n kadar döndürülmüş h. Aynı hizadaki değerler çarpılıp toplanınca y(n) bulunur. Sağda çıkışın şimdiye kadar hesaplanan örnekleri.",
    en: 660, boy: 228, icerik: daireselKonvCiz(0).s, etkilesim: "daireselkonv",
  },
  {
    kod: "G-H7-07",
    baslik: "Dairesel ve doğrusal konvolüsyon",
    aciklama: "Solda 4 ve 3 örneklik iki dizinin 6 örneklik doğrusal konvolüsyonu, sağda N noktalı dairesel konvolüsyonu. N, 6'dan küçükse taşan örnekler başa katlanıp eklenir; N en az 6 ise iki sonuç aynıdır.",
    en: 660, boy: 206, icerik: daireselDogrusalCiz(4).s, etkilesim: "daireseldogrusal",
  },
  {
    kod: "G-H7-08",
    baslik: "DFT ile doğrusal konvolüsyon",
    aciklama: "İki dizi N uzunluğuna sıfırla doldurulur, N noktalı DFT'leri alınır, DFT'ler çarpılır ve çarpımın ters DFT'si alınır. N, uzunlukların toplamının bir eksiğinden küçük değilse sonuç doğrusal konvolüsyondur.",
    en: 640, boy: 190, icerik: dftIleKonv(),
  },
  {
    kod: "G-H7-09",
    baslik: "Örtüşme-ekleme yöntemi",
    aciklama: "Uzun giriş 4 örneklik örtüşmeyen bloklara bölünür. Her blok 3 örneklik filtreyle konvolüsyona girer ve 6 örneklik çıkış verir. Komşu çıkışların örtüşen 2 örneği toplanarak tüm çıkış elde edilir.",
    en: 660, boy: 300, icerik: ortusmeEkleme(),
  },
  {
    kod: "G-H7-10",
    baslik: "Örtüşme-kaydetme yöntemi",
    aciklama: "Giriş, başına 2 sıfır eklenip 6 örneklik ve 2 örnek örtüşen bloklara bölünür. Her bloğun filtreyle 6 noktalı dairesel konvolüsyonunun ilk 2 örneği bozuktur ve atılır; kalan 4 örnek sırayla yan yana konur.",
    en: 660, boy: 300, icerik: ortusmeKaydetme(),
  },
];
