import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_7: Ders = {
  hafta: 7,
  baslik: "Fourier Dönüşümü",
  ozet: "Zaman ve frekans ortamı, Fourier serisi ve Dirichlet koşulları, Fourier dönüşümü, genlik-faz ve güç spektrumu, DFT ve FFT, FFT ile spektrum çıkarma ve görüntülerin 2B Fourier dönüşümü.",
  bolumler: [
    {
      baslik: "Ortam ve dönüşüm kavramı",
      metin: md(`
**Neden önemli?** EKG'deki 50 Hz gürültüsü zaman grafiğinde görünmez, frekans grafiğinde tek bir tepe olarak göze batar. Dönüşüm, aynı bilgiye daha kullanışlı bir açıdan bakmaktır.

Fiziksel büyüklükler bir parametreye göre gözlenir; bu parametre **ortamı (domain)** belirler:

- Zamanın fonksiyonuysa **zaman ortamı** (time domain): bir yıllık yağış miktarı, EKG.
- Uzunluğun fonksiyonuysa **uzay (uzaklık) ortamı** (space domain): görüntüdeki piksel parlaklığı.
- Frekansa göre gözlenmişse **frekans ortamı** (frequency domain).

Bir sinyalin bütün bilgisini bulunduğu ortamda görmek zor, bazen imkânsızdır. Sinyal başka bir ortama aktarılır, işlem orada yapılır ve istenirse sonuç **başlangıç ortamına geri dönüştürülür**. Bir sinyali başka bir ortama aktarmaya **dönüşüm**, kullanılan tekniklere **dönüşüm yöntemleri** denir: Fourier, Laplace, Hankel, Hilbert ve Z dönüşümü.

**Prizma benzetmesi:** Beyaz ışık prizmanın A tarafından girer, B tarafında farklı frekanslarda yedi renge ayrılır. B tarafından yedi renk verilirse A'dan yeniden beyaz ışık çıkar. İki taraf **aynı bilgiyi** taşır, yalnızca bakış açısı farklıdır. Beyaz ışığa bakmak kaynak hakkında hiçbir şey söylemeyebilir; ama bileşenlerin frekansları, miktarları ve oranları (yani **spektrum**) incelenirse kaynağın bileşimi, sıcaklığı ve malzemesi hakkında ayrıntılı bilgi edinilir.

İyi bir dönüşümün özellikleri: verinin özelliklerini **değiştirmeden** ortam değiştirir ve **geri dönüşümü** vardır.

**Spektrum**: zaman ortamındaki verinin frekans ortamına aktarılmasıyla elde edilen veri. $f(t)$ sinyalinin spektrumu $F(\\omega)$ ile gösterilir; $\\omega$ açısal frekanstır ($\\omega = 2\\pi f$).

> **Sık hata:** Dönüşümle bilginin değiştiğini ya da arttığını sanmak. Bilgi aynıdır; yalnızca bazı özellikleri yeni ortamda daha kolay görülür.
`),
      dene: ["bm-u7-prizma"],
    },
    {
      baslik: "Fourier serisi",
      metin: md(`
**Neden önemli?** "Her periyodik sinyal sinüslerin toplamıdır" fikri bütün spektral analizin temelidir. Kare dalga örneği, keskin köşeler için neden çok sayıda yüksek frekanslı terim gerektiğini gösterir.

Fourier kuramına göre **Dirichlet koşullarını** sağlayan periyodik bir $f(t)$ fonksiyonu, sonsuz sayıda sinüs ve kosinüs teriminin toplamı olarak yazılabilir. Bu seriye **Fourier serisi** denir:

$$f(t) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left( a_n \\cos n\\omega_0 t + b_n \\sin n\\omega_0 t \\right)$$

Bir fonksiyonu Fourier serisine açmaya **harmonik analiz** denir; $n\\omega_0$ frekanslı terimler $n$. **harmoniklerdir**.

**Dirichlet koşulları:**

1. $f(t)$ sürekli ya da en azından parça parça sürekli olmalı; süreksizliklerin sayısı sınırlı olmalı.
2. Bir periyottaki maksimum ve minimum sayısı **sonlu** olmalı.
3. $f(t)$ bir periyot boyunca **sonlu** olmalı.

Seri, fonksiyonu ancak **sonsuz sayıda terim** alındığında tam olarak gösterir. Sınırlı sayıda terim bir yaklaşımdır.

**Kare dalga örneği:** genliği 1 olan bir kare dalga yalnızca **tek harmoniklerden** oluşur:

$$f(t) = \\frac{4}{\\pi}\\left( \\sin \\omega_0 t + \\frac{1}{3}\\sin 3\\omega_0 t + \\frac{1}{5}\\sin 5\\omega_0 t + \\cdots \\right)$$

[[G-H7-02]]

**Karmaşık biçim:** trigonometrik terimler yerine **Euler formülü** ($e^{i\\theta} = \\cos\\theta + i\\sin\\theta$) kullanılırsa hesaplar basitleşir: $f(t) = \\sum_{n=-\\infty}^{\\infty} c_n e^{in\\omega_0 t}$.

> **Sık hata:** Birkaç terimle kare dalganın tam elde edildiğini sanmak. Terim arttıkça yaklaşım iyileşir, ama köşeler ancak sonsuz terimle tam oluşur.
`),
      dene: ["bm-u7-dirichlet"],
    },
    {
      baslik: "Fourier dönüşümü, genlik ve faz",
      metin: md(`
**Neden önemli?** Gerçek biyomedikal olaylar (bir atım, bir nöbet) çoğu zaman tekrarlanmaz. Fourier dönüşümü seriyi periyodik olmayan sinyallere genişletir.

Uygulamadaki çoğu olay bir kez olur ve tekrarlanmaz; bu **periyodik olmayan** fonksiyonlara Fourier serisi uygulanamaz. Eldeki T uzunluğundaki veri, periyodu sonsuz olan bir sinyal gibi düşünülür; bu genelleme **Fourier integralini** verir.

**Fourier dönüşümü** zaman ortamından frekans ortamına geçişi sağlayan **tersinir** bir araçtır (Joseph Fourier, 1807):

$$F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)\\, e^{-i\\omega t}\\, dt, \\qquad f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(\\omega)\\, e^{i\\omega t}\\, d\\omega$$

İlki **Fourier dönüşümü**, ikincisi **ters Fourier dönüşümüdür**; $f(t)$ ile $F(\\omega)$'ya **Fourier çifti** denir. Uygulamada $\\omega$ yerine $\\omega = 2\\pi f$ ile frekans $f$ kullanılır.

**$F(\\omega)$ karmaşıktır** ve iki biçimde yazılır:

$$F(\\omega) = a(\\omega) + i\\,b(\\omega) = |F(\\omega)|\\, e^{-i\\phi(\\omega)}$$

$$|F(\\omega)| = \\sqrt{a^2 + b^2}, \\qquad \\phi(\\omega) = \\arctan\\frac{b}{a}$$

- **Genlik** $|F(\\omega)|$: $\\omega$ frekansındaki bileşenin ne kadar **büyük (güçlü)** olduğu.
- **Faz** $\\phi(\\omega)$: o bileşenin zaman eksenine göre **kayması** (başlangıç açısı).

[[G-H7-03]]

Genliklerin frekansa göre çizimine **genlik spektrumu**, faz açılarının çizimine **faz spektrumu** denir.

**Doğrusallık:** Fourier dönüşümü tamamen **doğrusal** bir işlemdir. Bir ortamda yapılan her işlemin öteki ortamda bir karşılığı vardır ve bilgi iki ortamda **eşit kesinliktedir**; yalnızca bazı işlemler bir ortamda daha kolaydır.

> **Sık hata:** Genlik spektrumunun bütün bilgiyi taşıdığını düşünmek. Faz atılırsa sinyal geri elde edilemez; dönüşüm genlik ve faz birlikte, yani karmaşık sayıyla tamdır.
`),
      dene: ["bm-u7-periyodik-degil"],
    },
    {
      baslik: "Enerji ve güç yoğunluğu spektrumu",
      metin: md(`
**Neden önemli?** EEG analizinde "alfa bandındaki güç" gibi özellikler güç spektrumundan hesaplanır. Spektrumun karesinin neyi ölçtüğünü bilmek bu özellikleri anlamlı kılar.

Genliklerin **karelerinin** frekansa göre çizimine **güç yoğunluğu spektrumu** denir:

$$\\text{güç spektrumu} = |F(f)|^2$$

Güç yoğunluğu spektrumu, zaman dizisinin **öz ilişki (otokorelasyon) fonksiyonunun Fourier dönüşümüne** eşittir.

**Enerji yoğunluğu:** $f(t)$ bir gerilim olsun. Sinyalin toplam enerjisi iki ortamda da aynıdır:

$$\\int_{-\\infty}^{\\infty} |f(t)|^2\\, dt = \\int_{-\\infty}^{\\infty} |F(f)|^2\\, df$$

Sol taraf bir direncin tükettiği enerjiyle orantılıdır (birimi V²·s). Sağ tarafın aynı birimi vermesi için $|F(f)|^2$'nin birimi V²·s/Hz olmalıdır; yani $|F(f)|^2$ **birim frekanstaki enerjidir**. Bu yüzden $|F(f)|^2$'ye **enerji yoğunluğu spektrumu** denir.

Gerçekte **tek bir frekanstaki enerji sıfırdır**; enerji ancak bir frekans aralığında integral alınarak bulunur. Her ölçüm gerilime çevrildiği için "enerji yoğunluğu" adı alışılagelmiştir; bütün ortamlarda geçerli olan ad **güç spektrumudur**.

> **Sık hata:** Spektrumdaki bir noktanın yüksekliğini o frekanstaki enerji sanmak. Yükseklik yoğunluktur; enerji bir bant boyunca alan hesaplanarak bulunur.
`),
      dene: ["bm-u7-enerji-yog"],
    },
    {
      baslik: "Ayrık Fourier dönüşümü (DFT) ve FFT",
      metin: md(`
**Neden önemli?** Bilgisayar sonsuz uzunlukta, sürekli bir frekans ekseniyle çalışamaz. Sayısal sinyal işlemede kullanılan her spektrum aslında bir DFT'dir ve neredeyse her zaman FFT ile hesaplanır.

Ayrık zamanlı bir $x(n)$ dizisinin Fourier dönüşümü (AZFD) sonsuz uzunlukta dizi için tanımlıdır ve **sürekli** $\\omega$'nın fonksiyonudur. Bilgisayarda dizi sınırlandırılmalı ve sonlu sayıda frekansta hesap yapılmalıdır. **Ayrık Fourier dönüşümü (DFT)** bu sorunu çözer:

$$X(k) = \\sum_{n=0}^{N-1} x(n)\\, e^{-j 2\\pi k n / N}, \\qquad k = 0, 1, \\dots, N-1$$

- DFT, Fourier dönüşümünün **eşit aralıklı N frekanstaki örnekleridir**; z-düzleminde birim çember üzerindeki N noktaya karşılık gelir.
- L ≤ N uzunluklu bir diziyi N uzunluklu bir frekans dizisine çevirir. Ters DFT (IDFT) geri dönüşü sağlar.
- Doğrusal filtreleme, korelasyon ve **spektrum analizinde** temel araçtır.

**Hızlı Fourier dönüşümü (FFT):** DFT'yi doğrudan hesaplamak eleman sayısı arttıkça çok uzun sürer; özellikle görüntü işlemede veri çok olduğu için yavaştır. DFT'yi verimli hesaplayan algoritmaların ortak adı **FFT**'dir. Doğrudan DFT yaklaşık $N^2$ işlem isterken FFT yaklaşık $N \\log_2 N$ işlemle aynı sonucu verir; N = 1024 için bu, bir milyon yerine on bin civarı işlemdir.

Dikkat edilecek nokta: klasik FFT için dizinin eleman sayısı **2'nin kuvveti** (256, 512, 1024, …) olmalıdır.

> **Sık hata:** FFT'yi DFT'den farklı bir dönüşüm sanmak. FFT yeni bir dönüşüm değil, DFT'yi hızlı hesaplayan bir algoritmadır; sonuç aynıdır.
`),
      dene: ["bm-u7-fft-neden"],
    },
    {
      baslik: "FFT ile spektrum çıkarma",
      metin: md(`
**Neden önemli?** Sunumdaki örnek, bir sinyalin hangi frekansları içerdiğini FFT ile adım adım bulmayı gösterir. Bu kalıp EKG, EEG ve EMG analizinde aynen kullanılır.

**Sinyal:** örnekleme frekansı $F_s = 1000$ Hz, uzunluk L = 1000 örnek (1 saniye). Sinyal, **50 Hz'de 0,7** genlikli ve **120 Hz'de 1** genlikli iki sinüsün toplamıdır:

$$S(t) = 0{,}7\\sin(2\\pi \\cdot 50\\, t) + \\sin(2\\pi \\cdot 120\\, t)$$

Üstüne sıfır ortalamalı beyaz gürültü eklenince zaman grafiğine bakarak frekansları seçmek neredeyse imkânsızdır.

**Adımlar:**

1. ~Y = fft(X)~ ile Fourier dönüşümü alınır.
2. **İki taraflı spektrum**: ~P2 = abs(Y/L)~.
3. **Tek taraflı spektrum**: ilk yarı alınır, ~P1 = P2(1:L/2+1)~; uçlar dışındaki değerler **2 ile çarpılır**, ~P1(2:end-1) = 2*P1(2:end-1)~. Gerçel bir sinyalin spektrumu simetrik olduğu için negatif frekanslardaki enerji pozitif tarafa eklenir.
4. Frekans ekseni: ~f = Fs*(0:(L/2))/L~. Frekans adımı $F_s / L$'dir.

[[G-H7-01]]

Gürültüsüz sinyalde tepeler tam olarak 50 Hz'de 0,7 ve 120 Hz'de 1'dir. Gürültülü sinyalde tepeler aynı yerde çıkar ama yükseklikleri tam 0,7 ve 1 olmaz; **daha uzun sinyaller** ortalamada daha iyi frekans kestirimi verir.

**Mühendislik örneği:** Sorunlu bir elektrikli süpürgenin ses kaydının FFT'si **5445 Hz'de büyük bir tepe** gösterir. Bu ton, fan kanatlarının geçişinden kaynaklanır. Eşit aralıklı kanatlar tek bir saf ton üretir; kanat aralıkları düzensiz yapılırsa ses, daha düşük genlikli ve geniş bir frekans aralığına yayılmış tonlara dönüşür.

> **Sık hata:** İki taraflı spektrumdaki tepe yüksekliğini sinüsün genliği sanmak. İki taraflı spektrumda genlik iki tarafa bölünür (0,35 + 0,35); genliği tek taraflı spektrum verir.
`),
      dene: ["bm-u7-tek-taraf"],
    },
    {
      baslik: "Görüntünün 2B Fourier dönüşümü",
      metin: md(`
**Neden önemli?** Görüntüdeki tekrar eden çizgiler, tarama izleri ya da periyodik gürültü frekans uzayında tek tek noktalar olarak görünür. JPEG sıkıştırmasından MR rekonstrüksiyonuna kadar pek çok yöntem bu uzayda çalışır.

**2B Fourier dönüşümü**, uzay ortamındaki (piksel düzlemindeki) bir görüntüyü sinüs ve kosinüs dalga bileşenlerine ayırır. 1B sinyal $f(x)$ ya da $f[k]$ iken görüntü $f(x, y)$ ya da $f[i, j]$'dir.

- **Piksel (uzay) uzayı**: görüntünün kendisi, parlaklık değerlerinin matrisi.
- **Frekans uzayı**: parlaklığın **ne kadar hızlı değiştiğini** gösterir. Spektrum genellikle sıfır frekans ortada olacak biçimde çizilir.
- **Düşük frekanslar**: yumuşak geçişler, arka plan, büyük nesneler; spektrumun **merkezinde**.
- **Yüksek frekanslar**: keskin kenarlar, ince çizgiler, gürültü, ani parlaklık değişimleri; **merkezden uzakta**.

**Örnekler:**

- **Tek parlak piksel**: bütün frekanslarda eşit genlikli bileşenleri vardır, spektrum yaklaşık **sabittir**.
- **Yumuşak, geniş şekil**: enerji **merkezde** yoğunlaşır, yüksek frekanslar zayıftır.
- **Dikey çizgiler**: parlaklık **x yönünde** periyodik değişir; spektrumda merkezin iki yanında **yatay eksen boyunca** bir çift tepe çıkar.
- **Dama tahtası**: sık tekrar eden açık-koyu kareler, merkezden **uzak, simetrik** yüksek frekanslı bileşenler verir; periyot küçüldükçe frekans artar.

[[G-H7-04]]

**Simetri:** gerçel (karmaşık olmayan) her görüntünün Fourier dönüşümü **orijine göre simetriktir**; 1. ve 3. çeyrekler, 2. ve 4. çeyrekler aynıdır.

**Kullanım alanları:**

- **Gürültü temizleme**: periyodik çizgiler ya da parazit frekans uzayında belirgin noktalardır; bu noktalar silinip **ters Fourier dönüşümüyle** görüntüye dönülür.
- **Kenar tespiti** ve doku analizi.
- **Sıkıştırma**: **JPEG** gibi biçimlerin temeli.

> **Sık hata:** Dikey çizgilerin tepelerini dikey eksende aramak. Dikey çizgilerde parlaklık yatay yönde değişir; tepeler yatay eksende çıkar.
`),
      dene: ["bm-u7-dikey-cizgi"],
    },
  ],
  test: [
    "bm-u7-ortam",
    "bm-u7-harmonik",
    "bm-u7-sonsuz-terim",
    "bm-u7-cift",
    "bm-u7-faz",
    "bm-u7-psd-ozilinti",
    "bm-u7-fft-2kuvvet",
    "bm-u7-supurge",
    "bm-u7-kenar-yuksek",
    "bm-u7-jpeg",
  ],
};
