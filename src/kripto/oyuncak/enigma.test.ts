import { describe, expect, it } from "vitest";
import { adimla, enigma, type EnigmaAyari } from "./enigma";

const AYAR: EnigmaAyari = { rotorlar: ["I", "II", "III"], konum: [0, 0, 0], halka: [0, 0, 0], fis: "" };

describe("Enigma (oyuncak)", () => {
  it("bilinen sonuç: AAAAA -> BDZGO", () => {
    expect(enigma(AYAR, "AAAAA").metin).toBe("BDZGO");
  });
  it("kendisinin tersidir ve hiçbir harf kendine dönmez", () => {
    const ayar: EnigmaAyari = { ...AYAR, konum: [3, 17, 8], halka: [1, 5, 9], fis: "AT BS DE FM IR KN LZ OW PV XY" };
    const metin = "HAVADURUMURAPORUSABAHSAATALTI";
    const s = enigma(ayar, metin).metin;
    expect(enigma(ayar, s).metin).toBe(metin);
    for (let i = 0; i < metin.length; i++) expect(s[i]).not.toBe(metin[i]);
  });
  it("çift adım: ADU -> ADV -> AEW -> BFX", () => {
    let k: [number, number, number] = [0, 3, 20];
    const gor = () => k.map((x) => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[x]).join("");
    k = adimla({ ...AYAR, konum: k });
    expect(gor()).toBe("ADV");
    k = adimla({ ...AYAR, konum: k });
    expect(gor()).toBe("AEW");
    k = adimla({ ...AYAR, konum: k });
    expect(gor()).toBe("BFX");
  });
});
