// Soru şekillerini çizmek için küçük SVG yardımcıları. Renkler CSS sınıflarıyla
// verilir (styles.css: .sk-*), böylece şekiller açık ve koyu temaya uyar.
// Açılar matematik yönünde derecedir: +x ekseninden saat yönünün tersine.
// SVG'de y aşağı doğru arttığı için sin terimleri eksi işaretlidir.

export type Renk = "mavi" | "kirmizi" | "yesil" | "turuncu" | "siyah";

const s = (n: number) => String(Math.round(n * 10) / 10);
const rad = (d: number) => (d * Math.PI) / 180;
const kacis = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// (x, y) noktasından açı yönünde uzunluk kadar giden noktanın koordinatları
export function uc(x: number, y: number, uzunluk: number, aci: number): [number, number] {
  return [x + uzunluk * Math.cos(rad(aci)), y - uzunluk * Math.sin(rad(aci))];
}

export function cizgi(x1: number, y1: number, x2: number, y2: number, sinif = "sk-c"): string {
  return `<line x1="${s(x1)}" y1="${s(y1)}" x2="${s(x2)}" y2="${s(y2)}" class="${sinif}"/>`;
}

export function kesik(x1: number, y1: number, x2: number, y2: number): string {
  return cizgi(x1, y1, x2, y2, "sk-kesik");
}

export function cokgen(noktalar: [number, number][], sinif: string): string {
  return `<polygon points="${noktalar.map(([x, y]) => `${s(x)},${s(y)}`).join(" ")}" class="${sinif}"/>`;
}

export function yol(d: string, sinif = "sk-c"): string {
  return `<path d="${d}" class="${sinif}"/>`;
}

// Ok: gövde çizgisi ve üçgen uç
export function ok(x1: number, y1: number, x2: number, y2: number, renk: Renk = "mavi", bas = 11): string {
  const aci = Math.atan2(y2 - y1, x2 - x1);
  const bx = x2 - bas * Math.cos(aci);
  const by = y2 - bas * Math.sin(aci);
  const g = bas * 0.45;
  const govde = renk === "siyah" ? "sk-c" : `sk-${renk}`;
  return (
    cizgi(x1, y1, bx, by, govde) +
    cokgen([[x2, y2], [bx + g * Math.sin(aci), by - g * Math.cos(aci)], [bx - g * Math.sin(aci), by + g * Math.cos(aci)]], `sk-${renk}-d`)
  );
}

// Açıyla verilen ok
export function okAci(x: number, y: number, uzunluk: number, aci: number, renk: Renk = "mavi"): string {
  const [x2, y2] = uc(x, y, uzunluk, aci);
  return ok(x, y, x2, y2, renk);
}

export function yazi(x: number, y: number, metin: string, o: { kucuk?: boolean; hiza?: "start" | "middle" | "end"; kalin?: boolean } = {}): string {
  const sinif = o.kucuk ? "sk-y-k" : "sk-y";
  const kalin = o.kalin ? ' font-weight="700"' : "";
  return `<text x="${s(x)}" y="${s(y)}" class="${sinif}" text-anchor="${o.hiza ?? "middle"}" dominant-baseline="middle"${kalin}>${kacis(metin)}</text>`;
}

// Açı yayı: merkez, yarıçap, başlangıç ve bitiş açısı (saat yönünün tersine)
export function yay(cx: number, cy: number, r: number, a1: number, a2: number): string {
  const [x1, y1] = uc(cx, cy, r, a1);
  const [x2, y2] = uc(cx, cy, r, a2);
  const buyuk = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const yon = a2 > a1 ? 0 : 1;
  return `<path d="M${s(x1)} ${s(y1)} A${s(r)} ${s(r)} 0 ${buyuk} ${yon} ${s(x2)} ${s(y2)}" class="sk-yay"/>`;
}

// Açı yayı ve ortasına yakın etiket
export function aciYayi(cx: number, cy: number, r: number, a1: number, a2: number, etiket: string, uzak = 16): string {
  const [x, y] = uc(cx, cy, r + uzak, (a1 + a2) / 2);
  return yay(cx, cy, r, a1, a2) + yazi(x, y, etiket, { kucuk: true });
}

// Dikdörtgen blok; aci verilirse sol alt köşesi etrafında döner (eğik düzlemdeki blok)
export function kutu(x: number, y: number, en: number, boy: number, o: { sinif?: string; aci?: number; etiket?: string } = {}): string {
  const sinif = o.sinif ?? "sk-kutu";
  const don = o.aci ? ` transform="rotate(${s(-o.aci)} ${s(x)} ${s(y + boy)})"` : "";
  const et = o.etiket
    ? `<text x="${s(x + en / 2)}" y="${s(y + boy / 2)}" class="sk-y" text-anchor="middle" dominant-baseline="middle"${don}>${kacis(o.etiket)}</text>`
    : "";
  return `<rect x="${s(x)}" y="${s(y)}" width="${s(en)}" height="${s(boy)}" rx="2" class="${sinif}"${don}/>` + et;
}

// Yatay zemin şeridi
export function zemin(x1: number, x2: number, y: number, kalinlik = 8): string {
  return `<rect x="${s(x1)}" y="${s(y)}" width="${s(x2 - x1)}" height="${s(kalinlik)}" class="sk-zemin"/>`;
}

// Düşey duvar şeridi
export function duvar(x: number, y1: number, y2: number, kalinlik = 10): string {
  return `<rect x="${s(x)}" y="${s(y1)}" width="${s(kalinlik)}" height="${s(y2 - y1)}" class="sk-zemin"/>`;
}

export function daire(cx: number, cy: number, r: number, sinif = "sk-c"): string {
  return `<circle cx="${s(cx)}" cy="${s(cy)}" r="${s(r)}" class="${sinif}"/>`;
}

// Makara: çember ve merkez noktası
export function makara(cx: number, cy: number, r = 14): string {
  return daire(cx, cy, r, "sk-kutu2") + daire(cx, cy, 2.5, "sk-siyah-d");
}

// Eksen takımı; uçlarında x ve y adları
export function eksenler(cx: number, cy: number, sol: number, sag: number, ust: number, alt: number, adlar: [string, string] = ["x", "y"]): string {
  return (
    ok(cx - sol, cy, cx + sag, cy, "siyah", 8) +
    ok(cx, cy + alt, cx, cy - ust, "siyah", 8) +
    yazi(cx + sag + 10, cy, adlar[0], { kucuk: true }) +
    yazi(cx, cy - ust - 10, adlar[1], { kucuk: true })
  );
}

// Eğik düzlem: sol alt köşe (x, y), taban uzunluğu ve eğim açısı. Yükselen kenar sağda.
// nokta(t): eğik yüzey üzerinde, alt uçtan t oranında yukarıdaki nokta
export function egikDuzlem(x: number, y: number, taban: number, aci: number) {
  const yukseklik = taban * Math.tan(rad(aci));
  const sekil = cokgen([[x, y], [x + taban, y], [x + taban, y - yukseklik]], "sk-zemin");
  const nokta = (t: number): [number, number] => [x + taban * t, y - yukseklik * t];
  return { sekil, nokta, yukseklik };
}

// Eğik düzlem üzerindeki blok: sol alt köşesi yüzeydeki noktaya oturur
export function egikBlok(nokta: [number, number], aci: number, en: number, boy: number, etiket?: string, sinif?: string): string {
  const [px, py] = nokta;
  return kutu(px, py - boy, en, boy, { aci, etiket, sinif });
}

// Bir noktadan geçen ip (ince çizgi)
export function ip(x1: number, y1: number, x2: number, y2: number): string {
  return cizgi(x1, y1, x2, y2, "sk-c sk-ince");
}

// Basit insan simgesi (çöp adam): ayakları (x, y)'de
export function insan(x: number, y: number, boy = 40): string {
  const b = boy;
  return (
    daire(x, y - b + 5, 5) +
    cizgi(x, y - b + 10, x, y - b * 0.42) +
    cizgi(x, y - b * 0.42, x - 7, y) +
    cizgi(x, y - b * 0.42, x + 7, y) +
    cizgi(x - 9, y - b * 0.7, x + 9, y - b * 0.7)
  );
}

// Bina: alt sol köşe ve boyutlar; pencereler soluk
export function bina(x: number, y: number, en: number, boy: number): string {
  let p = `<rect x="${s(x)}" y="${s(y - boy)}" width="${s(en)}" height="${s(boy)}" class="sk-zemin"/>`;
  const sutun = Math.max(1, Math.floor(en / 22));
  const satir = Math.max(1, Math.floor(boy / 26));
  for (let i = 0; i < satir; i++) {
    for (let j = 0; j < sutun; j++) {
      const px = x + 6 + j * ((en - 12) / sutun);
      const py = y - boy + 8 + i * ((boy - 12) / satir);
      p += `<rect x="${s(px)}" y="${s(py)}" width="${s((en - 12) / sutun - 6)}" height="${s((boy - 12) / satir - 9)}" class="sk-kutu2"/>`;
    }
  }
  return p;
}

// Ölçü çizgisi: iki uçta kısa çizgi, ortada etiket
export function olcu(x1: number, y1: number, x2: number, y2: number, etiket: string, kaydir: [number, number] = [0, 0]): string {
  const aci = Math.atan2(y2 - y1, x2 - x1);
  const nx = -Math.sin(aci) * 5;
  const ny = Math.cos(aci) * 5;
  return (
    cizgi(x1, y1, x2, y2, "sk-c sk-ince") +
    cizgi(x1 - nx, y1 - ny, x1 + nx, y1 + ny, "sk-c sk-ince") +
    cizgi(x2 - nx, y2 - ny, x2 + nx, y2 + ny, "sk-c sk-ince") +
    yazi((x1 + x2) / 2 + kaydir[0], (y1 + y2) / 2 + kaydir[1], etiket, { kucuk: true })
  );
}

// Kesikli yörünge (parabol): noktalar listesinden
export function yorunge(noktalar: [number, number][]): string {
  return `<polyline points="${noktalar.map(([x, y]) => `${s(x)},${s(y)}`).join(" ")}" class="sk-kesik"/>`;
}
