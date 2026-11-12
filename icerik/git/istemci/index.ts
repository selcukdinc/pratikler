// Git ve GitHub pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
// anlatımları, etkileşimli şekiller ve sandbox. Sandbox'ın görevleri ve sanal Git
// motoru yalnızca sandbox sayfası (ya da dersteki bir terminal) açılınca indirilir.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { UNITE_1 } from "./dersler/unite-1";
import { UNITE_2 } from "./dersler/unite-2";
import { UNITE_3 } from "./dersler/unite-3";
import { UNITE_4 } from "./dersler/unite-4";
import { UNITE_5 } from "./dersler/unite-5";
import { UNITE_6 } from "./dersler/unite-6";
import { UNITE_7 } from "./dersler/unite-7";
import { UNITE_8 } from "./dersler/unite-8";
import { UNITE_9 } from "./dersler/unite-9";
import { UNITE_10 } from "./dersler/unite-10";
import { UNITE_11 } from "./dersler/unite-11";
import { UNITE_12 } from "./dersler/unite-12";
import { UNITE_13 } from "./dersler/unite-13";
import { UNITE_14 } from "./dersler/unite-14";
import { UNITE_15 } from "./dersler/unite-15";
import { UNITE_16 } from "./dersler/unite-16";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5, UNITE_6, UNITE_7, UNITE_8, UNITE_9, UNITE_10, UNITE_11, UNITE_12, UNITE_13, UNITE_14, UNITE_15, UNITE_16],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  kavramBolumu: {
    1: { "u1-neden": 0, "u1-git-github": 1, "u1-merkezi-dagitik": 2, "u1-tarihce": 3, "u1-temel": 4 },
    2: { "u2-kurulum": 0, "u2-terminal": 1, "u2-config": 2, "u2-editor-yardim": 3 },
    3: { "u3-init": 0, "u3-uc-alan": 1, "u3-status": 2, "u3-add": 3, "u3-commit": 4 },
    4: { "u4-log": 0, "u4-diff": 1, "u4-show-hash": 2, "u4-mesaj": 3, "u4-gitignore": 4 },
    5: { "u5-hesap-depo": 0, "u5-gorunurluk": 1, "u5-readme-lisans": 2, "u5-clone": 3, "u5-remote-push": 4, "u5-pull": 5, "u5-kimlik": 6 },
    6: { "u6-dal-nedir": 0, "u6-olustur-gec": 1, "u6-kopuk-head": 2, "u6-merge": 3, "u6-dal-yonetimi": 4 },
    7: { "u7-neden": 0, "u7-isaretler": 1, "u7-cozum": 2, "u7-araclar": 3, "u7-onlem": 4 },
    8: { "u8-pr": 0, "u8-inceleme": 2, "u8-birlestirme-yontemi": 3, "u8-fork": 4, "u8-issue": 5 },
    9: { "u9-restore": 1, "u9-reset": 2, "u9-revert": 3, "u9-amend": 4, "u9-stash": 5, "u9-reflog": 6 },
    10: { "u10-izleme": 0, "u10-fetch-pull": 1, "u10-push-reddi": 2, "u10-force": 3, "u10-remote-yonetimi": 4 },
    11: { "u11-rebase-nedir": 0, "u11-merge-rebase": 1, "u11-etkilesimli": 2, "u11-altin-kural": 3, "u11-cakisma": 4 },
    12: { "u12-neden-akis": 0, "u12-github-flow": 0, "u12-git-flow": 1, "u12-uc-ortam": 2, "u12-adlandirma": 3, "u12-surum": 4 },
    13: { "u13-koruma": 0, "u13-onay": 1, "u13-ci": 2, "u13-actions": 3, "u13-birlestirme-kurallari": 4 },
    14: { "u14-gizli-nedir": 0, "u14-botlar": 1, "u14-silmek-yetmez": 2, "u14-mudahale": 3, "u14-onleme": 4, "u14-tarama": 5, "u14-on-yuz": 6 },
    15: { "u15-gitlab-nedir": 0, "u15-karsilik": 1, "u15-mr": 2, "u15-korumali": 3, "u15-gitlab-ci": 4, "u15-self-hosted": 5, "u15-tasima": 6 },
    16: { "u16-cherry-pick": 0, "u16-bisect": 1, "u16-blame": 2, "u16-worktree": 3, "u16-submodule": 3, "u16-hooks": 4, "u16-lfs": 5, "u16-imza": 6 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  gitSandbox: () => import("./gorevler").then((m) => m.GOREVLER),
};

export default icerik;
