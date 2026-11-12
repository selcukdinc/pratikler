// /: Karma test. Seçilen ünitelerden ve kaynaklardan rastgele sorular, karışık
// sırayla ve karışık şıklarla tek tek gelir. Puan her sorudaki ilk cevaba göre
// hesaplanır; cevaplar soru havuzundaki gibi ilerlemeye ve tekrara işlenir.

import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import { href } from "../lib/router";
import { inline } from "../components/Markdown";
import { KAYNAKLAR, QuestionCard, kaynagaUyar, karistir, type KaynakSecimi } from "./Questions";
import { PRATIK } from "../lib/pratik";
import { benzerleriAyikla } from "../../shared/benzerler";
import type { Question, SoruDurumlari, Topic } from "../../shared/api";
import { KarmaIskeleti } from "../components/Iskelet";

const SAYILAR = [10, 20, 30, 50, 0] as const;
const AYAR = "pratik:karma-ayar";

interface Ayar {
  uniteler: number[];
  kaynak: KaynakSecimi;
  sayi: number;
  // true: önce hiç denenmemiş ve yanlış yapılan sorular gelir
  oncelik: boolean;
}

const VARSAYILAN: Ayar = { uniteler: [], kaynak: "", sayi: 20, oncelik: true };

function ayarOku(): Ayar {
  try {
    const a = JSON.parse(localStorage.getItem(AYAR) ?? "null") as Partial<Ayar> | null;
    if (!a) return VARSAYILAN;
    return {
      uniteler: Array.isArray(a.uniteler) ? a.uniteler.filter((x) => typeof x === "number") : [],
      kaynak: KAYNAKLAR.some(([k]) => k === a.kaynak) ? a.kaynak! : "",
      sayi: SAYILAR.includes(a.sayi as (typeof SAYILAR)[number]) ? a.sayi! : 20,
      oncelik: a.oncelik !== false,
    };
  } catch {
    return VARSAYILAN;
  }
}

function ayarYaz(a: Ayar) {
  try {
    localStorage.setItem(AYAR, JSON.stringify(a));
  } catch {
    // gizli pencerede kayıt olmayabilir
  }
}

// Seçilen sorulardan testi kurar: karışık sıra, istenirse çözülmemişler önde
export function testKur(havuz: Question[], durumlar: SoruDurumlari, a: Ayar): Question[] {
  const uygun = havuz.filter((q) => (a.uniteler.length === 0 || a.uniteler.includes(q.week)) && kaynagaUyar(q, a.kaynak));
  const sira = karistir(uygun.length);
  let liste = sira.map((i) => uygun[i]!);
  if (a.oncelik) {
    const puan = (q: Question) => (durumlar[q.id] === undefined ? 0 : durumlar[q.id] === "yanlis" ? 1 : 2);
    liste = liste.map((q, i) => ({ q, i })).sort((x, y) => puan(x.q) - puan(y.q) || x.i - y.i).map((x) => x.q);
  }
  return a.sayi ? liste.slice(0, a.sayi) : liste;
}

export function Karma({ topics }: { topics: Topic[] }) {
  const [havuz, setHavuz] = useState<Question[] | null>(null);
  const [durumlar, setDurumlar] = useState<SoruDurumlari>({});
  const [hata, setHata] = useState<string | null>(null);
  const [ayar, setAyar] = useState<Ayar>(ayarOku);
  const [test, setTest] = useState<Question[] | null>(null);
  const [sira, setSira] = useState(0);
  // Her sorudaki ilk cevap
  const [sonuclar, setSonuclar] = useState<Map<string, boolean>>(new Map());

  const yukle = () => {
    api.questions().then(setHavuz, (e) => setHata(String(e)));
    api.soruDurumlari().then(setDurumlar, () => setDurumlar({}));
  };
  useEffect(yukle, []);

  const degistir = (yeni: Partial<Ayar>) => {
    const a = { ...ayar, ...yeni };
    setAyar(a);
    ayarYaz(a);
  };

  // Aynı bilgiyi soran ikizlerden biri kalır
  const tekil = useMemo(() => (havuz ? benzerleriAyikla(havuz, (id) => durumlar[id] !== undefined, PRATIK.benzerler) : null), [havuz, durumlar]);
  const uniteSayilari = useMemo(() => {
    const m = new Map<number, number>();
    for (const q of tekil ?? []) if (kaynagaUyar(q, ayar.kaynak)) m.set(q.week, (m.get(q.week) ?? 0) + 1);
    return m;
  }, [tekil, ayar.kaynak]);
  const uygunSayi = [...uniteSayilari].filter(([u]) => ayar.uniteler.length === 0 || ayar.uniteler.includes(u)).reduce((t, [, n]) => t + n, 0);
  const acikUniteler = PRATIK.uniteler.filter((u) => topics.length === 0 || topics.some((t) => t.week === u.no));

  const baslat = () => {
    if (!tekil) return;
    setTest(testKur(tekil, durumlar, ayar));
    setSira(0);
    setSonuclar(new Map());
  };

  const bitir = () => {
    setTest(null);
    yukle();
  };

  if (hata) return <p className="empty">Sorular yüklenemedi: {hata}</p>;
  if (!tekil) return <div className="karma"><KarmaIskeleti /></div>;

  if (!test) {
    const uniteSec = (no: number) =>
      degistir({ uniteler: ayar.uniteler.includes(no) ? ayar.uniteler.filter((x) => x !== no) : [...ayar.uniteler, no].sort((a, b) => a - b) });
    return (
      <div className="karma">
        <p className="karma-giris">
          Seçtiğin ünitelerden sorular <strong>karışık sırayla</strong> gelir, şıkların yeri de her soruda değişir. Amaç
          kitabın bölüm sonu sorularını ve çıkmış soruları ezberlemeden, soru kalıplarını tanıyarak çözmek.
        </p>
        <section className="karma-ayar" aria-label="Test ayarları">
          <div className="secici-satir" role="group" aria-label="Üniteler">
            <span className="secici-etiket">Ünite</span>
            <button className="cip" aria-pressed={ayar.uniteler.length === 0} onClick={() => degistir({ uniteler: [] })}>Hepsi</button>
            {acikUniteler.map((u) => (
              <button key={u.no} className="cip" aria-pressed={ayar.uniteler.includes(u.no)} onClick={() => uniteSec(u.no)} title={u.baslik}>
                {u.no}
                <span className="cip-sayi">{uniteSayilari.get(u.no) ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="secici-satir" role="group" aria-label="Kaynak">
            <span className="secici-etiket">Kaynak</span>
            {KAYNAKLAR.map(([k, ad]) => (
              <button key={k} className="cip" aria-pressed={ayar.kaynak === k} onClick={() => degistir({ kaynak: k })}>{ad}</button>
            ))}
          </div>
          <div className="secici-satir" role="group" aria-label="Soru sayısı">
            <span className="secici-etiket">Soru</span>
            {SAYILAR.map((n) => (
              <button key={n} className="cip" aria-pressed={ayar.sayi === n} onClick={() => degistir({ sayi: n })}>{n || "Tümü"}</button>
            ))}
          </div>
          <label className="karma-oncelik">
            <input type="checkbox" checked={ayar.oncelik} onChange={(e) => degistir({ oncelik: e.target.checked })} />
            Önce hiç çözmediğim ve yanlış yaptığım sorular gelsin
          </label>
          <div className="form-dugmeler">
            <button className="primary" onClick={baslat} disabled={uygunSayi === 0}>
              Testi başlat ({ayar.sayi ? Math.min(ayar.sayi, uygunSayi) : uygunSayi} soru)
            </button>
            <span className="hint">Seçimlere uyan {uygunSayi} soru var.</span>
          </div>
        </section>
        <ul className="karma-uniteler">
          {acikUniteler.map((u) => (
            <li key={u.no}>
              <a href={href({ page: "sorular", hafta: u.no })}>
                <span className="ders-hafta">{u.no}. ünite</span> {u.baslik}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const cevaplanan = sonuclar.size;
  const dogru = [...sonuclar.values()].filter(Boolean).length;
  const bitti = sira >= test.length;

  if (bitti) {
    const yanlislar = test.filter((q) => sonuclar.get(q.id) === false);
    const bos = test.filter((q) => !sonuclar.has(q.id));
    const oran = test.length ? Math.round((dogru / test.length) * 100) : 0;
    return (
      <div className="karma">
        <section className="karma-sonuc" aria-live="polite">
          <h2>Test bitti</h2>
          <p className="karma-puan">
            <strong>{dogru}</strong> / {test.length} doğru <span className="hint">(%{oran})</span>
          </p>
          {bos.length > 0 && <p className="hint">{bos.length} soruyu boş geçtin.</p>}
          {yanlislar.length > 0 && (
            <>
              <h3>Yanlış yaptıkların</h3>
              <p className="hint">Bunlar Tekrar sayfasına eklendi; birkaç gün sonra yeniden karşına çıkacaklar.</p>
              <ol className="karma-yanlislar">
                {yanlislar.map((q) => (
                  <li key={q.id}>
                    <a href={`${href({ page: "sorular", hafta: q.week })}#soru-${q.id}`}>{inline(ozet(q.prompt))}</a>
                    <span className="tag">Ü{q.week}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
          <div className="form-dugmeler">
            <button className="primary" onClick={baslat}>Aynı ayarlarla yeni test</button>
            <button onClick={bitir}>Ayarları değiştir</button>
          </div>
        </section>
      </div>
    );
  }

  const q = test[sira]!;
  return (
    <div className="karma">
      <div className="karma-ust">
        <span>
          Soru <strong>{sira + 1}</strong> / {test.length}
        </span>
        <span className="karma-cubuk" aria-hidden="true"><span style={{ width: `${(sira / test.length) * 100}%` }} /></span>
        <span>
          {cevaplanan} cevap · <span className="ok">{dogru} doğru</span>
        </span>
        <button className="bagli-dugme" onClick={() => setSira(test.length)}>Testi bitir</button>
      </div>
      <QuestionCard
        key={q.id}
        q={q}
        n={sira + 1}
        durum={durumlar[q.id]}
        onSonuc={(d) => setSonuclar((m) => (m.has(q.id) ? m : new Map(m).set(q.id, d)))}
      />
      <div className="karma-gezinti">
        <button onClick={() => setSira(sira - 1)} disabled={sira === 0}>← Önceki</button>
        <button className={sonuclar.has(q.id) ? "primary" : undefined} onClick={() => setSira(sira + 1)}>
          {sira + 1 === test.length ? "Sonucu gör" : sonuclar.has(q.id) ? "Sonraki soru →" : "Boş geç →"}
        </button>
      </div>
    </div>
  );
}

function ozet(prompt: string): string {
  const s = prompt.replace(/[`*_#>]/g, "").replace(/\s+/g, " ").trim();
  return s.length > 110 ? `${s.slice(0, 109)}…` : s;
}
