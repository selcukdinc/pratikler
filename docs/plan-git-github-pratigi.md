# Plan: Git ve GitHub Pratik

Hazırlanma: 11 Kasım 2026 · İsteyen: Selçuk · Durum: **onaylandı** (11 Kasım 2026; bütün öneriler kabul edildi, pratik bütün üniteler bitince yayına çıkar)

Selçuk'un isteği: Git'i hiç duymamış birinden profesyonel kullanıcıya kadar adım adım götüren, GitHub'ı
(ve GitLab'ı) da kapsayan, okutmaktan çok etkileştiren bir pratik. Dört ayrı parça olacak:

1. **Dersler**: bölüm bölüm, bol görselli ve etkileşimli konu anlatımı.
2. **Soru havuzu ve karma test**: çoktan seçmeli ve doğru/yanlış soruların yanında gerçek hayattan
   **senaryo soruları**.
3. **Sandbox**: soru havuzundan ve karma testten ayrı, tarayıcıda çalışan sanal bir Git ve uzak depo
   ortamı. Serbest alan, görevler, senaryolar ve takım tatbikatı burada.
4. **Gizli anahtar sızıntısı**: public depoya düşen anahtarın botlarca dakikalar içinde bulunması, ayrı
   bir ünite ve ayrı bir etkileşimli tatbikat olarak.

Vize ya da final yok; onun yerine **kademeler** (Acemi → Başlangıç → Orta → İleri → Usta) ve bir
"Nereden başlamalıyım?" seviye testi var.

Kurallar (CLAUDE.md ve proje hafızası): pratik `pratikler.selcukdinc.dev/<yol>` altında açılır, alt alan
adı açılmaz; eski sitelere ve depolara dokunulmaz; PR'lar **zincir** halinde açılır; her PR
`src/yenilikler.ts` başına kayıt ekler; `npm run denetle` her PR'da geçer; her `/api` isteği kotadan
yediği için sandbox tamamen tarayıcıda çalışır.

---

## 1. Kimlik

| Alan | Öneri |
|---|---|
| Ad | **Git ve GitHub** (site adı "Git ve GitHub Pratik") |
| `id` / `alt` / `yol` | `git` → `pratikler.selcukdinc.dev/git` |
| Soru öneki | `gt-` (diğer öneklerle çakışmıyor) |
| Katalog alanı (`alan`) | **Yazılım** (yeni grup) |
| `uniteAdi` | "ünite" |
| `latex` | false |
| Ayar | `git:current_week` (bütün üniteler açık başlar) |

Terimler: Türk geliştiriciler `commit`, `branch`, `merge` diye konuşuyor. Öneri: terimler İngilizce
kalır, ilk geçtiği yerde Türkçe karşılığı verilir ("commit (kayıt)"); `meta.terimler` sözlüğü
bunları bağlar. Komut çıktıları gerçek Git'teki gibi İngilizcedir; yanında Türkçe "Ne oldu?" açıklaması
durur. Böylece öğrenci kendi bilgisayarında aynı çıktıyı görünce tanır.

---

## 2. Kademeler ve üniteler

Her ünitenin bir dersi, soru havuzu, sandbox görevleri ve (uygunsa) senaryoları olur. Sayılar hedeftir.

### Kademe 1 · Acemi (Git'i, GitHub'ı hiç duymamış)

| # | Ünite | Ana etkileşimler |
|---|---|---|
| 1 | **Sürüm kontrolü neden var?** `odev_son_v2_GERCEKSON.docx` sorunu, Git ↔ GitHub ↔ GitLab farkı, merkezi ve dağıtık sistem | "Dosya adı kaosu" oyunu: aynı belgenin 6 kopyasından hangisi son? Ardından aynı iş Git zaman çizelgesiyle. Git (araç) / GitHub (hizmet) eşleştirme kartları |
| 2 | **Kurulum ve terminal** Windows/macOS/Linux kurulumu, `git config`, terminal temelleri (`cd`, `ls`, `pwd`), editör seçimi | İşletim sistemi seçilince adımları değişen kurulum sihirbazı; derste gömülü mini terminal ile `pwd`/`ls`/`cd` |
| 3 | **İlk depo ve üç alan** `init`, `status`, `add`, `commit`; çalışma dizini, hazırlık alanı (staging), depo | **Üç alan tezgahı**: dosyaları sürükleyip çalışma dizininden staging'e, oradan commit'e at; her harekette karşılık gelen komut altta yazılır. `git status` çıktısının renkli parçalarına tıklayınca anlamı açılır |
| 4 | **Geçmişe bakmak** `log`, `diff`, `show`, iyi commit mesajı, `.gitignore` | Commit zaman çizelgesinde gezip `diff`'i yan yana görme; "Bu mesaj iyi mi?" kartları; `.gitignore` kalıp deneyici (kalıbı yaz, hangi dosyaların elendiğini canlı gör) |
| 5 | **GitHub'a ilk adım** hesap, depo açma, **public ve private**, README, LICENSE, `clone`, `remote`, `push`, `pull`, HTTPS ve SSH anahtarı, 2FA | Yerel depo ↔ uzak depo animasyonu (push oku, pull oku); public/private karşılaştırma ("kim ne görür?" simülasyonu); SSH anahtar çifti benzetmesi (kilit ve anahtar) |

### Kademe 2 · Başlangıç (commit atabilen, dal kullanmayan)

| # | Ünite | Ana etkileşimler |
|---|---|---|
| 6 | **Dallar** `branch`, `switch`, `HEAD`, fast-forward ve üç yollu `merge` | **Canlı commit grafiği**: komut yaz, grafik anında büyüsün; HEAD işaretçisini sürükleyince `switch` komutu oluşur |
| 7 | **Çakışmalar** neden olur, işaretler (`<<<<<<<`), çözüm, `merge --abort` | Gerçek çakışma çözme editörü: iki tarafı, "ikisini de al", elle düzenle; çözülmeden commit'e izin yok |
| 8 | **GitHub'da birlikte çalışmak** fork, pull request, review, issue, Markdown, açık kaynak katkı akışı (fork + upstream) | Sahte (markasız) bir PR sayfası: dosya farkına satır yorumu bırak, "Request changes" ver, düzeltme commit'iyle PR'ın güncellenmesini gör |
| 9 | **Geri almak** `restore`, `reset` (soft/mixed/hard), `revert`, `commit --amend`, `reflog` ile kurtarma | **reset kipleri kaydırıcısı**: soft/mixed/hard seçince üç alanın her birinde ne değiştiği renklenir; "hangi komutu kullanmalıyım?" karar ağacı |

### Kademe 3 · Orta (takımda çalışan)

| # | Ünite | Ana etkileşimler |
|---|---|---|
| 10 | **Uzak depolar derinlemesine** `fetch` ↔ `pull`, upstream/izleme dalı, `push` reddi, `--force-with-lease`, `origin/main` | İki geliştiricinin aynı anda çalıştığı bölünmüş ekran: biri push edince diğerinin push'u reddedilir, çözüm adım adım |
| 11 | **Rebase** `rebase`, etkileşimli rebase (squash, reword, drop), merge mi rebase mi, "paylaşılmış geçmişi yeniden yazma" kuralı | Merge ve rebase'in aynı başlangıçtan iki ayrı sonucu (yan yana grafik, oynat düğmesi); etkileşimli rebase listesini sürükleyip sırala, `pick/squash` seç, sonucu gör |
| 12 | **Takım akışları** GitHub Flow, Git Flow, trunk-based, **üç ortamlı akış (main/test/dev, kağıttaki süreç)**, dal adlandırma, etiket, sürüm (SemVer), release | Kağıttaki diyagramın **oynatılabilir** hali (aşağıda §5); "bu ekip için hangi akış?" vaka kartları |
| 13 | **Korumalar ve otomasyon** branch protection / ruleset, zorunlu PR ve onay, durum denetimleri, CODEOWNERS, GitHub Actions'a giriş, CI | Koruma kuralı panelini aç/kapa, ardından korumalı dala doğrudan push dene ve reddi gör; basit bir iş akışı dosyasının adımlarını canlı çalışıyor gibi göster |

### Kademe 4 · İleri

| # | Ünite | Ana etkileşimler |
|---|---|---|
| 14 | **Gizli anahtarlar ve depo güvenliği** (özel ünite, §6) | Sızıntı tatbikatı, anahtar avı, müdahale sıralaması |
| 15 | **GitLab** merge request, `.gitlab-ci.yml`, protected branches, approvals, self-hosted GitLab, GitHub ↔ GitLab karşılık tablosu, depo taşıma | "Aynı iş iki platformda": aynı akışın GitHub ve GitLab terimleriyle yan yana gösterimi; sandbox'ta uzak depo GitLab kipine alınabilir |
| 16 | **İleri araçlar** `stash`, `cherry-pick`, `bisect`, `blame`, `tag`, `worktree`, `submodule`, hook'lar, Git LFS, imzalı commit | `bisect` oyunu: 32 commit içinde hatayı en az adımda bul (ikili arama sayacı); `cherry-pick` ile hotfix'i başka dala taşıma |

### Kademe 5 · Usta

| # | Ünite | Ana etkileşimler |
|---|---|---|
| 17 | **Git'in içi** blob, tree, commit, tag nesneleri, SHA, ref'ler, `.git` klasörü, packfile, plumbing (`cat-file`, `hash-object`, `update-ref`) | **Nesne gezgini**: commit'e tıkla → tree → blob; bir dosyada tek harf değişince hangi nesnelerin yenilendiğini gör |
| 18 | **Geçmişi onarmak ve kurtarma** kayıp commit (`reflog`, `fsck`), `filter-repo` ile büyük dosya ve gizli bilgi temizliği, büyük depo/monorepo, kısmi clone, performans | "Felaket odası": silinmiş dal, yanlış `reset --hard`, yanlış rebase; her birinden kurtarma |

**Hacim hedefi:** 18 ünite, ünite başına 4-6 ders bölümü ve 2-4 etkileşim (toplam ~55 etkileşim),
ünite başına ~30 soru (toplam **~540**), sandbox'ta **~45 görev**, **~15 senaryo**, 1 takım tatbikatı.

---

## 3. Dersler: okutmak yerine etkileştirmek

Sitede ders altyapısı hazır (`src/dersler/tipler.ts`: bölümler, "Kendini dene" soruları, konu sonu
testi, etkileşimli şekiller). FPGA'da bölüme gömülü VHDL simülasyonu (`sim`), DSP'de MatStudio betiği
(`matlab`) var. Git için aynısını yapıyoruz:

- **Bölüme gömülü mini terminal (`git` alanı):** her bölümün içinde küçük bir sandbox. Başlangıç durumu
  (dosyalar, commit'ler, dallar), kısa bir görev ("`hesap.js`'i staging'e al ama `notlar.txt`'yi alma")
  ve hedef denetimi var. Görev tamamlanınca bölüm ilerlemesi işlenir. Okuma bloğu kısa tutulur (bir iki
  paragraf), sonra hemen elle yapılır.
- **Etkileşimli şekiller:** yukarıdaki tablolarda adı geçenler (üç alan tezgahı, canlı grafik, reset
  kaydırıcısı, çakışma editörü, PR sayfası, nesne gezgini...). Hepsi SVG + React, pratiğin istemci
  içeriğiyle yalnızca bu pratikte yüklenir.
- **Tahmin et, sonra gör:** komutu çalıştırmadan önce "Sonra grafik nasıl görünecek?" diye üç küçük
  grafik arasından seçtirilir, sonra komut çalışır. Bu, kavram yanılgılarını yakalamanın en ucuz yolu.
- **Bölüm sonunda "Kendini dene"** (havuzdan 1-2 soru) ve ünite sonunda konu sonu testi; mevcut
  düzen aynen kullanılır.
- **Hata mesajı sözlüğü:** `fatal: not a git repository`, `rejected (non-fast-forward)`,
  `detached HEAD`, `CONFLICT`... Her biri için "ne demek, neden oldu, ne yapmalı" kartı; derste ve
  sandbox'ta mesajın üstüne tıklayınca açılır.
- Kademe başında bir sayfalık **yol haritası**: bu kademede neyi öğreneceksin, sonunda neyi
  yapabileceksin.

---

## 4. Soru havuzu, senaryo soruları ve karma test

**Türler:** mevcut `mcq`, `tf` ve `fill` (komut yazma: "`feature/x` adında dal açıp ona geçen tek komutu
yazın"; kabul edilen yazımlar listelenir: `git switch -c feature/x`, `git checkout -b feature/x`).
Yeni soru türü açmayı önermiyorum: puanlama, `worker/cevaplar.ts`, perde, sınav kağıdı ve SQL üreticisi
hep değişirdi. Çok adımlı işler zaten sandbox'ın işi.

**Senaryo soruları (etiket: `senaryo`):** gerçek hayattan bir durum, durumun **resmi** ve bir karar.
Durum metin yerine **durum kartıyla** gösterilir: terminal çıktısı + küçük commit grafiği. Bunun için
soru metninde `[[git: ...]]` biçiminde kısa bir gösterim kullanılır, istemci bunu grafiğe çevirir
(yeni şekil dosyası çizmek gerekmez, soru yazmak hızlanır). Örnekler:

- "Cuma 17:30. Üç commit'i yanlışlıkla `main`'e attın ve henüz push etmedin. Ekip arkadaşların
  `main`'i kullanıyor. Ne yaparsın?"
- "`git push` şu çıktıyı verdi: `! [rejected] main -> main (fetch first)`. En doğru sonraki adım?"
- "PR'ın `dev`'e birleşti, şimdi `test`'e çıkacak. Ekibin kuralına göre hangisi yapılır?" (kağıttaki
  akış; doğru cevap: aynı feature dalından `test`'e ikinci PR; yanlış şık: `dev`'i `test`'e birleştirmek)
- "Stajyer `.env` dosyasını public depoya push etti, 4 dakika geçti. İlk adım hangisi?" (anahtarı
  iptal et/döndür; dosyayı silip commit atmak yanlış)
- "`git log`'da `HEAD detached at 3f2a1c9` görüyorsun ve iki commit attın. Bu commit'ler kaybolmasın diye?"

Hedef dağılım: soruların ~%60'ı kavram (mcq/tf), ~%15'i komut yazma (fill), **~%25'i senaryo**.
Zorluk 1-3 kademelere göre dağılır. Etiketler: `kavram`, `komut`, `senaryo`, `github`, `gitlab`,
`guvenlik`.

**Karma test:** mevcut karma test; ek olarak kademe seçici (yalnız Acemi, Acemi+Başlangıç...) ve
"yalnız senaryolar" süzgeci.

**Seviye testi ("Nereden başlamalıyım?"):** her kademeden 3-4 soruluk 15 soruluk kısa bir test; sonucu
"Orta kademeden başla, ama 9. üniteye bir göz at" gibi bir öneri. Sonuç tarayıcıda hesaplanır.

**Kaynaklar ve telif:** sorular ve ders metinleri **kendi cümlelerimizle** yazılır. Başvuru kaynakları:
Pro Git kitabı (git-scm.com/book, CC BY-NC-SA 3.0), Git başvuru kılavuzu (git-scm.com/docs),
GitHub Docs (CC BY 4.0), GitLab Docs (CC BY-SA 4.0). Metin kopyalanmaz; Hakkında sayfasında kaynak
listesi ve "daha fazlası için" bağlantıları verilir. Sitede GitHub/GitLab logoları kullanılmaz;
sandbox'taki uzak depo arayüzü markasız, kendi tasarımımızdır.

---

## 5. Sandbox (ayrıntılı tasarım)

Soru havuzundan ve karma testten ayrı bir sayfa: menüde **Sandbox**, adresi `/git/sandbox`.

### 5.1 Motor: tarayıcıda kendi Git modelimiz

Üç seçenek değerlendirdim:

| Seçenek | Artı | Eksi |
|---|---|---|
| **A. Kendi TypeScript Git modelimiz** (öneri) | Grafiği, üç alanı, uzak depoyu ve PR/korumaları aynı modelden çizeriz; görev denetimi kolay; küçük (tahminen 60-90 KB); tamamen tarayıcıda, sıfır API isteği | Git'in davranışını biz kurarız; yanlış öğretme riski. Çözüm: aşağıdaki doğruluk testleri |
| B. isomorphic-git | Gerçek Git nesneleri | `rebase`, etkileşimli rebase, `cherry-pick`, `stash`, `bisect` yok ya da eksik; uzak depo ve PR'ı yine biz kurardık; büyük |
| C. Gerçek Git'i WebAssembly'ye derlemek | Birebir Git | Çok büyük, dosya sistemi ve süreç taklidi gerekir, görselleştirme yine ayrı iş |

**Öneri A.** Motor `src/gitsim/` altında, arayüzden bağımsız saf TypeScript:

- **Model:** nesneler (blob, tree, commit, tag; SHA-1 gerçek Git biçiminde hesaplanır, 17. ünite bunu
  gösterebilsin), ref'ler, HEAD (detached dahil), index, çalışma dizini (yol → içerik), reflog, stash,
  yapılandırma.
- **Komutlar (~45):** `init, config, status, add, rm, mv, restore, commit (--amend), log (--oneline
  --graph --all), diff (--staged), show, branch, switch, checkout, merge (--no-ff, --abort, --squash),
  rebase (-i, --onto, --continue, --abort), reset, revert, cherry-pick, stash, tag, remote, fetch, pull
  (--rebase), push (-u, --force-with-lease, --tags), clone, reflog, blame, bisect, cat-file,
  hash-object, ls-files, show-ref, gc` ve kabuk tarafında `ls, cat, echo >, touch, rm, mkdir, cd, pwd,
  clear, nano` (nano yerine basit dosya editörü açılır).
- **Çıktılar** gerçek Git'in İngilizce çıktısına sadıktır; her çıktının yanında Türkçe "Ne oldu?".
- **Doğruluk testleri:** `vitest` içinde aynı komut dizisi hem motorda hem gerçek `git` ile geçici bir
  klasörde çalıştırılır; dal yapısı, commit sayısı/ebeveynleri, dosya içerikleri, index ve çakışma
  durumu karşılaştırılır. 100+ dizi. Bu testler `npm run denetle`'de çalışır (Git makinede yoksa
  atlanır).

### 5.2 Uzak depo ve platform katmanı

Motorun üstünde **sanal bir barındırma hizmeti**: birden fazla depo (`origin`, `upstream`, fork),
public/private, pull request (GitLab kipinde merge request), review ve onay, dal korumaları
(doğrudan push yasağı, zorunlu PR, en az N onay, durum denetimi), sahte CI (görev "testler kırmızı"
diyebilir), CODEOWNERS, issue ve **gizli anahtar taraması / push protection**. Görünüm GitHub kipi ve
GitLab kipi arasında değişir (terimler ve renkler; logo yok).

### 5.3 Ekran

Masaüstünde dört bölme: **terminal**, **dosyalar ve editör**, **canlı commit grafiği** (yerel ve
`origin/*` dalları ayrı renk), **uzak depo** sekmesi (PR listesi, PR sayfası, ayarlar). Bölmeler
sürüklenip boyutlanır; düzen `shared/duzen.ts`'te ayrı alan olarak saklanır (MatStudio ve simülasyon
alanı gibi). Telefonda sekmeler halinde; terminalde sık komutlar için dokunmatik düğme şeridi
(`status`, `add .`, `commit -m`, `log --oneline`). Üç alan (çalışma dizini/staging/depo) her zaman
küçük bir şerit olarak görünür.

### 5.4 Kipler

1. **Serbest alan:** boş depo ya da hazır başlangıçlardan biri ("üç dallı proje", "çakışmaya hazır
   depo"...). Geri al düğmesi (motor her adımın anlık görüntüsünü tutar), durumu paylaşılabilir bağlantı
   olarak verme (`#durum=` ile, sunucuya gitmez).
2. **Görevler (~45, kademelere göre):** her görevin başlangıç durumu, hedefi, ipuçları (üç kademe:
   yön, komut adı, tam komut) ve "çözümü göster"i var. **Denetim komut metnine değil sonuca bakar**:
   hedef "`feature/login` `main`'e birleşmiş ve `main` origin'e push edilmiş" ise oraya hangi yoldan
   gidildiği önemsizdir. Az komutla bitirene yıldız.
3. **Senaryolar (~15):** gerçek hayattaki olaylar, hikâyeli ve zamanlı. Örnekler:
   - "Yanlış dala commit": üç commit `main`'de, `feature`'a taşınacak, `main` temizlenecek.
   - "Push reddedildi": sen çalışırken ekip arkadaşı (sanal) push etti.
   - "Cuma akşamı hotfix": production kırık, `main`'den hotfix, sonra değişikliğin `dev`'e de ulaşması.
   - "Kayıp iş": biri `reset --hard` yaptı, `reflog` ile kurtar.
   - "Dev kirlendi": `dev`'de yarım bir özellik var, yalnız senin düzeltmeni `test`'e çıkar.
   - "Büyük dosya": 300 MB'lık dosya push'u reddediliyor, geçmişten temizle.
   - "Sızıntı" (§6), "Açık kaynağa ilk katkı" (fork, upstream'den güncelle, PR).
   Sanal ekip arkadaşları ("Ayşe", "Mert") ve botlar zamanlı olaylar üretir: push, yorum, onay, CI sonucu.
4. **Takım tatbikatı: üç ortamlı akış (kağıttaki süreç).** `main` (production), `test` (QA), `dev`
   korumalı; doğrudan push reddedilir, PR zorunlu, CI geçmeli, `dev` için en az 1 onay. Öğrenci kağıttaki
   yedi adımı gerçekten yapar: `test`'in son halini çek → `test`'ten `feature/US-D03e-...` aç →
   geliştir, push et → **PR 1** `dev`'e → sanal reviewer onaylar, CI geçer → aynı daldan **PR 2**
   `test`'e → test ortamında doğrulama (sanal QA onay ya da hata bildirir) → **Release PR** `test` →
   `main` → dalı sil. Tuzak anlarda (`dev`'i komple `test`'e birleştirmeye kalkmak, dalı `dev`'den
   açmak) motor durdurur ve neden yanlış olduğunu gösterir. İkinci turda bir `bugfix/US-D12-...` dalı ve
   aynı anda çalışan bir ekip arkadaşıyla çakışma eklenir.

### 5.5 İlerleme ve istek kotası

Sandbox hiç `/api` isteği atmaz. Görev ve senaryo ilerlemesi tarayıcıda (`localStorage`) tutulur.
İleride hesap ile eşitleme istenirse mevcut açılış paketi (`/api/baslangic`) ve toplu cevap yanıtına
eklenir; ayrı uç açılmaz.

### 5.6 Kapsam dışı

Gerçek GitHub/GitLab'a bağlanmak, gerçek dosya sistemine yazmak ve gerçek bir kabuk sunmak yok: hepsi
sanal. Bu bilinçli bir seçim: öğrenci hiçbir şeyi bozamaz, her şey geri alınabilir.

---

## 6. Gizli anahtarlar: ayrı ünite ve tatbikat (14. ünite)

Bu konu hem 14. ünitenin dersi hem sandbox'ta iki ayrı etkinlik olarak işlenir.

**Ders bölümleri:** gizli bilgi nedir (API anahtarı, veritabanı parolası, token, özel SSH anahtarı,
`.env`); botlar public depoları nasıl tarar (herkese açık olay akışı sürekli izlenir, bulunan anahtar
dakikalar içinde denenir; araştırma ve "tuzak anahtar" deneylerinden somut süreler, kaynaklarıyla);
"sildim, geçti" neden yetmez (geçmiş, fork'lar, clone'lar, önbellekler); doğru müdahale sırası;
önleme (`.gitignore`, ortam değişkenleri, gizli bilgi yöneticileri, push protection, secret scanning,
pre-commit tarayıcıları, en az yetkili ve süreli token'lar); **ön yüz tuzağı**: `VITE_`/`NEXT_PUBLIC_`
ile tarayıcıya giden her değer herkese açıktır.

**Sızıntı tatbikatı (etkileşimli, zamanlı):**
1. Öğrenci sahte bir projede çalışıyor; `.env` `.gitignore`'da değil. Commit ve push ediyor (görev bunu
   ister, gerçek hayattaki dikkatsizliği yaşatmak için).
2. Ekranda hızlandırılmış bir saat ve **bot radarı** açılır: "00:00:41 bir tarayıcı yeni push'u gördü",
   "00:02:10 anahtar denendi, geçerli", "00:04:30 hesabında 40 sunucu açıldı"; bir maliyet sayacı
   artmaya başlar.
3. Öğrenciye müdahale seçenekleri sunulur, sıralamayı o kurar. Yanlış yollar sonucuyla gösterilir:
   dosyayı silip commit atmak (anahtar geçmişte duruyor, radar yine buluyor), depoyu private yapmak
   (çoktan kopyalandı), `push --force` ile geçmişi temizleyip anahtarı iptal etmemek (anahtar hâlâ
   geçerli). Doğru sıra: **anahtarı hemen iptal et ve yenisini üret** → erişim kayıtlarını incele →
   sonra geçmişi temizle (`filter-repo`) → ekibe haber ver → önleme kur.
4. Tatbikat sonunda kısa bir rapor: ne kadar sürede iptal ettin, ne kadar zarar oldu.
5. İkinci tur: aynı iş **push protection açıkken**; push reddedilir, öğrenci anahtarı çıkarıp
   ortam değişkenine taşır.

**Anahtar avı (mini oyun):** 12 kısa diff ya da dosya; sızıntı olanı bul ve tıkla. Kolaydan zora:
düz `.env`, `config.js`'e gömülü token, eski bir commit'te kalan parola, `docker-compose.yml`, Jupyter
defterinin çıktı hücresi, CI günlüğüne basılmış değer, ön yüz paketine giren `VITE_` değişkeni,
`.git` klasörü yayınlanmış bir web sitesi. Ayrıca "bu güvenli" olanlar (örnek değerli `.env.example`).

**Sahte anahtarlar:** depoya gerçek biçimli anahtar koymayız, yoksa GitHub'ın kendi taraması bizim
push'umuzu durdurur ve tarayıcılar uyarı üretir. Sağlayıcıların belgelerinde kullandığı resmi örnek
değerler (`AKIAIOSFODNN7EXAMPLE` gibi) ve açıkça sahte (`ORNEK_...`) değerler kullanılır; ekranda
gösterilen "anahtar" çalışma anında parçalardan birleştirilir.

---

## 7. Teknik yerleşim

- `icerik/git/meta.ts` (18 ünite, kavramlar `u<ünite>-`, terimler, etiketler, `anaSayfa`),
  `icerik/git/sorular/unite-N.ts` + `yardimci.ts` (İşletme kalıbı), `icerik/index.ts` ve
  `icerik/sorular.ts` kaydı, `migrations/NNNN_git_ayarlari.sql` ve `npm run sorular:sql` ile
  `NNNN_git_sorular.sql`.
- `icerik/git/istemci/` dersler, etkileşimler, görevler, senaryolar; `index.ts`'te `sandbox: true`.
- `src/gitsim/` motor ve platform katmanı (saf TS, testli), `src/pages/Sandbox.tsx`, router'da
  `sandbox` sayfası (yalnız `sandbox: true` diyen pratikte menüde), `DersBolumu`'ne `git?: MiniGit`
  alanı, soru metni için `[[git: ...]]` durum kartı.
- `AYRILMIS_YOLLAR`'a `sandbox` eklenir (pratik yolu olamasın).
- Seviye testi: mevcut karma test altyapısı üstünde sabit soru listesi.

---

## 8. PR zinciri

Her PR bir öncekinin dalının üstüne kurulur; pratik son PR'a kadar `yayinda: false` kalır (yönetici
görür). Yenilikler kayıtları ara PR'larda `kitle: "yonetici"`, yayın PR'ında herkese açık.

| PR | İçerik |
|---|---|
| 1 | Pratik iskeleti: meta (18 ünite, kavramlar, terimler), kayıt, ayar migration'ı, Kademe 1 soruları (Ü1-5, ~150) |
| 2 | `src/gitsim` motoru (yerel komutlar) + gerçek Git ile karşılaştırma testleri; arayüz yok |
| 3 | Sandbox sayfası (terminal, dosyalar, grafik, üç alan şeridi), serbest alan, Kademe 1 görevleri |
| 4 | Ders altyapısı (`git` mini terminal, `[[git:]]` durum kartı) + Ü1-5 dersleri ve etkileşimleri |
| 5 | Kademe 2: Ü6-9 dersleri, soruları, görevleri, çakışma editörü, sahte PR sayfası |
| 6 | Uzak depo + platform katmanı (PR, koruma, CI, sanal ekip arkadaşları), Ü10-11 |
| 7 | Ü12-13 + **üç ortamlı akış tatbikatı** (kağıttaki süreç) |
| 8 | Ü14 gizli anahtarlar: ders, sızıntı tatbikatı, anahtar avı, sorular |
| 9 | Ü15-16 (GitLab kipi, ileri araçlar, bisect oyunu) |
| 10 | Ü17-18 (nesne gezgini, felaket odası), usta görevleri |
| 11 | Seviye testi, katalog ve tanıtım metni, `yayinda: true` |

Her PR'da `npm run denetle` ve ekran görüntüleri (masaüstü + telefon, açık + karanlık tema).

---

## 9. Açık sorular (her birinde önerim kalın)

1. **Sandbox motoru:** kendi TS modelimiz mi, isomorphic-git mi? → **Kendi modelimiz** (§5.1),
   gerçek Git ile karşılaştırma testleriyle.
2. **Kağıttaki akışın adı:** sitede "Cargo Pilot Git Flow" adıyla mı, yoksa "üç ortamlı akış (main /
   test / dev)" diye genel adla ve "gerçek bir ekipten örnek" notuyla mı? → **Genel ad**; ekibin/projenin
   adını kullanmamızın sakıncası yoksa söyle, adıyla anarız.
3. **Pratiğin açılış sayfası:** karma test mi, sandbox mı, ders yol haritası mı? → **Ders yol
   haritası** (kademeler ve seviye testi düğmesi); acemi için en doğru kapı. Bunun için `anaSayfa`'ya
   `dersler` değeri eklenir.
4. **Ad ve adres:** "Git ve GitHub" ve `/git` uygun mu? → **Evet** (GitLab ayrı ünite olarak içeride).
5. **Komut çıktılarının dili:** → **Git'in İngilizce çıktısı + Türkçe açıklama.**
6. **Yeni soru türü (sıralama/komut):** → **Şimdilik yok**; çok adımlı işler sandbox'ta, komut yazma
   `fill` ile.
7. **Sandbox ilerlemesi:** → **Tarayıcıda**; hesapla eşitleme sonra, açılış paketine eklenerek.
8. **Görsel arayüzlü araçlar** (VS Code, GitHub Desktop): ne kadar? → **Komut satırı merkezde**; VS Code
   kaynak denetimi paneli 3. ve 7. ünitede kısa bir kutu olarak.
9. **GitHub Actions:** bizim sitede kullanılmıyor ama 13. ünitede **öğretilir** (CI kavramı ve basit
   iş akışı dosyası). Uygun mu? → **Evet.**
10. **Hacim:** ~540 soru, ~45 görev, ~15 senaryo, 1 takım tatbikatı. Daha az soruyla daha hızlı yayına
    çıkmak istersen önce Kademe 1-3'ü (PR 1-7) yayınlayabiliriz → **Öneri: hepsi bitince yayın**, ama
    istersen Kademe 1-3 sonrası erken yayın da olur.
