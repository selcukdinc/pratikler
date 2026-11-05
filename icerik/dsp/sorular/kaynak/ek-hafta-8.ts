// 8. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta8: Soru[] = [
  ...turet(8, "fft-temel", "fft-islem-yuku", [
    {
      id: "t8-dft-carpma-2", zorluk: 1, tip: "num", yedek: true,
      soru: "512 noktalı DFT doğrudan hesaplanırsa kaç karmaşık çarpma gerekir?",
      bosluklar: [["262144"]],
      aciklama: "512² = 262144.",
    },
    {
      id: "t8-fft-carpma-2", zorluk: 2, tip: "num", yedek: true,
      soru: "512 noktalı radix-2 FFT kaç karmaşık çarpma gerektirir?",
      bosluklar: [["2304"]],
      aciklama: "(512/2)·9 = 2304.",
    },
    {
      id: "t8-sure-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Bir karmaşık çarpma 0,5 µs sürüyor. 4096 noktalı DFT doğrudan kaç saniyede, radix-2 FFT ile kaç milisaniyede hesaplanır? (2 ondalık)\n\ndoğrudan = ____ s , FFT = ____ ms",
      bosluklar: [["8.39±0.01"], ["12.29±0.01"]],
      aciklama: "4096²·0,5 µs ≈ 8,39 s. (4096/2)·12·0,5 µs = 12 288 µs ≈ 12,29 ms.",
    },
  ]),
  ...turet(8, "fft-temel", "zamanda-seyreltme", [
    {
      id: "t8-dit-ikinci-yari-2", zorluk: 2, tip: "num", yedek: true,
      soru: "8 noktalı DIT FFT'de G(0) = 4, H(0) = −3. X(0) ve X(4) kaçtır?\n\nX(0) = ____ , X(4) = ____",
      bosluklar: [["1"], ["7"]],
      aciklama: "X(0) = 4 + (−3) = 1, X(4) = 4 − (−3) = 7.",
    },
    {
      id: "t8-dit-g-dizi-2", zorluk: 1, tip: "num", yedek: true,
      soru: "n = 0..7 için x(n) = 2, 7, 1, 8, 2, 8, 1, 8. g(n) = x(2n) dizisini yaz.",
      bosluklar: [["[2 1 2 1]"]],
      aciklama: "x(0), x(2), x(4), x(6) = 2, 1, 2, 1.",
    },
  ]),
  ...turet(8, "fft-temel", "kelebek", [
    {
      id: "t8-kelebek-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Kelebekte A = a + W·b, B = a − W·b. a = 4, b = 3, W = $W_8^4$ ise A ve B kaçtır?\n\nA = ____ , B = ____",
      bosluklar: [["1"], ["7"]],
      aciklama: "W₈⁴ = −1. A = 4 − 3 = 1, B = 4 + 3 = 7.",
    },
    {
      id: "t8-iki-nokta-2", zorluk: 1, tip: "num", yedek: true,
      soru: "q(0) = −2, q(1) = 5 dizisinin 2 noktalı DFT'si nedir?\n\nQ(0) = ____ , Q(1) = ____",
      bosluklar: [["3"], ["-7"]],
      aciklama: "Q(0) = −2 + 5 = 3, Q(1) = −2 − 5 = −7.",
    },
  ]),
  ...turet(8, "fft-akis", "fft-asama", [
    {
      id: "t8-asama-sayisi-2", zorluk: 1, tip: "num", yedek: true,
      soru: "256 noktalı radix-2 FFT'de kaç aşama ve aşama başına kaç kelebek vardır?\n\naşama = ____ , kelebek = ____",
      bosluklar: [["8"], ["128"]],
      aciklama: "log₂256 = 8, N/2 = 128.",
    },
  ]),
  ...turet(8, "fft-akis", "bit-ters", [
    {
      id: "t8-bit-ters-2", zorluk: 2, tip: "num", yedek: true,
      soru: "8 noktalı FFT'de n = 5 ve n = 6 indislerinin bit ters karşılıkları nedir?\n\n5 → ____ , 6 → ____",
      bosluklar: [["5"], ["3"]],
      aciklama: "5 = 101 → 101 = 5 (simetrik). 6 = 110 → 011 = 3.",
    },
  ]),
  ...turet(8, "fft-akis", "frekansta-seyreltme", [
    {
      id: "t8-dif-cift-2", zorluk: 2, tip: "num", yedek: true,
      soru: "n = 0..7 için x(n) = 1, 4, 2, 0, 3, 1, 2, 5. a(n) = x(n) + x(n + 4) dizisini yaz.",
      bosluklar: [["[4 5 4 5]"]],
      aciklama: "1 + 3 = 4, 4 + 1 = 5, 2 + 2 = 4, 0 + 5 = 5.",
    },
  ]),
  ...turet(8, "fft-uygulama", "karma-n", [
    {
      id: "t8-karma-indis-2", zorluk: 2, tip: "num", yedek: true,
      soru: "N = 12, N₁ = 3, N₂ = 4. $n = N_2 n_1 + n_2$ dizilişinde x(7) hangi n₁ ve n₂'ye düşer?\n\nn₁ = ____ , n₂ = ____",
      bosluklar: [["1"], ["3"]],
      aciklama: "7 = 4·1 + 3.",
    },
  ]),
  ...turet(8, "fft-uygulama", "fft-kullanim", [
    {
      id: "t8-fft-konv-2", zorluk: 2, tip: "num", yedek: true,
      soru: "100 ve 60 örneklik iki dizinin doğrusal konvolüsyonu için en küçük radix-2 FFT uzunluğu kaçtır?",
      bosluklar: [["256"]],
      aciklama: "100 + 60 − 1 = 159 → 256.",
    },
    {
      id: "t8-frekans-ekseni-2", zorluk: 2, tip: "num", yedek: true,
      soru: "fs = 2000 Hz, N = 500 noktalı FFT'de tepe k = 30'da. Frekans kaç Hz'dir?",
      bosluklar: [["120"]],
      aciklama: "30·2000/500 = 120 Hz.",
    },
  ]),
];
