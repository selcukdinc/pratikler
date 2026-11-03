// 2. ünite (3. hafta notu): EKG, EEG ve EMG. Kitap soruları Subasi'nin 2. bölümünden.

import { ders, kitaptan, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...ders(U, "u2-ekg-temel", [
    {
      id: "te-u2-ekg-ad", tip: "mcq", zorluk: 1,
      soru: "Ders notuna göre \"elektrokardiyografi\" ile \"elektrokardiyogram\" arasındaki fark hangisidir?",
      secenekler: [
        "Biri kayıt yöntemi, diğeri elde edilen grafiktir",
        "Biri kalbin, diğeri beynin kaydıdır",
        "Biri yüzey, diğeri iğne elektrotla yapılır",
        "Biri analog, diğeri sayısal cihazdır",
        "İkisi aynı şeyi anlatan eş anlamlı terimlerdir",
      ],
      dogru: 0,
      aciklama: "Kalpteki elektriksel değişimleri kaydetme **yöntemine** elektrokardiyografi, yazılı ya da sayısal ortamda kaydedilen **grafiğe** elektrokardiyogram denir.",
    },
    {
      id: "te-u2-einthoven", tip: "mcq", zorluk: 1,
      soru: "Einthoven üçgeni hangi üç noktaya bağlanan elektrotlarla oluşur?",
      secenekler: [
        "Sağ kol, sol kol ve sol bacak",
        "Sağ kol, sağ bacak ve göğüs",
        "Alın, sol kol ve sağ bacak",
        "Sol kol, sağ bacak ve sırt",
        "Göğüs, sırt ve sol bacak",
      ],
      dogru: 0,
      aciklama: "Elektrotlar **sağ kol, sol kol ve sol bacağa** bağlanır; ortasında kalbin bulunduğu üçgene Einthoven üçgeni denir. Herhangi iki elektrot standart bipolar derivasyonu verir.",
    },
    {
      id: "te-u2-sa", tip: "fill", zorluk: 1,
      soru: "Kalbe yayılan ve EKG'de kaydedilen uyarı ____ düğümden başlar.",
      bosluklar: [["sinoatriyal", "SA", "sinoatrial", "sinüs"]],
      aciklama: "Uyarı **sinoatriyal (SA) düğümden** başlar, kalbe yayılır ve vücut üzerinde elektriksel bir değişim yaratır.",
    },
    {
      id: "te-u2-ekg-sure", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre bir EKG çekimi ortalama 5-10 dakika sürer.",
      dogru: true,
      aciklama: "Doğru. Standart klinik EKG kısa süreli bir kayıttır; uzun süreli kayıt için Holter kullanılır.",
    },
  ]),

  ...ders(U, "u2-ekg-tur", [
    {
      id: "te-u2-holter", tip: "mcq", zorluk: 1,
      soru: "Günlük yaşam sırasında taşınabilir bir kayıt ünitesiyle uzun süreli EKG alınmasını sağlayan sistem hangisidir?",
      secenekler: ["Holter EKG", "Standart klinik EKG", "Eforlu EKG", "10–20 sistemi", "İğne EMG"],
      dogru: 0,
      aciklama: "**Holter EKG** taşınabilir bir kayıt ünitesiyle günlük yaşam sırasında uzun süreli kayıt alır.",
    },
    {
      id: "te-u2-kablosuz", tip: "tf", zorluk: 2,
      soru: "Standart, Holter ve kablosuz EKG arasındaki fark ölçülen fizyolojik kaynaktadır.",
      dogru: false,
      aciklama: "Yanlış. Notun vurgusu: fizyolojik kaynak **değişmedi**; ölçüm sisteminin kullanım biçimi ve elektronik mimarisi değişti.",
    },
  ]),

  ...ders(U, "u2-ekg-kullanim", [
    {
      id: "te-u2-ekg-kullanim", tip: "mcq", zorluk: 1,
      soru: "Ders notunda EKG'nin kullanım alanları arasında hangisi sayılmaz?",
      secenekler: [
        "Ritim ve iletim bozukluklarının belirlenmesi",
        "Kalp pilinin işlevlerinin değerlendirilmesi",
        "Elektrolit dengesizliğinin etkilerinin görülmesi",
        "Epileptik nöbet odağının belirlenmesi",
        "İnfarktüs tanısı konulması",
      ],
      dogru: 3,
      aciklama: "EKG kalbin elektriksel aktivitesini kaydeder; ritim bozukluğu, infarktüs, kalp pili ve elektrolit (özellikle potasyum) etkileri bunlar arasındadır. Epilepsi **EEG** ile incelenir.",
    },
    {
      id: "te-u2-potasyum", tip: "fill", zorluk: 2,
      soru: "Ders notuna göre EKG'de etkisi görülebilen elektrolit dengesizliklerinin başında serum ____ eksikliği ya da fazlalığı gelir.",
      bosluklar: [["potasyum", "K"]],
      aciklama: "Not özellikle **potasyum** eksikliği ya da fazlalığını anar.",
    },
  ]),

  ...ders(U, "u2-ekg-dalga", [
    {
      id: "te-u2-p", tip: "mcq", zorluk: 1,
      soru: "EKG'deki P dalgası neyi temsil eder?",
      secenekler: [
        "Uyarının atriyumlara geçişini",
        "Ventriküllerin depolarizasyonunu",
        "His demetinin iletim zamanını",
        "Ventriküllerin repolarizasyonunu",
        "İki kalp atımı arasındaki süreyi",
      ],
      dogru: 0,
      aciklama: "P dalgası (atriyal kompleks), SA düğümünden çıkan uyarının **atriyumlara geçişini** temsil eder ve yaklaşık 0,1 s sürer.",
    },
    {
      id: "te-u2-pr", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre normal bir insanda P-R aralığı ortalama ne kadar sürer?",
      secenekler: ["0,13–0,16 s", "0,08 s", "0,4 s", "0,8 s", "1,2–1,6 s"],
      dogru: 0,
      aciklama: "P-R aralığı P'nin başından R'nin başına kadardır, His demetinin iletim zamanını temsil eder ve ortalama **0,13–0,16 s** sürer. 0,08 s QRS'nin, 0,4 s QRST'nin süresidir.",
    },
    {
      id: "te-u2-qrs", tip: "mcq", zorluk: 2,
      soru: "QRS kompleksi neyi temsil eder ve yaklaşık ne kadar sürer?",
      secenekler: [
        "Ventriküllerin depolarizasyonu, yaklaşık 0,08 s",
        "Atriyumların depolarizasyonu, yaklaşık 0,1 s",
        "His demetindeki iletim, yaklaşık 0,16 s",
        "Ventriküllerin depolarizasyonu, yaklaşık 0,4 s",
        "Bir kalp atımının tamamı, yaklaşık 0,8 s",
      ],
      dogru: 0,
      aciklama: "QRS **ventriküllerin depolarize olmasını** temsil eder ve yaklaşık **0,08 s** sürer; T dalgasıyla birlikte QRST yaklaşık 0,4 s'dir.",
    },
    {
      id: "te-u2-qrst", tip: "tf", zorluk: 2,
      soru: "Ders notuna göre QRS kompleksi ile arkasından gelen T dalgasının birlikte süresi (QRST) ortalama 0,4 s kadardır.",
      dogru: true,
      aciklama: "Doğru. QRS yaklaşık 0,08 s, QRST ise ortalama 0,4 s'dir.",
    },
    {
      id: "te-u2-bpm", tip: "tf", zorluk: 1,
      soru: "Ardışık iki QRS kompleksi arasındaki süre kalbin bir atımı için geçen süredir ve dakikadaki atım sayısı buradan hesaplanabilir.",
      dogru: true,
      aciklama: "Doğru. R tepeleri arasındaki süreden (RR) kalp hızı ve kalp hızı değişimi hesaplanır.",
    },
  ]),

  ...kitaptan(U, "u2-ekg-dalga", "subasi", [
    {
      id: "te-u2-k-pr-uzun", tip: "mcq", zorluk: 3,
      soru: "Subasi'ye göre PR aralığının normalden uzun olması neye işaret edebilir?",
      secenekler: [
        "Uyarının atriyum ve AV düğümden geçişinin yavaşladığına",
        "Uyarının bağlantı dokusundan başladığına",
        "Ventriküllerin normalden hızlı depolarize olduğuna",
        "Kas gürültüsünün kayda karıştığına",
        "Kalp hızının normalden yüksek olduğuna",
      ],
      dogru: 0,
      aciklama: "PR aralığı atriyal kasılmanın başlangıcından ventriküler kasılmanın başlangıcına kadardır (normalde yaklaşık 0,16 s). Kalp dokusu hasarlıysa depolarizasyon dalgasının **atriyum ve AV düğümden geçmesi daha uzun sürer** ve PR uzar; kısa PR ise uyarının bağlantı dokusundan geldiğini gösterebilir.",
    },
  ]),

  ...ders(U, "u2-ekg-isleme", [
    {
      id: "te-u2-gurultu-kaynak", tip: "mcq", zorluk: 2,
      soru: "Ders notunda sayılan EKG gürültü kaynakları arasında hangisi yoktur?",
      secenekler: [
        "Elektrik hattı paraziti",
        "Solunumun neden olduğu taban çizgisi kayması",
        "Elektrot hareketinden doğan artefakt",
        "Kalbin SA düğümünden çıkan uyarı",
        "Elektrocerrahi gürültüsü",
      ],
      dogru: 3,
      aciklama: "SA düğümünden çıkan uyarı ölçülmek istenen **sinyalin kendisidir**. Hat paraziti, cihaz gürültüsü, deri/elektrot empedans değişimi, hareket artefaktı, solunum kayması ve elektrocerrahi gürültüsü notta sayılan kaynaklardır.",
    },
    {
      id: "te-u2-bgf", tip: "mcq", zorluk: 2,
      soru: "Ders notunda (Begg ve diğerleri, 2008) EKG filtrelemesi için verilen tek bant geçiren filtrenin geçiş bandı hangisidir?",
      secenekler: ["10–25 Hz", "0,05–150 Hz", "0,5–4 Hz", "50–150 Hz", "10–350 Hz"],
      dogru: 0,
      aciklama: "Not, QRS tespiti gibi işler için **10 ila 25 Hz** geçiş bandına sahip tek bir bant geçiren filtreyi anar.",
    },
    {
      id: "te-u2-cad", tip: "mcq", zorluk: 2,
      soru: "EKG tabanlı bilgisayar destekli tanı (CAD) sistemleri hangi iki işlevsel bölümden oluşur?",
      secenekler: [
        "Özellik çıkarma ve örüntü tanıma",
        "Kuvvetlendirme ve filtreleme",
        "Örnekleme ve kuantalama",
        "Elektrot ve kablo",
        "Kalibrasyon ve doğrulama",
      ],
      dogru: 0,
      aciklama: "EKG tabanlı CAD sistemleri **özellik çıkarma** ve **örüntü tanıma** bölümlerinden oluşur.",
    },
    {
      id: "te-u2-hrv", tip: "tf", zorluk: 2,
      soru: "R tepeleri tespit edildikten sonra hesaplanan RR aralıklarından kalp hızı değişkenliği (HRV) özellikleri çıkarılıp sınıflandırmada kullanılabilir.",
      dogru: true,
      aciklama: "Doğru. Notta anlatılan IoT tabanlı aritmi sisteminde HRV özellikleri sınıflandırılır ve anormal durumda uyarı gönderilir.",
    },
  ]),

  ...ders(U, "u2-veritabani", [
    {
      id: "te-u2-mitbih", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre MIT-BIH Aritmi Veritabanı neyi içerir?",
      secenekler: [
        "47 denekten alınmış 48 adet yarım saatlik 2 kanallı EKG kaydı",
        "32 Holter kaydından alınmış 75 adet 30 dakikalık EKG sinyali",
        "Uyku apnesi hastalarından alınmış gece boyu süren EEG kayıtları",
        "Protez kontrolü için yüzey EMG kayıtları",
        "Fetal EKG kayıtları ve doğum bilgileri",
      ],
      dogru: 0,
      aciklama: "MIT-BIH Aritmi Veritabanı, 1975-1979 arasında **47 denekten** alınmış 2 kanallı ambulatuvar kayıtların **48 adet yarım saatlik** kesitini içerir. 32 Holter kaydından 75 sinyal ikinci örnekteki (INCART) veritabanıdır.",
    },
    {
      id: "te-u2-veritabani-eeg", tip: "tf", zorluk: 1,
      soru: "Ders notundaki örneklere göre EEG sinyalleri epileptik nöbet tespiti, beyin-bilgisayar arayüzü, uyku analizi ve duygu tanıma gibi çalışmalarda kullanılır.",
      dogru: true,
      aciklama: "Doğru. Notta bu uygulamaların her biri için açık bir veritabanı örneği verilir.",
    },
  ]),

  ...ders(U, "u2-eeg-temel", [
    {
      id: "te-u2-eeg-bilgi", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre EEG, beynin yapısal özelliklerinden çok fonksiyonel durumu hakkında bilgi verir.",
      dogru: true,
      aciklama: "Doğru. EEG beynin **fonksiyonel** durumunu yansıtır; yapı için görüntüleme yöntemleri kullanılır.",
    },
    {
      id: "te-u2-eeg-aralik", tip: "mcq", zorluk: 2,
      soru: "3. hafta notuna göre EEG potansiyel dalgalanmalarının frekansı ve genliği hangi aralıklarda değişir?",
      secenekler: [
        "0,5–70 Hz ve 5–400 µV",
        "0,05–150 Hz ve 0,5–4 mV",
        "10–500 Hz ve 50 µV–5 mV",
        "8–13 Hz ve 2–10 µV",
        "0,01–15 Hz ve 1–10 mV",
      ],
      dogru: 0,
      aciklama: "3. hafta notu EEG için **0,5–70 Hz** ve **5–400 µV** verir. (1-2. hafta notundaki özet tabloda tipik değer ~10–100 µV ve ~0,5–100 Hz'dir.)",
    },
    {
      id: "te-u2-eeg-empedans", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre EEG kaydeden cihazın giriş empedansının yüksek olması neden gereklidir?",
      secenekler: [
        "Kafatası iyi bir iletken olmadığı için",
        "EEG genliği volt mertebesinde olduğu için",
        "Elektrotlar iğne tipinde olduğu için",
        "EEG yalnızca uykuda kaydedildiği için",
        "Cihaz kablosuz çalıştığı için",
      ],
      dogru: 0,
      aciklama: "Kafatası iyi bir iletken değildir ve EEG çok küçüktür; bu yüzden aracın **giriş empedansı yüksek** olmalı, çevre ve vücut kaynaklı gürültüler de filtrelenmelidir.",
    },
    {
      id: "te-u2-agagcl", tip: "fill", zorluk: 1,
      soru: "Ders notuna göre EEG'de elektrot malzemesi olarak ____ tercih edilir.",
      bosluklar: [["Ag-AgCl", "AgAgCl", "Ag/AgCl", "gümüş-gümüş klorür", "gümüş klorür"]],
      aciklama: "EEG elektrotlarında **Ag-AgCl** (gümüş-gümüş klorür) tercih edilir.",
    },
    {
      id: "te-u2-hacim", tip: "tf", zorluk: 2,
      soru: "Hacim iletkenliği nedeniyle kaydedilen EEG, beynin geniş bölgelerindeki elektriksel aktivitenin toplamıdır.",
      dogru: true,
      aciklama: "Doğru. Tek bir nöron değil, geniş bölgelerin toplam aktivitesi kaydedilir.",
    },
  ]),

  ...ders(U, "u2-eeg-yerlesim", [
    {
      id: "te-u2-1020", tip: "mcq", zorluk: 2,
      soru: "EEG'de kullanılan \"10–20\" sistemi adını nereden alır?",
      secenekler: [
        "Elektrot aralıklarının kafa ölçülerinin %10'u ya da %20'si olmasından",
        "Kaydın 10 ile 20 Hz arasındaki dalgaları içermesinden",
        "Başın çevresine 10 ile 20 adet elektrot takılmasından",
        "Kaydın 10 ile 20 dakika sürmesinden",
        "10 µV ile 20 µV arası sinyalleri ölçmesinden",
      ],
      dogru: 0,
      aciklama: "Nasion, inion ve iki preauricular nokta belirlenir; elektrotlar arası uzaklık bu noktalar arasındaki mesafenin **%10'u ya da %20'si** olarak tanımlanır.",
    },
    {
      id: "te-u2-yerlesim-neden", tip: "tf", zorluk: 2,
      soru: "Bir bölgedeki aktivitenin EEG kaydına katkısı elektroda olan uzaklıkla ters orantılı değiştiği için elektrot yerlerinin standart olması gerekir.",
      dogru: true,
      aciklama: "Doğru. Bu yüzden kayıtları karşılaştırılabilir kılmak için 10–20 sistemi kabul edilmiştir.",
    },
  ]),

  ...ders(U, "u2-eeg-dalga", [
    {
      id: "te-u2-delta", tip: "mcq", zorluk: 1,
      soru: "Derin uyku ve genel anestezi gibi beynin çok düşük aktivite gösterdiği durumlarda gözlenen, 0,5–4 Hz frekanslı dalga hangisidir?",
      secenekler: ["Delta", "Teta", "Alfa", "Beta", "Gama"],
      dogru: 0,
      aciklama: "**Delta** dalgaları 0,5–4 Hz frekanslı, 20–400 µV genlikli dalgalardır ve derin uykuda görülür.",
    },
    {
      id: "te-u2-alfa", tip: "mcq", zorluk: 1,
      soru: "Uyanık, dinlenmiş ve gözleri kapalı bir bireyde sıklıkla gözlenen, sinüsoidale benzeyen 8–13 Hz'lik dalga hangisidir?",
      secenekler: ["Alfa", "Beta", "Teta", "Delta", "Gama"],
      dogru: 0,
      aciklama: "**Alfa** dalgaları 8–13 Hz'dir; dış uyarı yokken ve gözler kapalıyken belirginleşir.",
    },
    {
      id: "te-u2-beta", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre beta dalgaları için hangisi doğrudur?",
      secenekler: [
        "13 Hz'den yüksek frekanslıdır ve yoğun zihinsel aktivitede görülür",
        "0,5–4 Hz frekanslıdır ve derin uykuda görülür",
        "4–8 Hz frekanslıdır ve rüyalı uykuda görülür",
        "8–13 Hz frekanslıdır ve gözler kapalıyken görülür",
        "En yüksek genlikli EEG dalgasıdır",
      ],
      dogru: 0,
      aciklama: "Beta dalgaları **13 Hz'den yüksek** frekanslı, 1–5 µV genliklidir; yoğun zihinsel aktivite, odaklanmış dikkat ve REM uykusunda görülür ve beynin en yüksek aktivite düzeyine karşılık gelir.",
    },
    {
      id: "te-u2-teta", tip: "fill", zorluk: 2,
      soru: "Frekansı 4–8 Hz olan, rüyalı uykuda, orta derecede anestezide ve stres altında gözlenen EEG dalgasına ____ dalgası denir.",
      bosluklar: [["teta", "theta", "θ"]],
      aciklama: "**Teta (θ)** dalgaları 4–8 Hz frekanslı, 5–100 µV genliklidir.",
    },
  ]),

  ...ders(U, "u2-emg", [
    {
      id: "te-u2-emg-tanim", tip: "mcq", zorluk: 1,
      soru: "Elektromiyografi (EMG) neyin elektriksel aktivitesini kaydeder?",
      secenekler: ["İskelet kaslarının", "Kalp kasının", "Beynin", "Gözün", "Midenin"],
      dogru: 0,
      aciklama: "EMG **iskelet kaslarının** elektriksel aktivitesinin gözlenmesi ve kaydedilmesidir.",
    },
    {
      id: "te-u2-emg-baskin", tip: "mcq", zorluk: 2,
      soru: "3. hafta notuna göre EMG sinyalinin baskın enerjisi hangi frekans aralığındadır?",
      secenekler: ["50–150 Hz", "0,5–4 Hz", "8–13 Hz", "500–5000 Hz", "0,05–1 Hz"],
      dogru: 0,
      aciklama: "Kullanılabilir enerji 0–500 Hz'dedir, **baskın enerji 50–150 Hz** aralığındadır. Genlik 0–10 mV (tepeden tepeye) verilir.",
    },
    {
      id: "te-u2-emg-yuzey", tip: "tf", zorluk: 2,
      soru: "Yüzey elektrotlarıyla kaydedilen EMG, çok sayıda motor birimin asenkron aktivitesinden doğduğu için ritmik değildir ve rastgele gürültüyü andırır.",
      dogru: true,
      aciklama: "Doğru. Farklı zaman ve fazlarda çalışan çok sayıda motor birimin toplamı, **ritmik olmayan**, gürültüye benzeyen bir sinyal verir.",
    },
    {
      id: "te-u2-emg-ozellik", tip: "mcq", zorluk: 2,
      soru: "Ders notunda EMG sinyalinin genel özelliği nasıl verilir?",
      secenekler: [
        "Kompleks, durağan olmayan ve gürültülü",
        "Periyodik, durağan ve gürültüsüz",
        "Sinüsoidal, düşük frekanslı ve durağan",
        "Tek frekanslı, düşük genlikli ve periyodik",
        "Sabit genlikli, durağan ve ritmik",
      ],
      dogru: 0,
      aciklama: "EMG sinyalleri **kompleks, durağan olmayan (non-stationary) ve gürültülü** sinyallerdir.",
    },
    {
      id: "te-u2-emg-elektrot", tip: "fill", zorluk: 1,
      soru: "Klinik EMG kayıtlarında yüzey ya da ____ tipi elektrotlar kullanılabilir.",
      bosluklar: [["iğne", "igne"]],
      aciklama: "EMG'de **yüzey** ya da **iğne** elektrotlar kullanılır; kayıt istemli kas hareketiyle ya da motor sinirin elektriksel uyarılmasıyla alınır.",
    },
  ]),

  ...kitaptan(U, "u2-emg", "subasi", [
    {
      id: "te-u2-k-emg-ornekleme", tip: "mcq", zorluk: 2,
      soru: "EMG kaydında 10–350 Hz bant geçiren filtre kullanılıyorsa en düşük örnekleme hızı ne olmalıdır?",
      secenekler: ["700 Hz", "350 Hz", "175 Hz", "360 Hz", "3500 Hz"],
      dogru: 0,
      aciklama: "Nyquist ölçütüne göre örnekleme hızı filtrenin üst kesim frekansının en az iki katı olmalıdır: $2 \\times 350 = 700$ Hz. Doğruluk ve çözünürlük için daha yüksek de seçilebilir.",
    },
    {
      id: "te-u2-k-yuzey-emg", tip: "tf", zorluk: 2,
      soru: "Subasi'ye göre yüzey EMG elektrotları iğne ve tel elektrotlara göre hastayı daha az rahatsız eder ve genellikle Ag/AgCl'den yapılır.",
      dogru: true,
      aciklama: "Doğru. İğne elektrotların dezavantajı hastaya verdiği rahatsızlıktır; yüzey (sEMG) elektrotları Ag/AgCl'den, çubuk ya da disk biçiminde yapılır.",
    },
  ]),
];
