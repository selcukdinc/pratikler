// 15. ünite (Sıfır bilgili depolama): istemci tarafı şifreleme, anahtar zinciri, giriş ile
// şifrelemenin ayrılması, zarf şifreleme, paylaşım, kurtarma ve terimin sınırları.
// Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 15;

export const unite15: Soru[] = [
  ...sorular(U, "u15-istemci", [
    {
      ad: "anahtar-kimde",
      soru: "Bir bulut hizmeti \"dosyalarınız sunucularımızda AES-256 ile şifreli\" diyor. Hizmetin sıfır bilgili olup olmadığını anlamak için en belirleyici soru hangisidir?",
      secenekler: ["Şifreleme anahtarı kimin elinde duruyor?", "AES anahtarı kaç bit uzunluğunda?", "Veri merkezi hangi ülkede bulunuyor?", "Sunucular ne sıklıkla yedekleniyor?"],
      aciklama: "Algoritma ne kadar güçlü olursa olsun anahtar sağlayıcıdaysa sağlayıcı (ve onu ele geçiren ya da zorlayan herkes) veriyi açabilir. Sıfır bilgili depolamada veri istemcide, sağlayıcının hiç görmediği bir anahtarla şifrelenir.",
    },
    {
      ad: "sunucu-tarafi",
      dy: false,
      soru: "Anahtarı sunucuda duran sunucu tarafı şifreleme, sunucu yöneticisinin dosyaları okumasını engeller.",
      aciklama: "Yanlış. Sunucu dosyayı isteyen kullanıcıya göndermek için zaten çözer; yönetici de aynı yetkiyle çözebilir. Bu yöntem çalınan disklere ve yedek bantlarına karşı korur.",
    },
    {
      ad: "neyi-korur",
      soru: "Anahtarı hizmet sağlayıcıda duran sunucu tarafı şifreleme en çok hangi tehdide karşı korur?",
      secenekler: ["Veri merkezinden çalınan disklere", "Sağlayıcının kendi çalışanlarına", "Şirkete gelen resmi veri taleplerine", "Hesabını ele geçiren saldırgana"],
      aciklama: "Disk tek başına çalınırsa anahtar yanında olmadığı için okunamaz. Ama sağlayıcının içindeki biri, resmi bir talep ya da kullanıcının parolasını bilen saldırgan, sistemin kendi yetkisiyle veriyi açar.",
    },
  ]),
  ...sorular(U, "u15-zincir", [
    {
      ad: "kdf-neden",
      soru: "Ana paroladan anahtar türetirken SHA-256 yerine neden PBKDF2 ya da Argon2 kullanılır?",
      secenekler: ["Her parola denemesini saldırgana pahalıya mal etmek için", "AES daha uzun bir anahtar istediği için", "SHA-256 her seferinde farklı sonuç verdiği için", "Sunucunun parolayı geri çözebilmesi için"],
      aciklama: "Sızan bir kasaya karşı saldırganın tek yolu parolayı tahmin etmektir. Yavaş bir KDF her tahmini binlerce kat pahalı yapar (9. ünite). Argon2 bunu bellekle de zorlaştırır.",
    },
    {
      ad: "tuz",
      soru: "Parola yöneticilerinde PBKDF2'nin tuzu olarak çoğu zaman kullanıcının e-posta adresi kullanılır. Amaç nedir?",
      secenekler: ["Aynı parolalı iki kişinin anahtarı farklı olsun", "E-posta adresi sunucudan gizlensin", "Parolayı unutan e-postayla kurtarılsın", "Türetilen anahtar daha kısa olsun"],
      aciklama: "Tuz, aynı parolanın farklı kullanıcılarda farklı anahtar vermesini sağlar; böylece tek bir ön hesap tablosu herkese karşı kullanılamaz. E-posta tuz için yeterince benzersizdir ve istemci onu girişten önce bilir.",
    },
    {
      ad: "deneme",
      zorluk: 2,
      sayi: ["31700±600"],
      soru: "Ana parola, 10.000 kelimelik bir listeden rastgele seçilmiş 4 kelimeden oluşuyor. Sızan kasaya karşı saldırgan saniyede 10.000 parola deneyebiliyor. Bütün olasılıkları denemek yaklaşık kaç yıl sürer? (1 yıl ≈ $3{,}15 \\times 10^7$ saniye)",
      aciklama: "Olasılık sayısı $10\\,000^4 = 10^{16}$.\n---\nSüre $10^{16} / 10^4 = 10^{12}$ saniye.\n---\n$10^{12} / (3{,}15 \\times 10^7) \\approx$ **31.700 yıl**. Aynı parola düz SHA-256 ile korunsaydı, saniyede milyarlarca deneme yapan bir GPU işi birkaç ayda bitirirdi.",
    },
    {
      ad: "yineleme-artir",
      dy: true,
      soru: "Kasa anahtarı ayrı tutulan bir zincirde KDF'nin yineleme sayısını artırmak, kasadaki öğelerin yeniden şifrelenmesini gerektirmez.",
      aciklama: "Doğru. Yeni yineleme sayısıyla türetilen anahtar yalnız kasa anahtarını yeniden sarar. Öğeler kasa anahtarına bağlıdır ve o değişmez.",
    },
  ]),
  ...sorular(U, "u15-giris", [
    {
      ad: "ayri",
      soru: "Sıfır bilgili bir kasada girişte sunucuya neden ana anahtarın kendisi değil, ondan ayrıca türetilen bir giriş özeti gönderilir?",
      secenekler: ["Sunucu bu özetten şifreleme anahtarını türetemesin diye", "Giriş özeti ana anahtardan kısa olduğu için", "Sunucu ana anahtarı zaten bildiği için", "Giriş özeti her girişte rastgele değiştiği için"],
      aciklama: "Giriş özeti ile şifreleme anahtarı aynı ana anahtardan farklı etiketlerle (HKDF) türetilir ve birinden ötekine geçilemez. Sunucu kimliği doğrular ama kasayı açacak anahtarı hiç görmez.",
    },
    {
      ad: "dogrulayici",
      dy: true,
      soru: "Sunucu, gelen giriş özetini düz saklamayıp bir kez daha hash'leyerek saklarsa, veritabanı sızdığında saldırgan bu değerle doğrudan giriş yapamaz.",
      aciklama: "Doğru. Sunucu yalnız hash'i saklar; giriş için hash'in ön görüntüsü gerekir. Bu, 9. ünitedeki parola saklama ilkesinin aynısıdır.",
    },
    {
      ad: "parola-gonder",
      etiket: "hata-bul",
      soru: "Bir uygulama ana parolayı TLS ile sunucuya gönderiyor; sunucu parolayla kasa anahtarını çözüp istemciye yolluyor. Sorun nedir?",
      secenekler: ["Sunucu parolayı görür ve kasayı istediği an açar", "TLS, parolayı yolda korumaya yetmez", "Kasa anahtarı istemciye göre çok uzundur", "Parolanın her girişte değişmesi gerekir"],
      aciklama: "Parolayı bir kez gören sunucu, onu kaydedip kasayı istediği zaman çözebilir. Sıfır bilgili tasarımda parola cihazdan çıkmaz; sunucuya yalnız ondan türetilmiş, şifrelemeye yaramayan bir giriş özeti gider.",
    },
  ]),
  ...sorular(U, "u15-zarf", [
    {
      ad: "parola-degisince",
      soru: "Kasa anahtarı ayrı tutulan bir sistemde kullanıcı ana parolasını değiştirince ne yeniden şifrelenir?",
      secenekler: ["Yalnız kasa anahtarının sargısı", "Kasadaki bütün öğeler", "Hiçbir şey, eski parola da çalışır", "Yalnız öğelerin başlıkları"],
      aciklama: "Yeni paroladan yeni bir anahtar şifreleme anahtarı türetilir ve aynı kasa anahtarı bununla yeniden sarılır. Binlerce öğe olsa da iş tek bir AES-GCM şifrelemesidir.",
    },
    {
      ad: "disk",
      sayi: [32],
      soru: "Bir disk şifreleme sistemi 1 TB veriyi rastgele bir 256 bitlik veri anahtarıyla, veri anahtarını da paroladan türeyen anahtarla şifreliyor. Parola değişince yeniden şifrelenmesi gereken veri kaç bayttır?",
      aciklama: "Yalnız 256 bitlik veri anahtarı yeniden sarılır: $256 / 8 =$ **32 bayt**. Disk şifrelemesinin parolası bu yüzden saniyeler içinde değişir.",
    },
    {
      ad: "ad",
      soru: "Verinin rastgele bir veri anahtarıyla, veri anahtarının da ayrı bir anahtar şifreleme anahtarıyla şifrelendiği yapıya ne denir?",
      secenekler: ["Zarf şifreleme", "Çift ECB", "Anahtar germe", "Tuzlama"],
      aciklama: "Zarf şifrelemede veri anahtarı bir zarfın içindeki mektup gibidir; zarfı açan anahtar ayrı yönetilir. Bulut anahtar yönetim hizmetleri, parola yöneticileri ve disk şifreleme bu yapıyı kullanır.",
    },
  ]),
  ...sorular(U, "u15-paylasim", [
    {
      ad: "nasil",
      soru: "Ayşe kasasındaki tek bir öğeyi Mert'le paylaşmak istiyor; sunucu öğeyi görmemeli. En uygun yol hangisi?",
      secenekler: ["Öğe anahtarını Mert'in açık anahtarına sarmak", "Ana parolasını Mert'e güvenli bir kanaldan söylemek", "Öğeyi şifresiz olarak sunucuya koymak", "Kasa anahtarını sunucuya bırakmak"],
      aciklama: "Her öğenin kendi anahtarı olduğu için yalnız o anahtar Mert'in açık anahtarına (RSA ya da ECDH ile) sarılır. Mert kendi özel anahtarıyla açar; Ayşe'nin öteki öğeleri kapalı kalır.",
    },
    {
      ad: "geri-alma",
      dy: true,
      soru: "Paylaşılan bir öğeye erişim geri alındığında öğe yeni bir anahtarla yeniden şifrelenmezse, eski anahtarı saklamış kişi o sürümü okumaya devam edebilir.",
      aciklama: "Doğru. Sunucu erişimi kapatsa da kişi anahtarı ve daha önce indirdiği şifreli baytı saklamış olabilir. Gerçek geri almada öğe yeni bir anahtarla şifrelenir; yine de daha önce görülen içerik geri alınamaz.",
    },
    {
      ad: "sahte-acik",
      zorluk: 2,
      etiket: "hata-bul",
      soru: "Paylaşım sırasında sunucu, Mert'in açık anahtarı yerine kendi anahtarını verirse ne olur?",
      secenekler: ["Öğe anahtarı sunucuya sarılır ve sunucu öğeyi okur", "Paylaşım hata verir ve hiçbir şey olmaz", "Mert öğeyi iki kez görür", "Ayşe'nin ana parolası değişir"],
      aciklama: "Bu, 10. ve 13. ünitelerdeki ortadaki adamın aynısıdır. Açık anahtarların bir parmak iziyle doğrulanması ya da anahtar şeffaflığı günlükleri bu yüzden paylaşımda da gerekir.",
    },
  ]),
  ...sorular(U, "u15-kurtarma", [
    {
      ad: "unuttum",
      dy: false,
      soru: "Gerçekten sıfır bilgili bir parola yöneticisinde destek ekibi, parolasını unutan kullanıcının kasasını e-posta doğrulamasıyla açabilir.",
      aciklama: "Yanlış. Kasa anahtarı yalnız paroladan (ya da kullanıcının önceden kurduğu bir kurtarma yolundan) türeyen anahtarla açılır. Destek ekibi kasayı açabiliyorsa, sistem sıfır bilgili değildir.",
    },
    {
      ad: "kurum",
      soru: "Bir kurum, işten ayrılan çalışanların kasalarına erişebilmek istiyor ve kasalara bir emanet kopyası ekliyor. Bunun bedeli nedir?",
      secenekler: ["Kurum her çalışanın kasasını istediği an açabilir", "Kasalar artık hiçbir biçimde şifrelenemez", "Çalışanlar ana parola kullanamaz hale gelir", "Sunucu bütün kasaları düz metin olarak görür"],
      aciklama: "Kurtarma yolu, kurtarabilen kişiye erişim de verir. Sıfır bilgi bu durumda hizmet sağlayıcıya karşı korur, kuruma karşı değil. Bu yüzden emanet kullanımı yazılı politikayla ve kayıtla yönetilir.",
    },
    {
      ad: "kod-entropi",
      sayi: [160],
      soru: "Bir kurtarma kodu 40 onaltılık (hex) karakterden oluşuyor ve her karakter rastgele seçiliyor. Kod kaç bit entropi taşır?",
      aciklama: "Her hex karakter 4 bit taşır: $40 \\times 4 =$ **160 bit**. Bu kadar entropiyi kaba kuvvetle denemek imkânsızdır; bu yüzden kurtarma kodu yavaş bir KDF'ye ihtiyaç duymaz, ama kâğıtta güvenli saklanmalıdır.",
    },
    {
      ad: "guvenilir-kisi",
      soru: "Kurtarma anahtarını beş arkadaşa, herhangi üçü bir araya gelince açılacak biçimde bölmek hangi tekniktir?",
      secenekler: ["Eşik sır paylaşımı", "Zarf şifreleme", "Anahtar germe", "Gizli gönderen"],
      aciklama: "Eşik sır paylaşımında $k$ pay sırrı açar, daha azı hiçbir şey söylemez (16. ünite). Tek bir arkadaş kasayı açamaz; iki arkadaşın kaybolması da kurtarmayı engellemez.",
    },
  ]),
  ...sorular(U, "u15-terim", [
    {
      ad: "web",
      zorluk: 2,
      etiket: "hata-bul",
      soru: "Bir hizmet \"sıfır bilgili\" olduğunu söylüyor, ama kasayı web arayüzünde sunucunun her açılışta gönderdiği JavaScript ile açıyorsun. Kalan risk nedir?",
      secenekler: ["Sunucu bir gün parolayı sızdıran kod gönderebilir", "JavaScript tarayıcıda AES çalıştıramaz", "Tarayıcı anahtarı kendiliğinden siler", "Web arayüzünde şifreleme hiç yapılamaz"],
      aciklama: "Şifreleme istemcide yapılsa da istemcinin kodunu sunucu veriyor. Tek bir kullanıcıya hedefli, kötü niyetli bir sürüm göndermek mümkündür; 14. ünitedeki kötü niyetli güncellemenin aynısı. İmzalı uygulamalar ve tarayıcı eklentileri bu riski azaltır.",
    },
    {
      ad: "zkp",
      dy: false,
      soru: "Parola yöneticilerinin kullandığı \"sıfır bilgi\" ifadesi, kriptografideki sıfır bilgi ispatlarıyla aynı şeydir.",
      aciklama: "Yanlış. Sıfır bilgi ispatı, bir şeyi bildiğini o şeyi açıklamadan kanıtlama yöntemidir. Pazarlamadaki \"sıfır bilgi\" ise \"sağlayıcı verini göremez\" anlamında kullanılır ve çoğu ürün bunu ispatla değil, istemci tarafı şifrelemeyle sağlar.",
    },
    {
      ad: "gorunen",
      soru: "Sıfır bilgili bir bulut depolama hizmetinde sunucunun yine de görebildiği bilgi hangisidir?",
      secenekler: ["Dosya sayısı, boyutu ve erişim zamanı", "Dosyaların çözülmüş içeriği", "Kullanıcının kasa anahtarı", "Kullanıcının ana parolası"],
      aciklama: "İçerik şifrelidir, ama metadata çoğu zaman değildir. Hangi saatlerde giriş yaptığın, kaç dosyan olduğu ve büyüklükleri, bazı ürünlerde dosya ve klasör adları bile sağlayıcıya görünür (14. ünite).",
    },
  ]),
];
