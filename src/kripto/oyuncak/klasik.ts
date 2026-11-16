// OYUNCAK · gerçek kullanım için değil. Klasik şifreler (Şifreleme pratiği, 4. ünite):
// Sezar, Vigenère, Atbaş, tek alfabeli yerine koyma ve iki raylı çit (rail fence).
// Hepsi 29 harfli Türk alfabesiyle çalışır; alfabede olmayan karakterler (boşluk,
// rakam, noktalama) olduğu gibi kalır. Soru havuzundaki meydan okumaların şifreli
// metinleri bu fonksiyonlarla sınanır (klasik.test.ts).

export const ALFABE = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
const N = ALFABE.length;

const buyut = (s: string) => s.toLocaleUpperCase("tr-TR");
const mod = (a: number, m: number) => ((a % m) + m) % m;

// Her harfi alfabedeki sırasıyla f(sıra, kaçıncı harf) kadar kaydırır
function harfHarf(metin: string, f: (i: number, k: number) => number): string {
  let k = 0;
  return [...buyut(metin)]
    .map((c) => {
      const i = ALFABE.indexOf(c);
      if (i < 0) return c;
      return ALFABE[mod(f(i, k++), N)]!;
    })
    .join("");
}

export const sezar = (metin: string, kayma: number) => harfHarf(metin, (i) => i + kayma);
export const sezarCoz = (metin: string, kayma: number) => sezar(metin, -kayma);

// Atbaş: alfabeyi ters çevirir (A <-> Z); kendisinin tersidir
export const atbas = (metin: string) => harfHarf(metin, (i) => N - 1 - i);

function anahtarSiralari(anahtar: string): number[] {
  const s = [...buyut(anahtar)].map((c) => ALFABE.indexOf(c)).filter((i) => i >= 0);
  if (!s.length) throw new Error("anahtarda alfabeden harf yok");
  return s;
}

export function vigenere(metin: string, anahtar: string): string {
  const a = anahtarSiralari(anahtar);
  return harfHarf(metin, (i, k) => i + a[k % a.length]!);
}

export function vigenereCoz(metin: string, anahtar: string): string {
  const a = anahtarSiralari(anahtar);
  return harfHarf(metin, (i, k) => i - a[k % a.length]!);
}

// Tek alfabeli yerine koyma: anahtar, ALFABE'nin bir permütasyonudur
export function yerineKoy(metin: string, anahtar: string): string {
  const a = [...buyut(anahtar)];
  if (a.length !== N || new Set(a).size !== N || a.some((c) => !ALFABE.includes(c))) throw new Error("anahtar alfabenin permütasyonu değil");
  return [...buyut(metin)].map((c) => (ALFABE.includes(c) ? a[ALFABE.indexOf(c)]! : c)).join("");
}

// Çit şifresi: harfler sırayla raylara (zikzak) dizilir, raylar art arda okunur.
// Boşluklar atılır.
export function cit(metin: string, ray: number): string {
  const harfler = [...buyut(metin).replace(/\s+/g, "")];
  const raylar: string[][] = Array.from({ length: ray }, () => []);
  const sira = citSirasi(harfler.length, ray);
  harfler.forEach((c, k) => raylar[sira[k]!]!.push(c));
  return raylar.map((r) => r.join("")).join("");
}

export function citCoz(sifreli: string, ray: number): string {
  const harfler = [...sifreli.replace(/\s+/g, "")];
  const sira = citSirasi(harfler.length, ray);
  const sayilar = Array.from({ length: ray }, (_, r) => sira.filter((x) => x === r).length);
  const raylar: string[][] = [];
  let p = 0;
  for (const s of sayilar) {
    raylar.push(harfler.slice(p, p + s));
    p += s;
  }
  return sira.map((r) => raylar[r]!.shift()!).join("");
}

function citSirasi(uzunluk: number, ray: number): number[] {
  if (ray < 2) return Array(uzunluk).fill(0);
  const devir = 2 * (ray - 1);
  return Array.from({ length: uzunluk }, (_, k) => {
    const x = k % devir;
    return x < ray ? x : devir - x;
  });
}

// Harf sıklıkları (yalnız alfabedeki harfler), çoktan aza
export function frekans(metin: string): [string, number][] {
  const say = new Map<string, number>();
  for (const c of buyut(metin)) if (ALFABE.includes(c)) say.set(c, (say.get(c) ?? 0) + 1);
  return [...say.entries()].sort((a, b) => b[1] - a[1] || ALFABE.indexOf(a[0]) - ALFABE.indexOf(b[0]));
}

// Çakışma indeksi: rastgele seçilen iki harfin aynı çıkma olasılığı
export function cakismaIndeksi(metin: string): number {
  const f = frekans(metin);
  const n = f.reduce((t, [, x]) => t + x, 0);
  if (n < 2) return 0;
  return f.reduce((t, [, x]) => t + x * (x - 1), 0) / (n * (n - 1));
}
