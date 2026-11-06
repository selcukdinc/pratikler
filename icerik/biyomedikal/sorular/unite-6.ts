// 6. ünite (Önişlemler 2 sunumu): görüntü işleme teknikleri, gri seviye,
// gürültü azaltma, histogram ve histogram eşitleme, yeniden örnekleme,
// normalizasyon, eşikleme, geometrik dönüşümler.

import { sunum, type Soru } from "./yardimci.ts";

const U = 6;

export const unite6: Soru[] = [
  ...sunum(U, "u6-teknik", [
    {
      id: "bm-u6-restorasyon", tip: "mcq", zorluk: 2,
      soru: "Bulanıklık, odaklama hatası ve sensör bozulmalarını (örneğin Wiener filtresiyle) düzeltip özgün görüntüyü geri kazandırmaya ne denir?",
      secenekler: ["Görüntü restorasyonu", "Görüntü bölütleme", "Morfolojik işlem", "Geometrik dönüşüm"],
      dogru: 0,
      aciklama: "**Restorasyon** bozulmayı geri alır. Bölütleme görüntüyü parçalara ayırır, morfolojik işlemler ikili görüntüde sınırları şekillendirir.",
    },
    {
      id: "bm-u6-morfoloji", tip: "mcq", zorluk: 2,
      soru: "Aşındırma (erosion) ve genişletme (dilation) hangi görüntü işleme grubuna girer?",
      secenekler: ["Morfolojik işlemler", "Geometrik dönüşümler", "Histogram işlemleri", "Frekans alanı filtreleri"],
      dogru: 0,
      aciklama: "İkili görüntülerde nesne sınırlarını şekillendiren erosion ve dilation **morfolojik işlemler**dir.",
    },
    {
      id: "bm-u6-bolutleme", tip: "tf", zorluk: 1,
      soru: "Eşikleme, watershed ve K-Means, görüntüyü anlamlı parçalara ayıran bölütleme (segmentation) teknikleridir.",
      dogru: true,
      aciklama: "Doğru. Kenar bulmak için ise Sobel ve Canny gibi algoritmalar kullanılır.",
    },
  ]),

  ...sunum(U, "u6-gri", [
    {
      id: "bm-u6-luminosity", tip: "mcq", zorluk: 2,
      soru: "BT.601 standardındaki ağırlıklı ortalama (luminosity) formülünde en büyük ağırlık hangi kanala verilir ve neden?",
      secenekler: ["Yeşil; insan gözü yeşile en duyarlı olduğu için", "Kırmızı; en uzun dalga boyuna sahip olduğu için", "Mavi; insan gözü maviye en duyarlı olduğu için", "Üçüne de eşit ağırlık verilir"],
      dogru: 0,
      aciklama: "$Gri = 0{,}299R + 0{,}587G + 0{,}114B$. Göz **yeşile** en duyarlı, maviye en az duyarlıdır.",
    },
    {
      id: "bm-u6-ortalama-gri", tip: "num", zorluk: 1,
      soru: "R = 90, G = 120, B = 150 olan bir pikselin düz ortalama yöntemiyle gri değeri kaçtır?",
      bosluklar: [["120"]],
      aciklama: "$Gri = (R + G + B)/3 = 360/3 = 120$.",
    },
    {
      id: "bm-u6-lightness", tip: "num", zorluk: 2,
      soru: "R = 200, G = 100, B = 40 olan bir pikselin açıklık (lightness) yöntemiyle gri değeri kaçtır?",
      bosluklar: [["120"]],
      aciklama: "$Gri = (\\max + \\min)/2 = (200 + 40)/2 = 120$.",
    },
    {
      id: "bm-u6-luminosity-hesap", tip: "num", zorluk: 3,
      soru: "R = 100, G = 200, B = 50 olan bir pikselin ağırlıklı ortalama ($0{,}299R + 0{,}587G + 0{,}114B$) ile gri değeri yaklaşık kaçtır?",
      bosluklar: [["153.0±0.6"]],
      aciklama: "$0{,}299 \\times 100 + 0{,}587 \\times 200 + 0{,}114 \\times 50 = 29{,}9 + 117{,}4 + 5{,}7 = 153$.",
    },
    {
      id: "bm-u6-gri-amac", tip: "tf", zorluk: 1,
      soru: "Gri seviyeye dönüştürme, RGB'nin üç kanalını tek bir parlaklık kanalına indirerek işlem yükünü azaltır.",
      dogru: true,
      aciklama: "Doğru. Özellikle nesne tanıma ve tıbbi görüntülemede veri boyutunu küçültmek için kullanılır.",
    },
  ]),

  ...sunum(U, "u6-gurultu", [
    {
      id: "bm-u6-tuz-biber", tip: "mcq", zorluk: 1,
      soru: "Görüntüdeki tuz-biber gürültüsünü kenarları en iyi koruyarak temizleyen filtre hangisidir?",
      secenekler: ["Medyan filtre", "Ortalama filtre", "Gauss filtresi", "Yüksek geçiren filtre"],
      dogru: 0,
      aciklama: "**Medyan filtre** komşuları sıralayıp ortadakini seçer; tek tük siyah-beyaz pikseller medyanı etkilemez.",
    },
    {
      id: "bm-u6-ortalama-bulanik", tip: "tf", zorluk: 1,
      soru: "Ortalama filtre gürültüyü azaltırken görüntüdeki ince detayları ve kenarları da bulanıklaştırır.",
      dogru: true,
      aciklama: "Doğru. Her piksel komşularının ortalamasıyla değiştirildiği için keskin geçişler yumuşar.",
    },
    {
      id: "bm-u6-ortalama-hesap", tip: "num", zorluk: 2,
      soru: "3×3 komşuluktaki değerler 10, 10, 10, 10, 255, 10, 10, 10, 10'dur. 3×3 ortalama filtrenin merkez piksel için çıkışı yaklaşık kaçtır?",
      bosluklar: [["37.2±0.1"]],
      aciklama: "$(8 \\times 10 + 255)/9 = 335/9 \\approx 37{,}2$. Medyan filtre aynı komşulukta 10 verirdi.",
    },
    {
      id: "bm-u6-medyan-hesap", tip: "num", zorluk: 2,
      soru: "Aynı 3×3 komşuluk (10, 10, 10, 10, 255, 10, 10, 10, 10) için medyan filtrenin çıkışı kaçtır?",
      bosluklar: [["10"]],
      aciklama: "Sıralanınca dokuz değerin beşincisi 10'dur; tuz gürültüsü tamamen silinir.",
    },
    {
      id: "bm-u6-zamansal", tip: "mcq", zorluk: 2,
      soru: "Videolarda ardışık kareleri karşılaştırarak zamanla sabit kalmayan rastgele kumlanmaları ayıklayan gürültü azaltma türü hangisidir?",
      secenekler: ["Zamansal filtre", "Uzamsal filtre", "Gauss filtresi", "Medyan filtre"],
      dogru: 0,
      aciklama: "**Zamansal (temporal)** filtre kareler arasında karşılaştırır; uzamsal filtre tek bir kare içinde çalışır.",
    },
  ]),

  ...sunum(U, "u6-histogram", [
    {
      id: "bm-u6-parlaklik", tip: "mcq", zorluk: 1,
      soru: "Görüntüdeki bütün piksellere sabit bir sayı eklemek neyi değiştirir?",
      secenekler: ["Parlaklığı", "Kontrastı", "Çözünürlüğü", "Renk kanalı sayısını"],
      dogru: 0,
      aciklama: "Sabit eklemek ya da çıkarmak **parlaklığı** değiştirir: eklenirse görüntü beyazlaşır, çıkarılırsa kararır.",
    },
    {
      id: "bm-u6-esitleme-dogrusal", tip: "mcq", zorluk: 2,
      soru: "Parlaklık-kontrast ayarı ile histogram eşitleme arasındaki fark için hangisi doğrudur?",
      secenekler: ["Parlaklık ve kontrast doğrusal, histogram eşitleme doğrusal olmayan bir işlemdir", "İkisi de doğrusal olmayan işlemlerdir", "Parlaklık ve kontrast doğrusal olmayan, histogram eşitleme doğrusal bir işlemdir", "İkisi de yalnızca renkli görüntülerde uygulanır"],
      dogru: 0,
      aciklama: "Parlaklık ve kontrast ayarı **doğrusal**, histogram eşitleme **doğrusal olmayan** bir işlemdir.",
    },
    {
      id: "bm-u6-esitleme", tip: "fill", zorluk: 2,
      soru: "Tek bir bölgeye yığılmış gri seviyeleri bütün aralığa homojen biçimde yayarak kontrastı otomatik artıran işleme histogram ____ denir.",
      bosluklar: [["eşitleme"]],
      aciklama: "**Histogram eşitleme** gizli detayları belirginleştirir; röntgen ve MR görüntülerinde çok kullanılır.",
    },
    {
      id: "bm-u6-histogram-eksen", tip: "tf", zorluk: 1,
      soru: "8 bitlik bir görüntünün histogramında yatay eksen 0–255 ton değerlerini, dikey eksen her tondaki piksel sayısını gösterir.",
      dogru: true,
      aciklama: "Doğru. Sol taraf (0) en koyu, sağ taraf (255) en parlak tonlardır.",
    },
    {
      id: "bm-u6-karanlik", tip: "mcq", zorluk: 2,
      soru: "Histogramı 0–60 aralığına yığılmış bir görüntü nasıl görünür?",
      secenekler: ["Karanlık", "Çok parlak", "Yüksek kontrastlı", "Tamamen beyaz"],
      dogru: 0,
      aciklama: "Piksellerin çoğu düşük tonlarda olduğu için görüntü **karanlık** görünür; eşitleme bu tonları bütün aralığa yayar.",
    },
  ]),

  ...sunum(U, "u6-boyut", [
    {
      id: "bm-u6-normalize", tip: "num", zorluk: 1,
      soru: "8 bitlik gri bir görüntüde 51 değerli piksel, 255'e bölünerek [0, 1] aralığına normalleştirilirse kaç olur?",
      bosluklar: [["0.2"]],
      aciklama: "$51/255 = 0{,}2$.",
    },
    {
      id: "bm-u6-upsampling-bulanik", tip: "tf", zorluk: 2,
      soru: "Yukarı ölçeklendirme (upsampling) yeni pikselleri tahminle ürettiği için genellikle bulanıklaşma ya da kalite kaybı yaratır.",
      dogru: true,
      aciklama: "Doğru. Aşağı ölçeklendirme (downsampling) ise genellikle kaliteyi korur.",
    },
    {
      id: "bm-u6-ppi", tip: "mcq", zorluk: 2,
      soru: "Piksel sayısını değiştirmeden yalnızca baskı boyutunu (cm ya da inç) değiştiren işlem neyi etkiler?",
      secenekler: ["Yalnızca PPI değerini", "Toplam piksel sayısını", "Renk kanalı sayısını", "Gri seviye sayısını"],
      dogru: 0,
      aciklama: "Yeniden örneklemesiz boyutlandırmada pikseller sabit kalır; yalnızca **PPI** artar ya da azalır.",
    },
    {
      id: "bm-u6-cnn", tip: "mcq", zorluk: 1,
      soru: "Sunuma göre görüntüleri örneğin 224×224 piksele getirmenin bir amacı nedir?",
      secenekler: ["CNN'lerin standart giriş katmanına uydurmak", "Görüntüyü siyah-beyaz ikili hale getirmek", "Renkleri gri tonlara çevirmek", "Tuz-biber gürültüsünü gidermek"],
      dogru: 0,
      aciklama: "Birçok **CNN** sabit boyutlu giriş bekler; görüntüler bu boyuta ölçeklenir.",
    },
  ]),

  ...sunum(U, "u6-esik", [
    {
      id: "bm-u6-otsu", tip: "mcq", zorluk: 2,
      soru: "Görüntünün histogramına bakarak en uygun eşik değerini otomatik belirleyen istatistiksel yöntem hangisidir?",
      secenekler: ["Otsu algoritması", "Uyarlamalı eşikleme", "Global eşikleme", "Histogram eşitleme"],
      dogru: 0,
      aciklama: "**Otsu** eşiği histogramdan otomatik bulur. Uyarlamalı eşiklemede eşik her pikselin yerel çevresine göre hesaplanır.",
    },
    {
      id: "bm-u6-uyarlamali", tip: "mcq", zorluk: 2,
      soru: "Aydınlatmanın her yerde eşit olmadığı bir görüntüde hangi eşikleme türü tercih edilir?",
      secenekler: ["Uyarlamalı eşikleme", "Basit global eşikleme", "Sabit 128 eşiği", "Ortalama filtre"],
      dogru: 0,
      aciklama: "**Uyarlamalı (adaptive)** eşiklemede eşik yerel çevreye göre dinamik hesaplanır.",
    },
    {
      id: "bm-u6-esik-kural", tip: "num", zorluk: 1,
      soru: "Eşik T = 100 ile yapılan ikili eşiklemede (eşikten büyük ya da eşit beyaz = 1, küçük siyah = 0) 100 değerli piksel kaç olur?",
      bosluklar: [["1"]],
      aciklama: "Değer eşikten **büyük ya da eşitse** beyaz (1 ya da 255) yapılır.",
    },
    {
      id: "bm-u6-esik-ikili", tip: "tf", zorluk: 1,
      soru: "Eşikleme, gri tonlu bir görüntüyü siyah-beyaz (ikili) görüntüye çeviren en temel bölütleme yöntemidir.",
      dogru: true,
      aciklama: "Doğru. Ön plandaki nesneler arka plandan ayrılır.",
    },
  ]),

  ...sunum(U, "u6-geometrik", [
    {
      id: "bm-u6-oteleme", tip: "mcq", zorluk: 1,
      soru: "Bir şekli biçimini ve yönünü değiştirmeden belirli bir doğrultuda kaydırma işlemi hangisidir?",
      secenekler: ["Öteleme", "Dönme", "Yansıma", "Ölçekleme"],
      dogru: 0,
      aciklama: "**Öteleme (translation)** yalnızca konumu değiştirir.",
    },
    {
      id: "bm-u6-donme-yon", tip: "tf", zorluk: 2,
      soru: "Matematikte dönme işleminde saat yönü pozitif, saat yönünün tersi negatif kabul edilir.",
      dogru: false,
      aciklama: "Yanlış. **Saat yönünün tersi pozitif (+)**, saat yönü negatif (−) kabul edilir.",
    },
    {
      id: "bm-u6-otelemeli-yansima", tip: "mcq", zorluk: 2,
      soru: "Bir şeklin önce bir doğruya göre yansıtılıp ardından o doğruya paralel kaydırılmasına ne denir?",
      secenekler: ["Ötelemeli yansıma", "Dönmeli öteleme", "Afin ölçekleme", "Noktaya göre yansıma"],
      dogru: 0,
      aciklama: "Birden çok dönüşümün ardı ardına uygulanması bileşke dönüşümdür; bu örneğe **ötelemeli yansıma** denir.",
    },
    {
      id: "bm-u6-izometri", tip: "tf", zorluk: 2,
      soru: "Öteleme, dönme ve yansıma şeklin boyutunu değiştirmez; bu tür dönüşümlere izometri denir.",
      dogru: true,
      aciklama: "Doğru. Ölçekleme ise boyutu değiştiren bir dönüşümdür.",
    },
  ]),
];
