// 5. hafta: Fourier analizi 1 (sinüsler, Fourier serisi, sarma makinesi)
import { grupla, type Soru } from "./tipler.ts";

export const hafta5: Soru[] = [
  ...grupla(5, "sinusler", "sinus-cember", "Hafta 5, Çember ve sinüs", [
    {
      id: "h5-cember-koordinat", zorluk: 1, tip: "num",
      soru: "Birim çember üzerinde θ = 120° açısındaki noktanın koordinatları nedir?\n\nyatay (cos θ) = ____ , dikey (sin θ) = ____",
      bosluklar: [["-0.5"], ["0.866±0.005"]],
      aciklama: "cos 120° = −cos 60° = −0,5; sin 120° = sin 60° ≈ 0,866.",
    },
    {
      id: "h5-sinus-isdusum", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Birim çember üzerinde dönen bir noktanın **dikey** izdüşümü θ'ya göre çizilirse hangi eğri çıkar?",
      secenekler: ["Sinüs", "Kosinüs", "Tanjant", "Doğru"],
      dogru: 0,
      aciklama: "Dikey koordinat sin θ'dır; yatay koordinat cos θ'yı verir.",
    },
    {
      id: "h5-cos-kayma", zorluk: 1, tip: "tf",
      soru: "cos θ = sin(θ + 90°) eşitliği her θ için doğrudur.",
      dogru: true,
      aciklama: "Doğru. Kosinüs, sinüsün 90° sola kaydırılmış halidir.",
    },
    {
      id: "h5-tur", kaynak: "original", zorluk: 1, tip: "num",
      soru: "θ = 450° açısındaki nokta, 0° ile 360° arasındaki hangi açıyla aynı yerdedir?",
      bosluklar: [["90"]],
      aciklama: "Değerler her 360°'de tekrar eder: 450° − 360° = 90°.",
    },
  ]),

  ...grupla(5, "sinusler", "sinus-parametre", "Hafta 5, Genlik, frekans ve faz", [
    {
      id: "h5-frekans-oku", zorluk: 1, tip: "num",
      soru: "$x(t) = 2\\sin(6\\pi t)$ sinyalinin frekansı kaç Hz'dir?",
      bosluklar: [["3"]],
      aciklama: "2πf = 6π, f = 3 Hz.",
    },
    {
      id: "h5-periyot", kaynak: "original", zorluk: 1, tip: "num",
      soru: "50 Hz'lik bir sinüsün periyodu kaç milisaniyedir?",
      bosluklar: [["20"]],
      aciklama: "T = 1/f = 1/50 s = 0,02 s = 20 ms.",
    },
    {
      id: "h5-faz-kayma", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$\\sin(2\\pi\\cdot 2t + \\pi/2)$ eğrisi $\\sin(2\\pi\\cdot 2t)$'ye göre kaç saniye sola kaymıştır?",
      bosluklar: [["0.125"]],
      aciklama: "Kayma φ/(2πf) = (π/2)/(4π) = 1/8 = 0,125 s.",
    },
    {
      id: "h5-genlik", zorluk: 1, tip: "tf",
      soru: "$A\\sin(2\\pi f t + \\varphi)$ sinyali −A ile +A arasında salınır.",
      dogru: true,
      aciklama: "Doğru. Sinüs −1 ile 1 arasındadır; A ile çarpılınca −A ile A arasına çıkar.",
    },
    {
      id: "h5-omega", zorluk: 1, tip: "num",
      soru: "5 Hz'lik bir sinüsün açısal frekansı ω kaç rad/s'dir?",
      bosluklar: [["31.42±0.05", "10*pi"]],
      aciklama: "ω = 2πf = 10π ≈ 31,42 rad/s.",
    },
    {
      id: "h5-faz-isaret", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "$\\sin(2\\pi f t + \\varphi)$'de φ > 0 olması eğriyi nasıl değiştirir?",
      secenekler: ["Eğriyi zamanda sola, erkene kaydırır", "Eğriyi zamanda sağa, geriye kaydırır", "Eğrinin genliğini φ kadar büyütür", "Eğrinin frekansını φ kadar artırır"],
      dogru: 0,
      aciklama: "t yerine t + φ/(2πf) yazılmış gibidir: aynı değerlere daha erken ulaşılır, eğri sola kayar.",
    },
  ]),

  ...grupla(5, "sinusler", "sinus-toplam", "Hafta 5, Sinüslerin toplamı", [
    {
      id: "h5-ayni-frekans", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Frekansları aynı, genlik ve fazları farklı iki sinüsün toplamı, aynı frekansta bir sinüstür.",
      dogru: true,
      aciklama: "Doğru. Aynı hızla dönen iki fazörün toplamı da aynı hızla döner; genlik ve faz değişir.",
    },
    {
      id: "h5-toplam-genlik", zorluk: 2, tip: "num",
      soru: "$6\\sin(2\\pi t) + 8\\cos(2\\pi t)$ toplamı tek bir sinüs olarak yazılırsa genliği kaçtır?",
      bosluklar: [["10"]],
      aciklama: "√(6² + 8²) = √100 = 10.",
    },
    {
      id: "h5-yok-etme", zorluk: 2, tip: "num",
      soru: "$\\sin(2\\pi t) + A\\sin(2\\pi t + 180°)$ toplamının her t için 0 olması için A kaç olmalıdır?",
      bosluklar: [["1"]],
      aciklama: "sin(θ + 180°) = −sin θ. Toplam (1 − A)sin(2πt); A = 1 ise sıfırdır.",
    },
    {
      id: "h5-farkli-frekans", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "$\\sin(2\\pi t) + \\sin(2\\pi\\cdot 2t)$ toplamı için hangisi doğrudur?",
      secenekler: ["Sinüs değildir, periyodu 1 s'dir", "2 Hz'lik bir sinüstür", "1,5 Hz'lik bir sinüstür", "Hiç periyodik değildir"],
      dogru: 0,
      aciklama: "Frekanslar farklı olduğu için toplam sinüs değildir. İkisi de 1 saniyede tam sayıda devir yapar (1 ve 2), bu yüzden toplam her 1 s'de tekrar eder.",
    },
    {
      id: "h5-toplam-periyot", zorluk: 2, tip: "num",
      soru: "2 Hz ve 3 Hz'lik iki sinüsün toplamının periyodu kaç saniyedir?",
      bosluklar: [["1"]],
      aciklama: "Temel frekans 1 Hz'dir (2 ve 3'ün ikisi de onun katı): her 1 s'de 2 sinüs 2, öbürü 3 devir tamamlar.",
    },
  ]),

  ...grupla(5, "fourier-serisi", "fourier-serisi", "Hafta 5, Fourier serisi", [
    {
      id: "h5-kare-harmonik", zorluk: 2, tip: "num",
      soru: "Genliği 1 olan kare dalganın Fourier serisinde 3. harmoniğin genliği kaçtır? (3 ondalık)",
      bosluklar: [["0.424±0.005", "4/(3*pi)"]],
      aciklama: "4/(πk), k = 3: 4/(3π) ≈ 0,424.",
    },
    {
      id: "h5-kare-cift", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Kare dalganın Fourier serisinde 2. harmonik bulunur.",
      dogru: false,
      aciklama: "Yanlış. Kare dalgada yalnızca tek harmonikler (1, 3, 5, ...) vardır.",
    },
    {
      id: "h5-ucgen-azalma", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Üçgen dalganın Fourier serisindeki harmonik genlikleri k ile nasıl azalır?",
      secenekler: ["1/k² ile", "1/k ile", "1/√k ile", "Hiç azalmaz"],
      dogru: 0,
      aciklama: "Üçgen dalga: 8/(π²k²). Kare dalgadaki 1/k'den çok daha hızlı azalır; üçgen daha yumuşak bir dalgadır.",
    },
    {
      id: "h5-gibbs", zorluk: 2, tip: "fill",
      soru: "Kare dalganın kısmi Fourier toplamının sıçrama noktalarının yanında hedefi yaklaşık %9 aşmasına ____ olayı denir.",
      bosluklar: [["Gibbs"]],
      aciklama: "Gibbs olayı: terim sayısı artınca aşım daralır ama yüksekliği kaybolmaz.",
    },
    {
      id: "h5-harmonik-frekans", zorluk: 1, tip: "num",
      soru: "Temel frekansı 50 Hz olan bir kare dalganın 3. harmoniği kaç Hz'dedir?",
      bosluklar: [["150"]],
      aciklama: "k. harmonik k·f₀'dadır: 3 · 50 = 150 Hz.",
    },
    {
      id: "h5-testere", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Testere dişi dalganın Fourier serisinde çift harmonikler de vardır.",
      dogru: true,
      aciklama: "Doğru. Testere dişinde bütün harmonikler 2/(πk) genlikle bulunur; yalnızca tek harmonikler kare ve üçgen dalgada vardır.",
    },
    {
      id: "h5-ucgen-katsayi", zorluk: 3, tip: "num",
      soru: "Genliği 1 olan üçgen dalganın Fourier serisinde 3. harmoniğin genliği (mutlak değer) kaçtır? (3 ondalık)",
      bosluklar: [["0.090±0.002"]],
      aciklama: "8/(π²k²), k = 3: 8/(9π²) ≈ 0,090.",
    },
  ]),

  ...grupla(5, "fourier-serisi", "spektrum", "Hafta 5, Frekans spektrumu", [
    {
      id: "h5-spektrum-surekli", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Periyodik olmayan bir sinyalin frekans spektrumu nasıldır?",
      secenekler: ["Sürekli bir eğri", "Harmoniklerde çizgiler", "Tek bir çizgi", "Her yerde sıfır"],
      dogru: 0,
      aciklama: "Periyodik olmayan sinyal bütün frekanslardaki sonsuz küçük genlikli sinüslerden oluşur; spektrumu süreklidir. Çizgili spektrum periyodik sinyallere aittir.",
    },
    {
      id: "h5-darbe-sifir", zorluk: 2, tip: "num",
      soru: "0,5 s süreli dikdörtgen darbenin spektrumunun ilk sıfırı kaç Hz'dedir?",
      bosluklar: [["2"]],
      aciklama: "İlk sıfır f = 1/τ = 1/0,5 = 2 Hz.",
    },
    {
      id: "h5-darbe-genis", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Dikdörtgen darbe kısaldıkça spektrumu daralır.",
      dogru: false,
      aciklama: "Yanlış. Darbe kısaldıkça ilk sıfır (1/τ) uzaklaşır ve spektrum genişler: zamanda dar olan frekansta geniştir.",
    },
    {
      id: "h5-ters-donusum", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Sinyalin frekans gösteriminden zaman gösterimine geri dönmeyi sağlayan işlemin adı nedir?",
      bosluklar: [["ters Fourier dönüşümü", "ters fourier", "ters Fourier dönüşümu"]],
      aciklama: "Fourier dönüşümü zamandan frekansa, ters Fourier dönüşümü frekanstan zamana götürür.",
    },
    {
      id: "h5-darbe-x0", zorluk: 2, tip: "num",
      soru: "Yüksekliği 1, süresi 2 s olan dikdörtgen darbenin Fourier dönüşümünün f = 0'daki değeri X(0) kaçtır?",
      bosluklar: [["2"]],
      aciklama: "X(0) = ∫x(t)dt, darbenin alanıdır: 1 · 2 = 2 (= τ).",
    },
  ]),

  ...grupla(5, "fourier-donusumu", "sarma-kutle-merkezi", "Hafta 5, Sarma makinesi", [
    {
      id: "h5-sarma-esit", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Bir sinüs sinyali çemberin etrafına sarılıyor. Eğrinin kütle merkezi ne zaman merkezden belirgin biçimde uzaklaşır?",
      secenekler: [
        "Sarma frekansı sinyalin frekansına eşitken",
        "Sarma frekansı çok büyükken",
        "Sarma frekansı sinyalinkinin yarısıyken",
        "Kütle merkezi hep merkezde kalır",
      ],
      dogru: 0,
      aciklama: "Frekanslar eşitken tepeler hep çemberin aynı yanına düşer; diğer frekanslarda tepeler her yana dağılır ve ortalama sıfıra yakın kalır.",
    },
    {
      id: "h5-sarma-tepe", zorluk: 1, tip: "num",
      soru: "$g(t) = 1 + \\cos(2\\pi\\cdot 4t)$ çemberin etrafına sarılıyor. f > 0 için kütle merkezinin yatay konumu hangi sarma frekansında tepe yapar?",
      bosluklar: [["4"]],
      aciklama: "Sinyalin frekansında: saniyede 4 devir.",
    },
    {
      id: "h5-kutle-deger", zorluk: 3, tip: "num",
      soru: "$g(t) = 2 + \\cos(2\\pi\\cdot 3t)$ sinyali 1 saniye boyunca sarılıyor. Kütle merkezinin yatay konumu f = 0'da ve f = 3'te kaçtır?\n\nf = 0: ____ , f = 3: ____",
      bosluklar: [["2"], ["0.5"]],
      aciklama: "f = 0'da sarma yok: kütle merkezi sinyalin ortalaması, 2. f = 3'te sabit 2 ve 6 Hz'de dönen terim tam devirlerde sıfır ortalar; cos teriminden 1/2 kalır.",
    },
    {
      id: "h5-kaydirma-tf", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "1 + cos(2π·3t) sinyalinde kütle merkezinin f = 0'daki tepesi, sinyalin yukarı kaydırılmasından (sabit bileşenden) gelir.",
      dogru: true,
      aciklama: "Doğru. Kaydırılmamış cos(2π·3t) sinyalinde f = 0'da kütle merkezi 0'dır; sabit 1 ise yalnızca f = 0'da katkı verir.",
    },
  ]),

  ...grupla(5, "fourier-donusumu", "euler-formulu", "Hafta 5, Euler formülü", [
    {
      id: "h5-euler", zorluk: 2, tip: "mcq",
      soru: "$e^{j\\pi/2}$ hangi sayıya eşittir?",
      secenekler: ["$j$", "$-1$", "$1$", "$-j$"],
      dogru: 0,
      aciklama: "e^{jθ} = cos θ + j sin θ. θ = π/2: cos = 0, sin = 1, sonuç j (birim çemberin tepesi).",
    },
    {
      id: "h5-eksi-isaret", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Fourier dönüşümündeki $e^{-j2\\pi f t}$ ifadesinde üstelin işareti neden eksidir?",
      secenekler: [
        "Sinyal çemberin etrafına saat yönünde sarıldığı için",
        "Sinyalin değerleri negatif olabildiği için",
        "Frekansın negatif olması gerektiği için",
        "Sinyalin genliğini küçültmek için",
      ],
      dogru: 0,
      aciklama: "e^{jθ} saat yönünün tersine döner; zaman sıfırdan itibaren saat yönünde sarmak için açı eksi işaretle yazılır.",
    },
    {
      id: "h5-euler-buyukluk", zorluk: 1, tip: "num",
      soru: "Her gerçel θ için $|e^{j\\theta}|$ kaçtır?",
      bosluklar: [["1"]],
      aciklama: "|cos θ + j sin θ| = √(cos²θ + sin²θ) = 1: nokta hep birim çember üzerindedir.",
    },
  ]),

  ...grupla(5, "fourier-donusumu", "fourier-donusum", "Hafta 5, Fourier dönüşümü", [
    {
      id: "h5-donusum-tepe", zorluk: 2, tip: "num",
      soru: "$g(t) = \\cos(2\\pi\\cdot 5t)$ sinyali 0 ≤ t ≤ 6 s aralığında gözleniyor. $|\\hat g(5)| = \\left|\\int_0^6 g(t)\\,e^{-j2\\pi\\cdot 5t}\\,dt\\right|$ yaklaşık kaçtır?",
      bosluklar: [["3"]],
      aciklama: "cos(2π5t)e^{−j2π5t} = 1/2 + (1/2)e^{−j2π10t}; ikinci terimin integrali 0. Sonuç 6 · 1/2 = 3 (T/2).",
    },
    {
      id: "h5-sure-tepe", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Gözlem süresi uzadıkça, Fourier dönüşümünün sinyalin frekansındaki tepesi hem yükselir hem daralır.",
      dogru: true,
      aciklama: "Doğru. Dönüşüm süreye bölünmez: tepe yaklaşık T/2 ile büyür, genişliği yaklaşık 2/T ile daralır.",
    },
    {
      id: "h5-bolme", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Fourier dönüşümü, kütle merkezi gibi gözlem süresine bölünerek hesaplanır.",
      dogru: false,
      aciklama: "Yanlış. Kütle merkezi süreye bölünür (ortalama); Fourier dönüşümü bölünmez, süreyle ölçeklenmiş haldir.",
    },
    {
      id: "h5-sinirlar", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Gerçek (sürekli) Fourier dönüşümünün integrali hangi zaman aralığını kapsar?",
      secenekler: ["−∞'dan +∞'a", "0'dan 1 s'ye", "Sinyalin bir periyodunu", "0'dan +∞'a"],
      dogru: 0,
      aciklama: "ĝ(f) = ∫₋∞^∞ g(t) e^{−j2πft} dt. Sonlu aralıkta alınan integraller, aralık sonsuza giderken bu limite yaklaşır.",
    },
  ]),

  ...grupla(5, "fourier-donusumu", "fourier-dogrusallik", "Hafta 5, Fourier dönüşümü", [
    {
      id: "h5-dogrusallik", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "2 Hz ve 3 Hz'lik iki kosinüsün toplamı olan bir sinyalin Fourier dönüşümünün büyüklüğünde ne görülür?",
      secenekler: ["2 Hz ve 3 Hz'de iki ayrı tepe", "Yalnızca 2,5 Hz'de tek bir tepe", "Yalnızca 5 Hz'de tek bir tepe", "Hiçbir frekansta tepe yok"],
      dogru: 0,
      aciklama: "Fourier dönüşümü doğrusaldır: toplamın dönüşümü dönüşümlerin toplamıdır; her bileşen kendi frekansında bir tepe verir.",
    },
    {
      id: "h5-ayristirma", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Fourier dönüşümü, aynı anda çalan iki diyapazonun karışık sesini frekans bileşenlerine ayırabilir.",
      dogru: true,
      aciklama: "Doğru. Karışık ses iki sinüsün toplamıdır; dönüşüm her birini kendi frekansında ayrı bir tepe olarak gösterir.",
    },
  ]),
];
