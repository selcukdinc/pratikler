import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_8: Ders = {
  hafta: 8,
  baslik: "Hızlı Fourier dönüşümü (FFT)",
  ozet: "DFT'yi doğrudan hesaplamanın neden pahalı olduğunu; zamanda seyreltmeyi, bölüm çarpanlarını ve kelebeği; 8 noktalı radix-2 akış diyagramını, bit ters sırasını ve işlem sayılarını; frekansta seyreltmeyi; 2'nin kuvveti olmayan uzunluklar için karma N algoritmasını ve FFT'nin spektrum, hızlı konvolüsyon ve ters DFT için kullanımını öğren.",
  bolumler: [
    {
      baslik: "Neden FFT?",
      metin: md(`
**Neden önemli?** Geçen hafta DFT'nin her şeyi yapabildiğini gördük: spektrum, konvolüsyon, filtreleme. Ama tanımdan hesaplanan DFT çok yavaştır. Bugün telefonlardan radarlara kadar her yerde DFT kullanılabiliyorsa bunun nedeni **hızlı Fourier dönüşümü** (FFT) algoritmalarıdır.

**Doğrudan DFT'nin yükü.** $X(k) = \\sum_{n=0}^{N-1} x(n)\\,W_N^{nk}$. x(n) karmaşık olabileceğinden her k için N karmaşık çarpma ve yaklaşık N karmaşık toplama gerekir. N tane k olduğundan toplam yük yaklaşık **$N^2$ karmaşık çarpma**dır.

**Bölme fikri.** Diziyi ikiye bölüp iki adet N/2 noktalı DFT hesaplarsak her biri $(N/2)^2$ çarpma ister; toplam $2(N/2)^2 = N^2/2$: iş tek bölmeyle yarıya iner. N 2'nin kuvvetiyse ($N = 2^v$) parçaları da bölmeyi 2 noktalı DFT'lere kadar sürdürebiliriz. Sonuçta yük

$$\\frac{N}{2}\\log_2 N \\;\\text{ karmaşık çarpma}, \\qquad N\\log_2 N \\;\\text{ karmaşık toplama}$$

olur. Bu algoritma ailesine FFT denir. FFT yeni bir dönüşüm değildir: **aynı DFT'yi** daha az işlemle hesaplar.

[[G-H8-01]]

> **Çözümlü örnek:** Bir karmaşık çarpma 1 µs sürsün ve süreyi yalnızca çarpmalar belirlesin. 1024 noktalı DFT doğrudan ve FFT ile ne kadar sürer?
>
> 1. Doğrudan: $1024^2 = 1\\,048\\,576$ çarpma → yaklaşık 1,05 s.
> 2. FFT: $(1024/2)\\cdot\\log_2 1024 = 512 \\cdot 10 = 5120$ çarpma → 5,12 ms.
> 3. FFT yaklaşık 205 kat hızlıdır.

> **Sık hata:** FFT'nin DFT'ye "yaklaşık" bir sonuç verdiğini sanmak. İki yol aynı sayıları üretir; fark yalnızca hesap sırası ve işlem sayısıdır.
`),
      matlab: {
        kod: `v = 1:12;
N = 2.^v;
dogrudan = N.^2;
fftCarpma = N/2 .* v;
oran = dogrudan ./ fftCarpma

plot(v, log10(dogrudan)), hold on
plot(v, log10(fftCarpma))
xlabel('v = log2 N'), legend('doğrudan DFT', 'radix-2 FFT')
title('çarpma sayısının 10 tabanında logaritması')`,
        gorev: "N = 4096 için oran kaç? Bir çarpma 1 µs ise doğrudan DFT kaç saniye sürer?",
      },
      dene: ["h8-ikiye-bolme"],
    },
    {
      baslik: "Zamanda seyreltme ve bölüm çarpanları",
      metin: md(`
**Neden önemli?** FFT'nin bütün hızı tek bir gözleme dayanır: N noktalı DFT, çift ve tek indisli örneklerin iki küçük DFT'sinden kurulabilir.

**Seyreltme.** N = 2^v olsun. x(n)'i çift ve tek indisli örneklere ayıralım:

$$g(n) = x(2n), \\qquad h(n) = x(2n+1), \\qquad n = 0, \\dots, N/2 - 1$$

Buna **zamanda seyreltme** (decimation in time) denir.

[[G-H8-02]]

**Bölüm çarpanları.** $W_N^r$ katsayılarına **bölüm çarpanı** (twiddle factor) denir. FFT'de iki özellikleri kullanılır:
- $W_N^2 = W_{N/2}$: N noktalının karesi, N/2 noktalının taban üstelidir.
- $W_N^{k+N/2} = -W_N^k$: yarım tur ileride işaret değişir.

**DFT'yi birleştirmek.** DFT toplamını çift ve tek terimlere bölüp $W_N^{2nk} = W_{N/2}^{nk}$ kullanınca

$$X(k) = \\underbrace{\\sum_{n} g(n)\\,W_{N/2}^{nk}}_{G(k)} + W_N^k \\underbrace{\\sum_{n} h(n)\\,W_{N/2}^{nk}}_{H(k)}$$

bulunur. G(k) ve H(k), N/2 noktalı DFT'lerdir ve N/2 ile periyodiktir. İkinci özellikle

$$X(k) = G(k) + W_N^k H(k), \\qquad X(k + N/2) = G(k) - W_N^k H(k), \\qquad k = 0, \\dots, N/2 - 1$$

olur. Her $W_N^k H(k)$ çarpımı iki çıkışta birden kullanılır.

> **Çözümlü örnek:** x(n), n = 0..3 için 1, 2, 3, 4. 4 noktalı DFT'yi zamanda seyreltmeyle bul.
>
> 1. g(n): 1, 3; h(n): 2, 4. 2 noktalı DFT'ler: G(0) = 4, G(1) = −2; H(0) = 6, H(1) = −2.
> 2. $W_4^0 = 1$, $W_4^1 = -j$.
> 3. X(0) = 4 + 6 = 10, X(2) = 4 − 6 = −2.
> 4. X(1) = −2 + (−j)(−2) = −2 + 2j, X(3) = −2 − 2j.
`),
      matlab: {
        kod: `x = [1 2 3 4 5 6 7 8];
N = length(x);
g = x(1:2:end);            % çift indisler: x(0), x(2), ...
h = x(2:2:end);            % tek indisler
G = fft(g);
H = fft(h);
k = 0:N/2-1;
Wk = exp(-1j*2*pi*k/N);    % bölüm çarpanları
X = [G + Wk.*H, G - Wk.*H];
fark = max(abs(X - fft(x)))   % yaklaşık 0`,
        gorev: "g ve h'nin DFT'lerini de aynı yolla (bir kez daha bölerek) hesapla. Kaç aşamada 2 noktalı DFT'lere indin?",
      },
      dene: ["h8-dit-formul"],
    },
    {
      baslik: "Kelebek",
      metin: md(`
**Neden önemli?** FFT'nin bütün akış diyagramı tek bir yapı taşının tekrarından oluşur. Bu yapı taşını anlayan, her boyuttaki FFT'yi okuyabilir.

**2 noktalı DFT.** N = 2 için $W_2 = -1$:

$$Q(0) = q(0) + q(1), \\qquad Q(1) = q(0) - q(1)$$

Hiç çarpma yoktur; yalnızca bir toplam ve bir fark.

**Kelebek.** Bir önceki bölümdeki $X(k) = G(k) + W_N^k H(k)$ ve $X(k + N/2) = G(k) - W_N^k H(k)$ ikilisi, çizildiğinde kelebek kanadına benzer. Genel kelebekte üst kolun çarpanı $W_N^r$, alt kolun çarpanı $W_N^{r+N/2}$'dir. $W_N^{r+N/2} = -W_N^r$ olduğundan **sadeleştirilmiş kelebek** tek çarpma kullanır:

$$A = a + W_N^r\\,b, \\qquad B = a - W_N^r\\,b$$

[[G-H8-03]]

> **Çözümlü örnek:** a = 2, b = 1 ve W = $W_8^2$ olan kelebeğin çıkışları nedir?
>
> 1. $W_8^2 = e^{-j\\pi/2} = -j$.
> 2. W·b = −j.
> 3. A = 2 − j, B = 2 + j.

> **Sık hata:** Alt koldaki "−1"i ayrı bir çarpma saymak. İşaret değiştirmek çarpma değildir; kelebek başına yalnızca bir karmaşık çarpma sayılır.
`),
      matlab: {
        kod: `N = 8;
r = 0:N-1;
W = exp(-1j*2*pi*r/N)          % W8^0 ... W8^7

% Yarım tur ileride işaret değişir
yarimTur = max(abs(W(5:8) + W(1:4)))   % 0

% Bir kelebek
a = 2;  b = 1;
Wr = W(3);                     % W8^2 = -j
A = a + Wr*b
B = a - Wr*b`,
        gorev: "Wr = W(1) yap (r = 0). Kelebek neye dönüştü?",
      },
      dene: ["h8-kelebek-carpma"],
    },
    {
      baslik: "Radix-2 akış diyagramı ve bit ters sırası",
      metin: md(`
**Neden önemli?** Bölmeyi sonuna kadar sürdürdüğümüzde FFT, kelebeklerden oluşan katmanlı bir ağ olur. Bu ağ hem yazılımda hem donanımda (FPGA, DSP işlemci) doğrudan uygulanır.

**Aşamalar.** N = 2^v noktalı radix-2 FFT'nin **v = log₂N aşaması** vardır. Her aşamada **N/2 kelebek** bulunur. Her kelebek bir çarpma ve iki toplama yaptığından toplam yük $(N/2)\\log_2 N$ karmaşık çarpma ve $N\\log_2 N$ karmaşık toplamadır.

8 noktalı FFT'de: 1. aşamada dört adet 2 noktalı DFT, 2. aşamada bunları birleştiren dört kelebek (iki adet 4 noktalı DFT), 3. aşamada son dört kelebek.

**Bit ters sırası.** Seyreltme her aşamada çift ve tek indisleri ayırdığından, akış diyagramının solunda girişler karışık sırada durur. Bu sıra, indisin ikili yazılışını tersten okuyarak bulunur:

| n | ikili | ters | sıradaki giriş |
|---|---|---|---|
| 0 | 000 | 000 | x(0) |
| 1 | 001 | 100 | x(4) |
| 2 | 010 | 010 | x(2) |
| 3 | 011 | 110 | x(6) |
| 4 | 100 | 001 | x(1) |
| 5 | 101 | 101 | x(5) |
| 6 | 110 | 011 | x(3) |
| 7 | 111 | 111 | x(7) |

Zamanda seyreltmeli FFT'de giriş **bit ters sırada**, çıkış **doğal sırada**dır.

[[G-H8-04]]

**Yerinde hesap.** Bir kelebeğin iki çıkışı yalnızca kendi iki girdisinden hesaplanır ve o girdiler bir daha kullanılmaz. Bu yüzden sonuçlar girdilerin bulunduğu bellek konumlarına yazılabilir: FFT **yerinde** (in-place) hesaplanır ve fazladan bellek gerekmez.

> **Çözümlü örnek:** 16 noktalı FFT'de n = 6'nın bit ters karşılığı nedir? Kaç aşama ve kaç kelebek vardır?
>
> 1. 4 bit: 6 = 0110 → tersi 0110 = 6. Bazı indisler kendine gider.
> 2. log₂16 = 4 aşama, her birinde 8 kelebek, toplam 32 kelebek ve 32 karmaşık çarpma.
`),
      matlab: {
        kod: `x = [0 1 2 3 4 5 6 7];
N = length(x);  v = 3;

% Bit ters sırası
idx = zeros(1, N);
for n = 0:N-1
  m = n;  r = 0;
  for b = 1:v
    r = 2*r + mod(m, 2);
    m = floor(m/2);
  end
  idx(n+1) = r;
end
idx

% Yerinde radix-2 FFT
a = x(idx + 1);
boy = 2;
while boy <= N
  yarim = boy/2;
  for g = 0:boy:N-1
    for j = 0:yarim-1
      t = exp(-1j*2*pi*j/boy) * a(g+j+yarim+1);
      u = a(g+j+1);
      a(g+j+1) = u + t;          % kelebeğin üst çıkışı
      a(g+j+yarim+1) = u - t;    % alt çıkışı
    end
  end
  boy = 2*boy;
end
X = a
fark = max(abs(X - fft(x)))`,
        gorev: "x'i 16 örneğe çıkar ve v = 4 yap. idx dizisi nasıl değişti? fark hâlâ sıfır mı?",
      },
      dene: ["h8-bit-ters-sira"],
    },
    {
      baslik: "Frekansta seyreltme",
      metin: md(`
**Neden önemli?** Aynı hızı veren ikinci bir yol vardır. Bazı donanımlarda girişin doğal sırada gelmesi işi kolaylaştırır; o zaman frekansta seyreltme seçilir.

**Fikir.** Bu kez giriş **ilk yarı ve ikinci yarı** olarak eşlenir; ayrılan şey çıkıştaki çift ve tek indisli X(k)'lerdir. $W_N^{2k\\cdot N/2} = 1$ ve $W_N^{(2k+1)N/2} = -1$ kullanılarak

$$X(2k) = \\sum_{n=0}^{N/2-1} \\big[x(n) + x(n + N/2)\\big]\\,W_{N/2}^{nk}$$

$$X(2k+1) = \\sum_{n=0}^{N/2-1} \\big[x(n) - x(n + N/2)\\big]W_N^n\\;W_{N/2}^{nk}$$

bulunur: çift indisli çıkışlar toplamın, tek indisliler bölüm çarpanıyla çarpılmış farkın N/2 noktalı DFT'sidir.

[[G-H8-05]]

**Karşılaştırma.**

| | Zamanda seyreltme | Frekansta seyreltme |
|---|---|---|
| İlk ayrım | çift / tek indisli giriş | ilk / ikinci yarı giriş |
| Giriş sırası | bit ters | doğal |
| Çıkış sırası | doğal | bit ters |
| Bölüm çarpanı | toplamadan önce | çıkarmadan sonra |
| Çarpma sayısı | $(N/2)\\log_2 N$ | $(N/2)\\log_2 N$ |

> **Çözümlü örnek:** x(n), n = 0..3 için 1, 2, 3, 4. 4 noktalı DFT'yi frekansta seyreltmeyle bul.
>
> 1. Toplamlar: x(0) + x(2) = 4, x(1) + x(3) = 6. Farklar: −2, −2; bölüm çarpanları $W_4^0 = 1$, $W_4^1 = -j$ → −2 ve 2j.
> 2. Çift çıkışlar: X(0) = 4 + 6 = 10, X(2) = 4 − 6 = −2.
> 3. Tek çıkışlar: X(1) = −2 + 2j, X(3) = −2 − 2j. Sonuç zamanda seyreltmeyle aynı.
`),
      matlab: {
        kod: `x = [1 2 3 4 5 6 7 8];
N = length(x);
n = 0:N/2-1;
ust = x(1:N/2) + x(N/2+1:N);                              % toplam
alt = (x(1:N/2) - x(N/2+1:N)) .* exp(-1j*2*pi*n/N);       % fark x bölüm çarpanı

X = zeros(1, N);
X(1:2:end) = fft(ust);     % X(0), X(2), X(4), X(6)
X(2:2:end) = fft(alt);     % X(1), X(3), X(5), X(7)
fark = max(abs(X - fft(x)))`,
        gorev: "fft(ust) ve fft(alt) yerine bu iki diziyi bir kez daha aynı yolla böl. Çıkışlar hangi sırayla çıkıyor?",
      },
      dene: ["h8-dif-tek"],
    },
    {
      baslik: "Karma N için FFT",
      metin: md(`
**Neden önemli?** Her uzunluk 2'nin kuvveti değildir: 1000 örneklik bir kayıt, 12 aylık bir veri ya da 15 kanallı bir dizi gibi. Uzunluk çarpanlara ayrılabiliyorsa FFT fikri yine işe yarar.

**İndisleri ikiye bölmek.** $N = N_1 N_2$ olsun. Giriş ve çıkış indislerini

$$n = N_2 n_1 + n_2, \\qquad k = k_1 + N_1 k_2$$

($0 \\le n_1, k_1 \\le N_1 - 1$, $0 \\le n_2, k_2 \\le N_2 - 1$) biçiminde yazarız. Bu, x(n)'i N₂ satır ve N₁ sütunluk bir tabloya yerleştirmek demektir: (n₂, n₁) hücresinde $x(N_2 n_1 + n_2)$ durur. Başka bir deyişle x(n), N₂ uzunluğunda N₁ diziye seyreltilir.

**Üç adım.**
1. Her satırın **N₁ noktalı DFT'sini** al: $G(n_2, k_1) = \\sum_{n_1} x(N_2 n_1 + n_2)\\,W_{N_1}^{n_1 k_1}$.
2. Her hücreyi **bölüm çarpanı** $W_N^{n_2 k_1}$ ile çarp.
3. Her sütunun **N₂ noktalı DFT'sini** al. Sonuç tabloda (k₂, k₁) hücresinde $X(k_1 + N_1 k_2)$'dir.

[[G-H8-06]]

N₁ ve N₂ de çarpanlara ayrılabiliyorsa küçük DFT'ler aynı yolla bölünmeye devam eder. N = 2^v özel durumunda bu, radix-2 FFT'yi verir.

> **Çözümlü örnek:** N = 6 = 2 × 3 (N₁ = 2, N₂ = 3). x(n) tabloya nasıl yerleşir? X(5) çıkış tablosunda nerededir?
>
> 1. n = 3n₁ + n₂: ilk satır (n₂ = 0) x(0) ve x(3); ikinci x(1) ve x(4); üçüncü x(2) ve x(5).
> 2. Her satırın 2 noktalı DFT'si alınır, $W_6^{n_2 k_1}$ ile çarpılır, her sütunun 3 noktalı DFT'si alınır.
> 3. 5 = k₁ + 2k₂ → k₁ = 1, k₂ = 2: X(5), çıkış tablosunun 3. satırı 2. sütunundadır.
`),
      matlab: {
        kod: `N1 = 3;  N2 = 4;  N = N1*N2;
x = 1:N;

% Tablo: T(n2+1, n1+1) = x(N2*n1 + n2)
T = reshape(x, N2, N1)

% 1. satır DFT'leri ve 2. bölüm çarpanları
G = zeros(N2, N1);
for n2 = 0:N2-1
  satir = fft(T(n2+1, :));
  for k1 = 0:N1-1
    G(n2+1, k1+1) = satir(k1+1) * exp(-1j*2*pi*n2*k1/N);
  end
end

% 3. sütun DFT'leri ve çıkışı doğal sıraya koy
X = zeros(1, N);
for k1 = 0:N1-1
  sutun = fft(G(:, k1+1));
  for k2 = 0:N2-1
    X(k1 + N1*k2 + 1) = sutun(k2+1);
  end
end
fark = max(abs(X - fft(x)))`,
        gorev: "N1 = 4, N2 = 3 yap. Tablo nasıl değişti? Sonuç yine fft(x) ile aynı mı?",
      },
      dene: ["h8-karma-adimlar"],
    },
    {
      baslik: "FFT'nin kullanımı",
      metin: md(`
**Neden önemli?** MatStudio'daki ~fft~ fonksiyonu, Python'daki ~numpy.fft~ ve ses kartlarındaki spektrum göstergeleri bu algoritmaları kullanır. Doğru uzunluğu seçmek ve sonucu doğru okumak, FFT'yi kullanmanın asıl becerisidir.

**Spektrum.** $f_s$ ile örneklenmiş N örneklik bir kaydın FFT'sinde k. katsayının frekansı $f_k = k\\,f_s/N$'dir. Gerçel bir sinyalde yalnızca 0..N/2 aralığı yeni bilgi taşır. Bir sinüsün genliği yaklaşık $(2/N)|X(k)|$ olarak okunur.

[[G-H8-07]]

**Uzunluk seçimi.** MatStudio'da ~fft(x, N)~, x N'den kısaysa sonuna sıfır ekler, uzunsa keser. Radix-2 FFT için N genellikle 2'nin bir kuvveti seçilir.

**Hızlı konvolüsyon.** Geçen haftaki dört adımın (sıfır doldur, DFT al, çarp, ters DFT al) DFT'leri FFT ile hesaplanınca konvolüsyon çok hızlanır. N₁ ve N₂ örneklik iki dizi için FFT uzunluğu, $N_1 + N_2 - 1$'den küçük olmayan ilk 2 kuvveti seçilir.

**FFT ile ters DFT.** Ters DFT ileri DFT'den yalnızca üssün işareti ve 1/N çarpanıyla ayrılır. Eşlenik almak üssün işaretini çevirdiğinden aynı FFT programı kullanılabilir:

$$x(n) = \\frac{1}{N}\\Big[\\mathrm{FFT}\\{X^*(k)\\}\\Big]^*$$

> **Çözümlü örnek:** 1000 ve 24 örneklik iki dizi FFT ile konvolüsyona sokulacak. FFT uzunluğu ne olmalı? fs = 8000 Hz ise bu uzunlukta Δf kaç Hz olur?
>
> 1. 1000 + 24 − 1 = 1023 → 2'nin ilk kuvveti 1024.
> 2. Δf = 8000/1024 ≈ 7,81 Hz.
`),
      matlab: {
        kod: `fs = 1000;  N = 256;
n = 0:N-1;
x = sin(2*pi*80*n/fs) + 0.5*sin(2*pi*220*n/fs) + 0.3*randn(1, N);

X = fft(x);
f = (0:N/2-1) * fs / N;
genlik = 2/N * abs(X(1:N/2));
plot(f, genlik), xlabel('f (Hz)'), title('tek yanlı genlik spektrumu')

[tepe, i] = max(genlik);
tepeFrekans = f(i)

% Ters DFT'yi ileri FFT ile hesapla
xg = conj(fft(conj(X))) / N;
fark = max(abs(xg - x))`,
        gorev: "İkinci sinüsü 84 Hz'e taşı. N = 256 iki tepeyi ayırıyor mu? N = 1024 yapınca ne oluyor?",
      },
      dene: ["h8-frekans-ekseni"],
    },
  ],
  test: [
    "h8-sure",
    "h8-dit-ikinci-yari",
    "h8-dit-g-dizi",
    "h8-kelebek-hesap",
    "h8-asama-sayisi",
    "h8-bit-ters",
    "h8-dif-cift",
    "h8-karma-indis",
    "h8-fft-konv",
    "h8-ters-fft",
  ],
};
