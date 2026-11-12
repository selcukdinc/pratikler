import { describe, expect, it } from "vitest";
import { git } from "../meta";
import { SEVIYE_TESTI } from "./seviye";
import { seviyeHesapla } from "../../../src/components/SeviyeTesti";

describe("git seviye testi", () => {
  it("her kademeden üç soru, şıklar geçerli", () => {
    const gruplar = git.uniteGruplari!;
    for (let g = 0; g < gruplar.length; g++) expect(SEVIYE_TESTI.sorular.filter((s) => s.grup === g)).toHaveLength(3);
    for (const s of SEVIYE_TESTI.sorular) {
      expect(s.dogru).toBeGreaterThanOrEqual(0);
      expect(s.dogru).toBeLessThan(s.secenekler.length);
    }
  });

  it("öneri geçilemeyen ilk kademedir", () => {
    const hepsiDogru = Object.fromEntries(SEVIYE_TESTI.sorular.map((s, i) => [i, s.dogru]));
    expect(seviyeHesapla(SEVIYE_TESTI, hepsiDogru).baslangic).toBe(5);
    expect(seviyeHesapla(SEVIYE_TESTI, {}).baslangic).toBe(0);
    // İlk iki kademe doğru, üçüncüde yalnızca bir doğru
    const kismi: Record<number, number> = {};
    let orta = 0;
    SEVIYE_TESTI.sorular.forEach((s, i) => {
      if (s.grup < 2) kismi[i] = s.dogru;
      if (s.grup === 2 && orta++ === 0) kismi[i] = s.dogru;
      if (s.grup > 2) kismi[i] = s.dogru;
    });
    expect(seviyeHesapla(SEVIYE_TESTI, kismi).baslangic).toBe(2);
  });
});
