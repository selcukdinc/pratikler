// 2. ünite (Temeller): entropi, parola entropisi ve anahtar uzayı, PRNG ve tohum,
// CSPRNG ve işletim sisteminin rastgele kaynağı, donanım kaynakları (gürültü, jitter),
// rastgelelik testleri ve sapma giderme, zayıf rastgeleliğin sonuçları.
import { sorular, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...sorular(U, "u2-entropi", [
    {
      ad: "tanim",
      soru: "Kriptografide bir değerin entropisi neyi ölçer?",
      secenekler: [
        "Saldırganın o değeri tahmin etmesinin ne kadar zor olduğunu",
        "Değerin bellekte kaç bayt yer kapladığını",
        "Değeri şifrelemenin kaç milisaniye sürdüğünü",
        "Değerde kaç farklı karakter kullanıldığını",
      ],
      aciklama: "Entropi **belirsizliği** bit cinsinden ölçer. $n$ bit entropili bir değeri tahmin etmek için ortalama $2^{n-1}$ deneme gerekir. 32 karakterlik bir parola, hepsi \"a\" ise neredeyse sıfır entropi taşır: uzunluk entropi değildir.",
    },
    {
      ad: "zar",
      sayi: ["2.585±0.01"],
      zorluk: 2,
      soru: "Hilesiz bir zarın bir atışı kaç bit entropi taşır? (İki ondalık basamak yeter.)",
      aciklama: "$N$ eşit olasılıklı sonuç için entropi $\\log_2 N$ bittir: $\\log_2 6 \\approx 2{,}585$ bit.",
    },
    {
      ad: "yazi-tura",
      sayi: [1],
      soru: "Hilesiz bir yazı-tura atışı kaç bit entropi taşır?",
      aciklama: "İki eşit olasılıklı sonuç: $\\log_2 2 = 1$ bit. 128 bitlik bir anahtar, 128 yazı-tura atışı kadar belirsizlik ister.",
    },
    {
      ad: "hileli",
      dy: false,
      zorluk: 2,
      soru: "Yüzde 90 yazı gelen hileli bir para da her atışta 1 bit entropi taşır.",
      aciklama: "Yanlış. Shannon entropisi $H = -\\sum p \\log_2 p$ ile hesaplanır: $-(0{,}9 \\log_2 0{,}9 + 0{,}1 \\log_2 0{,}1) \\approx 0{,}47$ bit. Sonuç önceden kestirilebildikçe entropi düşer.",
    },
  ]),
  ...sorular(U, "u2-parola", [
    {
      ad: "pin",
      sayi: ["13.29±0.01"],
      soru: "Rastgele seçilmiş 4 haneli bir PIN kaç bit entropi taşır? (İki ondalık basamak yeter.)",
      aciklama: "$10^4 = 10\\,000$ olası PIN: $\\log_2 10\\,000 \\approx 13{,}29$ bit. Bu çok azdır; telefonlar PIN'i ancak birkaç yanlış denemeden sonra kilitlenerek koruyabilir.",
    },
    {
      ad: "kucuk-harf",
      sayi: ["37.6±0.1"],
      zorluk: 2,
      soru: "Yalnız 26 küçük harften **rastgele** seçilmiş 8 karakterlik bir parola kaç bit entropi taşır? (Bir ondalık basamak yeter.)",
      aciklama: "Her karakter $\\log_2 26 \\approx 4{,}70$ bit taşır; 8 karakter: $8 \\times 4{,}70 \\approx 37{,}6$ bit.\n---\nEşdeğer formül: $\\log_2 26^8$. Bir GPU saniyede milyarlarca hızlı hash deneyebildiği için bu parola, hızlı hash'le saklanmışsa dakikalar içinde düşer.",
    },
    {
      ad: "kelime",
      zorluk: 2,
      sayi: ["77.5±0.1"],
      soru: "7776 kelimelik bir listeden zarla rastgele seçilen 6 kelimelik bir parola cümlesi kaç bit entropi taşır? (Bir ondalık basamak yeter.)",
      aciklama: "Her kelime $\\log_2 7776 \\approx 12{,}92$ bit taşır ($7776 = 6^5$, beş zar atışı). Altı kelime: $6 \\times 12{,}92 \\approx 77{,}5$ bit. Akılda kalır ve rastgele 12 karakterlik karışık bir paroladan güçlüdür.",
    },
    {
      ad: "insan-secimi",
      soru: "\"Istanbul2024!\" gibi bir parolanın, aynı uzunlukta rastgele bir paroladan çok daha zayıf olmasının nedeni nedir?",
      secenekler: [
        "İnsanların seçtiği kalıplar tahmin edilebilir; saldırganın sözlükleri bunları önce dener",
        "Büyük harf ve ünlem işareti parolanın entropisini her zaman düşürür",
        "Sayı içeren parolalar hash fonksiyonlarında daha kısa çıktı üretir",
        "Bu uzunluktaki parolalar sitelerin çoğunda kabul edilmez",
      ],
      aciklama: "Entropi seçim **yöntemine** bağlıdır, parolanın görünüşüne değil. Şehir adı + yıl + ünlem, sızan parola listelerinden öğrenilmiş bir kalıptır; saldırgan bunları ilk dakikalarda dener.",
    },
  ]),
  ...sorular(U, "u2-prng", [
    {
      ad: "tohum",
      soru: "Sözde rastgele bir üreteç (PRNG) aynı tohumla iki kez başlatılırsa ne olur?",
      secenekler: [
        "Birebir aynı sayı dizisini üretir",
        "Her seferinde tamamen farklı bir dizi üretir",
        "Hata verir ve çalışmayı durdurur",
        "Yalnız ilk sayıyı aynı, sonrakileri farklı üretir",
      ],
      aciklama: "PRNG **belirlenimci** bir algoritmadır: çıktı tamamen tohum ve iç durumla belirlenir. Bu, benzetimleri tekrarlamak için iyidir; kriptografide ise tohumu tahmin eden saldırgan bütün \"rastgele\" anahtarları da bilir.",
    },
    {
      ad: "lcg",
      sayi: [6],
      zorluk: 2,
      soru: "Bir doğrusal eşlik üreteci $x_{n+1} = (5 x_n + 3) \\bmod 16$ kuralıyla çalışıyor ve tohum $x_0 = 7$. Üretilen ilk sayı $x_1$ nedir?",
      aciklama: "$5 \\cdot 7 + 3 = 38$ ve $38 \\bmod 16 = 6$.\n---\nSonraki sayılar: $x_2 = (5 \\cdot 6 + 3) \\bmod 16 = 1$, $x_3 = 8$. Tek bir çıktıyı gören biri, kuralı biliyorsa bütün diziyi hesaplayabilir.",
    },
    {
      ad: "lcg-tahmin",
      sayi: [8],
      zorluk: 2,
      etiket: "ctf",
      soru: "Bir oyun sunucusu \"rastgele\" kart numaralarını $x_{n+1} = (5 x_n + 3) \\bmod 16$ ile üretiyor. Son dağıtılan kart 1 idi. Sıradaki kart hangisi?",
      aciklama: "Kural bilindiği için sıradaki değer hesaplanır: $(5 \\cdot 1 + 3) \\bmod 16 = 8$. Kriptografik olmayan üreteçlerde tek bir çıktı geleceği ele verir; gerçek LCG'lerde birkaç çıktı da parametreleri bulmaya yeter.",
    },
    {
      ad: "math-random",
      etiket: "hata-bul",
      soru: "Bir web uygulaması parola sıfırlama bağlantısındaki token'ı ~Math.random().toString(36)~ ile üretiyor. Sorun nedir?",
      secenekler: [
        "Math.random kriptografik değildir; çıktıları sonrakini ele verir",
        "Math.random yalnız tam sayı ürettiği için token çok kısa kalır",
        "toString(36) çıktısı URL'de kullanılamayan karakterler içerir",
        "Math.random her tarayıcı açılışında aynı sayıyı verir",
      ],
      aciklama: "~Math.random~ hız için tasarlanmış bir PRNG'dir (çoğu motorda xorshift128+); birkaç çıktıdan iç durumu kurtarılabilir. Token'lar ~crypto.getRandomValues~ ya da ~crypto.randomUUID~ ile üretilmelidir.",
    },
  ]),
  ...sorular(U, "u2-csprng", [
    {
      ad: "tarayici",
      soru: "Tarayıcıda kriptografik olarak güvenli rastgele baytlar hangi çağrıyla üretilir?",
      secenekler: ["~crypto.getRandomValues()~", "~Math.random()~", "~Date.now()~", "~performance.now()~"],
      aciklama: "~crypto.getRandomValues~ işletim sisteminin CSPRNG'sinden beslenir. ~Date.now~ ve ~performance.now~ zamandır, tahmin edilebilir; ~Math.random~ kriptografik değildir.",
    },
    {
      ad: "ozellik",
      zorluk: 2,
      soru: "Bir üretecin kriptografik olarak güvenli (CSPRNG) sayılması için gereken temel özellik hangisidir?",
      secenekler: [
        "Önceki çıktıları bilen, sonraki biti tahmin edemez",
        "Saniyede en az bir milyar sayı üretecek kadar hızlıdır",
        "Ürettiği sayılar her zaman asal sayıdır",
        "Tohumu kullanıcının kendisi seçer",
      ],
      aciklama: "CSPRNG'nin tanımı **sonraki bit testidir**: çıktıların bir kısmını gören saldırgan, sonraki biti yazı-tura atmaktan daha iyi tahmin edememelidir. Ayrıca iç durum ele geçirilse bile önceki çıktılar geri hesaplanamamalıdır.",
    },
    {
      ad: "isletim-sistemi",
      dy: true,
      soru: "Linux'ta ~getrandom()~ çağrısı ve ~/dev/urandom~, çekirdeğin donanım olaylarından topladığı entropiyle beslenen bir CSPRNG'den okur.",
      aciklama: "Doğru. Çekirdek kesme zamanlamaları, donanım üreteçleri (varsa RDRAND/RDSEED) gibi kaynaklardan entropi toplar, bunu bir CSPRNG'ye (Linux'ta ChaCha20 tabanlı) tohum yapar. Uygulamalar kendi üreteçlerini yazmak yerine bunu kullanmalıdır.",
    },
  ]),
  ...sorular(U, "u2-trng", [
    {
      ad: "kaynak",
      soru: "Aşağıdakilerden hangisi donanımda gerçek rastgelelik kaynağı olarak kullanılır?",
      secenekler: [
        "Bir direncin termal gürültüsü",
        "İşlemcinin saat frekansının sabit değeri",
        "Bellekteki bir dizinin uzunluğu",
        "Kullanıcının kayıtlı doğum tarihi",
      ],
      aciklama: "Termal (Johnson-Nyquist) gürültü, ters kutuplanmış bir eklemdeki çığ gürültüsü ve serbest çalışan osilatörlerin faz titreşimi (jitter) fiziksel olarak öngörülemeyen kaynaklardır. Ham çıktı yükseltilir, örneklenir ve sonra işlenir.",
    },
    {
      ad: "halka",
      zorluk: 2,
      soru: "Halka osilatörlü bir rastgele sayı üretecinde rastgeleliğin kaynağı nedir?",
      secenekler: [
        "Periyottaki gürültüden doğan zaman titreşimi",
        "Osilatördeki evirici sayısının her açılışta değişmesi",
        "Osilatörün frekansının yazılımla rastgele seçilmesi",
        "Besleme geriliminin her saniye bilerek değiştirilmesi",
      ],
      aciklama: "Tek sayıda eviriciden oluşan halka kendi kendine salınır. Transistörlerdeki gürültü her periyodu biraz kısaltır ya da uzatır; bu titreşim, kararlı başka bir saatle örneklenince öngörülemeyen bitler çıkar. FPGA'larda sık kullanılır.",
    },
    {
      ad: "isleme",
      dy: true,
      zorluk: 2,
      soru: "Gerçek bir donanım kaynağının ham bitleri genellikle doğrudan anahtar olarak kullanılmaz; önce sağlık testlerinden geçirilir ve bir hash ya da CSPRNG ile işlenir.",
      aciklama: "Doğru. Ham kaynak sapmalı (biased) olabilir, sıcaklıkla değişebilir ya da bozulabilir. Sağlık testleri kaynağın çalıştığını izler; şartlandırma (conditioning) adımı sapmayı giderip entropiyi yoğunlaştırır.",
    },
  ]),
  ...sorular(U, "u2-sapma", [
    {
      ad: "von-neumann",
      zorluk: 2,
      soru: "Von Neumann yöntemi, sapmalı bir bit kaynağının çıktısını ikişerli gruplara ayırır. Hangi kural uygulanır?",
      secenekler: [
        "01 ise 0, 10 ise 1 yazılır; 00 ve 11 atılır",
        "00 ise 0, 11 ise 1 yazılır; 01 ve 10 atılır",
        "İki bit her zaman XOR'lanıp tek bit yazılır",
        "Her grubun yalnız ilk biti yazılır",
      ],
      aciklama: "Bitler birbirinden bağımsızsa 01 ve 10 çiftlerinin olasılığı eşittir: $p(1-p) = (1-p)p$. Bu yüzden sonuç, kaynak ne kadar sapmalı olursa olsun dengeli çıkar; bedeli birçok bitin atılmasıdır.",
    },
    {
      ad: "von-neumann-hesap",
      etiket: "hesap",
      cevap: ["011", "0 1 1"],
      zorluk: 2,
      soru: "Ham kaynak şu 12 biti üretti: ~11 01 00 10 10 11~. Von Neumann yöntemi uygulanınca hangi bitler çıkar?",
      aciklama: "Çiftler tek tek: ~11~ atılır, ~01~ → 0, ~00~ atılır, ~10~ → 1, ~10~ → 1, ~11~ atılır.\n---\nSonuç ~011~: 12 bitten yalnız 3 bit kaldı.",
    },
    {
      ad: "insan",
      soru: "İnsanlardan elle \"rastgele\" 0 ve 1 yazmaları istenince yaygın olarak hangi hata görülür?",
      secenekler: [
        "Uzun aynı rakam dizilerinden kaçınıp çok sık değiştirirler",
        "Hep aynı rakamı yazıp hiç değiştirmezler",
        "Yalnız asal sayılara karşılık gelen desenler yazarlar",
        "Yazdıkları dizi her zaman bir önceki kişininkiyle aynı olur",
      ],
      aciklama: "Gerçek rastgele bir dizide 5-6 aynı bitlik koşular olağandır; insanlar bunları \"rastgele görünmüyor\" diye kaçınır. Koşu testi bu yüzden insan elinden çıkan dizileri kolayca yakalar.",
    },
    {
      ad: "test-kanit",
      dy: false,
      soru: "Bir üretecin çıktısı istatistiksel testlerin hepsinden geçiyorsa, o üreteç kriptografik olarak güvenlidir.",
      aciklama: "Yanlış. Testler yalnız belirgin kusurları yakalar. Sabit bir anahtarla çalışan AES-CTR'nin çıktısı bütün testlerden geçer ama anahtarı bilen herkes onu baştan sona üretebilir. Güvenlik, tasarımdan ve tohumun gizliliğinden gelir.",
    },
  ]),
  ...sorular(U, "u2-hatalar", [
    {
      ad: "debian",
      zorluk: 2,
      soru: "2006-2008 arasında bir Linux dağıtımında OpenSSL'e yapılan hatalı bir değişiklik, rastgele sayı üretecini yalnız süreç numarasıyla (PID) besler hale getirdi. Sonucu ne oldu?",
      secenekler: [
        "Üretilebilen anahtar sayısı birkaç on bine düştü; anahtarlar listelenip denenebildi",
        "Anahtarlar daha uzun oldu ve bağlantılar yavaşladı",
        "Üretilen anahtarların hiçbiri asal sayı içermediği için geçersiz oldu",
        "Yalnız sunucuların değil, istemcilerin de saatleri bozuldu",
      ],
      aciklama: "PID en fazla 32 768 değer alabildiği için her anahtar türünden yalnız birkaç on bin farklı anahtar üretilebildi. Saldırganlar bütün olası SSH ve TLS anahtarlarının listesini çıkardı. Algoritma sağlamdı; **rastgelelik** çöktü.",
    },
    {
      ad: "zaman-tohum",
      etiket: "hata-bul",
      soru: "Bir program şifreleme anahtarını, tohumu o anki saniye (Unix zamanı) olan bir PRNG ile üretiyor. Anahtarın yaklaşık hangi gün üretildiğini bilen bir saldırgan için durum nedir?",
      secenekler: [
        "Bir günde yalnız 86 400 saniye var; bütün tohumları dakikalar içinde dener",
        "Unix zamanı 64 bitlik olduğu için saldırgan 2^64 tohum denemek zorunda kalır",
        "Tohum her saniye değiştiği için anahtarı bulmak imkânsızdır",
        "Saldırgan programın kaynak kodunu bilmeden hiçbir şey yapamaz",
      ],
      aciklama: "Anahtarın entropisi tohumunkini geçemez. Bir günlük aralık yalnız $86\\,400 \\approx 2^{16{,}4}$ olasılık demektir; 128 bitlik anahtar, aslında 16 bitlik bir anahtar kadar güçlüdür. (Kerckhoffs ilkesi gereği kaynak kodun bilindiği varsayılır.)",
    },
    {
      ad: "anahtar-entropisi",
      dy: true,
      soru: "Bir anahtarın gerçek gücü, uzunluğuyla değil onu üreten kaynağın entropisiyle sınırlıdır.",
      aciklama: "Doğru. 256 bitlik bir anahtar 20 bitlik bir tohumdan türetildiyse saldırgan yalnız $2^{20}$ olasılığı dener. Bu yüzden anahtarlar işletim sisteminin CSPRNG'sinden üretilir.",
    },
  ]),
];
