// 7. ünite (Başlangıç): çakışmalar. Neden olur, işaretleri okumak, çözmek ve
// vazgeçmek, araçlar (status, diff, ours/theirs, editörler) ve önlemek.
import { sorular, type Soru } from "./yardimci.ts";

const U = 7;

const ISARETLI = "~~~\n<<<<<<< HEAD\nconst KDV = 0.20;\n=======\nconst KDV = 0.18;\n>>>>>>> fiyat-guncelle\n~~~";

export const unite7: Soru[] = [
  ...sorular(U, "u7-neden", [
    {
      ad: "tanim",
      soru: "Birleştirmede çakışma (merge conflict) en çok hangi durumda çıkar?",
      secenekler: [
        "Aynı satırlar iki dalda farklı değiştirildiğinde",
        "İki dal aynı gün içinde commit aldığında",
        "İki dalda farklı dosyalar değiştirildiğinde",
        "Bir dalda yalnızca yeni dosya eklendiğinde",
      ],
      aciklama: "Git farklı dosyalardaki ya da aynı dosyanın farklı yerlerindeki değişiklikleri kendisi birleştirir. Aynı satırlar iki tarafta farklı değiştiyse hangisinin doğru olduğuna karar veremez ve sana sorar.",
    },
    {
      ad: "farkli-satir",
      dy: false,
      soru: "İki dal aynı dosyayı değiştirdiyse, değişiklikler farklı satırlarda olsa bile birleştirmede her zaman çakışma çıkar.",
      aciklama: "Yanlış. Değişiklikler birbirinden uzak satırlardaysa Git ikisini de alır. Çakışma, aynı ya da bitişik satırlar iki tarafta farklı değiştiğinde çıkar.",
    },
    {
      ad: "sil-degistir",
      zorluk: 2,
      soru: "Bir dalda ~eski.js~ silinmiş, diğer dalda aynı dosya değiştirilmiş. Birleştirince ne olur?",
      secenekler: [
        "Çakışma çıkar; dosyanın kalıp kalmayacağına sen karar verirsin",
        "Git dosyayı her zaman siler",
        "Git dosyayı her zaman değiştirilmiş hâliyle tutar",
        "Birleştirme hiç başlamaz, Git hata verir",
      ],
      aciklama: "Bu bir \"modify/delete\" çakışmasıdır: ~git status~ dosyayı \"deleted by us\" ya da \"deleted by them\" diye gösterir. Tutmak için ~git add eski.js~, silmek için ~git rm eski.js~, sonra commit.",
    },
    {
      ad: "kotu-degil",
      senaryo: true,
      soru: "Takıma yeni katılan biri ilk çakışmasını görünce \"Git'i bozdum\" diye paniğe kapıldı. Ona en doğru açıklama hangisi?",
      secenekler: [
        "Çakışma olağandır; Git hangisinin kalacağını soruyor",
        "Depo bozuldu, en son yedekten geri dönmek gerekiyor",
        "Çakışma çıkan dosya artık kullanılamaz, yeniden yazılmalı",
        "Bir daha çakışma olmaması için dal kullanmayı bırakmalı",
      ],
      aciklama: "Çakışma bir hata değil, bir sorudur. Hiçbir commit kaybolmaz; dosyayı düzenleyip kararını verirsin ya da ~git merge --abort~ ile birleştirmeden önceki hâle dönersin.",
    },
  ]),

  ...sorular(U, "u7-isaretler", [
    {
      ad: "head-kismi",
      soru: `~main~ dalındayken ~git merge fiyat-guncelle~ yazdın ve dosyada şunu gördün:\n\n${ISARETLI}\n\n~<<<<<<< HEAD~ ile ~=======~ arasındaki satır kimin?`,
      secenekler: [
        "Bulunduğun dalın, yani main'in",
        "fiyat-guncelle dalının",
        "İki dalın ortak atasının",
        "Git'in önerdiği birleşik hâlin",
      ],
      aciklama: "HEAD bulunduğun daldır: üst kısım ~main~'deki hâl (0.20), ~=======~ ile ~>>>>>>>~ arası birleştirilen daldaki hâl (0.18). İşaretlerin hepsini silip doğru satırı bırakırsın.",
    },
    {
      ad: "isaret-kalirsa",
      senaryo: true,
      zorluk: 2,
      soru: "Çakışmayı çözdüğünü sanıp ~git add~ ve commit yaptın; ama dosyada ~<<<<<<<~ ve ~>>>>>>>~ satırları kalmış. Ne olur?",
      secenekler: [
        "Git bunları sıradan metin sayar; bozuk dosya commit'lenir",
        "Git commit'i reddeder ve çakışmayı yeniden açar",
        "Git işaretleri otomatik olarak siler",
        "Dosya hazırlık alanından kendiliğinden çıkar",
      ],
      aciklama: "~git add~ \"çözdüm\" demektir; Git dosyanın içine bakmaz. İşaretli dosya derlenmez ya da bozuk çalışır. Commit'ten önce ~git diff --check~ ya da editörde arama ile işaret kalmadığından emin ol.",
    },
    {
      ad: "ucu-de",
      dy: true,
      zorluk: 2,
      soru: "Çakışmada doğru cevap iki tarafın hiçbiri olmayabilir; iki değişikliği birleştiren üçüncü bir hâl yazmak da geçerli bir çözümdür.",
      aciklama: "Doğru. Örneğin bir taraf fonksiyonun adını, diğeri gövdesini değiştirdiyse doğru sonuç ikisini birlikte içerir. Önemli olan son hâlin doğru çalışması ve işaretlerin silinmesidir.",
    },
    {
      ad: "isaret-sayisi",
      soru: "Git'in çakışan bölgeyi işaretlerken kullandığı üç ayırıcı satır hangileridir?",
      secenekler: [
        "~<<<<<<<~, ~=======~ ve ~>>>>>>>~",
        "~[[[[~, ~----~ ve ~]]]]~",
        "~/*~, ~--~ ve ~*/~",
        "~BEGIN~, ~SPLIT~ ve ~END~",
      ],
      aciklama: "~<<<<<<< HEAD~ senin tarafını, ~=======~ ayrımı, ~>>>>>>> dal-adı~ diğer tarafın sonunu gösterir. ~merge.conflictStyle diff3~ ayarıyla araya ortak atanın hâli de (~|||||||~) eklenir.",
    },
  ]),

  ...sorular(U, "u7-cozum", [
    {
      ad: "sira",
      soru: "Bir birleştirme çakışmasını çözmenin doğru sırası hangisidir?",
      secenekler: [
        "Dosyayı düzenle, işaretleri sil, git add, git commit",
        "git commit, dosyayı düzenle, git add",
        "git add, git commit, sonra dosyayı düzenle",
        "Dosyayı sil, git merge yaz, git push",
      ],
      aciklama: "Önce dosyada doğru hâli bırakıp işaretleri silersin; ~git add~ ile o dosyayı çözüldü olarak işaretlersin; bütün dosyalar bitince ~git commit~ birleştirme commit'ini oluşturur.",
    },
    {
      ad: "add-anlami",
      soru: "Çakışma sırasında bir dosyaya ~git add~ yapmak Git'e ne söyler?",
      secenekler: [
        "Bu dosyanın çakışmasını çözdüğünü",
        "Bu dosyayı birleştirmeden çıkarmak istediğini",
        "Dosyanın bulunduğun daldaki hâlinin seçileceğini",
        "Birleştirmenin baştan başlatılacağını",
      ],
      aciklama: "Çakışma sırasında index'te dosyanın üç hâli (ortak ata, senin, onların) durur. ~git add~ bunların yerine dosyanın şu anki hâlini koyar; Git bunu \"çözüldü\" diye okur.",
    },
    {
      ad: "abort",
      soru: "Çakışmayla dolu bir birleştirmeden vazgeçip birleştirmeden önceki hâle dönen komutu yaz.",
      cevap: ["git merge --abort"],
      aciklama: "~git merge --abort~ birleştirmeyi iptal eder: index ve çalışma dizini ~git merge~ yazmadan önceki hâline döner. Birleştirmeden önce commit'lenmemiş değişiklik yoksa güvenle kullanılır.",
    },
    {
      ad: "commit-reddi",
      senaryo: true,
      soru: "Çakışan iki dosyadan yalnızca birini düzeltip ~git add~ yaptın ve ~git commit~ yazdın. Git \"Committing is not possible because you have unmerged files\" dedi. Neden?",
      secenekler: [
        "Diğer çakışan dosya henüz çözüldü olarak işaretlenmedi",
        "Commit mesajı yazılmadığı için",
        "Birleştirme commit'leri yalnızca GitHub'da oluşturulabildiği için",
        "Çözülen dosya hazırlık alanına iki kez eklendiği için",
      ],
      aciklama: "Birleştirme commit'i ancak **bütün** çakışmalar çözülünce oluşur. ~git status~ \"Unmerged paths\" altında kalan dosyaları gösterir.",
    },
    {
      ad: "continue",
      zorluk: 2,
      soru: "Bir ~cherry-pick~ ya da ~rebase~ çakışmasını çözüp ~git add~ yaptıktan sonra işleme devam etmek için hangi seçenek kullanılır?",
      secenekler: ["~--continue~", "~--abort~", "~--skip~", "~--force~"],
      aciklama: "~git rebase --continue~ ya da ~git cherry-pick --continue~ işlemi kaldığı yerden sürdürür. ~--abort~ tamamen vazgeçer, ~--skip~ o commit'i atlar.",
    },
  ]),

  ...sorular(U, "u7-araclar", [
    {
      ad: "status-unmerged",
      soru: "Çakışma sırasında ~git status~ çakışan dosyaları hangi başlık altında gösterir?",
      secenekler: ["~Unmerged paths~", "~Untracked files~", "~Changes to be committed~", "~Ignored files~"],
      aciklama: "\"Unmerged paths\" altında her dosya ~both modified~, ~deleted by us~ gibi bir açıklamayla listelenir. Çözüp ~git add~ yaptıkça dosyalar bu listeden çıkar.",
    },
    {
      ad: "theirs",
      zorluk: 3,
      soru: "Çakışmalı bir birleştirmede ~paket-kilidi.json~ dosyası için doğrudan birleştirilen dalın (gelen tarafın) hâlini almak istiyorsun. Hangi komut bunu yapar?",
      secenekler: [
        "~git checkout --theirs paket-kilidi.json~",
        "~git checkout --ours paket-kilidi.json~",
        "~git merge --abort paket-kilidi.json~",
        "~git reset --hard paket-kilidi.json~",
      ],
      aciklama: "~--theirs~ birleştirilen dalın, ~--ours~ bulunduğun dalın hâlini çalışma dizinine yazar. Ardından ~git add~ ile çözüldü işaretlenir. (Rebase'de ours ve theirs yer değiştirir; dikkat!)",
    },
    {
      ad: "editor",
      senaryo: true,
      soru: "Büyük bir dosyada on yerde çakışma var ve işaretleri elle aramak yorucu. Hangisi işini en çok kolaylaştırır?",
      secenekler: [
        "VS Code gibi bir editörün birleştirme görünümünü kullanmak",
        "Dosyayı silip baştan yazmak",
        "Her çakışmada ~git merge --abort~ deyip yeniden denemek",
        "Dosyayı e-postayla ekip arkadaşına gönderip beklemek",
      ],
      aciklama: "Modern editörler çakışmaları vurgular ve her biri için \"Accept Current / Incoming / Both\" gibi düğmeler sunar. ~git mergetool~ de yapılandırılmış bir birleştirme aracını açar.",
    },
    {
      ad: "diff-cakisma",
      dy: true,
      zorluk: 2,
      soru: "Çakışma sırasında ~git diff~ çakışan dosyaların iki tarafını bir arada gösterir.",
      aciklama: "Doğru. Çakışma anında ~git diff~ birleşik (combined) bir görünüm verir: her satırın başında iki sütun vardır ve hangi taraftan geldiği görünür.",
    },
  ]),

  ...sorular(U, "u7-onlem", [
    {
      ad: "kucuk-dal",
      senaryo: true,
      soru: "Ekip her birleştirmede saatlerce çakışma çözüyor. Dallar genelde iki üç hafta açık kalıyor. Hangi alışkanlık en çok fayda sağlar?",
      secenekler: [
        "Dalları kısa ömürlü tutup küçük parçalar hâlinde sık birleştirmek",
        "Herkesin yalnızca kendi klasöründe çalışması için kodu bölmek",
        "Birleştirmeleri ay sonunda tek seferde yapmak",
        "Çakışmayı önlemek için dal kullanmayı bırakmak",
      ],
      aciklama: "Dal ne kadar uzun yaşarsa ana daldan o kadar uzaklaşır. Küçük ve sık birleştirmeler çakışmaları küçük ve anlaşılır tutar.",
    },
    {
      ad: "ana-dali-al",
      senaryo: true,
      zorluk: 2,
      soru: "Bir haftadır kendi dalında çalışıyorsun; bu sürede ~main~'e çok şey birleştirildi. PR açmadan önce ne yapmak çakışmayı erkenden yakalamanı sağlar?",
      secenekler: [
        "main'deki son değişiklikleri kendi dalına almak",
        "Kendi dalını silip yeniden açmak",
        "PR'ı açıp çakışmayı inceleyenin çözmesini beklemek",
        "Bütün değişiklikleri tek bir commit'e sıkıştırmak",
      ],
      aciklama: "~git pull origin main~ (ya da ~git merge main~ / ~git rebase main~) ile ana dalı kendi dalına alırsan çakışma kendi bilgisayarında, işin bağlamını bildiğin anda çıkar.",
    },
    {
      ad: "bicimlendirici",
      dy: true,
      zorluk: 2,
      soru: "Ekipte herkesin aynı kod biçimlendiricisini (formatter) kullanması, yalnızca boşluk ve girinti farkından doğan çakışmaları azaltır.",
      aciklama: "Doğru. Biri dosyayı başka bir girintiyle kaydedince bütün satırlar \"değişmiş\" görünür ve gerçek değişikliklerle çakışır. Ortak biçimlendirici ve ~.editorconfig~ bunu önler.",
    },
    {
      ad: "kilit-dosya",
      zorluk: 2,
      soru: "~package-lock.json~ gibi otomatik üretilen bir dosyada çakışma çıktı. Genelde en sağlıklı yol hangisidir?",
      secenekler: [
        "Bir tarafı alıp paket yöneticisiyle dosyayı yeniden üretmek",
        "İşaretlerin arasındaki satırları elle tek tek birleştirmek",
        "Dosyayı depodan tamamen silmek",
        "İki tarafın satırlarını işaretleriyle birlikte bırakmak",
      ],
      aciklama: "Üretilen dosyalar elle birleştirilmeye uygun değildir. Bir tarafı al (ör. ~git checkout --theirs~), ardından ~npm install~ ile dosyayı tutarlı biçimde yeniden üret ve ~git add~ yap.",
    },
  ]),
];
