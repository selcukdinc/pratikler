// Oyuncak AES (FIPS-197): adım adım izlenebilsin diye düz ve yavaş yazıldı. Sabit
// zamanlı değildir, yan kanallara açıktır; gerçek şifreleme için Web Crypto kullanılır.
// Doğruluğu aes.test.ts'te FIPS-197 test vektörleriyle ve Web Crypto ile sınanır.
//
// Durum (state) 16 baytlık dizidir ve FIPS-197'deki gibi SÜTUN sırasıyla dizilir:
// durum[r + 4c] = satır r, sütun c.
import { gfCarp } from "./sayi";

// GF(2^8)'de çarpma tersi (0'ın tersi 0 kabul edilir)
function gfTers(a: number): number {
  if (a === 0) return 0;
  // a^254 = a^-1 (a^255 = 1)
  let s = 1;
  let t = a;
  let u = 254;
  while (u) {
    if (u & 1) s = gfCarp(s, t);
    t = gfCarp(t, t);
    u >>= 1;
  }
  return s;
}

const sol = (x: number, n: number) => ((x << n) | (x >> (8 - n))) & 0xff;

// S-kutusu: önce GF(2^8)'de ters, sonra afin dönüşüm (b ⊕ b<<<1 ⊕ b<<<2 ⊕ b<<<3 ⊕ b<<<4 ⊕ 0x63)
export function sKutusuDegeri(x: number): number {
  const b = gfTers(x);
  return b ^ sol(b, 1) ^ sol(b, 2) ^ sol(b, 3) ^ sol(b, 4) ^ 0x63;
}

export const S_KUTUSU: readonly number[] = Array.from({ length: 256 }, (_, i) => sKutusuDegeri(i));
export const TERS_S_KUTUSU: readonly number[] = (() => {
  const t = new Array<number>(256);
  S_KUTUSU.forEach((v, i) => (t[v] = i));
  return t;
})();

export type Durum = number[];

export const subBytes = (d: Durum): Durum => d.map((x) => S_KUTUSU[x]!);
export const invSubBytes = (d: Durum): Durum => d.map((x) => TERS_S_KUTUSU[x]!);

// Satır r, r bayt sola döner
export const shiftRows = (d: Durum): Durum => d.map((_, i) => d[(i % 4) + 4 * ((Math.floor(i / 4) + (i % 4)) % 4)]!);
export const invShiftRows = (d: Durum): Durum => d.map((_, i) => d[(i % 4) + 4 * ((Math.floor(i / 4) - (i % 4) + 4) % 4)]!);

function sutunKaristir(d: Durum, m: number[][]): Durum {
  const y = new Array<number>(16);
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++) {
      let t = 0;
      for (let k = 0; k < 4; k++) t ^= gfCarp(m[r]![k]!, d[k + 4 * c]!);
      y[r + 4 * c] = t;
    }
  return y;
}
export const MIX_MATRISI = [[2, 3, 1, 1], [1, 2, 3, 1], [1, 1, 2, 3], [3, 1, 1, 2]];
const TERS_MIX = [[14, 11, 13, 9], [9, 14, 11, 13], [13, 9, 14, 11], [11, 13, 9, 14]];
export const mixColumns = (d: Durum) => sutunKaristir(d, MIX_MATRISI);
export const invMixColumns = (d: Durum) => sutunKaristir(d, TERS_MIX);

export const addRoundKey = (d: Durum, k: Durum): Durum => d.map((x, i) => x ^ k[i]!);

// Tur sayısı anahtar boyuna bağlıdır: 128 → 10, 192 → 12, 256 → 14
export const turSayisi = (anahtarBayt: number) => {
  if (anahtarBayt === 16) return 10;
  if (anahtarBayt === 24) return 12;
  if (anahtarBayt === 32) return 14;
  throw new Error("AES anahtarı 16, 24 ya da 32 bayt olur");
};

// Anahtar genişletme: 4·(Nr+1) kelime (32 bit); her tur anahtarı 4 kelimedir
export function anahtarGenislet(anahtar: Uint8Array): Durum[] {
  const nk = anahtar.length / 4;
  const nr = turSayisi(anahtar.length);
  const w: number[][] = [];
  for (let i = 0; i < nk; i++) w.push([...anahtar.slice(4 * i, 4 * i + 4)]);
  let rcon = 1;
  for (let i = nk; i < 4 * (nr + 1); i++) {
    let t = [...w[i - 1]!];
    if (i % nk === 0) {
      t = [t[1]!, t[2]!, t[3]!, t[0]!].map((x) => S_KUTUSU[x]!); // RotWord + SubWord
      t[0]! ^= rcon;
      rcon = gfCarp(rcon, 2);
    } else if (nk > 6 && i % nk === 4) t = t.map((x) => S_KUTUSU[x]!);
    w.push(w[i - nk]!.map((x, j) => x ^ t[j]!));
  }
  return Array.from({ length: nr + 1 }, (_, r) => w.slice(4 * r, 4 * r + 4).flat());
}

export type Adim = "Başlangıç" | "AddRoundKey" | "SubBytes" | "ShiftRows" | "MixColumns";
export interface IzAdimi {
  tur: number;
  adim: Adim;
  durum: Durum;
}

// Bir bloğu şifreler; iz istenirse her adımdan sonraki durumu döndürür
export function aesBlok(blok: Uint8Array, anahtar: Uint8Array | Durum[]): { cikis: Uint8Array; iz: IzAdimi[] } {
  const k = anahtar instanceof Uint8Array ? anahtarGenislet(anahtar) : anahtar;
  const nr = k.length - 1;
  let d: Durum = [...blok];
  const iz: IzAdimi[] = [{ tur: 0, adim: "Başlangıç", durum: d }];
  d = addRoundKey(d, k[0]!);
  iz.push({ tur: 0, adim: "AddRoundKey", durum: d });
  for (let r = 1; r <= nr; r++) {
    d = subBytes(d);
    iz.push({ tur: r, adim: "SubBytes", durum: d });
    d = shiftRows(d);
    iz.push({ tur: r, adim: "ShiftRows", durum: d });
    if (r < nr) {
      d = mixColumns(d);
      iz.push({ tur: r, adim: "MixColumns", durum: d });
    }
    d = addRoundKey(d, k[r]!);
    iz.push({ tur: r, adim: "AddRoundKey", durum: d });
  }
  return { cikis: Uint8Array.from(d), iz };
}

export const aesSifrele = (blok: Uint8Array, k: Uint8Array | Durum[]) => aesBlok(blok, k).cikis;

export function aesCoz(blok: Uint8Array, anahtar: Uint8Array | Durum[]): Uint8Array {
  const k = anahtar instanceof Uint8Array ? anahtarGenislet(anahtar) : anahtar;
  const nr = k.length - 1;
  let d: Durum = addRoundKey([...blok], k[nr]!);
  for (let r = nr - 1; r >= 0; r--) {
    d = invSubBytes(invShiftRows(d));
    d = addRoundKey(d, k[r]!);
    if (r > 0) d = invMixColumns(d);
  }
  return Uint8Array.from(d);
}
