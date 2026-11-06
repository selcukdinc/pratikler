// Tema tercihi: sistem, açık, koyu ya da kahve. index.html'deki küçük betik ilk çizimden
// önce aynı kuralı uygular; bu modül sonradan yapılan seçimleri yönetir.

import { useEffect, useState } from "react";

export type Tema = "sistem" | "acik" | "koyu" | "kahve";

const ANAHTAR = "tema";
const sistemKoyu = () => matchMedia("(prefers-color-scheme: dark)");

function oku(): Tema {
  try {
    const t = localStorage.getItem(ANAHTAR);
    if (t === "acik" || t === "koyu" || t === "kahve") return t;
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

  useEffect(() => {
    uygula(tema);
    if (tema !== "sistem") return;
    const mq = sistemKoyu();
    const degisti = () => uygula("sistem");
    mq.addEventListener("change", degisti);
    return () => mq.removeEventListener("change", degisti);
  }, [tema]);

  const sec = (t: Tema) => {
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
