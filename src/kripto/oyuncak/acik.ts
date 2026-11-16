// Oyuncak açık anahtarlı kriptografi: küçük sayılarla RSA, Diffie-Hellman ve sonlu cisim
// üzerinde eliptik eğri. Ders kitabı halleridir (dolgu yok, sabit zamanlı değil); gerçek
// kullanım için Web Crypto (ECDSA, Ed25519, X25519) kullanılır. acik.test.ts sınar.
import { ebob, modTers, modUs, mod } from "./sayi";

// ---------------- RSA ----------------

export interface RsaAnahtari {
  p: bigint;
  q: bigint;
  n: bigint;
  phi: bigint;
  e: bigint;
  d: bigint;
}

export function rsaAnahtari(p: bigint, q: bigint, e = 65537n): RsaAnahtari {
  if (p === q) throw new Error("p ile q farklı olmalı");
  const n = p * q;
  const phi = (p - 1n) * (q - 1n);
  if (ebob(e, phi) !== 1n) throw new Error(`e = ${e} ile φ(n) = ${phi} aralarında asal değil`);
  return { p, q, n, phi, e, d: modTers(e, phi) };
}

export const rsaSifrele = (m: bigint, k: { n: bigint; e: bigint }) => modUs(m, k.e, k.n);
export const rsaCoz = (c: bigint, k: { n: bigint; d: bigint }) => modUs(c, k.d, k.n);
// Ders kitabı imzası: s = m^d mod n, doğrulama s^e mod n = m
export const rsaImzala = (m: bigint, k: { n: bigint; d: bigint }) => modUs(m, k.d, k.n);

// Deneme bölmesiyle çarpanlara ayırma; kaç bölme yapıldığını da döndürür
export function carpanlaraAyir(n: bigint): { p: bigint; q: bigint; bolme: number } | null {
  if (n % 2n === 0n) return { p: 2n, q: n / 2n, bolme: 1 };
  let bolme = 1;
  for (let i = 3n; i * i <= n; i += 2n) {
    bolme++;
    if (n % i === 0n) return { p: i, q: n / i, bolme };
  }
  return null;
}

// ---------------- Diffie-Hellman ----------------

export function dh(g: bigint, p: bigint, a: bigint, b: bigint) {
  const A = modUs(g, a, p);
  const B = modUs(g, b, p);
  return { A, B, sirAyse: modUs(B, a, p), sirAli: modUs(A, b, p) };
}

// Ayrık logaritma: g^x = h (mod p) için x'i sırayla deneyerek bulur
export function ayrikLog(g: bigint, h: bigint, p: bigint): { x: bigint; deneme: number } | null {
  let t = 1n;
  for (let x = 0n; x < p; x++) {
    if (t === mod(h, p)) return { x, deneme: Number(x) + 1 };
    t = (t * g) % p;
  }
  return null;
}

// ---------------- Eliptik eğri (F_p üzerinde, y² = x³ + ax + b) ----------------

export type Nokta = { x: bigint; y: bigint } | null; // null: sonsuzdaki nokta (O)

export interface Egri {
  a: bigint;
  b: bigint;
  p: bigint;
}

export const egrideMi = (P: Nokta, E: Egri) => P === null || mod(P.y * P.y - (P.x ** 3n + E.a * P.x + E.b), E.p) === 0n;

export function topla(P: Nokta, Q: Nokta, E: Egri): Nokta {
  if (P === null) return Q;
  if (Q === null) return P;
  const { p } = E;
  if (P.x === Q.x && mod(P.y + Q.y, p) === 0n) return null; // P + (-P) = O
  const egim =
    P.x === Q.x && P.y === Q.y
      ? mod((3n * P.x * P.x + E.a) * modTers(mod(2n * P.y, p), p), p) // teğet
      : mod((Q.y - P.y) * modTers(mod(Q.x - P.x, p), p), p); // kiriş
  const x = mod(egim * egim - P.x - Q.x, p);
  return { x, y: mod(egim * (P.x - x) - P.y, p) };
}

export const tersi = (P: Nokta, E: Egri): Nokta => (P === null ? null : { x: P.x, y: mod(-P.y, E.p) });

// Çiftle ve topla: k'nin bitleri soldan sağa; her adım kaydedilir
export function skalerCarp(k: bigint, P: Nokta, E: Egri): { sonuc: Nokta; adimlar: { islem: string; nokta: Nokta }[] } {
  let R: Nokta = null;
  const adimlar: { islem: string; nokta: Nokta }[] = [];
  for (const bit of k.toString(2)) {
    if (R !== null) {
      R = topla(R, R, E);
      adimlar.push({ islem: "ikiye katla", nokta: R });
    }
    if (bit === "1") {
      R = topla(R, P, E);
      adimlar.push({ islem: "P ekle", nokta: R });
    }
  }
  return { sonuc: R, adimlar };
}

export function egriNoktalari(E: Egri): { x: bigint; y: bigint }[] {
  const y: { x: bigint; y: bigint }[] = [];
  const kareler = new Map<bigint, bigint[]>();
  for (let t = 0n; t < E.p; t++) {
    const k = (t * t) % E.p;
    kareler.set(k, [...(kareler.get(k) ?? []), t]);
  }
  for (let x = 0n; x < E.p; x++) for (const yy of kareler.get(mod(x ** 3n + E.a * x + E.b, E.p)) ?? []) y.push({ x, y: yy });
  return y;
}

// P'nin mertebesi: kP = O olan en küçük k
export function mertebe(P: Nokta, E: Egri, sinir = 100000): number {
  let R = P;
  for (let k = 1; k <= sinir; k++) {
    if (R === null) return k;
    R = topla(R, P, E);
  }
  return -1;
}
