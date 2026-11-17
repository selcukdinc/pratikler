import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u5-${ad}`;

export const UNITE_5: Ders = {
  hafta: 5,
  baslik: "Scrum Takımı",
  ozet: "Product Owner, Scrum Master ve Developers'ın hesap verebilirliklerini Rehber'in diliyle öğren; çapraz işlevli ve kendi kendini yöneten takımın ne demek olduğunu, 12 kişilik bir squad'ın neden zorlandığını ve hangi kararın kimde olduğunu sahnelerle gör.",
  bolumler: [
    {
      baslik: "Rol değil, hesap verebilirlik",
      metin: md(`
2020 Rehberi "rol" sözcüğünü bıraktı ve **hesap verebilirlik** (accountability) dedi. Scrum Takımı'nda üç hesap verebilirlik vardır: **Product Owner**, **Scrum Master** ve **Developers**. Bunlar unvan değildir: Kampüs Yemekhanesi squad'ında Tech Lead Can, QA Deniz ve DevOps Kerem şirket unvanlarını korur, Scrum açısından hepsi Developers'tır.

> **Rehber ne der:** Scrum Takımı, tek bir hedefe (Product Goal) odaklanmış, **alt takımı ve hiyerarşisi olmayan** uyumlu bir profesyoneller birimidir. Her Sprint'te değerli ve kullanışlı bir Increment yaratmaktan **bütün takım** sorumludur.

Squad'ın 12 kişisi:

| Kişi | Şirketteki unvan | Scrum'daki hesap verebilirlik |
|---|---|---|
| Elif | Product Owner | Product Owner |
| Burak | Scrum Master | Scrum Master |
| Can | Tech Lead | Developers |
| Deniz, Tuba | QA | Developers |
| Kerem | DevOps | Developers |
| Ayşe, Mert, Selin, Okan, Ece, Hakan | Yazılım mühendisi | Developers |
`),
      dene: [p("hiyerarsi")],
    },
    {
      baslik: "Product Owner: değeri en çoklamak",
      metin: md(`
Product Owner, Scrum Takımı'nın çalışmasından doğan **ürün değerini en çoklamaktan** hesap verebilir. Bunu büyük ölçüde Product Backlog'u yöneterek yapar:

- **Product Goal'ü** geliştirmek ve açıkça iletmek,
- Product Backlog **öğelerini oluşturmak** ve açıkça iletmek,
- öğeleri **sıralamak**,
- Product Backlog'un **şeffaf, görünür ve anlaşılır** olmasını sağlamak.

PO bu işleri kendisi yapabilir ya da başkalarına yaptırabilir; **hesap verebilir olan yine PO'dur**. Öğrenci temsilcisi Arda bir hikâye yazabilir, Tech Lead Can teknik bir iş önerebilir; Elif onları netleştirip sıraya koyar.

> **Rehber ne der:** Product Owner **tek bir kişidir, komite değildir**. Birçok paydaşın ihtiyacını temsil edebilir. Product Backlog'u değiştirmek isteyen biri bunu **Product Owner'ı ikna etmeye çalışarak** yapar. PO'nun başarılı olması için bütün organizasyon **kararlarına saygı göstermelidir**.

> **Sahada:** Büyük squad'larda PO'nun yükü ağırdır; çoğu şirkette yanında bir iş analisti ya da "proxy PO" çalışır. Rehber buna karşı değildir, yeter ki son kararın tek sahibi belli olsun. İki kişinin ayrı ayrı "öncelik" verdiği bir backlog, sırası olmayan bir backlog'dur.
`),
      dene: [p("ikna"), p("vekil")],
    },
    {
      baslik: "Scrum Master: takımın etkinliği",
      metin: md(`
Scrum Master, Scrum'un Rehber'de tanımlandığı gibi kurulmasından ve **Scrum Takımı'nın etkinliğinden** hesap verebilir. Rehber onu takıma ve organizasyona **hizmet eden gerçek lider** diye anlatır. Üç yöne hizmet eder:

| Kime | Nasıl |
|---|---|
| Scrum Takımı'na | Kendi kendini yönetme ve çapraz işlevlilikte koçluk; DoD'u karşılayan Increment'lere odak; **engellerin kaldırılmasına neden olmak**; etkinliklerin yapılması, olumlu, verimli ve time-box içinde olması |
| Product Owner'a | Product Goal ve backlog yönetimi teknikleri; açık ve kısa öğelerin gerekliliğini takıma anlatmak; empirik ürün planlaması; paydaş iş birliğini kolaylaştırmak |
| Organizasyona | Scrum'u benimsemede öncülük, eğitim ve koçluk; uygulamaları planlamak ve önermek; empirik yaklaşımı anlatmak; paydaşlarla takımlar arasındaki engelleri kaldırmak |

"Engelin kaldırılmasına **neden olmak**" ifadesi önemlidir: test ortamı çöktüğünde Burak'ın onu kendisi onarması gerekmez; Kerem'i, bilgi işlemi ya da yönetimi harekete geçirmesi yeter.

> **Sahada:** Bazı ölçekli yapılarda squad'da Scrum Master yoktur ve bir agile coach birkaç takıma bakar. Rol kalkınca hesap verebilirlik kaybolmaz: takımın etkinliğini ve Retro'ların gerçekten iyileştirme üretmesini kimin izleyeceği bilinçli olarak belirlenmelidir (12. ünite).
`),
      dene: [p("engel"), p("sm-yok")],
    },
    {
      baslik: "Developers: plan, kalite ve günlük uyarlama",
      metin: md(`
Developers, unvanı ne olursa olsun, her Sprint'te kullanılabilir bir Increment'in herhangi bir yönünü yaratmaya bağlı kişilerdir. Rehber'e göre dört şeyden hesap verebilirler:

- Sprint için bir plan, yani **Sprint Backlog** oluşturmak,
- **Definition of Done'a** uyarak kaliteyi işin içine yerleştirmek,
- planlarını **her gün Sprint Goal'e göre** uyarlamak,
- birbirlerini profesyonel olarak **hesap verebilir tutmak**.

Squad'da Ayşe'nin yazdığı kodu Deniz'in test etmesi, Kerem'in yayın hattını kurması ve Can'ın mimariyi gözden geçirmesi aynı Increment'in parçalarıdır. Hepsi Developers'tır ve Sprint Backlog'un sahibi ortaktır.
`),
      dene: [p("unvan")],
    },
    {
      baslik: "Çapraz işlevli ve kendi kendini yöneten",
      metin: md(`
Rehber iki özellik ister:

- **Çapraz işlevli:** her Sprint'te değer yaratmak için gereken bütün beceriler takımın içindedir. Herkes her işi yapmaz; ama iş başka bir takıma devredilmeden bitirilebilir.
- **Kendi kendini yöneten:** kimin neyi, ne zaman ve nasıl yapacağına takım içeride karar verir. Ürünün yönü PO'dadır; organizasyonun kalite standartları da geçerlidir.

Çapraz işlevliliğin sahadaki karşılığı **T biçimli** insanlardır: herkesin derin bir uzmanlığı vardır (T'nin dikey çizgisi) ama komşu işlere de yardım edebilir (yatay çizgi). Squad'da test sürekli Deniz ve Tuba'nın önünde birikiyorsa çözüm ayrı bir test ekibi değil, geliştiricilerin test otomasyonunu paylaşmasıdır (3. ünitedeki darboğaz fikri).

> **Sahada:** Her veritabanı değişikliği için başka bir takımın onayını bekleyen squad, kâğıt üstünde çapraz işlevli olsa da gerçekte değildir. Böyle dış bağımlılıkları panoda ayrı bir "bekliyor" sütunuyla görünür kılmak, onları azaltmanın ilk adımıdır.
`),
      dene: [p("t-sekil"), p("bagimlilik")],
    },
    {
      baslik: "Takım büyüklüğü: 12 kişilik squad",
      metin: md(`
Rehber'e göre Scrum Takımı çevik olacak kadar küçük, önemli bir iş çıkaracak kadar büyüktür: **tipik olarak 10 ya da daha az** kişi. Gerekçesi iletişimdir. n kişilik bir takımda ikili iletişim yolu sayısı n(n−1)/2'dir:

| Kişi | İletişim yolu |
|---|---|
| 5 | 10 |
| 7 | 21 |
| 10 | 45 |
| 12 | 66 |

Squad 12 kişidir; bu yüzden Daily uzar, kararlar birkaç kişide toplanır, herkes her konuyu bilemez. Rehber'in önerisi açıktır: takım çok büyürse **aynı Product Goal, Product Backlog ve Product Owner'ı paylaşan** birden çok uyumlu Scrum Takımı'na bölünmeyi düşün.

> **Sahada:** Squad'ı "geliştirme" ve "test" diye işleve göre bölmek, devir teslim israfı yaratır. Doğru bölünme ürünün bir dilimine göredir: "Sipariş" ve "Menü" gibi. İki takım tek PO ve tek backlog'la çalışır, her birinin kendi Sprint Backlog'u olur. Bölünmeden kalan büyük squad'lar için Daily ve Retro teknikleri 6. ve 7. ünitelerde; tribe ve çok takımlı yapılar 3. pratikte.
`),
      dene: [p("iletisim-yolu")],
    },
    {
      baslik: "Hangi karar kimde?",
      metin: md(`
Hesap verebilirlikleri karıştırmanın en hızlı yolu "bunu kim karar verir?" sorusudur. Kısa bir harita:

| Karar | Kimde |
|---|---|
| Product Backlog'un sırası, Product Goal | Product Owner |
| Sprint'in iptali | Yalnızca Product Owner |
| Sprint'e kaç öğe alınacağı | Developers (PO ile konuşarak) |
| İşin nasıl yapılacağı, teknik tasarım | Yalnızca Developers |
| Büyüklük tahmini | İşi yapacak Developers |
| Sprint Goal | Bütün Scrum Takımı |
| Etkinliklerin yapılması ve time-box'ları | Scrum Master sağlar |
| Product Backlog'a istek | Herkes önerir, PO karar verir |

On iki sahneyi kararın sahibiyle eşleştir:

[[G-S5-01]]
`),
      dene: [p("karar-nasil")],
      lab: "kim-karar",
    },
  ],
  test: [
    p("po-amac"), p("po-pb-isleri"), p("po-siralama"), p("po-hikaye-onay"), p("tek-kisi"), p("saygi"),
    p("sm-hesap"), p("gercek-lider"), p("sm-not"), p("sm-po"), p("sm-org"), p("dev-tanim"), p("dev-hesap"),
    p("capraz-tanim"), p("kendini-yoneten"), p("butun-takim"), p("on-kisi"), p("bolme"), p("buyuk-squad"),
    p("karar-sira"), p("karar-kac-oge"), p("karar-sure"),
  ],
};
