// Kitapta geçen girişimcilik terimleri: Türkçe, İngilizce ve kısa anlam.
// Terimler sayfası bu listeden çizilir. satirIci işaretli terimlerin
// İngilizcesi ders ve soru metinlerinde parantez içinde de gösterilir; soru
// metinleri kitaptaki gibi kalsın diye şu an hiçbir terim işaretli değil.

export interface Terim {
  tr: string;
  en: string;
  // Büyük harfle yazılan mantık işlemleri (VE, VEYA) yalnızca büyük harfle eşleşir;
  // küçük harfli "ve" bağlacı terim değildir.
  buyuk?: boolean;
  aciklama?: string;
  satirIci?: boolean;
}

export const TERIMLER: Terim[] = [
  { tr: "girişimci", en: "entrepreneur", aciklama: "Fırsatı görüp kaynakları bir araya getirerek riski üstlenen ve değer yaratan kişi" },
  { tr: "girişim", en: "venture / startup", aciklama: "Girişimcinin hayata geçirdiği, kâr ya da sosyal fayda amaçlı iş" },
  { tr: "paydaş", en: "stakeholder", aciklama: "Hissedar, çalışan, tedarikçi, dağıtıcı, devlet gibi işletmeyle iş birliği yapan kişi ve kurumlar" },
  { tr: "KOBİ", en: "SME", aciklama: "Küçük ve orta büyüklükteki işletme; çalışan sayısı ve ciro/bilançoya göre tanımlanır" },
  { tr: "ölüm vadisi", en: "valley of death", aciklama: "İlk heyecandan sonra gelirler giderleri karşılayana kadar nakdin eridiği dönem" },
  { tr: "fırsat", en: "opportunity", aciklama: "Pazar şartları, zaman ve kaynakların uygun hale gelmesi" },
  { tr: "inovasyon", en: "innovation", aciklama: "Yeni ya da önemli ölçüde iyileştirilmiş ürün, süreç veya iş modeli" },
  { tr: "müşteri keşfi", en: "customer discovery", aciklama: "Müşterinin en çok acısını hissettiği problemi görüşmelerle bulma süreci" },
  { tr: "tasarımsal düşünme", en: "design thinking", aciklama: "Kullanıcıyı anlayıp hızlı prototip ve testle çözüm geliştirme yaklaşımı" },
  { tr: "yapılacak işler", en: "jobs to be done", aciklama: "Araca değil müşterinin yapmak istediği işe odaklanan yöntem" },
  { tr: "yapılabilirlik analizi", en: "feasibility analysis", aciklama: "Fikrin ekip, finans ve pazar açısından hayata geçirilebilirliğini sınama" },
  { tr: "pazarlama körlüğü", en: "marketing myopia", aciklama: "Ürüne odaklanıp müşterinin satın aldığı faydayı görememek (Levitt)" },
  { tr: "başabaş noktası", en: "break-even point", aciklama: "Gelirlerin giderlere eşit olduğu nokta" },
  { tr: "geri dönüş süresi", en: "payback period", aciklama: "Net kârın ilk yatırımı karşılamasına kadar geçen süre" },
  { tr: "değerleme", en: "valuation", aciklama: "Girişimin parasal değerinin belirlenmesi" },
  { tr: "toplam mevcut pazar", en: "total addressable market (TAM)", aciklama: "Ürünün hitap edebileceği tüm potansiyel müşteriler" },
  { tr: "erişilebilir mevcut pazar", en: "serviceable available market (SAM)", aciklama: "Toplam pazarın girişimin ulaşabileceği kısmı" },
  { tr: "ilk hedef pazar", en: "serviceable obtainable market (SOM)", aciklama: "Girişimin ilk olarak hedeflediği küçük dilim" },
  { tr: "erken benimseyenler", en: "early adopters", aciklama: "Sürünün önünde gitmek isteyen vizyoner müşteriler" },
  { tr: "erken çoğunluk", en: "early majority", aciklama: "Sürüyü takip eden pragmatist müşteriler" },
  { tr: "uçurum", en: "chasm", aciklama: "Erken benimseyenlerden erken çoğunluğa geçişteki boşluk (Moore)" },
  { tr: "gizli ihtiyaç", en: "latent need", aciklama: "Kimsenin farkında olmadığı, keşfedilince rekabeti anlamsızlaştıran ihtiyaç" },
  { tr: "heves", en: "fad", aciklama: "Talebi birden yükselip birden düşen geçici ürün" },
  { tr: "megatrend", en: "megatrend", aciklama: "Tüm dünyayı etkileyen, toplumsal değişime yol açan eğilim" },
  { tr: "iş modeli", en: "business model", aciklama: "Girişimin nasıl değer yaratıp sunduğunu ve gelir elde ettiğini anlatan model" },
  { tr: "Kanvas iş modeli", en: "business model canvas", aciklama: "Osterwalder'in iş fikrini 9 yapı taşına ayıran şablonu" },
  { tr: "müşteri kesiti", en: "customer segment", aciklama: "Kendi içinde benzer, diğerlerinden farklı müşteri grubu" },
  { tr: "değer önerisi", en: "value proposition", aciklama: "Müşterinin hangi acısını dindirip hangi kazanımı sağladığınız" },
  { tr: "ürün/pazar uyumu", en: "product/market fit", aciklama: "Değer önerisinin müşteri kesitinin ihtiyacıyla örtüşmesi" },
  { tr: "müşteri elde etme maliyeti", en: "customer acquisition cost (CAC)", aciklama: "Bir müşteriyi kazanmak için harcanan ortalama tutar" },
  { tr: "ömür boyu değer", en: "lifetime value (LTV)", aciklama: "Birim başına ücret × müşterinin sizinle kalma süresi" },
  { tr: "bedelsiz ve primli", en: "freemium", aciklama: "Temel sürüm ücretsiz, gelişmiş sürüm ücretli gelir modeli" },
  { tr: "hizmet olarak yazılım", en: "software as a service (SaaS)", aciklama: "Yazılımı bulut üzerinden abonelik ya da kullanım bedeliyle sunma" },
  { tr: "yem ve olta", en: "bait and hook", aciklama: "Ana ürünü ucuza satıp tamamlayıcı üründen kazanma (tıraş bıçağı modeli)" },
  { tr: "pazar yeri", en: "marketplace", aciklama: "Alıcı ve satıcıyı buluşturup genellikle komisyon alan platform" },
  { tr: "beş faktör analizi", en: "five forces analysis", aciklama: "Porter'ın müşteri, rakip, tedarikçi, ikame ve yeni girenlere bakan endüstri analizi" },
  { tr: "ikame ürün", en: "substitute product", aciklama: "Aynı ihtiyacı farklı yoldan karşılayan ürün" },
  { tr: "ölçek ekonomisi", en: "economies of scale", aciklama: "Üretim arttıkça birim maliyetin düşmesi" },
  { tr: "tacir", en: "merchant", aciklama: "Bir ticari işletmeyi kısmen de olsa kendi adına işleten kişi" },
  { tr: "esnaf", en: "tradesman", aciklama: "Sermayesiyle birlikte bedenî çalışmasına dayanan, kazancı tacir sınırının altında kalan kişi" },
  { tr: "tüzel kişilik", en: "legal personality", aciklama: "Şirketin ortaklarından ayrı hak ve borç sahibi olabilmesi; tescille kazanılır" },
  { tr: "basiretli tacir", en: "prudent merchant", aciklama: "İşlerinde ölçülü, dikkatli ve öngörülü davranan tacir" },
  { tr: "etik", en: "ethics", aciklama: "Ahlaki yargıları inceleyen felsefe dalı" },
  { tr: "ahlak", en: "morality", aciklama: "Gündelik yaşamı düzenleyen yazılı olmayan kurallar" },
  { tr: "sosyal sorumluluk", en: "social responsibility", aciklama: "Girişimin topluma karşı yükümlülükleri" },
  { tr: "pazarlama karması", en: "marketing mix (4P)", aciklama: "Ürün, fiyat, dağıtım ve tutundurma" },
  { tr: "talep", en: "demand", aciklama: "Satın alma gücüyle desteklenen istek" },
];

export type Parca = string | { metin: string; en: string };

const kacir = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const HARF = "a-zçğıöşüâîû";

// Uzun terimler önce denenir ("ÖZEL VEYA", "VEYA"dan önce). Küçük harfli terimler
// cümle başında büyük harfle de eşleşir ve Türkçe ekleri kapsar (sentezlenir,
// kapısı). Büyük harfli terimler kesme işaretli ekleri kapsar (VE'leri).
// Hemen ardından "(" gelen kullanım zaten açıklanmış sayılır.
function desen(liste: Terim[]): RegExp | null {
  if (!liste.length) return null;
  return new RegExp(
    liste
      .map((t) => {
        if (t.buyuk) return `(${kacir(t.tr)}(?:'[${HARF}]+)?)`;
        const ilk = t.tr[0]!;
        return `([${ilk}${ilk.toLocaleUpperCase("tr")}]${kacir(t.tr.slice(1))}[${HARF}]*)`;
      })
      .map((g) => `(?<![\\p{L}\\d_])${g}(?![\\p{L}\\d_])(?!\\s*\\()`)
      .join("|"),
    "gu",
  );
}

const onbellek = new Map<Terim[], { sirali: Terim[]; re: RegExp | null }>();
const SATIR_ICI = TERIMLER.filter((t) => t.satirIci);

export function terimleriAyir(metin: string, liste: Terim[] = SATIR_ICI): Parca[] {
  let d = onbellek.get(liste);
  if (!d) {
    const sirali = [...liste].sort((a, b) => b.tr.length - a.tr.length);
    d = { sirali, re: desen(sirali) };
    onbellek.set(liste, d);
  }
  if (!d.re) return [metin];
  const out: Parca[] = [];
  let son = 0;
  for (const m of metin.matchAll(d.re)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const terim = d.sirali[i]!;
    if (m.index! > son) out.push(metin.slice(son, m.index));
    out.push({ metin: m[0], en: terim.en });
    son = m.index! + m[0].length;
  }
  if (son < metin.length) out.push(metin.slice(son));
  return out;
}
