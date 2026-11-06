// FPGA'nın istemcide yüklenen içeriği (src/lib/icerik.ts): haftalık dersler,
// şekiller, etkileşimli şekiller ve VHDL simülasyon alanı. Ders, şekil ve
// bileşen dosyaları fpga-pratik deposundan olduğu gibi alındı; soru ve kavram
// kimlikleri burada çatının biçimine çevrilir (../kimlik.ts).
import type { ComponentType } from "react";
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import type { Ders } from "../../../src/dersler/tipler";
import type { Gorsel } from "../../../src/gorseller/tip";
import { kavramKimligi, soruKimligi } from "../kimlik";
import { KAVRAM_BOLUMU as ESKI_KAVRAM_BOLUMU } from "./kaynak-kavram-bolumu";
import { HAFTA_1, HAFTA_2 } from "./dersler/hafta-1-2";
import { HAFTA_3 } from "./dersler/hafta-3";
import { HAFTA_4 } from "./dersler/hafta-4";
import { HAFTA_5 } from "./dersler/hafta-5";
import { HAFTA_6 } from "./dersler/hafta-6";
import { GORSELLER } from "./gorseller/index";
import { ETKILESIMLER } from "./etkilesim/index";

const dersCevir = (d: Ders): Ders => ({
  ...d,
  test: d.test.map(soruKimligi),
  bolumler: d.bolumler.map((b) => (b.dene ? { ...b, dene: b.dene.map(soruKimligi) } : b)),
});

const icerik: PratikIstemciIcerigi = {
  dersler: [HAFTA_1, HAFTA_2, HAFTA_3, HAFTA_4, HAFTA_5, HAFTA_6].map(dersCevir),
  kavramBolumu: Object.fromEntries(
    Object.entries(ESKI_KAVRAM_BOLUMU).map(([h, harita]) => [
      h,
      Object.fromEntries(Object.entries(harita).map(([k, i]) => [kavramKimligi(Number(h), k), i])),
    ]),
  ),
  gorseller: GORSELLER satisfies Gorsel[],
  etkilesimler: ETKILESIMLER as Record<string, ComponentType<{ g: Gorsel }>>,
  vhdl: true,
};

export default icerik;
