// Oyuncak ChaCha20 (RFC 8439): çeyrek tur adım adım izlenebilsin diye ayrık yazıldı.
// Gerçek kullanım için değildir; chacha.test.ts RFC 8439 test vektörleriyle sınar.

const dondur = (x: number, n: number) => ((x << n) | (x >>> (32 - n))) >>> 0;

export interface CeyrekAdim {
  islem: string;
  a: number;
  b: number;
  c: number;
  d: number;
}

// Çeyrek tur: dört toplama, dört XOR, dört döndürme (16, 12, 8, 7 bit). ARX yapısı.
export function ceyrekTur(a: number, b: number, c: number, d: number): { sonuc: [number, number, number, number]; adimlar: CeyrekAdim[] } {
  const adimlar: CeyrekAdim[] = [];
  const kaydet = (islem: string) => adimlar.push({ islem, a, b, c, d });
  a = (a + b) >>> 0; kaydet("a += b");
  d = (d ^ a) >>> 0; kaydet("d ^= a");
  d = dondur(d, 16); kaydet("d <<<= 16");
  c = (c + d) >>> 0; kaydet("c += d");
  b = (b ^ c) >>> 0; kaydet("b ^= c");
  b = dondur(b, 12); kaydet("b <<<= 12");
  a = (a + b) >>> 0; kaydet("a += b");
  d = (d ^ a) >>> 0; kaydet("d ^= a");
  d = dondur(d, 8); kaydet("d <<<= 8");
  c = (c + d) >>> 0; kaydet("c += d");
  b = (b ^ c) >>> 0; kaydet("b ^= c");
  b = dondur(b, 7); kaydet("b <<<= 7");
  return { sonuc: [a, b, c, d], adimlar };
}

// "expand 32-byte k" sabitleri
export const SABITLER = [0x61707865, 0x3320646e, 0x79622d32, 0x6b206574];

const okuLE = (b: Uint8Array, i: number) => (b[i]! | (b[i + 1]! << 8) | (b[i + 2]! << 16) | (b[i + 3]! << 24)) >>> 0;

// Başlangıç durumu: 4 sabit, 8 anahtar kelimesi, 1 sayaç, 3 nonce kelimesi (4×4 kelime)
export function baslangicDurumu(anahtar: Uint8Array, sayac: number, nonce: Uint8Array): number[] {
  if (anahtar.length !== 32 || nonce.length !== 12) throw new Error("ChaCha20: 32 bayt anahtar, 12 bayt nonce");
  return [...SABITLER, ...Array.from({ length: 8 }, (_, i) => okuLE(anahtar, 4 * i)), sayac >>> 0, ...Array.from({ length: 3 }, (_, i) => okuLE(nonce, 4 * i))];
}

const SUTUNLAR = [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]];
const KOSEGENLER = [[0, 5, 10, 15], [1, 6, 11, 12], [2, 7, 8, 13], [3, 4, 9, 14]];

// 20 tur = 10 çift tur (sütun turu + köşegen turu); sonunda başlangıç durumu eklenir
export function chachaBlok(anahtar: Uint8Array, sayac: number, nonce: Uint8Array): Uint8Array {
  const bas = baslangicDurumu(anahtar, sayac, nonce);
  const x = [...bas];
  for (let i = 0; i < 10; i++)
    for (const grup of [...SUTUNLAR, ...KOSEGENLER]) {
      const [p, q, r, s] = grup as [number, number, number, number];
      const { sonuc } = ceyrekTur(x[p]!, x[q]!, x[r]!, x[s]!);
      [x[p], x[q], x[r], x[s]] = sonuc;
    }
  const y = new Uint8Array(64);
  x.forEach((v, i) => {
    const t = (v + bas[i]!) >>> 0;
    y[4 * i] = t & 0xff;
    y[4 * i + 1] = (t >>> 8) & 0xff;
    y[4 * i + 2] = (t >>> 16) & 0xff;
    y[4 * i + 3] = t >>> 24;
  });
  return y;
}

export function chacha20(veri: Uint8Array, anahtar: Uint8Array, nonce: Uint8Array, sayac = 1): Uint8Array {
  const y = new Uint8Array(veri.length);
  for (let i = 0; i < veri.length; i += 64) {
    const akis = chachaBlok(anahtar, sayac + i / 64, nonce);
    for (let j = 0; j < 64 && i + j < veri.length; j++) y[i + j] = veri[i + j]! ^ akis[j]!;
  }
  return y;
}
