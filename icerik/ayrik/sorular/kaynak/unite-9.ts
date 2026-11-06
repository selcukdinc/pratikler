// 9. ünite: Kesim 2.1 Kümeler

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 9;
const K = "u9";
const B = "2.1";

export const unite9: Soru[] = [
  ...cikmis(U, K, [
    {
      id: "u9-c36", no: 36, tip: "mcq", kavram: "u9-kartezyen",
      soru: "A'nın m, B'nin n ve C'nin p elemanı varsa, AxBxC'nin kaç elemanı vardır?",
      secenekler: ["m(n+p)", "mnp", "m+n+p", "(m+n)p"],
      dogru: 1,
      aciklama: "A × B × C'nin elemanları (a, b, c) sıralı üçlüleridir. a için m, b için n, c için p seçenek olduğundan |A × B × C| = m · n · p.",
    },
  ]),

  ...kitap(U, K, B, [
    {
      id: "u9-k1", no: "1", tip: "fill", kavram: "u9-gosterim",
      soru: "Aşağıdaki kümelerin elemanlarını listeleyiniz.\n\na) {x | x, x² = 1 olacak şekildeki bir reel sayı}\nd) {x | x, x² = 2 olacak şekildeki bir tam sayı}\n\nBoşluk 1: a), Boşluk 2: d)",
      bosluklar: [["{−1, 1}", "{-1, 1}", "{1, −1}", "{1, -1}"], ["∅", "{}", "boş küme"]],
      aciklama: "a) x² = 1'in reel çözümleri −1 ve 1'dir. d) x² = 2'nin tam sayı çözümü yoktur; küme boştur.",
    },
    {
      id: "u9-k5", no: "5", tip: "fill", kavram: "u9-altkume",
      soru: "Aşağıdaki küme ikililerinin eşit olup olmadıklarını (evet/hayır) belirleyiniz.\n\na) {1, 3, 3, 3, 5, 5, 5, 5, 5}, {5, 3, 1}\nb) {{1}}, {1, {1}}\nc) ∅, {∅}\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: c)",
      bosluklar: [["evet", "eşit"], ["hayır", "eşit değil"], ["hayır", "eşit değil"]],
      aciklama: "a) Tekrar ve sıra önemsizdir, iki küme de {1, 3, 5}'tir. b) İkinci kümede 1 elemanı var, birincide yok. c) ∅'nin elemanı yoktur, {∅}'nin bir elemanı (∅) vardır.",
    },
    {
      id: "u9-k6", no: "6", cikmis: 35, tip: "mcq", kavram: "u9-altkume", zorluk: 2,
      soru: "A={2, 4, 6}, B={2, 6}, C={4, 6}, D={4, 6, 8} olsun. Aşağıdakilerden kaç tanesi doğrudur? A kümesi B'nin alt kümesidir. B kümesi A'nın alt kümesidir. C kümesi A'nın alt kümesidir. C kümesi B'nin alt kümesidir.",
      secenekler: ["2", "4", "3", "1"],
      dogru: 0,
      aciklama: "B ⊆ A ve C ⊆ A doğrudur. A ⊆ B yanlıştır (4 ∉ B), C ⊆ B yanlıştır (4 ∉ B). İki tanesi doğrudur. (Kitapta ayrıca C ⊆ D olduğu da sorulur.)",
    },
    {
      id: "u9-k9", no: "9", tip: "fill", kavram: "u9-gosterim", zorluk: 2,
      soru: "Aşağıdaki önermelerin doğru (D) ya da yanlış (Y) olduğunu belirleyiniz.\n\nBoşluk 1: 0 ∈ ∅, Boşluk 2: ∅ ∈ {0}, Boşluk 3: ∅ ⊂ {0}, Boşluk 4: {0} ∈ {0}, Boşluk 5: {∅} ⊆ {∅}",
      bosluklar: [["Y", "yanlış"], ["Y", "yanlış"], ["D", "doğru"], ["Y", "yanlış"], ["D", "doğru"]],
      aciklama: "Boş kümenin elemanı yoktur. {0}'ın tek elemanı 0'dır; ∅ ve {0} onun elemanı değildir. Boş küme her kümenin alt kümesidir ve {0}'dan farklı olduğu için öz alt kümesidir. Her küme kendisinin alt kümesidir.",
    },
    {
      id: "u9-k11", no: "11", tip: "fill", kavram: "u9-gosterim", zorluk: 2,
      soru: "Aşağıdaki önermelerin doğru (D) ya da yanlış (Y) olduğunu belirleyiniz.\n\nBoşluk 1: x ∈ {x}, Boşluk 2: {x} ⊆ {x}, Boşluk 3: {x} ∈ {x}, Boşluk 4: {x} ∈ {{x}}, Boşluk 5: ∅ ⊆ {x}, Boşluk 6: ∅ ∈ {x}",
      bosluklar: [["D", "doğru"], ["D", "doğru"], ["Y", "yanlış"], ["D", "doğru"], ["D", "doğru"], ["Y", "yanlış"]],
      aciklama: "{x}'in tek elemanı x'tir; {x} ve ∅ onun elemanı değildir. {{x}}'in tek elemanı {x}'tir. ∅ ve küme kendisi, her kümenin alt kümesidir.",
    },
    {
      id: "u9-k19", no: "19", tip: "fill", kavram: "u9-nicelik", zorluk: 2,
      soru: "Aşağıdaki kümelerin niceliklerini bulunuz.\n\nBoşluk 1: {a}, Boşluk 2: {{a}}, Boşluk 3: {a, {a}}, Boşluk 4: {a, {a}, {a, {a}}}",
      bosluklar: [["1"], ["1"], ["2"], ["3"]],
      aciklama: "Nicelik, farklı eleman sayısıdır. {{a}}'nın tek elemanı {a}'dır. {a, {a}}'nın elemanları a ve {a}'dır.",
    },
    {
      id: "u9-k21", no: "21", tip: "fill", kavram: "u9-kuvvet", zorluk: 2, semboller: true,
      soru: "a ve b farklı elemanlar olmak üzere {a, b} kümesinin kuvvet kümesini yazınız.",
      bosluklar: [["{∅, {a}, {b}, {a, b}}", "{∅, {b}, {a}, {a, b}}", "{∅, {a}, {b}, {b, a}}"]],
      aciklama: "Tüm alt kümeler: ∅, {a}, {b}, {a, b}. 2² = 4 eleman.",
    },
    {
      id: "u9-k23", no: "23", tip: "fill", kavram: "u9-kuvvet", zorluk: 2,
      soru: "a ve b farklı elemanlar olmak üzere, aşağıdaki kümelerin kaç elemanı vardır?\n\nBoşluk 1: P({a, b, {a, b}}), Boşluk 2: P(P(∅))",
      bosluklar: [["8"], ["2"]],
      aciklama: "{a, b, {a, b}} üç elemanlıdır: 2³ = 8. P(∅) = {∅} bir elemanlıdır, bu yüzden P(P(∅)) = {∅, {∅}} 2¹ = 2 elemanlıdır.",
    },
    {
      id: "u9-k27", no: "27", tip: "fill", kavram: "u9-kartezyen", zorluk: 1,
      soru: "A = {a, b, c, d} ve B = {y, z} olsun. A × B kümesinin kaç elemanı vardır ve (y, a) bu kümenin elemanı mıdır (evet/hayır)?\n\nBoşluk 1: |A × B|, Boşluk 2: (y, a) ∈ A × B",
      bosluklar: [["8"], ["hayır"]],
      aciklama: "|A × B| = 4 · 2 = 8. Sıralı ikililerde ilk bileşen A'dan gelir; (y, a) ∈ B × A'dır, A × B'de değildir.",
    },
  ]),

  ...turet(U, K, "u9-gosterim", [
    {
      id: "u9-t-kume-tanim", tip: "fill", zorluk: 1,
      soru: "Bir kümedeki nesnelere kümenin ____ denir; a'nın A kümesinde olduğu a ∈ A ile gösterilir.",
      bosluklar: [["eleman", "elemanları", "elemanı", "üye", "üyeleri"]],
      aciklama: "Küme, sırasız nesneler topluluğudur; bu nesneler kümenin elemanlarıdır (üyeleri).",
    },
    {
      id: "u9-t-kurma", tip: "mcq", zorluk: 1,
      soru: "{x | x, 10'dan küçük pozitif tek tam sayıdır} kümesi hangisidir?",
      secenekler: ["{1, 3, 5, 7, 9}", "{1, 3, 5, 7, 9, 11}", "{0, 2, 4, 6, 8}", "{3, 5, 7, 9}"],
      dogru: 0,
      aciklama: "10'dan küçük pozitif tek tam sayılar 1, 3, 5, 7, 9'dur. Bu, küme kurma gösterimidir.",
    },
    {
      id: "u9-t-sayi-kumeleri", tip: "mcq", zorluk: 1,
      soru: "Kitapta N, Z, Q ve R sembolleri sırasıyla hangi kümeleri gösterir?",
      secenekler: ["Doğal sayılar, tam sayılar, rasyonel sayılar, reel sayılar", "Tam sayılar, doğal sayılar, reel sayılar, rasyonel sayılar", "Doğal sayılar, rasyonel sayılar, tam sayılar, reel sayılar", "Pozitif tam sayılar, tam sayılar, karmaşık sayılar, reel sayılar"],
      dogru: 0,
      aciklama: "N = {0, 1, 2, ...}, Z tam sayılar, Q rasyonel sayılar, R reel sayılar. Z⁺ pozitif tam sayılar, C karmaşık sayılardır.",
    },
    {
      id: "u9-t-bos-kume", tip: "tf", zorluk: 2,
      soru: "∅ ve {∅} aynı kümedir.",
      dogru: false,
      aciklama: "Yanlış. ∅'nin hiç elemanı yoktur; {∅} ise tek elemanlı bir kümedir (elemanı boş kümedir).",
    },
    {
      id: "u9-t-aralik", tip: "mcq", zorluk: 2,
      soru: "a < b reel sayılar için [a, b) aralığı hangi kümedir?",
      secenekler: ["{x | a ≤ x < b}", "{x | a < x ≤ b}", "{x | a < x < b}", "{x | a ≤ x ≤ b}"],
      dogru: 0,
      aciklama: "Köşeli parantez uç noktanın dahil olduğunu, yuvarlak parantez dahil olmadığını gösterir.",
    },
  ]),

  ...turet(U, K, "u9-altkume", [
    {
      id: "u9-t-altkume-tanim", tip: "fill", zorluk: 1, semboller: true,
      soru: "A ⊆ B olması, ∀x(x ∈ A → ____) demektir.",
      bosluklar: [["x ∈ B"]],
      aciklama: "A'nın her elemanı B'nin de elemanıysa A, B'nin alt kümesidir.",
    },
    {
      id: "u9-t-bos-alt", tip: "tf", zorluk: 1,
      soru: "Boş küme her kümenin alt kümesidir.",
      dogru: true,
      aciklama: "Doğru. x ∈ ∅ her zaman yanlış olduğundan x ∈ ∅ → x ∈ S şartlı ifadesi içi boş biçimde doğrudur.",
    },
    {
      id: "u9-t-esit", tip: "mcq", zorluk: 2,
      soru: "İki kümenin eşit olduğunu göstermenin yolu hangisidir?",
      secenekler: ["A ⊆ B ve B ⊆ A olduğunu göstermek", "|A| = |B| olduğunu göstermek", "A ∩ B ≠ ∅ olduğunu göstermek", "A'nın bir elemanının B'de olduğunu göstermek"],
      dogru: 0,
      aciklama: "A = B ancak ve ancak A ⊆ B ve B ⊆ A ise. Eleman sayılarının eşit olması yetmez.",
    },
    {
      id: "u9-t-oz-alt", tip: "mcq", zorluk: 2,
      soru: "A ⊂ B (öz alt küme) ne demektir?",
      secenekler: ["A ⊆ B ve A ≠ B", "A ⊆ B ve A = B", "A ∩ B = ∅", "B ⊆ A"],
      dogru: 0,
      aciklama: "A, B'nin alt kümesidir ve B'de A'da olmayan en az bir eleman vardır.",
    },
  ]),

  ...turet(U, K, "u9-nicelik", [
    {
      id: "u9-t-nicelik-tanim", tip: "fill", zorluk: 1,
      soru: "Sonlu bir S kümesindeki farklı elemanların sayısına S'nin ____ denir ve |S| ile gösterilir.",
      bosluklar: [["niceliği", "nicelik", "kardinalitesi", "eleman sayısı"]],
      aciklama: "|S|, S'nin niceliğidir (kardinalitesi).",
    },
    {
      id: "u9-t-nicelik-harf", tip: "fill", zorluk: 1,
      soru: "A, İngiliz alfabesindeki harflerin kümesi ise |A| kaçtır?",
      bosluklar: [["26"]],
      aciklama: "İngiliz alfabesinde 26 harf vardır.",
    },
    {
      id: "u9-t-sonsuz", tip: "tf", zorluk: 1,
      soru: "Pozitif tam sayılar kümesi sonlu bir kümedir.",
      dogru: false,
      aciklama: "Yanlış. Sonlu olmayan kümelere sonsuz küme denir; Z⁺ sonsuzdur.",
    },
  ]),

  ...turet(U, K, "u9-kuvvet", [
    {
      id: "u9-t-kuvvet-sayi", tip: "fill", zorluk: 1,
      soru: "n elemanlı bir kümenin kuvvet kümesinin kaç elemanı vardır? (n ile yazınız)",
      bosluklar: [["2^n", "2ⁿ"]],
      aciklama: "Her eleman bir alt kümede ya vardır ya yoktur: 2ⁿ alt küme.",
    },
    {
      id: "u9-t-kuvvet-bos", tip: "mcq", zorluk: 2,
      soru: "P(∅) hangisidir?",
      secenekler: ["{∅}", "∅", "{∅, {∅}}", "{0}"],
      dogru: 0,
      aciklama: "Boş kümenin tek alt kümesi kendisidir: P(∅) = {∅}.",
    },
    {
      id: "u9-t-kuvvet-yaz", tip: "yaz", zorluk: 2,
      soru: "{0, 1, 2} kümesinin kuvvet kümesini yazınız. Kaç elemanı vardır?",
      aciklama: "P({0, 1, 2}) = {∅, {0}, {1}, {2}, {0, 1}, {0, 2}, {1, 2}, {0, 1, 2}}.\n\n2³ = 8 elemanı vardır.",
    },
  ]),

  ...turet(U, K, "u9-kartezyen", [
    {
      id: "u9-t-sirali", tip: "tf", zorluk: 1,
      soru: "(a, b) = (c, d) olması için a = c ve b = d olması gerekir; bu yüzden a ≠ b ise (a, b) ≠ (b, a)'dır.",
      dogru: true,
      aciklama: "Doğru. Sıralı ikilide sıra önemlidir.",
    },
    {
      id: "u9-t-axb", tip: "fill", zorluk: 2, semboller: true,
      soru: "A = {1, 2} ve B = {a, b, c} ise A × B'yi yazınız.",
      bosluklar: [["{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}"]],
      aciklama: "A × B = {(a, b) | a ∈ A ∧ b ∈ B}: 2 · 3 = 6 sıralı ikili.",
    },
    {
      id: "u9-t-degisme", tip: "tf", zorluk: 2,
      soru: "A ve B boş olmayan kümeler ve A ≠ B ise A × B = B × A'dır.",
      dogru: false,
      aciklama: "Yanlış. Kartezyen çarpım değişmeli değildir; A ≠ B ve ikisi de boş değilse A × B ≠ B × A.",
    },
    {
      id: "u9-t-bagint", tip: "mcq", zorluk: 2,
      soru: "A × B kartezyen çarpımının bir R alt kümesine ne ad verilir?",
      secenekler: ["A'dan B'ye bir bağıntı", "A'dan B'ye bir fonksiyon", "A'nın kuvvet kümesi", "B'nin tümleyeni"],
      dogru: 0,
      aciklama: "A × B'nin herhangi bir alt kümesi A'dan B'ye bir bağıntıdır.",
    },
    {
      id: "u9-t-dogruluk-kumesi", tip: "fill", zorluk: 2,
      soru: "Tanım kümesi tam sayılar olmak üzere P(x): \"x² = 1\" yükleminin doğruluk kümesi nedir?",
      bosluklar: [["{−1, 1}", "{-1, 1}", "{1, −1}", "{1, -1}"]],
      aciklama: "Doğruluk kümesi, P(x)'i doğru yapan elemanlar kümesidir: {x ∈ Z | x² = 1} = {−1, 1}.",
    },
  ]),
];
