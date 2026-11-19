import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u12-${ad}`;

export const UNITE_12: Ders = {
  hafta: 12,
  baslik: "Sürüm Planlama ve Yol Haritası",
  ozet: "Bir backlog'dan gerçekçi bir sürüm aralığı çıkar: MVP, MMF ve MMP; story map'ten sürüm planı; burnup ve tahmin aralığı; Now-Next-Later ve sonuç odaklı yol haritası; çok takımlı backlog'a köprü.",
  bolumler: [
    {
      baslik: "MVP, MMF, MMP",
      metin: md(`
Üç kısaltma sık karışır:

| Kavram | Odak | Squad'dan örnek |
|---|---|---|
| **MVP** (minimum viable product) | **Öğrenme** | Bir hafta boyunca sipariş formu; görevli siparişleri elle hazırlıyor |
| **MMF** (minimum marketable feature) | **Değer** | "Tek menüyü önceden sipariş et ve sıra numarasıyla teslim al" |
| **MMP** (minimum marketable product) | **Pazar** | Önceden sipariş, bildirim ve bakiyeyle ilk yayın |

Eric Ries *The Lean Startup* (2011) kitabında MVP'yi, **en az çabayla en çok doğrulanmış öğrenmeyi** sağlayan sürüm olarak tanımlar. MVP bir ürün sürümü olmak zorunda bile değildir: yukarıdaki form, arkasında hiç yazılım olmadan "öğrenciler önceden sipariş verir mi?" sorusunu cevaplar.

MMF fikri Mark Denne ve Jane Cleland-Huang'ın *Software by Numbers* (2003) kitabından gelir: değeri tek başına yayınlanabilen parçalar hâlinde erken almak.
`),
      dene: [p("mvp-nedir"), p("mmf")],
    },
    {
      baslik: "Story map'ten sürüm planına",
      metin: md(`
3. ünitedeki story map sürüm planının en doğal aracıdır. Omurganın altına **yatay çizgiler** çekilir; her çizginin üstü bir sürümdür.

İlk çizginin kuralı: **her etkinlikten en az bir kart** kalır. Sipariş verip teslim alamayan öğrenci bir şey kazanmaz; ilk sürüm her adımın en ince hâlinden oluşan bir yürüyen iskelettir. Derinlik (ikinci ödeme yolu, grup siparişi, alerjen filtresi) sonraki sürümlere kalır.

> **Sahada:** Sürüm 1: menüyü gör, tek menü seç, bakiyeden öde, sıra numarasıyla teslim al (32 puan). Sürüm 2: kartla yükleme, hazır bildirimi, iptal. Sürüm 3: doluluk göstergesi, alerjen filtresi.
`),
      dene: [p("map-surum")],
    },
    {
      baslik: "Burnup ile sürüm tahmini",
      metin: md(`
**Burnup** grafiğinde iki çizgi vardır: **biten iş** ve **toplam kapsam**. İki çizginin kesişeceği yer sürüm tahminidir.

Burndown'dan farkı kapsam değişikliğini göstermesidir. Burndown'da kapsam artınca çizgi yükselir ve takım geriliyormuş gibi görünür; burnup'ta kapsam çizgisi yükselir, takımın hızı ayrı görünür. "Biz yavaşlamadık, kapsam büyüdü" konuşması ancak burnup'la yapılabilir.

Hesap basittir:

> Kalan Sprint = kalan iş / hız

Kapsam her Sprint büyüyorsa hızdan kapsam artışı düşülür: kalan 72 puan, hız 24, her Sprint 6 puan ekleniyor → 72 / (24 − 6) = 4 Sprint.
`),
      dene: [p("burnup-fark"), p("burnup-hesap")],
    },
    {
      baslik: "Tek tarih değil aralık",
      metin: md(`
Hız Sprint'ten Sprint'e değişir. Tek bir tarih bu belirsizliği gizler ve bir söz gibi duyulur.

Daha dürüst olan **aralık** vermektir:

- **İyimser:** son Sprint'lerin en yüksek hızıyla
- **Kötümser:** en düşük hızıyla

Kalan 90 puan, hız 18 ile 30 arasında → "3 ile 5 Sprint arası".

**Monte Carlo** bir adım daha ileri gider: geçmiş Sprint'lerin hızlarından rastgele seçerek binlerce olası gelecek dener ve sonuçların dağılımını okur. Cümle şuna dönüşür: "%85 olasılıkla 5 Sprint içinde." Agile ve Scrum pratiğinde aynı hesabı günlük throughput'la yapmıştın.

[[G-S12-01]]
`),
      dene: [p("neden-aralik"), p("aralik-hesap")],
      lab: "surum",
    },
    {
      baslik: "Now-Next-Later",
      metin: md(`
Tarih çizelgesi biçimindeki yol haritaları uzak işlere de kesin tarih yazar ve bu belirsizliği saklar. Janna Bastow'un önerdiği **Now-Next-Later** tarih yerine **zaman ufku** kullanır:

| Şimdi | Sonra | Daha sonra |
|---|---|---|
| Üzerinde çalışılanlar; en ayrıntılı | Sıradakiler; kaba | Fikirler; en kaba, değişmeye açık |

Bu, backlog buzdağının (1. ünite) yol haritasındaki karşılığıdır. "Daha sonra" sütunundaki öğeleri bugün story'lere bölmek, öğrendikçe çöpe gidecek bir yatırımdır.
`),
      dene: [p("nnl")],
    },
    {
      baslik: "Sonuç odaklı yol haritası",
      metin: md(`
Özellik listesi bir **çözümü**, sonuç bir **hedefi** taahhüt eder:

- Özellik: "Q1: önceden sipariş, bildirim ve doluluk göstergesi."
- Sonuç: "Q1: öğle saatinde ortalama bekleme 20 dakikadan 10 dakikaya insin."

Sonuç yazıldığında takım daha iyi bir yol bulursa planı değiştirebilir; belki doluluk göstergesi bildirimden daha çok işe yarar. Özellik ve tarih dolu bir yol haritası ise paydaşlarca söz olarak okunur ve öğrenmeyi cezalandırır: yeni bilgiye göre değişmek "sözü bozmak" gibi görünür.

Bu, 3. ünitedeki impact mapping'in yol haritasındaki karşılığıdır: hedef → aktörler → davranış değişiklikleri → teslimatlar.
`),
      dene: [p("ozellik-taahhut")],
    },
    {
      baslik: "Köprü: çok takımlı backlog",
      metin: md(`
Bu pratik tek bir squad'ın backlog'unu anlattı. Kampüs Yemekhanesi büyüdükçe aynı ürün üzerinde birden çok squad çalışacak.

> **Kaynak ne der:** Aynı ürün üzerinde çalışan birden çok Scrum Takımı aynı Product Goal'i, aynı Product Backlog'u ve aynı Product Owner'ı paylaşır.

Bu cümle kolay yazılır, zor uygulanır: tek backlog'u kim nasıl sıralar, takımlar arası bağımlılıklar nasıl görünür olur, birlikte nasıl planlanır? SAFe'teki **PI Planning**, LeSS ve Nexus gibi çerçeveler bu soruların farklı cevaplarıdır.

Bunlar Agile dizisinin üçüncü pratiği **Ölçekli Agile**'ın konusu. Buradan oraya taşıyacağın en önemli şey: çok takımlı bir backlog da tek takımlı bir backlog kadar **sıralı, dikey dilimli ve konuşulmuş** olmalıdır; ölçek bu temelleri değiştirmez, yalnızca zorlaştırır.
`),
      dene: [p("tek-backlog")],
    },
  ],
  test: [
    p("mvp-mmp"), p("ilk-surum"), p("kapsam-artis"), p("monte-carlo"), p("later-ayrinti"), p("sonuc-odak"), p("pi-planning"),
  ],
};
