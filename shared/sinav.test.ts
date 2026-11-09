import { describe, expect, it } from "vitest";
import {
  cevapYazisi, grupKagidi, kagitMm, numaralar, olcuAnahtari, sayfala, sigdir, sikIndir, sinavBelgesiHatasi, toplamPuan, varsayilanAyar,
  type GrupOgesi, type GrupSorusu, type SinavBelgesi, type SinavSorusu,
} from "./sinav";

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
  it("başlık stili: ilk sınav sade, sonra son kullanılan; eski sınav (ayar yok) kutulu sayılır", () => {
    expect(varsayilanAyar().baslik).toBe("sade");
    expect(varsayilanAyar({ baslik: "sade" }).baslik).toBe("sade");
    expect(varsayilanAyar({ universite: "İKÇÜ" }).baslik).toBe("kutulu");
    const b = belge();
    expect(sinavBelgesiHatasi({ ...b, ayar: { ...b.ayar, baslik: "süslü" } })).toMatch(/Başlık stili/);
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

describe("gruplar", () => {
  const soru = (id: string, kavram: string, choices?: string[], dogru = 0): SinavSorusu => ({
    id, topicId: "t1", week: 1, type: choices ? "mcq" : "tf", source: "derived", prompt: `soru ${id}`,
    payload: choices ? { choices } : {}, etiketler: [], difficulty: 1, sourceRef: null, kavram,
    answer: choices ? { index: dogru } : { value: true }, explanation: null,
  });
  const havuz = new Map([
    ["s1", soru("s1", "k1", ["a", "b", "c", "d", "e"], 2)],
    ["s2", soru("s2", "k1", ["a", "b", "c", "d"], 0)],
    ["s3", soru("s3", "k2", ["x", "y", "z", "w"], 3)],
    ["s4", soru("s4", "k2", ["p", "q", "r", "s"], 1)],
    ["s5", soru("s5", "k3")],
  ]);
  const b = (kip: "karisik" | "benzer"): SinavBelgesi => ({
    ad: "V", ayar: { ...varsayilanAyar(), sikSayisi: 4 }, gruplar: { sayi: 4, kip, tohum: 5 },
    ogeler: [
      { tur: "soru", id: "o1", soruId: "s1" },
      { tur: "soru", id: "o2", soruId: "s3" },
      { tur: "metin", id: "m", metin: "parça" },
      { tur: "soru", id: "o3", soruId: "s5" },
    ],
  });
  const ozet = (l: GrupOgesi[]) => l.map((o) => (o.tur === "soru" ? `${o.soru.id}:${o.siklar.join("")}:${o.dogru}` : "M"));

  it("A grubu kağıttaki gibidir (şık karıştırma kapalıyken)", () => {
    const k = { ...b("karisik"), gruplar: { sayi: 4 as const, kip: "karisik" as const, tohum: 5, sikKaristir: false } };
    expect(ozet(grupKagidi(k, havuz, 0))).toEqual(["s1:abcd:2", "s3:xyzw:3", "M", "s5::null"]);
  });
  it("A grubunda soru sırası korunur, şıklar karışır", () => {
    const l = grupKagidi(b("karisik"), havuz, 0);
    expect(l.map((o) => (o.tur === "soru" ? o.soru.id : "M"))).toEqual(["s1", "s3", "M", "s5"]);
    const s1 = l[0] as GrupSorusu;
    expect(s1.siklar[s1.dogru!]).toBe("c");
    expect(s1.sira.map((i) => "abcd"[i]).join("")).toBe(s1.siklar.join(""));
  });
  it("karışık kipte doğru şık şıkla birlikte taşınır, ortak metin yerinde kalır, sonuç tohuma bağlıdır", () => {
    for (let g = 1; g < 4; g++) {
      const l = grupKagidi(b("karisik"), havuz, g);
      expect(l[2]!.tur).toBe("metin");
      for (const o of l) if (o.tur === "soru" && o.soru.id === "s1") expect(o.siklar[o.dogru!]).toBe("c");
      for (const o of l) if (o.tur === "soru" && o.soru.id === "s3") expect(o.siklar[o.dogru!]).toBe("w");
      expect(ozet(grupKagidi(b("karisik"), havuz, g))).toEqual(ozet(l));
    }
  });
  it("benzer kipte aynı kavramdan başka soru gelir; benzeri yoksa soru kalır", () => {
    const l = grupKagidi(b("benzer"), havuz, 1).filter((o): o is GrupSorusu => o.tur === "soru");
    expect(l.map((o) => o.soru.id).sort()).toEqual(["s2", "s4", "s5"]);
    expect(l.find((o) => o.soru.id === "s2")!.duzenli).toBe(false);
  });
  it("cevap anahtarı", () => {
    const k = { ...b("karisik"), gruplar: { sayi: 1 as const, kip: "karisik" as const, tohum: 5, sikKaristir: false } };
    const l = grupKagidi(k, havuz, 0).filter((o): o is GrupSorusu => o.tur === "soru");
    expect(l.map(cevapYazisi)).toEqual(["C", "D", "D"]);
  });
  it("bozuk grup ayarı reddedilir", () => {
    expect(sinavBelgesiHatasi({ ...b("karisik"), gruplar: { sayi: 5, kip: "karisik", tohum: 1 } })).toMatch(/Grup/);
    expect(sinavBelgesiHatasi({ ...b("karisik"), gruplar: { sayi: 2, kip: "karisik", tohum: 1, denemeler: [0, -1] } })).toMatch(/Grup/);
    expect(sinavBelgesiHatasi({ ...b("karisik"), gruplar: { sayi: 2, kip: "karisik", tohum: 1, denemeler: [0, 7] } })).toBeNull();
  });

  // Sığdırma
  const sira = (l: GrupOgesi[]) => l.map((o) => (o.tur === "soru" ? o.soru.id : "M")).join(",");
  it("0. deneme eski kağıdı verir, saklanan deneme kullanılır, A hiç değişmez", () => {
    const k = b("karisik");
    expect(sira(grupKagidi(k, havuz, 1, 0))).toBe(sira(grupKagidi(k, havuz, 1)));
    const d = { ...k, gruplar: { ...k.gruplar!, denemeler: [0, 3] } };
    expect(ozet(grupKagidi(d, havuz, 1))).toEqual(ozet(grupKagidi(k, havuz, 1, 3)));
    expect(ozet(grupKagidi(d, havuz, 0))).toEqual(ozet(grupKagidi(k, havuz, 0)));
  });
  it("ölçü anahtarı şık sırasına bağlı değil; karışık kipte bütün denemelerde aynı", () => {
    const k = b("karisik");
    const anahtarlar = (d: number) => grupKagidi(k, havuz, 1, d).map(olcuAnahtari).sort();
    for (let d = 1; d < 10; d++) expect(anahtarlar(d)).toEqual(anahtarlar(0));
  });
  it("sığan ilk denemeyi bulur; şu anki sığıyorsa ona dokunmaz; sığan yoksa en kısasını seçer", () => {
    const k = b("karisik");
    // Sayfa sayısı yalnızca s1'in yerine bağlı olsun: s1 başta ise 2, değilse 3 sayfa
    const sayac = (l: GrupOgesi[]) => (l[0]?.tur === "soru" && l[0].soru.id === "s1" ? 2 : 3);
    const r = sigdir(k, havuz, 1, 2, sayac)!;
    expect(r.sayfa).toBe(2);
    expect(sayac(grupKagidi(k, havuz, 1, r.deneme))).toBe(2);
    const dk = { ...k, gruplar: { ...k.gruplar!, denemeler: [0, r.deneme] } };
    expect(sigdir(dk, havuz, 1, 2, sayac)!.deneme).toBe(r.deneme);
    expect(sigdir(k, havuz, 1, 1, () => 3)).toEqual({ deneme: 0, sayfa: 3 });
    expect(sigdir(k, havuz, 1, 1, () => null)).toBeNull();
  });
});
