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

import type { Olay } from "../gitsim/gorev";
import type { Ortam } from "../gitsim/tipler";

// Ünitelerin sınav dönemine göre gruplanması (kimyada 1-9 vize, 10-16 final).
// Dönemi olmayan pratiklerde listeler tek grup halinde görünür.
export type Donem = "vize" | "final";

export const DONEM_ADI: Record<Donem, string> = { vize: "Vize", final: "Final" };
export const DONEMLER: Donem[] = ["vize", "final"];

// Bölümde tarayıcıda çalışan küçük bir VHDL benzetimi (FPGA)
export interface MiniSim {
  // Tasarım ve testbench'i birlikte içeren tek VHDL dosyası
  kod: string;
  // En üst birim, genellikle "tb"
  top: string;
  sure: string;
  // Öğrenciye kodda ne değiştirip deneyeceğini söyleyen kısa görev
  gorev?: string;
}

// Bölümde tarayıcıda çalışan küçük bir MatStudio örneği (DSP)
export interface MiniMatlab {
  // Bölümde çalıştırılacak MatStudio betiği
  kod: string;
  // Öğrenciye kodda ne değiştirip deneyeceğini söyleyen kısa görev
  gorev?: string;
}

// Bölümde sanal Git'le çalışan küçük bir terminal (Git ve GitHub). Ortam her
// açılışta kurulumdan yeniden kurulur; hedefler ortamın son hâline bakar.
export interface MiniGit {
  dosyalar?: Record<string, string>;
  // Verilmezse src/gitsim/gorev.ts VARSAYILAN_KIMLIK
  globalConfig?: Record<string, string>;
  // Başlangıç durumunu kuran komutlar (görünmez)
  kurulum?: string[];
  // Öğrenciye ne deneyeceğini söyleyen kısa görev (~kod~ yazılabilir)
  gorev?: string;
  // Tek dokunuşla yazılan öneri komutları
  oneriler?: string[];
  hedefler?: { aciklama: string; denetle: (o: Ortam) => boolean }[];
  // Commit grafiği ve üç alan şeridi (varsayılan: ikisi de görünür)
  grafik?: boolean;
  alanlar?: boolean;
  // Ekip arkadaşının yaptığı işler: düğmeye basınca komutlar onun bilgisayarında
  // çalışır (ör. push eder) ve terminale bildirim düşer
  ekip?: { dugme: string; kim: string; komutlar: string[]; bildirim: string }[];
  // Koşulu tutunca kendiliğinden olan ekip olayları (ör. PR açılınca Ayşe onaylar)
  olaylar?: Olay[];
  // Önerilen bir komut düzenleyici açarsa (ör. git rebase -i) testin metne
  // sırayla uyguladığı dönüşümler; öğrenci düzenleyicide kendisi yazar
  editorCozum?: ((metin: string) => string)[];
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
  sim?: MiniSim;
  git?: MiniGit;
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

// VHDL örneklerinin ortak başlığı (FPGA dersleri)
export const UST = "library ieee;\nuse ieee.std_logic_1164.all;\nuse ieee.numeric_std.all;\n";
