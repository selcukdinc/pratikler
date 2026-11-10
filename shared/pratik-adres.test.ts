import { describe, expect, it } from "vitest";
import { KADEMELER, PRATIKLER, eskiAdresinYenisi, hosttanPratik, pratikAdresi, yoldanPratik } from "../icerik/index";
import { AYRILMIS_YOLLAR } from "./yonetim";

describe("alan adından pratik", () => {
  it("alt alan adını tanır, çatıyı ve bilinmeyeni null döndürür", () => {
    expect(hosttanPratik("tipelektronigi.selcukdinc.dev")?.id).toBe("tip-elektronigi");
    expect(hosttanPratik("TipElektronigi.selcukdinc.dev:443")?.id).toBe("tip-elektronigi");
    expect(hosttanPratik("pratikler.selcukdinc.dev")).toBeNull();
    expect(hosttanPratik("yok.selcukdinc.dev")).toBeNull();
  });

  it("her pratik çatı adresinin yolunda açılır", () => {
    for (const p of PRATIKLER) {
      expect(p.yol, p.id).toBeTruthy();
      expect(pratikAdresi(p)).toBe(`https://pratikler.selcukdinc.dev/${p.yol}`);
      expect(yoldanPratik(`/${p.yol}/sorular`)?.id).toBe(p.id);
    }
  });

  it("pratik yolları sitenin sayfalarıyla ve birbiriyle çakışmaz", () => {
    const yollar = PRATIKLER.map((p) => p.yol!);
    expect(new Set(yollar).size).toBe(yollar.length);
    for (const p of PRATIKLER) {
      const [ilk, ...kalan] = p.yol!.split("/");
      expect(AYRILMIS_YOLLAR, p.id).not.toContain(ilk);
      // Tek parçalı yol kademe adı olamaz; çok parçalı yolun ilk parçası kademedir
      expect(KADEMELER.some((k) => k.id === ilk), p.id).toBe(kalan.length > 0);
      // Bir pratiğin yolu ötekinin altında kalmaz
      expect(PRATIKLER.filter((o) => o !== p && o.yol!.startsWith(`${p.yol}/`))).toEqual([]);
    }
  });

  it("eski alan adındaki bağlantı yoldaki karşılığına çevrilir", () => {
    expect(eskiAdresinYenisi("girisimcilik.selcukdinc.dev")).toBe("https://pratikler.selcukdinc.dev/girisimcilik");
    expect(eskiAdresinYenisi("girisimcilik.selcukdinc.dev", "/sorular", "?hafta=2")).toBe("https://pratikler.selcukdinc.dev/girisimcilik/sorular?hafta=2");
    expect(eskiAdresinYenisi("tipelektronigi.selcukdinc.dev", "/havuz/vize24")).toBe("https://pratikler.selcukdinc.dev/tipelektronigi/havuz/vize24");
    expect(eskiAdresinYenisi("pratikler.selcukdinc.dev", "/girisimcilik")).toBeNull();
    expect(eskiAdresinYenisi("localhost", "/")).toBeNull();
    // Alan adı hiç açılmamış pratik
    expect(eskiAdresinYenisi("sinif6turkce.selcukdinc.dev")).toBeNull();
  });

  it("eski alan adı olan her pratik wrangler.jsonc'ta durur, yenisi eklenmez", async () => {
    const { readFileSync } = await import("node:fs");
    const wrangler = readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8");
    const alanlar = [...wrangler.matchAll(/"pattern": "([a-z0-9]+)\.selcukdinc\.dev"/g)].map((m) => m[1]!).filter((a) => a !== "pratikler");
    expect(alanlar.sort()).toEqual(PRATIKLER.filter((p) => p.eskiAlan).map((p) => p.alt).sort());
  });
});
