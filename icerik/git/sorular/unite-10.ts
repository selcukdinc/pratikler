// 10. ünite (Orta): uzak depolar derinlemesine. origin/main ve upstream, fetch ile
// pull farkı, reddedilen push, --force ve --force-with-lease, uzak depoları yönetmek.
import { sorular, type Soru } from "./yardimci.ts";

const U = 10;

export const unite10: Soru[] = [
  ...sorular(U, "u10-izleme", [
    {
      ad: "origin-main-nedir",
      soru: "Yerel depondaki ~origin/main~ nedir?",
      secenekler: [
        "Uzaktaki main'in son görüldüğü hâlini gösteren yerel işaretçi",
        "GitHub'daki main dalının kendisi; her an canlı güncellenir",
        "main dalının yedeği; her commit'te kendiliğinden kopyalanır",
        "origin adlı ekip arkadaşının kişisel dalı",
      ],
      aciklama: "~origin/main~ bir **uzak izleme dalıdır**: Git onu yalnızca ~fetch~, ~pull~ ve ~push~ sırasında günceller. Arada GitHub'da olanları bilmez; bu yüzden \"son görülen hâl\" denir.",
    },
    {
      ad: "origin-adi",
      dy: true,
      soru: "~origin~ özel bir anahtar kelime değildir; ~git clone~ uzak depoya varsayılan olarak bu adı verir ve istersen değiştirebilirsin.",
      aciklama: "Doğru. ~origin~ yalnızca bir takma addır. ~git remote rename origin github~ ile değiştirilebilir; fork akışında ikinci uzak depo genellikle ~upstream~ adını alır.",
    },
    {
      ad: "origin-commit",
      zorluk: 2,
      soru: "~git switch origin/main~ yazıp orada commit atmaya çalışan biri ne yaşar?",
      secenekler: [
        "Kopuk HEAD'e düşer; uzak izleme dalına commit atılmaz",
        "Commit doğrudan GitHub'daki main'e gider",
        "origin/main ilerler, sonra push gerekmez",
        "Git commit'i reddeder ve depoyu kilitler",
      ],
      aciklama: "Uzak izleme dalları yalnızca Git'in kendisi tarafından taşınır. Onlara geçince HEAD kopuk olur; çalışmak için ~git switch main~ (ya da ~git switch -c yeni-dal~) gerekir.",
    },
    {
      ad: "upstream-nedir",
      soru: "Bir dalın **upstream**'i (izlediği dal) ne işe yarar?",
      secenekler: [
        "Düz git push ve git pull'un hangi uzak dalla çalışacağını söyler",
        "Dalın hangi daldan açıldığını kaydeder",
        "Dalın silinmesini engeller",
        "Dalın commit'lerini her push'ta otomatik olarak uzağa yedekler",
      ],
      aciklama: "Upstream ayarlıysa ~git push~ ve ~git pull~ argümansız çalışır; ~git status~ de \"ahead 2\" ya da \"behind 1\" diye bu dalla karşılaştırır.",
    },
    {
      ad: "push-u",
      soru: "~ozellik~ dalını ilk kez ~origin~'e gönderen ve aynı anda upstream'ini ayarlayan komutu yaz.",
      cevap: ["git push -u origin ozellik", "git push --set-upstream origin ozellik"],
      aciklama: "~-u~ (~--set-upstream~) push ile birlikte ~branch.ozellik.remote~ ve ~branch.ozellik.merge~ ayarlarını yazar. Sonraki seferlerde düz ~git push~ yeter.",
    },
    {
      ad: "ahead-behind",
      zorluk: 2,
      soru: "~git status~ şunu yazıyor: ~Your branch is ahead of 'origin/main' by 2 commits.~ Bu ne demektir?",
      secenekler: [
        "Yerelde henüz push edilmemiş iki commit var",
        "Uzakta senin almadığın iki commit var",
        "İki commit çakışıyor",
        "main ile origin/main arasında iki dosya farklı",
      ],
      aciklama: "\"ahead\" senin önde olduğun, yani push bekleyen commit sayısıdır. \"behind\" ise uzakta olup henüz almadığın commit'lerdir; ikisi birden varsa dallar ayrışmıştır.",
    },
    {
      ad: "status-guncel-mi",
      senaryo: true,
      zorluk: 2,
      soru: "Sabah ~git status~ \"Your branch is up to date with 'origin/main'\" diyor. Ekip arkadaşın ise gece main'e push ettiğini söylüyor. Neden çelişki var?",
      secenekler: [
        "status yalnızca son fetch'teki origin/main'e bakar; önce fetch gerekir",
        "Ekip arkadaşının push'u başarısız olmuştur",
        "status yalnızca yerel dalları karşılaştırmaz, hata vermiştir",
        "GitHub push'ları yalnızca ertesi gün görünür",
      ],
      aciklama: "~git status~ ağa çıkmaz; ~origin/main~'in yerelde kayıtlı hâline bakar. ~git fetch~ yaptıktan sonra \"behind 1\" der.",
    },
    {
      ad: "branch-vv",
      soru: "Yerel dalların hangi uzak dalı izlediğini ve kaç commit önde ya da geride olduklarını gösteren komut hangisidir?",
      secenekler: ["~git branch -vv~", "~git remote -v~", "~git log --all~", "~git status -s~"],
      aciklama: "~git branch -vv~ her dalın yanında ~[origin/main: ahead 1, behind 2]~ gibi bir not yazar. ~git remote -v~ yalnızca uzak depoların adreslerini listeler.",
    },
  ]),
  ...sorular(U, "u10-fetch-pull", [
    {
      ad: "fetch-ne-yapar",
      soru: "~git fetch~ ne yapar?",
      secenekler: [
        "Uzaktaki yenilikleri indirip origin/... dallarını günceller",
        "Uzaktaki yenilikleri indirip bulunduğun dala birleştirir",
        "Yerel commit'leri uzak depoya gönderir",
        "Uzak deponun yeni bir kopyasını ayrı klasöre açar",
      ],
      aciklama: "fetch güvenlidir: senin dalına ve dosyalarına dokunmaz, yalnızca uzak izleme dallarını günceller. Ne geldiğini ~git log main..origin/main~ ile inceleyip sonra birleştirebilirsin.",
    },
    {
      ad: "pull-esittir",
      soru: "Varsayılan ayarlarla ~git pull~ hangi iki adımın birleşimidir?",
      secenekler: ["fetch ve merge", "fetch ve push", "clone ve merge", "commit ve push"],
      aciklama: "~git pull~ önce ~git fetch~ yapar, sonra upstream dalı bulunduğun dala birleştirir. ~--rebase~ ile ikinci adım birleştirme yerine rebase olur.",
    },
    {
      ad: "fetch-komut",
      soru: "~origin~'deki yenilikleri, kendi dalına dokunmadan indiren komutu yaz.",
      cevap: ["git fetch", "git fetch origin"],
      aciklama: "~git fetch~ (upstream'in uzak deposundan) ya da açıkça ~git fetch origin~. Sonra ~git status~ \"behind\" sayısını doğru gösterir.",
    },
    {
      ad: "once-bak",
      senaryo: true,
      soru: "Uzun bir aradan sonra projeye döndün. Ekibin ne yaptığını görmeden kendi dalına hiçbir şey karışsın istemiyorsun. Ne yaparsın?",
      secenekler: [
        "git fetch, sonra git log ile origin/main'e bakarım",
        "git pull, sonra beğenmezsem silerim",
        "Depoyu silip yeniden klonlarım",
        "git push --force ile kendi hâlimi korurum",
      ],
      aciklama: "fetch gelenleri yalnızca ~origin/...~ dallarına koyar; ~git log --oneline main..origin/main~ gelecek commit'leri listeler. Karar verince ~git merge~ ya da ~git pull~.",
    },
    {
      ad: "ayrismis-pull",
      zorluk: 2,
      soru: "~git pull~ şu hatayı veriyor: ~fatal: Need to specify how to reconcile divergent branches.~ Bu ne anlama gelir?",
      secenekler: [
        "İki tarafta da öbüründe olmayan commit var; birleştirme yolunu seçmelisin",
        "Uzak depo silinmiş",
        "Çalışma dizininde henüz commit'lenmemiş değişiklikler duruyor",
        "Upstream ayarı yapılmamış",
      ],
      aciklama: "Git 2.27'den beri ayrışmış dallarda pull sessizce birleştirme yapmaz. ~git pull --no-rebase~ (birleştir), ~git pull --rebase~ (üstüne diz) ya da kalıcı ayar ~git config pull.rebase true~.",
    },
    {
      ad: "pull-rebase-komut",
      soru: "Uzaktaki commit'leri alıp kendi yerel commit'lerini onların üstüne dizen pull komutunu yaz.",
      cevap: ["git pull --rebase", "git pull -r", "git pull --rebase origin main"],
      aciklama: "~git pull --rebase~ birleştirme commit'i oluşturmaz; geçmiş düz kalır. Yerel commit'lerinin kimlikleri değişir, ama henüz push etmediğin için sorun olmaz.",
    },
    {
      ad: "pull-ff",
      dy: true,
      soru: "Yerelde yeni commit yoksa ~git pull~ yalnızca ileri sarar (fast-forward); birleştirme commit'i oluşmaz.",
      aciklama: "Doğru. Dal ayrışmadıysa merge de rebase de gerekmez; Git dalı uzaktakinin ucuna kaydırır.",
    },
  ]),
  ...sorular(U, "u10-push-reddi", [
    {
      ad: "fetch-first",
      senaryo: true,
      soru: "~git push~ şunu söylüyor: ~! [rejected] main -> main (fetch first)~. En doğru adım hangisidir?",
      secenekler: [
        "Önce git pull ile uzaktakini alır, sonra yeniden push ederim",
        "git push --force ile kendi hâlimi gönderirim",
        "Yeni bir dal açıp oraya push ederim, main'i unuturum",
        "Depoyu silip yeniden klonlarım",
      ],
      aciklama: "Reddin nedeni, biri senden önce push etmiş olmasıdır. ~git pull~ (ya da ~git pull --rebase~) onun işini alır; çakışma varsa çözülür; sonra push geçer. ~--force~ onun commit'lerini siler.",
    },
    {
      ad: "neden-red",
      soru: "Git bir push'u neden reddeder?",
      secenekler: [
        "Uzak dalın ucu, gönderdiğin geçmişin içinde yer almıyorsa",
        "Gönderilen commit'ler bir günden eskiyse",
        "Commit mesajları İngilizce değilse",
        "Aynı dosya aynı gün iki farklı kişi tarafından düzenlendiyse",
      ],
      aciklama: "Push yalnızca ileri sarma ise kabul edilir: uzaktaki uç, senin geçmişinin bir atası olmalı. Değilse kabul etmek uzaktaki commit'leri kaybettirirdi.",
    },
    {
      ad: "fetch-first-non-ff",
      zorluk: 3,
      soru: "Ret mesajında \"fetch first\" ile \"non-fast-forward\" arasındaki fark nedir?",
      secenekler: [
        "fetch first: uzaktaki commit'ler sende hiç yok; non-ff: var ama gerisindesin",
        "fetch first yalnızca ilk push'ta, non-ff sonraki push'larda çıkar",
        "fetch first --force ile, non-ff --force olmadan çözülür",
        "İkisi aynıdır, yalnızca Git sürümüne göre değişir",
      ],
      aciklama: "Git, uzaktaki ucu yerel nesnelerinde bulamazsa \"fetch first\" der. fetch yaptıysan ama birleştirmediysen ucu tanır ve \"non-fast-forward\" der. İkisinin çözümü de önce birleştirmektir.",
    },
    {
      ad: "red-sonra-cakisma",
      senaryo: true,
      zorluk: 2,
      soru: "Push reddedildi, ~git pull~ yaptın ve aynı dosyada çakışma çıktı. Sıradaki adımlar hangisidir?",
      secenekler: [
        "Çakışmayı çöz, git add, git commit, sonra git push",
        "git push --force, çakışma kendiliğinden kaybolur",
        "git merge --abort, sonra yine git push",
        "Dosyayı silip git push",
      ],
      aciklama: "pull bir birleştirmedir; çakışma 7. ünitedeki gibi çözülür. Birleştirme commit'iyle birlikte geçmişin uzaktakini içerir ve push artık ileri sarmadır.",
    },
    {
      ad: "korumali-red",
      dy: false,
      soru: "Push reddi her zaman başkasının senden önce push etmesinden kaynaklanır.",
      aciklama: "Yanlış. Korumalı dala doğrudan push yasağı (13. ünite), yetki eksikliği ya da push protection'ın gizli anahtar bulması (14. ünite) da push'u reddettirir. Mesajı okumak her zaman ilk adımdır.",
    },
    {
      ad: "kucuk-sik-push",
      senaryo: true,
      soru: "Ekibinle aynı dalda çalışıyorsun ve sık sık ret alıyorsun. Hangi alışkanlık en çok işe yarar?",
      secenekler: [
        "Push'tan önce pull --rebase ve sık, küçük push'lar",
        "Bütün işi hafta sonunda tek push'ta göndermek",
        "Her push'u --force ile yapmak",
        "Push'tan önce dosyaları kilitlemek",
      ],
      aciklama: "Ne kadar sık alıp gönderirsen ayrışma o kadar küçük kalır. Daha da iyisi herkesin kendi dalında çalışıp PR açmasıdır.",
    },
  ]),
  ...sorular(U, "u10-force", [
    {
      ad: "force-tehlike",
      soru: "~git push --force~ neden tehlikelidir?",
      secenekler: [
        "Uzak dalı seninkiyle ezer, başkalarının commit'leri kaybolabilir",
        "Yerel commit'lerini siler",
        "Yerel dallarının hepsini aynı anda uzak depoya gönderir",
        "Depoyu herkese açık yapar",
      ],
      aciklama: "--force \"uzaktaki ne olursa olsun benimkini yaz\" demektir. Arada biri push ettiyse onun commit'leri dalda görünmez olur.",
    },
    {
      ad: "lease",
      zorluk: 2,
      soru: "~--force-with-lease~ düz ~--force~'tan farklı olarak neyi denetler?",
      secenekler: [
        "Uzak dalın hâlâ son gördüğün yerde olup olmadığını",
        "Gönderilen commit'lerin GPG ile imzalı olup olmadığını",
        "Dalın korumalı olup olmadığını",
        "Push edilen commit sayısını",
      ],
      aciklama: "Lease, uzaktaki ucun ~origin/dal~'da kayıtlı değerle aynı olmasını şart koşar. Biri arada push ettiyse ~(stale info)~ ile reddedilir ve onun işi ezilmez.",
    },
    {
      ad: "lease-komut",
      soru: "Kendi özellik dalında rebase yaptın; dalı, başkasının arada push ettiği bir şeyi ezmeden zorla gönderen komutu yaz.",
      cevap: ["git push --force-with-lease", "git push --force-with-lease origin"],
      aciklama: "~git push --force-with-lease~ yeniden yazılmış geçmişi gönderir ama uzak dal beklenmedik biçimde değiştiyse durur.",
    },
    {
      ad: "force-ne-zaman",
      senaryo: true,
      soru: "Hangi durumda zorla push (with-lease) makul bir seçimdir?",
      secenekler: [
        "Yalnızca senin çalıştığın özellik dalını rebase ettiğinde",
        "main'de bir commit'i beğenmediğinde",
        "Push reddedildiğinde, pull yapmaya üşendiğinde",
        "Ekip arkadaşının hatalı commit'ini silmek istediğinde",
      ],
      aciklama: "Zorla push, dalın geçmişini yeniden yazdığını bilen tek kişi sensen kabul edilebilir. Paylaşılan dallarda (main, dev, test) hata revert ile geri alınır.",
    },
    {
      ad: "force-kurtarma",
      senaryo: true,
      zorluk: 3,
      soru: "Ekip arkadaşın main'e yanlışlıkla ~--force~ push etti ve senin dünkü iki commit'in uzaktan kayboldu. Senin bilgisayarında main hâlâ eski hâlinde. Ne yaparsın?",
      secenekler: [
        "Kendi main'imdeki commit'leri bir dala alır, PR ile geri getiririm",
        "git pull yapıp kaybı kabul ederim",
        "Hemen ben de --force ile kendi main'imi gönderirim",
        "Depoyu silip yeniden klonlarım",
      ],
      aciklama: "Commit'ler senin deponda duruyor: ~git branch kurtarma main~ ile koru, sonra ekiple konuşup PR'la ya da cherry-pick'le geri getir. Karşı --force, arkadaşının o arada attığı commit'leri de silebilir. Kalıcı çözüm main'i korumaya almaktır.",
    },
  ]),
  ...sorular(U, "u10-remote-yonetimi", [
    {
      ad: "remote-v",
      soru: "Depoya bağlı uzak depoların adlarını ve adreslerini gösteren komutu yaz.",
      cevap: ["git remote -v", "git remote --verbose"],
      aciklama: "~git remote -v~ her uzak depo için fetch ve push adresini yazar. Yalnızca adlar için ~git remote~.",
    },
    {
      ad: "set-url",
      senaryo: true,
      soru: "Depo GitHub'da başka bir organizasyona taşındı ve adresi değişti. Yereldeki bağlantıyı nasıl güncellersin?",
      secenekler: [
        "git remote set-url origin <yeni adres>",
        "git remote add origin <yeni adres>",
        "Depoyu silip yeni adresten klonlarım",
        "git push --force <yeni adres>",
      ],
      aciklama: "~set-url~ adresi değiştirir, geçmiş ve dallar yerinde kalır. ~remote add origin~ ise \"remote origin already exists\" hatası verir.",
    },
    {
      ad: "prune",
      zorluk: 2,
      soru: "GitHub'da silinmiş dallar ~git branch -r~ listende hâlâ ~origin/eski-dal~ olarak görünüyor. Bunları temizleyen komut hangisidir?",
      secenekler: ["~git fetch --prune~", "~git branch -D origin/eski-dal~", "~git remote remove origin~", "~git pull --all~"],
      aciklama: "~git fetch --prune~ (~-p~) uzakta artık olmayan uzak izleme dallarını siler. Hep böyle olsun istersen ~git config --global fetch.prune true~.",
    },
    {
      ad: "uzak-dal-sil",
      soru: "Birleşmiş ~ozellik~ dalını uzak depodan (origin) silen komutu yaz.",
      cevap: ["git push origin --delete ozellik", "git push origin -d ozellik", "git push --delete origin ozellik", "git push origin :ozellik"],
      aciklama: "~git push origin --delete ozellik~ uzak dalı siler. Yerel dal için ayrıca ~git branch -d ozellik~ gerekir; GitHub'da PR birleşince \"Delete branch\" düğmesi aynı işi yapar.",
    },
    {
      ad: "uzaktan-dal-al",
      soru: "Ekip arkadaşın ~ozellik~ dalını push etti. ~git fetch~'ten sonra ~git switch ozellik~ yazınca ne olur?",
      secenekler: [
        "origin/ozellik'i izleyen yerel bir ozellik dalı açılır",
        "Hata verir; önce git branch ozellik gerekir",
        "Kopuk HEAD'de origin/ozellik'e geçilir",
        "Arkadaşının bilgisayarındaki dala bağlanılır",
      ],
      aciklama: "Yerelde o adla dal yoksa ve tek bir uzak depoda varsa ~git switch~ izleyen bir dal açar: ~branch 'ozellik' set up to track 'origin/ozellik'.~",
    },
    {
      ad: "iki-remote",
      dy: true,
      soru: "Bir depo aynı anda birden çok uzak depoya bağlı olabilir; örneğin ~origin~ GitHub'a, ~gitlab~ GitLab'a.",
      aciklama: "Doğru. Her uzak depo ayrı adla eklenir; ~git push gitlab main~ gibi adla seçilir. Fork akışındaki ~origin~ ve ~upstream~ de böyledir.",
    },
  ]),
];
