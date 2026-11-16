import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_17: Ders = {
  hafta: 17,
  baslik: "Saldırılar ve uygulama hataları",
  ozet: "AES'i kimse kırmadı; ama AES kullanan sistemler sürekli kırılıyor. Tekrarlanan bir nonce, fazla konuşkan bir hata mesajı, erken biten bir karşılaştırma ve bir akıllı kartın güç hattındaki minik dalgalanmalar: doğru algoritmanın yanlış kullanımla nasıl çöktüğünü kendin dene.",
  bolumler: [
    {
      baslik: "Algoritma değil, kullanım kırılır",
      metin: md(`
Önceki ünitelerde gördüğümüz algoritmaların (AES, SHA-256, X25519, Ed25519) hiçbiri bugün matematiksel olarak kırılmış değildir. Gerçek dünyadaki saldırıların neredeyse hepsi algoritmanın **çevresini** hedefler: nonce'un nasıl üretildiği, hatanın nasıl bildirildiği, rastgeleliğin nereden geldiği, kodun ne kadar sürede çalıştığı, çipin ne kadar güç çektiği.

Bunların ilki ve en yaygını **nonce tekrarıdır**. AES-CTR, AES-GCM ve ChaCha20, anahtar ve nonce'tan bir **anahtar akışı** üretip mesajla XOR'lar. Aynı anahtar ve nonce iki kez kullanılırsa iki mesaj aynı akışla XOR'lanır ve akış birbirini götürür:

$$C_1 \\oplus C_2 = (M_1 \\oplus S) \\oplus (M_2 \\oplus S) = M_1 \\oplus M_2$$

5. ünitedeki iki zamanlı pad'in aynısıdır. Geriye kalan, iki açık metnin XOR'udur ve tahmin edilen kelimeler kaydırılarak (crib dragging) çözülür. Aşağıda bir kelime yaz ve konumunu kaydır: öteki mesajın o konumdaki parçası okunur çıkıyorsa doğru yoldasın.

[[G-S17-01]]

GCM'de nonce tekrarının bedeli daha da büyüktür: kimlik doğrulama anahtarı da açığa çıkar ve saldırgan istediği mesaja geçerli etiket yazar. ECDSA'da ise aynı nonce'lu iki imza özel anahtarı verir (11. ünite). Kurallar basittir: nonce'u bir sayaçla ya da yeterince uzun rastgele değerle üret, sayacı yeniden başlatmalarda kaybetme, şüphedeysen her oturuma yeni anahtar türet.
`),
      dene: ["sf-u17-xor", "sf-u17-gcm", "sf-u17-ecdsa", "sf-u17-sayac"],
      lab: "nonce-surukle",
    },
    {
      baslik: "Padding oracle: tek bitlik sızıntı",
      metin: md(`
6. ünitedeki CBC modunda son blok PKCS#7 ile doldurulur: 3 bayt eksikse ~03 03 03~ eklenir. Sunucu şifreli metni çözüp dolguyu denetler; dolgu hatalıysa bir hata döner. Bu masum görünen davranış, 2002'de Serge Vaudenay'nin gösterdiği **padding oracle** saldırısına kapı açar.

CBC'de bir bloğun açık metni $P_i = D(C_i) \\oplus C_{i-1}$'dir. Saldırgan $C_{i-1}$'in son baytını değiştirip sunucuya gönderir. Sunucu "dolgu doğru" dediği anda çözülen son baytın ~01~ olduğunu bilir; buradan $D(C_i)$'nin son baytını, oradan da gerçek açık baytı hesaplar. Sonra son iki baytı ~02 02~ yapacak biçimde bir sonraki bayta geçer.

[[G-S17-02]]

Her bayt en çok 256 sorgu, bir blok en çok 4096 sorgu ister. Anahtar hiç gerekmez. Sızıntının biçimi önemsizdir: farklı bir hata mesajı, farklı bir HTTP kodu, hatta yalnız yanıt süresindeki bir fark yeter. 2013'teki **Lucky Thirteen** saldırısı TLS'te yalnız MAC hesabının birkaç mikrosaniyelik farkını kullandı.

Kalıcı çözüm, değiştirilmiş şifreli metni çözmeden önce reddetmektir: AES-GCM ya da ChaCha20-Poly1305 gibi bir AEAD. TLS 1.3 CBC'yi bu yüzden tamamen kaldırdı.
`),
      dene: ["sf-u17-ne-soyler", "sf-u17-cozum", "sf-u17-tarih"],
      lab: "padding-oracle",
    },
    {
      baslik: "Zayıf rastgelelik",
      metin: md(`
2. ünitede rastgeleliğin bütün kriptografinin temeli olduğunu söylemiştik. Gerçek olaylar bunun ne kadar doğru olduğunu gösterir:

- **2008, bir Linux dağıtımı:** OpenSSL paketinde bir derleyici uyarısını susturmak için yapılan değişiklik, rastgele üretecin tohumunu yalnız süreç numarasına indirdi. İki yıl boyunca üretilen SSH ve TLS anahtarlarının her türünde yalnız 32.768 olasılık vardı.
- **2010, bir oyun konsolu:** Üretici, yazılım imzalarında ECDSA'nın nonce'unu her seferinde aynı tuttu. İki imzadan özel imza anahtarı hesaplandı ve konsola istenen her yazılım yüklenebilir hale geldi.
- **2012, internetteki RSA anahtarları:** Araştırmacılar milyonlarca açık anahtarın EBOB'unu aldı; açılışta yeterince entropi toplayamayan gömülü cihazların bir kısmı aynı asalı paylaşıyordu ve anahtarları anında çarpanlarına ayrıldı.

Ders basittir: güvenlik için her zaman işletim sisteminin CSPRNG'sini (~crypto.getRandomValues~, ~/dev/urandom~, ~getrandom()~) kullan. ~Math.random()~ ya da zamana bağlı tohumlu üreteçler tahmin edilebilir.
`),
      dene: ["sf-u17-debian", "sf-u17-math-random", "sf-u17-ortak-asal"],
    },
    {
      baslik: "Zamanlama saldırıları",
      metin: md(`
**Yan kanal saldırıları** algoritmanın matematiğine değil, onu çalıştıran cihazın fiziksel davranışına bakar. Bunların en kolay ölçüleni süredir.

Bir sunucunun gelen bir MAC'i ya da PIN'i beklenen değerle bayt bayt karşılaştırdığını, ilk farklı baytta durduğunu düşün. İlk baytı doğru olan bir tahmin, yanlış olandan bir adım uzun sürer. Saldırgan her konum için bütün değerleri deneyip en yavaşını seçerek sırrı baştan sona bulur. Aşağıda 4 haneli bir PIN'e karşı bunu dene; gürültüyü artır ve ortalamanın nasıl işe yaradığına bak:

[[G-S17-03]]

Kaba kuvvet 10.000 deneme isterken zamanlama saldırısı 40 tahminle biter: üstel iş doğrusala iner. Ağ üzerinden ölçülen süreler gürültülüdür, ama 2003'te aynı yerel ağdaki bir makineden OpenSSL'in RSA özel anahtarı yalnız zamanlamayla çıkarıldı.

Karşı önlem **sabit zamanlı** koddur: süre ve bellek erişimi gizli veriye bağlı olmamalı.

- Karşılaştırma ~fark |= a[i] ^ b[i]~ biçiminde bütün uzunluğu dolaşır ve sonunda tek kez bakılır. Hazır işlevler: Node.js ~crypto.timingSafeEqual~, Go ~subtle.ConstantTimeCompare~.
- Gizli veriye bağlı dallanma (~if (bit) ...~) ve gizli indisle tablo okuma yapılmaz. AES'in tablolu yazılım uygulamaları önbellek zamanlamasıyla kırıldı; modern işlemciler bu yüzden AES için özel komutlar sunar.
`),
      dene: ["sf-u17-erken-cikis", "sf-u17-sabit", "sf-u17-uzak"],
      lab: "zamanlama",
    },
    {
      baslik: "Güç analizi",
      metin: md(`
Bir akıllı kartın, bir ödeme terminalinin ya da bir IoT cihazının güç hattına küçük bir direnç bağlayıp osiloskopla gerilimine bakarsan, işlemcinin ne yaptığını neredeyse "görebilirsin". Bunun sebebi CMOS'un çalışma biçimidir: bir kapı yalnız durum değiştirirken çıkış kapasitesini doldurmak ya da boşaltmak için akım çeker. Bir yazmaca yazılan değerin **Hamming ağırlığı** (1 olan bitlerin sayısı) ya da önceki değerden **Hamming uzaklığı** arttıkça tüketim de biraz artar.

- **Basit güç analizi (SPA):** Tek bir ize gözle bakılır. RSA'nın kare al ve çarp döngüsünde (3. ünite) çarpma yalnız üssün 1 bitlerinde yapılır; izde iki farklı desen sırayla görünür ve özel üs okunur.
- **Diferansiyel ve korelasyon güç analizi (DPA, CPA):** 1999'da Paul Kocher'in ekibinin gösterdiği yöntemde binlerce iz toplanır. AES'in ilk turunda işlenen $S(p \\oplus k)$ değeri düz metne ve anahtarın tek bir baytına bağlıdır. Saldırgan 256 anahtar tahmininin her biri için "bu doğruysa sızıntı ne olurdu?" diye hesaplar ve ölçümle korelasyonuna bakar. Doğru tahmin tepe yapar.

[[G-S17-04]]

Saldırının gücü, $2^{128}$'lik anahtar uzayını 16 tane bağımsız 256'lık parçaya bölmesindedir: toplam 4096 tahmin. Gürültüyü artırdığında daha çok ize ihtiyaç duyulduğunu, maskelemeyi açtığında tepenin tamamen kaybolduğunu gör.

> **Matematiğe in:** CPA'da her tahmin $k$ için tahmini sızıntı $h_i = \\text{HW}(S(p_i \\oplus k))$ ile ölçüm $t_i$ arasındaki Pearson korelasyonu $\\rho_k = \\frac{\\sum (h_i - \\bar h)(t_i - \\bar t)}{\\sqrt{\\sum (h_i - \\bar h)^2 \\sum (t_i - \\bar t)^2}}$ hesaplanır. Gürültünün standart sapması $\\sigma$ iken gereken iz sayısı kabaca $\\sigma^2 / \\rho^2$ ile büyür.
`),
      dene: ["sf-u17-neden", "sf-u17-hamming", "sf-u17-spa-dpa"],
      lab: "guc-analizi",
    },
    {
      baslik: "Elektromanyetik sızıntı ve hata enjeksiyonu",
      metin: md(`
Güç akımı değiştikçe manyetik alan da değişir. Çipin üstüne yaklaştırılan küçük bir bobin, güç hattına dokunmadan aynı bilgiyi, hatta çipin belirli bir bölgesinden daha temiz bir sinyalle alabilir. **EM analizi** böylece akıllı telefonlara ve dizüstü bilgisayarlara karşı da birkaç santimetre uzaktan gösterildi.

**Hata enjeksiyonu** ise pasif dinlemenin tersidir: saldırgan hesabı bilerek bozar.

- Besleme geriliminde ya da saat sinyalinde nanosaniyelik bir aksaklık bir komutu atlatır: "PIN doğru mu?" denetimi hiç yapılmamış gibi geçilir.
- Odaklı bir lazer çipin belirli bir hücresinde tek bir biti çevirir.
- 1997'de gösterilen **Bellcore saldırısında** Çin kalan teoremiyle hesaplanan bir RSA imzasının yarısında tek bir hata yeter: hatalı imza ile doğrusunun farkının $n$ ile EBOB'u bir asal çarpanı verir.

Karşı önlemler donanımdadır: gerilim ve saat sensörleri, hesabı iki kez yapıp karşılaştırmak, imzayı göndermeden önce açık anahtarla doğrulamak.
`),
      dene: ["sf-u17-em", "sf-u17-hata", "sf-u17-rsa-crt"],
    },
    {
      baslik: "Karşı önlemler",
      metin: md(`
Yan kanallara karşı tek bir çözüm yoktur; katmanlar birleştirilir:

| Saldırı | Karşı önlem |
|---|---|
| Zamanlama, önbellek | Sabit zamanlı kod, gizli indisli tablo yok, AES komutları |
| Güç ve EM analizi | **Maskeleme** (ara değerler rastgele maskelerle işlenir), **karıştırma** (işlem sırası rastgele), gürültü üreteçleri, dengeli lojik |
| Hata enjeksiyonu | Sensörler, çift hesap, sonuç doğrulama |
| Hepsi | Anahtarın sık yenilenmesi: saldırganın aynı anahtarla toplayabileceği iz sayısını sınırlar |

Maskelemede $S(p \\oplus k)$ yerine $S(p \\oplus k) \\oplus m$ işlenir; $m$ her çalışmada yenidir. Tek bir noktadaki ölçüm artık anahtar tahminiyle ilişkili değildir. Saldırgan iki noktayı birleştiren ikinci dereceden saldırılara geçmelidir; bu, iz sayısını kat kat artırır.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Banka kartları ve kimlik kartları:** Bu çipler piyasaya çıkmadan önce bağımsız laboratuvarlarda güç, EM ve hata saldırılarına karşı test edilir (Common Criteria değerlendirmeleri).
> - **Kripto kütüphaneleri:** libsodium, BoringSSL ve Go'nun kripto paketi sabit zamanlı yazılır ve bu, kod incelemelerinde ayrıca denetlenir.
> - **İşlemciler:** Spectre ve Meltdown (2018) bir işlemcinin bile önbellek zamanlamasıyla sır sızdırabileceğini gösterdi; işletim sistemleri ve tarayıcılar yıllarca yama yayımladı.
> - **Donanım cüzdanları:** Kripto para donanım cüzdanlarına karşı gerilim aksaklığıyla PIN atlatma saldırıları yayımlandı; yeni nesiller güvenli çiplere geçti.
> - **Web uygulamaları:** Parola sıfırlama kodları ve API anahtarları sabit zamanlı karşılaştırılmazsa uzaktan zamanlama saldırısına açık kalır.
`),
      dene: ["sf-u17-maskeleme", "sf-u17-tablo", "sf-u17-sertifika"],
    },
  ],
  test: ["sf-u17-sorgu", "sf-u17-pin", "sf-u17-tahmin"],
};
