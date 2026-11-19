import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u2-${ad}`;

export const UNITE_2: Ders = {
  hafta: 2,
  baslik: "İş Hiyerarşisi: Theme, Epic, Feature, Story, Task",
  ozet: "Backlog'daki işleri büyüklüklerine ve amaçlarına göre seviyelere ayır: theme, epic, feature, story ve task. Her seviyenin nereden geldiğini, SAFe, Jira, Azure Boards ve ClickUp'taki karşılığını, kimin yazıp kimin onayladığını ve hiyerarşinin ne zaman yük olduğunu gör.",
  bolumler: [
    {
      baslik: "Beş seviye, beş soru",
      metin: md(`
Rehber yalnızca "Product Backlog öğesi" der. Ama büyük bir üründe yüzlerce öğeyi tek bir düz listede izlemek zordur; bu yüzden takımların çoğu işleri büyüklüklerine göre katmanlara ayırır. Yaygın hiyerarşi şöyledir:

| Seviye | Sorduğu soru | Ömrü | Squad'dan örnek |
|---|---|---|---|
| **Theme** | Hangi alana odaklanıyoruz? | Aylar, yıllar | Erişilebilirlik; israfı azaltma |
| **Epic** | Hangi büyük hedefe yürüyoruz? | Birkaç Sprint ile birkaç ay | Bakiye yükleme, harcama ve iade |
| **Feature** | Kullanıcı hangi yeteneği kazanacak? | Birkaç Sprint | Bakiye yükleme |
| **Story** | Kimin hangi ihtiyacını karşılıyoruz? | Bir Sprint'ten kısa | Bir gündüzlü öğrenci olarak bakiyemi kartla yüklemek istiyorum... |
| **Task** | Bunu nasıl yapacağız? | Bir gün ya da daha kısa | Ödeme sağlayıcısının test anahtarlarını kasaya ekle |

Seviyeler bir **ağaç** kurar: bir epic birkaç feature'a, bir feature birkaç story'ye, bir story birkaç task'a bölünür. Theme ise ağacın dışındadır; farklı dallardaki öğeleri kesen bir etiket gibi çalışır.

> **Kaynak ne der:** Bu hiyerarşi Scrum Rehberi'nde **yoktur**. Story XP'den, epic ve theme Mike Cohn'un yazılarından, feature ve capability SAFe'ten, seviye adları büyük ölçüde iş takip araçlarından gelir.

[[G-S2-01]]
`),
      dene: [p("rehberde-mi"), p("buyukten"), p("seviye-bul-1")],
      lab: "hiyerarsi",
    },
    {
      baslik: "Epic: aynı kelime, iki ağırlık",
      metin: md(`
"Epic" kelimesi iki farklı gelenekte iki farklı ağırlık taşır ve sahadaki konuşmalarda sık karışır.

**Mike Cohn'un tanımında** epic basitçe **büyük bir user story**'dir: bir Sprint'e sığmayacak kadar büyük, bölünmesi gereken story. "Öğrenciler yemeklerini önceden sipariş edebilsin" bir epic'tir; refinement'ta birkaç story'ye bölünür.

**SAFe'te** epic çok daha ağırdır: büyük bir çözüm geliştirme **girişimi**dir. Portföy düzeyinde bir Kanban'da ilerler, bir **Lean iş gerekçesiyle** (Lean business case) değerlendirilir ve yatırım kararıyla onaylanır. Altında birden çok Agile Release Train'in aylarca çalışacağı feature'lar olabilir.

İki tanımın ortak noktası: epic **biter**. İyi bir epic bir hedef taşır ve o hedefe ulaşıldığında (ya da vazgeçildiğinde) kapanır. "Uygulama iyileştirmeleri" adlı, iki yıldır açık ve altına sürekli story eklenen bir epic, aslında bir **kovadır**; ilerlemeyi ve değeri ölçmeyi imkânsız kılar.

> **Sahada:** Teknik Liderlik bir epic açarken bir **hipotez** yazarsa epic'in değeri sınanabilir: "Önceden sipariş özelliğini açarsak öğle saatindeki ortalama bekleme 18 dakikadan 10 dakikanın altına iner." Hipotez tutmuyorsa epic'i yarıda bırakmak bir başarısızlık değil, iyi bir yatırım kararıdır.
`),
      dene: [p("cohn"), p("bitmeyen"), p("hipotez")],
    },
    {
      baslik: "Feature: kullanıcıya görünen yetenek",
      metin: md(`
Feature, ürünün kullanıcıya sunduğu bir **yetenektir**: "bakiye yükleme", "menü bildirimleri", "misafir yemeği ısmarlama". Epic'ten küçük, story'den büyüktür; genelde birkaç Sprint içinde biter.

Feature'ı tanımanın en kolay yolu kullanıcının gözünden bakmaktır. "Ödeme servisinin veri tabanı tablolarını hazırla" bir feature değildir; kullanıcı onu görmez. Bir feature'ın, bir bileşenin ya da bir katmanın değil, **bir yeteneğin** adı olması gerekir. Katman katman bölmenin zararını 7. ünitede göreceğiz.

> **Kaynak ne der:** SAFe'te bir feature, bir Agile Release Train'in **bir Program Increment** (PI, genelde 8-12 hafta) içinde teslim edebileceği büyüklüktedir ve üç parçayla yazılır: kısa bir açıklama, bir **fayda hipotezi** ve **kabul kriterleri**.

SAFe kullanmasan bile bu üçlü iyi bir alışkanlıktır: feature'ın neden yapıldığı (fayda) ve ne zaman tamam sayılacağı (kabul kriterleri) baştan bellidir.

> **Sahada:** Squad'ın "Bakiye yükleme" feature'ının kartı: "Öğrenciler bakiyelerini kasaya gitmeden yükleyebilsin. Fayda hipotezi: öğle saatinde kasadaki nakit işlemleri %60 azalır. Kabul kriterleri: kartla yükleme, en az 20 en çok 500 TL, yükleme sonrası makbuz."
`),
      dene: [p("tanim"), p("fayda"), p("bilesen")],
    },
    {
      baslik: "Story ve task: ne ve nasıl",
      metin: md(`
Story ile task arasındaki çizgi, backlog yazımında en çok karışan çizgidir.

- **Story**, kullanıcının dilinde "**ne ve neden**"i anlatır: kimin hangi ihtiyacı, hangi faydayla karşılanıyor. Product Owner değerini tartabilir, sıralayabilir.
- **Task**, "**nasıl**"ın bir parçasıdır: API ucunu yaz, testi ekle, ayarı kasaya koy. Kullanıcıya doğrudan bir şey söylemez.

Task'lar Developers'a aittir. Rehber bunu Sprint Planning'in üçüncü konusunda söyler:

> **Kaynak ne der:** Developers, seçilen Product Backlog öğelerini Done bir Increment'e nasıl dönüştüreceklerini planlar. Bu sıklıkla öğeleri **bir gün ya da daha kısa** sürecek daha küçük iş öğelerine bölerek yapılır. (Scrum Rehberi 2020)

Bu yüzden task'ları Sprint başlamadan Product Owner'ın yazması gerekmez; Sprint Planning'de ve Sprint boyunca, iş ilerledikçe Developers çıkarır ve Sprint Backlog'u günceller. Ayşe Sprint ortasında yeni bir teknik adım fark ederse story'nin altına bir task ekler; story'nin kapsamı değişmiyorsa kimsenin onayına gerek yoktur.

> **Sahada:** Bazı takımlar task kullanmaz; story'leri zaten bir iki günlük dilimlere böler ve doğrudan story'leri izler. Bu da geçerli bir seçimdir. Önemli olan Sprint Backlog'un takımın gerçek planını göstermesidir.
`),
      dene: [p("story-task"), p("bir-gun"), p("seviye-bul-3")],
    },
    {
      baslik: "Araçlarda ve çerçevelerde hiyerarşi",
      metin: md(`
Aynı mantık farklı araçlarda farklı adlarla karşına çıkar. Yeni bir takıma katıldığında ilk soru şu olmalı: "Burada 'feature' ne kadar büyük bir şey?"

[[G-S2-02]]

Birkaç önemli ayrıntı:

- **SAFe** büyük çözümlerde epic ile feature arasına **capability** seviyesini ekler: birden çok Agile Release Train'e yayılan yetenek. Tek bir ART'ta bu seviye atlanır.
- **Azure Boards**'ta seviyeler süreç şablonuna göre adlanır: Agile şablonunda User Story, Scrum şablonunda Product Backlog Item.
- **Jira**'nın varsayılan düzeninde story, task ve bug aynı seviyededir; altında sub-task vardır. Epic'in üstüne seviye eklemek ek ayar ister.
- **ClickUp**'ın kendi düzeni Space, Folder, List, Task ve Subtask'tır. Epic ve feature genelde **özel görev türleri** ya da klasör ve listelerle kurulur, görevler arası ilişkilerle bağlanır.

> **Sahada:** Aracın adları farklı olsa da her seviyenin **amacını**, **büyüklüğünü** ve **kimin yazdığını** takımda bir sayfaya yazmak çok karışıklığı önler. "Bizde epic = bir çeyrekte bitecek, ölçülebilir hedefi olan iş; feature = bir iki Sprint'lik yetenek; story = en fazla 5 günlük dilim."
`),
      dene: [p("azure"), p("jira"), p("clickup")],
      lab: "arac-cevirmeni",
    },
    {
      baslik: "Kim yazar, kim onaylar?",
      metin: md(`
Rehber kimin yazdığını değil, kimin **hesap verdiğini** tanımlar. Bu yüzden şu düzenlerin hepsi Rehber'le uyumlu olabilir:

- Product Owner bütün seviyeleri kendisi yazar.
- Teknik Liderlik ya da bir ürün yöneticisi epic ve feature yazar, Product Owner story'lere böler.
- Geliştiriciler ve test uzmanları da story önerir; Product Owner sıralar.

Bu pratiğin squad'ında ikinci düzen var: Teknik Liderlik (Tribe Lead Zeynep Hanım ve baş mimar Levent Bey) epic ve feature yazıyor; Elif story yazıp Teknik Liderlik'in onayına götürüyor.

Bu düzenin bir faydası var: büyük kararlar (hangi epic'e yatırım yapılacağı, mimari yön) bütün squad'ları gören bir yerde verilir. Bir de riski var: Rehber'e göre Product Backlog'un içeriğinden ve sırasından **hesap veren Product Owner**'dır ve organizasyon onun kararlarına saygı göstermelidir. Onay adımı Elif'in kararını fiilen başkasına bağlarsa, Elif sorumlu ama yetkisiz kalır; story'ler onay kuyruğunda bekler.

> **Sahada:** Bu gerilimi azaltan iki alışkanlık: (1) Teknik Liderlik story'yi tek başına değil, Elif ve takımla birlikte **böler**; onay ayrı bir kapı değil, ortak bir refinement konuşması olur. (2) Onayın ölçütleri yazılıdır (ör. "mimari riski olan story'ler"), her story onaya gitmez. Ayrıntısı 11. ünitede.
`),
      dene: [p("teknik-liderlik"), p("herkes-yazabilir")],
    },
    {
      baslik: "Hiyerarşi ne zaman yük olur?",
      metin: md(`
Hiyerarşi bir araçtır, amaç değildir. Her seviyenin bir bakım maliyeti vardır: bağlantılar kurulur, durumlar güncellenir, raporlar tutulur. Şu belirtiler hiyerarşinin fayda değil yük ürettiğini gösterir:

- Takım vaktinin önemli bir kısmını "Bu story hangi feature'a ait?" tartışmasına harcıyor.
- Seviyeler yalnızca bir yönetim raporunu doldurmak için var; takımın kararlarında kullanılmıyor.
- Üç kişilik bir takım iki aylık bir iç araç için dört seviyeli ağaç kurmuş.
- Bir epic'in altında tek bir feature, onun altında tek bir story var.

Küçük bir ürün için **düz, sıralı bir story listesi** çoğu zaman daha şeffaftır. Seviyeler, büyük bir ürünü ya da birden çok takımı izlemek ve yatırım kararlarını görünür kılmak gerektiğinde değer katar.

> **Sahada:** Yararlı bir test: hiyerarşinin her seviyesi için "Bu seviyeye bakarak kim, hangi kararı veriyor?" diye sor. Cevabı olmayan seviyeyi kaldır.
`),
      dene: [p("kucuk-urun"), p("rapor-icin")],
    },
  ],
  test: [
    p("theme"), p("seviye-bul-2"), p("safe-epic"), p("safe-feature"), p("task-backlog"), p("alt-gorev"),
    p("safe-sira"), p("ayni-mantik"), p("birlikte"),
  ],
};
