import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_1: Ders = {
  hafta: 1,
  baslik: "Kriptografi Neyi Çözer?",
  ozet: "Kriptografinin dört güvenlik hedefini, Kerckhoffs ilkesini, anahtar ile algoritma farkını, kodlama ile hash ile şifreleme arasındaki farkı, metnin nasıl bayta dönüştüğünü ve tehdit modeli kavramını gör.",
  bolumler: [
    {
      baslik: "Dört soru: kim okur, kim değiştirir, kim gönderdi, kim inkâr eder?",
      metin: md(`
Telefonundan bir arkadaşına "Yarın 10'da kütüphanede buluşalım" yazdığını düşün. Bu küçük mesajın yolculuğunda dört ayrı şey ters gidebilir:

- **Gizlilik** (confidentiality): yoldaki biri mesajı **okuyabilir** mi?
- **Bütünlük** (integrity): biri mesajı "11'de" diye **değiştirirse** fark edilir mi?
- **Kimlik doğrulama** (authentication): mesaj gerçekten **senden mi** geldi, yoksa biri senin adına mı yazdı?
- **İnkâr edilemezlik** (non-repudiation): sen sonradan "ben yazmadım" dersen, karşı taraf bunu **üçüncü bir kişiye** kanıtlayabilir mi?

Kriptografi bu dört soruya ayrı ayrı araçlarla cevap verir: gizlilik için **şifreleme**, bütünlük için **hash** ve **MAC**, kimlik doğrulama için **MAC** ve **imza**, inkâr edilemezlik için yalnız **dijital imza**. Bu yüzden "mesaj şifreli, öyleyse güvende" cümlesi eksiktir: şifreleme tek başına yalnız birinci soruyu cevaplar.

Aşağıdaki durumlarda hangi hedefin söz konusu olduğunu seç:

[[G-S1-03]]

> **Dikkat:** Şifrelemenin bütünlük sağladığını sanmak çok yaygın bir hatadır. Bazı şifreleme modlarında (6. ünite) saldırgan, mesajı okuyamasa bile şifreli metnin bitlerini çevirerek açık metni öngörülebilir biçimde değiştirebilir. Bugün bu yüzden şifreleme ile doğrulamayı birlikte yapan **kimlik doğrulamalı şifreleme** (AES-GCM, ChaCha20-Poly1305) kullanılır.
`),
      dene: ["sf-u1-butunluk", "sf-u1-sifre-yetmez"],
    },
    {
      baslik: "Kerckhoffs ilkesi: algoritma açık, anahtar gizli",
      metin: md(`
Bir kapı kilidini düşün. Kilidin tasarımı her hırdavatçıda satılan kataloglarda yazılıdır; seni koruyan, yalnız senin anahtarındaki çentiklerdir. Hırsız kilidin nasıl çalıştığını bilse bile anahtarın olmadan kapıyı açamamalıdır.

Hollandalı dilbilimci **Auguste Kerckhoffs** 1883'te askerî şifreler için aynı şeyi yazdı: bir şifreleme sistemi, **düşmanın eline geçse bile** güvenli kalmalı; gizli tutulması gereken tek şey **anahtardır**. Bilgi kuramının kurucusu Claude Shannon bunu "düşman sistemi bilir" diye özetledi.

Neden algoritmayı da gizlemiyoruz?

- Algoritmalar er geç ortaya çıkar: bir yazılım tersine çevrilir, bir cihaz sökülür, bir çalışan işten ayrılır.
- Gizli bir algoritmayı kimse incelemediği için zayıflıkları da bilinmez. AES, SHA-3 ve post-kuantum ML-KEM, dünyanın dört bir yanındaki araştırmacıların yıllarca saldırdığı **açık yarışmalarla** seçildi.
- Anahtar ele geçerse yenisi üretilir; algoritma ele geçerse bütün sistemi değiştirmek gerekir.

"Kendi geliştirdiğimiz gizli algoritma" diyen bir ürüne bu yüzden kuşkuyla bakılır; bu yaklaşımın adı **gizlilikle güvenlik**tir (security through obscurity).

> **Gerçek dünyada:** Telefonundaki, tarayıcındaki ve bankandaki şifreleme algoritmaları aynıdır ve herkese açıktır: AES, ChaCha20, SHA-256, X25519. Senin verini başkasınınkinden ayıran yalnız anahtarlardır.
`),
      dene: ["sf-u1-gizli-algoritma"],
    },
    {
      baslik: "Anahtar ve anahtar uzayı",
      metin: md(`
**Algoritma** bir tariftir: "şu baytları şu sırayla karıştır". **Anahtar** ise o tarifin bu seferki gizli ayarıdır. Aynı AES algoritması milyarlarca cihazda çalışır; her bağlantının anahtarı farklıdır.

Anahtarın gücünü önce **uzunluğu** belirler. $n$ bitlik bir anahtar için $2^n$ olasılık vardır; bu kümeye **anahtar uzayı** denir. Saldırganın elinde anahtarı bulmanın en kaba yolu hepsini sırayla denemektir: **kaba kuvvet** (brute force). Doğru anahtar uzayın herhangi bir yerinde olabileceği için ortalama $2^{n-1}$ deneme gerekir.

| Anahtar | Olasılık | Saniyede $10^{12}$ denemeyle ortalama süre |
|---|---|---|
| 40 bit | $\\approx 1{,}1 \\times 10^{12}$ | yarım saniye |
| 56 bit (eski DES) | $\\approx 7{,}2 \\times 10^{16}$ | yaklaşık 10 saat |
| 128 bit (AES-128) | $\\approx 3{,}4 \\times 10^{38}$ | evrenin yaşının yaklaşık 400 milyon katı |
| 256 bit (AES-256) | $\\approx 1{,}2 \\times 10^{77}$ | anlamsız derecede uzun |

> **Matematiğe in:** Her ek bit uzayı ikiye katlar: $2^{n+1} = 2 \\cdot 2^n$. 128 bitten 256 bite geçmek uzayı iki kat değil $2^{128}$ kat büyütür. Saniyede $10^{12}$ deneme yapan bir makine bir yılda yaklaşık $3{,}2 \\times 10^{19} \\approx 2^{65}$ anahtar dener; 128 bitlik uzayın yarısını ($2^{127}$) taramak için $2^{62}$ yıl gerekir.

Ama büyük anahtar uzayı **tek başına** güvenlik değildir. 4. ünitede $2^{103}$ anahtarlı bir şifrenin, anahtarları denemeden birkaç dakikada nasıl kırıldığını göreceksin: iyi bir şifre, kaba kuvvetten **daha kısa** bir yol bırakmamalıdır.
`),
      dene: ["sf-u1-bir-bit", "sf-u1-kaba-kuvvet"],
    },
    {
      baslik: "Kodlama, hash, şifreleme: üç farklı iş",
      metin: md(`
Yeni başlayanların en sık karıştırdığı üç işlem bunlardır. Farkı tek bir soruyla anlarsın: **geri dönülebiliyor mu, dönülüyorsa ne gerekiyor?**

| İşlem | Örnek | Geri dönüş | Ne işe yarar |
|---|---|---|---|
| **Kodlama** | Base64, hex, URL kodlama | Herkes, sırsız | Veriyi başka bir kanalda taşımak |
| **Hash** | SHA-256, SHA-3 | Hiç kimse | Parmak izi: bütünlük, karşılaştırma |
| **Şifreleme** | AES, ChaCha20 | Yalnız anahtarı bilen | Gizlilik |

Aşağıda aynı metin üç işlemden birden geçiyor. Metni değiştir ve her kutunun nasıl tepki verdiğine bak:

[[G-S1-01]]

**Kodlama** bir gösterim değişikliğidir. E-posta, JSON ya da URL gibi kanallar her baytı taşıyamaz; Base64 ikili veriyi yalnız harf, rakam, ~+~ ve ~/~ ile yazar. Her 3 bayt 4 karaktere dönüşür, bu yüzden veri yaklaşık üçte bir büyür. Anahtar yoktur: ~U2lmcmU=~ gördüğün anda "Sifre" olduğunu herkes çözer.

**Hash** her uzunluktaki girişi sabit uzunlukta bir özete indirir: SHA-256'nın çıktısı 1 baytlık bir girişte de 1 GB'lık bir dosyada da 256 bittir (64 hex karakter). Girişteki tek bir bit değişirse çıktı tamamen değişir; çıktıdan girişi bulmak mümkün değildir. Bir dosyanın yolda bozulup bozulmadığını anlamak için idealdir.

**Şifreleme** gizlilik sağlar: şifreli metin, anahtarı bilmeyen için rastgele baytlardan ayırt edilemez, anahtarı bilen ise açık metni geri alır.

> **Sık yapılan hata:** Parolaları Base64 ile "şifreleyerek" saklamak. Base64 hiçbir şey gizlemez. Parolalar ne kodlanır ne de geri çözülebilir biçimde şifrelenir; **yavaş bir parola hash'iyle** saklanır (9. ünite).
`),
      dene: ["sf-u1-base64-coz", "sf-u1-hash-sabit"],
      lab: "uc-kutu",
    },
    {
      baslik: "Metin nasıl bayta dönüşür?",
      metin: md(`
Şifreleme algoritmaları harflerle değil **baytlarla** çalışır. Bir bayt 8 bittir ve 0 ile 255 arasında bir sayıdır. Metni bayta çeviren kurala **karakter kodlaması** denir; bugün neredeyse her yerde **UTF-8** kullanılır.

- İngiliz alfabesindeki harfler, rakamlar ve noktalama ASCII'deki gibi tek bayttır: "A" 65'tir, onaltılık (hex) yazımla ~41~.
- Türkçenin ş, ğ, ı, İ, ç, ö, ü harfleri **iki bayt** tutar: "ş" UTF-8'de ~C5 9F~'dur. Bu yüzden "şifre" kelimesi 5 harf ama 6 bayttır.

Baytları yazmanın iki yaygın yolu vardır. **Hex** her baytı iki onaltılık basamakla yazar (her basamak tam 4 bit): ~A5~ = ~1010 0101~. **Base64** ise her 6 biti bir karaktere çevirir ve daha kısa yer tutar. 256 bitlik bir anahtar 32 bayttır; hex ile 64 karakter, Base64 ile 44 karakter olarak görünür.

[[G-S1-02]]

> **İpucu:** Bu sitede şifreli metinleri, anahtarları ve hash'leri hep hex ya da Base64 olarak göreceksin. İkisi de yalnızca **gösterimdir**; aynı baytları iki farklı biçimde yazar.
`),
      dene: ["sf-u1-utf8-s", "sf-u1-anahtar-hex"],
      lab: "bayt",
    },
    {
      baslik: "Tek anahtar mı, anahtar çifti mi?",
      metin: md(`
Şimdiye kadar konuştuğumuz şifrelemede iki taraf **aynı gizli anahtarı** paylaşır. Buna **simetrik şifreleme** denir: kilidi kapatan ve açan anahtar aynıdır. AES ve ChaCha20 simetriktir, çok hızlıdır ve verinin asıl yükünü onlar taşır.

Simetrik şifrelemenin bir yumurta-tavuk sorunu vardır: anahtarı karşı tarafa nasıl güvenle ulaştıracaksın? Kafede oturan iki yabancı, ağı dinleyen birinin önünde ortak bir sır kuramaz gibi görünür. Ayrıca büyük bir grupta herkesin herkesle ayrı bir anahtarı olacaksa, $n$ kişi için $\\frac{n(n-1)}{2}$ anahtar gerekir.

1976'da Whitfield Diffie ve Martin Hellman, dinlenen bir kanaldan ortak sır üretmenin yolunu gösterdi; bir yıl sonra RSA geldi. Bu **açık anahtarlı** (asimetrik) kriptografide her kişinin bir **anahtar çifti** vardır: herkese verilen bir **açık anahtar** ve yalnız sahibinde duran bir **özel anahtar**.

> **Gerçek dünyada:** Bir web sitesine HTTPS ile bağlandığında önce açık anahtarlı bir yöntemle (bugün çoğunlukla X25519) bir oturum anahtarı kurulur, sonra sayfanın kendisi bu anahtarla AES-GCM ya da ChaCha20-Poly1305 kullanılarak simetrik şifrelenir. İkisinin birlikte kullanılmasına **hibrit şifreleme** denir. Ayrıntıları 10-12. ünitelerde göreceksin.
`),
      dene: ["sf-u1-simetrik"],
    },
    {
      baslik: "Tehdit modeli: kimden koruyoruz?",
      metin: md(`
"Bu uygulama güvenli mi?" sorusunun cevabı her zaman "**Kime karşı?**" sorusuyla başlar. Bir sistemi tasarlarken kimden, neyi ve hangi yeteneklere karşı koruduğumuzu yazdığımız tanıma **tehdit modeli** denir.

Aynı mesajlaşma uygulamasını farklı saldırganlar farklı görür:

| Saldırgan | Yalnız TLS (HTTPS) | Uçtan uca şifreleme |
|---|---|---|
| Kafe Wi-Fi'ını dinleyen kişi | Şifreli bayt görür | Şifreli bayt görür |
| Sunucuyu işleten şirket | **Okunur metin** görür | Şifreli bayt ve metadata görür |
| Kilidi açık telefonu ele geçiren | Okunur metin görür | Okunur metin görür |

TLS yalnız **yolu** korur: mesaj sunucuya varınca açılır. Uçtan uca şifreleme ise sunucuya karşı da korur, ama kilidi açık bir telefonu ele geçiren kişiye karşı hiçbir şifreleme işe yaramaz; o kişi ekrandakini okur. Hiçbir tasarım bütün saldırganlara karşı aynı anda korumaz; iyi bir tasarım tehdit modelindekilere karşı korur ve kalan riskleri açıkça yazar.

Bu sitenin **Mesajlaşma Simülatörü** tam olarak bunu yaptıracak: kendi uygulamanın ayarlarını seçeceksin, sonra her saldırganın gözünden aynı sohbete bakacaksın.

> **Gerçek dünyada:** Bir uygulamanın güvenlik sayfasında "verileriniz şifreleniyor" yazması bir şey söylemez. Doğru sorular şunlardır: **yolda mı, sunucuda mı, uçtan uca mı** şifreleniyor; anahtarlar **kimde**; yedekler **nasıl** saklanıyor; şirket **kimin kime ne zaman** yazdığını görüyor mu?
`),
      dene: ["sf-u1-tls-sunucu"],
    },
  ],
  test: [
    "sf-u1-gizlilik", "sf-u1-kimlik", "sf-u1-inkar", "sf-u1-ilke", "sf-u1-acik-avantaj", "sf-u1-fark", "sf-u1-128-bit",
    "sf-u1-base64-sifre", "sf-u1-base64-boyut", "sf-u1-neden-var", "sf-u1-geri-donus", "sf-u1-hangisi", "sf-u1-tablo",
    "sf-u1-hex-a", "sf-u1-bit-desen", "sf-u1-dagitim", "sf-u1-anahtar-sayisi", "sf-u1-tanim", "sf-u1-mutlak",
  ],
};
