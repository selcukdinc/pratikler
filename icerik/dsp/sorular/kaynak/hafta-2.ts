// 2. hafta: MatStudio ile çalışmak
import { grupla, type Soru } from "./tipler.ts";

export const hafta2: Soru[] = [
  ...grupla(2, "matlab-temel", "matlab-temel", "Hafta 2, MatStudio işlemleri", [
    {
      id: "h2-noktali-virgul", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "MatStudio'da bir komutun sonuna noktalı virgül (~;~) konursa ne olur?",
      secenekler: [
        "Komut çalışır ama sonucu komut penceresine yazılmaz",
        "Komut çalışmaz, yorum satırı sayılır",
        "Sonuç ans değişkenine yazılır, asıl değişken değişmez",
        "Komut bir sonraki satırla birleştirilir",
      ],
      dogru: 0,
      aciklama: "Noktalı virgül yalnızca çıktıyı bastırır; komut yine çalışır ve değişken atanır. Noktalı virgül yoksa sonuç ~x = ...~ biçiminde yazılır.",
    },
    {
      id: "h2-ans", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Komut penceresine yalnızca ~3 + 4~ yazılırsa sonuç hangi değişkene konur?",
      bosluklar: [["ans"]],
      aciklama: "Bir değişkene atanmamış sonuç ~ans~ (answer) değişkenine konur: ~ans = 7~.",
    },
    {
      id: "h2-yorum", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Bir MatStudio betiğini Run Section ile ayrı çalıştırılabilen bölümlere ayırmak için satır başına hangi işaret yazılır?",
      bosluklar: [["%%"]],
      aciklama: "~%%~ ile başlayan yorum satırı yeni bir bölüm başlatır. Tek ~%~ yalnızca yorumdur.",
    },
    {
      id: "h2-nan", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "MatStudio'da ~0/0~ işleminin sonucu nedir?",
      bosluklar: [["NaN"]],
      aciklama: "0/0 tanımsızdır ve MatStudio ~NaN~ (not a number) verir. ~1/0~ ise ~Inf~ verir.",
    },
    {
      id: "h2-clear", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Çalışma alanındaki (workspace) bütün değişkenleri silen komut hangisidir?",
      secenekler: ["clc", "clear", "close all", "clf"],
      dogru: 1,
      aciklama: "~clear~ değişkenleri siler. ~clc~ yalnızca komut penceresini temizler, ~close all~ şekil pencerelerini kapatır, ~clf~ geçerli şekli temizler.",
    },
  ]),

  ...grupla(2, "matlab-temel", "vektor-olusturma", "Hafta 2, Vektör oluşturma", [
    {
      id: "h2-aralik", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~x1 = 2:3:17~ komutunun ürettiği vektörü yaz.",
      bosluklar: [["[2 5 8 11 14 17]"]],
      aciklama: "2'den başlar, 3'er artar ve 17'yi geçmeden durur: 2, 5, 8, 11, 14, 17.",
    },
    {
      id: "h2-aralik-uzunluk", zorluk: 2, tip: "num",
      soru: "~length(0:0.25:2)~ kaçtır?",
      bosluklar: [["9"]],
      aciklama: "0, 0,25, 0,5, ..., 2: (2 − 0)/0,25 + 1 = 9 eleman.",
    },
    {
      id: "h2-linspace", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~linspace(0, 1, 5)~ komutunun ürettiği vektörü yaz.",
      bosluklar: [["[0 0.25 0.5 0.75 1]"]],
      aciklama: "0 ile 1 dahil 5 eşit aralıklı değer: aralık (1 − 0)/(5 − 1) = 0,25.",
    },
    {
      id: "h2-geri-sayma", zorluk: 2, tip: "num",
      soru: "~18:-4:3~ komutunun ürettiği vektörü yaz.",
      bosluklar: [["[18 14 10 6]"]],
      aciklama: "18'den başlayıp 4'er azalır; 2 sınırın (3) altında kaldığı için alınmaz: 18, 14, 10, 6.",
    },
    {
      id: "h2-aralik-son", zorluk: 1, tip: "tf",
      soru: "~1:2:10~ ifadesinin son elemanı 10'dur.",
      dogru: false,
      aciklama: "Yanlış. 1, 3, 5, 7, 9'dan sonraki adım 11 olur ve sınırı aşar; son eleman 9'dur.",
    },
  ]),

  ...grupla(2, "matlab-temel", "indeksleme", "Hafta 2, İndeksleme", [
    {
      id: "h2-indeks-end", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~x = [2 3.5 6 7 8.2 -2 -5 6];~ için ~x(end-2:end)~ nedir?",
      bosluklar: [["[-2 -5 6]"]],
      aciklama: "~end~ = 8; ~end-2:end~ = 6:8. Elemanlar −2, −5, 6.",
    },
    {
      id: "h2-indeks-adim", zorluk: 2, tip: "num",
      soru: "~y = [9 4 1 7 3 8];~ için ~y(1:2:end)~ nedir?",
      bosluklar: [["[9 1 3]"]],
      aciklama: "İndisler 1, 3, 5: değerler 9, 1, 3.",
    },
    {
      id: "h2-indeks-sifir", zorluk: 1, tip: "mcq",
      soru: "~x = [5 6 7];~ tanımlıyken ~x(0)~ yazılırsa ne olur?",
      secenekler: ["5 döner", "7 döner", "Hata verir", "Boş vektör döner"],
      dogru: 2,
      aciklama: "MatStudio'da indisler 1'den başlar; 0 geçerli bir indis değildir ve hata verir. İlk eleman ~x(1)~'dir.",
    },
  ]),

  ...grupla(2, "matlab-matris", "matris-indeks", "Hafta 2, Matris oluşturma ve işlemleri", [
    {
      id: "h2-matris-satir", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~A = [2 4 6; 1 3 5; 7 8 9];~ için ~A(2, :)~ nedir?",
      bosluklar: [["[1 3 5]"]],
      aciklama: "~A(2, :)~ 2. satırın bütün sütunlarıdır: 1, 3, 5.",
    },
    {
      id: "h2-dogrusal-indeks", kaynak: "original", zorluk: 2, tip: "num",
      soru: "~A = [2 4 6; 1 3 5; 7 8 9];~ için ~A(4)~ kaçtır?",
      bosluklar: [["4"]],
      aciklama: "Doğrusal indeks sütunlara göre sayar: 2, 1, 7 (1. sütun), sonra 4. Yani ~A(4)~ = ~A(1, 2)~ = 4.",
    },
    {
      id: "h2-find", kaynak: "original", zorluk: 2, tip: "num",
      soru: "~A = [3 8 1; 6 2 9];~ için ~find(A > 5)~ hangi indisleri döndürür? (sütun vektörünü satır gibi yazabilirsin)",
      bosluklar: [["[2 3 6]"]],
      aciklama: "Sütun sırası: 3, 6, 8, 2, 1, 9. 5'ten büyükler 6, 8 ve 9; doğrusal indeksleri 2, 3 ve 6.",
    },
    {
      id: "h2-dogrusal-formul", zorluk: 2, tip: "num",
      soru: "4 satırlı bir matriste 3. satır, 2. sütundaki elemanın doğrusal indeksi kaçtır?",
      bosluklar: [["7"]],
      aciklama: "Doğrusal indeks (j − 1)·r + i = (2 − 1)·4 + 3 = 7.",
    },
  ]),

  ...grupla(2, "matlab-matris", "eleman-islem", "Hafta 2, Matris işlemleri", [
    {
      id: "h2-eleman-carpim", zorluk: 1, tip: "num",
      soru: "~[1 2 3] .* [4 5 6]~ nedir?",
      bosluklar: [["[4 10 18]"]],
      aciklama: "Eleman bazında çarpım: 1·4, 2·5, 3·6.",
    },
    {
      id: "h2-matris-carpim", kaynak: "original", zorluk: 2, tip: "num",
      soru: "~[2 0; 1 3] * [1 2; 0 1]~ matris çarpımının sonucunu satır sırasıyla yaz (ör. ~[a b; c d]~).",
      bosluklar: [["[2 4; 1 5]"]],
      aciklama: "1. satır: 2·1 + 0·0 = 2, 2·2 + 0·1 = 4. 2. satır: 1·1 + 3·0 = 1, 1·2 + 3·1 = 5.",
    },
    {
      id: "h2-kare-hata", zorluk: 1, tip: "mcq",
      soru: "~x = [1 2 3];~ vektörünün her elemanının karesini almak için hangisi yazılır?",
      secenekler: ["x^2", "x.^2", "x*x", "x'^2"],
      dogru: 1,
      aciklama: "~.^~ eleman bazında kuvvettir. ~x^2~ ve ~x*x~ matris işlemidir ve 1×3'lük bir vektörde hata verir.",
    },
    {
      id: "h2-us", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~2.^[1 2 3]~ nedir?",
      bosluklar: [["[2 4 8]"]],
      aciklama: "2'nin her elemana kuvveti: 2¹, 2², 2³.",
    },
    {
      id: "h2-det", kaynak: "original", zorluk: 2, tip: "num",
      soru: "~det([4 1; 2 3])~ kaçtır?",
      bosluklar: [["10"]],
      aciklama: "2×2 determinant: 4·3 − 1·2 = 10.",
    },
  ]),

  ...grupla(2, "matlab-fonksiyon", "mantiksal", "Hafta 2, İlişkisel semboller", [
    {
      id: "h2-esit-degil", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "MatStudio'da \"eşit değil\" işleci nasıl yazılır?",
      bosluklar: [["~="]],
      aciklama: "Eşit değil ~¬=~ ile yazılır. ~==~ eşitlik denetimi, ~=~ atamadır.",
    },
    {
      id: "h2-mantiksal-sayma", zorluk: 1, tip: "num",
      soru: "~x = [4 -1 7 0 2 9];~ için ~sum(x > 2)~ kaçtır?",
      bosluklar: [["3"]],
      aciklama: "~x > 2~ = [1 0 1 0 0 1]; birlerin toplamı 3. sum mantıksal vektörde koşulu sağlayan eleman sayısını verir.",
    },
    {
      id: "h2-mantiksal-secim", zorluk: 2, tip: "num",
      soru: "~x = [4 -1 7 0 2 9];~ için ~x(x > 0 & x < 5)~ nedir?",
      bosluklar: [["[4 2]"]],
      aciklama: "Hem 0'dan büyük hem 5'ten küçük olanlar: 4 ve 2.",
    },
    {
      id: "h2-kisa-devre", zorluk: 2, tip: "mcq",
      soru: "~&&~ işlecinin ~&~ işlecinden farkı nedir?",
      secenekler: [
        "Yalnızca skalerlerle çalışır ve sol taraf yanlışsa sağı hesaplamaz",
        "Vektörlerde eleman bazında VE işlemi yapar",
        "VE yerine VEYA işlemi yapar",
        "İki tarafı da her zaman hesaplar ama sonucu tersine çevirir",
      ],
      dogru: 0,
      aciklama: "~&&~ kısa devre VE'dir: skalerlerde çalışır, sol taraf 0 ise sonuç zaten 0 olduğundan sağ tarafı hesaplamaz. Eleman bazında VE ~&~'dir.",
    },
  ]),

  ...grupla(2, "matlab-fonksiyon", "fonksiyon-tanim", "Hafta 2, Fonksiyon oluşturma", [
    {
      id: "h2-fonksiyon-cikis", zorluk: 2, tip: "num",
      soru: "Aşağıdaki fonksiyon için ~[p, q] = hesap(3, 5)~ çağrısından sonra ~q~ kaçtır?\n\n~~~matlab\nfunction [a, b] = hesap(x, y)\n    a = x * y;\n    b = x - y;\nend\n~~~",
      bosluklar: [["-2"]],
      aciklama: "Çıkışlar sırayla eşleşir: p = a = 15, q = b = 3 − 5 = −2.",
    },
    {
      id: "h2-dosya-adi", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "~function [toplam, fark] = toplamFark(sayi1, sayi2)~ ile başlayan fonksiyon kendi dosyasına kaydedilecekse dosyanın adı ne olmalıdır?",
      bosluklar: [["toplamFark.m", "toplamfark.m"]],
      aciklama: "Ayrı dosyadaki bir fonksiyonun dosya adı fonksiyon adıyla aynı olmalıdır: ~toplamFark.m~.",
    },
    {
      id: "h2-yerel-degisken", zorluk: 2, tip: "tf",
      soru: "Bir fonksiyonun içinde oluşturulan değişkenler, fonksiyon bittikten sonra çağıran betiğin çalışma alanında görünür.",
      dogru: false,
      aciklama: "Yanlış. Fonksiyon değişkenleri yereldir; dışarıya yalnızca çıkış argümanları döner.",
    },
    {
      id: "h2-anonim", zorluk: 1, tip: "num",
      soru: "~f = @(t) 3*t + 1;~ tanımlıyken ~f(2)~ kaçtır?",
      bosluklar: [["7"]],
      aciklama: "Anonim fonksiyon t = 2 için 3·2 + 1 = 7 verir.",
    },
  ]),

  ...grupla(2, "matlab-fonksiyon", "rastgele-uretim", "Hafta 2, Rastgele sayı üretme", [
    {
      id: "h2-rand-boyut", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~numel(rand(5, 3))~ kaçtır? (numel eleman sayısını verir)",
      bosluklar: [["15"]],
      aciklama: "~rand(5, 3)~ 5×3'lük bir matris üretir: 15 eleman.",
    },
    {
      id: "h2-randi", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "~randi(10, 5, 2)~ ne üretir?",
      secenekler: [
        "1 ile 10 arası tamsayılardan 5×2 matris",
        "0 ile 1 arası sayılardan 10×5 matris",
        "1 ile 5 arası tamsayılardan 10×2 matris",
        "Normal dağılımlı sayılardan 5×2 matris",
      ],
      dogru: 0,
      aciklama: "İlk argüman en büyük tamsayıdır (en küçüğü 1), sonrakiler boyuttur: 5 satır, 2 sütun.",
    },
    {
      id: "h2-randperm", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "~randperm(6)~ ile üretilen vektörde aynı sayı iki kez bulunabilir.",
      dogru: false,
      aciklama: "Yanlış. randperm 1'den n'ye kadar sayıların tekrarsız bir karışık dizilişini verir; her sayı tam bir kez bulunur.",
    },
    {
      id: "h2-rand-aralik", zorluk: 2, tip: "mcq",
      soru: "2 ile 5 arasında düzgün dağılımlı N sayı üreten ifade hangisidir?",
      secenekler: ["2 + 3*rand(1, N)", "5*rand(1, N) + 2", "3 + 2*rand(1, N)", "rand(2, 5)"],
      dogru: 0,
      aciklama: "a + (b − a)·rand: 2 + 3·rand, 0–1 aralığını 2–5'e taşır. ~5*rand + 2~ 2–7, ~3 + 2*rand~ 3–5 verir; ~rand(2, 5)~ 2×5'lik bir matristir.",
    },
  ]),

  ...grupla(2, "matlab-istatistik", "birlestirme", "Hafta 2, Dizi birleştirme", [
    {
      id: "h2-cat-boyut", kaynak: "original", zorluk: 2, tip: "num",
      soru: "~size(cat(1, ones(2, 3), zeros(4, 3)))~ nedir?",
      bosluklar: [["[6 3]"]],
      aciklama: "~cat(1, ...)~ alt alta birleştirir: satırlar toplanır (2 + 4 = 6), sütun 3 kalır.",
    },
    {
      id: "h2-vertcat", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "~[A; B]~ ile aynı işi yapan, matrisleri alt alta birleştiren fonksiyonun adı nedir?",
      bosluklar: [["vertcat"]],
      aciklama: "~vertcat~ (vertical concatenation) alt alta, ~horzcat~ yan yana birleştirir.",
    },
    {
      id: "h2-yatay-kural", zorluk: 1, tip: "mcq",
      soru: "~[A, B]~ ile yan yana birleştirme için hangi koşul sağlanmalıdır?",
      secenekler: ["Satır sayıları aynı olmalı", "Sütun sayıları aynı olmalı", "İkisi de kare olmalı", "Eleman sayıları aynı olmalı"],
      dogru: 0,
      aciklama: "Yan yana birleştirmede sütunlar eklenir; satır sayıları aynı olmalıdır. Alt alta birleştirmede sütun sayıları aynı olmalıdır.",
    },
  ]),

  ...grupla(2, "matlab-istatistik", "istatistik-boyut", "Hafta 2, Ortalama, standart sapma, varyans ve medyan", [
    {
      id: "h2-mean-boyut", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~A = [2 4; 6 8; 1 3];~ için ~mean(A)~ nedir?",
      bosluklar: [["[3 5]"]],
      aciklama: "Matriste varsayılan boyut 1'dir: her sütunun ortalaması. (2+6+1)/3 = 3, (4+8+3)/3 = 5.",
    },
    {
      id: "h2-mean-all", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~A = [2 4; 6 8; 1 3];~ için ~mean(A, 'all')~ kaçtır?",
      bosluklar: [["4"]],
      aciklama: "Bütün elemanların toplamı 24, sayısı 6: 24/6 = 4.",
    },
    {
      id: "h2-median", kaynak: "original", zorluk: 1, tip: "num",
      soru: "~median([7 1 4 9])~ kaçtır?",
      bosluklar: [["5.5"]],
      aciklama: "Sıralı: 1, 4, 7, 9. Eleman sayısı çift; ortadaki iki sayının ortalaması (4 + 7)/2 = 5,5.",
    },
    {
      id: "h2-std-agirlik", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "~std(A, 1, 2)~ neyi hesaplar?",
      secenekler: [
        "Her satırın N'ye bölünerek bulunan standart sapmasını",
        "Her sütunun N − 1'e bölünerek bulunan standart sapmasını",
        "Bütün elemanların standart sapmasının iki katını",
        "Her satırın N − 1'e bölünerek bulunan standart sapmasını",
      ],
      dogru: 0,
      aciklama: "std'de ikinci argüman ağırlıktır (1: N'ye böl), üçüncüsü boyuttur (2: satırlar). Sonuç her satır için bir değer olan sütun vektörüdür.",
    },
    {
      id: "h2-corrcoef", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "İki değişkenin korelasyon katsayısı 1 çıkıyorsa ne söylenir?",
      secenekler: [
        "Aralarında tam pozitif doğrusal ilişki var",
        "Aralarında hiçbir doğrusal ilişki yok",
        "Aralarında tam negatif doğrusal ilişki var",
        "İki değişkenin ortalamaları eşit",
      ],
      dogru: 0,
      aciklama: "Katsayı −1 ile 1 arasındadır: 1 tam pozitif, −1 tam negatif doğrusal ilişki, 0 doğrusal ilişki yok demektir.",
    },
    {
      id: "h2-corrcoef-hesap", zorluk: 2, tip: "num",
      soru: "~R = corrcoef([1 2 3 4], [8 6 4 2]);~ için ~R(1, 2)~ kaçtır?",
      bosluklar: [["-1"]],
      aciklama: "İkinci veri birincinin tam doğrusal azalan bir fonksiyonu (y = 10 − 2x): katsayı −1.",
    },
  ]),
];
