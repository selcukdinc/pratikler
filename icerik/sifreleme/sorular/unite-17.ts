// 17. ünite (Saldırılar ve uygulama hataları): nonce tekrarı, padding oracle, zayıf
// rastgelelik, zamanlama, güç analizi, EM ve hata enjeksiyonu, karşı önlemler.
// Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 17;

export const unite17: Soru[] = [
  ...sorular(U, "u17-nonce", [
    {
      ad: "xor",
      soru: "AES-CTR'de iki mesaj aynı anahtar ve aynı nonce ile şifrelenirse $C_1 \\oplus C_2$ neye eşit olur?",
      secenekler: ["$M_1 \\oplus M_2$", "Anahtarın kendisine", "Sıfıra", "Rastgele bir değere"],
      aciklama: "İkisi de aynı anahtar akışıyla XOR'lanır: $C_1 \\oplus C_2 = (M_1 \\oplus S) \\oplus (M_2 \\oplus S) = M_1 \\oplus M_2$. Anahtar akışı düşer; geriye iki açık metnin XOR'u kalır ve tahmin edilen kelimelerle çözülür.",
    },
    {
      ad: "gcm",
      zorluk: 2,
      soru: "AES-GCM'de aynı anahtar ve nonce iki kez kullanılırsa gizliliğin yanı sıra ne kaybedilir?",
      secenekler: ["Kimlik doğrulama: saldırgan etiket sahteler", "Yalnız mesajların uzunluğu açığa çıkar", "Hiçbir şey, GCM tekrarı kendisi engeller", "Yalnız ilk bloğun gizliliği"],
      aciklama: "GCM'in kimlik doğrulama anahtarı $H$ aynı kaldığı için, aynı nonce'lu iki etiketten $H$ hesaplanabilir; saldırgan bundan sonra istediği şifreli metne geçerli etiket yazar. Nonce tekrarı GCM'de felakettir; tekrar riskine karşı AES-GCM-SIV gibi modlar geliştirildi.",
    },
    {
      ad: "ecdsa",
      dy: true,
      soru: "ECDSA'da iki farklı mesaj aynı nonce ile imzalanırsa, iki imzadan özel anahtar hesaplanabilir.",
      aciklama: "Doğru (11. ünite). 2010'da bir oyun konsolunun imza anahtarı tam da böyle çıkarıldı: her imzada aynı \"rastgele\" sayı kullanılıyordu. Ed25519 nonce'u mesajdan ve özel anahtardan türeterek bu hatayı imkânsız kılar.",
    },
    {
      ad: "sayac",
      etiket: "hata-bul",
      soru: "Bir uygulama her açılışta nonce sayacını sıfırdan başlatıyor ve aynı AES-GCM anahtarını yıllarca kullanıyor. Sorun nedir?",
      secenekler: ["Her yeniden başlatmada aynı nonce'lar tekrar kullanılır", "Sayaç çok hızlı büyüyüp taşar", "Nonce'lar tahmin edilebilir olduğu için gizlilik biter", "AES-GCM sayaçlı nonce kabul etmez"],
      aciklama: "Nonce'un gizli ya da rastgele olması gerekmez, ama aynı anahtarla **tekrar etmemesi** gerekir. Sayaç kalıcı olarak saklanmalı ya da her oturuma yeni bir anahtar türetilmelidir.",
    },
  ]),
  ...sorular(U, "u17-padding", [
    {
      ad: "ne-soyler",
      soru: "Padding oracle saldırısında sunucu saldırgana hangi bilgiyi sızdırır?",
      secenekler: ["Çözülen metnin dolgusu geçerli mi", "Şifreleme anahtarının ilk baytını", "Açık metnin tamamını", "Kullanılan IV'nin değerini"],
      aciklama: "Yalnız bir bit: \"dolgu doğru\" ya da \"dolgu hatalı\". Bu bit farklı bir hata mesajı, farklı bir HTTP kodu ya da yalnız yanıt süresindeki bir fark olabilir. Saldırgan önceki bloğu değiştirerek her soruda bir baytı biraz daha daraltır.",
    },
    {
      ad: "sorgu",
      sayi: [4096],
      soru: "Padding oracle saldırısında her bayt en çok 256 sorguyla bulunur. 16 baytlık bir blok en kötü durumda kaç sorguyla çözülür?",
      aciklama: "$16 \\times 256 =$ **4096**. Ortalamada yarısı yeter: yaklaşık 2000 sorgu. Anahtarı kaba kuvvetle bulmak $2^{128}$ deneme isterdi.",
    },
    {
      ad: "cozum",
      soru: "Padding oracle saldırısını kökten önleyen tasarım hangisidir?",
      secenekler: ["Önce MAC'i doğrulayan bir AEAD kullanmak", "Dolgu hatasında daha kibar bir mesaj göstermek", "Dolgu yerine boşluk karakteri eklemek", "Şifreli metni Base64 ile kodlamak"],
      aciklama: "AES-GCM ya da \"önce şifrele, sonra MAC\" yapısında değiştirilmiş şifreli metin, çözülmeden önce reddedilir; dolgu hiç denetlenmez. Hata mesajlarını eşitlemek tek başına yetmez, çünkü süre farkı da kâhin olabilir.",
    },
    {
      ad: "tarih",
      dy: true,
      soru: "TLS'in eski sürümlerinde CBC dolgusundaki hatalar yıllarca POODLE ve Lucky Thirteen gibi saldırılara yol açtı; TLS 1.3 bu yüzden CBC'yi tamamen kaldırdı.",
      aciklama: "Doğru. Lucky Thirteen (2013) yalnız MAC hesaplamasının süre farkını kullandı. TLS 1.3'te yalnız AEAD şifreler (AES-GCM, ChaCha20-Poly1305) kaldı.",
    },
  ]),
  ...sorular(U, "u17-rastgele", [
    {
      ad: "debian",
      soru: "2008'de bir Linux dağıtımının OpenSSL paketindeki bir değişiklik, rastgele üreticinin tohumunu yalnız süreç numarasına indirdi. Sonuç ne oldu?",
      secenekler: ["Üretilen SSH anahtarları birkaç on bin olasılığa düştü", "Bütün anahtarlar tek bir değerde birleşti", "Anahtar üretimi yavaşladı ama güvenli kaldı", "Yalnız sunucu sertifikaları etkilendi"],
      aciklama: "Süreç numarası en fazla 32.768 olabildiği için her anahtar türünde yalnız o kadar olası anahtar vardı. Saldırganlar hepsini önceden üretip listeledi; etkilenen anahtarların hepsi yenilenmek zorunda kaldı (2. ünite).",
    },
    {
      ad: "math-random",
      etiket: "hata-bul",
      soru: "Bir web uygulaması parola sıfırlama bağlantısındaki kodu `Math.random()` ile üretiyor. Sorun nedir?",
      secenekler: ["Çıktısı birkaç örnekten sonra tahmin edilir", "Kod her zaman aynı uzunlukta çıkar", "Math.random tarayıcıda çalışmaz", "Kod yalnız rakamlardan oluşur"],
      aciklama: "`Math.random()` hız için tasarlanmış, kriptografik olmayan bir üreteçtir; iç durumu birkaç çıktıdan bulunabilir. Güvenlik kodları `crypto.getRandomValues` gibi bir CSPRNG ile üretilmelidir.",
    },
    {
      ad: "ortak-asal",
      zorluk: 2,
      dy: true,
      soru: "İnternette toplanan RSA açık anahtarlarının bir kısmı ortak bir asal çarpanı paylaştığı için yalnız EBOB hesabıyla çarpanlarına ayrılabildi.",
      aciklama: "Doğru. 2012'de yapılan taramalarda, açılışta yeterince entropi toplayamayan gömülü cihazların (yönlendiriciler, güvenlik duvarları) aynı asalı ürettiği bulundu. İki anahtarın EBOB'u ortak asalı verir (3. ünite).",
    },
  ]),
  ...sorular(U, "u17-zamanlama", [
    {
      ad: "erken-cikis",
      etiket: "hata-bul",
      soru: "Bir sunucu gelen MAC'i beklenenle bayt bayt karşılaştırıyor ve ilk farklı baytta duruyor. Saldırgan bundan nasıl yararlanır?",
      secenekler: ["Yanıt süresinden doğru baytları tek tek bulur", "MAC'in uzunluğunu öğrenip anahtarı çıkarır", "Sunucunun belleğini doğrudan okur", "Sunucuyu kapatıp yerine geçer"],
      aciklama: "Doğru bir bayt, karşılaştırmanın bir adım daha sürmesini sağlar. Her konum için 256 değeri deneyip en yavaş yanıtı seçen saldırgan, MAC'i baştan sona bulur ve hiç anahtar bilmeden geçerli bir etiket gönderir (8. ünite).",
    },
    {
      ad: "pin",
      sayi: [40],
      soru: "4 haneli bir PIN'i kaba kuvvetle bulmak en kötü 10.000 deneme ister. Karşılaştırma erken çıkıyorsa ve saldırgan her hane için 10 rakamın süresini ölçerek doğrusunu seçebiliyorsa, en kötü kaç tahmin gerekir?",
      aciklama: "Her hane ayrı bulunur: $4 \\times 10 =$ **40**. Saldırı üstel işi doğrusala indirir. Gerçekte gürültü yüzünden her tahmin binlerce kez ölçülür, ama oran aynı kalır.",
    },
    {
      ad: "sabit",
      soru: "Sabit zamanlı karşılaştırma nasıl yazılır?",
      secenekler: ["Bütün baytların farkı XOR'la birikir, sonunda tek kez bakılır", "Karşılaştırmadan önce rastgele bir süre beklenir", "Baytlar sondan başa doğru karşılaştırılır", "Karşılaştırma iki kez yapılıp sonuçlar kıyaslanır"],
      aciklama: "`fark |= a[i] ^ b[i]` döngüsü her zaman bütün uzunluğu dolaşır ve dallanmaz. Rastgele bekleme gürültü ekler ama ortalama alınarak elenir. Hazır işlevler: Node.js'te `crypto.timingSafeEqual`, Go'da `subtle.ConstantTimeCompare`.",
    },
    {
      ad: "uzak",
      dy: true,
      soru: "Ağ üzerinden ölçülen yanıt sürelerinde gürültü çok olsa da, yeterince çok ölçümün ortalaması alınarak mikrosaniyenin altındaki farklar bile ayırt edilebilir.",
      aciklama: "Doğru. 2003'te OpenSSL'in RSA uygulamasına karşı aynı yerel ağdaki bir makineden yapılan zamanlama saldırısı özel anahtarı çıkardı. Gürültü saldırıyı pahalılaştırır, imkânsız kılmaz.",
    },
  ]),
  ...sorular(U, "u17-guc", [
    {
      ad: "neden",
      soru: "CMOS bir işlemcinin güç tüketimi neden işlenen veriye bağlıdır?",
      secenekler: ["Bitler değiştikçe kapasitörler dolup boşalır, akım çekilir", "İşlemci gizli verileri ayrı bir devrede saklar", "Güç kaynağı her bayta farklı gerilim verir", "Şifreleme sırasında işlemci yavaşlar"],
      aciklama: "CMOS kapıları yalnız durum değiştirirken belirgin akım çeker; bir yazmaca yazılan değerdeki 1'lerin sayısı (Hamming ağırlığı) ya da değişen bitlerin sayısı (Hamming uzaklığı) tüketimi etkiler. Akıllı kartın güç hattına bağlanan küçük bir direnç bu farkı ölçmeye yeter.",
    },
    {
      ad: "hamming",
      sayi: [4],
      soru: "0x2B baytının Hamming ağırlığı (ikilik gösterimdeki 1 sayısı) kaçtır?",
      aciklama: "$\\texttt{0x2B} = 00101011_2$: **4** tane 1. Güç analizinde her anahtar tahmini için S-kutusu çıkışının Hamming ağırlığı bu şekilde hesaplanır.",
    },
    {
      ad: "spa-dpa",
      zorluk: 2,
      soru: "SPA ile DPA (ya da CPA) arasındaki fark nedir?",
      secenekler: ["SPA tek ize bakar, DPA çok izin istatistiğini kullanır", "SPA yalnız RSA'ya, DPA yalnız AES'e uygulanır", "SPA donanım, DPA yazılım saldırısıdır", "SPA anahtarı, DPA yalnız düz metni bulur"],
      aciklama: "Basit güç analizinde (SPA) tek bir iz gözle okunur: RSA'nın kare al ve çarp döngüsünde çarpma adımları izde ayrı görünür ve üssün bitleri okunur. Diferansiyel ve korelasyon güç analizinde (DPA, CPA) binlerce iz tahmini sızıntıyla istatistiksel olarak karşılaştırılır.",
    },
    {
      ad: "tahmin",
      sayi: [4096],
      soru: "CPA saldırısı AES-128 anahtarını bayt bayt bulur ve her bayt için 256 tahminin korelasyonunu hesaplar. Toplam kaç tahmin denenir?",
      aciklama: "$16 \\times 256 =$ **4096**. Anahtarın tamamını birden denemek $2^{128}$ tahmin isterdi. Yan kanal saldırılarının gücü, büyük anahtarı küçük ve bağımsız parçalara bölebilmesindedir.",
    },
  ]),
  ...sorular(U, "u17-em-hata", [
    {
      ad: "em",
      dy: true,
      soru: "Elektromanyetik yayınımı ölçen bir sonda, cihaza fiziksel olarak dokunmadan güç analizine benzer bir saldırı yapabilir.",
      aciklama: "Doğru. Akım değişimleri manyetik alan yayar; çip yüzeyine yaklaştırılan küçük bir bobin, güç hattına erişmeden yerel ve hatta daha temiz bir sinyal alabilir. Akıllı telefonlara karşı da birkaç santimetre uzaktan EM saldırıları gösterildi.",
    },
    {
      ad: "hata",
      soru: "Hata enjeksiyonu saldırısında saldırgan ne yapar?",
      secenekler: ["Gerilim, saat ya da lazerle hesabı bilerek bozar", "Cihazın yazılımını internetten günceller", "Yalnız cihazın sıcaklığını ölçer", "Cihazın ekranını fotoğraflar"],
      aciklama: "Kısa bir gerilim düşüşü ya da saat darbesi bir komutu atlatabilir ya da bir biti çevirebilir. Bozuk bir sonuç ile doğrusu karşılaştırılarak anahtar çıkarılır (örneğin RSA-CRT'de tek bir hatalı imza modülü çarpanlarına ayırır) ya da \"PIN doğru mu\" denetimi atlatılır.",
    },
    {
      ad: "rsa-crt",
      zorluk: 3,
      dy: true,
      soru: "RSA imzası Çin kalan teoremiyle iki parçada hesaplanırken parçalardan birinde tek bir hata oluşursa, hatalı imza ile doğru imzanın farkının n ile EBOB'u bir asal çarpanı verir.",
      aciklama: "Doğru. Hatalı imza bir asalın modunda doğru, ötekinde yanlıştır; fark yalnız doğru olan asalın katıdır. Bu, 1997'de yayımlanan ünlü Bellcore saldırısıdır. Karşı önlem, imzayı göndermeden önce açık anahtarla doğrulamaktır.",
    },
  ]),
  ...sorular(U, "u17-onlem", [
    {
      ad: "maskeleme",
      soru: "Maskeleme güç analizine karşı nasıl korur?",
      secenekler: ["Ara değerler her çalışmada yeni bir rastgele maskeyle işlenir", "Cihazın güç tüketimi sabit bir değere sabitlenir", "Anahtar her şifrelemeden sonra silinip yeniden üretilir", "Algoritma gizli tutulur, saldırgan tahmin edemez"],
      aciklama: "İşlenen değer $S(p \\oplus k) \\oplus m$ olur ve $m$ her seferinde rastgeledir; tek bir ölçüm noktası anahtar tahminiyle ilişkisini yitirir. Saldırgan iki noktayı birleştiren ikinci dereceden saldırılara geçmek zorunda kalır; bu, çok daha fazla iz ister.",
    },
    {
      ad: "tablo",
      zorluk: 2,
      etiket: "hata-bul",
      soru: "Bir AES yazılımı S-kutusunu bellekteki bir tablodan, gizli anahtara bağlı indisle okuyor. Aynı işlemcide çalışan başka bir süreç neyi ölçebilir?",
      secenekler: ["Hangi tablo satırlarının önbellekte olduğunu", "AES anahtarının kaç bit uzunlukta olduğunu", "Şifrelenen dosyanın adını ve boyutunu", "İşlemcinin o anki saat hızını"],
      aciklama: "Önbellek zamanlama saldırıları (ör. 2005'teki ilk AES saldırıları) hangi bellek satırının hızlı okunduğuna bakarak indisi, dolayısıyla anahtarı bulur. Bu yüzden modern işlemcilerde AES için özel komutlar (AES-NI) ya da tablosuz, bit dilimli uygulamalar kullanılır.",
    },
    {
      ad: "sertifika",
      dy: true,
      soru: "Ödeme kartları ve kimlik kartları gibi güvenli çipler, piyasaya çıkmadan önce yan kanal ve hata enjeksiyonu testlerinden geçen sertifikasyonlara tabidir.",
      aciklama: "Doğru. Common Criteria gibi değerlendirmelerde laboratuvarlar çipe güç, EM ve hata saldırıları yapar; kartın belirli bir saldırı bütçesine dayanması beklenir.",
    },
  ]),
];
