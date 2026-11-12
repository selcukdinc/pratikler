import { md, type Ders } from "../../../../src/dersler/tipler";
import { uzakBul } from "../../../../src/gitsim/uzak";
import { KAFE, KAFE_TEMEL, platform, prler, prVar, UC_ORTAM, uzakDosya, uzakUc } from "../kafe";

const DAL = "feature/US-D03e-docker-compose-local";

export const UNITE_12: Ders = {
  hafta: 12,
  baslik: "Takım Akışları",
  ozet: "Dal nereden açılır, nereye birleşir, ne zaman canlıya çıkar? GitHub Flow, trunk-based ve Git Flow'u tanı; sonra Cargo Pilot'un üç ortamlı akışını (dev, test, main) baştan sona kendin uygula.",
  bolumler: [
    {
      baslik: "Neden bir akış? GitHub Flow",
      metin: md(`
Tek başına çalışırken "main'e commit'le, push et" yeter. Beş kişi aynı depoya dokununca sorular başlar: Yarım iş nerede bekler? Kim inceler? Canlıya ne zaman, hangi kod çıkar? **Dal akışı** (branching strategy) bu soruların ekipçe kararlaştırılmış cevabıdır.

En sade akış **GitHub Flow**'dur:

1. ~main~ her an canlıya çıkabilir durumdadır.
2. Her iş ~main~'den açılan kısa ömürlü bir dalda yapılır.
3. Dal push edilir, **pull request** açılır, incelenir, CI çalışır.
4. Onaylanınca ~main~'e birleşir, dal silinir, canlıya çıkar.

Bu ünitede PR'ları GitHub'ın web sayfası yerine terminalden, **GitHub CLI** (~gh~) ile açacaksın. Gerçek hayatta da çok kullanılır:

| İş | Komut |
|---|---|
| PR aç | ~gh pr create --base main --title "..."~ |
| Açık PR'lar | ~gh pr list~ |
| Bir PR'ın durumu | ~gh pr view~ |
| Birleştir ve dalı sil | ~gh pr merge --squash --delete-branch~ |

Sanal terminaldeki GitHub'da ~main~ korumalı: doğrudan push kabul etmiyor. Bir sonraki ünitede korumaları ayrıntısıyla göreceksin.
`),
      git: {
        kurulum: [...KAFE_TEMEL, platform({ korumalar: { main: { prZorunlu: true } } }), `git clone ${KAFE}`],
        gorev: "GitHub Flow'u baştan sona uygula: ~feature/menu-cay~ dalını aç, menüye ~cay 20~ satırını ekleyip commit'le, dalı gönder, main'e PR aç ve squash ile birleştirip dalı sil. Sonra yerel main'ini güncelle.",
        oneriler: [
          "git switch -c feature/menu-cay",
          'echo "cay 20" >> menu.txt',
          'git commit -am "Menüye çay eklendi"',
          "git push -u origin feature/menu-cay",
          'gh pr create --base main --title "Menüye çay"',
          "gh pr merge --squash --delete-branch",
          "git switch main",
          "git pull",
        ],
        hedefler: [
          { aciklama: "PR birleşti", denetle: (o) => prVar(o, (p) => p.durum === "birlesti") },
          { aciklama: "GitHub'daki main'de çay var", denetle: (o) => (uzakDosya(o, "main", "menu.txt") ?? "").includes("cay 20") },
          { aciklama: "Dal GitHub'dan silindi", denetle: (o) => !!uzakUc(o, "main") && !uzakUc(o, "feature/menu-cay") && prler(o).length > 0 },
          { aciklama: "Yerel main güncel", denetle: (o) => !!uzakUc(o, "main") && o.depo?.refs["refs/heads/main"] === uzakUc(o, "main") && prler(o).length > 0 },
        ],
      },
      dene: ["gt-u12-neden", "gt-u12-adimlar", "gt-u12-main-hazir"],
    },
    {
      baslik: "Trunk-based ve Git Flow",
      metin: md(`
**Trunk-based geliştirme** GitHub Flow'un daha da hızlısıdır: herkes günde en az bir kez ana dala (trunk) birleşir, dallar bir iki günden uzun yaşamaz. Bitmemiş bir özellik ana dala girer ama **özellik bayrağı** (feature flag) kapalı olduğu için kullanıcı görmez. Büyük çakışmalar hiç oluşmaz; karşılığında güçlü bir test altyapısı gerekir.

**Git Flow** ise sürüm sürüm çıkan ürünler (masaüstü uygulaması, kütüphane, mobil uygulama) için tasarlanmış daha ağır bir akıştır:

| Dal | Ömrü | Ne için? |
|---|---|---|
| ~main~ | Kalıcı | Yalnızca yayımlanmış sürümler (etiketli) |
| ~develop~ | Kalıcı | Günlük geliştirmenin toplandığı yer |
| ~feature/...~ | Kısa | ~develop~'tan açılır, ~develop~'a birleşir |
| ~release/...~ | Kısa | Sürüm hazırlığı: yalnızca düzeltme, yeni özellik yok |
| ~hotfix/...~ | Kısa | Canlıdaki acil hata: ~main~'den açılır, hem ~main~'e hem ~develop~'a birleşir |

Hangisi? Sık sık canlıya çıkan bir web ürünüyse GitHub Flow ya da trunk-based. Ayrı test ortamı ve QA süreci olan bir ekipse bir sonraki bölümdeki üç ortamlı akış. Takvime bağlı sürümler çıkaran bir ürünse Git Flow. Akışın amacı tören değil, **öngörülebilirlik**tir. Dal ne kadar uzun yaşarsa ana daldan o kadar uzaklaşır, çakışmalar o kadar büyür.
`),
      dene: ["gt-u12-trunk", "gt-u12-dallar", "gt-u12-hotfix"],
    },
    {
      baslik: "Üç ortamlı akış: dev, test, main",
      metin: md(`
Cargo Pilot projesinde kullanılan akış üç ortama dayanır. Her ortamın bir dalı vardır ve üçü de **korumalıdır**: doğrudan push yok, PR zorunlu, CI geçmeli, ~dev~ için en az bir onay.

| Dal | Ortam |
|---|---|
| ~main~ | Canlı (production) |
| ~test~ | QA: test ekibinin doğruladığı ortam |
| ~dev~ | Geliştirme: herkesin işinin ilk denendiği yer |

Bir işin yolu:

1. ~test~'in son hâlini çek (~git fetch~).
2. Dalı **test'ten** aç: ~git switch -c feature/US-D03e-docker-compose-local origin/test~
3. Geliştir, commit'le, push et.
4. **PR 1**: dal → ~dev~. İnceleme ve CI, birleşince geliştirme ortamında dene.
5. Sorun yoksa **aynı daldan** **PR 2**: dal → ~test~.
6. QA test ortamında doğrular.
7. **Release PR**: ~test~ → ~main~. Canlıya çıkış.
8. İşi biten dal silinir.

İki kural akışın kalbidir. **dev hiçbir zaman toptan test'e birleştirilmez**: dev'de başkalarının yarım işleri vardır. Ve dal bu yüzden **dev'den değil test'ten açılır**: dev'den açılan dal o yarım işleri içinde taşır ve PR 2 ile test'e sızdırır.

Şekilde akışı adım adım oynat, tuzak düğmelerine de bas:

[[G-H12-01]]

Şimdi gerçeğini yap. Sanal GitHub'da ~dev~'de Mert'in yarım ödeme işi var. Ayşe ekip arkadaşın: dev'e PR açınca inceleyip onaylayacak. CI'da bir "akış kuralı" adımı var. PR'da başkasının commit'i varsa kırmızı yanar.
`),
      git: {
        kurulum: UC_ORTAM,
        gorev: "Akışı uygula: ~test~'ten ~feature/US-D03e-docker-compose-local~ dalını aç, ~docker-compose.yml~ ekle, push et; PR 1 ile dev'e, Ayşe onaylayınca birleştir; aynı daldan PR 2 ile test'e taşı. Mert'in yarım işi test'e gitmesin.",
        oneriler: [
          "git fetch",
          `git switch -c ${DAL} origin/test`,
          'echo "services: {}" > docker-compose.yml',
          "git add docker-compose.yml",
          'git commit -m "Yerel docker compose"',
          `git push -u origin ${DAL}`,
          'gh pr create --base dev --title "Docker compose"',
          "gh pr view",
          "gh pr merge --merge",
          'gh pr create --base test --title "Docker compose"',
          "gh pr merge --merge",
        ],
        olaylar: [
          {
            id: "ayse-onay",
            kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.hedef === "dev" && !p.onaylar.length),
            kim: "ayse",
            komutlar: [`gh pr review ${DAL} --approve`],
            bildirim: "Ayşe dev'e açtığın PR'ı inceledi ve onayladı.",
          },
        ],
        hedefler: [
          { aciklama: "PR 1 ile ~docker-compose.yml~ dev'de", denetle: (o) => uzakDosya(o, "dev", "docker-compose.yml") !== null },
          { aciklama: "PR 2 ile aynı dosya test'te", denetle: (o) => uzakDosya(o, "test", "docker-compose.yml") !== null },
          { aciklama: "Mert'in yarım işi test'e gitmedi", denetle: (o) => !!uzakUc(o, "test") && uzakDosya(o, "test", "odeme.js") === null },
          { aciklama: "dev'den test'e PR açılmadı", denetle: (o) => prler(o).length > 0 && !prVar(o, (p) => p.kaynak === "dev") },
        ],
      },
      dene: ["gt-u12-dallar-ne", "gt-u12-nereden", "gt-u12-dev-toptan", "gt-u12-dal-ac-komut"],
    },
    {
      baslik: "Dal adları ve commit kuralları",
      metin: md(`
Dal adı, PR listesinde ve geçmişte işin ne olduğunu bir bakışta söylemelidir. Yaygın kalıp **tür/iş-numarası-kısa-açıklama**:

- ~feature/US-D03e-docker-compose-local~: yeni özellik
- ~bugfix/US-D12-login-validation~: hata düzeltmesi
- ~hotfix/canli-odeme-hatasi~: canlıdaki acil düzeltme
- ~docs/~, ~refactor/~, ~chore/~: belge, yeniden düzenleme, bakım

Kurallar: küçük harf, kelimeler arasında kısa çizgi, boşluk ve Türkçe karakter yok (komut satırında ve bazı araçlarda sorun çıkarır). İş numarası (~US-D12~) dalı iş takip sistemindeki kayda bağlar; birçok araç PR'ı o kayda otomatik olarak iliştirir.

Commit mesajları için yaygın bir kural **Conventional Commits**'tir: ~tür(kapsam): açıklama~.

~~~
feat(sepet): indirim kodu alanı
fix(login): boş parola artık reddediliyor
docs: kurulum adımları güncellendi
~~~

Bu biçim tutarlı olunca sürüm notları ve bir sonraki sürüm numarası commit'lerden otomatik çıkarılabilir: ~fix~ PATCH'i, ~feat~ MINOR'u artırır.
`),
      dene: ["gt-u12-onek", "gt-u12-bosluk", "gt-u12-conventional"],
    },
    {
      baslik: "Sürümler: SemVer, etiket, release",
      metin: md(`
Canlıya çıkan her sürüme bir numara verilir. En yaygın kural **anlamsal sürümleme** (SemVer): ~MAJOR.MINOR.PATCH~.

| Değişiklik | Örnek: 1.4.2'den sonra |
|---|---|
| Geriye uyumlu hata düzeltmesi | ~1.4.3~ |
| Geriye uyumlu yeni özellik | ~1.5.0~ |
| Eski kullanıcıları bozan değişiklik | ~2.0.0~ |

Git'te sürüm bir **etiketle** işaretlenir. Dal ilerler, etiket hep aynı commit'te kalır. Açıklamalı etiket kim, ne zaman ve neden bilgisini de taşır:

~~~
git tag -a v1.2.0 -m "Sürüm 1.2.0"
git push origin v1.2.0
~~~

Düz ~git push~ etiketleri göndermez; ya adıyla ya ~git push --tags~ ile gönderilir. GitHub'daki **Releases** sayfası bir etikete bağlanır ve üstüne sürüm notlarını ve indirilebilir dosyaları ekler.

Yayımlanmış bir etiketi taşıma: başkaları o sürümü çekmiş ya da canlıya çıkarmış olabilir. Son anda bir düzeltme geldiyse yeni bir PATCH sürümü (~v1.2.1~) çıkar.
`),
      git: {
        kurulum: [...KAFE_TEMEL, `git clone ${KAFE}`],
        gorev: "Canlıdaki sürümü işaretle: son commit'e ~v1.2.0~ açıklamalı etiketini koy ve etiketi GitHub'a gönder.",
        oneriler: ['git tag -a v1.2.0 -m "Sürüm 1.2.0"', "git push", "git push origin v1.2.0", "git log --oneline"],
        hedefler: [
          { aciklama: "Yerelde ~v1.2.0~ etiketi var", denetle: (o) => !!o.depo?.refs["refs/tags/v1.2.0"] },
          { aciklama: "Etiket açıklamalı", denetle: (o) => { const h = o.depo?.refs["refs/tags/v1.2.0"]; return !!h && o.depo!.nesneler[h]?.tur === "tag"; } },
          { aciklama: "Etiket GitHub'da", denetle: (o) => !!uzakBul(o, KAFE)?.refs["refs/tags/v1.2.0"] },
        ],
      },
      dene: ["gt-u12-semver", "gt-u12-etiket", "gt-u12-etiket-komut"],
    },
  ],
  test: [
    "gt-u12-karar", "gt-u12-uzun-dal", "gt-u12-feature-flag", "gt-u12-release", "gt-u12-agir", "gt-u12-sira", "gt-u12-dev-kirli",
    "gt-u12-yanlis-yer", "gt-u12-release-pr", "gt-u12-dal-silme", "gt-u12-is-numarasi", "gt-u12-major", "gt-u12-etiket-push", "gt-u12-etiket-tasima",
  ],
};
