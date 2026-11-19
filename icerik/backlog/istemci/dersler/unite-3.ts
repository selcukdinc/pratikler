import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u3-${ad}`;

export const UNITE_3: Ders = {
  hafta: 3,
  baslik: "Vizyondan Backlog'a",
  ozet: "Bir backlog boş bir sayfadan değil bir hedeften doğar. Ürün vizyonu ve Product Goal, OKR ve sonuç-çıktı farkı, persona, impact mapping ve user story mapping ile hedeften story'lere inen yolu kur; ilk sürümün dilimini yürüyen iskeletle kes.",
  bolumler: [
    {
      baslik: "Vizyon, Product Goal ve backlog",
      metin: md(`
Üç katmanı birbirinden ayırarak başlayalım:

- **Ürün vizyonu:** ürün neden var, uzun vadede kime ne vaat ediyor? Yıllar boyu az değişir. Rehber'de geçmez.
- **Product Goal:** vizyona giden yolda bir sonraki somut durak. Ürünün gelecekteki istenen durumu; backlog'un taahhüdü (1. ünite).
- **Product Backlog:** o durağa ulaştıracak işler.

Kampüs Yemekhanesi için:

| Katman | Squad'da |
|---|---|
| Vizyon | Kampüste herkes yemeğini sıra beklemeden ve israf etmeden yiyebilsin. |
| Product Goal | Öğle saatinde sırada bekleme süresi yarıya insin. |
| Backlog | Önceden sipariş, sıra numarası, hazır bildirimi, bakiyeden ödeme... |

Vizyonu sınamanın bilinen bir kalıbı Geoffrey Moore'un *Crossing the Chasm* (1991) kitabından gelir: "**[Hedef müşteri] için**, **[ihtiyacı]** olan, **[ürün]** bir **[kategori]**'dir ve **[ana fayda]** sağlar. **[Rakip]**'ten farklı olarak **[fark]**." Tek cümleye sığmayan bir vizyon çoğu zaman henüz bir vizyon değildir.

> **Kaynak ne der:** Roman Pichler'in **Product Vision Board**'u vizyon cümlesinin altına dört alan koyar: **hedef kitle** (kim?), **ihtiyaçlar** (hangi sorun?), **ürün** (öne çıkan özellikler) ve **iş hedefleri** (kuruma faydası). Tek sayfada vizyonun tutarlı olup olmadığı görünür.
`),
      dene: [p("vizyon-goal"), p("vision-board")],
    },
    {
      baslik: "Sonuç ve çıktı, OKR",
      metin: md(`
Backlog'daki öğeler **çıktıdır**: bir ekran, bir servis, bir bildirim. Ama ürünün başarısı **sonuçla** ölçülür: kullanıcıların davranışında ya da deneyiminde ne değişti?

| Çıktı (output) | Sonuç (outcome) |
|---|---|
| Önceden sipariş ekranı yayına girdi | Öğle saatinde ortalama bekleme 18 dakikadan 8'e indi |
| Menü bildirimi yazıldı | Öğrencilerin %40'ı bildirimi açtı ve gelişleri yayıldı |
| Sprint'te 12 story bitti | Atılan yemek %20 azaldı |

Birçok kurum hedeflerini **OKR** ile yazar: bir hedef (Objective, niteliksel ve ilham veren) ve ona ulaşıldığını gösteren 2-5 ölçülebilir **anahtar sonuç** (Key Results). Andy Grove Intel'de geliştirdi, John Doerr Google'a taşıdı.

En sık hata anahtar sonuca bir çıktı yazmaktır: "KR: Menü bildirim özelliğini Nisan'da yayınla." Özellik yayına girer, kimse kullanmaz, KR yine yeşil görünür. Sonuç biçiminde yazılan KR ise takıma bir soru bırakır: bu sonuca hangi en ucuz çıktıyla ulaşırız?

> **Sahada:** Product Goal ile çeyreklik OKR'ler çelişmemeli. Birçok takım Product Goal'ü bir Objective, ilerlemesini anahtar sonuçlar olarak yazar; Sprint Review'da backlog'un yanında bu ölçüler de konuşulur.
`),
      dene: [p("sonuc-cikti"), p("okr-tanim"), p("kr-yanlis")],
    },
    {
      baslik: "Kimin için? Persona ve kullanıcı rolleri",
      metin: md(`
"Kullanıcı" herkesi kapsadığı için kimseyi anlatmaz. Story yazmadan önce ürünü **kimlerin**, **hangi farklı ihtiyaçlarla** kullanacağını çıkarmak gerekir.

Mike Cohn *User Stories Applied*'da **kullanıcı rolü modelleme** önerir: takım beyin fırtınasıyla rolleri kartlara yazar (yurt öğrencisi, gündüzlü öğrenci, akademisyen, misafir, yemekhane görevlisi, muhasebe), benzerleri birleştirir, her rolün ihtiyacını birkaç cümleyle anlatır.

**Persona** bir adım ileri gider: gerçek kullanıcı gözlemlerinden derlenen, adı, bağlamı, hedefleri ve sıkıntıları olan **kurgusal** bir kullanıcı. Alan Cooper yazılım tasarımına taşıdı (1999). Örnek:

> **Sahada:** *Zehra, 20, yurtta kalıyor.* Dersleri 12.50'de bitiyor, 13.30'da laboratuvarı var. En büyük derdi öğle sırası; iki kez yemeği kaçırıp kantinde tost yedi. Telefonu hep elinde, bakiyesini ailesi yüklüyor.

Zehra'yı düşünen bir takım, "Bir öğrenci olarak ..." yerine çok daha somut story'ler yazar. Ama bir uyarı: araştırmaya dayanmayan, masa başında uydurulmuş persona, takımın varsayımlarını gerçek bir insan gibi gösterir ve sorgulanmaz. En azından varsayım olduğu yazılmalı ve birkaç kullanıcı görüşmesiyle sınanmalıdır.
`),
      dene: [p("tanim"), p("uydurma")],
    },
    {
      baslik: "Impact mapping: hedeften teslimata",
      metin: md(`
Gojko Adzic'in **impact mapping**'i (2012) bir hedeften backlog öğelerine inen bir ağaçtır. Dört seviyesi dört soru sorar:

1. **Neden?** Hedef. Ölçülebilir bir iş sonucu: "Atılan yemek bu dönem %20 azalsın."
2. **Kim?** Bu hedefi etkileyebilecek **aktörler**: öğrenciler, yemekhane görevlileri, menüyü hazırlayan diyetisyen.
3. **Nasıl?** Aktörlerin davranışında istenen **etki**: "Görevliler tahmini porsiyon sayısına göre pişirsin", "Öğrenciler yemeği bir gün önceden ayırtsın."
4. **Ne?** Bu etkiyi sağlayacak **teslimatlar**: "yarın için ayırt" düğmesi, mutfak ekranında ayırtma grafiği. Backlog öğeleri buradan çıkar.

[[G-S3-01]]

Haritanın iki büyük faydası var. Birincisi, **bir hedefe bağlanmayan** özellik hemen göze çarpar: haritada yeri yoksa neden yapıyoruz? İkincisi, aynı etki için birden çok teslimat düşünülür ve **en ucuzu** önce denenir; hedefe ulaşılınca diğer dallar hiç yapılmayabilir.

> **Sahada:** Etki seviyesi en çok atlanan seviyedir. Takımlar doğrudan "kim → ne"ye atlar ve özellik listesine geri döner. "Bu özellik bu aktörün hangi davranışını değiştirecek?" sorusu haritanın asıl değeridir.
`),
      dene: [p("seviyeler"), p("etki-ne"), p("harita-oku")],
      lab: "etki-haritasi",
    },
    {
      baslik: "User story mapping",
      metin: md(`
Düz bir backlog listesi sıralıdır ama **bütünü** göstermez. Jeff Patton bunu bir kitabın sayfalarını tek tek okuyup hikâyeyi görememeye benzetir. Onun önerisi **user story mapping**'dir (2005'teki yazıları, 2014'te *User Story Mapping* kitabı).

Bir story map iki eksenlidir:

- **Yatay eksen, omurga:** kullanıcının yolculuğundaki ana etkinlikler, yaşandıkları sırayla. Yemekhane için: menüye bak → yemek seç → öde → teslim al → değerlendir.
- **Dikey eksen:** her etkinliğin altında o adımı gerçekleştiren story'ler, **önemliden önemsize** doğru dizili.

Haritayı kurarken sorulan en güçlü soru "**peki sonra ne olur?**"dur. Squad omurgayı "menüye bak → seç → öde" diye kurduğunda öğrenci temsilcisi Arda "yemeği nasıl alacağım?" diye sordu; teslim alma adımı haritada yoktu. Düz listede bu boşluk aylarca fark edilmeyebilirdi.

> **Kaynak ne der:** Patton'un sık tekrarladığı fikir: **paylaşılan doküman, paylaşılan anlayış değildir.** Haritanın asıl çıktısı duvardaki kartlar değil, kurulurken takımda oluşan ortak resimdir.
`),
      dene: [p("kim"), p("eksenler"), p("ortak-anlayis")],
    },
    {
      baslik: "Yürüyen iskelet ve sürüm dilimleri",
      metin: md(`
Story map'in en pratik kullanımı sürüm planıdır. Haritayı **yatay çizgilerle** dilimlersin: her dilim, her omurga adımından bir parça alır.

İlk dilim çoğu zaman bir **yürüyen iskelettir** (walking skeleton, Alistair Cockburn'ün terimi): sistemin uçtan uca, bütün parçalarını birbirine bağlayan **en ince** çalışan hâli. Öğrenci ilk sürümde menüyü görür, tek bir yemek seçer, bakiyesinden öder, sıra numarasını alır. Alerjen bilgisi, kupon, bildirim yoktur; ama yolculuk baştan sona yürünebilir ve geri bildirim gelir.

Ters yaklaşım, haritayı **dikey sütunlarla** tamamlamaktır: önce bütün menü özellikleri (fotoğraflar, filtreler, besin değerleri), sonra bütün ödeme yöntemleri. Aylar boyunca hiçbir öğrenci yemeğini uygulamadan alamaz.

[[G-S3-02]]

Yürüyen iskelet ile MVP her zaman aynı şey değildir. Yürüyen iskelet **teknik** bir kavramdır: mimarinin uçtan uca çalıştığını gösterir, kullanıcıya açılmayabilir. MVP (12. ünite) bir **öğrenme** aracıdır: bir varsayımı en az emekle gerçek kullanıcıyla sınar. İlk dilim çoğu zaman ikisini birden karşılar.

> **Sahada:** İlk dilimi keserken "en değerli özellikleri" değil, "yolculuğu tamamlayan en ince parçaları" seç. Değeri en çok artıracak kalınlaştırma, ilk sürümden gelen geri bildirimle belli olur.
`),
      dene: [p("iskelet"), p("yatay-dilim"), p("mvp-ile")],
      lab: "story-map",
    },
  ],
  test: [
    p("asansor"), p("yemekhane-vizyon"), p("goal-okr"), p("kullanici-rolu"), p("neden-faydali"),
    p("duz-liste"), p("eksik-adim"), p("ilk-dilim"),
  ],
};
