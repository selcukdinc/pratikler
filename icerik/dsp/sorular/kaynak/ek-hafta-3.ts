// 3. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta3: Soru[] = [
  ...turet(3, "ayrik-diziler", "temel-diziler", [
    {
      id: "t3-pencere", zorluk: 2, tip: "num", yedek: true,
      soru: "u(n + 1) − u(n − 4) dizisi kaç örnekte 1 değerini alır?",
      bosluklar: [["5"]],
      aciklama: "u(n + 1) n ≥ −1'de, u(n − 4) n ≥ 4'te 1'dir. Fark −1 ≤ n ≤ 3'te 1: beş örnek.",
    },
    {
      id: "t3-durtu-toplam-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$\\displaystyle\\sum_{n=-\\infty}^{\\infty} (2n + 1)\\,\\delta(n + 2)$ kaçtır?",
      bosluklar: [["-3"]],
      aciklama: "Yalnızca n = −2 terimi kalır: 2·(−2) + 1 = −3.",
    },
    {
      id: "t3-basamak-deger", zorluk: 1, tip: "num", yedek: true,
      soru: "u(n − 3) dizisinin n = 2'deki ve n = 3'teki değerleri nedir?\n\nn = 2: ____ , n = 3: ____",
      bosluklar: [["0"], ["1"]],
      aciklama: "u(n − 3), n − 3 ≥ 0, yani n ≥ 3 için 1'dir.",
    },
  ]),
  ...turet(3, "ayrik-diziler", "ustel-sinuzoidal", [
    {
      id: "t3-ustel-buyur", zorluk: 1, tip: "mcq", yedek: true,
      soru: "$x(n) = (1{,}2)^n u(n)$ dizisi nasıl davranır?",
      secenekler: ["İşareti değişmeden büyür", "İşareti değişmeden söner", "İşareti değişerek büyür", "Sabit kalır"],
      dogru: 0,
      aciklama: "a = 1,2 > 1: dizi büyür; a pozitif olduğu için işaret değişmez.",
    },
    {
      id: "t3-sinus-faz", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = 4\\cos(\\pi n/2 + \\pi/3)$ dizisinin x(0) değeri kaçtır?",
      bosluklar: [["2"]],
      aciklama: "x(0) = 4·cos(π/3) = 4·0,5 = 2.",
    },
  ]),
  ...turet(3, "ayrik-diziler", "periyodiklik", [
    {
      id: "t3-periyot-2", zorluk: 1, tip: "num",
      soru: "$x(n) = \\sin(\\pi n / 4)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["8"]],
      aciklama: "$N = 2\\pi / (\\pi/4) = 8$.",
    },
    {
      id: "t3-periyot-ekok", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = \\cos(\\pi n / 5) + \\cos(\\pi n / 2)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["20"]],
      aciklama: "$N_1 = 10$, $N_2 = 4$; ekok(10, 4) = 20.",
    },
    {
      id: "t3-periyot-k-2", zorluk: 3, tip: "num", yedek: true,
      soru: "$x(n) = \\cos(0{,}4\\pi n)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["5"]],
      aciklama: "$N = 2\\pi k / 0{,}4\\pi = 5k$; k = 1 ile N = 5.",
    },
  ]),
  ...turet(3, "sinyal-islemleri", "simetri", [
    {
      id: "t3-cift-kisim-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(0) = 1, x(1) = 3 ve başka her yerde 0. Çift kısmın n = −1'deki değeri $x_e(-1)$ kaçtır?",
      bosluklar: [["1.5"]],
      aciklama: "$x_e(-1) = [x(-1) + x(1)]/2 = (0 + 3)/2 = 1{,}5$.",
    },
    {
      id: "t3-tek-ornek", zorluk: 1, tip: "tf", yedek: true,
      soru: "$x(n) = \\sin(0{,}3\\pi n)$ tek bir dizidir.",
      dogru: true,
      aciklama: "Doğru. sin(−θ) = −sin(θ) olduğu için x(−n) = −x(n).",
    },
  ]),
  ...turet(3, "sinyal-islemleri", "sinyal-donusum", [
    {
      id: "t3-gecikme", zorluk: 1, tip: "num", yedek: true,
      soru: "x(n) yalnızca n = 0'da 5 değerini alıyor. y(n) = x(n − 4) hangi n'de 5'tir?",
      bosluklar: [["4"]],
      aciklama: "Gecikme: dizi 4 örnek sağa kayar; değer n − 4 = 0, yani n = 4'te görünür.",
    },
    {
      id: "t3-ters-konum", zorluk: 2, tip: "num",
      soru: "x(n) yalnızca n = 2'de sıfırdan farklı. y(n) = x(−n + 1) hangi n'de sıfırdan farklıdır?",
      bosluklar: [["-1"]],
      aciklama: "−n + 1 = 2 olmalı: n = −1.",
    },
    {
      id: "t3-seyrelt-kayip", zorluk: 2, tip: "tf", yedek: true,
      soru: "y(n) = x(2n) seyreltmesinde x'in tek indisli örnekleri y'de kaybolur.",
      dogru: true,
      aciklama: "Doğru. y yalnızca x'in çift indisli örneklerini (x(0), x(2), x(4), ...) içerir; bu yüzden seyreltmede bilgi kaybolabilir.",
    },
  ]),
  ...turet(3, "sinyal-islemleri", "enerji-guc", [
    {
      id: "t3-enerji-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Yalnızca n = −1, 0, 1'de 2, 1, −3 değerlerini alan dizinin enerjisi kaçtır?",
      bosluklar: [["14"]],
      aciklama: "E = 4 + 1 + 9 = 14.",
    },
    {
      id: "t3-guc-cos", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = 3\\cos(\\pi n / 2)$ dizisinin gücü kaçtır? (bir periyot: n = 0..3)",
      bosluklar: [["4.5"]],
      aciklama: "Bir periyot: 3, 0, −3, 0. P = (9 + 0 + 9 + 0)/4 = 4,5 = A²/2.",
    },
    {
      id: "t3-enerji-guc", zorluk: 1, tip: "tf", yedek: true,
      soru: "Enerjisi sonlu olan bir dizinin ortalama gücü sıfırdır.",
      dogru: true,
      aciklama: "Doğru. Sonlu enerji giderek büyüyen bir pencere uzunluğuna bölününce sıfıra gider; bir dizi hem enerji hem güç sinyali olamaz.",
    },
  ]),
  ...turet(3, "ayrik-sistemler", "dogrusallik", [
    {
      id: "t3-dogrusal-degil", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Aşağıdaki sistemlerden hangisi doğrusal **değildir**?",
      secenekler: ["y(n) = x(n)·x(n − 1)", "y(n) = x(n) − x(n − 1)", "y(n) = n·x(n)", "y(n) = x(−n)"],
      dogru: 0,
      aciklama: "İki örneğin çarpımı homojen değildir: 2x girişi 4 kat çıkış verir. Diğerleri süperpozisyonu sağlar (n·x(n) ve x(−n) doğrusal ama zamanla değişir).",
    },
  ]),
  ...turet(3, "ayrik-sistemler", "sistem-ozellik", [
    {
      id: "t3-statik", zorluk: 1, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisi hafızasızdır (statik)?",
      secenekler: ["y(n) = 5x²(n)", "y(n) = x(n − 1)", "y(n) = x(n) + x(n + 1)", "y(n) = Σ x(k), k ≤ n"],
      dogru: 0,
      aciklama: "5x²(n) yalnızca o anki örneğe bağlıdır. Diğerleri başka anlardaki örnekleri kullanır.",
    },
    {
      id: "t3-zaman-degismez", zorluk: 2, tip: "tf", yedek: true,
      soru: "y(n) = x(2n) sistemi zamanla değişmezdir.",
      dogru: false,
      aciklama: "Yanlış. x(n − n₀) girişi x(2n − n₀) verir, ama y(n − n₀) = x(2n − 2n₀)'dır; ikisi farklıdır.",
    },
    {
      id: "t3-kararli", zorluk: 2, tip: "tf", yedek: true,
      soru: "y(n) = x(n) + 0,5x(n − 1) sistemi BIBO kararlıdır.",
      dogru: true,
      aciklama: "Doğru. |x| ≤ A ise |y| ≤ A + 0,5A = 1,5A: çıkış sınırlıdır.",
    },
  ]),
  ...turet(3, "ayrik-sistemler", "lti", [
    {
      id: "t3-lti-durtu-2", zorluk: 2, tip: "num", yedek: true,
      soru: "y(n) = 3x(n) + x(n − 2) sisteminin dürtü yanıtını n = 0'dan n = 2'ye kadar yaz.",
      bosluklar: [["[3 0 1]"]],
      aciklama: "h(n) = 3δ(n) + δ(n − 2): n = 0'da 3, n = 1'de 0, n = 2'de 1.",
    },
  ]),
];
