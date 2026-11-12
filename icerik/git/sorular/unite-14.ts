// 14. ünite (Usta): gizli anahtarlar ve depo güvenliği. Gizli bilginin ne olduğu,
// public depoları tarayan botlar, silmenin neden yetmediği, doğru müdahale sırası,
// önleme, push protection ve gözden kaçan sızıntı yerleri.
import { sorular, type Soru } from "./yardimci.ts";

const U = 14;

export const unite14: Soru[] = [
  ...sorular(U, "u14-gizli-nedir", [
    {
      ad: "hangisi-gizli",
      soru: "Aşağıdakilerden hangisi bir depoya hiç girmemesi gereken gizli bilgidir?",
      secenekler: [
        "Veritabanının üretim parolası",
        "Uygulamanın herkese açık web adresi",
        "Kullanılan kütüphanelerin listesi",
        "README'deki kurulum adımları",
      ],
      aciklama: "Parola, API anahtarı, erişim token'ı ve özel SSH anahtarı gizli bilgidir: ele geçiren kişi senin adına iş yapabilir. Web adresi, bağımlılık listesi ve kurulum adımları herkesin görebileceği bilgilerdir.",
    },
    {
      ad: "neden-tehlike",
      soru: "Bir API anahtarının sızması neden yalnızca \"kod göründü\" sorunundan büyüktür?",
      secenekler: [
        "Anahtarı bulan, hesabın adına iş yapabilir",
        "Anahtar sızınca depo kendiliğinden silinir",
        "Git anahtarlı commit'leri push etmez",
        "Anahtarın sızması yalnızca derleme süresini uzatır",
      ],
      aciklama: "Anahtar bir kimlik kartı gibidir: ödeme hizmetinde para çekebilir, bulut hesabında sunucu açabilir, veritabanını okuyabilir. Fatura ve veri kaybı hesap sahibine kalır.",
    },
    {
      ad: "env-dosyasi",
      dy: true,
      soru: "Gizli değerleri tutan .env dosyası .gitignore'a eklenmeli, depoya yalnızca değerleri boş bir .env.example girmelidir.",
      aciklama: "Doğru. .env.example hangi değişkenlerin gerektiğini anlatır, .env ise yalnızca senin bilgisayarında (ya da sunucuda) durur.",
    },
    {
      ad: "private-depo",
      zorluk: 2,
      soru: "\"Depomuz private, anahtarı koda yazmamızın sakıncası yok.\" Bu düşüncedeki hata nedir?",
      secenekler: [
        "Depoya erişen herkes anahtarı görür",
        "Private depolarda .gitignore çalışmaz",
        "Private depolar push edilemez",
        "GitHub private depolardaki dosyaları şifresiz siler",
      ],
      aciklama: "Private depo da çok el değiştirir: ekipten ayrılanlar, depoya bağlanan araçlar, bilgisayarlardaki clone'lar, ileride depoyu public yapma kararı. Gizli bilgi depo görünürlüğüne güvenilerek saklanmaz.",
    },
  ]),
  ...sorular(U, "u14-botlar", [
    {
      ad: "ne-kadar-hizli",
      soru: "Public bir depoya push edilen geçerli bir anahtar ne kadar sürede bulunabilir?",
      secenekler: [
        "Dakikalar, hatta saniyeler içinde",
        "Ancak birkaç ay sonra",
        "Depo yıldız almadıkça hiç",
        "Yalnızca depo sahibi paylaşırsa",
      ],
      aciklama: "Botlar GitHub'ın herkese açık olay akışını sürekli izler; her yeni push'u bilinen anahtar biçimlerine karşı tarar ve bulduğunu hemen dener. Deponun tanınmış olması gerekmez.",
    },
    {
      ad: "nasil-bulur",
      soru: "Botlar sızan anahtarları nasıl bulur?",
      secenekler: [
        "Yeni push'ları izleyip bilinen anahtar biçimlerini arar",
        "Geliştiricinin bilgisayarına sızar",
        "GitHub'dan anahtar listesini satın alır",
        "Yalnızca arama motorundan dosya adı sorgular",
      ],
      aciklama: "Pek çok sağlayıcının anahtarı tanınabilir bir önekle başlar (GitHub token'ları ~ghp_~, AWS erişim anahtarları ~AKIA~ gibi). Botlar bu kalıpları ve .env gibi dosya adlarını arar.",
    },
    {
      ad: "kucuk-depo",
      dy: false,
      soru: "Kimsenin bilmediği, yeni açılmış küçük bir public depoya düşen anahtar güvendedir.",
      aciklama: "Yanlış. Botlar depoyu değil push'u izler; yeni ve küçük bir depoya gelen push da aynı akışta görünür.",
    },
    {
      ad: "tuzak-anahtar",
      zorluk: 2,
      senaryo: true,
      soru: "Bir güvenlik ekibi bilerek geçersiz görünmeyen bir tuzak anahtarı public depoya koyuyor ve izliyor. Ne görmeyi bekler?",
      secenekler: [
        "Anahtarın kısa sürede tanımadığı yerlerden denenmesini",
        "Kimsenin anahtara aylarca dokunmamasını",
        "GitHub'ın depoyu hemen kapatmasını",
        "Anahtarın kendiliğinden geçersiz olmasını",
      ],
      aciklama: "Bu tür deneylerde tuzak anahtarlar çoğu zaman dakikalar içinde, bilinmeyen IP'lerden denenir. Sızıntıya \"sonra bakarım\" denecek süre yoktur.",
    },
  ]),
  ...sorular(U, "u14-silmek-yetmez", [
    {
      ad: "sil-commit",
      soru: "Anahtarlı .env'i push ettin, sonra dosyayı silip yeni bir commit attın. Anahtar neden hâlâ açıkta?",
      secenekler: [
        "Önceki commit'te duruyor, geçmişte herkes görebilir",
        "Silme commit'i push edilemez",
        "Git silinen dosyaları geri getirir",
        "Yeni commit anahtarı başka dosyaya kopyalar",
      ],
      aciklama: "Commit bir anlık görüntüdür. Dosyayı sildiğin commit'ten öncekinde anahtar olduğu gibi durur; ~git log -p~ ya da GitHub'da o commit'in sayfası onu gösterir.",
    },
    {
      ad: "gecmis-temizle-yeter-mi",
      zorluk: 2,
      soru: "Geçmişi yeniden yazıp ~git push --force~ ile anahtarı GitHub'dan kaldırdın. Anahtar neden hâlâ tehlikede?",
      secenekler: [
        "Kopyası çoktan alınmış olabilir ve anahtar hâlâ geçerli",
        "Force push geçmişi değiştirmez",
        "GitHub force push'u geri alır",
        "Anahtar başka dallara kendiliğinden kopyalanır",
      ],
      aciklama: "Push ile temizlik arasında geçen sürede botlar, fork'lar, clone'lar ve önbellekler değeri almış olabilir. Ortadan kaldıramayacağın kopyalara karşı tek çare anahtarı iptal etmektir.",
    },
    {
      ad: "private-yap",
      senaryo: true,
      soru: "Anahtarın public depoya düştüğünü fark eden ekip arkadaşın \"depoyu hemen private yapalım, sorun çözülür\" diyor. Ne dersin?",
      secenekler: [
        "Yetmez; önce anahtarı iptal edip yenilemeliyiz",
        "Haklısın, private olunca kopyalar da silinir",
        "Depoyu silip yeniden açarsak yeter",
        "Bir sonraki sürümde bakarız",
      ],
      aciklama: "Görünürlüğü değiştirmek yeni ziyaretçiyi durdurur ama alınmış kopyaları geri getirmez. Sızan değerin işe yaramaz hâle gelmesi için sağlayıcıda iptal edilmesi gerekir.",
    },
    {
      ad: "log-p",
      zorluk: 2,
      soru: "Geçmişte .env dosyasına dokunan bütün commit'leri değişiklikleriyle listeleyen komutu yaz.",
      cevap: ["git log -p -- .env", "git log --patch -- .env", "git log -p .env"],
      aciklama: "~git log -p -- .env~ dosyanın geçmişini farklarıyla gösterir; silinmiş olsa bile eski commit'lerdeki içeriği görürsün. Botlar ve meraklılar da aynı şeyi yapabilir.",
    },
  ]),
  ...sorular(U, "u14-mudahale", [
    {
      ad: "ilk-adim",
      soru: "Public depoya anahtar sızdırdığını fark ettin. İlk adım ne olmalı?",
      secenekler: [
        "Anahtarı iptal edip yenisini üretmek",
        "Dosyayı silip commit atmak",
        "Geçmişi temizleyip force push etmek",
        "Depoyu private yapmak",
      ],
      aciklama: "Önce kanamayı durdur: anahtar iptal edilince kopyası olanların elinde işe yaramaz bir metin kalır. Geçmişi temizlemek, kayıtları incelemek ve ekibe haber vermek ondan sonra gelir.",
    },
    {
      ad: "sira",
      zorluk: 2,
      sabit: true,
      soru: "Sızıntıya müdahalede doğru sıra hangisidir? I. Erişim kayıtlarını incele  II. Anahtarı iptal et ve yenile  III. Geçmişi temizle  IV. Önleme kur",
      secenekler: ["II, I, III, IV", "III, II, I, IV", "I, III, II, IV", "IV, III, I, II"],
      aciklama: "İptal (II) zararı durdurur; kayıtlar (I) anahtarın kullanılıp kullanılmadığını ve neyin etkilendiğini söyler; temizlik (III) değerin yeni kopyalarını önler; önleme (IV) aynı hatanın tekrarını engeller.",
    },
    {
      ad: "kayitlar",
      senaryo: true,
      soru: "Anahtarı iptal ettin. Sağlayıcının erişim kayıtlarında sızıntıdan sonra tanımadığın IP'lerden ödeme istekleri görüyorsun. Sıradaki doğru adım nedir?",
      secenekler: [
        "Etkilenenleri belirleyip ekibe ve sağlayıcıya bildirmek",
        "Kayıtları silip konuyu kapatmak",
        "Eski anahtarı yeniden etkinleştirmek",
        "Hiçbir şey; iptal etmek her şeyi geri alır",
      ],
      aciklama: "İptal yeni zararı durdurur ama olanı geri almaz. Kayıtlarda kötüye kullanım varsa ekibe, gerekirse sağlayıcının destek birimine haber verilir; para ya da veri kaybı buna göre ele alınır.",
    },
    {
      ad: "yenile-env",
      soru: "Yeni anahtar üretildi. Değeri nereye koyarsın?",
      secenekler: [
        "Git'in izlemediği .env dosyasına",
        "Kodun en üstüne, yorum satırı olarak",
        "README'nin kurulum bölümüne",
        "Commit mesajına",
      ],
      aciklama: "Yeni değer de eskisi gibi kodun dışında durur: yerelde .env, sunucuda ortam değişkeni ya da gizli bilgi yöneticisi. Koda yazılan yeni anahtar da sızar.",
    },
    {
      ad: "haber",
      dy: true,
      zorluk: 2,
      soru: "Anahtarı tek başına iptal edip yenilesen bile ekibe haber vermen gerekir.",
      aciklama: "Doğru. Eski anahtarı kullanan sunucular, CI ve ekip arkadaşlarının ortamları bozulur; yeni değerin güvenli yoldan dağıtılması gerekir. Ayrıca ekip aynı hatanın nasıl tekrarlanmayacağını konuşmalıdır.",
    },
  ]),
  ...sorular(U, "u14-onleme", [
    {
      ad: "ortam-degiskeni",
      soru: "Kodda anahtarı yazmak yerine ~process.env.KAFEPAY_KEY~ okumak ne sağlar?",
      secenekler: [
        "Değer koddan ayrılır, her ortamda ayrı verilir",
        "Anahtarı şifreler ve depoya güvenle koyar",
        "Anahtarı her gün kendiliğinden yeniler",
        "Kodu daha hızlı çalıştırır",
      ],
      aciklama: "Ortam değişkeni değeri kodun dışına alır: kod depoya girer, değer girmez. Geliştirmede .env, sunucuda platformun gizli ayarları, CI'da depo secret'ları değeri sağlar.",
    },
    {
      ad: "gitignore-sonra",
      zorluk: 2,
      soru: ".env commit'lendikten sonra .gitignore'a eklendi. Git onu izlemeyi bırakır mı?",
      secenekler: [
        "Hayır; önce git rm --cached ile izlemeden çıkarılmalı",
        "Evet, hemen bırakır ve geçmişten de siler",
        "Evet, ama yalnızca bir sonraki push'ta",
        "Hayır, .env dosyaları yok sayılamaz",
      ],
      aciklama: ".gitignore yalnızca izlenmeyen dosyalara uygulanır. Zaten izlenen .env'i ~git rm --cached .env~ ile index'ten çıkarırsın; dosya diskte kalır. Geçmişteki kopyası ise ayrıca ele alınır.",
    },
    {
      ad: "rm-cached",
      soru: "İzlenen .env dosyasını diskten silmeden Git'in izlemesinden çıkaran komutu yaz.",
      cevap: ["git rm --cached .env"],
      aciklama: "~git rm --cached .env~ dosyayı index'ten çıkarır, çalışma dizininde bırakır. Ardından .gitignore'a ekleyip commit'lersin.",
    },
    {
      ad: "en-az-yetki",
      zorluk: 2,
      soru: "CI'ın yalnızca paketi yayımlaması gerekiyor. Ona nasıl bir token verilir?",
      secenekler: [
        "Yalnız yayımlama yetkisi olan, süresi kısa bir token",
        "Hesabın bütün yetkilerine sahip, süresiz bir token",
        "Ekipteki herkesin kullandığı ortak parola",
        "Yöneticinin kişisel token'ı",
      ],
      aciklama: "En az yetki ilkesi: token yalnızca gereken işi yapabilsin ve kendiliğinden süresi dolsun. Sızarsa zarar o işle ve o süreyle sınırlı kalır.",
    },
    {
      ad: "yonetici",
      soru: "Gizli bilgi yöneticisi (ör. bulut sağlayıcının secret manager'ı ya da kasa yazılımı) ne işe yarar?",
      secenekler: [
        "Değerleri tek yerde saklar, erişimi yönetir",
        "Kodun içindeki anahtarları görünmez yapar",
        "Commit geçmişini şifreler",
        "Ekip üyelerinin parolalarını tahmin eder",
      ],
      aciklama: "Değerler dosyalara dağılmaz; kimin hangi değere erişebildiği, ne zaman okunduğu kaydedilir ve anahtarlar merkezi olarak yenilenebilir.",
    },
  ]),
  ...sorular(U, "u14-tarama", [
    {
      ad: "push-protection",
      soru: "GitHub'ın push protection özelliği ne yapar?",
      secenekler: [
        "Gizli bilgi içeren push'u GitHub'a ulaşmadan reddeder",
        "Push edilen anahtarları kendiliğinden iptal eder",
        "Depoyu sızıntıda private yapar",
        "Commit'lerdeki anahtarları yıldızla değiştirir",
      ],
      aciklama: "Push sırasında yeni commit'ler taranır; tanınan bir anahtar biçimi varsa push \"GH013: Repository rule violations\" ile reddedilir. Anahtar sunucuya hiç yazılmadığı için iptal gerekmez; koddan çıkarıp tekrar push edersin.",
    },
    {
      ad: "gh013-sonra",
      senaryo: true,
      soru: "Push'un GH013 ile reddedildi; çıktı anahtarın son commit'inde odeme.js:3'te olduğunu söylüyor. Ne yaparsın?",
      secenekler: [
        "Anahtarı .env'e taşır, commit'i düzeltirim",
        "Push'u --force ile zorlarım",
        "Yeni bir commit'te anahtarı silip push ederim",
        "Push protection'ı depo ayarlarından kapatırım",
      ],
      aciklama: "Reddedilen commit'in kendisini düzeltmen gerekir: yeni bir silme commit'i eklersen anahtar hâlâ önceki commit'te durur ve push yine reddedilir. Anahtar daha eski bir commit'teyse ~git rebase -i~ ile o commit düzeltilir.",
    },
    {
      ad: "secret-scanning",
      soru: "Secret scanning (gizli bilgi taraması) push protection'dan nasıl ayrılır?",
      secenekler: [
        "Depodaki kodu ve geçmişi tarayıp uyarır",
        "Yalnızca commit mesajlarını tarar",
        "Push'ları engeller, geçmişe bakmaz",
        "Yalnızca private depolarda çalışır",
      ],
      aciklama: "Push protection kapıda durdurur; secret scanning içeri girmiş olanı bulur ve uyarı açar. GitHub, bazı sağlayıcılara (partner programı) public depoda bulunan anahtarlarını ayrıca bildirir; sağlayıcı da anahtarı iptal edebilir.",
    },
    {
      ad: "pre-commit",
      zorluk: 2,
      soru: "Anahtarı daha commit'lenmeden, geliştiricinin kendi bilgisayarında yakalamak için ne kullanılır?",
      secenekler: [
        "Pre-commit kancasında bir tarayıcı",
        "GitHub'daki dal koruma kuralı",
        "Release PR'ındaki onay",
        "git log --oneline",
      ],
      aciklama: "Git'in pre-commit kancası (hook) her commit'ten önce bir betik çalıştırır. Gitleaks gibi tarayıcılar burada anahtar bulursa commit'i durdurur; en erken savunma hattıdır.",
    },
  ]),
  ...sorular(U, "u14-on-yuz", [
    {
      ad: "vite-onek",
      zorluk: 2,
      soru: "Bir Vite projesinde ~VITE_KAFEPAY_SECRET~ adlı değişkene gizli anahtar konuldu. Sorun nedir?",
      secenekler: [
        "Değer tarayıcıya giden pakete girer",
        "Vite bu değişkeni hiç okumaz",
        "Değişken adı büyük harfle yazılamaz",
        "Değer yalnızca CI'da görünür",
      ],
      aciklama: "Vite ~VITE_~, Next.js ~NEXT_PUBLIC_~ önekli değerleri ön yüz koduna gömer. Tarayıcıya giden her şey herkese açıktır; gizli anahtar yalnızca sunucu tarafında kullanılır.",
    },
    {
      ad: "ci-gunluk",
      zorluk: 2,
      soru: "CI'da hata ayıklamak için gizli değeri ~echo~ ile günlüğe basmanın riski nedir?",
      secenekler: [
        "Günlüğü görebilen herkes değeri okuyabilir",
        "CI adımı kendiliğinden yeşil olur",
        "Değer kendiliğinden yenilenir",
        "Günlükler hiçbir zaman saklanmaz",
      ],
      aciklama: "GitHub Actions depo secret'larını günlükte maskeler (*** olarak gösterir), ama değer dönüştürülürse (ör. base64) ya da başka yoldan gelirse maskeleme tutmaz. Gizli değer günlüğe hiç yazdırılmaz.",
    },
    {
      ad: "defter",
      dy: true,
      zorluk: 2,
      soru: "Bir Jupyter defterinin kaydedilmiş çıktı hücresinde görünen anahtar, kod hücresinden silinse bile depoda durabilir.",
      aciklama: "Doğru. .ipynb dosyası çıktıları da saklar. Commit'lemeden önce çıktıları temizle ve anahtarı defterde hiç yazdırma.",
    },
    {
      ad: "env-example",
      soru: "Depoya giren hangi dosya güvenlidir?",
      secenekler: [
        ".env.example: değeri boş KAFEPAY_KEY=",
        ".env: KAFEPAY_KEY= ve gerçek değer",
        "config.js: anahtar sabit olarak yazılmış",
        "docker-compose.yml: üretim parolası açıkça",
      ],
      aciklama: "Örnek dosya yalnızca değişkenlerin adını söyler, değer içermez. Ötekilerin hepsi gerçek bir değeri depoya taşır.",
    },
  ]),
];
