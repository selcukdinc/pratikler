# Girişimcilik Pratik

KOSGEB Girişimcilik El Kitabı'na dayanan, açık kaynaklı ve ücretsiz bir soru çalışma sitesi.

**Site:** [girisimcilik.selcukdinc.dev](https://girisimcilik.selcukdinc.dev)

## Neler var?

- **Karma test:** Seçtiğin ünitelerden sorular karışık sırayla, şıklar karışık yerlerde gelir.
  10, 20, 30, 50 ya da tüm sorularla test kur; sonunda puanını ve yanlışlarını gör.
- **Etiketli sorular:**
  - `GES`: kitabın bölüm sonu ("Kendimizi Sınayalım") soruları, kitaptaki haliyle.
  - `Çıkmış`: geçmiş sınav soruları. Kitapla aynı olan çıkmışlar ikinci kez eklenmez, kitap sorusu iki etiketi birden taşır.
  - `Türetilmiş`: kitabın aynı konusundan kendi cümlelerimizle yazılmış sorular.
  - "Yalnız gerçek sorular" seçimi türetilmişleri gizler.
- **Soru havuzu:** Ünite ünite, kitap sırasıyla ya da karışık.
- **Aralıklı tekrar:** Yanlış yaptığın sorular 1, 3, 7, 14 ve 30 gün arayla yeniden gelir.
- **İlerleme:** Ünite ve kavram bazında doğru oranın.
- **Konu anlatımları:** Yakında.

## Gizlilik

- Reklam yok, analitik ya da takip çerezi yok.
- Yalnızca ilk cevabını gönderdiğinde ilerlemeni tutmak için tek bir oturum çerezi yazılır.

## Katkıda bulun

- **Yanlış soru mu gördün?** [Yeni bir issue aç](https://github.com/selcukdinc/girisimcilik-pratik/issues/new);
  ünite numarasını ve sorunun metnini yazman yeterli.
- **Beğendiysen** depoya yıldız ver, başkalarının bulmasına yardımcı olur.

## Geliştiriciler için

Gereksinim: Node.js 22.12 veya üstü.

```sh
npm install
npm run db:migrate:local   # yerel veritabanına şema ve sorular
npm run dev                # http://localhost:5173
npm test
```

Sorular `content/sorular/unite-N.ts` dosyalarındadır. Değiştirdikten sonra
`npm run sorular:sql -- migrations/NNNN_ad.sql` ile yeni bir migration üret.

Kayıt, doğrulama e-postası gerektirdiği için yalnızca `RESEND_API_KEY` tanımlıyken açılır.
Yerelde denemek için proje kökünde `.dev.vars` dosyasına `EPOSTA_KONSOL=1` yaz;
doğrulama kodları e-posta yerine `npm run dev` çıktısına düşer.

## Lisans

[GPL-3.0-or-later](LICENSE). Sorular KOSGEB Girişimcilik El Kitabı'na dayanır; bu proje KOSGEB ile bağlantılı değildir.
