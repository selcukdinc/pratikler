import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_7: Ders = {
  hafta: 7,
  baslik: "Hash Fonksiyonları",
  ozet: "Her veriden sabit uzunlukta, geri döndürülemeyen bir parmak izi çıkaran hash fonksiyonlarını tanı: hangi saldırılara dayanmaları gerekir, doğum günü paradoksu neden çakışma sınırını yarıya indirir, SHA-256 içeride ne yapar ve MD5 ile SHA-1 nasıl düştü.",
  bolumler: [
    {
      baslik: "Hash: verinin parmak izi",
      metin: md(`
Bir **hash fonksiyonu** her uzunluktaki veriyi alır ve sabit uzunlukta bir **özet** (digest) verir. SHA-256'nın özeti her zaman 256 bittir, yani 64 hex karakter. Tek baytlık bir dosyanın da 4 GB'lık bir filmin de özeti bu uzunluktadır.

Kriptografik bir hash'ten beklenenler:

- **Deterministik:** aynı girdi her zaman aynı özeti verir.
- **Hızlı:** büyük verinin özeti çabuk hesaplanır.
- **Tek yönlü:** özetten girdiye dönülemez.
- **Çakışmaya dayanıklı:** aynı özeti veren iki girdi bulunamaz.
- **Rastgele görünür:** benzer girdiler bağımsız görünen özetler verir.

Hash **şifreleme değildir**. Anahtarı yoktur ve geri çözülmez; sonsuz sayıda girdi sonlu sayıda özete eşlendiği için bilgi kaybolur. Özetten girdiyi bulmanın tek yolu adayları tek tek hash'leyip karşılaştırmaktır. Kısa ya da tahmin edilebilir girdiler (bir parola, bir kart numarası, bir doğum tarihi) bu yüzden hash'lenince de güvende değildir.
`),
      dene: ["sf-u7-tanim", "sf-u7-uzunluk", "sf-u7-geri-donmez"],
    },
    {
      baslik: "Üç direnç",
      metin: md(`
"Hash güvenli" demek üç ayrı şey demektir:

- **Ön görüntü direnci:** Bir $h$ özeti verildiğinde $H(x) = h$ olan bir $x$ bulmak zordur. $n$ bitlik bir hash'te iş yaklaşık $2^n$ denemedir.
- **İkinci ön görüntü direnci:** Bir $x$ verildiğinde aynı özeti veren başka bir $x'$ bulmak zordur. Yayımlanmış bir dosyanın özetiyle eşleşen kötü amaçlı bir dosya üretmek budur; iş yine yaklaşık $2^n$'dir.
- **Çakışma direnci:** Aynı özeti veren **herhangi** iki girdi bulmak zordur. Saldırgan iki girdiyi de kendisi seçer; iş yalnız $2^{n/2}$'dir.

Çakışmalar **vardır**: güvercin yuvası ilkesi gereği sonsuz girdi $2^{256}$ özete sığmaz. Güvenlik, onları bulmanın evrenin ömründen uzun sürmesine dayanır. Çakışma saldırısı en kolay olanıdır, ama etkisi büyüktür. Saldırgan biri zararsız, öteki zararlı iki belge hazırlar. Zararsızı imzalatır; aynı özet nedeniyle imza zararlı belgede de geçerli olur.
`),
      dene: ["sf-u7-on-goruntu", "sf-u7-ikinci"],
    },
    {
      baslik: "Çığ etkisi",
      metin: md(`
İyi bir hash'te girdideki **tek bir bit** değişince özetin yaklaşık **yarısı**, yani 256 bitin 128'i değişir. Hangi bitlerin değişeceği öngörülemez. Bu özelliğe **çığ etkisi** denir; 5. ünitede blok şifrede gördüğümüz yayılmanın hash'teki karşılığıdır.

Aşağıda girdinin istediğin bir bitini çevir ve SHA-256 özetinde değişen bitleri gör. Sonra "200 rastgele bitle dene" düğmesiyle histogramı çiz: sayılar 128'in çevresinde, bir çan eğrisi gibi toplanır. Bu bir binom dağılımıdır; 256 yazı tura atışının ortalaması 128, standart sapması 8'dir.

[[G-S7-01]]

Çığ etkisi sayesinde iki özete bakıp girdilerin benzer olup olmadığı anlaşılamaz. "merhaba" ile "Merhaba"nın özetleri iki yabancı kadar farklıdır.
`),
      dene: ["sf-u7-cig-yarisi", "sf-u7-benzer-girdi"],
      lab: "cig",
    },
    {
      baslik: "Doğum günü paradoksu",
      metin: md(`
Bir sınıfta kaç kişi olmalı ki ikisinin aynı doğum gününü paylaşma olasılığı yarıyı geçsin? Çoğu kişi 183 der; doğru cevap **23**'tür. Sezgi yanılır, çünkü eşleşmenin belirli bir kişiyle değil **herhangi iki kişi** arasında olması yeter: 23 kişide 253 çift vardır.

[[G-S7-04]]

Hash'lerde aynı hesap çakışmanın maliyetini verir. $n$ bitlik bir özette $2^n$ olası değer vardır ve rastgele girdilerle yaklaşık $\\sqrt{2^n} = 2^{n/2}$ denemede iki özetin aynı çıkması beklenir. SHA-256 için $2^{128}$, MD5 için (yapısal açıkları olmasa bile) $2^{64}$ eder.

Aşağıda SHA-256'nın yalnız ilk 8-24 biti kullanılıyor. Rastgele mesajlar üretilip özetlenir; iki mesajın kısaltılmış özeti aynı çıkınca av biter. Bit sayısını 2 artırınca gereken deneme yalnız iki katına çıkar:

[[G-S7-03]]

> **Matematiğe in:** $d$ olası değerden $k$ tane rastgele seçince hepsinin farklı olma olasılığı $\\prod_{i=0}^{k-1} \\left(1 - \\frac{i}{d}\\right) \\approx e^{-k(k-1)/(2d)}$'dir ($1 - x \\approx e^{-x}$ yaklaşımıyla). Bunu $\\frac{1}{2}$'ye eşitlersek $k \\approx \\sqrt{2 \\ln 2 \\cdot d} \\approx 1{,}18\\sqrt{d}$ çıkar. $d = 365$ için 22,5; $d = 2^{32}$ için yaklaşık 77.000. Sonuç: 128 bitlik çakışma direnci istiyorsan en az 256 bitlik özet gerekir.
`),
      dene: ["sf-u7-23", "sf-u7-sha256-cakisma", "sf-u7-kisa-hash"],
      lab: "cakisma",
    },
    {
      baslik: "SHA-256'nın içi",
      metin: md(`
SHA-256 (2001, NSA tasarımı, FIPS 180-4) mesajı 512 bitlik (64 baytlık) bloklara böler ve her bloğu sırayla 256 bitlik bir **ara durumun** içine karıştırır. Adımlar:

1. **Dolgu:** Mesajın sonuna bir 0x80 baytı, gerektiği kadar sıfır ve en sona 64 bitlik mesaj uzunluğu eklenir; toplam 64'ün katı olur. 55 baytlık bir mesaj tek bloğa sığar, 56 baytlık bir mesaj iki blok olur.
2. **Mesaj takvimi:** Bloğun 16 kelimesi (32 bit), kaydırma ve XOR'larla 64 kelimeye ($W_0 \\dots W_{63}$) genişletilir.
3. **Sıkıştırma:** Sekiz kelimelik bir durum (a-h) 64 tur boyunca güncellenir. Her turda bir $W_t$ ve bir sabit $K_t$ karışır. Sonunda durum, bloğun başındaki değere eklenir.

Başlangıç değerleri ilk 8 asalın kareköklerinden, $K_t$ sabitleri ilk 64 asalın küp köklerinden alınır. Böyle "kolundan bir şey çıkmayan" (nothing-up-my-sleeve) sayılar, tasarımcının sabitlere gizli bir zayıflık saklamadığını gösterir.

[[G-S7-02]]

Uzun bir mesajda her blok bir öncekinin bıraktığı durumdan devam eder: $H_i = f(H_{i-1}, M_i)$. Bu yapıya **Merkle-Damgård** denir. Özet, son bloktan sonraki durumun **ta kendisidir**. Bu ayrıntı masum görünür ama 8. ünitede bir saldırıya kapı açacak.

> **Matematiğe in:** Bir turda $T_1 = h + \\Sigma_1(e) + \\text{Ch}(e,f,g) + K_t + W_t$ ve $T_2 = \\Sigma_0(a) + \\text{Maj}(a,b,c)$ hesaplanır (toplamalar mod $2^{32}$); sonra $e \\leftarrow d + T_1$, $a \\leftarrow T_1 + T_2$ olur ve öteki kelimeler bir kayar. $\\text{Ch}(e,f,g) = (e \\wedge f) \\oplus (\\neg e \\wedge g)$ "e'ye göre f ya da g'yi seç", $\\text{Maj}$ ise "üç bitin çoğunluğu"dur. $\\Sigma_0(a) = (a \\ggg 2) \\oplus (a \\ggg 13) \\oplus (a \\ggg 22)$ gibi döndürmeler bitleri kelime içinde dağıtır. Doğrusal olmayanlığı Ch, Maj ve mod $2^{32}$ toplama sağlar; AES'teki S-kutusunun görevi.
`),
      dene: ["sf-u7-blok", "sf-u7-dolgu-56", "sf-u7-merkle-damgard"],
      lab: "sha256",
    },
    {
      baslik: "Düşen hash'ler ve SHA-3",
      metin: md(`
Hash'lerin tarihi bir mezarlık gibidir:

- **MD5** (1992, 128 bit): 2004'te Xiaoyun Wang'ın ekibi çakışma gösterdi; bugün bir dizüstü bilgisayar saniyeler içinde çakışma üretir. 2012'de **Flame** casus yazılımı bir MD5 çakışmasıyla sahte bir Microsoft kod imzalama sertifikası üretip Windows Update gibi görünerek yayıldı.
- **SHA-1** (1995, 160 bit): 2005'ten beri teorik olarak zayıftı. 2017'de Google ve CWI Amsterdam'ın **SHAttered** çalışması aynı SHA-1 özetine sahip iki farklı PDF yayımladı; yaklaşık $2^{63}$ hesap, o gün için yaklaşık 110 GPU-yılı. Tarayıcılar SHA-1 sertifikalarını bıraktı. Git, çakışma tespiti eklenmiş bir SHA-1 kullanıyor ve SHA-256'ya geçiş için destek ekledi.
- **SHA-2** (SHA-224/256/384/512): Bugün güvenli kabul edilir; bilinen bir çakışma yoktur.

NIST, SHA-2 de aynı yapıda olduğu için bir yedek istedi ve 2007'de açık bir yarışma başlattı. 2012'de **Keccak** kazandı ve 2015'te **SHA-3** (FIPS 202) oldu. SHA-3 bambaşka bir yapı kullanır: **sünger**. 1600 bitlik bir durum mesajı blok blok "emer", sonra özeti "sıkar". Durumun **kapasite** denen kısmı çıktıya hiç yansımaz. Bu yüzden özet iç durumun tamamını vermez ve length extension yapılamaz.
`),
      dene: ["sf-u7-md5", "sf-u7-sha1", "sf-u7-sunger"],
    },
    {
      baslik: "Bütünlük ve Merkle ağaçları",
      metin: md(`
Hash'in en yaygın işi bütünlük denetimidir. Linux dağıtımlarının indirme sayfalarında dosyaların SHA-256 özetleri yazar. İndirdiğin dosyanın özetini hesaplar, yazanla karşılaştırırsın. Ama dikkat: özet, dosyayla **aynı yerden** geliyorsa yalnız kazara bozulmayı yakalar. Sunucuyu ele geçiren biri ikisini birlikte değiştirir. Saldırgana karşı özetin ayrı ve güvenilir bir kanaldan gelmesi ya da imzalı olması gerekir (11. ünite).

Çok sayıda parçayı tek bir özetle bağlamanın zarif yolu **Merkle ağacıdır**. Yapraklar veri parçalarının özetleridir. Her iç düğüm, iki çocuğunun özetlerinin birleşiminin özetidir. En üstte tek bir **kök** kalır. Bir parçanın ağaçta olduğunu kanıtlamak için bütün veriyi değil, yapraktan köke giden yoldaki kardeş özetleri vermek yeter: 1024 yaprakta 10, bir milyon yaprakta 20 özet.

> **Gerçek dünyada nerede karşına çıkar:**
> - **Git:** Her commit, ağaç ve dosya içeriğinin özetiyle adlandırılır. Geçmişte tek bir baytı değiştirmek sonraki bütün kimlikleri değiştirir.
> - **Yazılım dağıtımı:** Paket yöneticileri (npm, pip, apt) indirilen paketlerin özetini denetler; ~package-lock.json~ dosyasındaki ~integrity~ alanı bir SHA-512 özetidir.
> - **Certificate Transparency:** Yayımlanan her TLS sertifikası herkese açık bir Merkle ağacına yazılır. Sahte bir sertifika gizlice verilemez (12. ünite).
> - **BitTorrent ve IPFS:** Dosya parçaları özetleriyle doğrulanır; içerik adresi özetin kendisidir.
> - **Bitcoin:** Blok başlıkları çift SHA-256 ile zincirlenir; işlemler Merkle ağacıyla bloğa bağlanır.
`),
      dene: ["sf-u7-indirme", "sf-u7-merkle-kanit", "sf-u7-git-kimlik"],
    },
  ],
  test: [
    "sf-u7-sifreleme-degil", "sf-u7-cakisma-var", "sf-u7-md5-bit", "sf-u7-tur", "sf-u7-dolgu-120", "sf-u7-takvim",
  ],
};
