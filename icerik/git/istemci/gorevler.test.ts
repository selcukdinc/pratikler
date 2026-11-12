import { describe, expect, it } from "vitest";
import { GOREVLER } from "./gorevler";
import { cozumuCalistir, gitKomutuSayisi, gorevOrtami, tamamMi, yildiz, enAzKomut } from "../../../src/gitsim/gorev";

describe("git sandbox görevleri", () => {
  it("kimlikler tek", () => {
    expect(new Set(GOREVLER.map((g) => g.id)).size).toBe(GOREVLER.length);
  });

  for (const g of GOREVLER) {
    it(`${g.id}: başlangıçta bitmemiş, örnek çözümle bitiyor`, () => {
      let o = gorevOrtami(g);
      expect(tamamMi(g, o)).toBe(false);
      o = cozumuCalistir(o, g.cozum, {
        gorev: g,
        editorCozum: g.editorCozum,
        // Çakışmayla duran birleştirme ya da rebase çözümün bir adımı olabilir
        adim: (s, kod, cikti, x) => {
          if (!x.depo?.islem) expect(kod, `${s}\n${cikti}`).toBe(0);
        },
      });
      const tutmayan = g.hedefler.filter((h) => !h.denetle(o)).map((h) => h.aciklama);
      expect(tutmayan).toEqual([]);
      expect(yildiz(g, gitKomutuSayisi(g.cozum))).toBe(3);
      expect(enAzKomut(g)).toBeGreaterThan(0);
      expect(g.ipuclari.length).toBeGreaterThan(0);
    });
  }

  it("yalnızca durumu değiştiren git komutları sayılır", () => {
    expect(gitKomutuSayisi(["git add . && git commit -m x", "ls", "echo git > a", "git status", "git log -p; git branch", "git config user.name"])).toBe(2);
    expect(gitKomutuSayisi(["git branch yeni", "git config --global user.name Ada"])).toBe(2);
  });
});
