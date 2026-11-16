// 10. ünite (Açık anahtar): anahtar dağıtım sorunu, Diffie-Hellman, ayrık logaritma,
// ortadaki adam, oyuncak sayılarla RSA, ders kitabı RSA'nın açıkları ve OAEP, çarpanlara
// ayırma ve anahtar boyu. Sayısal cevaplar sorular.test.ts'te oyuncak RSA ve DH ile sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 10;

export const unite10: Soru[] = [
  ...sorular(U, "u10-dagitim", [
    {
      ad: "sorun",
      soru: "Simetrik şifrelemenin \"anahtar dağıtım sorunu\" nedir?",
      secenekler: [
        "İki taraf ortak anahtarı önceden güvenli bir yoldan paylaşmalıdır",
        "Simetrik anahtarlar çok uzun olduğu için ağda taşınamaz",
        "Her mesaj için yeni bir algoritma seçilmesi gerekir",
        "Anahtarı yalnız bir kişi bilebilir, öteki çözemez",
      ],
      aciklama: "AES hızlı ve güvenlidir ama iki tarafın aynı anahtarı bilmesini ister. Hiç karşılaşmamış iki kişi (sen ve bir web sitesi) bu anahtarı nasıl paylaşacak? $n$ kişinin her ikilisi için ayrı anahtar $n(n-1)/2$ eder. Açık anahtarlı kriptografi bu sorunu çözmek için doğdu.",
    },
    {
      ad: "cift-sayisi",
      sayi: [4950],
      soru: "100 kişilik bir ekipte her iki kişinin kendine ait bir simetrik anahtarı olsun. Toplam kaç anahtar gerekir?",
      aciklama: "Her ikili için bir anahtar: $\\binom{100}{2} = \\frac{100 \\cdot 99}{2} =$ **4950**. Açık anahtarlı sistemde ise her kişinin bir anahtar çifti yeter: 100 çift.",
    },
    {
      ad: "acik-ozel",
      dy: true,
      soru: "Açık anahtarlı şifrelemede herkes açık anahtarla şifreleyebilir, ama yalnız özel anahtarın sahibi çözebilir.",
      aciklama: "Doğru. Açık anahtar bir posta kutusunun yarığı gibidir: herkes mektup atar, yalnız anahtarı olan açar. İmzada roller ters döner: özel anahtarla imzalanır, açık anahtarla herkes doğrular (11. ünite).",
    },
  ]),
  ...sorular(U, "u10-dh", [
    {
      ad: "dh-A",
      sayi: [8],
      soru: "Diffie-Hellman'da herkese açık değerler $p = 23$, $g = 5$. Ayşe gizli sayısı olarak $a = 6$ seçiyor. Ali'ye göndereceği $A = g^a \\bmod p$ kaçtır?",
      aciklama: "$5^2 = 25 \\equiv 2$, $5^4 \\equiv 2^2 = 4$, $5^6 = 5^4 \\cdot 5^2 \\equiv 4 \\cdot 2 =$ **8** (mod 23).",
    },
    {
      ad: "dh-sir",
      zorluk: 2,
      sayi: [2],
      soru: "Aynı örnekte Ali $b = 15$ seçip $B = 19$ gönderiyor. Ayşe'nin hesapladığı ortak sır $B^a \\bmod p = 19^6 \\bmod 23$ kaçtır?",
      aciklama: "$19 \\equiv -4$ (mod 23). $(-4)^2 = 16$, $(-4)^4 = 256 \\equiv 3$, $(-4)^6 = 3 \\cdot 16 = 48 \\equiv$ **2**.\n---\nAli de $A^b = 8^{15} \\bmod 23$ ile aynı sonuca ulaşır, çünkü ikisi de $g^{ab}$'dir.",
    },
    {
      ad: "dh-neden",
      soru: "Diffie-Hellman'da iki taraf neden aynı sırra ulaşır?",
      secenekler: [
        "$(g^b)^a = (g^a)^b = g^{ab}$; üs almanın sırası önemsizdir",
        "İki taraf da gizli sayısını öbürüne şifreli olarak gönderir",
        "Sunucu iki tarafa da aynı rastgele sırrı dağıtır",
        "Ortak sır $p$ ile $g$'nin çarpımıdır ve herkes bilir",
      ],
      aciklama: "Ayşe $B^a = g^{ab}$, Ali $A^b = g^{ab}$ hesaplar. Dinleyici yalnız $g^a$ ve $g^b$'yi görür; ikisinden $g^{ab}$'yi bulmak için $a$ ya da $b$'yi bilmesi gerekir. Boya karıştırma benzetmesinde karışımı ayrıştırmak zordur.",
    },
    {
      ad: "dh-dinleyici",
      etiket: "ctf",
      zorluk: 2,
      sayi: [2],
      soru: "Hattı dinliyorsun: $p = 23$, $g = 5$, $A = 8$, $B = 19$. Küçük sayılar olduğu için $a$'yı deneyerek bul ve ortak sırrı hesapla.",
      aciklama: "$5^1, 5^2, \\dots$ mod 23 değerlerini sırayla hesapla: 5, 2, 10, 4, 20, **8**. Yani $a = 6$.\n---\nOrtak sır $B^a = 19^6 \\bmod 23 =$ **2**. Gerçek sistemlerde $p$ en az 2048 bit olduğu için bu deneme imkânsızdır.",
    },
  ]),
  ...sorular(U, "u10-ayrik-log", [
    {
      ad: "tanim",
      soru: "Ayrık logaritma problemi nedir?",
      secenekler: [
        "$g$, $p$ ve $g^x \\bmod p$ bilinirken $x$'i bulmak",
        "$n = pq$ bilinirken $p$ ve $q$'yu bulmak",
        "Bir sayının mod $p$'deki tersini bulmak",
        "$\\log_2 n$ değerini tam sayı olarak hesaplamak",
      ],
      aciklama: "Gerçek sayılarda $\\log$ kolaydır, çünkü $g^x$ düzgün büyür. Mod $p$'de ise değerler rastgele dolaşır; büyük $p$ için bilinen en iyi algoritmalar bile alt-üstel zaman ister. Diffie-Hellman'ın güvenliği buna dayanır.",
    },
    {
      ad: "kucuk",
      sayi: [6],
      soru: "$2^x \\equiv 9 \\pmod{11}$ eşitliğini sağlayan en küçük pozitif $x$ kaçtır?",
      aciklama: "Kuvvetleri sırayla hesapla: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16 \\equiv 5$, $2^5 \\equiv 10$, $2^6 \\equiv 20 \\equiv$ **9**. Küçük $p$'de deneme hemen biter; 2048 bitlik $p$'de denenecek $2^{2048}$ değer vardır.",
    },
  ]),
  ...sorular(U, "u10-mitm", [
    {
      ad: "mitm",
      zorluk: 2,
      soru: "Kimlik doğrulamasız Diffie-Hellman'a karşı ortadaki adam nasıl başarılı olur?",
      secenekler: [
        "İki tarafla ayrı ayrı DH yapar; her birine öteki gibi görünür ve mesajları çözüp aktarır",
        "Dinlediği $A$ ve $B$ değerlerinden ortak sırrı doğrudan hesaplar",
        "Açık değer $g$'yi değiştirerek iki tarafın farklı sırlara ulaşmasını sağlar ve iletişimi keser",
        "DH'nin ortak sırrı tahmin edilebilir olduğu için tahmin eder",
      ],
      aciklama: "DH yalnız \"kiminle konuştuğunu bilmeden\" ortak sır üretir. Saldırgan Ayşe'ye Ali, Ali'ye Ayşe gibi davranır ve iki ayrı sır kurar. Çözüm, değişimi kimlikle bağlamaktır: sunucunun sertifikalı anahtarıyla imzalanmış DH (TLS, 12. ünite) ya da karşılaştırılan güvenlik numaraları (Signal, 13. ünite).",
    },
    {
      ad: "mitm-farkli",
      dy: true,
      soru: "Ortadaki adam saldırısı sırasında Ayşe ile Ali'nin hesapladığı \"ortak sırlar\" aslında birbirinden farklıdır.",
      aciklama: "Doğru. Ayşe'nin sırrı saldırganla, Ali'ninki de saldırganla ortaktır. Ayşe ile Ali sırlarının bir parmak izini başka bir kanaldan (yüz yüze, telefonla) karşılaştırsa saldırı ortaya çıkar. Güvenlik numaralarının mantığı budur.",
    },
  ]),
  ...sorular(U, "u10-rsa", [
    {
      ad: "n",
      sayi: [187],
      soru: "Oyuncak RSA'da $p = 11$ ve $q = 17$ seçiliyor. $n$ kaçtır?",
      aciklama: "$n = p \\cdot q = 11 \\cdot 17 =$ **187**. $n$ açık anahtarın parçasıdır; $p$ ve $q$ gizli kalmalıdır.",
    },
    {
      ad: "phi",
      sayi: [160],
      soru: "Aynı örnekte ($p = 11$, $q = 17$) $\\varphi(n) = (p-1)(q-1)$ kaçtır?",
      aciklama: "$\\varphi(187) = 10 \\cdot 16 =$ **160**. $\\varphi(n)$'i hesaplamak için $p$ ve $q$'yu bilmek gerekir; RSA'nın gizliliği buradan gelir.",
    },
    {
      ad: "d",
      zorluk: 2,
      sayi: [23],
      soru: "$\\varphi(n) = 160$ ve $e = 7$ ise özel üs $d = e^{-1} \\bmod \\varphi(n)$ kaçtır?",
      aciklama: "$7d \\equiv 1 \\pmod{160}$ eşitliğini arıyoruz. Genişletilmiş Öklid ya da deneme: $7 \\cdot 23 = 161 = 160 + 1$.\n---\nSonuç: $d =$ **23**.",
    },
    {
      ad: "sifrele",
      zorluk: 2,
      sayi: [11],
      soru: "Açık anahtar $(n, e) = (187, 7)$. $m = 88$ mesajı $c = m^e \\bmod n$ ile şifrelenince $c$ kaçtır?",
      aciklama: "Kare al ve çarp: $88^2 = 7744 \\equiv 77$, $88^4 \\equiv 77^2 = 5929 \\equiv 132$ (mod 187).\n---\n$88^7 = 88^4 \\cdot 88^2 \\cdot 88 \\equiv 132 \\cdot 77 \\cdot 88$. $132 \\cdot 77 = 10164 \\equiv 66$, $66 \\cdot 88 = 5808 \\equiv$ **11**.",
    },
    {
      ad: "kir",
      etiket: "ctf",
      zorluk: 3,
      sayi: [88],
      soru: "Yakaladığın şifreli mesaj $c = 11$, açık anahtar $(n, e) = (187, 7)$. $n$'i çarpanlarına ayır, özel anahtarı bul ve mesajı çöz.",
      aciklama: "$187 = 11 \\cdot 17$ (küçük asallarla bölmeyi dene).\n---\n$\\varphi = 10 \\cdot 16 = 160$, $d = 7^{-1} \\bmod 160 = 23$.\n---\n$m = 11^{23} \\bmod 187 =$ **88**. Bütün güvenlik $n$'in çarpanlarına ayrılamamasına dayanır.",
    },
    {
      ad: "e-65537",
      soru: "Gerçek RSA anahtarlarında açık üs $e$ için neden çoğunlukla 65537 seçilir?",
      secenekler: [
        "Asaldır ve ikilik yazımında yalnız iki 1 biti olduğu için şifreleme hızlıdır",
        "Özel üs $d$'nin de 65537 olmasını sağlar",
        "En büyük 17 bitlik sayı olduğu için en güvenlisidir",
        "Her $\\varphi(n)$ ile aralarında asal olması garanti olan tek sayıdır",
      ],
      aciklama: "$65537 = 2^{16} + 1$; kare al ve çarp yöntemiyle 16 kare ve 1 çarpma yeter. Çok küçük $e$ (ör. 3) ders kitabı RSA'da açıklara yol açtığı için 65537 bir orta yoldur. $d$ ise $n$ kadar büyük ve gizlidir.",
    },
  ]),
  ...sorular(U, "u10-rsa-dolgu", [
    {
      ad: "deterministik",
      etiket: "hata-bul",
      soru: "Bir oylama uygulaması oyları ders kitabı RSA'yla ($c = m^e \\bmod n$) şifreliyor; oy \"EVET\" ya da \"HAYIR\". Sorun nedir?",
      secenekler: [
        "Aynı oy hep aynı şifreli metni verir, iki seçenek denenip eşleştirilir",
        "RSA yalnız sayıları şifreleyebildiği için metin oylar bozulur",
        "Şifreli oylar açık metinden kısa kaldığı için oyun bir kısmı kaybolur",
        "Ders kitabı RSA hiç çözülemeyen şifreli metin üretir",
      ],
      aciklama: "Ders kitabı RSA deterministiktir ve açık anahtar herkestedir. Saldırgan \"EVET\" ve \"HAYIR\"ı kendisi şifreler ve oylarla eşleştirir. Gerçek RSA şifrelemesi **OAEP** dolgusuyla her seferinde rastgelelik ekler.",
    },
    {
      ad: "carpimsal",
      zorluk: 3,
      soru: "Ders kitabı RSA'da $E(m_1) \\cdot E(m_2) \\bmod n$ neye eşittir?",
      secenekler: ["$m_1 m_2 \\bmod n$ çarpımının şifresine", "$m_1 + m_2$ toplamının şifresine", "$m_1 - m_2$ farkının şifresine", "Rastgele bir değere; bağıntı yoktur"],
      aciklama: "$m_1^e \\cdot m_2^e = (m_1 m_2)^e$. Saldırgan şifreli metni bilinen bir sayının şifresiyle çarparak açık metni öngörülebilir biçimde değiştirebilir. Bu **değiştirilebilirlik** de dolgunun yok ettiği bir özelliktir.",
    },
    {
      ad: "oaep",
      soru: "RSA şifrelemede bugün hangi dolgu kullanılmalıdır?",
      secenekler: ["OAEP", "Dolgu gerekmez", "PKCS#7", "Sıfır baytlarla tamamlama"],
      aciklama: "OAEP (Optimal Asymmetric Encryption Padding) mesajı rastgele bir değer ve hash'lerle karıştırır. Eski PKCS#1 v1.5 dolgusu Bleichenbacher'in 1998 saldırısına açıktır; 2017'de ROBOT çalışması bunun hâlâ birçok sunucuda işe yaradığını gösterdi. PKCS#7 blok şifrelerin dolgusudur.",
    },
  ]),
  ...sorular(U, "u10-carpan", [
    {
      ad: "guvenlik",
      soru: "RSA'nın güvenliği hangi problemin zorluğuna dayanır?",
      secenekler: ["$n = pq$ sayısını çarpanlarına ayırmanın", "Ayrık logaritma bulmanın", "Hash çakışması bulmanın", "Büyük asal sayı üretmenin"],
      aciklama: "$p$ ve $q$ bulunursa $\\varphi(n)$ ve ardından $d$ hemen hesaplanır. Asal üretmek ise kolaydır (olasılıklı asallık testleri). Çarpmak kolay, çarpanlara ayırmak zor: tek yönlü kapı.",
    },
    {
      ad: "boyut",
      zorluk: 2,
      soru: "Yaklaşık 128 bitlik güvenlik için hangi anahtar boyları denk kabul edilir?",
      secenekler: ["RSA 3072 bit, eliptik eğri 256 bit", "RSA 128 bit, eliptik eğri 128 bit", "RSA 1024 bit, eliptik eğri 512 bit", "RSA 256 bit, eliptik eğri 3072 bit"],
      aciklama: "Çarpanlara ayırmanın alt-üstel algoritmaları (sayı cismi kalburu) olduğu için RSA çok daha uzun anahtar ister. Eliptik eğri ayrık logaritmasına karşı bilinen en iyi saldırı karekök kadardır: 256 bit, 128 bitlik güvenlik verir. RSA-2048 yaklaşık 112 bittir.",
    },
    {
      ad: "rsa250",
      dy: true,
      soru: "829 bitlik RSA-250 sayısı 2020'de akademik bir ekip tarafından çarpanlarına ayrıldı.",
      aciklama: "Doğru. Yaklaşık 2700 çekirdek-yıllık hesapla. 2048 bitlik bir anahtar bunun çok ötesindedir; ama yeterince büyük bir kuantum bilgisayar (Shor algoritması) RSA'yı ve eliptik eğrileri kırar. Geçiş 18. ünitenin konusu.",
    },
  ]),
];
