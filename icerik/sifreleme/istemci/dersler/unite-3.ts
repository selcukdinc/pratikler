import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_3: Ders = {
  hafta: 3,
  baslik: "Matematik Araç Kutusu",
  ozet: "Sonraki ünitelerin ihtiyaç duyduğu matematiği elle yap: XOR, modüler aritmetik, Öklid algoritması ve modüler ters, kare al ve çarp ile hızlı üs alma, asallar, Fermat ve Euler teoremleri, AES'in kullandığı sonlu cisim GF(2⁸).",
  bolumler: [
    {
      baslik: "XOR: kriptografinin en sevdiği işlem",
      metin: md(`
XOR (özel veya, ⊕) iki bit **farklıysa** 1, aynıysa 0 verir. Bir elektronikçi için tanıdık bir kapıdır; kriptografi onu üç özelliği yüzünden sever:

- $A \\oplus 0 = A$: sıfırla XOR hiçbir şeyi değiştirmez.
- $A \\oplus A = 0$: bir şey kendisiyle XOR'lanınca yok olur.
- $A \\oplus B \\oplus B = A$: aynı değerle iki kez XOR'lamak geri getirir.

Sonuncusu, şifreleme ile şifre çözmenin **aynı işlem** olabileceğini söyler: $C = M \\oplus K$ ise $M = C \\oplus K$. Akış şifreleri ve one-time pad (5. ünite) tam olarak budur. Baytlarla çalışırken XOR bit bit yapılır: ~1010~ ⊕ ~0110~ = ~1100~; hex olarak ~3C~ ⊕ ~FF~ = ~C3~ (FF ile XOR her biti çevirir).

> **Dikkat:** XOR'un güzel özelliği bir tuzak da kurar. İki mesaj aynı anahtar dizisiyle şifrelenirse $C_1 \\oplus C_2 = M_1 \\oplus M_2$ olur: anahtar kaybolur ve geriye iki metnin karışımı kalır. Bu "iki zamanlı pad" hatası tarihte birçok şifreyi düşürdü.
`),
      dene: ["sf-u3-geri-alma", "sf-u3-iki-zaman"],
    },
    {
      baslik: "Modüler aritmetik: saat kadranında hesap",
      metin: md(`
Saat 23'te başlayan 19 saatlik bir iş, ertesi gün saat 18'de biter: $(23 + 19) \\bmod 24 = 18$. Saat kadranı 24'e ulaşınca başa sarar; buna **modüler aritmetik** denir. $a \\bmod m$, $a$'nın $m$'ye bölümünden kalandır ve kriptografide hep $0$ ile $m - 1$ arasında alınır: $-3 \\bmod 7 = 4$.

$a \\equiv b \\pmod m$ yazımı, $a$ ile $b$'nin $m$'ye bölümünden kalanların aynı olduğunu söyler: $38 \\equiv 6 \\pmod{16}$.

[[G-S3-01]]

Modüler aritmetiğin büyük kolaylığı, **her adımda mod alabilmektir**: $(123 \\cdot 456) \\bmod 7$ için önce $123 \\bmod 7 = 4$ ve $456 \\bmod 7 = 1$ bulunur, sonuç $4 \\cdot 1 = 4$'tür. 2048 bitlik sayılarla çalışan RSA da sayıları bu sayede makul boyutta tutar.

> **Dikkat:** Birçok programlama dilinde ~%~ işleci negatif sayılarda negatif kalan verir (JavaScript'te ~-3 % 7~ sonucu ~-3~'tür). Bu sitenin oyuncak kodu bu yüzden ~((a % m) + m) % m~ yazar.
`),
      dene: ["sf-u3-kalan", "sf-u3-negatif"],
      lab: "moduler",
    },
    {
      baslik: "Öklid algoritması ve modüler ters",
      metin: md(`
İki sayının en büyük ortak böleni (EBOB) için 2300 yıllık bir yöntem hâlâ en hızlısıdır. **Öklid algoritması** şu eşitliğe dayanır: $a$ ile $b$'nin EBOB'u, $b$ ile $a \\bmod b$'nin EBOB'una eşittir. Sayılar her adımda hızla küçülür:

$$252 = 2 \\cdot 105 + 42, \\quad 105 = 2 \\cdot 42 + 21, \\quad 42 = 2 \\cdot 21 + 0 \\;\\Rightarrow\\; \\text{EBOB} = 21$$

Kriptografide asıl işimize yarayan, aynı algoritmanın **genişletilmiş** halidir. Bölme yapılırken katsayılar da izlenir ve sonunda $s \\cdot m + t \\cdot a = \\text{EBOB}(m, a)$ eşitliği elde edilir. EBOB 1 ise $t \\cdot a \\equiv 1 \\pmod m$ olur, yani $t$ sayısı $a$'nın **mod $m$'deki tersidir**: $a^{-1}$.

Ters yalnız $a$ ile $m$ **aralarında asal** ise vardır. $6$'nın mod $9$'da tersi yoktur, çünkü $6x$ hep 3'ün katıdır ve 9'a bölününce 1 kalanını hiç vermez. Oyuncak RSA'nın özel anahtarı tam olarak böyle bir terstir; aşağıdaki tabloda $17^{-1} \\bmod 3120 = 2753$ çıkıyor:

[[G-S3-02]]

> **Matematiğe in:** Tablonun her satırı bir öncekinden aynı kuralla üretilir: $r_{i+1} = r_{i-1} - q_i r_i$, $s_{i+1} = s_{i-1} - q_i s_i$, $t_{i+1} = t_{i-1} - q_i t_i$. Başlangıç satırları $(m, 1, 0)$ ve $(a, 0, 1)$'dir; böylece her satırda $s_i m + t_i a = r_i$ korunur. Adım sayısı sayıların basamak sayısıyla orantılıdır; 2048 bitlik sayılarda bile birkaç bin adımda biter.
`),
      dene: ["sf-u3-ebob", "sf-u3-ters-11"],
      lab: "oklid",
    },
    {
      baslik: "Kare al ve çarp: büyük üsler, az çarpma",
      metin: md(`
RSA ve Diffie-Hellman'ın temel işlemi $g^x \\bmod p$'dir ve $x$ yüzlerce basamaklı bir sayıdır. $g$'yi $x$ kez çarpmak evrenin ömründe bitmez. Çözüm üssü **ikili** yazmaktır.

$4^{13} \\bmod 497$ için $13 = 1101_2$. Bitler soldan sağa okunur; her bitte sonucun **karesi** alınır, bit 1 ise ayrıca tabanla **çarpılır**:

| Bit | İşlem | Sonuç (mod 497) |
|---|---|---|
| 1 | $1^2 \\cdot 4$ | 4 |
| 1 | $4^2 \\cdot 4 = 64$ | 64 |
| 0 | $64^2 = 4096$ | 120 |
| 1 | $120^2 \\cdot 4$ | 445 |

12 çarpma yerine 7 çarpma (4 kare alma, 3 çarpma). 2048 bitlik bir üste en fazla 4096 çarpma yapılır.

[[G-S3-03]]

> **Dikkat:** Bu yöntem saf haliyle yazılırsa bit 1 olduğunda fazladan bir çarpma yapar. İşlemin süresi ya da işlemcinin güç tüketimi ölçülerek gizli üssün bitleri okunabilir: bir **yan kanal** saldırısı (17. ünite). Gerçek kütüphaneler her bitte aynı işi yapan sabit zamanlı yöntemler (Montgomery merdiveni) kullanır.
`),
      dene: ["sf-u3-us-kucuk", "sf-u3-zamanlama"],
      lab: "kare-carp",
    },
    {
      baslik: "Asallar ve çarpanlara ayırmanın zorluğu",
      metin: md(`
$61 \\cdot 53 = 3233$ hesabını herkes birkaç saniyede yapar. Tersini, yani $3233$'ün hangi iki asalın çarpımı olduğunu bulmak ise deneme gerektirir: $\\sqrt{3233} \\approx 57$'ye kadar bütün asallarla bölmeyi denersin. Sayı 617 basamaklı (2048 bit) olunca bilinen en iyi klasik algoritmalar da tükenir.

Bu asimetri, kriptografinin sevdiği **tek yönlü fonksiyon** fikrinin örneğidir: bir yönde kolay, öbür yönde zor. Önemli olan, iki yönün arasında devasa bir fark olmasıdır:

- **Asal bulmak kolaydır:** rastgele büyük bir tek sayı seçilir, Miller-Rabin gibi hızlı bir testle asal olup olmadığı sınanır; asal değilse bir sonrakine geçilir.
- **Çarpanlara ayırmak zordur:** bilinen klasik algoritmalar sayının boyuyla neredeyse üstel yavaşlar.

> **Gerçek dünyada:** Kuantum bilgisayarlar için Shor algoritması çarpanlara ayırmayı kolaylaştırır. Bugün RSA'yı tehdit edecek büyüklükte bir kuantum bilgisayar yok, ama "şimdi kaydet, sonra çöz" tehdidi yüzünden geçiş başladı (18. ünite).
`),
      dene: ["sf-u3-carpanlar"],
    },
    {
      baslik: "Fermat, Euler ve φ fonksiyonu",
      metin: md(`
Bir sayının **φ** (phi) değeri, $1$ ile $n$ arasında $n$ ile aralarında asal olan sayıların sayısıdır. $\\varphi(15) = 8$: $1, 2, 4, 7, 8, 11, 13, 14$. Asal bir $p$ için $1$'den $p - 1$'e kadar hepsi aralarında asaldır, yani $\\varphi(p) = p - 1$. İki farklı asalın çarpımında $$\\varphi(pq) = (p - 1)(q - 1)$$ olur: $\\varphi(3233) = 60 \\cdot 52 = 3120$. $p$ ve $q$'yu bilen bunu hemen hesaplar, yalnız $n = 3233$'ü bilen bilemez. RSA'nın gizli kapısı burasıdır.

**Fermat'nın küçük teoremi:** $p$ asal ve $a$, $p$'nin katı değilse $$a^{p-1} \\equiv 1 \\pmod p$$ Örneğin $2^{10} = 1024 = 93 \\cdot 11 + 1$, yani $2^{10} \\equiv 1 \\pmod{11}$.

**Euler teoremi** bunu her $n$'ye genişletir: $a$ ile $n$ aralarında asalsa $a^{\\varphi(n)} \\equiv 1 \\pmod n$.

> **Matematiğe in:** RSA'nın neden çalıştığı bu teoremden çıkar. Anahtarlar $e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}$ olacak şekilde seçilir, yani $ed = 1 + k\\varphi(n)$. Şifrelenen mesaj $c = m^e$ ise $$c^d = m^{ed} = m^{1 + k\\varphi(n)} = m \\cdot \\left(m^{\\varphi(n)}\\right)^k \\equiv m \\cdot 1^k = m \\pmod n$$ Mesaj geri gelir. 10. ünitede bunu oyuncak sayılarla adım adım yapacaksın.
`),
      dene: ["sf-u3-phi-rsa", "sf-u3-fermat"],
    },
    {
      baslik: "Sonlu cisimler: AES'in sayı sistemi",
      metin: md(`
Mod $p$'de ($p$ asal) toplama, çıkarma, çarpma yapabilir ve sıfır dışındaki her sayıya bölebilirsin, çünkü her sayının tersi vardır. Bu yapıya **sonlu cisim** denir ve $\\text{GF}(p)$ diye yazılır (Galois field). Diffie-Hellman ve eliptik eğriler bu cisimlerde çalışır.

Bilgisayar ise baytlarla çalışır ve 256 asal değildir. Mod 256'da çift sayıların tersi yoktur; bu da işlemleri geri alınamaz yapar. Çözüm, baytları sayı değil **polinom** olarak görmektir. ~0x57~ = ~0101 0111~ baytı $x^6 + x^4 + x^2 + x + 1$ polinomudur; katsayılar yalnız 0 ve 1'dir, yani $\\text{GF}(2)$'den gelir.

- **Toplama** katsayıları mod 2 toplamaktır, yani **XOR**: ~0x57~ + ~0x83~ = ~0xD4~.
- **Çarpma** polinomları çarpıp sonucu AES'in indirgenemez polinomuna ($x^8 + x^4 + x^3 + x + 1$, ~0x11B~) bölünce kalanı almaktır. Sıfır dışındaki her baytın tersi vardır; AES'in S-kutusu bu tersi kullanır.

En sık kullanılan çarpım **2 ile çarpmadır** ("xtime"): baytı bir bit sola kaydır, en soldan taşma olursa ~0x1B~ ile XOR'la. ~0x57~ · ~0x02~ = ~0xAE~ (taşma yok). AES'in MixColumns adımı yalnız bunu ve XOR'u kullanır; donanımda birkaç kapıdır.

> **Matematiğe in:** ~0x57~ · ~0x13~ hesabı için $\\mathtt{13} = \\mathtt{10} \\oplus \\mathtt{02} \\oplus \\mathtt{01}$ yazılır ve ~0x57~ art arda xtime ile ikiye katlanır: ~57~ → ~AE~ → ~47~ → ~8E~ → ~07~ (ikinci ve dördüncü adımda en soldan taşma olduğu için ~1B~ ile XOR'landı). Sonra gereken kuvvetler XOR'lanır: ~07~ ⊕ ~AE~ ⊕ ~57~ = ~FE~. AES standardının (FIPS 197) kendi örneği budur.
`),
      dene: ["sf-u3-gf2-toplama", "sf-u3-neden-cisim"],
    },
  ],
  test: [
    "sf-u3-xor-tablo", "sf-u3-xor-hesap", "sf-u3-xor-hex", "sf-u3-saat", "sf-u3-denklik", "sf-u3-carpim", "sf-u3-adim",
    "sf-u3-aralarinda-asal", "sf-u3-ters-26", "sf-u3-rsa-d", "sf-u3-ters-yok", "sf-u3-kare-carp", "sf-u3-adim-sayisi",
    "sf-u3-tek-yon", "sf-u3-kucuk-asal", "sf-u3-phi-asal", "sf-u3-phi-15", "sf-u3-fermat-2", "sf-u3-gf28-toplama", "sf-u3-xtime",
  ],
};
