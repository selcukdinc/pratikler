// Bu sayfanın hangi pratiğe ait olduğu. Canlıda alt alan adından bulunur
// (tipelektronigi.selcukdinc.dev); pratikler.selcukdinc.dev ve tanınmayan
// adresler katalog sayfasını açar. Yerelde ?pratik=<id> ile seçilir ve
// tarayıcıda hatırlanır (?pratik=katalog çatı sitesini açar). Yol tabanlı pratikler
// (pratikler.selcukdinc.dev/sinif6/turkce) her yerde adresin yolundan bulunur.
import { PRATIKLER, catiAdresi, hosttanPratik, pratikAdresi, pratikBul, yoldanPratik, type PratikMeta } from "../../icerik/index";

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

// Adresin yolundan seçilen pratik (yayında olmayan yol, yerel dışında çatıya düşer)
function yoldan(): PratikMeta | null {
  if (typeof location === "undefined") return null;
  const p = yoldanPratik(location.pathname);
  return p && (p.yayinda || yerelMi()) ? p : null;
}
const YOL_PRATIGI = yoldan();

function bul(): PratikMeta | null {
  if (typeof location === "undefined") return PRATIKLER[0]!;
  if (YOL_PRATIGI) return YOL_PRATIGI;
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

// Sayfanın taban yolu: yol tabanlı pratikte "/sinif6/turkce", başka her yerde "".
// Yönlendirici bütün adresleri bu tabana göre okur ve yazar (src/lib/router.ts).
export const TABAN = YOL_PRATIGI ? `/${YOL_PRATIGI.yol}` : "";

// Pratik sayfalarında kullanılır; katalogda bu sayfalar çizilmez
export const PRATIK: PratikMeta = PRATIK_YA_DA_KATALOG ?? PRATIKLER[0]!;
// Pratiğin kendi logosu (eski sitesindeki yeşil kimya şişesi gibi); çatıda ortak logo
export const LOGO = (PRATIK_YA_DA_KATALOG && PRATIK.logo) || "/logolar/pratikler.svg";
export const SITE_ADI = PRATIK_YA_DA_KATALOG ? `${PRATIK.ad} Pratik` : "Pratikler";

export const uniteBul = (no: number) => PRATIK.uniteler.find((u) => u.no === no);
// "3. ünite" / "3. hafta"
export const uniteYazi = (no: number) => `${no}. ${PRATIK.uniteAdi}`;

// Bir pratiğin ve çatı sitesinin adresi; yerelde aynı sunucuda ?pratik= ile
// Yol tabanlı pratik yerelde de kendi yolunda açılır.
export const pratikBaglantisi = (p: PratikMeta, yol = "/") =>
  p.yol && yerelMi() ? `/${p.yol}${yol === "/" ? "" : yol}` : yerelMi() ? `${yol}?pratik=${p.id}` : `${pratikAdresi(p)}${yol === "/" ? "" : yol}`;
// Tam adresle (ya da yerelde ?pratik= ile) yazılır; yol tabanlı pratikte de yönlendirici
// onu pratiğin içi saymaz ve sayfa baştan yüklenir (router.ts tamYuklemeMi)
export const catiBaglantisi = () => (yerelMi() ? "/?pratik=katalog" : catiAdresi);
