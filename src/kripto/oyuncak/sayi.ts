// OYUNCAK · gerçek kullanım için değil. Küçük sayılarla modüler aritmetik
// (Şifreleme pratiği, 3. ünite ve oyuncak RSA/Diffie-Hellman). BigInt kullanır,
// böylece ara çarpımlar taşmaz. Gerçek anahtarlar için Web Crypto kullanılır.

export const mod = (a: bigint, m: bigint) => ((a % m) + m) % m;

export function ebob(a: bigint, b: bigint): bigint {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b) [a, b] = [b, a % b];
  return a;
}

// Genişletilmiş Öklid: ax + by = ebob(a, b); adımlar ders tablosu için döner
export function genisOklid(a: bigint, b: bigint): { ebob: bigint; x: bigint; y: bigint; adimlar: { q: bigint; r: bigint; s: bigint; t: bigint }[] } {
  let [r0, r1] = [a, b];
  let [s0, s1] = [1n, 0n];
  let [t0, t1] = [0n, 1n];
  const adimlar = [{ q: 0n, r: r0, s: s0, t: t0 }, { q: 0n, r: r1, s: s1, t: t1 }];
  while (r1) {
    const q = r0 / r1;
    [r0, r1] = [r1, r0 - q * r1];
    [s0, s1] = [s1, s0 - q * s1];
    [t0, t1] = [t1, t0 - q * t1];
    adimlar.push({ q, r: r1, s: s1, t: t1 });
  }
  return { ebob: r0, x: s0, y: t0, adimlar };
}

export function modTers(a: bigint, m: bigint): bigint {
  const { ebob: g, x } = genisOklid(mod(a, m), m);
  if (g !== 1n) throw new Error(`${a} sayısının mod ${m} tersi yok`);
  return mod(x, m);
}

// Kare al ve çarp: üssün bitleri soldan sağa
export function modUs(taban: bigint, us: bigint, m: bigint): bigint {
  if (m === 1n) return 0n;
  let sonuc = 1n;
  for (const bit of us.toString(2)) {
    sonuc = (sonuc * sonuc) % m;
    if (bit === "1") sonuc = (sonuc * mod(taban, m)) % m;
  }
  return sonuc;
}

export function asalMi(n: bigint): boolean {
  if (n < 2n) return false;
  for (let d = 2n; d * d <= n; d++) if (n % d === 0n) return false;
  return true;
}

// Euler'in phi fonksiyonu (küçük sayılar için, çarpanlara ayırarak)
export function phi(n: bigint): bigint {
  let sonuc = n;
  let x = n;
  for (let p = 2n; p * p <= x; p++) {
    if (x % p === 0n) {
      while (x % p === 0n) x /= p;
      sonuc -= sonuc / p;
    }
  }
  if (x > 1n) sonuc -= sonuc / x;
  return sonuc;
}

// GF(2^8) çarpımı, AES'in indirgeme polinomuyla (x^8 + x^4 + x^3 + x + 1 = 0x11B)
export function gfCarp(a: number, b: number): number {
  let p = 0;
  for (let i = 0; i < 8; i++) {
    if (b & 1) p ^= a;
    const tasma = a & 0x80;
    a = (a << 1) & 0xff;
    if (tasma) a ^= 0x1b;
    b >>= 1;
  }
  return p;
}
export const xtime = (a: number) => gfCarp(a, 2);

// Doğrusal eşlik üreteci (LCG): x(n+1) = (a·x(n) + c) mod m. Tahmin edilebilir!
export function lcg(a: number, c: number, m: number, tohum: number, adet: number): number[] {
  const l: number[] = [];
  let x = tohum;
  for (let i = 0; i < adet; i++) l.push((x = (a * x + c) % m));
  return l;
}
