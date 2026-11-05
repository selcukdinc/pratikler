import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_5: Ders = {
  hafta: 5,
  baslik: "Fourier analizi: sinüslerden spektruma",
  ozet: "Sinüsün dönen bir noktanın izdüşümü olduğunu; genlik, frekans ve fazı; sinüslerin toplamını; kare, üçgen ve testere dalganın Fourier serisini; periyodik olmayan sinyallerin sürekli spektrumunu; sarma makinesi ve kütle merkeziyle Fourier dönüşümünün fikrini öğren.",
  bolumler: [
    {
      baslik: "Çember ve sinüs",
      metin: md(`
**Neden önemli?** Fourier analizinin bütün fikri "her sinyal sinüslerin toplamıdır" cümlesidir. Önce sinüsün nereden geldiğini, dönen bir noktayla ilişkisini görmek gerekir.

Yarıçapı 1 olan bir çember (birim çember) üzerinde, yatay eksenle **θ** açısı yapan bir nokta düşün. Bu noktanın:

- **yatay koordinatı** $\\cos\\theta$,
- **dikey koordinatı** $\\sin\\theta$'dır.

θ yalnızca 0 ile 360° (2π) arasında değil, −∞'dan +∞'a her değeri alabilir; nokta çemberin etrafında dönmeye devam eder ve değerler her 2π'de bir tekrar eder. Noktanın dikey izdüşümünü θ'ya göre çizersek **sinüs eğrisi**, yatay izdüşümünü çizersek kosinüs eğrisi çıkar. Kosinüs, sinüsün 90° kaydırılmış halidir: $\\cos\\theta = \\sin(\\theta + 90°)$.

[[G-H5-01]]

Dönen noktaya üçüncü bir boyut olarak zamanı eklersek nokta bir sarmal (helis) çizer; bu sarmala yandan bakınca sinüs, üstten bakınca kosinüs görülür.

> **Çözümlü örnek:** θ = 150° için noktanın koordinatları nedir?
>
> 1. cos 150° = −cos 30° ≈ −0,866 (nokta solda).
> 2. sin 150° = sin 30° = 0,5 (nokta yukarıda).

> **Sık hata:** Açıyı derece ile radyan arasında karıştırmak. MatStudio'nun ~sin~ ve ~cos~ fonksiyonları radyan bekler: 90° için ~sin(pi/2)~ yazılır; dereceyle çalışmak için ~sind~ yoktur, ~deg2rad~ ile çevrilir.
`),
      matlab: {
        kod: `theta = linspace(0, 4*pi, 200);

subplot(1, 2, 1)
plot(cos(theta), sin(theta)), axis equal
title('Birim çember'), xlabel('cos'), ylabel('sin')

subplot(1, 2, 2)
plot(theta, sin(theta)), hold on
plot(theta, cos(theta))
legend('sin', 'cos'), xlabel('\\theta (rad)')

nokta = [cos(deg2rad(150)) sin(deg2rad(150))]`,
        gorev: "θ = 225° için noktanın koordinatlarını bul. Hangi çeyrekte?",
      },
      dene: ["h5-cember-koordinat"],
    },
    {
      baslik: "Genlik, frekans ve faz",
      metin: md(`
**Neden önemli?** Bir sinüsü tanımlamak için üç sayı yeter. Fourier analizi bir sinyali bu üç sayının listeleri olarak yazar.

Genel sinüs:

$$x(t) = A\\,\\sin(2\\pi f t + \\varphi)$$

- **Genlik A:** Eğrinin tepe değeri. Sinüs −A ile +A arasında salınır.
- **Frekans f:** Saniyedeki devir (salınım) sayısı, birimi **Hz**. **Periyot** $T = 1/f$, bir devrin süresidir. **Açısal frekans** $\\omega = 2\\pi f$ (rad/s).
- **Faz φ:** Eğrinin t = 0'daki başlangıç açısı. Pozitif φ eğriyi zamanda **sola** (erkene) kaydırır; kayma miktarı $\\varphi/(2\\pi f)$ saniyedir.

Çember gözüyle: genlik çemberin yarıçapı, frekans saniyedeki tur sayısı, faz noktanın t = 0'daki konumudur.

[[G-H5-02]]

> **Çözümlü örnek:** $x(t) = 3\\sin(10\\pi t + \\pi/2)$ için genlik, frekans, periyot ve faz nedir?
>
> 1. Genlik A = 3.
> 2. 2πf = 10π, yani f = 5 Hz; periyot T = 1/5 = 0,2 s.
> 3. Faz φ = π/2 = 90°. sin(θ + 90°) = cos θ olduğu için bu sinyal $3\\cos(10\\pi t)$'dir.

> **Sık hata:** $\\sin(10\\pi t)$'de frekansı 10π ya da 10 sanmak. Parantezin içi $2\\pi f t$ biçimine getirilir: 10π = 2π·5, f = 5 Hz.
`),
      matlab: {
        kod: `t = 0:0.001:1;
A = 3; f = 5; faz = pi/2;
x = A * sin(2*pi*f*t + faz);
y = A * cos(2*pi*f*t);

fark = max(abs(x - y))      % 0: aynı sinyal
T = 1 / f
plot(t, x), xlabel('t (s)'), title('3 sin(10\\pi t + \\pi/2)')`,
        gorev: "faz = pi/4 yap. Eğri kaç saniye sola kaydı? (φ / (2πf))",
      },
      dene: ["h5-frekans-oku"],
    },
    {
      baslik: "Sinüslerin toplamı",
      metin: md(`
**Neden önemli?** Fourier serisi ve dönüşümü sinüsleri toplar. Toplamın ne zaman yine bir sinüs olduğunu, ne zaman yeni bir dalga biçimi verdiğini bilmek bu fikrin temelidir.

**Aynı frekans.** Genlikleri ya da fazları farklı ama **frekansları aynı** iki sinüs toplanınca sonuç, **aynı frekansta**, farklı genlik ve fazda bir sinüstür. Çember gözüyle iki dönen ok (fazör) aynı hızla döner; toplamları da aynı hızla dönen tek bir oktur. Örneğin

$$a\\sin(\\omega t) + b\\cos(\\omega t) = \\sqrt{a^2 + b^2}\\;\\sin(\\omega t + \\varphi),\\qquad \\tan\\varphi = b/a$$

Eşit genlikli, aralarında 180° faz farkı olan iki sinüs birbirini tamamen yok eder.

**Farklı frekans.** Frekansları farklı iki sinüsün toplamı **artık bir sinüs değildir**. Frekanslar bir temel frekansın tam katlarıysa (ör. 1 Hz ve 3 Hz) toplam yine **periyodiktir**; periyodu temel frekansın periyodudur. Sinüs sayısı arttıkça (3, 4, 5, ...) toplamın biçimi giderek karmaşıklaşır.

[[G-H5-03]]

> **Çözümlü örnek:** $3\\sin(2\\pi t) + 4\\cos(2\\pi t)$ hangi genlikte bir sinüstür?
>
> 1. İkisi de 1 Hz: sonuç 1 Hz'lik tek bir sinüs.
> 2. Genlik $\\sqrt{3^2 + 4^2} = 5$; faz $\\tan\\varphi = 4/3$, φ ≈ 53°.

> **Sık hata:** Aynı frekanslı sinüslerin genliklerini doğrudan toplamak. Genlikler ancak fazlar aynıysa toplanır; genel durumda fazörler vektör gibi toplanır.
`),
      matlab: {
        kod: `t = 0:0.001:2;
x = 3*sin(2*pi*t) + 4*cos(2*pi*t);
genlik = max(x)                    % yaklaşık 5

% Farklı frekanslar: toplam sinüs değil ama 1 s periyotlu
y = sin(2*pi*t) + 0.5*sin(2*pi*3*t);
tekrar = max(abs(y(1:1001) - y(1001:2001)))   % 0: 1 s sonra aynı

subplot(2,1,1), plot(t, x), title('aynı frekans: yine sinüs')
subplot(2,1,2), plot(t, y), title('1 Hz + 3 Hz: sinüs değil')`,
        gorev: "y'ye 0.3*sin(2*pi*5*t) ekle. Eğri kareye benzemeye başladı mı?",
      },
      dene: ["h5-ayni-frekans"],
    },
    {
      baslik: "Fourier serisi: kare ve üçgen dalga",
      metin: md(`
**Neden önemli?** Kare dalga gibi köşeli bir sinyalin bile sinüslerin toplamı olarak yazılabilmesi, Fourier analizinin en şaşırtıcı ve en kullanışlı sonucudur.

Uygun genlik ve frekanslardaki sinüsleri toplamaya devam edersek kendini tekrarlayan yeni dalga biçimleri elde ederiz. Periyodik bir sinyali, temel frekansın tam katlarındaki (**harmonikler**) sinüslerin toplamı olarak yazmaya **Fourier serisi** denir.

**Kare dalga** (genlik 1, frekans f₀): yalnızca **tek** harmonikler vardır ve genlikleri 1/k ile azalır:

$$x(t) = \\frac{4}{\\pi}\\left[\\sin(2\\pi f_0 t) + \\frac{1}{3}\\sin(2\\pi\\,3 f_0 t) + \\frac{1}{5}\\sin(2\\pi\\,5 f_0 t) + \\cdots\\right]$$

**Üçgen dalga:** yine yalnızca tek harmonikler vardır, ama genlikler **1/k²** ile azalır ve işaretleri sırayla değişir:

$$x(t) = \\frac{8}{\\pi^2}\\left[\\sin(2\\pi f_0 t) - \\frac{1}{9}\\sin(2\\pi\\,3 f_0 t) + \\frac{1}{25}\\sin(2\\pi\\,5 f_0 t) - \\cdots\\right]$$

Genlikler ne kadar hızlı azalırsa sinyal o kadar "yumuşaktır": köşeli kare dalga çok sayıda güçlü harmonik ister, üçgen dalga birkaç terimle iyi yaklaşılır. **Testere dişi** dalgada ise tek ve çift bütün harmonikler 2/(πk) genlikle bulunur.

[[G-H5-04]]

**Gibbs olayı.** Kare dalganın sıçrama noktalarının yanında, kısmi toplam hedefi yaklaşık **%9** aşar (tepe yaklaşık 1,18). Terim sayısı artınca aşım daralır ama yüksekliği kaybolmaz.

> **Çözümlü örnek:** Genliği 1 olan kare dalganın Fourier serisinde 5. harmoniğin genliği nedir? 4. harmonik var mı?
>
> 1. Tek harmonik: genlik $\\frac{4}{\\pi}\\cdot\\frac{1}{5} = \\frac{4}{5\\pi} \\approx 0{,}255$.
> 2. 4 çift olduğu için kare dalgada 4. harmonik yoktur (genliği 0).

> **Sık hata:** Kare dalgada bütün harmoniklerin bulunduğunu sanmak. Yarım periyot simetrisi (ikinci yarı, birincinin ters işaretlisi) çift harmonikleri yok eder.
`),
      matlab: {
        kod: `t = 0:0.0005:2;
f0 = 1;
x = zeros(size(t));
for k = 1:2:19                      % ilk 10 tek harmonik
  x = x + (4/pi) * sin(2*pi*k*f0*t) / k;
end
kare = sign(sin(2*pi*f0*t));

tepe = max(x)                       % Gibbs aşımı: yaklaşık 1.18
k = 1:2:9;
genlikler = 4 ./ (pi * k)

plot(t, kare, '--'), hold on, plot(t, x)
title('Kare dalga: ilk 10 tek harmonik')`,
        gorev: "Üçgen dalga için katsayıyı (8/pi^2) * (-1)^((k-1)/2) / k^2 yap. Kaç terimde yeterince iyi bir üçgen elde ediyorsun?",
      },
      dene: ["h5-kare-harmonik"],
    },
    {
      baslik: "Periyodik olmayan sinyaller ve spektrum",
      metin: md(`
**Neden önemli?** Konuşma, müzik ya da tek bir darbe kendini tekrarlamaz. Bunların da frekans içeriğini anlatabilmek için Fourier serisinden Fourier dönüşümüne geçilir.

Kendini tekrarlamayan bir dalga biçimi de sinüslerle elde edilebilir. Bunun için harmonikler yetmez: **bütün frekanslardaki** sinüsler gerekir ve her birinin genliği **son derece küçük** olmalıdır.

**Kâğıt benzetmesi.** Bir kâğıt yaprağı o kadar incedir ki hacmi neredeyse sıfırdır. Ama sonsuz sayıda yaprak üst üste konunca ölçülebilir bir hacim oluşur. Burada da tek başına ölçülebilir bir anlamı olmayan, sonsuz küçük genlikli sonsuz sayıda sinüsün toplamı anlamlı bir sinyal verir. Bazı yapraklar diğerlerinden büyük olabilir: bazı frekans bölgelerinde sinüsler daha **yoğun**dur.

Bu yoğunluğun frekansa göre dağılımına sinyalin **frekans spektrumu** denir. Periyodik sinyalin spektrumu harmoniklerde **çizgilerden**, periyodik olmayan sinyalinki **sürekli** bir eğriden oluşur.

[[G-H5-05]]

Dikdörtgen darbenin spektrumu $X(f) = \\sin(\\pi f\\tau)/(\\pi f)$'dir; ilk sıfırı $f = 1/\\tau$'dadır. Darbe kısaldıkça spektrum genişler: **zamanda dar olan, frekansta geniştir.**

Aynı sinyal hem zamanda hem frekansta gösterilebilir. Zamandan frekansa geçişe **Fourier dönüşümü**, frekanstan zamana geri dönüşe **ters Fourier dönüşümü** denir; ikisi aynı bilgiyi taşır.

[[G-H5-07]]

> **Çözümlü örnek:** 0,25 s süreli dikdörtgen darbenin spektrumunun ilk sıfırı hangi frekanstadır?
>
> 1. İlk sıfır f = 1/τ.
> 2. f = 1/0,25 = 4 Hz. Darbe 1 s olsaydı ilk sıfır 1 Hz'de olurdu: kısa darbe dört kat geniş spektrum verir.

> **Sık hata:** Spektrumu "sinyalin içindeki frekansların listesi" diye düşünüp periyodik olmayan sinyalde de birkaç çizgi beklemek. Periyodik olmayan sinyalin spektrumu süreklidir.
`),
      matlab: {
        kod: `% Dikdörtgen darbenin spektrumunu integralle yaklaşık hesapla
tau = 1;
t = -2:0.001:2;
x = double(abs(t) <= tau/2);

f = 0:0.5:3;
X = zeros(size(f));
for i = 1:length(f)
  X(i) = real(trapz(t, x .* exp(-1j*2*pi*f(i)*t)));
end
formul = sin(pi*f*tau) ./ (pi*f);
formul(1) = tau;                     % f = 0'da limit
tablo = [f' X' formul']          % f, integral, formül
stem(f, X), title('Dikdörtgen darbenin spektrumu'), xlabel('f (Hz)')`,
        gorev: "tau = 0.5 yap. İlk sıfır hangi frekansa taşındı?",
      },
      dene: ["h5-darbe-sifir"],
    },
    {
      baslik: "Sarma makinesi ve kütle merkezi",
      metin: md(`
**Neden önemli?** Fourier dönüşümünün formülü ilk bakışta karışıktır. "Sinyali bir çemberin etrafına sar ve ağırlık merkezine bak" fikri, formülün her parçasının neden orada olduğunu gösterir.

Saniyede 3 devir yapan bir sinyal düşün: $g(t) = 1 + \\cos(2\\pi \\cdot 3t)$. Sinyali yukarı kaydırdık (+1) ki değerleri hep pozitif olsun. Şimdi bu sinyali bir çemberin etrafına saralım: her t anında, merkezden **g(t) uzaklıkta** ve zamanla dönen bir açıda bir nokta koyalım. Çember saniyede **f devir** dönsün; f'ye **sarma frekansı** denir.

- f, sinyalin frekansından farklıysa tepeler çemberin her yanına dağılır; eğrinin **kütle merkezi** merkeze yakın kalır.
- f = 3 olduğunda bütün tepeler hep aynı yana düşer ve kütle merkezi merkezden belirgin biçimde **uzaklaşır**.

Kütle merkezinin yatay konumunu f'ye göre çizersek sinyalin frekansında bir tepe görürüz. Bu çizime "**neredeyse Fourier dönüşümü**" diyebiliriz. f = 0'daki tepe, sinyali yukarı kaydırmamızdan (sabit bileşenden) gelir.

[[G-H5-06]]

**Euler formülü.** Çember üzerinde dönmeyi karmaşık sayılarla yazmak en kolayıdır:

$$e^{j\\theta} = \\cos\\theta + j\\sin\\theta$$

$e^{j\\theta}$ birim çember üzerinde θ açısındaki noktadır. $e^{-j2\\pi f t}$ ise t ilerledikçe saniyede f devirle **saat yönünde** döner. Sinyali zaman sıfırdan itibaren çemberin etrafına saat yönünde sardığımız için üstel ifadede **eksi** işareti vardır. Sarılmış nokta $g(t)\\,e^{-j2\\pi f t}$'dir.

**Kütle merkezi** ise sarılmış noktaların ortalamasıdır. N örnek için $\\frac{1}{N}\\sum g(t_n)\\,e^{-j2\\pi f t_n}$, sürekli halde

$$\\frac{1}{t_2 - t_1}\\int_{t_1}^{t_2} g(t)\\,e^{-j2\\pi f t}\\,dt$$

> **Çözümlü örnek:** $g(t) = 1 + \\cos(2\\pi\\cdot 3t)$ sinyali 1 saniye boyunca saat yönünde saniyede 3 devirle sarılıyor. Kütle merkezi nerededir?
>
> 1. $g(t)\\,e^{-j2\\pi\\cdot 3t} = e^{-j2\\pi\\cdot 3t} + \\tfrac{1}{2} + \\tfrac{1}{2}e^{-j2\\pi\\cdot 6t}$.
> 2. Dönen terimlerin tam devirlerdeki ortalaması 0'dır; yalnızca sabit 1/2 kalır.
> 3. Kütle merkezi (0,5; 0): yatay eksenin sağında, merkezden 0,5 uzakta.

> **Sık hata:** Sabit bileşenin (yukarı kaydırmanın) her sarma frekansında kütle merkezini kaydırdığını sanmak. Sabit 1, f ≠ 0 iken tam devirlerde çemberin etrafına eşit yayılır ve ortalaması 0'dır; yalnızca f = 0'da katkı verir.
`),
      matlab: {
        kod: `t = 0:0.001:0.999;                 % 1 saniye, 1000 örnek
g = 1 + cos(2*pi*3*t);

f = [0 1 2 3 4 5];
km = zeros(size(f));
for i = 1:length(f)
  km(i) = mean(g .* exp(-1j*2*pi*f(i)*t));   % kütle merkezi
end
round(real(km) * 1000) / 1000                % f = 0'da 1, f = 3'te 0.5

z = g .* exp(-1j*2*pi*3*t);                  % 3 devir/s ile sarılmış
plot(real(z), imag(z)), axis equal, title('f = 3 ile sarma')`,
        gorev: "Sarma frekansını 2.5 yap ve eğriyi çiz. Kütle merkezi nereye düştü?",
      },
      dene: ["h5-euler", "h5-sarma-tepe"],
    },
    {
      baslik: "Fourier dönüşümü",
      metin: md(`
**Neden önemli?** Ses düzenleme, görüntü sıkıştırma ve filtre tasarımı Fourier dönüşümüyle yapılır. Sonraki iki hafta bu dönüşümün ayrık (DFT) ve hızlı (FFT) hallerini işler.

Gerçek Fourier dönüşümünde süreye **bölünmez**; kütle merkezi yerine onun süreyle ölçeklenmiş hali alınır:

$$\\hat g(f) = \\int_{t_1}^{t_2} g(t)\\,e^{-j2\\pi f t}\\,dt$$

Bunun sonucu: sinyalin gerçek frekansında (ör. saniyede 2 tepe varsa 2 Hz'de) değer süre uzadıkça **katlanarak büyür**; diğer frekanslarda katkılar birbirini götürür ve değer küçük kalır. Süre uzadıkça tepe hem yükselir hem **daralır**.

[[G-H5-08]]

Gerçek Fourier dönüşümü −∞'dan +∞'a bütün zamanı kapsar:

$$\\hat g(f) = \\int_{-\\infty}^{\\infty} g(t)\\,e^{-j2\\pi f t}\\,dt$$

Ses düzenlerken belli bir zaman aralığında integral alırız; gerçek dönüşüm, zaman aralığı sonsuza giderken bu integralin limitidir.

**Doğrusallık.** İki frekansı toplayan bir sinyalin (ör. 2 Hz + 3 Hz) dönüşümü, her birinin dönüşümünün toplamıdır; spektrumda iki ayrı tepe görülür. Bu yüzden Fourier dönüşümü birbirine karışmış sesleri (ör. iki diyapazonun sesi) bileşenlerine ayırabilir. **Ters Fourier dönüşümü** de bileşenleri toplayıp sinyali geri kurar.

> **Çözümlü örnek:** $g(t) = \\cos(2\\pi\\cdot 3t)$ sinyali 0 ≤ t ≤ 4 s aralığında gözleniyor. $\\hat g(3)$ yaklaşık kaçtır?
>
> 1. $\\cos(2\\pi\\cdot 3t)\\,e^{-j2\\pi\\cdot 3t} = \\tfrac{1}{2} + \\tfrac{1}{2}e^{-j2\\pi\\cdot 6t}$.
> 2. İkinci terimin 4 s boyunca integrali 0 (tam devirler); birinci terimin integrali 4 · 1/2 = 2.
> 3. $\\hat g(3) = 2$: yaklaşık T/2. Süre iki katına çıksaydı 4 olurdu.

> **Sık hata:** Fourier dönüşümünü "ortalama" sanmak. Kütle merkezi ortalamadır; dönüşüm süreyle çarpılmış halidir, bu yüzden uzun gözlemlerde tepe değeri büyür.
`),
      matlab: {
        kod: `T = 4;
t = 0:0.001:T;
g = cos(2*pi*3*t) + 0.5*cos(2*pi*5*t);       % 3 Hz ve 5 Hz

f = 0:0.05:7;
G = zeros(size(f));
for i = 1:length(f)
  G(i) = abs(trapz(t, g .* exp(-1j*2*pi*f(i)*t)));
end
tepe3 = G(f == 3)                             % yaklaşık T/2
tepe5 = G(f == 5)                             % yaklaşık T/4
plot(f, G), xlabel('f (Hz)'), title('|G(f)|, T = 4 s')`,
        gorev: "T = 8 yap. Tepeler ne kadar yükseldi, ne kadar daraldı?",
      },
      dene: ["h5-donusum-tepe"],
    },
  ],
  test: [
    "h5-sinus-isdusum",
    "h5-periyot",
    "h5-faz-kayma",
    "h5-toplam-genlik",
    "h5-kare-cift",
    "h5-ucgen-azalma",
    "h5-spektrum-surekli",
    "h5-sarma-esit",
    "h5-eksi-isaret",
    "h5-sure-tepe",
  ],
};
