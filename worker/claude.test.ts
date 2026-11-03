import { describe, expect, it } from "vitest";
import { anahtarDogru } from "./claude";

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
