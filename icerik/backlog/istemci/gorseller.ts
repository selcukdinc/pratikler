// Backlog derslerinin şekilleri. Hepsi etkileşimlidir (./etkilesim); buradaki SVG
// yalnızca yönetim listesinde ve ekran okuyucu açıklamasıyla gösterilen özettir.
import type { Gorsel } from "../../../src/gorseller/tip";

const ozet = (yazi: string) =>
  `<rect x="1" y="1" width="398" height="78" rx="8" fill="none" stroke="currentColor"/><text x="200" y="45" text-anchor="middle" font-size="14" fill="currentColor">${yazi}</text>`;
const g = (kod: string, baslik: string, aciklama: string, yazi: string, etkilesim: string): Gorsel => ({ kod, baslik, aciklama, en: 400, boy: 80, icerik: ozet(yazi), etkilesim });

export const GORSELLER: Gorsel[] = [
  g("G-S1-01", "Backlog buzdağı", "Squad'ın sekiz backlog öğesi ayrıntı düzeyine ve sırasına göre Sprint'e hazır, yakında ve uzak katmanlarına yerleştirilir.", "İnce · Kaba · Çok kaba", "buzdagi"),
  g("G-S1-02", "Backlog sağlık kontrolü", "Sekiz durum sağlıklı ya da DEEP'e göre bir sorun (uygun ayrıntıda değil, tahmin yok, sırasız ya da kopya, mezarlık) diye ayrılır.", "Detailed · Estimated · Emergent · Prioritized", "saglik"),
  g("G-S2-01", "Hiyerarşi ağacı", "On öğe theme, epic, feature, story ya da task seviyesine yerleştirilir.", "Theme → Epic → Feature → Story → Task", "hiyerarsi"),
  g("G-S2-02", "Araç çevirmeni", "Aynı beş seviyenin SAFe, Azure Boards, Jira, ClickUp ve Scrum Rehberi'ndeki karşılıkları yan yana gösterilir.", "Epic · Feature · User Story · Sub-task", "aracCevirmeni"),
  g("G-S3-01", "Etki haritası", "Sekiz kart etki haritasının neden, kim, nasıl ve ne seviyelerine yerleştirilir.", "Neden → Kim → Nasıl → Ne", "etkiHaritasi"),
  g("G-S3-02", "Story map ve sürüm dilimi", "Öğrencinin beş adımlı yolculuğunun altındaki kartlardan 16 puanlık ilk sürüm dilimi seçilir; yolculuk yarım kalırsa ya da kapasite aşılırsa uyarılır.", "Menü · Seç · Öde · Teslim al · Değerlendir", "storyMap"),
  g("G-S4-01", "Story kurucu", "Rol, istek ve fayda seçilerek ya da yazılarak story kurulur; genel rol, birden çok istek, ölçülemeyen kelime, çözüm adımı ve eksik fayda uyarılır.", "Bir ... olarak ... istiyorum, böylece ...", "storyKurucu"),
  g("G-S4-02", "İyi mi, kötü mü?", "Sekiz story iyi ya da en belirgin sorununa göre (rol, fayda, birden çok istek, çözüm dikte etme) ayrılır.", "İyi · Rol · Fayda · Birden çok · Dikte", "iyiMiKotuMu"),
  g("G-S5-01", "INVEST dedektifi", "Dokuz story'nin her birinde INVEST'in en çok bozulan harfi bulunur.", "I · N · V · E · S · T", "investDedektifi"),
  g("G-S6-01", "Gherkin kurucu", "Given, When ve Then yazılır ya da hazır örnek seçilir; eksik sonuç, birden çok eylem, ölçülemeyen kelime ve arayüz adımları uyarılır.", "Verilen · Olduğunda · O zaman", "gherkinKurucu"),
  g("G-S6-02", "Example Mapping masası", "Yemek ayırtma story'si için yedi kart kural, örnek ya da soru diye ayrılır.", "Kural · Örnek · Soru", "exampleMapping"),
  g("G-S7-01", "Pasta dilimleyici", "Aynı 24 puanlık feature katmanlara ya da değer dilimlerine bölünür; her Sprint sonunda öğrencinin ne kullanabildiği karşılaştırılır.", "Yatay: 3. Sprint · Dikey: 1. Sprint", "pastaDilimleyici"),
  g("G-S7-02", "SPIDR bölücü", "Sekiz büyük story için SPIDR'ın en doğal bölme yolu seçilir.", "Spike · Path · Interface · Data · Rules", "spidrBolucu"),
  g("G-S8-01", "Nereye yazılır?", "Dokuz madde kabul kriteri, Definition of Done, ayrı backlog öğesi ya da task diye ayrılır.", "Kabul kriteri · DoD · Öğe · Task", "nereyeYazilir"),
];
