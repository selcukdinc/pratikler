// Git ve GitHub Pratik (pratikler.selcukdinc.dev/git): Git'i hiç duymamış birinden
// profesyonel kullanıcıya kadar beş kademede (Acemi, Başlangıç, Orta, İleri, Usta)
// 18 ünite. GitHub baştan sona işlenir, GitLab'ın ayrı bir ünitesi vardır. Vize ya
// da final yoktur. Plan: proje kütüphanesinde planlar/plan-git-github-pratigi.md.
//
// Sorular kendi cümlelerimizle yazılır; başvuru kaynakları Pro Git kitabı, Git başvuru
// kılavuzu (git-scm.com), GitHub Docs ve GitLab Docs'tur, metin kopyalanmaz. Komut
// çıktıları gerçek Git'teki gibi İngilizce bırakılır. Soru metinlerinde ` yerine ~,
// gerçek ~ karakteri (HEAD~1, ¬/.gitconfig) için ¬ yazılır (scripts/sorular-sql.ts).
//
// Kavramlar ünite ünite eklenir: her kavramın en az bir sorusu olmalı
// (shared/kavramlar.test.ts), o yüzden henüz sorusu yazılmamış ünitelerin
// kavramları burada yoktur.
import type { PratikMeta } from "../tipler.ts";

// Ünitelerin kademeleri (dersler ve seviye testi bu gruplamayı kullanır)
export const KADEME_ADLARI = ["Acemi", "Başlangıç", "Orta", "İleri", "Usta"] as const;
const KADEME_ACIKLAMALARI = [
  "Git'i hiç duymadıysan buradan başla: neden var, kurulum, ilk commit, geçmiş ve ilk GitHub deposu.",
  "Dallar, birleştirme, çakışma çözme, geri alma ve pull request.",
  "Uzak depolarla çalışma, rebase, takım akışları ve dal korumaları.",
  "Gizli anahtar güvenliği, GitLab ve ileri araçlar.",
  "Git'in iç yapısı ve felaketten kurtarma.",
];
export const UNITE_KADEMESI: Record<number, number> = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  6: 1, 7: 1, 8: 1, 9: 1,
  10: 2, 11: 2, 12: 2, 13: 2,
  14: 3, 15: 3, 16: 3,
  17: 4, 18: 4,
};

export const git: PratikMeta = {
  id: "git",
  alt: "git",
  yol: "git",
  ad: "Git ve GitHub",
  alan: "Yazılım",
  aciklama:
    "Git'i hiç duymamış olandan profesyonele: commit, dal, birleştirme, çakışma, pull request, rebase, takım akışları, dal korumaları, gizli anahtar güvenliği, GitHub ve GitLab. Etkileşimli dersler, senaryo soruları ve tarayıcıda çalışan bir Git sandbox'ı.",
  kaynakAdi: "Pro Git, Git başvuru kılavuzu, GitHub ve GitLab belgeleri",
  kaynakAciklamasi:
    "Sorular ve dersler herkese açık kaynaklardan yararlanılarak **kendi cümlelerimizle** yazıldı: **Pro Git** kitabı (git-scm.com/book), Git'in başvuru kılavuzu (git-scm.com/docs), **GitHub Docs** ve **GitLab Docs**. Bu kaynaklardan metin kopyalanmadı; bir konuyu derinlemesine okumak istersen oralara bakabilirsin.\n\n" +
    "Komut çıktıları, kendi bilgisayarında gördüğünde tanıyabilmen için Git'teki gibi İngilizce bırakıldı. Takım akışı ünitesindeki üç ortamlı (main / test / dev) süreç, gerçek bir yazılım ekibinin kullandığı kurallardan örnek alındı. Senaryo soruları geliştiricilerin gerçekte sık yaşadığı durumlara dayanır.",
  tanitim: {
    baslik: "Git ve GitHub'ı acemiden ustaya, deneyerek öğren",
    giris:
      "Git ve GitHub Pratik, her geliştiricinin bilmesi gereken sürüm kontrolünü adım adım öğreten ücretsiz bir çalışma sitesi. İlk commit'inden etkileşimli rebase'e, pull request'ten dal korumalarına ve public depoya sızan gizli anahtarlara kadar her konu kısa anlatımlar, gerçek hayattan senaryolar ve sorularla işleniyor.",
    kitleler: [
      { baslik: "Git'i ilk kez duyanlar", metin: "Sürüm kontrolünün neden var olduğundan başla; kurulum, terminal ve ilk commit'ini adım adım yap." },
      { baslik: "Commit atabilen ama dallardan çekinenler", metin: "Dal, birleştirme, çakışma, pull request ve geri alma komutlarını senaryolarla pekiştir." },
      { baslik: "Takımda çalışan geliştiriciler", metin: "Rebase, takım akışları, dal korumaları, gizli anahtar güvenliği ve GitLab ile profesyonel düzeye çık." },
    ],
  },
  bagimsizlikNotu: "Bu site Git projesi, GitHub ya da GitLab tarafından hazırlanmamıştır ve onlarla bağlantılı değildir; adlar yalnızca anlatılan araçları belirtmek için geçer.",
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: false,
  latex: false,
  // Açılış sayfası derslerin yol haritası
  anaSayfa: "ders",
  uniteGruplari: KADEME_ADLARI.map((ad, k) => ({
    ad,
    aciklama: KADEME_ACIKLAMALARI[k],
    uniteler: Object.entries(UNITE_KADEMESI).filter(([, x]) => x === k).map(([n]) => Number(n)),
  })),
  logo: "/logolar/git.svg",
  etiketler: [
    { id: "kavram", ad: "Kavram", renk: "turetilmis", aciklama: "Bir kavramı ya da komutun ne yaptığını soran soru" },
    { id: "komut", ad: "Komut", renk: "ders", aciklama: "İstenen işi yapan Git komutunu yazdığın soru" },
    { id: "senaryo", ad: "Senaryo", renk: "kitap", aciklama: "Gerçek hayattan bir durumda doğru kararı verdiğin soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Sürüm Kontrolü Neden Var?" },
    { no: 2, baslik: "Kurulum ve Terminal" },
    { no: 3, baslik: "İlk Depo ve Üç Alan" },
    { no: 4, baslik: "Geçmişe Bakmak" },
    { no: 5, baslik: "GitHub'a İlk Adım" },
    { no: 6, baslik: "Dallar" },
    { no: 7, baslik: "Çakışmalar" },
    { no: 8, baslik: "GitHub'da Birlikte Çalışmak" },
    { no: 9, baslik: "Geri Almak" },
    { no: 10, baslik: "Uzak Depolar Derinlemesine" },
    { no: 11, baslik: "Rebase" },
    { no: 12, baslik: "Takım Akışları" },
    { no: 13, baslik: "Korumalar ve Otomasyon" },
    { no: 14, baslik: "Gizli Anahtarlar ve Depo Güvenliği" },
    { no: 15, baslik: "GitLab" },
    { no: 16, baslik: "İleri Araçlar" },
    { no: 17, baslik: "Git'in İçi" },
    { no: 18, baslik: "Geçmişi Onarmak ve Kurtarma" },
  ],
  kavramlar: {
    // 1. ünite
    "u1-neden": { ad: "Sürüm kontrolünün çözdüğü sorunlar" },
    "u1-git-github": { ad: "Git, GitHub ve GitLab farkı" },
    "u1-merkezi-dagitik": { ad: "Merkezi ve dağıtık sürüm kontrolü" },
    "u1-tarihce": { ad: "Git'in doğuşu ve anlık görüntü yaklaşımı" },
    "u1-temel": { ad: "Depo, commit ve geçmiş" },
    // 2. ünite
    "u2-kurulum": { ad: "Git'i kurmak ve sürümünü denetlemek" },
    "u2-config": { ad: "git config: kimlik ve ayar düzeyleri" },
    "u2-terminal": { ad: "Terminal temelleri" },
    "u2-editor-yardim": { ad: "Editör, satır sonları ve yardım" },
    // 3. ünite
    "u3-init": { ad: "git init ve .git klasörü" },
    "u3-uc-alan": { ad: "Çalışma dizini, hazırlık alanı ve depo" },
    "u3-status": { ad: "git status ve dosya durumları" },
    "u3-add": { ad: "git add ve hazırlıktan çıkarmak" },
    "u3-commit": { ad: "git commit" },
    // 4. ünite
    "u4-log": { ad: "git log" },
    "u4-diff": { ad: "git diff" },
    "u4-show-hash": { ad: "git show ve commit kimliği" },
    "u4-mesaj": { ad: "İyi commit mesajı" },
    "u4-gitignore": { ad: ".gitignore" },
    // 5. ünite
    "u5-hesap-depo": { ad: "GitHub hesabı ve depo açmak" },
    "u5-gorunurluk": { ad: "Public ve private depolar" },
    "u5-readme-lisans": { ad: "README ve LICENSE" },
    "u5-clone": { ad: "git clone" },
    "u5-remote-push": { ad: "remote, push ve upstream" },
    "u5-pull": { ad: "git pull ile güncellemek" },
    "u5-kimlik": { ad: "HTTPS, token, SSH anahtarı ve 2FA" },

    "u6-dal-nedir": { ad: "Dal nedir, neden ucuzdur" },
    "u6-olustur-gec": { ad: "Dal açmak ve dallar arasında geçmek" },
    "u6-kopuk-head": { ad: "HEAD ve kopuk HEAD" },
    "u6-merge": { ad: "Birleştirme: ileri sarma ve üç yollu" },
    "u6-dal-yonetimi": { ad: "Dalları listelemek, silmek, adlandırmak" },

    "u7-neden": { ad: "Çakışma neden olur" },
    "u7-isaretler": { ad: "Çakışma işaretlerini okumak" },
    "u7-cozum": { ad: "Çakışmayı çözmek ve vazgeçmek" },
    "u7-araclar": { ad: "Çakışma araçları: status, diff, ours/theirs, editörler" },
    "u7-onlem": { ad: "Çakışmayı azaltan alışkanlıklar" },

    "u8-pr": { ad: "Pull request" },
    "u8-inceleme": { ad: "Kod incelemesi" },
    "u8-birlestirme-yontemi": { ad: "Merge, squash ve rebase ile birleştirme" },
    "u8-fork": { ad: "Fork ve upstream" },
    "u8-issue": { ad: "Issue ve PR'ı issue'ya bağlamak" },

    "u9-restore": { ad: "Dosyaları geri almak: restore" },
    "u9-reset": { ad: "reset: soft, mixed, hard" },
    "u9-revert": { ad: "revert: paylaşılmış commit'i geri almak" },
    "u9-amend": { ad: "Son commit'i düzeltmek: --amend" },
    "u9-stash": { ad: "stash: işi kenara koymak" },
    "u9-reflog": { ad: "reflog ile kayıp commit'i bulmak" },

    "u10-izleme": { ad: "Uzak izleme dalları ve upstream" },
    "u10-fetch-pull": { ad: "fetch ile pull farkı" },
    "u10-push-reddi": { ad: "Reddedilen push ve çözümü" },
    "u10-force": { ad: "--force ve --force-with-lease" },
    "u10-remote-yonetimi": { ad: "Uzak depoları yönetmek ve budamak" },

    "u11-rebase-nedir": { ad: "Rebase nedir" },
    "u11-merge-rebase": { ad: "Merge mi rebase mi" },
    "u11-etkilesimli": { ad: "Etkileşimli rebase: squash, reword, drop, sıra" },
    "u11-altin-kural": { ad: "Paylaşılmış geçmişi yeniden yazmamak" },
    "u11-cakisma": { ad: "Rebase'de çakışma: continue, skip, abort" },

    "u12-neden-akis": { ad: "Neden bir dal akışı" },
    "u12-github-flow": { ad: "GitHub Flow ve trunk-based geliştirme" },
    "u12-git-flow": { ad: "Git Flow: develop, release, hotfix" },
    "u12-uc-ortam": { ad: "Üç ortamlı akış: dev, test, main" },
    "u12-adlandirma": { ad: "Dal adları ve commit kuralları" },
    "u12-surum": { ad: "Sürüm numaraları, etiket ve release" },

    "u13-koruma": { ad: "Dal koruma kuralları" },
    "u13-onay": { ad: "Zorunlu inceleme, onay ve CODEOWNERS" },
    "u13-ci": { ad: "CI ve durum denetimleri" },
    "u13-actions": { ad: "GitHub Actions iş akışı dosyası" },
    "u13-birlestirme-kurallari": { ad: "Birleştirme engelleri ve gh ile PR yönetimi" },
  },
  terimler: [
    { tr: "sürüm kontrol sistemi", en: "version control system, VCS" },
    { tr: "depo", en: "repository", aciklama: "Projenin dosyaları ve bütün geçmişi" },
    { tr: "çalışma dizini", en: "working directory", aciklama: "Dosyaları düzenlediğin klasör" },
    { tr: "hazırlık alanı", en: "staging area, index", aciklama: "Bir sonraki commit'e girecek değişikliklerin toplandığı yer" },
    { tr: "uzak depo", en: "remote", aciklama: "Başka bir makinedeki (GitHub, GitLab) depo kopyası" },
    { tr: "dal", en: "branch", aciklama: "Bir commit'i gösteren, yeni commit'lerle ilerleyen işaretçi" },
    { tr: "birleştirme", en: "merge" },
    { tr: "çakışma", en: "conflict", aciklama: "İki tarafın aynı satırı farklı değiştirmesi" },
    { tr: "anlık görüntü", en: "snapshot", aciklama: "Commit anında bütün izlenen dosyaların hali" },
    { tr: "izlenmeyen dosya", en: "untracked file", aciklama: "Git'in henüz takip etmediği dosya" },
    { tr: "ileri sarma", en: "fast-forward", aciklama: "Dalın yeni commit oluşturmadan öne kaydırıldığı birleştirme" },
    { tr: "kopuk HEAD", en: "detached HEAD", aciklama: "HEAD'in bir dal yerine doğrudan bir commit'i gösterdiği durum" },
    { tr: "çekme isteği", en: "pull request, PR", aciklama: "Bir daldaki değişikliklerin incelenip başka dala alınması için açılan istek" },
    { tr: "çatallamak", en: "fork", aciklama: "Başkasının deposunun kendi hesabındaki kopyası" },
    { tr: "kenara koymak", en: "stash", aciklama: "Commit'lenmemiş değişiklikleri geçici olarak saklamak" },
    { tr: "uzak izleme dalı", en: "remote-tracking branch", aciklama: "origin/main gibi, uzak dalın son görülen hâlini gösteren yerel işaretçi" },
    { tr: "izlenen dal", en: "upstream branch", aciklama: "Yerel dalın push ve pull'da varsayılan olarak eşleştiği uzak dal" },
    { tr: "zorla göndermek", en: "force push", aciklama: "Uzak dalı ileri sarılamayan bir geçmişle ezmek" },
    { tr: "yeniden tabanlamak", en: "rebase", aciklama: "Commit'leri başka bir commit'in üstüne yeniden yazmak" },
    { tr: "sıkıştırmak", en: "squash", aciklama: "Birden çok commit'i tek commit'te birleştirmek" },
    { tr: "dal koruma kuralı", en: "branch protection rule, ruleset", aciklama: "Bir dala doğrudan push'u, force push'u ve onaysız birleştirmeyi engelleyen ayar" },
    { tr: "durum denetimi", en: "status check", aciklama: "PR birleşmeden önce geçmesi gereken otomatik denetim (CI)" },
    { tr: "sürekli entegrasyon", en: "continuous integration, CI", aciklama: "Her push ve PR'da derlemenin ve testlerin kendiliğinden çalışması" },
    { tr: "iş akışı", en: "workflow", aciklama: "GitHub Actions'ta .github/workflows altındaki YAML dosyası" },
    { tr: "anlamsal sürümleme", en: "semantic versioning, SemVer", aciklama: "MAJOR.MINOR.PATCH biçiminde sürüm numarası" },
    { tr: "acil düzeltme", en: "hotfix", aciklama: "Canlıdaki hatayı gidermek için doğrudan üretim dalından açılan dal" },
    { tr: "erişim token'ı", en: "personal access token", aciklama: "Parola yerine kullanılan, kapsamı ve süresi sınırlanabilen gizli anahtar" },
    { tr: "iki adımlı doğrulama", en: "two-factor authentication, 2FA" },
    { tr: "açık anahtar", en: "public key", aciklama: "Paylaşılabilen anahtar; GitHub'a eklenir" },
    { tr: "özel anahtar", en: "private key", aciklama: "Bilgisayarında kalan, kimseyle paylaşılmayan anahtar" },
  ],
  benzerler: [],
};
