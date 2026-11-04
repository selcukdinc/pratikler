// Önceki yıllardan derlenmiş vize soruları. Fotoğraflardan yazıya geçirildi;
// cevap anahtarı yoktu. Cevaplar hesaplanarak ve konu bilgisiyle bulundu, bu
// yüzden her açıklamanın sonunda bu belirtilir. Fotoğrafta okunamayan soru ve
// şıklar alınmadı.

import { cikmisSorular } from "./yardimci.ts";

const ANAHTARSIZ = "\n\n> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.";

export const vizeDerleme = cikmisSorular("km-vd", "Vize derlemesi", [
  {
    sira: 2, hafta: 2, konu: "km-olcme-birim", kavram: "u2-sicaklik-olcegi",
    soru: "Bir elementin erime sıcaklığı 350 °F olarak verilmiştir. Celsius ölçeğinde bu sıcaklık nedir?",
    secenekler: ["225 °C", "121 °C", "157 °C", "177 °C", "137 °C"],
    dogru: 3,
    aciklama: "$t_C = (t_F - 32) \\cdot 5/9 = (350 - 32) \\cdot 5/9 = 318 \\cdot 5/9 \\approx 176{,}7$ °C, yani yaklaşık 177 °C." + ANAHTARSIZ,
  },
  {
    sira: 4, hafta: 1, konu: "km-madde-karisim", kavram: "u1-fiziksel-kimyasal",
    soru: "Aşağıdakilerden hangisi kimyasal olaydır?",
    secenekler: ["Alüminyumun yanması", "Benzinin buharlaşması", "Suyun donması", "Şekerin çözünmesi"],
    dogru: 0,
    aciklama: "Yanmada alüminyum oksijenle tepkimeye girer ve yeni bir madde (Al₂O₃) oluşur. Buharlaşma, donma ve şekerin suda çözünmesi fiziksel olaylardır; maddenin kimliği değişmez." + ANAHTARSIZ,
  },
  {
    sira: 6, hafta: 1, konu: "km-ayirma", kavram: "u1-ayirma-yontemi",
    soru: "Homojen karışımların ayrılmasında aşağıdaki yöntemlerden hangisi kullanılır?",
    secenekler: ["Mıknatıs ile ayırma", "Kaynama noktası farkından ayırma", "Elektriklenme ile ayırma", "Süzme ile ayırma", "Çözünürlük farkı ile ayırma"],
    dogru: 1,
    aciklama: "Homojen karışımlarda (çözeltilerde) bileşenler gözle ayırt edilemez; süzme ya da mıknatısla ayrılamazlar. Alkol-su gibi sıvı çözeltiler, kaynama noktası farkından yararlanılarak damıtmayla ayrılır." + ANAHTARSIZ,
  },
  {
    sira: 7, hafta: 1, konu: "km-madde-karisim", kavram: "u1-karisim-ozellik", zorluk: 2,
    soru: "Aşağıdaki ifadelerden hangisi karışımların özelliklerindendir?",
    secenekler: [
      "Erime ve kaynama noktaları sabittir.",
      "Oluşumlarında ve bileşenlerine ayrılmalarında enerji değişimi az olur.",
      "Kimyasal yöntemlerle elementlerine ayrıştırılır.",
      "En az iki elementten oluşmuştur.",
      "Bir araya gelen elementler arasında belirli bir oran vardır.",
    ],
    dogru: 1,
    aciklama: "Karışım oluşurken kimyasal bağ kurulmaz; bu yüzden enerji değişimi azdır ve bileşenler fiziksel yöntemlerle ayrılır. Sabit erime noktası, belirli oran ve kimyasal ayrıştırma bileşiklerin özellikleridir." + ANAHTARSIZ,
  },
  {
    sira: 9, hafta: 5, konu: "km-periyodik-tablo", kavram: "u5-periyot-grup",
    soru: "Atom numarası 35 olan X elementi periyodik tablonun hangi periyot ve grubunda yer alır?",
    secenekler: ["5. periyot, 7A grubu", "4. periyot, 7A grubu", "5. periyot, 4A grubu", "4. periyot, 4A grubu", "3. periyot, 5A grubu"],
    dogru: 1,
    aciklama: "Elektron dizilimi $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^{10}\\,4p^5$'tir. En büyük baş kuantum sayısı 4 olduğundan 4. periyottadır; değerlik katmanında $4s^2\\,4p^5$ yani 7 elektron olduğundan 7A grubundadır (brom)." + ANAHTARSIZ,
  },
  {
    sira: 10, sabit: true, hafta: 1, konu: "km-ayirma", kavram: "u1-kristallendirme",
    soru: "İyi bir kristallendirme işlemi için aşağıdakilerden hangisi doğrudur?",
    secenekler: [
      "Uygun çözücüde ve sıcakta çözmek",
      "Sıcak süzme yapmak",
      "Soğuk süzme yapmak",
      "Elde edilen kristalleri uygun çözücüde yıkamak",
      "Hepsi",
    ],
    dogru: 4,
    aciklama: "Kristallendirmede katı uygun çözücüde sıcakta çözülür, çözünmeyen safsızlıklar sıcak süzmeyle ayrılır, çözelti soğutulup oluşan kristaller soğuk süzmeyle alınır ve az miktarda soğuk çözücüyle yıkanır. Hepsi işlemin adımlarıdır." + ANAHTARSIZ,
  },
  {
    sira: 11, hafta: 6, konu: "km-mol", kavram: "u6-mol-kutle", zorluk: 2,
    soru: "18 g C içeren etil alkol (C₂H₅OH) kaç gramdır? (H = 1, C = 12, O = 16 g/mol)",
    secenekler: ["33,0", "25,3", "34,5", "38,3", "40,4"],
    dogru: 2,
    aciklama: "18 g C = 18 / 12 = 1,5 mol C. Her C₂H₅OH molekülünde 2 C olduğundan 0,75 mol alkol vardır. Mol kütlesi 2·12 + 6·1 + 16 = 46 g/mol; kütle 0,75 · 46 = 34,5 g." + ANAHTARSIZ,
  },
  {
    sira: 12, hafta: 6, konu: "km-mol", kavram: "u6-mol-kutle", zorluk: 2,
    soru: "18 g C içeren etil alkolde (C₂H₅OH) kaç tane alkol molekülü vardır? (H = 1, C = 12, O = 16 g/mol)",
    secenekler: ["4,52 × 10²³", "4,15 × 10²²", "3,33 × 10²³", "5,62 × 10²¹"],
    dogru: 0,
    aciklama: "1,5 mol C, 0,75 mol C₂H₅OH demektir. Molekül sayısı 0,75 · 6,02 × 10²³ ≈ 4,52 × 10²³." + ANAHTARSIZ,
  },
  {
    sira: 13, hafta: 6, konu: "km-mol", kavram: "u6-mol-kutle", zorluk: 3,
    soru: "18 g C içeren etil alkolde (C₂H₅OH) toplam kaç tane atom vardır? (H = 1, C = 12, O = 16 g/mol)",
    secenekler: ["3,52 × 10²³", "3,83 × 10²³", "5,34 × 10²⁴", "4,06 × 10²⁴"],
    dogru: 3,
    aciklama: "Bir C₂H₅OH molekülünde 2 + 6 + 1 = 9 atom vardır. 0,75 mol alkolde 9 · 0,75 = 6,75 mol atom bulunur: 6,75 · 6,02 × 10²³ ≈ 4,06 × 10²⁴." + ANAHTARSIZ,
  },
  {
    sira: 15, sabit: true, hafta: 8, konu: "km-molekuller-arasi", kavram: "u8-hidrojen-bagi",
    soru: "Aşağıdakilerden hangisinde hidrojen bağı yoktur?",
    secenekler: ["H₂O", "NH₃", "HF", "CH₄", "Hiçbiri"],
    dogru: 3,
    aciklama: "Hidrojen bağı için H atomunun F, O ya da N'ye bağlı olması gerekir. CH₄'te H karbona bağlıdır." + ANAHTARSIZ,
  },
  {
    sira: 16, hafta: 7, konu: "km-molekul-geometrisi", kavram: "u7-hibritlesme",
    soru: "Aşağıdaki hibritleşmelerden hangisi düzgün dörtyüzlü (tetrahedral) geometri verir?",
    secenekler: ["sp", "sp²", "sp³", "dsp²", "dsp³"],
    dogru: 2,
    aciklama: "sp³ hibritleşmesinde dört eş orbital birbirinden en uzak duracak şekilde 109,5° açıyla yönelir: dörtyüzlü. sp doğrusal, sp² düzlem üçgen, dsp² kare düzlem, dsp³ üçgen çift piramit verir." + ANAHTARSIZ,
  },
  {
    sira: 17, sabit: true, hafta: 7, konu: "km-molekul-geometrisi", kavram: "u7-vsepr",
    soru: "NH₃ molekülünün geometrisi aşağıdakilerden hangisidir?",
    secenekler: ["Düzlem üçgen", "Kare düzlem", "Üçgen piramit", "Kare piramit", "Kırık doğru"],
    dogru: 2,
    aciklama: "Azotun üç bağ çifti ve bir ortaklanmamış çifti vardır (AX₃E). Elektron çiftleri dörtyüzlü dizilir, ama yalnız atomlara bakıldığında şekil üçgen piramittir; bağ açısı yaklaşık 107°'dir." + ANAHTARSIZ,
  },
  {
    sira: 19, sabit: true, hafta: 8, konu: "km-molekuller-arasi", kavram: "u8-etkilesim-turu",
    soru: "Aşağıdakilerden hangisi moleküller arası bir etkileşimdir?",
    secenekler: ["Metal bağı", "Kovalent bağ", "Hidrojen bağı", "İyonik bağ", "Hiçbiri"],
    dogru: 2,
    aciklama: "Metal, kovalent ve iyonik bağ atomlar ya da iyonlar arasındaki güçlü bağlardır. Hidrojen bağı ise ayrı moleküller arasında kurulan zayıf bir etkileşimdir." + ANAHTARSIZ,
  },
  {
    sira: 22, sabit: true, hafta: 9, konu: "km-korozyon", kavram: "u9-korozyon-turu",
    soru: "Aşağıdakilerden hangisi korozyon etkenlerindendir?",
    secenekler: ["Elektrokimyasal etkenler", "Fiziksel etkenler", "Çevresel etkenler", "Endüstriyel etkenler", "Hepsi"],
    dogru: 4,
    aciklama: "Korozyon; elektrokimyasal tepkimeler, sıcaklık ve gerilme gibi fiziksel koşullar, nem ve tuz gibi çevresel etkenler ile endüstriyel kirleticilerin birlikte etkisiyle oluşur." + ANAHTARSIZ,
  },
  {
    sira: 23, hafta: 9, konu: "km-korozyon", kavram: "u9-korozyon-turu", zorluk: 2,
    soru: "Toprak içinde tren, tramvay, metro gibi raylı taşıtların ve yer altı borularının bulunduğu yerlerde çok şiddetli ve hızlı korozyona yol açan korozyon çeşidi aşağıdakilerden hangisidir?",
    secenekler: ["Gerilmeli (stress) korozyon", "Pullanma (exfoliation) korozyonu", "Çukurcuk (pitting) korozyonu", "Kaçak akım korozyonu", "Galvanik (elektrokimyasal) korozyon"],
    dogru: 3,
    aciklama: "Raylı sistemlerin elektrik devresinden toprağa kaçan doğru akım, yer altındaki metal borulara girip çıktığı noktalarda boruyu anot yaparak hızla aşındırır. Buna kaçak akım korozyonu denir." + ANAHTARSIZ,
  },
  {
    sira: 24, hafta: 9, konu: "km-korozyon", kavram: "u9-korozyon-koruma",
    soru: "Aşağıdakilerden hangisi korozyondan korunma yöntemlerinden değildir?",
    secenekler: ["Uygun malzeme seçimi", "Katodik koruma", "Doğru tasarım", "Kaplamalar", "Eritme"],
    dogru: 4,
    aciklama: "Malzeme seçimi, katodik koruma, nem tutmayan doğru tasarım ve boya ya da metal kaplamalar korozyonu önler. Eritme bir şekillendirme işlemidir, korunma yöntemi değildir." + ANAHTARSIZ,
  },
  {
    sira: 25, hafta: 9, konu: "km-metal-ametal", kavram: "u9-ametal-ozellik", zorluk: 2,
    soru: "Aşağıdakilerden hangisi ametallerin kimyasal özelliklerindendir?",
    secenekler: [
      "Katı, sıvı ve gaz hâlinde bulunurlar.",
      "Isı ve elektriği iletmezler.",
      "Yoğunlukları düşüktür.",
      "Molekülleri çok atomludur.",
      "Tel ve levha hâline gelemezler.",
    ],
    dogru: 3,
    aciklama: "Fiziksel hâl, iletkenlik, yoğunluk ve işlenebilirlik fiziksel özelliklerdir. Ametallerin kendi aralarında kovalent bağ kurarak çok atomlu moleküller (O₂, P₄, S₈ gibi) oluşturması ise bağ yapmalarıyla ilgili, kimyasal bir özelliktir." + ANAHTARSIZ,
  },
]);
