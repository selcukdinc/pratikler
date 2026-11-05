import { describe, expect, it } from "vitest";
import { ekle, enSon, karsilastirilan, sil, tasi } from "./gecmisSira";

const L = (...n: number[]) => n.map((n) => ({ n }));
const ns = (l: { n: number }[]) => l.map((c) => c.n);

describe("gecmisSira", () => {
  it("şimdi en büyük numaradır", () => {
    expect(enSon(L(3, 5, 1))?.n).toBe(5);
    expect(enSon([])).toBeNull();
  });
  it("sınır aşılınca en eski düşer, sıra korunur", () => {
    expect(ns(ekle(L(2, 1, 3), { n: 4 }, 3))).toEqual([2, 3, 4]);
  });
  it("tek bir çalıştırma silinir", () => {
    expect(ns(sil(L(1, 2, 3, 4), 4))).toEqual([1, 2, 3]);
  });
  it("sürüklenen öğe hedefin önüne geçer", () => {
    expect(ns(tasi(L(1, 2, 3, 4), 4, 0))).toEqual([4, 1, 2, 3]);
    expect(ns(tasi(L(1, 2, 3, 4), 1, 4))).toEqual([2, 3, 4, 1]);
    expect(ns(tasi(L(1, 2, 3, 4), 2, 3))).toEqual([1, 3, 2, 4]);
    expect(ns(tasi(L(1, 2, 3), 2, 2))).toEqual([1, 2, 3]);
  });
  it("karşılaştırma: seçilen, yoksa şimdikinin solundaki, o da yoksa sağındaki", () => {
    expect(karsilastirilan(L(1, 2, 3), null)?.n).toBe(2);
    expect(karsilastirilan(L(1, 2, 3), 1)?.n).toBe(1);
    expect(karsilastirilan(L(3, 1, 2), null)?.n).toBe(1);
    expect(karsilastirilan(L(1, 2, 3), 3)?.n).toBe(2);
    expect(karsilastirilan(L(1), null)).toBeNull();
  });
});
