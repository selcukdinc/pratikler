// 5. ünite (Acemi): GitHub hesabı ve depo açmak, public ve private depolar,
// README ve LICENSE, git clone, remote/push/upstream, git pull, HTTPS, token,
// SSH anahtarı ve iki adımlı doğrulama.
import { sorular, type Soru } from "./yardimci.ts";

const U = 5;

export const unite5: Soru[] = [
  ...sorular(U, "u5-hesap-depo", [
    {
      ad: "bos-depo",
      senaryo: true,
      zorluk: 2,
      soru: "Bilgisayarında commit'leri olan bir projeyi GitHub'a koyacaksın. GitHub'da yeni depo açarken README ekleme kutusu da var. Hangisi daha az sorun çıkarır?",
      secenekler: [
        "Depoyu README olmadan boş açıp yerel depoyu ona push etmek",
        "README ekleyip açmak, sonra yerel depoyu doğrudan push etmek",
        "Yerel depoyu silip GitHub'daki depoyu clone'lamak, dosyaları elle kopyalamak",
        "Fark etmez, GitHub iki geçmişi otomatik olarak birleştirir",
      ],
      aciklama: "README ile açılan depoda zaten bir commit vardır; yerel geçmişinle ortak noktası olmadığı için ilk push **reddedilir**. Var olan bir projeyi koyarken depoyu **boş** açmak en temiz yoldur. Yeni bir projeye sıfırdan başlıyorsan README ile açıp clone'lamak da olur.",
    },
    {
      ad: "depo-adresi",
      soru: "\"ayse\" kullanıcısının \"hesap-makinesi\" deposunun GitHub'daki web adresi hangisidir?",
      secenekler: [
        "~https://github.com/ayse/hesap-makinesi~",
        "~https://hesap-makinesi.github.com/ayse~",
        "~https://github.com/hesap-makinesi/ayse~",
        "~https://ayse.github.com/hesap-makinesi~",
      ],
      aciklama: "GitHub depo adresleri ~github.com/<sahip>/<depo>~ biçimindedir. Sahip bir kullanıcı ya da bir organizasyon olabilir.",
    },
    {
      ad: "organizasyon",
      zorluk: 2,
      dy: true,
      soru: "GitHub'da depolar bir kişinin hesabı yerine bir organizasyonun altında da açılabilir; ekipler genellikle ortak projeleri organizasyon altında tutar.",
      aciklama: "Doğru. Organizasyonlar ekipleri, yetkileri ve ortak depoları yönetmeyi kolaylaştırır; bir kişi ayrılsa da depolar organizasyonda kalır.",
    },
  ]),

  ...sorular(U, "u5-gorunurluk", [
    {
      ad: "public",
      soru: "GitHub'da public (herkese açık) bir depo için hangisi doğrudur?",
      secenekler: [
        "İnternetteki herkes depoyu ve bütün geçmişini görebilir ve clone'layabilir",
        "Herkes depoya doğrudan push edebilir",
        "Yalnızca GitHub hesabı olanlar dosyaları görebilir",
        "Yalnızca son commit herkese görünür, geçmiş gizli kalır",
      ],
      aciklama: "Public depoyu **herkes** okur ve clone'lar, **geçmiş dahil**. Push etmek ise yalnızca yetki verilen kişilerin işidir; diğerleri fork açıp pull request gönderir.",
    },
    {
      ad: "private",
      soru: "Private bir depoyu kimler görebilir?",
      secenekler: [
        "Sahibi ve erişim verilen kişiler",
        "Depo bağlantısını bilen herkes",
        "GitHub'a giriş yapmış herkes",
        "Yalnızca sahibi; başka kimseye erişim verilemez",
      ],
      aciklama: "Private depo, sahibi ve **açıkça erişim verilen** kişiler dışında görünmez. Bağlantıyı bilmek yetmez; giriş yapmamış biri bu depo yokmuş gibi bir hata sayfası görür.",
    },
    {
      ad: "privatetan-publice",
      senaryo: true,
      zorluk: 3,
      soru: "Bir yıldır private tuttuğun depoyu, portfolyonda göstermek için public yapmak istiyorsun. Eskiden bir commit'te veritabanı parolasını yazıp sonraki commit'te silmiştin. Ne yapmalısın?",
      secenekler: [
        "Önce parolayı değiştirip geçmişi temizlemeliyim, eski commit'ler de görünür",
        "Sorun yok, parola son halde olmadığı için kimse göremez",
        "Yalnızca README'yi güncelleyip parolayı oradan silmem yeter",
        "Depoyu public yapıp ardından son commit'i silmem yeter",
      ],
      aciklama: "Public yapınca **bütün geçmiş** herkese açılır; silinmiş parola eski commit'te durmaya devam eder. Önce parola değiştirilir (artık geçersiz olur), sonra geçmiş temizlenir ya da yeni, temiz bir depoyla paylaşılır. Bu konu 14. ünitede ayrıntılı işleniyor.",
    },
    {
      ad: "public-yazma",
      dy: false,
      soru: "Bir depo public ise herkes o depoya doğrudan commit gönderebilir.",
      aciklama: "Yanlış. Public yalnızca **okuma** açıklığıdır. Doğrudan push için depo sahibinin yetki vermesi gerekir; başkaları katkı yapmak için fork ve pull request kullanır.",
    },
    {
      ad: "gizli-ama-public",
      senaryo: true,
      zorluk: 2,
      soru: "Ekip arkadaşın \"Depomuz public ama adresini kimseyle paylaşmadık, kimse bulamaz\" diyor. Ne dersin?",
      secenekler: [
        "Public depolar botlarca sürekli taranır, gizli kalmaz",
        "Haklı, adresini bilmeyen depoya ulaşamaz",
        "Haklı, ama yalnızca depo adı uzunsa",
        "Public depolar zaten yalnızca arkadaşlara görünür",
      ],
      aciklama: "Public depolar arama sonuçlarında ve herkese açık etkinlik akışında görünür; **botlar** bu akışı sürekli tarar. \"Kimse bilmiyor\" bir güvenlik önlemi değildir: gizli kalması gereken bir şey varsa depo private olmalı, gizli bilgi hiç commit'lenmemelidir.",
    },
  ]),

  ...sorular(U, "u5-readme-lisans", [
    {
      ad: "readme",
      soru: "Deponun kökündeki ~README.md~ dosyasının GitHub'daki görevi nedir?",
      secenekler: [
        "Deponun ana sayfasında gösterilip projeyi tanıtır",
        "Depoyu yalnızca ekibe görünür yapar",
        "Projeyi GitHub'da derleyip çalıştırır",
        "Commit mesajlarının özetini saklar",
      ],
      aciklama: "GitHub kökteki ~README.md~ dosyasını deponun ana sayfasında Markdown olarak gösterir. Projenin ne olduğunu, nasıl kurulup çalıştırılacağını anlatan ilk belgedir.",
    },
    {
      ad: "lisans-yok",
      zorluk: 3,
      soru: "Public bir depoda hiçbir lisans dosyası yoksa başkaları için hukuken durum genellikle nedir?",
      secenekler: [
        "Kod görülebilir ama kullanım, değiştirme ve dağıtma hakları açıkça verilmemiş olur",
        "Kod otomatik olarak herkesin her amaçla kullanabileceği hale gelir",
        "Kod otomatik olarak MIT lisansı altına girer",
        "Kod GitHub'ın malı olur",
      ],
      aciklama: "Lisans yoksa varsayılan telif hakları geçerlidir: kodu görmek mümkündür ama başkalarına kullanma ve dağıtma izni verilmemiş olur. Açık kaynak yapmak istiyorsan bir **LICENSE** dosyası (MIT, Apache 2.0, GPL gibi) eklemelisin.",
    },
    {
      ad: "mit-gpl",
      zorluk: 3,
      soru: "MIT lisansı ile GPL lisansı arasındaki temel fark hangisidir?",
      secenekler: [
        "GPL, değiştirilmiş sürümün kaynağının da açılmasını ister",
        "MIT ücretli, GPL ücretsizdir",
        "MIT yalnızca şirketler, GPL yalnızca bireyler içindir",
        "GPL'li kod GitHub'da barındırılamaz",
      ],
      aciklama: "**MIT** serbest (permissive) bir lisanstır: telif notu korunduğu sürece kapalı ürünlerde bile kullanılabilir. **GPL** \"copyleft\"tir: değiştirilmiş sürümü dağıtan, kaynak kodunu da aynı lisansla açmak zorundadır.",
    },
    {
      ad: "markdown",
      dy: true,
      soru: "~README.md~ dosyasındaki ~.md~ uzantısı dosyanın Markdown biçiminde yazıldığını gösterir; GitHub başlıkları, listeleri ve kod bloklarını biçimlendirerek gösterir.",
      aciklama: "Doğru. Markdown, ~#~ ile başlık, ~-~ ile liste, ters tırnaklarla kod yazılan basit bir biçimdir; GitHub README'leri, issue'ları ve pull request'leri Markdown ile gösterir.",
    },
  ]),

  ...sorular(U, "u5-clone", [
    {
      ad: "clone-komut",
      soru: "~https://github.com/ayse/proje.git~ adresindeki depoyu bilgisayarına indiren komutu yaz.",
      cevap: ["git clone https://github.com/ayse/proje.git", "git clone https://github.com/ayse/proje"],
      aciklama: "~git clone <adres>~ depoyu bütün geçmişiyle indirir, ~proje~ adlı bir klasöre çıkarır ve uzak depoyu ~origin~ adıyla kaydeder.",
    },
    {
      ad: "clone-ne-indirir",
      soru: "~git clone~ ne indirir?",
      secenekler: [
        "Deponun bütün geçmişini ve dosyaların son halini",
        "Yalnızca dosyaların son halini, geçmiş olmadan",
        "Yalnızca README ve lisans dosyalarını",
        "Yalnızca son 10 commit'i ve dosyaları",
      ],
      aciklama: "Clone tam bir kopyadır: bütün commit'ler ve dallar gelir, çalışma dizinine varsayılan dal çıkarılır. (Çok büyük depolar için geçmişi kısaltan ~--depth~ gibi seçenekler 18. ünitede.)",
    },
    {
      ad: "zip-clone",
      senaryo: true,
      soru: "Arkadaşın GitHub'daki \"Download ZIP\" düğmesiyle projeyi indirdi, düzenledi ve şimdi ~git push~ yapmaya çalışıyor; ~fatal: not a git repository~ hatası alıyor. Neden?",
      secenekler: [
        "ZIP yalnızca dosyaların kopyasıdır, ~.git~ klasörü ve geçmiş içermez; depoyu ~git clone~ ile almalıydı",
        "GitHub'ın sunucusu çökmüştür",
        "ZIP'i açarken parola girmediği için",
        "Push etmeden önce bilgisayarı yeniden başlatması gerekir",
      ],
      aciklama: "\"Download ZIP\" deponun yalnızca o anki dosyalarını verir; Git deposu değildir. Katkı yapmak için ~git clone~ kullanılır. Yapılan değişiklikler, clone'lanan klasöre kopyalanarak kurtarılabilir.",
    },
    {
      ad: "origin",
      dy: true,
      zorluk: 2,
      soru: "~git clone~ ile alınan depoda, indirilen uzak depo varsayılan olarak ~origin~ adıyla kaydedilir.",
      aciklama: "Doğru. ~origin~ bir gelenek addır; ~git remote -v~ ile görülebilir. İstenirse başka adla da eklenebilir.",
    },
  ]),

  ...sorular(U, "u5-remote-push", [
    {
      ad: "remote-add",
      soru: "Yerel deponu ~https://github.com/ayse/blog.git~ adresindeki boş GitHub deposuna ~origin~ adıyla bağlayan komutu yaz.",
      cevap: ["git remote add origin https://github.com/ayse/blog.git", "git remote add origin https://github.com/ayse/blog"],
      aciklama: "~git remote add origin <adres>~ uzak depoyu kaydeder. Bağlantıları görmek için ~git remote -v~ kullanılır.",
    },
    {
      ad: "push-u",
      zorluk: 2,
      soru: "~git push -u origin main~ komutundaki ~-u~ ne işe yarar?",
      secenekler: [
        "Yerel ~main~'i ~origin/main~'i izleyecek şekilde bağlar; sonra yalnızca ~git push~ yazmak yeter",
        "Push'u geri alınamaz yapar",
        "Yalnızca güncellenmiş (updated) dosyaları gönderir",
        "Uzak depodaki değişiklikleri silerek gönderir",
      ],
      aciklama: "~-u~ (~--set-upstream~) yerel dalı uzak dala bağlar. Bundan sonra ~git push~ ve ~git pull~ nereye gideceklerini bilir, dalın uzaktakine göre kaç commit önde ya da geride olduğu ~git status~'ta görünür.",
    },
    {
      ad: "ilk-push",
      soru: "Yerel ~main~ dalını ilk kez ~origin~'e gönderip izleme bağlantısını kuran komutu yaz.",
      cevap: ["git push -u origin main", "git push --set-upstream origin main"],
      aciklama: "~git push -u origin main~ ilk push'ta kullanılır; sonraki push'larda yalnızca ~git push~ yeter.",
    },
    {
      ad: "origin-var",
      senaryo: true,
      zorluk: 2,
      soru: "GitHub'daki talimatları ikinci kez yapıştırdın ve şu hatayı aldın:\n\n~~~\nerror: remote origin already exists.\n~~~\n\nBu ne anlatıyor?",
      secenekler: [
        "Depoda ~origin~ adlı uzak depo zaten kayıtlı; adresi ~git remote -v~ ile denetlenip gerekirse ~git remote set-url~ ile değiştirilir",
        "GitHub'daki depo silinmiş",
        "İnternet bağlantısı kopmuş",
        "Push başarılı olmuş, bu yalnızca bir uyarıdır",
      ],
      aciklama: "Aynı adla ikinci bir uzak depo eklenemez. Adres doğruysa bir şey yapmaya gerek yoktur; yanlışsa ~git remote set-url origin <yeni-adres>~ ile değiştirilir.",
    },
    {
      ad: "push-red",
      senaryo: true,
      zorluk: 2,
      soru: "~git push~ yazınca şu çıktıyı aldın:\n\n~~~\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs\nhint: Updates were rejected because the remote contains work that you do not have locally.\n~~~\n\nEn doğru sonraki adım hangisidir?",
      secenekler: [
        "Önce ~git pull~ ile uzak depodaki yeni commit'leri alıp kendi işimle birleştirmek, sonra tekrar push etmek",
        "~git push --force~ ile uzak depodakileri ezerek göndermek",
        "Depoyu silip yeniden clone'lamak",
        "Commit'lerimi silip değişiklikleri unutmak",
      ],
      aciklama: "Uzak depoda senin olmayan commit'ler var (ör. ekip arkadaşın push etti). Önce onları alıp birleştirmelisin. ~--force~ arkadaşının işini **silerdi**; paylaşılan dallarda kullanılmaz (10. ünitede güvenli seçenek ~--force-with-lease~).",
    },
    {
      ad: "push-commit",
      dy: false,
      soru: "~git push~ commit'lenmemiş (yalnızca kaydedilmiş) değişiklikleri de uzak depoya gönderir.",
      aciklama: "Yanlış. ~git push~ yalnızca **commit'leri** gönderir. Commit'lenmemiş değişiklikler bilgisayarında kalır.",
    },
  ]),

  ...sorular(U, "u5-pull", [
    {
      ad: "pull-ne",
      soru: "~git pull~ ne yapar?",
      secenekler: [
        "Uzak depodaki yeni commit'leri indirip bulunduğun dala birleştirir",
        "Yerel commit'leri uzak depoya gönderir",
        "Uzak depoyu siler",
        "Yalnızca uzak depodaki dalların listesini gösterir",
      ],
      aciklama: "~git pull~ iki adımdır: önce **fetch** (yenileri indir), sonra bulunduğun dala **birleştir** (ya da ayarına göre rebase et). Ayrıntısı 10. ünitede.",
    },
    {
      ad: "sabah-pull",
      senaryo: true,
      soru: "Ekip olarak aynı depoda çalışıyorsunuz. Sabah işe başlarken ilk ne yapmak çakışmaları en aza indirir?",
      secenekler: [
        "~git pull~ ile ekibin dün gönderdiklerini almak",
        "Hemen yeni dosyalar oluşturmaya başlamak",
        "Depoyu silip yeniden clone'lamak",
        "Akşam ~git push --force~ yapmak",
      ],
      aciklama: "Çalışmaya **güncel** halden başlamak, başkalarının değiştirdiği yerlerle çakışma olasılığını azaltır ve push'un reddedilmesini önler.",
    },
    {
      ad: "pull-calisma",
      dy: true,
      zorluk: 2,
      soru: "Commit'lenmemiş değişikliklerin, pull ile gelen değişikliklerle aynı dosyalara dokunuyorsa Git pull'u durdurup seni uyarabilir.",
      aciklama: "Doğru. Git commit'lenmemiş işini ezmemek için pull'u durdurur (\"Your local changes would be overwritten\"). Önce işini commit'lemek ya da geçici olarak kenara koymak (~git stash~, 16. ünite) gerekir.",
    },
  ]),

  ...sorular(U, "u5-kimlik", [
    {
      ad: "parola-yok",
      senaryo: true,
      zorluk: 2,
      soru: "HTTPS adresiyle push ederken kullanıcı adını ve GitHub hesap parolanı girdin; şu mesajı aldın:\n\n~~~\nremote: Support for password authentication was removed.\n~~~\n\nNe yapmalısın?",
      secenekler: [
        "Erişim token'ı ya da SSH anahtarı kullanmak",
        "GitHub parolanı değiştirip tekrar denemek",
        "Depoyu public yapıp yeniden denemek",
        "Git'i kaldırıp yeniden kurmak",
      ],
      aciklama: "GitHub, Git işlemlerinde hesap parolasını artık kabul etmez. HTTPS için **kişisel erişim token'ı** (ya da bir kimlik yöneticisi / GitHub CLI ile giriş), alternatif olarak **SSH anahtarı** kullanılır.",
    },
    {
      ad: "ssh-ozel",
      soru: "SSH anahtar çiftinde hangisi GitHub'a eklenir?",
      secenekler: [
        "Açık anahtar (genellikle ~.pub~ uzantılı dosya)",
        "Özel anahtar",
        "İkisi birlikte",
        "Hiçbiri, GitHub anahtarı kendisi üretir",
      ],
      aciklama: "GitHub'a **açık anahtar** (~id_ed25519.pub~ gibi) eklenir. **Özel anahtar** bilgisayarından hiç çıkmaz, kimseyle paylaşılmaz; onu paylaşmak hesabının anahtarını vermek demektir.",
    },
    {
      ad: "ssh-keygen",
      zorluk: 2,
      soru: "Yeni bir SSH anahtar çifti üretmek için hangi komut kullanılır?",
      secenekler: ["~ssh-keygen -t ed25519 -C \"e-posta\"~", "~git keygen~", "~git config --ssh~", "~ssh-add --new~"],
      aciklama: "~ssh-keygen -t ed25519~ modern ve kısa bir anahtar çifti üretir; ~-C~ anahtara açıklama ekler. Açık anahtar GitHub'da Settings → SSH and GPG keys bölümüne eklenir.",
    },
    {
      ad: "ssh-adres",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi bir GitHub deposunun SSH ile kullanılan adresidir?",
      secenekler: [
        "~git@github.com:ayse/proje.git~",
        "~https://github.com/ayse/proje.git~",
        "~ssh://ayse.github.com/proje~",
        "~github.com/ayse/proje.zip~",
      ],
      aciklama: "SSH adresi ~git@github.com:<sahip>/<depo>.git~ biçimindedir. ~https://~ ile başlayan adres HTTPS adresidir. Var olan bir depoyu SSH'ye geçirmek için ~git remote set-url origin git@github.com:...~ kullanılır.",
    },
    {
      ad: "publickey",
      senaryo: true,
      zorluk: 3,
      soru: "Yeni bilgisayarında SSH adresiyle clone'larken şu hatayı aldın:\n\n~~~\ngit@github.com: Permission denied (publickey).\n~~~\n\nEn olası neden hangisidir?",
      secenekler: [
        "Bu bilgisayarın anahtarı GitHub'a eklenmemiş",
        "Depo silinmiş ya da başka hesaba taşınmış",
        "Bilgisayardaki Git sürümü SSH için çok eski",
        "~user.email~ ayarı yapılmamış",
      ],
      aciklama: "GitHub bu bilgisayarın anahtarını tanımıyor. Anahtar üretilir (ya da var olan bulunur), açık anahtar GitHub'a eklenir ve ~ssh -T git@github.com~ ile bağlantı denenir. ~user.email~ kimlik doğrulamayla ilgili değildir.",
    },
    {
      ad: "token-gizli",
      dy: true,
      zorluk: 2,
      soru: "Kişisel erişim token'ı bir parola gibi gizli tutulmalıdır; koda yazılıp commit'lenirse ve depo public ise başkalarının eline geçebilir.",
      aciklama: "Doğru. Token, sahibinin yetkileriyle işlem yapar. Mümkün olan en dar yetkiyle ve son kullanma tarihiyle üretilmeli, asla koda yazılmamalıdır. Sızan token hemen iptal edilir (14. ünite).",
    },
    {
      ad: "2fa",
      soru: "GitHub hesabında iki adımlı doğrulamanın (2FA) sağladığı koruma hangisidir?",
      secenekler: [
        "Parola çalınsa bile ikinci adım olmadan girilemez",
        "Depoların otomatik olarak private olması",
        "Commit'lerin iki ayrı sunucuda kaydedilmesi",
        "Push işlemlerinin iki kat hızlanması",
      ],
      aciklama: "2FA, girişte paroladan başka bir kanıt (doğrulama uygulamasındaki kod, güvenlik anahtarı ya da passkey) ister. GitHub kod katkısı yapan hesaplarda 2FA'yı zorunlu tutar; kurtarma kodlarını güvenli bir yerde saklamak gerekir.",
    },
  ]),

  ...sorular(U, "u5-remote-push", [
    {
      ad: "remote-v",
      soru: "Deponun bağlı olduğu uzak depoları adresleriyle listeleyen komutu yaz.",
      cevap: ["git remote -v", "git remote --verbose"],
      aciklama: "~git remote -v~ her uzak deponun adını ve fetch/push adreslerini gösterir. Yalın ~git remote~ yalnızca adları listeler.",
    },
    {
      ad: "buyuk-dosya",
      senaryo: true,
      zorluk: 3,
      soru: "Projeye 150 MB'lık bir tanıtım videosu commit'leyip push ettin; GitHub push'u reddetti ve dosya boyutu sınırından söz etti. Bundan sonrası için doğru yaklaşım hangisidir?",
      secenekler: [
        "Büyük dosyaları depo dışında ya da Git LFS ile tutmak",
        "Videoyu zip'leyip aynı commit'e tekrar eklemek",
        "Push'u ~--force~ ile zorlayıp yeniden denemek",
        "Depoyu private yapıp yeniden denemek",
      ],
      aciklama: "GitHub tek dosyada 100 MB'ın üstünü kabul etmez, 50 MB'ın üstü için uyarır. Büyük ikili dosyalar ya depo dışında tutulur ya da **Git LFS** ile saklanır. Dosya zaten bir commit'te olduğu için önce o commit'ten çıkarılması gerekir (9. ve 18. ünite).",
    },
  ]),
];
