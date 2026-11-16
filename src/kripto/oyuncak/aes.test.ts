import { describe, expect, it } from "vitest";
import { aesBlok, aesCoz, aesSifrele, anahtarGenislet, mixColumns, S_KUTUSU, TERS_S_KUTUSU } from "./aes";
import { cbcCoz, cbcSifrele, ctr, dolgula, dolguyuKaldir, ecbSifrele } from "./modlar";
import { ceyrekTur, chacha20, chachaBlok } from "./chacha";
import { hex, hextenBayt, metindenBayt } from "../bayt";

const sira = (n: number) => Uint8Array.from({ length: n }, (_, i) => i);
const ACIK = hextenBayt("00112233445566778899aabbccddeeff");

describe("oyuncak AES (FIPS-197)", () => {
  it("S-kutusu bilinen değerler ve ters", () => {
    expect(S_KUTUSU[0x00]).toBe(0x63);
    expect(S_KUTUSU[0x53]).toBe(0xed);
    expect(S_KUTUSU[0xff]).toBe(0x16);
    expect(new Set(S_KUTUSU).size).toBe(256);
    for (let i = 0; i < 256; i++) expect(TERS_S_KUTUSU[S_KUTUSU[i]!]).toBe(i);
    for (let i = 0; i < 256; i++) expect(S_KUTUSU[i]).not.toBe(i);
  });
  it("MixColumns FIPS-197 örneği", () => {
    // db 13 53 45 -> 8e 4d a1 bc
    expect(mixColumns([0xdb, 0x13, 0x53, 0x45, ...Array(12).fill(0)]).slice(0, 4)).toEqual([0x8e, 0x4d, 0xa1, 0xbc]);
  });
  it("anahtar genişletme: AES-128'in son tur anahtarı", () => {
    const k = anahtarGenislet(hextenBayt("2b7e151628aed2a6abf7158809cf4f3c"));
    expect(k).toHaveLength(11);
    expect(hex(Uint8Array.from(k[10]!))).toBe("d014f9a8c9ee2589e13f0cc8b6630ca6");
  });
  it("AES-128, 192, 256 test vektörleri ve geri çözme", () => {
    const ornek: [number, string][] = [
      [16, "69c4e0d86a7b0430d8cdb78070b4c55a"],
      [24, "dda97ca4864cdfe06eaf70a0ec0d7191"],
      [32, "8ea2b7ca516745bfeafc49904b496089"],
    ];
    for (const [n, beklenen] of ornek) {
      const c = aesSifrele(ACIK, sira(n));
      expect(hex(c)).toBe(beklenen);
      expect(hex(aesCoz(c, sira(n)))).toBe(hex(ACIK));
    }
  });
  it("iz: AES-128'de 10 tur, son turda MixColumns yok", () => {
    const { iz } = aesBlok(ACIK, sira(16));
    expect(iz.filter((a) => a.adim === "MixColumns")).toHaveLength(9);
    expect(iz.filter((a) => a.adim === "SubBytes")).toHaveLength(10);
    // 1. turun başı FIPS-197 C.1: 00102030405060708090a0b0c0d0e0f0
    expect(hex(Uint8Array.from(iz[1]!.durum))).toBe("00102030405060708090a0b0c0d0e0f0");
  });
  it("Web Crypto ile aynı sonucu verir", async () => {
    const ham = sira(16);
    const k = await crypto.subtle.importKey("raw", ham, "AES-CBC", false, ["encrypt"]);
    // Tek blok, sıfır IV: CBC'nin ilk bloğu düz AES'tir
    const w = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-CBC", iv: new Uint8Array(16) }, k, ACIK));
    expect(hex(w.slice(0, 16))).toBe(hex(aesSifrele(ACIK, ham)));
  });
});

describe("oyuncak blok modları", () => {
  it("PKCS#7 dolgu", () => {
    expect([...dolgula(metindenBayt("MERHABA"))].slice(7)).toEqual(Array(9).fill(9));
    expect(dolgula(new Uint8Array(16))).toHaveLength(32);
    expect(dolguyuKaldir(dolgula(metindenBayt("abc")))).toEqual(metindenBayt("abc"));
    expect(() => dolguyuKaldir(Uint8Array.from([...Array(15).fill(0), 3]))).toThrow();
  });
  it("ECB aynı blokları aynı şifreler", () => {
    const c = ecbSifrele(new Uint8Array(32), sira(16));
    expect(hex(c.slice(0, 16))).toBe(hex(c.slice(16)));
  });
  it("CBC ve CTR Web Crypto ile aynı", async () => {
    const ham = sira(16);
    const iv = Uint8Array.from({ length: 16 }, (_, i) => 200 + i);
    const veri = dolgula(metindenBayt("Yarın 10'da kütüphanede buluşalım, kimseye söyleme."));
    const kc = await crypto.subtle.importKey("raw", ham, "AES-CBC", false, ["encrypt"]);
    const w = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-CBC", iv }, kc, veri));
    // Web Crypto dolguyu kendisi ekler; bizim veri zaten dolgulu olduğu için bir dolgu bloğu fazla
    expect(hex(w.slice(0, veri.length))).toBe(hex(cbcSifrele(veri, ham, iv)));
    expect(hex(cbcCoz(cbcSifrele(veri, ham, iv), ham, iv))).toBe(hex(veri));
    const kt = await crypto.subtle.importKey("raw", ham, "AES-CTR", false, ["encrypt"]);
    const sayac = Uint8Array.from([...Array(12).fill(7), 0xff, 0xff, 0xff, 0xfe]);
    const acik = metindenBayt("CTR modunda dolgu yok, uzunluk korunur.");
    const wt = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-CTR", counter: sayac, length: 32 }, kt, acik));
    expect(hex(ctr(acik, ham, sayac))).toBe(hex(wt));
  });
});

describe("oyuncak ChaCha20 (RFC 8439)", () => {
  it("çeyrek tur test vektörü", () => {
    const { sonuc, adimlar } = ceyrekTur(0x11111111, 0x01020304, 0x9b8d6f43, 0x01234567);
    expect(sonuc).toEqual([0xea2a92f4, 0xcb1cf8ce, 0x4581472e, 0x5881c4bb]);
    expect(adimlar).toHaveLength(12);
  });
  it("blok fonksiyonu test vektörü", () => {
    const blok = chachaBlok(sira(32), 1, hextenBayt("000000090000004a00000000"));
    expect(hex(blok)).toBe(
      "10f1e7e4d13b5915500fdd1fa32071c4c7d1f4c733c068030422aa9ac3d46c4ed2826446079faa0914c2d705d98b02a2b5129cd1de164eb9cbd083e8a2503c4e",
    );
  });
  it("şifreleme çözmeyle aynı işlem", () => {
    const n = hextenBayt("000000000000004a00000000");
    const m = metindenBayt("Ladies and Gentlemen of the class of '99: If I could offer you only one tip for the future, sunscreen would be it.");
    const c = chacha20(m, sira(32), n);
    expect(hex(c).slice(0, 32)).toBe("6e2e359a2568f98041ba0728dd0d6981");
    expect(chacha20(c, sira(32), n)).toEqual(m);
  });
});
