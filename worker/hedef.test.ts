import { describe, expect, it } from "vitest";
import { pratikHedefi } from "./session";

describe("pratikHedefi", () => {
  const r = { gunluk_hedef: 10, gunluk_hedefler: '{"kimya":20,"tip-elektronigi":0}' };
  it("pratikte seçilen hedef geçerli", () => {
    expect(pratikHedefi(r, "kimya")).toBe(20);
    expect(pratikHedefi(r, "tip-elektronigi")).toBe(0);
  });
  it("seçilmemiş pratikte ve çatıda ortak hedef", () => {
    expect(pratikHedefi(r, "fizik")).toBe(10);
    expect(pratikHedefi(r, null)).toBe(10);
    expect(pratikHedefi({ gunluk_hedef: 5, gunluk_hedefler: null }, "kimya")).toBe(5);
    expect(pratikHedefi({ gunluk_hedef: 5, gunluk_hedefler: "bozuk" }, "kimya")).toBe(5);
  });
});
