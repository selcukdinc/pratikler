// 12. ünite (Sertifikalar ve TLS): açık anahtarın sahibini bilmek, sertifika ve güven
// zinciri, iptal ve Certificate Transparency, TLS 1.3 el sıkışması, anahtar takvimi,
// MITM ve HTTPS'in korumadıkları. Tarihler Kasım 2026 itibarıyladır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 12;

export const unite12: Soru[] = [
  ...sorular(U, "u12-sahiplik", [
    {
      ad: "sorun",
      soru: "Açık anahtarlı kriptografi anahtar dağıtımını kolaylaştırsa da hangi sorunu kendi başına çözmez?",
      secenekler: [
        "Açık anahtarın gerçekten o kişiye ait olduğunu bilmeyi",
        "İki tarafın ortak bir sırra ulaşmasını",
        "Mesajın şifrelenmesini",
        "Uzun mesajların hızlı ve güvenli biçimde şifrelenmesini",
      ],
      aciklama: "Saldırgan kendi açık anahtarını \"bankanın anahtarı\" diye verirse şifreleme kusursuz çalışır ama saldırgana. 10. ünitedeki ortadaki adam tam budur. Çözüm, anahtarı bir kimliğe güvenilir biri aracılığıyla bağlamaktır: sertifika.",
    },
    {
      ad: "parmak-izi",
      soru: "SSH ilk bağlantıda \"Bu sunucunun parmak izi şu, devam edilsin mi?\" diye sorar. Bu yaklaşımın adı nedir?",
      secenekler: ["İlk kullanımda güven", "Sertifika zinciri", "Certificate Transparency", "Anahtar takvimi"],
      aciklama: "İngilizcesiyle Trust On First Use (TOFU): ilk görülen anahtar kaydedilir, sonra değişirse uyarı verilir. Basittir ama ilk bağlantının dinlenmediğini varsayar. Signal'deki güvenlik numaraları da elle karşılaştırılarak bu varsayımı kaldırır.",
    },
    {
      ad: "web-of-trust",
      dy: true,
      soru: "PGP'nin güven ağında merkezi bir otorite yoktur; kullanıcılar birbirlerinin anahtarlarını imzalayarak kefil olur.",
      aciklama: "Doğru. Fikir güzeldir ama ölçeklenmedi: çoğu insan anahtar imzalama partilerine gitmez. Web, bunun yerine az sayıda sertifika otoritesine güvenen merkezi bir model seçti.",
    },
  ]),
  ...sorular(U, "u12-sertifika", [
    {
      ad: "icerik",
      soru: "Bir X.509 sertifikası özünde nedir?",
      secenekler: [
        "Alan adını açık anahtara bağlayan, CA imzalı bir belge",
        "Sitenin özel anahtarının şifrelenmiş kopyası",
        "Tarayıcının siteye gönderdiği dijital kimlik kartı",
        "Bağlantıda kullanılacak AES anahtarı",
      ],
      aciklama: "Sertifikada konu (ör. ~ornek-banka.test~), açık anahtar, geçerlilik tarihleri, izin verilen kullanımlar ve imzalayan CA vardır. Özel anahtar sertifikada değil, sunucudadır.",
    },
    {
      ad: "zincir",
      zorluk: 2,
      soru: "Tarayıcı bir sitenin sertifikasına neden güvenir?",
      secenekler: [
        "Sertifikayı bir ara CA, onu da işletim sistemindeki bir kök CA imzalamıştır",
        "Site sertifikayı kendi imzalamıştır",
        "Sertifika HTTPS üzerinden geldiği için",
        "Sertifikanın alan adı adres çubuğundakiyle aynı olduğu için",
      ],
      aciklama: "Zincir genellikle üç halkadır: yaprak (site), ara CA, kök. Kökler işletim sistemi ya da tarayıcının güven deposunda gelir. Tarayıcı her imzayı bir üst halkanın açık anahtarıyla doğrular ve kökte durur. Alan adı eşleşmesi gerekir ama tek başına yetmez.",
    },
    {
      ad: "kok-cevrimdisi",
      dy: true,
      soru: "Kök CA'ların özel anahtarları çoğunlukla çevrimdışı tutulur; günlük sertifikaları ara CA'lar imzalar.",
      aciklama: "Doğru. Kök anahtarı sızarsa güven deposundaki o kökü bütün cihazlardan kaldırmak gerekir. Ara CA sızarsa yalnız o ara iptal edilir. Kökler genellikle donanım güvenlik modüllerinde (HSM), törenle açılır.",
    },
    {
      ad: "diginotar",
      soru: "2011'de Hollandalı bir CA olan DigiNotar'a ne oldu?",
      secenekler: [
        "Ele geçirildi, sahte sertifikalar üretildi ve güvenden çıkarıldı",
        "Sertifika fiyatlarını artırınca müşterilerini kaybetti",
        "SHA-1 kullandığı için sertifikaları kendiliğinden geçersiz oldu",
        "Let's Encrypt ile birleşip ücretsiz sertifika vermeye başladı",
      ],
      aciklama: "Saldırgan büyük bir arama motoru dahil yüzlerce sahte sertifika üretti; bunlar bir ülkede kullanıcıları dinlemek için kullanıldı. Tarayıcılar DigiNotar kökünü kaldırdı, şirket aynı yıl iflas etti. Olay Certificate Transparency'nin doğmasına yol açtı.",
    },
    {
      ad: "omur",
      zorluk: 2,
      sayi: [47],
      soru: "CA/Browser Forum'un 2025'te kabul ettiği karara göre 2029'dan itibaren bir TLS sertifikası en çok kaç gün geçerli olabilecek?",
      aciklama: "Takvim: Mart 2026'dan itibaren 200 gün, Mart 2027'den itibaren 100 gün, Mart 2029'dan itibaren **47** gün. Kısa ömür, sızan bir anahtarın zararını sınırlar ve yenilemenin otomatikleşmesini (ACME) zorunlu kılar.",
    },
  ]),
  ...sorular(U, "u12-iptal", [
    {
      ad: "neden",
      soru: "Bir sertifikanın süresi dolmadan iptal edilmesi en çok hangi durumda gerekir?",
      secenekler: ["Sunucunun özel anahtarı sızdığında", "Site tasarımı değiştiğinde", "Sunucu yeniden başlatıldığında", "Ziyaretçi sayısı arttığında"],
      aciklama: "Sızan anahtarla saldırgan siteyi taklit edebilir. Sertifika iptal edilir ve tarayıcıların bunu öğrenmesi gerekir: CRL listeleri, OCSP sorguları ya da tarayıcının kendi dağıttığı listeler (CRLite).",
    },
    {
      ad: "ocsp",
      zorluk: 2,
      soru: "Let's Encrypt 2025'te OCSP hizmetini neden kapattı?",
      secenekler: [
        "Her sorgu ziyaret edilen siteyi CA'ya bildiriyordu",
        "OCSP kuantum bilgisayarlara açık olduğu için",
        "Sertifikalar artık hiçbir zaman iptal edilmediği için",
        "Tarayıcılar OCSP yanıtlarını şifreleyemediği için",
      ],
      aciklama: "Tarayıcı her siteyi açarken CA'ya \"bu sertifika geçerli mi?\" diye sorunca CA kimin nereye girdiğini görür. Ayrıca sorgu başarısız olunca tarayıcılar çoğunlukla bağlantıya izin veriyordu. CRL'ler ve tarayıcı tarafı listeler bu işi üstlendi.",
    },
    {
      ad: "ct",
      soru: "Certificate Transparency (CT) neyi sağlar?",
      secenekler: [
        "Her sertifika herkese açık, silinemez günlüklere yazılır",
        "Sertifikaların sunucuda şifreli saklanmasını",
        "Sertifikası olmayan siteleri arama sonuçlarından gizlemeyi",
        "CA'ların sertifika vermesini engellemeyi",
      ],
      aciklama: "CT günlükleri Merkle ağacıdır (7. ünite): bir kayıt eklenince silinemez, günlük sonradan değiştirilirse kanıtla yakalanır. Chrome 2018'den beri CT'ye yazılmamış sertifikaları reddeder. Site sahipleri kendi alan adları için verilen sertifikaları izleyebilir.",
    },
    {
      ad: "ct-gizlilik",
      dy: true,
      soru: "CT günlükleri herkese açık olduğu için bir şirketin henüz duyurmadığı alt alan adları da sertifika aldığı anda görünür hale gelebilir.",
      aciklama: "Doğru. ~yeni-urun.ornek.test~ için alınan sertifika günlüğe düşer ve arama araçlarıyla bulunur. Saldırganlar da hedef taramasında CT'yi kullanır. Gizli kalması gereken adlar için joker (~*.ornek.test~) sertifika kullanılabilir.",
    },
  ]),
  ...sorular(U, "u12-tls", [
    {
      ad: "rtt",
      sayi: [1],
      soru: "TLS 1.3'te ilk bağlantıda istemci şifreli veri göndermeye başlamadan önce kaç gidiş-dönüş (RTT) beklenir?",
      aciklama: "**1** RTT. İstemci ilk mesajında (ClientHello) DH anahtar payını tahminle gönderir; sunucu yanıtında kendi payını, sertifikasını ve imzasını yollar. TLS 1.2 iki RTT isterdi.",
    },
    {
      ad: "sira",
      zorluk: 2,
      soru: "TLS 1.3 el sıkışmasında sunucu kimliğini nasıl kanıtlar?",
      secenekler: [
        "El sıkışma dökümünün hash'ini özel anahtarıyla imzalar",
        "Sertifikasını göndermesi tek başına yeterlidir",
        "Özel anahtarını şifreleyip istemciye gönderir",
        "İstemcinin gönderdiği rastgele sayıyı geri yollar",
      ],
      aciklama: "Sertifika herkese açıktır, kopyalanabilir. Kanıt CertificateVerify mesajındadır: o ana kadarki bütün mesajların özeti imzalanır. Böylece DH payları da imzaya bağlanır ve ortadaki adam payları değiştiremez.",
    },
    {
      ad: "ileri-gizlilik",
      soru: "İleri gizlilik (forward secrecy) ne demektir?",
      secenekler: [
        "Uzun ömürlü anahtar sonradan çalınsa da geçmiş oturumlar çözülemez",
        "Gelecekteki oturumların anahtarları önceden hesaplanıp saklanır",
        "Şifreli metin her zaman ileriye doğru çözülür",
        "Sertifika süresi dolmadan önce yenilenir",
      ],
      aciklama: "Her oturumun anahtarı geçici bir DH değişiminden gelir ve oturum bitince silinir. Uzun ömürlü anahtar yalnız imza atar. Bugün kaydedilip yarın çözülmeye çalışılan trafiğe karşı temel savunmadır; kuantum için ise ayrıca ML-KEM gerekir (18. ünite).",
    },
    {
      ad: "sifreli-sertifika",
      dy: true,
      soru: "TLS 1.3'te sunucunun sertifikası şifreli gönderilir; ağı dinleyen biri hangi sertifikanın kullanıldığını göremez.",
      aciklama: "Doğru. TLS 1.2'de sertifika açık giderdi. 1.3'te ServerHello'dan sonraki her şey el sıkışma anahtarlarıyla şifrelenir. Ama istemcinin hangi siteye gittiği ClientHello'daki SNI alanından görülebilir (ECH bunu da gizler).",
    },
    {
      ad: "0rtt",
      zorluk: 3,
      soru: "TLS 1.3'ün 0-RTT (erken veri) özelliğinin bilinen riski nedir?",
      secenekler: [
        "Erken veri tekrar oynatılabilir; para gönderme gibi istekler için kullanılmamalıdır",
        "Erken veri şifrelenmeden gönderilir",
        "0-RTT sertifika doğrulamasını tamamen atlar ve kimliği belirsiz sunucularla konuşur",
        "0-RTT yalnız RSA anahtarlarıyla çalışır",
      ],
      aciklama: "Daha önce bağlanılmış bir sunucuya, saklanan anahtarla ilk pakette veri gönderilir. Bu veri şifrelidir ama yeni bir DH değişimi henüz yapılmadığı için saldırgan paketi yakalayıp yeniden gönderebilir. Sunucular 0-RTT'yi yalnız GET gibi zararsız isteklere açar.",
    },
  ]),
  ...sorular(U, "u12-anahtar-takvimi", [
    {
      ad: "hkdf",
      soru: "TLS 1.3'te oturum anahtarları DH sırrından nasıl elde edilir?",
      secenekler: [
        "HKDF ile, el sıkışma dökümüne ve etiketlere bağlanarak adım adım türetilir",
        "DH sırrı doğrudan AES anahtarı olarak kullanılır",
        "Sunucu rastgele bir anahtar seçip istemciye RSA ile gönderir",
        "Parola tabanlı PBKDF2 ile türetilir",
      ],
      aciklama: "Anahtar takvimi 9. ünitedeki HKDF'nin zincirlenmiş halidir: erken sır → el sıkışma sırrı → ana sır. Her aşamadan ~c hs traffic~, ~s ap traffic~ gibi etiketlerle ayrı anahtarlar çıkar. İki yön ve iki aşama hiç aynı anahtarı kullanmaz.",
    },
    {
      ad: "yon",
      dy: true,
      soru: "TLS 1.3'te istemciden sunucuya ve sunucudan istemciye giden trafik farklı anahtarlarla şifrelenir.",
      aciklama: "Doğru. Aynı anahtar ve nonce iki yönde kullanılsaydı CTR akışı iki kez kullanılmış olurdu (5. ünitedeki iki zaman). Ayrı anahtarlar yansıtma saldırılarını da önler.",
    },
    {
      ad: "dokum",
      zorluk: 2,
      soru: "Anahtar türetmede el sıkışma dökümünün hash'inin kullanılması neyi sağlar?",
      secenekler: [
        "Bir mesaj değiştirilirse taraflar farklı anahtar türetir",
        "El sıkışmanın daha az mesajla, daha hızlı bitmesini",
        "Sertifikanın şifrelenmesini",
        "Sunucunun özel anahtarının her bağlantıda yenilenmesini",
      ],
      aciklama: "Saldırgan ClientHello'daki şifre takımı listesini zayıf bir seçenekle değiştirse (sürüm düşürme saldırısı) döküm farklılaşır. Finished mesajlarındaki MAC tutmaz ve bağlantı kesilir.",
    },
  ]),
  ...sorular(U, "u12-mitm", [
    {
      ad: "gorunen",
      zorluk: 2,
      soru: "HTTPS ile bir siteyi gezerken aynı ağdaki biri (ECH yokken) neyi görebilir?",
      secenekler: [
        "Gittiğin alan adını ve trafiğin boyunu, ama sayfa yolunu ve içeriği göremez",
        "Gittiğin sayfanın tam adresini ve içeriğini",
        "Yalnız şifreli baytları; hangi siteye gittiğini hiç göremez",
        "Formlara girdiğin parolaları",
      ],
      aciklama: "Alan adı DNS sorgusunda ve SNI'da açıktır, IP adresi ve paket boyları da görünür. Yol (~/hesap/123~), çerezler ve içerik şifrelidir. Encrypted ClientHello (ECH) ve şifreli DNS alan adını da gizler.",
    },
    {
      ad: "sertifika-uyarisi",
      soru: "Kafedeki ağda tarayıcı \"Bağlantınız gizli değil\" uyarısı verdi. En olası açıklama nedir?",
      secenekler: [
        "Araya giren biri ya da ağın giriş sayfası başka sertifika sunuyor",
        "Site çok yavaş açıldığı için tarayıcı şifrelemeyi kapattı",
        "Tarayıcının önbelleği dolduğu için sertifika okunamadı",
        "Kafedeki Wi-Fi ağının parolası zayıf seçilmiş",
      ],
      aciklama: "Saldırgan ya da ağın giriş sayfası (captive portal) bağlantıyı keser ve geçerli bir sertifika sunamaz. Uyarıyı geçmek saldırgana kapıyı açar. HSTS listesindeki sitelerde tarayıcı geçme seçeneğini hiç sunmaz.",
    },
    {
      ad: "kurumsal",
      dy: true,
      soru: "Bazı şirketler çalışan bilgisayarlarına kendi kök sertifikalarını kurarak HTTPS trafiğini denetleyebilir.",
      aciklama: "Doğru. Cihaza kurulan kök sayesinde kurumun ara cihazı her site için anında sertifika üretir ve tarayıcı uyarı vermez. Kişisel cihazına bilmediğin bir kök sertifika kurdurmak bu yüzden büyük risktir.",
    },
    {
      ad: "hsts",
      soru: "HSTS (HTTP Strict Transport Security) hangi saldırıyı engeller?",
      secenekler: [
        "Kullanıcının HTTP'ye düşürülmesini",
        "Sunucunun özel anahtarının çalınmasını",
        "Sahte bir CA'nın sertifika vermesini",
        "Kullanıcının bilgisayarındaki virüsleri",
      ],
      aciklama: "Bu saldırının adı SSL stripping'dir. Kullanıcı adres çubuğuna ~banka.test~ yazınca ilk istek HTTP gidebilir; ortadaki adam bunu HTTPS'e hiç yükseltmeden aktarır. HSTS başlığını bir kez gören tarayıcı o siteye bir daha yalnız HTTPS ile gider. Önceden yüklü HSTS listeleri ilk ziyareti de korur.",
    },
  ]),
];
