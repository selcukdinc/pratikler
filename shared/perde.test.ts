import { describe, expect, it } from "vitest";
import { perdeAc, perdele } from "./perde";

describe("perde", () => {
  it("perdelenen metin aynı kimlikle açılır", () => {
    const metin = JSON.stringify({ a: { blanks: [["özyeterlilik", "öz yeterlilik"]] }, e: "Açıklama: $\\frac{1}{2}$ → ½" });
    const p = perdele("te-u1-001", metin);
    expect(p).not.toContain("blanks");
    expect(perdeAc("te-u1-001", p)).toBe(metin);
  });

  it("uzun metinlerde de çalışır", () => {
    const metin = "ğüşiöç ".repeat(20_000);
    expect(perdeAc("x", perdele("x", metin))).toBe(metin);
  });
});
