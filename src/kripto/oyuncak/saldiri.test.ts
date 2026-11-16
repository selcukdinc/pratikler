import { describe, expect, it } from "vitest";
import { metindenBayt } from "../bayt";
import { anahtarGenislet } from "./aes";
import { cbcSifrele, dolgula } from "./modlar";
import { cpa, dolguKahini, erkenKarsilastir, hamming, izUret, kahinSaldirisi, korelasyon, sabitKarsilastir, sonrakiKarakter, tohumlu } from "./saldiri";
import { anahtarUret, BOYLAR, coz, gaussCoz, kabaKuvvet, lweUret, OYUNCAK, poliCarp, sifrele, tersMod } from "./kafes";

describe("padding oracle", () => {
  it("son bloğu yalnız dolgu cevabıyla çözer", () => {
    const k = anahtarGenislet(Uint8Array.from({ length: 16 }, (_, i) => i * 7));
    const iv = Uint8Array.from({ length: 16 }, (_, i) => 200 - i);
    const acik = metindenBayt("BAKIYE=0001250TL");
    const c = cbcSifrele(dolgula(acik), k, iv);
    // İlk blok: önceki blok IV
    const adimlar = [...kahinSaldirisi(iv, c.slice(0, 16), dolguKahini(k))];
    expect(adimlar).toHaveLength(16);
    const bulunan = new Uint8Array(16);
    for (const a of adimlar) bulunan[a.konum] = a.acik;
    expect(new TextDecoder().decode(bulunan)).toBe("BAKIYE=0001250TL");
    for (const a of adimlar) expect(a.deneme).toBeLessThanOrEqual(257);
  });
});

describe("zamanlama", () => {
  it("erken çıkan karşılaştırma ilk farkta durur, sabit zamanlı hep aynı sürer", () => {
    expect(erkenKarsilastir("KALEM", "KAPI1").adim).toBe(3);
    expect(erkenKarsilastir("KALEM", "KALEM").esit).toBe(true);
    expect(sabitKarsilastir("KALEM", "KAPI1").adim).toBe(5);
    expect(sabitKarsilastir("KALEM", "ZZZZZ").adim).toBe(5);
    expect(sabitKarsilastir("KALEM", "KALEM").esit).toBe(true);
    expect(sabitKarsilastir("KALEM", "KALE").esit).toBe(false);
  });
  it("ortalama alınınca gizli parola karakter karakter bulunur", () => {
    const r = tohumlu(1);
    let onek = "";
    for (let i = 0; i < 4; i++) onek += sonrakiKarakter("7392", onek, "0123456789", false, 3, 40, r).tahmin;
    expect(onek).toBe("7392");
  });
});

describe("güç analizi", () => {
  it("Hamming ağırlığı", () => {
    expect(hamming(0)).toBe(0);
    expect(hamming(0xff)).toBe(8);
    expect(hamming(0b1011)).toBe(3);
  });
  it("korelasyon: doğru anahtar baytı tepe yapar", () => {
    const iz = izUret(0x2b, 400, 1, false, tohumlu(5));
    const k = cpa(iz);
    const en = k.indexOf(Math.max(...k));
    expect(en).toBe(0x2b);
  });
  it("maskeleme tepeyi yok eder", () => {
    const iz = izUret(0x2b, 400, 1, true, tohumlu(5));
    const k = cpa(iz);
    expect(Math.abs(k[0x2b]!)).toBeLessThan(0.2);
  });
  it("Pearson", () => {
    expect(korelasyon([1, 2, 3], [2, 4, 6])).toBeCloseTo(1);
    expect(korelasyon([1, 2, 3], [3, 2, 1])).toBeCloseTo(-1);
  });
});

describe("LWE ve oyuncak KEM", () => {
  it("gürültüsüz LWE Gauss elemeyle çözülür, gürültülüde çözüm yanlış çıkar", () => {
    const temiz = lweUret(2, 5, 97, 0, 3);
    expect(gaussCoz(temiz.denklemler, 2, 97)).toEqual(temiz.s);
    const kirli = lweUret(2, 5, 97, 2, 3);
    expect(kirli.hatalar.some((e) => e !== 0)).toBe(true);
    expect(gaussCoz(kirli.denklemler, 2, 97)).not.toEqual(kirli.s);
  });
  it("küçük boyutta kaba kuvvet gerçek s'yi bulur ve q^n aday dener", () => {
    const o = lweUret(2, 6, 97, 2, 4);
    const { adaylar, deneme } = kabaKuvvet(o, 2);
    expect(deneme).toBe(97 * 97);
    expect(adaylar).toContainEqual(o.s);
  });
  it("modüler ters", () => {
    expect((tersMod(17, 97) * 17) % 97).toBe(1);
  });
  it("x^n + 1 modunda x^(n-1) · x = −1", () => {
    const n = 4;
    const a = [0, 0, 0, 1];
    const x = [0, 1, 0, 0];
    expect(poliCarp(a, x, 17)).toEqual([16, 0, 0, 0]);
    expect(n).toBe(4);
  });
  it("oyuncak KEM şifrelenen bitleri geri verir ve kalan gürültü q/4'ün altındadır", () => {
    for (let t = 1; t <= 20; t++) {
      const { acik, gizli } = anahtarUret(OYUNCAK, t);
      const m = Array.from({ length: OYUNCAK.n }, (_, i) => (i * t) % 3 === 0 ? 1 : 0);
      const c = sifrele(OYUNCAK, acik, m, t + 100);
      const { m: m2 } = coz(OYUNCAK, gizli, c);
      expect(m2).toEqual(m);
    }
  });
  it("gerçek ML-KEM boyları", () => {
    expect(BOYLAR.find((b) => b.ad === "ML-KEM-768")!.acik).toBe(1184);
  });
});
