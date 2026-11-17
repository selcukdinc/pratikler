# Plan: Agile ve Scrum Pratiği

Hazırlanma: 17 Kasım 2026 · İsteyen: Selçuk · Durum: **onaylandı** (17 Kasım 2026; §10 ve §11'deki bütün öneriler kabul, kurgusal takım büyük squad düzeninde, §3)

Selçuk'un isteği: agile, user story, epic, feature, tribe canvas ve Scrum konularını derin ve pratik yaparak
öğrenmek. Bu konular üç bağlantılı pratiğe ayrıldı; bu plan **birincisi** içindir:

| # | Pratik | Konu | Bu plandaki yeri |
|---|---|---|---|
| 1 | **Agile ve Scrum** (bu plan) | Neden agile, Manifesto, Lean, Scrum çerçevesi, Kanban, XP, sahadaki zor durumlar | Tam plan |
| 2 | Backlog: Epic, Feature, User Story | İşin parçalanması, INVEST, kabul kriterleri, story point, Planning Poker, bölme teknikleri | Yalnızca sınırlar ve köprüler (§2.4) |
| 3 | Ölçekli Agile: Tribe, Squad, Canvas | Spotify modeli, Team/Tribe Canvas, Nexus, LeSS, SAFe | Yalnızca sınırlar ve köprüler (§2.4) |

Pratiğin dört parçası olacak:

1. **Dersler:** 13 ünite, her biri **"Rehber ne der" → "Sahada nasıl olur" → "Kendin dene"** düzeninde,
   bölümlere gömülü etkileşimli şekillerle.
2. **Sprint Simülatörü:** sanal bir takımla birkaç sprint yönettiğin, her kararın sonucunu burndown'da, takım
   sağlığında ve paydaş memnuniyetinde gördüğün ayrı sayfa (§5). Pratiğin en önemli parçası.
3. **Sanal Lab:** tek başına açılabilen kısa deneyler (akış ve WIP oyunu, Kanban tahtası, burndown okuma,
   time-box saatleri, retro tahtası, Cynefin sınıflandırıcı) (§6).
4. **Soru havuzu ve karma test:** kavram soruları, "Scrum Master şimdi ne yapmalı?" senaryo soruları, grafik
   okuma, hesap (velocity, Little yasası) ve "bu takımda sorun ne?" soruları (§4).

Kurallar (CLAUDE.md ve proje hafızası): pratik `pratikler.selcukdinc.dev/<yol>` altında açılır, alt alan adı
açılmaz; eski sitelere dokunulmaz; PR'lar **zincir** halinde açılır (her biri öncekinin dalının üstünde, kendi
dalında); her PR `src/yenilikler.ts` başına kayıt ekler; `npm run denetle` her PR'da geçer; simülatör ve
deneyler **tamamen tarayıcıda** çalışır ve hiç `/api` isteği atmaz (istek kotası).

---

## 1. Kimlik

| Alan | Öneri |
|---|---|
| Ad | **Agile ve Scrum** (katalog alt başlığı "Bir Scrum takımını sanal olarak yöneterek öğren") |
| `id` / `alt` / `yol` | `agile` → `pratikler.selcukdinc.dev/agile` (§10.7) |
| Soru öneki | `ag-` (diğer öneklerle çakışmıyor) |
| Katalog alanı (`alan`) | **Yazılım** (Git ve Şifreleme ile aynı grup; yeni bir "Proje yönetimi" grubu da açılabilir, §10.7) |
| `uniteAdi` | "ünite" |
| `latex` | false (yalnızca Little yasası ve velocity gibi basit oranlar; düz metin yeter) |
| `anaSayfa` | `"ders"` (ders listesi; `uniteGruplari` ile üç gruba bölünür) |
| Ayar | `agile:current_week` (bütün üniteler açık başlar) |
| Seviye testi | "Nereden başlamalıyım?" kartı (§10.8) |

Sonraki iki pratiğin şimdiden ayrılan kimlikleri (çakışma olmasın diye): `user-story` (önek `us-`) ve
`olcekli-agile` (önek `oa-`). Adları kendi planlarında kesinleşir.

**Dil (§10.2):** Scrum'un terimleri sektörde İngilizce konuşulur ("Product Owner", "backlog", "Sprint Review").
Öneri: terimler İngilizce kalır, ilk geçtikleri yerde Scrum Rehberi'nin resmi Türkçe çevirisindeki karşılığı
verilir ("Product Backlog · Ürün İş Listesi") ve `meta.terimler` sözlüğüne bağlanır. Cümleler doğal Türkçe;
melez fiil yok ("refine etmek" değil "backlog'u inceltmek/olgunlaştırmak").

---

## 2. Üniteler

### Grup A · Agile'ın kökleri

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 1 | **Neden agile?** Tahmine dayalı (waterfall, V-model) ve deneysel (empirik) süreç kontrolü; belirsizlik türleri (gereksinim ve teknoloji belirsizliği, Stacey matrisi); Cynefin'e kısa giriş; maliyet-zaman-kapsam üçgeni ve "ters üçgen" | Bir işin agile'a uygun olup olmadığını belirsizliğine bakarak söyleyebilmek; iteratif ve artımlı farkını görmek | **Değer eğrisi deneyi:** aynı projeyi waterfall ve 2 haftalık iterasyonlarla oynat; gereksinim yarıda değişince iki eğri ve "boşa giden iş" yan yana. **Cynefin sınıflandırıcı:** 12 iş kartını (bulaşık makinesi tamiri, yeni uygulama, sunucu çöktü...) dört alana sürükle |
| 2 | **Agile Manifesto ve 12 ilke** Snowbird 2001; 4 değer cümlesinin "sağdakilerin de değeri var" kısmı; 12 ilkenin her biri bir sahne ile; yaygın yanlış anlamalar ("agile'da plan/dokümantasyon yok", "agile = Scrum", "agile = hızlı") | Manifestoyu ezberlemek değil, bir davranışın hangi değer ya da ilkeye uyup uymadığını söyleyebilmek | **Değer terazisi:** bir durum anlatılır, takımın kararı terazinin hangi tarafına ağırlık koyuyor. **İlke eşleştirme:** 12 sahne, 12 ilke. **"Agile mı, değil mi?"** hızlı kart oyunu |
| 3 | **Lean ve akış düşüncesi** Toyota Üretim Sistemi, 7 israf (+ yazılımdaki karşılıkları), çekme (pull) ve itme, parti büyüklüğü, WIP, **Little yasası** (WIP = verim × süre), darboğaz, değer akışı haritası | Neden "daha az işe başlamak daha çok iş bitirir" sezgisini sayılarla görmek | **Parti büyüklüğü oyunu** (penny game benzetimi: 20 parçayı 20'li, 5'li, 1'li partilerle geçir, ilk teslim ve toplam süre ölçülür). **Little yasası hesaplayıcı**, **darboğaz şeridi** (istasyon hızlarını değiştir, kuyruk nerede birikiyor) |

### Grup B · Scrum çerçevesi (Scrum Rehberi 2020)

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 4 | **Scrum'a giriş** Scrum'un tanımı ("hafif çerçeve"), empirizmin üç sütunu (şeffaflık, denetim, uyarlama), Lean düşünceyle bağı, beş değer (bağlılık, odak, açıklık, saygı, cesaret), Rehber'in 2017→2020 değişiklikleri (roller → hesap verebilirlikler, Product Goal, "kendi kendini yöneten") | Scrum'un neyi tarif edip neyi bilerek boş bıraktığını bilmek | **Sütun dedektifi:** bir sahnede hangi sütun çöktü (ör. Daily'de herkes "her şey yolunda" diyor). **Rehber'de var mı?** kartları (DoR, story point, burndown, Sprint 0: hiçbiri Rehber'de yok) |
| 5 | **Scrum Takımı** Product Owner (değeri en çoklamak, backlog'dan hesap verir, tek kişi, komite değil), Scrum Master (takıma, PO'ya ve organizasyona hizmet; koç, öğretmen, kolaylaştırıcı; yönetici değil), Developers (Sprint Backlog, DoD'ye uyum, kendi işlerini planlama); 10 kişi ve altı, çapraz işlevli, kendi kendini yöneten | Bir kararın kimin hesap verebilirliğinde olduğunu doğru söylemek | **Kim karar verir?** kartları (30 karar × 3 hesap verebilirlik + "paydaş"). **Takım kur:** beceri kartlarından çapraz işlevli bir takım oluştur, eksik beceri uyarısı |
| 6 | **Sprint, Sprint Planning ve Daily Scrum** Sprint (en fazla bir ay, sabit uzunluk, iptali yalnız PO yapar, Sprint Goal eskirse), Sprint Planning'in üç konusu (Neden değerli, Ne yapılabilir, Nasıl yapılacak; bir aylık sprintte en fazla 8 saat), Daily Scrum (15 dakika, Developers için, Sprint Goal'e ilerlemeyi denetleme; "üç soru" artık zorunlu değil) | Etkinliklerin amacını, katılımcısını ve time-box'ını karıştırmamak | **Time-box saatleri** (sprint uzunluğunu değiştir, etkinlik sürelerinin orantılı üst sınırı). **Daily diyaloğu:** iki Daily kaydı, hangisi Sprint Goal'e odaklı. Planning'de Sprint Goal yazma alıştırması (örnek iyi/kötü hedefler) |
| 7 | **Sprint Review ve Sprint Retrospective** Review bir sunum değil çalışma oturumu (paydaşlarla birlikte, en fazla 4 saat, backlog uyarlanır); Retro (bireyler, etkileşimler, süreçler, araçlar ve DoD; en fazla 3 saat; en etkili iyileştirmeler bir sonraki sprintin backlog'una girebilir); retro biçimleri (Start-Stop-Continue, 4L, Yelkenli, Mad-Sad-Glad, 5 Neden) | Review ile Retro'yu amaç ve çıktı olarak ayırmak; bir retroyu kolaylaştırabilmek | **Retro tahtası:** hazır bir sprintin olaylarıyla kartları grupla, oyla, bir iyileştirme seç (seçimin simülatörde sonraki sprinte etkisi var). **Review mi, demo mu?** sahne karşılaştırması |
| 8 | **Artefaktlar ve taahhütleri** Product Backlog ↔ Product Goal, Sprint Backlog ↔ Sprint Goal, Increment ↔ Definition of Done; backlog refinement (sürekli etkinlik, Rehber'de "etkinlik" sayılmaz); DoD'nin organizasyon standardı ve takım eki; birden çok takımda tek DoD; Increment'in sprint sonunu beklemeden yayınlanabilmesi; Definition of Ready'nin Rehber'de olmaması | Her artefaktı taahhüdüyle eşleştirmek; "bitti" kelimesinin ortak anlamını kurabilmek | **Eşleştirme zinciri** (artefakt ↔ taahhüt ↔ hesap verebilir kişi). **DoD kurucu:** bir web uygulaması için DoD maddelerini seç; simülatörde DoD zayıfsa teknik borç ve hatalar birikir. Backlog sıralama alıştırması (değer, risk, bağımlılık) |

### Grup C · Sahada agile

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 9 | **Görünürlük ve ölçüm** Burndown ve burnup grafikleri, velocity (kapasite değil, karşılaştırma aracı değil), kümülatif akış diyagramı (CFD), throughput, cycle time ve lead time; Goodhart yasası ve ölçüt tuzakları; tahmin aralıkları (Monte Carlo'ya sezgisel giriş) | Grafikten takımın durumunu okumak; ölçütün ne zaman kötüye kullanıldığını fark etmek | **Burndown okuma:** 8 tipik grafik deseni (düz çizgi sonra uçurum, yukarı tırmanan, hiç inmeyen...) ve anlamları. **CFD gezgini:** bantların kalınlaşması neyi söyler. Basit Monte Carlo: geçmiş throughput'tan "bu 40 iş ne zaman biter?" olasılık dağılımı |
| 10 | **Kanban ve Scrum** Kanban yöntemi (Kanban Rehberi 2020: iş akışının tanımı, WIP sınırı, akış ölçütleri), Kanban Guide for Scrum Teams, Scrumban, hangi işe hangisi (destek ekibi, ürün takımı, operasyon); servis sınıfları (acil, sabit tarihli, standart) | Scrum ile Kanban'ın rakip değil birleştirilebilir olduğunu, farklarını ve ortak noktalarını bilmek | **Kanban tahtası:** sürükle-bırak, WIP sınırı aşılınca tahta uyarır; aynı iş akışını WIP'li ve WIP'siz oynat, cycle time farkı. **Scrum mı, Kanban mı?** 10 takım profili |
| 11 | **XP ve teknik mükemmellik** Extreme Programming değerleri ve pratikleri: TDD, eşli ve topluluk programlama, sürekli entegrasyon, yeniden düzenleme (refactoring), küçük sürümler, ortak kod sahipliği; teknik borç; DoD ile bağı; DevOps'a kısa köprü | "Agile süreci" ile "agile mühendislik" ilişkisini kurmak; DoD'yi teknik pratiklerle güçlendirmek | **Teknik borç faizi:** her sprintte kısayol al ya da alma; hız eğrisi zamanla nasıl değişir. **Kırmızı-yeşil-düzenle döngüsü** animasyonu (kod yazmadan, kartlarla) |
| 12 | **Anti-pattern'ler ve zor durumlar** ScrumBut, "Sprint 0", sertleştirme (hardening) sprinti, uzayan sprint, PO vekili/komitesi, SM'nin proje yöneticisi ya da sekreter olması, Daily'nin durum raporuna dönmesi, sprint ortasında iş ekleyen yönetici, dağıtık takım, sabit fiyat-sabit kapsam sözleşmesi, "agile dönüşüm" tiyatrosu; Scrum Master'ın duruşları (koç, öğretmen, kolaylaştırıcı, mentor, "sessiz kalmak") | Sahadaki gerçek bir sorunda Rehber'e uygun ve insanca bir hamle seçebilmek | **"Scrum Master şimdi ne yapar?"** dallanan senaryolar (her seçimin sonucu ve Rehber'den gerekçesi). **Anti-pattern avı:** bir takımın 3 sprintlik günlüğü, içindeki 10 sorunu bul |
| 13 | **Takımdan organizasyona** Birden çok takım aynı üründe: tek Product Backlog, tek PO, entegre Increment; Nexus ve LeSS'e kısa giriş, SAFe'in adı ve Epic/Feature terimlerinin kökeni; agile'da yöneticinin rolü, bütçe ve sözleşmeler; sertifika yolları (PSM, PSPO, CSM) | Ölçeklemenin Scrum'u "çoğaltmak" olmadığını görmek; 2. ve 3. pratiğe geçişi hazırlamak | **Üç takım, bir ürün:** bağımlılık panosunda iplerle bağımlılıkları çiz, entegrasyon riski. Köprü kartları (§2.4) |

### 2.4 Sonraki iki pratikle sınırlar ve köprüler

Tekrarı önlemek için konular şöyle bölünür:

| Konu | Bu pratikte | 2. pratikte (Backlog) | 3. pratikte (Ölçekli) |
|---|---|---|---|
| Product Backlog | Artefakt, taahhüt, sıralama, refinement'ın varlığı | Öğelerin yazımı, hiyerarşi, inceltme teknikleri | Çok takımlı backlog |
| User story | Adı geçer, "Rehber'de yok" | Tamamı (kalıp, INVEST, kabul kriterleri, Given/When/Then, bölme) | — |
| Tahmin | Velocity ve tuzakları, Monte Carlo sezgisi | Story point, Planning Poker, T-shirt, #NoEstimates | PI Planning |
| Epic / Feature | Ü13'te adı ve kökeni | Tamamı | SAFe portföyü, Epic/Feature akışı |
| Ölçekleme | Ü13'te kısa giriş | — | Tamamı (Spotify, Tribe/Team Canvas, Nexus, LeSS, SAFe) |

Köprü düzeni: derslerde "Bu konu **Backlog** pratiğinde derinleşir" kartı o pratiğin ilgili dersine bağlanır;
pratik henüz yayında değilse kart "Yakında" yazar. Sprint Simülatörü'nün motoru (§5.5) 2. pratikte backlog
inceltme kipiyle, 3. pratikte çok takımlı kipte yeniden kullanılacak şekilde yazılır.

---

## 3. Dersler: "Rehber ne der" → "Sahada" → "Kendin dene"

Her ders bölümü üç katmanlıdır:

1. **Rehber ne der:** Scrum Rehberi 2020'nin ilgili cümlesi kısa alıntı ve kaynakla (Rehber CC BY-SA 4.0
   lisanslı; alıntı ve atıf serbest). Manifesto ve ilkeler de (serbest kopyalanabilir) kaynağıyla verilir.
2. **Sahada:** gerçek takımlarda nasıl göründüğü, yaygın sapmalar ve "Rehber'de yok ama yaygın" uygulamalar
   (story point, DoR, burndown) açıkça "Rehber dışı uygulama" etiketiyle.
3. **Kendin dene:** bölüme gömülü bir etkileşim ya da simülatörde o konuyu açan bir görev bağlantısı.

Her ünitenin sonunda **"Bir sahne"**: aynı kurgusal takımın (simülatördeki takım) o ünitedeki konuyla ilgili bir
günü, ardından 3-4 soruluk kısa kontrol.

Kurgusal ürün ve takım: **"Kampüs Yemekhanesi" uygulaması** geliştiren **büyük bir squad** (Selçuk'un kararı,
17 Kasım 2026): ~12 kişi; Product Owner, Tech Lead, Scrum Master ve QA, DevOps, Engineering chapter'larından
gelen geliştiriciler; paydaşlar (yemekhane müdürü, öğrenci temsilcisi, bilgi işlem). Dersler Rehber'in "genelde 10
ve altı" önerisini öğretir, sahnelerde ve simülatörde büyük takımın getirdiği gerçek sorunlar (uzayan Daily,
iletişim yolları, alt gruplara bölünme, Tech Lead ile PO arasındaki yetki sınırı) işlenir. Bütün pratikte ve
simülatörde aynı karakterler (§10.4).

---

## 4. Soru havuzu (~350 soru, ünite başına ~27)

Etiketler (soru kaynağına göre, platformdaki `etiketler` düzeni):

- **Rehber:** doğrudan Scrum Rehberi, Manifesto, Kanban Rehberi metnine dayanan sorular. Cevap tartışmasız olur.
- **Sahada:** iyi uygulama ve deneyim sorusu; açıklama neden bu şıkkın en iyisi olduğunu Rehber'e ya da kaynağa
  dayandırır.
- **Senaryo:** "Scrum Master şimdi ne yapmalı?" türü durum soruları (PSM I tarzı ama kendi cümlelerimizle;
  Scrum.org'un ya da başka bir sınavın soruları kopyalanmaz).

Türler:

| Tür | Biçim | Örnek |
|---|---|---|
| Kavram (`mcq`, `tf`) | Tanım, hesap verebilirlik, time-box | "Bir aylık sprintte Sprint Review'un time-box'ı en fazla nedir?" |
| Senaryo (`mcq`) | Durum + 4 hamle | "Sprint ortasında CEO acil bir özelliği Sprint Backlog'a eklemeni istiyor..." |
| Grafik okuma (`mcq`) | Burndown, CFD, burnup görseli `[[G-S..]]` | "Bu burndown hangi sorunu gösteriyor?" |
| Hesap (`num`) | Little yasası, velocity aralığı, kapasite | "WIP 12, haftalık throughput 4 ise ortalama cycle time kaç hafta?" |
| Doğru-yanlış tuzakları (`tf`) | Yaygın yanlış inanç | "Daily Scrum'a Product Owner katılmak zorundadır." |
| Boşluk (`fill`) | Terim | "Increment'in taahhüdü: ____" |
| Yazma (`yaz`) | Sprint Goal yaz, retro iyileştirmesi öner; öğrenci örnek çözümle kendini değerlendirir | "Şu backlog için bir Sprint Goal yaz." |

Kalite kuralları: platformdaki şık uzunluğu ve parantez denetimi; "Hepsi" şıklarında `sabit: true`; senaryo
sorularında en az iki şık "makul görünen ama Rehber'e aykırı" olur; her açıklama doğru şıkkı harfle anmadan
gerekçesini verir ve mümkünse Rehber'in ilgili bölümünü anar.

---

## 5. Sprint Simülatörü (ayrı sayfa: `/agile/sprint`)

Pratiğin en önemli parçası. Okuduğunu bir takımın birkaç sprintinde uygulamak.

### 5.1 Akış

1. **Rol seç:** Scrum Master ya da Product Owner (§10.3). Takım ve ürün hazırdır; Product Backlog'da ~30 öğe
   (değer, büyüklük, risk, bağımlılık gizli ya da açık değerlerle).
2. **Sprint Planning:** Sprint Goal'ü seçenekler arasından seç ya da kendin yaz (yazılı hedef anahtar kelimeyle
   değil, seçtiğin öğelerle tutarlılığına bakılarak puanlanır); kapasiteye göre öğe çek. Aşırı yükleme serbesttir,
   sonucu görürsün.
3. **Sprint günleri:** her gün bir **olay kartı** gelir (hasta geliştirici, paydaş "küçük bir şey" ister, üretimde
   hata, dış bağımlılık gecikti, iki geliştirici tartışıyor, yönetici durum raporu istiyor). Her kartta 3-4 hamle;
   hamlelerin bir kısmı Rehber'e aykırı ama cazip. Burndown günlük çizilir.
4. **Sprint Review:** paydaşlar Increment'i görür; geri bildirimler backlog'a yeni öğe ya da öncelik değişikliği
   olarak döner. DoD'yi karşılamayan iş Increment'e girmez.
5. **Sprint Retrospective:** sprintin olaylarından oluşan retro tahtası; seçtiğin iyileştirme sonraki sprintin
   parametresini değiştirir (ör. WIP sınırı, DoD'ye test maddesi, Daily saatinin değişmesi).
6. 4-6 sprint sonunda **karne:** teslim edilen değer, takım sağlığı, paydaş güveni, teknik borç, "Scrum'a
   uygunluk" ve her önemli kararın Rehber'e göre açıklaması.

### 5.2 Gizli değişkenler

Takım morali, odak, teknik borç, paydaş güveni, belirsizlik. Karar kartları bu değişkenleri etkiler; değişkenler
de hızı, hata oranını ve olay olasılıklarını. Sonuçlar tohumlu rastgelelikle üretilir: aynı tohumla aynı oyun
tekrarlanabilir, arkadaşınla aynı sprinti karşılaştırabilirsin.

### 5.3 Görevler

~12 hedefli görev (ör. "Sprint ortasında gelen acil işi Sprint Goal'ü bozmadan yönet", "Velocity'yi
şişirmeden tahmin aralığı ver", "Durum raporuna dönmüş Daily'yi düzelt", "Teknik borcu iki sprintte yarıya
indir"). Görevler derslerden "Kendin dene" ile açılır ve ilgili soruların açıklamasında bağlantılı olur.

### 5.4 Ekran

Sol: Sprint panosu (Kanban tahtası biçiminde, Sprint Backlog öğeleri sütunlarda ilerler). Sağ üst: burndown ve
takım göstergeleri. Sağ alt: olay kartı ve hamleler. Geniş ekranda paneller `DuzenAlani` ile düzenlenir (Git
sandbox'taki gibi); telefonda sekmeli.

### 5.5 Motor

`src/scrum/` altında saf TypeScript: durum düz JSON, `adim(durum, hamle, tohum)` yeni durum döndürür; olaylar ve
kartlar `icerik/agile/istemci/simulasyon/` içinde veri olarak. Bu ayrım sayesinde 2. ve 3. pratik yeni kart ve
kiplerle aynı motoru kullanır. Testler: her görevin örnek çözüm yolu çalıştırılır ve hedefe ulaştığı denetlenir;
olasılıklar tohumla sabitlenir. İlerleme yalnızca tarayıcıda tutulur (istek kotası); görev tamamlamaları mevcut
toplu gönderim yanıtına eklenir, ayrı istek atılmaz.

---

## 6. Sanal Lab

Derslerdeki etkileşimlerin tek başına açılabilen hâlleri (`/agile/lab/<deney>`): değer eğrisi, Cynefin
sınıflandırıcı, değer terazisi, parti büyüklüğü oyunu, Little yasası hesaplayıcı, darboğaz şeridi, time-box
saatleri, Kim karar verir?, DoD kurucu, retro tahtası, burndown okuma, CFD gezgini, Monte Carlo tahmini, Kanban
tahtası (WIP'li/WIP'siz), teknik borç faizi, bağımlılık panosu. Toplam ~16 deney.

---

## 7. Kaynaklar

- **Scrum Rehberi 2020** (Schwaber ve Sutherland, CC BY-SA 4.0) ve resmi Türkçe çevirisi: terimler ve
  "Rehber" etiketli soruların dayanağı.
- **Agile Manifesto ve 12 ilke** (agilemanifesto.org; bütünüyle ve atıfla serbestçe kopyalanabilir).
- **Kanban Rehberi** (2020) ve **Kanban Guide for Scrum Teams** (Scrum.org, 2021).
- Kitaplar (özetlenip kendi cümlelerimizle): Kent Beck, *Extreme Programming Explained*; Mary ve Tom
  Poppendieck, *Lean Software Development*; Mike Cohn, *Agile Estimating and Planning* (yalnızca sınır
  konular); Dave Snowden, Cynefin makaleleri; Little yasası için John Little'ın 1961 makalesi.
- Sertifika sınavlarının soruları ve ücretli eğitim materyalleri kullanılmaz.

Bu kaynakların hiçbiri kullanıcıdan istenmez; elinde sevdiğin bir kitap ya da kurum içi bir eğitim notu varsa
(markitdown ile .md'ye çevirip yükleyebilirsin) türetilmiş sorulara eklenir (§10.1).

---

## 8. Fazlar ve PR zinciri

Her PR kendi dalında, bir öncekinin dalının üstüne açılır. Pratik son PR'a kadar `yayinda: false` kalır.
Yenilikler kayıtları ara PR'larda `kitle: "yonetici"`, yayın PR'ında herkese açık. Migration'lar o sırada boş
olan ilk numaradan başlar (şu an 0051).

| PR | Faz | İçerik |
|---|---|---|
| 1 | İskelet | meta (13 ünite, kavramlar, terimler, üç grup), kayıt, ayar migration'ı, plan `docs/`'a, Ü1-4 soruları (~100) |
| 2 | Kökler ve giriş | Ü1-4 dersleri ve deneyleri (değer eğrisi, Cynefin, terazi, parti büyüklüğü, Little, darboğaz), Lab katalog düzeni |
| 3 | Scrum çerçevesi | Ü5-8 dersleri, soruları (~110) ve deneyleri (time-box, Kim karar verir?, retro tahtası, DoD kurucu) |
| 4 | Simülatör motoru | `src/scrum` motoru, testleri, `/agile/sprint` sayfası, ilk 4 görev |
| 5 | Sahada | Ü9-11 dersleri, soruları (~80) ve deneyleri (burndown okuma, CFD, Monte Carlo, Kanban tahtası, teknik borç); simülatöre WIP ve DoD bağlantıları |
| 6 | Zor durumlar ve yayın | Ü12-13, dallanan senaryolar, kalan simülatör görevleri, seviye testi, tanıtım metni, `yayinda: true` |

---

## 9. Hacim tahmini (öneri)

~350 soru (Ü1-3 biraz az, Ü5-8 ve Ü12 biraz fazla), ~16 Lab deneyi, simülatörde ~12 görev, ~40 olay kartı.
Git pratiği 514, Şifreleme 474 soruydu; bu konu daha dar ama senaryo soruları emek ister (§10.6).

---

## 10. Açık sorular (her birinde önerim kalın)

1. **Amaç: iş hayatı mı, sertifika mı?** Pratiği hangi amaçla çözeceksin?
   - (a) İş hayatında Scrum takımında çalışmak / takım yönetmek.
   - (b) PSM I ya da PSPO I sertifikası.
   → **Öneri: ikisi birlikte.** "Rehber" etiketli sorular Rehber'e harfiyen sadık olur (sertifika için),
   "Sahada" ve "Senaryo" soruları iş hayatı için. Sertifikaya hazırlanıyorsan ayrıca karma testte "Sınav provası"
   ayarı eklerim (80 soru, 60 dakika, yalnız Rehber ve Senaryo soruları). Elinde kullanmak istediğin bir kaynak
   (kurum içi eğitim, kitap) varsa söyle.
2. **Terim dili.** (a) **İngilizce terim + ilk geçişte resmi Türkçe karşılığı (öneri)**, (b) tamamen Türkçe
   ("Ürün Sahibi", "Ürün İş Listesi"), (c) yalnız İngilizce. Sektörde (a) konuşuluyor; sertifika sınavı da
   İngilizce.
3. **Simülatörde rol.** (a) Yalnızca Scrum Master, (b) **SM ya da PO seçilebilir (öneri)**, (c) bunlara ek olarak
   Developer rolü. PO rolünde Planning ve Review kararları ağırlıkta, SM rolünde olay kartları.
4. **Kurgusal ürün.** **"Kampüs Yemekhanesi" uygulaması (öneri,** herkesin bildiği bir alan), ya da senin
   seçeceğin bir alan (ör. kargo takip, e-ticaret). Gerçek bir ürün ya da şirket adı kullanılmaz.
5. **Kanban ve XP bu pratikte mi?** **Öneri: evet, Ü10-11 olarak** (Scrum'u anlamak için karşılaştırma lazım ve
   2-3. pratiklerin konusu değiller). Çıkarırsak pratik 11 üniteye iner.
6. **Soru havuzunun büyüklüğü.** ~250 (hızlı), **~350 (öneri)**, ~500 (Git düzeyi).
7. **Ad, adres ve alan.** **"Agile ve Scrum", `/agile`, alan "Yazılım" (öneri).** Seçenekler: `/scrum`; ya da üç
   pratik için yeni bir "Proje yönetimi" katalog grubu. Sonraki iki pratiğe ayırdığım adresler `/user-story` ve
   `/olcekli-agile`.
8. **Seviye testi.** "Az çok biliyorum" dediğin için **öneri: evet**, Git'teki gibi "Nereden başlamalıyım?" kartı
   (~15 soru); sonuç seni Ü4'ten ya da doğrudan Ü9'dan başlatabilir. Son PR'da.
9. **Yayın zamanı.** **Öneri: hepsi bitince (PR 6)**, Git'teki gibi. İstersen PR 4'ten sonra (Ü1-8 + simülatör)
   erken yayın.
10. **Sonraki pratikler.** Bu pratik bittikten sonra mı 2. pratiğin planına geçelim, yoksa onun planını şimdiden
    paralel hazırlayayım mı? → **Öneri: bu pratiğin PR 4'ü (simülatör motoru) açılınca 2. pratiğin planını
    hazırlarım**, çünkü motorun ikinci pratikte nasıl kullanılacağı o zaman belli olur.

---

## 11. Ek güncelleme önerisi: kendi organizasyon şemanla terim farkları (onay bekliyor)

Selçuk'un paylaştığı "Tribe Organizasyon Şeması" (kişi ve squad adları gizlenmiş) Scrum Rehberi'nde olmayan
terimler içeriyor: Tribe, Tribe Lead, Squad, Chapter (QA, DevOps, Engineering), Tech Lead, Teknik Liderlik, Epic,
Feature, Task. Bunlar üç ayrı kaynaktan geliyor: Scrum Rehberi, Spotify modeli (Tribe/Squad/Chapter/Guild) ve
SAFe ile Jira/ClickUp gibi araçların iş hiyerarşisi (Epic → Feature → Story → Task). Şemada Scrum Master yok,
Product Owner story'leri "onaya götürür" ve Teknik Liderlik epic/feature yazıp story onaylar; bunlar Rehber'deki
PO hesap verebilirliğinden farklı. Squad'lar 9-14 kişi (Rehber: genelde 10 ve altı).

Öneri (şemadaki hiçbir kurum ya da kişi adı kullanılmaz):

1. **Terim haritası (1. pratik, Lab deneyi + Ü4 ve Ü13'te kart):** her terim için "Hangi çerçeveden geliyor?"
   (Scrum Rehberi / Spotify / SAFe / araç ya da şirket dili) ve Rehber'deki karşılığı. Örn. Squad ≈ Scrum Takımı,
   QA/DevOps/Engineering chapter üyeleri ≈ Developers, Tech Lead ve Tribe Lead ≈ Rehber'de karşılığı yok.
2. **Ü5'e bölüm:** "Rehber'de unvan yok: Tech Lead, QA, DevOps nerede?" ve "Scrum Master'ı olmayan takım".
3. **Ü12'ye senaryolar:** PO'nun story'yi başkasının onayına götürmesi, epic/feature'ı PO dışındaki birinin yazması,
   14 kişilik squad, bir case'e göre kurulan geçici ekip.
4. **3. pratikte ana vaka:** bu şemanın genelleştirilmiş hâli ("4 squad'lı bir tribe": rol satırları ve chapter
   satırları) "Kendi tribe şemanı oku/kur" alıştırması olur.
5. **Simülatöre ayar (3. pratik):** saf Scrum takımı ya da chapter'lı squad düzeni; Scrum Master'sız oynatınca
   neyin aksadığı görünür.
