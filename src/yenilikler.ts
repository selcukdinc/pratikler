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
    pr: 8,
    tarih: "2026-11-06",
    baslik: "Fizik ve Ayrık platforma geliyor: adım adım çözümler, yazma soruları ve sembol klavyesi",
    maddeler: [
      "Fizik'in 233 ve Ayrık'ın 334 sorusu, şekilleriyle birlikte platforma taşındı.",
      "Çok adımlı çözümler artık adım adım açılır: \"Sonraki adım\" ile çözümü kendi hızında takip edebilirsin.",
      "Yeni soru türü: yazma (klasik). Cevabını yazıp örnek çözümü açıyorsun, sonra \"Doğru yaptım\", \"Kısmen\" ya da \"Yapamadım\" diye kendini değerlendiriyorsun; doğru yapamadığın sorular tekrar listene eklenir.",
      "Mantık ve küme cevapları için sembol klavyesi geldi. `p -> q`, `~p`, `p ^ q` gibi klavye yazımları da kabul edilir, kümelerde elemanların sırası önemli değildir.",
    ],
  },
  {
    pr: 7,
    tarih: "2026-11-05",
    baslik: "DSP Pratik platforma geliyor: haftalık dersler, etkileşimli şekiller ve MatStudio",
    maddeler: [
      "DSP Pratik'in sekiz haftalık dersleri, etkileşimli şekilleri, proje rehberi ve 476 sorusu platforma taşındı.",
      "Tarayıcıda çalışan MatStudio artık platformda: menüdeki MatStudio sayfasında betik yazıp çalıştırabilir, derslerdeki örnekleri değiştirip deneyebilirsin. Daha önce yazdığın betikler aynı tarayıcıda yerinde durur.",
    ],
  },
  {
    pr: 6,
    tarih: "2026-11-04",
    baslik: "Her pratiğin ilerlemesi ve günlük hedefi artık kendine ait",
    maddeler: [
      "İlerlemem sayfasındaki takvim, seri ve rozetler yalnızca o pratikte çözdüğün soruları sayar; başka bir pratikteki çalışman buraya karışmaz.",
      "Günlük hedefi her pratik için ayrı seçebilirsin. Ana sayfadaki pratik kartları bütün pratiklerdeki ilerlemeni yine birlikte gösterir.",
      "Kimya Pratik eski yeşil logosuna kavuştu.",
    ],
  },
  {
    pr: 5,
    tarih: "2026-11-04",
    baslik: "Kimya Pratik platforma geliyor: konu anlatımları, Sanal Lab ve sayısal sorular",
    maddeler: [
      "Pratikler artık kendi **konu anlatımlarını**, **Sanal Lab** deneylerini ve **çıkmış sınavlarını** taşıyabiliyor. Konu anlatımları vize ve final diye ayrılabiliyor; çıkmış sınavlar kâğıttaki sırasıyla deneme sınavı olarak çözülüyor.",
      "Yeni soru türü: **sayısal cevap**. Sonucu yazıyorsun; virgüllü ya da noktalı ondalık, `3/4`, `pi/2`, `sqrt(2)` ve `4.52e23` gibi yazımlar kabul ediliyor.",
      "Konu anlatımlarındaki \"Bu bölümü bitirdim\" ilerlemesi artık her pratik için ayrı tutuluyor.",
      "Kimya Pratik'in bütün içeriği (112 soru, 4 ünite anlatımı, 3 deney, 2 çıkmış sınav) platforma alındı. Kimya'daki hesabın, parolan ve ilerlemen taşınınca aynen sürecek; site adresi değişmeyecek.",
    ],
  },
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
