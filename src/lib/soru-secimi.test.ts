import { describe, expect, it } from "vitest";
import type { SinavOgesi, SinavSorusu } from "../../shared/sinav";
import { BOS_SUZGEC, aramaParcalari, basariSinifi, etkinSayisi, rastgeleSec, sirala, suz, uniteyiDegistir } from "./soru-secimi";

const soru = (id: string, ek: Partial<SinavSorusu> = {}): SinavSorusu => ({
  id, topicId: "t1", week: 1, type: "mcq", source: "derived", prompt: `Soru ${id}`, payload: { choices: ["a", "b"] },
  etiketler: ["ders"], difficulty: 2, sourceRef: null, kavram: "u1-a", answer: { index: 0 }, explanation: null,
  basari: { kisi: 0, dogru: 0 }, kullanim: 0, ...ek,
});

const sorular = [
  soru("s1"),
  soru("s2", { week: 2, kavram: "u2-a", topicId: "t2", type: "tf", difficulty: 4, prompt: "Şekil [[G-S1-1]] ile", etiketler: ["kitap"] }),
  soru("s3", { kavram: "u1-b", prompt: "Formül $V = IR$ nedir?", basari: { kisi: 10, dogru: 9 }, kullanim: 2 }),
  soru("s4", { kavram: "u1-b", basari: { kisi: 10, dogru: 2 } }),
  soru("s5", { week: 2, kavram: "u2-a", topicId: "t2", payload: { choices: ["Ohm yasası", "Kirchhoff"] } }),
];

describe("soru süzme", () => {
  const s = (ek: Partial<typeof BOS_SUZGEC>) => suz(sorular, { ...BOS_SUZGEC, ...ek }, new Set(["s1", "s3"])).map((q) => q.id);
  it("boş süzgeç hepsini verir", () => expect(s({})).toEqual(["s1", "s2", "s3", "s4", "s5"]));
  it("ünite, tür, kavram, konu, zorluk ve etiket", () => {
    expect(s({ uniteler: [2] })).toEqual(["s2", "s5"]);
    expect(s({ turler: ["tf"] })).toEqual(["s2"]);
    expect(s({ kavram: "u1-b" })).toEqual(["s3", "s4"]);
    expect(s({ konu: "t2" })).toEqual(["s2", "s5"]);
    expect(s({ zorMin: 3 })).toEqual(["s2"]);
    expect(s({ etiket: "kitap" })).toEqual(["s2"]);
  });
  it("şekil, formül, seçim, kullanım ve başarı", () => {
    expect(s({ sekil: "var" })).toEqual(["s2"]);
    expect(s({ formul: "var" })).toEqual(["s3"]);
    expect(s({ secim: "secilmemis" })).toEqual(["s2", "s4", "s5"]);
    // s3 iki sınavda; biri bu kağıt, yani başka bir sınavda da kullanılmış
    expect(s({ kullanim: "kullanilmis" })).toEqual(["s3"]);
    expect(s({ basari: "kolay" })).toEqual(["s3"]);
    expect(s({ basari: "zor" })).toEqual(["s4"]);
    expect(basariSinifi(sorular[0]!)).toBe("veriyok");
  });
  it("arama şıklarda ve kimlikte de bakar; bütün kelimeler ya da tırnaklı ifade", () => {
    expect(s({ ara: "kirchhoff" })).toEqual(["s5"]);
    expect(s({ ara: "s4" })).toEqual(["s4"]);
    expect(s({ ara: "formül nedir" })).toEqual(["s3"]);
    expect(s({ ara: '"nedir formül"' })).toEqual([]);
    expect(aramaParcalari('a "b c" d')).toEqual(["a", "b c", "d"]);
  });
  it("etkin süzgeç sayısı", () => {
    expect(etkinSayisi(BOS_SUZGEC)).toBe(0);
    expect(etkinSayisi({ ...BOS_SUZGEC, uniteler: [1], zorMax: 3, ara: "x", siralama: "zorluk" })).toBe(3);
  });
  it("sıralama", () => {
    expect(sirala(sorular, "zorluk").map((q) => q.id)[4]).toBe("s2");
    expect(sirala(sorular, "basari").map((q) => q.id).slice(0, 2)).toEqual(["s4", "s3"]);
  });
});

describe("rastgele seçim ve ünite değiştirme", () => {
  it("önce her kavramdan bir soru seçer, istenenden fazla seçmez", () => {
    const l = rastgeleSec(sorular.filter((q) => q.week === 1), 2);
    expect(l).toHaveLength(2);
    expect(new Set(l.map((q) => q.kavram)).size).toBe(2);
    expect(rastgeleSec(sorular, 50)).toHaveLength(5);
  });
  it("ünitenin soruları aynı kavramdan başka sorularla değişir; puan ve yer kalır, başka ünite değişmez", () => {
    const m = new Map(sorular.map((q) => [q.id, q]));
    const ogeler: SinavOgesi[] = [
      { tur: "soru", id: "o1", soruId: "s3", puan: 10, metin: "düzenlenmiş" },
      { tur: "metin", id: "m", metin: "yönerge" },
      { tur: "soru", id: "o2", soruId: "s5" },
    ];
    const r = uniteyiDegistir(ogeler, m, 1);
    expect(r.degisen).toBe(1);
    expect(r.ogeler[0]).toEqual({ tur: "soru", id: "o1", soruId: "s4", puan: 10 });
    expect(r.ogeler.slice(1)).toEqual(ogeler.slice(1));
    // Benzeri olmayan soru yerinde kalır
    expect(uniteyiDegistir(ogeler, m, 2).degisen).toBe(0);
  });
});
