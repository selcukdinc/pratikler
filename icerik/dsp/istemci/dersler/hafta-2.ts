import { md, type Ders } from "../../../../src/dersler/tipler";

export const HAFTA_2: Ders = {
  hafta: 2,
  baslik: "MatStudio ile çalışmak",
  ozet: "Betik yazmayı, vektör ve matris kurmayı, indekslemeyi, eleman bazında ve matris işlemlerini, ilişkisel ve mantıksal işleçleri, fonksiyon yazmayı, rastgele sayı üretmeyi, dizileri birleştirmeyi ve mean, std, var, median, corrcoef gibi istatistik fonksiyonlarını boyutlarıyla kullanmayı öğren.",
  bolumler: [
    {
      baslik: "Betik, yorum ve komut penceresi",
      metin: md(`
**Neden önemli?** Dersin geri kalanında her konuyu MatStudio'da deneyeceğiz. Önce bir betiğin nasıl düzenlendiğini ve çıktının nereye düştüğünü bilmek gerekiyor.

MatStudio'da komutlar ya **komut penceresine** birer komut olarak yazılır ya da bir **betiğe** (~.m~ uzantılı dosya) toplanıp birlikte çalıştırılır. Ekranda soldaki editörde betik, altta komut penceresi, sağda şekiller ve çalışma alanı (*workspace*) vardır.

Betiklerin başına çoğunlukla şu üç satır yazılır:

~~~matlab
clc;        % komut penceresini temizle
clear;      % çalışma alanındaki değişkenleri sil
close all;  % bütün şekil pencerelerini kapat
~~~

- **Yorum:** ~%~ işaretinden sonra satırın geri kalanı çalıştırılmaz. Kodu açıklamak için kullanılır.
- **Bölüm:** Satır başında ~%%~ ile yazılan yorum betiği bölümlere ayırır. Masaüstü yazılımlarda *Run Section* ile yalnızca imlecin bulunduğu bölüm çalıştırılabilir; MatStudio betiği bütün olarak çalıştırır.
- **Noktalı virgül:** Bir komutun sonunda ~;~ varsa sonuç yazılmaz. Noktalı virgül yoksa MatStudio sonucu ~x = ...~ biçiminde komut penceresine yazar. Adı verilmemiş bir sonuç ~ans~ değişkenine konur.
- **disp:** ~disp('Merhaba')~ ya da ~disp(x)~ değeri adını yazmadan gösterir.
- **input:** ~r = input('Elma sayısını giriniz: ')~ kullanıcıdan sayı, ~input('Adın: ', 's')~ metin ister. MatStudio girdi bekleyemediği için burada değeri doğrudan bir değişkene ata.
- **Yardım:** ~help exp~ bir fonksiyonun açıklamasını, ~lookfor inverse~ açıklamasında "inverse" geçen fonksiyonları listeler (bunlar masaüstü yazılımlarda çalışır, MatStudio'da yok).
- **who / whos:** Çalışma alanındaki değişkenlerin adlarını (~who~) ya da adlarıyla boyut ve türlerini (~whos~) listeler.
- **save / load:** ~save degiskenler A B~ değişkenleri ~.mat~ dosyasına yazar, ~load degiskenler~ geri yükler (tarayıcıda yok; betiklerini Dosya menüsünden indirebilirsin).

**Özel değerler.** ~1/0~ sonsuzluk (~Inf~), ~0/0~ tanımsız (~NaN~, *not a number*) verir. ~pi~ π sayısı, ~i~ ve ~j~ sanal birimdir: ~a = 2 + 3i~ karmaşık bir sayıdır.

> **Sık hata:** Değişkene ~i~ ya da ~j~ adını verip sonra karmaşık sayı yazmak. ~i = 5;~ dedikten sonra ~2 + 3*i~ artık 17'dir. Karmaşık sayılar için ~3i~ ya da ~1j~ yazmak bu hatayı önler.
`),
      matlab: {
        kod: `%% Çıktı ve özel değerler
clc; clear;
x = 5          % noktalı virgül yok: sonuç yazılır
y = 2*x;       % noktalı virgül var: sessiz
3 + 4          % adı olmayan sonuç ans'e gider
disp('Merhaba DSP')
a = 1/0
b = 0/0
z = 2 + 3i
who`,
        gorev: "y satırının sonundaki noktalı virgülü sil ve yeniden çalıştır. Sonra who yerine whos yaz.",
      },
      dene: ["h2-noktali-virgul"],
    },
    {
      baslik: "Vektör oluşturma ve indeksleme",
      metin: md(`
**Neden önemli?** Ayrık bir sinyal MatStudio'da bir vektördür. Zaman eksenini kurmak, bir sinyalin bir parçasını almak ya da örnekleri ters çevirmek hep vektör oluşturma ve indeksleme ile yapılır.

**Vektör kurmanın yolları:**

- Köşeli parantezle, elemanları sırayla yazarak: ~x = [2 3.5 6 7]~ (boşluk ya da virgül eleman ayırır).
- **İki nokta üst üste** ile aralık: ~ilk:artış:son~. ~2:3:17~ ifadesi 2'den başlar, 3'er artar, 17'yi geçmeden durur. Artış yazılmazsa 1'dir: ~1:5~. Artış negatif olabilir: ~18:-2:-4~ geriye sayar.
- **linspace(a, b, n):** a ile b arasında (ikisi dahil) eşit aralıklı n değer. ~linspace(-4, 4, 5)~ → ~[-4 -2 0 2 4]~. Aralık yerine eleman sayısını bildiğinde kullanılır.
- **zeros(1, n)** ve **ones(1, n):** n elemanlı sıfır ya da bir vektörü.
- **Devrik:** ~x'~ ya da ~transpose(x)~ satır vektörünü sütun vektörüne çevirir.

Matematik fonksiyonları vektörün her elemanına ayrı uygulanır: ~exp(x)~, ~sin(x)~, ~abs(x)~.

**İndeksleme.** ~x(k)~ vektörün k'ıncı elemanıdır. MatStudio'da **indisler 1'den başlar**; ~x(0)~ hatadır. ~end~ son indisi gösterir. İndis yerine bir vektör yazılırsa birden çok eleman alınır:

[[G-H2-01]]

> **Çözümlü örnek:** ~v = 10:10:90~ olsun. ~v(4)~, ~v(end-1)~ ve ~v(2:3:end)~ nedir?
>
> 1. ~v~ = 10, 20, ..., 90 (9 eleman). ~v(4)~ = 40.
> 2. ~end-1~ = 8; ~v(8)~ = 80.
> 3. ~2:3:9~ indisleri 2, 5, 8'dir; değerler 20, 50, 80.

> **Sık hata:** Aralığın sonunun her zaman dahil olduğunu sanmak. ~1:2:10~ 10'u içermez (1, 3, 5, 7, 9), çünkü 9'dan sonraki adım 11'dir. Son değerin kesin dahil olmasını istiyorsan ~linspace~ kullan.
`),
      matlab: {
        kod: `%% Vektör oluşturma
x1 = 2:3:17
y1 = 18:-2:-4
b = linspace(-4, 4, 5)
s = zeros(1, 4)

%% İndeksleme
x = [2 3.5 6 7 8.2 -2 -5 6];
x(3)
x(3:7)
x(2:2:end)
ters = x(end:-1:1)`,
        gorev: "x'in son üç elemanını end ile alan bir ifade yaz. Sonra linspace ile 0'dan 1'e 11 eleman üret.",
      },
      dene: ["h2-aralik-uzunluk", "h2-linspace"],
    },
    {
      baslik: "Matrisler ve doğrusal indeks",
      metin: md(`
**Neden önemli?** Bir görüntü, çok kanallı bir kayıt ya da bir filtre bankası matristir. Satır-sütun indekslemesini ve MatStudio'nun elemanları hangi sırayla sakladığını bilmek, ~find~ gibi fonksiyonların çıktısını doğru okumayı sağlar.

Matrisler satırları noktalı virgülle ayırarak yazılır: ~A = [1 2 3; 4 5 6; 7 8 9]~. Bir eleman ~A(satır, sütun)~ ile alınır. **İki nokta üst üste** tek başına "o boyutun tamamı" demektir:

- ~A(3, :)~: 3. satırın tamamı (satır vektörü).
- ~A(:, 3)~: 3. sütunun tamamı (sütun vektörü).
- ~A(1:2, :)~: ilk iki satır.

**Doğrusal indeks.** MatStudio elemanları bellekte **sütun sırasıyla** saklar: önce 1. sütunun elemanları yukarıdan aşağı, sonra 2. sütun ve böyle sürer. Matrise tek bir indisle erişilirse bu sıra kullanılır. 3×3'lük ~A~'da ~A(6)~ 2. sütunun en altıdır. ~A(:)~ bütün elemanları bu sırayla tek bir sütuna dizer. r satırlı bir matriste (i, j) konumunun doğrusal indeksi $(j-1)\\,r + i$'dir.

**find** koşulu sağlayan elemanların **doğrusal indekslerini** döndürür. ~find(A == 5)~ değeri 5 olan konumları, ~find(A > 5)~ 5'ten büyük olanları verir.

[[G-H2-02]]

> **Çözümlü örnek:** ~B = [5 4 7; 8 0 5]~ için ~B(2, 3)~, ~B(4)~ ve ~find(B == 5)~ nedir?
>
> 1. ~B(2, 3)~: 2. satır, 3. sütun = 5.
> 2. Sütun sırası: 5, 8, 4, 0, 7, 5. Dördüncüsü 0'dır: ~B(4)~ = 0.
> 3. 5 değeri bu sırada 1. ve 6. konumda: ~find(B == 5)~ = ~[1; 6]~.

> **Sık hata:** Doğrusal indeksi satırlara göre saymak. MatStudio'da sayım sütunlara göre ilerler; ~A(2)~, 1. satırın 2. elemanı değil 2. satırın 1. elemanıdır.
`),
      matlab: {
        kod: `A = [1 2 3; 4 5 6; 7 8 9];
A(3, :)
A(:, 3)
A(6)
A(:)'          % devrik: tek satırda görmek için
[r, c] = size(A)

B = [5 4 7; 8 0 5];
find(B == 5)'
find(B <= 4)'`,
        gorev: "A'nın köşegenindeki elemanları doğrusal indeksle tek bir ifadede al: A([... ]). Hangi indisleri yazdın?",
      },
      dene: ["h2-dogrusal-indeks"],
    },
    {
      baslik: "Matris işlemleri",
      metin: md(`
**Neden önemli?** DSP'de çoğu işlem eleman bazında yapılır: bir sinyali bir pencereyle çarpmak, her örneğin karesini almak. Matris çarpımıyla eleman bazında çarpımı karıştırmak MatStudio'daki en yaygın hatadır.

MatStudio'da işleçlerin iki türü vardır:

- **Eleman bazında** işleçler başında nokta taşır: ~.*~, ~./~, ~.^~. Aynı konumdaki elemanlar arasında çalışır; iki işlenen aynı boyutta olmalı (ya da biri skaler olmalı).
- **Matris** işleçleri doğrusal cebir işlemidir: ~*~ matris çarpımı (satır · sütun), ~^~ matris kuvveti, ~/~ ve ~\\~ denklem çözümü. ~A * B~ için A'nın sütun sayısı B'nin satır sayısına eşit olmalı.

Skalerle işlemde fark yoktur: ~2*A~, ~A/2~, ~A + 1~ her elemana uygulanır. ~3.^A~ ise 3'ün A'daki her elemana kuvvetini alır.

[[G-H2-03]]

Doğrusal cebir fonksiyonları: ~inv(A)~ ters matris, ~det(A)~ determinant, ~A'~ devrik. Matematik fonksiyonları (~exp~, ~sin~, ~cos~, ~sqrt~, ~abs~) her zaman eleman bazında çalışır.

**Karmaşık matrisler** iki gerçek matristen kurulabilir: ~a = [1 2; 3 4] + 1j*[5 6; 7 8]~. ~real~, ~imag~, ~abs~, ~angle~ ve ~conj~ her elemana uygulanır. Dikkat: ~'~ karmaşık matrislerde **eşlenik** devrik alır; yalnızca devirmek için ~.'~ kullanılır.

> **Çözümlü örnek:** ~P = [1 0; 2 3]~, ~Q = [2 1; 1 2]~ için ~P.*Q~ ve ~P*Q~ nedir?
>
> 1. ~P.*Q~ = [1·2 0·1; 2·1 3·2] = ~[2 0; 2 6]~.
> 2. ~P*Q~: 1. satır · 1. sütun = 1·2 + 0·1 = 2; 1. satır · 2. sütun = 1·1 + 0·2 = 1; 2. satır · 1. sütun = 2·2 + 3·1 = 7; 2. satır · 2. sütun = 2·1 + 3·2 = 8. Sonuç ~[2 1; 7 8]~.

> **Sık hata:** Bir sinyalin karesini ~x^2~ ile almak. Vektörde ~x^2~ matris kuvvetidir ve hata verir; eleman bazında kare ~x.^2~'dir.
`),
      matlab: {
        kod: `A = [1 2; 3 4];
B = [5 6; 7 8];
A .* B        % eleman bazında
A * B         % matris çarpımı
A .^ 2
3 .^ A
inv(A)
det(A)
A * inv(A)    % birim matris (yuvarlama hatasıyla)`,
        gorev: "A^2 ile A.^2'yi karşılaştır; neden farklı? Sonra [1 2 3] * [1 2 3] yazıp hata mesajını oku.",
      },
      dene: ["h2-eleman-carpim"],
    },
    {
      baslik: "İlişkisel ve mantıksal işleçler",
      metin: md(`
**Neden önemli?** "Eşiği aşan örnekleri bul", "negatifleri sıfırla", "kaç örnek 3'ten büyük?" gibi soruların hepsi tek satırlık mantıksal ifadelerle çözülür; döngü yazmaya gerek kalmaz.

İlişkisel işleçler: ~<~ küçük, ~>~ büyük, ~<=~ küçük eşit, ~>=~ büyük eşit, ~==~ eşit, ~¬=~ **eşit değil**. Bir vektöre uygulanınca her eleman için **1 (doğru)** ya da **0 (yanlış)** olan mantıksal bir vektör verir: ~[4.5 6 -2] > 3~ → ~[1 1 0]~.

Mantıksal işleçler:

- ~&~ eleman bazında VE, ~|~ eleman bazında VEYA, ~¬~ DEĞİL.
- ~&&~ ve ~||~ **kısa devre** işleçleridir: yalnızca skalerlerle çalışır ve sol taraf sonucu belirliyorsa sağ tarafı hiç hesaplamaz. ~if~ ve ~while~ koşullarında kullanılır.

Mantıksal vektörler sayılarla hesaba girer: ~sum(x > 3)~ 3'ten büyük eleman **sayısını**, ~x(x > 3)~ bu elemanların **kendilerini**, ~sum(x(x > 3))~ toplamlarını verir. ~x(x < 0) = 0~ negatif elemanları sıfırlar.

> **Çözümlü örnek:** ~v = [3 -1 4 -1 5]~ için ~v > 0~, ~sum(v > 0)~, ~v(v < 0)~ nedir?
>
> 1. ~v > 0~ = ~[1 0 1 0 1]~.
> 2. Birlerin sayısı: ~sum(v > 0)~ = 3.
> 3. Negatif elemanlar: ~v(v < 0)~ = ~[-1 -1]~.

> **Sık hata:** Eşitlik denetimi için ~=~ yazmak. ~=~ atamadır; karşılaştırma ~==~ ile yapılır. Bir de ondalık sayıları ~==~ ile karşılaştırırken dikkat: ~0.1 + 0.2 == 0.3~ yuvarlama hatası yüzünden 0 verir; ~abs(a - b) < 1e-10~ kullan.
`),
      matlab: {
        kod: `x1 = [4.5 6 7 -2 5 -6 0];
x1 > 3
x1 == 7
x1 ~= 0
sayi = sum(x1 > 3)
buyukler = x1(x1 > 3)
aralikta = x1(x1 > -3 & x1 < 6)
x1(x1 < 0) = 0`,
        gorev: "x1'deki 5'ten küçük ya da 6'dan büyük elemanların sayısını tek satırda bul (| kullan).",
      },
      dene: ["h2-mantiksal-sayma"],
    },
    {
      baslik: "Fonksiyon yazmak",
      metin: md(`
**Neden önemli?** Aynı hesabı farklı sinyallere uygulamak için kodu fonksiyon olarak yazarız. Ödevlerin çoğu da "şunu yapan bir fonksiyon yazınız" diye başlar.

Bir fonksiyon şu biçimde tanımlanır:

~~~matlab
function [toplam, fark] = toplamFark(sayi1, sayi2)
% toplamı ve farkın mutlak değerini döndürür
    toplam = sayi1 + sayi2;
    fark = abs(sayi1 - sayi2);
end
~~~

- İlk satırda ~function~, köşeli parantez içinde **çıkışlar**, eşittir, **fonksiyonun adı** ve parantez içinde **girişler** yazılır.
- Fonksiyon kendi ayrı dosyasında duruyorsa **dosya adı fonksiyon adıyla aynı** olmalıdır: ~toplamFark.m~.
- Fonksiyonun içindeki değişkenler **yereldir**: çağıran betiğin değişkenlerini görmez, onlara dokunmaz. Değer yalnızca girişlerle girer, çıkışlarla döner.
- Çağırırken çıkışlar köşeli parantezle alınır: ~[t, f] = toplamFark(5, 7)~. Tek değişkenle çağrılırsa yalnızca ilk çıkış alınır.

**Yerel fonksiyonlar.** Bir betiğin **sonuna** fonksiyon tanımları eklenebilir; betik onları çağırabilir. MatStudio'da fonksiyonlarını böyle yazarsın.

**Anonim fonksiyonlar.** Tek satırlık bir ifade için dosya açmaya gerek yoktur: ~f = @(t) exp(-t) .* sin(2*pi*t)~ yazıp ~f(0.5)~ diye çağrılır.

> **Çözümlü örnek:** Bir vektörün pozitif elemanlarının toplamını ve sayısını döndüren fonksiyon:
>
> ~~~matlab
> function [s, n] = pozitifler(x)
>     s = sum(x(x > 0));
>     n = sum(x > 0);
> end
> ~~~
>
> ~[s, n] = pozitifler([3 -1 4])~ çağrısı s = 7, n = 2 verir.

> **Sık hata:** Fonksiyonun içinde betikteki bir değişkeni kullanmaya çalışmak. Fonksiyon yalnızca girişlerini görür; gereken her değeri giriş olarak ver.
`),
      matlab: {
        kod: `a = 5;
b = 7;
[t, f] = toplamFark(a, b)

kare = @(x) x.^2;
kare(1:4)

function [toplam, fark] = toplamFark(sayi1, sayi2)
    toplam = sayi1 + sayi2;
    fark = abs(sayi1 - sayi2);
end`,
        gorev: "Ödev: -7 ile 7 arasında 15 elemanlı bir vektör kur (randi ya da linspace) ve 3'ten küçük elemanlarını toplayan bir fonksiyon yaz.",
      },
      dene: ["h2-fonksiyon-cikis"],
    },
    {
      baslik: "Rastgele sayı üretmek",
      metin: md(`
**Neden önemli?** Gürültü eklemek, bir algoritmayı rastgele girişlerle denemek ya da veriyi karıştırmak için rastgele sayılar gerekir. 1. haftadaki gürültü üretimi burada MatStudio'ya dökülür.

- **rand:** 0 ile 1 arasında **düzgün** dağılımlı sayılar. ~rand(5)~ 5×5'lik bir matris, ~rand(5, 3)~ 5×3'lük bir matris, ~rand(5, 1)~ 5 elemanlı bir sütun vektörü verir.
- **randn:** ortalaması 0, standart sapması 1 olan **normal** dağılımlı sayılar. Boyut kuralları ~rand~ ile aynıdır. Ortalaması μ, standart sapması σ olan gürültü: ~mu + sigma*randn(1, N)~.
- **randi(imax, n):** 1 ile imax arasında düzgün dağılımlı **tamsayılardan** n×n matris. ~randi(10, 5, 2)~ 5×2'lik matris verir. Alt sınır da verilebilir: ~randi([-7 7], 1, 15)~.
- **randperm(n):** 1'den n'ye kadar sayıların **tekrarsız** karışık bir dizilişi. ~randperm(6, 4)~ bu sayılardan 4 tanesini tekrarsız seçer.
- **rng(tohum):** üreteci belirli bir başlangıca ayarlar; aynı tohumla her çalıştırmada aynı sayılar gelir. Sonuçları tekrar üretilebilir kılmak için betiklerin başına yazılır.

Bir dağılımın ortalamasını ve sınırlarını değiştirmek için ölçekle ve kaydır: a ile b arasında düzgün sayılar ~a + (b - a)*rand(1, N)~ ile üretilir.

> **Çözümlü örnek:** −2 ile 3 arasında düzgün dağılımlı 1000 sayı nasıl üretilir, ortalamaları yaklaşık kaç çıkar?
>
> ~x = -2 + 5*rand(1, 1000)~: rand'ı aralığın uzunluğu (5) ile çarp, alt sınırı (−2) ekle. Ortalama aralığın ortasına, (−2 + 3)/2 = 0,5'e yakın çıkar.

> **Sık hata:** ~rand(5)~'in 5 elemanlı bir vektör verdiğini sanmak. Tek argüman kare matris demektir: 25 eleman. Vektör için ~rand(1, 5)~ yaz.
`),
      matlab: {
        kod: `rng(0)
A = rand(2, 3)
B = randn(1, 5)
C = randi(10, 2, 4)
D = randperm(6)
E = randperm(6, 4)

x = -2 + 5*rand(1, 10000);
[min(x) max(x) mean(x)]`,
        gorev: "rng(0) satırını sil ve iki kez çalıştır: sayılar değişiyor mu? Sonra 3 ile 8 arasında 5 rastgele tamsayı üret.",
      },
      dene: ["h2-rand-boyut"],
    },
    {
      baslik: "Dizi birleştirme",
      metin: md(`
**Neden önemli?** İki kaydı uç uca eklemek, bir sinyalin sonuna sıfır doldurmak ya da kanalları tek matriste toplamak birleştirmeyle yapılır.

- **Yatay** (yan yana): ~[A, B]~, ~horzcat(A, B)~ ya da ~cat(2, A, B)~. **Satır sayıları** aynı olmalı.
- **Dikey** (alt alta): ~[A; B]~, ~vertcat(A, B)~ ya da ~cat(1, A, B)~. **Sütun sayıları** aynı olmalı.

~cat~ fonksiyonunun ilk argümanı birleştirilecek **boyuttur**: 1 satırlar yönü (alt alta), 2 sütunlar yönü (yan yana). Birleştirilen matrisin boyutu buna göre büyür: 2×2'lik ~A~ ile 2×3'lük ~B~ yan yana 2×5 olur.

[[G-H2-04]]

Masaüstü yazılımlarda hücre dizileri (~{M1, M2}~) içindeki matrisler ~cat(1, C{:})~ ile tek seferde birleştirilebilir. MatStudio'da hücre dizisi yok; aynı işi ~[M1; M2]~ yapar.

> **Çözümlü örnek:** ~P = ones(2)~ ve ~Q = zeros(2)~ için ~cat(1, P, Q)~ ve ~cat(2, P, Q)~ hangi boyuttadır?
>
> 1. ~cat(1, ...)~ alt alta: 2 + 2 = 4 satır, 2 sütun → 4×2.
> 2. ~cat(2, ...)~ yan yana: 2 satır, 2 + 2 = 4 sütun → 2×4.

> **Sık hata:** Boyutları uymayan matrisleri birleştirmek. 2×2'lik bir matrisin altına 1×3'lük bir satır eklenemez; MatStudio "boyutlar uyuşmuyor" hatası verir.
`),
      matlab: {
        kod: `A = [1 2; 3 4];
B = [4 5 6; 7 8 9];
C = [A, B]
D = horzcat(A, B);
isequal(C, D)

E = [1 2 3; 4 5 6];
F = [7 8 9];
G = vertcat(E, F)
size(cat(1, ones(3), zeros(3)))
size(cat(2, ones(3), zeros(3)))`,
        gorev: "x = 1:5 vektörünün sonuna üç sıfır ekleyen tek bir ifade yaz ([x, ...]).",
      },
      dene: ["h2-cat-boyut"],
    },
    {
      baslik: "İstatistik fonksiyonları ve boyut",
      metin: md(`
**Neden önemli?** 1. haftada elle hesapladığın ortalama, standart sapma ve varyans MatStudio'da tek fonksiyondur. Ama bir matrise uygulandığında sonucun neye göre hesaplandığını (sütun mu, satır mı, hepsi mi) bilmen gerekir.

Bir **vektöre** uygulanınca ~mean~, ~median~, ~std~, ~var~, ~sum~, ~max~, ~min~ tek bir sayı verir. Bir **matrise** uygulanınca varsayılan olarak **her sütun için** ayrı hesaplanır ve sonuç bir satır vektörüdür. Boyut belirtilerek bu değiştirilir:

- ~mean(A)~ ya da ~mean(A, 1)~: her sütunun ortalaması (satır vektörü).
- ~mean(A, 2)~: her satırın ortalaması (sütun vektörü).
- ~mean(A, 'all')~: bütün elemanların ortalaması (tek sayı).

**median** (ortanca), sıralanmış değerlerin ortasındakidir; eleman sayısı çiftse ortadaki iki sayının ortalamasıdır. Aykırı değerlerden ortalamaya göre çok daha az etkilenir.

**std ve var'da ağırlık.** Bu iki fonksiyonun ikinci argümanı **ağırlıktır** (w), boyut üçüncü argümandır: ~std(A, w, boyut)~. w = 0 (varsayılan) N − 1'e, w = 1 N'ye böler (1. haftadaki örnek ve popülasyon formülleri). ~std(A, 1, 'all')~ bütün elemanların popülasyon standart sapmasıdır. ~'includenan'~ seçeneği NaN'ları hesaba katar (varsayılan da budur).

[[G-H2-05]]

**corrcoef** (korelasyon katsayısı) iki değişkenin birlikte ne kadar doğrusal değiştiğini ölçer. Değeri −1 ile 1 arasındadır: **1** tam pozitif doğrusal ilişki (biri artınca öbürü de artar), **−1** tam negatif ilişki, **0** doğrusal ilişki yok demektir. ~corrcoef(A)~ her sütunu bir değişken sayar ve sütunlar arası katsayı matrisini verir; bu matris simetriktir ve köşegeni 1'dir. ~corrcoef(x, y)~ iki verinin 2×2'lik katsayı matrisini verir; köşegen dışındaki eleman aradığımız katsayıdır. Gerçek MatStudio'da ~[R, P] = corrcoef(A, B)~ ayrıca p-değerlerini de verir: 0'a yakın p, ilişkinin anlamlı olduğunu gösterir.

> **Çözümlü örnek:** ~M = [1 5; 3 7; 2 9]~ için ~mean(M)~, ~mean(M, 2)~ ve ~median(M, 'all')~ nedir?
>
> 1. Sütun ortalamaları: (1+3+2)/3 = 2 ve (5+7+9)/3 = 7 → ~[2 7]~.
> 2. Satır ortalamaları: 3, 5 ve 5,5 → sütun vektörü.
> 3. Bütün elemanlar sıralı: 1, 2, 3, 5, 7, 9; ortadaki iki sayı 3 ve 5, ortanca 4.

> **Sık hata:** ~std(A, 2)~ yazıp satırların standart sapmasını beklemek. std'de ikinci argüman ağırlıktır ve yalnızca 0 ya da 1 olabilir; satırlar için ~std(A, 0, 2)~ yaz.

**Histogram ve normal dağılım grafiği.** ~histogram(x)~ kutu sayısını kendisi seçer; ~histogram(x, 25)~ 25 kutu kullanır. Normal dağılımın eğrisini çizmek için 1. haftadaki formül eleman bazında işleçlerle yazılır: ~Px = exp(-(x-mu).^2/(2*sig^2)) / (sqrt(2*pi)*sig)~. (Gerçek MatStudio'daki ~makedist~ ve ~pdf~ bu sitenin MatStudio'da yok.)
`),
      matlab: {
        kod: `A = [0 1 1; 2 3 2; 1 3 2; 4 2 2];
ort_sutun = mean(A)
ort_satir = mean(A, 2)
ort_hepsi = mean(A, 'all')
std(A, 1, 'all')
var(A, 1, 2)
median(A)

B = [1 5 7; 2 4 3; 4 3 5; 4 0 2];
R = corrcoef(A, B)

x = 5:0.1:35;
mu = 20; sig = 3;
Px = exp(-(x - mu).^2 / (2*sig^2)) / (sqrt(2*pi)*sig);
plot(x, Px), grid on
title('Normal dağılım: \\mu = 20, \\sigma = 3')`,
        gorev: "Ödev: iki 4×4'lük rand matrisinin bütün elemanlarının ortalamasını, standart sapmasını ve varyansını bul; sonra matrisleri [A, B] ve [A; B] ile birleştirip aynı değerleri karşılaştır.",
      },
      dene: ["h2-mean-boyut", "h2-corrcoef"],
    },
  ],
  test: [
    "h2-ans",
    "h2-aralik",
    "h2-indeks-end",
    "h2-matris-satir",
    "h2-find",
    "h2-matris-carpim",
    "h2-esit-degil",
    "h2-randi",
    "h2-vertcat",
    "h2-std-agirlik",
  ],
};
