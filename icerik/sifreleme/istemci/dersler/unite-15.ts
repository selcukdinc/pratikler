import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_15: Ders = {
  hafta: 15,
  baslik: "Sıfır bilgili depolama",
  ozet: "Parola yöneticisi şirketi senin parolalarını nasıl saklar da kendisi göremez? Ana paroladan kasa anahtarına uzanan zinciri gerçek anahtarlarla kur, sunucunun veritabanında neyin durduğuna bak ve \"parolamı unuttum\" dediğinde neden kimsenin yardım edemediğini gör.",
  bolumler: [
    {
      baslik: "Sunucu tarafı ile istemci tarafı şifreleme",
      metin: md(`
Bulut hizmetlerinin neredeyse hepsi "verileriniz şifreli" der. Bu cümle iki çok farklı şey anlatabilir:

- **Sunucu tarafı şifreleme:** Veri sunucuya açık gelir, sunucu onu kendi anahtarıyla şifreleyip diske yazar. Veri merkezinden çalınan bir disk okunamaz. Ama sunucu, isteyen kullanıcıya göndermek için veriyi her an çözebilir; o halde yöneticisi, ele geçiren saldırgan ya da şirkete gelen resmi bir talep de çözebilir.
- **İstemci tarafı şifreleme:** Veri senin cihazında, sunucunun hiç görmediği bir anahtarla şifrelenir; sunucuya yalnız şifreli baytlar gider. Sağlayıcı istese de içeriği okuyamaz.

İkincisine pazarlamada **sıfır bilgili** (zero-knowledge) depolama denir: sağlayıcı verin hakkında "sıfır bilgiye" sahiptir. 13. ünitedeki uçtan uca şifrelemenin depolamadaki karşılığıdır; burada iki uç aynı kişidir: bugünkü sen ve yarınki sen.

Sorulacak tek soru şudur: **anahtar kimin elinde?** AES-256'nın gücü, anahtar sağlayıcıdaysa hiçbir şey ifade etmez.
`),
      dene: ["sf-u15-anahtar-kimde", "sf-u15-sunucu-tarafi", "sf-u15-neyi-korur"],
    },
    {
      baslik: "Ana paroladan anahtar zincirine",
      metin: md(`
İstemci tarafı şifrelemenin ilk sorunu şudur: anahtar nereden gelecek? Kullanıcıdan 32 rastgele bayt ezberlemesini isteyemeyiz. Parola yöneticilerinin hepsi aynı fikre dayanır: anahtar, yalnız kullanıcının bildiği **ana paroladan** türetilir.

Zincir birkaç halkadan oluşur:

1. **Ana anahtar:** Ana parola, 9. ünitedeki yavaş bir KDF'den (PBKDF2 ya da Argon2) geçirilir. Tuz olarak çoğu zaman e-posta adresi kullanılır; böylece aynı parolayı seçen iki kişi farklı anahtarlar alır.
2. **Giriş özeti** ve **anahtar şifreleme anahtarı:** Ana anahtardan HKDF ile iki ayrı değer türetilir. Biri sunucuya giriş için gönderilir, öteki cihazdan hiç çıkmaz.
3. **Kasa anahtarı:** Rastgele üretilmiş 256 bitlik bir anahtardır. Anahtar şifreleme anahtarıyla AES-GCM kullanılarak **sarılır** ve sarılı hali sunucuda saklanır.
4. **Öğe anahtarları:** Her parolanın, notun ya da dosyanın kendi rastgele anahtarı vardır ve kasa anahtarıyla sarılır.

Aşağıdaki tezgahta bu zincir Web Crypto ile gerçekten kuruluyor. Parolayı değiştir ve her halkanın nasıl değiştiğine, alttaki "sunucunun veritabanında duranlar" tablosuna bak:

[[G-S15-01]]

Sunucuyu tamamen ele geçiren saldırganın elinde ne kalır? Tuz, yineleme sayısı ve sarılı baytlar. Tek yolu parolayı tahmin edip her tahmin için KDF'yi çalıştırmaktır. Bu yüzden sıfır bilgili bir kasanın gücü **ana parolanın** gücüdür: 10.000 kelimelik bir listeden rastgele seçilmiş dört kelime $10^{16}$ olasılık verir; saniyede 10.000 deneme yapan bir saldırganın hepsini denemesi 30.000 yılı aşar.
`),
      dene: ["sf-u15-kdf-neden", "sf-u15-tuz", "sf-u15-yineleme-artir"],
      lab: "anahtar-zinciri",
    },
    {
      baslik: "Girişi şifrelemeden ayırmak",
      metin: md(`
Sunucu kullanıcıyı tanımalıdır: başkası senin e-postanla gelip şifreli kasanı indirmemeli. Ama giriş için ana parolayı sunucuya göndermek bütün tasarımı çökertir: parolayı bir kez gören sunucu onu kaydedip kasayı istediği zaman açabilir.

Çözüm, ana anahtardan **farklı etiketlerle** iki değer türetmektir:

$$\\text{giriş özeti} = \\text{HKDF}(\\text{ana anahtar}, \\texttt{"giris"}) \\qquad K_{\\text{şifreleme}} = \\text{HKDF}(\\text{ana anahtar}, \\texttt{"sifreleme"})$$

HKDF'nin çıktıları birbirinden bağımsızdır: giriş özetini bilen biri şifreleme anahtarını hesaplayamaz. Sunucu giriş özetini de düz saklamaz, bir kez daha hash'leyip saklar (9. ünitedeki parola saklama ilkesi). Böylece veritabanı sızsa bile o değerle giriş yapılamaz.

Bazı ürünler bir adım daha ileri gider ve **OPAQUE** gibi parola tabanlı anahtar anlaşması protokolleri kullanır: sunucu girişte parolanın hiçbir türevini görmez.
`),
      dene: ["sf-u15-ayri", "sf-u15-dogrulayici", "sf-u15-parola-gonder"],
    },
    {
      baslik: "Zarf şifreleme: neden ara bir kasa anahtarı?",
      metin: md(`
Neden öğeleri doğrudan paroladan türeyen anahtarla şifrelemiyoruz da araya rastgele bir kasa anahtarı koyuyoruz? Çünkü parolalar değişir.

Kasada 2.000 öğe olsun. Öğeler doğrudan parolaya bağlı olsaydı, parola her değiştiğinde 2.000 öğenin hepsi çözülüp yeniden şifrelenmeli, sunucuya yeniden yüklenmeliydi. Ara bir kasa anahtarı varken yalnız **32 baytlık** kasa anahtarı yeni parolanın anahtarıyla yeniden sarılır. Tezgahta "Parolayı değiştir" düğmesine bastığında tabloda yalnız iki satırın değiştiğini görebilirsin.

Bu yapıya **zarf şifreleme** (envelope encryption) denir: veri, rastgele bir veri anahtarıyla şifrelenir; veri anahtarı da bir **anahtar şifreleme anahtarıyla** (KEK) sarılır. Aynı fikir her yerde karşına çıkar:

- Disk şifreleme, 1 TB'lık diskin parolasını saniyeler içinde değiştirir.
- Bulut sağlayıcılarının anahtar yönetim hizmetleri, milyonlarca nesnenin anahtarını birkaç ana anahtarla yönetir ve ana anahtarı donanım güvenlik modülünden hiç çıkarmaz.
- KDF'nin yineleme sayısını artırmak ya da PBKDF2'den Argon2'ye geçmek de yalnız sargıyı yeniler.
`),
      dene: ["sf-u15-parola-degisince", "sf-u15-disk", "sf-u15-ad"],
    },
    {
      baslik: "Paylaşmak",
      metin: md(`
Ailene ortak Wi-Fi parolasını ya da bir ekip arkadaşına sunucu parolasını paylaşmak istiyorsun, ama sunucu yine görmemeli. Her öğenin kendi anahtarı olmasının asıl kazancı burada ortaya çıkar.

Her kullanıcının kasasında bir de **açık anahtar çifti** (RSA ya da X25519) vardır; özel anahtar kasa anahtarıyla sarılı durur, açık anahtar sunucuda yayımlanır. Ayşe bir öğeyi Mert'le paylaşırken:

1. Sunucudan Mert'in açık anahtarını alır.
2. Öğenin anahtarını Mert'in açık anahtarına sarar ve sunucuya bırakır.
3. Mert kendi özel anahtarıyla öğe anahtarını açar, öğeyi çözer.

Ayşe'nin öteki öğeleri ve kasa anahtarı hiç paylaşılmaz. Burada iki tanıdık tuzak vardır:

- **Sahte açık anahtar:** Sunucu, Mert'in anahtarı yerine kendi anahtarını verirse paylaşılan öğeyi okur. Bu, 13. ünitedeki güvenlik numarası sorununun aynısıdır; anahtarların parmak iziyle doğrulanması gerekir.
- **Geri alma:** Paylaşım kaldırıldığında öğe yeni bir anahtarla şifrelenmezse, eski anahtarı saklayan kişi o sürümü okumayı sürdürebilir.
`),
      dene: ["sf-u15-nasil", "sf-u15-geri-alma", "sf-u15-sahte-acik"],
    },
    {
      baslik: "Parolamı unuttum",
      metin: md(`
Sıfır bilgili sistemlerin en sert yüzü budur: ana parolayı unutursan ve başka bir kurtarma yolu kurmadıysan, **verin gider**. Destek ekibi yardım edemez; edebiliyorsa sistem sıfır bilgili değildir.

Kurtarma yolları ve bedelleri:

- **Kurtarma kodu:** Kasa anahtarı, rastgele ve yüksek entropili bir kodla ikinci kez sarılır. Kodu kâğıda yazıp saklamak kullanıcının işidir. 160 bitlik bir kod kaba kuvvetle denenemez.
- **Güvenilir kişiler:** Kurtarma anahtarı eşik sır paylaşımıyla birkaç kişiye bölünür; örneğin beş kişiden herhangi üçü bir araya gelince açılır (16. ünite).
- **Kurumsal emanet:** Şirket hesaplarında kasa anahtarı kurumun açık anahtarına da sarılır. Ayrılan çalışanın verisi kurtarılır, ama kurum her çalışanın kasasını da açabilir.
- **Donanım modülleri:** Sağlayıcı, deneme sayısını sınırlayan donanım güvenlik modülleriyle kısa bir PIN'den kurtarma sunar (14. ünitedeki yedekler).

Aşağıdaki tabloda dört mimariyi dört olayla karşılaştır:

[[G-S15-02]]

Hiçbir mimari her sütunda ✓ almaz. **Kurtarabilen biri varsa, o kişi (ya da onu zorlayan) veriye de ulaşabilir.** Doğru seçim tehdit modeline bağlıdır: bir gazetecinin kasası ile bir şirketin muhasebe parolaları aynı cevabı vermez.
`),
      dene: ["sf-u15-unuttum", "sf-u15-kurum", "sf-u15-guvenilir-kisi"],
      lab: "kurtarma",
    },
    {
      baslik: "\"Sıfır bilgi\" ne demek, ne demek değil?",
      metin: md(`
"Sıfır bilgi" kriptografide başka bir şeyin adıdır: **sıfır bilgi ispatı**, bir şeyi bildiğini o şeyi açıklamadan kanıtlamaktır. Pazarlamadaki "sıfır bilgi mimarisi" ise "sağlayıcı verini göremez" demektir ve çoğu ürün bunu ispatla değil, istemci tarafı şifrelemeyle sağlar.

Bir ürünün bu sözü ne kadar hak ettiğini anlamak için şu sorulara bakılır:

- **Kodu kim veriyor?** Kasayı web arayüzünde açıyorsan, şifreleme kodunu her açılışta sunucu gönderir. Tek bir kullanıcıya hedefli kötü niyetli bir sürüm göndermek mümkündür (14. ünitedeki kötü niyetli güncelleme). İmzalı masaüstü ve mobil uygulamalar bu riski azaltır.
- **Metadata ne kadar?** İçerik şifrelidir, ama dosya sayısı, boyutları, erişim zamanları ve bazı ürünlerde dosya adları sağlayıcıya görünür.
- **KDF ve varsayılanlar ne?** Düşük yinelemeli PBKDF2 ile korunan bir kasa, sızıntıdan sonra zayıf parolalar için hızla kırılır.

Aşağıdaki not defteri, bu ünitenin bütün zincirini kullanıyor. Notlarını yaz, şifrele ve sağ kutuda "sunucuya" giden JSON'a bak:

[[G-S15-03]]

> **Gerçek dünyada nerede karşına çıkar:**
> - **Parola yöneticileri:** Bitwarden, 1Password ve benzerleri bu ünitedeki zinciri kullanır; Bitwarden'ın güvenlik belgesi zincirin her halkasını açıkça anlatır.
> - **Bir parola yöneticisinin 2022 sızıntısı:** Saldırganlar müşterilerin şifreli kasa yedeklerini aldı. İçerik şifreliydi, ama bazı alanlar (ör. site adresleri) şifresizdi ve eski hesaplarda yineleme sayısı düşüktü; zayıf parolalı kasaların sonradan kırıldığı bildirildi.
> - **Telefon yedekleri:** iCloud'un "Gelişmiş Veri Koruması" ve Android'in şifreli yedekleri, açıldığında yedek anahtarını sağlayıcıdan alır ve cihazlara bırakır.
> - **Şifreli not ve dosya uygulamaları:** Standard Notes, Proton Drive gibi ürünler her öğeyi kendi anahtarıyla şifreler ve paylaşımı açık anahtarlarla yapar.
> - **Kurumsal anahtar yönetimi:** Bulut sağlayıcılarının KMS hizmetleri zarf şifrelemenin büyük ölçekli halidir.
`),
      dene: ["sf-u15-web", "sf-u15-zkp", "sf-u15-gorunen"],
      lab: "not-defteri",
    },
  ],
  test: ["sf-u15-deneme", "sf-u15-kod-entropi"],
};
