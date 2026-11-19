# Plan: Backlog Pratiği (Epic, Feature, User Story)

Hazırlanma: 19 Kasım 2026 · İsteyen: Selçuk · Durum: **onaylandı** (19 Kasım 2026; §10.daki bütün öneriler kabul)

Agile/Scrum üçlü dizisinin **ikincisi**. Birincisi (Agile ve Scrum, `/agile`, 347 soru, Sprint Simülatörü) 17 Kasım'da
yayına girdi. Sınırlar 1. pratiğin planında (§2.4) çizilmişti; bu plan o tablonun "2. pratik" sütununu açar:

| Konu | 1. pratikte (yayında) | **Bu pratikte** | 3. pratikte (Ölçekli) |
|---|---|---|---|
| Product Backlog | Artefakt, Product Goal taahhüdü, refinement'ın varlığı | Öğelerin yazımı, hiyerarşi, inceltme teknikleri, backlog sağlığı | Çok takımlı backlog |
| User story | Adı geçer, "Rehber'de yok" | **Tamamı**: kalıp, 3C, INVEST, kabul kriterleri, Given/When/Then, bölme | — |
| Epic / Feature | Ü13'te adı ve kökeni | **Tamamı**: hiyerarşi, kim yazar, kim onaylar, araçlardaki karşılığı | SAFe portföyü, PI Planning |
| Tahmin | Velocity, Monte Carlo sezgisi | Story point, Planning Poker, T-shirt, affinity, #NoEstimates | PI Planning kapasitesi |
| Sıralama | "PO sıralar" | MoSCoW, Kano, Cost of Delay, WSJF, değer/efor, risk | Portföy Kanban'ı |

Pratiğin dört parçası (1. pratikle aynı düzen):

1. **Dersler:** 12 ünite, her bölüm **"Kaynak ne der" → "Sahada" → "Kendin dene"** düzeninde.
2. **Backlog Atölyesi** (ayrı sayfa, §5): sanal squad'ın Product Owner'ı olarak belirsiz bir istekten epic,
   feature ve story'ler çıkarıp böldüğün, kabul kriteri yazdığın, sanal takımla Planning Poker oynadığın,
   sıraladığın ve **Teknik Liderlik onayına** götürdüğün ekran. Pratiğin en önemli parçası; 1. pratikteki Sprint
   Simülatörü'nün karşılığı.
3. **Sanal Lab:** ~15 kısa deney (§6).
4. **Soru havuzu ve karma test:** ~300 soru (§4).

Kurallar aynı: `pratikler.selcukdinc.dev/<yol>`, alt alan adı yok; PR'lar zincir, en sonda en üst daldan main'e
ayrı bir birleştirme PR'ı; her PR `src/yenilikler.ts` kaydı; `npm run denetle` her PR'da geçer; atölye ve
deneyler tamamen tarayıcıda çalışır, `/api` isteği atmaz.

---

## 1. Kimlik

| Alan | Öneri |
|---|---|
| Ad | **Backlog: Epic, Feature, User Story** (katalog alt başlığı "Belirsiz bir istekten sprint'e hazır story'lere") |
| `id` / `alt` / `yol` | **`backlog`** → `pratikler.selcukdinc.dev/backlog` (§10.1) |
| Soru öneki | **`bl-`** (çakışma yok) |
| Alan | Yazılım (Agile ve Scrum'un yanında) |
| `anaSayfa` | `"ders"`, `uniteGruplari` ile üç grup |
| Ayar | `backlog:current_week` |
| Seviye testi | "Nereden başlamalıyım?" kartı |
| Dil | 1. pratikteki gibi: terimler İngilizce (epic, story, acceptance criteria), ilk geçişte Türkçe açıklama, `meta.terimler` sözlüğü |

1. pratikte bu pratik için `user-story` / `us-` ayrılmıştı. Değiştirmeyi öneriyorum: (1) pratiğin adı artık
"Backlog" ile başlıyor; (2) panelden pratik açarken kullanılan ad denetimi (`shared/yonetim.ts`, `ALT`) tire
kabul etmiyor, `user-story` bu kalıba uymuyor; (3) kısa adres paylaşması kolay. Ayrıca atölye sayfası için
`atolye` adı `AYRILMIS_YOLLAR`'a eklenir (`sprint` gibi).

**Kurgusal ürün ve takım:** 1. pratikteki **Kampüs Yemekhanesi** squad'ı aynen devam eder (PO Elif, Tech Lead
Can, QA'dan Deniz ve Tuba, DevOps'tan Kerem, Engineering'den Ayşe, Mert...; paydaşlar Nurten Hanım, Arda, Sinan
Bey). Burada sahne Elif'in masasına taşınır. Senin şemandaki akış ("Teknik Liderlik epic/feature yazar, PO
story yazar ve onaya götürür") **sahada katmanında bir kurgu olarak** işlenir: squad'ın üstünde kurgusal bir
"Teknik Liderlik" grubu olur, kurum ya da kişi adı kullanılmaz (§10.2).

---

## 2. Üniteler

### Grup A · Backlog'un temeli

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 1 | **Product Backlog'a yakından bakış** Rehber ne der (tek kaynak, PO hesap verir, Product Goal), PBI nitelikleri (açıklama, sıra, büyüklük, değer); backlog buzdağı (üst kısım ince, alt kısım kaba); DEEP (Detailed appropriately, Estimated, Emergent, Prioritized); backlog kokuları (500 öğelik mezarlık, "bir gün yaparız" listesi, kopya öğeler) | İyi bir backlog'un neye benzediğini ve kötüsünü tanımayı öğrenmek | **Backlog buzdağı:** öğeleri ayrıntı düzeyine göre katmanlara yerleştir. **Backlog sağlık kontrolü:** 40 öğelik bir backlog'da DEEP ihlallerini bul |
| 2 | **İş hiyerarşisi: Theme, Epic, Feature, Story, Task** Her seviyenin amacı, büyüklüğü ve ömrü; çerçeveye ve araca göre farklar (SAFe: Epic → Capability → Feature → Story; Jira: Epic → Story → Sub-task; Azure Boards: Epic → Feature → User Story → Task; ClickUp: Space/List/Task/Subtask ile kurulan karşılıklar); "epic büyük story değildir"; hiyerarşinin ne zaman gereksiz olduğu | Bir işi doğru seviyeye koymak ve kendi aracındaki karşılığını bilmek | **Hiyerarşi ağacı:** 20 iş kartını ağaca yerleştir. **Araç çevirmeni:** aynı hiyerarşiyi dört aracın diliyle göster |
| 3 | **Vizyondan backlog'a** Ürün vizyonu, Product Goal ve OKR ilişkisi; persona; impact mapping (Neden → Kim → Nasıl → Ne); **user story mapping** (Jeff Patton: omurga, yürüyen iskelet, sürüm dilimleri) | Bir hedeften epic'lere ve story'lere inen yolu kurabilmek | **Etki haritası kurucu**, **Story map:** Kampüs Yemekhanesi'nin kullanıcı yolculuğunu omurgaya diz, ilk sürümün dilimini çiz |

### Grup B · User story zanaatı

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 4 | **User story nedir?** 3C (Card, Conversation, Confirmation; Ron Jeffries); "As a ... I want ... so that ..." kalıbı ve Türkçe karşılığı; kalıbın yanlış kullanımları ("As a developer..."); job story; story bir sözleşme değil konuşma vaadi; story ile gereksinim dokümanı farkı | Kalıbı doldurmak değil, kullanıcı değerini anlatan bir story yazabilmek | **Story kurucu:** rol-istek-fayda parçalarından story kur, zayıf olanları gerekçesiyle gör. **İyi mi, kötü mü?** 20 story kartı |
| 5 | **INVEST** (Bill Wake) her harf ayrı bölüm: Independent, Negotiable, Valuable, Estimable, Small, Testable; harfler arasındaki gerilim (küçük ama değerli); INVEST'in DoR'a dönüşme tuzağı | Bir story'nin hangi harfte sorunlu olduğunu ve nasıl düzeleceğini söylemek | **INVEST dedektifi:** her story'de bozuk harfi bul, düzeltilmiş hâliyle karşılaştır |
| 6 | **Kabul kriterleri** Kural listesi ve senaryo biçimi; **Given/When/Then** (Gherkin, BDD); Specification by Example (Gojko Adzic); **Example Mapping** (Matt Wynne: kural, örnek, soru kartları); Three Amigos; kabul kriteri ile DoD farkı; olumsuz yol ve kenar durumları | Test edilebilir, ölçülebilir kabul kriteri yazmak | **Gherkin kurucu:** Given/When/Then cümlesi kur, belirsiz kelimeler ("hızlı", "kolay") uyarı verir. **Example Mapping masası** |
| 7 | **Story bölme** Dikey ve yatay dilim (katman katman bölmenin zararı); **SPIDR** (Spike, Path, Interface, Data, Rules; Mike Cohn); Richard Lawrence'ın bölme desenleri (iş akışı adımları, iş kuralı çeşitleri, büyük çaba, basit/karmaşık, veri çeşitleri, işlem türleri (CRUD), ertelenen performans, spike); epic'i feature'a, feature'ı story'ye bölme | Büyük bir işi değer taşıyan, bağımsız dilimlere bölebilmek | **Pasta dilimleyici:** aynı feature'ı yatay ve dikey böl, ilk teslim edilen değeri karşılaştır. **SPIDR bölücü:** her story için uygun deseni seç |
| 8 | **Story olmayan işler** Fonksiyonel olmayan gereksinimler (performans, güvenlik, erişilebilirlik) kabul kriteri mi, ayrı öğe mi, DoD mu; teknik story ve enabler; spike (time-box'lı araştırma); hata ve teknik borcun backlog'daki yeri; task'ın story'den farkı | Her iş türünü backlog'da doğru biçimde temsil etmek | **Nereye yazılır?** 16 gereksinimi kabul kriteri / ayrı öğe / DoD / task olarak ayır |

### Grup C · Tahmin, sıralama ve hazırlık

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 9 | **Tahmin** Göreli ve mutlak tahmin; story point (karmaşıklık, belirsizlik, efor; saat değildir); Fibonacci ve değiştirilmiş Fibonacci; **Planning Poker** (James Grenning, Mike Cohn); T-shirt boyu, affinity estimation, kova yöntemi; ideal gün; tahmin tuzakları (puanı saate çevirmek, takımlar arası karşılaştırma, puan şişirme); #NoEstimates ve öğe sayma | Takımın ortak anlayışını ortaya çıkaran bir tahmin oturumu yürütebilmek | **Planning Poker masası:** sanal takımla oyna; en yüksek ve en düşük kartı açanın gerekçesi gizli bilgiyi ortaya çıkarır. **Göreli sıralama:** 10 story'yi referans story'ye göre diz |
| 10 | **Sıralama ve önceliklendirme** Değer, risk, bağımlılık, öğrenme; **MoSCoW** (DSDM); **Kano** modeli; **Cost of Delay** ve gecikme maliyeti eğrileri (Reinertsen); **WSJF** (CoD / iş süresi, SAFe'teki biçimi); değer/efor matrisi, RICE; "her şey yüksek öncelikli" sorunu | Bir sıralama kararını sayıyla ve gerekçeyle savunabilmek | **WSJF hesaplayıcı**, **Gecikme maliyeti eğrileri** (dört eğri türü), **Kano anketi:** özellikleri kategorilere ayır |
| 11 | **Refinement ve hazır olma** Refinement'ın Rehber'deki yeri (sürekli, kapasitenin genelde küçük bir kısmı); refinement oturumu nasıl yürür; **Definition of Ready** (faydası ve kapı bekçisine dönüşme tuzağı); story onay akışları (PO yazar, teknik liderlik onaylar: faydası, riski, Rehber'le ilişkisi); araçta iş akışı durumları; backlog'un temizlenmesi | Refinement'ı bir onay bürokrasisine dönüştürmeden işletmek | **DoR mı, DoD mi, kabul kriteri mi?** kartları. **Onay akışı panosu:** story'leri onaya götür, geri dönenlerin nedenini düzelt |
| 12 | **Sürüm planlama ve yol haritası** MVP, MMF, MMP; story map'ten sürüm planına; burnup ile sürüm tahmini ve tahmin aralığı; Now-Next-Later yol haritası; özellik değil sonuç odaklı yol haritası; 3. pratiğe köprü (PI Planning, çok takımlı backlog) | Bir backlog'dan gerçekçi bir sürüm tarihi aralığı çıkarabilmek | **Sürüm tahmincisi:** burnup üzerinde kapsam ve hız aralığıyla oyna (1. pratiğin Monte Carlo hesabı yeniden kullanılır). Köprü kartları |

---

## 3. Dersler

Her bölüm üç katman:

1. **Kaynak ne der:** Scrum Rehberi'nin backlog cümleleri (CC BY-SA 4.0, alıntı ve atıfla), ayrıca tekniğin
   sahibinin tanımı (INVEST için Bill Wake, 3C için Ron Jeffries, SPIDR için Mike Cohn...) **kendi
   cümlelerimizle** ve atıfla. 1. pratiğin `> **Rehber ne der:**` kutusu burada `> **Kaynak ne der:**` olur.
2. **Sahada:** Elif'in masası: gerçek bir backlog'da nasıl göründüğü, araçta nasıl durduğu, onay akışında ne
   olduğu. "Rehber'de yok ama yaygın" uygulamalar açıkça öyle anılır.
3. **Kendin dene:** gömülü deney ya da atölyede bir görev.

Her ünitenin sonunda **önce/sonra** kutusu: squad'ın backlog'undan gerçek bir öğenin kötü ve iyi hâli yan yana.

---

## 4. Soru havuzu (~300 soru, ünite başına ~25)

Etiketler 1. pratiktekiyle aynı mantık: **Kaynak** (tekniğin tanımına dayanan, tartışmasız), **Kavram**,
**Sahada**, **Senaryo** ("PO şimdi ne yapmalı?"), **Hesap** (WSJF, velocity'den sürüm tahmini).

Bu pratiğe özgü soru biçimleri:

| Biçim | Tür | Örnek |
|---|---|---|
| Story teşhisi | `mcq` | "Bu story INVEST'in hangi harfini en çok bozuyor?" |
| Seviye bulma | `mcq` | "'Öğrenciler yemekhane bakiyesini uygulamadan yükleyebilsin' epic mi, feature mı, story mi?" |
| Bölme | `mcq` | "Bu story'yi bölmenin en iyi yolu hangisi?" (yatay dilim çeldiricileri) |
| Kabul kriteri | `mcq`, `fill` | "Bu Given/When/Then'de eksik olan ne?" |
| WSJF / tahmin hesabı | `num` | "CoD 21, iş süresi 7 ise WSJF?"; "Kalan 120 puan, hız 18-24: kaç sprint aralığı?" |
| Story yaz | `yaz` | "Şu paydaş cümlesinden bir story ve üç kabul kriteri yaz"; örnek çözümle kendini değerlendir |

Kalite kuralları platformdaki gibi (şık uzunluğu ve parantez denetimi, `sabit: true`, açıklama doğru şıkkı
harfle anmaz). Senaryo sorularında en az iki çeldirici "sahada sık yapılan ama yanlış" olur.

---

## 5. Backlog Atölyesi (ayrı sayfa: `/backlog/atolye`)

Sprint Simülatörü'nde squad'ı sprint boyunca yönetiyordun; atölyede **sprint başlamadan önceki işi** yaparsın.

### 5.1 Akış (bir görev)

1. **İstek gelir:** bir paydaş cümlesi ("Öğrenciler sırada beklemesin", Nurten Hanım) ya da Teknik Liderlik'ten
   bir epic.
2. **Hiyerarşiyi kur:** epic → feature → story ağacını hazır parça kartlarından ve kendi yazdıklarından kur.
3. **Story'leri yaz ve böl:** story kurucuda rol-istek-fayda seç ya da yaz; büyük olanları bölme desenleriyle
   böl. Her story'nin yanında canlı **INVEST göstergesi** (kurallarla: rol "kullanıcı/geliştirici" mi,
   fayda var mı, "ve" ile bağlanmış iki istek mi, belirsiz kelime var mı, tahmini 13'ü geçiyor mu...).
4. **Kabul kriterleri:** Given/When/Then kurucu; eksik olumsuz yol ve ölçülemeyen ifade uyarısı.
5. **Planning Poker:** sanal takım (Can, Deniz, Ayşe, Kerem...) kart açar. Her karakterin gizli bir bilgisi
   vardır (Kerem: "ödeme sağlayıcının test ortamı yok"); farklı kart açana sorarsan bilgi ortaya çıkar, story
   değişebilir ya da bir spike doğar.
6. **Sırala:** WSJF ya da serbest sıralama; atölye gerekçeni ister.
7. **Onaya gönder:** kurgusal **Teknik Liderlik** inceler; kurallı geri bildirim döner ("ST-14 yatay dilim",
   "ST-9'un kabul kriteri test edilemez"). Düzeltip tekrar gönderirsin.
8. **Karne:** backlog'un DEEP ve INVEST puanı, gizli bilgilerden kaçının bulunduğu, onay turu sayısı.
   İstersen hazırladığın backlog'la **Sprint Simülatörü**nü oynarsın: kötü bölünmüş story'ler sprintte
   taşar, eksik kabul kriteri Review'da geri döner (§10.5).

### 5.2 Görevler

~10 hedefli görev; örnekler: "Bir paydaş cümlesinden üç dikey dilim çıkar", "Teknik Liderlik'ten gelen epic'i
feature'lara böl", "Planning Poker'da 2 ile 13 arasındaki farkın nedenini bul", "Beş feature'ı WSJF ile sırala",
"Onaydan ilk turda dön", "Yatay bölünmüş bir backlog'u dikeye çevir". Her görevin örnek çözümü testte çalıştırılır
(Sprint Simülatörü'ndeki gibi). Hedefler yazılan metne değil kurulan yapıya bakar.

### 5.3 Değerlendirme

**Tamamen kurallı ve tarayıcıda.** Serbest metin yazılabilir ama puanlama metnin anlamına değil yapısına
bakar (seçilen rol, fayda alanının dolu olması, belirsiz kelime listesi, kabul kriteri sayısı ve olumsuz yol,
bölme deseninin dikeyliği). Yazılan story'nin kalitesini anlamca değerlendirmek için örnek çözümle karşılaştırma
gösterilir, öğrenci kendini değerlendirir (`yaz` sorularındaki gibi). Claude ile değerlendirme §10.4'te.

### 5.4 Ekran

Sol: backlog ağacı (epic/feature/story, sürükle-bırak). Orta: seçili öğenin kartı (story, kabul kriterleri,
INVEST göstergesi). Sağ: takım masası (Planning Poker, Teknik Liderlik geri bildirimi). Geniş ekranda
`DuzenAlani`, telefonda sekmeli. İlerleme yalnızca tarayıcıda (`backlog:atolye`), istek atılmaz.

### 5.5 Motor

`src/backlog/` altında saf TypeScript: backlog düz JSON; `invest(story)`, `dikeyMi(bolme)`, `wsjf()`,
`onayIncele(backlog, kurallar)`, `pokerTuru(story, takim, tohum)`. Görevler ve karakterlerin gizli bilgileri
`icerik/backlog/istemci/atolye/` içinde veri. Sprint Simülatörü'ne aktarım için motorun `Oge` biçimine
çeviren tek bir köprü işlevi (`src/scrum/motor.ts`'e dokunmadan).

---

## 6. Sanal Lab (~15 deney)

Backlog buzdağı, backlog sağlık kontrolü, hiyerarşi ağacı, araç çevirmeni, etki haritası, story map,
story kurucu, INVEST dedektifi, Gherkin kurucu, Example Mapping, pasta dilimleyici, SPIDR bölücü, nereye
yazılır?, Planning Poker, WSJF ve gecikme maliyeti eğrileri, Kano, sürüm tahmincisi. 1. pratiğin genel kart
sınıflandırma bileşeni (`siniflandir.tsx`) ve Monte Carlo hesabı (`olcum.tsx`) ortak kullanılır.

---

## 7. Kaynaklar

- **Scrum Rehberi 2020** (CC BY-SA 4.0): Product Backlog, refinement, Product Goal.
- Kitap ve makaleler (özetlenip kendi cümlelerimizle, atıfla): Mike Cohn, *User Stories Applied* (2004) ve
  *Agile Estimating and Planning* (2005); Jeff Patton, *User Story Mapping* (2014); Bill Wake, "INVEST in Good
  Stories" (2003); Ron Jeffries, "Essential XP: Card, Conversation, Confirmation" (2001); Gojko Adzic,
  *Specification by Example* (2011) ve *Impact Mapping* (2012); Matt Wynne, "Example Mapping" (2015); Richard
  Lawrence, story bölme desenleri; Don Reinertsen, *The Principles of Product Development Flow* (2009, Cost of
  Delay); Noriaki Kano (1984); DSDM (MoSCoW); Roman Pichler (ürün vizyonu, DEEP).
- Araç belgeleri (Jira, Azure Boards, ClickUp) yalnızca hiyerarşi karşılıkları için, ekran görüntüsü ve logo
  kullanılmaz.
- Sertifika sınavlarının (PSPO, SAFe POPM) soruları kullanılmaz.

---

## 8. PR zinciri

Migration'lar 0056'dan başlar. Pratik son PR'a kadar `yayinda: false`. Ara PR'ların yenilik kayıtları
`kitle: "yonetici"`, yayın PR'ınınki herkese açık.

| PR | Dal | İçerik |
|---|---|---|
| 1 | `claude/backlog-1` (taban main) | İskelet: meta (12 ünite, kavramlar, terimler, gruplar), kayıt, ayar migration'ı, plan `docs/`'a, Ü1-4 soruları (~100) |
| 2 | `claude/backlog-2` | Ü1-4 dersleri ve deneyleri, `anaSayfa: "ders"` |
| 3 | `claude/backlog-3` | Ü5-8 dersleri, soruları (~100) ve deneyleri (INVEST, Gherkin, bölme) |
| 4 | `claude/backlog-4` | Backlog Atölyesi: `src/backlog` motoru, testleri, `/backlog/atolye`, ilk 5 görev |
| 5 | `claude/backlog-5` | Ü9-12 dersleri, soruları (~100) ve deneyleri, kalan atölye görevleri, Sprint Simülatörü aktarımı, seviye testi, tanıtım, 1. pratikteki "Backlog pratiğinde" köprülerinin bağlantıya dönmesi, `yayinda: true` |
| ⇒ | birleştirme PR'ı | `claude/backlog-5` → main; yalnızca bunu birleştirirsin, ara PR'lar notla kapanır |

---

## 9. Hacim

~300 soru, ~15 deney, atölyede ~10 görev, ~8 sanal takım üyesinin gizli bilgileri, ~45 ders bölümü.
1. pratikten küçük ama atölye simülatörden daha çok arayüz işi içeriyor.

---

## 10. Açık sorular (her birinde önerim kalın)

1. **Ad ve adres.** **"Backlog: Epic, Feature, User Story", `/backlog`, önek `bl-` (öneri).** Ya da 1. pratikte
   ayrılan `/user-story` ve `us-` (panelin ad denetimine uymuyor, yine de elle eklenebilir).
2. **Senin onay akışın ne kadar yansısın?** Şemanda Teknik Liderlik epic/feature yazıyor ve story'leri
   onaylıyor, PO story yazıp onaya götürüyor, araç ClickUp. **Öneri:** atölyede ve "Sahada" bölümlerinde bu akış
   kurgusal bir "Teknik Liderlik" ile birebir oynanır; Ü11'de faydası ve Rehber'le gerilimi (PO hesap
   verebilirliği) dürüstçe anlatılır. Araç adları (Jira, ClickUp, Azure Boards) yalnız hiyerarşi
   karşılaştırmasında anılır, kurum adı geçmez. İstersen akışı daha genel tutarım.
3. **Ekibinizin gerçek kuralları.** Story şablonu, DoR maddeleri, ClickUp'taki durum akışı, epic/feature
   yazım kılavuzu gibi bir dokümanınız varsa (adları silip .md olarak yükleyebilirsin) atölyedeki Teknik
   Liderlik'in kuralları ona göre kurulur. **Öneri: varsa yükle, yoksa yaygın kurallarla başlarım.**
4. **Atölyede değerlendirme.** **(a) Kurallı, tarayıcıda, ücretsiz ve istek atmayan (öneri)**; (b) yazılan
   story'yi Claude'un yorumlaması (daha akıllı geri bildirim ama her gönderim `/api` isteği ve API maliyeti,
   anahtar ve kota yönetimi gerekir). (b) istenirse ayrı iş olarak sonra eklenebilir.
5. **Sprint Simülatörüyle bağ.** Atölyede hazırladığın backlog'la Sprint Simülatörü oynanabilsin mi?
   **Öneri: evet, son PR'da** (kötü bölünmüş story taşar, eksik kabul kriteri Review'da döner). Hayır dersen
   atölye kendi karnesiyle biter, PR 5 küçülür.
6. **Soru havuzu büyüklüğü.** ~220, **~300 (öneri)**, ~400.
7. **Tahmin ünitesinin duruşu.** Story point'e karşı #NoEstimates tartışması tarafsız mı anlatılsın, yoksa
   "takımın kullandığı yöntemi iyi kullan" pratik çizgisi mi? **Öneri: ikisi de anlatılır, sorular pratik
   çizgide** (story point kullanan bir squad üzerinden).
8. **Seviye testi.** **Öneri: evet**, ~9 soru, üç gruptan birinden başlatır.
9. **Yayın.** **Öneri: hepsi bitince (PR 5).** Ya da PR 3'ten sonra dersler ve sorularla erken yayın.
10. **3. pratik (Ölçekli Agile).** **Öneri: bu pratiğin PR 4'ü açılınca planını hazırlarım** (senin tribe
    şeman orada ana vaka olacak).
