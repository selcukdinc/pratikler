import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_4: Ders = {
  hafta: 4,
  baslik: "Konvolüsyon",
  ozet: "LTI bir sistemin çıkışını veren konvolüsyon toplamını; değişme, birleşme ve dağılma özelliklerini; kapalı formlu dizilerde doğrudan hesabı; çıkışın uzunluğunu ve konumunu; grafik yöntemi, kaydırma kuralını ve çarpım tablosunu; zarlarla olasılık dağılımlarını, hareketli ortalamayı ve korelasyonu öğren.",
  bolumler: [
    {
      baslik: "Konvolüsyon toplamı",
      metin: md(`
**Neden önemli?** LTI bir sistemin girişten çıkışı nasıl ürettiğini tek bir formül söyler. Filtreler, yankı, bulanıklaştırma ve hareketli ortalama hep bu formülün örnekleridir.

Geçen hafta her dizinin kaydırılmış dürtülerin toplamı olduğunu gördük: $x(n) = \\sum_k x(k)\\,\\delta(n-k)$. Doğrusal ve ötelemeyle değişmez (LTI ya da LSI) bir sistemde $\\delta(n - k)$'nin yanıtı $h(n - k)$, $x(k)\\,\\delta(n - k)$'nın yanıtı da $x(k)\\,h(n - k)$'dır. Toplamın yanıtı yanıtların toplamı olduğu için:

$$y(n) = x(n) * h(n) = \\sum_{k=-\\infty}^{\\infty} x(k)\\,h(n-k)$$

Bu **konvolüsyon toplamıdır**; $*$ işareti konvolüsyon demektir, çarpma değil. Okuması şöyle: çıkışın n anındaki değeri, her giriş örneğinin $x(k)$, o örnekten n − k adım sonra dürtü yanıtının aldığı değerle çarpımlarının toplamıdır.

Şekilde her giriş örneğinin kendi kopyasını (kaydırılmış ve ölçeklenmiş bir h) ürettiğini ve çıkışın bu kopyaların toplamı olduğunu görebilirsin:

[[G-H4-01]]

**Dürtüyle konvolüsyon.** $\\delta(n)$ yalnızca k = n'de 1 olduğundan toplamda tek terim kalır:

$$x(n) * \\delta(n) = x(n), \\qquad x(n) * \\delta(n - n_0) = x(n - n_0)$$

Yani dürtü konvolüsyonun birim elemanıdır; kaydırılmış dürtüyle konvolüsyon diziyi kaydırır.

> **Çözümlü örnek:** x(0) = 1, x(1) = 3 ve h(0) = 2, h(1) = −1 (diğer örnekler 0). y(n) = x(n) * h(n) nedir?
>
> 1. y(0) = x(0)h(0) = 2.
> 2. y(1) = x(0)h(1) + x(1)h(0) = −1 + 6 = 5.
> 3. y(2) = x(1)h(1) = −3. Başka örnek yok: y = (2, 5, −3), n = 0'dan başlayarak.

> **Sık hata:** $x(n) * h(n)$'yi örnek bazında çarpım $x(n)\\,h(n)$ sanmak. Konvolüsyonda bir çıkış örneği birçok çarpımın toplamıdır.

MatStudio'da ~conv(x, h)~ iki sonlu dizinin konvolüsyonunu verir. ~conv~ dizilerin n konumlarını bilmez; ikisi de ilk elemanından başlıyor kabul edilir.
`),
      matlab: {
        kod: `x = [1 2 -1];        % n = 0, 1, 2
h = [3 2 1];         % n = 0, 1, 2
y = conv(x, h)       % n = 0..4

% Aynı sonuç: kaydırılmış ve ölçeklenmiş h kopyalarının toplamı
k0 = x(1) * [h 0 0];
k1 = x(2) * [0 h 0];
k2 = x(3) * [0 0 h];
y2 = k0 + k1 + k2

n = 0:length(y)-1;
stem(n, y, 'filled'), title('y(n) = x(n) * h(n)'), xlabel('n')`,
        gorev: "h yerine [0 0 1] (yani δ(n − 2)) kullan. Çıkışın x'in iki örnek kaydırılmış hali olduğunu gör.",
      },
      dene: ["h4-ilk-ornek"],
    },
    {
      baslik: "Konvolüsyonun özellikleri",
      metin: md(`
**Neden önemli?** Birden çok sistemi tek bir sisteme indirmek, hesap sırasını kolay olana çevirmek bu özelliklerle olur.

Konvolüsyon doğrusal bir işlemdir ve üç önemli özelliği vardır:

**Değişme:** $x(n) * h(n) = h(n) * x(n)$. Sırası önemli değildir. Sistem gözüyle: dürtü yanıtı h, girişi x olan bir sistem; dürtü yanıtı x, girişi h olan bir sistemle aynı çıkışı verir.

**Birleşme:** $\\{x(n) * h_1(n)\\} * h_2(n) = x(n) * \\{h_1(n) * h_2(n)\\}$. Art arda (**kaskat**) bağlı iki sistem, dürtü yanıtı

$$h_{eş}(n) = h_1(n) * h_2(n)$$

olan tek bir sisteme eşdeğerdir.

**Dağılma:** $x(n) * \\{h_1(n) + h_2(n)\\} = x(n) * h_1(n) + x(n) * h_2(n)$. **Paralel** bağlı iki sistemin (aynı giriş, çıkışlar toplanıyor) eşdeğer dürtü yanıtı

$$h_{eş}(n) = h_1(n) + h_2(n)$$

olur. Kısaca: kaskat bağlantıda dürtü yanıtları konvolüsyona girer, paralel bağlantıda toplanır.

[[G-H4-02]]

> **Çözümlü örnek:** $h_1(n) = \\delta(n) + \\delta(n-1)$ ve $h_2(n) = \\delta(n) - \\delta(n-1)$.
>
> 1. Kaskat: $h_1 * h_2 = \\delta(n) - \\delta(n-1) + \\delta(n-1) - \\delta(n-2) = \\delta(n) - \\delta(n-2)$.
> 2. Paralel: $h_1 + h_2 = 2\\delta(n)$; bu sistem girişi yalnızca 2 ile çarpar.

> **Sık hata:** Paralel bağlantıda da konvolüsyon almak. Paralel kollar aynı girişi görür ve çıkışları toplanır; dağılma özelliğiyle dürtü yanıtları **toplanır**.
`),
      matlab: {
        kod: `x  = [2 -1 0 3];
h1 = [1 1];
h2 = [1 -1];

% Birleşme: kaskat bağlantı
y_kaskat = conv(conv(x, h1), h2)
y_tek    = conv(x, conv(h1, h2))

% Dağılma: paralel bağlantı (h1 + h2, aynı uzunlukta)
y_paralel = conv(x, h1) + conv(x, h2)
y_toplam  = conv(x, h1 + h2)

% Değişme
isequal(conv(x, h1), conv(h1, x))`,
        gorev: "h2'yi [1 0 -1] yap. Paralel bağlantıda h1 + h2 toplamı için h1'i sıfırla uzatman gerekir: [h1 0] + h2.",
      },
      dene: ["h4-paralel"],
    },
    {
      baslik: "Doğrudan değerlendirme",
      metin: md(`
**Neden önemli?** Diziler $a^n u(n)$ gibi kapalı formlu ifadelerse konvolüsyon sonsuz uzun olabilir; o zaman toplamı bir formülle hesaplamak gerekir.

Diziler basit kapalı formlu ifadelerle tanımlanabiliyorsa konvolüsyon, toplamın doğrudan hesaplanmasıyla en kolay bulunur. Sık karşılaşılan seriler:

$$\\sum_{n=0}^{N-1} a^n = \\frac{1 - a^N}{1 - a}, \\qquad \\sum_{n=0}^{\\infty} a^n = \\frac{1}{1-a}\\quad (|a| < 1)$$

$$\\sum_{n=0}^{\\infty} n\\,a^n = \\frac{a}{(1-a)^2}\\quad (|a| < 1), \\qquad \\sum_{n=0}^{N-1} n = \\tfrac{1}{2}N(N-1), \\qquad \\sum_{n=0}^{N-1} n^2 = \\tfrac{1}{6}N(N-1)(2N-1)$$

**Örnek: $x(n) = a^n u(n)$ ile $h(n) = u(n)$.** Toplamda $u(k)$, k ≥ 0'ı; $u(n - k)$ de k ≤ n'yi seçer. n < 0 için ortak k yoktur ve y(n) = 0'dır. n ≥ 0 için:

$$y(n) = \\sum_{k=0}^{n} a^k = \\frac{1 - a^{n+1}}{1 - a}$$

|a| < 1 ise n büyüdükçe çıkış $1/(1-a)$'ya yaklaşır.

[[G-H4-03]]

**Toplamın sınırlarını bulmak.** Her iki dizi de $u(\\cdot)$ içeriyorsa önce basamakların hangi k'leri seçtiğini yaz: $u(k)$ ve $u(n - k)$ birlikte $0 \\le k \\le n$ verir. Sınır bulunduktan sonra kalan toplam genellikle yukarıdaki serilerden birine benzer.

> **Çözümlü örnek:** $x(n) = (1/2)^n u(n)$ ve $h(n) = (1/3)^n u(n)$ ise y(n) nedir?
>
> 1. Sınırlar: $0 \\le k \\le n$, n ≥ 0.
> 2. $y(n) = \\sum_{k=0}^{n} (1/2)^k (1/3)^{n-k} = (1/3)^n \\sum_{k=0}^{n} (3/2)^k$.
> 3. Seri formülüyle: $(1/3)^n \\cdot \\frac{(3/2)^{n+1} - 1}{3/2 - 1} = 3(1/2)^n - 2(1/3)^n$, n ≥ 0.
> 4. Sağlama: y(0) = 3 − 2 = 1 = x(0)h(0). y(1) = 3/2 − 2/3 = 5/6 = 1/3 + 1/2.

> **Sık hata:** Sınırları unutup toplamı −∞'dan ∞'a almak. Basamak fonksiyonları toplamın nerede başlayıp bittiğini belirler; çıkışın önüne de u(n) yazmayı unutma.
`),
      matlab: {
        kod: `a = 0.8;
n = 0:30;
x = a.^n;               % a^n u(n), n = 0..30
u = ones(1, 31);        % u(n), n = 0..30

y = conv(x, u);
y = y(1:31);            % n = 0..30 doğru (sonrası kesik dizilerden bozulur)
formul = (1 - a.^(n+1)) / (1 - a);

max(abs(y - formul))    % ~0
sinir = 1 / (1 - a)
stem(n, y, 'filled'), hold on
plot(n, sinir * ones(size(n)), '--'), title('Üstel dizi ile basamağın konvolüsyonu')`,
        gorev: "a = 0.5 ve a = 0.95 dene. Hangisinde çıkış sınır değerine daha geç yaklaşıyor?",
      },
      dene: ["h4-ustel-basamak"],
    },
    {
      baslik: "Çıkışın uzunluğu ve konumu",
      metin: md(`
**Neden önemli?** Konvolüsyonu elle ya da MatStudio'da yaparken çıkışın kaç örnek süreceğini ve hangi n'den başlayacağını bilmek, sonucu doğru yere yazmayı sağlar.

İki sonlu dizinin konvolüsyonunda: x(n) **L₁** uzunluğunda, h(n) **L₂** uzunluğundaysa çıkışın uzunluğu

$$L = L_1 + L_2 - 1$$

olur. Ayrıca x(n)'in sıfırdan farklı değerleri $[M_x, N_x]$, h(n)'ninkiler $[M_h, N_h]$ aralığındaysa y(n)'nin sıfırdan farklı değerleri

$$[M_x + M_h,\\ N_x + N_h]$$

aralığındadır. Sebebi: $x(k)\\,h(n - k)$ çarpımının sıfırdan farklı olması için hem $M_x \\le k \\le N_x$ hem $M_h \\le n - k \\le N_h$ olmalıdır; bu ikisi toplanınca n'nin sınırları çıkar. İki formül birbiriyle tutarlıdır: $(N_x + N_h) - (M_x + M_h) + 1 = L_1 + L_2 - 1$.

**İlk ve son örnek.** y'nin ilk örneği yalnızca iki dizinin ilk örneklerinin çarpımıdır: $y(M_x + M_h) = x(M_x)\\,h(M_h)$. Son örnek de son örneklerin çarpımıdır.

> **Çözümlü örnek:** x(n)'in ilk sıfırdan farklı değeri n = −4'te 2, sonuncusu n = 15'te −3. y(n) = x(n) * x(n) için ilk ve son sıfırdan farklı örnekler?
>
> 1. İlk: n = −4 + (−4) = −8, değeri 2 · 2 = 4.
> 2. Son: n = 15 + 15 = 30, değeri (−3)(−3) = 9.
> 3. x'in uzunluğu 20; y'nin uzunluğu 20 + 20 − 1 = 39 (n = −8..30).

> **Sık hata:** Uzunlukları doğrudan toplamak (L₁ + L₂). Uzunluğu 3 ve 2 olan diziler 4 örnek verir, 5 değil.

MatStudio'da n konumlarını ayrı tutarız: çıkışın konumları ~ny = (nx(1) + nh(1)) : (nx(end) + nh(end))~ olur.
`),
      matlab: {
        kod: `nx = -2:3;   x = [1 2 0 -1 1 2];     % n = -2..3
nh = 1:3;    h = [1 -1 2];            % n = 1..3

y  = conv(x, h);
ny = (nx(1) + nh(1)) : (nx(end) + nh(end));

L1 = length(x), L2 = length(h)
L  = length(y)                         % L1 + L2 - 1
[ny(1) ny(end)]                        % [Mx+Mh  Nx+Nh]

subplot(3,1,1), stem(nx, x, 'filled'), title('x(n)')
subplot(3,1,2), stem(nh, h, 'filled'), title('h(n)')
subplot(3,1,3), stem(ny, y, 'filled'), title('y(n)')`,
        gorev: "h'yi n = −3'ten başlat (nh = -3:-1). Çıkışın konumunun nasıl değiştiğine, değerlerin değişmediğine bak.",
      },
      dene: ["h4-uzunluk"],
    },
    {
      baslik: "Grafik yöntem",
      metin: md(`
**Neden önemli?** Formül yerine şekille düşünmek, özellikle diziler farklı yerlerde başladığında hata yapmayı azaltır ve konvolüsyonun "kayan pencere" doğasını gösterir.

Grafik yöntemin adımları:

1. x(k) ve h(k) dizilerini **k'nin** fonksiyonu olarak çiz.
2. Birini seç (genellikle h) ve **ters çevir**: h(−k).
3. Ters çevrilen diziyi n kadar **kaydır**: h(n − k). n > 0 ise sağa (gecikme), n < 0 ise sola (ilerleme) kayar.
4. x(k) ile h(n − k)'yı örnek bazında **çarp** ve bütün k'ler için **topla**. Sonuç y(n)'dir.

Bu işlem her n için tekrarlanır. İki dizi hiç örtüşmüyorsa çarpımların hepsi sıfırdır ve y(n) = 0'dır; örtüşme ilk başladığında y'nin ilk örneği, bittiğinde son örneği bulunur.

[[G-H4-04]]

> **Çözümlü örnek:** x(k) = 1 (k = 0..3), h(k): h(0) = 2, h(1) = 1. y(1) nedir?
>
> 1. Ters çevir: h(−k), k = 0'da 2, k = −1'de 1.
> 2. n = 1 kaydır: h(1 − k), k = 1'de 2, k = 0'da 1.
> 3. Çarp ve topla: x(0)·1 + x(1)·2 = 1 + 2 = 3.

> **Sık hata:** Ters çevirmeyi atlamak. h(k)'yi ters çevirmeden kaydırıp çarpmak konvolüsyon değil **korelasyondur** (bu haftanın son bölümü); simetrik olmayan h için farklı sonuç verir.

Kaydırıcıyla n'yi değiştirip ters çevrilmiş dizinin x(k) üzerinden kaymasını izle; y(n)'nin örnekleri her adımda bir tane eklenir.
`),
      matlab: {
        kod: `% Grafik yöntemi bir döngüyle uygulamak
x = [1 2 1 -1];  nx = 0:3;
h = [1 1 1];     nh = 0:2;

k  = -4:8;
xk = zeros(size(k));  xk(k >= 0 & k <= 3) = x;   % x(k), k = 0..3
y  = zeros(1, 6);                    % uzunluk 4 + 3 - 1
for n = 0:5
  hnk = zeros(size(k));
  for i = 1:length(k)
    m = n - k(i);                    % h(n - k)
    if m >= 0 && m <= 2
      hnk(i) = h(m + 1);
    end
  end
  y(n + 1) = sum(xk .* hnk);         % çarp ve topla
end
y
conv(x, h)                           % aynı sonuç`,
        gorev: "h'yi [1 -1] yap ve döngüdeki sınırı (m <= 2) h'nin uzunluğuna göre değiştir. Sonucu conv ile karşılaştır.",
      },
      dene: ["h4-grafik-adim"],
    },
    {
      baslik: "Kaydırma kuralı ve çarpım tablosu",
      metin: md(`
**Neden önemli?** Kısa sonlu dizilerde konvolüsyonu kâğıt üzerinde en hızlı bu yollarla yaparsın. Çarpım tablosu ayrıca konvolüsyonun polinom çarpımıyla aynı şey olduğunu gösterir.

**Kaydırma kuralı** (*slide rule*), x ve h kısa ve sonlu olduğunda kullanışlıdır:

1. x(k) değerlerini bir kâğıt şeridin üstüne, h(−k) değerlerini (yani h'yi **ters sırada**) ikinci bir şeride yaz.
2. x(0) ile h(0)'ı alt alta getir; üst üste gelen her sayı çiftini çarp ve topla: bu y(0)'dır.
3. Alt şeridi birer adım **sağa** kaydırarak y(1), y(2), ... değerlerini bul. n < 0 için şeridi sola kaydır.

[[G-H4-05]]

**Çarpım tablosu.** x'in elemanlarını üste, h'ninkileri sola yaz ve her hücreye x(i)·h(j) çarpımını koy. Hücre (i, j), y(i + j)'ye eklenir; yani aynı **ters köşegendeki** hücrelerin toplamı bir çıkış örneğidir.

[[G-H4-06]]

**Polinom çarpımı.** Dizilerin elemanlarını polinom katsayısı yaparsak $x(n) \\to 1 + 2z + 3z^2$ ve $h(n) \\to 4 + 5z + 6z^2$ olur. Çarpımda $z^i \\cdot z^j = z^{i+j}$ olduğu için katsayılar tam olarak konvolüsyonla toplanır. MatStudio'da iki polinomu çarpmak için de ~conv~ kullanılır.

> **Çözümlü örnek:** (1, 2, 3) * (4, 5, 6) dizisini kaydırma kuralıyla bul.
>
> 1. y(0) = 1·4 = 4.
> 2. y(1) = 1·5 + 2·4 = 13.
> 3. y(2) = 1·6 + 2·5 + 3·4 = 28.
> 4. y(3) = 2·6 + 3·5 = 27, y(4) = 3·6 = 18. Sonuç (4, 13, 28, 27, 18); polinom çarpımı da $4 + 13z + 28z^2 + 27z^3 + 18z^4$.

> **Sık hata:** Alt şeride h'yi düz sırayla yazmak. Şeritte h(0) en sağda değil, x(0)'ın altında; h(1), h(2) onun **solunda** durmalıdır.
`),
      matlab: {
        kod: `x = [1 2 3];
h = [4 5 6];
y = conv(x, h)

% Çarpım tablosu: T(j, i) = x(i) * h(j)
T = h' * x

% Polinom çarpımı: (1 + 2z + 3z^2)(4 + 5z + 6z^2)
% polyval en yüksek dereceyi önce bekler, bu yüzden fliplr
z = 2;
sol = polyval(fliplr(x), z) * polyval(fliplr(h), z)
sag = polyval(fliplr(y), z)`,
        gorev: "x = [1 1] ve h = [1 1] için conv sonucu (1 + z)² açılımının katsayılarını veriyor mu? Bir kez daha conv alıp (1 + z)³'ü bul.",
      },
      dene: ["h4-polinom", "h4-kaydirma-ters"],
    },
    {
      baslik: "Olasılık dağılımları ve konvolüsyon",
      metin: md(`
**Neden önemli?** Konvolüsyon yalnızca filtrelerde değil, bağımsız rastgele büyüklüklerin toplamında da karşına çıkar. 1. haftada gördüğümüz "toplamlar çan eğrisine yaklaşır" gözleminin altında da konvolüsyon vardır.

İki adil zar atalım. Toplamın 7 olma olasılığı nedir? 36 eşit olasılıklı çiftten (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) olmak üzere 6'sı 7 verir: $P = 6/36 = 1/6$.

Genel olarak birinci zarın pmf'si $p_1(i)$, ikincininki $p_2(j)$ ise toplamın s olması, i + j = s olan bütün çiftlerin olasılıkları toplamıdır:

$$P(\\text{toplam} = s) = \\sum_{i} p_1(i)\\, p_2(s - i)$$

Bu tam olarak konvolüsyon toplamıdır: **iki bağımsız rastgele değişkenin toplamının pmf'si, pmf'lerinin konvolüsyonudur.** Zarlar hileli olsa da (her yüzün olasılığı farklı) formül aynıdır; çarpım tablosunda her hücre $p_1(i)\\,p_2(j)$ olur ve ters köşegenler toplanır.

İki zarın toplamı 2..12 arasında 11 farklı değer alır; bu da uzunluk kuralıdır: 6 + 6 − 1 = 11.

[[G-H4-07]]

> **Çözümlü örnek:** İki adil zarın toplamının 4 olma olasılığı?
>
> 1. i + j = 4 olan çiftler: (1,3), (2,2), (3,1).
> 2. Her biri 1/36: P = 3/36 = 1/12.

> **Sık hata:** Olasılıkları toplamak yerine çarpmak ya da tersini yapmak. Bir çiftin olasılığı çarpımdır ($p_1(i)\\,p_2(j)$); aynı toplamı veren çiftler ise **toplanır**.
`),
      matlab: {
        kod: `p = ones(1, 6) / 6;          % adil zar, yüzler 1..6
p2 = conv(p, p);             % iki zarın toplamı
s2 = 2:12;
P7 = p2(s2 == 7)             % 6/36

hileli = [0.1 0.1 0.1 0.1 0.1 0.5];
q2 = conv(hileli, hileli);
P12 = q2(end)                % iki altı

p3 = conv(p2, p);            % üç zar: toplam 3..18
sum(p3)                      % olasılıkların toplamı 1
bar(3:18, p3), title('Üç adil zarın toplamı'), xlabel('toplam')`,
        gorev: "Beş zarın toplamının dağılımını çiz (conv'u döngüde tekrarla). Çan biçimine benziyor mu?",
      },
      dene: ["h4-zar-sayi"],
    },
    {
      baslik: "Hareketli ortalama",
      metin: md(`
**Neden önemli?** Gürültülü bir ölçümü yumuşatmanın en basit yolu, her örneği komşularıyla ortalamaktır. Bu işlem bir LTI sistemdir ve konvolüsyonla yazılır.

**M noktalı hareketli ortalama** (*moving average*), son M girişin ortalamasını alır:

$$y(n) = \\frac{1}{M}\\sum_{k=0}^{M-1} x(n - k)$$

Dürtü yanıtı M uzunluğunda bir kutudur: $h(n) = 1/M$, $0 \\le n \\le M - 1$. Böylece $y(n) = x(n) * h(n)$. Katsayıların toplamı **1**'dir; bu yüzden sabit bir giriş (başlangıçtaki geçiş dışında) değişmeden çıkar ve sinyalin ortalama seviyesi korunur.

Hareketli ortalama, örnekten örneğe bağımsız olan gürültüyü azaltır: M örneğin ortalaması alındığında gürültünün standart sapması yaklaşık $\\sqrt{M}$ kat küçülür. Bedeli iki tanedir:

- **Gecikme:** Bu (nedensel) biçimde çıkış, girişin yaklaşık $(M - 1)/2$ örnek gerisinden gelir.
- **Yumuşama:** Sinyalin kendi hızlı değişimleri de ortalanır ve kaybolur.

[[G-H4-08]]

> **Çözümlü örnek:** Giriş x(0..3) = 3, 6, 9, 6 ve 3 noktalı hareketli ortalama. y(2) ve y(3)?
>
> 1. y(2) = (x(2) + x(1) + x(0))/3 = (9 + 6 + 3)/3 = 6.
> 2. y(3) = (x(3) + x(2) + x(1))/3 = (6 + 9 + 6)/3 = 7.

> **Sık hata:** h(n) = 1 (kutu) alıp 1/M ile ölçeklemeyi unutmak. O zaman çıkış ortalama değil toplam olur ve sinyal M kat büyür.

MatStudio'da ~conv(x, ones(1, M)/M)~ ya da ~filter(ones(1, M)/M, 1, x)~ ile yapılır; ~filter~ çıkışı giriş uzunluğunda verir.
`),
      matlab: {
        kod: `n = 0:199;
temiz = sin(2*pi*n/50);
x = temiz + 0.4*randn(size(n));     % gürültülü ölçüm

M = 9;
h = ones(1, M) / M;
sum(h)                               % 1
y = filter(h, 1, x);                 % conv(x, h) ile ilk 200 örnek aynı

gecikme = (M - 1) / 2
gurultu_once = std(x - temiz)
gurultu_sonra = std(y(M:end) - sin(2*pi*(n(M:end) - gecikme)/50))

plot(n, x), hold on, plot(n, y), legend('giriş', 'hareketli ortalama')`,
        gorev: "M'yi 3, 9 ve 31 yap. Gürültü azalıyor mu? M = 31'de sinyalin kendisine ne oluyor?",
      },
      dene: ["h4-ma-katsayi"],
    },
    {
      baslik: "Korelasyon",
      metin: md(`
**Neden önemli?** Korelasyon iki dizinin ne kadar benzediğini, birinin diğerine göre ne kadar kaydığını ölçer. Radar, eko bulma ve periyot ölçme gibi işlerde kullanılır; hesabı konvolüsyona çok benzer.

İki dizinin **korelasyonu**:

$$r_{xh}(n) = \\sum_{k=-\\infty}^{\\infty} x(k)\\,h(n + k)$$

Konvolüsyondan farkı, dizilerden biri **ters çevrilmez**: h yalnızca kaydırılır. k yerine −k yazınca korelasyonun, ters çevrilmiş x ile konvolüsyon olduğu görülür: $r_{xh}(n) = x(-n) * h(n)$. Bu yüzden korelasyon değişme özelliğini sağlamaz: sıranın değişmesi sonucu ters çevirir.

Bir dizinin kendisiyle korelasyonuna **otokorelasyon** denir: $r_{xx}(n) = \\sum_k x(k)\\,x(n + k)$. Özellikleri:

- **Simetri:** $r_{xx}(-n) = r_{xx}(n)$.
- **Enerji:** $r_{xx}(0) = \\sum_k x^2(k)$, dizinin enerjisidir ve otokorelasyonun en büyük değeridir.

**Örnek: $x(n) = a^n u(n)$, |a| < 1.** n ≥ 0 için $r_{xx}(n) = \\sum_{k \\ge 0} a^k a^{n+k} = a^n \\sum_{k\\ge0} a^{2k} = \\frac{a^n}{1 - a^2}$. Simetriden

$$r_{xx}(n) = \\frac{a^{|n|}}{1 - a^2}$$

[[G-H4-09]]

> **Çözümlü örnek:** x(0) = 1, x(1) = 2, başka yerde 0. Otokorelasyon nedir?
>
> 1. $r_{xx}(0) = 1^2 + 2^2 = 5$ (enerji).
> 2. $r_{xx}(1) = x(0)x(1) = 2$; simetriden $r_{xx}(-1) = 2$.
> 3. |n| ≥ 2'de örtüşme yok: 0.

> **Sık hata:** Korelasyonu konvolüsyonla aynı sanmak. İkisi ancak dizilerden biri n = 0'a göre simetrikse aynı sonucu verir.

MatStudio'da ~xcorr(x)~ otokorelasyonu verir; ~[r, gecikme] = xcorr(x)~ gecikme değerlerini de döndürür. ~xcorr(x, y)~ ise $\\sum_n x(n + m)\\,y(n)$ tanımını kullanır; yukarıdaki $r_{xh}$ bunun ~xcorr(h, x)~ halidir.
`),
      matlab: {
        kod: `x = [1 2];
[r, m] = xcorr(x)                % gecikme -1, 0, 1
conv(fliplr(x), x)               % aynı: x(-n) * x(n)

a = 0.7;
n = 0:60;
xa = a.^n;
[ra, ma] = xcorr(xa);
ra(ma == 0)                       % enerji
1 / (1 - a^2)                     % formül
stem(ma, ra), xlim([-10 10]), title('Üstel dizinin otokorelasyonu')`,
        gorev: "x = [1 2 3] ve h = [1 0 -1] için xcorr(h, x) ile conv(fliplr(x), h) sonuçlarını karşılaştır.",
      },
      dene: ["h4-korelasyon-fark"],
    },
  ],
  test: [
    "h4-tanim",
    "h4-kaskat-hesap",
    "h4-iki-ustel",
    "h4-ilk-son",
    "h4-grafik-hesap",
    "h4-kaydirma-tum",
    "h4-polinom-2",
    "h4-zar-4",
    "h4-ma-cikis",
    "h4-otokor-0",
  ],
};
