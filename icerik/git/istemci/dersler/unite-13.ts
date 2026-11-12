import { md, type Ders } from "../../../../src/dersler/tipler";
import { CI_LINT, KAFE, KAFE_TEMEL, platform, prVar, uzakDosya, uzakUc } from "../kafe";

const KORUMALI = [...KAFE_TEMEL, platform({ korumalar: { main: { prZorunlu: true } } }), `git clone ${KAFE}`];

export const UNITE_13: Ders = {
  hafta: 13,
  baslik: "Korumalar ve Otomasyon",
  ozet: "Kurallar insanların iyi niyetine bırakılmaz: dal korumaları doğrudan push'u, onaysız ve testsiz birleştirmeyi engeller; CI her PR'ı kendiliğinden denetler. Kuralları aç, ihlal etmeye çalış, sonra kurallara uyarak birleştir.",
  bolumler: [
    {
      baslik: "Dal koruma kuralları",
      metin: md(`
"main'e doğrudan push etmeyin" bir rica olarak kalırsa er geç biri eder. GitHub'da **dal koruma kuralı** (Settings → Branches ya da Rulesets) bu kuralı platforma işletir:

| Ayar | Ne yapar? |
|---|---|
| Require a pull request before merging | Doğrudan push yok, değişiklik yalnızca PR ile |
| Required approvals | Birleştirmeden önce en az N kişinin onayı |
| Require status checks to pass | CI yeşil olmadan birleştirme yok |
| Allow force pushes / deletions | Varsayılan kapalı: geçmiş yeniden yazılamaz, dal silinemez |

Koruma Git'in değil platformun özelliğidir. Kendi bilgisayarında ~main~'e istediğin kadar commit atarsın; kural, onları göndermeye çalıştığında devreye girer:

~~~
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes must be made through a pull request.
 ! [remote rejected] main -> main (protected branch hook declined)
~~~

Önce şekilde kuralları aç kapa ve neyin engellendiğini gör:

[[G-H13-01]]

Sonra terminalde: ~main~'de yerelde bir commit attın ve push reddedildi. İşini kaybetmeden doğru yola dön.
`),
      git: {
        kurulum: [...KORUMALI, 'echo "limonata 30" >> menu.txt', 'git commit -am "Limonata eklendi"'],
        gorev: "Push'u dene ve reddi gör. Commit'ini ~feature/menu-limonata~ dalına taşı, yerel main'i ~origin/main~'e geri al, dalı gönder ve main'e PR aç.",
        oneriler: [
          "git push",
          "git switch -c feature/menu-limonata",
          "git switch main",
          "git reset --hard origin/main",
          "git switch feature/menu-limonata",
          "git push -u origin feature/menu-limonata",
          'gh pr create --base main --title "Limonata"',
        ],
        hedefler: [
          { aciklama: "Yerel main, GitHub'daki main'le aynı", denetle: (o) => !!uzakUc(o, "main") && o.depo?.refs["refs/heads/main"] === uzakUc(o, "main") },
          { aciklama: "Limonata commit'i GitHub'da kendi dalında", denetle: (o) => (uzakDosya(o, "feature/menu-limonata", "menu.txt") ?? "").includes("limonata") },
          { aciklama: "main'e PR açıldı", denetle: (o) => prVar(o, (p) => p.hedef === "main" && p.kaynak === "feature/menu-limonata") },
        ],
      },
      dene: ["gt-u13-ne-ise", "gt-u13-red-mesaji", "gt-u13-force-kapali"],
    },
    {
      baslik: "İnceleme, onay ve CODEOWNERS",
      metin: md(`
"Required approvals: 1" açıkken PR, yazarından başka birinin onayı olmadan birleşmez. Kendi PR'ını onaylayamazsın: incelemenin anlamı ikinci bir gözdür.

İnceleyicinin üç cevabı vardır:
- **Comment**: yorum, karar yok.
- **Approve**: onay.
- **Request changes**: değişiklik iste. Bu kişi onay verene kadar birleştirme kapalıdır.

Değişiklik istendiğinde yeni PR açılmaz: aynı dala commit'leyip push edersin, PR kendiliğinden güncellenir. Bazı ekipler "Dismiss stale approvals" ayarını açar: onaydan sonra gelen yeni commit eski onayı düşürür, böylece incelenmemiş kod sessizce eklenemez.

**CODEOWNERS** hangi dosyayı kimin incelemesi gerektiğini söyler. ~.github/CODEOWNERS~ dosyasında:

~~~
/odeme/        @kafe-mavi/odeme-ekibi
*.yml          @ayse
~~~

Bu dosyalara dokunan PR'lara o kişiler kendiliğinden inceleyici eklenir. Kuralda "Require review from Code Owners" açıksa onların onayı şarttır.

Terminalde bunu yaşa: PR'ını aç, Ayşe değişiklik isteyecek. Düzelt, push et; Ayşe yeniden bakıp onaylayınca birleştir.
`),
      git: {
        kurulum: [
          ...KAFE_TEMEL,
          platform({ korumalar: { main: { prZorunlu: true, onay: 1 } } }),
          `git clone ${KAFE}`,
          "git switch -c feature/menu-limonata",
          'echo "limonata" >> menu.txt',
          'git commit -am "Limonata eklendi"',
          "git push -u origin feature/menu-limonata",
        ],
        gorev: "~gh pr create~ ile main'e PR aç ve ~gh pr view~ ile durumuna bak. Ayşe'nin istediğini yap (limonatanın fiyatı 35), aynı dala push et, onay gelince squash ile birleştir.",
        oneriler: [
          'gh pr create --base main --title "Limonata"',
          "gh pr view",
          "printf 'kahve 40\\nlimonata 35\\n' > menu.txt",
          'git commit -am "Limonata fiyatı"',
          "git push",
          "gh pr view",
          "gh pr merge --squash",
        ],
        olaylar: [
          {
            id: "ayse-degisiklik",
            kosul: (o) => prVar(o, (p) => p.durum === "acik" && !p.onaylar.length && !p.degisiklik.length),
            kim: "ayse",
            komutlar: ["git fetch", "gh pr review feature/menu-limonata --request-changes"],
            bildirim: "Ayşe değişiklik istedi: \"Limonatanın fiyatı yazılmamış, menüde 35 olacak.\"",
          },
          {
            id: "ayse-onay",
            kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.degisiklik.length > 0) && (uzakDosya(o, "feature/menu-limonata", "menu.txt") ?? "").includes("limonata 35"),
            kim: "ayse",
            komutlar: ["gh pr review feature/menu-limonata --approve"],
            bildirim: "Ayşe yeni commit'e baktı ve onayladı.",
          },
        ],
        hedefler: [
          { aciklama: "PR birleşti", denetle: (o) => prVar(o, (p) => p.durum === "birlesti") },
          { aciklama: "GitHub'daki main'de \"limonata 35\" var", denetle: (o) => (uzakDosya(o, "main", "menu.txt") ?? "").includes("limonata 35") },
        ],
      },
      dene: ["gt-u13-kendi-onay", "gt-u13-codeowners", "gt-u13-degisiklik-istegi"],
    },
    {
      baslik: "CI ve durum denetimleri",
      metin: md(`
**Sürekli entegrasyon** (CI): her push'ta ve PR'da derleme, testler ve lint kendiliğinden, temiz bir makinede çalışır. Sonuç PR'da bir **durum denetimi** (status check) olarak görünür: ✓ ya da ✗.

Kuralda "Require status checks to pass" açıksa ✗ varken birleştirme düğmesi kapanır. Düzeltme her zaman aynıdır: dalda düzelt, commit'le, push et. PR güncellenir, CI yeniden çalışır.

Terminalden CI'a bakmak için:

~~~
gh pr checks
~~~

"Bende çalışıyor" CI'ın yakalamak için var olduğu cümledir: senin bilgisayarında kalmış bir dosya, unutulmuş bir bağımlılık ya da hata ayıklama satırı temiz makinede ortaya çıkar.

**CD** (sürekli teslimat/dağıtım) bir adım ötesidir: CI'dan geçen kod ortama kendiliğinden dağıtılır. Üç ortamlı akışta ~dev~'e birleşme geliştirme ortamına, ~main~'e birleşme canlıya dağıtımı tetikleyebilir.

Bu terminaldeki depoda CI'ın tek adımı var: **lint**, kodda ~console.log~ arar.
`),
      git: {
        kurulum: [
          ...KAFE_TEMEL,
          platform({ korumalar: { main: { prZorunlu: true, ci: true } }, ci: [CI_LINT] }),
          `git clone ${KAFE}`,
          "git switch -c feature/hazirlik-suresi",
          "printf 'export const SURE = 5;\\nconsole.log(SURE);\\n' > siparis.js",
          "git add siparis.js",
          'git commit -m "Hazırlık süresi"',
          "git push -u origin feature/hazirlik-suresi",
          'gh pr create --base main --title "Hazırlık süresi"',
        ],
        gorev: "PR'ın açık ama birleşmiyor. ~gh pr checks~ ile CI'a bak, sorunu dalda düzelt ve push et; CI yeşil olunca birleştir.",
        oneriler: ["gh pr merge --merge", "gh pr checks", "cat siparis.js", 'echo "export const SURE = 5;" > siparis.js', 'git commit -am "console.log kaldırıldı"', "git push", "gh pr checks", "gh pr merge --merge"],
        hedefler: [
          { aciklama: "PR birleşti", denetle: (o) => prVar(o, (p) => p.durum === "birlesti") },
          { aciklama: "GitHub'daki main'de console.log yok", denetle: (o) => { const f = uzakDosya(o, "main", "siparis.js"); return f !== null && !f.includes("console.log"); } },
        ],
      },
      dene: ["gt-u13-ci-nedir", "gt-u13-durum-denetimi", "gt-u13-checks-komut"],
    },
    {
      baslik: "GitHub Actions: iş akışı dosyası",
      metin: md(`
GitHub'ın CI aracı **GitHub Actions**'tır (GitLab'da karşılığı GitLab CI, 15. ünite). İş akışları deponun içinde, ~.github/workflows/~ klasöründeki YAML dosyalarıdır; kodla birlikte sürümlenir ve değişiklikleri de PR ile incelenir.

~~~
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: npm ci
      - run: npm run lint
      - run: npm test
~~~

- ~on~: ne zaman çalışacağı (push, PR, zamanlanmış ~schedule~...).
- ~jobs~: işler. Her biri ~runs-on~ ile seçilen boş bir makinede çalışır; işler varsayılan olarak paralel yürür.
- ~steps~: sırayla çalışan adımlar. ~uses~ hazır bir eylemi (önce ~actions/checkout~ ile kod makineye alınır), ~run~ bir komutu çalıştırır. Bir adım kırmızıysa sonrakiler çalışmaz.

Şekilde iş akışını çalıştır, sonra kodda bir hata bırakıp yeniden dene:

[[G-H13-02]]

Gizli değerler (dağıtım anahtarı, API token'ı) asla bu dosyaya yazılmaz. Depo ayarlarındaki **Secrets** bölümünde saklanır ve iş akışında ~secrets.ANAHTAR_ADI~ ile okunur; günlüklerde maskelenir.
`),
      dene: ["gt-u13-nerede", "gt-u13-on", "gt-u13-checkout"],
    },
    {
      baslik: "Birleştirme engelleri ve gh ile PR yönetimi",
      metin: md(`
Bir PR'ın birleşmesini engelleyen şeyler ve çözümleri:

| GitHub ne diyor? | Ne yapmalı? |
|---|---|
| At least 1 approving review is required | Bir ekip arkadaşından inceleme iste |
| Changes requested | İsteneni aynı dala commit'le, push et |
| Required status check is failing | ~gh pr checks~ ile bak, düzelt, push et |
| This branch has conflicts | Hedefi dalına al (~git merge origin/dev~), çöz, push et |

Terminalden PR yönetimi:

| İş | Komut |
|---|---|
| Bulunduğun daldan dev'e PR | ~gh pr create --base dev --title "..."~ |
| Açık PR'lar | ~gh pr list~ |
| Durum, onaylar, engeller | ~gh pr view 7~ |
| CI sonuçları | ~gh pr checks 7~ |
| İnceleme | ~gh pr review 7 --approve~ ya da ~--request-changes~ |
| Birleştir | ~gh pr merge 7 --merge~, ~--squash~ ya da ~--rebase~ |
| Birleştir ve dalı sil | ~gh pr merge 7 --squash --delete-branch~ |
| Kapat | ~gh pr close 7~ |

Numara yerine dal adı da verilebilir; hiçbir şey verilmezse bulunduğun dalın PR'ı seçilir.

Son söz: yetkin olsa bile kuralı atlama. Acil anlar hataların en çok yapıldığı anlardır. Ekipler bunun için nöbetçi inceleyici belirler; kural atlanacaksa bu kayıtlı bir istisna olmalıdır.
`),
      dene: ["gt-u13-pr-create", "gt-u13-engel", "gt-u13-pr-guncellenir"],
    },
  ],
  test: [
    "gt-u13-git-mi", "gt-u13-yerel-commit", "gt-u13-uc-ortam-koruma", "gt-u13-yeni-commit", "gt-u13-inceleme-ne", "gt-u13-kirmizi",
    "gt-u13-yerelde-gecti", "gt-u13-cd", "gt-u13-jobs-steps", "gt-u13-gizli", "gt-u13-cakisan-pr", "gt-u13-squash-sil", "gt-u13-admin",
  ],
};

