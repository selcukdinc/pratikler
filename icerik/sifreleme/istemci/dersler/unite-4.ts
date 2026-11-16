import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_4: Ders = {
  hafta: 4,
  baslik: "Klasik Şifreler ve Kırılmaları",
  ozet: "Sezar'dan Enigma'ya klasik şifreleri hem kullan hem kır: kaba kuvvet, frekans analizi, Vigenère'in anahtar uzunluğunu bulmak, aktarım şifreleri ve Enigma'nın rotorları. Sonunda bu şifrelerin modern kriptografiye bıraktığı dersleri gör.",
  bolumler: [
    {
      baslik: "Sezar şifresi ve kaba kuvvet",
      metin: md(`
Rivayete göre Jül Sezar mektuplarındaki her harfi alfabede üç harf ileri kaydırırdı. Türk alfabesinde (A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z, 29 harf) 3 kaymayla A → Ç, B → D, Z → C olur. Formülle, harflerin alfabedeki sırasıyla (A = 0): $$C = (M + k) \\bmod 29, \\qquad M = (C - k) \\bmod 29$$

[[G-S4-01]]

Anahtar tek bir sayıdır ve 0 dışında yalnız **28** seçenek vardır. Saldırgan hepsini dener; anlamlı metin veren tek kayma doğru anahtardır. Bu yönteme **kaba kuvvet** denir ve Sezar'ı elle bile birkaç dakikada kırar. Çarktaki "Kaba kuvvet" düğmesine basıp kendin gör.

İki kez şifrelemek de yardım etmez: önce 5, sonra 7 kaymak, tek bir 12 kaymayla aynıdır. Bir şifreyi kendisiyle art arda uygulamak her zaman güç katmaz; bu, ileride "neden 3DES ama 2DES değil" sorusunda yeniden karşına çıkacak.
`),
      dene: ["sf-u4-anahtar-sayisi", "sf-u4-kaba-kuvvet"],
      lab: "sezar",
    },
    {
      baslik: "Yerine koyma: büyük anahtar uzayı yetmez",
      metin: md(`
Kaymak yerine alfabeyi **karıştırırsak**? Her harf, anahtardaki rastgele bir harfle değiştirilir: A → Z, B → E, C → K... Bu **tek alfabeli yerine koyma** şifresidir. Anahtar alfabenin bir permütasyonudur; 29 harfte $29! \\approx 8{,}8 \\times 10^{30} \\approx 2^{103}$ anahtar vardır. Kaba kuvvet imkânsızdır.

**Atbaş** bunun anahtarsız, sabit bir örneğidir: alfabe ters çevrilir (A ↔ Z, B ↔ Y). İbranice metinlerde görülen çok eski bir yöntemdir.

Yerine koymanın ölümcül bir kusuru vardır: her A **hep aynı** harfe döner. Böylece açık metnin bütün desenleri şifreye taşınır: aynı harfin tekrar ettiği yerler, kelime uzunlukları ve en önemlisi **harf sıklıkları**.
`),
      dene: ["sf-u4-anahtar-uzayi"],
    },
    {
      baslik: "Frekans analizi",
      metin: md(`
Her dilde harflerin sıklıkları belirgindir. Türkçe bir metinde A yaklaşık %12, E %9, İ %8,6, N %7,5 görülür; J neredeyse hiç görülmez. İngilizcede ise E başı çeker (%12,7), ardından T ve A gelir. Yerine koyma bu sıklıkları korur: şifreli metnin en sık harfi büyük olasılıkla A ya da E'dir.

Bu yöntemi 9. yüzyılda Bağdat'ta el-Kindî yazdı ve tek alfabeli şifreler o günden beri güvenli değildir. Aşağıdaki tezgahta yerine koymayla şifrelenmiş bir Türkçe paragraf var. En sık harflerden başla, sonra kısa kelimelere bak: iki harflik sık bir kelime "BU" ya da "VE" olabilir.

[[G-S4-02]]

Tezgahtaki "Sıklık sırasıyla eşleştir" düğmesi yalnız bir başlangıç verir: kısa metinlerde sıklıklar dilin ortalamasından sapar. Kırıcılar istatistiği **kelime desenleriyle** ve **olası kelimelerle** birleştirir. Saldırganın metnin bir kısmını tahmin edebildiği bu duruma **bilinen açık metin saldırısı** denir.
`),
      dene: ["sf-u4-fikir", "sf-u4-kisa-metin"],
      lab: "frekans",
    },
    {
      baslik: "Vigenère: kayma harften harfe değişir",
      metin: md(`
Adını Blaise de Vigenère'den alan ve 16. yüzyılda bulunan şifre, frekans analizini şaşırtmak için **birden çok** Sezar kullanır. Anahtar bir kelimedir, örneğin ~KOD~: 1., 4., 7. harfler K kadar (13), 2., 5., 8. harfler O kadar (17), 3., 6., 9. harfler D kadar (4) kaydırılır. Aynı harf farklı konumlarda farklı harflere döner; buna **çok alfabeli** şifre denir.

$$C_i = (M_i + K_{i \\bmod L}) \\bmod 29$$

Yüzyıllar boyunca "kırılamaz şifre" diye anıldı. Ama bir zayıflığı vardır: anahtar **tekrar eder**. Ayrıca açık metnin bir kısmı biliniyorsa anahtar doğrudan çıkar: anahtar harfi = şifreli harf − açık harf. "MERHABA" ile başladığını bildiğin bir mesajın ilk yedi harfi sana anahtarın ilk yedi harfini verir; anahtar tekrar ettiği için bütün mesaj açılır.

> **Matematiğe in:** Bilinen açık metinle anahtar bulmak modüler çıkarmadır. Şifreli harf A (0), açık harf M (15) ise anahtar harfi $(0 - 15) \\bmod 29 = 14$, yani L'dir. Aynı işlem her harfte tekrarlanır ve anahtarın tekrar ettiği nokta uzunluğunu da ele verir.
`),
      dene: ["sf-u4-vigenere-tanim"],
    },
    {
      baslik: "Vigenère'i kırmak: anahtar uzunluğunu bul",
      metin: md(`
Anahtar uzunluğu $L$ bilinirse Vigenère, $L$ ayrı Sezar şifresine ayrılır: 1., $L+1$., $2L+1$. harfler hep aynı kaymayla şifrelenmiştir. Her grup frekans analiziyle ayrı ayrı çözülür. Sorun $L$'yi bulmaktır; iki klasik yöntem vardır:

- **Kasiski yöntemi (1863):** Şifreli metinde tekrar eden 3-4 harflik dizileri bul. Aynı açık metin parçası anahtarın aynı yerine denk gelince aynı şifreli dizi çıkar; aradaki uzaklık $L$'nin katıdır. Uzaklıklar 12, 18 ve 30 ise $L$ büyük olasılıkla bunların EBOB'u, yani 6'dır.
- **Çakışma indeksi (Friedman):** Metinden rastgele iki harf seçince aynı çıkma olasılığıdır. Anlamlı bir metinde bu olasılık yüksektir (İngilizcede yaklaşık 0,066), tamamen rastgele harflerde düşüktür (26 harfte $1/26 \\approx 0{,}038$). Metni $L$ gruba ayırıp grupların indeksine bakarsın: doğru $L$'de her grup tek bir Sezar olduğu için indeks dilinkine sıçrar.

Aşağıdaki kırıcı ikinci yöntemi uyguluyor. Sütunların en yükseği anahtar uzunluğudur; ardından her grubun kayması Türkçe harf dağılımıyla karşılaştırılarak (ki-kare testi) tahmin edilir:

[[G-S4-03]]

> **Matematiğe in:** Çakışma indeksi $\\text{IC} = \\frac{\\sum_i n_i (n_i - 1)}{N (N - 1)}$ ile hesaplanır; $n_i$ her harfin sayısı, $N$ toplam harf sayısıdır. Ki-kare değeri $\\chi^2 = \\sum_i \\frac{(g_i - b_i)^2}{b_i}$ gözlenen ($g_i$) ile dilin beklenen ($b_i$) sayıları arasındaki farkı ölçer; en küçük $\\chi^2$ veren kayma en olası anahtar harfidir.
`),
      dene: ["sf-u4-sonra"],
      lab: "vigenere",
    },
    {
      baslik: "Aktarım şifreleri: harfler aynı, yerleri farklı",
      metin: md(`
Harfleri değiştirmek yerine **yerlerini** karıştırmak da bir yöntemdir: **aktarım** (transposition). En basit örneği **çit şifresidir** (rail fence). İki raylı çitte harfler sırayla üst ve alt satıra zikzak yazılır, sonra satırlar art arda okunur:

| Ray | Harfler |
|---|---|
| Üst | M R A A Ü Y |
| Alt | E H B D N A |

"MERHABA DÜNYA" böylece ~MRAAÜYEHBDNA~ olur. Çözen kişi şifreli metni ikiye böler ve bir üstten bir alttan okur.

Aktarım şifrelerinde harf sıklıkları **tamamen** korunur; şifreli metnin çakışma indeksi açık metninkiyle aynıdır. Bu bir ipucudur: sıklıklar Türkçeye benziyor ama metin okunmuyorsa aktarım düşünülür.

Modern blok şifreler iki fikri birleştirir. Claude Shannon 1949'da bunları **karıştırma** (confusion: anahtarla çıktı arasındaki ilişkiyi karmaşık yapmak, yerine koymanın modern hali) ve **yayılma** (diffusion: bir giriş bitinin etkisini bütün çıktıya dağıtmak, aktarımın modern hali) diye adlandırdı. AES'in her turunda ikisi de vardır (5. ünite).
`),
      dene: ["sf-u4-frekans-ayni"],
    },
    {
      baslik: "Enigma: dönen rotorlar",
      metin: md(`
İkinci Dünya Savaşı'nda Alman ordusunun kullandığı Enigma, yerine koymayı elektromekanik olarak çok uzun dönemli bir çok alfabeli şifreye çevirdi:

1. Tuşa basınca önce **rotorlar döner**: en sağdaki her basışta bir adım, belli bir harfe gelince yanındakini de döndürür (kilometre sayacı gibi).
2. Akım **fiş tablosundan** (Steckerbrett) geçer: birbirine kabloyla bağlanmış harf çiftleri yer değiştirir.
3. Üç rotordan geçer; her rotor iç kablolamasıyla bir yerine koymadır.
4. **Yansıtıcıya** çarpar ve aynı rotorlardan ters yoldan geri döner.
5. Yeniden fiş tablosundan geçer ve bir **lamba** yanar.

[[G-S4-04]]

Aynı harfe arka arkaya basınca her seferinde başka bir lamba yanar, çünkü rotorlar dönmüştür. Yansıtıcı sayesinde makine **kendi kendinin tersidir**: alıcı makinesini aynı başlangıç ayarına getirip şifreli metni yazınca açık metin yanar. Ama aynı yansıtıcı bir zayıflık da getirir: **hiçbir harf kendisine şifrelenemez**.

Enigma'yı önce 1930'larda Polonyalı matematikçiler Marian Rejewski, Jerzy Różycki ve Henryk Zygalski çözdü; savaş sırasında Bletchley Park'ta Alan Turing ve ekibi **bombe** adlı elektromekanik arama makineleriyle günlük ayarları buldu. Kırıcılar, mesajlarda sık geçen kelimeleri (hava raporu, "raporlanacak bir şey yok") tahmin ediyor ve "hiçbir harf kendine dönmez" kuralıyla bu tahminin şifreli metinde hangi konumlara gelebileceğini eliyordu.

> **Gerçek dünyada:** Enigma'nın hikâyesi Kerckhoffs ilkesinin canlı örneğidir. Makineler ele geçirildi, kablolamaları öğrenildi; güvenlik yalnız günlük anahtarlara ve operatörlerin disiplinine kaldı. Tekrar eden mesaj kalıpları ve tembel seçilen ayarlar sonunu getirdi.
`),
      dene: ["sf-u4-kendine", "sf-u4-ayni-ayar"],
      lab: "enigma",
    },
    {
      baslik: "Klasik şifrelerden kalan dersler",
      metin: md(`
Bu ünitedeki şifrelerin hepsi **oyuncaktır**; bugün gerçek gizlilik için kullanılmazlar. Ama kırılmaları modern kriptografinin temel ilkelerini öğretir:

- **Büyük anahtar uzayı gerekli ama yeterli değil.** Yerine koymanın $2^{103}$ anahtarı vardı ve frekans analiziyle düştü. İyi bir şifre, kaba kuvvetten daha kısa bir yol bırakmamalıdır.
- **İstatistik sızmamalı.** Modern bir şifrenin çıktısı, anahtarı bilmeyen için rastgele baytlardan **ayırt edilemez** olmalıdır; ne harf sıklığı ne tekrar eden dizi kalmalıdır.
- **Anahtar tekrar etmemeli.** Vigenère'in sonunu anahtarın tekrarı getirdi; aynı ders bugün "aynı nonce'u iki kez kullanma" kuralı olarak karşımıza çıkar (6. ve 17. ünite).
- **Saldırgan sistemi bilir.** Enigma'nın makineleri ele geçti; güvenlik yalnız anahtarlarda kaldı.
- **İnsan hatası en zayıf halkadır.** Tahmin edilebilir mesaj başlangıçları, tekrar kullanılan ayarlar, tembel seçimler.

Sıradaki grup, bu dersler üzerine kurulan modern simetrik şifrelere geçiyor: XOR ile one-time pad, AES'in turları ve "ECB penguen" deneyi.
`),
      dene: ["sf-u4-istatistik"],
    },
  ],
  test: [
    "sf-u4-sezar-tanim", "sf-u4-coz-3", "sf-u4-rot13", "sf-u4-atbas", "sf-u4-harf-deseni", "sf-u4-en-sik", "sf-u4-dil",
    "sf-u4-vigenere-coz", "sf-u4-bilinen", "sf-u4-kasiski", "sf-u4-ic", "sf-u4-aktarim-tanim", "sf-u4-cit", "sf-u4-rotor",
    "sf-u4-kirilma", "sf-u4-anahtar-uzayi-yetmez", "sf-u4-bugun",
  ],
};
