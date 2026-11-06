import { describe, expect, it } from "vitest";
import { boslukSonuclari, grade, sayiBelirtimi, sayiEslesir, sayiOku } from "./grade";

describe("grade", () => {
  it("doğru/yanlış", () => {
    expect(grade("tf", { value: false }, { value: false })).toBe(true);
    expect(grade("tf", { value: false }, { value: true })).toBe(false);
  });

  it("şıklı", () => {
    expect(grade("mcq", { index: 2 }, { index: 2 })).toBe(true);
    expect(grade("mcq", { index: 2 }, { index: 0 })).toBe(false);
  });

  it("boşluk doldurma büyük/küçük harf ve boşluğa duyarsız", () => {
    const want = { blanks: [["unsigned"], ["rising_edge(clk)"]] };
    expect(grade("fill", want, { blanks: ["UNSIGNED", "rising_edge( clk )"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["signed", "rising_edge(clk)"] })).toBe(false);
    expect(grade("fill", want, { blanks: ["unsigned"] })).toBe(false);
  });

  it("Türkçe karakter ve büyük harf farkı önemsiz", () => {
    const want = { blanks: [["öz yeterlilik"], ["İnovasyon"]] };
    expect(grade("fill", want, { blanks: ["Özyeterlilik", "inovasyon"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["ozyeterlilik", "INOVASYON"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["yeterlilik", "inovasyon"] })).toBe(false);
  });

  it("boşluklar ayrı ayrı değerlendirilir", () => {
    const want = { blanks: [["1"], ["-1", "- 1"], ["2"]] };
    expect(boslukSonuclari(want, { blanks: ["1", "1", "2"] })).toEqual([true, false, true]);
    expect(boslukSonuclari(want, { blanks: ["1", "-1", "2"] })).toEqual([true, true, true]);
    expect(boslukSonuclari(want, { blanks: ["1"] })).toBeNull();
    expect(boslukSonuclari({ index: 1 }, { blanks: ["1"] })).toBeNull();
  });

  it("tip uyuşmazlığı yanlış sayılır", () => {
    expect(grade("mcq", { index: 1 }, { value: true })).toBe(false);
  });
});

describe("sayısal cevaplar", () => {
  it("sayı yazımları", () => {
    expect(sayiOku("1,5")).toBe(1.5);
    expect(sayiOku("-2.25")).toBe(-2.25);
    expect(sayiOku("3/4")).toBe(0.75);
    expect(sayiOku("2pi")).toBeCloseTo(2 * Math.PI);
    expect(sayiOku("-π/2")).toBeCloseTo(-Math.PI / 2);
    expect(sayiOku("sqrt(2)/2")).toBeCloseTo(Math.SQRT1_2);
    expect(sayiOku("1e-3")).toBe(0.001);
    expect(sayiOku("2^3")).toBe(8);
    expect(sayiOku("abc")).toBeNull();
    expect(sayiOku("")).toBeNull();
    expect(sayiOku("1/0")).toBeNull();
  });

  it("belirtim", () => {
    expect(sayiBelirtimi("1.48±0.01")).toEqual({ degerler: [1.48], dizi: false, tolerans: 0.01 });
    expect(sayiBelirtimi("[1 2 -1]")).toEqual({ degerler: [1, 2, -1], dizi: true, tolerans: null });
    expect(sayiBelirtimi("[0.5, 0.25]+-0.01")).toEqual({ degerler: [0.5, 0.25], dizi: true, tolerans: 0.01 });
    expect(sayiBelirtimi("x")).toBeNull();
  });

  it("tek değer toleransla", () => {
    expect(sayiEslesir("1.48±0.01", "1,475")).toBe(true);
    expect(sayiEslesir("1.48±0.01", "1.5")).toBe(false);
    // Varsayılan tolerans %0,5
    expect(sayiEslesir("200", "200.9")).toBe(true);
    expect(sayiEslesir("200", "202")).toBe(false);
    expect(sayiEslesir("0", "0")).toBe(true);
    expect(sayiEslesir("0.5", "1/2")).toBe(true);
  });

  it("dizi: uzunluk ve elemanlar tutmalı", () => {
    expect(sayiEslesir("[1 3 4 2]", "1 3 4 2")).toBe(true);
    expect(sayiEslesir("[1 3 4 2]", "[1, 3, 4, 2]")).toBe(true);
    expect(sayiEslesir("[1 3 4 2]", "1;3;4;2")).toBe(true);
    expect(sayiEslesir("[1 3 4 2]", "1 3 4")).toBe(false);
    expect(sayiEslesir("[1 3 4 2]", "1 3 4 2 0")).toBe(false);
    expect(sayiEslesir("[0.5 -0.25]", "0.5 -1/4")).toBe(true);
  });

  it("num sorusu boşluk boşluk puanlanır", () => {
    const want = { blanks: [["7"], ["[1 2 1]"]] };
    expect(grade("num", want, { blanks: ["7", "1 2 1"] })).toBe(true);
    expect(boslukSonuclari(want, { blanks: ["7", "1 2"] }, "num")).toEqual([true, false]);
    // fill olarak puanlansaydı metin karşılaştırılırdı
    expect(grade("fill", want, { blanks: ["7.0", "[1 2 1]"] })).toBe(false);
    expect(grade("num", want, { blanks: ["7.0", "[1 2 1]"] })).toBe(true);
  });
});

// Ayrık Pratik'ten: mantık ve küme ifadeleri, yazma soruları
describe("mantık ve küme cevapları", () => {
  it("mantık sembolleri klavye karşılıklarıyla yazılabilir", () => {
    const want = { blanks: [["¬p ∨ q"], ["p ↔ q"], ["¬(p ∧ q)"]] };
    expect(grade("fill", want, { blanks: ["~p | q", "p <-> q", "!(p ^ q)"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["¬p∨q", "p<->q", "~(p & q)"] })).toBe(true);
    // Parantez mantık ifadesinde önemlidir
    expect(grade("fill", want, { blanks: ["~p | q", "p <-> q", "~p ^ q"] })).toBe(false);
    expect(grade("fill", { blanks: [["p → q"]] }, { blanks: ["p -> q"] })).toBe(true);
    expect(grade("fill", { blanks: [["p → q"]] }, { blanks: ["q -> p"] })).toBe(false);
  });

  it("küme cevabında eleman sırası ve eksi işareti önemsiz", () => {
    const e = { blanks: [["{−1, 1}"], ["{0, 1, 3}"]] };
    expect(grade("fill", e, { blanks: ["{1,-1}", "{3, 0, 1}"] })).toBe(true);
    expect(grade("fill", e, { blanks: ["{1}", "{0, 1, 3}"] })).toBe(false);
  });

  it("sembolsüz cevaplar eskisi gibi karşılaştırılır", () => {
    expect(grade("fill", { blanks: [["Öz yeterlilik"]] }, { blanks: ["ozyeterlilik!"] })).toBe(true);
  });

  it("yazma sorusu öz değerlendirmeyle puanlanır", () => {
    expect(grade("yaz", {}, { oz: "dogru", yazi: "..." })).toBe(true);
    expect(grade("yaz", {}, { oz: "kismen" })).toBe(false);
    expect(grade("yaz", {}, { oz: "yanlis" })).toBe(false);
  });
});
