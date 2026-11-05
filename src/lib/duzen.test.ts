import { describe, expect, it } from "vitest";
import { komsuBoyutla, tasi } from "./duzen";
import { VARSAYILAN_DUZEN, duzenDuzelt, duzenleriDenetle } from "../../shared/duzen";

// Üstte üç, altta bir panel: taşıma ve boyutlandırma kuralları bunun üzerinde sınanır
const UC: typeof VARSAYILAN_DUZEN = {
  ust: [{ id: "workspace", oran: 0.18 }, { id: "editor", oran: 0.41 }, { id: "figure", oran: 0.41 }],
  alt: [{ id: "command", oran: 1 }],
  ustOran: 0.72,
};

const sira = (d: typeof VARSAYILAN_DUZEN) => [d.ust.map((p) => p.id).join(","), d.alt.map((p) => p.id).join(",")];

describe("pencere düzeni", () => {
  it("paneli aynı satırda ve satırlar arasında taşır", () => {
    expect(sira(tasi(UC, "workspace", "ust", 3))).toEqual(["editor,figure,workspace", "command"]);
    expect(sira(tasi(UC, "figure", "ust", 0))).toEqual(["figure,workspace,editor", "command"]);
    expect(sira(tasi(UC, "figure", "alt", 1))).toEqual(["workspace,editor", "command,figure"]);
    expect(sira(tasi(UC, "command", "ust", 1))).toEqual(["workspace,command,editor,figure", ""]);
  });

  it("taşımadan sonra satırın payları toplam 1 kalır (satır pencereyi doldurur)", () => {
    const toplam = (d: typeof VARSAYILAN_DUZEN) => d.ust.reduce((t, p) => t + p.oran, 0);
    const ortada = tasi(UC, "figure", "ust", 1);
    expect(toplam(ortada)).toBeCloseTo(1);
    const geri = tasi(tasi(ortada, "figure", "ust", 3), "editor", "ust", 1);
    expect(sira(geri)).toEqual(["workspace,editor,figure", "command"]);
    expect(toplam(geri)).toBeCloseTo(1);
  });

  it("ayırıcı iki komşunun toplamını korur ve en az payın altına inmez", () => {
    const d = komsuBoyutla(UC, "ust", 1, 0.1);
    expect(d.ust[1].oran + d.ust[2].oran).toBeCloseTo(0.82);
    expect(d.ust[1].oran).toBeCloseTo(0.51);
    const uc = komsuBoyutla(UC, "ust", 0, -1);
    expect(uc.ust[0].oran).toBeCloseTo(0.06);
  });

  it("bozuk düzeni düzeltir", () => {
    const d = duzenDuzelt({ ust: [{ id: "editor", oran: 1 }, { id: "editor", oran: 2 }, { id: "yok", oran: 1 }], ustOran: 5 });
    expect(sira(d)).toEqual(["editor", "figure,command,workspace"]);
    expect(d.ustOran).toBe(0.9);
    expect(duzenDuzelt("abc")).toBe(VARSAYILAN_DUZEN);
  });

  it("kayıtlı düzen listesini denetler", () => {
    expect(duzenleriDenetle([{ ad: "  Geniş  ", duzen: {} }])).toMatchObject({ duzenler: [{ ad: "Geniş" }] });
    expect(duzenleriDenetle([{ ad: "a" }, { ad: "A" }])).toHaveProperty("hata");
    expect(duzenleriDenetle([{ ad: "" }])).toHaveProperty("hata");
    expect(duzenleriDenetle(Array.from({ length: 11 }, (_, i) => ({ ad: `d${i}` })))).toHaveProperty("hata");
  });
});
