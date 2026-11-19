import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u8-${ad}`;

export const UNITE_8: Ders = {
  hafta: 8,
  baslik: "Story Olmayan İşler",
  ozet: "Backlog yalnızca story'lerden oluşmaz: fonksiyonel olmayan gereksinimleri doğru yere yaz, teknik işlerin değerini görünür kıl, spike'ı time-box'la, hataları ve teknik borcu backlog'da yönet.",
  bolumler: [
    {
      baslik: "Fonksiyonel olmayan gereksinimler",
      metin: md(`
Fonksiyonel gereksinim sistemin **ne yaptığını**, fonksiyonel olmayan gereksinim (NFR) **nasıl yaptığını** anlatır: hız, güvenlik, erişilebilirlik, ölçeklenebilirlik, kullanılabilirlik, bakım kolaylığı. İngilizce adları çoğunlukla -ility ile bittiği için gayriresmî olarak **"ilities"** diye anılırlar.

| Fonksiyonel | Fonksiyonel olmayan |
|---|---|
| Öğrenci menüyü görür. | Menü 1 saniyede açılır. |
| Öğrenci kartla bakiye yükler. | Kart bilgisi uygulamada saklanmaz. |
| Öğrenci yemek ayırtır. | Ayırtma ekranı ekran okuyucuyla kullanılabilir. |

NFR'lerin tehlikesi **görünmez** olmalarıdır. Story'lerde yazılmazsa "zaten öyle olmalı" diye varsayılır ve kimse planlamaz.

> **Sahada:** Squad'ın ilk sürümünde kimse "öğle saatinde 3000 öğrenci aynı anda sipariş verirse" diye sormadı. İlk gerçek öğle saatinde sistem yavaşladı; sorun bir anda herkesin sorunu oldu.
`),
      dene: [p("tanim"), p("ilities")],
    },
    {
      baslik: "NFR nereye yazılır?",
      metin: md(`
Bir NFR backlog'da üç yerden birine yazılır. Hangisi olduğunu iki soru belirler: **kaç öğeyi ilgilendiriyor** ve **kendisi iş gerektiriyor mu**?

| Durum | Yer | Örnek |
|---|---|---|
| Yalnızca bir story'yi ilgilendiriyor | O story'nin **kabul kriteri** | "Sipariş onayı 2 saniyede görünür." |
| Her öğe için geçerli | **Definition of Done** | "Her yeni ekran WCAG 2.1 AA denetiminden geçer." |
| Kendisi iş gerektiriyor | **Ayrı bir backlog öğesi** | "Öğle saatinde 3000 eş zamanlı kullanıcı için önbellek katmanı kur." |

En sık hata, her ekranı ilgilendiren bir kalite ölçütünü ayrı bir story'ye koymaktır: "erişilebilirlik story'si" Sprint'ler sonra gelir ve bütün ekranları yeniden açmayı gerektirir.

[[G-S8-01]]
`),
      dene: [p("uc-yer"), p("dod-mu"), p("ayri-oge")],
      lab: "nereye",
    },
    {
      baslik: "Teknik işler ve enabler'lar",
      metin: md(`
Altyapı, mimari, güncelleme ve araştırma işleri kullanıcıya doğrudan görünmez ama sonraki değeri mümkün kılar. SAFe bunlara **enabler** der ve dört türe ayırır: keşif (exploration), mimari, altyapı ve uyum (compliance).

Teknik bir öğenin Product Owner tarafından sıralanabilmesi için **değerinin, riskinin ve tarihinin** yazılması gerekir:

> **Sahada:** Kerem'in ilk yazdığı: "Ödeme kütüphanesini güncelle." Elif bunu sıralayamadı. İkinci yazdığı: "Ödeme kütüphanesini yeni sürüme geçir; eski sürüm Mart'ta güvenlik desteğini bitiriyor, kart yüklemesi durabilir." Öğe bir hafta içinde sıranın üstüne çıktı.

Birçok takım her Sprint kapasitenin bir payını (ör. %15-20) teknik işlere, bakıma ya da borca ayırır. Bu, Product Owner'la varılan bir **anlaşmadır**; işler yine backlog'da görünür ve sıralıdır, gizli bir "takım zamanı" değildir.
`),
      dene: [p("enabler"), p("deger-yaz")],
    },
    {
      baslik: "Spike",
      metin: md(`
**Spike** XP'den gelen bir terimdir: bilinmeyen bir şeyi öğrenmek için kısa, sınırlı bir deneme. 5. ünitede gördüğümüz "teknik bilgi eksik" durumunun çaresidir.

Spike'ın üç kuralı:

1. **Time-box'lıdır.** Araştırmanın doğal bir sonu yoktur; iki gün gibi bir sınır konur ve sonunda karar verilir.
2. **Çıktısı bilgidir.** Çalışan bir özellik değil: bir karar, bir tahmin, bir prototip. Spike kodu çoğu zaman atılır ya da yeniden yazılır.
3. **Bir soruyu cevaplar.** "Kart okuyucu sistemine bak" iyi bir spike değildir; "Eski kart okuyucudan bakiye okunabilir mi, okunursa story kaç puan?" iyidir.

> **Sahada:** Squad'ın iki günlük kart okuyucu spike'ının çıktısı tek sayfaydı: okuyucunun bir test arayüzü var, bakiye okunabiliyor ama yazılamıyor; bu yüzden "kartla yükleme" story'si ikiye bölündü ve ilki 5 puan olarak tahmin edildi.

Spike istisna olmalıdır. Her üç story'den biri spike'la başlıyorsa, belirsizlik konuşma ve küçük denemelerle değil ayrı araştırmalarla erteleniyor olabilir; çoğu soru 15 dakikalık bir konuşmayla cevaplanır.
`),
      dene: [p("spike-tanim"), p("timebox"), p("cikti")],
    },
    {
      baslik: "Hatalar",
      metin: md(`
Bir hatanın nereye gideceği, **ne zaman ve nerede** bulunduğuna bağlıdır:

- **Sprint içinde, bitmemiş bir story'de.** Hata ayrı bir iş değil, işin parçasıdır; story düzeltilmeden Done olmaz. Ayrı hata öğesi açmak story'yi "bitmiş" gösterip kaliteyi saklar.
- **Yayında, acil değil.** Product Backlog'a bir öğe olarak girer ve etkisine göre sıralanır. Kuruşların yanlış yuvarlanması bir yeni özelliğin önüne de geçebilir, arkasında da kalabilir.
- **Yayında, kritik.** Bekletilmez. Sprint Backlog Sprint boyunca güncellenebilir; Sprint Goal tehlikeye girerse Product Owner'la kapsam konuşulur.

> **Kaynak ne der:** Scrum Rehberi'ne göre Product Backlog ürünü iyileştirmek için gereken her şeyin tek kaynağıdır; ayrı bir "hata listesi" öngörmez. Sprint'i iptal etme yetkisi yalnızca Product Owner'dadır ve yalnızca Sprint Goal eskidiğinde kullanılır.
`),
      dene: [p("sprint-ici"), p("kacan")],
    },
    {
      baslik: "Teknik borç",
      metin: md(`
Ward Cunningham 1992'de **teknik borç** benzetmesini kullandı: bugün alınan kısayollar ileride **faiz** olarak geri ödenir: yavaşlık, hata, her değişiklikte artan çaba.

Martin Fowler borcu iki eksende ayırır:

| | Pervasız (reckless) | İhtiyatlı (prudent) |
|---|---|---|
| **Bilinçli** | "Tasarıma vaktimiz yok." | "Şimdi teslim edip sonra düzelteceğiz." |
| **Fark edilmeden** | "Katman da ne?" | "Şimdi nasıl yapmamız gerektiğini anladık." |

Borcu yönetmenin ilk adımı onu **görünür** yapmaktır. Görünmeyen borç sıralanamaz:

> **Sahada:** "Ödeme modülünde otomatik test yok; her değişiklik yarım gün elle test istiyor ve son üç Sprint'te iki hata kaçtı." Elif bu cümleyle borcun bedelini bir yeni özelliğin yanında tartabildi.

Borcun en sinsi kaynağı zayıf bir **Definition of Done**'dır. Test, inceleme ya da belgeleme DoD'de yoksa her biten öğe biraz borç bırakır. Agile ve Scrum pratiğindeki Sprint Simülatörü'nde de DoD'de test maddesi yokken borç her Sprint artıyordu.
`),
      dene: [p("koken"), p("gorunur"), p("fowler")],
    },
  ],
  test: [
    p("unutulur"), p("kabul-kriteri"), p("teknik-yuzde"), p("cok-spike"), p("acil"), p("borc-dod"),
  ],
};
