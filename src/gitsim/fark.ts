// Satır farkı (git diff çıktısı) ve üç yollu satır birleştirme (merge).
// Dosyalar küçük olduğu için en uzun ortak alt dizi (LCS) ile çalışılır.

// Satırlar sondaki "\n" ile birlikte tutulur; son satırda "\n" yoksa öyle kalır
export function satirlar(s: string): string[] {
  if (!s) return [];
  const p = s.split("\n").map((x) => x + "\n");
  if (s.endsWith("\n")) p.pop();
  else p[p.length - 1] = p[p.length - 1]!.slice(0, -1);
  return p;
}

// a[i] -> b[j] eşleşmeleri (LCS)
export function eslesmeler(a: string[], b: string[]): [number, number][] {
  const n = a.length;
  const m = b.length;
  // Ortak baş ve sonu ayırıp yalnız ortayı tabloyla çöz
  let bas = 0;
  while (bas < n && bas < m && a[bas] === b[bas]) bas++;
  let son = 0;
  while (son < n - bas && son < m - bas && a[n - 1 - son] === b[m - 1 - son]) son++;
  const A = a.slice(bas, n - son);
  const B = b.slice(bas, m - son);
  const t: number[][] = Array.from({ length: A.length + 1 }, () => new Array<number>(B.length + 1).fill(0));
  for (let i = A.length - 1; i >= 0; i--)
    for (let j = B.length - 1; j >= 0; j--) t[i]![j] = A[i] === B[j] ? t[i + 1]![j + 1]! + 1 : Math.max(t[i + 1]![j]!, t[i]![j + 1]!);
  const sonuc: [number, number][] = [];
  for (let i = 0; i < bas; i++) sonuc.push([i, i]);
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
      sonuc.push([bas + i, bas + j]);
      i++;
      j++;
    } else if (t[i + 1]![j]! >= t[i]![j + 1]!) i++;
    else j++;
  }
  for (let k = 0; k < son; k++) sonuc.push([n - son + k, m - son + k]);
  return sonuc;
}

export type FarkSatiri = { tur: " " | "-" | "+"; metin: string };

export function satirFarki(eski: string[], yeni: string[]): FarkSatiri[] {
  const e = eslesmeler(eski, yeni);
  const sonuc: FarkSatiri[] = [];
  let i = 0;
  let j = 0;
  for (const [x, y] of [...e, [eski.length, yeni.length] as [number, number]]) {
    while (i < x) sonuc.push({ tur: "-", metin: eski[i++]! });
    while (j < y) sonuc.push({ tur: "+", metin: yeni[j++]! });
    if (x < eski.length) {
      sonuc.push({ tur: " ", metin: eski[i]! });
      i++;
      j++;
    }
  }
  return sonuc;
}

// Birleşik fark parçaları (@@ -a,b +c,d @@), üç satır bağlamla
export function farkParcalari(eski: string, yeni: string, baglam = 3): string {
  const eskiSatirlar = satirlar(eski);
  const f = satirFarki(eskiSatirlar, satirlar(yeni));
  const degisen = f.map((s, i) => (s.tur === " " ? -1 : i)).filter((i) => i >= 0);
  if (!degisen.length) return "";
  // Değişiklikleri bağlamlarıyla birlikte parçalara topla
  const araliklar: [number, number][] = [];
  for (const i of degisen) {
    const bas = Math.max(0, i - baglam);
    const son = Math.min(f.length - 1, i + baglam);
    const sonA = araliklar[araliklar.length - 1];
    if (sonA && bas <= sonA[1] + 1) sonA[1] = son;
    else araliklar.push([bas, son]);
  }
  const cikti: string[] = [];
  // Her farkSatiri'nin eski ve yeni dosyadaki satır numarası
  const eskiNo: number[] = [];
  const yeniNo: number[] = [];
  let a = 0;
  let b = 0;
  for (const s of f) {
    eskiNo.push(a);
    yeniNo.push(b);
    if (s.tur !== "+") a++;
    if (s.tur !== "-") b++;
  }
  const aralik = (bas: number, sayi: number) => (sayi === 1 ? `${bas}` : `${sayi === 0 ? bas : bas},${sayi}`);
  for (const [bas, son] of araliklar) {
    const parca = f.slice(bas, son + 1);
    const eskiSayi = parca.filter((s) => s.tur !== "+").length;
    const yeniSayi = parca.filter((s) => s.tur !== "-").length;
    const eskiBas = eskiSayi === 0 ? eskiNo[bas]! : eskiNo[bas]! + 1;
    const yeniBas = yeniSayi === 0 ? yeniNo[bas]! : yeniNo[bas]! + 1;
    // Git, parçanın öncesindeki harfle başlayan son satırı başlığa ekler
    let baglamSatiri = "";
    for (let k = eskiNo[bas]! - 1; k >= 0; k--) {
      const x = eskiSatirlar[k]!;
      if (/^[A-Za-z_$]/.test(x)) {
        baglamSatiri = " " + x.replace(/\n$/, "").slice(0, 80).replace(/\s+$/, "");
        break;
      }
    }
    cikti.push(`@@ -${aralik(eskiBas, eskiSayi)} +${aralik(yeniBas, yeniSayi)} @@${baglamSatiri}`);
    for (const s of parca) {
      if (s.metin.endsWith("\n")) cikti.push(s.tur + s.metin.slice(0, -1));
      else cikti.push(s.tur + s.metin, "\\ No newline at end of file");
    }
  }
  return cikti.join("\n") + "\n";
}

export interface Birlesim {
  metin: string;
  catisma: boolean;
}

const ayni = (x: string[], y: string[]) => x.length === y.length && x.every((s, i) => s === y[i]);

// Üç yollu birleştirme (diff3). Çakışan bölgeler Git'in işaretleriyle yazılır;
// iki tarafın ortak baş ve son satırları işaretlerin dışına alınır (Git'in
// "zealous" düzeyi gibi).
export function ucYollu(taban: string, biz: string, onlar: string, bizEtiket: string, onlarEtiket: string): Birlesim {
  const o = satirlar(taban);
  const a = satirlar(biz);
  const b = satirlar(onlar);
  const ma = new Map(eslesmeler(o, a));
  const mb = new Map(eslesmeler(o, b));
  const sonuc: string[] = [];
  let catisma = false;
  let io = 0;
  let ia = 0;
  let ib = 0;
  for (;;) {
    while (io < o.length && ma.get(io) === ia && mb.get(io) === ib) {
      sonuc.push(o[io]!);
      io++;
      ia++;
      ib++;
    }
    let k = io;
    while (k < o.length && !(ma.has(k) && mb.has(k) && ma.get(k)! >= ia && mb.get(k)! >= ib)) k++;
    const ka = k < o.length ? ma.get(k)! : a.length;
    const kb = k < o.length ? mb.get(k)! : b.length;
    const O = o.slice(io, k);
    const A = a.slice(ia, ka);
    const B = b.slice(ib, kb);
    if (ayni(A, O)) sonuc.push(...B);
    else if (ayni(B, O) || ayni(A, B)) sonuc.push(...A);
    else {
      catisma = true;
      let bas = 0;
      while (bas < A.length && bas < B.length && A[bas] === B[bas]) bas++;
      let son = 0;
      while (son < A.length - bas && son < B.length - bas && A[A.length - 1 - son] === B[B.length - 1 - son]) son++;
      const nl = (x: string[]) => x.map((s, i) => (i === x.length - 1 && !s.endsWith("\n") ? s + "\n" : s));
      sonuc.push(...A.slice(0, bas));
      sonuc.push(`<<<<<<< ${bizEtiket}\n`, ...nl(A.slice(bas, A.length - son)), "=======\n", ...nl(B.slice(bas, B.length - son)), `>>>>>>> ${onlarEtiket}\n`);
      sonuc.push(...A.slice(A.length - son));
    }
    if (k >= o.length) break;
    io = k;
    ia = ka;
    ib = kb;
  }
  return { metin: sonuc.join(""), catisma };
}
