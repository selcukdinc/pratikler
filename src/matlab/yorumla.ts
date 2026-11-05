// MatStudio alt kümesi yorumlayıcısı. Betik tarayıcıda çalışır; sonsuz döngüye
// karşı adım ve süre sınırı vardır.

import { ayristir, type FonkTanim, type Hedef, type Ifade, type Komut } from "./ayristir";
import {
  bos, dogruMu, hata, karmasik, mat, matris, MatlabHatasi, metin, numel, sayi, type Deger, type Fonk, type Matris,
} from "./deger";
import { devrik, dikeyBirlestir, elemanEleman, ikiliIslem, indeksle, indisliAta, yatayBirlestir, type Indis } from "./islem";
import { adliYaz, type Bicim } from "./gosterim";
import { yeniCizim, type Cizim } from "./cizim";
import { YERLESIKLER } from "./fonksiyonlar";

class Kir {}
class Devam {}
class Don {}

export interface CalismaSonucu {
  hata: { mesaj: string; satir: number | null } | null;
}

export interface Ayarlar {
  // Çalışma süresi sınırı (ms)
  sure?: number;
  tohum?: number;
}

// Rastgele sayı üreteci (mulberry32); rng(n) ile tohumlanır
function uretec(tohum: number) {
  let a = tohum >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Yorumlayici {
  degiskenler = new Map<string, Deger>();
  fonksiyonlar = new Map<string, FonkTanim>();
  cizim: Cizim = yeniCizim();
  cikti = "";
  bicim: Bicim = "short";
  clc = false;
  rastgele: () => number;
  private normalYedek: number | null = null;
  private adim = 0;
  private baslangic = 0;
  private sure: number;
  private derinlik = 0;
  private sonBaglam: { deger: Matris; konum: number; toplam: number }[] = [];
  private satir: number | null = null;
  ticZamani = 0;

  constructor(a: Ayarlar = {}) {
    this.sure = a.sure ?? 5000;
    this.rastgele = uretec(a.tohum ?? Math.floor(Math.random() * 2 ** 32));
  }

  tohumla(t: number) {
    this.rastgele = uretec(t);
    this.normalYedek = null;
  }

  // Standart normal dağılımlı sayı (Box-Muller)
  normal(): number {
    if (this.normalYedek !== null) {
      const v = this.normalYedek;
      this.normalYedek = null;
      return v;
    }
    let u = 0;
    while (u === 0) u = this.rastgele();
    const v = this.rastgele();
    const r = Math.sqrt(-2 * Math.log(u));
    this.normalYedek = r * Math.sin(2 * Math.PI * v);
    return r * Math.cos(2 * Math.PI * v);
  }

  yaz(s: string) {
    this.cikti += s;
    if (this.cikti.length > 200_000) {
      this.cikti = this.cikti.slice(0, 200_000) + "\n... (çıktı çok uzun, kesildi)\n";
      throw new MatlabHatasi("Çıktı çok uzun. Döngü içindeki komutların sonuna ; koymayı unutmuş olabilirsin.");
    }
  }

  calistir(kaynak: string): CalismaSonucu {
    this.adim = 0;
    this.baslangic = Date.now();
    this.derinlik = 0;
    this.satir = null;
    try {
      const p = ayristir(kaynak);
      for (const [ad, f] of p.fonksiyonlar) this.fonksiyonlar.set(ad, f);
      this.blokCalistir(p.komutlar, this.degiskenler);
      return { hata: null };
    } catch (e) {
      if (e instanceof Kir || e instanceof Devam) return { hata: { mesaj: "break ya da continue yalnızca döngü içinde kullanılabilir.", satir: this.satir } };
      if (e instanceof Don) return { hata: null };
      if (e instanceof MatlabHatasi) return { hata: { mesaj: e.message, satir: e.satir ?? this.satir } };
      if (e instanceof RangeError) return { hata: { mesaj: "Çok derin özyineleme ya da çok büyük dizi.", satir: this.satir } };
      return { hata: { mesaj: `İç hata: ${(e as Error).message}`, satir: this.satir } };
    }
  }

  private say() {
    if (++this.adim % 2048 === 0 && Date.now() - this.baslangic > this.sure)
      throw new MatlabHatasi(`Çalışma ${this.sure / 1000} saniyeyi aştı ve durduruldu. Sonsuz bir döngü olabilir (while koşulu hiç yanlış olmuyor mu?).`);
  }

  // ---- Komutlar ----

  blokCalistir(komutlar: Komut[], kapsam: Map<string, Deger>) {
    for (const k of komutlar) this.komutCalistir(k, kapsam);
  }

  private komutCalistir(k: Komut, kapsam: Map<string, Deger>) {
    this.say();
    this.satir = k.satir;
    try {
      this.komutCalistir2(k, kapsam);
    } catch (e) {
      if (e instanceof MatlabHatasi && e.satir === null) e.satir = k.satir;
      throw e;
    }
  }

  private komutCalistir2(k: Komut, kapsam: Map<string, Deger>) {
    switch (k.k) {
      case "ifade": {
        const e = k.e;
        if (e.k === "ad" && kapsam.has(e.ad)) {
          if (!k.sessiz) this.yaz(adliYaz(e.ad, kapsam.get(e.ad)!, this.bicim));
          return;
        }
        const sonuc = this.degerlendir(e, kapsam, 0);
        if (sonuc.length) {
          kapsam.set("ans", sonuc[0]!);
          if (!k.sessiz) this.yaz(adliYaz("ans", sonuc[0]!, this.bicim));
        }
        return;
      }
      case "ata": {
        const v = this.tek(k.e, kapsam);
        this.ata(k.hedef, v, kapsam, k.e.k === "matris" && k.e.satirlar.length === 0);
        if (!k.sessiz) this.yaz(adliYaz(k.hedef.ad, kapsam.get(k.hedef.ad)!, this.bicim));
        return;
      }
      case "coklu": {
        const sonuc = this.degerlendir(k.e, kapsam, k.hedefler.length);
        if (sonuc.length < k.hedefler.filter(Boolean).length) hata(`Fonksiyon ${k.hedefler.length} çıktı vermiyor.`);
        k.hedefler.forEach((h, i) => {
          if (!h) return;
          if (sonuc[i] === undefined) hata(`Fonksiyon ${i + 1}. çıktıyı vermiyor.`);
          this.ata(h, sonuc[i]!, kapsam, false);
          if (!k.sessiz) this.yaz(adliYaz(h.ad, kapsam.get(h.ad)!, this.bicim));
        });
        return;
      }
      case "if": {
        for (const d of k.dallar) {
          if (dogruMu(this.tek(d.kosul, kapsam))) return this.blokCalistir(d.govde, kapsam);
        }
        if (k.degilse) this.blokCalistir(k.degilse, kapsam);
        return;
      }
      case "for": {
        const v = matris(this.tek(k.e, kapsam), "for döngüsü aralığı");
        for (let j = 0; j < v.c; j++) {
          this.say();
          const sutun = v.r === 1 ? mat(1, 1, [v.re[j]!], v.im ? [v.im[j]!] : null, v.sinif) : indeksle(v, [":", sayi(j + 1)]);
          kapsam.set(k.deg, sutun);
          try {
            this.blokCalistir(k.govde, kapsam);
          } catch (e) {
            if (e instanceof Kir) break;
            if (e instanceof Devam) continue;
            throw e;
          }
        }
        return;
      }
      case "while": {
        while (dogruMu(this.tek(k.kosul, kapsam))) {
          this.say();
          try {
            this.blokCalistir(k.govde, kapsam);
          } catch (e) {
            if (e instanceof Kir) break;
            if (e instanceof Devam) continue;
            throw e;
          }
        }
        return;
      }
      case "switch": {
        const v = matris(this.tek(k.e, kapsam));
        const esit = (d: Matris) =>
          v.sinif === "char" || d.sinif === "char"
            ? v.sinif === d.sinif && v.re.length === d.re.length && v.re.every((x, i) => x === d.re[i])
            : numel(d) > 0 && numel(v) > 0 && v.re[0] === d.re[0];
        for (const d of k.durumlar) {
          const dd = d.deger;
          // case {1, 2} desteklenmez; case [1 2] herhangi biri eşitse
          const deger = matris(this.tek(dd, kapsam));
          const tutar = deger.sinif === "char" ? esit(deger) : deger.re.some((x) => numel(v) > 0 && v.sinif !== "char" && v.re[0] === x);
          if (tutar) return this.blokCalistir(d.govde, kapsam);
        }
        if (k.diger) this.blokCalistir(k.diger, kapsam);
        return;
      }
      case "break":
        throw new Kir();
      case "continue":
        throw new Devam();
      case "return":
        throw new Don();
      case "komut": {
        const f = YERLESIKLER[k.ad];
        if (!f) hata(`'${k.ad}' tanımlı değil.`);
        f!(this, k.args.map((a) => metin(a)), 0, kapsam);
        return;
      }
    }
  }

  private ata(h: Hedef, v: Deger, kapsam: Map<string, Deger>, bosAtama: boolean) {
    if (YERLESIKLER[h.ad] && ["pi", "i", "j", "eps", "Inf", "NaN"].includes(h.ad) === false && !kapsam.has(h.ad) && h.args === null) {
      // Yerleşik bir fonksiyonun adını değişken yapmak serbest ama uyarı verilir
      if (["sum", "max", "min", "mean", "plot", "length", "size", "abs", "conv", "fft", "disp", "zeros", "ones"].includes(h.ad))
        this.yaz(`Uyarı: '${h.ad}' artık bir değişken; aynı adlı fonksiyon bu betikte kullanılamaz.\n`);
    }
    if (h.args === null) {
      kapsam.set(h.ad, v);
      return;
    }
    if (v.tur === "fonk") hata("Bir dizinin elemanına fonksiyon tutamağı atanamaz.");
    const eski = kapsam.get(h.ad);
    if (eski && eski.tur === "fonk") hata(`'${h.ad}' bir fonksiyon tutamağı; indisle atama yapılamaz.`);
    const em = (eski as Matris | undefined) ?? null;
    const ix = this.indisler(h.args, em ?? bos(), kapsam);
    kapsam.set(h.ad, indisliAta(em, ix, v as Matris, bosAtama));
  }

  private indisler(args: Ifade[], hedef: Matris, kapsam: Map<string, Deger>): Indis[] {
    return args.map((a, i) => {
      if (a.k === "ikinokta") return ":";
      this.sonBaglam.push({ deger: hedef, konum: i, toplam: args.length });
      try {
        const v = this.tek(a, kapsam);
        if (v.tur === "fonk") hata("İndis bir fonksiyon tutamağı olamaz.");
        return v as Matris;
      } finally {
        this.sonBaglam.pop();
      }
    });
  }

  // ---- İfadeler ----

  tek(e: Ifade, kapsam: Map<string, Deger>): Deger {
    const s = this.degerlendir(e, kapsam, 1);
    if (!s.length) {
      const ad = e.k === "cagri" && e.hedef.k === "ad" ? e.hedef.ad : e.k === "ad" ? e.ad : "Bu ifade";
      return hata(`${ad} bir değer döndürmüyor.`);
    }
    return s[0]!;
  }

  private sayisal(e: Ifade, kapsam: Map<string, Deger>, ne: string): Matris {
    return matris(this.tek(e, kapsam), ne);
  }

  degerlendir(e: Ifade, kapsam: Map<string, Deger>, nargout: number): Deger[] {
    switch (e.k) {
      case "sayi":
        return [e.im ? karmasik(0, e.v) : sayi(e.v)];
      case "metin":
        return [metin(e.v)];
      case "ad":
        return this.adCagir(e.ad, [], kapsam, nargout, false);
      case "cagri": {
        if (e.hedef.k === "ad") return this.adCagir(e.hedef.ad, e.args, kapsam, nargout, true);
        const v = this.tek(e.hedef, kapsam);
        return this.uygula(v, e.args, kapsam, nargout);
      }
      case "ikili": {
        if (e.op === "&&" || e.op === "||") {
          const a = this.sayisal(e.a, kapsam, `'${e.op}' işleneni`);
          if (numel(a) !== 1) hata(`'${e.op}' işlenenleri tek değer olmalı; diziler için ${e.op === "&&" ? "&" : "|"} kullan.`);
          const av = dogruMu(a);
          if (e.op === "&&" ? !av : av) return [mat(1, 1, [av ? 1 : 0], null, "logical")];
          const b = this.sayisal(e.b, kapsam, `'${e.op}' işleneni`);
          if (numel(b) !== 1) hata(`'${e.op}' işlenenleri tek değer olmalı.`);
          return [mat(1, 1, [dogruMu(b) ? 1 : 0], null, "logical")];
        }
        const a = this.sayisal(e.a, kapsam, `'${e.op}' işleneni`);
        const b = this.sayisal(e.b, kapsam, `'${e.op}' işleneni`);
        return [ikiliIslem(e.op, a, b)];
      }
      case "tekli": {
        const a = this.sayisal(e.a, kapsam, `'${e.op}' işleneni`);
        if (e.op === "-") return [mat(a.r, a.c, a.re.map((v) => -v), a.im ? a.im.map((v) => -v) : null)];
        if (e.op === "+") return [a.sinif === "char" ? { ...a, sinif: "double" } : a];
        return [mat(a.r, a.c, a.re.map((v) => (v === 0 ? 1 : 0)), null, "logical")];
      }
      case "devrik":
        return [devrik(this.sayisal(e.a, kapsam, "Devrik"), e.op === "'")];
      case "aralik": {
        const a = this.sayisal(e.bas, kapsam, "Aralık başı");
        const d = e.adim ? this.sayisal(e.adim, kapsam, "Aralık adımı") : sayi(1);
        const b = this.sayisal(e.son, kapsam, "Aralık sonu");
        if (!numel(a) || !numel(d) || !numel(b)) return [mat(1, 0, [])];
        return [aralik(a.re[0]!, d.re[0]!, b.re[0]!)];
      }
      case "matris": {
        const satirlar = e.satirlar.map((s) => yatayBirlestir(s.flatMap((x) => {
          const v = this.degerlendir(x, kapsam, 1);
          return v.map((d) => matris(d, "Köşeli parantez içindeki değer"));
        })));
        return [dikeyBirlestir(satirlar)];
      }
      case "ikinokta":
        return hata("':' yalnızca indis içinde tek başına kullanılabilir.");
      case "sonindis": {
        const b = this.sonBaglam.at(-1);
        if (!b) return hata("'end' yalnızca indis içinde kullanılabilir.");
        if (b.toplam === 1) return [sayi(numel(b.deger))];
        return [sayi(b.konum === 0 ? b.deger.r : b.konum === 1 ? b.deger.c : 1)];
      }
      case "yoksay":
        return hata("'~' burada kullanılamaz.");
      case "anonim":
        return [{ tur: "fonk", params: e.params, govde: e.govde, kapanis: new Map(kapsam), metin: e.metin }];
      case "tutamak":
        return [{ tur: "fonk", ad: e.ad, metin: `@${e.ad}` }];
    }
  }

  private adCagir(ad: string, args: Ifade[], kapsam: Map<string, Deger>, nargout: number, parantez: boolean): Deger[] {
    const v = kapsam.get(ad);
    if (v) {
      if (!parantez) return [v];
      return this.uygula(v, args, kapsam, nargout);
    }
    const degerler = args.map((a) => {
      if (a.k === "ikinokta") return metin(":");
      return this.tek(a, kapsam);
    });
    return this.fonksiyonCagir(ad, degerler, nargout, kapsam);
  }

  fonksiyonCagir(ad: string, args: Deger[], nargout: number, kapsam?: Map<string, Deger>): Deger[] {
    const kf = this.fonksiyonlar.get(ad);
    if (kf) return this.kullaniciFonk(kf, args, nargout);
    const y = YERLESIKLER[ad];
    if (y) return y(this, args, nargout, kapsam ?? this.degiskenler);
    const benzer = Object.keys(YERLESIKLER).find((k) => k.toLowerCase() === ad.toLowerCase());
    return hata(
      `'${ad}' tanımlı değil.` +
        (benzer ? ` '${benzer}' mi demek istedin? MatStudio büyük/küçük harfe duyarlıdır.` : " Değişkene kullanmadan önce bir değer ata ya da fonksiyon adını kontrol et; MatStudio'da her fonksiyon bulunmayabilir."),
    );
  }

  // Değişken bir matrisse indeksler, fonksiyon tutamağıysa çağırır
  private uygula(v: Deger, args: Ifade[], kapsam: Map<string, Deger>, nargout: number): Deger[] {
    if (v.tur === "fonk") {
      const degerler = args.map((a) => this.tek(a, kapsam));
      return this.tutamakCagir(v, degerler, nargout);
    }
    const ix = this.indisler(args, v, kapsam);
    return [indeksle(v, ix)];
  }

  tutamakCagir(f: Fonk, args: Deger[], nargout = 1): Deger[] {
    if (f.ad) return this.fonksiyonCagir(f.ad, args, nargout);
    const params = f.params ?? [];
    if (args.length > params.length) hata(`Anonim fonksiyona fazla argüman verildi (${params.length} bekleniyordu).`);
    const kapsam = new Map(f.kapanis);
    params.forEach((p, i) => args[i] && kapsam.set(p, args[i]!));
    if (++this.derinlik > 200) hata("Özyineleme çok derin (200'den fazla iç içe çağrı).");
    try {
      return this.degerlendir(f.govde as Ifade, kapsam, nargout);
    } finally {
      this.derinlik--;
    }
  }

  private kullaniciFonk(f: FonkTanim, args: Deger[], nargout: number): Deger[] {
    if (args.length > f.girdiler.length) hata(`${f.ad} en fazla ${f.girdiler.length} girdi alır.`);
    if (++this.derinlik > 200) hata("Özyineleme çok derin (200'den fazla iç içe çağrı).");
    const kapsam = new Map<string, Deger>();
    f.girdiler.forEach((p, i) => args[i] && kapsam.set(p, args[i]!));
    kapsam.set("nargin", sayi(args.length));
    kapsam.set("nargout", sayi(nargout));
    const satir = this.satir;
    try {
      this.blokCalistir(f.govde, kapsam);
    } catch (e) {
      if (!(e instanceof Don)) throw e;
    } finally {
      this.derinlik--;
      this.satir = satir;
    }
    const out: Deger[] = [];
    for (const [i, c] of f.ciktilar.entries()) {
      const v = kapsam.get(c);
      if (!v) {
        if (i < Math.max(1, nargout)) hata(`${f.ad} fonksiyonunda '${c}' çıktısına değer atanmamış.`);
        break;
      }
      out.push(v);
    }
    return out;
  }
}

export function aralik(a: number, d: number, b: number): Matris {
  if (d === 0 || (d > 0 && a > b) || (d < 0 && a < b) || Number.isNaN(a + d + b)) return mat(1, 0, []);
  const n = Math.floor((b - a) / d + 1e-10) + 1;
  if (n > 5_000_000) hata(`Aralık çok uzun (${n} eleman).`);
  const re = new Array<number>(n);
  for (let k = 0; k < n; k++) re[k] = a + k * d;
  return mat(1, n, re);
}

export { elemanEleman };
