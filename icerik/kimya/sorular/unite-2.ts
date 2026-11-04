// 2. ünite: ölçme, birimler ve kimya kanunları (türetilmiş sorular)
import type { Soru } from "../../tipler.ts";
import { turet } from "./yardimci.ts";

export const unite2: Soru[] = [
  ...turet(2, "km-olcme-birim", "u2-birim-donusum", [
    {
      id: "km-u2-birim-ml", zorluk: 1, tip: "num",
      soru: "0,35 L kaç mL'dir?",
      bosluklar: [["350"]],
      aciklama: "1 L = 1000 mL olduğundan 0,35 L × 1000 mL/L = 350 mL.",
    },
    {
      id: "km-u2-birim-mg", zorluk: 2, tip: "num",
      soru: "0,0045 kg kaç mg'dır?",
      bosluklar: [["4500"]],
      aciklama: "0,0045 kg × 1000 g/kg = 4,5 g; 4,5 g × 1000 mg/g = 4500 mg.",
    },
    {
      id: "km-u2-si-sicaklik", zorluk: 1, tip: "mcq",
      soru: "SI birim sisteminde sıcaklığın temel birimi hangisidir?",
      secenekler: ["Kelvin", "Celsius derecesi", "Fahrenheit derecesi", "Kalori"],
      dogru: 0,
      aciklama: "SI'ın yedi temel biriminden biri kelvindir (K). Celsius günlük kullanımda yaygındır ama temel birim değildir; kalori bir enerji birimidir.",
    },
    {
      id: "km-u2-cm3-tf", zorluk: 1, tip: "tf", yedek: true,
      soru: "1 mL hacim 1 cm³ hacme eşittir.",
      dogru: true,
      aciklama: "Doğru. 1 L = 1 dm³ = 1000 cm³ ve 1 L = 1000 mL olduğundan 1 mL = 1 cm³'tür.",
    },
  ]),

  ...turet(2, "km-olcme-birim", "u2-anlamli-rakam", [
    {
      id: "km-u2-anlamli-say", zorluk: 2, tip: "num",
      soru: "0,003040 sayısında kaç anlamlı rakam vardır?",
      bosluklar: [["4"]],
      aciklama: "Baştaki sıfırlar (0,00) anlamlı değildir. 3 ve 4 anlamlıdır; aradaki 0 iki anlamlı rakam arasında olduğu için anlamlıdır; virgülden sonraki sondaki 0 da anlamlıdır. Toplam 4: 3, 0, 4, 0.",
    },
    {
      id: "km-u2-anlamli-carpma", zorluk: 2, tip: "mcq",
      soru: "3,0 cm × 2,567 cm çarpımı anlamlı rakam kurallarına göre nasıl yazılır?",
      secenekler: ["7,7 cm²", "7,701 cm²", "7,70 cm²", "8 cm²"],
      dogru: 0,
      aciklama: "Çarpmada sonuç en az anlamlı rakamı olan değer kadar anlamlı rakam taşır. 3,0 iki anlamlı rakamlıdır; 7,701 iki anlamlı rakama yuvarlanınca 7,7 cm² olur.",
    },
  ]),

  ...turet(2, "km-olcme-birim", "u2-sicaklik-olcegi", [
    {
      id: "km-u2-sicaklik-k", zorluk: 1, tip: "num",
      soru: "37 °C kaç kelvindir?",
      bosluklar: [["310.15±0.2"]],
      aciklama: "T(K) = t(°C) + 273,15 = 37 + 273,15 = 310,15 K.",
    },
    {
      id: "km-u2-sicaklik-f", zorluk: 2, tip: "num",
      soru: "Bir fırının sıcaklığı 220 °C'tır. Bu sıcaklık kaç °F'tır?",
      bosluklar: [["428"]],
      aciklama: "t(°F) = 1,8 · t(°C) + 32 = 1,8 × 220 + 32 = 396 + 32 = 428 °F.",
    },
    {
      id: "km-u2-sicaklik-f-c", zorluk: 2, tip: "num",
      soru: "Normal vücut sıcaklığı 98,6 °F'tır. Bu sıcaklık kaç °C'tır?",
      bosluklar: [["37"]],
      aciklama: "t(°C) = (98,6 − 32) / 1,8 = 66,6 / 1,8 = 37 °C.",
    },
    {
      id: "km-u2-sicaklik-esit", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Celsius ve Fahrenheit ölçeklerinin aynı sayıyı gösterdiği sıcaklık hangisidir?",
      secenekler: ["−40", "0", "32", "−273"],
      dogru: 0,
      aciklama: "t = 1,8t + 32 denklemi çözülünce −0,8t = 32, yani t = −40 bulunur: −40 °C = −40 °F.",
    },
    {
      id: "km-u2-mutlak-sifir-fill", zorluk: 1, tip: "fill",
      soru: "Kelvin ölçeğinin sıfır noktası olan −273,15 °C sıcaklığına ____ denir.",
      bosluklar: [["mutlak sıfır", "mutlak sifir"]],
      aciklama: "Mutlak sıfır, kuramsal olarak ulaşılabilecek en düşük sıcaklıktır; kelvin değerleri bu yüzden hiçbir zaman negatif olmaz.",
    },
  ]),

  ...turet(2, "km-olcme-birim", "u2-yogunluk", [
    {
      id: "km-u2-yogunluk-hesap", zorluk: 1, tip: "num",
      soru: "Kütlesi 54 g, hacmi 20 cm³ olan bir metal parçasının yoğunluğu kaç g/cm³'tür?",
      bosluklar: [["2.7"]],
      aciklama: "d = m / V = 54 g / 20 cm³ = 2,7 g/cm³. Bu değer alüminyumun yoğunluğudur.",
    },
    {
      id: "km-u2-yogunluk-kutle", zorluk: 2, tip: "num",
      soru: "Yoğunluğu 13,6 g/mL olan cıvadan 5,0 mL alınıyor. Alınan cıvanın kütlesi kaç gramdır?",
      bosluklar: [["68"]],
      aciklama: "m = d · V = 13,6 g/mL × 5,0 mL = 68 g.",
    },
    {
      id: "km-u2-yogunluk-ust", zorluk: 1, tip: "mcq",
      soru: "Birbirinde çözünmeyen su (1,00 g/mL) ve bir yağ (0,92 g/mL) aynı kaba konuyor. Ne gözlenir?",
      secenekler: ["Yağ üstte, su altta toplanır", "Su üstte, yağ altta toplanır", "İkisi homojen bir karışım oluşturur", "Yağ kabın ortasında asılı kalır"],
      dogru: 0,
      aciklama: "Birbirinde çözünmeyen sıvılardan yoğunluğu az olan üstte kalır. Yağın yoğunluğu sudan küçük olduğu için yağ üstte toplanır.",
    },
  ]),

  ...turet(2, "km-kimya-kanunlari", "u2-kimya-kanunlari", [
    {
      id: "km-u2-kanun-proust", zorluk: 1, tip: "mcq",
      soru: "\"Bir bileşiği oluşturan elementlerin kütleleri arasında her zaman sabit bir oran vardır.\" Bu ifade hangi kanundur?",
      secenekler: ["Sabit oranlar kanunu", "Kütlenin korunumu kanunu", "Katlı oranlar kanunu", "Avogadro kanunu"],
      dogru: 0,
      aciklama: "Proust'un sabit oranlar kanunudur: saf suda hidrojenin oksijene kütle oranı, su nereden alınırsa alınsın yaklaşık 1 : 8'dir.",
    },
    {
      id: "km-u2-kanun-korunum", zorluk: 1, tip: "num",
      soru: "Kapalı bir kapta 12 g karbon ile 32 g oksijen artansız tepkimeye girerek karbon dioksit oluşturuyor. Kaç gram karbon dioksit oluşur?",
      bosluklar: [["44"]],
      aciklama: "Kütlenin korunumu kanununa göre ürünlerin kütlesi tepkimeye girenlerin kütlesine eşittir: 12 + 32 = 44 g.",
    },
    {
      id: "km-u2-kanun-katli", zorluk: 2, tip: "num",
      soru: "Karbon, oksijenle CO ve CO₂ bileşiklerini oluşturur. Aynı kütlede karbonla birleşen oksijen kütlelerinin oranı (CO'daki / CO₂'deki) kaçtır?",
      bosluklar: [["0.5"]],
      aciklama: "12 g karbon CO'da 16 g, CO₂'de 32 g oksijenle birleşir. Oran 16 / 32 = 1/2 = 0,5; katlı oranlar kanununa uygun küçük tam sayılı bir orandır.",
    },
    {
      id: "km-u2-kanun-su", zorluk: 2, tip: "num", yedek: true,
      soru: "Suda hidrojenin oksijene kütle oranı 1 : 8'dir. 4 g hidrojen yeterli oksijenle tamamen tepkimeye girerse kaç gram su oluşur?",
      bosluklar: [["36"]],
      aciklama: "4 g hidrojen 4 × 8 = 32 g oksijenle birleşir. Kütlenin korunumuna göre 4 + 32 = 36 g su oluşur.",
    },
    {
      id: "km-u2-katli-tf", zorluk: 2, tip: "tf",
      soru: "Katlı oranlar kanunu, H₂O ve CO₂ gibi farklı elementlerden oluşan iki bileşiği karşılaştırır.",
      dogru: false,
      aciklama: "Yanlış. Katlı oranlar kanunu aynı iki elementin oluşturduğu farklı bileşikleri (NO ve NO₂ ya da SO₂ ve SO₃ gibi) karşılaştırır ve elementlerden birinin kütlesini sabit tutar.",
    },
  ]),
];
