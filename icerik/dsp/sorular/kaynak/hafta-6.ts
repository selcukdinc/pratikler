// 6. hafta: frekans yanıtı ve DTFT
import { grupla, type Soru } from "./tipler.ts";

export const hafta6: Soru[] = [
  ...grupla(6, "frekans-yaniti", "ozfonksiyon", "Hafta 6, Frekans cevabı", [
    {
      id: "h6-ozfonksiyon", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "LTI bir sisteme $e^{jn\\omega_0}$ girişi verilirse çıkış, aynı ω₀ frekanslı bir karmaşık üstelin bir sabitle çarpımıdır.",
      dogru: true,
      aciklama: "Doğru. Karmaşık üsteller LTI sistemlerin özfonksiyonlarıdır; özdeğer H(e^jω₀)'dır.",
    },
    {
      id: "h6-yeni-frekans", zorluk: 1, tip: "tf",
      soru: "LTI bir sistem, girişte bulunmayan yeni bir frekans bileşeni üretebilir.",
      dogru: false,
      aciklama: "Yanlış. Her frekans bileşeni yalnızca H(e^jω) ile çarpılır; LTI sistem yeni frekans üretmez.",
    },
    {
      id: "h6-ozdeger", zorluk: 2, tip: "num",
      soru: "$h(n) = \\delta(n) - \\delta(n-1)$ sisteminin frekans yanıtının ω = 0 ve ω = π'deki büyüklükleri nedir?\n\n|H(e^j0)| = ____ , |H(e^jπ)| = ____",
      bosluklar: [["0"], ["2"]],
      aciklama: "H = 1 − e^{−jω}. ω = 0: 1 − 1 = 0. ω = π: 1 − (−1) = 2. Fark alan sistem yüksek frekansları geçirir.",
    },
  ]),

  ...grupla(6, "frekans-yaniti", "frekans-yaniti", "Hafta 6, Frekans cevabı", [
    {
      id: "h6-frekans-tanim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Birim örnek yanıtı h(n) olan LTI sistemin frekans yanıtı hangisidir?",
      secenekler: ["$\\sum_k h(k)\\,e^{-jk\\omega}$", "$\\sum_k h(k)\\,e^{jk\\omega}$", "$\\sum_k |h(k)|$", "$\\sum_k h(k)$"],
      dogru: 0,
      aciklama: "H(e^jω) = Σ h(k) e^{−jkω}: e^{jnω} girişinin özdeğeri.",
    },
    {
      id: "h6-kosinus-cikis", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$h(n) = \\tfrac{1}{2}[\\delta(n) + \\delta(n-1)]$ sistemine $x(n) = \\cos(n\\pi/3)$ veriliyor. Çıkış kosinüsünün genliği kaçtır? (3 ondalık)",
      bosluklar: [["0.866±0.005"]],
      aciklama: "H = ½(1 + e^{−jω}) = cos(ω/2)e^{−jω/2}. ω = π/3'te |H| = cos(π/6) ≈ 0,866.",
    },
  ]),

  ...grupla(6, "frekans-yaniti", "db-olcek", "Hafta 6, Frekans cevabı", [
    {
      id: "h6-db-20", zorluk: 1, tip: "num",
      soru: "Bir filtrenin büyüklüğü bir frekansta 20 dB'dir. |H| kaçtır?",
      bosluklar: [["10"]],
      aciklama: "20 log₁₀|H| = 20 → |H| = 10.",
    },
    {
      id: "h6-db-tablo", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "−6 dB büyüklük yaklaşık olarak |H|'nin hangi değerine karşılık gelir?",
      secenekler: ["0,5", "0,25", "0,1", "2"],
      dogru: 0,
      aciklama: "20 log₁₀(0,5) ≈ −6,02 dB. +6 dB yaklaşık 2'dir, −20 dB 0,1'dir.",
    },
    {
      id: "h6-db-hesap", zorluk: 2, tip: "num",
      soru: "|H| = 0,01 olan bir frekansta büyüklük kaç dB'dir?",
      bosluklar: [["-40"]],
      aciklama: "20 log₁₀(0,01) = 20 · (−2) = −40 dB.",
    },
  ]),

  ...grupla(6, "frekans-yaniti", "grup-gecikmesi", "Hafta 6, Frekans cevabı", [
    {
      id: "h6-grup-tanim", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "Fazın frekansa göre türevinin eksi işaretlisi, −dφ(ω)/dω, hangi adla anılır?",
      bosluklar: [["grup gecikmesi", "grup gecikme"]],
      aciklama: "Grup gecikmesi: o frekans civarındaki bileşenlerin kaç örnek geciktiğini söyler.",
    },
    {
      id: "h6-grup-hesap", zorluk: 1, tip: "num",
      soru: "Fazı φ(ω) = −3ω olan bir sistemin grup gecikmesi kaç örnektir?",
      bosluklar: [["3"]],
      aciklama: "τ = −dφ/dω = 3.",
    },
  ]),

  ...grupla(6, "frekans-yaniti", "frekans-simetri", "Hafta 6, Periyodiklik ve simetri", [
    {
      id: "h6-periyot", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Ayrık zamanlı bir sistemin frekans yanıtı 2π ile periyodiktir: $H(e^{j(\\omega + 2\\pi)}) = H(e^{j\\omega})$.",
      dogru: true,
      aciklama: "Doğru. n tamsayı olduğu için e^{jn(ω + 2π)} = e^{jnω}.",
    },
    {
      id: "h6-simetri", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "h(n) gerçel değerliyse frekans yanıtı için hangisi doğrudur?",
      secenekler: [
        "Büyüklük ω'nın çift, faz tek fonksiyonudur",
        "Büyüklük ω'nın tek, faz çift fonksiyonudur",
        "Büyüklük de faz da çift fonksiyondur",
        "Frekans yanıtı her zaman gerçel değerlidir",
      ],
      dogru: 0,
      aciklama: "Gerçel h için H(e^{−jω}) = H*(e^{jω}): eşlenik simetri. Büyüklük çift, faz ve grup gecikmesi tektir.",
    },
    {
      id: "h6-ustel-buyukluk", zorluk: 2, tip: "num",
      soru: "$h(n) = (0{,}75)^n u(n)$ sisteminin frekans yanıtının büyüklüğü ω = 0'da ve ω = π'de kaçtır?\n\nω = 0: ____ , ω = π: ____",
      bosluklar: [["4"], ["0.571±0.005", "4/7"]],
      aciklama: "H = 1/(1 − 0,75e^{−jω}). ω = 0: 1/0,25 = 4. ω = π: 1/1,75 ≈ 0,571.",
    },
    {
      id: "h6-en-yuksek", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Ayrık zamanda en hızlı salınan (işareti her örnekte değişen) dizi hangi ω frekansındadır?",
      secenekler: ["ω = π", "ω = 2π", "ω = π/2", "Sınır yoktur, ω büyüdükçe hızlanır"],
      dogru: 0,
      aciklama: "e^{jπn} = (−1)ⁿ. ω ile ω + 2π aynı diziyi verdiği için 0..π dışında yeni frekans yoktur.",
    },
  ]),

  ...grupla(6, "filtreler", "dogrusal-faz", "Hafta 6, Doğrusal faz", [
    {
      id: "h6-dogrusal-faz", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Aşağıdaki sistemlerden hangisinin fazı doğrusaldır?",
      secenekler: [
        "$\\delta(n) + 3\\delta(n-1) + \\delta(n-2)$",
        "$\\delta(n) + 2\\delta(n-1) + 3\\delta(n-2)$",
        "$(0{,}5)^n u(n)$",
        "$\\delta(n) - 0{,}5\\,\\delta(n-1)$",
      ],
      dogru: 0,
      aciklama: "Simetrik dürtü yanıtı: H = e^{−jω}(3 + 2cos ω), faz −ω (A gerçel). Diğerleri simetrik değildir.",
    },
    {
      id: "h6-dl-gecikme", zorluk: 2, tip: "num",
      soru: "h(n): n = 0, 1, 2, 3 için 1, 3, 3, 1 (simetrik). Bu doğrusal fazlı filtrenin grup gecikmesi kaç örnektir?",
      bosluklar: [["1.5"]],
      aciklama: "Simetrinin merkezi n = 1,5: H = e^{−j1,5ω}·A(ω), grup gecikmesi 1,5 örnek.",
    },
    {
      id: "h6-dl-bozulma", zorluk: 1, tip: "tf",
      soru: "Doğrusal fazlı bir filtre bütün frekansları aynı süre geciktirir.",
      dogru: true,
      aciklama: "Doğru. Grup gecikmesi sabittir (α); geçiş bandındaki dalga biçimi bozulmadan yalnızca kayar.",
    },
  ]),

  ...grupla(6, "filtreler", "tam-geciren", "Hafta 6, Tam geçiren filtre", [
    {
      id: "h6-tam-geciren", kaynak: "original", zorluk: 1, tip: "tf",
      soru: "Tam geçiren (allpass) bir filtrenin frekans yanıtının büyüklüğü her frekansta sabittir.",
      dogru: true,
      aciklama: "Doğru. Tanımı budur; filtre yalnızca fazı değiştirir.",
    },
    {
      id: "h6-tam-geciren-deger", zorluk: 2, tip: "num",
      soru: "$H(e^{j\\omega}) = \\dfrac{e^{-j\\omega} - 0{,}3}{1 - 0{,}3\\,e^{-j\\omega}}$ için |H(e^{j0})| kaçtır?",
      bosluklar: [["1"]],
      aciklama: "ω = 0: (1 − 0,3)/(1 − 0,3) = 1. Tam geçiren olduğu için her frekansta 1'dir.",
    },
  ]),

  ...grupla(6, "filtreler", "filtre-turleri", "Hafta 6, Frekans seçici filtreler", [
    {
      id: "h6-gecis-bandi", kaynak: "original", zorluk: 1, tip: "fill",
      soru: "İdeal bir filtrede frekans yanıtı büyüklüğünün 1 olduğu aralıklara ne ad verilir?",
      bosluklar: [["geçiş bandı", "gecis bandi", "geçiş bantları"]],
      aciklama: "Geçiş bandı; büyüklüğün 0 olduğu aralıklar durdurma bandıdır, sınırlar kesim frekanslarıdır.",
    },
    {
      id: "h6-filtre-tur", zorluk: 1, tip: "mcq",
      soru: "Bir filtrede |H(e^j0)| ≈ 0 ve |H(e^jπ)| ≈ 1. Bu hangi tür filtredir?",
      secenekler: ["Yüksek geçiren", "Alçak geçiren", "Bant durduran", "Tam geçiren"],
      dogru: 0,
      aciklama: "Düşük frekansları bastırıp yüksekleri geçiriyor: yüksek geçiren.",
    },
  ]),

  ...grupla(6, "filtreler", "sistem-baglanti-frekans", "Hafta 6, Sistemlerin birbirine bağlanması", [
    {
      id: "h6-bant-geciren", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Kesim frekansı ω₂ olan bir alçak geçiren ile kesim frekansı ω₁ olan bir yüksek geçiren (ω₁ < ω₂) kaskat bağlanıyor. Sonuç nedir?",
      secenekler: ["Bant geçiren", "Bant durduran", "Alçak geçiren", "Tam geçiren"],
      dogru: 0,
      aciklama: "Kaskatta yanıtlar çarpılır: yalnızca ω₁ ile ω₂ arasındaki frekanslar iki filtreden de geçer.",
    },
    {
      id: "h6-kaskat-db", zorluk: 1, tip: "num",
      soru: "Bir frekansta birinci filtrenin büyüklüğü −20 dB, ikincininki −6 dB. Kaskat bağlantının o frekanstaki büyüklüğü kaç dB'dir?",
      bosluklar: [["-26"]],
      aciklama: "Kaskatta yanıtlar çarpılır, dB'ler toplanır: −20 + (−6) = −26 dB.",
    },
    {
      id: "h6-paralel", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "İki filtre paralel bağlanınca eşdeğer filtrenin dB büyüklüğü, iki filtrenin dB büyüklüklerinin toplamıdır.",
      dogru: false,
      aciklama: "Yanlış. Paralelde karmaşık yanıtlar toplanır (H₁ + H₂); dB'lerin toplanması kaskat (çarpım) içindir.",
    },
    {
      id: "h6-bant-durduran", kaynak: "original", zorluk: 2, tip: "fill",
      soru: "Kesim frekansı ω₁ olan alçak geçiren ile kesim frekansı ω₂ olan yüksek geçiren (ω₂ > ω₁) ____ bağlanırsa bant durduran filtre elde edilir.",
      bosluklar: [["paralel"]],
      aciklama: "Paralel: yanıtlar toplanır, ω₁ ile ω₂ arası iki filtreden de geçemez.",
    },
  ]),

  ...grupla(6, "dtft", "dtft", "Hafta 6, DTFT", [
    {
      id: "h6-dtft-durtu", zorluk: 1, tip: "num",
      soru: "$x(n) = \\delta(n-2)$ dizisinin DTFT'sinin büyüklüğü $|X(e^{j\\omega})|$ her ω'da kaçtır?",
      bosluklar: [["1"]],
      aciklama: "X = e^{−j2ω}; büyüklüğü 1'dir.",
    },
    {
      id: "h6-dtft-ustel", kaynak: "original", zorluk: 2, tip: "num",
      soru: "$x(n) = (0{,}2)^n u(n)$ dizisinin DTFT'sinin ω = 0'daki değeri kaçtır?",
      bosluklar: [["1.25"]],
      aciklama: "X = 1/(1 − 0,2e^{−jω}); ω = 0'da 1/0,8 = 1,25.",
    },
    {
      id: "h6-dtft-hesap", zorluk: 2, tip: "num",
      soru: "$x(n) = \\delta(n) + 3\\delta(n-1)$ dizisinin DTFT'si ω = 0'da ve ω = π'de kaçtır?\n\nX(e^j0) = ____ , X(e^jπ) = ____",
      bosluklar: [["4"], ["-2"]],
      aciklama: "X = 1 + 3e^{−jω}. ω = 0: 4. ω = π: 1 − 3 = −2.",
    },
    {
      id: "h6-mutlak", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Birim basamak u(n) mutlak toplanabilir bir dizidir.",
      dogru: false,
      aciklama: "Yanlış. Σ|u(n)| sonsuzdur; bu yüzden DTFT tanımındaki toplam sıradan anlamda yakınsamaz.",
    },
    {
      id: "h6-dikdortgen", zorluk: 2, tip: "num",
      soru: "n = 0..9 için 1 olan 10 örneklik dikdörtgen dizinin DTFT'sinin ω = 0'daki değeri ve ilk sıfırının frekansı (rad) nedir?\n\nX(e^j0) = ____ , ilk sıfır ω = ____",
      bosluklar: [["10"], ["0.628±0.005", "pi/5"]],
      aciklama: "X(e^j0) = Σx(n) = N = 10. İlk sıfır 2π/N = π/5 ≈ 0,628 rad.",
    },
  ]),

  ...grupla(6, "dtft", "ters-dtft", "Hafta 6, DTFT", [
    {
      id: "h6-ters-dtft", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Ters DTFT hangisidir?",
      secenekler: [
        "$x(n) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} X(e^{j\\omega})\\,e^{jn\\omega}\\,d\\omega$",
        "$x(n) = \\int_{-\\infty}^{\\infty} X(e^{j\\omega})\\,e^{-jn\\omega}\\,d\\omega$",
        "$x(n) = \\sum_{\\omega} X(e^{j\\omega})\\,e^{-jn\\omega}$",
        "$x(n) = \\frac{1}{2\\pi}\\int_{0}^{\\pi} X(e^{j\\omega})\\,d\\omega$",
      ],
      dogru: 0,
      aciklama: "DTFT 2π ile periyodik olduğu için integral 2π uzunluğunda bir aralıkta alınır ve 1/(2π) ile ölçeklenir.",
    },
  ]),

  ...grupla(6, "dtft", "dtft-ozellik", "Hafta 6, DTFT özellikleri", [
    {
      id: "h6-kaydirma", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "x(n)'in DTFT'si X(e^jω) ise x(n − 4)'ün DTFT'si nedir?",
      secenekler: ["$e^{-j4\\omega}X(e^{j\\omega})$", "$e^{j4\\omega}X(e^{j\\omega})$", "$X(e^{j(\\omega - 4)})$", "$4X(e^{j\\omega})$"],
      dogru: 0,
      aciklama: "Zamanda kaydırma, doğrusal bir faz terimiyle çarpmaktır; büyüklük değişmez.",
    },
    {
      id: "h6-ters-cevirme", zorluk: 1, tip: "tf",
      soru: "x(−n) dizisinin DTFT'si X(e^{−jω})'dır.",
      dogru: true,
      aciklama: "Doğru. Zamanda ters çevirme, frekansta ters çevirmeye karşılık gelir.",
    },
    {
      id: "h6-modulasyon", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Bir dizi cos(nω₀) ile çarpılırsa DTFT'sine ne olur?",
      secenekler: [
        "±ω₀'a kayan iki kopya, her biri yarı yükseklikte",
        "Yalnızca +ω₀'a kayan tek kopya, aynı yükseklikte",
        "Spektrum değişmez, yalnızca fazı ω₀ kadar kayar",
        "Spektrum cos(ω₀) ile çarpılır, kaymaz",
      ],
      dogru: 0,
      aciklama: "cos(nω₀) = [e^{jnω₀} + e^{−jnω₀}]/2: ½X(e^{j(ω−ω₀)}) + ½X(e^{j(ω+ω₀)}).",
    },
  ]),

  ...grupla(6, "dtft", "konvolusyon-teoremi", "Hafta 6, DTFT özellikleri", [
    {
      id: "h6-konvolusyon-teoremi", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "y(n) = x(n) * h(n) ise Y(e^jω) nedir?",
      secenekler: ["$X(e^{j\\omega})\\,H(e^{j\\omega})$", "$X(e^{j\\omega}) + H(e^{j\\omega})$", "$X(e^{j\\omega}) * H(e^{j\\omega})$", "$X(e^{j\\omega}) / H(e^{j\\omega})$"],
      dogru: 0,
      aciklama: "Konvolüsyon teoremi: zamanda konvolüsyon, frekansta çarpım.",
    },
    {
      id: "h6-carpma", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "İki dizinin zamanda örnek bazında çarpımının DTFT'si, DTFT'lerinin çarpımıdır.",
      dogru: false,
      aciklama: "Yanlış. Zamanda çarpım frekansta (periyodik) konvolüsyona karşılık gelir; çarpım-konvolüsyon ikiliği ters yönde işler.",
    },
  ]),

  ...grupla(6, "dtft", "parseval", "Hafta 6, Parseval teoremi", [
    {
      id: "h6-parseval", zorluk: 2, tip: "num",
      soru: "x(n): n = 0, 1, 2 için 1, −2, 2 (başka yerde 0). $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |X(e^{j\\omega})|^2\\,d\\omega$ kaçtır?",
      bosluklar: [["9"]],
      aciklama: "Parseval: frekanstaki enerji zamandakine eşittir: 1 + 4 + 4 = 9.",
    },
  ]),

  ...grupla(6, "dtft", "ters-sistem", "Hafta 6, Ters sistem", [
    {
      id: "h6-ters-sistem", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Frekans yanıtı H(e^jω) olan bir sistemin ters sisteminin frekans yanıtı nedir?",
      secenekler: ["$1/H(e^{j\\omega})$", "$H(e^{-j\\omega})$", "$-H(e^{j\\omega})$", "$H^*(e^{j\\omega})$"],
      dogru: 0,
      aciklama: "h * g = δ ⇔ H·G = 1 ⇔ G = 1/H.",
    },
    {
      id: "h6-ters-hesap", zorluk: 3, tip: "num",
      soru: "$h(n) = \\delta(n) - \\tfrac{1}{3}\\delta(n-1)$ sisteminin ters sistemi g(n) için g(2) kaçtır?",
      bosluklar: [["1/9"]],
      aciklama: "G = 1/(1 − ⅓e^{−jω}) ⇒ g(n) = (1/3)ⁿu(n). g(2) = 1/9.",
    },
    {
      id: "h6-ters-yok", zorluk: 2, tip: "tf",
      soru: "H(e^jω) bir frekansta sıfırsa, o sistemin kararlı bir ters sistemi yoktur.",
      dogru: true,
      aciklama: "Doğru. O frekanstaki bilgi tamamen kaybolmuştur; 1/H orada sonsuz olur.",
    },
  ]),
];
