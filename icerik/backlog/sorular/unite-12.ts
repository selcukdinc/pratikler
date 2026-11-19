// 12. ünite (Sürüm Planlama ve Yol Haritası): MVP, MMF ve MMP, story map'ten sürüm
// planına, burnup ile sürüm tahmini, tahmin aralığı, Now-Next-Later, sonuç odaklı
// yol haritası ve çok takımlı backlog'a köprü.
import { sorular, type Soru } from "./yardimci.ts";

const U = 12;

export const unite12: Soru[] = [
  ...sorular(U, "u12-mvp", [
    {
      ad: "mvp-nedir",
      soru: "Eric Ries'ın tanımıyla MVP nedir?",
      secenekler: [
        "En az çabayla en çok doğrulanmış öğrenmeyi sağlayan ürün sürümü",
        "Bütün temel özellikleri tamamlanmış ilk ticari sürüm",
        "Hatası olmayan, en kararlı ürün sürümü",
        "Yalnızca yöneticilere gösterilen tasarım taslağı",
      ],
      aciklama: "*The Lean Startup* (2011): MVP bir öğrenme aracıdır. Amaç bir varsayımı (öğrenciler önceden sipariş verir mi?) en ucuz yoldan sınamaktır; ürünün ilk küçük sürümü olmak zorunda bile değildir.",
      etiket: "kaynak",
    },
    {
      ad: "mmf",
      zorluk: 2,
      soru: "Minimum Marketable Feature (MMF) nedir?",
      secenekler: [
        "Tek başına değer veren, yayınlanabilen en küçük özellik",
        "Bir varsayımı sınamak için yapılan en ucuz deney",
        "Bir epic'in bütün story'lerinin toplamı",
        "Bir story'nin en küçük teknik görevi",
      ],
      aciklama: "MMF fikri Mark Denne ve Jane Cleland-Huang'ın *Software by Numbers* (2003) kitabından gelir: değeri parçalar hâlinde erken almak. MVP öğrenmeye, MMF değere odaklanır.",
      etiket: "kaynak",
    },
    {
      ad: "mvp-mmp",
      soru: "Squad'ın önceden sipariş fikri için yaptığı ilk deneme şu: bir hafta boyunca öğrenciler sipariş formunu dolduruyor, görevli siparişleri elle hazırlıyor. Bu hangisidir?",
      secenekler: [
        "Bir MVP: varsayımı en ucuz yoldan sınıyor",
        "Bir MMP: pazara çıkacak ilk tam ürün",
        "Bir MMF: yayınlanmış bir özellik",
        "Bir spike: teknik bir araştırma",
      ],
      aciklama: "Arkasında yazılım olmayan, elle yürütülen bu deneme bir MVP'dir: \"öğrenciler önceden sipariş verir mi?\" sorusunu cevaplar. Cevap evetse MMF'ler ve MMP gelir.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u12-surum", [
    {
      ad: "map-surum",
      soru: "Story map'te sürüm planı nasıl çıkarılır?",
      secenekler: [
        "Omurganın altına yatay çizgiler çekilir; her çizginin üstü bir sürümdür",
        "Her etkinlik ayrı bir sürüm olur",
        "Story'ler puanlarına göre sıralanıp ilk on tanesi seçilir",
        "Sürüm planı story map'ten çıkarılamaz; ayrı bir belge gerekir",
      ],
      aciklama: "Jeff Patton'ın yöntemi: ilk çizginin üstünde her etkinlikten en az bir ince kart kalır (yürüyen iskelet). Böylece her sürüm uçtan uca çalışır (3. ünite).",
    },
    {
      ad: "ilk-surum",
      zorluk: 2,
      soru: "İlk sürüm çizgisinin altında \"Teslim al\" adımından hiç kart kalmadı. Sorun nedir?",
      secenekler: [
        "Kullanıcı yolculuğu yarım kalır; sürüm kullanılamaz",
        "Sürüm çok küçüktür; daha çok kart eklenmelidir",
        "Sorun yoktur; teslim adımı sonraki sürüme kalabilir",
        "Story map'te adım sayısı azaltılmalıdır",
      ],
      aciklama: "Sipariş verip teslim alamayan öğrenci bir şey kazanmaz. İlk sürüm her adımın en ince hâlini içermelidir; derinlik sonraki sürümlere kalır.",
    },
  ]),
  ...sorular(U, "u12-burnup", [
    {
      ad: "burnup-fark",
      soru: "Burnup grafiğinin burndown'a göre en büyük üstünlüğü nedir?",
      secenekler: [
        "Kapsam değişikliğini ayrı bir çizgide gösterir",
        "Sprint içindeki görev saatlerini gösterir",
        "Takımlar arası hız karşılaştırmasını kolaylaştırır",
        "Yalnızca biten işi değil, değeri de gösterir",
      ],
      aciklama: "Burndown'da kapsam artınca çizgi yükselir ve takım geriliyormuş gibi görünür. Burnup'ta biten iş ve toplam kapsam iki ayrı çizgidir; iki çizginin kesiştiği yer sürüm tahminidir.",
    },
    {
      ad: "burnup-hesap",
      soru: "Sürüm 1'in kapsamı 120 puan; şimdiye kadar 48 puan bitti. Takımın hızı Sprint başına 24 puan. Kapsam değişmezse kaç Sprint daha gerekir?",
      sayi: [3],
      aciklama: "Kalan 120 − 48 = 72 puan. 72 / 24 = 3 Sprint.",
      etiket: "hesap",
    },
    {
      ad: "kapsam-artis",
      zorluk: 2,
      soru: "Aynı sürümde her Sprint kapsam 6 puan artıyor. Hız 24, kalan 72 puan. Kaç Sprint daha gerekir?",
      sayi: [4],
      aciklama: "Her Sprint net 24 − 6 = 18 puan yaklaşılır. 72 / 18 = 4 Sprint. Burnup bu artışı görünür kılar: kapsam çizgisi yükselirken biten iş çizgisi onu daha geç yakalar.",
      etiket: "hesap",
    },
  ]),
  ...sorular(U, "u12-aralik", [
    {
      ad: "neden-aralik",
      soru: "Sürüm tarihi için tek bir tarih yerine aralık vermek neden daha dürüsttür?",
      secenekler: [
        "Hız Sprint'ten Sprint'e değişir; tek tarih bunu gizler",
        "Aralık vermek takımın daha az çalışmasını sağlar",
        "Rehber tarih vermeyi yasaklar",
        "Aralık vermek kapsam değişikliğini engeller",
      ],
      aciklama: "Son Sprint'lerin hızı 18 ile 28 arasında değişiyorsa, kalan iş için iyimser ve kötümser hızla iki tarih hesaplanır. \"4 ile 6 Sprint arası\" demek, paydaşa belirsizliği de söyler.",
    },
    {
      ad: "aralik-hesap",
      zorluk: 2,
      soru: "Kalan 90 puan; son Sprint'lerde hız en düşük 18, en yüksek 30. Kötümser tahmin kaç Sprint'tir?",
      sayi: [5],
      aciklama: "Kötümser: 90 / 18 = 5 Sprint. İyimser: 90 / 30 = 3 Sprint. Tahmin \"3 ile 5 Sprint arası\".",
      etiket: "hesap",
    },
    {
      ad: "monte-carlo",
      zorluk: 3,
      soru: "Monte Carlo yöntemiyle yapılan sürüm tahmini nasıl çalışır?",
      secenekler: [
        "Geçmiş hızlardan rastgele seçerek binlerce gelecek denenir",
        "Takımın en yüksek hızı alınır ve kalan işe bölünür",
        "Her story için saat tahmini yapılıp toplanır",
        "Product Owner'ın istediği tarih alınır, kapsam ona göre kesilir",
      ],
      aciklama: "Agile ve Scrum pratiğinde gördüğün gibi: geçmiş Sprint'lerin hızlarından tekrar tekrar seçerek kalan işin kaç Sprint süreceği binlerce kez simüle edilir. \"%85 olasılıkla 5 Sprint içinde\" gibi bir cümle çıkar.",
    },
  ]),
  ...sorular(U, "u12-yol-haritasi", [
    {
      ad: "nnl",
      soru: "Now-Next-Later yol haritasının tarih çizelgesinden farkı nedir?",
      secenekler: [
        "Tarih yerine zaman ufku kullanır",
        "Yalnızca bitmiş işleri gösterir",
        "Her öğeye kesin bir teslim günü yazar",
        "Yalnızca teknik işleri gösterir",
      ],
      aciklama: "Janna Bastow'un önerdiği biçim: Şimdi (üzerinde çalışılanlar, en ayrıntılı), Sonra (sıradakiler), Daha sonra (fikirler, en kaba). Backlog buzdağının yol haritasındaki karşılığıdır.",
    },
    {
      ad: "later-ayrinti",
      zorluk: 2,
      soru: "\"Later\" sütunundaki öğeler için hangisi doğrudur?",
      secenekler: [
        "Kaba ve değişmeye açık kalır; ayrıntılandırmak erken yatırımdır",
        "Story'lere bölünmüş ve tahmin edilmiş olmalıdır",
        "Kesin tarihleri olmalıdır",
        "Teknik Liderlik onayından geçmiş olmalıdır",
      ],
      aciklama: "Uzak işler büyük olasılıkla değişir. Onlara bugün ayrıntı eklemek, öğrendikçe çöpe gidecek bir yatırımdır.",
    },
  ]),
  ...sorular(U, "u12-sonuc", [
    {
      ad: "sonuc-odak",
      soru: "Sonuç odaklı bir yol haritasında Q1 satırına hangisi yazılır?",
      secenekler: [
        "\"Öğle saatinde ortalama bekleme 20 dakikadan 10 dakikaya insin\"",
        "\"Önceden sipariş, bildirim ve doluluk göstergesi yayınlansın\"",
        "\"Sipariş servisi ve veri tabanı tabloları tamamlansın\"",
        "\"Takım 120 story point bitirsin\"",
      ],
      aciklama: "Özellik listesi bir çözümü taahhüt eder; sonuç bir hedefi. Hedef yazılınca takım daha iyi bir yol bulduğunda planı değiştirebilir (impact mapping, 3. ünite).",
      etiket: "senaryo",
    },
    {
      ad: "ozellik-taahhut",
      soru: "Özellik ve tarih dolu bir yol haritasının en büyük riski nedir?",
      secenekler: [
        "Paydaşlar söz sayar; yön değiştirmek zorlaşır",
        "Takım tahmin yapmayı tamamen bırakır",
        "Story'ler fazla küçük bölünür",
        "Backlog'da teknik işlere yer kalmaz",
      ],
      aciklama: "Yol haritası bir iletişim aracıdır, sözleşme değildir. Tarihli özellik listesi öğrenmeyi cezalandırır: yeni bilgiye göre değişmek \"sözü bozmak\" gibi görünür.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u12-kopru", [
    {
      ad: "tek-backlog",
      soru: "Rehber'e göre birden çok Scrum Takımı aynı ürün üzerinde çalışıyorsa kaç Product Backlog ve kaç Product Owner olur?",
      secenekler: [
        "Bir Product Backlog ve bir Product Owner",
        "Her takıma bir Product Backlog ve bir Product Owner",
        "Bir Product Backlog, her takıma bir Product Owner",
        "Her takıma bir Product Backlog, tek bir Product Owner",
      ],
      aciklama: "Rehber: aynı ürün üzerinde çalışan takımlar aynı Product Goal'i, aynı Product Backlog'u ve aynı Product Owner'ı paylaşır. Çok takımlı backlog'un nasıl yönetildiği Ölçekli Agile pratiğinin konusu.",
      etiket: "kaynak",
    },
    {
      ad: "pi-planning",
      zorluk: 2,
      soru: "SAFe'te birçok takımın feature'ları birlikte planladığı, genellikle iki günlük etkinliğin adı nedir?",
      cevap: ["PI Planning", "Program Increment Planning", "PI Planlama"],
      aciklama: "PI Planning, bir Agile Release Train'deki takımların önümüzdeki 8-12 haftalık Program Increment için feature'ları, bağımlılıkları ve hedefleri birlikte planladığı etkinliktir. Ölçekli Agile pratiğinde ayrıntılı ele alınır.",
      etiket: "kaynak",
    },
  ]),
];
