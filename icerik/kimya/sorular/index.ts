import type { Konu, Soru } from "../../tipler.ts";
import { vize2024 } from "./cikmis-vize-2024.ts";
import { vizeDerleme } from "./cikmis-vize-derleme.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";

// Ünitelerin konuları (1-9 vize, 10-16 final). Orijinal çıkmış sorular
// cikmis-*.ts, türetilmiş sorular unite-N.ts dosyalarındadır.
export const konular: Konu[] = [
  { id: "km-madde-karisim", baslik: "Madde, karışımlar, fiziksel ve kimyasal olaylar", hafta: 1, sira: 1 },
  { id: "km-ayirma", baslik: "Karışımları ayırma yöntemleri", hafta: 1, sira: 2 },
  { id: "km-olcme-birim", baslik: "Ölçme, birimler ve sıcaklık ölçekleri", hafta: 2, sira: 1 },
  { id: "km-kimya-kanunlari", baslik: "Kimya kanunları", hafta: 2, sira: 2 },
  { id: "km-atom-modelleri", baslik: "Atom modelleri", hafta: 3, sira: 1 },
  { id: "km-kuantum", baslik: "Işık, De Broglie ve kuantum sayıları", hafta: 4, sira: 1 },
  { id: "km-elektron-dizilimi", baslik: "Elektron dizilimi kuralları", hafta: 4, sira: 2 },
  { id: "km-periyodik-tablo", baslik: "Periyodik tabloda yer bulma", hafta: 5, sira: 1 },
  { id: "km-periyodik-ozellikler", baslik: "Periyodik özellikler", hafta: 5, sira: 2 },
  { id: "km-mol", baslik: "Mol kavramı ve Avogadro sayısı", hafta: 6, sira: 1 },
  { id: "km-kimyasal-bag", baslik: "Kimyasal bağ türleri", hafta: 7, sira: 1 },
  { id: "km-molekul-geometrisi", baslik: "Hibritleşme ve molekül geometrisi", hafta: 7, sira: 2 },
  { id: "km-molekuller-arasi", baslik: "Moleküller arası etkileşimler", hafta: 8, sira: 1 },
  { id: "km-katilar", baslik: "Katılar ve kristal yapı", hafta: 8, sira: 2 },
  { id: "km-metal-ametal", baslik: "Metaller, ametaller ve yarı iletkenler", hafta: 9, sira: 1 },
  { id: "km-korozyon", baslik: "Korozyon ve korunma yöntemleri", hafta: 9, sira: 2 },
];

// Türetilmiş soruların yedek olanları havuzda görünmez, tekrarda gelir
export const sorular: Soru[] = [...vize2024, ...vizeDerleme, ...unite1, ...unite2, ...unite3, ...unite4];
