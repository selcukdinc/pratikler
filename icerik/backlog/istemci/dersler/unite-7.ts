import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u7-${ad}`;

export const UNITE_7: Ders = {
  hafta: 7,
  baslik: "Story Bölme",
  ozet: "Büyük bir story'yi değer taşıyan küçük parçalara böl: neden bölünür, dikey ve yatay dilim farkı, SPIDR'ın beş yolu, Richard Lawrence'ın desenleri ve akış şeması, iş akışı ve CRUD bölmesi, basit/karmaşık ve ertelenen performans; epic'ten story'ye inerken nerede durulacağı.",
  bolumler: [
    {
      baslik: "Neden bölünür?",
      metin: md(`
Bölme toplam işi **azaltmaz**; hatta biraz artırabilir. Getirdiği şey başkadır:

- **Değer erken gelir.** İlk dilim kullanılırken sonrakiler öğrenilenle şekillenir.
- **Bazı dilimler hiç yapılmaz.** Dilimler sırayla geldiğinde her adımda "bir sonrakine hâlâ ihtiyaç var mı?" diye sorulabilir.
- **Sprint akar.** Büyük story'ler son güne kadar "devam ediyor" görünür; küçük story'ler Sprint boyunca biter ve sorun erken görünür.

> **Sahada:** "Kupon" feature'ı üç dilime bölündü. İlk ikisi yayına girince öğrenciler kuponu bol bol kullandı; Elif üçüncü dilime ("kampanya takvimi") gerek olmadığını gördü ve onu backlog'dan çıkardı. Bütün hâlinde yapılsaydı takvim de yapılacaktı.
`),
      dene: [p("fayda"), p("yapilmayan")],
    },
    {
      baslik: "Dikey dilim, yatay dilim",
      metin: md(`
Bill Wake bölmeyi katmanlı bir pastaya benzetir. Pasta **yatay** kesilirse bir dilim yalnızca kremadır, öbürü yalnızca keks. **Dikey** kesilirse her dilimde bütün katmanlar vardır.

| | Yatay dilim | Dikey dilim |
|---|---|---|
| Örnek | "Sipariş tablosu", "sipariş servisi", "sipariş ekranı" | "Öğrenci tek bir menüyü kartla önceden sipariş eder" |
| Tek başına değer | Yok | Var: kullanıcı bir şey alır |
| Entegrasyon riski | En sona kalır | Her dilimde sınanır |
| INVEST | Valuable ve Independent bozulur | Korunur |

Dikey dilim ince olabilir: tek menü, tek ödeme yöntemi, bildirim yok. Önemli olan arayüzden veriye kadar **uçtan uca çalışmasıdır**.

Gojko Adzic'in **hamburger yöntemi** dikey kalmanın pratik yoludur: akışın adımlarını (sipariş al, öde, bildir) hamburgerin katmanları gibi alt alta yaz, her adımın altına basitten karmaşığa seçenekleri sırala. İlk dilim her katmandan bir seçenek alan ince bir hamburgerdir.

[[G-S7-01]]
`),
      dene: [p("tanim"), p("yatay-zarar"), p("hamburger")],
      lab: "pasta",
    },
    {
      baslik: "SPIDR",
      metin: md(`
Mike Cohn bölmenin beş yolunu akılda kalsın diye **SPIDR** kısaltmasında topladı:

| Harf | Yol | Squad'dan örnek |
|---|---|---|
| **S** | Spike: önce araştır | Eski kart okuyucuyla nasıl konuşulacağını iki günde öğren, sonra böl |
| **P** | Path: farklı yollar | Bakiye yükleme: önce kartla, sonra havaleyle, sonra kiosktan nakitle |
| **I** | Interface: farklı arayüzler | Menü: önce telefonda, sonra yemekhane girişindeki büyük ekranda |
| **D** | Data: farklı veri türleri | Önce merkez yemekhanenin menüsü, sonra diğer üç yemekhane |
| **R** | Rules: iş kurallarını ertele | Önce temel ayırtma; günlük sınır ve burs önceliği sonra |

Her yolda ilk dilim **en çok kullanılan ya da en çok öğreten** parçadır; diğerleri sonra eklenir.

> **Sahada:** Interface yolunda bir istisna var: erişilebilirlik ertelenecek bir "arayüz" değildir. Ekran okuyucu desteği ayrı bir dilim olarak sona bırakılırsa her ekran yeniden açılır; bu yüzden Squad onu DoD'ye yazdı (8. ünite).

[[G-S7-02]]
`),
      dene: [p("harfler"), p("path"), p("interface")],
      lab: "spidr",
    },
    {
      baslik: "Richard Lawrence'ın desenleri",
      metin: md(`
Richard Lawrence 2009'da story bölme desenlerini yazdı, sonra bunları bir **akış şemasına** dönüştürdü. Şema bölmeye başlamadan önce bir kontrolle açılır:

1. **Story INVEST'e uyuyor mu (Small dışında)?** Değersiz ya da test edilemez bir story bölünürse küçük, değersiz parçalar çıkar. Önce story düzeltilir.
2. **Desenleri sırayla dene.** İş akışı adımları, işlem türleri (CRUD), iş kuralı çeşitleri, veri çeşitleri, arayüz çeşitleri, büyük çaba, basit/karmaşık, ertelenen performans, en sonda da spike.
3. **Birden çok bölme bulursan iyisini seç.** İyi bölme ya **düşük değerli bir parçayı** ortaya çıkarır (o parça hiç yapılmayabilir) ya da kabaca **eşit parçalar** verir (Product Owner sıralarken esneklik kazanır).

SPIDR ile Lawrence'ın desenleri büyük ölçüde örtüşür. SPIDR ezberlemesi kolay bir kısa liste, Lawrence'ın şeması daha ayrıntılı bir yol haritasıdır.
`),
      dene: [p("kim"), p("ilk-soru")],
    },
    {
      baslik: "İş akışı ve işlem türleri",
      metin: md(`
Lawrence'ın en sık işe yarayan iki deseni:

**İş akışı adımları.** "Görevli günlük menüyü hazırlar, diyetisyen onaylar, menü yayınlanır." İlk akla gelen bölme "önce hazırlama ekranının tamamı" olur; ama o zaman akış uzun süre yarım kalır. Daha iyisi akışın **başını ve sonunu bağlayan** ince bir dilimdir: görevli menüyü hazırlar ve doğrudan yayınlar. Onay adımı ayrı bir story olarak sonra eklenir.

**İşlem türleri (CRUD).** "Görevli menüyü yönetir" story'sindeki **yönet** fiili oluşturma, görme, güncelleme ve silmeyi saklar. Her biri ayrı değer taşır; belki ilk sürümde silme hiç gerekmez.

> **Sahada:** "Yönet", "işle", "düzenle", "takip et" gibi geniş fiiller Elif'in refinement'ta ilk baktığı yerdir. "Bakiyeyi yönet" içinden yükleme, görme, iade ve aktarma çıktı; iade ve aktarma iki Sprint sonraya kaldı.
`),
      dene: [p("is-akisi"), p("crud")],
    },
    {
      baslik: "Basit/karmaşık, performans, büyük çaba",
      metin: md(`
Üç desen daha:

**Basit/karmaşık.** Konuşmada "peki şu durumda?" soruları story'yi büyütmeye başlayınca dur: en basit çalışan hâl ilk story olur; grup siparişi, özel diyet gibi karmaşık durumlar sonraki story'ler olur.

**Ertelenen performans.** "Önce çalıştır, sonra hızlandır." İlk dilim pilot yemekhanede 50 öğrenciyle çalışır; 5000 öğrenciye ölçeklemek ayrı story olur. Dikkat: öğle saatinde zaten çökecekse bu erteleme kabul edilemez. Karar bilinçli verilir.

**Büyük çaba.** Bazı story'lerde ilk parça altyapıyı getirdiği için diğerlerinden büyüktür: ilk ödeme yöntemi ödeme altyapısını kurar, ikinci ve üçüncü çok daha küçüktür. Lawrence önce **herhangi bir** yöntemi yapmayı, kalanları sonra eklemeyi önerir. 5. ünitedeki "iki tahmin" durumunun bölme hâlidir.
`),
      dene: [p("basit-once"), p("performans")],
    },
    {
      baslik: "Epic'ten story'ye: nerede durulur?",
      metin: md(`
Bölme her seviyede olur ama sorular değişir:

| Seviye | Soru | Araç |
|---|---|---|
| Epic → feature | Hangi yetenekler bu hedefe katkı yapar? | Impact mapping (3. ünite) |
| Feature → story | Bu yeteneğin en ince çalışan dilimi hangisi? | Story map, SPIDR, Lawrence |
| Story → task | Takım bu dilimi nasıl yapacak? | Sprint Planning |

**Ne zaman durulur?** Amaç en küçük parça değildir. Story değer taşıyorsa, test edilebiliyorsa ve Sprint'te birkaç günde bitebiliyorsa yeterince küçüktür. Daha da küçültmek story'yi task'a çevirir (5. ünite).

**Kim böler?** Yalnızca Product Owner değil. Product Owner değeri, Developers teknik riski ve ortak altyapıyı bilir; hangi dilimin gerçekten bağımsız ve küçük olduğunu çoğu zaman Developers söyler. En iyi bölmeler refinement'ta birlikte bulunur.

> **Sahada:** "Bekleme süresini yarıya indir" epic'i Teknik Liderlik'te üç feature'a ayrıldı: önceden sipariş, hazır olunca bildirim, kalabalık saat göstergesi. Squad refinement'ta önceden siparişi altı story'ye böldü; ilki iki günlüktü.
`),
      dene: [p("epic-feature"), p("kim-boler")],
    },
  ],
  test: [
    p("sprint-sonu"), p("dikey-sec"), p("rules"), p("data"), p("en-iyi-bolme"), p("yonet-kelimesi"), p("buyuk-caba"),
    p("yeterince-kucuk"),
  ],
};
