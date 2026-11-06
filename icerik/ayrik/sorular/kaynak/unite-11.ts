// 11. ünite: Kesim 2.3 Fonksiyonlar (vize kapsamı ters fonksiyon ve bileşke ile biter)

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 11;
const K = "u11";
const B = "2.3";

export const unite11: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u11-k1", no: "1", tip: "yaz", kavram: "u11-tanim", zorluk: 2,
      soru: "Aşağıdakilerin neden R'den R'ye birer fonksiyon olmadığını açıklayınız.\n\na) f(x) = 1/x\nb) f(x) = √x\nc) f(x) = ±√(x² + 1)",
      aciklama: "a) f(0) tanımlı değildir; tanım kümesinin her elemanına bir değer atanmalıdır.\nb) x < 0 için f(x) reel sayı olarak tanımlı değildir.\nc) Her x'e iki farklı değer atanır; fonksiyon her elemana tam bir değer atar.",
    },
    {
      id: "u11-k9", no: "9", tip: "fill", kavram: "u11-taban", zorluk: 2,
      soru: "Aşağıdaki değerleri bulunuz.\n\nBoşluk 1: ⌈3/4⌉, Boşluk 2: ⌊7/8⌋, Boşluk 3: ⌈−3/4⌉, Boşluk 4: ⌊−7/8⌋, Boşluk 5: ⌊1/2 + ⌈3/2⌉⌋, Boşluk 6: ⌊1/2 · ⌊5/2⌋⌋",
      bosluklar: [["1"], ["0"], ["0", "-0", "−0"], ["-1", "−1"], ["2"], ["1"]],
      aciklama: "Tavan en küçük üst tam sayı, taban en büyük alt tam sayıdır. ⌈−3/4⌉ = 0, ⌊−7/8⌋ = −1. ⌈3/2⌉ = 2, ⌊2,5⌋ = 2. ⌊5/2⌋ = 2, ⌊1⌋ = 1.",
    },
    {
      id: "u11-k13", no: "13", tip: "fill", kavram: "u11-orten", zorluk: 2,
      soru: "Z'den Z'ye tanımlı aşağıdaki fonksiyonlar örten midir? (evet/hayır)\n\nBoşluk 1: f(n) = n − 1, Boşluk 2: f(n) = n² + 1, Boşluk 3: f(n) = n³, Boşluk 4: f(n) = ⌈n/2⌉",
      bosluklar: [["evet"], ["hayır"], ["hayır"], ["evet"]],
      aciklama: "n − 1: her m için n = m + 1. n² + 1: 0 ve negatifler değer olarak alınmaz. n³: 2 bir tam sayının küpü değildir. ⌈n/2⌉: her m için n = 2m alınabilir.",
    },
    {
      id: "u11-k15", no: "15", tip: "fill", kavram: "u11-orten", zorluk: 3,
      soru: "Z × Z'den Z'ye tanımlı aşağıdaki fonksiyonlar örten midir? (evet/hayır)\n\nBoşluk 1: f(m, n) = m + n, Boşluk 2: f(m, n) = m² + n², Boşluk 3: f(m, n) = m, Boşluk 4: f(m, n) = |n|, Boşluk 5: f(m, n) = m − n",
      bosluklar: [["evet"], ["hayır"], ["evet"], ["hayır"], ["evet"]],
      aciklama: "m + n, m ve m − n her tam sayıyı alır (ör. n = 0). m² + n² ve |n| negatif değer alamaz.",
    },
    {
      id: "u11-k23", no: "23", tip: "fill", kavram: "u11-eslesme", zorluk: 2,
      soru: "R'den R'ye tanımlı aşağıdaki fonksiyonlar bire-bir eşleşme midir? (evet/hayır)\n\nBoşluk 1: f(x) = 2x + 1, Boşluk 2: f(x) = x² + 1, Boşluk 3: f(x) = x³, Boşluk 4: f(x) = (x² + 1)/(x² + 2)",
      bosluklar: [["evet"], ["hayır"], ["evet"], ["hayır"]],
      aciklama: "2x + 1 ve x³ hem bire-bir hem örtendir. x² + 1 bire-bir değildir (f(1) = f(−1)) ve 1'den küçük değer almaz. (x² + 1)/(x² + 2) çift fonksiyondur, bire-bir değildir.",
    },
    {
      id: "u11-k31", no: "31", tip: "fill", kavram: "u11-tanim", zorluk: 2,
      soru: "f: R → R, f(x) = ⌊x²/3⌋ olsun. S = {−2, −1, 0, 1, 2, 3} için f(S) görüntüsünü bulunuz.",
      bosluklar: [["{0, 1, 3}", "{0,1,3}"]],
      aciklama: "x² değerleri 4, 1, 0, 1, 4, 9; üçe bölüp taban alınca 1, 0, 0, 0, 1, 3. Görüntü {0, 1, 3}.",
    },
    {
      id: "u11-k39", no: "39", tip: "yaz", kavram: "u11-ters", zorluk: 2,
      soru: "a ve b sabitler, a ≠ 0 olmak üzere R'den R'ye f(x) = ax + b fonksiyonunun tersi alınabilir olduğunu gösteriniz ve tersini bulunuz.",
      aciklama: "Bire-bir: ax + b = ay + b ise a(x − y) = 0, a ≠ 0 olduğundan x = y.\nÖrten: her y için x = (y − b)/a alınırsa f(x) = y.\nBire-bir eşleşme olduğundan tersi alınabilir.\n\ny = ax + b'den x = (y − b)/a, yani f⁻¹(y) = (y − b)/a.",
    },
  ]),

  ...turet(U, K, "u11-tanim", [
    {
      id: "u11-t-tanim", tip: "mcq", zorluk: 1,
      soru: "A'dan B'ye bir f fonksiyonu nedir?",
      secenekler: ["A'nın her elemanına B'nin tam olarak bir elemanını atayan kural", "A'nın bazı elemanlarına B'nin elemanlarını atayan kural", "B'nin her elemanına A'dan bir eleman atayan kural", "A'nın her elemanına B'nin en az bir elemanını atayan kural"],
      dogru: 0,
      aciklama: "Fonksiyon, tanım kümesinin her elemanına değer kümesinden tam bir eleman atar.",
    },
    {
      id: "u11-t-goruntu", tip: "fill", zorluk: 1,
      soru: "f: A → B ve f(a) = b ise, b'ye a'nın ____ , a'ya ise b'nin ön görüntüsü denir.",
      bosluklar: [["görüntüsü", "görüntü"]],
      aciklama: "b, a'nın görüntüsü; a, b'nin ön görüntüsüdür. f'nin tüm görüntülerinin kümesine görüntü kümesi (range) denir.",
    },
    {
      id: "u11-t-deger-goruntu", tip: "tf", zorluk: 2,
      soru: "Bir fonksiyonun görüntü kümesi her zaman değer kümesine eşittir.",
      dogru: false,
      aciklama: "Yanlış. Görüntü kümesi değer kümesinin bir alt kümesidir; ancak fonksiyon örtense eşittir. Ör. f: Z → Z, f(x) = x²'nin görüntüsü {0, 1, 4, ...}'tür.",
    },
    {
      id: "u11-t-kesirsiz", tip: "mcq", zorluk: 2,
      soru: "Bir bit dizisini, içindeki 1'lerin sayısına götüren fonksiyonun tanım ve görüntü kümeleri hangisidir?",
      secenekler: ["Tanım: bit dizileri, görüntü: negatif olmayan tam sayılar", "Tanım: tam sayılar, görüntü: bit dizileri", "Tanım: bit dizileri, görüntü: {0, 1}", "Tanım: pozitif tam sayılar, görüntü: bit dizileri"],
      dogru: 0,
      aciklama: "Her bit dizisinin 1 sayısı 0, 1, 2, ... olabilir; görüntü N'dir.",
    },
  ]),

  ...turet(U, K, "u11-birebir", [
    {
      id: "u11-t-birebir-tanim", tip: "fill", zorluk: 1, semboller: true,
      soru: "f'nin bire-bir (injektif) olması: ∀a∀b(f(a) = f(b) → ____).",
      bosluklar: [["a = b"]],
      aciklama: "Aynı görüntüye giden iki farklı eleman yoktur. Denk olarak a ≠ b → f(a) ≠ f(b).",
    },
    {
      id: "u11-t-x2", tip: "tf", zorluk: 1,
      soru: "Z'den Z'ye f(x) = x² fonksiyonu bire-birdir.",
      dogru: false,
      aciklama: "Yanlış. f(1) = f(−1) = 1. (Pozitif tam sayılarda tanımlı olsaydı bire-bir olurdu.)",
    },
    {
      id: "u11-t-artan", tip: "mcq", zorluk: 2,
      soru: "Kesin artan bir f: R → R fonksiyonu için hangisi her zaman doğrudur?",
      secenekler: ["f bire-birdir.", "f örtendir.", "f bire-bir eşleşmedir.", "f'nin tersi yoktur."],
      dogru: 0,
      aciklama: "x < y ise f(x) < f(y), dolayısıyla x ≠ y ise f(x) ≠ f(y). Örten olmayabilir (ör. eˣ).",
    },
    {
      id: "u11-t-birebir-ispat", tip: "yaz", zorluk: 2,
      soru: "Z'den Z'ye f(x) = 3x + 5 fonksiyonunun bire-bir olduğunu, ama örten olmadığını gösteriniz.",
      aciklama: "Bire-bir: 3a + 5 = 3b + 5 ise 3a = 3b, yani a = b.\n\nÖrten değil: f(x) = 6 için 3x = 1, x = 1/3 tam sayı değildir. 6'nın ön görüntüsü yoktur.",
    },
  ]),

  ...turet(U, K, "u11-orten", [
    {
      id: "u11-t-orten-tanim", tip: "mcq", zorluk: 1,
      soru: "f: A → B fonksiyonu ne zaman örtendir (sürjektif)?",
      secenekler: ["B'nin her b elemanı için f(a) = b olan bir a ∈ A varsa", "A'nın her elemanının farklı bir görüntüsü varsa", "A ile B aynı kümeyse", "f'nin tersi B'den A'ya tanımlıysa ve A = B ise"],
      dogru: 0,
      aciklama: "Değer kümesinin her elemanı en az bir elemanın görüntüsüdür: ∀y∃x(f(x) = y).",
    },
    {
      id: "u11-t-orten-ornek", tip: "fill", zorluk: 2,
      soru: "{a, b, c, d}'den {1, 2, 3}'e tanımlı f(a) = 3, f(b) = 2, f(c) = 1, f(d) = 3 fonksiyonu örten midir? (evet/hayır)",
      bosluklar: [["evet"]],
      aciklama: "1, 2 ve 3'ün her biri bir elemanın görüntüsüdür. (Bire-bir değildir: f(a) = f(d).)",
    },
  ]),

  ...turet(U, K, "u11-eslesme", [
    {
      id: "u11-t-eslesme-tanim", tip: "mcq", zorluk: 1,
      soru: "Hem bire-bir hem örten olan fonksiyona ne ad verilir?",
      secenekler: ["Bire-bir eşleşme", "Birim fonksiyon", "Taban fonksiyonu", "Kısmi fonksiyon"],
      dogru: 0,
      aciklama: "Bire-bir ve örten fonksiyon bire-bir eşleşmedir (bijeksiyon).",
    },
    {
      id: "u11-t-birim", tip: "tf", zorluk: 1,
      soru: "A kümesi üzerinde ι_A(x) = x birim fonksiyonu bir bire-bir eşleşmedir.",
      dogru: true,
      aciklama: "Doğru. Birim fonksiyon her elemanı kendisine götürür; hem bire-bir hem örtendir.",
    },
    {
      id: "u11-t-sonlu", tip: "tf", zorluk: 2,
      soru: "A sonlu bir küme ise A'dan A'ya bir fonksiyon ancak ve ancak örten ise bire-birdir.",
      dogru: true,
      aciklama: "Doğru. Sonlu ve eşit büyüklükteki kümeler arasında bire-bir fonksiyon örtendir, örten fonksiyon bire-birdir. Sonsuz kümelerde bu geçerli değildir.",
    },
    {
      id: "u11-t-nasil-gosterilir", tip: "yaz", zorluk: 2,
      soru: "f: A → B'nin bire-bir ve örten olduğunu göstermek için sırasıyla ne yapılır? Özetleyiniz.",
      aciklama: "Bire-bir: Keyfi x, y ∈ A için f(x) = f(y) varsayılıp x = y gösterilir.\nBire-bir değil: f(x) = f(y) olan x ≠ y bulunur.\nÖrten: Keyfi y ∈ B için f(x) = y olan x ∈ A bulunur.\nÖrten değil: Hiçbir x için f(x) = y olmayan bir y ∈ B bulunur.",
    },
  ]),

  ...turet(U, K, "u11-ters", [
    {
      id: "u11-t-ters-kosul", tip: "mcq", zorluk: 1,
      soru: "Bir f: A → B fonksiyonunun tersinin tanımlanabilmesi (tersi alınabilir olması) için gereken koşul nedir?",
      secenekler: ["f bir bire-bir eşleşme olmalı", "f yalnız bire-bir olmalı", "f yalnız örten olmalı", "A ve B sonsuz olmalı"],
      dogru: 0,
      aciklama: "Bire-bir değilse bir b'nin iki ön görüntüsü olur; örten değilse bazı b'lerin ön görüntüsü olmaz. İki durumda da ters tanımlanamaz.",
    },
    {
      id: "u11-t-ters-ornek", tip: "fill", zorluk: 2,
      soru: "f, {a, b, c}'den {1, 2, 3}'e f(a) = 2, f(b) = 3, f(c) = 1 fonksiyonu olsun. f⁻¹(3) ve f⁻¹(1) nedir?\n\nBoşluk 1: f⁻¹(3), Boşluk 2: f⁻¹(1)",
      bosluklar: [["b"], ["c"]],
      aciklama: "Kitaptaki örnek: f bire-bir eşleşmedir; f⁻¹ görüntüleri ters çevirir: f⁻¹(1) = c, f⁻¹(2) = a, f⁻¹(3) = b.",
    },
    {
      id: "u11-t-ters-dogru", tip: "fill", zorluk: 2,
      soru: "Z'den Z'ye f(x) = x + 1 fonksiyonunun tersi f⁻¹(y) = ? (y cinsinden yazınız)",
      bosluklar: [["y − 1", "y - 1", "y-1"]],
      aciklama: "y = x + 1'den x = y − 1. f bire-bir eşleşme olduğu için f⁻¹(y) = y − 1.",
    },
    {
      id: "u11-t-x2-ters", tip: "tf", zorluk: 2,
      soru: "Z'den Z'ye f(x) = x² fonksiyonunun tersi alınabilir.",
      dogru: false,
      aciklama: "Yanlış. f(−2) = f(2) = 4 olduğu için bire-bir değildir; ters fonksiyon tanımlanamaz. (Negatif olmayan reel sayılara kısıtlanırsa tersi √x olur.)",
    },
    {
      id: "u11-t-ters-isaret", tip: "tf", zorluk: 2,
      soru: "f⁻¹ ters fonksiyonu ile 1/f fonksiyonu aynı şeydir.",
      dogru: false,
      aciklama: "Yanlış. f⁻¹ ters fonksiyondur, 1/f ise değerlerin çarpmaya göre tersidir; karıştırılmamalıdır.",
    },
  ]),

  ...turet(U, K, "u11-bileske", [
    {
      id: "u11-t-bileske-tanim", tip: "fill", zorluk: 1,
      soru: "(f ∘ g)(a) = f(____). Boşluğu doldurunuz.",
      bosluklar: [["g(a)"]],
      aciklama: "Bileşkede önce g, sonra f uygulanır: (f ∘ g)(a) = f(g(a)).",
    },
    {
      id: "u11-t-bileske-hesap", tip: "fill", zorluk: 2,
      soru: "Z'den Z'ye f(x) = 2x + 3 ve g(x) = 3x + 2 olsun. f ∘ g ve g ∘ f nedir?\n\nBoşluk 1: (f ∘ g)(x), Boşluk 2: (g ∘ f)(x)",
      bosluklar: [["6x + 7", "6x+7"], ["6x + 11", "6x+11"]],
      aciklama: "f(g(x)) = 2(3x + 2) + 3 = 6x + 7. g(f(x)) = 3(2x + 3) + 2 = 6x + 11. Bileşke değişmeli değildir.",
    },
    {
      id: "u11-t-bileske-ters", tip: "mcq", zorluk: 2,
      soru: "f: A → B bire-bir eşleşme ise f⁻¹ ∘ f ve f ∘ f⁻¹ nedir?",
      secenekler: ["Sırasıyla ι_A ve ι_B birim fonksiyonları", "Sırasıyla f ve f⁻¹ fonksiyonları", "İkisi de f⁻¹ fonksiyonudur", "İki bileşke de tanımsızdır"],
      dogru: 0,
      aciklama: "(f⁻¹ ∘ f)(a) = a ve (f ∘ f⁻¹)(b) = b; yani ι_A ve ι_B.",
    },
    {
      id: "u11-t-bileske-tanimli", tip: "tf", zorluk: 2,
      soru: "f ∘ g bileşkesinin tanımlı olması için g'nin görüntü kümesi f'nin tanım kümesinin alt kümesi olmalıdır.",
      dogru: true,
      aciklama: "Doğru. g'nin çıktıları f'ye girdi olarak verilebilmelidir.",
    },
    {
      id: "u11-t-bileske-kume", tip: "fill", zorluk: 2,
      soru: "g: {a, b, c} → {a, b, c}, g(a) = b, g(b) = c, g(c) = a ve f: {a, b, c} → {1, 2, 3}, f(a) = 3, f(b) = 2, f(c) = 1 olsun. (f ∘ g)(a), (f ∘ g)(b), (f ∘ g)(c) nedir?\n\nBoşluk 1: (f ∘ g)(a), Boşluk 2: (f ∘ g)(b), Boşluk 3: (f ∘ g)(c)",
      bosluklar: [["2"], ["1"], ["3"]],
      aciklama: "Kitaptaki örnek: f(g(a)) = f(b) = 2, f(g(b)) = f(c) = 1, f(g(c)) = f(a) = 3. g ∘ f tanımlı değildir; f'nin görüntüsü g'nin tanım kümesinde değildir.",
    },
    {
      id: "u11-t-bileske-birebir", tip: "yaz", zorluk: 3,
      soru: "g: A → B ve f: B → C bire-bir ise f ∘ g'nin de bire-bir olduğunu ispatlayınız.",
      aciklama: "(f ∘ g)(x) = (f ∘ g)(y) olsun: f(g(x)) = f(g(y)).\nf bire-bir olduğundan g(x) = g(y).\ng bire-bir olduğundan x = y.\nDemek ki f ∘ g bire-birdir. ∎",
    },
  ]),

  ...turet(U, K, "u11-taban", [
    {
      id: "u11-t-taban-tanim", tip: "mcq", zorluk: 1,
      soru: "Taban fonksiyonu ⌊x⌋ neyi verir?",
      secenekler: ["x'ten küçük ya da eşit en büyük tam sayıyı", "x'ten büyük ya da eşit en küçük tam sayıyı", "x'e en yakın tam sayıyı", "x'in kesirli kısmını"],
      dogru: 0,
      aciklama: "⌊x⌋ aşağı yuvarlar; ⌈x⌉ (tavan) yukarı yuvarlar.",
    },
    {
      id: "u11-t-taban-deger", tip: "fill", zorluk: 1,
      soru: "Değerleri bulunuz.\n\nBoşluk 1: ⌊−0,5⌋, Boşluk 2: ⌈−0,5⌉, Boşluk 3: ⌊3,1⌋, Boşluk 4: ⌈3,1⌉",
      bosluklar: [["-1", "−1"], ["0", "-0", "−0"], ["3"], ["4"]],
      aciklama: "⌊−0,5⌋ = −1, ⌈−0,5⌉ = 0, ⌊3,1⌋ = 3, ⌈3,1⌉ = 4.",
    },
    {
      id: "u11-t-bayt", tip: "fill", zorluk: 2,
      soru: "100 bitlik veriyi kodlamak için kaç bayt (8 bit) gerekir?",
      bosluklar: [["13"]],
      aciklama: "⌈100/8⌉ = ⌈12,5⌉ = 13 bayt.",
    },
    {
      id: "u11-t-taban-ozellik", tip: "tf", zorluk: 2,
      soru: "Her x reel sayısı ve n tam sayısı için ⌊x + n⌋ = ⌊x⌋ + n'dir.",
      dogru: true,
      aciklama: "Doğru. Bir tam sayı eklemek tabanı aynı miktarda kaydırır. Ancak ⌊x + y⌋ = ⌊x⌋ + ⌊y⌋ genelde doğru değildir.",
    },
  ]),
];
