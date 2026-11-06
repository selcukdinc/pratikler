// Tema tercihi: sistem, açık, koyu ya da kahve. index.html'deki küçük betik ilk çizimden
// önce aynı kuralı uygular; bu modül sonradan yapılan seçimleri yönetir.
// Ortak tema: tercih ".selcukdinc.dev" alanına yazılan "tema" çerezinde de durur; böylece
// bir pratikte (ya da çatıda) seçilen tema bütün pratiklerde geçerli olur. Son seçim kazanır.

import { useEffect, useState } from "react";

export type Tema = "sistem" | "acik" | "koyu" | "kahve";

const ANAHTAR = "tema";
const sistemKoyu = () => matchMedia("(prefers-color-scheme: dark)");

const gecerli = (t: string | null | undefined): t is Tema => t === "sistem" || t === "acik" || t === "koyu" || t === "kahve";

// Çerezin alanı: canlıda bütün alt alan adlarını kapsayan ana alan, yerelde sayfanın kendisi
export function cerezAlani(host: string): string | null {
  return host === "selcukdinc.dev" || host.endsWith(".selcukdinc.dev") ? ".selcukdinc.dev" : null;
}

export function cerezdenTema(cerez: string): Tema | null {
  const m = /(?:^|;\s*)tema=([a-z]+)/.exec(cerez);
  return m && gecerli(m[1]) ? m[1] : null;
}

function cerezeYaz(t: Tema) {
  const alan = cerezAlani(location.hostname);
  document.cookie = `tema=${t}; Path=/; Max-Age=31536000; SameSite=Lax${alan ? `; Domain=${alan}` : ""}${location.protocol === "https:" ? "; Secure" : ""}`;
}

function oku(): Tema {
  // Önce ortak çerez (başka bir pratikte yapılmış son seçim), sonra bu sitenin kaydı
  const c = cerezdenTema(document.cookie);
  if (c) return c;
  try {
    const t = localStorage.getItem(ANAHTAR);
    if (gecerli(t)) return t;
  } catch {
    // Gizli pencere ya da kapalı depolama: sistem ayarıyla devam
  }
  return "sistem";
}

// html data-theme değeri; renkler src/styles.css'te bu değere göre tanımlıdır
export function temaDegeri(t: Tema, sistemdeKoyu: boolean): "light" | "dark" | "kahve" {
  if (t === "kahve") return "kahve";
  return t === "koyu" || (t === "sistem" && sistemdeKoyu) ? "dark" : "light";
}

function uygula(t: Tema) {
  document.documentElement.dataset.theme = temaDegeri(t, sistemKoyu().matches);
}

export const TEMA_SIRASI: Tema[] = ["sistem", "acik", "koyu", "kahve"];
export const TEMA_ADI: Record<Tema, string> = { sistem: "Sistem", acik: "Aydınlık", koyu: "Karanlık", kahve: "Kahve" };

export function useTema(): [Tema, (t: Tema) => void] {
  const [tema, setTema] = useState<Tema>(oku);

  // Başka bir pratiğin sekmesinde tema değiştiyse bu sekmeye dönünce o tema uygulanır
  useEffect(() => {
    const don = () => {
      if (document.visibilityState !== "visible") return;
      const c = cerezdenTema(document.cookie);
      if (c) setTema(c);
    };
    document.addEventListener("visibilitychange", don);
    return () => document.removeEventListener("visibilitychange", don);
  }, []);

  useEffect(() => {
    uygula(tema);
    if (tema !== "sistem") return;
    const mq = sistemKoyu();
    const degisti = () => uygula("sistem");
    mq.addEventListener("change", degisti);
    return () => mq.removeEventListener("change", degisti);
  }, [tema]);

  const sec = (t: Tema) => {
    cerezeYaz(t);
    try {
      if (t === "sistem") localStorage.removeItem(ANAHTAR);
      else localStorage.setItem(ANAHTAR, t);
    } catch {
      // Kaydedilemese de bu oturum için uygulanır
    }
    setTema(t);
  };
  return [tema, sec];
}
