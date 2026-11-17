// 9. ünite (Görünürlük ve Ölçüm): burndown ve burnup, velocity ve tuzakları, akış
// ölçütleri, kümülatif akış diyagramı, Goodhart yasası ve Monte Carlo tahmini.
import { sorular, type Soru } from "./yardimci.ts";

const U = 9;

export const unite9: Soru[] = [
  ...sorular(U, "u9-burndown", [
    {
      ad: "burndown-tanim",
      soru: "Sprint burndown grafiği neyi gösterir?",
      secenekler: [
        "Sprint'te kalan işin günden güne nasıl azaldığını",
        "Takımın her Sprint'te bitirdiği toplam puanı",
        "Her geliştiricinin günlük çalışma saatini",
        "Product Backlog'a eklenen öğelerin sayısını",
      ],
      aciklama: "Sprint burndown, Sprint Backlog'da **kalan işi** (puan, saat ya da öğe sayısı) günlere göre çizer. Kesikli ideal çizgiyle karşılaştırılarak Sprint Goal'e ilerleme görünür kılınır. Takımın Sprint başına bitirdiği iş velocity'dir.",
    },
    {
      ad: "rehberde",
      dy: false,
      soru: "2020 Scrum Rehberi her takımın burndown grafiği tutmasını zorunlu kılar.",
      aciklama: "Yanlış. Burndown eski Rehber'lerde geçiyordu, 2011'de zorunlu olmaktan çıktı ve 2020 Rehberi'nde hiç geçmez. Rehber yalnızca ilerlemenin denetlenmesini ister; burndown, burnup ve CFD bunun için yaygın araçlardır.",
      etiket: "rehber",
    },
    {
      ad: "ucurum",
      zorluk: 2,
      soru: "Squad'ın burndown çizgisi Sprint'in ilk sekiz gününde neredeyse düz kalıyor, son iki günde birden sıfıra iniyor. En olası açıklama hangisidir?",
      secenekler: [
        "Öğeler büyük ve paralel yürüyor; hiçbiri sona kadar bitmiyor",
        "Takım Sprint'in başında fazla hızlı çalışıp sonra yorulmuş",
        "Product Owner Sprint ortasında Sprint Backlog'a kapsam eklemiş",
        "Takım her gün kalan işi eksiksiz ve doğru biçimde güncellemiş",
      ],
      aciklama: "\"Uçurum\" deseni, işin **sona kadar bitmediğini** gösterir: öğeler büyüktür ya da herkes her işe aynı anda başlamıştır (WIP yüksek). Öğeleri küçültmek ve WIP'i sınırlamak çizgiyi ideal düşüşe yaklaştırır. Ayrıca son gün \"bitti\" denen işin gerçekten DoD'u karşılayıp karşılamadığına bakılmalıdır.",
      etiket: "senaryo",
    },
    {
      ad: "yukari",
      zorluk: 2,
      soru: "Burndown çizgisi Sprint'in ortasında yukarı çıkıyor. Bu en çok neyi gösterir?",
      secenekler: [
        "Sprint Backlog'a iş eklendi ya da bir öğe büyük çıktı",
        "Takım o gün beklenenden çok daha fazla iş bitirdi",
        "Sprint süresi Product Owner tarafından kısaltıldı",
        "Definition of Done Sprint ortasında gevşetildi",
      ],
      aciklama: "Kalan iş arttıysa ya Sprint Backlog'a yeni iş girmiştir ya da Developers bir öğenin daha büyük olduğunu öğrenmiştir. İkincisi doğaldır (Sprint Backlog öğrenildikçe güncellenir); birincisi sık oluyorsa Sprint Goal'ün korunup korunmadığına bakılır.",
    },
    {
      ad: "duz",
      zorluk: 2,
      soru: "Burndown çizgisi beş gündür hiç değişmiyor ama takım yoğun çalıştığını söylüyor. Önce neye bakmak gerekir?",
      secenekler: [
        "Grafiğin güncellenip güncellenmediğine ve takılan işlere",
        "Takımın her gün fazla mesaiye kalıp kalmadığına",
        "Product Owner'ın Product Backlog'u yeniden sıralamasına",
        "Sprint'in hemen iptal edilip yeniden planlanmasına",
      ],
      aciklama: "Düz çizgi ya şeffaflık sorunudur (pano güncellenmiyor) ya da bütün işler bir yerde bekliyordur (inceleme, test ortamı, dış onay). Önce gerçeği görünür kılmak gerekir; empirizmin ilk sütunu şeffaflıktır.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u9-burnup", [
    {
      ad: "burnup-fark",
      zorluk: 2,
      soru: "Burnup grafiğinin burndown'a göre en önemli üstünlüğü nedir?",
      secenekler: [
        "Biten işi ve toplam kapsamı ayrı çizgilerde gösterir; kapsam değişimi görünür",
        "Yalnızca biten işi gösterdiği için daha sade ve okunaklıdır",
        "Takım üyelerinin bireysel katkısını ayrı ayrı çizgilerle gösterir",
        "Sprint'in kaç gün süreceğini geçmiş veriden kendiliğinden hesaplar",
      ],
      aciklama: "Burnup'ta bir çizgi **biten işi**, öteki **toplam kapsamı** gösterir. Burndown'da kapsam artınca çizgi \"takım yavaşladı\" gibi görünebilir; burnup'ta bunun kapsam artışı olduğu açıkça görülür. Sürüm ve Product Goal takibinde bu yüzden sık kullanılır.",
    },
    {
      ad: "burnup-kapsam",
      zorluk: 2,
      soru: "Squad'ın sürüm burnup'ında biten iş çizgisi düzenli yükseliyor ama toplam kapsam çizgisi de aynı hızla yükseliyor. Bu ne anlama gelir?",
      secenekler: [
        "Takım ilerliyor ama kapsam aynı hızda büyüdüğü için hedef yaklaşmıyor",
        "Takım hiç iş bitirmiyor",
        "Product Backlog küçülüyor ve sürüm yakında biter",
        "Grafik yanlış çizilmiş; iki çizgi hiçbir zaman birlikte yükselmez",
      ],
      aciklama: "İki çizgi arasındaki mesafe kalan iştir. Mesafe kapanmıyorsa sorun hız değil **kapsam büyümesidir**. PO ile Product Goal ve sürüm kapsamı yeniden konuşulmalıdır.",
      etiket: "senaryo",
    },
    {
      ad: "kalan-burnup",
      zorluk: 2,
      soru: "Burnup grafiğinde toplam kapsam 120 puan, biten iş 75 puan. Takımın son Sprint'lerdeki hızı Sprint başına yaklaşık 15 puansa ve kapsam değişmezse kaç Sprint daha gerekir?",
      sayi: [3],
      aciklama: "Kalan: 120 − 75 = 45 puan.\n---\n45 / 15 = **3 Sprint**. Bu tek sayılık bir tahmindir; gerçekte hız değişir, bu yüzden aralıkla vermek daha dürüsttür (Monte Carlo).",
    },
  ]),
  ...sorular(U, "u9-velocity", [
    {
      ad: "velocity-tanim",
      soru: "Velocity nedir?",
      secenekler: [
        "Bir takımın bir Sprint'te Done yaptığı işin miktarı, genellikle puan olarak",
        "Bir geliştiricinin bir günde yazdığı ortalama kod satırı sayısı",
        "Product Backlog'daki bütün öğelerin toplam puanı",
        "Bir öğenin başlangıçtan bitişe kadar geçen süresi",
      ],
      aciklama: "Velocity, takımın Sprint başına **Done** yaptığı iştir (çoğunlukla story point). Yalnızca Done işler sayılır; yarım iş velocity'ye girmez. Bir öğenin süresi cycle time'dır.",
    },
    {
      ad: "velocity-hesap",
      soru: "Squad'ın son dört Sprint'teki velocity'si 32, 40, 36 ve 36 puan. Ortalama velocity kaçtır?",
      sayi: [36],
      aciklama: "(32 + 40 + 36 + 36) / 4 = 144 / 4 = **36** puan.",
    },
    {
      ad: "velocity-aralik",
      zorluk: 2,
      soru: "Aynı verilerle (32, 40, 36, 36) bir sonraki Sprint için en dürüst tahmin hangisidir?",
      secenekler: [
        "Büyük olasılıkla 32 ile 40 puan arası",
        "Tam olarak 36 puan",
        "En az 40 puan, çünkü takım öğreniyor",
        "Tahmin yapılamaz, velocity yalnızca geçmişi gösterir",
      ],
      aciklama: "Velocity dalgalanır; tek bir ortalama sayı kesinlik izlenimi verir. **Aralık** vermek (gözlenen en düşük ve en yüksek, ya da yüzdelikler) belirsizliği dürüstçe gösterir. Geçmiş hız, kararlı bir takımda yakın gelecek için iyi bir ipucudur.",
    },
    {
      ad: "yarim-is",
      dy: true,
      soru: "Sprint sonunda yüzde 80'i biten 8 puanlık bir öğe velocity'ye hiç sayılmaz.",
      aciklama: "Doğru. Velocity yalnızca DoD'u karşılayan işi sayar. Yarım öğe Product Backlog'a döner ve bittiği Sprint'te bütün puanıyla sayılır; \"6,4 puan\" diye kısmi sayım yapılmaz.",
    },
  ]),
  ...sorular(U, "u9-velocity-tuzak", [
    {
      ad: "karsilastirma",
      zorluk: 2,
      soru: "Bölüm yöneticisi iki squad'ı velocity'lerine göre karşılaştırıp \"A takımı 60, B takımı 30 puan yapıyor, B yavaş\" diyor. Bu karşılaştırmanın temel sorunu nedir?",
      secenekler: [
        "Story point her takımın kendi göreli ölçeğidir; karşılaştırılamaz",
        "B takımındaki kişiler her zaman daha az saat çalışıyordur",
        "Velocity yalnızca Product Owner'ın görebileceği gizli bir bilgidir",
        "Karşılaştırma doğrudur ama Sprint uzunlukları da eşit olmalıdır",
      ],
      aciklama: "Story point **göreli** bir ölçüdür: A takımının 5 puanı B takımının 2 puanına denk olabilir. Velocity bir takımın kendi planlaması için bir araçtır; takımlar arası karşılaştırma ve performans ölçüsü olarak kullanılamaz.",
      etiket: "sahada",
    },
    {
      ad: "sisirme",
      zorluk: 2,
      soru: "Yönetim squad'a \"velocity'nizi her Sprint yüzde 10 artırın\" hedefi verdi. Üç Sprint sonra velocity arttı ama teslim edilen özellik sayısı değişmedi. En olası neden nedir?",
      secenekler: [
        "Takım tahminlerini şişirdi; aynı iş artık daha çok puan alıyor",
        "Takım üç Sprint içinde gerçekten yüzde 30 hızlandı",
        "Product Owner backlog'u yanlış ve tutarsız biçimde sıraladı",
        "Sprint'ler kısaldığı için puanlar daha sık sayılmaya başladı",
      ],
      aciklama: "Puanı takımın kendisi verdiği için hedeflenen velocity kolayca **şişer** (puan enflasyonu). Ölçü hedef olunca bozulur: Goodhart yasasının tipik örneğidir. Değer, ölçülmek istenen asıl şeydir.",
      etiket: "senaryo",
    },
    {
      ad: "velocity-kapasite",
      dy: false,
      zorluk: 2,
      soru: "Velocity bir taahhüttür: takım geçen Sprint 36 puan yaptıysa bu Sprint de en az 36 puan bitirmek zorundadır.",
      aciklama: "Yanlış. Velocity bir **planlama ipucudur**, taahhüt değildir. Rehber'deki taahhüt Sprint Goal'dür. Tatiller, hastalıklar ve belirsizlik velocity'yi değiştirir; Developers ne kadar iş alacağını bunları düşünerek seçer.",
    },
  ]),
  ...sorular(U, "u9-akis-olcutleri", [
    {
      ad: "cycle-time",
      soru: "Kanban Rehberi'ne göre cycle time nedir?",
      secenekler: [
        "Bir iş öğesinin başladığı an ile bittiği an arasında geçen süre",
        "Bir isteğin ilk yazıldığı andan müşteriye teslimine kadar geçen süre",
        "Bir Sprint'in uzunluğu",
        "Takımın bir günde bitirdiği öğe sayısı",
      ],
      aciklama: "Kanban Rehberi cycle time'ı bir iş öğesinin **başlaması ile bitmesi** arasında geçen süre diye tanımlar. İsteğin yazılmasından teslimine kadar geçen daha uzun süreye sahada genellikle **lead time** denir.",
      etiket: "rehber",
    },
    {
      ad: "throughput",
      soru: "Belirli bir zaman diliminde biten iş öğesi sayısına ne denir?",
      cevap: ["throughput", "verim", "çıktı hızı", "akış hızı"],
      aciklama: "**Throughput** (verim), birim zamanda biten öğe sayısıdır: \"haftada 9 öğe\" gibi. Puan değil öğe sayar; bu yüzden tahmin tartışmasına girmeden ölçülebilir.",
    },
    {
      ad: "yas",
      zorluk: 2,
      soru: "\"İş öğesi yaşı\" (work item age) neden faydalıdır?",
      secenekler: [
        "Bitmemiş işin ne kadar süredir sürdüğünü gösterip takılanı yakalatır",
        "Bitmiş işlerin ortalama süresini haftalık olarak gösterir",
        "Bir öğenin Product Backlog'da ne kadar beklediğini gösterir",
        "Takım üyelerinin kıdemini ve deneyimini yıl olarak ölçer",
      ],
      aciklama: "Cycle time ancak iş bitince ölçülür; **yaş** ise devam eden işe bakar. Yaşı takımın genelde gördüğü süreyi aşan bir kart, bitmeden önce fark edilir ve Daily'de konuşulur.",
    },
    {
      ad: "little-akis",
      zorluk: 2,
      soru: "Squad'ın panosunda ortalama 18 öğe devam ediyor ve squad günde ortalama 3 öğe bitiriyor. Little yasasına göre ortalama cycle time kaç gündür?",
      sayi: [6],
      aciklama: "Cycle time = WIP / throughput = 18 / 3 = **6 gün** (3. ünite). WIP 9'a inerse ve throughput aynı kalırsa cycle time 3 güne iner.",
    },
  ]),
  ...sorular(U, "u9-cfd", [
    {
      ad: "cfd-tanim",
      zorluk: 2,
      soru: "Kümülatif akış diyagramında (CFD) iki komşu çizgi arasındaki dikey uzaklık neyi gösterir?",
      secenekler: [
        "O gün o aşamada bulunan iş sayısını",
        "O aşamadaki işlerin ortalama süresini",
        "Takımın o günkü velocity'sini",
        "Product Owner'ın o gün eklediği öğe sayısını",
      ],
      aciklama: "CFD'de her bant bir aşamadır (Geliştirme, Test...). Bir gün için **dikey kalınlık o aşamadaki iş sayısını** (WIP), yatay uzaklık ise işin o aşamalardan geçmesi için geçen yaklaşık süreyi gösterir.",
    },
    {
      ad: "cfd-bant",
      zorluk: 2,
      soru: "Squad'ın CFD'sinde \"Test\" bandı haftalar içinde sürekli kalınlaşıyor, \"Bitti\" bandı ise yavaş yükseliyor. Bu neyi gösterir?",
      secenekler: [
        "Test bir darboğaz; iş orada birikiyor",
        "Test aşaması gereğinden hızlı çalışıyor",
        "Takım çok az işe başlıyor",
        "Sprint'ler fazla kısa",
      ],
      aciklama: "Kalınlaşan bant, o aşamaya girenin çıkandan fazla olduğunu, yani işin **biriktiğini** gösterir. Darboğaz testtedir; geliştiricilerin test otomasyonuna yardım etmesi ve yeni işe başlamayı durdurmak (WIP sınırı) akışı düzeltir.",
      etiket: "senaryo",
    },
    {
      ad: "cfd-duz",
      dy: true,
      zorluk: 2,
      soru: "Kararlı bir akışta CFD'nin bantları kabaca paralel yükselir.",
      aciklama: "Doğru. Giren ve çıkan iş dengedeyse her aşamanın kalınlığı sabit kalır ve bantlar paralel gider. Genişleyen bant birikmeyi, daralan bant aşamanın aç kaldığını gösterir.",
    },
  ]),
  ...sorular(U, "u9-goodhart", [
    {
      ad: "goodhart",
      soru: "\"Bir ölçü hedefe dönüşünce iyi bir ölçü olmaktan çıkar\" düşüncesi hangi adla bilinir?",
      secenekler: ["Goodhart yasası", "Little yasası", "Parkinson yasası", "Conway yasası"],
      aciklama: "**Goodhart yasası** (Marilyn Strathern'in yaygınlaşan ifadesiyle): ölçü hedef olunca insanlar ölçüyü yükseltmenin yolunu bulur, ölçünün temsil ettiği asıl şeyi değil. Little yasası WIP ile süre ilişkisi, Parkinson \"iş verilen süreyi doldurur\", Conway sistemlerin organizasyon yapısını yansıttığıdır.",
    },
    {
      ad: "hata-sayisi",
      zorluk: 2,
      soru: "Yönetim QA ekibini \"bulunan hata sayısı\"na göre ödüllendirmeye başladı. Bunun olası yan etkisi hangisidir?",
      secenekler: [
        "Hatalar parçalara bölünerek sayı şişer; geliştiricilerle QA arasında gerilim artar",
        "Ürünün kalitesi kendiliğinden ve kalıcı olarak artar",
        "Hata sayısı azalır çünkü herkes kod yazarken daha dikkatli olur",
        "Hiçbir etkisi olmaz; ölçüler insanların davranışını değiştirmez",
      ],
      aciklama: "Ödüllendirilen ölçü davranışı biçimlendirir: aynı hata birkaç kayda bölünür, kalite birlikte üretilen bir şey olmaktan çıkar. Çapraz işlevli takımda kalite **bütün takımın** işidir.",
      etiket: "senaryo",
    },
    {
      ad: "iyi-olcut",
      zorluk: 2,
      soru: "Squad, ölçütlerin kötüye kullanılmasını önlemek için ne yapabilir?",
      secenekler: [
        "Ölçütleri takımın öğrenmesi için kullanmak, dengeleyen ölçülere bakmak",
        "Tek bir ölçü seçip ona her Sprint artan bir hedef koymak ve izlemek",
        "Hiçbir şey ölçmemek; çünkü ölçüm her durumda kötüye kullanılır",
        "Ölçütleri yalnızca yönetime göstermek, takımdan tamamen saklamak",
      ],
      aciklama: "İyi uygulama: ölçütleri **takımın denetim ve uyarlaması** için kullanmak, tek ölçüye hedef koymamak ve birbirini dengeleyen ölçülere (ör. throughput ile hata oranı ve cycle time) birlikte bakmak.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u9-monte-carlo", [
    {
      ad: "mc-tanim",
      zorluk: 2,
      soru: "Monte Carlo tahmininde \"40 öğe ne zaman biter?\" sorusu nasıl cevaplanır?",
      secenekler: [
        "Geçmiş günlük throughput'tan örnekler çekilip binlerce gelecek denenir",
        "Takımın her üyesine tahmin sorulur ve cevapların ortalaması alınır",
        "Toplam puan ortalama velocity'ye bölünür ve tek bir tarih verilir",
        "Product Owner bir tarih belirler ve takım ona göre çalışır",
      ],
      aciklama: "Monte Carlo, takımın **geçmiş verisinden** (ör. son 30 günün günlük throughput'u) rastgele seçerek binlerce senaryo üretir. Sonuç tek tarih değil bir dağılımdır: \"%50 olasılıkla 12 günde, %85 olasılıkla 15 günde\".",
    },
    {
      ad: "yuzde-85",
      zorluk: 2,
      soru: "Simülasyon \"%85 olasılıkla 15 gün ya da daha kısa\" sonucunu verdi. Bu ne demektir?",
      secenekler: [
        "Denenen senaryoların %85'inde iş 15 günde ya da daha kısa sürede bitti",
        "İş kesinlikle 15. günde biter",
        "İşin %85'i 15 günde biter, kalan %15'i daha sonra",
        "Takım 15 gün boyunca kapasitesinin %85'iyle çalışmalıdır",
      ],
      aciklama: "Yüzdelik, olasılık demektir: senaryoların %85'i bu süreyi aşmadı. Daha yüksek güven istenirse (%95) daha uzun bir süre söylenir. Kesinlik değil, riskin dürüst bir ifadesidir.",
    },
    {
      ad: "mc-ortalama",
      soru: "Squad son 5 günde sırasıyla 2, 0, 3, 1, 4 öğe bitirdi. Günlük ortalama throughput kaçtır?",
      sayi: [2],
      aciklama: "(2 + 0 + 3 + 1 + 4) / 5 = 10 / 5 = **2 öğe/gün**. Monte Carlo bu ortalamayı değil günlerin kendisini örnekler; böylece 0 ve 4 gibi dalgalanmalar da sonuca yansır.",
      etiket: "hesap",
    },
  ]),
];
