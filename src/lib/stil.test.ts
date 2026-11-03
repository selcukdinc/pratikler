import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// İlerleme sayfasındaki etkinlik ısı haritası (.takvim-izgara) ile Tekrar sayfasındaki
// 30 günlük takvim (.tekrar-izgara) aynı sınıfı paylaşınca ısı haritası 7 sütunlu
// ızgaraya sarılıp bozuluyordu. Bu iki seçicinin ayrı kalmasını denetler.
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const kurallar = (secici: string) =>
  [...css.matchAll(new RegExp(`(^|\\n)\\${secici}\\s*\\{([^}]*)\\}`, "g"))].map((m) => m[2]!);

describe("etkinlik takvimi stili", () => {
  it(".takvim-izgara yalnızca yatay hafta sütunları (flex) olarak tanımlı", () => {
    const k = kurallar(".takvim-izgara");
    expect(k.length).toBe(1);
    expect(k[0]).toMatch(/display:\s*flex/);
    expect(k[0]).not.toMatch(/grid-template-columns/);
  });
  it("Tekrar takvimi kendi sınıfını kullanır", () => {
    expect(kurallar(".tekrar-izgara")[0]).toMatch(/repeat\(7/);
    expect(readFileSync(new URL("../pages/Tekrar.tsx", import.meta.url), "utf8")).not.toContain('"takvim-izgara"');
  });
});
