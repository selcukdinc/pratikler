// Aynı bilgiyi (çoğu kez başka bir kalıpla) soran sorular. Soru havuzunda
// her gruptan tek soru görünür: kişinin daha önce denediği, yoksa listede ilk
// gelen. Böylece "az önce bunu cevapladım" denen ikizler art arda çıkmaz.
// Aralıklı tekrar bu gruplara bakmaz; orada başka sayılı ikiz, kuralı yeniden
// uygulatmak için işe yarar.
export const BENZERLER: string[][] = [
  // Hız sıfırken ivme sıfır mı: iki soru aynı yanılgıyı sınar
  ["u3-t08", "u3-t25"],
  // Düzgün dairesel harekette ivme var ve merkeze yönelir
  ["u4-t15", "u4-t17"],
];

const GRUP = new Map(BENZERLER.flatMap((g, i) => g.map((id) => [id, i] as const)));

// Listeyi sırasını bozmadan gruplardan birer soruya indirir. denendi: kişinin
// daha önce denediği sorular; gruptan denenmiş biri varsa o kalır.
export function benzerleriAyikla<T extends { id: string }>(liste: T[], denendi: (id: string) => boolean): T[] {
  const temsilci = new Map<number, string>();
  for (const q of liste) {
    const g = GRUP.get(q.id);
    if (g === undefined) continue;
    const onceki = temsilci.get(g);
    if (onceki === undefined || (!denendi(onceki) && denendi(q.id))) temsilci.set(g, q.id);
  }
  return liste.filter((q) => {
    const g = GRUP.get(q.id);
    return g === undefined || temsilci.get(g) === q.id;
  });
}
