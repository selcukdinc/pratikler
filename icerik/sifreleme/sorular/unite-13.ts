// 13. ünite (Signal Protokolü): TLS ile uçtan uca şifreleme farkı, kimlik ve ön anahtarlar,
// X3DH, simetrik ve DH cırcırları, ileri gizlilik ve ele geçirme sonrası güvenlik, sırası
// karışan mesajlar, güvenlik numarası.
import { sorular, type Soru } from "./yardimci.ts";

const U = 13;

export const unite13: Soru[] = [
  ...sorular(U, "u13-e2ee", [
    {
      ad: "fark",
      soru: "Yalnız TLS kullanan bir mesajlaşma uygulamasında sunucu mesajların içeriğini görebilir mi?",
      secenekler: ["Evet; TLS sunucuda biter ve sunucu mesajı çözer", "Hayır; TLS mesajı alıcıya kadar şifreli taşır", "Yalnız mesaj resim içeriyorsa", "Yalnız sunucu yurt dışındaysa"],
      aciklama: "TLS iki ayrı bağlantıdır: Ayşe ile sunucu, sunucu ile Mert. Sunucu ortada mesajı çözer ve yeniden şifreler. Uçtan uca şifrelemede anahtarlar yalnız iki uçtadır; sunucu yalnız şifreli bayt taşır.",
    },
    {
      ad: "neyi-korur",
      dy: false,
      soru: "Uçtan uca şifreleme, telefonu kilidi açıkken çalınan birinin mesajları okumasını da engeller.",
      aciklama: "Yanlış. Uçtan uca şifreleme mesajın **yolunu** korur. Cihazdaki mesajlar çözülmüş haldedir; telefonu açık ele geçiren okur. Bunun için ekran kilidi ve kaybolan mesajlar gerekir.",
    },
    {
      ad: "sunucu-ne-gorur",
      soru: "İyi tasarlanmış bir uçtan uca şifreli uygulamada sunucunun yine de bilmesi gereken bilgi hangisidir?",
      secenekler: ["Mesajın kime teslim edileceği", "Mesajın içeriği", "Mesaj anahtarı", "Kullanıcının özel kimlik anahtarı"],
      aciklama: "Sunucu mesajı doğru alıcıya iletmek zorundadır; bu yüzden alıcıyı, zamanı ve boyu görür. Bu üst veri (metadata) 14. ünitenin konusudur.",
    },
  ]),
  ...sorular(U, "u13-prekey", [
    {
      ad: "neden",
      soru: "Signal'de kullanıcılar sunucuya neden önceden \"ön anahtarlar\" bırakır?",
      secenekler: ["Karşı taraf çevrimdışıyken de oturum kurulabilsin diye", "Sunucu mesajları onlarla çözebilsin diye", "Parolayı kurtarmak için", "Mesajları sıkıştırmak için"],
      aciklama: "Diffie-Hellman iki tarafın da değer göndermesini ister. Mert uyurken Ayşe mesaj atmak isterse Mert'in sunucuda bıraktığı açık ön anahtarlarını kullanır. Sunucu yalnız açık anahtarları tutar.",
    },
    {
      ad: "tek-kullanimlik",
      dy: true,
      soru: "Tek kullanımlık ön anahtarlar her oturumda bir kez kullanılıp sunucudan silinir.",
      aciklama: "Doğru. Böylece aynı tek kullanımlık anahtar iki oturumda yer almaz ve sonradan çalınsa bile tek bir oturumu ilgilendirir. Bittiğinde uygulama yenilerini yükler; tükenirse X3DH onsuz (üç DH ile) yapılır.",
    },
    {
      ad: "imzali",
      soru: "İmzalı ön anahtarı kimlik anahtarıyla imzalamak neyi önler?",
      secenekler: ["Sunucunun sahte bir ön anahtar sunmasını", "Ön anahtarın cihazdan çalınmasını", "Mesajların sunucuda gecikmesini", "Ön anahtarların zamanla tükenmesini"],
      aciklama: "Ayşe, imzayı Mert'in kimlik anahtarıyla doğrular. Sunucu imzalı ön anahtarı değiştirirse imza tutmaz. Kimlik anahtarının kendisini değiştirirse bunu yakalayan güvenlik numarasıdır.",
    },
  ]),
  ...sorular(U, "u13-x3dh", [
    {
      ad: "dh-sayisi",
      sayi: [4],
      soru: "Tek kullanımlık ön anahtar da varsa X3DH kaç ayrı Diffie-Hellman hesabı yapar?",
      aciklama: "DH1 = DH(IK_A, SPK_M), DH2 = DH(EK_A, IK_M), DH3 = DH(EK_A, SPK_M), DH4 = DH(EK_A, OPK_M): **4**. Dördü birleştirilip KDF'den geçirilir.",
    },
    {
      ad: "kimlik-dogrulama",
      zorluk: 2,
      soru: "X3DH'de iki tarafın kimlik anahtarlarının hesaba girmesi ne sağlar?",
      secenekler: ["Sırrı yalnız iki kimliğin sahipleri hesaplar", "Mesajların daha küçük boyutta sıkıştırılmasını", "Sunucunun oturumu gerektiğinde çözebilmesini", "Ön anahtarların hiçbir zaman tükenmemesini"],
      aciklama: "DH1 Ayşe'nin, DH2 Mert'in kimlik anahtarını işin içine katar: ikisinden birinin kimlik özel anahtarı olmayan sırrı hesaplayamaz. DH3 ve DH4 ise geçici anahtarlarla ileri gizlilik ekler.",
    },
    {
      ad: "inkar",
      zorluk: 3,
      soru: "X3DH'de mesajlar imzalanmaz, kimlik DH hesaplarıyla doğrulanır. Bunun bir yan etkisi nedir?",
      secenekler: ["Mert, yazanın Ayşe olduğunu kanıtlayamaz", "Mesajlar imzalı olduğundan daha uzun olur", "Sunucu mesajları okuyabilir hale gelir", "Oturum hiçbir şekilde kurulamaz"],
      aciklama: "Ortak sırrı iki taraf da bildiği için Mert dökümü kendisi de üretebilirdi. Bu **inkâr edilebilirliktir**: konuşma sızarsa Ayşe \"bunu ben yazmadım\" diyebilir. İmzanın tersi bir tercihtir.",
    },
  ]),
  ...sorular(U, "u13-simetrik", [
    {
      ad: "adim",
      soru: "Simetrik cırcırda zincir anahtarından ne üretilir?",
      secenekler: ["Mesaj anahtarı ve sonraki zincir anahtarı", "Yeni bir DH anahtar çifti ve bir imza", "Kullanıcının uzun ömürlü kimlik anahtarı", "İki tarafın karşılaştıracağı numara"],
      aciklama: "$MK_i = \\text{HMAC}(CK_i, 1)$ ve $CK_{i+1} = \\text{HMAC}(CK_i, 2)$. Mesaj anahtarı kullanılıp silinir, zincir bir diş ileri döner. HMAC tek yönlü olduğu için $CK_{i+1}$'den $CK_i$ bulunamaz.",
    },
    {
      ad: "kac-adim",
      sayi: [3],
      soru: "Bir zincir $CK_0$ ile başlıyor ve her mesaj zinciri bir adım ilerletiyor. Bu zincirdeki 4. mesajın anahtarını üretmek için zincir kaç kez ilerletilmiş olmalıdır?",
      aciklama: "1. mesaj $CK_0$'dan, 2. mesaj $CK_1$'den, 3. mesaj $CK_2$'den, 4. mesaj $CK_3$'ten: **3** ilerletme.",
    },
    {
      ad: "neden-sil",
      dy: true,
      soru: "Kullanılan mesaj anahtarlarının ve eski zincir anahtarlarının silinmesi, ileri gizliliğin şartıdır.",
      aciklama: "Doğru. Anahtar cihazda kalırsa telefonu ele geçiren eski mesajları da çözer. Cırcır yalnız ileri döner; geri dönmek için gereken değerler artık yoktur.",
    },
  ]),
  ...sorular(U, "u13-dh", [
    {
      ad: "ne-zaman",
      soru: "Double Ratchet'te DH cırcırı ne zaman döner?",
      secenekler: ["Konuşmada sıra karşı tarafa geçtiğinde", "Her mesajda", "Günde bir kez", "Yalnız kullanıcı isterse"],
      aciklama: "Her mesaj kendi DH açık anahtarını taşır. Mert, Ayşe'nin yeni DH anahtarını gördüğünde kendi yeni anahtarıyla DH hesaplar; kök anahtar ilerler ve iki yeni zincir başlar.",
    },
    {
      ad: "kok",
      soru: "DH cırcırı dönünce kök anahtar nasıl güncellenir?",
      secenekler: ["Eski kök ve yeni DH çıktısı KDF'den geçer", "Yeni kök anahtar her seferinde sunucudan alınır", "Kök anahtar oturum boyunca hiç değişmez", "Kök anahtar son mesaj anahtarıyla XOR'lanır"],
      aciklama: "$(RK', CK) = \\text{KDF}(RK, \\text{DH}(\\ldots))$. Eski kökü bilen ama yeni DH özel anahtarını bilmeyen saldırgan yeni kökü hesaplayamaz. İyileşme buradan gelir.",
    },
  ]),
  ...sorular(U, "u13-fs-pcs", [
    {
      ad: "fs",
      soru: "Bugün çalınan bir oturum durumunun dünkü mesajları açamaması hangi özelliktir?",
      secenekler: ["İleri gizlilik", "Ele geçirme sonrası güvenlik", "İnkâr edilebilirlik", "Gizli gönderen"],
      aciklama: "İleri gizlilik (forward secrecy) geçmişi korur. Ele geçirme sonrası güvenlik ise geleceği: saldırgan pasifse birkaç mesaj sonra yeniden kör kalır.",
    },
    {
      ad: "pcs",
      zorluk: 2,
      soru: "Ele geçirme sonrası güvenlik neden yalnız simetrik cırcırla sağlanamaz?",
      secenekler: ["Zincirden sonraki her anahtar türetilir; taze sır gerekir", "HMAC hesaplaması telefonlarda çok yavaş kaldığı için", "Simetrik cırcır mesajları sıkıştırmadığı için", "Simetrik cırcır gerektiğinde geriye de döndüğü için"],
      aciklama: "KDF zinciri deterministiktir: $CK_i$ çalınırsa $CK_{i+1}, CK_{i+2}, \\dots$ hesaplanır. Saldırganın bilmediği yeni rastgelelik ancak taze bir DH anahtar çiftiyle girer.",
    },
    {
      ad: "etkin",
      zorluk: 3,
      dy: true,
      soru: "Saldırgan oturum durumunu çaldıktan sonra konuşmaya etkin olarak katılırsa (kendi DH anahtarlarını göndererek) ele geçirme sonrası güvenlik devreye girmeyebilir.",
      aciklama: "Doğru. İyileşme, saldırganın bilmediği yeni DH anahtarlarına dayanır. Saldırgan yanıtları kendisi üretip araya sürekli girerse durumu takip etmeye devam edebilir. PCS pasif saldırgana karşı kesin, etkin saldırgana karşı sınırlıdır.",
    },
  ]),
  ...sorular(U, "u13-sira", [
    {
      ad: "atlanan",
      soru: "Mert 3. mesajı 5. mesajdan sonra alırsa Double Ratchet ne yapar?",
      secenekler: ["Atlanan anahtarları saklar ve onunla çözer", "3. mesajı geçersiz sayıp reddeder", "Bütün oturumu sıfırlayıp baştan kurar", "Mesajı sunucudan şifresiz olarak ister"],
      aciklama: "Mesaj başlığında zincirdeki sıra numarası vardır. 5. mesaj gelince 3. ve 4. mesajın anahtarları türetilip saklanır. Bu anahtarlar sınırlı sayıda ve süreyle tutulur; ileri gizlilik için sonra silinir.",
    },
  ]),
  ...sorular(U, "u13-guvenlik-no", [
    {
      ad: "neyi-yakalar",
      soru: "İki kişinin güvenlik numaralarını karşılaştırması hangi saldırıyı ortaya çıkarır?",
      secenekler: ["Sunucunun araya kendi anahtarını koymasını", "Telefonun kilitliyken çalınmasını", "Mesajların geç teslim edilmesini", "Hesapta zayıf bir parola kullanılmasını"],
      aciklama: "Güvenlik numarası iki tarafın kimlik açık anahtarlarından hesaplanır. Sunucu Ayşe'ye Mert'in anahtarı yerine kendisininkini verirse iki telefonda farklı numara görünür.",
    },
    {
      ad: "basamak",
      sayi: [60],
      soru: "Signal'de bir güvenlik numarası kaç ondalık basamaktan oluşur?",
      aciklama: "**60** basamak: her iki tarafın kimlik anahtarından 30'ar basamak, 5'erli 12 grup halinde. Aynı bilgi QR koduyla da karşılaştırılabilir.",
    },
    {
      ad: "degisti",
      etiket: "hata-bul",
      soru: "Uygulama \"Mert'in güvenlik numarası değişti\" uyarısı veriyor. En doğru davranış hangisidir?",
      secenekler: [
        "Yeni numarayı Mert'le başka bir kanaldan karşılaştırmak",
        "Uyarıyı görmezden gelmek; uygulama zaten şifreli",
        "Uygulamayı hemen silmek",
        "Mesajları bir süre şifresiz göndermek",
      ],
      aciklama: "Numara Mert yeni telefon aldığında ya da uygulamayı yeniden kurduğunda da değişir; çoğu zaman masumdur. Ama araya giren bir sunucu da tam bu uyarıya yol açar. Önemli konuşmalarda yeniden doğrulamak gerekir.",
    },
  ]),
];
