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
];
