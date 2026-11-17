// 1. ünite (Neden Agile?): tahmine dayalı ve deneysel süreç kontrolü, waterfall ve
// V-model, belirsizlik (Stacey), Cynefin, iteratif ve artımlı geliştirme, demir üçgen,
// agile'a giden yol.
import { sorular, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...sorular(U, "u1-tahmin-empirik", [
    {
      ad: "empirik-tanim",
      soru: "Deneysel (empirik) süreç kontrolünde kararlar neye dayanır?",
      secenekler: ["Gözleme ve deneyimle öğrenilene", "Baştan yapılmış ayrıntılı plana", "Yöneticinin sezgisine", "Sektördeki en iyi uygulamalara"],
      aciklama: "Empirizm, bilginin deneyimden geldiğini ve kararların **bilinenlere, gözlenene** göre verilmesi gerektiğini söyler. Çok şeyin baştan bilinmediği işlerde kısa döngülerle sonuç üretilir, sonuca bakılır, plan ayarlanır. Scrum bu yaklaşımın üstüne kuruludur (4. ünite).",
    },
    {
      ad: "tahmine-uygun",
      zorluk: 2,
      soru: "Aşağıdaki işlerden hangisi tahmine dayalı (önceden ayrıntılı planlanan) bir süreçle en rahat yürütülür?",
      secenekler: [
        "Aynı tip yüz sunucuya bilinen bir yamayı kurmak",
        "Öğrencilerin ne isteyeceği belli olmayan yeni bir uygulama",
        "Daha önce hiç denenmemiş bir yapay zekâ özelliği",
        "Rakibin hamlesine göre değişecek bir kampanya sitesi",
      ],
      aciklama: "Girdileri, adımları ve sonucu baştan bilinen, **tekrarlanan** bir iş tahmine dayalı planlamaya uygundur: yüz sunucuya aynı yamayı kurmanın kaç saat süreceği öncekilere bakarak hesaplanabilir. Öteki üç işte gereksinim ya da teknoloji belirsiz; plan ancak yapılırken öğrenilenle netleşir.",
    },
    {
      ad: "neden-dogdu",
      zorluk: 2,
      soru: "Agile yaklaşımların yaygınlaşmasının temel nedeni hangisidir?",
      secenekler: [
        "Yazılımda gereksinimlerin yapılırken değişmesi ve öğrenilmesi",
        "Yazılımcıların dokümantasyon yazmaktan hoşlanmaması",
        "Bilgisayarların 1990'larda daha ucuzlaması",
        "Proje yöneticisi bulmanın zorlaşması",
      ],
      aciklama: "Yazılım projelerinin çoğunda müşteri ne istediğini ürünü gördükçe anlar, teknoloji de yapılırken sürprizler çıkarır. Baştan dondurulan planlar bu yüzden sık sık tutmaz. Agile yaklaşımlar belirsizliği yok saymak yerine **kısa döngüler ve geri bildirimle** yönetmeyi önerir.",
    },
    {
      ad: "kontrol-dongusu",
      dy: true,
      soru: "Deneysel süreç kontrolünde plan yapılır; ama plan, sonuçlar gözlendikçe değişebilecek bir varsayım olarak görülür.",
      aciklama: "Doğru. Agile \"plansızlık\" değildir; plan sık yapılır ve her döngüde gerçek sonuçlara göre güncellenir. Scrum'da Sprint Planning, Daily Scrum ve Sprint Review bu güncellemenin yerleridir.",
    },
  ]),
  ...sorular(U, "u1-waterfall", [
    {
      ad: "asamalar",
      soru: "Waterfall (şelale) modelinin temel özelliği hangisidir?",
      secenekler: [
        "Aşamaların sırayla ve her birinin bir kez yapılması",
        "Her iki haftada bir çalışan ürün teslim edilmesi",
        "Gereksinimlerin her sprintte yeniden sıralanması",
        "Test ve kodlamanın aynı anda yürümesi",
      ],
      aciklama: "Waterfall'da analiz, tasarım, kodlama, test ve teslim **sırayla**, her biri bir öncekinin bitmesini bekleyerek ve genellikle birer kez yapılır. Müşteri çalışan ürünü çoğu zaman en sonda görür.",
    },
    {
      ad: "royce",
      zorluk: 3,
      soru: "Waterfall'un kaynağı sayılan Winston Royce'un 1970 tarihli makalesi tek geçişli sıralı süreç için ne söyler?",
      secenekler: [
        "Riskli olduğunu ve geri bildirimle tekrar gerektiğini",
        "Bütün yazılım projeleri için en iyi yol olduğunu",
        "Yalnızca küçük takımlarda işe yarayacağını",
        "Test aşamasının atlanabileceğini",
      ],
      aciklama: "Royce makalesinde sıralı aşamaları çizer ama hemen ardından bu basit hâlin **riskli ve hataya açık** olduğunu söyler; aşamalar arasında geri dönüş, prototip (\"işi iki kez yap\") ve müşteri katılımı önerir. \"Waterfall\" adı makalede geçmez; model sonradan en basit çizimiyle yaygınlaştı.",
    },
    {
      ad: "gec-geri-bildirim",
      zorluk: 2,
      soru: "Waterfall'da bir gereksinimin yanlış anlaşıldığı en sık ne zaman ortaya çıkar?",
      secenekler: [
        "Kabul testinde ya da teslimden sonra",
        "Analiz aşamasının ilk haftasında",
        "Tasarım belgesi yazılırken",
        "Kod gözden geçirmesinde",
      ],
      aciklama: "Müşteri çalışan ürünü en sonda gördüğü için yanlış anlaşılan bir gereksinim çoğunlukla **kabul testinde ya da teslimden sonra** fark edilir. O noktada düzeltmenin maliyeti en yüksektir; agile'ın erken ve sık teslim ısrarı bu riski küçültmek içindir.",
    },
    {
      ad: "v-model",
      zorluk: 2,
      soru: "V-model, waterfall'a göre neyi daha belirgin yapar?",
      secenekler: [
        "Her geliştirme aşamasının karşılığı olan test seviyesini",
        "Ürünün iki haftalık iterasyonlarla büyümesini",
        "Müşterinin her gün takımla birlikte çalışmasını",
        "Gereksinimlerin proje boyunca değişebilmesini",
      ],
      aciklama: "V-model sol kolda gereksinim, sistem tasarımı, ayrıntılı tasarım ve kodlamayı; sağ kolda bunların her birine **karşılık gelen test seviyesini** (birim, entegrasyon, sistem, kabul testi) koyar. Yine de sıralı ve tahmine dayalı bir modeldir.",
    },
    {
      ad: "waterfall-uygun",
      dy: true,
      zorluk: 2,
      soru: "Gereksinimleri yasal olarak sabit ve teknolojisi iyi bilinen bir işte sıralı (waterfall benzeri) bir plan makul bir seçim olabilir.",
      aciklama: "Doğru. Agile her iş için tek doğru değildir. Belirsizlik düşükse ayrıntılı plan işe yarar; agile'ın üstünlüğü belirsizlik arttıkça ortaya çıkar. Yine de yasal gereksinimli işlerde bile ara teslimler riskleri erken gösterir.",
    },
  ]),
  ...sorular(U, "u1-belirsizlik", [
    {
      ad: "stacey-eksen",
      soru: "Stacey matrisi işleri hangi iki eksene göre sınıflandırır?",
      secenekler: [
        "Gereksinim uzlaşması ve teknoloji kesinliği",
        "Proje bütçesi ve takımın büyüklüğü",
        "Proje süresi ve hedeflenen müşteri sayısı",
        "Yazılan kod satırı ve bulunan hata sayısı",
      ],
      aciklama: "Agile dünyasında kullanılan uyarlamasıyla Stacey matrisi bir eksende **ne istendiği konusunda ne kadar uzlaşıldığını**, öbür eksende **nasıl yapılacağının ne kadar kesin** bilindiğini gösterir. İkisi de netse iş basit, ikisi de belirsizse kaotiktir; aradaki geniş bölge kompleks işlerdir.",
    },
    {
      ad: "stacey-kompleks",
      zorluk: 2,
      soru: "Ne istediği tam belli olmayan bir müşteri için yeni bir teknolojiyle ürün geliştirmek Stacey matrisinde genellikle hangi bölgeye düşer?",
      secenekler: ["Kompleks", "Basit", "Karmaşık ama bilinebilir", "Tamamen sıradan"],
      aciklama: "Gereksinim de teknoloji de kısmen belirsiz olduğunda iş **kompleks** bölgededir. Scrum Rehberi Scrum'u tam bu tür \"kompleks problemler\" için tanımlar.",
    },
    {
      ad: "iki-belirsizlik",
      dy: false,
      soru: "Yazılımda tek belirsizlik kaynağı müşterinin ne istediğidir; teknoloji tarafı hep önceden bilinir.",
      aciklama: "Yanlış. Ne yapılacağı (gereksinim) kadar **nasıl yapılacağı** da belirsiz olabilir: yeni bir kütüphane, beklenmedik performans sorunu, entegre olunacak eski bir sistem. Stacey matrisinin iki ekseni bu yüzden vardır.",
    },
  ]),
  ...sorular(U, "u1-cynefin", [
    {
      ad: "kompleks-yaklasim",
      soru: "Cynefin modelinde kompleks (complex) alan için önerilen yaklaşım hangisidir?",
      secenekler: [
        "Dene, gözle, karşılık ver (probe-sense-respond)",
        "Algıla, sınıflandır, karşılık ver (sense-categorize-respond)",
        "Algıla, analiz et, karşılık ver (sense-analyze-respond)",
        "Harekete geç, algıla, karşılık ver (act-sense-respond)",
      ],
      aciklama: "Kompleks alanda neden-sonuç ilişkisi ancak geriye bakınca görülür; bu yüzden küçük, güvenli **deneyler** yapılır, sonuç gözlenir ve ona göre ilerlenir. Açık alanda sınıflandırma, karmaşık alanda uzman analizi, kaotik alanda önce harekete geçmek önerilir.",
    },
    {
      ad: "karmasik",
      zorluk: 2,
      soru: "Bir veritabanının neden yavaşladığını bulmak için uzman bir mühendisin sorgu planlarını incelemesi Cynefin'de hangi alana örnektir?",
      secenekler: ["Karmaşık (complicated)", "Açık (clear)", "Kompleks (complex)", "Kaotik (chaotic)"],
      aciklama: "Neden-sonuç ilişkisi vardır ama görmek için **uzmanlık ve analiz** gerekir: bu karmaşık (complicated) alandır. Burada birden çok iyi uygulama olabilir; uzman bunlar arasından seçer.",
    },
    {
      ad: "kaotik",
      zorluk: 2,
      soru: "Canlı sistem çöktü ve yemekhane kuyruğunda yüzlerce öğrenci bekliyor. Cynefin'e göre ilk adım ne olmalı?",
      secenekler: [
        "Önce sistemi ayağa kaldırmak için hemen harekete geçmek",
        "Kök neden analizi için bir toplantı planlamak",
        "Konuyu bir sonraki sprintin backlog'una yazmak",
        "Benzer olayların istatistiğini çıkarmak",
      ],
      aciklama: "Kaotik alanda neden-sonuç ilişkisi o an görülemez; önce **dengeyi sağlamak için harekete geçilir** (act), sonra durum algılanır ve kompleks alana taşınarak öğrenilir. Kök neden analizi kriz geçtikten sonraki iştir.",
      etiket: "senaryo",
    },
    {
      ad: "acik-alan",
      soru: "Cynefin'in açık (clear) alanında neden-sonuç ilişkisi nasıldır?",
      secenekler: ["Herkes için apaçıktır", "Yalnızca uzmanlar analizle görebilir", "Ancak geriye bakınca anlaşılır", "O an hiç görülemez"],
      aciklama: "Açık alanda (eski adlarıyla simple ya da obvious) neden-sonuç ilişkisi herkesin görebileceği kadar nettir; bilinen **en iyi uygulama** uygulanır. Bu alanda ayrıntılı prosedür ve kontrol listeleri iyi çalışır.",
    },
    {
      ad: "cynefin-scrum",
      dy: true,
      zorluk: 2,
      soru: "Scrum'un kısa döngülerle deneme yapıp sonucu denetleme yapısı en çok Cynefin'in kompleks alanındaki işlere uyar.",
      aciklama: "Doğru. Her Sprint bir deneydir: hedef konur, Increment üretilir, Sprint Review'da sonuç gözlenir ve backlog uyarlanır. Bu, kompleks alanın \"dene, gözle, karşılık ver\" önerisinin bir biçimidir.",
    },
  ]),
  ...sorular(U, "u1-iteratif", [
    {
      ad: "iteratif-artimli",
      zorluk: 2,
      soru: "\"Artımlı\" (incremental) ve \"iteratif\" (iterative) geliştirme arasındaki fark hangi seçenekte doğru verilmiştir?",
      secenekler: [
        "Artımlı parça ekler, iteratif aynı parçayı tekrar ele alıp iyileştirir",
        "Artımlı daha hızlıdır, iteratif daha yavaştır",
        "Artımlı yalnızca testte, iteratif yalnızca analizde kullanılır",
        "İkisi aynı şeyin farklı adlarıdır",
      ],
      aciklama: "**Artımlı** geliştirmede ürün kullanılabilir parçalar eklenerek büyür (önce menü, sonra sipariş, sonra ödeme). **İteratif** geliştirmede aynı şey tekrar tekrar ele alınıp iyileştirilir (menü ekranının üçüncü sürümü). Agile ikisini birlikte kullanır: her döngüde hem yeni parça eklenir hem eskisi geri bildirimle düzeltilir.",
    },
    {
      ad: "deger-erken",
      zorluk: 2,
      soru: "Kampüs Yemekhanesi uygulaması 12 ayda bir kerede teslim edilmek yerine her iki haftada kullanılabilir bir parça teslim edilirse en önemli kazanç hangisidir?",
      secenekler: [
        "Erken geri bildirim ve değerin erken gelmesi",
        "Toplam işin kesinlikle azalması",
        "Dokümantasyona gerek kalmaması",
        "Paydaşların toplantılara gelmek zorunda olmaması",
      ],
      aciklama: "Sık teslim, yanlış giden şeyi haftalar içinde gösterir ve öğrenciler ilk özelliklerden aylarca önce yararlanmaya başlar. Toplam iş kendiliğinden azalmaz; ama **gereksiz ya da yanlış işe harcanan emek** erken fark edildiği için genellikle azalır.",
      etiket: "senaryo",
    },
    {
      ad: "geri-bildirim-sayisi",
      soru: "52 haftalık bir projede her iki haftada bir paydaşlara çalışan ürün gösteriliyorsa, proje boyunca kaç geri bildirim fırsatı olur?",
      sayi: [26],
      aciklama: "52 / 2 = **26**. Aynı projede ürün yalnızca sonda gösterilseydi tek bir fırsat olurdu ve o da düzeltme için en pahalı an olurdu.",
    },
    {
      ad: "kaykay",
      zorluk: 2,
      soru: "\"Önce tekerlek, sonra şasi, sonra motor, en son araba\" yerine \"önce kaykay, sonra bisiklet, sonra motosiklet, sonra araba\" teslim etmek hangi fikri anlatır?",
      secenekler: [
        "Her adımda kullanılabilir bir ürünle öğrenmeyi",
        "Bileşenlerin ayrı takımlarca yapılmasını",
        "Projeyi en ucuz malzemeyle başlatmayı",
        "Müşteriden gereksinimleri en sonda almayı",
      ],
      aciklama: "Henrik Kniberg'in bilinen çizimi: tekerlek tek başına kimsenin işine yaramaz, kaykay ise yaramaz ama \"bir yerden bir yere gitme\" ihtiyacını kısmen karşılar ve **geri bildirim üretir**. Her adım kullanılabilir olunca müşteri belki arabaya hiç ihtiyacı olmadığını da söyleyebilir.",
    },
  ]),
  ...sorular(U, "u1-ucgen", [
    {
      ad: "ters-ucgen",
      zorluk: 2,
      soru: "Agile'ın \"ters üçgen\" yaklaşımında genellikle hangisi sabit tutulur, hangisi esnetilir?",
      secenekler: [
        "Zaman ve maliyet sabit, kapsam esnek",
        "Kapsam sabit, zaman ve maliyet esnek",
        "Hepsi sabit, kalite esnek",
        "Kapsam ve maliyet sabit, zaman esnek",
      ],
      aciklama: "Geleneksel planlamada kapsam baştan sabitlenir, zaman ve maliyet ondan tahmin edilir. Agile'da takım ve döngü süresi (dolayısıyla **zaman ve maliyet**) sabittir; **kapsam** değere göre sıralanır ve en değerliden başlanır. Kalite pazarlık konusu değildir.",
    },
    {
      ad: "kalite-esnemez",
      dy: false,
      soru: "Agile'da teslim tarihi yaklaşınca kaliteden kısıp kapsamı korumak kabul gören bir uygulamadır.",
      aciklama: "Yanlış. Scrum Rehberi Sprint boyunca kalitenin düşürülmeyeceğini açıkça söyler. Esneyen şey kapsamdır: daha az şey, ama Definition of Done'ı karşılayarak teslim edilir. Kalitesiz iş teknik borç olarak geri döner.",
    },
  ]),
  ...sorular(U, "u1-tarihce", [
    {
      ad: "snowbird",
      soru: "Agile Manifesto ne zaman ve nerede yazıldı?",
      secenekler: ["Şubat 2001, Snowbird, Utah", "Mart 1995, Austin, Teksas", "Ekim 1986, Tokyo, Japonya", "Kasım 2020, Amsterdam, Hollanda"],
      aciklama: "Manifesto **Şubat 2001'de Utah'taki Snowbird** kayak merkezinde 17 yazılımcının buluşmasında yazıldı. Aralarında Scrum'un (Schwaber, Sutherland), XP'nin (Beck), Crystal'ın (Cockburn) ve başka \"hafif\" yöntemlerin temsilcileri vardı.",
      etiket: "rehber",
    },
    {
      ad: "once-gelenler",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi Agile Manifesto'dan **önce** ortaya çıkmış bir yaklaşım değildir?",
      secenekler: ["SAFe", "Scrum", "Extreme Programming (XP)", "Toyota Üretim Sistemi"],
      aciklama: "Toyota Üretim Sistemi 1950'lerden, Scrum 1995'ten, XP 1990'ların sonundan gelir; hepsi Manifesto'yu besledi. **SAFe** (Scaled Agile Framework) ise 2011'de yayımlandı; Epic ve Feature terimlerinin yaygınlaşmasında payı büyüktür (13. ünite ve Backlog pratiği).",
    },
  ]),
];
