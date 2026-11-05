// DSP'nin istemcide yüklenen içeriği (src/lib/icerik.ts): haftalık dersler,
// etkileşimli şekiller ve MatStudio. Ders, şekil ve bileşen dosyaları
// dsp-pratik deposundan olduğu gibi alındı; soru ve kavram kimlikleri burada
// çatının biçimine çevrilir (../kimlik.ts).
import type { ComponentType } from "react";
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import type { Ders } from "../../../src/dersler/tipler";
import type { Gorsel } from "../../../src/gorseller/tip";
import { kavramKimligi, soruKimligi } from "../kimlik";
import { KAVRAM_BOLUMU as ESKI_KAVRAM_BOLUMU } from "./kaynak-kavram-bolumu";
import { HAFTA_1 } from "./dersler/hafta-1";
import { HAFTA_2 } from "./dersler/hafta-2";
import { HAFTA_3 } from "./dersler/hafta-3";
import { HAFTA_4 } from "./dersler/hafta-4";
import { HAFTA_5 } from "./dersler/hafta-5";
import { HAFTA_6 } from "./dersler/hafta-6";
import { HAFTA_7 } from "./dersler/hafta-7";
import { HAFTA_8 } from "./dersler/hafta-8";
import { PROJE } from "./dersler/proje";
import { HAFTA_1_GORSELLERI } from "./gorseller/hafta-1";
import { HAFTA_2_GORSELLERI } from "./gorseller/hafta-2";
import { HAFTA_3_GORSELLERI } from "./gorseller/hafta-3";
import { HAFTA_4_GORSELLERI } from "./gorseller/hafta-4";
import { HAFTA_5_GORSELLERI } from "./gorseller/hafta-5";
import { HAFTA_6_GORSELLERI } from "./gorseller/hafta-6";
import { HAFTA_7_GORSELLERI } from "./gorseller/hafta-7";
import { HAFTA_8_GORSELLERI } from "./gorseller/hafta-8";
import { PROJE_GORSELLERI } from "./gorseller/proje";
import { ETKILESIMLER } from "./etkilesim";

const dersCevir = (d: Ders): Ders => ({
  ...d,
  test: d.test.map(soruKimligi),
  bolumler: d.bolumler.map((b) => (b.dene ? { ...b, dene: b.dene.map(soruKimligi) } : b)),
});

const icerik: PratikIstemciIcerigi = {
  dersler: [HAFTA_1, HAFTA_2, HAFTA_3, HAFTA_4, HAFTA_5, HAFTA_6, HAFTA_7, HAFTA_8, PROJE].map(dersCevir),
  kavramBolumu: Object.fromEntries(
    Object.entries(ESKI_KAVRAM_BOLUMU).map(([h, harita]) => [
      h,
      Object.fromEntries(Object.entries(harita).map(([k, i]) => [kavramKimligi(Number(h), k), i])),
    ]),
  ),
  gorseller: [
    ...HAFTA_1_GORSELLERI, ...HAFTA_2_GORSELLERI, ...HAFTA_3_GORSELLERI, ...HAFTA_4_GORSELLERI,
    ...HAFTA_5_GORSELLERI, ...HAFTA_6_GORSELLERI, ...HAFTA_7_GORSELLERI, ...HAFTA_8_GORSELLERI, ...PROJE_GORSELLERI,
  ] satisfies Gorsel[],
  etkilesimler: ETKILESIMLER as Record<string, ComponentType<{ g: Gorsel }>>,
  matstudio: true,
};

export default icerik;
