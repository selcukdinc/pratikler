// 8. hafta: hızlı Fourier dönüşümü (FFT)
import { grupla, type Soru } from "./tipler.ts";

export const hafta8: Soru[] = [
  ...grupla(8, "fft-temel", "fft-islem-yuku", "Hafta 8, FFT", [
    {
      id: "h8-dft-carpma", zorluk: 1, tip: "num",
      soru: "256 noktalı bir DFT tanımdan doğrudan hesaplanırsa kaç karmaşık çarpma gerekir?",
      bosluklar: [["65536"]],
      aciklama: "N² = 256² = 65536.",
    },
    {
      id: "h8-fft-carpma", zorluk: 2, tip: "num",
      soru: "256 noktalı radix-2 FFT kaç karmaşık çarpma gerektirir?",
      bosluklar: [["1024"]],
      aciklama: "(N/2)·log₂N = 128 · 8 = 1024.",
    },
    {
      id: "h8-sure", kaynak: "original", zorluk: 2, tip: "num",
      soru: "Bir karmaşık çarpma 1 µs sürüyor ve hesap süresini yalnızca çarpmalar belirliyor. 2048 noktalı DFT doğrudan kaç saniyede, radix-2 FFT ile kaç milisaniyede hesaplanır? (2 ondalık)\n\ndoğrudan = ____ s , FFT = ____ ms",
      bosluklar: [["4.19±0.01"], ["11.26±0.01"]],
      aciklama: "Doğrudan: 2048² = 4 194 304 µs ≈ 4,19 s. FFT: (2048/2)·11 = 11 264 µs ≈ 11,26 ms.",
    },
    {
      id: "h8-ikiye-bolme", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "N noktalı bir DFT iki adet N/2 noktalı DFT'ye bölünürse çarpma sayısı yaklaşık ne olur?",
      secenekler: ["$N^2/2$", "$N^2/4$", "$2N^2$", "$N\\log_2 N$"],
      dogru: 0,
      aciklama: "2·(N/2)² = N²/2: tek bölmeyle iş yarıya iner. Bölmeyi log₂N kez sürdürmek FFT'yi verir.",
    },
    {
      id: "h8-hiz-orani", zorluk: 2, tip: "num",
      soru: "N = 1024 için doğrudan DFT'nin çarpma sayısı, radix-2 FFT'ninkinin kaç katıdır? (1 ondalık)",
      bosluklar: [["204.8±0.5"]],
      aciklama: "N² / ((N/2)·log₂N) = 1 048 576 / 5120 = 204,8.",
    },
    {
      id: "h8-fft-ayni", zorluk: 1, tip: "tf",
      soru: "FFT, DFT'den farklı bir dönüşümdür ve sonuçları DFT'nin yaklaşık değerleridir.",
      dogru: false,
      aciklama: "Yanlış. FFT, DFT'yi hesaplayan hızlı bir algoritmadır; sonuç (yuvarlama hataları dışında) aynı DFT'dir.",
    },
  ]),

  ...grupla(8, "fft-temel", "zamanda-seyreltme", "Hafta 8, Zamanda seyreltmeli FFT", [
    {
      id: "h8-dit-tanim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Radix-2 zamanda seyreltmeli FFT'nin ilk adımında x(n) nasıl ikiye ayrılır?",
      secenekler: ["Çift ve tek indisli örneklere", "İlk yarı ve ikinci yarıya", "Pozitif ve negatif örneklere", "Gerçel ve sanal kısımlarına"],
      dogru: 0,
      aciklama: "g(n) = x(2n) ve h(n) = x(2n + 1). İlk yarı/ikinci yarı ayrımı frekansta seyreltmedir.",
    },
    {
      id: "h8-dit-formul", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "G(k) ve H(k), çift ve tek indisli dizilerin N/2 noktalı DFT'leridir. X(k) hangisidir?",
      secenekler: ["$G(k) + W_N^k\\,H(k)$", "$G(k) + H(k)$", "$W_N^k\\,G(k) + H(k)$", "$G(k)\\,H(k)$"],
      dogru: 0,
      aciklama: "Tek indisli terimlerde $W_N^{(2n+1)k} = W_N^k W_{N/2}^{nk}$ olduğundan H(k) önüne $W_N^k$ gelir.",
    },
    {
      id: "h8-dit-ikinci-yari", zorluk: 2, tip: "num",
      soru: "8 noktalı DIT FFT'de G(0) = 5 ve H(0) = 2. X(0) ve X(4) kaçtır?\n\nX(0) = ____ , X(4) = ____",
      bosluklar: [["7"], ["3"]],
      aciklama: "X(k) = G(k) + W₈ᵏH(k), X(k + 4) = G(k) − W₈ᵏH(k). k = 0'da W = 1: X(0) = 7, X(4) = 3.",
    },
    {
      id: "h8-dit-g-dizi", zorluk: 1, tip: "num",
      soru: "n = 0..7 için x(n) = 3, 1, 4, 1, 5, 9, 2, 6. Zamanda seyreltmenin çift indisli dizisi g(n) = x(2n)'i yaz.",
      bosluklar: [["[3 4 5 2]"]],
      aciklama: "x(0), x(2), x(4), x(6) = 3, 4, 5, 2.",
    },
    {
      id: "h8-dit-2kuvvet", zorluk: 1, tip: "tf",
      soru: "Radix-2 FFT, dizi uzunluğu N 2'nin bir kuvveti olduğunda doğrudan uygulanabilir.",
      dogru: true,
      aciklama: "Doğru. Her adımda ikiye bölünebilmesi için N = 2^v olmalıdır; değilse sıfır doldurulur ya da karma N algoritması kullanılır.",
    },
  ]),

  ...grupla(8, "fft-temel", "bolum-carpani", "Hafta 8, Zamanda seyreltmeli FFT", [
    {
      id: "h8-w-yarim", zorluk: 1, tip: "mcq",
      soru: "$W_N = e^{-j2\\pi/N}$ için $W_N^{k+N/2}$ neye eşittir?",
      secenekler: ["$-W_N^k$", "$W_N^k$", "$jW_N^k$", "$1/W_N^k$"],
      dogru: 0,
      aciklama: "$W_N^{N/2} = e^{-j\\pi} = -1$. Kelebeğin alt kolu bu yüzden yalnızca işaret değiştirir.",
    },
    {
      id: "h8-w-kare", zorluk: 1, tip: "tf",
      soru: "$W_N^2 = W_{N/2}$ eşitliği doğrudur.",
      dogru: true,
      aciklama: "Doğru. e^{−j2π·2/N} = e^{−j2π/(N/2)}. Çift indisli terimlerin N/2 noktalı DFT olmasını sağlayan budur.",
    },
    {
      id: "h8-w8-deger", zorluk: 2, tip: "num",
      soru: "$W_8^1$'in gerçel ve sanal kısımları nedir? (3 ondalık)\n\nRe = ____ , Im = ____",
      bosluklar: [["0.707±0.005"], ["-0.707±0.005"]],
      aciklama: "W₈ = e^{−jπ/4} = cos(π/4) − j sin(π/4) ≈ 0,707 − 0,707j.",
    },
    {
      id: "h8-bolum-carpani-ad", zorluk: 1, tip: "fill",
      soru: "FFT akış diyagramında kelebeklerin bir girdisini çarpan $W_N^r$ katsayılarına ne ad verilir?",
      bosluklar: [["bölüm çarpanı", "bölüm çarpanları", "twiddle", "twiddle factor"]],
      aciklama: "Bölüm çarpanı (twiddle factor): birim çember üzerindeki karmaşık üstel.",
    },
  ]),

  ...grupla(8, "fft-temel", "kelebek", "Hafta 8, Kelebek", [
    {
      id: "h8-kelebek-hesap", zorluk: 2, tip: "num",
      soru: "Sadeleştirilmiş kelebekte üst çıkış A = a + W·b, alt çıkış B = a − W·b'dir. a = 5, b = 2 ve W = $W_4^2$ ise A ve B kaçtır?\n\nA = ____ , B = ____",
      bosluklar: [["3"], ["7"]],
      aciklama: "W₄² = e^{−jπ} = −1. A = 5 − 2 = 3, B = 5 + 2 = 7.",
    },
    {
      id: "h8-iki-nokta", kaynak: "original", zorluk: 1, tip: "num",
      soru: "q(0) = 4, q(1) = −1 dizisinin 2 noktalı DFT'si nedir?\n\nQ(0) = ____ , Q(1) = ____",
      bosluklar: [["3"], ["5"]],
      aciklama: "Q(0) = q(0) + q(1) = 3, Q(1) = q(0) − q(1) = 5. 2 noktalı DFT çarpmasız bir kelebektir.",
    },
    {
      id: "h8-kelebek-carpma", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Sadeleştirilmiş bir FFT kelebeği kaç karmaşık çarpma içerir?",
      secenekler: ["1", "2", "0", "4"],
      dogru: 0,
      aciklama: "Alt girdi bir kez W ile çarpılır; sonuç üst çıkışa eklenir, alt çıkıştan çıkarılır.",
    },
    {
      id: "h8-kelebek-tf", kaynak: "original", zorluk: 2, tip: "tf",
      soru: "Kelebeğin alt kolundaki $W_N^{r+N/2}$ çarpanı $-W_N^r$'ye eşit olduğu için iki çarpma yerine bir çarpma yeterlidir.",
      dogru: true,
      aciklama: "Doğru. W·b bir kez hesaplanır; alt kolda yalnızca işaret değişir.",
    },
  ]),

  ...grupla(8, "fft-akis", "fft-asama", "Hafta 8, Radix-2 FFT", [
    {
      id: "h8-asama-sayisi", zorluk: 1, tip: "num",
      soru: "64 noktalı radix-2 FFT'de kaç aşama vardır? Her aşamada kaç kelebek bulunur?\n\naşama = ____ , kelebek = ____",
      bosluklar: [["6"], ["32"]],
      aciklama: "log₂64 = 6 aşama; her aşamada N/2 = 32 kelebek.",
    },
    {
      id: "h8-toplama-sayisi", kaynak: "original", zorluk: 2, tip: "num",
      soru: "32 noktalı radix-2 FFT'de toplam kaç karmaşık toplama ve kaç karmaşık çarpma vardır?\n\ntoplama = ____ , çarpma = ____",
      bosluklar: [["160"], ["80"]],
      aciklama: "Toplama N·log₂N = 32·5 = 160, çarpma (N/2)·log₂N = 80.",
    },
    {
      id: "h8-asama-tf", zorluk: 1, tip: "tf",
      soru: "8 noktalı radix-2 FFT'nin her aşamasında 4 kelebek vardır.",
      dogru: true,
      aciklama: "Doğru. N/2 = 4 kelebek; log₂8 = 3 aşama, toplam 12 kelebek.",
    },
  ]),

  ...grupla(8, "fft-akis", "bit-ters", "Hafta 8, Radix-2 FFT", [
    {
      id: "h8-bit-ters", zorluk: 2, tip: "num",
      soru: "8 noktalı FFT'de 3 bitlik bit ters sıralama yapılıyor. n = 1 ve n = 3 indisleri hangi indislere gider?\n\n1 → ____ , 3 → ____",
      bosluklar: [["4"], ["6"]],
      aciklama: "1 = 001 → 100 = 4. 3 = 011 → 110 = 6.",
    },
    {
      id: "h8-bit-ters-16", zorluk: 2, tip: "num",
      soru: "16 noktalı FFT'de (4 bit) n = 3 indisinin bit ters karşılığı kaçtır?",
      bosluklar: [["12"]],
      aciklama: "3 = 0011 → 1100 = 12.",
    },
    {
      id: "h8-bit-ters-sira", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "8 noktalı radix-2 zamanda seyreltmeli FFT'de girişler hangi sırayla verilir?",
      secenekler: [
        "x(0) x(4) x(2) x(6) x(1) x(5) x(3) x(7)",
        "x(0) x(1) x(2) x(3) x(4) x(5) x(6) x(7)",
        "x(0) x(2) x(4) x(6) x(1) x(3) x(5) x(7)",
        "x(7) x(6) x(5) x(4) x(3) x(2) x(1) x(0)",
      ],
      dogru: 0,
      aciklama: "Bit ters sırası: 000, 100, 010, 110, 001, 101, 011, 111. Çift/tek ayrımı her aşamada tekrarlandığı için sıra yalnızca bir kez çift/tek ayırmaktan farklıdır.",
    },
    {
      id: "h8-yerinde", zorluk: 2, tip: "tf",
      soru: "Radix-2 FFT, her kelebeğin sonucunu girdilerinin bulunduğu bellek konumlarına yazarak yerinde hesaplanabilir.",
      dogru: true,
      aciklama: "Doğru. Bir kelebeğin iki çıkışı yalnızca kendi iki girdisinden hesaplanır; girdiler artık gerekmez.",
    },
  ]),

  ...grupla(8, "fft-akis", "frekansta-seyreltme", "Hafta 8, Frekansta seyreltmeli FFT", [
    {
      id: "h8-dif-tanim", kaynak: "original", zorluk: 1, tip: "mcq",
      soru: "Frekansta seyreltmeli FFT'nin ilk adımında giriş dizisi nasıl eşlenir?",
      secenekler: ["İlk yarı ile ikinci yarı", "Çift ile tek indisli örnekler", "Pozitif ile negatif örnekler", "Gerçel ile sanal kısımlar"],
      dogru: 0,
      aciklama: "x(n) ile x(n + N/2) bir kelebeğe girer; çıkışta çift ve tek indisli X(k) ayrılır.",
    },
    {
      id: "h8-dif-cift", zorluk: 2, tip: "num",
      soru: "n = 0..7 için x(n) = 2, 0, 1, 3, 1, 1, 0, 2. Frekansta seyreltmede çift indisli X(2k)'yi veren 4 noktalı DFT'nin girişi a(n) = x(n) + x(n + 4) dizisini yaz.",
      bosluklar: [["[3 1 1 5]"]],
      aciklama: "2 + 1 = 3, 0 + 1 = 1, 1 + 0 = 1, 3 + 2 = 5.",
    },
    {
      id: "h8-dif-tek", zorluk: 2, tip: "mcq",
      soru: "Frekansta seyreltmede X(2k + 1), hangi dizinin N/2 noktalı DFT'sidir?",
      secenekler: ["$[x(n) - x(n+N/2)]\\,W_N^n$", "$x(n) + x(n+N/2)$", "$[x(n) + x(n+N/2)]\\,W_N^n$", "$x(n) - x(n+N/2)$"],
      dogru: 0,
      aciklama: "Tek k'lerde ikinci yarı −1 ile girer ve fark $W_N^n$ ile çarpılır.",
    },
    {
      id: "h8-dif-cikis", zorluk: 1, tip: "tf",
      soru: "Frekansta seyreltmeli radix-2 FFT'de giriş doğal sırada, çıkış bit ters sıradadır.",
      dogru: true,
      aciklama: "Doğru. Zamanda seyreltmenin tersi: orada giriş bit ters, çıkış doğal sıradadır.",
    },
    {
      id: "h8-dit-dif-islem", zorluk: 2, tip: "tf",
      soru: "Radix-2 zamanda ve frekansta seyreltmeli FFT'lerin karmaşık çarpma sayıları aynıdır.",
      dogru: true,
      aciklama: "Doğru. İkisinde de log₂N aşama ve aşama başına N/2 çarpma vardır.",
    },
  ]),

  ...grupla(8, "fft-uygulama", "karma-n", "Hafta 8, Karma N için FFT", [
    {
      id: "h8-karma-indis", kaynak: "original", zorluk: 2, tip: "num",
      soru: "N = 15 = N₁·N₂, N₁ = 3, N₂ = 5. $n = N_2 n_1 + n_2$ dizilişinde x(11) hangi n₁ ve n₂'ye düşer?\n\nn₁ = ____ , n₂ = ____",
      bosluklar: [["2"], ["1"]],
      aciklama: "11 = 5·2 + 1: n₁ = 2, n₂ = 1.",
    },
    {
      id: "h8-karma-tablo", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "N = 15, N₁ = 3, N₂ = 5 için x(n), 5 satır ve 3 sütunluk tabloya $x(N_2 n_1 + n_2)$ biçiminde yerleştiriliyor. İlk satırda hangi örnekler vardır?",
      secenekler: ["x(0), x(5), x(10)", "x(0), x(1), x(2)", "x(0), x(3), x(6)", "x(0), x(4), x(8)"],
      dogru: 0,
      aciklama: "n₂ = 0 satırı: n₁ = 0, 1, 2 için n = 0, 5, 10.",
    },
    {
      id: "h8-karma-adimlar", kaynak: "original", zorluk: 2, tip: "mcq",
      soru: "Karma N algoritmasında tablo kurulduktan sonra adımların doğru sırası hangisidir?",
      secenekler: [
        "Satır DFT'leri, bölüm çarpanları, sütun DFT'leri",
        "Sütun DFT'leri, satır DFT'leri, bölüm çarpanları",
        "Bölüm çarpanları, sütun DFT'leri, satır DFT'leri",
        "Satır DFT'leri, sütun DFT'leri, bölüm çarpanları",
      ],
      dogru: 0,
      aciklama: "Her satırın N₁ noktalı DFT'si → $W_N^{n_2 k_1}$ ile çarpma → her sütunun N₂ noktalı DFT'si.",
    },
    {
      id: "h8-karma-k", zorluk: 2, tip: "num",
      soru: "Karma N algoritmasında çıkış indisi $k = k_1 + N_1 k_2$'dir. N₁ = 3 için k₁ = 2, k₂ = 3 hücresindeki çıkış hangi X(k)'dir?",
      bosluklar: [["11"]],
      aciklama: "k = 2 + 3·3 = 11.",
    },
    {
      id: "h8-karma-tf", zorluk: 1, tip: "tf",
      soru: "Uzunluğu 2'nin kuvveti olmayan dizilerde FFT fikri hiç kullanılamaz.",
      dogru: false,
      aciklama: "Yanlış. N = N₁·N₂ biçiminde çarpanlara ayrılabiliyorsa karma N algoritmasıyla daha küçük DFT'lere bölünür.",
    },
  ]),

  ...grupla(8, "fft-uygulama", "fft-kullanim", "Hafta 8, FFT", [
    {
      id: "h8-fft-konv", zorluk: 2, tip: "num",
      soru: "300 ve 200 örneklik iki dizinin doğrusal konvolüsyonu radix-2 FFT ile hesaplanacak. Kullanılabilecek en küçük FFT uzunluğu kaçtır?",
      bosluklar: [["512"]],
      aciklama: "N ≥ 300 + 200 − 1 = 499; 2'nin bundan büyük ilk kuvveti 512.",
    },
    {
      id: "h8-matlab-fft", zorluk: 1, tip: "mcq",
      soru: "x 10 örnekliyse MatStudio'daki ~fft(x, 16)~ ne yapar?",
      secenekler: [
        "x'i 16 örneğe sıfırla doldurup 16 noktalı DFT alır",
        "x'in ilk 16 örneğini alıp 16 noktalı DFT hesaplar",
        "x'in 10 noktalı DFT'sini 16 kez tekrar ederek yazar",
        "x'i 16 kez tekrarlayıp 160 noktalı DFT hesaplar",
      ],
      dogru: 0,
      aciklama: "İkinci bağımsız değişken DFT uzunluğudur; kısa dizi sonuna sıfır eklenerek uzatılır, uzun dizi kesilir.",
    },
    {
      id: "h8-frekans-ekseni", zorluk: 2, tip: "num",
      soru: "fs = 1024 Hz ile örneklenmiş bir sinyalin 256 noktalı FFT'sinde tepe k = 20'de. Sinüsün frekansı kaç Hz'dir?",
      bosluklar: [["80"]],
      aciklama: "f = k·fs/N = 20·1024/256 = 80 Hz.",
    },
  ]),

  ...grupla(8, "fft-uygulama", "ters-fft", "Hafta 8, FFT", [
    {
      id: "h8-ters-fft", zorluk: 2, tip: "mcq",
      soru: "Yalnızca ileri FFT yapan bir programla ters DFT nasıl hesaplanır?",
      secenekler: [
        "$x(n) = \\frac{1}{N}\\big[\\mathrm{FFT}\\{X^*(k)\\}\\big]^*$",
        "$x(n) = N\\,\\mathrm{FFT}\\{X(k)\\}$",
        "$x(n) = \\mathrm{FFT}\\{X^*(k)\\}$",
        "$x(n) = \\frac{1}{N}\\mathrm{FFT}\\{X(k)\\}$",
      ],
      dogru: 0,
      aciklama: "Eşlenik almak üssün işaretini çevirir: X*'ın FFT'si alınır, sonuç eşleniklenir ve N'ye bölünür.",
    },
    {
      id: "h8-ters-fft-tf", zorluk: 1, tip: "tf",
      soru: "Ters DFT de FFT algoritmasıyla hesaplanabilir; yalnızca bölüm çarpanlarının üssünün işareti ve 1/N çarpanı farklıdır.",
      dogru: true,
      aciklama: "Doğru. W_N yerine W_N^{−1} kullanılır ve sonuç N'ye bölünür.",
    },
  ]),
];
