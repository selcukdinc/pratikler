// FPGA'ya özgü denetimler (fpga-pratik deposundaki ders testlerinden).
// Soru, ders ve kavram tutarlılığı src/lib/icerik.test.ts'te bütün pratiklerle birlikte denetlenir.
import { describe, expect, it } from "vitest";
import icerik from "./index";
import { sorular } from "../sorular/index";

const dersler = icerik.dersler ?? [];
const gorseller = icerik.gorseller ?? [];
const kimlikler = new Map(sorular.map((s) => [s.id, s]));

describe("FPGA içeriği", () => {
  it("konu sonu testinde ve Kendini dene'de kod sorusu yok", () => {
    for (const d of dersler)
      for (const id of [...d.test, ...d.bolumler.flatMap((b) => b.dene ?? [])]) expect(kimlikler.get(id)?.tip, id).not.toBe("code");
  });

  it("her benzetimin en üst birimi kodda tanımlı", () => {
    for (const d of dersler)
      for (const b of d.bolumler) if (b.sim) expect(b.sim.kod).toMatch(new RegExp(`entity ${b.sim.top} is`));
  });

  it("VHDL dizgilerinde Türkçe karakter yok (VHDL-93 dizgileri Latin-1)", () => {
    for (const d of dersler)
      for (const b of d.bolumler)
        for (const dizgi of b.sim?.kod.match(/"[^"\n]*"/g) ?? []) expect(dizgi).toMatch(/^[\x20-\x7e]*$/);
  });

  it("şekil kodları tekil; derslerde geçen her kodun şekli var", () => {
    const kodlar = gorseller.map((g) => g.kod);
    expect(new Set(kodlar).size).toBe(kodlar.length);
    const metin = dersler.flatMap((d) => d.bolumler.map((b) => b.metin)).join("\n");
    for (const m of metin.matchAll(/\[\[(G-H\d+-\d+)\]\]/g)) expect(kodlar, m[1]).toContain(m[1]);
  });

  it("etkileşimli şekillerin bileşeni kayıtlı", () => {
    for (const g of gorseller) if (g.etkilesim) expect(icerik.etkilesimler?.[g.etkilesim], g.kod).toBeDefined();
  });
});
