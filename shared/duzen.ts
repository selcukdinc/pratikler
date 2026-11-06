// MatStudio'nun (DSP) ve VHDL simülasyon alanının (FPGA) pencere düzeni.
// Paneller iki satıra dizilir; her panelin satırdaki payı (oran) ve üst satırın
// yükseklik payı (ustOran) saklanır. Kayıtlı düzenler misafirde tarayıcıda,
// üyede hesapta tutulur; her alanın düzenleri ayrıdır.

// MatStudio: editor betik, figure grafik penceresi, command komut penceresi, workspace değişkenler
// VHDL: sources dosyalar, editor kod, waves dalga ekranı, bottom mesajlar ve günlük
export type DuzenAlaniAdi = "matstudio" | "vhdl";
export type PanelId = "editor" | "figure" | "command" | "workspace" | "sources" | "waves" | "bottom";
export const ALAN_PANELLERI: Record<DuzenAlaniAdi, PanelId[]> = {
  matstudio: ["editor", "figure", "command", "workspace"],
  vhdl: ["sources", "editor", "waves", "bottom"],
};
export const PANELLER = ALAN_PANELLERI.matstudio;

export interface PanelYeri {
  id: PanelId;
  oran: number;
}

export interface Duzen {
  ust: PanelYeri[];
  alt: PanelYeri[];
  ustOran: number;
}

export interface KayitliDuzen {
  ad: string;
  duzen: Duzen;
}

export const VARSAYILAN_DUZEN: Duzen = {
  ust: [
    { id: "editor", oran: 0.45 },
    { id: "figure", oran: 0.55 },
  ],
  alt: [
    { id: "command", oran: 0.7 },
    { id: "workspace", oran: 0.3 },
  ],
  ustOran: 0.62,
};

export const VARSAYILAN_DUZENLER: Record<DuzenAlaniAdi, Duzen> = {
  matstudio: VARSAYILAN_DUZEN,
  vhdl: {
    ust: [
      { id: "sources", oran: 0.18 },
      { id: "editor", oran: 0.41 },
      { id: "waves", oran: 0.41 },
    ],
    alt: [{ id: "bottom", oran: 1 }],
    ustOran: 0.72,
  },
};

// Düzende geçen panellerden hangi alana ait olduğunu bulur (editor ikisinde de var)
function alanBul(d: Partial<Duzen>): DuzenAlaniAdi {
  const idler = [...(Array.isArray(d.ust) ? d.ust : []), ...(Array.isArray(d.alt) ? d.alt : [])].map((p) => (p as PanelYeri | null)?.id);
  return idler.some((id) => id === "sources" || id === "waves" || id === "bottom") ? "vhdl" : "matstudio";
}

export const EN_COK_DUZEN = 10;
export const DUZEN_ADI_UZUNLUK = 40;

const sinirla = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));

// Bozuk ya da eksik bir düzeni kullanılabilir hale getirir: her panel tam bir kez
// yer alır, oranlar pozitiftir. Hiçbir şey kurtarılamazsa varsayılan döner.
export function duzenDuzelt(d: unknown, alan?: DuzenAlaniAdi): Duzen {
  if (!d || typeof d !== "object") return VARSAYILAN_DUZENLER[alan ?? "matstudio"];
  const g = d as Partial<Duzen>;
  const a = alan ?? alanBul(g);
  const PANELLER = ALAN_PANELLERI[a];
  const VARSAYILAN_DUZEN = VARSAYILAN_DUZENLER[a];
  const gorulen = new Set<PanelId>();
  const satir = (s: unknown): PanelYeri[] => {
    const out: PanelYeri[] = [];
    for (const p of Array.isArray(s) ? s : []) {
      const id = (p as PanelYeri | null)?.id as PanelId;
      if (!PANELLER.includes(id) || gorulen.has(id)) continue;
      gorulen.add(id);
      const oran = Number((p as PanelYeri).oran);
      out.push({ id, oran: Number.isFinite(oran) ? sinirla(oran, 0.02, 50) : 1 });
    }
    return out;
  };
  const ust = satir(g.ust);
  const alt = satir(g.alt);
  // Eksik kalan paneller alt satıra eklenir
  for (const id of PANELLER) if (!gorulen.has(id)) alt.push({ id, oran: 1 });
  if (!ust.length && !alt.length) return VARSAYILAN_DUZEN;
  // Paylar satırda toplam 1 olacak şekilde ölçeklenir. Toplamı 1'den küçük kalan
  // bir satır (ör. bir panel taşındıktan sonra) pencereyi doldurmaz, sağda boşluk kalırdı.
  const olcekle = (s: PanelYeri[]) => {
    const t = s.reduce((a, p) => a + p.oran, 0);
    return s.map((p) => ({ ...p, oran: p.oran / t }));
  };
  const ustOran = Number(g.ustOran);
  return { ust: olcekle(ust), alt: olcekle(alt), ustOran: Number.isFinite(ustOran) ? sinirla(ustOran, 0.15, 0.9) : VARSAYILAN_DUZEN.ustOran };
}

// Sunucuya gelen kayıtlı düzen listesini denetler; hata yoksa düzeltilmiş listeyi döner
export function duzenleriDenetle(v: unknown, alan: DuzenAlaniAdi = "matstudio"): { hata: string } | { duzenler: KayitliDuzen[] } {
  if (!Array.isArray(v)) return { hata: "Düzen listesi bekleniyordu." };
  if (v.length > EN_COK_DUZEN) return { hata: `En fazla ${EN_COK_DUZEN} düzen kaydedebilirsin.` };
  const adlar = new Set<string>();
  const duzenler: KayitliDuzen[] = [];
  for (const x of v) {
    const ad = typeof x?.ad === "string" ? x.ad.trim() : "";
    if (!ad) return { hata: "Düzen adı boş olamaz." };
    if (ad.length > DUZEN_ADI_UZUNLUK) return { hata: `Düzen adı en fazla ${DUZEN_ADI_UZUNLUK} karakter olabilir.` };
    if (adlar.has(ad.toLocaleLowerCase("tr"))) return { hata: `"${ad}" adında iki düzen var.` };
    adlar.add(ad.toLocaleLowerCase("tr"));
    duzenler.push({ ad, duzen: duzenDuzelt(x.duzen, alan) });
  }
  return { duzenler };
}
