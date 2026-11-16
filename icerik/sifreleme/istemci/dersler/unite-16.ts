import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_16: Ders = {
  hafta: 16,
  baslik: "Görsel kriptografi ve steganografi",
  ozet: "Bilgisayarsız çözülen bir şifre, bir tatil fotoğrafının içine saklanmış bir mektup ve görselleri \"karıştırarak\" şifrelemenin neden işe yaramadığı. Payları üst üste koy, en düşük bitlere bak ve gizlemek ile şifrelemek arasındaki farkı kendi gözünle gör.",
  bolumler: [
    {
      baslik: "Gözle çözülen şifre",
      metin: md(`
1994'te Moni Naor ile Adi Shamir (RSA'nın S'si) şaşırtıcı bir şema önerdi: şifreli mesajı çözmek için hiçbir hesap gerekmiyor. Mesaj iki **saydam paya** bölünüyor; paylar üst üste konunca insan gözü mesajı okuyor.

Yöntem şöyle işler. Mesajdaki her piksel, payda **2×2 alt hücreyle** temsil edilir. Her payda her pikselin dört hücresinden tam **ikisi** siyahtır:

- Mesajın **beyaz** pikselinde iki pay **aynı** deseni alır. Üst üste gelince yine 2 hücre siyah kalır: gri.
- Mesajın **siyah** pikselinde iki pay birbirinin **tersi** olan desenleri alır. Üst üste gelince 4 hücre de siyah olur: siyah.

Birinci payın her pikseli rastgele seçilir. Aşağıda bir mesaj yaz, ikinci payı kaydırarak birincinin üstüne getir:

[[G-S16-01]]

Tek bir paya bakan ne görür? Her pikselde yine 2 siyah, 2 saydam hücre: düzgün bir gri doku. Daha da güçlüsü, birinci pay **mesajdan bağımsızdır**: aynı birinci payla ikinci pay herhangi bir başka mesajı verecek biçimde de üretilebilir. Şekilde "Başka bir mesaj" kutusunu açınca birinci pay hiç değişmeden "TATİL" yazısını verir. Bu, 5. ünitedeki one-time pad'in mükemmel gizliliğinin aynısıdır; bedeli de aynı: pay en az mesaj kadar büyüktür (burada dört kat) ve **tek kullanımlıktır**.

Kontrast da düşüktür: siyah ile beyaz değil, siyah ile gri arasındadır. Pratikte görsel kriptografi daha çok bir öğretim aracı, bazı banka ve oy pusulası önerilerinde de bir doğrulama aracı olarak kullanıldı.
`),
      dene: ["sf-u16-tek-pay", "sf-u16-nasil-coz", "sf-u16-gri", "sf-u16-otp"],
      lab: "gorsel-paylar",
    },
    {
      baslik: "k'den n pay: eşik sır paylaşımı",
      metin: md(`
Naor ve Shamir şemayı genelleştirdi: bir görseli $n$ paya bölüp herhangi $k$ tanesi üst üste gelince mesajın belirmesini, $k-1$ tanenin hiçbir şey göstermemesini sağlamak mümkündür. Bunun sayılarla yapılan halini Shamir 1979'da zaten önermişti: **eşik sır paylaşımı**.

Sezgi geometriktir. İki nokta bir doğruyu, üç nokta bir parabolü tek türlü belirler. Sırrı ikinci dereceden bir polinomun sabit terimi olarak saklayalım:

$$f(x) = s + a_1 x + a_2 x^2$$

$a_1$ ve $a_2$ rastgele seçilir; paylar $f(1), f(2), \\dots, f(5)$ değerleridir. Herhangi üç pay parabolü belirler ve $f(0) = s$ bulunur. İki pay ise her olası $s$ ile uyumlu bir parabol çizer: hiçbir bilgi vermez. Gerçek uygulamada hesaplar büyük bir asalın modunda yapılır (3. ünite).

> **Matematiğe in:** $k$ noktadan $k-1$ dereceli polinomu bulmak Lagrange interpolasyonudur: $f(0) = \\sum_i y_i \\prod_{j \\ne i} \\frac{x_j}{x_j - x_i}$. Mod $p$ cisminde her bölme modüler terstir.

Eşik paylaşımı, tek bir kişinin hem kötüye kullanmasını hem de kaybetmesini engellemek istediğin her yerde kullanılır: sertifika otoritelerinin kök anahtar törenleri, kripto para cüzdanlarının "çoklu imza" kurulumları, 15. ünitedeki "güvenilir kişilerle kurtarma".
`),
      dene: ["sf-u16-k-n", "sf-u16-shamir", "sf-u16-kok-anahtar"],
    },
    {
      baslik: "Gizlemek ile şifrelemek",
      metin: md(`
Şifreli bir mesajı gören herkes bir sır olduğunu anlar. Bazı durumlarda bu bile tehlikelidir: şifreli yazışmanın şüphe çektiği bir yerde, sıradan görünen bir fotoğraf çok daha az dikkat çeker.

**Steganografi** (Yunanca "örtülü yazı") mesajın **varlığını** gizler. Antik çağda kölenin tıraşlı kafasına yazılan mesaj saç uzayınca gönderilirdi; İkinci Dünya Savaşı'nda bir noktanın içine küçültülmüş belgeler (mikronokta) kullanıldı. Dijital dünyada mesaj görsellerin, seslerin, hatta metindeki boşlukların içine saklanır.

İkisi birbirinin yerine geçmez, birbirini tamamlar:

| | Şifreleme | Steganografi |
|---|---|---|
| Neyi gizler? | İçeriği | Varlığı |
| Yakalanırsa | İçerik yine okunmaz | Mesaj doğrudan okunur |
| Güvenliğin kaynağı | Anahtar | Yöntemin bilinmemesi (çoğu zaman) |

Son satır önemlidir. Yalnız "kimse bakmaz" varsayımına dayanan bir gizleme, 1. ünitedeki **Kerckhoffs ilkesini** çiğner. Doğru kullanım, mesajı önce bir anahtarla şifrelemek, sonra gizlemektir.
`),
      dene: ["sf-u16-fark", "sf-u16-birlikte", "sf-u16-kerckhoffs"],
    },
    {
      baslik: "En düşük bitlere saklamak: LSB",
      metin: md(`
24 bit renkli bir görselde her pikselin kırmızı, yeşil ve mavi kanalı 0-255 arasında bir sayıdır. Bu sayının **en düşük biti** (least significant bit, LSB) değiştirilse değer en fazla 1 değişir; 182 ile 183 arasındaki farkı göz göremez.

**LSB steganografi** gizli mesajın bitlerini bu en düşük bitlere sırayla yazar. Kapasitesi büyüktür: her piksele 3 bit, yani 200×100 piksellik bir görsele 7.500 bayt sığar. Aşağıda kendi mesajını maskotun ya da kendi görselinin içine gizle:

[[G-S16-02]]

Sonuçtaki görsel gözle ayırt edilemez. Ama "Bit düzlemi" seçimini **0** yap: her kanalın yalnız en düşük bitini gösteren görüntüde, maskotun düz renkli alanlarındaki düzenli desen mesajın yazıldığı bölgede gürültüye dönüşür.

LSB'nin bir zayıflığı daha vardır: **kayıplı sıkıştırma**. Sosyal medya platformları yüklenen görselleri küçültür ve JPEG olarak yeniden kaydeder; en düşük bitler bu işlemde ilk kaybolan bilgidir. Sıkıştırmaya dayanıklı yöntemler mesajı JPEG'in frekans katsayılarına yazar.
`),
      dene: ["sf-u16-kapasite", "sf-u16-degisim", "sf-u16-sosyal-medya"],
      lab: "lsb",
    },
    {
      baslik: "Steganaliz: gizleneni bulmak",
      metin: md(`
**Steganaliz**, bir dosyada gizli mesaj olup olmadığını ortaya çıkarma sanatıdır. Gizli mesajı okumak gerekmez; varlığını kanıtlamak çoğu zaman yeter. Başlıca yöntemler:

- **Bit düzlemlerine bakmak:** Doğal görsellerde düşük bit düzlemi bile bir yapı taşır. Rastgele görünen bir bölge şüphelidir.
- **Ki-kare testi:** LSB'ye rastgele bit yazmak, değeri $2k$ ve $2k+1$ olan piksellerin sayılarını birbirine yaklaştırır. Doğal bir görselde bu çiftler eşit değildir; test bu eşitlenmeyi ölçer.
- **Makine öğrenmesi:** Bugünkü steganaliz araçları milyonlarca temiz ve gizli mesajlı görselle eğitilmiş sınıflandırıcılar kullanır.

Gizleyen taraf da önlem alır. Bitleri görselin başından sırayla değil, anahtardan türeyen rastgele konumlara yazmak değişikliği tek bir bölgede toplamaz. Yalnız kenarlara ve dokulu alanlara yazmak, düz alanlarda iz bırakmaz. Bu, saldırı ile savunma arasında hiç bitmeyen bir yarıştır.
`),
      dene: ["sf-u16-duzlem", "sf-u16-ki-kare", "sf-u16-rastgele-yer"],
    },
    {
      baslik: "Görselleri \"karıştırarak\" şifrelemek",
      metin: md(`
Akademik yayınlarda çok sayıda "görüntü şifreleme" yöntemi önerilir: pikselleri anahtarlı bir permütasyonla karıştırmak, kaotik haritalarla (lojistik harita gibi) üretilen sayılarla renkleri değiştirmek. Görsel sonuç etkileyicidir: maskot bir anda tanınmaz hale gelir. Ama "tanınmaz görünmek" ile "güvenli olmak" aynı şey değildir:

[[G-S16-03]]

- **Histogram sızar:** Karıştırma piksellerin yerini değiştirir, değerlerini değil. Karıştırılmış görselin histogramı özgününkiyle birebir aynıdır.
- **Seçilmiş açık metin saldırısı:** Saldırgan, her pikselinde kendi sıra numarası yazan bir görseli aynı anahtarla şifretebilirse permütasyonu tek seferde öğrenir. Şekilde "Saldırgan bir kez kendi görselini şifretebilsin" kutusunu işaretle.
- **Kaotik haritalar:** Bilgisayardaki sonlu duyarlıkla kısa döngülere girer, anahtar uzayları sanıldığından küçüktür ve önerilerin büyük çoğunluğu yayımlandıktan sonra kırıldı.

Doğru yol sıkıcıdır: görsel bir dosyadır ve **dosya baytları** AES-GCM ya da ChaCha20-Poly1305 gibi bir AEAD ile şifrelenir. 6. ünitedeki ECB maskotu, "görseli şifrelemenin" bile yanlış modla nasıl sızdırdığını göstermişti.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Yazıcı izleme noktaları:** Birçok renkli lazer yazıcı her sayfaya, gözle zor görülen sarı noktalarla seri numarasını ve tarihi basar. 2017'de basında yayımlanan sızdırılmış bir belgenin kaynağının bulunmasında bu noktaların rol oynadığı bildirildi.
> - **Dijital filigran:** Film stüdyoları ve yayın platformları, sızdırılan bir kopyanın hangi hesaptan çıktığını bulmak için görüntüye kullanıcıya özel, görünmez işaretler gömer.
> - **Zararlı yazılımlar:** Saldırganlar komut ve kod parçalarını masum görünen PNG dosyalarının içinde taşıyarak güvenlik taramalarından kaçırmaya çalışır; güvenlik ürünleri bu yüzden steganaliz yapar.
> - **İçerik kaynağı etiketleri:** Yapay zekâyla üretilen görsellerin bir kısmı görünmez filigranlar taşır; C2PA gibi standartlar ise kaynağı imzalı metadata ile kanıtlamayı dener.
> - **Eşik paylaşımı:** Sertifika otoritelerinin kök anahtar törenlerinde ve kurumsal kripto para cüzdanlarında anahtarlar $k$'den $n$ paylarla korunur.
`),
      dene: ["sf-u16-histogram", "sf-u16-secilmis", "sf-u16-kaotik", "sf-u16-dogru-yol"],
      lab: "goruntu-sifreleme",
    },
  ],
  test: ["sf-u16-alt-hucre", "sf-u16-bit-yaz"],
};
