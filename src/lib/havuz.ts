// Öğrencinin seçtiği soru havuzu (/havuz/<kod>). Seçim tarayıcıda pratik başına
// saklanır ve her API isteğine X-Havuz başlığıyla eklenir; sunucu soruları buna göre
// süzer. Seçim ya da çıkış sayfayı yeniden yükler, böylece önbellekteki listeler
// havuzla karışmaz.

import { PRATIK_YA_DA_KATALOG, TABAN } from "./pratik";

export interface AktifHavuz {
  kod: string;
  ad: string;
}

const anahtar = () => `pratik:${PRATIK_YA_DA_KATALOG?.id ?? "katalog"}:havuz`;

export function aktifHavuz(): AktifHavuz | null {
  if (!PRATIK_YA_DA_KATALOG) return null;
  try {
    const h = JSON.parse(localStorage.getItem(anahtar()) ?? "null") as AktifHavuz | null;
    return h && typeof h.kod === "string" && /^[a-z0-9]{6,12}$/.test(h.kod) ? h : null;
  } catch {
    return null;
  }
}

export function havuzBasligi(): Record<string, string> {
  const h = aktifHavuz();
  return h ? { "X-Havuz": h.kod } : {};
}

export function havuzaGir(h: AktifHavuz, sonra: string) {
  try {
    localStorage.setItem(anahtar(), JSON.stringify(h));
  } catch {
    // Depolama kapalıysa havuz yalnızca bu sayfada açılamaz; sessizce geç
  }
  location.assign(sonra);
}

export function havuzdanCik(sonra = location.pathname) {
  try {
    localStorage.removeItem(anahtar());
  } catch {
    // yok say
  }
  location.assign(sonra);
}

// Paylaşılacak bağlantı: pratiğin kendi adresinde /havuz/<kod> (yol tabanlı pratikte yolun altında)
export const havuzBaglantisi = (kod: string) => `${location.origin}${TABAN}/havuz/${kod}${location.search.includes("pratik=") ? location.search : ""}`;
