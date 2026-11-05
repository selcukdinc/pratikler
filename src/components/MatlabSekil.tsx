// MatStudio şekil penceresi: yorumlayıcının şekil modelini SVG olarak çizer.
// MatStudio'daki gibi beyaz zemin üzerinde çizilir; temadan etkilenmez.

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { Eksen, Sekil, Seri } from "../matlab/cizim";

const YAZI = "#262626";
const IZGARA = "#e3e3e3";
const CERCEVE = "#262626";

// "Güzel" bölme aralıkları: 1, 2, 5 × 10^k
export function guzelAraliklar(min: number, max: number, hedef: number): number[] {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [0, 1];
  if (min === max) {
    const d = Math.abs(min) || 1;
    min -= d / 2;
    max += d / 2;
  }
  const kaba = (max - min) / Math.max(1, hedef);
  const us = 10 ** Math.floor(Math.log10(kaba));
  const adim = [1, 2, 2.5, 5, 10].map((k) => k * us).find((a) => a >= kaba) ?? 10 * us;
  const bas = Math.floor(min / adim + 1e-9) * adim;
  const son = Math.ceil(max / adim - 1e-9) * adim;
  const out: number[] = [];
  for (let v = bas; v <= son + adim * 1e-6; v += adim) out.push(Math.abs(v) < adim * 1e-9 ? 0 : v);
  return out;
}

// Başlık ve etiketlerdeki TeX: \omega → ω, \pi → π
const TEX: Record<string, string> = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", Delta: "Δ", epsilon: "ε", theta: "θ", lambda: "λ", mu: "μ", pi: "π",
  sigma: "σ", Sigma: "Σ", tau: "τ", phi: "φ", Phi: "Φ", omega: "ω", Omega: "Ω", infty: "∞", pm: "±", cdot: "·", times: "×",
  leq: "≤", geq: "≥", neq: "≠", approx: "≈", rightarrow: "→",
};
export const texCevir = (s: string) => s.replace(/\\([A-Za-z]+)/g, (m, ad: string) => TEX[ad] ?? m).replace(/[_^]\{([^}]*)\}/g, "$1").replace(/[_^](\w)/g, "$1");

function etiketYaz(v: number, adim: number): string {
  const us = Math.floor(Math.log10(adim) + 1e-9);
  const ek = Math.abs(adim / 10 ** us - 2.5) < 1e-6 ? 1 : 0;
  const basamak = Math.max(0, Math.min(6, -us + ek));
  const a = Math.abs(v);
  if (a !== 0 && (a >= 1e5 || a < 1e-4)) return v.toExponential(1).replace("e+", "e");
  return v.toFixed(basamak).replace("-", "−");
}

function aralikBul(seriler: Seri[], eksen: "x" | "y"): [number, number] | null {
  let min = Infinity, max = -Infinity;
  for (const s of seriler) {
    const dizi = eksen === "x" ? (s.kenarlar ?? s.x) : s.y;
    for (const v of dizi) {
      if (!Number.isFinite(v)) continue;
      if (v < min) min = v;
      if (v > max) max = v;
    }
    if (eksen === "y" && (s.tur === "stem" || s.tur === "bar" || s.tur === "hist" || s.tur === "area")) {
      min = Math.min(min, 0);
      max = Math.max(max, 0);
    }
    if (eksen === "x" && (s.tur === "stem" || s.tur === "scatter") && s.x.length) {
      const g = s.x.length > 1 ? Math.max(1e-12, Math.min(...s.x.slice(1).map((v, k) => Math.abs(v - s.x[k]!)))) : 1;
      const pay = Math.min(g / 2, (Math.max(...s.x) - Math.min(...s.x)) * 0.05 || 0.5);
      min = Math.min(min, Math.min(...s.x) - pay);
      max = Math.max(max, Math.max(...s.x) + pay);
    }
    if (eksen === "x" && s.tur === "bar" && s.x.length) {
      const g = s.x.length > 1 ? Math.min(...s.x.slice(1).map((v, k) => v - s.x[k]!)) : 1;
      min = Math.min(min, s.x[0]! - g / 2);
      max = Math.max(max, s.x.at(-1)! + g / 2);
    }
  }
  if (eksen === "y" && min < max && seriler.some((s) => s.tur === "stem" || s.tur === "scatter" || s.tur === "bar" || s.tur === "hist")) {
    const pay = (max - min) * 0.06;
    if (max > 0) max += pay;
    if (min < 0) min -= pay;
  }
  return min <= max ? [min, max] : null;
}

function isaretCiz(t: string, x: number, y: number, r: number, renk: string, dolu: boolean, key: string | number): ReactNode {
  const ortak = { stroke: renk, strokeWidth: 1.2, fill: dolu ? renk : "none" } as const;
  switch (t) {
    case ".":
      return <circle key={key} cx={x} cy={y} r={1.8} fill={renk} />;
    case "o":
      return <circle key={key} cx={x} cy={y} r={r} {...ortak} />;
    case "s":
      return <rect key={key} x={x - r} y={y - r} width={2 * r} height={2 * r} {...ortak} />;
    case "d":
      return <path key={key} d={`M${x} ${y - r * 1.3}L${x + r} ${y}L${x} ${y + r * 1.3}L${x - r} ${y}Z`} {...ortak} />;
    case "^":
      return <path key={key} d={`M${x} ${y - r}L${x + r} ${y + r}L${x - r} ${y + r}Z`} {...ortak} />;
    case "v":
      return <path key={key} d={`M${x} ${y + r}L${x + r} ${y - r}L${x - r} ${y - r}Z`} {...ortak} />;
    case "+":
      return <path key={key} d={`M${x - r} ${y}H${x + r}M${x} ${y - r}V${y + r}`} stroke={renk} strokeWidth={1.2} />;
    case "x":
      return <path key={key} d={`M${x - r} ${y - r}L${x + r} ${y + r}M${x + r} ${y - r}L${x - r} ${y + r}`} stroke={renk} strokeWidth={1.2} />;
    case "*":
      return <path key={key} d={`M${x - r} ${y}H${x + r}M${x} ${y - r}V${y + r}M${x - r * 0.7} ${y - r * 0.7}L${x + r * 0.7} ${y + r * 0.7}M${x + r * 0.7} ${y - r * 0.7}L${x - r * 0.7} ${y + r * 0.7}`} stroke={renk} strokeWidth={1.1} />;
    default:
      return <circle key={key} cx={x} cy={y} r={r} {...ortak} />;
  }
}

const KESIK: Record<string, string | undefined> = { "--": "6 4", ":": "1.5 3", "-.": "6 3 1.5 3", "-": undefined };

function EksenCiz({ e, x0, y0, en, boy, id }: { e: Eksen; x0: number; y0: number; en: number; boy: number; id: string }) {
  const sol = 54, sag = 14;
  const ust = e.baslik ? 26 : 12;
  const alt = e.xEtiket ? 42 : 26;
  const solEk = e.yEtiket ? 16 : 0;
  const px = x0 + sol + solEk, py = y0 + ust;
  const pw = Math.max(20, en - sol - solEk - sag), ph = Math.max(20, boy - ust - alt);

  const xa = e.xSinir ?? aralikBul(e.seriler, "x") ?? [0, 1];
  const ya = e.ySinir ?? aralikBul(e.seriler, "y") ?? [0, 1];
  // Tam sayı indisli diziler (stem) tam sayı işaretleriyle çizilir
  const tamX = e.seriler.length > 0 && e.seriler.every((s) => s.tur !== "hist" && s.x.every(Number.isInteger));
  let xt = guzelAraliklar(xa[0], xa[1], Math.max(2, Math.floor(pw / 70)));
  let tamSinir = false;
  if (tamX && xt.length > 1 && xt[1]! - xt[0]! < 1) {
    xt = [];
    for (let v = Math.ceil(xa[0]); v <= Math.floor(xa[1]); v++) xt.push(v);
    tamSinir = true;
  }
  const yt = guzelAraliklar(ya[0], ya[1], Math.max(2, Math.floor(ph / 40)));
  const siki = (e as { siki?: boolean }).siki;
  // Çizgi grafiklerinde x ekseni veriye sıkı oturur (MatStudio'daki gibi), y ekseni güzel sınırlara yuvarlanır
  const sadecePlot = e.seriler.length > 0 && e.seriler.every((s) => s.tur === "plot" || s.tur === "area");
  const [xmin, xmax] = e.xSinir ?? (siki || sadecePlot || tamSinir ? (xa[0] === xa[1] ? [xa[0] - 1, xa[1] + 1] : xa) : [xt[0]!, xt.at(-1)!]);
  const [ymin, ymax] = e.ySinir ?? (siki && ya[0] !== ya[1] ? ya : [yt[0]!, yt.at(-1)!]);
  const sx = (v: number) => px + ((v - xmin) / (xmax - xmin || 1)) * pw;
  const sy = (v: number) => py + ph - ((v - ymin) / (ymax - ymin || 1)) * ph;
  const xAdim = xt.length > 1 ? xt[1]! - xt[0]! : 1;
  const yAdim = yt.length > 1 ? yt[1]! - yt[0]! : 1;
  const xGorunen = xt.filter((v) => v >= xmin - 1e-9 * xAdim && v <= xmax + 1e-9 * xAdim);
  const yGorunen = yt.filter((v) => v >= ymin - 1e-9 * yAdim && v <= ymax + 1e-9 * yAdim);
  const kirp = `kirp-${id}`;

  const seriCiz = (s: Seri, k: number): ReactNode => {
    const n = s.x.length;
    const parcalar: string[] = [];
    if (s.tur === "plot" || s.tur === "area" || s.tur === "scatter") {
      let d = "";
      let acik = false;
      for (let i = 0; i < n; i++) {
        if (!Number.isFinite(s.y[i]!) || !Number.isFinite(s.x[i]!)) {
          acik = false;
          continue;
        }
        d += `${acik ? "L" : "M"}${sx(s.x[i]!).toFixed(1)} ${sy(s.y[i]!).toFixed(1)}`;
        acik = true;
      }
      parcalar.push(d);
    }
    const isaretler = s.isaret && n <= 2000 ? s.x.map((x, i) => (Number.isFinite(s.y[i]!) ? isaretCiz(s.isaret!, sx(x), sy(s.y[i]!), s.tur === "stem" ? 3.2 : 3.5, s.renk, !!s.dolu, i) : null)) : null;
    switch (s.tur) {
      case "plot":
      case "scatter":
        return (
          <g key={k}>
            {s.tur === "plot" && s.cizgi !== "none" && <path d={parcalar[0]} fill="none" stroke={s.renk} strokeWidth={s.kalinlik} strokeDasharray={KESIK[s.cizgi]} strokeLinejoin="round" />}
            {isaretler}
          </g>
        );
      case "area": {
        const taban = sy(Math.max(ymin, Math.min(ymax, 0)));
        return (
          <g key={k}>
            <path d={`${parcalar[0]}L${sx(s.x.at(-1)!)} ${taban}L${sx(s.x[0]!)} ${taban}Z`} fill={s.renk} fillOpacity={0.35} stroke={s.renk} strokeWidth={s.kalinlik} />
          </g>
        );
      }
      case "stem": {
        const taban = sy(Math.max(ymin, Math.min(ymax, 0)));
        let d = "";
        for (let i = 0; i < n; i++) if (Number.isFinite(s.y[i]!)) d += `M${sx(s.x[i]!).toFixed(1)} ${taban.toFixed(1)}V${sy(s.y[i]!).toFixed(1)}`;
        return (
          <g key={k}>
            <path d={d} stroke={s.renk} strokeWidth={s.kalinlik} strokeDasharray={KESIK[s.cizgi]} />
            {isaretler}
          </g>
        );
      }
      case "stairs": {
        let d = "";
        for (let i = 0; i < n; i++) {
          const X = sx(s.x[i]!), Y = sy(s.y[i]!);
          d += i === 0 ? `M${X} ${Y}` : `H${X}V${Y}`;
        }
        return <path key={k} d={d} fill="none" stroke={s.renk} strokeWidth={s.kalinlik} />;
      }
      case "bar": {
        const g = n > 1 ? Math.min(...s.x.slice(1).map((v, i) => v - s.x[i]!)) : 1;
        const w = (s.genislik ?? 0.8) * g;
        const taban = sy(Math.max(ymin, Math.min(ymax, 0)));
        return (
          <g key={k} fill={s.renk} stroke={CERCEVE} strokeWidth={0.5}>
            {s.x.map((x, i) => {
              const ust2 = sy(s.y[i]!);
              return <rect key={i} x={sx(x - w / 2)} y={Math.min(ust2, taban)} width={Math.max(0.5, sx(x + w / 2) - sx(x - w / 2))} height={Math.abs(taban - ust2)} />;
            })}
          </g>
        );
      }
      case "hist": {
        const kn = s.kenarlar!;
        const taban = sy(Math.max(ymin, 0));
        return (
          <g key={k} fill={s.renk} fillOpacity={0.6} stroke={CERCEVE} strokeWidth={0.6}>
            {s.y.map((v, i) => (
              <rect key={i} x={sx(kn[i]!)} y={sy(v)} width={Math.max(0.5, sx(kn[i + 1]!) - sx(kn[i]!))} height={Math.max(0, taban - sy(v))} />
            ))}
          </g>
        );
      }
    }
  };

  return (
    <g fontFamily="Helvetica, Arial, sans-serif" fontSize={11} fill={YAZI}>
      <clipPath id={kirp}>
        <rect x={px} y={py} width={pw} height={ph} />
      </clipPath>
      <rect x={px} y={py} width={pw} height={ph} fill="#fff" />
      {e.izgara && (
        <g stroke={IZGARA} strokeWidth={1}>
          {xGorunen.map((v) => <line key={`gx${v}`} x1={sx(v)} x2={sx(v)} y1={py} y2={py + ph} />)}
          {yGorunen.map((v) => <line key={`gy${v}`} y1={sy(v)} y2={sy(v)} x1={px} x2={px + pw} />)}
        </g>
      )}
      <g clipPath={`url(#${kirp})`}>{e.seriler.map(seriCiz)}</g>
      {e.metinler.map((m, i) => <text key={i} x={sx(m.x)} y={sy(m.y)} fontSize={11}>{m.s}</text>)}
      <rect x={px} y={py} width={pw} height={ph} fill="none" stroke={CERCEVE} strokeWidth={0.8} />
      <g stroke={CERCEVE} strokeWidth={0.8}>
        {xGorunen.map((v) => <line key={`tx${v}`} x1={sx(v)} x2={sx(v)} y1={py + ph} y2={py + ph - 4} />)}
        {yGorunen.map((v) => <line key={`ty${v}`} y1={sy(v)} y2={sy(v)} x1={px} x2={px + 4} />)}
      </g>
      {xGorunen.map((v) => <text key={`lx${v}`} x={sx(v)} y={py + ph + 14} textAnchor="middle">{etiketYaz(v, xAdim)}</text>)}
      {yGorunen.map((v) => <text key={`ly${v}`} x={px - 5} y={sy(v) + 4} textAnchor="end">{etiketYaz(v, yAdim)}</text>)}
      {e.baslik && <text x={px + pw / 2} y={y0 + 17} textAnchor="middle" fontWeight={700} fontSize={12}>{texCevir(e.baslik)}</text>}
      {e.xEtiket && <text x={px + pw / 2} y={py + ph + 32} textAnchor="middle">{texCevir(e.xEtiket)}</text>}
      {e.yEtiket && <text transform={`translate(${x0 + 14} ${py + ph / 2}) rotate(-90)`} textAnchor="middle">{texCevir(e.yEtiket)}</text>}
      {e.gosterge && e.gosterge.length > 0 && (() => {
        const adlar = e.gosterge.slice(0, e.seriler.length);
        const gen = Math.min(pw - 10, 34 + Math.max(...adlar.map((a) => a.length)) * 6.2);
        const gx = px + pw - gen - 6, gy = py + 6;
        return (
          <g>
            <rect x={gx} y={gy} width={gen} height={adlar.length * 16 + 6} fill="#fff" stroke={CERCEVE} strokeWidth={0.6} />
            {adlar.map((a, i) => {
              const s = e.seriler[i]!;
              const yy = gy + 12 + i * 16;
              return (
                <g key={i}>
                  {s.tur === "bar" || s.tur === "hist" ? (
                    <rect x={gx + 6} y={yy - 5} width={18} height={9} fill={s.renk} fillOpacity={s.tur === "hist" ? 0.6 : 1} />
                  ) : (
                    <>
                      {s.cizgi !== "none" && <line x1={gx + 5} x2={gx + 25} y1={yy} y2={yy} stroke={s.renk} strokeWidth={s.kalinlik} strokeDasharray={KESIK[s.cizgi]} />}
                      {s.isaret && isaretCiz(s.isaret, gx + 15, yy, 3, s.renk, !!s.dolu, "g")}
                    </>
                  )}
                  <text x={gx + 30} y={yy + 4}>{texCevir(a)}</text>
                </g>
              );
            })}
          </g>
        );
      })()}
    </g>
  );
}

export function SekilCiz({ sekil, en, boy }: { sekil: Sekil; en: number; boy: number }) {
  const ustBaslik = sekil.ad ? 22 : 0;
  // Sayfada birden çok şekil olabilir (ders sayfasındaki örnekler): kırpma
  // alanlarının kimlikleri çakışmasın
  const tekil = useId().replace(/:/g, "");
  return (
    <svg className="matlab-sekil" width={en} height={boy} viewBox={`0 0 ${en} ${boy}`} role="img" aria-label={`Şekil ${sekil.no}${sekil.ad ? `: ${sekil.ad}` : ""}`}>
      <rect width={en} height={boy} fill="#fff" />
      {sekil.ad && <text x={en / 2} y={16} textAnchor="middle" fontWeight={700} fontSize={13} fill={YAZI} fontFamily="Helvetica, Arial, sans-serif">{texCevir(sekil.ad)}</text>}
      {sekil.eksenler.map((e, i) => {
        const satirlar = e.p.map((p) => Math.floor((p - 1) / e.n));
        const sutunlar = e.p.map((p) => (p - 1) % e.n);
        const s0 = Math.min(...satirlar), s1 = Math.max(...satirlar) + 1;
        const t0 = Math.min(...sutunlar), t1 = Math.max(...sutunlar) + 1;
        const h = (boy - ustBaslik) / e.m, w = en / e.n;
        return <EksenCiz key={i} id={`${tekil}-${sekil.no}-${i}`} e={e} x0={t0 * w} y0={ustBaslik + s0 * h} en={(t1 - t0) * w} boy={(s1 - s0) * h} />;
      })}
    </svg>
  );
}

// Kutusunu dolduran şekil: boyut değişince yeniden çizilir
export function SekilKutusu({ sekil, oran }: { sekil: Sekil; oran?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [boyut, setBoyut] = useState<{ en: number; boy: number } | null>(null);
  useEffect(() => {
    const el = ref.current!;
    const olc = () => {
      const r = el.getBoundingClientRect();
      const en = Math.max(200, Math.floor(r.width));
      const boy = oran ? Math.round(en * oran) : Math.max(160, Math.floor(r.height));
      setBoyut((b) => (b && b.en === en && b.boy === boy ? b : { en, boy }));
    };
    olc();
    const g = new ResizeObserver(olc);
    g.observe(el);
    return () => g.disconnect();
  }, [oran]);
  return (
    <div className="sekil-kutusu" ref={ref} style={oran ? undefined : { height: "100%" }}>
      {boyut && <SekilCiz sekil={sekil} en={boyut.en} boy={boyut.boy} />}
    </div>
  );
}
