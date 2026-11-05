import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_3: Ders = {
  hafta: 3,
  baslik: "Ayrık zamanlı sinyaller ve sistemler",
  ozet: "Birim dürtü, basamak ve rampa dizilerini; üstel ve sinüzoidal dizileri ve periyodikliği; çift-tek ayrıştırmayı; kaydırma, ters çevirme ve ölçeklemeyi; enerji ve gücü; bir diziyi dürtülerle yazmayı; doğrusallık, zamanla değişmezlik, nedensellik, kararlılık ve tersinirliği; LTI sistemleri öğren.",
  bolumler: [
    {
      baslik: "Ayrık zamanlı sinyal",
      metin: md(`
**Neden önemli?** Bu haftadan sonra her şey diziler üzerinde yürür. Bir dizinin nasıl yazıldığını ve n = 0'ın nerede olduğunu doğru okumak, kaydırma ve konvolüsyon gibi işlemlerin ön koşuludur.

Sinyal işleme, zamanla değişen fiziksel süreçleri inceleyen bilimdir ve iki kola ayrılır. Zaman içinde sürekli olan ve sürekli bir genlik aralığında değer alabilen dalga biçimine **analog** denir; osiloskopta görülen bir gerilim buna örnektir. Aslında daha doğru ad **sürekli** sinyaldir, bu yüzden bu derste "sürekli sinyal" diyoruz.

**Ayrık zamanlı sinyal**, bağımsız zaman değişkeni nicelenmiş, yani değeri yalnızca belirli anlarda bilinen sinyaldir. Sürekli bir dalga biçimiyle değil, bir **değerler dizisiyle** gösterilir: $x(n)$ ya da $x[n]$, burada $n$ bir tamsayıdır. n tamsayı olmayan yerlerde $x(n)$ sıfır değildir, **tanımsızdır**. Genliği de nicelenmiş ayrık sinyale dijital (sayısal) sinyal denir.

Bir dizi elemanlarıyla yazıldığında n = 0'daki eleman bir okla (↑) ya da altı çizilerek işaretlenir:

$$x(n) = \\{\\,\\ldots,\\ 0,\\ 2,\\ \\underset{\\uparrow}{1},\\ -1,\\ 3,\\ 0,\\ \\ldots\\}$$

Burada $x(0) = 1$, $x(-1) = 2$, $x(1) = -1$, $x(2) = 3$'tür. Ok yoksa ilk elemanın n = 0 olduğu kabul edilir.

**Sonlu ve sonsuz uzunluk.** Yalnızca $N_1 \\le n \\le N_2$ aralığında tanımlı bir dizinin uzunluğu $N_2 - N_1 + 1$'dir. MatStudio'da bir dizi iki vektörle tutulur: değerler (~x~) ve onların n konumları (~n~). Böylece n = 0'ın nerede olduğu kaybolmaz.

> **Sık hata:** MatStudio vektörünün indisini n sanmak. ~x(1)~ vektörün ilk elemanıdır; o elemanın n değeri ~n(1)~'dir ve −3 ya da 5 olabilir.
`),
      dene: ["h3-dizi-okuma"],
    },
    {
      baslik: "Temel diziler: dürtü, basamak ve rampa",
      metin: md(`
**Neden önemli?** Karmaşık sinyaller bu basit dizilerin kaydırılmış ve ölçeklenmiş toplamlarıyla yazılır. Özellikle birim dürtü, bir sistemi tamamen tanımlayan "dürtü yanıtının" girişidir.

**Birim dürtü** (birim örnek, *unit impulse / unit sample*):

$$\\delta(n) = \\begin{cases} 1, & n = 0 \\\\ 0, & n \\ne 0 \\end{cases}$$

Yalnızca n = 0'da 1'dir. $\\delta(n - n_0)$ ise yalnızca $n = n_0$'da 1'dir.

**Birim basamak** (*unit step*):

$$u(n) = \\begin{cases} 1, & n \\ge 0 \\\\ 0, & n < 0 \\end{cases}$$

$u(n - n_0)$, $n \\ge n_0$ için 1'dir.

**Birim rampa** (*unit ramp*): $u_r(n) = n$ ($n \\ge 0$), 0 ($n < 0$). Başka bir yazımla $u_r(n) = n\\,u(n)$.

Bu diziler birbirine bağlıdır:

- Basamak, dürtülerin toplamıdır: $u(n) = \\sum_{k=-\\infty}^{n} \\delta(k)$.
- Dürtü, basamağın farkıdır: $\\delta(n) = u(n) - u(n-1)$.
- Sonlu bir **dikdörtgen darbe** iki basamağın farkıdır: $u(n) - u(n - N)$, n = 0..N−1 için 1'dir.

[[G-H3-01]]

> **Çözümlü örnek:** $x(n) = u(n+2) - u(n-3)$ hangi n değerlerinde 1'dir, kaç örnek uzunluğundadır?
>
> 1. $u(n+2)$, $n \\ge -2$ için 1; $u(n-3)$, $n \\ge 3$ için 1.
> 2. Fark $-2 \\le n \\le 2$ için 1, diğer yerlerde 0.
> 3. Uzunluk 2 − (−2) + 1 = 5 örnek.

> **Sık hata:** $u(n - 2)$'nin sola kaydığını sanmak. $n - n_0$ ifadesinde $n_0 > 0$ ise dizi **sağa** kayar (gecikme): basamak artık n = 2'de başlar.

MatStudio'da bu diziler mantıksal ifadelerle kurulur: ~(n == 0)~ dürtü, ~(n >= 0)~ basamak verir.
`),
      matlab: {
        kod: `n = -5:10;
d = double(n == 0);          % birim dürtü
u = double(n >= 0);          % birim basamak
r = n .* (n >= 0);           % birim rampa
pencere = (n >= 0) - (n >= 4);   % u(n) - u(n-4)

subplot(2, 2, 1), stem(n, d, 'filled'), title('\\delta(n)')
subplot(2, 2, 2), stem(n, u, 'filled'), title('u(n)')
subplot(2, 2, 3), stem(n, r, 'filled'), title('u_r(n)')
subplot(2, 2, 4), stem(n, pencere, 'filled'), title('u(n) - u(n-4)')`,
        gorev: "δ(n − 3) ve u(n + 2)'yi çiz. Sonra u(n) - u(n-1) farkının δ(n) olduğunu isequal ile doğrula.",
      },
      dene: ["h3-basamak-fark"],
    },
    {
      baslik: "Üstel ve sinüzoidal diziler",
      metin: md(`
**Neden önemli?** Doğrusal sistemlerin doğal yanıtları üsteldir ve Fourier analizinin yapı taşı karmaşık üsteldir. Ayrık sinüslerin her zaman periyodik olmadığını bilmek de sürekli zamanla ayrık zaman arasındaki önemli bir farktır.

**Gerçek üstel dizi:** $x(n) = a^n$, a gerçek bir sayı.

- $0 < a < 1$: dizi söner. $a > 1$: dizi büyür.
- $-1 < a < 0$: işaret her örnekte değişerek söner. $a < -1$: işaret değişerek büyür.

[[G-H3-02]]

**Karmaşık üstel dizi:** $x(n) = e^{(\\sigma + j\\omega_0)n} = e^{\\sigma n}\\left[\\cos(\\omega_0 n) + j\\sin(\\omega_0 n)\\right]$.

σ zarfı belirler: $\\sigma < 0$ sönüm, $\\sigma > 0$ büyüme, $\\sigma = 0$ sabit genlik (birim çember üzerinde dönen bir nokta). $\\omega_0$ ise radyan/örnek cinsinden açısal frekanstır ve salınım hızını belirler. Böyle bir diziyi görmek için gerçel ve sanal kısmını ya da genliğini ve fazını ayrı çizeriz.

[[G-H3-03]]

**Sinüzoidal dizi:** $x(n) = A\\cos(\\omega_0 n + \\theta_0)$. A genlik, $\\omega_0$ frekans (radyan/örnek), $\\theta_0$ radyan cinsinden fazdır.

**Periyodiklik.** Bir dizi her n için $x(n + N) = x(n)$ sağlıyorsa N periyotla periyodiktir; bunu sağlayan en küçük pozitif N **temel periyottur**. Sürekli zamandaki sinüsün aksine ayrık sinüs **her zaman periyodik değildir**: $\\cos(\\omega_0 n)$ ancak $\\omega_0 N = 2\\pi k$ olacak tamsayılar N ve k varsa periyodiktir, yani $\\omega_0 / 2\\pi$ **rasyonel** bir sayı olmalıdır. Temel periyot, $N = 2\\pi k / \\omega_0$'ı tamsayı yapan en küçük k ile bulunur.

İki periyodik dizinin toplamının periyodu, periyotların **en küçük ortak katıdır**.

> **Çözümlü örnek:** $x(n) = 3\\cos(0{,}1\\pi n + \\pi/3) + 2\\sin(0{,}5\\pi n)$ periyodik midir, periyodu nedir?
>
> 1. İlk terim: $\\omega_0 = 0{,}1\\pi$, $N_1 = 2\\pi k / 0{,}1\\pi = 20k$; k = 1 ile $N_1 = 20$.
> 2. İkinci terim: $\\omega_0 = 0{,}5\\pi$, $N_2 = 4k$; k = 1 ile $N_2 = 4$.
> 3. Toplamın periyodu ekok(20, 4) = 20.

> **Sık hata:** $\\cos(0{,}5n)$'nin periyodunu $2\\pi / 0{,}5 = 4\\pi$ diye vermek. Periyot tamsayı olmalıdır; $\\omega_0/2\\pi = 1/(4\\pi)$ rasyonel olmadığı için bu dizi **periyodik değildir**.
`),
      matlab: {
        kod: `% Karmaşık üstel dizi: x(n) = exp((-0.1 + j*pi/6) n)
n = -10:10;
x = exp((-0.1 + 1j*pi/6) * n);
subplot(2, 2, 1), stem(n, real(x)), title('Gerçel kısım')
subplot(2, 2, 2), stem(n, imag(x)), title('Sanal kısım')
subplot(2, 2, 3), stem(n, abs(x)), title('Genlik')
subplot(2, 2, 4), stem(n, angle(x)*180/pi), title('Faz (derece)')

% Periyodik mi? 20 örnek sonra aynı değerler mi geliyor?
m = 0:59;
s = 3*cos(0.1*pi*m + pi/3) + 2*sin(0.5*pi*m);
fark = max(abs(s(1:40) - s(21:60)))`,
        gorev: "s'deki 0.5*pi'yi 0.5 yap (pi'siz). fark artık sıfır çıkıyor mu? Neden?",
      },
      dene: ["h3-periyot", "h3-ustel-sonum"],
    },
    {
      baslik: "Simetri: çift ve tek diziler",
      metin: md(`
**Neden önemli?** Simetri hesapları kısaltır: çift bir sinyalin Fourier dönüşümü gerçeldir, tek bir sinyalinki sanaldır. Her diziyi bir çift ve bir tek parçanın toplamı olarak yazabilmek ileride sıkça işe yarar.

Gerçek değerli bir dizi her n için

- $x(n) = x(-n)$ sağlıyorsa **çifttir** (n = 0'a göre ayna simetrik), örneğin $\\cos(\\omega_0 n)$;
- $x(n) = -x(-n)$ sağlıyorsa **tektir** (ters simetrik), örneğin $\\sin(\\omega_0 n)$. Tek bir dizide $x(0) = 0$ olmak zorundadır.

**Her dizi** bir çift ve bir tek kısmın toplamı olarak yazılabilir: $x(n) = x_e(n) + x_o(n)$, burada

$$x_e(n) = \\tfrac{1}{2}\\left[x(n) + x(-n)\\right] \\qquad x_o(n) = \\tfrac{1}{2}\\left[x(n) - x(-n)\\right]$$

[[G-H3-04]]

**Karmaşık diziler** için simetri eşlenikle tanımlanır: $x(n) = x^*(-n)$ ise **eşlenik simetrik**, $x(n) = -x^*(-n)$ ise **eşlenik ters simetriktir**. Her karmaşık dizi bu ikisinin toplamıdır: $x_e(n) = \\tfrac{1}{2}[x(n) + x^*(-n)]$.

> **Çözümlü örnek:** $x(0) = 4$, $x(1) = 2$, $x(2) = 6$ olan ve başka yerde sıfır olan bir dizinin çift kısmının n = 2 ve n = −2'deki değerleri nedir? Tek kısmının n = 0'daki değeri nedir?
>
> 1. $x_e(2) = [x(2) + x(-2)]/2 = (6 + 0)/2 = 3$; çift kısım simetrik olduğu için $x_e(-2) = 3$.
> 2. $x_o(0) = [x(0) - x(0)]/2 = 0$. Tek kısmın n = 0'daki değeri her zaman 0'dır.

> **Sık hata:** $x(-n)$'yi hesaplarken değerleri ters sıraya dizip n = 0'ı yerinde bırakmamak. Ters çevirme n = 0 etrafında yapılır: $x(-n)$'nin n = −2'deki değeri $x(2)$'dir.
`),
      matlab: {
        kod: `% Çift ve tek kısımlar: n ekseni simetrik olmalı
n = -4:4;
x = [0 0 0 0 1 2 3 1 0];     % x(0)=1, x(1)=2, x(2)=3, x(3)=1
xr = fliplr(x);              % x(-n): n simetrik olduğu için fliplr yeter
xe = (x + xr) / 2;
xo = (x - xr) / 2;
kontrol = max(abs(xe + xo - x))
subplot(3, 1, 1), stem(n, x, 'filled'), title('x(n)')
subplot(3, 1, 2), stem(n, xe, 'filled'), title('x_e(n)')
subplot(3, 1, 3), stem(n, xo, 'filled'), title('x_o(n)')`,
        gorev: "xe'nin çift (xe == fliplr(xe)) ve xo'nun tek (xo == -fliplr(xo)) olduğunu isequal ile doğrula.",
      },
      dene: ["h3-cift-kisim"],
    },
    {
      baslik: "Sinyal dönüşümleri",
      metin: md(`
**Neden önemli?** Konvolüsyon "ters çevir, kaydır, çarp, topla" demektir. Ters çevirme ve kaydırmayı doğru yapmadan konvolüsyon yapılamaz.

**Zamanda kaydırma:** $y(n) = x(n - n_0)$. $n_0$ pozitifse dizi $n_0$ örnek **sağa** kayar (**gecikme**), negatifse **sola** kayar (**ilerleme**).

**Genlik kaydırma:** $y(n) = x(n) + k$; her örneğe k eklenir, dizi yukarı ya da aşağı kayar.

**Ters çevirme** (*time reversal / flipping*): $y(n) = x(-n)$; dizi n = 0 etrafında aynalanır.

**Zamanda ölçekleme:**

- $y(n) = x(Mn)$ (M tamsayı): her M'inci örnek alınır, aradakiler atılır. Buna **seyreltme** (*down-sampling*) denir; bilgi kaybolabilir.
- $y(n) = x(n/N)$, n N'nin katıyken; diğer yerlerde 0. Örnekler arasına N − 1 sıfır eklenir. Buna **ara değer ekleme** (*up-sampling*) denir.

**Genlik ölçekleme:** $y(n) = c\\,x(n)$; her örnek c ile çarpılır.

**Sıra önemlidir.** Gecikme ve ters çevirme birbirinin yerine geçmez. Önce $n_0$ geciktirip sonra ters çevirmek $x(-n - n_0)$ verir; önce ters çevirip sonra geciktirmek $x(-(n - n_0)) = x(-n + n_0)$ verir. Güvenli yol: $y(n) = x(kn - n_0)$ biçimindeki bir ifadede her n için parantezin içini hesaplayıp x'in o konumdaki değerini okumaktır.

[[G-H3-05]]

> **Çözümlü örnek:** $x(n)$, n = 0, 1, 2 için 1, 2, 3; başka yerde 0. $y(n) = x(2 - n)$ nedir?
>
> 1. y(n) = x(2 − n). n = 0: x(2) = 3. n = 1: x(1) = 2. n = 2: x(0) = 1.
> 2. Diğer n'lerde 2 − n, 0..2 dışına düşer: 0.
> 3. Sonuç n = 0, 1, 2 için 3, 2, 1: x ters çevrilip 2 sağa kaydırılmıştır.

> **Sık hata:** $x(-n + 2)$'yi "ters çevir, sonra sola kaydır" diye okumak. $x(-(n - 2))$ olduğu için ters çevrilmiş dizi **sağa** kayar.
`),
      matlab: {
        kod: `% Kaydırma ve ters çevirme: değerler aynı, n ekseni değişir
n = 0:4;
x = [1 2 3 2 1];

n0 = 3;
n_kay = n + n0;              % x(n - 3): her örnek 3 sağa
n_ters = -fliplr(n);         % x(-n): n eksenini aynala
x_ters = fliplr(x);

subplot(3, 1, 1), stem(n, x, 'filled'), xlim([-6 8]), title('x(n)')
subplot(3, 1, 2), stem(n_kay, x, 'filled'), xlim([-6 8]), title('x(n-3)')
subplot(3, 1, 3), stem(n_ters, x_ters, 'filled'), xlim([-6 8]), title('x(-n)')

% Seyreltme: her ikinci örnek
x2 = x(1:2:end)`,
        gorev: "x(−n − 2)'yi çiz: n_ters'i ne kadar kaydırman gerekir? Sonra x'in örnekleri arasına birer sıfır ekleyerek ara değer ekle.",
      },
      dene: ["h3-kaydirma"],
    },
    {
      baslik: "Sinyal işlemleri, enerji ve güç",
      metin: md(`
**Neden önemli?** Sistemler toplayıcı, çarpıcı ve geciktiricilerden kurulur. Enerji ve güç ise bir sinyalin "ne kadar büyük" olduğunu tek sayıyla söyler.

Ayrık sinyallerle yapılan temel işlemler örnek bazında tanımlanır:

- **Toplama:** $y(n) = x_1(n) + x_2(n)$.
- **Çarpma:** $y(n) = x_1(n)\\,x_2(n)$ (örnek bazında; ~.*~).
- **Sabitle çarpma:** $y(n) = c\\,x(n)$.
- **Birim gecikme:** $y(n) = x(n - 1)$. Blok diyagramında $z^{-1}$ yazılı bir kutuyla gösterilir.

[[G-H3-06]]

**Enerji.** Bir dizinin enerjisi örneklerinin büyüklüklerinin karelerinin toplamıdır:

$$E_x = \\sum_{n=-\\infty}^{\\infty} |x(n)|^2$$

Enerjisi sonlu olan dizilere **enerji sinyali** denir; sonlu uzunluktaki diziler ve sönen üsteller böyledir. Örneğin $x(n) = a^n u(n)$, $|a| < 1$ için $E = 1/(1 - a^2)$ (geometrik seri).

**Güç.** Sonsuza kadar süren periyodik bir dizinin enerjisi sonsuzdur; böyle diziler için bir periyottaki ortalama enerji, yani **güç** kullanılır:

$$P_x = \\frac{1}{N}\\sum_{n=0}^{N-1} |x(n)|^2$$

Gücü sonlu ve sıfırdan farklı olan dizilere **güç sinyali** denir; birim basamak ve periyodik diziler böyledir. Bir dizi aynı anda hem enerji hem güç sinyali olamaz: enerjisi sonluysa gücü sıfırdır.

> **Çözümlü örnek:** $x(n) = (0{,}5)^n u(n)$'nin enerjisi nedir?
>
> $E = \\sum_{n=0}^{\\infty} (0{,}25)^n = 1/(1 - 0{,}25) = 4/3 \\approx 1{,}333$.

> **Sık hata:** Karmaşık bir dizinin enerjisini $x^2(n)$'nin toplamı diye hesaplamak. Kare alınan şey büyüklüktür: $|x(n)|^2 = x(n)\\,x^*(n)$. MatStudio'da ~sum(abs(x).^2)~.
`),
      matlab: {
        kod: `% Enerji ve güç
n = 0:50;
x = 0.5.^n;
E = sum(abs(x).^2)          % 4/3'e çok yakın (sonlu sayıda terim)

% Periyodik bir dizinin bir periyottaki gücü
N = 8;
m = 0:N-1;
s = 2*cos(2*pi*m/N);
P = sum(abs(s).^2) / N      % A^2/2 = 2`,
        gorev: "x'teki 0.5'i 0.9 yap. Enerji 1/(1 - 0.81)'e yaklaşıyor mu? Kaç terimle yeterince yakınsıyor?",
      },
      dene: ["h3-enerji"],
    },
    {
      baslik: "Bir diziyi dürtülerle yazmak",
      metin: md(`
**Neden önemli?** Bu basit fikir, gelecek haftanın konvolüsyon toplamının temelidir: bir LTI sistemin her dürtüye yanıtını bilirsek her girişe yanıtını da biliriz.

Bir dizinin her örneği, o konuma kaydırılmış ve o örneğin değeriyle çarpılmış bir birim dürtüdür. Bütün örnekleri toplarsak dizinin kendisini elde ederiz:

$$x(n) = \\cdots + x(-1)\\,\\delta(n+1) + x(0)\\,\\delta(n) + x(1)\\,\\delta(n-1) + \\cdots = \\sum_{k=-\\infty}^{\\infty} x(k)\\,\\delta(n - k)$$

Toplamdaki her terim, $x(k)\\,\\delta(n-k)$, yalnızca $n = k$'da $x(k)$ değerini alan, başka her yerde sıfır olan bir dizidir. Buna dürtünün **eleme** (*sifting*) özelliği de denir: $x(n)\\,\\delta(n - k) = x(k)\\,\\delta(n - k)$.

[[G-H3-07]]

> **Çözümlü örnek:** $x(n) = \\delta(n) + 2\\delta(n - 1) - \\delta(n - 3)$ dizisini değerleriyle yaz.
>
> n = 0'da 1, n = 1'de 2, n = 2'de 0, n = 3'te −1; diğer her yerde 0.

> **Sık hata:** $\\delta(n - k)$'nin genliğini k sanmak. Dürtünün genliği önündeki katsayıdır; k yalnızca konumunu söyler.
`),
      dene: ["h3-durtu-toplam"],
    },
    {
      baslik: "Ayrık zamanlı sistemler ve özellikleri",
      metin: md(`
**Neden önemli?** Bir filtrenin doğrusal ve zamanla değişmez olduğunu bilmek, onu tek bir diziyle (dürtü yanıtıyla) tamamen tanımlamamızı sağlar. Bu özellikleri sınamak sınavların vazgeçilmez sorusudur.

**Ayrık zamanlı sistem**, bir giriş dizisini sabit kurallarla bir çıkış dizisine dönüştüren işleçtir: $y(n) = T[x(n)]$.

**Toplanabilirlik** (*additivity*): $T[x_1(n) + x_2(n)] = T[x_1(n)] + T[x_2(n)]$.
**Homojenlik** (*homogeneity*): $T[c\\,x(n)] = c\\,T[x(n)]$.

**Doğrusallık** (*linearity*): Sistem hem toplanabilir hem homojense doğrusaldır; yani **süperpozisyon** ilkesini sağlar:

$$T[a_1 x_1(n) + a_2 x_2(n)] = a_1 T[x_1(n)] + a_2 T[x_2(n)]$$

Pratik bir ipucu: doğrusal bir sistemde sıfır girişin çıkışı sıfırdır. $y(n) = 2x(n) + 5$ bu yüzden doğrusal değildir. Kare, mutlak değer ya da log gibi işlemler de doğrusallığı bozar.

**Hafızasız (statik) ve dinamik:** Çıkış yalnızca girişin **o andaki** değerine bağlıysa sistem hafızasızdır ($y(n) = a\\,x(n)$, $y(n) = x^2(n)$). Başka anlardaki değerlere de bağlıysa dinamiktir ($y(n) = x(n) + 3x(n-1)$, $y(n) = \\sum_{k=0}^{n} x(n-k)$).

**Zamanla değişmezlik** (*shift-invariance*): $x(n)$'nin yanıtı $y(n)$ ise, her $n_0$ için $x(n - n_0)$'ın yanıtı $y(n - n_0)$ oluyorsa sistem zamanla değişmezdir. Sınamak için girişi kaydırıp çıkışı hesapla ve bunu çıkışın kaydırılmışıyla karşılaştır. Katsayılarında n geçen sistemler ($y(n) = n\\,x(n)$) ve ters çevirme ya da ölçekleme yapan sistemler ($y(n) = x(-n)$, $y(n) = x(2n)$) zamanla değişir.

**Nedensellik** (*causality*): Her n'de çıkış yalnızca **şimdiki ve geçmiş** girişlere ($x(n), x(n-1), \\ldots$) bağlıysa sistem nedenseldir; gelecekteki girişlere ($x(n+1)$) bağlıysa değildir. Gerçek zamanda çalışan bir sistem nedensel olmak zorundadır.

**Kararlılık** (*stability*): Sınırlı her giriş sınırlı bir çıkış veriyorsa, yani $|x(n)| \\le A < \\infty$ iken $|y(n)| \\le B < \\infty$ oluyorsa sistem **BIBO** (*bounded input, bounded output*) anlamında kararlıdır. Biriktirici $y(n) = \\sum_{k=-\\infty}^{n} x(k)$ kararsızdır: sınırlı $u(n)$ girişine sınırsız büyüyen $(n+1)u(n)$ ile yanıt verir.

**Tersinirlik** (*invertibility*): Giriş, çıkıştan tek türlü bulunabiliyorsa sistem tersinirdir; bunun için farklı girişler farklı çıkışlar vermelidir. $y(n) = x^2(n)$ tersinir değildir: x ve −x aynı çıkışı verir.

[[G-H3-08]]

> **Çözümlü örnek:** $y(n) = x(n) + x(n+1)$ hangi özellikleri sağlar?
>
> 1. Doğrusal: iki terimin her biri doğrusaldır.
> 2. Zamanla değişmez: $x(n - n_0)$ girişi $x(n - n_0) + x(n + 1 - n_0) = y(n - n_0)$ verir.
> 3. Nedensel değil: $x(n+1)$ gelecekteki bir örnektir.
> 4. Dinamik: başka bir anın örneğini kullanır. Kararlı: iki sınırlı sayının toplamı sınırlıdır.

> **Sık hata:** $y(n) = x(n) + 3$'ü doğrusal sanmak çünkü "grafiği düz bir çizgi". Sistem doğrusallığı süperpozisyonla tanımlanır; sabit terim homojenliği bozar.
`),
      matlab: {
        kod: `% Doğrusallığı sayısal olarak sına: T[a*x1 + b*x2] ile a*T[x1] + b*T[x2]
rng(1)
x1 = randn(1, 20);  x2 = randn(1, 20);
a = 2;  b = -3;

T1 = @(x) 3*x;            % doğrusal
T2 = @(x) x.^2;           % doğrusal değil
T3 = @(x) x + 3;          % doğrusal değil

fark1 = max(abs(T1(a*x1 + b*x2) - (a*T1(x1) + b*T1(x2))))
fark2 = max(abs(T2(a*x1 + b*x2) - (a*T2(x1) + b*T2(x2))))
fark3 = max(abs(T3(a*x1 + b*x2) - (a*T3(x1) + b*T3(x2))))`,
        gorev: "T4 = @(x) cumsum(x) (biriktirici) ekle ve doğrusal olup olmadığını aynı yolla sına.",
      },
      dene: ["h3-nedensel", "h3-dogrusal"],
    },
    {
      baslik: "Doğrusal ve zamanla değişmez (LTI) sistemler",
      metin: md(`
**Neden önemli?** Dersin geri kalanı LTI sistemler üzerine kuruludur: konvolüsyon, frekans yanıtı ve filtre tasarımı hep bu iki özelliğe dayanır.

Hem doğrusal hem zamanla değişmez olan sisteme **LTI** (*linear time-invariant*) sistem denir. Doğrusal bir sistemde $L[\\cdot]$ ile kaydırma işleminin sırası değiştirilebiliyorsa sistem LTI'dir: önce sistemden geçirip sonra k kaydırmak, önce k kaydırıp sonra sistemden geçirmekle aynı sonucu verir.

LTI sistemlerin önemi şuradan gelir: Önceki bölümde her dizinin dürtülerin toplamı olduğunu gördük. Sistemin $\\delta(n)$'ye yanıtına **dürtü yanıtı** denir ve $h(n)$ ile gösterilir. Sistem zamanla değişmez olduğu için $\\delta(n-k)$'nin yanıtı $h(n-k)$'dır; doğrusal olduğu için $x(k)\\,\\delta(n-k)$'nın yanıtı $x(k)\\,h(n-k)$'dır ve toplamın yanıtı yanıtların toplamıdır:

$$y(n) = \\sum_{k=-\\infty}^{\\infty} x(k)\\,h(n-k)$$

Bu **konvolüsyon toplamıdır** ve gelecek haftanın konusudur. Kısacası bir LTI sistemi tanımak için tek bir dizi, $h(n)$, yeterlidir.

**Değişme özelliği.** İki LTI sistem art arda bağlandığında (kaskat) sıralarını değiştirmek toplam yanıtı değiştirmez: önce sistem 1 sonra sistem 2, önce sistem 2 sonra sistem 1 ile aynı çıkışı verir.

> **Çözümlü örnek:** $y(n) = 2x(n) - x(n-1)$ sisteminin dürtü yanıtı nedir?
>
> Girişe $\\delta(n)$ koy: $h(n) = 2\\delta(n) - \\delta(n-1)$. Yani n = 0'da 2, n = 1'de −1, başka her yerde 0.

> **Sık hata:** Doğrusal olmayan ya da zamanla değişen bir sistemi dürtü yanıtıyla tanımlamaya çalışmak. $h(n)$ ile her girişin yanıtını bulmak yalnızca LTI sistemlerde geçerlidir.
`),
      matlab: {
        kod: `% LTI sistemlerin sırası değiştirilebilir
x = [1 2 0 -1 3];
h1 = [1 1];          % y = x(n) + x(n-1)
h2 = [2 -1];         % y = 2x(n) - x(n-1)

y_a = conv(conv(x, h1), h2)   % önce 1, sonra 2
y_b = conv(conv(x, h2), h1)   % önce 2, sonra 1
isequal(y_a, y_b)

% Dürtü yanıtı: girişe dürtü ver
d = [1 0 0 0];
h = filter([2 -1], 1, d)`,
        gorev: "h1 ile h2'yi önce kendi aralarında konvolüsyonla birleştir (conv(h1, h2)) ve x'i tek seferde bu diziyle süz. Sonuç y_a ile aynı mı?",
      },
      dene: ["h3-lti-durtu"],
    },
  ],
  test: [
    "h3-durtu-deger",
    "h3-rampa",
    "h3-periyot-toplam",
    "h3-tek-sifir",
    "h3-ters-kaydir",
    "h3-guc",
    "h3-zamanla-degisen",
    "h3-kararlilik",
    "h3-tersinir",
    "h3-kaskat",
  ],
};
