// Rosen, Ayrık Matematik ve Uygulamaları (Palme, 2015). Her ünite kitabın bir
// kesimidir; site vize kapsamını (Bölüm 1 ve Kesim 2.1–2.3) içerir.
export interface Unite {
  no: number;
  // Kitaptaki kesim numarası
  kesim: string;
  baslik: string;
}

export const UNITELER: Unite[] = [
  { no: 1, kesim: "1.1", baslik: "Önermeli Mantık" },
  { no: 2, kesim: "1.2", baslik: "Önermeli Mantık Uygulamaları" },
  { no: 3, kesim: "1.3", baslik: "Önerme Denklikleri" },
  { no: 4, kesim: "1.4", baslik: "Yüklemler ve Niceleyiciler" },
  { no: 5, kesim: "1.5", baslik: "İç İçe Niceleyiciler" },
  { no: 6, kesim: "1.6", baslik: "Çıkarım Kuralları" },
  { no: 7, kesim: "1.7", baslik: "İspatlara Giriş" },
  { no: 8, kesim: "1.8", baslik: "İspat Yöntemleri ve Stratejisi" },
  { no: 9, kesim: "2.1", baslik: "Kümeler" },
  { no: 10, kesim: "2.2", baslik: "Küme İşlemleri" },
  { no: 11, kesim: "2.3", baslik: "Fonksiyonlar" },
];

export const uniteBul = (no: number) => UNITELER.find((u) => u.no === no);
// Ünite numarası yerine kitaptaki bölüm numarası (1.1, 2.3) gösterilir
export const kesimi = (no: number) => uniteBul(no)?.kesim ?? String(no);
