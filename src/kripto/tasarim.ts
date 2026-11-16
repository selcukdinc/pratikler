// 19. ünitenin tasarım alıştırmaları: bir ürün tanımı, tehdit kartları ve mimari seçenekleri.
// Her mimarinin her tehdide karşı sonucu (korur / kısmen / korumaz) ve nedeni burada; ekran
// yalnız gösterir. Ürünler genel adlarla anlatılır. Saf veri; tasarim.test.ts tutarlılığını sınar.

export type Sonuc = "korur" | "kismen" | "korumaz";

export interface Tehdit {
  id: string;
  ad: string;
  // İsteğe bağlı bir tasarım kararı açıkken görünür (ör. ses kaydı)
  secenek?: string;
}

export interface Mimari {
  id: string;
  ad: string;
  ozet: string;
  sonuc: Record<string, [Sonuc, string]>;
}

export interface Karar {
  soru: string;
  secenekler: [string, string][];
}

export interface Alistirma {
  id: string;
  ad: string;
  tanim: string;
  tehditler: Tehdit[];
  mimariler: Mimari[];
  // İsteğe bağlı özellikler (açılınca yeni tehdit kartı görünür)
  secenekler?: { id: string; ad: string; not: string }[];
  // Cevabı ürün sahibinin vereceği tasarım kararları ve mimariye etkileri
  kararlar: Karar[];
  ders: string;
}

const GERI_BILDIRIM: Alistirma = {
  id: "geri-bildirim",
  ad: "Anonim geri bildirim platformu",
  tanim:
    "Bir programdaki herkes birbiri hakkında eleştiri yazabiliyor. Eleştiri herkese açık değil, yalnız program yürütücülerine gidiyor. Yazar, platformu yazan ve işleten yazılımcılardan (veritabanı, sunucu, kayıtlar) anonim kalmalı. Hakaret ya da tehdit gibi kötüye kullanımda yazarın kimliğine yalnız ilgili yürütücüler ulaşabilmeli.",
  tehditler: [
    { id: "icerik", ad: "Veritabanını okuyan yazılımcı eleştiriyi okur" },
    { id: "yazar", ad: "Yazılımcı eleştiriyi kimin yazdığını öğrenir" },
    { id: "keyfi", ad: "Tek bir yürütücü yazarın kimliğini keyfî açar" },
    { id: "hesap", ad: "Kötüye kullanımda yazar bulunamaz" },
    { id: "kayit", ad: "Sunucu kayıtları (IP, oturum, saat) yazarı ele verir" },
    { id: "istemci", ad: "Yazılımcı istemciyi değiştirip anonimliği kaldırır" },
  ],
  mimariler: [
    {
      id: "soz",
      ad: "Düz sunucu ve \"bakmayız\" sözü",
      ozet: "Eleştiri ve yazarın hesabı veritabanında açık durur; yürütücü paneli kimliği göstermez.",
      sonuc: {
        icerik: ["korumaz", "Eleştiri veritabanında açık metin; sözü tutmak tek güvence."],
        yazar: ["korumaz", "Yazarın hesabı eleştirinin yanında duruyor; bir sorgu yeter."],
        keyfi: ["kismen", "Yürütücü panelde göremez, ama yazılımcıdan isteyebilir; kural teknik değil."],
        hesap: ["korur", "Kimlik veritabanında; kötüye kullanımda bulunur."],
        kayit: ["korumaz", "Oturum ve IP kayıtları da açık."],
        istemci: ["korumaz", "Zaten gerek yok: sunucu her şeyi görüyor."],
      },
    },
    {
      id: "zarf",
      ad: "Yürütücülerin anahtarına şifreli zarf",
      ozet: "İstemci eleştiriyi ve yazarın kimliğini yürütücülerin açık anahtarlarıyla şifreler (15. ünitedeki zarf). Sunucu yalnız şifreli zarf saklar.",
      sonuc: {
        icerik: ["korur", "Veritabanında yalnız şifreli bayt var; anahtarlar yürütücülerin cihazında."],
        yazar: ["kismen", "Kimlik zarfın içinde şifreli, ama eleştiri giriş yapmış bir oturumdan geliyorsa sunucu kimin gönderdiğini oturumdan bilir."],
        keyfi: ["korumaz", "Anahtarı olan her yürütücü kimlik zarfını tek başına açabilir."],
        hesap: ["korur", "Yürütücü zarfı açınca kimlik çıkar."],
        kayit: ["korumaz", "Oturum ve IP kayıtları şifrelemeden etkilenmez."],
        istemci: ["korumaz", "Şifrelemeyi istemci yapıyor; değiştirilmiş istemci şifrelemeden önce kopyalar."],
      },
    },
    {
      id: "esik",
      ad: "Eşikli kimlik zarfı",
      ozet: "Eleştiri yürütücülere şifreli. Kimlik zarfı ise eşik şifrelemeyle kilitli: örneğin beş yürütücüden üçü birlikte onaylamadan açılmaz (16. ünitedeki gizli paylaşım).",
      sonuc: {
        icerik: ["korur", "Veritabanında yalnız şifreli bayt var."],
        yazar: ["kismen", "Zarf korunuyor, ama oturumla gönderim yine yazarı sunucuya gösterir."],
        keyfi: ["korur", "Tek yürütücünün payı kimliği açmaya yetmez; açmak bir kurul kararıdır."],
        hesap: ["korur", "Yeterli sayıda yürütücü onaylarsa kimlik açılır."],
        kayit: ["korumaz", "Ağ ve oturum kayıtları ayrı bir sorun."],
        istemci: ["korumaz", "İstemciye güven yine şart."],
      },
    },
    {
      id: "anonim-uyelik",
      ad: "Anonim üyelik belgesi ve eşikli zarf",
      ozet: "Programa katılan kişi kör imzalı bir üyelik belgesi alır; eleştiriyi hesapsız gönderir, sunucu yalnız \"geçerli bir üye\" olduğunu doğrular. Kimlik, eşikle açılabilen bir zarfta belgeye bağlıdır (grup imzalarının yaptığı iş).",
      sonuc: {
        icerik: ["korur", "Veritabanında yalnız şifreli bayt var."],
        yazar: ["korur", "Gönderim hesapsız; sunucu yalnız belgenin geçerliliğini görür, kime verildiğini bilemez."],
        keyfi: ["korur", "Kimlik zarfı yalnız yürütücü kurulunun eşiğiyle açılır."],
        hesap: ["korur", "Kötüye kullanımda kurul zarfı açar."],
        kayit: ["kismen", "Hesap yok, ama IP ve gönderim saati kalır: kayıt tutmama politikası, gecikmeli toplu gönderim ve gerekirse Tor gibi ağlar gerekir."],
        istemci: ["kismen", "Açık kaynak istemci, tekrarlanabilir derleme ve imzalı sürümler riski azaltır; tamamen kaldırmaz."],
      },
    },
  ],
  kararlar: [
    { soru: "Yürütücü değişince ne olur?", secenekler: [["Zarflar yeni anahtarlarla yeniden şifrelenir", "Eski yürütücünün payı geçersizleşir; yeniden şifreleme için yeterli sayıda yürütücünün çevrimiçi olması gerekir."], ["Eski zarflar eski kurulda kalır", "Basit, ama ayrılan yürütücü eski kimliklere ulaşmaya devam edebilir."]] },
    { soru: "Küçük bir ekipte anonimlik nereye kadar?", secenekler: [["Eşik sayısı kadar katılım olmadan eleştiri iletilmez", "Örneğin aynı kişi hakkında en az üç eleştiri birikince toplu iletilir; yazım üslubu ve zamanlama çıkarımı zorlaşır."], ["Her eleştiri hemen iletilir", "Hızlı, ama beş kişilik ekipte \"bunu kim yazmış olabilir\" tahmini kolaylaşır."]] },
  ],
  ders: "İçerik gizliliği ile yazar anonimliği ayrı sorunlardır. Şifreleme içeriği korur; yazarın kim olduğunu ise oturum, IP ve zaman da söyler. Burada ikisi de platformu işletenlere karşı isteniyor, bu yüzden tek bir şifreleme adımı yetmez.",
};

const PAYLASIM: Alistirma = {
  id: "paylasim",
  ad: "Kişisel paylaşım uygulaması",
  tanim:
    "Dokuz ay kullanılacak, kişinin her gün kısa bir kayıt bıraktığı, fotoğraf ve yazı paylaşabildiği küçük bir sosyal uygulama. Paylaşımı kimin göreceği, sunucuda analiz yapılıp yapılmayacağı ve dokuz ayın sonunda verinin ne olacağı henüz kararlaştırılmadı. Ses kaydı eklemek de düşünülüyor.",
  tehditler: [
    { id: "sizinti", ad: "Veritabanı ya da yedek diski sızar" },
    { id: "yonetici", ad: "Sunucu yöneticisi paylaşımları okur" },
    { id: "exif", ad: "Fotoğraftaki konum bilgisi evini ele verir" },
    { id: "kayip", ad: "Telefon kaybolunca kayıtlar da kaybolur" },
    { id: "son", ad: "Dokuz ay sonunda veri sunucuda kalır" },
    { id: "zaman", ad: "Her gün aynı saatte paylaşım alışkanlığı ele verir" },
    { id: "ses", ad: "Ses kaydı biyometrik veri olarak işlenir", secenek: "ses" },
  ],
  secenekler: [{ id: "ses", ad: "Ses kaydı eklensin", not: "Ses kişinin sesini tanıtan biyometrik bir veridir; sunucuda yazıya dökme ya da analiz, uçtan uca şifrelemeyle çelişir." }],
  mimariler: [
    {
      id: "duz",
      ad: "Düz saklama ve TLS",
      ozet: "Bağlantı TLS ile şifreli; fotoğraf ve yazılar sunucuda açık saklanır.",
      sonuc: {
        sizinti: ["korumaz", "Sızan disk doğrudan okunur."],
        yonetici: ["korumaz", "TLS sunucuda biter; yönetici her şeyi görür."],
        exif: ["korumaz", "Fotoğraf olduğu gibi saklanıp paylaşılıyor."],
        kayip: ["korur", "Her şey sunucuda; yeni telefonla giriş yetiyor."],
        son: ["korumaz", "Silme bir söze ve yedeklerin de silinmesine bağlı."],
        zaman: ["korumaz", "Sunucu her paylaşımın saatini görür."],
        ses: ["korumaz", "Ses kayıtları sunucuda açık; analiz ya da sızıntı kolay."],
      },
    },
    {
      id: "sunucu-sifre",
      ad: "Sunucu tarafı şifreleme",
      ozet: "Veriler diskte şifreli, ama anahtar da sunucuda (ya da sunucunun anahtar hizmetinde).",
      sonuc: {
        sizinti: ["korur", "Çalınan disk ya da yedek anahtarsız işe yaramaz; anahtar ayrı bir hizmette olmalı."],
        yonetici: ["korumaz", "Sunucu anahtarı kullanıp her kaydı çözebilir."],
        exif: ["korumaz", "Şifreleme meta veriyi silmez; alıcılar konumu görür."],
        kayip: ["korur", "Anahtar sunucuda; giriş yeterli."],
        son: ["kismen", "Anahtar silinirse eski yedekler de okunamaz (kripto-silme), ama anahtarın kopyası kalmadığından emin olmak gerekir."],
        zaman: ["korumaz", "Paylaşım saatleri açık."],
        ses: ["korumaz", "Sunucu çözüp işleyebiliyor; sızıntıya karşı korur, işletene karşı korumaz."],
      },
    },
    {
      id: "grup",
      ad: "Paylaşım çevresine grup anahtarı",
      ozet: "Fotoğraf ve yazılar istemcide, kişinin paylaşım çevresinin grup anahtarıyla şifrelenir (14. ünite). Sunucu yalnız şifreli bayt saklar.",
      sonuc: {
        sizinti: ["korur", "Sunucuda anahtar yok."],
        yonetici: ["korur", "Yönetici yalnız şifreli bayt görür (istemciye güvendiğin sürece)."],
        exif: ["korumaz", "Şifreleme yolu korur; çevredekiler fotoğrafı açınca konumu da görür."],
        kayip: ["korumaz", "Anahtarlar yalnız telefondaydı; telefon gidince kayıtlar okunamaz."],
        son: ["kismen", "Grup anahtarları silinince sunucudaki veri okunamaz; ama kişiye dışa aktarma yolu yok."],
        zaman: ["korumaz", "Sunucu yükleme saatlerini yine görür."],
        ses: ["kismen", "Ses şifreli kalır, ama sunucuda yazıya dökme ve arama yapılamaz; bu bir ürün kararıdır."],
      },
    },
    {
      id: "grup-tam",
      ad: "Grup anahtarı, meta veri temizliği ve kripto-silme",
      ozet: "Grup anahtarına ek olarak: fotoğraflar yüklenmeden önce EXIF temizlenir, anahtarlar parolalı bir yedekle kurtarılabilir, dokuz ayın sonunda kişiye şifreli dışa aktarma verilip anahtarlar silinir.",
      sonuc: {
        sizinti: ["korur", "Sunucuda anahtar yok."],
        yonetici: ["korur", "Yönetici yalnız şifreli bayt görür."],
        exif: ["korur", "Konum ve cihaz bilgisi telefonda silinir, sunucuya hiç gitmez."],
        kayip: ["korur", "Parolalı anahtar yedeği (15. ünite) yeni telefonda açılır; parola zayıfsa çevrimdışı denenebilir."],
        son: ["korur", "Anahtarlar silinince bütün kayıtlar (yedekler dahil) okunamaz; kişi kendi kopyasını alır."],
        zaman: ["korumaz", "Sunucu paylaşım saatlerini görmeye devam eder; rastgele gecikmeli yükleme bunu ancak azaltır."],
        ses: ["kismen", "Ses cihazda yazıya dökülebilir; sunucu analiz yapamaz. Biyometrik veri için açık rıza yine gerekir."],
      },
    },
  ],
  kararlar: [
    { soru: "Paylaşımı kim görür?", secenekler: [["Yalnız kişi", "Tek kişilik kasa (15. ünite) yeter; grup anahtarı gerekmez."], ["Seçtiği arkadaş grubu", "Grup anahtarı ve üye çıkınca anahtar yenileme gerekir (14. ünite)."], ["Bütün kullanıcılar", "Uçtan uca şifrelemenin anlamı kalmaz; korunacak şey hesap ve meta veridir."]] },
    { soru: "Sunucuda analiz yapılacak mı?", secenekler: [["Hayır", "Uçtan uca şifreleme mümkün."], ["Evet, toplu istatistik", "Sunucu içeriği görmeli; ya şifrelemeden vazgeçilir ya da istatistik cihazda hesaplanıp yalnız sonuç gönderilir."]] },
    { soru: "Dokuz ay sonunda ne olur?", secenekler: [["Kripto-silme", "Anahtarlar silinir, şifreli veri çöp olur; yedekleri tek tek aramak gerekmez."], ["Kişiye şifreli dışa aktarma", "Kişi kendi kayıtlarını bir parolayla şifreli dosya olarak alır, sonra sunucu tarafı silinir."], ["Uygulama sürer", "Saklama süresi ve rıza yeniden yazılmalı."]] },
  ],
  ders: "\"Kimin göreceği\" sorusu cevaplanmadan mimari seçilemez. Uçtan uca şifreleme sızıntıya ve işletene karşı korur, ama kurtarmayı zorlaştırır, sunucuda analizi kapatır ve meta veriye dokunmaz.",
};

export const ALISTIRMALAR: Alistirma[] = [GERI_BILDIRIM, PAYLASIM];

export const SONUC_ADI: Record<Sonuc, string> = { korur: "Korur", kismen: "Kısmen", korumaz: "Korumaz" };

// Seçili tehditlerin hepsini "korur" ile karşılayan mimariler
export function karsilayanlar(a: Alistirma, tehditler: string[]): string[] {
  return a.mimariler.filter((m) => tehditler.every((t) => m.sonuc[t]?.[0] === "korur")).map((m) => m.id);
}
