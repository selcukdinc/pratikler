// Eski alan adları (girisimcilik.selcukdinc.dev gibi) artık yalnızca yönlendirir:
// pratikler çatı adresinin yolunda açılır (pratikler.selcukdinc.dev/girisimcilik).
// Yönlendirme tarayıcıda yapılır; sayfa statik dosyalardan geldiği için Worker'a
// istek harcanmaz. Oturum çerezi .selcukdinc.dev alanında olduğundan hesap ve misafir
// ilerlemesi kendiliğinden gelir; tarayıcıda duran tercihler ve taslaklar (ders
// ilerlemesi, simülasyon projesi, betikler) ilk yönlendirmede adresin # kısmında
// taşınır (# sunucuya gitmez) ve yeni adreste, orada olmayan anahtarlara yazılır.
//
// main.tsx bu dosyayı ilk sırada içe aktarır: taşınanlar, onları okuyan öbür
// dosyalardan (tema, ölçek, ders ilerlemesi) önce yerine konmuş olur.
import { ANA_ALAN, CATI_ALT, eskiAdresinYenisi } from "../../icerik/index";

const EK = "#aktar=";
const TASINDI = "pratikler:tasindi";
// Bu tarayıcıya özgü, taşınmayacak anahtarlar
const TASINMAZ = new Set([TASINDI, "pratikler:yerel-pratik"]);
// Adresin uzunluğu tarayıcıdan tarayıcıya sınırlıdır; sığmayan büyük kayıtlar geride kalır
const SINIR = 60_000;

export interface Tasinan {
  // Eski adresteki # kısmı (#/sorular gibi eski bağlantılar)
  h?: string;
  // localStorage kayıtları
  k: Record<string, string>;
}

type Depo = Pick<Storage, "getItem" | "setItem" | "key" | "length">;

// Küçükten büyüğe, sınıra sığdığı kadar kayıt
export function tasinacaklar(depo: Depo, sinir = SINIR): Record<string, string> {
  const hepsi: [string, string][] = [];
  for (let i = 0; i < depo.length; i++) {
    const a = depo.key(i);
    const v = a === null ? null : depo.getItem(a);
    if (a !== null && v !== null && !TASINMAZ.has(a)) hepsi.push([a, v]);
  }
  hepsi.sort((x, y) => x[0].length + x[1].length - (y[0].length + y[1].length));
  const k: Record<string, string> = {};
  let boy = 0;
  for (const [a, v] of hepsi) {
    boy += encodeURIComponent(JSON.stringify([a, v])).length;
    if (boy > sinir) break;
    k[a] = v;
  }
  return k;
}

export const tasimaEki = (t: Tasinan) => EK + encodeURIComponent(JSON.stringify(t));

export function tasimaOku(hash: string): Tasinan | null {
  if (!hash.startsWith(EK)) return null;
  try {
    const t = JSON.parse(decodeURIComponent(hash.slice(EK.length))) as Tasinan;
    if (!t || typeof t.k !== "object" || t.k === null) return null;
    return { h: typeof t.h === "string" && t.h.startsWith("#") ? t.h : undefined, k: t.k };
  } catch {
    return null;
  }
}

// Yeni adreste zaten bulunan kayıt ezilmez: iki eski siteden gelen ortak bir tercih
// (yazı boyutu gibi) ilk gelenin değerinde kalır
export function tasinaniYaz(depo: Depo, k: Record<string, string>) {
  for (const [a, v] of Object.entries(k)) {
    if (typeof v === "string" && !TASINMAZ.has(a) && depo.getItem(a) === null) depo.setItem(a, v);
  }
}

// Eski alan adındaysa yeni adrese gider (true döner, sayfa çizilmez)
function yonlendir(): boolean {
  if (typeof location === "undefined") return false;
  const hedef = eskiAdresinYenisi(location.hostname, location.pathname, location.search);
  if (!hedef) return false;
  let ek = location.hash;
  try {
    if (localStorage.getItem(TASINDI) !== "1") {
      const k = tasinacaklar(localStorage);
      if (Object.keys(k).length > 0) ek = tasimaEki({ h: location.hash || undefined, k });
      localStorage.setItem(TASINDI, "1");
    }
  } catch {
    // Depoya erişilemiyorsa yalnızca yönlenir
  }
  location.replace(hedef + ek);
  return true;
}

// Çatı adresinde, eski siteden taşınanları yerine koyar ve adresi temizler
function karsila() {
  if (typeof location === "undefined" || location.hostname !== `${CATI_ALT}.${ANA_ALAN}`) return;
  const t = tasimaOku(location.hash);
  if (!t) return;
  try {
    tasinaniYaz(localStorage, t.k);
  } catch {
    // Depo kapalıysa taşınanlar atlanır
  }
  history.replaceState(null, "", location.pathname + location.search + (t.h ?? ""));
}

export const YONLENIYOR = yonlendir();
if (!YONLENIYOR) karsila();
