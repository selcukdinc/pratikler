// İki kod arasındaki değişikliğin kısa özeti: çalıştırma geçmişinde her
// çıktının yanında "neyi değiştirmiştim?" sorusunu cevaplar.

const KISA = 48;
const kisalt = (s: string) => (s.length > KISA ? `${s.slice(0, KISA - 1)}…` : s);

export function kodFarki(eski: string, yeni: string): string {
  if (eski === yeni) return "kod aynı";
  const a = eski.split("\n");
  const b = yeni.split("\n");
  // Baştan ve sondan aynı kalan satırlar atılır; arada kalan değişmiştir
  let bas = 0;
  while (bas < a.length && bas < b.length && a[bas] === b[bas]) bas++;
  let son = 0;
  while (son < a.length - bas && son < b.length - bas && a[a.length - 1 - son] === b[b.length - 1 - son]) son++;
  const degisen = b.slice(bas, b.length - son);
  const silinen = a.length - bas - son;
  if (!degisen.length) return `${bas + 1}. satır silindi${silinen > 1 ? ` (+${silinen - 1})` : ""}`;
  const ilk = degisen.find((s) => s.trim()) ?? degisen[0]!;
  const no = bas + degisen.indexOf(ilk) + 1;
  const ek = degisen.length > 1 ? ` (+${degisen.length - 1} satır)` : "";
  return `${no}. satır: ${kisalt(ilk.trim())}${ek}`;
}
