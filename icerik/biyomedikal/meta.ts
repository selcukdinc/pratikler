// Biyomedikal Pratik (biyomedikal.selcukdinc.dev): Konya Teknik Üniversitesi
// Bilgisayar Mühendisliği 4. sınıf "Biyomedikal Veri İşleme Teknikleri" dersinin
// sunumları (Biyomedikal Sinyaller 1-2, Önişlemler 1-2, Fourier Dönüşümü,
// Dalgacık Dönüşümü). Bütün sorular sunumlardaki bilgiden türetilmiştir; her
// ünitenin SVG şekilli bir konu anlatımı vardır (istemci/).
import type { PratikMeta } from "../tipler.ts";

export const biyomedikal: PratikMeta = {
  id: "biyomedikal",
  alt: "biyomedikal",
  yol: "biyomedikal",
  eskiAlan: true,
  ad: "Biyomedikal",
  alan: "Mühendislik",
  aciklama:
    "Biyomedikal Veri İşleme Teknikleri: EKG, EEG, EMG, tıbbi görüntüleme, sinyal ve görüntü ön işleme, Fourier ve dalgacık dönüşümü üzerine şekilli konu anlatımları ve sorular.",
  kaynakAdi: "Biyomedikal Veri İşleme Teknikleri ders sunumları",
  kaynakAciklamasi:
    "Sorular ve konu anlatımları dersin altı sunumuna dayanır: Biyomedikal Sinyaller 1 ve 2, Önişlemler 1 ve 2, Fourier Dönüşümü, Dalgacık Dönüşümü. Bütün sorular sunumlardaki bilgiden **kendi cümlelerimizle** yazılmıştır ve **Sunum** etiketini taşır. Sayısal değerler (EKG aralıkları, EEG bantları, kayıt süreleri) sunumdaki gibidir.\n\n" +
    "Sunumda açıkça yazım hatası olan yerlerde (QT aralığının birimi gibi) doğru birim kullanıldı; kaynaklar arasında farklı adlandırılan yerlerde (2B dalgacık dönüşümünde LH ve HL alt bantları) anlatım bunu belirtir.",
  tanitim: {
    baslik: "Biyomedikal veri işlemeyi şekillerle öğren, sorularla pekiştir",
    giris:
      "Biyomedikal Pratik, Biyomedikal Veri İşleme Teknikleri dersi için ücretsiz ve açık kaynaklı bir çalışma sitesi. Her ünitenin SVG şekilli bir konu anlatımı var: EKG dalgaları ve derivasyonlar, EEG bantları, IQR ile aykırı değer, filtreler, histogram eşitleme, Fourier spektrumu ve dalgacık ayrıştırması. Ardından sorular karışık sırayla ve karışık şıklarla gelir.",
    kitleler: [
      { baslik: "Biyomedikal Veri İşleme dersini alan öğrenciler", metin: "Her sunumu şekilli kısa bir anlatımla tekrar et, sonra konu sonu testini ve karma testi çöz. Yanlış yaptıkların aralıklı tekrarla yeniden karşına çıkar." },
      { baslik: "Bilgisayar mühendisliğinden biyomedikale geçenler", metin: "Kalp, beyin ve kas sinyallerinin fizyolojik kökenini, ölçüm düzenini ve sayısal değerlerini mühendis gözüyle, sade bir dille öğren." },
      { baslik: "Sinyal ve görüntü ön işlemeyi tekrar etmek isteyenler", metin: "IQR, z-skor, eksik veri tamamlama, hareketli ortalama, medyan filtre, eşikleme, FFT ve DWT gibi yöntemleri küçük sayısal örneklerle sına." },
    ],
  },
  bagimsizlikNotu: "Bu site dersi veren öğretim elemanı ya da üniversite tarafından hazırlanmamıştır; sorular ve anlatımlar ders sunumlarından bağımsız olarak yazılmıştır.",
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: true,
  latex: true,
  logo: "/logolar/biyomedikal.svg",
  etiketler: [
    { id: "sunum", ad: "Sunum", renk: "ders", aciklama: "Ders sunumundaki bilgiden kendi cümlelerimizle türetilmiş soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Kalp ve Elektrokardiyografi (EKG)" },
    { no: 2, baslik: "Elektroansefalografi (EEG) ve Uyku" },
    { no: 3, baslik: "Elektromiyografi (EMG) ve Sinir İletimi" },
    { no: 4, baslik: "Tıbbi Görüntüleme ve Genomik Veri" },
    { no: 5, baslik: "Veri ve Zaman Serisi Ön İşleme" },
    { no: 6, baslik: "Görüntü Ön İşleme" },
    { no: 7, baslik: "Fourier Dönüşümü" },
    { no: 8, baslik: "Dalgacık Dönüşümü" },
  ],
  kavramlar: {
    // 1. ünite (Biyomedikal Sinyaller 1): EKG
    "u1-tanim": { ad: "EKG, elektrokardiyografi ve elektrokardiyogram" },
    "u1-ileti": { ad: "Kalbin ileti sistemi ve SA düğümü" },
    "u1-dolasim": { ad: "Küçük ve büyük dolaşım, kapaklar, sistol ve diyastol" },
    "u1-bipolar": { ad: "Einthoven üçgeni ve bipolar derivasyonlar" },
    "u1-unipolar": { ad: "Goldberger ve Wilson (göğüs) derivasyonları" },
    "u1-dalga": { ad: "P, QRS, T dalgaları ve aralıkları" },
    "u1-kagit": { ad: "EKG kağıdı, kalibrasyon ve kalp hızı hesabı" },
    "u1-ritim": { ad: "Normal hız, bradikardi, taşikardi ve yedek uyarı odakları" },
    "u1-olcum": { ad: "EKG ölçüm devresi, frekans ve genlik" },

    // 2. ünite (Biyomedikal Sinyaller 1): EEG ve uyku
    "u2-tanim": { ad: "EEG'nin tanımı, tarihi ve kullanım amaçları" },
    "u2-sure": { ad: "EEG kayıt türleri ve süreleri" },
    "u2-kayit": { ad: "EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt" },
    "u2-bant": { ad: "EEG frekans bantları" },
    "u2-yas": { ad: "Aktivite düzeyi ve yaşla egemen frekans" },
    "u2-analiz": { ad: "EEG'de gürültü, analiz adımları ve ECoG" },
    "u2-nrem": { ad: "NREM uykusu ve evreleri" },
    "u2-rem": { ad: "REM uykusu ve NREM ile farkları" },

    // 3. ünite (Biyomedikal Sinyaller 1-2): EMG ve ENG
    "u3-tanim": { ad: "EMG ve ENMG'nin tanımı, kimlere yapıldığı" },
    "u3-potansiyel": { ad: "Dinlenim ve aksiyon potansiyeli, MÜAP" },
    "u3-klinik": { ad: "Klinik EMG ve MUP parametreleri" },
    "u3-elektrot": { ad: "Yüzey ve iğne elektrotları" },
    "u3-eng": { ad: "ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler" },
    "u3-segirme": { ad: "Kasa uyarımın etkisi ve kas seğirmesi" },
    "u3-hastalik": { ad: "Kas hastalıkları, nöropati ve miyopati" },

    // 4. ünite (Biyomedikal Sinyaller 2): tıbbi görüntüleme ve genomik veri
    "u4-yontem": { ad: "Tıbbi görüntülemenin tanımı ve yöntemleri" },
    "u4-rontgen": { ad: "Röntgen" },
    "u4-bt": { ad: "Bilgisayarlı tomografi" },
    "u4-mr": { ad: "Manyetik rezonans ve BT ile farkları" },
    "u4-usg": { ad: "Ultrasonografi" },
    "u4-nukleer": { ad: "Nükleer tıp, sintigrafi, SPECT ve PET-CT" },
    "u4-genom": { ad: "Genomik ve moleküler veri" },
    "u4-histo": { ad: "Histopatolojik görüntüler" },

    // 5. ünite (Önişlemler 1): veri ve zaman serisi ön işleme
    "u5-merkez": { ad: "Ortalama, medyan ve mod" },
    "u5-dagilim": { ad: "Normal dağılım, çarpıklık ve basıklık" },
    "u5-temizleme": { ad: "Veri işleme adımları ve veri temizleme" },
    "u5-iqr": { ad: "Aykırı değer ve IQR yöntemi" },
    "u5-olcek": { ad: "Min-max normalizasyon, z-skor ve veri dönüştürme" },
    "u5-eksik": { ad: "Eksik veri tamamlama" },
    "u5-zaman-filtre": { ad: "Hareketli ortalama, üstel yumuşatma ve medyan filtre" },
    "u5-frekans-filtre": { ad: "Alçak, yüksek, bant geçiren ve bant söndüren filtreler" },
    "u5-ornekleme": { ad: "Yeniden örnekleme ve zaman serisi özellikleri" },

    // 6. ünite (Önişlemler 2): görüntü ön işleme
    "u6-teknik": { ad: "Temel görüntü işleme teknikleri" },
    "u6-gri": { ad: "Gri seviyeye dönüştürme" },
    "u6-gurultu": { ad: "Görüntüde gürültü azaltma filtreleri" },
    "u6-histogram": { ad: "Parlaklık, kontrast, histogram ve histogram eşitleme" },
    "u6-boyut": { ad: "Boyutlandırma, yeniden örnekleme ve piksel normalizasyonu" },
    "u6-esik": { ad: "Eşikleme" },
    "u6-geometrik": { ad: "Geometrik dönüşümler" },

    // 7. ünite (Fourier Dönüşümü)
    "u7-ortam": { ad: "Ortam (domain) ve dönüşüm kavramı" },
    "u7-seri": { ad: "Fourier serisi ve Dirichlet koşulları" },
    "u7-donusum": { ad: "Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu" },
    "u7-enerji": { ad: "Enerji ve güç yoğunluğu spektrumu" },
    "u7-dft": { ad: "Ayrık Fourier dönüşümü (DFT) ve FFT" },
    "u7-spektrum": { ad: "FFT ile tek taraflı genlik spektrumu" },
    "u7-goruntu": { ad: "Görüntünün 2B Fourier dönüşümü" },

    // 8. ünite (Dalgacık Dönüşümü)
    "u8-stft": { ad: "Fourier dönüşümü, STFT ve durağan olmayan sinyaller" },
    "u8-dalgacik": { ad: "Dalgacık ve ana dalgacık" },
    "u8-skala": { ad: "Skala ve öteleme" },
    "u8-cwt": { ad: "Sürekli dalgacık dönüşümü" },
    "u8-dwt": { ad: "Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları" },
    "u8-2d": { ad: "2B dalgacık dönüşümü ve gürültü giderme" },
  },
  terimler: [
    { tr: "derivasyon", en: "lead", aciklama: "Elektrotlar ile EKG cihazı arasındaki iletken bağlantı; kalbin elektriksel etkinliğine bakılan bir açı" },
    { tr: "sinoatriyal düğüm", en: "sinoatrial (SA) node", aciklama: "Sağ kulakçığın üst kısmındaki, kalbin doğal uyarı odağı olan özelleşmiş hücre topluluğu" },
    { tr: "depolarizasyon", en: "depolarization", aciklama: "Hücre zarı potansiyelinin uyarıyla tersine dönmesi; kasılmayı başlatan elektriksel olay" },
    { tr: "repolarizasyon", en: "repolarization", aciklama: "Uyarılmış hücrenin dinlenim potansiyeline geri dönmesi" },
    { tr: "bradikardi", en: "bradycardia", aciklama: "Dakikada 60'ın altındaki kalp hızı" },
    { tr: "taşikardi", en: "tachycardia", aciklama: "Dakikada 100'ün üstündeki kalp hızı" },
    { tr: "uyarılmış potansiyel", en: "evoked potential", aciklama: "Bir uyarana karşılık beyinde oluşan potansiyel değişimi" },
    { tr: "motor ünite aksiyon potansiyeli", en: "motor unit action potential (MUAP)", aciklama: "Bir motor ünitenin kas liflerinde oluşan birleşik aksiyon potansiyeli" },
    { tr: "elektronörografi", en: "electroneurography (ENG)", aciklama: "Sinirlerin elektriksel incelenmesi; sinir iletim ölçümü" },
    { tr: "radyofarmasötik", en: "radiopharmaceutical", aciklama: "Nükleer tıpta tanı ve tedavi için verilen, radyonüklid içeren ilaç" },
    { tr: "aykırı değer", en: "outlier", aciklama: "Veri kümesinin genel eğiliminin belirgin biçimde dışında kalan değer" },
    { tr: "çeyrekler arası aralık", en: "interquartile range (IQR)", aciklama: "Üçüncü ve birinci çeyrek arasındaki fark, Q3 − Q1" },
    { tr: "çarpıklık", en: "skewness", aciklama: "Bir dağılımın simetriden sapma derecesi" },
    { tr: "basıklık", en: "kurtosis", aciklama: "Dağılımın ortasında örneklerin ne kadar yığıldığını gösteren ölçü (yığılma)" },
    { tr: "eksik veri tamamlama", en: "imputation", aciklama: "Eksik ya da boş değerlerin istatistiksel ya da öğrenme tabanlı yöntemlerle doldurulması" },
    { tr: "hareketli ortalama", en: "moving average", aciklama: "Kayan bir penceredeki değerlerin ortalamasıyla sinyali yumuşatan filtre" },
    { tr: "kesim frekansı", en: "cutoff frequency", aciklama: "Filtrenin geçirdiği ve sönümlediği bölgeler arasındaki sınır frekansı" },
    { tr: "histogram eşitleme", en: "histogram equalization", aciklama: "Gri seviyeleri bütün aralığa yayarak kontrastı otomatik artıran doğrusal olmayan işlem" },
    { tr: "eşikleme", en: "thresholding", aciklama: "Gri tonlu görüntüyü bir eşik değeriyle ikili görüntüye çeviren bölütleme yöntemi" },
    { tr: "spektrum", en: "spectrum", aciklama: "Bir sinyalin frekans ortamındaki gösterimi" },
    { tr: "hızlı Fourier dönüşümü", en: "fast Fourier transform (FFT)", aciklama: "DFT'yi verimli hesaplayan algoritmalar ailesi" },
    { tr: "kısa zamanlı Fourier dönüşümü", en: "short-time Fourier transform (STFT)", aciklama: "Sinyali sabit genişlikte pencerelerle bölerek her pencerenin spektrumunu alan dönüşüm" },
    { tr: "ana dalgacık", en: "mother wavelet", aciklama: "Bütün dalgacıkların ölçekleme ve ötelemeyle türetildiği temel dalgacık fonksiyonu" },
    { tr: "yaklaşım katsayıları", en: "approximation coefficients", aciklama: "Ayrık dalgacık dönüşümünde alçak geçiren filtreden gelen, sinyalin ana hatlarını taşıyan katsayılar" },
    { tr: "detay katsayıları", en: "detail coefficients", aciklama: "Ayrık dalgacık dönüşümünde yüksek geçiren filtreden gelen, hızlı değişimleri taşıyan katsayılar" },
  ],
  benzerler: [],
};
