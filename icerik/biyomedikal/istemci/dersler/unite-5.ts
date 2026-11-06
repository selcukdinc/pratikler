import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_5: Ders = {
  hafta: 5,
  baslik: "Veri ve Zaman Serisi Ön İşleme",
  ozet: "Ortalama-medyan-mod, normal dağılım, çarpıklık ve basıklık; veri temizleme, IQR ile aykırı değer, min-max ve z-skor, eksik veri tamamlama, zaman ve frekans alanı filtreleri, yeniden örnekleme.",
  bolumler: [
    {
      baslik: "Ortalama, medyan ve mod",
      metin: md(`
**Neden önemli?** Ön işlemin pek çok adımı bu üç sayıya dayanır: eksik veriyi ortalama ya da medyanla doldurmak, medyan filtresi, z-skor. Hangisinin uç değerlerden etkilendiğini bilmek doğru yöntemi seçtirir.

- **Ortalama (aritmetik ortalama)**: bütün değerlerin toplamının veri sayısına bölümü, $\\bar{x} = \\frac{1}{n}\\sum x_i$.
- **Medyan (ortanca)**: veriler küçükten büyüğe sıralanınca **tam ortada** kalan değer. Veri sayısı **çiftse** ortadaki iki değerin ortalaması alınır.
- **Mod (tepe değer)**: **en çok tekrar eden** değer. Bir veri kümesinde birden fazla mod olabilir ya da hiç olmayabilir.

Örnek: 3, 5, 5, 6, 21 verisinde ortalama $40/5 = 8$, medyan 5, mod 5'tir. Tek bir büyük değer (21) ortalamayı yukarı çeker ama medyanı değiştirmez. Medyanın uç değerlere **dayanıklı** olması, bu ünitede onu defalarca karşımıza çıkaracak.

> **Sık hata:** Çift sayıda veride medyanı ortadaki iki sayıdan biri olarak almak. 2, 4, 6, 8 verisinin medyanı $(4+6)/2 = 5$'tir.
`),
      dene: ["bm-u5-medyan-cift"],
    },
    {
      baslik: "Normal dağılım, çarpıklık ve basıklık",
      metin: md(`
**Neden önemli?** Pek çok yöntem (ortalamayla doldurma, z-skor) verinin normale yakın dağıldığını varsayar. Dağılımın biçimine bakmadan yöntem seçmek yanıltır.

**Normal dağılım** (Gauss dağılımı, çan eğrisi): değerler ortada yoğunlaşır, uçlara doğru seyrekleşir. Ortalama ve standart sapmayla tanımlanır, $-\\infty$ ile $+\\infty$ arasında sürekli bir eğridir. Standart sapma büyüdükçe eğri basıklaşır, küçüldükçe sivrileşir.

**Standart normal dağılım**: ortalaması **0**, standart sapması **1** olan dağılım. Dikey eksene göre simetriktir; değerlerin yarısı sağda, yarısı soldadır; ortalamanın solu negatif, sağı pozitiftir; **mod, medyan ve ortalama eşittir**.

Bir dağılımın normal olup olmadığı **skewness (çarpıklık)** ve **kurtosis (basıklık, yığılma)** ile sınanır.

**Çarpıklık** simetriden sapmayı ölçer:

- Skorların çoğu ortalamanın **solunda** toplanmışsa (kuyruk sağa uzanır) dağılım **pozitif çarpıktır**. Sıra: mod < medyan < ortalama.
- Skorların çoğu **sağda** toplanmışsa **negatif çarpıktır**.

[[G-H5-01]]

**Basıklık**, dağılımın ortasında ne kadar örnek yığıldığını gösterir. Simetrik bir dağılım bile normal olmayabilir:

- **Mezokurtik** (orta eğri): normal dağılım, kurtosis **0**.
- **Leptokurtik** (dar eğri): ortada çok örnek, kurtosis **pozitif**.
- **Platikurtik** (düz eğri): ortada az örnek, kurtosis **negatif**.

[[G-H5-02]]

> **Sık hata:** Pozitif çarpıklığı "değerlerin çoğu büyük" diye okumak. Pozitif çarpık dağılımda değerlerin çoğu küçüktür; birkaç büyük değer kuyruğu sağa doğru uzatır.
`),
      dene: ["bm-u5-pozitif-carpik"],
    },
    {
      baslik: "Veri işleme adımları ve veri temizleme",
      metin: md(`
**Neden önemli?** Ham biyomedikal veri neredeyse hiç temiz gelmez. Ön işleme atlanırsa sonraki her adım (özellik çıkarma, sınıflandırma) hatalı veriden öğrenir.

Bir veri işleme akışının adımları:

1. **Ön işlem**
2. Parametre belirleme, özellik çıkarma, dönüşüm
3. Sınıflandırma, tanıma
4. Performans değerlendirme

**Veri ön işleme**, ham veriyi analize ve modellemeye uygun hâle getirmek için temizleme ve dönüştürme işidir. Amacı sonraki analizin **hem doğruluğunu hem verimliliğini** artırmaktır. Başlıca adımlar: veri temizleme (aykırı değerler), eksik verileri doldurma, normalleştirme ve dönüştürme.

**Veri temizleme yöntemleri:**

- **Yinelenen kayıtları silmek.**
- **Eksik değerleri ele almak**: satır ya da sütun silmek, ortalama ya da medyanla doldurmak, tahmin algoritmaları (imputasyon) kullanmak.
- **Aykırı değerleri bulmak**: genel eğilimin dışındaki mantıksız uç değerler (örneğin **yaşın 150** girilmesi) düzeltilir ya da atılır.
- **Standardizasyon ve biçimlendirme**: tarih ve telefon biçimleri, büyük-küçük harf, birimler (kg ve gram) ortak standarda çevrilir.
- **Yazım ve mantık hatalarını düzeltmek.**
- **Doğrulama (validation)**: temizlenen veri son kez kurallara göre denetlenir.

**Düzeltme (smoothing)**: hareketli ortalama, doğrusal regresyon ve filtrelerle gürültüyü azaltmak.

**Veri entegrasyonu**: farklı veritabanlarından ve dosyalardan gelen veriyi tek kümede toplamak; çelişkili verileri ve şema uyumsuzluklarını gidermek.

**Veri azaltma**: **PCA** (temel bileşen analizi) gibi yöntemlerle değişken sayısını azaltmak (**boyut indirgeme**) ya da büyük veriden temsil gücü yüksek küçük alt kümeler seçmek (**örnekleme**).

> **Sık hata:** Ön işlemi yalnızca "gürültü temizlemek" sanmak. Birim birleştirme, yinelenen kayıt silme ve kaynak birleştirme de ön işlemdir.
`),
      dene: ["bm-u5-adim-sira"],
    },
    {
      baslik: "Aykırı değer ve IQR yöntemi",
      metin: md(`
**Neden önemli?** Tek bir hatalı ölçüm ortalamayı, standart sapmayı ve eğitilen modeli bozabilir. IQR yöntemi aykırı değeri, kendisi aykırı değerden etkilenmeden bulur.

**Aykırı gözlem**, veri kümesindeki diğer gözlemlerden büyük ölçüde farklı olan gözlemdir. Aykırılığı gösteren sayıya **aykırı değer**, onu barındıran kayda **aykırı gözlem** denir. Aykırı değeri bulmak için önce **sınır değerler** belirlenir; **kutu grafiği (box plot)** bunun bir yoludur.

**Çeyrekler**: sıralı veri üç noktadan dört eşit parçaya bölünür.

- **Q1** (birinci çeyrek): alt yarının medyanı; verilerin %25'i altında.
- **Q2**: medyan; verilerin %50'si altında.
- **Q3** (üçüncü çeyrek): üst yarının medyanı; verilerin %75'i altında.

**Çeyrekler arası aralık**, verinin ortadaki %50'sinin yayılımıdır:

$$IQR = Q_3 - Q_1$$

**1,5 kuralı** ile sınırlar:

$$\\text{alt sınır} = Q_1 - 1{,}5 \\times IQR, \\qquad \\text{üst sınır} = Q_3 + 1{,}5 \\times IQR$$

Bu sınırların dışında kalan değerler aykırıdır.

[[G-H5-03]]

**Avantajları:** ortalama yerine medyana dayandığı için uç değerlerden doğrudan etkilenmez (**dayanıklılık**); normal dağılmayan, çarpık verilerde de çalışır; gürültülü veriyi ayıklayarak modellerin doğruluğunu artırır.

> **Sık hata:** 1,5 × IQR'yi medyandan eklemek ya da çıkarmak. Alt sınır Q1'den, üst sınır Q3'ten hesaplanır.
`),
      dene: ["bm-u5-iqr-tanim"],
    },
    {
      baslik: "Normalizasyon, z-skor ve kategorik dönüşüm",
      metin: md(`
**Neden önemli?** Kalp hızı 60–100, kolesterol 150–300 aralığında olabilir. Ölçekleri farklı değişkenleri aynı modele vermeden önce ortak bir ölçeğe getirmek gerekir; yoksa büyük sayılı değişken baskın çıkar.

**Min-max normalizasyonu** değerleri **0 ile 1 arasına** taşır ve bütün değişkenlere eşit ağırlık kazandırır:

$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$

Örnek: en küçüğü 10, en büyüğü 50 olan bir değişkende 20 değeri $(20-10)/(50-10) = 0{,}25$ olur.

**Z-skor normalizasyonu (standardizasyon)** veriyi ortalaması **0**, standart sapması **1** olan bir ölçeğe çevirir:

$$z = \\frac{x - \\mu}{\\sigma}$$

- **Pozitif z**: değer ortalamanın **üstünde**.
- **Negatif z**: değer ortalamanın **altında**.
- **Sıfır**: değer ortalamaya eşit.

Örnek: ortalaması 100, standart sapması 20 olan bir değişkende 80'in z-skoru $(80-100)/20 = -1$'dir: ortalamanın bir standart sapma altında.

**Kategorik dönüşüm (encoding)**: metin ya da kategori etiketleri sayıya çevrilir. **Label encoding** her kategoriye bir sayı verir; **one-hot encoding** her kategori için ayrı bir 0/1 sütunu açar (örneğin kan grubu A, B, AB, 0 için dört sütun).

> **Sık hata:** Min-max ile z-skoru karıştırmak. Min-max sonucu her zaman 0–1 arasındadır; z-skor negatif ya da 1'den büyük olabilir.
`),
      dene: ["bm-u5-zskor"],
    },
    {
      baslik: "Eksik veri tamamlama",
      metin: md(`
**Neden önemli?** Sensör kopar, hasta testi yaptırmaz, bir alan boş kalır. Yanlış doldurma yöntemi modeli yanlı (bias) yapar; zaman serisinde satır silmek ise ardışıklığı bozar.

**İmputasyon**, boş (NaN, null) değerleri istatistiksel ya da makine öğrenmesi tabanlı yöntemlerle doldurmaktır.

**Basit yöntemler** (yalnızca o sütuna bakar):

- **Ortalama ile**: sayısal ve normal dağılan veri için.
- **Medyan ile**: aykırı değerin çok olduğu, **çarpık** sayısal veri için **en güvenli** yöntem.
- **Mod ile**: genellikle **kategorik** veri için.
- **Sabit değer**: "Bilinmiyor", "Diğer" ya da 0.

**Zamana bağlı yöntemler** (sıralı veri):

- **İleriye doldurma (forward fill, LOCF)**: eksik değer kendisinden **hemen önceki** geçerli değerle doldurulur.
- **Geriye doldurma (backward fill, NOCB)**: **hemen sonraki** geçerli değerle doldurulur.
- **Doğrusal interpolasyon**: önceki ve sonraki bilinen değerler arasına doğru çekilir.
- **Mevsimsel doldurma**: veride belirgin bir periyot varsa geçmişteki aynı dilimin ortalaması kullanılır.

[[G-H5-04]]

Doğrusal interpolasyon: $t_1$'de $y_1$, $t_2$'de $y_2$ biliniyorsa aradaki $t$ için

$$y = y_1 + (y_2 - y_1)\\,\\frac{t - t_1}{t_2 - t_1}$$

**Gelişmiş yöntemler** (diğer sütunlarla ilişkiye bakar):

- **K-NN**: eksik satıra en benzer K satır bulunur, onların değerlerinin ortalaması yazılır.
- **MICE**: her eksik sütun diğerlerinin fonksiyonu olarak (örneğin regresyonla) modellenir ve döngüsel olarak tekrarlanır.
- **Regresyon**: eksik sütun hedef seçilir, diğer sütunlarla model eğitilip tahmin edilir.

> **Sık hata:** Zaman serisinde eksik satırları silmek. Ardışıklık önemli olduğu için zaman serilerinde eksik değer silinmez, doldurulur.
`),
      dene: ["bm-u5-medyan-doldur"],
    },
    {
      baslik: "Zaman alanı filtreleri",
      metin: md(`
**Neden önemli?** Biyomedikal sinyaller hep gürültülüdür. En basit filtreler doğrudan zaman serisi üzerinde, kayan bir pencereyle çalışır ve hangisinin seçileceği gürültünün türüne bağlıdır.

Filtrelemenin üç amacı vardır: **gürültüyü temizlemek**, **ana eğilimi ortaya çıkarmak** ve **belirli frekans aralıklarını ayırmak**.

- **Basit hareketli ortalama (SMA)**: penceredeki değerlerin aritmetik ortalaması. Gürültüyü azaltır ama ani değişimlere **geç tepki verir (gecikme, lag)**.

$$y[n] = \\frac{1}{N}\\sum_{k=0}^{N-1} x[n-k]$$

- **Ağırlıklı hareketli ortalama (WMA)**: güncel verilere daha çok ağırlık verir; eğilim değişimini SMA'dan hızlı yakalar.
- **Üstel yumuşatma (EMA)**: geçmişe **üstel olarak azalan** ağırlıklar verir; en güncel veri her zaman en yüksek ağırlığa sahiptir. Finansta ve talep tahmininde yaygındır.
- **Medyan filtresi**: penceredeki değerleri sıralar, **ortadakini** seçer. **Ani, çok yüksek sıçramaları** (tuz-biber gürültüsü) ana sinyali bozmadan temizlemede çok iyidir.

Örnek: 3 örneklik pencerede 5, 80, 7 varsa ortalama $92/3 \\approx 30{,}7$ verir ve sıçramayı yayar; medyan ise 7 verir ve sıçramayı siler.

[[G-H5-05]]

> **Sık hata:** Sıçramalı (dürtü) gürültüye hareketli ortalama uygulamak. Ortalama sıçramayı komşularına dağıtır; böyle gürültüde medyan filtre seçilir.
`),
      dene: ["bm-u5-medyan-filtre"],
    },
    {
      baslik: "Frekans alanı filtreleri",
      metin: md(`
**Neden önemli?** Şebeke gürültüsü 50 Hz'de, EEG'nin alfa bandı 8–13 Hz'dedir. Frekansa göre çalışan filtreler bu tür bileşenleri cerrahi bir hassasiyetle ayırır.

**Frekans**, sinyalin saniyedeki değişim (salınım) hızıdır: vücut sıcaklığı yavaş değişir (**düşük frekans**), bir motor titreşimi saniyede binlerce kez yön değiştirir (**yüksek frekans**). Bu filtreler sinyali Fourier dönüşümüyle (7. ünite) frekans bileşenlerine ayırarak çalışır.

**Kesim frekansı** ($f_c$, cutoff): filtrenin sınır çizgisi; sinyalin hangi frekanstan sonra engelleneceğini ya da geçeceğini belirleyen eşik değeri.

- **Alçak geçiren (LPF)**: $f_c$'nin **altındaki** frekansları geçirir, üstündeki hızlı dalgalanmaları (gürültüyü) söndürür; ana eğilimi korur.
- **Yüksek geçiren (HPF)**: $f_c$'nin **üstünü** geçirir, yavaş eğilimleri bastırır; hızlı değişimleri tutar.
- **Bant geçiren (BPF)**: yalnızca bir aralığı geçirir; örneğin EEG'de **8–12 Hz alfa dalgalarını** ayırmak.
- **Bant söndüren (BSF, notch)**: yalnızca dar bir aralığı söndürür; örneğin prizden karışan **50/60 Hz şebeke gürültüsünü** yok etmek.

[[G-H5-06]]

**Klasik filtre türleri:**

- **Butterworth**: geçiş bandında olabildiğince **düz** (dalgalanmasız) yanıt; en sık kullanılan genel amaçlı filtre.
- **Chebyshev**: kesimde daha **keskin** düşüş, ama geçiş bandında hafif dalgalanma (ripple).
- **Savitzky-Golay**: zaman alanında yerel noktalara düşük dereceli **polinom uydurur**; gürültüyü azaltırken **tepe ve diplerin yüksekliğini ve genişliğini** iyi korur.

> **Sık hata:** EKG'deki 50 Hz gürültüsü için alçak geçiren filtre seçmek. Bu, 50 Hz'in üstündeki bütün EKG bileşenlerini de atar; tek bir frekansı atmak için notch filtre kullanılır.
`),
      dene: ["bm-u5-notch"],
    },
    {
      baslik: "Yeniden örnekleme ve zaman serisi özellikleri",
      metin: md(`
**Neden önemli?** Farklı cihazlar farklı hızlarda örnek alır; bir modelin bunları birlikte kullanabilmesi için ortak bir zaman sıklığı gerekir. Modelin geçmişi "görebilmesi" de ona uygun özellikler vermeye bağlıdır.

**Yeniden örnekleme (resampling)** verinin zaman sıklığını değiştirir:

- **Downsampling (örneklem azaltma)**: yüksek sıklıklı veriyi (saniyelik) daha düşük sıklığa (dakikalık, saatlik) indirir. Bu sırada **ortalama ya da maksimum** gibi fonksiyonlar kullanılır.
- **Upsampling (örneklem artırma)**: sıklığı artırır; boş kalan yeni noktalar **interpolasyonla** doldurulur.

**Özellik mühendisliği** (feature engineering) modelin zamansal ilişkileri görmesi için yeni değişkenler üretir:

- **Gecikme özellikleri (lag)**: $t-1$, $t-2$, …, $t-n$ anlarındaki değerler ayrı birer özellik olarak eklenir.
- **Pencere istatistikleri (rolling window)**: son 5 adımın ortalaması, standart sapması ya da maksimumu.
- **Takvim özellikleri**: haftanın günü, ay, hafta sonu mu, resmi tatil mi.

> **Sık hata:** Upsampling'in yeni bilgi ürettiğini düşünmek. Eklenen noktalar ölçülmemiştir; komşu değerlerden interpolasyonla tahmin edilir.
`),
      dene: ["bm-u5-downsampling"],
    },
  ],
  test: [
    "bm-u5-mod",
    "bm-u5-skewness",
    "bm-u5-leptokurtik",
    "bm-u5-pca",
    "bm-u5-ust-sinir",
    "bm-u5-minmax",
    "bm-u5-ffill",
    "bm-u5-sma",
    "bm-u5-kesim",
    "bm-u5-lag",
  ],
};
