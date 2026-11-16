// 19. ünite (Vaka çalışmaları ve tasarım): gerçek uygulamaların güvenlik özelliklerini okumak,
// Telegram'ın iki sohbet türü, şifreli e-posta, tehdit modeli, anonim geri bildirim ve kişisel
// paylaşım alıştırmaları, Web Crypto'yu doğru kullanmak. Ürün bilgileri Kasım 2026 itibarıyladır.
// Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 19;

export const unite19: Soru[] = [
  ...sorular(U, "u19-okuma", [
    {
      ad: "yedek",
      soru: "Bir mesajlaşma uygulaması \"bütün sohbetler uçtan uca şifreli\" diyor, ama sohbet yedeği bulut sağlayıcısının anahtarıyla saklanıyor. Sağlayıcı neyi okuyabilir?",
      secenekler: ["Yedeğe giren bütün mesajları", "Yalnız mesajların gönderilme zamanlarını", "Hiçbir şeyi; mesajlar uçtan uca şifreli", "Yalnız yedekten sonra gelen mesajları"],
      aciklama: "Uçtan uca şifreleme mesajı yolda ve sunucuda korur. Yedek ayrı bir kopyadır: anahtarı sağlayıcıdaysa yedekteki her mesaj ona açıktır. Bu yüzden yedeği kullanıcının parolası ya da kurtarma anahtarıyla şifrelemek ayrı bir ayardır.",
    },
    {
      ad: "e2ee-yedek",
      dy: true,
      soru: "WhatsApp'ta uçtan uca şifreli yedek, kullanıcı ayarlardan açmadıkça devrede değildir (Kasım 2026).",
      aciklama: "Doğru. Özellik 2021'den beri var ama isteğe bağlıdır. Açılmadığında yedek, bulut sağlayıcısının (Google Drive ya da iCloud) korumasındadır.",
    },
    {
      ad: "gonderen",
      soru: "Signal'in gizli gönderen (sealed sender) özelliği, sunucudan neyi gizler?",
      secenekler: ["Mesajı kimin gönderdiğini", "Mesajın kime gittiğini", "Mesajın ne zaman gönderildiğini", "Mesajın kaç bayt olduğunu"],
      aciklama: "Gönderenin kimliği şifreli zarfın içine konur; sunucu yalnız alıcıyı (iletmek için gerekir), zamanı ve boyu görür. 14. ünitedeki metadata konusunun pratik bir karşılığıdır.",
    },
    {
      ad: "ayni-model",
      zorluk: 2,
      dy: true,
      soru: "Simülatörde WhatsApp ile iMessage'ın hazır ayarları aynıdır; anahtar şeffaflığı ya da PQ3 gibi farklar modelin ayarlarına düşmez.",
      aciklama: "Doğru. İkisi de uçtan uca, cırcırlı, anahtarları cihazda ve varsayılan yedeği sağlayıcıda. Bir model her ayrıntıyı taşımaz; vaka notları bu yüzden ayrıca okunmalıdır.",
    },
  ]),
  ...sorular(U, "u19-telegram", [
    {
      ad: "varsayilan",
      soru: "Telegram'da varsayılan (bulut) sohbetlerin içeriğini kim okuyabilir?",
      secenekler: ["İki taraf ve Telegram'ın sunucuları", "Yalnız mesajlaşan iki taraf", "İki taraf ve ağdaki herhangi biri", "Yalnız gizli sohbeti açan taraf"],
      aciklama: "Bulut sohbetleri istemci ile sunucu arasında şifrelidir, uçtan uca değildir: mesajlar sunucuda şirketin anahtarıyla saklanır. Her cihazdan bütün geçmişe ulaşılmasını bu sağlar. Ağı dinleyen ise içeriği göremez.",
    },
    {
      ad: "grup",
      dy: false,
      soru: "Telegram'da bir grup sohbetini gizli sohbete çevirmek, grubu uçtan uca şifreli yapar.",
      aciklama: "Yanlış. Gizli sohbet yalnız iki kişi arasında ve tek cihazda çalışır; gruplar ve kanallar her zaman bulut sohbetidir.",
    },
    {
      ad: "bedel",
      soru: "Telegram'ın gizli sohbetinde içerik sunucudan korunur. Bunun karşılığında kullanıcı neyden vazgeçer?",
      secenekler: ["Sohbetin başka cihazlarda görünmesinden", "Mesajlarının ağda şifrelenmesinden", "Karşı tarafı doğrulayabilmekten", "Fotoğraf ve dosya gönderebilmekten"],
      aciklama: "Gizli sohbetin anahtarları yalnız o iki cihazdadır; sohbet bilgisayardaki uygulamada görünmez, buluta yedeklenmez. Kullanım kolaylığı ile gizlilik arasındaki ödünleşim burada açıkça görülür.",
    },
    {
      ad: "yenileme",
      sayi: [100],
      zorluk: 2,
      soru: "Telegram gizli sohbetinde anahtar, en geç bir haftada ya da kaç mesajda bir yenilenir?",
      aciklama: "**100** mesajda bir. Bu kaba bir ileri gizliliktir: Double Ratchet'te anahtar her mesajda ilerler, burada 100 mesaj aynı anahtarla şifrelenebilir. Simülatör bu yüzden gizli sohbeti \"sabit anahtar\" ile modeller.",
    },
  ]),
  ...sorular(U, "u19-eposta", [
    {
      ad: "konu",
      soru: "PGP ile şifrelenmiş bir e-postada hangisi açık gider?",
      secenekler: ["Konu satırı, gönderen, alıcı ve tarih", "Yalnız ek dosyaların adları", "Mesajın ilk paragrafı", "Hiçbir şey; bütün e-posta şifrelidir"],
      aciklama: "OpenPGP mesaj gövdesini şifreler; e-posta başlıkları ise sunucuların iletmesi için açık kalır. Konu satırına yazılan bir sır, gövde ne kadar iyi şifrelenirse şifrelensin herkese açıktır.",
    },
    {
      ad: "ileri",
      zorluk: 2,
      soru: "Bir saldırgan yıllardır şifreli e-postaları kaydediyor ve bugün alıcının PGP özel anahtarını ele geçirdi. Ne olur?",
      secenekler: ["Kaydedilmiş eski e-postaların hepsi çözülür", "Yalnız bugünden sonraki e-postalar çözülür", "Hiçbiri çözülmez; her e-postanın anahtarı ayrıdır", "Yalnız imzalı e-postalar çözülür"],
      aciklama: "Her e-postanın oturum anahtarı alıcının uzun ömürlü açık anahtarıyla şifrelenir. Özel anahtar sızınca bütün eski oturum anahtarları açılır: ileri gizlilik yoktur. Mesajlaşma uygulamalarının cırcırı tam bunu önler (13. ünite).",
    },
    {
      ad: "yayginlik",
      soru: "Şifreli e-postanın yaygınlaşmamasının en önemli nedeni hangisidir?",
      secenekler: ["Anahtar dağıtımı ve doğrulamasının kullanıcıya kalması", "AES'in e-posta için yavaş olması", "E-posta sunucularının şifreli içeriği reddetmesi", "Standardın hiç yayımlanmamış olması"],
      aciklama: "Alıcının anahtarını bulmak, doğrulamak, kaybetmemek ve her cihaza taşımak kullanıcının işidir. Mesajlaşma uygulamaları anahtarları otomatik yönetip doğrulamayı isteğe bağlı bıraktığı için yaygınlaştı.",
    },
    {
      ad: "smime",
      dy: true,
      soru: "S/MIME, anahtar doğrulamasını kullanıcı yerine sertifika otoritelerine bırakır; bu yüzden kurumlarda daha kolay yayılır.",
      aciklama: "Doğru. TLS'teki gibi bir sertifika zinciri kullanır (12. ünite). Kurum kendi çalışanlarına sertifika dağıtabilir. İleri gizlilik ise S/MIME'da da yoktur.",
    },
  ]),
  ...sorular(U, "u19-tehdit-modeli", [
    {
      ad: "ilk-soru",
      soru: "Yeni bir uygulamanın şifreleme mimarisini seçmeden önce cevaplanması gereken ilk soru hangisidir?",
      secenekler: ["Kimden, neyi korumak istiyoruz?", "Hangi şifreleme kütüphanesini kullanacağız?", "Anahtarlar kaç bit olmalı?", "Sunucu hangi bulut sağlayıcısında olacak?"],
      aciklama: "Tehdit modeli olmadan mimari seçilemez: veritabanı sızıntısına karşı sunucu tarafı şifreleme yeter, işletene karşı uçtan uca şifreleme gerekir, metadata ise ikisiyle de korunmaz.",
    },
    {
      ad: "istemci",
      zorluk: 2,
      dy: false,
      soru: "Uçtan uca şifreleme, uygulamayı geliştiren şirketin kötü niyetli bir güncelleme yayımlamasına karşı da korur.",
      aciklama: "Yanlış. Şifrelemeyi istemci yapar; değiştirilmiş bir istemci mesajı şifrelemeden önce ya da çözdükten sonra okuyabilir. Açık kaynak, tekrarlanabilir derleme ve uygulama mağazası dışı doğrulama riski azaltır, ama kaldırmaz.",
    },
    {
      ad: "metadata",
      etiket: "tasarim",
      soru: "Bir uygulama içeriği uçtan uca şifreliyor. Kullanıcı her gün aynı saatte paylaşım yapıyor. Hangi önlem bu alışkanlığın sunucudan gizlenmesine en çok yardım eder?",
      secenekler: ["Yüklemeleri rastgele bir gecikmeyle göndermek", "Anahtar uzunluğunu 256 bite çıkarmak", "AES-GCM yerine ChaCha20 kullanmak", "Paylaşımları sunucuda ikinci kez şifrelemek"],
      aciklama: "Zaman bir metadata'dır; şifrelemenin gücü ona dokunmaz. Gecikme, toplu gönderim ya da sahte trafik bunu azaltır ama tamamen gizlemez.",
    },
  ]),
  ...sorular(U, "u19-anonimlik", [
    {
      ad: "oturum",
      etiket: "tasarim",
      zorluk: 2,
      soru: "Anonim geri bildirim platformunda eleştiriler yürütücülerin açık anahtarlarıyla şifreleniyor, ama kullanıcı gönderirken kendi hesabıyla giriş yapmış. Sunucuyu işleten yazılımcı neyi öğrenebilir?",
      secenekler: ["Eleştiriyi kimin gönderdiğini", "Eleştirinin içeriğini", "Yürütücülerin özel anahtarlarını", "Hiçbir şeyi; her şey şifreli"],
      aciklama: "İçerik şifreli, ama gönderim giriş yapmış bir oturumdan geliyor: oturum, yazarın kim olduğunu söyler. İçerik gizliliği ile yazar anonimliği ayrı sorunlardır; ikincisi için hesapsız gönderim (anonim üyelik belgesi) gerekir.",
    },
    {
      ad: "esik",
      etiket: "tasarim",
      soru: "Kötüye kullanımda yazarın kimliği açılabilmeli, ama tek bir yürütücü bunu keyfî yapamamalı. Hangi yapı uygun?",
      secenekler: ["Kimlik zarfını eşik şifrelemeyle kilitlemek", "Kimliği bir yürütücünün açık anahtarına şifrelemek", "Kimliği sunucuda açık saklayıp erişimi kaydetmek", "Kimliği hiç saklamamak"],
      aciklama: "Eşik şifrelemede örneğin beş yürütücüden üçü birlikte onaylamadan zarf açılmaz (16. ünitedeki gizli paylaşım). Kimliği hiç saklamamak hesap verebilirliği ortadan kaldırır.",
    },
    {
      ad: "kor-imza",
      etiket: "tasarim",
      soru: "\"Gönderen programın geçerli bir üyesi, ama kim olduğu bilinmiyor\" özelliğini hangi araç sağlar?",
      secenekler: ["Kör imzalı ya da grup imzalı üyelik belgesi", "Gönderenin kendi özel anahtarıyla imza", "Gönderenin e-posta adresinin SHA-256 özeti", "TLS istemci sertifikası"],
      aciklama: "Kör imzada imzalayan belgeyi görmeden imzalar, sonra belgenin kime verildiğini eşleştiremez. Grup imzasında ise gerektiğinde yetkili imzacıyı açabilir. E-postanın hash'i küçük bir ekipte kolayca tahmin edilir.",
    },
    {
      ad: "kucuk-ekip",
      dy: true,
      soru: "Şifreleme ne kadar iyi olursa olsun, beş kişilik bir ekipte yazım üslubu ve gönderim zamanı yazarı ele verebilir.",
      aciklama: "Doğru. Anonimlik kümesi küçüktür. Eleştirileri belirli bir sayıya ulaşınca toplu iletmek ve zamanı gizlemek bu çıkarımı zorlaştırır.",
    },
  ]),
  ...sorular(U, "u19-paylasim", [
    {
      ad: "exif",
      soru: "Kişisel paylaşım uygulamasında fotoğraflar uçtan uca şifreli. Fotoğraftaki konum bilgisi (EXIF) yine de kime görünür?",
      secenekler: ["Fotoğrafı açabilen herkese", "Yalnız sunucu yöneticisine", "Hiç kimseye; şifreleme meta veriyi de siler", "Yalnız ağı dinleyen saldırgana"],
      aciklama: "Şifreleme dosyayı yolda ve sunucuda korur; çözen kişi dosyanın içindeki her şeyi görür. Konum ve cihaz bilgisi yüklemeden önce telefonda temizlenmelidir.",
    },
    {
      ad: "kripto-silme",
      etiket: "tasarim",
      soru: "Uygulama dokuz ay sonra kapanacak. Sunucudaki ve yedeklerdeki bütün kayıtları güvenle okunamaz yapmanın en pratik yolu hangisi?",
      secenekler: ["Şifreleme anahtarlarını silmek", "Her kaydın üstüne sıfır yazmak", "Veritabanı tablosunu silmek", "Kullanıcı hesaplarını kapatmak"],
      aciklama: "Yedeklerin kaç kopyası olduğu bilinmeyebilir; anahtarlar silinince şifreli kopyaların hepsi aynı anda çöp olur. Bunun için verinin baştan şifreli saklanmış ve anahtarın kopyalanmamış olması gerekir.",
    },
    {
      ad: "kayip",
      etiket: "tasarim",
      soru: "Paylaşımlar yalnız telefondaki anahtarla şifreli. Telefon kaybolunca kayıtlar da kayboluyor. Gizliliği bozmadan kurtarmayı hangisi sağlar?",
      secenekler: ["Anahtarın kullanıcı parolasıyla şifreli bir yedeği", "Anahtarın bir kopyasını sunucuda açık tutmak", "Anahtarı kullanıcının e-postasına göndermek", "Şifrelemeyi kaldırıp TLS'e güvenmek"],
      aciklama: "15. ünitedeki gibi: anahtar, kullanıcının parolasından yavaş bir KDF ile türetilen anahtarla sarılıp saklanır. Sunucu yalnız şifreli sargıyı görür; parola zayıfsa çevrimdışı denenebilir.",
    },
    {
      ad: "ses",
      etiket: "tasarim",
      zorluk: 2,
      soru: "Uygulamaya ses kaydı eklenecek ve sunucunun sesi yazıya dökmesi isteniyor. Bu istek hangisiyle çelişir?",
      secenekler: ["Ses kayıtlarının uçtan uca şifreli olmasıyla", "Bağlantının TLS ile şifrelenmesiyle", "Kayıtların sunucu tarafında şifrelenmesiyle", "Kullanıcının parolasının hash'lenmesiyle"],
      aciklama: "Sunucu sesi yazıya dökmek için çözebilmeli; bu, sunucunun sesi duyabildiği anlamına gelir. Ya yazıya dökme cihazda yapılır ya da uçtan uca şifrelemeden vazgeçilir. Ses biyometrik veridir, bu kararın ağırlığı büyüktür.",
    },
  ]),
  ...sorular(U, "u19-webcrypto", [
    {
      ad: "gcm-boy",
      sayi: [40],
      soru: "12 karakterlik ASCII bir metni AES-GCM ile şifreleyip 12 baytlık nonce'u başa ekliyorsun. Etiket 16 bayt. Paket toplam kaç bayttır?",
      aciklama: "$12 + 12 + 16 = $ **40** bayt. GCM bir akış şifresi gibi çalışır: şifreli metin açık metinle aynı boydadır, sonuna doğrulama etiketi eklenir.",
    },
    {
      ad: "verify",
      etiket: "hata-bul",
      soru: "Bir sunucu HMAC etiketini kendisi hesaplıyor ve gelen etiketle `===` ile karşılaştırıyor. Sorun nedir?",
      secenekler: ["Karşılaştırma ilk farkta durur, süre etiketi sızdırır", "HMAC çıktısı bu yolla karşılaştırılamaz", "=== yalnız sayıları karşılaştırabilir", "Etiket her seferinde değiştiği için tutmaz"],
      aciklama: "Erken çıkan karşılaştırma zamanlama saldırısına açıktır (17. ünite). Web Crypto'da `crypto.subtle.verify` sabit zamanlı karşılaştırma yapar.",
    },
    {
      ad: "math-random",
      etiket: "hata-bul",
      soru: "Bir geliştirici AES anahtarını `Math.random()` ile üretiyor. Neden yanlış?",
      secenekler: ["Math.random kriptografik olarak güvenli değil, çıktısı tahmin edilebilir", "Math.random 0 ile 1 arasında sayı verdiği için anahtar çok kısa olur", "Math.random tarayıcıda çalışmaz", "AES anahtarı rastgele olmamalıdır"],
      aciklama: "Math.random hızlı bir sözde rastgele üreteçtir; birkaç çıktıdan iç durumu çıkarılabilir (2. ünite). Anahtar için `crypto.getRandomValues` ya da `generateKey` kullanılır.",
    },
    {
      ad: "imza-boy",
      sayi: [64],
      soru: "Web Crypto'da ECDSA P-256 imzası r ve s değerlerinin uç uca eklenmesiyle döner. Her biri 32 bayt ise imza kaç bayttır?",
      aciklama: "$32 + 32 = $ **64** bayt. Bazı kütüphaneler aynı imzayı DER biçiminde (70-72 bayt) verir; biçimler arasında çevirmek gerekebilir.",
    },
  ]),
];
