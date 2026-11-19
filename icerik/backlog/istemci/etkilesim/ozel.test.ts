import { describe, expect, it } from "vitest";
import { ARACLAR, dilimDegerlendir, KAPASITE, OMURGA, SEVIYE_ADLARI, storyDenetle } from "./ozel";

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
