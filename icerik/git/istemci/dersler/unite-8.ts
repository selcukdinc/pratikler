import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_8: Ders = {
  hafta: 8,
  baslik: "GitHub'da Birlikte Çalışmak",
  ozet: "Pull request açmayı, kod incelemesini, üç birleştirme yöntemini, fork ile açık kaynağa katkıyı ve issue'larla iş takibini bir PR'ın baştan sona yaşamı üzerinden gör.",
  bolumler: [
    {
      baslik: "Pull request nedir?",
      metin: md(`
Dalını kendi bilgisayarında ~main~'e birleştirip push edebilirsin; ama ekipte bu yapılmaz. Bunun yerine dalı GitHub'a gönderir ve **pull request** (PR, çekme isteği) açarsın: "Bu dalımdaki değişiklikleri ~main~'e almanızı istiyorum." GitLab'da aynı şeyin adı **merge request**'tir (MR).

PR bir Git özelliği değil, **platformun** özelliğidir. Bir sayfada şunları toplar: değişen satırlar, açıklama, yorumlar, otomatik testlerin sonucu ve onaylar.

PR sayfasının üstünde iki dal yazar:

- **base**: değişikliklerin gideceği dal (ör. ~main~, ~dev~).
- **compare** (head): değişikliklerin geldiği dal (ör. ~feature/US-D21-indirim-kodu~).

PR açıkken aynı dala yeni commit push edersen **PR kendiliğinden güncellenir**; yeni PR açman gerekmez. Henüz bitmemiş bir işi göstermek için **Draft** (taslak) PR açılır; taslak birleştirilemez, hazır olunca "Ready for review" denir.

Açmadan önce: dalı ana dalla güncelle, kendi diff'ine bir kez sen bak, testleri çalıştır, açıklamaya **ne** ve **neden** yaz. Küçük PR'lar daha hızlı ve daha iyi incelenir.
`),
      dene: ["gt-u8-pr-nedir", "gt-u8-base-compare", "gt-u8-pr-guncelleme"],
    },
    {
      baslik: "Bir PR'ın yaşamı",
      metin: md(`
Aşağıdaki PR'ı baştan sona götür: testler kırmızı, Ayşe'ye inceletiyorsun, düzeltmeyi push ediyorsun, onay geliyor ve birleştiriyorsun. Birleştirme yöntemini değiştirip ~main~'in geçmişinin nasıl farklılaştığına bak.

[[G-H8-01]]

"Birleştir" düğmesinin kontroller yeşil olmadan ve onay gelmeden açılmaması **dal korumasıdır** (branch protection). Geçen yılın akış kağıdındaki kurallar tam olarak bunlar: korumalı dallara doğrudan push yok, her değişiklik PR ile gelir, pipeline geçmeli, en az bir onay şart, birleşince dal silinir. Bunları 11. ünitede kendi deponda kuracaksın.
`),
      dene: ["gt-u8-draft", "gt-u8-kucuk-pr", "gt-u8-pr-oncesi"],
    },
    {
      baslik: "Kod incelemesi",
      metin: md(`
İnceleyen kişi PR'ın "Files changed" sekmesinde satırlara yorum yazar ve sonunda üç karardan birini verir:

- **Comment**: yalnızca yorum, karar yok.
- **Approve**: onay; birleştirilebilir.
- **Request changes**: değişiklik iste; düzeltilmeden birleştirilmemeli.

İyi bir inceleme yorumu **kodu** konuşur, kişiyi değil; nedenini söyler ve mümkünse öneri getirir: "Kod boşsa ~INDIRIMLER[kod]~ undefined döner; ~?.~ ile korumak ister misin?" "Bu ne biçim kod" ise işe yaramaz.

Neden inceleme? Hataları erken yakalar, bilgiyi ekipte yayar (kodu en az iki kişi bilir) ve ortak bir kod tarzı oluşturur. Kendi PR'ını onaylayamazsın: GitHub yazarın kendi onayını saymaz.

Onaydan sonra yeni commit push edersen ayara göre eski onaylar düşebilir ("Dismiss stale approvals"); böylece onaylanmamış kod gizlice girmez.
`),
      dene: ["gt-u8-review-turleri", "gt-u8-iyi-yorum", "gt-u8-kendi-onay"],
    },
    {
      baslik: "Üç birleştirme yöntemi",
      metin: md(`
GitHub'daki birleştirme düğmesinin üç seçeneği vardır:

| Yöntem | Ne olur? | Ne zaman? |
|---|---|---|
| **Create a merge commit** | Dalın bütün commit'leri gelir, üstüne iki ebeveynli bir birleştirme commit'i eklenir. | Dalın geçmişi anlamlıysa, "bu iş bir PR'dı" izi kalsın isteniyorsa. |
| **Squash and merge** | Dalın bütün commit'leri **tek** commit'e sıkıştırılır. | "wip", "düzelttim", "yine düzelttim" gibi ara commit'ler varsa; ana dalda her PR tek satır olsun isteniyorsa. |
| **Rebase and merge** | Commit'ler tek tek ana dalın ucuna yeni kimliklerle dizilir; birleştirme commit'i olmaz. | Düz, çizgisel bir geçmiş isteniyorsa ve dalın commit'leri temizse. |

Squash ve rebase commit'lerin kimliğini değiştirir: birleştikten sonra yereldeki eski dalı silmek gerekir, yoksa aynı iş iki kez görünür. Hangisini kullanacağınız ekip kararıdır; depo ayarlarından yalnızca birine izin verilebilir.
`),
      dene: ["gt-u8-squash", "gt-u8-merge-commit", "gt-u8-squash-ne-zaman"],
    },
    {
      baslik: "Fork ile açık kaynağa katkı",
      metin: md(`
Ekibinin deposuna yazma iznin vardır; ama bir açık kaynak projeye push edemezsin. Çözüm **fork**: GitHub'da projenin **kendi hesabına** bir kopyasını oluşturur. Akış:

1. GitHub'da **Fork** düğmesi: ~github.com/sen/proje~ oluşur.
2. Kendi fork'unu klonla, dal aç, commit'le, **kendi fork'una** push et.
3. Fork'undaki dalından asıl projeye PR aç.

Fork ile clone farkı: clone **bilgisayarına** kopyalar; fork **GitHub'da, kendi hesabına** kopyalar.

Asıl proje ilerlemeye devam eder. Onu takip etmek için ikinci bir uzak depo eklenir; geleneksel adı ~upstream~'dir:

~~~
git remote add upstream https://github.com/acik/proje.git
git fetch upstream
git merge upstream/main
~~~

Böylece ~origin~ senin fork'un, ~upstream~ asıl projedir. GitHub'ın fork sayfasındaki **Sync fork** düğmesi de aynı işi yapar.
`),
      dene: ["gt-u8-fork-nedir", "gt-u8-fork-vs-clone", "gt-u8-upstream"],
    },
    {
      baslik: "Issue'lar",
      metin: md(`
**Issue** platformdaki iş kaydıdır: hata bildirimi, özellik isteği ya da soru. Her issue'nun bir numarası (#37), etiketleri (~bug~, ~enhancement~), atanan kişisi ve tartışması olur.

İyi bir hata issue'su şunları yazar: ne yaptın (adımlar), ne bekliyordun, ne oldu, hangi sürüm/ortam, varsa ekran görüntüsü ya da hata mesajı. "Çalışmıyor" yazan issue çözülemez.

PR açıklamasına ya da commit mesajına anahtar kelime yazınca PR birleştiğinde issue **kendiliğinden kapanır**:

~~~
Closes #37      (ayrıca: Fixes #37, Resolves #37)
~~~

Yalnızca ~#37~ yazmak bağlantı kurar ama kapatmaz. GitLab'da da aynı kelimeler çalışır. Geçen yılın akış kağıdındaki ~US-D03e~ gibi iş numaraları dal adına yazılarak aynı bağ kurulur.
`),
      dene: ["gt-u8-issue-nedir", "gt-u8-closes", "gt-u8-iyi-issue"],
    },
  ],
  test: [
    "gt-u8-neden-inceleme", "gt-u8-onay-sonrasi", "gt-u8-rebase-merge", "gt-u8-fork-guncel", "gt-u8-yetki", "gt-u8-etiket-atama",
  ],
};
