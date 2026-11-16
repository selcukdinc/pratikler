import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_18: Ders = {
  hafta: 18,
  baslik: "Post-kuantum kriptografi",
  ozet: "Büyük bir kuantum bilgisayar RSA'yı ve eliptik eğrileri kırar, AES'e ise pek dokunmaz. Bugün kaydedilen trafiğin neden şimdiden tehlikede olduğunu, gürültülü denklemlerin neden çözülemediğini ve tarayıcının her gün yaptığı hibrit el sıkışmayı oyuncak bir kafes şifresiyle gör.",
  bolumler: [
    {
      baslik: "Kuantum bilgisayar neyi kırar?",
      metin: md(`
Kuantum bilgisayar "her şeyi aynı anda dener" diye anlatılır; bu yanlıştır. Belirli matematik yapıları olan problemleri hızlandıran belirli algoritmalar vardır. Kriptografi için ikisi önemlidir:

- **Shor algoritması (1994):** Çarpanlara ayırmayı ve ayrık logaritmayı polinom zamanda çözer. RSA, Diffie-Hellman, ECDH, ECDSA ve Ed25519 bu problemlere dayandığı için **tamamen** kırılır; anahtarı büyütmek çare değildir.
- **Grover algoritması (1996):** Yapısı olmayan bir aramayı karekök kadar hızlandırır. $2^{128}$ adımlık kaba kuvvet $2^{64}$'e iner. AES-256 ve SHA-256 gibi uzun anahtar ve çıktılar yine güvende kalır.

[[G-S18-02]]

Kasım 2026 itibarıyla RSA-2048'i kırabilecek, hata düzeltmeli büyük bir kuantum bilgisayar yok. Ama gereken kübit sayısı tahminleri son yıllarda belirgin biçimde düştü ve devletler ile standart kuruluşları geçişi 2030'ların ortasına kadar bitirmeyi hedefliyor.
`),
      dene: ["sf-u18-shor", "sf-u18-grover", "sf-u18-simetrik", "sf-u18-bugun"],
      lab: "kuantum-etki",
    },
    {
      baslik: "Şimdi topla, sonra çöz",
      metin: md(`
Kuantum bilgisayar henüz yokken neden acele ediliyor? Çünkü saldırgan bugün şifreli trafiği **kaydedip** yıllar sonra çözebilir. TLS ya da mesajlaşma el sıkışmasındaki ECDH çözülünce, kaydedilmiş bütün içerik açılır. Buna "şimdi topla, sonra çöz" (harvest now, decrypt later) denir.

Michele Mosca bunu basit bir eşitsizlikle özetler:

$$x + y > z \\Rightarrow \\text{geç kaldın}$$

$x$ verinin gizli kalması gereken süre, $y$ sistemini dönüştürme süresi, $z$ büyük bir kuantum bilgisayara kalan süredir. Sağlık kayıtları, devlet yazışmaları ve kişisel mesajlar için $x$ on yıllarla ölçülür; bu yüzden tehdit kuantum bilgisayarın geldiği günden önce başlar.

İmzalar için durum farklıdır: geçmişte doğrulanmış bir imzayı yıllar sonra sahtelemek çoğu zaman işe yaramaz. Geçişin önce **anahtar değişiminden** başlaması bu yüzdendir.
`),
      dene: ["sf-u18-ne", "sf-u18-imza"],
    },
    {
      baslik: "Gürültülü denklemler: LWE",
      metin: md(`
Kuantum bilgisayara dayanıklı açık anahtarlı kriptografinin en başarılı ailesi **kafes** (lattice) problemlerine dayanır. Bunların en kullanışlısı, 2005'te Oded Regev'in tanımladığı **Learning With Errors** (LWE) problemidir.

Gizli bir $s$ vektörü düşün. Sana rastgele $a$ vektörleri ve $b = a \\cdot s \\bmod q$ değerleri verilse, yeterince denklemle $s$'yi Gauss elemesiyle hemen bulurdun. LWE'de her denkleme küçük bir **hata** eklenir:

$$b_i = a_i \\cdot s + e_i \\pmod q, \\qquad |e_i| \\text{ küçük}$$

Bu küçük gürültü her şeyi değiştirir. Eleme sırasında denklemler büyük sayılarla çarpılıp çıkarılır, hata da onlarla büyür ve sonuç rastgele bir yere savrulur. Aşağıda bunu dene: önce gürültüsüz denklemleri çöz, sonra gürültüyü açıp aynı yöntemi kullan:

[[G-S18-01]]

Küçük boyutta kaba kuvvet işe yarar: 3 bilinmeyen mod 97'de 912.673 aday. Ama ML-KEM'de bilinmeyen sayısı yüzlerce; en iyi bilinen klasik ve kuantum algoritmalar bile üstel zaman ister. Geometrik olarak problem, yüksek boyutlu bir kafeste hedef noktaya en yakın kafes noktasını bulmaktır.

> **Matematiğe in:** ML-KEM, LWE'nin **modül** hâlini kullanır: vektörlerin her elemanı tek bir sayı değil, $\\mathbb{Z}_q[x]/(x^{256}+1)$ halkasında 256 katsayılı bir polinomdur. Bu yapı anahtarları küçültür ve çarpmaları sayı kuramsal dönüşümle (NTT) hızlandırır.
`),
      dene: ["sf-u18-lwe", "sf-u18-gauss"],
      lab: "lwe",
    },
    {
      baslik: "ML-KEM",
      metin: md(`
NIST 2016'da başlattığı yarışmanın sonunda Ağustos 2024'te üç standart yayımladı: **FIPS 203 (ML-KEM)**, FIPS 204 (ML-DSA) ve FIPS 205 (SLH-DSA). ML-KEM'in eski adı Kyber'dir.

ML-KEM bir **anahtar kapsülleme mekanizmasıdır** (KEM): Diffie-Hellman gibi iki tarafın pay değiştirmesi yerine, Ayşe rastgele bir sır üretip Mert'in açık anahtarıyla "kapsüller", Mert gizli anahtarıyla açar. İskeleti şöyledir:

1. **Anahtar üretimi:** Mert rastgele bir $A$ matrisi ile küçük $s$ ve $e$ seçer, $t = A s + e$ hesaplar. Açık anahtar $(A, t)$, gizli anahtar $s$'dir. $t$'den $s$'yi bulmak LWE problemidir.
2. **Kapsülleme:** Ayşe küçük $r, e_1, e_2$ seçer ve $m$ sırrını $q/2$ ile ölçekleyip gürültünün arkasına gizler: $u = A^T r + e_1$, $v = t^T r + e_2 + \\lceil q/2 \\rfloor m$.
3. **Açma:** Mert $v - s^T u$ hesaplar. Geriye $\\lceil q/2 \\rfloor m$ ile küçük bir gürültü kalır; her katsayı 0'a mı $q/2$'ye mi yakın diye yuvarlanır.

Aşağıdaki oyuncak sürüm aynı adımları 16 katsayıyla yapıyor. Gürültüyü büyüttüğünde bazı bitlerin yanlış çözüldüğünü gör:

[[G-S18-03]]

Gerçek ML-KEM ayrıca katsayıları sıkıştırır ve **Fujisaki-Okamoto dönüşümüyle** şifreli metni açtıktan sonra yeniden şifreleyip karşılaştırır; böylece seçilmiş şifreli metin saldırılarına dayanır. En büyük pratik bedeli boydur: ML-KEM-768'in açık anahtarı 1184, şifreli metni 1088 bayttır; X25519'da ikisi de 32 bayttır.
`),
      dene: ["sf-u18-kem", "sf-u18-fips", "sf-u18-otuz-kat", "sf-u18-gurultu"],
      lab: "oyuncak-kem",
    },
    {
      baslik: "Post-kuantum imzalar",
      metin: md(`
İmzalar için iki standart öne çıkar:

- **ML-DSA** (FIPS 204, eski adı Dilithium): Kafes tabanlıdır, hızlıdır. ML-DSA-44'te açık anahtar 1312, imza 2420 bayttır (Ed25519'da 32 ve 64).
- **SLH-DSA** (FIPS 205, SPHINCS+): Yalnız hash fonksiyonlarına dayanır; 7. ünitedeki Merkle ağaçlarından kurulur. Güvenlik varsayımı en muhafazakâr olandır, ama imzalar 8-50 KB'tır. Uzun ömürlü kök anahtarlar ve yazılım güncellemeleri için uygundur.

İmzalarda geçiş anahtar değişiminden daha zordur. Bir TLS sertifika zincirinde birden çok imza ve açık anahtar bulunur; her bağlantıya onlarca kilobayt eklemek yavaş ağlarda hissedilir. Sertifikaları küçültmek için yeni yöntemler (ör. Merkle ağacıyla toplu sertifikalar) üzerinde çalışılıyor.
`),
      dene: ["sf-u18-mldsa", "sf-u18-slh", "sf-u18-sertifika"],
    },
    {
      baslik: "Hibrit anahtar değişimi",
      metin: md(`
ML-KEM yeni bir algoritmadır. Yarışmanın son turuna kalan adaylardan SIKE, 2022'de sıradan bir dizüstü bilgisayarla bir saatte kırıldı. Bu yüzden geçiş **hibrit** yapılıyor: X25519 ve ML-KEM birlikte çalışır ve iki sır birleştirilip KDF'den geçirilir:

$$K = \\text{KDF}(ss_{\\text{ML-KEM}} \\,\\|\\, ss_{\\text{X25519}} \\,\\|\\, \\text{döküm})$$

Saldırganın anahtara ulaşması için ikisini birden kırması gerekir: kuantum bilgisayar X25519'u kırsa ML-KEM, ML-KEM'de bir zayıflık bulunsa X25519 korur.

TLS'te bu grubun adı **X25519MLKEM768**'dir. İstemcinin payı $1184 + 32 = 1216$ bayt, sunucunun payı $1088 + 32 = 1120$ bayttır. Bu, ClientHello mesajını tek bir ağ paketine sığmayacak kadar büyütür; geçişin ilk aylarında bazı eski ağ cihazları büyük el sıkışmalarda takıldı ve düzeltilmek zorunda kaldı.
`),
      dene: ["sf-u18-neden", "sf-u18-birlestirme"],
    },
    {
      baslik: "Gerçek ürünlerde geçiş",
      metin: md(`
Geçiş, bir algoritmayı değiştirmekten daha büyük bir iştir: anahtar boyları değişir, protokol mesajları büyür, donanım hızlandırıcıları yenilenir. Algoritmaların koda gömüldüğü sistemler en çok zorlanır. **Kriptografik çeviklik**, algoritmanın kod yerine yapılandırmayla değiştirilebilmesi demektir ve bir sonraki geçişi kolaylaştırır.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Tarayıcılar:** Chrome, Firefox ve Safari X25519MLKEM768'i varsayılan olarak sunuyor; Kasım 2026 itibarıyla büyük içerik dağıtım ağlarına giden bağlantıların önemli bir kısmı bu hibrit grupla kuruluyor. 12. ünitedeki TLS el sıkışmasının tek farkı anahtar paylarının boyudur.
> - **Signal:** 2023'te X3DH'nin yerine PQXDH'yi getirdi (13. ünite); 2025'te Double Ratchet'e post-kuantum bir cırcır ekleyerek konuşmanın devamını da korumaya başladı.
> - **iMessage:** Apple 2024'te PQ3 protokolüyle hem ilk anahtar kurulumuna hem de düzenli anahtar yenilemelerine ML-KEM ekledi.
> - **SSH:** OpenSSH'nin güncel sürümleri varsayılan olarak hibrit post-kuantum anahtar değişimi kullanıyor.
> - **Devlet takvimleri:** ABD'nin ulusal güvenlik sistemleri için belirlenen takvim yeni sistemlerde post-kuantum algoritmaları 2027'den itibaren şart koşuyor; Avrupa'daki yol haritaları kritik altyapıda geçişin 2030'a kadar tamamlanmasını öneriyor.
`),
      dene: ["sf-u18-tls", "sf-u18-signal", "sf-u18-cevik"],
    },
  ],
  test: ["sf-u18-mosca", "sf-u18-kaba", "sf-u18-boy"],
};
