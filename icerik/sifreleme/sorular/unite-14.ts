// 14. ünite (Gruplar, cihazlar ve metadata): Sender Keys, MLS ve TreeKEM, çoklu cihaz,
// yedekler, metadata sorunu, gizli gönderen, kişi keşfi. Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 14;

export const unite14: Soru[] = [
  ...sorular(U, "u14-sender-keys", [
    {
      ad: "ikili",
      sayi: [99],
      soru: "100 kişilik bir grupta her mesaj her üyeye ayrı ayrı (ikili oturumlarla) şifrelenseydi, gönderen tek bir mesaj için kaç şifreleme yapardı?",
      aciklama: "Kendisi dışındaki **99** üye için birer kez. Sender Keys bunu bire indirir: mesaj gönderenin zincir anahtarıyla bir kez şifrelenir, sunucu aynı şifreli metni herkese dağıtır.",
    },
    {
      ad: "nasil",
      soru: "Sender Keys yönteminde her üye gruba katılınca ne yapar?",
      secenekler: ["Kendi zincir anahtarını üyelere bir kez dağıtır", "Sunucudan grubun ortak parolasını indirir", "Her mesajı her üye için ayrı ayrı şifreler", "Bütün üyelerin özel anahtarlarını toplar"],
      aciklama: "Herkes herkesin gönderen anahtarını bilir. Sonraki mesajlar tek şifrelemeyle gider; zincir her mesajda simetrik cırcırla ilerler.",
    },
    {
      ad: "cikinca",
      sayi: [12],
      soru: "5 kişilik bir Sender Keys grubundan bir üye çıkarıldı. Kalan 4 üyenin her biri yeni gönderen anahtarını öteki 3 kişiye ikili oturumla gönderirse toplam kaç anahtar mesajı gerekir?",
      aciklama: "$4 \\times 3 =$ **12**. Çıkan üye eski zincirlerin hepsini bildiği için herkes yenilemek zorundadır. $n$ üyede bu $(n-1)(n-2)$, yani kabaca $n^2$ mesajdır.",
    },
    {
      ad: "pcs-yok",
      zorluk: 2,
      dy: true,
      soru: "Sender Keys'te bir üyenin gönderen anahtarı çalınırsa, o üye anahtarını yenileyene kadar mesajları okunabilir; DH cırcırı gibi kendiliğinden iyileşme yoktur.",
      aciklama: "Doğru. Sender Keys yalnız simetrik cırcır kullanır: ileri gizlilik var, ele geçirme sonrası güvenlik yok. MLS bunu ağaç güncellemeleriyle getirir.",
    },
  ]),
  ...sorular(U, "u14-mls", [
    {
      ad: "log",
      sayi: [10],
      soru: "1024 üyeli bir MLS grubunda bir üye anahtarını güncellediğinde, yaprağından köke kadar yaklaşık kaç ağaç düğümünün sırrı yenilenir (yaprak hariç)?",
      aciklama: "Dengeli ikili ağacın derinliği $\\log_2 1024 =$ **10**. Her üye yalnız kendi yolunu günceller; maliyet üye sayısıyla değil, onun logaritmasıyla büyür.",
    },
    {
      ad: "standart",
      soru: "MLS (Messaging Layer Security) nedir?",
      secenekler: ["Gruplar için uçtan uca anahtar yönetimi standardı", "TLS protokolünün mesajlaşma için yeni sürümü", "Popüler bir mesajlaşma uygulamasının adı", "Yeni tasarlanmış bir eliptik eğri"],
      aciklama: "MLS 2023'te RFC 9420 olarak yayımlandı. Binlerce kişilik gruplarda bile ileri gizlilik ve ele geçirme sonrası güvenlik sağlar. Kasım 2026 itibarıyla birkaç büyük mesajlaşma ürünü ve RCS standardı MLS'e geçiş yapıyor.",
    },
    {
      ad: "agac",
      zorluk: 2,
      soru: "TreeKEM'de üyeler neden bir ağacın yapraklarına yerleştirilir?",
      secenekler: ["Güncellemeyi her alt ağaca bir kez şifrelemek için", "Üyeleri adlarına göre alfabetik sıraya dizmek için", "Sunucunun grup mesajlarını okuyabilmesi için", "Grubu en çok sekiz kişiyle sınırlamak için"],
      aciklama: "Her iç düğümün sırrını o düğümün altındaki üyeler bilir. Yeni sırrı, yolun komşu alt ağaçlarının açık anahtarlarına şifrelemek yeter: $n$ yerine yaklaşık $\\log_2 n$ şifreleme.",
    },
  ]),
  ...sorular(U, "u14-cihaz", [
    {
      ad: "kac-sifreleme",
      sayi: [4],
      soru: "Ayşe'nin 3, Mert'in 2 cihazı var ve her cihazın kendi anahtarı var. Ayşe telefonundan Mert'e bir mesaj yazınca mesaj kaç cihaz için ayrı şifrelenir?",
      aciklama: "Mert'in 2 cihazı ve Ayşe'nin kendi öteki 2 cihazı (yazdığını onlarda da görsün diye): **4**.",
    },
    {
      ad: "yeni-cihaz",
      soru: "Uçtan uca şifreli bir uygulamaya yeni bir cihaz eklenirken en önemli güvenlik adımı hangisidir?",
      secenekler: ["Yeni cihazı mevcut bir cihazdan onaylamak", "Yeni cihaza sunucudan özel anahtar indirmek", "Hesap parolasını e-postayla göndermek", "Eski cihazı tamamen kapatmak"],
      aciklama: "Örneğin telefondaki QR kodu bilgisayardan okutmak. Sunucu \"yeni cihaz\" diye kendi anahtarını eklerse herkes ona da şifreler. Bu yüzden cihaz ekleme mevcut bir cihazda onaylanır ve karşı tarafa \"yeni cihaz eklendi\" bildirimi gider.",
    },
  ]),
  ...sorular(U, "u14-yedek", [
    {
      ad: "zayif-halka",
      etiket: "hata-bul",
      soru: "Bir uygulama mesajları uçtan uca şifreliyor ama sohbet yedeğini bulut sağlayıcısına şifresiz bırakıyor. Sorun nedir?",
      secenekler: ["Yedeğe erişen herkes mesajları okur", "Yedek çok yer kaplar", "Mesajlar gecikir", "Uçtan uca şifreleme bozulur ve mesajlar gitmez"],
      aciklama: "Şifreleme en zayıf halkası kadar güçlüdür. Uçtan uca şifreli yedek, kullanıcının parolasından ya da rastgele bir kurtarma anahtarından türetilen anahtarla şifrelenir; sağlayıcı yalnız şifreli bayt saklar.",
    },
    {
      ad: "parola-riski",
      dy: true,
      soru: "Uçtan uca şifreli yedek kısa bir parolayla korunuyorsa, yedeği ele geçiren onu çevrimdışı kaba kuvvetle kırmayı deneyebilir.",
      aciklama: "Doğru. Bu yüzden yedek anahtarları yavaş KDF'lerle türetilir (9. ünite) ya da donanım güvenlik modülleri deneme sayısını sınırlar. 64 haneli rastgele bir kurtarma anahtarı da seçenektir.",
    },
  ]),
  ...sorular(U, "u14-metadata", [
    {
      ad: "ne",
      soru: "Mesajlaşmada \"metadata\" neyi kapsar?",
      secenekler: ["Kim, kime, ne zaman ve ne boyutta yazdı", "Mesajın çözülmüş içeriği", "Her mesajın anahtarı", "Kullanıcının hesap parolası"],
      aciklama: "İçerik şifreli olsa da bu kayıtlar çok şey söyler: gece 3'te bir doktoru arayan, bir avukatla sık yazışan, bir habercinin kaynağı. \"Metadata'ya bakarak insanları öldürüyoruz\" sözü eski bir istihbarat yöneticisine aittir.",
    },
    {
      ad: "e2ee-gizler-mi",
      dy: false,
      soru: "Uçtan uca şifreleme, sunucudan kimin kiminle konuştuğunu da gizler.",
      aciklama: "Yanlış. Sunucu mesajı teslim etmek için alıcıyı bilmek zorundadır; zamanı ve boyu da görür. Bunları azaltmak için gizli gönderen, dolgu ve karışım ağları gibi ek önlemler gerekir.",
    },
  ]),
  ...sorular(U, "u14-sealed", [
    {
      ad: "ne-saklar",
      zorluk: 2,
      soru: "Gizli gönderen (sealed sender) sunucudan neyi saklar?",
      secenekler: ["Mesajı kimin gönderdiğini", "Mesajı kime teslim edeceğini", "Mesajın boyunu", "Mesajın gönderildiği zamanı"],
      aciklama: "Gönderenin kimliği şifreli zarfın içine konur; zarfı yalnız alıcı açar. Sunucu alıcıyı ve zamanı yine görür. IP adresi ve zaman ilişkilendirmesiyle gönderen kısmen tahmin edilebilir; gizleme tam değildir.",
    },
  ]),
  ...sorular(U, "u14-kesif", [
    {
      ad: "rehber",
      zorluk: 2,
      soru: "Uygulama, rehberindeki kişilerden hangilerinin kullanıcı olduğunu bulmak için ne yapar ki sunucu rehberini öğrenmesin?",
      secenekler: ["Eşleştirmeyi güvenli bir donanım bölgesinde yapar", "Rehberi sunucuya şifresiz olarak yükler", "Numaraların tuzsuz hash'ini gönderir", "Rehberi kullanmaz, herkese mesaj atar"],
      aciklama: "Telefon numarası uzayı küçüktür (yaklaşık $10^{10}$); hash'ler saniyeler içinde tersine çevrilir. Signal kişi keşfini, sunucu işletmecisinin bile göremediği bir güvenli bölgede (enclave) yapar.",
    },
    {
      ad: "hash-yetmez",
      etiket: "hata-bul",
      dy: true,
      soru: "Telefon numaralarının tuzsuz SHA-256 özetini sunucuya göndermek rehberi gizlemez, çünkü bütün olası numaralar kolayca denenebilir.",
      aciklama: "Doğru. 10 haneli bir numaranın en çok $10^{10}$ olasılığı vardır; tek bir GPU hepsini birkaç saniyede hash'ler (9. ünite). Hash yalnız büyük ve öngörülemez girdileri gizler.",
    },
  ]),
];
