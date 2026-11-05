// 2. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta2: Soru[] = [
  ...turet(2, "matlab-temel", "matlab-temel", [
    {
      id: "t2-inf", zorluk: 1, tip: "fill", yedek: true,
      soru: "MatStudio'da ~1/0~ işleminin sonucu nedir?",
      bosluklar: [["Inf"]],
      aciklama: "Sıfıra bölme sonsuzluk verir: ~Inf~. ~0/0~ ise ~NaN~'dır.",
    },
    {
      id: "t2-i-degisken", zorluk: 2, tip: "num", yedek: true,
      soru: "Aşağıdaki betikten sonra ~z~ kaçtır?\n\n~~~matlab\ni = 5;\nz = 2 + 3*i;\n~~~",
      bosluklar: [["17"]],
      aciklama: "~i~ artık 5 değerli bir değişkendir; ~3*i~ = 15 ve z = 17. Karmaşık sayı için ~3i~ ya da ~1j~ yazılmalıdır.",
    },
  ]),
  ...turet(2, "matlab-temel", "vektor-olusturma", [
    {
      id: "t2-linspace-2", zorluk: 1, tip: "num", yedek: true,
      soru: "~linspace(-1, 1, 3)~ nedir?",
      bosluklar: [["[-1 0 1]"]],
      aciklama: "−1 ile 1 dahil 3 eşit aralıklı değer: aralık 1.",
    },
    {
      id: "t2-aralik-2", zorluk: 1, tip: "num",
      soru: "~5:5:22~ komutunun ürettiği vektörü yaz.",
      bosluklar: [["[5 10 15 20]"]],
      aciklama: "5'ten başlayıp 5'er artar; 25 sınırı (22) aştığı için alınmaz.",
    },
    {
      id: "t2-aralik-uzunluk-2", zorluk: 2, tip: "num", yedek: true,
      soru: "~length(-1:0.1:1)~ kaçtır?",
      bosluklar: [["21"]],
      aciklama: "(1 − (−1))/0,1 + 1 = 21 eleman.",
    },
  ]),
  ...turet(2, "matlab-temel", "indeksleme", [
    {
      id: "t2-ters", zorluk: 1, tip: "num", yedek: true,
      soru: "~v = [3 6 9 12];~ için ~v(end:-1:1)~ nedir?",
      bosluklar: [["[12 9 6 3]"]],
      aciklama: "Adım −1: sondan başa doğru ters çevrilir.",
    },
    {
      id: "t2-indis-vektor", zorluk: 2, tip: "num", yedek: true,
      soru: "~v = [10 20 30 40];~ için ~v([4 1 1])~ nedir?",
      bosluklar: [["[40 10 10]"]],
      aciklama: "İndis vektörü sırasıyla 4., 1. ve yine 1. elemanı alır.",
    },
  ]),
  ...turet(2, "matlab-matris", "matris-indeks", [
    {
      id: "t2-sutun", zorluk: 1, tip: "num", yedek: true,
      soru: "~A = [1 5 9; 2 6 10];~ için ~A(:, 2)~ nedir? (sütun vektörünü satır gibi yazabilirsin)",
      bosluklar: [["[5 6]"]],
      aciklama: "~A(:, 2)~ 2. sütunun bütün satırlarıdır: 5 ve 6.",
    },
    {
      id: "t2-dogrusal-2", zorluk: 2, tip: "num",
      soru: "~A = [1 5 9; 2 6 10];~ için ~A(5)~ kaçtır?",
      bosluklar: [["9"]],
      aciklama: "Sütun sırası: 1, 2, 5, 6, 9, 10. Beşinci eleman 9.",
    },
  ]),
  ...turet(2, "matlab-matris", "eleman-islem", [
    {
      id: "t2-bolme", zorluk: 1, tip: "num", yedek: true,
      soru: "~[8 6 4] ./ [2 3 4]~ nedir?",
      bosluklar: [["[4 2 1]"]],
      aciklama: "Eleman bazında bölme: 8/2, 6/3, 4/4.",
    },
    {
      id: "t2-ic-carpim", zorluk: 2, tip: "num", yedek: true,
      soru: "~[1 2 3] * [4; 5; 6]~ kaçtır?",
      bosluklar: [["32"]],
      aciklama: "1×3 ile 3×1'in matris çarpımı tek sayıdır: 1·4 + 2·5 + 3·6 = 32.",
    },
    {
      id: "t2-boyut-hata", zorluk: 2, tip: "mcq",
      soru: "~[1 2 3] * [4 5 6]~ yazılınca ne olur?",
      secenekler: ["Hata verir: iç boyutlar uyuşmuyor", "[4 10 18] döner", "32 döner", "3×3'lük bir matris döner"],
      dogru: 0,
      aciklama: "1×3 ile 1×3 matris çarpımına giremez (A'nın sütun sayısı 3, B'nin satır sayısı 1). Eleman bazında çarpım için ~.*~ gerekir.",
    },
  ]),
  ...turet(2, "matlab-fonksiyon", "mantiksal", [
    {
      id: "t2-sifirla", zorluk: 2, tip: "num", yedek: true,
      soru: "~x = [3 -2 5 -1];~ ve ardından ~x(x < 0) = 0;~ çalıştırılınca ~x~ nedir?",
      bosluklar: [["[3 0 5 0]"]],
      aciklama: "Mantıksal indeksle yapılan atama yalnızca koşulu sağlayan (negatif) elemanları değiştirir.",
    },
    {
      id: "t2-veya-sayma", zorluk: 2, tip: "num", yedek: true,
      soru: "~x = [1 6 2 8 4];~ için ~sum(x < 2 | x > 5)~ kaçtır?",
      bosluklar: [["3"]],
      aciklama: "2'den küçük (1) ya da 5'ten büyük (6, 8) elemanlar: 3 tane.",
    },
  ]),
  ...turet(2, "matlab-fonksiyon", "fonksiyon-tanim", [
    {
      id: "t2-tek-cikis", zorluk: 2, tip: "num", yedek: true,
      soru: "~function [a, b] = ikisi(x)~ fonksiyonu ~a = 2*x; b = x^2;~ hesaplıyor. ~r = ikisi(4)~ çağrısından sonra ~r~ kaçtır?",
      bosluklar: [["8"]],
      aciklama: "Tek değişkenle çağrılınca yalnızca ilk çıkış alınır: a = 2·4 = 8.",
    },
  ]),
  ...turet(2, "matlab-fonksiyon", "rastgele-uretim", [
    {
      id: "t2-rand-kare", zorluk: 1, tip: "num", yedek: true,
      soru: "~rand(4)~ kaç elemanlı bir matris üretir?",
      bosluklar: [["16"]],
      aciklama: "Tek argüman kare matris demektir: 4×4 = 16 eleman.",
    },
    {
      id: "t2-randn-olcek", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Ortalaması 3, standart sapması 0,5 olan N normal sayı hangi ifadeyle üretilir?",
      secenekler: ["3 + 0.5*randn(1, N)", "0.5 + 3*randn(1, N)", "3*randn(1, N) + 0.5", "3 + 0.5*rand(1, N)"],
      dogru: 0,
      aciklama: "μ + σ·randn: önce standart sapmayla ölçekle, sonra ortalamayı ekle. ~rand~ düzgün dağılım verir.",
    },
  ]),
  ...turet(2, "matlab-istatistik", "birlestirme", [
    {
      id: "t2-yatay-boyut", zorluk: 1, tip: "num", yedek: true,
      soru: "~size([ones(3, 2), zeros(3, 4)])~ nedir?",
      bosluklar: [["[3 6]"]],
      aciklama: "Yan yana birleştirmede sütunlar toplanır: 2 + 4 = 6; satır 3 kalır.",
    },
    {
      id: "t2-sifir-ekle", zorluk: 1, tip: "num",
      soru: "~x = [1 2 3]; y = [x, zeros(1, 2)];~ için ~y~ nedir?",
      bosluklar: [["[1 2 3 0 0]"]],
      aciklama: "x'in sonuna iki sıfır eklenir (sıfır doldurma).",
    },
  ]),
  ...turet(2, "matlab-istatistik", "istatistik-boyut", [
    {
      id: "t2-mean-satir", zorluk: 2, tip: "num", yedek: true,
      soru: "~A = [2 4; 6 8; 1 3];~ için ~mean(A, 2)~ nedir? (sütun vektörünü satır gibi yazabilirsin)",
      bosluklar: [["[3 7 2]"]],
      aciklama: "Boyut 2 her satırın ortalamasıdır: (2+4)/2, (6+8)/2, (1+3)/2.",
    },
    {
      id: "t2-median-tek", zorluk: 1, tip: "num", yedek: true,
      soru: "~median([9 2 5 1 7])~ kaçtır?",
      bosluklar: [["5"]],
      aciklama: "Sıralı: 1, 2, 5, 7, 9; tek sayıda elemanda ortadaki 5'tir.",
    },
    {
      id: "t2-var-pop", zorluk: 2, tip: "num", yedek: true,
      soru: "~var([2 4 6], 1)~ kaçtır?",
      bosluklar: [["2.6667±0.001", "8/3"]],
      aciklama: "Ağırlık 1: N'ye böl. Ortalama 4, kareli sapmalar 4 + 0 + 4 = 8; 8/3 ≈ 2,667.",
    },
    {
      id: "t2-corr-sifir", zorluk: 2, tip: "tf", yedek: true,
      soru: "corrcoef(A) ile bulunan katsayı matrisinin köşegenindeki elemanlar her zaman 1'dir.",
      dogru: true,
      aciklama: "Doğru. Köşegen her değişkenin kendisiyle korelasyonudur ve 1'dir; matris simetriktir.",
    },
  ]),
];
