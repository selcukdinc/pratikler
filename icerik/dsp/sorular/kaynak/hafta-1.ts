// 1. hafta: giriş, sinyaller ve istatistik
import { grupla, type Soru } from "./tipler.ts";

export const hafta1: Soru[] = [
  ...grupla(1, "dsp-giris", "dsp-giris", "Hafta 1, Giriş", [
    {
      id: "h1-dsp-avantaj", zorluk: 1, tip: "mcq",
      soru: "Aşağıdakilerden hangisi dijital sinyal işlemenin analog işlemeye göre bir üstünlüğü **değildir**?",
      secenekler: [
        "Yazılım değiştirilerek aynı donanım başka bir işlem yapabilir",
        "Hassasiyet bit sayısı artırılarak yükseltilebilir",
        "Sonuçlar sıcaklıkla ve bileşen yaşlanmasıyla kaymaz",
        "Her bant genişliğindeki sinyali gerçek zamanlı işleyebilir",
      ],
      dogru: 3,
      aciklama: "Çok geniş bantlı sinyalleri gerçek zamanlı işleyecek kadar hızlı dijital devre her zaman yoktur; bu durumda analog ya da optik işleme tek seçenek olabilir. Diğer üçü dijital işlemenin bilinen üstünlükleridir.",
    },
    {
      id: "h1-dsp-genis-bant", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Bant genişliği çok geniş olan bazı sinyallerin gerçek zamanlı işlenmesinde analog ya da optik sinyal işleme tek uygun çözüm olabilir.",
      dogru: true,
      aciklama: "Doğru. DSP her soruna çözüm değildir; dijital devreler yeterince hızlı değilse geniş bantlı sinyaller analog ya da optik olarak işlenir.",
    },
    {
      id: "h1-dsp-programlanabilir", zorluk: 1, tip: "fill",
      soru: "Dijital işleme donanımında yapılan işlem yazılımla değiştirilebildiği için dijital donanıma ____ denir.",
      bosluklar: [["programlanabilir", "programlanabilir donanım"]],
      aciklama: "Dijital donanım programlanabilirdir: filtreyi değiştirmek için devreyi yeniden kurmak yerine programı değiştirmek yeter. Bu, tasarıma esneklik katar.",
    },
  ]),

  ...grupla(1, "dsp-giris", "adc-niceleme", "Hafta 1, Sürekli ve ayrık sinyaller", [
    {
      id: "h1-adc-seviye", zorluk: 1, tip: "num",
      soru: "10 bitlik bir analogdan dijitale dönüştürücü gerilimi kaç farklı seviyeden birine yuvarlar?",
      bosluklar: [["1024"]],
      aciklama: "B bitlik ADC'de seviye sayısı $2^B$'dir: $2^{10} = 1024$.",
    },
    {
      id: "h1-adc-aralik", zorluk: 1, tip: "num",
      soru: "Saniyede 8000 örnek alan bir ADC'de ardışık iki örnek arasındaki süre kaç milisaniyedir?",
      bosluklar: [["0.125"]],
      aciklama: "$T_s = 1/f_s = 1/8000$ s = 0,125 ms.",
    },
    {
      id: "h1-adc-adim", zorluk: 2, tip: "num",
      soru: "0–5 V aralığında çalışan 8 bitlik bir ADC'nin niceleme adımı yaklaşık kaç **mV**'tur? (adım = aralık / seviye sayısı)",
      bosluklar: [["19.53±0.05"]],
      aciklama: "8 bit $2^8 = 256$ seviye verir. Adım 5 V / 256 ≈ 0,01953 V ≈ 19,53 mV.",
    },
    {
      id: "h1-adc-bit-gerekli", zorluk: 2, tip: "num",
      soru: "Bir ölçme aralığını en az 1000 seviyeye bölmek için ADC'nin en az kaç biti olmalıdır?",
      bosluklar: [["10"]],
      aciklama: "$2^9 = 512$ yetmez, $2^{10} = 1024 \\ge 1000$. En az 10 bit gerekir.",
    },
    {
      id: "h1-ayrik-tanim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Bir sinyal ADC'den geçirilince hangi parametreleri nicelenir?",
      secenekler: [
        "Yalnızca genliği",
        "Yalnızca zamanı",
        "Hem zamanı hem genliği",
        "Yalnızca frekansı",
      ],
      dogru: 2,
      aciklama: "ADC zamanı örnekleme hızıyla ($T_s = 1/f_s$ adımlarla), genliği bit sayısıyla ($2^B$ seviye) niceler. İkisi de nicelenmiş sinyale ayrık sinyal denir.",
    },
  ]),

  ...grupla(1, "dsp-giris", "sinyal-eksen", "Hafta 1, Sinyal grafiği ve alan", [
    {
      id: "h1-eksen-bagimli", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Bir sinyal grafiğinde **dikey** eksen için kullanılan adlardan hangisi değildir?",
      secenekler: ["Genlik", "Ordinat", "Bağımlı değişken", "Apsis"],
      dogru: 3,
      aciklama: "Apsis yatay eksenin adıdır (x ekseni, bağımsız değişken). Dikey eksene genlik, y ekseni, bağımlı değişken ya da ordinat denir.",
    },
    {
      id: "h1-alan-ornek", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Yatay ekseni yalnızca \"örnek numarası\" diye etiketlenmiş bir sinyal ____ alanında sayılır.",
      bosluklar: [["zaman"]],
      aciklama: "Sinyal elde etmenin en yaygın yolu eşit zaman aralıklarıyla örneklemek olduğu için örnek numarasıyla çizilen sinyaller zaman alanındadır.",
    },
    {
      id: "h1-alan-uzaysal", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Bir jeofizikçi yeryüzü boyunca her 10 metrede bir kaya yoğunluğu ölçüyor. Bu ölçümlerden oluşan sinyal hangi alandadır?",
      secenekler: ["Zaman alanı", "Frekans alanı", "Uzaysal alan", "Genlik alanı"],
      dogru: 2,
      aciklama: "Bağımsız değişken mesafedir; mesafe uzayın bir ölçüsü olduğu için sinyal uzaysal alandadır.",
    },
  ]),

  ...grupla(1, "istatistik", "ortalama-sapma", "Hafta 1, Ortalama ve standart sapma", [
    {
      id: "h1-ortalama-hesap", zorluk: 1, tip: "num",
      soru: "x = [2 6 4 8] sinyalinin ortalamasını ve (N − 1'li) standart sapmasını bul.\n\nμ = ____ , σ = ____",
      bosluklar: [["5"], ["2.582±0.005"]],
      aciklama: "μ = 20/4 = 5. Sapmalar −3, 1, −1, 3; kareleri toplamı 20. σ² = 20/3 ≈ 6,67, σ ≈ 2,582.",
    },
    {
      id: "h1-n-eksi-1", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Bir sinyalin bir parçasından standart sapma hesaplarken neden N yerine N − 1'e bölünür?",
      secenekler: [
        "Ortalama veriden hesaplandığı için sapmalar küçük çıkar",
        "İlk örnek her zaman hatalı olduğu için hesaba katılmaz",
        "N − 1'e bölmek sonucu her zaman tam sayı yapar",
        "Son örnek ortalamaya eşit olduğu için sapması sıfırdır",
      ],
      dogru: 0,
      aciklama: "Örnek ortalaması verinin kendisinden hesaplanır ve verilere gerçek ortalamadan daha yakındır; bu yüzden sapmaların kareleri olduğundan küçük çıkar. N − 1'e bölmek bu eğilimi düzeltir. Bütün popülasyon biliniyorsa N'ye bölünür.",
    },
    {
      id: "h1-varyans", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Standart sapmanın karesine, yani σ² niceliğine ____ denir.",
      bosluklar: [["varyans"]],
      aciklama: "σ² varyanstır ve sinyalin dalgalanmasının gücünü temsil eder.",
    },
    {
      id: "h1-dc-ac", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Bir sinyalin standart sapması, sinyalin DC bileşenini de içerir.",
      dogru: false,
      aciklama: "Yanlış. Standart sapma örneklerin ortalamadan sapmasını ölçer, yani yalnızca AC kısmı ölçer. DC'yi de içeren ölçü rms'tir.",
    },
    {
      id: "h1-varyans-toplam", zorluk: 2, tip: "num",
      soru: "Bir sinyale birbirinden bağımsız iki gürültü biniyor: σ₁ = 3 mV ve σ₂ = 4 mV. Toplam gürültünün standart sapması kaç mV'tur?",
      bosluklar: [["5"]],
      aciklama: "Bağımsız kaynaklarda varyanslar toplanır: σ² = 9 + 16 = 25, σ = 5 mV. Standart sapmalar toplanmaz (7 değil).",
    },
  ]),

  ...grupla(1, "istatistik", "rms", "Hafta 1, rms ve dalga biçimleri", [
    {
      id: "h1-rms-dc", zorluk: 2, tip: "num",
      soru: "Bir sinyal 3 V'luk DC ile standart sapması 4 V olan bir AC bileşenin toplamı. Örnek sayısı çok büyükken sinyalin rms değeri kaç volttur?",
      bosluklar: [["5"]],
      aciklama: "$x_{rms}^2 = \\mu^2 + \\sigma^2 = 9 + 16 = 25$, rms = 5 V. rms hem DC'yi hem AC'yi ölçer.",
    },
    {
      id: "h1-sinus-vrms", kaynak: "original", zorluk: 1, tip: "num",
      soru: "Tepe genliği 10 V olan, DC'siz bir sinüs dalganın rms değeri kaç volttur?",
      bosluklar: [["7.071±0.01"]],
      aciklama: "$V_{rms} = V_p/\\sqrt{2} = 10/1{,}414 \\approx 7{,}07$ V.",
    },
    {
      id: "h1-vpp-kare", kaynak: "original", zorluk: 1, tip: "num",
      soru: "Ortalaması sıfır olan bir kare dalganın standart sapması 1,5 V. Tepeden tepeye değeri kaç volttur?",
      bosluklar: [["3"]],
      aciklama: "Kare dalgada her örnek ortalamadan tam yarım Vpp uzaktadır, bu yüzden $V_{pp} = 2\\sigma = 3$ V.",
    },
    {
      id: "h1-vpp-gurultu", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Standart sapması 0,1 V olan Gauss gürültünün osiloskopta görülen tepeden tepeye değeri kabaca ne kadardır?",
      secenekler: ["0,2 V", "0,28 V", "0,6–0,8 V", "1,5–2 V"],
      dogru: 2,
      aciklama: "Rastgele gürültünün belirli bir tepe değeri yoktur; gözle görülen Vpp kabaca 6σ ile 8σ arasındadır: 0,6–0,8 V. 0,2 V kare dalganın, 0,28 V sinüsün oranıdır.",
    },
    {
      id: "h1-rms-sigma-esit", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "DC bileşeni olmayan bir sinyalin rms değeri standart sapmasına eşittir.",
      dogru: true,
      aciklama: "Doğru. $x_{rms}^2 = \\mu^2 + \\sigma^2$ ve μ = 0 ise rms = σ olur.",
    },
  ]),

  ...grupla(1, "olasilik", "histogram-pmf", "Hafta 1, Histogram, pmf ve pdf", [
    {
      id: "h1-hist-ortalama", zorluk: 2, tip: "num",
      soru: "Bir sinyalin histogramında değer 0'dan 2, değer 1'den 5, değer 2'den 3 örnek var; başka değer yok. Histogramdan sinyalin ortalamasını bul.",
      bosluklar: [["1.1"]],
      aciklama: "N = 2 + 5 + 3 = 10. μ = (0·2 + 1·5 + 2·3) / 10 = 11/10 = 1,1.",
    },
    {
      id: "h1-hist-toplam", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Bir sinyalin histogramındaki bütün değerlerin toplamı sinyaldeki ____ sayısına eşittir.",
      bosluklar: [["örnek", "ornek", "numune"]],
      aciklama: "Her örnek histogramda tam bir kez sayılır, bu yüzden $\\sum H_i = N$.",
    },
    {
      id: "h1-pmf-olasilik", zorluk: 2, tip: "num",
      soru: "Değerleri 0, 1, 2, 3, 4 olabilen bir sinyalin pmf'i sırasıyla [0.1 0.2 0.4 0.2 0.1]. Rastgele bir örneğin 2'den büyük olma olasılığı nedir?",
      bosluklar: [["0.3"]],
      aciklama: "2'den büyük değerler 3 ve 4'tür: 0,2 + 0,1 = 0,3. Bir aralığın olasılığı için o aralıktaki pmf değerleri toplanır.",
    },
    {
      id: "h1-pdf-alan", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Sürekli bir sinyalin pdf'i verildiğinde sinyalin a ile b arasında olma olasılığı nasıl bulunur?",
      secenekler: [
        "pdf'in a ile b arasında kalan alanı alınır",
        "pdf'in a noktasındaki değeri okunur",
        "pdf'in a ile b noktalarındaki değerleri çarpılır",
        "pdf'in en büyük değeri b − a ile bölünür",
      ],
      dogru: 0,
      aciklama: "pdf'in dikey ekseni olasılık değil olasılık yoğunluğudur. Bir aralığın olasılığı eğrinin o aralıkta altında kalan alandır; toplam alan 1'dir.",
    },
    {
      id: "h1-binning", kaynak: "original", zorluk: 2, tip: "num",
      soru: "0,0 ile 10,0 arasında değer alan kayan noktalı bir sinyal 1000 kutulu bir histogramla sayılıyor (kutu 0: 0–0,01). 7,2049 değerindeki bir örnek kaçıncı kutuya düşer?",
      bosluklar: [["720"]],
      aciklama: "Kutu genişliği 10 / 1000 = 0,01. 7,2049 / 0,01 = 720,49; aşağı yuvarlanınca kutu 720.",
    },
    {
      id: "h1-kutu-alt-sinir", kaynak: "original", zorluk: 2, tip: "num",
      soru: "5 ile 15 arasında değer alan kayan noktalı bir sinyal 500 kutulu bir histogramla sayılıyor (kutu 0: 5–5,02). 9,137 değerindeki bir örnek kaçıncı kutuya düşer?",
      bosluklar: [["206"]],
      aciklama: "w = (15 − 5) / 500 = 0,02. Önce alt sınır çıkarılır: (9,137 − 5) / 0,02 = 206,85; aşağı yuvarlanınca kutu 206.",
    },
    {
      id: "h1-kutu-yogunluk", kaynak: "original", zorluk: 2, tip: "num",
      soru: "N = 2000 örnekli bir sinyalin histogramında kutu genişliği 0,05. Bir kutuda 150 örnek var. Bu kutunun pdf yaklaşımı (yoğunluk) kaçtır?",
      bosluklar: [["1.5"]],
      aciklama: "pₖ = Hₖ / (N·w) = 150 / (2000 · 0,05) = 150 / 100 = 1,5. Yoğunluk 1'den büyük olabilir; çubuğun alanı 1,5 · 0,05 = 0,075'tir.",
    },
    {
      id: "h1-kutu-sayisi", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Az örnekli bir sinyalin histogramında kutu sayısı çok büyük seçilirse ne olur?",
      secenekler: [
        "Kutuların çoğu boş kalır, histogram pürüzlenir",
        "Birbirine yakın tepeler tek yığına karışır",
        "Kutulardaki sayıların toplamı N'yi aşar",
        "Kutu genişliği büyür, ayrıntı kaybolur",
      ],
      dogru: 0,
      aciklama: "Kutu başına ortalama N / M örnek düşer. M büyüyünce bu sayı küçülür: çoğu kutu boş kalır ya da birkaç örnek alır. Tepelerin karışması az kutunun sonucudur; toplam her zaman N'dir.",
    },
    {
      id: "h1-hist-puruz", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Bir histogramı çıkarırken kullanılan örnek sayısı 4 katına çıkarılırsa histogramın pürüzlülüğü (istatistiksel gürültüsü) ne olur?",
      secenekler: ["Değişmez", "Yarıya iner", "Dörtte birine iner", "İki katına çıkar"],
      dogru: 1,
      aciklama: "Pürüzlülük örnek sayısının kareköküyle ters orantılıdır: √4 = 2, yani yarıya iner.",
    },
  ]),

  ...grupla(1, "olasilik", "normal-dagilim", "Hafta 1, Normal dağılım", [
    {
      id: "h1-gauss-68", kaynak: "original", zorluk: 1, tip: "num",
      soru: "Normal dağılımlı bir sinyalin örneklerinin yaklaşık yüzde kaçı μ − σ ile μ + σ arasındadır?",
      bosluklar: [["68±1"]],
      aciklama: "Yaklaşık %68'i ±1σ, %95'i ±2σ, %99,7'si ±3σ içindedir.",
    },
    {
      id: "h1-gauss-uc-sigma", zorluk: 2, tip: "mcq",
      soru: "Bir ADC'nin okuduğu değerler μ = 100, σ = 5 olan normal dağılıma uyuyor. Okumaların yaklaşık %99,7'si hangi aralıktadır?",
      secenekler: ["95 – 105", "90 – 110", "85 – 115", "80 – 120"],
      dogru: 2,
      aciklama: "%99,7 aralığı μ ± 3σ'dır: 100 ± 15, yani 85 ile 115 arası.",
    },
    {
      id: "h1-gauss-tepe", zorluk: 3, tip: "num",
      soru: "μ = 0, σ = 2 olan normal dağılımın pdf'inin tepe değeri (x = 0'daki değeri) nedir?",
      bosluklar: [["0.1995±0.001"]],
      aciklama: "Tepe $1/(\\sqrt{2\\pi}\\,\\sigma) = 1/(2{,}5066 \\cdot 2) \\approx 0{,}1995$.",
    },
    {
      id: "h1-merkezi-limit", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Birçok rastgele sayı toplandığında, sayılar hangi dağılımdan gelirse gelsin toplamın normal dağılıma yaklaştığını söyleyen teoreme ____ limit teoremi denir.",
      bosluklar: [["merkezi", "merkezî"]],
      aciklama: "Merkezi limit teoremi, doğadaki rastgele sinyallerin çoğunun neden Gauss biçimli olduğunu açıklar.",
    },
    {
      id: "h1-gauss-sigma-tepe", zorluk: 2, tip: "tf",
      soru: "Normal dağılımda σ iki katına çıkarılırsa pdf eğrisinin tepe yüksekliği yarıya iner.",
      dogru: true,
      aciklama: "Doğru. Tepe yüksekliği $1/(\\sqrt{2\\pi}\\,\\sigma)$'dır, σ ile ters orantılıdır. Eğri yayılırken alan 1'de kalsın diye alçalır.",
    },
  ]),

  ...grupla(1, "gurultu-dogruluk", "gurultu-uretimi", "Hafta 1, Rastgele sayılarla gürültü", [
    {
      id: "h1-rnd-sigma", kaynak: "original", zorluk: 2, tip: "num",
      soru: "0 ile 1 arasında düzgün dağılımlı bir rastgele sayı üretecinin (RND) standart sapması nedir?",
      bosluklar: [["0.2887±0.002", "0.29±0.005"]],
      aciklama: "Düzgün dağılımın standart sapması $1/\\sqrt{12} \\approx 0{,}289$'dur; ortalaması 0,5'tir.",
    },
    {
      id: "h1-rnd-12", kaynak: "original", zorluk: 2, tip: "num",
      soru: "12 RND'nin toplamından ortalaması 2, standart sapması 0,5 olan bir Gauss gürültü örneği üretiliyor. Toplam 8,0 çıktıysa üretilen örnek kaçtır?",
      bosluklar: [["3"]],
      aciklama: "x = (toplam − 6) · σ + μ = (8 − 6) · 0,5 + 2 = 3. On iki RND'nin toplamının ortalaması 6, standart sapması 1'dir.",
    },
    {
      id: "h1-rnd-iki", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "İki RND'nin (0–1 arası düzgün) toplamının pdf'i hangi biçimdedir?",
      secenekler: ["Düzgün", "Üçgen", "Gauss", "Kare"],
      dogru: 1,
      aciklama: "Toplam 0 ile 2 arasındadır; 1 civarını veren birleşimler çok, uçları veren birleşimler azdır. pdf üçgendir, ortalaması 1, standart sapması 1/√6 ≈ 0,41.",
    },
  ]),

  ...grupla(1, "gurultu-dogruluk", "kesinlik-dogruluk", "Hafta 1, Kesinlik ve doğruluk", [
    {
      id: "h1-kesinlik", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "1000 m'deki bir hedefe yapılan sonar ölçümleri 990 m ile 1010 m arasında geniş saçılıyor ama ortalamaları 1000,1 m. Sistem için ne söylenir?",
      secenekler: [
        "Doğruluk iyi, kesinlik kötü",
        "Kesinlik iyi, doğruluk kötü",
        "İkisi de iyi",
        "İkisi de kötü",
      ],
      dogru: 0,
      aciklama: "Ortalama gerçek değere çok yakın: doğruluk iyi. Ölçümler birbirinden uzak (σ büyük): kesinlik kötü. Çaresi çok ölçümün ortalamasını almaktır.",
    },
    {
      id: "h1-ortalama-iyilestirir", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Çok sayıda ölçümün ortalamasını almak, bir ölçüm sistemindeki sistematik hatayı (doğruluk hatasını) giderir.",
      dogru: false,
      aciklama: "Yanlış. Ortalama almak rastgele hatayı (kesinliği) iyileştirir; sistematik hata her ölçümde aynı olduğu için ortalamada aynen kalır. Onun çaresi kalibrasyondur.",
    },
    {
      id: "h1-kalibrasyon", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Doğruluğu kötü, yani sistematik hatası olan bir ölçüm sisteminin çaresi ____ yapmaktır.",
      bosluklar: [["kalibrasyon"]],
      aciklama: "Sistematik hata kalibrasyonla giderilir; rastgele hata ise ortalama alarak azaltılır.",
    },
  ]),
];
