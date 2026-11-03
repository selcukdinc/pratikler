// KOSGEB Girişimcilik El Kitabı'nın üniteleri. Site ilk 7 ünitenin bölüm sonu sorularını ve 8. üniteye düşen çıkmış soruları kapsar.
export interface Unite {
  no: number;
  baslik: string;
}

export const UNITELER: Unite[] = [
  { no: 1, baslik: "Girişimciliğin Temel Kavramları" },
  { no: 2, baslik: "Girişim Fırsatlarını Görme ve Fikir Yaratma/Geliştirme" },
  { no: 3, baslik: "Yapılabilirlik Analizi" },
  { no: 4, baslik: "İş Modelleri, Müşteriler, Değer Önerileri ve Gelir Kaynakları" },
  { no: 5, baslik: "Ekonomi, Endüstri, Rekabet ve Müşteri Analizi" },
  { no: 6, baslik: "Hukuki Altyapı" },
  { no: 7, baslik: "Girişimin Etik Temelleri" },
  { no: 8, baslik: "Pazarlama İlkeleri ve Yönetimi" },
];

export const uniteBul = (no: number) => UNITELER.find((u) => u.no === no);
