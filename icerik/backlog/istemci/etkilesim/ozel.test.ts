import { describe, expect, it } from "vitest";
import { ARACLAR, dilimDegerlendir, GHERKIN_ORNEKLERI, gherkinDenetle, ilkDegerSprinti, KAPASITE, OMURGA, SEVIYE_ADLARI, storyDenetle } from "./ozel";

describe("backlog: araç çevirmeni", () => {
  it("her araçta her seviyenin bir karşılığı ya da boşluğu var", () => {
    for (const a of ARACLAR) expect(a.seviyeler).toHaveLength(SEVIYE_ADLARI.length);
  });
});

describe("backlog: story map dilimi", () => {
  it("her şart adımdan en ince kart yürüyen iskelettir ve kapasiteye sığar", () => {
    const ince = OMURGA.map((a) => a.kartlar[0]!.id);
    const d = dilimDegerlendir(ince);
    expect(d.iskelet).toBe(true);
    expect(d.kapasiteAsildi).toBe(false);
    expect(d.puan).toBeLessThanOrEqual(KAPASITE);
  });
  it("ödemeyi derinleştirip teslim almayı atlamak yolculuğu yarım bırakır", () => {
    const d = dilimDegerlendir(["m1", "s1", "o1", "o2", "o3"]);
    expect(d.eksikAdimlar).toEqual(["Teslim al"]);
    expect(d.dikeyDerin).toBe(true);
    expect(d.kapasiteAsildi).toBe(true);
  });
  it("değerlendirme olmadan da yolculuk tamamlanır", () => {
    expect(dilimDegerlendir(["m1", "s1", "o1", "t1"]).iskelet).toBe(true);
  });
});

describe("backlog: story kurucu", () => {
  it("somut rol, tek istek ve fayda: uyarı yok", () => {
    expect(storyDenetle("bir yurt öğrencisi", "akşam yemeğini önceden ayırtmak", "yemeksiz kalmayayım").iyi).toBe(true);
  });
  it("tipik kokuları yakalar", () => {
    expect(storyDenetle("bir geliştirici", "ödeme tablosuna indeks eklemek", "").uyarilar).toHaveLength(3);
    expect(storyDenetle("bir kullanıcı", "uygulamanın hızlı ve kullanışlı olmasını", "sırada beklemeyeyim").uyarilar).toHaveLength(3);
    expect(storyDenetle("bir akademisyen", "menüyü görmek, yemek ayırtmak ve bakiye yüklemek", "zaman kazanayım").uyarilar).toHaveLength(1);
  });
});

describe("backlog: Gherkin kurucu", () => {
  it("hazır örneklerden yalnızca ilki uyarısız", () => {
    const sonuc = GHERKIN_ORNEKLERI.map((o) => gherkinDenetle(o.given, o.when, o.then).iyi);
    expect(sonuc).toEqual([true, false, false, false, false]);
  });
  it("her kötü örnek kendi uyarısını alır", () => {
    const [, sonucYok, belirsiz, arayuz, iki] = GHERKIN_ORNEKLERI.map((o) => gherkinDenetle(o.given, o.when, o.then).uyarilar.join(" "));
    expect(sonucYok).toMatch(/Then boş/);
    expect(belirsiz).toMatch(/Ölçülemeyen/);
    expect(arayuz).toMatch(/arayüz/);
    expect(iki).toMatch(/birden çok eylem/);
  });
});

describe("backlog: pasta dilimleyici", () => {
  it("dikey bölmede ilk değer 1. Sprint'te, yatayda 3. Sprint'te", () => {
    expect(ilkDegerSprinti("dikey")).toBe(1);
    expect(ilkDegerSprinti("yatay")).toBe(3);
  });
});
