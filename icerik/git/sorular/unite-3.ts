// 3. ünite (Acemi): git init, üç alan (çalışma dizini, hazırlık alanı, depo),
// git status ve dosya durumları, git add ve hazırlıktan çıkarmak, git commit.
import { sorular, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...sorular(U, "u3-init", [
    {
      ad: "init-komut",
      soru: "Bulunduğun klasörü yeni bir Git deposuna çeviren komutu yaz.",
      cevap: ["git init"],
      aciklama: "~git init~ klasörde gizli bir ~.git~ klasörü oluşturur; Git geçmişi ve ayarları burada tutar. Dosyaların yerinde kalır, hiçbiri silinmez.",
    },
    {
      ad: "git-klasoru",
      soru: "Bir projede ~.git~ klasörü neyi içerir?",
      secenekler: [
        "Deponun bütün geçmişini, dallarını ve ayarlarını",
        "Yalnızca GitHub şifreni ve kullanıcı adını",
        "Projenin derlenmiş, çalışmaya hazır halini",
        "Git programının kendisini ve eklentilerini",
      ],
      aciklama: "~.git~ klasörü **deponun kendisidir**: commit'ler, dallar, hazırlık alanı ve depo ayarları burada durur. Bu klasör silinirse dosyalar kalır ama bütün geçmiş kaybolur.",
    },
    {
      ad: "git-sil",
      senaryo: true,
      zorluk: 2,
      soru: "Bir arkadaşın yer açmak için proje klasöründeki ~.git~ klasörünü sildi. Projede hiç push yapılmamıştı. Ne olur?",
      secenekler: [
        "Dosyaların son hali kalır ama bütün commit geçmişi ve dallar kaybolur",
        "Bütün proje dosyaları da silinir",
        "Hiçbir şey olmaz, Git klasörü bir sonraki komutta yeniden oluşturur",
        "Yalnızca son commit kaybolur",
      ],
      aciklama: "Geçmiş yalnızca ~.git~ klasöründedir. Silinince çalışma dizinindeki dosyalar kalır ama geçmiş gider; daha önce bir uzak depoya push edilmemişse geri getirilemez.",
    },
    {
      ad: "init-tekrar",
      dy: false,
      zorluk: 2,
      soru: "~git init~ yalnızca boş bir klasörde çalıştırılabilir; içinde dosya olan klasörde hata verir.",
      aciklama: "Yanlış. ~git init~ dolu bir klasörde de çalışır; var olan dosyalar izlenmeyen (untracked) dosyalar olarak görünür ve istersen commit'lenir.",
    },
    {
      ad: "repo-degil",
      senaryo: true,
      soru: "Terminalde ~git status~ yazınca şu mesajı aldın:\n\n~~~\nfatal: not a git repository (or any of the parent directories): .git\n~~~\n\nBu mesaj ne anlatıyor?",
      secenekler: [
        "Bulunduğun klasör bir Git deposunun içinde değil",
        "Git bilgisayarında kurulu değil ya da bozuk",
        "GitHub'daki depoya bağlanılamıyor",
        "Depoda henüz hiç commit oluşturulmamış",
      ],
      aciklama: "Git, bulunduğun klasörde ve üstlerinde ~.git~ klasörü bulamadı. Ya yanlış klasördesin (~pwd~ ile denetle, ~cd~ ile proje klasörüne geç) ya da depo henüz ~git init~ ile oluşturulmadı.",
    },
  ]),

  ...sorular(U, "u3-uc-alan", [
    {
      ad: "uc-alan",
      soru: "Git'in yerel olarak kullandığı üç alan hangileridir?",
      secenekler: [
        "Çalışma dizini, hazırlık alanı ve depo",
        "Yerel depo, uzak depo ve bulut yedeği",
        "Dal, etiket ve commit geçmişi",
        "Kaynak kod, derleme çıktısı ve testler",
      ],
      aciklama: "Dosyaları **çalışma dizininde** düzenlersin, commit'e girecekleri ~git add~ ile **hazırlık alanına** alırsın, ~git commit~ ile **depoya** (geçmişe) kaydedersin.",
    },
    {
      ad: "staging-amac",
      zorluk: 2,
      soru: "Hazırlık alanının (staging area) varlık nedeni hangisidir?",
      secenekler: [
        "Sonraki commit'e girecek değişiklikleri tek tek seçmek",
        "Dosyaları GitHub'a göndermeden önce sıkıştırmak",
        "Silinen dosyaları geri dönüşüm kutusunda tutmak",
        "Commit mesajlarını taslak olarak saklamak",
      ],
      aciklama: "Hazırlık alanı sayesinde aynı anda yaptığın değişiklikleri **ayrı, anlamlı commit'lere** bölebilirsin: önce hata düzeltmesini, sonra yeni özelliği commit'lersin.",
    },
    {
      ad: "akis-sira",
      soru: "Yeni bir dosyanın geçmişe girmesi için doğru sıra hangisidir?",
      secenekler: [
        "Dosyayı düzenle → ~git add~ → ~git commit~",
        "~git commit~ → ~git add~ → dosyayı düzenle",
        "~git add~ → dosyayı düzenle → ~git push~",
        "Dosyayı düzenle → ~git push~ → ~git commit~",
      ],
      aciklama: "Değişiklik önce çalışma dizininde yapılır, ~git add~ ile hazırlık alanına alınır, ~git commit~ ile depoya kaydedilir. ~git push~ ise commit'leri uzak depoya gönderir.",
    },
    {
      ad: "add-sonrasi-degisiklik",
      senaryo: true,
      zorluk: 3,
      soru: "~app.js~'yi düzenleyip ~git add app.js~ yaptın, sonra aynı dosyaya bir satır daha ekledin ve hemen ~git commit -m \"Düzelt\"~ yazdın. Commit'te ne olur?",
      secenekler: [
        "Yalnızca ~git add~ anındaki hal commit'e girer; sonra eklenen satır çalışma dizininde kalır",
        "Dosyanın son hali, eklenen satırla birlikte commit'e girer",
        "Git, dosya değiştiği için commit'i reddeder",
        "Commit boş olur",
      ],
      aciklama: "~git add~ dosyanın **o anki halini** hazırlık alanına koyar. Sonradan yapılan değişiklik ayrıca ~git add~ edilmedikçe commit'e girmez; ~git status~ dosyayı hem \"staged\" hem \"not staged\" bölümünde gösterir.",
    },
  ]),

  ...sorular(U, "u3-status", [
    {
      ad: "status-komut",
      soru: "Hangi dosyaların değiştiğini, hangilerinin hazırlık alanında olduğunu gösteren komutu yaz.",
      cevap: ["git status"],
      aciklama: "~git status~ çalışma dizini ile hazırlık alanının durumunu özetler. Ne yapacağını bilmediğin her an ilk çalıştıracağın komuttur.",
    },
    {
      ad: "untracked",
      soru: "~git status~ çıktısında \"Untracked files\" başlığı altında görünen dosya ne demektir?",
      secenekler: [
        "Git'in henüz izlemediği yeni bir dosya",
        "Silinmiş ama geçmişte duran bir dosya",
        "GitHub'a gönderilmiş bir dosya",
        "Bozuk olduğu için okunamayan bir dosya",
      ],
      aciklama: "**İzlenmeyen** (untracked) dosya Git'in tanımadığı yeni dosyadır. ~git add~ ile hazırlık alanına alınınca izlenmeye başlar.",
    },
    {
      ad: "clean",
      soru: "~git status~ şu çıktıyı veriyor: ~nothing to commit, working tree clean~. Bu ne demektir?",
      secenekler: [
        "Çalışma dizini son commit'le aynı, yeni dosya da yok",
        "Depoda henüz hiç dosya ya da commit yok",
        "Bütün değişiklikler geri alınıp silinmiş",
        "Bütün değişiklikler GitHub'a gönderilmiş",
      ],
      aciklama: "Çalışma dizini son commit'le aynıdır ve izlenmeyen dosya yoktur. Bu, push edildiği anlamına gelmez; push durumu \"Your branch is up to date with 'origin/main'\" satırında görünür.",
    },
    {
      ad: "kisa-cikti",
      zorluk: 3,
      soru: "~git status -s~ (kısa çıktı) şunu gösteriyor:\n\n~~~\nM  index.html\n M style.css\n?? notlar.txt\n~~~\n\nHangisi doğrudur?",
      secenekler: [
        "~index.html~ hazırlık alanında, ~style.css~ değişmiş ama hazırlıkta değil, ~notlar.txt~ izlenmiyor",
        "Üç dosyanın da hepsi hazırlık alanında",
        "~style.css~ hazırlık alanında, ~index.html~ değişmiş ama hazırlıkta değil, ~notlar.txt~ silinmiş",
        "~notlar.txt~ hazırlık alanında, diğer ikisi izlenmiyor",
      ],
      aciklama: "Kısa çıktıda **sol sütun hazırlık alanını, sağ sütun çalışma dizinini** gösterir. ~M~ solda ise değişiklik hazırlıkta, sağda ise yalnızca çalışma dizinindedir. ~??~ izlenmeyen dosyadır.",
    },
    {
      ad: "bos-klasor",
      dy: true,
      zorluk: 3,
      soru: "Git boş klasörleri izlemez; içi boş bir klasör ~git status~'ta görünmez.",
      aciklama: "Doğru. Git dosyaları izler, klasörler yalnızca dosyaların yolu olarak vardır. Boş bir klasörü depoda tutmak için içine genellikle ~.gitkeep~ adlı boş bir dosya konur (bu bir gelenektir, Git'in özel dosyası değildir).",
    },
  ]),

  ...sorular(U, "u3-add", [
    {
      ad: "add-dosya",
      soru: "Yalnızca ~README.md~ dosyasını hazırlık alanına alan komutu yaz.",
      cevap: ["git add README.md"],
      aciklama: "~git add README.md~ yalnızca bu dosyanın şu anki halini hazırlık alanına alır. Birden çok dosya boşlukla ayrılarak yazılabilir.",
    },
    {
      ad: "add-nokta",
      soru: "~git add .~ komutu ne yapar?",
      secenekler: [
        "Bu klasör ve altındaki bütün değişiklikleri hazırlık alanına alır",
        "Yalnızca adı nokta ile başlayan gizli dosyaları hazırlık alanına alır",
        "Hazırlık alanını boşaltır",
        "Son commit'i geri alır",
      ],
      aciklama: "~.~ \"bu klasör\" demektir. ~git add .~ bu klasörün altındaki bütün değişiklikleri alır; ~.gitignore~ ile dışarıda bırakılan dosyalar alınmaz. Neyin eklendiğini görmek için ardından ~git status~ çalıştırmak iyi bir alışkanlıktır.",
    },
    {
      ad: "unstage",
      senaryo: true,
      soru: "~git add .~ yaptın ve ~sifreler.txt~ dosyasının da hazırlık alanına girdiğini fark ettin. Henüz commit yapmadın. Dosyayı silmeden hazırlık alanından çıkarmak için ne yaparsın?",
      secenekler: [
        "~git restore --staged sifreler.txt~",
        "~rm sifreler.txt~",
        "~git commit -m \"sifreler\"~",
        "~git push --force~",
      ],
      aciklama: "~git restore --staged <dosya>~ dosyayı hazırlık alanından çıkarır, çalışma dizinindeki dosyaya dokunmaz. Commit'ten **önce** fark etmek en ucuz kurtuluştur. Dosyanın bir daha eklenmemesi için ~.gitignore~'a yazılır.",
    },
    {
      ad: "add-p",
      zorluk: 3,
      soru: "Bir dosyada iki ayrı iş için değişiklik yaptın ve yalnızca birini commit'lemek istiyorsun. Değişiklikleri parça parça seçmeni sağlayan komut hangisidir?",
      secenekler: ["~git add -p~", "~git add -A~", "~git commit -a~", "~git add --all~"],
      aciklama: "~git add -p~ (patch) değişiklikleri parça parça gösterir ve her biri için \"eklensin mi?\" diye sorar. Böylece tek dosyadaki değişiklikler ayrı commit'lere bölünebilir.",
    },
    {
      ad: "add-bos-cikti",
      dy: true,
      soru: "~git add~ komutu başarılı olduğunda genellikle hiçbir çıktı yazmaz; sonucu görmek için ~git status~ kullanılır.",
      aciklama: "Doğru. Git'in birçok komutu başarıda sessizdir. Neyin hazırlık alanına girdiğini ~git status~ ya da ~git diff --staged~ gösterir.",
    },
  ]),

  ...sorular(U, "u3-commit", [
    {
      ad: "commit-m",
      soru: "Hazırlık alanındaki değişiklikleri \"Ilk surum\" mesajıyla commit'leyen komutu yaz.",
      cevap: ['git commit -m "Ilk surum"', 'git commit -m "İlk sürüm"', "git commit -m Ilk surum"],
      aciklama: "~git commit -m \"mesaj\"~ hazırlık alanındaki her şeyi verilen mesajla commit'ler. ~-m~ verilmezse mesaj yazmak için editör açılır.",
    },
    {
      ad: "commit-a",
      zorluk: 2,
      soru: "~git commit -a -m \"mesaj\"~ komutu için hangisi doğrudur?",
      secenekler: [
        "İzlenen dosyaların değişikliklerini ekler, yeni dosyaları eklemez",
        "Klasördeki bütün dosyaları, yeni olanlar dahil, otomatik ekler",
        "Yalnızca hazırlık alanındaki dosyaları commit'ler, başka şey eklemez",
        "Bütün dallardaki değişiklikleri aynı anda commit'ler",
      ],
      aciklama: "~-a~ yalnızca **zaten izlenen** dosyalardaki değişiklikleri ve silmeleri ekler. Yeni bir dosya önce ~git add~ ile izlemeye alınmalıdır; bu yüzden ~-a~ ile yeni dosyalar sessizce dışarıda kalabilir.",
    },
    {
      ad: "bos-commit",
      senaryo: true,
      soru: "Dosyalarını düzenledin ve hemen ~git commit -m \"Güncelle\"~ yazdın. Git şunu söyledi:\n\n~~~\nno changes added to commit (use \"git add\" and/or \"git commit -a\")\n~~~\n\nNe oldu?",
      secenekler: [
        "Hazırlık alanı boş olduğu için commit'lenecek bir şey yok",
        "Commit mesajı çok kısa olduğu için reddedildi",
        "Dosyaların bozuk olduğu için Git onları okuyamadı",
        "Commit oluştu ama GitHub'a gönderilemedi",
      ],
      aciklama: "Commit yalnızca **hazırlık alanındakini** kaydeder. Önce ~git add~ ile değişiklikleri seç, sonra commit'le.",
    },
    {
      ad: "kucuk-commit",
      zorluk: 2,
      soru: "Commit'lerin büyüklüğü için iyi uygulama hangisidir?",
      secenekler: [
        "Her commit tek bir mantıklı değişikliği içermeli",
        "Bir haftalık bütün iş tek bir commit'te toplanmalı",
        "Her dosya kaydedişinde ayrı bir commit yapılmalı",
        "Commit sayısı az olsun diye işler ay sonunda commit'lenmeli",
      ],
      aciklama: "**Küçük ve tek amaçlı** commit'ler geçmişi okunur yapar, bir hatayı bulmayı ve tek bir değişikliği geri almayı kolaylaştırır.",
    },
    {
      ad: "commit-yerel",
      dy: false,
      soru: "~git commit~ komutu değişiklikleri hemen GitHub'daki depoya da gönderir.",
      aciklama: "Yanlış. Commit yalnızca **yerel** depoya yazılır. Uzak depoya göndermek için ayrıca ~git push~ gerekir.",
    },
  ]),

  ...sorular(U, "u3-add", [
    {
      ad: "restore-staged-komut",
      soru: "Hazırlık alanına aldığın ~app.js~ dosyasını, değişikliklerini kaybetmeden hazırlık alanından çıkaran komutu yaz.",
      cevap: ["git restore --staged app.js", "git reset app.js", "git reset HEAD app.js", "git reset -- app.js"],
      aciklama: "~git restore --staged app.js~ dosyayı hazırlık alanından çıkarır, çalışma dizinindeki değişikliğe dokunmaz. Eski sürümlerde aynı iş ~git reset app.js~ ile yapılırdı.",
    },
    {
      ad: "iki-commit",
      senaryo: true,
      zorluk: 2,
      soru: "Bugün iki ilgisiz iş yaptın: ~giris.js~'de bir hatayı düzelttin, ~tema.css~'de renkleri değiştirdin. Geçmişin okunur olması için ne yaparsın?",
      secenekler: [
        "Önce ~giris.js~'yi ekleyip commit'lerim, sonra ~tema.css~'yi ekleyip ayrı commit'lerim",
        "~git add .~ ile ikisini birlikte \"güncellemeler\" mesajıyla commit'lerim",
        "Değişikliklerden birini silip yalnızca birini commit'lerim",
        "Commit'lemeden önce hafta sonunu beklerim",
      ],
      aciklama: "Hazırlık alanı tam da bunun için var: ilgisiz değişiklikler **ayrı commit'lere** bölünür. Böylece renk değişikliği geri alınmak istenirse hata düzeltmesi etkilenmez.",
    },
  ]),
  ...sorular(U, "u3-uc-alan", [
    {
      ad: "restore-dosya",
      senaryo: true,
      zorluk: 2,
      soru: "~ayarlar.js~'de yarım saattir denemeler yaptın, hiçbiri işe yaramadı ve dosyanın son commit'teki haline dönmek istiyorsun. Dosya hazırlık alanında değil. Hangisi işini görür?",
      secenekler: ["~git restore ayarlar.js~", "~git add ayarlar.js~", "~git commit ayarlar.js~", "~git status ayarlar.js~"],
      aciklama: "~git restore <dosya>~ dosyayı hazırlık alanındaki (o da değişmediyse son commit'teki) haline döndürür. **Dikkat:** commit'lenmemiş bu değişiklikler geri getirilemez; emin değilsen önce bir kopyasını al.",
    },
  ]),
  ...sorular(U, "u3-commit", [
    {
      ad: "git-rm",
      dy: true,
      zorluk: 2,
      soru: "~git rm eski.txt~ komutu dosyayı diskten siler ve bu silmeyi hazırlık alanına alır; bir sonraki commit'te dosya depodan çıkar.",
      aciklama: "Doğru. ~git rm~ silme işlemini doğrudan hazırlık alanına koyar. Dosyayı elle silip ~git add~ yapmak da aynı sonucu verir. Dosya eski commit'lerde durmaya devam eder.",
    },
  ]),
];
