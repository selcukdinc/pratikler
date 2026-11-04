// Kimyanın istemcide yüklenen içeriği (src/lib/icerik.ts): ünite anlatımları,
// Sanal Lab deneyleri ve çıkmış sınavlar.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { DERSLER, KAVRAM_BOLUMU } from "./dersler/index";
import { DENEYLER } from "./lab/index";
import { SINAVLAR } from "./cikmis";

const icerik: PratikIstemciIcerigi = {
  dersler: DERSLER,
  kavramBolumu: KAVRAM_BOLUMU,
  deneyler: DENEYLER,
  sinavlar: SINAVLAR,
};

export default icerik;
