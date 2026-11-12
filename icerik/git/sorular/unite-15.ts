// 15. ünite (İleri): GitLab. GitHub'dan farkı, terim karşılıkları, merge request ve
// glab, protected branches ve onaylar, .gitlab-ci.yml, kendi sunucunda GitLab, taşıma.
import { sorular, type Soru } from "./yardimci.ts";

const U = 15;

export const unite15: Soru[] = [
  ...sorular(U, "u15-gitlab-nedir", [
    {
      ad: "ne",
      soru: "GitLab nedir?",
      secenekler: [
        "Git depolarını barındıran, CI/CD'si içinde bir platform",
        "Git'in yerine geçen başka bir sürüm kontrol aracı",
        "Yalnızca GitHub'a bağlanan bir masaüstü programı",
        "Bir kod editörü eklentisi",
      ],
      aciklama: "GitLab da GitHub gibi Git depolarını barındırır; altta aynı Git çalışır. Fark platform özelliklerindedir: GitLab CI/CD, paket ve konteyner kayıtları, issue panoları gibi araçları tek uygulamada sunar.",
    },
    {
      ad: "ayni-git",
      dy: true,
      soru: "GitHub'da kullandığın git commit, branch, merge ve push komutları GitLab'daki bir depoda da aynen çalışır.",
      aciklama: "Doğru. Git aynı Git'tir; değişen yalnızca uzak deponun adresi ve platformun arayüzü, terimleri ve kurallarıdır.",
    },
    {
      ad: "neden-gitlab",
      zorluk: 2,
      senaryo: true,
      soru: "Bir hastane, kaynak kodunun kurum dışındaki bir sunucuda durmasını yasaklıyor. Neden GitLab'ı seçebilir?",
      secenekler: [
        "GitLab kurumun kendi sunucusuna kurulabilir",
        "GitLab depoları şifresiz tutar",
        "GitLab'da commit geçmişi tutulmaz",
        "GitLab yalnızca hastanelere açıktır",
      ],
      aciklama: "GitLab'ın topluluk sürümü (Community Edition) açık kaynaklıdır ve kurumun kendi sunucusuna kurulabilir (self-managed). Kod kurumun ağından çıkmaz. GitHub'ın da kuruma kurulan bir sürümü (Enterprise Server) vardır ama ücretlidir.",
    },
    {
      ad: "ce-ee",
      zorluk: 2,
      soru: "GitLab Community Edition (CE) için hangisi doğrudur?",
      secenekler: [
        "Açık kaynaklı, kendi sunucuna kurulur",
        "Yalnızca gitlab.com'da çalışır",
        "Git komutlarını desteklemez",
        "Merge request özelliği yoktur",
      ],
      aciklama: "CE açık kaynaklı temel sürümdür; Enterprise Edition (EE) ek ücretli özellikler getirir. gitlab.com ise GitLab'ın kendi barındırdığı hizmettir.",
    },
  ]),
  ...sorular(U, "u15-karsilik", [
    {
      ad: "pr-mr",
      soru: "GitHub'daki pull request'in GitLab'daki karşılığı nedir?",
      secenekler: ["Merge request", "Push request", "Branch request", "Commit request"],
      aciklama: "İkisi aynı işi görür: bir dalın değişikliklerini incelemeye açıp hedef dala birleştirmek. GitLab adı \"birleştirme isteği\"ni öne çıkarır.",
    },
    {
      ad: "unlem",
      soru: "GitLab'da bir yorumda \"!42\" yazılması neyi gösterir?",
      secenekler: ["42 numaralı merge request'i", "42 numaralı issue'yu", "42. commit'i", "42 dosyalık değişikliği"],
      aciklama: "GitLab'da issue'lar #42, merge request'ler !42 diye anılır. GitHub'da ikisi de # ile yazılır.",
    },
    {
      ad: "group",
      soru: "GitHub'daki organization'ın (kuruluş hesabı) GitLab'daki karşılığı nedir?",
      secenekler: ["Group", "Pipeline", "Runner", "Milestone"],
      aciklama: "GitLab'da projeler group'larda toplanır; group'ların alt group'ları olabilir (kafe-mavi/odeme/api gibi).",
    },
    {
      ad: "actions-ci",
      soru: "GitHub Actions'ın iş akışı dosyasının GitLab'daki karşılığı hangisidir?",
      secenekler: [".gitlab-ci.yml", ".github/workflows/ci.yml", "Makefile", ".gitignore"],
      aciklama: "GitLab CI/CD, deponun kökündeki .gitlab-ci.yml dosyasını okur. GitHub Actions ise .github/workflows altındaki YAML dosyalarını.",
    },
    {
      ad: "maintainer",
      zorluk: 2,
      soru: "GitLab'da proje ayarlarını değiştirip korumalı dallara birleştirme hakkı genellikle hangi role verilir?",
      secenekler: ["Maintainer", "Guest", "Reporter", "Visitor"],
      aciklama: "GitLab rolleri yetkiye göre sıralanır: Guest, Reporter, Developer, Maintainer, Owner. Developer kod yazar ve MR açar; korumalı dalın kuralları çoğu ekipte birleştirmeyi Maintainer'a bırakır.",
    },
  ]),
  ...sorular(U, "u15-mr", [
    {
      ad: "glab-create",
      soru: "GitLab'da bulunduğun daldan main'e merge request açan glab komutunu yaz (başlık olmadan).",
      cevap: ["glab mr create --target-branch main", "glab mr create -b main"],
      aciklama: "~glab mr create --target-branch main --title \"...\"~ dalını main'e birleştirmek için MR açar. gh'daki ~--base~ burada ~--target-branch~'tir.",
    },
    {
      ad: "push-ipucu",
      soru: "GitLab'a yeni bir dal push edince terminalde bir bağlantı çıkar. Bu bağlantı ne içindir?",
      secenekler: [
        "O daldan merge request açmak için",
        "Dalı silmek için",
        "Push'u geri almak için",
        "Depoyu public yapmak için",
      ],
      aciklama: "\"To create a merge request for ..., visit:\" satırındaki adres MR formunu kaynak dal seçili olarak açar. GitHub'daki \"Create a pull request for ...\" ipucunun karşılığıdır.",
    },
    {
      ad: "yeni-commit",
      senaryo: true,
      soru: "İnceleyen kişi MR'ında bir düzeltme istedi. Ne yaparsın?",
      secenekler: [
        "Aynı dala commit'leyip push ederim; MR güncellenir",
        "MR'ı kapatıp yeni dal ve yeni MR açarım",
        "Düzeltmeyi doğrudan main'e push ederim",
        "MR'ı onaylanmış sayıp birleştiririm",
      ],
      aciklama: "MR bir dala bakar: dala gelen her push MR'a eklenir, pipeline yeniden çalışır. GitHub'daki PR'la aynı davranış.",
    },
    {
      ad: "remove-source",
      zorluk: 2,
      soru: "MR birleşince kaynak dalı da silen glab seçeneği hangisidir?",
      secenekler: ["--remove-source-branch", "--delete-target", "--prune-all", "--close-branch"],
      aciklama: "~glab mr merge !5 --remove-source-branch~ birleştirir ve dalı siler. MR formunda da \"Delete source branch\" kutusu vardır; çoğu ekip bunu varsayılan yapar.",
    },
  ]),
  ...sorular(U, "u15-korumali", [
    {
      ad: "red",
      soru: "\"remote: GitLab: You are not allowed to push code to protected branches on this project.\" ne demektir?",
      secenekler: [
        "Dal korumalı; değişiklik MR ile girmeli",
        "Depo silinmiş",
        "İnternet bağlantısı kopmuş",
        "Commit mesajı çok uzun",
      ],
      aciklama: "GitHub'daki GH006'nın karşılığı. Korumalı dalda \"Allowed to push\" senin rolüne kapalı. Kendi dalını push edip MR aç.",
    },
    {
      ad: "allowed",
      zorluk: 2,
      soru: "GitLab'da korumalı bir dal için \"Allowed to push and merge: No one\", \"Allowed to merge: Maintainers\" seçildi. Sonuç nedir?",
      secenekler: [
        "Push yok, MR'ı Maintainer birleştirir",
        "Herkes doğrudan push edebilir",
        "Yalnızca Developer'lar birleştirebilir",
        "Dal silinir",
      ],
      aciklama: "GitLab korumayı iki ayrı izinle anlatır: kimin doğrudan push edebileceği ve kimin MR birleştirebileceği. Bu ayar \"değişiklik yalnızca MR ile, birleştirmeyi Maintainer yapar\" demektir.",
    },
    {
      ad: "onay",
      dy: true,
      zorluk: 2,
      soru: "GitLab'da onay kuralı (approval rule) en az bir onay isterken onay olmadan MR birleştirilemez.",
      aciklama: "Doğru. Onay kuralları hangi kişi ya da grubun, kaç onay vereceğini belirler; eksikken birleştirme düğmesi kapalıdır. Ekipler çoğunlukla yazarın kendi MR'ını onaylamasını da kapatır.",
    },
    {
      ad: "pipeline-kosul",
      senaryo: true,
      soru: "MR onaylandı ama birleştirme düğmesi kapalı ve \"Pipeline must succeed\" yazıyor. Ne yaparsın?",
      secenekler: [
        "Kırmızı işi dalımda düzeltip push ederim",
        "Onayı geri çekip yeniden onaylatırım",
        "Hedef dalı silerim",
        "MR'ı kapatıp main'e doğrudan push ederim",
      ],
      aciklama: "Projede \"Pipelines must succeed\" açık: son pipeline başarısız. ~glab ci status~ hangi işin kırıldığını gösterir. Düzeltip push edince pipeline yeniden çalışır.",
    },
  ]),
  ...sorular(U, "u15-gitlab-ci", [
    {
      ad: "stages",
      soru: ".gitlab-ci.yml'deki ~stages~ ne belirler?",
      secenekler: [
        "Aşamaların çalışma sırasını",
        "Hangi dalların korunacağını",
        "Kaç kişinin onay vereceğini",
        "Depoya kimlerin erişeceğini",
      ],
      aciklama: "Örneğin ~stages: [test, build, deploy]~. Aynı aşamadaki işler paralel çalışır; bir aşamada iş kırılırsa sonraki aşamalar çalışmaz.",
    },
    {
      ad: "script",
      soru: ".gitlab-ci.yml'de bir işin çalıştıracağı komutlar hangi anahtarın altına yazılır?",
      secenekler: ["script", "steps", "run", "commands"],
      aciklama: "Her iş (job) bir ~stage~'e bağlanır ve ~script~ altındaki komutları sırayla çalıştırır. GitHub Actions'ta bunun karşılığı ~steps~ altındaki ~run~ satırlarıdır.",
    },
    {
      ad: "runner",
      zorluk: 2,
      soru: "GitLab CI'da işleri gerçekte kim çalıştırır?",
      secenekler: ["Runner", "Maintainer", "Merge request", "Webhook"],
      aciklama: "Runner, işleri alıp çalıştıran ajandır. gitlab.com paylaşılan runner'lar sunar; kurumlar kendi makinelerine runner kurabilir.",
    },
    {
      ad: "ci-status",
      soru: "Bulunduğun dalın pipeline durumunu terminalde gösteren glab komutunu yaz.",
      cevap: ["glab ci status"],
      aciklama: "~glab ci status~ dalın son pipeline'ındaki işleri ve sonuçlarını listeler. GitHub'daki ~gh pr checks~'in karşılığıdır.",
    },
  ]),
  ...sorular(U, "u15-self-hosted", [
    {
      ad: "neden",
      soru: "Bir kurum GitLab'ı kendi sunucusunda çalıştırırsa ne kazanır?",
      secenekler: [
        "Kod ve veriler kurumun kendi altyapısında kalır",
        "Git komutları daha kısa yazılır",
        "Yedek almaya gerek kalmaz",
        "Güncellemeleri kimse yapmak zorunda kalmaz",
      ],
      aciklama: "Veri kurumda kalır, ağ ve erişim kuralları kuruma göre ayarlanır. Bedeli de vardır: kurulum, güncelleme, yedek ve güvenlik yamaları kurumun işidir.",
    },
    {
      ad: "bedel",
      dy: false,
      zorluk: 2,
      soru: "Kendi sunucusunda GitLab çalıştıran kurum güvenlik güncellemelerini düşünmek zorunda değildir; onları GitLab şirketi uzaktan yapar.",
      aciklama: "Yanlış. Self-managed kurulumda sürüm yükseltmesi ve güvenlik yamaları kurumun sorumluluğundadır. Güncel tutulmayan bir sunucu bilinen açıklarla saldırıya açık kalır.",
    },
    {
      ad: "adres",
      senaryo: true,
      soru: "Kurumun GitLab'ı ~git.kurum.edu.tr~ adresinde. Depoyu nasıl klonlarsın?",
      secenekler: [
        "Kurumun kendi adresiyle git clone ile",
        "Yalnızca gitlab.com adresiyle",
        "glab olmadan klonlanamaz",
        "Önce GitHub'a taşımak gerekir",
      ],
      aciklama: "Git için adres yalnızca bir adrestir: ~git clone https://git.kurum.edu.tr/grup/proje.git~. Kimlik doğrulama kurumun hesabıyla yapılır.",
    },
  ]),
  ...sorular(U, "u15-tasima", [
    {
      ad: "ikinci-remote",
      soru: "Mevcut depona GitLab'daki boş projeyi ~gitlab~ adıyla ikinci uzak depo olarak ekleyen komutu yaz (adresin yerine URL yaz).",
      cevap: ["git remote add gitlab URL"],
      aciklama: "Bir deponun birden çok uzak deposu olabilir: ~origin~ GitHub'ı, ~gitlab~ GitLab'ı gösterir. Push ederken hangisine gideceğini adıyla söylersin.",
    },
    {
      ad: "all-tags",
      soru: "Bütün dalları ve etiketleri yeni uzak depoya göndermek için hangi iki komut kullanılır?",
      secenekler: [
        "git push gitlab --all ve git push gitlab --tags",
        "git push gitlab main ve git tag --push",
        "git clone gitlab ve git pull --all",
        "git fetch gitlab --all ve git merge --tags",
      ],
      aciklama: "~--all~ bütün yerel dalları, ~--tags~ bütün etiketleri gönderir. Yalnızca ~git push gitlab main~ derseniz öteki dallar eski platformda kalır.",
    },
    {
      ad: "gecmis-tasinir",
      dy: true,
      soru: "Depo GitHub'dan GitLab'a push ile taşınınca commit geçmişi ve commit kimlikleri aynen korunur.",
      aciklama: "Doğru. Commit'ler aynı nesnelerdir; kimlikleri içeriklerinden hesaplanır. Ama issue'lar, PR'lar ve CI ayarları Git'in parçası değildir; onlar için platformun içe aktarma aracı kullanılır.",
    },
    {
      ad: "set-url",
      zorluk: 2,
      senaryo: true,
      soru: "Ekip tamamen GitLab'a geçti. ~origin~ hâlâ GitHub'ı gösteriyor. En temiz çözüm nedir?",
      secenekler: [
        "git remote set-url origin ile adresi GitLab'a çevirmek",
        "Depoyu silip baştan git init yapmak",
        "Her push'ta adresi elle yazmak",
        "origin'i silip hiç uzak depo kullanmamak",
      ],
      aciklama: "~git remote set-url origin https://gitlab.com/...~ adı aynı bırakır, adresi değiştirir. Dalların izleme ayarları ~origin~ adına bağlı olduğu için bozulmaz.",
    },
  ]),
];
