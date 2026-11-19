// 9. ünite (Tahmin): göreli ve mutlak tahmin, story point, Fibonacci ölçeği, Planning
// Poker, hızlı tahmin teknikleri, ideal gün, tahmin tuzakları ve #NoEstimates.
import { sorular, type Soru } from "./yardimci.ts";

const U = 9;

export const unite9: Soru[] = [
  ...sorular(U, "u9-goreli", [
    {
      ad: "goreli-nedir",
      soru: "Göreli tahmin (relative estimation) nedir?",
      secenekler: [
        "Bir işin büyüklüğünü başka işlere göre karşılaştırarak söylemek",
        "Bir işin kaç saat süreceğini tek tek görevlere bölerek hesaplamak",
        "Bir işin büyüklüğünü geçmiş projelerin bütçesinden çıkarmak",
        "Bir işin süresini Product Owner'ın istediği tarihe göre belirlemek",
      ],
      aciklama: "Göreli tahminde soru \"kaç saat?\" değil \"şuna göre ne kadar büyük?\" sorusudur. İnsanlar mutlak büyüklüğü kestirmekte zayıf, iki şeyi karşılaştırmakta güçlüdür: hangi binanın daha yüksek olduğunu kolayca söyleriz, kaç metre olduğunu söyleyemeyiz.",
    },
    {
      ad: "neden-goreli",
      zorluk: 2,
      soru: "Agile takımların saat yerine göreli tahmini sık tercih etmesinin temel nedeni hangisidir?",
      secenekler: [
        "Karşılaştırma, mutlak süre kestirmekten daha tutarlı sonuç verir",
        "Göreli tahmin yapılınca Sprint'te hiç taşma olmaz",
        "Saatle tahmin yapmak Scrum Rehberi'nde yasaklanmıştır",
        "Göreli tahminler yöneticilerin takımları kıyaslamasını kolaylaştırır",
      ],
      aciklama: "Rehber tahmin birimi söylemez; saatle tahmin yasak değildir. Göreli tahmin, insanların karşılaştırmada daha iyi olmasından yararlanır. Takımları kıyaslamak ise göreli puanların en bilinen kötüye kullanımıdır.",
      etiket: "sahada",
    },
    {
      ad: "referans",
      soru: "Squad yeni bir takım; göreli tahmine nasıl başlamalı?",
      secenekler: [
        "Herkesin iyi bildiği küçük bir story'yi referans alıp diğerlerini ona göre dizmek",
        "Her story'yi önce saatle tahmin edip saati puana çevirmek",
        "Başka bir takımın puan tablosunu olduğu gibi kullanmak",
        "İlk üç Sprint tahmin yapmayıp sonra her story'ye 5 puan vermek",
      ],
      aciklama: "Bilinen, küçük ve herkesin anladığı bir story (ör. \"menüye fotoğraf ekle\" = 2) referans olur. Sonraki story'ler \"bundan iki kat mı, yarısı mı?\" diye konumlanır. Başka takımın ölçeği bu takımın ortak anlayışını taşımaz.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u9-puan", [
    {
      ad: "puan-ne",
      soru: "Story point neyi anlatır?",
      secenekler: [
        "İşin büyüklüğünü: miktar, karmaşıklık ve belirsizlik birlikte",
        "Bir geliştiricinin o iş için harcayacağı saat sayısını",
        "Story'nin müşteri için ne kadar değerli olduğunu",
        "Story'nin backlog'daki öncelik sırasını",
      ],
      aciklama: "Story point göreli bir büyüklük ölçüsüdür: ne kadar iş, ne kadar karmaşık, ne kadar belirsiz. Değer ve sıra ayrı kavramlardır; Product Owner değeri, Developers büyüklüğü bilir.",
    },
    {
      ad: "kim-tahmin",
      soru: "Scrum Rehberi'ne göre Product Backlog öğelerinin büyüklüğünü kim belirler?",
      secenekler: [
        "İşi yapacak Developers",
        "Product Owner",
        "Scrum Master",
        "Teknik Liderlik",
      ],
      aciklama: "Rehber: işi yapacak Developers büyüklükten sorumludur. Product Owner, öğeyi anlamalarına ve ödünleşimleri seçmelerine yardım ederek tahmini etkileyebilir; ama sayıyı o vermez.",
      etiket: "kaynak",
    },
    {
      ad: "puan-saat",
      dy: false,
      soru: "Bir takımda 1 story point her zaman 4 saate eşittir; bu yüzden puanlar saate çevrilerek plan yapılmalıdır.",
      aciklama: "Yanlış. Puanı saate çevirmek göreli tahminin faydasını yok eder ve puanları saatlik iş taahhüdüne dönüştürür. Plan için takımın kendi geçmiş hızı (Sprint başına biten puan) kullanılır.",
      etiket: "sahada",
    },
    {
      ad: "jeffries",
      zorluk: 3,
      soru: "Story point fikrini ilk kullananlardan biri olduğunu söyleyen Ron Jeffries, bugün puanlar hakkında ne düşündüğünü nasıl özetlemiştir?",
      secenekler: [
        "Puanların zamanla kötüye kullanıldığını, buna üzüldüğünü söylemiştir",
        "Puanların her takımda saatle eş tutulması gerektiğini söylemiştir",
        "Puanların yöneticilerin takımları ölçmesi için icat edildiğini söylemiştir",
        "Puanların yalnızca hata öğeleri için kullanılmasını önermiştir",
      ],
      aciklama: "Jeffries, story point'leri belki kendisinin icat ettiğini, öyleyse şimdi üzgün olduğunu yazmıştır: puanlar karşılaştırma, baskı ve verimlilik ölçüsü olarak kullanılır hâle geldi. Asıl amaç takımın kendi planlamasıydı.",
      etiket: "kaynak",
    },
  ]),
  ...sorular(U, "u9-fibonacci", [
    {
      ad: "neden-fib",
      soru: "Tahmin kartlarında neden 1, 2, 3, 5, 8, 13 gibi aralığı büyüyen sayılar kullanılır?",
      secenekler: [
        "İş büyüdükçe belirsizlik de büyür; ince ayrım yapmak anlamsızlaşır",
        "Bu sayılar saate çevrilince tam iş günlerine denk gelir",
        "Scrum Rehberi yalnızca Fibonacci sayılarını kabul eder",
        "Büyük sayılar Product Owner'a işin daha değerli olduğunu gösterir",
      ],
      aciklama: "Büyük bir işin 20 mi 21 mi olduğunu kimse bilemez. Aralıkların büyümesi bu belirsizliği yansıtır ve takımı gereksiz kesinlik tartışmasından kurtarır.",
    },
    {
      ad: "degistirilmis",
      zorluk: 2,
      soru: "Mike Cohn'un yaygınlaştırdığı değiştirilmiş Fibonacci destesinde 13'ten sonraki kartlar hangileridir?",
      secenekler: ["20, 40, 100", "21, 34, 55", "16, 32, 64", "15, 25, 50"],
      aciklama: "Değiştirilmiş Fibonacci: 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100. Yüksek değerler yuvarlanmıştır; 21 ile 20 arasındaki fark yanlış bir kesinlik izlenimi vermesin diye. Destede ayrıca \"?\" ve çoğu zaman kahve kartı bulunur.",
      etiket: "kaynak",
    },
    {
      ad: "soru-karti",
      soru: "Planning Poker'da \"?\" kartını açan biri ne anlatmak ister?",
      secenekler: [
        "Story'yi tahmin edecek kadar anlamadığını",
        "Story'nin hiç yapılmaması gerektiğini",
        "Tahmini Product Owner'ın vermesi gerektiğini",
        "Story'nin büyüklüğünün sıfır olduğunu",
      ],
      aciklama: "\"?\" kartı bir sorudur: story yeterince anlaşılmamış. Çoğu zaman Product Owner'ın kısa bir açıklaması ya da bir kabul kriteri yeter; yetmiyorsa story Estimable değildir (5. ünite).",
    },
  ]),
  ...sorular(U, "u9-poker", [
    {
      ad: "poker-kim",
      zorluk: 2,
      soru: "Planning Poker'ı ilk kez tarif eden ve sonra yaygınlaştıran kişiler hangileridir?",
      secenekler: [
        "James Grenning tarif etti, Mike Cohn yaygınlaştırdı",
        "Ken Schwaber tarif etti, Jeff Sutherland yaygınlaştırdı",
        "Bill Wake tarif etti, Ron Jeffries yaygınlaştırdı",
        "Kent Beck tarif etti, Martin Fowler yaygınlaştırdı",
      ],
      aciklama: "James Grenning 2002'de bir makalede tarif etti; Mike Cohn *Agile Estimating and Planning* (2005) kitabıyla yaygınlaştırdı.",
      etiket: "kaynak",
    },
    {
      ad: "ayni-anda",
      soru: "Planning Poker'da kartların aynı anda açılmasının amacı nedir?",
      secenekler: [
        "İlk söylenen sayının herkesi etkilemesini önlemek",
        "Toplantıyı kısaltmak için tartışmayı tamamen kaldırmak",
        "Scrum Master'ın en doğru kartı seçmesini kolaylaştırmak",
        "En deneyimli kişinin tahmininin geçerli sayılmasını sağlamak",
      ],
      aciklama: "Önce konuşan, özellikle kıdemli biriyse, diğerlerini kendi sayısına çeker (çıpalama). Aynı anda açmak her kişinin kendi düşüncesini ortaya koymasını sağlar.",
    },
    {
      ad: "uclar",
      soru: "Kartlar 3 ile 13 arasında dağıldı. Sonraki adım ne olmalıdır?",
      secenekler: [
        "Uçtaki kartları açanlar gerekçe anlatır, sonra yeniden oylanır",
        "Kartların ortalaması alınır ve story'ye 8 puan yazılır",
        "En kıdemli geliştiricinin kartı geçerli sayılır",
        "Story atlanır, bir sonraki Sprint yeniden denenir",
      ],
      aciklama: "Farkın değeri tahminde değil gerekçededir: 13 açan bir riski, 3 açan bir kısayolu biliyor olabilir. Konuşma bu bilgiyi takıma yayar; ortalama almak onu gömer.",
      etiket: "sahada",
    },
    {
      ad: "kerem-13",
      soru: "\"Kartla bakiye yükleme\" story'sinde herkes 5 açtı, Kerem 13 açtı. Kerem ödeme sağlayıcının test ortamı olmadığını anlattı. En iyi devam hangisidir?",
      secenekler: [
        "Test yolunu öğrenmek için spike açıp sonra yeniden tahmin etmek",
        "Kerem'in kartını yok sayıp çoğunluğa uyarak story'ye 5 yazmak",
        "Kartların ortalamasını alıp story'yi 7 puanla Sprint'e almak",
        "Story'yi backlog'dan tamamen çıkarmak",
      ],
      aciklama: "Kerem bir belirsizlik buldu: teknik bilgi eksik. Bunun çaresi time-box'lı bir spike'tır (8. ünite). Çoğunluğa uymak riski Sprint'in ortasına taşır.",
      etiket: "senaryo",
    },
    {
      ad: "po-kart",
      dy: false,
      soru: "Planning Poker'da Product Owner da kart açmalı ve onun kartı diğerlerinden ağır sayılmalıdır.",
      aciklama: "Yanlış. Büyüklüğü işi yapacak Developers tahmin eder. Product Owner masadadır: soruları cevaplar, kapsamı netleştirir, gerekirse \"bunu şöyle küçültsek?\" diye önerir; ama kart açmaz.",
      etiket: "kaynak",
    },
  ]),
  ...sorular(U, "u9-hizli", [
    {
      ad: "tshirt",
      soru: "T-shirt boyu (XS, S, M, L, XL) ile tahmin en çok ne zaman işe yarar?",
      secenekler: [
        "Ayrıntısı az, çok sayıda öğeyi kabaca boyutlandırırken",
        "Sprint Planning'de görevleri saate bölerken",
        "Bir story'nin kabul kriterlerini yazarken",
        "Tek bir story'nin kesin teslim tarihini verirken",
      ],
      aciklama: "T-shirt boyları sayı vermediği için kesinlik iddiası taşımaz; yol haritasındaki epic ve feature'ları kabaca karşılaştırmak için uygundur.",
    },
    {
      ad: "affinity",
      zorluk: 2,
      soru: "Affinity estimation (yakınlık tahmini) nasıl yürür?",
      secenekler: [
        "Kartlar sessizce küçükten büyüğe bir duvara dizilir, sonra gruplara puan verilir",
        "Her kart için ayrı ayrı Planning Poker turu yapılır",
        "Product Owner kartları değerlerine göre sıralar, takım onaylar",
        "Her kart için görevler yazılır ve saatler toplanır",
      ],
      aciklama: "Takım üyeleri kartları konuşmadan bir eksende yerleştirir, birbirinin yerleştirdiğini taşıyabilir. Sonra benzer büyüklükteki gruplara puan verilir. Onlarca öğe kısa sürede boyutlanır; tartışma yalnızca çok yer değiştiren kartlarda yapılır.",
    },
    {
      ad: "kova",
      soru: "Kova yöntemi (bucket system) Planning Poker'a göre hangi durumda daha uygundur?",
      secenekler: [
        "Yeni bir backlog'da yüzlerce öğeyi bir oturumda boyutlarken",
        "Tek bir riskli story'nin ayrıntılarını konuşurken",
        "Sprint içinde bir görevin kalan saatini güncellerken",
        "Bir hatanın kök nedenini bulurken",
      ],
      aciklama: "Kova yönteminde masaya puan değerleriyle kovalar (1, 2, 3, 5, 8...) konur; kartlar referansa göre hızla kovalara dağıtılır. Hız için ayrıntıdan vazgeçer; tek bir riskli story için Planning Poker'ın konuşması daha değerlidir.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u9-ideal-gun", [
    {
      ad: "ideal-nedir",
      soru: "İdeal gün nedir?",
      secenekler: [
        "Kesintisiz, yalnızca o işe ayrılmış bir gün varsayımı",
        "Takımın bir Sprint'te bitirdiği ortalama story point miktarı",
        "Product Owner'ın istediği teslim günü",
        "Bir story'nin test edilmesi için ayrılan gün",
      ],
      aciklama: "İdeal gün mutlak bir birimdir ama gerçek takvim günü değildir: \"kimse beni bölmezse bu iş 2 günlük\". Gerçek takvimde iki ideal gün dört günü bulabilir.",
    },
    {
      ad: "ideal-sorun",
      zorluk: 2,
      soru: "İdeal günle tahmin yapan bir takımın en sık yaşadığı yanlış anlama hangisidir?",
      secenekler: [
        "Paydaşlar ideal günü takvim günü sanar ve tarih bekler",
        "İdeal gün göreli olduğu için takımlar arası kıyaslanamaz",
        "İdeal günler Fibonacci dizisine uymadığı için kullanılamaz",
        "İdeal gün yalnızca hata öğeleri için geçerlidir",
      ],
      aciklama: "\"3 ideal gün\" dışarıdan \"3 gün sonra biter\" diye duyulur. Story point'in bir faydası bu karışıklığı önlemesidir; ama puanı saate çeviren takım aynı sorunu geri getirir.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u9-tuzak", [
    {
      ad: "kiyas",
      soru: "Teknik Liderlik iki squad'ın hızlarını karşılaştırıp \"Squad A 60 puan, siz 35 puan yapıyorsunuz\" diyor. Bu karşılaştırmanın sorunu nedir?",
      secenekler: [
        "Her takımın puan ölçeği kendine özgüdür; sayılar kıyaslanamaz",
        "Hız yalnızca Product Owner'ın bilmesi gereken bir sayıdır",
        "Hız ancak on Sprint sonra karşılaştırılabilir",
        "Karşılaştırma doğrudur; Squad A daha verimlidir",
      ],
      aciklama: "Bir takımın 5'i ile başka takımın 5'i aynı şey değildir. Hız baskı aracı olunca takımlar puanları şişirir (puan enflasyonu): sayı büyür, biten iş aynı kalır.",
      etiket: "senaryo",
    },
    {
      ad: "enflasyon",
      soru: "Puan enflasyonu (point inflation) neye denir?",
      secenekler: [
        "Hız beklentisi yüzünden aynı işe zamanla daha büyük puan verilmesine",
        "Belirsizlik arttıkça Fibonacci aralıklarının büyümesine",
        "Story'ler bölündükçe toplam puanın biraz artmasına",
        "Takım büyüdükçe Sprint başına biten puanın artmasına",
      ],
      aciklama: "Hız bir hedefe dönüşünce takım farkında olmadan tahminleri büyütür; grafik iyileşir, ürün değişmez. Goodhart yasasının tahmindeki karşılığıdır: ölçü hedef olunca iyi bir ölçü olmaktan çıkar.",
      etiket: "sahada",
    },
    {
      ad: "taahhut",
      soru: "\"Tahmin verdiniz, o zaman bu tarihe söz verdiniz\" yaklaşımının sonucu genellikle ne olur?",
      secenekler: [
        "Takım tampon ekler, tahmin bilgi taşımaz olur",
        "Tahminler daha kesin hâle gelir",
        "Takım daha küçük story yazmaya başlar",
        "Belirsiz story'ler kendiliğinden azalır",
      ],
      aciklama: "Tahmin bir olasılık beyanıdır, söz değildir. Tahmin söz gibi kullanılırsa takım kendini korumak için şişirir; Product Owner da gerçek bilgiyi kaybeder.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u9-noestimates", [
    {
      ad: "noestimates-ne",
      soru: "#NoEstimates hareketinin temel önerisi hangisidir?",
      secenekler: [
        "İşi benzer küçüklükte parçalara bölüp tahmin yerine öğe saymak",
        "Takımın hiçbir zaman plan yapmaması",
        "Tahmini takım yerine yöneticilerin yapması",
        "Bütün story'lere aynı puanı yazıp hızı ölçmeye devam etmek",
      ],
      aciklama: "Woody Zuill'in başlattığı ve Vasco Duarte'nin kitaplaştırdığı tartışmanın özü: öğeler benzer küçüklükteyse, biten öğe sayısı puan kadar iyi bir tahmin verir ve tahmin toplantılarının maliyetinden kurtarır. Plan yapmamak değil, farklı yoldan plan yapmaktır.",
    },
    {
      ad: "sayma-sart",
      zorluk: 2,
      soru: "Öğe sayarak sürüm tahmini yapmanın işe yaraması için en önemli koşul hangisidir?",
      secenekler: [
        "Öğelerin benzer ve küçük büyüklükte olması",
        "Takımın en az on kişiden oluşması",
        "Her öğenin ayrıca saatle tahmin edilmesi",
        "Sprint'lerin dört haftalık olması",
      ],
      aciklama: "Bir story iki günlük, öbürü iki haftalıksa öğe saymak yanıltır. İyi bölme (7. ünite) öğe saymayı mümkün kılar; tahmin enerjisi bölmeye harcanır.",
    },
    {
      ad: "hiz-sayisi",
      zorluk: 2,
      soru: "Squad son dört Sprint'te 7, 9, 8 ve 8 story bitirdi. Backlog'da Sürüm 1 için 32 küçük story var. Sprint başına ortalamayla kaç Sprint gerekir?",
      sayi: [4],
      aciklama: "Ortalama (7 + 9 + 8 + 8) / 4 = 8 story. 32 / 8 = 4 Sprint. Gerçekte bir aralık vermek daha dürüsttür (12. ünite): en yavaş Sprint'le 32 / 7 ≈ 4,6, yani 5 Sprint.",
      etiket: "hesap",
    },
  ]),
];
