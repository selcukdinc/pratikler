import { describe, expect, it } from "vitest";
import { hosttanPratik, pratikAdresi, yoldanPratik } from "../../icerik/index";
import { href, parseHash, parsePath, tabanaEkle, tabandanCikar, tamYuklemeMi } from "./router";

describe("yönlendirici", () => {
  it("yolları çözer ve geri üretir", () => {
    for (const r of [
      { page: "pratik" },
      { page: "sorular" },
      { page: "sorular", topic: "esz-atamalar" },
      { page: "sorular", hafta: 3 },
      { page: "ders" },
      { page: "tanitim" },
      { page: "sss" },
      { page: "ders", hafta: 4 },
      { page: "profil", ad: "ali_42" },
      { page: "ayarlar" },
      { page: "ayarlar", sekme: "hesap" },
      { page: "ayarlar", sekme: "sil" },
      { page: "giris", sonra: "/sorular/nitelikler" },
      { page: "yonetim", bolum: "genel" },
      { page: "yonetim", bolum: "sorular" },
      { page: "yonetim", bolum: "sorular", soru: "h3-mod-rem" },
      { page: "yonetim", bolum: "kullanicilar" },
      { page: "yonetim", bolum: "oneriler", alt: "abc" },
      { page: "yonetim", bolum: "mesajlar" },
      { page: "oner" },
      { page: "mesajlar" },
      { page: "mesajlar", id: "t-1" },
    ] as const) {
      const u = new URL(href(r), "https://x");
      expect(parsePath(u.pathname, u.search)).toEqual(r.page === "sorular" && !("topic" in r) && !("hafta" in r) ? { page: "sorular", topic: undefined } : r);
    }
  });
  it("kök adres pratik alanını açar, bilinmeyen adres bulunamadı döner", () => {
    expect(parsePath("/")).toEqual({ page: "pratik" });
    expect(parsePath("/yok-boyle")).toEqual({ page: "bulunamadi" });
  });
  it("girişten sonra başka siteye yönlendirmez", () => {
    expect(parsePath("/giris", "?sonra=https://kotu.example")).toEqual({ page: "giris", sonra: undefined });
    expect(parsePath("/giris", "?sonra=//kotu.example")).toEqual({ page: "giris", sonra: undefined });
  });
  it("eski hash adreslerini çevirir", () => {
    expect(parseHash("#/sorular/nitelikler")).toEqual({ page: "sorular", topic: "nitelikler" });
    expect(parseHash("#/ilerleme")).toEqual({ page: "ilerleme" });
    expect(parseHash("")).toBeNull();
    expect(parseHash("#baslik")).toBeNull();
  });
  it("yol tabanlı pratikte adresleri tabanla yazar, tabansız okur", () => {
    const t = "/sinif6/turkce";
    expect(tabanaEkle("/", t)).toBe(t);
    expect(tabanaEkle("/sorular/x", t)).toBe(`${t}/sorular/x`);
    expect(tabanaEkle("/?a=1", t)).toBe(`${t}?a=1`);
    expect(tabanaEkle(`${t}/ilerleme`, t)).toBe(`${t}/ilerleme`);
    expect(tabanaEkle("https://pratikler.selcukdinc.dev", t)).toBe("https://pratikler.selcukdinc.dev");
    expect(tabanaEkle("/sorular", "")).toBe("/sorular");
    expect(tabandanCikar(t, t)).toBe("/");
    expect(tabandanCikar(`${t}/sorular/x`, t)).toBe("/sorular/x");
    expect(tabandanCikar("/sinif6/turkcex", t)).toBe("/sinif6/turkcex");
    expect(parsePath(tabandanCikar(`${t}/ilerleme`, t))).toEqual({ page: "ilerleme" });
  });
  it("çatıya ve başka pratiğe giden bağlantılar sayfayı yeniler", () => {
    const t = "/sinif6/turkce";
    expect(tamYuklemeMi("/sorular", "/sorular", "", t)).toBe(false);
    expect(tamYuklemeMi("https://pratikler.selcukdinc.dev", "/", "", t)).toBe(true);
    expect(tamYuklemeMi("/?pratik=katalog", "/", "?pratik=katalog", t)).toBe(true);
    expect(tamYuklemeMi("/ilerleme", "/ilerleme", "", "")).toBe(false);
    // Çatıdan ya da başka bir pratikten 6. sınıf Türkçe'ye geçiş, içinde gezinme
    expect(tamYuklemeMi(t, t, "", "")).toBe(true);
    expect(tamYuklemeMi(`${t}/sorular`, `${t}/sorular`, "", t)).toBe(false);
  });
  it("yoldan pratiği bulur, alan adından bulmaz", () => {
    expect(yoldanPratik("/sinif6/turkce/sorular")?.id).toBe("sinif6-turkce");
    expect(yoldanPratik("/sinif6/turkce")?.id).toBe("sinif6-turkce");
    expect(yoldanPratik("/sinif6")).toBeNull();
    expect(yoldanPratik("/sinif6/turkcex")).toBeNull();
    expect(hosttanPratik("sinif6turkce.selcukdinc.dev")).toBeNull();
    expect(pratikAdresi(yoldanPratik("/sinif6/turkce")!)).toBe("https://pratikler.selcukdinc.dev/sinif6/turkce");
  });
});
