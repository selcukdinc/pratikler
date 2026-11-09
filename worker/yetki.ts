// Tüm yetki kontrolleri bu fonksiyondan geçer. Bugün tek rol var (admin her
// şeyi yapar). İleride ders asistanı ya da akademisyen eklenirse roles ve
// role_permissions tabloları eklenip sadece bu dosya değişir; "kendi eklediği
// soruyu düzenler" gibi kurallar questions.created_by ile yazılır.

import type { Me } from "../shared/api";

export type Izin =
  | "yonetim.giris"
  | "ayar.duzenle"
  | "soru.ekle"
  | "soru.duzenle"
  | "oneri.yonet"
  | "mesaj.cevapla"
  | "bildirim.yonet"
  | "kullanici.yonet"
  | "sinav.hazirla"
  | "havuz.ac";

// Akademisyen yalnızca sınav hazırlar ve öğrencilere soru havuzu açar; yönetim paneline girmez.
// Bu izinler pratiğe bağlıdır: akademisyen yalnızca yöneticinin atadığı alanlarında (me.alanlar) kullanır.
const AKADEMISYEN: Izin[] = ["sinav.hazirla", "havuz.ac"];

export function yetkisiVar(me: Me | null, izin: Izin, pratik?: string | null): boolean {
  if (me?.kind !== "member") return false;
  if (me.role === "admin") return true;
  return me.role === "akademisyen" && AKADEMISYEN.includes(izin) && !!pratik && (me.alanlar ?? []).includes(pratik);
}
