// 5. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta5: Soru[] = [
  ...turet(5, "sinusler", "sinus-cember", [
    {
      id: "t5-cember-koordinat-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Birim çember üzerinde θ = 240° açısındaki noktanın koordinatları nedir?\n\nyatay = ____ , dikey = ____",
      bosluklar: [["-0.5"], ["-0.866±0.005"]],
      aciklama: "240° üçüncü çeyrektedir: cos 240° = −0,5, sin 240° ≈ −0,866.",
    },
  ]),
  ...turet(5, "sinusler", "sinus-parametre", [
    {
      id: "t5-frekans-oku-2", zorluk: 1, tip: "num", yedek: true,
      soru: "$x(t) = 5\\cos(20\\pi t)$ sinyalinin frekansı kaç Hz'dir?",
      bosluklar: [["10"]],
      aciklama: "2πf = 20π, f = 10 Hz.",
    },
    {
      id: "t5-periyot-2", zorluk: 1, tip: "num", yedek: true,
      soru: "200 Hz'lik bir sinüsün periyodu kaç milisaniyedir?",
      bosluklar: [["5"]],
      aciklama: "1/200 s = 5 ms.",
    },
    {
      id: "t5-faz-kayma-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$\\sin(2\\pi\\cdot 4t + \\pi)$ eğrisi $\\sin(2\\pi\\cdot 4t)$'ye göre kaç saniye sola kaymıştır?",
      bosluklar: [["0.125"]],
      aciklama: "π/(2π·4) = 1/8 = 0,125 s (yarım periyot).",
    },
    {
      id: "t5-omega-2", zorluk: 1, tip: "num", yedek: true,
      soru: "2 Hz'lik bir sinüsün açısal frekansı kaç rad/s'dir?",
      bosluklar: [["12.57±0.05", "4*pi"]],
      aciklama: "ω = 2π·2 = 4π ≈ 12,57 rad/s.",
    },
  ]),
  ...turet(5, "sinusler", "sinus-toplam", [
    {
      id: "t5-toplam-genlik-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$5\\sin(2\\pi t) + 12\\cos(2\\pi t)$ toplamı tek bir sinüs olarak yazılırsa genliği kaçtır?",
      bosluklar: [["13"]],
      aciklama: "√(25 + 144) = 13.",
    },
    {
      id: "t5-toplam-periyot-2", zorluk: 2, tip: "num", yedek: true,
      soru: "4 Hz ve 6 Hz'lik iki sinüsün toplamının periyodu kaç saniyedir?",
      bosluklar: [["0.5"]],
      aciklama: "Temel frekans 2 Hz (4 ve 6'nın ikisi de 2'nin katı): periyot 1/2 = 0,5 s.",
    },
  ]),
  ...turet(5, "fourier-serisi", "fourier-serisi", [
    {
      id: "t5-kare-harmonik-2", zorluk: 2, tip: "num", yedek: true,
      soru: "Genliği 1 olan kare dalganın 7. harmoniğinin genliği kaçtır? (3 ondalık)",
      bosluklar: [["0.182±0.003", "4/(7*pi)"]],
      aciklama: "4/(7π) ≈ 0,182.",
    },
    {
      id: "t5-harmonik-frekans-2", zorluk: 1, tip: "num", yedek: true,
      soru: "Temel frekansı 100 Hz olan bir kare dalganın 5. harmoniği kaç Hz'dedir?",
      bosluklar: [["500"]],
      aciklama: "5 · 100 = 500 Hz.",
    },
  ]),
  ...turet(5, "fourier-serisi", "spektrum", [
    {
      id: "t5-darbe-sifir-2", zorluk: 2, tip: "num", yedek: true,
      soru: "0,2 s süreli dikdörtgen darbenin spektrumunun ilk sıfırı kaç Hz'dedir?",
      bosluklar: [["5"]],
      aciklama: "1/0,2 = 5 Hz.",
    },
  ]),
  ...turet(5, "fourier-donusumu", "sarma-kutle-merkezi", [
    {
      id: "t5-sarma-tepe-2", zorluk: 1, tip: "num", yedek: true,
      soru: "$g(t) = 1 + \\cos(2\\pi\\cdot 2{,}5t)$ çemberin etrafına sarılıyor. f > 0 için kütle merkezinin yatay konumu hangi sarma frekansında tepe yapar?",
      bosluklar: [["2.5"]],
      aciklama: "Sinyalin frekansında: 2,5 devir/s.",
    },
  ]),
  ...turet(5, "fourier-donusumu", "fourier-donusum", [
    {
      id: "t5-donusum-tepe-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$g(t) = \\cos(2\\pi\\cdot 2t)$ sinyali 0 ≤ t ≤ 10 s aralığında gözleniyor. $|\\hat g(2)|$ yaklaşık kaçtır?",
      bosluklar: [["5"]],
      aciklama: "T/2 = 10/2 = 5.",
    },
  ]),
];
