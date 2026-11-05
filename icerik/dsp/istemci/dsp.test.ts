// DSP'ye özgü denetimler (dsp-pratik deposundaki dersler ve şekil testlerinden).
// Soru, ders ve kavram tutarlılığı src/lib/icerik.test.ts'te bütün pratiklerle birlikte denetlenir.
import { describe, expect, it } from "vitest";
import icerik from "./index";
import { Yorumlayici } from "../../../src/matlab/yorumla";

const dersler = icerik.dersler ?? [];
const gorseller = icerik.gorseller ?? [];

describe("DSP içeriği", () => {
  it("her MatStudio örneği tarayıcıdaki yorumlayıcıda hatasız çalışır", () => {
    for (const d of dersler)
      for (const b of d.bolumler) {
        if (!b.matlab) continue;
        const y = new Yorumlayici({ tohum: 0 });
        expect(y.calistir(b.matlab.kod).hata, `${d.hafta}. hafta, ${b.baslik}`).toBeNull();
      }
  });

  it("şekil kodları tekil; derslerde geçen her kodun şekli var ve her şekil kullanılıyor", () => {
    const kodlar = gorseller.map((g) => g.kod);
    expect(new Set(kodlar).size).toBe(kodlar.length);
    const metin = dersler.flatMap((d) => d.bolumler.map((b) => b.metin)).join("\n");
    const gecen = new Set([...metin.matchAll(/\[\[(G-H\d+-\d+)\]\]/g)].map((m) => m[1]!));
    for (const k of gecen) expect(kodlar, k).toContain(k);
    for (const k of kodlar) expect(gecen.has(k), `${k} hiçbir derste yok`).toBe(true);
  });

  it("etkileşimli şekillerin bileşeni kayıtlı", () => {
    for (const g of gorseller) if (g.etkilesim) expect(icerik.etkilesimler?.[g.etkilesim], g.kod).toBeDefined();
  });
});
