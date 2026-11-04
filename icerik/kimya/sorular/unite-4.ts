// 4. ünite: kuantum sayıları ve elektron dizilimi (türetilmiş sorular)
import type { Soru } from "../../tipler.ts";
import { turet } from "./yardimci.ts";

export const unite4: Soru[] = [
  ...turet(4, "km-kuantum", "u4-foton-enerjisi", [
    {
      id: "km-u4-foton-enerji-karsilastir", zorluk: 1, tip: "mcq",
      soru: "Aşağıdaki ışınlardan hangisinin bir fotonunun enerjisi en büyüktür?",
      secenekler: ["Morötesi ışın (250 nm)", "Mor ışık (410 nm)", "Yeşil ışık (530 nm)", "Kırmızı ışık (690 nm)"],
      dogru: 0,
      aciklama: "E = hc/λ olduğundan dalga boyu en kısa olan ışının fotonu en enerjilidir: 250 nm'lik morötesi ışın.",
    },
    {
      id: "km-u4-foton-frekans", zorluk: 2, tip: "num",
      soru: "Dalga boyu 600 nm olan turuncu ışığın frekansı kaç Hz'dir? ($c = 3{,}00 \\times 10^{8}$ m/s)",
      bosluklar: [["5.00e14±0.03e14"]],
      aciklama: "ν = c/λ = 3,00 × 10⁸ m/s / 6,00 × 10⁻⁷ m = 5,00 × 10¹⁴ Hz.",
    },
    {
      id: "km-u4-foton-enerji", zorluk: 2, tip: "num",
      soru: "Dalga boyu 500 nm olan bir fotonun enerjisi kaç J'dür? ($h = 6{,}626 \\times 10^{-34}$ J·s, $c = 3{,}00 \\times 10^{8}$ m/s)",
      bosluklar: [["3.98e-19±0.03e-19"]],
      aciklama: "E = hc/λ = (6,626 × 10⁻³⁴ × 3,00 × 10⁸) / 5,00 × 10⁻⁷ ≈ 3,98 × 10⁻¹⁹ J.",
    },
    {
      id: "km-u4-planck-fill", zorluk: 1, tip: "fill", yedek: true,
      soru: "E = h·ν bağıntısındaki h sabitine ____ sabiti denir.",
      bosluklar: [["Planck"]],
      aciklama: "h = 6,626 × 10⁻³⁴ J·s, Planck sabitidir.",
    },
  ]),

  ...turet(4, "km-kuantum", "u4-de-broglie", [
    {
      id: "km-u4-debroglie-kutle", zorluk: 2, tip: "mcq",
      soru: "Aynı hızla hareket eden bir elektron ile bir protondan hangisinin De Broglie dalga boyu daha büyüktür?",
      secenekler: ["Elektronun, çünkü kütlesi daha küçüktür", "Protonun, çünkü kütlesi daha büyüktür", "İkisi eşittir, çünkü hızları aynıdır", "Protonun, çünkü yükü pozitiftir"],
      dogru: 0,
      aciklama: "λ = h/(mv) bağıntısında dalga boyu kütleyle ters orantılıdır. Hızlar eşitken kütlesi yaklaşık 1836 kat küçük olan elektronun dalga boyu daha büyüktür. Yük bağıntıda yer almaz.",
    },
    {
      id: "km-u4-debroglie-elektron", zorluk: 3, tip: "num",
      soru: "1,0 × 10⁶ m/s hızla hareket eden bir elektronun (m = 9,11 × 10⁻³¹ kg) De Broglie dalga boyu kaç nm'dir? ($h = 6{,}626 \\times 10^{-34}$ J·s)",
      bosluklar: [["0.727±0.005"]],
      aciklama: "λ = h/(mv) = 6,626 × 10⁻³⁴ / (9,11 × 10⁻³¹ × 1,0 × 10⁶) = 6,626 × 10⁻³⁴ / 9,11 × 10⁻²⁵ ≈ 7,27 × 10⁻¹⁰ m = 0,727 nm.",
    },
    {
      id: "km-u4-belirsizlik", zorluk: 1, tip: "mcq",
      soru: "\"Bir taneciğin konumu ve momentumu aynı anda kesin olarak belirlenemez.\" Bu ifade hangi ilkedir?",
      secenekler: ["Heisenberg belirsizlik ilkesi", "Pauli dışarlama ilkesi", "Aufbau ilkesi", "Hund kuralı"],
      dogru: 0,
      aciklama: "Heisenberg belirsizlik ilkesine göre Δx · Δp ≥ h/(4π)'dir. Bu yüzden elektronun yörüngesi değil, bir bölgede bulunma olasılığı hesaplanır.",
    },
    {
      id: "km-u4-debroglie-top-tf", zorluk: 2, tip: "tf", yedek: true,
      soru: "De Broglie bağıntısı yalnızca elektron gibi atom altı taneciklere uygulanır; bir futbol topunun dalga boyu yoktur.",
      dogru: false,
      aciklama: "Yanlış. Hızı ve kütlesi olan her cismin dalga boyu vardır. Futbol topunun kütlesi büyük olduğu için dalga boyu ölçülemeyecek kadar küçüktür, ama sıfır değildir.",
    },
  ]),

  ...turet(4, "km-kuantum", "u4-kuantum-sayilari", [
    {
      id: "km-u4-kuantum-l-degeri", zorluk: 2, tip: "mcq",
      soru: "Baş kuantum sayısı n = 3 olan bir elektron için açısal kuantum sayısı ℓ hangi değeri alamaz?",
      secenekler: ["3", "0", "1", "2"],
      dogru: 0,
      aciklama: "ℓ, 0 ile n − 1 arasında değer alır. n = 3 için ℓ = 0, 1 ya da 2 olabilir (3s, 3p, 3d); ℓ = 3 olamaz.",
    },
    {
      id: "km-u4-kuantum-orbital-sayisi", zorluk: 2, tip: "num",
      soru: "n = 3 katmanına en fazla kaç elektron yerleşebilir?",
      bosluklar: [["18"]],
      aciklama: "n. katmanda $n^2$ orbital vardır: 3² = 9 orbital. Her orbitale 2 elektron girdiğinden en fazla 2 × 9 = 18 elektron yerleşir.",
    },
    {
      id: "km-u4-kuantum-d-orbital", zorluk: 1, tip: "num",
      soru: "ℓ = 2 olan bir alt kabukta kaç orbital vardır?",
      bosluklar: [["5"]],
      aciklama: "Orbital sayısı 2ℓ + 1 = 2 × 2 + 1 = 5'tir. ℓ = 2 d alt kabuğudur.",
    },
    {
      id: "km-u4-spin-fill", zorluk: 1, tip: "fill",
      soru: "Elektronun +½ ya da −½ değerini alan kuantum sayısına ____ kuantum sayısı denir.",
      bosluklar: [["spin"]],
      aciklama: "Spin kuantum sayısı (ms) elektronun dönme yönünü belirtir; aynı orbitaldeki iki elektronun spinleri zıttır.",
    },
    {
      id: "km-u4-kuantum-gecersiz", zorluk: 3, tip: "mcq", yedek: true,
      soru: "Aşağıdaki (n, ℓ, mℓ) kümelerinden hangisi bir orbitali tanımlayamaz?",
      secenekler: ["(2, 1, −2)", "(1, 0, 0)", "(3, 2, −1)", "(4, 3, 3)"],
      dogru: 0,
      aciklama: "mℓ, −ℓ ile +ℓ arasında olmalıdır. ℓ = 1 iken mℓ = −2 olamaz. Diğer kümeler kurallara uyar.",
    },
  ]),

  ...turet(4, "km-elektron-dizilimi", "u4-dizilim-kurallari", [
    {
      id: "km-u4-dizilim-hund-n", zorluk: 2, tip: "num",
      soru: "Fosforun (Z = 15) temel hâl dizilimine göre kaç eşleşmemiş elektronu vardır?",
      bosluklar: [["3"]],
      aciklama: "Fosfor: 1s² 2s² 2p⁶ 3s² 3p³. Hund kuralına göre üç 3p elektronu üç ayrı orbitale aynı spinle girer; 3 eşleşmemiş elektron vardır.",
    },
    {
      id: "km-u4-dizilim-fe-tek", zorluk: 2, tip: "num",
      soru: "Demirin (Z = 26, [Ar] 4s² 3d⁶) temel hâlde kaç eşleşmemiş elektronu vardır?",
      bosluklar: [["4"]],
      aciklama: "3d⁶'da altı elektron beş d orbitaline girer: önce beşi birer tane, altıncısı birinci orbitalde çiftleşir (↑↓ ↑ ↑ ↑ ↑). 4s tam doludur. Eşleşmemiş elektron sayısı 4'tür.",
    },
    {
      id: "km-u4-dizilim-pauli", zorluk: 1, tip: "mcq",
      soru: "\"Bir atomda iki elektronun dört kuantum sayısı da aynı olamaz.\" Bu ifade hangi ilkedir?",
      secenekler: ["Pauli dışarlama ilkesi", "Hund kuralı", "Aufbau ilkesi", "Heisenberg belirsizlik ilkesi"],
      dogru: 0,
      aciklama: "Pauli dışarlama ilkesidir. Bu yüzden bir orbitale en çok iki zıt spinli elektron girer.",
    },
    {
      id: "km-u4-dizilim-4s3d", zorluk: 2, tip: "tf",
      soru: "Aufbau ilkesine göre 3d alt kabuğu 4s alt kabuğundan önce dolar.",
      dogru: false,
      aciklama: "Yanlış. 4s'in enerjisi 3d'den düşüktür (n + ℓ: 4s için 4, 3d için 5), bu yüzden 4s önce dolar.",
    },
    {
      id: "km-u4-dizilim-cr", zorluk: 3, tip: "mcq",
      soru: "Kromun (Z = 24) temel hâl elektron dizilimi hangisidir?",
      secenekler: ["[Ar] 4s¹ 3d⁵", "[Ar] 4s² 3d⁴", "[Ar] 3d⁶", "[Ar] 4s² 4p⁴"],
      dogru: 0,
      aciklama: "Yarı dolu d alt kabuğu daha kararlı olduğu için 4s'ten bir elektron 3d'ye geçer: [Ar] 4s¹ 3d⁵. Beklenen [Ar] 4s² 3d⁴ dizilimi gerçekte gözlenmez.",
    },
    {
      id: "km-u4-dizilim-fe2", zorluk: 3, tip: "mcq", yedek: true,
      soru: "Fe²⁺ iyonunun (Z = 26) elektron dizilimi hangisidir?",
      secenekler: ["[Ar] 3d⁶", "[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵", "[Ar] 4s² 3d⁶"],
      dogru: 0,
      aciklama: "Katyon oluşurken elektronlar önce en yüksek n değerli 4s'ten koparılır: [Ar] 4s² 3d⁶ → [Ar] 3d⁶.",
    },
    {
      id: "km-u4-dizilim-na-fill", zorluk: 1, tip: "fill", yedek: true,
      soru: "Sodyumun (Z = 11) kısaltılmış dizilimi [____] 3s¹ biçiminde yazılır.",
      bosluklar: [["Ne"]],
      aciklama: "1s² 2s² 2p⁶ kısmı neonun dizilimidir; sodyum [Ne] 3s¹ olarak yazılır.",
    },
  ]),
];
