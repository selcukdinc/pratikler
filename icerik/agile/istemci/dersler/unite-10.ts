import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u10-${ad}`;

export const UNITE_10: Ders = {
  hafta: 10,
  baslik: "Kanban ve Scrum",
  ozet: "Kanban Rehberi'nin üç pratiğini, iş akışının tanımını, WIP sınırlarını ve dört akış ölçütünü öğren. Bir Scrum takımının Kanban'ı nasıl kullandığını, hangi işe Scrum'ın, hangisine Kanban'ın uyduğunu ve acil işin servis sınıflarıyla nasıl yönetildiğini gör.",
  bolumler: [
    {
      baslik: "Kanban nedir?",
      metin: md(`
Ad Japoncada "görsel kart" demektir ve Toyota Üretim Sistemi'nden gelir: bir istasyon, bir sonraki istasyon **kart göndererek** parça çeker (3. ünite, çekme sistemi). Yazılımda Kanban yöntemini 2000'lerin ortasında David J. Anderson yaygınlaştırdı.

> **Rehber ne der:** Kanban Rehberi (Vacanti ve Coleman) Kanban'ı, **görsel ve çekmeye dayalı bir sistemle değer akışını en iyileme stratejisi** olarak tanımlar. Üç pratiği vardır: **iş akışını tanımlamak ve görselleştirmek**, **iş akışındaki öğeleri etkin yönetmek** ve **iş akışını iyileştirmek**.

Kanban'da Sprint, Sprint Goal, Product Owner ya da Scrum Master yoktur. Yöntem **var olan süreçle ve rollerle başlar** ve onu adım adım iyileştirir; bu yüzden takımın üstüne giydirilen bir çerçeve değil, mevcut işe uygulanan bir mercektir.
`),
      dene: [p("kanban-tanim"), p("uc-pratik")],
    },
    {
      baslik: "İş akışının tanımı ve SLE",
      metin: md(`
Kanban Rehberi'ne göre takım, **Definition of Workflow** (iş akışının tanımı) adıyla şunları açıkça yazar:

- Akıştaki **iş öğesinin** ne olduğu (hikâye, hata, destek isteği...)
- İşin **başladığı** ve **bittiği** an
- Öğelerin geçtiği **aşamalar**
- **WIP'in nasıl kontrol edildiği**
- Öğelerin aşamalar arasında nasıl ilerlediğine dair **açık kurallar**
- **Servis düzeyi beklentisi** (service level expectation, SLE)

**SLE**, bir öğenin başladıktan sonra ne kadar sürede bitmesinin beklendiğini olasılıkla söyler: "Öğelerin %85'i başladıktan sonra 10 gün içinde biter." Geçmiş cycle time'lardan çıkar ve iş öğesinin yaşıyla birlikte kullanılır: yaşı SLE'ye yaklaşan öğe önce konuşulur.

**Açık kural** örneği: Squad panosunun Bitti sütununun üstüne "Hata kaydı, hatayı yakalayan otomatik testle birlikte kapanır" yazdı. Kural herkesin göreceği yerde durduğu için kimse kendi varsayımına göre çalışmaz.
`),
      dene: [p("dow-icerik"), p("sle"), p("acik-kural")],
    },
    {
      baslik: "WIP sınırı ve çekme",
      metin: md(`
Kanban'ın en güçlü aracı **WIP sınırıdır**: bir aşamada aynı anda kaç öğe bulunabileceğini söyler. Amacı başlanan iş sayısını sınırlayıp **işi bitirmeye odaklanmak** ve **darboğazı görünür kılmaktır**. 3. ünitedeki gibi WIP azalınca, aynı throughput'ta cycle time kısalır.

Sınır dolunca ne olur? Squad'ın Test sütununun sınırı 3 ve sütun dolu. Ayşe geliştirmedeki işini bitirdi ama Test'e taşıyamıyor. Doğru hamle yeni bir işe başlamak değil, **Test'teki işlerden birine yardım etmektir**: "başlamayı bırak, bitirmeye başla."

Sınırın ayarı deneyseldir: çok düşükse kişiler sık sık boşta kalır, çok yüksekse sınırın hiçbir etkisi olmaz. Takım bir değerle başlar ve gözleyerek ayarlar.

Talep sürekli kapasiteden fazlaysa WIP sınırı talebi azaltmaz; fazla istek **Hazır** kuyruğunda birikir ve "hangisi önce?" kararı görünür hâle gelir. O karar PO'nundur, takımın değil.

[[G-S10-01]]
`),
      dene: [p("wip-amac"), p("wip-dolu"), p("talep-fazla")],
      lab: "kanban",
    },
    {
      baslik: "Dört akış ölçütü",
      metin: md(`
Kanban Rehberi dört ölçütü **zorunlu** sayar; 9. ünitede gördüklerin:

| Ölçüt | Soru |
|---|---|
| **WIP** | Şu an kaç iş açık? |
| **Throughput** | Birim zamanda kaç iş bitiyor? |
| **İş öğesi yaşı** | Açık işler ne kadar süredir sürüyor? |
| **Cycle time** | Biten işler başladıktan kaç gün sonra bitti? |

Hiçbiri story point istemez: öğeler **sayılır**. Little yasası aralarındaki bağı verir: haftada ortalama 8 öğe biten ve ortalama cycle time'ı 2 hafta olan bir takımda ortalama WIP 16'dır.
`),
      dene: [p("dort-olcut"), p("little-kanban")],
    },
    {
      baslik: "Scrum takımlarında Kanban",
      metin: md(`
Scrum.org ile Kanban topluluğunun birlikte yazdığı **Scrum Takımları için Kanban Rehberi**, Kanban'ı Scrum'ın yerine değil **yanına** koyar. Takım Scrum'ı bırakmaz; iş akışını tanımlar, WIP'i sınırlar ve akış ölçütlerini Scrum etkinliklerinde kullanır:

- **Sprint Planning:** throughput geçmişi "ne kadar iş alabiliriz?" sorusuna puandan daha sağlam bir cevap verir.
- **Daily Scrum:** panoda devam eden işlerin **yaşına** bakılır; SLE'yi aşmak üzere olan öğe önce konuşulur.
- **Sprint Review:** throughput ve cycle time, paydaşlara tahmin aralığı vermeye yardım eder.
- **Retrospective:** WIP sınırları ve açık kurallar burada güncellenir.

Sahada Scrum ile Kanban öğelerini karıştıran takımlar için **Scrumban** adı da kullanılır; resmî bir tanımı yoktur, her takımda başka bir şey anlatabilir.
`),
      dene: [p("birlikte"), p("daily-yas")],
    },
    {
      baslik: "Hangi işe Scrum, hangi işe Kanban?",
      metin: md(`
Scrum ile Kanban **rakip değildir**; aynı takım ikisini birlikte kullanabilir. Yine de işin doğası hangisinin ağır basacağını belirler:

- **Önceden bilinmeyen, küçük, acil istekler** (bilgi işlem destek ekibi, canlı sistem işletimi): iki haftalık bir plan gün içinde eskir. Kanban'ın sürekli akışı, WIP sınırı ve cycle time takibi daha uygundur.
- **Belirsizliği yüksek yeni ürün, paydaşlarla düzenli denetim gerektiren iş:** Sprint Goal'ün verdiği odak ve Review'un ritmi değerlidir. Scrum seçilir, istenirse WIP sınırı ve cycle time gibi akış pratikleri eklenir.

Squad'ın kendisi ikisini de yaşar: Kampüs Yemekhanesi uygulamasını Scrum'la geliştirir; ama Kerem'in yürüttüğü canlı sistem destek istekleri ayrı bir Kanban akışında, Sprint'e kapasite payı ayrılarak yönetilir.

[[G-S10-02]]
`),
      dene: [p("destek"), p("urun"), p("rakip-degil")],
      lab: "scrum-kanban",
    },
    {
      baslik: "Servis sınıfları ve gecikme maliyeti",
      metin: md(`
Her işin beklemesi aynı pahalılıkta değildir. **Servis sınıfları**, işlerin **gecikme maliyetinin zamanla farklı biçimde değiştiği** fikrine dayanır. Sahada yaygın dört sınıf:

| Sınıf | Gecikme maliyeti | Örnek |
|---|---|---|
| **Hızlandırılmış** (expedite) | Hemen ve yüksek | Ödeme sistemi çöktü |
| **Sabit tarihli** | Belirli bir tarihten sonra birden yükselir | Güz dönemi açılmadan yeni şubenin menüsü hazır olmalı |
| **Standart** | Zamanla düzgün artar | Yeni bir menü filtresi |
| **Ertelenebilir** | Uzun süre düşük | Ayar ekranının görünümünü yenilemek |

Hızlandırılmış iş sıradaki her şeyin önüne geçer ve WIP sınırını aşabilir; bu yüzden sayısı **sıkı sınırlanır** (çoğu takımda aynı anda bir tane). Her iş "acil" etiketiyle gelirse sınıf anlamını yitirir. Bu sınıflar Kanban Rehberi'nin değil, Kanban yönteminin sahadaki uygulamalarıdır.
`),
      dene: [p("hizlandirilmis"), p("sabit-tarih")],
    },
  ],
  test: [
    p("rol-yok"), p("kanban-koken"), p("wip-cok-dusuk"), p("puan-yok"), p("scrumban"),
    p("gecikme-maliyeti"), p("acik-kural"), p("talep-fazla"), p("sle"), p("destek"),
  ],
};
