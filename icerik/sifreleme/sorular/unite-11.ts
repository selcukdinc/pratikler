// 11. ünite (Eliptik eğriler ve imzalar): nokta toplama, F_p üzerinde eğri ve skaler
// çarpım, ECDH ve X25519, imza fikri, ECDSA ve Ed25519, nonce tekrarı. Oyuncak eğri
// y² = x³ + 2x + 3 (mod 97), P = (3, 6); sayısal cevaplar sorular.test.ts'te sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 11;

export const unite11: Soru[] = [
  ...sorular(U, "u11-nokta", [
    {
      ad: "geometri",
      soru: "Gerçek sayılar üzerindeki bir eliptik eğride $P + Q$ nasıl bulunur?",
      secenekler: [
        "$P$ ile $Q$'dan geçen doğrunun eğriyi kestiği üçüncü noktanın yansıması",
        "$P$ ile $Q$'nun koordinatları ayrı ayrı toplanır",
        "$P$ ile $Q$'nun orta noktası bulunur ve eğriye dik izdüşürülür",
        "$P$'deki teğetin $Q$'dan geçen dikmesiyle kesiştiği nokta",
      ],
      aciklama: "Bir doğru kübik eğriyi en çok üç noktada keser. $P$ ve $Q$'dan geçen doğru üçüncü noktayı verir, bu nokta x eksenine göre yansıtılır. $P = Q$ ise doğru yerine teğet kullanılır (ikiye katlama).",
    },
    {
      ad: "sonsuz",
      soru: "Eğrideki sonsuzdaki nokta $O$ toplamada hangi rolü oynar?",
      secenekler: ["Etkisiz elemandır: $P + O = P$", "Her noktanın kendisidir: $P + P = O$", "Eğrinin tepe noktasıdır", "Yalnız ikiye katlamada kullanılır"],
      aciklama: "$P$ ile $-P = (x, -y)$'den geçen doğru dikeydir, eğriyi başka bir noktada kesmez; bu toplamın sonucu $O$ kabul edilir. Böylece noktalar bir grup oluşturur: sayılardaki 0 gibi.",
    },
    {
      ad: "ters",
      sayi: [91],
      soru: "$y^2 = x^3 + 2x + 3 \\pmod{97}$ eğrisinde $P = (3, 6)$ noktasının tersi $-P$'nin y koordinatı kaçtır?",
      aciklama: "$-P = (x, -y \\bmod p) = (3, 97 - 6) = (3,$ **91**$)$. Gerçek sayılarda x eksenine göre yansıma neyse, mod $p$'de $y \\to p - y$ odur.",
    },
    {
      ad: "uzerinde",
      dy: true,
      soru: "$P = (3, 6)$ noktası $y^2 = x^3 + 2x + 3 \\pmod{97}$ eğrisinin üzerindedir.",
      aciklama: "Doğru. Sol: $6^2 = 36$. Sağ: $27 + 6 + 3 = 36$. İki taraf mod 97'de eşit.",
    },
  ]),
  ...sorular(U, "u11-fp", [
    {
      ad: "ikiye-katla",
      zorluk: 3,
      sayi: [80],
      soru: "Aynı eğride ($a = 2$, $p = 97$) $P = (3, 6)$ için $2P$'nin x koordinatı kaçtır? Teğetin eğimi $\\lambda = (3x^2 + a) \\cdot (2y)^{-1} \\bmod p$, $x_3 = \\lambda^2 - 2x \\bmod p$.",
      aciklama: "$3 \\cdot 9 + 2 = 29$; $2y = 12$ ve $12^{-1} \\equiv 89$ (mod 97), çünkü $12 \\cdot 89 = 1068 = 11 \\cdot 97 + 1$.\n---\n$\\lambda = 29 \\cdot 89 = 2581 \\equiv 59$. $x_3 = 59^2 - 6 = 3475 \\equiv$ **80** (mod 97). Tam sonuç $2P = (80, 10)$.",
    },
    {
      ad: "ciftle-topla",
      zorluk: 2,
      sayi: [3],
      soru: "$13P$, çiftle ve topla yöntemiyle $13 = 1101_2$'nin bitleri soldan sağa okunarak hesaplanıyor. Kaç ikiye katlama yapılır?",
      aciklama: "İlk bit $R = P$ yapar. Kalan her bit için bir ikiye katlama: üç bit, **3** katlama. 1 olan bitlerde ayrıca $P$ eklenir. 256 bitlik bir $k$ için yaklaşık 256 katlama ve 128 toplama yeter; $k$ adım adım toplansa evrenin ömrü yetmezdi.",
    },
    {
      ad: "mertebe",
      zorluk: 2,
      soru: "$P$'nin mertebesi 5'tir, yani $5P = O$. $7P$ neye eşittir?",
      secenekler: ["$2P$", "$O$", "$7P$ tanımsızdır", "$P$"],
      aciklama: "$7P = 5P + 2P = O + 2P = 2P$. Skaler çarpımda $k$ mertebeye göre mod alınarak düşünülür. Gerçek eğrilerde üreteç noktanın mertebesi 256 bitlik bir asaldır.",
    },
    {
      ad: "ecdlp",
      soru: "Eliptik eğri kriptografisinin güvenliği hangi problemin zorluğuna dayanır?",
      secenekler: [
        "$P$ ve $Q = kP$ bilinirken $k$'yi bulmak",
        "Eğri üzerindeki noktaların sayısını bulmak",
        "İki noktayı toplamak",
        "$p$ asalını çarpanlarına ayırmak",
      ],
      aciklama: "$kP$'yi hesaplamak hızlıdır (çiftle ve topla), $k$'yi geri bulmak bilinen en iyi yöntemlerle $\\sqrt{n}$ adım ister. Sayılardaki ayrık logaritmanın aksine alt-üstel kısayol bilinmediği için 256 bitlik eğri 128 bitlik güvenlik verir.",
    },
  ]),
  ...sorular(U, "u11-ecdh", [
    {
      ad: "formul",
      soru: "ECDH'de Ayşe'nin gizli sayısı $a$, Ali'ninki $b$, ortak nokta $G$. Ortak sır nedir?",
      secenekler: ["$abG$", "$(a + b)G$", "$aG + bG$", "$G^{ab}$"],
      aciklama: "Ayşe $aG$, Ali $bG$ gönderir. Ayşe $a(bG)$, Ali $b(aG)$ hesaplar; ikisi de $abG$'dir. Diffie-Hellman'daki üs almanın yerini skaler çarpım alır.",
    },
    {
      ad: "x25519-boy",
      sayi: [32],
      soru: "X25519'da bir açık anahtar kaç bayttır?",
      aciklama: "**32** bayt (255 bitlik bir x koordinatı). Aynı güvenlik için RSA ya da klasik DH 384 baytlık değerler gönderir. Kısa anahtar, el sıkışmayı küçük ve hızlı tutar.",
    },
    {
      ad: "curve25519",
      soru: "Curve25519 tasarımının öne çıkan özelliği nedir?",
      secenekler: [
        "Hatasız ve sabit zamanlı yazılması kolay olacak biçimde tasarlandı",
        "Yalnız devletlerin kullanması için gizli parametrelerle üretildi",
        "Kuantum bilgisayarlara karşı dayanıklıdır",
        "Anahtarları RSA'dan daha uzundur",
      ],
      aciklama: "Daniel J. Bernstein (2005) parametreleri açıkça gerekçelendirdi, her 32 baytlık dizi geçerli bir anahtardır ve formüllerde dallanma yoktur. Kuantum dayanıklılığı yoktur; bu yüzden 2026'da tarayıcılar X25519'u ML-KEM ile birlikte kullanıyor (18. ünite).",
    },
    {
      ad: "tls-yaygin",
      dy: true,
      soru: "TLS 1.3'te anahtarı RSA ile şifreleyip sunucuya gönderme yöntemi kaldırıldı; tam bir el sıkışmada ortak anahtar (EC)DHE ile kurulur.",
      aciklama: "Doğru. TLS 1.3 RSA ile anahtar taşımayı kaldırdı, çünkü sunucunun özel anahtarı çalınırsa geçmiş bütün trafik çözülüyordu. Her bağlantıda yeni DH anahtarı (E: ephemeral) ileri gizlilik sağlar. RSA yalnız sertifika imzası için kalabilir.",
    },
  ]),
  ...sorular(U, "u11-imza", [
    {
      ad: "roller",
      soru: "Dijital imzada hangi anahtar ne için kullanılır?",
      secenekler: [
        "Özel anahtarla imzalanır, açık anahtarla herkes doğrular",
        "Açık anahtarla imzalanır, özel anahtarla doğrulanır",
        "İki taraf ortak bir gizli anahtarla imzalar ve doğrular",
        "İmza için anahtar gerekmez, hash yeterlidir",
      ],
      aciklama: "İmzayı yalnız özel anahtarın sahibi üretebilir, doğrulamayı herkes yapabilir. Ortak anahtarla etiket üretmek MAC'tir (8. ünite) ve inkâr edilemezlik sağlamaz.",
    },
    {
      ad: "inkar",
      soru: "İmzanın MAC'in vermediği hangi güvenceyi verdiği söylenir?",
      secenekler: ["İnkâr edilemezlik", "Gizlilik", "Hız", "Kısa etiket"],
      aciklama: "MAC anahtarını iki taraf da bilir; etiketi ikisi de üretebilir. İmzayı yalnız özel anahtarın sahibi atabildiği için üçüncü kişiye kanıt olur. İmza mesajı gizlemez.",
    },
    {
      ad: "gizler-mi",
      dy: false,
      soru: "Bir mesajı imzalamak onu okunamaz hale getirir.",
      aciklama: "Yanlış. İmza mesajın yanına eklenen bir kanıttır, mesaj açık kalır. Gizlilik isteniyorsa ayrıca şifrelenir. Yazılım güncellemeleri ve Git etiketleri imzalıdır ama herkes okuyabilir.",
    },
    {
      ad: "hashle-imzala",
      soru: "Uzun bir dosya imzalanırken neden önce hash'i alınır?",
      secenekler: [
        "İmza sabit boylu bir değer üzerinde çalışır; hash dosyayı ona sıkıştırır",
        "Hash dosyayı şifreler ve gizli tutar",
        "İmza algoritmaları yalnız metin dosyalarıyla çalışır",
        "Hash alınmazsa açık anahtar doğrulama yapamaz hale gelir ve imza geçersiz olur",
      ],
      aciklama: "ECDSA ve RSA imzası anahtar boyunda tek bir sayı üzerinde çalışır. 4 GB'lık bir dosyanın SHA-256 özeti imzalanır; özetin çakışma direnci imzayı dosyanın tamamına bağlar.",
    },
  ]),
  ...sorular(U, "u11-ecdsa", [
    {
      ad: "rastgele-k",
      soru: "ECDSA'nın her imza için istediği şey nedir?",
      secenekler: ["Gizli ve hiç tekrarlanmayan rastgele bir $k$", "Her imza için yeni bir anahtar çifti", "Alıcının doğrulanmış açık anahtarı", "Mesajın önce AES ile şifrelenmesi"],
      aciklama: "ECDSA her imzada $R = kG$ hesaplar, $r$ onun x koordinatıdır. $k$ sızarsa ya da iki imzada aynı olursa özel anahtar hesaplanır. Kötü bir rastgele sayı üreteci ECDSA'yı çökertir.",
    },
    {
      ad: "ed25519-nonce",
      zorluk: 2,
      soru: "Ed25519 imzanın nonce değerini nasıl üretir?",
      secenekler: [
        "Özel anahtardan türetilen bir önek ile mesajı hash'leyerek",
        "Her imzada işletim sisteminden yeni rastgele sayı alır",
        "Sabit bir değer kullanır, çünkü eğri zaten güvenlidir",
        "İmzayı doğrulayacak taraftan bir rastgele sayı ister",
      ],
      aciklama: "Ed25519 (deterministik Schnorr) $r = H(\\text{önek} \\| m)$ kullanır. Aynı mesaj aynı imzayı verir, farklı mesajlar farklı nonce verir. RFC 6979 aynı fikri ECDSA'ya uygular.",
    },
    {
      ad: "imza-boy",
      sayi: [64],
      soru: "Bir Ed25519 imzası kaç bayttır?",
      aciklama: "**64** bayt: 32 baytlık $R$ noktası ve 32 baytlık $s$. Açık anahtar 32 bayttır. RSA-2048 imzası 256 bayttır.",
    },
    {
      ad: "nerede",
      soru: "Aşağıdakilerden hangisi gündelik bir imza kullanımı değildir?",
      secenekler: [
        "Bir dosyayı AES ile şifrelemek",
        "Telefonun işletim sistemi güncellemesini doğrulaması",
        "SSH'ta sunucunun kimliğini kanıtlaması",
        "Bir sitenin sertifikasını CA'nın onaylaması",
      ],
      aciklama: "Güncellemeler, uygulama paketleri, SSH anahtarları (çoğunlukla Ed25519), sertifikalar ve passkey'ler imzayla çalışır. AES şifrelemesi gizlilik sağlar, kimlik kanıtlamaz.",
    },
  ]),
  ...sorular(U, "u11-nonce", [
    {
      ad: "ps3",
      soru: "2010'da bir oyun konsolunun yazılım imzalama anahtarı nasıl ele geçirildi?",
      secenekler: [
        "Üretici bütün ECDSA imzalarında aynı $k$ değerini kullanmıştı",
        "Eliptik eğri çok küçük seçilmişti",
        "Özel anahtar konsolun belleğinde açık duruyordu",
        "SHA-1 çakışması bulunmuştu",
      ],
      aciklama: "fail0verflow ekibi iki imzanın aynı $r$'yi taşıdığını gördü; bu $k$'nin aynı olduğu demekti. Birkaç satırlık cebirle özel anahtar çıktı ve herkes kendi yazılımını imzalayabildi. 2013'te bir Android rastgele sayı hatası Bitcoin cüzdanlarında aynı şeye yol açtı.",
    },
    {
      ad: "k-bul",
      etiket: "ctf",
      zorluk: 3,
      sayi: [29],
      soru: "Mertebe $n = 101$ olan oyuncak bir ECDSA'da iki imza aynı $r = 45$'i taşıyor. Birinci imzada $z_1 = 30$, $s_1 = 10$; ikincide $z_2 = 55$, $s_2 = 84$. $s = k^{-1}(z + rd) \\bmod n$ olduğuna göre $k = (z_1 - z_2) \\cdot (s_1 - s_2)^{-1} \\bmod n$ kaçtır?",
      aciklama: "$z_1 - z_2 = -25 \\equiv 76$, $s_1 - s_2 = -74 \\equiv 27$ (mod 101). $27^{-1} \\equiv 15$, çünkü $27 \\cdot 15 = 405 = 4 \\cdot 101 + 1$.\n---\n$k = 76 \\cdot 15 = 1140 \\equiv$ **29**. Ardından özel anahtar $d = (s_1 k - z_1) \\cdot r^{-1} \\bmod n = 17$ bulunur.",
    },
    {
      ad: "neden-cikar",
      zorluk: 2,
      soru: "Aynı $k$ ile atılmış iki ECDSA imzası neden özel anahtarı ele verir?",
      secenekler: [
        "İki imza denklemi $k$ ve $d$ için çözülebilir bir doğrusal sistem verir",
        "Aynı $k$ kullanılınca eğri zayıf bir eğriye dönüşür",
        "İmzalar birleşince özel anahtarın hash'i çıkar",
        "İki imza yan yana konunca özel anahtar imzada açıkça görünür",
      ],
      aciklama: "$s_1 k = z_1 + rd$ ve $s_2 k = z_2 + rd$. Çıkarınca $d$ yok olur ve $k$ bulunur, sonra $d$ gelir. Farklı ama ilişkili $k$'ler (ör. tahmin edilebilir bir sayaç) bile benzer saldırılara açıktır.",
    },
    {
      ad: "korunma",
      dy: true,
      soru: "Ed25519 ve RFC 6979'lu ECDSA, nonce'u mesajdan ve anahtardan türettiği için bozuk bir rastgele sayı üretecinden etkilenmez.",
      aciklama: "Doğru. Nonce imza anında rastgele çekilmez, belirlenimli olarak hesaplanır. Anahtar üretimi yine iyi rastgelelik ister (3. ünite).",
    },
  ]),
];
