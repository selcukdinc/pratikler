// 2. ünite (Acemi): Git'i kurmak, git config ile kimlik ve ayar düzeyleri,
// terminal temelleri, editör, satır sonları ve yardım.
import { sorular, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...sorular(U, "u2-kurulum", [
    {
      ad: "surum-komut",
      soru: "Git'in bilgisayarında kurulu olup olmadığını ve sürümünü öğrenmek için terminale ne yazarsın?",
      cevap: ["git --version", "git version"],
      aciklama: "~git --version~ kurulu Git'in sürümünü yazar (ör. ~git version 2.47.0~). Komut bulunamazsa Git kurulu değildir ya da PATH'e eklenmemiştir.",
    },
    {
      ad: "bulunamadi",
      senaryo: true,
      soru: "Windows'ta Git'i yeni kurdun ama açık olan terminale ~git --version~ yazınca şu çıktıyı aldın:\n\n~~~\n'git' is not recognized as an internal or external command\n~~~\n\nİlk denemen gereken şey hangisidir?",
      secenekler: [
        "Terminali kapatıp yeniden açmak, sonra komutu tekrar denemek",
        "Bilgisayarı biçimlendirip Git'i yeniden kurmak",
        "GitHub'a giriş yapmak",
        "Proje klasörünü silmek",
      ],
      aciklama: "Kurulum PATH değişkenini günceller ama **önceden açık olan terminal** eski PATH'i kullanır. Terminali yeniden açmak çoğu zaman yeter; yetmezse kurulumda Git'in PATH'e eklendiği denetlenir.",
    },
    {
      ad: "macos",
      zorluk: 2,
      soru: "macOS'ta Git'i kurmanın yaygın yollarından biri hangisidir?",
      secenekler: [
        "Xcode komut satırı araçlarını ya da Homebrew'u kullanmak",
        "App Store'dan GitHub uygulamasını indirmek",
        "Terminale \"install git\" yazmak",
        "Git yalnızca Windows ve Linux'ta çalışır",
      ],
      aciklama: "macOS'ta Git, **Xcode komut satırı araçlarıyla** (~xcode-select --install~) ya da **Homebrew** ile (~brew install git~) kurulur. Linux'ta dağıtımın paket yöneticisi (~apt~, ~dnf~), Windows'ta \"Git for Windows\" kullanılır.",
    },
    {
      ad: "git-bash",
      dy: true,
      zorluk: 2,
      soru: "Git for Windows ile gelen Git Bash, Windows'ta Linux'takine benzer bir terminal (ls, cd, pwd gibi komutlar) sunar.",
      aciklama: "Doğru. Git Bash, Windows'ta Git komutlarının yanında ~ls~, ~pwd~ gibi Unix kabuk komutlarını da kullanmayı sağlar. Bu sitedeki örnekler de bu kabuk tarzındadır.",
    },
  ]),

  ...sorular(U, "u2-config", [
    {
      ad: "ad-komut",
      soru: "Bütün depolarında kullanılmak üzere adını \"Ayse Yilmaz\" olarak ayarlayan komutu yaz.",
      cevap: ['git config --global user.name "Ayse Yilmaz"', "git config --global user.name Ayse Yilmaz"],
      aciklama: "~git config --global user.name \"Ayse Yilmaz\"~ adını kullanıcı düzeyinde kaydeder. Ad boşluk içerdiği için tırnak içinde yazılır. E-posta için ~user.email~ kullanılır.",
    },
    {
      ad: "neden-kimlik",
      soru: "Git'te ~user.name~ ve ~user.email~ ayarları ne işe yarar?",
      secenekler: [
        "Oluşturduğun her commit'e yazar bilgisi olarak işlenir",
        "GitHub hesabına giriş yapmak için parola yerine kullanılır",
        "Git'i yükseltirken lisans anahtarı olarak kullanılır",
        "Yalnızca hata raporlarını göndermek için kullanılır",
      ],
      aciklama: "Bu iki ayar her commit'e **yazar** olarak yazılır. Bunlar kimlik doğrulama değildir: GitHub'a giriş için parola, token ya da SSH anahtarı gerekir. Yine de GitHub'daki e-postanla aynı olursa commit'lerin profiline bağlanır.",
    },
    {
      ad: "kimlik-yok",
      senaryo: true,
      soru: "Yeni bir bilgisayarda ilk commit'ini oluşturmaya çalışınca şu mesajı aldın:\n\n~~~\nAuthor identity unknown\n*** Please tell me who you are.\n~~~\n\nNe yaparsın?",
      secenekler: [
        "~git config --global user.name~ ve ~user.email~ ile adını ve e-postanı ayarlarım",
        "GitHub'dan çıkış yapıp yeniden giriş yaparım",
        "Depoyu silip ~git init~ ile yeniden oluştururum",
        "Commit yerine dosyaları doğrudan GitHub'a yüklerim",
      ],
      aciklama: "Git commit'e yazacağı kişiyi bilmiyor. Adını ve e-postanı ~git config~ ile ayarladıktan sonra commit çalışır; depoyu silmeye gerek yoktur.",
    },
    {
      ad: "duzeyler",
      zorluk: 2,
      soru: "Aynı ayar hem ~--global~ hem de bir deponun içinde ~--local~ olarak farklı değerlerle verilmişse o depoda hangisi geçerli olur?",
      secenekler: [
        "Depo düzeyindeki değer",
        "Kullanıcı düzeyindeki değer",
        "Sistem düzeyindeki değer",
        "Git hata verir ve iki değeri de yok sayar",
      ],
      aciklama: "Git ayarları üç düzeyde okunur: sistem (~--system~), kullanıcı (~--global~) ve depo (~--local~). **Daha dar olan kazanır**: depodaki ayar kullanıcı ayarının üstüne yazılır.",
    },
    {
      ad: "is-eposta",
      senaryo: true,
      zorluk: 2,
      soru: "Kişisel projelerinde kişisel e-postanı, yalnızca iş deposunda şirket e-postanı kullanmak istiyorsun. En uygun yol hangisi?",
      secenekler: [
        "Global ayarda kişisel e-postayı bırakıp iş deposunun içinde ~--local~ ile şirket e-postasını ayarlamak",
        "Her commit'ten önce global e-postayı değiştirip sonra geri almak",
        "İş için ayrı bir bilgisayar almak",
        "Şirket deposunda e-posta ayarını hiç yapmamak",
      ],
      aciklama: "Depo içinde ~git config user.email ...~ (ya da ~--local~) yalnız o depoyu etkiler ve global ayarın önüne geçer. Böylece her commit'te ayar değiştirmek gerekmez.",
    },
    {
      ad: "liste",
      soru: "Geçerli bütün Git ayarlarını listeleyen komutu yaz.",
      cevap: ["git config --list", "git config -l"],
      aciklama: "~git config --list~ (kısaca ~-l~) okunan bütün ayarları listeler. Her ayarın hangi dosyadan geldiğini görmek için ~--show-origin~ eklenebilir.",
    },
    {
      ad: "global-dosya",
      dy: true,
      zorluk: 3,
      soru: "~--global~ ile yapılan ayarlar kullanıcının ev klasöründeki ~¬/.gitconfig~ dosyasına yazılır.",
      aciklama: "Doğru. Kullanıcı düzeyindeki ayarlar ev klasöründeki ~.gitconfig~ dosyasında, depo ayarları ise deponun ~.git/config~ dosyasında durur.",
    },
    {
      ad: "varsayilan-dal",
      zorluk: 2,
      soru: "~git init~ ile açılan yeni depolarda ilk dalın adının ~main~ olmasını sağlayan ayar hangisidir?",
      secenekler: ["~init.defaultBranch~", "~core.mainBranch~", "~user.branch~", "~remote.origin.branch~"],
      aciklama: "~git config --global init.defaultBranch main~ ayarı yeni depolarda ilk dalın adını belirler. GitHub'da açılan yeni depoların varsayılan dalı da ~main~'dir.",
    },
  ]),

  ...sorular(U, "u2-terminal", [
    {
      ad: "pwd",
      soru: "Terminalde şu an hangi klasörde olduğunu gösteren komut hangisidir?",
      secenekler: ["~pwd~", "~ls~", "~cd~", "~mkdir~"],
      aciklama: "~pwd~ (print working directory) bulunduğun klasörün tam yolunu yazar. ~ls~ klasördekileri listeler, ~cd~ klasör değiştirir, ~mkdir~ yeni klasör açar.",
    },
    {
      ad: "ls",
      soru: "Bulunduğun klasördeki dosya ve klasörleri listeleyen komut hangisidir?",
      secenekler: ["~ls~", "~pwd~", "~cd ..~", "~git log~"],
      aciklama: "~ls~ klasörün içeriğini listeler. Gizli dosyaları (adı nokta ile başlayan, ~.git~ gibi) görmek için ~ls -a~ kullanılır.",
    },
    {
      ad: "cd-ust",
      soru: "Terminalde bir üst klasöre çıkmak için hangi komut kullanılır?",
      secenekler: ["~cd ..~", "~cd /~", "~cd -up~", "~ls ..~"],
      aciklama: "~..~ bir üst klasör demektir: ~cd ..~ bir üst klasöre çıkar. ~cd /~ ise dosya sisteminin köküne gider.",
    },
    {
      ad: "mkdir",
      soru: "Bulunduğun yerde ~proje~ adında yeni bir klasör açan komutu yaz.",
      cevap: ["mkdir proje"],
      aciklama: "~mkdir proje~ (make directory) yeni bir klasör açar. İçine girmek için ~cd proje~ yazılır.",
    },
    {
      ad: "gizli-git",
      senaryo: true,
      zorluk: 2,
      soru: "~git init~ yaptığın klasörde ~ls~ yazınca ~.git~ klasörünü göremiyorsun. Neden?",
      secenekler: [
        "Adı nokta ile başlayan klasörler gizlidir; ~ls -a~ ile görünür",
        "~git init~ başarısız olmuştur, depo oluşmamıştır",
        "~.git~ klasörü GitHub'da durur, bilgisayarda değil",
        "~.git~ klasörü yalnızca ilk commit'ten sonra oluşur",
      ],
      aciklama: "Unix tarzı sistemlerde adı **nokta** ile başlayan dosya ve klasörler gizlidir. ~ls -a~ ile görünür. ~.git~ klasörü ~git init~ anında oluşur.",
    },
    {
      ad: "yanlis-klasor",
      senaryo: true,
      zorluk: 2,
      soru: "Ev klasöründeyken (~pwd~ çıktısı ~/home/ayse~) yanlışlıkla ~git init~ yazdın. Bunun en önemli sakıncası hangisidir?",
      secenekler: [
        "Ev klasörünün tamamı tek bir dev depo gibi görünmeye başlar",
        "Bilgisayardaki bütün dosyalar silinir",
        "GitHub hesabın güvenlik nedeniyle kilitlenir",
        "Hiçbir sakıncası yoktur, Git ev klasörünü yok sayar",
      ],
      aciklama: "Git, ~.git~ klasörünün bulunduğu klasörü ve **bütün alt klasörlerini** depo sayar. Ev klasöründe açılan depo her yerde ~git status~'u karıştırır. Çözüm, yanlış açılan ~.git~ klasörünü silmektir; dosyalarına bir şey olmaz.",
    },
  ]),

  ...sorular(U, "u2-editor-yardim", [
    {
      ad: "editor",
      zorluk: 2,
      soru: "~git commit~ komutunu ~-m~ olmadan çalıştırınca açılan editörü değiştirmek için hangi ayar kullanılır?",
      secenekler: ["~core.editor~", "~user.editor~", "~commit.program~", "~init.editor~"],
      aciklama: "~git config --global core.editor \"code --wait\"~ gibi bir ayar, commit mesajı için açılacak editörü belirler. Ayar yoksa çoğu sistemde Vim ya da Nano açılır.",
    },
    {
      ad: "vim-cikis",
      senaryo: true,
      zorluk: 2,
      soru: "~git commit~ yazdın ve tanımadığın bir editör (Vim) açıldı. Mesajını yazdın, şimdi kaydedip çıkmak istiyorsun. Ne yaparsın?",
      secenekler: [
        "~Esc~'ye basıp ~:wq~ yazar ve Enter'a basarım",
        "Terminal penceresini kapatırım",
        "~Ctrl+S~ ile kaydederim, commit kendiliğinden oluşur",
        "~git save~ yazarım",
      ],
      aciklama: "Vim'de ~Esc~ ile komut kipine geçilir, ~:wq~ kaydedip çıkar. Mesajı boş bırakıp ~:q!~ ile çıkarsan commit iptal olur. Bir daha karşılaşmamak için ~core.editor~ ayarlanabilir ya da ~-m~ ile mesaj komutta verilebilir.",
    },
    {
      ad: "satir-sonu",
      zorluk: 3,
      soru: "Windows ve macOS kullanan iki kişinin aynı depoda çalışırken dosyaların her satırı değişmiş gibi görünmesi en çok hangi ayarla ilgilidir?",
      secenekler: ["~core.autocrlf~ (satır sonu dönüşümü)", "~user.email~", "~init.defaultBranch~", "~core.editor~"],
      aciklama: "Windows satır sonlarını CRLF, macOS ve Linux LF yazar. ~core.autocrlf~ (ya da depoda bir ~.gitattributes~ dosyası) satır sonlarının nasıl dönüştürüleceğini belirler; yanlış ayarda her satır değişmiş görünür.",
    },
    {
      ad: "yardim",
      soru: "~commit~ komutunun ayrıntılı yardım sayfasını açan komutu yaz.",
      cevap: ["git help commit", "git commit --help"],
      aciklama: "~git help commit~ (ya da ~git commit --help~) komutun kılavuz sayfasını açar. Kısa bir seçenek özeti için ~git commit -h~ kullanılır.",
    },
  ]),

  ...sorular(U, "u2-config", [
    {
      ad: "eposta-komut",
      soru: "Bütün depolarında kullanılmak üzere e-postanı ~ayse@example.com~ olarak ayarlayan komutu yaz.",
      cevap: ["git config --global user.email ayse@example.com", 'git config --global user.email "ayse@example.com"'],
      aciklama: "~git config --global user.email ayse@example.com~ e-postanı kullanıcı düzeyinde kaydeder. GitHub'daki e-postanla aynı olursa commit'lerin profiline bağlanır.",
    },
    {
      ad: "global-tek-depo",
      dy: false,
      soru: "~git config --global~ ile yapılan bir ayar yalnızca o an içinde bulunduğun depoyu etkiler.",
      aciklama: "Yanlış. ~--global~ ayarı kullanıcının **bütün** depolarında geçerlidir. Yalnızca bir depoyu etkilemek için depo içinde ~--local~ (ya da seçeneksiz ~git config~) kullanılır.",
    },
  ]),
  ...sorular(U, "u2-terminal", [
    {
      ad: "bosluklu-klasor",
      senaryo: true,
      zorluk: 2,
      soru: "Terminalde ~cd Proje Dosyalarım~ yazınca \"too many arguments\" ya da \"no such file or directory\" hatası alıyorsun. Klasör gerçekten var. Sorun ne?",
      secenekler: [
        "Addaki boşluk adı ikiye böldü, ad tırnakla yazılmalı",
        "Türkçe karakterli klasörlere terminalden hiç girilemez",
        "~cd~ komutu yalnızca Git deposu olan klasörlerde çalışır",
        "Önce ~git init~ yazmak gerekir",
      ],
      aciklama: "Kabuk boşlukları argüman ayırıcı sayar. ~cd \"Proje Dosyalarım\"~ ya da ~cd Proje\\ Dosyalarım~ yazılmalı. Bu yüzden proje klasörlerine boşluksuz ad vermek (~proje-dosyalari~) işleri kolaylaştırır.",
    },
  ]),
  ...sorular(U, "u2-editor-yardim", [
    {
      ad: "kisa-yardim",
      soru: "Bir Git komutunun seçeneklerinin kısa özetini terminalde gösteren hangisidir?",
      secenekler: ["~git commit -h~", "~git commit --about~", "~git info commit~", "~git commit -?~"],
      aciklama: "~-h~ kısa bir kullanım özeti yazar. Ayrıntılı kılavuz için ~git help commit~ ya da ~git commit --help~ kullanılır.",
    },
  ]),
];
