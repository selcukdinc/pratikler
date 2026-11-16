// 7. ünite (Simetrik dünya): hash fonksiyonlarının özellikleri, direnç türleri, doğum günü
// paradoksu, çığ etkisi, SHA-256'nın iç yapısı (dolgu, mesaj takvimi, 64 tur,
// Merkle-Damgård), kırılan hash'ler ve SHA-3, dosya bütünlüğü ve Merkle ağaçları.
// Dolgu ve blok sayısı soruları sorular.test.ts'te oyuncak SHA-256'yla sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 7;

export const unite7: Soru[] = [
  ...sorular(U, "u7-ozellikler", [
    {
      ad: "tanim",
      soru: "Kriptografik hash fonksiyonu için aşağıdakilerden hangisi doğrudur?",
      secenekler: [
        "Her uzunluktaki girdiden sabit uzunlukta bir özet üretir ve anahtar kullanmaz",
        "Girdiyi bir anahtarla şifreler; aynı anahtarla özet geri çözülür",
        "Çıktısı girdiyle aynı uzunluktadır ve girdinin sıkıştırılmış halidir",
        "Aynı girdiye her çağrıda farklı ama aynı uzunlukta bir çıktı verir",
      ],
      aciklama: "Hash fonksiyonu deterministiktir (aynı girdi, aynı özet), çıktısı sabit uzunluktadır (SHA-256'da 256 bit) ve anahtar almaz. Geri çözülmez; sıkıştırma da değildir, çünkü özetten girdi elde edilemez.",
    },
    {
      ad: "uzunluk",
      sayi: [64],
      soru: "SHA-256 özeti onaltılık (hex) yazıldığında kaç karakter olur?",
      aciklama: "256 bit = 32 bayt; her bayt 2 hex rakamıyla yazılır: **64** karakter. 1 baytlık bir dosyanın da 4 GB'lık bir dosyanın da SHA-256 özeti 64 hex karakterdir.",
    },
    {
      ad: "geri-donmez",
      dy: false,
      soru: "SHA-256 özetini bilen biri, yeterince güçlü bir bilgisayarla özetten girdiyi \"çözebilir\"; tıpkı anahtarı bilinen bir şifre gibi.",
      aciklama: "Yanlış. Hash bir şifre değildir; çözülecek bir anahtar yoktur. Sonsuz sayıda girdi aynı 256 bitlik özete eşlenir, bilgi kaybolur. Saldırgan yalnız **tahmin edip deneyebilir**: olası girdileri hash'leyip özetle karşılaştırır. Parolaların neden yavaş hash'le saklandığı (9. ünite) buradan gelir.",
    },
    {
      ad: "sifreleme-degil",
      etiket: "hata-bul",
      soru: "Bir geliştirici \"Kredi kartı numaralarını SHA-256 ile şifreleyip saklıyoruz, gerekince çözeriz\" diyor. Sorun nedir?",
      secenekler: [
        "Hash geri çözülmez; üstelik 16 haneli kart numarası kolay denenir, özetten numara bulunabilir",
        "SHA-256 kart numaraları için çok kısa bir özet üretir",
        "SHA-256 yalnız metin girdiler için tanımlıdır, sayılar için kullanılamaz",
        "Kart numaraları hash'lenince bankalar işlemi reddeder",
      ],
      aciklama: "İki hata var. Hash **şifreleme değildir**; \"gerekince çözmek\" mümkün değildir. Ayrıca kart numarası uzayı küçüktür (ilk haneler bankayı, son hane denetimi verir): saldırgan bütün olası numaraları hash'leyip eşleştirebilir. Geri alınması gereken veri şifrelenir (AES-GCM), hash'lenmez.",
    },
  ]),
  ...sorular(U, "u7-direnc", [
    {
      ad: "on-goruntu",
      soru: "Ön görüntü direnci (preimage resistance) neyi ifade eder?",
      secenekler: [
        "Verilen bir $h$ özeti için $H(x) = h$ olan herhangi bir $x$ bulmak zordur",
        "Aynı özeti veren herhangi iki farklı girdi bulmak zordur",
        "Verilen bir $x$ için aynı özeti veren başka bir $x'$ bulmak zordur",
        "Özetin uzunluğu girdinin uzunluğunu ele vermez",
      ],
      aciklama: "Üç direnç vardır: **ön görüntü** (özetten girdiye), **ikinci ön görüntü** (verilen girdiyle aynı özeti veren başka girdi) ve **çakışma** (aynı özeti veren herhangi bir çift). $n$ bitlik iyi bir hash'te ilk ikisi yaklaşık $2^n$, çakışma ise $2^{n/2}$ iş gerektirir.",
    },
    {
      ad: "cakisma-var",
      dy: true,
      soru: "SHA-256'da çakışmalar (aynı özeti veren iki farklı girdi) mutlaka vardır; güvenlik onların bulunamamasına dayanır.",
      aciklama: "Doğru. Sonsuz sayıda girdi $2^{256}$ olası özete eşlenir; güvercin yuvası ilkesine göre çakışma kaçınılmazdır. Ama bilinen en iyi yol yaklaşık $2^{128}$ deneme ister ve bugüne kadar tek bir SHA-256 çakışması bulunmadı.",
    },
    {
      ad: "ikinci",
      zorluk: 2,
      soru: "Bir yazılım şirketi kurulum dosyasının SHA-256 özetini yayımlıyor. Saldırgan, aynı özeti veren kötü amaçlı bir dosya üretmek istiyor. Hangi direnci aşması gerekir?",
      secenekler: ["İkinci ön görüntü direncini", "Çakışma direncini", "Yalnız çığ etkisini", "Hiçbirini; özet herkese açık olduğu için yeterli"],
      aciklama: "Orijinal dosya sabittir; saldırgan **ona** eşit özet veren başka bir dosya arar: ikinci ön görüntü, yaklaşık $2^{256}$ iş. Çakışma saldırısında ise saldırgan iki dosyayı da kendisi seçer; bu daha kolaydır ($2^{128}$) ve sertifika sahteciliği gibi senaryolarda tehlikelidir.",
    },
  ]),
  ...sorular(U, "u7-dogum-gunu", [
    {
      ad: "23",
      sayi: [23],
      soru: "Bir sınıfta en az kaç kişi olursa ikisinin aynı doğum gününü paylaşma olasılığı %50'yi geçer (365 gün, eşit olasılık)?",
      aciklama: "Hepsinin farklı olma olasılığı $\\frac{365}{365} \\cdot \\frac{364}{365} \\cdots$. 23 kişide bu çarpım 0,493'e düşer; en az bir eşleşme olasılığı **%50,7** olur. Sezgiyi şaşırtan nokta: eşleşme herhangi iki kişi arasında olabilir ve 23 kişide 253 çift vardır.",
    },
    {
      ad: "sha256-cakisma",
      soru: "256 bitlik bir hash'te çakışma bulmak için kabaca kaç deneme gerekir?",
      secenekler: ["$2^{128}$", "$2^{256}$", "$2^{64}$", "$256^2$"],
      aciklama: "Doğum günü sınırı: $n$ bitlik çıktıda yaklaşık $\\sqrt{2^n} = 2^{n/2}$ rastgele girdiden sonra iki özetin eşleşmesi beklenir. 256 bit için $2^{128}$. Bu yüzden 128 bitlik güvenlik isteyen bir sistem 256 bitlik hash kullanır.",
    },
    {
      ad: "kisa-hash",
      zorluk: 2,
      soru: "SHA-256 çıktısının yalnız ilk 32 biti kullanılıyor. Rastgele girdilerle çakışma yaklaşık kaç denemede beklenir?",
      secenekler: ["Yaklaşık 77 bin", "Yaklaşık 4,3 milyar ($2^{32}$)", "Yaklaşık 32", "Yaklaşık 1 milyon ($2^{20}$)"],
      aciklama: "$2^{32/2} = 2^{16} = 65.536$; daha kesin hesapla %50 olasılık için $\\approx 1{,}18 \\cdot 2^{16} \\approx 77$ bin deneme. Bir dizüstü bilgisayar bunu bir saniyeden kısa sürede yapar. Çakışma avı deneyinde 16-24 bit için canlı görebilirsin.",
    },
    {
      ad: "md5-bit",
      zorluk: 2,
      sayi: [64],
      soru: "MD5'in çıktısı 128 bittir. Yapısal açıkları hiç olmasaydı bile doğum günü saldırısının iş yükü $2^k$ olurdu. $k$ kaçtır?",
      aciklama: "$128 / 2 =$ **64**. $2^{64}$ bugün büyük bir bütçeyle ulaşılabilir bir sınırdır; MD5 ise yapısal açıkları yüzünden çok daha kolay, saniyeler içinde çakıştırılır.",
    },
  ]),
  ...sorular(U, "u7-cig", [
    {
      ad: "cig-yarisi",
      soru: "SHA-256'ya verilen metnin tek bir harfi değiştirilirse 256 çıktı bitinden ortalama kaçı değişir?",
      secenekler: ["Yaklaşık 128", "Yaklaşık 1", "Yaklaşık 8", "256'nın hepsi"],
      aciklama: "Çığ etkisi: her çıktı biti bağımsızca yarı olasılıkla değişir, ortalama 128 bit. Çığ etkisi deneyinde 100 denemenin histogramı 128 civarında toplanır.",
    },
    {
      ad: "benzer-girdi",
      dy: false,
      soru: "\"merhaba\" ve \"Merhaba\" kelimelerinin SHA-256 özetleri birbirine benzer, çünkü girdiler yalnız bir harfte farklıdır.",
      aciklama: "Yanlış. İyi bir hash'te benzer girdiler benzer özet vermez; iki özet bağımsız rastgele değerler gibi görünür. Özetlerin benzerliğinden girdilerin benzerliği çıkarılamaz.",
    },
  ]),
  ...sorular(U, "u7-sha256", [
    {
      ad: "blok",
      sayi: [512],
      soru: "SHA-256 mesajı kaç bitlik bloklar halinde işler?",
      aciklama: "SHA-256 mesajı **512 bitlik** (64 baytlık) bloklara böler. Her blok, 256 bitlik ara durumu (sekiz 32 bitlik kelime) 64 turda günceller.",
    },
    {
      ad: "tur",
      sayi: [64],
      soru: "SHA-256'nın sıkıştırma fonksiyonu her blokta kaç tur uygular?",
      aciklama: "**64** tur. Her turda mesaj takviminden bir kelime ($W_t$) ve bir sabit ($K_t$) karışır. Sabitler ilk 64 asalın küp köklerinin kesirli kısımlarıdır; böylece tasarımcının gizli bir arka kapı saklamadığı gösterilir.",
    },
    {
      ad: "dolgu-56",
      zorluk: 2,
      sayi: [2],
      soru: "56 baytlık bir mesaj SHA-256 ile hash'lenirken dolgudan sonra kaç blok işlenir?",
      aciklama: "Dolgu en az 9 bayttır: bir 0x80 baytı ve 8 baytlık uzunluk alanı. 56 + 9 = 65 bayt, tek bloğa (64) sığmaz.\n---\nBu yüzden ikinci blok eklenir: toplam 128 bayt, **2** blok. 55 baytlık bir mesaj ise tek bloğa sığar.",
    },
    {
      ad: "dolgu-120",
      zorluk: 2,
      sayi: [3],
      soru: "120 baytlık bir mesaj SHA-256 ile hash'lenirken dolgudan sonra kaç blok işlenir?",
      aciklama: "$120 + 9 = 129$ bayt en az gerekir; 64'ün 128'den büyük ilk katı 192'dir: **3** blok.",
    },
    {
      ad: "merkle-damgard",
      soru: "Merkle-Damgård yapısında uzun bir mesaj nasıl hash'lenir?",
      secenekler: [
        "Bloklar sırayla bir ara duruma katılır; son durum özettir",
        "Mesajın bütün blokları ayrı ayrı hash'lenir ve özetler toplanır",
        "Mesaj bir anahtarla şifrelenir ve son şifreli blok özet olarak alınır",
        "Mesaj iki yarıya bölünür, yarılar yer değiştirilip XOR'lanır",
      ],
      aciklama: "$H_0 = IV$, $H_i = f(H_{i-1}, M_i)$, özet $= H_n$. MD5, SHA-1 ve SHA-256 bu yapıdadır. Yan etkisi: özet, son ara durumun **kendisidir**. Bu yüzden özeti bilen, kaldığı yerden yeni bloklar ekleyebilir (length extension, 8. ünite).",
    },
    {
      ad: "takvim",
      zorluk: 2,
      soru: "SHA-256'da mesaj takvimi (message schedule) ne yapar?",
      secenekler: [
        "Bloğun 16 kelimesini, kaydırma ve XOR'larla 64 kelimeye genişletir; her tur bir kelime kullanır",
        "Mesajı zaman damgasıyla birleştirip her blokta farklı bir saat değeri ekler",
        "Blokların hangi sırayla işleneceğini rastgele belirler",
        "Ara durumu her turdan sonra sıfırlayarak çakışmayı önler",
      ],
      aciklama: "İlk 16 kelime doğrudan bloktan gelir; $W_t = \\sigma_1(W_{t-2}) + W_{t-7} + \\sigma_0(W_{t-15}) + W_{t-16}$ ile 64'e tamamlanır. Böylece mesajın her biti birçok turda tekrar karışır. Adım gezgininde $W$ tablosunu görebilirsin.",
    },
  ]),
  ...sorular(U, "u7-sha3", [
    {
      ad: "md5",
      soru: "MD5 bugün neden güvenlik amacıyla kullanılmamalıdır?",
      secenekler: [
        "Saniyeler içinde çakışma üretilebiliyor",
        "Çıktısı 32 bit olduğu için kaba kuvvetle anında tersine çevrilir",
        "Yalnızca İngilizce metinleri hash'leyebilir",
        "Patentli olduğu için ücretsiz kullanılamaz",
      ],
      aciklama: "2004'te Xiaoyun Wang ve ekibi MD5 çakışmalarını gösterdi; bugün sıradan bir bilgisayar saniyeler içinde çakışma üretir. 2012'de Flame casus yazılımı MD5 çakışmasıyla sahte bir Microsoft kod imzalama sertifikası üretti. Hata denetimi gibi güvenlik dışı işler için hâlâ görülür.",
    },
    {
      ad: "sha1",
      dy: true,
      soru: "2017'de aynı SHA-1 özetine sahip iki farklı PDF dosyası yayımlandı.",
      aciklama: "Doğru. Google ve CWI Amsterdam'ın **SHAttered** çalışması yaklaşık $2^{63}$ SHA-1 hesabıyla ilk gerçek çakışmayı üretti. Tarayıcılar SHA-1 sertifikalarını bıraktı; Git, çakışma tespiti eklenmiş bir SHA-1 kullanıyor ve SHA-256'ya geçiş için destek ekledi.",
    },
    {
      ad: "sunger",
      zorluk: 2,
      soru: "SHA-3 (Keccak) yapı bakımından SHA-2 ailesinden nasıl ayrılır?",
      secenekler: [
        "Sünger yapısı kullanır ve length extension'a dayanıklıdır",
        "Merkle-Damgård yapısının aynısını daha fazla turla kullanır",
        "Anahtar alan bir yapıdır; anahtarsız hash hesaplayamaz",
        "Çıktısı sabit 128 bittir ve daha hızlıdır",
      ],
      aciklama: "SHA-3 (FIPS 202, 2015) 1600 bitlik bir iç durumu \"emer\" ve \"sıkar\". Durumun **kapasite** kısmı çıktıya hiç yansımaz; özet tüm iç durumu vermediği için length extension yapılamaz. SHA-3, SHA-2 kırıldığı için değil, farklı yapıda bir yedek olsun diye seçildi.",
    },
  ]),
  ...sorular(U, "u7-kullanim", [
    {
      ad: "indirme",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir site, indirme bağlantısının hemen yanında dosyanın SHA-256 özetini aynı sunucudan yayımlıyor. Kullanıcı özeti denetleyip \"dosya güvenilir\" diyor. Hangi tehdide karşı korunmamıştır?",
      secenekler: [
        "Sunucu ele geçirilip dosya ve özet birlikte değiştirilirse",
        "İndirme sırasında ağdaki rastgele bit hatalarına",
        "Dosyanın diskte zamanla bozulmasına",
        "Yanlış dosyanın yanlışlıkla indirilmesine",
      ],
      aciklama: "Özet yalnız **ayrı ve güvenilir** bir kanaldan gelirse saldırgana karşı korur. Aynı sunucudaki özet kazara bozulmayı yakalar, ama sunucuyu ele geçiren saldırgan ikisini birlikte değiştirir. Çözüm imzadır: dosya, açık anahtarı önceden bilinen bir anahtarla imzalanır (11. ünite).",
    },
    {
      ad: "merkle-kanit",
      zorluk: 2,
      sayi: [10],
      soru: "1024 yapraklı bir Merkle ağacında bir yaprağın ağaçta olduğunu kanıtlamak için kökün yanında kaç tane kardeş hash gerekir?",
      aciklama: "Yapraktan köke her seviyede bir kardeş hash gerekir; ağacın yüksekliği $\\log_2 1024 =$ **10**. Bir milyon yaprakta bile yalnız 20 hash yeter. Certificate Transparency kayıtları ve Git'in nesne ağacı bu fikri kullanır.",
    },
    {
      ad: "git-kimlik",
      soru: "Git'te bir commit'in kimliği (ör. ~a1b2c3d~) nedir?",
      secenekler: [
        "Commit'in içeriğinin, ağacının ve ebeveyn commit'lerinin hash'i",
        "Sunucunun her commit'e sırayla verdiği rastgele numara",
        "Commit'i yapan kişinin e-posta adresinin şifrelenmiş hali",
        "Commit tarihinin onaltılık gösterimi",
      ],
      aciklama: "Commit kimliği, içeriğin (ağaç, ebeveynler, yazar, mesaj) hash'idir. Geçmişte tek bir bayt değişirse o commit'in ve ondan sonraki her commit'in kimliği değişir. Git ve GitHub pratiğinde bunu sanal depoda görebilirsin.",
    },
  ]),
];
