// 4. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta4: Soru[] = [
  ...turet(4, "konvolusyon-temel", "konvolusyon-toplam", [
    {
      id: "t4-durtu-kaydir-2", zorluk: 1, tip: "num", yedek: true,
      soru: "x(n) yalnızca n = −2'de 7 değerini alıyor. y(n) = x(n) * δ(n − 5) hangi n'de 7'dir?",
      bosluklar: [["3"]],
      aciklama: "y(n) = x(n − 5): değer n − 5 = −2, yani n = 3'te görünür.",
    },
    {
      id: "t4-ilk-ornek-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(0) = 1, x(1) = −2 ve h(0) = 4, h(1) = 3 (diğer örnekler 0). y(n) = x(n) * h(n) için y(1) ve y(2) nedir?\n\ny(1) = ____ , y(2) = ____",
      bosluklar: [["-5"], ["-6"]],
      aciklama: "y(1) = x(0)h(1) + x(1)h(0) = 3 − 8 = −5. y(2) = x(1)h(1) = −6.",
    },
  ]),
  ...turet(4, "konvolusyon-temel", "konvolusyon-ozellik", [
    {
      id: "t4-kaskat-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$h_1(n) = \\delta(n) + \\delta(n-2)$ ve $h_2(n) = 2\\delta(n)$ kaskat bağlı. Eşdeğer dürtü yanıtını n = 0'dan başlayarak dizi olarak yaz.",
      bosluklar: [["[2 0 2]"]],
      aciklama: "2δ(n) ile konvolüsyon diziyi 2 ile çarpar: 2δ(n) + 2δ(n − 2).",
    },
    {
      id: "t4-paralel-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$h_1(n) = \\delta(n) + \\delta(n-1)$ ve $h_2(n) = \\delta(n) - \\delta(n-1) + \\delta(n-2)$ paralel bağlı. Eşdeğer dürtü yanıtını n = 0'dan başlayarak dizi olarak yaz.",
      bosluklar: [["[2 0 1]"]],
      aciklama: "Toplam: (1 + 1)δ(n) + (1 − 1)δ(n − 1) + δ(n − 2).",
    },
    {
      id: "t4-dagilma", zorluk: 1, tip: "tf", yedek: true,
      soru: "x(n) * [h₁(n) + h₂(n)] = x(n) * h₁(n) + x(n) * h₂(n) eşitliği her zaman sağlanır.",
      dogru: true,
      aciklama: "Doğru. Bu dağılma özelliğidir; paralel bağlı iki sistemin dürtü yanıtları toplanır.",
    },
  ]),
  ...turet(4, "konvolusyon-temel", "dogrudan-hesap", [
    {
      id: "t4-geometrik-2", zorluk: 1, tip: "num", yedek: true,
      soru: "$\\displaystyle\\sum_{n=0}^{\\infty} (1/3)^n$ toplamı kaçtır?",
      bosluklar: [["1.5"]],
      aciklama: "1/(1 − 1/3) = 3/2 = 1,5.",
    },
    {
      id: "t4-ustel-basamak-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$y(n) = (0{,}2)^n u(n) * u(n)$ için y(1) kaçtır?",
      bosluklar: [["1.2"]],
      aciklama: "y(1) = 1 + 0,2 = 1,2.",
    },
    {
      id: "t4-ustel-limit-2", zorluk: 2, tip: "num", yedek: true,
      soru: "$y(n) = (0{,}9)^n u(n) * u(n)$ dizisi n → ∞ iken hangi değere yaklaşır?",
      bosluklar: [["10"]],
      aciklama: "1/(1 − 0,9) = 10.",
    },
  ]),
  ...turet(4, "konvolusyon-hesap", "konvolusyon-uzunluk", [
    {
      id: "t4-uzunluk-2", zorluk: 1, tip: "num", yedek: true,
      soru: "12 örnek uzunluğundaki bir dizi 6 örnek uzunluğundaki bir diziyle konvolüsyona sokuluyor. Çıkış kaç örnek uzunluğundadır?",
      bosluklar: [["17"]],
      aciklama: "12 + 6 − 1 = 17.",
    },
    {
      id: "t4-aralik-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(n) yalnızca 0 ≤ n ≤ 9, h(n) yalnızca −3 ≤ n ≤ 2 aralığında sıfırdan farklı. y(n) hangi aralıkta sıfırdan farklı olabilir?\n\n____ ≤ n ≤ ____",
      bosluklar: [["-3"], ["11"]],
      aciklama: "[0 + (−3), 9 + 2] = [−3, 11].",
    },
  ]),
  ...turet(4, "konvolusyon-hesap", "grafik-yontem", [
    {
      id: "t4-grafik-hesap-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(n): n = 0..2 için 2, 0, 1. h(n): n = 0, 1 için 1, 3. y(n) = x(n) * h(n) için:\n\ny(1) = ____ , y(3) = ____",
      bosluklar: [["6"], ["3"]],
      aciklama: "y(1) = x(0)h(1) + x(1)h(0) = 6 + 0 = 6. y(3) = x(2)h(1) = 3.",
    },
  ]),
  ...turet(4, "konvolusyon-hesap", "kaydirma-kurali", [
    {
      id: "t4-kaydirma-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(n) = {1, −1, 2} ve h(n) = {3, 1}, ikisi de n = 0'dan başlıyor. y(n) = x(n) * h(n) dizisini bul.",
      bosluklar: [["[3 -2 5 2]"]],
      aciklama: "y(0) = 3; y(1) = 1 − 3 = −2; y(2) = −1 + 6 = 5; y(3) = 2.",
    },
  ]),
  ...turet(4, "konvolusyon-hesap", "polinom-carpim", [
    {
      id: "t4-polinom-3", zorluk: 2, tip: "num", yedek: true,
      soru: "(2 − z)(1 + z + z²) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.",
      bosluklar: [["[2 1 1 -1]"]],
      aciklama: "Konvolüsyon: 2; 2 − 1 = 1; 2 − 1 = 1; −1. Yani 2 + z + z² − z³.",
    },
  ]),
  ...turet(4, "konvolusyon-uygulama", "olasilik-konvolusyon", [
    {
      id: "t4-zar-10", zorluk: 2, tip: "num", yedek: true,
      soru: "İki adil zarın toplamının 10 olma olasılığı kaçtır?",
      bosluklar: [["1/12"]],
      aciklama: "(4,6), (5,5), (6,4): 3/36 = 1/12.",
    },
    {
      id: "t4-zar-2", zorluk: 1, tip: "num", yedek: true,
      soru: "İki adil zarın toplamının 2 olma olasılığı kaçtır?",
      bosluklar: [["1/36"]],
      aciklama: "Yalnızca (1, 1): 1/36.",
    },
  ]),
  ...turet(4, "konvolusyon-uygulama", "hareketli-ortalama", [
    {
      id: "t4-ma-katsayi-2", zorluk: 1, tip: "num", yedek: true,
      soru: "5 noktalı hareketli ortalamanın dürtü yanıtının her katsayısı kaçtır?",
      bosluklar: [["0.2"]],
      aciklama: "1/M = 1/5 = 0,2.",
    },
    {
      id: "t4-ma-gecikme-2", zorluk: 2, tip: "num", yedek: true,
      soru: "5 noktalı nedensel hareketli ortalamanın gecikmesi kaç örnektir?",
      bosluklar: [["2"]],
      aciklama: "(M − 1)/2 = 2.",
    },
  ]),
  ...turet(4, "konvolusyon-uygulama", "korelasyon", [
    {
      id: "t4-otokor-0-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x(0) = 1, x(1) = −2, x(2) = 2 (başka yerde 0). $r_{xx}(0)$ kaçtır?",
      bosluklar: [["9"]],
      aciklama: "1 + 4 + 4 = 9: dizinin enerjisi.",
    },
    {
      id: "t4-otokor-ustel-2", zorluk: 3, tip: "num", yedek: true,
      soru: "$x(n) = (0{,}8)^n u(n)$ dizisinin otokorelasyonunun n = 0 değeri kaçtır?",
      bosluklar: [["2.778±0.01"]],
      aciklama: "1/(1 − 0,64) = 1/0,36 ≈ 2,778.",
    },
    {
      id: "t4-korelasyon-degisme", zorluk: 2, tip: "tf", yedek: true,
      soru: "Korelasyon değişme özelliğini sağlar: her x ve h için $r_{xh}(n) = r_{hx}(n)$.",
      dogru: false,
      aciklama: "Yanlış. Sıra değişince sonuç ters çevrilir: r_hx(n) = r_xh(−n).",
    },
  ]),
];
