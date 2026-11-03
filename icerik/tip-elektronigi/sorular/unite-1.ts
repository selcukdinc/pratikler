// 1. ünite (1-2. hafta notu): Tıp elektroniğine giriş, fizyolojik sinyaller ve
// insan–enstrümantasyon sistemi. Kitap soruları Semmlow'un 1. bölümünden.

import { ders, kitaptan, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...ders(U, "u1-tanim", [
    {
      id: "te-u1-tanim", tip: "mcq", zorluk: 1,
      soru: "Ders notundaki tanıma göre aşağıdakilerden hangisi tıp elektroniğinin kapsamına girmez?",
      secenekler: [
        "Fizyolojik büyüklüklerin sensör ve elektrotlarla algılanması",
        "Biyomedikal sinyallerin kuvvetlendirilmesi ve filtrelenmesi",
        "Elektronik sistemlerin tedavi amacıyla kullanılması",
        "İlaç etken maddelerinin kimyasal sentezlenmesi",
        "Ölçüm sonuçlarının tanıya destek amacıyla kullanılması",
      ],
      dogru: 3,
      aciklama: "Tıp elektroniği fizyolojik süreçlerin **ölçülmesi, izlenmesi, tanıya destek ve tedavi** amacıyla elektronik sistemlerin kullanıldığı alandır. İlaç sentezi elektronik bir ölçüm ya da tedavi sistemi değildir.",
    },
    {
      id: "te-u1-gelisim", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre tıp elektroniği, ölçüm ve kayıttan başlayıp görüntüleme, tedavi ve sürekli fizyolojik izlemeye doğru gelişmiştir.",
      dogru: true,
      aciklama: "Doğru. Alan, ilk ölçüm ve kayıt cihazlarından görüntüleme, tedavi ve giyilebilir cihazlarla sürekli izlemeye doğru genişlemiştir.",
    },
    {
      id: "te-u1-disiplin", tip: "fill", zorluk: 1,
      soru: "Tıp elektroniği, elektrik-elektronik mühendisliğinin temel bilgi alanlarının insan vücudundan ölçüm alma ve tıbbi sistem geliştirme amacıyla bir araya geldiği ____ bir alandır.",
      bosluklar: [["disiplinler arası", "disiplinlerarası", "disiplinler arasi", "disiplinlerarasi"]],
      aciklama: "Ders notu tıp elektroniğini **disiplinler arası** bir alan olarak tanımlar: elektronik, sinyal işleme ve fizyoloji bilgisi birlikte kullanılır.",
    },
  ]),

  ...ders(U, "u1-sinyal", [
    {
      id: "te-u1-sinyal-tanim", tip: "mcq", zorluk: 1,
      soru: "Fizyolojik sinyal için aşağıdaki ifadelerden hangisi ders notundaki tanımla uyuşmaz?",
      secenekler: [
        "Kaynağı kalp, beyin ya da kas gibi bir fizyolojik süreçtir",
        "Gerilim, basınç ya da sıcaklık gibi bir büyüklükle gözlenir",
        "Zamanla ya da başka bir bağımsız değişkenle değişebilir",
        "Ölçümün tek amacı sinyalin kendisini kaydetmektir",
        "Canlı sistemdeki bir süreç hakkında bilgi taşır",
      ],
      dogru: 3,
      aciklama: "Notta özellikle vurgulanır: amaç yalnızca sinyali kaydetmek değil, **taşıdığı fizyolojik bilgiyi** elde etmektir.",
    },
    {
      id: "te-u1-biosignal", tip: "tf", zorluk: 2,
      soru: "Ders notuna göre \"biosignal\" terimi \"physiological signal\" teriminden daha dar bir kavramdır.",
      dogru: false,
      aciklama: "Yanlış. İki terim bağlama göre benzer anlamda kullanılabilir, ancak notta **biosignal daha geniş** bir kavram olarak belirtilir.",
    },
    {
      id: "te-u1-kaynak", tip: "mcq", zorluk: 1,
      soru: "İnsan vücudundaki fizyolojik süreçlerin ürettiği ölçülebilir bilgi ders notunda hangi beş büyüklük türüyle verilir?",
      secenekler: [
        "Elektriksel, mekanik, termal, optik, kimyasal",
        "Elektriksel, manyetik, nükleer, akustik, kimyasal",
        "Mekanik, termal, radyoaktif, optik, biyolojik",
        "Elektriksel, mekanik, akustik, nükleer, termal",
        "Kimyasal, optik, manyetik, radyoaktif, mekanik",
      ],
      dogru: 0,
      aciklama: "Not beş tür sayar: **elektriksel** (EKG), **mekanik** (kan basıncı), **termal** (vücut sıcaklığı), **optik** (PPG) ve **kimyasal** (pH, O₂, glikoz).",
    },
  ]),

  ...ders(U, "u1-sinif", [
    {
      id: "te-u1-sinif-ppg", tip: "mcq", zorluk: 1,
      soru: "PPG ve SpO₂ ölçümü, ders notundaki sınıflandırmada hangi sinyal türüne girer?",
      secenekler: ["Biyooptik", "Biyoelektriksel", "Biyomekanik", "Biyotermal", "Biyokimyasal"],
      dogru: 0,
      aciklama: "PPG ve SpO₂ **ışığın dokuyla etkileşimine** dayanır; bu yüzden biyooptik sinyallerdir.",
    },
    {
      id: "te-u1-sinif-basinc", tip: "mcq", zorluk: 1,
      soru: "Kan basıncı, solunum ve kan akışı ders notunda hangi sinyal türüne örnek verilir?",
      secenekler: ["Biyomekanik", "Biyoelektriksel", "Biyooptik", "Biyotermal", "Biyokimyasal"],
      dogru: 0,
      aciklama: "Basınç, kuvvet, hareket ve akış **biyomekanik** büyüklüklerdir.",
    },
    {
      id: "te-u1-biyoelektrik", tip: "mcq", zorluk: 2,
      soru: "Biyoelektriksel sinyallerle ilgili hangisi doğrudur?",
      secenekler: [
        "Uyarılabilir hücre ve dokuların aktivitesinden doğar, elektrotla ölçülür",
        "Dokudan geçen ışığın şiddetindeki değişimle ölçülür",
        "Yalnızca iğne elektrotlarla vücudun içinden kaydedilebilir",
        "Genlikleri volt mertebesinde olduğu için kuvvetlendirme gerekmez",
        "İyon ya da molekül konsantrasyonu değiştiğinde oluşur",
      ],
      dogru: 0,
      aciklama: "Biyoelektriksel sinyaller (EKG, EEG, EMG, EOG) **uyarılabilir hücre ve dokulardaki elektriksel aktivitenin** sonucu olan biyopotansiyellerdir ve elektrotlarla ölçülür. Genlikleri küçüktür; kuvvetlendirme ve gürültüden ayırma ortak mühendislik problemidir.",
    },
    {
      id: "te-u1-sinif-sensor", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre sinyalin kaynağı, kullanılacak sensörü ve ölçüm elektroniğinin özelliklerini doğrudan etkiler.",
      dogru: true,
      aciklama: "Doğru. Her sinyal türü farklı bir algılama yöntemi ve ölçüm sistemi gerektirir.",
    },
  ]),

  ...ders(U, "u1-genlik", [
    {
      id: "te-u1-genlik-eeg", tip: "mcq", zorluk: 2,
      soru: "1-2. hafta notundaki tabloya göre EKG, EEG ve EMG içinde tipik genliği en düşük olan hangisidir?",
      secenekler: ["EEG", "EKG", "EMG", "Üçünün genliği eşittir", "EKG ile EMG eşit, EEG daha büyük"],
      dogru: 0,
      aciklama: "Tabloda EEG ~10–100 µV, EKG ~0,5–4 mV, EMG ~50 µV–5 mV verilir. **EEG** en düşük genlikli olandır; bu yüzden en yüksek kazanç ve gürültü önlemi gerektirir.",
    },
    {
      id: "te-u1-genlik-ekg-frekans", tip: "mcq", zorluk: 2,
      soru: "1-2. hafta notundaki tabloya göre EKG'nin yaklaşık frekans aralığı hangisidir?",
      secenekler: ["~0,05–150 Hz", "~0,5–100 Hz", "~10–500 Hz", "~1–5 kHz", "~0,01–2 Hz"],
      dogru: 0,
      aciklama: "EKG için **~0,05–150 Hz** verilir. ~0,5–100 Hz EEG'nin, ~10–500 Hz EMG'nin aralığıdır.",
    },
    {
      id: "te-u1-genlik-emg", tip: "tf", zorluk: 2,
      soru: "1-2. hafta notundaki tabloya göre EMG, üç biyoelektriksel sinyal içinde frekans içeriği en yükseğe uzanan sinyaldir.",
      dogru: true,
      aciklama: "Doğru. EMG ~10–500 Hz ile kas aktivasyonuna bağlı **geniş bantlı** bir sinyaldir; EKG ~150 Hz'e, EEG ~100 Hz'e kadar uzanır.",
    },
    {
      id: "te-u1-genlik-tasarim", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre bir sinyalin genlik ve frekans özellikleri en doğrudan neyin tasarımını etkiler?",
      secenekler: [
        "Yükselteç, filtre ve veri toplama sisteminin",
        "Hastanın oturma pozisyonunun",
        "Cihazın kasasının renginin",
        "Hastane bilgi sisteminin",
        "Elektrot kablolarının uzunluğunun",
      ],
      dogru: 0,
      aciklama: "Genlik kazancı, frekans içeriği ise filtre kesimlerini ve örnekleme hızını belirler; bu yüzden **yükselteç, filtre ve veri toplama sistemi** bu özelliklere göre tasarlanır.",
    },
  ]),

  ...ders(U, "u1-measurand", [
    {
      id: "te-u1-measurand-tanim", tip: "fill", zorluk: 1,
      soru: "Bir ölçüm sisteminin belirlemeyi amaçladığı fiziksel, kimyasal ya da biyolojik büyüklüğe ____ denir.",
      bosluklar: [["measurand", "ölçülen büyüklük", "olculen buyukluk"]],
      aciklama: "Bu büyüklüğe **measurand** (ölçülen büyüklük) denir. Doğru tanımlanması sensör seçimini, ölçüm aralığını ve hassasiyeti belirler.",
    },
    {
      id: "te-u1-measurand-ekg", tip: "mcq", zorluk: 2,
      soru: "EKG ölçümünde measurand hangisidir?",
      secenekler: [
        "Vücut yüzeyindeki biyopotansiyel farkı",
        "Kalbin pompaladığı kan hacmi",
        "Elektrotun çıkışındaki akım",
        "Ekranda görünen dalga biçimi",
        "Kalp kasındaki sıcaklık değişimi",
      ],
      dogru: 0,
      aciklama: "EKG'de ölçülmek istenen **vücut yüzeyindeki potansiyel farkıdır**; elektrot ve ölçüm sistemi bunu EKG sinyaline çevirir. Ekrandaki dalga ölçümün sonucudur, measurand değil.",
    },
    {
      id: "te-u1-measurand-glikoz", tip: "mcq", zorluk: 1,
      soru: "Ders notundaki tabloya göre glikoz ölçümünde elde edilen elektriksel bilgi hangisidir?",
      secenekler: ["Elektrokimyasal sensör çıkışı", "Fotodedektör çıkışı", "Termistör direnci", "Yüzey biyopotansiyeli", "Diyafram deformasyonu"],
      dogru: 0,
      aciklama: "Glikoz konsantrasyonu kimyasal bir büyüklüktür ve **elektrokimyasal sensör** ile elektriksel çıkışa çevrilir.",
    },
  ]),

  ...ders(U, "u1-sistem", [
    {
      id: "te-u1-sistem-cevre", tip: "mcq", zorluk: 1,
      soru: "İnsan–enstrümantasyon sisteminde \"çevre\" bileşeninin ders notundaki rolü hangisidir?",
      secenekler: [
        "Ölçümü bozabilecek girişim ve artefaktların kaynağı olabilir",
        "Ölçülecek fizyolojik büyüklüğün kaynağıdır",
        "Measurand ile elektronik sistem arasındaki arayüzdür",
        "Sinyali uygun biçime getirip çıkış üretir",
        "Hastaya uyarı veren geri besleme bloğudur",
      ],
      dogru: 0,
      aciklama: "Çevre, ölçümü bozabilecek **girişim ve artefaktların kaynağı** olabilir. Fizyolojik büyüklüğün kaynağı insandır, arayüz sensör/elektrottur, işleme ölçüm sistemindedir.",
    },
    {
      id: "te-u1-sistem-insan", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre biyomedikal ölçümde insan yalnızca ölçülen bir kaynaktır; sistemin bir parçası sayılmaz.",
      dogru: false,
      aciklama: "Yanlış. İnsan; sensör, ölçüm sistemi, çevre ve gerektiğinde geri besleme ile birlikte **bütün bir sistemin parçasıdır**.",
    },
    {
      id: "te-u1-sistem-arayuz", tip: "mcq", zorluk: 1,
      soru: "İnsan–enstrümantasyon sisteminde measurand ile elektronik sistem arasındaki arayüz hangisidir?",
      secenekler: ["Sensör ya da elektrot", "Çevre", "Çıktı birimi", "Geri besleme", "Hasta"],
      dogru: 0,
      aciklama: "**Sensör/elektrot**, ölçülen büyüklük ile elektronik ölçüm sistemi arasındaki arayüzdür.",
    },
  ]),

  ...ders(U, "u1-zincir", [
    {
      id: "te-u1-zincir-sira", tip: "mcq", zorluk: 1,
      soru: "Bir EKG cihazında sinyalin izlediği yol hangi sırayla verilir?",
      secenekler: [
        "Elektrot → analog işlemler → ADC → sayısal bölüm",
        "ADC → elektrot → analog işlemler → sayısal bölüm",
        "Elektrot → ADC → analog işlemler → sayısal bölüm",
        "Analog işlemler → elektrot → sayısal bölüm → ADC",
        "Sayısal bölüm → ADC → analog işlemler → elektrot",
      ],
      dogru: 0,
      aciklama: "Elektrot biyopotansiyeli alır, **analog işlemler** kuvvetlendirip istenmeyen bileşenleri azaltır, **ADC** sayısallaştırır, sayısal bölüm işler, gösterir ve depolar.",
    },
    {
      id: "te-u1-elektrot", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre elektrotun ölçüm zincirindeki özel görevi hangisidir?",
      secenekler: [
        "İyonik iletim ile elektron iletimi arasında arayüz olmak",
        "Sinyali sayısal veriye çevirip bilgisayara aktarmak",
        "Işık şiddetindeki değişimi akıma dönüştürmek",
        "Sıcaklık değişimini direnç değişimine dönüştürmek",
        "Sinyaldeki şebeke girişimini sayısal olarak süzmek",
      ],
      dogru: 0,
      aciklama: "Elektrot, vücuttaki **iyonik** elektriksel aktivite ile ölçüm sistemindeki **elektron** iletimi arasında arayüz oluşturur.",
    },
    {
      id: "te-u1-sensor-donusturucu", tip: "tf", zorluk: 1,
      soru: "Dönüştürücü (transducer), bir enerji ya da fiziksel büyüklük biçimini başka bir biçime dönüştüren elemandır.",
      dogru: true,
      aciklama: "Doğru. Biyomedikal ölçümde amaç çoğunlukla fizyolojik bilgiyi elektronik sistemin işleyebileceği **elektriksel sinyale** aktarmaktır.",
    },
    {
      id: "te-u1-termistor", tip: "mcq", zorluk: 1,
      soru: "Ders notundaki tabloya göre termistörün elektriksel çıktısı hangisidir?",
      secenekler: ["Direnç değişimi", "Akım / gerilim", "Yük birikimi", "Kapasite değişimi", "Biyopotansiyel"],
      dogru: 0,
      aciklama: "Termistör sıcaklıkla **direnci değişen** bir elemandır; fotodedektör akım/gerilim, elektrot ise potansiyel verir.",
    },
  ]),

  ...ders(U, "u1-kosullama", [
    {
      id: "te-u1-afe", tip: "mcq", zorluk: 1,
      soru: "Analog ön ucun (AFE) ölçüm zincirindeki görevi hangisidir?",
      secenekler: [
        "Sensör sinyalini ADC'ye uygulanabilir hale getirmek",
        "Sayısal veriyi ekranda göstermek",
        "Hastayı elektriksel olarak uyarmak",
        "Ölçüm sonuçlarını hastane sistemine göndermek",
        "Kalp hızını RR aralığından hesaplamak",
      ],
      dogru: 0,
      aciklama: "Sensör ya da elektrottan gelen sinyal çoğu zaman ADC'ye doğrudan uygulanamaz; **AFE** onu sonraki aşamalar için uygun hale getirir.",
    },
    {
      id: "te-u1-kosullama-temel", tip: "fill", zorluk: 1,
      soru: "Sinyal koşullamanın iki temel işlemi kuvvetlendirme ve analog ____dir.",
      bosluklar: [["filtreleme", "filtrelemedir", "süzme"]],
      aciklama: "Sinyal koşullamanın temel işlemleri **kuvvetlendirme ve analog filtrelemedir**; parametreleri sinyalin genlik ve frekans özelliklerine göre seçilir.",
    },
  ]),

  ...ders(U, "u1-adc", [
    {
      id: "te-u1-daq", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre veri toplama sistemi (DAQ) hangi süreçleri kapsar?",
      secenekler: [
        "Koşullama, örnekleme, sayısallaştırma ve işlemciye aktarma",
        "Yalnızca analog sinyalin kuvvetlendirilmesi",
        "Yalnızca sayısal verinin ekranda gösterilmesi",
        "Elektrotun cilde yapıştırılması ve hastanın hazırlanması",
        "Yalnızca klinik yorumun hekime raporlanması",
      ],
      dogru: 0,
      aciklama: "DAQ; sensörden gelen analog sinyalin **koşullandırılması, örneklenmesi, sayısallaştırılması ve bilgisayara aktarılmasını** kapsar.",
    },
  ]),

  ...kitaptan(U, "u1-adc", "semmlow", [
    {
      id: "te-u1-k-kuantalama", tip: "mcq", zorluk: 2,
      soru: "Giriş aralığı 0–5 V olan 8 bitlik bir ADC'nin kuantalama aralığı yaklaşık kaç volttur?",
      secenekler: ["0,0195 V", "0,625 V", "0,0049 V", "0,039 V", "0,195 V"],
      dogru: 0,
      aciklama: "8 bit $2^8 = 256$ seviye verir. Kuantalama aralığı $\\delta = V / 2^N = 5 / 256 \\approx 0{,}0195$ V olur.",
    },
    {
      id: "te-u1-k-nyquist", tip: "mcq", zorluk: 2,
      soru: "Bir sinyalin örneklerden doğru biçimde geri elde edilebilmesi için örnekleme frekansı en az ne olmalıdır?",
      secenekler: [
        "Sinyaldeki en yüksek frekansın iki katı",
        "Sinyaldeki en yüksek frekansın yarısı",
        "Sinyaldeki en düşük frekansın iki katı",
        "Analog sistemin −3 dB bant genişliğine eşit",
        "Sinyaldeki en yüksek frekansa eşit",
      ],
      dogru: 0,
      aciklama: "Örnekleme frekansı sinyalde bulunan **en yüksek frekansın iki katı** olmalıdır. Bu frekans gürültüden de gelebilir; bu yüzden ADC'den önce analog filtreyle sinyal sınırlanır. Aksi halde aliasing oluşur ve sonradan düzeltilemez.",
    },
    {
      id: "te-u1-k-aliasing", tip: "tf", zorluk: 2,
      soru: "Yetersiz örneklemeden doğan hata (aliasing), sayısal sinyal işleme yöntemleriyle sonradan düzeltilebilir.",
      dogru: false,
      aciklama: "Yanlış. Aliasing sayısal gösterimin içine yerleşir; **hiçbir sayısal işlem** onu düzeltemez. Önlem ADC'den önce alçak geçiren (anti-aliasing) filtre ya da yeterince yüksek örnekleme hızıdır.",
    },
    {
      id: "te-u1-k-filtre-egim", tip: "mcq", zorluk: 3,
      soru: "Bir alçak geçiren filtrenin derecesi (kutup sayısı) 4 ise, kesim frekansının çok üstünde zayıflatma eğimi yaklaşık ne olur?",
      secenekler: ["80 dB/dekad", "20 dB/dekad", "40 dB/dekad", "60 dB/dekad", "120 dB/dekad"],
      dogru: 0,
      aciklama: "Her kutup eğimi **20 dB/dekad** artırır: $4 \\times 20 = 80$ dB/dekad. İkinci dereceden filtre 40 dB/dekad, 12. dereceden filtre kuramsal olarak 240 dB/dekad verir.",
    },
  ]),

  ...ders(U, "u1-ornek", [
    {
      id: "te-u1-hr", tip: "fill", zorluk: 2,
      soru: "Ardışık R tepeleri arasındaki süre $RR = 0{,}8$ s ise kalp hızı ____ bpm'dir.",
      bosluklar: [["75"]],
      aciklama: "$HR = 60 / RR = 60 / 0{,}8 = 75$ atım/dakika (bpm).",
    },
    {
      id: "te-u1-hr-ters", tip: "mcq", zorluk: 2,
      soru: "Kalp hızı 120 bpm olan birinde ardışık R tepeleri arasındaki süre ne kadardır?",
      secenekler: ["0,5 s", "1,2 s", "2 s", "0,12 s", "0,25 s"],
      dogru: 0,
      aciklama: "$RR = 60 / HR = 60 / 120 = 0{,}5$ s.",
    },
    {
      id: "te-u1-ppg-tanim", tip: "mcq", zorluk: 1,
      soru: "Fotopletismografi (PPG) neyi algılayan bir ölçüm yöntemidir?",
      secenekler: [
        "Kan hacmi değişimine bağlı ışık şiddeti değişimini",
        "Kalbin vücut yüzeyinde oluşturduğu potansiyel farkını",
        "Kasların kasılırken ürettiği sesi",
        "Deri sıcaklığındaki yavaş değişimleri",
        "Kandaki glikoz konsantrasyonunu",
      ],
      dogru: 0,
      aciklama: "PPG, dokudaki **kan hacmi değişimlerine bağlı** iletilen ya da yansıyan ışık şiddetindeki değişimi algılayan optik bir yöntemdir.",
    },
    {
      id: "te-u1-spo2", tip: "fill", zorluk: 1,
      soru: "Pulse oksimetrenin verdiği SpO₂ değeri, periferik kılcal damar oksijen ____ belirtir.",
      bosluklar: [["satürasyonunu", "saturasyonunu", "doygunluğunu", "doygunlugunu", "satürasyonu", "doygunluğu"]],
      aciklama: "SpO₂, periferik kılcal damar **oksijen satürasyonudur** (doygunluğu).",
    },
  ]),

  ...ders(U, "u1-gurultu", [
    {
      id: "te-u1-artefakt", tip: "mcq", zorluk: 2,
      soru: "Ders notunda gürültü ile artefakt arasındaki fark nasıl verilir?",
      secenekler: [
        "Artefakt, hedef süreçten kaynaklanmayan bozucu bileşendir",
        "Gürültü ve artefakt aynı kavramın iki farklı adıdır",
        "Artefakt yalnızca ADC'de oluşan kuantalama hatasıdır",
        "Gürültü yalnızca hastanın hareketinden doğan bozulmadır",
        "Artefakt ölçülmek istenen fizyolojik sinyalin kendisidir",
      ],
      dogru: 0,
      aciklama: "Notta **gürültü ≠ artefakt** yazılır. Gürültü ölçüm sistemine eklenen istenmeyen rastlantısal ya da elektriksel bileşendir; artefakt ise hedef süreçten kaynaklanmayan ama kayıtta görülen bozucu bileşendir (ör. hareket artefaktı).",
    },
    {
      id: "te-u1-zorluk", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre biyomedikal sinyaller çoğu zaman düşük genlikli ve değişkendir; fizyolojik, çevresel ve elektronik bozucu etkilerle birlikte kaydedilir.",
      dogru: true,
      aciklama: "Doğru. Sistemin görevi hedef fizyolojik bilgiyi bu bozucu etkiler altında **güvenilir biçimde** elde etmektir.",
    },
  ]),

  ...kitaptan(U, "u1-gurultu", "semmlow", [
    {
      id: "te-u1-k-snr", tip: "mcq", zorluk: 2,
      soru: "Sinyalin RMS değeri gürültünün RMS değerinin 10 katıysa sinyal-gürültü oranı kaç dB'dir?",
      secenekler: ["20 dB", "10 dB", "3 dB", "40 dB", "100 dB"],
      dogru: 0,
      aciklama: "$SNR = 20 \\log_{10}(10) = 20$ dB. 0 dB sinyal ile gürültünün eşit olduğu, −20 dB sinyalin gürültünün onda biri olduğu durumdur.",
    },
    {
      id: "te-u1-k-johnson", tip: "mcq", zorluk: 3,
      soru: "Bir direncin ısıl (Johnson) gürültü gerilimi $V_J = \\sqrt{4kTRB}$ ile verilir. Sistemin bant genişliği 4 katına çıkarsa gürültü gerilimi ne olur?",
      secenekler: ["2 katına çıkar", "4 katına çıkar", "Değişmez", "Yarıya iner", "16 katına çıkar"],
      dogru: 0,
      aciklama: "Gürültü gerilimi bant genişliğinin karekökü ile orantılıdır: $\\sqrt{4} = 2$. Bu yüzden ölçüm sisteminin bant genişliğini gereğinden geniş tutmak gürültüyü artırır.",
    },
    {
      id: "te-u1-k-beyaz", tip: "tf", zorluk: 2,
      soru: "Isıl gürültü ve saçma (shot) gürültüsü enerjisi bütün frekanslara yayılmış beyaz gürültü özelliği gösterir.",
      dogru: true,
      aciklama: "Doğru. Her iki elektronik gürültü de DC'den çok yüksek frekanslara kadar yayılır; bu yüzden gürültü değeri ancak bant genişliği belirtilince hesaplanabilir (ya da V/√Hz gibi göreli birimle verilir).",
    },
  ]),

  ...ders(U, "u1-guvenlik", [
    {
      id: "te-u1-guvenlik", tip: "mcq", zorluk: 1,
      soru: "Ders notuna göre tıbbi elektronik sistemlerde elektriksel güvenliğin neden daha kritik olduğu sorusuna hangisi cevap olamaz?",
      secenekler: [
        "Ölçüm sistemi hasta ile elektriksel temas kurabilir",
        "Biyopotansiyel ölçümünde elektrotlar doğrudan vücuda bağlanır",
        "Arıza ve kaçak akım durumları tasarımda dikkate alınmalıdır",
        "Tıbbi cihazlar yalnızca pil ile çalıştığı için risk yoktur",
        "Küçük sinyaller ölçülürken güvenlikten ödün verilemez",
      ],
      dogru: 3,
      aciklama: "Not; elektriksel temas, vücuda bağlı elektrotlar, küçük sinyaller ve **arıza/kaçak akım** durumlarını sayar. Cihazların yalnızca pille çalıştığı ve riskin olmadığı iddiası notta yoktur.",
    },
    {
      id: "te-u1-dort-soru", tip: "tf", zorluk: 1,
      soru: "Ders notunun özetine göre her cihazda dönülecek temel sorular şunlardır: ne ölçüyoruz, nasıl algılıyoruz, nasıl işliyoruz ve bunu nasıl güvenli biçimde gerçekleştiriyoruz.",
      dogru: true,
      aciklama: "Doğru. Dönem boyunca farklı cihazlar bu dört soru üzerinden incelenir.",
    },
  ]),
];
