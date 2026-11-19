// Backlog Atölyesi'nden Sprint Simülatörü'ne köprü: atölyede kurulan backlog'u Sprint
// simülatörünün öğe ve Sprint Goal biçimine çevirir (src/scrum/motor.ts'e dokunmadan).
// Hazırlığın kalitesi oyuna yansır:
// - yatay dilim kullanıcıya değer vermez (değer 1);
// - konuşulmamış gizli bilgi, story'nin gerçek büyüklüğünü (gizli kişinin kartı) getirir;
// - kabul kriteri ya da olumsuz yolu eksik story, Review'da paydaştan düzeltme olarak geri döner.
// Aktarım yalnızca bu tarayıcıda saklanır; Agile ve Scrum pratiğinin Sprint sayfası okur.
import type { GeriBildirim, Hedef, Oge as ScrumOge } from "../scrum/motor";
import { dikeyMi, storyler, type Backlog, type Senaryo } from "./motor";

export const AKTARIM_ANAHTARI = "backlog:sprint-aktarim";

export interface Aktarim {
  surum: 1;
  backlog: ScrumOge[];
  hedefler: Hedef[];
  geriBildirim: Record<number, GeriBildirim[]>;
  // Oyuncuya gösterilen, hazırlığın oyuna nasıl yansıdığını anlatan notlar
  notlar: string[];
}

export function simulatoreAktar(b: Backlog, s: Senaryo): Aktarim {
  const backlog: ScrumOge[] = [];
  const notlar: string[] = [];
  const geriBildirim: Record<number, GeriBildirim[]> = {};
  const featurelar = new Map<string, string>();
  storyler(b).forEach((o, sira) => {
    const f = b.ogeler.find((x) => x.id === o.ust && x.tur === "feature");
    const etiket = f?.id ?? "diger";
    if (f) featurelar.set(f.id, f.baslik);
    const ad = o.spike ? o.baslik : o.baslik.trim() || o.istek?.trim() || o.id;
    if (o.spike) {
      backlog.push({ id: o.id, ad, puan: 3, deger: 2, etiket, tur: "teknik" });
      return;
    }
    const kart = s.havuz.find((k) => k.id === o.kart);
    const gizli = s.gizli.find((g) => g.kart === o.kart && !b.bulunan.includes(g.id));
    let puan = o.puan ?? kart?.puan ?? 5;
    if (gizli) {
      puan = Math.max(puan, gizli.tahmin);
      notlar.push(`${o.id}: konuşulmamış bir bilgi vardı; gerçek büyüklüğü ${puan} puan çıktı.`);
    }
    const dikey = dikeyMi(o);
    if (!dikey) notlar.push(`${o.id}: yatay dilim; bitince kullanıcıya bir şey vermiyor (değer 1).`);
    backlog.push({ id: o.id, ad, puan, deger: dikey ? 7 : 1, etiket, tur: "ozellik" });
    const kriterler = o.kriterler ?? [];
    if (kriterler.length === 0 || !kriterler.some((k) => k.olumsuz)) {
      const no = sira < 3 ? 1 : 2;
      (geriBildirim[no] ??= []).push({
        kim: "Deniz",
        metin: `"${ad}" Review'da beklenmedik bir durumda bozuldu; olumsuz yol konuşulmamıştı.`,
        oge: { id: `${o.id}-duzeltme`, ad: `Düzeltme: ${ad}`, puan: Math.max(1, Math.ceil(puan / 2)), deger: 3, etiket, tur: "hata" },
      });
      notlar.push(`${o.id}: olumsuz yolu yok; Review'da düzeltme olarak geri dönecek.`);
    }
  });
  const hedefler: Hedef[] = [...featurelar].map(([id, ad]) => ({ id, metin: `${ad} öğrencinin elinde çalışsın`, etiketler: [id] }));
  if (backlog.some((o) => o.etiket === "diger")) hedefler.push({ id: "diger", metin: "Feature'a bağlanmamış işler bitsin", etiketler: ["diger"] });
  return { surum: 1, backlog, hedefler, geriBildirim, notlar };
}

export function aktarimYaz(a: Aktarim) {
  try {
    localStorage.setItem(AKTARIM_ANAHTARI, JSON.stringify(a));
  } catch {
    // Depolama kapalı: aktarım yapılamaz
  }
}

export function aktarimOku(): Aktarim | null {
  try {
    const s = localStorage.getItem(AKTARIM_ANAHTARI);
    const a = s ? (JSON.parse(s) as Aktarim) : null;
    return a?.surum === 1 && Array.isArray(a.backlog) && a.backlog.length > 0 ? a : null;
  } catch {
    return null;
  }
}
