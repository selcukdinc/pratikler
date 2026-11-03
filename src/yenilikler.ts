// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**).

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  maddeler: string[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 4,
    tarih: "2026-11-03",
    baslik: "Yerel ajan claude'u bulamama ve servis kurulum hatası",
    maddeler: [
      "Ajan artık `~/.local/bin`, `/opt/homebrew/bin` ve `/usr/local/bin` klasörlerine kendisi bakıyor; `spawn claude ENOENT` hatası için `.zprofile` düzenlemek gerekmiyor.",
      "`npm run ajan:servis -- kur` eski servis kapanırken verdiği \"Input/output error\" hatasında kısa bekleyip kendisi yeniden deniyor.",
    ],
  },
  {
    pr: 3,
    tarih: "2026-11-03",
    baslik: "pratikler.selcukdinc.dev'de hesap sayfaları ve yeni pratik açma",
    maddeler: [
      "Çatı sitesinde Ayarlar, Mesajlarım ve Yönetim paneli artık açılıyor; daha önce boş kalıyor ve 404 hatası veriyordu.",
      "Çatı sitesinin yönetim panelinde **Claude** sekmesinden yeni bir pratik açılabiliyor: ad, alt alan adı ve kaynak klasörünü yazmak yetiyor, gerisini yerel ajan hazırlayıp PR olarak getiriyor.",
      "Her Claude sekmesi yerel ajanın açık olup olmadığını, hangi makinede çalıştığını ve en son ne zaman yokladığını gösteriyor. **Ajanı dene** düğmesi Claude'u çalıştırmadan makinedeki claude, gh ve depo durumunu raporluyor.",
      "Ajan kapalıysa panel nasıl açılacağını adım adım anlatıyor: anahtar Mac'in Anahtar Zinciri'nde tutuluyor, ajan tek komutla servis olarak kurulabiliyor ya da indirilen bir dosyaya çift tıklayarak Terminal'de açılabiliyor.",
    ],
  },
  {
    pr: 2,
    tarih: "2026-11-03",
    baslik: "Yönetim panelinde pratikler ve Claude",
    maddeler: [
      "Yönetim panelinin yeni **Pratikler** sekmesi bütün pratikleri yan yana gösteriyor: açık ünite, soru sayısı, son 7 gündeki denemeler ve kişiler, bekleyen öneriler.",
      "**Claude** sekmesinden bir pratiğe iş verilebiliyor (\"3. üniteye iki soru ekle\" gibi). İşi yöneticinin bilgisayarındaki yerel ajan yapıyor; denetimlerden geçerse bir PR olarak geliyor, birleştirmek yine yöneticide.",
    ],
  },
  {
    pr: 1,
    tarih: "2026-11-03",
    baslik: "Tıp Elektroniği Pratik açıldı",
    maddeler: [
      "Tıp Elektroniği dersinin ilk dört haftasından 119 soru: fizyolojik sinyaller ve ölçüm zinciri, EKG, EEG, EMG ve biyomedikal sensörler. Her soru ders notundan mı kaynak kitaptan mı geldiğini gösteren bir etiket taşır.",
      "Formüller (ör. $HR = 60 / RR$) düzgün dizilerek gösterilir.",
      "Tek hesap: pratikler.selcukdinc.dev'de açtığın hesapla bütün pratiklerde giriş yapmış olursun; ilerlemen her pratikte ayrı tutulur ve katalog sayfasında hepsini bir arada görürsün. Hesap açmadan misafir olarak çözmek de mümkün.",
    ],
  },
];
