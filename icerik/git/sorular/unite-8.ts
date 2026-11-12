// 8. ünite (Başlangıç): GitHub'da birlikte çalışmak. Pull request, kod incelemesi,
// birleştirme yöntemleri (merge, squash, rebase), fork ve upstream, issue.
import { sorular, type Soru } from "./yardimci.ts";

const U = 8;

export const unite8: Soru[] = [
  ...sorular(U, "u8-pr", [
    {
      ad: "pr-nedir",
      soru: "GitHub'da pull request (PR) nedir?",
      secenekler: [
        "Bir daldaki değişikliklerin başka dala alınma isteği",
        "Uzak depodaki değişiklikleri bilgisayarına indiren komut",
        "Bir depoyu kendi hesabına kopyalama işlemi, yani çatallama",
        "Depo sahibine gönderilen erişim izni başvurusu",
      ],
      aciklama: "PR \"bu dalımdaki değişiklikleri şu dala almanızı istiyorum\" demektir. Değişiklikler, tartışma, inceleme ve otomatik kontroller tek sayfada toplanır; onay gelince birleştirilir. Adı karıştırılmasın: ~git pull~ komutuyla ilgisi yoktur.",
    },
    {
      ad: "pr-oncesi",
      soru: "Bir PR açmadan önce bilgisayarında yapman gereken adımlar hangisidir?",
      secenekler: [
        "Dal aç, commit'le, dalı uzak depoya push et",
        "main'e commit'le, sonra GitHub'da PR düğmesine bas",
        "Depoyu ZIP olarak indir, düzenle, yeniden yükle",
        "Yalnızca dosyaları kaydetmek yeterlidir, PR gerisini halleder",
      ],
      aciklama: "PR bir dal üzerinden açılır: ~git switch -c ozellik~, commit'ler, ~git push -u origin ozellik~. GitHub push'tan sonra \"Compare & pull request\" düğmesini gösterir.",
    },
    {
      ad: "base-compare",
      zorluk: 2,
      soru: "PR açarken seçilen \"base\" ve \"compare\" dalları neyi anlatır?",
      secenekler: [
        "base değişikliklerin gideceği dal, compare değişiklikleri getiren dal",
        "base değişiklikleri getiren dal, compare hedef dal",
        "base uzak depo, compare yerel depo",
        "İkisi de aynı dalı gösterir, yalnızca görünüm farklıdır",
      ],
      aciklama: "~base: main ← compare: feature/giris~ okunuşu: giris dalındaki değişiklikler main'e alınmak isteniyor. Yanlış base seçmek (ör. dev yerine main) sık yapılan bir hatadır.",
    },
    {
      ad: "pr-guncelleme",
      senaryo: true,
      soru: "PR'ına inceleme yorumu geldi ve bir düzeltme yapman istendi. Düzeltmeyi PR'a nasıl eklersin?",
      secenekler: [
        "Aynı dala commit atıp push etmek",
        "PR'ı kapatıp düzeltmeyle yeni bir PR açmak",
        "Düzeltmeyi main'e doğrudan push etmek",
        "Düzeltmeyi yorum olarak PR'a yapıştırmak",
      ],
      aciklama: "PR bir dalı izler; o dala yeni commit push edince PR'a eklenir, inceleme ve kontroller yeniden çalışır. Yeni PR açmak tartışma geçmişini dağıtır.",
    },
    {
      ad: "draft",
      dy: true,
      soru: "GitHub'da taslak (draft) PR açmak, işin bitmediğini belirtir ve hazır olarak işaretlenene kadar birleştirilmesini engeller.",
      aciklama: "Doğru. Taslak PR erken geri bildirim almak ve kontrolleri çalıştırmak için kullanışlıdır; \"Ready for review\" denince normal PR olur.",
    },
    {
      ad: "kucuk-pr",
      senaryo: true,
      zorluk: 2,
      soru: "3000 satırlık bir PR iki haftadır incelenmeyi bekliyor. Ekip arkadaşların açmaktan çekiniyor. Bundan sonrası için en iyi ders hangisi?",
      secenekler: [
        "İşi küçük, tek amaçlı PR'lara bölmek",
        "PR açıklamasını kısaltmak",
        "İncelemeyi atlayıp doğrudan birleştirmek",
        "Bütün commit'leri tek commit'e sıkıştırmak",
      ],
      aciklama: "Küçük PR'lar hızlı ve dikkatli incelenir, çakışma riski düşer, sorun çıkınca geri almak kolaydır. Büyük bir özellik birbirinin üstüne kurulan birkaç PR'a bölünebilir.",
    },
  ]),

  ...sorular(U, "u8-inceleme", [
    {
      ad: "review-turleri",
      soru: "GitHub'da bir PR incelemesini bitirirken seçilebilen üç sonuç hangileridir?",
      secenekler: [
        "Comment, Approve, Request changes",
        "Merge, Close, Delete",
        "Push, Pull, Fetch",
        "Open, Draft, Archive",
      ],
      aciklama: "**Comment** yalnızca yorum bırakır, **Approve** onaylar, **Request changes** düzeltme ister ve korumalı dallarda birleştirmeyi engeller.",
    },
    {
      ad: "iyi-yorum",
      senaryo: true,
      soru: "Arkadaşının PR'ında bir fonksiyonun boş listede hata vereceğini fark ettin. Hangisi en yararlı inceleme yorumudur?",
      secenekler: [
        "İlgili satıra: \"Liste boşsa hata verir, kontrol ekleyelim mi?\"",
        "PR'ın geneline: \"Kod kötü olmuş, baştan yaz.\"",
        "Hiç yorum yazmadan PR'ı hemen onaylamak",
        "Hatayı kendin düzeltip arkadaşına haber vermeden main'e push etmek",
      ],
      dogru: 0,
      aciklama: "İyi inceleme yorumu ilgili satıra yazılır, sorunu ve nedenini söyler, çözüm önerir ve kişiyi değil kodu konuşur. GitHub'ın \"suggestion\" özelliğiyle önerilen satırı doğrudan da yazabilirsin.",
    },
    {
      ad: "neden-inceleme",
      soru: "Kod incelemesinin hata yakalamanın dışındaki önemli kazancı hangisidir?",
      secenekler: [
        "Bilginin ekipte yayılması, kodun ortak sahiplenilmesi",
        "Kodun daha hızlı derlenip çalışması",
        "Depodaki commit sayısının azalması",
        "Deponun diskte kapladığı yerin küçülmesi",
      ],
      aciklama: "İnceleyen kişi değişikliği öğrenir; yazan kişi geri bildirim alır. Böylece bir modülü yalnızca bir kişinin bildiği \"bus factor\" riski azalır.",
    },
    {
      ad: "kendi-onay",
      dy: false,
      soru: "GitHub'da bir PR'ın yazarı kendi PR'ını onaylayarak (Approve) zorunlu inceleme kuralını karşılayabilir.",
      aciklama: "Yanlış. GitHub yazarın kendi PR'ını onaylamasına izin vermez; zorunlu inceleme için başka bir kişinin onayı gerekir.",
    },
    {
      ad: "onay-sonrasi",
      senaryo: true,
      zorluk: 3,
      soru: "PR'ın onaylandı. Birleştirmeden hemen önce küçük bir değişiklik daha push ettin ve ekipte \"yeni push eski onayları düşürür\" kuralı açık. Ne olur?",
      secenekler: [
        "Onay geçersiz olur; değişikliğin yeniden incelenmesi gerekir",
        "Onay geçerli kalır, PR hemen birleştirilebilir",
        "PR otomatik olarak kapanır",
        "Yeni commit PR'a eklenmez, ayrı PR gerekir",
      ],
      aciklama: "\"Dismiss stale approvals\" kuralı, onaydan sonra gelen değişikliğin incelenmeden girmesini önler. Bu yüzden son düzeltmeler onaydan önce yapılır.",
    },
  ]),

  ...sorular(U, "u8-birlestirme-yontemi", [
    {
      ad: "squash",
      soru: "GitHub'daki \"Squash and merge\" seçeneği ne yapar?",
      secenekler: [
        "PR'ın bütün commit'lerini hedef dalda tek bir commit'e sıkıştırır",
        "PR'ın commit'lerini olduğu gibi ve bir birleştirme commit'iyle alır",
        "Commit'leri hedef dalın ucuna tek tek yeniden yazar",
        "PR'ı birleştirmeden kapatır",
      ],
      aciklama: "Squash, dalda \"düzeltme\", \"yazım\" gibi ara commit'ler olsa bile hedef dalda tek ve temiz bir commit bırakır. Dalın kendi commit'leri hedef dalın geçmişine girmez.",
    },
    {
      ad: "merge-commit",
      soru: "\"Create a merge commit\" seçeneğinin hedef dalın geçmişine etkisi nedir?",
      secenekler: [
        "Dalın bütün commit'leri ve bir birleştirme commit'i geçmişe girer",
        "Yalnızca tek bir sıkıştırılmış commit girer",
        "Hiçbir commit girmez, yalnızca dosyalar kopyalanır",
        "Dalın commit'leri yeni kimliklerle doğrusal olarak eklenir",
      ],
      aciklama: "Birleştirme commit'i iki ebeveynlidir; dalın bütün geçmişi korunur ve ~git log --graph~'ta dalın nerede ayrılıp nerede birleştiği görünür.",
    },
    {
      ad: "rebase-merge",
      zorluk: 2,
      soru: "\"Rebase and merge\" seçeneği hedef dalın geçmişini nasıl bırakır?",
      secenekler: [
        "PR commit'leri uca tek tek eklenmiş, doğrusal bir geçmiş",
        "PR'ın bütün commit'leri tek commit'e sıkıştırılmış bir geçmiş",
        "İki ebeveynli bir birleştirme commit'iyle dallanmış bir geçmiş",
        "Hiç değişmemiş bir geçmiş; PR yalnızca etiketlenir",
      ],
      aciklama: "Rebase ile commit'ler hedef dalın ucuna yeniden yazılır (kimlikleri değişir) ve geçmiş düz bir çizgi olur. Rebase'in ayrıntısı 11. ünitede.",
    },
    {
      ad: "squash-ne-zaman",
      senaryo: true,
      zorluk: 2,
      soru: "Bir PR'da \"wip\", \"düzeltme\", \"yazım hatası\", \"bir daha dene\" gibi 14 ara commit var; değişiklik tek bir özelliği ekliyor. main'in geçmişinin okunur kalması için hangi yöntem uygundur?",
      secenekler: ["Squash and merge", "Create a merge commit", "PR'ı kapatıp yeniden açmak", "Commit'leri olduğu gibi main'e push etmek"],
      aciklama: "Squash ile main'de \"Kullanıcı profili sayfası (#42)\" gibi tek, anlamlı bir commit kalır. Ara adımların geçmişte durması gereken PR'larda merge commit seçilir.",
    },
  ]),

  ...sorular(U, "u8-fork", [
    {
      ad: "fork-nedir",
      soru: "GitHub'da bir depoyu fork etmek ne demektir?",
      secenekler: [
        "Depoyu GitHub'da kendi hesabına kopyalamak",
        "Depoyu bütün geçmişiyle bilgisayarına indirmek",
        "Asıl depoda kendine yeni bir dal açmak",
        "Depoyu arşivleyip salt okunur yapmak",
      ],
      aciklama: "Fork, başkasının deposunun GitHub'da **senin hesabındaki** kopyasıdır. Yazma yetkin olmayan bir açık kaynak projeye katkı vermek için forkta dal açar, push eder ve asıl depoya PR gönderirsin.",
    },
    {
      ad: "fork-vs-clone",
      zorluk: 2,
      soru: "Fork ile clone arasındaki fark hangisinde doğru anlatılmıştır?",
      secenekler: [
        "Fork GitHub'da sunucu tarafında kopyalar, clone bilgisayarına indirir",
        "Fork yalnızca son commit'i alır, clone bütün geçmişi alır",
        "Fork bir Git komutudur, clone yalnızca GitHub'da yapılır",
        "İkisi aynı işi yapar, yalnızca adları farklıdır",
      ],
      aciklama: "Fork bir platform özelliğidir ve kopya GitHub'da durur. Sonra o forku ~git clone~ ile bilgisayarına indirirsin. Git'te ~fork~ diye bir komut yoktur.",
    },
    {
      ad: "upstream",
      soru: "Bir forkta çalışırken asıl (kaynak) depoyu ~upstream~ adıyla uzak depo olarak ekleyen komutu yaz. Asıl deponun adresi ~https://github.com/acik/proje.git~.",
      cevap: ["git remote add upstream https://github.com/acik/proje.git", "git remote add upstream https://github.com/acik/proje"],
      aciklama: "Alışkanlık: ~origin~ senin forkun, ~upstream~ asıl depo. Asıl depodaki yenilikleri ~git fetch upstream~ ve ~git merge upstream/main~ ile kendi dalına alırsın.",
    },
    {
      ad: "fork-guncel",
      senaryo: true,
      zorluk: 2,
      soru: "Üç ay önce fork ettiğin projeye katkı vereceksin ama forkun asıl deponun çok gerisinde. PR açmadan önce ne yapmalısın?",
      secenekler: [
        "upstream'deki yenilikleri alıp dalını güncellemek",
        "Forku silip asıl depoya doğrudan push etmek",
        "Eski hâliyle PR açıp bakımcının birleştirmesini beklemek",
        "Asıl depoyu ZIP indirip forkun üstüne kopyalamak",
      ],
      aciklama: "~git fetch upstream~, ardından dalını ~upstream/main~ üzerine kur (merge ya da rebase). GitHub'daki \"Sync fork\" düğmesi de forkun main'ini günceller.",
    },
    {
      ad: "yetki",
      dy: true,
      soru: "Bir depoya collaborator (katkıcı) olarak eklenmişsen fork açmadan doğrudan o depoda dal açıp PR gönderebilirsin.",
      aciklama: "Doğru. Fork daha çok yazma yetkin olmayan projeler içindir. Ekip içinde genelde aynı depoda dallar ve PR'larla çalışılır.",
    },
  ]),

  ...sorular(U, "u8-issue", [
    {
      ad: "issue-nedir",
      soru: "GitHub'da issue ne için kullanılır?",
      secenekler: [
        "Hata, öneri ve yapılacak işleri kaydetmek için",
        "Kodu bir daldan diğer dala taşımak için",
        "Deponun görünürlük ayarlarını değiştirmek için",
        "Commit'leri geri almak için",
      ],
      aciklama: "Issue bir iş kaydıdır: başlık, açıklama, etiketler, atanan kişi ve tartışma. ~#12~ gibi numarasıyla commit'lerden ve PR'lardan anılır.",
    },
    {
      ad: "closes",
      soru: "PR açıklamasına hangi ifade yazılırsa PR main'e birleştiğinde 12 numaralı issue otomatik kapanır?",
      secenekler: ["~Closes #12~", "~See #12~", "~Issue 12~", "~@12~"],
      aciklama: "~Closes~, ~Fixes~ ya da ~Resolves~ ve ardından ~#12~ yazılırsa PR varsayılan dala birleşince issue kapanır. Yalnızca ~#12~ yazmak bağlantı kurar ama kapatmaz.",
    },
    {
      ad: "iyi-issue",
      senaryo: true,
      soru: "Uygulamada bir hata buldun ve issue açacaksın. Hangisi en yararlı hata kaydıdır?",
      secenekler: [
        "Adımlar, beklenen ve gerçekleşen sonuç, sürüm ve ekran görüntüsü",
        "Yalnızca \"çalışmıyor\" başlığı",
        "Hatanın kimin yüzünden olduğunu tahmin eden bir paragraf",
        "Uygulamanın bütün kaynak kodunu yapıştırmak",
      ],
      aciklama: "Hatayı yeniden üretebilmek için adımlar, beklenen davranış, gerçekleşen davranış ve ortam bilgisi gerekir. Birçok proje bunun için issue şablonları kullanır.",
    },
    {
      ad: "etiket-atama",
      dy: true,
      soru: "Issue'lara etiket (label) eklemek ve kişi atamak, işlerin sınıflandırılıp kimde olduğunun görülmesini sağlar.",
      aciklama: "Doğru. ~bug~, ~enhancement~, ~good first issue~ gibi etiketler ve atanan kişi, proje panolarında işleri düzenlemeyi kolaylaştırır.",
    },
  ]),
];
