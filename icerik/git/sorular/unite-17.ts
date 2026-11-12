// 17. ünite (Usta): Git'in içi. Dört nesne türü, içerikle adreslenen depolama ve SHA,
// .git klasörü, ref'ler, plumbing komutları, packfile ve bir değişikliğin hangi
// nesneleri yenilediği.
import { sorular, type Soru } from "./yardimci.ts";

const U = 17;

export const unite17: Soru[] = [
  ...sorular(U, "u17-nesneler", [
    {
      ad: "dort-tur",
      soru: "Git'in nesne veritabanındaki dört nesne türü hangileridir?",
      secenekler: ["blob, tree, commit, tag", "file, folder, commit, branch", "blob, branch, commit, remote", "diff, tree, commit, tag"],
      aciklama: "Git'in deposu dört tür nesneden oluşur: dosya içeriği (blob), klasör listesi (tree), anlık görüntü ve geçmiş bağı (commit) ve açıklamalı etiket (tag). Dal ve uzak depo nesne değil, ref'tir.",
    },
    {
      ad: "blob-ad",
      soru: "Bir blob nesnesi dosyanın hangi bilgisini saklar?",
      secenekler: ["Yalnızca içeriğini", "İçeriğini ve adını", "Adını ve iznini", "İçeriğini ve son değişim tarihini"],
      aciklama: "Blob yalnızca içeriktir. Dosyanın adı ve modu onu gösteren tree girdisindedir; bu yüzden aynı içerikli iki dosya tek blob'u paylaşır.",
    },
    {
      ad: "tree-icerik",
      soru: "Bir tree nesnesinin her satırında ne bulunur?",
      secenekler: ["Mod, tür, kimlik ve ad", "Yalnızca dosya adları", "Dosyaların tam içerikleri", "Son commit'in mesajı"],
      aciklama: "~git ls-tree~ çıktısındaki gibi: ~100644 blob <kimlik> README.md~ ya da ~040000 tree <kimlik> src~. Alt klasörler başka tree'lerdir.",
    },
    {
      ad: "commit-icerik",
      soru: "Bir commit nesnesinde hangisi yer almaz?",
      secenekler: ["Dalın adı", "Kök tree'nin kimliği", "Ebeveyn commit'lerin kimlikleri", "Yazar ve işleyen bilgisi"],
      aciklama: "~git cat-file -p HEAD~ commit'in içini gösterir: tree, parent, author, committer ve mesaj. Hangi dalda atıldığı yazılmaz; dal yalnızca commit'i gösteren bir ref'tir.",
    },
    {
      ad: "tag-nesne",
      dy: true,
      soru: "Açıklamalı etiket (~git tag -a~) kendi nesnesini yazar; hafif etiket ise yalnızca commit'i gösteren bir ref'tir.",
      aciklama: "Doğru. Açıklamalı etiketin yazarı, tarihi ve mesajı olan bir tag nesnesi vardır; hafif etiket ~refs/tags/~ altında doğrudan commit kimliğini tutar.",
    },
  ]),
  ...sorular(U, "u17-sha", [
    {
      ad: "icerik-adres",
      soru: "Git'e \"içerikle adreslenen\" (content-addressable) depolama denmesinin nedeni nedir?",
      secenekler: ["Nesnenin adı içeriğinin özetidir", "Dosyalar içeriğe göre sıralanır", "Arama içerikte yapılır", "Aynı ad iki içeriğe verilebilir"],
      aciklama: "Her nesnenin kimliği, türü ve boyutuyla birlikte içeriğinin SHA özetidir. Aynı içerik her bilgisayarda aynı kimliği verir; içerik değişirse kimlik de değişir.",
    },
    {
      ad: "ayni-icerik",
      dy: true,
      soru: "Farklı iki bilgisayarda aynı içerikli bir dosyayı ~git hash-object~ ile özetlersen aynı kimliği alırsın.",
      aciklama: "Doğru. Blob'un kimliği yalnızca ~blob <boyut>\\0<içerik>~ baytlarından hesaplanır; ad, tarih ya da bilgisayar katılmaz.",
    },
    {
      ad: "commit-kimlik-degisir",
      zorluk: 2,
      soru: "İçeriği aynı iki commit'in kimliği neden farklı olabilir?",
      secenekler: ["Tarih, yazar ya da ebeveyn farklıdır", "Git kimliği rastgele üretir", "Dal adları farklıdır", "Biri push edilmiştir"],
      aciklama: "Commit nesnesinde tree'nin yanında ebeveyn, yazar, işleyen, iki zaman damgası ve mesaj da vardır. Bunlardan biri değişince özet değişir; rebase ve cherry-pick bu yüzden yeni kimlik üretir.",
    },
    {
      ad: "hash-object-komut",
      soru: "~not.txt~ dosyasının blob kimliğini (depoya yazmadan) hesaplayan komutu yaz.",
      cevap: ["git hash-object not.txt"],
      aciklama: "~git hash-object not.txt~ yalnızca kimliği hesaplar. ~-w~ eklenirse nesne depoya da yazılır.",
    },
    {
      ad: "sha256",
      zorluk: 2,
      soru: "Git'in SHA-1'den SHA-256'ya geçiş çalışmasının nedeni nedir?",
      secenekler: ["SHA-1'e çakışma saldırısı gösterildi", "SHA-1 kimlikleri yetmedi", "SHA-256 daha kısa kimlik verir", "GitHub SHA-1'i yasakladı"],
      aciklama: "2017'de aynı SHA-1 özetine sahip iki farklı PDF üretildi. Git bu saldırıya karşı sertleştirilmiş bir SHA-1 kullanır ve ~--object-format=sha256~ ile SHA-256 depolarını da destekler; ama yaygın platformlar hâlâ SHA-1 depolarıyla çalışır.",
    },
  ]),
  ...sorular(U, "u17-git-klasoru", [
    {
      ad: "objects",
      soru: "~.git/objects~ klasöründe ne saklanır?",
      secenekler: ["Bütün nesneler: blob, tree, commit, tag", "Yalnızca dalların listesi", "Çalışma dizininin yedeği", "Uzak depoların adresleri"],
      aciklama: "Gevşek (loose) nesneler kimliğin ilk iki karakteriyle adlandırılan klasörlerde, sıkıştırılmış olanlar ~objects/pack~ altında durur.",
    },
    {
      ad: "head-dosyasi",
      soru: "Bir dalda çalışırken ~.git/HEAD~ dosyasının içinde ne yazar?",
      secenekler: ["ref: refs/heads/main", "Son commit'in mesajı", "Bütün dalların kimlikleri", "Uzak deponun adresi"],
      aciklama: "HEAD normalde sembolik bir ref'tir: ~ref: refs/heads/main~. Kopuk HEAD'de dosyada doğrudan bir commit kimliği yazar.",
    },
    {
      ad: "config-yeri",
      soru: "Yalnızca o depoya özgü ~git config~ ayarları (ör. ~remote.origin.url~) nerede saklanır?",
      secenekler: [".git/config", "¬/.gitconfig", ".gitignore", ".git/HEAD"],
      aciklama: "Depo ayarları ~.git/config~'te, kullanıcı ayarları ~¬/.gitconfig~'te (~--global~) durur.",
    },
    {
      ad: "git-sil",
      senaryo: true,
      soru: "Bir arkadaşın yer açmak için projedeki gizli ~.git~ klasörünü sildi; dosyalar yerinde. Ne olur?",
      secenekler: ["Bütün geçmiş, dallar ve ayarlar gider", "Yalnızca dallar gider, commit'ler kalır", "Git klasörü bir sonraki komutta yeniden kurar", "Hiçbir şey olmaz, geçmiş GitHub'dadır"],
      aciklama: "Deponun kendisi ~.git~'tir: nesneler, ref'ler, reflog ve ayarlar oradadır. Push edilmemiş her şey kaybolur; push edilmişler ancak uzak depodan yeniden clone edilerek geri gelir.",
    },
  ]),
  ...sorular(U, "u17-refs", [
    {
      ad: "dal-dosya",
      soru: "Git'te bir dal, iç yapıda aslında nedir?",
      secenekler: ["Bir commit kimliği tutan küçük bir ref", "Commit'lerin kopyalandığı bir klasör", "Ayrı bir nesne türü", "Bir tree nesnesi"],
      aciklama: "~refs/heads/main~ içinde 40 karakterlik bir commit kimliği yazar (ya da ~packed-refs~ dosyasında bir satırdır). Dal açmak bu kadar ucuz olduğu için Git'te dallar hafiftir.",
    },
    {
      ad: "update-ref-komut",
      zorluk: 2,
      soru: "Porselen komut kullanmadan, ~refs/heads/yedek~ ref'ini HEAD'in gösterdiği commit'e yazan plumbing komutunu yaz.",
      cevap: ["git update-ref refs/heads/yedek HEAD"],
      aciklama: "~git update-ref refs/heads/yedek HEAD~ dalı açar; ~git branch yedek~ aynı işi kurallara bakarak yapan porselen komuttur.",
    },
    {
      ad: "update-ref-eski",
      zorluk: 3,
      soru: "~git update-ref refs/heads/main <yeni> <eski>~ komutundaki üçüncü değer ne işe yarar?",
      secenekler: ["Ref şu an oradaysa günceller", "Eski commit'i siler", "Reflog'a mesaj yazar", "Eski commit'e etiket koyar"],
      aciklama: "Üçüncü değer bir güvenlik denetimidir: ref başka bir commit'teyse ~cannot lock ref ... is at ... but expected ...~ hatasıyla durur. ~--force-with-lease~ de aynı mantıkla çalışır.",
    },
    {
      ad: "symbolic-ref",
      soru: "HEAD'in hangi dalı gösterdiğini (~refs/heads/...~ biçiminde) yazdıran plumbing komutunu yaz.",
      cevap: ["git symbolic-ref HEAD"],
      aciklama: "~git symbolic-ref HEAD~ ~refs/heads/main~ gibi bir ad yazar; HEAD kopuksa ~fatal: ref HEAD is not a symbolic ref~ der.",
    },
    {
      ad: "packed-refs",
      dy: false,
      soru: "Her dal ve etiket her zaman ~.git/refs~ altında ayrı bir dosyadır.",
      aciklama: "Yanlış. Çok sayıda ref ~git gc~ ya da ~git pack-refs~ ile ~.git/packed-refs~ dosyasında toplanabilir. Bu yüzden ref'leri dosya okuyarak değil ~git show-ref~ ya da ~git for-each-ref~ ile listelemek gerekir.",
    },
  ]),
  ...sorular(U, "u17-plumbing", [
    {
      ad: "porselen-tesisat",
      soru: "Git'te \"plumbing\" ve \"porcelain\" komutlarının farkı nedir?",
      secenekler: ["Plumbing yapı taşı, porcelain günlük araç", "Plumbing yalnızca sunucu tarafında çalışır", "Porcelain eski sürüm, plumbing yeni sürüm", "Plumbing komutları yalnızca Windows'ta var"],
      aciklama: "~cat-file~, ~hash-object~, ~update-ref~, ~ls-tree~ gibi plumbing komutları kararlı, betiklere uygun çıktılar verir. ~commit~, ~switch~, ~merge~ gibi porcelain komutlar bunları birleştirip insana uygun hâle getirir.",
    },
    {
      ad: "cat-file-t",
      soru: "Bir nesnenin türünü (blob, tree, commit, tag) yazdıran komut hangisidir?",
      secenekler: ["git cat-file -t <kimlik>", "git cat-file -p <kimlik>", "git show-ref <kimlik>", "git ls-files <kimlik>"],
      aciklama: "~-t~ türü, ~-s~ boyutu, ~-p~ içeriği okunur biçimde yazar. ~-e~ yalnızca nesnenin var olup olmadığını çıkış koduyla söyler.",
    },
    {
      ad: "cat-file-p",
      soru: "HEAD commit'inin içini (tree, parent, author, mesaj) okunur biçimde gösteren komutu yaz.",
      cevap: ["git cat-file -p HEAD"],
      aciklama: "~git cat-file -p HEAD~. Çıktıdaki tree kimliğini yine ~cat-file -p~ ile açarak klasöre, oradan blob'a inebilirsin.",
    },
    {
      ad: "ls-tree-r",
      zorluk: 2,
      soru: "~git ls-tree -r HEAD~ ne gösterir?",
      secenekler: ["HEAD'deki bütün dosyaları ve blob'larını", "HEAD'in bütün ebeveynlerini", "Yalnızca kök klasördeki dosyaları", "Çalışma dizinindeki değişiklikleri"],
      aciklama: "~-r~ alt tree'lere iner ve her dosyayı tam yoluyla, blob kimliğiyle listeler. ~-r~ olmadan yalnızca kök tree'nin satırları gelir.",
    },
    {
      ad: "hash-object-w",
      zorluk: 2,
      senaryo: true,
      soru: "~git hash-object -w not.txt~ çalıştırdın, ama ~git status~ hiçbir değişiklik göstermiyor. Neden?",
      secenekler: ["Blob yazıldı ama index'e bağlanmadı", "Komut sessizce başarısız oldu", "not.txt dosyası .gitignore'da", "hash-object yalnızca uzak depoya yazar"],
      aciklama: "~-w~ nesneyi veritabanına yazar, o kadar. Onu bir dosya adıyla index'e koymak ~git update-index~'in, commit'e bağlamak ~write-tree~ ve ~commit-tree~'nin işidir; ~git add~ ve ~git commit~ bunları senin yerine yapar.",
    },
  ]),
  ...sorular(U, "u17-packfile", [
    {
      ad: "pack-neden",
      soru: "Packfile'ın amacı nedir?",
      secenekler: ["Nesneleri sıkıştırıp farklarıyla saklamak", "Bütün dalları tek dosyada tutmak", "Push sırasında veriyi şifrelemek", "Çözülen çakışmaları kaydetmek"],
      aciklama: "Git her sürümü tam anlık görüntü olarak yazar, ama packfile'da benzer nesneleri birbirinin farkı (delta) olarak sıkıştırır. Ağdan gelen nesneler de packfile olarak taşınır.",
    },
    {
      ad: "snapshot-delta",
      zorluk: 2,
      dy: false,
      soru: "Git her commit'te yalnızca değişen satırları (farkı) saklar; anlık görüntü yoktur.",
      aciklama: "Yanlış. Mantıksal model anlık görüntüdür: her commit bütün ağacı gösterir, değişmeyen dosyalar aynı blob'u paylaşır. Delta sıkıştırma yalnızca packfile'daki bir depolama ayrıntısıdır.",
    },
    {
      ad: "gc-ne",
      soru: "~git gc~ ne yapar?",
      secenekler: ["Nesneleri paketler, gereksizleri temizler", "Bütün dalları main'e birleştirir", "Uzak depoyu yerelle eşitler", "Hatalı commit mesajlarını düzeltir"],
      aciklama: "~git gc~ gevşek nesneleri packfile'a toplar, ref'leri ~packed-refs~'e alır ve süresi dolmuş erişilemeyen nesneleri siler. Git bunu belli aralıklarla kendisi de çalıştırır (~gc --auto~).",
    },
  ]),
  ...sorular(U, "u17-degisim", [
    {
      ad: "tek-harf",
      zorluk: 2,
      soru: "~src/app.js~ dosyasında tek harf değiştirip commit attın. Depoda hangi yeni nesneler oluşur?",
      secenekler: ["Yeni blob, src ve kök tree, yeni commit", "Yalnızca yeni bir commit", "Yalnızca yeni bir blob", "Bütün dosyalar için yeni blob'lar"],
      aciklama: "Değişen dosyanın blob'u yenilenir; onu içeren ~src~ tree'si ve kök tree yeni kimlik alır; yeni commit bu kök tree'yi gösterir. Değişmeyen dosyaların blob'ları ve öteki klasörlerin tree'leri olduğu gibi paylaşılır.",
    },
    {
      ad: "yeniden-adlandir",
      zorluk: 3,
      soru: "İçeriğine dokunmadan ~eski.txt~'yi ~yeni.txt~ olarak yeniden adlandırıp commit attın. Yeni bir blob oluşur mu?",
      secenekler: ["Hayır; blob aynı, yalnızca tree değişir", "Evet; ad değişince blob da değişir", "Evet; Git her commit'te blob yazar", "Hayır; commit de oluşmaz"],
      aciklama: "Ad blob'da değil tree'de durur. İçerik aynı kaldığı için blob kimliği de aynıdır; yalnızca tree ve commit yenilenir. Git yeniden adlandırmayı ayrıca kaydetmez, farkta benzerlikten çıkarır.",
    },
    {
      ad: "geri-donus",
      zorluk: 2,
      dy: true,
      soru: "Bir dosyayı değiştirip commit'ledikten sonra eski hâline döndürüp yeniden commit'lersen, son commit'teki blob ilk sürümdeki blob'un aynısıdır.",
      aciklama: "Doğru. İçerik aynıysa kimlik aynıdır; Git aynı nesneyi ikinci kez saklamaz.",
    },
  ]),
];
