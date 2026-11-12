# Pratikler

Ders, kitap ve beceriler için açık kaynaklı, ücretsiz çalışma siteleri: konu anlatımları, soru havuzu, karma test ve aralıklı tekrar. Hepsi tek kod tabanı, tek Cloudflare Worker ve tek hesapla çalışır.

**Site:** [pratikler.selcukdinc.dev](https://pratikler.selcukdinc.dev). Her pratik bu adresin bir yolundadır.

| Pratik | Adres | İçerik |
| --- | --- | --- |
| Git ve GitHub | [/git](https://pratikler.selcukdinc.dev/git) | Acemiden ustaya 5 kademe, 18 ünite; derslerde ve sandbox'ta tarayıcıda çalışan sanal Git, GitHub ve GitLab, seviye testi |
| FPGA | [/fpga](https://pratikler.selcukdinc.dev/fpga) | VHDL dersleri, otomatik sınanan kod soruları, tarayıcıda VHDL simülatörü (NVC) |
| DSP | [/dsp](https://pratikler.selcukdinc.dev/dsp) | Sayısal sinyal işleme: etkileşimli şekilli dersler, MatStudio betik ortamı |
| Kimya | [/kimya](https://pratikler.selcukdinc.dev/kimya) | Genel Kimya: ünite anlatımları, Sanal Lab deneyleri, çıkmış sorular |
| Fizik | [/fizik](https://pratikler.selcukdinc.dev/fizik) | Fizik I çözümlü örnekler ve adım adım çözülen türetilmiş sorular |
| Ayrık | [/ayrik](https://pratikler.selcukdinc.dev/ayrik) | Ayrık Matematik (Rosen): mantık, ispat, kümeler, fonksiyonlar |
| Tıp Elektroniği | [/tipelektronigi](https://pratikler.selcukdinc.dev/tipelektronigi) | Fizyolojik sinyaller, ölçüm zinciri, EKG, EEG, EMG ve sensörler |
| Biyomedikal | [/biyomedikal](https://pratikler.selcukdinc.dev/biyomedikal) | Biyomedikal veri işleme: sinyal ve görüntü işleme, Fourier ve dalgacık dönüşümü |
| İş İngilizcesi | [/isingilizcesi](https://pratikler.selcukdinc.dev/isingilizcesi) | Elektrik-elektronik için iş İngilizcesi quizleri |
| İşletme | [/isletme](https://pratikler.selcukdinc.dev/isletme) | İşletme Bilimine Giriş |
| Girişimcilik | [/girisimcilik](https://pratikler.selcukdinc.dev/girisimcilik) | KOSGEB Girişimcilik El Kitabı soruları ve çıkmış sorular |
| 6. Sınıf Türkçe | [/sinif6/turkce](https://pratikler.selcukdinc.dev/sinif6/turkce) | MEB programına ve ortak yazılı sınavlara göre okuma, söz varlığı, yazım |

## Neler var?

- **Konu anlatımları:** kısa bölümler, şekiller ve bölüm sonunda "Kendini dene" soruları; ilerlemen ve kaldığın yer hatırlanır.
- **Soru havuzu ve karma test:** sorular kaynağına (kitap, çıkmış, türetilmiş...) göre etiketlidir; karma testte sorular ve şıklar karışık gelir.
- **Aralıklı tekrar** ve **ilerleme** sayfaları; yanlışların birkaç gün arayla yeniden karşına çıkar.
- **Tarayıcıda çalışan araçlar:** Git pratiğinde sanal Git terminali ve görevli sandbox, FPGA'da VHDL simülatörü, DSP'de MatStudio, Kimya'da Sanal Lab.
- **Görünüm:** metin boyutu, tema ve ekranı tam kullanan geniş görünüm; MatStudio, VHDL alanı ve Git sandbox'ta panelleri sürükleyip boyutlandırabilirsin.
- **Formüller** KaTeX ile dizilir.
- **Tek hesap:** bir kez giriş yap, bütün pratiklerde ilerlemen kaydedilsin; misafir olarak da çözebilirsin.

## Gizlilik

- Reklam yok, analitik ya da takip çerezi yok.
- Yalnızca ilk cevabını gönderdiğinde ilerlemeni tutmak için tek bir oturum çerezi yazılır.

## Katkıda bulun

Yanlış soru mu gördün? [Yeni bir issue aç](https://github.com/selcukdinc/pratikler/issues/new); pratiği, ünite numarasını ve sorunun metnini yazman yeterli.

## Geliştiriciler için

Gereksinim: Node.js 22.12 veya üstü.

```sh
npm install
npm run db:migrate:local   # yerel veritabanına şema ve sorular
npm run dev                # http://localhost:5173/git (ya da /?pratik=<id>)
npm test
```

- Pratikler `icerik/<pratik>/` altındadır (`meta.ts`, `sorular/`, isteğe bağlı `istemci/`). Çalışma kuralları için [CLAUDE.md](CLAUDE.md).
- Denetimler: `npm run denetle` (`tsc -b`, `vitest run`, `vite build`).
- Yerelde pratiğin yolu (`/git`) ya da `?pratik=<id>` bir pratiği, `?pratik=katalog` çatı sayfasını açar; seçim tarayıcıda hatırlanır.
- Sorular değişince: `npm run sorular:sql -- <pratik> migrations/NNNN_ad.sql`.
- Eski bir siteyi (kimya, fpga...) platforma taşıma adımları: [docs/tasima.md](docs/tasima.md). Veri `npm run tasi` ile taşınır (Node.js 22.13+ `node:sqlite` kullanır).
- Kayıt, doğrulama e-postası gerektirdiği için yalnızca `RESEND_API_KEY` tanımlıyken açılır. Yerelde `.dev.vars` dosyasına `EPOSTA_KONSOL=1` yazarsan kodlar `npm run dev` çıktısına düşer.

## Yönetim panelinden Claude'a iş verme (yerel ajan)

Paneldeki **Claude** sekmesine yazılan iş D1'deki kuyruğa düşer. Kendi bilgisayarında çalışan ajan işi alır, depoda
`claude -p` (Claude Code, Pro/Max aboneliğinle) ile yapar, `npm run denetle` geçerse `gh pr create` ile PR açar ve
sonucu panele yazar. Bilgisayar kapalıyken işler bekler; hiçbir şey kendiliğinden birleşmez.

Bir kez kurulum:

```sh
openssl rand -hex 32                    # bir anahtar üret
npx wrangler secret put AJAN_TOKEN      # aynı anahtarı Worker'a ver
npm run db:migrate:remote               # claude_isleri tablosu
# Aynı anahtarı Mac'in Anahtar Zinciri'ne koy (hiçbir dosyaya yazılmaz)
security add-generic-password -U -s pratikler-ajan -a "$USER" -w '<anahtar>'
```

Çalıştırma (deponun yerel kopyasında; `claude` ve `gh` kurulu ve giriş yapılmış olmalı):

```sh
npm run ajan:servis -- kur      # önerilen: oturum açıkken hep çalışan servis (LaunchAgent)
npm run ajan                    # ya da Terminal'de, 2 dakikada bir yoklar
npm run ajan -- --bir-kez       # tek iş
```

Anahtar `AJAN_TOKEN` ortam değişkeniyle de verilebilir (macOS dışında gerekli). Panelin Claude sekmesi ajanın
açık olup olmadığını gösterir; **Ajanı dene** düğmesi makinedeki claude, gh ve depo durumunu raporlatır.
pratikler.selcukdinc.dev panelinin Claude sekmesinden yeni pratik açılır: ajan, verilen kaynak klasörünü
Claude'a okutup pratiği hazırlatır ve PR açar.

Ajan her işi `origin/main`'den açılan ayrı bir worktree'de ve `ajan/<kısa kimlik>` dalında yapar; çalışma kopyana dokunmaz.
Sorular değiştiyse PR bir migration içerir; birleştirdikten sonra `npm run db:migrate:remote` ve `npm run deploy` sende.

## Lisans

[GPL-3.0-or-later](LICENSE). Sorular ilgili ders notlarına ve kitaplara dayanır; bu proje dersleri veren kurumlarla bağlantılı değildir.

FPGA'nın VHDL simülatörü olarak [NVC](https://github.com/nickg/nvc) (Nick Gasson ve katkıcıları, GPL-3.0) kullanılır.
WebAssembly derlemesinin kaynağı ve yamaları `sim/nvc-wasm/` altındadır.
