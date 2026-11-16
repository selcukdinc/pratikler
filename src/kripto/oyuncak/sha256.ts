// Oyuncak SHA-256 (FIPS 180-4): dolgu, mesaj takvimi ve 64 tur adım adım izlenebilsin diye
// düz yazıldı. Ayrıca sıkıştırmayı verilen bir ara durumdan başlatabilir; length extension
// atölyesi (8. ünite) bunu kullanır. Gerçek hash için Web Crypto kullanılır; sha256.test.ts
// sonuçları Web Crypto ile karşılaştırır.

const K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

// İlk sekiz asalın kareköklerinin kesirli kısımları
export const BASLANGIC = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

const sag = (x: number, n: number) => ((x >>> n) | (x << (32 - n))) >>> 0;
const S0 = (x: number) => sag(x, 2) ^ sag(x, 13) ^ sag(x, 22);
const S1 = (x: number) => sag(x, 6) ^ sag(x, 11) ^ sag(x, 25);
const s0 = (x: number) => sag(x, 7) ^ sag(x, 18) ^ (x >>> 3);
const s1 = (x: number) => sag(x, 17) ^ sag(x, 19) ^ (x >>> 10);
const Ch = (e: number, f: number, g: number) => (e & f) ^ (~e & g);
const Maj = (a: number, b: number, c: number) => (a & b) ^ (a & c) ^ (b & c);

// Dolgu: 0x80, sonra sıfırlar, en sonda 64 bitlik büyük-sonlu bit uzunluğu; toplam 64'ün katı.
// toplamUzunluk verilirse uzunluk alanına o yazılır (length extension'da önceki bloklar sayılır).
export function dolgu(uzunlukBayt: number, toplamUzunluk = uzunlukBayt): Uint8Array {
  const sifir = (55 - (uzunlukBayt % 64) + 64) % 64;
  const y = new Uint8Array(1 + sifir + 8);
  y[0] = 0x80;
  const dv = new DataView(y.buffer);
  const bit = toplamUzunluk * 8;
  dv.setUint32(y.length - 8, Math.floor(bit / 2 ** 32));
  dv.setUint32(y.length - 4, bit >>> 0);
  return y;
}

export function mesajTakvimi(blok: Uint8Array): number[] {
  const dv = new DataView(blok.buffer, blok.byteOffset, 64);
  const w: number[] = [];
  for (let t = 0; t < 16; t++) w.push(dv.getUint32(4 * t));
  for (let t = 16; t < 64; t++) w.push((s1(w[t - 2]!) + w[t - 7]! + s0(w[t - 15]!) + w[t - 16]!) >>> 0);
  return w;
}

export interface TurIzi {
  tur: number;
  durum: number[]; // a..h, turdan sonra
}

// Bir 64 baytlık bloğu sıkıştırır: yeni ara durum (H) ve istenirse her turun a..h değerleri
export function sikistir(H: number[], blok: Uint8Array, iz?: TurIzi[]): number[] {
  const w = mesajTakvimi(blok);
  let [a, b, c, d, e, f, g, h] = H as [number, number, number, number, number, number, number, number];
  for (let t = 0; t < 64; t++) {
    const T1 = (h + S1(e) + Ch(e, f, g) + K[t]! + w[t]!) >>> 0;
    const T2 = (S0(a) + Maj(a, b, c)) >>> 0;
    h = g;
    g = f;
    f = e;
    e = (d + T1) >>> 0;
    d = c;
    c = b;
    b = a;
    a = (T1 + T2) >>> 0;
    iz?.push({ tur: t, durum: [a, b, c, d, e, f, g, h] });
  }
  return [a, b, c, d, e, f, g, h].map((x, i) => (x + H[i]!) >>> 0);
}

const bayt = (H: number[]) => {
  const y = new Uint8Array(32);
  const dv = new DataView(y.buffer);
  H.forEach((x, i) => dv.setUint32(4 * i, x));
  return y;
};

export const durumdanBayt = bayt;
export function bayttanDurum(b: Uint8Array): number[] {
  const dv = new DataView(b.buffer, b.byteOffset, 32);
  return Array.from({ length: 8 }, (_, i) => dv.getUint32(4 * i));
}

// Hash: isteğe bağlı başlangıç durumu ve "daha önce işlenmiş" bayt sayısıyla (length extension)
export function sha256Oyuncak(veri: Uint8Array, secenek: { H?: number[]; onceki?: number } = {}): Uint8Array {
  const onceki = secenek.onceki ?? 0;
  const tam = new Uint8Array(veri.length + dolgu(onceki + veri.length).length);
  tam.set(veri);
  tam.set(dolgu(onceki + veri.length, onceki + veri.length), veri.length);
  let H = secenek.H ?? BASLANGIC;
  for (let i = 0; i < tam.length; i += 64) H = sikistir(H, tam.subarray(i, i + 64));
  return bayt(H);
}

// Tek bloklu mesajın bütün izi (SHA-256 adım gezgini için)
export function tekBlokIzi(veri: Uint8Array): { blok: Uint8Array; w: number[]; iz: TurIzi[]; sonuc: Uint8Array } | null {
  if (veri.length > 55) return null;
  const blok = new Uint8Array(64);
  blok.set(veri);
  blok.set(dolgu(veri.length), veri.length);
  const iz: TurIzi[] = [];
  const H = sikistir(BASLANGIC, blok, iz);
  return { blok, w: mesajTakvimi(blok), iz, sonuc: bayt(H) };
}
