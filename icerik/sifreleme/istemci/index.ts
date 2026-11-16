// Şifreleme pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
// anlatımları, etkileşimli şekiller ve Sanal Lab deneyleri.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { UNITE_1 } from "./dersler/unite-1";
import { UNITE_2 } from "./dersler/unite-2";
import { UNITE_3 } from "./dersler/unite-3";
import { UNITE_4 } from "./dersler/unite-4";
import { UNITE_5 } from "./dersler/unite-5";
import { UNITE_6 } from "./dersler/unite-6";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";
import { DENEYLER } from "./lab";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5, UNITE_6],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  kavramBolumu: {
    1: { "u1-hedefler": 0, "u1-kerckhoffs": 1, "u1-anahtar": 2, "u1-kodlama": 3, "u1-uc-islem": 3, "u1-bayt": 4, "u1-simetrik-asimetrik": 5, "u1-tehdit": 6 },
    2: { "u2-entropi": 0, "u2-parola": 1, "u2-prng": 2, "u2-csprng": 3, "u2-trng": 4, "u2-sapma": 5, "u2-hatalar": 6 },
    3: { "u3-xor": 0, "u3-mod": 1, "u3-ebob": 2, "u3-ters": 2, "u3-us": 3, "u3-asal": 4, "u3-euler": 5, "u3-cisim": 6 },
    4: { "u4-sezar": 0, "u4-yerine-koyma": 1, "u4-frekans": 2, "u4-vigenere": 3, "u4-vigenere-kirma": 4, "u4-aktarim": 5, "u4-enigma": 6, "u4-dersler": 7 },
    5: { "u5-otp": 0, "u5-iki-zaman": 1, "u5-blok": 2, "u5-des": 3, "u5-aes-yapi": 4, "u5-aes-adimlar": 5, "u5-anahtar-genisletme": 6 },
    6: { "u6-ecb": 0, "u6-cbc": 1, "u6-dolgu": 2, "u6-ctr": 3, "u6-aead": 4, "u6-akis": 5, "u6-secim": 6 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
};

export default icerik;
