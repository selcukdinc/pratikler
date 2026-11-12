import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitOku, headCommit } from "../../../../src/gitsim/depo";
import { dalAdiniAl, headDosyalari, temizMi } from "../../../../src/gitsim/gorev";
import type { Ortam } from "../../../../src/gitsim/tipler";

const birlesimVar = (o: Ortam) => {
  const d = o.depo;
  const h = d && headCommit(d);
  return !!h && commitOku(d!, h).ebeveynler.length > 1;
};
const ISARET = /^(<{7}|={7}|>{7})/m;

const FIYAT = "const KDV = 0.20;\nfunction fiyat(net) {\n  return net * (1 + KDV);\n}\n";
// main ve indirim aynı satırları farklı değiştirir
const CAKISMA_KUR = [
  "git init",
  "git add .",
  'git commit -m "Fiyat hesabı"',
  "git switch -c indirim",
  "printf 'const KDV = 0.20;\\nfunction fiyat(net, indirim = 0) {\\n  return net * (1 - indirim) * (1 + KDV);\\n}\\n' > fiyat.js",
  'git commit -am "İndirim parametresi"',
  "git switch main",
  "printf 'const KDV = 0.20;\\nfunction fiyat(net) {\\n  return Math.round(net * (1 + KDV));\\n}\\n' > fiyat.js",
  'git commit -am "Fiyatı yuvarla"',
];

export const UNITE_7: Ders = {
  hafta: 7,
  baslik: "Çakışmalar",
  ozet: "İki dal aynı satırı değiştirince ne olur? Çakışma işaretlerini okumayı, çakışmayı elle çözmeyi, birleştirmeden vazgeçmeyi ve çakışmaları azaltan alışkanlıkları öğren.",
  bolumler: [
    {
      baslik: "Çakışma neden olur?",
      metin: md(`
Git birleştirirken iki dalın değişikliklerini satır satır karşılaştırır. Farklı dosyalara ya da aynı dosyanın **farklı yerlerine** dokunulduysa ikisini de kendiliğinden alır. Ama iki dal **aynı satırları farklı biçimde** değiştirdiyse hangisinin doğru olduğunu bilemez ve durur. Buna **çakışma** (merge conflict) denir.

Örnek: sen ~main~'de fiyatı yuvarladın, Ayşe ~indirim~ dalında aynı ~return~ satırına indirim ekledi. ~git merge indirim~ şunu söyler:

~~~
Auto-merging fiyat.js
CONFLICT (content): Merge conflict in fiyat.js
Automatic merge failed; fix conflicts and then commit the result.
~~~

Başka çakışma türleri de vardır: bir dal dosyayı silerken diğeri değiştirdiyse (~CONFLICT (modify/delete)~) ya da iki dal aynı adla farklı dosya eklediyse.

Çakışma **bir hata değildir**: iki kişinin aynı yere dokunduğunu ve kararın insana ait olduğunu gösterir. Panik yapma; birleştirme yarım durur ve sen bitirene ya da vazgeçene kadar bekler.
`),
      dene: ["gt-u7-tanim", "gt-u7-farkli-satir", "gt-u7-kotu-degil"],
    },
    {
      baslik: "İşaretleri okumak",
      metin: md(`
Git çakışan yeri dosyanın içine iki sürümüyle birlikte yazar:

~~~
const KDV = 0.20;
<<<<<<< HEAD
function fiyat(net) {
  return Math.round(net * (1 + KDV));
}
=======
function fiyat(net, indirim = 0) {
  return net * (1 - indirim) * (1 + KDV);
}
>>>>>>> indirim
~~~

- ~<<<<<<< HEAD~ ile ~=======~ arası **senin** dalının (bulunduğun dal) hâli.
- ~=======~ ile ~>>>>>>> indirim~ arası **gelen** dalın hâli.
- Çakışmayan satırlar (~const KDV~) normal durur.

Çözmek, bu bölgeyi **olması gereken son hâliyle değiştirip üç işaret satırını silmektir**. Bazen bir taraf doğrudur, bazen ikisini harmanlarsın. Burada doğru cevap muhtemelen ikisinin birleşimi: indirimli ve yuvarlanmış fiyat.

Aşağıdaki editörde dene. "İkisini birden" düğmesine bas ve neden her zaman doğru olmadığını gör.

[[G-H7-01]]
`),
      dene: ["gt-u7-head-kismi", "gt-u7-isaret-kalirsa", "gt-u7-isaret-sayisi"],
    },
    {
      baslik: "Çakışmayı çözmek",
      metin: md(`
Sıra hep aynıdır:

1. ~git status~: hangi dosyalar çakıştı? (~both modified: fiyat.js~ ve ~Unmerged paths~ bölümü)
2. Dosyayı aç, işaretleri temizle, son hâlini yaz.
3. ~git add fiyat.js~: Git'e "bu dosya çözüldü" de. Burada ~add~ "hazırla" değil, **"çözdüm"** anlamına gelir.
4. ~git commit~: birleştirme commit'i oluşur ve birleştirme biter.

Çözülmemiş dosya varken commit atmaya çalışırsan Git reddeder: ~Committing is not possible because you have unmerged files.~

Vazgeçmek istersen her şeyi birleştirmeden önceki hâline döndüren komut:

~~~
git merge --abort
~~~

Terminalde gerçek bir çakışma yaşa. Dosyayı düzenlemek için ~nano fiyat.js~ yazabilir, üstteki dosyalar şeridinden ~fiyat.js~'e dokunabilir ya da dosyayı ~printf~ ile baştan yazabilirsin.
`),
      git: {
        dosyalar: { "fiyat.js": FIYAT },
        kurulum: CAKISMA_KUR,
        gorev: "~git merge indirim~ ile çakışmayı başlat. ~fiyat.js~'i hem indirimli hem yuvarlanmış olacak biçimde düzelt (işaretler kalmasın), dosyayı çözüldü olarak işaretle ve birleştirmeyi commit'le.",
        oneriler: [
          "git merge indirim",
          "git status",
          "cat fiyat.js",
          "printf 'const KDV = 0.20;\\nfunction fiyat(net, indirim = 0) {\\n  return Math.round(net * (1 - indirim) * (1 + KDV));\\n}\\n' > fiyat.js",
          "git add fiyat.js",
          'git commit -m "indirim dalı birleşti"',
        ],
        hedefler: [
          { aciklama: "Birleştirme commit'i oluştu", denetle: (o) => dalAdiniAl(o) === "main" && birlesimVar(o) && !o.depo!.islem },
          { aciklama: "~fiyat.js~'te çakışma işareti yok", denetle: (o) => { const f = headDosyalari(o)["fiyat.js"]; return !!f && !ISARET.test(f); } },
          { aciklama: "Sonuçta hem indirim hem yuvarlama var", denetle: (o) => { const f = headDosyalari(o)["fiyat.js"] ?? ""; return f.includes("indirim") && f.includes("Math.round"); } },
          { aciklama: "Çalışma dizini temiz", denetle: (o) => temizMi(o) },
        ],
      },
      dene: ["gt-u7-sira", "gt-u7-add-anlami", "gt-u7-abort", "gt-u7-commit-reddi"],
    },
    {
      baslik: "Araçlar ve kısayollar",
      metin: md(`
Çakışma çözerken işini kolaylaştıranlar:

- ~git status~: ~Unmerged paths~ altında ~both modified~, ~deleted by them~ gibi açıklamalarla çakışan dosyaları listeler.
- ~git diff~: birleştirme sırasında yalnızca çakışan bölgeleri iki tarafla birlikte gösterir.
- ~git checkout --ours fiyat.js~ ya da ~git checkout --theirs fiyat.js~: dosyanın tamamı için bir tarafı seçer (sonra yine ~git add~). Yalnızca bir tarafın tamamen doğru olduğundan eminsen kullan.
- **Editörler**: VS Code çakışan bölgenin üstüne "Accept Current", "Accept Incoming", "Accept Both" bağlantıları koyar; JetBrains ve GitHub'ın web editörü de benzerini yapar. Hangi araç olursa olsun sonucu **çalıştırıp denemek** senin işin.

Bir dosyayı yarım çözüp ~git add~ yaparsan Git işaretleri fark etmez ve bozuk dosyayı commit'ler. ~git diff --check~ kalan işaretleri yakalamaya yardım eder.

Bu sefer işin kolay tarafını dene: ~indirim~ dalının sürümü tamamen doğru kabul edilmiş.
`),
      git: {
        dosyalar: { "fiyat.js": FIYAT },
        kurulum: [...CAKISMA_KUR, "! git merge indirim"],
        gorev: "Birleştirme çakışmayla durmuş. Ekip ~indirim~ dalının sürümünü seçti: ~fiyat.js~ için gelen tarafı al, çözüldü olarak işaretle ve birleştirmeyi bitir.",
        oneriler: ["git status", "git diff", "git checkout --theirs fiyat.js", "git add fiyat.js", 'git commit -m "indirim birleşti"'],
        hedefler: [
          { aciklama: "Birleştirme bitti", denetle: (o) => birlesimVar(o) && !o.depo!.islem },
          { aciklama: "~fiyat.js~ indirim dalının sürümünde", denetle: (o) => (headDosyalari(o)["fiyat.js"] ?? "").includes("1 - indirim") && !(headDosyalari(o)["fiyat.js"] ?? "").includes("Math.round") },
        ],
      },
      dene: ["gt-u7-status-unmerged", "gt-u7-theirs", "gt-u7-diff-cakisma"],
    },
    {
      baslik: "Çakışmaları azaltmak",
      metin: md(`
Çakışmalar tamamen bitmez ama küçültülebilir:

- **Küçük ve kısa ömürlü dallar**: bir dal haftalarca açık kalırsa ana dal çok ilerler ve çakışma büyür. İşi küçük parçalara böl, sık birleştir.
- **Ana dalı sık al**: uzun süren bir işte ara ara ~git merge main~ yapıp (ya da 10. ünitede göreceğin rebase ile) güncel kal; çakışmaları küçükken çöz.
- **Ortak biçimlendirici**: biri sekme biri boşluk kullanırsa her satır "değişmiş" görünür. Prettier, Black gibi bir biçimlendiriciyi herkes aynı ayarla kullanmalı.
- **İletişim**: aynı dosyada büyük bir değişiklik yapacaksan ekibe haber ver.
- **Kilit dosyaları** (~package-lock.json~ gibi): elle düzenleme; birini seçip bağımlılıkları yeniden kurarak dosyayı yeniden üret.

Geçen yılın akış kağıdındaki "her iş kendi ~feature/~ dalında, PR ile ve küçük" kuralının bir nedeni de budur.
`),
      dene: ["gt-u7-kucuk-dal", "gt-u7-bicimlendirici"],
    },
  ],
  test: [
    "gt-u7-sil-degistir", "gt-u7-ucu-de", "gt-u7-continue", "gt-u7-editor", "gt-u7-ana-dali-al", "gt-u7-kilit-dosya",
  ],
};
