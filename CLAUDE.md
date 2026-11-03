# Çalışma notları

- Kullanıcıya görünen her değişiklik (her PR) `src/yenilikler.ts` dosyasının en üstüne bir kayıt ekler: PR numarası, tarih, kısa başlık ve kullanıcının diliyle maddeler. `src/yenilikler.test.ts` sırayı ve biçimi denetler.
- Sorular `content/sorular/unite-N.ts` dosyalarındadır. Kitap soruları (`kitap()`, GES) kitaptaki metniyle kalır; çıkmış sorular kitapla aynıysa ayrı eklenmez, kitap sorusuna `cikmis: N` yazılır; yalnız çıkmış olanlar `cikmis()` ile eklenir; türetilmiş sorular (`turet()`) kitabın metnine dayanır ve kendi cümlelerimizle yazılır.
- Başka şıklara harfle atıf yapan ("a ve c") ya da "Hepsi" şıkkı olan sorularda `sabit: true` yazılır; şıklar karıştırılmaz.
- Türetilmiş sorularda doğru şık dikkat çekecek kadar uzun olmaz ve parantez ya hepsinde ya hiçbirinde bulunur (`src/lib/sik-denetimi.ts`).
- Her sorunun `kavram`ı `shared/kavramlar.ts`'te `u<ünite>-` önekiyle tanımlıdır.
- `settings.current_week` kaçıncı üniteye kadar soruların görüneceğini belirler.
- Denetimler: `npx tsc -b`, `npx vitest run`, `npm run build`.
