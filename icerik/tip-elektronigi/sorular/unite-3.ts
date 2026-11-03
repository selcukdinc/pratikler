// 3. ünite (4. hafta notu): Biyomedikal sensörler ve dönüştürücüler. Kitap soruları
// Semmlow'un (dönüştürücüler) ve Subasi'nin (PPG) bölümlerinden.

import { ders, kitaptan, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...ders(U, "u3-donusum", [
    {
      id: "te-u3-akilli-saat", tip: "tf", zorluk: 2,
      soru: "Akıllı saatin optik sensörü nabzı doğrudan ölçmez; dokudaki kan hacmi değişiminin ışıkta yarattığı değişimi algılar ve nabız bu sinyalden çıkarılır.",
      dogru: true,
      aciklama: "Doğru. Notun açılış örneği budur: **sensörün ölçtüğü şey, bizim bilmek istediğimiz şeyle aynı değildir**. Işık → doku → kan hacmi değişimi → fotodedektör → elektriksel sinyal → işleme → nabız.",
    },
    {
      id: "te-u3-sensor-tanim", tip: "mcq", zorluk: 1,
      soru: "Ölçülen büyüklüğe duyarlı olan ve bu büyüklük hakkında bilgi taşıyan bir çıkış oluşturan eleman hangisidir?",
      secenekler: ["Sensör", "Kalibratör", "Yükselteç", "Analog-sayısal dönüştürücü", "Gösterge"],
      dogru: 0,
      aciklama: "Bu tanım **sensörün** tanımıdır. Dönüştürücü (transducer) ise bir enerji ya da büyüklük biçimini başka bir biçime dönüştüren elemandır.",
    },
    {
      id: "te-u3-donusum-kapasitif", tip: "mcq", zorluk: 2,
      soru: "Ders notundaki dönüştürme tablosuna göre deplasman hangi ilkeyle hangi elektriksel büyüklüğe dönüştürülür?",
      secenekler: [
        "Kapasitif ilkeyle kapasiteye",
        "Fotoelektrik ilkeyle akıma",
        "Piezoelektrik ilkeyle yüke",
        "Termorezistif ilkeyle dirence",
        "Elektrokimyasal ilkeyle gerilime",
      ],
      dogru: 0,
      aciklama: "Tabloda deplasman **kapasitif** ilkeyle **kapasite** değişimine dönüşür. Sıcaklık termorezistif ilkeyle dirence, kuvvet piezoelektrik ilkeyle yüke ya da gerilime, ışık fotoelektrik ilkeyle akıma, kimyasal konsantrasyon elektrokimyasal ilkeyle gerilime ya da akıma dönüşür.",
    },
    {
      id: "te-u3-donusum-devre", tip: "tf", zorluk: 1,
      soru: "Sensörün dönüşüm ilkesi, sensörden sonra kullanılacak elektronik ölçüm devresini de belirler.",
      dogru: true,
      aciklama: "Doğru. Örneğin direnç değişimi veren bir sensör için köprü devresi, yük veren bir sensör için yük yükselteci gerekir.",
    },
  ]),

  ...kitaptan(U, "u3-donusum", "semmlow", [
    {
      id: "te-u3-k-elektrot", tip: "mcq", zorluk: 2,
      soru: "Semmlow'a göre ölçüm sistemlerindeki giriş dönüştürücüleri elektriksel olmayan enerjiyi elektronik sinyale çevirir. Bu kuralın istisnası hangisidir?",
      secenekler: ["Elektrot", "Termistör", "Fotodedektör", "Basınç dönüştürücü", "Uzama ölçer"],
      dogru: 0,
      aciklama: "**Elektrot** zaten elektriksel olan enerjiyi **iyonik biçimden elektronik biçime** çevirir. Diğerleri sıcaklık, ışık, basınç ya da deformasyonu elektriksel çıkışa çevirir.",
    },
    {
      id: "te-u3-k-risk", tip: "tf", zorluk: 2,
      soru: "Semmlow'a göre dönüştürücü, ölçüm sisteminin bütününün riskini (girişimsellik düzeyini) belirleyen elemandır.",
      dogru: true,
      aciklama: "Doğru. Örneğin kalp içi basınç kateterle ölçülürse sistem girişimsel olur; bu yüzden dönüştürücü çoğu zaman sistemin en kritik elemanıdır.",
    },
  ]),

  ...ders(U, "u3-statik", [
    {
      id: "te-u3-dogrusal", tip: "mcq", zorluk: 2,
      soru: "İdeal doğrusal bir sensörün giriş–çıkış ilişkisi $Y = S X + b$ ile verilir. Burada $b$ neyi gösterir?",
      secenekler: ["Giriş sıfırken alınan çıkışı", "Hassasiyeti", "Ölçüm aralığını", "Çözünürlüğü", "Histerezisi"],
      dogru: 0,
      aciklama: "$S$ hassasiyet, $b$ ise giriş sıfırken alınan **çıkıştır (ofset)**.",
    },
    {
      id: "te-u3-hassasiyet", tip: "mcq", zorluk: 2,
      soru: "Ölçüm aralığı 0–200 mmHg olan bir basınç sensörü bu aralıkta 0–20 mV çıkış veriyor. Sensörün hassasiyeti nedir?",
      secenekler: ["0,1 mV/mmHg", "10 mV/mmHg", "0,01 mV/mmHg", "1 mV/mmHg", "20 mV/mmHg"],
      dogru: 0,
      aciklama: "Hassasiyet çıkıştaki değişimin girişteki değişime oranıdır: $S = 20 \\text{ mV} / 200 \\text{ mmHg} = 0{,}1$ mV/mmHg.",
    },
    {
      id: "te-u3-aralik", tip: "fill", zorluk: 1,
      soru: "Sensörün belirtilen performans sınırları içinde ölçebildiği en küçük ve en büyük giriş değerleri arasındaki bölgeye ölçüm ____ denir.",
      bosluklar: [["aralığı", "araligi", "aralık", "aralik"]],
      aciklama: "Bu bölgeye **ölçüm aralığı** (range) denir.",
    },
  ]),

  ...ders(U, "u3-hata", [
    {
      id: "te-u3-dogruluk-kesinlik", tip: "mcq", zorluk: 2,
      soru: "Aynı büyüklüğün tekrarlanan ölçümleri birbirine çok yakın ama hepsi gerçek değerden uzaksa sistem için ne söylenir?",
      secenekler: [
        "Kesinliği yüksek, doğruluğu düşüktür",
        "Doğruluğu yüksek, kesinliği düşüktür",
        "Hem doğruluğu hem kesinliği yüksektir",
        "Hem doğruluğu hem kesinliği düşüktür",
        "Çözünürlüğü yetersizdir",
      ],
      dogru: 0,
      aciklama: "Kesinlik (precision) ölçümlerin **birbirine** yakınlığıdır; doğruluk (accuracy) **gerçek değere** yakınlıktır. Birbirine yakın ama gerçekten uzak ölçümler: kesinlik yüksek, doğruluk düşük.",
    },
    {
      id: "te-u3-cozunurluk", tip: "tf", zorluk: 2,
      soru: "Yüksek çözünürlüklü bir ölçüm sistemi her zaman doğru ölçüm yapar.",
      dogru: false,
      aciklama: "Yanlış. Çözünürlük ayırt edilebilen **en küçük değişimdir**; notun vurgusuyla yüksek çözünürlük ölçümün mutlaka doğru olduğu anlamına gelmez.",
    },
    {
      id: "te-u3-histerezis", tip: "mcq", zorluk: 2,
      soru: "Aynı giriş değerinde, girişe artan ya da azalan yönden ulaşılmasına bağlı olarak farklı çıkış alınmasına ne denir?",
      secenekler: ["Histerezis", "Drift", "Doğrusallık hatası", "Çözünürlük", "Ofset"],
      dogru: 0,
      aciklama: "Bu, **histerezistir**. Drift ise giriş sabitken çıkışın zamanla değişmesidir.",
    },
    {
      id: "te-u3-drift", tip: "mcq", zorluk: 2,
      soru: "Giriş büyüklüğü sabitken sensör çıkışının zamanla değişmesi (drift) için ders notunda sayılan nedenler arasında hangisi yoktur?",
      secenekler: ["Ölçülen büyüklüğün artması", "Sıcaklık", "Sensörün yaşlanması", "Elektronik bileşenler", "Çevresel koşullar"],
      dogru: 0,
      aciklama: "Drift tanım gereği **giriş sabitken** oluşur; ölçülen büyüklüğün artması drift değil gerçek bir değişimdir. Not sıcaklık, yaşlanma, elektronik bileşenler ve çevresel koşulları sayar.",
    },
    {
      id: "te-u3-drift-onem", tip: "tf", zorluk: 1,
      soru: "Ders notuna göre drift, uzun süreli hasta izleme ve giyilebilir sistemlerde önemli bir hata kaynağıdır.",
      dogru: true,
      aciklama: "Doğru. Uzun kayıtlarda çıkıştaki yavaş kayma fizyolojik bir değişim gibi görünebilir.",
    },
    {
      id: "te-u3-dogrusallik", tip: "fill", zorluk: 1,
      soru: "Gerçek sensör karakteristiğinin ideal doğrudan sapması ____ hatası oluşturur.",
      bosluklar: [["doğrusallık", "dogrusallik", "doğrusalsızlık", "lineerlik"]],
      aciklama: "Bu sapma **doğrusallık** (linearity) hatasıdır.",
    },
  ]),

  ...ders(U, "u3-kalibrasyon", [
    {
      id: "te-u3-kalibrasyon-tanim", tip: "mcq", zorluk: 1,
      soru: "Kalibrasyon nedir?",
      secenekler: [
        "Sistem çıkışı ile bilinen referans değerler arasındaki ilişkinin belirlenmesi",
        "Sensörün ayırt edebildiği en küçük giriş değişiminin bulunması",
        "Sinyaldeki gürültünün analog bir filtreyle olabildiğince azaltılması",
        "Analog sinyalin sayısal veriye çevrilmesi",
        "Sensörün hastaya güvenli biçimde bağlanması",
      ],
      dogru: 0,
      aciklama: "Kalibrasyon, ölçüm sisteminin **çıkışı ile bilinen referans değerler** arasındaki ilişkinin belirlenmesidir.",
    },
    {
      id: "te-u3-kalibrasyon-egim", tip: "mcq", zorluk: 3,
      soru: "Bir basınç sensörü 0 mmHg'de 0,20 V, 50 mmHg'de 0,70 V, 100 mmHg'de 1,20 V, 150 mmHg'de 1,70 V veriyor. Sensörün hassasiyeti ve ofseti nedir?",
      secenekler: [
        "0,01 V/mmHg ve 0,20 V",
        "0,1 V/mmHg ve 0,20 V",
        "0,01 V/mmHg ve 0 V",
        "0,0113 V/mmHg ve 0 V",
        "0,5 V/mmHg ve 0,20 V",
      ],
      dogru: 0,
      aciklama: "Her 50 mmHg'de çıkış 0,50 V artıyor: $S = 0{,}50 / 50 = 0{,}01$ V/mmHg. Giriş sıfırken çıkış $b = 0{,}20$ V. Yani $V = 0{,}01 P + 0{,}20$.",
    },
    {
      id: "te-u3-kalibrasyon-ters", tip: "fill", zorluk: 3,
      soru: "Kalibrasyon bağıntısı $V = 0{,}01 P + 0{,}20$ (V, mmHg) olan sensör 1,00 V gösteriyorsa ölçülen basınç ____ mmHg'dir.",
      bosluklar: [["80"]],
      aciklama: "$P = (V - b) / S = (1{,}00 - 0{,}20) / 0{,}01 = 80$ mmHg.",
    },
  ]),

  ...ders(U, "u3-dinamik", [
    {
      id: "te-u3-dinamik", tip: "mcq", zorluk: 2,
      soru: "Ders notunda sensörlerin temel dinamik özellikleri arasında hangisi sayılmaz?",
      secenekler: ["Ölçüm aralığı", "Cevap süresi", "Zaman sabiti", "Bant genişliği", "Geçici rejim davranışı"],
      dogru: 0,
      aciklama: "Ölçüm aralığı **statik** bir özelliktir. Dinamik özellikler cevap süresi, zaman sabiti, bant genişliği ve geçici rejim davranışıdır.",
    },
    {
      id: "te-u3-dinamik-hiz", tip: "tf", zorluk: 1,
      soru: "Sensörün dinamik cevabı, ölçülen fizyolojik olaydan yeterince hızlı olmalıdır.",
      dogru: true,
      aciklama: "Doğru. Kalp atımı, solunum ve kan basıncı zamanla değişir; yavaş bir sensör bu değişimleri bozarak kaydeder.",
    },
  ]),

  ...ders(U, "u3-rezistif", [
    {
      id: "te-u3-rezistif-ornek", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi rezistif bir sensör değildir?",
      secenekler: ["Piezoelektrik kristal", "Strain gauge", "RTD", "Termistör", "Potansiyometrik sensör"],
      dogru: 0,
      aciklama: "Piezoelektrik kristal kuvvet altında **elektriksel yük** üretir. Strain gauge, RTD, termistör, potansiyometre ve piezorezistif sensörler direnç değişimi verir.",
    },
    {
      id: "te-u3-strain", tip: "mcq", zorluk: 2,
      soru: "Strain gauge hangi değişimi direnç değişimine çevirir?",
      secenekler: ["Mekanik deformasyonu", "Işık şiddetini", "Kimyasal konsantrasyonu", "Manyetik alanı", "Ses basıncının frekansını"],
      dogru: 0,
      aciklama: "Strain gauge **mekanik deformasyon** sonucunda direnci değişen bir sensördür; bağıl direnç değişimi uzamayla orantılıdır: $\\Delta R / R = GF \\cdot \\varepsilon$.",
    },
    {
      id: "te-u3-strain-hesap", tip: "fill", zorluk: 3,
      soru: "Ayar faktörü $GF = 2$ olan 120 Ω'luk bir strain gauge $\\varepsilon = 0{,}001$ uzamaya uğruyor. Direnç değişimi ____ Ω olur.",
      bosluklar: [["0,24", "0.24"]],
      aciklama: "$\\Delta R = GF \\cdot \\varepsilon \\cdot R = 2 \\cdot 0{,}001 \\cdot 120 = 0{,}24$ Ω. Bu kadar küçük değişimler Wheatstone köprüsüyle ölçülür.",
    },
    {
      id: "te-u3-wheatstone", tip: "mcq", zorluk: 2,
      soru: "Wheatstone köprüsünün sensör ölçümündeki avantajları arasında hangisi yoktur?",
      secenekler: [
        "Sensörün ölçüm aralığını genişletmesi",
        "Küçük direnç değişimlerini ölçebilmesi",
        "Diferansiyel çıkış vermesi",
        "Sıcaklık etkilerini azaltabilmesi",
        "Direnç değişimini gerilime çevirmesi",
      ],
      dogru: 0,
      aciklama: "Köprü küçük direnç değişimlerini **gerilim değişimine** çevirir, diferansiyel çıkış verir ve sıcaklık etkilerini azaltabilir. Sensörün ölçüm aralığını değiştirmez.",
    },
    {
      id: "te-u3-wheatstone-denge", tip: "tf", zorluk: 2,
      soru: "Dengeli bir Wheatstone köprüsünde sensör direnci değiştiğinde denge bozulur ve köprü çıkışında bir gerilim oluşur.",
      dogru: true,
      aciklama: "Doğru. Dengede çıkış sıfırdır ($R_1 / R_2 = R_3 / R_4$); sensör direncindeki değişim dengeyi bozar.",
    },
    {
      id: "te-u3-wheatstone-cikis", tip: "fill", zorluk: 3,
      soru: "Dört koldan yalnızca birinin sensör olduğu bir Wheatstone köprüsü $V_{ex} = 5$ V ile besleniyor. Sensör 120 Ω'luk bir strain gauge ve direnci 0,24 Ω değişiyor. Küçük değişimler için $V_{out} \\approx V_{ex} \\cdot \\Delta R / (4R)$ alınırsa köprü çıkışı yaklaşık ____ mV olur.",
      bosluklar: [["2,5", "2.5"]],
      aciklama: "$V_{out} \\approx 5 \\cdot 0{,}24 / (4 \\cdot 120) = 0{,}0025$ V $= 2{,}5$ mV. Direnç değişimi 0,24 Ω gibi çok küçük olsa da köprü bunu ölçülebilir bir gerilime çevirir; bu gerilim genellikle yükseltilir.",
    },
    {
      id: "te-u3-wheatstone-cikis-oran", tip: "mcq", zorluk: 3,
      soru: "Beslemesi ve $\\Delta R / R$ değeri aynı kalmak koşuluyla, tek sensörlü bir Wheatstone köprüsünün çıkış gerilimi $V_{out} \\approx V_{ex} \\cdot \\Delta R / (4R)$ ise sensör direnci değişimi iki katına çıkarıldığında çıkış nasıl değişir?",
      secenekler: ["İki katına çıkar", "Yarıya iner", "Dört katına çıkar", "Değişmez", "Sıfırlanır"],
      dogru: 0,
      aciklama: "Küçük değişimler için çıkış $\\Delta R$ ile doğrusal orantılıdır; $\\Delta R$ iki katına çıkınca $V_{out}$ de iki katına çıkar. Besleme gerilimini artırmak da çıkışı aynı oranda büyütür.",
    },
    {
      id: "te-u3-piezorezistif", tip: "mcq", zorluk: 2,
      soru: "Piezorezistif basınç sensöründe basınç önce neye dönüşür?",
      secenekler: [
        "Diyafram üzerinde mekanik deformasyona",
        "Doğrudan elektriksel yüke",
        "Işık şiddetindeki değişime",
        "Sıcaklık artışına",
        "Kapasite değişimine",
      ],
      dogru: 0,
      aciklama: "Basınç bir **diyaframda deformasyon** yaratır; diyafram üzerindeki piezorezistif elemanların direnç değişiminden basınç bulunur. Kan basıncı ve kateter tabanlı ölçüm tipik uygulamalardır.",
    },
  ]),

  ...ders(U, "u3-sicaklik", [
    {
      id: "te-u3-ntc", tip: "mcq", zorluk: 1,
      soru: "NTC tipi bir termistörde sıcaklık arttıkça direnç nasıl değişir?",
      secenekler: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Sıfıra düşer"],
      dogru: 0,
      aciklama: "NTC (negatif sıcaklık katsayılı) termistörde sıcaklık arttıkça direnç **azalır**; PTC'de artar.",
    },
    {
      id: "te-u3-rtd-termistor", tip: "mcq", zorluk: 2,
      soru: "Ders notuna göre RTD ile termistör karşılaştırıldığında hangisi doğrudur?",
      secenekler: [
        "RTD kararlılık ve doğrulukta, termistör hassasiyette öne çıkar",
        "Termistör daha doğrusal, RTD daha hassastır",
        "İkisi de yük üreten aktif sensördür",
        "RTD yarı iletken, termistör metal bir elemandır",
        "Termistör yalnızca çok yüksek sıcaklıkta kullanılır",
      ],
      dogru: 0,
      aciklama: "RTD metallerin direnç değişimine dayanır; **iyi kararlılık ve doğruluk** sunar. Termistör **yüksek hassasiyetlidir** ama karakteristiği daha belirgin biçimde doğrusal değildir.",
    },
  ]),

  ...ders(U, "u3-piezo", [
    {
      id: "te-u3-piezo-statik", tip: "tf", zorluk: 2,
      soru: "Piezoelektrik sensörler, statik büyüklüklerin uzun süreli ölçümünde özellikle uygundur.",
      dogru: false,
      aciklama: "Yanlış. Piezoelektrik sensörler **dinamik** mekanik olaylara uygundur; statik büyüklüklerin uzun süreli ölçümünde uygunlukları sınırlıdır.",
    },
    {
      id: "te-u3-piezo-uygulama", tip: "mcq", zorluk: 1,
      soru: "Ders notunda piezoelektrik sensörlerin uygulamaları arasında hangisi sayılmaz?",
      secenekler: ["Vücut sıcaklığı ölçümü", "Kalp sesleri", "Titreşim", "Ultrasonik dönüştürücüler", "Solunum hareketleri"],
      dogru: 0,
      aciklama: "Vücut sıcaklığı termistör ya da RTD ile ölçülür. Piezoelektrik sensörler kalp sesleri, titreşim, solunum hareketleri, ultrason ve kuvvet/basınç **değişimleri** için kullanılır.",
    },
  ]),

  ...ders(U, "u3-kapasitif", [
    {
      id: "te-u3-kapasite", tip: "mcq", zorluk: 2,
      soru: "Paralel plakalı bir kapasitede $C = \\varepsilon A / d$ dir. Plakalar arası uzaklık $d$ yarıya inerse kapasite ne olur?",
      secenekler: ["İki katına çıkar", "Yarıya iner", "Değişmez", "Dört katına çıkar", "Dörtte birine iner"],
      dogru: 0,
      aciklama: "Kapasite uzaklıkla ters orantılıdır: $d \\to d/2$ iken $C \\to 2C$. Kapasitif sensörler deplasmanı bu ilişkiyle kapasite değişimine çevirir.",
    },
  ]),

  ...ders(U, "u3-optik", [
    {
      id: "te-u3-oksimetri", tip: "mcq", zorluk: 2,
      soru: "Pulse oksimetri hangi ilkeye dayanır?",
      secenekler: [
        "Oksi ve deoksihemoglobinin farklı dalga boylarını farklı soğurmasına",
        "Kandaki oksijen moleküllerinin tek tek sayılmasına",
        "Kalbin vücut yüzeyinde oluşturduğu potansiyel farkına",
        "Deri sıcaklığının oksijenle değişmesine",
        "Kan basıncının diyaframda yarattığı deformasyona",
      ],
      dogru: 0,
      aciklama: "**Oksihemoglobin ve deoksihemoglobin** kırmızı ve kızılötesi ışığı farklı miktarda soğurur; iki dalga boyundaki pulsatif ve DC bileşenlerden SpO₂ **tahmin edilir**. Oksimetre oksijen moleküllerini saymaz.",
    },
    {
      id: "te-u3-iki-dalga", tip: "mcq", zorluk: 1,
      soru: "Pulse oksimetrede genellikle hangi iki ışık kullanılır?",
      secenekler: ["Kırmızı ve kızılötesi", "Mavi ve yeşil", "Morötesi ve mavi", "Yeşil ve sarı", "Beyaz ve morötesi"],
      dogru: 0,
      aciklama: "Pulse oksimetre genellikle **kırmızı ve kızılötesi** ışık kullanır.",
    },
  ]),

  ...kitaptan(U, "u3-optik", "subasi", [
    {
      id: "te-u3-k-ppg-acdc", tip: "mcq", zorluk: 2,
      soru: "Subasi'ye göre PPG sinyalindeki pulsatif (AC) bileşen neyi yansıtır?",
      secenekler: [
        "Her kalp atımında kan hacminin eşzamanlı değişimini",
        "Solunum ve ısı düzenlemesine bağlı yavaş taban çizgisini",
        "Ortam ışığından gelen sabit bileşeni",
        "Fotodedektörün karanlık akımını",
        "Kas kasılmasından gelen elektriksel aktiviteyi",
      ],
      dogru: 0,
      aciklama: "AC bileşen **her kalp atımıyla kan hacmindeki eşzamanlı değişimdir**; solunum, sempatik sinir sistemi ve ısı düzenlemesine bağlı yavaş değişimler DC taban çizgisindedir.",
    },
    {
      id: "te-u3-k-ppg-dalga", tip: "mcq", zorluk: 3,
      soru: "Subasi'ye göre deri kan akışını izleyen bir PPG için iyi bir ışık kaynağı hangi dalga boyu aralığındadır?",
      secenekler: ["600–700 nm", "200–300 nm", "400–450 nm", "1500–2000 nm", "10–20 µm"],
      dogru: 0,
      aciklama: "Kitap, deri kan akışı için iyi bir vericinin **600–700 nm** aralığında olduğunu ve en iyi AC sinyalinin parmak ucundan alındığını belirtir.",
    },
    {
      id: "te-u3-k-ppg-jel", tip: "tf", zorluk: 2,
      soru: "PPG, EKG'den farklı olarak çevresel bölgelerden alınabilir ve iyi temas için iletken jel gerektirmez; bu yüzden giyilebilir cihazlarda yaygınlaşmıştır.",
      dogru: true,
      aciklama: "Doğru. Bu yüzden akıllı saatlerde PPG kullanılır; ancak egzersizde hareket artefaktı PPG'yi ciddi biçimde bozar.",
    },
  ]),

  ...ders(U, "u3-secim", [
    {
      id: "te-u3-hata-kaynak", tip: "mcq", zorluk: 2,
      soru: "Ders notunda biyomedikal sensörlerde hata ve bozulma kaynakları arasında hangisi sayılmaz?",
      secenekler: [
        "Ölçülen fizyolojik büyüklüğün gerçekten değişmesi",
        "Hareket artefaktı",
        "Ortam ışığı",
        "Elektromanyetik girişim",
        "Bireyler arası fizyolojik farklılıklar",
      ],
      dogru: 0,
      aciklama: "Notun vurgusu: sensör çıkışındaki değişim **her zaman fizyolojik değişimden kaynaklanmaz**. Hata kaynakları hareket artefaktı, temasın değişmesi, sıcaklık, ortam ışığı, girişim, drift, histerezis, kalibrasyon hatası, elektronik gürültü ve bireyler arası farklardır. Gerçek fizyolojik değişim ise ölçülmek istenen şeydir.",
    },
    {
      id: "te-u3-secim", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi ders notunda sensör seçiminde dikkate alınacak özellikler arasında yer almaz?",
      secenekler: ["Üreticinin reklam bütçesi", "Biyouyumluluk", "Sterilizasyon gereksinimi", "Güç tüketimi", "Hasta güvenliği"],
      dogru: 0,
      aciklama: "Not; aralık, hassasiyet, doğruluk, çözünürlük, doğrusallık, cevap süresi, bant genişliği, drift, boyut, güç, **biyouyumluluk**, güvenlik, sterilizasyon ve uzun süreli kullanımı sayar. Seçim uygulamaya göre yapılır.",
    },
    {
      id: "te-u3-giyilebilir", tip: "tf", zorluk: 1,
      soru: "Giyilebilir ve implante edilebilir sensörlerde düşük güç tüketimi, küçük boyut, kablosuz iletişim, biyouyumluluk ve uzun süreli kararlılık önemlidir.",
      dogru: true,
      aciklama: "Doğru. Bu sistemler uzun süre vücutta ya da üzerinde, çoğu zaman pille çalışır.",
    },
  ]),
];
