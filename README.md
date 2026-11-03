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

## Lisans

[GPL-3.0-or-later](LICENSE). Sorular ilgili ders notlarına ve kitaplara dayanır; bu proje dersleri veren kurumlarla bağlantılı değildir.
