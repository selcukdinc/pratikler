import { describe, expect, it } from "vitest";
import { adim, baslat, karne, ornekOyuncu, oyna, secilenPuan } from "../../../../src/scrum/motor";
import { GOREVLER, SENARYO } from "./index";

describe("agile: Sprint simülatörü motoru", () => {
  it("aynı tohumla aynı oyun, farklı tohumla farklı olaylar", () => {
    const oyuncu = ornekOyuncu({ hedef: "menu", sec: ["menu", "menu-foto", "kalori", "alerjen-etiket"], iyilestirme: "wip" }, SENARYO);
    const a = oyna(baslat(SENARYO, { tohum: 5, sprintSayisi: 3 }), SENARYO, oyuncu);
    const b = oyna(baslat(SENARYO, { tohum: 5, sprintSayisi: 3 }), SENARYO, oyuncu);
    expect(a).toEqual(b);
    const olaylar = (t: number) => oyna(baslat(SENARYO, { tohum: t, sprintSayisi: 3 }), SENARYO, oyuncu).kayit.map((k) => k.olay).join();
    expect(new Set([1, 2, 3, 4, 5, 6].map(olaylar)).size).toBeGreaterThan(1);
    expect(a.asama).toBe("bitti");
    expect(a.gecmis).toHaveLength(3);
  });

  it("adim girdiyi değiştirmez ve geçersiz hamlede mesaj döner", () => {
    const d = baslat(SENARYO);
    const once = JSON.stringify(d);
    const y = adim(d, { tur: "planlaBitir" }, SENARYO);
    expect(JSON.stringify(d)).toBe(once);
    expect(y.mesaj).toMatch(/Sprint Goal/);
    const z = adim(adim(d, { tur: "hedef", id: "odeme" }, SENARYO), { tur: "sec", id: "menu" }, SENARYO);
    expect(adim(z, { tur: "planlaBitir" }, SENARYO).mesaj).toMatch(/katkı/);
  });

  it("aşırı yükleme: her şeyi seçen takım hedefi tutamaz, iş Product Backlog'a döner", () => {
    const hepsi = SENARYO.backlog.map((o) => o.id);
    const d = oyna(baslat(SENARYO, { tohum: 3, sprintSayisi: 1, rastgeleOlay: false }), SENARYO, ornekOyuncu({ hedef: "siparis", sec: hepsi, iyilestirme: "wip" }, SENARYO));
    expect(secilenPuan({ ...d, ogeler: SENARYO.backlog })).toBeGreaterThan(80);
    expect(d.gecmis[0]!.hedefTuttu).toBe(false);
    expect(d.gecmis[0]!.donen.length).toBeGreaterThan(5);
  });

  it("WIP sınırı aynı işi daha çok bitirir", () => {
    const sec = ["siparis", "mutfak-ekran", "hazir-bildirim", "siparis-iptal", "menu", "kalori", "menu-foto", "bakiye"];
    const oyun = (wip: number | null) => {
      const s = { ...SENARYO, ayarlar: { ...SENARYO.ayarlar, wip } };
      return oyna(baslat(s, { sprintSayisi: 1, rastgeleOlay: false }), s, ornekOyuncu({ hedef: "siparis", sec, iyilestirme: "hicbiri" }, s)).gecmis[0]!;
    };
    expect(oyun(3).biten.length).toBeGreaterThan(oyun(null).biten.length);
  });

  it("burndown Sprint'in her günü için bir değer taşır ve Rehber'e aykırı kararlar karneye yansır", () => {
    let d = baslat(SENARYO, { sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-3": "hasta" } });
    for (const h of [{ tur: "hedef", id: "menu" }, { tur: "sec", id: "menu" }, { tur: "sec", id: "kalori" }, { tur: "planlaBitir" }] as const) d = adim(d, h, SENARYO);
    expect(d.burndown).toEqual([8]);
    d = adim(adim(d, { tur: "ilerle" }, SENARYO), { tur: "ilerle" }, SENARYO);
    expect(adim(d, { tur: "ilerle" }, SENARYO).mesaj).toMatch(/olaya/);
    d = adim(d, { tur: "olay", secim: 1 }, SENARYO);
    expect(d.kayit[0]).toMatchObject({ olay: "hasta", uyum: "aykiri" });
    expect(karne(d).aykiri).toBe(1);
  });
});

describe("agile: Sprint simülatörü görevleri", () => {
  for (const g of GOREVLER)
    it(`${g.id}: örnek çözüm hedefe ulaşır, başlangıçta hedef tutmaz`, () => {
      const ilk = baslat(SENARYO, g.ayar);
      expect(g.hedef(ilk, SENARYO)).toBe(false);
      const son = oyna(ilk, SENARYO, ornekOyuncu(g.ornek, SENARYO));
      expect(g.hedef(son, SENARYO)).toBe(true);
    });

  it("görev kimlikleri tek ve sabit olaylar senaryoda var", () => {
    expect(new Set(GOREVLER.map((g) => g.id)).size).toBe(GOREVLER.length);
    for (const g of GOREVLER) for (const id of Object.values(g.ayar.sabitOlaylar ?? {})) expect(SENARYO.olaylar.some((o) => o.id === id)).toBe(true);
  });

  it("her olayda en az bir Rehber'e uygun ve bir aykırı seçenek var", () => {
    for (const o of SENARYO.olaylar) {
      expect(o.secenekler.some((s) => s.uyum === "uygun"), o.id).toBe(true);
      expect(o.secenekler.some((s) => s.uyum === "aykiri"), o.id).toBe(true);
    }
  });
});
