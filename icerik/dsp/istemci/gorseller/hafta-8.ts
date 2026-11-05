// Hafta 8 ders şekilleri: FFT'nin işlem kazancı, zamanda seyreltme,
// kelebek, 8 noktalı radix-2 akış diyagramı ve bit ters sırası,
// frekansta seyreltme, karma N ve FFT ile spektrum.

import { cizgi, kutu, ok, yazi } from "./cizim";
import { aralik, egri, eksen, kisa, rastgele, stem } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

const PI = Math.PI;
export type C = [number, number];
const topla = (a: C, b: C): C => [a[0] + b[0], a[1] + b[1]];
const cikar = (a: C, b: C): C => [a[0] - b[0], a[1] - b[1]];
const carp = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const W = (N: number, r: number): C => [Math.cos((2 * PI * r) / N), -Math.sin((2 * PI * r) / N)];
const UST = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷"];
const temiz = (a: C): C => [Math.abs(a[0]) < 1e-9 ? 0 : a[0], Math.abs(a[1]) < 1e-9 ? 0 : a[1]];

// Karmaşık sayıyı kısa yazar: 2, −j, 1 + 2j, 0,71 − 0,71j
export function kYaz(a: C, b = 2): string {
  const [re, im] = temiz(a);
  const r = kisa(re, b).replace("-", "−");
  if (im === 0) return r;
  const i = Math.abs(im);
  const iy = Math.abs(i - 1) < 1e-9 ? "j" : `${kisa(i, b)}j`;
  if (re === 0) return `${im < 0 ? "−" : ""}${iy}`;
  return `${r} ${im < 0 ? "−" : "+"} ${iy}`;
}

// n'nin log2(N) bitlik ters sırası
export function bitTers(n: number, N: number): number {
  let r = 0;
  for (let b = 1; b < N; b <<= 1) {
    r = (r << 1) | (n & 1);
    n >>= 1;
  }
  return r;
}

// Radix-2 zamanda seyreltmeli FFT; her aşamanın düğüm değerlerini de verir
export function fftAsamalari(x: C[]): C[][] {
  const N = x.length;
  let a: C[] = x.map((_, i) => x[bitTers(i, N)]!);
  const asamalar: C[][] = [a];
  for (let boy = 2; boy <= N; boy *= 2) {
    const yarim = boy / 2;
    const b = a.slice();
    for (let g = 0; g < N; g += boy)
      for (let j = 0; j < yarim; j++) {
        const t = carp(W(boy, j), a[g + j + yarim]!);
        b[g + j] = topla(a[g + j]!, t);
        b[g + j + yarim] = cikar(a[g + j]!, t);
      }
    a = b;
    asamalar.push(a);
  }
  return asamalar;
}
export const fft = (x: number[]): C[] => fftAsamalari(x.map((v) => [v, 0] as C)).at(-1)!;

// ---- G-H8-01: Doğrudan DFT ve FFT'nin çarpma sayıları ----
export function islemCiz(v: number) {
  const vs = aralik(1, 1, 12);
  const e = eksen({
    x: 60, y: 24, w: 380, h: 170, x0: 0.5, x1: 12.5, y0: 0, y1: 8,
    xTik: vs.filter((k) => k % 2 === 0), xEtiket: (k) => `${2 ** k}`, yTik: [2, 4, 6, 8], yEtiket: (k) => `10${["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸"][k]}`,
    izgara: true, xAd: "N",
  });
  const d = (k: number) => Math.log10((2 ** k) ** 2);
  const f = (k: number) => Math.log10(Math.max(1, (2 ** k / 2) * k));
  let g = e.s + egri(e, vs, vs.map(d), "g-seri-b") + egri(e, vs, vs.map(f), "g-seri-c");
  g += stem(e, vs, vs.map(d), "b", 3).replace(/<line[^>]*>/g, "") + stem(e, vs, vs.map(f), "c", 3).replace(/<line[^>]*>/g, "");
  g += cizgi([[e.X(v), e.Y(0)], [e.X(v), e.Y(8)]], "g-kesik");
  g += `<circle cx="${e.X(v)}" cy="${e.Y(d(v))}" r="6" class="g-stem-uc g-stem-b"/><circle cx="${e.X(v)}" cy="${e.Y(f(v))}" r="6" class="g-stem-uc g-stem-c"/>`;
  g += cizgi([[80, 236], [98, 236]], "g-seri-b") + yazi(104, 236, "doğrudan DFT: N²", "g-mini", "start");
  g += cizgi([[240, 236], [258, 236]], "g-seri-c") + yazi(264, 236, "radix-2 FFT: (N/2)·log₂N", "g-mini", "start");
  const N = 2 ** v;
  const dft = N * N;
  const ff = (N / 2) * v;
  g += kutu(480, 40, 170, 130, "g-kutu");
  g += yazi(565, 66, `N = ${N}`, "g-kucuk g-kalin");
  g += yazi(565, 96, `DFT: ${dft.toLocaleString("tr-TR")}`, "g-mini");
  g += yazi(565, 118, `FFT: ${ff.toLocaleString("tr-TR")}`, "g-mini");
  g += yazi(565, 148, `${kisa(dft / ff, 1)} kat az çarpma`, "g-kucuk g-kalin");
  return { s: g, N, dft, ff };
}

// ---- G-H8-02: Zamanda seyreltme: çift ve tek indisler ----
function seyreltme(): string {
  const x = [1.5, -0.5, 2, 1, 2.2, 1.2, -0.8, 2.4];
  const ns = aralik(0, 1, 7);
  const e = eksen({ x: 200, y: 26, w: 280, h: 80, x0: -0.7, x1: 7.7, y0: -1, y1: 2.6, xTik: ns, yTik: [1, 2], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)" });
  let g = e.s + stem(e, ns.filter((n) => n % 2 === 0), x.filter((_, n) => n % 2 === 0), "a", 3) + stem(e, ns.filter((n) => n % 2 === 1), x.filter((_, n) => n % 2 === 1), "c", 3);
  const ks = aralik(0, 1, 3);
  const o = { y: 182, w: 200, h: 80, x0: -0.7, x1: 3.7, y0: -1, y1: 2.6, xTik: ks, yTik: [1, 2], sifirdan: true, izgara: true, xAd: "n" };
  const e1 = eksen({ ...o, x: 60, yAd: "g(n) = x(2n)" });
  const e2 = eksen({ ...o, x: 400, yAd: "h(n) = x(2n + 1)" });
  g += e1.s + stem(e1, ks, ks.map((n) => x[2 * n]!), "a", 3) + e2.s + stem(e2, ks, ks.map((n) => x[2 * n + 1]!), "c", 3);
  g += ok([[300, 130], [220, 150]]) + ok([[380, 130], [460, 150]]);
  g += yazi(212, 136, "çift indisler", "g-mini g-kalin", "end") + yazi(468, 136, "tek indisler", "g-mini g-kalin", "start");
  g += yazi(340, 292, "X(k) = G(k) + Wₙᵏ·H(k): G ve H, N/2 noktalı DFT'lerdir", "g-mini g-soluk");
  return g;
}

// ---- G-H8-03: Kelebek ----
export function kelebekCiz(N: number, r: number, a: C, b: C) {
  const w = W(N, r);
  const wb = carp(w, b);
  const A = temiz(topla(a, wb));
  const B = temiz(cikar(a, wb));
  // Sol: sadeleştirilmiş kelebek
  const x0 = 40;
  const x1 = 120;
  const x2 = 250;
  const x3 = 330;
  const y0 = 70;
  const y1 = 170;
  let g = yazi(x0 - 6, y0 + 4, "a", "g-kucuk g-kalin", "end") + yazi(x0 - 6, y1 + 4, "b", "g-kucuk g-kalin", "end");
  g += ok([[x0, y0], [x1, y0]]) + ok([[x0, y1], [x1, y1]]);
  g += ok([[x1, y0], [x2, y0]]) + ok([[x1, y0], [x2, y1]]) + ok([[x1, y1], [x2, y0]]) + ok([[x1, y1], [x2, y1]]);
  g += ok([[x2, y0], [x3, y0]]) + ok([[x2, y1], [x3, y1]]);
  for (const [x, y] of [[x1, y0], [x1, y1], [x2, y0], [x2, y1]] as const) g += `<circle cx="${x}" cy="${y}" r="4" class="g-uc"/>`;
  g += yazi(80, y1 + 22, `W₈${UST[r]}`, "g-mini g-kalin") + yazi(x2 - 14, y1 + 22, "−1", "g-mini g-kalin");
  g += yazi(x3 + 6, y0 + 4, "A = a + W·b", "g-mini g-kalin", "start") + yazi(x3 + 6, y1 + 4, "B = a − W·b", "g-mini g-kalin", "start");
  g += yazi(200, 220, `W = W₈${UST[r]} = ${kYaz(w)}`, "g-kucuk g-kalin");
  // Sağ: karmaşık düzlem
  const e = eksen({ x: 470, y: 30, w: 180, h: 180, x0: -3.2, x1: 3.2, y0: -3.2, y1: 3.2, xTik: [-2, 2], yTik: [-2, 2], sifirdan: true, izgara: true, xAd: "Re", yAd: "Im" });
  g += e.s;
  const vektor = (p: C, cls: string, q: C = [0, 0]) => ok([[e.X(q[0]), e.Y(q[1])], [e.X(p[0]), e.Y(p[1])]], `g-cizgi ${cls}`);
  g += vektor(a, "g-renk-a-cizgi") + vektor(topla(a, wb), "g-renk-c-cizgi", a) + vektor(cikar(a, wb), "g-renk-b-cizgi", a);
  g += `<circle cx="${e.X(A[0])}" cy="${e.Y(A[1])}" r="5" class="g-stem-uc g-stem-c"/><circle cx="${e.X(B[0])}" cy="${e.Y(B[1])}" r="5" class="g-stem-uc g-stem-b"/>`;
  g += yazi(e.X(A[0]) + 8, e.Y(A[1]) - 6, "A", "g-mini g-kalin", "start") + yazi(e.X(B[0]) + 8, e.Y(B[1]) - 6, "B", "g-mini g-kalin", "start");
  return { s: g, A, B, w: temiz(w) };
}

// ---- G-H8-04: 8 noktalı radix-2 DIT akış diyagramı ----
export const AKIS_GIRISLERI: { ad: string; x: number[] }[] = [
  { ad: "dürtü δ(n)", x: [1, 0, 0, 0, 0, 0, 0, 0] },
  { ad: "sabit 1", x: [1, 1, 1, 1, 1, 1, 1, 1] },
  { ad: "x(n) = n", x: [0, 1, 2, 3, 4, 5, 6, 7] },
  { ad: "cos(πn/2)", x: [1, 0, -1, 0, 1, 0, -1, 0] },
];
export function akisCiz(i: number, asama: number) {
  const N = 8;
  const x = AKIS_GIRISLERI[i]!.x;
  const ara = fftAsamalari(x.map((v) => [v, 0] as C));
  const sx = [70, 230, 390, 550];
  const sy = (r: number) => 30 + r * 34;
  let g = "";
  // Kelebek çizgileri
  for (let s = 1; s <= 3; s++) {
    const boy = 2 ** s;
    const yarim = boy / 2;
    const aktif = s <= asama;
    const cls = aktif ? "g-cizgi" : "g-cizgi g-soluk g-izgara";
    for (let gr = 0; gr < N; gr += boy)
      for (let j = 0; j < yarim; j++) {
        const u = gr + j;
        const d = u + yarim;
        const [a, b] = [sx[s - 1]! + 50, sx[s]! - 4];
        g += cizgi([[a, sy(u)], [b, sy(u)]], cls) + cizgi([[a, sy(d)], [b, sy(d)]], cls);
        g += cizgi([[a, sy(u)], [b, sy(d)]], cls) + cizgi([[a, sy(d)], [b, sy(u)]], cls);
        const r = j * (N / boy);
        if (r !== 0 || s === 3) g += yazi(a + 16, sy(d) + 13, `W₈${["⁰", "¹", "²", "³"][r]}`, aktif ? "g-mini g-kalin" : "g-mini g-soluk");
        g += yazi(b - 12, sy(d) + 13, "−1", aktif ? "g-mini" : "g-mini g-soluk");
      }
  }
  // Düğümler ve değerler
  for (let c = 0; c <= 3; c++)
    for (let r = 0; r < N; r++) {
      const goster = c <= asama;
      g += `<circle cx="${sx[c]}" cy="${sy(r)}" r="3.5" class="${goster ? "g-uc" : "g-uc g-soluk"}"/>`;
      if (goster) g += yazi(sx[c]! + 6, sy(r) - 6, kYaz(ara[c]![r]!, 1), c === 3 ? "g-mini g-kalin g-renk-c" : "g-mini", "start");
    }
  for (let r = 0; r < N; r++) {
    g += yazi(sx[0]! - 10, sy(r) + 4, `x(${bitTers(r, N)})`, "g-mini g-kalin", "end");
    g += yazi(sx[3]! + 76, sy(r) + 4, `X(${r})`, "g-mini g-kalin", "start");
  }
  g += yazi(150, 312, "1. aşama: 2 noktalı DFT'ler", "g-mini g-soluk") + yazi(310, 312, "2. aşama", "g-mini g-soluk") + yazi(470, 312, "3. aşama", "g-mini g-soluk");
  return { s: g, X: ara[3]!, ara };
}

// ---- G-H8-05: Frekansta seyreltme, ilk aşama ----
function frekanstaSeyreltme(): string {
  const sy = (r: number) => 30 + r * 32;
  const xa = 70;
  const xb = 230;
  let g = "";
  for (let n = 0; n < 4; n++) {
    g += cizgi([[xa, sy(n)], [xb, sy(n)]]) + cizgi([[xa, sy(n + 4)], [xb, sy(n + 4)]]);
    g += cizgi([[xa, sy(n)], [xb, sy(n + 4)]]) + cizgi([[xa, sy(n + 4)], [xb, sy(n)]]);
    g += yazi(xb - 14, sy(n + 4) + 13, "−1", "g-mini");
    g += cizgi([[xb, sy(n + 4)], [300, sy(n + 4)]]) + yazi(266, sy(n + 4) - 5, `W₈${["⁰", "¹", "²", "³"][n]}`, "g-mini g-kalin");
    g += cizgi([[xb, sy(n)], [340, sy(n)]]) + cizgi([[300, sy(n + 4)], [340, sy(n + 4)]]);
  }
  for (let r = 0; r < 8; r++) {
    g += `<circle cx="${xa}" cy="${sy(r)}" r="3.5" class="g-uc"/><circle cx="${xb}" cy="${sy(r)}" r="3.5" class="g-uc"/>`;
    g += yazi(xa - 10, sy(r) + 4, `x(${r})`, "g-mini g-kalin", "end");
  }
  g += kutu(340, sy(0) - 14, 110, sy(3) - sy(0) + 28) + yazi(395, sy(1.5), "4 noktalı", "g-mini g-kalin") + yazi(395, sy(1.5) + 14, "DFT", "g-mini g-kalin");
  g += kutu(340, sy(4) - 14, 110, sy(3) - sy(0) + 28) + yazi(395, sy(5.5), "4 noktalı", "g-mini g-kalin") + yazi(395, sy(5.5) + 14, "DFT", "g-mini g-kalin");
  for (let r = 0; r < 4; r++) {
    g += ok([[450, sy(r)], [500, sy(r)]]) + yazi(506, sy(r) + 4, `X(${2 * r})`, "g-mini g-kalin", "start");
    g += ok([[450, sy(r + 4)], [500, sy(r + 4)]]) + yazi(506, sy(r + 4) + 4, `X(${2 * r + 1})`, "g-mini g-kalin", "start");
  }
  g += yazi(570, sy(1.5) + 4, "çift k", "g-mini g-soluk", "start") + yazi(570, sy(5.5) + 4, "tek k", "g-mini g-soluk", "start");
  g += yazi(150, 290, "x(n) + x(n + 4) üstte; [x(n) − x(n + 4)]·W₈ⁿ altta", "g-mini g-soluk");
  return g;
}

// ---- G-H8-06: Karma N: indis tabloları ----
export const KARMA_SECENEKLERI: [number, number][] = [
  [2, 3],
  [3, 4],
  [3, 5],
  [5, 3],
];
export function karmaCiz(N1: number, N2: number) {
  const N = N1 * N2;
  const hucre = 34;
  const tablo = (x0: number, y0: number, baslik: string, yaz: (satir: number, sutun: number) => string, satirAd: string, sutunAd: string) => {
    let s = yazi(x0 + (N1 * hucre) / 2, y0 - 26, baslik, "g-mini g-kalin");
    s += yazi(x0 - 8, y0 - 8, `${satirAd}\\${sutunAd}`, "g-mini g-soluk", "end");
    for (let c = 0; c < N1; c++) s += yazi(x0 + c * hucre + hucre / 2, y0 - 8, `${c}`, "g-mini g-soluk");
    for (let r = 0; r < N2; r++) {
      s += yazi(x0 - 8, y0 + r * 26 + 17, `${r}`, "g-mini g-soluk", "end");
      for (let c = 0; c < N1; c++) {
        s += `<rect x="${x0 + c * hucre}" y="${y0 + r * 26}" width="${hucre}" height="26" class="${r === 0 ? "g-ton1" : "g-kutu"}"/>`;
        s += yazi(x0 + c * hucre + hucre / 2, y0 + r * 26 + 17, yaz(r, c), "g-mini");
      }
    }
    return s;
  };
  const sol = 60;
  const sag = 440;
  const y0 = 50;
  let g = tablo(sol, y0, `giriş: x(${N2}n₁ + n₂)`, (r, c) => `x${N2 * c + r}`, "n₂", "n₁");
  g += tablo(sag, y0, `çıkış: X(k₁ + ${N1}k₂)`, (r, c) => `X${c + N1 * r}`, "k₂", "k₁");
  const ortaX = 300;
  const adimlar = [`1. her satırın ${N1} noktalı DFT'si`, "2. bölüm çarpanlarıyla çarp", `3. her sütunun ${N2} noktalı DFT'si`];
  adimlar.forEach((a, i) => (g += yazi(ortaX, y0 + 20 + i * 24, a, "g-mini", "middle")));
  g += ok([[sol + N1 * hucre + 16, y0 + 100], [sag - 24, y0 + 100]]);
  const toplam = N1 * N2 * (N1 + N2);
  g += yazi(340, y0 + N2 * 26 + 30, `N = ${N}: doğrudan ${N * N} çarpma; satır ve sütun DFT'leriyle yaklaşık ${toplam} çarpma (bölüm çarpanları hariç)`, "g-mini g-soluk");
  return { s: g, N, toplam };
}

// ---- G-H8-07: FFT ile spektrum ----
export function spektrumCiz(f1: number, N: number) {
  const fs = 1000;
  const r = rastgele(7);
  const x = aralik(0, 1, N - 1).map((n) => Math.sin((2 * PI * f1 * n) / fs) + 0.5 * Math.sin((2 * PI * 220 * n) / fs) + 0.6 * (r() - 0.5));
  const X = fft(x);
  const yarim = N / 2;
  const mag = X.slice(0, yarim).map((c) => (2 / N) * Math.hypot(c[0], c[1]));
  const fk = aralik(0, 1, yarim - 1).map((k) => (k * fs) / N);
  const goster = Math.min(N, 128);
  const e1 = eksen({ x: 40, y: 30, w: 250, h: 120, x0: 0, x1: goster - 1, y0: -2, y1: 2, xTik: aralik(0, goster / 4, goster - 1), yTik: [-1, 1], sifirdan: true, izgara: true, xAd: "n", yAd: "x(n)" });
  let g = e1.s + egri(e1, aralik(0, 1, goster - 1), x.slice(0, goster), "g-seri-a");
  g += yazi(165, 186, goster < N ? `ilk ${goster} örnek gösteriliyor` : `${N} örnek`, "g-mini g-soluk");
  const e2 = eksen({ x: 350, y: 30, w: 290, h: 120, x0: 0, x1: fs / 2, y0: 0, y1: 1.2, xTik: [0, 100, 200, 300, 400, 500], yTik: [0.5, 1], izgara: true, xAd: "f (Hz)", yAd: "(2/N)|X(k)|" });
  g += e2.s + stem(e2, fk, mag, "c", N > 128 ? 1.4 : 2.2);
  g += yazi(495, 186, `fs = 1000 Hz, N = ${N}, Δf = ${kisa(fs / N, 2)} Hz`, "g-mini g-soluk");
  let tepe = 0;
  mag.forEach((m, k) => {
    if (m > mag[tepe]!) tepe = k;
  });
  return { s: g, tepe: fk[tepe]!, df: fs / N };
}

export const HAFTA_8_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H8-01",
    baslik: "Doğrudan DFT ve FFT'nin çarpma sayıları",
    aciklama: "Logaritmik ölçekte, N'ye göre doğrudan DFT'nin N² çarpması ve radix-2 FFT'nin (N/2)·log₂N çarpması. N büyüdükçe aradaki fark yüzlerce kata çıkar.",
    en: 670, boy: 250, icerik: islemCiz(10).s, etkilesim: "fftislem",
  },
  {
    kod: "G-H8-02",
    baslik: "Zamanda seyreltme: çift ve tek indisli diziler",
    aciklama: "8 örneklik dizi, çift indisli örneklerden oluşan g(n) ve tek indisli örneklerden oluşan h(n) olarak iki 4 örneklik diziye ayrılıyor.",
    en: 660, boy: 304, icerik: seyreltme(),
  },
  {
    kod: "G-H8-03",
    baslik: "FFT kelebeği",
    aciklama: "Solda sadeleştirilmiş kelebek: alt girdi bölüm çarpanı W ile bir kez çarpılır; üst çıkış toplamı, alt çıkış farkı verir. Sağda aynı işlem karmaşık düzlemde: a'ya W·b eklenir ve çıkarılır.",
    en: 670, boy: 236, icerik: kelebekCiz(8, 1, [1, 0], [1, 0]).s, etkilesim: "kelebek",
  },
  {
    kod: "G-H8-04",
    baslik: "8 noktalı radix-2 zamanda seyreltmeli FFT",
    aciklama: "Girişler bit ters sırasında solda, çıkışlar doğal sırada sağda. Üç aşamanın her birinde dört kelebek vardır; düğümlerin yanında seçilen girişin ara değerleri yazılıdır.",
    en: 680, boy: 322, icerik: akisCiz(2, 3).s, etkilesim: "fftakis",
  },
  {
    kod: "G-H8-05",
    baslik: "Frekansta seyreltmenin ilk aşaması",
    aciklama: "Doğal sıradaki 8 giriş ilk yarı ve ikinci yarı olarak eşlenir. Toplamlar çift indisli çıkışları veren 4 noktalı DFT'ye, bölüm çarpanıyla çarpılmış farklar tek indisli çıkışları veren 4 noktalı DFT'ye girer.",
    en: 640, boy: 300, icerik: frekanstaSeyreltme(),
  },
  {
    kod: "G-H8-06",
    baslik: "Karma N: indislerin iki boyutlu dizilişi",
    aciklama: "N = N₁·N₂ uzunluğundaki dizinin örnekleri N₂ satır ve N₁ sütunluk bir tabloya yerleştirilir. Satırların DFT'si alınır, bölüm çarpanlarıyla çarpılır, sonra sütunların DFT'si alınır; çıkış tablosundan X(k) okunur.",
    en: 680, boy: 230, icerik: karmaCiz(3, 4).s, etkilesim: "karman",
  },
  {
    kod: "G-H8-07",
    baslik: "FFT ile bir sinyalin spektrumu",
    aciklama: "Solda iki sinüs ve gürültüden oluşan sinyal, sağda FFT ile hesaplanan tek yanlı büyüklük spektrumu. Tepeler sinüslerin frekanslarındadır.",
    en: 660, boy: 196, icerik: spektrumCiz(80, 256).s, etkilesim: "spektrum",
  },
];
