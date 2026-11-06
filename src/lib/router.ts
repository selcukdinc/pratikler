// Gerçek adreslerle çalışan küçük yönlendirici: /pratik, /sorular/<konu>,
// /profil/<ad> ... Worker bilinmeyen adreslerde index.html döner.
// Eski #/sorular gibi bağlantılar açılışta yeni adrese çevrilir.

import { useEffect, useState } from "react";
import { PRATIK_YA_DA_KATALOG } from "./pratik";

export type Route =
  | { page: "pratik" }
  | { page: "lab"; deney?: string }
  | { page: "matstudio" }
  | { page: "simulasyon" }
  | { page: "cikmis"; sinav?: string }
  | { page: "sorular"; topic?: string; hafta?: number }
  | { page: "ders"; hafta?: number }
  | { page: "ilerleme" }
  | { page: "tekrar" }
  | { page: "hakkinda" }
  | { page: "tanitim" }
  | { page: "sss" }
  | { page: "yenilikler" }
  | { page: "terimler" }
  | { page: "gizlilik" }
  | { page: "giris"; sonra?: string }
  | { page: "kayit" }
  | { page: "sifre-sifirla" }
  | { page: "profil"; ad: string }
  | { page: "ayarlar"; sekme?: AyarSekmesi }
  | { page: "oner" }
  | { page: "mesajlar"; id?: string }
  | { page: "yonetim"; bolum: YonetimBolumu; soru?: string; alt?: string }
  | { page: "sinavlar"; id?: string }
  | { page: "bulunamadi" };

export type AyarSekmesi = "profil" | "hesap" | "bildirimler" | "sil";
const AYAR_SEKMELERI: AyarSekmesi[] = ["profil", "hesap", "bildirimler", "sil"];

export type YonetimBolumu = "genel" | "pratikler" | "claude" | "sorular" | "oneriler" | "mesajlar" | "kullanicilar" | "gorseller" | "kayit";
const YONETIM_BOLUMLERI: YonetimBolumu[] = ["genel", "pratikler", "claude", "sorular", "oneriler", "mesajlar", "kullanicilar", "gorseller", "kayit"];

function parca(s: string | undefined): string | undefined {
  if (!s) return undefined;
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

export function parsePath(path: string, search = ""): Route {
  const [page, arg] = path.replace(/^\/+/, "").replace(/\/+$/, "").split("/");
  switch (page) {
    case "":
      // Pratiğin açılış sayfası (meta.anaSayfa); varsayılan karma test
      {
      const ana = PRATIK_YA_DA_KATALOG?.anaSayfa;
      return ana === "lab" ? { page: "lab" } : ana === "simulasyon" ? { page: "simulasyon" } : { page: "pratik" };
    }
    case "pratik":
      return { page: "pratik" };
    case "lab":
      return arg ? { page: "lab", deney: parca(arg) } : { page: "lab" };
    case "matstudio":
      return { page: "matstudio" };
    case "simulasyon":
      return { page: "simulasyon" };
    case "cikmis":
      return arg ? { page: "cikmis", sinav: parca(arg) } : { page: "cikmis" };
    case "sorular": {
      if (arg) return { page: "sorular", topic: parca(arg) };
      const hafta = Number(new URLSearchParams(search).get("hafta"));
      return Number.isInteger(hafta) && hafta > 0 ? { page: "sorular", hafta } : { page: "sorular", topic: undefined };
    }
    case "ders": {
      const hafta = Number(arg);
      return Number.isInteger(hafta) && hafta > 0 ? { page: "ders", hafta } : { page: "ders" };
    }
    case "ilerleme":
    case "tekrar":
    case "hakkinda":
    case "tanitim":
    case "sss":
    case "yenilikler":
    case "terimler":
    case "gizlilik":
    case "kayit":
    case "sifre-sifirla":
    case "oner":
      return { page };
    case "ayarlar":
      return AYAR_SEKMELERI.includes(arg as AyarSekmesi) && arg !== "profil" ? { page, sekme: arg as AyarSekmesi } : { page };
    case "mesajlar":
      return arg ? { page: "mesajlar", id: parca(arg) } : { page: "mesajlar" };
    case "sinavlar":
      return arg ? { page: "sinavlar", id: parca(arg) } : { page: "sinavlar" };
    case "giris": {
      // Yalnızca site içi bir yola geri dönülür
      const sonra = new URLSearchParams(search).get("sonra") ?? undefined;
      return { page: "giris", sonra: sonra?.startsWith("/") && !sonra.startsWith("//") ? sonra : undefined };
    }
    case "profil":
      return arg ? { page: "profil", ad: parca(arg)! } : { page: "bulunamadi" };
    case "yonetim": {
      // /yonetim, /yonetim/sorular, /yonetim/sorular/<kimlik ya da "yeni">
      const bolum = (arg ?? "genel") as YonetimBolumu;
      if (!YONETIM_BOLUMLERI.includes(bolum)) return { page: "bulunamadi" };
      const ucuncu = parca(path.replace(/^\/+/, "").split("/")[2]);
      if (!ucuncu) return { page: "yonetim", bolum };
      return bolum === "sorular" ? { page: "yonetim", bolum, soru: ucuncu } : { page: "yonetim", bolum, alt: ucuncu };
    }
    default:
      return { page: "bulunamadi" };
  }
}

// Eski hash adresleri: #/pratik, #/sorular/<konu>, #/ilerleme, #/hakkinda
export function parseHash(hash: string): Route | null {
  if (!hash.startsWith("#/")) return null;
  return parsePath(hash.slice(1));
}

export function href(route: Route): string {
  switch (route.page) {
    case "sorular":
      return route.topic ? `/sorular/${encodeURIComponent(route.topic)}` : route.hafta ? `/sorular?hafta=${route.hafta}` : "/sorular";
    case "ders":
      return route.hafta ? `/ders/${route.hafta}` : "/ders";
    case "lab":
      return route.deney ? `/lab/${encodeURIComponent(route.deney)}` : "/lab";
    case "cikmis":
      return route.sinav ? `/cikmis/${encodeURIComponent(route.sinav)}` : "/cikmis";
    case "ayarlar":
      return route.sekme && route.sekme !== "profil" ? `/ayarlar/${route.sekme}` : "/ayarlar";
    case "profil":
      return `/profil/${encodeURIComponent(route.ad)}`;
    case "yonetim": {
      const ek = route.soru ?? route.alt;
      return `/yonetim${route.bolum === "genel" ? "" : `/${route.bolum}`}${ek ? `/${encodeURIComponent(ek)}` : ""}`;
    }
    case "mesajlar":
      return route.id ? `/mesajlar/${encodeURIComponent(route.id)}` : "/mesajlar";
    case "sinavlar":
      return route.id ? `/sinavlar/${encodeURIComponent(route.id)}` : "/sinavlar";
    case "giris":
      return route.sonra ? `/giris?sonra=${encodeURIComponent(route.sonra)}` : "/giris";
    case "bulunamadi":
      return "/";
    default:
      return `/${route.page}`;
  }
}

const OLAY = "fp:gezinti";

export function navigate(to: string | Route, { replace = false } = {}) {
  const url = typeof to === "string" ? to : href(to);
  if (replace) history.replaceState(null, "", url);
  else history.pushState(null, "", url);
  window.dispatchEvent(new Event(OLAY));
  if (!replace) window.scrollTo(0, 0);
}

// Site içi <a href="/..."> tıklamalarını sayfa yenilemeden karşılar
function tiklama(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = (e.target as Element | null)?.closest?.("a");
  // data-tam-sayfa: Cloudflare Access gibi sunucu tarafı bir kapıdan geçmesi gereken sayfalar tam yüklenir
  if (!a || a.target || a.hasAttribute("download") || a.hasAttribute("data-tam-sayfa")) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || url.pathname.startsWith("/api/") || /\.\w+$/.test(url.pathname)) return;
  // Aynı sayfadaki #bölüm bağlantıları tarayıcıya bırakılır: kaydırmayı ve adresi o yapar
  if (url.hash && url.pathname + url.search === location.pathname + location.search) return;
  e.preventDefault();
  if (url.pathname + url.search !== location.pathname + location.search) navigate(url.pathname + url.search + url.hash);
}

function mevcut(): Route {
  return parsePath(location.pathname, location.search);
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => {
    const eski = parseHash(location.hash);
    if (eski) history.replaceState(null, "", href(eski));
    return mevcut();
  });
  useEffect(() => {
    const onChange = () => setRoute(mevcut());
    window.addEventListener("popstate", onChange);
    window.addEventListener(OLAY, onChange);
    document.addEventListener("click", tiklama);
    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener(OLAY, onChange);
      document.removeEventListener("click", tiklama);
    };
  }, []);
  return route;
}
