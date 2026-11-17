// 3. ünite (Lean ve Akış Düşüncesi): Toyota Üretim Sistemi ve Lean yazılım ilkeleri,
// israf türleri, çekme ve itme, parti büyüklüğü, WIP ve bağlam değiştirme, Little
// yasası, darboğaz, değer akışı ve akış verimliliği.
import { sorular, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...sorular(U, "u3-lean", [
    {
      ad: "koken",
      soru: "Lean düşüncenin kökeni hangisidir?",
      secenekler: ["Toyota Üretim Sistemi", "NASA'nın Apollo programı", "Snowbird toplantısı", "ISO 9001 standardı"],
      aciklama: "Lean, Taiichi Ohno ve arkadaşlarının 1950'lerden itibaren geliştirdiği **Toyota Üretim Sistemi**nden doğdu; \"lean\" adı 1990'larda Batı'daki araştırmalarla yaygınlaştı. Mary ve Tom Poppendieck 2003'te bu ilkeleri yazılıma uyarladı.",
    },
    {
      ad: "ilkeler",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi Poppendieck'lerin Lean yazılım geliştirme ilkelerinden biri **değildir**?",
      secenekler: [
        "Kararları olabildiğince erken ve kesin ver",
        "İsrafı ortadan kaldır ve akışı hızlandır",
        "Öğrenmeyi güçlendir ve sık geri bildirim al",
        "Parçaları değil bütünü en iyile",
      ],
      aciklama: "Yedi ilke: israfı ortadan kaldır, öğrenmeyi güçlendir, **kararı olabildiğince geç ver**, olabildiğince hızlı teslim et, takımı güçlendir, bütünlüğü içeriden kur, bütünü gör. Geri dönülmesi zor kararları son sorumlu ana kadar ertelemek, belirsizlik altında daha çok bilgiyle karar vermeyi sağlar.",
    },
    {
      ad: "muda-mura-muri",
      zorluk: 3,
      soru: "Lean'de \"muri\" neyi anlatır?",
      secenekler: ["Aşırı yüklenme", "Değer katmayan iş", "Düzensizlik ve dalgalanma", "Sürekli iyileştirme"],
      aciklama: "Lean üç M'den söz eder: **muda** israf, **mura** düzensizlik (iş yükünün dalgalanması), **muri** aşırı yüklenme (insanı ya da makineyi kapasitesinin üstünde zorlamak). Sürekli iyileştirmenin adı ise kaizen'dir.",
    },
    {
      ad: "kaizen",
      dy: true,
      soru: "Scrum'daki Sprint Retrospective, Lean'deki sürekli iyileştirme (kaizen) fikrinin bir uygulaması sayılabilir.",
      aciklama: "Doğru. Her Sprint sonunda takım süreçlerini, araçlarını ve ilişkilerini inceleyip küçük bir iyileştirme seçer. Scrum Rehberi de Scrum'un empirizmin yanında **lean düşünceye** dayandığını söyler.",
    },
  ]),
  ...sorular(U, "u3-israf", [
    {
      ad: "yedi-israf",
      soru: "Aşağıdakilerden hangisi Toyota Üretim Sistemi'nin klasik yedi israfından biri **değildir**?",
      secenekler: ["Toplantı", "Bekleme", "Fazla üretim", "Hatalar"],
      aciklama: "Ohno'nun yedi israfı: **fazla üretim, bekleme, taşıma, fazla işleme, stok, gereksiz hareket ve hatalar**. Sonradan sekizinci olarak kullanılmayan yetenek eklendi. Toplantı kendi başına israf sayılmaz; değer üretmeyen toplantı ise \"fazla işleme\" ya da \"bekleme\" kılığında israftır.",
    },
    {
      ad: "fazla-ozellik",
      zorluk: 2,
      soru: "Fabrikadaki \"fazla üretim\" israfının yazılımdaki en yakın karşılığı hangisidir?",
      secenekler: ["Kimsenin kullanmadığı ek özellikler", "Yarım kalmış işler", "Takımlar arası devir teslim", "Hata ayıklama"],
      aciklama: "Poppendieck'lerin uyarlamasında fazla üretim **ek özelliklere** karşılık gelir: kimsenin istemediği ya da kullanmadığı özellik hem yapılırken hem bakımı sürerken emek yer. Stoğun karşılığı yarım kalmış iş, taşımanın karşılığı devir teslimdir.",
    },
    {
      ad: "yarim-is",
      zorluk: 2,
      soru: "Squad'da birleşmeyi bekleyen 9 dal ve test edilmeyi bekleyen 14 özellik var. Lean gözüyle bu en çok hangi israf türüdür?",
      secenekler: ["Yarım kalmış iş", "Fazla özellik", "Gereksiz hareket", "Yeniden öğrenme"],
      aciklama: "Başlanmış ama müşteriye ulaşmamış her iş fabrikadaki **stok** gibidir: değer üretmez, eskir, birleştirme çakışması ve unutulma riski taşır. Çözüm daha çok işe başlamak değil, başlanmış işleri bitirmektir (WIP sınırı).",
      etiket: "senaryo",
    },
    {
      ad: "devir-teslim",
      dy: true,
      zorluk: 2,
      soru: "Bir işin analistten tasarımcıya, tasarımcıdan geliştiriciye, geliştiriciden test ekibine geçtiği her devirde bilgi kaybolur; Lean bunu israf sayar.",
      aciklama: "Doğru. Her devir teslim (handoff) bekleme yaratır ve örtük bilginin bir kısmı aktarılamaz. Çapraz işlevli takımlar ve \"aynı kişilerin işi baştan sona taşıması\" bu israfı azaltır.",
    },
  ]),
  ...sorular(U, "u3-cekme", [
    {
      ad: "cekme-tanim",
      soru: "Çekme (pull) sisteminde yeni bir işe ne zaman başlanır?",
      secenekler: [
        "Sonraki adımda kapasite boşalınca",
        "Yönetici yeni bir iş atadığında",
        "Önceki adım işi bitirip ittiğinde",
        "Planlanan başlangıç tarihi geldiğinde",
      ],
      aciklama: "Çekme sisteminde iş, **kapasitesi boşalan adım tarafından çekilir**; böylece hiçbir adım kaldırabileceğinden fazlasını almaz. İtme sisteminde ise iş, sonraki adımın durumuna bakılmadan plana göre ileri itilir ve kuyruklar birikir.",
    },
    {
      ad: "kanban-kart",
      zorluk: 2,
      soru: "Toyota'daki kanban kartının asıl işlevi neydi?",
      secenekler: [
        "Önceki istasyona ne kadar üreteceğini söyleyen çekme sinyali olmak",
        "İşçilerin istasyon başına performansını ölçüp raporlamak",
        "Müşteri siparişlerini fabrika arşivinde saklamak",
        "Kalite kontrolde bozuk parçaları ayırıp işaretlemek",
      ],
      aciklama: "Kanban (Japonca \"görsel kart\") bir **çekme sinyalidir**: parça kullanıldıkça kart önceki istasyona döner ve yalnızca o kadar parça üretilir. Yazılımdaki Kanban yöntemi bu fikri iş akışına taşır (10. ünite).",
    },
    {
      ad: "sprint-cekme",
      dy: true,
      soru: "Scrum'da Developers'ın Sprint Planning'de Product Backlog'dan iş seçmesi, yöneticinin iş ataması yerine bir çekme davranışıdır.",
      aciklama: "Doğru. Rehber'e göre Sprint'e kaç öğe alınacağını **Developers** belirler, çünkü kendi kapasitelerini en iyi onlar bilir. Sprint içinde de kişiler işi kendileri çeker; kimse onlara görev atamaz.",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u3-parti", [
    {
      ad: "parti-20",
      zorluk: 2,
      soru: "Dört istasyonlu bir hatta her istasyon bir parçayı 1 dakikada işliyor. 20 parça, 20'lik tek parti hâlinde istasyondan istasyona geçirilirse (parti bitmeden sonraki istasyona geçmez) bütün partinin işi kaç dakikada biter?",
      sayi: [80],
      aciklama: "Her istasyon 20 parçayı bitirip partiyi bir sonrakine verir: 4 × 20 = **80 dakika**. İlk parça da müşteriye ancak 80. dakikada (partiyle birlikte) ulaşır.",
      etiket: "hesap",
    },
    {
      ad: "parti-1",
      zorluk: 3,
      soru: "Aynı hatta (dört istasyon, parça başına 1 dakika) 20 parça tek parça akışıyla geçirilirse, yani her parça bitince hemen sonraki istasyona geçerse, son parça kaçıncı dakikada biter?",
      sayi: [23],
      aciklama: "İlk parça 4. dakikada çıkar; ardından hat doludur ve her dakika bir parça çıkar. Son parça 4 + 19 = **23. dakikada** biter. Parti büyüklüğünü küçültmek hem ilk teslimi (80 → 4 dakika) hem toplam süreyi kısaltır.",
      etiket: "hesap",
    },
    {
      ad: "kucuk-parti-yazilim",
      zorluk: 2,
      soru: "Yazılımda \"parti büyüklüğünü küçültmenin\" karşılığı hangisidir?",
      secenekler: [
        "Küçük değişiklikleri sık sık birleştirip yayınlamak",
        "Altı ayda bir büyük sürüm çıkarmak",
        "Bütün testleri sürüm öncesine toplamak",
        "Daha uzun sprintlerle çalışmak",
      ],
      aciklama: "Küçük ve sık birleştirme, küçük çekme istekleri ve sık yayın yazılımdaki küçük partilerdir. Geri bildirim hızlanır, hatanın kaynağı kolay bulunur, birleştirme çakışmaları küçülür.",
    },
  ]),
  ...sorular(U, "u3-wip", [
    {
      ad: "wip-tanim",
      soru: "WIP (work in progress) neyi ölçer?",
      secenekler: ["Başlanmış ama bitmemiş iş sayısını", "Bir günde biten iş sayısını", "Backlog'daki toplam iş sayısını", "Takımdaki kişi sayısını"],
      aciklama: "WIP, sistemde aynı anda **başlanmış ama bitmemiş** işlerin sayısıdır. Biten iş sayısı verim (throughput), backlog'daki iş ise henüz başlanmamış iştir.",
    },
    {
      ad: "baglam",
      zorluk: 2,
      soru: "Gerald Weinberg'in bilinen yaklaşık tablosuna göre bir kişi aynı anda üç projede çalışırsa zamanının yaklaşık yüzde kaçı bağlam değiştirmeye gider?",
      sayi: [40],
      aciklama: "Weinberg'in kaba tahmini: tek projede kayıp yok, iki projede yaklaşık %20, **üç projede yaklaşık %40**, dörtte %60. Sayılar kesin ölçüm değil, bir sezgidir; ama çoklu görevin bedava olmadığını iyi anlatır.",
      etiket: "hesap",
    },
    {
      ad: "daha-az-basla",
      zorluk: 2,
      soru: "Ece aynı anda dört işe başlamış, hiçbiri bitmemiş. Scrum Master Burak'ın Lean'e en uygun önerisi hangisidir?",
      secenekler: [
        "Yeni işe başlamadan önce başlanmış işleri bitirmesi",
        "Dört işi de aynı hızda ilerletmesi",
        "Bir beşinci işe başlayıp ilerlemeyi hızlandırması",
        "İşleri bölmeden daha uzun saatler çalışması",
      ],
      aciklama: "\"Başlamayı bırak, bitirmeye başla\" (stop starting, start finishing). WIP'i azaltmak her işin çevrim süresini kısaltır ve bağlam değiştirme kaybını azaltır. Gerekirse takım arkadaşları bitmemiş işlere yardım eder.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u3-little", [
    {
      ad: "little-1",
      soru: "Squad'ın panosunda ortalama 12 iş devam ediyor ve squad haftada ortalama 4 iş bitiriyor. Little yasasına göre bir işin ortalama çevrim süresi kaç haftadır?",
      sayi: [3],
      aciklama: "Little yasası: WIP = verim × çevrim süresi. Çevrim süresi = 12 / 4 = **3 hafta**.",
      etiket: "hesap",
    },
    {
      ad: "little-2",
      soru: "Günde ortalama 2 iş biten ve bir işin ortalama çevrim süresi 5 gün olan bir takımda ortalama kaç iş devam ediyordur?",
      sayi: [10],
      aciklama: "WIP = verim × çevrim süresi = 2 × 5 = **10** iş.",
      etiket: "hesap",
    },
    {
      ad: "little-3",
      zorluk: 2,
      soru: "Haftada 5 iş bitiren bir takım WIP'i 30'dan 15'e indiriyor; verim değişmiyor. Ortalama çevrim süresi kaç haftaya iner?",
      sayi: [3],
      aciklama: "Önce 30 / 5 = 6 hafta, sonra 15 / 5 = **3 hafta**. Aynı verimle WIP'i yarıya indirmek çevrim süresini yarıya indirir: müşteri işini iki kat çabuk alır.",
      etiket: "hesap",
    },
    {
      ad: "little-kosul",
      dy: true,
      zorluk: 3,
      soru: "Little yasası uzun dönem ortalamaları için geçerlidir; sisteme giren ve çıkan iş miktarı kabaca dengeli olmalıdır.",
      aciklama: "Doğru. John Little'ın 1961'de kanıtladığı eşitlik kararlı bir sistemin ortalamaları içindir. Sisteme sürekli çıktığından fazla iş giriyorsa WIP büyür ve kısa dönem hesapları yanıltır; bu yüzden Kanban'da WIP sınırı konur.",
    },
  ]),
  ...sorular(U, "u3-darbogaz", [
    {
      ad: "darbogaz-verim",
      soru: "Bir işin geçtiği üç adımın günlük kapasiteleri sırasıyla 10, 6 ve 8 iş. Sistemin günlük verimi en fazla kaç iş olabilir?",
      sayi: [6],
      aciklama: "Zincir en zayıf halkası kadar güçlüdür: sistem **darboğaz** olan ikinci adımın kapasitesinden (6) hızlı akamaz. Birinci adımı hızlandırmak yalnızca ikinci adımın önündeki kuyruğu büyütür.",
      etiket: "hesap",
    },
    {
      ad: "darbogaz-yeri",
      zorluk: 2,
      soru: "Squad'ın panosunda \"Test bekliyor\" sütununda iş birikiyor, \"Geliştirmede\" sütunu ise sürekli boşalıyor. Darboğaz büyük olasılıkla nerededir?",
      secenekler: ["Test adımında", "Geliştirme adımında", "Backlog'da", "Canlıya alma adımında"],
      aciklama: "İşin **önünde biriktiği** adım darboğazdır: geliştirme hızlı bitiriyor ama test yetişemiyor. Kısıtlar teorisine göre önce darboğaz tam verimle çalıştırılır, diğer adımlar ona göre ayarlanır (geliştiriciler test otomasyonuna yardım eder), gerekirse kapasitesi artırılır.",
      etiket: "senaryo",
    },
    {
      ad: "goldratt",
      zorluk: 2,
      soru: "Kısıtlar teorisine göre darboğaz olmayan bir adımı hızlandırmak genellikle ne sağlar?",
      secenekler: [
        "Bütün sistemde anlamlı bir hız artışı sağlamaz",
        "Sistemin verimini kesinlikle artırır",
        "Darboğazı ortadan kaldırır",
        "Çevrim süresini sıfıra indirir",
      ],
      aciklama: "Eliyahu Goldratt'ın kısıtlar teorisi (The Goal, 1984): sistemin çıktısını kısıt belirler. Kısıt dışındaki adımı hızlandırmak çoğunlukla yalnızca **kuyrukları büyütür**. Beş adım: kısıtı bul, en iyi kullan, diğerlerini ona uydur, kapasitesini artır, yeni kısıta geç.",
    },
  ]),
  ...sorular(U, "u3-deger-akisi", [
    {
      ad: "akis-verimi",
      zorluk: 2,
      soru: "Bir özellik istendiği günden teslim edildiği güne kadar 20 gün geçiyor; bunun yalnızca 2 gününde biri gerçekten üzerinde çalışıyor. Akış verimliliği yüzde kaçtır?",
      sayi: [10],
      aciklama: "Akış verimliliği = aktif çalışma süresi / toplam teslim süresi = 2 / 20 = **%10**. Yazılım işlerinde %15'in altı sık görülür: işin çoğu zamanı onay, test, inceleme ya da birleştirme beklemekle geçer.",
      etiket: "hesap",
    },
    {
      ad: "harita-amac",
      soru: "Değer akışı haritasının asıl amacı nedir?",
      secenekler: [
        "İşin istekten teslime kadar nerede beklediğini görmek",
        "Her çalışanın gün içinde neye kaç saat harcadığını kaydetmek",
        "Ekiplerin bağlı olduğu organizasyon şemasını çizmek",
        "Ürünün bileşenlerini ve mimarisini belgelemek",
      ],
      aciklama: "Değer akışı haritası istekten teslime kadarki adımları **çalışma ve bekleme süreleriyle** gösterir. Genellikle en büyük kazanç insanları hızlandırmaktan değil, beklemeleri kısaltmaktan gelir.",
    },
    {
      ad: "kaynak-verimi",
      zorluk: 3,
      soru: "\"Herkesin her an meşgul olması\" hedefi Lean gözüyle neden sorunludur?",
      secenekler: [
        "Kuyruk büyür; işler bekler ve teslim süresi uzar",
        "Çalışanlar yeni şeyler öğrenmeye vakit bulamaz",
        "Maliyetler hesaplanamaz hâle gelir",
        "Koordinasyon toplantılarının sayısı artar",
      ],
      aciklama: "Kapasite kullanımı %100'e yaklaştıkça kuyruklar hızla büyür (kuyruk teorisi): yeni gelen her iş beklemek zorunda kalır. Lean, kişilerin değil **işin** akışını en iyilemeyi önerir; biraz boşluk, akışı hızlandırır.",
    },
  ]),
];
