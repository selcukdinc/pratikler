// 4. hafta: konvolüsyon
import { grupla, type Soru } from "./tipler.ts";

export const hafta4: Soru[] = [
  ...grupla(4, "konvolusyon-temel", "konvolusyon-toplam", "Hafta 4, Konvolüsyon", [
    {
      id: "h4-tanim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Dürtü yanıtı h(n) olan LTI bir sistemin x(n) girişine çıkışı hangisidir?",
      secenekler: [
        "$\\sum_k x(k)\\,h(n-k)$",
        "$\\sum_k x(k)\\,h(n+k)$",
        "$x(n)\\,h(n)$",
        "$\\sum_k x(k)\\,h(k)$",
      ],
      dogru: 0,
      aciklama: "Konvolüsyon toplamı: her giriş örneği x(k), n − k adım sonraki dürtü yanıtı değeriyle çarpılır ve toplanır. İkinci şık korelasyondur, üçüncüsü örnek bazında çarpım, dördüncüsü n'ye bağlı bile değildir.",
    },
    {
      id: "h4-durtu-birim", zorluk: 1, tip: "fill",
      soru: "Bir dizinin birim dürtüyle konvolüsyonu nedir? x(n) * δ(n) = ____",
      bosluklar: [["x(n)", "x"]],
      aciklama: "Toplamda yalnızca k = n terimi kalır: x(n) * δ(n) = x(n). Dürtü konvolüsyonun birim elemanıdır.",
    },
    {
      id: "h4-durtu-kaydir", zorluk: 1, tip: "num",
      soru: "x(n) yalnızca n = 1'de 4 değerini alıyor. y(n) = x(n) * δ(n − 3) hangi n'de 4'tür?",
      bosluklar: [["4"]],
      aciklama: "Kaydırılmış dürtüyle konvolüsyon diziyi kaydırır: y(n) = x(n − 3). Değer n − 3 = 1, yani n = 4'te görünür.",
    },
    {
      id: "h4-ilk-ornek", zorluk: 2, tip: "num",
      soru: "x(0) = 2, x(1) = 1 ve h(0) = 3, h(1) = −1, h(2) = 2 (diğer örnekler 0). y(n) = x(n) * h(n) için:\n\ny(0) = ____ , y(1) = ____",
      bosluklar: [["6"], ["1"]],
      aciklama: "y(0) = x(0)h(0) = 6. y(1) = x(0)h(1) + x(1)h(0) = −2 + 3 = 1.",
    },
    {
      id: "h4-lti-tek", zorluk: 1, tip: "tf",
      soru: "LTI bir sistemin dürtü yanıtı biliniyorsa, herhangi bir girişe çıkışı konvolüsyonla hesaplanabilir.",
      dogru: true,
      aciklama: "Doğru. Her giriş kaydırılmış dürtülerin toplamıdır; doğrusallık ve zamanla değişmezlik sayesinde çıkış, kaydırılmış dürtü yanıtlarının toplamıdır.",
    },
  ]),

  ...grupla(4, "konvolusyon-temel", "konvolusyon-ozellik", "Hafta 4, Konvolüsyon özellikleri", [
    {
      id: "h4-degisme", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Her x(n) ve h(n) için x(n) * h(n) = h(n) * x(n) eşitliği sağlanır.",
      dogru: true,
      aciklama: "Doğru. Bu değişme özelliğidir: dürtü yanıtı h ve girişi x olan sistem, dürtü yanıtı x ve girişi h olan sistemle aynı çıkışı verir.",
    },
    {
      id: "h4-kaskat", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Dürtü yanıtları $h_1(n)$ ve $h_2(n)$ olan iki LTI sistem art arda (kaskat) bağlanıyor. Eşdeğer sistemin dürtü yanıtı nedir?",
      secenekler: ["$h_1(n) * h_2(n)$", "$h_1(n) + h_2(n)$", "$h_1(n)\\,h_2(n)$", "$h_1(n) - h_2(n)$"],
      dogru: 0,
      aciklama: "Birleşme özelliği: (x * h₁) * h₂ = x * (h₁ * h₂). Kaskat bağlantıda dürtü yanıtları konvolüsyona girer.",
    },
    {
      id: "h4-paralel", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Dürtü yanıtları h1 ve h2 olan iki LTI sistem paralel bağlanıyor (aynı giriş, çıkışlar toplanıyor). Eşdeğer dürtü yanıtı ____ olur.",
      bosluklar: [["h1 + h2", "h1(n) + h2(n)", "h₁ + h₂", "h₁(n) + h₂(n)", "h2 + h1"]],
      aciklama: "Dağılma özelliği: x * h₁ + x * h₂ = x * (h₁ + h₂). Paralel bağlantıda dürtü yanıtları toplanır.",
    },
    {
      id: "h4-kaskat-hesap", zorluk: 2, tip: "num",
      soru: "$h_1(n) = \\delta(n) + \\delta(n-1)$ ve $h_2(n) = \\delta(n) + 2\\delta(n-1)$ kaskat bağlı. Eşdeğer dürtü yanıtını n = 0'dan başlayarak dizi olarak yaz.",
      bosluklar: [["[1 3 2]"]],
      aciklama: "h₁ * h₂ = δ(n) + 2δ(n − 1) + δ(n − 1) + 2δ(n − 2) = δ(n) + 3δ(n − 1) + 2δ(n − 2).",
    },
    {
      id: "h4-paralel-hesap", zorluk: 2, tip: "num",
      soru: "$h_1(n) = 2\\delta(n) - \\delta(n-1)$ ve $h_2(n) = \\delta(n-1) + 3\\delta(n-2)$ paralel bağlı. Eşdeğer dürtü yanıtını n = 0'dan başlayarak dizi olarak yaz.",
      bosluklar: [["[2 0 3]"]],
      aciklama: "Paralel: h₁ + h₂ = 2δ(n) + (−1 + 1)δ(n − 1) + 3δ(n − 2) = 2δ(n) + 3δ(n − 2).",
    },
  ]),

  ...grupla(4, "konvolusyon-temel", "dogrudan-hesap", "Hafta 4, Doğrudan değerlendirme", [
    {
      id: "h4-geometrik", kaynak: "original", zorluk: 1, tip: "num",
      soru: "$\\displaystyle\\sum_{n=0}^{\\infty} (0{,}5)^n$ toplamı kaçtır?",
      bosluklar: [["2"]],
      aciklama: "|a| < 1 için Σ aⁿ = 1/(1 − a) = 1/0,5 = 2.",
    },
    {
      id: "h4-geo-sonlu", kaynak: "original", zorluk: 1, tip: "num",
      soru: "$\\displaystyle\\sum_{n=0}^{3} 2^n$ toplamını $(1 - a^N)/(1 - a)$ formülüyle hesapla.",
      bosluklar: [["15"]],
      aciklama: "a = 2, N = 4: (1 − 16)/(1 − 2) = 15. Sağlama: 1 + 2 + 4 + 8 = 15.",
    },
    {
      id: "h4-ustel-basamak", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$y(n) = (0{,}5)^n u(n) * u(n)$ için y(2) kaçtır?",
      bosluklar: [["1.75"]],
      aciklama: "y(n) = Σₖ₌₀ⁿ (0,5)ᵏ. y(2) = 1 + 0,5 + 0,25 = 1,75. Formülle: (1 − 0,5³)/(1 − 0,5) = 1,75.",
    },
    {
      id: "h4-ustel-limit", zorluk: 2, tip: "num",
      soru: "$y(n) = (0{,}75)^n u(n) * u(n)$ dizisi n → ∞ iken hangi değere yaklaşır?",
      bosluklar: [["4"]],
      aciklama: "y(n) = (1 − aⁿ⁺¹)/(1 − a) → 1/(1 − a) = 1/0,25 = 4.",
    },
    {
      id: "h4-iki-ustel", kaynak: "original", zorluk: 3, tip: "mcq",
      soru: "$(1/2)^n u(n) * (1/2)^n u(n)$ konvolüsyonu nedir?",
      secenekler: ["$(n+1)(1/2)^n u(n)$", "$(1/4)^n u(n)$", "$n\\,(1/2)^n u(n)$", "$2\\,(1/2)^n u(n)$"],
      dogru: 0,
      aciklama: "y(n) = Σₖ₌₀ⁿ (1/2)ᵏ (1/2)ⁿ⁻ᵏ = Σₖ₌₀ⁿ (1/2)ⁿ = (n + 1)(1/2)ⁿ. Her terim aynıdır ve n + 1 terim vardır.",
    },
    {
      id: "h4-seri-n", zorluk: 1, tip: "num",
      soru: "$\\displaystyle\\sum_{n=0}^{N-1} n$ toplamı N = 5 için kaçtır?",
      bosluklar: [["10"]],
      aciklama: "N(N − 1)/2 = 5·4/2 = 10. Sağlama: 0 + 1 + 2 + 3 + 4 = 10.",
    },
  ]),

  ...grupla(4, "konvolusyon-hesap", "konvolusyon-uzunluk", "Hafta 4, Konvolüsyonun uzunluğu", [
    {
      id: "h4-uzunluk", kaynak: "original", zorluk: 1, tip: "num",
      soru: "x(n) 7, h(n) 4 örnek uzunluğunda. y(n) = x(n) * h(n) kaç örnek uzunluğundadır?",
      bosluklar: [["10"]],
      aciklama: "L = L₁ + L₂ − 1 = 7 + 4 − 1 = 10.",
    },
    {
      id: "h4-aralik", kaynak: "original", zorluk: 2, tip: "num",
      soru: "x(n) yalnızca −2 ≤ n ≤ 5, h(n) yalnızca 1 ≤ n ≤ 4 aralığında sıfırdan farklı. y(n) = x(n) * h(n) hangi aralıkta sıfırdan farklı olabilir?\n\n____ ≤ n ≤ ____",
      bosluklar: [["-1"], ["9"]],
      aciklama: "[Mx + Mh, Nx + Nh] = [−2 + 1, 5 + 4] = [−1, 9].",
    },
    {
      id: "h4-ilk-son", kaynak: "original", zorluk: 3, tip: "num",
      soru: "x(n)'in ilk sıfırdan farklı değeri n = −3'te 2, sonuncusu n = 10'da 5'tir. y(n) = x(n) * x(n) için:\n\nilk sıfırdan farklı örneğin indisi ____ ve değeri ____ ; son sıfırdan farklı örneğin indisi ____ ve değeri ____",
      bosluklar: [["-6"], ["4"], ["20"], ["25"]],
      aciklama: "İlk örnek, ilk örneklerin çarpımıdır: n = −3 + (−3) = −6, değer 2·2 = 4. Son örnek: n = 10 + 10 = 20, değer 5·5 = 25.",
    },
    {
      id: "h4-uzunluk-tf", zorluk: 1, tip: "tf",
      soru: "Uzunluğu 5 olan iki dizinin konvolüsyonu 10 örnek uzunluğundadır.",
      dogru: false,
      aciklama: "Yanlış. L = 5 + 5 − 1 = 9.",
    },
    {
      id: "h4-sonsuz", zorluk: 2, tip: "tf",
      soru: "$(0{,}9)^n u(n)$ dizisi ile 3 örnek uzunluğunda bir dizinin konvolüsyonu sonlu uzunluktadır.",
      dogru: false,
      aciklama: "Yanlış. Dizilerden biri sonsuz uzunlukta olduğu için çıkış da sonsuz uzunluktadır; L₁ + L₂ − 1 kuralı yalnızca iki sonlu dizi için geçerlidir.",
    },
  ]),

  ...grupla(4, "konvolusyon-hesap", "grafik-yontem", "Hafta 4, Grafik yaklaşım", [
    {
      id: "h4-grafik-adim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Grafik yöntemde h(n − k) dizisi h(k)'den nasıl elde edilir?",
      secenekler: [
        "Ters çevrilir, sonra n kadar kaydırılır",
        "n kadar kaydırılır, ters çevrilmez",
        "Ters çevrilir, sonra −n kadar kaydırılır",
        "n ile çarpılır, sonra ters çevrilir",
      ],
      dogru: 0,
      aciklama: "h(k) → h(−k) (ters çevirme) → h(−(k − n)) = h(n − k): n kadar kaydırma. n > 0 ise sağa kayar.",
    },
    {
      id: "h4-grafik-yon", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Grafik yöntemde n < 0 iken ters çevrilmiş h(n − k) dizisi sola kayar.",
      dogru: true,
      aciklama: "Doğru. n > 0 sağa kayma (gecikme), n < 0 sola kayma (ilerleme) demektir.",
    },
    {
      id: "h4-grafik-hesap", zorluk: 2, tip: "num",
      soru: "x(n): n = 0..3 için 1, 3, −1, 2. h(n): n = 0..2 için 2, 1, 1. y(n) = x(n) * h(n) için:\n\ny(2) = ____ , y(3) = ____",
      bosluklar: [["2"], ["6"]],
      aciklama: "y(2) = x(0)h(2) + x(1)h(1) + x(2)h(0) = 1 + 3 − 2 = 2. y(3) = x(1)h(2) + x(2)h(1) + x(3)h(0) = 3 − 1 + 4 = 6.",
    },
    {
      id: "h4-grafik-negatif", zorluk: 3, tip: "num",
      soru: "x(n): n = −1, 0, 1 için 1, 2, 3. h(n): n = 0, 1 için 1, −1. y(n) = x(n) * h(n) dizisinin ilk sıfırdan farklı örneği hangi n'dedir ve y(2) kaçtır?\n\nilk örnek: n = ____ , y(2) = ____",
      bosluklar: [["-1"], ["-3"]],
      aciklama: "Başlangıç Mx + Mh = −1 + 0 = −1. y(2) = x(1)h(1) = 3·(−1) = −3 (n = 2'de yalnızca bu çift örtüşür).",
    },
    {
      id: "h4-tum-dizi", zorluk: 2, tip: "num",
      soru: "x(n) = δ(n) + 2δ(n − 1) ve h(n) = u(n) − u(n − 3). y(n) = x(n) * h(n) dizisini n = 0'dan başlayarak yaz.",
      bosluklar: [["[1 3 3 2]"]],
      aciklama: "h, n = 0..2'de 1'dir. y = h(n) + 2h(n − 1): n = 0..3 için 1, 1 + 2, 1 + 2, 2.",
    },
  ]),

  ...grupla(4, "konvolusyon-hesap", "kaydirma-kurali", "Hafta 4, Kaydırma kuralı", [
    {
      id: "h4-kaydirma-tum", zorluk: 2, tip: "num",
      soru: "x(n) = {2, 1, 3} ve h(n) = {1, 2, 1}, ikisi de n = 0'dan başlıyor. Kaydırma kuralıyla y(n) = x(n) * h(n) dizisini bul.",
      bosluklar: [["[2 5 7 7 3]"]],
      aciklama: "y(0) = 2·1 = 2; y(1) = 2·2 + 1·1 = 5; y(2) = 2·1 + 1·2 + 3·1 = 7; y(3) = 1·1 + 3·2 = 7; y(4) = 3·1 = 3.",
    },
    {
      id: "h4-kaydirma-ters", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Kaydırma kuralında ikinci şeride h(k) değerleri ters sırada, yani h(−k) olarak yazılır.",
      dogru: true,
      aciklama: "Doğru. x(0) ile h(0) alt alta getirilir; h(1), h(2), ... h(0)'ın solunda durur. Sonra şerit sağa kaydırılır.",
    },
    {
      id: "h4-kaydirma-sayi", zorluk: 2, tip: "num",
      soru: "Uzunlukları 4 ve 3 olan, ikisi de n = 0'dan başlayan iki dizi kaydırma kuralıyla konvolüsyona sokuluyor. y(0) dahil kaç farklı y(n) değeri hesaplanır (sıfırdan farklı olabilecekler)?",
      bosluklar: [["6"]],
      aciklama: "Çıkışın uzunluğu 4 + 3 − 1 = 6: y(0)'dan y(5)'e.",
    },
  ]),

  ...grupla(4, "konvolusyon-hesap", "polinom-carpim", "Hafta 4, Polinom çarpımı", [
    {
      id: "h4-polinom", zorluk: 1, tip: "num",
      soru: "(1 + z)(2 + 3z) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.",
      bosluklar: [["[2 5 3]"]],
      aciklama: "2 + 3z + 2z + 3z² = 2 + 5z + 3z². Bu, (1, 1) ile (2, 3) dizilerinin konvolüsyonudur.",
    },
    {
      id: "h4-polinom-2", zorluk: 2, tip: "num",
      soru: "(1 + 2z + z²)(1 − z) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.",
      bosluklar: [["[1 1 -1 -1]"]],
      aciklama: "Konvolüsyon: 1; 2 − 1 = 1; 1 − 2 = −1; −1. Yani 1 + z − z² − z³.",
    },
    {
      id: "h4-tablo-kosegen", kaynak: "original", zorluk: 2, tip: "num",
      soru: "Çarpım tablosu yönteminde x(2)·h(3) çarpımı (ikisi de n = 0'dan başlıyor) y(n)'nin hangi örneğine eklenir? n = ____",
      bosluklar: [["5"]],
      aciklama: "Hücre (i, j), y(i + j)'ye eklenir: 2 + 3 = 5. Aynı ters köşegendeki hücreler aynı çıkış örneğini oluşturur.",
    },
    {
      id: "h4-matlab-conv", zorluk: 1, tip: "fill",
      soru: "MatStudio'da iki polinomun katsayı vektörlerini çarpmak için kullanılan fonksiyon hangisidir?",
      bosluklar: [["conv"]],
      aciklama: "conv: polinom çarpımı, katsayı dizilerinin konvolüsyonudur.",
    },
  ]),

  ...grupla(4, "konvolusyon-uygulama", "olasilik-konvolusyon", "Hafta 4, Olasılık ve konvolüsyon", [
    {
      id: "h4-zar-7", kaynak: "original", zorluk: 1, tip: "num",
      soru: "İki adil zar atılıyor. Toplamın 7 olma olasılığı kaçtır?",
      bosluklar: [["1/6"]],
      aciklama: "36 eşit olasılıklı çiftten 6'sı 7 verir: 6/36 = 1/6.",
    },
    {
      id: "h4-zar-4", zorluk: 2, tip: "num",
      soru: "İki adil zarın toplamının 5 olma olasılığı kaçtır?",
      bosluklar: [["1/9"]],
      aciklama: "(1,4), (2,3), (3,2), (4,1): 4/36 = 1/9. Bu, zar pmf'sinin kendisiyle konvolüsyonunun s = 5'teki değeridir.",
    },
    {
      id: "h4-zar-sayi", zorluk: 1, tip: "num",
      soru: "İki zarın toplamı kaç farklı değer alabilir?",
      bosluklar: [["11"]],
      aciklama: "2'den 12'ye: 11 değer. Uzunluk kuralı: 6 + 6 − 1 = 11.",
    },
    {
      id: "h4-zar-uc", zorluk: 2, tip: "num",
      soru: "Üç zarın toplamı kaç farklı değer alabilir?",
      bosluklar: [["16"]],
      aciklama: "3'ten 18'e: 16 değer. İki zarın dağılımı (11 değer) bir zarla (6 değer) konvolüsyona girer: 11 + 6 − 1 = 16.",
    },
    {
      id: "h4-hileli", kaynak: "original", zorluk: 2, tip: "num",
      soru: "Hileli bir zarda 6 gelme olasılığı 0,5, diğer her yüzünki 0,1. Bu zardan iki tane atılıyor. Toplamın 12 olma olasılığı kaçtır?",
      bosluklar: [["0.25"]],
      aciklama: "12 yalnızca (6, 6) ile olur: 0,5 · 0,5 = 0,25.",
    },
    {
      id: "h4-pmf-tf", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "İki bağımsız tamsayı değerli rastgele değişkenin toplamının pmf'si, pmf'lerinin konvolüsyonudur.",
      dogru: true,
      aciklama: "Doğru. P(toplam = s) = Σᵢ p₁(i) p₂(s − i): konvolüsyon toplamı.",
    },
  ]),

  ...grupla(4, "konvolusyon-uygulama", "hareketli-ortalama", "Hafta 4, Hareketli ortalama", [
    {
      id: "h4-ma-katsayi", kaynak: "original", zorluk: 1, tip: "num",
      soru: "4 noktalı hareketli ortalamanın dürtü yanıtının her katsayısı kaçtır?",
      bosluklar: [["0.25"]],
      aciklama: "h(n) = 1/M = 1/4, n = 0..3. Katsayıların toplamı 1'dir.",
    },
    {
      id: "h4-ma-cikis", zorluk: 2, tip: "num",
      soru: "x(n): n = 0..3 için 4, 8, 6, 2. 3 noktalı hareketli ortalama y(n) = [x(n) + x(n − 1) + x(n − 2)]/3 için:\n\ny(2) = ____ , y(3) = ____",
      bosluklar: [["6"], ["16/3"]],
      aciklama: "y(2) = (6 + 8 + 4)/3 = 6. y(3) = (2 + 6 + 8)/3 = 16/3 ≈ 5,33.",
    },
    {
      id: "h4-ma-sabit", zorluk: 1, tip: "tf",
      soru: "Hareketli ortalamanın katsayılarının toplamı 1 olduğu için sabit bir giriş, başlangıçtaki geçişten sonra değişmeden çıkar.",
      dogru: true,
      aciklama: "Doğru. x(n) = c ise pencere dolduktan sonra y(n) = M · c/M = c.",
    },
    {
      id: "h4-ma-gecikme", zorluk: 2, tip: "num",
      soru: "9 noktalı nedensel hareketli ortalamanın çıkışı girişin yaklaşık kaç örnek gerisinden gelir?",
      bosluklar: [["4"]],
      aciklama: "(M − 1)/2 = (9 − 1)/2 = 4.",
    },
    {
      id: "h4-ma-buyuk", zorluk: 2, tip: "mcq",
      soru: "Hareketli ortalamada pencere uzunluğu M büyütülürse ne olur?",
      secenekler: [
        "Gürültü azalır, hızlı değişimler de yumuşar",
        "Gürültü artar, hızlı değişimler korunur",
        "Gecikme azalır, çıkış girişi daha hızlı izler",
        "Çıkışın ortalama seviyesi M kat büyür",
      ],
      dogru: 0,
      aciklama: "Daha çok örnek ortalanır: bağımsız gürültü azalır, ama sinyalin hızlı kısmı da ortalanıp silinir ve gecikme (M − 1)/2 artar. Katsayılar toplamı 1 olduğu için seviye değişmez.",
    },
  ]),

  ...grupla(4, "konvolusyon-uygulama", "korelasyon", "Hafta 4, Korelasyon", [
    {
      id: "h4-korelasyon-fark", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Korelasyon toplamı $\\sum_k x(k)\\,h(n+k)$ konvolüsyondan hangi bakımdan ayrılır?",
      secenekler: [
        "h ters çevrilmez, yalnızca kaydırılır",
        "h ters çevrilir ama kaydırılmaz",
        "Çarpımlar toplanmaz, ortalaması alınır",
        "Yalnızca sonlu dizilerde tanımlıdır",
      ],
      dogru: 0,
      aciklama: "Korelasyonda h(n + k) vardır, h(n − k) değil: dizi ters çevrilmez. Bu yüzden r_xh(n) = x(−n) * h(n).",
    },
    {
      id: "h4-otokor-0", zorluk: 2, tip: "num",
      soru: "x(0) = 2, x(1) = −1, x(2) = 3 (başka yerde 0). Otokorelasyonun n = 0 değeri $r_{xx}(0)$ kaçtır?",
      bosluklar: [["14"]],
      aciklama: "r_xx(0) = Σ x²(k) = 4 + 1 + 9 = 14: dizinin enerjisi.",
    },
    {
      id: "h4-otokor-1", zorluk: 2, tip: "num",
      soru: "x(0) = 2, x(1) = −1, x(2) = 3 (başka yerde 0). $r_{xx}(1) = \\sum_k x(k)\\,x(k+1)$ kaçtır?",
      bosluklar: [["-5"]],
      aciklama: "x(0)x(1) + x(1)x(2) = 2·(−1) + (−1)·3 = −5.",
    },
    {
      id: "h4-otokor-simetri", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Gerçel bir dizinin otokorelasyonu n = 0'a göre simetriktir: $r_{xx}(-n) = r_{xx}(n)$.",
      dogru: true,
      aciklama: "Doğru. Σ x(k)x(k − n) toplamında k yerine k + n yazılınca Σ x(k + n)x(k) = r_xx(n) çıkar.",
    },
    {
      id: "h4-otokor-ustel", kaynak: "original", zorluk: 3, tip: "num",
      soru: "$x(n) = (0{,}5)^n u(n)$ dizisinin otokorelasyonunun n = 0 değeri kaçtır?",
      bosluklar: [["4/3"]],
      aciklama: "r_xx(n) = a^|n|/(1 − a²). n = 0'da 1/(1 − 0,25) = 4/3 ≈ 1,333.",
    },
  ]),
];
