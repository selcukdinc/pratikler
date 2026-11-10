import { describe, expect, it } from "vitest";
import { tasimaEki, tasimaOku, tasinacaklar, tasinaniYaz } from "./eskiAdres";

function depo(ilk: Record<string, string> = {}) {
  const m = new Map(Object.entries(ilk));
  return {
    m,
    get length() { return m.size; },
    key: (i: number) => [...m.keys()][i] ?? null,
    getItem: (a: string) => m.get(a) ?? null,
    setItem: (a: string, v: string) => void m.set(a, v),
  };
}

describe("eski alan adından taşınan tarayıcı kayıtları", () => {
  it("kayıtlar adresin # kısmında gider ve geri okunur", () => {
    const eski = depo({ tema: "kahve", "pratik:ders-ilerleme:fpga": '{"1":["a","ş"]}', "pratikler:tasindi": "1" });
    const k = tasinacaklar(eski);
    expect(k).toEqual({ tema: "kahve", "pratik:ders-ilerleme:fpga": '{"1":["a","ş"]}' });
    const t = tasimaOku(tasimaEki({ h: "#/sorular", k }));
    expect(t).toEqual({ h: "#/sorular", k });
  });

  it("sınıra sığmayan büyük kayıt geride kalır, küçükler gider", () => {
    const k = tasinacaklar(depo({ buyuk: "x".repeat(500), kucuk: "1" }), 100);
    expect(k).toEqual({ kucuk: "1" });
  });

  it("yeni adreste var olan kayıt ezilmez", () => {
    const yeni = depo({ tema: "karanlik" });
    tasinaniYaz(yeni, { tema: "kahve", "pratik:yazi-olcek": "1.1" });
    expect(yeni.m.get("tema")).toBe("karanlik");
    expect(yeni.m.get("pratik:yazi-olcek")).toBe("1.1");
  });

  it("bozuk ya da başka bir # kısmı yok sayılır", () => {
    expect(tasimaOku("#/sorular")).toBeNull();
    expect(tasimaOku("#aktar=%7Bbozuk")).toBeNull();
    expect(tasimaOku("#aktar=" + encodeURIComponent('{"h":"javascript:1","k":{}}'))).toEqual({ h: undefined, k: {} });
  });
});
