import { describe, expect, it } from "vitest";
import { TERIMLER, terimleriAyir, type Terim } from "./terimler";

const DENEME: Terim[] = [
  { tr: "VE", en: "AND", buyuk: true },
  { tr: "değer önerisi", en: "value proposition" },
  { tr: "değer", en: "value" },
  { tr: "inovasyon", en: "innovation" },
];
const yaz = (s: string) => terimleriAyir(s, DENEME).map((p) => (typeof p === "string" ? p : `${p.metin} (${p.en})`)).join("");

describe("terimleriAyir", () => {
  it("büyük harfli terim küçük harfli bağlaçla karışmaz", () => {
    expect(yaz("a ve b'nin VE'si")).toBe("a ve b'nin VE'si (AND)");
  });
  it("uzun terim önce eşleşir", () => {
    expect(yaz("değer önerisi ve değer")).toBe("değer önerisi (value proposition) ve değer (value)");
  });
  it("Türkçe ekleri ve cümle başını kapsar", () => {
    expect(yaz("İnovasyonlar ve inovasyonun")).toBe("İnovasyonlar (innovation) ve inovasyonun (innovation)");
  });
  it("zaten açıklanmış kullanımı atlar", () => {
    expect(yaz("inovasyon (innovation) kaynağı")).toBe("inovasyon (innovation) kaynağı");
  });
  it("varsayılan listede satır içi terim yoksa metin aynen döner", () => {
    expect(terimleriAyir("Girişimci değer yaratır.")).toEqual(["Girişimci değer yaratır."]);
  });
  it("sözlükteki terimler tekil ve açıklamalı", () => {
    const adlar = TERIMLER.map((t) => t.tr.toLocaleLowerCase("tr"));
    expect(new Set(adlar).size).toBe(adlar.length);
    for (const t of TERIMLER) expect(t.aciklama, t.tr).toBeTruthy();
  });
});
