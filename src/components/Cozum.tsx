import { useState } from "react";
import { Markdown } from "./Markdown";
import { satirSonlari } from "../lib/matematik";

// Açıklama metnindeki "---" satırları adımları ayırır: ilk parça çözümün fikri,
// sonrakiler sırasıyla adımlar (content/sorular/tipler.ts ADIM_AYIRICI).
export function cozumParcalari(metin: string): { fikir: string; adimlar: string[] } {
  const [fikir = "", ...adimlar] = satirSonlari(metin).split(/\n[ \t]*---[ \t]*\n/).map((p) => p.trim());
  return { fikir, adimlar: adimlar.filter(Boolean) };
}

// Adım adım çözüm. Varsayılan olarak ilk adım açıktır; öğrenci "Sonraki adım" ile
// bir sonrakini açmadan önce kendisi bulmayı deneyebilir. tumu: hepsi açık (önizleme).
export function Cozum({ text, tumu = false }: { text: string; tumu?: boolean }) {
  const { fikir, adimlar } = cozumParcalari(text);
  const [acik, setAcik] = useState(tumu ? adimlar.length : 1);
  return (
    <div className="cozum">
      {fikir && <Markdown text={fikir} terim />}
      {adimlar.length > 0 && (
        <section className="cozum-adimlar" aria-label="Adım adım çözüm">
          <h4>Adım adım çözüm</h4>
          <ol>
            {adimlar.slice(0, acik).map((a, i) => (
              <li key={i} className="cozum-adim">
                <span className="cozum-no">Adım {i + 1}</span>
                <Markdown text={a} terim />
              </li>
            ))}
          </ol>
          {acik < adimlar.length && (
            <div className="cozum-dugmeler">
              <button className="primary" onClick={() => setAcik(acik + 1)}>
                Sonraki adım ({acik + 1}/{adimlar.length})
              </button>
              <button onClick={() => setAcik(adimlar.length)}>Tüm adımlar</button>
              <span className="hint">Sonraki adımı açmadan önce kendin bulmayı dene.</span>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
