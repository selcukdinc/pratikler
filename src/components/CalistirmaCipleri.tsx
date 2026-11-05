// Ders kod kutusundaki çalıştırma çipleri. Her çip tek başına silinebilir (×
// ya da Delete), sağ tıkla menü açılır (karşılaştır, kodu yükle, adını
// değiştir, taşı, sil), tutup sürükleyerek sırası değiştirilir. Klavyede
// Alt+← / Alt+→ çipi taşır.

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { BaglamMenusu, type MenuOgesi } from "./BaglamMenusu";

export interface Cip {
  n: number;
  ad?: string;
  fark: string;
}

interface Props {
  cipler: Cip[];
  simdi: number;
  // Karşılaştırmada seçili olan (yan görünüm kapalıysa null)
  secili: number | null;
  sec: (n: number) => void;
  sil: (n: number) => void;
  tasi: (n: number, hedef: number) => void;
  adlandir: (n: number, ad: string) => void;
  koduYukle: (n: number) => void;
}

interface Surukleme {
  n: number;
  x0: number;
  y0: number;
  aktif: boolean;
  // Bırakılınca çipin geçeceği konum (0..uzunluk)
  hedef: number;
}

export const cipAdi = (c: Cip) => c.ad || `#${c.n}`;

export function CalistirmaCipleri({ cipler, simdi, secili, sec, sil, tasi, adlandir, koduYukle }: Props) {
  const liste = useRef<HTMLSpanElement>(null);
  const [surukle, setSurukle] = useState<Surukleme | null>(null);
  // Sürükleme bitince ardından gelen tıklama seçim yapmasın
  const yeniBirakildi = useRef(false);
  const [menu, setMenu] = useState<{ x: number; y: number; n: number } | null>(null);
  const [duzenlenen, setDuzenlenen] = useState<number | null>(null);

  const hedefBul = (x: number, y: number) => {
    const els = [...(liste.current?.querySelectorAll<HTMLElement>("[data-cip]") ?? [])];
    let enIyi = { d: Infinity, hedef: cipler.length };
    els.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const d = Math.hypot(x - (r.left + r.width / 2), (y - (r.top + r.height / 2)) * 2);
      if (d < enIyi.d) enIyi = { d, hedef: x < r.left + r.width / 2 ? i : i + 1 };
    });
    return enIyi.hedef;
  };

  const basla = (e: PointerEvent<HTMLElement>, n: number) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest(".cip-sil, input")) return;
    setSurukle({ n, x0: e.clientX, y0: e.clientY, aktif: false, hedef: -1 });
  };
  const hareket = (e: PointerEvent<HTMLElement>) => {
    if (!surukle) return;
    const aktif = surukle.aktif || Math.hypot(e.clientX - surukle.x0, e.clientY - surukle.y0) > 6;
    if (aktif && !surukle.aktif) e.currentTarget.setPointerCapture(e.pointerId);
    if (aktif) setSurukle({ ...surukle, aktif, hedef: hedefBul(e.clientX, e.clientY) });
  };
  const bitir = () => {
    if (surukle?.aktif) {
      tasi(surukle.n, surukle.hedef);
      yeniBirakildi.current = true;
      setTimeout(() => (yeniBirakildi.current = false), 0);
    }
    setSurukle(null);
  };

  const tus = (e: KeyboardEvent<HTMLElement>, n: number, i: number) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      sil(n);
    } else if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      e.preventDefault();
      tasi(n, e.key === "ArrowLeft" ? Math.max(0, i - 1) : Math.min(cipler.length, i + 2));
      requestAnimationFrame(() => liste.current?.querySelector<HTMLElement>(`[data-cip="${n}"] .cip-ad`)?.focus());
    } else if (e.key === "F2") {
      e.preventDefault();
      setDuzenlenen(n);
    }
  };

  const menuOgeleri = (n: number): MenuOgesi[] => {
    const i = cipler.findIndex((c) => c.n === n);
    return [
      { etiket: "Karşılaştır", yap: () => sec(n), pasif: n === simdi },
      { etiket: "Kodunu editöre yükle", yap: () => koduYukle(n) },
      { etiket: "Adını değiştir…", yap: () => setDuzenlenen(n) },
      { ayrac: true, etiket: "" },
      { etiket: "Sola taşı", yap: () => tasi(n, i - 1), pasif: i === 0 },
      { etiket: "Sağa taşı", yap: () => tasi(n, i + 2), pasif: i === cipler.length - 1 },
      { ayrac: true, etiket: "" },
      { etiket: "Sil", yap: () => sil(n) },
    ];
  };

  return (
    <span
      ref={liste}
      className={`mini-gecmis-liste${surukle?.aktif ? " surukleniyor" : ""}`}
      role="group"
      aria-label="Çalıştırmalar: tıkla karşılaştır, sürükle sırala, sağ tıkla düzenle"
      onPointerMove={hareket}
      onPointerUp={bitir}
      onPointerCancel={() => setSurukle(null)}
    >
      {cipler.map((c, i) => {
        const sinif = [
          "cip",
          "mini-cip",
          c.n === simdi ? "simdi" : "",
          secili === c.n ? "secili" : "",
          surukle?.aktif && surukle.n === c.n ? "suruklenen" : "",
          surukle?.aktif && surukle.n !== c.n && surukle.hedef === i ? "birak-once" : "",
          surukle?.aktif && surukle.n !== c.n && surukle.hedef === i + 1 && i === cipler.length - 1 ? "birak-sonra" : "",
        ].filter(Boolean).join(" ");
        return (
          <span
            key={c.n}
            data-cip={c.n}
            className={sinif}
            onPointerDown={(e) => basla(e, c.n)}
            onContextMenu={(e) => {
              e.preventDefault();
              setMenu({ x: e.clientX, y: e.clientY, n: c.n });
            }}
            title={`${c.n}. çalıştırma: ${c.fark}`}
          >
            {duzenlenen === c.n ? (
              <AdGirdisi
                ilk={c.ad ?? ""}
                yer={`#${c.n}`}
                bitir={(ad) => {
                  if (ad !== null) adlandir(c.n, ad);
                  setDuzenlenen(null);
                }}
              />
            ) : (
              <button
                type="button"
                className="cip-ad"
                aria-pressed={c.n === simdi ? undefined : secili === c.n}
                onClick={() => !yeniBirakildi.current && c.n !== simdi && sec(c.n)}
                onKeyDown={(e) => tus(e, c.n, i)}
                aria-label={`${cipAdi(c)}${c.n === simdi ? ", şimdiki" : ""}. ${c.fark}`}
              >
                {cipAdi(c)}
                {c.n === simdi && <small> şimdi</small>}
              </button>
            )}
            <button type="button" className="cip-sil" onClick={() => sil(c.n)} aria-label={`${cipAdi(c)} çalıştırmasını sil`} title="Bu çalıştırmayı sil">
              ×
            </button>
          </span>
        );
      })}
      {menu && <BaglamMenusu x={menu.x} y={menu.y} ogeler={menuOgeleri(menu.n)} kapat={() => setMenu(null)} />}
    </span>
  );
}

function AdGirdisi({ ilk, yer, bitir }: { ilk: string; yer: string; bitir: (ad: string | null) => void }) {
  const [ad, setAd] = useState(ilk);
  return (
    <input
      className="cip-girdi"
      autoFocus
      value={ad}
      placeholder={yer}
      maxLength={24}
      size={Math.max(4, ad.length + 1)}
      aria-label="Çalıştırmanın adı"
      onChange={(e) => setAd(e.target.value)}
      onBlur={() => bitir(ad.trim())}
      onKeyDown={(e) => {
        if (e.key === "Enter") bitir(ad.trim());
        if (e.key === "Escape") bitir(null);
      }}
    />
  );
}
