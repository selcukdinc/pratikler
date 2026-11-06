import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_1: Ders = {
  hafta: 1,
  baslik: "Kalp ve Elektrokardiyografi (EKG)",
  ozet: "Kalbin ileti sistemi ve dolaşım, Einthoven üçgeni ve derivasyonlar, P-QRS-T dalgaları, EKG kağıdından kalp hızı ve EKG ölçüm düzeni.",
  bolumler: [
    {
      baslik: "EKG nedir?",
      metin: md(`
**Neden önemli?** Biyomedikal veri işlemenin en çok çalışılan sinyali EKG'dir. Kalbin her atışı vücut yüzeyinde ölçülebilen küçük bir elektrik izi bırakır; bu izi doğru okumak hem hekimin hem de algoritmanın ilk işidir.

Elektriksel biyomedikal sinyallerin üç büyüğü bu derste sırayla işlenir: kalpten **EKG**, beyinden **EEG**, kas ve sinirlerden **EMG**.

Kalbin elektriksel etkinliği, cilde yapıştırılan elektrotlarla kaydedilir. Elektrotlar belirli kurallara göre **kollara, bacaklara ve göğüs duvarına** yerleştirilir. Burada üç terim birbirine karıştırılır:

- **Elektrokardiyografi**: kalbin elektriksel potansiyellerini vücut yüzeyinden kaydetme **işlemi**.
- **Elektrokardiyogram** (EKG, İngilizcede ECG): bu işlem sonunda elde edilen **çizim**, yani dalga formu.
- **Elektrokardiyografi cihazı**: bu işi yapan cihaz.

Bir EKG çizimi kalbin ritmini, atış hızını, uyarının kalpte nasıl yayıldığını ve kasın yeniden dinlenme durumuna nasıl döndüğünü gösterir.

> **Sık hata:** "EKG çekildi" denince akla cihaz gelir, ama EKG kısaltması çizimin, yani elektrokardiyogramın adıdır. İşlemin adı -grafi, çizimin adı -gram ile biter.
`),
      dene: ["bm-u1-cizim"],
    },
    {
      baslik: "Kalbin ileti sistemi",
      metin: md(`
**Neden önemli?** EKG'deki her dalga, uyarının ileti sisteminin bir parçasından geçişine karşılık gelir. Dalgaları yorumlamak için uyarının nereden çıkıp hangi sırayla ilerlediğini bilmek gerekir.

Kalbin kendi **pacemaker**'ı (hareketi başlatan ve hızını belirleyen iç saat) vardır. Bu doğal kalp pili, **sağ kulakçığın (sağ atriyum) üst kısmında** bulunan **SA düğümüdür** (sinüs ya da sinoatriyal düğüm). Bir hücre topluluğudur, ama herhangi bir elektronik cihazdan daha düzenli çalışır.

SA düğümünde kendiliğinden oluşan aksiyon potansiyeli bir **depolarizasyon** dalgası olarak bütün kalbe yayılır. Uyarı şu sırayla ilerler:

1. **SA düğümü**: uyarı burada doğar.
2. **AV düğümü** (atriyoventriküler): uyarı kulakçıklardan karıncıklara geçmeden önce burada kısa bir süre bekletilir.
3. **His demeti**
4. **Sağ ve sol demet kolları**
5. **Purkinje lifleri**: uyarıyı karıncık kasının her yerine dağıtır.

[[G-H1-01]]

Bu düzen sayesinde dört odacık doğru zamanlamayla büzülür: önce kulakçıklar, sonra karıncıklar. SA düğümünün ürettiği uyarının **frekansını merkezi sinir sistemi** ayarlar; koşarken kalbin hızlanması bu yüzdendir.

> **Sık hata:** Pacemaker'ı yalnızca yapay kalp pili sanmak. Kalbin doğal pacemaker'ı SA düğümüdür; yapay cihazlar onun işini yapamadığı durumlarda kullanılır.
`),
      dene: ["bm-u1-ileti-sira"],
    },
    {
      baslik: "Dolaşım ve kalp çevrimi",
      metin: md(`
**Neden önemli?** Kalbin elektriksel etkinliği mekanik bir işi tetikler: kanı pompalamak. Hangi tarafın hangi dolaşıma hizmet ettiğini bilmek, EKG'deki bir bozukluğun sonucunu anlamayı kolaylaştırır.

**Küçük dolaşım** (akciğer dolaşımı) kanı oksijenlendirir ve kalbin **sağ tarafı** bu işe ayrılmıştır:

- Organlarda oksijeni azalan kan, **vena cava superior ve inferior** ile **sağ atriyuma** gelir.
- **Triküspit kapaktan** geçip **sağ ventriküle** iner.
- Sağ ventrikül kasılarak kanı **pulmoner artere** atar; kan akciğerde oksijenlenir.

**Büyük dolaşım** oksijenli kanı vücuda gönderir ve kalbin **sol tarafı** bu işten sorumludur:

- Akciğerden dönen kan **pulmoner venlerle** **sol atriyuma** gelir.
- **Mitral kapaktan** geçip **sol ventriküle** iner.
- Sol ventrikül kanı **aort** ile vücuda pompalar. Aort, kalpten çıkan **en büyük atardamardır**.

Kanın geri kaçmamasını kapaklar sağlar: kulakçık ile karıncık arasında **mitral ve triküspit**, karıncık ile büyük damarlar arasında **aort ve pulmoner** kapaklar.

**Kalp çevrimi** iki evreden oluşur:

- **Sistol**: kalp kası, özellikle karıncıklar **kasılır** ve kan aorta ve pulmoner artere pompalanır.
- **Diyastol**: odacıklar **gevşer** ve kanla dolar. Çıkış kapakları kapanır, giriş kapakları açılır, yeni çevrim başlar.

> **Sık hata:** Pulmoner arter "atardamar" olduğu için oksijenli kan taşıdığını düşünmek. Atardamar kalpten çıkan damardır; pulmoner arter oksijeni az kanı akciğere götürür.
`),
      dene: ["bm-u1-kucuk-dolasim"],
    },
    {
      baslik: "Einthoven üçgeni ve bipolar derivasyonlar",
      metin: md(`
**Neden önemli?** Aynı kalp, elektrotların nereye konduğuna göre farklı görünen dalgalar üretir. Bir EKG'yi okurken hangi iki nokta arasındaki farkın çizildiğini bilmek gerekir.

Elektrotlar ile EKG cihazı arasındaki iletken bağlantıya **derivasyon** denir. Standart 12 derivasyonlu EKG üç gruptan oluşur:

1. **Bipolar ekstremite derivasyonları**: DI, DII, DIII
2. **Unipolar ekstremite derivasyonları**: aVR, aVL, aVF
3. **Göğüs (prekordiyal) derivasyonları**: V1–V6

**Einthoven yasasına** göre kalp, **sağ kol, sol kol ve sol bacağın** köşelerini oluşturduğu bir **eşkenar üçgenin merkezindedir**. Frontal düzlemdeki kalp vektörü, birbiriyle **60°** açı yapan üç eksen üzerindeki izdüşümleriyle belirlenir.

[[G-H1-02]]

Bipolar derivasyonlar **iki ekstremite arasındaki potansiyel farkını** ölçer; bu yüzden **standart ekstremite derivasyonları** da denir:

| Derivasyon | Negatif elektrot | Pozitif elektrot |
|---|---|---|
| DI | sağ kol | sol kol |
| DII | sağ kol | sol bacak |
| DIII | sol kol | sol bacak |

**Sağ bacak** ölçüme katılmaz; **toprak (referans) elektrodudur**. Üç derivasyon arasında sabit bir ilişki vardır (Einthoven kanunu): $\\mathrm{DII} = \\mathrm{DI} + \\mathrm{DIII}$.

> **Sık hata:** Üçgenin dördüncü köşesini sağ bacak sanmak. Üçgen iki kol ve **sol** bacaktan oluşur; sağ bacak yalnızca topraktır.
`),
      dene: ["bm-u1-dii"],
    },
    {
      baslik: "Unipolar ve göğüs derivasyonları",
      metin: md(`
**Neden önemli?** Bipolar derivasyonlar kalbe yalnızca frontal düzlemde üç yönden bakar. Unipolar ve göğüs derivasyonları bakış açısını artırır; özellikle kalbin ön yüzündeki bozukluklar göğüs derivasyonlarında görülür.

Unipolar kayıtta bir elektrot ölçümün yapılacağı yere konur (**araştırıcı elektrot**); diğerleri dirençler üzerinden birleştirilerek tek bir **referans** oluşturur. İki türü vardır.

**Goldberger derivasyonları** (unipolar ekstremite): araştırıcı elektrot bir ekstremiteye konur. Direnç düzeni sayesinde potansiyel **artırılmış (augmented)** olarak kaydedilir; adlardaki "a" buradan gelir:

- **aVR**: sağ kol
- **aVL**: sol kol
- **aVF**: sol bacak (foot)

**Wilson derivasyonları** (göğüs, prekordiyal): araştırıcı elektrot göğsün standart noktalarına konur, referans sağ kol + sol kol + sol bacağın birleşimidir. **6 göğüs derivasyonu** vardır:

- **V1**: 4. kaburga arası, sternumun **sağ** kenarı
- **V2**: 4. kaburga arası, sternumun **sol** kenarı
- **V3**: V2 ile V4'ün ortası
- **V4**: 5. kaburga arası, sol orta klavikula çizgisi
- **V5**: 5. kaburga arası, sol ön koltuk altı çizgisi
- **V6**: 5. kaburga arası, sol orta koltuk altı çizgisi

Böylece 3 bipolar + 3 unipolar ekstremite + 6 göğüs = **12 derivasyon** elde edilir.

> **Sık hata:** V3'ün kendine ait bir kaburga aralığı olduğunu düşünmek. V3, V2 ile V4'ü birleştiren doğrunun orta noktasıdır.
`),
      dene: ["bm-u1-avl"],
    },
    {
      baslik: "P, QRS ve T dalgaları",
      metin: md(`
**Neden önemli?** EKG yorumu, dalgaların varlığına, sırasına, süresine ve yüksekliğine bakmaktır. Bir algoritmanın R tepesini ya da QRS'yi bulması da bu tanımlara dayanır.

Normal sinüs ritminde bir atım şu parçalardan oluşur:

- **P dalgası**: kulakçıkların (atriyum) **depolarizasyonu**. Süresi 0,10 s'den kısa, yüksekliği 2,5 mm'den küçüktür.
- **QRS kompleksi**: karıncıkların (ventrikül) **depolarizasyonu**. Süresi 0,08 (en çok 0,10) s'yi aşmaz.
- **T dalgası**: karıncıkların **repolarizasyonu** (dinlenme durumuna dönüş). Süresi 0,10–0,25 s.
- Kulakçıkların repolarizasyonu (Tp) QRS'nin içinde kalır, ayrıca görülmez.

[[G-H1-03]]

Dalgaların arasındaki ölçüler:

- **PR aralığı**: P'nin başından QRS'nin başına; normalde **0,12–0,20 s**. Uyarının AV düğümünde bekleme süresini yansıtır.
- **QT aralığı**: Q'nun başından T'nin sonuna; normalde **0,35–0,44 s**. (Sunumda birim "msn" yazıyor; doğrusu saniyedir.)
- **ST segmenti**: QRS'nin sonu ile T'nin başı arası. TP çizgisi referans alınınca ekstremite derivasyonlarında **1 mm'den fazla yükselme ya da 0,5 mm'den fazla çökme göstermez**.

**Q dalgası** her zaman bulunmaz; kompleksin ilk dalgası negatifse Q adını alır. Normal Q, izleyen R'nin **%25'inden küçüktür** ve **0,04 s'yi** aşmaz.

Yazım kuralı: Q, R, S dalgaları **5 mm'den küçükse küçük harfle** (q, r, s), 5 mm ve üstündeyse büyük harfle yazılır.

> **Sık hata:** T dalgasını kasılma sanmak. QRS ventrikül depolarizasyonudur ve kasılmayı başlatır; T ise repolarizasyondur.
`),
      dene: ["bm-u1-pr"],
    },
    {
      baslik: "EKG kağıdı ve kalp hızı hesabı",
      metin: md(`
**Neden önemli?** EKG kağıdı bir ölçü aletidir: kareleri saymak süreyi ve gerilimi verir. Sınavda en sık çıkan hesap R-R aralığından kalp hızını bulmaktır.

Standart kalibrasyon:

- **Kağıt hızı 25 mm/s** (12,5 ve 50 mm/s de kullanılabilir).
- **Genlik 1 mV = 10 mm**, yani 1 cm/mV (5 mm ve 20 mm de kullanılabilir).
- **Yatay eksen zaman, dikey eksen gerilimdir.**

Kağıtta 1 mm'lik küçük kareler vardır. 25 mm/s hızda:

$$1\\ \\text{mm} = \\frac{1}{25}\\ \\text{s} = 0{,}04\\ \\text{s}, \\qquad 1\\ \\text{büyük kare} = 5 \\times 0{,}04 = 0{,}2\\ \\text{s}$$

Dikeyde 10 küçük kare = 10 mm = 1 mV'tur.

[[G-H1-04]]

**Kalp hızı**: iki R tepesi arasındaki mesafe (mm) ölçülür, saniyeye çevrilir, 60 bu periyoda bölünür:

$$T = \\text{R-R (mm)} \\times 0{,}04\\ \\text{s}, \\qquad \\text{hız} = \\frac{60}{T}\\ \\text{atım/dk}$$

Örnek: R-R aralığı 25 mm ise $T = 25 \\times 0{,}04 = 1$ s ve hız $60/1 = 60$ atım/dk olur. Aralık kısaldıkça hız artar.

> **Sık hata:** 60'ı mm cinsinden aralığa bölmek. Önce aralığı 0,04 ile çarpıp saniyeye çevir, sonra böl.
`),
      dene: ["bm-u1-hiz-hesap"],
    },
    {
      baslik: "Kalp hızı, ritim ve yedek pacemakerlar",
      metin: md(`
**Neden önemli?** Hızın normal aralıkta olup olmadığı EKG değerlendirmesinin ilk adımıdır. SA düğümü susarsa hangi yapının devreye girdiği, ölçülen hızdan anlaşılabilir.

SA düğümü için **normal hız dakikada 60–100** atımdır:

- **60'ın altı: bradikardi** (yavaş kalp atışı)
- **100'ün üstü: taşikardi** (hızlı kalp atışı)

SA düğümü yetersiz kalırsa ileti sistemindeki diğer yapılar yedek pacemaker olarak devreye girer; aşağıya inildikçe hız düşer:

| Pacemaker | Hız (atım/dk) |
|---|---|
| SA düğümü | 60–100 |
| Atriyal | 60–80 |
| AV düğümü | 40–60 |
| Ventriküler | 20–40 |

**Eksternal pacemaker** (transkütanöz kalp pili), kalp hızı tehlikeli derecede düştüğünde ya da ritim bozulduğunda **vücut dışından elektrik uyarısı** vererek ritmi sağlayan **geçici** bir cihazdır.

Bir EKG değerlendirilirken sırasıyla isim-tarih, kağıt hızı (25 mm/s), P-QRS-T ilişkisi ve biçimi, hız ve ritim, aks ve hipertrofi bulgularına bakılır. Ritim bozuklukları kabaca **taşiaritmiler** (supraventriküler ve ventriküler), **bradiaritmiler** ve **dal blokları** olarak gruplanır.

> **Sık hata:** 40'lık bir hızı "SA düğümü yavaşladı" diye okumak. Bu aralık AV düğümünün kendi hızıdır; uyarı başka bir yerden geliyor olabilir.
`),
      dene: ["bm-u1-normal-hiz"],
    },
    {
      baslik: "EKG ölçüm düzeni",
      metin: md(`
**Neden önemli?** Bilgisayar mühendisi EKG'ye çoğunlukla bir ölçüm zincirinin çıkışı olarak bakar. Zincirdeki her bloğun bir amacı vardır ve sinyalin özelliklerini bilmek filtreleri seçmeyi sağlar.

EKG sinyalinin özellikleri:

- Frekansı yaklaşık **0,1 Hz ile 100 Hz** arasında değişir.
- En büyük genliği **1 mV** mertebesindedir.

Bu kadar küçük bir sinyal, gürültü içinde kaybolmasın diye dikkatle kuvvetlendirilir. Ölçüm düzeninde **sağ ayak her zaman referans topraktır**; test noktaları sağ kol, sol kol ve sol ayaktır ve bunlardan DI, DII, DIII, aVR, aVL, aVF elde edilir.

[[G-H1-05]]

Bloklar sırasıyla:

1. **Yüzey elektrotları** ve **uç (derivasyon) seçim devresi**
2. **Ön kuvvetlendirici**: küçük sinyali ilk kez büyütür.
3. **İzolasyon devresi**: hastanın cihaz üzerinden **elektrik çarpmasına maruz kalmasını önler**.
4. **Bant söndüren filtre**: 50/60 Hz şebeke gürültüsünü bastırır.
5. **Kuvvetlendirici**
6. **Bant geçiren filtre**: EKG bandının dışını atar.

> **Sık hata:** İzolasyon devresini gürültü filtresi sanmak. Amacı sinyali temizlemek değil, hastanın güvenliğidir.
`),
      dene: ["bm-u1-ekg-frekans"],
    },
  ],
  test: [
    "bm-u1-terimler",
    "bm-u1-depolarizasyon",
    "bm-u1-sistol",
    "bm-u1-einthoven",
    "bm-u1-v1",
    "bm-u1-qrs-anlam",
    "bm-u1-kucuk-kare",
    "bm-u1-bradikardi",
    "bm-u1-izolasyon",
  ],
};
