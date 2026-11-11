// Çatı sayfasındaki ders araması. Türkçe harfler ve büyük/küçük harf fark etmez:
// "isletme" İşletme'yi, "fızık" Fizik'i bulur. Sorgudaki her kelime dersin adında,
// alanında, açıklamasında ya da ünite başlıklarında geçmelidir; adında geçen üstte gelir.

const ESLER: Record<string, string> = { ı: "i", İ: "i", I: "i", ş: "s", Ş: "s", ğ: "g", Ğ: "g", ü: "u", Ü: "u", ö: "o", Ö: "o", ç: "c", Ç: "c", â: "a", î: "i", û: "u" };

// Harf harf çevirir; çıktının uzunluğu girdiyle aynıdır (vurgulama konumları tutsun diye)
export function duzlestir(s: string): string {
  let c = "";
  for (const h of s) c += h.length > 1 ? h : (ESLER[h] ?? h.toLowerCase().charAt(0));
  return c;
}

export const kelimeler = (sorgu: string) => duzlestir(sorgu).split(/\s+/).filter(Boolean);

export interface AranacakDers {
  ad: string;
  alan: string;
  aciklama: string;
  uniteler: string[];
}

export interface AramaSonucu<T> {
  ders: T;
  // Eşleşme yalnızca bir ünite başlığındaysa o başlık (kartta gösterilir)
  unite?: string;
}

export function dersAra<T extends AranacakDers>(dersler: T[], sorgu: string): AramaSonucu<T>[] {
  const k = kelimeler(sorgu);
  if (k.length === 0) return dersler.map((ders) => ({ ders }));
  const sonuc: { s: AramaSonucu<T>; puan: number; sira: number }[] = [];
  dersler.forEach((ders, sira) => {
    const ad = duzlestir(ders.ad);
    const ust = duzlestir(`${ders.alan} ${ders.aciklama}`);
    const uniteler = ders.uniteler.map(duzlestir);
    let puan = 0;
    let unite: string | undefined;
    for (const kel of k) {
      if (ad.startsWith(kel) || ad.includes(` ${kel}`)) puan += 4;
      else if (ad.includes(kel)) puan += 3;
      else if (ust.includes(kel)) puan += 2;
      else {
        const i = uniteler.findIndex((u) => u.includes(kel));
        if (i < 0) return;
        unite ??= ders.uniteler[i];
        puan += 1;
      }
    }
    sonuc.push({ s: unite ? { ders, unite } : { ders }, puan, sira });
  });
  return sonuc.sort((a, b) => b.puan - a.puan || a.sira - b.sira).map((x) => x.s);
}

// Metni, sorgu kelimelerinin geçtiği yerlerden böler: [düz, eşleşen, düz, ...]
export function vurguParcalari(metin: string, sorgu: string): { metin: string; vurgu: boolean }[] {
  const k = kelimeler(sorgu);
  if (k.length === 0) return [{ metin, vurgu: false }];
  const duz = duzlestir(metin);
  if (duz.length !== metin.length) return [{ metin, vurgu: false }];
  const isaret = new Array<boolean>(metin.length).fill(false);
  for (const kel of k) {
    for (let i = duz.indexOf(kel); i >= 0; i = duz.indexOf(kel, i + kel.length)) isaret.fill(true, i, i + kel.length);
  }
  const parcalar: { metin: string; vurgu: boolean }[] = [];
  for (let i = 0; i < metin.length; i++) {
    const son = parcalar[parcalar.length - 1];
    if (son && son.vurgu === isaret[i]) son.metin += metin[i];
    else parcalar.push({ metin: metin[i]!, vurgu: isaret[i]! });
  }
  return parcalar;
}
