import { describe, expect, it } from "vitest";
import { ALISTIRMALAR, karsilayanlar } from "./tasarim";
import { VAKALAR } from "./mesajlasma/vakalar";
import { gorunum, ORNEK_YAZISMA, tasarimOku, tasarimYaz } from "./mesajlasma/model";

describe("tasarım alıştırmaları", () => {
  for (const a of ALISTIRMALAR)
    it(`${a.id}: her mimari her tehdide cevap verir`, () => {
      for (const m of a.mimariler) for (const t of a.tehditler) expect(m.sonuc[t.id], `${m.id}/${t.id}`).toBeDefined();
      for (const t of a.tehditler) if (t.secenek) expect(a.secenekler?.some((s) => s.id === t.secenek)).toBe(true);
    });
  it("son mimari her alıştırmada en çok tehdidi karşılar", () => {
    const gb = ALISTIRMALAR[0]!;
    expect(karsilayanlar(gb, ["icerik", "yazar", "keyfi", "hesap"])).toEqual(["anonim-uyelik"]);
    expect(karsilayanlar(gb, ["istemci"])).toEqual([]);
    const p = ALISTIRMALAR[1]!;
    expect(karsilayanlar(p, ["yonetici", "kayip"])).toEqual(["grup-tam"]);
    expect(karsilayanlar(p, ["zaman"])).toEqual([]);
  });
});

describe("vaka çalışmaları", () => {
  const son = ORNEK_YAZISMA[ORNEK_YAZISMA.length - 1]!;
  it("her vaka simülatör bağlantısına yazılıp okunur", () => {
    for (const v of VAKALAR) {
      expect(tasarimOku(tasarimYaz(v.tasarim))).toEqual(v.tasarim);
    }
  });
  it("Telegram varsayılanında sunucu okur, gizli sohbette okuyamaz", () => {
    const t = (id: string) => VAKALAR.find((v) => v.id === id)!.tasarim;
    expect(gorunum(t("telegram"), "gelistirici", son).duzey).toBe("metin");
    expect(gorunum(t("telegram-gizli"), "gelistirici", son).duzey).toBe("bayt");
    expect(gorunum(t("telegram-gizli"), "yedek", son).duzey).toBe("hicbiri");
  });
  it("WhatsApp ve iMessage'da varsayılan yedek sağlayıcıya açık, Signal'de yedek yok", () => {
    const t = (id: string) => VAKALAR.find((v) => v.id === id)!.tasarim;
    expect(gorunum(t("whatsapp"), "yedek", son).duzey).toBe("metin");
    expect(gorunum(t("imessage"), "yedek", son).duzey).toBe("metin");
    expect(gorunum(t("signal"), "yedek", son).duzey).toBe("hicbiri");
    expect(gorunum({ ...t("signal"), dogrulandi: true }, "sunucu", son).meta).not.toContain("gönderen");
  });
});
