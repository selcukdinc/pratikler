// Oyuncak blok modları (ECB, CBC, CTR) ve PKCS#7 dolgusu; oyuncak AES'in üstünde çalışır.
// ECB penguen deneyi ve hata yayılımı şekli bunları kullanır. Web Crypto ECB sunmaz;
// CBC ve CTR çıktıları modlar.test.ts'te Web Crypto'yla karşılaştırılır.
import { aesCoz, aesSifrele, anahtarGenislet, type Durum } from "./aes";

export const BLOK = 16;

// PKCS#7: n bayt eksikse n tane n değerli bayt eklenir; tam blokta 16 bayt 0x10 eklenir
export function dolgula(veri: Uint8Array, blok = BLOK): Uint8Array {
  const n = blok - (veri.length % blok);
  const y = new Uint8Array(veri.length + n);
  y.set(veri);
  y.fill(n, veri.length);
  return y;
}

export function dolguyuKaldir(veri: Uint8Array, blok = BLOK): Uint8Array {
  const n = veri[veri.length - 1] ?? 0;
  if (n < 1 || n > blok || n > veri.length) throw new Error("dolgu hatalı");
  for (let i = veri.length - n; i < veri.length; i++) if (veri[i] !== n) throw new Error("dolgu hatalı");
  return veri.slice(0, veri.length - n);
}

const bloklar = (veri: Uint8Array) => {
  if (veri.length % BLOK) throw new Error("uzunluk blok boyunun katı olmalı");
  return Array.from({ length: veri.length / BLOK }, (_, i) => veri.subarray(i * BLOK, (i + 1) * BLOK));
};
const birlestir = (parcalar: Uint8Array[]) => {
  const y = new Uint8Array(parcalar.reduce((t, p) => t + p.length, 0));
  let i = 0;
  for (const p of parcalar) {
    y.set(p, i);
    i += p.length;
  }
  return y;
};
const xor = (a: Uint8Array, b: Uint8Array) => a.map((x, i) => x ^ b[i]!);
const anahtar = (k: Uint8Array | Durum[]) => (k instanceof Uint8Array ? anahtarGenislet(k) : k);

// Dolgu verilen girdiye uygulanmaz; çağıran dolgulanmış (ya da blok katı) veri verir
export const ecbSifrele = (veri: Uint8Array, k: Uint8Array | Durum[]) => {
  const g = anahtar(k);
  return birlestir(bloklar(veri).map((b) => aesSifrele(b, g)));
};
export const ecbCoz = (veri: Uint8Array, k: Uint8Array | Durum[]) => {
  const g = anahtar(k);
  return birlestir(bloklar(veri).map((b) => aesCoz(b, g)));
};

export function cbcSifrele(veri: Uint8Array, k: Uint8Array | Durum[], iv: Uint8Array): Uint8Array {
  const g = anahtar(k);
  let onceki = iv;
  return birlestir(
    bloklar(veri).map((b) => {
      onceki = aesSifrele(xor(b, onceki), g);
      return onceki;
    }),
  );
}
export function cbcCoz(veri: Uint8Array, k: Uint8Array | Durum[], iv: Uint8Array): Uint8Array {
  const g = anahtar(k);
  let onceki = iv;
  return birlestir(
    bloklar(veri).map((b) => {
      const a = xor(aesCoz(b, g), onceki);
      onceki = b;
      return a;
    }),
  );
}

// CTR: sayaç bloğu = 16 baytlık başlangıç değeri, son 4 bayt büyük-sonlu sayaç olarak artar
// (Web Crypto'daki length: 32 ile aynı). Akış şifresidir; dolgu gerekmez, şifreleme = çözme.
export function ctr(veri: Uint8Array, k: Uint8Array | Durum[], sayac: Uint8Array): Uint8Array {
  const g = anahtar(k);
  const y = new Uint8Array(veri.length);
  const s = Uint8Array.from(sayac);
  const dv = new DataView(s.buffer);
  for (let i = 0; i < veri.length; i += BLOK) {
    const akis = aesSifrele(s, g);
    for (let j = 0; j < BLOK && i + j < veri.length; j++) y[i + j] = veri[i + j]! ^ akis[j]!;
    dv.setUint32(12, (dv.getUint32(12) + 1) >>> 0);
  }
  return y;
}
