// 7. hafta: ayrık Fourier dönüşümü (DFT)
import { grupla, type Soru } from "./tipler.ts";

export const hafta7: Soru[] = [
  ...grupla(7, "dft-temel", "dfs", "Hafta 7, Ayrık Fourier serisi", [
    {
      id: "h7-dfs-periyot", zorluk: 1, tip: "tf",
      soru: "N ile periyodik bir dizinin DFS katsayıları X̃(k) de k'ye göre N ile periyodiktir.",
      dogru: true,
      aciklama: "Doğru. e^{−j2πkn/N}, k yerine k + N konunca değişmez; bu yüzden X̃(k + N) = X̃(k).",
    },
    {
      id: "h7-dfs-kosinus", kaynak: "original", zorluk: 3, tip: "num",
      soru: "$x_a(t) = A\\cos(200\\pi t) + B\\cos(300\\pi t)$ sinyali $f_s = 1$ kHz ile örnekleniyor. Örneklenen dizinin periyodu N kaçtır? DFS tanımı $\\tilde X(k) = \\sum_{n=0}^{N-1} \\tilde x(n)\\,e^{-j2\\pi kn/N}$ ise $\\tilde X(3)$, B'nin kaç katıdır?\n\nN = ____ , X̃(3) = ____ · B",
      bosluklar: [["20"], ["10"]],
      aciklama: "x(n) = A cos(0,2πn) + B cos(0,3πn). İlk terimin periyodu 10, ikincinin 20 (0,3π = 2π·3/20); ortak periyot 20. B cos(2π·3n/20) = (B/2)(e^{j2π3n/20} + e^{−j2π3n/20}) olduğundan X̃(3) = N·B/2 = 10B.",
    },
  ]),

  ...grupla(7, "dft-temel", "dft-dtft", "Hafta 7, DFT", [
    {
      id: "h7-dft-ornek", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Sonlu uzunluklu bir dizinin N noktalı DFT katsayıları X(k), DTFT'nin hangi frekanslardaki örnekleridir?",
      secenekler: ["$\\omega_k = 2\\pi k/N$", "$\\omega_k = \\pi k/N$", "$\\omega_k = 2\\pi N/k$", "$\\omega_k = k/N$"],
      dogru: 0,
      aciklama: "X(k) = X(e^{jω}), ω = 2πk/N: 0 ile 2π arasında eşit aralıklı N frekans.",
    },
    {
      id: "h7-dft-dtft-fark", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "DTFT, ω'nın sürekli bir fonksiyonudur; DFT ise sonlu sayıda katsayıdan oluşan bir dizidir.",
      dogru: true,
      aciklama: "Doğru. DTFT her ω için bir değer verir; N noktalı DFT yalnızca N değer verir.",
    },
    {
      id: "h7-birim-cember", zorluk: 2, tip: "fill",
      soru: "DFT katsayıları, z-dönüşümü X(z)'nin z-düzleminde hangi eğri üzerinde eşit aralıklı N noktadaki değerleridir?",
      bosluklar: [["birim çember", "birim çemberi", "birim daire"]],
      aciklama: "z = e^{j2πk/N} noktaları birim çemberin üzerindedir.",
    },
  ]),

  ...grupla(7, "dft-temel", "dft-hesap", "Hafta 7, DFT", [
    {
      id: "h7-dft-delta", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$x(n) = \\delta(n) + 3\\delta(n-4)$ dizisinin 8 noktalı DFT'sinde X(0) ve X(3) kaçtır?\n\nX(0) = ____ , X(3) = ____",
      bosluklar: [["4"], ["-2"]],
      aciklama: "X(k) = 1 + 3e^{−j2π·4k/8} = 1 + 3(−1)^k. X(0) = 4, X(3) = 1 − 3 = −2.",
    },
    {
      id: "h7-dft-4nokta", zorluk: 2, tip: "num",
      soru: "n = 0..3 için x(n) = 1, 2, 0, 1 dizisinin 4 noktalı DFT'sinde X(0) ve X(2) kaçtır?\n\nX(0) = ____ , X(2) = ____",
      bosluklar: [["4"], ["-2"]],
      aciklama: "X(0) = Σ x(n) = 4. X(2) = Σ x(n)(−1)^n = 1 − 2 + 0 − 1 = −2.",
    },
    {
      id: "h7-w-deger", zorluk: 1, tip: "mcq",
      soru: "$W_4 = e^{-j2\\pi/4}$ kaçtır?",
      secenekler: ["−j", "j", "−1", "1"],
      dogru: 0,
      aciklama: "e^{−jπ/2} = cos(π/2) − j sin(π/2) = −j.",
    },
    {
      id: "h7-dft-islem", zorluk: 2, tip: "mcq",
      soru: "N noktalı DFT tanımdan doğrudan hesaplanırsa yaklaşık kaç karmaşık çarpma gerekir?",
      secenekler: ["$N^2$", "$N\\log_2 N$", "$N$", "$2N$"],
      dogru: 0,
      aciklama: "N katsayının her biri N terimli bir toplamdır: N·N = N² çarpma. FFT bunu N log₂N mertebesine indirir.",
    },
  ]),

  ...grupla(7, "dft-temel", "ters-dft", "Hafta 7, DFT", [
    {
      id: "h7-ters-dft", kaynak: "original", zorluk: 3, tip: "num",
      soru: "8 noktalı X(k), k = 0 için 5, k = 1..7 için 1'dir. Ters DFT x(n)'in x(0) ve x(1) değerleri nedir?\n\nx(0) = ____ , x(1) = ____",
      bosluklar: [["1.5"], ["0.5"]],
      aciklama: "X(k) = 1 + 4δ(k). Sabit 1'in ters DFT'si δ(n), 4δ(k)'nın ters DFT'si 4/8 = 0,5 (her n için). x(n) = δ(n) + 0,5: x(0) = 1,5, x(1) = 0,5.",
    },
    {
      id: "h7-ters-formul", zorluk: 1, tip: "mcq",
      soru: "N noktalı ters DFT formülü hangisidir?",
      secenekler: [
        "$x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} X(k)\\,e^{j2\\pi kn/N}$",
        "$x(n) = \\sum_{k=0}^{N-1} X(k)\\,e^{-j2\\pi kn/N}$",
        "$x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} X(k)\\,e^{-j2\\pi kn/N}$",
        "$x(n) = N\\sum_{k=0}^{N-1} X(k)\\,e^{j2\\pi kn/N}$",
      ],
      dogru: 0,
      aciklama: "Ters dönüşümde üssün işareti artıdır ve önde 1/N çarpanı vardır.",
    },
    {
      id: "h7-ters-sabit", zorluk: 2, tip: "num",
      soru: "6 noktalı X(k) her k için 6'dır. Ters DFT'nin x(0) ve x(3) değerleri nedir?\n\nx(0) = ____ , x(3) = ____",
      bosluklar: [["6"], ["0"]],
      aciklama: "Sabit DFT'nin ters dönüşümü dürtüdür: x(n) = 6δ(n).",
    },
  ]),

  ...grupla(7, "dft-temel", "dft-frekans", "Hafta 7, DFT", [
    {
      id: "h7-k-frekans", zorluk: 2, tip: "num",
      soru: "fs = 8000 Hz ile örneklenmiş bir sinyalin 256 noktalı DFT'sinde k = 32 kaç Hz'e karşılık gelir?",
      bosluklar: [["1000"]],
      aciklama: "f_k = k·fs/N = 32·8000/256 = 1000 Hz.",
    },
    {
      id: "h7-cozunurluk", zorluk: 1, tip: "num",
      soru: "fs = 1000 Hz, N = 200 noktalı DFT'de komşu iki katsayı arasındaki frekans aralığı kaç Hz'dir?",
      bosluklar: [["5"]],
      aciklama: "Δf = fs/N = 1000/200 = 5 Hz.",
    },
    {
      id: "h7-k-omega", zorluk: 1, tip: "mcq",
      soru: "16 noktalı DFT'de k = 4 katsayısı hangi ω frekansına karşılık gelir?",
      secenekler: ["π/2", "π/4", "π/8", "2π"],
      dogru: 0,
      aciklama: "ω = 2πk/N = 2π·4/16 = π/2.",
    },
    {
      id: "h7-ust-yari", zorluk: 2, tip: "tf",
      soru: "Gerçel bir dizinin N noktalı DFT'sinde N/2'den büyük k indisleri negatif frekanslara karşılık gelir.",
      dogru: true,
      aciklama: "Doğru. DFT 2π ile periyodiktir; π < ω_k < 2π aralığı −π < ω < 0 ile aynıdır.",
    },
  ]),

  ...grupla(7, "dft-temel", "sifir-doldurma", "Hafta 7, DFT", [
    {
      id: "h7-sifir-doldurma", zorluk: 2, tip: "tf",
      soru: "Sıfır doldurma DFT'nin gerçek frekans çözünürlüğünü artırır; birbirine çok yakın iki sinüsü ayırmayı sağlar.",
      dogru: false,
      aciklama: "Yanlış. Sıfır doldurma aynı DTFT'den daha sık örnek alır; yeni bilgi eklemez. Yakın frekansları ayırmak için daha uzun kayıt gerekir.",
    },
    {
      id: "h7-sifir-ornek", zorluk: 2, tip: "num",
      soru: "$x(n) = \\delta(n) + \\delta(n-1)$ dizisi 4 noktaya sıfırla dolduruluyor. 4 noktalı DFT'de |X(1)| ve X(2) kaçtır? (3 ondalık)\n\n|X(1)| = ____ , X(2) = ____",
      bosluklar: [["1.414±0.005", "sqrt(2)"], ["0"]],
      aciklama: "X(k) = 1 + (−j)^k. X(1) = 1 − j, |X(1)| = √2 ≈ 1,414. X(2) = 1 − 1 = 0.",
    },
    {
      id: "h7-sifir-amac", zorluk: 1, tip: "mcq",
      soru: "Bir dizinin sonuna sıfır ekleyip daha uzun DFT almanın etkisi nedir?",
      secenekler: [
        "Aynı DTFT'den daha sık örnek alınır",
        "Diziye yeni frekans bileşenleri eklenir",
        "Dizinin enerjisi sıfır sayısı kadar artar",
        "DTFT'nin ana lobu daralır ve keskinleşir",
      ],
      dogru: 0,
      aciklama: "Sıfırlar DTFT'yi değiştirmez; yalnızca örnek aralığı 2π/N küçülür.",
    },
  ]),

  ...grupla(7, "dft-ozellikleri", "dft-ozellik", "Hafta 7, DFT özellikleri", [
    {
      id: "h7-x0-toplam", zorluk: 1, tip: "num",
      soru: "n = 0..4 için x(n) = 2, −1, 3, 0, 4 dizisinin 5 noktalı DFT'sinde X(0) kaçtır?",
      bosluklar: [["8"]],
      aciklama: "X(0) = Σ x(n) = 2 − 1 + 3 + 0 + 4 = 8.",
    },
    {
      id: "h7-dogrusallik-uzunluk", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "x₁(n) 4, x₂(n) 6 örnekliktir. DFT'nin doğrusallık özelliğini kullanmak için ne yapılır?",
      secenekler: [
        "x₁'in sonuna 2 sıfır eklenir; 6 noktalı DFT'ler alınır",
        "x₂'nin son 2 örneği atılır; 4 noktalı DFT'ler alınır",
        "x₁'in başına 2 sıfır eklenir; 10 noktalı DFT'ler alınır",
        "Diziler çarpılır; çarpımın 6 noktalı DFT'si alınır",
      ],
      dogru: 0,
      aciklama: "DFT'ler aynı uzunlukta olmalı: kısa dizi uzun olanın boyuna sıfırla doldurulur.",
    },
    {
      id: "h7-parseval-dft", zorluk: 2, tip: "num",
      soru: "n = 0..3 için x(n) = 1, −1, 2, 0. 4 noktalı DFT için $\\sum_{k=0}^{3} |X(k)|^2$ kaçtır?",
      bosluklar: [["24"]],
      aciklama: "DFT için Parseval: Σ|x(n)|² = (1/N) Σ|X(k)|². Σ|x|² = 1 + 1 + 4 = 6, Σ|X|² = 4·6 = 24.",
    },
  ]),

  ...grupla(7, "dft-ozellikleri", "dft-simetri", "Hafta 7, DFT özellikleri", [
    {
      id: "h7-simetri-gercel", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "x(n) gerçel değerli ise N noktalı DFT'si X(k) için hangisi doğrudur?",
      secenekler: ["$X(N-k) = X^*(k)$", "$X(N-k) = -X^*(k)$", "$X(k) = X^*(k)$", "$X(N-k) = 0$"],
      dogru: 0,
      aciklama: "Gerçel dizinin DFT'si eşlenik simetriktir. X(k) her zaman gerçel değildir; yalnızca dizi gerçel ve çiftse gerçeldir.",
    },
    {
      id: "h7-esl-simetri", zorluk: 2, tip: "num",
      soru: "Gerçel bir dizinin 8 noktalı DFT'sinde X(1) = 2 − 3j. X(7)'nin gerçel ve sanal kısımları nedir?\n\nRe X(7) = ____ , Im X(7) = ____",
      bosluklar: [["2"], ["3"]],
      aciklama: "X(7) = X(8 − 1) = X*(1) = 2 + 3j.",
    },
    {
      id: "h7-xn2", zorluk: 2, tip: "tf",
      soru: "N çift ve x(n) gerçel ise X(N/2) her zaman gerçeldir.",
      dogru: true,
      aciklama: "Doğru. X(N/2) = Σ x(n)(−1)^n: gerçel sayıların işaretli toplamı. Eşlenik simetri de X(N/2) = X*(N/2) verir.",
    },
    {
      id: "h7-sanal-dizi", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "x(n) saf sanal ise X(k) eşlenik antisimetriktir: X(N − k) = −X*(k).",
      dogru: true,
      aciklama: "Doğru. x = j·g (g gerçel) için X = j·G ve G eşlenik simetrik olduğundan X(N − k) = jG*(k) = −X*(k).",
    },
  ]),

  ...grupla(7, "dft-ozellikleri", "dairesel-kaydirma", "Hafta 7, Dairesel kaydırma", [
    {
      id: "h7-modulo", zorluk: 1, tip: "num",
      soru: "$((n))_N$, n'nin N'ye göre modülosudur (0..N − 1 arasında). $((-3))_8$ ve $((11))_8$ kaçtır?\n\n((−3))₈ = ____ , ((11))₈ = ____",
      bosluklar: [["5"], ["3"]],
      aciklama: "−3 = −1·8 + 5 → 5. 11 = 1·8 + 3 → 3.",
    },
    {
      id: "h7-dairesel-kaydir", zorluk: 2, tip: "num",
      soru: "x(n) = [5 1 0 2] (n = 0..3). $y(n) = x((n-2))_4$ dizisini yaz.",
      bosluklar: [["[0 2 5 1]"]],
      aciklama: "y(0) = x(2) = 0, y(1) = x(3) = 2, y(2) = x(0) = 5, y(3) = x(1) = 1. Sondaki iki örnek başa geçer.",
    },
    {
      id: "h7-kaydirma-dft", zorluk: 2, tip: "mcq",
      soru: "$W_N = e^{-j2\\pi/N}$ olmak üzere $x((n-n_0))_N$ dizisinin N noktalı DFT'si hangisidir?",
      secenekler: ["$W_N^{kn_0}X(k)$", "$W_N^{-kn_0}X(k)$", "$X((k-n_0))_N$", "$X(k) + n_0$"],
      dogru: 0,
      aciklama: "Zamanda dairesel kaydırma, frekansta e^{−j2πkn₀/N} = W_N^{kn₀} ile çarpmadır. Frekansta kaydırma ise zamanda karmaşık üstelle çarpmaya karşılık gelir.",
    },
    {
      id: "h7-kaydirma-buyukluk", zorluk: 1, tip: "tf",
      soru: "Bir dizinin dairesel olarak kaydırılması DFT'sinin büyüklüğünü değiştirmez.",
      dogru: true,
      aciklama: "Doğru. |W_N^{kn₀}| = 1; yalnızca faz değişir.",
    },
  ]),

  ...grupla(7, "dairesel-konvolusyon", "dairesel-konv", "Hafta 7, Dairesel konvolüsyon", [
    {
      id: "h7-dairesel-hesap", kaynak: "original", zorluk: 3, tip: "num",
      soru: "x(n) = [2 1 0 1] ve h(n) = [1 2 0 1] (ikisi de n = 0..3). 4 noktalı dairesel konvolüsyon y(n)'i yaz.",
      bosluklar: [["[5 5 3 3]"]],
      aciklama: "y(n) = Σ h(m) x((n − m))₄ = x(n) + 2x((n − 1))₄ + x((n − 3))₄. y(0) = 2 + 2 + 1 = 5, y(1) = 1 + 4 + 0 = 5, y(2) = 0 + 2 + 1 = 3, y(3) = 1 + 0 + 2 = 3.",
    },
    {
      id: "h7-dairesel-periyodik", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "İki sonlu dizinin N noktalı dairesel konvolüsyonu, periyodik uzantılarının periyodik konvolüsyonunun bir periyoduna eşittir.",
      dogru: true,
      aciklama: "Doğru. Dairesel konvolüsyon, periyodik konvolüsyonun 0..N − 1 aralığındaki parçasıdır.",
    },
    {
      id: "h7-dairesel-dft", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "h(n) ve x(n) N örnekliktir. Y(k) = H(k)X(k) çarpımının ters DFT'si nedir?",
      secenekler: [
        "h(n) ile x(n)'in N noktalı dairesel konvolüsyonu",
        "h(n) ile x(n)'in doğrusal konvolüsyonu",
        "h(n) ile x(n)'in çapraz korelasyonu",
        "h(n) ile x(n)'in örnek bazında çarpımı",
      ],
      dogru: 0,
      aciklama: "DFT'lerin çarpımı dairesel konvolüsyona karşılık gelir; doğrusal konvolüsyon için sıfır doldurmak gerekir.",
    },
  ]),

  ...grupla(7, "dairesel-konvolusyon", "dairesel-dogrusal", "Hafta 7, Dairesel ve doğrusal konvolüsyon", [
    {
      id: "h7-uzunluk-n", zorluk: 1, tip: "num",
      soru: "x(n) 12, h(n) 5 örnekliktir. N noktalı dairesel konvolüsyonun doğrusal konvolüsyona eşit olması için en küçük N kaçtır?",
      bosluklar: [["16"]],
      aciklama: "N ≥ N₁ + N₂ − 1 = 12 + 5 − 1 = 16.",
    },
    {
      id: "h7-ortusme-hesap", kaynak: "original", zorluk: 2, tip: "num",
      soru: "İki dizinin doğrusal konvolüsyonu n = 0..5 için y(n) = [2 1 0 3 1 4] çıkmıştır. Aynı iki dizinin 4 noktalı dairesel konvolüsyonunu yaz.",
      bosluklar: [["[3 5 0 3]"]],
      aciklama: "y_c(n) = y(n) + y(n + 4): y_c(0) = 2 + 1 = 3, y_c(1) = 1 + 4 = 5, y_c(2) = 0, y_c(3) = 3.",
    },
    {
      id: "h7-dairesel-esit", zorluk: 1, tip: "tf",
      soru: "N ≥ N₁ + N₂ − 1 seçilirse N noktalı dairesel konvolüsyon doğrusal konvolüsyona eşit olur.",
      dogru: true,
      aciklama: "Doğru. Doğrusal sonuç N örneğe sığar; başa katlanacak örnek kalmaz.",
    },
    {
      id: "h7-zaman-ortusme", zorluk: 2, tip: "mcq",
      soru: "N, N₁ + N₂ − 1'den küçük seçilirse dairesel konvolüsyonda ne olur?",
      secenekler: [
        "Doğrusal sonucun taşan örnekleri başa eklenir",
        "Doğrusal sonucun taşan örnekleri atılır",
        "Sonuç sıfırla doldurularak uzatılır",
        "Sonuç ters çevrilerek yazılır",
      ],
      dogru: 0,
      aciklama: "y_c(n) = Σ_r y(n + rN): N'den sonraki örnekler başa katlanıp toplanır (zamanda örtüşme).",
    },
  ]),

  ...grupla(7, "dairesel-konvolusyon", "dft-ile-konvolusyon", "Hafta 7, DFT ile doğrusal konvolüsyon", [
    {
      id: "h7-dft-adimlar", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "DFT ile doğrusal konvolüsyon hesaplanırken ilk adım hangisidir?",
      secenekler: [
        "Dizileri N ≥ N₁ + N₂ − 1 boyuna sıfırla doldurmak",
        "İki dizinin DFT'lerini örnek bazında çarpmak",
        "Çarpımın ters DFT'sini alıp sonucu yazmak",
        "Sonucun ilk N₁ − 1 örneğini atıp saklamak",
      ],
      dogru: 0,
      aciklama: "Sıra: sıfır doldur, DFT al, çarp, ters DFT al.",
    },
    {
      id: "h7-fft-neden", zorluk: 1, tip: "tf",
      soru: "DFT'ler verimli bir algoritmayla hesaplanırsa DFT ile konvolüsyon, uzun dizilerde konvolüsyon toplamını doğrudan hesaplamaktan daha az işlem gerektirebilir.",
      dogru: true,
      aciklama: "Doğru. FFT ile DFT'ler N log₂N mertebesinde hesaplanır; doğrudan konvolüsyon ise N₁N₂ çarpma ister.",
    },
  ]),

  ...grupla(7, "dairesel-konvolusyon", "ortusme-ekleme", "Hafta 7, Örtüşme-ekleme", [
    {
      id: "h7-oa-ad", zorluk: 1, tip: "fill",
      soru: "Uzun giriş örtüşmeyen M örneklik bloklara bölünür; her blok filtreyle konvolüsyona girer ve komşu çıkışların örtüşen örnekleri toplanır. Bu blok konvolüsyon yönteminin adı nedir?",
      bosluklar: [["örtüşme-ekleme", "örtüşme ekleme", "overlap-add"]],
      aciklama: "Örtüşme-ekleme: çıkış blokları L − 1 örnek örtüşür ve bu örnekler toplanır.",
    },
    {
      id: "h7-oa-uzunluk", zorluk: 2, tip: "num",
      soru: "Örtüşme-eklemede filtre L = 5, giriş blokları M = 20 örnekliktir. Her bloğun çıkış uzunluğu N ve komşu çıkışların örtüşen örnek sayısı kaçtır?\n\nN = ____ , örtüşen = ____",
      bosluklar: [["24"], ["4"]],
      aciklama: "N = L + M − 1 = 24. Örtüşme N − M = L − 1 = 4.",
    },
    {
      id: "h7-oa-hesap", kaynak: "original", zorluk: 3, tip: "num",
      soru: "8 örneklik x(n), 3 örneklik h(n) ile konvolüsyona giriyor. x iki 4 örneklik bloğa bölünüp her blok h ile 6 noktalı dairesel konvolüsyona sokuluyor: y₁(n) = [1 2 0 −1 3 1], y₂(n) = [2 −1 1 0 4 −2]. Tüm çıkışın y(4) ve y(5) değerleri nedir?\n\ny(4) = ____ , y(5) = ____",
      bosluklar: [["5"], ["0"]],
      aciklama: "y(n) = y₁(n) + y₂(n − 4). y(4) = y₁(4) + y₂(0) = 3 + 2 = 5, y(5) = y₁(5) + y₂(1) = 1 − 1 = 0.",
    },
  ]),

  ...grupla(7, "dairesel-konvolusyon", "ortusme-kaydetme", "Hafta 7, Örtüşme-kaydetme", [
    {
      id: "h7-os-atilan", zorluk: 2, tip: "num",
      soru: "Örtüşme-kaydetmede filtre L = 4 örnek, dairesel konvolüsyon N = 16 noktalıdır. Her bloğun çıkışından kaç örnek atılır, kaç örnek kaydedilir?\n\natılan = ____ , kaydedilen = ____",
      bosluklar: [["3"], ["13"]],
      aciklama: "İlk L − 1 = 3 örnek zamanda örtüşmeyle bozulur ve atılır; son N − L + 1 = 13 örnek kaydedilir.",
    },
    {
      id: "h7-os-tf", zorluk: 1, tip: "tf",
      soru: "Örtüşme-kaydetmede her dairesel konvolüsyonun son L − 1 örneği atılır.",
      dogru: false,
      aciklama: "Yanlış. Bozulan ve atılan ilk L − 1 örnektir; son N − L + 1 örnek doğrusal konvolüsyonla aynıdır.",
    },
    {
      id: "h7-os-fark", zorluk: 2, tip: "mcq",
      soru: "Örtüşme-ekleme ile örtüşme-kaydetme yöntemlerinin giriş bloklarıyla ilgili farkı nedir?",
      secenekler: [
        "Ekleme: bloklar örtüşmez; kaydetme: L − 1 örnek örtüşür",
        "Ekleme: L − 1 örnek örtüşür; kaydetme: bloklar örtüşmez",
        "İkisinde de bloklar örtüşmez; yalnız DFT boyu farklı",
        "İkisinde de bloklar örtüşür; yalnız filtre boyu farklı",
      ],
      dogru: 0,
      aciklama: "Örtüşme-eklemede örtüşen kısım çıkıştadır ve toplanır; örtüşme-kaydetmede girişteki bloklar L − 1 örnek örtüşür ve bozuk çıkış örnekleri atılır.",
    },
  ]),
];
