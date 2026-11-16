import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_13: Ders = {
  hafta: 13,
  baslik: "Uçtan uca şifreleme ve Double Ratchet",
  ozet: "Sunucu mesajlarını taşısın ama okuyamasın. Çevrimdışı birine nasıl şifreli mesaj gönderildiğini, her mesajda anahtarın nasıl değiştiğini ve telefonun çalınması halinde bile eski ve yeni mesajların nasıl korunduğunu gerçek anahtarlarla izle.",
  bolumler: [
    {
      baslik: "TLS ile uçtan uca arasındaki fark",
      metin: md(`
12. ünitedeki TLS, telefonunla sunucu arasındaki **yolu** korur. Mesajın sunucuya varınca ne olduğu TLS'in konusu değildir: sunucu TLS'i açar, mesajı düz metin olarak görür, veritabanına yazar ve alıcıya giden ayrı bir TLS bağlantısıyla iletir. Sunucunun yöneticisi, veritabanını sızdıran biri ya da sunucuya resmi bir talep gönderen kurum mesajları okuyabilir.

**Uçtan uca şifrelemede** (E2EE) anahtarlar yalnız konuşan kişilerin cihazlarındadır. Sunucu yine mesajı taşır, ama elindeki şey yalnız şifreli baytlardır. Ağdaki dinleyici ise iki katmanı birden görür: dışta TLS, içte uçtan uca şifreli zarf.

Bu, kulağa kolay gelir: "Ayşe ile Mert bir anahtar üzerinde anlaşsın, gerisi AES-GCM". Ama gerçek bir mesajlaşma uygulamasının çözmesi gereken sorular bundan çok daha zordur:

- Mert çevrimdışıyken Ayşe ilk mesajı nasıl şifreler?
- Ayşe'nin aldığı anahtarın Mert'in olduğundan nasıl emin olur?
- Telefon bugün çalınırsa geçen ayın mesajları ne olur? Yarının mesajları ne olur?
- Mesajlar sırasız ya da hiç gelmezse ne olur?

Bu ünite bu soruların Signal protokolündeki cevaplarını anlatır. Aynı protokol, ayrıntıları değişerek, dünyada milyarlarca kişinin kullandığı uygulamalarda çalışıyor.

> Menüdeki **Mesajlaşma simülatörü** bu ünitenin oyun alanıdır. Koruma düzeyini "Yalnız TLS"den "Uçtan uca, Double Ratchet"e çevir ve sunucu sütununda nelerin kaybolduğuna bak.
`),
      dene: ["sf-u13-fark", "sf-u13-neyi-korur", "sf-u13-sunucu-ne-gorur"],
    },
    {
      baslik: "Kimlik anahtarı ve ön anahtarlar",
      metin: md(`
Diffie-Hellman iki tarafın aynı anda çevrimiçi olmasını ister: herkes kendi payını gönderir, karşı tarafınkini bekler. Mesajlaşmada ise Mert'in telefonu kapalı olabilir. Signal'in çözümü, her kullanıcının sunucuya **önceden** anahtar bırakmasıdır:

- **Kimlik anahtarı** ($IK$): Uzun ömürlüdür; uygulama kurulurken üretilir. Kişinin kriptografik kimliğidir.
- **İmzalı ön anahtar** ($SPK$): Orta ömürlüdür; birkaç haftada bir yenilenir ve kimlik anahtarıyla **imzalanır**. İmza, sunucunun bu anahtarı kendi anahtarıyla değiştiremeyeceğini garanti eder.
- **Tek kullanımlık ön anahtarlar** ($OPK$): Yüzlerce tane yüklenir. Her yeni oturumda biri kullanılır ve sunucudan silinir. Bittiğinde oturum yalnız imzalı ön anahtarla da kurulabilir.

Ayşe, Mert'e ilk kez yazmak istediğinde sunucudan Mert'in **ön anahtar paketini** ($IK_M$, $SPK_M$, imza ve varsa bir $OPK_M$) ister. Mert'in çevrimiçi olmasına gerek kalmaz.
`),
      dene: ["sf-u13-neden", "sf-u13-tek-kullanimlik", "sf-u13-imzali"],
    },
    {
      baslik: "X3DH: dört Diffie-Hellman",
      metin: md(`
Ayşe kendine yeni bir **geçici anahtar** ($EK_A$) üretir ve Mert'in paketiyle dört ayrı DH hesabı yapar:

| Hesap | Ayşe'nin anahtarı | Mert'in anahtarı | Ne katar? |
|---|---|---|---|
| DH1 | kimlik $IK_A$ | imzalı ön anahtar $SPK_M$ | Ayşe'nin kimliği |
| DH2 | geçici $EK_A$ | kimlik $IK_M$ | Mert'in kimliği |
| DH3 | geçici $EK_A$ | imzalı ön anahtar $SPK_M$ | ileri gizlilik |
| DH4 | geçici $EK_A$ | tek kullanımlık $OPK_M$ | tekrar oynatmaya karşı ek koruma |

Dört çıktı art arda eklenip HKDF'den geçirilir ve ortak bir **kök anahtar** çıkar. Mert çevrimiçi olunca Ayşe'nin ilk mesajındaki $IK_A$ ve $EK_A$ ile aynı hesapları kendi tarafından yapar ve aynı anahtara ulaşır.

Aşağıda dört hesap Web Crypto anahtarlarıyla gerçekten yapılıyor. Tek kullanımlık ön anahtarı kapatıp açarak sonucun nasıl değiştiğine bak:

[[G-S13-02]]

Dikkat edilecek bir nokta: X3DH'de **imza yoktur**. Kimlik, DH1 ve DH2'nin içinde doğrulanır: kimlik anahtarının özel yarısını bilmeyen biri aynı sırrı hesaplayamaz. Bunun hoş bir yan etkisi vardır: Mert, Ayşe'nin mesajı yazdığından emindir, ama bunu üçüncü bir kişiye kanıtlayamaz, çünkü aynı dökümü kendisi de üretebilirdi. Buna **inkâr edilebilirlik** denir; 11. ünitedeki imzaların tam tersidir.

> **Matematiğe in:** Signal 2023'te X3DH'nin yerine **PQXDH**'yi getirdi: dört DH hesabına bir de ML-KEM kapsüllemesi eklenir. Böylece bugün kaydedilen ilk el sıkışmalar, gelecekte büyük bir kuantum bilgisayarla da açılamaz (18. ünite).
`),
      dene: ["sf-u13-dh-sayisi", "sf-u13-kimlik-dogrulama", "sf-u13-inkar"],
      lab: "x3dh",
    },
    {
      baslik: "Simetrik cırcır",
      metin: md(`
Kök anahtar ortak olunca en kolay yol, bütün mesajları aynı AES anahtarıyla şifrelemek olurdu. Ama o anahtar bir gün çalınırsa **bütün geçmiş** açılır. Signal bunun yerine her mesaj için yeni bir anahtar türetir.

Bir **zincir anahtarı** $CK$ tutulur. Her mesajda iki şey hesaplanır:

$$MK = \\text{HMAC}(CK, \\texttt{0x01}) \\qquad CK' = \\text{HMAC}(CK, \\texttt{0x02})$$

$MK$ bu mesajı şifreler ve hemen silinir. $CK$'nin yerine $CK'$ geçer, eski değer de silinir. HMAC tek yönlü olduğu için $CK'$'den $CK$'ye geri dönülemez. Bu yapıya **cırcır** (ratchet) denir: dişli yalnız ileri döner.

Aşağıdaki dişliler gerçek bir oturumun değerlerini gösteriyor. Her tıklamada bir mesaj gönderilir; tabloda o mesajın zincir anahtarı, mesaj anahtarı ve ağda görünen şifreli baytlar var:

[[G-S13-01]]

Zincirdeki 4. mesajın anahtarına ulaşmak için zincir üç kez ilerlemiş olmalıdır: $CK_0 \\to CK_1 \\to CK_2 \\to CK_3$ ve $MK_4 = \\text{HMAC}(CK_3, 1)$. Bugün $CK_3$'ü çalan biri $MK_1$, $MK_2$ ve $MK_3$'e ulaşamaz.
`),
      dene: ["sf-u13-adim", "sf-u13-neden-sil"],
      lab: "circir",
    },
    {
      baslik: "DH cırcırı ve kök anahtar",
      metin: md(`
Simetrik cırcır geçmişi korur, ama geleceği korumaz: bugün $CK_3$'ü çalan biri $CK_4$, $CK_5$ ve sonraki her şeyi kendisi hesaplayabilir. Bunu kırmak için zincire saldırganın bilmediği **taze bir sır** katılmalıdır.

Double Ratchet'in ikinci çarkı budur. Her mesaj başlığında gönderenin güncel **DH açık anahtarı** bulunur. Konuşma sırası değiştiğinde, yani Mert Ayşe'nin mesajına cevap yazdığında:

1. Mert yeni bir DH anahtar çifti üretir.
2. Kendi yeni özel anahtarıyla Ayşe'nin son açık anahtarı arasında DH hesaplar.
3. Bu çıktıyı ve mevcut kök anahtarı HKDF'ye verir; çıkan 64 baytın ilk yarısı **yeni kök anahtar**, ikinci yarısı yeni bir **gönderme zinciri** olur.
4. Yeni açık anahtarını mesaj başlığına koyar.

Ayşe başlıktaki anahtarı görünce aynı DH'yi kendi tarafında hesaplar ve aynı kök anahtara ulaşır. Böylece her "konuşma turu" yeni bir DH değişimidir; simetrik cırcır ise aynı turdaki art arda mesajları ilerletir. Cırcır dişlisi şeklinde DH dönüşleri ayrı bir sütunda işaretlidir.
`),
      dene: ["sf-u13-ne-zaman", "sf-u13-kok"],
    },
    {
      baslik: "İleri gizlilik ve ele geçirme sonrası güvenlik",
      metin: md(`
İki çarkın birlikte verdiği iki özellik, modern mesajlaşmanın en önemli kavramlarıdır:

- **İleri gizlilik** (forward secrecy): Bugün çalınan oturum durumu **dünkü** mesajları açamaz. Simetrik cırcır ve silinen anahtarlar bunu sağlar.
- **Ele geçirme sonrası güvenlik** (post-compromise security, PCS): Saldırgan bugün oturum durumunu çalsa bile, bir sonraki DH dönüşünden sonra **yarının** mesajlarını okuyamaz. Saldırganın göremediği taze bir DH özel anahtarı karışır ve oturum kendiliğinden **iyileşir**.

İyileşmenin bir şartı vardır: saldırgan yalnız dinlemelidir. Çaldığı durumla konuşmaya kendisi katılır, kendi DH anahtarlarını gönderirse taraflardan birinin yerine geçmiş olur ve iyileşme gerçekleşmeyebilir. Bu yüzden uygulamalar yeni cihaz eklenmesini ve güvenlik numarası değişikliklerini kullanıcıya bildirir.

Mesajlaşma simülatöründe "Telefon (kilidi açık)" rolünü seç ve zaman çizelgesinde çalınma gününü kaydır. Double Ratchet açıkken çalınmadan önceki mesajlar kilitli kalır, sonraki birkaç mesaj okunur ve ilk DH dönüşünden sonra yeniden kilitlenir. Koruma düzeyini "Uçtan uca, sabit anahtar" yaptığında ise çizelgenin tamamı kırmızıya döner.
`),
      dene: ["sf-u13-fs", "sf-u13-pcs"],
    },
    {
      baslik: "Sırası karışan mesajlar",
      metin: md(`
Mobil ağlarda mesajlar sırayla gelmeyebilir. Her mesaj başlığı, gönderenin DH açık anahtarını, zincirdeki **sıra numarasını** ve bir önceki zincirin uzunluğunu taşır.

Mert 5. mesajı 3. mesajdan önce alırsa zinciri 5'e kadar ilerletir, ama yolda üretilen 3. ve 4. mesaj anahtarlarını bir süreliğine **atlanan anahtarlar** tablosunda saklar. 3. mesaj gelince anahtarı oradan alınır ve hemen silinir. Bu tablo kötüye kullanılmasın diye sınırlıdır: bir saldırgan "1.000.000. mesaj" yazan sahte bir başlık gönderip alıcıya milyon anahtar hesaplatamaz.

Signal ayrıca başlıkları da şifreleyebilir (başlık şifreleme); böylece ağı dinleyen kişi sıra numaralarından konuşmanın ritmini çıkaramaz.
`),
      dene: ["sf-u13-atlanan"],
    },
    {
      baslik: "Güvenlik numarası",
      metin: md(`
Bütün bu yapı, Ayşe'nin aldığı kimlik anahtarının gerçekten Mert'in olmasına dayanır. Anahtarları sunucu dağıttığı için kötü niyetli ya da baskı altındaki bir sunucu araya kendi anahtarını koyabilir: 10. ünitedeki ortadaki adam, bu kez sunucunun kendisidir.

Signal iki kişinin kimlik anahtarlarından **60 basamaklı bir güvenlik numarası** türetir (ya da aynı bilgiyi taşıyan bir QR kodu). Numara iki taraf için aynıdır. Ayşe ile Mert yan yana gelip ya da bir telefon görüşmesinde numaraları karşılaştırırsa araya giren her anahtar yakalanır. Aşağıdaki oyunda sunucu bazen gizlice araya giriyor; numaralara bakıp yakalayabilir misin?

[[G-S13-03]]

Kullanıcıların çok azı numaraları gerçekten karşılaştırır. Yine de bu seçeneğin var olması önemlidir: sunucu kimin karşılaştıracağını bilemez, yakalanma riski de sahte anahtar dağıtmayı pahalı kılar. Bunu daha da otomatik yapmak için **anahtar şeffaflığı** (key transparency) geliştirildi: 12. ünitedeki Certificate Transparency gibi, kimlik anahtarları herkese açık ve yalnız eklenebilen bir günlüğe yazılır, uygulama kendi anahtarının günlükte doğru göründüğünü sessizce denetler. WhatsApp 2023'te bu yöntemi kullanmaya başladı.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Signal, WhatsApp ve Google Mesajlar:** Üçü de Signal protokolünü kullanır. Birebir sohbetler varsayılan olarak uçtan uca şifrelidir.
> - **"Güvenlik kodun değişti" mesajı:** Karşındaki kişi telefonunu değiştirdiğinde ya da uygulamayı yeniden kurduğunda görünür. Çoğu zaman zararsızdır, ama önemli bir konuşmadan önce başka bir kanaldan teyit etmek iyi bir alışkanlıktır.
> - **Facebook Messenger:** Kişisel sohbetlerde uçtan uca şifreleme Aralık 2023'te varsayılan oldu.
> - **Telegram:** Varsayılan sohbetler uçtan uca **değildir**; yalnız elle açılan "gizli sohbetler" öyledir ve grupta yoktur. Simülatörde bunu 19. ünitenin vaka incelemesinde göreceksin.
> - **E-posta:** PGP ve S/MIME uçtan uca şifreleme sunar, ama ileri gizlilik yoktur: özel anahtar çalınırsa yıllarca biriken bütün e-postalar açılır.
`),
      dene: ["sf-u13-neyi-yakalar", "sf-u13-degisti"],
      lab: "guvenlik-no",
    },
  ],
  test: ["sf-u13-etkin", "sf-u13-kac-adim", "sf-u13-basamak"],
};
