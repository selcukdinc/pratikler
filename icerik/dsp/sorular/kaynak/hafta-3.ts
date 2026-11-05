// 3. hafta: ayrık zamanlı sinyaller ve sistemler
import { grupla, type Soru } from "./tipler.ts";

export const hafta3: Soru[] = [
  ...grupla(3, "ayrik-diziler", "dizi-gosterim", "Hafta 3, Ayrık zamanlı sinyaller", [
    {
      id: "h3-dizi-okuma", zorluk: 1, tip: "num",
      soru: "$x(n) = \\{3,\\ -1,\\ \\underset{\\uparrow}{2},\\ 5,\\ 4\\}$ dizisinde ok n = 0'ı gösteriyor.\n\nx(1) = ____ , x(−2) = ____",
      bosluklar: [["5"], ["3"]],
      aciklama: "Ok x(0) = 2'yi gösterir. Sağdakiler x(1) = 5, x(2) = 4; soldakiler x(−1) = −1, x(−2) = 3.",
    },
    {
      id: "h3-tanimsiz", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Ayrık zamanlı bir x(n) dizisi n = 0,5 gibi tamsayı olmayan anlarda sıfır değerini alır.",
      dogru: false,
      aciklama: "Yanlış. x(n) yalnızca tamsayı n'lerde tanımlıdır; tamsayı olmayan n'lerde sıfır değil, tanımsızdır.",
    },
  ]),

  ...grupla(3, "ayrik-diziler", "temel-diziler", "Hafta 3, Farklı dizi çeşitleri", [
    {
      id: "h3-durtu-deger", zorluk: 2, tip: "num",
      soru: "$\\displaystyle\\sum_{n=-\\infty}^{\\infty} n^2\\,\\delta(n-3)$ toplamı kaçtır?",
      bosluklar: [["9"]],
      aciklama: "δ(n − 3) yalnızca n = 3'te 1'dir; toplamda yalnızca o terim kalır: 3² = 9.",
    },
    {
      id: "h3-basamak-fark", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "u(n) − u(n − 1) farkı hangi diziye eşittir?",
      bosluklar: [["δ(n)", "delta(n)", "\\delta(n)", "birim dürtü"]],
      aciklama: "İki basamak n ≥ 1 için birbirini götürür; yalnızca n = 0'da 1 − 0 = 1 kalır. Bu birim dürtüdür: δ(n) = u(n) − u(n − 1).",
    },
    {
      id: "h3-rampa", kaynak: "original", zorluk: 1, tip: "num",
      soru: "Birim rampa $u_r(n)$ için $u_r(n - 2)$ dizisinin n = 5'teki değeri kaçtır?",
      bosluklar: [["3"]],
      aciklama: "$u_r(n - 2) = (n - 2)$, n ≥ 2 için. n = 5'te 3.",
    },
    {
      id: "h3-basamak-toplam", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Birim basamak birim dürtü cinsinden nasıl yazılır?",
      secenekler: [
        "$u(n) = \\sum_{k=-\\infty}^{n} \\delta(k)$",
        "$u(n) = \\delta(n) - \\delta(n-1)$",
        "$u(n) = n\\,\\delta(n)$",
        "$u(n) = \\sum_{k=n}^{\\infty} \\delta(k)$",
      ],
      dogru: 0,
      aciklama: "n'ye kadar olan dürtülerin toplamı, n ≥ 0 olduğunda δ(0) = 1'i içerir ve 1 olur; n < 0'da hiç dürtü içermez ve 0'dır.",
    },
  ]),

  ...grupla(3, "ayrik-diziler", "ustel-sinuzoidal", "Hafta 3, Üstel ve sinüzoidal sinyaller", [
    {
      id: "h3-ustel-sonum", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "$x(n) = (-0{,}7)^n u(n)$ dizisi nasıl davranır?",
      secenekler: [
        "İşareti her örnekte değişerek söner",
        "İşareti değişmeden söner",
        "İşareti her örnekte değişerek büyür",
        "Sabit genlikle salınır",
      ],
      dogru: 0,
      aciklama: "a negatif olduğu için işaret her örnekte değişir; |a| = 0,7 < 1 olduğu için genlik söner.",
    },
    {
      id: "h3-karmasik-genlik", zorluk: 2, tip: "num",
      soru: "$x(n) = e^{(-0{,}1 + j\\pi/4)n}$ için $|x(10)|$ kaçtır?",
      bosluklar: [["0.3679±0.002"]],
      aciklama: "Karmaşık üstelin genliği $e^{\\sigma n}$'dir; sanal kısım genliği değiştirmez. $e^{-0{,}1 \\cdot 10} = e^{-1} \\approx 0{,}368$.",
    },
  ]),

  ...grupla(3, "ayrik-diziler", "periyodiklik", "Hafta 3, Sinüzoidal sinyaller", [
    {
      id: "h3-periyot", zorluk: 1, tip: "num",
      soru: "$x(n) = \\cos(\\pi n / 6)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["12"]],
      aciklama: "$N = 2\\pi k / \\omega_0 = 2\\pi k / (\\pi/6) = 12k$; k = 1 ile N = 12.",
    },
    {
      id: "h3-periyot-toplam", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$x(n) = \\cos(0{,}25\\pi n) + \\sin(\\pi n / 3)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["24"]],
      aciklama: "$N_1 = 2\\pi / 0{,}25\\pi = 8$, $N_2 = 2\\pi / (\\pi/3) = 6$. Toplamın periyodu ekok(8, 6) = 24.",
    },
    {
      id: "h3-periyodik-degil", zorluk: 2, tip: "tf",
      soru: "$x(n) = \\cos(0{,}3n)$ periyodik bir dizidir.",
      dogru: false,
      aciklama: "Yanlış. $\\omega_0 / 2\\pi = 0{,}3/2\\pi$ rasyonel değildir; $0{,}3N = 2\\pi k$ sağlayan tamsayılar yoktur. Ayrık sinüs ancak $\\omega_0/2\\pi$ rasyonelse periyodiktir.",
    },
    {
      id: "h3-periyot-k", zorluk: 3, tip: "num",
      soru: "$x(n) = \\cos(0{,}3\\pi n)$ dizisinin temel periyodu kaçtır?",
      bosluklar: [["20"]],
      aciklama: "$N = 2\\pi k / 0{,}3\\pi = 20k/3$. Tamsayı yapan en küçük k = 3: N = 20.",
    },
  ]),

  ...grupla(3, "sinyal-islemleri", "simetri", "Hafta 3, Simetrik diziler", [
    {
      id: "h3-cift-kisim", kaynak: "original", zorluk: 2, tip: "num",
      soru: "x(0) = 2, x(1) = 4, x(2) = −2 ve başka her yerde x(n) = 0.\n\n$x_e(1)$ = ____ , $x_o(-1)$ = ____",
      bosluklar: [["2"], ["-2"]],
      aciklama: "$x_e(1) = [x(1) + x(-1)]/2 = (4 + 0)/2 = 2$. $x_o(-1) = [x(-1) - x(1)]/2 = (0 - 4)/2 = -2$.",
    },
    {
      id: "h3-tek-sifir", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Gerçek değerli tek bir dizide x(0) her zaman sıfırdır.",
      dogru: true,
      aciklama: "Doğru. Tek dizide x(n) = −x(−n); n = 0'da x(0) = −x(0), bu yalnızca x(0) = 0 ile sağlanır.",
    },
    {
      id: "h3-cift-ornek", zorluk: 1, tip: "mcq",
      soru: "Aşağıdaki dizilerden hangisi çifttir?",
      secenekler: ["$\\cos(0{,}2\\pi n)$", "$\\sin(0{,}2\\pi n)$", "$u(n)$", "$\\delta(n - 1)$"],
      dogru: 0,
      aciklama: "cos(−θ) = cos(θ) olduğu için cos(ω₀n) çifttir. sin tektir; u(n) ve δ(n − 1) n = 0'a göre simetrik değildir.",
    },
  ]),

  ...grupla(3, "sinyal-islemleri", "sinyal-donusum", "Hafta 3, Sinyal manipülasyonları", [
    {
      id: "h3-kaydirma", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "y(n) = x(n + 3) dizisi x(n)'e göre nasıl kaymıştır?",
      secenekler: ["3 örnek sola", "3 örnek sağa", "n = 0 etrafında aynalanmış", "3 kat seyreltilmiş"],
      dogru: 0,
      aciklama: "x(n − n₀)'da n₀ = −3: dizi 3 örnek sola kayar, yani ilerler. x'in n = 0'daki değeri y'de n = −3'te görünür.",
    },
    {
      id: "h3-ters-kaydir", kaynak: "original", zorluk: 2, tip: "num",
      soru: "x(n), n = 0, 1, 2, 3 için 1, 2, 3, 4 değerlerini alıyor; başka yerde 0. y(n) = x(3 − n) olsun.\n\ny(0) = ____ , y(2) = ____",
      bosluklar: [["4"], ["2"]],
      aciklama: "y(0) = x(3) = 4; y(2) = x(1) = 2. Her n için parantezin içini hesapla.",
    },
    {
      id: "h3-seyreltme", kaynak: "original", zorluk: 2, tip: "num",
      soru: "x(n) = n (n = 0..9 için, başka yerde 0) ve y(n) = x(2n). y(3) kaçtır?",
      bosluklar: [["6"]],
      aciklama: "y(3) = x(2·3) = x(6) = 6. Seyreltmede her ikinci örnek alınır.",
    },
    {
      id: "h3-ara-deger", kaynak: "original", zorluk: 2, tip: "num",
      soru: "n = 0, 1, 2'de 1, 2, 3 olan bir dizi 2 kat ara değer eklemeyle (up-sampling, $y(n) = x(n/2)$ n çiftken, değilse 0) genişletiliyor. y(0)'dan y(4)'e kadarki değerleri yaz.",
      bosluklar: [["[1 0 2 0 3]"]],
      aciklama: "Çift n'lerde y(n) = x(n/2): y(0) = 1, y(2) = 2, y(4) = 3; tek n'lerde 0.",
    },
    {
      id: "h3-sira", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Bir diziyi önce 2 örnek geciktirip sonra ters çevirmek, önce ters çevirip sonra 2 örnek geciktirmekle aynı sonucu verir.",
      dogru: false,
      aciklama: "Yanlış. İlki x(−n − 2), ikincisi x(−(n − 2)) = x(−n + 2) verir; dizi n = 0'ın farklı taraflarına düşer.",
    },
  ]),

  ...grupla(3, "sinyal-islemleri", "enerji-guc", "Hafta 3, Sinyal enerjisi ve gücü", [
    {
      id: "h3-enerji", kaynak: "original", zorluk: 1, tip: "num",
      soru: "Yalnızca n = 0, 1, 2'de 1, −2, 2 değerlerini alan dizinin enerjisi kaçtır?",
      bosluklar: [["9"]],
      aciklama: "E = 1² + (−2)² + 2² = 1 + 4 + 4 = 9.",
    },
    {
      id: "h3-enerji-ustel", zorluk: 2, tip: "num",
      soru: "$x(n) = (0{,}8)^n u(n)$ dizisinin enerjisi kaçtır?",
      bosluklar: [["2.778±0.01", "25/9"]],
      aciklama: "$E = \\sum (0{,}64)^n = 1/(1 - 0{,}64) = 1/0{,}36 \\approx 2{,}78$.",
    },
    {
      id: "h3-guc", kaynak: "original", zorluk: 2, tip: "num",
      soru: "Periyodu 4 olan bir dizinin bir periyottaki değerleri 1, 2, 1, 0. Dizinin gücü kaçtır?",
      bosluklar: [["1.5"]],
      aciklama: "P = (1 + 4 + 1 + 0)/4 = 6/4 = 1,5.",
    },
    {
      id: "h3-guc-basamak", zorluk: 2, tip: "mcq",
      soru: "Birim basamak u(n) için hangisi doğrudur?",
      secenekler: ["Güç sinyalidir", "Enerji sinyalidir", "Hem enerji hem güç sinyalidir", "Ne enerji ne güç sinyalidir"],
      dogru: 0,
      aciklama: "u(n)'nin enerjisi sonsuzdur (sonsuz tane 1'in karesi), ortalama gücü ise 1/2'dir: güç sinyalidir.",
    },
  ]),

  ...grupla(3, "sinyal-islemleri", "durtu-ayristirma", "Hafta 3, Sinyal ayrıştırma", [
    {
      id: "h3-durtu-toplam", kaynak: "original", zorluk: 1, tip: "num",
      soru: "x(n) = 3δ(n + 1) − δ(n) + 2δ(n − 2) için\n\nx(−1) = ____ , x(2) = ____",
      bosluklar: [["3"], ["2"]],
      aciklama: "Her dürtü kendi konumunda katsayısını verir: δ(n + 1) n = −1'de, δ(n − 2) n = 2'de.",
    },
    {
      id: "h3-eleme", zorluk: 2, tip: "num",
      soru: "$x(n) = n^2 + 1$ olsun. $x(n)\\,\\delta(n - 2)$ dizisinin n = 2'deki değeri kaçtır?",
      bosluklar: [["5"]],
      aciklama: "Eleme özelliği: $x(n)\\,\\delta(n-2) = x(2)\\,\\delta(n-2)$. n = 2'de değer x(2) = 5; diğer her yerde 0.",
    },
  ]),

  ...grupla(3, "ayrik-sistemler", "dogrusallik", "Hafta 3, Doğrusal sistemler", [
    {
      id: "h3-dogrusal", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisi doğrusaldır?",
      secenekler: ["y(n) = 2x(n − 1)", "y(n) = x(n) + 1", "y(n) = x²(n)", "y(n) = |x(n)|"],
      dogru: 0,
      aciklama: "2x(n − 1) süperpozisyonu sağlar. Sabit eklemek homojenliği, kare ve mutlak değer toplanabilirliği bozar.",
    },
    {
      id: "h3-sifir-giris", zorluk: 2, tip: "tf",
      soru: "Sıfır girişe sıfırdan farklı bir çıkış veren bir sistem doğrusal olamaz.",
      dogru: true,
      aciklama: "Doğru. Homojenlikten T[0·x] = 0·T[x] = 0 olmalıdır. y(n) = 2x(n) + 5 gibi sistemler bu yüzden doğrusal değildir.",
    },
    {
      id: "h3-superpozisyon", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Hem toplanabilir hem homojen olan bir sistem ____ ilkesini sağlar ve doğrusaldır.",
      bosluklar: [["süperpozisyon", "superpozisyon"]],
      aciklama: "Süperpozisyon: ağırlıklı girişlerin toplamının yanıtı, yanıtların aynı ağırlıklarla toplamıdır.",
    },
  ]),

  ...grupla(3, "ayrik-sistemler", "sistem-ozellik", "Hafta 3, Ayrık zamanlı sistem özellikleri", [
    {
      id: "h3-nedensel", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisi nedenseldir?",
      secenekler: ["y(n) = x(n) − x(n − 2)", "y(n) = x(n + 1)", "y(n) = x(−n)", "y(n) = x(2n)"],
      dogru: 0,
      aciklama: "Yalnızca şimdiki ve geçmiş örnekleri kullanır. x(n + 1) gelecektir; x(−n) negatif n'lerde, x(2n) pozitif n'lerde gelecekteki örnekleri kullanır.",
    },
    {
      id: "h3-zamanla-degisen", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisi zamanla değişir?",
      secenekler: ["y(n) = n·x(n)", "y(n) = x(n − 1)", "y(n) = 3x(n)", "y(n) = x(n) + x(n − 1)"],
      dogru: 0,
      aciklama: "n·x(n)'de katsayı zamana bağlıdır: x(n − n₀) girişi n·x(n − n₀) verir ama y(n − n₀) = (n − n₀)·x(n − n₀)'dır.",
    },
    {
      id: "h3-kararlilik", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisi BIBO anlamında kararsızdır?",
      secenekler: [
        "$y(n) = \\sum_{k=-\\infty}^{n} x(k)$",
        "y(n) = 0,5x(n − 1)",
        "y(n) = x²(n)",
        "y(n) = cos(x(n))",
      ],
      dogru: 0,
      aciklama: "Biriktirici, sınırlı u(n) girişine sınırsız büyüyen (n + 1)u(n) ile yanıt verir. Diğerleri sınırlı girişe sınırlı çıkış verir.",
    },
    {
      id: "h3-tersinir", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "y(n) = x²(n) sistemi tersinirdir.",
      dogru: false,
      aciklama: "Yanlış. x(n) ve −x(n) aynı çıkışı verir; çıkıştan giriş tek türlü bulunamaz.",
    },
    {
      id: "h3-hafizasiz", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Çıkışı yalnızca girişin o andaki değerine bağlı olan sisteme hafızasız ya da ____ sistem denir.",
      bosluklar: [["statik"]],
      aciklama: "Hafızasız (statik) sistemde y(n) yalnızca x(n)'e bağlıdır. Başka anlara bağlıysa sistem dinamiktir.",
    },
    {
      id: "h3-bibo", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "\"Sınırlı giriş, sınırlı çıkış\" kararlılığının İngilizce kısaltması nedir?",
      bosluklar: [["BIBO"]],
      aciklama: "BIBO: bounded input, bounded output.",
    },
  ]),

  ...grupla(3, "ayrik-sistemler", "lti", "Hafta 3, LTI sistemler", [
    {
      id: "h3-lti-durtu", zorluk: 2, tip: "num",
      soru: "y(n) = x(n) − 2x(n − 1) + x(n − 2) sisteminin dürtü yanıtını n = 0'dan başlayarak yaz.",
      bosluklar: [["[1 -2 1]"]],
      aciklama: "x(n) = δ(n) koy: h(n) = δ(n) − 2δ(n − 1) + δ(n − 2). Değerler n = 0, 1, 2'de 1, −2, 1.",
    },
    {
      id: "h3-kaskat", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Art arda bağlanmış iki LTI sistemin sırası değiştirilirse toplam çıkış değişmez.",
      dogru: true,
      aciklama: "Doğru. LTI sistemlerin değişme özelliği: kaskat bağlantıda sıra önemli değildir.",
    },
    {
      id: "h3-lti-tanim", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Bir LTI sistemin birim dürtüye, δ(n)'ye verdiği yanıta ____ yanıtı denir ve h(n) ile gösterilir.",
      bosluklar: [["dürtü", "durtu"]],
      aciklama: "Dürtü yanıtı h(n), LTI sistemi tamamen tanımlar; her girişin yanıtı konvolüsyonla bulunur.",
    },
  ]),
];
