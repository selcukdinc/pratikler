// Eşzamanlı SHA-1 (Git'in nesne kimlikleri için). Tarayıcının SubtleCrypto'su
// eşzamansız olduğu ve motor her komutta onlarca nesneyi anında hashlediği için
// küçük bir saf TypeScript uygulaması kullanılır. Güvenlik için değil, Git ile aynı
// kimlikleri üretmek içindir.

const metinKodla = new TextEncoder();

export const baytlar = (s: string): Uint8Array => metinKodla.encode(s);

export function birlestir(parcalar: Uint8Array[]): Uint8Array {
  const toplam = parcalar.reduce((t, p) => t + p.length, 0);
  const sonuc = new Uint8Array(toplam);
  let i = 0;
  for (const p of parcalar) {
    sonuc.set(p, i);
    i += p.length;
  }
  return sonuc;
}

const sola = (x: number, n: number) => (x << n) | (x >>> (32 - n));

export function sha1(veri: Uint8Array): string {
  const bitUzunluk = veri.length * 8;
  const dolguluUzunluk = (((veri.length + 8) >> 6) + 1) << 6;
  const m = new Uint8Array(dolguluUzunluk);
  m.set(veri);
  m[veri.length] = 0x80;
  const g = new DataView(m.buffer);
  // 64 bitlik uzunluk; 2^32 bitten büyük girdi beklenmez ama üst yarı da yazılır
  g.setUint32(dolguluUzunluk - 8, Math.floor(bitUzunluk / 0x100000000));
  g.setUint32(dolguluUzunluk - 4, bitUzunluk >>> 0);

  let h0 = 0x67452301;
  let h1 = 0xefcdab89;
  let h2 = 0x98badcfe;
  let h3 = 0x10325476;
  let h4 = 0xc3d2e1f0;
  const w = new Int32Array(80);

  for (let blok = 0; blok < dolguluUzunluk; blok += 64) {
    for (let i = 0; i < 16; i++) w[i] = g.getInt32(blok + i * 4);
    for (let i = 16; i < 80; i++) w[i] = sola(w[i - 3]! ^ w[i - 8]! ^ w[i - 14]! ^ w[i - 16]!, 1);
    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    for (let i = 0; i < 80; i++) {
      let f: number;
      let k: number;
      if (i < 20) {
        f = (b & c) | (~b & d);
        k = 0x5a827999;
      } else if (i < 40) {
        f = b ^ c ^ d;
        k = 0x6ed9eba1;
      } else if (i < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = 0x8f1bbcdc;
      } else {
        f = b ^ c ^ d;
        k = 0xca62c1d6;
      }
      const t = (sola(a, 5) + f + e + k + w[i]!) | 0;
      e = d;
      d = c;
      c = sola(b, 30);
      b = a;
      a = t;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
  }
  return [h0, h1, h2, h3, h4].map((h) => (h >>> 0).toString(16).padStart(8, "0")).join("");
}

export function hexBaytlar(hex: string): Uint8Array {
  const s = new Uint8Array(hex.length / 2);
  for (let i = 0; i < s.length; i++) s[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return s;
}
