import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_14: Ders = {
  hafta: 14,
  baslik: "Gruplar, cihazlar ve metadata",
  ozet: "İki kişilik sohbeti korumayı öğrendik. Peki yüz kişilik grup, aynı kişinin üç cihazı, buluttaki sohbet yedeği ve içerik şifreliyken bile sızan \"kim, kime, ne zaman\" bilgisi? Uçtan uca şifrelemenin gerçek dünyadaki en zor problemlerini dene.",
  bolumler: [
    {
      baslik: "Gruplarda Sender Keys",
      metin: md(`
Double Ratchet iki kişi içindir. Bir grubu en basit haliyle kurmanın yolu, her üyeyle ayrı bir ikili oturum açıp her mesajı herkes için ayrı şifrelemektir. 100 kişilik bir grupta bu, tek bir mesaj için 99 şifreleme ve 99 kopya demektir.

**Sender Keys** yöntemi bunu ucuzlatır. Her üye gruba katılınca kendine bir **gönderen zinciri** üretir ve bu zincirin anahtarını öteki üyelere ikili oturumlar üzerinden **bir kez** gönderir. Sonraki her mesajını bu zincirle bir kez şifreler; sunucu aynı şifreli metni herkese dağıtır. Zincir her mesajda simetrik cırcırla ilerler, böylece ileri gizlilik korunur.

Bedeli iki yerde ödenir:

- **Üye çıkınca:** Çıkan üye herkesin zincirini bilir. Kalan her üye yeni bir zincir üretip ötekilere göndermek zorundadır. $n$ üyeli grupta bu kabaca $(n-1)(n-2)$, yani $n^2$ mertebesinde anahtar mesajıdır.
- **Ele geçirme sonrası güvenlik yoktur:** Zincirde DH cırcırı olmadığı için, çalınan bir gönderen anahtarı sahibi onu yenileyene kadar o kişinin bütün mesajlarını açar.

WhatsApp ve Signal gruplarda bugün bu yönteme benzer yapılar kullanıyor.
`),
      dene: ["sf-u14-ikili", "sf-u14-nasil", "sf-u14-pcs-yok"],
    },
    {
      baslik: "MLS ve TreeKEM",
      metin: md(`
**MLS** (Messaging Layer Security), gruplar için uçtan uca anahtar yönetimini standartlaştıran protokoldür; 2023'te RFC 9420 olarak yayımlandı. Hedefi, binlerce kişilik gruplarda bile ileri gizlilik ve ele geçirme sonrası güvenliği ucuza sağlamaktır.

Çekirdeğindeki fikir **TreeKEM**'dir. Üyeler bir ikili ağacın yapraklarına yerleşir. Her iç düğümün bir anahtar çifti vardır ve o düğümün özel anahtarını yalnız **altındaki üyeler** bilir. Kök düğümün sırrını herkes bilir ve grup anahtarı ondan türetilir.

Bir üye anahtarını güncellemek ya da birini çıkarmak istediğinde yaprağından köke giden yoldaki düğümlerin sırlarını yeniler. Her yeni sırrı, yolun **kardeş** alt ağacının açık anahtarına bir kez şifreler: o alt ağaçtaki herkes tek şifrelemeyle yeni sırrı öğrenir. Toplam iş üye sayısıyla değil, onun **logaritmasıyla** büyür:

$$1024 \\text{ üye} \\Rightarrow \\log_2 1024 = 10 \\text{ düğüm}$$

Aşağıda bir yaprağa tıklayarak üyeyi gruptan çıkar. Turuncu yol yenilenen düğümlerdir ve çıkan üye bunların hiçbirini bilmez. Altta Sender Keys ile maliyet karşılaştırması var:

[[G-S14-01]]

Değişiklikler **commit** adlı mesajlarla yapılır ve her commit grubun yeni bir **dönemini** (epoch) başlatır. Üyeler grubun kim olduğu konusunda hep aynı görüşü paylaşır; sunucu birine farklı bir üye listesi gösteremez.

> **Matematiğe in:** Gerçek MLS ağaçlarında boş yapraklar ve "kesilmiş" düğümler olabilir; ağaç her zaman dengeli değildir ve en kötü durumda güncelleme daha pahalıdır. Yine de ortalama maliyet $\\log n$ civarında kalır.
`),
      dene: ["sf-u14-log", "sf-u14-standart", "sf-u14-agac"],
      lab: "grup",
    },
    {
      baslik: "Çoklu cihaz",
      metin: md(`
Çoğu kişi aynı hesabı telefonda, bilgisayarda ve tablette kullanır. Uçtan uca şifrelemede anahtarlar cihazdadır, dolayısıyla her cihazın **kendi anahtarı** vardır ve "Mert'e mesaj göndermek" aslında "Mert'in bütün cihazlarına ve kendi öteki cihazlarıma göndermek" demektir.

Ayşe'nin 3, Mert'in 2 cihazı varsa Ayşe telefonundan yazdığı mesaj 4 cihaz için ayrı şifrelenir: Mert'in iki cihazı ve Ayşe'nin kendi öteki iki cihazı. Sunucu yalnız şifreli kopyaları dağıtır.

Buradaki en büyük risk, **sahte cihazdır**. Cihaz listesini sunucu tuttuğu için kötü niyetli bir sunucu "Mert yeni bir cihaz ekledi" deyip kendi anahtarını listeye koyabilir; bundan sonra herkes o anahtara da şifreler. Bu yüzden:

- Yeni cihaz, **mevcut bir cihazdan onaylanır** (telefondaki kamerayla bilgisayardaki QR kodunu okutmak gibi).
- Karşı tarafa "yeni cihaz eklendi" ya da "güvenlik kodu değişti" bildirimi gider.
- Anahtar şeffaflığı günlükleri cihaz listesindeki değişiklikleri de denetlenebilir kılar.
`),
      dene: ["sf-u14-yeni-cihaz"],
    },
    {
      baslik: "Yedekler: en zayıf halka",
      metin: md(`
Mükemmel bir Double Ratchet, sohbetin **şifresiz** bir kopyası bulutta duruyorsa hiçbir şey ifade etmez. Uzun yıllar boyunca en yaygın uçtan uca şifreli uygulamaların sohbet yedekleri bulut sağlayıcısında sağlayıcının okuyabileceği biçimde saklandı; içeriği isteyen biri uygulamaya değil, buluta gidiyordu.

**Uçtan uca şifreli yedekte** yedek, sağlayıcının bilmediği bir anahtarla şifrelenir. Anahtarın kaynağı iki türlüdür:

- **Rastgele bir kurtarma anahtarı:** Örneğin 64 haneli bir kod. Çok güçlüdür, ama kullanıcı kaybederse yedek de kaybolur.
- **Kullanıcının parolası:** Hatırlaması kolaydır, ama kısa bir parolayla korunan yedek, ele geçirilirse **çevrimdışı kaba kuvvete** açıktır. 9. ünitedeki yavaş KDF'ler bu yüzden burada da kullanılır. Bazı sistemler anahtarı, deneme sayısını sınırlayan donanım güvenlik modüllerinde saklar: on yanlış denemeden sonra anahtar kalıcı olarak silinir.

Mesajlaşma simülatöründe yedeği "Bulutta, şifresiz" yap ve "Yedek" rolüne bak: Double Ratchet açık olsa bile bütün sohbet okunur. "Parolayla şifreli" seçeneği ise yedeği yeniden kilitler.
`),
      dene: ["sf-u14-zayif-halka", "sf-u14-parola-riski"],
    },
    {
      baslik: "Metadata: içerik şifreliyken ne sızar?",
      metin: md(`
Uçtan uca şifreleme **içeriği** korur. Ama sunucu mesajı teslim etmek için **kime** gideceğini bilmek zorundadır; ayrıca ne zaman geldiğini ve kaç bayt olduğunu da görür. Bu bilgilere **metadata** (üst veri) denir.

Metadata tek başına zararsız görünür. Bir araya gelince değil:

- Gece 3'te bir hastanenin psikiyatri servisindeki bir doktorla başlayan yazışma,
- bir boşanma avukatıyla haftada birkaç kez yazışan biri,
- bir habercinin, bir kurumdaki tek bir çalışanla haber yayımlanmadan önceki günlerde yoğunlaşan yazışmaları.

Bir istihbarat örgütünün eski yöneticisinin "Metadata'ya bakarak insanları öldürüyoruz" sözü bu yüzden çok alıntılanır. Aşağıdaki dedektif oyununda yalnız sunucunun gördüğü kayıtlara bakarak kimin kiminle ne hakkında konuştuğunu tahmin et:

[[G-S14-02]]

Metadata'yı azaltmanın yolları, içeriği şifrelemekten çok daha zordur:

- **Dolgu:** Mesajları sabit boylara yuvarlamak, boydan içerik tahminini zorlaştırır.
- **Gizli gönderen:** Gönderenin kimliğini sunucudan saklar (sonraki bölüm).
- **Karışım ağları ve Tor:** Mesajları birçok aracıdan geçirip zamanlamayı karıştırır; kim kime yazdı ilişkisini koparır, ama gecikme ve maliyet ekler.
- **Az kayıt tutmak:** En güvenilir yöntem, sunucunun gerekmeyen hiçbir kaydı saklamamasıdır. Signal, mahkeme kararıyla istenen bilgiye karşılık yalnız hesabın açılış tarihini ve son bağlanma zamanını verebildiğini yayımlıyor.
`),
      dene: ["sf-u14-ne", "sf-u14-e2ee-gizler-mi"],
      lab: "metadata",
    },
    {
      baslik: "Gizli gönderen ve kişi keşfi",
      metin: md(`
**Gizli gönderen** (sealed sender), Signal'in 2018'de eklediği bir özelliktir. Gönderen, kendi kimliğini ve kimliğini kanıtlayan kısa bir sertifikayı mesajla birlikte, **alıcının** anahtarıyla şifrelenmiş bir zarfın içine koyar. Sunucu zarfı açamaz: alıcıyı ve zamanı görür, ama göndereni görmez. Kötüye kullanımı sınırlamak için yalnız kişinin rehberindeki ya da önceden izin verdiği kişiler bu şekilde mesaj gönderebilir.

Gizleme tam değildir. Sunucu IP adreslerini ve zamanları ilişkilendirerek, özellikle bir mesajın hemen ardından ters yönde gelen "okundu" bilgisinden, göndereni çoğu zaman tahmin edebilir. Yine de kaydedilen veri azalır.

**Kişi keşfi** de benzer bir sorundur: uygulama, rehberindeki numaralardan hangilerinin kullanıcı olduğunu bulmak ister. Rehberi sunucuya yüklemek, bütün sosyal çevreni sunucuya vermek demektir. Numaraların tuzsuz hash'ini göndermek de işe yaramaz: telefon numarası uzayı yaklaşık $10^{10}$ elemanlıdır ve tek bir GPU bütün olası numaraları saniyeler içinde hash'ler (9. ünite). Signal bu eşleştirmeyi, sunucu işletmecisinin bile içini göremediği bir donanım **güvenli bölgesinde** (enclave) yapar. Kullanıcı adları ise numarayı hiç paylaşmadan konuşmaya imkân verir; Signal bunu 2024'te ekledi.

> **Gerçek dünyada nerede karşına çıkar:**
> - **WhatsApp ve Signal grupları:** Sender Keys'e dayanan grup şifrelemesi milyarlarca kişinin grup sohbetini korur.
> - **RCS mesajları:** Telefonların SMS'in yerine geçen mesajlaşma standardı, farklı üreticilerin telefonları arasında uçtan uca şifreleme için MLS'i benimsedi; geçiş Kasım 2026 itibarıyla sürüyor.
> - **Kurumsal sohbet ürünleri:** Birkaç büyük iş mesajlaşma ve video toplantı ürünü uçtan uca şifreli toplantılarda MLS ya da benzeri ağaç tabanlı anahtar yönetimi kullanıyor.
> - **Sohbet yedekleri:** WhatsApp 2021'den beri isteğe bağlı uçtan uca şifreli yedek sunuyor; açmak kullanıcıya kalmış.
> - **"Bağlı cihazlar" ekranı:** Hesabına bağlı her cihazı burada görürsün. Tanımadığın bir cihaz varsa konuşmaların başka bir yerde de okunuyor olabilir.
`),
      dene: ["sf-u14-ne-saklar", "sf-u14-rehber"],
    },
  ],
  test: ["sf-u14-cikinca", "sf-u14-hash-yetmez", "sf-u14-kac-sifreleme"],
};
