// Backlog pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders anlatımları,
// etkileşimli şekiller ve Sanal Lab deneyleri.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { UNITE_1 } from "./dersler/unite-1";
import { UNITE_2 } from "./dersler/unite-2";
import { UNITE_3 } from "./dersler/unite-3";
import { UNITE_4 } from "./dersler/unite-4";
import { UNITE_5 } from "./dersler/unite-5";
import { UNITE_6 } from "./dersler/unite-6";
import { UNITE_7 } from "./dersler/unite-7";
import { UNITE_8 } from "./dersler/unite-8";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";
import { DENEYLER } from "./lab";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5, UNITE_6, UNITE_7, UNITE_8],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  kavramBolumu: {
    1: { "u1-rehber": 0, "u1-sahiplik": 2, "u1-nitelikler": 3, "u1-product-goal": 4, "u1-buzdagi": 5, "u1-deep": 6, "u1-kokular": 7 },
    2: { "u2-seviyeler": 0, "u2-epic": 1, "u2-feature": 2, "u2-task": 3, "u2-araclar": 4, "u2-kim-yazar": 5, "u2-ne-zaman": 6 },
    3: { "u3-vizyon": 0, "u3-okr": 1, "u3-persona": 2, "u3-impact": 3, "u3-story-map": 4, "u3-dilim": 5 },
    4: { "u4-tarihce": 0, "u4-3c": 1, "u4-kalip": 2, "u4-rol": 3, "u4-job-story": 4, "u4-konusma": 5 },
    5: { "u5-invest": 0, "u5-independent": 1, "u5-negotiable": 2, "u5-valuable": 3, "u5-estimable": 4, "u5-small": 5, "u5-testable": 6, "u5-gerilim": 7 },
    6: { "u6-tanim": 0, "u6-kural": 1, "u6-gherkin": 2, "u6-bdd": 3, "u6-example-mapping": 4, "u6-three-amigos": 5, "u6-ac-dod": 6, "u6-olcu": 7 },
    7: { "u7-neden": 0, "u7-dikey": 1, "u7-spidr": 2, "u7-lawrence": 3, "u7-akis-crud": 4, "u7-basit-karmasik": 5, "u7-hiyerarsi": 6 },
    8: { "u8-nfr": 0, "u8-nfr-yeri": 1, "u8-teknik": 2, "u8-spike": 3, "u8-hata": 4, "u8-borc": 5 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
  backlogAtolyesi: () => import("./atolye").then((m) => m.default),
};

export default icerik;
