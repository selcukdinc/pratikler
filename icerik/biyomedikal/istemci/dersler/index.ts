// Biyomedikal ünitelerinin konu anlatımları. Her ünite bir ders sunumunu
// şekillerle (istemci/gorseller) anlatır ve soru havuzundan seçilmiş bir konu
// sonu testiyle biter.

import type { Ders } from "../../../../src/dersler/tipler";
import { UNITE_1 } from "./unite-1";
import { UNITE_2 } from "./unite-2";
import { UNITE_3 } from "./unite-3";
import { UNITE_4 } from "./unite-4";
import { UNITE_5 } from "./unite-5";
import { UNITE_6 } from "./unite-6";
import { UNITE_7 } from "./unite-7";
import { UNITE_8 } from "./unite-8";

export const DERSLER: Ders[] = [UNITE_1, UNITE_2, UNITE_3, UNITE_4, UNITE_5, UNITE_6, UNITE_7, UNITE_8];

// Ünite -> kavram -> soru kartındaki "Derste oku" bağlantısının bölümü (0'dan)
export const KAVRAM_BOLUMU: Record<number, Record<string, number>> = {
  1: { "u1-tanim": 0, "u1-ileti": 1, "u1-dolasim": 2, "u1-bipolar": 3, "u1-unipolar": 4, "u1-dalga": 5, "u1-kagit": 6, "u1-ritim": 7, "u1-olcum": 8 },
  2: { "u2-tanim": 0, "u2-sure": 1, "u2-kayit": 2, "u2-bant": 3, "u2-yas": 4, "u2-analiz": 5, "u2-nrem": 6, "u2-rem": 7 },
  3: { "u3-tanim": 0, "u3-potansiyel": 1, "u3-klinik": 2, "u3-elektrot": 3, "u3-eng": 4, "u3-segirme": 5, "u3-hastalik": 6 },
  4: { "u4-yontem": 0, "u4-rontgen": 1, "u4-bt": 2, "u4-mr": 3, "u4-usg": 4, "u4-nukleer": 5, "u4-genom": 6, "u4-histo": 7 },
  5: { "u5-merkez": 0, "u5-dagilim": 1, "u5-temizleme": 2, "u5-iqr": 3, "u5-olcek": 4, "u5-eksik": 5, "u5-zaman-filtre": 6, "u5-frekans-filtre": 7, "u5-ornekleme": 8 },
  6: { "u6-teknik": 0, "u6-gri": 1, "u6-gurultu": 2, "u6-histogram": 3, "u6-boyut": 4, "u6-esik": 5, "u6-geometrik": 6 },
  7: { "u7-ortam": 0, "u7-seri": 1, "u7-donusum": 2, "u7-enerji": 3, "u7-dft": 4, "u7-spektrum": 5, "u7-goruntu": 6 },
  8: { "u8-stft": 0, "u8-dalgacik": 1, "u8-skala": 2, "u8-cwt": 3, "u8-dwt": 4, "u8-2d": 5 },
};
