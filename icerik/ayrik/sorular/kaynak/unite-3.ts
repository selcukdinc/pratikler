// 3. ünite: Kesim 1.3 Önerme Denklikleri

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 3;
const K = "u3";
const B = "1.3";

export const unite3: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u3-k7", no: "7", tip: "yaz", kavram: "u3-demorgan", zorluk: 1,
      soru: "Aşağıdaki ifadelerden her birinin değilini bulmak için De Morgan kanunlarını kullanınız.\n\na) Can zengin ve mutlu.\nb) Kemal yarın bisiklete binecek veya koşacak.\nc) Maya derse gitmek için yürür veya otobüse biner.\nd) İbrahim çalışkan ve akıllıdır.",
      aciklama: "¬(p ∧ q) ≡ ¬p ∨ ¬q ve ¬(p ∨ q) ≡ ¬p ∧ ¬q kullanılır.\n\na) Can zengin değil veya mutlu değil.\nb) Kemal yarın bisiklete binmeyecek ve koşmayacak.\nc) Maya derse gitmek için yürümez ve otobüse binmez.\nd) İbrahim çalışkan değil veya akıllı değil.",
    },
    {
      id: "u3-k9e", no: "9e", tip: "yaz", kavram: "u3-totoloji", zorluk: 2,
      soru: "Doğruluk tablosu kullanarak ¬(p → q) → p şartlı cümlesinin bir totoloji olduğunu gösteriniz.",
      aciklama: "| p | q | p → q | ¬(p → q) | ¬(p → q) → p |\n|---|---|---|---|---|\n| D | D | D | Y | D |\n| D | Y | Y | D | D |\n| Y | D | D | Y | D |\n| Y | Y | D | Y | D |\n\nSon sütun her satırda D olduğu için ifade bir totolojidir. (¬(p → q) yalnız p doğru, q yanlışken doğrudur; o satırda p de doğrudur.)",
    },
    {
      id: "u3-k11c", no: "11c", tip: "yaz", kavram: "u3-denklik", zorluk: 3,
      soru: "¬p → (p → q) şartlı cümlesinin totoloji olduğunu doğruluk tablosu kullanmadan, mantıksal denklikler ile gösteriniz.",
      aciklama: "¬p → (p → q)\n≡ ¬(¬p) ∨ (p → q)   (şartlı ifade: a → b ≡ ¬a ∨ b)\n≡ p ∨ (¬p ∨ q)   (çift değil, şartlı ifade)\n≡ (p ∨ ¬p) ∨ q   (birleşme)\n≡ D ∨ q   (değilleme kuralı)\n≡ D   (baskınlık kuralı)",
    },
    {
      id: "u3-k14", no: "14", tip: "tf", kavram: "u3-totoloji", zorluk: 2,
      soru: "(¬p ∧ (p → q)) → ¬q önermesi bir totolojidir.",
      dogru: false,
      aciklama: "Yanlış. p yanlış, q doğru iken ¬p ∧ (p → q) doğru, ¬q yanlış olur; şartlı ifade yanlış çıkar.",
    },
    {
      id: "u3-k15", no: "15", tip: "tf", kavram: "u3-totoloji", zorluk: 2,
      soru: "(¬q ∧ (p → q)) → ¬p önermesi bir totolojidir.",
      dogru: true,
      aciklama: "Doğru. Hipotez doğruysa q yanlış ve p → q doğrudur; bu yalnız p yanlışken mümkündür, yani ¬p doğrudur. (Bu, ret kuralının (modus tollens) totolojisidir.)",
    },
    {
      id: "u3-k17", no: "17", tip: "yaz", kavram: "u3-denklik", zorluk: 2,
      soru: "¬(p ↔ q) ve p ↔ ¬q ifadelerinin denk olduğunu gösteriniz.",
      aciklama: "¬(p ↔ q) yalnız p ile q farklı değerdeyken doğrudur.\n\np ↔ ¬q, p ile ¬q aynı değerdeyken doğrudur; bu da p ile q'nun farklı olması demektir.\n\nİki ifade tam olarak aynı satırlarda (p ≠ q) doğru olduğu için denktir.",
    },
    {
      id: "u3-k23", no: "23", tip: "fill", kavram: "u3-denklik", zorluk: 2, semboller: true,
      soru: "(p → r) ∧ (q → r) ifadesi hangi tek şartlı ifadeye denktir? (p, q ve r kullanınız)",
      bosluklar: [["(p ∨ q) → r", "(q ∨ p) → r"]],
      aciklama: "(p → r) ∧ (q → r) ≡ (p ∨ q) → r. p ya da q'dan biri doğruysa r doğru olmalıdır.",
    },
    {
      id: "u3-k31", no: "31", tip: "yaz", kavram: "u3-denklik", zorluk: 2,
      soru: "(p → q) → r ve p → (q → r) ifadelerinin mantıksal olarak denk olmadıklarını gösteriniz.",
      aciklama: "Bir karşı örnek yeter: p = Y, q = Y, r = Y alalım.\n\n(p → q) → r: p → q = D, D → Y = Y.\np → (q → r): p yanlış olduğundan ifade D.\n\nİki ifade bu satırda farklı değer aldığı için denk değildir.",
    },
  ]),

  ...turet(U, K, "u3-totoloji", [
    {
      id: "u3-t-totoloji-tanim", tip: "fill", zorluk: 1,
      soru: "İçindeki önerme değişkenlerinin doğruluk değerleri ne olursa olsun her zaman doğru olan bileşik önermeye ____ denir.",
      bosluklar: [["totoloji"]],
      aciklama: "Her zaman doğru olan bileşik önerme totolojidir; örnek p ∨ ¬p.",
    },
    {
      id: "u3-t-celiski", tip: "mcq", zorluk: 1,
      soru: "p ∧ ¬p bileşik önermesi aşağıdakilerden hangisidir?",
      secenekler: ["Çelişki", "Totoloji", "Olumsallık", "Çift şartlı ifade"],
      dogru: 0,
      aciklama: "p ∧ ¬p her zaman yanlıştır; her zaman yanlış olan önerme çelişkidir.",
    },
    {
      id: "u3-t-olumsallik", tip: "mcq", zorluk: 1,
      soru: "Ne totoloji ne de çelişki olan bileşik önermeye ne ad verilir?",
      secenekler: ["Olumsallık", "Denklik", "Sağlanabilirlik", "Dışlayıcı veya"],
      dogru: 0,
      aciklama: "Bazı değerlerde doğru, bazılarında yanlış olan önerme olumsallıktır; örnek p → q.",
    },
    {
      id: "u3-t-tur-sec", tip: "mcq", zorluk: 2,
      soru: "(p ∧ q) → p bileşik önermesi aşağıdakilerden hangisidir?",
      secenekler: ["Totoloji", "Çelişki", "Olumsallık", "Önerme değildir"],
      dogru: 0,
      aciklama: "p ∧ q doğruysa p de doğrudur; şartlı ifade hiçbir satırda yanlış olamaz. Bu bir totolojidir.",
    },
  ]),

  ...turet(U, K, "u3-denklik", [
    {
      id: "u3-t-denk-tanim", tip: "mcq", zorluk: 1,
      soru: "p ve q bileşik önermeleri hangi durumda mantıksal olarak denktir?",
      secenekler: ["p ↔ q bir totoloji ise", "p → q bir olumsallık ise", "p ∧ q bir çelişki ise", "p ve q aynı değişkenleri içeriyorsa"],
      dogru: 0,
      aciklama: "p ↔ q totoloji ise p ve q denktir; p ≡ q yazılır.",
    },
    {
      id: "u3-t-sartli-denk", tip: "fill", zorluk: 1, semboller: true,
      soru: "p → q ifadesi yalnız ¬ ve ∨ kullanılarak nasıl yazılır?",
      bosluklar: [["¬p ∨ q", "q ∨ ¬p"]],
      aciklama: "p → q ≡ ¬p ∨ q. Şartlı ifadeyle ilgili en çok kullanılan denkliktir.",
    },
    {
      id: "u3-t-dagilma", tip: "fill", zorluk: 2, semboller: true,
      soru: "Dağılma kuralına göre p ∨ (q ∧ r) ifadesi neye denktir?",
      bosluklar: [["(p ∨ q) ∧ (p ∨ r)", "(p ∨ r) ∧ (p ∨ q)"]],
      aciklama: "Veya, ve üzerine dağılır: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r).",
    },
    {
      id: "u3-t-yutma", tip: "mcq", zorluk: 2,
      soru: "Yutma kuralına göre p ∨ (p ∧ q) ifadesi neye denktir?",
      secenekler: ["p", "q", "p ∧ q", "p ∨ q"],
      dogru: 0,
      aciklama: "p ∨ (p ∧ q) ≡ p ve p ∧ (p ∨ q) ≡ p yutma kurallarıdır.",
    },
    {
      id: "u3-t-baskinlik", tip: "mcq", zorluk: 1,
      soru: "D (her zaman doğru) ve Y (her zaman yanlış) için p ∨ D ifadesi neye denktir?",
      secenekler: ["D", "p", "Y", "¬p"],
      dogru: 0,
      aciklama: "Baskınlık kuralı: p ∨ D ≡ D ve p ∧ Y ≡ Y. Etkisizlik kuralı ise p ∧ D ≡ p, p ∨ Y ≡ p'dir.",
    },
    {
      id: "u3-t-sadelestir", tip: "yaz", zorluk: 3,
      soru: "¬(p ∨ (¬p ∧ q)) ve ¬p ∧ ¬q ifadelerinin denk olduğunu mantıksal denklikler kullanarak gösteriniz.",
      aciklama: "¬(p ∨ (¬p ∧ q))\n≡ ¬p ∧ ¬(¬p ∧ q)   (ikinci De Morgan kuralı)\n≡ ¬p ∧ (p ∨ ¬q)   (birinci De Morgan ve çift değil)\n≡ (¬p ∧ p) ∨ (¬p ∧ ¬q)   (dağılma)\n≡ Y ∨ (¬p ∧ ¬q)   (değilleme kuralı)\n≡ ¬p ∧ ¬q   (etkisizlik)",
    },
    {
      id: "u3-t-cift-sartli", tip: "tf", zorluk: 2,
      soru: "p ↔ q ifadesi (p → q) ∧ (q → p) ifadesine denktir.",
      dogru: true,
      aciklama: "Doğru. Çift şartlı ifade iki yönlü şartlı ifadenin birleşmesidir.",
    },
  ]),

  ...turet(U, K, "u3-demorgan", [
    {
      id: "u3-t-dm1", tip: "fill", zorluk: 1, semboller: true,
      soru: "De Morgan kuralına göre ¬(p ∧ q) neye denktir?",
      bosluklar: [["¬p ∨ ¬q", "¬q ∨ ¬p"]],
      aciklama: "¬(p ∧ q) ≡ ¬p ∨ ¬q.",
    },
    {
      id: "u3-t-dm2", tip: "fill", zorluk: 1, semboller: true,
      soru: "De Morgan kuralına göre ¬(p ∨ q) neye denktir?",
      bosluklar: [["¬p ∧ ¬q", "¬q ∧ ¬p"]],
      aciklama: "¬(p ∨ q) ≡ ¬p ∧ ¬q.",
    },
    {
      id: "u3-t-dm-cumle", tip: "mcq", zorluk: 2,
      soru: "\"Mehmet'in bir cep telefonu ve dizüstü bilgisayarı var\" cümlesinin değili hangisidir?",
      secenekler: ["Mehmet'in cep telefonu yok veya dizüstü bilgisayarı yok.", "Mehmet'in cep telefonu yok ve dizüstü bilgisayarı yok.", "Mehmet'in cep telefonu var ama dizüstü bilgisayarı yok.", "Mehmet'in ne cep telefonu ne de bilgisayarı var."],
      dogru: 0,
      aciklama: "¬(p ∧ q) ≡ ¬p ∨ ¬q: telefonu yok veya bilgisayarı yok. \"Ne... ne de\" ise ¬p ∧ ¬q'dur, daha güçlü bir iddiadır.",
    },
    {
      id: "u3-t-dm-genel", tip: "tf", zorluk: 2,
      soru: "¬(p₁ ∨ p₂ ∨ ... ∨ pₙ) ≡ ¬p₁ ∧ ¬p₂ ∧ ... ∧ ¬pₙ eşitliği De Morgan kuralının n önermeye genişletilmiş halidir.",
      dogru: true,
      aciklama: "Doğru. De Morgan kuralları n tane önerme için de geçerlidir.",
    },
  ]),

  ...turet(U, K, "u3-sat", [
    {
      id: "u3-t-sat-tanim", tip: "mcq", zorluk: 1,
      soru: "Bir bileşik önerme hangi durumda sağlanabilirdir?",
      secenekler: ["Onu doğru yapan en az bir değer ataması varsa", "Her değer atamasında doğruysa", "Hiçbir değer atamasında doğru değilse", "Yalnız iki değişken içeriyorsa"],
      dogru: 0,
      aciklama: "En az bir atamada doğru olan önerme sağlanabilirdir. Hiçbir atamada doğru değilse sağlanamaz, yani değili bir totolojidir.",
    },
    {
      id: "u3-t-sat-ornek", tip: "tf", zorluk: 2,
      soru: "(p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) bileşik önermesi sağlanabilirdir.",
      dogru: true,
      aciklama: "Doğru. Kitaptaki örnek: p, q ve r'nin üçü de doğru (ya da üçü de yanlış) iken önerme doğrudur.",
    },
    {
      id: "u3-t-sat-degil", tip: "tf", zorluk: 2,
      soru: "Bir bileşik önerme sağlanamazsa, değili bir totolojidir.",
      dogru: true,
      aciklama: "Doğru. Önerme her atamada yanlışsa değili her atamada doğrudur.",
    },
    {
      id: "u3-t-sudoku", tip: "mcq", zorluk: 2,
      soru: "Kitapta bir Sudoku bulmacasının çözümü hangi problemle ilişkilendirilir?",
      secenekler: ["Bir bileşik önermenin sağlanabilirliği", "Bir argümanın geçerliliği", "Bir fonksiyonun tersinin bulunması", "Bir kümenin kuvvet kümesi"],
      dogru: 0,
      aciklama: "Sudoku kuralları bir bileşik önermeyle yazılır; bulmacanın çözümü bu önermeyi doğru yapan değer atamasıdır.",
    },
  ]),
];
