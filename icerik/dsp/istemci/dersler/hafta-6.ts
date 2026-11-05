import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_6: Ders = {
  hafta: 6,
  baslik: "Frekans yanıtı ve ayrık zamanlı Fourier dönüşümü",
  ozet: "Karmaşık üstellerin LTI sistemlerin özfonksiyonları olduğunu; frekans yanıtını, büyüklüğü, fazı, desibel ölçeğini ve grup gecikmesini; doğrusal faz, tam geçiren ve frekans seçici filtreleri; sistem bağlantılarını; DTFT'yi, özelliklerini ve ters sistemi öğren.",
  bolumler: [
    {
      baslik: "Özfonksiyonlar ve frekans yanıtı",
      metin: md(`
**Neden önemli?** LTI bir sisteme karmaşık üstel (ya da kosinüs) verildiğinde çıkış yine aynı frekansta bir üsteldir; sistem yalnızca genliği ve fazı değiştirir. Bu yüzden bir sistemi "her frekansı ne kadar geçirdiği" ile tanımlayabiliriz.

Fourier gösterimi sinyalleri başka bir **alana** (frekans alanı) taşır. Bunu özellikle yararlı kılan şey, zamandaki **konvolüsyonun frekansta çarpmaya** dönüşmesidir.

**Özfonksiyon.** Bir sisteme verilen x(n) girişinin çıkışı $y(n) = \\lambda\\,x(n)$ biçimindeyse x(n), sistemin **özfonksiyonu**, λ da **özdeğeri**dir. Sabit ω'lı karmaşık üsteller LTI sistemlerin özfonksiyonlarıdır. $x(n) = e^{jn\\omega}$ girişini konvolüsyon toplamına koyalım:

$$y(n) = \\sum_k h(k)\\,e^{j(n-k)\\omega} = e^{jn\\omega}\\underbrace{\\sum_k h(k)\\,e^{-jk\\omega}}_{H(e^{j\\omega})}$$

Özdeğer

$$H(e^{j\\omega}) = \\sum_{k=-\\infty}^{\\infty} h(k)\\,e^{-jk\\omega}$$

sistemin **frekans yanıtı**dır. Karmaşık değerlidir; gerçel ve sanal kısımlarıyla ya da **büyüklük ve fazıyla** yazılır: $H(e^{j\\omega}) = |H(e^{j\\omega})|\\,e^{j\\varphi(\\omega)}$.

**Kosinüs girişi.** h(n) gerçelse, $x(n) = \\cos(n\\omega_0)$ girişinin çıkışı

$$y(n) = |H(e^{j\\omega_0})|\\,\\cos\\big(n\\omega_0 + \\varphi(\\omega_0)\\big)$$

olur: aynı frekans, genlik $|H|$ ile çarpılmış, faz $\\varphi$ kadar kaymış.

[[G-H6-01]]

Bir giriş karmaşık üstellerin toplamına ayrıştırılabiliyorsa ($x(n) = \\sum_k a_k e^{jn\\omega_k}$), çıkış her bileşenin kendi frekanstaki yanıtla çarpılmasıyla bulunur: $y(n) = \\sum_k a_k H(e^{j\\omega_k}) e^{jn\\omega_k}$.

> **Çözümlü örnek:** $h(n) = \\delta(n) + \\delta(n-1)$ sisteminin frekans yanıtı nedir? $\\cos(n\\pi/2)$ girişinin çıkışının genliği kaçtır?
>
> 1. $H(e^{j\\omega}) = 1 + e^{-j\\omega} = e^{-j\\omega/2}\\,(e^{j\\omega/2} + e^{-j\\omega/2}) = 2\\cos(\\omega/2)\\,e^{-j\\omega/2}$.
> 2. Büyüklük $2|\\cos(\\omega/2)|$, faz $-\\omega/2$.
> 3. ω₀ = π/2'de büyüklük $2\\cos(\\pi/4) = \\sqrt{2} \\approx 1{,}41$: çıkışın genliği 1,41.

> **Sık hata:** LTI sistemin çıkışında yeni frekanslar beklemek. Doğrusal ve zamanla değişmez bir sistem frekans **üretmez**; yalnızca var olanların genliğini ve fazını değiştirir.
`),
      matlab: {
        kod: `h = [1 1 1] / 3;               % 3 noktalı ortalama
w0 = pi/4;
H = sum(h .* exp(-1j*w0*(0:2)))   % H(e^{j w0})
genlik = abs(H)
faz = angle(H)

n = 0:40;
x = cos(w0*n);
y = filter(h, 1, x);
beklenen = genlik * cos(w0*n + faz);
fark = max(abs(y(3:end) - beklenen(3:end)))   % geçişten sonra 0

stem(n, x), hold on, stem(n, y), legend('x(n)', 'y(n)')`,
        gorev: "w0 = 2*pi/3 yap. Çıkışın genliği ne oldu? Neden?",
      },
      dene: ["h6-ozfonksiyon"],
    },
    {
      baslik: "Büyüklük, faz, desibel ve grup gecikmesi",
      metin: md(`
**Neden önemli?** Filtrelerin veri sayfalarında büyüklük dB ile, gecikme grup gecikmesiyle verilir. Bu grafikleri okuyabilmek filtre seçmenin ilk adımıdır.

Frekans yanıtının grafikleri LTI sistemlerin analizinde çok değerlidir. En yaygınları **büyüklük** ($|H|$) ve **faz** ($\\varphi$) grafikleridir.

**Desibel.** Büyüklüğü logaritmik ölçekte, $20\\log_{10}|H(e^{j\\omega})|$ olarak çizmek de yaygındır; birimi **desibel (dB)**'dir:

| dB | $\\vert H\\vert$ |
|---|---|
| 0 dB | 1 |
| 20 dB | 10 |
| −20 dB | 0,1 |
| 6 dB | yaklaşık 2 |
| −6 dB | yaklaşık 0,5 |

Logaritma küçük değerlerin ölçeğini genişletir; bu yüzden büyüklüğün sıfıra yaklaştığı bölgelerdeki (durdurma bandı) ince ayrıntılar dB grafiğinde görülür.

[[G-H6-02]]

**Grup gecikmesi.** Faz yerine sık kullanılan bir gösterim:

$$\\tau(\\omega) = -\\frac{d\\varphi(\\omega)}{d\\omega}$$

Türev alabilmek için fazın 2π'lik sıçramaları, π'nin katları eklenerek giderilir ve faz ω'nın sürekli bir fonksiyonu yapılır; buna **fazın paketinin açılması** (*phase unwrapping*) denir. Grup gecikmesi, o frekans civarındaki bileşenlerin kaç örnek geciktiğini söyler.

> **Çözümlü örnek:** Bir filtrenin büyüklüğü bir frekansta −40 dB'dir. Bu frekanstaki kosinüsün genliği kaç katına iner?
>
> 1. $20\\log_{10}|H| = -40$, $\\log_{10}|H| = -2$.
> 2. $|H| = 10^{-2} = 0{,}01$: genlik yüzde birine iner.

> **Sık hata:** Büyüklük için $10\\log_{10}$ kullanmak. $10\\log_{10}$ güç oranları içindir; genlik (büyüklük) için $20\\log_{10}$ kullanılır.
`),
      matlab: {
        kod: `[H, w] = freqz([1 1 1 1 1]/5, 1, 512);
dB = 20*log10(abs(H) + 1e-12);

subplot(2,1,1), plot(w, abs(H)), title('|H|, 5 noktalı ortalama')
subplot(2,1,2), plot(w, dB), title('20 log10 |H| (dB)'), ylim([-60 5])

% İki noktalı ortalamanın grup gecikmesi
[H2, w2] = freqz([1 1]/2, 1, 256);
faz = angle(H2);
gecikme = -diff(faz) ./ diff(w2);
ortalama_gecikme = mean(gecikme)          % 0.5 örnek`,
        gorev: "Grup gecikmesini [1 1 1]/3 için hesapla. Kaç örnek çıkıyor? (Fazın sıçradığı frekanslara dikkat et.)",
      },
      dene: ["h6-db-20"],
    },
    {
      baslik: "Periyodiklik, simetri ve ters dönüşüm",
      metin: md(`
**Neden önemli?** Bu özellikler sayesinde frekans yanıtının yalnızca 0 ile π arasını çizmek yeter; geri kalanı bu parçadan bulunur.

**Periyodiklik.** Ayrık zamanda ω₀ frekanslı karmaşık üstel, ω₀ + 2π frekanslı üstelle aynıdır: $e^{jn(\\omega_0 + 2\\pi)} = e^{jn\\omega_0}$ (n tamsayı). Bu yüzden frekans yanıtı da 2π ile periyodiktir:

$$H(e^{j(\\omega + 2\\pi)}) = H(e^{j\\omega})$$

**Simetri.** h(n) gerçel değerliyse frekans yanıtı **eşlenik simetrik**tir: $H(e^{-j\\omega}) = H^*(e^{j\\omega})$. Bunun anlamı:

- gerçel kısım ve **büyüklük ω'nın çift** fonksiyonudur,
- sanal kısım, **faz ve grup gecikmesi tek** fonksiyonudur.

Sonuç olarak gerçel bir sistemin yanıtını 0 ≤ ω ≤ π aralığında bilmek yeterlidir.

[[G-H6-03]]

**Ters dönüşüm.** Frekans yanıtından birim örnek yanıtı integralle geri bulunur; integral 2π uzunluğundaki herhangi bir aralıkta alınabilir:

$$h(n) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} H(e^{j\\omega})\\,e^{jn\\omega}\\,d\\omega$$

> **Çözümlü örnek:** $h(n) = a^n u(n)$, |a| < 1 olan sistemin frekans yanıtı nedir? a = 0,5 için ω = 0 ve ω = π'deki büyüklük?
>
> 1. $H(e^{j\\omega}) = \\sum_{n=0}^{\\infty} (a e^{-j\\omega})^n = \\dfrac{1}{1 - a e^{-j\\omega}}$ (geometrik seri).
> 2. ω = 0: $1/(1 - 0{,}5) = 2$.
> 3. ω = π: $e^{-j\\pi} = -1$, $1/(1 + 0{,}5) \\approx 0{,}667$. a > 0 iken sistem alçak frekansları güçlendirir.

> **Sık hata:** Ayrık zamanda frekansın sınırsız büyüyebileceğini sanmak. ω ve ω + 2π aynı diziyi verir; en yüksek "farklı" frekans ω = π'dir (işareti her örnekte değişen dizi).
`),
      matlab: {
        kod: `a = 0.6;
h = a.^(0:80);                       % a^n u(n), yeterince uzun
w = [0.3 1.2 2.5];
H      = h * exp(-1j*(0:80)'*w);     % H(e^{jw})
H_2pi  = h * exp(-1j*(0:80)'*(w + 2*pi));
H_eksi = h * exp(-1j*(0:80)'*(-w));

periyot = max(abs(H - H_2pi))         % 0
buyukluk_cift = max(abs(abs(H) - abs(H_eksi)))   % 0
faz_tek = max(abs(angle(H) + angle(H_eksi)))     % 0
formul = abs(1 ./ (1 - a*exp(-1j*w)))
abs(H)`,
        gorev: "a = -0.6 yap. ω = 0 ve ω = π'deki büyüklükler nasıl değişti? Sistem artık hangi frekansları güçlendiriyor?",
      },
      dene: ["h6-periyot"],
    },
    {
      baslik: "Filtreler: doğrusal faz, tam geçiren ve frekans seçici",
      metin: md(`
**Neden önemli?** Bir filtre seçerken sorulan sorular hep aynıdır: hangi frekansları geçiriyor, sinyali bozmadan mı geciktiriyor? Bu bölüm bu sorulara karşılık gelen sınıfları tanıtır.

**Dijital filtre** (ya da kısaca filtre), örneklenmiş bir sinyali (giriş dizisini) başka bir sayı dizisine (çıkış) dönüştüren hesaplama süreci ya da algoritmadır. Alçak geçiren filtreleme (yumuşatma), bant geçiren filtreleme, aradeğerleme, türev alma bu tür işlemlerdir. Filtreler sistem özelliklerine (doğrusallık, kayma değişmezliği, nedensellik, kararlılık) ve frekans yanıtlarının biçimine göre sınıflandırılır.

**Doğrusal faz.** Frekans yanıtı

$$H(e^{j\\omega}) = A(e^{j\\omega})\\,e^{-j\\alpha\\omega}$$

biçimindeyse (α gerçel, A gerçel değerli) sistem **doğrusal fazlı**dır: faz $-\\alpha\\omega$ bir doğrudur ve grup gecikmesi her frekansta **sabit**, α'dır. $e^{j(\\beta - \\alpha\\omega)}$ biçiminde fazı olan filtreler **genelleştirilmiş doğrusal fazlı**dır; onların da grup gecikmesi sabittir. Doğrusal fazlı filtre bütün frekansları aynı süre geciktirir, dalga biçimini bozmaz. Simetrik dürtü yanıtları (ör. hareketli ortalama) doğrusal fazlıdır.

**Tam geçiren** (*allpass*). Frekans yanıtının büyüklüğü sabitse ($|H(e^{j\\omega})| = c$) sistem tam geçirendir. Örnek, |α| < 1 gerçel bir sayı için:

$$H(e^{j\\omega}) = \\frac{e^{-j\\omega} - \\alpha}{1 - \\alpha e^{-j\\omega}}$$

Büyüklüğü her frekansta 1'dir; yalnızca fazı (gecikmeyi) frekansa göre değiştirir.

[[G-H6-05]]

**Frekans seçici filtreler.** Uygulamada önemli filtrelerin çoğunun büyüklüğü bölgeler halinde sabittir: **alçak geçiren**, **yüksek geçiren**, **bant geçiren** ve **bant durduran**. Büyüklüğün 1 olduğu aralıklar **geçiş bandı**, 0 olduğu aralıklar **durdurma bandı**dır; bu bantların kenarlarındaki frekanslara **kesim frekansı** denir.

[[G-H6-04]]

> **Çözümlü örnek:** $h(n) = \\delta(n) + 2\\delta(n-1) + \\delta(n-2)$ doğrusal fazlı mıdır? Grup gecikmesi kaçtır?
>
> 1. $H = 1 + 2e^{-j\\omega} + e^{-j2\\omega} = e^{-j\\omega}(e^{j\\omega} + 2 + e^{-j\\omega}) = (2 + 2\\cos\\omega)\\,e^{-j\\omega}$.
> 2. $A(\\omega) = 2 + 2\\cos\\omega$ gerçel, faz $-\\omega$: doğrusal faz, α = 1.
> 3. Grup gecikmesi 1 örnek: simetrinin merkezi.

> **Sık hata:** Tam geçiren filtrenin "hiçbir şey yapmadığını" sanmak. Büyüklüğü değiştirmez ama farklı frekansları farklı süre geciktirir; dalga biçimi değişir.
`),
      matlab: {
        kod: `% Simetrik dürtü yanıtı: doğrusal faz
h = [1 2 3 2 1] / 9;
[H, w] = freqz(h, 1, 256);
A = H .* exp(1j*2*w);             % e^{-j2w} çarpanını geri al
sanal_kisim = max(abs(imag(A)))   % 0: kalan gerçel, faz -2w

% Tam geçiren: büyüklük her yerde 1
alfa = 0.5;
[Ht, w] = freqz([-alfa 1], [1 -alfa], 256);
en_kucuk = min(abs(Ht))
en_buyuk = max(abs(Ht))
plot(w, angle(Ht)), title('Tam geçirenin fazı')`,
        gorev: "h = [1 2 3] / 6 (simetrik değil) için A'nın sanal kısmına bak. Doğrusal faz bozuldu mu?",
      },
      dene: ["h6-tam-geciren"],
    },
    {
      baslik: "Sistem bağlantıları",
      metin: md(`
**Neden önemli?** İstenen frekans yanıtını tek bir filtreyle elde etmek zor olabilir; basit filtreleri art arda ya da paralel bağlayarak bant geçiren ve bant durduran filtreler kurulur.

**Kaskat (seri) bağlantı.** 4. haftada gördüğümüz gibi eşdeğer birim örnek yanıtı $h(n) = h_1(n) * h_2(n)$'dir. Frekans alanında konvolüsyon çarpıma dönüştüğü için

$$H(e^{j\\omega}) = H_1(e^{j\\omega})\\,H_2(e^{j\\omega})$$

olur. Logaritma çarpımı toplama çevirdiği için kaskadın **dB büyüklüğü bireysel dB büyüklüklerinin toplamıdır**; faz ve grup gecikmeleri de toplanır.

**Paralel bağlantı.** Eşdeğer yanıt toplamdır: $h(n) = h_1(n) + h_2(n)$ ve $H(e^{j\\omega}) = H_1(e^{j\\omega}) + H_2(e^{j\\omega})$.

**Örnek kurgular.** Kesim frekansı ω₂ olan bir alçak geçiren ile kesim frekansı ω₁ olan bir yüksek geçiren (ω₁ < ω₂) **kaskat** bağlanırsa **bant geçiren** elde edilir. Kesim frekansı ω₁ olan alçak geçiren ile kesim frekansı ω₂ olan yüksek geçiren **paralel** bağlanırsa **bant durduran** elde edilir. Kontrol uygulamalarında bir de çıkışın girişe geri verildiği **geri besleme** bağlantısı yaygındır.

[[G-H6-06]]

> **Çözümlü örnek:** Bir frekansta birinci filtrenin büyüklüğü −20 dB, ikincininki 6 dB. Kaskat bağlantının o frekanstaki büyüklüğü kaç dB ve kaç kattır?
>
> 1. dB'ler toplanır: −20 + 6 = −14 dB.
> 2. Kat olarak: 0,1 × 2 = 0,2 (yaklaşık; $10^{-14/20} \\approx 0{,}2$).

> **Sık hata:** Paralel bağlantıda dB'leri toplamak. dB toplama yalnızca kaskat (çarpım) için geçerlidir; paralelde karmaşık yanıtların kendisi toplanır.
`),
      matlab: {
        kod: `h1 = [1 1] / 2;            % alçak geçiren
h2 = [1 -1] / 2;           % yüksek geçiren
w = linspace(0, pi, 5);
E = exp(-1j*(0:1)'*w);

H1 = h1 * E;  H2 = h2 * E;
h_kaskat = conv(h1, h2)
H_kaskat = h_kaskat * exp(-1j*(0:2)'*w);
fark = max(abs(H_kaskat - H1 .* H2))     % 0: çarpım

dB_toplam = 20*log10(abs(H1(2))) + 20*log10(abs(H2(2)))
dB_kaskat = 20*log10(abs(H_kaskat(2)))

H_paralel = H1 + H2                      % paralel: toplam`,
        gorev: "H_paralel her frekansta 1 çıktı. h1 + h2'yi hesapla ve nedenini dürtü yanıtından açıkla.",
      },
      dene: ["h6-kaskat-db"],
    },
    {
      baslik: "Ayrık zamanlı Fourier dönüşümü (DTFT)",
      metin: md(`
**Neden önemli?** Frekans yanıtını h(n) için nasıl tanımladıysak, aynı formül her diziye uygulanabilir. Böylece sinyallerin de spektrumunu konuşabiliriz.

LTI bir sistemin frekans yanıtı, h(n)'nin $e^{-jn\\omega}$ ile çarpılıp n üzerinden toplanmasıyla bulunur. Bir x(n) dizisinin **ayrık zamanlı Fourier dönüşümü (DTFT)** aynı biçimde tanımlanır:

$$X(e^{j\\omega}) = \\sum_{n=-\\infty}^{\\infty} x(n)\\,e^{-jn\\omega}$$

Yani frekans yanıtı, birim örnek yanıtının DTFT'sidir. DTFT'nin var olması için toplam yakınsamalıdır; bunun için x(n)'in **mutlak toplanabilir** olması yeterlidir: $\\sum_n |x(n)| < \\infty$.

**Ters DTFT**, x(n)'i −π < ω < π aralığındaki bütün karmaşık üstellerin doğrusal birleşimi olarak yazar:

$$x(n) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} X(e^{j\\omega})\\,e^{jn\\omega}\\,d\\omega$$

**Sık kullanılan çiftler:**

- $\\delta(n) \\leftrightarrow 1$, $\\delta(n - n_0) \\leftrightarrow e^{-jn_0\\omega}$
- $a^n u(n) \\leftrightarrow \\dfrac{1}{1 - a e^{-j\\omega}}$, |a| < 1
- N uzunluğunda dikdörtgen ($n = 0..N-1$): $e^{-j\\omega(N-1)/2}\\,\\dfrac{\\sin(N\\omega/2)}{\\sin(\\omega/2)}$; ω = 0'da değeri N, ilk sıfırı $2\\pi/N$'de.

[[G-H6-07]]

> **Çözümlü örnek:** $x(n) = 2\\delta(n) - \\delta(n-2)$ dizisinin DTFT'si nedir? ω = π/2'deki değeri?
>
> 1. Doğrusallık ve kaydırma: $X(e^{j\\omega}) = 2 - e^{-j2\\omega}$.
> 2. ω = π/2: $e^{-j\\pi} = -1$, $X = 2 + 1 = 3$.

> **Sık hata:** Her dizinin DTFT'si olduğunu sanmak. u(n) ya da $2^n u(n)$ mutlak toplanabilir değildir; bu toplamlar sıradan anlamda yakınsamaz.
`),
      matlab: {
        kod: `N = 8;
x = ones(1, N);                      % n = 0..7
w = linspace(-pi, pi, 401);
X = x * exp(-1j*(0:N-1)'*w);         % DTFT, tanımdan

X0 = X(201)                          % w = 0: N
formul = exp(-1j*w*(N-1)/2) .* sin(N*w/2) ./ sin(w/2);
formul(201) = N;
fark = max(abs(X - formul))
ilk_sifir = 2*pi/N
plot(w, abs(X)), xlabel('\\omega'), title('|X|, N = 8 dikdörtgen')`,
        gorev: "N = 16 yap. Tepe ve ilk sıfır nasıl değişti?",
      },
      dene: ["h6-dtft-durtu"],
    },
    {
      baslik: "DTFT özellikleri",
      metin: md(`
**Neden önemli?** Özellikler sayesinde yeni bir dizinin DTFT'sini tanımdan hesaplamak yerine bilinen çiftlerden birkaç adımda buluruz. En önemlisi, konvolüsyonun çarpıma dönüşmesidir.

**Periyodiklik.** $X(e^{j(\\omega + 2\\pi)}) = X(e^{j\\omega})$.

**Simetri.** x(n) gerçelse $X(e^{j\\omega})$ eşlenik simetriktir (gerçel kısmı çift, sanal kısmı tek). x(n) gerçel ve çiftse X gerçel ve çifttir. Bu özellikler birleştirilebilir: x(n) eşlenik simetrikse X gerçel değerlidir.

**Doğrusallık.** $a x_1(n) + b x_2(n) \\leftrightarrow a X_1 + b X_2$.

**Kaydırma.** $x(n - n_0) \\leftrightarrow e^{-jn_0\\omega} X(e^{j\\omega})$: zamanda kaydırma, DTFT'yi doğrusal bir faz terimiyle çarpar; büyüklük değişmez.

**Zamanda ters çevirme.** $x(-n) \\leftrightarrow X(e^{-j\\omega})$.

**Modülasyon.** $e^{jn\\omega_0} x(n) \\leftrightarrow X(e^{j(\\omega - \\omega_0)})$: karmaşık üstelle çarpmak spektrumu ω₀ kadar kaydırır. Kosinüsle çarpmak spektrumu **ω₀ kadar yukarı ve aşağı** kaydırır ve yarıya böler:

$$x(n)\\cos(n\\omega_0) \\leftrightarrow \\tfrac{1}{2}X(e^{j(\\omega - \\omega_0)}) + \\tfrac{1}{2}X(e^{j(\\omega + \\omega_0)})$$

[[G-H6-08]]

**Konvolüsyon teoremi.** Doğrusal sistemler teorisinin belki de en önemli sonucu:

$$y(n) = x(n) * h(n) \\;\\leftrightarrow\\; Y(e^{j\\omega}) = X(e^{j\\omega})\\,H(e^{j\\omega})$$

**Çarpma (periyodik konvolüsyon).** İkili sonuç: zamanda çarpma, frekansta (2π ile periyodik) konvolüsyona karşılık gelir: $x(n)w(n) \\leftrightarrow \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} X(e^{j\\theta})W(e^{j(\\omega - \\theta)})\\,d\\theta$.

**Parseval teoremi** (enerjinin korunumu): DTFT, zamandan frekansa geçerken enerjiyi korur.

$$\\sum_{n} |x(n)|^2 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |X(e^{j\\omega})|^2\\,d\\omega$$

[[G-H6-09]]

> **Çözümlü örnek:** x(n)'in DTFT'si $X(e^{j\\omega})$. $y(n) = x(n - 3)$ dizisinin DTFT'si ve ω = π'deki büyüklüğü?
>
> 1. Kaydırma: $Y = e^{-j3\\omega}X(e^{j\\omega})$.
> 2. $|e^{-j3\\omega}| = 1$: büyüklük değişmez, $|Y(e^{j\\pi})| = |X(e^{j\\pi})|$; yalnızca faz $-3\\omega$ kadar değişir.

> **Sık hata:** Konvolüsyon teoremini ters yönde uygulamak: zamandaki **çarpım** frekansta çarpım değil, (periyodik) konvolüsyondur.
`),
      matlab: {
        kod: `x = [1 2 0 -1];
w = linspace(-pi, pi, 1001);
X = x * exp(-1j*(0:3)'*w);

% Kaydırma: x(n - 3), n = 3..6
Xk = x * exp(-1j*(3:6)'*w);
kaydirma = max(abs(Xk - exp(-1j*3*w) .* X))     % 0

% Konvolüsyon teoremi
h = [1 1] / 2;
y = conv(x, h);
Y = y * exp(-1j*(0:4)'*w);
H = h * exp(-1j*(0:1)'*w);
konvolusyon = max(abs(Y - X .* H))              % 0

% Parseval
enerji_zaman = sum(x.^2)
enerji_frekans = trapz(w, abs(X).^2) / (2*pi)`,
        gorev: "x'i kosinüsle modüle et (x .* cos(pi/2*(0:3))) ve DTFT'sini çiz. Spektrum ±π/2'ye kaydı mı?",
      },
      dene: ["h6-kaydirma", "h6-parseval"],
    },
    {
      baslik: "Ters sistem",
      metin: md(`
**Neden önemli?** Bir kanalın (telefon hattı, oda yankısı) bozduğu sinyali düzeltmek için kanalın tersini uygularız. Frekans alanında ters sistem bulmak basit bir bölmedir.

Birim örnek yanıtı h(n) olan bir sistemin **tersi**, birim örnek yanıtı g(n) olan ve ikisinin konvolüsyonu birim dürtü olan sistemdir:

$$h(n) * g(n) = \\delta(n)$$

Frekans alanında konvolüsyon çarpıma, dürtü de 1'e dönüşür:

$$H(e^{j\\omega})\\,G(e^{j\\omega}) = 1 \\quad\\Rightarrow\\quad G(e^{j\\omega}) = \\frac{1}{H(e^{j\\omega})}$$

H'nin sıfır olduğu bir frekans varsa o frekansta bilgi tamamen kaybolmuştur ve kararlı bir ters sistem bulunamaz.

[[G-H6-10]]

> **Çözümlü örnek:** $h(n) = \\delta(n) - \\tfrac{1}{4}\\delta(n-1)$ sisteminin tersi nedir?
>
> 1. $H(e^{j\\omega}) = 1 - \\tfrac{1}{4}e^{-j\\omega}$.
> 2. $G = \\dfrac{1}{1 - \\tfrac{1}{4}e^{-j\\omega}}$; bu, $a^n u(n)$ çiftiyle a = 1/4'tür.
> 3. $g(n) = (1/4)^n u(n)$. Sağlama: $g(n) - \\tfrac14 g(n-1) = \\delta(n)$.

> **Sık hata:** Ters sistemin dürtü yanıtını $1/h(n)$ sanmak. Ters alma frekans alanında yapılır: $G = 1/H$; zamanda karşılığı bölme değil, konvolüsyonla δ veren dizidir.
`),
      matlab: {
        kod: `h = [1 -0.5];
d = [1 zeros(1, 19)];
g = filter(1, [1 -0.5], d);      % G = 1/H: g(n) = 0.5^n
g(1:5)

birlesik = conv(h, g);
birlesik(1:5)                    % [1 0 0 0 0]: dürtü

w = linspace(0, pi, 4);
H = h * exp(-1j*(0:1)'*w);
G = g * exp(-1j*(0:19)'*w);
carpim = abs(H .* G)             % her frekansta yaklaşık 1`,
        gorev: "h = [1 -2] için aynı yolu dene. g(n) büyüyor mu? Ters sistem kararlı mı?",
      },
      dene: ["h6-ters-sistem"],
    },
  ],
  test: [
    "h6-ozdeger",
    "h6-kosinus-cikis",
    "h6-db-tablo",
    "h6-simetri",
    "h6-dogrusal-faz",
    "h6-bant-geciren",
    "h6-dtft-ustel",
    "h6-konvolusyon-teoremi",
    "h6-modulasyon",
    "h6-ters-hesap",
  ],
};
