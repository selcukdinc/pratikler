// Bayt araçları: metin (UTF-8) <-> bayt <-> hex <-> Base64. Kodlamadır, şifreleme
// değildir: anahtar yoktur, herkes geri çevirebilir (Şifreleme pratiği, 1. ünite).

export const metindenBayt = (s: string) => new TextEncoder().encode(s);
export const bayttanMetin = (b: Uint8Array) => new TextDecoder().decode(b);

export const hex = (b: Uint8Array) => [...b].map((x) => x.toString(16).padStart(2, "0")).join("");

export function hextenBayt(s: string): Uint8Array {
  const t = s.replace(/\s+/g, "");
  if (t.length % 2 || /[^0-9a-f]/i.test(t)) throw new Error("geçersiz hex");
  return Uint8Array.from(t.match(/../g) ?? [], (x) => parseInt(x, 16));
}

export function base64(b: Uint8Array): string {
  let s = "";
  for (const x of b) s += String.fromCharCode(x);
  return btoa(s);
}

export const base64tenBayt = (s: string) => Uint8Array.from(atob(s.replace(/\s+/g, "")), (c) => c.charCodeAt(0));

// Bir baytın 8 bitlik deseni: 0x41 -> "01000001"
export const bitler = (x: number) => x.toString(2).padStart(8, "0");

export function xorBayt(a: Uint8Array, b: Uint8Array): Uint8Array {
  if (a.length !== b.length) throw new Error("uzunluklar farklı");
  return a.map((x, i) => x ^ b[i]!);
}
