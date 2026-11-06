import { describe, expect, it } from "vitest";
import { kagitMm, numaralar, sayfala, sikIndir, sinavBelgesiHatasi, toplamPuan, varsayilanAyar, type SinavBelgesi } from "./sinav";

const belge = (): SinavBelgesi => ({
  ad: "Vize",
  ayar: varsayilanAyar(),
  ogeler: [
    { tur: "metin", id: "m1", metin: "1 ve 2. soruları parçaya göre cevaplayınız." },
    { tur: "soru", id: "a", soruId: "ds-1", puan: 10 },
    { tur: "soru", id: "b", soruId: "ds-2", puan: 15 },
    { tur: "soru", id: "c", soruId: "ds-3" },
  ],
});

describe("sınav belgesi", () => {
  it("geçerli belge kabul edilir", () => {
    expect(sinavBelgesiHatasi(belge())).toBeNull();
  });
  it("bozuk ayarlar ve öğeler reddedilir", () => {
    const b = belge();
    expect(sinavBelgesiHatasi({ ...b, ayar: { ...b.ayar, boyut: "A5" } })).toMatch(/A4 ya da A3/);
    expect(sinavBelgesiHatasi({ ...b, ayar: { ...b.ayar, sikSayisi: 3 } })).toMatch(/Şık sayısı/);
    expect(sinavBelgesiHatasi({ ...b, ogeler: [{ tur: "soru", id: "x", soruId: "y", puan: 500 }] })).toMatch(/Puan/);
    expect(sinavBelgesiHatasi({ ...b, ogeler: [{ tur: "resim", id: "x" }] })).toMatch(/Bilinmeyen/);
    expect(sinavBelgesiHatasi(null)).toBeTruthy();
  });
  it("numaralar yalnızca sorulara verilir, toplam puan yazılanlardan", () => {
    const b = belge();
    expect([...numaralar(b.ogeler)]).toEqual([["a", 1], ["b", 2], ["c", 3]]);
    expect(toplamPuan(b)).toBe(25);
  });
  it("yeni sınav önceki sınavın başlık bilgilerini alır ama tarih ve sınav adı boş gelir", () => {
    const a = varsayilanAyar({ universite: "İKÇÜ", ders: "Tıp Elektroniği", tarih: "2026-11-01", sinavAdi: "Vize", sutun: 1 });
    expect(a.universite).toBe("İKÇÜ");
    expect(a.ders).toBe("Tıp Elektroniği");
    expect(a.sutun).toBe(1);
    expect(a.tarih).toBe("");
    expect(a.sinavAdi).toBe("");
  });
  it("A3 yatay kağıt boyutu", () => {
    expect(kagitMm({ boyut: "A3", yon: "yatay" })).toEqual({ en: 420, boy: 297 });
  });
});

describe("şık indirme", () => {
  it("doğru şık hiç atılmaz, yanlışlar sondan atılır", () => {
    expect(sikIndir(["a", "b", "c", "d", "e"], 4, 4)).toEqual({ siklar: ["a", "b", "c", "e"], dogru: 3 });
    expect(sikIndir(["a", "b", "c", "d", "e"], 1, 4)).toEqual({ siklar: ["a", "b", "c", "d"], dogru: 1 });
  });
  it("sabit sorularda ve yeterince şık yoksa değişmez", () => {
    expect(sikIndir(["a", "b", "c", "Hepsi", "Hiçbiri"], 3, 4, true).siklar).toHaveLength(5);
    expect(sikIndir(["a", "b", "c", "d"], 0, 5).siklar).toHaveLength(4);
  });
});

describe("sayfalama", () => {
  const o = (id: string, yukseklik: number) => ({ id, yukseklik });
  it("ilk sayfada başlık yer kaplar, sütunlar soldan sağa dolar", () => {
    const d = sayfala([o("a", 45), o("b", 45), o("c", 45), o("d", 45), o("e", 45)], { sutunYuksekligi: 100, ilkSayfaBaslik: 20, sutun: 2 });
    expect(d.sayfalar).toEqual([[["a"], ["b"]], [["c", "d"], ["e"]]]);
  });
  it("sütundan uzun öğe tek başına bir sütuna konur", () => {
    const d = sayfala([o("a", 10), o("uzun", 500), o("b", 10)], { sutunYuksekligi: 100, ilkSayfaBaslik: 0, sutun: 1 });
    expect(d.sayfalar).toEqual([[["a"]], [["uzun"]], [["b"]]]);
  });
  it("öğeler arası boşluk hesaba katılır", () => {
    const d = sayfala([o("a", 50), o("b", 50)], { sutunYuksekligi: 100, ilkSayfaBaslik: 0, sutun: 1, aralik: 5 });
    expect(d.sayfalar).toEqual([[["a"]], [["b"]]]);
  });
});
