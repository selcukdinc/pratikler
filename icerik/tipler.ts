// Pratiklerin ortak tipleri. Her pratik `icerik/<id>/` altında bir meta dosyası
// (meta.ts: ad, üniteler, etiketler, kavramlar, terimler) ve soru dosyalarından
// (sorular/*.ts) oluşur. Kod bütün pratikler için ortaktır; yeni pratik açmak bu
// klasörü doldurup icerik/index.ts'e kaydetmektir.
//
// Soru metinlerinde ` yerine ~ yazılır (TypeScript şablon dizgilerinde ters tırnak
// kaçış gerektirdiği için). Üretici ~ karakterlerini ` ile değiştirir.

export interface Unite {
  no: number;
  baslik: string;
}

export interface Kavram {
  ad: string;
}

export interface Terim {
  tr: string;
  en: string;
  // Büyük harfle yazılan mantık işlemleri (VE, VEYA) yalnızca büyük harfle eşleşir;
  // küçük harfli "ve" bağlacı terim değildir.
  buyuk?: boolean;
  aciklama?: string;
  // İngilizcesi soru metinlerinde parantez içinde de gösterilir
  satirIci?: boolean;
}

// Sorunun kaynağını gösteren etiket. renk, iki temada tanımlı rozet rengidir
// (src/styles.css .tag-renk-*). gercek: "Yalnız gerçek sorular" seçiminde kalır
// (kitabın kendi sorusu, çıkmış soru); türetilmiş sorular gerçek sayılmaz.
export interface EtiketTanim {
  id: string;
  ad: string;
  aciklama: string;
  renk: "kitap" | "cikmis" | "turetilmis" | "ders";
  gercek?: boolean;
}

export interface PratikMeta {
  // Kalıcı kimlik; soru kimliklerinin öneki ve veritabanındaki practice_id
  id: string;
  // Alt alan adı: <alt>.selcukdinc.dev
  alt: string;
  // "Tıp Elektroniği"; site adı "<ad> Pratik" olur
  ad: string;
  // Katalogdaki grup: Mühendislik, Temel bilimler, İşletme, Sağlık...
  alan: string;
  // Katalog kartında ve tanıtım sayfasında bir iki cümle
  aciklama: string;
  // Soruların dayandığı kaynakların kısa adı ("ders notları ve iki kitap")
  kaynakAdi: string;
  // "Sorular nereden geliyor?" cevabı ve Hakkında'daki kaynak paragrafı (Markdown)
  kaynakAciklamasi: string;
  // Tanıtım sayfasının başlığı, giriş paragrafı ve "Kimler için?" kartları
  tanitim: { baslik: string; giris: string; kitleler: { baslik: string; metin: string }[] };
  // Hakkında sayfasının sonuna eklenen not (ör. kurumla bağlantı olmadığı)
  bagimsizlikNotu?: string;
  // Bölüm birimi: "ünite" ya da "hafta"; menü rozeti için tek harf
  uniteAdi: string;
  uniteKisa: string;
  // false iken katalogda görünmez ve alan adına gelen istek katalog sayfasına düşer
  yayinda: boolean;
  // $...$ ve $$...$$ formülleri KaTeX ile çizilir, A_x / m^2 indisleri dizilir
  latex: boolean;
  // Alan adının kökünde açılan sayfa: karma test (varsayılan) ya da Sanal Lab
  anaSayfa?: "pratik" | "lab";
  // Sekme simgesi ve menüdeki logo (public/ altındaki yol); yoksa /favicon.svg
  logo?: string;
  etiketler: EtiketTanim[];
  uniteler: Unite[];
  // Kimlik biçimi: u<ünite>-<kısa ad>
  kavramlar: Record<string, Kavram>;
  terimler: Terim[];
  // Aynı bilgiyi soran ikiz soru grupları; soru havuzunda her gruptan biri görünür
  benzerler: string[][];
}

export interface Konu {
  id: string;
  baslik: string;
  // Ünite (ya da hafta) numarası (veritabanında week)
  hafta: number;
  sira: number;
}

interface Ortak {
  id: string;
  konu: string;
  hafta: number;
  // original: kaynağın kendi sorusu ya da çıkmış sınav sorusu (metni aynen korunur)
  // derived: kaynaktaki bilgiden türetilen yeni soru
  kaynak: "original" | "derived";
  // Pratiğin meta.etiketler listesindeki kimlikler
  etiketler: string[];
  zorluk: 1 | 2 | 3;
  // Kaynaktaki yer, örneğin "Kitap, 1. ünite, soru 3"
  ref: string;
  soru: string;
  aciklama: string;
  // Pratiğin kavramlarından biri
  kavram: string;
  // Yedek havuz: soru havuzunda görünmez, yalnızca aralıklı tekrarda gelir
  yedek?: true;
  // Şıklar birbirine harfle atıf yapıyorsa ("a ve c") şıklar karıştırılmaz
  sabit?: true;
}

export type Soru =
  | (Ortak & { tip: "tf"; dogru: boolean })
  | (Ortak & { tip: "mcq"; secenekler: string[]; dogru: number })
  // semboller: cevap kutusunun altında mantık ve küme sembol klavyesi çıkar (Ayrık)
  | (Ortak & { tip: "fill"; bosluklar: string[][]; semboller?: true })
  // Sayısal soru: her boşluğun kabul ettiği sayı belirtimleri (shared/grade.ts):
  // "1.48", "1.48±0.01", "[1 2 -1]", "[0.5 0.25]±0.01"
  | (Ortak & { tip: "num"; bosluklar: string[][] })
  // Yazma (klasik): öğrenci cevabını yazar, aciklama'daki örnek çözümle
  // karşılaştırıp kendini değerlendirir (Ayrık)
  | (Ortak & { tip: "yaz" });

export interface PratikSorulari {
  konular: Konu[];
  sorular: Soru[];
}

// Birleşim tipinden alan çıkarır (Omit birleşimin her üyesine ayrı uygulanmaz)
type Cikar<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export interface KitapGovde {
  id: string;
  // Kaynaktaki soru numarası
  no: number;
  soru: string;
  secenekler: string[];
  dogru: number;
  aciklama: string;
  kavram: string;
  // Aynı soru çıkmış sınavda da sorulduysa çıkmış listesindeki numarası
  cikmis?: number;
  sabit?: true;
  zorluk?: 1 | 2 | 3;
}

export type CikmisGovde = Omit<KitapGovde, "cikmis">;
export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "kavram">;

// Bir pratiğin soru dosyalarında kullanılan yardımcılar. kitapEtiketi, kaynağın
// kendi sorularının etiketidir (girişimcilikte "ges").
export function yardimcilar(kavramlar: Record<string, Kavram>, kitapEtiketi = "kitap") {
  const kavramAdi = (k: string) => {
    const v = kavramlar[k];
    if (!v) throw new Error(`bilinmeyen kavram: ${k}`);
    return v.ad;
  };

  // Kaynağın bölüm sonu sorusu: metin ve şıklar aynen, cevap anahtarı kaynaktan
  function kitap(hafta: number, konu: string, liste: KitapGovde[]): Soru[] {
    return liste.map(({ no, cikmis, zorluk, ...s }) => {
      kavramAdi(s.kavram);
      return {
        ...s,
        tip: "mcq",
        zorluk: zorluk ?? 1,
        hafta,
        konu,
        kaynak: "original",
        etiketler: cikmis ? [kitapEtiketi, "cikmis"] : [kitapEtiketi],
        ref: `Kitap, ${hafta}. ünite, soru ${no}` + (cikmis ? ` · Çıkmış soru ${cikmis}` : ""),
      } as Soru;
    });
  }

  // Çıkmış sınav sorusu (kitapta birebir karşılığı olmayan)
  function cikmis(hafta: number, konu: string, liste: CikmisGovde[]): Soru[] {
    return liste.map(({ no, zorluk, ...s }) => {
      kavramAdi(s.kavram);
      return { ...s, tip: "mcq", zorluk: zorluk ?? 1, hafta, konu, kaynak: "original", etiketler: ["cikmis"], ref: `Çıkmış soru ${no}` } as Soru;
    });
  }

  // Aynı kavramdan türetilmiş soruları ortak alanlarla doldurur. ref verilmezse
  // "<hafta>. ünite, <kavram adı>" yazılır.
  function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[], ref?: string): Soru[] {
    const ad = kavramAdi(kavram);
    return liste.map((s) => ({ ...s, hafta, konu, kavram, kaynak: "derived", etiketler: ["turetilmis"], ref: ref ?? `${hafta}. ünite, ${ad}` }) as Soru);
  }

  return { kitap, cikmis, turet };
}

// Açıklama metni (testlerde formül denetimi için)
export const aciklamaMetni = (s: Soru) => s.aciklama;
