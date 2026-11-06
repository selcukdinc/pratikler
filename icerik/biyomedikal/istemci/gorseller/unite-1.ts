// 1. ünite şekilleri: kalbin ileti sistemi, Einthoven üçgeni, EKG dalgaları ve
// aralıkları, EKG kağıdı ve kalp hızı hesabı, EKG ölçüm blok şeması.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { aralikOku, cizgi, ekg, ekgAtim, eksen, fonksiyon, kutu, nokta, ok, satirlar, yazi, yol } from "./ortak";

// ---- G-H1-01: Kalbin ileti sistemi ----
function iletiSistemi(): string {
  let s = "";
  // Kalp dış hattı
  s += yol("M190,60 C120,60 90,130 110,190 C130,260 230,320 300,340 C370,320 470,260 490,190 C510,130 480,60 410,60 C360,60 320,80 300,100 C280,80 240,60 190,60 Z", "g-kutu");
  // Odacıklar
  s += yol("M140,95 H290 V175 H130 Z", "g-bolge-b");
  s += yol("M310,95 H460 V175 H310 Z", "g-bolge-b");
  s += yol("M140,185 H290 V290 C240,280 170,240 140,185 Z", "g-bolge-a");
  s += yol("M310,185 H460 C430,240 360,280 310,290 Z", "g-bolge-a");
  s += yazi(200, 125, "Sağ kulakçık", "g-mini g-soluk");
  s += yazi(390, 125, "Sol kulakçık", "g-mini g-soluk");
  s += yazi(205, 225, "Sağ karıncık", "g-mini g-soluk");
  s += yazi(395, 225, "Sol karıncık", "g-mini g-soluk");
  // İleti yolu
  const sa: [number, number] = [170, 105];
  const av: [number, number] = [285, 172];
  s += cizgi([sa, [230, 140], av], "g-kesik");
  s += cizgi([av, [300, 182], [300, 215]], "g-yol");
  s += cizgi([[300, 215], [262, 250], [228, 270]], "g-yol");
  s += cizgi([[300, 215], [338, 250], [372, 270]], "g-yol");
  s += cizgi([[228, 270], [190, 250], [160, 215]], "g-cizgi g-renk-b-cizgi");
  s += cizgi([[372, 270], [410, 250], [440, 215]], "g-cizgi g-renk-b-cizgi");
  s += `<circle cx="${sa[0]}" cy="${sa[1]}" r="8" class="g-uyari"/>`;
  s += `<circle cx="${av[0]}" cy="${av[1]}" r="7" class="g-uyari"/>`;
  // Etiketler
  s += ok([[95, 50], [160, 98]], "g-cizgi g-ince");
  s += satirlar(70, 30, ["SA düğümü", "(doğal pacemaker)"], "g-mini g-kalin", "middle", 13);
  s += ok([[560, 120], [292, 170]], "g-cizgi g-ince");
  s += yazi(565, 120, "AV düğümü", "g-mini g-kalin", "start");
  s += ok([[560, 175], [304, 200]], "g-cizgi g-ince");
  s += yazi(565, 175, "His demeti", "g-mini g-kalin", "start");
  s += ok([[560, 230], [345, 254]], "g-cizgi g-ince");
  s += yazi(565, 230, "Demet kolları", "g-mini g-kalin", "start");
  s += ok([[560, 285], [430, 230]], "g-cizgi g-ince");
  s += yazi(565, 285, "Purkinje lifleri", "g-mini g-kalin", "start");
  s += yazi(20, 345, "SA → AV → His → demet kolları → Purkinje", "g-kucuk g-kalin", "start");
  return s;
}

// ---- G-H1-02: Einthoven üçgeni ----
function einthoven(): string {
  const RA: [number, number] = [120, 70];
  const LA: [number, number] = [480, 70];
  const LL: [number, number] = [300, 330];
  let s = "";
  s += yol(`M${RA[0]},${RA[1]} L${LA[0]},${LA[1]} L${LL[0]},${LL[1]} Z`, "g-cizgi");
  s += yol("M300,165 C285,150 262,160 268,182 C274,202 300,215 300,215 C300,215 326,202 332,182 C338,160 315,150 300,165 Z", "g-hata");
  s += yazi(300, 240, "kalp", "g-mini g-soluk");
  for (const [p, ad] of [[RA, "Sağ kol (R)"], [LA, "Sol kol (L)"], [LL, "Sol bacak (F)"]] as const) {
    s += `<circle cx="${p[0]}" cy="${p[1]}" r="9" class="g-dolu"/>`;
    s += yazi(p[0], p[1] + (p === LL ? 26 : -24), ad, "g-kucuk g-kalin");
  }
  // Derivasyon adları ve kutupları (− negatif, + pozitif elektrot)
  const isaret = (x: number, y: number, arti: boolean) => yazi(x, y, arti ? "+" : "−", `g-kalin ${arti ? "g-renk-c" : "g-renk-b"}`);
  s += yazi(300, 52, "DI", "g-kalin g-renk-a") + isaret(155, 55, false) + isaret(445, 55, true);
  s += yazi(190, 205, "DII", "g-kalin g-renk-a", "end") + isaret(118, 108, false) + isaret(268, 320, true);
  s += yazi(410, 205, "DIII", "g-kalin g-renk-a", "start") + isaret(482, 108, false) + isaret(332, 320, true);
  s += yazi(300, 120, "60°", "g-mini g-soluk");
  s += satirlar(520, 190, ["DI: sağ kol (−) → sol kol (+)", "DII: sağ kol (−) → sol bacak (+)", "DIII: sol kol (−) → sol bacak (+)", "Sağ bacak: toprak"], "g-mini", "start", 18);
  return s;
}

// ---- G-H1-03: EKG dalgaları ve aralıkları ----
function ekgDalgalari(): string {
  const e = eksen({ x: 50, y: 40, w: 580, h: 200, x0: 0, x1: 0.8, y0: -0.45, y1: 1.15, xTik: [0, 0.2, 0.4, 0.6, 0.8], xAd: "t (s)", yAd: "mV" });
  let s = e.s;
  s += fonksiyon(e, ekgAtim, "g-seri-a", 600);
  const etiket = (t: number, y: number, ad: string) => yazi(e.X(t), e.Y(y), ad, "g-kucuk g-kalin g-renk-b");
  s += etiket(0.16, 0.3, "P") + etiket(0.272, -0.22, "Q") + etiket(0.31, 1.1, "R") + etiket(0.355, -0.36, "S") + etiket(0.56, 0.45, "T");
  s += aralikOku(e.X(0.11), e.X(0.275), 290, "PR: 0,12–0,20 s");
  s += aralikOku(e.X(0.275), e.X(0.35), 320, "QRS ≤ 0,10 s", "g-cizgi g-renk-c-cizgi");
  s += aralikOku(e.X(0.35), e.X(0.51), e.Y(0) - 50, "ST", "g-cizgi g-renk-c-cizgi");
  s += aralikOku(e.X(0.275), e.X(0.62), 350, "QT: 0,35–0,44 s");
  return s;
}

// ---- G-H1-04: EKG kağıdı ve kalp hızı ----
function ekgKagidi(): string {
  const mm = 9; // piksel / mm
  const x0 = 30;
  const y0 = 42;
  const G = 60; // mm (yatay)
  const H = 25; // mm (dikey)
  let s = "";
  for (let i = 0; i <= G; i++) s += cizgi([[x0 + i * mm, y0], [x0 + i * mm, y0 + H * mm]], i % 5 ? "g-izgara" : "g-cizgi g-eksen");
  for (let j = 0; j <= H; j++) s += cizgi([[x0, y0 + j * mm], [x0 + G * mm, y0 + j * mm]], j % 5 ? "g-izgara" : "g-cizgi g-eksen");
  // 25 mm/s ve 10 mm/mV ile EKG: R tepeleri 15 mm arayla (0,6 s)
  const taban = y0 + 17 * mm;
  let p = "";
  for (let k = 0; k <= G * 4; k++) {
    const xmm = k / 4;
    const t = xmm / 25;
    p += `${(x0 + xmm * mm).toFixed(1)},${(taban - ekg(t + 0.29, 0.6) * 10 * mm).toFixed(1)} `;
  }
  s += `<polyline points="${p.trim()}" class="g-seri-b"/>`;
  // R-R aralığı: R tepeleri t = 0,02 + 0,6k s, x = 0,5 + 15k mm
  const r1 = x0 + 0.5 * mm + 15 * mm;
  const r2 = r1 + 15 * mm;
  s += aralikOku(r1, r2, y0 - 12, "R-R = 15 mm");
  s += satirlar(x0 + G * mm + 14, y0 + 10, ["1 küçük kare: 1 mm", "= 0,04 s, 0,1 mV", "", "1 büyük kare: 5 mm", "= 0,2 s", "", "Periyot:", "15 × 0,04 = 0,6 s", "Hız: 60 / 0,6", "= 100 atım/dk"], "g-mini", "start", 15);
  s += yazi(x0, y0 + H * mm + 16, "25 mm/s · 10 mm/mV", "g-mini g-soluk", "start");
  return s;
}

// ---- G-H1-05: EKG ölçüm blok şeması ----
function olcumBlok(): string {
  const w = 120;
  const h = 46;
  const ust = [["Elektrotlar", "RA, LA, LL, RL"], ["Uç seçim", "devresi"], ["Ön", "kuvvetlendirici"], ["İzolasyon", "devresi"]];
  const alt = [["Bant söndüren", "filtre (50 Hz)"], ["Kuvvet-", "lendirici"], ["Bant geçiren", "filtre"], ["EKG", "çıkışı"]];
  let s = "";
  ust.forEach((b, i) => {
    const x = 20 + i * 170;
    s += kutu(x, 30, w, h, i === 3 ? "g-uyari" : "g-kutu") + satirlar(x + w / 2, 46, b, "g-mini", "middle", 14);
    if (i < 3) s += ok([[x + w, 53], [x + 170, 53]]);
  });
  s += ok([[20 + 3 * 170 + w / 2, 76], [20 + 3 * 170 + w / 2, 100], [80, 100], [80, 130]]);
  alt.forEach((b, i) => {
    const x = 20 + i * 170;
    s += kutu(x, 130, w, h, i === 0 ? "g-dolu" : "g-kutu") + satirlar(x + w / 2, 146, b, "g-mini", "middle", 14);
    if (i < 3) s += ok([[x + w, 153], [x + 170, 153]]);
  });
  s += yazi(20, 205, "EKG: 0,1–100 Hz, en çok yaklaşık 1 mV · izolasyon hastayı elektrik çarpmasından korur", "g-mini g-soluk", "start");
  return s;
}

export const UNITE_1_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H1-01",
    baslik: "Kalbin ileti sistemi",
    aciklama: "Uyarı sağ kulakçığın üstündeki SA düğümünde doğar, kulakçıkları geçip AV düğümüne ulaşır; His demeti, sağ ve sol demet kolları ve Purkinje lifleri yoluyla karıncık duvarlarına yayılır.",
    en: 700, boy: 360, icerik: iletiSistemi(),
  },
  {
    kod: "G-H1-02",
    baslik: "Einthoven üçgeni ve bipolar derivasyonlar",
    aciklama: "Sağ kol, sol kol ve sol bacak eşkenar bir üçgenin köşeleridir, kalp merkezdedir. DI sağ koldan sol kola, DII sağ koldan sol bacağa, DIII sol koldan sol bacağa ölçülür; sol bacak DII ve DIII'te pozitiftir. Sağ bacak topraktır.",
    en: 760, boy: 370, icerik: einthoven(),
  },
  {
    kod: "G-H1-03",
    baslik: "EKG dalgaları ve aralıkları",
    aciklama: "Bir kalp atımının EKG'si: P kulakçık depolarizasyonu, QRS karıncık depolarizasyonu, T karıncık repolarizasyonu. PR aralığı 0,12–0,20 s, QRS en çok 0,10 s, QT 0,35–0,44 s; ST segmenti QRS'in sonundan T'nin başına kadardır.",
    en: 680, boy: 370, icerik: ekgDalgalari(),
  },
  {
    kod: "G-H1-04",
    baslik: "EKG kağıdı ve kalp hızı hesabı",
    aciklama: "25 mm/s hızda bir küçük kare 0,04 s, bir büyük kare 0,2 s'dir; dikeyde 10 mm 1 mV'tur. İki R tepesi 15 mm arayla ise periyot 0,6 s, kalp hızı 60/0,6 = 100 atım/dk olur.",
    en: 700, boy: 292, icerik: ekgKagidi(),
  },
  {
    kod: "G-H1-05",
    baslik: "EKG ölçüm devresinin blok şeması",
    aciklama: "Elektrotlardan gelen sinyal uç seçim devresinden ön kuvvetlendiriciye, oradan hastayı koruyan izolasyon devresine gider; ardından 50 Hz için bant söndüren filtre, kuvvetlendirici ve bant geçiren filtreden geçip EKG olarak çıkar.",
    en: 700, boy: 215, icerik: olcumBlok(),
  },
];
