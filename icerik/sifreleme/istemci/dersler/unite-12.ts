import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_12: Ders = {
  hafta: 12,
  baslik: "Sertifikalar, PKI ve TLS",
  ozet: "Adres çubuğundaki kilit ne anlama geliyor? Bir açık anahtarın gerçekten o siteye ait olduğunu kanıtlayan sertifika zincirini kendi elinle kır, TLS 1.3 el sıkışmasını adım adım izle ve HTTPS'in kafedeki saldırgandan neyi sakladığını, neyi saklayamadığını gör.",
  bolumler: [
    {
      baslik: "Bu anahtar kimin?",
      metin: md(`
Açık anahtarlı kriptografinin anahtar dağıtımını çözdüğünü 10. ve 11. ünitelerde gördük. Ama yeni bir soru doğdu: aldığın açık anahtar **gerçekten** bankanın mı? Kafedeki saldırgan sana kendi anahtarını "bankanın anahtarı" diye verirse şifreleme kusursuz çalışır, ama saldırgana. Diffie-Hellman'daki ortadaki adam tam budur.

Bu soruya üç farklı cevap verildi:

- **İlk kullanımda güven (TOFU):** SSH ilk bağlantıda sunucunun parmak izini gösterir ve kaydeder. Anahtar sonradan değişirse büyük bir uyarı verir. Basittir, ama ilk bağlantının dinlenmediğini varsayar.
- **Güven ağı:** PGP'de kullanıcılar birbirlerinin anahtarlarını imzalayarak kefil olur. Merkezi bir otorite yoktur, ama yöntem geniş kitlelere ölçeklenmedi.
- **Sertifika otoriteleri:** Web, az sayıda güvenilir kuruluşun (CA) "bu anahtar bu alan adınındır" diye imza attığı merkezi bir model seçti. Bu yapının tamamına **açık anahtar altyapısı** (PKI) denir.
`),
      dene: ["sf-u12-sorun", "sf-u12-parmak-izi", "sf-u12-web-of-trust"],
    },
    {
      baslik: "Sertifikalar ve güven zinciri",
      metin: md(`
Bir **X.509 sertifikası**, bir alan adını bir açık anahtara bağlayan ve bir CA'nın imzaladığı belgedir. İçinde konu (alan adı), açık anahtar, geçerlilik tarihleri, izin verilen kullanımlar ve yayıncı vardır. Özel anahtar sertifikada değil, sunucudadır.

Tarayıcı sertifikaya neden güvenir? Bir **zincir** sayesinde:

1. **Yaprak sertifika:** sitenin kendisi; bir ara CA tarafından imzalanmıştır.
2. **Ara CA:** bir kök CA tarafından imzalanmıştır. Gündelik işi ara CA'lar yapar.
3. **Kök CA:** kendi kendini imzalamıştır. İşletim sistemi ya da tarayıcının **güven deposunda** gelir. Kök anahtarları çoğunlukla çevrimdışı donanım güvenlik modüllerinde saklanır.

Tarayıcı her imzayı bir üst halkanın açık anahtarıyla doğrular, tarihleri ve adı denetler, kökün güven deposunda olup olmadığına bakar. Aşağıdaki üç sertifika Web Crypto ile gerçekten imzalanıyor. Halkaları tek tek kır ve hangi denetimin düştüğüne bak:

[[G-S12-02]]

Sistemin zayıf noktası, güven deposundaki **herhangi bir** CA'nın **herhangi bir** alan adı için sertifika verebilmesidir. 2011'de Hollandalı CA DigiNotar ele geçirildi; saldırgan büyük bir arama motoru dahil yüzlerce alan adı için sahte sertifika üretti ve bunlar bir ülkede kullanıcıları dinlemek için kullanıldı. Tarayıcılar DigiNotar kökünü güven deposundan çıkardı ve şirket aynı yıl iflas etti.

Sertifikaların ömrü de kısalıyor. CA/Browser Forum'un 2025'te kabul ettiği karara göre azami süre Mart 2026'dan itibaren 200 gün, Mart 2027'den itibaren 100 gün, Mart 2029'dan itibaren 47 gün olacak. Kısa ömür, sızan bir anahtarın zararını sınırlar ve yenilemeyi **ACME** protokolüyle otomatikleştirmeyi zorunlu kılar. 2015'te ücretsiz ve otomatik sertifikayla başlayan Let's Encrypt, HTTPS'i webin varsayılanı yapan en büyük etkenlerden biri oldu.
`),
      dene: ["sf-u12-icerik", "sf-u12-zincir", "sf-u12-kok-cevrimdisi", "sf-u12-diginotar"],
      lab: "sertifika",
    },
    {
      baslik: "İptal ve Certificate Transparency",
      metin: md(`
Sunucunun özel anahtarı sızarsa sertifikanın süresi dolmadan **iptal** edilmesi gerekir. Tarayıcının bunu öğrenmesinin yolları:

- **CRL:** CA'nın yayımladığı iptal edilmiş seri numaraları listesi. Büyüyebilir, ama tarayıcı kimi ziyaret ettiğini kimseye söylemez.
- **OCSP:** Tarayıcı her bağlantıda CA'ya "bu sertifika geçerli mi?" diye sorar. Bu, CA'ya kimin hangi siteye girdiğini bildirir; üstelik sorgu yanıtsız kalınca tarayıcılar çoğu zaman bağlantıya yine izin verir. Let's Encrypt bu yüzden 2025'te OCSP hizmetini kapattı ve CRL'ye geçti.
- **Tarayıcı tarafı listeler:** Firefox (CRLite) ve Chrome iptal bilgisini sıkıştırıp tarayıcıya kendileri dağıtır.

DigiNotar gibi olaylar başka bir soruyu da doğurdu: bir CA gizlice sahte sertifika verirse kim fark eder? **Certificate Transparency** (CT, RFC 6962) cevabıdır. Verilen her sertifika herkese açık, yalnız eklenebilen günlüklere yazılır. Bu günlükler 7. ünitedeki **Merkle ağaçlarıdır**: bir kayıt sonradan silinir ya da değiştirilirse kanıtla yakalanır. Chrome 2018'den beri CT'ye yazılmamış sertifikaları reddeder.

Site sahipleri kendi alan adları için verilen her sertifikayı izleyebilir. Bunun bir yan etkisi de vardır: henüz duyurulmamış bir alt alan adı, sertifikası alındığı anda herkese görünür olur.
`),
      dene: ["sf-u12-neden", "sf-u12-ocsp", "sf-u12-ct", "sf-u12-ct-gizlilik"],
    },
    {
      baslik: "TLS 1.3 el sıkışması",
      metin: md(`
**TLS** (Transport Layer Security), HTTPS'in altındaki protokoldür. 2018'de yayımlanan TLS 1.3 (RFC 8446), önceki sürümlerin yıllar içinde biriken zayıf seçeneklerini kaldırdı: RSA ile anahtar taşıma, CBC modu, SHA-1, sıkıştırma ve yeniden anlaşma. Geriye birkaç güvenli seçenek kaldı ve el sıkışma bir gidiş-dönüşe indi.

Aşağıda gerçek bir anahtar değişimi (X25519 ya da P-256), gerçek bir imza ve HKDF ile türetilen gerçek anahtarlar var. Adım adım ilerle ve sağdaki "Ağı dinleyen görür" kısmına bak:

[[G-S12-01]]

Akışın özü:

1. **ClientHello:** İstemci desteklediği şifre takımlarını ve tahmini bir DH **anahtar payını** gönderir. Gideceği alan adı da **SNI** alanında açık gider.
2. **ServerHello:** Sunucu kendi payını gönderir. Bu noktadan sonra iki taraf ortak sırrı bilir ve **bundan sonraki her şey şifrelidir**.
3. **Certificate** ve **CertificateVerify:** Sunucu sertifika zincirini gönderir ve o ana kadarki bütün mesajların özetini **imzalar**. Bu imza DH paylarını sunucunun kimliğine bağlar; ortadaki adam payları değiştirirse imza tutmaz.
4. **Finished:** İki taraf da dökümün HMAC'ini gönderir. Sürüm ya da şifre takımı yolda değiştirildiyse burada yakalanır.

Her bağlantıda yeni bir DH anahtarı üretildiği için TLS 1.3 **ileri gizlilik** sağlar: sunucunun uzun ömürlü anahtarı yıllar sonra çalınsa bile kaydedilmiş eski trafik çözülemez.

> **Matematiğe in:** TLS 1.3'te daha önce bağlanılmış bir sunucuya ilk paketle birlikte veri göndermek de mümkündür (**0-RTT**). Bu veri önceki oturumdan saklanan bir anahtarla şifrelenir. Yeni bir DH değişimi henüz yapılmadığı için saldırgan bu paketi yakalayıp yeniden gönderebilir. Sunucular 0-RTT'yi bu yüzden yalnız tekrarlanması zararsız isteklere (bir sayfayı okumak gibi) açar.
`),
      dene: ["sf-u12-rtt", "sf-u12-sira", "sf-u12-ileri-gizlilik", "sf-u12-sifreli-sertifika"],
      lab: "tls",
    },
    {
      baslik: "Anahtar takvimi",
      metin: md(`
TLS 1.3, DH'den çıkan ortak sırrı doğrudan AES anahtarı olarak kullanmaz. 9. ünitedeki **HKDF**'yi zincirleyerek bir **anahtar takvimi** kurar:

$$\\text{erken sır} \\to \\text{el sıkışma sırrı} \\to \\text{ana sır}$$

Her aşamada HKDF-Expand ile, o ana kadarki el sıkışma dökümünün hash'ine ve bir etikete bağlı ayrı anahtarlar türetilir:

- ~c hs traffic~ ve ~s hs traffic~: el sıkışmanın iki yönü,
- ~c ap traffic~ ve ~s ap traffic~: uygulama verisinin iki yönü,
- ayrıca oturum sürdürme ve dışa aktarma için ayrı sırlar.

Bu tasarımın üç kazancı vardır. Her yön ayrı anahtar kullandığı için aynı anahtar ve nonce iki kez kullanılmaz (5. ünitedeki iki zaman tuzağı). Döküm hash'i anahtarlara karıştığı için yolda değiştirilen tek bir bayt bile iki tarafın farklı anahtarlar türetmesine yol açar. Ve el sıkışma anahtarları sızsa bile uygulama verisi ayrı anahtarlarla korunur.

TLS el sıkışması şeklindeki "Anahtar takvimi" tablosu bu zinciri gösterir; her sır, hesaplandığı adımda belirir.
`),
      dene: ["sf-u12-hkdf", "sf-u12-yon"],
    },
    {
      baslik: "HTTPS neyi korur, neyi korumaz",
      metin: md(`
HTTPS içeriği korur: sayfa yolu, çerezler, formlar ve yanıtlar şifrelidir ve yolda değiştirilemez. Ama bazı şeyleri **gizlemez** ve bazı saldırılara kendi başına dayanamaz. Kafedeki saldırganı farklı senaryolarda dene:

[[G-S12-03]]

- **Görünenler:** Gittiğin alan adı (DNS sorgusu ve SNI), sunucunun IP adresi, trafiğin zamanı ve boyu. Şifreli DNS ve **Encrypted ClientHello** (ECH) alan adını da gizler; Kasım 2026 itibarıyla büyük tarayıcılarda ve bazı içerik dağıtım ağlarında açık.
- **Sahte sertifika:** Saldırgan araya girip kendi sertifikasını sunarsa zincir doğrulanmaz ve tarayıcı uyarır. Uyarıyı geçmek saldırgana kapıyı açar.
- **HTTP'ye düşürme (SSL stripping):** Kullanıcı adresi ~https://~ olmadan yazarsa ilk istek HTTP gidebilir. Saldırgan sunucuyla HTTPS, kullanıcıyla HTTP konuşur. **HSTS** başlığını bir kez gören tarayıcı o siteye bir daha yalnız HTTPS ile gider; tarayıcılara gömülü HSTS listeleri ilk ziyareti de korur.
- **Kurumsal denetim:** Bir kurum cihazlara kendi kök sertifikasını kurarsa trafiği açıp inceleyebilir ve tarayıcı uyarı vermez. Kişisel cihazına bilmediğin bir kök sertifika kurdurmak bu yüzden tehlikelidir.
- **Uç noktalar:** HTTPS yalnız yolu korur. Telefonundaki zararlı bir uygulama ya da sunucudaki bir açık, şifrelemeden önce ya da çözdükten sonra veriye ulaşır.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Adres çubuğundaki kilit:** Chrome 2023'te kilidi "ayarlar" simgesiyle değiştirdi; çünkü kullanıcılar kilidi "site güvenilir" diye okuyordu. Kilit yalnız bağlantının şifreli ve sertifikanın geçerli olduğunu söyler; oltalama sitelerinin çoğunun da geçerli sertifikası vardır.
> - **Mobil uygulamalar:** Bankacılık uygulamaları çoğunlukla **sertifika sabitleme** (pinning) yapar: yalnız beklenen anahtarı kabul eder, cihaza kurulan başka bir kökü de reddeder.
> - **Otomatik yenileme:** Sitelerin büyük çoğunluğu sertifikasını ACME ile birkaç haftada bir kendiliğinden yeniler. 47 günlük sınır yaklaştıkça elle sertifika yenilemek pratikte imkânsızlaşıyor.
> - **Kurumsal ağlar ve okullar:** Güvenlik duvarları "TLS denetimi" için cihazlara kendi kökünü kurar; çalışan bilgisayarlarında bu çoğu zaman yazılı bir politikadır.
> - **Kuantum sonrası TLS:** Tarayıcılar ile büyük sunucular arasındaki bağlantıların önemli bir kısmı Kasım 2026 itibarıyla X25519 ile ML-KEM'i birleştiren hibrit anahtar değişimi kullanıyor (18. ünite).
`),
      dene: ["sf-u12-gorunen", "sf-u12-sertifika-uyarisi", "sf-u12-kurumsal", "sf-u12-hsts"],
      lab: "mitm",
    },
  ],
  test: ["sf-u12-omur", "sf-u12-0rtt", "sf-u12-dokum"],
};
