import { md, type Ders } from "../../../../src/dersler/tipler";
import type { Ortam } from "../../../../src/gitsim/tipler";

const KUCUK_DEPO = [
  "git init",
  'echo "# Kafe Mavi" > README.md',
  "mkdir src",
  'echo "console.log(1)" > src/app.js',
  'echo "body {}" > src/stil.css',
  "git add .",
  'git commit -m "İlk sürüm"',
  'echo "console.log(2)" > src/app.js',
  'git commit -am "app.js değişti"',
];

const ref = (o: Ortam, r: string) => o.depo?.refs[r] ?? null;

export const UNITE_17: Ders = {
  hafta: 17,
  baslik: "Git'in İçi",
  ozet: "Komutların altında küçük ve şaşırtıcı derecede sade bir yapı var: dört tür nesne, içeriğinden türeyen kimlikler ve commit'leri gösteren ref'ler. Bunu bilen biri Git'in hiçbir davranışına şaşırmaz.",
  bolumler: [
    {
      baslik: "Depo bir nesne veritabanıdır",
      metin: md(`
~.git~ klasörünün kalbi bir **nesne veritabanıdır**. İçinde dört tür nesne vardır:

| Nesne | Ne saklar |
|---|---|
| **blob** | Bir dosyanın içeriği. Adı yoktur. |
| **tree** | Bir klasör: her satırda mod, tür, kimlik ve ad |
| **commit** | Kök tree, ebeveyn(ler), yazar, işleyen, mesaj |
| **tag** | Açıklamalı etiket: gösterdiği nesne, etiketleyen, mesaj |

Bir commit bütün projenin **anlık görüntüsünü** bir kök tree üzerinden gösterir. Tree'ler alt klasörleri (başka tree'leri) ve dosyaları (blob'ları) gösterir. Dal ise nesne değildir; bir commit'i gösteren küçük bir **ref**'tir.

Aşağıda gerçek bir depo var. Bir commit'e tıkla, tree'sine, oradan blob'a in. Sonra bir dosyada tek harf değiştirip hangi nesnelerin yenilendiğine bak:

[[G-H17-01]]

Aynı yürüyüşü terminalde de yapabilirsin. ~git cat-file -p HEAD~ commit'in içini, ~HEAD^{tree}~ ise onun kök tree'sini açar.
`),
      git: {
        kurulum: KUCUK_DEPO,
        alanlar: false,
        gorev: "~git cat-file -p HEAD~ ile commit'i aç. Çıktıdaki tree kimliğini ~git cat-file -p <kimlik>~ ile aç, ~src~ satırındaki tree'ye in, ~app.js~'in blob'unu oku. ~git cat-file -t~ türü söyler.",
        oneriler: ["git cat-file -p HEAD", "git cat-file -p HEAD^{tree}", "git cat-file -p HEAD:src", "git cat-file -p HEAD:src/app.js", "git cat-file -t HEAD"],
      },
      dene: ["gt-u17-dort-tur", "gt-u17-blob-ad", "gt-u17-commit-icerik"],
    },
    {
      baslik: "Kimlik içerikten gelir",
      metin: md(`
Bir nesnenin kimliği, içeriğinin **SHA-1 özetidir**. Blob için özetlenen bayt dizisi şudur:

~~~
blob <bayt sayısı>\\0<içerik>
~~~

Bu yüzden Git'e **içerikle adreslenen** (content-addressable) depolama denir: aynı içerik her bilgisayarda aynı kimliği verir, tek bir bit değişirse kimlik tamamen değişir. Kendin dene:

[[G-H17-02]]

Terminalde bir dosyanın blob kimliğini ~git hash-object~ hesaplar:

~~~
git hash-object not.txt
git hash-object -w not.txt     # nesneyi depoya da yazar
~~~

Commit'in kimliği de aynı yolla hesaplanır, ama içinde tree'nin yanında ebeveyn, yazar, iki zaman damgası ve mesaj vardır. Rebase ve cherry-pick'in **yeni kimlik** üretmesinin nedeni budur: içerik aynı kalsa bile ebeveyn ya da zaman değişir.

Kimlikler ayrıca **bütünlük** sağlar: bir commit'in kimliği bütün geçmişini (ebeveynler zinciriyle) kapsar. Geçmişte tek bir dosyayı sessizce değiştirmek, sonraki her commit'in kimliğini değiştirmeden mümkün değildir.

SHA-1'e 2017'de çakışma saldırısı gösterildi (aynı özetli iki farklı dosya). Git saldırıya karşı sertleştirilmiş bir SHA-1 kullanır ve ~--object-format=sha256~ ile SHA-256 depolarını da destekler; yaygın platformlar şimdilik SHA-1 depolarıyla çalışır.

Terminalde bir not dosyası var. Blob kimliğini hesapla, sonra depoya yaz ve ~git cat-file~ ile oku.
`),
      git: {
        kurulum: ["git init", 'echo "Kasa 18:00de kapanır" > not.txt'],
        alanlar: false,
        gorev: "~git hash-object not.txt~ kimliği yazar ama depoya dokunmaz. ~-w~ ile yaz, sonra kimliğin ilk birkaç karakteriyle ~git cat-file -p~ ve ~-t~ dene.",
        oneriler: ["git hash-object not.txt", "git hash-object -w not.txt", "git cat-file -t d856", "git cat-file -p d856", "git status"],
        hedefler: [
          {
            aciklama: "not.txt'nin blob'u nesne veritabanında",
            denetle: (o) => !!o.depo && Object.values(o.depo.nesneler).some((n) => n.tur === "blob" && n.icerik === o.dosyalar["not.txt"]),
          },
        ],
      },
      dene: ["gt-u17-icerik-adres", "gt-u17-ayni-icerik", "gt-u17-commit-kimlik-degisir"],
    },
    {
      baslik: ".git klasörünün içi",
      metin: md(`
~git init~'in açtığı klasörde şunlar bulunur:

~~~
.git/
  HEAD          ref: refs/heads/main
  config        bu deponun ayarları (remote.origin.url ...)
  objects/      nesneler: 3b/18e512... gibi gevşek dosyalar ve pack/
  refs/heads/   dallar
  refs/tags/    etiketler
  refs/remotes/ uzak izleme dalları (origin/main)
  logs/         reflog'lar
  index         hazırlık alanı (ikili bir dosya)
  hooks/        kancalar
~~~

Gevşek bir nesne, kimliğinin ilk iki karakteriyle adlandırılan klasörde, kalanıyla adlandırılan sıkıştırılmış (zlib) bir dosyadır. ~HEAD~ normalde bir dalı gösteren tek satırlık bir dosyadır; kopuk HEAD'de içinde doğrudan bir commit kimliği yazar.

Deponun kendisi bu klasördür. Silinirse geçmiş, dallar, reflog ve ayarlar gider; çalışma dizinindeki dosyalar yalnızca son hâlin bir kopyasıdır. Depo ayarları ~.git/config~'te, kullanıcı ayarları ~¬/.gitconfig~'te durur.

Bu dosyaları elle düzenlemek yerine onları güvenle okuyup yazan komutlar kullanılır: sıradaki bölümün konusu.
`),
      dene: ["gt-u17-objects", "gt-u17-head-dosyasi", "gt-u17-git-sil"],
    },
    {
      baslik: "Ref'ler: dal dediğin bir satır",
      metin: md(`
**Ref**, bir nesne kimliğine verilmiş addır. ~refs/heads/main~ içinde 40 karakterlik bir commit kimliği yazar; dal açmak bu kadar ucuzdur. Ref'leri listelemek için:

~~~
git show-ref
~~~

Çok sayıda ref ~git gc~ ile ~.git/packed-refs~ dosyasında toplanabilir; bu yüzden ref'ler dosya okunarak değil komutla okunur.

**update-ref** bir ref'i doğrudan yazar. ~git branch~ ve ~git reset~'in yaptığının özü budur:

~~~
git update-ref refs/heads/yedek HEAD
git update-ref refs/heads/main a1b2c3d 9f8e7d6   # main 9f8e7d6'daysa a1b2c3d'ye taşı
git update-ref -d refs/heads/yedek
~~~

Üçüncü değer bir güvenlik denetimidir: ref beklenen yerde değilse ~cannot lock ref ... is at ... but expected ...~ hatasıyla durur. ~--force-with-lease~ aynı mantığın push'taki karşılığıdır.

**HEAD** ise sembolik bir ref'tir: bir kimliği değil, başka bir ref'in adını tutar. ~git symbolic-ref HEAD~ hangi dalda olduğunu ~refs/heads/main~ biçiminde yazar.

Terminalde hiç porselen komut kullanmadan bir yedek dalı aç ve ~deneme~ dalını bir önceki commit'e taşı.
`),
      git: {
        kurulum: [...KUCUK_DEPO, "git branch deneme"],
        gorev: "~git update-ref refs/heads/yedek HEAD~ ile yedeği aç. ~deneme~'yi ~HEAD¬1~'e ~update-ref~ ile taşı. ~git symbolic-ref HEAD~ ve ~git show-ref~ ile bak.",
        oneriler: ["git show-ref", "git update-ref refs/heads/yedek HEAD", "git update-ref refs/heads/deneme HEAD~1", "git symbolic-ref HEAD", "git show-ref"],
        hedefler: [
          { aciklama: "yedek dalı HEAD'deki commit'i gösteriyor", denetle: (o) => !!ref(o, "refs/heads/yedek") && ref(o, "refs/heads/yedek") === ref(o, "refs/heads/main") },
          {
            aciklama: "deneme bir önceki commit'te",
            denetle: (o) => {
              const m = ref(o, "refs/heads/main");
              const n = m ? o.depo!.nesneler[m] : null;
              return n?.tur === "commit" && ref(o, "refs/heads/deneme") === n.ebeveynler[0];
            },
          },
        ],
      },
      dene: ["gt-u17-dal-dosya", "gt-u17-update-ref-komut", "gt-u17-symbolic-ref"],
    },
    {
      baslik: "Plumbing ve porcelain",
      metin: md(`
Git'in komutları iki katmandır. **Porcelain** (porselen) günlük kullanılan, insana göre tasarlanmış komutlardır: ~add~, ~commit~, ~switch~, ~merge~. **Plumbing** (tesisat) bunların altındaki yapı taşlarıdır: çıktıları kararlıdır, betiklere uygundur.

| Plumbing | Ne yapar |
|---|---|
| ~cat-file -t / -s / -p~ | Nesnenin türü, boyutu, içeriği |
| ~hash-object [-w]~ | İçerikten blob kimliği (ve yazma) |
| ~ls-tree [-r]~ | Bir tree'nin satırları |
| ~ls-files -s~ | Index'teki dosyalar ve blob'ları |
| ~update-ref~, ~symbolic-ref~ | Ref yazmak |
| ~rev-parse~ | Bir ifadeyi (HEAD¬2, main^{tree}) kimliğe çevirmek |

Bir commit'in porselen karşılığı aslında üç tesisat adımıdır: index'i tree olarak yaz (~write-tree~), o tree'yle commit nesnesi oluştur (~commit-tree~), dalı yeni commit'e taşı (~update-ref~). ~git add~ de ~hash-object -w~ ile ~update-index~'in birleşimidir.

~git ls-tree -r HEAD~ bir commit'teki bütün dosyaları blob kimlikleriyle listeler. İki commit'te aynı kimliği taşıyan dosyalar değişmemiştir; Git'in farkları hızlı bulmasının sırrı budur.

Terminalde iki commit'lik bir depo var. Hangi dosyanın değiştiğini ~diff~ kullanmadan, yalnızca blob kimliklerine bakarak bul.
`),
      git: {
        kurulum: KUCUK_DEPO,
        alanlar: false,
        gorev: "~git ls-tree -r HEAD¬1~ ve ~git ls-tree -r HEAD~ çıktılarındaki blob kimliklerini karşılaştır. Değişen dosyanın iki sürümünü ~cat-file -p~ ile oku.",
        oneriler: ["git ls-tree -r HEAD~1", "git ls-tree -r HEAD", "git cat-file -p HEAD~1:src/app.js", "git cat-file -p HEAD:src/app.js", "git ls-files -s"],
      },
      dene: ["gt-u17-porselen-tesisat", "gt-u17-cat-file-t", "gt-u17-ls-tree-r"],
    },
    {
      baslik: "Packfile, delta ve gc",
      metin: md(`
Git **mantıksal olarak** her commit'te bütün ağacı saklar; değişmeyen dosyalar aynı blob'u paylaştığı için bu ucuzdur. Ama bir dosyanın her küçük değişikliği yeni, tam bir blob demektir.

Bunu **packfile** çözer: Git nesneleri bir pakette toplar ve benzer nesneleri birbirinin **farkı (delta)** olarak sıkıştırır. Ağdan gelen nesneler (clone, fetch, push) de paket olarak taşınır. "Git farkları saklar" sözü bu yüzden yarı doğrudur: model anlık görüntüdür, delta yalnızca depolama ayrıntısıdır.

~git gc~ (garbage collection, çöp toplama) bakımı yapar:

- gevşek nesneleri paketler,
- ref'leri ~packed-refs~'e alır,
- süresi dolmuş, hiçbir yerden ulaşılamayan nesneleri siler (bir sonraki ünitenin konusu).

Git bunu belli eşiklerde ~git gc --auto~ ile kendisi çalıştırır; elle çağırmak nadiren gerekir.
`),
      dene: ["gt-u17-pack-neden", "gt-u17-snapshot-delta"],
    },
    {
      baslik: "Bir harf değişince ne olur?",
      metin: md(`
Şimdi parçaları birleştir. ~src/app.js~'te tek harf değiştirip commit atınca:

1. Yeni içerik için **yeni bir blob** yazılır.
2. ~src~ klasörünün tree'si o blob'u gösterdiği için **yeni bir tree** olur.
3. Kök tree ~src~'yi gösterdiği için o da **yenilenir**.
4. **Yeni commit** bu kök tree'yi ve eski commit'i (ebeveyn) gösterir.
5. Dal ref'i yeni commit'e taşınır.

~README.md~'nin blob'u ve öteki klasörlerin tree'leri **olduğu gibi paylaşılır**. Bin dosyalı bir projede bir dosya değişince yalnızca birkaç nesne eklenir.

Birkaç sonuç:

- Dosyayı yeniden adlandırmak yeni blob üretmez; ad tree'dedir.
- Bir dosyayı eski hâline döndürmek eski blob'u yeniden kullanır.
- Git yeniden adlandırmayı ayrıca kaydetmez; ~git log --follow~ ve ~diff~ bunu benzerlikten çıkarır.

Başa dönüp nesne gezgininde bir dosyayı değiştirerek bu listeyi kendin doğrula.
`),
      dene: ["gt-u17-tek-harf", "gt-u17-yeniden-adlandir"],
    },
  ],
  test: [
    "gt-u17-tree-icerik", "gt-u17-tag-nesne", "gt-u17-hash-object-komut", "gt-u17-sha256", "gt-u17-config-yeri", "gt-u17-update-ref-eski", "gt-u17-packed-refs", "gt-u17-cat-file-p", "gt-u17-hash-object-w", "gt-u17-gc-ne", "gt-u17-geri-donus",
  ],
};
