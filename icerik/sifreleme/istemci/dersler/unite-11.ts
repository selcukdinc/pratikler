import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_11: Ders = {
  hafta: 11,
  baslik: "Eliptik Eğriler ve Dijital İmzalar",
  ozet: "Bugünkü bağlantıların neredeyse hepsi eliptik eğrilerle kurulur. Bir eğrinin üzerinde noktaları toplamayı önce geometriyle, sonra mod 97'de gör; ECDH'yi kur, gerçek Ed25519 imzası at ve aynı nonce'u iki kez kullanan bir imzacının özel anahtarını çıkar.",
  bolumler: [
    {
      baslik: "Eğri üzerinde nokta toplama",
      metin: md(`
Kriptografideki eliptik eğri bir elips değildir; şu biçimde bir denklemdir:

$$y^2 = x^3 + ax + b$$

Eğri x eksenine göre simetriktir. Asıl ilginç olan, eğrinin noktaları arasında tanımlanan bir **toplama** işlemidir:

- $P$ ve $Q$'dan bir doğru geçir. Kübik bir eğriyi doğru en çok üç noktada keser; üçüncü noktayı bul.
- O noktayı x eksenine göre yansıt. Sonuç $P + Q$'dur.
- $P = Q$ ise doğru yerine $P$'deki **teğeti** kullan: bu $2P$'dir (ikiye katlama).
- $P$ ile yansıması $-P$'den geçen doğru dikeydir ve üçüncü bir noktada kesmez. Bu toplamın sonucu **sonsuzdaki nokta** $O$ kabul edilir; sayılardaki 0 gibi etkisiz elemandır.

Noktaları ve eğrinin biçimini değiştir. Teğet düğmesiyle ikiye katlamayı gör:

[[G-S11-01]]

Bu kurallarla eğrinin noktaları bir **grup** oluşturur: toplama birleşmelidir, her noktanın tersi vardır. Kriptografi için gereken de budur.
`),
      dene: ["sf-u11-geometri", "sf-u11-sonsuz", "sf-u11-uzerinde"],
      lab: "egri-reel",
    },
    {
      baslik: "Sonlu cisimde eğri ve skaler çarpım",
      metin: md(`
Kriptografide eğri gerçek sayılarda değil, **mod p** tam sayılarda tanımlanır. Görüntü artık düzgün bir çizgi değil, bir nokta bulutudur. Toplama formülleri aynıdır; yalnız bölme yerine modüler ters kullanılır:

$$\\lambda = \\frac{y_Q - y_P}{x_Q - x_P}, \\quad x_3 = \\lambda^2 - x_P - x_Q, \\quad y_3 = \\lambda(x_P - x_3) - y_P \\pmod p$$

Bir noktayı kendisiyle $k$ kez toplamaya **skaler çarpım** denir: $kP = P + P + \\dots + P$. Aşağıdaki oyuncak eğride ($p = 97$) $k$'yi büyüttükçe $kP$'nin bulutta nasıl düzensizce sıçradığına bak:

[[G-S11-02]]

$kP$ hızlı hesaplanır: 3. ünitedeki kare al ve çarpın eğri versiyonu olan **çiftle ve topla**, $k$'nin bitlerini soldan sağa okur. Her bitte ikiye katlar, bit 1 ise $P$ ekler. 256 bitlik bir $k$ için birkaç yüz işlem yeter.

Ters yön ise zordur: $P$ ve $Q = kP$ verildiğinde $k$'yi bulmak **eliptik eğri ayrık logaritma problemidir** (ECDLP). Sayılardaki ayrık logaritmanın aksine bunun için alt-üstel bir algoritma bilinmez. En iyi saldırılar $\\sqrt{n}$ adım ister. Bu yüzden 256 bitlik bir eğri 128 bitlik güvenlik verir ve 3072 bitlik RSA ile denktir.

> **Matematiğe in:** Bir $P$ noktasının **mertebesi**, $kP = O$ olan en küçük $k$'dir. Oyuncak eğride 100 nokta var; her noktanın mertebesi 100'ü böler (Lagrange teoremi). Gerçek eğrilerde üreteç nokta, mertebesi büyük bir asal olacak biçimde seçilir. Böylece $k$ için $2^{256}$'ya yakın olasılık kalır.
`),
      dene: ["sf-u11-ikiye-katla", "sf-u11-ciftle-topla", "sf-u11-mertebe", "sf-u11-ecdlp"],
      lab: "egri-fp",
    },
    {
      baslik: "ECDH ve X25519",
      metin: md(`
Diffie-Hellman'ı eğriye taşımak kolaydır. Üs almanın yerini skaler çarpım alır:

- Herkes ortak bir $G$ noktasını bilir.
- Ayşe gizli $a$ seçer, $aG$ gönderir. Ali gizli $b$ seçer, $bG$ gönderir.
- Ayşe $a(bG)$, Ali $b(aG)$ hesaplar. İkisi de $abG$'dir.

Yukarıdaki şeklin ECDH kutusunda $a$ ve $b$'yi değiştir; iki tarafın her seferinde aynı noktaya ulaştığını gör.

Gerçek dünyada en yaygın eğri **Curve25519**'dur ve onun üzerindeki DH'ye **X25519** denir. Daniel J. Bernstein 2005'te bu eğriyi, uygulayanın hata yapmasını zorlaştıracak biçimde tasarladı:

- Açık anahtar 32 bayttır ve her 32 baytlık dizi geçerli bir anahtardır; "eğri üzerinde mi?" diye denetlemeyi unutmak açık yaratmaz.
- Formüllerde gizli değere bağlı dallanma yoktur; sabit zamanlı yazmak kolaydır.
- Parametreler açıkça gerekçelendirilmiştir. Kökeni belirsiz sabitlere duyulan güvensizlik (2013'te Dual_EC_DRBG'deki arka kapı, 2. ünite) bu tasarımın değerini artırdı.

TLS 1.3 bağlantıların çoğunu X25519 ile kurar. Kasım 2026 itibarıyla büyük tarayıcılar varsayılan olarak X25519'u kuantum sonrası ML-KEM ile birleştiren hibrit bir değişim kullanıyor (18. ünite).
`),
      dene: ["sf-u11-formul", "sf-u11-x25519-boy", "sf-u11-curve25519"],
    },
    {
      baslik: "Dijital imza",
      metin: md(`
MAC'in inkâr edilemezlik sağlamadığını 8. ünitede gördük: anahtarı iki taraf da bilir. **Dijital imza** rolleri ayırır:

- **Özel anahtarla imzalanır.** Yalnız sahibi imza atabilir.
- **Açık anahtarla doğrulanır.** Herkes doğrulayabilir.

İmza bütünlük, kimlik doğrulama ve inkâr edilemezlik sağlar, ama mesajı **gizlemez**. Uzun bir mesajın tamamı değil, SHA-256 özeti imzalanır; özetin çakışma direnci imzayı mesajın her baytına bağlar.

Aşağıdaki tezgah tarayıcının Web Crypto API'siyle gerçek bir Ed25519 anahtar çifti üretir (tarayıcın desteklemiyorsa ECDSA P-256). Mesajı imzala, sonra bir harfini değiştir:

[[G-S11-03]]

Tezgahın alt kısmındaki oyuncak örneğe şimdilik dokunma; son bölümde ona döneceğiz.
`),
      dene: ["sf-u11-roller", "sf-u11-inkar", "sf-u11-gizler-mi", "sf-u11-hashle-imzala"],
      lab: "imza",
    },
    {
      baslik: "ECDSA ve Ed25519",
      metin: md(`
Eliptik eğri imzalarının iki yaygın biçimi vardır.

**ECDSA** (1990'lar, NIST P-256 eğrisi) her imza için gizli ve rastgele bir **nonce** $k$ seçer:

1. $R = kG$ hesapla, $r$ onun x koordinatı olsun.
2. $s = k^{-1}(z + r d) \\bmod n$; burada $z$ mesajın özeti, $d$ özel anahtardır.
3. İmza $(r, s)$ çiftidir.

Doğrulayıcı açık anahtar $Q = dG$ ile bu denklemin tuttuğunu denetler. Her imzada $k$ değiştiği için aynı mesajın iki imzası farklıdır.

**Ed25519** (2011, Bernstein ve arkadaşları) Schnorr imzasının Curve25519 üzerindeki bir biçimidir. En önemli farkı, nonce'u **rastgele seçmemesidir**: özel anahtardan türetilen gizli bir önek ile mesajın hash'ini alır. Aynı mesaj aynı imzayı verir; farklı mesajlar farklı nonce verir. Kötü bir rastgele sayı üreteci imzayı bozamaz.

| | ECDSA P-256 | Ed25519 | RSA-2048 |
|---|---|---|---|
| Açık anahtar | 65 bayt (sıkıştırılınca 33) | 32 bayt | 256 bayt |
| İmza | 64 bayt | 64 bayt | 256 bayt |
| Nonce | rastgele | anahtardan ve mesajdan | yok |

İmzalar gündelik hayatın her yerindedir: telefonunun işletim sistemi bir güncellemeyi yüklemeden önce üreticinin imzasını doğrular, uygulama mağazaları paketleri imzalar, SSH sunucuları kimliklerini imzayla kanıtlar.
`),
      dene: ["sf-u11-rastgele-k", "sf-u11-ed25519-nonce", "sf-u11-imza-boy", "sf-u11-nerede"],
    },
    {
      baslik: "Aynı nonce iki kez: anahtar düşer",
      metin: md(`
ECDSA'nın en tehlikeli tuzağı nonce'tur. Aynı $k$ iki farklı mesajda kullanılırsa iki imzanın $r$'si aynı çıkar, ve saldırgan iki denklemi alt alta yazar:

$$s_1 k = z_1 + r d, \\qquad s_2 k = z_2 + r d$$

Çıkarınca $d$ yok olur: $k = (z_1 - z_2)(s_1 - s_2)^{-1} \\bmod n$. Sonra $d = (s_1 k - z_1) r^{-1} \\bmod n$. Özel anahtar birkaç satırlık cebirle ele geçer. İmza tezgahındaki oyuncak örnekte **Özel anahtarı çıkar** düğmesine bas ve bunu adım adım gör.

Bu bir kâğıt üstü saldırı değildir:

- **2010:** Bir oyun konsolu üreticisi yazılım imzalarında her seferinde aynı $k$'yi kullandı. fail0verflow ekibi imzaları karşılaştırdı, özel anahtarı çıkardı ve konsol herkesin yazılımını imzalı kabul eder hale geldi.
- **2013:** Android'in rastgele sayı üretecindeki bir hata bazı Bitcoin cüzdanlarının aynı $k$'yi tekrarlamasına yol açtı; cüzdanlardaki paralar çalındı.
- $k$'nin tamamen aynı olması da gerekmez. Birkaç bitinin sızması ya da tahmin edilebilir olması bile, yeterince imza toplanınca kafes (lattice) saldırılarıyla anahtarı verir. 2019'daki Minerva ve TPM-Fail çalışmaları bunu zamanlama ölçümleriyle gösterdi.

Savunma, nonce'u **deterministik** üretmektir: Ed25519 bunu baştan yapar, ECDSA için RFC 6979 aynı fikri uygular.

> **Gerçek dünyada nerede karşına çıkar:**
> - **SSH anahtarları:** ~ssh-keygen -t ed25519~ kısa ve hızlı anahtarlar üretir; GitHub ve çoğu sunucu bunu önerir.
> - **Passkeys (WebAuthn):** Cihazın ürettiği anahtar çifti genellikle ECDSA P-256'dır; girişte sunucunun meydan okumasını imzalar (9. ünite).
> - **Kripto paralar:** Bitcoin ve Ethereum işlemleri secp256k1 eğrisi üzerinde ECDSA (Bitcoin'de 2021'den beri Schnorr da) ile imzalanır. Cüzdan, özel anahtardan başka bir şey değildir.
> - **Yazılım ve paket imzaları:** Linux dağıtımlarının paket depoları, Android uygulama paketleri ve Git etiketleri imzalıdır. Açık kaynak dünyasında Sigstore, kısa ömürlü anahtarlarla imza atıp kayıtları herkese açık bir günlüğe yazar.
> - **Elektronik imza:** Türkiye'de nitelikli elektronik sertifikayla atılan e-imza, ıslak imzayla aynı hukuki etkiye sahiptir (5070 sayılı kanun).
`),
      dene: ["sf-u11-ps3", "sf-u11-neden-cikar", "sf-u11-korunma"],
    },
  ],
  test: ["sf-u11-k-bul", "sf-u11-ters", "sf-u11-tls-yaygin"],
};
