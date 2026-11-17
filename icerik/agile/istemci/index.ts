// Agile ve Scrum pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
// anlatımları, etkileşimli şekiller ve Sanal Lab deneyleri.
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
    1: { "u1-tahmin-empirik": 0, "u1-waterfall": 1, "u1-belirsizlik": 2, "u1-cynefin": 3, "u1-iteratif": 4, "u1-ucgen": 5, "u1-tarihce": 6 },
    2: { "u2-degerler": 0, "u2-sagdakiler": 1, "u2-ilke-teslim": 2, "u2-ilke-insan": 3, "u2-ilke-ilerleme": 4, "u2-ilke-takim": 5, "u2-yanilgilar": 6 },
    3: { "u3-lean": 0, "u3-israf": 1, "u3-cekme": 2, "u3-parti": 3, "u3-wip": 4, "u3-little": 5, "u3-darbogaz": 6, "u3-deger-akisi": 6 },
    4: { "u4-tanim": 0, "u4-sutunlar": 1, "u4-degerler": 2, "u4-yapi": 3, "u4-2020": 4, "u4-rehberde-yok": 5, "u4-terim-haritasi": 6, "u4-tarihce": 7 },
    5: { "u5-kendini-yoneten": 0, "u5-po": 1, "u5-po-tek": 1, "u5-sm-takim": 2, "u5-sm-po-org": 2, "u5-developers": 3, "u5-capraz": 4, "u5-boyut": 5, "u5-kim-karar": 6 },
    6: { "u6-sprint": 0, "u6-sprint-kurallar": 1, "u6-iptal": 1, "u6-planning-neden": 2, "u6-planning-ne": 2, "u6-planning-nasil": 2, "u6-daily": 3, "u6-daily-buyuk": 4, "u6-timebox": 5 },
    7: { "u7-review": 0, "u7-review-demo": 1, "u7-retro": 2, "u7-retro-cikti": 3, "u7-retro-bicim": 4, "u7-kolaylastirma": 5 },
    8: { "u8-pb": 0, "u8-product-goal": 1, "u8-refinement": 2, "u8-sb": 3, "u8-sprint-goal": 3, "u8-increment": 4, "u8-dod": 4, "u8-dod-coklu": 5, "u8-dor": 6 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
  // Sprint simülatörü: senaryo ve görevler sayfa açılınca ayrı parça olarak yüklenir
  sprintSimulatoru: () => import("./simulasyon").then((m) => m.default),
};

export default icerik;
