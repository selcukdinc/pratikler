import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_10: Ders = {
  hafta: 10,
  baslik: "RSA ve Diffie-Hellman",
  ozet: "Hiç karşılaşmamış iki kişi, herkesin dinlediği bir hattan nasıl ortak bir sır kurar? Boya karıştırarak Diffie-Hellman'ı, küçük sayılarla RSA'yı kur; sonra dinleyici, ortadaki adam ve çarpanlara ayıran saldırgan ol.",
  bolumler: [
    {
      baslik: "Anahtar dağıtım sorunu",
      metin: md(`
5-6. ünitelerdeki AES ve ChaCha20 hızlı ve güvenlidir, ama iki tarafın **aynı anahtarı** bilmesini ister. Bir web sitesine ilk kez bağlandığında o anahtarı nereden bulacaksın? Kuryeyle mi göndereceksin?

Sorun ölçeklenince büyür. $n$ kişinin her ikilisi ayrı bir anahtar paylaşacaksa $n(n-1)/2$ anahtar gerekir: 100 kişide 4950, bir milyar internet kullanıcısında hesaplanamayacak kadar çok. 1970'lere kadar askerî ve diplomatik ağlar bu yüzden anahtar kitaplarını elden dağıtıyordu.

1976'da Whitfield Diffie ve Martin Hellman çığır açan bir fikir yayımladı: **açık anahtarlı kriptografi**. Her kişinin iki anahtarı vardır:

- **Açık anahtar** herkese verilir. Bir posta kutusunun yarığı gibidir: herkes mektup atabilir.
- **Özel anahtar** yalnız sahibindedir. Kutunun kapağını açan anahtardır.

Bu düzen bir **tek yönlü kapı fonksiyonuna** dayanır: bir yönde hesaplaması kolay, ters yönde gizli bilgi olmadan çok zor olan bir işlem. Bu ünitede iki klasik örneği göreceğiz: modüler üs alma (ayrık logaritma) ve büyük sayıları çarpma (çarpanlara ayırma).
`),
      dene: ["sf-u10-sorun", "sf-u10-cift-sayisi", "sf-u10-acik-ozel"],
    },
    {
      baslik: "Boya karıştırarak Diffie-Hellman",
      metin: md(`
Diffie-Hellman anahtar değişimi bir sırrı **göndermeden** iki tarafta aynı anda üretir. En sevilen benzetme boya karıştırmaktır:

1. Ayşe ile Ali herkesin bildiği bir ortak renkte anlaşır (sarı).
2. Her biri kimseye söylemediği bir gizli renk seçer.
3. Ortak rengi kendi gizli rengiyle karıştırıp karışımı **açıkça** gönderir.
4. Karşıdan gelen karışıma kendi gizli rengini ekler.

İkisinin elinde de "sarı + Ayşe'nin rengi + Ali'nin rengi" olur. Karıştırmanın sırası önemsizdir. Hattı dinleyen yalnız sarıyı ve iki karışımı görür. Onları birleştirse bile içinde iki kat sarı olan farklı bir renk elde eder. Karışımı bileşenlerine ayırmak zordur.

Gizli renkleri değiştir ve iki tarafın her seferinde aynı renge ulaştığını gör:

[[G-S10-01]]

Ortadaki adam kutusuna şimdilik dokunma; ona dördüncü bölümde döneceğiz.
`),
      dene: ["sf-u10-dh-neden", "sf-u10-dh-A"],
      lab: "dh-renk",
    },
    {
      baslik: "Sayılarla Diffie-Hellman ve ayrık logaritma",
      metin: md(`
Gerçek protokolde boyanın yerini **modüler üs alma** alır (3. ünite). Herkese açık bir büyük asal $p$ ve bir üreteç $g$ seçilir.

- Ayşe gizli $a$'yı seçer, $A = g^a \\bmod p$ gönderir.
- Ali gizli $b$'yi seçer, $B = g^b \\bmod p$ gönderir.
- Ayşe $B^a$, Ali $A^b$ hesaplar. İkisi de $g^{ab} \\bmod p$'dir.

Dinleyici $p$, $g$, $A$ ve $B$'yi bilir. $g^{ab}$'yi bulmak için $a$ ya da $b$'yi çıkarması gerekir: $g^a \\bmod p$'den $a$'yı bulmak **ayrık logaritma problemidir**. Gerçek sayılarda $\\log$ kolaydır, çünkü $g^x$ düzgün büyür. Mod $p$'de ise değerler saat kadranında rastgele dolaşır; bir değerin ne kadar "büyük" olduğu üs hakkında bir şey söylemez.

Aşağıda önce oyuncak $p = 23$ ile başla, sonra $p$'yi büyüt ve dinleyicinin denemesinin nasıl uzadığına bak:

[[G-S10-02]]

Deneme sayısı $p$ ile birlikte büyür. 2048 bitlik bir $p$'de $2^{2048}$ olasılık vardır. Kaba kuvvetten çok daha akıllı algoritmalar (sayı cismi kalburu) bilinse de 2048 bitlik bir grupta bile yaklaşık 112 bitlik iş gerekir.
`),
      dene: ["sf-u10-tanim", "sf-u10-kucuk", "sf-u10-dh-sir"],
      lab: "dh-sayilar",
    },
    {
      baslik: "Ortadaki adam",
      metin: md(`
Diffie-Hellman dinleyiciye karşı güvenlidir, ama bir şeyi sağlamaz: **kiminle** konuştuğunu. Hatta yalnız dinlemeyen, mesajları değiştirebilen bir saldırgan (**ortadaki adam**, MITM) şunu yapar:

- Ayşe'nin $A$'sını yakalar ve Ali'ye kendi $M$'sini gönderir.
- Ali'nin $B$'sini yakalar ve Ayşe'ye yine $M$'yi gönderir.
- Ayşe saldırganla, Ali de saldırganla ayrı bir sır kurmuş olur. Saldırgan her mesajı çözer, okur, istersen değiştirir ve yeniden şifreleyip iletir.

İki taraf da şifreli konuştuğunu sanar ve bir şey fark etmez. Yukarıdaki boya deneyine dön ve **Hatta ortadaki adam var** kutusunu işaretle: Ayşe ile Ali'nin "ortak" renkleri artık farklı.

Çözüm, değişimi bir **kimliğe bağlamaktır**:

- Sunucu DH değerini, kimliği bir sertifikayla doğrulanan anahtarıyla **imzalar** (TLS, 12. ünite).
- İki kişi ortak sırrın kısa bir parmak izini başka bir kanaldan karşılaştırır (Signal'in güvenlik numaraları, 13. ünite).
`),
      dene: ["sf-u10-mitm", "sf-u10-mitm-farkli"],
    },
    {
      baslik: "RSA",
      metin: md(`
1977'de Ron Rivest, Adi Shamir ve Leonard Adleman, açık anahtarla **şifrelemenin** ve **imzalamanın** ilk pratik yolunu buldu. Anahtar üretimi 3. ünitedeki araçlarla yapılır:

1. İki büyük asal $p$ ve $q$ seç, $n = pq$ hesapla.
2. $\\varphi(n) = (p-1)(q-1)$ hesapla.
3. $\\varphi(n)$ ile aralarında asal bir $e$ seç (çoğunlukla 65537).
4. $d = e^{-1} \\bmod \\varphi(n)$ hesapla (genişletilmiş Öklid).

Açık anahtar $(n, e)$, özel anahtar $d$'dir. Şifreleme ve çözme iki üs almadır:

$$c = m^e \\bmod n \\qquad m = c^d \\bmod n$$

Neden çalışır? $ed \\equiv 1 \\pmod{\\varphi(n)}$ olduğu için $(m^e)^d = m^{1 + k\\varphi(n)} \\equiv m \\pmod n$ (Euler teoremi).

Tezgahta önce küçük bir $n$ üret, bir sayı şifrele ve çöz. Sonra saldırgan kutusunda $n$'i çarpanlarına ayır: $p$ ve $q$ çıkınca $\\varphi(n)$ ve $d$ hemen gelir.

[[G-S10-03]]

$n$'i büyüttükçe deneme bölmesinin süresi her 2 bitte iki katına çıkar. Tablodaki 2048 bitlik tahmin, RSA'nın neden bu kadar uzun anahtarlar kullandığını gösterir.

> **Matematiğe in:** $e = 65537 = 2^{16} + 1$ seçilmesinin nedeni hızdır. Kare al ve çarp yöntemiyle 16 kare ve tek bir çarpma yeter. $d$ ise $n$ ile aynı boydadır; çözme ve imzalama bu yüzden şifrelemeden çok daha yavaştır. Uygulamalar Çin kalan teoremiyle ayrı ayrı mod $p$ ve mod $q$ hesaplayarak bunu dört kat kadar hızlandırır.
`),
      dene: ["sf-u10-n", "sf-u10-phi", "sf-u10-d", "sf-u10-sifrele", "sf-u10-e-65537"],
      lab: "rsa",
    },
    {
      baslik: "Ders kitabı RSA neden yetmez",
      metin: md(`
Yukarıdaki $c = m^e \\bmod n$ haline **ders kitabı RSA** denir ve olduğu gibi kullanılmaz. Üç ciddi sorunu vardır:

- **Deterministiktir.** Aynı mesaj her seferinde aynı şifreli metni verir. Açık anahtar herkeste olduğu için saldırgan olası mesajları ("EVET", "HAYIR") kendisi şifreler ve karşılaştırır.
- **Değiştirilebilir.** $E(m_1) \\cdot E(m_2) = E(m_1 m_2)$. Saldırgan şifreli metni $2^e$ ile çarparsa çözülen mesaj iki katına çıkar; anahtarı bilmesine gerek yoktur.
- **Küçük mesajlar sızar.** $e = 3$ ve $m^3 < n$ ise mod hiç devreye girmez; $c$'nin küpkökü $m$'yi verir.

Çözüm, şifrelemeden önce mesajı rastgelelik ve hash'lerle karıştıran bir **dolgudur**: **OAEP**. İmzada ise aynı işi **PSS** yapar. Eski PKCS#1 v1.5 dolgusu Daniel Bleichenbacher'in 1998'de gösterdiği saldırıya açıktır: sunucunun "dolgu hatalı" yanıtlarını kullanarak şifreli metin adım adım çözülür. 2017'deki ROBOT çalışması bu 19 yıllık saldırının hâlâ birçok büyük sitede işe yaradığını gösterdi.

Pratikte RSA ile uzun veri de şifrelenmez. RSA (ya da DH) yalnız rastgele bir AES anahtarını taşır, veriyi AES-GCM şifreler. Bu düzene **hibrit şifreleme** denir.
`),
      dene: ["sf-u10-deterministik", "sf-u10-carpimsal", "sf-u10-oaep"],
    },
    {
      baslik: "Çarpanlara ayırma ve anahtar boyu",
      metin: md(`
RSA'nın güvenliği büyük bir $n = pq$'yi çarpanlarına ayırmanın zorluğuna dayanır. Çarpmak kolaydır, çarpanlara ayırmak zordur. Bilinen en hızlı yöntem olan **sayı cismi kalburu** deneme bölmesinden kat kat hızlıdır, ama yine de alt-üsteldir. Akademik rekorlar bunu gösterir: 2020'de 829 bitlik RSA-250 yaklaşık 2700 çekirdek-yıllık hesapla ayrıldı.

Bu yüzden RSA ve klasik DH, simetrik şifrelerden çok daha uzun anahtarlar ister:

| Güvenlik | Simetrik | RSA / DH | Eliptik eğri |
|---|---|---|---|
| 112 bit | 3DES (artık kullanılmıyor) | 2048 bit | 224 bit |
| 128 bit | AES-128 | 3072 bit | 256 bit |
| 256 bit | AES-256 | 15360 bit | 512 bit |

Eliptik eğrilere karşı alt-üstel bir algoritma bilinmediği için aynı güvenlik çok daha kısa anahtarla sağlanır (11. ünite). Bu iki ailenin de ortak zayıflığı vardır: yeterince büyük bir kuantum bilgisayarda **Shor algoritması** hem çarpanlara ayırmayı hem ayrık logaritmayı hızlıca çözer. Kuantum sonrası geçiş 18. ünitenin konusudur.

> **Gerçek dünyada nerede karşına çıkar:**
> - **HTTPS:** Bugün TLS bağlantılarının neredeyse hepsi anahtarı eliptik eğri Diffie-Hellman'la (X25519) kurar; RSA çoğunlukla yalnız sertifika imzasında kalır.
> - **SSH:** ~ssh-keygen -t rsa~ hâlâ yaygın; ama yeni anahtarlar için varsayılan önerilen tür Ed25519'dur.
> - **E-posta ve dosya şifreleme:** PGP ve S/MIME, rastgele bir oturum anahtarını alıcının RSA ya da eliptik eğri açık anahtarıyla sarar.
> - **Akıllı kartlar ve kimlik kartları:** Birçok ülkenin elektronik kimlik kartı ve banka kartı içindeki çipte bir RSA ya da eliptik eğri anahtarı taşır; özel anahtar çipten hiç çıkmaz.
> - **Eski sistemler:** 1024 bitlik RSA anahtarları ve 2017'de ortaya çıkan ROCA açığı (bir kart üreticisinin asal üretim hatası) bazı kimlik kartlarının toplu olarak yenilenmesine yol açtı.
`),
      dene: ["sf-u10-guvenlik", "sf-u10-boyut", "sf-u10-rsa250"],
    },
  ],
  test: ["sf-u10-dh-dinleyici", "sf-u10-kir"],
};
