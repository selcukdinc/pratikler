// 12. ünite (Anti-pattern'ler ve Zor Durumlar): ScrumBut, Sprint 0 ve sertleştirme
// Sprint'i, PO vekili ve onay zinciri, Scrum Master'ın yanlış rolleri, Sprint'e dışarıdan
// iş, büyük ve dağıtık takım, sabit kapsamlı sözleşme, Scrum Master'ın duruşları.
import { sorular, type Soru } from "./yardimci.ts";

const U = 12;

export const unite12: Soru[] = [
  ...sorular(U, "u12-scrumbut", [
    {
      ad: "degismez",
      dy: true,
      soru: "Scrum Rehberi'ne göre Scrum'ın yalnızca bazı parçalarını uygulamak mümkündür ama sonuç Scrum değildir.",
      aciklama: "Doğru. Rehber'in son notu: Scrum çerçevesi burada anlatıldığı gibi değişmezdir; yalnızca parçalarını uygulamak mümkündür, ama sonuç Scrum değildir. Scrum başka tekniklerle zenginleştirilebilir, eksiltilince adı değişir.",
      etiket: "rehber",
    },
    {
      ad: "scrumbut-tanim",
      soru: "\"Scrum yapıyoruz ama Retro'yu atlıyoruz, çünkü zamanımız yok\" cümlesi hangi kalıbın örneğidir?",
      secenekler: ["ScrumBut", "Scrumban", "Nexus", "Sprint 0"],
      aciklama: "**ScrumBut**: \"Scrum kullanıyoruz ama ...\" kalıbı. Bir sorunu görünür kılan parçayı atlayıp sorunu saklamaktır. Retro'ya vakit yoksa asıl konuşulması gereken şey o vakitsizliğin nedenidir.",
    },
    {
      ad: "retro-atla",
      zorluk: 2,
      soru: "Squad yoğun bir dönemde \"zamanımız yok\" diyerek iki Sprint üst üste Retro'yu atladı. Scrum Master için en uygun hamle hangisidir?",
      secenekler: [
        "Retro'yu kısa da olsa yapmak ve ilk konu olarak zamansızlığın nedenini ele almak",
        "Yoğunluk geçene kadar Retro'ları ertelemek, sonra uzun bir Retro yapmak",
        "Retro'yu kaldırıp iyileştirmeleri Daily'de konuşmayı önermek",
        "Retro'nun yerine yöneticiye yazılı bir değerlendirme raporu göndermek",
      ],
      aciklama: "Yoğunluk, iyileştirmenin en çok gerektiği andır. Retro bir ay ya da daha kısa Sprint'te en fazla üç saattir; kısa tutulabilir ama atlanınca takım aynı sorunu tekrar tekrar yaşar.",
      etiket: "senaryo",
    },
    {
      ad: "zenginlestirme",
      soru: "Aşağıdakilerden hangisi Scrum'ı eksiltmek değil, **zenginleştirmek** sayılır?",
      secenekler: [
        "Developers'ın DoD'una otomatik test ve kod incelemesi eklemesi",
        "Sprint Review'u yalnızca büyük sürümlerden önce yapmak",
        "Sprint Goal yazmayı bırakıp yalnızca öğe listesiyle çalışmak",
        "Daily'yi haftada bir yapılan bir toplantıya dönüştürmek",
      ],
      aciklama: "Rehber, çerçevenin içine farklı süreç, teknik ve yöntemlerin eklenebileceğini söyler. Etkinlik, artefakt ya da taahhüt atmak ise Scrum'ı eksiltir.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u12-sahte-sprint", [
    {
      ad: "sprint-0",
      zorluk: 2,
      soru: "Squad yeni projede iki haftalık bir \"Sprint 0\" açıp yalnızca altyapı kurmak, araç seçmek ve mimari belge yazmak istiyor. Rehber açısından sorun nedir?",
      secenekler: [
        "Her Sprint kullanılabilir bir Increment hedefler; yalnız hazırlık bu amacı taşımaz",
        "Rehber ilk Sprint'in en fazla bir hafta sürmesini zorunlu tutar",
        "Altyapı işleri Product Backlog'a hiçbir biçimde yazılamaz",
        "Sprint 0'ı yalnızca Scrum Master planlayıp yönetebilir",
      ],
      aciklama: "\"Sprint 0\" Rehber'de yoktur. İlk Sprint de bir Sprint Goal ve kullanılabilir bir Increment hedefler; gereken altyapı, ince bir değer dilimiyle birlikte kurulur (örneğin menüyü gösteren ilk ekran ve onu yayına taşıyan hat).",
      etiket: "sahada",
    },
    {
      ad: "sertlestirme",
      zorluk: 2,
      soru: "Squad her dört Sprint'te bir \"sertleştirme Sprint'i\" yapıp yalnızca hata düzeltiyor ve entegrasyon testi koşuyor. Bu en çok neyin belirtisidir?",
      secenekler: [
        "Definition of Done yetersiz; öğeler bitmeden Done sayılıyor",
        "Takım çok küçük kalmış; daha çok geliştirici gerekiyor",
        "Sprint'ler fazla uzun tutulmuş; bir haftaya inmeleri gerek",
        "Product Owner öğeleri yanlış ölçütlerle sıralıyor",
      ],
      aciklama: "Sertleştirme Sprint'i ihtiyacı, Increment'in her Sprint sonunda gerçekten kullanılabilir olmadığını gösterir. Çare DoD'a entegrasyon ve testi eklemek ve borcu her Sprint ödemektir (11. ünite).",
      etiket: "sahada",
    },
    {
      ad: "uzatma",
      dy: false,
      soru: "Sprint Goal'e iki gün kala ulaşılamayacağı anlaşılırsa Sprint birkaç gün uzatılabilir.",
      aciklama: "Yanlış. Sprint'ler sabit uzunluktadır. Hedef tutmayacaksa Developers PO ile kapsamı görüşür; Sprint biter, bitmeyen iş Product Backlog'a döner ve Retro'da nedeni konuşulur.",
      etiket: "rehber",
    },
    {
      ad: "uzunluk-oynat",
      soru: "Takım işi yetişmeyen Sprint'leri üç haftaya, işi erken bitenleri bir haftaya çekiyor. En önemli kayıp hangisidir?",
      secenekler: [
        "Ritim ve tahmin edilebilirlik kaybolur, Sprint'ler kıyaslanamaz",
        "Sprint Review'un time-box'ı her seferinde aşılmış olur",
        "Daily Scrum'ın süresi her gün biraz daha uzamaya başlar",
        "Product Goal kendiliğinden geçersiz olur ve yeniden yazılır",
      ],
      aciklama: "Sabit uzunluk takımın ritmini ve öğrenmesini sağlar. Uzunluk değişince ne hız ne de hedef tutma oranı anlam taşır; sorun saklanır.",
    },
  ]),
  ...sorular(U, "u12-po-sorun", [
    {
      ad: "komite",
      dy: false,
      soru: "Product Owner, birden çok yöneticiden oluşan bir komite olabilir.",
      aciklama: "Yanlış. Rehber: Product Owner tek bir kişidir, komite değildir. Pek çok paydaşın isteğini Product Backlog'da temsil edebilir; ama sıralama kararını bir kişi verir.",
      etiket: "rehber",
    },
    {
      ad: "onay-zinciri",
      zorluk: 3,
      soru: "Squad'da PO her story'yi yazdıktan sonra Teknik Liderlik'in onayına götürüyor; onay gelmeden öğe sıraya giremiyor ve bekleme haftalar sürüyor. Rehber'e göre en temel sorun hangisidir?",
      secenekler: [
        "PO'nun backlog kararlarına organizasyonda tam saygı gösterilmiyor",
        "Story'lerin kabul ölçütleri eksik ve belirsiz yazılmış",
        "Teknik Liderlik'in Daily Scrum'a hiç katılmaması",
        "Sprint'lerin iki haftadan daha kısa tutulmuş olması",
      ],
      aciklama: "Rehber: PO'nun başarılı olabilmesi için bütün organizasyonun onun kararlarına saygı duyması gerekir; PB'yi değiştirmek isteyen PO'yu ikna etmeye çalışır. Teknik görüş değerlidir (Developers'ın ve teknik liderlerin bilgisi refinement'ta alınır), ama onay kapısı sıralama kararını PO'dan alır ve akışı durdurur.",
      etiket: "senaryo",
    },
    {
      ad: "vekil",
      zorluk: 2,
      soru: "Asıl karar verici yöneticidir; takıma \"PO\" diye atanan kişi yalnızca mesaj taşıyor ve hiçbir soruya o an cevap veremiyor. Bu kalıba ne denir?",
      secenekler: ["Vekil Product Owner", "Area Product Owner", "Chief Product Owner", "Teknik Product Owner"],
      aciklama: "**Vekil PO**: unvanı taşıyan ama karar yetkisi olmayan kişi. Geri bildirim döngüsü uzar, takım günlerce cevap bekler. Çözüm ya yetkinin devri ya da gerçek karar vericinin PO olmasıdır.",
      etiket: "sahada",
    },
    {
      ad: "epic-yazan",
      zorluk: 2,
      soru: "Squad'da epic ve feature'ları Teknik Liderlik yazıyor, PO yalnızca story'leri yazıyor. Bu Rehber'e aykırı mıdır?",
      secenekler: [
        "Öğeleri başkası yazabilir; aykırı olan, Product Backlog'dan hesap verebilir olanın PO olmaması olur",
        "Evet; Rehber Product Backlog öğelerini yalnızca PO'nun yazmasını şart koşar",
        "Hayır; Rehber epic ve feature'ı Teknik Liderlik'in sorumluluğu sayar",
        "Evet; Rehber epic ve feature yazmayı tamamen yasaklar",
      ],
      aciklama: "Rehber: PO Product Backlog işlerini kendisi yapabilir ya da başkasına yaptırabilir; **hesap verebilir olan yine PO'dur**. Epic ve feature Rehber'de geçmez (13. ünite, SAFe ve araçların dili). Sorun yazanın kim olduğu değil, son sıralama kararının kimde olduğudur.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u12-sm-sorun", [
    {
      ad: "sm-pm",
      soru: "Scrum Master her sabah görev dağıtıyor, kimin ne yapacağını belirliyor ve yöneticiye kişi kişi rapor veriyor. Bu hangi yanılgıdır?",
      secenekler: [
        "Scrum Master'ı proje yöneticisi gibi kullanmak",
        "Scrum Master'ın kolaylaştırıcı duruşu",
        "Scrum Master'ın organizasyona hizmeti",
        "Scrum Master'ın öğretmen duruşu",
      ],
      aciklama: "Rehber'e göre Developers kendi işlerini planlar ve kendi kendini yönetir. Görev dağıtan SM, takımın sahiplenmesini ve öğrenmesini engeller.",
    },
    {
      ad: "sekreter",
      soru: "Scrum Master'ın toplantı odası ayırmak, tutanak tutmak ve araçtaki kartları güncellemekten başka iş yapmaması hangi yanlış duruştur?",
      secenekler: ["Sekreter ya da yönetici asistanı duruşu", "Koç duruşu", "Değişim öncüsü duruşu", "Engel kaldırıcı duruşu"],
      aciklama: "Bu işler gerekebilir ama SM'nin hesap verebilirliği Scrum'ın etkinliği ve takımın gelişimidir. Yalnızca idari işler yapan SM bu değeri üretmez.",
      etiket: "sahada",
    },
    {
      ad: "smsiz",
      zorluk: 3,
      soru: "Squad'da Scrum Master yok; etkinlikleri sırayla kim boşsa o kolaylaştırıyor. Bir yıl sonra en olası sonuç hangisidir?",
      secenekler: [
        "Etkinlikler alışkanlığa döner, engeller sahipsiz kalır, kimse organizasyondaki kök nedenlerle uğraşmaz",
        "Takım daha hızlı olur, çünkü toplantı sayısı azalır",
        "Product Owner kendiliğinden Scrum Master'ın işlerini üstlenir ve sorun çıkmaz",
        "Hiçbir fark olmaz; Rehber Scrum Master'ı isteğe bağlı sayar",
      ],
      aciklama: "Rehber Scrum Takımı'nı PO, SM ve Developers olarak tanımlar; SM isteğe bağlı değildir. SM'siz takımlarda sıkça görülen: Retro'lar biçimselleşir, aynı engeller tekrar eder, takımla organizasyon arasındaki sorunları kimse üstlenmez. Bu bir \"ScrumBut\"tır.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u12-mudahale", [
    {
      ad: "yonetici-ekle",
      zorluk: 2,
      soru: "Bölüm yöneticisi Sprint'in ortasında Developers'a doğrudan yeni bir iş verdi ve \"bu Sprint'e sığdırın\" dedi. Scrum Master ne yapmalıdır?",
      secenekler: [
        "Yöneticiyi PO'ya yönlendirmek; istek PB'ye girer, Sprint Goal korunur",
        "İşi hemen Sprint Backlog'a eklemek; yönetici isteği her şeyden önce gelir",
        "Developers'a işi panoya yazmadan, gizlice yapmalarını söylemek",
        "Sprint'i iptal edip yöneticinin işiyle yeni bir Sprint başlatmak",
      ],
      aciklama: "Sprint boyunca Sprint Goal'ü tehlikeye atan değişiklik yapılmaz; yeni istekler PO'dan geçer. SM organizasyona Scrum'ı anlatarak hizmet eder. Simülatördeki \"Sprint ortasında acil istek\" görevi bu durumu oynatır.",
      etiket: "senaryo",
    },
    {
      ad: "iptal-kim",
      dy: false,
      soru: "Sprint ortasında gelen bir istek önemliyse bölüm yöneticisi Sprint'i iptal edebilir.",
      aciklama: "Yanlış. Sprint'i yalnızca Product Owner iptal edebilir, o da yalnızca Sprint Goal geçersizleşirse.",
      etiket: "rehber",
    },
    {
      ad: "kapasite-payi",
      zorluk: 2,
      soru: "Squad'a her Sprint birkaç acil canlı sistem isteği geliyor ve her seferinde plan bozuluyor. Sahada en çok işe yarayan yaklaşım hangisidir?",
      secenekler: [
        "Geçmiş veriye göre acil işlere kapasite payı ayırıp görünür yönetmek",
        "Acil istekleri bir sonraki Sprint'e kadar kesinlikle kabul etmemek",
        "Her acil istekte Sprint'i iptal edip baştan yeniden planlamak",
        "Acil işleri panoya yazmadan akşamları fazla mesaiyle yapmak",
      ],
      aciklama: "Öngörülebilir kesintiler plana katılır: Planning'de kapasitenin bir kısmı ayrılır, acil işler Kanban'daki hızlandırılmış sınıf gibi sınırlı ve görünür tutulur (10. ünite).",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u12-buyuk-dagitik", [
    {
      ad: "on-dort",
      zorluk: 2,
      soru: "14 kişilik squad'da Daily uzuyor, kararlar gecikiyor ve iki grup birbirinin işini bilmiyor. Rehber'in önerdiği yön hangisidir?",
      secenekler: [
        "Aynı Product Goal, Product Backlog ve PO'yu paylaşan küçük takımlar",
        "Takımı tek takım tutup Daily'yi haftada bir toplantıya indirmek",
        "Her gruba ayrı bir Product Owner ve ayrı Product Backlog vermek",
        "Bir Tech Lead'i iki grubun da hiyerarşik yöneticisi yapmak",
      ],
      aciklama: "Rehber: Scrum Takımı genelde 10 kişi ya da daha azdır; çok büyürse aynı ürüne odaklanan birden çok uyumlu takıma bölünmesi düşünülmelidir. Bu takımlar aynı Product Goal'ü, Product Backlog'u ve PO'yu paylaşmalıdır (13. ünite).",
      etiket: "rehber",
    },
    {
      ad: "iletisim-yolu",
      soru: "14 kişilik bir takımda kişiler arasındaki iletişim yolu sayısı kaçtır? (n kişide n(n−1)/2)",
      sayi: [91],
      aciklama: "14 × 13 / 2 = **91**. 7 kişide bu sayı 21'dir. Takım iki katına çıkınca iletişim yükü dört katından fazla artar (5. ünite).",
      zorluk: 2,
    },
    {
      ad: "dagitik-daily",
      soru: "Squad'ın yarısı başka bir şehirde. Daily için en uygun yaklaşım hangisidir?",
      secenekler: [
        "Herkesin aynı anda katıldığı 15 dakikalık görüntülü Daily ve ortak çevrim içi pano",
        "Her şehrin kendi Daily'sini yapması, sonuçların e-postayla paylaşılması",
        "Daily yerine herkesin akşam yazılı durum notu bırakması",
        "Daily'yi haftada bir yüz yüze buluşmaya çevirmek",
      ],
      aciklama: "Rehber Daily'nin yerini ya da biçimini dayatmaz ama amacı Developers'ın birlikte Sprint Goal'e ilerlemeyi denetlemesidir. Dağıtık takımda bunun yolu ortak zaman ve ortak panodur; yazılı notlar konuşmanın yerini tutmaz.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u12-sozlesme", [
    {
      ad: "sabit-kapsam",
      zorluk: 3,
      soru: "Kurum, uygulamayı sabit fiyat, sabit tarih ve sabit kapsamla ihale etti. Scrum'la çalışan squad için en dürüst yaklaşım hangisidir?",
      secenekler: [
        "Kapsamı değere göre sıralayıp her Sprint çalışan yazılım göstermek",
        "Sözleşmedeki bütün maddeleri ilk Sprint'te planlayıp dağıtmak",
        "Scrum'ı bırakıp sözleşme bitene kadar waterfall ile çalışmak",
        "Değişiklik isteklerini sözleşmeye aykırı diye geri çevirmek",
      ],
      aciklama: "Demir üçgenin üç köşesi birden sabitlenince kalite esner (1. ünite). Değere göre sıralı backlog ve her Sprint görünen ilerleme, en değerli kısmın mutlaka teslim edilmesini ve kapsam pazarlığının veriyle yapılmasını sağlar: Manifesto'nun \"sözleşme pazarlığı yerine müşteriyle iş birliği\" değeri.",
      etiket: "senaryo",
    },
    {
      ad: "tiyatro",
      soru: "Unvanlar Scrum'a göre değişti, toplantıların adı değişti, ama kararlar yine yukarıda veriliyor ve takım bir yıldır hiçbir şeyi müşteriye göstermedi. Buna sahada ne denir?",
      secenekler: ["Agile tiyatrosu", "Scrumban", "Sürekli teslim", "Kanban yöntemi"],
      aciklama: "**Agile tiyatrosu** (ya da kargo kültü): biçim alınır, öz alınmaz. Empirizmin ölçüsü çalışan Increment ve ona göre verilen kararlardır.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u12-sm-durus", [
    {
      ad: "koc",
      soru: "Scrum Master, PO'nun backlog sıralamasında zorlandığını görüyor. Hangi davranış **koç** duruşudur?",
      secenekler: [
        "Sorularla PO'nun kendi sıralama ölçütlerini bulmasına yardım etmek",
        "Sıralamayı PO'nun yerine kendisi yapıp takıma duyurmak",
        "PO'ya hangi öğenin önce geleceğini doğrudan söylemek",
        "Sıralama kararını takımın oylamasına bırakmayı önermek",
      ],
      aciklama: "Koç cevabı vermez, kişinin kendi cevabını bulmasına yardım eder. Öğretmen duruşu ise bilgiyi doğrudan aktarır (örneğin değer, risk ve bağımlılık ölçütlerini anlatmak); ikisi de yerinde kullanılır.",
      etiket: "sahada",
    },
    {
      ad: "sessiz",
      zorluk: 2,
      soru: "Squad bir Retro'da tartışırken çözüme kendi kendine yaklaşıyor. Scrum Master'ın bu anda yapabileceği en değerli şey çoğu zaman hangisidir?",
      secenekler: [
        "Sessiz kalıp takımın çözüme ulaşmasına alan bırakmak",
        "Hemen doğru çözümü söyleyip tartışmayı kısaltmak",
        "Tartışmayı durdurup sonraki maddeye geçmek",
        "Kararı Product Owner'a bırakmak",
      ],
      aciklama: "Kendi kendini yöneten takımda SM'nin amacı kendini gereksiz kılmaktır. Takım ilerliyorsa araya girmek sahiplenmeyi azaltır; susmak da bilinçli bir duruştur.",
      etiket: "senaryo",
    },
    {
      ad: "engel",
      soru: "Rehber'e göre Scrum Master engellerle ilgili ne yapar?",
      secenekler: [
        "Scrum Takımı'nın ilerlemesini engelleyenlerin kaldırılmasına neden olur",
        "Bütün engelleri bizzat ve tek başına kaldırır",
        "Engelleri yalnızca Retro'da konuşulmak üzere kaydeder",
        "Engelleri bölüm yöneticisine bildirip karar bekler",
      ],
      aciklama: "Rehber'in ifadesi: SM, Scrum Takımı'nın ilerlemesini engelleyenlerin **kaldırılmasına neden olur**. Kendisi kaldırmak zorunda değildir; doğru kişiyi harekete geçirir ve takımın kendi engellerini çözmesini destekler.",
      etiket: "rehber",
    },
  ]),
];
