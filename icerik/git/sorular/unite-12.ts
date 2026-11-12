// 12. ünite (İleri): takım akışları. GitHub Flow, trunk-based, Git Flow, üç ortamlı
// akış (dev, test, main; Cargo Pilot kağıdındaki süreç), dal adları ve sürümleme.
import { sorular, type Soru } from "./yardimci.ts";

const U = 12;

export const unite12: Soru[] = [
  ...sorular(U, "u12-neden-akis", [
    {
      ad: "neden",
      soru: "Bir ekibin yazılı bir dal akışı (branching strategy) belirlemesinin asıl amacı nedir?",
      secenekler: [
        "Herkesin işi aynı yoldan canlıya taşıması",
        "Git komutlarının sayısını en aza indirmek",
        "Commit mesajlarını tek bir kalıba sokmak",
        "GitHub'a daha az para ödemek",
      ],
      aciklama: "Akış, \"dal nereden açılır, nereye birleşir, ne zaman canlıya çıkar\" sorularının ortak cevabıdır. Herkes aynı kurala uyunca kimse yarım işi canlıya taşımaz, kimse ne yapacağını tahmin etmek zorunda kalmaz.",
    },
    {
      ad: "tek-dogru",
      dy: false,
      soru: "Her ekip için doğru olan tek bir dal akışı vardır; diğerleri yanlıştır.",
      aciklama: "Yanlış. Günde birçok kez canlıya çıkan küçük bir ekip için GitHub Flow, sürüm sürüm ilerleyen ve ayrı test ortamı olan bir ekip için üç ortamlı akış ya da Git Flow uygun olabilir. Akış ekibin ihtiyacına göre seçilir.",
    },
    {
      ad: "karar",
      senaryo: true,
      zorluk: 2,
      soru: "İki kişilik bir ekip bir web sitesini her gün birkaç kez canlıya çıkarıyor, ayrı bir test ortamı yok. Hangi akış en az yük getirir?",
      secenekler: [
        "GitHub Flow: main'den dal, PR, birleşince canlı",
        "Git Flow: develop, release ve hotfix dalları",
        "Üç ortamlı akış: dev, test ve main",
        "Herkesin doğrudan main'e push etmesi",
      ],
      aciklama: "GitHub Flow tek bir uzun ömürlü dalla (main) çalışır: kısa ömürlü dal, PR, inceleme, birleştirme, canlı. Ayrı bir test ortamı ve sürüm takvimi yoksa ek dallar yalnızca yük getirir. Doğrudan main'e push ise incelemeyi atlar.",
    },
  ]),
  ...sorular(U, "u12-github-flow", [
    {
      ad: "adimlar",
      soru: "GitHub Flow'un sırası hangisidir?",
      secenekler: [
        "main'den dal aç, commit'le, PR aç, incelet, birleştir",
        "develop'tan dal aç, release dalına birleştir, etiketle",
        "main'e doğrudan commit'le, sonra PR aç",
        "Dal aç, main'i dala birleştir, dalı canlıya çıkar",
      ],
      aciklama: "GitHub Flow'da main her zaman canlıya çıkabilir durumdadır. Her iş main'den açılan kısa ömürlü bir dalda yapılır ve PR ile incelenip main'e birleştirilir.",
    },
    {
      ad: "main-hazir",
      dy: true,
      soru: "GitHub Flow'un temel kuralı, main dalının her an canlıya çıkarılabilir durumda olmasıdır.",
      aciklama: "Doğru. Bu yüzden main'e yalnızca incelenmiş ve testleri geçmiş PR'lar girer.",
    },
    {
      ad: "trunk",
      soru: "Trunk-based geliştirmede dallar nasıldır?",
      secenekler: [
        "Çok kısa ömürlüdür; en geç bir iki günde ana dala girer",
        "Aylarca yaşar, sürüm bitince birleştirilir",
        "Hiç kullanılmaz, herkes kendi kopyasında çalışır",
        "Her geliştiricinin kalıcı bir kişisel dalı olur",
      ],
      aciklama: "Trunk-based geliştirmede herkes sık sık (günde en az bir kez) ana dala (trunk) birleşir. Yarım özellikler \"özellik bayrağı\" (feature flag) ile gizlenir; uzun ömürlü dallar ve büyük çakışmalar oluşmaz.",
    },
    {
      ad: "uzun-dal",
      senaryo: true,
      zorluk: 2,
      soru: "Bir geliştirici bir özellik dalında üç hafta tek başına çalıştı, şimdi PR açınca yüzlerce satırlık çakışma çıktı. Akış açısından asıl sorun nedir?",
      secenekler: [
        "Dal çok uzun yaşadı, iş bölünmeliydi",
        "Git'in birleştirme algoritması eskidir",
        "PR yerine doğrudan push etmeliydi",
        "Dalın adı kurallara uygun değildi",
      ],
      aciklama: "Bir dal ne kadar uzun yaşarsa ana daldan o kadar uzaklaşır. İşi küçük PR'lara bölmek ve ana dalı sık sık kendi dalına almak (merge ya da rebase) çakışmaları küçük tutar.",
    },
    {
      ad: "feature-flag",
      zorluk: 3,
      soru: "Trunk-based geliştirmede bitmemiş bir özelliğin kodu ana dala girdiğinde kullanıcılar onu neden görmez?",
      secenekler: [
        "Özellik bayrağı kapalı olduğu için kod çalışmaz",
        "Git bitmemiş commit'leri canlıya göndermez",
        "Ana dal canlıya hiç çıkmaz",
        "Kod ayrı bir depoda tutulur",
      ],
      aciklama: "Özellik bayrağı (feature flag), kodun içinde açılıp kapanabilen bir anahtardır. Kod canlıda durur ama bayrak açılana kadar devreye girmez; böylece yarım iş uzun ömürlü bir dalda beklemez.",
    },
  ]),
  ...sorular(U, "u12-git-flow", [
    {
      ad: "dallar",
      soru: "Klasik Git Flow'da günlük geliştirme hangi dalda toplanır?",
      secenekler: ["develop", "main", "release", "hotfix"],
      aciklama: "Git Flow'da özellik dalları develop'tan açılır ve develop'a birleşir. main yalnızca yayımlanan sürümleri tutar; release dalı sürüm hazırlığı, hotfix dalı canlıdaki acil hatalar içindir.",
    },
    {
      ad: "hotfix",
      zorluk: 2,
      soru: "Git Flow'da canlıdaki acil bir hata için hotfix dalı nereden açılır ve nereye birleşir?",
      secenekler: [
        "main'den açılır; hem main'e hem develop'a birleşir",
        "develop'tan açılır; yalnızca develop'a birleşir",
        "release'ten açılır; yalnızca release'e birleşir",
        "Herhangi bir daldan açılır; birleştirilmez",
      ],
      aciklama: "Hotfix canlıdaki kodu düzeltir, bu yüzden main'den açılır. Düzeltme hem main'e (ve yeni bir sürüm etiketine) hem develop'a birleşir; yoksa bir sonraki sürümde hata geri gelir.",
    },
    {
      ad: "release",
      dy: true,
      soru: "Git Flow'da release dalı açıldıktan sonra o dala yeni özellik eklenmez; yalnızca sürüm hazırlığı ve hata düzeltmesi yapılır.",
      aciklama: "Doğru. Yeni özellikler develop'ta birikmeye devam eder; release dalı sürümü dondurur ve hazır olunca main'e birleşip etiketlenir.",
    },
    {
      ad: "agir",
      senaryo: true,
      zorluk: 2,
      soru: "Ekip Git Flow kullanıyor ama ürün bir web sitesi ve her birleştirme hemen canlıya çıkıyor; release dalları hep tek commit'lik kalıyor. Ne önerirsin?",
      secenekler: [
        "Daha hafif bir akışa, GitHub Flow'a geçmeyi",
        "Release dallarının sayısını artırmayı",
        "develop dalını silmeyi ve main'e doğrudan push etmeyi",
        "Her özellik için ayrı bir depo açmayı",
      ],
      aciklama: "Git Flow sürümleri ayrı ayrı çıkan ürünler için tasarlandı. Sürekli canlıya çıkan bir sitede release adımı boş tören olur; GitHub Flow aynı güvenliği daha az dalla sağlar.",
    },
  ]),
  ...sorular(U, "u12-uc-ortam", [
    {
      ad: "dallar-ne",
      soru: "Üç ortamlı akışta main, test ve dev dalları neyi temsil eder?",
      secenekler: [
        "Sırasıyla canlı, QA ve geliştirme ortamı",
        "Üç farklı geliştiricinin kişisel dalları",
        "Sırasıyla eski, şimdiki ve gelecek sürüm",
        "Üç ayrı GitHub deposu",
      ],
      aciklama: "Her ortamın bir dalı vardır: dev'e birleşen kod geliştirme ortamına, test'e birleşen QA'nın denediği test ortamına, main'e birleşen canlıya çıkar.",
    },
    {
      ad: "nereden",
      soru: "Üç ortamlı akışta (Cargo Pilot kuralları) yeni bir feature dalı hangi daldan açılır?",
      secenekler: ["test", "dev", "main", "Bir önceki feature dalından"],
      aciklama: "Dal test'ten açılır. test, canlıya çıkmaya aday ve doğrulanmış kodu tutar. dev'den açılan dal, dev'deki başkalarının yarım işlerini de taşır ve onları test'e sızdırır.",
    },
    {
      ad: "sira",
      zorluk: 2,
      soru: "Bir feature dalının canlıya kadar izlediği yol hangisidir?",
      secenekler: [
        "Dal dev'e, sonra test'e PR'lanır; test main'e çıkar",
        "dev'den test'e toptan birleştirme, sonra main'e push",
        "Doğrudan main'e PR, sonra main'den dev'e ve test'e",
        "PR 1 ile test'e, sonra dev'i main'e birleştirme",
      ],
      aciklama: "Aynı dal iki ayrı PR açar: önce dev'e (geliştirme ortamında dene), sorun yoksa test'e (QA doğrulaması). Canlıya çıkış, test'ten main'e açılan Release PR ile olur.",
    },
    {
      ad: "dev-toptan",
      dy: false,
      soru: "Üç ortamlı akışta işler bitince dev dalı toptan test'e birleştirilir.",
      aciklama: "Yanlış. dev'de herkesin yarım ya da henüz onaylanmamış işleri vardır. Toptan birleştirme hepsini test'e (ve sonra canlıya) taşır. Her özellik test'e kendi dalından, kendi PR'ıyla gider.",
    },
    {
      ad: "dev-kirli",
      senaryo: true,
      zorluk: 3,
      soru: "dev'de Mert'in yarım bir ödeme özelliği var. Senin düzeltmen dev'de denendi, şimdi test'e çıkması gerekiyor. Ne yaparsın?",
      secenekler: [
        "Kendi feature dalımdan test'e ikinci bir PR açarım",
        "dev'den test'e bir PR açarım",
        "Mert'in işini dev'den silerim",
        "test'i dev'e eşitleyip force push ederim",
      ],
      aciklama: "Dalın test'ten açıldığı için yalnızca senin commit'lerini taşır. Aynı daldan test'e PR açınca Mert'in yarım işi dev'de kalır. dev'den PR açmak onu da test'e götürür.",
    },
    {
      ad: "yanlis-yer",
      senaryo: true,
      zorluk: 2,
      soru: "Yeni işe başlarken dalını yanlışlıkla dev'den açtın, iki commit attın, henüz push etmedin. En temiz düzeltme hangisi?",
      secenekler: [
        "Commit'lerimi test'in üstüne taşırım",
        "Dalı olduğu gibi push edip PR'ı test'e açarım",
        "dev'i test'e birleştiririm ki fark kalmasın",
        "Commit'leri silip işi baştan yazarım",
      ],
      aciklama: "Dal dev'den açıldıysa dev'deki başkalarının commit'lerini de içerir. ~git rebase --onto origin/test origin/dev~ (ya da test'ten yeni bir dal açıp kendi commit'lerini cherry-pick etmek) yalnızca senin commit'lerini test'in üstüne taşır.",
    },
    {
      ad: "dal-ac-komut",
      soru: "~test~'in GitHub'daki son hâlinden ~feature/US-D03e-docker-compose-local~ dalını açıp ona geçen komutu yaz (önce fetch yaptığını varsay).",
      cevap: ["git switch -c feature/US-D03e-docker-compose-local origin/test", "git checkout -b feature/US-D03e-docker-compose-local origin/test"],
      aciklama: "~origin/test~ uzaktaki test'in son görülen hâlidir. Yerel test eskiyse ondan açmak eski koddan başlamak olur; bu yüzden önce ~git fetch~, sonra ~origin/test~'ten dal.",
    },
    {
      ad: "release-pr",
      dy: true,
      soru: "Üç ortamlı akışta canlıya çıkış, test'ten main'e açılan bir Release PR ile yapılır.",
      aciklama: "Doğru. test'te QA'nın doğruladığı işler Release PR ile main'e birleşir ve canlıya çıkar. Release PR genellikle bir sürüm etiketiyle (v1.4.0 gibi) işaretlenir.",
    },
    {
      ad: "dal-silme",
      soru: "Feature dalı test'e birleştikten sonra ne yapılır?",
      secenekler: [
        "Dal silinir; iş artık ortam dallarında",
        "Dal bir sonraki iş için saklanır",
        "Dal main'e de doğrudan push edilir",
        "Dal yeni bir adla yeniden açılır",
      ],
      aciklama: "İşi biten dal silinir (GitHub'da birleştirme sonrası düğme ya da ~gh pr merge --delete-branch~). Eski dalları biriktirmek listeyi karıştırır; herkes ~git fetch --prune~ ile kendi izini temizler.",
    },
  ]),
  ...sorular(U, "u12-adlandirma", [
    {
      ad: "onek",
      soru: "~bugfix/US-D12-login-validation~ dal adındaki parçalar neyi anlatır?",
      secenekler: [
        "İşin türü, iş kaydının numarası ve kısa açıklaması",
        "Geliştiricinin adı, tarih ve sürüm numarası",
        "Hedef ortam, onaylayan kişi ve test sonucu",
        "Dalın açıldığı dal, saat ve commit sayısı",
      ],
      aciklama: "~bugfix/~ (ya da ~feature/~) işin türünü, ~US-D12~ iş takip sistemindeki kaydı, ~login-validation~ ise ne yapıldığını söyler. PR listesinde ve geçmişte iş bir bakışta anlaşılır.",
    },
    {
      ad: "bosluk",
      dy: false,
      soru: "Dal adlarında boşluk ve Türkçe karakter kullanmak iyi bir alışkanlıktır; okunabilirliği artırır.",
      aciklama: "Yanlış. Boşluk komut satırında tırnak gerektirir, Türkçe karakterler bazı araçlarda sorun çıkarır. Kısa çizgiyle ayrılmış küçük harfler (~login-validation~) en güvenlisidir.",
    },
    {
      ad: "conventional",
      zorluk: 2,
      soru: "\"Conventional Commits\" kuralına uyan commit mesajı hangisidir?",
      secenekler: ["fix: boş parola artık reddediliyor", "Düzeltmeler yapıldı", "login.js güncellendi", "son hali"],
      aciklama: "Conventional Commits ~tür(kapsam): açıklama~ biçimini kullanır (~feat~, ~fix~, ~docs~, ~refactor~...). Böylece sürüm notları ve sürüm numarası commit'lerden otomatik çıkarılabilir.",
    },
    {
      ad: "is-numarasi",
      senaryo: true,
      soru: "Ekip panosunda sana US-D21 numaralı \"sepete indirim kodu\" işi atandı. Hangi dal adı ekip kuralına en uygun?",
      secenekler: ["feature/US-D21-indirim-kodu", "deniz-yeni-is", "indirim kodu", "US-D21"],
      aciklama: "Tür öneki, iş numarası ve kısa açıklama birlikte olunca dal, hem iş kaydına hem PR'a bağlanır. Boşluklu ad komut satırında sorun çıkarır.",
    },
  ]),
  ...sorular(U, "u12-surum", [
    {
      ad: "semver",
      soru: "Anlamsal sürümlemede (SemVer) ~2.4.1~'den sonra yalnızca bir hata düzeltmesi yayımlanırsa yeni sürüm ne olur?",
      secenekler: ["2.4.2", "2.5.0", "3.0.0", "2.4.1.1"],
      aciklama: "SemVer ~MAJOR.MINOR.PATCH~ biçimindedir. Geriye uyumlu hata düzeltmesi PATCH'i, geriye uyumlu yeni özellik MINOR'u, uyumu bozan değişiklik MAJOR'u artırır.",
    },
    {
      ad: "major",
      zorluk: 2,
      soru: "Bir API'deki bir alanın adı değişti ve eski istemciler artık çalışmıyor. SemVer'e göre ~1.7.3~'ten sonra hangi sürüm gelir?",
      secenekler: ["2.0.0", "1.8.0", "1.7.4", "1.7.3-yeni"],
      aciklama: "Geriye uyumu bozan değişiklik MAJOR'u artırır, MINOR ve PATCH sıfırlanır: ~2.0.0~.",
    },
    {
      ad: "etiket",
      soru: "Sürüm etiketi (tag) ne işe yarar?",
      secenekler: [
        "Bir commit'e kalıcı, taşınmayan bir ad verir",
        "Dalı başkalarının push'una karşı korur",
        "Commit'leri sıkıştırır",
        "Uzak depoya otomatik push eder",
      ],
      aciklama: "Dal ilerler, etiket ilerlemez. ~v1.2.0~ etiketi hep aynı commit'i gösterir; canlıdaki sürümün hangi kod olduğu her zaman bilinir.",
    },
    {
      ad: "etiket-komut",
      soru: "Bulunduğun commit'e ~v1.2.0~ adında açıklamalı (annotated) bir etiket koyan komutu yaz (mesajı ~-m~ ile vermeyi düşünme, yalnızca etiketi aç).",
      cevap: ["git tag -a v1.2.0"],
      aciklama: "~git tag -a v1.2.0 -m \"Sürüm 1.2.0\"~ açıklamalı etiket oluşturur: kim, ne zaman ve neden bilgisini taşır. ~-a~ olmadan hafif (lightweight) etiket oluşur.",
    },
    {
      ad: "etiket-push",
      zorluk: 2,
      dy: true,
      soru: "~git push~ etiketleri kendiliğinden göndermez; ~git push origin v1.2.0~ ya da ~git push --tags~ gerekir.",
      aciklama: "Doğru. Etiketler ayrıca gönderilir. GitHub'daki Releases sayfası da bir etikete bağlanarak oluşturulur.",
    },
    {
      ad: "github-release",
      zorluk: 2,
      soru: "GitHub'daki bir \"Release\" ile etiket arasındaki ilişki nedir?",
      secenekler: [
        "Release bir etikete bağlanıp sürüm notu ekler",
        "Release etiketin yerine geçer, etiket silinir",
        "Release yalnızca main dalına push ile oluşur",
        "İkisi arasında bir ilişki yoktur",
      ],
      aciklama: "Etiket Git'in kavramıdır; Release ise GitHub'ın onun üstüne koyduğu sayfadır: sürüm notları, indirilebilir dosyalar ve otomatik kaynak arşivi.",
    },
    {
      ad: "etiket-tasima",
      senaryo: true,
      zorluk: 3,
      soru: "~v2.0.0~ etiketini push ettin, sonra son anda bir düzeltme commit'i geldi. Etiketi yeni commit'e taşıyıp zorla göndermek mi, yoksa ~v2.0.1~ mi?",
      secenekler: [
        "v2.0.1 çıkarırım; yayımlanmış etiket taşınmaz",
        "Etiketi taşıyıp git push --force --tags yaparım",
        "Etiketi silip aynı adla yeniden açarım, kimse fark etmez",
        "Düzeltmeyi bir sonraki büyük sürüme bırakırım",
      ],
      aciklama: "Başkaları ~v2.0.0~'ı çekmiş ya da canlıya çıkarmış olabilir; etiketin altındaki kodun değişmesi \"aynı sürüm, farklı kod\" karışıklığı yaratır. Yeni bir PATCH sürümü güvenli yoldur.",
    },
  ]),
];
