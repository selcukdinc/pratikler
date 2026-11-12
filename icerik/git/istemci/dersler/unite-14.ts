import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitAgaci, headCommit, icerik } from "../../../../src/gitsim/depo";
import type { Ortam } from "../../../../src/gitsim/tipler";
import { BOT_OLAYI, envHazir, ODEME_TEMEL, odemeDosyasi, odemedeVar, odemePlatformu, ornekIptal, ORNEK_ANAHTAR } from "../kafe";

// HEAD commit'inde dosya (yoksa null)
function headte(o: Ortam, yol: string): string | null {
  const d = o.depo;
  const h = d && headCommit(d);
  const b = d && h ? commitAgaci(d, h)[yol] : undefined;
  return d && b ? icerik(d, b) : null;
}

const ENV = `KAFEPAY_KEY=${ORNEK_ANAHTAR}`;

export const UNITE_14: Ders = {
  hafta: 14,
  baslik: "Gizli Anahtarlar ve Depo Güvenliği",
  ozet: "Public bir depoya düşen anahtar dakikalar içinde bulunur ve kullanılır. Gizli bilginin neden depoya girmediğini, botların nasıl çalıştığını, sızıntıda hangi sırayla ne yapılacağını ve bunun bir daha olmaması için kurulan kapıları tatbikatla öğren.",
  bolumler: [
    {
      baslik: "Gizli bilgi nedir?",
      metin: md(`
**Gizli bilgi** (secret), ele geçiren kişinin senin adına iş yapabildiği her değerdir:

| Tür | Örnek | Ele geçiren ne yapar? |
|---|---|---|
| API anahtarı | ödeme, e-posta, harita hizmetinin anahtarı | hesabından para çeker, fatura çıkarır |
| Veritabanı parolası | ~DB_PASSWORD~ | müşteri verisini okur, siler |
| Erişim token'ı | GitHub kişisel erişim token'ı | depolarına kod yazar, gizli depolarını okur |
| Özel anahtar | ~¬/.ssh/id_ed25519~, TLS sertifikasının anahtarı | sunucularına girer, senin gibi görünür |

Kural basit: **gizli değer koda yazılmaz, depoya girmez.** Kod, değeri çalışırken dışarıdan okur:

~~~
const anahtar = process.env.KAFEPAY_KEY;
~~~

Geliştirirken değerler projenin kökündeki ~.env~ dosyasında durur ve bu dosya ~.gitignore~'dadır. Depoya, değerleri boş bir **~.env.example~** girer; yeni gelen ekip arkadaşı onu kopyalayıp kendi değerlerini yazar.

> Bu ünitedeki ödeme hizmeti **KafePay** hayalidir. Anahtarları ~kp_live_~ ile başlar; terminalde ~kafepay~ komutuyla anahtar listeler, iptal eder ve yenilersin.

Terminalde Kafe Mavi'nin ödeme modülü var; ~.env~ dosyası henüz izlenmiyor ama bir sonraki ~git add .~ onu da alacak. Önce kapıyı kapat.
`),
      git: {
        dosyalar: { "odeme.js": "const anahtar = process.env.KAFEPAY_KEY;\n", ".env": ENV + "\n" },
        kurulum: ["git init", "git add odeme.js", 'git commit -m "Ödeme modülü"'],
        gorev: "~.env~'i ~.gitignore~'a ekle, değeri boş bir ~.env.example~ yaz ve ikisini commit'le. ~.env~ diskte kalsın.",
        oneriler: ['echo ".env" >> .gitignore', 'echo "KAFEPAY_KEY=" > .env.example', "git add .", 'git commit -m "Ayar örneği"', "git status"],
        hedefler: [
          { aciklama: "Commit'te .gitignore var ve .env'i yok sayıyor", denetle: (o) => (headte(o, ".gitignore") ?? "").split("\n").includes(".env") },
          { aciklama: "Commit'te değeri boş bir .env.example var", denetle: (o) => headte(o, ".env.example") === "KAFEPAY_KEY=\n" },
          { aciklama: ".env commit'e girmedi, diskte duruyor", denetle: (o) => headte(o, ".env") === null && (o.dosyalar[".env"] ?? "").includes("kp_live_") },
        ],
      },
      dene: ["gt-u14-hangisi-gizli", "gt-u14-env-dosyasi"],
    },
    {
      baslik: "Botlar seni bekliyor",
      metin: md(`
GitHub, public depolardaki her push'u herkese açık bir olay akışında yayımlar. Bu akışı saniye saniye izleyen botlar var. Her yeni push'u indirir, bilinen anahtar biçimlerini (GitHub token'ları ~ghp_~, AWS erişim anahtarları ~AKIA~ ile başlar) ve ~.env~ gibi dosya adlarını arar, bulduğunu hemen dener.

Bu bir varsayım değil. 2019'da yayımlanan bir araştırma (Meli ve arkadaşları, "How Bad Can It Git?", NDSS 2019) GitHub'ın public depolarında 100 binden fazla depoda sızmış anahtar buldu ve her gün binlercesinin yeni sızdığını gösterdi. Güvenlik ekiplerinin public depolara bilerek koyduğu tuzak anahtarlar da çoğu zaman dakikalar içinde, tanımadık adreslerden denenir.

Sonuç: deponun küçük ya da yeni olması seni korumaz. Botlar depoya değil push'a bakar.

Şekilde anahtarlı ~.env~'i public depoya gönder. Saat push'la başlar; botun ne zaman geldiğini ve zarar sayacını izle, sonra müdahaleyi sen sırala. Bitince aynı push'u **push protection** açıkken dene.

[[G-H14-01]]
`),
      dene: ["gt-u14-ne-kadar-hizli", "gt-u14-kucuk-depo"],
    },
    {
      baslik: "Silmek neden yetmez?",
      metin: md(`
Paniğin ilk refleksi dosyayı silip yeni bir commit atmaktır. Ama commit bir anlık görüntüdür: anahtar, sildiğin commit'ten öncekinde olduğu gibi durur.

~~~
git log -p -- .env
~~~

Bu komut dosyanın bütün geçmişini farklarıyla gösterir; silinmiş olsa bile. GitHub'da o commit'in sayfası da açıktır.

Geçmişi yeniden yazıp (~git rebase -i~, ~git commit --amend~, büyük depolarda ~git filter-repo~) ~git push --force~ ile göndermek GitHub'daki dalları temizler. Yine de yetmez:

- Push ile temizlik arasında botlar değeri çoktan almış olabilir.
- Depoyu fork'layan ya da clone'layan herkesin kopyasında anahtar durur.
- PR sayfaları ve önbellekte kalan görünümler bir süre daha erişilebilir (bunlar için GitHub destek ekibine başvurulur).
- Depoyu private yapmak yeni ziyaretçiyi durdurur, alınmış kopyaları geri getirmez.

Ortadan kaldıramayacağın kopyalara karşı tek çare var: **anahtarı geçersiz kılmak.**

Terminalde biri ~.env~'i commit'lemiş, sonra "sildim" diye ikinci bir commit atmış. Anahtarı geçmişte bul.
`),
      git: {
        dosyalar: { "odeme.js": "const anahtar = process.env.KAFEPAY_KEY;\n" },
        kurulum: [
          "git init",
          `echo "${ENV}" > .env`,
          "git add .",
          'git commit -m "Ödeme modülü"',
          "git rm .env",
          'git commit -m ".env silindi"',
        ],
        gorev: "~ls~ ile bak: ~.env~ yok. Sonra ~git log -p -- .env~ ile geçmişe bak; anahtar hâlâ orada.",
        oneriler: ["ls", "git log --oneline", "git log -p -- .env"],
      },
      dene: ["gt-u14-sil-commit", "gt-u14-private-yap"],
    },
    {
      baslik: "Doğru müdahale sırası",
      metin: md(`
Sızıntıda sıra her şeydir. Her dakika anahtarın kullanılabildiği bir dakikadır.

1. **İptal et ve yenile.** Sağlayıcının panelinden ya da aracından anahtarı iptal et (revoke) ve yenisini üret (rotate). Yeni değer yalnızca ~.env~'e (sunucuda ortam değişkenine) yazılır. Bu adım kanamayı durdurur; geri kalanı bekleyebilir.
2. **Kayıtları incele.** Sağlayıcının erişim kayıtlarında sızıntı anından bu yana tanımadığın istekleri ara: ne okundu, ne değişti, ne kadar harcandı?
3. **Geçmişi temizle.** Anahtarı GitHub'daki geçmişten çıkar ve force push et. Değer artık geçersiz olsa da yeni kopyaların önüne geçer.
4. **Haber ver.** Ekip yeni anahtarı sunuculara ve CI'a dağıtsın; kayıtlarda kötüye kullanım varsa sağlayıcıya ve ilgililere bildir.
5. **Önleme kur.** ~.env~ ~.gitignore~'a; depoda push protection; gerekirse pre-commit tarayıcısı.

Şimdi gerçeğini yap. Terminalde ödeme modülünün **public** deposu var ve son commit'ine ~.env~ girmiş. Push et ve bota dikkat et.
`),
      git: {
        kurulum: [...ODEME_TEMEL, odemePlatformu({ herkeseAcik: true }), `echo "${ENV}" > .env`, 'echo "const anahtar = process.env.KAFEPAY_KEY;" > odeme.js', "git add .", 'git commit -m "Ödeme ayarları"'],
        gorev: "Push et. Bot anahtarı bulunca: önce ~kafepay keys roll > .env~ ile anahtarı yenile, ~kafepay logs~'a bak, sonra ~.env~'i izlemeden çıkarıp commit'i düzelt ve GitHub'a ~--force~ ile gönder.",
        oneriler: [
          "git push",
          "kafepay keys roll > .env",
          "kafepay logs",
          "git rm --cached .env",
          'echo ".env" >> .gitignore',
          "git add .gitignore",
          "git commit --amend --no-edit",
          "git push --force",
        ],
        olaylar: [BOT_OLAYI],
        hedefler: [
          { aciklama: "Sızan anahtar iptal edildi", denetle: ornekIptal },
          { aciklama: ".env'de yeni ve geçerli bir anahtar var, Git onu izlemiyor", denetle: envHazir },
          { aciklama: "GitHub'daki geçmişte eski anahtar kalmadı", denetle: (o) => !!odemeDosyasi(o, "odeme.js") && !odemedeVar(o, ORNEK_ANAHTAR) },
          { aciklama: "GitHub'daki .gitignore .env'i yok sayıyor", denetle: (o) => (odemeDosyasi(o, ".gitignore") ?? "").split("\n").includes(".env") },
        ],
      },
      dene: ["gt-u14-ilk-adim", "gt-u14-sira"],
    },
    {
      baslik: "Önleme: kapıyı baştan kapat",
      metin: md(`
**Ortam değişkenleri.** Kod değeri ~process.env~ (Python'da ~os.environ~) üzerinden okur. Geliştirmede ~.env~, sunucuda barındırma platformunun gizli ayarları, GitHub Actions'ta depo secret'ları (~secrets.KAFEPAY_KEY~) değeri sağlar. Kod her yerde aynıdır, değer ortama göre değişir.

**.gitignore baştan.** Projeye ilk gün ~.env~ satırını ekle. Sonradan eklemek, zaten izlenen dosyayı izlemeden çıkarmaz:

~~~
git rm --cached .env
~~~

Bu komut dosyayı index'ten çıkarır, diskte bırakır. Önceki commit'lerdeki kopyası ise yerinde durur; push edilmediyse geçmişi düzeltirsin (11. ünite), edildiyse anahtarı yenilersin.

**Gizli bilgi yöneticisi.** Büyüyen ekiplerde değerler dosyalara dağılmaz; bulut sağlayıcının secret manager'ı ya da bir kasa yazılımı değerleri tek yerde saklar, kimin neye eriştiğini kaydeder, anahtarları merkezi olarak yeniler.

**En az yetki, kısa ömür.** Token yalnızca gereken işi yapabilsin (yalnızca okuma, yalnızca bir depo) ve süresi dolsun. Sızarsa zarar o işle ve o süreyle sınırlı kalır.

Terminalde ~.env~ yanlışlıkla commit'lenmiş (henüz push edilmedi). Git onu izlemeyi bıraksın, dosya diskte kalsın.
`),
      git: {
        dosyalar: { "odeme.js": "const anahtar = process.env.KAFEPAY_KEY;\n", ".env": ENV + "\n" },
        kurulum: ["git init", "git add .", 'git commit -m "Ödeme modülü"'],
        gorev: "~git rm --cached .env~ ile izlemeden çıkar, ~.gitignore~'a ekle ve commit'le.",
        oneriler: ["git rm --cached .env", 'echo ".env" >> .gitignore', "git add .gitignore", 'git commit -m ".env izlemeden çıkarıldı"', "git status"],
        hedefler: [
          { aciklama: "Son commit'te .env yok", denetle: (o) => !!o.depo && headte(o, "odeme.js") !== null && headte(o, ".env") === null },
          { aciklama: ".gitignore .env'i yok sayıyor ve commit'lendi", denetle: (o) => (headte(o, ".gitignore") ?? "").split("\n").includes(".env") },
          { aciklama: ".env diskte duruyor", denetle: (o) => (o.dosyalar[".env"] ?? "").includes("kp_live_") },
        ],
      },
      dene: ["gt-u14-gitignore-sonra", "gt-u14-en-az-yetki"],
    },
    {
      baslik: "Tarayıcılar: kapıda ve içeride",
      metin: md(`
Önlemi insanların dikkatine bırakmamak için üç katman var:

| Katman | Nerede? | Ne yapar? |
|---|---|---|
| Pre-commit tarayıcısı | geliştiricinin bilgisayarı | Git'in pre-commit kancasıyla (hook) her commit'ten önce çalışır; anahtar bulursa commit'i durdurur (ör. Gitleaks) |
| **Push protection** | GitHub, push sırasında | yeni commit'lerde tanınan bir anahtar biçimi varsa push'u reddeder |
| **Secret scanning** | GitHub, depoda | depodaki kodu ve geçmişi tarar, bulduğu anahtar için uyarı açar |

Push protection GitHub'da public depolarda varsayılan olarak açıktır. Reddettiği push şöyle görünür:

~~~
remote: error: GH013: Repository rule violations found for refs/heads/main.
remote: - GITHUB PUSH PROTECTION
remote:     - Push cannot contain secrets
remote:       —— KafePay Live Secret Key ——
remote:        locations:
remote:          - commit: 5c1e...
remote:            path: odeme.js:1
 ! [remote rejected] main -> main (push declined due to repository rule violations)
~~~

Anahtar GitHub'a **hiç ulaşmadı**: iptal etmen gerekmez. Ama yeni bir "anahtarı sildim" commit'i de yetmez, çünkü reddedilen commit hâlâ push'un içindedir. Anahtarın geçtiği commit'i düzeltirsin: son commit'se ~git commit --amend~, daha eskiyse ~git rebase -i~. (GitHub "yanlış alarm" gibi durumlar için gerekçe yazarak geçmeye izin verir; bu geçiş kaydedilir ve yöneticilere görünür.)

Secret scanning'in bir de **ortak programı** var: GitHub, public depoda bulduğu anahtarı onu üreten sağlayıcıya bildirir; bazı sağlayıcılar anahtarı kendiliğinden kısıtlar ya da iptal eder. Bu bir emniyet ağıdır, müdahale planı değil.

Terminalde push protection açık. Son commit'te anahtar koda gömülü; push'u dene, reddi gör ve düzelt.
`),
      git: {
        kurulum: [...ODEME_TEMEL, odemePlatformu({ gizliKoruma: true }), `echo 'const anahtar = "${ORNEK_ANAHTAR}";' > odeme.js`, "git add .", 'git commit -m "Ödeme modülü"'],
        gorev: "Push'u dene. Sonra anahtarı ~.env~'e taşı, ~.env~'i yok say, ~odeme.js~ değeri ~process.env~'den okusun; commit'i ~--amend~ ile düzeltip yeniden push et.",
        oneriler: [
          "git push",
          `echo "${ENV}" > .env`,
          'echo ".env" >> .gitignore',
          "echo 'const anahtar = process.env.KAFEPAY_KEY;' > odeme.js",
          "git add .",
          "git commit --amend --no-edit",
          "git push",
        ],
        hedefler: [
          { aciklama: "GitHub'daki odeme.js değeri ortamdan okuyor", denetle: (o) => (odemeDosyasi(o, "odeme.js") ?? "").includes("process.env.KAFEPAY_KEY") },
          { aciklama: "GitHub'daki geçmişte anahtar yok", denetle: (o) => !odemedeVar(o, ORNEK_ANAHTAR) },
          { aciklama: ".env'de anahtar var, Git onu izlemiyor", denetle: envHazir },
        ],
      },
      dene: ["gt-u14-push-protection", "gt-u14-secret-scanning"],
    },
    {
      baslik: "Gözden kaçan yerler",
      metin: md(`
Anahtarların çoğu ~.env~'den değil, akla gelmeyen yerlerden sızar:

- **Ön yüz paketi.** Vite'ta ~VITE_~, Next.js'te ~NEXT_PUBLIC_~ önekli değişkenler tarayıcıya giden JavaScript'e gömülür. Tarayıcıya giden her şey herkese açıktır: gizli anahtar yalnızca sunucuda kullanılır, ön yüz sunucuya istek atar.
- **CI günlükleri.** GitHub Actions depo secret'larını günlükte ~***~ olarak maskeler; ama değer dönüştürülürse (base64, URL içinde) maskeleme tutmaz. Gizli değeri hata ayıklamak için bile ~echo~ ile basma.
- **Defter çıktıları.** Jupyter defteri (~.ipynb~) çıktı hücrelerini de saklar; ~print(ayarlar)~ çıktısındaki anahtar commit'e girer.
- **Yapılandırma dosyaları.** ~docker-compose.yml~, Kubernetes ve CI dosyalarına "geçici olarak" yazılmış parolalar.
- **Eski commit'ler** ve **ekran görüntüleri**: hata bildirimi için alınan bir görüntüdeki terminal.
- **Yayımlanmış ~.git~ klasörü.** Siteyi sunucuya klasörüyle kopyalayınca ~site.com/.git/~ adresinden bütün geçmiş indirilebilir.

Şimdi anahtar avı: on iki parçada sızıntıyı bul.

[[G-H14-02]]
`),
      dene: ["gt-u14-vite-onek", "gt-u14-defter"],
    },
  ],
  test: [
    "gt-u14-neden-tehlike", "gt-u14-private-depo", "gt-u14-nasil-bulur", "gt-u14-tuzak-anahtar", "gt-u14-gecmis-temizle-yeter-mi", "gt-u14-log-p", "gt-u14-kayitlar", "gt-u14-yenile-env", "gt-u14-haber", "gt-u14-ortam-degiskeni", "gt-u14-rm-cached", "gt-u14-yonetici", "gt-u14-gh013-sonra", "gt-u14-pre-commit", "gt-u14-ci-gunluk", "gt-u14-env-example",
  ],
};
