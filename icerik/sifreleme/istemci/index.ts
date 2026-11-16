// Şifreleme pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts): ders
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
import { UNITE_9 } from "./dersler/unite-9";
import { UNITE_10 } from "./dersler/unite-10";
import { UNITE_11 } from "./dersler/unite-11";
import { UNITE_12 } from "./dersler/unite-12";
import { UNITE_13 } from "./dersler/unite-13";
import { UNITE_14 } from "./dersler/unite-14";
import { UNITE_15 } from "./dersler/unite-15";
import { UNITE_16 } from "./dersler/unite-16";
import { UNITE_17 } from "./dersler/unite-17";
import { UNITE_18 } from "./dersler/unite-18";
import { UNITE_19 } from "./dersler/unite-19";
import { GORSELLER } from "./gorseller";
import { ETKILESIMLER } from "./etkilesim";
import { DENEYLER } from "./lab";

const icerik: PratikIstemciIcerigi = {
  dersler: [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5, UNITE_6, UNITE_7, UNITE_8, UNITE_9, UNITE_10, UNITE_11, UNITE_12, UNITE_13, UNITE_14, UNITE_15, UNITE_16, UNITE_17, UNITE_18, UNITE_19],
  // Soru kartındaki "Derste oku" bağlantısı: kavram -> bölüm (0'dan)
  mesajlasma: true,
  kavramBolumu: {
    1: { "u1-hedefler": 0, "u1-kerckhoffs": 1, "u1-anahtar": 2, "u1-kodlama": 3, "u1-uc-islem": 3, "u1-bayt": 4, "u1-simetrik-asimetrik": 5, "u1-tehdit": 6 },
    2: { "u2-entropi": 0, "u2-parola": 1, "u2-prng": 2, "u2-csprng": 3, "u2-trng": 4, "u2-sapma": 5, "u2-hatalar": 6 },
    3: { "u3-xor": 0, "u3-mod": 1, "u3-ebob": 2, "u3-ters": 2, "u3-us": 3, "u3-asal": 4, "u3-euler": 5, "u3-cisim": 6 },
    4: { "u4-sezar": 0, "u4-yerine-koyma": 1, "u4-frekans": 2, "u4-vigenere": 3, "u4-vigenere-kirma": 4, "u4-aktarim": 5, "u4-enigma": 6, "u4-dersler": 7 },
    5: { "u5-otp": 0, "u5-iki-zaman": 1, "u5-blok": 2, "u5-des": 3, "u5-aes-yapi": 4, "u5-aes-adimlar": 5, "u5-anahtar-genisletme": 6 },
    6: { "u6-ecb": 0, "u6-cbc": 1, "u6-dolgu": 2, "u6-ctr": 3, "u6-aead": 4, "u6-akis": 5, "u6-secim": 6 },
    7: { "u7-ozellikler": 0, "u7-direnc": 1, "u7-cig": 2, "u7-dogum-gunu": 3, "u7-sha256": 4, "u7-sha3": 5, "u7-kullanim": 6 },
    8: { "u8-mac": 0, "u8-length-ext": 1, "u8-hmac": 2, "u8-zaman": 3, "u8-kullanim": 4 },
    9: { "u9-duz": 0, "u9-salt": 1, "u9-yavas": 2, "u9-bellek": 3, "u9-hkdf": 4, "u9-yonetici": 5 },
    10: { "u10-dagitim": 0, "u10-dh": 1, "u10-ayrik-log": 2, "u10-mitm": 3, "u10-rsa": 4, "u10-rsa-dolgu": 5, "u10-carpan": 6 },
    11: { "u11-nokta": 0, "u11-fp": 1, "u11-ecdh": 2, "u11-imza": 3, "u11-ecdsa": 4, "u11-nonce": 5 },
    12: { "u12-sahiplik": 0, "u12-sertifika": 1, "u12-iptal": 2, "u12-tls": 3, "u12-anahtar-takvimi": 4, "u12-mitm": 5 },
    13: { "u13-e2ee": 0, "u13-prekey": 1, "u13-x3dh": 2, "u13-simetrik": 3, "u13-dh": 4, "u13-fs-pcs": 5, "u13-sira": 6, "u13-guvenlik-no": 7 },
    14: { "u14-sender-keys": 0, "u14-mls": 1, "u14-cihaz": 2, "u14-yedek": 3, "u14-metadata": 4, "u14-sealed": 5, "u14-kesif": 5 },
    15: { "u15-istemci": 0, "u15-zincir": 1, "u15-giris": 2, "u15-zarf": 3, "u15-paylasim": 4, "u15-kurtarma": 5, "u15-terim": 6 },
    16: { "u16-gorsel": 0, "u16-esik": 1, "u16-stegano": 2, "u16-lsb": 3, "u16-steganaliz": 4, "u16-goruntu": 5 },
    17: { "u17-nonce": 0, "u17-padding": 1, "u17-rastgele": 2, "u17-zamanlama": 3, "u17-guc": 4, "u17-em-hata": 5, "u17-onlem": 6 },
    18: { "u18-shor-grover": 0, "u18-hndl": 1, "u18-kafes": 2, "u18-mlkem": 3, "u18-imza": 4, "u18-hibrit": 5, "u18-gecis": 6 },
    19: { "u19-okuma": 0, "u19-telegram": 1, "u19-eposta": 2, "u19-tehdit-modeli": 3, "u19-anonimlik": 4, "u19-paylasim": 5, "u19-webcrypto": 6 },
  },
  gorseller: GORSELLER,
  etkilesimler: ETKILESIMLER,
  deneyler: DENEYLER,
};

export default icerik;
