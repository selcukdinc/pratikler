import { md, type Ders, type MiniGit } from "../../../../src/dersler/tipler";
import { gecmisteVarMi, headDosyalari, temizMi } from "../../../../src/gitsim/gorev";

// Bölümlerin üzerinde çalıştığı küçük bir geçmiş: iki yazar, beş commit
const GECMIS: Pick<MiniGit, "dosyalar" | "kurulum"> = {
  dosyalar: { "sepet.js": "let toplam = 0;\n" },
  kurulum: [
    "git init",
    "git add .",
    'git commit -m "Sepet modülü"',
    'echo "function ekle(fiyat) { toplam += fiyat; }" >> sepet.js',
    'git commit -am "Sepete ürün ekleme"',
    'git -c user.name="Mert Aksoy" -c user.email=mert@ornek.dev commit --allow-empty -m "Kod incelemesi notu"',
    'echo "const KDV = 0.20;" >> sepet.js',
    'git -c user.name="Mert Aksoy" -c user.email=mert@ornek.dev commit -am "KDV oranı eklendi"',
    'echo "// TODO: indirim" >> sepet.js',
    'git commit -am "İndirim için not"',
  ],
};

export const UNITE_4: Ders = {
  hafta: 4,
  baslik: "Geçmişe Bakmak",
  ozet: "git log ile geçmişi oku ve süz, git diff ile ne değiştiğini gör, git show ve commit kimliklerini (hash, HEAD) anla, iyi commit mesajı yaz ve .gitignore ile istenmeyen dosyaları depodan uzak tut.",
  bolumler: [
    {
      baslik: "git log: geçmişi oku",
      metin: md(`
~git log~ geçmişi en yeniden eskiye listeler: her commit'in kimliği, yazarı, tarihi ve mesajı. Liste uzunsa ekranın altında ~:~ belirir; bu bir sayfalayıcıdır, ok tuşlarıyla kaydırır, **q** ile çıkarsın.

Sık kullanılan seçenekler:

| Komut | Ne gösterir? |
|---|---|
| ~git log --oneline~ | Her commit tek satır: kısa kimlik ve mesaj |
| ~git log -3~ | Yalnızca son 3 commit (~-n 3~ de olur) |
| ~git log --author="Mert"~ | Yalnızca Mert'in commit'leri |
| ~git log -p~ | Her commit'in değiştirdiği satırlarla birlikte |
| ~git log --stat~ | Her commit'te hangi dosyada kaç satır eklenip silindiği |
| ~git log --oneline --graph --all~ | Bütün dallar, dallanma ve birleşmeler çizilmiş |
`),
      git: {
        ...GECMIS,
        gorev: "Geçmişi farklı biçimlerde oku: önce tamamını, sonra tek satırlık hâlini, sonra yalnızca Mert'in commit'lerini.",
        oneriler: ["git log", "git log --oneline", "git log -3 --oneline", 'git log --author="Mert" --oneline', "git log -p -1"],
        alanlar: false,
      },
      dene: ["gt-u4-pager", "gt-u4-yazar-suzgec"],
    },
    {
      baslik: "git diff: ne değişti?",
      metin: md(`
~git diff~ iki şey arasındaki farkı satır satır gösterir. Başındaki ~-~ silinen, ~+~ eklenen satırdır; ~@@ -3,2 +3,3 @@~ satırı değişikliğin dosyanın neresinde olduğunu söyler.

- ~git diff~: çalışma dizini ile hazırlık alanı arasındaki fark, yani **henüz eklemediğin** değişiklikler.
- ~git diff --staged~ (eş anlamlısı ~--cached~): hazırlık alanı ile son commit arasındaki fark, yani **bir sonraki commit'e girecek** olanlar.
- ~git diff HEAD~: ikisi birden; son commit'ten bu yana her şey.

Sık şaşırtan durum: dosyayı değiştirip ~git add~ yaptın, ~git diff~ boş çıktı. Çünkü değişiklik artık hazırlık alanında; görmek için ~git diff --staged~.
`),
      git: {
        ...GECMIS,
        kurulum: [...GECMIS.kurulum!, 'echo "const INDIRIM = 0.1;" >> sepet.js', "git add sepet.js", 'echo "// sepet boşsa uyar" >> sepet.js'],
        gorev: "Dosyada iki değişiklik var: biri hazırlık alanında, biri değil. Üç ~diff~ türünü sırayla dene ve hangisinin hangi satırı gösterdiğine bak.",
        oneriler: ["git status", "git diff", "git diff --staged", "git diff HEAD"],
        grafik: false,
      },
      dene: ["gt-u4-diff-bos", "gt-u4-diff-isaret"],
    },
    {
      baslik: "Commit kimliği, git show ve HEAD",
      metin: md(`
Her commit'in 40 karakterlik bir kimliği vardır: commit'in içeriğinden (dosyaların anlık görüntüsü, yazar, zaman, mesaj ve önceki commit'in kimliği) **SHA-1** ile hesaplanan bir özet. Aynı içerik her bilgisayarda aynı kimliği verir; tek bir harf değişirse kimlik tamamen değişir:

[[G-H4-01]]

Komutlarda kimliğin tamamını yazmak gerekmez; tek anlamlı olduğu sürece ilk 7 karakter yeter: ~git show 3f1c2aa~. **git show** bir commit'in mesajını ve yaptığı değişiklikleri gösterir.

**HEAD** "şu an bulunduğun yer" demektir: genellikle üzerinde çalıştığın dalın son commit'i. ~HEAD¬1~ ondan bir önceki, ~HEAD¬2~ iki önceki commit'tir. Örneğin ~git show HEAD¬1~ sondan bir önceki commit'i açar.
`),
      git: {
        ...GECMIS,
        gorev: "Kısa kimliklerle oyna: son commit'i, ondan iki öncekini ve ilk commit'i ~git show~ ile aç.",
        oneriler: ["git log --oneline", "git show", "git show HEAD~2", "git show --stat HEAD~1"],
        alanlar: false,
      },
      dene: ["gt-u4-hash-degisir"],
    },
    {
      baslik: "İyi commit mesajı",
      metin: md(`
Altı ay sonra "bu hata ne zaman geldi?" diye geçmişi okuyan kişi büyük ihtimalle sen olacaksın. Mesaj, değişikliğin **ne yaptığını ve neden** yapıldığını anlatmalı.

| Kötü | İyi |
|---|---|
| ~düzeltme~ | ~Boş sepetle ödeme sayfası açılmasını engelle~ |
| ~asdf~ | ~KDV oranını yapılandırma dosyasına taşı~ |
| ~son hali~ | ~Giriş formuna e-posta doğrulaması ekle~ |

Yaygın kalıp: yaklaşık 50 karakteri geçmeyen bir **özet satırı**, bir boş satır ve gerekirse ayrıntılı açıklama. Birçok projede özet satırı **emir kipiyle** yazılır ("Ekle", "Düzelt"), sonunda nokta olmaz. Bazı ekipler ~feat:~, ~fix:~ gibi önekler (Conventional Commits) kullanır. Önemli olan, mesajın diff'te zaten görünmeyen bilgiyi, yani amacı söylemesi.
`),
      dene: ["gt-u4-mesaj-senaryo"],
    },
    {
      baslik: ".gitignore: depoya girmeyecekler",
      metin: md(`
Her projede depoya girmemesi gereken dosyalar vardır: bağımlılık klasörleri (~node_modules/~), derleme çıktıları, günlükler (~*.log~), editör ayarları ve en önemlisi **sırlar** (~.env~, anahtarlar). Projenin kökündeki ~.gitignore~ dosyası bunları listeler; Git onları ~git status~'ta göstermez ve ~git add .~ ile almaz.

~~~
node_modules/
*.log
!onemli.log
.env
~~~

~*.log~ bütün .log dosyalarını, ~!onemli.log~ ise bu kuralın bir istisnasını tanımlar. ~.gitignore~'un kendisi commit'lenir; böylece bütün ekip aynı kuralları kullanır. En iyisi onu **ilk commit'ten önce** yazmaktır.

Dikkat: ~.gitignore~ yalnızca **izlenmeyen** dosyalara işler. Zaten commit'lenmiş bir dosyayı sonradan listeye eklemek onu depodan çıkarmaz. Önce takipten çıkarman gerekir (dosya diskte kalır):

~~~
git rm --cached .env
~~~

Bu bile dosyayı **geçmişten** silmez; eski commit'lerde hâlâ durur. Sır içeren bir dosya bir kez push edildiyse sır artık sızmış sayılır ve değiştirilmelidir (14. ünite).
`),
      git: {
        dosyalar: { "app.js": "require('dotenv').config();\n", ".env": "DB_PAROLA=gizli-deger\n", "hata.log": "09:00 hata\n" },
        kurulum: ["git init", "git add .", 'git commit -m "İlk commit"'],
        gorev: "İlk commit'e ~.env~ ve ~hata.log~ girmiş. İkisini de takipten çıkar, bir ~.gitignore~ yaz (~echo \".env\" >> .gitignore~ gibi) ve commit'le.",
        oneriler: ["git rm --cached .env hata.log", 'echo ".env" >> .gitignore', 'echo "*.log" >> .gitignore', "git add .gitignore", 'git commit -m "Sırları ve günlükleri takipten çıkar"', "git show HEAD~1:.env"],
        hedefler: [
          { aciklama: "Son commit'te ~.env~ ve ~hata.log~ yok", denetle: (o) => !!o.depo && !(".env" in headDosyalari(o)) && !("hata.log" in headDosyalari(o)) },
          { aciklama: "~.gitignore~ commit'lendi", denetle: (o) => ".gitignore" in headDosyalari(o) },
          { aciklama: "~git status~ temiz (izlenmeyen dosya da yok)", denetle: (o) => temizMi(o, true) },
          { aciklama: "Ama dikkat: ~.env~ geçmişte hâlâ var", denetle: (o) => gecmisteVarMi(o, ".env") && !(".env" in headDosyalari(o)) },
        ],
      },
      dene: ["gt-u4-zaten-izlenen", "gt-u4-node-modules"],
    },
  ],
  test: [
    "gt-u4-log-komut", "gt-u4-oneline", "gt-u4-graph-all", "gt-u4-son-uc", "gt-u4-stat", "gt-u4-log-dosya",
    "gt-u4-diff-varsayilan", "gt-u4-diff-staged", "gt-u4-diff-head", "gt-u4-hash-nedir", "gt-u4-kisa-hash", "gt-u4-show",
    "gt-u4-head", "gt-u4-iyi-mesaj", "gt-u4-kalip", "gt-u4-emir-kipi", "gt-u4-amac", "gt-u4-kalip-log", "gt-u4-rm-cached", "gt-u4-unlem", "gt-u4-ne-zaman",
  ],
};
