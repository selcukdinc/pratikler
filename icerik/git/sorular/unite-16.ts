// 16. ünite (İleri): ileri araçlar. cherry-pick, bisect, blame, worktree, submodule,
// hook'lar, Git LFS ve imzalı commit'ler.
import { sorular, type Soru } from "./yardimci.ts";

const U = 16;

export const unite16: Soru[] = [
  ...sorular(U, "u16-cherry-pick", [
    {
      ad: "cp-ne",
      soru: "~git cherry-pick <commit>~ ne yapar?",
      secenekler: [
        "O commit'in farkını buraya uygular",
        "O commit'i geçmişten siler",
        "İki dalı tamamen birleştirir",
        "O commit'e geçip kopuk HEAD yapar",
      ],
      aciklama: "cherry-pick tek bir commit'in getirdiği farkı alır ve bulunduğun dala uygular. Yeni commit'in içeriği aynı olabilir ama ebeveyni farklı olduğu için kimliği farklıdır.",
    },
    {
      ad: "cp-hotfix",
      senaryo: true,
      soru: "dev'de beş commit var; biri canlıdaki bir hatayı düzeltiyor, öteki dördü yarım iş. Düzeltme hemen canlı dala (release) gitmeli. Ne yaparsın?",
      secenekler: [
        "Düzeltmeyi release'e cherry-pick ederim",
        "dev'i release'e merge ederim",
        "release'i dev'e rebase ederim",
        "Beş commit'i de release'e push ederim",
      ],
      aciklama: "Merge bütün dalı getirir, yarım işler de canlıya gider. cherry-pick yalnızca istenen commit'i taşır. (Üç ortamlı akışta ideal olan, düzeltmeyi baştan doğru daldan açmaktır.)",
    },
    {
      ad: "cp-kimlik",
      dy: false,
      soru: "cherry-pick ile taşınan commit, hedef dalda kaynaktakiyle aynı kimliği (hash) taşır.",
      aciklama: "Yanlış. Kimlik ebeveyni ve zamanı da kapsar; cherry-pick yeni bir commit yazar. ~-x~ seçeneği mesajın sonuna \"(cherry picked from commit ...)\" ekleyerek bağı belgeler.",
    },
    {
      ad: "cp-komut",
      soru: "~a1b2c3d~ kimlikli commit'i bulunduğun dala uygulayan komutu yaz.",
      cevap: ["git cherry-pick a1b2c3d"],
      aciklama: "~git cherry-pick a1b2c3d~. Çakışırsa merge'deki gibi çözer, ~git add~ ve ~git cherry-pick --continue~ dersin.",
    },
    {
      ad: "cp-cakisma",
      zorluk: 2,
      soru: "cherry-pick çakışmayla durdu. Çakışmayı çözüp dosyayı ~git add~ ile işaretledin. Sıradaki komutu yaz.",
      cevap: ["git cherry-pick --continue"],
      aciklama: "~git cherry-pick --continue~ commit'i tamamlar. Vazgeçmek istersen ~git cherry-pick --abort~ her şeyi başladığın yere döndürür.",
    },
  ]),
  ...sorular(U, "u16-bisect", [
    {
      ad: "bisect-ne",
      soru: "~git bisect~ ne işe yarar?",
      secenekler: [
        "Hatayı getiren commit'i ikiye bölerek bulur",
        "Dalı iki parçaya ayırır",
        "İki commit arasındaki farkı gösterir",
        "Çakışmaları kendiliğinden çözer",
      ],
      aciklama: "Bir iyi (hatasız) ve bir kötü (hatalı) commit verirsin; Git ortadakini açar, sen dener ve iyi ya da kötü dersin. Her cevap aday sayısını yarıya indirir.",
    },
    {
      ad: "bisect-adim-sayisi",
      zorluk: 2,
      soru: "İyi ve kötü commit arasında yaklaşık 1000 commit var. bisect hatalı commit'i en fazla kaç denemede bulur?",
      secenekler: ["Yaklaşık 10", "Yaklaşık 100", "Yaklaşık 500", "1000"],
      aciklama: "İkili arama her adımda yarıya böler: 2^10 = 1024. Commit'leri tek tek denemek yüzlerce adım sürerdi.",
    },
    {
      ad: "bisect-baslat",
      soru: "Şu anki commit hatalı. bisect'i başlatıp bunu kötü olarak işaretledin. Hatasız olduğunu bildiğin ~v1.0~ etiketini işaretleyen komutu yaz.",
      cevap: ["git bisect good v1.0"],
      aciklama: "~git bisect good v1.0~. İkisi de işaretlenince Git ortadaki commit'i açar ve \"Bisecting: N revisions left to test\" der.",
    },
    {
      ad: "bisect-reset",
      soru: "bisect hatalı commit'i buldu. Başladığın dala dönmek için ne dersin?",
      secenekler: ["git bisect reset", "git reset --hard", "git bisect stop", "git switch -"],
      aciklama: "~git bisect reset~ bisect durumunu temizler (refs/bisect altındaki işaretler dahil) ve başladığın dala döner.",
    },
    {
      ad: "bisect-kopuk",
      dy: true,
      zorluk: 2,
      soru: "bisect sırasında Git commit'leri sırayla açtığı için HEAD kopuktur (detached).",
      aciklama: "Doğru. ~git status~ \"HEAD detached at ...\" ve \"You are currently bisecting\" der. Bu sırada commit atmak yerine yalnızca dener ve işaretlersin.",
    },
    {
      ad: "bisect-good-yanlis",
      zorluk: 3,
      senaryo: true,
      soru: "bisect sırasında dikkatsizce hatalı bir commit'e \"good\" dedin. Ne olur?",
      secenekler: [
        "Arama yanlış yöne gider, sonuç yanlış commit olur",
        "Git hatayı kendiliğinden fark edip düzeltir",
        "bisect hemen durur",
        "Hiçbir şey; good ve bad aynı anlama gelir",
      ],
      aciklama: "bisect cevaplarına güvenir; yanlış bir işaret yanlış yarıyı eler. ~git bisect log~ verdiğin cevapları gösterir; hatalıysa ~git bisect reset~ ile baştan başlarsın (ya da log'u düzeltip ~git bisect replay~).",
    },
  ]),
  ...sorular(U, "u16-blame", [
    {
      ad: "blame-ne",
      soru: "~git blame menu.txt~ ne gösterir?",
      secenekler: [
        "Her satırı son değiştiren commit'i",
        "Dosyadaki hataları",
        "Dosyanın kaç kez açıldığını",
        "Dosyayı silen kişiyi",
      ],
      aciklama: "blame (\"suçla\") adına rağmen suçlu aramak için değil, bir satırın neden öyle olduğunu anlamak için kullanılır: commit'i bulur, ~git show~ ile mesajını ve bağlamını okursun.",
    },
    {
      ad: "blame-satir-araligi",
      zorluk: 2,
      soru: "menu.txt'nin yalnızca 10-20. satırlarının blame'ini gösteren komutu yaz.",
      cevap: ["git blame -L 10,20 menu.txt"],
      aciklama: "~-L 10,20~ satır aralığını seçer. Büyük dosyalarda yalnız ilgilendiğin parçaya bakmanı sağlar.",
    },
    {
      ad: "blame-sonraki",
      senaryo: true,
      soru: "blame bir satırın \"a41c9e2\" commit'inde değiştiğini gösterdi. Bu değişikliğin nedenini öğrenmek için ne yaparsın?",
      secenekler: [
        "git show a41c9e2 ile commit'e bakarım",
        "git reset a41c9e2 yaparım",
        "git revert a41c9e2 yaparım",
        "Satırı silip yeniden yazarım",
      ],
      aciklama: "Commit mesajı ve aynı commit'teki öteki değişiklikler \"neden\"i anlatır. İyi commit mesajlarının değeri tam bu anda ortaya çıkar.",
    },
    {
      ad: "blame-sinir",
      dy: true,
      zorluk: 3,
      soru: "blame bir satırı ilk yazanı değil, en son değiştireni gösterir.",
      aciklama: "Doğru. Satırdaki bir boşluk düzeltmesi bile sahipliği değiştirir. Daha eskiye inmek için ~git blame <commit>^ -- dosya~ ile bir önceki duruma bakılır ya da ~git log -L~ kullanılır.",
    },
    {
      ad: "blame-sapka",
      zorluk: 2,
      soru: "blame çıktısında bir satırın kimliğinin başında ~^~ var (~^5c1e2a0~). Bu ne demektir?",
      secenekler: [
        "İlk commit'ten beri değişmemiş",
        "Satırın commit'i silinmiş",
        "Satırda çözülmemiş çakışma var",
        "Satırın commit'i imzasız",
      ],
      aciklama: "~^~ sınır commit'ini gösterir: blame daha geriye gidemez. Bütün geçmişe bakıldığında bu, deponun ilk commit'idir.",
    },
  ]),
  ...sorular(U, "u16-worktree", [
    {
      ad: "worktree-ne",
      soru: "~git worktree add ../acil hotfix~ ne yapar?",
      secenekler: [
        "../acil'de hotfix dalıyla ikinci çalışma dizini açar",
        "Depoyu ../acil klasörüne kopyalar ve bağı koparır",
        "hotfix dalını siler",
        "../acil klasörünü .gitignore'a ekler",
      ],
      aciklama: "worktree, tek bir .git deposuna bağlı birden çok çalışma klasörü açar. Yarım işini stash'lemeden başka dalda çalışabilirsin; commit'ler aynı depoya yazılır.",
    },
    {
      ad: "worktree-senaryo",
      senaryo: true,
      zorluk: 2,
      soru: "Uzun süren bir özelliğin ortasındasın, dosyaların dağınık. Acil bir hata için main'de çalışman gerek ve testlerin yarım saat sürüyor. En rahat yol hangisi?",
      secenekler: [
        "git worktree ile main'i ayrı klasörde açmak",
        "Her şeyi silip main'e geçmek",
        "Yarım işi main'e commit'lemek",
        "Depoyu baştan klonlayıp ayarları kopyalamak",
      ],
      aciklama: "worktree iki dalı aynı anda, ayrı klasörlerde açık tutar. Stash da bir yoldur ama uzun testler sürerken öteki dalda çalışmana izin vermez.",
    },
    {
      ad: "worktree-ayni-dal",
      dy: false,
      zorluk: 2,
      soru: "Aynı dal iki ayrı worktree'de aynı anda açık olabilir.",
      aciklama: "Yanlış. Git bir dalın yalnızca bir worktree'de açık olmasına izin verir; ikisi aynı dalı ilerletmeye çalışırsa karışırdı. İkinci klasörde başka bir dal ya da yeni bir dal açarsın.",
    },
  ]),
  ...sorular(U, "u16-submodule", [
    {
      ad: "submodule-ne",
      soru: "Submodule için hangisi doğrudur?",
      secenekler: [
        "Ana depo, alt deponun belirli bir commit'ini kaydeder",
        "Alt deponun dosyaları ana depoya kopyalanır",
        "Alt depo her zaman en son hâliyle gelir",
        "Submodule yalnızca GitLab'da çalışır",
      ],
      aciklama: "Ana depo alt deponun yalnızca hangi commit'te durduğunu tutar. Alt depo güncellenince ana depoda bunu ayrıca commit'lemen gerekir.",
    },
    {
      ad: "submodule-clone",
      zorluk: 2,
      senaryo: true,
      soru: "Submodule'lü bir depoyu klonladın, alt modülün klasörü boş. Ne yapmalıydın?",
      secenekler: [
        "git submodule update --init",
        "git pull --all",
        "git fetch --tags",
        "Klasörü elle doldurmak",
      ],
      aciklama: "Düz ~git clone~ submodule'leri indirmez. Sonradan ~git submodule update --init~ dersin; baştan ~git clone --recurse-submodules~ ile klonlamak da aynı işi görür.",
    },
  ]),
  ...sorular(U, "u16-hooks", [
    {
      ad: "hook-ne",
      soru: "Git hook'u (kanca) nedir?",
      secenekler: [
        "Git'in olaylarda kendiliğinden çalıştırdığı betik",
        "Bir dalı başka dala bağlayan işaretçi",
        "GitHub'daki bir onay türü",
        "Commit'leri birleştiren bir komut",
      ],
      aciklama: "Hook'lar .git/hooks klasöründeki betiklerdir: pre-commit, commit-msg, pre-push gibi. Sıfır olmayan çıkış kodu işlemi durdurur.",
    },
    {
      ad: "hook-paylasilmaz",
      dy: true,
      zorluk: 2,
      soru: ".git/hooks klasöründeki betikler clone ile ekip arkadaşlarına gitmez.",
      aciklama: "Doğru. .git klasörü depo içeriği değildir. Ekipler hook'ları depoda bir klasörde tutar ve ~core.hooksPath~ ayarıyla ya da husky, pre-commit gibi araçlarla kurar. Asıl güvence yine sunucudaki CI'dır.",
    },
    {
      ad: "hook-commit-msg",
      zorluk: 2,
      soru: "Commit mesajının \"feat: ...\" biçiminde olup olmadığını commit sırasında denetlemek için hangi hook uygundur?",
      secenekler: ["commit-msg", "post-merge", "pre-rebase", "post-checkout"],
      aciklama: "commit-msg hook'u mesaj dosyasını argüman olarak alır; biçim tutmazsa sıfırdan farklı çıkış koduyla commit'i durdurur.",
    },
    {
      ad: "hook-atla",
      zorluk: 2,
      senaryo: true,
      soru: "Ekip pre-commit hook'u ile lint denetimi kurdu. Bir arkadaşın ~git commit --no-verify~ ile hook'u atladı. Bunu ne yakalar?",
      secenekler: [
        "Sunucudaki CI ve dal koruması",
        "Başka bir yerel hook",
        "Git'in kendisi, --no-verify'ı reddeder",
        "Hiçbir şey yakalayamaz",
      ],
      aciklama: "Yerel hook'lar bir kolaylıktır ve atlanabilir. Kuralın gerçek güvencesi, herkesin değişikliğinin geçmek zorunda olduğu sunucudaki CI ve korumalı daldır.",
    },
  ]),
  ...sorular(U, "u16-lfs", [
    {
      ad: "lfs-ne",
      soru: "Git LFS ne işe yarar?",
      secenekler: [
        "Büyük dosyaları depo dışında tutar",
        "Depoyu sıkıştırıp küçültür",
        "Commit'leri imzalar",
        "Dalları birleştirir",
      ],
      aciklama: "Video, model, büyük veri gibi dosyalar her sürümüyle geçmişe girerse depo şişer. LFS bunları ayrı bir depolamada tutar, depoya küçük bir işaretçi dosyası girer.",
    },
    {
      ad: "lfs-sinir",
      senaryo: true,
      soru: "300 MB'lık bir dosyayı içeren push GitHub tarafından reddedildi. Bundan sonra büyük dosyalar için ne yaparsın?",
      secenekler: [
        "Git LFS ile izler ya da depo dışında tutarım",
        "Dosyayı ikiye bölüp iki commit'te gönderirim",
        "Push'u --force ile zorlarım",
        "Depoyu private yaparım",
      ],
      aciklama: "GitHub tek dosyada 100 MB'ı geçen push'u reddeder. Dosya zaten bir commit'teyse önce geçmişten çıkarılmalıdır (18. ünite); sonra LFS ya da depo dışı depolama kullanılır.",
    },
    {
      ad: "lfs-gitattributes",
      zorluk: 2,
      soru: "~git lfs track \"*.mp4\"~ kuralı hangi dosyaya yazılır ve commit'lenmelidir?",
      secenekler: [".gitattributes", ".gitignore", ".git/config", ".gitmodules"],
      aciklama: "LFS kuralları ~.gitattributes~ dosyasına yazılır. Bu dosya commit'lenmezse ekip arkadaşlarının bilgisayarında aynı dosyalar LFS'e değil doğrudan depoya girer.",
    },
  ]),
  ...sorular(U, "u16-imza", [
    {
      ad: "imza-neden",
      soru: "Commit'leri imzalamak neden önemlidir?",
      secenekler: [
        "Commit'in yazarını kanıtlamak",
        "Commit'leri daha küçük yapmak",
        "Commit'leri gizlemek",
        "Push'u hızlandırmak",
      ],
      aciklama: "user.name ve user.email'e herkes istediğini yazabilir; Git commit'in yazar alanına ne yazarsan onu kabul eder, biri senin adınla commit atabilir. GPG ya da SSH anahtarıyla imzalanan commit'leri GitHub ve GitLab \"Verified\" diye işaretler.",
    },
    {
      ad: "imza-bayrak",
      zorluk: 2,
      soru: "Tek bir commit'i imzalamak için ~git commit~'e hangi seçenek eklenir?",
      secenekler: ["-S", "-s", "-v", "-i"],
      aciklama: "Büyük ~-S~ imzalar (gpg-sign). Küçük ~-s~ ise yalnızca mesajın sonuna \"Signed-off-by\" satırı ekler; kriptografik bir imza değildir.",
    },
  ]),
];
