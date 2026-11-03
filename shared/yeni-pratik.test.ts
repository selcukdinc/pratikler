import { describe, expect, it } from "vitest";
import { yeniPratikHatasi, type YeniPratikGirdi } from "./yonetim";

const g: YeniPratikGirdi = { ad: "Devre Analizi", id: "devre-analizi", alt: "devreanalizi", onek: "da", alan: "Mühendislik", kaynakKlasoru: "~/dersler/devre", notlar: "" };
const mevcut = [{ id: "tip-elektronigi", alt: "tipelektronigi" }];

describe("yeni pratik girdisi", () => {
  it("geçerli girdiyi kabul eder", () => expect(yeniPratikHatasi(g, mevcut)).toBeNull());
  it("eski sitelerin ve var olan pratiklerin alt alan adını reddeder", () => {
    expect(yeniPratikHatasi({ ...g, alt: "fpga" }, mevcut)).toMatch(/başka bir sitede/);
    expect(yeniPratikHatasi({ ...g, alt: "pratikler" }, mevcut)).toMatch(/başka bir sitede/);
    expect(yeniPratikHatasi({ ...g, alt: "tipelektronigi" }, mevcut)).toMatch(/zaten var/);
  });
  it("biçimsiz kimlik, önek ve göreli klasör yolunu reddeder", () => {
    expect(yeniPratikHatasi({ ...g, id: "Devre Analizi" }, mevcut)).not.toBeNull();
    expect(yeniPratikHatasi({ ...g, alt: "devre-analizi" }, mevcut)).not.toBeNull();
    expect(yeniPratikHatasi({ ...g, onek: "d" }, mevcut)).not.toBeNull();
    expect(yeniPratikHatasi({ ...g, kaynakKlasoru: "dersler/devre" }, mevcut)).not.toBeNull();
  });
});
