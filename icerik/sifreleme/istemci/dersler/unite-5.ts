import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_5: Ders = {
  hafta: 5,
  baslik: "XOR, One-Time Pad ve AES",
  ozet: "Kusursuz gizliliğin tek yolu olan one-time pad'i ve onu bozan tek hatayı gör. Sonra modern simetrik şifrenin kalbine in: blok şifre fikri, karıştırma ve yayılma, DES'ten AES'e geçiş ve AES'in her turunda 16 bayta ne olduğu.",
  bolumler: [
    {
      baslik: "One-time pad: kusursuz ama pratik değil",
      metin: md(`
XOR'un kendi kendisinin tersi olduğunu 3. ünitede gördün: $M \\oplus K \\oplus K = M$. Bu, akla gelebilecek en basit şifreyi verir. Mesajın her baytını bir anahtar baytıyla XOR'la; alıcı aynı anahtarla yeniden XOR'layıp mesajı geri alır.

Anahtar **mesaj kadar uzunsa**, **gerçekten rastgeleyse** ve **yalnız bir kez** kullanılıyorsa bu şifrenin adı **one-time pad**'dir (tek kullanımlık şerit). Claude Shannon 1949'da onun **kusursuz gizlilik** sağladığını kanıtladı: şifreli metni gören, sınırsız hesap gücüne sahip bir saldırgan bile açık metin hakkında hiçbir şey öğrenemez.

Nedeni şudur: 5 baytlık bir şifreli metin, uygun bir anahtarla 5 baytlık **her** mesaja çözülebilir. "EVET!" veren bir anahtar vardır, "HAYIR" veren başka bir anahtar da. Anahtar rastgele seçildiği için hepsi eşit olasılıklıdır. Kaba kuvvet bütün anlamlı mesajları verir ve hangisinin doğru olduğu bilinemez.

> **Matematiğe in:** Kusursuz gizlilik $P(M = m \\mid C = c) = P(M = m)$ demektir: şifreli metni görmek, mesajın olasılık dağılımını değiştirmez. One-time pad'de her $m$ ve $c$ için tam bir anahtar vardır: $k = m \\oplus c$. Anahtar $n$ bitlik değerler arasından düzgün dağılımla seçilmişse $P(C = c \\mid M = m) = 2^{-n}$ olur; bu $m$'ye bağlı değildir. Bayes kuralı da kalan eşitliği verir. Shannon ayrıca anahtar uzayının en az mesaj uzayı kadar büyük olması gerektiğini gösterdi: kusursuz gizliliğin bedeli, mesaj kadar uzun anahtardır.

Pratik sorun da buradadır. 4 GB'lık bir video için 4 GB rastgele anahtar üretmen, bunu karşı tarafa **önceden ve güvenle** ulaştırman ve hiçbir baytını tekrar kullanmaman gerekir. 4 GB'ı güvenle taşıyabiliyorsan videoyu da taşıyabilirsin.
`),
      dene: ["sf-u5-xor-geri", "sf-u5-xor-bayt", "sf-u5-otp-kosullar", "sf-u5-anahtar-boyu"],
    },
    {
      baslik: "Anahtarı iki kez kullanmak",
      metin: md(`
One-time pad'in bütün gücü "tek kullanımlık" kelimesindedir. Aynı anahtarla iki mesaj şifrelenirse saldırgan iki şifreli metni XOR'lar ve anahtar kendiliğinden düşer:

$$C_1 \\oplus C_2 = (M_1 \\oplus K) \\oplus (M_2 \\oplus K) = M_1 \\oplus M_2$$

İki açık metnin XOR'u rastgele değildir. Aşağıdaki tuvalde her piksel bir bittir. İki yazı aynı rastgele anahtarla şifreleniyor; şifreli görüntülerin her biri tek başına saf gürültüdür. Şimdi ikisini XOR'la:

[[G-S5-01]]

Görüntülerde bu kadar açık görünen şey metinde de olur. Mesajlardan birinde "Sayın" ya da "saat" gibi bir kelime geçtiği tahmin edilirse, bu kelime $M_1 \\oplus M_2$ üzerinde konum konum kaydırılır. Doğru konumda öteki mesajın parçası okunur hale gelir; yeni okunan parça yeni tahminlere yol açar. Bu yönteme **crib dragging** denir.

> **Gerçek dünyada:** Sovyetler 1940'larda anahtar defterlerinin bir kısmını sıkıştıkları için iki kez bastı. ABD'nin Venona projesi bu tekrarları yakalayıp binlerce mesajın bir bölümünü açtı. Aynı hata bugün "nonce'u iki kez kullanma" olarak karşımıza çıkar: 6. ünitede CTR ve GCM'de, 17. ünitede gerçek olaylarda.
`),
      dene: ["sf-u5-iki-zaman", "sf-u5-iki-zaman-coz"],
      lab: "xor-tuvali",
    },
    {
      baslik: "Blok şifre: karıştırma ve yayılma",
      metin: md(`
Modern simetrik şifreler kısa bir anahtarla (128 ya da 256 bit) istenen uzunlukta veri şifreler. Kusursuz gizlilikten vazgeçerler ama karşılığında **hesaplama güvenliği** verirler: kırmanın bilinen en iyi yolu bütün anahtarları denemektir ve bu evrenin ömründen uzun sürer.

Bunun ana yapı taşı **blok şifredir**: sabit boyutlu bir bloğu (AES'te 128 bit) anahtara bağlı bir eşlemeyle aynı boyutta başka bir bloğa çevirir. Her anahtar için bu eşleme bire birdir, yani bir **permütasyondur**; böylece alıcı tersini alıp çözebilir. İyi bir blok şifre, anahtarı bilmeyen birine rastgele seçilmiş bir permütasyon gibi görünmelidir.

Shannon iyi bir şifrenin iki özelliğini adlandırdı:

- **Karıştırma** (confusion): anahtar ile şifreli metin arasındaki ilişki karmaşık ve doğrusal olmayan olmalı. Anahtarın bir bitini değiştirince şifreli metin öngörülemez biçimde değişmeli.
- **Yayılma** (diffusion): açık metnin tek bir biti şifreli metnin her yerine dağılmalı. Böylece açık metindeki istatistik (harf sıklıkları, tekrarlar) çıktıda görünmez.

İkisinin birlikte sonucu **çığ etkisidir**: girişte tek bir bit değişince 128 bitlik çıktının ortalama yarısı, yaklaşık 64 biti değişir. Hepsinin değişmesi de bir desen olurdu; iyi şifrede her çıkış biti yazı tura gibi davranır.

Blok şifreler bu iki özelliği basit adımları **tur** tur tekrarlayarak elde eder. Tek bir tur zayıftır; on tur üst üste geldiğinde girişin her biti çıkışın her bitini karmaşık biçimde etkiler.
`),
      dene: ["sf-u5-blok-tanim", "sf-u5-karistirma", "sf-u5-yayilma"],
    },
    {
      baslik: "DES'ten AES'e",
      metin: md(`
İlk yaygın standart blok şifre **DES**'tir (1977). IBM'in tasarımını ABD Ulusal Güvenlik Ajansı (NSA) gözden geçirdi; blok 64 bit, anahtar etkin olarak **56 bittir**. O gün için yeterliydi, ama donanım hızlandıkça 56 bit küçük kaldı: 1998'de Electronic Frontier Foundation'ın 250.000 dolarlık **Deep Crack** makinesi bir DES anahtarını birkaç günde buldu.

İlk çare DES'i art arda uygulamaktı. İki ayrı anahtarla iki kez şifrelemek (2DES) beklenen 112 biti vermez: **ortada buluşma** saldırısı açık metni bütün $K_1$'lerle şifreleyip tabloya yazar, şifreli metni bütün $K_2$'lerle çözüp tabloda arar. İş $2^{57}$ civarındadır. Bu yüzden **3DES** üç uygulama kullanır ve etkin güvenliği yaklaşık 112 bittir. 3DES bugün yavaşlığı ve 64 bitlik küçük bloğu yüzünden emekliye ayrıldı (NIST 2023 sonrası yeni kullanıma izin vermiyor).

Kalıcı çözüm için NIST 1997'de **açık bir yarışma** ilan etti. On beş aday üç yıl boyunca dünyanın her yerinden kriptografların önünde saldırıya uğradı. 2000'de Belçikalı Joan Daemen ve Vincent Rijmen'in **Rijndael** algoritması kazandı ve 2001'de **AES** (FIPS-197) oldu. Kerckhoffs ilkesinin kurumsal hali: algoritma herkesin önünde, güvenlik yalnız anahtarda.
`),
      dene: ["sf-u5-des-anahtar", "sf-u5-2des"],
    },
    {
      baslik: "AES'in tur yapısı",
      metin: md(`
AES'in blok boyu **her zaman 128 bittir** (16 bayt). Anahtar 128, 192 ya da 256 bit olabilir; adındaki sayı anahtar boyudur. Tur sayısı anahtara göre değişir: **10, 12 ya da 14**.

16 bayt, sütun sütun 4×4'lük bir matrise yerleştirilir; buna **durum** (state) denir. Şifreleme şöyle ilerler:

1. Başta bir kez **AddRoundKey**: durum ilk tur anahtarıyla XOR'lanır.
2. Her turda sırasıyla **SubBytes**, **ShiftRows**, **MixColumns** ve **AddRoundKey**.
3. Son turda MixColumns atlanır.

Aşağıdaki gezgin FIPS-197 standardındaki örnekle açılır. Adım adım ilerle; sonra en başa dön, bir hücreye tıklayıp o baytın tek bir bitini çevir ve farkın turdan tura nasıl yayıldığını izle:

[[G-S5-02]]

Gezginin sonunda aynı blok tarayıcının gerçek AES uygulamasıyla (Web Crypto) da şifrelenir ve iki sonuç karşılaştırılır. Bizim kodumuz bir **oyuncaktır**: adımlar görünsün diye düz yazıldı, sabit zamanlı değildir. Gerçek uygulamalar ya işlemcideki AES komutlarını ya da yan kanala dayanıklı özel kodu kullanır.

Kaba kuvvetin ne kadar umutsuz olduğunu da hesaplayalım: AES-128'in $2^{128} \\approx 3{,}4 \\times 10^{38}$ anahtarı vardır. Saniyede $10^{12}$ anahtar deneyen bir makine hepsini yaklaşık $10^{19}$ yılda tarar. Evrenin yaşı $1{,}4 \\times 10^{10}$ yıldır.
`),
      dene: ["sf-u5-blok-boyu", "sf-u5-tur-128", "sf-u5-son-tur"],
      lab: "aes",
    },
    {
      baslik: "Bir turun dört adımı",
      metin: md(`
Her adımın ayrı bir görevi vardır:

- **SubBytes:** Her bayt, 256 girişlik bir tablo olan **S-kutusundan** geçer. AES'in **doğrusal olmayan tek adımıdır** ve karıştırmayı sağlar. S-kutusu olmasaydı bütün AES bir doğrusal denklem sistemine dönüşür ve birkaç açık-şifreli çiftten çözülürdü. Tablo rastgele değildir; sağlam bir matematiksel tanımı vardır (aşağıda).
- **ShiftRows:** Satır $r$, $r$ bayt sola döner: ilk satır yerinde kalır, ikincisi bir, üçüncüsü iki, dördüncüsü üç bayt döner. Böylece aynı sütundaki dört bayt dört farklı sütuna dağılır.
- **MixColumns:** Her sütun sabit bir 4×4 matrisle çarpılır. Bir sütunun tek baytı değişirse sütunun dört baytı birden değişir.
- **AddRoundKey:** Durum, o turun anahtarıyla XOR'lanır. Anahtar şifrelemeye **yalnız bu adımda** girer.

ShiftRows ve MixColumns birlikte çalışınca **iki turda** her giriş baytı 16 çıkış baytının hepsini etkiler. Gezginde bunu doğrudan görebilirsin: 1. turun sonunda 4 bayt, 2. turun sonunda 16 bayt turuncu olur.

> **Matematiğe in:** AES baytları GF(2⁸) sonlu cisminin elemanları olarak görür (3. ünite): toplama XOR'dur, çarpma $x^8 + x^4 + x^3 + x + 1$ (0x11B) polinomuna göre modüler polinom çarpımıdır. $\\{02\\} \\cdot b$ işlemi (xtime) $b$'yi bir bit sola kaydırır; en üst bit taşarsa sonuç 0x1B ile XOR'lanır. Örnek: $\\{02\\} \\cdot \\{87\\}$ = 0x0E ⊕ 0x1B = 0x15 ve $\\{03\\} \\cdot \\{87\\} = (\\{02\\} \\cdot \\{87\\}) \\oplus \\{87\\}$ = 0x92. MixColumns matrisi $\\begin{pmatrix} 2&3&1&1 \\\\ 1&2&3&1 \\\\ 1&1&2&3 \\\\ 3&1&1&2 \\end{pmatrix}$ bu çarpmalarla uygulanır. S-kutusu iki adımdır: önce baytın GF(2⁸)'deki **çarpma tersi** alınır (0'ın tersi 0 sayılır), sonra sabit bir afin dönüşüm uygulanıp 0x63 eklenir. Bu yüzden $S(\\text{0x00})$ = 0x63'tür. Tersi alma doğrusal olmayanlığı, afin kısım da sabit noktaları yok etmeyi sağlar: hiçbir bayt kendisine dönüşmez.
`),
      dene: ["sf-u5-subbytes", "sf-u5-shiftrows", "sf-u5-xtime", "sf-u5-iki-tur"],
    },
    {
      baslik: "Anahtar genişletme",
      metin: md(`
AES-128'in 10 turu ve baştaki AddRoundKey için **11** tane 128 bitlik tur anahtarı gerekir. Bunları **anahtar genişletme** (key schedule) üretir. Anahtar 32 bitlik kelimelere bölünür ve her yeni kelime, bir önceki kelime ile $N_k$ kelime gerideki kelimenin XOR'udur. Her turun başında bu kelime ayrıca:

- bir bayt sola döndürülür (RotWord),
- baytları S-kutusundan geçirilir (SubWord),
- ilk baytı bir **tur sabitiyle** (Rcon: 01, 02, 04, ..., 80, 1B, 36) XOR'lanır.

Böylece AES-128'de 44, AES-256'da 60 kelime çıkar. Tur sabitleri turları birbirinden ayırır: bütün baytları aynı olan bir anahtardan bile birbirine benzemeyen tur anahtarları elde edilir. Gezginde AddRoundKey adımlarında o turun anahtarını görebilirsin.

> **Gerçek dünyada nerede karşına çıkar:**
> - **HTTPS:** Tarayıcının sunucuyla trafiğinin büyük kısmı AES-128-GCM ya da AES-256-GCM ile şifrelenir (6. ünite).
> - **İşlemcinde:** Intel ve AMD işlemcilerde 2010'dan beri AES-NI komutları, telefonlardaki ARM işlemcilerde de şifreleme uzantıları bulunur. Bir AES turu tek bir komutla yapılır, saniyede gigabaytlarca veri şifrelenir.
> - **Disk ve telefon şifreleme:** BitLocker, FileVault, Android ve iOS'un depolama şifrelemesi AES kullanır.
> - **Wi-Fi ve mesajlaşma:** WPA2 ve WPA3 AES tabanlıdır. Signal ve WhatsApp mesajları da AES ile şifrelenir (13. ünite).
> - **Kart ve kimlik çipleri:** Banka kartlarındaki ve elektronik kimliklerdeki çipler de AES ya da 3DES kullanır. Bu çiplerin yan kanallara karşı nasıl korunduğunu 17. ünitede göreceğiz.
`),
      dene: ["sf-u5-tur-anahtari", "sf-u5-rcon"],
    },
  ],
  test: [
    "sf-u5-kusursuz", "sf-u5-neden-yok", "sf-u5-venona", "sf-u5-bilinen-parca", "sf-u5-permutasyon", "sf-u5-aes-yarisma",
    "sf-u5-tur-256", "sf-u5-durum", "sf-u5-kaba-kuvvet-128", "sf-u5-sbox-63", "sf-u5-sbox-sabit-yok", "sf-u5-carp-03",
    "sf-u5-kelime-256",
  ],
};
