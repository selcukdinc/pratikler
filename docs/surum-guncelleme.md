# Sürüm güncelleme

Yazılım anlatan pratikler (şimdilik Git ve GitHub) belli araç sürümlerine göre hazırlanır.
Esas alınan sürümler pratiğin `meta.ts`'indeki `surumler` alanındadır ve Hakkında
sayfasının "Sürümler" bölümünde görünür. Bir kullanıcı "yeni sürümde komut çalışmıyor"
dediğinde yöneticinin "siteyi güncelle" demesi yeterlidir; işi yapan şu adımları izler.

## Git ve GitHub (`icerik/git`)

1. **Neyin değiştiğini bul.** Bildirilen komutu ve sürümü not et. Git'in sürüm notlarına
   (`Documentation/RelNotes/<sürüm>.txt`, git-scm.com) ve GitHub changelog'una
   (github.blog/changelog) eski sürümden bu yana bak: komut çıktısı, varsayılan, uyarı
   metni, yeni ya da kaldırılan seçenek.
2. **Yeni Git ile karşılaştırma testlerini çalıştır.** `git --version` yeni sürümü
   göstermeli. `npx vitest run src/gitsim` hem `gitsim.test.ts` hem `uzak.test.ts`
   senaryolarını gerçek git ile koşturur; tutmayan her satır davranışın değiştiği yerdir.
   Sanal Git'i (`src/gitsim`) yeni davranışa uydur; bildirilen komut testlerde yoksa
   önce onun senaryosunu ekle.
3. **GitHub tarafı.** `src/gitsim/platform.ts` gerçek araçla karşılaştırılmaz:
   `gh` çıktılarını, GH006 reddini, birleştirme commit mesajlarını ve dal koruması
   kurallarını yeni davranışa göre elle güncelle (`platform.test.ts`). Derslerdeki
   Actions örneklerinde `actions/checkout@vN` gibi sürümleri yükselt.
4. **İçeriği tara.** Değişen komut ya da çıktı geçen dersleri, soruları ve görevleri bul
   (`grep -rn "<komut>" icerik/git`); metni ve açıklamaları düzelt. Sorular değiştiyse
   `npm run sorular:sql -- git migrations/NNNN_ad.sql`.
5. **Sürüm bilgisini yenile.** `icerik/git/meta.ts` `surumler`: `tarih` güncelleme ayı,
   araçların yeni sürümleri ve notları. CLAUDE.md'deki "git 2.43" ibaresini de yenile.
6. **Kayıt ve denetim.** `src/yenilikler.ts`'e herkese açık bir kayıt ("Git X.Y'ye
   güncellendi" ve değişen davranışlar), sonra `npm run denetle`.
