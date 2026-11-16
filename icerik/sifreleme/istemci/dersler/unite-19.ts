import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_19: Ders = {
  hafta: 19,
  baslik: "Vaka çalışmaları ve tasarım",
  ozet: "Gerçek uygulamaların \"uçtan uca şifreli\" yazısının arkasında ne olduğunu oku, sonra iki ürün için tehdit modeli kurup mimari seç. Son olarak Web Crypto çağrılarını kendin yaz.",
  bolumler: [
    {
      baslik: "Bir ürünün güvenlik özelliklerini okumak",
      metin: md(`
Önceki ünitelerde her parçayı ayrı ayrı gördün: uçtan uca şifreleme, cırcır, yedek, metadata, çoklu cihaz. Gerçek bir uygulamanın güvenliği bu parçaların **hepsinin birlikte** nasıl ayarlandığına bağlıdır. "Uçtan uca şifreli" yazısı yalnız birinci sütunu söyler.

Bir ürünü değerlendirirken şu soruları sor:

- Uçtan uca şifreleme **varsayılan** mı, yoksa ayrıca açılması mı gerekiyor?
- Bir anahtar çalınırsa geçmiş ve gelecek mesajlar ne olur (ileri gizlilik, iyileşme)?
- Yedek kimin anahtarıyla şifreli?
- Sunucu kimin kime yazdığını görüyor mu?
- Yeni bir cihaz eklenince ne oluyor?

[[G-S19-01]]

Tablodaki her satır mesajlaşma simülatöründe **hazır ayar** olarak açılır. Hazır ayarı seçip "Saldırgan gözü"nde rolleri dolaş: WhatsApp ile Signal arasındaki farkın büyük kısmı şifrelemede değil, yedekte ve metadata'dadır. WhatsApp ile iMessage ise simülatörde aynı görünür; aralarındaki farklar (anahtar şeffaflığı, PQ3) modelin ayarlarına düşmez. Bir model her ayrıntıyı taşımaz, notları da oku.

> **Not:** Bu bilgiler Kasım 2026 itibarıyladır. Ürünler sık değişir; bir uygulamanın güncel durumu için kendi güvenlik belgesine bak.
`),
      dene: ["sf-u19-yedek", "sf-u19-e2ee-yedek", "sf-u19-gonderen"],
      lab: "vakalar",
    },
    {
      baslik: "Telegram: aynı uygulamada iki ayrı model",
      metin: md(`
Telegram'da iki tür sohbet vardır ve güvenlik özellikleri tamamen farklıdır:

- **Bulut sohbetleri** (varsayılan, bütün gruplar ve kanallar): istemci ile sunucu arası şifrelidir, uçtan uca değildir. Mesajlar sunucuda şirketin anahtarıyla saklanır. Bu sayede her cihazdan bütün geçmişe ulaşılır ve büyük gruplar kolayca çalışır. Simülatörde "yalnız TLS, anahtarlar sunucuda" ile aynıdır: sunucu yöneticisi içeriği okur.
- **Gizli sohbet:** elle başlatılır, iki kişiliktir ve yalnız o iki cihazda yaşar. Sunucu içeriği göremez; ama sohbet bilgisayardaki uygulamada görünmez ve yedeklenmez. Anahtar 100 mesajda ya da bir haftada bir yenilenir; bu, her mesajda dönen cırcırdan daha kaba bir ileri gizliliktir.

Buradaki ders, Telegram'ın iyi ya da kötü olması değil: **kullanım kolaylığı ile gizlilik arasındaki ödünleşimin** iki ucunu tek uygulamada görmek. Çoklu cihaz, sınırsız geçmiş ve büyük gruplar sunucuya içerik erişimi verilerek kolaylaşır; uçtan uca şifrelemeyle bunları yapmak (14. ünitedeki çoklu cihaz ve MLS) çok daha fazla mühendislik ister.
`),
      dene: ["sf-u19-varsayilan", "sf-u19-grup", "sf-u19-bedel", "sf-u19-yenileme"],
    },
    {
      baslik: "Şifreli e-posta neden yaygınlaşmadı?",
      metin: md(`
E-postayı uçtan uca şifrelemenin iki standardı onlarca yıldır var:

- **OpenPGP** (PGP, GnuPG): Her kullanıcının uzun ömürlü bir anahtar çifti vardır. Gönderen rastgele bir oturum anahtarı üretir, mesajı onunla şifreler, oturum anahtarını da alıcının açık anahtarıyla sarar (15. ünitedeki zarf). Anahtarın doğru kişiye ait olduğunu kullanıcı parmak iziyle doğrular.
- **S/MIME:** Aynı fikir, ama anahtarlar bir sertifika otoritesinin imzaladığı sertifikalarla dağıtılır (12. ünite). Kurumlar kendi çalışanlarına sertifika verebildiği için şirketlerde daha yaygındır.

İkisinin de üç büyük zayıflığı vardır:

- **Başlıklar açık:** Konu satırı, gönderen, alıcı ve tarih sunucuların e-postayı iletmesi için şifrelenmez.
- **İleri gizlilik yok:** Özel anahtar bir gün sızarsa, kaydedilmiş bütün eski e-postalar açılır.
- **Anahtar yönetimi kullanıcıda:** Alıcının anahtarını bulmak, doğrulamak, kaybetmemek ve her cihaza taşımak kullanıcının işidir. Mesajlaşma uygulamaları bunu otomatik yaptığı için yayıldı; PGP ise çoğunlukla gazeteciler ve güvenlik topluluğu gibi özel kitlelerde kaldı.

Simülatördeki "PGP ile şifreli e-posta" hazır ayarı Telegram'ın gizli sohbetiyle aynı görünür: uçtan uca, sabit anahtar, yedek yok. Anahtar ele geçirme zaman çizelgesinde sabit anahtarın neden bütün geçmişi açtığını görebilirsin.
`),
      dene: ["sf-u19-konu", "sf-u19-ileri", "sf-u19-yayginlik"],
    },
    {
      baslik: "Tehdit modeli: kimden, neyi, ne kadar?",
      metin: md(`
Bir uygulamanın şifreleme mimarisini seçmeden önce **tehdit modelini** yazarsın: kimden korunuyorsun, neyi koruyorsun, saldırganın elinde ne var? 1. ünitede bu soruyu sormuştuk; şimdi cevabın mimariyi nasıl belirlediğini görelim.

| Saldırgan | Yeteneği | Yeten önlem |
|---|---|---|
| Ağı dinleyen | Paketleri görür | TLS |
| Veritabanı sızıntısı | Diskin ya da yedeğin kopyası | Sunucu tarafı şifreleme (anahtar ayrı yerde) |
| Sunucuyu işleten | Canlı trafik, veritabanı, anahtar dizini | Uçtan uca şifreleme + anahtar doğrulama |
| Telefonu çalan | Cihaz | Ekran kilidi, kaybolan mesajlar |
| Kötü niyetli güncelleme | İstemcinin kendisi | Şifrelemeyle değil: açık kaynak, tekrarlanabilir derleme, şeffaflık |

Tablonun iki dersi var. Birincisi: her satır bir öncekinden **pahalıdır**; uçtan uca şifreleme kurtarmayı, sunucuda aramayı ve analizi zorlaştırır. Gereğinden güçlü bir model ürünü kullanılmaz hale getirebilir. İkincisi: **metadata** (kim, ne zaman, ne sıklıkla) bu tabloların hiçbirinde tam korunmaz; ayrıca düşünülmesi gerekir.

Aşağıdaki iki alıştırma bu soruları gerçek bir ürün tanımına uygular.
`),
      dene: ["sf-u19-ilk-soru", "sf-u19-istemci", "sf-u19-metadata"],
    },
    {
      baslik: "Alıştırma: anonim geri bildirim platformu",
      metin: md(`
Bir programdaki herkesin birbiri hakkında eleştiri yazabildiği bir platform tasarlıyorsun. Eleştiri yalnız program yürütücülerine gidiyor. İstek iki parçalı:

1. Yazar, platformu **yazan ve işleten yazılımcılardan** anonim kalmalı.
2. Hakaret ya da tehdit gibi kötüye kullanımda kimliğe **yalnız ilgili yürütücüler** ulaşabilmeli.

Buradaki incelik, **içerik gizliliği ile yazar anonimliğinin ayrı sorunlar** olması. Eleştiriyi yürütücülerin anahtarıyla şifrelemek içeriği korur; ama kullanıcı kendi hesabıyla giriş yapıp gönderiyorsa, sunucu kimin gönderdiğini oturumdan bilir. Aşağıda tehdit kartlarını seç ve mimarileri karşılaştır:

[[G-S19-02]]

Son mimarideki **anonim üyelik belgesi** iki fikri birleştirir. Kişi programa katılırken kör imzalı bir belge alır; imzalayan belgeyi görmediği için sonradan kime verildiğini bilemez. Eleştiri hesapsız gönderilir, sunucu yalnız belgenin geçerli olduğunu doğrular. Kötüye kullanımda kimliği açmak için kimlik, eşik şifrelemeyle kilitli bir zarfta belgeye bağlıdır; zarfı tek bir yürütücü değil, örneğin beş yürütücüden üçü birlikte açar. Akademik dünyada bu işin adı **grup imzasıdır**.

Hiçbir mimari iki satırı tam kapatmaz: **sunucu kayıtları** (IP, gönderim saati) ve **istemciyi yazanın** anonimliği kaldırabilmesi. Küçük bir ekipte yazım üslubu da yazarı ele verebilir; eleştirileri belli bir sayıya ulaşınca toplu iletmek bu çıkarımı zorlaştırır.
`),
      dene: ["sf-u19-oturum", "sf-u19-esik", "sf-u19-kor-imza", "sf-u19-kucuk-ekip"],
      lab: "geri-bildirim",
    },
    {
      baslik: "Alıştırma: kişisel paylaşım uygulaması",
      metin: md(`
İkinci ürün dokuz ay kullanılacak küçük bir sosyal uygulama: kişi her gün kısa bir kayıt bırakıyor, fotoğraf ve yazı paylaşıyor. Ses kaydı eklemek de düşünülüyor. Ürün sahibi üç soruyu henüz cevaplamadı ve cevaplar mimariyi değiştiriyor:

- **Paylaşımı kim görür?** Yalnız kişi görürse tek kişilik bir kasa (15. ünite) yeter; arkadaş grubu görürse grup anahtarı ve üye çıkınca anahtar yenileme gerekir (14. ünite).
- **Sunucuda analiz olacak mı?** Olacaksa sunucu içeriği görmeli; ya şifrelemeden vazgeçilir ya da istatistik cihazda hesaplanıp yalnız sonuç gönderilir.
- **Dokuz ayın sonunda ne olur?** **Kripto-silme** ile anahtarlar silinir ve bütün şifreli kopyalar, kaç yedek olursa olsun, aynı anda okunamaz hale gelir.

[[G-S19-03]]

Ses kaydı seçeneğini aç ve ne değiştiğine bak. Ses, kişiyi tanıtan **biyometrik** bir veridir. Sunucunun sesi yazıya dökmesi istenirse sunucu sesi duyabilmeli; bu, uçtan uca şifrelemeyle doğrudan çelişir. Ya yazıya dökme cihazda yapılır ya da bu özellik için şifrelemeden vazgeçilir.

Fotoğraflarda gözden kaçan bir sızıntı da var: **EXIF** bilgisi. Telefonlar fotoğrafın içine çekildiği yerin koordinatlarını ve cihaz modelini yazar. Şifreleme fotoğrafı yolda korur, ama açan herkes konumu da görür; bu bilgi yüklemeden önce telefonda silinmelidir.
`),
      dene: ["sf-u19-exif", "sf-u19-kripto-silme", "sf-u19-kayip", "sf-u19-ses"],
      lab: "paylasim",
    },
    {
      baslik: "Kendi kodunu yaz: Web Crypto atölyesi",
      metin: md(`
Bu sitedeki gerçek şifreleme araçlarının hepsi tarayıcının **Web Crypto API**'sini (\`crypto.subtle\`) kullanır. Son adımda o çağrıları kendin yaz. Her görevde bir fonksiyonun gövdesini dolduracaksın; kod tarayıcında ayrı bir iş parçacığında çalışır ve sonuç beklenenle karşılaştırılır.

[[G-S19-04]]

Görevlerde kendi kodunda kaçınman gereken hataların hepsiyle karşılaşacaksın: anahtarı \`Math.random\` ile üretmek, her şifrelemede aynı nonce'u kullanmak, etiketi \`===\` ile karşılaştırmak, paroladan anahtarı tek bir hash'le türetmek. Son görevde ise nonce tekrarlayan bir sistemi kendin kıracaksın.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Mesajlaşma:** WhatsApp, Signal ve iMessage aynı protokol ailesini kullanır; farkları yedek, metadata ve çoklu cihaz ayarlarındadır. Telegram'da varsayılan sohbet ile gizli sohbet iki ayrı güvenlik modelidir.
> - **E-posta:** Kurumlarda S/MIME, gazetecilik ve açık kaynak dünyasında OpenPGP kullanılır; ikisinde de konu satırı açık gider ve ileri gizlilik yoktur.
> - **Ürün tasarımı:** Yeni bir uygulamanın güvenlik incelemesi tehdit modeliyle başlar. Anonim bildirim sistemleri, sağlık ve kişisel kayıt uygulamaları gibi ürünlerde içerik, yazar ve metadata ayrı ayrı ele alınır.
> - **Web uygulamaları:** Şifreli not, parola yöneticisi ve uçtan uca şifreli dosya paylaşım hizmetlerinin tarayıcı sürümleri bu atölyedeki çağrıları kullanır.
`),
      dene: ["sf-u19-gcm-boy", "sf-u19-verify", "sf-u19-math-random"],
      lab: "kod-atolyesi",
    },
  ],
  test: ["sf-u19-ayni-model", "sf-u19-smime", "sf-u19-imza-boy"],
};
