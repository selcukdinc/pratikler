// Etkileşimli şekillerin ortak parçaları: kaydırıcı, seçim düğmeleri ve
// SVG dizgisini çizen kutu. Her şey tarayıcıda hesaplanır.

import type { ReactNode } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

export function Kaydirici(p: {
  ad: ReactNode;
  deger: number;
  min: number;
  max: number;
  adim?: number;
  yaz?: (v: number) => string;
  degis: (v: number) => void;
}) {
  return (
    <label>
      <span>
        {p.ad}: <b>{p.yaz ? p.yaz(p.deger) : p.deger}</b>
      </span>
      <input type="range" min={p.min} max={p.max} step={p.adim ?? 1} value={p.deger} onChange={(e) => p.degis(Number(e.target.value))} />
    </label>
  );
}

export function Secim<T extends string | number>(p: { ad: string; secenekler: [T, string][]; deger: T; degis: (v: T) => void }) {
  return (
    <div className="etkilesim-alanlar" role="group" aria-label={p.ad}>
      {p.secenekler.map(([v, ad]) => (
        <button key={String(v)} type="button" className="cip" aria-pressed={p.deger === v} onClick={() => p.degis(v)}>
          {ad}
        </button>
      ))}
    </div>
  );
}

export function Cizim({ g, html, etiket }: { g: Gorsel; html: string; etiket: string }) {
  return <svg viewBox={`0 0 ${g.en} ${g.boy}`} role="img" aria-label={`${g.baslik}. ${etiket}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const Denetim = ({ children }: { children: ReactNode }) => <div className="etkilesim-denetim">{children}</div>;
export const Kaydiricilar = ({ children }: { children: ReactNode }) => <div className="etkilesim-kaydiricilar">{children}</div>;
export const Olcumler = ({ children }: { children: ReactNode }) => <div className="etkilesim-olcumler" aria-live="polite">{children}</div>;
