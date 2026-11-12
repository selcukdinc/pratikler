// Tam genişlik ("alanı verimli kullan"): açıkken sayfaların en büyük genişlik sınırı
// kalkar, içerik ekranın iki yanına kadar yayılır. Bütün pratiklerde geçerlidir;
// seçim tarayıcıda saklanır. index.html'deki betik ilk çizimden önce uygular.

import { useSyncExternalStore } from "react";

const ANAHTAR = "pratik:tam-en";

function oku(): boolean {
  try {
    return localStorage.getItem(ANAHTAR) === "1";
  } catch {
    return false;
  }
}

let acik = oku();
const dinleyenler = new Set<() => void>();

function uygula(a: boolean) {
  if (a) document.documentElement.dataset.tamEn = "";
  else delete document.documentElement.dataset.tamEn;
}

export function tamEnSec(a: boolean) {
  acik = a;
  uygula(a);
  try {
    if (a) localStorage.setItem(ANAHTAR, "1");
    else localStorage.removeItem(ANAHTAR);
  } catch {
    // kaydedilemese de bu oturumda geçerli
  }
  dinleyenler.forEach((f) => f());
}

const abone = (f: () => void) => {
  dinleyenler.add(f);
  return () => dinleyenler.delete(f);
};

export function useTamEn(): [boolean, (a: boolean) => void] {
  return [useSyncExternalStore(abone, () => acik), tamEnSec];
}
