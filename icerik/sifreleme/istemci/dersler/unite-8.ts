import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_8: Ders = {
  hafta: 8,
  baslik: "MAC ve HMAC",
  ozet: "Bir mesajın yolda değiştirilmediğini ve doğru kişiden geldiğini nasıl anlarız? Hash'in neden yetmediğini, \"gizli ile hash'le\" fikrinin length extension saldırısıyla nasıl çöktüğünü, HMAC'in bunu nasıl çözdüğünü ve karşılaştırmanın bile sır sızdırabileceğini gör.",
  bolumler: [
    {
      baslik: "Hash yetmez: MAC",
      metin: md(`
Şifrelemenin bütünlük sağlamadığını 6. ünitede gördük: CTR'de saldırgan tutarı değiştirebiliyordu. Mesajın yanına özetini eklemek de yetmez. Hash anahtarsızdır; mesajı değiştiren saldırgan yeni özeti de kendisi hesaplar. Özet yalnız kazara bozulmayı yakalar.

Saldırgana karşı bütünlük için hesaplanması bir **gizli anahtar** gerektiren bir etiket gerekir: **MAC** (Message Authentication Code, mesaj doğrulama kodu). Gönderen $t = \\text{MAC}_K(m)$ hesaplayıp mesajın yanına ekler. Alıcı aynı anahtarla yeniden hesaplar ve karşılaştırır. Tutarsa iki şeyden emin olur:

- mesaj yolda değişmemiştir (**bütünlük**),
- mesajı anahtarı bilen biri üretmiştir (**kimlik doğrulama**).

MAC'in sağlamadığı şey **inkâr edilemezliktir**. Anahtarı iki taraf da bildiği için etiketi ikisi de üretebilir. Ali, Ayşe'den gelen MAC'li bir mesajı üçüncü bir kişiye \"bunu Ayşe yazdı\" diye kanıtlayamaz; \"sen de yazmış olabilirsin\" cevabını alır. Bunun için yalnız göndericinin bildiği özel anahtarla atılan **dijital imza** gerekir (11. ünite).
`),
      dene: ["sf-u8-neden", "sf-u8-mac-tanim", "sf-u8-inkar"],
    },
    {
      baslik: "Length extension saldırısı",
      metin: md(`
Akla gelen ilk MAC şudur: gizliyi mesajın önüne koy ve hash'le, $t = \\text{SHA-256}(\\text{gizli} \\| m)$. Gizliyi bilmeyen etiketi hesaplayamaz gibi görünür. Gerçekten de bu tasarımlar 2000'lerde birçok API'de kullanıldı; 2009'da Flickr'ın API imzalarında tam bu açık bulundu.

Sorun 7. ünitedeki ayrıntıdadır: SHA-256'nın özeti son bloktan sonraki **ara durumun kendisidir**. Saldırgan bu özeti başlangıç durumu olarak kullanıp hash'e kaldığı yerden devam edebilir. Yeni bir blok ekler ve şu mesajın geçerli özetini elde eder:

$$\\text{gizli} \\| m \\| \\text{dolgu} \\| \\text{ek}$$

Gizliyi bilmesi gerekmez. Yalnız dolguyu doğru üretmek için gizlinin **uzunluğunu** bilmesi gerekir; bilmiyorsa birkaç değer dener. Sunucu sahte isteği gizli ‖ sahte mesaj diye hash'ler ve aynı özeti bulur. Mesajın ortasında kalan garip dolgu baytları (0x80, sıfırlar, uzunluk) çoğu zaman sorun çıkarmaz; sorgu ayrıştırıcıları onları yok sayar ve son ~rol=~ değeri geçerli olur.

Aşağıdaki atölyede gizli 8 ile 20 bayt arasında rastgele bir uzunlukta. Uzunluğu tahmin et, ~&rol=admin~ ekle ve gönder:

[[G-S8-01]]

Bu saldırı Merkle-Damgård yapısındaki bütün hash'lere (MD5, SHA-1, SHA-256, SHA-512) uygulanır. SHA-3 ve SHA-512/256 gibi iç durumun tamamını vermeyen yapılar dayanıklıdır. Ama en sağlam çözüm hangi hash'i kullandığına bakmadan güvenli olan bir yapıdır: HMAC.
`),
      dene: ["sf-u8-naif", "sf-u8-gereken", "sf-u8-uzunluk-alani"],
      lab: "length-extension",
    },
    {
      baslik: "HMAC",
      metin: md(`
**HMAC** (Bellare, Canetti, Krawczyk, 1996; RFC 2104) hash'i iki kez, iç içe kullanır:

$$\\text{HMAC}_K(m) = H\\big((K_0 \\oplus \\text{opad}) \\| H((K_0 \\oplus \\text{ipad}) \\| m)\\big)$$

- $K_0$, anahtarın hash'in blok boyuna (SHA-256'da 64 bayt) tamamlanmış halidir. Anahtar daha uzunsa önce hash'lenir, kısaysa sıfırla doldurulur.
- **ipad** 0x36, **opad** 0x5C baytının 64 kez tekrarıdır. İki sabit iç ve dış anahtarı birbirinden ayırır.
- İç hash mesajı anahtarla karıştırır. Dış hash bu iç özeti ikinci bir anahtarla yeniden hash'ler.

Saldırgan HMAC etiketini görse bile bu, **dış** hash'in son durumudur. İç hash'in durumu hiç ortaya çıkmaz; mesaja ek yapmak için devam edilecek bir yer yoktur. HMAC'in güvenliği, altındaki sıkıştırma fonksiyonunun bir sözde rastgele fonksiyon gibi davranmasına dayanır. Bu yüzden çakışma direnci zayıflamış hash'lerle bile (HMAC-SHA1, hatta HMAC-MD5) bugüne kadar pratik bir sahtecilik gösterilmedi. Yine de yeni sistemlerde HMAC-SHA256 kullanılır.

[[G-S8-02]]

Kısa bir mesajda HMAC-SHA256 dört sıkıştırma çalıştırır: iki iç, iki dış. Anahtarlı ilk bloklar bir kez hesaplanıp saklanabildiği için çok sayıda mesajda maliyet ikiye iner.
`),
      dene: ["sf-u8-formul", "sf-u8-pad", "sf-u8-uzun-anahtar"],
      lab: "hmac",
    },
    {
      baslik: "Karşılaştırma bile sızdırır",
      metin: md(`
Sunucu gelen etiketi beklenen etiketle karşılaştırır. Çoğu dildeki ~==~ ya da ~memcmp~ ilk farklı baytta durur. Böylece ilk baytı doğru olan bir etiket, yanlış olandan birkaç nanosaniye **daha uzun** sürer.

Saldırgan bunu ölçer. İlk bayt için 256 değeri dener, en yavaş yanıt vereni seçer, sonra ikinci bayta geçer. Ağ gürültüsü çok sayıda tekrarla ortalanır. 32 baytlık bir etiket $2^{256}$ yerine yalnız $32 \\times 256 = 8192$ deneme grubuyla bulunur. Üstel bir iş doğrusala iner. 2009'da Google'ın Keyczar kütüphanesinde ve birçok OAuth uygulamasında bu hata bulundu.

Çözüm **sabit zamanlı karşılaştırmadır**: bütün baytlar her zaman karşılaştırılır, farklar bir değişkende biriktirilir ve sonuca yalnız sonda bakılır:

~fark = 0; for i: fark |= a[i] ^ b[i]; return fark == 0~

Bunu elle yazmak yerine hazır işlevleri kullan: Node.js'te ~crypto.timingSafeEqual~, Python'da ~hmac.compare_digest~, Go'da ~subtle.ConstantTimeCompare~. Web Crypto'nun ~verify~ işlevi karşılaştırmayı kendisi yapar. 17. ünitede aynı fikrin parola karşılaştırmasına uygulanan halini oyuncak bir sunucuda kendin deneyeceksin.
`),
      dene: ["sf-u8-erken-cikis", "sf-u8-sabit"],
    },
    {
      baslik: "MAC her yerde",
      metin: md(`
MAC'ler günlük hayatta sanıldığından daha yaygındır:

- **Oturum çerezleri:** Birçok web çatısı (Django, Rails, Express) çerezin içeriğini HMAC ile imzalar. Kullanıcı çerezdeki ~kullanici=ayse~ değerini ~kullanici=admin~ yaparsa imza tutmaz.
- **JWT:** ~alg: HS256~ yazan bir token HMAC-SHA256 ile imzalanmıştır. İçerik şifreli değildir, yalnız Base64 ile kodlanmıştır. Okunabilir ama değiştirilemez.
- **Doğrulama uygulamaları (TOTP):** Her 30 saniyede değişen 6 haneli kod, paylaşılan gizli anahtar ile zaman sayacının HMAC'inin kısaltılmışıdır (RFC 6238).
- **Webhook imzaları:** GitHub, Stripe ve ödeme sağlayıcıları bildirimlerine ~X-Hub-Signature-256~ gibi bir HMAC başlığı ekler. Sunucun aynı anahtarla yeniden hesaplar.
- **AWS istek imzaları (SigV4):** Her API isteği, gizli anahtardan tarih, bölge ve servis için zincirleme HMAC'lerle türetilen bir anahtarla imzalanır.

> **Gerçek dünyada:** Şifreli bir bağlantının içinde de MAC vardır. TLS 1.3'teki AES-GCM ve ChaCha20-Poly1305 etiketleri (6. ünite) birer MAC'tir. Anahtarları türetirken kullanılan HKDF (9. ünite) ise baştan sona HMAC'tir. Signal'in her mesajı ayrıca HMAC-SHA256 ile doğrulanır.
`),
      dene: ["sf-u8-jwt", "sf-u8-totp", "sf-u8-webhook"],
    },
  ],
  test: ["sf-u8-sha3-dayanikli", "sf-u8-hmac-adim", "sf-u8-deneme"],
};
