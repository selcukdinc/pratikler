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

// Ham anahtar baytlarından Web Crypto anahtarı (tarayıcıdan çıkmaz)
export const aesAnahtariAl = (ham: Uint8Array, ad: "AES-CTR" | "AES-GCM" | "AES-CBC") =>
  subtle().importKey("raw", tampon(ham), ad, false, ["encrypt", "decrypt"]);

// AES-CTR: sayaç 16 bayt, son 32 bit artar. Şifreleme ile çözme aynı işlemdir.
export async function aesCtr(anahtar: CryptoKey, sayac: Uint8Array, veri: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array(await subtle().encrypt({ name: "AES-CTR", counter: tampon(sayac), length: 32 }, anahtar, tampon(veri)));
}

// Tek bir AES bloğu: sıfır IV'li CBC'nin ilk bloğu düz AES şifrelemesidir (Web Crypto ECB sunmaz).
// Oyuncak AES'in çıktısını gerçek uygulamayla karşılaştırmak için.
export async function aesTekBlok(ham: Uint8Array, blok: Uint8Array): Promise<Uint8Array> {
  const k = await aesAnahtariAl(ham, "AES-CBC");
  const c = new Uint8Array(await subtle().encrypt({ name: "AES-CBC", iv: new Uint8Array(16) }, k, tampon(blok)));
  return c.slice(0, 16);
}

export async function hmacSha256(anahtar: Uint8Array, veri: Uint8Array): Promise<Uint8Array> {
  const k = await subtle().importKey("raw", tampon(anahtar), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await subtle().sign("HMAC", k, tampon(veri)));
}

// PBKDF2-HMAC-SHA256: paroladan 32 baytlık anahtar (yavaş hash; 9. ünite)
export async function pbkdf2(parola: string, tuz: Uint8Array, yineleme: number): Promise<Uint8Array> {
  const k = await subtle().importKey("raw", tampon(metindenBayt(parola)), "PBKDF2", false, ["deriveBits"]);
  return new Uint8Array(await subtle().deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: tampon(tuz), iterations: yineleme }, k, 256));
}

// HKDF-SHA256 (RFC 5869): güçlü bir sırdan info etiketine göre anahtar
export async function hkdf(sir: Uint8Array, tuz: Uint8Array, info: string, bayt = 32): Promise<Uint8Array> {
  const k = await subtle().importKey("raw", tampon(sir), "HKDF", false, ["deriveBits"]);
  return new Uint8Array(await subtle().deriveBits({ name: "HKDF", hash: "SHA-256", salt: tampon(tuz), info: tampon(metindenBayt(info)) }, k, bayt * 8));
}
