import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_2: Ders = {
  hafta: 2,
  baslik: "Rastgelelik ve Entropi",
  ozet: "Kriptografinin görünmez temelini tanı: entropinin bit olarak ölçülmesi, parolaların gerçek gücü, sözde rastgele üreteçlerin neden tahmin edilebilir olduğu, işletim sisteminin güvenli kaynağı, donanımdaki gürültü kaynakları ve zayıf rastgeleliğin yol açtığı gerçek felaketler.",
  bolumler: [
    {
      baslik: "Entropi: belirsizliği bitle ölçmek",
      metin: md(`
Bir anahtarı ne kadar uzun seçersen seç, saldırgan onu **tahmin edebiliyorsa** işe yaramaz. Kriptografide "rastgele" kelimesinin ölçüsü **entropidir**: bir değer hakkında saldırganın ne kadar belirsizlik içinde olduğu.

Hilesiz bir yazı-tura atışı **1 bit** entropi taşır: iki eşit olasılık. 128 yazı-tura atışından çıkan dizi 128 bit entropi taşır ve $2^{128}$ olasılıktan biridir. Genel olarak $N$ eşit olasılıklı sonuç için entropi $\\log_2 N$ bittir; hilesiz bir zar atışı $\\log_2 6 \\approx 2{,}58$ bit taşır.

> **Matematiğe in:** Olasılıklar eşit değilse Shannon entropisi kullanılır: $$H = -\\sum_i p_i \\log_2 p_i$$ Yüzde 90 yazı gelen hileli bir para için $H = -(0{,}9 \\log_2 0{,}9 + 0{,}1 \\log_2 0{,}1) \\approx 0{,}47$ bit. Sonuç önceden kestirilebildikçe entropi düşer; her zaman yazı gelen bir parada $H = 0$'dır. Kriptografide genellikle daha karamsar olan **en küçük entropi** ($-\\log_2 p_{\\max}$) kullanılır: saldırgan önce en olası değeri dener.

**Uzunluk entropi değildir.** 32 karakterlik "aaaaaaaa..." parolası neredeyse sıfır entropi taşır. Entropi değerin kendisinden değil, onu **üreten yöntemden** gelir.
`),
      dene: ["sf-u2-yazi-tura", "sf-u2-hileli"],
    },
    {
      baslik: "Parolanın gerçek gücü",
      metin: md(`
Rastgele seçilmiş bir parolanın entropisi kolay hesaplanır: alfabedeki karakter sayısı $N$, uzunluk $L$ ise $L \\cdot \\log_2 N$ bit.

- 4 haneli rastgele PIN: $\\log_2 10^4 \\approx 13{,}3$ bit
- 8 rastgele küçük harf: $8 \\cdot \\log_2 26 \\approx 37{,}6$ bit
- 7776 kelimelik listeden zarla seçilen 6 kelime: $6 \\cdot \\log_2 7776 \\approx 77{,}5$ bit

Ama bu formül yalnız parola **gerçekten rastgele** seçildiyse doğrudur. İnsanlar parolayı tanıdık parçalardan kurar: bir şehir ya da takım adı, bir yıl, sonuna ünlem. Saldırganlar sızan milyarlarca paroladan bu kalıpları öğrenmiştir ve önce onları dener. "Istanbul2024!" 13 karakter ve dört karakter kümesi kullanıyor gibi görünse de bir saldırganın listesinde ilk dakikalarda gelir.

[[G-S2-01]]

> **Gerçek dünyada:** Parola yöneticileri bu yüzden parolayı **senin yerine rastgele** üretir; senin hatırlaman gereken tek şey yöneticinin ana parolasıdır. O ana parola için de rastgele seçilmiş birkaç kelimeden oluşan bir **parola cümlesi** iyi bir seçimdir.
`),
      dene: ["sf-u2-pin", "sf-u2-insan-secimi"],
      lab: "entropi",
    },
    {
      baslik: "Sözde rastgele üreteçler: tohum bilinirse her şey bilinir",
      metin: md(`
Bilgisayar belirlenimci bir makinedir: aynı girişle hep aynı çıktıyı verir. Bu yüzden programlardaki "rastgele" sayıların çoğu **sözde rastgele** (pseudorandom) üreteçten (PRNG) gelir. PRNG bir **tohumdan** (seed) başlar ve bir formülle sayı dizisi üretir. Aynı tohumla iki kez başlatırsan birebir aynı diziyi verir; benzetimleri tekrarlamak için bu çok kullanışlıdır.

En basit örnek **doğrusal eşlik üretecidir** (LCG): $$x_{n+1} = (a \\cdot x_n + c) \\bmod m$$ $a = 5$, $c = 3$, $m = 16$ ve tohum $x_0 = 7$ ile: $x_1 = 38 \\bmod 16 = 6$, $x_2 = 33 \\bmod 16 = 1$, $x_3 = 8$... Kuralı bilen biri tek bir çıktıyı görünce bütün geleceği hesaplar. Dene:

[[G-S2-03]]

Daha karmaşık PRNG'ler de (Mersenne Twister, xorshift) kriptografik değildir: birkaç yüz çıktısını gören biri iç durumunu kurtarabilir. JavaScript'teki ~Math.random()~ bu türdendir; oyunlar ve animasyonlar için uygundur, **token, parola, anahtar** üretmek için asla.
`),
      dene: ["sf-u2-tohum", "sf-u2-lcg-tahmin"],
    },
    {
      baslik: "Güvenli üreteçler ve işletim sistemi",
      metin: md(`
Kriptografide kullanılacak üretecin (CSPRNG) ek bir şartı vardır: çıktılarının bir kısmını gören saldırgan, **sonraki biti yazı-tura atmaktan daha iyi tahmin edememelidir** (sonraki bit testi). Ayrıca iç durum bir an ele geçse bile **önceki** çıktılar geri hesaplanamamalıdır.

Bunu her uygulamanın kendisi yapmaz; işi **işletim sistemi** üstlenir. Çekirdek, donanım olaylarının zamanlamalarından ve varsa işlemcinin donanım üretecinden entropi toplar, bununla bir CSPRNG'yi (Linux'ta ChaCha20 tabanlı) besler ve uygulamalara sunar:

| Ortam | Güvenli rastgele bayt |
|---|---|
| Tarayıcı ve Node.js | ~crypto.getRandomValues()~, ~crypto.randomUUID()~ |
| Linux | ~getrandom()~, ~/dev/urandom~ |
| Windows | ~BCryptGenRandom~ |
| Python | ~secrets~ modülü (~random~ değil) |

Bu sitedeki "Web Crypto" rozetli araçların hepsi ~crypto.getRandomValues~ kullanır.

> **Sık yapılan hata:** Parola sıfırlama bağlantısındaki token'ı ~Math.random()~ ya da o anın zamanıyla üretmek. Saldırgan kendi hesabı için birkaç token isteyip üretecin durumunu çıkarır ve başkasının token'ını tahmin eder.
`),
      dene: ["sf-u2-math-random", "sf-u2-tarayici"],
    },
    {
      baslik: "Donanımda gerçek rastgelelik: gürültü ve jitter",
      metin: md(`
Elektronikte istemediğimiz şey, gürültü, burada aradığımız şeydir. Gerçek rastgele üreteçler (TRNG) fiziksel olarak öngörülemeyen olayları ölçer:

- **Termal gürültü** (Johnson-Nyquist): her direnç, sıcaklığı yüzünden elektronların düzensiz hareketiyle küçük bir gürültü gerilimi üretir.
- **Çığ gürültüsü:** ters kutuplanmış bir eklemde (ör. bir zener) taşıyıcıların çığ gibi çoğalması düzensiz akım darbeleri verir.
- **Saat titreşimi (jitter):** tek sayıda eviriciden oluşan bir **halka osilatör** kendi kendine salınır; transistörlerdeki gürültü her periyodu biraz kısaltıp uzatır. Bu osilatör kararlı başka bir saatle örneklenince öngörülemeyen bitler çıkar. FPGA'larda en yaygın yöntemdir.

Ham bitler doğrudan anahtar yapılmaz. Kaynak **sapmalı** olabilir (1'ler biraz fazla çıkabilir), sıcaklıkla ya da besleme gerilimiyle değişebilir, hatta bozulabilir. Bu yüzden üç katman vardır: sürekli çalışan **sağlık testleri**, sapmayı gideren ve entropiyi yoğunlaştıran bir **şartlandırma** (genellikle bir hash ya da blok şifre) ve bunun beslediği bir **CSPRNG**. Intel ve AMD işlemcilerdeki ~RDSEED~/~RDRAND~ komutları bu yapının bir örneğidir.

> **Matematiğe in:** En eski sapma giderme yöntemi **von Neumann**'ınkidir. Bitler ikişer ikişer alınır: ~01~ → 0, ~10~ → 1, ~00~ ve ~11~ atılır. Bitler bağımsızsa $P(01) = p(1-p) = P(10)$ olduğu için çıktı, $p$ ne olursa olsun dengelidir. Bedeli, ham bitlerin büyük kısmının atılmasıdır: $p = 0{,}5$'te bile her çiftin yarısı gider.
`),
      dene: ["sf-u2-halka", "sf-u2-von-neumann"],
    },
    {
      baslik: "Rastgele görünmek, rastgele olmak değildir",
      metin: md(`
İnsanlar kötü rastgele üreteçlerdir. Elle "rastgele" 0 ve 1 yazmaları istenince uzun tekrarlardan kaçınır, çok sık değiştirirler. Gerçek rastgele 100 bitlik bir dizide 6-7 aynı bitlik bir koşu olağandır; insanın yazdığında nadiren görülür. Kendin dene:

[[G-S2-02]]

**Koşu testi**, **frekans testi** gibi istatistiksel testler (NIST'in SP 800-22 paketi bunları toplar) bariz kusurları yakalar. Ama tersi doğru değildir: testlerden geçmek güvenli olmanın **kanıtı değildir**. Sabit ve herkesçe bilinen bir anahtarla çalışan AES-CTR'nin çıktısı bütün testlerden geçer, ama o anahtarı bilen herkes aynı diziyi baştan sona üretir. Güvenlik, kaynağın tasarımından ve tohumun gizliliğinden gelir.
`),
      dene: ["sf-u2-insan"],
      lab: "rastgele-mi",
    },
    {
      baslik: "Zayıf rastgelelik felaketleri",
      metin: md(`
Rastgelelik çöktüğünde algoritma ne kadar sağlam olursa olsun her şey çöker, çünkü **bir anahtarın entropisi tohumunkini geçemez**.

- **Bir Linux dağıtımı, 2006-2008:** OpenSSL'e yapılan bir "temizlik" değişikliği, rastgele sayı havuzunu besleyen satırı da sildi. Geriye entropi kaynağı olarak yalnız süreç numarası (PID, en fazla 32 768 değer) kaldı. İki yıl boyunca o sistemlerde üretilen her SSH ve TLS anahtarı birkaç on bin olasılıktan biriydi; saldırganlar hepsinin listesini çıkardı.
- **Saniyeyle tohumlanan anahtar:** Bir program anahtarı, tohumu o anki Unix zamanı olan bir PRNG ile üretiyorsa ve saldırgan anahtarın hangi gün üretildiğini biliyorsa, yalnız $86\\,400 \\approx 2^{16{,}4}$ tohumu dener. 128 bitlik anahtar 16 bitlik bir anahtar kadar güçlüdür.
- **İmzada tekrar eden rastgele sayı:** ECDSA imzasında her imza için yeni ve gizli bir rastgele sayı gerekir. Aynı sayı iki imzada kullanılırsa özel anahtar basit bir hesapla düşer. Bu, gerçekte bir oyun konsolunun imza anahtarının ve bazı kripto para cüzdanlarının ele geçirilmesine yol açtı (17. ünite).

> **Gerçek dünyada:** Sanal makineler ve gömülü cihazlar ilk açılışta henüz entropi toplamamış olabilir; birçok cihazın aynı anahtarla üretildiği araştırmalarla gösterildi. Modern çekirdekler bu yüzden yeterli entropi toplanana kadar ~getrandom()~ çağrısını bekletir.
`),
      dene: ["sf-u2-zaman-tohum"],
    },
  ],
  test: [
    "sf-u2-tanim", "sf-u2-zar", "sf-u2-kucuk-harf", "sf-u2-kelime", "sf-u2-lcg", "sf-u2-ozellik", "sf-u2-isletim-sistemi",
    "sf-u2-kaynak", "sf-u2-isleme", "sf-u2-von-neumann-hesap", "sf-u2-test-kanit", "sf-u2-debian", "sf-u2-anahtar-entropisi",
  ],
};
