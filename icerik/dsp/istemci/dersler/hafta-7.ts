import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_7: Ders = {
  hafta: 7,
  baslik: "Ayrık Fourier dönüşümü (DFT)",
  ozet: "Periyodik diziler için ayrık Fourier serisini ve sonlu diziler için DFT'yi; DFT'nin DTFT'nin örnekleri olduğunu, frekans eksenini ve sıfır doldurmayı; doğrusallık, simetri ve dairesel kaydırmayı; dairesel konvolüsyonu, doğrusal konvolüsyonla ilişkisini ve uzun sinyaller için örtüşme-ekleme ile örtüşme-kaydetme yöntemlerini öğren.",
  bolumler: [
    {
      baslik: "Ayrık Fourier serisinden DFT'ye",
      metin: md(`
**Neden önemli?** DTFT, ω'nın sürekli bir fonksiyonudur: bilgisayar onu sonsuz sayıda noktada hesaplayamaz. Ayrık Fourier dönüşümü (DFT) sonlu uzunluklu bir diziyi sonlu sayıda frekans katsayısına götürür; bu yüzden pratikte "spektrum hesaplamak" DFT hesaplamak demektir.

| | DTFT | DFT |
|---|---|---|
| Giriş | sonsuz uzunluklu olabilir | N örneklik sonlu dizi |
| Çıkış | ω'nın sürekli fonksiyonu | N karmaşık katsayı, X(k) |

**Ayrık Fourier serisi (DFS).** N ile periyodik bir $\\tilde x(n)$ dizisi, harmonik ilişkili N karmaşık üstelin toplamına ayrıştırılabilir:

$$\\tilde x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} \\tilde X(k)\\,e^{j2\\pi kn/N}, \\qquad \\tilde X(k) = \\sum_{n=0}^{N-1} \\tilde x(n)\\,e^{-j2\\pi kn/N}$$

Katsayı formülü, açılımın iki yanı $e^{-j2\\pi nl/N}$ ile çarpılıp bir periyot boyunca toplanarak bulunur; bunu mümkün kılan, bu üstellerin birbirine **dik** (ortogonal) olmasıdır. $\\tilde X(k)$ katsayıları da k'ye göre N ile periyodiktir.

**Sonlu diziden periyodik diziye.** x(n), 0..N − 1 dışında sıfır olan N örneklik bir dizi olsun. Onu her N örnekte bir tekrarlayarak periyodik bir dizi kurabiliriz:

$$\\tilde x(n) = x((n))_N$$

Burada $((n))_N$, "n modülo N" demektir: n = rN + l ve 0 ≤ l < N ise $((n))_N = l$.

[[G-H7-01]]

**DFT.** Periyodik uzantının bir periyodu x(n)'in kendisidir. DFS katsayılarının bir periyodunu alırsak N noktalı DFT'yi buluruz:

$$X(k) = \\sum_{n=0}^{N-1} x(n)\\,e^{-j2\\pi kn/N}, \\qquad k = 0, 1, \\dots, N-1$$

**DTFT ile ilişki.** Bu formülü DTFT tanımıyla karşılaştırınca DFT katsayılarının DTFT'nin eşit aralıklı örnekleri olduğu görülür:

$$X(k) = X(e^{j\\omega})\\Big|_{\\omega = 2\\pi k/N}$$

z-dönüşümüyle söylersek: X(k), X(z)'nin **birim çember** üzerinde eşit aralıklı N noktadaki ($z = e^{j2\\pi k/N}$) değerleridir. Tanım hem gerçel hem karmaşık diziler için geçerlidir.

> **Çözümlü örnek:** Periyodu 4 olan ve her periyotta yalnızca n = 0'da 1, diğer üç noktada 0 olan dizinin DFS katsayıları nedir?
>
> 1. $\\tilde X(k) = \\sum_{n=0}^{3} \\tilde x(n)\\,e^{-j2\\pi kn/4} = 1\\cdot e^0 = 1$.
> 2. Bütün k'ler için $\\tilde X(k) = 1$: periyodik dürtü katarı bütün harmonikleri eşit genlikle içerir.

> **Sık hata:** DFT'yi yeni ve bağımsız bir dönüşüm sanmak. DFT, sonlu dizinin DTFT'sinden alınmış N örnektir; DTFT'de olmayan bir şey göstermez.
`),
      matlab: {
        kod: `x = [1 2 1 0];
N = length(x);
n = 0:N-1;
X = fft(x)                         % MatStudio'da DFT = fft

wk = 2*pi*(0:N-1)/N;               % DFT frekansları
Xd = x * exp(-1j * n' * wk)        % DTFT'yi aynı noktalarda hesapla
fark = max(abs(X - Xd))            % yaklaşık 0

% Periyodik uzatma: mod ile indeks
m = -4:7;
xp = x(mod(m, N) + 1);
stem(m, xp), title('x((n)) mod 4')`,
        gorev: "x'in sonuna iki sıfır ekle. X kaç katsayıya çıktı? X(1) değişti mi, neden?",
      },
      dene: ["h7-dft-ornek"],
    },
    {
      baslik: "DFT ve ters DFT hesabı",
      metin: md(`
**Neden önemli?** Küçük bir DFT'yi elle hesaplayabilmek, MatStudio'nun verdiği sonucu yorumlamayı ve sınavda kısa yoldan sonuca gitmeyi sağlar.

Kısaltma için $W_N = e^{-j2\\pi/N}$ yazılır. Böylece DFT ve ters DFT:

$$X(k) = \\sum_{n=0}^{N-1} x(n)\\,W_N^{kn}, \\qquad x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} X(k)\\,W_N^{-kn}$$

Ters dönüşümde üssün işareti artıdır ve önde **1/N** çarpanı vardır. Akılda tutulacak değerler: $W_4 = -j$, $W_4^2 = -1$, $W_N^{N/2} = -1$, $W_N^N = 1$.

**Diklik.** Taban üstellerin bir periyot boyunca toplamı

$$\\sum_{n=0}^{N-1} e^{j2\\pi kn/N} = \\begin{cases} N & k = 0 \\\\ 0 & k = 1, \\dots, N-1 \\end{cases}$$

olur: k sıfırdan farklıysa noktalar birim çembere eşit dağılır ve toplamları sıfırdır. Ters DFT'nin x(n)'i geri vermesini sağlayan budur.

[[G-H7-03]]

**Yararlı kısa yollar.**
- $X(0) = \\sum_n x(n)$: ilk katsayı örneklerin toplamıdır.
- N çiftse $X(N/2) = \\sum_n x(n)(-1)^n$.
- $\\delta(n - n_0)$ dizisinin DFT'si $W_N^{kn_0}$'dır; δ(n)'in DFT'si her k için 1'dir.
- Ters yönde: her k için sabit c olan X(k)'nın ters DFT'si $c\\,\\delta(n)$'dir; $X(k) = c\\,\\delta(k)$'nın ters DFT'si her n için c/N'dir.

**İşlem yükü.** Tanımdan doğrudan hesapta N katsayının her biri N terimli bir toplamdır: yaklaşık $N^2$ karmaşık çarpma. Gelecek hafta göreceğimiz FFT bunu $N\\log_2 N$ mertebesine indirir.

> **Çözümlü örnek:** $x(n) = \\delta(n) + \\delta(n-2)$ dizisinin 4 noktalı DFT'si nedir?
>
> 1. $X(k) = W_4^{0} + W_4^{2k} = 1 + (-1)^k$.
> 2. k = 0, 1, 2, 3 için: X(0) = 2, X(1) = 0, X(2) = 2, X(3) = 0.

> **Çözümlü örnek:** 6 noktalı X(k), k = 0'da 4, diğer k'lerde 1 ise x(n) nedir?
>
> 1. X(k) = 1 + 3δ(k) yaz.
> 2. Sabit 1'in ters DFT'si δ(n); 3δ(k)'nın ters DFT'si her n için 3/6 = 0,5.
> 3. x(n) = δ(n) + 0,5: x(0) = 1,5, diğer örnekler 0,5.
`),
      matlab: {
        kod: `x = [1 0 1 0];
N = length(x);
n = 0:N-1;
k = (0:N-1)';
W = exp(-1j*2*pi*k*n/N);   % DFT matrisi: W(k+1, n+1) = W_N^(kn)
X = W * x'                 % [2 0 2 0]'
X2 = fft(x)                % aynı sonuç, satır olarak

xg = ifft(X2)              % ters DFT x'i geri verir

% Diklik: k = 1 için üstellerin toplamı
toplam = sum(exp(1j*2*pi*1*n/N))`,
        gorev: "x = [1 2 3 4] için X(0) ile sum(x)'i karşılaştır. N = 4 için X(2) neden 1 − 2 + 3 − 4?",
      },
      dene: ["h7-dft-4nokta"],
    },
    {
      baslik: "Frekans ekseni, çözünürlük ve sıfır doldurma",
      metin: md(`
**Neden önemli?** Bir DFT çıktısının k ekseni frekansa çevrilmeden okunamaz. Bir sinyalin spektrumunda "1 kHz'de tepe var" diyebilmek için hangi k'nin hangi frekans olduğunu bilmek gerekir.

**k'den frekansa.** k. katsayı $\\omega_k = 2\\pi k/N$ rad/örnek frekansına karşılık gelir. Sinyal $f_s$ ile örneklenmişse bu, Hz cinsinden

$$f_k = k\\,\\frac{f_s}{N}$$

eder. Komşu iki katsayı arasındaki aralık $\\Delta f = f_s/N$'dir.

**Negatif frekanslar.** DFT 2π ile periyodiktir; π < ω_k < 2π aralığı −π < ω < 0 ile aynıdır. Bu yüzden N/2'den büyük k indisleri **negatif frekanslara** karşılık gelir. Gerçel bir sinyalde bu yarı, ilk yarının aynasıdır.

**Sıfır doldurma.** N örneklik bir dizinin sonuna sıfır ekleyip daha uzun bir DFT alırsak DTFT değişmez; yalnızca o DTFT'den **daha sık örnek** alınır. Grafik daha düzgün görünür ama yeni bilgi gelmez: birbirine çok yakın iki frekansı ayırmak için sıfır değil, daha uzun bir **kayıt** gerekir.

[[G-H7-02]]

> **Çözümlü örnek:** fs = 1000 Hz ile örneklenmiş 50 örneklik bir kaydın DFT'sinde k = 5 kaç Hz'dir? Frekans aralığı nedir?
>
> 1. Δf = fs/N = 1000/50 = 20 Hz.
> 2. f₅ = 5 · 20 = 100 Hz.
> 3. Kayıt uzatılmadan 200 noktaya sıfırla doldurulsa aralık 5 Hz olur; ama 20 Hz'den yakın iki tepe yine ayrılamaz.

> **Sık hata:** "N'yi büyüttüm, çözünürlük arttı" demek. Sıfır doldurarak büyütülen N yalnızca çizimi sıklaştırır; ayırma gücünü kaydın süresi belirler.
`),
      matlab: {
        kod: `fs = 1000;
n = 0:39;
x = cos(2*pi*100*n/fs) + 0.5*cos(2*pi*250*n/fs);

N = length(x);
X = fft(x);
f = (0:N-1) * fs / N;             % k -> Hz
[tepe, i] = max(abs(X(1:N/2)));
tepeFrekans = f(i)                 % 100 Hz

% Sıfır doldurma: aynı DTFT, daha sık örnek
N2 = 256;
X2 = fft(x, N2);
f2 = (0:N2-1) * fs / N2;
plot(f2(1:N2/2), abs(X2(1:N2/2))), hold on
stem(f(1:N/2), abs(X(1:N/2)))
xlabel('f (Hz)'), legend('256 nokta', '40 nokta')`,
        gorev: "İkinci kosinüsün frekansını 110 Hz yap. 40 noktalı DFT iki tepeyi ayırabiliyor mu? N2 = 1024 yapmak işe yarıyor mu?",
      },
      dene: ["h7-sifir-doldurma"],
    },
    {
      baslik: "DFT özellikleri: doğrusallık, simetri ve Parseval",
      metin: md(`
**Neden önemli?** Özellikler, uzun hesapları kısaltır ve sonucun doğru olup olmadığını hızla denetlemeye yarar: gerçel bir sinyalin DFT'si simetrik çıkmadıysa bir yerde hata vardır.

**Doğrusallık.** $x_1(n)$ ve $x_2(n)$'nin N noktalı DFT'leri $X_1(k)$ ve $X_2(k)$ ise

$$a\\,x_1(n) + b\\,x_2(n) \\;\\xrightarrow{\\text{DFT}}\\; a\\,X_1(k) + b\\,X_2(k)$$

Bunun için iki DFT **aynı uzunlukta** olmalıdır. Uzunluklar farklıysa (N₁ < N₂) kısa dizinin sonuna N₂ − N₁ sıfır eklenir ve ikisinin de N₂ noktalı DFT'si alınır.

**Simetri.**
- x(n) **gerçel** ise X(k) **eşlenik simetriktir**: $X(N-k) = X^*(k)$. Gerçel kısım k = N/2'ye göre aynalı, sanal kısım ters işaretle aynalıdır. X(0) ve (N çiftse) X(N/2) gerçeldir.
- x(n) **saf sanal** ise X(k) **eşlenik antisimetriktir**: $X(N-k) = -X^*(k)$.
- x(n) gerçel ve çiftse ($x(n) = x((-n))_N$) X(k) gerçeldir.

[[G-H7-04]]

**Parseval.** Zamandaki enerji frekanstan da hesaplanabilir:

$$\\sum_{n=0}^{N-1} |x(n)|^2 = \\frac{1}{N}\\sum_{k=0}^{N-1} |X(k)|^2$$

> **Çözümlü örnek:** Gerçel bir dizinin 6 noktalı DFT'sinde X(2) = 1 + j ise X(4) nedir?
>
> 1. Eşlenik simetri: X(6 − 2) = X*(2).
> 2. X(4) = 1 − j.

> **Sık hata:** Gerçel dizinin DFT'sinin de gerçel olduğunu sanmak. Gerçel dizinin DFT'si genelde karmaşıktır; yalnızca simetriktir.
`),
      matlab: {
        kod: `x = [2 1 -1 0.5 1 0 -0.5 1];      % gerçel dizi
N = length(x);
X = fft(x);
k = 1:N-1;
simetri = max(abs(X(N-k+1) - conj(X(k+1))))   % X(N-k) = X*(k): 0

enerjiZaman = sum(abs(x).^2)
enerjiFrekans = sum(abs(X).^2) / N               % Parseval: aynı

% Doğrusallık: farklı uzunlukları eşitle
a = [1 2];
b = [1 0 -1 3];
sol = fft(2*[a 0 0] + b);
sag = 2*fft(a, 4) + fft(b);
dogrusallik = max(abs(sol - sag))`,
        gorev: "x'i karmaşık yap (x = x + 1j*fliplr(x)). Simetri ölçüsü hâlâ sıfır mı?",
      },
      dene: ["h7-parseval-dft"],
    },
    {
      baslik: "Dairesel kaydırma",
      metin: md(`
**Neden önemli?** DFT, diziyi periyodik kabul eder. Bu yüzden bir diziyi kaydırdığımızda sondan taşan örnekler kaybolmaz, başa döner. Bu "dairesel" bakış, bir sonraki bölümdeki dairesel konvolüsyonun temelidir.

**Tanım.** N örneklik x(n)'in $n_0$ kadar dairesel kayması

$$y(n) = x((n - n_0))_N\\, R_N(n)$$

dir. $R_N(n)$, 0 ≤ n ≤ N − 1'de 1, dışında 0 olan dikdörtgen penceredir: periyodik uzantı kaydırılır ve bir periyodu alınır.

**Çember resmi.** Dizinin N değerini bir çemberin üzerine dizdiğimizi düşünelim. Sağa $n_0$ kadar dairesel kaydırma, çemberi saat yönünde $n_0$ konum döndürmektir. Sondaki $n_0$ örnek başa geçer.

[[G-H7-05]]

**DFT'ye etkisi.** Zamanda dairesel kaydırma, frekansta karmaşık üstelle çarpmadır:

$$x((n - n_0))_N \\;\\xrightarrow{\\text{DFT}}\\; W_N^{kn_0}\\,X(k) = e^{-j2\\pi kn_0/N}X(k)$$

$|W_N^{kn_0}| = 1$ olduğundan **büyüklük değişmez**, yalnızca faz değişir. Tersine, zamanda karmaşık üstelle çarpma frekansta dairesel kaydırmadır: $W_N^{-k_0 n}x(n) \\rightarrow X((k - k_0))_N$.

> **Çözümlü örnek:** x(n), n = 0..3 için 1, 2, 3, 4 ise $x((n-1))_4$ nedir? ((−1))₄ kaçtır?
>
> 1. −1 = −1·4 + 3, yani ((−1))₄ = 3.
> 2. y(0) = x(3) = 4, y(1) = x(0) = 1, y(2) = x(1) = 2, y(3) = x(2) = 3.
> 3. Sondaki örnek başa geçti: 4, 1, 2, 3.

> **Sık hata:** Negatif sayının modülosunu negatif bırakmak. $((n))_N$ her zaman 0 ile N − 1 arasındadır; MatStudio'da ~mod~ da böyle çalışır, ~rem~ ise işareti korur.
`),
      matlab: {
        kod: `x = [1 2 3 4];
N = length(x);
n0 = 1;
y = circshift(x, n0)               % dairesel kaydırma
y2 = x(mod((0:N-1) - n0, N) + 1)   % aynı sonuç, modülo ile

k = 0:N-1;
X = fft(x);
Y = fft(y);
oran = Y ./ X                      % e^(-j2πk n0/N)
beklenen = exp(-1j*2*pi*k*n0/N)
buyuklukFarki = max(abs(abs(Y) - abs(X)))   % 0`,
        gorev: "n0 = 4 yap. y neden x'e eşit oldu? n0 = −1 ne yapıyor?",
      },
      dene: ["h7-modulo"],
    },
    {
      baslik: "Dairesel konvolüsyon",
      metin: md(`
**Neden önemli?** İki DFT'yi çarpıp ters DFT aldığımızda elde ettiğimiz şey doğrusal değil **dairesel** konvolüsyondur. DFT ile filtreleme yapacaksak bu farkı bilmek zorundayız.

**Periyodik konvolüsyon.** $\\tilde h(n)$ ve $\\tilde x(n)$ N ile periyodik ve DFS katsayıları $\\tilde H(k)$, $\\tilde X(k)$ ise $\\tilde Y(k) = \\tilde H(k)\\tilde X(k)$ katsayılı dizi

$$\\tilde y(n) = \\sum_{m=0}^{N-1} \\tilde h(m)\\,\\tilde x(n - m)$$

periyodik konvolüsyonudur. Doğrusal konvolüsyondan tek farkı, toplamın tüm m'ler üzerinden değil **tek bir periyot** üzerinden alınmasıdır.

**Dairesel konvolüsyon.** N örneklik h(n) ve x(n) için $Y(k) = H(k)X(k)$ çarpımının ters DFT'si

$$y(n) = h(n) \\circledast_N x(n) = \\sum_{m=0}^{N-1} h(m)\\,x((n - m))_N$$

dir. Bu, periyodik uzantıların periyodik konvolüsyonunun bir periyodudur.

**Hesap yolu.** Doğrusal konvolüsyondaki "ters çevir ve kaydır" aynen geçerlidir; fark, kaydırmanın dairesel olmasıdır. Uygulamada iki iç içe çember kullanılır: dış çemberde x(m), iç çemberde ters çevrilmiş h. Her n'de iç çember bir konum döner; aynı hizadaki değerler çarpılıp toplanır.

[[G-H7-06]]

> **Çözümlü örnek:** x(n) = 1, 2, 3, 4 ve h(n) = 1, 1, 0, 0 (n = 0..3). 4 noktalı dairesel konvolüsyon nedir?
>
> 1. h yalnızca m = 0 ve m = 1'de 1: $y(n) = x(n) + x((n-1))_4$.
> 2. y(0) = 1 + x(3) = 5, y(1) = 2 + 1 = 3, y(2) = 3 + 2 = 5, y(3) = 4 + 3 = 7.
> 3. Doğrusal konvolüsyon 1, 3, 5, 7, 4 olurdu: sondaki 4, dairesel sonuçta başa eklendi.

> **Sık hata:** N noktalı dairesel konvolüsyonu M noktalıyla (M ≠ N) aynı sanmak. Dairesel konvolüsyonun sonucu seçilen N'ye bağlıdır.
`),
      matlab: {
        kod: `x = [1 2 3 4];
h = [1 1 0 0];
N = 4;

% Tanımdan: y(n) = toplam h(m) x((n-m)) mod N
y = zeros(1, N);
for n = 0:N-1
  for m = 0:N-1
    y(n+1) = y(n+1) + h(m+1) * x(mod(n-m, N) + 1);
  end
end
y

% DFT ile: çarp, ters al
y2 = ifft(fft(x) .* fft(h))

dogrusal = conv(x, h)`,
        gorev: "N = 5 yap (x ve h'ye birer sıfır ekle). Dairesel sonuç doğrusal sonuçla aynı oldu mu?",
      },
      dene: ["h7-dairesel-dft"],
    },
    {
      baslik: "Dairesel ve doğrusal konvolüsyon; DFT ile konvolüsyon",
      metin: md(`
**Neden önemli?** Filtreleme doğrusal konvolüsyondur. DFT'nin hızından yararlanmak için dairesel konvolüsyonu doğrusal konvolüsyona eşit hale getirmeyi bilmek gerekir.

**İlişki.** x(n) ve h(n) sonlu diziler, $y(n) = x(n) * h(n)$ doğrusal konvolüsyon olsun. N noktalı dairesel konvolüsyon

$$y_N(n) = \\Big[\\sum_{r=-\\infty}^{\\infty} y(n + rN)\\Big] R_N(n)$$

olur: doğrusal sonuç N'lik parçalara bölünür ve parçalar üst üste toplanır. Buna **zamanda örtüşme** denir.

**Eşitlik koşulu.** x(n) N₁, h(n) N₂ örnekliyse y(n) $N_1 + N_2 - 1$ örnekliktir. N bu uzunluktan küçük değilse taşan örnek kalmaz:

$$N \\ge N_1 + N_2 - 1 \\;\\Rightarrow\\; y_N(n) = y(n)$$

N daha küçükse doğrusal sonucun N'den sonraki örnekleri başa katlanıp eklenir.

[[G-H7-07]]

**DFT ile doğrusal konvolüsyon.** Dört adım:
1. h(n) ve x(n)'i $N \\ge N_1 + N_2 - 1$ uzunluğa sıfırla doldur.
2. İkisinin N noktalı DFT'sini al.
3. DFT'leri çarp: Y(k) = H(k)X(k).
4. Y(k)'nın ters DFT'sini al.

[[G-H7-08]]

Kâğıt üstünde bu yol konvolüsyon toplamından uzundur. Ama DFT'ler **FFT** ile verimli hesaplanınca uzun dizilerde büyük işlem tasarrufu sağlar.

> **Çözümlü örnek:** x(n) 3 örnek (1, 2, 3), h(n) 2 örnek (1, 1). Doğrusal sonuç 1, 3, 5, 3'tür. 3 noktalı dairesel konvolüsyon nedir? En az kaç nokta gerekir?
>
> 1. Doğrusal uzunluk 3 + 2 − 1 = 4. N = 3 yetmez.
> 2. Taşan y(3) = 3, n = 0'a katlanır: y₃(0) = 1 + 3 = 4, y₃(1) = 3, y₃(2) = 5.
> 3. N ≥ 4 seçilirse dairesel sonuç doğrusal sonuca eşit olur.
`),
      matlab: {
        kod: `x = [1 2 3 2];
h = [1 1 1];
N1 = length(x);  N2 = length(h);
L = N1 + N2 - 1                    % 6

dogrusal = conv(x, h)
kisa = ifft(fft(x, 4) .* fft(h, 4))     % N = 4: örtüşme var
tam = ifft(fft(x, L) .* fft(h, L))      % N = L: doğrusalla aynı

% Örtüşmeyi elle kur: taşan örnekleri başa ekle
y = dogrusal;
katlanmis = y(1:4);
katlanmis(1:2) = katlanmis(1:2) + y(5:6)`,
        gorev: "fft(x, 5) ve fft(h, 5) ile dene. Hangi örnek bozuldu? Neden yalnızca o?",
      },
      dene: ["h7-uzunluk-n"],
    },
    {
      baslik: "Blok konvolüsyon: örtüşme-ekleme ve örtüşme-kaydetme",
      metin: md(`
**Neden önemli?** Ses gibi çok uzun (ya da hiç bitmeyen) bir sinyali tek bir dev DFT ile filtrelemek hem çok bellek ister hem de bütün kayıt bitene kadar beklemeyi gerektirir. Çözüm, girişi bloklara bölüp her bloğu ayrı filtrelemektir: **blok konvolüsyon**. İki yöntem vardır.

**Örtüşme-ekleme (overlap-add).** h(n) L örneklik nedensel bir FIR filtre, x(n) çok uzun bir giriş olsun.
1. x(n) **örtüşmeyen** M örneklik bloklara bölünür: $x(n) = \\sum_i x_i(n - iM)$.
2. Her blok h(n) ile konvolüsyona girer; $y_i(n)$ uzunluğu $N = L + M - 1$'dir. Bu, N noktalı DFT'lerin çarpımıyla hesaplanır.
3. Komşu $y_i$ ve $y_{i+1}$ çıkışları $N - M = L - 1$ örnek **örtüşür**; örtüşen örnekler **toplanır**: $y(n) = \\sum_i y_i(n - iM)$.

[[G-H7-09]]

**Örtüşme-kaydetme (overlap-save).** Dairesel konvolüsyondaki örtüşme dizinin yalnızca başını bozar: N noktalı dairesel konvolüsyonun **ilk L − 1 örneği** bozuktur, **son N − L + 1 örneği** doğrusal konvolüsyonla aynıdır.
1. x(n)'in başına L − 1 sıfır eklenir ve giriş **L − 1 örnek örtüşen** N örneklik bloklara bölünür.
2. Her blok h(n) ile N noktalı dairesel konvolüsyona sokulur.
3. Her sonucun ilk L − 1 örneği **atılır**, son N − L + 1 örneği **kaydedilir** ve sırayla yan yana konur.

[[G-H7-10]]

| | Örtüşme-ekleme | Örtüşme-kaydetme |
|---|---|---|
| Giriş blokları | örtüşmez (M örnek) | L − 1 örnek örtüşür (N örnek) |
| Her bloktan | N = L + M − 1 örneklik çıkış | ilk L − 1 örnek atılır |
| Birleştirme | örtüşen kuyruklar toplanır | kalan örnekler yan yana konur |

> **Çözümlü örnek:** L = 3 örneklik filtre ve M = 4 örneklik bloklarla örtüşme-ekleme yapılıyor. Her bloğun çıkışı kaç örnektir? İkinci bloğun çıkışı y(n)'in hangi indisinden başlar? Örtüşme-kaydetmede N = 8 seçilirse her bloktan kaç örnek kaydedilir?
>
> 1. Örtüşme-ekleme: N = 3 + 4 − 1 = 6 örnek.
> 2. İkinci blok n = 4'ten başlar; ilk bloğun son 2 örneğiyle (n = 4, 5) toplanır.
> 3. Örtüşme-kaydetme: atılan L − 1 = 2, kaydedilen 8 − 3 + 1 = 6 örnek.
`),
      matlab: {
        kod: `h = [1 1 1] / 3;                % L = 3
x = [1 2 1 3 2 1 2 3 1 1 2 1];  % 12 örneklik giriş
L = length(h);  M = 4;
N = L + M - 1;                  % her bloğun çıkış boyu
H = fft(h, N);

% Örtüşme-ekleme
y = zeros(1, length(x) + L - 1);
for i = 0:length(x)/M - 1
  blok = x(i*M+1 : i*M+M);
  yb = ifft(fft(blok, N) .* H);
  y(i*M+1 : i*M+N) = y(i*M+1 : i*M+N) + yb;
end
y
fark = max(abs(y - conv(x, h)))   % 0

stem(0:length(y)-1, y), title('örtüşme-ekleme ile filtrelenmiş çıkış')`,
        gorev: "M = 6 yap. Döngü kaç kez döndü? Sonuç değişti mi?",
      },
      dene: ["h7-os-fark"],
    },
  ],
  test: [
    "h7-dfs-kosinus",
    "h7-dft-delta",
    "h7-ters-dft",
    "h7-k-frekans",
    "h7-esl-simetri",
    "h7-dairesel-kaydir",
    "h7-dairesel-hesap",
    "h7-ortusme-hesap",
    "h7-oa-hesap",
    "h7-os-atilan",
  ],
};
