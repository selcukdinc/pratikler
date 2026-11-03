import { describe, expect, it } from "vitest";
import { SORULAR } from "../icerik/sorular";
import { PRATIKLER } from "../icerik/index";

describe.each(PRATIKLER.map((p) => [p.id, p] as const))("kavramlar: %s", (id, p) => {
  const { sorular } = SORULAR[id]!;
  it("her sorunun kavramı tanımlı ve kavram kendi ünitesine ait", () => {
    expect(sorular.filter((s) => !p.kavramlar[s.kavram]).map((s) => s.id), "bilinmeyen kavram").toEqual([]);
    for (const s of sorular) expect(s.kavram.startsWith(`u${s.hafta}-`), s.id).toBe(true);
  });
  it("her kavramda en az bir soru var", () => {
    const kullanilan = new Set(sorular.map((s) => s.kavram));
    expect(Object.keys(p.kavramlar).filter((k) => !kullanilan.has(k))).toEqual([]);
  });
  it("etiketler meta'da tanımlı", () => {
    const etiketler = new Set(p.etiketler.map((e) => e.id));
    expect(sorular.filter((s) => s.etiketler.some((e) => !etiketler.has(e))).map((s) => s.id)).toEqual([]);
  });
});

describe("pratikler", () => {
  it("kimlik, alt alan adı, konu ve soru kimlikleri bütün pratiklerde tek", () => {
    const say = (l: string[]) => l.filter((x, i) => l.indexOf(x) !== i);
    expect(say(PRATIKLER.map((p) => p.id))).toEqual([]);
    expect(say(PRATIKLER.map((p) => p.alt))).toEqual([]);
    const hepsi = Object.values(SORULAR);
    expect(say(hepsi.flatMap((p) => p.konular.map((k) => k.id)))).toEqual([]);
    expect(say(hepsi.flatMap((p) => p.sorular.map((s) => s.id)))).toEqual([]);
  });
  it("her pratiğin soru havuzu kayıtlı ve kimlikler SQL'e gömülebilir", () => {
    for (const p of PRATIKLER) {
      expect(SORULAR[p.id], p.id).toBeTruthy();
      expect(p.id).toMatch(/^[a-z0-9-]+$/);
      expect(p.alt).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
