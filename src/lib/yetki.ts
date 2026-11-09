// İstemcideki yetki görünümü: sunucudaki worker/yetki.ts kuralının yansıması (asıl
// denetim sunucudadır). Akademisyen yalnızca yöneticinin atadığı alanlarında
// (me.alanlar) sınav hazırlar ve soru havuzu açar; yönetici her pratikte.

import type { Me } from "../../shared/api";
import { PRATIK_YA_DA_KATALOG } from "./pratik";

export const yoneticiMi = (me: Me | null | undefined) => me?.kind === "member" && me.role === "admin";

// pratik: verilmezse açık pratik (çatıda yok)
export function sinavYetkisi(me: Me | null | undefined, pratik: string | undefined = PRATIK_YA_DA_KATALOG?.id): boolean {
  if (me?.kind !== "member") return false;
  if (me.role === "admin") return true;
  return me.role === "akademisyen" && !!pratik && (me.alanlar ?? []).includes(pratik);
}

// Akademisyen ama bu pratik alanında değil: "yöneticiye yaz" yerine alanlarını göster
export const alanDisiAkademisyen = (me: Me | null | undefined) => me?.kind === "member" && me.role === "akademisyen" && !sinavYetkisi(me);
