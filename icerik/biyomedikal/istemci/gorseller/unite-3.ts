// 3. ünite şekilleri: sinir iletim ölçümü, hafif ve güçlü kasılmada MÜAP'lar,
// kas seğirmesi.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { aralikOku, cizgi, eksen, fonksiyon, kutu, ok, rastgele, satirlar, tumsek, yazi, yol } from "./ortak";

// Tek bir MÜAP biçimi (iki fazlı, birkaç ms)
const muap = (t: number, m: number, a: number) => tumsek(t, a, m, 0.0025) - tumsek(t, 0.7 * a, m + 0.004, 0.003);

// ---- G-H3-01: Sinir iletim ölçümü ----
function sinirIletim(): string {
  let s = "";
  // Kol ve sinir
  s += yol("M30,70 C200,50 450,55 650,80 L650,140 C450,150 200,150 30,135 Z", "g-bolge-b");
  s += cizgi([[40, 105], [640, 110]], "g-cizgi g-renk-c-cizgi");
  s += yazi(600, 126, "sinir", "g-mini g-renk-c");
  // Uyarı ve kayıt elektrotları
  s += kutu(110, 40, 40, 22, "g-uyari") + yazi(130, 51, "U", "g-mini g-kalin");
  s += kutu(470, 40, 40, 22, "g-dolu") + yazi(490, 51, "K", "g-mini g-kalin");
  s += satirlar(130, 18, ["uyarı: ≤100 V, < 1 ms"], "g-mini", "middle");
  s += satirlar(490, 18, ["kayıt elektrodu"], "g-mini", "middle");
  s += ok([[160, 98], [460, 98]], "g-cizgi g-renk-a-cizgi");
  s += yazi(310, 88, "aktivite sinir boyunca yayılır", "g-mini g-renk-a");
  s += aralikOku(130, 490, 168, "d: elektrotlar arası uzaklık");
  // Kayıt
  const e = eksen({ x: 60, y: 200, w: 560, h: 90, x0: 0, x1: 0.02, y0: -1, y1: 1.2, xTik: [0, 0.005, 0.01, 0.015, 0.02], xEtiket: (v) => `${Math.round(v * 1000)}`, xAd: "t (ms)" });
  s += e.s;
  s += fonksiyon(e, (t) => tumsek(t, 1.1, 0.0005, 0.0003) + tumsek(t, 1, 0.009, 0.0007) - tumsek(t, 0.6, 0.0105, 0.0009), "g-seri-a", 800);
  s += yazi(e.X(0.0005) + 6, e.Y(1.1), "uyarı anı", "g-mini g-soluk", "start");
  s += aralikOku(e.X(0.0005), e.X(0.0085), 335, "Δt: gecikme");
  s += kutu(420, 322, 210, 26, "g-dolu") + yazi(525, 335, "iletim hızı v = d / Δt", "g-kucuk g-kalin");
  return s;
}

// ---- G-H3-02: Hafif ve güçlü kasılmada MÜAP'lar ----
function muapDizisi(): string {
  let s = "";
  const satir = (y: number, ad: string, adet: number, tohum: number) => {
    const r = rastgele(tohum);
    const olay = Array.from({ length: adet }, () => ({ m: 0.01 + 0.48 * r(), a: (0.5 + 0.5 * r()) * (r() < 0.5 ? 1 : -1) }));
    const e = eksen({ x: 170, y, w: 480, h: 80, x0: 0, x1: 0.5, y0: -2.2, y1: 2.2 });
    let t = cizgi([[170, y + 40], [650, y + 40]], "g-izgara");
    t += fonksiyon(e, (x) => olay.reduce((a, o) => a + muap(x, o.m, o.a * 1.6), 0), "g-seri-a g-ince", 1500);
    t += satirlar(14, y + 32, ad.split("|"), "g-kucuk", "start", 16);
    return t;
  };
  s += satir(20, "Hafif kasılma|az ve seyrek MÜAP", 7, 5);
  s += satir(120, "Güçlü kasılma|çok ve sık MÜAP", 70, 9);
  s += cizgi([[170, 212], [650, 212]], "g-cizgi g-eksen") + yazi(170, 226, "0", "g-mini g-soluk") + yazi(650, 226, "0,5 s", "g-mini g-soluk");
  s += yazi(410, 226, "Kasılmanın miktarı MÜAP'ların sayısı ve sıklığıyla artar", "g-mini g-kalin");
  return s;
}

// ---- G-H3-03: Kas seğirmesi ----
function segirme(): string {
  const e = eksen({ x: 50, y: 30, w: 560, h: 170, x0: 0, x1: 120, y0: 0, y1: 1.15, xTik: [0, 20, 40, 60, 80, 100, 120], xAd: "t (ms)", yAd: "gerilme T" });
  const T = (t: number) => (t < 10 ? 0 : t < 40 ? Math.sin(((t - 10) / 30) * (Math.PI / 2)) ** 2 : Math.exp(-(((t - 40) / 28) ** 2)));
  let s = e.s;
  s += `<rect x="${e.X(0)}" y="30" width="${e.X(10) - e.X(0)}" height="170" class="g-bolge-b"/>`;
  s += fonksiyon(e, T, "g-seri-a", 500);
  s += ok([[e.X(0), e.Y(0) + 34], [e.X(0), e.Y(0) + 4]], "g-cizgi g-renk-b-cizgi", "g-renk-b");
  s += yazi(e.X(0) + 4, e.Y(0) + 38, "uyarı", "g-mini g-renk-b", "start");
  s += yazi(e.X(5), e.Y(0.25), "gecikme", "g-mini g-kalin");
  s += yazi(e.X(21), e.Y(0.75), "kasılma fazı", "g-mini g-kalin", "end");
  s += yazi(e.X(62), e.Y(0.7), "gevşeme fazı", "g-mini g-kalin", "start");
  s += satirlar(50, 268, ["Seğirme süresi kasın tipine göre değişir: hızlı ve hassas kaslarda 7,5 ms'ye kadar iner,", "kaba ve kuvvetli hareket yapan kaslarda 100 ms olabilir."], "g-mini g-soluk", "start");
  return s;
}

export const UNITE_3_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H3-01",
    baslik: "Sinir iletim ölçümü",
    aciklama: "Deri üzerindeki bir elektrotla sinire 100 V'a kadar ama milisaniyeden kısa bir uyarı verilir. Sinir boyunca yayılan etkinlik d uzaklıktaki kayıt elektrodunda Δt gecikmeyle görülür; iletim hızı d / Δt'dir.",
    en: 680, boy: 360, icerik: sinirIletim(),
  },
  {
    kod: "G-H3-02",
    baslik: "Hafif ve güçlü kasılmada motor ünite aksiyon potansiyelleri",
    aciklama: "Hafif kasılmada kayıtta az sayıda, birbirinden ayrı MÜAP görülür. Güçlü kasılmada MÜAP'ların sayısı ve sıklığı artar, potansiyeller üst üste biner.",
    en: 680, boy: 235, icerik: muapDizisi(),
  },
  {
    kod: "G-H3-03",
    baslik: "Kas seğirmesi: gecikme, kasılma ve gevşeme",
    aciklama: "Uyarıdan sonra kısa bir gecikme olur, ardından mekanik gerilme (T) kasılma fazında yükselir ve gevşeme fazında azalır. Her kasılma fazını bir gevşeme fazı izler.",
    en: 680, boy: 300, icerik: segirme(),
  },
];
