import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitOku, headCommit, ataMi, DAL } from "../../../../src/gitsim/depo";
import { commitSayisi, dalAdiniAl, headDosyalari } from "../../../../src/gitsim/gorev";
import type { Ortam } from "../../../../src/gitsim/tipler";

const dal = (o: Ortam, ad: string) => o.depo?.refs[DAL + ad] ?? null;
const birlesimVar = (o: Ortam) => {
  const d = o.depo;
  const h = d && headCommit(d);
  return !!h && commitOku(d!, h).ebeveynler.length > 1;
};

const SITE = { "index.html": "<h1>Kafe Mavi</h1>\n<p>Menü yakında</p>\n", "stil.css": "h1 { color: navy; }\n" };
const SITE_KUR = ["git init", "git add .", 'git commit -m "Ana sayfa"', 'echo "p { font-size: 18px; }" >> stil.css', 'git commit -am "Yazı boyutu"'];

export const UNITE_6: Ders = {
  hafta: 6,
  baslik: "Dallar",
  ozet: "Dalın aslında bir işaretçi olduğunu gör; dal açmayı, dallar arasında geçmeyi, HEAD'i ve iki dalı birleştirmeyi (ileri sarma ve üç yollu) terminalde dene.",
  bolumler: [
    {
      baslik: "Dal nedir?",
      metin: md(`
Şimdiye kadar bütün commit'ler tek bir çizgide ilerledi. Gerçek projelerde aynı anda birden çok iş yürür: biri giriş formunu yazar, biri bir hatayı düzeltir, sen de bir şey denemek istersin. Hepsi aynı çizgide olsa yarım bir iş herkesi bozar.

**Dal** (branch) bu işleri birbirinden ayırır. Ama dal bir kopya değildir: Git'te dal, **bir commit'i gösteren küçük bir işaretçidir**. ~main~ de sıradan bir daldır; Git onu yalnızca ilk dal olarak açar.

Aşağıda düğmelerle oyna. Dikkat et: commit attığında yalnızca **bulunduğun dalın** işaretçisi ilerler.

[[G-H6-01]]

Bu yüzden dal açmak çok ucuzdur: yüzlerce dosyalı bir projede bile anında açılır, çünkü yalnızca 41 baytlık bir dosya yazılır (~.git/refs/heads/ozellik~). Denemek istediğin her şey için çekinmeden dal aç; işe yaramazsa silersin.
`),
      dene: ["gt-u6-dal-tanim", "gt-u6-ucuz"],
    },
    {
      baslik: "Dal açmak ve geçmek",
      metin: md(`
Dal açmanın ve geçmenin komutları:

~~~
git branch giris-formu          # dal aç (geçmez)
git switch giris-formu          # dala geç
git switch -c giris-formu       # aç ve geç (en sık kullanılan)
git switch main                 # main'e dön
~~~

Eski komutla aynı işler ~git checkout giris-formu~ ve ~git checkout -b giris-formu~ ile de yapılır; internette çok görürsün. ~switch~ yalnızca dal işi yaptığı için daha anlaşılırdır.

Dala geçince **çalışma dizini o dalın son commit'inin hâline gelir**: o dalda olmayan dosyalar klasörden kaybolur, geri dönünce yine gelir. Hiçbiri silinmez, hepsi depoda durur.

Commit'lenmemiş bir değişiklikle geçmeye çalışırsan ve bu değişiklik diğer daldaki dosyayla çakışacaksa Git geçişi reddeder: ~Your local changes ... would be overwritten by checkout~. Önce commit'le ya da kenara koy (9. ünite: ~git stash~).

Hangi daldasın? ~git status~'un ilk satırı (~On branch ...~) ya da ~git branch~ çıktısındaki ~*~ söyler.
`),
      git: {
        dosyalar: SITE,
        kurulum: SITE_KUR,
        gorev: "~giris-formu~ adında bir dal açıp ona geç, ~giris.html~ adında bir dosya oluşturup commit'le. Sonra ~main~'e dön ve ~ls~ ile dosyanın orada olmadığını gör.",
        oneriler: ["git switch -c giris-formu", 'echo "<form></form>" > giris.html', "git add giris.html", 'git commit -m "Giriş formu iskeleti"', "git switch main", "ls"],
        hedefler: [
          { aciklama: "~giris-formu~ dalı var", denetle: (o) => !!dal(o, "giris-formu") },
          { aciklama: "~giris-formu~ dalında ~giris.html~ commit'lendi", denetle: (o) => !!dal(o, "giris-formu") && dal(o, "giris-formu") !== dal(o, "main") },
          { aciklama: "Şu an ~main~ dalındasın", denetle: (o) => dalAdiniAl(o) === "main" },
        ],
      },
      dene: ["gt-u6-switch-c", "gt-u6-gecince-dosyalar", "gt-u6-kirli-gecis"],
    },
    {
      baslik: "HEAD ve kopuk HEAD",
      metin: md(`
Git "şu an neredeyim?" sorusunu **HEAD** ile cevaplar. HEAD genellikle bir dalı gösterir; dal da bir commit'i. Yukarıdaki şekilde ~HEAD → main~ yazan çip budur. ~git switch~ yalnızca HEAD'in gösterdiği dalı değiştirir.

Bir dalı değil de doğrudan **bir commit'i** açarsan HEAD dala bağlı olmaz. Buna **kopuk HEAD** (detached HEAD) denir:

~~~
git switch --detach a1b2c3d     # ya da: git checkout a1b2c3d
~~~

Eski bir sürüme bakmak için bu çok kullanışlıdır. Tehlike şudur: kopuk HEAD'de commit atarsan bu commit'i hiçbir dal göstermez. Başka bir dala geçtiğinde onlara giden yol kaybolur. Saklamak istersen geçmeden önce dal aç: ~git switch -c kurtarma~.

Kopuk HEAD'deyken terminaldeki istem dal adı yerine kısa kimliği gösterir, ~git status~ da ~HEAD detached at ...~ der.
`),
      git: {
        dosyalar: SITE,
        kurulum: SITE_KUR,
        gorev: "İlk commit'e (~HEAD¬1~) kopuk HEAD olarak geç ve ~cat stil.css~ ile eski hâline bak. Sonra ~main~'e geri dön.",
        oneriler: ["git log --oneline", "git switch --detach HEAD~1", "cat stil.css", "git status", "git switch main"],
        hedefler: [
          { aciklama: "Eski sürüme bakıldı (reflog'da kopuk geçiş var)", denetle: (o) => !!o.depo?.reflog.some((r) => /moving from [0-9a-f]{7,} to /.test(r.mesaj)) },
          { aciklama: "Yeniden ~main~ dalındasın", denetle: (o) => dalAdiniAl(o) === "main" },
        ],
      },
      dene: ["gt-u6-head-nedir", "gt-u6-kopukta-commit"],
    },
    {
      baslik: "Birleştirmek: ileri sarma ve üç yollu",
      metin: md(`
Dalda iş bitince onu ana dala alırsın. Kural: **almak istediğin dala geç**, sonra diğerini birleştir:

~~~
git switch main
git merge ozellik
~~~

İki durum vardır:

- **İleri sarma** (fast-forward): ~main~ dal açıldığından beri hiç ilerlemediyse Git yeni commit oluşturmaz, ~main~ işaretçisini ileri kaydırır. Çıktıda ~Fast-forward~ yazar.
- **Üç yollu birleştirme**: iki dal da ilerlediyse Git ortak atayı ve iki ucu karşılaştırıp **iki ebeveynli** bir birleştirme commit'i oluşturur. Mesajı için editör açılır (~Merge branch 'ozellik'~).

~git merge --no-ff ozellik~ ileri sarma mümkün olsa bile birleştirme commit'i oluşturur; geçmişte "burada bir dal birleşti" izi kalsın isteyen ekipler bunu kullanır.

Yukarıdaki şekilde ikisini de dene. Sonra burada gerçek komutlarla yap:
`),
      git: {
        dosyalar: SITE,
        kurulum: [...SITE_KUR, "git switch -c menu", 'echo "<ul><li>Çay</li></ul>" > menu.html', "git add menu.html", 'git commit -m "Menü sayfası"', "git switch main", 'echo "<footer>2026</footer>" >> index.html', 'git commit -am "Alt bilgi"'],
        gorev: "~menu~ dalında bir commit, ~main~'de de dal açıldıktan sonra atılmış bir commit var. ~menu~'yü ~main~'e birleştir ve grafikte iki ebeveynli commit'i bul.",
        oneriler: ["git log --oneline --graph --all", "git merge menu", "git log --oneline --graph"],
        hedefler: [
          { aciklama: "~menu~ dalı ~main~'e birleşti", denetle: (o) => { const d = o.depo; const m = dal(o, "main"); const x = dal(o, "menu"); return !!d && !!m && !!x && ataMi(d, x, m); } },
          { aciklama: "~main~'in ucunda iki ebeveynli bir birleştirme commit'i var", denetle: (o) => dalAdiniAl(o) === "main" && birlesimVar(o) },
          { aciklama: "~menu.html~ artık ~main~'de", denetle: (o) => dalAdiniAl(o) === "main" && "menu.html" in headDosyalari(o) },
        ],
      },
      dene: ["gt-u6-merge-komut", "gt-u6-ff", "gt-u6-yon"],
    },
    {
      baslik: "Dalları yönetmek",
      metin: md(`
Dallar birikir; düzenli tutmak gerekir:

~~~
git branch                 # yerel dalları listele, * bulunduğun dal
git branch -v              # her dalın son commit'iyle
git branch -m eski yeni    # yeniden adlandır
git branch -d ozellik      # birleşmiş dalı sil
git branch -D deneme       # birleşmemiş dalı zorla sil
~~~

~-d~ güvenlidir: dal birleşmemişse ~error: the branch 'deneme' is not fully merged~ der ve silmez. ~-D~ ile zorlarsan o dalın commit'lerine giden işaretçi gider (reflog'dan bir süre bulunabilir, 9. ünite). Birleşmiş bir dalı silmek commit'leri silmez; onlar zaten ana dalın geçmişindedir.

**Adlandırma**: ekipler dal adlarına önek koyar. Geçen yılın akış kağıdındaki kurallar: yeni iş ~feature/US-D03e-docker-compose-local~, hata düzeltmesi ~bugfix/US-D12-login-validation~ biçiminde; önce tür, sonra iş numarası, sonra kısa açıklama. Boşluk ve Türkçe karakter kullanılmaz, kelimeler tireyle ayrılır.
`),
      git: {
        dosyalar: SITE,
        kurulum: [...SITE_KUR, "git switch -c ozellik", 'echo "<nav></nav>" >> index.html', 'git commit -am "Gezinme çubuğu"', "git switch main", "git merge ozellik", "git switch -c deneme", 'echo "h1 { color: red; }" > stil.css', 'git commit -am "Kırmızı deneme"', "git switch main"],
        gorev: "~ozellik~ birleşti, ~deneme~ ise tutmadı. Önce ~git branch -d ozellik~ ile birleşmiş dalı sil. Sonra ~deneme~'yi ~-d~ ile silmeyi dene, uyarıyı oku ve vazgeçtiğin için ~-D~ ile sil.",
        oneriler: ["git branch -v", "git branch -d ozellik", "git branch -d deneme", "git branch -D deneme", "git branch"],
        hedefler: [
          { aciklama: "~ozellik~ silindi", denetle: (o) => !!o.depo && !dal(o, "ozellik") },
          { aciklama: "~deneme~ silindi", denetle: (o) => !!o.depo && !dal(o, "deneme") },
          { aciklama: "~main~ duruyor ve gezinme çubuğu içinde", denetle: (o) => (headDosyalari(o)["index.html"] ?? "").includes("<nav>") && commitSayisi(o) >= 3 },
        ],
      },
      dene: ["gt-u6-branch-d", "gt-u6-not-fully-merged", "gt-u6-adlandirma"],
    },
  ],
  test: [
    "gt-u6-neden-dal", "gt-u6-deneme", "gt-u6-main-ozel-mi", "gt-u6-branch-ac", "gt-u6-switch-gec", "gt-u6-yanlis-dalda-commit",
    "gt-u6-kopuk-tanim", "gt-u6-eski-surume-bak", "gt-u6-uc-yollu", "gt-u6-no-ff", "gt-u6-merge-graf",
    "gt-u6-branch-liste", "gt-u6-rename", "gt-u6-silince-commit",
  ],
};
