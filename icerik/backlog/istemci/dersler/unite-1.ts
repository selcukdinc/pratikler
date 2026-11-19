import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u1-${ad}`;

export const UNITE_1: Ders = {
  hafta: 1,
  baslik: "Product Backlog'a Yakından Bakış",
  ozet: "Rehber'in Product Backlog için söylediklerini ayrıntısıyla oku: tek kaynak, sıralı ve gelişen liste, kimin hesap verdiği, öğelerin nitelikleri, Product Goal, backlog buzdağı, DEEP ve bir backlog'u hastalandıran kokular.",
  bolumler: [
    {
      baslik: "Rehber ne der: sıralı, gelişen, tek kaynak",
      metin: md(`
Agile ve Scrum pratiğinde Product Backlog'u bir artefakt olarak tanıdın. Bu pratikte onu yakından, Product Owner'ın masasından inceleyeceğiz: nasıl yazılır, nasıl bölünür, nasıl sıralanır, ne zaman hazırdır.

Rehber'in tanımı kısadır ama her kelimesi iş görür:

> **Kaynak ne der:** Product Backlog, ürünü iyileştirmek için gerekenlerin **gelişen** (emergent) ve **sıralı** (ordered) listesidir. Scrum Takımı'nın üstlendiği **işin tek kaynağıdır**. (Scrum Rehberi 2020)

Üç kelimeyi tek tek açalım:

- **Gelişen:** liste baştan dondurulmaz. Ürün kullanıldıkça, pazar değiştikçe, takım öğrendikçe öğeler eklenir, silinir, bölünür, yer değiştirir. Bir gereksinim dokümanı gibi "onaylanıp kapanmaz".
- **Sıralı:** "yüksek, orta, düşük" gibi öncelik kovaları değil, tam bir sıra. Hangi öğenin önce yapılacağı her öğe için bellidir. İki öğe aynı anda birinci olamaz.
- **Tek kaynak:** takımın yaptığı iş buradan gelir. Koridorda istenen, e-postayla gönderilen, "acil, araya alın" denen iş de önce backlog'a yazılır; yoksa görünmez kalır.

Rehber ayrıca hangi öğelerin Sprint'e alınmaya hazır olduğunu söyler: Scrum Takımı'nın **bir Sprint içinde Done yapabileceği** öğeler Sprint Planning'de seçilebilir. Bu şeffaflığa genelde inceltme (refinement) ile ulaşılır. Rehber'de bunun ötesinde bir "hazırlık kapısı" yoktur; Definition of Ready ve onay adımları sahadaki eklemelerdir (11. ünite).
`),
      dene: [p("tanim"), p("sirali")],
    },
    {
      baslik: "Refinement: süren bir etkinlik",
      metin: md(`
Backlog kendi kendine incelmez. Rehber bu işe **Product Backlog refinement** der:

> **Kaynak ne der:** Refinement, Product Backlog öğelerini daha küçük ve daha kesin parçalara bölme ve onlara açıklama, sıra, büyüklük gibi ayrıntılar ekleme işidir. **Süren** bir etkinliktir. (Scrum Rehberi 2020)

Refinement, Scrum'un beş etkinliğinden biri değildir; Sprint Planning ya da Daily gibi time-box'ı yoktur. Ama "süren" kelimesi önemlidir: Sprint boyunca, işin arasında, düzenli olarak yapılır. Takımların çoğu haftada bir ya da iki kez bir iki saatlik bir oturum yapar; bazıları her gün Daily'den sonra 15 dakika ayırır.

2017 Rehberi refinement'ın "genelde Developers'ın kapasitesinin %10'unu aşmadığını" söylüyordu. 2020 Rehberi bu sayıyı çıkardı; yine de sahada hâlâ iyi bir başlangıç ölçüsüdür. Çok azı Sprint Planning'i uzun ve belirsiz yapar; çok fazlası backlog'un uzak ucunu boşa ayrıntılandırır.

> **Sahada:** Squad'da refinement salı ve perşembe öğleden sonraları birer saat. Elif sıranın üstündeki beş altı öğeyi getirir; Can, Deniz ve iki geliştirici sorular sorar, büyük olanları böler, kabul kriterlerini birlikte yazar, kaba tahmin verir. Toplantının çıktısı "hazır" bir avuç öğe ve birkaç yeni soru.
`),
      dene: [p("refinement"), p("surekli")],
    },
    {
      baslik: "Kim hesap verir, kim yazar, kim tahmin eder?",
      metin: md(`
Rehber bu konuda üç ayrı şey söyler ve sahadaki karışıklığın çoğu bunları birbirine karıştırmaktan çıkar.

> **Kaynak ne der:** Product Owner, etkili Product Backlog yönetiminden **hesap verir**: Product Goal'ü geliştirip iletmek, öğeleri oluşturup açıkça iletmek, sıralamak ve backlog'un şeffaf, görünür ve anlaşılır olmasını sağlamak. Product Owner bunları kendisi yapabilir ya da başkalarına bırakabilir; her durumda **hesap veren o kalır**. (Scrum Rehberi 2020)

- **Hesap veren:** Product Owner. Tek kişi, komite değil.
- **Yazan:** herkes olabilir. Bir story'yi Tech Lead, test uzmanı ya da Teknik Liderlik yazabilir. Ama sıra ve kabul kararı Product Owner'dadır.
- **Büyüklüğü veren:** işi yapacak **Developers**. Product Owner ödünleşimleri açıklayarak onları etkileyebilir, tahmini kendisi vermez.

Rehber organizasyona da bir şey söyler: Product Owner'ın kararlarına saygı gösterilmelidir; backlog'u değiştirmek isteyen, **Product Owner'ı ikna etmeye** çalışır. Yemekhane müdürü Nurten Hanım'ın bir isteği varsa doğru yol Mert'e mesaj atmak değil, Elif'le konuşmaktır.

> **Sahada:** Bu pratikteki squad'da, birçok kurumda olduğu gibi, Teknik Liderlik epic ve feature yazıyor, Elif story yazıp onaya götürüyor. Rehber açısından bu mümkün; işi bölüşmek serbest. Ama onay adımı Elif'in kararını fiilen başkasına bağlarsa hesap verebilirlik bulanıklaşır. Bu gerilimi 2. ve 11. ünitelerde açıyoruz.
`),
      dene: [p("hesap-veren"), p("devretme"), p("degistirmek")],
    },
    {
      baslik: "Bir öğede ne yazar?",
      metin: md(`
Rehber öğelerin biçimi hakkında bilerek az şey söyler:

> **Kaynak ne der:** Refinement'ta öğelere açıklama, sıra ve büyüklük gibi ayrıntılar eklenir. Nitelikler çoğu zaman iş alanına göre değişir. (Scrum Rehberi 2020)

Yani "her öğe bir user story olmalı" diye bir kural yoktur. Product Backlog'da şunlar yan yana durabilir:

| Öğe türü | Squad'dan örnek |
|---|---|
| Yeni özellik (çoğunlukla story) | Bir yurt öğrencisi olarak akşam yemeğini önceden ayırtmak istiyorum... |
| Hata | Bakiye ekranında kuruşlar yanlış yuvarlanıyor |
| Teknik iş | Ödeme kütüphanesini yeni ana sürüme geçir |
| Deney | Kuyruk tahminini iki hafta yalnız merkez yemekhanede dene |
| Bilgi toplama | Akademisyenlerin misafir yemeği ihtiyacını beş görüşmeyle anla |

Sahada bir öğede genelde şunlar bulunur: kısa bir başlık, açıklama (çoğu zaman story kalıbı), kabul kriterleri, büyüklük, sıra, bağlı olduğu feature ya da epic, etiketler. Bunların hiçbiri zorunlu değil; takım hangisinin kendine yararlı olduğuna karar verir.

> **Sahada:** Araçların çoğu bir öğeye onlarca alan ekletir (öncelik, bileşen, sürüm, sorumlu...). Doldurulmayan ya da kimsenin bakmadığı alan şeffaflığı artırmaz, gürültü ekler. "Bu alana bakarak kim, hangi kararı veriyor?" diye sor.
`),
      dene: [p("bicim"), p("turler")],
    },
    {
      baslik: "Product Goal: listenin pusulası",
      metin: md(`
Sıralı bir liste "neye göre sıralı?" sorusunu doğurur. Rehber'in cevabı Product Goal'dür.

> **Kaynak ne der:** Product Goal, ürünün gelecekteki istenen durumudur ve Product Backlog'un içinde durur. Backlog'un geri kalanı, Product Goal'ü gerçekleştirecek "ne"yi tanımlamak için ortaya çıkar. Scrum Takımı bir sonrakine geçmeden önce bir Product Goal'ü gerçekleştirmeli ya da bırakmalıdır. (Scrum Rehberi 2020)

Product Goal bir çıktı listesi değildir ("on iki ekran ekle"), bir teknik iş de değildir ("ödemeyi yeni çatıya taşı"). Kullanıcı ya da kurum için bir **sonuçtur**:

- Zayıf: "Mart sonuna kadar bütün story'leri bitirmek."
- Daha iyi: "Öğle saatinde öğrencilerin sırada bekleme süresini yarıya indirmek."

İyi bir Product Goal'ün asıl faydası sıralamada görünür. Elif yeni bir istek geldiğinde "bu bizi beklemeyi yarıya indirmeye yaklaştırıyor mu?" diye sorabilir. Yaklaştırmıyorsa öğe ya alta iner ya da bir sonraki hedefe bırakılır. Product Goal'ün ölçülmesi ve OKR'lerle ilişkisi 3. ünitede.

> **Sahada:** Birçok takımın backlog'unda Product Goal yazılı değildir; hedef yöneticinin sunumunda ya da kimsenin hatırlamadığı bir toplantıdadır. Hedefi backlog'un en üstüne bir satır olarak yazmak, refinement konuşmalarını şaşırtıcı ölçüde kısaltır.
`),
      dene: [p("taahhut"), p("bir-anda")],
    },
    {
      baslik: "Backlog buzdağı",
      metin: md(`
Backlog'daki öğeler aynı ayrıntıda olmamalıdır. Mike Cohn'un sık kullandığı benzetme bir buzdağıdır:

- **Su üstündeki uç:** bir iki Sprint içinde yapılacak öğeler. Küçük, kabul kriterli, tahminli. Sprint Planning'de seçilmeye hazır.
- **Hemen altı:** sırası yaklaşan, feature büyüklüğünde, kaba tahminli öğeler. Refinement'ta bölünmeyi bekler.
- **Derinler:** epic'ler ve fikirler. Birer satır; kaba bir T-shirt boyu ya da hiç tahmin.

[[G-S1-01]]

Neden hepsini bugün ayrıntılandırmıyoruz? Çünkü uzaktaki öğe, sırası gelene kadar değişecek. Altı ay sonra yapılacak bir epic'in 40 story'sini bütün kabul kriterleriyle bugün yazmak, o güne kadar öğrenilenlerle büyük ölçüde yeniden yazılacak bir stok üretir. Lean'in diliyle bu hem **fazla işleme** hem **stoktur**. Ayrıntı, **son sorumlu anda** (last responsible moment) eklenir: kararı daha fazla ertelemenin bir maliyeti olmaya başladığı an.

> **Sahada:** Yaygın ölçü, backlog'un üstünde bir iki Sprint'lik hazır iş tutmaktır. Daha azı Sprint Planning'i refinement'a çevirir; daha fazlası ayrıntının eskimesine yol açar.
`),
      dene: [p("ust-alt"), p("kac-sprint")],
      lab: "buzdagi",
    },
    {
      baslik: "DEEP: iyi bir backlog'un dört özelliği",
      metin: md(`
Roman Pichler ve Mike Cohn iyi bir Product Backlog'u dört kelimeyle özetler; baş harfleri **DEEP** eder:

| Harf | İngilizcesi | Anlamı |
|---|---|---|
| D | Detailed appropriately | **Uygun ayrıntıda:** üstteki öğeler ince, alttakiler kaba (buzdağı) |
| E | Estimated | **Tahminli:** her öğenin kaba ya da kesin bir büyüklüğü var; sıralama ve sürüm planı buna dayanır |
| E | Emergent | **Gelişen:** öğeler eklenir, çıkarılır, bölünür, yer değiştirir |
| P | Prioritized | **Sıralı:** her öğenin yeri belli (Rehber "sıralı" der) |

DEEP bütün backlog için bir ölçüdür. Tek bir story'nin kalitesi için ise INVEST kullanılır (5. ünite). İkisini karıştırma: bir backlog'daki her story INVEST'e uyabilir ama backlog yine de sırasız ya da kopyalarla dolu olabilir.

[[G-S1-02]]

> **Sahada:** DEEP'i bir refinement oturumunun başında beş dakikalık bir kontrol listesi olarak kullan: "Üstteki öğeler Sprint'e hazır mı? Büyüklükleri var mı? Bir haftadır kimse yeni bir şey öğrenmedi mi? Sıra hâlâ doğru mu?"
`),
      dene: [p("harfler"), p("uygun-ayrinti"), p("emergent")],
      lab: "saglik",
    },
    {
      baslik: "Backlog kokuları",
      metin: md(`
Bir backlog'un hastalandığı birkaç tipik belirtiyle anlaşılır:

- **Mezarlık:** yüzlerce öğe, en eskisi yıllık, kimse okumuyor. Önemli olan kalabalıkta kaybolur, refinement yavaşlar.
- **"Bir gün" listesi:** her fikir "unutmayalım" diye yazılır, hiçbiri silinmez. Liste bir istek kutusuna döner.
- **Kopyalar:** aynı ihtiyaç farklı cümlelerle iki üç kez yazılmış; biri üstte, biri altta. Sıra bulanıklaşır, iş iki kez sayılır.
- **Yan kapı:** işler backlog'a girmeden doğrudan geliştiricilere gider. Product Owner sırayı, takım kapasitesini, paydaşlar ilerlemeyi göremez.
- **Eşit öncelik:** yarısı "yüksek" etiketli, aralarında sıra yok.

Çoğunun çaresi basittir ama cesaret ister: **silmek**. Bir yıldır sıranın üstüne hiç çıkmamış bir öğe büyük olasılıkla hiç yapılmayacaktır. Gerçekten önemliyse yeniden gelir; geldiğinde de o günün bilgisiyle daha iyi yazılır.

> **Sahada:** Elif üç ayda bir "backlog temizliği" yapıyor: 6 aydan eski ve sırası 100'ün altındaki öğeleri paydaşlara listeyle duyuruyor, bir hafta itiraz gelmeyenleri arşive taşıyor. Backlog 640 öğeden 180'e indi; refinement toplantıları kısaldı.
`),
      dene: [p("mezarlik"), p("kopya"), p("yan-kapi")],
    },
  ],
  test: [
    p("tek-kaynak"), p("hazir"), p("yuzde-on"), p("buyukluk"), p("komite"), p("rehber-nitelikleri"),
    p("alana-gore"), p("nerede"), p("yemekhane-hedefi"), p("erken-ayrinti"), p("tahmin-hepsi"), p("silmek"),
  ],
};
