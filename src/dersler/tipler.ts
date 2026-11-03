// Ders sayfalarının biçimi. Metinler kendi cümlelerimizle yazılır; hocanın
// sunumları depoya girmez.
//
// Metinlerde ` yerine ~ yazılır (şablon dizgilerinde ters tırnak kaçış
// gerektirdiği için); md() ~ karakterlerini ` ile değiştirir.

export interface DersBolumu {
  baslik: string;
  metin: string;
  // Bölümün sonundaki "Kendini dene": soru havuzundan 1-2 soru (konu sonu
  // testindekilerden farklı)
  dene?: string[];
}

export interface Ders {
  hafta: number;
  baslik: string;
  ozet: string;
  bolumler: DersBolumu[];
  // Konu sonu testi: soru havuzundaki kimlikler
  test: string[];
}

export const md = (s: string) => s.replace(/~/g, "`").trim();

