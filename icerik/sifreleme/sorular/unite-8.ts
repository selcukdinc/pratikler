// 8. ünite (Simetrik dünya): MAC neden gerekli, length extension saldırısı, HMAC yapısı,
// sabit zamanlı karşılaştırma ve MAC'in gerçek kullanımları.
import { sorular, type Soru } from "./yardimci.ts";

const U = 8;

export const unite8: Soru[] = [
  ...sorular(U, "u8-mac", [
    {
      ad: "neden",
      soru: "Bir mesajın yanına yalnız SHA-256 özetini eklemek neden saldırgana karşı bütünlük sağlamaz?",
      secenekler: [
        "Hash anahtarsızdır; mesajı değiştiren saldırgan yeni özeti de kendisi hesaplar",
        "SHA-256 özeti mesajdan uzun olduğu için ağda bozulur",
        "Özet mesajın içeriğini ele verdiği için gizlilik kaybolur",
        "Alıcı SHA-256'yı hesaplamak için gönderenin parolasını bilmelidir",
      ],
      aciklama: "Hash yalnız **kazara** bozulmayı yakalar. Kasıtlı bir saldırgan mesajı ve özeti birlikte değiştirir. Bütünlük için hesaplanması bir **gizli anahtar** gerektiren bir etiket gerekir: MAC (Message Authentication Code).",
    },
    {
      ad: "mac-tanim",
      soru: "MAC (mesaj doğrulama kodu) neyi kanıtlar?",
      secenekler: [
        "Mesajın değiştirilmediğini ve anahtarı bilen biri tarafından üretildiğini",
        "Mesajın kimseye okunamayacak biçimde şifrelendiğini",
        "Mesajı kimin gönderdiğini üçüncü bir kişiye karşı da kanıtlar",
        "Mesajın belirli bir saatte gönderildiğini",
      ],
      aciklama: "MAC bütünlük ve kimlik doğrulama sağlar: etiket doğruysa mesaj, anahtarı bilen biri tarafından üretilmiş ve değiştirilmemiştir. Gizlilik sağlamaz; mesaj açık gidebilir.",
    },
    {
      ad: "inkar",
      dy: false,
      soru: "Ayşe ile Ali aynı MAC anahtarını paylaşıyor. Ali, Ayşe'den gelen MAC'li bir mesajı mahkemede Ayşe'nin yazdığının kanıtı olarak gösterebilir.",
      aciklama: "Yanlış. Anahtarı Ali de bildiği için o etiketi Ali de üretebilirdi. MAC inkâr edilemezlik sağlamaz; bunun için yalnız göndericinin bildiği özel anahtarla atılan dijital imza gerekir (11. ünite).",
    },
  ]),
  ...sorular(U, "u8-length-ext", [
    {
      ad: "naif",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir API istekleri ~imza = SHA-256(gizli ‖ mesaj)~ ile imzalıyor. Neden güvensiz?",
      secenekler: [
        "Saldırgan imzadan, gizliyi bilmeden ~mesaj ‖ dolgu ‖ ek~ için geçerli imza hesaplayabilir",
        "SHA-256 gizli anahtarı çıktısına olduğu gibi kopyalar",
        "Aynı mesaj her seferinde farklı imza verdiği için doğrulama yapılamaz",
        "Gizli anahtar mesajdan önce geldiği için SHA-256 hata verir",
      ],
      aciklama: "SHA-256'nın özeti, son bloktan sonraki **ara durumun kendisidir**. Saldırgan bu durumdan devam edip yeni bloklar ekler. Elde ettiği özet, gizli ‖ mesaj ‖ dolgu ‖ ek için geçerlidir. Gizliyi bilmesi gerekmez; yalnız uzunluğunu bilmesi ya da denemesi yeter.",
    },
    {
      ad: "gereken",
      zorluk: 2,
      soru: "Length extension saldırısını yapmak için saldırganın neyi bilmesi gerekir?",
      secenekler: [
        "Mesajı, imzayı ve gizli anahtarın uzunluğunu",
        "Gizli anahtarın kendisini",
        "Sunucunun SHA-256 başlangıç değerlerini değiştirme yetkisini",
        "İki farklı mesajın çakışan özetlerini",
      ],
      aciklama: "Saldırgan dolgu baytlarını doğru üretmek için toplam uzunluğu bilmelidir: gizli + mesaj. Gizlinin uzunluğu bilinmiyorsa 1, 2, 3... diye denenir; sunucu doğru tahmini kabul eder. Atölyede bunu kendin yapacaksın.",
    },
    {
      ad: "sha3-dayanikli",
      dy: true,
      soru: "SHA-3 ile ~SHA3(gizli ‖ mesaj)~ yapısı length extension saldırısına açık değildir.",
      aciklama: "Doğru. SHA-3'ün sünger yapısında iç durumun kapasite kısmı çıktıya yansımaz; özetten devam edilemez. Aynı şekilde SHA-512/256 gibi kesilmiş çıktılı varyantlar da dayanıklıdır. Yine de standart çözüm HMAC'tir; neyi kullandığını düşünmeden güvenli kalırsın.",
    },
    {
      ad: "uzunluk-alani",
      soru: "Length extension'da sahte mesajın içinde gizli ‖ mesaj ile ek arasında ne bulunur?",
      secenekler: [
        "Orijinal mesajın SHA-256 dolgusu",
        "Hiçbir şey; ek doğrudan mesajın arkasına yazılır",
        "Gizli anahtarın SHA-256 özeti",
        "Rastgele 16 bayt; sunucu bunları atar",
      ],
      aciklama: "Saldırgan hash'in kaldığı yerden devam ettiği için orijinal mesajın dolgusu artık mesajın bir parçasıdır: ~mesaj ‖ 80 00 ... 00 ‖ uzunluk ‖ ek~. Sunucular genellikle bu garip baytları sorun etmez; sorgu dizgisi ayrıştırıcıları onları yok sayar ve son ~rol~ değeri geçerli olur.",
    },
  ]),
  ...sorular(U, "u8-hmac", [
    {
      ad: "formul",
      soru: "$K_i = K \\oplus \\text{ipad}$ ve $K_o = K \\oplus \\text{opad}$ olsun. HMAC'in tanımı hangisidir?",
      secenekler: ["$H(K_o \\| H(K_i \\| m))$", "$H(K_i \\| m)$", "$H(m \\| K_o)$", "$H(K_i) \\oplus H(m)$"],
      aciklama: "HMAC iki iç içe hash kullanır: önce anahtar ipad ile XOR'lanıp mesajın önüne konur ve hash'lenir, sonra anahtar opad ile XOR'lanıp bu iç özetin önüne konur ve yeniden hash'lenir. Dış hash, iç özetin ara durumunu saklar; length extension işe yaramaz.",
    },
    {
      ad: "pad",
      zorluk: 2,
      soru: "HMAC'te ipad ve opad hangi baytların tekrarıdır?",
      secenekler: ["ipad 0x36, opad 0x5C", "ipad 0x00, opad 0xFF", "ipad 0x80, opad 0x01", "ipad 0x5C, opad 0x36"],
      aciklama: "ipad = 0x36 baytının, opad = 0x5C baytının blok boyunca (SHA-256'da 64 bayt) tekrarıdır. İki sabitin farklı olması iç ve dış anahtarları birbirinden ayırır.",
    },
    {
      ad: "uzun-anahtar",
      soru: "HMAC-SHA256'da anahtar 64 bayttan uzunsa ne yapılır?",
      secenekler: [
        "Anahtar önce SHA-256 ile hash'lenir, 32 baytlık özet anahtar olarak kullanılır",
        "Anahtarın ilk 64 baytı alınır, kalanı atılır",
        "HMAC hata verir; anahtar 64 baytı geçemez",
        "Anahtar ikiye bölünür, yarısı ipad'e yarısı opad'e verilir",
      ],
      aciklama: "Blok boyundan (64 bayt) uzun anahtar önce hash'lenir; kısa anahtar sıfırlarla 64 bayta tamamlanır. Bu yüzden 32 bayttan uzun rastgele anahtar güvenliği artırmaz.",
    },
    {
      ad: "hmac-adim",
      sayi: [4],
      zorluk: 2,
      soru: "Kısa bir mesaj (bir bloğa sığan) için HMAC-SHA256 hesaplanırken SHA-256'nın sıkıştırma fonksiyonu toplam kaç kez çalışır?",
      aciklama: "İç hash: $K \\oplus$ ipad bir blok + mesaj ve dolgusu bir blok = 2 sıkıştırma.\n---\nDış hash: $K \\oplus$ opad bir blok + 32 baytlık iç özet ve dolgusu bir blok = 2 sıkıştırma.\n---\nToplam **4**. Anahtarlı ilk bloklar önceden hesaplanıp saklanabildiği için yoğun kullanımda 2'ye iner.",
    },
  ]),
  ...sorular(U, "u8-zaman", [
    {
      ad: "erken-cikis",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir sunucu gelen MAC etiketini ~if (etiket == beklenen)~ ile bayt bayt karşılaştırıyor ve ilk farklı baytta duruyor. Saldırgan ne yapabilir?",
      secenekler: [
        "Yanıt sürelerini ölçüp etiketi bayt bayt tahmin eder",
        "Karşılaştırmayı atlatıp anahtarı doğrudan okur",
        "Hiçbir şey; karşılaştırma sonucu yalnız doğru ya da yanlıştır",
        "Sunucuyu çökertir ama etiket hakkında bilgi alamaz",
      ],
      aciklama: "İlk baytı doğru olan etiket biraz daha uzun sürer. Saldırgan her konum için 256 değeri dener ve en yavaşını seçer. Ağdaki gürültü çok denemeyle ortalanır. Çözüm **sabit zamanlı karşılaştırma**: bütün baytlar her zaman karşılaştırılır, farklar bir değişkende toplanır.",
    },
    {
      ad: "deneme",
      zorluk: 3,
      sayi: [8192],
      soru: "32 baytlık bir etiket, zamanlama sızıntısıyla bayt bayt bulunuyor. Her konumda 256 değer denenirse en kötü durumda toplam kaç deneme gerekir (gürültü için tekrarları sayma)?",
      aciklama: "Her bayt ayrı bulunur: $32 \\times 256 =$ **8192** deneme. Sızıntı olmasaydı $2^{256}$ olurdu. Zamanlama sızıntısı üstel bir işi doğrusal hale getirir.",
    },
    {
      ad: "sabit",
      soru: "Sabit zamanlı karşılaştırma nasıl yazılır?",
      secenekler: [
        "Bütün baytların farkı biriktirilip en sonda bir kez denetlenir",
        "Karşılaştırmadan önce rastgele bir süre beklenir",
        "Baytlar sondan başa doğru karşılaştırılır",
        "Etiketler önce Base64'e çevrilip dizgi olarak karşılaştırılır",
      ],
      aciklama: "~fark |= a[i] ^ b[i]~ döngüsü uzunluk boyunca hep tamamlanır; sonuç yalnız sonda kullanılır. Rastgele bekleme ortalamayla aşılır. Hazır işlevler kullan: Node.js'te ~crypto.timingSafeEqual~, Python'da ~hmac.compare_digest~. Web Crypto'nun ~verify~ işlevi bunu kendisi yapar.",
    },
  ]),
  ...sorular(U, "u8-kullanim", [
    {
      ad: "jwt",
      soru: "~alg: HS256~ yazan bir JSON Web Token (JWT) nasıl imzalanmıştır?",
      secenekler: [
        "HMAC-SHA256 ile; sunucu ve doğrulayan aynı gizli anahtarı bilir",
        "RSA özel anahtarıyla; açık anahtarı bilen herkes doğrular",
        "SHA-256 özetiyle; anahtar kullanılmaz",
        "AES-256 ile şifrelenerek; içerik okunamaz",
      ],
      aciklama: "HS256 = HMAC-SHA256. Token'ın içeriği şifreli değildir, Base64 ile kodlanmıştır; herkes okuyabilir. Ama değiştirilirse imza tutmaz. RS256 ve ES256 ise açık anahtarlı imzalardır (10. ve 11. ünite).",
    },
    {
      ad: "totp",
      soru: "Doğrulama uygulamalarının her 30 saniyede bir ürettiği 6 haneli kodlar (TOTP) neye dayanır?",
      secenekler: [
        "Paylaşılan gizli anahtar ve zaman sayacının HMAC'ine",
        "Sunucunun her 30 saniyede telefona gönderdiği SMS'e",
        "Telefonun seri numarasının SHA-256 özetine",
        "Kullanıcının parolasının şifrelenmiş haline",
      ],
      aciklama: "TOTP (RFC 6238): kod = HMAC(anahtar, ⌊zaman / 30⌋)'ın kısaltılmışı. QR kodu okuttuğunda gizli anahtar telefona geçer; sonra telefon ile sunucu hiç konuşmadan aynı kodu hesaplar.",
    },
    {
      ad: "webhook",
      soru: "Bir ödeme sağlayıcısı sitene bildirim (webhook) gönderirken başlıkta ~X-Signature: HMAC-SHA256(...)~ ekliyor. Bu neyi sağlar?",
      secenekler: [
        "Bildirimin gerçekten sağlayıcıdan geldiğini ve yolda değiştirilmediğini",
        "Bildirimin içeriğinin üçüncü kişilerce okunamamasını",
        "Bildirimin sitene en geç bir saniye içinde ulaşmasını",
        "Sağlayıcının bildirimi sonradan inkâr edememesini",
      ],
      aciklama: "Sunucun aynı gizli anahtarla HMAC'i yeniden hesaplar ve sabit zamanlı karşılaştırır. Tutarsa istek sağlayıcıdandır. Gizlilik için bağlantı zaten HTTPS'tir. GitHub, Stripe ve benzerleri bu yöntemi kullanır.",
    },
  ]),
];
