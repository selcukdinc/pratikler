import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_9: Ders = {
  hafta: 9,
  baslik: "Parola Saklama ve KDF",
  ozet: "Bir sitenin parola veritabanı sızdığında ne olur? Düz metinden düz hash'e, tuzdan yavaş ve bellek-zor fonksiyonlara uzanan yolu adım adım kur. Sonra HKDF ile tek bir sırdan çok sayıda anahtar türetmeyi ve parolasız girişin neden daha güvenli olduğunu gör.",
  bolumler: [
    {
      baslik: "Veritabanı sızınca",
      metin: md(`
Her sitenin veritabanı bir gün sızabilir: yanlış yapılandırılmış bir yedek, bir SQL enjeksiyonu, bir çalışanın dizüstü bilgisayarı. Tasarımın sorusu şudur: **sızdığında parolalar ne kadar dayanır?**

Sunucunun parolayı **bilmesi gerekmez**, yalnız doğrulaması gerekir. Bu yüzden parola şifrelenmez, hash'lenir. Ama her hash aynı değildir. Aşağıda aynı on iki kullanıcının tablosu dört farklı biçimde saklanıyor. Önce düz metin ve SHA-256'ya bak, sonra sözlükle saldır:

[[G-S9-02]]

- **Düz metin:** Parolalar doğrudan okunur. İnsanlar aynı parolayı birçok yerde kullandığı için sızan liste başka sitelerde otomatik denenir (**credential stuffing**).
- **Düz hash (SHA-256):** Parolalar ilk bakışta görünmez, ama aynı parolayı kullananların özetleri **aynıdır**. Saldırgan yaygın parolalardan oluşan bir sözlüğü bir kez hash'ler ve bütün tabloyla eşleştirir. Üstelik SHA-256 hızlı olmak için tasarlandı: tek bir ekran kartı saniyede yaklaşık 20 milyar SHA-256 hesaplar.

2012'de LinkedIn'den 6,5 milyon tuzsuz SHA-1 özeti sızdı ve günler içinde büyük çoğunluğu kırıldı. 2016'da aynı sızıntının 117 milyonluk tam hali ortaya çıktı.
`),
      dene: ["sf-u9-duz-metin", "sf-u9-duz-hash", "sf-u9-sizan-ozet"],
      lab: "sizan-veritabani",
    },
    {
      baslik: "Tuz ve biber",
      metin: md(`
**Tuz** (salt), her kullanıcı için CSPRNG'den üretilen rastgele bir değerdir (en az 16 bayt). Parolayla birlikte hash'lenir ve özetin yanında **açıkça** saklanır. Gizli değildir. Görevi iki şeydir:

- Aynı parolayı kullanan iki kullanıcının özetleri artık farklıdır; tablodan "kim aynı parolayı kullanıyor" okunamaz.
- Saldırgan bir sözlüğü bütün tabloya bir kerede uygulayamaz; her kullanıcı için baştan hash'lemesi gerekir.

Tuz, **gökkuşağı tablolarını** da işe yaramaz hale getirir. Bunlar belirli bir hash için önceden hesaplanmış devasa parola-özet zincirleridir: hesap bir kez yapılır, sonra her özet saniyeler içinde aranır. Her kullanıcıya ayrı bir tuz eklenince her tuz için ayrı tablo gerekir ve önceden hesaplama anlamını yitirir.

**Biber** (pepper) ise bütün kullanıcılar için ortak olan **gizli** bir değerdir. Veritabanında değil, uygulamanın yapılandırmasında ya da bir donanım güvenlik modülünde (HSM) saklanır. Yalnız veritabanı sızar da sunucu sızmazsa, özetler biber bilinmeden denenemez. Biber tuzun yerine geçmez, ona eklenir.

Ama tuz tek başına yetmez. Sızan veritabanı deneyinde "SHA-256 + tuz" seçeneğine geç: saldırganın işi kullanıcı sayısıyla çarpıldı, ama SHA-256 hâlâ o kadar hızlı ki bu fark bir GPU için önemsizdir.
`),
      dene: ["sf-u9-salt-tanim", "sf-u9-salt-gizli", "sf-u9-gokkusagi", "sf-u9-pepper"],
    },
    {
      baslik: "Bilerek yavaş: PBKDF2 ve bcrypt",
      metin: md(`
Kaba kuvvetin maliyeti **deneme sayısı × deneme başına süre**dir. Deneme sayısını parolanın entropisi belirler (2. ünite); kullanıcılar bunu pek artırmaz. Ama deneme başına süreyi biz seçebiliriz. Bir girişte 100 ms kullanıcı için fark edilmez; saldırgan için saniyede milyarlarca deneme saniyede birkaç bine iner.

[[G-S9-01]]

- **PBKDF2** (RFC 8018): HMAC'i tuzla birlikte binlerce, hatta yüz binlerce kez zincirler. OWASP 2023'te PBKDF2-HMAC-SHA256 için **600.000** yineleme önerdi. Web Crypto PBKDF2'yi destekler. Aşağıda tarayıcında ne kadar sürdüğünü ölç.
- **bcrypt** (1999): Blowfish şifresinin pahalı anahtar hazırlığına dayanır. Maliyet parametresi bir artınca süre iki katına çıkar. Yalnız girdinin ilk 72 baytını kullanır.

[[G-S9-03]]

Bu fonksiyonların ortak zayıflığı yalnız **işlem** istemeleridir. Bir ekran kartının binlerce çekirdeği binlerce PBKDF2'yi paralel çalıştırır. Bitcoin madenciliği için üretilen özel çipler (ASIC) SHA-256'yı daha da hızlı hesaplar. Saldırganın donanımı, sunucununkinden çok daha verimli olabilir.

> **Matematiğe in:** Rastgele seçilmiş $L$ karakterlik bir parolanın $N$ harflik alfabeden geldiğini varsayalım. Olası parola sayısı $N^L$, ortalama deneme $N^L / 2$'dir. Saniyede $v$ deneme yapan saldırgan için ortalama süre $T = N^L / (2v)$'dir. Yineleme sayısını $c$ kat artırmak $v$'yi $c$ kat düşürür. $c = 600.000$ ile bu kabaca $\\log_2 600.000 \\approx 19{,}2$ bit ek entropiye denk gelir: parolaya yaklaşık üç rastgele karakter eklemek gibi.
`),
      dene: ["sf-u9-neden-yavas", "sf-u9-pbkdf2", "sf-u9-bcrypt"],
      lab: "kaba-kuvvet",
    },
    {
      baslik: "Bellek-zor: scrypt ve Argon2id",
      metin: md(`
GPU ve ASIC'lerin bol hesap birimi vardır ama hızlı bellekleri sınırlıdır. **Bellek-zor** fonksiyonlar her deneme için büyük bir bellek alanını (ör. 64 MiB) doldurup rastgele sırayla okur. Binlerce paralel deneme binlerce kez o kadar bellek ister; saldırganın paralellik avantajı büyük ölçüde kaybolur.

- **scrypt** (Colin Percival, 2009): ilk yaygın bellek-zor KDF. Litecoin gibi kripto paralar da kullandı.
- **Argon2** (2015 Parola Hash'leme Yarışması'nın kazananı, RFC 9106): üç parametresi vardır: **bellek** ($m$), **yineleme** ($t$) ve **paralellik** ($p$). **Argon2id** varyantı yan kanallara dayanıklı Argon2i ile GPU'ya dayanıklı Argon2d'yi birleştirir ve bugün önerilen seçimdir.

Parametre seçimi pratiktir: önce sunucunun her giriş için ayırabileceği belleği, sonra kabul edilebilir süreyi (birkaç yüz milisaniye) belirle. OWASP'ın asgari önerisi 19 MiB bellek, 2 yineleme, 1 paralelliktir. Parametreler özetin içinde saklanır. Böylece donanım hızlandıkça artırılabilirler: kullanıcı bir sonraki girişinde parolasını yazınca özet yeni parametrelerle yeniden hesaplanır.

Web Crypto Argon2'yi sunmaz; tarayıcıda WebAssembly kütüphaneleri, sunucuda dillerin standart kütüphaneleri ya da libsodium (~crypto_pwhash~) kullanılır.
`),
      dene: ["sf-u9-bellek-zor", "sf-u9-argon2id", "sf-u9-parametre"],
      lab: "pbkdf2",
    },
    {
      baslik: "HKDF: anahtardan anahtar",
      metin: md(`
Her anahtar türetme işi paroladan başlamaz. Bir Diffie-Hellman değişiminden (10. ünite) çıkan ortak sır zaten yüksek entropilidir, ama düzgün dağılmış değildir. Ayrıca bir oturumda tek anahtar yetmez: şifreleme için bir, MAC için bir, her yön için ayrı anahtar gerekir. Bunun için **HKDF** kullanılır (Krawczyk, RFC 5869). İki adımlıdır:

1. **Extract:** $\\text{PRK} = \\text{HMAC}(\\text{tuz}, \\text{sır})$. Düzgün dağılmamış sırrı sabit uzunlukta, güçlü bir anahtara çevirir.
2. **Expand:** $\\text{PRK}$'den farklı **info** etiketleriyle istenen uzunlukta ve sayıda anahtar türetir.

HKDF hızlıdır ve deterministiktir: aynı sır ve aynı etiket her zaman aynı anahtarı verir. Farklı etiketler birbirinden bağımsız anahtarlar verir:

[[G-S9-04]]

HKDF **parola için değildir**. Parolanın entropisi düşük olduğu için hızlı bir KDF'yle türetilen anahtar saniyede milyonlarca denemeyle bulunur. Paroladan anahtar türetmek gerekirse önce Argon2id ya da yeterli yinelemeli PBKDF2 kullanılır; çıkan anahtardan alt anahtarlar gerekiyorsa sonra HKDF uygulanır.

TLS 1.3'ün bütün anahtar takvimi (12. ünite) ve Signal'in Double Ratchet'i (13. ünite) HKDF üzerine kuruludur.
`),
      dene: ["sf-u9-hkdf-tanim", "sf-u9-hkdf-parola", "sf-u9-info"],
    },
    {
      baslik: "Parola yöneticileri ve parolasız giriş",
      metin: md(`
Sunucu ne yaparsa yapsın, iki sitede aynı parolayı kullanan kullanıcı, zayıf saklayan sitenin sızıntısıyla ötekinde de açığa çıkar. Kullanıcı tarafındaki en etkili önlem **parola yöneticisidir**. Her site için CSPRNG'den uzun ve rastgele bir parola üretir; kullanıcı yalnız bir ana parolayı hatırlar. Kasa, ana paroladan bellek-zor bir KDF'yle türetilen anahtarla cihazda şifrelenir. Sunucu yalnız şifreli kasayı görür (15. ünite).

Daha da iyisi, paylaşılan bir sırrı tamamen ortadan kaldırmaktır. **Geçiş anahtarları** (passkeys, WebAuthn) açık anahtarlı kriptografi kullanır. Cihaz her site için bir anahtar çifti üretir; site yalnız açık anahtarı saklar. Sızan açık anahtar işe yaramaz. Girişte cihaz, sitenin gönderdiği rastgele bir meydan okumayı imzalar. Tarayıcı imzaya sitenin **alan adını** da katar. Benzer adlı sahte bir sayfa geçerli imza alamaz; oltalamaya karşı en güçlü korumadır.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Sızıntı kontrolü:** "Have I Been Pwned" sitesi parolanın SHA-1 özetinin yalnız ilk 5 hex karakterini alır ve o önekle başlayan yüzlerce özeti döndürür. Karşılaştırma tarayıcıda yapılır; parola da tam özeti de siteye gitmez (k-anonimlik).
> - **İşletim sistemleri:** Linux ~/etc/shadow~ dosyasında yescrypt ya da SHA-512 crypt, macOS PBKDF2, Windows ise eski ve tuzsuz NT özetleri saklar. Windows'un bu özetleri pass-the-hash saldırılarının hedefidir.
> - **Disk şifreleme:** LUKS2 diskin anahtarını parolandan Argon2id ile türetir; BitLocker ve FileVault da paroladan anahtar türetir.
> - **Wi-Fi:** WPA2 Wi-Fi parolasından PBKDF2 (4096 yineleme, ağ adı tuz olarak) ile anahtar türetir. Bu yüzden zayıf bir Wi-Fi parolası yakalanan bir el sıkışmadan çevrimdışı kırılabilir. WPA3 bunun yerine SAE el sıkışmasını kullanır.
> - **Passkeys:** Apple, Google ve Microsoft hesapları ve birçok büyük site 2023'ten beri parolasız girişi destekliyor.
`),
      dene: ["sf-u9-yonetici", "sf-u9-passkey"],
    },
  ],
  test: ["sf-u9-salt-boyu", "sf-u9-pbkdf2-sayi"],
};
