import { md, type Ders } from "../../../../src/dersler/tipler";
import { icerik } from "../../../../src/gitsim/depo";
import { commitSayisi, headDosyalari, izleniyor, temizMi } from "../../../../src/gitsim/gorev";

export const UNITE_3: Ders = {
  hafta: 3,
  baslik: "İlk Depo ve Üç Alan",
  ozet: "git init ile depo aç, çalışma dizini, hazırlık alanı ve depo arasındaki yolculuğu gör, git status'u okumayı, git add ile seçmeyi ve git commit ile kaydetmeyi öğren.",
  bolumler: [
    {
      baslik: "git init: klasörü depoya çevir",
      metin: md(`
Herhangi bir klasörü Git deposuna çevirmek tek komut:

~~~
git init
~~~

Git klasöre gizli bir ~.git~ klasörü ekler. Bütün geçmiş, dallar ve ayarlar oradadır; projenin dosyalarına dokunulmaz. Klasörde dosya olması sorun değildir, ama dosyalar henüz **izlenmez**: Git onları görür ama geçmişe almaz.

İki önemli uyarı: ~.git~ klasörünü silersen bütün geçmiş gider, geriye yalnızca dosyaların son hâli kalır. Bir de ~git init~'i yanlış yerde (ör. ev klasöründe) çalıştırma; o zaman ev klasöründeki her şey depoya aday olur. Önce ~pwd~ ile nerede olduğuna bak.

Bir depo olmayan yerde Git komutu yazarsan şunu görürsün:

~~~
fatal: not a git repository (or any of the parent directories): .git
~~~
`),
      git: {
        dosyalar: { "index.html": "<h1>Merhaba</h1>\n", "stil.css": "h1 { color: teal; }\n" },
        gorev: "Önce ~git status~ yaz ve hatayı gör. Sonra ~git init~ ile depoyu aç, ~ls -a~ ile gizli klasörü bul.",
        oneriler: ["git status", "git init", "ls -a", "git status"],
        hedefler: [{ aciklama: "Depo açıldı", denetle: (o) => o.depo !== null }],
      },
      dene: ["gt-u3-git-sil", "gt-u3-repo-degil"],
    },
    {
      baslik: "Üç alan",
      metin: md(`
Git'i anlamanın anahtarı üç alandır:

1. **Çalışma dizini** (working directory): klasörde gördüğün, editörde düzenlediğin dosyalar.
2. **Hazırlık alanı** (staging area, index): bir sonraki commit'e girecek değişikliklerin bekleme odası.
3. **Depo** (repository): commit'lenmiş anlık görüntüler, yani geçmiş.

Yolculuk hep aynı: dosyayı düzenle → ~git add~ ile hazırlık alanına koy → ~git commit~ ile depoya kaydet.

[[G-H3-01]]

Hazırlık alanı neden var? Çünkü bir oturumda birden çok iş yaparsın: hem bir hatayı düzeltir hem de not alırsın. Hazırlık alanı **neyin commit'e gireceğini seçmeni** sağlar; her commit tek bir işi anlatır.

Dikkat: ~git add~ dosyanın **o anki** hâlini kopyalar. Ekledikten sonra dosyayı yeniden değiştirirsen, yeni değişiklik tekrar ~git add~ yapana kadar commit'e girmez. Yukarıda dene: bir dosyayı ekle, sonra yeniden düzenle.

Çalışma dizinindeki bir değişiklikten vazgeçmek için ~git restore dosya~ yazılır. Bu, kaydetmediğin değişikliği **geri dönüşsüz** siler.
`),
      dene: ["gt-u3-add-sonrasi-degisiklik", "gt-u3-restore-dosya"],
    },
    {
      baslik: "git status: neredeyim?",
      metin: md(`
Git'te kaybolduğunda yazacağın komut: ~git status~. Çıktısı üç bölümden oluşur:

~~~
On branch main
Changes to be committed:
	new file:   index.html        ← hazırlık alanında (yeşil)

Changes not staged for commit:
	modified:   stil.css          ← değişti ama eklenmedi (kırmızı)

Untracked files:
	notlar.txt                    ← Git hiç izlemiyor (kırmızı)
~~~

Hiçbir şey kalmadıysa ~nothing to commit, working tree clean~ der: çalışma dizini son commit'le aynıdır. ~git status -s~ kısa çıktı verir: soldaki sütun hazırlık alanını, sağdaki çalışma dizinini gösterir (~M ~ eklenmiş değişiklik, ~ M~ eklenmemiş değişiklik, ~??~ izlenmeyen dosya).

Git boş klasörleri izlemez: içinde dosya olmayan bir klasör ~git status~'ta görünmez. Boş bir klasörü depoya koymak isteyenler içine ~.gitkeep~ gibi boş bir dosya koyar.

~git status~ sana ne yapabileceğini de söyler: parantez içindeki ~(use "git add <file>..." ...)~ satırları birer ipucudur.
`),
      dene: ["gt-u3-kisa-cikti"],
    },
    {
      baslik: "git add: seç",
      metin: md(`
~git add~ hazırlık alanına koyar:

- ~git add README.md~: yalnızca bu dosya.
- ~git add src/~: bir klasörün tamamı.
- ~git add .~: bulunduğun klasör ve altındaki **her şey**. Pratik ama tehlikeli: içinde şifre ya da büyük dosya varsa onlar da girer.
- ~git add -p~: dosyadaki değişiklikleri parça parça sorar, yalnızca istediklerini alır.

Başarılı ~git add~ hiçbir şey yazmaz; sonucu ~git status~ ile görürsün.

Yanlış bir dosyayı eklediysen, **değişikliğini kaybetmeden** hazırlık alanından çıkar:

~~~
git restore --staged app.js
~~~

(Eski Git sürümlerinde aynı iş ~git reset app.js~ ile yapılır.) Henüz hiç commit yokken ~git rm --cached dosya~ kullanılır.
`),
      git: {
        dosyalar: { "hesap.js": "function topla(a, b) {\n  return a + b;\n}\n", "sifreler.txt": "veritabani: P@rola123\n" },
        kurulum: ["git init", "git add hesap.js", 'git commit -m "Toplama fonksiyonu"', 'echo "// çıkarma yakında" >> hesap.js', "git add ."],
        gorev: "Biri ~git add .~ yaptı ve ~sifreler.txt~ de girdi. Onu hazırlık alanından çıkar, ~hesap.js~ kalsın.",
        oneriler: ["git status", "git restore --staged sifreler.txt", "git status"],
        hedefler: [
          { aciklama: "~sifreler.txt~ hazırlık alanında değil", denetle: (o) => !!o.depo && !izleniyor(o, "sifreler.txt") },
          { aciklama: "~hesap.js~'teki değişiklik hâlâ hazırlık alanında", denetle: (o) => !!o.depo?.index["hesap.js"] && icerik(o.depo, o.depo.index["hesap.js"]).includes("çıkarma") },
          { aciklama: "Dosya diskte duruyor", denetle: (o) => "sifreler.txt" in o.dosyalar },
        ],
      },
      dene: ["gt-u3-unstage", "gt-u3-add-p"],
    },
    {
      baslik: "git commit: kaydet",
      metin: md(`
Hazırlık alanındakileri bir anlık görüntü olarak kaydet:

~~~
git commit -m "İlk sürüm"
~~~

Çıktıda dal adı, yeni commit'in kısa kimliği ve kaç dosyanın değiştiği yazar: ~[main (root-commit) 3f1c2aa] İlk sürüm~.

- Hazırlık alanı boşsa Git commit oluşturmaz ve ~git status~ çıktısını gösterir. Önce ~git add~.
- ~git commit -a -m "mesaj"~ **izlenen** dosyalardaki değişiklikleri ekleyip commit'ler; hiç izlenmemiş yeni dosyaları almaz.
- ~git rm eski.txt~ dosyayı diskten siler ve silinmeyi hazırlık alanına koyar.
- Commit **yereldir**: GitHub'a gitmez. Göndermek ayrı bir adımdır (5. ünite).

İyi alışkanlık: **küçük ve tek amaçlı** commit'ler. "Giriş hatası düzeltildi" ile "Tema rengi değişti" iki ayrı commit olmalı; ileride birini geri almak ya da aramak kolaylaşır.

Şimdi bütün yolculuğu kendin yap:
`),
      git: {
        dosyalar: { "index.html": "<h1>Merhaba</h1>\n", "stil.css": "h1 { color: teal; }\n", "notlar.txt": "yapılacaklar: menü\n" },
        kurulum: ["git init"],
        gorev: "~index.html~ ve ~stil.css~'i bir commit'le kaydet; ~notlar.txt~ depoya girmesin. Sonra ~stil.css~'i değiştirip (~echo \"p { margin: 0; }\" >> stil.css~) ikinci bir commit at.",
        oneriler: ["git status", "git add index.html stil.css", 'git commit -m "Sayfa ve stil"', 'echo "p { margin: 0; }" >> stil.css', 'git commit -am "Paragraf boşluğu"'],
        hedefler: [
          { aciklama: "İki commit var", denetle: (o) => commitSayisi(o) >= 2 },
          { aciklama: "Son commit'te ~stil.css~'in yeni satırı var", denetle: (o) => (headDosyalari(o)["stil.css"] ?? "").includes("margin") },
          { aciklama: "~notlar.txt~ depoda değil", denetle: (o) => !!o.depo && !("notlar.txt" in headDosyalari(o)) },
          { aciklama: "İzlenen dosyalarda commit'lenmemiş değişiklik yok", denetle: (o) => temizMi(o) },
        ],
      },
      dene: ["gt-u3-bos-commit", "gt-u3-iki-commit"],
    },
  ],
  test: [
    "gt-u3-init-komut", "gt-u3-git-klasoru", "gt-u3-init-tekrar", "gt-u3-uc-alan", "gt-u3-staging-amac", "gt-u3-akis-sira",
    "gt-u3-status-komut", "gt-u3-untracked", "gt-u3-clean", "gt-u3-bos-klasor", "gt-u3-add-dosya", "gt-u3-add-nokta",
    "gt-u3-add-bos-cikti", "gt-u3-restore-staged-komut", "gt-u3-commit-m", "gt-u3-commit-a", "gt-u3-kucuk-commit", "gt-u3-commit-yerel", "gt-u3-git-rm",
  ],
};
