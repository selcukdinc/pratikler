// Biyomedikal'in istemcide yüklenen içeriği (src/lib/icerik.ts): şekilli konu
// anlatımları ve şekiller.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { DERSLER, KAVRAM_BOLUMU } from "./dersler/index";
import { UNITE_1_GORSELLERI } from "./gorseller/unite-1";
import { UNITE_2_GORSELLERI } from "./gorseller/unite-2";
import { UNITE_3_GORSELLERI } from "./gorseller/unite-3";
import { UNITE_4_GORSELLERI } from "./gorseller/unite-4";
import { UNITE_5_GORSELLERI } from "./gorseller/unite-5";
import { UNITE_6_GORSELLERI } from "./gorseller/unite-6";
import { UNITE_7_GORSELLERI } from "./gorseller/unite-7";
import { UNITE_8_GORSELLERI } from "./gorseller/unite-8";

const icerik: PratikIstemciIcerigi = {
  dersler: DERSLER,
  kavramBolumu: KAVRAM_BOLUMU,
  gorseller: [
    ...UNITE_1_GORSELLERI,
    ...UNITE_2_GORSELLERI,
    ...UNITE_3_GORSELLERI,
    ...UNITE_4_GORSELLERI,
    ...UNITE_5_GORSELLERI,
    ...UNITE_6_GORSELLERI,
    ...UNITE_7_GORSELLERI,
    ...UNITE_8_GORSELLERI,
  ],
};

export default icerik;
