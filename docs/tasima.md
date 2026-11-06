# Eski bir siteyi çatıya taşıma (Faz 3)

Bu rehber, ayrı depoda çalışan eski bir pratik sitesini (kimya, fpga, dsp, fizik, ayrik, girisimcilik) `pratikler` platformuna taşımanın adımlarıdır. İlk uygulama kimya oldu. Diğer siteler aynı adımlarla taşınır.

Temel kural şu: eski depo ve eski veritabanı hiç değiştirilmez, yalnızca okunur. Alan adı en son adımda çatıya geçer ve geri alınabilir.

## 1. İçeriği çatıya al (kod, PR)

Bu adımı Claude Code ile yerelde yaptırabilirsin. Eski deponun yanında `pratikler` deposunu aç ve şu istemi ver:

> docs/tasima.md'ye göre `<ad>` sitesini taşı. Eski depo: `~/Projects/<ad>-pratik` (yalnızca oku). İçeriği icerik/<ad>/ altına al ve PR aç.

Yapılacaklar:

- **`icerik/<pratik>/meta.ts`**: ad, alt alan adı (eski siteninkiyle aynı), üniteler, etiketler, kavramlar (`u<ünite>-` önekiyle), terimler, `latex` ve `yayinda: false`. Eski sitenin Tanıtım, Hakkında ve S.S.S. metinleri `tanitim` ve `kaynakAciklamasi` alanlarına gider. Açılış sayfası Sanal Lab ise `anaSayfa: "lab"` yazılır.
- **`icerik/<pratik>/sorular/`**: soru dosyaları, mümkün olduğunca aynen kopyalanır. Kimlikler pratiğin kısa önekini alır (kimya: `km-`). Konu kimlikleri de aynı öneki alır. Kavramlar `u<ünite>-` önekini alır. Kimyadaki gibi küçük bir `yardimci.ts` eski yardımcıları (`turet`, `cikmisSorular`) çatının `Soru` biçimine çevirir ve her soruya etiket ekler.
- **`icerik/<pratik>/istemci/`**: ders anlatımları, Sanal Lab deneyleri, çıkmış sınavlar ve şekiller. Yalnızca tarayıcıda yüklenir. Sözleşme `src/lib/icerik.ts` içindeki `PratikIstemciIcerigi` tipindedir. Ders, lab ve sınav listelerindeki soru kimlikleri de önekli yazılır.
- Kayıt: `icerik/index.ts` ve `icerik/sorular.ts`.
- Migration'lar:
  - ayarlar için `migrations/NNNN_<pratik>_ayarlari.sql`: `<pratik>:current_week`, `show_original`, `announcement`;
  - sorular için `npm run sorular:sql -- <pratik> migrations/NNNN_<pratik>_sorular.sql`.
- `src/yenilikler.ts` kaydı ve `npm run denetle`.

**Hızlı yol (DSP'de kullanıldı).** Eski dosyaları elle düzenlemek yerine olduğu gibi kopyala (`icerik/<pratik>/sorular/kaynak/`, `icerik/<pratik>/istemci/`) ve kimlik öneklerini yüklerken bir dönüşüm dosyasıyla ekle (`icerik/dsp/kimlik.ts`, `icerik/dsp/sorular/index.ts`, `icerik/dsp/istemci/index.ts`). Kavramlara sorunun haftasıyla `u<hafta>-` eklenir; `meta.ts` küçük bir betikle eski kavram, terim ve ikiz soru listelerinden üretilebilir. Kullanıcı verisi önemsizse 3. adım (veri taşıma) tamamen atlanır.

Eski sitede çatının bilmediği bir özellik olabilir (DSP'nin mini MATLAB'ı, FPGA'nın simülatörü, yeni bir soru türü gibi). Böyle bir özellik önce çatıya pratik başına açılabilen bir özellik olarak eklenir. Kimyada ders sayfaları, Sanal Lab, çıkmış sınav sayfası ve sayısal sorular bu şekilde eklendi.

## 2. Yayına hazırla (sen)

1. PR'ı birleştir. Ardından `npm run db:migrate:remote` ve `npm run deploy` çalıştır. Pratik `yayinda: false` olduğu ve alan adı hâlâ eski Worker'da olduğu için kullanıcılar bir şey görmez.
2. Önizleme için iki yol var:
   - Yerelde `npm run dev` ile `http://localhost:5173/?pratik=<pratik>`.
   - Worker'ın workers.dev adresi açıksa `https://pratikler.<hesap>.workers.dev/?pratik=<pratik>`. Bu adres canlı veriyle çalışır.

## 3. Veriyi taşı: prova (sen)

Dökümler salt okunurdur. `tasima/` klasörü `.gitignore`'dadır, çünkü içindekiler kişisel veri taşır.

```sh
npx wrangler d1 export <eski-veritabani> --remote --output tasima/<pratik>-eski.sql
npx wrangler d1 export pratikler --remote --output tasima/pratikler.sql
cp tasima/ornek.json tasima/<pratik>.json   # pratik, önek ve hesap eşlemesi
npm run tasi -- tasima/<pratik>.json tasima/<pratik>-eski.sql tasima/pratikler.sql
```

Eski veritabanının adı, eski deponun `wrangler.jsonc` dosyasındaki `database_name` alanıdır (kimya: `kimya-pratik`, girişimcilik: `girisimcilik-pratik`).

Girişimcilik için ayar dosyası şudur; eski soruların kendi etiketleri (`ges`, `cikmis`, `turetilmis`) olduğu gibi taşınır:

```json
{ "pratik": "girisimcilik", "onek": "gr-" }
```

Araç `tasima/<pratik>-tasima.sql` dosyasını yazar ve bir rapor basar. Raporda şunlar var:

- birleşen hesaplar;
- yeni hesaplar;
- adı değişen hesaplar (çatıda başkası aynı adı kullanıyorsa sonuna `_2` eklenir);
- deneme, oturum ve yazışma sayıları;
- atlanan satırlar.

**Hesap eşleme.** Eski sitedeki üye, çatıda aynı e-postayla bir hesap varsa ona bağlanır. Büyük/küçük harf farkı önemsizdir. Aynı kişinin farklı e-postalı hesapları için `tasima/<pratik>.json` dosyasındaki `hesaplar` alanına bir satır yazılır:

```json
{ "pratik": "kimya", "onek": "km-", "hesaplar": { "eski_ad_ya_da_eposta": "catidaki_ad_ya_da_eposta" } }
```

Raporda "Yeni hesap" olarak görünen kendi hesaplarını bu dosyaya ekle ve aracı yeniden çalıştır. Bağlanan hesabın ayarları (günlük hedef, avatar) çatıdaki gibi kalır. Denemeleri, tekrar kutuları, ders ilerlemesi ve yazışmaları eklenir.

**Taşınanlar:**

- Üyeler, parola özetleriyle birlikte. Herkes eski parolasıyla girer.
- Misafirler.
- Süresi dolmamış oturumlar. Alan adı çatıya geçince tarayıcının gönderdiği eski `fp_oturum` çerezi tanınır ve platform çerezine çevrilir, yani kimse yeniden giriş yapmaz.
- Denemeler.
- Aralıklı tekrar kutuları.
- Ders ilerlemesi.
- Yöneticiyle yazışmalar.
- Öneriler.
- Ayarlar (`current_week`, `show_original`, `announcement`).
- Panelde değiştirilmiş soruların son hali.

Eski sitede panelden eklenmiş sorular da taşınır. Kaynaktan silinmiş eski sorular pasif olarak eklenir, böylece onlara verilmiş denemeler kaybolmaz.

Provayı canlıya uygulamak zararsızdır. Üretilen SQL tekrar çalıştırılabilir, aynı satırı ikinci kez eklemez:

```sh
npx wrangler d1 execute pratikler --remote --file tasima/<pratik>-tasima.sql
```

Ardından workers.dev önizlemesinde eski hesabınla giriş yapıp ilerlemene bak.

## 4. Alan adını geçir (sen, birkaç dakika kesinti)

1. Bu depoda iki satırlık bir PR hazırla. `wrangler.jsonc` içindeki `routes` listesine `{ "pattern": "<alt>.selcukdinc.dev", "custom_domain": true }` satırını ekle ve `icerik/<pratik>/meta.ts` içinde `yayinda: true` yaz. PR'ı birleştir.
2. Cloudflare panelinde eski Worker'ın (kimya: `kimya-pratik`) Settings > Domains & Routes bölümünden `<alt>.selcukdinc.dev` alan adını kaldır.
3. `npm run deploy` çalıştır. Alan adı artık çatıda.
4. Eski siteden son dökümü al ve 3. adımı bir kez daha çalıştır. Provadan bu yana eski sitede çözülen sorular da böylece gelir.

**Geri alma:** route satırını kaldırıp `npm run deploy` çalıştır, sonra alan adını eski Worker'a yeniden ekle. Eski veritabanı hiç değişmediği için eski site olduğu gibi döner. Yalnızca çatıdayken çözülen sorular eski sitede görünmez.

## 5. Sonra

- Eski depo arşivlenebilir (GitHub > Settings > Archive). Eski Worker ve D1 bir süre durabilir. Silmek geri alınamaz, acele etme.
- `CLAUDE.md` dosyasındaki dokunulmazlık listesinden taşınan siteyi çıkar.
