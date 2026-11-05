// Ders sayfalarının biçimi. Metinler kendi cümlelerimizle yazılır; kitaplar,
// ders notları ve sınav kâğıtları depoya girmez. Her pratiğin dersleri
// icerik/<pratik>/dersler altındadır ve icerik/<pratik>/istemci ile yüklenir.
//
// Metinlerde ` yerine ~ yazılır (şablon dizgilerinde ters tırnak kaçış
// gerektirdiği için); md() ~ karakterlerini ` ile değiştirir. Gerçek ~ karakteri
// gerekirse ¬ yazılır. latex: true pratiklerde formüller $...$ ve $$...$$ arasında.
//
// Tarihsel nedenle ünite numarasının alanı `hafta`dır: veritabanındaki week
// sütunu, soru dosyaları ve ilerleme kayıtları bu adı kullanır.

// Ünitelerin sınav dönemine göre gruplanması (kimyada 1-9 vize, 10-16 final).
// Dönemi olmayan pratiklerde listeler tek grup halinde görünür.
export type Donem = "vize" | "final";

export const DONEM_ADI: Record<Donem, string> = { vize: "Vize", final: "Final" };
export const DONEMLER: Donem[] = ["vize", "final"];

// Bölümde tarayıcıda çalışan küçük bir MatStudio örneği (DSP)
export interface MiniMatlab {
  // Bölümde çalıştırılacak MatStudio betiği
  kod: string;
  // Öğrenciye kodda ne değiştirip deneyeceğini söyleyen kısa görev
  gorev?: string;
}

export interface DersBolumu {
  baslik: string;
  metin: string;
  // Bölümle ilgili Sanal Lab deneyi (icerik/<pratik>/istemci altındaki deney kimliği)
  lab?: string;
  // Bölümün sonundaki "Kendini dene": soru havuzundan 1-2 soru (konu sonu
  // testindekilerden farklı)
  dene?: string[];
  matlab?: MiniMatlab;
}

export interface Ders {
  hafta: number;
  donem?: Donem;
  baslik: string;
  ozet: string;
  // Boşsa ünite listede "Hazırlanıyor" diye görünür
  bolumler: DersBolumu[];
  // Konu sonu testi: soru havuzundaki kimlikler
  test: string[];
  // Proje haftası: soru havuzu ve konu sonu testi yoktur, listede "Proje" diye görünür
  proje?: boolean;
}

export const md = (s: string) => s.replace(/~/g, "`").replace(/¬/g, "~").trim();
