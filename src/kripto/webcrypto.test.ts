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
