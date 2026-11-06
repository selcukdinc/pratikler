// 1. ünite (Biyomedikal Sinyaller 1 sunumu): kalp, iletim sistemi, dolaşım,
// derivasyonlar, EKG dalgaları, EKG kağıdı ve kalp hızı, EKG ölçüm düzeni.

import { sunum, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...sunum(U, "u1-tanim", [
    {
      id: "bm-u1-terimler", tip: "mcq", zorluk: 1,
      soru: "Kalbin elektriksel potansiyellerinin vücut yüzeyinden kaydedilmesi işlemine ne ad verilir?",
      secenekler: ["Elektrokardiyografi", "Elektrokardiyogram", "Elektroansefalografi", "Elektromiyografi", "Elektronörografi"],
      dogru: 0,
      aciklama: "Kaydetme **işlemi** elektrokardiyografi, elde edilen **çizim** elektrokardiyogram (EKG), bu işi yapan cihaz da elektrokardiyografi cihazıdır.",
    },
    {
      id: "bm-u1-cizim", tip: "fill", zorluk: 1,
      soru: "Elektrokardiyografi işlemi sonunda elde edilen çizime ____ denir.",
      bosluklar: [["elektrokardiyogram", "ekg", "ecg"]],
      aciklama: "İşlem elektrokardiyografi, sonuçta çıkan çizim **elektrokardiyogram** (EKG) adını alır.",
    },
    {
      id: "bm-u1-elektrot-yer", tip: "tf", zorluk: 1,
      soru: "EKG elektrotları belirli kurallara göre kollara, bacaklara ve göğüs duvarına yerleştirilir.",
      dogru: true,
      aciklama: "Doğru. Kalbin potansiyellerini cihaza aktarmak için elektrotlar ekstremitelere ve göğüs duvarına standart yerlerde konur.",
    },
  ]),

  ...sunum(U, "u1-ileti", [
    {
      id: "bm-u1-sa-yer", tip: "mcq", zorluk: 1,
      soru: "Kalbin doğal uyarı odağı (pacemaker) olan SA düğümü nerededir?",
      secenekler: ["Sağ kulakçığın üst kısmında", "Sol karıncığın tabanında", "Kulakçıklar ile karıncıklar arasında", "Karıncıklar arasındaki duvarda", "Aortun kalpten çıktığı yerde"],
      dogru: 0,
      aciklama: "SA (sinoatriyal) düğümü **sağ kulakçığın (atriyumun) üst kısmında** yer alan özelleşmiş elektriksel hücre demetidir.",
    },
    {
      id: "bm-u1-ileti-sira", tip: "mcq", zorluk: 2,
      soru: "Kalpteki uyarının iletim yolunda aşağıdaki sıralamalardan hangisi doğrudur?",
      secenekler: [
        "SA düğümü → AV düğümü → His demeti → demet kolları → Purkinje lifleri",
        "AV düğümü → SA düğümü → His demeti → Purkinje lifleri → demet kolları",
        "SA düğümü → His demeti → AV düğümü → demet kolları → Purkinje lifleri",
        "Purkinje lifleri → demet kolları → His demeti → AV düğümü → SA düğümü",
      ],
      dogru: 0,
      aciklama: "Uyarı SA düğümünde doğar, kulakçıklardan geçerek **AV düğümüne**, oradan **His demetine**, **demet kollarına** ve **Purkinje liflerine** ulaşır.",
    },
    {
      id: "bm-u1-sa-mss", tip: "tf", zorluk: 2,
      soru: "SA düğümünün ürettiği aksiyon potansiyelinin frekansı merkezi sinir sistemi tarafından kontrol edilir.",
      dogru: true,
      aciklama: "Doğru. SA düğümü uyarıyı kendiliğinden üretir ama hızı merkezi sinir sistemi tarafından ayarlanır.",
    },
    {
      id: "bm-u1-depolarizasyon", tip: "fill", zorluk: 2,
      soru: "SA düğümünde kendiliğinden oluşan aksiyon potansiyeli, ____ dalgası halinde bütün kalbe yayılır.",
      bosluklar: [["depolarizasyon"]],
      aciklama: "Aksiyon potansiyeli bir **depolarizasyon** dalgası olarak yayılır ve dört odacığın doğru zamanlamayla kasılmasını sağlar.",
    },
  ]),

  ...sunum(U, "u1-dolasim", [
    {
      id: "bm-u1-kucuk-dolasim", tip: "mcq", zorluk: 1,
      soru: "Kanı akciğerlerde oksijenlendiren küçük dolaşımdan kalbin hangi tarafı sorumludur?",
      secenekler: ["Sağ tarafı", "Sol tarafı", "Yalnızca sol kulakçık", "Yalnızca aort kapağı"],
      dogru: 0,
      aciklama: "Küçük dolaşıma **kalbin sağ tarafı** adanmıştır: kirli kan sağ kulakçığa gelir, sağ karıncık onu pulmoner artere atar.",
    },
    {
      id: "bm-u1-aort", tip: "tf", zorluk: 1,
      soru: "Sol karıncık oksijenden zengin kanı aort damarıyla vücuda gönderir; aort kalpten çıkan en büyük atardamardır.",
      dogru: true,
      aciklama: "Doğru. Büyük dolaşımda sol karıncık kanı aorta pompalar.",
    },
    {
      id: "bm-u1-mitral", tip: "mcq", zorluk: 2,
      soru: "Akciğerden dönen oksijenli kan sol kulakçıktan sol karıncığa hangi kapaktan geçer?",
      secenekler: ["Mitral kapak", "Triküspit kapak", "Aort kapağı", "Pulmoner kapak"],
      dogru: 0,
      aciklama: "Sol tarafta kulakçık ile karıncık arasında **mitral**, sağ tarafta **triküspit** kapak vardır. Aort ve pulmoner kapaklar karıncıklar ile büyük damarlar arasındadır.",
    },
    {
      id: "bm-u1-sistol", tip: "mcq", zorluk: 1,
      soru: "Kalp kaslarının, özellikle karıncıkların kasılarak kanı aort ve pulmoner artere pompaladığı evreye ne denir?",
      secenekler: ["Sistol", "Diyastol", "Repolarizasyon", "Dinlenim"],
      dogru: 0,
      aciklama: "Kasılma evresi **sistol**, odacıkların gevşeyip kanla dolduğu evre **diyastol**dür.",
    },
  ]),

  ...sunum(U, "u1-bipolar", [
    {
      id: "bm-u1-derivasyon-tanim", tip: "fill", zorluk: 1,
      soru: "Elektrotlar ile EKG cihazı arasındaki iletken bağlantılara ____ denir.",
      bosluklar: [["derivasyon", "derivasyonlar"]],
      aciklama: "Sunumdaki tanım: elektrotlar ile cihaz arasındaki iletken bağlantılar **derivasyon**dur (İngilizcesi lead).",
    },
    {
      id: "bm-u1-dii", tip: "mcq", zorluk: 2,
      soru: "DII bipolar derivasyonu hangi iki ekstremite arasındaki potansiyel farkını ölçer?",
      secenekler: ["Sağ kol ile sol bacak", "Sağ kol ile sol kol", "Sol kol ile sol bacak", "Sağ bacak ile sol bacak"],
      dogru: 0,
      aciklama: "DI: sağ kol − sol kol, **DII: sağ kol − sol bacak**, DIII: sol kol − sol bacak. Her birinde ilk yazılan negatif, ikinci yazılan pozitif elektrottur.",
    },
    {
      id: "bm-u1-sag-bacak", tip: "mcq", zorluk: 1,
      soru: "Standart EKG kaydında sağ bacağa bağlanan elektrodun görevi nedir?",
      secenekler: ["Toprak elektrodu", "DI için pozitif elektrot", "aVF için araştırıcı elektrot", "V1 göğüs elektrodu"],
      dogru: 0,
      aciklama: "Sağ bacak her zaman **toprak** olarak kullanılır; derivasyonlar sağ kol, sol kol ve sol bacaktan oluşturulur.",
    },
    {
      id: "bm-u1-einthoven", tip: "tf", zorluk: 2,
      soru: "Einthoven üçgeninde frontal düzlemdeki kalp vektörünün izdüşümü, birbiriyle 90 derecelik açı yapan üç eksen üzerinde ölçülür.",
      dogru: false,
      aciklama: "Yanlış. Üçgen eşkenardır; üç eksen birbiriyle **60 derecelik** açılar yapar.",
    },
    {
      id: "bm-u1-diii-pozitif", tip: "mcq", zorluk: 3,
      soru: "DIII derivasyonunda pozitif elektrot hangi ekstremitededir?",
      secenekler: ["Sol bacak", "Sol kol", "Sağ kol", "Sağ bacak"],
      dogru: 0,
      aciklama: "DIII sol kol (negatif) ile **sol bacak (pozitif)** arasındadır. Sol bacak DII'de de pozitif elektrottur.",
    },
  ]),

  ...sunum(U, "u1-unipolar", [
    {
      id: "bm-u1-goldberger", tip: "mcq", zorluk: 1,
      soru: "aVR, aVL ve aVF derivasyonlarına verilen genel ad hangisidir?",
      secenekler: ["Goldberger derivasyonları", "Wilson derivasyonları", "Einthoven derivasyonları", "Prekordiyal derivasyonlar"],
      dogru: 0,
      aciklama: "Unipolar ekstremite derivasyonları **Goldberger**, unipolar göğüs (prekordiyal) derivasyonları **Wilson** derivasyonları olarak bilinir. Einthoven'ınkiler bipolar ekstremite derivasyonlarıdır.",
    },
    {
      id: "bm-u1-avl", tip: "mcq", zorluk: 1,
      soru: "aVL derivasyonunda araştırıcı elektrot nereye yerleştirilir?",
      secenekler: ["Sol kola", "Sağ kola", "Sol bacağa", "Göğüs kafesine"],
      dogru: 0,
      aciklama: "aVR sağ kol, **aVL sol kol**, aVF sol bacaktır (R: right, L: left, F: foot).",
    },
    {
      id: "bm-u1-augmented", tip: "tf", zorluk: 2,
      soru: "aVR'deki \"a\" harfi, direnç devresi sayesinde araştırıcı elektrottan gelen potansiyelin artırılmış (augmented) olarak kaydedilmesinden gelir.",
      dogru: true,
      aciklama: "Doğru. Diğer elektrotlar direnç devresiyle birleştirilip referans yapılır; sonuç **augmented voltage** olarak kaydedilir.",
    },
    {
      id: "bm-u1-v1", tip: "mcq", zorluk: 2,
      soru: "V1 göğüs elektrodunun standart yeri neresidir?",
      secenekler: ["Sternumun sağ kenarında 4. interkostal aralık", "Sternumun sol kenarında 4. interkostal aralık", "Sol orta klavikula çizgisinde 5. interkostal aralık", "Sol orta koltuk altı çizgisinde 5. interkostal aralık"],
      dogru: 0,
      aciklama: "V1 sağda, V2 solda 4. interkostal aralıktadır. V4 sol orta klavikula çizgisinde, V6 sol orta koltuk altı çizgisinde 5. interkostal aralıktadır.",
    },
    {
      id: "bm-u1-v-sayisi", tip: "num", zorluk: 1,
      soru: "Wilson göğüs derivasyonları kaç tanedir?",
      bosluklar: [["6"]],
      aciklama: "V1'den V6'ya kadar **6** göğüs derivasyonu vardır; genellikle kalbin ön yüzüne ait bilgi verirler.",
    },
    {
      id: "bm-u1-v3", tip: "tf", zorluk: 2,
      soru: "V3 elektrodu, V2 ile V4'ü birleştiren doğrunun orta noktasına konur.",
      dogru: true,
      aciklama: "Doğru. V3'ün kendi işaret noktası yoktur; V2 ile V4'ün ortasıdır.",
    },
  ]),

  ...sunum(U, "u1-dalga", [
    {
      id: "bm-u1-qrs-anlam", tip: "mcq", zorluk: 1,
      soru: "EKG'deki QRS kompleksi hangi elektriksel olayı gösterir?",
      secenekler: ["Karıncıkların depolarizasyonu", "Kulakçıkların depolarizasyonu", "Karıncıkların repolarizasyonu", "Kulakçıkların repolarizasyonu"],
      dogru: 0,
      aciklama: "P: kulakçık depolarizasyonu, **QRS: karıncık depolarizasyonu**, T: karıncık repolarizasyonu.",
    },
    {
      id: "bm-u1-t-anlam", tip: "fill", zorluk: 1,
      soru: "EKG'de T dalgası karıncıkların ____ olayını gösterir.",
      bosluklar: [["repolarizasyon", "repolarizasyonu"]],
      aciklama: "T dalgası karıncık **repolarizasyonu**dur; karıncıkların dinlenim durumuna dönüşüdür.",
    },
    {
      id: "bm-u1-pr", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre normal PR aralığı hangi değerler arasındadır?",
      secenekler: ["0,12–0,20 s", "0,04–0,08 s", "0,35–0,44 s", "0,20–0,40 s"],
      dogru: 0,
      aciklama: "PR aralığı P dalgasının başından QRS'in başına kadar olan süredir ve **0,12–0,20 s** arasındadır. 0,35–0,44 s QT aralığının değeridir.",
    },
    {
      id: "bm-u1-qrs-sure", tip: "tf", zorluk: 2,
      soru: "Normal QRS kompleksinin süresi 0,08 (en çok 0,10) saniyeyi aşmaz.",
      dogru: true,
      aciklama: "Doğru. Sunumdaki değer 0,08 (0,10) s'dir.",
    },
    {
      id: "bm-u1-q-normal", tip: "mcq", zorluk: 3,
      soru: "Normal bir Q dalgası için aşağıdakilerden hangisi doğrudur?",
      secenekler: [
        "İzleyen R dalgasının %25'inden küçüktür, süresi 0,04 s'yi aşmaz",
        "İzleyen R dalgasının yarısından büyüktür, süresi 0,10 s'dir",
        "Her derivasyonda mutlaka bulunur ve pozitif yönlüdür",
        "T dalgasından sonra gelen ilk negatif dalgadır",
      ],
      dogru: 0,
      aciklama: "Q dalgası her zaman olmayabilir; kompleksin ilk dalgası negatifse Q adını alır. Normal Q, R'nin **%25'inden küçük** ve **0,04 s'den kısadır**.",
    },
    {
      id: "bm-u1-harf", tip: "tf", zorluk: 2,
      soru: "Q, R ve S dalgaları 5 mm'den küçükse küçük harfle (q, r, s), 5 mm ve üstündeyse büyük harfle yazılır.",
      dogru: true,
      aciklama: "Doğru. Genliği 5 mm'nin altındaki dalgalar küçük harfle gösterilir.",
    },
    {
      id: "bm-u1-st", tip: "mcq", zorluk: 2,
      soru: "ST segmenti EKG'de nerede yer alır?",
      secenekler: ["QRS'in sonu ile T'nin başı arasında", "Q'nun başı ile T'nin sonu arasında", "P'nin başı ile QRS'in başı arasında", "T'nin sonu ile bir sonraki P arasında"],
      dogru: 0,
      aciklama: "ST segmenti **QRS'in sonundan T'nin başına** kadardır. Q'nun başından T'nin sonuna kadar olan süre QT aralığıdır.",
    },
  ]),

  ...sunum(U, "u1-kagit", [
    {
      id: "bm-u1-kucuk-kare", tip: "num", zorluk: 1,
      soru: "25 mm/s kağıt hızında EKG kağıdındaki 1 mm'lik küçük kare kaç saniyeye karşılık gelir?",
      bosluklar: [["0.04"]],
      aciklama: "1 s'de 25 mm ilerlenir: $1/25 = 0{,}04$ s. Beş küçük kareden oluşan büyük kare $5 \\times 0{,}04 = 0{,}2$ s'dir.",
    },
    {
      id: "bm-u1-hiz-hesap", tip: "num", zorluk: 2,
      soru: "25 mm/s hızla kaydedilmiş bir EKG'de iki R dalgası arası 15 mm'dir. Kalp hızı dakikada kaç atımdır?",
      bosluklar: [["100"]],
      aciklama: "Periyot $15 \\times 0{,}04 = 0{,}6$ s; dakikadaki atım $60 / 0{,}6 = 100$.",
    },
    {
      id: "bm-u1-hiz-hesap-2", tip: "num", zorluk: 2,
      soru: "25 mm/s hızla kaydedilmiş bir EKG'de R-R aralığı 20 mm'dir. Kalp hızı dakikada kaç atımdır?",
      bosluklar: [["75"]],
      aciklama: "Periyot $20 \\times 0{,}04 = 0{,}8$ s; kalp hızı $60 / 0{,}8 = 75$ atım/dk.",
    },
    {
      id: "bm-u1-kalibrasyon", tip: "mcq", zorluk: 1,
      soru: "Standart EKG genlik kalibrasyonu hangisidir?",
      secenekler: ["1 mV = 10 mm", "1 mV = 25 mm", "1 mV = 1 mm", "10 mV = 1 mm"],
      dogru: 0,
      aciklama: "Standart **1 mV = 10 mm** (1 cm/mV); gerektiğinde 5 mm ya da 20 mm de seçilebilir. Yatay eksen zaman, dikey eksen gerilimdir.",
    },
    {
      id: "bm-u1-eksen", tip: "tf", zorluk: 1,
      soru: "EKG kağıdında yatay eksen gerilimi, dikey eksen zamanı gösterir.",
      dogru: false,
      aciklama: "Yanlış. **Yatay eksen zaman**, **dikey eksen gerilim**dir.",
    },
  ]),

  ...sunum(U, "u1-ritim", [
    {
      id: "bm-u1-normal-hiz", tip: "mcq", zorluk: 1,
      soru: "SA düğümü için normal kalp hızı aralığı nedir?",
      secenekler: ["60–100 atım/dk", "40–60 atım/dk", "20–40 atım/dk", "100–150 atım/dk"],
      dogru: 0,
      aciklama: "SA düğümünün normal hızı **60–100/dk**'dır; 60'ın altı bradikardi, 100'ün üstü taşikardidir.",
    },
    {
      id: "bm-u1-bradikardi", tip: "fill", zorluk: 1,
      soru: "Kalp hızının dakikada 60'ın altında olmasına ____ denir.",
      bosluklar: [["bradikardi"]],
      aciklama: "60/dk'nın altı **bradikardi**, 100/dk'nın üstü taşikardidir.",
    },
    {
      id: "bm-u1-av-hiz", tip: "mcq", zorluk: 2,
      soru: "SA düğümü yetersiz kaldığında devreye giren AV düğümünün hızı hangi aralıktadır?",
      secenekler: ["40–60 atım/dk", "60–80 atım/dk", "20–40 atım/dk", "60–100 atım/dk"],
      dogru: 0,
      aciklama: "Yedek odaklar: atriyal odak 60–80, **AV düğümü 40–60**, ventriküler odak 20–40 atım/dk.",
    },
    {
      id: "bm-u1-eksternal", tip: "tf", zorluk: 2,
      soru: "Eksternal pacemaker, kalp hızı tehlikeli derecede düştüğünde vücut dışından elektrik uyarısı vererek ritmi sağlayan geçici bir cihazdır.",
      dogru: true,
      aciklama: "Doğru. Transkütanöz pacemaker da denen bu cihaz geçici olarak kullanılır.",
    },
  ]),

  ...sunum(U, "u1-olcum", [
    {
      id: "bm-u1-ekg-frekans", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre EKG sinyallerinin frekans aralığı ve en büyük genliği hangisidir?",
      secenekler: ["0,1–100 Hz, yaklaşık 1 mV", "0,5–70 Hz, 5–400 µV", "50–60 Hz, yaklaşık 1 V", "1–1000 Hz, yaklaşık 10 mV"],
      dogru: 0,
      aciklama: "EKG frekansı **0,1 Hz'den 100 Hz'e** kadar değişir, en büyük genliği **1 mV** mertebesindedir. 0,5–70 Hz ve 5–400 µV EEG'nin değerleridir.",
    },
    {
      id: "bm-u1-izolasyon", tip: "mcq", zorluk: 2,
      soru: "EKG ölçüm devresinde izolasyon devresinin amacı nedir?",
      secenekler: ["Hastayı elektrik çarpmasından korumak", "Şebeke gürültüsünü süzmek", "Sinyali sayısala çevirmek", "Derivasyonları seçmek"],
      dogru: 0,
      aciklama: "İzolasyon devresi hastanın **elektrik çarpmasına** maruz kalmaması içindir. 50 Hz şebeke gürültüsünü bant söndüren filtre, derivasyonları uç seçim devresi yapar.",
    },
    {
      id: "bm-u1-bant-sondur", tip: "tf", zorluk: 2,
      soru: "EKG ölçüm blok şemasında ön kuvvetlendirici ve izolasyondan sonra bant söndüren filtre, kuvvetlendirici ve bant geçiren filtre gelir.",
      dogru: true,
      aciklama: "Doğru. Sıra: elektrotlar → uç seçim devresi → ön kuvvetlendirici → izolasyon → bant söndüren filtre → kuvvetlendirici → bant geçiren filtre → EKG.",
    },
  ]),
];
