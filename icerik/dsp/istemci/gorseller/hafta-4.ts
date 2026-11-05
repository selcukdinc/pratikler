// Hafta 4 ders şekilleri: konvolüsyonun süperpozisyonla kurulması, özellikler
// (blok diyagramları), doğrudan hesap, grafik yöntem, kaydırma kuralı, çarpım
// tablosu, zarlar, hareketli ortalama ve korelasyon.

import { cizgi, kutu, ok, yazi } from "./cizim";
import { aralik, cubuklar, egri, eksen, kisa, rastgele, seviye, stem, tikler } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

// Sonlu iki dizinin konvolüsyonu (ikisi de 0. konumdan başlar)
export function konv(x: number[], h: number[]): number[] {
  const y = new Array<number>(x.length + h.length - 1).fill(0);
  x.forEach((a, i) => h.forEach((b, j) => (y[i + j]! += a * b)));
  return y.map((v) => Number(v.toFixed(10)));
}

// Küçük bir stem paneli: başlık solda, eksen sağda
function panel(
  ns: number[], xs: number[],
  o: { x: number; y: number; w: number; h: number; y0: number; y1: number; renk?: "a" | "b" | "c" | "d"; ad?: string; k0?: number; k1?: number; tik?: number[]; xAd?: string },
) {
  const k0 = o.k0 ?? ns[0]!;
  const k1 = o.k1 ?? ns[ns.length - 1]!;
  const e = eksen({
    x: o.x, y: o.y, w: o.w, h: o.h, x0: k0 - 0.7, x1: k1 + 0.7, y0: o.y0, y1: o.y1,
    xTik: o.tik ?? aralik(k0, 1, k1), yTik: tikler(o.y0, o.y1, 2).filter((t) => t !== 0), sifirdan: true, izgara: true, xAd: o.xAd ?? "n",
  });
  return { e, s: e.s + stem(e, ns, xs, o.renk ?? "a") + (o.ad ? yazi(o.x - 34, o.y + o.h / 2, o.ad, "g-mini g-kalin", "end") : "") };
}

// ---- G-H4-01: Konvolüsyon, kaydırılmış dürtü yanıtlarının toplamıdır ----
export const SUP_X = [1, 2, -1];
export const SUP_H = [3, 2, 1];
export function superpozisyon(adet: number) {
  const ns = aralik(-1, 1, 6);
  const al = (d: number[], n: number) => d[n] ?? 0;
  const sutun = { y0: -3.6, y1: 8.6 };
  let s = yazi(330, 12, "her giriş örneği x(k), kendi konumuna kaydırılmış ve x(k) ile ölçeklenmiş bir h(n) üretir", "g-mini g-soluk");
  s += panel(ns, ns.map((n) => al(SUP_X, n)), { x: 90, y: 34, w: 220, h: 70, y0: -1.5, y1: 2.5, ad: "x(n)" }).s;
  s += panel(ns, ns.map((n) => al(SUP_H, n)), { x: 410, y: 34, w: 220, h: 70, y0: -1.5, y1: 3.5, ad: "h(n)", renk: "b" }).s;
  for (let k = 0; k < 3; k++) {
    const x = 30 + k * 215;
    const acik = k < adet;
    const ys = ns.map((n) => SUP_X[k]! * al(SUP_H, n - k));
    const p = panel(ns, ys, { x: x + 10, y: 150, w: 170, h: 80, ...sutun, renk: acik ? "c" : "a" });
    s += acik ? p.s : `<g opacity="0.25">${p.s}</g>`;
    const kat = SUP_X[k] === 1 ? "" : SUP_X[k] === -1 ? "−" : `${SUP_X[k]}·`;
    s += yazi(x + 95, 136, `k = ${k}: ${kat}h(n${k === 0 ? "" : ` − ${k}`})`, `g-mini g-kod${acik ? " g-kalin" : " g-soluk"}`);
  }
  const y = ns.map((n) => {
    let t = 0;
    for (let k = 0; k < adet; k++) t += SUP_X[k]! * al(SUP_H, n - k);
    return t;
  });
  s += panel(ns, y, { x: 150, y: 278, w: 380, h: 90, ...sutun, renk: "d", ad: adet === 3 ? "y(n)" : "toplam" }).s;
  s += yazi(330, 262, adet === 3 ? "y(n) = x(n) * h(n): üç katkının toplamı" : `ilk ${adet} katkının toplamı`, "g-mini g-kalin");
  return { s, y };
}

// ---- G-H4-02: Değişme, birleşme ve dağılma özellikleri ----
function ozellikler(): string {
  const blok = (x: number, y: number, w: number, ad: string) => kutu(x, y - 15, w, 30, "g-dolu") + yazi(x + w / 2, y, ad, "g-kod g-kucuk");
  const giris = (x: number, y: number, ad: string) => yazi(x, y, ad, "g-mini", "end");
  const daire = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="11" class="g-kutu"/>` + yazi(x, y, "+", "g-kalin");
  const esit = (x: number, y: number) => yazi(x, y, "≡", "g-kalin");
  let s = "";
  // Değişme
  s += yazi(20, 18, "değişme", "g-kucuk g-kalin", "start");
  let y = 50;
  s += giris(56, y, "x(n)") + ok([[60, y], [90, y]]) + blok(90, y, 60, "h(n)") + ok([[150, y], [185, y]]) + yazi(190, y, "y(n)", "g-mini", "start");
  s += esit(250, y);
  s += giris(336, y, "h(n)") + ok([[340, y], [370, y]]) + blok(370, y, 60, "x(n)") + ok([[430, y], [465, y]]) + yazi(470, y, "y(n)", "g-mini", "start");
  // Birleşme (kaskat)
  s += yazi(20, 92, "birleşme: art arda (kaskat) bağlı iki sistem", "g-kucuk g-kalin", "start");
  y = 124;
  s += giris(56, y, "x(n)") + ok([[60, y], [85, y]]) + blok(85, y, 50, "h₁") + ok([[135, y], [160, y]]) + blok(160, y, 50, "h₂") + ok([[210, y], [235, y]]) + yazi(240, y, "y(n)", "g-mini", "start");
  s += esit(290, y);
  s += giris(376, y, "x(n)") + ok([[380, y], [405, y]]) + blok(405, y, 110, "h₁ * h₂") + ok([[515, y], [545, y]]) + yazi(550, y, "y(n)", "g-mini", "start");
  // Dağılma (paralel)
  s += yazi(20, 168, "dağılma: paralel bağlı iki sistem", "g-kucuk g-kalin", "start");
  y = 232;
  s += giris(48, y, "x(n)") + cizgi([[52, y], [75, y]]) + cizgi([[75, y - 32], [75, y + 32]]);
  s += ok([[75, y - 32], [100, y - 32]]) + blok(100, y - 32, 50, "h₁") + cizgi([[150, y - 32], [190, y - 32]]) + ok([[190, y - 32], [190, y - 11]]);
  s += ok([[75, y + 32], [100, y + 32]]) + blok(100, y + 32, 50, "h₂") + cizgi([[150, y + 32], [190, y + 32]]) + ok([[190, y + 32], [190, y + 11]]);
  s += daire(190, y) + ok([[201, y], [235, y]]) + yazi(240, y, "y(n)", "g-mini", "start");
  s += esit(290, y);
  s += giris(376, y, "x(n)") + ok([[380, y], [405, y]]) + blok(405, y, 110, "h₁ + h₂") + ok([[515, y], [545, y]]) + yazi(550, y, "y(n)", "g-mini", "start");
  return s;
}

// ---- G-H4-03: aⁿu(n) * u(n), doğrudan hesap ----
export function dogrudanCiz(a: number) {
  const ns = aralik(-3, 1, 25);
  const x = ns.map((n) => (n >= 0 ? a ** n : 0));
  const y = ns.map((n) => (n >= 0 ? (1 - a ** (n + 1)) / (1 - a) : 0));
  const limit = 1 / (1 - a);
  const ust = Math.max(2, limit * 1.15);
  const e = eksen({ x: 50, y: 28, w: 520, h: 170, x0: -3.7, x1: 25.7, y0: 0, y1: ust, xTik: aralik(0, 5, 25), yTik: tikler(0, ust, 4), sifirdan: true, izgara: true, xAd: "n" });
  let s = e.s + stem(e, ns, x, "b", 2.8) + stem(e, ns, y, "a", 3);
  s += seviye(e, limit, `1/(1 − a) = ${kisa(limit, 2)}`);
  s += `<circle cx="150" cy="226" r="3" class="g-stem-uc g-stem-b"/>` + yazi(160, 226, "x(n) = aⁿu(n)", "g-mini", "start");
  s += `<circle cx="300" cy="226" r="3" class="g-stem-uc g-stem-a"/>` + yazi(310, 226, "y(n) = x(n) * u(n)", "g-mini", "start");
  return { s, y, limit };
}

// ---- G-H4-04: Grafik yöntem: ters çevir, kaydır, çarp, topla ----
export interface GrafikOrnek {
  ad: string;
  x: number[];
  xBas: number;
  h: number[];
  hBas: number;
}
export const GRAFIK_ORNEKLERI: GrafikOrnek[] = [
  { ad: "x: dört örnek, h: kutu", x: [1, 2, 1, -1], xBas: 0, h: [1, 1, 1], hBas: 0 },
  { ad: "x: darbe, h: iki örnek", x: [1, 1, 1, 1, 1], xBas: -1, h: [2, 1], hBas: 0 },
  { ad: "x: rampa, h: türev", x: [0, 1, 2, 3, 4], xBas: 0, h: [1, -1], hBas: 0 },
];
export function grafikVeri(o: GrafikOrnek) {
  const y = konv(o.x, o.h);
  const yBas = o.xBas + o.hBas;
  const xAl = (k: number) => o.x[k - o.xBas] ?? 0;
  const hAl = (k: number) => o.h[k - o.hBas] ?? 0;
  const yAl = (n: number) => y[n - yBas] ?? 0;
  return { y, yBas, xAl, hAl, yAl };
}
export function grafikCiz(i: number, n: number) {
  const o = GRAFIK_ORNEKLERI[i]!;
  const { y, yBas, xAl, hAl, yAl } = grafikVeri(o);
  const ks = aralik(-5, 1, 9);
  const xs = ks.map(xAl);
  const hs = ks.map((k) => hAl(n - k));
  const ps = ks.map((k, j) => xs[j]! * hs[j]!);
  const toplam = ps.reduce((a, b) => a + b, 0);
  const ym = Math.max(3, ...y.map(Math.abs), ...o.x.map(Math.abs));
  const yr = { y0: -ym * 1.15, y1: ym * 1.15 };
  const ortak = { x: 130, w: 470, h: 62, k0: -5, k1: 9, xAd: "k" };
  let s = "";
  s += panel(ks, xs, { ...ortak, y: 22, ...yr, renk: "a", ad: "x(k)" }).s;
  s += panel(ks, hs, { ...ortak, y: 112, ...yr, renk: "b", ad: `h(${n} − k)` }).s;
  s += panel(ks, ps, { ...ortak, y: 202, ...yr, renk: "c", ad: "x(k)·h(n − k)" }).s;
  // y(n): şimdiye kadar hesaplananlar dolu, şimdiki vurgulu
  const ns = ks.filter((m) => m <= n);
  const p = panel(ns, ns.map(yAl), { ...ortak, y: 292, ...yr, renk: "a", ad: "y(n)", xAd: "n" });
  s += p.s + `<circle cx="${p.e.X(n)}" cy="${p.e.Y(yAl(n))}" r="7" class="g-cerceve"/>`;
  s += yazi(620, 233, `Σ = ${kisa(toplam)}`, "g-kucuk g-kalin", "start");
  const carpimlar = ks.map((k, j) => (ps[j] !== 0 ? `${kisa(xs[j]!)}·${kisa(hs[j]!)}` : "")).filter(Boolean);
  return { s, toplam, carpimlar, uzunluk: y.length, yBas, ySon: yBas + y.length - 1 };
}

// ---- G-H4-05: Kaydırma kuralı ----
export const KK_X = [1, 2, 3];
export const KK_H = [4, 5, 6];
export function kaydirmaCiz(n: number) {
  const hucre = 46;
  const x0 = 200;
  let s = yazi(20, 38, "x(k)", "g-kucuk g-kalin", "start") + yazi(20, 98, `h(${n} − k)`, "g-kucuk g-kalin", "start") + yazi(20, 158, "çarpımlar", "g-kucuk g-kalin", "start");
  // k ekseni
  for (let k = -2; k <= 4; k++) s += yazi(x0 + k * hucre + hucre / 2, 12, `k = ${k}`, "g-mini g-soluk");
  KK_X.forEach((v, k) => (s += kutu(x0 + k * hucre, 22, hucre - 4, 32, "g-dolu") + yazi(x0 + k * hucre + hucre / 2 - 2, 38, String(v), "g-kod g-kalin")));
  // h ters çevrilmiş: h(n − k), k = n − j
  const carpim: string[] = [];
  let toplam = 0;
  KK_H.forEach((v, j) => {
    const k = n - j;
    const xx = x0 + k * hucre;
    const ust = KK_X[k];
    s += kutu(xx, 82, hucre - 4, 32, ust !== undefined ? "g-ton1" : "g-kutu") + yazi(xx + hucre / 2 - 2, 98, String(v), "g-kod g-kalin");
    if (ust !== undefined) {
      s += cizgi([[xx + hucre / 2 - 2, 56], [xx + hucre / 2 - 2, 80]], "g-kesik");
      s += yazi(xx + hucre / 2 - 2, 158, `${ust}·${v}`, "g-kod g-kucuk");
      carpim.push(`${ust}·${v}`);
      toplam += ust * v;
    }
  });
  s += ok([[x0 - 2 * hucre, 128], [x0 + 5 * hucre - 6, 128]], "g-kesik") + yazi(x0 + 5 * hucre, 128, "alt şerit sağa kayar", "g-mini g-soluk", "start");
  s += yazi(x0 + 1.5 * hucre, 192, `y(${n}) = ${carpim.join(" + ")} = ${toplam}`, "g-kod g-kucuk g-kalin");
  return { s, toplam, carpim };
}

// ---- G-H4-06: Çarpım tablosu ve polinom çarpımı ----
export function tabloCiz(n: number) {
  const h = 46;
  const x0 = 140;
  const y0 = 48;
  let s = yazi(x0 + 1.5 * h, 16, "x(i)", "g-mini g-kalin") + yazi(x0 - 50, y0 + 1.5 * h, "h(j)", "g-mini g-kalin");
  KK_X.forEach((v, i) => (s += yazi(x0 + i * h + h / 2, y0 - 14, String(v), "g-kod g-kalin")));
  KK_H.forEach((v, j) => (s += yazi(x0 - 16, y0 + j * h + h / 2, String(v), "g-kod g-kalin")));
  const terimler: string[] = [];
  let toplam = 0;
  KK_H.forEach((b, j) =>
    KK_X.forEach((a, i) => {
      const sec = i + j === n;
      s += kutu(x0 + i * h, y0 + j * h, h - 3, h - 3, sec ? "g-ton1" : "g-kutu");
      s += yazi(x0 + i * h + h / 2 - 1, y0 + j * h + h / 2 - 1, String(a * b), `g-kod${sec ? " g-kalin" : " g-soluk"}`);
      if (sec) {
        terimler.push(String(a * b));
        toplam += a * b;
      }
    }),
  );
  const y = konv(KK_X, KK_H);
  s += yazi(330, 66, "aynı köşegendeki (i + j = n) hücrelerin toplamı y(n)'dir", "g-mini g-soluk", "start");
  s += yazi(330, 98, `y(${n}) = ${terimler.join(" + ")} = ${toplam}`, "g-kod g-kucuk g-kalin", "start");
  s += yazi(330, 140, "polinom olarak: (1 + 2z + 3z²)(4 + 5z + 6z²)", "g-kod g-mini", "start");
  s += yazi(330, 160, `= ${y.map((c, k) => (k === 0 ? `${c}` : `${c}z${k === 1 ? "" : ["", "", "²", "³", "⁴"][k]}`)).join(" + ")}`, "g-kod g-mini", "start");
  s += yazi(330, 188, "katsayılar: y = x * h", "g-mini g-soluk", "start");
  return { s, toplam, terimler };
}

// ---- G-H4-07: İki (ya da daha çok) zarın toplamı ----
export type ZarTuru = "adil" | "hileli";
export const ZAR_PMF: Record<ZarTuru, number[]> = {
  adil: [1, 1, 1, 1, 1, 1].map((v) => v / 6),
  hileli: [0.1, 0.1, 0.1, 0.1, 0.1, 0.5],
};
export function zarCiz(tur: ZarTuru, adet: number) {
  let p = ZAR_PMF[tur];
  for (let i = 1; i < adet; i++) p = konv(p, ZAR_PMF[tur]);
  const enAz = adet;
  const toplamlar = p.map((_, i) => enAz + i);
  const ust = Math.max(...p) * 1.2;
  const e = eksen({
    x: 50, y: 30, w: 560, h: 160, x0: 0.5, x1: 6 * adet + 0.5 + 0.12 * 6 * adet, y0: 0, y1: ust,
    xTik: aralik(adet, adet > 2 ? 2 : 1, 6 * adet), yTik: tikler(0, ust, 3), izgara: true, xAd: "toplam", yAd: "olasılık",
  });
  // Çubuklar arasında boşluk olsun diye her çubuğu ayrı çiz
  let s = e.s;
  toplamlar.forEach((t, i) => (s += cubuklar(e, [t - 0.38, t + 0.38], [p[i]!], "g-cubuk-a")));
  const enBuyuk = p.indexOf(Math.max(...p));
  const ortalama = p.reduce((a, v, i) => a + v * toplamlar[i]!, 0);
  return { s, p, toplamlar, enOlasi: toplamlar[enBuyuk]!, enOlasiP: p[enBuyuk]!, ortalama };
}

// ---- G-H4-08: Hareketli ortalama ----
const MA_N = 120;
const maVeri = (() => {
  const r = rastgele(41);
  const ns = aralik(0, 1, MA_N - 1);
  const temiz = ns.map((n) => Math.sin((2 * Math.PI * n) / 60) + 0.5 * Math.sin((2 * Math.PI * n) / 23));
  // Yaklaşık normal gürültü: on düzgün sayının toplamı
  const gurultu = ns.map(() => {
    let t = 0;
    for (let i = 0; i < 10; i++) t += r() - 0.5;
    return 0.45 * t;
  });
  return { ns, temiz, kirli: temiz.map((v, i) => v + gurultu[i]!) };
})();
export function hareketliOrtalamaCiz(M: number) {
  const { ns, temiz, kirli } = maVeri;
  const h = new Array<number>(M).fill(1 / M);
  const y = konv(kirli, h).slice(0, MA_N);
  const e = eksen({ x: 40, y: 22, w: 570, h: 170, x0: 0, x1: MA_N - 1, y0: -3, y1: 3, xTik: aralik(0, 20, 120).filter((t) => t < MA_N), yTik: [-2, -1, 0, 1, 2], izgara: true, xAd: "n" });
  let s = e.s + egri(e, ns, kirli, "g-seri-b g-ince") + egri(e, ns, temiz, "g-kesik") + egri(e, ns, y, "g-seri-a");
  s += cizgi([[60, 228], [78, 228]], "g-seri-b g-ince") + yazi(84, 228, "gürültülü giriş", "g-mini", "start");
  s += cizgi([[210, 228], [228, 228]], "g-kesik") + yazi(234, 228, "gürültüsüz sinyal", "g-mini", "start");
  s += cizgi([[370, 228], [388, 228]], "g-seri-a") + yazi(394, 228, `M = ${M} noktalı ortalama`, "g-mini", "start");
  // Gürültü kalıntısı: geçiş bölgesini ve gecikmeyi hesaba katarak
  const gec = (M - 1) / 2;
  let hata = 0;
  let adet = 0;
  for (let n = M; n < MA_N; n++) {
    const t = n - gec;
    const ref = Math.sin((2 * Math.PI * t) / 60) + 0.5 * Math.sin((2 * Math.PI * t) / 23);
    hata += (y[n]! - ref) ** 2;
    adet++;
  }
  return { s, gecikme: gec, rmsHata: Math.sqrt(hata / Math.max(1, adet)) };
}

// ---- G-H4-09: Otokorelasyon ----
export function korelasyonCiz(a: number) {
  const ns = aralik(-10, 1, 10);
  const x = ns.map((n) => (n >= 0 ? a ** n : 0));
  const r = ns.map((n) => a ** Math.abs(n) / (1 - a * a));
  const ust = Math.max(1.2, (1 / (1 - a * a)) * 1.15);
  const o = { w: 260, h: 140, k0: -10, k1: 10, tik: aralik(-10, 5, 10) };
  let s = yazi(170, 12, "x(n) = aⁿu(n)", "g-mini g-kalin") + yazi(500, 12, "rₓₓ(n) = Σₖ x(k) x(n + k)", "g-mini g-kalin");
  s += panel(ns, x, { ...o, x: 40, y: 36, y0: 0, y1: 1.2 }).s;
  s += panel(ns, r, { ...o, x: 370, y: 36, y0: 0, y1: ust, renk: "c" }).s;
  return { s, r0: 1 / (1 - a * a) };
}

export const HAFTA_4_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H4-01",
    baslik: "Konvolüsyon: kaydırılmış dürtü yanıtlarının toplamı",
    aciklama: "Üç örnekli bir giriş ve üç örnekli bir dürtü yanıtı. Her giriş örneği, kendi konumuna kaydırılmış ve kendi değeriyle çarpılmış bir dürtü yanıtı üretir; çıkış bu katkıların toplamıdır.",
    en: 660, boy: 392, icerik: superpozisyon(3).s, etkilesim: "superpozisyon",
  },
  {
    kod: "G-H4-02",
    baslik: "Konvolüsyonun özellikleri ve sistem bağlantıları",
    aciklama: "Değişme: giriş ile dürtü yanıtının yeri değiştirilebilir. Birleşme: art arda bağlı iki sistem, dürtü yanıtlarının konvolüsyonuna eşit tek bir sistemdir. Dağılma: paralel bağlı iki sistem, dürtü yanıtlarının toplamına eşit tek bir sistemdir.",
    en: 620, boy: 280, icerik: ozellikler(),
  },
  {
    kod: "G-H4-03",
    baslik: "Üstel dizi ile birim basamağın konvolüsyonu",
    aciklama: "aⁿu(n) dizisi ve bunun birim basamakla konvolüsyonu. Çıkış (1 − aⁿ⁺¹)/(1 − a) kapalı formuyla büyür ve 1/(1 − a) değerine yaklaşır.",
    en: 640, boy: 240, icerik: dogrudanCiz(0.8).s, etkilesim: "dogrudan",
  },
  {
    kod: "G-H4-04",
    baslik: "Grafik yöntem: ters çevir, kaydır, çarp, topla",
    aciklama: "Dört satır: x(k); ters çevrilmiş ve n kadar kaydırılmış h(n − k); ikisinin örnek bazında çarpımı; ve çarpımların toplamından elde edilen y(n). n değiştikçe ters çevrilmiş dizi kayar.",
    en: 680, boy: 382, icerik: grafikCiz(0, 1).s, etkilesim: "grafikyontem",
  },
  {
    kod: "G-H4-05",
    baslik: "Kaydırma kuralı",
    aciklama: "Üst şeritte x(k) değerleri, alt şeritte ters çevrilmiş h değerleri. Alt şerit her adımda bir sağa kayar; üst üste gelen sayılar çarpılıp toplanınca y(n) bulunur.",
    en: 600, boy: 206, icerik: kaydirmaCiz(1).s, etkilesim: "kaydirma",
  },
  {
    kod: "G-H4-06",
    baslik: "Çarpım tablosu ve polinom çarpımı",
    aciklama: "x'in ve h'nin elemanlarının bütün ikili çarpımlarından oluşan tablo. Aynı ters köşegendeki hücrelerin toplamı y(n)'yi verir; bu, iki polinomun çarpımındaki katsayılarla aynıdır.",
    en: 640, boy: 200, icerik: tabloCiz(2).s, etkilesim: "tablo",
  },
  {
    kod: "G-H4-07",
    baslik: "Zarların toplamının olasılık dağılımı",
    aciklama: "Bir zarın olasılık kütle fonksiyonunun kendisiyle konvolüsyonu, iki zarın toplamının dağılımını verir. Zar sayısı arttıkça dağılım çan eğrisine benzer.",
    en: 640, boy: 226, icerik: zarCiz("adil", 2).s, etkilesim: "zar",
  },
  {
    kod: "G-H4-08",
    baslik: "Hareketli ortalama ile yumuşatma",
    aciklama: "Gürültülü bir sinyal, gürültüsüz hali ve M noktalı hareketli ortalamanın çıkışı. M büyüdükçe gürültü azalır ama çıkış gecikir ve hızlı değişimler de yumuşar.",
    en: 640, boy: 242, icerik: hareketliOrtalamaCiz(5).s, etkilesim: "hareketliortalama",
  },
  {
    kod: "G-H4-09",
    baslik: "Üstel dizinin otokorelasyonu",
    aciklama: "Solda aⁿu(n), sağda bunun otokorelasyonu. Otokorelasyon n = 0'a göre simetriktir ve en büyük değerini n = 0'da, dizinin enerjisi olarak alır.",
    en: 660, boy: 206, icerik: korelasyonCiz(0.7).s, etkilesim: "korelasyon",
  },
];
