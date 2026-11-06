// 8. ünite: Kesim 1.8 İspat Yöntemleri ve Stratejisi

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 8;
const K = "u8";
const B = "1.8";

export const unite8: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u8-k1", no: "1", tip: "yaz", kavram: "u8-durum", zorluk: 1,
      soru: "n pozitif tam sayı, 1 ≤ n ≤ 4 olmak üzere n² + 1 ≥ 2ⁿ olduğunu ispatlayınız.",
      aciklama: "Tükenmeli ispat (dört durum):\n\nn = 1: 1 + 1 = 2 ≥ 2¹ = 2.\nn = 2: 4 + 1 = 5 ≥ 2² = 4.\nn = 3: 9 + 1 = 10 ≥ 2³ = 8.\nn = 4: 16 + 1 = 17 ≥ 2⁴ = 16.\n\nDört durumda da eşitsizlik sağlanır. ∎",
    },
    {
      id: "u8-k3", no: "3", tip: "yaz", kavram: "u8-durum", zorluk: 2,
      soru: "x ve y iki reel sayı ise max(x, y) + min(x, y) = x + y olduğunu ispatlayınız. (İpucu: x ≥ y ve x < y durumlarını ayrı inceleyiniz.)",
      aciklama: "Durum 1: x ≥ y. max(x, y) = x, min(x, y) = y; toplam x + y.\nDurum 2: x < y. max(x, y) = y, min(x, y) = x; toplam y + x = x + y.\n\nİki durumda da eşitlik sağlanır. ∎",
    },
    {
      id: "u8-k6", no: "6", tip: "yaz", kavram: "u8-durum", zorluk: 2,
      soru: "x ve y farklı paritede (biri tek, biri çift) tam sayılar olmak üzere, genelliği bozmadan 5x + 5y'nin tek olduğunu ispatlayınız.",
      aciklama: "Genelliği bozmadan x çift, y tek olsun (diğer durum x ile y'nin yer değiştirmesiyle aynıdır). x = 2m, y = 2n + 1.\n\n5x + 5y = 10m + 10n + 5 = 2(5m + 5n + 2) + 1, tektir. ∎",
    },
    {
      id: "u8-k7", no: "7", tip: "yaz", kavram: "u8-durum", zorluk: 3,
      soru: "x ve y reel sayılar olmak üzere |x| + |y| ≥ |x + y| üçgen eşitsizliğini ispatlayınız.",
      aciklama: "Durumlara göre ispat.\n\n1) x ≥ 0, y ≥ 0: |x| + |y| = x + y = |x + y|.\n2) x < 0, y < 0: |x| + |y| = −x − y = −(x + y) = |x + y|.\n3) x ≥ 0, y < 0 (diğer karışık durum simetriktir): |x| + |y| = x − y. Bir yandan x + y < x ≤ x − y, öbür yandan −(x + y) = −x − y ≤ −y ≤ x − y. |x + y| bu iki sayıdan biri olduğu için |x + y| ≤ x − y.\n\nHer durumda |x| + |y| ≥ |x + y|. ∎",
    },
    {
      id: "u8-k8", no: "8", tip: "mcq", kavram: "u8-varlik", zorluk: 2,
      soru: "\"Kendisini geçmeyen pozitif tam sayıların toplamına eşit olan bir pozitif tam sayı vardır\" ifadesini ispatlamanın yolu ve türü hangisidir?",
      secenekler: ["n = 1 örneğini göstermek; yapıcı ispat", "Çelişki ile ispat; yapıcı olmayan ispat", "Tükenmeli ispat; yapıcı olmayan ispat", "Karşı örnek; ifade yanlıştır"],
      dogru: 0,
      aciklama: "1'i geçmeyen pozitif tam sayıların toplamı 1'dir. Somut bir örnek gösterildiği için ispat yapıcıdır.",
    },
    {
      id: "u8-k13", no: "13", tip: "yaz", kavram: "u8-karsi", zorluk: 2,
      soru: "x bir rasyonel sayı ve y bir irrasyonel sayı olsun. xy'nin irrasyonel olduğunu ispatlayınız ya da aksini gösteriniz.",
      aciklama: "İfade genel olarak yanlıştır. Karşı örnek: x = 0 rasyoneldir, y = √2 irrasyoneldir ama xy = 0 rasyoneldir.\n\n(x ≠ 0 eklenirse ifade doğru olur: xy = r rasyonel olsaydı y = r/x rasyonel olurdu.)",
    },
    {
      id: "u8-k16", no: "16", tip: "yaz", kavram: "u8-teklik", zorluk: 2,
      soru: "a, b ve c reel sayılar ve a ≠ 0 ise ax + b = c eşitliğinin tek bir çözümü olduğunu gösteriniz.",
      aciklama: "Varlık: x = (c − b)/a için a · (c − b)/a + b = c − b + b = c. Bir çözüm vardır.\n\nTeklik: x ve y iki çözüm olsun: ax + b = c ve ay + b = c. Çıkarırsak a(x − y) = 0. a ≠ 0 olduğundan x = y. Çözüm tektir. ∎",
    },
    {
      id: "u8-k19", no: "19", tip: "yaz", kavram: "u8-teklik", zorluk: 2,
      soru: "n bir tek tam sayı olsun. k − 2 ve k + 3'ün toplamı n olacak şekilde tek bir k tam sayısı olduğunu gösteriniz.",
      aciklama: "(k − 2) + (k + 3) = 2k + 1 = n, yani k = (n − 1)/2.\n\nVarlık: n tek olduğundan n − 1 çifttir, k = (n − 1)/2 bir tam sayıdır ve denklemi sağlar.\nTeklik: 2k + 1 = n denkleminden k tek türlü belirlenir. ∎",
    },
  ]),

  ...turet(U, K, "u8-durum", [
    {
      id: "u8-t-tukenmeli", tip: "mcq", zorluk: 1,
      soru: "Az sayıda örnek üzerinde tek tek kontrol yaparak bir teoremi ispatlamaya ne denir?",
      secenekler: ["Tükenmeli ispat", "Yapıcı olmayan ispat", "Zıt-pozitif ile ispat", "İçi boş ispat"],
      dogru: 0,
      aciklama: "Tüm olasılıklar tek tek denenerek yapılan ispat tükenmeli ispattır; durumlara göre ispatın özel bir halidir.",
    },
    {
      id: "u8-t-durum-mantik", tip: "fill", zorluk: 2, semboller: true,
      soru: "Durumlara göre ispat hangi totolojiye dayanır? (p₁ ∨ p₂) → q ≡ (p₁ → q) ____ (p₂ → q). Boşluğa hangi bağlaç gelir?",
      bosluklar: [["∧", "ve"]],
      aciklama: "(p₁ ∨ p₂ ∨ ... ∨ pₙ) → q ≡ (p₁ → q) ∧ (p₂ → q) ∧ ... ∧ (pₙ → q). Her durum ayrı ispatlanır.",
    },
    {
      id: "u8-t-kare-son", tip: "yaz", zorluk: 2,
      soru: "Bir tam sayının karesinin son basamağının 0, 1, 4, 5, 6 veya 9 olduğunu durumlara göre ispatla gösteriniz.",
      aciklama: "n²'nin son basamağı yalnız n'nin son basamağına bağlıdır. n'nin son basamağı d için d² 'nin son basamağı:\n\nd = 0 → 0, 1 → 1, 2 → 4, 3 → 9, 4 → 6, 5 → 5, 6 → 6, 7 → 9, 8 → 4, 9 → 1.\n\nOn durumun hepsinde son basamak {0, 1, 4, 5, 6, 9} içindedir. ∎",
    },
    {
      id: "u8-t-genellik", tip: "tf", zorluk: 2,
      soru: "\"Genelliği bozmadan\" ifadesi, bir durum ispatlanınca diğer durumların da aynı biçimde (ör. değişkenlerin yer değiştirmesiyle) ispatlanacağını belirtmek için kullanılır.",
      dogru: true,
      aciklama: "Doğru. Örneğin x ve y simetrikse x ≥ y durumunu ispatlamak yeterlidir.",
    },
  ]),

  ...turet(U, K, "u8-varlik", [
    {
      id: "u8-t-yapici", tip: "mcq", zorluk: 1,
      soru: "∃xP(x) ifadesinin, P(a)'yı doğru yapan belirli bir a elemanı bularak yapılan ispatına ne denir?",
      secenekler: ["Yapıcı varlık ispatı", "Yapıcı olmayan varlık ispatı", "Teklik ispatı", "Tükenmeli ispat"],
      dogru: 0,
      aciklama: "Bir tanık (örnek) gösterildiğinde ispat yapıcıdır.",
    },
    {
      id: "u8-t-ramanujan", tip: "fill", zorluk: 2,
      soru: "İki farklı biçimde iki pozitif tam sayının küplerinin toplamı olarak yazılabilen kitaptaki pozitif tam sayı kaçtır? (1729 = 10³ + 9³ = 12³ + 1³)",
      bosluklar: [["1729"]],
      aciklama: "1729 = 10³ + 9³ = 12³ + 1³. Bu bir yapıcı varlık ispatıdır.",
    },
    {
      id: "u8-t-irrasyonel-us", tip: "yaz", zorluk: 3,
      soru: "x ve y irrasyonel olmak üzere xʸ'nin rasyonel olabileceğini yapıcı olmayan bir ispatla gösteriniz.",
      aciklama: "√2^√2 sayısını düşünelim.\n\nDurum 1: √2^√2 rasyonel ise x = y = √2 ile işimiz biter.\nDurum 2: √2^√2 irrasyonel ise x = √2^√2, y = √2 alalım: (√2^√2)^√2 = √2^(√2·√2) = √2² = 2, rasyoneldir.\n\nİki durumdan birinde istenen x, y vardır; ama hangisi olduğunu bilmeyiz. Bu yüzden ispat yapıcı değildir. ∎",
    },
  ]),

  ...turet(U, K, "u8-teklik", [
    {
      id: "u8-t-teklik-iki", tip: "mcq", zorluk: 1,
      soru: "Teklik ispatı hangi iki parçadan oluşur?",
      secenekler: ["Varlık ve teklik", "Hipotez ve sonuç", "Durum 1 ve durum 2", "Karşıt ve ters"],
      dogru: 0,
      aciklama: "Önce istenen özellikte bir x'in var olduğu, sonra y ≠ x ise y'nin bu özelliği taşımadığı gösterilir.",
    },
    {
      id: "u8-t-teklik-mantik", tip: "fill", zorluk: 2, semboller: true,
      soru: "∃!xP(x) ifadesi, ∃x(P(x) ∧ ∀y(y ≠ x → ____)) biçiminde yazılır. Boşluğu doldurunuz.",
      bosluklar: [["¬P(y)"]],
      aciklama: "x dışındaki her y için P(y) yanlış olmalıdır: ∃x(P(x) ∧ ∀y(y ≠ x → ¬P(y))).",
    },
  ]),

  ...turet(U, K, "u8-karsi", [
    {
      id: "u8-t-karsi-ornek", tip: "mcq", zorluk: 1,
      soru: "\"Her pozitif tam sayı iki tam karenin toplamıdır\" ifadesini çürütmek için hangisi yeterlidir?",
      secenekler: ["3'ün iki tam karenin toplamı olmadığını göstermek", "1 = 1² + 0² eşitliğinin doğru olduğunu göstermek", "Önce ifadenin değilini varsayıp çelişki aramak", "Bütün pozitif tam sayıları tek tek denemek"],
      dogru: 0,
      aciklama: "3'ten küçük kareler 0 ve 1'dir; bunlarla 3 elde edilemez. Tek bir karşı örnek evrensel ifadeyi çürütür.",
    },
    {
      id: "u8-t-ileri-geri", tip: "mcq", zorluk: 2,
      soru: "Kanıtlanacak q ifadesinden başlayıp, q'yu gerektiren p ifadesine ulaşmaya çalışan strateji hangisidir?",
      secenekler: ["Geriye doğru akıl yürütme", "İleri doğru akıl yürütme", "Tükenmeli ispat", "Durumlara göre ispat"],
      dogru: 0,
      aciklama: "Geriye doğru akıl yürütmede sonuçtan başlanır, ona götüren ifadeler aranır. Bulunduktan sonra ispat ileri yönde yazılır.",
    },
    {
      id: "u8-t-ortalama", tip: "yaz", zorluk: 3,
      soru: "x ve y farklı pozitif reel sayılar ise aritmetik ortalamanın geometrik ortalamadan büyük olduğunu, yani (x + y)/2 > √(xy) olduğunu ispatlayınız.",
      aciklama: "Geriye doğru akıl yürütme ile ispat kurulur, sonra ileri yazılır:\n\nx ≠ y olduğundan (x − y)² > 0, yani x² − 2xy + y² > 0.\nİki tarafa 4xy eklenirse x² + 2xy + y² > 4xy, yani (x + y)² > 4xy.\nx + y > 0 ve √(xy) > 0 olduğundan karekök alınabilir: x + y > 2√(xy).\nİkiye bölünce (x + y)/2 > √(xy). ∎",
    },
    {
      id: "u8-t-sani", tip: "tf", zorluk: 1,
      soru: "Fermat'ın son teoremi, uzun yıllar sanı olarak kaldıktan sonra Andrew Wiles tarafından ispatlanmıştır.",
      dogru: true,
      aciklama: "Doğru. xⁿ + yⁿ = zⁿ'nin n > 2 için pozitif tam sayı çözümü olmadığı 1990'larda Wiles tarafından ispatlanmıştır.",
    },
  ]),
];
