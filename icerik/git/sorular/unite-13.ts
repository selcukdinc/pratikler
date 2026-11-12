// 13. ünite (İleri): korumalar ve otomasyon. Dal koruma kuralları, zorunlu inceleme
// ve CODEOWNERS, CI ve durum denetimleri, GitHub Actions, PR'ı gh ile yönetmek.
import { sorular, type Soru } from "./yardimci.ts";

const U = 13;

export const unite13: Soru[] = [
  ...sorular(U, "u13-koruma", [
    {
      ad: "ne-ise",
      soru: "GitHub'da bir dala koruma kuralı (branch protection) koymak ne sağlar?",
      secenekler: [
        "Dala doğrudan push'u ve kuralsız birleştirmeyi engeller",
        "Dalın kodunu şifreler",
        "Dalı yalnızca okunur bir yedeğe çevirir",
        "Dalın commit'lerini otomatik olarak sıkıştırır",
      ],
      aciklama: "Koruma kuralı \"bu dala ancak şu şartlarla girilir\" der: PR zorunlu, en az N onay, CI yeşil, force push ve silme kapalı. Kural Git'te değil platformda (GitHub, GitLab) uygulanır.",
    },
    {
      ad: "red-mesaji",
      soru: "Korumalı ~main~'e ~git push~ yapınca \"GH006: Protected branch update failed... Changes must be made through a pull request\" çıktı. Doğru hamle nedir?",
      secenekler: [
        "Kendi dalımı açıp oraya push eder, PR açarım",
        "git push --force ile tekrar denerim",
        "Depo ayarlarından korumayı kapatırım",
        "main'i silip yeniden oluştururum",
      ],
      aciklama: "Red bir hata değil, kuralın işlediğinin kanıtıdır. Commit'i bir feature dalına taşı (~git switch -c ...~), dalı push et ve PR aç. Korumayı kapatmak kuralı herkes için anlamsız kılar.",
    },
    {
      ad: "force-kapali",
      dy: true,
      soru: "Korumalı dallarda force push ve dal silme varsayılan olarak kapalıdır.",
      aciklama: "Doğru. GitHub'da koruma kuralı açıldığında \"Allow force pushes\" ve \"Allow deletions\" ayrıca izin verilmedikçe kapalıdır; paylaşılan geçmiş yeniden yazılamaz.",
    },
    {
      ad: "git-mi",
      zorluk: 2,
      soru: "Dal koruması nerede uygulanır?",
      secenekler: [
        "Uzak depoyu barındıran platformda",
        "Herkesin bilgisayarındaki Git ayarlarında",
        "Yalnızca .gitignore dosyasında",
        "Git'in commit komutunda",
      ],
      aciklama: "Koruma bir platform özelliğidir. Kendi bilgisayarında main'e istediğin kadar commit atabilirsin; kural, bu commit'leri GitHub'a göndermeye çalıştığında devreye girer.",
    },
    {
      ad: "yerel-commit",
      senaryo: true,
      zorluk: 2,
      soru: "Korumalı ~main~'de yerelde iki commit attın, push reddedildi. İşini kaybetmeden akışa nasıl dönersin?",
      secenekler: [
        "Commit'leri yeni dala alıp main'i geri sararım",
        "Commit'leri silip işi baştan yaparım",
        "Koruma kalkana kadar beklerim",
        "Commit'leri amend ederek mesajlarını değiştiririm",
      ],
      aciklama: "~git switch -c feature/...~ ile commit'leri yeni dala al, ~git switch main~ ve ~git reset --hard origin/main~ ile main'i uzaktakine eşitle. Sonra feature dalını push edip PR aç. (Sandbox'ta bu senaryoyu bir görev olarak deneyebilirsin.)",
    },
    {
      ad: "uc-ortam-koruma",
      zorluk: 2,
      soru: "Üç ortamlı akışta hangi dallar korumalı olmalıdır?",
      secenekler: ["main, test ve dev", "Yalnızca main", "Yalnızca feature dalları", "Hiçbiri; ekip güvene dayanır"],
      aciklama: "Üç ortam dalı da korumalıdır: doğrudan push yok, PR zorunlu, CI geçmeli; dev'e en az bir onay. Feature dalları ise kişiye aittir ve korunmaz.",
    },
  ]),
  ...sorular(U, "u13-onay", [
    {
      ad: "kendi-onay",
      dy: false,
      soru: "PR'ı açan kişi kendi PR'ını onaylayarak zorunlu onay şartını karşılayabilir.",
      aciklama: "Yanlış. GitHub kişinin kendi PR'ını onaylamasına izin vermez. İncelemenin amacı ikinci bir gözdür.",
    },
    {
      ad: "codeowners",
      soru: "~CODEOWNERS~ dosyası ne işe yarar?",
      secenekler: [
        "Hangi dosyaları kimin inceleyeceğini söyler",
        "Deponun sahibini başka bir hesaba aktarır",
        "Kimin push edebileceğini listeler",
        "Lisans bilgisini tutar",
      ],
      aciklama: "~.github/CODEOWNERS~ içindeki ~/odeme/ @odeme-ekibi~ gibi satırlar, o dosyalara dokunan PR'lara ilgili kişileri otomatik olarak inceleyici ekler. Koruma kuralında \"Require review from Code Owners\" açıksa onları onaylamadan birleştirilemez.",
    },
    {
      ad: "degisiklik-istegi",
      zorluk: 2,
      soru: "Bir inceleyici PR'a \"Request changes\" dedi. Bu ne anlama gelir?",
      secenekler: [
        "Kişi onayını verene kadar PR birleştirilemez",
        "PR otomatik olarak kapanır",
        "Değişiklikleri inceleyicinin kendisi yapar",
        "PR yalnızca squash ile birleştirilebilir",
      ],
      aciklama: "Değişiklik isteği birleştirmeyi engeller. Yazar istenenleri aynı dala commit'leyip push eder; PR kendiliğinden güncellenir, inceleyici yeniden bakıp onaylar.",
    },
    {
      ad: "yeni-commit",
      zorluk: 3,
      senaryo: true,
      soru: "PR'ın onaylandı. Birleştirmeden hemen önce dalına küçük bir commit daha push ettin ve onay \"stale\" olarak düştü. Neden böyle bir ayar vardır?",
      secenekler: [
        "Onaydan sonra gelen kod incelenmeden birleşmesin diye",
        "GitHub'ın bir hatasıdır",
        "Commit sayısı sınırını aşmamak için",
        "Push eden kişinin yetkisini denetlemek için",
      ],
      aciklama: "\"Dismiss stale approvals\" ayarı açıkken yeni commit eski onayı geçersiz kılar. Aksi hâlde biri onay aldıktan sonra incelenmemiş kodu sessizce ekleyebilir.",
    },
    {
      ad: "inceleme-ne",
      soru: "İyi bir kod incelemesinde inceleyici önce neye bakar?",
      secenekler: [
        "Değişikliğin amacına ve risklerine",
        "Yazarın bu dalda kaç commit attığına",
        "Dosya adlarının alfabetik sırasına",
        "PR'ın kaç saat önce açıldığına",
      ],
      aciklama: "İnceleme önce \"doğru şey mi, doğru mu yapılmış\" sorusunu sorar: amaç, hatalar, güvenlik, test. Biçim konularını linter ve CI üstlenir.",
    },
  ]),
  ...sorular(U, "u13-ci", [
    {
      ad: "ci-nedir",
      soru: "Sürekli entegrasyon (CI) nedir?",
      secenekler: [
        "Her push'ta testlerin kendiliğinden çalışması",
        "Kodun her gece elle canlıya çıkarılması",
        "Bütün dalların her gün main'e birleştirilmesi",
        "Kodun yalnızca tek bir bilgisayarda derlenmesi",
      ],
      aciklama: "CI, değişiklikleri sık sık birleştirip her seferinde otomatik denetler: derleme, testler, lint. Hata, kod ana dala girmeden yakalanır.",
    },
    {
      ad: "durum-denetimi",
      soru: "Koruma kuralında \"Require status checks to pass\" açıksa ne olur?",
      secenekler: [
        "CI yeşil olmadan PR birleştirilemez",
        "CI kırmızıysa PR kendiliğinden kapanır",
        "CI yalnızca main'de çalışır",
        "Onaylar yok sayılır",
      ],
      aciklama: "Durum denetimi (status check) CI'ın sonucudur. Zorunlu denetim kırmızıysa birleştirme düğmesi kapanır; dalda düzeltip push edince CI yeniden çalışır.",
    },
    {
      ad: "kirmizi",
      senaryo: true,
      zorluk: 2,
      soru: "PR'ında CI \"lint\" adımında kırmızı: ~console.log~ satırı kalmış. Ne yaparsın?",
      secenekler: [
        "Satırı silip aynı dala commit'ler, push ederim",
        "Yeni bir PR açarım",
        "CI'ı depo ayarlarından kapatırım",
        "Yöneticiden zorla birleştirmesini isterim",
      ],
      aciklama: "PR bir dala bağlıdır: dala yeni commit gelince PR güncellenir ve CI yeniden çalışır. Kuralı kapatmak ya da atlamak sorunu canlıya taşır.",
    },
    {
      ad: "checks-komut",
      soru: "Bulunduğun dalın PR'ındaki CI sonuçlarını terminalde gösteren GitHub CLI komutunu yaz.",
      cevap: ["gh pr checks"],
      aciklama: "~gh pr checks~ her denetimi ✓ ya da X ile listeler; kırmızı varsa çıkış kodu 1 olur. ~gh pr view~ ise onayları ve birleştirme engellerini de gösterir.",
    },
    {
      ad: "yerelde-gecti",
      dy: false,
      soru: "Kod benim bilgisayarımda çalışıyorsa CI'ın kırmızı olması önemsizdir; birleştirilebilir.",
      aciklama: "Yanlış. CI temiz bir ortamda çalışır; senin bilgisayarındaki eksik bir dosya, unutulan bir bağımlılık ya da kalan bir hata ayıklama satırı orada ortaya çıkar. \"Bende çalışıyor\" CI'ın yakalamak için var olduğu durumdur.",
    },
    {
      ad: "cd",
      zorluk: 2,
      soru: "CI ile CD (sürekli teslimat / dağıtım) arasındaki fark nedir?",
      secenekler: [
        "CI kodu denetler; CD denetlenen kodu ortama otomatik çıkarır",
        "CI yalnızca main'de, CD yalnızca feature dallarında çalışır",
        "İkisi aynı şeyin farklı adıdır",
        "CD testleri, CI dağıtımı yapar",
      ],
      aciklama: "CI derler ve test eder; CD testten geçen kodu dev, test ya da canlı ortama otomatik dağıtır. Üç ortamlı akışta her ortam dalına birleşme, o ortama dağıtımı tetikleyebilir.",
    },
  ]),
  ...sorular(U, "u13-actions", [
    {
      ad: "nerede",
      soru: "GitHub Actions iş akışı (workflow) dosyaları depoda nerede durur?",
      secenekler: [".github/workflows/ klasöründe", "Deponun kökündeki actions.txt dosyasında", ".git/hooks/ klasöründe", "GitHub ayarlarında; depoda durmaz"],
      aciklama: "İş akışları ~.github/workflows/~ altındaki YAML dosyalarıdır ve kodla birlikte sürümlenir. Değişiklikleri de PR ile incelenir.",
    },
    {
      ad: "on",
      zorluk: 2,
      soru: "Bir iş akışı dosyasındaki ~on: pull_request~ satırı ne söyler?",
      secenekler: [
        "İş akışı bir PR açıldığında ya da güncellendiğinde çalışır",
        "İş akışı yalnızca PR birleştikten sonra çalışır",
        "PR'lar için onay gerekir",
        "PR açmak yasaktır",
      ],
      aciklama: "~on~ tetikleyicidir: ~push~, ~pull_request~, ~schedule~ (zamanlanmış) gibi olaylardan hangisinde çalışacağını söyler.",
    },
    {
      ad: "jobs-steps",
      zorluk: 2,
      soru: "Bir iş akışında ~jobs~ ve ~steps~ arasındaki ilişki nedir?",
      secenekler: [
        "Her job bir makinede çalışır ve sırayla çalışan step'lerden oluşur",
        "Her step ayrı bir depoda çalışır",
        "jobs yalnızca main'de, steps yalnızca PR'da çalışır",
        "İkisi aynı şeyin farklı adıdır",
      ],
      aciklama: "Bir job ~runs-on~ ile seçilen bir makinede (ör. ~ubuntu-latest~) çalışır; içindeki step'ler sırayla yürür: kodu al (~actions/checkout~), bağımlılıkları kur, testleri çalıştır. Job'lar varsayılan olarak paralel çalışır.",
    },
    {
      ad: "checkout",
      dy: true,
      soru: "Bir iş akışında kodu kullanabilmek için önce ~actions/checkout~ adımıyla depo makineye alınır.",
      aciklama: "Doğru. İş akışı boş bir makinede başlar; ~uses: actions/checkout@v4~ deponun ilgili commit'ini o makineye klonlar.",
    },
    {
      ad: "gizli",
      senaryo: true,
      zorluk: 3,
      soru: "İş akışının canlıya dağıtım için bir API anahtarına ihtiyacı var. Anahtarı nereye koyarsın?",
      secenekler: [
        "Depo ayarlarındaki Secrets bölümüne",
        "İş akışı dosyasına düz metin olarak",
        "README'ye, ekip kolay bulsun diye",
        "Ayrı bir .env dosyasına ve commit'lerim",
      ],
      aciklama: "GitHub Actions gizli değerleri depo (ya da ortam) ayarlarındaki Secrets'ta saklar; iş akışında ~secrets.API_ANAHTARI~ ifadesiyle okunur ve günlüklerde maskelenir. Depoya giren her anahtar, geçmişte sonsuza kadar kalır (14. ünite).",
    },
  ]),
  ...sorular(U, "u13-birlestirme-kurallari", [
    {
      ad: "pr-create",
      soru: "Bulunduğun ve push ettiğin feature dalından ~dev~'e PR açan GitHub CLI komutunun başını yaz (başlık seçeneği olmadan).",
      cevap: ["gh pr create --base dev", "gh pr create -B dev"],
      aciklama: "~gh pr create --base dev --title \"...\"~ bulunduğun daldan dev'e PR açar. Dal önce GitHub'a push edilmiş olmalıdır.",
    },
    {
      ad: "engel",
      soru: "~gh pr merge~ şunu yazdı: \"At least 1 approving review is required\". Ne eksik?",
      secenekler: ["Bir ekip arkadaşının onayı", "CI'ın yeniden çalışması", "Dalın yeniden push edilmesi", "Commit mesajının düzeltilmesi"],
      aciklama: "Hedef dalın kuralı en az bir onay istiyor. Bir ekip arkadaşın PR'ı inceleyip onaylayınca (~gh pr review --approve~) birleştirme açılır.",
    },
    {
      ad: "cakisan-pr",
      senaryo: true,
      zorluk: 2,
      soru: "PR'ın onaylı ve CI yeşil ama GitHub \"This branch has conflicts that must be resolved\" diyor. Ne yaparsın?",
      secenekler: [
        "Hedefi dalıma alıp çözer, push ederim",
        "PR'ı kapatıp hedefe doğrudan push ederim",
        "Onayı geri çekip yeniden isterim",
        "CI'ı yeniden çalıştırırım",
      ],
      aciklama: "Çakışma, hedef dal sen çalışırken ilerlediği için çıkar. ~git fetch~, sonra ~git merge origin/dev~ (ya da kendi dalın için rebase), çakışmayı çöz ve push et. PR güncellenir; ayara göre yeniden onay gerekebilir.",
    },
    {
      ad: "squash-sil",
      zorluk: 2,
      soru: "~gh pr merge 7 --squash --delete-branch~ ne yapar?",
      secenekler: [
        "Tek commit olarak birleştirip dalı siler",
        "PR'ı kapatır ve commit'leri siler",
        "Dalı yerelde siler, PR açık kalır",
        "PR'ı rebase ile birleştirir, dal kalır",
      ],
      aciklama: "~--squash~ dalın bütün commit'lerini hedefte tek commit yapar; ~--delete-branch~ işi biten dalı siler. Yereldeki dalı ve izini sen temizlersin (~git branch -d~, ~git fetch --prune~).",
    },
    {
      ad: "admin",
      senaryo: true,
      zorluk: 3,
      soru: "Cuma akşamı acil bir düzeltme var, onay verecek kimse yok. Yöneticisin ve kuralları atlayıp birleştirme yetkin var. En sağlıklı yol hangisi?",
      secenekler: [
        "Kuralı atlamam, nöbetçi birine incelettiririm",
        "Korumayı kapatıp main'e push eder, sonra açarım",
        "Kendi PR'ımı ikinci bir hesapla onaylarım",
        "Düzeltmeyi CI'sız doğrudan canlıya kopyalarım",
      ],
      aciklama: "Acil anlar hataların en çok yapıldığı anlardır; kural tam da bunun için var. Ekipler acil durumlar için nöbetçi inceleyici belirler. Kuralı atlamak gerekiyorsa bile bu kayıtlı ve istisna olmalı, alışkanlık değil.",
    },
    {
      ad: "pr-guncellenir",
      dy: true,
      soru: "Açık bir PR'ın dalına yeni commit push edilince PR kendiliğinden güncellenir; yeni bir PR açmaya gerek yoktur.",
      aciklama: "Doğru. PR bir dalı izler; dala gelen her commit PR'a da girer ve CI yeniden çalışır.",
    },
  ]),
];
