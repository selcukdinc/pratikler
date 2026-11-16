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

describe("HMAC, PBKDF2, HKDF", () => {
  it("RFC test vektörleri", async () => {
    const { hmacSha256, pbkdf2, hkdf } = await import("./webcrypto");
    const { hex, hextenBayt } = await import("./bayt");
    // RFC 4231 test 2
    expect(hex(await hmacSha256(metindenBayt("Jefe"), metindenBayt("what do ya want for nothing?")))).toBe("5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843");
    // RFC 7914 / PBKDF2-HMAC-SHA256, P="password", S="salt", c=1
    expect(hex(await pbkdf2("password", metindenBayt("salt"), 1))).toBe("120fb6cffcf8b32c43e7225256c4f837a86548c92ccc35480805987cb70be17b");
    // RFC 5869 test 1 girdileri, info boş
    const okm = await hkdf(hextenBayt("0b".repeat(22)), hextenBayt("000102030405060708090a0b0c"), "", 42);
    expect(hex(okm).slice(0, 32)).toBe("b2a3d45126d31fb6828ef00d76c6d54e"); // Node crypto.hkdfSync ile aynı
  });
});

describe("imza ve anahtar değişimi", () => {
  it("Ed25519 ve P-256 imzası; değişen mesaj reddedilir", async () => {
    const { imzaAnahtari, imzala, dogrula, acikAnahtarBayt } = await import("./webcrypto");
    for (const tercih of ["Ed25519", "ECDSA P-256"] as const) {
      const { tur, cift } = await imzaAnahtari(tercih);
      expect(tur).toBe(tercih);
      const m = metindenBayt("100 TL öde");
      const s = await imzala(tur, cift.privateKey, m);
      expect(s.length).toBe(64);
      expect((await acikAnahtarBayt(cift.publicKey)).length).toBe(tur === "Ed25519" ? 32 : 65);
      expect(await dogrula(tur, cift.publicKey, s, m)).toBe(true);
      expect(await dogrula(tur, cift.publicKey, s, metindenBayt("900 TL öde"))).toBe(false);
    }
  });
  it("iki taraf aynı ortak sırra ulaşır", async () => {
    const { degisimAnahtari, ortakSir } = await import("./webcrypto");
    const { hex } = await import("./bayt");
    const a = await degisimAnahtari();
    const b = await degisimAnahtari();
    expect(hex(await ortakSir(a.tur, a.cift.privateKey, b.cift.publicKey))).toBe(hex(await ortakSir(b.tur, b.cift.privateKey, a.cift.publicKey)));
  });
});
