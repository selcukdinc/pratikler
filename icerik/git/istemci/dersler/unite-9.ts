import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitOku, headCommit, gecmis } from "../../../../src/gitsim/depo";
import { commitSayisi, dalAdiniAl, headDosyalari, sonMesaj, temizMi } from "../../../../src/gitsim/gorev";
import type { Ortam } from "../../../../src/gitsim/tipler";

const mesajlar = (o: Ortam) => {
  const d = o.depo;
  const h = d && headCommit(d);
  return d && h ? gecmis(d, [h]).map((c) => commitOku(d, c).mesaj.trim()) : [];
};

const AYAR = { "ayarlar.js": "export const TEMA = \"acik\";\nexport const DIL = \"tr\";\n", "app.js": "import { TEMA } from \"./ayarlar.js\";\nconsole.log(TEMA);\n" };
const AYAR_KUR = ["git init", "git add .", 'git commit -m "Ayarlar"'];

export const UNITE_9: Ders = {
  hafta: 9,
  baslik: "Geri Almak",
  ozet: "Yanlış giden her şeyin bir geri dönüşü var: restore, reset'in üç kipi, revert, amend, stash ve son kurtarıcı reflog. Hangisinin güvenli, hangisinin yalnızca yerelde kullanılacağını öğren.",
  bolumler: [
    {
      baslik: "Hangi geri alma, ne zaman?",
      metin: md(`
"Geri al" Git'te tek komut değildir; **neyi** geri almak istediğine göre araç değişir:

| Durum | Araç |
|---|---|
| Dosyadaki kaydedilmemiş değişiklikten vazgeç | ~git restore dosya~ |
| Hazırlık alanından çıkar | ~git restore --staged dosya~ |
| Son commit'in mesajını düzelt ya da unuttuğun dosyayı ekle | ~git commit --amend~ |
| Henüz paylaşılmamış commit'leri geri sar | ~git reset~ |
| Paylaşılmış (push edilmiş) bir commit'in etkisini kaldır | ~git revert~ |
| Yarım işi kenara koy, sonra geri al | ~git stash~ |
| "Her şeyi kaybettim" | ~git reflog~ |

Altın kural: **paylaşılmış geçmişi yeniden yazma.** ~reset~ ve ~--amend~ commit'leri değiştirir ya da atar; başkası o commit'leri çektiyse geçmişler ayrışır. Push edilmiş bir şeyi geri almanın güvenli yolu ~revert~'tür.
`),
    },
    {
      baslik: "restore: dosyayı geri getir",
      metin: md(`
Bir dosyayı bozdun ve son commit'teki hâline dönmek istiyorsun:

~~~
git restore ayarlar.js
~~~

Dikkat: bu **commit'lenmemiş değişikliği geri dönüşsüz siler**. Ne Git'te ne çöp kutusunda kalır.

Dosyayı daha eski bir commit'teki hâline getirmek için ~--source~ verilir:

~~~
git restore --source HEAD¬2 ayarlar.js
~~~

Bu yalnızca dosyayı değiştirir; dal ve geçmiş yerinde kalır. Sonra istersen yeni bir commit'le kaydedersin. Eski sürümlerde aynı iş ~git checkout -- ayarlar.js~ ile yapılırdı.
`),
      git: {
        dosyalar: AYAR,
        kurulum: [...AYAR_KUR, 'echo "export const DEBUG = true;" >> ayarlar.js', 'echo "silindi" > app.js'],
        gorev: "İki dosyayı da yanlışlıkla bozdun. ~git diff~ ile bak, ikisini de son commit'teki hâline döndür.",
        oneriler: ["git status", "git diff", "git restore ayarlar.js", "git restore app.js", "git status"],
        hedefler: [
          { aciklama: "Çalışma dizini temiz", denetle: (o) => temizMi(o) },
          { aciklama: "~app.js~ eski hâlinde", denetle: (o) => (o.dosyalar["app.js"] ?? "").includes("console.log") },
        ],
      },
      dene: ["gt-u9-restore-dosya", "gt-u9-restore-source", "gt-u9-restore-geri-donus"],
    },
    {
      baslik: "reset: dalı geri sar",
      metin: md(`
~git reset~ bulunduğun dalın işaretçisini başka bir commit'e taşır. Üç kipi, işaretçiyle birlikte **başka nelerin** geri gideceğini belirler. Şekilde üçünü karşılaştır:

[[G-H9-01]]

- ~--soft~: yalnızca dal geri gider. Değişiklikler hazırlık alanında kalır; birkaç commit'i tek commit'e toplamak için kullanışlıdır.
- ~--mixed~ (varsayılan): dal ve hazırlık alanı geri gider, değişiklikler dosyalarda kalır.
- ~--hard~: dal, hazırlık alanı ve çalışma dizini geri gider. **Commit'lenmemiş değişiklikler kaybolur.**

~git reset HEAD¬1~ "son commit'i geri al ama yaptığım işi silme" demektir. ~reset~ geçmişi yeniden yazdığı için yalnızca **henüz push etmediğin** commit'lerde kullan.
`),
      git: {
        dosyalar: AYAR,
        kurulum: [...AYAR_KUR, 'echo "export const RENK = \\"mavi\\";" >> ayarlar.js', 'git commit -am "wip"', 'echo "export const BOYUT = 14;" >> ayarlar.js', 'git commit -am "wip 2"'],
        gorev: "Henüz push etmediğin iki \"wip\" commit'i var. ~--soft~ ile ikisini geri sar ve değişiklikleri ~Tema seçenekleri~ mesajıyla tek commit'te topla.",
        oneriler: ["git log --oneline", "git reset --soft HEAD~2", "git status", 'git commit -m "Tema seçenekleri"', "git log --oneline"],
        hedefler: [
          { aciklama: "Geçmişte \"wip\" commit'i kalmadı", denetle: (o) => !!o.depo && !mesajlar(o).some((m) => m.startsWith("wip")) },
          { aciklama: "Toplam iki commit var", denetle: (o) => commitSayisi(o) === 2 },
          { aciklama: "Son commit'te iki yeni ayar da var", denetle: (o) => { const f = headDosyalari(o)["ayarlar.js"] ?? ""; return f.includes("RENK") && f.includes("BOYUT"); } },
        ],
      },
      dene: ["gt-u9-soft", "gt-u9-mixed", "gt-u9-hard", "gt-u9-paylasilmis-reset"],
    },
    {
      baslik: "revert: paylaşılmış commit'i geri al",
      metin: md(`
Hatalı commit ~main~'e girdi, ekip çekti, hatta canlıya çıktı. Geçmişi silmek yerine **ters commit** at:

~~~
git revert HEAD
~~~

~revert~ verilen commit'in yaptığını tersine çeviren **yeni** bir commit oluşturur (mesajı ~Revert "..."~). Geçmiş silinmez, yalnızca ileri gider; bu yüzden paylaşılmış dallarda güvenlidir ve geri alındığı da kayıtlı kalır. Daha eski bir commit için kimliğini verirsin: ~git revert a1b2c3d~.

Sonradan gelen commit'ler aynı satırlara dokunduysa revert de çakışabilir; çözümü birleştirmedeki gibidir (~git add~, sonra ~git revert --continue~).
`),
      git: {
        dosyalar: AYAR,
        kurulum: [...AYAR_KUR, 'echo "export const ODEME = \\"kapali\\";" >> ayarlar.js', 'git commit -am "Ödemeyi kapat (hatalı)"'],
        gorev: "Son commit canlıda ödemeyi kapattı ve bu commit çoktan push edildi. Geçmişi silmeden etkisini geri al.",
        oneriler: ["git log --oneline", "git show HEAD", "git revert HEAD", "git log --oneline"],
        hedefler: [
          { aciklama: "Hatalı commit geçmişte duruyor", denetle: (o) => mesajlar(o).some((m) => m.startsWith("Ödemeyi kapat")) },
          { aciklama: "Üstüne bir Revert commit'i geldi", denetle: (o) => sonMesaj(o).startsWith("Revert") },
          { aciklama: "~ayarlar.js~'te ODEME satırı yok", denetle: (o) => !(headDosyalari(o)["ayarlar.js"] ?? "ODEME").includes("ODEME") },
        ],
      },
      dene: ["gt-u9-revert-nedir", "gt-u9-revert-komut", "gt-u9-canlida-hata"],
    },
    {
      baslik: "amend: son commit'i düzelt",
      metin: md(`
Commit'i attın ve mesajda yazım hatası gördün ya da bir dosyayı eklemeyi unuttun:

~~~
git commit --amend -m "Giris formu duzeltildi"
~~~

Unutulan dosya için önce ~git add unutulan.js~, sonra ~git commit --amend --no-edit~ (mesaj aynı kalır).

~--amend~ son commit'i **değiştirmez, yenisiyle değiştirir**: kimliği değişir. Bu yüzden ~reset~ gibi yalnızca push etmediğin commit için kullan.
`),
      dene: ["gt-u9-amend-mesaj", "gt-u9-amend-kimlik", "gt-u9-amend-unutulan"],
    },
    {
      baslik: "stash: yarım işi kenara koy",
      metin: md(`
~ozellik~ dalında yarım bir iş var, commit'lenecek durumda değil. Tam o sırada acil bir hata geliyor ve ~main~'e geçmen gerek. Yarım işi **kenara koy**:

~~~
git stash          # değişiklikleri sakla, çalışma dizinini temizle
git switch main    # ... hatayı düzelt, commit'le ...
git switch ozellik
git stash pop      # sakladığını geri getir ve listeden sil
~~~

- ~git stash list~ saklananları listeler (~stash@{0}~ en yenisi).
- ~git stash apply~ geri getirir ama listeden silmez.
- Varsayılan olarak **izlenmeyen dosyalar saklanmaz**; onlar için ~git stash -u~.
`),
      git: {
        dosyalar: AYAR,
        kurulum: [...AYAR_KUR, "git switch -c ozellik", 'echo "export const YAZI_TIPI = \\"serif\\";" >> ayarlar.js'],
        gorev: "~ozellik~'te yarım iş var. Kenara koy, ~main~'e geç, ~app.js~'teki ~console.log~ satırını ~console.info~ yap ve commit'le. Sonra ~ozellik~'e dön ve yarım işini geri getir.",
        oneriler: ["git status", "git stash", "git switch main", "printf 'import { TEMA } from \"./ayarlar.js\";\\nconsole.info(TEMA);\\n' > app.js", 'git commit -am "Acil: log seviyesi"', "git switch ozellik", "git stash pop"],
        hedefler: [
          { aciklama: "~main~'de acil düzeltme commit'i var", denetle: (o) => { const d = o.depo; const m = d?.refs["refs/heads/main"]; return !!d && !!m && commitOku(d, m).mesaj.startsWith("Acil"); } },
          { aciklama: "~ozellik~'e döndün ve yarım iş dosyada", denetle: (o) => dalAdiniAl(o) === "ozellik" && (o.dosyalar["ayarlar.js"] ?? "").includes("YAZI_TIPI") },
          { aciklama: "Kenarda saklanan bir şey kalmadı", denetle: (o) => !!o.depo && o.depo.stash.length === 0 },
        ],
      },
      dene: ["gt-u9-stash-nedir", "gt-u9-stash-pop", "gt-u9-izlenmeyen"],
    },
    {
      baslik: "reflog: son kurtarıcı",
      metin: md(`
~git reset --hard~ ile commit'leri "sildin" ya da birleşmemiş bir dalı ~-D~ ile attın. Commit'ler aslında hemen silinmez; yalnızca onları gösteren işaretçi gitmiştir. **reflog**, HEAD'in gittiği her yerin yerel kaydıdır:

~~~
git reflog
a1b2c3d HEAD@{0}: reset: moving to HEAD¬2
9f8e7d6 HEAD@{1}: commit: Ödeme sayfası
...
~~~

Kaybolan commit'in kimliğini bul ve geri dön: ~git reset --hard 9f8e7d6~ ya da onu gösteren bir dal aç: ~git branch kurtarilan 9f8e7d6~.

Sınırları: reflog **yereldir** (GitHub'da yoktur, klonlayınca gelmez) ve kayıtlar varsayılan olarak 90 gün tutulur. Hiç commit'lenmemiş değişiklikleri kurtaramaz; bu yüzden "sık commit at" iyi bir sigortadır.
`),
      git: {
        dosyalar: AYAR,
        kurulum: [...AYAR_KUR, 'echo "export const ODEME = \\"acik\\";" >> ayarlar.js', 'git commit -am "Ödeme sayfası"', 'echo "export const KARGO = 30;" >> ayarlar.js', 'git commit -am "Kargo ücreti"', "git reset --hard HEAD~2"],
        gorev: "Biri ~git reset --hard HEAD¬2~ yaptı ve iki commit \"kayboldu\". ~git reflog~ ile ~Kargo ücreti~ commit'ini bul ve ~main~'i ona geri getir.",
        oneriler: ["git log --oneline", "git reflog", "git reset --hard HEAD@{1}", "git log --oneline"],
        hedefler: [
          { aciklama: "~Kargo ücreti~ yeniden ~main~'in ucunda", denetle: (o) => sonMesaj(o) === "Kargo ücreti" },
          { aciklama: "Üç commit de geçmişte", denetle: (o) => commitSayisi(o) === 3 },
        ],
      },
      dene: ["gt-u9-reflog-nedir", "gt-u9-hard-kurtar", "gt-u9-reflog-yerel"],
    },
  ],
  test: [
    "gt-u9-unstage-reset", "gt-u9-revert-cakisma", "gt-u9-acil-hata", "gt-u9-silinen-dal",
  ],
};
