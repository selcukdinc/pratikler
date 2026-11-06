// 7. ünite (Fourier Dönüşümü sunumu): ortam ve dönüşüm, Fourier serisi,
// Dirichlet koşulları, Fourier dönüşümü ve spektrumlar, DFT/FFT, tek taraflı
// spektrum örneği, görüntünün 2B Fourier dönüşümü.

import { sunum, type Soru } from "./yardimci.ts";

const U = 7;

export const unite7: Soru[] = [
  ...sunum(U, "u7-ortam", [
    {
      id: "bm-u7-ortam", tip: "mcq", zorluk: 1,
      soru: "Gözlenen fiziksel değişim uzunluğun bir fonksiyonu ise hangi ortamda tanımlanmıştır?",
      secenekler: ["Uzaklık ortamı (space domain)", "Zaman ortamı (time domain)", "Frekans ortamı (frequency domain)", "Ölçek ortamı (scale domain)"],
      dogru: 0,
      aciklama: "Zamanın fonksiyonu zaman ortamında, **uzunluğun fonksiyonu uzaklık ortamında**, frekansa bağlıysa frekans ortamında tanımlanır.",
    },
    {
      id: "bm-u7-prizma", tip: "tf", zorluk: 1,
      soru: "Prizma benzetmesinde beyaz ışık ile prizmadan çıkan renkler aynı bilgiyi taşır; yalnızca olaya bakış açısı farklıdır.",
      dogru: true,
      aciklama: "Doğru. Renkler (spektrum) birleştirilince yeniden beyaz ışık elde edilir; dönüşüm bilgiyi değiştirmez, başka biçimde gösterir.",
    },
    {
      id: "bm-u7-geri", tip: "tf", zorluk: 1,
      soru: "Sunuma göre iyi bir dönüşüm yönteminin geri dönüşümü de olmalıdır.",
      dogru: true,
      aciklama: "Doğru. İşlem yapılan sinyal gerektiğinde başlangıçtaki ortama geri dönüştürülebilmelidir.",
    },
    {
      id: "bm-u7-donusum-ornek", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi sunumda dönüşüm yöntemlerine örnek olarak sayılmaz?",
      secenekler: ["Min-max dönüşümü", "Laplace dönüşümü", "Hilbert dönüşümü", "Z dönüşümü", "Hankel dönüşümü"],
      dogru: 0,
      aciklama: "Sunumdaki örnekler Fourier, **Laplace, Hankel, Hilbert ve Z** dönüşümleridir. Min-max bir ölçekleme (normalizasyon) yöntemidir.",
    },
  ]),

  ...sunum(U, "u7-seri", [
    {
      id: "bm-u7-harmonik", tip: "fill", zorluk: 1,
      soru: "Verilen bir $f(t)$ fonksiyonunun Fourier serisine açılmasına ____ analiz denir.",
      bosluklar: [["harmonik"]],
      aciklama: "Fourier serisine açılım **harmonik analiz** olarak adlandırılır.",
    },
    {
      id: "bm-u7-dirichlet", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi Dirichlet koşullarından biri değildir?",
      secenekler: [
        "Fonksiyon bir periyotta sonsuz sayıda maksimum içerebilir",
        "Fonksiyon en azından parçalı süreklidir, süreksizlik sayısı sınırlıdır",
        "Bir periyot içindeki maksimum ve minimum sayısı sonludur",
        "Fonksiyon bir periyot aralığında sonludur",
      ],
      dogru: 0,
      aciklama: "Dirichlet koşulları: parçalı süreklilik ve sınırlı süreksizlik, bir periyotta **sonlu sayıda** maksimum ve minimum, bir periyotta sonlu olma.",
    },
    {
      id: "bm-u7-sonsuz-terim", tip: "tf", zorluk: 2,
      soru: "Bir $f(t)$ fonksiyonu, Fourier serisinde yalnızca sonsuz sayıda terim alındığında tam olarak gösterilebilir.",
      dogru: true,
      aciklama: "Doğru. Sonlu sayıda terim fonksiyona yalnızca yaklaşır.",
    },
    {
      id: "bm-u7-euler", tip: "mcq", zorluk: 2,
      soru: "Fourier serisinin karmaşık biçiminde trigonometrik ifadeler yerine hangi özdeşlikler kullanılır?",
      secenekler: ["Euler formülü", "Parseval eşitliği", "Bayes kuralı", "Pisagor bağıntısı"],
      dogru: 0,
      aciklama: "Sinüs ve kosinüsler **Euler formülü** ile karmaşık üstellerle yazılır ($e^{j\\omega t} = \\cos \\omega t + j \\sin \\omega t$).",
    },
  ]),

  ...sunum(U, "u7-donusum", [
    {
      id: "bm-u7-periyodik-degil", tip: "mcq", zorluk: 2,
      soru: "Bir kez olup tekrarlanmayan, periyodik olmayan sinyallerin frekans içeriği hangi araçla bulunur?",
      secenekler: ["Fourier integrali (Fourier dönüşümü)", "Fourier serisi (harmonik analiz)", "Min-max normalizasyonu (ölçekleme)", "Medyan filtresi (sıralama)"],
      dogru: 0,
      aciklama: "Fourier serisi periyodik fonksiyonlar içindir. Periyodik olmayan sinyallerde veri sonsuzda periyodikmiş gibi düşünülür ve **Fourier integrali** kullanılır.",
    },
    {
      id: "bm-u7-cift", tip: "tf", zorluk: 1,
      soru: "$f(t)$ ile onun Fourier dönüşümü $F(\\omega)$'ya birlikte Fourier çifti denir.",
      dogru: true,
      aciklama: "Doğru. İlk bağıntı Fourier dönüşümü, ikincisi ters Fourier dönüşümüdür.",
    },
    {
      id: "bm-u7-genlik", tip: "mcq", zorluk: 2,
      soru: "$F(\\omega) = a(\\omega) + i\\,b(\\omega)$ ise genlik spektrumu $|F(\\omega)|$ nasıl hesaplanır?",
      secenekler: ["$\\sqrt{a^2 + b^2}$", "$a + b$", "$\\arctan(b/a)$", "$a^2 - b^2$"],
      dogru: 0,
      aciklama: "Genlik $|F(\\omega)| = \\sqrt{a(\\omega)^2 + b(\\omega)^2}$, faz $\\phi(\\omega) = \\arctan(b/a)$'dır.",
    },
    {
      id: "bm-u7-genlik-hesap", tip: "num", zorluk: 2,
      soru: "Bir frekanstaki Fourier katsayısı $F = 3 + 4i$ ise o frekanstaki genlik $|F|$ kaçtır?",
      bosluklar: [["5"]],
      aciklama: "$|F| = \\sqrt{3^2 + 4^2} = 5$.",
    },
    {
      id: "bm-u7-faz", tip: "mcq", zorluk: 2,
      soru: "Faz spektrumu $\\phi(\\omega)$ neyi gösterir?",
      secenekler: [
        "O frekanstaki dalganın zaman eksenine göre kaymasını",
        "O frekanstaki dalganın ne kadar güçlü olduğunu",
        "Sinyalin toplam enerjisini",
        "Örnekleme frekansını",
      ],
      dogru: 0,
      aciklama: "Genlik bileşenin büyüklüğünü, **faz** ise dalganın zaman eksenine göre kaymasını (başlangıç açısını) gösterir.",
    },
    {
      id: "bm-u7-omega", tip: "mcq", zorluk: 1,
      soru: "Açısal frekans $\\omega$ ile frekans $f$ arasındaki bağıntı hangisidir?",
      secenekler: ["$\\omega = 2\\pi f$", "$\\omega = f/2\\pi$", "$\\omega = \\pi f$", "$\\omega = 1/f$"],
      dogru: 0,
      aciklama: "$\\omega = 2\\pi f$ ve $d\\omega = 2\\pi\\,df$.",
    },
    {
      id: "bm-u7-dogrusal", tip: "tf", zorluk: 2,
      soru: "Fourier dönüşümü doğrusal bir işlemdir; ortamlardan birinde yapılan bir işlemin diğer ortamda mutlaka bir karşılığı vardır.",
      dogru: true,
      aciklama: "Doğru. Bilginin iki ortamdaki anlatımı eşit kesinliktedir, ama bazı işlemler bir ortamda daha kolaydır.",
    },
  ]),

  ...sunum(U, "u7-enerji", [
    {
      id: "bm-u7-enerji-yog", tip: "mcq", zorluk: 2,
      soru: "$|F(f)|^2$ niceliğine ne ad verilir?",
      secenekler: ["Enerji yoğunluğu spektrumu", "Faz spektrumu", "Genlik spektrumu", "Ters Fourier dönüşümü"],
      dogru: 0,
      aciklama: "$|F(f)|^2$ birim frekanstaki enerjidir: **enerji yoğunluğu spektrumu**, yaygın adıyla güç spektrumu.",
    },
    {
      id: "bm-u7-psd-ozilinti", tip: "tf", zorluk: 3,
      soru: "Güç yoğunluğu spektrumu, zaman dizisinin öz ilişki (otokorelasyon) fonksiyonunun Fourier dönüşümüne eşdeğerdir.",
      dogru: true,
      aciklama: "Doğru. Genliklerin karelerinin frekansa göre gösterimi güç yoğunluğu spektrumudur.",
    },
    {
      id: "bm-u7-tek-frekans", tip: "tf", zorluk: 3,
      soru: "Sunuma göre gerçekte tek bir frekanstaki enerji sıfırdır; $|F(f)|^2$ birim frekans başına enerjiyi verir.",
      dogru: true,
      aciklama: "Doğru. Bu yüzden ona enerji **yoğunluğu** denir; birimi V²·s/Hz'dir.",
    },
  ]),

  ...sunum(U, "u7-dft", [
    {
      id: "bm-u7-fft-neden", tip: "mcq", zorluk: 1,
      soru: "FFT'nin DFT'ye göre başlıca üstünlüğü nedir?",
      secenekler: ["Aynı sonucu çok daha hızlı hesaplar", "Periyodik olmayan sinyallerde de çalışır", "Faz bilgisini atarak yalnızca genliği verir", "Görüntüde kenarları korur"],
      dogru: 0,
      aciklama: "FFT, DFT'yi **verimli (hızlı) hesaplayan** algoritmaların ortak adıdır; DFT eleman sayısı çok olduğunda yavaştır.",
    },
    {
      id: "bm-u7-fft-2kuvvet", tip: "tf", zorluk: 2,
      soru: "Sunuma göre FFT uygulanacak dizinin eleman sayısının 2'nin kuvveti olmasına dikkat edilmelidir.",
      dogru: true,
      aciklama: "Doğru. Klasik FFT algoritmaları en verimli $N = 2^k$ uzunlukta çalışır.",
    },
    {
      id: "bm-u7-dft-ornek", tip: "mcq", zorluk: 2,
      soru: "N noktalı DFT neye karşılık gelir?",
      secenekler: ["Fourier dönüşümünün eşit aralıklı N frekanstaki örneklerine", "Sinyalin N kez ötelenmiş kopyalarının toplamına", "Sinyalin N seviyeli dalgacık ayrıştırmasına", "Sinyalin ilk N örneğinin aritmetik ortalamasına"],
      dogru: 0,
      aciklama: "DFT, Fourier dönüşümünün **eşit aralıklı N frekanstaki örnekleridir**; bu frekanslar z-düzleminde birim çember üzerindedir.",
    },
    {
      id: "bm-u7-dft-sonlu", tip: "tf", zorluk: 2,
      soru: "Ayrık zaman Fourier dönüşümü sürekli bir $\\omega$ değişkeninin fonksiyonu olduğu için bilgisayarda doğrudan hesaplanamaz; DFT bu sorunu sınırlı sayıda frekans noktası kullanarak giderir.",
      dogru: true,
      aciklama: "Doğru. MATLAB gibi ortamlarda diziler sınırlandırılır ve sınırlı sayıda noktada değerlendirilir.",
    },
  ]),

  ...sunum(U, "u7-spektrum", [
    {
      id: "bm-u7-tek-taraf", tip: "mcq", zorluk: 3,
      soru: "Sunumdaki örnekte L = 1000 noktalı FFT'den tek taraflı genlik spektrumu P1 elde edilirken neden P1'in uçları dışındaki değerler 2 ile çarpılır?",
      secenekler: [
        "Negatif frekanslardaki yarı pozitif tarafa eklensin diye",
        "Gürültünün etkisi yarı yarıya azaltılsın diye",
        "Örnekleme frekansı iki katına çıkarılsın diye",
        "Faz spektrumu da genliğe eklenmiş olsun diye",
      ],
      dogru: 0,
      aciklama: "Gerçel bir sinyalin iki taraflı spektrumunda her bileşenin genliği pozitif ve negatif frekanslara yarı yarıya bölünür. Tek taraflı spektrumda **negatif yarı pozitife eklenir**; 0 Hz ve Nyquist frekansında eşi olmadığı için çarpılmaz.",
    },
    {
      id: "bm-u7-tepe", tip: "mcq", zorluk: 2,
      soru: "$S = 0{,}7\\sin(2\\pi \\cdot 50 t) + \\sin(2\\pi \\cdot 120 t)$ sinyalinin tek taraflı genlik spektrumunda hangi tepeler görülür?",
      secenekler: ["50 Hz'de 0,7 ve 120 Hz'de 1", "50 Hz'de 1 ve 120 Hz'de 0,7", "70 Hz'de 1,7", "0 Hz'de 1,7"],
      dogru: 0,
      aciklama: "Her sinüs kendi frekansında genliği kadar bir tepe verir: **50 Hz'de 0,7, 120 Hz'de 1**. Gürültü eklenince tepeler tam bu değerlerde çıkmaz.",
    },
    {
      id: "bm-u7-cozunurluk", tip: "num", zorluk: 2,
      soru: "Örnekleme frekansı $F_s = 1000$ Hz ve sinyal uzunluğu L = 1000 örnek ise FFT'nin frekans adımı ($F_s / L$) kaç Hz'dir?",
      bosluklar: [["1"]],
      aciklama: "$f = F_s (0 : L/2)/L$; ardışık frekanslar arası $1000/1000 = 1$ Hz'dir.",
    },
    {
      id: "bm-u7-supurge", tip: "tf", zorluk: 2,
      soru: "Sunumdaki elektrikli süpürge örneğinde FFT'de 5445 Hz'de görülen büyük tepe fan kanadı geçişinden kaynaklanır; düzensiz aralıklı kanatlar tek bir saf ton yerine daha düşük genlikli, yayılmış tonlar üretir.",
      dogru: true,
      aciklama: "Doğru. Eşit aralıklı kanatlar tek bir saf ton üretir; aralıklar düzensizleşince enerji geniş bir frekans aralığına dağılır.",
    },
  ]),

  ...sunum(U, "u7-goruntu", [
    {
      id: "bm-u7-kenar-yuksek", tip: "mcq", zorluk: 1,
      soru: "Bir görüntüde keskin kenarlar, ince dokular ve ani parlaklık değişimleri spektrumun hangi bölgesindedir?",
      secenekler: ["Yüksek frekanslarda, merkezden uzakta", "Düşük frekanslarda, merkezde", "Yalnızca sıfır frekansında", "Faz spektrumunun merkezinde"],
      dogru: 0,
      aciklama: "Keskin değişimler **yüksek frekanslardır** ve merkezin dışına doğru yer alır. Yumuşak geçişler ve geniş alanlar merkezdeki düşük frekanslardadır.",
    },
    {
      id: "bm-u7-dikey-cizgi", tip: "mcq", zorluk: 2,
      soru: "Dikey çizgilerden oluşan bir görüntünün 2B spektrumunda merkez dışındaki belirgin tepe çiftleri hangi eksen boyunca görülür?",
      secenekler: ["Yatay eksen boyunca", "Dikey eksen boyunca", "Köşegen boyunca", "Spektrumun her yerine eşit dağılmış"],
      dogru: 0,
      aciklama: "Dikey çizgilerde parlaklık **x yönünde** periyodik değişir; bu yüzden tepeler **yatay eksen** üzerinde çıkar.",
    },
    {
      id: "bm-u7-tek-piksel", tip: "tf", zorluk: 2,
      soru: "Tek bir parlak pikselden (ideal darbe) oluşan görüntünün genlik spektrumu yaklaşık sabittir; bütün frekanslarda eşit genlikli bileşen vardır.",
      dogru: true,
      aciklama: "Doğru. İdeal darbe bütün frekansları eşit içerir.",
    },
    {
      id: "bm-u7-jpeg", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi sunumda görüntünün Fourier dönüşümünün kullanım alanları arasında sayılır?",
      secenekler: ["JPEG gibi sıkıştırma biçimlerinin temeli", "RGB'den gri seviyeye dönüşüm", "Otsu ile eşik bulma", "Eksik pikselleri mod ile doldurma"],
      dogru: 0,
      aciklama: "Kullanım alanları: periyodik gürültünün temizlenmesi, kenar ve doku analizi ve **JPEG gibi sıkıştırma**.",
    },
    {
      id: "bm-u7-simetri", tip: "tf", zorluk: 3,
      soru: "Gerçel değerli bütün görüntülerde Fourier dönüşümü orijine göre simetriktir; birinci ile üçüncü çeyrek, ikinci ile dördüncü çeyrek aynıdır.",
      dogru: true,
      aciklama: "Doğru. Görüntü x eksenine göre de simetrikse (kosinüs görüntüleri gibi) dört katlı simetri oluşur.",
    },
    {
      id: "bm-u7-periyodik-gurultu", tip: "mcq", zorluk: 2,
      soru: "Bir görüntüdeki periyodik çizgi biçimli parazit frekans uzayında nasıl görünür ve nasıl temizlenir?",
      secenekler: [
        "Belirgin noktalar olarak görünür; bu noktalar silinip ters dönüşüm alınır",
        "Merkezde geniş bir leke olarak görünür; merkez silinip ters dönüşüm alınır",
        "Hiç görünmez; yalnızca medyan filtreyle giderilir",
        "Faz spektrumunda görünür; genlik sıfırlanarak giderilir",
      ],
      dogru: 0,
      aciklama: "Periyodik parazitler spektrumda **belirgin noktalar** olarak çıkar; bunlar filtrelenir ve **ters Fourier dönüşümü** ile görüntüye dönülür.",
    },
  ]),
];
