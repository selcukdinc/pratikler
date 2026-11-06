import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_2: Ders = {
  hafta: 2,
  baslik: "Elektroansefalografi (EEG) ve Uyku",
  ozet: "EEG'nin tanımı ve kullanımı, kayıt süresi ve 10-20 sistemi, delta-teta-alfa-beta-gama bantları, EEG analizi, NREM ve REM uykusu.",
  bolumler: [
    {
      baslik: "EEG nedir, ne için çekilir?",
      metin: md(`
**Neden önemli?** Beyin bütün organları denetler ve bu işe sürekli elektriksel olaylar eşlik eder. EEG bu olayları kafatası dışından, ucuz ve zararsız biçimde izlemenin yoludur.

**Elektroansefalografi (EEG)**, kafatası çevresine yerleştirilen elektrotlarla iki tür potansiyel değişimini yazdırma yöntemidir:

- Beyin çalışırken **kendiliğinden** oluşan, sürekli ve ritmik potansiyel değişimleri,
- Bir duyu almacının (reseptör) uyarılmasına bağlı olarak oluşan **uyarılmış (evoked)** potansiyeller.

EEG, Alman fizikçi **Hans Berger** tarafından **1929**'da keşfedilmiştir. Bugün analog cihazların yerini dijital EEG almıştır.

Beyin dalgaları yaşla, duyusal uyaranlarla, beyin hasarıyla ve vücudun kimyasal dengesiyle değişir. Bu yüzden EEG şunlar için kullanılır:

- Beyin lezyonları, tümörler, enfarktlar, enfeksiyonlar, apseler,
- Psikoz, uyku bozuklukları,
- Bozuk elektrik etkinliğin hangi bölgeden çıktığını bulmak,
- **Epilepsi**: tanıda ve türünü belirlemede tedaviye karar verdiren en temel incelemedir.

**Düz bir EEG**, yani hiç elektriksel etkinlik görülmemesi, **beyin ölümünün klinik kanıtıdır**.

> **Sık hata:** EEG'yi yalnızca epilepsi testi sanmak. Epilepsi en önemli kullanım alanıdır ama uyku evreleme, tümör ve lezyon tespiti ve beyin ölümü de EEG ile değerlendirilir.
`),
      dene: ["bm-u2-duz-eeg"],
    },
    {
      baslik: "EEG kaydı ne kadar sürer?",
      metin: md(`
**Neden önemli?** Bazı hastalık bulguları yalnızca uykuda ya da uykuya geçerken görülür. Kayıt kısa tutulursa aranan bulgu hiç çıkmayabilir.

Beyin dalgaları **uyanıklıkta, uykuda ve ikisi arasındaki geçişte** farklıdır. İdeal bir EEG bütün bu dönemleri yakalamayı hedefler; bu yüzden yaklaşık **bir saatlik**, hem uykuyu hem uyanıklığı içeren bir kayıt tercih edilir.

| Kayıt türü | Süre |
|---|---|
| Normal (rutin) EEG | 20–30 dakika |
| Uyku-uyanıklık EEG'si | yaklaşık 1 saat (20 dk uyanık, 40–60 dk uyku) |
| Gece kayıtları | 3–6 saat |

Gerekirse 3 saatlik, gece boyu ya da **24 saatlik** kayıtlar da yapılır.

> **Sık hata:** Rutin EEG ile uyku-uyanıklık EEG'sini aynı sanmak. Rutin kayıt yarım saati geçmez; uyku-uyanıklık kaydı uyku dönemini de görmek için yaklaşık bir saat sürer.
`),
      dene: ["bm-u2-rutin"],
    },
    {
      baslik: "EEG kaydı: elektrotlar, kanallar, frekans ve genlik",
      metin: md(`
**Neden önemli?** EEG sinyali mikrovolt düzeyindedir ve kayıt biçimine göre farklı görünür. Kaydın nasıl alındığını bilmeden sinyali işlemek yanıltıcı olur.

**EEG, iki elektrot arasındaki potansiyel farkıdır.** İki kayıt biçimi vardır:

- **Bipolar kayıt**: iki elektrot da aktiftir.
- **Monopolar kayıt**: bir elektrot aktiftir; diğeri **kulak bölgesindeki referans elektrottur**.

Beynin farklı bölgelerini aynı anda kaydetmek için EEG cihazları genellikle **8 ya da 16 kanallıdır**. Elektrotlar **10-20 sistemi** adı verilen düzende, kafatası çevresindeki **21 elektrot bölgesine** yerleştirilir.

EEG dalgaları fiziksel anlamda tam periyodik değildir ama **ritmiktir**. EKG'deki P-QRS-T gibi belirli bir biçimleri yoktur; rastgele potansiyel değişimlerini andırırlar.

- **Frekans**: 0,5–70 Hz
- **Genlik**: 5–400 µV

Değerlendirmede **en önemli parametre frekanstır**, ikinci sırada genlik gelir. Ortalama frekans en basit yoldan, belli bir sürede eğrideki tepeler sayılıp süreye bölünerek bulunur.

> **Sık hata:** EEG genliğini EKG ile aynı ölçekte düşünmek. EKG milivolt, EEG mikrovolt mertebesindedir; EEG yaklaşık bin kat küçüktür.
`),
      dene: ["bm-u2-1020"],
    },
    {
      baslik: "EEG frekans bantları",
      metin: md(`
**Neden önemli?** EEG spektrumu, frekansa göre adlandırılmış bantlara ayrılır. Uyku evreleme, dikkat ölçümü ya da epilepsi tespiti gibi işlerin çoğu "hangi bantta ne kadar güç var" sorusuna dayanır.

| Bant | Frekans | Ne zaman baskın? |
|---|---|---|
| **Delta** (δ) | 0,5–4 Hz | derin, rüyasız uyku; en yavaş dalga |
| **Teta** (θ) | 4–8 Hz | hafif uyku, meditasyon, hayal kurma; hafıza ve öğrenme |
| **Alfa** (α) | 8–13 Hz | gözler kapalı, sakin ve rahat uyanıklık |
| **Beta** (β) | 13–30 Hz | odaklanma, problem çözme, aktif düşünce |
| **Gama** (γ) | 30–100+ Hz | üst düzey bilişsel işlevler, yoğun konsantrasyon; en hızlı dalga |

[[G-H2-01]]

**Göz açma tepkisi**: gözler kapalı ve dinlenirken alfa ritmi belirgindir. Gözler açılınca alfa kaybolur, yerini düşük genlikli, yüksek frekanslı **beta** alır; gözler yeniden kapanınca alfa geri döner.

[[G-H2-02]]

> **Sık hata:** Teta ile deltayı karıştırmak. Sıralamayı yavaştan hızlıya "delta, teta, alfa, beta, gama" diye ezberle; delta en yavaşıdır.
`),
      dene: ["bm-u2-alfa"],
    },
    {
      baslik: "Beyin etkinliği ve yaş",
      metin: md(`
**Neden önemli?** Bir çocukta normal olan EEG, bir yetişkinde anormal sayılabilir. Bant gücünü yorumlamadan önce kişinin yaşını ve o anki durumunu bilmek gerekir.

**Beyin etkinliği arttıkça:**

- EEG dalgalarının **frekansı yükselir**,
- **Genlikleri azalır.**

Uyurken bunun tersi olur: frekans düşer, genlik büyür.

**Egemen frekans yaşla yükselir:**

| Yaş | Egemen frekans |
|---|---|
| Yeni doğan | 3–4 Hz |
| 2–3 yaş | 6–7 Hz |
| Yetişkin | 8–12 Hz |

> **Sık hata:** Etkinlik artınca genliğin de arttığını düşünmek. Dikkatli bir beyinde dalgalar hızlı ama küçük, derin uykuda yavaş ama büyüktür.
`),
      dene: ["bm-u2-aktivite"],
    },
    {
      baslik: "EEG sinyallerinin işlenmesi ve ECoG",
      metin: md(`
**Neden önemli?** EEG hem çok küçük hem de çok kirli bir sinyaldir. Analizin başarısı, gürültüyü tanıyıp ayıklamaya ve doğru özellikleri çıkarmaya bağlıdır.

EEG'yi işlemeyi zorlaştıran etkenler:

- Genlik **çok küçüktür**.
- Çok sayıda girişim vardır: **şebeke gürültüsü**, **EKG gürültüsü**, **göz hareketleri**, **çene hareketleri**.

**Analizin amaçları:**

- *Rutin EEG*: epilepsi, tümör ve lezyon tespiti, beyin işlevlerinin değerlendirilmesi.
- *Uyku EEG'si*: uyku evreleme, apne atağı tespiti, uyku hastalıkları.

**Analiz adımları:**

1. **Ön işlem**: sinyali işlenecek biçime getirmek, kaydın başındaki ve sonundaki hatalı kısımları atmak, uzman skorlarına göre bölümlere ayırmak, gürültü gidermek.
2. **Özellik çıkarma**: sinyali **alt bantlarına** ayırmak; morfolojik ve istatistiksel özellikler, güç, enerji, bağıl güç ya da enerji değerleri; dönüşüm yöntemleri (Fourier ve dalgacık, 7. ve 8. ünite).

**Elektrokortikografi (ECoG)**: elektrot doğrudan beyin kabuğuna dokundurularak ya da mikroelektrotlarla beynin derinliklerine girilerek yapılan kayıttır. Kafatası ve deri aradan çıktığı için sinyaller **3–4 kat büyük genlikte** alınır.

> **Sık hata:** Göz kırpmayı beyin etkinliği sanmak. Göz ve çene hareketleri EEG'ye karışan artefaktlardır; ön işlemde ayıklanmaları gerekir.
`),
      dene: ["bm-u2-gurultu"],
    },
    {
      baslik: "Uyku ve NREM evreleri",
      metin: md(`
**Neden önemli?** Uyku evreleme EEG'nin en yaygın otomatik analiz işlerinden biridir. Her evrenin EEG'de kendine özgü bir görünümü vardır.

Uykuda EEG değişir: uyuklarken alfanın genliği ve frekansı düşer; uykuya dalınca **frekans azalır, genlik artar**. Uykunun iki genel tipi vardır: **NREM** (hızlı göz hareketi olmayan) ve **REM** (hızlı göz hareketli). NREM, uykunun ilk 30–45 dakikasında görülen ve **4 evreden** oluşan uykudur; REM, NREM'in 4. evresi bittikten sonra başlar.

**NREM'de (yavaş dalgalı uyku):** EEG frekansı giderek düşer, genliği artar; kan basıncı, kalp hızı ve solunum sayısı azalır; **büyüme hormonu** ve gonadotropin salgısı artar; kaslar gevşer. Hücre yenilenmesi ve doku onarımı bu evrede olur.

| Evre | Özellik |
|---|---|
| Evre 1 | hafif uyku, kolay uyanma; gözler kapalı, alfa dalgaları görülür |
| Evre 2 | önemli-önemsiz ayrımı; EEG dikensi, yüksek voltajlı dalgalarla düzensizleşir; uyandırmak zorlaşır |
| Evre 3 | uyku derinleşir; teta ve delta görülür; solunum ve kalp hızı düşer |
| Evre 4 | en derin NREM; **delta baskın**; horlama, altını ıslatma, anlamsız konuşma |

[[G-H2-03]]

Gecenin başında uzun bir derin NREM yaşanır. Sabaha doğru NREM süreleri kısalır, REM süreleri uzar. Yaşla birlikte uyku ihtiyacı azalır.

> **Sık hata:** Büyüme hormonunun REM'de salgılandığını düşünmek. Büyüme hormonu özellikle derin NREM evresinde salgılanır.
`),
      dene: ["bm-u2-evre4"],
    },
    {
      baslik: "REM uykusu",
      metin: md(`
**Neden önemli?** REM'de beyin uyanık gibi görünür ama kişi derin uykudadır. Bu çelişki, EEG'ye tek başına bakarak REM'i uyanıklıktan ayırmanın neden zor olduğunu açıklar.

REM'e **paradoks uyku** denir: uyku derindir ama **EEG uyanık ve dikkatli bir kişininki gibidir**; uyandırmak zordur, kendiliğinden uyanmak kolaydır. EEG desenleri NREM'in 1. evresine benzer.

REM'in özellikleri:

- **Rüyaların çoğu** bu evrede görülür; rüyalar canlı ve hikâyelidir.
- Gözler kapalıyken hızla sağa sola hareket eder.
- Kan basıncı, kalp hızı ve solunum **artar ve düzensizleşir**; beynin oksijen tüketimi artar. **Kalp krizinin en sık görüldüğü dönemdir.**
- İskelet kasları (göz kasları hariç) **inhibe olur**. Bu geçici felce **atoni** denir; rüyadakini fiziksel olarak yapmamızı engeller. Buna rağmen küçük kas seğirmeleri görülebilir.
- Problem çözme, öğrenme ve bellek işlevleriyle ilişkilidir.

**Döngü:** ilk REM yaklaşık **10 dakika** sürer, her döngüde uzar. Bir gecede **4–5 döngü** yaşanır. REM uykusundan yoksun kalanlarda depresyon görülür.

| | NREM | REM |
|---|---|---|
| Göz | hareketsiz | hızlı hareketli |
| Kas | gevşek | atoni |
| Kalp, solunum | yavaş, düzenli | hızlı, düzensiz |
| Enerji | depoları tazeler | zihinsel yenilenme, hafıza |

> **Sık hata:** REM'de kasların kasıldığını sanmak. REM'de beyin etkin ama kol ve bacak kasları atonidedir.
`),
      dene: ["bm-u2-paradoks"],
    },
  ],
  test: [
    "bm-u2-berger",
    "bm-u2-gece",
    "bm-u2-monopolar",
    "bm-u2-teta",
    "bm-u2-yetiskin",
    "bm-u2-ecog",
    "bm-u2-nrem-uyku",
    "bm-u2-atoni",
    "bm-u2-sabah",
  ],
};
