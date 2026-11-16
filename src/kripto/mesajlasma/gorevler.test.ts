import { describe, expect, it } from "vitest";
import { GOREVLER } from "./gorevler";
import { tasarimOku, tasarimYaz, VARSAYILAN } from "./model";

describe("mesajlaşma görevleri", () => {
  it("kimlikler tekil", () => {
    expect(new Set(GOREVLER.map((g) => g.id)).size).toBe(GOREVLER.length);
  });
  for (const g of GOREVLER) {
    it(`${g.id}: örnek çözüm hedefi sağlar`, () => {
      expect(g.hedef(g.ornek)).toBe(true);
      // Örnek, paylaşılan bağlantı biçiminde de aynı kalır
      expect(tasarimOku(tasarimYaz(g.ornek))).toEqual(g.ornek);
    });
    it(`${g.id}: varsayılan tasarım hedefi sağlamaz`, () => {
      expect(g.hedef(VARSAYILAN)).toBe(false);
    });
  }
  it("en iyi tasarım kötü tasarım görevlerini çözmez", () => {
    const iyi = GOREVLER.find((g) => g.id === "gizlilik-odakli")!.ornek;
    const cozulen = GOREVLER.filter((g) => g.hedef(iyi)).map((g) => g.id);
    expect(cozulen).not.toContain("en-kotu");
    expect(cozulen).not.toContain("sifresiz-yedek");
    expect(cozulen).not.toContain("emanet");
  });
});
