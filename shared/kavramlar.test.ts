import { describe, expect, it } from "vitest";
import { sorular } from "../content/sorular/index";
import { KAVRAMLAR } from "./kavramlar";

describe("kavramlar", () => {
  it("her sorunun kavramı tanımlı ve kavram kendi ünitesine ait", () => {
    expect(sorular.filter((s) => !KAVRAMLAR[s.kavram]).map((s) => s.id), "bilinmeyen kavram").toEqual([]);
    for (const s of sorular) expect(s.kavram.startsWith(`u${s.hafta}-`), s.id).toBe(true);
  });
  it("her kavramda en az bir soru var", () => {
    const kullanilan = new Set(sorular.map((s) => s.kavram));
    expect(Object.keys(KAVRAMLAR).filter((k) => !kullanilan.has(k))).toEqual([]);
  });
});
