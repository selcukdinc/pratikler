import { describe, expect, it } from "vitest";
import { aesGcmAnahtari, aesGcmCoz, aesGcmSifrele, sha256Hex } from "./webcrypto";
import { bayttanMetin, metindenBayt } from "./bayt";

describe("Web Crypto sarmalayıcıları", () => {
  it("SHA-256 bilinen değer", async () => {
    expect(await sha256Hex("abc")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  });
  it("AES-GCM şifreler, çözer ve bozulan metni reddeder", async () => {
    const k = await aesGcmAnahtari();
    const { nonce, sifreli } = await aesGcmSifrele(k, metindenBayt("merhaba"));
    expect(bayttanMetin(await aesGcmCoz(k, nonce, sifreli))).toBe("merhaba");
    sifreli[0]! ^= 1;
    await expect(aesGcmCoz(k, nonce, sifreli)).rejects.toThrow();
  });
});

describe("AES-CTR ve tek blok", () => {
  it("FIPS-197 vektörü ve CTR'nin kendi tersi olması", async () => {
    const { aesTekBlok, aesAnahtariAl, aesCtr } = await import("./webcrypto");
    const { hex, hextenBayt } = await import("./bayt");
    const k = Uint8Array.from({ length: 16 }, (_, i) => i);
    expect(hex(await aesTekBlok(k, hextenBayt("00112233445566778899aabbccddeeff")))).toBe("69c4e0d86a7b0430d8cdb78070b4c55a");
    const a = await aesAnahtariAl(k, "AES-CTR");
    const s = new Uint8Array(16);
    const m = metindenBayt("ödeme: 100 TL");
    expect(bayttanMetin(await aesCtr(a, s, await aesCtr(a, s, m)))).toBe("ödeme: 100 TL");
  });
});
