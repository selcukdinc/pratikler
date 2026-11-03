# Çalışma notları

Bu depo bütün pratiklerin (Tıp Elektroniği, ...) tek Worker ve tek D1 veritabanıyla çalıştığı çatı platformudur: pratikler.selcukdinc.dev. Ayrı depolardaki eski siteler (fpga, dsp, girisimcilik, kimya, fizik, ayrik) bu depodan **dokunulmaz**; alan adları wrangler.jsonc'a eklenmez.

- Kullanıcıya görünen her değişiklik (her PR) `src/yenilikler.ts` dosyasının en üstüne bir kayıt ekler: PR numarası, tarih, kısa başlık ve kullanıcının diliyle maddeler. `src/yenilikler.test.ts` sırayı ve biçimi denetler.
- Her pratik `icerik/<pratik>/` altındadır: `meta.ts` (ad, alt alan adı, üniteler, etiketler, kavramlar, terimler, `latex`, `yayinda`) ve `sorular/`. Yeni pratik: klasörü doldur, `icerik/index.ts` ve `icerik/sorular.ts`'e kaydet, `wrangler.jsonc`'a custom domain satırı ve `migrations/0001_sema.sql` gibi bir ayar satırı (`<pratik>:current_week`) ekle.
- Konu ve soru kimlikleri bütün pratiklerde tektir; yeni pratiklerde kısa önek kullanılır (Tıp Elektroniği: `te-`). `shared/kavramlar.test.ts` denetler.
- Her sorunun `kavram`ı pratiğin `meta.ts`'inde `u<ünite>-` önekiyle tanımlıdır; her kavramın en az bir sorusu olur.
- Kitap soruları (`kitap()`) kitaptaki metniyle kalır; çıkmış sorular kitapla aynıysa ayrı eklenmez, kitap sorusuna `cikmis: N` yazılır. Türetilmiş sorular kaynağın metnine dayanır ve kendi cümlelerimizle yazılır. Tıp Elektroniği'nde bütün sorular türetilmiştir: `ders()` ders notundan, `kitaptan()` kaynak kitaplardan; sayısal değerler notlardaki gibidir, iki not farklı değer veriyorsa soru hangi haftanın notu olduğunu söyler.
- Başka şıklara harfle atıf yapan ("a ve c") ya da "Hepsi" şıkkı olan sorularda `sabit: true` yazılır; açıklamalar doğru şıkkı harfle anmaz.
- Türetilmiş sorularda doğru şık dikkat çekecek kadar uzun olmaz ve parantez ya hepsinde ya hiçbirinde bulunur (`src/lib/sik-denetimi.ts`).
- `latex: true` pratiklerde `$...$` formülleri KaTeX ile dizilir; TypeScript dizgisinde ters bölü iki kez yazılır (`\\frac`).
- Ayarlar pratik başınadır: `settings.key = "<pratik>:current_week"` kaçıncı üniteye kadar soruların görüneceğini belirler.
- Sorular değişince: `npm run sorular:sql -- <pratik> migrations/NNNN_ad.sql`.
- Yerelde pratik `?pratik=<id>` ile seçilir (`?pratik=katalog` çatı sayfası); istemci API'ye `X-Pratik` başlığı gönderir.
- Denetimler: `npm run denetle` (`tsc -b`, `vitest run`, `vite build`).
- GitHub Actions kullanılmaz. Panelden verilen Claude işlerini `ajan/pratikler-ajan.mjs` yöneticinin bilgisayarında yapar (`claude -p`, yerel denetim, PR); birleştirme ve yayın yöneticidedir.
