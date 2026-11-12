import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_2: Ders = {
  hafta: 2,
  baslik: "Kurulum ve Terminal",
  ozet: "Git'i kur ve sürümünü denetle, terminalde klasörler arasında dolaş, adını ve e-postanı ayarla, ayar düzeylerini, editörü, satır sonlarını ve yardım komutlarını öğren.",
  bolumler: [
    {
      baslik: "Git'i kurmak",
      metin: md(`
Önce bilgisayarında Git var mı, bak. Bir terminal aç (Windows'ta **Git Bash** ya da PowerShell, macOS'ta **Terminal**, Linux'ta herhangi bir terminal) ve yaz:

~~~
git --version
~~~

~git version 2.43.0~ gibi bir satır görürsen hazırsın. "command not found" ya da "tanınmıyor" diyorsa kur:

- **Windows:** git-scm.com'dan **Git for Windows**'u indir. Yanında gelen **Git Bash**, Windows'ta Linux'takine benzer bir terminal sunar; bu sitedeki komutlar orada aynen çalışır. Kurulumdan sonra **yeni** bir terminal aç; açık olan eski pencere Git'i görmez.
- **macOS:** Terminal'e ~git --version~ yazınca sistem Xcode komut satırı araçlarını kurmayı önerir; ya da Homebrew ile ~brew install git~.
- **Linux:** Paket yöneticisiyle, örneğin ~sudo apt install git~.

Bu sitede komutları tarayıcıdaki sanal Git'te deneyeceksin; kendi bilgisayarında aynılarını yazdığında aynı çıktıyı görürsün.
`),
      dene: ["gt-u2-bulunamadi"],
    },
    {
      baslik: "Terminalde dolaşmak",
      metin: md(`
Git'i en iyi terminalde öğrenirsin; çünkü her düğme aslında bir komuttur. Bilmen gereken komutlar az:

| Komut | Ne yapar? |
|---|---|
| ~pwd~ | Şu an hangi klasördesin? |
| ~ls~ | Buradaki dosya ve klasörleri listele (~ls -a~ gizlileri de gösterir) |
| ~cd klasor~ | O klasöre gir; ~cd ..~ bir üste çık |
| ~mkdir proje~ | ~proje~ adında yeni bir klasör aç |
| ~cat dosya~ | Dosyanın içeriğini yaz |

Adında boşluk olan klasörü tırnakla yaz: ~cd "Proje Dosyalarım"~. Yoksa terminal iki ayrı kelime sanır. Noktayla başlayan dosyalar (~.git~, ~.gitignore~) gizlidir; ~ls~ göstermez, ~ls -a~ gösterir.

Aşağıdaki terminal gerçek değil ama gerçeği gibi davranır. Dene:
`),
      git: {
        dosyalar: { "notlar.txt": "Git öğreniyorum.\n" },
        globalConfig: {},
        gorev: "Bir ~proje~ klasörü aç, içine gir ve ~pwd~ ile nerede olduğunu gör.",
        oneriler: ["pwd", "ls", "mkdir proje", "cd proje", "pwd"],
        hedefler: [
          { aciklama: "~proje~ klasörü var", denetle: (o) => o.klasorler.includes("proje") || Object.keys(o.dosyalar).some((y) => y.startsWith("proje/")) },
          { aciklama: "Şu an ~proje~ klasörünün içindesin", denetle: (o) => o.cwd === "proje" },
        ],
        grafik: false,
        alanlar: false,
      },
      dene: ["gt-u2-cd-ust", "gt-u2-bosluklu-klasor"],
    },
    {
      baslik: "Kendini tanıt: git config",
      metin: md(`
Her commit'in üstünde yazarın adı ve e-postası durur. Git bunları bilmeden commit oluşturmaz; ilk denemede "Author identity unknown" diye durur. Bir kez ayarlaman yeter:

~~~
git config --global user.name "Ayse Yilmaz"
git config --global user.email ayse@example.com
~~~

~--global~ ayarı bilgisayardaki **bütün depoların** için geçerli kılar ve ev klasöründeki ~¬/.gitconfig~ dosyasına yazar. Ayarlar üç düzeydedir: **system** (bütün kullanıcılar), **global** (senin bütün depoların) ve **local** (yalnızca o depo, ~.git/config~). Aynı ayar birden çok düzeyde varsa **en özel olan**, yani local kazanır. Örneğin iş deposunda şirket e-postanı kullanmak için o deponun içinde ~git config user.email ad@sirket.com~ yazarsın.

Bütün ayarları görmek için ~git config --list~, tek bir ayarı görmek için ~git config user.name~. Yeni depoların ilk dalı ~main~ olsun istiyorsan: ~git config --global init.defaultBranch main~.

GitHub'da kullandığın e-postayı yazarsan commit'lerin profiline bağlanır. Şimdi sen dene:
`),
      git: {
        dosyalar: { "README.md": "# İlk projem\n" },
        globalConfig: {},
        kurulum: ["git init", "git add ."],
        gorev: "Önce ~git commit -m \"ilk\"~ yazıp hatayı gör. Sonra adını ve e-postanı global olarak ayarla ve commit'i tekrarla.",
        oneriler: ['git commit -m "ilk"', 'git config --global user.name "Adın Soyadın"', "git config --global user.email posta@ornek.com", "git config --list", 'git commit -m "ilk"'],
        hedefler: [
          { aciklama: "~user.name~ ayarlı", denetle: (o) => !!o.globalConfig["user.name"] || !!o.depo?.config["user.name"] },
          { aciklama: "~user.email~ ayarlı", denetle: (o) => !!o.globalConfig["user.email"] || !!o.depo?.config["user.email"] },
          { aciklama: "İlk commit oluştu", denetle: (o) => !!o.depo && Object.keys(o.depo.refs).length > 0 },
        ],
        grafik: false,
      },
      dene: ["gt-u2-kimlik-yok", "gt-u2-is-eposta"],
    },
    {
      baslik: "Editör, satır sonları ve yardım",
      metin: md(`
~git commit~ yazıp ~-m~ ile mesaj vermezsen Git bir **editör** açar ve mesajı orada ister. Varsayılan çoğu zaman **Vim**'dir ve ilk karşılaşmada insanı kilitler: yazmak için ~i~, bitirince ~Esc~, sonra ~:wq~ ve Enter (kaydet ve çık). Vazgeçmek için ~:q!~. Daha rahat bir editör seçebilirsin:

~~~
git config --global core.editor "code --wait"
~~~

**Satır sonları:** Windows satırları CRLF, macOS ve Linux LF ile bitirir. Ayarsız karışık bir ekipte her satır "değişmiş" görünebilir. Windows'ta ~core.autocrlf true~, macOS ve Linux'ta ~core.autocrlf input~ yaygın tercihtir; projede bir ~.gitattributes~ dosyası da kuralı herkese aynı uygular.

**Yardım:** Her komutun ayrıntılı kılavuzu bir komut uzağında: ~git help commit~ (ya da ~git commit --help~). Yalnızca seçeneklerin kısa özeti için ~git commit -h~.
`),
      dene: ["gt-u2-vim-cikis"],
    },
  ],
  test: [
    "gt-u2-surum-komut", "gt-u2-macos", "gt-u2-ad-komut", "gt-u2-eposta-komut", "gt-u2-duzeyler", "gt-u2-liste",
    "gt-u2-varsayilan-dal", "gt-u2-pwd", "gt-u2-mkdir", "gt-u2-gizli-git", "gt-u2-satir-sonu", "gt-u2-yardim",
  ],
};
