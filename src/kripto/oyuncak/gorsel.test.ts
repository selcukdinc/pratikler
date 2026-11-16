import { describe, expect, it } from "vitest";
import { bitDuzlemi, blokSiyah, gorselPaylar, histogram, kapasite, lsbGizle, lsbOku, lsbOrani, permutasyon, pikselGeriAl, pikselKaristir, ustUste } from "./gorsel";

const rastgele = (n: number, tohum = 7) => {
  let s = tohum;
  return Uint8Array.from({ length: n }, () => (s = (s * 1103515245 + 12345) >>> 0) >>> 24);
};

describe("görsel kriptografi", () => {
  const w = 6;
  const h = 4;
  const bitler = Uint8Array.from({ length: w * h }, (_, i) => (i % 3 === 0 ? 1 : 0));
  const p = gorselPaylar(bitler, w, h, rastgele(w * h));
  it("her pay her pikselde tam iki siyah alt hücre taşır (tek başına bilgi yok)", () => {
    for (const pay of [p.a, p.b]) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) expect(blokSiyah(pay, p.w, x, y)).toBe(2);
  });
  it("üst üste konunca siyah piksel 4, beyaz piksel 2 siyah hücre verir", () => {
    const u = ustUste(p.a, p.b);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) expect(blokSiyah(u, p.w, x, y)).toBe(bitler[y * w + x] ? 4 : 2);
  });
  it("aynı payla herhangi bir mesaj üretilebilir: b payı mesaja göre seçilebilir", () => {
    // a payı mesajdan bağımsızdır: aynı rastgelelikle farklı mesajlar aynı a'yı verir
    const baska = gorselPaylar(new Uint8Array(w * h), w, h, rastgele(w * h));
    expect(baska.a).toEqual(p.a);
  });
});

describe("LSB steganografi", () => {
  const n = 40 * 30;
  const rgba = Uint8ClampedArray.from({ length: n * 4 }, (_, i) => (i % 4 === 3 ? 255 : (i * 37) % 256));
  const mesaj = new TextEncoder().encode("Kapıda bekleyin");
  it("gizlenen mesaj geri okunur ve pikseller en fazla 1 değişir", () => {
    const g = lsbGizle(rgba, mesaj);
    expect(new TextDecoder().decode(lsbOku(g)!)).toBe("Kapıda bekleyin");
    for (let i = 0; i < g.length; i++) expect(Math.abs(g[i]! - rgba[i]!)).toBeLessThanOrEqual(1);
  });
  it("daha yüksek bit düzlemine de yazılabilir", () => {
    const g = lsbGizle(rgba, mesaj, 3);
    expect(lsbOku(g, 3)).toEqual(mesaj);
  });
  it("kapasite: 3 kanal × piksel − 32 bit uzunluk alanı", () => {
    expect(kapasite(n)).toBe(Math.floor((n * 3 - 32) / 8));
    expect(() => lsbGizle(rgba, new Uint8Array(kapasite(n) + 1))).toThrow();
    expect(() => lsbGizle(rgba, new Uint8Array(kapasite(n)))).not.toThrow();
  });
  it("bit düzlemi 0 ya da 255'tir, alfa korunur", () => {
    const d = bitDuzlemi(rgba, 0);
    expect([...new Set(d)].sort((a, b) => a - b)).toEqual([0, 255]);
    expect(d[3]).toBe(255);
  });
  it("düz bir alana rastgele veri gizlemek LSB oranını 0,5'e çeker", () => {
    const duz = new Uint8ClampedArray(n * 4).fill(200);
    expect(lsbOrani(duz, 0, duz.length)).toBe(0);
    const g = lsbGizle(duz, rastgele(400, 3));
    expect(lsbOrani(g, 0, 3000)).toBeGreaterThan(0.4);
    expect(lsbOrani(g, 8000, g.length)).toBe(0);
  });
});

describe("piksel karıştırma", () => {
  const n = 64;
  const rgba = Uint8ClampedArray.from({ length: n * 4 }, (_, i) => (i % 4 === 3 ? 255 : Math.floor(i / 4) * 3));
  const p = permutasyon(n, 12345);
  it("permütasyon her indisi bir kez içerir ve tohuma göre tekrarlanır", () => {
    expect([...p].sort((a, b) => a - b)).toEqual([...Array(n).keys()]);
    expect(permutasyon(n, 12345)).toEqual(p);
    expect(permutasyon(n, 12346)).not.toEqual(p);
  });
  it("karıştırıp geri alınca aynı görsel; histogram hiç değişmez", () => {
    const k = pikselKaristir(rgba, p);
    expect(pikselGeriAl(k, p)).toEqual(rgba);
    expect(histogram(k)).toEqual(histogram(rgba));
  });
});
