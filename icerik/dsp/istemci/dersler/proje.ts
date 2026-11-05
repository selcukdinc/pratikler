import { md, type Ders } from "../../../../src/dersler/tipler";

// Proje haftası: hazır çözüm yoktur. Bölümler projenin adımlarını açıklar,
// gereken kavramları önceki haftalara bağlar ve tarayıcıda denenebilecek küçük
// yapı taşları verir. Asıl iş masaüstü MatStudio'da yapılır.
export const PROJE: Ders = {
  hafta: 9,
  proje: true,
  baslik: "Proje: gürültülü bir sinyali filtrele ve değerlendir",
  ozet: "Dönem projesinin adımlarına rehber: bir sinyale gürültü eklemek, spektrumdan filtre türüne karar vermek, FIR ve IIR filtreler tasarlamak, dalgacıkla gürültü gidermek, sonuçları ölçütlerle karşılaştırmak, istatistiksel öznitelik çıkarmak ve raporu hazırlamak. Hazır çözüm yok; yalnızca yol haritası ve küçük yapı taşları var.",
  bolumler: [
    {
      baslik: "Projede ne isteniyor?",
      metin: md(`
**Amaç.** Bir sinyal bulacak ya da üreteceksin (ses, bir sensör ölçümü, biyolojik bir sinyal…), ona bilinen türde gürültü ekleyeceksin, sonra farklı filtrelerle gürültüyü temizleyip asıl sinyale ne kadar yaklaştığını ölçeceksin. Proje, dönem boyunca gördüğün her şeyi bir araya getirir: örnekleme, istatistik, konvolüsyon, frekans yanıtı, DFT ve FFT.

**Adımlar.**
1. Asıl sinyalin ve gürültülü sinyalin FFT'sini al, **tek yanlı spektrumu** incele. Filtrenin türüne (alçak, yüksek ya da bant geçiren) ve kesim frekanslarına buradan karar ver.
2. Filtre tasarım aracıyla (Filter Designer ya da ~designfilt~) **6 filtre** tasarla: 3 FIR (eşit dalgalı, ara değerlemeli FIR, pencere) ve 3 IIR (Butterworth, Chebyshev I, eliptik). Her filtreyi bir MatStudio fonksiyonuna dönüştür.
3. Filtreleri gürültülü sinyale uygula (~filter~ ya da ~filtfilt~).
4. Aynı işi **dalgacık dönüşümüyle** de yap: bir dalgacık ailesi seç, aynı seviyede üç farklı ayrıştırma dene (ör. aynı ailenin üç üyesi). Bütün filtrelenmiş sinyalleri asıl sinyalin üstüne çiz.
5. Her filtreleme için başarım ölçütlerini hesapla: PSNR, MSE, en büyük hata ve L2 oranı.
6. PSNR'si en yüksek sonuçtan, zaman ve frekans alanında **3 saniyelik parçalar** için ortalama, standart sapma, çarpıklık, basıklık ve entropi çıkar; tabloya koy ve çiz.

**Bu sayfa ne yapar, ne yapmaz?** Her bölüm bir adımı açıklar, gereken kavramı önceki haftalara bağlar ve tarayıcıda çalışan küçük bir örnek verir. Örnekler yapay sinyallerle çalışır ve projenin çözümü değildir: ses dosyası okumak, filtre tasarım araçları ve dalgacık fonksiyonları masaüstü MatStudio'da (Signal Processing ve Wavelet araç kutularıyla) yapılır.

> **İpucu:** Önce kısa bir sinyalle (birkaç saniye) bütün adımları uçtan uca bir kez çalıştır, sonra her adımı iyileştir. Son gün altı filtreyi birden ilk kez denemek en sık yapılan hatadır.
`),
      matlab: {
        kod: `% Projenin iskeleti: her adım bir bölüm
fs = 8000;
t = 0:1/fs:1-1/fs;
x = sin(2*pi*440*t) .* exp(-2*t);   % yapay bir "ses"
gurultu = 0.2*randn(1, length(t));
y = x + gurultu;

disp('1. spektrum  2. filtre tasarımı  3. filtreleme')
disp('4. dalgacık  5. ölçütler         6. öznitelikler')
plot(t(1:400), y(1:400)), hold on, plot(t(1:400), x(1:400))
legend('gürültülü', 'asıl'), xlabel('t (s)')`,
        gorev: "Gürültünün genliğini 0.05 ve 0.5 yap. Gözle ayırt edebildiğin en büyük gürültü ne?",
      },
    },
    {
      baslik: "Sinyal ve gürültü",
      metin: md(`
**Sinyal.** Masaüstü MatStudio'da bir ses dosyası şöyle okunur ve dinlenir:

\`\`\`
[y, Fs] = audioread('ses_sinyali.wav');   % y: örnekler, Fs: örnekleme frekansı
sound(y, Fs);
\`\`\`

Dosya stereoysa y iki sütunludur; tek kanalla çalışmak için ~y(:, 1)~ al. Kendi sinyalini de üretebilirsin: farklı frekanslı sinüslerin toplamı, bir zarfla çarpılmış ton ya da bir sensörden kaydedilmiş veri.

**Gürültü.** Projede gürültü üç bileşenin toplamıdır:
- **Beyaz Gauss gürültüsü:** ~wgn~ ya da ~randn~ ile. Spektrumu her frekansta yaklaşık düzdür (1. haftadaki normal dağılım).
- **Rastgele (düzgün dağılımlı) gürültü:** ~rand~ ile. ~rand~ 0 ile 1 arasında sayı verdiği için ortalamayı sıfırlamak üzere ~rand − 0.5~ biçiminde kullanılır.
- **Periyodik gürültü:** ~sin~ ve ~cos~ ile; şebeke uğultusu (50 Hz) ya da yüksek frekanslı bir ıslık gibi. Spektrumda keskin bir tepe olarak görünür.

**Sinyal-gürültü oranı.** Gürültünün ne kadar güçlü olduğunu desibelle söyleriz:

$$\\mathrm{SNR} = 10\\log_{10}\\frac{\\sum x^2(n)}{\\sum e^2(n)}\\;\\text{dB}$$

Burada e(n) eklenen gürültüdür. 20 dB'de gürültü sinyalin onda biri genliğindedir; 0 dB'de ikisi eşit güçtedir.

> **Sık hata:** Gürültüyü sinyalin örnek sayısından farklı uzunlukta üretmek. ~randn(size(y))~ gibi bir yazımla boyutları eşitle.
`),
      matlab: {
        kod: `fs = 8000;
t = 0:1/fs:1-1/fs;
N = length(t);
x = sin(2*pi*440*t) + 0.5*sin(2*pi*880*t);

beyaz = 0.3*randn(1, N);              % beyaz Gauss
duzgun = 0.3*(rand(1, N) - 0.5);      % düzgün, ortalaması 0
periyodik = 0.4*cos(2*pi*50*t) + 0.2*sin(2*pi*3000*t);
e = beyaz + duzgun + periyodik;
y = x + e;

SNR = 10*log10(sum(x.^2) / sum(e.^2))
histogram(beyaz, 40), title('beyaz Gauss gürültünün histogramı')`,
        gorev: "SNR'yi yaklaşık 10 dB yapmak için gürültü genliklerini nasıl ölçeklemen gerekir?",
      },
    },
    {
      baslik: "Spektrumdan filtre kararına",
      metin: md(`
**Neden önemli?** Filtreyi körlemesine seçemezsin. Asıl sinyalin enerjisinin hangi frekanslarda toplandığını, gürültünün nereye düştüğünü spektrum söyler.

**Tek yanlı spektrum.** Gerçel bir sinyalin N noktalı FFT'si simetrik olduğundan yalnızca k = 0..N/2 aralığı yeterlidir. Frekans ekseni $f_k = k f_s/N$, genlik yaklaşık $(2/N)|X(k)|$ olarak okunur (7. ve 8. haftalar).

**Karar.**
- Asıl sinyal düşük frekanslarda, gürültü yukarıdaysa: **alçak geçiren**.
- Asıl sinyal yüksek frekanslarda, gürültü aşağıdaysa (ör. 50 Hz uğultu): **yüksek geçiren**.
- Asıl sinyal belli bir bantta, gürültü iki yanındaysa: **bant geçiren**.

Beyaz gürültü her frekansa yayıldığından hiçbir filtre onu tamamen silemez; yalnızca sinyalin bulunmadığı bantlardaki kısmı atılabilir.

**Şartname.** Kesim frekansını seçmek yetmez; tasarım aracı bir **şartname** ister: geçiş bandı kenarı, durdurma bandı kenarı, geçiş bandında izin verilen dalgalanma ve durdurma bandında istenen sönüm.

[[G-H9-01]]

Geçiş aralığı ne kadar dar, sönüm ne kadar büyük istenirse filtrenin derecesi o kadar yükselir. Şartnameyi spektrumda gördüğün boşluğa göre seç: sinyalin son önemli bileşeni ile gürültünün ilk önemli bileşeni arasına geçiş aralığını yerleştir.
`),
      matlab: {
        kod: `fs = 8000;
t = 0:1/fs:1-1/fs;
N = length(t);
x = sin(2*pi*440*t) + 0.5*sin(2*pi*880*t);
y = x + 0.3*randn(1, N) + 0.4*cos(2*pi*50*t) + 0.2*sin(2*pi*3000*t);

Y = fft(y);
f = (0:N/2-1) * fs / N;
genlik = 2/N * abs(Y(1:N/2));
plot(f, genlik), xlabel('f (Hz)'), title('gürültülü sinyalin tek yanlı spektrumu')`,
        gorev: "Tepeleri bul: hangileri asıl sinyalin, hangileri gürültünün? Sence hangi filtre türü ve hangi kesim frekansları uygun?",
      },
    },
    {
      baslik: "FIR ve IIR filtreler",
      metin: md(`
**İki aile.** 4. ve 6. haftalardan hatırla: FIR filtrenin dürtü yanıtı sonludur, IIR filtreninki geri besleme yüzünden sonsuzdur.

| | FIR | IIR |
|---|---|---|
| Kararlılık | her zaman kararlı | kutuplara bağlı |
| Faz | simetrik katsayılarla doğrusal | doğrusal değil |
| Aynı şartname için derece | yüksek | düşük |
| MatStudio'da uygulama | ~filter(b, 1, x)~ | ~filter(b, a, x)~ |

**Projedeki FIR tasarımları.**
- **Pencere yöntemi:** ideal filtrenin sonsuz dürtü yanıtı bir pencereyle (Hamming, Kaiser…) kesilir. Basittir; dalgalanma pencereye bağlıdır.
- **Eşit dalgalı (equiripple, Parks–McClellan):** hatayı bantlar boyunca eşit dalgalanacak biçimde dağıtır; aynı şartnameyi pencereden daha düşük dereceyle sağlar.
- **Ara değerlemeli FIR (IFIR):** dar geçişli bir filtreyi seyrek bir filtre ile onun görüntülerini bastıran ikinci bir filtrenin kaskadı olarak kurar; çarpma sayısını azaltır.

**Projedeki IIR tasarımları.**
- **Butterworth:** geçiş bandı en düz olandır (dalgalanma yok); kesimden sonra yavaş düşer.
- **Chebyshev I:** geçiş bandında dalgalanmaya izin verir, karşılığında daha dik düşer.
- **Eliptik:** iki bantta da dalgalanır; aynı şartnameyi en düşük dereceyle sağlar.

[[G-H9-02]]

**Tasarım aracından fonksiyona.** Filter Designer'da tasarımı bitirince *File → Generate MatStudio Code → Filter Design Function* ile filtreyi bir fonksiyona dönüştür. Komut satırından aynı iş ~designfilt~ ile yapılır:

\`\`\`
d = designfilt('lowpassiir', 'FilterOrder', 8, ...
    'PassbandFrequency', 1000, 'PassbandRipple', 0.5, ...
    'SampleRate', 8000);
y3 = filtfilt(d, ynoise);
\`\`\`

**filter mi filtfilt mi?** ~filter~ sinyali bir kez süzer ve fazı (gecikmeyi) korur. ~filtfilt~ ileri ve geri iki kez süzer: faz bozulması sıfırlanır, büyüklük yanıtının karesi uygulanır. Asıl sinyalle örnek bazında karşılaştırma yapacağın için gecikmeyi hesaba katmayı unutma.
`),
      matlab: {
        kod: `% Pencere yöntemiyle elle bir FIR alçak geçiren (tasarım aracının yerine)
fs = 8000;  fc = 1000;  M = 41;
n = 0:M-1;  m = n - (M-1)/2;
wc = 2*pi*fc/fs;
h = wc/pi * ones(1, M);
k = find(m ~= 0);
h(k) = sin(wc*m(k)) ./ (pi*m(k));          % ideal dürtü yanıtı
h = h .* (0.54 - 0.46*cos(2*pi*n/(M-1)));  % Hamming penceresi

[H, w] = freqz(h, 1, 512);
plot(w*fs/(2*pi), 20*log10(abs(H) + 1e-6))
xlabel('f (Hz)'), title('pencereli FIR: büyüklük (dB)')
gecikme = (M-1)/2                           % örnek cinsinden grup gecikmesi`,
        gorev: "M'yi 21 ve 81 yap. Geçiş aralığı nasıl değişti? Gecikme kaç örnek oldu?",
      },
    },
    {
      baslik: "Dalgacıkla gürültü giderme",
      metin: md(`
**Fikir.** Fourier dönüşümü sinyali sonsuz uzun sinüslere ayırır; bir bileşenin **ne zaman** olduğunu söylemez. Dalgacık dönüşümü sinyali kısa, yerel dalgacıklara ayırır: hem zaman hem frekans hakkında bilgi verir. Ani olaylar içeren sinyallerde (konuşma, kalp atışı) bu işe yarar.

**Ayrıştırma.** Her seviyede sinyal bir alçak geçiren ve bir yüksek geçiren filtreden geçirilip 2'ye seyreltilir (8. haftadaki seyreltme). Alçak geçirenin çıkışı **yaklaşıklık** (A), yüksek geçireninki **ayrıntı** (D) katsayılarıdır. Yaklaşıklık bir sonraki seviyede yeniden ayrıştırılır.

[[G-H9-03]]

**Gürültü giderme üç adımdır.**
1. Sinyali L seviyeye ayrıştır (ör. ~wavedec(y, 6, 'db4')~).
2. Ayrıntı katsayılarını **eşikle**: küçük katsayılar çoğunlukla gürültüdür ve sıfırlanır (sert eşik) ya da sıfıra doğru çekilir (yumuşak eşik).
3. Katsayılardan sinyali geri çat (~waverec~). Bu üç adımı tek komutta ~wdenoise~ da yapar.

**Seçimler.** Dalgacık ailesi (Daubechies ~db~, Symlet ~sym~, Coiflet ~coif~…), ailenin üyesi (db2, db4, db6: sayı büyüdükçe dalgacık daha düzgün ve uzun) ve seviye sayısı. Projede aynı aileden üç üyeyi aynı seviyede karşılaştıracaksın.

> **İpucu:** Seviye sayısını sinyal uzunluğu sınırlar: her seviye örnek sayısını yarıya indirir. Çok fazla seviye, asıl sinyalin düşük frekanslı kısmını da ayrıntıya taşıyıp silebilir.
`),
      matlab: {
        kod: `% En basit dalgacıkla (Haar) tek seviyeli gürültü giderme
N = 512;  n = 0:N-1;
x = double(mod(n, 128) < 64) + 0.5*sin(2*pi*n/256);   % basamaklı sinyal
y = x + 0.15*randn(1, N);

cift = y(1:2:end);  tek = y(2:2:end);
A = (cift + tek) / sqrt(2);          % yaklaşıklık
D = (cift - tek) / sqrt(2);          % ayrıntı

esik = 0.2;
D(abs(D) < esik) = 0;                % sert eşik

z = zeros(1, N);
z(1:2:end) = (A + D) / sqrt(2);      % geri çatma
z(2:2:end) = (A - D) / sqrt(2);

hataOnce = mean((y - x).^2)
hataSonra = mean((z - x).^2)
plot(n, y), hold on, plot(n, z), legend('gürültülü', 'Haar ile temizlenmiş')`,
        gorev: "Eşiği 0 ve 0.5 yap. Hata nasıl değişiyor? En iyi eşik hangi aralıkta?",
      },
    },
    {
      baslik: "Başarımı ölçmek",
      metin: md(`
**Neden önemli?** "Daha temiz görünüyor" bir ölçü değildir. Altı filtreyi ve üç dalgacık ayrıştırmasını sayılarla karşılaştırman gerekir.

x(n) asıl sinyal, $\\hat x(n)$ filtrelenmiş sinyal, N örnek sayısı olsun.

- **Ortalama karesel hata:** $\\mathrm{MSE} = \\frac{1}{N}\\sum_n \\big(x(n) - \\hat x(n)\\big)^2$. Küçük olması iyidir.
- **Tepe sinyal-gürültü oranı:** $\\mathrm{PSNR} = 10\\log_{10}\\dfrac{\\max|x|^2}{\\mathrm{MSE}}$ dB. Büyük olması iyidir.
- **En büyük hata:** $\\max_n |x(n) - \\hat x(n)|$. Tek bir kötü noktayı yakalar.
- **L2 oranı:** $\\sum \\hat x^2(n) / \\sum x^2(n)$. 1'e yakın olması, filtrenin sinyalin enerjisini koruduğunu gösterir.

MatStudio'daki ~measerr~ fonksiyonu bu dördünü birlikte verir: ~[psnr, mse, maxerr, L2rat] = measerr(x, xf)~. Fonksiyon senin MatStudio sürümünde yoksa formüllerle kendin hesapla.

> **Sık hata:** Gecikmeyi düzeltmeden karşılaştırmak. ~filter~ ile süzülmüş bir FIR çıkışı (M − 1)/2 örnek geç gelir; hiç düzeltmezsen iyi bir filtre bile kötü MSE alır. ~filtfilt~ ya da gecikme kadar kaydırma kullan.
`),
      matlab: {
        kod: `fs = 8000;
t = 0:1/fs:0.25-1/fs;
x = sin(2*pi*100*t);
y = x + 0.3*randn(1, length(t));

M = 15;
h = ones(1, M) / M;                  % basit bir hareketli ortalama
xf = filter(h, 1, y);
g = (M-1)/2;
xf = [xf(g+1:end) zeros(1, g)];      % gecikmeyi düzelt

e = x - xf;
MSE = mean(e.^2)
PSNR = 10*log10(max(abs(x))^2 / MSE)
enBuyukHata = max(abs(e))
L2oran = sum(xf.^2) / sum(x.^2)`,
        gorev: "Gecikme düzeltmesini sil (xf'yi kaydırma). PSNR ne kadar düştü?",
      },
    },
    {
      baslik: "İstatistiksel öznitelikler ve rapor",
      metin: md(`
**Öznitelikler.** En iyi sonucu (PSNR'si en yüksek olanı) 3 saniyelik parçalara böl. $f_s$ örnekleme frekansında her parça $3f_s$ örnektir. Her parça için, hem zaman alanındaki örneklerden hem de parçanın genlik spektrumundan şunları hesapla:

- **Ortalama** $\\mu$ ve **standart sapma** $\\sigma$ (1. hafta).
- **Çarpıklık** (skewness): $\\frac{1}{N}\\sum (x - \\mu)^3 / \\sigma^3$. Dağılımın bir yana yatıklığı; simetrik dağılımda 0.
- **Basıklık** (kurtosis): $\\frac{1}{N}\\sum (x - \\mu)^4 / \\sigma^4$. Kuyrukların ağırlığı; normal dağılımda 3.
- **Entropi:** değerlerin histogramından $p_i$ olasılıkları bulunup $H = -\\sum p_i \\log_2 p_i$. Sinyal ne kadar "düzensiz"se o kadar büyük.

Masaüstü MatStudio'da ~mean~, ~std~, ~skewness~, ~kurtosis~ ve ~entropy~ (ya da ~wentropy~) hazırdır. Sonuçları parça × öznitelik tablosuna koy ve her özniteliği parça numarasına göre çiz.

**Rapor ve teslim.**
- Projede ne yaptığını anlatan **1 sayfalık** metin.
- Tasarlanan filtrelerin özellikleri (tür, kesim frekansları, kazanç, derece) bir tabloda; her filtrenin ~fvtool~ görüntüsü.
- Zaman ve frekans alanı grafikleri resim olarak.
- Başarım ölçütleri tablosu (her filtre için PSNR, MSE, en büyük hata, L2 oranı).
- Öznitelik tabloları ve grafikleri.
- MatStudio kodları (filtre fonksiyonları ve ana betik) ile Word raporu, öğrenci numaran ve adınla adlandırılmış tek bir sıkıştırılmış dosyada (ör. ~ogrencino_ad_soyad.zip~). E-postanın konu satırını boş bırakma.

> **İpucu:** Tablo ve grafikleri betiğin kendisi üretsin (~writetable~, ~saveas~). Bir parametreyi değiştirdiğinde raporu baştan elle hazırlamak zorunda kalmazsın.
`),
      matlab: {
        kod: `fs = 1000;
t = 0:1/fs:9-1/fs;                      % 9 saniye
x = sin(2*pi*5*t) + 0.3*randn(1, length(t));
L = 3*fs;                               % 3 saniyelik parça
P = floor(length(x) / L);
oz = zeros(P, 5);
for p = 1:P
  s = x((p-1)*L+1 : p*L);
  mu = mean(s);  sg = std(s, 1);
  carpiklik = mean((s - mu).^3) / sg^3;
  basiklik = mean((s - mu).^4) / sg^4;
  kenar = linspace(min(s), max(s), 21);
  sayim = zeros(1, 20);
  for i = 1:20
    sayim(i) = sum(s >= kenar(i) & s < kenar(i+1));
  end
  sayim(20) = sayim(20) + sum(s == kenar(21));
  pr = sayim(sayim > 0) / L;
  entropi = -sum(pr .* log2(pr));
  oz(p, :) = [mu sg carpiklik basiklik entropi];
end
disp('   ortalama   std   çarpıklık   basıklık   entropi')
oz
bar(oz(:, 4)), title('parçalara göre basıklık')`,
        gorev: "Frekans alanı öznitelikleri için s yerine abs(fft(s)) kullan. Hangi öznitelikler belirgin biçimde değişti?",
      },
    },
  ],
  test: [],
};
