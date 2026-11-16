import { describe, expect, it } from "vitest";
import { ayrikLog, carpanlaraAyir, dh, egriNoktalari, egrideMi, mertebe, rsaAnahtari, rsaCoz, rsaImzala, rsaSifrele, skalerCarp, topla, type Egri } from "./acik";
import { modUs } from "./sayi";

describe("oyuncak RSA", () => {
  it("p=61, q=53, e=17 klasik örneği", () => {
    const k = rsaAnahtari(61n, 53n, 17n);
    expect([k.n, k.phi, k.d]).toEqual([3233n, 3120n, 2753n]);
    expect(rsaSifrele(65n, k)).toBe(2790n);
    expect(rsaCoz(2790n, k)).toBe(65n);
    expect(modUs(rsaImzala(100n, k), 17n, 3233n)).toBe(100n);
    expect(() => rsaAnahtari(61n, 53n, 3n)).toThrow();
  });
  it("çarpanlara ayırma ve ders kitabı RSA'nın çarpımsallığı", () => {
    expect(carpanlaraAyir(3233n)).toMatchObject({ p: 53n, q: 61n });
    expect(carpanlaraAyir(101n)).toBeNull();
    const k = rsaAnahtari(61n, 53n, 17n);
    expect((rsaSifrele(2n, k) * rsaSifrele(3n, k)) % k.n).toBe(rsaSifrele(6n, k));
  });
});

describe("oyuncak Diffie-Hellman", () => {
  it("p=23, g=5 örneği", () => {
    const r = dh(5n, 23n, 6n, 15n);
    expect([r.A, r.B, r.sirAyse, r.sirAli]).toEqual([8n, 19n, 2n, 2n]);
    expect(ayrikLog(5n, 8n, 23n)!.x).toBe(6n);
  });
});

describe("oyuncak eliptik eğri", () => {
  const E: Egri = { a: 2n, b: 3n, p: 97n };
  it("nokta toplama, ikiye katlama ve mertebe", () => {
    const P = { x: 3n, y: 6n };
    expect(egrideMi(P, E)).toBe(true);
    expect(topla(P, P, E)).toEqual({ x: 80n, y: 10n });
    expect(mertebe(P, E)).toBe(5);
    expect(skalerCarp(5n, P, E).sonuc).toBeNull();
    expect(skalerCarp(2n, P, E).sonuc).toEqual({ x: 80n, y: 10n });
    for (const Q of egriNoktalari(E)) expect(egrideMi(Q, E)).toBe(true);
  });
  it("ECDH: a(bG) = b(aG)", () => {
    const G = egriNoktalari(E).find((q) => mertebe(q, E) >= 20)!;
    const aG = skalerCarp(17n, G, E).sonuc;
    const bG = skalerCarp(29n, G, E).sonuc;
    expect(skalerCarp(17n, bG, E).sonuc).toEqual(skalerCarp(29n, aG, E).sonuc);
  });
});
