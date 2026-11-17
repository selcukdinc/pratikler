import { describe, expect, it } from "vitest";
import { akisModeli, borcFaizi, MC_GECMIS, monteCarlo, yuzdelik } from "./olcum";

describe("agile: akış, Monte Carlo ve teknik borç hesapları", () => {
  it("talep kapasiteyi aşınca WIP sınırı cycle time'ı kısa tutar, throughput aynı kalır", () => {
    const sinirsiz = akisModeli({ gelen: 1.2, gun: 30, wip: null });
    const sinirli = akisModeli({ gelen: 1.2, gun: 30, wip: { gelistirme: 3, test: 2 } });
    expect(sinirli.ortCycle).toBeLessThan(sinirsiz.ortCycle);
    expect(sinirli.ortWip).toBeLessThan(sinirsiz.ortWip);
    expect(Math.abs(sinirli.throughput - sinirsiz.throughput)).toBeLessThan(0.15);
    // Gelen iş: 30 günde 36 öğe
    expect(sinirsiz.gunler.at(-1)!.geldi).toBe(36);
  });

  it("CFD sayıları birbirini aşmaz", () => {
    for (const g of akisModeli({ gelen: 1.5, gun: 30, wip: null }).gunler) {
      expect(g.geldi).toBeGreaterThanOrEqual(g.basladi);
      expect(g.basladi).toBeGreaterThanOrEqual(g.testeGirdi);
      expect(g.testeGirdi).toBeGreaterThanOrEqual(g.bitti);
    }
  });

  it("Monte Carlo: tohumla tekrarlanır, yüzdelikler sıralı, ortalama tahmin %85'ten kısa", () => {
    const a = monteCarlo(MC_GECMIS, 40, 2000, 7);
    expect(a).toEqual(monteCarlo(MC_GECMIS, 40, 2000, 7));
    expect(yuzdelik(a, 50)).toBeLessThanOrEqual(yuzdelik(a, 85));
    expect(yuzdelik(a, 85)).toBeLessThanOrEqual(yuzdelik(a, 95));
    const ort = MC_GECMIS.reduce((x, y) => x + y, 0) / MC_GECMIS.length;
    expect(Math.ceil(40 / ort)).toBeLessThan(yuzdelik(a, 85));
  });

  it("teknik borç: kısayol ilk Sprint'te hızlı, on Sprint'te toplamda kaybettirir", () => {
    const kisa = borcFaizi(Array(10).fill("kisayol"));
    const normal = borcFaizi(Array(10).fill("normal"));
    expect(kisa.hiz[0]).toBeGreaterThan(normal.hiz[0]!);
    expect(kisa.toplam).toBeLessThan(normal.toplam);
    expect(kisa.hiz.at(-1)).toBeLessThan(kisa.hiz[0]!);
  });
});
