// 19. ünitenin etkileşimli şekilleri: gerçek uygulamaların karşılaştırması (simülatör hazır
// ayarlarına bağlanır) ve iki tasarım alıştırması. Kod atölyesi ./atolye.tsx'te.
import { useState } from "react";
import { href } from "../../../../src/lib/router";
import { Rozet } from "../../../../src/kripto/Rozet";
import { tasarimYaz } from "../../../../src/kripto/mesajlasma/model";
import { OZELLIK_ADI, VAKA_TARIHI, VAKALAR, type Durum, type VakaOzellik } from "../../../../src/kripto/mesajlasma/vakalar";
import { ALISTIRMALAR, SONUC_ADI, karsilayanlar, type Sonuc as Koruma } from "../../../../src/kripto/tasarim";
import { Secim } from "./temeller";

// ---------------- G-S19-01: gerçek uygulamalar ----------------

const DURUM_IMI: Record<Durum, string> = { evet: "✓", hayir: "✗", secime: "seçime bağlı" };
const OZELLIKLER = Object.keys(OZELLIK_ADI) as VakaOzellik[];

export function VakaTablosu() {
  const [secili, setSecili] = useState(VAKALAR[0]!.id);
  const v = VAKALAR.find((x) => x.id === secili)!;
  const simulator = `${href({ page: "mesajlasma" })}#tasarim=${tasarimYaz(v.tasarim)}&vaka=${v.id}`;
  return (
    <div className="sf">
      <div className="sf-tablo-sar">
        <table className="sf-tablo sf-vaka-tablo">
          <thead>
            <tr>
              <th />
              {OZELLIKLER.map((o) => (
                <th key={o}>{OZELLIK_ADI[o]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VAKALAR.map((x) => (
              <tr key={x.id} className={x.id === secili ? "sf-vurgu" : ""}>
                <th>
                  <button type="button" className="sf-bag" aria-pressed={x.id === secili} onClick={() => setSecili(x.id)}>
                    {x.ad}
                  </button>
                </th>
                {OZELLIKLER.map((o) => (
                  <td key={o} className={`sf-durum-${x.ozellik[o]}`}>
                    {DURUM_IMI[x.ozellik[o]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sf-kutu">
        <h4>{v.ad}</h4>
        <p>{v.ozet}</p>
        <ul className="sf-liste">
          {v.notlar.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <div className="sf-satir">
          <a className="cip" href={simulator}>
            Simülatörde aç
          </a>
          <a href={v.kaynak.url} target="_blank" rel="noreferrer" className="sf-not">
            Kaynak: {v.kaynak.ad}
          </a>
        </div>
      </div>
      <p className="sf-not">Bu bir modeldir; tarih: {VAKA_TARIHI}. Ürünler değiştikçe ayarlar ve özellikler değişebilir. "Seçime bağlı": kullanıcı ayarlardan açarsa.</p>
    </div>
  );
}

// ---------------- G-S19-02 ve 03: tasarım alıştırmaları ----------------

const IM: Record<Koruma, string> = { korur: "✓", kismen: "~", korumaz: "✗" };

function TasarimAlistirmasi({ id }: { id: string }) {
  const a = ALISTIRMALAR.find((x) => x.id === id)!;
  const [secenek, setSecenek] = useState<Set<string>>(new Set());
  const gorunen = a.tehditler.filter((t) => !t.secenek || secenek.has(t.secenek));
  const [secili, setSecili] = useState<Set<string>>(() => new Set(a.tehditler.slice(0, 2).map((t) => t.id)));
  const [mimari, setMimari] = useState(a.mimariler[0]!.id);
  const [kararlar, setKararlar] = useState<number[]>(() => a.kararlar.map(() => 0));
  const m = a.mimariler.find((x) => x.id === mimari)!;
  const istenen = gorunen.filter((t) => secili.has(t.id)).map((t) => t.id);
  const uygun = karsilayanlar(a, istenen);
  const cevir = (t: string) =>
    setSecili((s) => {
      const y = new Set(s);
      if (y.has(t)) y.delete(t);
      else y.add(t);
      return y;
    });
  return (
    <div className="sf">
      <p className="sf-tanim">{a.tanim}</p>
      {a.secenekler?.map((s) => (
        <label key={s.id} className="sf-kutucuk">
          <input
            type="checkbox"
            checked={secenek.has(s.id)}
            onChange={(e) =>
              setSecenek((x) => {
                const y = new Set(x);
                if (e.target.checked) y.add(s.id);
                else y.delete(s.id);
                return y;
              })
            }
          />{" "}
          {s.ad}
          {secenek.has(s.id) && <span className="sf-not"> · {s.not}</span>}
        </label>
      ))}
      <h4>1. Kimden korunuyoruz?</h4>
      <div className="sf-tehditler" role="group" aria-label="Tehdit kartları">
        {gorunen.map((t) => (
          <button key={t.id} type="button" className="sf-tehdit" aria-pressed={secili.has(t.id)} onClick={() => cevir(t.id)}>
            {t.ad}
          </button>
        ))}
      </div>
      <p className="sf-not">
        {istenen.length === 0
          ? "Önemsediğin tehditleri seç."
          : uygun.length
            ? `Seçtiğin ${istenen.length} tehdidin hepsini karşılayan mimari: ${uygun.map((u) => a.mimariler.find((x) => x.id === u)!.ad).join(", ")}.`
            : `Seçtiğin ${istenen.length} tehdidin hepsini karşılayan bir mimari yok; en az birinde ödün vermek ya da şifrelemenin dışında bir önlem almak gerekiyor.`}
      </p>
      <h4>2. Mimari seç</h4>
      <Secim ad="Mimari" secenekler={a.mimariler.map((x) => [x.id, x.ad] as [string, string])} deger={mimari} degis={setMimari} />
      <p>{m.ozet}</p>
      <ul className="sf-tehdit-sonuc">
        {gorunen.map((t) => {
          const [s, neden] = m.sonuc[t.id]!;
          return (
            <li key={t.id} className={`sf-ts-${s}${secili.has(t.id) ? "" : " sf-soluk"}`}>
              <span className="sf-ts-im" aria-label={SONUC_ADI[s]}>
                {IM[s]}
              </span>
              <span>
                <strong>{t.ad}</strong>: {neden}
              </span>
            </li>
          );
        })}
      </ul>
      <details className="sf-tablo-ac">
        <summary>Bütün mimarileri karşılaştır</summary>
        <div className="sf-tablo-sar">
          <table className="sf-tablo">
            <thead>
              <tr>
                <th />
                {a.mimariler.map((x) => (
                  <th key={x.id}>{x.ad}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gorunen.map((t) => (
                <tr key={t.id}>
                  <th>{t.ad}</th>
                  {a.mimariler.map((x) => (
                    <td key={x.id} className={`sf-ts-${x.sonuc[t.id]![0]}`} title={x.sonuc[t.id]![1]}>
                      {IM[x.sonuc[t.id]![0]]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      <h4>3. Ürün sahibine sorulacaklar</h4>
      {a.kararlar.map((k, i) => (
        <div key={k.soru} className="sf-kutu">
          <strong>{k.soru}</strong>
          <Secim
            ad={k.soru}
            secenekler={k.secenekler.map(([ad], j) => [String(j), ad] as [string, string])}
            deger={String(kararlar[i])}
            degis={(v) => setKararlar((l) => l.map((x, j) => (j === i ? Number(v) : x)))}
          />
          <span className="sf-not">{k.secenekler[kararlar[i]!]![1]}</span>
        </div>
      ))}
      <p className="sf-sonuc sf-iyi">{a.ders}</p>
    </div>
  );
}

export const GeriBildirimAlistirmasi = () => <TasarimAlistirmasi id="geri-bildirim" />;
export const PaylasimAlistirmasi = () => <TasarimAlistirmasi id="paylasim" />;
