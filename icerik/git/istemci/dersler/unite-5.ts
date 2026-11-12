import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_5: Ders = {
  hafta: 5,
  baslik: "GitHub'a İlk Adım",
  ozet: "GitHub'da hesap ve depo aç, public ile private farkını, README ve lisansı öğren, git clone ile depo indir, remote ve push ile deponu gönder, pull ile güncel kal ve GitHub'a güvenle bağlan (token, SSH, 2FA).",
  bolumler: [
    {
      baslik: "Hesap ve ilk depo",
      metin: md(`
github.com'da ücretsiz bir hesap aç; kullanıcı adın adreslerinde görünecek (~github.com/ayse~). Sağ üstteki **+** → **New repository** ile depo açarken:

- **Repository name:** kısa ve açıklayıcı, ör. ~hesap-makinesi~. Deponun adresi ~github.com/ayse/hesap-makinesi~ olur.
- **Public / Private:** kimin görebileceği (sonraki bölüm).
- **Add a README / .gitignore / license:** Bilgisayarında **zaten commit'leri olan** bir projeyi göndereceksen bunları **işaretleme**; boş depo aç. Yoksa GitHub'da ilk commit oluşur ve iki geçmiş birbirini tanımaz.

Depolar bir kişinin hesabı yerine bir **organizasyonun** altında da açılabilir (ör. ~github.com/sirket/proje~); ekipler ve yetkiler orada yönetilir.
`),
      dene: ["gt-u5-bos-depo", "gt-u5-depo-adresi"],
    },
    {
      baslik: "Public mi, private mı?",
      metin: md(`
- **Public** depo: internetteki **herkes** görebilir, indirebilir, kopyalayabilir (fork). Ama herkes **yazamaz**: commit göndermek için yetki gerekir; dışarıdan katkı pull request'le gelir.
- **Private** depo: yalnızca sen ve yetki verdiğin kişiler (ya da organizasyonun üyeleri) görebilir.

"Adresini kimseyle paylaşmadık, kimse bulamaz" bir güvenlik önlemi değildir: public depolar aranır, listelenir ve **botlar tarafından dakikalar içinde taranır**. Bir depoyu private'tan public'e çevirmeden önce **bütün geçmişi** düşün: eski commit'lerdeki bir şifre ya da anahtar da görünür olur.
`),
      dene: ["gt-u5-gizli-ama-public", "gt-u5-privatetan-publice"],
    },
    {
      baslik: "README ve lisans",
      metin: md(`
**README.md** deponun vitrinidir: GitHub onu deponun ana sayfasında gösterir. Projenin ne olduğu, nasıl kurulup çalıştırıldığı ve nasıl katkı verileceği burada yazar. ~.md~ uzantısı **Markdown** demektir: ~# Başlık~, ~**kalın**~, ~- madde~ gibi basit işaretlerle biçimlenen düz metin.

**LICENSE** başkalarının kodunla ne yapabileceğini söyler. Public bir depoda lisans **yoksa** kodu görmek serbesttir ama hukuken kopyalama, değiştirme ve dağıtma hakları sende kalır. Yaygın seçenekler:

- **MIT:** Neredeyse her şey serbest; yalnızca telif ve lisans metni korunmalı. Kapalı kaynaklı ürünlerde de kullanılabilir.
- **GPL:** Kodu değiştirip dağıtan, kendi kodunu da aynı lisansla açmak zorundadır ("copyleft").
`),
      dene: ["gt-u5-lisans-yok"],
    },
    {
      baslik: "git clone: depoyu indir",
      metin: md(`
GitHub'daki bir depoyu bilgisayarına almak için deponun sayfasındaki **Code** düğmesinden adresi kopyala:

~~~
git clone https://github.com/ayse/proje.git
~~~

Git ~proje~ adında bir klasör açar ve içine dosyaların son hâliyle birlikte **bütün geçmişi** (bütün commit'ler ve dallar) indirir. İndirdiği uzak depoyu da ~origin~ adıyla hatırlar; sonraki ~push~ ve ~pull~ komutları oraya gider.

**Download ZIP** ise yalnızca dosyaların o anki hâlini verir: içinde ~.git~ yoktur, geçmiş yoktur, push edemezsin. Katkı vereceksen her zaman ~clone~.
`),
      dene: ["gt-u5-zip-clone"],
    },
    {
      baslik: "remote ve push: deponu gönder",
      metin: md(`
Bilgisayarında commit'leri olan bir projeyi boş bir GitHub deposuna göndermek iki adımdır. Önce uzak deponun adresini ~origin~ adıyla tanıt:

~~~
git remote add origin https://github.com/ayse/blog.git
~~~

Sonra ~main~ dalını gönder:

~~~
git push -u origin main
~~~

~-u~ (uzun hâli ~--set-upstream~) yerel ~main~ ile ~origin/main~ arasında **izleme bağlantısı** kurar; bundan sonra yalnızca ~git push~ ve ~git pull~ yazman yeter. Bağlı uzak depoları görmek için ~git remote -v~.

Push yalnızca **commit'leri** gönderir: kaydedip commit'lemediğin değişiklikler gitmez. Aşağıda yerel depo ile GitHub arasındaki ilişkiyi dene; özellikle Ayşe push ettikten sonra senin push'unun neden reddedildiğine bak:

[[G-H5-01]]

Push reddedildiyse (~! [rejected] main -> main (fetch first)~) uzakta sende olmayan commit'ler var demektir: önce ~git pull~, sonra ~git push~. GitHub 100 MB'tan büyük dosyaları kabul etmez; büyük medya dosyaları için Git LFS kullanılır ya da hiç depoya konmaz.
`),
      dene: ["gt-u5-push-red", "gt-u5-origin-var"],
    },
    {
      baslik: "git pull: güncel kal",
      metin: md(`
~git pull~ uzak depodaki yeni commit'leri indirir ve bulunduğun dala **birleştirir** (aslında ~git fetch~ + ~git merge~). Ekipte çalışırken güne ~git pull~ ile başlamak, eski bir hâlin üstüne çalışıp sonradan çakışma yaşamaktan korur.

Commit'lenmemiş değişikliklerin, pull ile gelen değişikliklerle **aynı dosyalara** dokunuyorsa Git onları ezmemek için durur. Önce commit'le (ya da kenara koy: ~git stash~, 9. ünite), sonra pull.
`),
      dene: ["gt-u5-sabah-pull"],
    },
    {
      baslik: "GitHub'a güvenle bağlanmak",
      metin: md(`
GitHub, komut satırında **hesap parolasını kabul etmez**. İki yol var:

- **HTTPS + kişisel erişim token'ı (PAT):** GitHub ayarlarından süreli ve yetkisi sınırlı bir token üretirsin; parola sorulunca onu yapıştırırsın. Token bir paroladır: koda, README'ye ya da commit'e **asla** yazılmaz.
- **SSH anahtarı:** Bilgisayarında bir anahtar çifti üretirsin:

~~~
ssh-keygen -t ed25519 -C "ayse@example.com"
~~~

**Açık anahtarı** (~.pub~ ile biten) GitHub'a eklersin; **özel anahtar** bilgisayarından hiç çıkmaz. Sonra depoyu ~git@github.com:ayse/proje.git~ biçimindeki SSH adresiyle kullanırsın. "Permission denied (publickey)" hatası, GitHub'ın tanıdığı bir anahtarın o bilgisayarda olmadığı anlamına gelir.

Son olarak hesabında **iki adımlı doğrulamayı (2FA)** aç: parolan çalınsa bile ikinci adım olmadan kimse giremez.
`),
      dene: ["gt-u5-parola-yok", "gt-u5-publickey"],
    },
  ],
  test: [
    "gt-u5-organizasyon", "gt-u5-public", "gt-u5-private", "gt-u5-public-yazma", "gt-u5-readme", "gt-u5-mit-gpl", "gt-u5-markdown",
    "gt-u5-clone-komut", "gt-u5-clone-ne-indirir", "gt-u5-origin", "gt-u5-remote-add", "gt-u5-push-u", "gt-u5-ilk-push", "gt-u5-remote-v",
    "gt-u5-push-commit", "gt-u5-pull-ne", "gt-u5-pull-calisma", "gt-u5-ssh-ozel", "gt-u5-ssh-keygen", "gt-u5-token-gizli", "gt-u5-2fa",
  ],
};
