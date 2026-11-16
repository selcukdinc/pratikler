import { describe, expect, it } from "vitest";
import { GOREVLER, calistir } from "./atolye";

describe("kod atölyesi", () => {
  it("kimlikler tekil", () => {
    expect(new Set(GOREVLER.map((g) => g.id)).size).toBe(GOREVLER.length);
  });
  for (const g of GOREVLER) {
    it(`${g.id}: örnek çözüm geçer, başlangıç geçmez`, async () => {
      const iyi = await calistir(g.ornek, g.kontrol);
      expect(iyi.mesaj).toBe("Bütün denetimler geçti.");
      const bos = await calistir(g.baslangic.replace(/^console\.log.*$/gm, ""), g.kontrol);
      expect(bos.basarili).toBe(false);
    });
  }
  it("sözdizimi ve çalışma hatalarını yakalar", async () => {
    expect((await calistir("function (", "")).mesaj).toMatch(/Sözdizimi/);
    expect((await calistir("null.x", "")).mesaj).toMatch(/TypeError/);
    const r = await calistir('console.log("a", utf8("ab"))', "");
    expect(r.cikti[0]).toBe("a Uint8Array(2) 6162");
  });
});
