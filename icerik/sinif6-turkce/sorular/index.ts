import type { Konu, Soru } from "../../tipler.ts";
import { okuma } from "./tema-1-okuma.ts";
import { sozVarligi } from "./tema-1-soz-varligi.ts";
import { yazma } from "./tema-1-yazma.ts";
import { tema2 } from "./tema-2.ts";

// Konular öğrenme çıktılarına göre ayrılır; kimlik t6-u<tema>-<ad>
export const konular: Konu[] = [
  { id: "t6-u1-kelime-anlami", baslik: "Kelimenin anlamını metinden tahmin etme", hafta: 1, sira: 1 },
  { id: "t6-u1-yuzey", baslik: "Metinde açıkça verilen bilgi", hafta: 1, sira: 2 },
  { id: "t6-u1-anahtar", baslik: "Anahtar kelimeler", hafta: 1, sira: 3 },
  { id: "t6-u1-soz-varligi", baslik: "Söz varlığı: eş ve zıt anlam, mecaz, deyim, atasözü", hafta: 1, sira: 4 },
  { id: "t6-u1-yazma", baslik: "Yazma: plan ve kelime seçimi", hafta: 1, sira: 5 },
  { id: "t6-u1-yazim", baslik: "Yazım ve noktalama: de/da, ki, mi, virgül", hafta: 1, sira: 6 },
  { id: "t6-u2-kok-ek", baslik: "Kök ve ek, yapım ve çekim eki", hafta: 2, sira: 1 },
  { id: "t6-u2-karsilastirma", baslik: "Karşılaştırma bildiren sözler", hafta: 2, sira: 2 },
];

export const sorular: Soru[] = [...okuma, ...sozVarligi, ...yazma, ...tema2];
