// Tarayıcının Web Crypto API'siyle gerçek işlemler. Oyuncak değildir; ders şekilleri
// ve Sanal Lab araçları gerçek çıktıyı göstermek için bunları kullanır.
import { hex, metindenBayt } from "./bayt";

const subtle = () => globalThis.crypto.subtle;
// TypeScript 5.7+ BufferSource için ArrayBuffer tabanlı dizi ister; kopya bunu garanti eder.
const tampon = (b: Uint8Array): Uint8Array<ArrayBuffer> => new Uint8Array(b);

export async function sha256(veri: Uint8Array | string): Promise<Uint8Array> {
  const b = typeof veri === "string" ? metindenBayt(veri) : veri;
  return new Uint8Array(await subtle().digest("SHA-256", tampon(b)));
}
export const sha256Hex = async (veri: Uint8Array | string) => hex(await sha256(veri));

export const rastgeleBayt = (n: number) => globalThis.crypto.getRandomValues(new Uint8Array(n));

export async function aesGcmAnahtari(): Promise<CryptoKey> {
  return subtle().generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}

export async function aesGcmSifrele(anahtar: CryptoKey, acik: Uint8Array, nonce = rastgeleBayt(12)): Promise<{ nonce: Uint8Array; sifreli: Uint8Array }> {
  return { nonce, sifreli: new Uint8Array(await subtle().encrypt({ name: "AES-GCM", iv: tampon(nonce) }, anahtar, tampon(acik))) };
}

export async function aesGcmCoz(anahtar: CryptoKey, nonce: Uint8Array, sifreli: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array(await subtle().decrypt({ name: "AES-GCM", iv: tampon(nonce) }, anahtar, tampon(sifreli)));
}

export async function anahtarHex(anahtar: CryptoKey): Promise<string> {
  return hex(new Uint8Array(await subtle().exportKey("raw", anahtar)));
}
