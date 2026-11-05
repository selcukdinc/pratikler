// 1. hafta için türetilmiş ek sorular. yedek: true olanlar yalnızca aralıklı tekrarda gelir.
import { turet, type Soru } from "./tipler.ts";

export const ekHafta1: Soru[] = [
  ...turet(1, "dsp-giris", "adc-niceleme", [
    {
      id: "t1-adc-16bit", zorluk: 1, tip: "num", yedek: true,
      soru: "16 bitlik bir ses ADC'si kaç farklı seviye verir?",
      bosluklar: [["65536"]],
      aciklama: "$2^{16} = 65536$ seviye.",
    },
    {
      id: "t1-adc-fs", zorluk: 1, tip: "num", yedek: true,
      soru: "Örnekleri 50 µs arayla alan bir ADC'nin örnekleme hızı kaç Hz'dir?",
      bosluklar: [["20000"]],
      aciklama: "$f_s = 1/T_s = 1 / (50 \\cdot 10^{-6})$ = 20 000 Hz.",
    },
    {
      id: "t1-adc-bir-bit", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Bir ADC'ye bir bit daha eklenirse (ölçme aralığı aynı kalırsa) niceleme adımı ne olur?",
      secenekler: ["Yarıya iner", "Bir azalır", "İki katına çıkar", "Değişmez"],
      dogru: 0,
      aciklama: "Seviye sayısı $2^B$'den $2^{B+1}$'e, yani iki katına çıkar; aynı aralık iki kat seviyeye bölündüğü için adım yarıya iner.",
    },
    {
      id: "t1-adc-adim-12", zorluk: 2, tip: "num", yedek: true,
      soru: "0–4,096 V aralığında çalışan 12 bitlik bir ADC'nin niceleme adımı kaç mV'tur?",
      bosluklar: [["1"]],
      aciklama: "$2^{12} = 4096$ seviye; 4,096 V / 4096 = 1 mV.",
    },
  ]),
  ...turet(1, "dsp-giris", "sinyal-eksen", [
    {
      id: "t1-alan-frekans", zorluk: 1, tip: "fill",
      soru: "Yatay ekseni frekans olan bir sinyalin ____ alanında olduğu söylenir.",
      bosluklar: [["frekans"]],
      aciklama: "Sinyalin alanı yatay eksendeki niceliktir; frekans eksenli sinyal frekans alanındadır.",
    },
    {
      id: "t1-bagimsiz", zorluk: 1, tip: "tf", yedek: true,
      soru: "Bir sinyal grafiğinde bağımsız değişken her örneğin ne zaman ve nasıl alındığını, bağımlı değişken ise ölçülen değeri gösterir.",
      dogru: true,
      aciklama: "Doğru. Bu yüzden iki eksenin yeri değiştirilemez: genlik, bağımsız değişkenin bir fonksiyonudur.",
    },
  ]),
  ...turet(1, "istatistik", "ortalama-sapma", [
    {
      id: "t1-ortalama-sapma-2", zorluk: 2, tip: "num", yedek: true,
      soru: "x = [10 12 14] için μ ve (N − 1'li) σ'yı bul.\n\nμ = ____ , σ = ____",
      bosluklar: [["12"], ["2"]],
      aciklama: "μ = 36/3 = 12. Sapmalar −2, 0, 2; kareler toplamı 8. σ² = 8/2 = 4, σ = 2.",
    },
    {
      id: "t1-dc-eklemek", zorluk: 1, tip: "mcq",
      soru: "Bir sinyalin her örneğine 5 eklenirse ortalaması ve standart sapması ne olur?",
      secenekler: [
        "Ortalama 5 artar, standart sapma değişmez",
        "İkisi de 5 artar",
        "Ortalama değişmez, standart sapma 5 artar",
        "İkisi de değişmez",
      ],
      dogru: 0,
      aciklama: "Sabit eklemek bütün sinyali kaydırır: ortalama 5 artar ama örneklerin ortalamadan sapmaları aynı kalır, σ değişmez.",
    },
    {
      id: "t1-olcek", zorluk: 2, tip: "num", yedek: true,
      soru: "Standart sapması 0,4 V olan bir sinyal kazancı 3 olan bir yükselteçten geçiyor. Çıkışın standart sapması kaç volttur?",
      bosluklar: [["1.2"]],
      aciklama: "Her örnek 3 ile çarpılınca sapmalar da 3 ile çarpılır: σ = 3 · 0,4 = 1,2 V. Varyans ise 9 katına çıkar.",
    },
    {
      id: "t1-varyans-uc", zorluk: 3, tip: "num", yedek: true,
      soru: "Birbirinden bağımsız üç gürültü kaynağının her birinin standart sapması 2 mV. Toplam gürültünün standart sapması kaç mV'tur?",
      bosluklar: [["3.464±0.01"]],
      aciklama: "Varyanslar toplanır: 4 + 4 + 4 = 12; σ = √12 ≈ 3,46 mV.",
    },
  ]),
  ...turet(1, "istatistik", "rms", [
    {
      id: "t1-vp-vrms", zorluk: 1, tip: "num",
      soru: "Prizdeki şebeke geriliminin rms değeri 220 V. Bu sinüsün tepe genliği yaklaşık kaç volttur?",
      bosluklar: [["311±1"]],
      aciklama: "$V_p = \\sqrt{2}\\,V_{rms} = 1{,}414 \\cdot 220 \\approx 311$ V.",
    },
    {
      id: "t1-ucgen-vpp", zorluk: 2, tip: "num", yedek: true,
      soru: "Ortalaması sıfır olan bir üçgen dalganın tepeden tepeye değeri 6 V. Standart sapması yaklaşık kaç volttur?",
      bosluklar: [["1.732±0.01"]],
      aciklama: "Üçgende $V_{pp} = \\sqrt{12}\\,\\sigma$, yani σ = 6 / 3,464 ≈ 1,73 V.",
    },
    {
      id: "t1-rms-dc-sinus", zorluk: 3, tip: "num", yedek: true,
      soru: "Tepe genliği 4 V olan bir sinüs 3 V'luk bir DC üzerine binmiş. Sinyalin rms değeri yaklaşık kaç volttur?",
      bosluklar: [["4.123±0.01"]],
      aciklama: "AC kısmın σ'sı 4/√2 ≈ 2,83 V, varyansı 8. rms² = 3² + 8 = 17, rms ≈ 4,12 V.",
    },
    {
      id: "t1-rms-hangi", zorluk: 1, tip: "mcq", yedek: true,
      soru: "Hangi ölçü bir sinyalin hem DC hem AC kısmını hesaba katar?",
      secenekler: ["Standart sapma", "Varyans", "rms değeri", "Tepeden tepeye değer"],
      dogru: 2,
      aciklama: "rms karelerin ortalamasının kareköküdür; DC de karesiyle katkı verir. Standart sapma, varyans ve Vpp yalnızca dalgalanmayı ölçer.",
    },
  ]),
  ...turet(1, "olasilik", "histogram-pmf", [
    {
      id: "t1-pmf-toplam", zorluk: 1, tip: "num", yedek: true,
      soru: "Bir sinyalin pmf değerlerinin toplamı kaçtır?",
      bosluklar: [["1"]],
      aciklama: "pmf, histogramın N'ye bölünmüş halidir: $\\sum H_i / N = N/N = 1$.",
    },
    {
      id: "t1-pmf-hist", zorluk: 2, tip: "num",
      soru: "2000 örneklik bir sinyalin histogramında $H_{37} = 50$. pmf'te 37 değerinin olasılığı nedir?",
      bosluklar: [["0.025"]],
      aciklama: "pmf = H / N = 50 / 2000 = 0,025.",
    },
    {
      id: "t1-pdf-buyuk", zorluk: 2, tip: "tf", yedek: true,
      soru: "Bir pdf'in değeri hiçbir noktada 1'den büyük olamaz.",
      dogru: false,
      aciklama: "Yanlış. pdf olasılık değil olasılık yoğunluğudur. Çok dar bir dağılımda (örneğin σ = 0,1 olan Gauss'ta tepe ≈ 3,99) 1'den büyük olur; yalnızca altındaki toplam alan 1'dir.",
    },
    {
      id: "t1-kutu-genislik", zorluk: 2, tip: "num", yedek: true,
      soru: "−1 ile 1 arasında değer alan kayan noktalı bir sinyal 400 kutulu bir histogramla sayılıyor. Kutu genişliği nedir?",
      bosluklar: [["0.005"]],
      aciklama: "Aralık 2, kutu sayısı 400: genişlik 2 / 400 = 0,005.",
    },
  ]),
  ...turet(1, "olasilik", "normal-dagilim", [
    {
      id: "t1-gauss-95", zorluk: 1, tip: "mcq",
      soru: "Normal dağılımda örneklerin yaklaşık %95'i hangi aralıktadır?",
      secenekler: ["μ ± 0,5σ", "μ ± 1σ", "μ ± 2σ", "μ ± 3σ"],
      dogru: 2,
      aciklama: "±1σ ≈ %68, ±2σ ≈ %95, ±3σ ≈ %99,7.",
    },
    {
      id: "t1-gauss-disari", zorluk: 3, tip: "num", yedek: true,
      soru: "μ = 0, σ = 1 V olan Gauss gürültünün örneklerinin yaklaşık yüzde kaçı 2 V'tan büyüktür?",
      bosluklar: [["2.5±0.3"]],
      aciklama: "±2σ dışında %5 kalır ve dağılım simetrik olduğu için bunun yarısı, yaklaşık %2,5'i, +2σ'nın üstündedir.",
    },
  ]),
  ...turet(1, "gurultu-dogruluk", "gurultu-uretimi", [
    {
      id: "t1-rnd-dort", zorluk: 2, tip: "num", yedek: true,
      soru: "Dört RND'nin (0–1 arası düzgün) toplamının ortalamasını ve standart sapmasını bul.\n\nμ = ____ , σ = ____",
      bosluklar: [["2"], ["0.577±0.005"]],
      aciklama: "Ortalamalar ve varyanslar toplanır: μ = 4 · 0,5 = 2, σ² = 4/12 = 1/3, σ ≈ 0,577.",
    },
    {
      id: "t1-rnd-ortalama", zorluk: 1, tip: "num", yedek: true,
      soru: "0 ile 1 arasında düzgün dağılımlı rastgele sayıların ortalaması kaçtır?",
      bosluklar: [["0.5"]],
      aciklama: "Düzgün dağılımın ortalaması aralığın ortasıdır: 0,5.",
    },
  ]),
  ...turet(1, "gurultu-dogruluk", "kesinlik-dogruluk", [
    {
      id: "t1-kesin-dogru-degil", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Bir termometre 25,0 °C'lik suyu on kez ölçüp her seferinde 26,9 ile 27,1 °C arasında bir değer gösteriyor. Termometre için ne söylenir?",
      secenekler: ["Kesin ama doğru değil", "Doğru ama kesin değil", "Hem kesin hem doğru", "Ne kesin ne doğru"],
      dogru: 0,
      aciklama: "Ölçümler birbirine çok yakın (kesinlik iyi) ama ortalama gerçek değerden 2 °C uzak (doğruluk kötü). Çare kalibrasyon.",
    },
    {
      id: "t1-ortalama-n", zorluk: 3, tip: "num", yedek: true,
      soru: "Tek bir ölçümün rastgele hatası (σ) 8 mm. 16 ölçümün ortalamasının rastgele hatası kaç mm olur?",
      bosluklar: [["2"]],
      aciklama: "N ölçümün ortalamasının rastgele hatası √N kat küçülür: 8 / √16 = 2 mm.",
    },
  ]),
];
