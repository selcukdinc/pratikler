// 9. ünite (Simetrik dünya): parola saklama (düz metin, düz hash, salt, pepper), gökkuşağı
// tabloları, yavaş hash (PBKDF2, bcrypt), bellek-zor fonksiyonlar (scrypt, Argon2id), HKDF ve
// parola yöneticileri. Sızan özet meydan okuması sorular.test.ts'te Web Crypto ile sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 9;

// "Sızan veritabanı" meydan okumasındaki tuzsuz SHA-256 özeti
export const SIZAN_OZET = "db849bbf3e5c8127124aad0e24d4b6cb545477c2fb42cd3ee3feb466fa10d011";

export const unite9: Soru[] = [
  ...sorular(U, "u9-duz", [
    {
      ad: "duz-metin",
      soru: "Parolaları veritabanında düz metin olarak saklamanın en büyük sorunu nedir?",
      secenekler: [
        "Sızıntıda parolalar okunur ve başka sitelerde denenir",
        "Düz metin parolalar veritabanında çok yer kaplar",
        "Kullanıcılar parolalarını değiştiremez",
        "Giriş sırasında parola karşılaştırması yavaşlar",
      ],
      aciklama: "İnsanlar aynı parolayı birçok yerde kullanır. Sızan düz metin parolalar başka sitelerde otomatik denenir (credential stuffing). Doğru tasarım, sunucunun parolayı **hiç bilmemesi**, yalnız yavaş bir özetini saklamasıdır.",
    },
    {
      ad: "duz-hash",
      zorluk: 2,
      soru: "Parolalar tuzsuz SHA-256 özetiyle saklanıyor. Veritabanı sızınca saldırgan için ne kolaylaşır?",
      secenekler: [
        "Aynı parolalar aynı özeti verir; bir sözlük bütün tabloya uygulanır",
        "SHA-256 geri çözüldüğü için bütün parolalar anında okunur",
        "Saldırgan özetlerden kullanıcıların e-posta adreslerini çıkarır",
        "Hiçbir şey; SHA-256 çakışmaya dayanıklı olduğu için parolalar güvendedir",
      ],
      aciklama: "Düz hash'te \"123456\" kullanan herkesin satırı aynıdır. Saldırgan bir parola sözlüğünü bir kez hash'ler ve bütün tabloyla eşleştirir. Üstelik SHA-256 **hızlıdır**: bir GPU saniyede milyarlarca özet hesaplar.",
    },
    {
      ad: "sizan-ozet",
      etiket: "ctf",
      zorluk: 2,
      soru: `Tuzsuz SHA-256 kullanan bir siteden sızan tabloda bir kullanıcının özeti ~${SIZAN_OZET}~. Şu yaygın parolalardan hangisi? (1. ünitedeki üç kutu aracıyla adayları hash'leyebilirsin.)`,
      secenekler: ["galatasaray", "fenerbahce", "qwerty", "sifre123"],
      aciklama: "Her adayı SHA-256'dan geçir ve özeti karşılaştır; yalnız biri tutar. Saldırganın yaptığı da budur, yalnız milyonlarca adayla ve saniyede milyarlarca denemeyle. Tuz ve yavaş hash bu işi pahalılaştırır.",
    },
  ]),
  ...sorular(U, "u9-salt", [
    {
      ad: "salt-tanim",
      soru: "Parola saklamada salt (tuz) ne işe yarar?",
      secenekler: [
        "Aynı parolaların farklı özet vermesini sağlar",
        "Parolayı şifreleyip gerekince geri çözmeyi sağlar",
        "Parolanın uzunluğunu gizlemek için sonuna rastgele harf ekler",
        "Hash hesabını hızlandırır",
      ],
      aciklama: "Salt gizli değildir, özetle aynı satırda saklanır. Görevi her parolanın ayrı ayrı kırılmasını zorunlu kılmaktır: saldırgan bir sözlüğü bütün tabloya bir kerede uygulayamaz, her kullanıcı için baştan hash'lemesi gerekir.",
    },
    {
      ad: "salt-gizli",
      dy: false,
      soru: "Salt, parola kadar gizli tutulmalıdır; sızarsa salt'ın bütün faydası kaybolur.",
      aciklama: "Yanlış. Salt veritabanında özetin yanında açıkça durur; sızması beklenir. Faydası, aynı parolaların farklı özet vermesi ve önceden hesaplanmış tabloların işe yaramamasıdır; bu faydalar salt bilinse de geçerlidir.",
    },
    {
      ad: "gokkusagi",
      soru: "Gökkuşağı tablosu nedir ve neye karşı etkisizdir?",
      secenekler: [
        "Önceden hesaplanmış parola-özet zincirleri; her kullanıcıya ayrı salt eklenince etkisiz kalır",
        "Parolaları renk kodlarıyla saklayan bir veritabanı biçimi; şifrelemeye karşı etkisizdir",
        "GPU ile paralel kaba kuvvet aracı; yavaş hash'e karşı etkisizdir",
        "Sızan parola listelerinin birleşimi; uzun parolalara karşı etkisizdir",
      ],
      aciklama: "Gökkuşağı tabloları zaman ile bellek arasında takas yapar: hesap bir kez yapılır, sonra her özet hızlıca aranır. Tablo belirli bir hash için hazırlanır; her kullanıcıya rastgele salt eklenince her salt için yeni tablo gerekir ve yöntem çöker.",
    },
    {
      ad: "salt-boyu",
      sayi: [16],
      soru: "Parola özetleri için önerilen salt uzunluğu en az kaç bayttır (128 bit)?",
      aciklama: "**16 bayt** (128 bit) rastgele salt, iki kullanıcının aynı salt'ı alma olasılığını ihmal edilebilir yapar. CSPRNG'den üretilir (2. ünite); kullanıcı adı ya da e-posta salt yerine kullanılmaz.",
    },
    {
      ad: "pepper",
      zorluk: 2,
      soru: "Pepper (biber) salt'tan nasıl ayrılır?",
      secenekler: [
        "Herkes için ortaktır ve veritabanının dışında saklanır",
        "Her kullanıcı için farklıdır ve özetle aynı satırda saklanır",
        "Kullanıcının seçtiği ikinci bir paroladır",
        "Özetin sonuna eklenen ve kullanıcıya gösterilen doğrulama kodudur",
      ],
      aciklama: "Pepper, yalnız veritabanı sızdığında (sunucunun yapılandırması sızmadığında) özetleri işe yaramaz hale getirir. Genellikle özetin HMAC'i alınarak ya da özet şifrelenerek uygulanır. Salt'ın yerini tutmaz, onun yanına eklenir.",
    },
  ]),
  ...sorular(U, "u9-yavas", [
    {
      ad: "neden-yavas",
      soru: "Parola özetlerinde neden bilerek yavaş bir fonksiyon kullanılır?",
      secenekler: [
        "Kullanıcıya az, milyarlarca deneme yapan saldırgana çok yük olur",
        "Yavaş fonksiyonlar daha uzun özet ürettiği için çakışma olasılığı azalır",
        "Hızlı fonksiyonlar parolaları geri çözülebilir biçimde saklar",
        "Sunucunun aynı anda çok sayıda girişi işlemesini önlemek için",
      ],
      aciklama: "Kaba kuvvetin maliyeti deneme başına süreyle çarpılır. Bir girişte 100 ms kullanıcıya fark ettirmez; saldırgan için saniyede milyarlarca deneme saniyede birkaç bin denemeye iner.",
    },
    {
      ad: "pbkdf2",
      soru: "PBKDF2 parolayı nasıl yavaşlatır?",
      secenekler: [
        "Salt ile birlikte HMAC'i yüz binlerce kez art arda uygular",
        "Parolayı büyük bir bellek alanına yayıp rastgele erişimle okur",
        "Her denemeden sonra sunucuyu bir süre bekletir",
        "Parolayı RSA ile şifreleyip özetini alır",
      ],
      aciklama: "PBKDF2 (RFC 8018) bir HMAC'i yineleme sayısı kadar zincirler. OWASP 2023'te PBKDF2-HMAC-SHA256 için 600.000 yineleme önerdi. Zayıflığı yalnız işlem gücü istemesidir: GPU'lar binlerce PBKDF2'yi paralel çalıştırır.",
    },
    {
      ad: "pbkdf2-sayi",
      sayi: [600000],
      soru: "OWASP'ın 2023'te PBKDF2-HMAC-SHA256 için önerdiği en az yineleme sayısı kaçtır?",
      aciklama: "**600.000**. Sayı donanım hızlandıkça artar; yeni sistemlerde Argon2id tercih edilir. Web Crypto PBKDF2'yi destekler; ölçer deneyinde tarayıcında kaç milisaniye sürdüğünü görebilirsin.",
    },
    {
      ad: "bcrypt",
      zorluk: 2,
      soru: "bcrypt'te maliyet parametresi (cost) 12'den 13'e çıkarılırsa bir özetin hesaplanma süresi nasıl değişir?",
      secenekler: ["Yaklaşık iki katına çıkar", "Yaklaşık %8 artar", "Değişmez; yalnız özet uzar", "Yaklaşık on katına çıkar"],
      aciklama: "bcrypt'in iş miktarı $2^{\\text{cost}}$ ile orantılıdır; maliyet bir artınca süre ikiye katlanır. bcrypt ayrıca girdinin yalnız ilk 72 baytını kullanır; çok uzun parolaları önce hash'lemek gerekir.",
    },
  ]),
  ...sorular(U, "u9-bellek", [
    {
      ad: "bellek-zor",
      soru: "Argon2id ve scrypt gibi bellek-zor fonksiyonlar neden GPU ile kırılmaya daha dayanıklıdır?",
      secenekler: [
        "Her deneme çok bellek ister; GPU'da paralellik sınırlanır",
        "GPU'lar bu fonksiyonların kullandığı komutları desteklemez",
        "Çıktıları GPU'ların işleyemeyeceği kadar uzundur",
        "Her denemede internete bağlanıp sunucudan izin isterler",
      ],
      aciklama: "GPU ve özel donanım (ASIC) çok sayıda hesap birimine sahiptir ama hızlı belleği sınırlıdır. Deneme başına 64 MiB isteyen bir fonksiyonda paralellik bellekle sınırlanır; saldırganın avantajı büyük ölçüde kaybolur.",
    },
    {
      ad: "argon2id",
      soru: "2015 Parola Hash'leme Yarışması'nı kazanan ve bugün yeni sistemler için önerilen algoritma hangisidir?",
      secenekler: ["Argon2", "MD5", "SHA-512", "PBKDF2-HMAC-SHA1"],
      aciklama: "Argon2 2015'te yarışmayı kazandı ve RFC 9106 ile standartlaştı. Argon2id, yan kanala dayanıklı Argon2i ile GPU'ya dayanıklı Argon2d'nin karışımıdır. Parametreleri: bellek ($m$), yineleme ($t$) ve paralellik ($p$).",
    },
    {
      ad: "parametre",
      zorluk: 2,
      soru: "Argon2id parametreleri seçilirken doğru yaklaşım hangisidir?",
      secenekler: [
        "Sunucunun belleğine ve kabul edilebilir giriş süresine göre ayarlamak",
        "Belleği en düşük değere çekip yineleme sayısını bir milyona çıkarmak",
        "Her kullanıcı için rastgele parametre seçip saklamamak",
        "Varsayılan değerleri asla değiştirmemek; parametreler güvenliği etkilemez",
      ],
      aciklama: "Önce belleği, sonra süreyi ayarla: OWASP'ın asgari önerisi 19 MiB bellek, 2 yineleme ve 1 paralelliktir. Parametreler özetle birlikte saklanır (özet metninde ~m=19456,t=2,p=1~ gibi bir alan bulunur). Böylece ileride artırılabilir; kullanıcı giriş yaptığında özet yeni parametrelerle yenilenir.",
    },
  ]),
  ...sorular(U, "u9-hkdf", [
    {
      ad: "hkdf-tanim",
      soru: "HKDF ne için kullanılır?",
      secenekler: [
        "Güçlü bir sırdan birden çok bağımsız anahtar türetmek için",
        "Kullanıcı parolalarını yavaşça hash'leyip saklamak için",
        "Mesajları şifrelemek için akış şifresi olarak",
        "Dijital imza atmak için",
      ],
      aciklama: "HKDF (RFC 5869) iki adımlıdır: **extract** düzgün dağılmamış bir sırrı sabit uzunlukta güçlü bir anahtara çevirir, **expand** ondan farklı ~info~ etiketleriyle istenen sayıda anahtar türetir. Yavaş değildir; parola için uygun değildir.",
    },
    {
      ad: "hkdf-parola",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir uygulama kullanıcı parolasından şifreleme anahtarını ~HKDF(parola, salt)~ ile türetiyor. Sorun nedir?",
      secenekler: [
        "HKDF hızlıdır; zayıf parola hızla denenip bulunur",
        "HKDF yalnız 128 bitlik anahtar üretebilir",
        "HKDF salt kabul etmez, bu yüzden aynı parolalar aynı anahtarı verir",
        "HKDF'nin çıktısı AES ile kullanılamaz",
      ],
      aciklama: "Parolanın entropisi düşüktür (2. ünite). Anahtar paroladan türetilecekse yavaş ve bellek-zor bir fonksiyon (Argon2id, scrypt, yeterli yinelemeli PBKDF2) gerekir. HKDF, sonra bu anahtardan alt anahtarlar türetmek için kullanılabilir.",
    },
    {
      ad: "info",
      soru: "Aynı ana anahtardan HKDF ile şifreleme anahtarı ve MAC anahtarı türetilirken farkı ne sağlar?",
      secenekler: [
        "Farklı ~info~ etiketleri (ör. \"sifreleme\", \"mac\")",
        "Farklı uzunlukta çıktı istemek",
        "Aynı çağrıyı iki kez yapmak; HKDF her seferinde farklı çıktı verir",
        "Ana anahtarı önce Base64'e çevirmek",
      ],
      aciklama: "HKDF deterministiktir: aynı girdiler aynı çıktıyı verir. ~info~ alanı, aynı sırdan türetilen anahtarları birbirinden ayırır ve birbirinden bağımsız yapar. Signal'in Double Ratchet'i (13. ünite) her adımda HKDF kullanır.",
    },
  ]),
  ...sorular(U, "u9-yonetici", [
    {
      ad: "yonetici",
      soru: "Parola yöneticisi kullanmanın asıl güvenlik kazancı nedir?",
      secenekler: [
        "Her siteye ayrı ve rastgele parola; sızıntı yayılmaz",
        "Parolaların sitelere hiç gönderilmemesi",
        "Sitelerin parolaları düz metin saklasa bile sızıntının önlenmesi",
        "Parolaların her gün otomatik değiştirilmesi",
      ],
      aciklama: "Asıl tehlike tekrar kullanılan parolalardır. Yönetici her site için CSPRNG'den parola üretir. Kasası ana paroladan bellek-zor bir KDF ile türetilen anahtarla istemcide şifrelenir (15. ünite).",
    },
    {
      ad: "passkey",
      zorluk: 2,
      soru: "Geçiş anahtarları (passkeys) parolalardan neden oltalamaya (phishing) daha dayanıklıdır?",
      secenekler: [
        "İmza sitenin alan adına bağlıdır; sahte siteye verilecek sır yok",
        "Passkey'ler parolalardan daha uzun olduğu için tahmin edilemez",
        "Sahte siteler passkey alanını gösteremez",
        "Passkey'ler her girişte SMS ile doğrulanır",
      ],
      aciklama: "Passkey'ler (WebAuthn) açık anahtarlı kriptografi kullanır: site yalnız açık anahtarı saklar, sızsa bile işe yaramaz. Tarayıcı imzayı sitenin alan adına bağlar; benzer adlı sahte bir sayfa geçerli imza alamaz. İmzaları 11. ünitede göreceğiz.",
    },
  ]),
];
