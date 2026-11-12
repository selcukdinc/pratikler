// "Nereden başlamalıyım?" seviye testi: her kademeden üç soru. Bir kademenin en az
// iki sorusunu bilen o kademeyi geçmiş sayılır; öneri geçilemeyen ilk kademedir.
// Sorular soru havuzunda yoktur (kendini dene ve karma testte çıkmaz).
import type { SeviyeTestiTanimi } from "../../../src/components/SeviyeTesti";

export const SEVIYE_TESTI: SeviyeTestiTanimi = {
  gecme: 2,
  hepsiGectiNotu: "Sandbox'taki Kademe 5 görevleriyle kendini dene; takıldığın görevin ünitesine dönebilirsin.",
  sorular: [
    // Acemi
    {
      grup: 0,
      soru: "Git ile GitHub arasındaki ilişki hangisidir?",
      secenekler: ["İkisi aynı programın farklı adları", "Git sürüm kontrol aracı, GitHub depoları barındıran bir platform", "GitHub, Git'in yeni sürümü", "Git yalnızca GitHub'da çalışır"],
      dogru: 1,
    },
    {
      grup: 0,
      soru: "Değiştirdiğin bir dosyayı bir sonraki commit'e almak için önce hangi komutu yazarsın?",
      secenekler: ["`git add <dosya>`", "`git push`", "`git init`", "`git log`"],
      dogru: 0,
    },
    {
      grup: 0,
      soru: "`.gitignore` dosyası ne işe yarar?",
      secenekler: ["Silinen dosyaları geri getirir", "Commit mesajlarını saklar", "Git'in izlemeyeceği dosyaları listeler", "Uzak deponun adresini tutar"],
      dogru: 2,
    },
    // Başlangıç
    {
      grup: 1,
      soru: "Git'te bir dal (branch) aslında nedir?",
      secenekler: ["Projenin tam bir kopyası", "Bir commit'i gösteren, yeni commit'lerle ilerleyen işaretçi", "Uzak depodaki bir klasör", "Silinen commit'lerin listesi"],
      dogru: 1,
    },
    {
      grup: 1,
      soru: "Dosyada `<<<<<<< HEAD`, `=======` ve `>>>>>>>` satırlarını görüyorsun. Ne oldu?",
      secenekler: ["Dosya bozuldu", "Birleştirmede çakışma çıktı; doğru hâli seçip işaretleri silmelisin", "Git dosyayı şifreledi", "Commit mesajı eksik"],
      dogru: 1,
    },
    {
      grup: 1,
      soru: "Push edilmiş bir commit'in etkisini paylaşılan dalda geri almanın güvenli yolu hangisidir?",
      secenekler: ["`git reset --hard HEAD~1` ve force push", "`git revert <commit>`", "Commit'i GitHub'dan silmek", "`git stash`"],
      dogru: 1,
    },
    // Orta
    {
      grup: 2,
      soru: "`git fetch` ile `git pull` arasındaki fark nedir?",
      secenekler: ["fetch yalnızca indirir; pull indirip dalına birleştirir", "İkisi aynıdır", "fetch gönderir, pull indirir", "pull yalnızca etiketleri alır"],
      dogru: 0,
    },
    {
      grup: 2,
      soru: "Ekip arkadaşlarının da kullandığı, push edilmiş bir dalda neden rebase yapılmaz?",
      secenekler: ["Rebase yalnızca main'de çalışır", "Rebase dosyaları siler", "Commit'lerin kimlikleri değişir, başkalarının geçmişiyle ayrışır", "Rebase internet ister"],
      dogru: 2,
    },
    {
      grup: 2,
      soru: "main dalında \"Require a pull request before merging\" kuralı açık. Ne olur?",
      secenekler: ["Kimse main'i göremez", "main'e doğrudan push reddedilir, değişiklik PR ile girer", "Her push otomatik PR olur", "PR'lar onaysız birleşir"],
      dogru: 1,
    },
    // İleri
    {
      grup: 3,
      soru: "Herkese açık bir depoya bir API anahtarı push ettin. İlk yapman gereken nedir?",
      secenekler: ["Dosyayı silip yeni commit atmak", "Depoyu private yapmak", "Anahtarı sağlayıcıda iptal etmek", "Geçmişi yeniden yazmak"],
      dogru: 2,
    },
    {
      grup: 3,
      soru: "GitLab'da pull request'in karşılığı nedir?",
      secenekler: ["Merge request", "Push request", "Pipeline", "Issue"],
      dogru: 0,
    },
    {
      grup: 3,
      soru: "v1.0'da çalışan bir özellik 200 commit sonra bozuk. Hatayı getiren commit'i en hızlı hangi araç bulur?",
      secenekler: ["`git blame`", "`git bisect`", "`git cherry-pick`", "`git log --stat`"],
      dogru: 1,
    },
    // Usta
    {
      grup: 4,
      soru: "Bir dosyayı içeriğine dokunmadan yeniden adlandırıp commit'lersen yeni bir blob nesnesi oluşur mu?",
      secenekler: ["Evet, ad değişince blob da değişir", "Hayır; ad tree'de durur, blob aynı kalır", "Evet, her commit bütün blob'ları yeniden yazar", "Hayır, commit de oluşmaz"],
      dogru: 1,
    },
    {
      grup: 4,
      soru: "Yanlışlıkla `git stash drop` yaptın; reflog'da da görünmüyor. Ne işe yarar?",
      secenekler: ["Hiçbir şey; stash geri gelmez", "`git stash pop`", "`git fsck` ile sahipsiz commit'i bulup `git stash apply <kimlik>`", "`git reset --hard HEAD@{1}`"],
      dogru: 2,
    },
    {
      grup: 4,
      soru: "Geçmişten büyük bir dosyayı `git filter-repo` ile sildin. Sonra ne gerekir?",
      secenekler: ["origin'i yeniden ekleyip dalları ve etiketleri force push etmek, ekibin yeniden clone etmesi", "Hiçbir şey; uzak depo kendiliğinden güncellenir", "Yalnızca `git pull`", "Yeni bir commit atıp normal push"],
      dogru: 0,
    },
  ],
};
