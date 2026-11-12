// Pratiğe özgü istemci içeriği: ders anlatımları, şekiller, Sanal Lab deneyleri
// ve çıkmış sınavlar. Her pratik bunları isterse icerik/<pratik>/istemci/index.ts
// dosyasında verir; sayfa açılmadan önce yalnızca o pratiğin dosyası (ayrı bir
// parça olarak) yüklenir, başka pratiklerin içeriği indirilmez.

import type { Ders } from "../dersler/tipler";
import type { Gorsel } from "../gorseller/tip";
import type { Deney } from "../lab/deneyler";
import type { CikmisSinav } from "../cikmis/sinavlar";
import { DERSLER } from "../dersler";
import { KAVRAM_BOLUMU } from "../dersler/bolumBul";
import { GORSELLER } from "../gorseller";
import { DENEYLER } from "../lab/deneyler";
import { SINAVLAR } from "../cikmis/sinavlar";
import type { ComponentType } from "react";
import type { Gorev } from "../gitsim/gorev";
import { ETKILESIMLER } from "../components/etkilesim";

export interface PratikIstemciIcerigi {
  dersler?: Ders[];
  // Ünite -> kavram -> soru kartındaki "Derste oku" bağlantısının bölümü (0'dan)
  kavramBolumu?: Record<number, Record<string, number>>;
  gorseller?: Gorsel[];
  deneyler?: Deney[];
  sinavlar?: CikmisSinav[];
  // Etkileşimli şekiller: Gorsel.etkilesim adı -> bileşen
  etkilesimler?: Record<string, ComponentType<{ g: Gorsel }>>;
  // MatStudio (tarayıcıda çalışan betik ortamı): menüde sayfası, derslerde örnekleri
  matstudio?: boolean;
  // VHDL simülasyon alanı ve kod soruları (FPGA): menüde Simülasyon sayfası
  vhdl?: boolean;
  // Git sandbox'ı (Git ve GitHub): menüde sayfası; görevler sayfa açılınca yüklenir
  gitSandbox?: () => Promise<Gorev[]>;
}

// Açık pratiğin özellikleri; menü ve sayfalar buna bakar
export const OZELLIKLER: { matstudio: boolean; vhdl: boolean; gitSandbox: (() => Promise<Gorev[]>) | null } = {
  matstudio: false,
  vhdl: false,
  gitSandbox: null,
};

const MODULLER = import.meta.glob<{ default: PratikIstemciIcerigi }>("../../icerik/*/istemci/index.ts");

// Listeleri yerinde doldurur (bileşenler aynı dizileri içe aktarır)
export function icerigiKur(i: PratikIstemciIcerigi) {
  DERSLER.splice(0, DERSLER.length, ...(i.dersler ?? []));
  for (const k of Object.keys(KAVRAM_BOLUMU)) delete KAVRAM_BOLUMU[Number(k)];
  Object.assign(KAVRAM_BOLUMU, i.kavramBolumu ?? {});
  GORSELLER.splice(0, GORSELLER.length, ...(i.gorseller ?? []));
  DENEYLER.splice(0, DENEYLER.length, ...(i.deneyler ?? []));
  SINAVLAR.splice(0, SINAVLAR.length, ...(i.sinavlar ?? []));
  for (const k of Object.keys(ETKILESIMLER)) delete ETKILESIMLER[k];
  Object.assign(ETKILESIMLER, i.etkilesimler ?? {});
  OZELLIKLER.matstudio = i.matstudio ?? false;
  OZELLIKLER.vhdl = i.vhdl ?? false;
  OZELLIKLER.gitSandbox = i.gitSandbox ?? null;
}

export async function icerikYukle(pratikId: string | null): Promise<void> {
  const yukle = pratikId ? MODULLER[`../../icerik/${pratikId}/istemci/index.ts`] : undefined;
  if (!yukle) return;
  icerigiKur((await yukle()).default);
}
