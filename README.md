# Pratikler

Ders ve kitaplar için açık kaynaklı, ücretsiz soru çalışma siteleri; hepsi tek kod tabanı, tek hesap.

**Site:** [pratikler.selcukdinc.dev](https://pratikler.selcukdinc.dev)

| Pratik | Adres | Kaynak |
| --- | --- | --- |
| Tıp Elektroniği | [tipelektronigi.selcukdinc.dev](https://tipelektronigi.selcukdinc.dev) | Ders notları (1-4. hafta), Semmlow ve Subasi |

## Neler var?

- **Karma test:** Seçtiğin ünitelerden sorular karışık sırayla, şıklar karışık yerlerde gelir.
- **Etiketli sorular:** her soru kaynağını (ders notu, kitap, çıkmış soru...) gösterir.
- **Soru havuzu**, **aralıklı tekrar** ve **ilerleme** sayfaları.
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
npm run dev                # http://localhost:5173/?pratik=tip-elektronigi
npm test
```

- Pratikler `icerik/<pratik>/` altındadır (`meta.ts` + `sorular/`). Çalışma kuralları için [CLAUDE.md](CLAUDE.md).
- Yerelde `?pratik=<id>` bir pratiği, `?pratik=katalog` çatı sayfasını açar; seçim tarayıcıda hatırlanır.
- Sorular değişince: `npm run sorular:sql -- <pratik> migrations/NNNN_ad.sql`.
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
```

Çalıştırma (deponun yerel kopyasında; `claude` ve `gh` kurulu ve giriş yapılmış olmalı):

```sh
AJAN_TOKEN=<anahtar> npm run ajan              # sürekli, 2 dakikada bir yoklar
AJAN_TOKEN=<anahtar> npm run ajan -- --bir-kez # tek iş
```

Ajan her işi `origin/main`'den açılan ayrı bir worktree'de ve `ajan/<kısa kimlik>` dalında yapar; çalışma kopyana dokunmaz.
Sorular değiştiyse PR bir migration içerir; birleştirdikten sonra `npm run db:migrate:remote` ve `npm run deploy` sende.

## Lisans

[GPL-3.0-or-later](LICENSE). Sorular ilgili ders notlarına ve kitaplara dayanır; bu proje dersleri veren kurumlarla bağlantılı değildir.
