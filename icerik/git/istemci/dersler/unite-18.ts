import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitAgaci, gecmis, soy } from "../../../../src/gitsim/depo";
import { uzakBul } from "../../../../src/gitsim/uzak";
import type { Ortam } from "../../../../src/gitsim/tipler";

const dalUcu = (o: Ortam, dal: string) => o.depo?.refs["refs/heads/" + dal] ?? null;
const dalSayisi = (o: Ortam, dal: string) => {
  const h = dalUcu(o, dal);
  return h ? gecmis(o.depo!, [h]).length : 0;
};

const DORT_COMMIT = [
  "git init",
  'echo "kahve 40" > menu.txt',
  "git add .",
  'git commit -m "Menü"',
  'echo "cay 20" >> menu.txt',
  'git commit -am "Çay"',
  'echo "su 10" >> menu.txt',
  'git commit -am "Su"',
  'echo "limonata 30" >> menu.txt',
  'git commit -am "Limonata"',
];

export const STASH_KURULUM = [
  ...DORT_COMMIT,
  'echo "export function kampanya() { return 0.1; }" > kampanya.js',
  "git add kampanya.js",
  'git stash push -m "kampanya yarım"',
  "git stash drop",
];
// Düşürülen stash commit'inin kimliği (gerçek git ile aynı; ders testi doğrular)
export const STASH_KIMLIGI = "4bb1325";

export const VIDEO = "https://github.com/kafe-mavi/tanitim.git";
const VIDEO_KURULUM = [
  `@uzak ${VIDEO}`,
  `@ayse git clone ${VIDEO}`,
  '@ayse echo "# Kafe Mavi tanıtım sitesi" > README.md',
  "@ayse git add .",
  '@ayse git commit -m "İlk sürüm"',
  '@ayse echo "[300 MB video]" > tanitim.mp4',
  "@ayse git add .",
  '@ayse git commit -m "Tanıtım videosu"',
  '@ayse echo "<video src=tanitim.mp4>" > index.html',
  "@ayse git add .",
  '@ayse git commit -m "Ana sayfa"',
  "@ayse git rm tanitim.mp4",
  '@ayse echo "<video src=https://cdn.kafe/tanitim.mp4>" > index.html',
  '@ayse git commit -am "Video CDN\'e taşındı"',
  "@ayse git tag -a v1.0 -m v1.0",
  "@ayse git push --tags",
  "@ayse git push",
  `git clone ${VIDEO}`,
];

// Uzak deponun herhangi bir dalından ya da etiketinden ulaşılan bir commit'te bu yol var mı
export function uzakGecmisteYol(o: Ortam, url: string, yol: string): boolean {
  const u = uzakBul(o, url);
  if (!u) return false;
  const uclar = Object.values(u.refs).map((h) => soy(u, h));
  return gecmis(u, uclar).some((c) => yol in commitAgaci(u, c));
}

export const UNITE_18: Ders = {
  hafta: 18,
  baslik: "Geçmişi Onarmak ve Kurtarma",
  ozet: "Git'te commit'lenmiş bir şeyi kaybetmek sanıldığından zordur. reflog ve fsck ile kayıp commit'leri bul, felaket senaryolarından kurtul, nesnelerin gerçekten ne zaman silindiğini öğren; geçmişten büyük dosyaları filter-repo ile temizle ve büyük depolarla başa çık.",
  bolumler: [
    {
      baslik: "reflog: Git'in kara kutusu",
      metin: md(`
HEAD ve her dal bir commit'ten ötekine her geçtiğinde (commit, reset, rebase, switch, merge) bunu **reflog**'a yazar:

~~~
git reflog
4b1e2c3 HEAD@{0}: reset: moving to HEAD~3
9f8e7d6 HEAD@{1}: commit: Limonata
6a5b4c3 HEAD@{2}: commit: Su
~~~

~HEAD@{n}~ "n hareket önce HEAD'in olduğu yer" demektir; ~HEAD¬n~ ise geçmişte n ebeveyn geri gitmektir. Dalların da kendi kaydı vardır: ~git reflog main~, ~main@{1}~, ~main@{yesterday}~.

reflog **yereldir**: ne push ne clone ile taşınır, yalnızca senin bilgisayarındaki hareketleri bilir. Kayıtlar varsayılan olarak 90 gün (artık hiçbir daldan ulaşılamayanlar 30 gün) tutulur.

Terminalde biri ~git reset --hard HEAD¬3~ yapıp üç commit'i "sildi". Henüz push edilmemişlerdi. Geri getir.
`),
      git: {
        kurulum: [...DORT_COMMIT, "git reset --hard HEAD~3"],
        gorev: "~git reflog~ ile reset'ten önceki konumu bul ve ~git reset --hard HEAD@{1}~ ile oraya dön.",
        oneriler: ["git log --oneline", "git reflog", "git reset --hard HEAD@{1}", "git log --oneline"],
        hedefler: [{ aciklama: "main'de dört commit var, limonata menüde", denetle: (o) => dalSayisi(o, "main") === 4 && (o.dosyalar["menu.txt"] ?? "").includes("limonata") }],
      },
      dene: ["gt-u18-reflog-ne", "gt-u18-head-at-1", "gt-u18-reflog-uzak"],
    },
    {
      baslik: "Felaket odası",
      metin: md(`
Her felaketin kurtarması aynı soruyla başlar: **istediğim içerik bir zamanlar commit'lendi mi, ya da en azından ~git add~ edildi mi?** Evetse büyük olasılıkla hâlâ depodadır.

| Felaket | Kurtarma |
|---|---|
| ~reset --hard~ ile commit'ler gitti | ~git reset --hard HEAD@{1}~ (ya da ~ORIG_HEAD~) |
| Birleştirilmemiş dal ~branch -D~ ile silindi | Silme çıktısındaki ya da reflog'daki kimlikle ~git branch <ad> <kimlik>~ |
| Rebase bitti ama bir commit kayboldu | Reflog'da "rebase (start)" öncesini bul, oraya ~reset --hard~ |
| ~git stash drop~ / ~clear~ | ~git fsck~ ile sahipsiz commit'i bul, ~git stash apply <kimlik>~ |
| Biri main'i force push ile ezdi | Fetch etmeden ~origin/main~'i bir dala al; ~origin/main@{1}~ reflog'da |
| Hiç add edilmemiş değişiklik ~reset --hard~ ile gitti | Git'te kaydı yok; editörün yerel geçmişi tek umut |

Önce aşağıdaki odada her felakete doğru kurtarmayı seç, sonra terminalde birini gerçekten yaşa.

[[G-H18-01]]

Terminalde ~ozellik~ dalı birleştirilmeden ~git branch -D~ ile silindi. Dalı aynı commit'le geri aç.
`),
      git: {
        kurulum: [
          ...DORT_COMMIT,
          "git switch -c ozellik",
          'echo "export function puan() {}" > sadakat.js',
          "git add .",
          'git commit -m "Sadakat puanı"',
          "git switch main",
          "git branch -D ozellik",
        ],
        gorev: "~git reflog~'da ozellik'in son commit'ini bul (~checkout: moving from ozellik to main~ satırının bir altı) ve ~git branch ozellik <kimlik>~ ile dalı geri aç. ~HEAD@{1}~ de olur.",
        oneriler: ["git reflog", "git branch ozellik HEAD@{1}", "git log --oneline ozellik"],
        hedefler: [{ aciklama: "ozellik dalı geri geldi, sadakat.js içinde", denetle: (o) => { const h = dalUcu(o, "ozellik"); return !!h && "sadakat.js" in commitAgaci(o.depo!, h); } }],
      },
      dene: ["gt-u18-reset-hard-geri", "gt-u18-silinen-dal", "gt-u18-rebase-geri"],
    },
    {
      baslik: "fsck: sahipsiz nesneler",
      metin: md(`
Bazı nesnelere reflog da ulaşmaz: düşürülen bir stash'in commit'i, commit'lenmeden üstüne yazılmış bir ~git add~. Bunlar **sahipsiz** (dangling) kalır; silinmeyi bekler ama hâlâ okunabilir. ~git fsck~ deponun bütünlüğünü denetler ve onları listeler:

~~~
git fsck
dangling commit 4bb1325...
dangling blob 7c2a91f...
~~~

Sahipsiz commit'e ~git show <kimlik>~ ile bakıp, stash'se ~git stash apply <kimlik>~ ile, değilse bir dala bağlayarak geri getirirsin:

~~~
git branch kurtarilan a1b2c3d
~~~

Silinen dalın commit'leri HEAD'in reflog'unda hâlâ kayıtlıysa fsck onları sahipsiz saymaz; reflog'u yok saymak için ~git fsck --no-reflogs~, hepsini görmek için ~--unreachable~.

Terminalde yarım kampanya kodunu stash'e koydun, sonra yanlışlıkla ~git stash drop~ yaptın. Geri getir.
`),
      git: {
        kurulum: STASH_KURULUM,
        gorev: "~git stash list~ boş. ~git fsck~ ile sahipsiz commit'i bul, ~git show~ ile içine bak ve ~git stash apply <kimlik>~ ile geri getir.",
        oneriler: ["git stash list", "git fsck", `git show ${STASH_KIMLIGI}`, `git stash apply ${STASH_KIMLIGI}`],
        hedefler: [{ aciklama: "kampanya.js geri geldi", denetle: (o) => (o.dosyalar["kampanya.js"] ?? "").includes("kampanya") }],
      },
      dene: ["gt-u18-dangling", "gt-u18-stash-drop", "gt-u18-kurtarma-dali"],
    },
    {
      baslik: "Nesneler ne zaman gerçekten silinir?",
      metin: md(`
Sahipsiz bir nesne hemen silinmez. Silinmesi için iki ağın da kalkması gerekir:

1. **Reflog kaydı** dolmalı: varsayılan 90 gün, daldan ulaşılamayan kayıtlar için 30 gün.
2. **Bekleme süresi** dolmalı: hiçbir yerden ulaşılamayan gevşek nesneler iki hafta korunur.

Bunlardan sonraki ilk ~git gc~ nesneyi siler. Yani bir hatadan sonra genellikle **haftalarca** kurtarma şansın vardır.

Bazen silmeyi hızlandırmak istersin (ör. geçmişten gizli bilgiyi temizledikten sonra yerel kopyada iz kalmasın):

~~~
git reflog expire --expire=now --all
git gc --prune=now
~~~

İlk komut bütün reflog kayıtlarını siler, ikincisi ulaşılamayan nesneleri hemen budar. Bundan sonra o nesneler ancak başka bir kopyada (uzak depo, ekip arkadaşı) duruyorsa geri gelir. Bu iki komut kurtarma ağını kaldırır; ne yaptığından emin olmadan çalıştırma.

Terminalde reset'le "kaybolmuş" bir commit var. fsck ile gör, sonra iki ağı da kaldırıp neler değiştiğine bak.
`),
      git: {
        kurulum: [...DORT_COMMIT, "git reset --hard HEAD~1"],
        alanlar: false,
        gorev: "~git fsck~ önce bir şey göstermez (reflog korur), ~--no-reflogs~ gösterir. Reflog'u boşalt, ~git gc --prune=now~ ile buda ve ~git fsck --no-reflogs~ ile yeniden bak.",
        oneriler: ["git fsck", "git fsck --no-reflogs", "git reflog expire --expire=now --all", "git reflog", "git gc --prune=now", "git fsck --no-reflogs"],
        hedefler: [{ aciklama: "Limonata commit'i depodan tamamen silindi", denetle: (o) => !!o.depo && !Object.values(o.depo.nesneler).some((n) => n.tur === "commit" && n.mesaj === "Limonata\n") }],
      },
      dene: ["gt-u18-ne-zaman-silinir", "gt-u18-prune-now"],
    },
    {
      baslik: "filter-repo: geçmişi temizlemek",
      metin: md(`
Bir dosyayı son commit'te silmek onu geçmişten çıkarmaz: 300 MB'lık bir video bir kez commit'lendiyse her clone onu indirir. Geçmişten çıkarmak için bütün commit'ler **yeniden yazılır**. Bunun önerilen aracı **git filter-repo**'dur (Git ile gelmez, ayrıca kurulur; ~git filter-branch~ yavaş ve hataya açık olduğu için belgesinde bile önerilmez; BFG Repo-Cleaner bir başka seçenektir).

~~~
git filter-repo --path tanitim.mp4 --invert-paths
~~~

~--path~ yalnızca o yolu tutar, ~--invert-paths~ seçimi ters çevirir: o yol dışındaki her şey kalır. Metin değiştirmek için ~--replace-text dosya~ (her satır ~eski==>yeni~ ya da yalnızca ~eski~, o zaman ~***REMOVED***~ yazılır).

filter-repo **taze bir clone**'da çalışmak ister, değilse ~--force~ ister. Bittiğinde:

- bütün commit kimlikleri değişmiş, boşalan commit'ler atılmıştır,
- ~origin~ kaldırılmıştır (yeni geçmiş yanlışlıkla eskisinin üstüne gitmesin diye),
- eski nesneler reflog'larla birlikte silinmiştir.

Göndermek bilinçli bir karardır: origin'i yeniden ekler, **bütün dalları ve etiketleri** zorla gönderirsin, ekibe yeniden clone etmesini söylersin. Fork'lar ve eski clone'lar eski geçmişi taşımaya devam eder; sızan bir anahtar için asıl çözüm yine iptal etmektir (14. ünite).

Terminalde Kafe Mavi'nin tanıtım sitesi var; video bir süre önce silinmiş ama geçmişte duruyor. Geçmişten çıkar ve GitHub'ı güncelle.
`),
      git: {
        kurulum: VIDEO_KURULUM,
        gorev: "~git filter-repo --path tanitim.mp4 --invert-paths~, sonra ~git remote add origin~ ile depoyu yeniden ekle; ~git push --force --all~ ve ~git push --force --tags~.",
        oneriler: [
          "git log --oneline --stat",
          "git filter-repo --path tanitim.mp4 --invert-paths",
          "git log --oneline",
          `git remote add origin ${VIDEO}`,
          "git push --force --all",
          "git push --force --tags",
        ],
        hedefler: [
          { aciklama: "GitHub'daki hiçbir commit'te tanitim.mp4 yok", denetle: (o) => !!uzakBul(o, VIDEO) && !uzakGecmisteYol(o, VIDEO, "tanitim.mp4") },
          { aciklama: "v1.0 etiketi ve index.html GitHub'da duruyor", denetle: (o) => { const u = uzakBul(o, VIDEO); return !!u?.refs["refs/tags/v1.0"] && !!u.refs["refs/heads/main"] && "index.html" in commitAgaci(u, u.refs["refs/heads/main"]!); } },
        ],
      },
      dene: ["gt-u18-filter-repo-ne", "gt-u18-invert-paths", "gt-u18-origin-kalkar"],
    },
    {
      baslik: "Büyük depolar",
      metin: md(`
Depo büyüdükçe clone, ~status~ ve ~checkout~ yavaşlar. Git'in üç aracı farklı şeyleri kırpar:

| Araç | Ne gelir | Bedeli |
|---|---|---|
| ~git clone --depth 1~ (sığ) | Yalnızca son commit ve dosyaları | ~log~, ~blame~ eksik; ~fetch --unshallow~ tamamlar |
| ~git clone --filter=blob:none~ (kısmi) | Bütün commit ve tree'ler, dosya içerikleri gerektikçe | Eski dosyayı açınca sunucudan indirme |
| ~git sparse-checkout set <klasör>~ | Çalışma dizinine yalnızca seçilen klasörler | Öteki klasörleri göremezsin |

Sığ clone CI'da derleme için idealdir: geçmişe ihtiyaç yoktur. Kısmi clone geliştirici için iyi bir dengedir: geçmiş tamdır ama büyük dosyalar yalnızca açılınca iner. **Monorepo**'da (birçok uygulamanın tek depoda durduğu yapı) kısmi clone ile sparse-checkout birlikte kullanılır.

[[G-H18-02]]

Bu araçlar yalnızca belirtileri hafifletir. Geçmişe büyük ikili dosyalar girmişse kalıcı çözüm onları filter-repo ile çıkarmak ve bundan sonrasını Git LFS'e (16. ünite) almaktır.
`),
      dene: ["gt-u18-shallow", "gt-u18-partial", "gt-u18-sparse"],
    },
    {
      baslik: "Performans ve bakım",
      metin: md(`
Büyük bir depoda günlük komutları hızlı tutan ayarlar:

- **~git maintenance start~** commit-graph yazma, arka planda fetch ve paketleme gibi görevleri işletim sisteminin zamanlayıcısıyla düzenli çalıştırır.
- **~core.fsmonitor~** bir arka plan sürecinin değişen dosyaları izlemesini sağlar; ~git status~ bütün dosyaları taramak yerine yalnızca onlara bakar.
- **~core.untrackedCache~** izlenmeyen dosyaların taranmasını önbelleğe alır.
- **commit-graph** dosyası ~log --graph~ ve ata aramalarını hızlandırır.

Elle bakım genellikle gerekmez; ~git gc~ Git tarafından ~--auto~ ile çalıştırılır. Ama bir depo "ağır" geliyorsa sırayla bak: geçmişte büyük dosya var mı (filter-repo), clone'u daraltabilir miyim (kısmi clone, sparse-checkout), günlük komutlar mı yavaş (maintenance, fsmonitor).

Bu ünite ile yolun sonuna geldin. Sandbox'taki **Kademe 5** görevleri, öğrendiklerini gerçek felaketlerde dener.
`),
      dene: ["gt-u18-maintenance", "gt-u18-buyuk-dosya-neden"],
    },
  ],
  test: [
    "gt-u18-dal-reflog", "gt-u18-reflog-komut", "gt-u18-no-reflogs", "gt-u18-dangling-blob", "gt-u18-commitlenmemis", "gt-u18-force-push-kurtar", "gt-u18-gc-sonrasi", "gt-u18-gc-komut", "gt-u18-filter-branch", "gt-u18-sonrasi", "gt-u18-monorepo", "gt-u18-fsmonitor",
  ],
};
