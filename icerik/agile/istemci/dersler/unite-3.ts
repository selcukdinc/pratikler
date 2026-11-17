import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u3-${ad}`;

export const UNITE_3: Ders = {
  hafta: 3,
  baslik: "Lean ve Akış Düşüncesi",
  ozet: "Agile'ın üretimdeki kökünü tanı: Toyota Üretim Sistemi ve Lean yazılım ilkeleri, israf türleri, çekme sistemi, parti büyüklüğü, WIP, Little yasası, darboğaz ve akış verimliliği. Neden \"daha az işe başlamak daha çok iş bitirir\" sorusunu sayılarla gör.",
  bolumler: [
    {
      baslik: "Toyota'dan yazılıma",
      metin: md(`
İkinci Dünya Savaşı'ndan sonra Toyota, Amerikan fabrikalarının dev partileri ve büyük stoklarıyla yarışacak sermayeye sahip değildi. Taiichi Ohno ve arkadaşları tersini denedi: **az stok, küçük partiler, yalnızca istenen kadar üretim** ve her çalışanın hattı durdurup sorunu düzeltebilmesi. Bu yaklaşım **Toyota Üretim Sistemi** adını aldı; 1990'larda Batı'da **Lean** diye yaygınlaştı.

Mary ve Tom Poppendieck 2003'te bu fikirleri yazılıma uyarladı. Lean yazılım geliştirmenin yedi ilkesi:

- İsrafı ortadan kaldır.
- Öğrenmeyi güçlendir (kısa döngüler, sık geri bildirim).
- Kararı olabildiğince geç ver (geri dönülmesi zor kararı, son sorumlu ana kadar ertele).
- Olabildiğince hızlı teslim et.
- Takımı güçlendir (işi yapanlar karar verir).
- Bütünlüğü içeriden kur (kaliteyi sonradan test ederek değil, yaparken kur).
- Bütünü gör (parçaları değil, akışın tamamını en iyile).

Lean'in üç M'si de akılda tutulmaya değer: **muda** israf, **mura** düzensizlik (iş yükünün dalgalanması), **muri** aşırı yüklenme.

> **Rehber ne der:** Scrum Rehberi, Scrum'un **empirizm ve lean düşünce** üzerine kurulduğunu söyler. Lean'in sürekli iyileştirme (kaizen) fikri Sprint Retrospective'te, israf azaltma fikri Definition of Done ve küçük Increment'lerde yaşar.
`),
      dene: [p("kaizen")],
    },
    {
      baslik: "İsraf: değer katmayan her şey",
      metin: md(`
Lean'de **israf** (muda), müşteri için değer üretmeyen her etkinliktir. Ohno yedi tür saydı: **fazla üretim, bekleme, taşıma, fazla işleme, stok, gereksiz hareket ve hatalar**; sonradan sekizinci olarak kullanılmayan yetenek eklendi. Poppendieck'ler bunları yazılıma şöyle çevirdi:

| Fabrikada | Yazılımda |
|---|---|
| Stok | Yarım kalmış iş: birleşmeyi ya da testi bekleyen dallar |
| Fazla üretim | Kimsenin kullanmadığı ek özellikler |
| Fazla işleme | Yeniden öğrenme: unutulmuş bir modülü baştan anlamak |
| Taşıma | Devir teslim: işin ekipten ekibe geçişi |
| Gereksiz hareket | Bağlam değiştirme: aynı gün dört işe atlamak |
| Bekleme | Gecikmeler: onay, inceleme, ortam bekleme |
| Hatalar | Hatalar |

Squad'ın panosundaki durumları israf türlerine ayır:

[[G-S3-04]]
`),
      dene: [p("fazla-ozellik"), p("devir-teslim")],
      lab: "israf",
    },
    {
      baslik: "İtme ve çekme",
      metin: md(`
**İtme** (push) sisteminde iş, bir plana göre ileri itilir: analiz biten işi tasarıma, tasarım geliştirmeye verir; sonraki adımın durumuna bakılmaz. Sonuç tanıdıktır: bir adımın önünde iş birikir, herkes meşgul görünür ama hiçbir şey bitmez.

**Çekme** (pull) sisteminde yeni iş, **kapasitesi boşalan adım tarafından çekilir**. Toyota'da bunu **kanban** (Japonca "görsel kart") sağlıyordu: bir parça kullanılınca kartı önceki istasyona döner ve yalnızca o kadar parça üretilir. Yazılımdaki Kanban yöntemi aynı fikri iş akışına taşır (10. ünite).

> **Rehber ne der:** Sprint Planning'de Sprint'e kaç öğe alınacağını **Developers** seçer, çünkü kendi kapasitelerini en iyi onlar bilir. Sprint boyunca da işi kimse onlara atamaz; kendileri çeker.

> **Sahada:** Yöneticinin her sabah görev dağıttığı bir takım, panoya Scrum yazsa da itme sistemiyle çalışıyordur.
`),
      dene: [p("sprint-cekme")],
    },
    {
      baslik: "Parti büyüklüğü: neden küçük?",
      metin: md(`
Dört istasyonlu bir hat düşün: analiz, geliştirme, test, yayın. Her istasyon bir parçayı **1 dakikada** işliyor ve 20 parça var.

- **20'lik tek parti:** her istasyon 20 parçayı bitirmeden partiyi sonrakine vermez. Bütün iş 4 × 20 = 80 dakikada biter ve ilk parça da müşteriye ancak 80. dakikada ulaşır.
- **Tek parça akış:** her parça bitince hemen sonraki istasyona geçer. İlk parça 4. dakikada müşteridedir; ardından her dakika bir parça çıkar ve son parça 4 + 19 = 23. dakikada biter.

Parti büyüklüğünü değiştirip dakika dakika izle:

[[G-S3-01]]

Yazılımda parti; bir çekme isteğinin büyüklüğü, bir sürümün içerdiği değişiklik sayısı ya da bir Sprint'in uzunluğudur. Küçük partiler geri bildirimi hızlandırır, hatanın kaynağını kolay bulunur yapar ve birleştirme çakışmalarını küçültür.
`),
      dene: [p("parti-1")],
      lab: "parti",
    },
    {
      baslik: "WIP: başlamayı bırak, bitirmeye başla",
      metin: md(`
**WIP** (work in progress), başlanmış ama bitmemiş işlerin sayısıdır. Sezgimiz "ne kadar çok işe başlarsak o kadar çok iş biter" der; gerçek tersidir. Her yeni iş bir **bağlam değiştirme** bedeli getirir: Gerald Weinberg'in bilinen kaba tahminine göre aynı anda iki projede çalışan biri zamanının yaklaşık %20'sini, üç projede çalışan yaklaşık %40'ını geçişlere kaptırır.

Ece aynı anda dört işe başlamış ve hiçbiri bitmemiş. Lean'in önerisi basittir: **yeni işe başlamadan önce başlanmış işi bitir**. Gerekirse takım arkadaşları bitmemiş işe yardım eder; hedef kişilerin meşgul olması değil, işin akmasıdır.

> **Sahada:** Squad'ın panosunda "Geliştirmede" sütununda 15 kart varsa ve takımda 9 geliştirici varsa, bazı işler sahipsiz bekliyor ya da kişiler birden çok işe bölünmüş demektir. Kanban'ın WIP sınırı tam bu sorunu görünür yapar (10. ünite).
`),
      dene: [p("baglam")],
    },
    {
      baslik: "Little yasası",
      metin: md(`
John Little 1961'de kuyruk sistemleri için basit ama güçlü bir eşitlik kanıtladı. Kararlı bir sistemde uzun dönem ortalamaları için:

**Ortalama WIP = ortalama verim × ortalama çevrim süresi**

Buradan çevrim süresi = WIP / verim. Squad'ın panosunda ortalama 12 iş devam ediyorsa ve squad haftada ortalama 4 iş bitiriyorsa, bir iş ortalama 12 / 4 = 3 hafta sürer. Verimi artırmak zordur (daha çok insan, daha iyi araç, daha az hata gerekir); **WIP'i azaltmak ise bir karardır**. Aynı verimle WIP yarıya inerse her iş iki kat çabuk biter.

[[G-S3-02]]

> **Dikkat:** Little yasası ortalamalar içindir ve sisteme giren işle çıkan işin kabaca dengeli olmasını varsayar. Sisteme sürekli çıktığından fazla iş giriyorsa WIP büyür ve kısa dönem hesapları yanıltır.
`),
      dene: [p("little-kosul")],
      lab: "little",
    },
    {
      baslik: "Darboğaz ve akış verimliliği",
      metin: md(`
Bir zincir en zayıf halkası kadar güçlüdür. Eliyahu Goldratt'ın **kısıtlar teorisi** (The Goal, 1984) bunu akışa uygular: sistemin çıktısını en yavaş adım, yani **darboğaz** belirler. Kapasiteleri günde 10, 6 ve 8 iş olan üç adımlı bir akış günde en fazla 6 iş bitirir. Darboğaz olmayan bir adımı hızlandırmak yalnızca darboğazın önündeki kuyruğu büyütür.

Goldratt'ın beş adımı: **kısıtı bul**, onu **en iyi kullan**, diğer adımları ona **uydur**, gerekirse kapasitesini **artır**, sonra **yeni kısıta** geç. Squad'da "Test bekliyor" sütununda iş birikiyorsa, geliştiricilerin daha çok kod yazması değil, test otomasyonuna yardım etmesi akışı hızlandırır.

[[G-S3-03]]

**Akış verimliliği** bir işin üzerinde gerçekten çalışılan sürenin toplam teslim süresine oranıdır. İstendiği günden teslimine 20 gün geçen ve yalnızca 2 gün üzerinde çalışılan bir özelliğin akış verimliliği %10'dur. Yazılımda bu oranın %15'in altında olması sık görülür: işin çoğu zamanı onay, inceleme ve ortam beklemekle geçer. **Değer akışı haritası** bu beklemeleri adım adım görünür yapar.

> **Sahada:** "Herkes her an meşgul olsun" hedefi kuyruk teorisine göre ters teper: kapasite kullanımı %100'e yaklaştıkça kuyruklar hızla büyür ve her yeni iş bekler. Lean kişilerin değil **işin** akışını en iyilemeyi önerir.
`),
      dene: [p("darbogaz-yeri"), p("akis-verimi")],
      lab: "darbogaz",
    },
  ],
  test: [
    p("koken"), p("ilkeler"), p("muda-mura-muri"), p("yedi-israf"), p("yarim-is"), p("cekme-tanim"), p("kanban-kart"),
    p("parti-20"), p("kucuk-parti-yazilim"), p("wip-tanim"), p("daha-az-basla"), p("little-1"), p("little-2"), p("little-3"),
    p("darbogaz-verim"), p("goldratt"), p("harita-amac"), p("kaynak-verimi"),
  ],
};
