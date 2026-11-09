# Plan: Sınav kağıdı motoru, roller ve ana sayfa bildirimi

Hazırlanma: 9 Kasım 2026 · İsteyen: Selçuk · Durum: **onaylandı** (9 Kasım 2026; açık soruların hepsinde önerilen cevap kabul edildi, yenilikler isteği eklendi)

Bu plan Selçuk'un dört başlıktaki isteklerini kodun bugünkü haline göre ele alır: sınav kağıdı motoru,
akademisyen rolü, pratikler.selcukdinc.dev ana sayfası ve yönetici rolü. Her başlıkta önce sorunun
koddaki kaynağı, sonra yapılacak iş yazılıdır. En sonda PR zinciri ve açık sorular var.

Kurallar (proje hafızası ve CLAUDE.md): eski alt alan adlarına ve eski depolara dokunulmaz; PR'lar
**zincir** halinde açılır (her PR bir öncekinin dalı üstüne), main'e paralel PR açılmaz; her PR
`src/yenilikler.ts` başına kayıt ekler; `npm run denetle` her PR'da geçer.

---

## 1. Sınav kağıdı motoru

İlgili dosyalar: `src/pages/SinavKagidi.tsx` (düzenleyici, ölçüm, sayfalama çağrısı, yazdırma),
`shared/sinav.ts` (`sayfala`, `grupKagidi`, belge biçimi), `src/lib/sinav-word.ts` (Word),
`src/styles.css` (`.kagit-*`, 1744-1806. satırlar).

### 1.1 PDF'te fazladan boş sayfa (hata)

**Neden:** Yazdırma çerçevesinde her sayfaya `break-after: page` veriliyor; sonuncusuna da. Üstelik
her sayfa tam kağıt boyunda (`height: 297mm`). Chrome bu durumda son sayfadan sonra bir sayfa sonu
daha koyar; yuvarlamadan doğan 0,1 mm'lik taşma da kendi başına yeni (boş) bir sayfa açar. Önizlemede
bu görünmez çünkü sayfalar ekranda yan yana kutulardır.

**Çözüm:**
- Sayfa sonu yalnızca sayfalar *arasına* konur (`.kagit-sayfa + .kagit-sayfa { break-before: page }`,
  `break-after` kaldırılır).
- Yazdırırken sayfa kutusu kağıttan bir tık kısa tutulur (`height: calc(297mm - 0.3mm)`) ve
  `overflow: hidden` korunur; böylece yuvarlama taşması yeni sayfa açamaz.
- `scripts/kagit-pdf-denetimi.mjs`: Playwright ile örnek bir belgeyi (1, 2 ve 3 sayfalık; tek ve iki
  sütun; A4 ve A3; "Hepsi" görünümü) PDF'e basıp sayfa sayısını önizlemedeki sayfa sayısıyla
  karşılaştıran yerel denetim. `npm run denetle`'ye eklenmez (tarayıcı ister), ayrı komut olur.

### 1.2 PDF'in altındaki küçük yazılar (hata)

**Neden iki yerden gelebilir:**
1. Bizim alt bilgimiz: her sayfanın altında 8 punto "Ders · Sınav · A grubu" ve "Sayfa 1 / 2"
   (`<footer className="kagit-alt">`). Word dosyasında bu alt bilgi **yok**, yani üç çıktı zaten
   birbirini tutmuyor.
2. Tarayıcının kendi yazıları: tarih-saat, sayfa başlığı, `about:blank` adresi ve sayfa numarası.
   Yazdırma penceresinde "Üstbilgi ve altbilgi" açıksa ya da kenar boşluğu "Varsayılan"dan başka
   bir şeye çevrilirse bunlar basılır.

**Çözüm:**
- `kagit-alt` alt bilgisi kaldırılır. Kağıt ayarlarına isteğe bağlı **"Sayfa numarası"** kutusu
  gelir (varsayılan kapalı). Açılırsa önizlemede, PDF'te ve Word'de aynı biçimde ("1 / 2", sayfanın
  altında ortada) çıkar.
- Ölçülen sütun yüksekliğinden alt bilgi için ayrılan 8 mm, sayfa numarası kapalıyken kağıda geri
  verilir (bir sayfaya biraz daha soru sığar).
- Tarayıcı yazılarına karşı: `@page { margin: 0 }` korunur, yazdırma çerçevesinin başlığı sınavın
  adı olur (adres yerine), "PDF indir" düğmesinin yanına bir kez görünen kısa ipucu: "Yazdırma
  penceresinde *Üstbilgi ve altbilgi* kutusunu kapalı tut."
- İlke: **motorda ne görünüyorsa PDF'te ve Word'de o.** Başlık, soru, şık, sayfa numarası ve grup
  harfi üç çıktıda aynı kaynaktan üretilir. Word'ün sayfa sonlarını Word kendisi yaptığı için Word'de
  sayfa *bölünmesi* birebir aynı olmayabilir; bunu açıkça yazacağız (Word indir düğmesinin ipucu).

### 1.3 B grubunda 3. sayfaya taşma: algılama, uyarı ve sığdırma

**Neden:** Bu çoğu zaman hata değil, sayfalamanın doğası: `sayfala` soruları sırayla sütunlara
dizer. B grubunda sorular başka sırada (karışık kip) ya da başka sorular (benzer kip), şıklar da
başka yerde olduğu için aynı sorular bile farklı yer kaplar ve fazladan bir sütun, sonra bir sayfa
açılabilir. Bugün motor bunu yalnızca o grubun sekmesine bakınca gösteriyor, uyarmıyor.

Ayrıca gerçek bir ölçüm tutarsızlığı var: A grubu düzenlenebilir çizildiği için başlıkta boş
"Yönerge" alanı ve boş alanların gri ipuçları görünüyor, ama ölçüm kopyasında bunlar yok. Yani A'nın
başlığı ölçülenden uzun çizilebiliyor ve son soru sayfanın altında kesilebiliyor. Bu düzeltilir:
ölçüm, basılacak hal ile birebir aynı çizilir; düzenleme ipuçları yer kaplamayan katmanda durur.

**Çözüm:**
- **Bütün grupların** sayfa sayısı arka planda (görünmeyen ölçüm alanında) hesaplanır; yalnızca
  açık sekmenin değil.
- Grup sekmelerinde sayfa sayısı yazar: "A grubu · 2 sayfa", "B grubu · 3 sayfa ⚠".
- Gruplar arasında sayfa sayısı farklıysa önizlemenin üstünde uyarı: "B grubu 3 sayfaya taştı
  (A grubu 2 sayfa)." Yanında **"Sığdır"** düğmesi ve öneriler (yazı boyutunu 1 punto küçült, kenar
  boşluğunu azalt, bir soruyu çıkar).
- **Otomatik sığdırma:** Bir grup A'dan uzun çıkarsa motor o grup için başka karıştırmaları dener
  (en çok 40 deneme, ölçülmüş yükseklikler üzerinden, tarayıcıyı kasmaz) ve A'nın sayfa sayısını
  aşmayan ilk düzeni seçer. Benzer kipte benzer soru seçimi de yeniden denenir. Seçilen deneme
  belgede saklanır (`gruplar.denemeler: number[]`), böylece PDF, Word ve başka cihaz aynı kağıdı
  görür. Hiçbir deneme sığmazsa uyarı kalır ve öneriler gösterilir.
- Sütundan uzun tek bir soru (ör. büyük şekilli) kesiliyorsa ayrı uyarı: "7. soru tek başına bir
  sütuna sığmıyor."
- `shared/sinav.test.ts`'e sayfalama ve sığdırma testleri eklenir (aynı yükseklikler + farklı
  sıralar, deneme seçiminin her yerde aynı sonucu vermesi).

### 1.4 Soru seçici: ünite ünite, toplu seçim, kapsamlı filtre

Bugün: tek bir ünite açılır listesi, tür, metin araması ve "Görünenlerin hepsini ekle". Seçili soru
kaldırma tek tek yapılıyor.

**Yeni düzen (soldaki "Sorular" sekmesi):**
- **Ünite listesi (akordeon).** Her satır: "Ünite 3 · Elektrotlar — 42 soru, 5 seçili", solunda üç
  durumlu bir onay kutusu (hiçbiri / bir kısmı / hepsi). Kutuya basınca ünitenin görünen sorularının
  hepsi eklenir ya da hepsi kaldırılır. Satır açılınca sorular konu ya da kavram başlıkları altında
  listelenir.
- **Ünite işlemleri** (her satırdaki ⋯ menüsü):
  - *Ünitenin sorularını ekle / kaldır* (filtreye uyanlar),
  - *Rastgele N soru seç*: "Bu üniteden 5 soru", istersen tür ve zorluk karışımıyla,
  - *Ünitenin sorularını değiştir*: kağıttaki o ünite sorularını aynı kavram ve türden başka
    sorularla değiştirir (sıra ve puan yerinde kalır),
  - *Ünite başlığı ekle*: kağıda "Ünite 3" ortak metni koyar (isteğe bağlı).
- **Üst çubuk:** "Görünenlerin tümünü seç", "Görünenlerin tümünü kaldır", "Kağıdı temizle"
  (onay ister), seçili/görünen sayısı.
- **Ünite başına hedef (isteğe bağlı):** "Ünite 1: 5, Ünite 2: 3, Ünite 4: 7" yazıp "Kağıdı kur"
  deyince motor her üniteden o kadar soruyu kavramları dağıtarak seçer.

**Filtreler ve sorgu:**
- Ünite (çoklu seçim), konu, kavram (pratiğin `meta.ts` kavramları)
- Soru türü (çoklu): çoktan seçmeli, D/Y, boşluk, sayısal, yazılı
- Zorluk aralığı (1-5)
- Kaynak ve etiketler: ders notu, kitap, çıkmış soru, türetilmiş, kaynak (`sourceRef`)
- Şekilli / şekilsiz, formüllü / formülsüz
- Seçili / seçilmemiş
- **Önceki sınavlarımda kullanılmış / kullanılmamış** (kişinin kendi sınavlarından)
- **Öğrenci başarısı**: ilk denemede doğru yapanların oranı (örnek az olan sorularda "veri az")
- Metin araması: soru metni, şıklar ve soru kimliği içinde; birden çok kelime (hepsi geçmeli),
  tırnakla tam ifade
- Sıralama: ünite sırası, zorluk, başarı oranı, uzunluk, rastgele
- Etkin filtreler liste üstünde kaldırılabilir küçük çipler olarak görünür, "Filtreleri temizle".
- Filtre seçimleri sınav başına hatırlanır (yerel, tarayıcıda).

**Sunucu tarafı:** `/api/sinavlar/sorular` yanıtına konu adı, şekil/formül bayrağı, ilk deneme başarı
oranı ve kişinin önceki sınavlarında kullanılmış soru kimlikleri eklenir (tek sorgu, ek tablo yok).

### 1.5 Başlık kutusu, ikinci sürüm: sade

Kağıt ayarlarına **"Başlık stili: Kutulu / Sade"** seçimi gelir (`ayar.baslik`). Sade sürüm:
- Çerçeve yok; başlık en fazla 3 sıkışık satır:
  1. Üniversite · Fakülte (küçük, tek satır, solda) — tarih ve süre aynı satırda sağda
  2. **Ders adı — Sınav adı** (kalın, tek satır)
  3. Adı Soyadı ……… Numarası ……… İmza ……… (tek satır) ve sağ uçta "Grup A"
- Yönerge yazılmışsa altında küçük ve eğik tek paragraf.
- Başlığın altında soruları ayıran ince tek çizgi (kapatılabilir).
- Kutulu sürüme göre ilk sayfada kabaca 15-20 mm kazanılır.
- Word çıktısı da aynı stili kullanır.

---

## 2. Akademisyen rolü: alan kısıtlaması

Bugün: `users.role = 'akademisyen'` olan herkes her pratikte sınav hazırlayıp havuz açabiliyor
(`worker/yetki.ts` pratiğe bakmıyor; `src/pages/Sinavlar.tsx` `sinavYetkisi` yalnızca role bakıyor).

**Yapılacak:**
- **Veri:** `migrations/0030_akademisyen_alanlari.sql` →
  `akademisyen_alanlari (user_id, practice_id, atayan, created_at, PRIMARY KEY (user_id, practice_id))`.
  Alan = pratik (ders). Bir akademisyenin birden çok alanı olabilir.
- **Yetki:** `yetkisiVar(me, izin, pratik)`: akademisyen için `sinav.hazirla` ve `havuz.ac` yalnızca
  atanmış pratiklerde doğrudur; yönetici her yerde. `worker/sinav.ts` ve `worker/havuz.ts` bunu
  kullanır. Sunucu kuralı esastır; arayüz yalnızca yansıtır.
- **Oturum bilgisi:** `Me` nesnesine `alanlar: string[]` eklenir; istemcide `sinavYetkisi(me, PRATIK.id)`.
- **Arayüz:** "Sınav hazırla" menü bağlantısı yalnızca kişinin alanındaki pratikte görünür. Alanı
  dışındaki bir pratikte `/sinavlar` açılırsa: "Bu ders senin alanında değil. Alanlarına eklenmesi
  için yöneticiye yaz." ve alanlarının listesi (bağlantılı).
- **Yönetim paneli → Kullanıcılar:** akademisyen satırında "Alanlar" sütunu: pratik çipleri ve
  "Alan ekle" seçicisi; çıkarma çipin ✕'i ile. Her değişiklik işlem kaydına yazılır
  (`kullanici.alan`). Rol akademisyenden başka bir şeye çevrilince alanlar korunur ama etkisizdir.
- **Mevcut akademisyenler:** göç sırasında, daha önce sınav hazırladıkları ya da havuz açtıkları
  pratikler alanları olarak atanır; kimsenin işi yarıda kalmaz.
- **Alanı kaldırılırsa:** sınavları silinmez ama o pratikte açılamaz (alan geri verilince döner);
  öğrencilere açtığı havuz bağlantıları çalışmaya devam eder.

### 2.1 "Akademisyen" çipi

Amaç: "Evet, bu benim alanım, burada sınav hazırlayabilirim" hissi.
- Akademisyen kendi alanındaki bir pratikte gezerken üst çubukta, hesap adının yanında sade bir
  **"Akademisyen"** çipi görünür. Üstüne gelince: "Tıp Elektroniği senin alanında: sınav
  hazırlayabilirsin." Tıklayınca Sınavlarım'a gider.
- Alanı olmayan bir pratikte çip görünmez.
- Çatı sayfasındaki pratik kartlarında, akademisyenin alanı olan derslerde küçük bir
  "Alanın" etiketi.
- Renk: sitenin sade paletinden (kağıt/kara tahta/fosfor), gradyan yok.

## 3. Yönetici çipi

Yönetici giriş yaptığında üst çubukta, bütün pratiklerde ve çatı sayfasında **"Yönetici"** çipi
görünür; tıklayınca yönetim paneline gider. Akademisyen çipiyle aynı bileşen
(`src/components/RolCipi.tsx`), farklı renk tonu. Yöneticide "Akademisyen" çipi ayrıca görünmez.

## 4. pratikler.selcukdinc.dev: bağımsızlık bildirimi

Kaygı: Gruba gelen bir bağlantıyı açan öğrenci "hocamız bu sorulardan soracak" sanabilir.

**Yapılacak:**
- Çatı sayfasında açılış metninin hemen altında, gözden kaçmayacak ama bağırmayan bir bilgi kutusu:

  > **Bu site bağımsızdır.** Pratikler öğrenciler tarafından öğrenciler için hazırlanır. Sorular ders
  > notlarından ve kaynak kitaplardan türetilir; dersin hocası tarafından hazırlanmaz ya da
  > onaylanmaz. Sınavda soruların buradan geleceğinin bir garantisi yoktur.

- Aynı mesajın kısa hali her pratiğin ana sayfasında (ilk girişte görünen tanıtım alanında) ve
  sitenin alt satırında: "Bağımsız öğrenci projesi · Sorular sınav garantisi değildir."
- Hakkında sayfasına bir paragraf ve SSS'ye bir soru ("Hocamız bu sorulardan mı soracak?").
- **İstisna, "aksi belirtilmedikçe":** Bir akademisyenin açtığı soru havuzu bağlantısında
  (`/havuz/<kod>`) bu uyarı yerine "Bu soruları dersin hocası **X** seçti" yazar; çünkü orada
  gerçekten hoca belirtmiştir. İki mesaj çelişmesin diye havuz sayfasında genel uyarı gösterilmez.
- Çatı sayfasındaki "Akademisyensen" bölümüne de bir cümle: "Siteyi kullanman sorumluluğu sana
  geçirmez; öğrencilere havuz bağlantısı vermediğin sürece sınavın buradan geleceği söylenmez."

## 5. Yenilikler: rol bazında görünürlük ve pratikler arası senkron

Bugün: `src/yenilikler.ts`'teki bütün kayıtlar herkese görünür; Claude paneli, yerel ajan, yönetim
paneli gibi yalnızca yöneticiyi ilgilendiren değişiklikler de öğrencinin "Yeni" rozetini artırır.
"En son hangi yeniliği gördüm" bilgisi `localStorage`'da (`pratik:yenilik-goruldu`) durur; her alt
alan adı ayrı bir tarayıcı deposu olduğu için bir pratikte gördüğün yenilik başka pratikte yine
"yeni" görünür.

**Kitle (rol bazında görünürlük):**
- `Yenilik` kaydına `kitle?: "herkes" | "akademisyen" | "yonetici"` (varsayılan herkes). Tek tek
  maddeler de kendi kitlesini alabilir: `maddeler: (string | { metin: string; kitle: Kitle })[]`.
  Böylece bir PR'ın öğrenciye görünen kısmı herkese, panel kısmı yalnızca yöneticiye gider.
- Görünürlük: üye/misafir → herkes; akademisyen → herkes + akademisyen; yönetici → hepsi.
  Bir kaydın görünen maddesi kalmazsa kayıt hiç görünmez ve rozeti saymaz.
- Yönetici Yenilikler sayfasında kayıtların yanında küçük "Yönetici" / "Akademisyen" etiketi görür
  (kimin ne gördüğü belli olsun).
- Geçmiş kayıtlar elden geçirilir: Claude paneli, yerel ajan, yönetim paneli, işlem kaydı gibi
  kayıtlar ve maddeler `yonetici`; sınav kağıdı düzenleyicisinin ayrıntıları `akademisyen`.
- `src/yenilikler.test.ts`: kitle değerlerinin geçerli olduğu ve her kaydın en az bir maddesinin
  bulunduğu denetlenir. CLAUDE.md'deki yenilikler kuralına "yöneticiyi ilgilendiren madde
  `kitle: "yonetici"` alır" cümlesi eklenir.

**Pratikler arası senkron:**
- Görülen son yenilik **hesapta** saklanır: `users.yenilik_goruldu` (göç), `/api/hesap/yenilik`
  okuma/yazma; `Me` nesnesiyle gelir. Bütün pratikler aynı veritabanını kullandığı için bir pratikte
  okuyunca diğerlerinde ve diğer cihazlarda rozet söner.
- Misafirler için `.selcukdinc.dev` alanına yazılan bir çerez (`yenilik_goruldu`); oturum çerezinin
  kullandığı alanla aynı, bütün alt alan adlarında okunur. Eski `localStorage` değeri ilk açılışta
  çereze ve hesaba taşınır (en büyüğü alınır).
- Rozet yalnızca kişinin görebildiği kayıtları sayar.

---

## 6. PR zinciri

Her PR bir öncekinin dalı üstüne açılır; alttaki birleşince sıradakinin tabanı main'e çevrilir.

| Sıra | PR | İçerik | Göç |
|---|---|---|---|
| 1 | Kağıt çıktısı düzeltmeleri | 1.1 boş sayfa, 1.2 alt bilgi + isteğe bağlı sayfa numarası, ölçüm tutarsızlığı, PDF denetim betiği | yok |
| 2 | Grup taşma uyarısı ve sığdırma | 1.3 bütün grupların sayfa sayısı, uyarı, otomatik sığdırma, testler | yok |
| 3 | Soru seçici v2 | 1.4 ünite akordeonu, toplu seçim, ünite işlemleri, filtreler, sunucu ek alanları | yok |
| 4 | Sade başlık | 1.5 başlık stili seçimi, önizleme + PDF + Word | yok |
| 5 | Akademisyen alanları ve rol çipleri | 2, 2.1, 3 | 0030 |
| 6 | Yenilikler: kitle ve senkron | 5 | 0031 |
| 7 | Bağımsızlık bildirimi | 4 | yok |

Her PR'ın dalı bir öncekinin dalı üstüne kurulur; tabanı (base) ise baştan **main** olur. Böylece
hangi sırayla birleştirilirse birleştirilsin değişiklikler main'e ulaşır (geçmişte alt dala
birleşme sorunu yaşandı). Her PR'ın yayından önce yerelde `npm run denetle`, PR 1-4 için ayrıca
`node scripts/kagit-pdf-denetimi.mjs`. PR 5 ve 6 için yayında `0030` ve `0031` uzak göçleri gerekir.

## 7. Açık sorular (9 Kasım 2026'da hepsinde önerilen cevap kabul edildi)

1. **PDF'in altındaki yazılar** hangileri: bizim "Ders · Sınav · A grubu / Sayfa 1 / 2" satırı mı,
   tarayıcının tarih ve adres yazıları mı? *Öneri:* İkisini de kaldıralım; sayfa numarası isteğe
   bağlı bir ayar olsun (varsayılan kapalı).
2. **Grup taşınca** motor kendiliğinden sığdırmayı denesin mi, yoksa yalnızca uyarıp "Sığdır"
   düğmesini mi beklesin? *Öneri:* Kendiliğinden denesin, sığmazsa uyarsın.
3. **Başlık stili varsayılanı:** *Öneri:* Mevcut sınavlar kutulu kalsın; yeni sınav, kişinin son
   kullandığı stili alsın (ilk kez sade).
4. **Alan ölçüsü** pratik (ders) bazında yeterli mi, yoksa ünite bazında kısıt da gerekir mi?
   *Öneri:* Pratik bazında.
5. **Mevcut akademisyen hesapları:** daha önce sınav hazırladıkları pratikler otomatik alan olarak
   atansın mı? *Öneri:* Evet.
6. **Alanı kaldırılan akademisyenin** sınavları ve havuz bağlantıları ne olsun? *Öneri:* Sınavlar
   saklansın ama açılmasın; havuz bağlantıları öğrenciler için çalışmaya devam etsin.
7. **Bildirim metni** yukarıdaki gibi uygun mu, ve her pratiğin ana sayfasında da görünsün mü?
   *Öneri:* Evet, çatıda tam metin, pratiklerde kısa hali.
8. **Filtreler** yalnızca sınav motorunda mı, yoksa öğrencilerin Sorular ve Karma sayfalarına da
   gelsin mi? *Öneri:* Bu planda yalnızca sınav motoru; öğrenci tarafı sonra ayrı iş.
