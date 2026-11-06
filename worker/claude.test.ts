import { describe, expect, it } from "vitest";
import { anahtarDogru, olaylariTemizle } from "./claude";

describe("ajan anahtarı", () => {
  it("yalnızca birebir aynı anahtarı kabul eder", () => {
    expect(anahtarDogru("gizli-anahtar", "gizli-anahtar")).toBe(true);
    expect(anahtarDogru("gizli-anahtar", "gizli-anahtaR")).toBe(false);
    expect(anahtarDogru("gizli-anahtar", "gizli")).toBe(false);
    expect(anahtarDogru("gizli-anahtar", "")).toBe(false);
    expect(anahtarDogru("gizli-anahtar", undefined)).toBe(false);
    expect(anahtarDogru(undefined, "x")).toBe(false);
  });
});

describe("canlı günlük olayları", () => {
  it("bilinmeyen türler ve bozuk girişler atılır, metin kısaltılır", () => {
    const r = olaylariTemizle([
      { tur: "metin", metin: "merhaba" },
      { tur: "kotu", metin: "x" },
      { tur: "arac" },
      null,
      { tur: "cikti", metin: "y".repeat(5000) },
    ]);
    expect(r.map((o) => o.tur)).toEqual(["metin", "cikti"]);
    expect(r[1]!.metin.length).toBe(4000);
  });
  it("bir gönderimde en çok 50 olay", () => {
    expect(olaylariTemizle(Array.from({ length: 80 }, () => ({ tur: "bilgi", metin: "a" })))).toHaveLength(50);
    expect(olaylariTemizle("dizi değil")).toEqual([]);
  });
});
