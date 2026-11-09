// Yenilikler: kimin neyi gördüğü ve en son hangi kaydın görüldüğü.
//
// Kitle: kayıt ve maddeler herkese, akademisyene (akademisyen ve yönetici) ya da yalnızca
// yöneticiye görünür; görünecek maddesi kalmayan kayıt hiç görünmez ve rozeti saymaz.
//
// Görülen son kayıt (PR numarası) bütün pratiklerde ortaktır: hesapta (users.yenilik_goruldu),
// misafir için .selcukdinc.dev çerezinde ve bu tarayıcıda saklanır; en büyüğü geçerlidir.
// Böylece bir pratikte okunan yenilik başka pratikte yeniden "Yeni" görünmez.

import { useSyncExternalStore } from "react";
import { YENILIKLER, type Kitle } from "../yenilikler";
import type { Me } from "../../shared/api";
import { api } from "./api";

const ANAHTAR = "pratik:yenilik-goruldu";
const CEREZ = "pratikler_yenilik";
// Bu sayfa gelmeden önce siteyi kullananlara son günün değişiklikleri yeni görünür
const ILK_TABAN = 20;
export const SON_YENILIK = YENILIKLER[0]?.pr ?? 0;

// ---- Kitle ----

export function kitleGorur(rol: string | null | undefined, k: Kitle): boolean {
  if (k === "herkes") return true;
  if (k === "akademisyen") return rol === "akademisyen" || rol === "admin";
  return rol === "admin";
}

export interface GorunenYenilik {
  pr: number;
  tarih: string;
  baslik: string;
  kitle: Kitle;
  maddeler: { metin: string; kitle: Kitle }[];
}

// rol: giriş yapan üyenin rolü; misafir ve çıkış yapmış kişi için boş
export function gorunurYenilikler(rol: string | null | undefined): GorunenYenilik[] {
  return YENILIKLER.flatMap((y) => {
    const kitle = y.kitle ?? "herkes";
    const maddeler = y.maddeler
      .map((m) => (typeof m === "string" ? { metin: m, kitle } : m))
      .filter((m) => kitleGorur(rol, m.kitle));
    return maddeler.length ? [{ pr: y.pr, tarih: y.tarih, baslik: y.baslik, kitle, maddeler }] : [];
  });
}

export const uyeRolu = (me: Me | null | undefined) => (me?.kind === "member" ? me.role : null);

export const gorulmemisSayisi = (son: number, rol: string | null | undefined) => gorunurYenilikler(rol).filter((y) => y.pr > son).length;

// ---- Görülen son kayıt ----

// Çerez .selcukdinc.dev altındaki bütün pratiklerde okunur; yerelde kendi adresine yazılır
function cerezAlani(): string {
  const h = location.hostname;
  return h === "selcukdinc.dev" || h.endsWith(".selcukdinc.dev") ? "; domain=.selcukdinc.dev" : "";
}
function cerezOku(): number | null {
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${CEREZ}=(\\d+)`));
  return m ? Number(m[1]) : null;
}
function yaz(n: number) {
  try {
    localStorage.setItem(ANAHTAR, String(n));
  } catch {
    // depolama kapalı
  }
  try {
    document.cookie = `${CEREZ}=${n}; path=/; max-age=${60 * 60 * 24 * 400}; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}${cerezAlani()}`;
  } catch {
    // çerez kapalı
  }
}

function oku(): number {
  try {
    const yerel = localStorage.getItem(ANAHTAR);
    const cerez = cerezOku();
    if (yerel !== null || cerez !== null) {
      const n = Math.max(Number(yerel) || 0, cerez ?? 0);
      // Eski (yalnızca bu tarayıcıdaki) değer çereze de taşınır; diğer pratikler görür
      if (cerez !== n) yaz(n);
      return n;
    }
    // İlk kez gelen biri için her şey yenidir; rozetle karşılanmasın
    const taban = localStorage.getItem("pratik:tanitim-goruldu") === "1" ? ILK_TABAN : SON_YENILIK;
    yaz(taban);
    return taban;
  } catch {
    return SON_YENILIK;
  }
}

let goruldu: number | null = null;
const dinleyenler = new Set<() => void>();
const abone = (f: () => void) => {
  dinleyenler.add(f);
  return () => dinleyenler.delete(f);
};
const anlik = () => (goruldu ??= oku());
function ayarla(n: number) {
  goruldu = n;
  yaz(n);
  dinleyenler.forEach((f) => f());
}

export function useSonGorulen(): number {
  return useSyncExternalStore(abone, anlik);
}

// Oturum gelince hesaptakiyle birleştirilir: hesap daha ilerideyse (başka pratikte ya da
// cihazda okunmuş) rozet söner; tarayıcı daha ilerideyse hesaba yazılır.
const gonderilen = new Set<string>();
export function hesapla(me: Me | null | undefined) {
  if (me?.kind !== "member") return;
  const hesap = me.yenilikGoruldu ?? 0;
  const yerel = anlik();
  if (hesap > yerel) ayarla(hesap);
  else if (yerel > hesap && !gonderilen.has(`${me.id}:${yerel}`)) {
    gonderilen.add(`${me.id}:${yerel}`);
    void api.ayarlar.yenilik(yerel).catch(() => {});
  }
}

export function hepsiGoruldu(me?: Me | null) {
  if (anlik() < SON_YENILIK) ayarla(SON_YENILIK);
  if (me?.kind === "member" && (me.yenilikGoruldu ?? 0) < SON_YENILIK && !gonderilen.has(`${me.id}:${SON_YENILIK}`)) {
    gonderilen.add(`${me.id}:${SON_YENILIK}`);
    void api.ayarlar.yenilik(SON_YENILIK).catch(() => {});
  }
}
