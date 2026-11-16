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

import { anahtarTahmini, ortalamaIndeks } from "./klasik";
import { TURKCE } from "../frekanslar";
import { ORNEK_VIGENERE } from "../../../icerik/sifreleme/istemci/etkilesim/klasik";
import { ORNEK_YERINE_KOYMA } from "../../../icerik/sifreleme/istemci/etkilesim/klasik";
import { YERINE_KOYMA_METNI } from "../../../icerik/sifreleme/sorular/unite-4";

describe("Vigenère kırıcı", () => {
  it("örnek metnin anahtar uzunluğunu ve anahtarını bulur", () => {
    const ind = Array.from({ length: 12 }, (_, i) => ortalamaIndeks(ORNEK_VIGENERE, i + 1));
    const tepe = Math.max(...ind);
    expect(ind.findIndex((x) => x >= 0.9 * tepe) + 1).toBe(5);
    expect(anahtarTahmini(ORNEK_VIGENERE, 5, TURKCE)).toBe("KALEM");
    expect(vigenereCoz(ORNEK_VIGENERE.replace(/\s/g, ""), "KALEM").startsWith("BİLGİSAYARLAR")).toBe(true);
  });
  it("ders deneyindeki yerine koyma metni soru havuzundakiyle aynı", () => {
    expect(ORNEK_YERINE_KOYMA).toBe(YERINE_KOYMA_METNI);
  });
});
