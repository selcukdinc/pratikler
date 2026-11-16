import { describe, expect, it } from "vitest";
import { bayttanDurum, dolgu, sha256Oyuncak, tekBlokIzi } from "./sha256";
import { hex, metindenBayt } from "../bayt";

const gercek = async (b: Uint8Array) => hex(new Uint8Array(await crypto.subtle.digest("SHA-256", new Uint8Array(b))));

describe("oyuncak SHA-256", () => {
  it("bilinen değerler ve Web Crypto ile aynı", async () => {
    expect(hex(sha256Oyuncak(metindenBayt("abc")))).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    expect(hex(sha256Oyuncak(new Uint8Array(0)))).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    for (const n of [1, 55, 56, 63, 64, 65, 119, 120, 200]) {
      const b = Uint8Array.from({ length: n }, (_, i) => (i * 37 + n) & 0xff);
      expect(hex(sha256Oyuncak(b)), String(n)).toBe(await gercek(b));
    }
  });
  it("dolgu boyu", () => {
    expect(dolgu(3).length).toBe(61);
    expect(dolgu(55).length).toBe(9);
    expect(dolgu(56).length).toBe(72);
  });
  it("tek blok izi 64 tur", () => {
    const iz = tekBlokIzi(metindenBayt("abc"))!;
    expect(iz.iz).toHaveLength(64);
    expect(hex(iz.sonuc)).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    expect(tekBlokIzi(new Uint8Array(56))).toBeNull();
  });
  it("length extension: gizliyi bilmeden geçerli hash", async () => {
    const gizli = metindenBayt("cok-gizli-anahtar");
    const mesaj = metindenBayt("kullanici=ayse&rol=ogrenci");
    const ek = metindenBayt("&rol=admin");
    const imza = sha256Oyuncak(new Uint8Array([...gizli, ...mesaj]));
    const L = gizli.length + mesaj.length;
    const pad = dolgu(L);
    const sahte = sha256Oyuncak(ek, { H: bayttanDurum(imza), onceki: L + pad.length });
    expect(hex(sahte)).toBe(await gercek(new Uint8Array([...gizli, ...mesaj, ...pad, ...ek])));
  });
});
