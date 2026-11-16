// 18. ünite (Post-kuantum kriptografi): Shor ve Grover, şimdi topla sonra çöz, kafesler ve
// LWE, ML-KEM, ML-DSA ve hash tabanlı imzalar, hibrit anahtar değişimi, gerçek ürünlerde geçiş.
// Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 18;

export const unite18: Soru[] = [
  ...sorular(U, "u18-shor-grover", [
    {
      ad: "shor",
      soru: "Shor algoritması büyük bir kuantum bilgisayarda hangisini verimli biçimde kırar?",
      secenekler: ["RSA ve eliptik eğri kriptografisini", "AES-256 şifrelemesini", "SHA-256 hash fonksiyonunu", "One-time pad şifresini"],
      aciklama: "Shor, çarpanlara ayırma ve ayrık logaritma problemlerini polinom zamanda çözer; RSA, Diffie-Hellman, ECDH, ECDSA ve Ed25519 bu problemlere dayanır. Simetrik şifreler ve hash'ler bu yapıya sahip değildir.",
    },
    {
      ad: "grover",
      sayi: [128],
      soru: "Grover algoritması kaba kuvvet aramasını karekök kadar hızlandırır. AES-256'nın 256 bitlik güvenliği kabaca kaç bite iner?",
      aciklama: "$\\sqrt{2^{256}} = 2^{128}$: **128 bit**, hâlâ ulaşılamaz. Grover'in adımları sıralıdır ve paralelleştirmesi zordur; pratikte AES-128 bile çoğu değerlendirmede yeterli sayılır.",
    },
    {
      ad: "simetrik",
      dy: false,
      soru: "Büyük bir kuantum bilgisayar yapıldığında AES ve SHA-256 da tamamen terk edilmelidir.",
      aciklama: "Yanlış. Grover etkisi anahtar ya da çıktı uzunluğunu iki katına çıkararak karşılanır; AES-256 ve SHA-256 güvende kalır. Değiştirilmesi gereken, açık anahtarlı kriptografidir.",
    },
    {
      ad: "bugun",
      zorluk: 2,
      dy: false,
      soru: "Kasım 2026 itibarıyla RSA-2048'i kırabilecek büyüklükte bir kuantum bilgisayar kamuya açık olarak gösterilmiştir.",
      aciklama: "Yanlış. Bugünkü cihazların hata düzeltmeli kübit sayısı bunun çok altında. Yine de tahminler son yıllarda öne çekildi ve standart kuruluşlar geçişi 2030'lara yaymayı planlıyor.",
    },
  ]),
  ...sorular(U, "u18-hndl", [
    {
      ad: "ne",
      soru: "\"Şimdi topla, sonra çöz\" tehdidi neden bugünden önlem almayı gerektirir?",
      secenekler: ["Bugün kaydedilen şifreli trafik ileride çözülebilir", "Kuantum bilgisayarlar bugünkü trafiği canlı çözer", "Bugünkü anahtarlar yarın kendiliğinden geçersiz olur", "Kayıtlı veri zamanla kendiliğinden bozulur"],
      aciklama: "Saldırgan bugün ECDH ile kurulmuş TLS ya da mesajlaşma trafiğini kaydeder; büyük bir kuantum bilgisayar geldiğinde anahtar değişimini çözüp içeriği açar. Uzun yıllar gizli kalması gereken veri (sağlık, devlet, kişisel yazışma) için tehdit şimdiden başlamıştır.",
    },
    {
      ad: "mosca",
      sayi: [3],
      soru: "Mosca kuralında x verinin gizli kalması gereken yıl, y geçiş süresi, z kuantum bilgisayara kalan yıldır; x + y > z ise geç kalınmıştır. x = 10, y = 5, z = 12 için kaç yıllık bir açık vardır?",
      aciklama: "$x + y - z = 10 + 5 - 12 =$ **3 yıl**: bugün kaydedilen verinin son üç yılı, hâlâ gizli olması gerekirken çözülebilir hale gelir.",
    },
    {
      ad: "imza",
      zorluk: 2,
      soru: "Şimdi topla, sonra çöz tehdidi en çok hangisi için acildir?",
      secenekler: ["Anahtar değişimi ve şifreleme", "Dijital imzalar", "Hash fonksiyonları", "Parola saklama"],
      aciklama: "Kaydedilmiş bir anahtar değişimi ileride çözülürse geçmiş trafik açılır. İmzalar ise ancak kırıldıktan sonra sahtelenebilir; geçmişte doğrulanmış bir imzayı geriye dönük bozmak işe yaramaz. Bu yüzden geçiş anahtar değişiminden başladı.",
    },
  ]),
  ...sorular(U, "u18-kafes", [
    {
      ad: "lwe",
      soru: "LWE (Learning With Errors) probleminde zorluğun kaynağı nedir?",
      secenekler: ["Doğrusal denklemlere eklenen küçük gürültü", "Çok büyük asal sayıların çarpılması", "Eliptik eğri üzerindeki nokta toplama", "Hash fonksiyonunun tek yönlü olması"],
      aciklama: "Gürültüsüz $A s = b$ sistemi Gauss elemeyle anında çözülür. Her denkleme küçük bir hata eklenince eleme hataları büyütür ve yüzlerce boyutta bilinen hiçbir klasik ya da kuantum algoritma verimli çalışmaz.",
    },
    {
      ad: "kaba",
      sayi: [912673],
      soru: "Mod 97'de 3 bilinmeyenli bir LWE oyuncağında bütün olası gizli vektörleri denemek kaç aday ister?",
      aciklama: "$97^3 =$ **912.673**. Bir bilgisayar bunu saniyeler içinde dener. ML-KEM-768'de 768 bilinmeyen var; katsayılar küçük olsa bile aday sayısı $5^{768} \\approx 10^{537}$ olur.",
    },
    {
      ad: "gauss",
      dy: true,
      soru: "Gürültülü LWE denklemleri gürültü yokmuş gibi Gauss elemeyle çözülürse, sonuç çoğu zaman gerçek gizli vektörden çok uzak bir değer çıkar.",
      aciklama: "Doğru. Eleme sırasında denklemler büyük katsayılarla çarpılıp çıkarılır; küçük hatalar da aynı katsayılarla büyür ve mod $q$'da sonucu rastgele bir yere taşır. Gürültülü denklemler oyununda bunu kendin dene.",
    },
  ]),
  ...sorular(U, "u18-mlkem", [
    {
      ad: "kem",
      soru: "ML-KEM bir anahtar kapsülleme mekanizmasıdır (KEM). Bu ne anlama gelir?",
      secenekler: ["Gönderen rastgele bir sır üretip açık anahtarla kapsüller", "İki taraf aynı anda pay gönderip karıştırır", "Mesajın kendisi doğrudan açık anahtarla şifrelenir", "Ortak sır bir parola üzerinden türetilir"],
      aciklama: "Diffie-Hellman'da iki taraf simetrik pay değiştirir. KEM'de Ayşe, Mert'in açık anahtarıyla rastgele bir sırrı kapsüller ve şifreli metni gönderir; Mert gizli anahtarıyla açar. Sonuç yine 32 baytlık ortak bir anahtardır.",
    },
    {
      ad: "fips",
      soru: "NIST, ML-KEM'i hangi standartla yayımladı?",
      secenekler: ["FIPS 203", "FIPS 197", "RFC 8446", "FIPS 180-4"],
      aciklama: "Ağustos 2024'te FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) ve FIPS 205 (SLH-DSA) birlikte yayımlandı. FIPS 197 AES'in, FIPS 180-4 SHA-2'nin, RFC 8446 TLS 1.3'ün standardıdır.",
    },
    {
      ad: "otuz-kat",
      zorluk: 2,
      dy: true,
      soru: "ML-KEM-768'in açık anahtarı (1184 bayt) X25519'un açık anahtarından (32 bayt) otuz kattan fazla büyüktür.",
      aciklama: "Doğru: $1184 / 32 = 37$. Post-kuantum algoritmaların en büyük pratik bedeli boydur; el sıkışmalar büyür ve bazı eski ağ cihazları büyük ClientHello mesajlarında takıldı.",
    },
    {
      ad: "gurultu",
      zorluk: 2,
      soru: "ML-KEM'in çözmesinde Mert $v - s^T u$ hesaplar ve her katsayıyı 0'a mı $q/2$'ye mi yakın diye yuvarlar. Gürültü çok büyük seçilseydi ne olurdu?",
      secenekler: ["Bazı bitler yanlış çözülür, sırlar uyuşmaz", "Güvenlik artar, hiçbir yan etkisi olmaz", "Açık anahtar küçülür ve hız artar", "Şifreli metin açık metne dönüşür"],
      aciklama: "Gürültü güvenliği sağlar ama çözmede birikir; $q/4$'ü aşarsa bit ters döner. Parametreler, hata olasılığı ihmal edilebilir ($2^{-138}$'in altında) ve güvenlik yeterli olacak biçimde dengelenir. Oyuncak KEM'de η kaydırıcısıyla bunu dene.",
    },
  ]),
  ...sorular(U, "u18-imza", [
    {
      ad: "mldsa",
      soru: "ML-DSA neyin yerini almak için standartlaştırıldı?",
      secenekler: ["ECDSA, Ed25519 ve RSA imzalarının", "AES ve ChaCha20 şifrelerinin", "SHA-2 ve SHA-3 hash'lerinin", "PBKDF2 ve Argon2 KDF'lerinin"],
      aciklama: "ML-DSA (eski adı Dilithium), kafes tabanlı bir dijital imzadır; sertifikalarda, yazılım güncellemelerinde ve kimlik doğrulamada bugünkü imzaların yerini alması bekleniyor.",
    },
    {
      ad: "slh",
      zorluk: 2,
      soru: "SLH-DSA (SPHINCS+) gibi hash tabanlı imzaların en büyük avantajı nedir?",
      secenekler: ["Güvenliği yalnız hash fonksiyonunun güvenliğine dayanır", "İmzaları her algoritmadan daha kısadır", "İmza atmak ve doğrulamak çok hızlıdır", "Açık anahtar gerektirmeden doğrulanabilir"],
      aciklama: "Hash fonksiyonları çok iyi incelenmiştir ve kuantum bilgisayar onları yalnız Grover kadar zayıflatır. Bedeli büyük imzalardır (8-50 KB). Bu yüzden uzun ömürlü kök anahtarlar ve yazılım imzalama için tercih edilir.",
    },
    {
      ad: "sertifika",
      dy: true,
      soru: "Post-kuantum imzalar bugünkülerden çok daha büyük olduğu için, bir TLS sertifika zincirine geçirilmeleri anahtar değişiminden daha zor bir iştir.",
      aciklama: "Doğru. Bir zincirde birden çok imza ve açık anahtar vardır; ML-DSA-44'te imza 2420, açık anahtar 1312 bayttır. Her TLS bağlantısına onlarca kilobayt eklemek yavaş ağlarda fark edilir; bu yüzden sertifikalarda geçiş daha temkinli ilerliyor.",
    },
  ]),
  ...sorular(U, "u18-hibrit", [
    {
      ad: "neden",
      soru: "Geçiş döneminde neden yalnız ML-KEM değil, X25519 ile ML-KEM birlikte (hibrit) kullanılır?",
      secenekler: ["Biri kırılsa bile öteki güvenliği korusun diye", "ML-KEM tek başına ortak sır üretemediği için", "X25519 açık anahtarları küçültsün diye", "Kuantum bilgisayarlar X25519'u güçlendirdiği için"],
      aciklama: "ML-KEM yeni bir algoritmadır; X25519 ise on yılı aşkın süredir incelenmektedir. İki sır birleştirilip KDF'den geçirilir: saldırgan anahtarı bulmak için ikisini birden kırmalıdır. Öte yandan bazı post-kuantum adaylar (ör. SIKE, 2022) klasik bilgisayarla kırıldı; hibrit bu riske karşı sigortadır.",
    },
    {
      ad: "boy",
      sayi: [1216],
      soru: "Hibrit X25519MLKEM768'de istemcinin gönderdiği anahtar payı, ML-KEM-768 açık anahtarı (1184 bayt) ile X25519 açık anahtarının (32 bayt) art arda eklenmesidir. Kaç bayttır?",
      aciklama: "$1184 + 32 =$ **1216 bayt**. Sunucunun cevabı da ML-KEM şifreli metni (1088) ile X25519 payının (32) toplamıdır: 1120 bayt.",
    },
    {
      ad: "birlestirme",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir hibrit tasarımda iki sır birleştirilirken yalnız ML-KEM sırrı kullanılıyor, X25519 sırrı \"yedek\" diye atılıyor. Sorun nedir?",
      secenekler: ["ML-KEM kırılırsa hibritin hiçbir koruması kalmaz", "Ortak sır gereğinden fazla uzun olur", "X25519 sırrı kuantuma karşı güvensiz olur", "İki taraf farklı anahtar türetir"],
      aciklama: "Hibritin anlamı, iki sırrın da anahtara girmesidir: $K = \\text{KDF}(ss_{\\text{ML-KEM}} \\| ss_{\\text{X25519}} \\| \\dots)$. Birini atmak, hibrit diye etiketlenmiş tek algoritmalı bir tasarımdır.",
    },
  ]),
  ...sorular(U, "u18-gecis", [
    {
      ad: "tls",
      soru: "Kasım 2026 itibarıyla büyük tarayıcıların TLS bağlantılarında varsayılan olarak kullandığı post-kuantum anahtar değişimi hangisidir?",
      secenekler: ["X25519MLKEM768", "RSA-4096 ile anahtar taşıma", "Saf ML-DSA-65", "AES-256 ile ön paylaşımlı anahtar"],
      aciklama: "Chrome, Firefox ve Safari X25519 ile ML-KEM-768'i birleştiren hibrit grubu varsayılan olarak sunuyor; büyük içerik dağıtım ağları ve bulut sağlayıcıları da destekliyor. Bağlantıların önemli bir kısmı artık bu yolla kuruluyor.",
    },
    {
      ad: "signal",
      dy: true,
      soru: "Signal, X3DH'ye bir ML-KEM kapsüllemesi ekleyerek PQXDH'ye geçti; böylece bugün kaydedilen ilk el sıkışmalar ileride kuantum bilgisayarla açılamaz.",
      aciklama: "Doğru (2023). Signal ayrıca 2025'te Double Ratchet'e post-kuantum bir cırcır ekleyerek konuşmanın devamını da korumaya başladı. Apple iMessage'da benzer amaçlı PQ3 protokolünü 2024'te devreye aldı.",
    },
    {
      ad: "cevik",
      soru: "\"Kriptografik çeviklik\" ne demektir?",
      secenekler: ["Algoritmanın kod yazmadan değiştirilebilmesi", "Şifrelemenin çok hızlı yapılabilmesi", "Anahtarların her gün elle değiştirilmesi", "Bütün algoritmaların aynı anda kullanılması"],
      aciklama: "Post-kuantum geçişi, algoritmaların koda gömüldüğü sistemlerde yıllar sürüyor. Protokollerde algoritma kimlikleri, sürüm anlaşması ve yapılandırılabilir listeler, bir sonraki geçişi (bir algoritma kırılırsa) çok daha kolay kılar.",
    },
  ]),
];
