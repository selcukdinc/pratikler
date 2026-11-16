// 18. ünitenin oyuncakları: küçük boyutlu LWE (gürültülü denklemler) ve ML-KEM'in (Kyber)
// iskeletini gösteren küçük bir modül-LWE anahtar kapsülleme. Parametreler gerçeğinden çok
// küçüktür; gerçek ML-KEM-768'de n = 256, k = 3, q = 3329 ve sıkıştırma, NTT, FO dönüşümü vardır.
import { normal, tohumlu } from "./saldiri";

const mod = (a: number, q: number) => ((a % q) + q) % q;

// ---------------- LWE oyunu ----------------

export interface Denklem {
  a: number[];
  b: number;
}

export interface LweOrnegi {
  q: number;
  s: number[];
  denklemler: Denklem[];
  hatalar: number[];
}

// b = a·s + e (mod q); e küçük bir tam sayı (|e| ≤ sinir)
export function lweUret(n: number, m: number, q: number, sinir: number, tohum: number): LweOrnegi {
  const r = tohumlu(tohum);
  const tam = (k: number) => Math.floor(r() * k);
  const s = Array.from({ length: n }, () => tam(q));
  const hatalar: number[] = [];
  const denklemler = Array.from({ length: m }, () => {
    const a = Array.from({ length: n }, () => tam(q));
    const e = sinir ? tam(2 * sinir + 1) - sinir : 0;
    hatalar.push(e);
    return { a, b: mod(a.reduce((t, x, i) => t + x * s[i]!, 0) + e, q) };
  });
  return { q, s, denklemler, hatalar };
}

// Modüler ters (q asal)
export function tersMod(a: number, q: number): number {
  let [r0, r1, t0, t1] = [mod(a, q), q, 1, 0];
  while (r1) {
    const b = Math.floor(r0 / r1);
    [r0, r1] = [r1, r0 - b * r1];
    [t0, t1] = [t1, t0 - b * t1];
  }
  if (r0 !== 1) throw new Error("ters yok");
  return mod(t0, q);
}

// İlk n denklemi gürültüyü yok sayarak Gauss eleme ile çözer; tekil sistemde null
export function gaussCoz(denklemler: Denklem[], n: number, q: number): number[] | null {
  const M = denklemler.slice(0, n).map((d) => [...d.a.map((x) => mod(x, q)), mod(d.b, q)]);
  for (let c = 0; c < n; c++) {
    const p = M.findIndex((satir, i) => i >= c && satir[c] !== 0);
    if (p < 0) return null;
    [M[c], M[p]] = [M[p]!, M[c]!];
    const t = tersMod(M[c]![c]!, q);
    M[c] = M[c]!.map((x) => mod(x * t, q));
    for (let i = 0; i < n; i++) if (i !== c) {
      const f = M[i]![c]!;
      M[i] = M[i]!.map((x, j) => mod(x - f * M[c]![j]!, q));
    }
  }
  return M.map((satir) => satir[n]!);
}

// Merkezlenmiş kalan: (-q/2, q/2]
export const merkez = (x: number, q: number) => {
  const y = mod(x, q);
  return y > q / 2 ? y - q : y;
};

// Bütün s adaylarını dener; her denklemde kalan |b − a·s| ≤ sinir olanları döndürür
export function kabaKuvvet(o: LweOrnegi, sinir: number): { adaylar: number[][]; deneme: number } {
  const n = o.s.length;
  const adaylar: number[][] = [];
  const s = new Array(n).fill(0);
  let deneme = 0;
  const gez = (i: number) => {
    if (i === n) {
      deneme++;
      if (o.denklemler.every((d) => Math.abs(merkez(d.b - d.a.reduce((t, x, j) => t + x * s[j], 0), o.q)) <= sinir)) adaylar.push([...s]);
      return;
    }
    for (let v = 0; v < o.q; v++) {
      s[i] = v;
      gez(i + 1);
    }
  };
  gez(0);
  return { adaylar, deneme };
}

// ---------------- Oyuncak modül-LWE KEM ----------------

export interface KemParam {
  n: number;
  k: number;
  q: number;
  eta: number;
}

export const OYUNCAK: KemParam = { n: 16, k: 2, q: 3329, eta: 2 };

type Poli = number[];

const poliTopla = (a: Poli, b: Poli, q: number) => a.map((x, i) => mod(x + b[i]!, q));
const poliCikar = (a: Poli, b: Poli, q: number) => a.map((x, i) => mod(x - b[i]!, q));

// x^n + 1 modunda çarpım (negasiklik): x^n = −1
export function poliCarp(a: Poli, b: Poli, q: number): Poli {
  const n = a.length;
  const y = new Array(n).fill(0);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const k = i + j;
      if (k < n) y[k] += a[i]! * b[j]!;
      else y[k - n] -= a[i]! * b[j]!;
    }
  return y.map((x) => mod(x, q));
}

// Merkezlenmiş binom dağılımı: küçük katsayılar (−eta..eta)
function kucuk(p: KemParam, r: () => number): Poli {
  return Array.from({ length: p.n }, () => {
    let t = 0;
    for (let i = 0; i < p.eta; i++) t += (r() < 0.5 ? 1 : 0) - (r() < 0.5 ? 1 : 0);
    return mod(t, p.q);
  });
}

const vektorKucuk = (p: KemParam, r: () => number) => Array.from({ length: p.k }, () => kucuk(p, r));
const icCarpim = (a: Poli[], b: Poli[], q: number) => a.reduce((t, x, i) => poliTopla(t, poliCarp(x, b[i]!, q), q), new Array(a[0]!.length).fill(0));

export interface AcikAnahtar {
  A: Poli[][];
  t: Poli[];
}

export function anahtarUret(p: KemParam, tohum: number): { acik: AcikAnahtar; gizli: Poli[]; hata: Poli[] } {
  const r = tohumlu(tohum);
  const A = Array.from({ length: p.k }, () => Array.from({ length: p.k }, () => Array.from({ length: p.n }, () => Math.floor(r() * p.q))));
  const s = vektorKucuk(p, r);
  const e = vektorKucuk(p, r);
  // t = A·s + e
  const t = A.map((satir, i) => poliTopla(icCarpim(satir, s, p.q), e[i]!, p.q));
  return { acik: { A, t }, gizli: s, hata: e };
}

export interface Sifreli {
  u: Poli[];
  v: Poli;
}

// m: n bitlik mesaj (0/1 dizisi); her bit q/2'ye ölçeklenip gürültünün arkasına saklanır
export function sifrele(p: KemParam, pk: AcikAnahtar, m: number[], tohum: number): Sifreli {
  const r = tohumlu(tohum);
  const rr = vektorKucuk(p, r);
  const e1 = vektorKucuk(p, r);
  const e2 = kucuk(p, r);
  const yarim = Math.round(p.q / 2);
  // u = Aᵀ·r + e1, v = tᵀ·r + e2 + ⌈q/2⌋·m
  const u = Array.from({ length: p.k }, (_, j) => poliTopla(icCarpim(pk.A.map((satir) => satir[j]!), rr, p.q), e1[j]!, p.q));
  const v = poliTopla(poliTopla(icCarpim(pk.t, rr, p.q), e2, p.q), m.map((b) => b * yarim), p.q);
  return { u, v };
}

// v − sᵀ·u = eᵀr + e2 − sᵀe1 + ⌈q/2⌋·m: katsayı q/2'ye yakınsa 1, 0'a yakınsa 0
export function coz(p: KemParam, s: Poli[], c: Sifreli): { m: number[]; kalan: number[] } {
  const w = poliCikar(c.v, icCarpim(s, c.u, p.q), p.q);
  const kalan = w.map((x) => merkez(x, p.q));
  return { m: kalan.map((x) => (Math.abs(x) > p.q / 4 ? 1 : 0)), kalan };
}

// Bayt boyları: gerçek parametrelerle (FIPS 203) ve karşılaştırma için klasik anahtarlar
export const BOYLAR = [
  { ad: "X25519", acik: 32, sifreli: 32, not: "Kuantum bilgisayara karşı güvensiz (Shor)" },
  { ad: "ML-KEM-512", acik: 800, sifreli: 768, not: "AES-128 düzeyi" },
  { ad: "ML-KEM-768", acik: 1184, sifreli: 1088, not: "AES-192 düzeyi; TLS'te varsayılan" },
  { ad: "ML-KEM-1024", acik: 1568, sifreli: 1568, not: "AES-256 düzeyi" },
  { ad: "RSA-3072", acik: 384, sifreli: 384, not: "Kuantum bilgisayara karşı güvensiz (Shor)" },
];

export { normal };
