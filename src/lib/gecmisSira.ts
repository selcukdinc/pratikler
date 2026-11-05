// Ders kod kutusundaki çalıştırma geçmişinin sırası. Liste kullanıcının
// gördüğü sıradadır; "şimdi" en son çalıştırmadır (en büyük n), sırada
// nerede durursa dursun.

export interface Numarali {
  n: number;
}

export const enSon = <T extends Numarali>(l: T[]): T | null => (l.length ? l.reduce((a, b) => (b.n > a.n ? b : a)) : null);

// Sınırı aşınca en eski çalıştırma (en küçük n) düşer
export function ekle<T extends Numarali>(l: T[], yeni: T, sinir: number): T[] {
  let r = [...l, yeni];
  while (r.length > sinir) {
    const eski = r.reduce((a, b) => (b.n < a.n ? b : a));
    r = r.filter((c) => c !== eski);
  }
  return r;
}

export const sil = <T extends Numarali>(l: T[], n: number): T[] => l.filter((c) => c.n !== n);

// n numaralı öğeyi listedeki "hedef" konumuna taşır (taşıma öncesi listeye göre,
// 0..uzunluk; hedef öğenin önüne yerleşir)
export function tasi<T extends Numarali>(l: T[], n: number, hedef: number): T[] {
  const i = l.findIndex((c) => c.n === n);
  if (i < 0) return l;
  const r = [...l];
  const [o] = r.splice(i, 1);
  r.splice(hedef > i ? hedef - 1 : hedef, 0, o!);
  return r;
}

// Karşılaştırılacak çalıştırma: seçilen varsa o; yoksa sırada şimdikinin
// hemen solundaki, o da yoksa sağındaki
export function karsilastirilan<T extends Numarali>(l: T[], secilen: number | null): T | null {
  const son = enSon(l);
  if (!son || l.length < 2) return null;
  const s = l.find((c) => c.n === secilen && c !== son);
  if (s) return s;
  const i = l.indexOf(son);
  return l[i - 1] ?? l[i + 1] ?? null;
}
