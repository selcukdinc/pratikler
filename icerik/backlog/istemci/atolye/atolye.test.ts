import { describe, expect, it } from "vitest";
import { adim, baslat, dikeyMi, invest, karne, ogeBul, onayIncele, oneriHamleleri, oyna, poker, wsjf } from "../../../../src/backlog/motor";
import { GOREVLER, SENARYO } from "./index";

describe("backlog: atölye görevleri", () => {
  for (const g of GOREVLER) {
    it(`${g.id}: başlangıçta hedef tutmaz, örnek çözüm tutturur`, () => {
      const b = baslat(g.baslangic, 7);
      expect(g.hedef(b, SENARYO)).toBe(false);
      const son = oyna(b, g.ornek, SENARYO);
      expect(son.mesaj).toBeUndefined();
      expect(g.hedef(son, SENARYO)).toBe(true);
      expect(g.durum(son, SENARYO)).toBeTruthy();
    });
  }
  it("görev kimlikleri tektir ve kartlar havuzda vardır", () => {
    expect(new Set(GOREVLER.map((g) => g.id)).size).toBe(GOREVLER.length);
    for (const g of GOREVLER) for (const o of g.baslangic) if (o.kart) expect(SENARYO.havuz.some((k) => k.id === o.kart)).toBe(true);
    for (const x of SENARYO.gizli) expect(SENARYO.havuz.some((k) => k.id === x.kart)).toBe(true);
  });
});

describe("backlog: atölye motoru", () => {
  const ilk = GOREVLER.find((g) => g.id === "ilk-tur-onay")!;

  it("adim girdiyi değiştirmez, yeni kimlik verir, aynı kartı iki kez eklemez", () => {
    const b = baslat(ilk.baslangic);
    const once = JSON.stringify(b);
    const y = adim(b, { tur: "kartEkle", kart: "s-mutfak", ust: "F-2" }, SENARYO);
    expect(JSON.stringify(b)).toBe(once);
    expect(ogeBul(y, "ST-7")?.kart).toBe("s-mutfak");
    expect(y.sira.at(-1)).toBe("ST-7");
    expect(adim(y, { tur: "kartEkle", kart: "s-mutfak", ust: "F-2" }, SENARYO).mesaj).toMatch(/zaten/);
  });

  it("silinen öğe altındakileri de götürür", () => {
    const b = adim(baslat(ilk.baslangic), { tur: "sil", id: "F-2" }, SENARYO);
    expect(b.ogeler.map((o) => o.id)).toEqual(["E-1"]);
    expect(b.sira).toEqual([]);
  });

  it("onay incelemesi her sorunu bulur, ilk tur başarısızsa ikinci tur sayılır", () => {
    const b = baslat(ilk.baslangic);
    const bulgular = onayIncele(b, SENARYO);
    const metin = (id: string) => bulgular.filter((x) => x.id === id).map((x) => x.metin).join(" | ");
    expect(metin("ST-3")).toBe("");
    expect(metin("ST-4")).toMatch(/Ölçülemeyen/);
    expect(metin("ST-4")).toMatch(/Olumsuz yol/);
    expect(metin("ST-5")).toMatch(/gerçek bir kişiyi/);
    expect(metin("ST-6")).toMatch(/Planning Poker/);
    const y = adim(b, { tur: "onayaGonder" }, SENARYO);
    expect(y.onay).toMatchObject({ tur: 1, onaylandi: false });
    expect(ilk.hedef(oyna(y, ilk.ornek, SENARYO), SENARYO)).toBe(false);
  });

  it("yatay dilim INVEST'te Valuable'ı düşürür", () => {
    const g = GOREVLER.find((x) => x.id === "yatay-dikey")!;
    const b = baslat(g.baslangic);
    const tablo = ogeBul(b, "ST-3")!;
    expect(dikeyMi(tablo)).toBe(false);
    expect(invest(tablo, b, SENARYO).find((h) => h.harf === "V")?.tamam).toBe(false);
  });

  it("Planning Poker: gizli bilgisi olan farklı kart açar; konuşulunca takım hizalanır", () => {
    const g = GOREVLER.find((x) => x.id === "poker-fark")!;
    const b = baslat(g.baslangic, 3);
    const o = ogeBul(b, "ST-3")!;
    const once = poker(o, b, SENARYO);
    expect(once.find((x) => x.kisi.id === "kerem")?.kart).toBe(13);
    expect(Math.max(...once.filter((x) => x.kisi.id !== "kerem").map((x) => x.kart))).toBeLessThanOrEqual(8);
    expect(poker(o, b, SENARYO)).toEqual(once);
    const y = adim(b, { tur: "sor", id: "ST-3", kisi: "kerem" }, SENARYO);
    expect(new Set(poker(o, y, SENARYO).map((x) => x.kart))).toEqual(new Set([8]));
    expect(adim(b, { tur: "sor", id: "ST-3", kisi: "can" }, SENARYO).mesaj).toMatch(/ek bir şey yok/);
  });

  it("öneri hamleleri spike'ı ilgili story'nin önüne koyar", () => {
    const g = GOREVLER.find((x) => x.id === "poker-fark")!;
    const b = baslat(g.baslangic);
    const bilgi = SENARYO.gizli.find((x) => x.id === "g-odeme-test")!;
    const y = oyna(b, oneriHamleleri(bilgi, ogeBul(b, "ST-3")!), SENARYO);
    expect(y.sira[0]).toBe("ST-4");
    expect(ogeBul(y, "ST-4")?.spike).toBe(true);
    expect(ogeBul(y, "ST-3")?.puan).toBe(8);
  });

  it("WSJF ve karne", () => {
    let b = baslat(GOREVLER[0]!.baslangic);
    b = oyna(b, GOREVLER[0]!.ornek, SENARYO);
    b = oyna(b, [
      { tur: "guncelle", id: "ST-3", alanlar: { puan: 5 } },
      { tur: "guncelle", id: "ST-4", alanlar: { puan: 3 } },
      { tur: "guncelle", id: "F-2", alanlar: { wsjf: { deger: 8, zaman: 5, risk: 3 } } },
    ], SENARYO);
    expect(wsjf(ogeBul(b, "F-2")!, b)).toBe(2);
    const k = karne(b, SENARYO);
    expect(k.tahminYuzde).toBe(67);
    expect(k.ayrintili).toBe(false);
    expect(k.investYuzde).toBeGreaterThan(0);
  });
});
