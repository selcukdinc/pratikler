// Soru şekilleri. Sunulardaki şekiller burada yeniden çizilir; türetilmiş sorular
// aynı çizim işlevlerini başka değerlerle kullanır. Kod: G-S<bölüm>-<sıra>.

import type { Gorsel } from "../../../../src/gorseller/tip";
import {
  aciYayi, bina, cizgi, cokgen, daire, duvar, egikBlok, egikDuzlem, eksenler, insan, ip, kesik, kutu, makara, ok, okAci,
  olcu, uc, yazi, yorunge, zemin, type Renk,
} from "./cizim";

// ---------------------------------------------------------------- 2. bölüm: vektörler

interface VektorCizimi {
  ad: string;
  // Etikette yazan büyüklük ("10")
  boy: string;
  aci: number;
  renk?: Renk;
  // Açı yayı: hangi eksen yönünden (0, 90, 180, 270) ölçüldüğü ve etiketi
  yay?: { eksen: number; etiket: string };
}

// Orijinden çıkan vektörler ve aralarındaki açı yayları
function vektorler(liste: VektorCizimi[], en = 380, boy = 300): { en: number; boy: number; icerik: string } {
  const cx = en / 2;
  const cy = boy / 2;
  const L = Math.min(en, boy) / 2 - 40;
  let p = eksenler(cx, cy, L + 20, L + 20, L + 10, L + 10);
  liste.forEach((v, i) => {
    const renk = v.renk ?? (["mavi", "kirmizi", "yesil", "turuncu"] as Renk[])[i % 4]!;
    p += okAci(cx, cy, L, v.aci, renk);
    const eksende = v.aci % 90 === 0;
    const [ex, ey] = eksende ? uc(...uc(cx, cy, L - 6, v.aci), 16, v.aci + 90) : uc(cx, cy, L + 16, v.aci);
    p += yazi(ex, ey, v.ad, { kalin: true });
    const [bx, by] = uc(cx, cy, L * 0.62, v.aci);
    const [nx, ny] = uc(0, 0, 12, v.aci + 90);
    p += yazi(bx + nx, by + ny, v.boy, { kucuk: true });
    if (v.yay) {
      const a1 = Math.min(v.yay.eksen, v.aci);
      const a2 = Math.max(v.yay.eksen, v.aci);
      p += aciYayi(cx, cy, 34 + i * 6, a1, a2, v.yay.etiket, 14);
    }
  });
  return { en, boy, icerik: p };
}

// xy-düzleminde iki vektör, z ekseni yukarı (eğik izdüşüm)
function ucBoyut(): { en: number; boy: number; icerik: string } {
  const cx = 190;
  const cy = 150;
  // izdüşüm: x ekseni sol aşağı (210°), y sağa (0°), z yukarı (90°)
  const xEks = 210;
  const yEks = -2;
  const nokta = (xx: number, yy: number): [number, number] => {
    const [ax, ay] = uc(0, 0, xx, xEks);
    const [bx, by] = uc(0, 0, yy, yEks);
    return [cx + ax + bx, cy + ay + by];
  };
  let p = ok(cx, cy, ...uc(cx, cy, 120, 90), "siyah", 8) + yazi(cx, cy - 132, "z", { kucuk: true });
  p += ok(cx, cy, ...uc(cx, cy, 160, yEks), "siyah", 8) + yazi(...uc(cx, cy, 172, yEks), "y", { kucuk: true });
  p += ok(cx, cy, ...uc(cx, cy, 130, xEks), "siyah", 8) + yazi(...uc(cx, cy, 142, xEks), "x", { kucuk: true });
  // a: y ekseninden 23° x'e doğru; b: x ekseninden 30° y'ye doğru (xy düzleminde)
  const a = nokta(110 * Math.sin((23 * Math.PI) / 180), 110 * Math.cos((23 * Math.PI) / 180));
  const b = nokta(100 * Math.cos((30 * Math.PI) / 180), 100 * Math.sin((30 * Math.PI) / 180));
  p += ok(cx, cy, a[0], a[1], "mavi") + yazi(a[0] + 12, a[1] + 8, "a", { kalin: true });
  p += ok(cx, cy, b[0], b[1], "kirmizi") + yazi(b[0] - 4, b[1] + 16, "b", { kalin: true });
  p += yazi(cx + 74, cy + 14, "23°", { kucuk: true });
  p += yazi(cx - 52, cy + 40, "30°", { kucuk: true });
  return { en: 380, boy: 280, icerik: p };
}

// ---------------------------------------------------------------- 3. bölüm: düşey atış

// Yerden yukarı atılan top ve binanın tepesinden atılan ikinci top
function ikiTop(yukseklik: string, alttanHiz: string, usttenHiz: string): { en: number; boy: number; icerik: string } {
  const yer = 250;
  let p = zemin(20, 380, yer);
  p += bina(150, yer, 90, 190);
  p += insan(120, yer) + daire(132, yer - 22, 5, "sk-turuncu-d");
  p += ok(132, yer - 32, 132, yer - 90, "mavi") + yazi(104, yer - 70, alttanHiz, { kucuk: true, hiza: "end" });
  p += insan(228, yer - 190) + daire(247, yer - 196, 5, "sk-turuncu-d");
  p += ok(247, yer - 186, 247, yer - 130, "kirmizi") + yazi(256, yer - 150, usttenHiz, { kucuk: true, hiza: "start" });
  p += olcu(300, yer, 300, yer - 190, yukseklik, [24, 0]);
  p += ok(360, yer, 360, yer - 60, "siyah", 8) + yazi(372, yer - 64, "y", { kucuk: true }) + yazi(360, yer + 18, "O", { kucuk: true });
  return { en: 400, boy: 280, icerik: p };
}

// ---------------------------------------------------------------- 4. bölüm: iki boyutta hareket

// Duvara doğru eğik atış: duvar uzaklığı, çarpma yüksekliği ve atış açısı
function duvaraAtis(uzaklik: string, yukseklik: string, aci: number): { en: number; boy: number; icerik: string } {
  const yer = 230;
  const x0 = 60;
  const xd = 330;
  let p = zemin(20, 360, yer);
  p += duvar(xd, 60, yer, 12);
  p += insan(x0 - 14, yer);
  const yuk = 110;
  const nokta: [number, number][] = [];
  for (let t = 0; t <= 1.0001; t += 0.05) {
    const x = x0 + (xd - x0) * t;
    // parabol: yerden başlar, duvarda yuk kadar yukarıda biter
    nokta.push([x, yer - 4 - (yuk * t + 190 * t * (1 - t))]);
  }
  p += yorunge(nokta);
  p += okAci(x0, yer - 4, 70, aci, "mavi");
  p += aciYayi(x0, yer - 4, 28, 0, aci, `${aci}°`, 14);
  const son = nokta[nokta.length - 1]!;
  p += daire(son[0] - 6, son[1], 6, "sk-turuncu-d");
  p += olcu(x0, yer + 22, xd, yer + 22, uzaklik, [0, 12]);
  p += olcu(xd + 26, yer, xd + 26, son[1], yukseklik, [18, 0]);
  return { en: 390, boy: 270, icerik: p };
}

// Uçurumdan yatay atlayan motosiklet ve nehir
function ucurum(yukseklik: string, genislik: string): { en: number; boy: number; icerik: string } {
  const yer = 230;
  const ust = 80;
  let p = `<rect x="20" y="${ust}" width="70" height="${yer - ust + 8}" class="sk-zemin"/>`;
  p += `<rect x="90" y="${yer - 6}" width="240" height="14" class="sk-kutu2"/>`;
  p += `<rect x="330" y="${yer - 20}" width="50" height="28" class="sk-zemin"/>`;
  p += daire(66, ust - 8, 7) + daire(84, ust - 8, 7) + cizgi(66, ust - 8, 84, ust - 8) + insan(76, ust - 12, 22);
  p += ok(92, ust - 10, 150, ust - 10, "mavi") + yazi(156, ust - 22, "v₀", { kucuk: true });
  const nokta: [number, number][] = [];
  for (let t = 0; t <= 1.0001; t += 0.05) nokta.push([90 + 240 * t, ust - 6 + (yer - 26 - ust) * t * t]);
  p += yorunge(nokta);
  p += olcu(105, ust, 105, yer - 6, yukseklik, [20, 0]);
  p += olcu(90, yer + 22, 330, yer + 22, genislik, [0, 12]);
  return { en: 400, boy: 270, icerik: p };
}

// Binanın çatısından eğik atılan top ve kapıda bekleyen çocuk
function catiVeCocuk(): { en: number; boy: number; icerik: string } {
  const yer = 240;
  let p = zemin(20, 390, yer);
  p += `<rect x="70" y="80" width="70" height="${yer - 80}" class="sk-zemin"/>`;
  p += daire(134, 74, 6, "sk-turuncu-d");
  p += okAci(134, 74, 50, 53, "mavi") + yazi(180, 28, "5 m/s", { kucuk: true });
  p += aciYayi(134, 74, 22, 0, 53, "53°", 12) + kesik(134, 74, 180, 74);
  p += olcu(50, 80, 50, yer, "33 m", [-20, 0]);
  p += insan(156, yer, 36);
  p += ok(170, yer - 22, 220, yer - 22, "kirmizi") + yazi(228, yer - 34, "a", { kucuk: true });
  p += yazi(140, yer + 16, "O", { kucuk: true }) + ok(140, yer + 30, 380, yer + 30, "siyah", 7) + yazi(386, yer + 42, "x", { kucuk: true });
  return { en: 400, boy: 285, icerik: p };
}

// Yüksek binanın tepesinden yatayla açı yaparak atılan taş
function binadanEgik(yukseklik: string, hiz: string, aci: number): { en: number; boy: number; icerik: string } {
  const yer = 250;
  const tepe = 70;
  let p = zemin(20, 390, yer) + bina(60, yer, 70, yer - tepe);
  p += insan(120, tepe, 30);
  p += okAci(128, tepe - 18, 54, aci, "mavi") + yazi(190, tepe - 52, hiz, { kucuk: true });
  p += kesik(128, tepe - 18, 190, tepe - 18) + aciYayi(128, tepe - 18, 24, 0, aci, `${aci}°`, 12);
  const nokta: [number, number][] = [];
  for (let t = 0; t <= 1.0001; t += 0.05) nokta.push([128 + 240 * t, tepe - 18 - 50 * t + (yer - tepe + 68) * t * t]);
  p += yorunge(nokta);
  p += olcu(42, tepe, 42, yer, yukseklik, [-20, 0]);
  return { en: 400, boy: 280, icerik: p };
}

// Dış asansör ve topu asansöre fırlatan çocuk
function asansor(): { en: number; boy: number; icerik: string } {
  const yer = 240;
  let p = zemin(20, 390, yer) + `<rect x="320" y="40" width="60" height="${yer - 40}" class="sk-zemin"/>`;
  p += cizgi(250, 90, 250, 130) + cizgi(300, 90, 300, 130) + cizgi(250, 130, 300, 130);
  p += ok(236, 92, 236, 126, "kirmizi") + yazi(226, 108, "u", { kucuk: true, hiza: "end" });
  p += olcu(306, yer, 306, 130, "8 m", [-18, 0]);
  p += daire(70, yer - 8, 8, "sk-turuncu-d") + yazi(56, yer + 16, "Orijin", { kucuk: true });
  p += okAci(70, yer - 8, 60, 53, "mavi") + yazi(118, yer - 70, "20 m/s", { kucuk: true });
  p += aciYayi(70, yer - 8, 24, 0, 53, "53°", 12);
  p += olcu(70, yer + 24, 320, yer + 24, "6 m", [0, 12]);
  return { en: 400, boy: 280, icerik: p };
}

// Nehirde motor: hız üçgeni (a: tekne kıyıya dik tutulur, b: hız kıyıya dik olur)
function nehir(): { en: number; boy: number; icerik: string } {
  let p = `<rect x="20" y="30" width="360" height="200" class="sk-kutu2"/>` + zemin(20, 380, 18, 12) + zemin(20, 380, 230, 12);
  // a
  p += ok(70, 200, 70, 70, "kirmizi") + yazi(56, 130, "v_MN", { kucuk: true, hiza: "end" });
  p += ok(70, 70, 120, 70, "mavi") + yazi(98, 58, "v_NO", { kucuk: true });
  p += ok(70, 200, 120, 70, "yesil") + yazi(124, 140, "v_MO", { kucuk: true, hiza: "start" });
  p += yazi(40, 210, "(a)", { kucuk: true });
  // b
  p += ok(300, 200, 250, 75, "kirmizi") + yazi(256, 150, "v_MN", { kucuk: true, hiza: "end" });
  p += ok(250, 75, 300, 75, "mavi") + yazi(278, 62, "v_NO", { kucuk: true });
  p += ok(300, 200, 300, 75, "yesil") + yazi(306, 140, "v_MO", { kucuk: true, hiza: "start" });
  p += yazi(360, 210, "(b)", { kucuk: true });
  p += ok(170, 120, 220, 120, "siyah", 8) + yazi(196, 106, "akıntı", { kucuk: true });
  return { en: 400, boy: 250, icerik: p };
}

// Nehirde kuzeye giden bot, doğuya akan nehir
function bot(): { en: number; boy: number; icerik: string } {
  let p = `<rect x="20" y="20" width="300" height="220" class="sk-kutu2"/>`;
  p += ok(130, 210, 130, 70, "kirmizi") + yazi(116, 140, "v_br", { kucuk: true, hiza: "end" });
  p += ok(130, 70, 200, 70, "mavi") + yazi(166, 56, "v_rE", { kucuk: true });
  p += ok(130, 210, 200, 70, "yesil") + yazi(176, 150, "v_bE", { kucuk: true, hiza: "start" });
  p += aciYayi(130, 210, 40, 63.4, 90, "θ", 12);
  p += ok(360, 140, 360, 100, "siyah", 7) + yazi(360, 90, "K", { kucuk: true }) + ok(345, 125, 385, 125, "siyah", 7) + yazi(393, 125, "D", { kucuk: true });
  return { en: 410, boy: 260, icerik: p };
}

// ---------------------------------------------------------------- 5. bölüm: Newton kanunları

// Noktasal cisme etki eden kuvvetler (hokey diski)
function noktasalKuvvetler(): { en: number; boy: number; icerik: string } {
  const cx = 160;
  const cy = 140;
  let p = eksenler(cx, cy, 60, 170, 110, 90);
  p += daire(cx, cy, 10, "sk-kutu2");
  p += okAci(cx, cy, 110, 60, "kirmizi") + yazi(...uc(cx, cy, 126, 60), "F₂ = 8 N", { kucuk: true });
  p += okAci(cx, cy, 90, -20, "mavi") + yazi(...uc(cx, cy, 112, -24), "F₁ = 5 N", { kucuk: true });
  p += aciYayi(cx, cy, 40, 0, 60, "60°", 12) + aciYayi(cx, cy, 52, -20, 0, "20°", 12);
  return { en: 360, boy: 270, icerik: p };
}

// Tavana iki kabloyla asılı lamba: sol ve sağ kablonun yatayla açısı
function lamba(solAci: number, sagAci: number, agirlik: string): { en: number; boy: number; icerik: string } {
  const tavan = 40;
  const dugum: [number, number] = [200, 130];
  const solX = dugum[0] - (dugum[1] - tavan) / Math.tan((solAci * Math.PI) / 180);
  const sagX = dugum[0] + (dugum[1] - tavan) / Math.tan((sagAci * Math.PI) / 180);
  let p = zemin(Math.min(solX, 40) - 10, Math.max(sagX, 360) + 10, tavan - 10, 10);
  p += ip(solX, tavan, ...dugum) + ip(sagX, tavan, ...dugum) + ip(dugum[0], dugum[1], dugum[0], 170);
  p += aciYayi(solX, tavan, 28, -solAci, 0, `${solAci}°`, 14);
  p += aciYayi(sagX, tavan, 28, 180, 180 + sagAci, `${sagAci}°`, 14);
  p += yazi((solX + dugum[0]) / 2 - 12, (tavan + dugum[1]) / 2 + 8, "T₁", { kucuk: true });
  p += yazi((sagX + dugum[0]) / 2 + 14, (tavan + dugum[1]) / 2 + 8, "T₂", { kucuk: true });
  p += yazi(dugum[0] + 14, 152, "T₃", { kucuk: true });
  p += kutu(184, 170, 32, 70, { sinif: "sk-zemin" });
  p += daire(200, 186, 8, "sk-kirmizi-d") + daire(200, 205, 8, "sk-turuncu-d") + daire(200, 224, 8, "sk-yesil-d");
  p += yazi(240, 205, agirlik, { kucuk: true, hiza: "start" });
  return { en: 400, boy: 260, icerik: p };
}

interface EgikSecenek {
  aci: number;
  blok?: string;
  // Blok yüzeyin neresinde (0 alt uç, 1 tepe)
  t?: number;
  // Yatay kuvvet (sola doğru blokla eğik düzleme itilir)
  yatayF?: string;
  // Eğik boyunca uzunluk etiketi
  uzunluk?: string;
  // Sürtünme katsayısı etiketi
  mu?: string;
}

// Eğik düzlem ve üzerindeki blok
function egik(o: EgikSecenek): { en: number; boy: number; icerik: string } {
  const x0 = 50;
  const y0 = 230;
  const taban = 300;
  const { sekil, nokta } = egikDuzlem(x0, y0, taban, o.aci);
  let p = sekil + zemin(20, 380, y0, 6);
  p += aciYayi(x0, y0, 44, 0, o.aci, `${o.aci}°`, 16);
  const t = o.t ?? 0.6;
  // blok yüzeye oturur: yüzeydeki noktadan dik yönde kaydır
  p += egikBlok(nokta(t), o.aci, 54, 34, o.blok);
  if (o.yatayF) {
    const [mx, my] = uc(...nokta(t), 17, o.aci + 90);
    p += ok(mx - 80, my, mx - 2, my, "kirmizi") + yazi(mx - 86, my - 14, o.yatayF, { kucuk: true, hiza: "start" });
  }
  if (o.uzunluk) {
    const [ax, ay] = uc(...nokta(0.02), 46, o.aci + 90);
    const [bx, by] = uc(...nokta(0.98), 46, o.aci + 90);
    p += kesik(ax, ay, bx, by) + yazi((ax + bx) / 2 - 14, (ay + by) / 2 - 14, o.uzunluk, { kucuk: true });
  }
  if (o.mu) p += yazi(300, y0 + 22, o.mu, { kucuk: true });
  return { en: 400, boy: 260, icerik: p };
}

// Yatay zemindeki blok ve yatayla açı yapan kuvvet (aci > 0 yukarı çeker, < 0 aşağı iter)
function blokKuvvet(blok: string, kuvvet: string, aci: number, ek?: string): { en: number; boy: number; icerik: string } {
  const yer = 190;
  let p = zemin(30, 370, yer);
  p += kutu(130, yer - 70, 100, 70, { etiket: blok });
  if (aci >= 0) {
    p += okAci(230, yer - 70, 110, aci, "kirmizi") + yazi(...uc(230, yer - 70, 126, aci), kuvvet, { kucuk: true });
    p += kesik(230, yer - 70, 320, yer - 70) + aciYayi(230, yer - 70, 40, 0, aci, `${aci}°`, 14);
  } else {
    const [sx, sy] = uc(230, yer - 35, -110, aci);
    p += ok(sx, sy, 230, yer - 35, "kirmizi") + yazi(sx - 10, sy - 12, kuvvet, { kucuk: true });
    p += kesik(sx, sy, sx + 90, sy) + aciYayi(sx, sy, 40, aci, 0, `${-aci}°`, 14);
  }
  if (ek) p += yazi(200, yer + 24, ek, { kucuk: true });
  return { en: 400, boy: 230, icerik: p };
}

// Masa üzerindeki m₁, kenardaki makara ve asılı m₂; isteğe bağlı açılı F kuvveti
function masaMakara(m1: string, m2: string, f?: { etiket: string; aci: number }, ek?: string): { en: number; boy: number; icerik: string } {
  const masa = 110;
  let p = `<rect x="80" y="${masa}" width="280" height="12" class="sk-zemin"/>` + cizgi(80, masa + 12, 80, 250, "sk-c sk-ince");
  p += makara(80, masa - 2, 13);
  p += kutu(190, masa - 44, 70, 44, { etiket: m1 });
  p += ip(80, masa - 15, 190, masa - 15) + ip(67, masa, 67, 190);
  p += kutu(47, 190, 40, 40, { etiket: m2, sinif: "sk-kutu2" });
  if (f) {
    p += okAci(260, masa - 30, 90, f.aci, "kirmizi") + yazi(...uc(260, masa - 30, 106, f.aci), f.etiket, { kucuk: true });
    p += kesik(260, masa - 30, 330, masa - 30) + aciYayi(260, masa - 30, 36, 0, f.aci, f.aci === 0 ? "" : "θ", 12);
  }
  if (ek) p += yazi(300, masa + 28, ek, { kucuk: true });
  return { en: 400, boy: 260, icerik: p };
}

// Yatay düzlemde iple bağlı iki blok, öndekine F
function ikiBlok(): { en: number; boy: number; icerik: string } {
  const yer = 150;
  let p = zemin(20, 380, yer);
  p += kutu(50, yer - 50, 80, 50, { etiket: "m₂" }) + ip(130, yer - 25, 210, yer - 25) + kutu(210, yer - 50, 80, 50, { etiket: "m₁" });
  p += ok(290, yer - 25, 360, yer - 25, "kirmizi") + yazi(330, yer - 42, "F", { kucuk: true });
  return { en: 400, boy: 180, icerik: p };
}

// Hareketli makara: masadaki blok, sabit makara, hareketli makaraya asılı blok
function hareketliMakara(): { en: number; boy: number; icerik: string } {
  const masa = 110;
  let p = `<rect x="40" y="${masa}" width="240" height="12" class="sk-zemin"/>` + cizgi(280, masa + 12, 280, 260, "sk-c sk-ince");
  p += zemin(300, 370, 20, 8);
  p += makara(280, masa - 2, 12);
  p += kutu(110, masa - 44, 70, 44, { etiket: "1 kg" });
  p += ip(180, masa - 14, 280, masa - 14) + ip(292, masa - 2, 292, 190);
  p += ip(316, 28, 316, 190);
  p += makara(304, 190, 12) + ip(304, 202, 304, 214);
  p += kutu(284, 214, 40, 34, { etiket: "2 kg", sinif: "sk-kutu2" });
  return { en: 400, boy: 270, icerik: p };
}

// Eğik düzlemde m₁, tepedeki makaradan geçen ip, asılı m₂
function egikAsili(aci: number, m1: string, m2: string): { en: number; boy: number; icerik: string } {
  const x0 = 40;
  const y0 = 240;
  const taban = 260;
  const { sekil, nokta, yukseklik } = egikDuzlem(x0, y0, taban, aci);
  let p = sekil + zemin(20, 390, y0, 6);
  p += aciYayi(x0, y0, 44, 0, aci, `${aci}°`, 16);
  const tepe: [number, number] = [x0 + taban + 6, y0 - yukseklik - 10];
  p += makara(tepe[0], tepe[1], 12);
  p += egikBlok(nokta(0.45), aci, 46, 30, m1);
  const [ux, uy] = uc(...uc(...nokta(0.45), 15, aci + 90), 46, aci);
  p += ip(ux, uy, ...uc(tepe[0], tepe[1], 12, aci + 90));
  p += ip(tepe[0] + 12, tepe[1], tepe[0] + 12, y0 - 70);
  p += kutu(tepe[0] - 4, y0 - 70, 32, 32, { etiket: m2, sinif: "sk-kutu2" });
  return { en: 400, boy: 270, icerik: p };
}

// Duvara yatay kuvvetle bastırılan blok
function duvarBlok(blok: string, kuvvet: string): { en: number; boy: number; icerik: string } {
  let p = zemin(20, 380, 220) + `<rect x="60" y="30" width="90" height="190" class="sk-zemin"/>`;
  p += kutu(150, 90, 50, 50, { etiket: blok });
  p += ok(300, 115, 202, 115, "kirmizi") + yazi(260, 100, kuvvet, { kucuk: true });
  return { en: 400, boy: 240, icerik: p };
}

// Atwood aleti: sabit makaradan geçen ipin iki ucunda iki kütle
function atwood(sol: string, sag: string, ekKutle?: string): { en: number; boy: number; icerik: string } {
  let p = zemin(120, 280, 18, 8) + cizgi(200, 26, 200, 60);
  p += makara(200, 70, 34);
  p += ip(166, 70, 166, 190) + ip(234, 70, 234, 170);
  p += kutu(144, 190, 44, 44, { etiket: sol });
  p += kutu(212, 170, 44, 44, { etiket: sag });
  if (ekKutle) p += kutu(222, 158, 24, 12, { sinif: "sk-kutu2" }) + yazi(262, 160, ekKutle, { kucuk: true, hiza: "start" });
  return { en: 400, boy: 250, icerik: p };
}

// Eğimli viraj: yolun kesiti ve araba
function egimliViraj(): { en: number; boy: number; icerik: string } {
  let p = cokgen([[40, 210], [360, 210], [40, 120]], "sk-zemin");
  const aci = (Math.atan2(90, 320) * 180) / Math.PI;
  const yuzey = (x: number): [number, number] => [x, 120 + ((x - 40) * 90) / 320];
  p += kutu(150, yuzey(150)[1] - 30, 70, 30, { aci: -aci }) + daire(...uc(...yuzey(160), 2, 90 - aci), 7, "sk-c") + daire(...uc(...yuzey(206), 2, 90 - aci), 7, "sk-c");
  const [mx, my] = uc(...yuzey(185), 15, 90 - aci);
  p += aciYayi(360, 210, 50, 180 - aci, 180, "θ = 30°", 30);
  p += ok(mx, my, ...uc(mx, my, 80, 90 + aci), "kirmizi") + yazi(...uc(mx, my, 94, 90 + aci), "N", { kucuk: true });
  p += ok(mx, my, mx, my + 64, "mavi") + yazi(mx + 16, my + 58, "mg", { kucuk: true });
  p += ok(250, 236, 60, 236, "siyah", 7) + yazi(150, 250, "merkeze doğru (r = 100 m)", { kucuk: true });
  return { en: 400, boy: 260, icerik: p };
}

// Sarkaç: düşeyle θ açısında top, ivme bileşenleri
function sarkac(): { en: number; boy: number; icerik: string } {
  const [ax, ay] = [200, 40];
  let p = zemin(110, 290, 22, 10);
  const [bx, by] = uc(ax, ay, 170, 270 - 20);
  p += ip(ax, ay, bx, by) + kesik(ax, ay, ax, 220) + aciYayi(ax, ay, 46, 250, 270, "20°", 14);
  p += daire(bx, by, 10, "sk-turuncu-d");
  p += ok(bx, by, ...uc(bx, by, 60, 70), "mavi") + yazi(...uc(bx, by, 74, 64), "a_r", { kucuk: true });
  p += ok(bx, by, ...uc(bx, by, 50, 160 + 180), "kirmizi") + yazi(...uc(bx, by, 66, 346), "a_t", { kucuk: true });
  p += ok(bx, by, bx, by + 50, "yesil") + yazi(bx - 18, by + 46, "mg", { kucuk: true });
  p += yazi(bx - 44, by - 10, "v = 1,5 m/s", { kucuk: true, hiza: "end" });
  return { en: 400, boy: 250, icerik: p };
}

// Üç dinamometre düzeneği
function dinamometreler(): { en: number; boy: number; icerik: string } {
  const terazi = (x: number, y: number, aci = 0) => kutu(x, y, 34, 14, { sinif: "sk-kutu2", aci });
  // (a)
  let p = `<rect x="40" y="70" width="90" height="100" class="sk-zemin"/>` + makara(40, 64, 9) + makara(130, 64, 9);
  p += ip(40, 55, 68, 55) + terazi(68, 48) + ip(102, 55, 130, 55);
  p += ip(31, 64, 31, 150) + ip(139, 64, 139, 150) + daire(31, 160, 10, "sk-turuncu-d") + daire(139, 160, 10, "sk-turuncu-d");
  p += yazi(85, 194, "(a)", { kucuk: true }) + yazi(31, 182, "5 kg", { kucuk: true }) + yazi(139, 182, "5 kg", { kucuk: true });
  // (b)
  p += zemin(170, 250, 20, 8) + ip(210, 28, 210, 46) + kutu(203, 46, 14, 34, { sinif: "sk-kutu2" }) + ip(210, 80, 210, 92);
  p += makara(210, 104, 12) + ip(198, 104, 198, 150) + ip(222, 104, 222, 150);
  p += kutu(184, 150, 26, 24) + kutu(212, 150, 26, 24) + yazi(210, 194, "(b)", { kucuk: true }) + yazi(186, 182, "5 kg", { kucuk: true }) + yazi(236, 182, "5 kg", { kucuk: true });
  // (c)
  const { sekil, nokta } = egikDuzlem(266, 180, 120, 30);
  p += sekil + aciYayi(266, 180, 26, 0, 30, "30°", 12);
  p += egikBlok(nokta(0.25), 30, 20, 16, undefined);
  const [bx, by] = uc(...nokta(0.25), 8, 120);
  const [tx, ty] = uc(bx, by, 36, 30);
  p += ip(...uc(bx, by, 20, 30), tx, ty);
  p += kutu(tx, ty - 6, 28, 12, { sinif: "sk-kutu2", aci: 30 });
  const [ux, uy] = uc(tx, ty, 28, 30);
  p += ip(ux, uy, ...nokta(1)) + cizgi(...nokta(1), nokta(1)[0], nokta(1)[1] - 14);
  p += yazi(326, 194, "(c)", { kucuk: true }) + yazi(276, 140, "5 kg", { kucuk: true });
  return { en: 400, boy: 210, icerik: p };
}

// Yan yana üç blok ve soldaki bloğa F
function ucBlok(kutleler: [string, string, string], kuvvet: string): { en: number; boy: number; icerik: string } {
  const yer = 170;
  let p = zemin(20, 380, yer);
  p += kutu(140, yer - 44, 60, 44, { etiket: kutleler[0] }) + kutu(200, yer - 60, 60, 60, { etiket: kutleler[1] }) + kutu(260, yer - 78, 70, 78, { etiket: kutleler[2] });
  p += ok(40, yer - 22, 138, yer - 22, "mavi") + yazi(70, yer - 38, kuvvet, { kucuk: true });
  return { en: 400, boy: 200, icerik: p };
}

// ---------------------------------------------------------------- liste

function g(kod: string, baslik: string, aciklama: string, c: { en: number; boy: number; icerik: string }): Gorsel {
  return { kod, baslik, aciklama, ...c };
}

export const SORU_SEKILLERI: Gorsel[] = [
  g("G-S2-01", "Dört vektör", "A: 10 birim, y ekseninden 30° sağda. B: 6 birim, y ekseninden 53° solda. C: 8 birim, -x ekseninden 25° aşağıda. D: 3 birim, -y yönünde.",
    vektorler([
      { ad: "A", boy: "10", aci: 60, yay: { eksen: 90, etiket: "30°" } },
      { ad: "B", boy: "6", aci: 143, yay: { eksen: 90, etiket: "53°" } },
      { ad: "C", boy: "8", aci: 205, yay: { eksen: 180, etiket: "25°" } },
      { ad: "D", boy: "3", aci: 270 },
    ])),
  g("G-S2-02", "A ve B vektörleri", "A: 5 birim, x ekseniyle 53°. B: 8 birim, -x ekseninden 37° aşağıda.",
    vektorler([
      { ad: "A", boy: "5", aci: 53, yay: { eksen: 0, etiket: "53°" } },
      { ad: "B", boy: "8", aci: 217, yay: { eksen: 180, etiket: "37°" } },
    ])),
  g("G-S2-03", "A, B ve C vektörleri", "A: 3 birim, -y yönünde. B: 5 birim, y ekseninden 37° sağda. C: 4 birim, -x ekseninden 30° aşağıda.",
    vektorler([
      { ad: "A", boy: "3", aci: 270 },
      { ad: "B", boy: "5", aci: 53, yay: { eksen: 90, etiket: "37°" } },
      { ad: "C", boy: "4", aci: 210, yay: { eksen: 180, etiket: "30°" } },
    ])),
  g("G-S2-04", "xy-düzleminde a ve b", "z ekseni yukarıda. a vektörü y ekseninden 23° x'e doğru, b vektörü x ekseninden 30° y'ye doğru; ikisi de xy-düzleminde.", ucBoyut()),
  g("G-S2-05", "P, Q ve S vektörleri", "P: 10 birim, x ekseniyle 37°. Q: 5 birim, -x yönünde. S: 6 birim, -y yönünde.",
    vektorler([
      { ad: "P", boy: "10", aci: 37, yay: { eksen: 0, etiket: "37°" } },
      { ad: "Q", boy: "5", aci: 180 },
      { ad: "S", boy: "6", aci: 270 },
    ])),
  g("G-S2-06", "A ve B vektörleri", "A: 4 birim, +y yönünde. B: 5 birim, -x ekseninden 37° yukarıda.",
    vektorler([
      { ad: "A", boy: "4", aci: 90 },
      { ad: "B", boy: "5", aci: 143, yay: { eksen: 180, etiket: "37°" } },
    ])),

  g("G-S3-01", "İki top", "Yerden bir top 12 m/s ile yukarı atılırken 32 m yükseklikteki çatıdan ikinci top 4 m/s ile aşağı atılıyor. Orijin yerde, y yukarı.", ikiTop("32 m", "12 m/s", "4 m/s")),
  g("G-S3-02", "İki top", "Yerden bir top 20 m/s ile yukarı atılırken 40 m yükseklikteki çatıdan ikinci top serbest bırakılıyor. Orijin yerde, y yukarı.", ikiTop("40 m", "20 m/s", "v₀ = 0")),

  g("G-S4-01", "Duvara atılan top", "Top 9 m ötedeki duvara yatayla 53° açıyla atılıyor ve duvara yerden 7 m yükseklikte çarpıyor.", duvaraAtis("9 m", "7 m", 53)),
  g("G-S4-02", "Uçurumdan atlayan motosiklet", "Motosiklet 20 m yüksekliğindeki uçurumdan yatay hızla atlıyor, 9 m genişliğindeki nehrin öte yakasına geçmek istiyor.", ucurum("20 m", "9 m")),
  g("G-S4-03", "Çatıdan atılan top ve koşan çocuk", "Top 33 m yükseklikteki çatıdan yatayla 53° açıyla 5 m/s hızla atılıyor; binanın kapısındaki çocuk aynı anda a ivmesiyle koşmaya başlıyor.", catiVeCocuk()),
  g("G-S4-04", "Binadan eğik atış", "45 m yükseklikteki binanın tepesinden taş yatayla 30° yukarı, 20 m/s hızla atılıyor.", binadanEgik("45 m", "20 m/s", 30)),
  g("G-S4-05", "Asansör ve top", "Asansör yerden 8 m yükseklikten u hızıyla iniyor; binadan 6 m uzaktaki çocuk topu 20 m/s hızla, 53° açıyla atıyor.", asansor()),
  g("G-S4-06", "Nehirde motor", "(a) Tekne kıyıya dik tutulur, akıntı onu sürükler. (b) Tekne akıntıya karşı açıyla tutulur, yere göre hızı kıyıya dik olur.", nehir()),
  g("G-S4-07", "Nehirde bot", "Bot nehre göre kuzeye 10 km/sa, nehir doğuya 5 km/sa akıyor; bota yerden bakan gözlemcinin gördüğü hız iki vektörün toplamı.", bot()),
  g("G-S4-08", "Duvara atılan top", "Top 24 m ötedeki duvara yatayla 37° açıyla, 20 m/s hızla atılıyor; duvara hangi yükseklikte çarptığı soruluyor.", duvaraAtis("24 m", "h = ?", 37)),
  g("G-S4-09", "Uçurumdan atlayan motosiklet", "Motosiklet 5 m yüksekliğindeki uçurumdan yatay hızla atlıyor, 8 m genişliğindeki dereyi geçmek istiyor.", ucurum("5 m", "8 m")),

  g("G-S5-01", "Hokey diskine iki kuvvet", "F₁ = 5 N, x ekseninin 20° altında; F₂ = 8 N, x ekseniyle 60° yukarıda.", noktasalKuvvetler()),
  g("G-S5-02", "Asılı trafik lambası", "Lamba üç kabloyla asılı. Soldaki kablo T₁ yatayla 37°, sağdaki T₂ yatayla 53° açı yapar; T₃ lambayı taşır.", lamba(37, 53, "50 N")),
  g("G-S5-03", "Sürtünmesiz eğik düzlem", "θ eğimli sürtünmesiz eğik düzlemin tepesinde m kütleli sandık; tepeden alt uca uzaklık d.", egik({ aci: 30, blok: "m", t: 0.78, uzunluk: "d" })),
  g("G-S5-04", "Yatayla 37° çeken kuvvet", "3 kg kütleli cisim sürtünmesiz yatay düzlemde; F = 12 N kuvvet yatayla 37° yukarı çekiyor.", blokKuvvet("3 kg", "F = 12 N", 37, "sürtünmesiz")),
  g("G-S5-05", "Yatayın altında iten kuvvet", "3 kg kütleli cisim, yatayın 37° altından F = 20 N kuvvetle itiliyor; μ = 0,3.", blokKuvvet("3 kg", "F = 20 N", -37, "μ = 0,3")),
  g("G-S5-06", "Sürtünmeli eğik düzlem", "37° eğimli düzlemde 5 kg kütleli cisim; μ = 0,2.", egik({ aci: 37, blok: "5 kg", mu: "μ = 0,2" })),
  g("G-S5-07", "Masa, makara ve iki kütle", "Pürüzlü masadaki m₁ ipe bağlı; ip sürtünmesiz makaradan geçip asılı m₂'ye bağlanıyor. m₁'e yatayla θ açılı F kuvveti uygulanıyor.", masaMakara("m₁", "m₂", { etiket: "F", aci: 35 }, "μ")),
  g("G-S5-08", "İple bağlı iki blok", "Sürtünmesiz yatay düzlemde m₂ arkada, m₁ önde; m₁'e yatay F kuvveti.", ikiBlok()),
  g("G-S5-09", "Eğik düzlemde yatay kuvvet", "37° eğimli düzlemde 1 kg kütle; F = 20 N yatay kuvvet; μ = 0,3.", egik({ aci: 37, blok: "1 kg", yatayF: "F = 20 N", mu: "μ = 0,3", t: 0.55 })),
  g("G-S5-10", "Hareketli makara", "Sürtünmesiz masadaki 1 kg blok ipe bağlı; ip masanın kenarındaki makaradan geçip 2 kg bloğu taşıyan hareketli makaraya dolanıyor, ucu tavana bağlı.", hareketliMakara()),
  g("G-S5-11", "Eğik düzlem ve asılı kütle", "30° eğimli sürtünmesiz düzlemde m₁ = 7 kg; ip tepedeki makaradan geçip asılı m₂ = 5 kg'a bağlı.", egikAsili(30, "7 kg", "5 kg")),
  g("G-S5-12", "Duvara bastırılan blok", "2 kg blok duvara F = 30 N yatay kuvvetle bastırılıyor; μ = 0,5.", duvarBlok("2 kg", "F = 30 N")),
  g("G-S5-13", "Atwood aleti", "Makaradan geçen ipin iki ucunda M = 10 kg kütleler; sağdakinin üstünde m = 1 kg ek kütle.", atwood("M", "M", "m")),
  g("G-S5-14", "Eğimli viraj", "Yatayla 30° eğimli, sürtünmesiz virajda araba; normal kuvvetin yatay bileşeni merkeze yönelir.", egimliViraj()),
  g("G-S5-15", "Sallanan top", "0,5 m uzunluğundaki sicimin ucundaki top, sicim düşeyle 20° açı yaptığında 1,5 m/s hızla gidiyor.", sarkac()),
  g("G-S5-16", "Dinamometreler", "(a) İki makaradan geçen ipin uçlarında 5 kg kütleler, ortada dinamometre. (b) Tavana asılı dinamometrenin taşıdığı makaradan geçen ipin uçlarında 5 kg kütleler. (c) 30° sürtünmesiz eğik düzlemde 5 kg blok, dinamometreyle tutuluyor.", dinamometreler()),
  g("G-S5-17", "Yan yana üç blok", "Sürtünmesiz düzlemde m₁ = 2 kg, m₂ = 3 kg, m₃ = 4 kg; F = 18 N m₁'i itiyor.", ucBlok(["m₁", "m₂", "m₃"], "F = 18 N")),
  g("G-S5-18", "Simetrik asılı lamba", "40 N ağırlığındaki lamba, yatayla 30° açı yapan iki eş kabloyla asılı.", lamba(30, 30, "40 N")),
  g("G-S5-19", "Sürtünmesiz eğik düzlem", "30° eğimli sürtünmesiz düzlemin tepesinde blok; eğik yüzey boyunca uzunluk 10 m.", egik({ aci: 30, blok: "m", t: 0.8, uzunluk: "10 m" })),
  g("G-S5-20", "Sürtünmeli eğik düzlem", "37° eğimli düzlemde 2 kg blok; μ = 0,5.", egik({ aci: 37, blok: "2 kg", mu: "μ = 0,5" })),
  g("G-S5-21", "Yatayla 53° çeken kuvvet", "2 kg blok sürtünmesiz yatay düzlemde; F = 10 N kuvvet yatayla 53° yukarı çekiyor.", blokKuvvet("2 kg", "F = 10 N", 53, "sürtünmesiz")),
  g("G-S5-22", "Masa ve asılı kütle", "Sürtünmesiz masadaki 3 kg blok, makaradan geçen iple asılı 2 kg bloğa bağlı.", masaMakara("3 kg", "2 kg")),
  g("G-S5-23", "Eğik düzlem ve asılı kütle", "30° eğimli sürtünmesiz düzlemde 4 kg blok; ip tepedeki makaradan geçip asılı 4 kg bloğa bağlı.", egikAsili(30, "4 kg", "4 kg")),
  g("G-S5-24", "Duvara bastırılan blok", "4 kg blok duvara F = 100 N yatay kuvvetle bastırılıyor; μ = 0,5.", duvarBlok("4 kg", "F = 100 N")),
  g("G-S5-25", "Atwood aleti", "Makaradan geçen ipin bir ucunda 3 kg, öbür ucunda 2 kg kütle.", atwood("3 kg", "2 kg")),
  g("G-S5-26", "Yan yana üç blok", "Sürtünmesiz düzlemde 1 kg, 2 kg ve 3 kg bloklar; F = 24 N soldaki bloğu itiyor.", ucBlok(["1 kg", "2 kg", "3 kg"], "F = 24 N")),
];

