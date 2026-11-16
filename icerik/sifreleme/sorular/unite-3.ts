// 3. ünite (Temeller): XOR, modüler aritmetik, EBOB ve Öklid, modüler ters, hızlı üs
// alma, asallar ve çarpanlara ayırma, Fermat ve Euler, sonlu cisimler (GF(2⁸)).
// Sayısal cevaplar sorular.test.ts'te src/kripto/oyuncak/sayi.ts ile sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...sorular(U, "u3-xor", [
    {
      ad: "xor-tablo",
      soru: "XOR (özel veya) işleminde hangi durumda sonuç 1 olur?",
      secenekler: ["İki bit farklıysa", "İki bit de 1 ise", "İki bit de 0 ise", "Bitlerden en az biri 1 ise"],
      aciklama: "XOR, bitler **farklıysa** 1, aynıysa 0 verir: $0 \\oplus 0 = 0$, $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $1 \\oplus 1 = 0$. Bit düzeyinde mod 2 toplamadır.",
    },
    {
      ad: "xor-hesap",
      cevap: ["1100"],
      soru: "~1010~ ⊕ ~0110~ işleminin sonucu nedir? (4 bit olarak yaz)",
      aciklama: "Bit bit: $1 \\oplus 0 = 1$, $0 \\oplus 1 = 1$, $1 \\oplus 1 = 0$, $0 \\oplus 0 = 0$. Sonuç ~1100~.",
    },
    {
      ad: "xor-hex",
      cevap: ["C3", "0xC3"],
      zorluk: 2,
      soru: "~0x3C~ ⊕ ~0xFF~ işleminin sonucu onaltılık olarak nedir?",
      aciklama: "$\\mathtt{FF}$ ile XOR her biti çevirir: ~0011 1100~ → ~1100 0011~ = ~0xC3~.",
    },
    {
      ad: "geri-alma",
      soru: "$C = M \\oplus K$ ise, $M$ nasıl geri bulunur?",
      secenekler: ["$M = C \\oplus K$", "$M = C - K$", "$M = K \\oplus K$", "$M = C \\cdot K$"],
      aciklama: "XOR kendi kendisinin tersidir: $C \\oplus K = M \\oplus K \\oplus K = M \\oplus 0 = M$. Şifreleme ve şifre çözmenin aynı işlem olması, akış şifrelerinin ve one-time pad'in temelidir.",
    },
    {
      ad: "iki-zaman",
      dy: true,
      zorluk: 2,
      soru: "İki mesaj aynı $K$ anahtar dizisiyle XOR'lanmışsa, iki şifreli metnin XOR'u anahtardan bağımsız olarak iki açık metnin XOR'una eşittir.",
      aciklama: "Doğru: $C_1 \\oplus C_2 = (M_1 \\oplus K) \\oplus (M_2 \\oplus K) = M_1 \\oplus M_2$. Anahtar yok olur; geriye kalan iki metnin karışımı istatistikle çözülebilir. Bu, anahtar tekrarının neden felaket olduğunu gösterir (5. ünite).",
    },
  ]),
  ...sorular(U, "u3-mod", [
    {
      ad: "kalan",
      sayi: [2],
      soru: "$17 \\bmod 5$ kaçtır?",
      aciklama: "$17 = 3 \\cdot 5 + 2$; kalan 2.",
    },
    {
      ad: "saat",
      sayi: [18],
      soru: "Saat 23'te başlayan bir iş 19 saat sürüyor. İş bittiğinde saat kaç olur? (24 saatlik düzende)",
      aciklama: "$(23 + 19) \\bmod 24 = 42 \\bmod 24 = 18$. Modüler aritmetik saat kadranında dönmektir: 24'e ulaşınca başa sarılır.",
    },
    {
      ad: "negatif",
      sayi: [4],
      zorluk: 2,
      soru: "Kriptografide kalan her zaman $0$ ile $m-1$ arasında alınır. Buna göre $-3 \\bmod 7$ kaçtır?",
      aciklama: "$-3 = (-1) \\cdot 7 + 4$; kalan 4. Kontrol: $4 - (-3) = 7$, yani $4 \\equiv -3 \\pmod 7$. (Bazı programlama dillerinde ~%~ işleci burada $-3$ verir; oyuncak kodumuzda bu yüzden ~((a % m) + m) % m~ yazılır.)",
    },
    {
      ad: "denklik",
      soru: "$a \\equiv b \\pmod m$ yazımı ne anlama gelir?",
      secenekler: [
        "$a$ ile $b$'nin $m$'ye bölümünden kalanlar aynıdır",
        "$a$ sayısı $b$ ile $m$'nin çarpımına eşittir",
        "$a$ ile $b$'nin toplamı $m$'ye eşittir",
        "$a$ sayısı $b$'den $m$ kat büyüktür",
      ],
      aciklama: "Denklik, $m$'nin $a - b$'yi tam bölmesidir; yani iki sayı $m$'lik saat kadranında aynı yere düşer: $38 \\equiv 6 \\pmod{16}$.",
    },
    {
      ad: "carpim",
      sayi: [4],
      zorluk: 2,
      soru: "$(123 \\cdot 456) \\bmod 7$ kaçtır? (İpucu: önce her sayının kalanını al.)",
      aciklama: "$123 = 17 \\cdot 7 + 4$, yani $123 \\bmod 7 = 4$; $456 = 65 \\cdot 7 + 1$, yani $456 \\bmod 7 = 1$.\n---\n$(4 \\cdot 1) \\bmod 7 = 4$. Büyük çarpımı hiç hesaplamadan sonuca ulaştık: modüler aritmetikte her adımda mod almak sayıları küçük tutar.",
    },
  ]),
  ...sorular(U, "u3-ebob", [
    {
      ad: "ebob",
      sayi: [21],
      soru: "$\\text{EBOB}(252, 105)$ kaçtır?",
      aciklama: "Öklid algoritması: $252 = 2 \\cdot 105 + 42$.\n---\n$105 = 2 \\cdot 42 + 21$.\n---\n$42 = 2 \\cdot 21 + 0$. Kalan sıfır olunca son sıfırdan farklı kalan EBOB'dur: 21.",
    },
    {
      ad: "adim",
      soru: "Öklid algoritmasının dayandığı eşitlik hangisidir?",
      secenekler: [
        "a ile b'nin EBOB'u, b ile a'nın b'ye bölümünden kalanın EBOB'una eşittir",
        "a ile b'nin EBOB'u, a ile b'nin toplamının yarısına eşittir",
        "a ile b'nin EBOB'u, çarpımlarının toplamlarına bölümünden kalandır",
        "a ile b'nin EBOB'u, a ile b − 1'in EBOB'undan bir fazladır",
      ],
      aciklama: "$a$ ile $b$'yi bölen her sayı $a - qb$'yi, yani $a \\bmod b$'yi de böler. Böylece sayılar hızla küçülür; adım sayısı basamak sayısıyla orantılıdır, sayının kendisiyle değil.",
    },
    {
      ad: "aralarinda-asal",
      dy: true,
      soru: "$\\text{EBOB}(a, m) = 1$ ise $a$ ile $m$ aralarında asaldır ve $a$'nın mod $m$'de tersi vardır.",
      aciklama: "Doğru. Tersin varlığı tam olarak bu koşula bağlıdır. RSA'da açık üs $e$, $\\varphi(n)$ ile aralarında asal seçilir ki özel üs $d$ bulunabilsin.",
    },
  ]),
  ...sorular(U, "u3-ters", [
    {
      ad: "ters-11",
      sayi: [4],
      soru: "$3$'ün mod $11$'deki tersi kaçtır? Yani $3x \\equiv 1 \\pmod{11}$ eşitliğini sağlayan $0 < x < 11$ nedir?",
      aciklama: "$3 \\cdot 4 = 12 = 11 + 1$, yani $3 \\cdot 4 \\equiv 1 \\pmod{11}$. Ters 4.",
    },
    {
      ad: "ters-26",
      sayi: [15],
      zorluk: 2,
      soru: "$7$'nin mod $26$'daki tersi kaçtır?",
      aciklama: "Genişletilmiş Öklid: $26 = 3 \\cdot 7 + 5$, $7 = 1 \\cdot 5 + 2$, $5 = 2 \\cdot 2 + 1$.\n---\nGeri yerine koyarak: $1 = 5 - 2 \\cdot 2 = 5 - 2(7 - 5) = 3 \\cdot 5 - 2 \\cdot 7 = 3(26 - 3 \\cdot 7) - 2 \\cdot 7 = 3 \\cdot 26 - 11 \\cdot 7$.\n---\nYani $-11 \\cdot 7 \\equiv 1$, ters $-11 \\bmod 26 = 15$. Kontrol: $7 \\cdot 15 = 105 = 4 \\cdot 26 + 1$.",
    },
    {
      ad: "rsa-d",
      sayi: [2753],
      zorluk: 3,
      soru: "Oyuncak RSA'da $\\varphi(n) = 3120$ ve açık üs $e = 17$. Özel üs $d = e^{-1} \\bmod 3120$ kaçtır?",
      aciklama: "Genişletilmiş Öklid: $3120 = 183 \\cdot 17 + 9$, $17 = 1 \\cdot 9 + 8$, $9 = 1 \\cdot 8 + 1$.\n---\nGeri yerine koy: $1 = 9 - 8 = 9 - (17 - 9) = 2 \\cdot 9 - 17 = 2(3120 - 183 \\cdot 17) - 17 = 2 \\cdot 3120 - 367 \\cdot 17$.\n---\n$-367 \\bmod 3120 = 2753$. Kontrol: $17 \\cdot 2753 = 46\\,801 = 15 \\cdot 3120 + 1$.",
    },
    {
      ad: "ters-yok",
      soru: "$6$'nın mod $9$'da tersi neden yoktur?",
      secenekler: [
        "$\\text{EBOB}(6, 9) = 3$ olduğu için $6x$ hiçbir zaman 1 kalanını vermez",
        "$6$ çift sayı olduğu için hiçbir modda tersi olmaz",
        "$9$ asal sayı olmadığı için hiçbir sayının tersi olmaz",
        "$6 < 9$ olduğu için ters ancak mod 6'da aranır",
      ],
      aciklama: "$6x$ hep 3'ün katıdır; 9'a bölününce kalan 0, 3 ya da 6 olur, hiçbir zaman 1 olmaz. Mod 9'da 2, 4, 5, 7, 8'in tersi vardır: 9 asal değil ama onlarla aralarında asal.",
    },
  ]),
  ...sorular(U, "u3-us", [
    {
      ad: "us-kucuk",
      sayi: [5],
      soru: "$3^5 \\bmod 7$ kaçtır?",
      aciklama: "$3^5 = 243$ ve $243 = 34 \\cdot 7 + 5$. Büyük sayılarda üs hiç açılmaz; her çarpımdan sonra mod alınır: $3^2 = 9 \\equiv 2$, $3^4 \\equiv 4$, $3^5 \\equiv 4 \\cdot 3 = 12 \\equiv 5$.",
    },
    {
      ad: "kare-carp",
      sayi: [445],
      zorluk: 3,
      soru: "Kare al ve çarp yöntemiyle $4^{13} \\bmod 497$ kaçtır? ($13 = 1101_2$)",
      aciklama: "Bitler soldan sağa: $1$ → sonuç $4$.\n---\n$1$ → kare al, çarp: $4^2 \\cdot 4 = 64$.\n---\n$0$ → yalnız kare: $64^2 = 4096 \\equiv 4096 - 8 \\cdot 497 = 120$.\n---\n$1$ → kare al, çarp: $120^2 = 14\\,400 \\equiv 14\\,400 - 28 \\cdot 497 = 484$; $484 \\cdot 4 = 1936 \\equiv 1936 - 3 \\cdot 497 = 445$.",
    },
    {
      ad: "adim-sayisi",
      zorluk: 2,
      soru: "2048 bitlik bir üsle modüler üs almak için kare al ve çarp yöntemi yaklaşık kaç çarpma yapar?",
      secenekler: ["En fazla birkaç bin", "Yaklaşık $2^{2048}$", "Yaklaşık iki milyar", "Üs büyüdükçe sonsuz"],
      aciklama: "Her bit için bir kare alma ve (bit 1 ise) bir çarpma: en fazla $2 \\times 2048 = 4096$ çarpma. Üssü tek tek açmak $2^{2048}$ çarpma isterdi. RSA'nın pratik olmasının nedeni budur.",
    },
    {
      ad: "zamanlama",
      dy: true,
      zorluk: 3,
      soru: "Kare al ve çarp yöntemi saf haliyle yazılırsa, işlemin süresi gizli üssün bitlerine göre değişebilir ve bu bir yan kanal oluşturur.",
      aciklama: "Doğru. Bit 1 olduğunda fazladan bir çarpma yapılır; süre ya da güç tüketimi ölçülerek bitler okunabilir (17. ünite). Gerçek kütüphaneler sabit zamanlı yöntemler (Montgomery merdiveni) kullanır.",
    },
  ]),
  ...sorular(U, "u3-asal", [
    {
      ad: "carpanlar",
      sayi: [61],
      zorluk: 2,
      soru: "$3233 = p \\cdot q$ iki asalın çarpımıdır ve $q = 53$. $p$ kaçtır?",
      aciklama: "$3233 / 53 = 61$. Çarpmak kolaydır; $3233$'ü çarpanlarına ayırmak için ise $\\sqrt{3233} \\approx 57$'ye kadar bölenleri denemek gerekir. 2048 bitlik sayılarda bu yol tükenir.",
    },
    {
      ad: "tek-yon",
      soru: "RSA'nın güvenliği hangi gözleme dayanır?",
      secenekler: [
        "İki büyük asalı çarpmak kolay, çarpımı asallarına ayırmak zordur",
        "Büyük asal sayılar bulmak bilinen hiçbir yöntemle mümkün değildir",
        "Asal sayıların toplamı her zaman çift sayıdır",
        "Bir sayının asal olup olmadığını sınamak imkânsızdır",
      ],
      aciklama: "Asal bulmak ve asallık sınamak hızlıdır (Miller-Rabin); çarpanlara ayırma ise bilinen klasik algoritmalarla alt üstel sürelidir. Bu asimetri, tek yönlü fonksiyon fikrinin örneğidir. Kuantum bilgisayarda Shor algoritması bu zorluğu ortadan kaldırır (18. ünite).",
    },
    {
      ad: "kucuk-asal",
      dy: false,
      soru: "$91$ bir asal sayıdır.",
      aciklama: "Yanlış: $91 = 7 \\cdot 13$. \"Asal gibi görünen\" sayılar oyuncak RSA'da sık yapılan hatadır; asal olmayan bir $p$ ile hesaplanan $\\varphi(n)$ yanlış çıkar ve şifre çözme bozulur.",
    },
  ]),
  ...sorular(U, "u3-euler", [
    {
      ad: "phi-asal",
      soru: "$p$ asal ise $\\varphi(p)$ kaçtır?",
      secenekler: ["$p - 1$", "$p$", "$p + 1$", "$p / 2$"],
      aciklama: "$1, 2, \\ldots, p-1$ sayılarının hepsi $p$ ile aralarında asaldır: $\\varphi(p) = p - 1$.",
    },
    {
      ad: "phi-rsa",
      sayi: [3120],
      zorluk: 2,
      soru: "$n = 61 \\cdot 53$ için $\\varphi(n)$ kaçtır?",
      aciklama: "İki farklı asalın çarpımında $\\varphi(pq) = (p-1)(q-1) = 60 \\cdot 52 = 3120$. $p$ ve $q$'yu bilen bunu hemen hesaplar; yalnız $n$'yi bilen bilemez. RSA'nın kapısı burasıdır.",
    },
    {
      ad: "phi-15",
      sayi: [8],
      soru: "$\\varphi(15)$ kaçtır?",
      aciklama: "15 ile aralarında asal olanlar: 1, 2, 4, 7, 8, 11, 13, 14. Toplam 8; formülle $(3-1)(5-1) = 8$.",
    },
    {
      ad: "fermat",
      sayi: [1],
      zorluk: 2,
      soru: "Fermat'nın küçük teoremini kullanarak $7^{12} \\bmod 13$ değerini bul.",
      aciklama: "$p$ asal ve $p \\nmid a$ ise $a^{p-1} \\equiv 1 \\pmod p$. Burada $p = 13$, $p - 1 = 12$: sonuç 1.",
    },
    {
      ad: "fermat-2",
      sayi: [1],
      zorluk: 2,
      soru: "$2^{10} \\bmod 11$ kaçtır?",
      aciklama: "11 asal, $2^{10} = 2^{11-1} \\equiv 1 \\pmod{11}$. Kontrol: $1024 = 93 \\cdot 11 + 1$.",
    },
  ]),
  ...sorular(U, "u3-cisim", [
    {
      ad: "gf2-toplama",
      soru: "GF(2)'de (yalnız 0 ve 1'den oluşan cisimde) toplama hangi işleme karşılık gelir?",
      secenekler: ["XOR", "VE", "VEYA", "DEĞİL"],
      aciklama: "Mod 2 toplamada $1 + 1 = 0$ olur; bu tam olarak XOR'dur. Çarpma ise VE işlemidir.",
    },
    {
      ad: "gf28-toplama",
      cevap: ["D4", "0xD4"],
      zorluk: 2,
      soru: "AES'in kullandığı GF(2⁸) cisminde baytlar toplanırken XOR'lanır. ~0x57~ + ~0x83~ kaçtır? (onaltılık)",
      aciklama: "~0101 0111~ ⊕ ~1000 0011~ = ~1101 0100~ = ~0xD4~. Bu, AES standardındaki (FIPS 197) örnektir.",
    },
    {
      ad: "xtime",
      cevap: ["AE", "0xAE"],
      zorluk: 3,
      soru: "GF(2⁸)'de bir baytı ~0x02~ ile çarpmak, bir bit sola kaydırıp en soldan taşma olursa ~0x1B~ ile XOR'lamaktır. ~0x57~ · ~0x02~ kaçtır?",
      aciklama: "~0x57~ = ~0101 0111~; sola kaydırınca ~1010 1110~ = ~0xAE~. En soldaki bit 0 olduğu için taşma yok, ~0x1B~ eklenmez.\n---\nAES'in MixColumns adımı bu \"xtime\" işlemini kullanır; donanımda yalnız bir kaydırma ve birkaç XOR kapısıdır.",
    },
    {
      ad: "neden-cisim",
      zorluk: 2,
      soru: "AES baytları neden sıradan tam sayılar gibi mod 256 değil de GF(2⁸) içinde çarpar?",
      secenekler: [
        "GF(2⁸)'de sıfır dışında her baytın tersi var, mod 256'da yok",
        "Mod 256'da çarpma işlemcide tanımlı değildir",
        "GF(2⁸)'de çarpmanın sonucu hiçbir zaman sıfır olmaz",
        "Mod 256 yalnız 7 bitlik sayılarla çalışabilir",
      ],
      aciklama: "256 asal olmadığı için mod 256'da çift sayıların tersi yoktur; bu işlemleri geri alınamaz yapar. GF(2⁸) ise indirgenemez bir polinomla ($x^8 + x^4 + x^3 + x + 1$) kurulur ve her sıfır olmayan elemanın tersi vardır. AES'in S-kutusu bu tersi kullanır.",
    },
  ]),
];
