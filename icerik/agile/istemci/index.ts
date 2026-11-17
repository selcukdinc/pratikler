// Agile ve Scrum pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
// anlatımları, etkileşimli şekiller ve Sanal Lab deneyleri.
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
    1: { "u1-tahmin-empirik": 0, "u1-waterfall": 1, "u1-belirsizlik": 2, "u1-cynefin": 3, "u1-iteratif": 4, "u1-ucgen": 5, "u1-tarihce": 6 },
    2: { "u2-degerler": 0, "u2-sagdakiler": 1, "u2-ilke-teslim": 2, "u2-ilke-insan": 3, "u2-ilke-ilerleme": 4, "u2-ilke-takim": 5, "u2-yanilgilar": 6 },
    3: { "u3-lean": 0, "u3-israf": 1, "u3-cekme": 2, "u3-parti": 3, "u3-wip": 4, "u3-little": 5, "u3-darbogaz": 6, "u3-deger-akisi": 6 },
    4: { "u4-tanim": 0, "u4-sutunlar": 1, "u4-degerler": 2, "u4-yapi": 3, "u4-2020": 4, "u4-rehberde-yok": 5, "u4-terim-haritasi": 6, "u4-tarihce": 7 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
};

export default icerik;
