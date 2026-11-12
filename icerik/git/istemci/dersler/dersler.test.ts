// Derslerdeki terminal alıştırmaları: kurulum hatasız çalışmalı, hedefler
// başlangıçta tutmamalı ve önerilen komutlar sırayla yazılınca hepsi tutmalı.
import { describe, expect, it } from "vitest";
import icerik from "../index";
import { calistir, kur, yeniOrtam } from "../../../../src/gitsim";
import { VARSAYILAN_KIMLIK } from "../../../../src/gitsim/gorev";

describe("git dersleri: terminal alıştırmaları", () => {
  for (const ders of icerik.dersler) {
    ders.bolumler.forEach((b, i) => {
      const g = b.git;
      if (!g?.hedefler?.length) return;
      it(`Ü${ders.hafta} bölüm ${i + 1}: ${b.baslik}`, () => {
        let o = kur(yeniOrtam({ dosyalar: g.dosyalar, globalConfig: g.globalConfig ?? VARSAYILAN_KIMLIK }), g.kurulum ?? []);
        expect(g.hedefler!.every((h) => h.denetle(o))).toBe(false);
        for (const s of g.oneriler ?? []) o = calistir(o, s).ortam;
        expect(g.hedefler!.filter((h) => !h.denetle(o)).map((h) => h.aciklama)).toEqual([]);
      });
    });
  }
});
