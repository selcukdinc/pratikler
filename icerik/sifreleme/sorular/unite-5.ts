// 5. ünite (Simetrik dünya): XOR ile şifreleme ve one-time pad, anahtar tekrarı (iki
// zamanlı pad), blok şifre fikri (karıştırma ve yayılma), DES'ten AES'e, AES'in tur
// yapısı, tur adımları ve anahtar genişletme. Hesap sorularının cevapları sorular.test.ts'te
// oyuncak AES'le (src/kripto/oyuncak/aes.ts) sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 5;

// İki zamanlı pad meydan okuması: aynı anahtarla şifrelenmiş iki mesaj (hex)
export const IKI_ZAMAN_C1 = "d67b4e3eae74c893603b2a8c10df06";
export const IKI_ZAMAN_C2 = "c47b4c3ea415bb906424468607d209";

export const unite5: Soru[] = [
  ...sorular(U, "u5-otp", [
    {
      ad: "xor-geri",
      soru: "Açık metin baytı $M$, anahtar baytı $K$ ise $C = M \\oplus K$. Alıcı açık metni nasıl geri alır?",
      secenekler: ["$C \\oplus K$ hesaplar", "$C - K$ hesaplar", "$C \\oplus C$ hesaplar", "$K \\oplus K$ hesaplar"],
      aciklama: "XOR kendi kendinin tersidir: $K \\oplus K = 0$ ve $X \\oplus 0 = X$. Bu yüzden $C \\oplus K = M \\oplus K \\oplus K = M$. Şifreleme ile çözme aynı işlemdir.",
    },
    {
      ad: "xor-bayt",
      cevap: ["6B", "0x6B"],
      soru: "~A~ harfinin ASCII kodu 0x41'dir. Bu bayt 0x2A anahtar baytıyla XOR'lanırsa sonuç hangi bayttır? İki hex rakamıyla yaz.",
      aciklama: "0x41 = 0100 0001, 0x2A = 0010 1010. Bit bit XOR: 0110 1011 = **0x6B** (ASCII'de küçük k harfi).",
    },
    {
      ad: "otp-kosullar",
      zorluk: 2,
      soru: "One-time pad'in kusursuz gizlilik sağlaması için anahtar hangi koşulların hepsini sağlamalıdır?",
      secenekler: [
        "Mesaj kadar uzun, gerçekten rastgele ve yalnız bir kez kullanılmış olmalı",
        "En az 128 bit, akılda kalıcı ve iki tarafça ezberlenmiş olmalı",
        "Mesajdan kısa, sözde rastgele ve her gün yenilenmiş olmalı",
        "Mesaj kadar uzun, bir parolanın SHA-256 hash'i ve herkese açık olmalı",
      ],
      aciklama: "Shannon 1949'da gösterdi: anahtar mesaj kadar uzun, düzgün dağılımlı rastgele ve **tek kullanımlık** olursa, şifreli metin her olası açık metne eşit olasılıkla karşılık gelir. Üç koşuldan biri bozulursa garanti kaybolur.",
    },
    {
      ad: "kusursuz",
      dy: true,
      soru: "Doğru kullanılan one-time pad, sınırsız hesap gücüne sahip bir saldırgana karşı bile güvenlidir.",
      aciklama: "Doğru. Şifreli metin, aynı uzunluktaki her açık metne başka bir anahtarla karşılık gelir; hangisinin doğru olduğunu seçmek için hiçbir bilgi yoktur. Kaba kuvvet bütün anlamlı mesajları eşit olasılıkla verir. Bu güvenlik hesap gücüne değil bilgi kuramına dayanır.",
    },
    {
      ad: "anahtar-boyu",
      sayi: [4],
      soru: "4 GB'lık bir video dosyasını one-time pad ile şifrelemek için en az kaç GB anahtar gerekir?",
      aciklama: "One-time pad'de anahtar mesaj kadar uzundur: **4 GB**. Üstelik bu anahtar karşı tarafa güvenli bir yoldan ulaştırılmalıdır. 4 GB'ı güvenle taşıyabiliyorsan videoyu da taşıyabilirsin; one-time pad'in pratikte kullanılmamasının nedeni budur.",
    },
    {
      ad: "neden-yok",
      soru: "One-time pad kusursuz güvenliğe rağmen günlük uygulamalarda neden kullanılmaz?",
      secenekler: [
        "Mesaj kadar uzun anahtarı önceden güvenle paylaşmak ve hiç tekrar etmemek pratik değildir",
        "XOR işlemi bilgisayarlarda çok yavaş olduğu için büyük dosyalarda kullanılamaz",
        "Kuantum bilgisayarlar one-time pad'i birkaç saniyede kırabilir",
        "Şifreli metin açık metinden çok daha uzun olduğu için ağ trafiğini artırır",
      ],
      aciklama: "Sorun anahtar dağıtımıdır. Her bayt için bir bayt rastgele anahtar üretmek, karşı tarafa önceden güvenle ulaştırmak ve hiçbirini iki kez kullanmamak gerekir. Soğuk Savaş'ta diplomatik hatlarda kurye ile taşınan anahtar defterleriyle kullanıldı. Modern şifreler kısa bir anahtardan uzun bir anahtar akışı üreterek bu sorunu çözer.",
    },
  ]),
  ...sorular(U, "u5-iki-zaman", [
    {
      ad: "iki-zaman",
      zorluk: 2,
      soru: "Aynı one-time pad anahtarıyla iki mesaj şifrelenirse saldırgan iki şifreli metni XOR'layarak ne elde eder?",
      secenekler: ["İki açık metnin XOR'unu; anahtar tamamen düşer", "Anahtarın kendisini", "Rastgele baytlar; hiçbir bilgi elde etmez", "İki açık metnin toplamının hash'ini"],
      aciklama: "$C_1 \\oplus C_2 = (M_1 \\oplus K) \\oplus (M_2 \\oplus K) = M_1 \\oplus M_2$. Anahtar yok olur. Açık metinlerin XOR'u rastgele değildir: birinin bir parçası tahmin edilirse ötekinin aynı yerdeki parçası çıkar.",
    },
    {
      ad: "venona",
      dy: true,
      soru: "Tek kullanımlık anahtar defterlerinin bir kısmı ikinci kez kullanıldığı için Sovyet diplomatik trafiğinin bir bölümü sonradan çözülebilmiştir.",
      aciklama: "Doğru. ABD'nin Venona projesi 1940'larda Sovyet trafiğinde tekrar kullanılmış anahtar sayfalarını yakaladı ve binlerce mesajın bir kısmını açtı. Kusursuz güvenlik, kullanım kuralı bozulunca hemen kaybolur.",
    },
    {
      ad: "iki-zaman-coz",
      etiket: "ctf",
      zorluk: 3,
      cevap: ["KAPIDA BEKLEYIN"],
      soru: `Aynı anahtarla şifrelenmiş iki mesaj yakaladın (hex): ~${IKI_ZAMAN_C1}~ ve ~${IKI_ZAMAN_C2}~. Birinci mesajın ~YARIN SAAT ONDA~ olduğunu biliyorsun (ASCII). İkinci mesaj nedir?`,
      aciklama: "Anahtarı bulman bile gerekmez: $M_2 = C_1 \\oplus C_2 \\oplus M_1$.\n---\nÖnce $C_1 \\oplus C_2$'yi bayt bayt hesapla, sonra ~YARIN SAAT ONDA~ baytlarıyla XOR'la. İlk bayt: 0xd6 ⊕ 0xc4 = 0x12, 0x12 ⊕ 0x59 (Y) = 0x4B (K).\n---\nBütün baytlar: **KAPIDA BEKLEYIN**.",
    },
    {
      ad: "bilinen-parca",
      soru: "Aynı anahtar akışıyla şifrelenmiş iki mesajdan birinde \"Sayın\" kelimesinin geçtiği tahmin ediliyor. Saldırgan bu tahmini nasıl kullanır?",
      secenekler: [
        "Kelimeyi her konumda açık metinlerin XOR'una uygular, anlamlı parça çıkan yerleri arar",
        "Kelimenin SHA-256 hash'ini alıp şifreli metinlerin başıyla karşılaştırır",
        "Kelimeyi anahtar olarak kullanıp iki şifreli metni Vigenère ile çözer",
        "Tahminin işe yaraması için önce anahtarın tamamını bilmesi gerekir",
      ],
      aciklama: "Bu yönteme **crib dragging** denir: tahmin edilen kelime $M_1 \\oplus M_2$ üzerinde kaydırılır. Doğru konumda öteki mesajın aynı yerdeki parçası anlamlı metin olarak çıkar; yeni çıkan parça yeni tahminlere kapı açar. 17. ünitede aynı hatanın modern hali olan nonce tekrarını göreceksin.",
    },
  ]),
  ...sorular(U, "u5-blok", [
    {
      ad: "blok-tanim",
      soru: "Blok şifre nedir?",
      secenekler: [
        "Sabit boyutlu bir girişi anahtara bağlı, tersi alınabilen bir eşlemeyle aynı boyutta çıkışa çeviren şifre",
        "Mesajı harf harf kaydırarak şifreleyen, anahtarı tek bir sayı olan şifre",
        "Değişken uzunluklu mesajdan sabit uzunlukta, geri döndürülemez bir özet üreten fonksiyon",
        "Açık anahtarla şifreleyip özel anahtarla çözen, iki anahtarlı şifre",
      ],
      aciklama: "Blok şifre, her anahtar için $n$ bitlik bloklar üzerinde bir **permütasyondur**: AES'te $n = 128$. Tersi alınabilir olmalıdır, yoksa çözme olmaz. Sabit uzunlukta özet üreten ve geri dönmeyen fonksiyon hash fonksiyonudur (7. ünite).",
    },
    {
      ad: "karistirma",
      soru: "Shannon'ın \"karıştırma\" (confusion) ilkesi neyi ister?",
      secenekler: [
        "Anahtar ile şifreli metin arasındaki ilişkinin karmaşık ve doğrusal olmayan olmasını",
        "Açık metindeki bir bitin şifreli metnin pek çok bitini etkilemesini",
        "Şifreli metnin açık metinden daha uzun olmasını",
        "Her mesajın farklı bir algoritmayla şifrelenmesini",
      ],
      aciklama: "**Karıştırma** anahtarın şifreli metne karmaşık biçimde yansımasıdır; AES'te bunu doğrusal olmayan S-kutusu sağlar. **Yayılma** (diffusion) ise tek bir giriş bitinin çıkışın her yerine dağılmasıdır; AES'te ShiftRows ve MixColumns sağlar.",
    },
    {
      ad: "yayilma",
      soru: "İyi bir blok şifrede açık metnin tek bir biti değiştirilirse 128 bitlik şifreli bloğun yaklaşık kaç biti değişir?",
      secenekler: ["Yaklaşık 64 bit, yani yarısı", "Yalnızca 1 bit", "Yaklaşık 8 bit, yani bir bayt", "128 bitin hepsi"],
      aciklama: "Buna **çığ etkisi** denir. Her çıkış biti yarı olasılıkla değişmelidir; ortalama 64 bit. Hepsinin değişmesi de bir desen olurdu: saldırgan bütün bitleri çevirerek eski bloğu bulurdu.",
    },
    {
      ad: "permutasyon",
      dy: false,
      soru: "Bir blok şifrede iki farklı açık metin bloğu aynı anahtarla aynı şifreli bloğa dönüşebilir.",
      aciklama: "Yanlış. Aynı anahtarla iki blok aynı çıkışı verseydi alıcı hangisinin gönderildiğini bilemezdi; çözme imkânsız olurdu. Blok şifre her anahtar için bire bir bir eşlemedir (permütasyon).",
    },
  ]),
  ...sorular(U, "u5-des", [
    {
      ad: "des-anahtar",
      sayi: [56],
      soru: "1977'de standart olan DES'in etkin anahtar uzunluğu kaç bittir?",
      aciklama: "DES anahtarı 64 bit yazılır ama 8 biti eşlik bitidir; etkin uzunluk **56 bittir**. 1998'de EFF'nin Deep Crack makinesi bu anahtar uzayını birkaç günde taradı.",
    },
    {
      ad: "2des",
      zorluk: 3,
      soru: "İki ayrı 56 bitlik anahtarla art arda DES uygulamak (2DES) neden 112 bitlik güvenlik vermez?",
      secenekler: [
        "Ortada buluşma saldırısı iki yarıyı ayrı tarar; iş yaklaşık $2^{57}$ olur",
        "İki DES uygulaması her zaman tek bir DES anahtarına eşdeğerdir",
        "DES'in S-kutuları ikinci uygulamada birinci uygulamanın etkisini geri alır",
        "112 bitlik anahtarı saklamak için gereken bellek saldırgana anahtarı verir",
      ],
      aciklama: "**Ortada buluşma** (meet-in-the-middle): bilinen bir açık-şifreli çiftte açık metin bütün $K_1$'lerle şifrelenip sonuçlar tabloya yazılır, şifreli metin bütün $K_2$'lerle çözülüp tabloda aranır. İki kez $2^{56}$ iş, toplam yaklaşık $2^{57}$. Bu yüzden 3DES üç uygulama kullanır ve etkin güvenliği yaklaşık 112 bittir.",
    },
    {
      ad: "aes-yarisma",
      soru: "AES nasıl seçildi?",
      secenekler: [
        "NIST'in 1997'de açtığı açık yarışmada dünyanın dört bir yanından gelen adaylar yıllarca herkesin önünde incelendi",
        "ABD Ulusal Güvenlik Ajansı tarafından gizli olarak tasarlanıp tamamlanmış halde yayımlandı",
        "En hızlı çalışan algoritma ölçülerek hiç kriptanaliz yapılmadan seçildi",
        "DES'in tasarımcıları DES'in anahtarını 128 bite büyüterek yeni bir sürüm hazırladı",
      ],
      aciklama: "NIST 1997'de açık bir yarışma ilan etti; 15 aday üç yıl boyunca herkesin gözü önünde saldırıya uğradı. 2000'de Belçikalı Joan Daemen ve Vincent Rijmen'in **Rijndael** algoritması kazandı, 2001'de FIPS-197 olarak yayımlandı. Kerckhoffs ilkesinin kurumsal hali.",
    },
  ]),
  ...sorular(U, "u5-aes-yapi", [
    {
      ad: "blok-boyu",
      sayi: [128],
      soru: "AES-256'nın blok boyu kaç bittir?",
      aciklama: "AES'in blok boyu anahtar boyundan bağımsız olarak hep **128 bittir** (16 bayt, 4×4 durum matrisi). AES-128, AES-192 ve AES-256'daki sayı anahtar boyunu gösterir.",
    },
    {
      ad: "tur-128",
      sayi: [10],
      soru: "AES-128 kaç tur uygular?",
      aciklama: "Tur sayısı anahtar boyuna bağlıdır: 128 bit → **10**, 192 bit → 12, 256 bit → 14 tur.",
    },
    {
      ad: "tur-256",
      sayi: [14],
      soru: "AES-256 kaç tur uygular?",
      aciklama: "128 bit → 10, 192 bit → 12, 256 bit → **14** tur. Daha uzun anahtar, anahtar genişletmenin ve saldırıların daha fazla tura yayılmasını gerektirir.",
    },
    {
      ad: "durum",
      soru: "AES'in \"durum\" (state) matrisi nedir?",
      secenekler: [
        "16 baytlık bloğun sütun sütun yerleştirildiği 4×4 bayt matrisi",
        "Anahtarın 4×4 bitlik ikili gösterimi",
        "Bütün tur anahtarlarının art arda yazıldığı 11×16 baytlık tablo",
        "S-kutusunun 16×16 baytlık tablosu",
      ],
      aciklama: "Girişin 16 baytı ilk sütundan başlayarak yukarıdan aşağı yerleştirilir: baytlar 0-3 ilk sütun, 4-7 ikinci sütun. Bütün tur adımları bu matris üzerinde çalışır.",
    },
    {
      ad: "son-tur",
      zorluk: 2,
      soru: "AES'in son turunu ötekilerden ayıran nedir?",
      secenekler: ["Son turda MixColumns adımı yoktur", "Son turda SubBytes adımı yoktur", "Son turda tur anahtarı eklenmez", "Son tur iki kez tekrarlanır"],
      aciklama: "Son tur SubBytes, ShiftRows ve AddRoundKey'den oluşur; MixColumns atlanır. Bu güvenliği azaltmaz ama şifre çözmenin yapısını şifrelemeyle simetrik yapar. Ayrıca en başta, ilk turdan önce bir AddRoundKey vardır.",
    },
    {
      ad: "kaba-kuvvet-128",
      soru: "Saniyede $10^{12}$ anahtar deneyen bir makine AES-128'in bütün anahtar uzayını yaklaşık ne kadar sürede tarar?",
      secenekler: ["Yaklaşık $10^{19}$ yıl", "Yaklaşık 3 gün", "Yaklaşık 50 yıl", "Yaklaşık $10^{6}$ yıl"],
      aciklama: "$2^{128} \\approx 3{,}4 \\times 10^{38}$ anahtar. Saniyede $10^{12}$ ile $3{,}4 \\times 10^{26}$ saniye, bir yıl yaklaşık $3{,}15 \\times 10^7$ saniye: yaklaşık $10^{19}$ yıl. Evrenin yaşı yaklaşık $1{,}4 \\times 10^{10}$ yıldır.",
    },
  ]),
  ...sorular(U, "u5-aes-adimlar", [
    {
      ad: "subbytes",
      soru: "AES'te doğrusal olmayan tek adım hangisidir?",
      secenekler: ["SubBytes", "ShiftRows", "MixColumns", "AddRoundKey"],
      aciklama: "SubBytes her baytı S-kutusundan geçirir. ShiftRows bir yer değiştirme, MixColumns GF(2⁸)'de matris çarpımı, AddRoundKey XOR'dur; üçü de doğrusaldır. S-kutusu olmasaydı AES bir doğrusal denklem sistemine dönüşür ve çözülürdü.",
    },
    {
      ad: "sbox-63",
      cevap: ["63", "0x63"],
      soru: "AES S-kutusu 0x00 baytını hangi bayta dönüştürür? İki hex rakamıyla yaz.",
      aciklama: "S-kutusu önce baytın GF(2⁸)'deki tersini alır (0'ın tersi 0 kabul edilir), sonra bir afin dönüşüm uygular ve sonuna 0x63 ekler (XOR). 0 için ters 0, afin kısım 0 verir ve sonuç **0x63** olur.",
    },
    {
      ad: "sbox-sabit-yok",
      dy: true,
      soru: "AES S-kutusu hiçbir baytı kendisine dönüştürmez.",
      aciklama: "Doğru. Afin dönüşümdeki 0x63 sabiti sabit nokta ($S(x) = x$) ve karşıt sabit nokta ($S(x) = \\bar{x}$) kalmayacak biçimde seçildi. Testlerimiz 256 değerin hepsini dener.",
    },
    {
      ad: "shiftrows",
      soru: "ShiftRows adımında durum matrisinin üçüncü satırına (satır 2, sıfırdan sayınca) ne olur?",
      secenekler: ["İki bayt sola döner", "Bir bayt sola döner", "Üç bayt sola döner", "Yerinde kalır"],
      aciklama: "Satır $r$, $r$ bayt sola döner: satır 0 yerinde kalır, satır 1 bir, satır 2 iki, satır 3 üç bayt döner. Böylece bir sütunun baytları sonraki MixColumns'ta dört farklı sütuna dağılır.",
    },
    {
      ad: "xtime",
      zorluk: 2,
      cevap: ["15", "0x15"],
      soru: "MixColumns'ta $\\{02\\} \\cdot x$ çarpımı $x$'i bir bit sola kaydırır; taşma olursa sonuç 0x1B ile XOR'lanır. $\\{02\\} \\cdot \\{87\\}$ kaçtır? İki hex rakamıyla yaz.",
      aciklama: "0x87 = 1000 0111. En üst bit 1, yani taşma olacak.\n---\nSola kaydır ve 8 bite kırp: 0000 1110 = 0x0E.\n---\nTaşma olduğu için 0x1B ile XOR: 0x0E ⊕ 0x1B = **0x15**.",
    },
    {
      ad: "carp-03",
      zorluk: 3,
      cevap: ["92", "0x92"],
      soru: "$\\{03\\} \\cdot x = (\\{02\\} \\cdot x) \\oplus x$ olduğunu kullanarak $\\{03\\} \\cdot \\{87\\}$ değerini hesapla. İki hex rakamıyla yaz.",
      aciklama: "Önce $\\{02\\} \\cdot \\{87\\} = $ 0x15 (bir bit sola kaydır, taşma var, 0x1B ile XOR).\n---\nSonra 0x15 ⊕ 0x87 = 0001 0101 ⊕ 1000 0111 = 1001 0010 = **0x92**.",
    },
    {
      ad: "iki-tur",
      zorluk: 2,
      soru: "AES'te bir giriş baytının değişmesi kaç tur sonra durum matrisinin 16 baytının hepsini etkiler?",
      secenekler: ["2 tur", "1 tur", "5 tur", "10 tur"],
      aciklama: "1. turda MixColumns değişen baytı kendi sütununun 4 baytına yayar. 2. turda ShiftRows bu 4 baytı 4 farklı sütuna dağıtır, MixColumns her sütunu doldurur: 16 bayt. Tur gezgininde bir baytı değiştirip renklenmeyi izleyebilirsin.",
    },
  ]),
  ...sorular(U, "u5-anahtar-genisletme", [
    {
      ad: "tur-anahtari",
      sayi: [11],
      soru: "AES-128'de anahtar genişletme kaç tane 128 bitlik tur anahtarı üretir?",
      aciklama: "10 turun her biri bir tur anahtarı kullanır, ayrıca ilk turdan önce bir AddRoundKey vardır: **11** tur anahtarı, yani 44 tane 32 bitlik kelime.",
    },
    {
      ad: "kelime-256",
      zorluk: 2,
      sayi: [60],
      soru: "AES-256'da anahtar genişletme toplam kaç tane 32 bitlik kelime üretir?",
      aciklama: "14 tur + baştaki AddRoundKey = 15 tur anahtarı. Her biri 4 kelime: $4 \\times 15 =$ **60** kelime. İlk 8 kelime doğrudan 256 bitlik anahtarın kendisidir.",
    },
    {
      ad: "rcon",
      soru: "Anahtar genişletmedeki tur sabitleri (Rcon) ne işe yarar?",
      secenekler: [
        "Turları birbirinden farklılaştırır; tur anahtarları arasında simetri kalmaz",
        "Tur anahtarlarını gizli tutmak için şifreli metne eklenir",
        "Anahtar uzunluğunu her turda bir bayt artırır",
        "S-kutusunun yerine kullanılarak hızı artırır",
      ],
      aciklama: "Rcon değerleri GF(2⁸)'de 2'nin kuvvetleridir (01, 02, 04, ..., 80, 1B, 36). Her turda farklı bir sabit eklenmesi, örneğin bütün baytları aynı olan bir anahtardan da birbirine benzemeyen tur anahtarları çıkmasını sağlar.",
    },
  ]),
];
