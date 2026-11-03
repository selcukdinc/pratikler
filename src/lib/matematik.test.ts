import { describe, expect, it } from "vitest";
import { SORULAR } from "../../icerik/sorular";
import { PRATIKLER } from "../../icerik/index";
import { aciklamaMetni } from "../../icerik/tipler";

// Formüller yalnızca LaTeX'i açık pratiklerde çizilir
const sorular = PRATIKLER.filter((p) => p.latex).flatMap((p) => SORULAR[p.id]!.sorular);
import { MATEMATIK, matematikHatasi, ozetMetin, satirSonlari } from "./matematik";

describe("formüller", () => {
  it("satır sonlarını çevirir, formüldeki komutlara dokunmaz", () => {
    expect(satirSonlari("a\\nb $\\nu \\neq 0$")).toBe("a\nb $\\nu \\neq 0$");
  });

  it("özet bir formülün ortasından kesilmez", () => {
    expect(ozetMetin("Hız $v = \\frac{\\Delta x}{\\Delta t}$ olur", 10)).toBe("Hız…");
    expect(ozetMetin("[[G-S4-01]]\n\n$$x = 1$$", 50)).toBe("$x = 1$");
  });

  // Sorulardaki her formül KaTeX ile hatasız çizilmeli; formül dışında tek $ kalmamalı
  const metinler = sorular.flatMap((s) => {
    const parcalar = [s.soru, aciklamaMetni(s), ...(s.tip === "mcq" ? s.secenekler : [])];
    return parcalar.map((m, i) => [`${s.id} #${i}`, m] as const);
  });
  it.each(metinler)("%s", (_, m) => {
    expect(matematikHatasi(m)).toBeNull();
    expect(m.replace(MATEMATIK, ""), "eşi olmayan $").not.toContain("$");
    for (const f of m.match(MATEMATIK) ?? []) expect(f, "formülde ~ (üretici ters tırnağa çevirir)").not.toContain("~");
  });
});
