import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u12-${ad}`;

export const UNITE_12: Ders = {
  hafta: 12,
  baslik: "Anti-pattern'ler ve Zor Durumlar",
  ozet: "Sahadaki Scrum çoğu zaman kitaptaki gibi değildir: atlanan Retro'lar, Sprint 0, onaya giden story'ler, görev dağıtan Scrum Master, Sprint'in ortasında gelen yönetici, on dört kişilik squad, sabit kapsamlı sözleşme. Her birini Rehber'le karşılaştır, dallanan senaryolarda Scrum Master olarak hamleni seç ve squad'ın günlüğünde anti-pattern avına çık.",
  bolumler: [
    {
      baslik: "ScrumBut: \"Scrum yapıyoruz ama...\"",
      metin: md(`
**ScrumBut**, Ken Schwaber'ın adını koyduğu kalıptır: "Scrum kullanıyoruz **ama** Retro yapmıyoruz, **çünkü** zamanımız yok." Atlanan parça çoğu zaman tam da bir sorunu görünür kılacak parçadır; atlanınca sorun gizlenir, çözülmez.

> **Rehber ne der:** Scrum çerçevesi burada anlatıldığı gibi **değişmezdir**. Yalnızca parçalarını uygulamak mümkündür, ama sonuç Scrum değildir. Scrum yalnızca bütünüyle var olur ve öteki teknikleri, yöntemleri ve pratikleri barındıran bir kap olarak iyi işler.

Bu yüzden iki tür değişikliği ayırmak gerekir:

| Zenginleştirmek | Eksiltmek |
|---|---|
| DoD'a otomatik test eklemek | Sprint Goal yazmayı bırakmak |
| Daily'de panoyu yürümek | Review'u yalnızca büyük sürümlerden önce yapmak |
| WIP sınırı koymak | Retro'yu "zaman yok" diye atlamak |

> **Sahada:** "Bizim şirket farklı" cümlesi çoğu zaman doğrudur; ama farkı çerçeveyi eksilterek değil, Retro'da konuşup çerçevenin içinde çözerek karşılamak gerekir.
`),
      dene: [p("degismez"), p("scrumbut-tanim")],
    },
    {
      baslik: "Sprint 0, sertleştirme Sprint'i, uzayan Sprint",
      metin: md(`
Üç yaygın "sahte Sprint":

- **Sprint 0:** Yalnızca altyapı, araç seçimi ve belge için açılan ilk Sprint. Rehber'de yoktur; her Sprint bir Sprint Goal ve kullanılabilir bir Increment hedefler. Altyapı, ince bir değer dilimiyle birlikte kurulur: menüyü gösteren ilk ekran ve onu yayına taşıyan hat aynı Sprint'te.
- **Sertleştirme (hardening) Sprint'i:** Birkaç Sprint'te bir yalnızca hata düzeltmek ve entegrasyon testi koşmak için ayrılan Sprint. İhtiyacın kendisi bir belirtidir: Increment'ler her Sprint gerçekten kullanılabilir değil, DoD eksik.
- **Uzayan Sprint:** Hedef yetişmeyince Sprint'e birkaç gün eklemek. Sprint'ler **sabit uzunluktadır**; uzunluğu oynamak ritmi ve tahmin edilebilirliği bozar, sorunu da gizler. Hedef tutmayacaksa Developers kapsamı PO ile görüşür, Sprint biter ve neden Retro'da konuşulur.
`),
      dene: [p("sprint-0"), p("sertlestirme")],
    },
    {
      baslik: "Product Owner sorunları: vekil, komite, onay zinciri",
      metin: md(`
> **Rehber ne der:** Product Owner **tek kişidir, komite değildir**. PO'nun başarılı olabilmesi için bütün organizasyonun onun kararlarına saygı duyması gerekir. Product Backlog'u değiştirmek isteyen PO'yu ikna etmeye çalışır.

Sahada sık görülen üç kalıp:

- **Vekil PO:** Unvanı taşıyan ama karar yetkisi olmayan, yukarıya mesaj taşıyan kişi. Takım her soruda günlerce cevap bekler.
- **Komite:** Sıralamayı birkaç yöneticinin toplantısı yapar; her öncelik bir pazarlığa dönüşür.
- **Onay zinciri:** PO story'yi yazar, başka bir kurulun onayına götürür; onay gelmeden öğe sıraya giremez. Bekleme çoğu zaman haftalardır.

Kimin yazdığı önemli değildir: Rehber'e göre PO Product Backlog işlerini başkasına da yaptırabilir; **hesap verebilir olan yine PO'dur**. Teknik liderlerin mimari bilgisi değerlidir; yeri bir onay kapısı değil, refinement masasıdır.

> **Sahada:** Bekleme süresini ölçmek (öğe kaç gün onayda kaldı?) konuşmayı kişilerden sisteme taşır. Dallanan senaryolardaki "Onaya giden story" bu durumu oynatır.
`),
      dene: [p("onay-zinciri"), p("epic-yazan")],
    },
    {
      baslik: "Scrum Master sorunları",
      metin: md(`
Scrum Master'ın en sık yanlış kullanımları:

- **Proje yöneticisi SM:** Her sabah görev dağıtır, kimin ne yapacağına karar verir, yöneticiye kişi kişi rapor verir. Rehber'e göre Developers kendi işlerini planlar; görev dağıtan SM sahiplenmeyi öldürür.
- **Sekreter SM:** Oda ayırır, tutanak tutar, araçtaki kartları günceller. Bu işler gerekebilir ama SM'nin hesap verebilirliği Scrum'ın etkinliği ve takımın gelişimidir.
- **Scrum polisi:** Kurala uymayanı uyarır ama nedenini anlatmaz.

**Scrum Master'sız takım** da yaygındır. Rehber SM'yi isteğe bağlı saymaz. SM'siz takımlarda Retro'lar biçimselleşir, aynı engeller tekrar eder ve takımla organizasyon arasındaki sorunları kimse üstlenmez. Bu durum en çok, sorunları somut örneklerle görünür kılarak değişir.
`),
      dene: [p("sm-pm"), p("smsiz")],
    },
    {
      baslik: "Sprint'e dışarıdan iş",
      metin: md(`
Sprint'in ortasında bir yönetici geliştiriciye doğrudan iş verir: "Küçük bir şey, bu Sprint'e sığdırın." Rehber'e göre:

- Sprint boyunca **Sprint Goal'ü tehlikeye atan değişiklik yapılmaz**.
- Yeni istekler PO'dan geçer ve Product Backlog'da sıralanır.
- Sprint'i yalnızca **PO** iptal edebilir, o da yalnızca Sprint Goal geçersizleşirse.

SM'nin işi kapıda bekçilik değil, organizasyona Scrum'ı anlatmaktır: yöneticinin isteğinin nereye gideceğini ve ne zaman görüleceğini bilmesi kesintileri azaltır. Kesintiler öngörülebilirse (her Sprint birkaç acil canlı sistem isteği) Planning'de kapasitenin bir kısmı onlara ayrılır ve acil işler Kanban'daki hızlandırılmış sınıf gibi sınırlı ve görünür tutulur.

Dört dallanan senaryoda Scrum Master olarak hamleni seç:

[[G-S12-01]]
`),
      dene: [p("yonetici-ekle"), p("kapasite-payi")],
      lab: "sm-ne-yapar",
    },
    {
      baslik: "Büyük squad ve dağıtık takım",
      metin: md(`
Rehber Scrum Takımı için "genelde 10 kişi ya da daha az" der ve takım çok büyürse **aynı ürüne odaklanan birden çok uyumlu Scrum Takımı'na** bölünmeyi önerir. Bu takımlar aynı Product Goal'ü, Product Backlog'u ve Product Owner'ı paylaşır.

Büyüklüğün maliyeti iletişim yollarıdır: n kişide n(n−1)/2. Yedi kişide 21 yol vardır; takım iki katına çıkınca yol sayısı dört katından fazla artar (5. ünite). Daily uzar, Planning yarım güne çıkar, alt gruplar birbirinin işini bilmez.

Bölünürken teknik katmana göre (arayüz takımı, servis takımı) değil, **müşteri özelliğine** göre bölmek bağımlılığı azaltır (13. ünite).

**Dağıtık takım:** Rehber Daily'nin yerini ya da biçimini dayatmaz. Amaç Developers'ın birlikte Sprint Goal'e ilerlemeyi denetlemesidir; dağıtık takımda bunun yolu ortak bir zaman, görüntülü bağlantı ve ortak bir çevrim içi panodur. Yazılı durum notları konuşmanın yerini tutmaz.
`),
      dene: [p("on-dort"), p("iletisim-yolu")],
    },
    {
      baslik: "Sabit kapsamlı sözleşme ve agile tiyatrosu",
      metin: md(`
Kurum işi **sabit fiyat, sabit tarih, sabit kapsamla** ihale ettiğinde demir üçgenin üç köşesi birden sabitlenmiş olur; esneyen tek şey kalitedir (1. ünite). Scrum'la çalışan takımın en dürüst yolu:

- Kapsamı **değerine göre sıralamak**, böylece süre biterse en değerli kısım mutlaka teslim edilmiş olur.
- Her Sprint **çalışan yazılım göstermek**; kapsam pazarlığı tahminle değil, görülen ilerlemeyle yapılır.
- Değişikliği reddetmek yerine müşteriyle birlikte yönetmek: "sözleşme pazarlığı yerine müşteriyle iş birliği".

**Agile tiyatrosu** (kargo kültü) ise biçimin alınıp özün alınmamasıdır: unvanlar ve toplantı adları değişir, kararlar yine yukarıda verilir ve aylarca kimse çalışan bir şey görmez. Ölçü hep aynıdır: her Sprint kullanılabilir bir Increment var mı ve kararlar ona bakılarak mı veriliyor?
`),
      dene: [p("sabit-kapsam"), p("tiyatro")],
    },
    {
      baslik: "Scrum Master'ın duruşları",
      metin: md(`
Scrum Master duruma göre farklı şapkalar takar; Scrum topluluğunda bunlar "duruşlar" diye anılır:

| Duruş | Ne zaman |
|---|---|
| **Öğretmen** | Takım ya da paydaş bir kuralı bilmiyorsa: bilgiyi doğrudan aktarır |
| **Koç** | Kişi cevabı kendi bulabilecekse: sorular sorar |
| **Kolaylaştırıcı** | Etkinliğin amacına ulaşması ve süresinde bitmesi için |
| **Mentor** | Deneyimini paylaşır, yeni SM ya da PO'ya eşlik eder |
| **Engel kaldırıcı** | Takımın çözemeyeceği engellerin kaldırılmasına neden olur |
| **Değişim öncüsü** | Organizasyonun çalışma biçimini değiştirmeye yardım eder |

Bir duruş daha var: **susmak**. Takım çözüme kendi yaklaşıyorsa araya girmemek, sahiplenmeyi büyütür. Kendi kendini yöneten bir takımda SM'nin uzun vadeli hedefi kendini gereksiz kılmaktır.

> **Rehber ne der:** Scrum Master, Scrum Takımı'nın ilerlemesini engelleyenlerin **kaldırılmasına neden olur**. Kaldırmayı kendisi yapmak zorunda değildir.
`),
      dene: [p("koc"), p("sessiz")],
    },
    {
      baslik: "Bir sahne: üç Sprint'lik günlük",
      metin: md(`
Squad'ın üç Sprint boyunca tuttuğu kısa günlük aşağıda. Bu ünitede ve önceki ünitelerde gördüğün sorunlardan dokuzu bu satırların içinde; sağlıklı satırlar da var. Sorunlu olanları işaretle, sonra kontrol et.

[[G-S12-02]]

Simülatördeki "Dört Sprint, bir ürün" görevi aynı sınavı bu kez senin kararlarınla yapar.
`),
      lab: "anti-pattern",
    },
  ],
  test: [
    p("retro-atla"), p("zenginlestirme"), p("uzatma"), p("uzunluk-oynat"), p("komite"), p("vekil"),
    p("sekreter"), p("iptal-kim"), p("dagitik-daily"), p("engel"),
  ],
};
