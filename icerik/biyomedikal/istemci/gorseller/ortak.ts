// Biyomedikal şekillerinin ortak yardımcıları. Çizim ve grafik yardımcıları
// DSP'nin şekil dosyalarından alınır (renkler styles.css'teki .g-* sınıflarıyla
// iki temaya uyar); burada biyomedikal sinyallere ve piksel ızgaralarına özgü
// küçük eklemeler var.

export { cizgi, kutu, nokta, ok, satirlar, yazi, yol, type Nokta } from "../../../dsp/istemci/gorseller/cizim";
export { aralik, cubuklar, dolgu, egri, eksen, fonksiyon, gosterge, kisa, rastgele, seviye, stem, type Eksen } from "../../../dsp/istemci/gorseller/grafik";
import { cizgi, yazi } from "../../../dsp/istemci/gorseller/cizim";

const n = (x: number) => Math.round(x * 10) / 10;

// Gauss tümseği: tepe genliği a, merkezi m, genişliği w
export const tumsek = (t: number, a: number, m: number, w: number) => a * Math.exp(-(((t - m) / w) ** 2));

// Bir kalp atımının sentetik EKG'si (mV); t saniye, atım 0..0.8 s içinde
export function ekgAtim(t: number): number {
  return (
    tumsek(t, 0.15, 0.16, 0.028) + // P
    tumsek(t, -0.1, 0.285, 0.009) + // Q
    tumsek(t, 1.0, 0.31, 0.011) + // R
    tumsek(t, -0.25, 0.335, 0.01) + // S
    tumsek(t, 0.3, 0.56, 0.045) // T
  );
}

// Periyodik EKG: her T saniyede bir atım
export const ekg = (t: number, T = 0.8) => ekgAtim(((t % T) + T) % T);

// Gri piksel (0 siyah, 255 beyaz). Görüntünün kendisini temsil ettiği için
// renk temaya göre değişmez.
export function piksel(x: number, y: number, boy: number, deger: number, yaziGoster = false): string {
  const d = Math.max(0, Math.min(255, Math.round(deger)));
  let s = `<rect x="${n(x)}" y="${n(y)}" width="${boy}" height="${boy}" class="g-bag" style="fill:rgb(${d},${d},${d})"/>`;
  if (yaziGoster) {
    const renk = d > 140 ? "#000" : "#fff";
    s += `<text x="${n(x + boy / 2)}" y="${n(y + boy / 2)}" dy="0.35em" text-anchor="middle" font-size="12" fill="${renk}">${d}</text>`;
  }
  return s;
}

// Değer matrisini piksel ızgarası olarak çizer
export function izgara(x: number, y: number, boy: number, m: number[][], yaziGoster = false): string {
  return m.map((satir, i) => satir.map((v, j) => piksel(x + j * boy, y + i * boy, boy, v, yaziGoster)).join("")).join("");
}

// Sayı ızgarası: tema renkli kutucuklar içinde sayılar (filtre pencereleri için)
export function sayiIzgarasi(x: number, y: number, boy: number, m: (number | string)[][], vurgu?: [number, number], cls = "g-kutu"): string {
  let s = "";
  m.forEach((satir, i) =>
    satir.forEach((v, j) => {
      const sec = vurgu && vurgu[0] === i && vurgu[1] === j;
      s += `<rect x="${x + j * boy}" y="${y + i * boy}" width="${boy}" height="${boy}" class="${sec ? "g-dolu g-secili" : cls}"/>`;
      s += yazi(x + j * boy + boy / 2, y + i * boy + boy / 2, String(v), "g-kucuk");
    }),
  );
  return s;
}

// Yatay aralık oku: iki ucu dikey çentikli çizgi ve ortasında etiket
export function aralikOku(x1: number, x2: number, y: number, etiket: string, cls = "g-cizgi g-renk-a-cizgi"): string {
  return (
    cizgi([[x1, y], [x2, y]], cls) +
    cizgi([[x1, y - 5], [x1, y + 5]], cls) +
    cizgi([[x2, y - 5], [x2, y + 5]], cls) +
    yazi((x1 + x2) / 2, y - 10, etiket, "g-mini g-kalin")
  );
}
