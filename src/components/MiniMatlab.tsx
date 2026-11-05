// Ders içindeki MatStudio kutusu: düzenlenebilir kod, Çalıştır, komut çıktısı ve
// şekil. Her çalıştırma temiz bir çalışma alanıyla başlar; her şey tarayıcıda.
// Çalıştırmalar bir geçmişte tutulur: son çıktı, seçilen önceki bir çıktıyla
// yan yana görünür, böylece bir değeri değiştirince öncekini not etmek gerekmez.

import { useMemo, useState } from "react";
import { BoyutluEditor } from "./BoyutluEditor";
import { MatlabEditor, type EditorMark } from "./MatlabEditor";
import { SekilKutusu } from "./MatlabSekil";
import { Markdown } from "./Markdown";
import { matlabdaAc } from "./KayitKodu";
import { Yorumlayici } from "../matlab/yorumla";
import type { Cizim } from "../matlab/cizim";
import type { MiniMatlab as Veri } from "../dersler/tipler";
import { useMiniYan } from "../lib/miniDuzen";
import { kodFarki } from "../lib/kodFarki";
import { ekle, enSon, karsilastirilan, sil, tasi } from "../lib/gecmisSira";
import { CalistirmaCipleri, cipAdi } from "./CalistirmaCipleri";

export interface Calistirma {
  n: number;
  kod: string;
  cikti: string;
  hata: { mesaj: string; satir: number | null } | null;
  cizim: Cizim;
  // Kullanıcının verdiği ad (sağ tık → Adını değiştir)
  ad?: string;
  // Bir önceki çalıştırmaya (ilkinde örneğe) göre koddaki değişiklik
  fark: string;
}

// Geçmişte en çok bu kadar çalıştırma tutulur; eskiler düşer
export const GECMIS_SINIRI = 10;

export function MiniMatlab({ veri }: { veri: Veri }) {
  const [kod, setKod] = useState(veri.kod);
  const [gecmis, setGecmis] = useState<Calistirma[]>([]);
  // Karşılaştırılan önceki çalıştırmanın numarası; null ise bir önceki
  const [hedefNo, setHedefNo] = useState<number | null>(null);
  const [karsilastir, setKarsilastir] = useState(true);
  const [yan, setYan] = useMiniYan();

  const son = enSon(gecmis);
  const onceki = karsilastirilan(gecmis, hedefNo);

  const calistir = () => {
    // Örnekler her seferinde aynı rastgele sayıları üretsin (rng ile değiştirilebilir)
    const y = new Yorumlayici({ tohum: 0, sure: 3000 });
    const r = y.calistir(kod);
    setGecmis((g) => {
      const onceki = enSon(g);
      const yeni: Calistirma = { n: (onceki?.n ?? 0) + 1, kod, cikti: y.cikti, hata: r.hata, cizim: y.cizim, fark: kodFarki(onceki?.kod ?? veri.kod, kod) };
      return ekle(g, yeni, GECMIS_SINIRI);
    });
    setHedefNo(null);
  };
  // Örneğe dön yalnızca kodu geri getirir; çıktı geçmişi kalır
  const ornegeDon = () => setKod(veri.kod);
  // Sıfırla çıktı geçmişini temizler
  const sifirla = () => {
    setGecmis([]);
    setHedefNo(null);
  };

  const marks = useMemo<EditorMark[]>(() => (son?.hata?.satir ? [{ line: son.hata.satir, severity: "error" }] : []), [son]);
  const yanYana = karsilastir && onceki !== null;

  return (
    <div className={`mini-sim mini-matlab${yan ? " yan" : ""}`}>
      <div className="mini-kod">
        <BoyutluEditor sinif="mini-editor">
          <MatlabEditor value={kod} onChange={setKod} marks={marks} onRun={calistir} etiket="Dersteki MatStudio örneği" />
        </BoyutluEditor>
        <div className="kod-dugmeler">
          <button className="primary" onClick={calistir} title="Ctrl+Enter">▶ Çalıştır</button>
          <button onClick={ornegeDon} disabled={kod === veri.kod} title="Kodu örnekteki haline getirir; çıktılar kalır">Örneğe dön</button>
          <button className="baglanti-dugme" onClick={() => matlabdaAc(kod)}>MatStudio'da aç</button>
          <span className="mini-duzen" role="group" aria-label="Çıktının yeri">
            <button className="cip" aria-pressed={!yan} onClick={() => setYan(false)} title="Çıktı kodun altında">Alt alta</button>
            <button className="cip" aria-pressed={yan} onClick={() => setYan(true)} title="Çıktı kodun sağında">Yan yana</button>
          </span>
        </div>
        {veri.gorev && (
          <div className="mini-gorev">
            <Markdown text={`**Dene:** ${veri.gorev}`} />
          </div>
        )}
      </div>
      <div className="mini-sonuc">
        {son && (
          <div className="mini-gecmis">
            <span className="mini-gecmis-ad">Çalıştırmalar</span>
            <CalistirmaCipleri
              cipler={gecmis}
              simdi={son.n}
              secili={yanYana ? onceki!.n : null}
              sec={(n) => {
                setHedefNo(n);
                setKarsilastir(true);
              }}
              sil={(n) => setGecmis((g) => sil(g, n))}
              tasi={(n, h) => setGecmis((g) => tasi(g, n, h))}
              adlandir={(n, ad) => setGecmis((g) => g.map((c) => (c.n === n ? { ...c, ad: ad || undefined } : c)))}
              koduYukle={(n) => {
                const c = gecmis.find((c) => c.n === n);
                if (c) setKod(c.kod);
              }}
            />
            <span className="mini-gecmis-dugmeler">
              {gecmis.length > 1 && (
                <button className="cip" aria-pressed={karsilastir} onClick={() => setKarsilastir((k) => !k)} title="Önceki çıktıyı yanda göster">
                  Karşılaştır
                </button>
              )}
              <button className="cip" onClick={sifirla} title="Çıktı geçmişini temizler">Sıfırla</button>
            </span>
          </div>
        )}
        <div className={yanYana ? "mini-karsi" : undefined} aria-live="polite">
          {yanYana && <CiktiSutunu c={onceki!} baslik={`Önceki · ${cipAdi(onceki!)}`} esi={son!} soluk />}
          {son && <CiktiSutunu c={son} baslik={yanYana ? `Şimdi · ${cipAdi(son)}` : null} esi={yanYana ? onceki : null} />}
        </div>
        {!son && yan && <p className="hint mini-bos">▶ Çalıştır'a bastığında çıktı ve grafikler burada görünür.</p>}
      </div>
    </div>
  );
}

// Bir çalıştırmanın çıktısı ve şekilleri. esi verilirse ondan farklı satırlar vurgulanır.
function CiktiSutunu({ c, baslik, esi, soluk = false }: { c: Calistirma; baslik: string | null; esi: Calistirma | null; soluk?: boolean }) {
  const sekiller = c.cizim.sekiller.filter((s) => s.eksenler.length);
  const satirlar = c.cikti.replace(/\n$/, "").split("\n");
  const esiSatirlar = esi ? esi.cikti.replace(/\n$/, "").split("\n") : null;
  return (
    <div className={`mini-sutun${soluk ? " onceki" : ""}`}>
      {baslik && (
        <div className="mini-sutun-baslik">
          <b>{baslik}</b>
          <span className="hint" title={c.fark}>{c.fark}</span>
        </div>
      )}
      {(c.cikti || c.hata) && (
        <pre className={`mini-cikti${c.hata ? " hatali" : ""}`}>
          {c.cikti &&
            satirlar.map((s, i) => (
              <span key={i} className={esiSatirlar && esiSatirlar[i] !== s ? "farkli" : undefined}>
                {s}
                {"\n"}
              </span>
            ))}
          {c.hata && <span className="bad">{`Hata${c.hata.satir ? ` (satır ${c.hata.satir})` : ""}: ${c.hata.mesaj}`}</span>}
        </pre>
      )}
      {sekiller.map((s) => (
        <div className="mini-sekil" key={`${c.n}-${s.no}`}>
          <SekilKutusu sekil={s} oran={s.eksenler.some((e) => e.m > 1) ? 0.75 : 0.55} />
        </div>
      ))}
      {!c.cikti && !c.hata && !sekiller.length && <p className="hint">Kod çalıştı; çıktı yok (satırların sonunda ; var).</p>}
    </div>
  );
}
