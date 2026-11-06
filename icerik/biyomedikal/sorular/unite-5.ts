// 5. ünite (Önişlemler 1 sunumu): temel istatistik, normal dağılım, veri
// temizleme, IQR ile aykırı değer, ölçekleme, eksik veri, filtreler, yeniden örnekleme.

import { sunum, type Soru } from "./yardimci.ts";

const U = 5;

export const unite5: Soru[] = [
  ...sunum(U, "u5-merkez", [
    {
      id: "bm-u5-medyan-cift", tip: "num", zorluk: 1,
      soru: "7, 3, 9, 1, 5, 8 veri kümesinin medyanı (ortancası) kaçtır?",
      bosluklar: [["6"]],
      aciklama: "Sıralı hali 1, 3, 5, 7, 8, 9. Veri sayısı çift olduğu için ortadaki iki sayının ortalaması alınır: $(5+7)/2 = 6$.",
    },
    {
      id: "bm-u5-mod", tip: "num", zorluk: 1,
      soru: "2, 3, 3, 4, 7, 7, 7, 8 veri kümesinin modu kaçtır?",
      bosluklar: [["7"]],
      aciklama: "Mod en çok tekrar eden değerdir; 7 üç kez geçer.",
    },
    {
      id: "bm-u5-mod-coklu", tip: "tf", zorluk: 1,
      soru: "Bir veri kümesinin her zaman tek bir modu vardır.",
      dogru: false,
      aciklama: "Yanlış. Bir veri grubunda birden fazla mod olabilir ya da hiç mod olmayabilir.",
    },
    {
      id: "bm-u5-ortalama", tip: "num", zorluk: 1,
      soru: "4, 8, 6, 10, 2 veri kümesinin aritmetik ortalaması kaçtır?",
      bosluklar: [["6"]],
      aciklama: "Toplam 30, veri sayısı 5: $30/5 = 6$.",
    },
  ]),

  ...sunum(U, "u5-dagilim", [
    {
      id: "bm-u5-standart-normal", tip: "mcq", zorluk: 1,
      soru: "Standart normal dağılımın ortalaması ve standart sapması kaçtır?",
      secenekler: ["Ortalama 0, standart sapma 1", "Ortalama 1, standart sapma 0", "Ortalama 0, standart sapma 0", "Ortalama 1, standart sapma 1"],
      dogru: 0,
      aciklama: "Standart normal dağılım **ortalaması 0, standart sapması 1** olan teorik dağılımdır.",
    },
    {
      id: "bm-u5-mod-medyan", tip: "tf", zorluk: 1,
      soru: "Normal dağılımda mod, medyan ve ortalama birbirine eşittir.",
      dogru: true,
      aciklama: "Doğru. Dağılım mükemmel simetrik olduğu için üçü de merkezde çakışır.",
    },
    {
      id: "bm-u5-pozitif-carpik", tip: "mcq", zorluk: 2,
      soru: "Skorların çoğu ortalamanın solunda (ortalamadan küçük) birikmişse dağılım nasıl adlandırılır?",
      secenekler: ["Pozitif çarpık", "Negatif çarpık", "Leptokurtik", "Platikurtik"],
      dogru: 0,
      aciklama: "Skorların çoğu ortalamanın solundaysa (uzun kuyruk sağdaysa) dağılım **pozitif çarpık**, sağında birikmişse negatif çarpıktır.",
    },
    {
      id: "bm-u5-leptokurtik", tip: "mcq", zorluk: 2,
      soru: "Dağılımın ortasında çok fazla örnek yığılmışsa (dar eğri) bu dağılım nasıl adlandırılır ve kurtosis değeri nasıldır?",
      secenekler: ["Leptokurtik, pozitif", "Platikurtik, negatif", "Mezokurtik, sıfır", "Leptokurtik, negatif"],
      dogru: 0,
      aciklama: "Ortada çok örnek: **leptokurtik**, kurtosis **pozitif**. Ortada az örnek: platikurtik, negatif. Normal dağılım mezokurtiktir ve kurtosis değeri sıfırdır.",
    },
    {
      id: "bm-u5-skewness", tip: "fill", zorluk: 2,
      soru: "Bir dağılımın simetrik olmama derecesini ölçen istatistiğe çarpıklık ya da İngilizcesiyle ____ denir.",
      bosluklar: [["skewness"]],
      aciklama: "Çarpıklık **skewness**, yığılma (basıklık) ise kurtosis olarak bilinir; ikisi bir dağılımın normal olup olmadığını anlamak için kullanılır.",
    },
  ]),

  ...sunum(U, "u5-temizleme", [
    {
      id: "bm-u5-adim-sira", tip: "mcq", zorluk: 1,
      soru: "Sunumdaki veri işleme akışında ilk adım hangisidir?",
      secenekler: ["Ön işlem", "Özellik çıkarma", "Sınıflandırma", "Performans değerlendirme"],
      dogru: 0,
      aciklama: "Akış: **ön işlem** → parametre belirleme, özellik çıkarma, dönüşüm → sınıflandırma, tanıma → performans değerlendirme.",
    },
    {
      id: "bm-u5-amac", tip: "tf", zorluk: 1,
      soru: "Veri ön işlemenin amacı, sonraki analiz ve modellemenin hem doğruluğunu hem de verimliliğini artırmaktır.",
      dogru: true,
      aciklama: "Doğru. Ham veride eksik ve aykırı değerler analizde hatalı sonuçlara yol açabilir.",
    },
    {
      id: "bm-u5-yas150", tip: "mcq", zorluk: 1,
      soru: "Bir hasta kaydında yaşın 150 girilmiş olması hangi veri temizleme adımının konusudur?",
      secenekler: ["Aykırı değer tespiti", "Yinelenen kayıtların kaldırılması", "Kategorik dönüşüm", "Veri entegrasyonu"],
      dogru: 0,
      aciklama: "Genel eğilimin dışındaki mantık dışı uç değerler **aykırı değer tespiti** ile bulunur, düzeltilir ya da filtrelenir.",
    },
    {
      id: "bm-u5-entegrasyon", tip: "mcq", zorluk: 2,
      soru: "Farklı veritabanlarından gelen verilerin tek kümede toplanması ve çelişkili şemaların giderilmesi hangi işlemin konusudur?",
      secenekler: ["Veri entegrasyonu", "Veri azaltma", "Veri dönüştürme", "Yeniden örnekleme"],
      dogru: 0,
      aciklama: "**Veri entegrasyonu** kaynakları birleştirir ve çakışmaları çözer.",
    },
    {
      id: "bm-u5-pca", tip: "fill", zorluk: 2,
      soru: "Değişken sayısını azaltan boyut indirgeme yöntemlerine örnek olarak sunumda temel bileşen analizi, kısaltmasıyla ____ verilir.",
      bosluklar: [["pca"]],
      aciklama: "**PCA** (Principal Component Analysis) veri azaltmada boyut indirgeme için kullanılır.",
    },
  ]),

  ...sunum(U, "u5-iqr", [
    {
      id: "bm-u5-iqr-tanim", tip: "mcq", zorluk: 1,
      soru: "IQR (çeyrekler arası aralık) nasıl hesaplanır?",
      secenekler: ["$Q_3 - Q_1$", "$Q_2 - Q_1$", "$Q_3 + Q_1$", "$(Q_1 + Q_3)/2$"],
      dogru: 0,
      aciklama: "IQR verinin orta %50'lik bölümünün genişliğidir: $IQR = Q_3 - Q_1$.",
    },
    {
      id: "bm-u5-iqr-hesap", tip: "num", zorluk: 2,
      soru: "2, 4, 5, 7, 8, 10, 12, 30 veri kümesinde Q1 alt yarının, Q3 üst yarının medyanı olarak alınıyor. IQR kaçtır?",
      bosluklar: [["6.5"]],
      aciklama: "Alt yarı 2, 4, 5, 7: $Q_1 = 4{,}5$. Üst yarı 8, 10, 12, 30: $Q_3 = 11$. $IQR = 11 - 4{,}5 = 6{,}5$.",
    },
    {
      id: "bm-u5-ust-sinir", tip: "num", zorluk: 3,
      soru: "Aynı veri kümesinde (2, 4, 5, 7, 8, 10, 12, 30; $Q_1 = 4{,}5$, $Q_3 = 11$) 1,5 kuralına göre üst sınır kaçtır?",
      bosluklar: [["20.75"]],
      aciklama: "Üst sınır $Q_3 + 1{,}5 \\times IQR = 11 + 1{,}5 \\times 6{,}5 = 20{,}75$. 30 bu sınırın üstünde kaldığı için aykırı değerdir.",
    },
    {
      id: "bm-u5-alt-sinir", tip: "mcq", zorluk: 2,
      soru: "IQR yönteminde alt aykırı değer sınırı hangisidir?",
      secenekler: ["$Q_1 - 1{,}5 \\times IQR$", "$Q_1 + 1{,}5 \\times IQR$", "$Q_3 - 1{,}5 \\times IQR$", "$Q_2 - 3 \\times IQR$"],
      dogru: 0,
      aciklama: "Alt sınır $Q_1 - 1{,}5 \\times IQR$, üst sınır $Q_3 + 1{,}5 \\times IQR$'dir.",
    },
    {
      id: "bm-u5-iqr-dayanikli", tip: "mcq", zorluk: 2,
      soru: "IQR yöntemi neden aşırı uç değerlerden doğrudan etkilenmez?",
      secenekler: ["Ortalama yerine medyan ve çeyrekleri temel aldığı için", "Bütün değerlerin karesini aldığı için", "Yalnızca normal dağılımlı verilerde çalıştığı için", "Uç değerleri önceden ortalama ile doldurduğu için"],
      dogru: 0,
      aciklama: "IQR **medyan ve çeyreklere** dayanır; bu yüzden dayanıklıdır ve çarpık dağılımlarda da başarılıdır.",
    },
    {
      id: "bm-u5-boxplot", tip: "tf", zorluk: 1,
      soru: "Kutu grafiği (box plot), aykırı gözlemleri belirlemek için sınır değerlerin tanımlanabildiği yöntemlerden biridir.",
      dogru: true,
      aciklama: "Doğru. Kutu Q1'den Q3'e uzanır, bıyıklar 1,5 × IQR sınırlarına kadar gider, dışındaki noktalar aykırıdır.",
    },
  ]),

  ...sunum(U, "u5-olcek", [
    {
      id: "bm-u5-minmax", tip: "num", zorluk: 2,
      soru: "En küçük değeri 20, en büyük değeri 120 olan bir değişkende 70 değeri min-max normalizasyonuyla kaça dönüşür?",
      bosluklar: [["0.5"]],
      aciklama: "$x' = (x - x_{min})/(x_{max} - x_{min}) = (70 - 20)/(120 - 20) = 0{,}5$.",
    },
    {
      id: "bm-u5-zskor", tip: "num", zorluk: 2,
      soru: "Ortalaması 50, standart sapması 10 olan bir değişkende 65 değerinin z-skoru kaçtır?",
      bosluklar: [["1.5"]],
      aciklama: "$z = (x - \\mu)/\\sigma = (65 - 50)/10 = 1{,}5$. Pozitif z, değerin ortalamanın üstünde olduğunu gösterir.",
    },
    {
      id: "bm-u5-z-negatif", tip: "tf", zorluk: 1,
      soru: "Negatif bir z-skoru, veri noktasının ortalamanın altında olduğunu gösterir.",
      dogru: true,
      aciklama: "Doğru. Sıfır z-skoru değerin ortalamaya eşit olduğunu gösterir.",
    },
    {
      id: "bm-u5-z-sonuc", tip: "mcq", zorluk: 1,
      soru: "Z-skor standardizasyonundan sonra verinin ortalaması ve standart sapması ne olur?",
      secenekler: ["0 ve 1", "0 ile 1 arasında", "1 ve 0", "Değişmez"],
      dogru: 0,
      aciklama: "Standardizasyon verinin **ortalamasını 0, standart sapmasını 1** yapar. Değerleri 0–1 aralığına çeken min-max normalizasyonudur.",
    },
    {
      id: "bm-u5-onehot", tip: "mcq", zorluk: 2,
      soru: "Kategorik etiketlerin One-Hot ya da Label Encoding ile sayısal değerlere çevrilmesi hangi işlemdir?",
      secenekler: ["Veri dönüştürme", "Veri temizleme", "Veri entegrasyonu", "Veri azaltma"],
      dogru: 0,
      aciklama: "Normalizasyon, standardizasyon ve kategorik dönüşüm (encoding) **veri dönüştürme** başlığındadır.",
    },
  ]),

  ...sunum(U, "u5-eksik", [
    {
      id: "bm-u5-medyan-doldur", tip: "mcq", zorluk: 2,
      soru: "Aykırı değerlerin yoğun olduğu, çarpık dağılımlı sayısal bir sütunda eksik değerler için en güvenli basit yöntem hangisidir?",
      secenekler: ["Medyan ile doldurma", "Ortalama ile doldurma", "Mod ile doldurma", "Sabit 0 ile doldurma"],
      dogru: 0,
      aciklama: "**Medyan** uç değerlerden etkilenmez. Ortalama normal dağılımlı veriye, mod kategorik veriye uygundur.",
    },
    {
      id: "bm-u5-mod-kategorik", tip: "tf", zorluk: 1,
      soru: "Mod ile doldurma genellikle kategorik (metinsel) veriler için tercih edilir.",
      dogru: true,
      aciklama: "Doğru. Kategorik sütunun en sık değeri eksik yere yazılır.",
    },
    {
      id: "bm-u5-ffill", tip: "num", zorluk: 1,
      soru: "5, ?, 9 zaman serisinde eksik değer ileriye doğru doldurma (forward fill) ile kaç olur?",
      bosluklar: [["5"]],
      aciklama: "İleriye doğru doldurma eksik değeri kendisinden **hemen önceki** geçerli değerle doldurur: 5. Geriye doğru doldurma 9 verirdi.",
    },
    {
      id: "bm-u5-interp", tip: "num", zorluk: 2,
      soru: "t = 1'de 10, t = 3'te 16 olan bir zaman serisinde t = 2'deki eksik değer doğrusal interpolasyonla kaç olur?",
      bosluklar: [["13"]],
      aciklama: "İki bilinen nokta arasına doğru çekilir: $10 + (16 - 10) \\times \\frac{1}{2} = 13$.",
    },
    {
      id: "bm-u5-knn", tip: "mcq", zorluk: 2,
      soru: "Eksik veriye sahip satıra en benzer K satırı bulup onların değerlerinin ortalamasıyla dolduran yöntem hangisidir?",
      secenekler: ["K-en yakın komşu (K-NN) ile doldurma", "Mevsimsel doldurma", "Geriye doğru doldurma", "Sabit değer atama"],
      dogru: 0,
      aciklama: "**K-NN imputation** diğer sütunlara bakarak en yakın komşuları bulan çok değişkenli bir yöntemdir. MICE ve regresyon da bu gruptadır.",
    },
    {
      id: "bm-u5-silme", tip: "tf", zorluk: 2,
      soru: "Zaman serilerinde ardışıklık önemli olduğu için eksik verileri doğrudan silmek yerine uygun yöntemlerle doldurmak gerekir.",
      dogru: true,
      aciklama: "Doğru. Satır silmek zaman eksenini bozar; ileriye/geriye taşıma, interpolasyon ya da mevsimsel doldurma kullanılır.",
    },
  ]),

  ...sunum(U, "u5-zaman-filtre", [
    {
      id: "bm-u5-sma", tip: "num", zorluk: 2,
      soru: "2, 4, 9, 7 dizisine 3 örneklik basit hareketli ortalama uygulanıyor. Son üç örnekten (4, 9, 7) hesaplanan çıkış kaçtır?",
      bosluklar: [["6.67±0.01"]],
      aciklama: "$(4 + 9 + 7)/3 = 20/3 \\approx 6{,}67$.",
    },
    {
      id: "bm-u5-medyan-filtre", tip: "mcq", zorluk: 2,
      soru: "Sinyaldeki ani ve çok yüksek sıçramaları (tuz-biber gürültüsü) ana sinyali bozmadan temizlemek için hangi filtre en uygundur?",
      secenekler: ["Medyan filtresi", "Basit hareketli ortalama", "Yüksek geçiren filtre", "Üstel yumuşatma"],
      dogru: 0,
      aciklama: "**Medyan filtresi** penceredeki değerleri sıralayıp ortadakini seçer; tek bir sıçrama medyanı değiştirmez.",
    },
    {
      id: "bm-u5-medyan-hesap", tip: "num", zorluk: 2,
      soru: "3 örneklik medyan filtresinin penceresinde 4, 95, 6 değerleri var. Çıkış kaçtır?",
      bosluklar: [["6"]],
      aciklama: "Sıralı hali 4, 6, 95; ortadaki değer 6. Ortalama alınsaydı sıçrama çıkışı 35'e çekerdi.",
    },
    {
      id: "bm-u5-sma-gecikme", tip: "tf", zorluk: 2,
      soru: "Basit hareketli ortalama gürültüyü azaltmada etkilidir ama ani değişimlere geç tepki verir (gecikme yaratır).",
      dogru: true,
      aciklama: "Doğru. Ağırlıklı hareketli ortalama ve üstel yumuşatma güncel verilere daha çok ağırlık vererek trend değişimini daha hızlı yakalar.",
    },
    {
      id: "bm-u5-ema", tip: "mcq", zorluk: 2,
      soru: "Geçmiş verilere azalan üstel ağırlıklar veren ve en güncel veriye her zaman en yüksek ağırlığı veren yöntem hangisidir?",
      secenekler: ["Üstel yumuşatma (EMA)", "Basit hareketli ortalama (SMA)", "Medyan filtresi (median)", "Savitzky-Golay filtresi (polinom)"],
      dogru: 0,
      aciklama: "**Üstel yumuşatma** ağırlıkları geçmişe doğru üstel olarak azaltır.",
    },
  ]),

  ...sunum(U, "u5-frekans-filtre", [
    {
      id: "bm-u5-notch", tip: "mcq", zorluk: 1,
      soru: "Biyomedikal sinyale prizlerden karışan 50 Hz şebeke gürültüsünü gidermek için hangi filtre kullanılır?",
      secenekler: ["Bant söndüren filtre", "Bant geçiren filtre", "Alçak geçiren filtre", "Hareketli ortalama"],
      dogru: 0,
      aciklama: "**Bant söndüren (notch)** filtre yalnızca belirli bir frekanstaki gürültüyü yok eder.",
    },
    {
      id: "bm-u5-alfa-izole", tip: "mcq", zorluk: 1,
      soru: "EEG'den yalnızca 8–12 Hz arasındaki alfa dalgalarını ayırmak için hangi filtre kullanılır?",
      secenekler: ["Bant geçiren filtre", "Bant söndüren filtre", "Yüksek geçiren filtre", "Medyan filtresi"],
      dogru: 0,
      aciklama: "**Bant geçiren** filtre yalnızca belirli bir frekans aralığını geçirir.",
    },
    {
      id: "bm-u5-lpf", tip: "tf", zorluk: 1,
      soru: "Alçak geçiren filtre, kesim frekansının altındaki bileşenleri geçirir ve üstündeki hızlı değişimleri sönümler.",
      dogru: true,
      aciklama: "Doğru. Yüksek geçiren filtre bunun tersini yapar: kesim frekansının altındaki yavaş trendleri zayıflatır.",
    },
    {
      id: "bm-u5-kesim", tip: "fill", zorluk: 1,
      soru: "Bir filtrenin hangi frekanstan sonra sinyali engelleyeceğini ya da geçireceğini belirleyen sınır değere ____ frekansı denir.",
      bosluklar: [["kesim", "cutoff"]],
      aciklama: "**Kesim frekansı** ($f_c$, cutoff frequency) filtrenin eşik değeridir.",
    },
    {
      id: "bm-u5-butterworth", tip: "mcq", zorluk: 2,
      soru: "Geçiş bandında olabildiğince düz (dalgalanmasız) bir frekans yanıtı veren klasik filtre hangisidir?",
      secenekler: ["Butterworth", "Chebyshev", "Notch", "Medyan"],
      dogru: 0,
      aciklama: "**Butterworth** geçiş bandında düzdür. Chebyshev kesimde daha keskin düşer ama dalgalanma (ripple) yaratır.",
    },
    {
      id: "bm-u5-savgol", tip: "mcq", zorluk: 3,
      soru: "Yerel veri noktalarına düşük dereceli polinom uydurarak çalışan ve tepe-dip noktalarının yüksekliğini en iyi koruyan filtre hangisidir?",
      secenekler: ["Savitzky-Golay", "Butterworth", "Chebyshev", "Basit hareketli ortalama"],
      dogru: 0,
      aciklama: "**Savitzky-Golay** filtresi polinom uydurur; dalga biçimini diğer yumuşatıcılardan daha iyi korur.",
    },
  ]),

  ...sunum(U, "u5-ornekleme", [
    {
      id: "bm-u5-downsampling", tip: "mcq", zorluk: 1,
      soru: "Saniyelik ölçülmüş bir veriyi dakikalık veriye indirgemek hangi işlemdir?",
      secenekler: ["Downsampling (örneklem azaltma)", "Upsampling (örneklem artırma)", "Normalizasyon (ölçekleme)", "İnterpolasyon (ara değer bulma)"],
      dogru: 0,
      aciklama: "**Downsampling** sıklığı düşürür; ortalama ya da maksimum gibi fonksiyonlarla birleştirir. Upsampling'de boş noktalar interpolasyonla doldurulur.",
    },
    {
      id: "bm-u5-lag", tip: "mcq", zorluk: 2,
      soru: "Modelin geçmişi görebilmesi için t−1, t−2 anlarındaki değerlerin yeni öznitelik olarak eklenmesine ne denir?",
      secenekler: ["Gecikme özellikleri", "Pencere istatistikleri", "Takvim özellikleri", "Kategorik dönüşüm"],
      dogru: 0,
      aciklama: "**Gecikme (lag) özellikleri**. Son 5 adımın ortalaması gibi değerler pencere istatistikleri, \"hafta sonu mu?\" gibi bilgiler takvim özellikleridir.",
    },
    {
      id: "bm-u5-upsampling", tip: "tf", zorluk: 1,
      soru: "Upsampling sırasında oluşan yeni boş noktalar interpolasyon yöntemleriyle doldurulur.",
      dogru: true,
      aciklama: "Doğru. Örneklem artırmada eksik ara noktalar tahmin edilir.",
    },
  ]),
];
