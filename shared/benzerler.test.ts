import { describe, expect, it } from "vitest";
import { benzerleriAyikla } from "./benzerler";
import { SORULAR } from "../icerik/sorular";
import { PRATIKLER } from "../icerik/index";

describe("benzer sorular", () => {
  it.each(PRATIKLER.map((p) => [p.id, p] as const))("%s: gruplardaki her soru havuzda var ve bir gruba bir kez girer", (id, p) => {
    const ids = new Set(SORULAR[id]!.sorular.map((s) => s.id));
    const goruldu = new Set<string>();
    for (const g of p.benzerler) {
      expect(g.length).toBeGreaterThan(1);
      for (const sid of g) {
        expect(ids.has(sid), sid).toBe(true);
        expect(goruldu.has(sid), sid).toBe(false);
        goruldu.add(sid);
      }
    }
  });

  it("gruptan denenmiş soruyu, yoksa ilkini bırakır", () => {
    const B = [["x", "y"]];
    const liste = [{ id: "a" }, { id: "x" }, { id: "b" }, { id: "y" }];
    expect(benzerleriAyikla(liste, () => false, B).map((q) => q.id)).toEqual(["a", "x", "b"]);
    expect(benzerleriAyikla(liste, (id) => id === "y", B).map((q) => q.id)).toEqual(["a", "b", "y"]);
  });
});
