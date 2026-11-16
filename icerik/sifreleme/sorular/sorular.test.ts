// Şifreleme sorularının cevapları oyuncak uygulamalarla sınanır: meydan okumalardaki
// şifreli metinler gerçekten verilen açık metne çözülüyor mu, hesap sorularının
// cevap anahtarı doğru mu.
import { describe, expect, it } from "vitest";
import { sorular } from "./index.ts";
import { YERINE_KOYMA_METNI } from "./unite-4.ts";
import { IKI_ZAMAN_C1, IKI_ZAMAN_C2 } from "./unite-5.ts";
import { aesBlok, anahtarGenislet, S_KUTUSU } from "../../../src/kripto/oyuncak/aes.ts";
import { dolgula } from "../../../src/kripto/oyuncak/modlar.ts";
import { ALFABE, atbas, citCoz, frekans, sezarCoz, vigenereCoz, yerineKoy } from "../../../src/kripto/oyuncak/klasik.ts";
import { ebob, gfCarp, lcg, modTers, modUs, phi } from "../../../src/kripto/oyuncak/sayi.ts";
import { base64tenBayt, bayttanMetin, hex, hextenBayt, metindenBayt, xorBayt } from "../../../src/kripto/bayt.ts";
import { sayiEslesir, metinEslesir } from "../../../shared/grade.ts";

const bul = (ad: string) => {
  const s = sorular.find((x) => x.id === `sf-${ad}`);
  if (!s) throw new Error(`soru yok: ${ad}`);
  return s;
};
// Sorunun metnindeki ilk ~kod~ parçası
const kod = (ad: string, sira = 0) => [...bul(ad).soru.matchAll(/~([^~]+)~/g)][sira]![1]!;
const yazmaCevabi = (ad: string) => {
  const s = bul(ad);
  if (s.tip !== "fill") throw new Error(ad);
  return s.bosluklar[0]!;
};
const sayiDogru = (ad: string, deger: string) => {
  const s = bul(ad);
  if (s.tip !== "num") throw new Error(ad);
  return s.bosluklar[0]!.some((b) => sayiEslesir(b, deger));
};
const mcqDogru = (ad: string) => {
  const s = bul(ad);
  if (s.tip !== "mcq") throw new Error(ad);
  return s.secenekler[s.dogru]!;
};

describe("şifreleme: meydan okumalar çözülüyor", () => {
  const cozulur = (ad: string, acik: string) => expect(yazmaCevabi(ad).some((c) => metinEslesir(c, acik)), ad).toBe(true);
  it("Sezar", () => {
    cozulur("u4-coz-3", sezarCoz(kod("u4-coz-3"), 3));
    cozulur("u4-kaba-kuvvet", sezarCoz(kod("u4-kaba-kuvvet"), 11));
  });
  it("Atbaş, Vigenère, çit", () => {
    cozulur("u4-atbas", atbas(kod("u4-atbas")));
    cozulur("u4-vigenere-coz", vigenereCoz(kod("u4-vigenere-coz", 1), "KOD"));
    cozulur("u4-cit", citCoz(kod("u4-cit"), 2));
  });
  it("bilinen açık metinle Vigenère anahtarı", () => {
    const [anahtar] = yazmaCevabi("u4-bilinen");
    expect(vigenereCoz(kod("u4-bilinen"), anahtar!)).toBe("MERHABA DÜNYA");
  });
  it("yerine koyma metni ve frekans sorusu", () => {
    const anahtar = "ZEKİVAYĞŞRNOLÖMÇTUPSDCBÜFIGHJ";
    const acik = [...YERINE_KOYMA_METNI].map((c) => (anahtar.includes(c) ? ALFABE[anahtar.indexOf(c)]! : c)).join("");
    expect(yerineKoy(acik, anahtar)).toBe(YERINE_KOYMA_METNI);
    expect(acik.startsWith("KRİPTOGRAFİDE GÜVENLİK")).toBe(true);
    expect(acik).toContain(" VE YILLARCA");
    expect(YERINE_KOYMA_METNI).toContain(" GA ");
    const [ilk, ikinci] = frekans(YERINE_KOYMA_METNI);
    expect(ilk).toEqual(["Z", 24]);
    expect(ikinci![0]).toBe("O");
    expect(mcqDogru("u4-en-sik").startsWith("Z,")).toBe(true);
  });
  it("Base64 parolası", () => {
    expect(bayttanMetin(base64tenBayt(kod("u1-base64-coz").split(": ")[1]!))).toBe(mcqDogru("u1-base64-coz"));
  });
});

describe("şifreleme: hesapların cevap anahtarı", () => {
  it("modüler aritmetik", () => {
    expect(sayiDogru("u3-kalan", String(17 % 5))).toBe(true);
    expect(sayiDogru("u3-saat", String((23 + 19) % 24))).toBe(true);
    expect(sayiDogru("u3-negatif", String(((-3 % 7) + 7) % 7))).toBe(true);
    expect(sayiDogru("u3-carpim", String((123 * 456) % 7))).toBe(true);
    expect(sayiDogru("u3-ebob", String(ebob(252n, 105n)))).toBe(true);
    expect(sayiDogru("u3-ters-11", String(modTers(3n, 11n)))).toBe(true);
    expect(sayiDogru("u3-ters-26", String(modTers(7n, 26n)))).toBe(true);
    expect(sayiDogru("u3-rsa-d", String(modTers(17n, 3120n)))).toBe(true);
    expect(sayiDogru("u3-us-kucuk", String(modUs(3n, 5n, 7n)))).toBe(true);
    expect(sayiDogru("u3-kare-carp", String(modUs(4n, 13n, 497n)))).toBe(true);
    expect(sayiDogru("u3-carpanlar", String(3233 / 53))).toBe(true);
    expect(sayiDogru("u3-phi-rsa", String(phi(3233n)))).toBe(true);
    expect(sayiDogru("u3-phi-15", String(phi(15n)))).toBe(true);
    expect(sayiDogru("u3-fermat", String(modUs(7n, 12n, 13n)))).toBe(true);
    expect(sayiDogru("u3-fermat-2", String(modUs(2n, 10n, 11n)))).toBe(true);
    expect(sayiDogru("u3-rsa-d", "2754")).toBe(false);
  });
  it("GF(2^8) ve XOR", () => {
    expect(yazmaCevabi("u3-gf28-toplama")).toContain((0x57 ^ 0x83).toString(16).toUpperCase());
    expect(yazmaCevabi("u3-xtime")).toContain(gfCarp(0x57, 2).toString(16).toUpperCase());
    expect(yazmaCevabi("u3-xor-hex")).toContain((0x3c ^ 0xff).toString(16).toUpperCase());
    expect(yazmaCevabi("u3-xor-hesap")).toContain((0b1010 ^ 0b0110).toString(2));
  });
  it("rastgelelik ve entropi", () => {
    expect(sayiDogru("u2-lcg", String(lcg(5, 3, 16, 7, 1)[0]))).toBe(true);
    expect(sayiDogru("u2-lcg-tahmin", String(lcg(5, 3, 16, 1, 1)[0]))).toBe(true);
    expect(sayiDogru("u2-zar", String(Math.log2(6)))).toBe(true);
    expect(sayiDogru("u2-pin", String(Math.log2(1e4)))).toBe(true);
    expect(sayiDogru("u2-kucuk-harf", String(8 * Math.log2(26)))).toBe(true);
    expect(sayiDogru("u2-kelime", String(6 * Math.log2(7776)))).toBe(true);
  });
  it("baytlar ve anahtar uzayı", () => {
    expect(yazmaCevabi("u1-hex-a")).toContain(hex(metindenBayt("A")));
    expect(sayiDogru("u1-utf8-s", String(metindenBayt("ş").length))).toBe(true);
    expect(sayiDogru("u1-128-bit", "2^128")).toBe(true);
    expect(sayiDogru("u1-kaba-kuvvet", "2^55")).toBe(true);
    expect(sayiDogru("u4-anahtar-sayisi", "28")).toBe(true);
    let l = 0;
    for (let i = 2; i <= 29; i++) l += Math.log2(i);
    expect(Math.round(l)).toBe(103);
  });
  it("XOR, iki zamanlı pad ve CTR bit çevirme", () => {
    const hx = (n: number) => n.toString(16).toUpperCase().padStart(2, "0");
    expect(yazmaCevabi("u5-xor-bayt")).toContain(hx(0x41 ^ 0x2a));
    const m2 = xorBayt(xorBayt(hextenBayt(IKI_ZAMAN_C1), hextenBayt(IKI_ZAMAN_C2)), metindenBayt(kod("u5-iki-zaman-coz", 2)));
    expect(yazmaCevabi("u5-iki-zaman-coz")).toContain(bayttanMetin(m2));
    expect(yazmaCevabi("u6-bit-cevir")).toContain(hx(0x5a ^ 0x31 ^ 0x39));
  });
  it("AES hesapları", () => {
    const hx = (n: number) => n.toString(16).toUpperCase().padStart(2, "0");
    expect(yazmaCevabi("u5-sbox-63")).toContain(hx(S_KUTUSU[0]!));
    expect(yazmaCevabi("u5-xtime")).toContain(hx(gfCarp(0x87, 2)));
    expect(yazmaCevabi("u5-carp-03")).toContain(hx(gfCarp(0x87, 3)));
    expect(sayiDogru("u5-tur-anahtari", String(anahtarGenislet(new Uint8Array(16)).length))).toBe(true);
    expect(sayiDogru("u5-kelime-256", String(anahtarGenislet(new Uint8Array(32)).length * 4))).toBe(true);
    const iz = (n: number) => aesBlok(new Uint8Array(16), new Uint8Array(n)).iz;
    expect(sayiDogru("u5-tur-128", String(iz(16).at(-1)!.tur))).toBe(true);
    expect(sayiDogru("u5-tur-256", String(iz(32).at(-1)!.tur))).toBe(true);
  });
  it("dolgu hesapları", () => {
    expect(sayiDogru("u6-dolgu-21", String(dolgula(new Uint8Array(21)).length - 21))).toBe(true);
    expect(sayiDogru("u6-dolgu-tam", String(dolgula(new Uint8Array(32)).length))).toBe(true);
    expect(sayiDogru("u6-blok-sayisi", String(dolgula(new Uint8Array(1000)).length / 16))).toBe(true);
    const son = [...dolgula(new Uint8Array(11)).slice(11)].map((x) => hex(Uint8Array.of(x))).join(" ");
    expect(yazmaCevabi("u6-dolgu-deger")).toContain(son);
  });
});
