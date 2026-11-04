// Kimya Sanal Lab deneylerinin hesapları
import { describe, expect, it } from "vitest";
import { ALT_KABUKLAR, bos, denetle, temelHal, yazim } from "./Orbital";
import { cToF, cToK, fToC, kToC } from "./Sicaklik";
import { KARISIMLAR, YONTEMLER } from "./Ayirma";

describe("orbital doldurma", () => {
  it("temel hâl dizilimleri", () => {
    expect(yazim(temelHal(7))).toBe("1s² 2s² 2p³");
    expect(yazim(temelHal(26))).toBe("1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶");
    expect(yazim(temelHal(24))).toBe("1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵");
    expect(yazim(temelHal(29))).toBe("1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰");
    expect(yazim(temelHal(36))).toBe("1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶");
  });
  it("her elementin temel hâli denetimden geçer", () => {
    for (let z = 1; z <= 36; z++) expect(denetle(temelHal(z), z), String(z)).toEqual({ dogru: true, mesajlar: [] });
  });
  it("Hund ihlalini yakalar", () => {
    const d = temelHal(7);
    d[2] = [2, 1, 0];
    expect(denetle(d, 7).mesajlar.some((m) => m.startsWith("Hund"))).toBe(true);
  });
  it("Aufbau ihlalini ve eksik elektronu yakalar", () => {
    const d = bos();
    d[0] = [2];
    d[2] = [1, 0, 0];
    const s = denetle(d, 3);
    expect(s.dogru).toBe(false);
    expect(s.mesajlar.some((m) => m.startsWith("Aufbau"))).toBe(true);
    expect(denetle(bos(), 3).mesajlar[0]).toMatch(/Elektron sayısı 0/);
  });
  it("kromun beklenen dizilimini istisna olarak açıklar", () => {
    const d = bos();
    [2, 2, 6, 2, 6, 2, 4].forEach((n, i) => {
      const o = ALT_KABUKLAR[i]!.orbital;
      d[i] = Array.from({ length: o }, (_, k) => (n > k ? 1 : 0) + (n > o + k ? 1 : 0));
    });
    const s = denetle(d, 24);
    expect(s.dogru).toBe(false);
    expect(s.mesajlar[0]).toMatch(/istisna/);
  });
});

describe("sıcaklık dönüşümü", () => {
  it("bilinen noktalar", () => {
    expect(cToF(100)).toBeCloseTo(212);
    expect(cToF(-40)).toBeCloseTo(-40);
    expect(fToC(350)).toBeCloseTo(176.67, 2);
    expect(cToK(25)).toBeCloseTo(298.15);
    expect(kToC(0)).toBeCloseTo(-273.15);
  });
});

describe("ayırma tezgâhı", () => {
  it("her karışımın en az bir doğru yöntemi var ve yöntemler tanımlı", () => {
    const idler = new Set(YONTEMLER.map((y) => y.id));
    for (const k of KARISIMLAR) {
      expect(Object.keys(k.dogru).length, k.id).toBeGreaterThan(0);
      for (const id of [...Object.keys(k.dogru), ...Object.keys(k.yanlis)]) expect(idler.has(id as never), `${k.id} ${id}`).toBe(true);
      for (const id of Object.keys(k.dogru)) expect(k.yanlis[id as keyof typeof k.yanlis], `${k.id} ${id} iki listede`).toBeUndefined();
    }
  });
});
