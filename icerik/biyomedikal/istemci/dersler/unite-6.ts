import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_6: Ders = {
  hafta: 6,
  baslik: "Görüntü Ön İşleme",
  ozet: "Temel görüntü işleme teknikleri; gri seviyeye dönüştürme, ortalama-medyan-Gauss filtreleri, histogram eşitleme, boyutlandırma ve normalizasyon, eşikleme ve geometrik dönüşümler.",
  bolumler: [
    {
      baslik: "Temel görüntü işleme teknikleri",
      metin: md(`
**Neden önemli?** Bir röntgen ya da MR görüntüsünü bir yapay zeka modeline vermeden önce birkaç standart işlemden geçirmek gerekir. Bu ünite o işlemlerin haritasıdır.

Bir dijital görüntü, her hücresi bir **piksel** olan bir matristir; gri görüntüde her piksel genellikle 0 (siyah) ile 255 (beyaz) arasında bir sayıdır.

**Temel görüntü işleme teknikleri:**

1. **İyileştirme (enhancement)**: parlaklık-kontrast ayarı, histogram eşitleme ile ayrıntıları belirginleştirmek.
2. **Restorasyon**: bulanıklık, gürültü, odak hatası ya da sensör bozulmasını (örneğin **Wiener filtresiyle**) düzeltip özgün görüntüyü geri kazanmak.
3. **Filtreleme ve konvolüsyon**: Gauss, medyan, bilateral filtrelerle gürültü gidermek ya da **Sobel, Canny** ile kenar bulmak.
4. **Bölütleme (segmentasyon)**: görüntüyü anlamlı parçalara ayırmak; eşikleme, watershed, K-Means.
5. **Özellik çıkarma**: köşe, kenar, doku ve renk gibi ayırt edici özellikleri sayıya çevirmek.
6. **Geometrik dönüşümler**: ölçekleme, döndürme, yansıtma, perspektif (afin) düzeltme.
7. **Morfolojik işlemler**: ikili görüntülerde **aşındırma (erosion)** ve **genişletme (dilation)** ile nesne sınırlarını şekillendirmek.

**Görüntü ön işleme**, ham görüntüyü özellik çıkarmaya, analize ya da yapay zeka modeline hazırlamak için kalitesini artıran ve istenmeyen etkileri temizleyen aşamadır. Bu ünitenin geri kalanı yedi ön işleme tekniğini sırayla anlatır: gri seviye, gürültü azaltma, histogram, boyutlandırma, normalizasyon, eşikleme, geometrik dönüşüm.

> **Sık hata:** Restorasyon ile iyileştirmeyi aynı sanmak. İyileştirme görüntüyü göze daha iyi gösterir; restorasyon bilinen bir bozulmayı tersine çevirip özgün görüntüyü geri kazanmaya çalışır.
`),
      dene: ["bm-u6-restorasyon"],
    },
    {
      baslik: "Gri seviyeye dönüştürme",
      metin: md(`
**Neden önemli?** Renkli bir görüntü üç kanal taşır; çoğu tıbbi analizde renk gerekmez. Tek kanala inmek veri boyutunu ve işlem yükünü üçte birine düşürür.

**Gri seviyeye dönüştürme**, kırmızı, yeşil ve mavi (RGB) kanallarının yoğunluk bilgisini birleştirip görüntüyü yalnızca siyah, beyaz ve gri tonlardan oluşan **tek bir kanala** indirmektir. Her pikselin yeni değeri farklı formüllerle hesaplanabilir:

**1. Ağırlıklı ortalama (luminosity), en yaygın yöntem.** İnsan gözü **yeşile en duyarlı, maviye en az duyarlıdır**; ağırlıklar buna göre seçilir (BT.601 standardı):

$$Gri = 0{,}299R + 0{,}587G + 0{,}114B$$

**2. Düz ortalama.** Üç kanalın ortalaması; gözün algısını tam yansıtmadığı için yapay durabilir:

$$Gri = \\frac{R + G + B}{3}$$

**3. Açıklık (lightness).** En büyük ve en küçük kanal değerinin ortalaması:

$$Gri = \\frac{\\max(R,G,B) + \\min(R,G,B)}{2}$$

[[G-H6-01]]

Aynı piksel üç yöntemde farklı gri değer verir; ağırlıklı yöntem yeşili baskın pikseli daha parlak gösterir, çünkü göz de onu öyle görür.

> **Sık hata:** Ağırlıklı ortalamada en büyük katsayıyı kırmızıya vermek. Sıralama yeşil (0,587) > kırmızı (0,299) > mavi (0,114)'dir.
`),
      dene: ["bm-u6-luminosity"],
    },
    {
      baslik: "Gürültü azaltma ve filtreleme",
      metin: md(`
**Neden önemli?** Düşük dozlu bir BT ya da hızlı çekilmiş bir ultrason görüntüsü kumlu görünür. Gürültüyü azaltırken ayrıntıyı (kenarları) korumak, filtre seçiminin bütün sanatıdır.

**Gürültü azaltma**, fotoğraf, video ya da mikroskop görüntülerindeki istenmeyen kumlanmayı, paraziti ve renk bozulmasını temizlemektir. Filtreler çoğunlukla bir pikselin **3×3** gibi küçük bir komşuluğuna bakar:

- **Ortalama filtre**: her pikseli komşularının ortalamasıyla değiştirir. Gürültüyü azaltır ama **ince ayrıntıları ve kenarları da bulanıklaştırır**.
- **Medyan filtre**: komşuları sıralar, **ortadakini** seçer. Ani ve rastgele beyaz-siyah noktalardan oluşan **tuz-biber** gürültüsünü ayrıntıyı daha iyi koruyarak temizler.
- **Gauss filtresi**: Gauss biçimli ağırlık matrisiyle genel bir yumuşatma yapar, yüksek frekanslı paraziti bastırır.

[[G-H6-02]]

Örnek: komşuluk 20, 20, 20, 20, 200, 20, 20, 20, 20 olsun. Ortalama $(8 \\times 20 + 200)/9 = 40$ verir; gürültü komşulara yayılır. Sıralanınca ortadaki (5.) değer 20'dir; medyan gürültüyü tamamen siler.

**Uzamsal ve zamansal filtreler:**

- **Uzamsal (spatial)**: tek bir karedeki pikselleri inceler.
- **Zamansal (temporal)**: videoda **ardışık kareleri** karşılaştırır, zamanla sabit kalmayan rastgele kumlanmayı ayıklar.

Bunlara ek olarak gürültüyü dokudan ayırt edip keskinliği koruyan yapay zeka destekli araçlar da kullanılır.

> **Sık hata:** Tuz-biber gürültüsüne ortalama filtre uygulamak. Tek bir 255'lik piksel bütün komşuluğu aydınlatır; medyan ise onu doğrudan atar.
`),
      dene: ["bm-u6-tuz-biber"],
    },
    {
      baslik: "Parlaklık, kontrast ve histogram eşitleme",
      metin: md(`
**Neden önemli?** Karanlık bir röntgende kemik ile yumuşak doku arasındaki fark birkaç gri tona sıkışabilir. Histogram eşitleme bu tonları açarak gizli ayrıntıyı görünür kılar.

**Görüntü histogramı**, her ton değerinde kaç piksel olduğunu gösteren çubuk grafiktir:

- **Yatay eksen**: ton (parlaklık), genellikle 0–255. Sol uç (0) siyah, orta gri, sağ uç (255) beyaz.
- **Dikey eksen**: o tondaki **piksel sayısı**.

Histogramı solda yığılmış görüntü **karanlık**, sağda yığılmış görüntü **parlak**, dar bir aralıkta yığılmış görüntü **sönük (düşük kontrastlı)** görünür.

**Parlaklık ve kontrast ayarı** **doğrusal** işlemlerdir:

- **Parlaklık**: bütün piksellere sabit bir sayı eklemek (aydınlatır) ya da çıkarmak (karartır).
- **Kontrast**: en karanlık ve en aydınlık bölgeler arasındaki fark. Artırılınca açıklar daha açık, koyular daha koyu olur.

**Histogram eşitleme**, kontrastı otomatik artıran **doğrusal olmayan** bir tekniktir. Tek bölgeye yığılmış piksel değerlerini bütün aralığa **eşit (homojen)** biçimde dağıtır. Her pikselin yeni değeri, o tondan küçük ya da eşit piksellerin oranına (birikimli dağılım) göre belirlenir:

$$s_k = 255 \\cdot \\frac{\\text{değeri} \\le r_k \\text{ olan piksel sayısı}}{\\text{toplam piksel sayısı}}$$

[[G-H6-03]]

Sonuçta gizli ayrıntılar belirginleşir; özellikle **röntgen ve MR** görüntülerinde ve gece çekimlerinde nesneyi arka plandan ayırmada çok etkilidir.

> **Sık hata:** Histogram eşitlemeyi kontrast ayarı gibi doğrusal sanmak. Her tona aynı sayı eklenmez; yoğun tonlar birbirinden uzaklaştırılır, seyrek tonlar sıkıştırılır.
`),
      dene: ["bm-u6-esitleme-dogrusal"],
    },
    {
      baslik: "Boyutlandırma, yeniden örnekleme ve normalizasyon",
      metin: md(`
**Neden önemli?** Bir derin öğrenme modeli sabit boyutlu ve sabit aralıklı giriş bekler. Farklı cihazlardan gelen görüntüleri aynı boyuta ve aynı değer aralığına getirmeden eğitim kararlı olmaz.

**Yeniden boyutlandırma (resampling olmadan)**: toplam piksel sayısı değişmez, yalnızca **baskı boyutu** (inç, cm) değişir. Pikseller sabit kalır; değişen **PPI**'dır (inç başına piksel).

**Yeniden örnekleme (resampling)**: piksel sayısı gerçekten değişir.

- **Upsampling (yukarı ölçekleme)**: piksel ekler, görüntüyü büyütür. Yeni pikseller **tahmin edildiği** için genellikle **bulanıklık ve kalite kaybı** olur.
- **Downsampling (aşağı ölçekleme)**: piksel siler, görüntüyü küçültür; genellikle kaliteyi korur.

**Görüntü ölçekleme** görüntüyü farklı ekranlara ya da modelin giriş katmanına uydurur; örneğin pek çok **CNN 224×224** piksel giriş bekler.

**Normalizasyon**, piksel değerlerinin aralığını değiştiren bir yoğunluk eşlemesidir. Farklı ışık ve cihaz koşullarındaki görüntüleri karşılaştırılabilir yapar, modelin daha hızlı ve kararlı öğrenmesini sağlar. Piksel değerleri genellikle **[0, 1]** ya da **[−1, 1]** aralığına çekilir. 8 bitlik bir gri görüntüde her piksel **255'e bölünerek** [0, 1]'e indirgenir:

$$x' = \\frac{x}{255}, \\qquad \\text{örneğin } 102 \\to 0{,}4$$

> **Sık hata:** Büyütmenin görüntüye ayrıntı eklediğini düşünmek. Upsampling ölçülmemiş pikselleri tahmin eder; ayrıntı eklemez, çoğu zaman bulanıklaştırır.
`),
      dene: ["bm-u6-ppi"],
    },
    {
      baslik: "Eşikleme",
      metin: md(`
**Neden önemli?** Bir tümörü, hücreyi ya da kemiği arka plandan ayırmanın en basit yolu eşiklemedir. Pek çok bölütleme yöntemi bu fikrin üzerine kurulur.

**Eşikleme (thresholding)**, gri bir görüntüyü siyah-beyaz (**ikili, binary**) bir görüntüye çeviren en temel **bölütleme** yöntemidir. Her pikselin değeri bir **T eşiğiyle** karşılaştırılır:

$$g(x,y) = \\begin{cases} 255 \\ (\\text{ya da } 1) & f(x,y) \\ge T \\\\ 0 & f(x,y) < T \\end{cases}$$

Eşikten **büyük ya da eşit** piksel beyaz, **küçük** piksel siyah olur. Böylece ön plandaki nesne arka plandan net biçimde ayrılır.

[[G-H6-04]]

**Yaygın eşikleme yöntemleri:**

- **Basit (global) eşikleme**: bütün görüntü için **tek, sabit** bir eşik.
- **Uyarlamalı (adaptive) eşikleme**: aydınlatma her yerde eşit değilse eşik, pikselin **yerel çevresine** göre hesaplanır.
- **Otsu algoritması**: görüntünün **histogramına** bakarak en uygun eşiği **otomatik** bulan istatistiksel yöntem.

> **Sık hata:** Eşiğe tam eşit pikseli siyah saymak. Bu derste kural "eşikten büyük **ya da eşit** ise beyaz"dır.
`),
      dene: ["bm-u6-otsu"],
    },
    {
      baslik: "Geometrik dönüşümler",
      metin: md(`
**Neden önemli?** Az sayıda tıbbi görüntüyle model eğitirken görüntüleri döndürüp kaydırarak yapay çeşitlilik (veri artırma) üretilir. Hangi dönüşümün neyi koruduğunu bilmek gerekir.

**Geometrik dönüşümler**, bir şeklin **konumunu, yönünü ya da boyutunu** belirli kurallarla değiştiren işlemlerdir. Biçimi ve boyutu koruyup yalnızca yeri ya da yönü değiştiren dönüşümlere **izometri** denir; ölçeği değiştiren dönüşümler de vardır.

- **Öteleme (translation)**: şekli **biçimini ve yönünü değiştirmeden** belirli doğrultuda ve uzaklıkta kaydırmak. $(x, y) \\to (x + a,\\ y + b)$.
- **Dönme (rotation)**: şekli sabit bir **dönme merkezi** etrafında belirli bir açıyla çevirmek. **Saat yönünün tersi pozitif (+)**, saat yönü negatif (−) kabul edilir. Merkez etrafında +90°: $(x, y) \\to (-y,\\ x)$.
- **Yansıma (simetri)**: şeklin bir doğruya ya da noktaya göre aynadaki görüntüsünü oluşturmak. **Boyut değişmez, yön ters döner.** y eksenine göre: $(x, y) \\to (-x,\\ y)$.
- **Bileşke dönüşüm**: birden fazla dönüşümün art arda uygulanması. Örneğin bir doğruya göre yansıtıp sonra o doğruya **paralel** kaydırmaya **ötelemeli yansıma** denir.

[[G-H6-05]]

Ön işlemede bunlara **kırpma (cropping)** ve **aynalama (flipping)** de eklenir; hepsi veri çeşitliliğini artırmak için kullanılır.

> **Sık hata:** Matematikteki pozitif dönme yönünü saat yönü sanmak. Pozitif açı saat yönünün **tersidir**.
`),
      dene: ["bm-u6-oteleme"],
    },
  ],
  test: [
    "bm-u6-morfoloji",
    "bm-u6-gri-amac",
    "bm-u6-ortalama-bulanik",
    "bm-u6-zamansal",
    "bm-u6-esitleme",
    "bm-u6-karanlik",
    "bm-u6-normalize",
    "bm-u6-uyarlamali",
    "bm-u6-esik-ikili",
    "bm-u6-donme-yon",
  ],
};
