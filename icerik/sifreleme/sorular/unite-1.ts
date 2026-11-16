// 1. ünite (Temeller): kriptografinin güvenlik hedefleri, Kerckhoffs ilkesi, anahtar
// ile algoritma farkı, kodlama ile hash ile şifreleme farkı, bayt gösterimleri,
// simetrik ve açık anahtarlı şifrelemeye ilk bakış ve tehdit modeli.
import { sorular, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...sorular(U, "u1-hedefler", [
    {
      ad: "gizlilik",
      soru: "Bir mesajı yalnız alıcının okuyabilmesini sağlamak, kriptografinin hangi güvenlik hedefidir?",
      secenekler: ["Gizlilik", "Bütünlük", "Kimlik doğrulama", "Erişilebilirlik"],
      aciklama: "**Gizlilik** (confidentiality), bilginin yalnız yetkili kişilerce okunabilmesidir ve şifrelemeyle sağlanır. Bütünlük değişikliğin fark edilmesi, kimlik doğrulama kaynağın kanıtlanmasıdır.",
    },
    {
      ad: "butunluk",
      soru: "Bir bankanın sunucusu, \"100 TL gönder\" isteğinin yolda \"900 TL gönder\" diye değiştirilmediğinden emin olmak istiyor. Hangi hedef söz konusu?",
      secenekler: ["Bütünlük", "Gizlilik", "Erişilebilirlik", "Anonimlik"],
      aciklama: "Verinin fark edilmeden değiştirilememesi **bütünlüktür** (integrity). Mesaj şifreli olsa bile bütünlük ayrıca korunmazsa bazı şifreleme modlarında saldırgan bitleri çevirip içeriği değiştirebilir (6. ünite).",
    },
    {
      ad: "kimlik",
      soru: "\"Bu mesaj gerçekten Ayşe'den mi geldi?\" sorusunun cevabını veren mekanizma hangi hedefi sağlar?",
      secenekler: ["Kimlik doğrulama", "Gizlilik", "Erişilebilirlik", "Sıkıştırma"],
      aciklama: "Mesajın iddia ettiği kaynaktan geldiğini kanıtlamak **kimlik doğrulamadır** (authentication). MAC ve dijital imza bunu sağlar.",
    },
    {
      ad: "inkar",
      zorluk: 2,
      soru: "Bir sözleşmeyi onaylayan kişinin sonradan \"Ben onaylamadım\" diyememesi hangi hedefin konusudur ve tipik olarak neyle sağlanır?",
      secenekler: [
        "İnkâr edilemezlik; dijital imzayla",
        "Gizlilik; simetrik şifrelemeyle",
        "Bütünlük; Base64 kodlamayla",
        "Erişilebilirlik; yedeklemeyle",
      ],
      aciklama: "**İnkâr edilemezlik** (non-repudiation) için yalnız imzalayanın bildiği bir özel anahtarla atılan **dijital imza** gerekir. Ortak anahtarlı bir MAC bunu sağlamaz: anahtarı iki taraf da bildiği için MAC'i karşı taraf da üretebilirdi.",
    },
    {
      ad: "sifre-yetmez",
      dy: false,
      zorluk: 2,
      soru: "Bir mesaj şifrelendiyse, yolda değiştirilip değiştirilmediği de kendiliğinden anlaşılır.",
      aciklama: "Yanlış. Şifreleme gizliliği sağlar; bütünlük ayrı bir iştir. Örneğin CTR modunda şifreli metindeki bir bit çevrilince açık metindeki aynı bit çevrilir ve alıcı bunu fark etmez. Bu yüzden bugün **kimlik doğrulamalı şifreleme** (AES-GCM, ChaCha20-Poly1305) kullanılır.",
    },
  ]),
  ...sorular(U, "u1-kerckhoffs", [
    {
      ad: "ilke",
      soru: "Kerckhoffs ilkesine göre bir şifreleme sisteminin güvenliği neye dayanmalıdır?",
      secenekler: [
        "Yalnız anahtarın gizli kalmasına",
        "Algoritmanın gizli tutulmasına",
        "Şifreli metnin uzunluğunun gizlenmesine",
        "Kullanılan programlama dilinin bilinmemesine",
      ],
      aciklama: "Auguste Kerckhoffs 1883'te sistemin düşman eline geçse bile güvenli kalması gerektiğini yazdı: **algoritma herkesçe bilinebilir, gizli olan yalnız anahtardır**. Claude Shannon bunu \"düşman sistemi bilir\" diye özetledi.",
    },
    {
      ad: "gizli-algoritma",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir girişim, \"Kendi geliştirdiğimiz ve kimseye göstermediğimiz bir şifreleme algoritması kullandığımız için verileriniz güvende\" diyor. Bu iddianın temel sorunu nedir?",
      secenekler: [
        "Güvenliği algoritmanın gizliliğine bağlıyor; algoritma sızınca her şey çöker",
        "Gizli algoritmalar her zaman standart algoritmalardan yavaş çalışır",
        "Kendi algoritmasını yazan şirketlerin yasal olarak lisans alması gerekir",
        "Algoritma gizli olduğu için kullanıcılar şifrelerini çözemez",
      ],
      aciklama: "Bu **gizlilikle güvenlik** (security through obscurity) yaklaşımıdır. Algoritmalar tersine mühendislikle, sızıntıyla ya da eski bir çalışanla er geç ortaya çıkar. Ayrıca kimse incelemediği için zayıflıkları bilinmez. AES gibi standartlar yıllarca herkesin önünde saldırıya dayanarak seçildi.",
    },
    {
      ad: "acik-avantaj",
      dy: true,
      soru: "Algoritmanın herkese açık olması, güvenlik açıklarının daha çok kişi tarafından aranıp bulunmasını sağlar.",
      aciklama: "Doğru. AES, SHA-3 ve ML-KEM açık yarışmalarla seçildi; dünyanın dört bir yanındaki araştırmacılar yıllarca saldırdı. Kırılamayan ve iyi incelenmiş bir algoritma, gizli bir algoritmadan çok daha fazla güven verir.",
    },
  ]),
  ...sorular(U, "u1-anahtar", [
    {
      ad: "fark",
      soru: "Kilit benzetmesinde algoritma ve anahtar neye karşılık gelir?",
      secenekler: [
        "Algoritma kilidin tasarımı, anahtar ise o kilide özel çentikler",
        "Algoritma anahtarın kendisi, anahtar ise kilidin markası",
        "Algoritma kapının malzemesi, anahtar ise kapının rengi",
        "Algoritma kilidi açan kişi, anahtar ise kilidin satıldığı yer",
      ],
      aciklama: "Bütün kilitler aynı tasarımla (algoritma) üretilebilir; her birini yalnız kendi çentikleri (anahtar) açar. Tasarımı herkes bilebilir, önemli olan çentiklerin gizli kalmasıdır.",
    },
    {
      ad: "128-bit",
      sayi: ["2^128", "340282366920938463463374607431768211456"],
      soru: "128 bitlik bir AES anahtarı için kaç farklı anahtar vardır? (Üslü yazabilirsin: 2^n)",
      aciklama: "Her bit 0 ya da 1 olabildiği için $n$ bitlik anahtar uzayında $2^n$ anahtar vardır: $2^{128} \\approx 3{,}4 \\times 10^{38}$.",
    },
    {
      ad: "bir-bit",
      soru: "Anahtar uzunluğu 1 bit artırılınca kaba kuvvetle anahtarı bulmak için gereken deneme sayısı nasıl değişir?",
      secenekler: ["İki katına çıkar", "1 artar", "Değişmez", "Karesi alınır"],
      aciklama: "$2^{n+1} = 2 \\cdot 2^n$. Her ek bit anahtar uzayını ikiye katlar; 128 bitten 256 bite geçmek uzayı $2^{128}$ kat büyütür.",
    },
    {
      ad: "kaba-kuvvet",
      zorluk: 2,
      sayi: ["2^55", "36028797018963968"],
      soru: "56 bitlik bir anahtarı (eski DES) kaba kuvvetle ararken, saldırgan anahtarı **ortalama** kaç denemede bulur? (Üslü yazabilirsin: 2^n)",
      aciklama: "Doğru anahtar uzayın herhangi bir yerinde olabilir; ortalama olarak uzayın yarısı denenince bulunur: $2^{56} / 2 = 2^{55}$. DES 1998'de bu yüzden özel bir makineyle birkaç günde kırıldı.",
    },
  ]),
  ...sorular(U, "u1-kodlama", [
    {
      ad: "base64-sifre",
      etiket: "hata-bul",
      soru: "Bir uygulama kullanıcı parolalarını veritabanında Base64 ile \"şifreleyerek\" saklıyor. Bu yaklaşımın sorunu nedir?",
      secenekler: [
        "Base64 anahtarsız bir kodlamadır; herkes parolaları anında geri çevirir",
        "Base64 çıktısı çok uzun olduğu için veritabanını gereğinden fazla büyütür",
        "Base64 yalnız İngilizce harfleri desteklediği için Türkçe parolalar bozulur",
        "Base64 ile kodlanan iki farklı parola aynı sonucu verebilir",
      ],
      aciklama: "Base64 ikili veriyi metin karakterleriyle göstermek için kullanılan bir **kodlamadır**; anahtar yoktur, geri çevirmek için hiçbir sır gerekmez. Parolalar yavaş bir parola hash'iyle (Argon2, bcrypt) saklanır (9. ünite).",
    },
    {
      ad: "base64-coz",
      etiket: "ctf",
      soru: "Bir yapılandırma dosyasında ~parola: U2lmcmU=~ satırı görüyorsun. Base64 olduğunu tahmin ediyorsun. Parola nedir?",
      secenekler: ["Sifre", "Parola", "Gizli", "Anahtar"],
      aciklama: "~U2lmcmU=~ Base64 çözülünce ~53 69 66 72 65~ baytları çıkar; bunlar ASCII'de **Sifre** demektir. Hiçbir anahtar gerekmedi: kodlama gizlilik sağlamaz.",
    },
    {
      ad: "base64-boyut",
      sayi: [40],
      zorluk: 2,
      soru: "Base64 her 3 baytı 4 karakterle gösterir. 30 baytlık bir veri Base64 ile kodlanınca kaç karakter olur?",
      aciklama: "30 bayt 3'e tam bölünür: $30 / 3 = 10$ grup, her grup 4 karakter: $10 \\times 4 = 40$ karakter. Dolgu (~=~) yalnız bayt sayısı 3'e bölünmediğinde eklenir.",
    },
    {
      ad: "neden-var",
      soru: "Base64 gibi kodlamalar neden kullanılır?",
      secenekler: [
        "İkili veriyi yalnız metin taşıyan kanallarda bozulmadan iletmek için",
        "Veriyi yetkisiz kişilerin okuyamayacağı hale getirmek için",
        "Verinin değiştirilip değiştirilmediğini anlamak için",
        "Veriyi sıkıştırıp daha az yer kaplamasını sağlamak için",
      ],
      aciklama: "E-posta, JSON ve URL gibi kanallar her baytı taşıyamaz. Base64 ikili veriyi (bir anahtar, bir resim, şifreli metin) güvenli karakterlerle yazar. Boyutu yaklaşık üçte bir büyütür; sıkıştırmaz, gizlemez, bütünlük sağlamaz.",
    },
  ]),
  ...sorular(U, "u1-uc-islem", [
    {
      ad: "geri-donus",
      soru: "Kodlama, hash ve şifreleme için hangisi doğrudur?",
      secenekler: [
        "Kodlama herkesçe, şifreleme anahtarla geri çevrilir; hash geri çevrilmez",
        "Üçü de anahtarla geri çevrilir, yalnız hızları farklıdır",
        "Hash anahtarla geri çevrilir; kodlama ve şifreleme geri çevrilmez",
        "Kodlama geri çevrilmez; hash ve şifreleme herkesçe geri çevrilir",
      ],
      aciklama: "Üç işlemin farkı geri dönüşte: **kodlama** sırsız geri çevrilir, **şifreleme** yalnız anahtarla geri çevrilir, **hash** tek yönlüdür ve her uzunluktaki girişi sabit uzunlukta bir özete indirir.",
    },
    {
      ad: "hash-sabit",
      dy: true,
      soru: "SHA-256'nın çıktısı, girişin 1 bayt ya da 1 GB olmasından bağımsız olarak her zaman 256 bittir.",
      aciklama: "Doğru. Hash fonksiyonları her uzunluktaki girişi sabit uzunlukta bir özete indirir. Bu yüzden hash bir \"sıkıştırma\" değildir: 1 GB'lık dosyayı 32 bayttan geri elde etmek bilgi kuramı olarak da imkânsızdır.",
    },
    {
      ad: "hangisi",
      zorluk: 2,
      soru: "Bir yazılım indirme sayfası, dosyanın yanında 64 karakterlik onaltılık bir değer yayınlıyor ve \"indirdiğiniz dosyayla karşılaştırın\" diyor. Bu değer büyük olasılıkla nedir?",
      secenekler: [
        "Dosyanın SHA-256 hash'i",
        "Dosyanın Base64 kodlaması",
        "Dosyayı açan AES anahtarı",
        "Dosyanın şifreli kopyası",
      ],
      aciklama: "64 onaltılık karakter $64 \\times 4 = 256$ bittir: SHA-256 özeti. İndirdiğin dosyanın hash'i aynı çıkarsa dosya yolda bozulmamıştır. (Saldırgan sayfayı da değiştirebiliyorsa hash yetmez; o zaman imza gerekir.)",
    },
    {
      ad: "tablo",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisinde işlem ile amacı **yanlış** eşleştirilmiştir?",
      secenekler: [
        "Hash: mesajı yalnız alıcının okuyabilmesi",
        "Şifreleme: veriyi anahtarı olmayanlardan gizlemek",
        "Kodlama: ikili veriyi metin kanalında taşımak",
        "Hash: dosyanın bozulmadığını denetlemek",
      ],
      aciklama: "Hash gizlilik sağlamaz: aynı mesajın hash'ini herkes hesaplayabilir ve tahmin edilebilir mesajlar hash'ten bulunabilir. Gizlilik şifrelemenin işidir.",
    },
  ]),
  ...sorular(U, "u1-bayt", [
    {
      ad: "hex-a",
      cevap: ["41", "0x41"],
      soru: "\"A\" harfi ASCII ve UTF-8'de 65 sayısıyla gösterilir. Bu baytın onaltılık (hex) yazımı nedir?",
      aciklama: "$65 = 4 \\cdot 16 + 1$, yani onaltılıkta **41** (~0x41~). Bit deseni ~0100 0001~: her hex basamağı tam 4 bite karşılık gelir.",
    },
    {
      ad: "utf8-s",
      sayi: [2],
      soru: "\"ş\" harfi UTF-8'de kaç bayt yer kaplar?",
      aciklama: "ASCII dışındaki \"ş\" (U+015F) UTF-8'de iki baytla yazılır: ~C5 9F~. Bu yüzden \"şifre\" kelimesi 5 harf ama 6 bayttır. Şifreleme baytlar üzerinde çalışır; metin önce baytlara çevrilir.",
    },
    {
      ad: "anahtar-hex",
      sayi: [64],
      zorluk: 2,
      soru: "256 bitlik bir anahtar onaltılık (hex) olarak yazılınca kaç karakter olur?",
      aciklama: "256 bit = 32 bayt. Her bayt iki hex karakteriyle yazılır: $32 \\times 2 = 64$ karakter.",
    },
    {
      ad: "bit-desen",
      cevap: ["10100101"],
      zorluk: 2,
      soru: "Onaltılık ~A5~ baytının 8 bitlik ikili yazımı nedir?",
      aciklama: "Her hex basamağı 4 bittir: ~A~ = 10 = ~1010~, ~5~ = ~0101~. Birlikte ~10100101~.",
    },
  ]),
  ...sorular(U, "u1-simetrik-asimetrik", [
    {
      ad: "simetrik",
      soru: "Simetrik şifrelemenin temel özelliği nedir?",
      secenekler: [
        "Şifreleme ve şifre çözmede aynı anahtar kullanılır",
        "Şifreleme açık, şifre çözme özel anahtarla yapılır",
        "Hiç anahtar kullanılmaz, yalnız algoritma gizlidir",
        "Her mesaj için iki ayrı algoritma kullanılır",
      ],
      aciklama: "Simetrik şifrelemede (AES, ChaCha20) iki taraf **aynı gizli anahtarı** paylaşır. Hızlıdır ama anahtarın karşı tarafa güvenle ulaştırılması ayrı bir sorundur.",
    },
    {
      ad: "dagitim",
      zorluk: 2,
      soru: "Hiç tanışmamış iki kişinin internette ortak bir gizli anahtara sahip olmasını sağlayan fikir hangisidir?",
      secenekler: [
        "Açık anahtarlı kriptografi",
        "Anahtarı Base64 ile kodlayıp e-postayla göndermek",
        "Anahtarı mesajın sonuna ekleyip birlikte göndermek",
        "Anahtar yerine algoritmayı gizli tutmak",
      ],
      aciklama: "1976'da Diffie ve Hellman, dinlenen bir kanaldan ortak sır üretmenin yolunu gösterdi; ardından RSA geldi. Bugün her HTTPS bağlantısında önce açık anahtarlı bir yöntemle oturum anahtarı kurulur, veri sonra hızlı simetrik şifreyle şifrelenir.",
    },
    {
      ad: "anahtar-sayisi",
      sayi: [45],
      zorluk: 3,
      soru: "10 kişilik bir grupta herkes herkesle ayrı bir simetrik anahtar paylaşacaksa toplam kaç anahtar gerekir?",
      aciklama: "Her ikili için bir anahtar: $\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$.\n---\n$n$ kişide $\\frac{n(n-1)}{2}$ anahtar gerekir; 1000 kişide bu yaklaşık yarım milyondur. Açık anahtarlı kriptografide ise herkesin bir anahtar çifti yeter.",
    },
  ]),
  ...sorular(U, "u1-tehdit", [
    {
      ad: "tanim",
      soru: "Bir sistem tasarlarken \"Kimden, neyi ve hangi yeteneklere karşı koruyoruz?\" sorusunun cevabına ne denir?",
      secenekler: ["Tehdit modeli", "Anahtar uzayı", "Şifreleme modu", "Güvenlik sertifikası"],
      aciklama: "**Tehdit modeli** olmadan \"güvenli\" kelimesinin anlamı yoktur. Kafedeki Wi-Fi'ı dinleyen biri, veritabanına erişen bir geliştirici ve telefonu çalan bir hırsız farklı şeyler görür; her birine karşı farklı önlemler gerekir.",
    },
    {
      ad: "tls-sunucu",
      zorluk: 2,
      soru: "Bir mesajlaşma uygulaması yalnız TLS (HTTPS) kullanıyor. Aşağıdakilerden hangisi mesajların içeriğini okuyabilir?",
      secenekler: [
        "Sunucuyu işleten şirketin yöneticisi",
        "Kafedeki ağı dinleyen kişi",
        "Kullanıcının internet servis sağlayıcısı",
        "Arada trafiği kaydeden bir yönlendirici",
      ],
      aciklama: "TLS yalnız **yolu** korur: mesaj sunucuya ulaşınca açılır ve sunucuda okunur halde durur. Sunucuyu işletenlere karşı korunmak için **uçtan uca şifreleme** gerekir (13. ünite).",
    },
    {
      ad: "mutlak",
      dy: false,
      soru: "İyi tasarlanmış bir sistem, bütün saldırganlara karşı aynı anda ve tam olarak korur.",
      aciklama: "Yanlış. Her önlemin bir maliyeti ve sınırı vardır; örneğin kilidi açık bir telefonu ele geçiren kişi, uçtan uca şifrelemeye rağmen ekrandaki mesajları okur. Tasarım, tehdit modelindeki saldırganlara karşı yapılır ve kalan riskler açıkça yazılır.",
    },
  ]),
];
