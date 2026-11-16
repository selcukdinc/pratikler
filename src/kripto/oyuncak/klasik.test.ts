import { describe, expect, it } from "vitest";
import { atbas, cakismaIndeksi, cit, citCoz, frekans, sezar, sezarCoz, vigenere, vigenereCoz, yerineKoy } from "./klasik";

describe("klasik şifreler (oyuncak)", () => {
  it("Sezar Türk alfabesinde kayar ve geri döner", () => {
    expect(sezar("ABC", 3)).toBe("ÇDE");
    expect(sezar("ZÜ", 2)).toBe("BY");
    expect(sezarCoz(sezar("Gizli toplantı yarın!", 7), 7)).toBe("GİZLİ TOPLANTI YARIN!");
  });
  it("Atbaş kendisinin tersidir", () => {
    expect(atbas("A")).toBe("Z");
    expect(atbas(atbas("ŞİFRE"))).toBe("ŞİFRE");
  });
  it("Vigenère anahtarla şifreler ve çözer", () => {
    const s = vigenere("SALDIRI ŞAFAKTA", "KOD");
    expect(vigenereCoz(s, "KOD")).toBe("SALDIRI ŞAFAKTA");
    expect(vigenere("AAAA", "BC")).toBe("BCBC");
  });
  it("yerine koyma bir permütasyon ister", () => {
    expect(() => yerineKoy("A", "ABC")).toThrow();
  });
  it("çit şifresi zikzak dizer", () => {
    expect(cit("MERHABA DÜNYA", 2)).toBe("MRAAÜYEHBDNA");
    expect(citCoz(cit("KRİPTOGRAFİ ÖĞREN", 3), 3)).toBe("KRİPTOGRAFİÖĞREN");
  });
  it("frekans ve çakışma indeksi", () => {
    expect(frekans("ABA")[0]).toEqual(["A", 2]);
    expect(cakismaIndeksi("AAAA")).toBe(1);
  });
});
