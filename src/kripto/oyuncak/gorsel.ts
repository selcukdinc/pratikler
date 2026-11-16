// 16. ünitenin oyuncak uygulamaları: Naor-Shamir görsel kriptografi (2'den 2 pay), LSB
// steganografi ve anahtarlı piksel karıştırma. Görseller RGBA bayt dizisi (ImageData.data)
// olarak işlenir; tarayıcıya bağlı değildir, gorsel.test.ts'te sınanır.

// ---------------- Görsel kriptografi ----------------

// 2×2 alt piksel desenleri: her desende dört hücreden ikisi siyah (1). Tek başına bakan
// her pikselde aynı oranda siyah görür; bu yüzden tek pay hiçbir bilgi taşımaz.
export const DESENLER: number[][] = [
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

export interface Paylar {
  // Her pay 2w × 2h boyunda; 1 siyah, 0 saydam
  a: Uint8Array;
  b: Uint8Array;
  w: number;
  h: number;
}

// bitler: w × h, 1 siyah (mesaj), 0 beyaz. rastgele: her piksel için bir bayt.
// Beyaz pikselde iki pay aynı deseni, siyah pikselde birbirinin tümleyenini alır.
export function gorselPaylar(bitler: Uint8Array, w: number, h: number, rastgele: Uint8Array): Paylar {
  const W = 2 * w;
  const a = new Uint8Array(W * 2 * h);
  const b = new Uint8Array(W * 2 * h);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const d = DESENLER[rastgele[i]! % DESENLER.length]!;
      for (let k = 0; k < 4; k++) {
        const j = (2 * y + (k >> 1)) * W + 2 * x + (k & 1);
        a[j] = d[k]!;
        b[j] = bitler[i] ? 1 - d[k]! : d[k]!;
      }
    }
  return { a, b, w: W, h: 2 * h };
}

// Saydamlıklar üst üste konunca: siyah her zaman kazanır (mantıksal VEYA)
export const ustUste = (a: Uint8Array, b: Uint8Array) => a.map((x, i) => x | b[i]!);

// Üst üste konmuş görüntüde bir pikselin (2×2 blok) kaç alt hücresi siyah: beyaz 2, siyah 4
export function blokSiyah(u: Uint8Array, W: number, x: number, y: number): number {
  let s = 0;
  for (let k = 0; k < 4; k++) s += u[(2 * y + (k >> 1)) * W + 2 * x + (k & 1)]!;
  return s;
}

// ---------------- LSB steganografi ----------------

// Gizli veri RGBA dizisinin R, G, B kanallarının seçilen bitine sırayla yazılır (alfa
// atlanır). Başta 32 bitlik uzunluk alanı vardır.
export const kanallar = (n: number) => (n / 4) * 3;
export const kapasite = (piksel: number, bitSayisi = 1) => Math.max(0, Math.floor((piksel * 3 * bitSayisi - 32) / 8));

function* kanalSirasi(uzunluk: number) {
  for (let i = 0; i < uzunluk; i++) if (i % 4 !== 3) yield i;
}

export function lsbGizle(rgba: Uint8ClampedArray, veri: Uint8Array, bit = 0): Uint8ClampedArray {
  const y = new Uint8ClampedArray(rgba);
  const bitler: number[] = [];
  const n = veri.length;
  for (let k = 31; k >= 0; k--) bitler.push((n >>> k) & 1);
  for (const v of veri) for (let k = 7; k >= 0; k--) bitler.push((v >> k) & 1);
  if (bitler.length > kanallar(rgba.length)) throw new Error("Mesaj bu görsele sığmıyor");
  let j = 0;
  for (const i of kanalSirasi(y.length)) {
    if (j >= bitler.length) break;
    y[i] = (y[i]! & ~(1 << bit)) | (bitler[j++]! << bit);
  }
  return y;
}

export function lsbOku(rgba: Uint8ClampedArray, bit = 0): Uint8Array | null {
  const bitler: number[] = [];
  for (const i of kanalSirasi(rgba.length)) bitler.push((rgba[i]! >> bit) & 1);
  if (bitler.length < 32) return null;
  let n = 0;
  for (let k = 0; k < 32; k++) n = n * 2 + bitler[k]!;
  if (n > (bitler.length - 32) / 8) return null;
  const y = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    let v = 0;
    for (let k = 0; k < 8; k++) v = (v << 1) | bitler[32 + 8 * i + k]!;
    y[i] = v;
  }
  return y;
}

// Seçilen bit düzlemi: her kanalın o biti 0 ya da 255 olarak (RGBA)
export function bitDuzlemi(rgba: Uint8ClampedArray, bit: number): Uint8ClampedArray {
  const y = new Uint8ClampedArray(rgba.length);
  for (let i = 0; i < rgba.length; i++) y[i] = i % 4 === 3 ? 255 : (rgba[i]! >> bit) & 1 ? 255 : 0;
  return y;
}

// Bir bölgedeki kanalların en düşük bitinde 1 oranı (rastgele veri ~0,5; doğal görselde düz
// alanlar genelde 0 ya da 1'de toplanır)
export function lsbOrani(rgba: Uint8ClampedArray, bas: number, son: number): number {
  let bir = 0;
  let say = 0;
  for (let i = bas; i < Math.min(son, rgba.length); i++)
    if (i % 4 !== 3) {
      bir += rgba[i]! & 1;
      say++;
    }
  return say ? bir / say : 0;
}

// ---------------- Anahtarlı piksel karıştırma ----------------

// xorshift32: oyuncak, tohumu bilen her şeyi yeniden üretir
export function xorshift(tohum: number) {
  let s = tohum >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s;
  };
}

// Fisher-Yates ile 0..n-1 permütasyonu
export function permutasyon(n: number, tohum: number): Uint32Array {
  const p = Uint32Array.from({ length: n }, (_, i) => i);
  const r = xorshift(tohum);
  for (let i = n - 1; i > 0; i--) {
    const j = r() % (i + 1);
    [p[i], p[j]] = [p[j]!, p[i]!];
  }
  return p;
}

// Pikselleri (4 baytlık gruplar) yer değiştirir: i. çıkış pikseli p[i]. giriş pikselidir
export function pikselKaristir(rgba: Uint8ClampedArray, p: Uint32Array): Uint8ClampedArray {
  const y = new Uint8ClampedArray(rgba.length);
  for (let i = 0; i < p.length; i++) y.set(rgba.subarray(4 * p[i]!, 4 * p[i]! + 4), 4 * i);
  return y;
}

export function pikselGeriAl(rgba: Uint8ClampedArray, p: Uint32Array): Uint8ClampedArray {
  const y = new Uint8ClampedArray(rgba.length);
  for (let i = 0; i < p.length; i++) y.set(rgba.subarray(4 * i, 4 * i + 4), 4 * p[i]!);
  return y;
}

// Renk baytlarının histogramı (0-255; R, G ve B kanallarının hepsi, alfa hariç)
export function histogram(rgba: Uint8ClampedArray): Uint32Array {
  const h = new Uint32Array(256);
  for (let i = 0; i < rgba.length; i++) if (i % 4 !== 3) h[rgba[i]!]!++;
  return h;
}
