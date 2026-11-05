// 7. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta7: Soru[] = [
  ...turet(7, "dft-temel", "dfs", [
    {
      id: "t7-dfs-kosinus-2", zorluk: 3, tip: "num", yedek: true,
      soru: "$x(n) = A\\cos(0{,}4\\pi n) + B\\cos(0{,}25\\pi n)$ dizisinin periyodu N kaçtır? $\\tilde X(k) = \\sum_{n=0}^{N-1} \\tilde x(n)\\,e^{-j2\\pi kn/N}$ için $\\tilde X(8)$, A'nın kaç katıdır?\n\nN = ____ , X̃(8) = ____ · A",
      bosluklar: [["40"], ["20"]],
      aciklama: "Periyotlar 5 ve 8, ortak periyot 40. 0,4π = 2π·8/40 olduğundan A'lı terim k = 8'e düşer: X̃(8) = N·A/2 = 20A.",
    },
  ]),
  ...turet(7, "dft-temel", "dft-hesap", [
    {
      id: "t7-dft-delta-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = \\delta(n) - 2\\delta(n-3)$ dizisinin 6 noktalı DFT'sinde X(0) ve X(1) kaçtır?\n\nX(0) = ____ , X(1) = ____",
      bosluklar: [["-1"], ["3"]],
      aciklama: "X(k) = 1 − 2e^{−j2π·3k/6} = 1 − 2(−1)^k. X(0) = −1, X(1) = 3.",
    },
    {
      id: "t7-dft-4nokta-2", zorluk: 2, tip: "num", yedek: true,
      soru: "n = 0..3 için x(n) = 3, 0, 1, 2 dizisinin 4 noktalı DFT'sinde X(0) ve X(2) kaçtır?\n\nX(0) = ____ , X(2) = ____",
      bosluklar: [["6"], ["2"]],
      aciklama: "X(0) = 6. X(2) = 3 − 0 + 1 − 2 = 2.",
    },
  ]),
  ...turet(7, "dft-temel", "ters-dft", [
    {
      id: "t7-ters-dft-2", zorluk: 3, tip: "num", yedek: true,
      soru: "5 noktalı X(k), k = 0 için 7, k = 1..4 için 2'dir. Ters DFT'nin x(0) ve x(1) değerleri nedir?\n\nx(0) = ____ , x(1) = ____",
      bosluklar: [["3"], ["1"]],
      aciklama: "X(k) = 2 + 5δ(k). Ters DFT: 2δ(n) + 5/5 = 2δ(n) + 1. x(0) = 3, x(1) = 1.",
    },
  ]),
  ...turet(7, "dft-temel", "dft-frekans", [
    {
      id: "t7-k-frekans-2", zorluk: 2, tip: "num", yedek: true,
      soru: "fs = 10000 Hz, N = 500 noktalı DFT'de k = 40 kaç Hz'e karşılık gelir?",
      bosluklar: [["800"]],
      aciklama: "f_k = 40·10000/500 = 800 Hz.",
    },
    {
      id: "t7-cozunurluk-2", zorluk: 1, tip: "num", yedek: true,
      soru: "fs = 48000 Hz, N = 1024 noktalı DFT'de frekans aralığı kaç Hz'dir? (3 ondalık)",
      bosluklar: [["46.875±0.01"]],
      aciklama: "Δf = 48000/1024 = 46,875 Hz.",
    },
  ]),
  ...turet(7, "dft-temel", "sifir-doldurma", [
    {
      id: "t7-sifir-ornek-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = \\delta(n) - \\delta(n-1)$ dizisinin 4 noktalı DFT'sinde |X(1)| ve X(2) kaçtır? (3 ondalık)\n\n|X(1)| = ____ , X(2) = ____",
      bosluklar: [["1.414±0.005", "sqrt(2)"], ["2"]],
      aciklama: "X(k) = 1 − (−j)^k. X(1) = 1 + j, |X(1)| = √2. X(2) = 1 − (−1) = 2.",
    },
  ]),
  ...turet(7, "dft-ozellikleri", "dft-simetri", [
    {
      id: "t7-esl-simetri-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Gerçel bir dizinin 10 noktalı DFT'sinde X(3) = −1 + 4j. X(7)'nin gerçel ve sanal kısımları nedir?\n\nRe X(7) = ____ , Im X(7) = ____",
      bosluklar: [["-1"], ["-4"]],
      aciklama: "X(7) = X(10 − 3) = X*(3) = −1 − 4j.",
    },
  ]),
  ...turet(7, "dft-ozellikleri", "dairesel-kaydirma", [
    {
      id: "t7-modulo-2", zorluk: 1, tip: "num", yedek: true,
      soru: "$((-5))_6$ ve $((14))_6$ kaçtır?\n\n((−5))₆ = ____ , ((14))₆ = ____",
      bosluklar: [["1"], ["2"]],
      aciklama: "−5 = −1·6 + 1 → 1. 14 = 2·6 + 2 → 2.",
    },
    {
      id: "t7-dairesel-kaydir-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(n) = [3 0 4 1] (n = 0..3). $y(n) = x((n-3))_4$ dizisini yaz.",
      bosluklar: [["[0 4 1 3]"]],
      aciklama: "y(0) = x(1) = 0, y(1) = x(2) = 4, y(2) = x(3) = 1, y(3) = x(0) = 3.",
    },
  ]),
  ...turet(7, "dairesel-konvolusyon", "dairesel-dogrusal", [
    {
      id: "t7-uzunluk-n-2", zorluk: 1, tip: "num", yedek: true,
      soru: "x(n) 20, h(n) 7 örnekliktir. Dairesel konvolüsyonun doğrusala eşit olması için en küçük N kaçtır?",
      bosluklar: [["26"]],
      aciklama: "20 + 7 − 1 = 26.",
    },
    {
      id: "t7-ortusme-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Doğrusal konvolüsyon n = 0..6 için y(n) = [1 3 0 2 2 1 4]. Aynı dizilerin 4 noktalı dairesel konvolüsyonunu yaz.",
      bosluklar: [["[3 4 4 2]"]],
      aciklama: "y_c(n) = y(n) + y(n + 4): 1 + 2 = 3, 3 + 1 = 4, 0 + 4 = 4, 2.",
    },
  ]),
  ...turet(7, "dairesel-konvolusyon", "ortusme-ekleme", [
    {
      id: "t7-oa-uzunluk-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Örtüşme-eklemede L = 8, M = 25. Çıkış blok uzunluğu N ve örtüşen örnek sayısı kaçtır?\n\nN = ____ , örtüşen = ____",
      bosluklar: [["32"], ["7"]],
      aciklama: "N = 8 + 25 − 1 = 32, örtüşme L − 1 = 7.",
    },
  ]),
  ...turet(7, "dairesel-konvolusyon", "ortusme-kaydetme", [
    {
      id: "t7-os-atilan-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Örtüşme-kaydetmede L = 6, N = 32. Her bloktan kaç örnek atılır, kaç örnek kaydedilir?\n\natılan = ____ , kaydedilen = ____",
      bosluklar: [["5"], ["27"]],
      aciklama: "Atılan L − 1 = 5, kaydedilen N − L + 1 = 27.",
    },
  ]),
];
