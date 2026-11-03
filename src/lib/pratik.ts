// Bu sayfanın hangi pratiğe ait olduğu. Canlıda alt alan adından bulunur
// (tipelektronigi.selcukdinc.dev); pratikler.selcukdinc.dev ve tanınmayan
// adresler katalog sayfasını açar. Yerelde ?pratik=<id> ile seçilir ve
// tarayıcıda hatırlanır (?pratik=katalog çatı sitesini açar).
import { PRATIKLER, catiAdresi, hosttanPratik, pratikAdresi, pratikBul, type PratikMeta } from "../../icerik/index";

const YEREL_ANAHTAR = "pratikler:yerel-pratik";

function yerelSecim(): string | null {
  const p = new URLSearchParams(location.search).get("pratik");
  try {
    if (p) localStorage.setItem(YEREL_ANAHTAR, p);
    return p ?? localStorage.getItem(YEREL_ANAHTAR);
  } catch {
    return p;
  }
}

const yerelMi = () =>
  typeof location !== "undefined" &&
  (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname.endsWith(".workers.dev"));

function bul(): PratikMeta | null {
  if (typeof location === "undefined") return PRATIKLER[0]!;
  if (yerelMi()) {
    const secim = yerelSecim();
    if (secim === "katalog") return null;
    return pratikBul(secim) ?? PRATIKLER.find((p) => p.yayinda) ?? PRATIKLER[0]!;
  }
  const p = hosttanPratik(location.hostname);
  return p && p.yayinda ? p : null;
}

// null: çatı sitesi (katalog). Sayfa ömrü boyunca değişmez.
export const PRATIK_YA_DA_KATALOG: PratikMeta | null = bul();

// Pratik sayfalarında kullanılır; katalogda bu sayfalar çizilmez
export const PRATIK: PratikMeta = PRATIK_YA_DA_KATALOG ?? PRATIKLER[0]!;
export const SITE_ADI = PRATIK_YA_DA_KATALOG ? `${PRATIK.ad} Pratik` : "Pratikler";

export const uniteBul = (no: number) => PRATIK.uniteler.find((u) => u.no === no);
// "3. ünite" / "3. hafta"
export const uniteYazi = (no: number) => `${no}. ${PRATIK.uniteAdi}`;

// Bir pratiğin ve çatı sitesinin adresi; yerelde aynı sunucuda ?pratik= ile
export const pratikBaglantisi = (p: PratikMeta) => (yerelMi() ? `/?pratik=${p.id}` : pratikAdresi(p));
export const catiBaglantisi = () => (yerelMi() ? "/?pratik=katalog" : catiAdresi);
