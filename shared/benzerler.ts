// Aynı bilgiyi (çoğu kez başka bir kalıpla) soran sorular. Soru havuzunda
// her gruptan tek soru görünür: kişinin daha önce denediği, yoksa listede ilk
// gelen. Böylece "az önce bunu cevapladım" denen ikizler art arda çıkmaz.
// Aralıklı tekrar bu gruplara bakmaz; orada başka sayılı ikiz, kuralı yeniden
// uygulatmak için işe yarar.
const onbellek = new WeakMap<string[][], Map<string, number>>();
function gruplar(benzerler: string[][]) {
  let m = onbellek.get(benzerler);
  if (!m) onbellek.set(benzerler, (m = new Map(benzerler.flatMap((g, i) => g.map((id) => [id, i] as const)))));
  return m;
}

// Listeyi sırasını bozmadan gruplardan birer soruya indirir. denendi: kişinin
// daha önce denediği sorular; gruptan denenmiş biri varsa o kalır.
export function benzerleriAyikla<T extends { id: string }>(liste: T[], denendi: (id: string) => boolean, benzerler: string[][]): T[] {
  const GRUP = gruplar(benzerler);
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
