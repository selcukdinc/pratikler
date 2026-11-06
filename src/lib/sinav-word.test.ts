import { describe, expect, it } from "vitest";
import { latexParcalari, metinParcalari, sinaviWordeCevir } from "./sinav-word";
import { grupKagidi, varsayilanAyar, type SinavBelgesi, type SinavSorusu } from "../../shared/sinav";

const duz = (p: { t: string; ust?: boolean; alt?: boolean }[]) => p.map((x) => (x.ust ? `^(${x.t})` : x.alt ? `_(${x.t})` : x.t)).join("");

describe("Word için formül", () => {
  it("kesir, kök, Yunan harfleri ve birimler", () => {
    expect(duz(latexParcalari("\\frac{V_{out}}{V_{in}} = 10\\,\\mathrm{k\\Omega}"))).toBe("V_(out)/(V_(in)) = 10 kΩ");
    expect(duz(latexParcalari("\\sqrt{2}\\pi f"))).toBe("√2πf");
    expect(duz(latexParcalari("10^{-3}\\cdot x^2"))).toBe("10^(-3)·x^(2)");
    expect(duz(latexParcalari("\\frac{1}{2\\pi RC}"))).toBe("1/(2πRC)");
  });
  it("metinde kalın, formül ve şekil", () => {
    expect(metinParcalari("**Not:** $f_c$ nedir? [[G-S1-2]]")).toEqual([
      { t: "Not:", kalin: true }, { t: " " }, { t: "f" }, { t: "c", alt: true }, { t: " nedir? " }, { t: "[Şekil]", egik: true },
    ]);
  });
});

describe("Word dosyası", () => {
  it("gruplar ve cevap anahtarıyla üretilir", async () => {
    const q: SinavSorusu = {
      id: "s1", topicId: "t", week: 1, type: "mcq", source: "derived", prompt: "$x^2$ nedir?", payload: { choices: ["a", "b", "c", "d"] },
      etiketler: [], difficulty: 1, sourceRef: null, answer: { index: 1 }, explanation: null,
    };
    const b: SinavBelgesi = { ad: "V", ayar: { ...varsayilanAyar(), yon: "yatay" }, gruplar: { sayi: 2, kip: "karisik", tohum: 3 }, ogeler: [{ tur: "soru", id: "o", soruId: "s1", puan: 5 }] };
    const m = new Map([["s1", q]]);
    const blob = await sinaviWordeCevir(b, [grupKagidi(b, m, 0), grupKagidi(b, m, 1)]);
    expect(blob.size).toBeGreaterThan(3000);
  });
});
