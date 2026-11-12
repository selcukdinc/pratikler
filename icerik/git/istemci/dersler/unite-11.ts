import { md, type Ders } from "../../../../src/dersler/tipler";
import { ataMi, commitOku, gecmis } from "../../../../src/gitsim/depo";
import { headDosyalari } from "../../../../src/gitsim/gorev";
import type { Ortam } from "../../../../src/gitsim/tipler";

const ISARET = /^(<{7}|={7}|>{7})/m;
const uc = (o: Ortam, dal: string) => o.depo?.refs[`refs/heads/${dal}`] ?? null;
// main'de olmayan, dalın kendi commit'lerinin mesajları (yeniden eskiye)
const dalMesajlari = (o: Ortam, dal: string): string[] => {
  const d = o.depo;
  const h = uc(o, dal);
  const m = uc(o, "main");
  return d && h ? gecmis(d, [h], m ? [m] : []).map((c) => commitOku(d, c).mesaj.trim()) : [];
};
const birlesimVar = (o: Ortam, dal: string) => {
  const d = o.depo;
  const h = uc(o, dal);
  return !!d && !!h && gecmis(d, [h]).some((c) => commitOku(d, c).ebeveynler.length > 1);
};
// main'in ucu dalın geçmişinde mi (dal main'in üstünde mi)
const mainUstunde = (o: Ortam, dal: string) => {
  const d = o.depo;
  const h = uc(o, dal);
  const m = uc(o, "main");
  return !!d && !!h && !!m && h !== m && ataMi(d, m, h);
};

const MENU = { "menu.txt": "kahve 40\ncay 20\n", "README.md": "# Kafe Mavi\n" };
const AYRILMIS = [
  "git init", "git add .", 'git commit -m "Menü"',
  "git switch -c ozellik",
  'echo "Yaz kampanyası" > kampanya.txt', "git add kampanya.txt", 'git commit -m "Kampanya metni"',
  'echo "%20 indirim" >> kampanya.txt', 'git commit -am "İndirim oranı"',
  "git switch main",
  'echo "Adres: Liman Cad. 5" >> README.md', 'git commit -am "Adres eklendi"',
  'echo "Saat: 08-22" >> README.md', 'git commit -am "Çalışma saatleri"',
  "git switch ozellik",
];

export const UNITE_11: Ders = {
  hafta: 11,
  baslik: "Rebase",
  ozet: "Commit'lerini başka bir tabana taşı, geçmişi düz tut, PR'dan önce dağınık commit'leri toparla. Rebase güçlüdür ama bir kuralı vardır: paylaşılmış geçmişe dokunma.",
  bolumler: [
    {
      baslik: "Rebase nedir?",
      metin: md(`
~ozellik~ dalını ~main~'den açtın, iki commit attın. Bu arada ~main~ de iki commit ilerledi. Dalını güncellemenin ikinci yolu (birincisi merge):

~~~
git rebase main
~~~

Git şunu yapar:
1. ~ozellik~'in ~main~'den ayrıldıktan sonraki commit'lerini (C, D) bir kenara alır,
2. dalı ~main~'in şu anki ucuna taşır,
3. C ve D'yi **tek tek yeniden uygular**.

Sonuç: dal sanki main'in en son hâlinden açılmış gibi görünür. İçerik aynı, ama ebeveynleri değiştiği için **yeni commit'ler** oluşur (C', D'): hash'ler değişir. Eski C ve D bir süre reflog'da kalır.

Şekilde "Önce", "merge" ve "rebase" arasında geçip farkı gör:

[[G-H11-01]]
`),
      git: {
        dosyalar: MENU,
        kurulum: AYRILMIS,
        gorev: "~ozellik~ dalı main'den ayrıldıktan sonra main'e iki commit geldi. ~git log --oneline --all~ ile bak, dalını birleştirme commit'i oluşturmadan main'in ucuna taşı. Commit kimliklerinin değiştiğine dikkat et.",
        oneriler: ["git log --oneline --all", "git rebase main", "git log --oneline"],
        hedefler: [
          { aciklama: "~ozellik~ main'in ucunun üstünde", denetle: (o) => mainUstunde(o, "ozellik") },
          { aciklama: "Birleştirme commit'i yok", denetle: (o) => !!uc(o, "ozellik") && !birlesimVar(o, "ozellik") },
          { aciklama: "Dalın iki commit'i duruyor", denetle: (o) => dalMesajlari(o, "ozellik").length === 2 },
        ],
      },
      dene: ["gt-u11-ne-yapar", "gt-u11-yeni-hash", "gt-u11-rebase-komut"],
    },
    {
      baslik: "Merge mi rebase mi?",
      metin: md(`
İkisi de aynı soruyu çözer: "Başka dalda olanları benim dalıma nasıl getiririm?" Fark geçmişin nasıl görüneceğinde:

| | merge | rebase |
|---|---|---|
| Geçmiş | Olduğu gibi, çatallı | Düz bir çizgi |
| Yeni commit | Bir birleştirme commit'i | Taşınan her commit yeniden yazılır |
| Hash'ler | Değişmez | Taşınanlarınki değişir |
| Çakışma | Tek seferde çözülür | Her commit için ayrı çıkabilir |
| Paylaşılmış dalda | Güvenli | Tehlikeli |

Pratikte çoğu ekip ikisini birlikte kullanır:
- **Kendi dalında**, PR açmadan önce: ~git rebase main~ (ya da ~git pull --rebase~). Dalın güncel, geçmişin temiz olur.
- **Ortak dallarda** (main, test, dev): birleştirme PR ile yapılır; geçmiş yeniden yazılmaz.

GitHub'daki PR düğmesinin üç seçeneği de bununla ilgili: "Create a merge commit" merge yapar, "Squash and merge" bütün commit'leri tek commit'e sıkıştırır, "Rebase and merge" commit'leri tek tek hedefin ucuna yazar.

Rebase de çakışmadan kurtarmaz; yalnızca çakışmaları commit commit çözdürür.
`),
      dene: ["gt-u11-fark", "gt-u11-duz-gecmis"],
    },
    {
      baslik: "Etkileşimli rebase: geçmişi toparla",
      metin: md(`
PR açmadan önce dalına bak: "yazım hatası", "bir yazım hatası daha", "deneme console.log"... İnceleyen kişi bunları görmek istemez. **Etkileşimli rebase** commit'lerini bir yapılacaklar listesinde açar:

~~~
git rebase -i main
~~~

(Belirli sayıda commit için ~git rebase -i HEAD¬3~ de yazılabilir.) Açılan listede en **eski** commit en üsttedir. Her satırın başındaki kelimeyi değiştirirsin:

| Komut | Kısa | Ne yapar? |
|---|---|---|
| ~pick~ | ~p~ | Olduğu gibi al |
| ~reword~ | ~r~ | Al, mesajını değiştir |
| ~squash~ | ~s~ | Öncekine kat, mesajları birleştir |
| ~fixup~ | ~f~ | Öncekine kat, mesajını at |
| ~drop~ | ~d~ | Geçmişten çıkar (satırı silmek de aynıdır) |
| ~edit~ | ~e~ | Bu commit'te dur, değiştirmene izin ver |

Satırların **yerini değiştirirsen** commit'ler o sırayla uygulanır. Listeyi kaydedip kapatınca Git yukarıdan aşağıya uygular.

Önce şekilde dene, sonra terminalde gerçeğini yap:

[[G-H11-02]]

Terminalde ~git rebase -i main~ yazınca düzenleyici açılır. ~pick~ kelimelerini değiştir ve **Kaydet**'e bas. ~squash~ ya da ~reword~ seçtiysen Git ikinci kez açıp mesajı sorar.
`),
      git: {
        dosyalar: MENU,
        kurulum: [
          "git init", "git add .", 'git commit -m "Menü"',
          "git switch -c giris",
          'echo "<form>giris</form>" > giris.html', "git add giris.html", 'git commit -m "Giriş formu"',
          'echo "<form>giriş</form>" > giris.html', 'git commit -am "yazım hatası"',
          'echo "console.log(1)" > hata-ayikla.js', "git add hata-ayikla.js", 'git commit -m "deneme console.log"',
          'echo "test: giris" > giris.test.js', "git add giris.test.js", 'git commit -m "Giriş testleri"',
        ],
        gorev: "PR açmadan önce ~giris~ dalını toparla: ~git rebase -i main~ ile \"yazım hatası\" commit'ini fixup yapıp Giriş formuna kat, \"deneme console.log\" commit'ini drop ile çıkar.",
        oneriler: ["git log --oneline", "git rebase -i main", "git log --oneline"],
        editorCozum: [(m) => m.replace(/^pick (\w+) yazım hatası/m, "fixup $1 yazım hatası").replace(/^pick (\w+) deneme/m, "drop $1 deneme")],
        hedefler: [
          { aciklama: "Dalda yalnızca iki commit kaldı", denetle: (o) => dalMesajlari(o, "giris").length === 2 && !o.depo?.islem },
          { aciklama: "\"yazım hatası\" commit'i Giriş formuna katıldı", denetle: (o) => !dalMesajlari(o, "giris").includes("yazım hatası") && (headDosyalari(o)["giris.html"] ?? "").includes("giriş") },
          { aciklama: "~hata-ayikla.js~ geçmişten çıktı", denetle: (o) => !!o.depo && !("hata-ayikla.js" in headDosyalari(o)) && !dalMesajlari(o, "giris").includes("deneme console.log") },
        ],
      },
      dene: ["gt-u11-i-ne", "gt-u11-squash", "gt-u11-fixup", "gt-u11-i-komut"],
    },
    {
      baslik: "Altın kural: paylaşılmış geçmişe dokunma",
      metin: md(`
Rebase (ve ~--amend~, ~reset~) commit'leri **yeniden yazar**. Senin bilgisayarında bu sorun değil. Ama bu commit'leri başkası da çektiyse:

1. Sen dalı rebase edip ~--force~ ile gönderirsin.
2. Ayşe'nin elindeki kopya hâlâ eski commit'lere dayanır.
3. Ayşe ~git pull~ yapınca eski ve yeni commit'ler birbirine karışır: aynı değişiklik iki kez, anlamsız çakışmalar, kirli bir geçmiş.

Bu yüzden kural basittir: **başkalarının da kullandığı, gönderilmiş commit'leri rebase etme.**

| Rebase serbest | Rebase yasak |
|---|---|
| Henüz push etmediğin commit'ler | ~main~, ~test~, ~dev~ gibi ortak dallar |
| Yalnızca senin çalıştığın özellik dalı (PR öncesi ya da sonrası, ~--force-with-lease~ ile) | Başkasının da commit attığı bir dal |

Cargo Pilot akışında karşılığı: ~feature/US-D03e-docker-compose-local~ dalını ~test~'ten açarsın. PR açmadan önce o dalı güncel ~test~'in üstüne rebase etmek serbesttir; ~dev~, ~test~ ve ~main~ ise korumalıdır, force push kapalıdır ve yalnızca PR ile ilerler. ~dev~ hiçbir zaman toptan ~test~'e taşınmaz; aynı özellik dalı iki ayrı PR ile önce ~dev~'e, sonra ~test~'e gider.

Biri ortak dalı yeniden yazdıysa ve senin yerelde gönderilmemiş commit'in varsa: commit'ini bir dalda koru, ~git reset --hard origin/dev~ ile eşitle, commit'ini ~cherry-pick~ ile yeni ucun üstüne al.
`),
      dene: ["gt-u11-kural", "gt-u11-kendi-dal"],
    },
    {
      baslik: "Rebase'de çakışma",
      metin: md(`
Rebase commit'leri tek tek uygular. Biri ~main~'deki bir değişiklikle aynı satıra dokunuyorsa rebase **o commit'te durur**:

~~~
CONFLICT (content): Merge conflict in menu.txt
error: could not apply a496d3b... Kahve zammı
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
~~~

Bu sırada HEAD kopuktur, dalın yarı taşınmıştır. Üç çıkış yolu var:

| Komut | Ne yapar? |
|---|---|
| ~git rebase --continue~ | Dosyayı düzeltip ~git add~ ettikten sonra: commit'i yazar, sıradakine geçer |
| ~git rebase --skip~ | Bu commit'i yeni geçmişe almadan atlar (işi kaybolur) |
| ~git rebase --abort~ | Her şeyi rebase başlamadan önceki hâline döndürür |

Dikkat: rebase'de ~--ours~ ve ~--theirs~ merge'tekinin **tersidir**. Rebase, ~main~'in ucunda yeni bir HEAD kurup senin commit'lerini ona uyguladığı için "ours" taban (main), "theirs" senin taşınan commit'indir. Çakışma işaretlerinde de ~HEAD~ main tarafını gösterir.

Beş commit'lik dalda aynı yer üç kez çakışıyorsa önce ~git rebase -i~ ile commit'leri birleştir, sonra rebase et: çakışmayı bir kez çözersin.
`),
      git: {
        dosyalar: MENU,
        kurulum: [
          "git init", "git add .", 'git commit -m "Menü"',
          "git switch -c ozellik",
          "printf 'kahve 45\\ncay 20\\nsut 15\\n' > menu.txt", 'git commit -am "Kahve zammı ve süt"',
          "git switch main",
          "printf 'kahve 50\\ncay 20\\n' > menu.txt", 'git commit -am "Kahve 50"',
          "git switch ozellik",
        ],
        gorev: "~ozellik~ dalını main'in üstüne taşı. Çakışmada kahvenin main'deki fiyatı (50) kalsın, süt satırı da korunsun. Çözünce rebase'i bitir.",
        oneriler: ["git rebase main", "git status", "cat menu.txt", "printf 'kahve 50\\ncay 20\\nsut 15\\n' > menu.txt", "git add menu.txt", "git rebase --continue", "git log --oneline"],
        hedefler: [
          { aciklama: "Rebase bitti, ~ozellik~ main'in üstünde", denetle: (o) => !o.depo?.islem && mainUstunde(o, "ozellik") },
          { aciklama: "~menu.txt~'te çakışma işareti yok, kahve 50 ve süt var", denetle: (o) => { const f = headDosyalari(o)["menu.txt"] ?? ""; return !ISARET.test(f) && f.includes("kahve 50") && f.includes("sut 15"); } },
        ],
      },
      dene: ["gt-u11-continue", "gt-u11-abort", "gt-u11-skip"],
    },
  ],
  test: [
    "gt-u11-eski-commitler", "gt-u11-zaten-guncel", "gt-u11-ne-zaman-rebase", "gt-u11-ne-zaman-merge", "gt-u11-graf-okuma", "gt-u11-rebase-merge-pr",
    "gt-u11-pr-oncesi", "gt-u11-squash-ilk", "gt-u11-edit", "gt-u11-sira", "gt-u11-push-sonrasi", "gt-u11-ortak-dal",
    "gt-u11-tekrar-cakisma", "gt-u11-ours-theirs",
  ],
};
