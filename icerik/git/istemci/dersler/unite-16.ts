import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitAgaci, icerik } from "../../../../src/gitsim/depo";
import type { Ortam } from "../../../../src/gitsim/tipler";

// Bir dalın son commit'inde dosya
function dalda(o: Ortam, dal: string, yol: string): string | null {
  const d = o.depo;
  const h = d?.refs[`refs/heads/${dal}`];
  const b = d && h ? commitAgaci(d, h)[yol] : undefined;
  return d && b ? icerik(d, b) : null;
}

const KOMUTLAR = [
  "Çarpma eklendi", "Bölme eklendi", "Testler", "README güncellendi", "Yuvarlama", "Kayıt tutma", "Tema", "Sürüm notu",
  "Kodu düzenle", "Karekök", "Yüzde", "Geçmiş ekranı", "Klavye kısayolları", "Hata iletileri", "Sürüm 2.0",
];

// 16 commit'lik hesap makinesi geçmişi; 10. commit'te toplama çıkarmaya döner
export const BISECT_KURULUM = [
  "git init",
  'echo "function topla(a, b) { return a + b; }" > hesap.js',
  'echo "# Hesap" > README.md',
  "git add .",
  'git commit -m "Hesap makinesi"',
  "git tag v1.0",
  ...Array.from({ length: 15 }, (_, i) => {
    const n = i + 2;
    const satirlar = [`echo "surum ${n}" > surum.txt`];
    if (n === 10) satirlar.push('echo "function topla(a, b) { return a - b; }" > hesap.js');
    return [...satirlar, "git add .", `git commit -m "${KOMUTLAR[i]!}"`];
  }).flat(),
];

// Hatanın bulunacağı commit'in mesajı
export const BISECT_HATALI = "Kodu düzenle";

export const UNITE_16: Ders = {
  hafta: 16,
  baslik: "İleri Araçlar",
  ozet: "Her gün kullanılmayan ama gerektiğinde saatler kazandıran araçlar: tek commit'i başka dala taşıyan cherry-pick, hatayı ikili aramayla bulan bisect, satırın geçmişini gösteren blame, ikinci çalışma klasörü, depo içinde depo, hook'lar, büyük dosyalar ve imzalı commit'ler.",
  bolumler: [
    {
      baslik: "cherry-pick: tek commit'i taşımak",
      metin: md(`
Bazen bir dalın bütününü değil, **tek bir commit'ini** istersin. ~git cherry-pick <commit>~ o commit'in getirdiği farkı alır ve bulunduğun dala yeni bir commit olarak uygular:

~~~
git switch release
git cherry-pick a1b2c3d
~~~

Yeni commit'in içeriği aynıdır ama ebeveyni ve zamanı farklı olduğu için **kimliği farklıdır**. ~-x~ seçeneği mesaja "(cherry picked from commit a1b2c3d)" satırını ekleyerek bağı belgeler. Çakışırsa merge'deki gibi çözersin, sonra ~git add~ ve ~git cherry-pick --continue~.

Ne zaman? Canlıdaki bir hatanın düzeltmesi yanlışlıkla yarım işlerle dolu bir dalda kaldıysa ya da bir düzeltmeyi eski bir sürüm dalına da uygulamak gerekiyorsa. Sık kullanmak bir akış sorununun işaretidir: aynı değişiklik farklı kimliklerle iki yerde durur.

Terminalde ~dev~'de üç commit var: ikisi yarım iş, ortadaki canlıdaki kahve fiyatını düzeltiyor. Yalnızca düzeltmeyi ~release~'e al.
`),
      git: {
        dosyalar: { "menu.txt": "kahve 4O\ncay 20\n" },
        kurulum: [
          "git init",
          "git add .",
          'git commit -m "Menü"',
          "git branch release",
          "git switch -c dev",
          'echo "export function ode() {}" > odeme.js',
          "git add .",
          'git commit -m "Ödeme (yarım)"',
          "printf 'kahve 40\\ncay 20\\n' > menu.txt",
          'git commit -am "Kahve fiyatındaki yazım hatası"',
          'echo "export function kampanya() {}" > kampanya.js',
          "git add .",
          'git commit -m "Kampanya (yarım)"',
        ],
        gorev: "~git log --oneline~ ile düzeltme commit'ini bul. ~release~'e geç ve ~git cherry-pick dev¬1~ ile yalnızca onu uygula.",
        oneriler: ["git log --oneline", "git switch release", "git cherry-pick dev~1", "git log --oneline"],
        hedefler: [
          { aciklama: "release'de kahve 40 düzeltilmiş", denetle: (o) => (dalda(o, "release", "menu.txt") ?? "").startsWith("kahve 40\n") },
          { aciklama: "release'e yarım işler gelmedi", denetle: (o) => dalda(o, "release", "menu.txt") !== null && dalda(o, "release", "odeme.js") === null && dalda(o, "release", "kampanya.js") === null },
        ],
      },
      dene: ["gt-u16-cp-ne", "gt-u16-cp-kimlik"],
    },
    {
      baslik: "bisect: hatayı ikili aramayla bulmak",
      metin: md(`
"Geçen ay çalışıyordu, şimdi çalışmıyor; arada 200 commit var." Tek tek denemek saatler sürer. **~git bisect~** geçmişi her adımda ikiye böler:

~~~
git bisect start
git bisect bad              # şu anki commit hatalı
git bisect good v1.0        # v1.0'da hata yoktu
~~~

Git ortadaki commit'i açar: "Bisecting: 7 revisions left to test after this (roughly 3 steps)". Dener, ~git bisect good~ ya da ~git bisect bad~ dersin. Her cevap aday sayısını yarıya indirir; 1000 commit yaklaşık 10 denemede biter. Sonunda Git "... is the first bad commit" der. ~git bisect reset~ başladığın dala döndürür.

Önce oyunda ikili aramanın gücünü gör: otuz iki commit içinde hatalıyı en az denemeyle bul.

[[G-H16-01]]

Sonra terminalde: hesap makinesinin ~topla~ fonksiyonu bir yerde çıkarmaya dönmüş. ~v1.0~ sağlam. Her adımda ~cat hesap.js~ ile bak: ~a + b~ ise good, ~a - b~ ise bad. Bulunca hatalı commit'e ~ilk-hata~ etiketini koy (~git tag ilk-hata refs/bisect/bad~) ve ~git bisect reset~.
`),
      git: {
        kurulum: BISECT_KURULUM,
        alanlar: false,
        gorev: "~git bisect start~, ~git bisect bad~, ~git bisect good v1.0~. Her adımda ~cat hesap.js~ ile bakıp good ya da bad de. Bulunca ~git tag ilk-hata refs/bisect/bad~ ve ~git bisect reset~.",
        oneriler: [
          "git bisect start",
          "git bisect bad",
          "git bisect good v1.0",
          "cat hesap.js",
          "git bisect good",
          "git bisect bad",
          "git bisect bad",
          "git bisect good",
          "git tag ilk-hata refs/bisect/bad",
          "git bisect reset",
        ],
        hedefler: [
          { aciklama: "ilk-hata etiketi hatayı getiren commit'te", denetle: (o) => { const d = o.depo; const h = d?.refs["refs/tags/ilk-hata"]; if (!d || !h) return false; const c = d.nesneler[h]; return c?.tur === "commit" && c.mesaj === `${BISECT_HATALI}\n`; } },
          { aciklama: "bisect bitti, main'e dönüldü", denetle: (o) => !!o.depo && !o.depo.bisect && o.depo.head.tur === "ref" && o.depo.head.ref === "refs/heads/main" },
        ],
      },
      dene: ["gt-u16-bisect-ne", "gt-u16-bisect-adim-sayisi"],
    },
    {
      baslik: "blame: bu satır neden böyle?",
      metin: md(`
~git blame <dosya>~ her satırın solunda o satırı **en son değiştiren** commit'i, yazarı ve tarihi gösterir:

~~~
^5c1e2a0 (Ayşe Yılmaz 2026-01-01 09:01:00 +0000 1) kahve 45
8b07d41f (Mert Can    2026-01-01 09:06:00 +0000 2) su 10
~~~

Başında ~^~ olan kimlik, geçmişin ilk commit'idir. Büyük dosyada yalnızca bir aralığa bakmak için:

~~~
git blame -L 10,20 menu.txt
~~~

Adına rağmen blame suçlu aramak için değil, **nedeni** bulmak için kullanılır: kimliği aldıktan sonra ~git show <commit>~ ile mesajını ve aynı commit'teki öteki değişiklikleri okursun. İyi commit mesajlarının değeri tam burada ortaya çıkar.

Bir sınırı var: blame satırı ilk yazanı değil, en son değiştireni gösterir. Satırdaki bir boşluk düzeltmesi bile sahipliği değiştirir; daha eskiye inmek için ~git blame <commit>^ -- dosya~ ile bir önceki duruma bakılır. GitHub ve GitLab'da dosya sayfasındaki **Blame** görünümü aynı bilgiyi verir.

Terminalde menüyü üç kişi düzenlemiş. Çayı menüden kimin, hangi commit'le kaldırdığını, suyun fiyatını kimin değiştirdiğini bul.
`),
      git: {
        kurulum: [
          "git init",
          "printf 'kahve 40\\ncay 20\\nsu 10\\n' > menu.txt",
          "git add .",
          'git commit -m "Menü"',
          "git config user.name 'Mert Can'",
          "printf 'kahve 45\\ncay 20\\nsu 12\\n' > menu.txt",
          'git commit -am "Zam: kahve ve su"',
          "git config user.name 'Zeynep Arslan'",
          "printf 'kahve 45\\nsu 12\\nlimonata 30\\n' > menu.txt",
          'git commit -am "Çay kalktı, limonata geldi"',
          "git config --unset user.name",
        ],
        gorev: "~git blame menu.txt~ ile satırların sahiplerine bak. Çayın kalktığı commit'i ~git log --oneline~ ve ~git show~ ile incele.",
        oneriler: ["git blame menu.txt", "git log --oneline", "git show HEAD", "git blame -L 2,2 menu.txt"],
      },
      dene: ["gt-u16-blame-ne", "gt-u16-blame-sonraki"],
    },
    {
      baslik: "worktree ve submodule",
      metin: md(`
**worktree: aynı depodan ikinci çalışma klasörü.** Uzun bir işin ortasındasın, dosyaların dağınık; acil bir hata için main'de çalışman gerekiyor. Stash yerine:

~~~
git worktree add ../acil main
cd ../acil
~~~

~../acil~ klasöründe main açılır; asıl klasörün olduğu gibi kalır. İki klasör aynı ~.git~ deposunu paylaşır: birinde attığın commit ötekinde de görünür. Bir dal aynı anda yalnızca bir worktree'de açık olabilir. İş bitince ~git worktree remove ../acil~.

**submodule: depo içinde depo.** Projen başka bir deponun kodunu kullanıyor ve onu belirli bir sürümde sabitlemek istiyorsun:

~~~
git submodule add https://github.com/kafe-mavi/ortak-tasarim.git tasarim
~~~

Ana depo alt deponun dosyalarını değil, **hangi commit'te durduğunu** kaydeder (ve ~.gitmodules~ dosyasını). Bu yüzden:

- Düz ~git clone~ alt modülün klasörünü boş getirir. ~git clone --recurse-submodules~ ile klonla ya da sonradan ~git submodule update --init~ de.
- Alt depo ilerleyince ana depo kendiliğinden ilerlemez; alt modülü güncelleyip ana depoda bunu commit'lersin.

Submodule'ler güçlüdür ama ekipte sık karışıklık yaratır. Çoğu zaman paket yöneticisi (npm, pip) ya da tek depo (monorepo) daha basit bir çözümdür.
`),
      dene: ["gt-u16-worktree-ne", "gt-u16-submodule-ne"],
    },
    {
      baslik: "Hook'lar: Git olaylarına betik bağlamak",
      metin: md(`
Git belli anlarda ~.git/hooks~ klasöründeki betikleri çalıştırır. Betik sıfırdan farklı bir kodla çıkarsa işlem durur.

| Hook | Ne zaman? | Örnek kullanım |
|---|---|---|
| ~pre-commit~ | commit'ten önce | lint, biçimlendirme, gizli anahtar taraması |
| ~commit-msg~ | mesaj yazıldıktan sonra | "feat: ..." gibi mesaj kuralını denetlemek |
| ~pre-push~ | push'tan önce | hızlı testler |
| ~post-merge~ | merge/pull sonrası | bağımlılıkları yeniden kurmak |

Basit bir ~pre-commit~:

~~~
#!/bin/sh
if git diff --cached | grep -q "console.log"; then
  echo "console.log kaldı, commit durduruldu"
  exit 1
fi
~~~

**~.git/hooks~ clone ile gitmez:** ~.git~ klasörü deponun içeriği değildir. Ekipler hook'ları depoda bir klasörde tutar ve ~git config core.hooksPath .githooks~ ya da husky, pre-commit gibi araçlarla kurar. Hook'lar yerel bir kolaylıktır, atlanabilir (~git commit --no-verify~); asıl güvence sunucudaki CI ve dal korumasıdır.
`),
      dene: ["gt-u16-hook-ne", "gt-u16-hook-paylasilmaz"],
    },
    {
      baslik: "Büyük dosyalar ve Git LFS",
      metin: md(`
Git her dosyanın her sürümünü saklar. 200 MB'lık bir videoyu on kez değiştirirsen depo 2 GB olur ve herkes clone'da bunu indirir. Platformların sınırları da vardır: GitHub tek dosyası 100 MB'ı geçen push'u reddeder.

**Git LFS** (Large File Storage) büyük dosyaları ayrı bir depolamada tutar; depoya yalnızca küçük bir işaretçi dosyası girer:

~~~
git lfs install
git lfs track "*.mp4"
git add .gitattributes video.mp4
git commit -m "Tanıtım videosu"
~~~

~track~ kuralı ~.gitattributes~ dosyasına yazılır; onu da commit'lersin. GitHub ve GitLab LFS'i destekler ama depolama kotası ayrıdır.

Büyük dosya zaten geçmişe girdiyse LFS onu oradan çıkarmaz: önce geçmiş temizlenir (18. ünite). Derlenmiş çıktılar (~dist/~), bağımlılıklar (~node_modules/~) ve veri dökümleri ise depoya hiç girmez; ~.gitignore~'a yazılır.
`),
      dene: ["gt-u16-lfs-ne", "gt-u16-lfs-sinir"],
    },
    {
      baslik: "İmzalı commit'ler",
      metin: md(`
Git, commit'in yazar alanına ~user.name~ ve ~user.email~'de ne yazıyorsa onu koyar. Biri ayarlarına senin adını ve e-postanı yazıp commit atabilir; Git bunu engellemez.

**İmzalı commit**, yazarın elindeki bir anahtarla (GPG ya da SSH) atılan kriptografik imzadır. Platformdaki hesabına açık anahtarını eklersen GitHub ve GitLab imzalı commit'lerini **Verified** diye işaretler.

~~~
git config --global gpg.format ssh
git config --global user.signingkey ¬/.ssh/id_ed25519.pub
git commit -S -m "İmzalı commit"
git config --global commit.gpgsign true   # hepsini imzala
~~~

Büyük ~-S~ imzalar. Küçük ~-s~ ise yalnızca mesajın sonuna "Signed-off-by: ..." satırı ekler; bir beyandır, kriptografik imza değildir. Dal korumasında "Require signed commits" açılınca imzasız commit'ler korumalı dala giremez.

Ünitenin sonunda araçları karıştırmadan seçebildiğini dene:

[[G-H16-02]]
`),
      dene: ["gt-u16-imza-neden", "gt-u16-imza-bayrak"],
    },
  ],
  test: [
    "gt-u16-cp-hotfix", "gt-u16-cp-komut", "gt-u16-cp-cakisma", "gt-u16-bisect-baslat", "gt-u16-bisect-reset", "gt-u16-bisect-kopuk", "gt-u16-bisect-good-yanlis", "gt-u16-blame-satir-araligi", "gt-u16-blame-sinir", "gt-u16-blame-sapka", "gt-u16-worktree-senaryo", "gt-u16-worktree-ayni-dal", "gt-u16-submodule-clone", "gt-u16-hook-commit-msg", "gt-u16-hook-atla", "gt-u16-lfs-gitattributes",
  ],
};
