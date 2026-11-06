import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_8: Ders = {
  hafta: 8,
  baslik: "Dalgacık Dönüşümü",
  ozet: "Durağan olmayan sinyaller ve STFT'nin sabit pencere sorunu, dalgacık ve ana dalgacık, skala ve öteleme, sürekli ve ayrık dalgacık dönüşümü, Mallat algoritması ve 2B dalgacık dönüşümüyle gürültü giderme.",
  bolumler: [
    {
      baslik: "Fourier'in sınırı ve kısa zamanlı Fourier dönüşümü",
      metin: md(`
**Neden önemli?** Biyomedikal sinyallerin çoğu durağan değildir: bir EEG'de nöbet birkaç saniye sürer, bir EKG'de aritmi tek bir atımda görünür. Fourier dönüşümü hangi frekansların olduğunu söyler, ama **ne zaman** olduklarını söylemez.

Sinyal işleme, zaman ortamındaki sinyale bir matematiksel dönüşüm uygulayarak zaman ortamında göremediğimiz bilgiye ulaşmaktır; dönüşüm, sinyalin yeniden haritalanmasıdır.

- **Durağan** sinyal bütün süresi boyunca aynı spektral özellikleri taşır; onun için **Fourier dönüşümü yeterlidir**.
- **Durağan olmayan** sinyalin spektral özellikleri **zamanla değişir**. Böyle sinyaller için farklı bölgelerdeki spektral bileşenleri ayrı ayrı inceleyebilen ve spektrumdaki **keskin değişimleri** yakalayabilen bir yöntem gerekir.

**Kısa zamanlı Fourier dönüşümü (STFT)** sinyali bir pencereyle dilimleyip her dilimin Fourier dönüşümünü alır. Sorunu şudur: **STFT'de zaman penceresi bütün frekanslarda aynı büyüklüktedir.** Zaman-frekans düzlemi eş dikdörtgenlere bölünür ve çözünürlük her yerde sınırlı kalır:

- Pencere dar seçilirse zamanda keskin ama frekansta bulanık,
- Pencere geniş seçilirse frekansta keskin ama zamanda bulanık sonuç alınır.

Çoğu sinyal, frekansa göre değişen bir hassasiyet ister; bunun için pencere büyüklüğünün sürekli değişmesi gerekir. **Dalgacık dönüşümü**, STFT'nin bu **çözünürlük problemine** bir alternatif olarak ortaya atılmıştır: **yüksek frekanslarda dar, düşük frekanslarda geniş** zaman pencereleri kullanır.

[[G-H8-01]]

> **Sık hata:** STFT'nin pencere boyunu frekansa göre ayarladığını sanmak. STFT'de pencere sabittir; frekansa göre değişen pencere dalgacık dönüşümünün özelliğidir.
`),
      dene: ["bm-u8-duragan"],
    },
    {
      baslik: "Dalgacık ve ana dalgacık",
      metin: md(`
**Neden önemli?** Dalgacık dönüşümünün gücü, sinyali sonsuza uzanan sinüslerle değil, kısa ve yerel salınımlarla karşılaştırmasından gelir. Kısa bir olay, kısa bir dalgacıkla en iyi eşleşir.

**Dalga**, bir doğrultu boyunca salınım yapan fonksiyondur. Fourier analizindeki **sinüsler** dalgadır ve **sonsuza dek** sürer.

**Dalgacık (wavelet)** ise:

- **Sınırlı bir uzunluğa** sahiptir,
- **Ortalaması sıfırdır**,
- Sonsuza dek salınmaz.

Dönüşümde kullanılan bütün dalgacıklar tek bir özgün dalgacıktan türetilir: **ana dalgacık** (mother wavelet), $\\psi(t)$. Diğerleri onun **kaydırılmış (ötelenmiş) ve ölçeklenmiş** biçimleridir.

**Dalgacık dönüşümü**, işlenmemiş sinyali içerdiği farklı frekans bileşenlerine ayıran ve **her bileşeni kendi skalasına uygun bir çözünürlükte** inceleyen matematiksel dönüşümdür. Ölçeklenebilir bir temel dalgacık kullanarak STFT'nin sabit çözünürlük sorununu çözer ve sinyalin farklı çözünürlüklerde esnek bir zaman analizini yapar.

Zaman-ölçek yöntemine dayandığı için, odağı ayarlanarak sinyalin farklı kısımlarına bakabilen bir **matematik mikroskobu** gibi davranır.

**Dalgacık çeşitleri:** Haar, Daubechies, Coiflet, Morlet, Mexican hat, Shannon. Örneğin **Shannon dalgacığı**:

$$\\psi(t) = 2\\,\\mathrm{sinc}(2t) - \\mathrm{sinc}(t)$$

> **Sık hata:** Dalgacığı "kısaltılmış bir sinüs" sanmak. Dalgacık sınırlı uzunlukta ve ortalaması sıfır olan herhangi bir salınım olabilir; sinüs yalnızca bir örnektir.
`),
      dene: ["bm-u8-dalgacik-ozellik"],
    },
    {
      baslik: "Skala ve öteleme",
      metin: md(`
**Neden önemli?** Dalgacık dönüşümünün iki ayarı vardır: dalgacığı ne kadar sıkıştırdığın (hangi frekansa baktığın) ve nereye kaydırdığın (hangi zamana baktığın). Bütün zaman-frekans haritası bu iki parametreyle taranır.

Bütün dalgacıklar ana dalgacıktan iki parametreyle elde edilir:

$$\\psi_{s,\\tau}(t) = \\frac{1}{\\sqrt{|s|}}\\,\\psi\\!\\left(\\frac{t - \\tau}{s}\\right)$$

**Skala ($s$ ya da $a$)**: sinyali **sıkıştırma ya da genişletme**.

- Küçük skala, sıkışmış dalgacık demektir: **hızlı değişimler, yüksek frekans**, ince ayrıntı.
- Büyük skala, genişlemiş dalgacık demektir: **yavaş değişimler, düşük frekans**, kaba yapı.

Sinüsle düşünmek kolaydır:

| Fonksiyon | Skala |
|---|---|
| $\\sin(t)$ | $a = 1$ |
| $\\sin(2t)$ | $a = 1/2$ |
| $\\sin(4t)$ | $a = 1/4$ |

Skala yarıya inince fonksiyon iki kat sıkışır, frekansı iki katına çıkar. Dalgacıkta da aynısı geçerlidir: $\\psi(t)$, $\\psi(2t)$, $\\psi(4t)$ sırasıyla $a = 1, 1/2, 1/4$'tür.

**Öteleme ($\\tau$)**: dalgacığı zaman ekseninde **geciktirmek ya da öne almak**, yani başlangıcını kaydırmak.

[[G-H8-02]]

> **Sık hata:** Büyük skalanın yüksek frekans demek olduğunu düşünmek. Skala ile frekans ters orantılıdır: skala büyüdükçe dalgacık genişler ve daha düşük frekanslara bakar.
`),
      dene: ["bm-u8-skala-anlam"],
    },
    {
      baslik: "Sürekli dalgacık dönüşümü (CWT)",
      metin: md(`
**Neden önemli?** Sürekli dönüşüm en ayrıntılı zaman-ölçek haritasını verir; ama bunun bedeli büyük bir hesap yüküdür. Bu bedel, ayrık dönüşümün neden geliştirildiğini açıklar.

**Sürekli dalgacık dönüşümünde (CWT, SDD)** sinyal, STFT'deki pencereye benzeyen dalgacık fonksiyonuyla çarpılır ve farklı zaman aralıkları için dönüşüm hesaplanır. Daha açık bir deyişle: sinyal, $\\psi(t)$'nin **ölçeklenmiş ve ötelenmiş** hâliyle çarpılıp **bütün zaman boyunca toplanır** (konvolüsyon):

$$C(s, \\tau) = \\frac{1}{\\sqrt{|s|}}\\int_{-\\infty}^{\\infty} x(t)\\, \\psi^{*}\\!\\left(\\frac{t - \\tau}{s}\\right) dt$$

Sonuç, skala ($s$) ve öteleme ($\\tau$) parametrelerinin fonksiyonu olan çok sayıda **C katsayısıdır**. Bir katsayı, sinyalin o zamandaki o skaladaki dalgacığa ne kadar benzediğini gösterir. **Ters dalgacık dönüşümü** bu katsayılardan sinyali geri elde eder.

**Dezavantajı:** CWT'de dalgacık katsayıları **bütün skala değerleri için bütün zaman ekseni boyunca** hesaplanır. Bu, **çok fazla veri ve büyük işlem yükü** demektir. Bu sakıncayı gidermek için **ayrık dalgacık dönüşümü** geliştirilmiştir.

> **Sık hata:** CWT'deki "sürekli" sözcüğünü sinyalin sürekli olması gerektiği diye okumak. Sürekli olan, skala ve öteleme parametrelerinin bütün değerleri taramasıdır.
`),
      dene: ["bm-u8-cwt-hesap"],
    },
    {
      baslik: "Ayrık dalgacık dönüşümü ve Mallat algoritması",
      metin: md(`
**Neden önemli?** Pratikte kullanılan dalgacık dönüşümü neredeyse her zaman DWT'dir: hızlıdır, katsayı sayısı sinyal uzunluğunu aşmaz ve basit filtrelerle gerçeklenir. EEG'yi alt bantlarına ayırmanın standart yoludur.

**Ayrık dalgacık dönüşümünde (DWT, ADD)** skalalar **dyadic**, yani **2'nin kuvvetleri** olarak seçilir ve katsayılar yalnızca belirli noktalarda hesaplanır; işlem sayısı azalır.

- Dönüşüm **seviye seviye** yapılır. Her seviyede dalgacık **iki kat genişler** ve hesaplanan katsayı sayısı **yarıya düşer**.
- CWT'de farklı ölçekler dalgacığın ölçeği değiştirilerek elde edilir; DWT'de ise **alçak ve yüksek geçiren filtrelerle**. Filtreler frekans spektrumunu alt bantlara böler.

**Mallat algoritması** (1988), bu işi filtrelerle yapmanın en etkin yoludur; sinyal işlemede **iki kanallı alt bant kodlayıcı** olarak bilinir ve hızlı dalgacık dönüşümü sağlar.

Her seviyede:

1. Sinyal **alçak geçiren (LP)** ve **yüksek geçiren (HP)** filtreden geçirilir.
2. İki çıkış da **2 ile aşağı örneklenir**: $y(n) = x(2n)$. Eleman sayısı ve örnekleme frekansı yarıya iner; en yüksek frekansın yarısına kadarki frekanslar kalır.
3. LP çıkışı **yaklaşım katsayılarıdır (A, approximation)**: sinyalin ana hatları düşük frekanslardadır ve filtreden sonra hâlâ sinyale benzer.
4. HP çıkışı **detay katsayılarıdır (D, detail)**: hızlı değişimleri, yüksek frekanslı ayrıntıları gösterir.
5. **Bir sonraki seviyede yalnızca yaklaşım (A) katsayıları** yeniden ayrıştırılır.

[[G-H8-03]]

**Katsayı sayısı:** N örneklik bir sinyalde üç seviye sonunda $D_1$: N/2, $D_2$: N/4, $D_3$: N/8 ve $A_3$: N/8 katsayı çıkar; toplam yine **N**'dir. Örneğin N = 256 için 128 + 64 + 32 + 32 = 256.

> **Sık hata:** Her seviyede detay katsayılarının da yeniden ayrıştırıldığını sanmak. Klasik DWT'de yalnızca yaklaşım kolu bölünmeye devam eder.
`),
      dene: ["bm-u8-mallat"],
    },
    {
      baslik: "2B dalgacık dönüşümü ve gürültü giderme",
      metin: md(`
**Neden önemli?** Görüntülerde dalgacık dönüşümü hem yönlü kenarları ayırır hem de gürültüyü ayrıntıdan ayırmayı kolaylaştırır. JPEG 2000 sıkıştırması ve pek çok tıbbi görüntü gürültü giderme yöntemi buna dayanır.

Görüntüler için **ayrılabilir** dalgacık dönüşümü kullanılır:

1. Önce görüntünün **satırlarına** 1B filtre bankası uygulanır.
2. Sonra aynı dönüşüm, sonucun her kanalının **sütunlarına** uygulanır.

Böylece bir seviyede görüntü **dört alt banda** ayrılır: bir yaklaşım görüntüsü ve yatay, dikey, köşegen yönlere karşılık gelen üç yüksek geçiren kanal.

- **LL (yaklaşım)**: düşük frekanslı, temel ve kaba yapı; özgün görüntünün küçültülmüş hâline çok benzer.
- **LH ve HL**: yatay ve dikey yönlü kenarlar ve ayrıntılar. Hangi harf çiftinin hangi yöne karşılık geldiği kaynaklara göre değişir; sunumda bile iki farklı eşleme geçer.
- **HH (köşegen)**: köşegen ve çapraz ayrıntılar, en yüksek frekanslar.

**Bir sonraki seviyede dönüşüm yalnızca LL bandına uygulanır**; LL yeniden dörde bölünür (LL2, LH2, HL2, HH2).

[[G-H8-04]]

**Gürültü giderme:** Görüntüye toplamsal Gauss gürültüsü eklendiğinde gürültü daha çok küçük **detay katsayılarına** dağılır, görüntünün önemli yapıları ise az sayıda büyük katsayıda toplanır. Yöntem:

1. Görüntünün dalgacık dönüşümü alınır.
2. Detay katsayılarına **eşik** uygulanır; örneğin **sert eşiklemede** eşikten küçük katsayılar sıfırlanır.
3. **Ters dönüşümle** temizlenmiş görüntü elde edilir.

> **Sık hata:** LL bandını da eşiklemek. LL görüntünün ana yapısını taşır; eşik yalnızca detay bantlarına uygulanır.
`),
      dene: ["bm-u8-ll"],
    },
  ],
  test: [
    "bm-u8-stft-pencere",
    "bm-u8-ana",
    "bm-u8-mikroskop",
    "bm-u8-sin4t",
    "bm-u8-shannon",
    "bm-u8-dyadic",
    "bm-u8-detay",
    "bm-u8-n-yari",
    "bm-u8-hh",
    "bm-u8-denoise",
  ],
};
