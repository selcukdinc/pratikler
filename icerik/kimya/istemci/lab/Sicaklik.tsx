// Termometre ve birim dönüştürücü: sürgüyle ya da herhangi bir ölçekte değer
// yazarak sıcaklığı değiştir; üç termometre aynı sıcaklığı üç ölçekte gösterir.

import { useState } from "react";

export const cToF = (c: number) => 1.8 * c + 32;
export const fToC = (f: number) => (f - 32) / 1.8;
export const cToK = (c: number) => c + 273.15;
export const kToC = (k: number) => k - 273.15;

const MIN_C = -273.15;
const MAX_C = 300;

const REFERANSLAR: { ad: string; c: number }[] = [
  { ad: "Mutlak sıfır", c: -273.15 },
  { ad: "Celsius = Fahrenheit", c: -40 },
  { ad: "Suyun donma noktası", c: 0 },
  { ad: "Vücut sıcaklığı", c: 37 },
  { ad: "Etil alkolün kaynama noktası", c: 78 },
  { ad: "Suyun kaynama noktası", c: 100 },
];

type Olcek = "C" | "F" | "K";
const ETIKET: Record<Olcek, string> = { C: "°C", F: "°F", K: "K" };
const cevir = (c: number, o: Olcek) => (o === "C" ? c : o === "F" ? cToF(c) : cToK(c));
const geri = (v: number, o: Olcek) => (o === "C" ? v : o === "F" ? fToC(v) : kToC(v));
const yaz = (v: number) => (Math.round(v * 100) / 100).toLocaleString("tr-TR", { maximumFractionDigits: 2 });

function Termometre({ c, olcek }: { c: number; olcek: Olcek }) {
  const oran = (c - MIN_C) / (MAX_C - MIN_C);
  const ust = 20;
  const alt = 170;
  const y = alt - oran * (alt - ust);
  const deger = cevir(c, olcek);
  // Ölçeğin kendi birimiyle donma ve kaynama işaretleri
  const isaretler = [0, 100].map((ic) => ({ y: alt - ((ic - MIN_C) / (MAX_C - MIN_C)) * (alt - ust), v: cevir(ic, olcek) }));
  return (
    <figure className="termometre">
      <svg viewBox="0 0 100 200" role="img" aria-label={`${yaz(deger)} ${ETIKET[olcek]}`}>
        <rect x="32" y="12" width="16" height="166" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="182" r="12" fill="#d64545" />
        <rect x="36" y={y} width="8" height={182 - y} fill="#d64545" />
        {isaretler.map((m) => (
          <g key={m.v}>
            <path d={`M48 ${m.y} L58 ${m.y}`} stroke="currentColor" />
            <text x="60" y={m.y + 4} fontSize="10" fill="currentColor">{yaz(m.v)}</text>
          </g>
        ))}
      </svg>
      <figcaption>
        <strong>{yaz(deger)} {ETIKET[olcek]}</strong>
      </figcaption>
    </figure>
  );
}

export default function Sicaklik() {
  const [c, setC] = useState(25);
  const [taslak, setTaslak] = useState<Partial<Record<Olcek, string>>>({});
  const [hata, setHata] = useState("");

  const girdi = (o: Olcek, metin: string) => {
    setTaslak({ [o]: metin });
    const v = Number(metin.replace(",", "."));
    if (metin.trim() === "" || !Number.isFinite(v)) return;
    const yeni = geri(v, o);
    if (yeni < MIN_C - 1e-9) {
      setHata(`${yaz(v)} ${ETIKET[o]} mutlak sıfırın altında kalıyor; bu sıcaklık olamaz.`);
      return;
    }
    setHata("");
    setC(Math.min(MAX_C, yeni));
  };

  return (
    <div className="lab-tezgah">
      <div className="termometreler">
        {(["C", "F", "K"] as Olcek[]).map((o) => <Termometre key={o} c={c} olcek={o} />)}
      </div>
      <label className="lab-surgu">
        Sıcaklık: {yaz(c)} °C
        <input type="range" min={MIN_C} max={MAX_C} step={0.05} value={c} onChange={(e) => { setC(Number(e.target.value)); setTaslak({}); setHata(""); }} />
      </label>
      <div className="lab-girdiler">
        {(["C", "F", "K"] as Olcek[]).map((o) => (
          <label key={o}>
            {ETIKET[o]}
            <input inputMode="decimal" value={taslak[o] ?? yaz(cevir(c, o))} onChange={(e) => girdi(o, e.target.value)} onBlur={() => setTaslak({})} />
          </label>
        ))}
      </div>
      {hata && <p className="lab-sonuc yanlis" role="alert">{hata}</p>}
      <div className="lab-cipler" aria-label="Hazır sıcaklıklar">
        {REFERANSLAR.map((r) => (
          <button key={r.ad} className="cip" aria-pressed={Math.abs(c - r.c) < 0.01} onClick={() => { setC(r.c); setTaslak({}); setHata(""); }}>
            {r.ad}
          </button>
        ))}
      </div>
      <div className="lab-sonuc">
        <p>
          K = °C + 273,15 → {yaz(c)} + 273,15 = <strong>{yaz(cToK(c))} K</strong>
        </p>
        <p>
          °F = 1,8 · °C + 32 → 1,8 · {yaz(c)} + 32 = <strong>{yaz(cToF(c))} °F</strong>
        </p>
        <p className="hint">Celsius ile kelvinin birim aralığı aynıdır; 1 °C'lık artış 1 K, 1,8 °F'lık artış demektir.</p>
      </div>
    </div>
  );
}
