// 2. ünite (Agile Manifesto ve 12 İlke): dört değer cümlesi, "sağdakilerin de değeri
// var" cümlesi, 12 ilke (dört grupta) ve yaygın yanılgılar. Manifesto'nun metni
// serbestçe kopyalanabilir; değerler ve ilkeler burada Türkçe özetle anılır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...sorular(U, "u2-degerler", [
    {
      ad: "bireyler",
      soru: "Agile Manifesto'ya göre \"bireyler ve etkileşimler\" neyin önünde tutulur?",
      secenekler: ["Süreçler ve araçlar", "Kapsamlı dokümantasyon", "Sözleşme pazarlığı", "Bir planı takip etmek"],
      aciklama: "Dört değer cümlesi: **bireyler ve etkileşimler** > süreçler ve araçlar; **çalışan yazılım** > kapsamlı dokümantasyon; **müşteriyle iş birliği** > sözleşme pazarlığı; **değişime karşılık vermek** > bir planı takip etmek.",
      etiket: "rehber",
    },
    {
      ad: "calisan-yazilim",
      soru: "Manifesto'da \"çalışan yazılım\" hangisinin önünde tutulur?",
      secenekler: ["Kapsamlı dokümantasyon", "Süreçler ve araçlar", "Sözleşme pazarlığı", "Bir planı takip etmek"],
      aciklama: "\"Çalışan yazılımı kapsamlı dokümantasyona\" tercih ederiz. Dokümantasyon yasak değildir; ama ilerlemenin kanıtı belge değil, kullanılabilen üründür.",
      etiket: "rehber",
    },
    {
      ad: "musteri",
      soru: "Manifesto'da \"sözleşme pazarlığı\"nın karşısına konan değer hangisidir?",
      secenekler: ["Müşteriyle iş birliği", "Değişime karşılık vermek", "Bireyler ve etkileşimler", "Çalışan yazılım"],
      aciklama: "\"Müşteriyle iş birliğini sözleşme pazarlığına\" tercih ederiz. Sözleşme yine vardır; ama ilişki \"madde madde hak arama\" yerine birlikte doğru ürünü bulma üzerine kurulur.",
      etiket: "rehber",
    },
    {
      ad: "degisim",
      soru: "Manifesto'nun dördüncü değer cümlesinde \"bir planı takip etmek\" neyin arkasında kalır?",
      secenekler: ["Değişime karşılık vermek", "Müşteriyle iş birliği", "Çalışan yazılım", "Süreçler ve araçlar"],
      aciklama: "\"Değişime karşılık vermeyi bir planı takip etmeye\" tercih ederiz. Plan yapılır; ama yeni bilgi geldiğinde planı korumak için gerçeği görmezden gelmek yerine plan değiştirilir.",
      etiket: "rehber",
    },
    {
      ad: "deger-sayisi",
      soru: "Agile Manifesto kaç değer cümlesi ve kaç ilkeden oluşur? (İlke sayısını yaz.)",
      sayi: [12],
      aciklama: "Manifesto **4 değer cümlesi** ve onu açıklayan **12 ilkeden** oluşur. İlkeler Manifesto'nun ikinci sayfasında \"Agile Manifesto'nun arkasındaki ilkeler\" başlığıyla yer alır.",
      etiket: "rehber",
    },
    {
      ad: "terazi-arac",
      zorluk: 2,
      soru: "Squad yeni bir proje yönetim aracına geçiyor. Tech Lead Can, \"Önce araçtaki bütün alanları ve iş akışlarını tanımlayalım, sonra kim kiminle konuşur ona bakarız\" diyor. Bu yaklaşım Manifesto'nun hangi değeriyle en çok çelişir?",
      secenekler: [
        "Bireyler ve etkileşimler",
        "Çalışan yazılım",
        "Müşteriyle iş birliği",
        "Değişime karşılık vermek",
      ],
      aciklama: "Önce aracı ve süreci tasarlayıp insanların etkileşimini ona uydurmak, \"süreçler ve araçlar\"ı **bireyler ve etkileşimlerin** önüne koymaktır. Agile yaklaşım önce takımın nasıl çalıştığına bakar, aracı ona hizmet edecek kadar kurar.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u2-sagdakiler", [
    {
      ad: "sag-deger",
      soru: "Manifesto'daki \"sağdaki maddelerin de değeri olmakla birlikte, soldakilere daha çok değer veririz\" cümlesi ne anlatır?",
      secenekler: [
        "Sağdakiler gereklidir ama öncelik soldakilerdedir",
        "Sağdaki maddeler tamamen bırakılmalıdır",
        "Sağdaki ve soldaki maddeler eşit önemdedir",
        "Sağdaki maddeler yalnızca büyük şirketler içindir",
      ],
      aciklama: "Manifesto bir tercih sıralamasıdır, yasak listesi değil. Süreç, araç, dokümantasyon, sözleşme ve plan **değerlidir**; çatıştıklarında soldaki madde öne geçer.",
      etiket: "rehber",
    },
    {
      ad: "dokuman-yok",
      dy: false,
      soru: "Agile Manifesto'ya göre agile bir takım dokümantasyon yazmaz.",
      aciklama: "Yanlış. Manifesto çalışan yazılımı **kapsamlı** dokümantasyona tercih eder ve sağdaki maddelerin de değeri olduğunu açıkça söyler. Yeterli ve işe yarayan dokümantasyon (API belgesi, mimari karar kaydı, kullanım kılavuzu) yazılır.",
      etiket: "rehber",
    },
    {
      ad: "plan-yok",
      dy: false,
      soru: "Manifesto'da \"değişime karşılık vermek\" değeri olduğu için agile takımlar plan yapmaz.",
      aciklama: "Yanlış. Plan da değerlidir; agile takımlar sık plan yapar (Scrum'da her Sprint Planning, her Daily Scrum). Fark, planın değişmez bir sözleşme değil, yeni bilgiyle güncellenen bir araç olmasıdır.",
    },
  ]),
  ...sorular(U, "u2-ilke-teslim", [
    {
      ad: "en-yuksek-oncelik",
      soru: "Manifesto'nun ilk ilkesine göre en yüksek öncelik nedir?",
      secenekler: [
        "Değerli yazılımı erken ve sürekli teslim etmek",
        "Bütün gereksinimleri baştan eksiksiz toplamak",
        "Takımın her sprintte daha fazla iş bitirmesi",
        "Sözleşmedeki tarihlere eksiksiz uymak",
      ],
      aciklama: "İlk ilke: en yüksek önceliğimiz, **değerli yazılımı erken ve sürekli teslim ederek** müşteriyi memnun etmektir.",
      etiket: "rehber",
    },
    {
      ad: "gec-degisiklik",
      zorluk: 2,
      soru: "İkinci ilke, geliştirmenin geç aşamalarında gelen gereksinim değişiklikleri için ne der?",
      secenekler: [
        "Geç de olsa memnuniyetle karşılanır",
        "Bir sonraki projeye ertelenir",
        "Ancak sözleşme değişirse kabul edilir",
        "Takımın onayı olmadan kabul edilemez",
      ],
      aciklama: "İkinci ilke: değişen gereksinimleri, geliştirmenin geç aşamalarında bile **memnuniyetle karşılarız**; agile süreçler değişimi müşterinin rekabet avantajı için kullanır. Scrum'da bu karşılama Product Backlog üzerinden yapılır; çalışan Sprint'in hedefi korunur (6. ünite).",
      etiket: "rehber",
    },
    {
      ad: "teslim-araligi",
      soru: "Üçüncü ilke çalışan yazılımın ne sıklıkta teslim edilmesini önerir?",
      secenekler: [
        "Birkaç haftadan birkaç aya, kısa olanı tercih ederek",
        "Her gün en az bir kez",
        "Yılda bir, büyük sürümlerle",
        "Müşteri istediğinde, belirli bir aralık olmadan",
      ],
      aciklama: "Üçüncü ilke: çalışan yazılımı **birkaç haftadan birkaç aya** uzanan aralıklarla, **kısa olanı tercih ederek** sık sık teslim edin. Bugün sürekli teslim (continuous delivery) yapan takımlar bunu günlere hatta saatlere indirir.",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u2-ilke-insan", [
    {
      ad: "her-gun",
      soru: "Dördüncü ilkeye göre iş tarafındaki kişiler ve geliştiriciler ne sıklıkla birlikte çalışmalıdır?",
      secenekler: ["Proje boyunca her gün", "Yalnızca proje başında ve sonunda", "Ayda bir toplantıda", "Yalnızca sorun çıktığında"],
      aciklama: "Dördüncü ilke: iş insanları ve geliştiriciler proje boyunca **her gün** birlikte çalışmalıdır. Kampüs Yemekhanesi'nde Nurten Hanım'ın ya da Elif'in squad'a her gün ulaşılabilir olması bu ilkenin uygulamasıdır.",
      etiket: "rehber",
    },
    {
      ad: "motive",
      zorluk: 2,
      soru: "Beşinci ilke projelerin neyin etrafında kurulmasını önerir?",
      secenekler: [
        "Motive bireylerin; onlara ortam, destek ve güven verilerek",
        "Ayrıntılı iş tanımlarının; herkes kendi tanımına göre çalışarak",
        "Sıkı denetimin; her iş saatlik raporlanarak",
        "En deneyimli uzmanın; diğerleri onun kararına uyarak",
      ],
      aciklama: "Beşinci ilke: projeleri **motive bireylerin** etrafında kurun; ihtiyaç duydukları ortamı ve desteği verin, işi bitireceklerine **güvenin**.",
      etiket: "rehber",
    },
    {
      ad: "yuz-yuze",
      zorluk: 2,
      soru: "Altıncı ilkeye göre bir geliştirme takımına ve takım içinde bilgi aktarmanın en verimli ve etkili yolu hangisidir?",
      secenekler: ["Yüz yüze konuşma", "Ayrıntılı e-posta", "Proje yönetim aracındaki yorumlar", "Haftalık durum raporu"],
      aciklama: "Altıncı ilke **yüz yüze konuşmayı** en verimli yol sayar. Uzaktan çalışan takımlar bunu görüntülü görüşmeyle yaklaşık olarak sağlar; önemli olan yazılı kanalların konuşmanın yerine geçmemesidir.",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u2-ilke-ilerleme", [
    {
      ad: "ilerleme-olcusu",
      soru: "Yedinci ilkeye göre ilerlemenin birincil ölçüsü nedir?",
      secenekler: ["Çalışan yazılım", "Biten görev sayısı", "Harcanan saat", "Tamamlanan belge sayısı"],
      aciklama: "Yedinci ilke: **çalışan yazılım** ilerlemenin birincil ölçüsüdür. \"Yüzde 90 bitti\" diyen ama hiçbir parçası kullanılamayan bir iş, agile gözüyle henüz değer üretmemiştir.",
      etiket: "rehber",
    },
    {
      ad: "surdurulebilir",
      zorluk: 2,
      soru: "Squad son üç sprinttir hafta sonları da çalışarak hedefleri tutturuyor ve yönetim bunu \"bağlılık\" diye övüyor. Bu durum en çok hangi ilkeyle çelişir?",
      secenekler: [
        "Sürdürülebilir geliştirme ve sabit hız",
        "Sık teslim",
        "Yüz yüze iletişim",
        "Müşteriyle her gün çalışma",
      ],
      aciklama: "Sekizinci ilke: agile süreçler **sürdürülebilir geliştirmeyi** destekler; sponsorlar, geliştiriciler ve kullanıcılar **sabit bir hızı süresiz** koruyabilmelidir. Fazla mesaiyle tutturulan hedef, yorgunluk ve hata olarak geri döner ve gerçek kapasiteyi gizler.",
      etiket: "senaryo",
    },
    {
      ad: "teknik-mukemmellik",
      soru: "Dokuzuncu ilkeye göre çevikliği ne artırır?",
      secenekler: [
        "Teknik mükemmelliğe ve iyi tasarıma sürekli özen",
        "Daha uzun sprintler ve daha az toplantı",
        "Daha çok yönetim katmanı ve onay adımı",
        "Test aşamasını en sona bırakıp hızlanmak",
      ],
      aciklama: "Dokuzuncu ilke: **teknik mükemmelliğe ve iyi tasarıma sürekli özen** çevikliği artırır. Kötü kod değişimi pahalılaştırır; değişimi ucuz tutan şey temiz tasarım, test ve sürekli entegrasyondur (11. ünite).",
      etiket: "rehber",
    },
    {
      ad: "sadelik",
      zorluk: 2,
      soru: "Onuncu ilke sadeliği nasıl tanımlar?",
      secenekler: [
        "Yapılmayan işin miktarını en çoklama sanatı",
        "Kodun olabildiğince az satırla yazılması",
        "Takımın olabildiğince az kişiyle kurulması",
        "Toplantıların ve belgelerin kaldırılması",
      ],
      aciklama: "Onuncu ilke: **sadelik, yapılmayan işin miktarını en çoklama sanatıdır** ve vazgeçilmezdir. Kimsenin kullanmayacağı bir özelliği yapmamak, en verimli iştir.",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u2-ilke-takim", [
    {
      ad: "kendini-orgutleyen",
      soru: "On birinci ilkeye göre en iyi mimariler, gereksinimler ve tasarımlar nereden ortaya çıkar?",
      secenekler: ["Kendi kendini örgütleyen takımlardan", "Mimari kuruldan", "Müşterinin teknik ekibinden", "Proje başındaki analiz belgesinden"],
      aciklama: "On birinci ilke: en iyi mimariler, gereksinimler ve tasarımlar **kendi kendini örgütleyen takımlardan** doğar. Scrum Rehberi 2020 bunu bir adım ileri götürüp \"kendi kendini yöneten\" takımdan söz eder (4. ünite).",
      etiket: "rehber",
    },
    {
      ad: "yansitma",
      soru: "On ikinci ilke takımın düzenli aralıklarla ne yapmasını ister?",
      secenekler: [
        "Nasıl daha etkili olacağını düşünüp davranışını ayarlamasını",
        "Bütün proje belgelerini baştan gözden geçirip yeniden yazmasını",
        "Yöneticisine kişi kişi ayrıntılı performans raporu vermesini",
        "Gelecek yılın bütün işlerini ayrıntılı olarak planlamasını",
      ],
      aciklama: "On ikinci ilke: takım düzenli aralıklarla **nasıl daha etkili olabileceği üzerine düşünür** ve davranışını buna göre ayarlar. Scrum'daki karşılığı Sprint Retrospective'dir (7. ünite).",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u2-yanilgilar", [
    {
      ad: "agile-scrum",
      dy: false,
      soru: "Agile ve Scrum aynı şeyin iki adıdır.",
      aciklama: "Yanlış. Agile bir değerler ve ilkeler bütünüdür; Scrum bu değerlerle uyumlu **çerçevelerden biridir**. Kanban, XP, Crystal ve başkaları da agile sayılır. Scrum Rehberi'nde \"agile\" kelimesi bile geçmez.",
    },
    {
      ad: "agile-hizli",
      zorluk: 2,
      soru: "Yönetim, \"Agile'a geçersek aynı işi yarı sürede bitiririz\" diyor. Bu beklentinin sorunu nedir?",
      secenekler: [
        "Agile'ın vaadi hız değil, belirsizlikte doğru şeyi erken öğrenmektir",
        "Agile ancak en az iki yıl sonra hızlandırır",
        "Agile yalnızca küçük projelerde işe yarar",
        "Agile'da süre ölçülmez, bu yüzden karşılaştırılamaz",
      ],
      aciklama: "Agile aynı kapsamı sihirli biçimde hızlandırmaz. Kazanç, değerli olanın **erken** teslim edilmesi, yanlış yönün **erken** fark edilmesi ve gereksiz işin hiç yapılmamasıdır. Hız artışı görülürse bu çoğunlukla daha az israfın sonucudur.",
      etiket: "sahada",
    },
    {
      ad: "agile-ilke-mi",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi Agile Manifesto'nun 12 ilkesinden biri **değildir**?",
      secenekler: [
        "Her ekip iki haftalık sprintlerle çalışmalıdır",
        "Çalışan yazılım ilerlemenin birincil ölçüsüdür",
        "Sadelik vazgeçilmezdir",
        "Takım düzenli aralıklarla nasıl daha etkili olacağını düşünür",
      ],
      aciklama: "Manifesto belirli bir döngü süresi (iki hafta), toplantı ya da rol dayatmaz; yalnızca kısa aralıkları tercih eder. \"Sprint\" kelimesi Scrum'dan gelir ve Manifesto'da geçmez.",
      etiket: "rehber",
    },
  ]),
];
