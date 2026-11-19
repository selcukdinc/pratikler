// Backlog Atölyesi'nin verisi: Nurten Hanım'ın isteği, Teknik Liderlik'in epic'i, sanal takım,
// hazır kart havuzu, takımdakilerin gizli bilgileri ve hedefli görevler. Motor
// src/backlog/motor.ts; her görevin örnek çözümü atolye.test.ts'te oynatılır.
import type { AtolyeGorevi, AtolyeIcerigi } from "../../../../src/backlog/gorev";
import { altlar, dikeyMi, karne, ogeBul, onayIncele, storyler, wsjf, type Backlog, type Kriter, type Oge, type Senaryo } from "../../../../src/backlog/motor";
import { storyDenetle } from "../../../../src/backlog/kurallar";

const HEPSI = ["ekran", "servis", "veri"] as const;

export const SENARYO: Senaryo = {
  istek: {
    kim: "Nurten Hanım, yemekhane müdürü",
    metin: "Öğle saatinde öğrenciler kasada yirmi dakika bekliyor; bazıları yemeği bırakıp gidiyor. Bu sıra bitmeli.",
  },
  takim: [
    { id: "can", ad: "Can", rol: "Tech Lead" },
    { id: "ayse", ad: "Ayşe", rol: "Geliştirici" },
    { id: "mert", ad: "Mert", rol: "Geliştirici" },
    { id: "kerem", ad: "Kerem", rol: "DevOps" },
    { id: "deniz", ad: "Deniz", rol: "Test uzmanı" },
  ],
  havuz: [
    // Teknik Liderlik'ten gelen epic
    { id: "e-bekleme", tur: "epic", baslik: "Öğle saatinde bekleme süresini yarıya indir", not: "Ölçülebilir bir hedef: bugün ortalama 20 dakika, hedef 10 dakika." },
    // Feature adayları
    { id: "f-onsiparis", tur: "feature", baslik: "Önceden sipariş", katki: true, not: "Kasada geçen süreyi doğrudan kısaltır." },
    { id: "f-bildirim", tur: "feature", baslik: "Hazır olunca bildirim", katki: true, not: "Öğrenci tezgâhın önünde beklemez." },
    { id: "f-yogunluk", tur: "feature", baslik: "Kalabalık saat göstergesi", katki: true, not: "Öğrenciler sakin saatlere yayılır." },
    { id: "f-temassiz", tur: "feature", baslik: "Kasada temassız ödeme", katki: true, not: "Kasadaki her öğrencinin süresini kısaltır." },
    { id: "f-tema", tur: "feature", baslik: "Uygulamaya karanlık tema", katki: false, not: "İstenen bir şey olabilir ama bekleme süresine etkisi yok." },
    { id: "f-anket", tur: "feature", baslik: "Yemek beğeni anketi", katki: false, not: "Menüyü iyileştirir; kuyruğu kısaltmaz." },
    // Önceden sipariş story'leri: dikey dilimler
    {
      id: "s-tek-menu", tur: "story", ustKart: "f-onsiparis", baslik: "Tek menüyü önceden sipariş", katmanlar: [...HEPSI], puan: 5,
      rol: "bir yurt öğrencisi", istek: "günün öğle menüsünü önceden sipariş edip bakiyeden ödemek", fayda: "kasada sıra beklemeyeyim",
      not: "En ince uçtan uca dilim: tek menü, tek ödeme yolu, bildirim yok.",
    },
    {
      id: "s-iptal", tur: "story", ustKart: "f-onsiparis", baslik: "Siparişi iptal", katmanlar: [...HEPSI], puan: 3,
      rol: "bir yurt öğrencisi", istek: "siparişimi yemekten 30 dakika öncesine kadar iptal etmek", fayda: "planım değişince param boşa gitmesin",
      not: "İş kuralı ayrı bir dilim (SPIDR: Rules).",
    },
    {
      id: "s-teslim", tur: "story", ustKart: "f-onsiparis", baslik: "Sıra numarasıyla teslim", katmanlar: [...HEPSI], puan: 3,
      rol: "bir yurt öğrencisi", istek: "siparişimi kasaya uğramadan sıra numarasıyla teslim almak", fayda: "kuyruğa girmeden yemeğimi alayım",
      not: "Yolculuğu tamamlayan dilim: sipariş verildi, şimdi teslim.",
    },
    {
      id: "s-mutfak", tur: "story", ustKart: "f-onsiparis", baslik: "Mutfakta sipariş sayısı", katmanlar: [...HEPSI], puan: 2,
      rol: "bir yemekhane görevlisi", istek: "öğle için gelen önceden siparişlerin sayısını görmek", fayda: "kaç porsiyon ayıracağımı bileyim",
      not: "Başka bir rolün ihtiyacı; kendi başına değer taşır.",
    },
    {
      id: "s-kart-yukle", tur: "story", ustKart: "f-onsiparis", baslik: "Kartla bakiye yükleme", katmanlar: [...HEPSI], puan: 5,
      rol: "bir yurt öğrencisi", istek: "bakiyeme kartla para yüklemek", fayda: "sipariş için bakiyem hep yeterli olsun",
      not: "Takımda bilinmeyen bir risk taşıyor (Planning Poker).",
    },
    // Önceden sipariş için kötü kesimler
    {
      id: "s-hepsi", tur: "story", ustKart: "f-onsiparis", baslik: "Siparişin her şeyi", katmanlar: [...HEPSI], puan: 21,
      rol: "bir yurt öğrencisi", istek: "menüyü görmek, sipariş vermek, ödemek ve iptal etmek", fayda: "yemekhanede vakit kaybetmeyeyim",
      not: "Dikey ama çok büyük; birden çok isteği tek story'ye sıkıştırıyor.",
    },
    {
      id: "s-tablo", tur: "story", ustKart: "f-onsiparis", baslik: "Sipariş tablosu", katmanlar: ["veri"], puan: 3,
      rol: "bir geliştirici", istek: "sipariş tablosunu oluşturmak", fayda: "",
      not: "Yatay dilim: yalnızca veri katmanı.",
    },
    {
      id: "s-servis", tur: "story", ustKart: "f-onsiparis", baslik: "Sipariş servisi", katmanlar: ["servis"], puan: 5,
      rol: "bir geliştirici", istek: "sipariş servisini yazmak", fayda: "",
      not: "Yatay dilim: yalnızca servis katmanı.",
    },
    {
      id: "s-ekran", tur: "story", ustKart: "f-onsiparis", baslik: "Sipariş ekranı", katmanlar: ["ekran"], puan: 3,
      rol: "bir yurt öğrencisi", istek: "sipariş ekranını görmek", fayda: "siparişimi verebileyim",
      not: "Yatay dilim: arkasında servis ve veri olmadan ekran çalışmaz.",
    },
    // Diğer feature'ların story'leri
    {
      id: "s-hazir-bildirim", tur: "story", ustKart: "f-bildirim", baslik: "Hazır bildirimi", katmanlar: [...HEPSI], puan: 3,
      rol: "bir yurt öğrencisi", istek: "yemeğim hazır olunca telefonuma bildirim almak", fayda: "tezgâhın önünde beklemeyeyim",
      not: "Olumsuz yolu takımda biri biliyor (Planning Poker).",
    },
    {
      id: "s-doluluk", tur: "story", ustKart: "f-yogunluk", baslik: "Anlık doluluk", katmanlar: [...HEPSI], puan: 5,
      rol: "bir yurt öğrencisi", istek: "yemekhanenin şu anki doluluğunu görmek", fayda: "kalabalık değilken gideyim",
      not: "Beklenenden küçük olabilir (Planning Poker).",
    },
  ],
  gizli: [
    {
      id: "g-odeme-test", kisi: "kerem", kart: "s-kart-yukle", tahmin: 13,
      metin: "Ödeme sağlayıcının test ortamı yok. Kartla yüklemeyi denemek için gerçek kart ve gerçek para gerekiyor; nasıl test edeceğimizi bilmiyoruz.",
      sonuc: { spike: "Spike: ödeme sağlayıcıyla nasıl test ederiz? (2 gün time-box)", puan: 8 },
    },
    {
      id: "g-bildirim-izni", kisi: "deniz", kart: "s-hazir-bildirim", tahmin: 8,
      metin: "Bildirim izni kapalı telefonlarda ne olacak? Kimse sormadı; o öğrenciler yemeğin hazır olduğunu hiç öğrenemez.",
      sonuc: {
        puan: 5,
        kriter: { given: "öğrencinin telefonunda bildirim izni kapalı", when: "siparişi hazır olduğunda", then: "sipariş numarası girişteki hazır listesinde görünür", olumsuz: true },
      },
    },
    {
      id: "g-turnike", kisi: "ayse", kart: "s-doluluk", tahmin: 2,
      metin: "Turnikeler zaten giriş ve çıkış sayısını tutuyor. Doluluğu oradan hazır alırız; yeni bir sayaç kurmaya gerek yok.",
      sonuc: { puan: 2 },
    },
  ],
};

// ---------------- Görevlerin ortak parçaları ----------------

const EPIC: Oge = { id: "E-1", tur: "epic", ust: null, baslik: "Öğle saatinde bekleme süresini yarıya indir", kart: "e-bekleme" };
const ONSIPARIS: Oge = { id: "F-2", tur: "feature", ust: "E-1", baslik: "Önceden sipariş", kart: "f-onsiparis" };

function kartOge(id: string, kart: string, ek: Partial<Oge> = {}): Oge {
  const k = SENARYO.havuz.find((x) => x.id === kart)!;
  return {
    id, tur: "story", ust: "F-2", baslik: k.baslik, rol: k.rol, istek: k.istek, fayda: k.fayda,
    katmanlar: [...(k.katmanlar ?? [])], kriterler: [], puan: null, kart, ...ek,
  };
}

const k = (given: string, when: string, then: string, olumsuz = false): Kriter => ({ given, when, then, olumsuz });

const featureStoryleri = (b: Backlog, f: string) => altlar(b, f).filter((o) => o.tur === "story");
const iyiDilim = (o: Oge) => !o.spike && dikeyMi(o) && storyDenetle(o.rol ?? "", o.istek ?? "", o.fayda ?? "").iyi;

// Story'ler, WSJF'si yüksek feature'ın story'leri önde olacak biçimde mi sıralı?
function wsjfSirasinda(b: Backlog): boolean {
  const f = b.ogeler.filter((o) => o.tur === "feature" && featureStoryleri(b, o.id).length > 0);
  if (f.length < 2 || f.some((o) => wsjf(o, b) == null)) return false;
  const puan = (id: string | null) => wsjf(ogeBul(b, id)!, b) ?? 0;
  const st = storyler(b).filter((o) => o.ust && f.some((x) => x.id === o.ust));
  return st.every((o, i) => i === 0 || puan(st[i - 1]!.ust) >= puan(o.ust));
}

// ---------------- Görevler ----------------

export const GOREVLER: AtolyeGorevi[] = [
  {
    id: "uc-dilim",
    ad: "İstekten üç dikey dilim",
    ozet: "Nurten Hanım'ın isteği için \"Önceden sipariş\" feature'ının altına, her biri tek başına çalışan ve somut bir kullanıcıya fayda veren üç story koy.",
    ipucu: "Kart havuzunda katmanlara bölünmüş (yalnızca veri, yalnızca ekran) ve her şeyi tek story'ye sıkıştıran kartlar da var. Her story'nin üç katmana da dokunduğuna, rolün somut ve faydanın yazılı olduğuna bak.",
    unite: 7,
    baslangic: [EPIC, ONSIPARIS],
    hedef: (b) => {
      const st = featureStoryleri(b, "F-2");
      return st.length >= 3 && st.every(iyiDilim);
    },
    durum: (b) => {
      const st = featureStoryleri(b, "F-2");
      const iyi = st.filter(iyiDilim).length;
      return `F-2 altında ${st.length} story; ${iyi} tanesi dikey ve kalıbı sağlam.${st.length > iyi ? " Diğerlerini düzelt ya da çıkar." : ""}`;
    },
    ornek: [
      { tur: "kartEkle", kart: "s-tek-menu", ust: "F-2" },
      { tur: "kartEkle", kart: "s-iptal", ust: "F-2" },
      { tur: "kartEkle", kart: "s-teslim", ust: "F-2" },
    ],
  },
  {
    id: "epic-bol",
    ad: "Epic'i feature'lara böl",
    ozet: "Teknik Liderlik'ten gelen \"bekleme süresini yarıya indir\" epic'ine hedefe gerçekten katkı yapan en az üç feature bağla; katkısı olmayanı bağlama.",
    ipucu: "Her feature için sor: bu yapılırsa öğle saatindeki bekleme kısalır mı? İstenen ama hedefle ilgisi olmayan işler başka bir epic'in konusudur (impact mapping, 3. ünite).",
    unite: 2,
    baslangic: [EPIC],
    hedef: (b, s) => {
      const f = altlar(b, "E-1").filter((o) => o.tur === "feature");
      const katki = (o: Oge) => s.havuz.find((x) => x.id === o.kart)?.katki;
      return f.filter((o) => katki(o) === true).length >= 3 && !f.some((o) => katki(o) === false);
    },
    durum: (b, s) => {
      const f = altlar(b, "E-1").filter((o) => o.tur === "feature");
      const katkisiz = f.filter((o) => s.havuz.find((x) => x.id === o.kart)?.katki === false).length;
      return `Epic'e bağlı ${f.length} feature${katkisiz ? `; ${katkisiz} tanesi hedefe katkı yapmıyor` : ""}.`;
    },
    ornek: [
      { tur: "kartEkle", kart: "f-onsiparis", ust: "E-1" },
      { tur: "kartEkle", kart: "f-bildirim", ust: "E-1" },
      { tur: "kartEkle", kart: "f-yogunluk", ust: "E-1" },
    ],
  },
  {
    id: "yatay-dikey",
    ad: "Yatay backlog'u dikeye çevir",
    ozet: "Önceki takım \"Önceden sipariş\"i tablo, servis ve ekran diye bölmüş. Hiçbiri tek başına öğrenciye bir şey vermiyor. Feature'ı en az iki dikey dilimle yeniden kur.",
    ipucu: "Yatay story'leri sil, yerine her biri ekrandan veriye kadar ince bir yol açan story'ler koy. Kendi story'ni de yazabilirsin; dokunduğu katmanları işaretlemeyi unutma.",
    unite: 7,
    baslangic: [EPIC, ONSIPARIS, kartOge("ST-3", "s-tablo"), kartOge("ST-4", "s-servis"), kartOge("ST-5", "s-ekran")],
    hedef: (b) => {
      const st = featureStoryleri(b, "F-2").filter((o) => !o.spike);
      return st.length >= 2 && st.every(dikeyMi) && st.filter(iyiDilim).length >= 2;
    },
    durum: (b) => {
      const st = featureStoryleri(b, "F-2").filter((o) => !o.spike);
      const yatay = st.filter((o) => !dikeyMi(o)).length;
      return `${st.length} story; ${yatay} tanesi hâlâ yatay.`;
    },
    ornek: [
      { tur: "sil", id: "ST-3" },
      { tur: "sil", id: "ST-4" },
      { tur: "sil", id: "ST-5" },
      { tur: "kartEkle", kart: "s-tek-menu", ust: "F-2" },
      { tur: "kartEkle", kart: "s-teslim", ust: "F-2" },
    ],
  },
  {
    id: "poker-fark",
    ad: "Planning Poker'daki farkı çöz",
    ozet: "\"Kartla bakiye yükleme\" story'sinde takım 3 ile 5 açıyor, biri 13 açıyor. Farkın nedenini bul, story'nin tahminini ve backlog'u ona göre güncelle.",
    ipucu: "En yüksek ve en düşük kartı açanların gerekçesi, story'nin neden tahmin edilemediğini gösterir (5. ünite, Estimable). Takım masasında kartları aç ve farklı kart açana sor.",
    unite: 5,
    baslangic: [
      EPIC, ONSIPARIS,
      kartOge("ST-3", "s-kart-yukle", {
        kriterler: [
          k("öğrencinin bakiyesi 10 TL", "kartla 100 TL yüklediğinde", "bakiyesi 110 TL olur ve makbuz e-postayla gelir"),
          k("öğrencinin bakiyesi 10 TL", "kart bankadan reddedildiğinde", "bakiye 10 TL kalır ve ret nedeni gösterilir", true),
        ],
      }),
    ],
    hedef: (b) => {
      const o = ogeBul(b, "ST-3");
      return b.bulunan.includes("g-odeme-test") && o?.puan === 8 && featureStoryleri(b, "F-2").some((x) => x.spike);
    },
    durum: (b) => {
      const o = ogeBul(b, "ST-3");
      if (!b.bulunan.includes("g-odeme-test")) return "Farkın nedeni henüz konuşulmadı.";
      const spike = featureStoryleri(b, "F-2").some((x) => x.spike);
      return `Neden bulundu. Spike ${spike ? "eklendi" : "eklenmedi"}; story'nin tahmini ${o?.puan ?? "yok"}.`;
    },
    ornek: [
      { tur: "sor", id: "ST-3", kisi: "kerem" },
      { tur: "yaz", oge: { tur: "story", ust: "F-2", baslik: "Spike: ödeme sağlayıcıyla nasıl test ederiz? (2 gün time-box)", spike: true } },
      { tur: "guncelle", id: "ST-3", alanlar: { puan: 8 } },
    ],
  },
  {
    id: "ilk-tur-onay",
    ad: "Onaydan ilk turda dön",
    ozet: "Teknik Liderlik'e gidecek backlog hazır görünüyor ama birkaç sorun var. Göndermeden önce bul ve düzelt: onay ilk turda gelsin.",
    ipucu: "Her story'nin INVEST göstergesine bak: belirsiz kabul kriteri, olumsuz yolu olmayan story, gerçek kullanıcıyı anlatmayan rol ve takımda konuşulmamış bir risk var.",
    unite: 6,
    baslangic: [
      EPIC, ONSIPARIS,
      kartOge("ST-3", "s-tek-menu", {
        puan: 5,
        kriterler: [
          k("öğrencinin bakiyesi 60 TL", "45 TL'lik öğle menüsünü önceden sipariş ettiğinde", "bakiyesi 15 TL olur ve sipariş numarası verilir"),
          k("öğrencinin bakiyesi 30 TL", "45 TL'lik menüyü sipariş etmek istediğinde", "sipariş alınmaz ve \"15 TL eksik\" mesajı görünür", true),
        ],
      }),
      kartOge("ST-4", "s-iptal", {
        puan: 3,
        kriterler: [k("öğrencinin 12.00 için siparişi var", "11.00'de iptal ettiğinde", "iptal hızlı ve düzgün çalışır")],
      }),
      kartOge("ST-5", "s-teslim", {
        rol: "bir kullanıcı",
        fayda: "",
        puan: 3,
        kriterler: [
          k("öğrencinin hazır bir siparişi var", "teslim noktasında sıra numarasını söylediğinde", "yemeği kasaya uğramadan teslim edilir"),
          k("öğrencinin siparişi henüz hazır değil", "teslim noktasına geldiğinde", "kalan tahmini süre söylenir", true),
        ],
      }),
      kartOge("ST-6", "s-kart-yukle", {
        puan: 5,
        kriterler: [
          k("öğrencinin bakiyesi 10 TL", "kartla 100 TL yüklediğinde", "bakiyesi 110 TL olur ve makbuz e-postayla gelir"),
          k("öğrencinin bakiyesi 10 TL", "kart bankadan reddedildiğinde", "bakiye 10 TL kalır ve ret nedeni gösterilir", true),
        ],
      }),
    ],
    hedef: (b) => b.onay.onaylandi && b.onay.tur === 1,
    durum: (b, s) => {
      if (b.onay.onaylandi) return b.onay.tur === 1 ? "İlk turda onaylandı." : `${b.onay.tur}. turda onaylandı; görev ilk tur istiyor, baştan dene.`;
      if (b.onay.tur > 0) return `${b.onay.tur}. turda geri döndü; görev ilk turu istiyor, baştan dene.`;
      const n = onayIncele(b, s).length;
      return n ? "Henüz gönderilmedi. Göndermeden önce INVEST göstergelerine bak." : "Henüz gönderilmedi; göndermeye hazır görünüyor.";
    },
    ornek: [
      {
        tur: "guncelle", id: "ST-4", alanlar: {
          kriterler: [
            k("öğrencinin 12.00 için 45 TL'lik siparişi var", "11.00'de iptal ettiğinde", "sipariş iptal edilir ve 45 TL bakiyesine geri yüklenir"),
            k("öğrencinin 12.00 için siparişi var", "11.45'te iptal etmek istediğinde", "iptal yapılmaz ve \"iptal süresi geçti\" mesajı görünür", true),
          ],
        },
      },
      { tur: "guncelle", id: "ST-5", alanlar: { rol: "bir yurt öğrencisi", fayda: "kuyruğa girmeden yemeğimi alayım" } },
      { tur: "sor", id: "ST-6", kisi: "kerem" },
      { tur: "yaz", oge: { tur: "story", ust: "F-2", baslik: "Spike: ödeme sağlayıcıyla nasıl test ederiz? (2 gün time-box)", spike: true } },
      { tur: "guncelle", id: "ST-6", alanlar: { puan: 8 } },
      { tur: "onayaGonder" },
    ],
  },
  {
    id: "wsjf-sira",
    ad: "WSJF ile sırala",
    ozet: "Üç feature'ın story'leri backlog'da yazıldıkları sırada duruyor. Her feature'ı WSJF ile puanla ve story'leri, WSJF'si yüksek feature'ın story'leri önde olacak biçimde sırala.",
    ipucu: "Bir feature seç ve \"WSJF ile puanla\" de. Kayıt haftası gibi bir tarih yoksa zaman kritikliği düşüktür; küçük feature'lar aynı gecikme maliyetiyle öne geçer. Sonra soldaki Sıra listesinde okları kullan.",
    unite: 10,
    baslangic: [
      EPIC, ONSIPARIS,
      { id: "F-3", tur: "feature", ust: "E-1", baslik: "Hazır olunca bildirim", kart: "f-bildirim" },
      { id: "F-4", tur: "feature", ust: "E-1", baslik: "Kalabalık saat göstergesi", kart: "f-yogunluk" },
      kartOge("ST-5", "s-tek-menu", { puan: 5 }),
      kartOge("ST-6", "s-teslim", { puan: 3 }),
      kartOge("ST-7", "s-doluluk", { ust: "F-4", puan: 5 }),
      kartOge("ST-8", "s-hazir-bildirim", { ust: "F-3", puan: 3 }),
    ],
    hedef: (b) => wsjfSirasinda(b),
    durum: (b) => {
      const f = b.ogeler.filter((o) => o.tur === "feature" && featureStoryleri(b, o.id).length > 0);
      const puanli = f.filter((o) => wsjf(o, b) != null).length;
      if (puanli < f.length) return `${f.length} feature'dan ${puanli} tanesi WSJF ile puanlandı.`;
      return wsjfSirasinda(b) ? "Sıra WSJF'ye uyuyor." : "Hepsi puanlandı; story'lerin sırası henüz WSJF'ye uymuyor.";
    },
    ornek: [
      { tur: "guncelle", id: "F-2", alanlar: { wsjf: { deger: 8, zaman: 5, risk: 3 } } },
      { tur: "guncelle", id: "F-3", alanlar: { wsjf: { deger: 5, zaman: 5, risk: 2 } } },
      { tur: "guncelle", id: "F-4", alanlar: { wsjf: { deger: 5, zaman: 3, risk: 1 } } },
      { tur: "siraKur", sira: ["ST-8", "ST-5", "ST-6", "ST-7"] },
    ],
  },
  {
    id: "ilk-surum",
    ad: "Sprint'e hazır ilk sürüm",
    ozet: "Boş bir epic'ten başla: iki feature, en az dört dikey story, hepsinde olumsuz yolu olan kabul kriterleri ve tahmin. Takımdaki gizli bilgileri bul ve backlog'u Teknik Liderlik'ten onaylı çıkar.",
    ipucu: "Her story için Planning Poker'da kartları aç; farklı kart açan varsa sor ve öneriyi uygula. Onaya göndermeden önce INVEST göstergelerinin hepsi yeşil olsun. Bitince karnedeki düğmeyle backlog'u Sprint Simülatörü'ne aktarıp oynayabilirsin.",
    unite: 12,
    baslangic: [EPIC],
    hedef: (b, s) => {
      const k = karne(b, s);
      const st = storyler(b).filter((o) => !o.spike);
      const f = b.ogeler.filter((o) => o.tur === "feature");
      return b.onay.onaylandi && f.length >= 2 && st.length >= 4 && k.gizliBulunan === k.gizliToplam && k.ayrintili;
    },
    durum: (b, s) => {
      const k = karne(b, s);
      const st = storyler(b).filter((o) => !o.spike).length;
      const f = b.ogeler.filter((o) => o.tur === "feature").length;
      return `${f} feature, ${st} story; gizli bilgi ${k.gizliBulunan}/${k.gizliToplam}; ${b.onay.onaylandi ? "onaylandı" : b.onay.tur ? `${b.onay.tur}. turda geri döndü` : "henüz onaya gitmedi"}.`;
    },
    ornek: [
      { tur: "kartEkle", kart: "f-onsiparis", ust: "E-1" },
      { tur: "kartEkle", kart: "f-bildirim", ust: "E-1" },
      { tur: "kartEkle", kart: "s-tek-menu", ust: "F-2" },
      { tur: "kartEkle", kart: "s-teslim", ust: "F-2" },
      { tur: "kartEkle", kart: "s-iptal", ust: "F-2" },
      { tur: "kartEkle", kart: "s-hazir-bildirim", ust: "F-3" },
      {
        tur: "guncelle", id: "ST-4", alanlar: {
          puan: 5,
          kriterler: [
            k("öğrencinin bakiyesi 60 TL", "45 TL'lik öğle menüsünü önceden sipariş ettiğinde", "bakiyesi 15 TL olur ve sipariş numarası verilir"),
            k("öğrencinin bakiyesi 30 TL", "45 TL'lik menüyü sipariş etmek istediğinde", "sipariş alınmaz ve \"15 TL eksik\" mesajı görünür", true),
          ],
        },
      },
      {
        tur: "guncelle", id: "ST-5", alanlar: {
          puan: 3,
          kriterler: [
            k("öğrencinin hazır bir siparişi var", "teslim noktasında sıra numarasını söylediğinde", "yemeği kasaya uğramadan teslim edilir"),
            k("öğrencinin siparişi henüz hazır değil", "teslim noktasına geldiğinde", "kalan tahmini süre söylenir", true),
          ],
        },
      },
      {
        tur: "guncelle", id: "ST-6", alanlar: {
          puan: 3,
          kriterler: [
            k("öğrencinin 12.00 için 45 TL'lik siparişi var", "11.00'de iptal ettiğinde", "sipariş iptal edilir ve 45 TL bakiyesine geri yüklenir"),
            k("öğrencinin 12.00 için siparişi var", "11.45'te iptal etmek istediğinde", "iptal yapılmaz ve \"iptal süresi geçti\" mesajı görünür", true),
          ],
        },
      },
      {
        tur: "guncelle", id: "ST-7", alanlar: {
          kriterler: [k("öğrencinin siparişi mutfakta hazırlanıyor", "sipariş hazır olduğunda", "öğrencinin telefonuna sipariş numarasıyla bildirim gelir")],
        },
      },
      { tur: "sor", id: "ST-7", kisi: "deniz" },
      { tur: "guncelle", id: "ST-7", alanlar: { puan: 5 } },
      {
        tur: "guncelle", id: "ST-7", alanlar: {
          kriterler: [
            k("öğrencinin siparişi mutfakta hazırlanıyor", "sipariş hazır olduğunda", "öğrencinin telefonuna sipariş numarasıyla bildirim gelir"),
            k("öğrencinin telefonunda bildirim izni kapalı", "siparişi hazır olduğunda", "sipariş numarası girişteki hazır listesinde görünür", true),
          ],
        },
      },
      { tur: "onayaGonder" },
    ],
  },
];

const icerik: AtolyeIcerigi = { senaryo: SENARYO, gorevler: GOREVLER };
export default icerik;
