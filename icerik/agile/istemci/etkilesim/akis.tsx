// Akış şekilleri: waterfall ile iteratif teslimin değer eğrisi, parti büyüklüğü
// oyunu, Little yasası hesaplayıcı ve darboğaz şeridi. Hesaplar saf
// fonksiyonlardadır (akis.test.ts sınar); hepsi tarayıcıda çalışır, istek atmaz.
import { useMemo, useState } from "react";

// ---------------- G-A1-01: değer eğrisi ----------------

// 24 iki haftalık Sprint (12 ay). Özelliklerin değeri azalan sırayla: en değerli önce.
export const SPRINT = 24;
const ham = Array.from({ length: SPRINT }, (_, i) => 1 / Math.pow(i + 1, 0.7));
const toplam = ham.reduce((a, b) => a + b, 0);
export const OZELLIK_DEGERI = ham.map((v) => (v / toplam) * 100);

export interface EgriSonucu {
  // [ay, birikmiş değer yüzdesi]
  iteratif: [number, number][];
  waterfall: [number, number][];
  // Boşa giden emek (ay)
  bosaWaterfall: number;
  bosaIteratif: number;
  // Waterfall'un teslim ayı
  waterfallTeslim: number;
}

// degisimAy: gereksinim değişikliğinin geldiği ay (0 = hiç değişmez); oran: değişen gereksinimlerin payı (0-1).
// Waterfall'da o aya kadar yapılan analiz, tasarım ve kodlamanın değişen payı çöpe gider ve
// yeniden yapılır; teslim o kadar kayar. İteratifte yalnız devam eden Sprint'in değişen payı
// boşa gider; teslim edilmiş özellikler yerinde kalır, değişen gereksinimler kalan Sprint'lerde yapılır.
export function degerEgrisi(degisimAy: number, oran: number): EgriSonucu {
  const bosaWaterfall = degisimAy > 0 ? oran * degisimAy : 0;
  const bosaIteratif = degisimAy > 0 ? oran * 0.5 : 0;
  const waterfallTeslim = 12 + bosaWaterfall;
  const iteratif: [number, number][] = [[0, 0]];
  let birikmis = 0;
  // Boşa giden emek kadar Sprint kaybolur: son Sprint'lerin (en az değerli) özellikleri 12. aya yetişmez
  const kayipSprint = bosaIteratif * 2;
  for (let s = 1; s <= SPRINT; s++) {
    const kalan = Math.max(0, Math.min(1, SPRINT - kayipSprint - (s - 1)));
    birikmis += OZELLIK_DEGERI[s - 1]! * kalan;
    iteratif.push([s / 2, birikmis]);
  }
  const waterfall: [number, number][] = [[0, 0], [waterfallTeslim, 0], [waterfallTeslim, 100]];
  return { iteratif, waterfall, bosaWaterfall, bosaIteratif, waterfallTeslim };
}

export function DegerEgrisi() {
  const [ay, setAy] = useState(8);
  const [oran, setOran] = useState(30);
  const s = useMemo(() => degerEgrisi(ay, oran / 100), [ay, oran]);
  const W = 720, H = 280, sol = 44, alt = 26, ust = 10;
  const xMax = 18;
  const x = (a: number) => sol + (a / xMax) * (W - sol - 10);
  const y = (d: number) => ust + (1 - d / 100) * (H - ust - alt);
  const yol = (n: [number, number][]) => n.map(([a, d], i) => `${i ? "L" : "M"}${x(Math.min(a, xMax)).toFixed(1)},${y(d).toFixed(1)}`).join(" ");
  const ilkAy = 0.5;
  const onIkide = s.iteratif.find(([a]) => a === 12)![1];
  return (
    <div className="ag">
      <div className="ag-satir">
        <label>
          Gereksinim değişikliği {ay === 0 ? "yok" : `${ay}. ayda`}
          <input type="range" min={0} max={11} value={ay} onChange={(e) => setAy(+e.target.value)} />
        </label>
        <label>
          Değişen pay %{oran}
          <input type="range" min={0} max={80} step={5} value={oran} disabled={ay === 0} onChange={(e) => setOran(+e.target.value)} />
        </label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Waterfall ve iteratif teslimde zamana göre teslim edilen değer">
        {[0, 25, 50, 75, 100].map((d) => (
          <g key={d}>
            <line className="ag-izgara-cizgi" x1={sol} x2={W - 10} y1={y(d)} y2={y(d)} />
            <text className="ag-yazi" x={sol - 6} y={y(d) + 4} textAnchor="end">%{d}</text>
          </g>
        ))}
        {[0, 3, 6, 9, 12, 15, 18].map((a) => (
          <text key={a} className="ag-yazi" x={x(a)} y={H - 8} textAnchor="middle">{a}. ay</text>
        ))}
        <line className="ag-eksen" x1={sol} x2={W - 10} y1={y(0)} y2={y(0)} />
        {ay > 0 && <line className="ag-dikey" x1={x(ay)} x2={x(ay)} y1={ust} y2={y(0)} />}
        <path className="ag-cizgi-a" d={yol(s.iteratif)} />
        <path className="ag-cizgi-b" d={yol(s.waterfall)} />
      </svg>
      <div className="ag-lejant">
        <span>İki haftalık Sprint'ler (en değerli önce)</span>
        <span className="ag-l-b">Waterfall (hepsi sonda)</span>
      </div>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>İlk değer</h4>
          <span className="ag-olcu">{ilkAy} <small>ay</small> · {s.waterfallTeslim.toFixed(1)} <small>ay</small></span>
          <span className="ag-not">Sprint'lerle · waterfall</span>
        </div>
        <div className="ag-kutu">
          <h4>12. ayda teslim edilen değer</h4>
          <span className="ag-olcu">%{onIkide.toFixed(0)} · %{s.waterfallTeslim <= 12 ? 100 : 0}</span>
          <span className="ag-not">Sprint'lerle · waterfall</span>
        </div>
        <div className="ag-kutu">
          <h4>Boşa giden emek</h4>
          <span className="ag-olcu">{s.bosaIteratif.toFixed(1)} <small>ay</small> · {s.bosaWaterfall.toFixed(1)} <small>ay</small></span>
          <span className="ag-not">Sprint'lerle · waterfall</span>
        </div>
      </div>
      <p className="ag-not">
        Basit bir model: waterfall'da değişiklik gelene kadar yapılan işin değişen payı yeniden yapılır; Sprint'lerde yalnız devam eden Sprint'in değişen payı kaybolur ve kaybı en az değerli son özellikler öder. Sprint'lerle %80 değere çoğu zaman yılın ortasında ulaşılır: en değerli özellikler önce yapılır.
      </p>
    </div>
  );
}

// ---------------- G-A3-01: parti büyüklüğü oyunu ----------------

// istasyon sayısı s, parça sayısı n, parti büyüklüğü b; her istasyon parçayı 1 dakikada işler.
// Bir parti, bütün parçaları bir istasyonu bitirmeden sonrakine geçmez; müşteriye de parti hâlinde gider.
// tamam[s][i]: i. parçanın s. istasyonda bittiği dakika.
export function partiAkisi(s: number, n: number, b: number) {
  const tamam: number[][] = Array.from({ length: s }, () => Array(n).fill(0));
  for (let k = 0; k < s; k++) {
    for (let i = 0; i < n; i++) {
      const parti = Math.floor(i / b);
      const son = Math.min(n, (parti + 1) * b) - 1;
      const hazir = k === 0 ? 0 : tamam[k - 1]![son]!;
      const bos = i === 0 ? 0 : tamam[k]![i - 1]!;
      tamam[k]![i] = Math.max(hazir, bos) + 1;
    }
  }
  const teslim = Array.from({ length: n }, (_, i) => tamam[s - 1]![Math.min(n, (Math.floor(i / b) + 1) * b) - 1]!);
  return { tamam, teslim, ilkTeslim: teslim[0]!, toplam: teslim[n - 1]! };
}

const ISTASYON = ["Analiz", "Geliştirme", "Test", "Yayın"];
const PARCA = 20;

export function PartiOyunu() {
  const [b, setB] = useState(20);
  const [t, setT] = useState(0);
  const a = useMemo(() => partiAkisi(ISTASYON.length, PARCA, b), [b]);
  const sinir = a.toplam;
  const zaman = Math.min(t, sinir);
  const durum = (k: number, i: number) => {
    const bitis = a.tamam[k]![i]!;
    if (bitis <= zaman) return "bitti";
    if (bitis - 1 < zaman) return "is";
    return "bekliyor";
  };
  const musteride = a.teslim.filter((d) => d <= zaman).length;
  return (
    <div className="ag">
      <div className="ag-satir">
        <span>Parti büyüklüğü:</span>
        <div className="ag-secim" role="group" aria-label="Parti büyüklüğü">
          {[20, 10, 5, 1].map((v) => (
            <button key={v} type="button" className="cip" aria-pressed={b === v} onClick={() => { setB(v); setT(0); }}>
              {v === 1 ? "1 (tek parça akış)" : `${v}'lik`}
            </button>
          ))}
        </div>
      </div>
      <label>
        Dakika {zaman} / {sinir}
        <input type="range" min={0} max={sinir} value={zaman} onChange={(e) => setT(+e.target.value)} />
      </label>
      <div className="ag-hat">
        {ISTASYON.map((ad, k) => (
          <div key={ad} className="ag-istasyon">
            <h4>{ad}</h4>
            <div className="ag-parcalar" aria-label={`${ad}: ${a.tamam[k]!.filter((d) => d <= zaman).length} parça bitti`}>
              {Array.from({ length: PARCA }, (_, i) => {
                const d = durum(k, i);
                return <span key={i} className={`ag-parca ${d === "bitti" ? "ag-p-bitti" : d === "is" ? "ag-p-is" : ""}`} />;
              })}
            </div>
          </div>
        ))}
        <div className="ag-istasyon">
          <h4>Müşteride</h4>
          <span className="ag-olcu">{musteride}</span>
        </div>
      </div>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>İlk parça müşteride</h4>
          <span className="ag-olcu">{a.ilkTeslim}. <small>dakika</small></span>
        </div>
        <div className="ag-kutu">
          <h4>Bütün iş bitti</h4>
          <span className="ag-olcu">{a.toplam}. <small>dakika</small></span>
        </div>
      </div>
      <p className="ag-not">Her istasyon bir parçayı 1 dakikada işler. Parti, bütün parçaları bir istasyonu bitirmeden sonrakine geçmez ve müşteriye de parti hâlinde gider. Parti küçüldükçe hem ilk teslim hem toplam süre kısalır.</p>
    </div>
  );
}

// ---------------- G-A3-02: Little yasası ----------------

export function LittleHesap() {
  const [wip, setWip] = useState(12);
  const [verim, setVerim] = useState(4);
  const sure = verim > 0 ? wip / verim : 0;
  const yariWip = verim > 0 ? wip / 2 / verim : 0;
  return (
    <div className="ag">
      <div className="ag-satir">
        <label>
          Devam eden iş (WIP)
          <input type="range" min={1} max={40} value={wip} onChange={(e) => setWip(+e.target.value)} />
          <span className="ag-sayi">{wip}</span>
        </label>
        <label>
          Haftalık verim
          <input type="range" min={1} max={12} value={verim} onChange={(e) => setVerim(+e.target.value)} />
          <span className="ag-sayi">{verim} iş/hafta</span>
        </label>
      </div>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>Ortalama çevrim süresi</h4>
          <span className="ag-olcu">{sure.toFixed(1)} <small>hafta</small></span>
          <span className="ag-not">WIP / verim = {wip} / {verim}</span>
        </div>
        <div className="ag-kutu">
          <h4>WIP yarıya inerse</h4>
          <span className="ag-olcu">{yariWip.toFixed(1)} <small>hafta</small></span>
          <span className="ag-not">Verim aynı kalırsa her iş iki kat çabuk biter.</span>
        </div>
      </div>
      <div className="ag-cubuk" aria-hidden="true">
        <span style={{ width: `${Math.min(100, (sure / 10) * 100)}%` }} />
      </div>
      <p className="ag-not">Little yasası kararlı bir sistemin uzun dönem ortalamaları için geçerlidir: ortalama WIP = ortalama verim × ortalama çevrim süresi. Verimi artırmak zordur; WIP'i azaltmak ise bir karardır.</p>
    </div>
  );
}

// ---------------- G-A3-03: darboğaz şeridi ----------------

// Her gün "gelen" iş ilk adıma girer; her adım günde en fazla kapasitesi kadar iş işler.
// gun gün sonra her adımın önündeki kuyruk ve toplam biten iş.
export function darbogazAkisi(gelen: number, kapasite: number[], gun: number) {
  const kuyruk = kapasite.map(() => 0);
  let biten = 0;
  for (let d = 0; d < gun; d++) {
    kuyruk[0]! += gelen;
    for (let k = 0; k < kapasite.length; k++) {
      const islenen = Math.min(kuyruk[k]!, kapasite[k]!);
      kuyruk[k]! -= islenen;
      if (k + 1 < kapasite.length) kuyruk[k + 1]! += islenen;
      else biten += islenen;
    }
  }
  return { kuyruk, biten, verim: biten / gun };
}

const ADIMLAR = ["Analiz", "Geliştirme", "Test", "Yayın"];

export function DarbogazSeridi() {
  const [gelen, setGelen] = useState(6);
  const [kap, setKap] = useState([8, 10, 5, 9]);
  const gun = 20;
  const a = useMemo(() => darbogazAkisi(gelen, kap, gun), [gelen, kap]);
  const enDar = kap.indexOf(Math.min(...kap));
  const enBuyukKuyruk = Math.max(1, ...a.kuyruk);
  return (
    <div className="ag">
      <label>
        Günde gelen iş
        <input type="range" min={1} max={12} value={gelen} onChange={(e) => setGelen(+e.target.value)} />
        <span className="ag-sayi">{gelen}</span>
      </label>
      <div className="ag-hat">
        {ADIMLAR.map((ad, k) => (
          <div key={ad} className={`ag-istasyon ${k === enDar ? "ag-dar" : ""}`}>
            <h4>{ad}{k === enDar ? " · darboğaz" : ""}</h4>
            <label>
              <input type="number" min={1} max={20} value={kap[k]} aria-label={`${ad} kapasitesi`} onChange={(e) => setKap(kap.map((v, j) => (j === k ? Math.max(1, Math.min(20, +e.target.value || 1)) : v)))} />
              <span className="ag-not">iş/gün</span>
            </label>
            <span className="ag-not">Önünde bekleyen: <b className="ag-sayi">{a.kuyruk[k]}</b></span>
            <div className={`ag-cubuk ${a.kuyruk[k]! > gelen ? "ag-c-uyari" : ""}`}>
              <span style={{ width: `${(a.kuyruk[k]! / enBuyukKuyruk) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>{gun} günde biten</h4>
          <span className="ag-olcu">{a.biten} <small>iş</small></span>
        </div>
        <div className="ag-kutu">
          <h4>Günlük verim</h4>
          <span className="ag-olcu">{a.verim.toFixed(1)} <small>iş/gün</small></span>
          <span className="ag-not">En fazla min(gelen, en dar adım) = {Math.min(gelen, ...kap)}</span>
        </div>
      </div>
      <p className="ag-not">Darboğaz olmayan bir adımın kapasitesini artırmayı dene: biten iş değişmez, yalnızca kuyruk yer değiştirir. Darboğazı genişletince verim artar ve darboğaz başka bir adıma geçer.</p>
    </div>
  );
}
