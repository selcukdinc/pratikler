// Görünürlük, akış ve teknik borç şekilleri (9-11. üniteler): CFD gezgini, Kanban tahtası,
// Monte Carlo tahmini ve teknik borç faizi. Saf hesaplar ayrı işlevlerdedir ve
// olcum.test.ts'te sınanır. Hepsi tarayıcıda çalışır, istek atmaz.
import { useMemo, useState } from "react";

// ---------------- akış modeli (CFD ve Kanban tahtası) ----------------

export interface AkisAyari {
  // Günde gelen iş (ondalık olabilir: 1,2 = beş günde altı iş)
  gelen: number;
  gun: number;
  // Aşama başına WIP sınırı; null: sınır yok (gelen iş hemen başlar)
  wip: { gelistirme: number; test: number } | null;
  // Günlük iş birimi kapasitesi ve öğe başına gereken iş
  gelistirmeKap?: number;
  testKap?: number;
  gelistirmeIs?: number;
  testIs?: number;
}

export interface AkisOgesi {
  no: number;
  gelis: number;
  basla?: number;
  teste?: number;
  bitis?: number;
  gelKalan: number;
  testKalan: number;
}

export interface AkisGunu {
  gun: number;
  geldi: number;
  basladi: number;
  testeGirdi: number;
  bitti: number;
}

export interface AkisSonucu {
  gunler: AkisGunu[];
  ogeler: AkisOgesi[];
  ortCycle: number;
  ortWip: number;
  throughput: number;
}

// Kapasite, aşamadaki öğelere eşit bölünür (herkes her işe dokunur); biten öğenin payı
// ötekilere geçer.
function paylas(ogeler: AkisOgesi[], kap: number, alan: "gelKalan" | "testKalan") {
  let kalan = kap;
  let acik = ogeler.filter((o) => o[alan] > 1e-9);
  while (kalan > 1e-9 && acik.length) {
    const pay = kalan / acik.length;
    for (const o of acik) {
      const al = Math.min(pay, o[alan]);
      o[alan] -= al;
      kalan -= al;
    }
    acik = acik.filter((o) => o[alan] > 1e-9);
  }
}

export function akisModeli(a: AkisAyari): AkisSonucu {
  const gk = a.gelistirmeKap ?? 3;
  const tk = a.testKap ?? 1;
  const gi = a.gelistirmeIs ?? 2.5;
  const ti = a.testIs ?? 1;
  const ogeler: AkisOgesi[] = [];
  const gunler: AkisGunu[] = [];
  let birikim = 0;
  for (let d = 1; d <= a.gun; d++) {
    birikim += a.gelen;
    while (birikim >= 1 - 1e-9) {
      ogeler.push({ no: ogeler.length + 1, gelis: d, gelKalan: gi, testKalan: ti });
      birikim -= 1;
    }
    // Test önce: dünden teste girmiş öğeler sırayla (en eski önce) test edilir. Bugün
    // teste giren öğe yarın test edilmeye başlar.
    const testte = () => ogeler.filter((o) => o.teste !== undefined && o.bitis === undefined);
    let tkKalan = tk;
    for (const o of testte()) {
      const al = Math.min(tkKalan, o.testKalan);
      o.testKalan -= al;
      tkKalan -= al;
      if (o.testKalan <= 1e-9) o.bitis = d;
      if (tkKalan <= 1e-9) break;
    }
    // Geliştirme: yeni iş çekilir, kapasite açık işlere eşit bölünür
    const gelistirmede = () => ogeler.filter((o) => o.basla !== undefined && o.teste === undefined);
    for (const o of ogeler.filter((x) => x.basla === undefined)) {
      if (a.wip && gelistirmede().length >= a.wip.gelistirme) break;
      o.basla = d;
    }
    paylas(gelistirmede().filter((o) => o.gelKalan > 1e-9), gk, "gelKalan");
    for (const o of gelistirmede().filter((x) => x.gelKalan <= 1e-9)) {
      if (a.wip && testte().length >= a.wip.test) break;
      o.teste = d;
    }
    const say = (f: (o: AkisOgesi) => boolean) => ogeler.filter(f).length;
    gunler.push({
      gun: d,
      geldi: ogeler.length,
      basladi: say((o) => o.basla !== undefined),
      testeGirdi: say((o) => o.teste !== undefined),
      bitti: say((o) => o.bitis !== undefined),
    });
  }
  const biten = ogeler.filter((o) => o.bitis !== undefined);
  const ortCycle = biten.length ? biten.reduce((t, o) => t + (o.bitis! - o.basla! + 1), 0) / biten.length : 0;
  const ortWip = gunler.length ? gunler.reduce((t, g) => t + g.basladi - g.bitti, 0) / gunler.length : 0;
  return { gunler, ogeler, ortCycle, ortWip, throughput: a.gun ? biten.length / a.gun : 0 };
}

const bir = (x: number) => x.toFixed(1).replace(".", ",");
const WIP_SINIRI = { gelistirme: 3, test: 2 };

function AkisAyarlari({ gelen, setGelen, wip, setWip }: { gelen: number; setGelen: (x: number) => void; wip: boolean; setWip: (x: boolean) => void }) {
  return (
    <div className="ag-satir">
      <span>Günde gelen iş</span>
      <div className="ag-secim" role="group" aria-label="Günde gelen iş">
        {[0.8, 1, 1.2, 1.5].map((g) => (
          <button key={g} type="button" className="cip" aria-pressed={gelen === g} onClick={() => setGelen(g)}>
            {bir(g)}
          </button>
        ))}
      </div>
      <div className="ag-secim" role="group" aria-label="WIP sınırı">
        <button type="button" className="cip" aria-pressed={!wip} onClick={() => setWip(false)}>
          WIP sınırı yok
        </button>
        <button type="button" className="cip" aria-pressed={wip} onClick={() => setWip(true)}>
          WIP sınırı: geliştirme 3, test 2
        </button>
      </div>
    </div>
  );
}

function AkisOlculeri({ s }: { s: AkisSonucu }) {
  return (
    <div className="ag-izgara">
      <div className="ag-kutu">
        <h4>Ortalama cycle time</h4>
        <span className="ag-olcu">
          {bir(s.ortCycle)} <small>gün</small>
        </span>
      </div>
      <div className="ag-kutu">
        <h4>Ortalama WIP</h4>
        <span className="ag-olcu">{bir(s.ortWip)}</span>
      </div>
      <div className="ag-kutu">
        <h4>Throughput</h4>
        <span className="ag-olcu">
          {bir(s.throughput)} <small>iş/gün</small>
        </span>
      </div>
    </div>
  );
}

// ---------------- G-S9-02: CFD gezgini ----------------

export function CfdGezgini() {
  const [gelen, setGelen] = useState(1.5);
  const [wip, setWip] = useState(false);
  const s = useMemo(() => akisModeli({ gelen, gun: 30, wip: wip ? WIP_SINIRI : null }), [gelen, wip]);
  const W = 720;
  const H = 260;
  const p = { l: 36, r: 10, t: 10, b: 24 };
  const ust = Math.max(1, s.gunler.at(-1)!.geldi);
  const x = (d: number) => p.l + (d / 30) * (W - p.l - p.r);
  const y = (v: number) => p.t + (1 - v / ust) * (H - p.t - p.b);
  const bant = (alt: (g: AkisGunu) => number, ust: (g: AkisGunu) => number) =>
    [...s.gunler.map((g) => `${x(g.gun)},${y(ust(g))}`), ...[...s.gunler].reverse().map((g) => `${x(g.gun)},${y(alt(g))}`)].join(" ");
  return (
    <div className="ag">
      <AkisAyarlari gelen={gelen} setGelen={setGelen} wip={wip} setWip={setWip} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Kümülatif akış diyagramı: hazır, geliştirme, test ve bitti bantları">
        <polygon className="ag-bant-hazir" points={bant((g) => g.basladi, (g) => g.geldi)} />
        <polygon className="ag-bant-gel" points={bant((g) => g.testeGirdi, (g) => g.basladi)} />
        <polygon className="ag-bant-test" points={bant((g) => g.bitti, (g) => g.testeGirdi)} />
        <polygon className="ag-bant-bitti" points={bant(() => 0, (g) => g.bitti)} />
        <line className="ag-eksen" x1={p.l} y1={H - p.b} x2={W - p.r} y2={H - p.b} />
        <line className="ag-eksen" x1={p.l} y1={p.t} x2={p.l} y2={H - p.b} />
        <text className="ag-yazi" x={p.l - 4} y={y(ust) + 4} textAnchor="end">
          {ust}
        </text>
        <text className="ag-yazi" x={W - p.r} y={H - 6} textAnchor="end">
          30. gün
        </text>
      </svg>
      <div className="ag-lejant">
        <span className="ag-l-hazir">Hazır (başlamadı)</span>
        <span className="ag-l-gel">Geliştirme</span>
        <span className="ag-l-test">Test</span>
        <span className="ag-l-bitti">Bitti</span>
      </div>
      <AkisOlculeri s={s} />
      <p className="ag-not">
        Takım günde yaklaşık 1 iş bitirebiliyor. Gelen iş bunu aşınca WIP sınırı yokken Geliştirme bandı kalınlaşır: herkes her işe başlar, cycle time uzar. WIP sınırıyla bekleyen iş Hazır bandında birikir; başlanan iş hızlı biter ve "hangisi önce?" kararı görünür olur.
      </p>
    </div>
  );
}

// ---------------- G-S10-01: Kanban tahtası ----------------

export function KanbanTahtasi() {
  const [gelen, setGelen] = useState(1.5);
  const [wip, setWip] = useState(true);
  const [gun, setGun] = useState(15);
  const s = useMemo(() => akisModeli({ gelen, gun, wip: wip ? WIP_SINIRI : null }), [gelen, gun, wip]);
  const yas = (o: AkisOgesi) => gun - (o.basla ?? gun) + 1;
  const sutunlar: [string, AkisOgesi[], number | null][] = [
    ["Hazır", s.ogeler.filter((o) => o.basla === undefined), null],
    ["Geliştirme", s.ogeler.filter((o) => o.basla !== undefined && o.teste === undefined), wip ? WIP_SINIRI.gelistirme : null],
    ["Test", s.ogeler.filter((o) => o.teste !== undefined && o.bitis === undefined), wip ? WIP_SINIRI.test : null],
    ["Bitti", s.ogeler.filter((o) => o.bitis !== undefined), null],
  ];
  return (
    <div className="ag">
      <AkisAyarlari gelen={gelen} setGelen={setGelen} wip={wip} setWip={setWip} />
      <label>
        Gün
        <input type="range" min={1} max={30} value={gun} onChange={(e) => setGun(+e.target.value)} />
        <span className="ag-sayi">{gun}</span>
      </label>
      <div className="ag-hat">
        {sutunlar.map(([ad, liste, sinir]) => (
          <div key={ad} className={`ag-istasyon ${sinir !== null && liste.length >= sinir ? "ag-dolu" : ""}`}>
            <h4>
              {ad} ({liste.length}
              {sinir !== null ? ` / ${sinir}` : ""})
            </h4>
            <div className="ag-kartlar">
              {(ad === "Bitti" ? liste.slice(-8) : liste.slice(0, 12)).map((o) => (
                <span key={o.no} className={`ag-kanban-kart ${ad !== "Hazır" && ad !== "Bitti" && yas(o) > 4 ? "ag-yasli" : ""}`} title={ad === "Bitti" ? `Cycle time ${o.bitis! - o.basla! + 1} gün` : `Yaş ${yas(o)} gün`}>
                  #{o.no}
                  {ad !== "Hazır" && ad !== "Bitti" ? <small> {yas(o)}g</small> : null}
                </span>
              ))}
              {ad !== "Bitti" && liste.length > 12 && <span className="ag-not">+{liste.length - 12}</span>}
            </div>
          </div>
        ))}
      </div>
      <AkisOlculeri s={s} />
      <p className="ag-not">
        Kartların üstündeki sayı iş öğesinin yaşıdır (başladığından beri geçen gün); 4 günü aşanlar kırmızı. WIP sınırı olan aşama dolunca yeni iş çekilmez, kart soldaki sütunda bekler.
      </p>
    </div>
  );
}

// ---------------- G-S9-03: Monte Carlo tahmini ----------------

function mulberry(t: number) {
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// Geçmiş günlük throughput'tan rastgele gün çekerek hedef sayıda işin kaç günde
// biteceğini deneme kez simüle eder; sonuçlar küçükten büyüğe sıralı döner.
export function monteCarlo(gecmis: number[], hedef: number, deneme: number, tohum = 1): number[] {
  const r = mulberry(tohum);
  if (!gecmis.some((x) => x > 0)) return [];
  const sonuc: number[] = [];
  for (let i = 0; i < deneme; i++) {
    let biten = 0;
    let gun = 0;
    while (biten < hedef) {
      biten += gecmis[Math.floor(r() * gecmis.length)]!;
      gun++;
    }
    sonuc.push(gun);
  }
  return sonuc.sort((a, b) => a - b);
}

export const yuzdelik = (sirali: number[], p: number) => sirali[Math.min(sirali.length - 1, Math.ceil((p / 100) * sirali.length) - 1)] ?? 0;

export const MC_GECMIS = [2, 0, 3, 1, 4, 2, 2, 0, 1, 3, 2, 5, 1, 0, 2, 3, 2, 1, 4, 2];

export function MonteCarlo() {
  const [hedef, setHedef] = useState(40);
  const [tohum, setTohum] = useState(1);
  const sonuc = useMemo(() => monteCarlo(MC_GECMIS, hedef, 2000, tohum), [hedef, tohum]);
  const enAz = sonuc[0] ?? 0;
  const enCok = sonuc.at(-1) ?? 0;
  const sayim = new Map<number, number>();
  for (const g of sonuc) sayim.set(g, (sayim.get(g) ?? 0) + 1);
  const tepe = Math.max(1, ...sayim.values());
  const ortalamaGun = Math.ceil(hedef / (MC_GECMIS.reduce((a, b) => a + b, 0) / MC_GECMIS.length));
  const W = 720;
  const H = 200;
  const bw = (W - 40) / Math.max(1, enCok - enAz + 1);
  const p85 = yuzdelik(sonuc, 85);
  return (
    <div className="ag">
      <p className="ag-not">Squad'ın son 20 iş gününde bitirdiği öğeler: {MC_GECMIS.join(", ")}.</p>
      <div className="ag-satir">
        <label>
          Bitecek iş
          <input type="range" min={10} max={80} step={5} value={hedef} onChange={(e) => setHedef(+e.target.value)} />
          <span className="ag-sayi">{hedef} öğe</span>
        </label>
        <button type="button" className="cip" onClick={() => setTohum(tohum + 1)}>
          Yeniden simüle et
        </button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`2000 denemenin dağılımı: en az ${enAz}, en çok ${enCok} gün`}>
        {[...sayim.entries()].map(([g, n]) => (
          <rect key={g} className={g <= p85 ? "ag-sutun-a" : "ag-sutun-b"} x={20 + (g - enAz) * bw} y={H - 24 - (n / tepe) * (H - 40)} width={Math.max(1, bw - 1)} height={(n / tepe) * (H - 40)} />
        ))}
        <text className="ag-yazi" x={20} y={H - 6}>
          {enAz} gün
        </text>
        <text className="ag-yazi" x={W - 20} y={H - 6} textAnchor="end">
          {enCok} gün
        </text>
      </svg>
      <div className="ag-izgara">
        {[50, 85, 95].map((y) => (
          <div key={y} className="ag-kutu">
            <h4>%{y} olasılıkla</h4>
            <span className="ag-olcu">
              ≤ {yuzdelik(sonuc, y)} <small>gün</small>
            </span>
          </div>
        ))}
        <div className="ag-kutu">
          <h4>Ortalamayla tek tarih</h4>
          <span className="ag-olcu">
            {ortalamaGun} <small>gün</small>
          </span>
          <span className="ag-not">Kabaca yarı yarıya tutar.</span>
        </div>
      </div>
      <p className="ag-not">2000 olası gelecek, her gün geçmişten rastgele bir gün seçilerek üretildi. Ortalamayla verilen tek tarih aslında yazı turadır; %85'lik süre çoğu karar için daha dürüst bir sözdür.</p>
    </div>
  );
}

// ---------------- G-S11-01: teknik borç faizi ----------------

export type BorcSecimi = "kisayol" | "normal" | "temizlik";
export const BORC_ADI: Record<BorcSecimi, string> = { kisayol: "Kısayol", normal: "Normal", temizlik: "Temizlik" };

// Her Sprint: hız = taban × (1 − borç/100) × çarpan. Kısayol bu Sprint %20 hızlandırır ama
// borcu 8 artırır; normal çalışmada borç her Sprint 1 artar; temizlik Sprint'i %20
// yavaşlatır ve borcu 10 azaltır.
export function borcFaizi(secimler: BorcSecimi[], taban = 30, ilkBorc = 10) {
  let borc = ilkBorc;
  let toplam = 0;
  const hiz: number[] = [];
  const birikim: number[] = [];
  const borclar: number[] = [];
  for (const s of secimler) {
    const h = taban * (1 - borc / 100) * (s === "kisayol" ? 1.2 : s === "temizlik" ? 0.8 : 1);
    borc = Math.max(0, Math.min(90, borc + (s === "kisayol" ? 8 : s === "temizlik" ? -10 : 1)));
    toplam += h;
    hiz.push(h);
    birikim.push(toplam);
    borclar.push(borc);
  }
  return { hiz, birikim, borclar, toplam };
}

export function TeknikBorc() {
  const [secim, setSecim] = useState<BorcSecimi[]>(Array(10).fill("kisayol"));
  const sen = borcFaizi(secim);
  const normal = borcFaizi(Array(10).fill("normal"));
  const W = 720;
  const H = 220;
  const p = { l: 36, r: 10, t: 10, b: 24 };
  const ust = 40;
  const x = (i: number) => p.l + (i / 9) * (W - p.l - p.r);
  const y = (v: number) => p.t + (1 - v / ust) * (H - p.t - p.b);
  const cizgi = (d: number[]) => d.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  return (
    <div className="ag">
      <p className="ag-not">Her Sprint için bir yol seç: kısayol (test ve tasarımı atla), normal ya da temizlik (borç öde).</p>
      <div className="ag-borc">
        {secim.map((s, i) => (
          <div key={i} className="ag-borc-sprint">
            <span className="ag-not">S{i + 1}</span>
            {(["kisayol", "normal", "temizlik"] as BorcSecimi[]).map((b) => (
              <button key={b} type="button" className="cip" aria-pressed={s === b} onClick={() => setSecim(secim.map((x, j) => (j === i ? b : x)))}>
                {BORC_ADI[b]}
              </button>
            ))}
          </div>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Sprint başına hız: senin seçimlerin ve hep normal çalışma">
        <line className="ag-eksen" x1={p.l} y1={H - p.b} x2={W - p.r} y2={H - p.b} />
        <line className="ag-eksen" x1={p.l} y1={p.t} x2={p.l} y2={H - p.b} />
        <polyline className="ag-cizgi-b" points={cizgi(normal.hiz)} />
        <polyline className="ag-cizgi-a" points={cizgi(sen.hiz)} />
        <text className="ag-yazi" x={p.l - 4} y={y(ust) + 4} textAnchor="end">
          {ust}
        </text>
        <text className="ag-yazi" x={W - p.r} y={H - 6} textAnchor="end">
          10. Sprint
        </text>
      </svg>
      <div className="ag-lejant">
        <span>Senin seçimlerin: Sprint başına hız</span>
        <span className="ag-l-b">Hep normal çalışma</span>
      </div>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>10 Sprint'te toplam</h4>
          <span className="ag-olcu">
            {Math.round(sen.toplam)} <small>puan</small>
          </span>
          <span className="ag-not">Hep normal: {Math.round(normal.toplam)}</span>
        </div>
        <div className="ag-kutu">
          <h4>Son teknik borç</h4>
          <span className="ag-olcu">{sen.borclar.at(-1)}</span>
          <span className="ag-not">Hep normal: {normal.borclar.at(-1)}</span>
        </div>
      </div>
      <p className="ag-not">Kısayol ilk Sprint'te hız kazandırır; sonra her değişiklik borcun faizini öder. Arada bir temizlik Sprint'i ya da her Sprint küçük bir pay, eğriyi yeniden yukarı çevirir.</p>
    </div>
  );
}
