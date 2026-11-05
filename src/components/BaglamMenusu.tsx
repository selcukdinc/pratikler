// Sağ tık menüsü: imlecin yanında açılır, ekran dışına taşmaz; dışarı
// tıklayınca, Esc'ye basınca ya da pencere odağı kaybedince kapanır.

import { useEffect, useRef, useState } from "react";

export interface MenuOgesi {
  etiket: string;
  yap?: () => void;
  pasif?: boolean;
  ayrac?: boolean;
}

export function BaglamMenusu({ x, y, ogeler, kapat }: { x: number; y: number; ogeler: MenuOgesi[]; kapat: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [konum, setKonum] = useState({ x, y });
  useEffect(() => {
    const r = ref.current!.getBoundingClientRect();
    setKonum({ x: Math.min(x, window.innerWidth - r.width - 8), y: Math.min(y, window.innerHeight - r.height - 8) });
    ref.current!.querySelector<HTMLButtonElement>("button:not(:disabled)")?.focus();
    const disari = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && kapat();
    const tus = (e: KeyboardEvent) => e.key === "Escape" && kapat();
    window.addEventListener("mousedown", disari);
    window.addEventListener("keydown", tus);
    window.addEventListener("blur", kapat);
    return () => {
      window.removeEventListener("mousedown", disari);
      window.removeEventListener("keydown", tus);
      window.removeEventListener("blur", kapat);
    };
  }, [x, y, kapat]);
  return (
    <div ref={ref} className="baglam-menusu" role="menu" style={{ left: konum.x, top: konum.y }}>
      {ogeler.map((o, i) =>
        o.ayrac ? <hr key={i} /> : (
          <button key={i} role="menuitem" disabled={o.pasif} onClick={() => (kapat(), o.yap?.())}>{o.etiket}</button>
        ),
      )}
    </div>
  );
}
