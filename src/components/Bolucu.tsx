// Sürüklenerek boyutlandırma: iki panel arasındaki dikey çizgi (oran) ve panelin
// altındaki yatay çizgi (yükseklik). Seçim tarayıcıda saklanır. Klavyeyle de
// çalışır: çizgiye odaklanıp ok tuşları.

import { useState, type KeyboardEvent, type PointerEvent as RPointerEvent } from "react";

export function useKalici<T>(anahtar: string, varsayilan: T): [T, (v: T) => void] {
  const [deger, setDeger] = useState<T>(() => {
    try {
      const s = localStorage.getItem(anahtar);
      return s === null ? varsayilan : (JSON.parse(s) as T);
    } catch {
      return varsayilan;
    }
  });
  const sec = (v: T) => {
    setDeger(v);
    try {
      localStorage.setItem(anahtar, JSON.stringify(v));
    } catch {
      // depolama kapalı: bu oturumda geçerli
    }
  };
  return [deger, sec];
}

const sinirla = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));

function surukle(e: RPointerEvent, hareket: (dx: number, dy: number) => void) {
  e.preventDefault();
  const hedef = e.currentTarget as HTMLElement;
  hedef.setPointerCapture(e.pointerId);
  const { clientX: x0, clientY: y0 } = e;
  const tasi = (m: PointerEvent) => hareket(m.clientX - x0, m.clientY - y0);
  const bitir = () => {
    hedef.removeEventListener("pointermove", tasi);
    hedef.removeEventListener("pointerup", bitir);
    hedef.removeEventListener("pointercancel", bitir);
    document.body.classList.remove("bolucu-suruklen");
  };
  document.body.classList.add("bolucu-suruklen");
  hedef.addEventListener("pointermove", tasi);
  hedef.addEventListener("pointerup", bitir);
  hedef.addEventListener("pointercancel", bitir);
}

// İki sütun arasındaki çizgi; oran soldaki sütunun payıdır (0.2–0.8)
export function DikeyBolucu({ oran, degistir, etiket = "Panelleri boyutlandır" }: { oran: number; degistir: (o: number) => void; etiket?: string }) {
  const basla = (e: RPointerEvent) => {
    const kap = (e.currentTarget as HTMLElement).parentElement!;
    const en = kap.getBoundingClientRect().width;
    const o0 = oran;
    surukle(e, (dx) => degistir(sinirla(o0 + dx / en, 0.2, 0.8)));
  };
  const tus = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") degistir(sinirla(oran - 0.05, 0.2, 0.8));
    else if (e.key === "ArrowRight") degistir(sinirla(oran + 0.05, 0.2, 0.8));
    else return;
    e.preventDefault();
  };
  return (
    <div className="bolucu bolucu-dikey" role="separator" aria-orientation="vertical" aria-label={etiket} tabIndex={0}
      aria-valuenow={Math.round(oran * 100)} aria-valuemin={20} aria-valuemax={80}
      onPointerDown={basla} onKeyDown={tus} onDoubleClick={() => degistir(0.6)} title="Sürükle; çift tıkla varsayılana dön" />
  );
}

// Panelin altındaki çizgi; yükseklik piksel
export function YatayBolucu({ boy, degistir, enAz = 160, enCok = 900, varsayilan, etiket = "Yüksekliği değiştir" }: {
  boy: number; degistir: (b: number) => void; enAz?: number; enCok?: number; varsayilan: number; etiket?: string;
}) {
  const basla = (e: RPointerEvent) => {
    const b0 = boy;
    surukle(e, (_dx, dy) => degistir(Math.round(sinirla(b0 + dy, enAz, enCok))));
  };
  const tus = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") degistir(sinirla(boy - 20, enAz, enCok));
    else if (e.key === "ArrowDown") degistir(sinirla(boy + 20, enAz, enCok));
    else return;
    e.preventDefault();
  };
  return (
    <div className="bolucu bolucu-yatay" role="separator" aria-orientation="horizontal" aria-label={etiket} tabIndex={0}
      aria-valuenow={boy} aria-valuemin={enAz} aria-valuemax={enCok}
      onPointerDown={basla} onKeyDown={tus} onDoubleClick={() => degistir(varsayilan)} title="Sürükle; çift tıkla varsayılana dön" />
  );
}
