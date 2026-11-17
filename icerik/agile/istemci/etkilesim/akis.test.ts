import { describe, expect, it } from "vitest";
import { darbogazAkisi, degerEgrisi, OZELLIK_DEGERI, partiAkisi } from "./akis";

describe("agile: akış hesapları", () => {
  it("parti büyüklüğü: 20'lik parti 80, tek parça akış 23 dakika (soru cevaplarıyla aynı)", () => {
    expect(partiAkisi(4, 20, 20)).toMatchObject({ ilkTeslim: 80, toplam: 80 });
    expect(partiAkisi(4, 20, 1)).toMatchObject({ ilkTeslim: 4, toplam: 23 });
    const on = partiAkisi(4, 20, 10);
    expect(on.ilkTeslim).toBeLessThan(80);
    expect(on.toplam).toBeLessThan(80);
  });
  it("darboğaz: verim en dar adımla sınırlı (10, 6, 8 -> 6)", () => {
    const a = darbogazAkisi(12, [10, 6, 8], 200);
    expect(a.verim).toBeLessThanOrEqual(6);
    expect(a.verim).toBeGreaterThan(5.9);
    expect(a.kuyruk[1]).toBeGreaterThan(a.kuyruk[2]!);
  });
  it("değer eğrisi: değişiklik yoksa Sprint'ler 12. ayda %100, waterfall 12. ayda teslim", () => {
    expect(OZELLIK_DEGERI.reduce((a, b) => a + b, 0)).toBeCloseTo(100);
    const s = degerEgrisi(0, 0.3);
    expect(s.iteratif.at(-1)![1]).toBeCloseTo(100);
    expect(s.waterfallTeslim).toBe(12);
    const d = degerEgrisi(8, 0.5);
    expect(d.bosaWaterfall).toBe(4);
    expect(d.bosaIteratif).toBeLessThan(d.bosaWaterfall);
    // En değerli özellikler önce: altıncı ayda değerin yarıdan fazlası teslim edilmiş
    expect(s.iteratif.find(([a]) => a === 6)![1]).toBeGreaterThan(50);
  });
});
