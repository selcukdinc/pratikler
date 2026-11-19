// 11. ünite (Refinement ve Hazır Olma): refinement'ın Rehber'deki yeri, oturumun akışı,
// Definition of Ready ve kapı bekçisi tuzağı, story onay akışları, araçtaki durumlar,
// backlog'u temizlemek.
import { sorular, type Soru } from "./yardimci.ts";

const U = 11;

export const unite11: Soru[] = [
  ...sorular(U, "u11-refinement", [
    {
      ad: "tanim",
      soru: "Scrum Rehberi'ne göre Product Backlog refinement nedir?",
      secenekler: [
        "Öğeleri bölüp ayrıntılandırma; açıklama, sıra ve büyüklük ekleme etkinliği",
        "Sprint'in sonunda yapılan, backlog'un onaylandığı resmî bir etkinlik",
        "Product Owner'ın tek başına yaptığı haftalık sıralama toplantısı",
        "Developers'ın Sprint Backlog'daki görevleri saate böldüğü toplantı",
      ],
      aciklama: "Rehber: refinement, öğeleri daha küçük ve daha kesin öğelere bölme ve daha ayrıntılı tanımlama eylemidir; açıklama, sıra ve büyüklük gibi ayrıntılar eklenir. Süren bir etkinliktir, Scrum etkinliklerinden biri değildir.",
      etiket: "kaynak",
    },
    {
      ad: "etkinlik-mi",
      dy: false,
      soru: "Refinement, Scrum Rehberi'ndeki beş Scrum etkinliğinden biridir.",
      aciklama: "Yanlış. Beş etkinlik Sprint, Sprint Planning, Daily Scrum, Sprint Review ve Sprint Retrospective'dir. Refinement süren bir faaliyettir; takımlar onu düzenli bir toplantıya bağlayabilir ama Rehber bunu şart koşmaz.",
      etiket: "kaynak",
    },
    {
      ad: "yuzde-on",
      zorluk: 3,
      soru: "Eski Scrum Rehberi sürümleri refinement'a ayrılan kapasite için hangi ölçüyü veriyordu?",
      secenekler: [
        "Genellikle kapasitenin en fazla %10'u",
        "Her Sprint'in tam olarak bir iş günü",
        "Product Owner'ın zamanının yarısı",
        "Sprint Planning süresinin iki katı",
      ],
      aciklama: "2013-2017 sürümleri \"genellikle kapasitenin %10'undan fazlasını almaz\" diyordu. 2020 sürümünde bu sayı yok; ama sahada hâlâ iyi bir başlangıç ölçüsü olarak kullanılır.",
      etiket: "kaynak",
    },
    {
      ad: "hazir-rehber",
      zorluk: 2,
      soru: "Rehber'e göre bir öğe ne zaman Sprint Planning'de seçilmeye hazır sayılır?",
      secenekler: [
        "Scrum Takımı onu bir Sprint içinde Done yapabilecekse",
        "Teknik Liderlik onayladığında",
        "Definition of Ready'nin bütün maddeleri işaretlendiğinde",
        "Product Owner kabul kriterlerini tek başına yazdığında",
      ],
      aciklama: "Rehber: bir Sprint içinde Done yapılabilecek öğeler Sprint Planning'de seçilmeye hazır sayılır. Definition of Ready ve onay akışları Rehber'de yoktur; takımların ekleyebileceği pratiklerdir.",
      etiket: "kaynak",
    },
  ]),
  ...sorular(U, "u11-oturum", [
    {
      ad: "kac-sprint",
      soru: "Refinement oturumunda en çok hangi öğelere zaman ayırmak gerekir?",
      secenekler: [
        "Sıranın üstündeki, bir iki Sprint içinde yapılacak öğelere",
        "Backlog'daki bütün öğelere eşit ölçüde ve sırayla",
        "En alttaki, aylar sonra yapılacak öğelere",
        "Yalnızca hata öğelerine",
      ],
      aciklama: "Buzdağı (1. ünite): üstteki öğeler ince ve ayrıntılı, alttakiler kaba kalır. Aylar sonra yapılacak bir öğeyi bugün ayrıntılandırmak, değişince boşa gider.",
    },
    {
      ad: "kimler-katilir",
      soru: "Refinement'a kimlerin katılması en iyi sonucu verir?",
      secenekler: [
        "Product Owner ve işi yapacak Developers",
        "Yalnızca Product Owner ve Scrum Master",
        "Yalnızca Tech Lead ve Teknik Liderlik",
        "Yalnızca test uzmanları",
      ],
      aciklama: "Refinement ortak bir anlayış üretir; işi yapacaklar konuşmada olmazsa anlayış onlara ulaşmaz. Bir alan bilgisi gerekiyorsa paydaş davet edilir (Three Amigos, 6. ünite).",
    },
    {
      ad: "akis",
      zorluk: 2,
      soru: "İyi yürüyen bir refinement oturumunda bir story için tipik sıra hangisidir?",
      secenekler: [
        "Neden ve kim → kabul kriterleri → gerekirse bölme → tahmin",
        "Tahmin → görevlere bölme → saat yazma → Teknik Liderlik onayı",
        "Onay → tahmin → kabul kriteri → neden",
        "Görev dağıtımı → kod incelemesi → test",
      ],
      aciklama: "Önce ihtiyaç anlaşılır, sonra ne zaman biteceği netleşir; büyükse bölünür, en son tahmin edilir. Görevlere bölmek Sprint Planning'in işidir.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u11-dor", [
    {
      ad: "dor-nedir",
      soru: "Definition of Ready (DoR) nedir?",
      secenekler: [
        "Bir öğenin Sprint'e alınmadan önce sağlaması beklenen koşulların listesi",
        "Increment'in yayına çıkabilmesi için gereken kalite ölçütleri",
        "Sprint Goal'e ulaşıldığını gösteren ölçütler",
        "Product Owner'ın her story için yazdığı kabul kriterleri",
      ],
      aciklama: "DoR, \"bu öğe Sprint'e girmeye hazır mı?\" sorusunun takım içi cevabıdır: ör. INVEST'e uyuyor, kabul kriterleri yazılmış, tahmin edilmiş, dış bağımlılık yok. DoD ise bir öğenin bittiğini söyler.",
    },
    {
      ad: "dor-rehber",
      dy: false,
      soru: "Definition of Ready, Definition of Done gibi Scrum Rehberi'nin bir taahhüdüdür.",
      aciklama: "Yanlış. Rehber'deki üç taahhüt Product Goal, Sprint Goal ve Definition of Done'dır. DoR Rehber'de yoktur; birçok takım faydalı bulur ama zorunlu değildir.",
      etiket: "kaynak",
    },
    {
      ad: "dor-madde",
      zorluk: 2,
      soru: "Hangisi bir Definition of Ready maddesi olarak en uygundur?",
      secenekler: [
        "Kabul kriterleri yazıldı ve takım üyeleri onları anladı",
        "Kod incelendi ve otomatik testler geçti",
        "Story yayına alındı ve izleniyor",
        "Product Owner Sprint Review'da story'yi kabul etti",
      ],
      aciklama: "Diğer üçü işin bittiğine dair koşullardır (DoD ya da kabul). DoR işin başlamaya hazır olduğunu söyler.",
    },
  ]),
  ...sorular(U, "u11-dor-tuzak", [
    {
      ad: "kapi",
      soru: "DoR'un \"kapı bekçisine\" dönüşmesi ne demektir?",
      secenekler: [
        "Her madde işaretlenmeden hiçbir öğenin Sprint'e alınmaması",
        "DoR'un Sprint Review'da Product Owner'a sunulması",
        "DoR maddelerinin Sprint Retrospective'de gözden geçirilmesi",
        "DoR'un kabul kriterlerinin içine yazılması",
      ],
      aciklama: "Katı bir DoR şelaleye geri dönüştür: her şey önceden tamamen belirlensin istenir, öğeler onay kuyruğunda bekler, takım belirsizlikle Sprint içinde çalışmayı unutur. INVEST'teki aynı tuzak (5. ünite).",
      etiket: "sahada",
    },
    {
      ad: "esnek",
      zorluk: 2,
      soru: "Squad'ın DoR'u \"bütün kabul kriterleri yazılmış olmalı\" diyor. Elif'in Sprint Goal için kritik bir story'sinin bir kriteri hâlâ belirsiz. En dengeli yaklaşım hangisidir?",
      secenekler: [
        "Story'yi alıp belirsiz kısmı Sprint'in ilk günlerinde netleştirmek ya da o kısmı bölmek",
        "Story'yi hiçbir koşulda Sprint'e almamak; DoR bir kuraldır",
        "Kriteri sonra yazmak üzere DoR'u bu Sprint için tamamen kaldırmak",
        "Teknik Liderlik onay verene kadar Sprint Planning'i ertelemek",
      ],
      aciklama: "DoR bir rehberdir, sözleşme değildir. Belirsizlik küçükse Sprint içinde çözülebilir; büyükse belirsiz kısım ayrı bir story'ye bölünür. Amaç işi akıtmaktır.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u11-onay", [
    {
      ad: "onay-fayda",
      soru: "Product Owner'ın yazdığı story'lerin bir teknik liderlik grubu tarafından onaylandığı akışın en büyük faydası ne olabilir?",
      secenekler: [
        "Mimari riskler ve ortak bağımlılıklar erken görülür",
        "Product Owner sıralama kararından hesap vermek zorunda kalmaz",
        "Developers refinement'a katılmak zorunda kalmaz",
        "Story'ler hiç bölünmeden Sprint'e alınabilir",
      ],
      aciklama: "Birden çok takımı etkileyen mimari kararlar ve ortak servisler bir yerde görülmeli. Onay akışı bunu sağlayabilir; ama sıranın sorumluluğunu Product Owner'dan almaz.",
    },
    {
      ad: "onay-risk",
      soru: "Onay akışının en sık yarattığı sorun hangisidir?",
      secenekler: [
        "Story'ler onay kuyruğunda bekler, geri bildirim gecikir",
        "Story'ler fazla küçük bölünür",
        "Product Owner backlog'u sıralayamaz hâle gelir",
        "Kabul kriterleri gereksiz hâle gelir",
      ],
      aciklama: "Haftada bir toplanan bir kurul, her story'nin iki haftaya kadar beklemesi demektir. Çare: onayı küçük adımlara bölmek, yalnızca riskli story'leri onaya götürmek ya da onaylayanı refinement'a çağırmak.",
      etiket: "sahada",
    },
    {
      ad: "onay-rehber",
      zorluk: 2,
      dy: true,
      soru: "Scrum Rehberi'nde story onay akışı tanımlanmaz; böyle bir akış eklenirse Product Owner'ın backlog'dan hesap vermesini ortadan kaldırmamalıdır.",
      aciklama: "Doğru. Rehber, Product Owner'ın Product Backlog yönetiminden hesap verdiğini söyler; bu işi başkasına yaptırabilir ama hesap verebilirlik onda kalır. Onay akışı bir girdi olabilir, karar yeri değil.",
      etiket: "kaynak",
    },
    {
      ad: "geri-donen",
      soru: "Teknik Liderlik'ten dönen story'lerin çoğu aynı nedenle dönüyor: \"kabul kriteri test edilemez\". Elif ne yapmalı?",
      secenekler: [
        "Kabul kriterlerini refinement'ta test uzmanıyla birlikte yazmak",
        "Kabul kriterlerini tamamen kaldırıp story'yi kısa göndermek",
        "Onay akışını atlayıp story'leri doğrudan Sprint'e almak",
        "Her story'ye aynı genel kriteri kopyalamak",
      ],
      aciklama: "Tekrar eden geri dönüş bir süreç sinyalidir. Deniz'in \"bunu nasıl test ederim?\" sorusu story onaya gitmeden sorulursa dönüş azalır (Three Amigos, 6. ünite).",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u11-durumlar", [
    {
      ad: "durum-sirasi",
      soru: "Bir araçta story'nin backlog tarafındaki durumları için en mantıklı sıra hangisidir?",
      secenekler: [
        "Yeni → İnceleniyor → Hazır → Sprint'te",
        "Hazır → Yeni → Sprint'te → İnceleniyor",
        "Sprint'te → Hazır → Yeni → Kapalı",
        "Yeni → Sprint'te → Hazır → İnceleniyor",
      ],
      aciklama: "Durumlar refinement'ın ilerlemesini gösterir: yeni gelen bir fikir, konuşulan bir story, Sprint'e hazır bir story. Durum sayısı az olmalıdır; her durum bir bekleme yeri olabilir.",
    },
    {
      ad: "cok-durum",
      zorluk: 2,
      soru: "Squad'ın aracında bir story Sprint'e girene kadar dokuz durumdan geçiyor. Bu neyi gösterir?",
      secenekler: [
        "Bekleme ve devir teslim çok; akış yavaşlar",
        "Süreç olgun; her durum kaliteyi artırır",
        "Story'ler fazla küçük bölünmüş",
        "Takımın hızı yüksek",
      ],
      aciklama: "Her durum değişikliği çoğu zaman başka bir kişiye devir ve bir bekleme demektir. Durumları sadeleştirmek, onay ve refinement'ı aynı konuşmada birleştirmek akışı hızlandırır.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u11-temizlik", [
    {
      ad: "eski-oge",
      soru: "Backlog'da iki yıldır dokunulmamış 140 öğe var. En iyi yaklaşım hangisidir?",
      secenekler: [
        "Hedefe katkısı olmayanları kapatmak; önemliyse geri gelir",
        "Hepsini bir sonraki Sprint'e alıp bitirmeye çalışmak",
        "Hepsine düşük öncelik etiketi koyup bırakmak",
        "Hepsini ayrı bir \"bir gün\" listesine taşımak",
      ],
      aciklama: "Backlog mezarlığı (1. ünite) gerçek sırayı gizler ve her refinement'ı yavaşlatır. Önemli bir fikir kapandıysa paydaş onu yeniden getirir; o zaman da güncel hâliyle gelir.",
      etiket: "senaryo",
    },
    {
      ad: "ne-siklikla",
      soru: "Backlog temizliği için hangi alışkanlık en çok işe yarar?",
      secenekler: [
        "Her refinement'ta birkaç dakika alttaki öğelere bakmak",
        "Yılda bir kez bütün backlog'u silip yeniden yazmak",
        "Yalnızca yeni bir Product Owner geldiğinde temizlemek",
        "Hiç silmemek; her öğe bir gün işe yarar",
      ],
      aciklama: "Küçük ve düzenli temizlik, birikip bir gün dev bir temizlik toplantısına dönüşmekten iyidir.",
      etiket: "sahada",
    },
  ]),
];
