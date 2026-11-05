// 6. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta6: Soru[] = [
  ...turet(6, "frekans-yaniti", "frekans-yaniti", [
    {
      id: "t6-kosinus-cikis-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$h(n) = \\tfrac{1}{2}[\\delta(n) + \\delta(n-1)]$ sistemine $\\cos(n\\pi/2)$ veriliyor. Çıkış kosinüsünün genliği kaçtır? (3 ondalık)",
      bosluklar: [["0.707±0.005"]],
      aciklama: "|H| = |cos(ω/2)|; ω = π/2'de cos(π/4) ≈ 0,707.",
    },
  ]),
  ...turet(6, "frekans-yaniti", "db-olcek", [
    {
      id: "t6-db-20-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Bir filtrenin büyüklüğü bir frekansta 40 dB'dir. |H| kaçtır?",
      bosluklar: [["100"]],
      aciklama: "40/20 = 2, |H| = 10² = 100.",
    },
    {
      id: "t6-db-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "|H| = 1000 olan bir frekansta büyüklük kaç dB'dir?",
      bosluklar: [["60"]],
      aciklama: "20 log₁₀(1000) = 60 dB.",
    },
  ]),
  ...turet(6, "frekans-yaniti", "grup-gecikmesi", [
    {
      id: "t6-grup-hesap-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Fazı φ(ω) = −5ω olan bir sistemin grup gecikmesi kaç örnektir?",
      bosluklar: [["5"]],
      aciklama: "τ = −dφ/dω = 5.",
    },
  ]),
  ...turet(6, "frekans-yaniti", "frekans-simetri", [
    {
      id: "t6-ustel-buyukluk-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$h(n) = (0{,}9)^n u(n)$ sisteminin frekans yanıtının büyüklüğü ω = 0'da kaçtır?",
      bosluklar: [["10"]],
      aciklama: "1/(1 − 0,9) = 10.",
    },
  ]),
  ...turet(6, "filtreler", "dogrusal-faz", [
    {
      id: "t6-dl-gecikme-2", zorluk: 2, tip: "num", yedek: true,
      soru: "7 örnek uzunluğunda, n = 0..6'da tanımlı, simetrik bir dürtü yanıtının grup gecikmesi kaç örnektir?",
      bosluklar: [["3"]],
      aciklama: "Simetri merkezi (N − 1)/2 = 3.",
    },
  ]),
  ...turet(6, "filtreler", "sistem-baglanti-frekans", [
    {
      id: "t6-kaskat-db-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Bir frekansta birinci filtrenin büyüklüğü 3 dB, ikincininki −10 dB. Kaskat bağlantının büyüklüğü kaç dB'dir?",
      bosluklar: [["-7"]],
      aciklama: "3 + (−10) = −7 dB.",
    },
  ]),
  ...turet(6, "dtft", "dtft", [
    {
      id: "t6-dtft-ustel-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = (0{,}25)^n u(n)$ dizisinin DTFT'sinin ω = 0'daki değeri kaçtır?",
      bosluklar: [["4/3"]],
      aciklama: "1/(1 − 0,25) = 4/3.",
    },
    {
      id: "t6-dtft-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$x(n) = 2\\delta(n) + \\delta(n-1)$ dizisinin DTFT'si ω = 0'da ve ω = π'de kaçtır?\n\nX(e^j0) = ____ , X(e^jπ) = ____",
      bosluklar: [["3"], ["1"]],
      aciklama: "X = 2 + e^{−jω}: ω = 0'da 3, ω = π'de 1.",
    },
    {
      id: "t6-dikdortgen-2", zorluk: 2, tip: "num", yedek: true,
      soru: "n = 0..3 için 1 olan 4 örneklik dikdörtgen dizinin DTFT'sinin ω = 0'daki değeri ve ilk sıfırı (rad) nedir?\n\nX(e^j0) = ____ , ilk sıfır ω = ____",
      bosluklar: [["4"], ["1.571±0.005", "pi/2"]],
      aciklama: "X(e^j0) = 4; ilk sıfır 2π/4 = π/2 ≈ 1,571.",
    },
  ]),
  ...turet(6, "dtft", "parseval", [
    {
      id: "t6-parseval-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(n): n = 0, 1 için 3, −1. $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |X(e^{j\\omega})|^2\\,d\\omega$ kaçtır?",
      bosluklar: [["10"]],
      aciklama: "Parseval: 9 + 1 = 10.",
    },
  ]),
  ...turet(6, "dtft", "ters-sistem", [
    {
      id: "t6-ters-hesap-2", zorluk: 3, tip: "num", yedek: true,
      soru: "$h(n) = \\delta(n) - 0{,}2\\,\\delta(n-1)$ sisteminin ters sistemi g(n) için g(1) kaçtır?",
      bosluklar: [["0.2"]],
      aciklama: "g(n) = (0,2)ⁿu(n); g(1) = 0,2.",
    },
  ]),
];
