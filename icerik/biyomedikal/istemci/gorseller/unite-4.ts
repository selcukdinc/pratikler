// 4. ünite şekilleri: tıbbi görüntüleme yöntemlerinin karşılaştırması, BT'nin
// çalışma düzeni, PET ve CT görüntülerinin birleştirilmesi.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { cizgi, kutu, ok, satirlar, yazi, yol } from "./ortak";

// ---- G-H4-01: Yöntemlerin karşılaştırması ----
function karsilastirma(): string {
  const sutun = [
    { ad: "Yöntem", en: 130 },
    { ad: "Kullandığı", en: 190 },
    { ad: "Gösterdiği", en: 130 },
    { ad: "İyonlaştırıcı radyasyon", en: 160 },
  ];
  const satir: [string, string, string, string][] = [
    ["Röntgen", "X ışını", "yapı (2B)", "var"],
    ["BT", "X ışını + bilgisayar", "kesit, 3B yapı", "var (röntgenden fazla)"],
    ["MR", "mıknatıs + radyo dalgası", "yumuşak doku", "yok"],
    ["Ultrason", "yüksek frekanslı ses", "organ, gebelik", "yok"],
    ["Nükleer tıp", "radyofarmasötik", "işlev, metabolizma", "var (düşük doz)"],
    ["Histopatoloji", "mikroskop, H&E boya", "doku ve hücre", "yok"],
  ];
  const x0 = 10;
  const h = 34;
  let s = "";
  let x = x0;
  sutun.forEach((c) => {
    s += kutu(x, 10, c.en, h, "g-dolu") + yazi(x + c.en / 2, 10 + h / 2, c.ad, "g-mini g-kalin");
    x += c.en;
  });
  satir.forEach((r, i) => {
    let xx = x0;
    const y = 10 + (i + 1) * h;
    r.forEach((v, j) => {
      const cls = j === 3 ? (v.startsWith("yok") ? "g-ton1" : "g-ton2") : "g-kutu";
      s += kutu(xx, y, sutun[j]!.en, h, cls) + yazi(xx + sutun[j]!.en / 2, y + h / 2, v, j === 0 ? "g-kucuk g-kalin" : "g-mini");
      xx += sutun[j]!.en;
    });
  });
  return s;
}

// ---- G-H4-02: BT'nin çalışma düzeni ----
function btDuzeni(): string {
  const cx = 200;
  const cy = 170;
  let s = "";
  s += `<circle cx="${cx}" cy="${cy}" r="140" class="g-kutu"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="100" class="g-cerceve"/>`;
  // Hasta kesiti
  s += yol(`M${cx - 70},${cy} C${cx - 70},${cy - 45} ${cx + 70},${cy - 45} ${cx + 70},${cy} C${cx + 70},${cy + 40} ${cx - 70},${cy + 40} ${cx - 70},${cy} Z`, "g-bolge-b");
  s += `<circle cx="${cx}" cy="${cy + 18}" r="10" class="g-ton2"/>`;
  s += yazi(cx, cy - 8, "hasta", "g-mini g-soluk");
  // Üç açıdan ışın demetleri
  for (const aci of [-90, 30, 150]) {
    const r = (aci * Math.PI) / 180;
    const kx = cx + 122 * Math.cos(r);
    const ky = cy + 122 * Math.sin(r);
    const dx = cx - 122 * Math.cos(r);
    const dy = cy - 122 * Math.sin(r);
    const px = -Math.sin(r) * 40;
    const py = Math.cos(r) * 40;
    s += yol(`M${kx.toFixed(1)},${ky.toFixed(1)} L${(dx + px).toFixed(1)},${(dy + py).toFixed(1)} L${(dx - px).toFixed(1)},${(dy - py).toFixed(1)} Z`, "g-dolgu-a");
    s += `<circle cx="${kx.toFixed(1)}" cy="${ky.toFixed(1)}" r="9" class="g-uyari"/>`;
    s += cizgi([[dx + px, dy + py], [dx - px, dy - py]], "g-cizgi g-renk-c-cizgi");
  }
  s += yazi(cx, 22, "X ışını kaynağı", "g-mini g-kalin");
  s += yazi(cx, 330, "karşıdaki dedektör", "g-mini g-kalin g-renk-c");
  s += yol(`M${cx + 150},${cy - 60} A160,160 0 0 1 ${cx + 150},${cy + 60}`, "g-cizgi g-renk-a-cizgi");
  s += yazi(cx + 175, cy, "döner", "g-mini g-renk-a", "start");
  // Sağ: işlem zinciri
  const kx = 430;
  s += kutu(kx, 60, 220, 44, "g-kutu") + satirlar(kx + 110, 74, ["farklı açılardan", "çok sayıda X ışını görüntüsü"], "g-mini", "middle", 15);
  s += ok([[kx + 110, 104], [kx + 110, 130]]);
  s += kutu(kx, 130, 220, 44, "g-dolu") + satirlar(kx + 110, 144, ["bilgisayar", "görüntüleri birleştirir"], "g-mini", "middle", 15);
  s += ok([[kx + 110, 174], [kx + 110, 200]]);
  s += kutu(kx, 200, 220, 44, "g-kutu") + satirlar(kx + 110, 214, ["ince kesitler (dilimler)", "ve 3B görüntü"], "g-mini", "middle", 15);
  s += satirlar(kx, 275, ["Süre: saniyeler ile birkaç dakika", "Kontrast: iyot ya da baryum", "Radyasyon: röntgenden fazla"], "g-mini g-soluk", "start", 16);
  return s;
}

// ---- G-H4-03: PET + CT = PET-CT ----
function petCt(): string {
  const govde = (x: number) => yol(`M${x + 40},40 C${x + 10},60 ${x + 10},220 ${x + 40},250 L${x + 140},250 C${x + 170},220 ${x + 170},60 ${x + 140},40 Z`, "g-kutu");
  const organlar = (x: number) =>
    yol(`M${x + 55},80 C${x + 45},120 ${x + 55},160 ${x + 80},160 L${x + 80},80 Z`, "g-bolge-a") +
    yol(`M${x + 125},80 C${x + 135},120 ${x + 125},160 ${x + 100},160 L${x + 100},80 Z`, "g-bolge-a") +
    `<rect x="${x + 82}" y="60" width="16" height="180" rx="4" class="g-sabit"/>`;
  const sicak = (x: number) => `<circle cx="${x + 115}" cy="118" r="11" class="g-hata"/><circle cx="${x + 90}" cy="55" r="9" class="g-uyari"/>`;
  let s = "";
  s += govde(20) + sicak(20) + yazi(110, 275, "PET: metabolizma (işlev)", "g-mini g-kalin");
  s += yazi(220, 145, "+", "g-kalin");
  s += govde(240) + organlar(240) + yazi(330, 275, "CT: anatomi (yapı)", "g-mini g-kalin");
  s += yazi(440, 145, "=", "g-kalin");
  s += govde(460) + organlar(460) + sicak(460) + yazi(550, 275, "PET-CT: etkinlik nerede?", "g-mini g-kalin");
  s += satirlar(20, 300, ["FDG radyoaktif bir glukoz türevidir; metabolizması hızlı kanser hücreleri onu daha çok tutar ve parlak görünür.", "Beyin glukozu yoğun kullandığı için normalde de parlak çıkar."], "g-mini g-soluk", "start", 15);
  return s;
}

export const UNITE_4_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H4-01",
    baslik: "Tıbbi görüntüleme yöntemlerinin karşılaştırması",
    aciklama: "Röntgen ve BT X ışını kullanır, BT'nin radyasyonu röntgenden fazladır. MR mıknatıs ve radyo dalgası, ultrason ses dalgası kullanır; ikisinde de iyonlaştırıcı radyasyon yoktur. Nükleer tıp radyofarmasötiklerle işlevi gösterir. Histopatoloji mikroskopla doku ve hücreyi inceler.",
    en: 630, boy: 260, icerik: karsilastirma(),
  },
  {
    kod: "G-H4-02",
    baslik: "Bilgisayarlı tomografinin çalışma düzeni",
    aciklama: "Hastanın etrafında dönen X ışını kaynağı farklı açılardan ışın gönderir, karşıdaki dedektörler zayıflamayı ölçer. Bilgisayar bu çok sayıda görüntüyü birleştirerek ince kesitler ve 3B görüntü oluşturur.",
    en: 670, boy: 340, icerik: btDuzeni(),
  },
  {
    kod: "G-H4-03",
    baslik: "PET ve CT görüntülerinin birleştirilmesi",
    aciklama: "PET, FDG'yi yoğun tutan metabolik olarak aktif bölgeleri parlak noktalar olarak gösterir ama anatomiyi göstermez. CT anatomiyi gösterir. Birleşik PET-CT görüntüsü etkinliğin vücutta tam olarak nerede olduğunu gösterir.",
    en: 660, boy: 335, icerik: petCt(),
  },
];
