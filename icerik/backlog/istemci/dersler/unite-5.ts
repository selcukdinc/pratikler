import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u5-${ad}`;

export const UNITE_5: Ders = {
  hafta: 5,
  baslik: "INVEST",
  ozet: "Bill Wake'in iyi bir story için önerdiği altı özelliği tek tek incele: bağımsız, konuşulabilir, değerli, tahmin edilebilir, küçük, test edilebilir. Her harfin bozulduğu story'yi tanı, nasıl düzeleceğini gör ve INVEST'i bir kapı bekçisine çevirmeden kullan.",
  bolumler: [
    {
      baslik: "Altı harf, bir soru listesi",
      metin: md(`
Bill Wake 2003'te "INVEST in Good Stories, and SMART Tasks" yazısında iyi bir story'nin altı özelliğini bir kısaltmada topladı:

| Harf | İngilizcesi | Sorduğu soru |
|---|---|---|
| I | Independent | Başka story'lere sıkı bağlı mı? |
| N | Negotiable | Ayrıntılar konuşmaya açık mı, yoksa dikte mi ediliyor? |
| V | Valuable | Kullanıcıya ya da müşteriye bir değer veriyor mu? |
| E | Estimable | Takım büyüklüğünü kestirebiliyor mu? |
| S | Small | Sprint'te birkaç günde bitebilir mi? |
| T | Testable | Ne zaman tamam olduğunu gösteren bir test yazılabilir mi? |

Aynı yazıda Wake task'lar için başka bir kısaltma önerdi: **SMART** (Specific, Measurable, Achievable, Relevant, Time-boxed). Story kullanıcının dilindedir, task takımın; ölçüleri de farklıdır.

INVEST bütün backlog'u değil **tek bir story'yi** değerlendirir. Backlog için DEEP vardı (1. ünite).

> **Sahada:** INVEST en iyi bir **soru listesi** olarak çalışır. Refinement'ta bir story'ye bakıp "En zayıf harfi hangisi?" diye sormak, bir kontrol listesini tek tek işaretlemekten çok daha verimli bir konuşma başlatır.

[[G-S5-01]]
`),
      dene: [p("kim"), p("harfler"), p("smart")],
      lab: "invest",
    },
    {
      baslik: "I: Independent",
      metin: md(`
Bağımsız story'ler **herhangi bir sırada** yapılabilir. Bu, Product Owner'a sıralama özgürlüğü verir ve tahmini kolaylaştırır.

En sık bağımlılık, ortak bir altyapıyı paylaşan story'ler arasında çıkar. "Kartla ödeme" ve "QR ile ödeme" story'lerinden hangisi önce yapılırsa ödeme altyapısını o kurar. Mike Cohn *User Stories Applied*'da üç yol gösterir:

1. Bağımlı story'leri **birleştirmek** (yalnız birleşik story hâlâ küçükse).
2. Story'leri **farklı bölmek**: "ilk ödeme yöntemi" ve "ek ödeme yöntemleri" gibi.
3. İkisi de olmuyorsa karta **iki tahmin** yazmak: önce yapılırsa 5, sonra yapılırsa 3.

Daha kötüsü **zincirdir**: beş story her biri bir öncekini bekler. Bir gecikme zinciri durdurur, Product Owner sırayı değiştiremez. Zincirin çaresi çoğu zaman bölmeyi baştan düşünmektir: katmanlara değil, her biri uçtan uca çalışan dilimlere (7. ünite).

> **Sahada:** Bağımlılık her zaman yok edilemez. Görünür kılmak (araçta bağlantı, sıralamada yan yana) ve birlikte planlamak çoğu zaman yeterlidir.
`),
      dene: [p("anlam"), p("odeme-turleri")],
    },
    {
      baslik: "N: Negotiable",
      metin: md(`
Story bir **sözleşme** değildir. Kart ihtiyacı anlatır; nasıl karşılanacağı konuşmada şekillenir (4. ünitedeki 3C).

Negotiable harfini bozan en tipik story, çözümü dikte edendir:

> **Sahada:** "Bir yemekhane müdürü olarak porsiyon raporunu Excel'de, mavi başlıklı, 12 punto ve A4 yatay istiyorum, böylece yarınki pişirmeyi planlarım."

Rol ve fayda iyi; ama biçim ayrıntıları konuşmayı kapatıyor. Asıl ihtiyaç "yarın kaç porsiyon pişireceğimi bilmek". Takım belki her sabah müdürün telefonuna gelen tek satırlık bir özetin daha işe yarayacağını önerecek; ama story bu konuşmaya yer bırakmıyor.

Negotiable "ayrıntı yazma" demek değildir. Konuşmadan çıkan kararlar kabul kriteri ve not olarak yazılır. Harf yalnızca bu ayrıntıların konuşmadan **önce** dondurulmaması gerektiğini söyler.
`),
      dene: [p("negotiable-anlam"), p("dikte")],
    },
    {
      baslik: "V: Valuable",
      metin: md(`
Story **kullanıcıya ya da müşteriye** bir değer vermelidir: ürünü kullanan ya da parasını ödeyen birine.

Valuable harfini en sık bozan şey **katmanlara bölmektir**: "Sipariş tablosunu oluştur", "Sipariş servisini yaz", "Sipariş ekranını yap". Üçü birden bitmeden kimse bir şey alamaz. Her biri tek başına "ilerleme" gibi görünür ama değer yoktur, entegrasyon riski en sona kalır.

Teknik işler de değer taşır, ama **dolaylı**. Kerem'in "loglama altyapısını değiştir" işi doğrudan görünmez; değeri yazılınca görünür olur:

> **Sahada:** "Gece oluşan hataları sabah dörtte değil beş dakika içinde fark edelim; öğle saatindeki kesintiler kısalsın." Elif bu cümleyle loglama işini bir yeni özelliğin yanında tartabilir.

Bu yüzden "Bir geliştirici olarak ..." diye yazmak yerine, teknik işin kimin hangi sorununu çözdüğünü yaz. Story olmayan işlerin backlog'daki yeri 8. ünitede.
`),
      dene: [p("valuable-anlam"), p("katman")],
    },
    {
      baslik: "E: Estimable",
      metin: md(`
Takım bir story'nin büyüklüğünü kestiremiyorsa, Mike Cohn'a göre üç nedenden biri vardır:

| Neden | Squad'dan örnek | Çare |
|---|---|---|
| **Alan bilgisi eksik** | Burs indirimi kurallarını kimse bilmiyor | Kuralları bilen paydaşla kısa bir konuşma |
| **Teknik bilgi eksik** | Eski kart okuyucu sistemiyle kimse çalışmamış | Time-box'lı bir spike |
| **Story çok büyük** | "Öğrenciler yemekhaneyle ilgili her şeyi uygulamadan yapsın" | Bölmek |

Doğru çareyi seçmek önemlidir. Alan bilgisi eksikse spike yapmak boşa emektir; burs ofisiyle 15 dakika konuşmak yeter. Teknik bilgi eksikse konuşma yetmez; iki günlük bir araştırma (8. ünite) gerekir.

> **Sahada:** Planning Poker'da kartlar 3 ile 21 arasında dağılıyorsa (9. ünite), story çoğu zaman tahmin edilebilir değildir. En yüksek ve en düşük kartı açanların gerekçesi, üç nedenden hangisinin geçerli olduğunu ortaya çıkarır.
`),
      dene: [p("estimable-anlam"), p("spike")],
    },
    {
      baslik: "S: Small",
      metin: md(`
Story en azından bir Sprint'e **sığmalıdır**. Wake'in 2003'teki ölçüsü "en fazla birkaç kişi-hafta" idi; Sprint'ler kısaldıkça ölçü de küçüldü. Bugün sahada iyi bir ölçü, iki haftalık bir Sprint'te birkaç story'nin rahatça bitebilmesidir: story başına çoğu zaman bir ile üç gün.

Küçük story'lerin Sprint'e etkisi büyüktür. Büyük story'ler Sprint'in sonuna yığılır, "devam ediyor" görünür, son gün ya biter ya taşar. Küçük story'ler Sprint boyunca biter: burndown düzenli iner, test erken başlar, sorun erken görünür.

Ama bir sınır var. Bir iki saatlik parçalara bölünmüş story'ler değerini kaybeder ve **task**'a dönüşür; her birinin konuşma, kabul ve izleme yükü toplam işi artırır.

> **Sahada:** Squad'ın kuralı: "Hiçbir story 5 günden uzun sürmesin; hiçbir story de kullanıcıya bir şey söylemeyen bir adım olmasın." İkisi arasındaki alanı bölme desenleri (7. ünite) doldurur.
`),
      dene: [p("ne-kadar"), p("cok-kucuk")],
    },
    {
      baslik: "T: Testable",
      metin: md(`
Ne zaman tamam olduğunu kimsenin söyleyemediği bir story **bitemez**. "Uygulama öğrencilere kullanıcı dostu gelmeli" her Sprint Review'da tartışma çıkarır.

Test edilebilir hâle getirmek bir **ölçü** ve bir **koşul** ister:

- "Ödeme hızlı olmalı" → "Öğle saatinde ödemelerin %95'i 2 saniyede tamamlanmalı."
- "Kullanıcı dostu olmalı" → "İlk kez kullanan öğrencilerin 9'da 8'i yardımsız sipariş verebilmeli."

Testable harfinin gizli bir faydası daha var: test yazmaya çalışmak belirsizliği açığa çıkarır. "Hangi durumda başarılı sayılacak?" sorusunun cevabı yoksa story henüz yeterince konuşulmamıştır. Bu yüzden kabul kriterleri refinement'ta yazılır (6. ünite).
`),
      dene: [p("testable-anlam"), p("olcu")],
    },
    {
      baslik: "Harfler arasındaki gerilim",
      metin: md(`
Altı harf her zaman aynı yöne çekmez:

- **Small ve Valuable:** küçülttükçe değer taşıyan bir parça bırakmak zorlaşır. En kolay küçültme yatay bölmedir, ama değeri öldürür. 7. ünitedeki desenler tam bu gerilimi çözmek içindir.
- **Independent ve Small:** küçük parçalar birbirine daha çok bağlanabilir.
- **Negotiable ve Testable:** ayrıntı eklemek testi kolaylaştırır ama konuşmayı erken kapatabilir.

Bu yüzden INVEST mutlak bir kural değil, bir **yön** gösterir. Bir story yalnızca Independent'ta zayıfsa, bağımlılığı görünür yapıp sırayı ona göre kurmak çoğu zaman yeterlidir.

En büyük tuzak INVEST'i bir **kapıya** çevirmektir: "Altı harfin hepsi işaretlenmeden story Sprint'e alınamaz." İşaretlemek amaç olur, konuşma azalır, story'ler onay kuyruğunda bekler. Aynı tuzak Definition of Ready'de de var (11. ünite).

> **Sahada:** Teknik Liderlik'in onayına giden story'lerde Elif INVEST'i bir form olarak değil, "en zayıf harf ve neden" diye tek satırlık bir not olarak yazıyor. Onay konuşması o harfle başlıyor.
`),
      dene: [p("kucuk-degerli"), p("kapi")],
    },
  ],
  test: [
    p("kontrol-listesi"), p("zincir"), p("ayrinti-yasak"), p("teknik-is"), p("alan-bilgisi"), p("neden-kucuk"),
    p("test-yazmak"), p("en-onemli"),
  ],
};
