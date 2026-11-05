// Ders şekilleri için grafik yardımcıları: eksen takımı, eğri, stem (ayrık
// dizi), çubuk ve dolgu. Hem durağan şekillerde hem etkileşimli şekillerde
// (her çizimde SVG dizgisi yeniden üretilir) kullanılır.

import { cizgi, ok, yazi } from "./cizim";

const n = (x: number) => Math.round(x * 10) / 10;

export interface EksenSecenek {
  // Çizim alanı (piksel): sol üst köşe ve boyut
  x: number;
  y: number;
  w: number;
  h: number;
  // Veri aralığı
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  xTik?: number[];
  yTik?: number[];
  xEtiket?: (v: number) => string;
  yEtiket?: (v: number) => string;
  xAd?: string;
  yAd?: string;
  // Yatay ızgara çizgileri (yTik'lerde)
  izgara?: boolean;
  // Eksenler sıfırdan geçsin (ayrık sinyallerde), yoksa alanın altından/solundan
  sifirdan?: boolean;
}

export interface Eksen {
  s: string;
  X: (v: number) => number;
  Y: (v: number) => number;
  o: EksenSecenek;
}

// Ondalıkları gereksiz sıfırsız yazar: 0.25, 1, -0.5
export const kisa = (v: number, b = 3) => {
  const r = Number(v.toFixed(b));
  return (Object.is(r, -0) ? 0 : r).toString().replace(".", ",").replace("-", "−");
};

export function eksen(o: EksenSecenek): Eksen {
  const X = (v: number) => o.x + ((v - o.x0) / (o.x1 - o.x0)) * o.w;
  const Y = (v: number) => o.y + o.h - ((v - o.y0) / (o.y1 - o.y0)) * o.h;
  const xe = o.xEtiket ?? ((v: number) => kisa(v));
  const ye = o.yEtiket ?? ((v: number) => kisa(v));
  const ySifir = o.sifirdan && o.y0 <= 0 && o.y1 >= 0 ? Y(0) : o.y + o.h;
  const xSifir = o.sifirdan && o.x0 <= 0 && o.x1 >= 0 ? X(0) : o.x;
  let s = "";
  if (o.izgara) for (const t of o.yTik ?? []) s += cizgi([[o.x, Y(t)], [o.x + o.w, Y(t)]], "g-izgara");
  s += ok([[o.x - 4, ySifir], [o.x + o.w + 10, ySifir]], "g-cizgi g-eksen");
  s += ok([[xSifir, o.y + o.h + 4], [xSifir, o.y - 10]], "g-cizgi g-eksen");
  const xYazi = o.sifirdan ? ySifir : o.y + o.h;
  for (const t of o.xTik ?? []) {
    s += cizgi([[X(t), xYazi - 3], [X(t), xYazi + 3]], "g-cizgi g-eksen");
    s += yazi(X(t), Math.min(xYazi, o.y + o.h) + 14, xe(t), "g-mini g-soluk");
  }
  for (const t of o.yTik ?? []) {
    s += cizgi([[xSifir - 3, Y(t)], [xSifir + 3, Y(t)]], "g-cizgi g-eksen");
    s += yazi(o.x - 7, Y(t), ye(t), "g-mini g-soluk", "end");
  }
  if (o.xAd) s += yazi(o.x + o.w + 12, ySifir - 11, o.xAd, "g-mini g-kalin", "end");
  if (o.yAd) s += yazi(xSifir + 6, o.y - 12, o.yAd, "g-mini g-kalin", "start");
  return { s, X, Y, o };
}

// Görünür alan dışına taşan değerleri kırpar (çizim çerçeveden çıkmasın)
const kirp = (e: Eksen, v: number) => Math.max(e.o.y0, Math.min(e.o.y1, v));

export function egri(e: Eksen, xs: ArrayLike<number>, ys: ArrayLike<number>, cls = "g-seri-a"): string {
  let p = "";
  for (let i = 0; i < xs.length; i++) p += `${n(e.X(xs[i]!))},${n(e.Y(kirp(e, ys[i]!)))} `;
  return `<polyline points="${p.trim()}" class="${cls}"/>`;
}

// Fonksiyondan eğri: [a, b] aralığında adet noktada örnekler
export function fonksiyon(e: Eksen, f: (x: number) => number, cls = "g-seri-a", adet = 300, a = e.o.x0, b = e.o.x1) {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= adet; i++) {
    const x = a + ((b - a) * i) / adet;
    xs.push(x);
    ys.push(f(x));
  }
  return egri(e, xs, ys, cls);
}

// Ayrık dizi: her örnek için sıfırdan bir çubuk ve ucunda daire
export function stem(e: Eksen, xs: ArrayLike<number>, ys: ArrayLike<number>, renk: "a" | "b" | "c" | "d" = "a", r = 3.5): string {
  let s = "";
  const y0 = e.Y(Math.max(e.o.y0, Math.min(e.o.y1, 0)));
  for (let i = 0; i < xs.length; i++) {
    const x = n(e.X(xs[i]!));
    const y = n(e.Y(kirp(e, ys[i]!)));
    s += `<line x1="${x}" y1="${n(y0)}" x2="${x}" y2="${y}" class="g-stem g-stem-${renk}"/>`;
    s += `<circle cx="${x}" cy="${y}" r="${r}" class="g-stem-uc g-stem-${renk}"/>`;
  }
  return s;
}

// Çubuk grafik (histogram): her çubuk [kenar_i, kenar_i+1) aralığında
export function cubuklar(e: Eksen, kenarlar: ArrayLike<number>, ys: ArrayLike<number>, cls = "g-cubuk-a"): string {
  let s = "";
  const y0 = e.Y(Math.max(e.o.y0, 0));
  for (let i = 0; i < ys.length; i++) {
    const xa = e.X(kenarlar[i]!);
    const xb = e.X(kenarlar[i + 1]!);
    const y = e.Y(kirp(e, ys[i]!));
    s += `<rect x="${n(xa)}" y="${n(Math.min(y, y0))}" width="${n(Math.max(0.5, xb - xa))}" height="${n(Math.abs(y0 - y))}" class="${cls}"/>`;
  }
  return s;
}

// İki eğri arasında (ya da eğri ile sıfır arasında) dolgu
export function dolgu(e: Eksen, xs: ArrayLike<number>, ys: ArrayLike<number>, cls = "g-dolgu-a", taban = 0): string {
  let d = `M${n(e.X(xs[0]!))},${n(e.Y(taban))}`;
  for (let i = 0; i < xs.length; i++) d += ` L${n(e.X(xs[i]!))},${n(e.Y(kirp(e, ys[i]!)))}`;
  d += ` L${n(e.X(xs[xs.length - 1]!))},${n(e.Y(taban))} Z`;
  return `<path d="${d}" class="${cls}"/>`;
}

// Yatay kesikli seviye çizgisi ve sağında etiket
export function seviye(e: Eksen, y: number, etiket = "", cls = "g-kesik") {
  return cizgi([[e.o.x, e.Y(y)], [e.o.x + e.o.w, e.Y(y)]], cls) + (etiket ? yazi(e.o.x + e.o.w + 4, e.Y(y), etiket, "g-mini g-kalin", "start") : "");
}

// Göstergeler: renkli kısa çizgi ve ad
export function gosterge(x: number, y: number, ogeler: [string, string][], ara = 120) {
  return ogeler
    .map(([cls, ad], i) => cizgi([[x + i * ara, y], [x + i * ara + 18, y]], cls) + yazi(x + i * ara + 24, y, ad, "g-mini", "start"))
    .join("");
}

// Eksen için yuvarlak tik değerleri: 1, 2, 5 × 10^k adımlarla yaklaşık adet kadar
export function tikler(a: number, b: number, adet = 4) {
  const ham = (b - a) / adet;
  const us = 10 ** Math.floor(Math.log10(ham));
  const adim = [1, 2, 5, 10].map((k) => k * us).find((k) => k >= ham)!;
  const r: number[] = [];
  for (let v = Math.ceil(a / adim) * adim; v <= b + 1e-9; v += adim) r.push(Number(v.toFixed(10)));
  return r;
}

// Eşit aralıklı sayılar: aralik(0, 1, 5) = [0, 1, 2, 3, 4, 5]
export const aralik = (a: number, adim: number, b: number) => {
  const r: number[] = [];
  for (let v = a; v <= b + 1e-9; v += adim) r.push(Number(v.toFixed(10)));
  return r;
};

// Tohumlu rastgele sayı (şekiller her çizimde aynı görünsün)
export function rastgele(tohum: number) {
  let a = tohum >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
