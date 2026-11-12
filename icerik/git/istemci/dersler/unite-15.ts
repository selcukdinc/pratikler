import { md, type Ders } from "../../../../src/dersler/tipler";
import { uzakBul } from "../../../../src/gitsim/uzak";
import { CI_LINT, glDosya, glPlatform, glUc, KAFE, KAFE_GL, KAFE_GL_TEMEL, KAFE_TEMEL, mrVar, uzakUc } from "../kafe";

const KORUMALI = [...KAFE_GL_TEMEL, glPlatform({ korumalar: { main: { prZorunlu: true, onay: 1 } } }), `git clone ${KAFE_GL}`];

const HATLI = [
  ...KAFE_GL_TEMEL,
  glPlatform({ korumalar: { main: { prZorunlu: true, ci: true } }, ci: [CI_LINT] }),
  `git clone ${KAFE_GL}`,
  "git switch -c feature/fis",
  'echo "function fis() { console.log(1) }" > fis.js',
  "git add fis.js",
  'git commit -m "Fiş yazdırma"',
  "git push -u origin feature/fis",
  'glab mr create --target-branch main --title "Fiş yazdırma"',
];

export const UNITE_15: Ders = {
  hafta: 15,
  baslik: "GitLab",
  ozet: "Git aynı Git; değişen platform. GitLab'da pull request'in adı merge request, iş akışının dosyası .gitlab-ci.yml, kuruluşun adı group. Aynı akışı GitLab'ın diliyle yap, kuralları ve pipeline'ı tanı, bir depoyu GitHub'dan GitLab'a taşı.",
  bolumler: [
    {
      baslik: "GitLab nedir?",
      metin: md(`
**GitLab**, GitHub gibi Git depolarını barındıran bir platformdur. Altta aynı Git çalışır: ~commit~, ~branch~, ~merge~, ~push~ bire bir aynıdır. Fark platformun etrafında kurduklarındadır:

- **Tek uygulamada DevOps.** CI/CD, paket ve konteyner kayıtları, issue panoları, güvenlik taramaları aynı üründe.
- **Kendi sunucunda çalışabilir.** Topluluk sürümü (Community Edition) açık kaynaklıdır; kurumlar kendi sunucularına kurar. gitlab.com ise GitLab'ın barındırdığı hizmettir.
- **Gruplar.** Projeler group ve alt group'larda toplanır: ~kafe-mavi/odeme/api~ gibi.

Türkiye'de kamu kurumları, bankalar ve üniversiteler çoğu zaman kodun kurum dışına çıkmaması için kendi GitLab'ını çalıştırır. Bu yüzden bir ekipte GitHub, ötekinde GitLab görmen olağandır.

Şekilde aynı işi iki platformda adım adım karşılaştır:

[[G-H15-01]]
`),
      dene: ["gt-u15-ne", "gt-u15-ayni-git"],
    },
    {
      baslik: "Terim karşılıkları",
      metin: md(`
| GitHub | GitLab | Not |
|---|---|---|
| pull request (#12) | **merge request** (!12) | issue'lar ikisinde de #12 |
| organization | **group** (alt group olabilir) | |
| Actions, ~.github/workflows/*.yml~ | **CI/CD**, ~.gitlab-ci.yml~ | |
| workflow run, check | **pipeline**, job | |
| runner (GitHub-hosted) | **runner** (shared ya da kendi makinen) | |
| branch protection / ruleset | **protected branches**, approval rules | |
| Owner, Maintain, Write, Read | **Owner, Maintainer, Developer, Reporter, Guest** | |
| ~gh~ | **~glab~** | ikisi de komut satırı aracı |

GitLab rollerinde **Developer** kod yazar, dal açar, MR açar; **Maintainer** proje ayarlarını yönetir ve çoğu ekipte korumalı dallara birleştirmeyi o yapar.
`),
      dene: ["gt-u15-pr-mr", "gt-u15-unlem"],
    },
    {
      baslik: "Merge request ve glab",
      metin: md(`
Akış GitHub'dakiyle aynıdır: dal aç, commit'le, dalı push et, merge request aç, onay al, birleştir. GitLab'a yeni bir dal push edince terminal MR formunun bağlantısını verir:

~~~
remote: To create a merge request for feature/menu-limonata, visit:
remote:   https://gitlab.com/kafe-mavi/siparis/-/merge_requests/new?merge_request%5Bsource_branch%5D=feature%2Fmenu-limonata
~~~

Terminalden ~glab~ ile:

~~~
glab mr create --target-branch main --title "Limonata"
glab mr view
glab mr merge --remove-source-branch
~~~

Korumalı dala doğrudan push GitLab'ın diliyle reddedilir:

~~~
remote: GitLab: You are not allowed to push code to protected branches on this project.
 ! [remote rejected] main -> main (pre-receive hook declined)
~~~

Terminalde main korumalı ve bir onay gerekiyor. Yerelde main'e attığın commit'i doğru yola taşı ve MR ile birleştir; Ayşe MR'ı görünce onaylayacak.
`),
      git: {
        kurulum: [...KORUMALI, 'echo "limonata 30" >> menu.txt', 'git commit -am "Limonata eklendi"'],
        gorev: "Push'u dene ve reddi gör. Commit'i ~feature/menu-limonata~ dalına taşı, main'i ~origin/main~'e geri al, dalı push et, ~glab mr create~ ile MR aç; Ayşe onaylayınca ~glab mr merge~.",
        oneriler: [
          "git push",
          "git switch -c feature/menu-limonata",
          "git switch main",
          "git reset --hard origin/main",
          "git switch feature/menu-limonata",
          "git push -u origin feature/menu-limonata",
          'glab mr create --target-branch main --title "Limonata"',
          "glab mr merge --remove-source-branch",
        ],
        olaylar: [
          {
            id: "ayse-onay",
            kosul: (o) => mrVar(o, (p) => p.durum === "acik" && !p.onaylar.length),
            kim: "ayse",
            komutlar: ["glab mr approve feature/menu-limonata"],
            bildirim: "Ayşe merge request'e baktı ve onayladı.",
          },
        ],
        hedefler: [
          { aciklama: "Merge request birleşti", denetle: (o) => mrVar(o, (p) => p.durum === "birlesti") },
          { aciklama: "GitLab'daki main'de limonata var", denetle: (o) => (glDosya(o, "main", "menu.txt") ?? "").includes("limonata") },
        ],
      },
      dene: ["gt-u15-glab-create", "gt-u15-push-ipucu"],
    },
    {
      baslik: "Protected branches ve onaylar",
      metin: md(`
GitLab'da koruma iki ayrı izinle tanımlanır (Settings → Repository → Protected branches):

| Ayar | Seçenekler |
|---|---|
| Allowed to merge | No one, Developers + Maintainers, Maintainers |
| Allowed to push and merge | No one, Developers + Maintainers, Maintainers |
| Allowed to force push | açık / kapalı |

"Allowed to push and merge: **No one**" ve "Allowed to merge: **Maintainers**" demek: kimse doğrudan push edemez, değişiklik MR ile gelir, MR'ı Maintainer birleştirir.

**Onay kuralları** (approval rules) kaç onay gerektiğini ve kimin onaylayabileceğini söyler. Ekipler genellikle MR yazarının kendi MR'ını onaylamasını kapatır. **"Pipelines must succeed"** açıksa son pipeline başarısızken birleştirme düğmesi kapanır.

Terminalde ~feature/fis~'ten açılmış bir MR var ama pipeline kırmızı. Nedenini bul, düzelt ve birleştir.
`),
      git: {
        kurulum: HATLI,
        gorev: "~glab ci status~ ile kırmızı işi gör. ~fis.js~'ten ~console.log~'u çıkar, commit'le, push et; pipeline yeşile dönünce ~glab mr merge~.",
        oneriler: ["glab ci status", 'echo "function fis() {}" > fis.js', 'git commit -am "console.log kaldırıldı"', "git push", "glab ci status", "glab mr merge"],
        hedefler: [
          { aciklama: "Merge request birleşti", denetle: (o) => mrVar(o, (p) => p.durum === "birlesti") },
          { aciklama: "GitLab'daki main'de console.log yok", denetle: (o) => { const f = glDosya(o, "main", "fis.js"); return f !== null && !f.includes("console.log"); } },
        ],
      },
      dene: ["gt-u15-red", "gt-u15-allowed"],
    },
    {
      baslik: ".gitlab-ci.yml ve pipeline",
      metin: md(`
GitLab CI/CD deponun kökündeki **~.gitlab-ci.yml~** dosyasını okur. Her push ve MR için bir **pipeline** çalışır. Pipeline **aşamalardan** (stages), aşamalar **işlerden** (jobs) oluşur:

~~~
stages: [test, build, deploy]

lint:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm run lint

birim-testleri:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm test

paket:
  stage: build
  script:
    - npm run build

canliya:
  stage: deploy
  script:
    - ./yayinla.sh
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
~~~

- Aynı aşamadaki işler paralel çalışır; bir aşamada iş kırılırsa sonraki aşamalar başlamaz.
- ~script~ satırları sırayla çalışır (Actions'taki ~run~ adımları gibi).
- ~rules~ işin ne zaman çalışacağını söyler: burada canlıya dağıtım yalnızca main'de.
- İşleri **runner** çalıştırır: gitlab.com'un paylaşılan runner'ları ya da kurumun kendi makinesine kurduğu runner.

Terminalden: ~glab ci status~.

[[G-H15-02]]
`),
      dene: ["gt-u15-stages", "gt-u15-script"],
    },
    {
      baslik: "Kendi sunucunda GitLab",
      metin: md(`
**Self-managed** GitLab, kurumun kendi sunucusunda çalışan GitLab'dır. Adres kurumun adresidir:

~~~
git clone https://git.kurum.edu.tr/bilgi-islem/otomasyon.git
~~~

Kazanç: kod ve veriler kurum ağında kalır, erişim kurumun kimlik sistemine bağlanabilir, CI işleri kurumun kendi runner'larında çalışır.

Bedel: kurulum, sürüm yükseltme, yedekleme ve **güvenlik yamaları** kurumun işidir. Güncellenmeyen bir GitLab sunucusu bilinen açıklarla saldırıya açık kalır; bu yüzden kendi sunucusunu çalıştıran ekipler GitLab'ın güvenlik duyurularını izler ve sürümü düzenli yükseltir.
`),
      dene: ["gt-u15-neden", "gt-u15-bedel"],
    },
    {
      baslik: "Depoyu taşımak",
      metin: md(`
Git geçmişi bir platformdan ötekine push ile taşınır; commit'ler aynı nesneler olduğu için kimlikleri değişmez.

~~~
git remote add gitlab URL
git push gitlab --all
git push gitlab --tags
~~~

~git remote add gitlab URL~ ikinci bir uzak depo ekler (~URL~ yerine projenin adresi). ~--all~ bütün **yerel** dalları gönderir: GitHub'daki bir dalı yerelde hiç açmadıysan önce ~git switch <dal>~ ile aç. ~--tags~ etiketleri gönderir.

Ekip tamamen geçtiyse ~origin~'in adresini değiştirirsin; dalların izleme ayarları ~origin~ adına bağlı olduğu için bozulmaz:

~~~
git remote set-url origin https://gitlab.com/kafe-mavi/siparis.git
git remote remove gitlab
~~~

Issue'lar, PR'lar ve CI ayarları Git'in parçası değildir; onlar için GitLab'ın GitHub'dan içe aktarma aracı kullanılır.

Terminalde Kafe Mavi'nin GitHub deposu var (~main~, ~dev~ ve ~v1.0~ etiketi). GitLab'da boş bir proje açıldı. Her şeyi taşı ve ~origin~'i GitLab'a çevir.
`),
      git: {
        kurulum: [
          ...KAFE_TEMEL,
          "@ayse git tag v1.0",
          "@ayse git push --tags",
          "@ayse git switch -c dev",
          '@ayse echo "cay 20" >> menu.txt',
          '@ayse git commit -am "Çay"',
          "@ayse git push -u origin dev",
          `@uzak ${KAFE_GL}`,
          `git clone ${KAFE}`,
        ],
        gorev: "~gitlab~ adıyla GitLab'ı ekle, ~dev~'i yerelde aç, bütün dalları ve etiketleri gönder, sonra ~origin~'i GitLab'a çevir ve ~gitlab~'ı kaldır.",
        oneriler: [
          `git remote add gitlab ${KAFE_GL}`,
          "git switch dev",
          "git push gitlab --all",
          "git push gitlab --tags",
          `git remote set-url origin ${KAFE_GL}`,
          "git remote remove gitlab",
          "git remote -v",
        ],
        hedefler: [
          { aciklama: "GitLab'da main ve dev, GitHub'dakilerle aynı commit'te", denetle: (o) => !!glUc(o, "main") && glUc(o, "main") === uzakUc(o, "main") && !!glUc(o, "dev") && glUc(o, "dev") === uzakUc(o, "dev") },
          { aciklama: "GitLab'da v1.0 etiketi var", denetle: (o) => !!uzakBul(o, KAFE_GL)?.refs["refs/tags/v1.0"] },
          { aciklama: "origin GitLab'ı gösteriyor, gitlab adlı uzak depo kalmadı", denetle: (o) => o.depo?.config["remote.origin.url"] === KAFE_GL && !o.depo?.config["remote.gitlab.url"] },
        ],
      },
      dene: ["gt-u15-all-tags", "gt-u15-gecmis-tasinir"],
    },
  ],
  test: [
    "gt-u15-neden-gitlab", "gt-u15-ce-ee", "gt-u15-group", "gt-u15-actions-ci", "gt-u15-maintainer", "gt-u15-yeni-commit", "gt-u15-remove-source", "gt-u15-onay", "gt-u15-pipeline-kosul", "gt-u15-runner", "gt-u15-ci-status", "gt-u15-adres", "gt-u15-ikinci-remote", "gt-u15-set-url",
  ],
};
