import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_1: Ders = {
  hafta: 1,
  baslik: "Giriş: sinyaller ve istatistik",
  ozet: "Dijital sinyal işlemenin neden kullanıldığını; sürekli ve ayrık sinyali, örnekleme ve nicelemeyi; ortalama, standart sapma, varyans ve rms'i; histogram, pmf, pdf ve normal dağılımı; rastgele sayılarla gürültü üretmeyi; kesinlik ile doğruluk farkını öğren.",
  bolumler: [
    {
      baslik: "Sinyal işleme neden dijital?",
      metin: md(`
**Neden önemli?** Telefonundaki ses, bir tomografi görüntüsü, bir radarın ekranı ya da bir deprem kaydı: hepsi önce sayılara çevrilip bir işlemcide hesaplanıyor. Bu dersin her haftası bu sayılar üzerinde yapılan işlemleri anlatır.

**Dijital sinyal işleme** (DSP, *digital signal processing*), sinyalleri sayı dizileri olarak ele alıp bilgisayarla ya da özel bir donanımla işleyen bilim ve mühendislik alanıdır. Hızla gelişmesinin nedeni tümleşik devre teknolojisidir: MSI'dan LSI'ya, oradan VLSI'ya geçildikçe bilgisayarlar küçüldü, hızlandı ve ucuzladı. Eskiden yalnızca çevrimdışı bilimsel hesaplarda kullanılan bilgisayarlar artık gerçek zamanlı sinyal işleyebiliyor.

Analog devrelerle karşılaştırınca dijital işlemenin üstünlükleri şunlardır:

- **Programlanabilir:** Aynı donanım, yazılımı değiştirerek başka bir işlem yapar. Filtreyi değiştirmek için devreyi yeniden kurmak gerekmez.
- **Daha ucuz ve daha güvenilir:** Dijital devreler sıcaklıkla ya da yaşlanmayla kaymaz; aynı program her seferinde aynı sonucu verir.
- **Daha yüksek kesinlik:** Analog bir devrenin hassasiyeti bileşenlerinin toleransıyla sınırlıyken dijital hesabın hassasiyeti kullanılan bit sayısıyla istendiği kadar artırılabilir.
- **Analogla yapılması çok zor ya da çok pahalı** olan karmaşık işlemler (uyarlamalı filtreler, sıkıştırma, spektrum analizi) dijitalde yapılabilir.

Ancak DSP her soruna çözüm değildir. **Bant genişliği çok geniş** olan bazı sinyallerin gerçek zamanlı işlenmesi gerekir ve bunu yapacak kadar hızlı dijital devre yoksa analog ya da optik işleme tek seçenek olabilir. Dijital devreler yeterince hızlı olduğunda ise genellikle dijital işleme tercih edilir.

**Kullanım alanları.** İletişim (modemler, cep telefonları, yankı giderme), ses ve konuşma (sıkıştırma, tanıma, efektler), görüntü işleme (tıbbi görüntüleme, fotoğraf, video sıkıştırma), radar ve sonar, jeofizik ve sismoloji, biyomedikal sinyaller (EKG, EEG), uzay ve savunma, endüstriyel ölçme ve kontrol. DSP; matematik, istatistik, olasılık, analog elektronik, sayısal elektronik ve bilgisayar bilimiyle iç içedir. Bu hafta bunların ilk ikisinden, istatistik ve olasılıktan başlıyoruz.
`),
      dene: ["h1-dsp-avantaj"],
    },
    {
      baslik: "Sürekli ve ayrık sinyaller",
      metin: md(`
**Neden önemli?** Bir sinyali bilgisayara almak için hem zamanını hem genliğini nicelemen gerekir. Kaç bit ve hangi hız seçtiğin, sonraki her hesabın ne kadar iyi olacağını belirler.

Bir **sinyal**, zamana, uzaya ya da başka bir **bağımsız** değişkene göre değişen fiziksel bir niceliktir. Matematikte sinyali bir ya da daha fazla bağımsız değişkenin fonksiyonu olarak yazarız.

Analog elektronikte en yaygın sinyal zamanla değişen bir gerilimdir. Hem zaman hem gerilim sürekli bir aralıkta her değeri alabildiği için buna **sürekli sinyal** denir ve ~x(t)~ diye yazılır. Bu sinyal bir **analogdan dijitale dönüştürücüden** (ADC) geçirilince iki parametre de nicelenir:

- **Genlik nicelenir:** B bitlik bir ADC gerilimi $2^B$ seviyeden birine yuvarlar. 12 bitlik bir ADC 4096 seviye, 8 bitlik bir ADC 256 seviye verir. Seviyeler arasındaki adım, ölçme aralığının seviye sayısına bölümüdür: 0–5 V aralığındaki 12 bitlik bir ADC'de yaklaşık 5 / 4096 ≈ 1,22 mV.
- **Zaman nicelenir:** Saniyede $f_s$ örnek alınırsa örnekler arasındaki süre $T_s = 1/f_s$ olur. Saniyede 1000 örnek alan bir ADC zamanı birer milisaniyelik adımlarla tanımlar.

Bu şekilde nicelenmiş parametrelerden oluşan sinyale **ayrık sinyal** ya da sayısallaştırılmış sinyal denir ve ~x[n]~ diye yazılır; ~n~ örnek numarasıdır. Sürekli sinyaller çoğunlukla doğada, ayrık sinyaller bilgisayarların içinde bulunur.

[[G-H1-01]]

> **Çözümlü örnek:** 0–2 V aralığında çalışan 4 bitlik bir ADC saniyede 250 örnek alıyor. Kaç seviye vardır, adım kaç mV'tur, örnekler kaç ms arayla alınır?
>
> 1. Seviye sayısı: $2^4 = 16$.
> 2. Adım: 2 V / 16 = 0,125 V = 125 mV.
> 3. $T_s = 1 / 250$ s = 4 ms.

**Eksenlerin adları.** Bir sinyal grafiğinde dikey eksen gerilim, ışık şiddeti, ses basıncı ya da başka herhangi bir nicelik olabilir; genel olarak buna **genlik** deriz. Dikey eksene y ekseni, bağımlı değişken ya da ordinat da denir. Yatay eksene x ekseni, bağımsız değişken ya da apsis denir. Bağımsız değişken her örneğin *ne zaman ve nasıl* alındığını, bağımlı değişken ise *ne ölçüldüğünü* söyler; bu yüzden ikisinin yeri değiştirilemez.

**Alan** (domain). Yatay eksendeki nicelik sinyalin alanını belirler. Bağımsız değişkeni zaman olan sinyal **zaman alanındadır**; frekans olan sinyal **frekans alanındadır**; mesafe olan sinyal **uzaysal alandadır**. Örneğin bir jeofizikçinin yeryüzü boyunca eşit aralıklarla aldığı kaya yoğunluğu ölçümleri uzaysal alandadır. Yatay ekseni yalnızca "örnek numarası" olan bir sinyal de zaman alanında sayılır, çünkü sinyal elde etmenin en yaygın yolu eşit zaman aralıklarıyla örneklemektir.

[[G-H1-02]]

> **Sık hata:** Bit sayısını seviye sayısıyla karıştırmak. 10 bit 10 seviye değil $2^{10} = 1024$ seviyedir. Bir bit eklemek seviye sayısını iki katına çıkarır, adımı yarıya indirir.

Aşağıdaki betik bir sinüsü 3 bitle niceliyor. ~floor~ değeri alttaki seviyeye yuvarlar.
`),
      matlab: {
        kod: `% Örnekleme ve niceleme
fs = 40;                      % örnekleme hızı (Hz)
n = 0:fs;                     % 1 saniyelik örnek numaraları
t = n / fs;                   % örnek anları: Ts = 1/fs aralıklı
x = 0.5 + 0.45*sin(2*pi*2*t); % 0..1 V arasında bir sinyal

B = 3;                        % bit sayısı
L = 2^B                       % seviye sayısı
xq = (floor(x*L) + 0.5) / L;  % her örneği kendi seviyesinin ortasına yuvarla
xq(xq > 1) = 1 - 0.5/L;

plot(t, x)
hold on
stem(t, xq, 'r', 'filled')
hold off
xlabel('t (s)'), ylabel('genlik (V)')
title(sprintf('%d bit, fs = %d Hz', B, fs))
hata = max(abs(x - xq))       % en fazla yarım adım`,
        gorev: "B'yi 6 yap ve en büyük hatanın nasıl küçüldüğüne bak. Sonra fs'yi 10'a indir: sinyal hâlâ tanınıyor mu?",
      },
      dene: ["h1-adc-adim", "h1-alan-ornek"],
    },
    {
      baslik: "Ortalama ve standart sapma",
      metin: md(`
**Neden önemli?** Bir sinyali iki sayıyla özetlemek istesen bunlar ortalama ve standart sapma olur: biri sinyalin nerede durduğunu, öbürü ne kadar dalgalandığını söyler. Gürültü ölçerken, filtreleri karşılaştırırken sürekli bu iki sayıyı kullanacağız.

**Ortalama** ($\\mu$), sinyalin ortalama değeridir. N örnekli bir ~x~ sinyali için

$$\\mu = \\frac{1}{N}\\sum_{i=0}^{N-1} x_i$$

Elektronikte ortalamaya **DC** (doğru akım) değeri denir. Sinyalin ortalama etrafındaki dalgalanmasına da **AC** (alternatif akım) kısmı denir. Sinüs ya da kare dalga gibi düzenli bir sinyalin dalgalanması tepeden tepeye genlikle anlatılabilir; ama ölçülen sinyallerin çoğu rastgeledir ve belirgin bir tepeden tepeye değeri yoktur. Bu durumda **standart sapma** ($\\sigma$) kullanılır.

Standart sapma, sapmaların ortalamasına benzer; ama ortalamayı almadan önce her sapmanın karesi alınır, sonunda da bu kareyi telafi etmek için karekök alınır:

$$\\sigma^2 = \\frac{1}{N-1}\\sum_{i=0}^{N-1} (x_i - \\mu)^2$$

$\\sigma^2$ terimine **varyans** denir. Standart sapma sinyalin ortalamadan ne kadar uzağa dalgalandığının ölçüsüdür; varyans ise bu dalgalanmanın **gücünü** temsil eder. Birbirinden bağımsız iki gürültü kaynağı toplandığında standart sapmalar değil varyanslar toplanır: $\\sigma_T^2 = \\sigma_1^2 + \\sigma_2^2$.

**Popülasyon ve örnek.** İstatistikte iki tür ortalama vardır. **Popülasyon ortalaması** bütün gözlemleri kullanır; **örnek ortalaması** popülasyondan seçilmiş bir kısmı kullanır. Sinyal işlemede neredeyse her zaman elimizde sinyalin bir parçası, yani bir örnek vardır. Örnek ortalaması verinin kendisinden hesaplandığı için verilere gerçek ortalamadan biraz daha yakındır ve sapmalar olduğundan küçük çıkar. Formüldeki **N − 1** bunu düzeltir. Bütün popülasyon biliniyorsa N'ye bölünür. N büyükken iki sonuç neredeyse aynıdır.

> **Çözümlü örnek:** x = [1 2 6 7] için μ ve σ'yı bul.
>
> 1. μ = (1 + 2 + 6 + 7) / 4 = 4.
> 2. Sapmalar: −3, −2, 2, 3. Kareleri: 9, 4, 4, 9; toplam 26.
> 3. σ² = 26 / (4 − 1) ≈ 8,67; σ = √8,67 ≈ 2,94.

> **Sık hata:** Sapmaların karesini almadan ortalamasını almak. İşaretli sapmaların toplamı her zaman sıfırdır; kare almak hem işareti yok eder hem büyük sapmaları daha çok tartar.

MatStudio'da ~mean~ ortalamayı, ~std~ N − 1'li standart sapmayı, ~var~ varyansı verir. ~std(x, 1)~ yazarsan N'ye böler.
`),
      matlab: {
        kod: `% Ortalama ve standart sapmayı formülle ve hazır fonksiyonla hesapla
x = [1 2 6 7];
N = length(x);

mu = sum(x) / N
sigma = sqrt(sum((x - mu).^2) / (N - 1))

mean(x)          % aynı ortalama
std(x)           % aynı standart sapma (N-1)
var(x)           % varyans = sigma^2
std(x, 1)        % popülasyon formülü: N'ye böler`,
        gorev: "x'e bir eleman daha ekle (örneğin 30). Ortalama mı yoksa standart sapma mı daha çok değişti?",
      },
      dene: ["h1-varyans"],
    },
    {
      baslik: "rms ve dalga biçimleri",
      metin: md(`
**Neden önemli?** Prizdeki "220 V" bir rms değeridir. rms, bir sinyalin gücünü tek sayıyla anlatır; standart sapmayla farkını bilmek, DC'si olan sinyallerde yanlış sonuçtan kurtarır.

**rms** (*root mean square*, kök-ortalama-kare) değeri örneklerin karelerinin ortalamasının kareköküdür:

$$x_{rms} = \\sqrt{\\frac{1}{N}\\sum_{i=0}^{N-1} x_i^2}$$

Tanım gereği standart sapma sinyalin **yalnızca AC kısmını**, rms ise **hem AC hem DC** kısmını ölçer. Sinyalin DC bileşeni yoksa (ortalaması sıfırsa) rms ile standart sapma aynıdır. Örnek sayısı büyükken ikisi arasında şu bağ vardır:

$$x_{rms}^2 = \\mu^2 + \\sigma^2$$

Yani DC'nin gücü ile AC'nin gücü toplanır. 4 V'luk bir DC'nin üzerine σ = 3 V'luk bir gürültü binmişse rms = √(16 + 9) = 5 V olur.

[[G-H1-03]]

**Tepeden tepeye değer ile σ.** Düzenli dalgalarda tepeden tepeye değer ($V_{pp}$) ile standart sapma arasında sabit bir oran vardır. Ortalaması sıfır olan dalgalar için:

- **Kare dalga:** $V_{pp} = 2\\sigma$ (her örnek ortalamadan tam yarım Vpp uzaktadır).
- **Üçgen dalga:** $V_{pp} = \\sqrt{12}\\,\\sigma \\approx 3{,}46\\sigma$.
- **Sinüs dalga:** $V_{pp} = 2\\sqrt{2}\\,\\sigma \\approx 2{,}83\\sigma$. Tepe genliği $V_p$ ise $V_{rms} = V_p / \\sqrt{2} \\approx 0{,}707\\,V_p$.
- **Rastgele gürültü:** Belirli bir tepe değeri yoktur; gözle görülen tepeden tepeye değer kabaca $6\\sigma$ ile $8\\sigma$ arasındadır.

[[G-H1-04]]

> **Çözümlü örnek:** Tepe genliği 5 V olan, DC'siz bir sinüsün rms değeri ve standart sapması nedir? Üzerine 2 V DC eklenirse rms ne olur?
>
> 1. $V_{rms} = 5 / \\sqrt{2} \\approx 3{,}54$ V. DC olmadığı için σ da ≈ 3,54 V.
> 2. DC eklenince σ değişmez. rms = √(2² + 3,54²) = √(4 + 12,5) ≈ 4,06 V.

> **Sık hata:** DC'si olan bir sinyalde rms'i standart sapma sanmak. DC eklemek σ'yı değiştirmez ama rms'i büyütür.
`),
      matlab: {
        kod: `% DC'li bir sinüsün ortalaması, standart sapması ve rms'i
t = linspace(0, 1, 10000);
Vp = 5;  dc = 2;
x = dc + Vp*sin(2*pi*3*t);

mu = mean(x)
sigma = std(x)
etkin = rms(x)
fark = etkin^2 - (mu^2 + sigma^2)   % sıfıra çok yakın

Vpp = max(x) - min(x);
oran = Vpp / sigma                  % sinüs için 2*sqrt(2)`,
        gorev: "sin yerine square kullan (kare dalga). Vpp/σ oranı kaç çıkıyor? Sonra dc'yi 0 yap ve rms ile σ'yı karşılaştır.",
      },
      dene: ["h1-rms-dc"],
    },
    {
      baslik: "Histogram, pmf ve pdf",
      metin: md(`
**Neden önemli?** Ortalama ve standart sapma sinyali iki sayıya indirir; histogram ise değerlerin nasıl dağıldığını bütünüyle gösterir. Gürültünün türünü anlamak, bir ADC'yi sınamak ya da görüntünün parlaklığını ayarlamak histogramla başlar.

Bir bilgisayara 8 bitlik bir ADC bağladığımızı ve bir sinyalden çok sayıda örnek aldığımızı düşünelim. Her örnek 0 ile 255 arasındaki 256 değerden biridir. **Histogram**, bu olası değerlerin her birinden kaç örnek olduğunu gösterir. Histogramı $H_i$ ile gösteririz: $H_i$, değeri ~i~ olan örneklerin sayısıdır; ~i~ 0'dan M − 1'e gider, M olası değer sayısıdır. Örneğin $H_{50}$, değeri 50 olan örneklerin sayısıdır.

Bütün histogram değerlerinin toplamı sinyaldeki örnek sayısına eşittir:

$$N = \\sum_{i=0}^{M-1} H_i$$

Histogramdan ortalama ve standart sapma da hesaplanabilir. Aynı değerdeki her örneği ayrıca toplamak yerine değeri adediyle çarparız:

$$\\mu = \\frac{1}{N}\\sum_{i=0}^{M-1} i\\,H_i \\qquad \\sigma^2 = \\frac{1}{N-1}\\sum_{i=0}^{M-1} (i-\\mu)^2 H_i$$

Milyonlarca örnekte bu, her örneği sırayla toplamaktan çok daha hızlıdır.

[[G-H1-05]]

Az örnekle çıkarılan histogram pürüzlüdür. Ortalamada olduğu gibi histogramın istatistiksel gürültüsü (pürüzlülüğü) de örnek sayısının **karekökü** ile ters orantılıdır: örnek sayısını 4 katına çıkarmak pürüzü yarıya indirir.

**pmf.** Histogramı örnek sayısına bölersek **olasılık kütle fonksiyonu** (pmf, *probability mass function*) elde ederiz. pmf'teki her değer 0 ile 1 arasındadır ve bütün değerlerin toplamı 1'dir. pmf, belirli bir değerin gelme olasılığını söyler: pmf'te 120'nin karşısında 0,03 yazıyorsa rastgele bir örneğin 120 olma olasılığı yüzde 3'tür. Bir aralığın olasılığı için o aralıktaki pmf değerleri toplanır.

**pdf.** Histogram ve pmf yalnızca ayrık veriyle kullanılabilir. Sürekli bir gerilim için benzer kavram **olasılık yoğunluk fonksiyonudur** (pdf, *probability density function*; olasılık dağılım fonksiyonu da denir). pdf'in dikey ekseni olasılık değil olasılık **yoğunluğudur** (örneğin "volt başına olasılık"). Sinyalin belirli bir aralıkta olma olasılığı, pdf eğrisinin o aralıktaki **altında kalan alandır**. Eğrinin altındaki toplam alan, yani −∞'dan +∞'a integrali, her zaman 1'dir. Bu, pmf değerlerinin toplamının 1, histogram değerlerinin toplamının N olmasının karşılığıdır.

[[G-H1-06]]

**Kayan noktalı veri ve kutulama.** 8 bitlik bir ADC'nin yalnızca 256 olası değeri vardır; her biri için bir sayaç tutmak kolaydır. Kayan nokta gösterimindeki bir sinyalde ise 3 ile 4 arasında bile milyonlarca olası değer vardır. Her değer için ayrı bir sayaç tutmak hem imkânsıza yakın hem de anlamsızdır: iki örnek neredeyse hiç tam aynı değeri almaz, sayaçların neredeyse hepsi sıfır kalır. Çözüm **kutulamadır** (*binning*): değer aralığı eşit genişlikte **kutulara** (*bin*) bölünür ve her kutu kendi aralığına düşen örnekleri sayar. Histogramın uzunluğu artık olası değer sayısı değil, seçilen kutu sayısıdır (örneğin 1000 nokta).

Kutulama üç adımdır:

1. **Aralığı ve kutu sayısını seç.** Sinyal a ile b arasında değer alıyorsa ve M kutu kullanılacaksa kutu genişliği $w = (b - a)/M$ olur.
2. **Her örneğin kutusunu bul.** Değerden alt sınır çıkarılır, sonuç kutu genişliğine bölünür ve aşağı yuvarlanır: $k = \\lfloor (x - a)/w \\rfloor$. Kutu k, $a + k\\,w$ ile $a + (k+1)\\,w$ arasındaki değerleri sayar; alt kenar kutuya dahildir, üst kenar bir sonraki kutuya aittir. Tam b değerindeki bir örnek için formül M verir, böyle bir kutu olmadığından o örnek son kutuya (M − 1) yazılır.
3. **Sayacı artır.** $H_k$ bir artırılır. Bütün örnekler sayılınca yine $\\sum_k H_k = N$ olur.

0,0 ile 10,0 arasında değer alan bir sinyal ve 1000 kutulu bir histogramda kutu genişliği 0,01'dir: kutu 0, 0 ile 0,01 arasındaki örnekleri; kutu 1, 0,01 ile 0,02 arasındakileri sayar; son kutu 999 da 9,99 ile 10,0 arasındakileri. Bir değerin kutusu, değerin kutu genişliğine bölünüp aşağı yuvarlanmasıyla bulunur: 3,14159 / 0,01 = 314,159 olduğundan bu örnek kutu 314'e düşer.

Alt sınır sıfır değilse önce onu çıkarmak gerekir. −2 ile 2 arasında değer alan bir sinyal 200 kutuya bölünürse w = 4 / 200 = 0,02 olur. 0,5 değeri (0,5 − (−2)) / 0,02 = 125 ile kutu 125'e düşer. Alt sınır çıkarılmasaydı 25 bulunurdu; oysa kutu 25, −1,5 çevresindeki değerleri sayar.

**Kaç kutu?** Kutu sayısı bir uzlaşmadır. Az kutu histogramı düzgün gösterir ama ayrıntıyı siler: birbirine yakın iki tepe tek bir yığına karışır. Çok kutu ayrıntıyı korur ama her kutuya az örnek düşer; histogram pürüzlenir ve kutuların çoğu boş kalır. Kutu başına ortalama N / M örnek düşer, bu yüzden örnek sayısı az olan bir sinyalde kutu sayısı da az tutulur. İlk deneme için $M \\approx \\sqrt{N}$ yaygın bir seçimdir: 10 000 örnek için yaklaşık 100 kutu.

**Kutulu histogramdan pdf'e.** Kutulu histogram, sürekli sinyalin pdf'ine bir yaklaşımdır. Ama $H_k$ bir adet olduğu için yüksekliği hem N'ye hem de kutu genişliğine bağlıdır: kutuları iki kat genişletmek her kutuya yaklaşık iki kat örnek düşürür. pdf ile karşılaştırmak için her kutu $N\\,w$'ye bölünür:

$$p_k = \\frac{H_k}{N\\,w}$$

Böylece çubukların toplam alanı $\\sum_k p_k\\,w = 1$ olur, tıpkı pdf'in altındaki alan gibi. pmf'te yalnızca N'ye bölmek yeterliydi, çünkü orada her değerin genişliği 1'di.

[[G-H1-10]]

MatStudio'da ~histcounts(x, kenarlar)~ verilen kenarlarla sayar, ~histogram(x, M)~ M kutuyla çizer. ~histogram(x, M, 'Normalization', 'pdf')~ sayıları $N\\,w$'ye bölerek yoğunluk gösterir. İndisler 1'den başladığı için kutu numarası elle ~k = floor((x - a) / w) + 1~ ile bulunur.

> **Çözümlü örnek:** 3 bitlik bir sinyalin histogramı: değer 2'den 3 örnek, değer 3'ten 4 örnek, değer 5'ten 1 örnek var; diğer değerler hiç yok. N, μ ve P(x = 3) nedir?
>
> 1. N = 3 + 4 + 1 = 8.
> 2. μ = (2·3 + 3·4 + 5·1) / 8 = 23 / 8 = 2,875.
> 3. pmf: P(x = 3) = 4 / 8 = 0,5.

> **Sık hata:** pdf'in yüksekliğini olasılık sanmak. pdf'in değeri 1'den büyük bile olabilir (çok dar bir dağılımda); olasılık her zaman bir aralığın alanıdır.
`),
      matlab: {
        kod: `% 8 bitlik bir sinyalin histogramı ve histogramdan ortalama
rng(2)
N = 5000;
x = round(128 + 18*randn(1, N));    % 0..255 arası tamsayılar
x = min(max(x, 0), 255);

H = histcounts(x, -0.5:1:255.5);    % her değer için bir kutu
i = 0:255;
toplam = sum(H)                     % N'ye eşit
mu = sum(i .* H) / N                % histogramdan ortalama
sigma = sqrt(sum((i - mu).^2 .* H) / (N - 1))

subplot(2, 1, 1)
bar(i, H), xlim([60 200]), title('Histogram H_i')
subplot(2, 1, 2)
histogram(x, 30, 'Normalization', 'pdf'), title('30 kutulu, pdf olarak')`,
        gorev: "N'yi 500'e indir ve histogramın ne kadar pürüzlendiğine bak. Ortalama 128'den ne kadar uzaklaştı?",
      },
      dene: ["h1-hist-ortalama", "h1-pdf-alan"],
    },
    {
      baslik: "Normal dağılım",
      metin: md(`
**Neden önemli?** Isıl gürültü, ölçüm hataları, çok sayıda küçük etkinin toplamı: doğadaki rastgele sinyallerin çoğu çan biçimli bir dağılıma uyar. Bu eğrinin dört özelliğini bilmek, bir gürültünün ne sıklıkla ne kadar büyüyeceğini hemen söylemeni sağlar.

Rastgele süreçlerden oluşan sinyallerin pdf'i genellikle çan biçimlidir. Alman matematikçi Carl Friedrich Gauss'a atfen buna **normal dağılım**, **Gauss dağılımı** ya da kısaca **Gaussian** denir. Temel biçim $e^{-x^2}$ eğrisidir. Ayarlanabilir bir ortalama ve standart sapma eklenip eğrinin altındaki alan 1 olacak biçimde ölçeklenince normal dağılımın genel formülü çıkar:

$$P(x) = \\frac{1}{\\sqrt{2\\pi}\\,\\sigma}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

Ortalama dağılımın **merkezini**, standart sapma **genişliğini** belirler. Önündeki $1/(\\sqrt{2\\pi}\\,\\sigma)$ çarpanı alanı 1 yapar; bu yüzden σ büyüdükçe eğri hem yayılır hem alçalır. Tepe yüksekliği $x = \\mu$'de $1/(\\sqrt{2\\pi}\\,\\sigma) \\approx 0{,}399/\\sigma$'dır.

Eğrinin altındaki alanlardan çıkan ve ezberlemeye değer üç oran:

- Örneklerin yaklaşık **%68'i** μ ± 1σ aralığındadır.
- Yaklaşık **%95'i** μ ± 2σ aralığındadır.
- Yaklaşık **%99,7'si** μ ± 3σ aralığındadır.

Bu oranlar μ ve σ ne olursa olsun aynıdır. Gürültünün tepeden tepeye değerinin 6σ civarında görünmesinin nedeni de budur: örneklerin neredeyse hepsi ±3σ içinde kalır.

[[G-H1-07]]

**Merkezi limit teoremi.** Birçok rastgele sayı toplandığında, sayılar hangi dağılımdan gelirse gelsin toplamın dağılımı normal dağılıma yaklaşır. Doğadaki rastgele sinyallerin çoğunun Gauss biçimli olmasının nedeni budur: bir ölçüm hatası genellikle birçok küçük ve bağımsız etkinin toplamıdır.

> **Çözümlü örnek:** Bir sensörün çıkışı μ = 50 mV, σ = 4 mV olan Gauss gürültü içeriyor. Örneklerin yaklaşık %95'i hangi aralıktadır? pdf'in tepe değeri nedir?
>
> 1. μ ± 2σ = 50 ± 8, yani 42 mV ile 58 mV arası.
> 2. Tepe = 1 / (√(2π) · 4) ≈ 0,0997 (mV başına).

> **Sık hata:** "μ ± σ içinde örneklerin yarısı vardır" sanmak. Yarısı değil, yaklaşık üçte ikisi (%68) vardır.
`),
      matlab: {
        kod: `% Normal dağılımın formülü ve randn ile üretilen örnekler
mu = 0;  sigma = 1;
x = -4:0.01:4;
P = exp(-(x - mu).^2 / (2*sigma^2)) / (sqrt(2*pi)*sigma);
alan = trapz(x, P)                    % 1'e çok yakın

rng(4)
v = mu + sigma*randn(1, 20000);
oran1 = mean(abs(v - mu) < sigma)     % yaklaşık 0.68
oran2 = mean(abs(v - mu) < 2*sigma)   % yaklaşık 0.95

histogram(v, 50, 'Normalization', 'pdf')
hold on
plot(x, P, 'r', 'LineWidth', 2)
hold off
title('randn örnekleri ve normal pdf')`,
        gorev: "sigma'yı 0.5 yap. Tepe yüksekliği ne oldu? oran1 ve oran2 değişti mi?",
      },
      dene: ["h1-gauss-68"],
    },
    {
      baslik: "Rastgele sayılarla gürültü üretmek",
      metin: md(`
**Neden önemli?** Bir filtrenin gürültüye nasıl tepki verdiğini denemek için çoğu zaman gürültüyü kendimiz üretiriz. Elimizdeki tek araç düzgün dağılımlı bir rastgele sayı üreteci olsa bile Gauss gürültü üretebiliriz.

Programlama dillerinin çoğunda 0 ile 1 arasında **düzgün dağılımlı** sayılar üreten bir fonksiyon vardır; bunu RND diye adlandıralım (MatStudio'da ~rand~). Düzgün dağılımda aralıktaki her değerin olasılığı aynıdır, pdf'i 0 ile 1 arasında düz bir çizgidir. Ortalaması **0,5**, standart sapması $1/\\sqrt{12} \\approx$ **0,29**'dur.

İki RND toplanınca sonuç 0 ile 2 arasında değişir ama artık düzgün değildir: 1 civarındaki toplamları veren birçok birleşim varken 0 ya da 2'yi veren çok az birleşim vardır. Toplamın pdf'i **üçgen** biçimlidir; ortalaması **1**, standart sapması $1/\\sqrt{6} \\approx 0{,}41$'dir.

Genel kural: bağımsız k RND toplanınca ortalamalar ve **varyanslar** toplanır. Ortalama $k/2$, varyans $k/12$, standart sapma $\\sqrt{k/12}$ olur. Merkezi limit teoremi gereği k büyüdükçe biçim çana yaklaşır.

**On iki RND.** k = 12 seçilirse toplamın ortalaması 6, varyansı 12/12 = 1, yani standart sapması tam **1** olur ve dağılım neredeyse Gauss'tur. İstenen ortalama μ ve standart sapma σ olan bir Gauss gürültü örneği şöyle üretilir:

$$x = \\left(\\sum_{j=1}^{12} RND_j - 6\\right)\\cdot\\sigma + \\mu$$

Önce 6 çıkarılarak ortalama sıfıra çekilir, σ ile çarpılarak genişlik ayarlanır, sonra μ eklenir.

[[G-H1-08]]

> **Çözümlü örnek:** 12 RND'nin toplamı 7,2 çıktı. Ortalaması 10, standart sapması 0,5 olan gürültüde bu örnek hangi değeri verir?
>
> 1. Ortalamayı sıfıra çek: 7,2 − 6 = 1,2.
> 2. Ölçekle: 1,2 · 0,5 = 0,6.
> 3. Ortalamayı ekle: 0,6 + 10 = 10,6.

> **Sık hata:** Standart sapmalarını toplamak. İki RND'nin toplamında σ, 0,29 + 0,29 = 0,58 değil √(1/12 + 1/12) ≈ 0,41'dir; toplanan varyanslardır.

Aşağıdaki betik iki RND'nin toplamını üretiyor.
`),
      matlab: {
        kod: `% İki düzgün rastgele sayının toplamı: üçgen dağılım
rng(5)
N = 20000;
x = rand(1, N) + rand(1, N);

mu = mean(x)        % kuram: 1
sigma = std(x)      % kuram: 1/sqrt(6) = 0.408

histogram(x, 40, 'Normalization', 'pdf')
title('RND + RND')
xlabel('toplam')`,
        gorev: "Bir for döngüsüyle 12 rand(1, N) topla, 6 çıkar ve histogramı çiz. Ortalama 0, standart sapma 1 çıkıyor mu?",
      },
      dene: ["h1-rnd-sigma"],
    },
    {
      baslik: "Kesinlik ve doğruluk",
      metin: md(`
**Neden önemli?** Bir ölçüm iki farklı biçimde kötü olabilir ve ikisinin çaresi farklıdır. Hangisiyle karşı karşıya olduğunu bilmek, sorunu ortalama alarak mı yoksa kalibrasyonla mı çözeceğini söyler.

Bir sonar sistemiyle 1000 metre uzaklıktaki bir hedefin mesafesini defalarca ölçtüğümüzü düşünelim. Ölçümler her seferinde biraz farklı çıkar ve histogramları çan biçiminde olur. Bu dağılımdan iki ayrı nitelik okunur:

- **Doğruluk** (*accuracy*): ölçümlerin **ortalamasının gerçek değere** ne kadar yakın olduğu. Ortalama 1003 m çıkıyorsa sistemde 3 m'lik bir **sistematik hata** vardır. Doğruluğu kötü bir sistemin çaresi **kalibrasyondur**.
- **Kesinlik** (*precision*): aynı büyüklük defalarca ölçüldüğünde sonuçların **birbirine ne kadar yakın** olduğu, yani dağılımın genişliği (standart sapması). Kesinliği kötü bir ölçüm **rastgele hata** içerir ve elektronik gürültü gibi rastgele etkilerden gelir. Çaresi çok sayıda ölçümün **ortalamasını almaktır**: N ölçümün ortalamasının rastgele hatası √N kat küçülür.

Ortalama almak rastgele hatayı azaltır ama sistematik hatayı hiç değiştirmez; kalibrasyon sistematik hatayı giderir ama ölçümlerin saçılmasını değiştirmez.

[[G-H1-09]]

Kesin ama doğru olmayan bir sistem her seferinde neredeyse aynı yanlış sonucu verir. Doğru ama kesin olmayan bir sistemin her bir ölçümü dağınıktır ama ortalamaları gerçek değere yakındır.

> **Çözümlü örnek:** Bir terazi 2,000 kg'lık bir ağırlığı beş kez tartıp 2,051; 2,049; 2,050; 2,052; 2,048 kg gösteriyor. Hangi sorun var?
>
> Sonuçlar birbirine çok yakın (σ yaklaşık 1,6 g): kesinlik iyi. Ama ortalama 2,050 kg, gerçek değerden 50 g uzak: doğruluk kötü. Çare kalibrasyon.

> **Sık hata:** Doğruluğu kötü bir sistemde daha çok ölçüm alıp ortalamaya güvenmek. Sistematik hata ortalamada aynen kalır.
`),
      matlab: {
        kod: `% Doğruluk ve kesinlik: sistematik ve rastgele hata
rng(6)
gercek = 1000;                   % metre
sapma = 3;                       % sistematik hata (kalibrasyon bozuk)
olcum = gercek + sapma + 1.6*randn(1, 200);

ortalama = mean(olcum)
dogruluk_hatasi = ortalama - gercek     % yaklaşık 3: ortalama alınca gitmez
kesinlik = std(olcum)                   % yaklaşık 1.6

% 25'erli grupların ortalamaları çok daha az saçılır
gruplar = reshape(olcum, 25, 8);
grup_ortalamalari = mean(gruplar)
std(grup_ortalamalari)                  % yaklaşık 1.6 / 5`,
        gorev: "sapma'yı 0 yap ve dogruluk_hatasi'nın nasıl değiştiğine bak. Sonra randn'nin önündeki 1.6'yı küçült: hangisi değişti?",
      },
      dene: ["h1-kesinlik"],
    },
  ],
  test: [
    "h1-dsp-genis-bant",
    "h1-adc-seviye",
    "h1-eksen-bagimli",
    "h1-ortalama-hesap",
    "h1-dc-ac",
    "h1-sinus-vrms",
    "h1-binning",
    "h1-gauss-uc-sigma",
    "h1-rnd-12",
    "h1-kalibrasyon",
  ],
};
