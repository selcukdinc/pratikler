// Git ve GitHub pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
// anlatımları, etkileşimli şekiller ve sandbox. Sandbox'ın görevleri ve sanal Git
// motoru yalnızca sandbox sayfası (ya da dersteki bir terminal) açılınca indirilir.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { UNITE_1 } from "./dersler/unite-1";
import { UNITE_2 } from "./dersler/unite-2";
import { UNITE_3 } from "./dersler/unite-3";
import { UNITE_4 } from "./dersler/unite-4";
import { UNITE_5 } from "./dersler/unite-5";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  kavramBolumu: {
    1: { "u1-neden": 0, "u1-git-github": 1, "u1-merkezi-dagitik": 2, "u1-tarihce": 3, "u1-temel": 4 },
    2: { "u2-kurulum": 0, "u2-terminal": 1, "u2-config": 2, "u2-editor-yardim": 3 },
    3: { "u3-init": 0, "u3-uc-alan": 1, "u3-status": 2, "u3-add": 3, "u3-commit": 4 },
    4: { "u4-log": 0, "u4-diff": 1, "u4-show-hash": 2, "u4-mesaj": 3, "u4-gitignore": 4 },
    5: { "u5-hesap-depo": 0, "u5-gorunurluk": 1, "u5-readme-lisans": 2, "u5-clone": 3, "u5-remote-push": 4, "u5-pull": 5, "u5-kimlik": 6 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  gitSandbox: () => import("./gorevler").then((m) => m.GOREVLER),
};

export default icerik;
