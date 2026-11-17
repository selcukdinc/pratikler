import { describe, expect, it } from "vitest";
import { GUNLUK, panoOzeti, SENARYOLAR } from "./senaryo";

describe("agile: zor durum senaryoları ve bağımlılık panosu", () => {
  it("her senaryo adımına ulaşılır, her adımda Rehber'e uygun bir seçenek var ve her yol biter", () => {
    for (const s of SENARYOLAR) {
      const gorulen = new Set<string>();
      const gez = (id: string, derinlik: number) => {
        expect(derinlik, s.id).toBeLessThan(10);
        const a = s.adimlar[id];
        expect(a, `${s.id}/${id}`).toBeDefined();
        gorulen.add(id);
        expect(a!.secenekler.some((c) => c.uyum === "uygun"), `${s.id}/${id}`).toBe(true);
        for (const c of a!.secenekler) if (c.sonra) gez(c.sonra, derinlik + 1);
      };
      gez(s.baslangic, 0);
      expect([...gorulen].sort()).toEqual(Object.keys(s.adimlar).sort());
    }
  });

  it("anti-pattern günlüğünde hem sorunlu hem sağlıklı satırlar var", () => {
    expect(GUNLUK.filter((g) => g.sorun).length).toBeGreaterThanOrEqual(8);
    expect(GUNLUK.filter((g) => !g.sorun).length).toBeGreaterThanOrEqual(4);
  });

  it("özellik takımları bağımlılığı azaltır, Sprint'te biten iş artar", () => {
    const b = panoOzeti("bilesen");
    const o = panoOzeti("ozellik");
    const u = panoOzeti("uzman");
    expect(o.bagimlilik).toBe(0);
    expect(u.bagimlilik).toBe(2);
    expect(b.bagimlilik).toBeGreaterThan(u.bagimlilik);
    expect(o.beklenen).toBe(6);
    expect(b.beklenen).toBeLessThan(u.beklenen);
  });
});
