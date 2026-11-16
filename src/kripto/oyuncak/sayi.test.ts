import { describe, expect, it } from "vitest";
import { asalMi, ebob, genisOklid, gfCarp, lcg, modTers, modUs, phi, xtime } from "./sayi";

describe("modüler aritmetik (oyuncak)", () => {
  it("EBOB ve genişletilmiş Öklid", () => {
    expect(ebob(252n, 105n)).toBe(21n);
    const g = genisOklid(240n, 46n);
    expect(g.ebob).toBe(2n);
    expect(240n * g.x + 46n * g.y).toBe(2n);
  });
  it("modüler ters", () => {
    expect(modTers(3n, 11n)).toBe(4n);
    expect(modTers(17n, 3120n)).toBe(2753n);
    expect(() => modTers(6n, 9n)).toThrow();
  });
  it("hızlı üs alma", () => {
    expect(modUs(3n, 5n, 7n)).toBe(5n);
    expect(modUs(4n, 13n, 497n)).toBe(445n);
    expect(modUs(65n, 17n, 3233n)).toBe(2790n);
    expect(modUs(2790n, 2753n, 3233n)).toBe(65n);
  });
  it("asal ve phi", () => {
    expect(asalMi(61n) && asalMi(53n) && !asalMi(91n)).toBe(true);
    expect(phi(3233n)).toBe(3120n);
    expect(phi(15n)).toBe(8n);
  });
  it("GF(2^8): FIPS-197 örnekleri", () => {
    expect(0x57 ^ 0x83).toBe(0xd4);
    expect(xtime(0x57)).toBe(0xae);
    expect(gfCarp(0x57, 0x13)).toBe(0xfe);
    expect(gfCarp(0x57, 0x83)).toBe(0xc1);
  });
  it("LCG", () => {
    expect(lcg(5, 3, 16, 7, 3)).toEqual([6, 1, 8]);
  });
});
