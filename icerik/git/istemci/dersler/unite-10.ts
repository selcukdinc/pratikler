import { md, type Ders } from "../../../../src/dersler/tipler";
import { commitOku, gecmis } from "../../../../src/gitsim/depo";
import { dalAdiniAl } from "../../../../src/gitsim/gorev";
import type { Ortam } from "../../../../src/gitsim/tipler";
import { uzakBul, uzakDalUcu } from "../../../../src/gitsim/uzak";

// Bütün alıştırmalarda aynı GitHub deposu: Kafe Mavi'nin sipariş uygulaması.
// Ayşe depoyu açıp ilk commit'i gönderir, sen klonlarsın.
const URL = "https://github.com/kafe-mavi/siparis.git";
const BASLA = [
  `@uzak ${URL}`,
  `@ayse git clone ${URL}`,
  '@ayse echo "kahve 40" > menu.txt',
  "@ayse git add .",
  '@ayse git commit -m "Menü"',
  "@ayse git push",
  `git clone ${URL}`,
];
const AYSE_SU = ['echo "su 10" >> menu.txt', 'git commit -am "Su eklendi"', "git push"];

const uzakUc = (o: Ortam, dal: string) => uzakDalUcu(o, URL, dal);
const izleme = (o: Ortam, dal: string) => o.depo?.refs[`refs/remotes/origin/${dal}`];
const uzakMesajlar = (o: Ortam, dal: string): string[] => {
  const u = uzakBul(o, URL);
  const h = uzakUc(o, dal);
  return u && h ? gecmis(u, [h]).map((c) => commitOku(u, c).mesaj.trim()) : [];
};
const uzakBirlesimVar = (o: Ortam, dal: string) => {
  const u = uzakBul(o, URL);
  const h = uzakUc(o, dal);
  return !!u && !!h && gecmis(u, [h]).some((c) => commitOku(u, c).ebeveynler.length > 1);
};

export const UNITE_10: Ders = {
  hafta: 10,
  baslik: "Uzak Depolar Derinlemesine",
  ozet: "origin/main aslında nedir, fetch ile pull neden farklıdır, push neden reddedilir ve --force'u ne zaman (hiç) kullanmalısın? Sanal ekip arkadaşın Ayşe'yle aynı GitHub deposunda çalışarak öğren.",
  bolumler: [
    {
      baslik: "origin/main: son görülen hâl",
      metin: md(`
5. ünitede ~git push~ ve ~git pull~'u gördün. Şimdi perdenin arkasına bakalım. Bir depoyu klonladığında bilgisayarında **iki tür** dal olur:

| Dal | Kim taşır? | Ne gösterir? |
|---|---|---|
| ~main~ | Sen (commit, merge, reset) | Senin işin |
| ~origin/main~ | Yalnızca Git (fetch, pull, push sırasında) | GitHub'daki main'i **en son gördüğün** hâl |

~origin/main~'e **uzak izleme dalı** denir. Canlı bir bağlantı değildir: Ayşe şu an GitHub'a push etse bile senin ~origin/main~'in yerinden kıpırdamaz. Bu yüzden ~git status~'un "Your branch is up to date with 'origin/main'" demesi yalnızca "son baktığımda aynıydı" anlamına gelir.

Her yerel dal bir uzak dalı **izleyebilir** (upstream). Klonladığında ~main~ zaten ~origin/main~'i izler. Yeni açtığın dalı ilk kez gönderirken ~-u~ ile bu bağı kurarsın:

~~~
git push -u origin ozellik
~~~

Bundan sonra o dalda düz ~git push~ ve ~git pull~ yeter. Hangi dalın neyi izlediğini ve ne kadar önde ya da geride olduğunu görmek için:

~~~
git branch -vv
~~~

Terminalin sağındaki **Uzak depolar** panelinde GitHub'daki dalları görürsün; ~git branch -a~ ise senin bildiğin uzak izleme dallarını (~remotes/origin/...~) listeler. İkisini karşılaştır.
`),
      git: {
        kurulum: BASLA,
        gorev: "Ayşe'nin açtığı depoyu klonladın. ~ozellik~ adında bir dal aç, ~menu.txt~'e bir satır ekleyip commit'le ve dalı upstream'iyle birlikte GitHub'a gönder. Sonra ~git branch -vv~ ile bak.",
        oneriler: ["git branch -vv", "git switch -c ozellik", 'echo "cay 20" >> menu.txt', 'git commit -am "Çay eklendi"', "git push -u origin ozellik", "git branch -vv"],
        hedefler: [
          { aciklama: "GitHub'da ~ozellik~ dalı var", denetle: (o) => !!uzakUc(o, "ozellik") },
          { aciklama: "Yerel ~ozellik~, ~origin/ozellik~'i izliyor", denetle: (o) => o.depo?.config["branch.ozellik.merge"] === "refs/heads/ozellik" },
          { aciklama: "GitHub'daki dal seninkiyle aynı commit'te", denetle: (o) => !!uzakUc(o, "ozellik") && uzakUc(o, "ozellik") === o.depo?.refs["refs/heads/ozellik"] },
        ],
      },
      dene: ["gt-u10-origin-main-nedir", "gt-u10-push-u", "gt-u10-branch-vv"],
    },
    {
      baslik: "fetch ile pull farkı",
      metin: md(`
Uzaktaki yenilikleri almanın iki yolu var:

- ~git fetch~: GitHub'daki yeni commit'leri **indirir** ve yalnızca ~origin/main~ gibi uzak izleme dallarını ilerletir. Senin ~main~'ine, dosyalarına dokunmaz. Tamamen güvenlidir; istediğin kadar çalıştır.
- ~git pull~: ~git fetch~ + birleştirme. İndirdiklerini hemen bulunduğun dala katar (varsayılan olarak merge, ~--rebase~ ile rebase).

Aşağıdaki şekilde üç kutuyu izle. Ayşe push edince yalnızca GitHub kutusu değişir; ~fetch~ ortadaki kutuyu, ~merge~ ya da ~pull~ sağdaki kutuyu ilerletir:

[[G-H10-01]]

Profesyonellerin alışkanlığı: önce ~git fetch~, sonra ne geldiğine bak, sonra karar ver:

~~~
git fetch
git log --oneline main..origin/main
git merge origin/main
~~~

~main..origin/main~ "origin/main'de olup main'de olmayanlar" demektir; yani gelen commit'ler. Böylece sürprizle değil, bilerek birleştirirsin.
`),
      git: {
        kurulum: [...BASLA, ...AYSE_SU.map((k) => `@ayse ${k}`)],
        gorev: "Sen klonladıktan sonra Ayşe bir commit push etti. ~git status~ ne diyor? Önce ~git fetch~ ile indir, gelenlere bak, sonra main'ine kat.",
        oneriler: ["git status", "git fetch", "git status", "git log --oneline main..origin/main", "git merge origin/main"],
        ekip: [{ dugme: "Ayşe bir commit daha push etsin", kim: "ayse", komutlar: ['echo "limonata 30" >> menu.txt', 'git commit -am "Limonata eklendi"', "git push"], bildirim: "Ayşe, main'e \"Limonata eklendi\" commit'ini push etti. Senin bilgisayarında henüz hiçbir şey değişmedi." }],
        hedefler: [
          { aciklama: "~origin/main~ GitHub'daki main'le aynı yerde (fetch yapıldı)", denetle: (o) => uzakMesajlar(o, "main").length > 1 && izleme(o, "main") === uzakUc(o, "main") },
          { aciklama: "Ayşe'nin \"Su eklendi\" commit'i senin main'inde", denetle: (o) => !!o.depo && (o.dosyalar["menu.txt"] ?? "").includes("su 10") && dalAdiniAl(o) === "main" },
        ],
      },
      dene: ["gt-u10-fetch-ne-yapar", "gt-u10-pull-esittir", "gt-u10-fetch-komut"],
    },
    {
      baslik: "Push reddedildi: neden ve ne yapmalı?",
      metin: md(`
En sık görülen Git hatası şudur:

~~~
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/kafe-mavi/siparis.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally.
~~~

Panik yok, bir şey bozulmadı. GitHub diyor ki: "Bende senin görmediğin commit'ler var. Senin push'unu kabul edersem onlar kaybolur." Git, uzak dalın ucu senin göndereceğin geçmişin **içinde değilse** push'u kabul etmez (ileri sarılamaz).

Çözüm: önce uzaktakini al, kendi işini onun üstüne koy, sonra yeniden gönder. İki yol var:

~~~
git pull            # birleştirme commit'i oluşur
git pull --rebase   # senin commit'lerin Ayşe'ninkilerin üstüne taşınır, geçmiş düz kalır
~~~

Kendi gönderilmemiş commit'lerin için ~git pull --rebase~ çoğu ekipte tercih edilir: "Merge branch 'main' of ..." gibi anlamsız birleştirme commit'leri birikmez. Her seferinde yazmamak için: ~git config --global pull.rebase true~.

İki taraf aynı satırlara dokunduysa ~pull~ da çakışabilir; çözümü 7. ünitedeki gibidir. Dal korumalıysa (ör. Cargo Pilot'ta ~main~, ~test~, ~dev~) hiç doğrudan push edemezsin; reddin sebebi o zaman koruma kuralıdır ve yol pull request'tir.
`),
      git: {
        kurulum: [...BASLA, 'echo "Yaz kampanyası" > kampanya.txt', "git add kampanya.txt", 'git commit -m "Kampanya metni"', ...AYSE_SU.map((k) => `@ayse ${k}`)],
        gorev: "Sen kampanya metnini commit'lerken Ayşe main'e push etti. ~git push~'u dene, reddedilince geçmişi düz tutarak düzelt ve yeniden gönder.",
        oneriler: ["git push", "git pull --rebase", "git log --oneline", "git push"],
        hedefler: [
          { aciklama: "GitHub'daki main'de hem senin hem Ayşe'nin commit'i var", denetle: (o) => { const m = uzakMesajlar(o, "main"); return m.includes("Kampanya metni") && m.includes("Su eklendi"); } },
          { aciklama: "Birleştirme commit'i yok, geçmiş düz", denetle: (o) => uzakMesajlar(o, "main").length > 0 && !uzakBirlesimVar(o, "main") },
          { aciklama: "Yerel main GitHub'la aynı", denetle: (o) => uzakUc(o, "main") === o.depo?.refs["refs/heads/main"] },
        ],
      },
      dene: ["gt-u10-fetch-first", "gt-u10-neden-red", "gt-u10-pull-rebase-komut"],
    },
    {
      baslik: "--force ve --force-with-lease",
      metin: md(`
Bazen push'un reddedilmesi **beklenir**: kendi özellik dalını GitHub'a gönderdikten sonra son commit'i ~--amend~ ile düzelttin ya da 11. ünitede göreceğin rebase ile geçmişi temizledin. Artık yerel dalın ile GitHub'daki dal **ayrıştı**; düz push "non-fast-forward" diye reddedilir.

~git push --force~ uzak dalı seninkiyle **ezer**. Arada bir ekip arkadaşın o dala push ettiyse onun commit'leri sessizce kaybolur. Bu yüzden düz ~--force~ neredeyse hiç kullanılmaz. Onun yerine:

~~~
git push --force-with-lease
~~~

~--force-with-lease~ önce sorar: "Uzak dal hâlâ benim **son gördüğüm** yerde mi (origin/ozellik)?" Öyleyse ezer; arada biri push ettiyse "stale info" diye reddeder. Önce ~git fetch~ yapıp ne geldiğine bakarsın.

Kurallar:
- Force push yalnızca **senin** dalında (özellik dalı), PR'ın tek sahibi sensen.
- ~main~, ~test~, ~dev~ gibi ortak dallara asla. GitHub'da korumalı dallarda zaten kapalıdır.
- Yanlışlıkla ezdiysen: ezilen commit'ler ekip arkadaşının bilgisayarında ve reflog'unda hâlâ durur; oradan geri gönderilebilir.
`),
      git: {
        kurulum: [...BASLA, "git switch -c ozellik", 'echo "Yaz kampanyasi" > kampanya.txt', "git add kampanya.txt", 'git commit -m "Kampanya tasarisi"', "git push -u origin ozellik"],
        gorev: "~ozellik~ dalını GitHub'a gönderdin ama mesajda yazım hatası var (\"tasarisi\"). Son commit'in mesajını ~Kampanya taslağı~ yap ve GitHub'daki dalı güvenli biçimde güncelle.",
        oneriler: ['git commit --amend -m "Kampanya taslağı"', "git push", "git push --force-with-lease", "git log --oneline origin/ozellik"],
        hedefler: [
          { aciklama: "GitHub'daki ~ozellik~'in son commit'i \"Kampanya taslağı\"", denetle: (o) => uzakMesajlar(o, "ozellik")[0] === "Kampanya taslağı" },
          { aciklama: "Eski hatalı commit uzak dalda kalmadı", denetle: (o) => uzakMesajlar(o, "ozellik").length > 0 && !uzakMesajlar(o, "ozellik").includes("Kampanya tasarisi") },
        ],
      },
      dene: ["gt-u10-force-tehlike", "gt-u10-lease", "gt-u10-lease-komut"],
    },
    {
      baslik: "Uzak depoları yönetmek ve budamak",
      metin: md(`
Bir depoda birden çok uzak depo olabilir. Hangilerinin tanımlı olduğuna bak:

~~~
git remote -v
~~~

Sık kullanılan komutlar:

| İş | Komut |
|---|---|
| Yeni uzak depo ekle (ör. fork'un aslı) | ~git remote add upstream <adres>~ |
| Adresi değiştir (depo taşındı, HTTPS'ten SSH'ye geçtin) | ~git remote set-url origin <yeni adres>~ |
| Adını değiştir / kaldır | ~git remote rename~, ~git remote remove~ |
| Uzaktaki bir dalı sil | ~git push origin --delete ozellik~ |
| Uzakta silinmiş dalların yerel izlerini temizle | ~git fetch --prune~ |

Neden budama? Ayşe PR'ı birleşince GitHub'da dalını siler; ama senin ~origin/eski-dal~ izin ~git fetch --prune~ diyene kadar durur. Aylar sonra ~git branch -a~ yüzlerce ölü dalla dolar. Kalıcı çözüm: ~git config --global fetch.prune true~.

Cargo Pilot akışında da kural aynı: PR birleşince dal silinir, herkes budar.

Başkasının dalında çalışmak için yerelde açman yeter: ~git switch ayse-dal~ yazdığında Git ~origin/ayse-dal~'ı bulur ve onu izleyen yerel dalı kendisi açar.
`),
      git: {
        kurulum: [
          ...BASLA,
          "@ayse git switch -c eski-deneme",
          '@ayse echo "deneme" > deneme.txt',
          "@ayse git add .",
          '@ayse git commit -m "Deneme"',
          "@ayse git push -u origin eski-deneme",
          "git switch -c gecici",
          "git push -u origin gecici",
          "git switch main",
          "git fetch",
          "@ayse git push origin --delete eski-deneme",
        ],
        gorev: "Ayşe ~eski-deneme~ dalını GitHub'dan sildi ama senin ~git branch -a~ listende hâlâ duruyor. Uzak depoları listele, ölü izi buda ve artık gerekmeyen kendi ~gecici~ dalını GitHub'dan sil.",
        oneriler: ["git remote -v", "git branch -a", "git fetch --prune", "git push origin --delete gecici", "git branch -a"],
        hedefler: [
          { aciklama: "~origin/eski-deneme~ izi temizlendi", denetle: (o) => !!o.depo && !izleme(o, "eski-deneme") },
          { aciklama: "GitHub'da ~gecici~ dalı kalmadı", denetle: (o) => !!uzakUc(o, "main") && !uzakUc(o, "gecici") },
        ],
      },
      dene: ["gt-u10-remote-v", "gt-u10-prune", "gt-u10-uzak-dal-sil"],
    },
  ],
  test: [
    "gt-u10-ahead-behind", "gt-u10-status-guncel-mi", "gt-u10-once-bak", "gt-u10-ayrismis-pull", "gt-u10-red-sonra-cakisma",
    "gt-u10-korumali-red", "gt-u10-force-ne-zaman", "gt-u10-force-kurtarma", "gt-u10-iki-remote", "gt-u10-uzaktan-dal-al",
  ],
};
