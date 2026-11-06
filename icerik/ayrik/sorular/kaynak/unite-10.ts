// 10. ünite: Kesim 2.2 Küme İşlemleri

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 10;
const K = "u10";
const B = "2.2";

const AB = "A={1, 2, 3, 4, 5}, B={2, 4}";
const AB_SIK = ["{1, 2, 3, 5}", "{2, 4}", "{1, 3, 5}", "{1, 2, 3, 4, 5}"];

export const unite10: Soru[] = [
  ...cikmis(U, K, [
    {
      id: "u10-c32", no: 32, tip: "mcq", kavram: "u10-islem",
      soru: `${AB} ise A ve B kümelerinin birleşimi aşağıdakilerden hangisidir?`,
      secenekler: AB_SIK, dogru: 3,
      aciklama: "B ⊆ A olduğu için A ∪ B = A = {1, 2, 3, 4, 5}.",
    },
    {
      id: "u10-c33", no: 33, tip: "mcq", kavram: "u10-islem",
      soru: `${AB} ise A-B aşağıdakilerden hangisidir?`,
      secenekler: AB_SIK, dogru: 2,
      aciklama: "A − B, A'da olup B'de olmayan elemanlardır: {1, 3, 5}.",
    },
    {
      id: "u10-c34", no: 34, tip: "mcq", kavram: "u10-islem",
      soru: `${AB} ise A ve B kümelerinin kesişimi aşağıdakilerden hangisidir?`,
      secenekler: [AB_SIK[1]!, AB_SIK[2]!, AB_SIK[3]!, AB_SIK[0]!], dogru: 0,
      aciklama: "İki kümede ortak olan elemanlar 2 ve 4'tür: A ∩ B = {2, 4}.",
    },
  ]),

  ...kitap(U, K, B, [
    {
      id: "u10-k3", no: "3", tip: "fill", kavram: "u10-islem",
      soru: "A = {1, 2, 3, 4, 5} ve B = {0, 3, 6} olsun. Aşağıdakileri bulunuz.\n\nBoşluk 1: A ∪ B, Boşluk 2: A ∩ B, Boşluk 3: A − B, Boşluk 4: B − A",
      bosluklar: [["{0, 1, 2, 3, 4, 5, 6}"], ["{3}"], ["{1, 2, 4, 5}"], ["{0, 6}", "{6, 0}"]],
      aciklama: "Birleşim tüm elemanları, kesişim ortak elemanı (3), farklar ise yalnız bir kümede olanları verir. Elemanları küçükten büyüğe yazınız.",
    },
    {
      id: "u10-k15", no: "15", tip: "yaz", kavram: "u10-ozdeslik", zorluk: 3,
      soru: "İkinci De Morgan kuralını, yani A ∪ B'nin tümleyeninin Ā ∩ B̄ olduğunu a) iki kümenin birbirinin alt kümesi olduğunu göstererek, b) üyelik tablosu kullanarak ispatlayınız.",
      aciklama: "a) x ∈ (A ∪ B)ᶜ ⇔ x ∉ A ∪ B ⇔ ¬(x ∈ A ∨ x ∈ B) ⇔ (x ∉ A) ∧ (x ∉ B) ⇔ x ∈ Ā ∧ x ∈ B̄ ⇔ x ∈ Ā ∩ B̄. Her iki yön de geçerli olduğundan iki küme birbirinin alt kümesidir, yani eşittir.\n\nb) Üyelik tablosu:\n\n| A | B | A ∪ B | (A ∪ B)ᶜ | Ā | B̄ | Ā ∩ B̄ |\n|---|---|---|---|---|---|---|\n| 1 | 1 | 1 | 0 | 0 | 0 | 0 |\n| 1 | 0 | 1 | 0 | 0 | 1 | 0 |\n| 0 | 1 | 1 | 0 | 1 | 0 | 0 |\n| 0 | 0 | 0 | 1 | 1 | 1 | 1 |\n\n(A ∪ B)ᶜ ve Ā ∩ B̄ sütunları aynıdır.",
    },
  ]),

  ...turet(U, K, "u10-islem", [
    {
      id: "u10-t-birlesim-tanim", tip: "fill", zorluk: 1, semboller: true,
      soru: "A ∪ B = {x | x ∈ A ____ x ∈ B}. Boşluğa hangi mantık bağlacı gelir?",
      bosluklar: [["∨", "veya"]],
      aciklama: "Birleşim, A'da veya B'de (ya da ikisinde) olan elemanlardır.",
    },
    {
      id: "u10-t-ayrik", tip: "mcq", zorluk: 1,
      soru: "A ∩ B = ∅ olan iki kümeye ne ad verilir?",
      secenekler: ["Ayrık kümeler", "Eşit kümeler", "Tümleyen kümeler", "Kuvvet kümeleri"],
      dogru: 0,
      aciklama: "Kesişimi boş olan kümeler ayrıktır.",
    },
    {
      id: "u10-t-ic-dis", tip: "fill", zorluk: 2,
      soru: "|A| = 10, |B| = 7 ve |A ∩ B| = 3 ise |A ∪ B| kaçtır?",
      bosluklar: [["14"]],
      aciklama: "İçerme-dışarma ilkesi: |A ∪ B| = |A| + |B| − |A ∩ B| = 10 + 7 − 3 = 14.",
    },
    {
      id: "u10-t-tumleyen", tip: "fill", zorluk: 1,
      soru: "Evrensel küme U = {1, 2, ..., 10} ve A = {1, 3, 5, 7, 9} ise Ā (A'nın tümleyeni) nedir?",
      bosluklar: [["{2, 4, 6, 8, 10}"]],
      aciklama: "Ā = U − A, U'da olup A'da olmayan elemanlardır.",
    },
    {
      id: "u10-t-fark-tumleyen", tip: "mcq", zorluk: 2,
      soru: "A − B kümesi aşağıdakilerden hangisine eşittir?",
      secenekler: ["A ∩ B̄", "A ∪ B̄", "Ā ∩ B", "Ā ∪ B"],
      dogru: 0,
      aciklama: "A − B, A'da olup B'de olmayanlardır; yani A ile B'nin tümleyeninin kesişimi: A − B = A ∩ B̄.",
    },
    {
      id: "u10-t-simetrik", tip: "fill", zorluk: 2,
      soru: "A ⊕ B (simetrik fark), A'da veya B'de olup ikisinde birden olmayan elemanlardır. A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7, 8} ise A ⊕ B nedir?",
      bosluklar: [["{1, 2, 3, 6, 7, 8}"]],
      aciklama: "Ortak elemanlar 4 ve 5 çıkarılır: {1, 2, 3, 6, 7, 8}.",
    },
  ]),

  ...turet(U, K, "u10-ozdeslik", [
    {
      id: "u10-t-demorgan", tip: "mcq", zorluk: 1,
      soru: "Kümelerde birinci De Morgan kuralına göre A ∩ B'nin tümleyeni neye eşittir?",
      secenekler: ["Ā ∪ B̄", "Ā ∩ B̄", "A ∪ B", "A − B"],
      dogru: 0,
      aciklama: "(A ∩ B)ᶜ = Ā ∪ B̄. Kümeler için özdeşlikler, mantıktaki denkliklerin karşılığıdır.",
    },
    {
      id: "u10-t-yutma", tip: "mcq", zorluk: 2,
      soru: "A ∪ (A ∩ B) kümesi neye eşittir?",
      secenekler: ["A", "B", "A ∩ B", "A ∪ B"],
      dogru: 0,
      aciklama: "Yutma özdeşliği: A ∪ (A ∩ B) = A ve A ∩ (A ∪ B) = A.",
    },
    {
      id: "u10-t-dagilma", tip: "fill", zorluk: 2, semboller: true,
      soru: "Dağılma özdeşliğine göre A ∩ (B ∪ C) neye eşittir?",
      bosluklar: [["(A ∩ B) ∪ (A ∩ C)", "(A ∩ C) ∪ (A ∩ B)"]],
      aciklama: "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
    },
    {
      id: "u10-t-uyelik", tip: "tf", zorluk: 1,
      soru: "Üyelik tablosunda bir elemanın kümede olduğu 1, olmadığı 0 ile gösterilir; iki ifadenin sütunları aynıysa kümeler eşittir.",
      dogru: true,
      aciklama: "Doğru. Üyelik tablosu, mantıktaki doğruluk tablosunun kümelerdeki karşılığıdır.",
    },
    {
      id: "u10-t-ozdeslik-yaz", tip: "yaz", zorluk: 3,
      soru: "(A ∪ (B ∩ C))ᶜ = (Cᶜ ∪ Bᶜ) ∩ Aᶜ olduğunu küme özdeşlikleriyle gösteriniz.",
      aciklama: "(A ∪ (B ∩ C))ᶜ\n= Aᶜ ∩ (B ∩ C)ᶜ   (De Morgan)\n= Aᶜ ∩ (Bᶜ ∪ Cᶜ)   (De Morgan)\n= (Bᶜ ∪ Cᶜ) ∩ Aᶜ   (değişme)\n= (Cᶜ ∪ Bᶜ) ∩ Aᶜ   (değişme)",
    },
  ]),

  ...turet(U, K, "u10-genel", [
    {
      id: "u10-t-genel-birlesim", tip: "fill", zorluk: 2,
      soru: "A = {0, 2, 4, 6, 8}, B = {0, 1, 2, 3, 4} ve C = {0, 3, 6, 9} ise A ∩ B ∩ C nedir?",
      bosluklar: [["{0}"]],
      aciklama: "Üç kümenin ortak tek elemanı 0'dır.",
    },
    {
      id: "u10-t-genel-birlesim2", tip: "fill", zorluk: 2,
      soru: "Aynı kümeler için (A = {0, 2, 4, 6, 8}, B = {0, 1, 2, 3, 4}, C = {0, 3, 6, 9}) A ∪ B ∪ C nedir?",
      bosluklar: [["{0, 1, 2, 3, 4, 6, 8, 9}"]],
      aciklama: "En az bir kümede olan tüm elemanlar: {0, 1, 2, 3, 4, 6, 8, 9}.",
    },
    {
      id: "u10-t-ai", tip: "mcq", zorluk: 3,
      soru: "i = 1, 2, 3, ... için Aᵢ = {1, 2, ..., i} olsun. ⋃ Aᵢ (i = 1'den ∞'a) ve ⋂ Aᵢ nedir?",
      secenekler: ["Birleşim Z⁺, kesişim {1}", "Birleşim {1}, kesişim Z⁺", "Birleşim Z⁺, kesişim ∅", "Birleşim N, kesişim {0, 1}"],
      dogru: 0,
      aciklama: "Her pozitif tam sayı bir Aᵢ'de vardır, birleşim Z⁺'dır. 1 her Aᵢ'de vardır ve başka ortak eleman yoktur, kesişim {1}'dir.",
    },
  ]),

  ...turet(U, K, "u10-bit", [
    {
      id: "u10-t-bit-gosterim", tip: "fill", zorluk: 2,
      soru: "U = {1, 2, 3, ..., 10} ve elemanlar artan sırada olsun. U'daki tek sayıların kümesi {1, 3, 5, 7, 9} hangi bit dizisiyle gösterilir? (boşluksuz yazınız)",
      bosluklar: [["1010101010", "10 1010 1010"]],
      aciklama: "i. bit, i kümede ise 1'dir: 1010101010.",
    },
    {
      id: "u10-t-bit-birlesim", tip: "mcq", zorluk: 2,
      soru: "Bit dizisi gösteriminde iki kümenin birleşimi hangi bit işlemiyle bulunur?",
      secenekler: ["Bit düzeyinde VEYA", "Bit düzeyinde VE", "Bit düzeyinde XOR", "Her bitin tersi"],
      dogru: 0,
      aciklama: "Birleşim VEYA, kesişim VE, tümleyen her bitin tersiyle bulunur.",
    },
    {
      id: "u10-t-bit-kesisim", tip: "fill", zorluk: 2,
      soru: "11 1110 0000 ile 10 1010 1010 bit dizileriyle gösterilen kümelerin kesişiminin bit dizisi nedir?",
      bosluklar: [["1010100000", "10 1010 0000"]],
      aciklama: "Bit düzeyinde VE: 10 1010 0000, yani {1, 3, 5}.",
    },
  ]),
];
