// Sözcüklerden sözdizimi ağacı kurar.

import { MatlabHatasi } from "./deger";
import { sozcukle, type Sozcuk } from "./sozcuk";

export type Ifade =
  | { k: "sayi"; v: number; im: boolean }
  | { k: "metin"; v: string }
  | { k: "ad"; ad: string }
  | { k: "cagri"; hedef: Ifade; args: Ifade[] }
  | { k: "ikili"; op: string; a: Ifade; b: Ifade }
  | { k: "tekli"; op: string; a: Ifade }
  | { k: "devrik"; op: string; a: Ifade }
  | { k: "aralik"; bas: Ifade; adim: Ifade | null; son: Ifade }
  | { k: "matris"; satirlar: Ifade[][] }
  | { k: "ikinokta" }
  | { k: "sonindis" }
  | { k: "yoksay" }
  | { k: "anonim"; params: string[]; govde: Ifade; metin: string }
  | { k: "tutamak"; ad: string };

export type Hedef = { ad: string; args: Ifade[] | null };

export type Komut =
  | { k: "ifade"; e: Ifade; sessiz: boolean; satir: number }
  | { k: "ata"; hedef: Hedef; e: Ifade; sessiz: boolean; satir: number }
  | { k: "coklu"; hedefler: (Hedef | null)[]; e: Ifade; sessiz: boolean; satir: number }
  | { k: "if"; dallar: { kosul: Ifade; govde: Komut[] }[]; degilse: Komut[] | null; satir: number }
  | { k: "for"; deg: string; e: Ifade; govde: Komut[]; satir: number }
  | { k: "while"; kosul: Ifade; govde: Komut[]; satir: number }
  | { k: "switch"; e: Ifade; durumlar: { deger: Ifade; govde: Komut[] }[]; diger: Komut[] | null; satir: number }
  | { k: "break"; satir: number }
  | { k: "continue"; satir: number }
  | { k: "return"; satir: number }
  | { k: "komut"; ad: string; args: string[]; sessiz: boolean; satir: number };

export interface FonkTanim {
  ad: string;
  girdiler: string[];
  ciktilar: string[];
  govde: Komut[];
}

export interface Program {
  komutlar: Komut[];
  fonksiyonlar: Map<string, FonkTanim>;
}

// "hold on", "grid off", "close all" gibi komut sözdizimi kullanılan adlar
const KOMUTLAR = new Set(["hold", "grid", "close", "clear", "clc", "format", "axis", "figure", "clf", "more", "warning", "disp", "box", "pkg", "rng", "legend", "who", "whos"]);

export function ayristir(kaynak: string): Program {
  const s = sozcukle(kaynak);
  let i = 0;
  let indisDerinlik = 0;
  const bak = (k = 0) => s[Math.min(i + k, s.length - 1)]!;
  const op = (v: string, k = 0) => bak(k).t === "op" && bak(k).v === v;
  const anahtar = (v: string) => bak().t === "anahtar" && bak().v === v;
  const hataVer = (m: string, z: Sozcuk = bak()): never => {
    throw new MatlabHatasi(m, z.satir);
  };
  const tuket = (v: string, aciklama?: string) => {
    if (!op(v)) hataVer(aciklama ?? `'${v}' bekleniyordu, '${bak().v || "satır sonu"}' bulundu.`);
    i++;
  };
  const ayiriciAtla = () => {
    while (bak().t === "yeni" || op(";") || op(",")) i++;
  };

  // ---- İfadeler ----

  const ifade = (): Ifade => veyaveya();
  const ikiliZincir = (alt: () => Ifade, oplar: string[]) => () => {
    let a = alt();
    while (bak().t === "op" && oplar.includes(bak().v)) {
      const o = s[i++]!.v;
      a = { k: "ikili", op: o, a, b: alt() };
    }
    return a;
  };
  const karsilastir = (): Ifade => {
    let a = aralik();
    while (bak().t === "op" && ["==", "~=", "<", "<=", ">", ">="].includes(bak().v)) {
      const o = s[i++]!.v;
      a = { k: "ikili", op: o, a, b: aralik() };
    }
    return a;
  };
  const ve = ikiliZincir(karsilastir, ["&"]);
  const veya = ikiliZincir(ve, ["|"]);
  const veve = ikiliZincir(veya, ["&&"]);
  const veyaveya = ikiliZincir(veve, ["||"]);

  function aralik(): Ifade {
    const bas = toplama();
    if (!op(":")) return bas;
    // İndis içinde "x(2:end)" ya da tek başına ":" değil
    i++;
    const b = toplama();
    if (op(":")) {
      i++;
      const c = toplama();
      return { k: "aralik", bas, adim: b, son: c };
    }
    return { k: "aralik", bas, adim: null, son: b };
  }
  function toplama(): Ifade {
    let a = carpma();
    while (op("+") || op("-")) {
      const o = s[i++]!.v;
      a = { k: "ikili", op: o, a, b: carpma() };
    }
    return a;
  }
  function carpma(): Ifade {
    let a = tekli();
    while (bak().t === "op" && ["*", "/", "\\", ".*", "./", ".\\"].includes(bak().v)) {
      const o = s[i++]!.v;
      a = { k: "ikili", op: o, a, b: tekli() };
    }
    return a;
  }
  function tekli(): Ifade {
    if (op("-") || op("+") || op("~")) {
      const o = s[i++]!.v;
      // [a, ~] = f(x): yok sayılan çıktı
      if (o === "~" && (op(",") || op("]"))) return { k: "yoksay" };
      return { k: "tekli", op: o, a: tekli() };
    }
    return us();
  }
  function usIslenen(): Ifade {
    if (op("-") || op("+") || op("~")) {
      const o = s[i++]!.v;
      return { k: "tekli", op: o, a: usIslenen() };
    }
    return sonek();
  }
  function us(): Ifade {
    let a = sonek();
    while (op("^") || op(".^")) {
      const o = s[i++]!.v;
      a = { k: "ikili", op: o, a, b: usIslenen() };
    }
    return a;
  }
  function sonek(): Ifade {
    let a = birincil();
    for (;;) {
      if (op("(")) {
        i++;
        a = { k: "cagri", hedef: a, args: argumanlar(")") };
      } else if (op("'") || op(".'")) {
        a = { k: "devrik", op: s[i++]!.v, a };
      } else if (op("{")) {
        hataVer("Hücre dizileri ({ }) desteklenmiyor.");
      } else if (op(".") && bak(1).t === "ad") {
        hataVer("Yapılar (struct, a.b) desteklenmiyor.");
      } else return a;
    }
  }

  function argumanlar(kapanis: string): Ifade[] {
    const args: Ifade[] = [];
    indisDerinlik++;
    if (op(kapanis)) {
      i++;
      indisDerinlik--;
      return args;
    }
    for (;;) {
      if (op(":") && (op(",", 1) || op(kapanis, 1))) {
        i++;
        args.push({ k: "ikinokta" });
      } else args.push(ifade());
      if (op(",")) {
        i++;
        continue;
      }
      tuket(kapanis, `Fonksiyon ya da indis argümanlarında '${kapanis}' bekleniyordu.`);
      break;
    }
    indisDerinlik--;
    return args;
  }

  function birincil(): Ifade {
    const z = bak();
    if (z.t === "sayi") {
      i++;
      return { k: "sayi", v: z.n!, im: !!z.im };
    }
    if (z.t === "metin") {
      i++;
      return { k: "metin", v: z.v };
    }
    if (z.t === "ad") {
      i++;
      return { k: "ad", ad: z.v };
    }
    if (z.t === "anahtar" && z.v === "end" && indisDerinlik > 0) {
      i++;
      return { k: "sonindis" };
    }
    if (op("(")) {
      i++;
      const d = indisDerinlik;
      indisDerinlik = 0;
      const e = ifade();
      indisDerinlik = d;
      tuket(")");
      return e;
    }
    if (op("[")) {
      i++;
      return matrisIfadesi();
    }
    if (op("@")) {
      i++;
      if (bak().t === "ad") return { k: "tutamak", ad: s[i++]!.v };
      tuket("(", "@ işaretinden sonra bir fonksiyon adı ya da (parametreler) bekleniyordu.");
      const params: string[] = [];
      while (!op(")")) {
        if (bak().t !== "ad") hataVer("Anonim fonksiyon parametreleri ad olmalı.");
        params.push(s[i++]!.v);
        if (op(",")) i++;
      }
      i++;
      const bas = i;
      const d = indisDerinlik;
      indisDerinlik = 0;
      const govde = ifade();
      indisDerinlik = d;
      const metin = `@(${params.join(",")}) ${s.slice(bas, i).map((x) => (x.t === "metin" ? `'${x.v}'` : x.v)).join(" ")}`;
      return { k: "anonim", params, govde, metin };
    }
    if (z.t === "son" || z.t === "yeni") hataVer("İfade eksik: satır yarıda bitmiş.");
    return hataVer(`Beklenmeyen '${z.v}'.`);
  }

  function matrisIfadesi(): Ifade {
    const satirlar: Ifade[][] = [];
    let satir: Ifade[] = [];
    const d = indisDerinlik;
    indisDerinlik = 0;
    for (;;) {
      if (op("]")) {
        i++;
        break;
      }
      if (op(",")) {
        i++;
        continue;
      }
      if (op(";")) {
        i++;
        if (satir.length) satirlar.push(satir);
        satir = [];
        continue;
      }
      if (bak().t === "son") hataVer("Köşeli parantez kapanmamış.");
      satir.push(ifade());
    }
    if (satir.length) satirlar.push(satir);
    indisDerinlik = d;
    return { k: "matris", satirlar };
  }

  // ---- Komutlar ----

  const sonlandir = (): boolean => {
    // Komutun ardından ; gelirse çıktı yazılmaz
    if (op(";")) {
      i++;
      return true;
    }
    if (op(",")) {
      i++;
      return false;
    }
    if (bak().t === "yeni") {
      i++;
      return false;
    }
    if (bak().t === "son" || bak().t === "anahtar") return false;
    return hataVer(`Komut beklenmedik yerde devam ediyor: '${bak().v}'. Bir operatör ya da virgül eksik olabilir.`);
  };

  const blok = (bitis: string[], sonOlur = false): Komut[] => {
    const govde: Komut[] = [];
    for (;;) {
      ayiriciAtla();
      if (bak().t === "son" && sonOlur) return govde;
      if (bak().t === "son") hataVer(`'end' eksik: bir if, for, while ya da switch bloğu kapanmamış.`);
      if (bak().t === "anahtar" && bitis.includes(bak().v)) return govde;
      govde.push(komut());
    }
  };

  const hedefYap = (e: Ifade, z: Sozcuk): Hedef => {
    if (e.k === "ad") return { ad: e.ad, args: null };
    if (e.k === "cagri" && e.hedef.k === "ad") return { ad: e.hedef.ad, args: e.args };
    return hataVer("Atamanın sol tarafında bir değişken adı olmalı (ör. x = ... ya da x(2) = ...).", z);
  };

  function komut(): Komut {
    const z = bak();
    const satir = z.satir;
    if (z.t === "anahtar") {
      i++;
      switch (z.v) {
        case "if": {
          const dallar = [{ kosul: ifade(), govde: blok(["elseif", "else", "end"]) }];
          let degilse: Komut[] | null = null;
          for (;;) {
            const a = s[i++]!;
            if (a.v === "elseif") dallar.push({ kosul: ifade(), govde: blok(["elseif", "else", "end"]) });
            else if (a.v === "else") degilse = blok(["end"]);
            else break;
          }
          return { k: "if", dallar, degilse, satir };
        }
        case "for": {
          const parantez = op("(");
          if (parantez) i++;
          if (bak().t !== "ad") hataVer("for'dan sonra döngü değişkeni bekleniyordu (ör. for k = 1:10).");
          const deg = s[i++]!.v;
          tuket("=", "for döngüsünde '=' bekleniyordu (ör. for k = 1:10).");
          const e = ifade();
          if (parantez) tuket(")");
          return { k: "for", deg, e, govde: (() => { const g = blok(["end"]); i++; return g; })(), satir };
        }
        case "while": {
          const kosul = ifade();
          const govde = blok(["end"]);
          i++;
          return { k: "while", kosul, govde, satir };
        }
        case "switch": {
          const e = ifade();
          ayiriciAtla();
          const durumlar: { deger: Ifade; govde: Komut[] }[] = [];
          let diger: Komut[] | null = null;
          for (;;) {
            ayiriciAtla();
            const a = s[i++]!;
            if (a.v === "case") durumlar.push({ deger: ifade(), govde: blok(["case", "otherwise", "end"]) });
            else if (a.v === "otherwise") diger = blok(["case", "otherwise", "end"]);
            else if (a.v === "end") break;
            else hataVer("switch içinde case, otherwise ya da end bekleniyordu.", a);
          }
          return { k: "switch", e, durumlar, diger, satir };
        }
        case "break":
        case "continue":
        case "return":
          sonlandir();
          return { k: z.v, satir };
        case "function":
          return hataVer("Fonksiyon tanımları betiğin sonunda olmalı.", z);
        default:
          return hataVer(`Beklenmeyen '${z.v}'. Fazladan bir 'end' olabilir.`, z);
      }
    }

    // Komut sözdizimi: hold on, grid on, close all, clc
    if (z.t === "ad" && KOMUTLAR.has(z.v)) {
      const sonraki = bak(1);
      const kelimeler = sonraki.t === "yeni" || sonraki.t === "son" || (sonraki.t === "op" && sonraki.v === ";") || (sonraki.t === "ad" && sonraki.bosluklu && !(bak(2).t === "op" && ["=", "("].includes(bak(2).v)));
      if (kelimeler && !(sonraki.t === "op")) {
        i++;
        const args: string[] = [];
        while (bak().t === "ad" || bak().t === "sayi") args.push(s[i++]!.v);
        return { k: "komut", ad: z.v, args, sessiz: sonlandir(), satir };
      }
      if (sonraki.t === "op" && sonraki.v === ";") {
        i++;
        return { k: "komut", ad: z.v, args: [], sessiz: sonlandir(), satir };
      }
    }

    // [a, b] = f(x)
    if (op("[")) {
      const bas = i;
      let coklu = false;
      try {
        i++;
        const m = matrisIfadesi();
        if (op("=") && !op("=", 1) && m.k === "matris" && m.satirlar.length <= 1) {
          i++;
          const hedefler = (m.satirlar[0] ?? []).map((e) => (e.k === "yoksay" ? null : hedefYap(e, z)));
          const e = ifade();
          coklu = true;
          return { k: "coklu", hedefler, e, sessiz: sonlandir(), satir };
        }
      } catch (h) {
        if (coklu) throw h;
      }
      i = bas;
    }

    const e = ifade();
    if (op("=")) {
      i++;
      const hedef = hedefYap(e, z);
      const sag = ifade();
      return { k: "ata", hedef, e: sag, sessiz: sonlandir(), satir };
    }
    return { k: "ifade", e, sessiz: sonlandir(), satir };
  }

  // ---- Program: betik komutları, sonra yerel fonksiyonlar ----
  const komutlar: Komut[] = [];
  const fonksiyonlar = new Map<string, FonkTanim>();
  for (;;) {
    ayiriciAtla();
    if (bak().t === "son") break;
    if (anahtar("function")) {
      i++;
      let ciktilar: string[] = [];
      let ad: string;
      if (op("[")) {
        i++;
        while (!op("]")) {
          if (bak().t === "ad") ciktilar.push(s[i].v);
          i++;
        }
        i++;
        tuket("=");
        ad = s[i++]!.v;
      } else {
        const ilk = s[i++]!.v;
        if (op("=")) {
          i++;
          ciktilar = [ilk];
          ad = s[i++]!.v;
        } else ad = ilk;
      }
      const girdiler: string[] = [];
      if (op("(")) {
        i++;
        while (!op(")")) {
          if (bak().t === "ad") girdiler.push(s[i].v);
          else if (!op(",") && !op("~")) hataVer("Fonksiyon parametreleri ad olmalı.");
          i++;
        }
        i++;
      }
      const govde = blok(["end", "function"], true);
      if (anahtar("end")) i++;
      fonksiyonlar.set(ad, { ad, girdiler, ciktilar, govde });
      continue;
    }
    if (fonksiyonlar.size) hataVer("Fonksiyon tanımlarından sonra betik komutu yazılamaz; komutları fonksiyonların üstüne taşı.");
    komutlar.push(komut());
  }
  return { komutlar, fonksiyonlar };
}
