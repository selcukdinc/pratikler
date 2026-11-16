import { describe, expect, it } from "vitest";
import { hex } from "./bayt";
import { kasaAc, kasaKur, kurtarmaSargisi, kurtarmaylaAc, parolaDegistir } from "./kasa";

const NOTLAR = ["Wi-Fi: kafe-misafir", "Banka PIN'i: 4821"];

describe("sıfır bilgili kasa", () => {
  it("doğru parolayla açılır, sunucu satırında açık metin ya da anahtar yoktur", async () => {
    const { sunucu, cihaz } = await kasaKur("uzun ve guclu parola", "ayse@ornek.com", 1000, NOTLAR);
    const a = await kasaAc(sunucu, "uzun ve guclu parola");
    expect(a.tamam && a.ogeler).toEqual(NOTLAR);
    const satir = JSON.stringify(sunucu);
    for (const s of ["kafe-misafir", "4821", cihaz.kasaAnahtari, cihaz.sifrelemeAnahtari, cihaz.anaAnahtar, cihaz.girisOzeti, ...cihaz.ogeAnahtarlari]) expect(satir).not.toContain(s);
  });
  it("yanlış parolayı sunucu reddeder", async () => {
    const { sunucu } = await kasaKur("dogru", "ayse@ornek.com", 1000, NOTLAR);
    const a = await kasaAc(sunucu, "yanlis");
    expect(a.tamam).toBe(false);
  });
  it("giriş özeti ile şifreleme anahtarı ayrıdır", async () => {
    const { cihaz } = await kasaKur("p", "m@ornek.com", 1000, []);
    expect(cihaz.girisOzeti).not.toBe(cihaz.sifrelemeAnahtari);
  });
  it("parola değişince öğeler yeniden şifrelenmez, eski parola artık açmaz", async () => {
    const { sunucu } = await kasaKur("eski parola", "ayse@ornek.com", 1000, NOTLAR);
    const yeni = (await parolaDegistir(sunucu, "eski parola", "yeni parola"))!;
    expect(yeni.ogeler).toEqual(sunucu.ogeler);
    expect(yeni.sariliKasaAnahtari).not.toEqual(sunucu.sariliKasaAnahtari);
    expect((await kasaAc(yeni, "eski parola")).tamam).toBe(false);
    const a = await kasaAc(yeni, "yeni parola");
    expect(a.tamam && a.ogeler).toEqual(NOTLAR);
  });
  it("kurtarma kodu kasa anahtarını ikinci bir yoldan açar", async () => {
    const { sunucu } = await kasaKur("p", "m@ornek.com", 1000, NOTLAR);
    const a = await kasaAc(sunucu, "p");
    if (!a.tamam) throw new Error();
    const { kod, sargi } = await kurtarmaSargisi(a.kasaAnahtari);
    expect(kod).toMatch(/^([0-9A-F]{4}-){9}[0-9A-F]{4}$/);
    expect(hex((await kurtarmaylaAc(kod.toLowerCase(), sargi))!)).toBe(hex(a.kasaAnahtari));
    expect(await kurtarmaylaAc("0000-" + kod.slice(5), sargi)).toBeNull();
  });
});
