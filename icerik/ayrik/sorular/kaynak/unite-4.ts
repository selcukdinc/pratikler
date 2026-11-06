// 4. ünite: Kesim 1.4 Yüklemler ve Niceleyiciler

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 4;
const K = "u4";
const B = "1.4";

export const unite4: Soru[] = [
  ...cikmis(U, K, [
    {
      id: "u4-c28", no: 28, tip: "mcq", kavram: "u4-yuklem", zorluk: 2,
      soru: "\"x+5<2x\" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri \"doğru\"dur? P(0);P(5);P(10);P(15)",
      secenekler: ["1", "3", "2", "4"], dogru: 2,
      aciklama: "x + 5 < 2x, x > 5 demektir. P(0): 5 < 0 yanlış; P(5): 10 < 10 yanlış; P(10): 15 < 20 doğru; P(15): 20 < 30 doğru. İki tanesi doğrudur.",
    },
    {
      id: "u4-c29", no: 29, tip: "mcq", kavram: "u4-yuklem", zorluk: 2,
      soru: "\"x+5<2x\" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri \"yanlış\"tır? P(0);P(5);P(10);P(15)",
      secenekler: ["4", "1", "3", "2"], dogru: 3,
      aciklama: "x + 5 < 2x yalnız x > 5 iken doğrudur. P(0) ve P(5) yanlıştır (P(5)'te 10 < 10 sağlanmaz); iki tane.",
    },
    {
      id: "u4-c30", no: 30, tip: "mcq", kavram: "u4-yuklem",
      soru: "\"x<25\" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri \"yanlış\"tır? P(0);P(10);P(20);P(30)",
      secenekler: ["1", "5", "7", "3"], dogru: 0,
      aciklama: "Yalnız P(30) yanlıştır (30 < 25 değil). 0, 10 ve 20 için ifade doğrudur.",
    },
    {
      id: "u4-c31", no: 31, tip: "mcq", kavram: "u4-yuklem",
      soru: "\"x<25\" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri \"doğru\"dur? P(0);P(10);P(20);P(30)",
      secenekler: ["7", "1", "5", "3"], dogru: 3,
      aciklama: "P(0), P(10) ve P(20) doğrudur; P(30) yanlıştır. Üç tane.",
    },
  ]),

  ...kitap(U, K, B, [
    {
      id: "u4-k1", no: "1", tip: "fill", kavram: "u4-yuklem",
      soru: "\"x ≤ 4\" ifadesini P(x) ile gösterelim. Aşağıdakilerin doğruluk değeri (D/Y) nedir?\n\nBoşluk 1: P(0), Boşluk 2: P(4), Boşluk 3: P(6)",
      bosluklar: [["D", "doğru"], ["D", "doğru"], ["Y", "yanlış"]],
      aciklama: "0 ≤ 4 ve 4 ≤ 4 doğru, 6 ≤ 4 yanlıştır.",
    },
    {
      id: "u4-k3", no: "3", tip: "fill", kavram: "u4-yuklem",
      soru: "\"y'nin başkenti x'tir\" ifadesini Q(x, y) ile gösterelim. Aşağıdakilerin doğruluk değeri (D/Y) nedir?\n\nBoşluk 1: Q(Atina, Yunanistan), Boşluk 2: Q(Tahran, İran), Boşluk 3: Q(Rusya, Moskova), Boşluk 4: Q(Barcelona, İspanya)",
      bosluklar: [["D", "doğru"], ["D", "doğru"], ["Y", "yanlış"], ["Y", "yanlış"]],
      aciklama: "Değişkenlerin sırası önemlidir. Q(Rusya, Moskova) \"Moskova'nın başkenti Rusya'dır\" der; yanlıştır. İspanya'nın başkenti Madrid'dir.",
    },
    {
      id: "u4-k5", no: "5", tip: "yaz", kavram: "u4-niceleyici",
      soru: "x'in tanım kümesi bütün öğrencilerden oluşmak üzere P(x), \"x derste her hafta sonu beş saatten fazla zaman geçirir\" ifadesini göstersin. Aşağıdakileri Türkçe olarak açıklayınız.\n\na) ∃xP(x)\nb) ∀xP(x)\nc) ∃x ¬P(x)\nd) ∀x ¬P(x)",
      aciklama: "a) Derste her hafta sonu beş saatten fazla zaman geçiren bir öğrenci vardır.\nb) Her öğrenci derste her hafta sonu beş saatten fazla zaman geçirir.\nc) Derste her hafta sonu beş saatten fazla zaman geçirmeyen bir öğrenci vardır.\nd) Hiçbir öğrenci derste her hafta sonu beş saatten fazla zaman geçirmez.",
    },
    {
      id: "u4-k7", no: "7", tip: "yaz", kavram: "u4-ceviri", zorluk: 2,
      soru: "Tanım kümesi bütün insanlar, C(x) \"x bir komedyendir\" ve F(x) \"x eğlencelidir\" olmak üzere aşağıdakileri Türkçeye çeviriniz.\n\na) ∀x(C(x) → F(x))\nb) ∀x(C(x) ∧ F(x))\nc) ∃x(C(x) → F(x))\nd) ∃x(C(x) ∧ F(x))",
      aciklama: "a) Her komedyen eğlencelidir.\nb) Herkes eğlenceli bir komedyendir.\nc) Komedyense eğlenceli olan bir kişi vardır. (Komedyen olmayan biri bunu zaten sağlar.)\nd) Bazı komedyenler eğlencelidir.",
    },
    {
      id: "u4-k9", no: "9", tip: "fill", kavram: "u4-ceviri", zorluk: 2, semboller: true,
      soru: "P(x) \"x Rusça konuşabilir\", Q(x) \"x C++ bilgisayar dilini bilir\" olsun. Tanım kümesi okulunuzdaki öğrenciler.\n\na) Rusça konuşabilen ve C++ bilen bir öğrenci vardır.\nb) Rusça konuşabilen fakat C++ bilmeyen bir öğrenci vardır.\nc) Her öğrenci ya Rusça konuşabilmekte ya da C++ bilmektedir.\nd) Rusça konuşabilen ya da C++ bilen hiçbir öğrenci yoktur.\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)",
      bosluklar: [["∃x(P(x) ∧ Q(x))"], ["∃x(P(x) ∧ ¬Q(x))"], ["∀x(P(x) ∨ Q(x))"], ["∀x¬(P(x) ∨ Q(x))", "¬∃x(P(x) ∨ Q(x))", "∀x(¬P(x) ∧ ¬Q(x))"]],
      aciklama: "a) ∃x(P(x) ∧ Q(x)). b) ∃x(P(x) ∧ ¬Q(x)). c) ∀x(P(x) ∨ Q(x)). d) ∀x¬(P(x) ∨ Q(x)), yani ¬∃x(P(x) ∨ Q(x)).",
    },
    {
      id: "u4-k11", no: "11", tip: "fill", kavram: "u4-niceleyici", zorluk: 2,
      soru: "P(x), \"x = x²\" ifadesi olsun. Tanım kümesi tam sayılar ise aşağıdakilerin doğruluk değeri (D/Y) nedir?\n\nBoşluk 1: P(0), Boşluk 2: P(2), Boşluk 3: P(−1), Boşluk 4: ∃xP(x), Boşluk 5: ∀xP(x)",
      bosluklar: [["D", "doğru"], ["Y", "yanlış"], ["Y", "yanlış"], ["D", "doğru"], ["Y", "yanlış"]],
      aciklama: "x = x² yalnız x = 0 ve x = 1 için doğrudur. (−1)² = 1 ≠ −1. Doğru yapan değer olduğundan ∃xP(x) doğru, x = 2 karşı örnek olduğundan ∀xP(x) yanlıştır.",
    },
    {
      id: "u4-k13", no: "13", tip: "mcq", kavram: "u4-niceleyici", zorluk: 2,
      soru: "Tanım kümesi tam sayılar olsun. Aşağıdakilerden hangisi yanlıştır?",
      secenekler: ["∀n(3n ≤ 4n)", "∀n(n + 1 > n)", "∃n(2n = 3n)", "∃n(n = −n)"],
      dogru: 0,
      aciklama: "∀n(3n ≤ 4n) negatif n için sağlanmaz (n = −1: −3 ≤ −4 yanlış). ∃n(2n = 3n) ve ∃n(n = −n) için n = 0 yeter. (Kitabın cevap anahtarı ∀n(3n ≤ 4n) için \"doğru\" der; bu yalnız n ≥ 0 için geçerlidir.)",
    },
    {
      id: "u4-k15", no: "15", tip: "fill", kavram: "u4-niceleyici", zorluk: 2,
      soru: "Tanım kümesi tam sayılar olsun. Doğruluk değerlerini (D/Y) yazınız.\n\nBoşluk 1: ∀n(n² ≥ 0), Boşluk 2: ∃n(n² = 2), Boşluk 3: ∀n(n² ≥ n), Boşluk 4: ∃n(n² < 0)",
      bosluklar: [["D", "doğru"], ["Y", "yanlış"], ["D", "doğru"], ["Y", "yanlış"]],
      aciklama: "Kare negatif olamaz. √2 tam sayı olmadığından n² = 2 sağlanmaz. Tam sayılarda n² ≥ n her zaman doğrudur (n ≤ 0 ise sağ taraf negatif ya da 0, n ≥ 1 ise n² ≥ n).",
    },
    {
      id: "u4-k17", no: "17", tip: "fill", kavram: "u4-niceleyici", zorluk: 2, semboller: true,
      soru: "P(x)'in tanım bölgesi 0, 1, 2, 3, 4 olsun. Niceleyici kullanmadan, bağlaçlarla yazınız.\n\nBoşluk 1: ∃xP(x), Boşluk 2: ∀xP(x)",
      bosluklar: [["P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)"], ["P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)"]],
      aciklama: "Sonlu tanım kümesinde varoluşsal niceleme bir ayrılmaya (∨), evrensel niceleme bir birleşmeye (∧) dönüşür.",
    },
  ]),

  ...turet(U, K, "u4-yuklem", [
    {
      id: "u4-t-onerme-fonk", tip: "tf", zorluk: 1,
      soru: "P(x) önerme fonksiyonu, x'e tanım kümesinden bir değer verildiğinde bir önerme olur ve bir doğruluk değeri kazanır.",
      dogru: true,
      aciklama: "Doğru. P(x) tek başına önerme değildir; P(3) gibi bir değer verilince önerme olur.",
    },
    {
      id: "u4-t-yuklem-ad", tip: "mcq", zorluk: 1,
      soru: "\"x, 3'ten büyüktür\" cümlesinde \"3'ten büyüktür\" kısmına ne ad verilir?",
      secenekler: ["Yüklem", "Niceleyici", "Tanım kümesi", "Bağlı değişken"],
      dogru: 0,
      aciklama: "Cümlenin öznesi x, \"3'ten büyüktür\" ise öznenin sahip olabileceği bir özelliği bildiren yüklemdir.",
    },
    {
      id: "u4-t-onkosul", tip: "mcq", zorluk: 2,
      soru: "Bir programın girdilerinin sağlaması gereken koşulları belirten ifadeye ne denir?",
      secenekler: ["Ön koşul", "Son koşul", "Niceleyici", "Totoloji"],
      dogru: 0,
      aciklama: "Girdiye ait koşullar ön koşul, programın çıktısının sağlaması gerekenler son koşuldur.",
    },
  ]),

  ...turet(U, K, "u4-niceleyici", [
    {
      id: "u4-t-evrensel", tip: "mcq", zorluk: 1,
      soru: "∀xP(x) ifadesi ne zaman doğrudur?",
      secenekler: ["Tanım kümesindeki her x için P(x) doğruysa", "P(x)'i doğru yapan en az bir x varsa", "P(x)'i yanlış yapan bir x varsa", "Tanım kümesi boş değilse"],
      dogru: 0,
      aciklama: "Evrensel niceleme, P(x)'in tanım kümesinin tüm elemanları için doğru olduğunu söyler.",
    },
    {
      id: "u4-t-karsi-ornek", tip: "fill", zorluk: 1,
      soru: "∀xP(x) ifadesini yanlış yapan, yani P(x)'i yanlış yapan bir elemana ____ denir.",
      bosluklar: [["karşı örnek", "karsi ornek"]],
      aciklama: "Tek bir karşı örnek, evrensel niceleme ifadesinin yanlış olduğunu göstermeye yeter.",
    },
    {
      id: "u4-t-varolussal", tip: "mcq", zorluk: 1,
      soru: "Tanım kümesi boş olmayan sonlu bir küme ise ∃xP(x) ifadesi ne zaman yanlıştır?",
      secenekler: ["Her x için P(x) yanlışsa", "En az bir x için P(x) yanlışsa", "Her x için P(x) doğruysa", "Tam bir x için P(x) doğruysa"],
      dogru: 0,
      aciklama: "Varoluşsal niceleme, P(x)'i doğru yapan hiçbir x yoksa yanlıştır.",
    },
    {
      id: "u4-t-tek", tip: "fill", zorluk: 2, semboller: true,
      soru: "\"P(x)'i doğru yapan tek bir x vardır\" ifadesi hangi sembolle gösterilir? (∃ ile başlayan sembolü yazınız)",
      bosluklar: [["∃!", "∃1", "∃! x", "∃!x"]],
      aciklama: "Teklik niceleyicisi ∃! (ya da ∃₁) ile gösterilir: ∃!xP(x).",
    },
    {
      id: "u4-t-oncelik", tip: "tf", zorluk: 2,
      soru: "∀xP(x) ∨ Q(x) ifadesi ∀x(P(x) ∨ Q(x)) anlamına gelir.",
      dogru: false,
      aciklama: "Yanlış. Niceleyicilerin önceliği tüm bağlaçlardan yüksektir; ifade (∀xP(x)) ∨ Q(x) demektir.",
    },
    {
      id: "u4-t-bagli", tip: "mcq", zorluk: 2,
      soru: "∃x(x + y = 1) ifadesinde x ve y değişkenleri nasıldır?",
      secenekler: ["x bağlı, y serbest", "x serbest, y bağlı", "İkisi de bağlı", "İkisi de serbest"],
      dogru: 0,
      aciklama: "x varoluşsal niceleyiciyle bağlanmıştır; y'ye ne değer verilmiş ne de niceleyici uygulanmıştır, serbesttir.",
    },
    {
      id: "u4-t-sonlu", tip: "fill", zorluk: 2,
      soru: "Tanım kümesi {1, 2, 3, 4} olmak üzere ∀x(x² < 10) ifadesinin doğruluk değeri nedir? (D/Y)",
      bosluklar: [["Y", "yanlış"]],
      aciklama: "4² = 16 < 10 sağlanmaz; x = 4 karşı örnektir.",
    },
  ]),

  ...turet(U, K, "u4-degil", [
    {
      id: "u4-t-degil-evrensel", tip: "fill", zorluk: 1, semboller: true,
      soru: "De Morgan kuralına göre ¬∀xP(x) ifadesi neye denktir?",
      bosluklar: [["∃x¬P(x)", "∃x ¬P(x)"]],
      aciklama: "\"Her x için P(x)\" yanlışsa P(x)'in yanlış olduğu bir x vardır: ¬∀xP(x) ≡ ∃x¬P(x).",
    },
    {
      id: "u4-t-degil-var", tip: "fill", zorluk: 1, semboller: true,
      soru: "¬∃xQ(x) ifadesi neye denktir?",
      bosluklar: [["∀x¬Q(x)", "∀x ¬Q(x)"]],
      aciklama: "Q(x)'i doğru yapan bir x yoksa her x için Q(x) yanlıştır: ¬∃xQ(x) ≡ ∀x¬Q(x).",
    },
    {
      id: "u4-t-degil-cumle", tip: "mcq", zorluk: 2,
      soru: "\"Sınıftaki her öğrenci kalkülüs dersi almıştır\" ifadesinin değili hangisidir?",
      secenekler: ["Sınıfta kalkülüs dersi almamış bir öğrenci vardır.", "Sınıftaki hiçbir öğrenci kalkülüs dersi almamıştır.", "Sınıftaki her öğrenci kalkülüs dersi almamıştır.", "Sınıfta kalkülüs dersi almış bir öğrenci vardır."],
      dogru: 0,
      aciklama: "¬∀xP(x) ≡ ∃x¬P(x): kalkülüs almamış en az bir öğrenci vardır. \"Hiçbiri almamıştır\" daha güçlü bir iddiadır.",
    },
    {
      id: "u4-t-degil-yaz", tip: "yaz", zorluk: 2,
      soru: "∀x(x² > x) ve ∃x(x² = 2) ifadelerinin değillerini, değil işaretini niceleyicinin içine taşıyarak yazınız.",
      aciklama: "¬∀x(x² > x) ≡ ∃x¬(x² > x) ≡ ∃x(x² ≤ x).\n\n¬∃x(x² = 2) ≡ ∀x¬(x² = 2) ≡ ∀x(x² ≠ 2).",
    },
  ]),

  ...turet(U, K, "u4-ceviri", [
    {
      id: "u4-t-her-ogrenci", tip: "mcq", zorluk: 2,
      soru: "Tanım kümesi tüm insanlar, S(x) \"x bu sınıftadır\", C(x) \"x kalkülüs çalışmıştır\" olsun. \"Bu sınıftaki her öğrenci kalkülüs çalışmıştır\" nasıl yazılır?",
      secenekler: ["∀x(S(x) → C(x))", "∀x(S(x) ∧ C(x))", "∃x(S(x) ∧ C(x))", "∃x(S(x) → C(x))"],
      dogru: 0,
      aciklama: "Evrensel niceleyiciyle şartlı ifade kullanılır. ∀x(S(x) ∧ C(x)) herkesin bu sınıfta olduğunu da iddia eder, yanlış çeviridir.",
    },
    {
      id: "u4-t-bazi", tip: "mcq", zorluk: 2,
      soru: "Aynı tanımlarla \"Bu sınıftaki bazı öğrenciler kalkülüs çalışmıştır\" nasıl yazılır?",
      secenekler: ["∃x(S(x) ∧ C(x))", "∃x(S(x) → C(x))", "∀x(S(x) → C(x))", "∀x(S(x) ∧ C(x))"],
      dogru: 0,
      aciklama: "Varoluşsal niceleyiciyle ve bağlacı kullanılır. ∃x(S(x) → C(x)) bu sınıfta olmayan biri için de doğru olur, yanlış çeviridir.",
    },
    {
      id: "u4-t-aslan", tip: "fill", zorluk: 3, semboller: true,
      soru: "Tanım kümesi tüm canlılar; P(x) \"x bir aslandır\", Q(x) \"x yırtıcıdır\" olsun. \"Bütün aslanlar yırtıcıdır\" önermesini yazınız.",
      bosluklar: [["∀x(P(x) → Q(x))"]],
      aciklama: "Kitaptaki Lewis Carroll örneği: ∀x(P(x) → Q(x)).",
    },
  ]),
];
