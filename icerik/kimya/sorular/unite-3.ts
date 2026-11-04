// 3. ünite: atom modelleri ve atomun yapısı (türetilmiş sorular)
import type { Soru } from "../../tipler.ts";
import { turet } from "./yardimci.ts";

export const unite3: Soru[] = [
  ...turet(3, "km-atom-modelleri", "u3-dalton-modeli", [
    {
      id: "km-u3-dalton-gecerli", zorluk: 2, tip: "mcq",
      soru: "Dalton atom kuramının aşağıdaki görüşlerinden hangisi bugün de geçerlidir?",
      secenekler: ["Kimyasal tepkimede atomlar yok olmaz, yeniden düzenlenir", "Atom bölünemeyen bir taneciktir", "Bir elementin bütün atomlarının kütlesi aynıdır", "Atom içi dolu, yüksüz bir küredir"],
      dogru: 0,
      aciklama: "Tepkimelerde atomların korunması bugün de geçerlidir. Atomun bölünemezliği alt atomik taneciklerin, aynı elementin atomlarının özdeşliği ise izotopların keşfiyle çürütüldü.",
    },
    {
      id: "km-u3-dalton-izotop", zorluk: 2, tip: "tf",
      soru: "İzotopların keşfi, Dalton'un \"bir elementin bütün atomları özdeştir\" görüşünü çürütmüştür.",
      dogru: true,
      aciklama: "Doğru. İzotoplar aynı elementin farklı kütleli atomlarıdır; örneğin hidrojenin ¹H, ²H ve ³H izotopları vardır.",
    },
  ]),

  ...turet(3, "km-atom-modelleri", "u3-rutherford-modeli", [
    {
      id: "km-u3-rutherford-bosluk", zorluk: 1, tip: "mcq",
      soru: "Rutherford deneyinde alfa taneciklerinin çok büyük kısmının altın levhadan sapmadan geçmesi neyi gösterir?",
      secenekler: ["Atomun hacminin büyük kısmının boşluk olduğunu", "Atomda pozitif yükün her yere dağıldığını", "Elektronların çekirdekte bulunduğunu", "Altın atomlarının yüksüz olduğunu"],
      dogru: 0,
      aciklama: "Taneciklerin çoğu hiçbir şeye çarpmadan geçtiği için atomun büyük kısmı boşluktur. Az sayıdaki geri dönüş ise pozitif yükün ve kütlenin küçük bir çekirdekte toplandığını gösterir.",
    },
    {
      id: "km-u3-thomson-model", zorluk: 1, tip: "fill",
      soru: "Thomson'ın, elektronların pozitif yüklü bir küre içine gömüldüğü atom modeline ____ modeli denir.",
      bosluklar: [["üzümlü kek", "uzumlu kek"]],
      aciklama: "Thomson modelinde artı ve eksi yükler atomun her yerine düzgün dağılmıştır; bu yüzden üzümlü kek modeli denir. Rutherford deneyi bu modeli çürüttü.",
    },
    {
      id: "km-u3-rutherford-geri", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Rutherford deneyinde birkaç alfa taneciğinin geri dönmesi aşağıdakilerden hangisiyle açıklanır?",
      secenekler: ["Pozitif yükün küçük ve yoğun bir çekirdekte toplanmasıyla", "Elektronların alfa taneciklerini çekmesiyle", "Altın levhanın çok kalın olmasıyla", "Atomların birbirine çok yakın dizilmesiyle"],
      dogru: 0,
      aciklama: "Pozitif alfa tanecikleri ancak aynı yükte, çok küçük ve kütlesi büyük bir merkeze doğrudan yaklaştıklarında geri itilebilir. Bu merkez çekirdektir.",
    },
    {
      id: "km-u3-notron-chadwick", zorluk: 1, tip: "tf",
      soru: "Nötronu Rutherford, altın levha deneyiyle keşfetmiştir.",
      dogru: false,
      aciklama: "Yanlış. Nötronu 1932'de James Chadwick keşfetti. Rutherford'un deneyi çekirdeğin varlığını gösterdi.",
    },
  ]),

  ...turet(3, "km-atom-modelleri", "u3-atom-tanecikleri", [
    {
      id: "km-u3-tanecik-notron", zorluk: 1, tip: "num",
      soru: "$^{37}_{17}\\text{Cl}$ atomunun çekirdeğinde kaç nötron vardır?",
      bosluklar: [["20"]],
      aciklama: "Nötron sayısı N = A − Z = 37 − 17 = 20.",
    },
    {
      id: "km-u3-tanecik-iyon", zorluk: 2, tip: "num",
      soru: "Atom numarası 26 olan demirin Fe³⁺ iyonunda kaç elektron vardır?",
      bosluklar: [["23"]],
      aciklama: "Nötr demirde 26 elektron vardır. 3+ yüklü katyon 3 elektron vermiştir: 26 − 3 = 23.",
    },
    {
      id: "km-u3-anyon-elektron", zorluk: 2, tip: "num", yedek: true,
      soru: "Atom numarası 8 olan oksijenin O²⁻ iyonunda kaç elektron vardır?",
      bosluklar: [["10"]],
      aciklama: "Anyon elektron almıştır: 8 + 2 = 10 elektron.",
    },
    {
      id: "km-u3-izotop-ortak", zorluk: 1, tip: "mcq",
      soru: "Bir elementin izotoplarında aşağıdakilerden hangisi aynıdır?",
      secenekler: ["Proton sayısı", "Nötron sayısı", "Kütle numarası", "Atom kütlesi"],
      dogru: 0,
      aciklama: "İzotopların proton sayısı (atom numarası) aynı, nötron sayısı farklıdır. Bu yüzden kütle numaraları ve kütleleri de farklıdır.",
    },
    {
      id: "km-u3-izotop-ortalama", zorluk: 3, tip: "num",
      soru: "Klorun doğada iki izotopu vardır: ³⁵Cl (34,97 akb, %75,77) ve ³⁷Cl (36,97 akb, %24,23). Klorun ortalama atom kütlesi kaç akb'dir?",
      bosluklar: [["35.45±0.02"]],
      aciklama: "Ortalama atom kütlesi bolluklarla ağırlıklı ortalamadır: 0,7577 × 34,97 + 0,2423 × 36,97 = 26,50 + 8,96 ≈ 35,45 akb.",
    },
    {
      id: "km-u3-kutle-numarasi-fill", zorluk: 1, tip: "fill",
      soru: "Bir atomun çekirdeğindeki proton ve nötron sayılarının toplamına ____ denir.",
      bosluklar: [["kütle numarası", "kutle numarasi"]],
      aciklama: "Kütle numarası A = Z + N'dir. Atom numarası (Z) ise yalnızca proton sayısıdır.",
    },
  ]),

  ...turet(3, "km-atom-modelleri", "u3-bohr-modeli", [
    {
      id: "km-u3-bohr-temel-hal", zorluk: 1, tip: "mcq",
      soru: "Bohr modeline göre uyarılmış bir hidrojen atomundaki elektron daha düşük enerjili bir yörüngeye indiğinde ne olur?",
      secenekler: ["İki düzeyin enerji farkı kadar foton yayar", "Dışarıdan bir foton soğurup daha çok uyarılır", "Enerjisini yitirip çekirdeğe düşer", "Çekirdekten bir proton kopar ve atom iyonlaşır"],
      dogru: 0,
      aciklama: "Elektron yüksek enerjili yörüngeden düşük enerjiliye inerken iki düzey arasındaki enerji farkını foton olarak yayar. Foton soğurması ise elektronu yukarı çıkarır.",
    },
    {
      id: "km-u3-bohr-dalga-boyu", zorluk: 3, tip: "num",
      soru: "Hidrojen atomunda elektron n = 3'ten n = 2'ye iniyor. Yayılan ışığın dalga boyu kaç nm'dir? ($E_n = -2{,}18 \\times 10^{-18}\\ \\text{J}/n^2$, $h = 6{,}626 \\times 10^{-34}$ J·s, $c = 3{,}00 \\times 10^{8}$ m/s)",
      bosluklar: [["656±4"]],
      aciklama: "ΔE = 2,18 × 10⁻¹⁸ × (1/4 − 1/9) = 2,18 × 10⁻¹⁸ × 0,1389 ≈ 3,03 × 10⁻¹⁹ J. λ = hc/ΔE = (6,626 × 10⁻³⁴ × 3,00 × 10⁸) / 3,03 × 10⁻¹⁹ ≈ 6,56 × 10⁻⁷ m = 656 nm. Bu, hidrojenin kırmızı çizgisidir.",
    },
    {
      id: "km-u3-bohr-sinir", zorluk: 2, tip: "tf",
      soru: "Bohr modeli, çok elektronlu atomların çizgi spektrumlarını da doğru açıklar.",
      dogru: false,
      aciklama: "Yanlış. Bohr modeli yalnızca H, He⁺ ve Li²⁺ gibi tek elektronlu taneciklerde doğru sonuç verir.",
    },
    {
      id: "km-u3-temel-hal-fill", zorluk: 1, tip: "fill", yedek: true,
      soru: "Bir atomdaki elektronun en düşük enerjili durumuna ____ denir.",
      bosluklar: [["temel hâl", "temel hal"]],
      aciklama: "Hidrojende n = 1 durumu temel hâldir; daha yüksek enerjili durumlar uyarılmış hâllerdir.",
    },
  ]),
];
