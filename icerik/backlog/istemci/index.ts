// Backlog pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders anlatımları,
// etkileşimli şekiller ve Sanal Lab deneyleri.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { UNITE_1 } from "./dersler/unite-1";
import { UNITE_2 } from "./dersler/unite-2";
import { UNITE_3 } from "./dersler/unite-3";
import { UNITE_4 } from "./dersler/unite-4";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";
import { DENEYLER } from "./lab";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  kavramBolumu: {
    1: { "u1-rehber": 0, "u1-sahiplik": 2, "u1-nitelikler": 3, "u1-product-goal": 4, "u1-buzdagi": 5, "u1-deep": 6, "u1-kokular": 7 },
    2: { "u2-seviyeler": 0, "u2-epic": 1, "u2-feature": 2, "u2-task": 3, "u2-araclar": 4, "u2-kim-yazar": 5, "u2-ne-zaman": 6 },
    3: { "u3-vizyon": 0, "u3-okr": 1, "u3-persona": 2, "u3-impact": 3, "u3-story-map": 4, "u3-dilim": 5 },
    4: { "u4-tarihce": 0, "u4-3c": 1, "u4-kalip": 2, "u4-rol": 3, "u4-job-story": 4, "u4-konusma": 5 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
};

export default icerik;
