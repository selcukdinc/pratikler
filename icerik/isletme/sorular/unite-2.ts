// 2. ünite (özetin 2. başlığı): ekonomi ve üretim, fayda türleri, üretim
// faktörleri ve getirileri, işletme-girişim, girişimci-yönetici, disiplinler.

import { ozet, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...ozet(U, "u2-ekonomi-uretim", [
    {
      ad: "ekonomi-tanim",
      soru: "Sınırsız insan ihtiyaçlarının kıt kaynaklarla nasıl en etkin biçimde karşılanacağını inceleyen bilim dalı hangisidir?",
      secenekler: ["Ekonomi", "Sosyoloji", "Hukuk", "Psikoloji", "İstatistik"],
      aciklama: "**Ekonomi**, sınırsız ihtiyaçlar ile kıt kaynaklar arasındaki dengeyi, yani kaynakların en etkin kullanımını inceler.",
    },
    {
      ad: "uretim-tanim",
      soru: "Kıt kaynakları kullanarak insan ihtiyaçlarını karşılayacak mal ve hizmetleri meydana getirme ve fayda yaratma faaliyetine ne ad verilir?",
      secenekler: ["Üretim", "Tüketim", "Dağıtım", "Yatırım", "Tasarruf"],
      aciklama: "Özete göre **üretim**, kıt kaynaklarla mal ve hizmet meydana getirerek fayda yaratma faaliyetidir.",
    },
    {
      ad: "fayda-turleri",
      zorluk: 2,
      soru: "Özete göre üretim faaliyetiyle yaratılan fayda türleri aşağıdakilerin hangisinde doğru verilmiştir?",
      secenekler: [
        "Şekil, yer, zaman ve mülkiyet faydası",
        "Şekil, fiyat, kalite ve marka faydası",
        "Yer, kalite, hız ve maliyet faydası",
        "Zaman, ücret, faiz ve rant faydası",
        "Mülkiyet, vergi, kâr ve sermaye faydası",
      ],
      aciklama: "Üretim dört tür fayda yaratır: **şekil, yer, zaman ve mülkiyet** faydası. Hammaddeyi mamule çevirmek şekil, mamulü tüketiciye taşımak yer faydasıdır.",
    },
  ]),

  ...ozet(U, "u2-faktor", [
    {
      ad: "faktorler",
      soru: "Aşağıdakilerden hangisi dört temel üretim faktöründen biri değildir?",
      secenekler: ["Teknoloji", "Emek", "Sermaye", "Doğa", "Girişimci"],
      aciklama: "Özetteki dört üretim faktörü **emek, sermaye, doğa ve girişimcidir**. Teknoloji bu tabloda ayrı bir faktör olarak yer almaz.",
    },
    {
      ad: "emek-getiri",
      soru: "Emek (işgücü) üretim faktörünün ekonomik getirisi (karşılığı) hangisidir?",
      secenekler: ["Ücret", "Faiz", "Rant", "Kâr", "Temettü"],
      aciklama: "Getiriler: emek → **ücret**, sermaye → faiz, doğa → rant (kira), girişimci → kâr.",
    },
    {
      ad: "sermaye-getiri",
      soru: "Sermaye (kapital) üretim faktörünün ekonomik getirisi hangisidir?",
      secenekler: ["Faiz", "Ücret", "Rant", "Kâr", "Prim"],
      aciklama: "Makine, bina, hammadde ve parasal fonlardan oluşan sermayenin karşılığı **faizdir**.",
    },
    {
      ad: "doga-getiri",
      soru: "Toprak, madenler, ormanlar ve su kaynaklarından oluşan doğa faktörünün getirisi hangisidir?",
      secenekler: ["Rant", "Faiz", "Ücret", "Kâr", "Vergi"],
      aciklama: "Doğa (tabiat) faktörünün ekonomik karşılığı **rant**, yani kiradır.",
    },
    {
      ad: "girisimci-getiri",
      soru: "Diğer üç üretim faktörünü bir araya getirip kâr-zarar riskini üstlenen girişimcinin getirisi hangisidir?",
      secenekler: ["Kâr", "Ücret", "Faiz", "Rant", "Maaş"],
      aciklama: "Riski üstlenen **girişimcinin** getirisi **kârdır**; kâr aynı zamanda girişimcinin risk primidir.",
    },
    {
      ad: "emek-tanim",
      soru: "Üretim sürecine katılan insanların bedensel ve zihinsel çabalarının bütününe ne ad verilir?",
      secenekler: ["Emek", "Sermaye", "Girişim", "Teknoloji", "Doğa"],
      aciklama: "**Emek (işgücü)**, üretime katılan insanların hem fiziksel hem fikri çabalarını kapsar.",
    },
    {
      ad: "mali-sermaye",
      zorluk: 2,
      soru: "Özete göre sermaye üretim faktörü hangi iki öğeden oluşur?",
      secenekler: [
        "Fiziki sermaye ve mali sermaye",
        "Emek ve doğal kaynaklar",
        "Öz sermaye ve kâr",
        "Ücret ve faiz",
        "Toprak ve madenler",
      ],
      aciklama: "Makine, bina, araç-gereç ve hammadde **fiziki sermaye**, parasal fonlar ise **mali sermayedir**.",
    },
    {
      ad: "faktor-eslesme",
      zorluk: 2,
      soru: "Üretim faktörü ile getirisinin eşleştirmelerinden hangisi yanlıştır?",
      secenekler: ["Doğa → Faiz", "Emek → Ücret", "Sermaye → Faiz", "Girişimci → Kâr", "Doğa → Rant"],
      aciklama: "Doğanın getirisi faiz değil **rant (kira)**dır; faiz sermayenin getirisidir.",
    },
  ]),

  ...ozet(U, "u2-isletme-girisim", [
    {
      ad: "isletme-tanim",
      soru: "İnsan ihtiyaçlarını karşılamak için üretim faktörlerini planlı ve sistemli biçimde bir araya getirerek mal ya da hizmet üreten ve pazarlayan iktisadi, teknik ve sosyal birim hangisidir?",
      secenekler: ["İşletme", "Piyasa", "Sendika", "Kooperatif birliği", "Sektör"],
      aciklama: "Bu, özetteki **işletme** tanımıdır: üretim faktörlerini bir araya getiren iktisadi, teknik ve sosyal birim.",
    },
    {
      ad: "girisim-isletme",
      zorluk: 2,
      soru: "Girişim (teşebbüs) ile işletme arasındaki ilişki hangisinde doğru verilmiştir?",
      secenekler: [
        "Girişim karar bağımsızlığı olan üst mülkiyet birimi, işletme ise üretimin yapıldığı teknik alt birimdir",
        "İşletme hukuki bağımsızlığı olan üst birim, girişim ise onun teknik alt birimidir",
        "Girişim ile işletme her bakımdan aynı anlama gelir",
        "Girişim yalnızca kamu kuruluşları, işletme yalnızca özel kuruluşlar için kullanılır",
        "İşletme risk üstlenen birim, girişim ise yalnızca üretim yapan fabrikadır",
      ],
      aciklama: "Özete göre **girişim**, hukuki ve iktisadi açıdan karar bağımsızlığına sahip, risk üstlenen üst mülkiyet birimidir; **işletme** ise girişimin üretim yapılan teknik alt birimidir.",
    },
    {
      ad: "yonetici",
      soru: "İşletmenin sahibi olması gerekmeyen, uzmanlığıyla işletmeyi girişimci adına yöneten ve karşılığında maaş alan kişi kimdir?",
      secenekler: ["Profesyonel yönetici", "Girişimci", "Komanditer ortak", "Pay sahibi", "Tedarikçi"],
      aciklama: "**Profesyonel yönetici** mülkiyete sahip olmak zorunda değildir; yönetim bilgisini kullanır ve **ücret** alır. Riski üstlenen ise girişimcidir.",
    },
    {
      ad: "girisimci-risk",
      soru: "Girişimciyi profesyonel yöneticiden ayıran temel özellik hangisidir?",
      secenekler: [
        "Sermayesini ortaya koyarak ekonomik riski üstlenmesi",
        "Yönetim bilgisine ve uzmanlığa sahip olması",
        "Karşılığında aylık ücret alması",
        "İşletmeyi bir başkası adına yönetmesi",
        "Yalnızca büyük işletmelerde bulunması",
      ],
      aciklama: "Girişimci sermayesini koyar ve **kâr-zarar riskini üstlenir**; yönetici ise girişimci adına çalışıp ücret alır.",
    },
  ]),

  ...ozet(U, "u2-disiplin", [
    {
      ad: "davranis",
      soru: "Çalışanların motivasyonu, iş tatmini, liderlik ve tüketici davranışlarının anlaşılmasında işletme bilimi en çok hangi disiplinden yararlanır?",
      secenekler: ["Davranış bilimleri", "Hukuk", "Matematik ve istatistik", "Mühendislik", "İktisat"],
      aciklama: "Motivasyon, liderlik, örgütsel davranış ve tüketici davranışı **davranış bilimlerinin** (psikoloji ve sosyoloji) konusudur.",
    },
    {
      ad: "istatistik",
      soru: "Yöneylem araştırması, talep tahmini ve stok kontrolü gibi kantitatif karar modelleri işletme biliminin hangi disiplinle ilişkisine örnektir?",
      secenekler: ["Matematik ve istatistik", "Hukuk", "Sosyoloji", "Psikoloji", "Tarih"],
      aciklama: "Talep tahmini, stok kontrolü, finansal analiz ve yöneylem araştırması **matematik ve istatistik** yöntemleriyle yapılır.",
    },
    {
      ad: "hukuk",
      soru: "Şirket sözleşmeleri, vergi yükümlülükleri ve işçi-işveren ilişkilerinin yasal zeminde yürütülmesi işletmenin hangi disiplinle ilişkisini gösterir?",
      secenekler: ["Hukuk", "İktisat", "Davranış bilimleri", "Mühendislik", "İstatistik"],
      aciklama: "Kuruluş, şirket sözleşmeleri, vergi, ticaret hukuku ve iş hukuku **hukuk** disiplininin alanıdır.",
    },
    {
      ad: "muhendislik",
      soru: "Fabrika yerleşimi, otomasyon, kalite kontrol ve yönetim bilişim sistemlerinin (MIS) kurulması hangi disiplinle ilgilidir?",
      secenekler: ["Mühendislik ve bilişim teknolojileri", "Hukuk", "Sosyoloji", "İktisat", "Psikoloji"],
      aciklama: "Üretim süreçlerinin tasarımı, fabrika yerleşimi, otomasyon ve MIS **mühendislik ve bilişim teknolojilerinin** katkısıdır.",
    },
    {
      ad: "iktisat",
      soru: "Arz-talep, fiyat oluşumu, enflasyon ve piyasa yapıları konularında işletmeye makro ve mikro çerçeve sunan disiplin hangisidir?",
      secenekler: ["İktisat", "Hukuk", "Mühendislik", "Psikoloji", "İstatistik"],
      aciklama: "Kıtlık, kaynak dağılımı, arz-talep, fiyat ve enflasyon **iktisadın (ekonominin)** konusudur.",
    },
    {
      ad: "disiplinlerarasi",
      soru: "İşletme biliminin karar süreçlerinde iktisat, hukuk, psikoloji ve mühendislik gibi alanlardan doğrudan yararlanması onun hangi niteliğini gösterir?",
      secenekler: ["Disiplinlerarası olmasını", "Kâr amacı gütmesini", "Kapalı bir sistem olmasını", "Yalnızca uygulamalı olmasını", "Kamu yararını gözetmesini"],
      aciklama: "Özete göre işletme bilimi **disiplinlerarası** bir nitelik taşır; karar alırken birçok bilim dalından yararlanır.",
    },
  ]),
];
