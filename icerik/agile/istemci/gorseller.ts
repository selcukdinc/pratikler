// Agile ve Scrum derslerinin şekilleri. Hepsi etkileşimlidir (./etkilesim); buradaki SVG
// yalnızca yönetim listesinde ve ekran okuyucu açıklamasıyla gösterilen özettir.
import type { Gorsel } from "../../../src/gorseller/tip";

const ozet = (yazi: string) =>
  `<rect x="1" y="1" width="398" height="78" rx="8" fill="none" stroke="currentColor"/><text x="200" y="45" text-anchor="middle" font-size="14" fill="currentColor">${yazi}</text>`;
const g = (kod: string, baslik: string, aciklama: string, yazi: string, etkilesim: string): Gorsel => ({ kod, baslik, aciklama, en: 400, boy: 80, icerik: ozet(yazi), etkilesim });

export const GORSELLER: Gorsel[] = [
  g("G-S1-01", "Waterfall ve Sprint'lerle değer eğrisi", "On iki aylık bir proje bir kez sonda ya da iki haftalık Sprint'lerle en değerliden başlayarak teslim edilir; gereksinim değişikliğinin ayı ve payı seçilince iki eğri, ilk değerin geldiği ay ve boşa giden emek karşılaştırılır.", "Değer ↑ · zaman →", "degerEgrisi"),
  g("G-S1-02", "Cynefin sınıflandırıcı", "On durum Cynefin'in açık, karmaşık, kompleks ve kaotik alanlarından birine yerleştirilir; her seçimin gerekçesi gösterilir.", "Açık · Karmaşık · Kompleks · Kaotik", "cynefin"),
  g("G-S2-01", "Manifesto değerleri", "Squad'dan sekiz sahne Manifesto'nun dört değerinden biriyle eşleştirilir.", "Bireyler · Çalışan yazılım · İş birliği · Değişim", "degerTerazisi"),
  g("G-S2-02", "12 ilke, dört grup", "On iki sahne ilkelerin dört grubundan biriyle eşleştirilir: teslim, insanlar, ilerleme, takım.", "1-3 · 4-6 · 7-10 · 11-12", "ilkeEslestir"),
  g("G-S2-03", "Agile mı, yanılgı mı?", "Sekiz yaygın cümle Manifesto'yla uyumlu ya da yaygın yanılgı diye ayrılır.", "Uyumlu · Yanılgı", "agileMi"),
  g("G-S3-01", "Parti büyüklüğü oyunu", "Dört istasyonlu bir hatta 20 parça 20'lik, 10'luk, 5'lik partilerle ya da tek parça akışıyla geçirilir; dakika dakika ilerleyiş, ilk teslim ve toplam süre gösterilir.", "20'lik parti: 80 dk · tek parça: 23 dk", "partiOyunu"),
  g("G-S3-02", "Little yasası hesaplayıcı", "WIP ve haftalık verim değiştirilince ortalama çevrim süresi ve WIP yarıya inerse yeni süre hesaplanır.", "WIP = verim × çevrim süresi", "littleHesap"),
  g("G-S3-03", "Darboğaz şeridi", "Dört adımlı bir akışta günde gelen iş ve adım kapasiteleri değiştirilir; 20 gün sonra her adımın önündeki kuyruk ve günlük verim gösterilir.", "Analiz → Geliştirme → Test → Yayın", "darbogaz"),
  g("G-S3-04", "İsraf avı", "Squad'dan sekiz durum yarım iş, fazla özellik, devir teslim, bağlam değiştirme, bekleme ya da hata olarak sınıflandırılır.", "Yarım iş · Fazla özellik · Bekleme…", "israfAvi"),
  g("G-S4-01", "Sütun dedektifi", "Yedi sahnede empirizmin hangi sütununun (şeffaflık, denetim, uyarlama) çöktüğü bulunur.", "Şeffaflık · Denetim · Uyarlama", "sutunDedektifi"),
  g("G-S4-02", "Rehber'de var mı?", "On iki kavram Scrum Rehberi 2020'nin parçası ya da Rehber dışı yaygın uygulama diye ayrılır.", "Sprint Goal ✓ · Story point ✗", "rehberdeVarMi"),
  g("G-S4-03", "Terim haritası", "Organizasyon şemalarında görülen on iki terim Scrum Rehberi, Spotify modeli, SAFe ve araçlar ya da şirket rolü diye kaynağına göre ayrılır.", "Squad · Chapter · Epic · Tech Lead", "terimHaritasi"),
];
