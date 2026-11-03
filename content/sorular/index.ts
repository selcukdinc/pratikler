import type { Konu, Soru } from "./tipler.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";
import { unite5 } from "./unite-5.ts";
import { unite6 } from "./unite-6.ts";
import { unite7 } from "./unite-7.ts";
import { unite8 } from "./unite-8.ts";

// Her ünite tek konu; konu kimliği u<ünite>. Başlıklar kitabın ünite adlarıdır.
export const konular: Konu[] = [
  { id: "u1", baslik: "Girişimciliğin Temel Kavramları", hafta: 1, sira: 1 },
  { id: "u2", baslik: "Girişim Fırsatlarını Görme ve Fikir Yaratma/Geliştirme", hafta: 2, sira: 1 },
  { id: "u3", baslik: "Yapılabilirlik Analizi", hafta: 3, sira: 1 },
  { id: "u4", baslik: "İş Modelleri, Müşteriler, Değer Önerileri ve Gelir Kaynakları", hafta: 4, sira: 1 },
  { id: "u5", baslik: "Ekonomi, Endüstri, Rekabet ve Müşteri Analizi", hafta: 5, sira: 1 },
  { id: "u6", baslik: "Hukuki Altyapı", hafta: 6, sira: 1 },
  { id: "u7", baslik: "Girişimin Etik Temelleri", hafta: 7, sira: 1 },
  { id: "u8", baslik: "Pazarlama İlkeleri ve Yönetimi", hafta: 8, sira: 1 },
];

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3, ...unite4, ...unite5, ...unite6, ...unite7, ...unite8];
