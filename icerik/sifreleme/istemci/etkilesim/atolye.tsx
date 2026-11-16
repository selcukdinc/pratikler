// 19. ünitenin Web Crypto kod atölyesi (G-S19-04): öğrencinin kodu tarayıcıda bir Web Worker
// içinde çalışır (src/kripto/atolye.worker.ts); hiçbir şey sunucuya gitmez. CodeMirror'ı
// getirdiği için yalnız açıldığında yüklenir (./index.tsx).
import { useEffect, useRef, useState } from "react";
import { EditorView, keymap, lineNumbers, highlightActiveLine, drawSelection } from "@codemirror/view";
import { EditorState, Prec } from "@codemirror/state";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { StreamLanguage, indentUnit, syntaxHighlighting, bracketMatching } from "@codemirror/language";
import { classHighlighter } from "@lezer/highlight";
import { javascript } from "@codemirror/legacy-modes/mode/javascript";
import { Rozet } from "../../../../src/kripto/Rozet";
import { GOREVLER, YARDIMCILAR, type Sonuc } from "../../../../src/kripto/atolye";

// ---------------- G-S19-04: Web Crypto kod atölyesi ----------------

function JsEditor({ value, onChange, onRun }: { value: string; onChange: (s: string) => void; onRun: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const cb = useRef({ onChange, onRun });
  cb.current = { onChange, onRun };
  useEffect(() => {
    view.current = new EditorView({
      parent: host.current!,
      state: EditorState.create({
        doc: value,
        extensions: [
          lineNumbers(),
          history(),
          drawSelection(),
          highlightActiveLine(),
          bracketMatching(),
          indentUnit.of("  "),
          StreamLanguage.define(javascript),
          syntaxHighlighting(classHighlighter),
          Prec.highest(keymap.of([{ key: "Mod-Enter", run: () => (cb.current.onRun(), true) }])),
          keymap.of([indentWithTab, ...defaultKeymap, ...historyKeymap]),
          EditorView.contentAttributes.of({ "aria-label": "JavaScript kodu" }),
          EditorView.updateListener.of((u) => {
            if (u.docChanged) cb.current.onChange(u.state.doc.toString());
          }),
        ],
      }),
    });
    return () => view.current?.destroy();
    // Editör bir kez kurulur; dışarıdan gelen değer aşağıda eşitlenir
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const v = view.current;
    if (v && v.state.doc.toString() !== value) v.dispatch({ changes: { from: 0, to: v.state.doc.length, insert: value } });
  }, [value]);
  return <div className="sf-editor" ref={host} />;
}

const ATOLYE_ANAHTARI = "sifreleme:atolye";
const SURE_SINIRI = 8000;

function atolyeOku(): { kod: Record<string, string>; bitti: string[] } {
  try {
    const v = JSON.parse(localStorage.getItem(ATOLYE_ANAHTARI) ?? "{}");
    return { kod: v.kod ?? {}, bitti: Array.isArray(v.bitti) ? v.bitti : [] };
  } catch {
    return { kod: {}, bitti: [] };
  }
}

function atolyeYaz(v: { kod: Record<string, string>; bitti: string[] }) {
  try {
    localStorage.setItem(ATOLYE_ANAHTARI, JSON.stringify(v));
  } catch {
    // depo kapalıysa ilerleme bu sekmede kalır
  }
}

export function KodAtolyesi() {
  const [kayit, setKayit] = useState(atolyeOku);
  const [gorevId, setGorevId] = useState(() => GOREVLER.find((g) => !kayit.bitti.includes(g.id))?.id ?? GOREVLER[0]!.id);
  const g = GOREVLER.find((x) => x.id === gorevId)!;
  const kod = kayit.kod[g.id] ?? g.baslangic;
  const [sonuc, setSonuc] = useState<Sonuc | null>(null);
  const [calisiyor, setCalisiyor] = useState(false);
  const isci = useRef<Worker | null>(null);
  useEffect(() => () => isci.current?.terminate(), []);

  const guncelle = (y: typeof kayit) => {
    setKayit(y);
    atolyeYaz(y);
  };
  const kodDegis = (s: string) => guncelle({ ...kayit, kod: { ...kayit.kod, [g.id]: s } });
  const sec = (id: string) => {
    setGorevId(id);
    setSonuc(null);
  };
  const calistir = () => {
    if (calisiyor) return;
    setCalisiyor(true);
    setSonuc(null);
    isci.current?.terminate();
    const w = new Worker(new URL("../../../../src/kripto/atolye.worker.ts", import.meta.url), { type: "module" });
    isci.current = w;
    const sure = setTimeout(() => {
      w.terminate();
      setCalisiyor(false);
      setSonuc({ basarili: false, mesaj: `Kod ${SURE_SINIRI / 1000} saniyede bitmedi; sonsuz döngü olabilir. Çalışma durduruldu.`, cikti: [] });
    }, SURE_SINIRI);
    w.onmessage = (e: MessageEvent<Sonuc>) => {
      clearTimeout(sure);
      w.terminate();
      setCalisiyor(false);
      setSonuc(e.data);
      if (e.data.basarili && !kayit.bitti.includes(g.id)) guncelle({ ...kayit, bitti: [...kayit.bitti, g.id] });
    };
    w.onerror = (e) => {
      clearTimeout(sure);
      w.terminate();
      setCalisiyor(false);
      setSonuc({ basarili: false, mesaj: `Çalışırken hata: ${e.message}`, cikti: [] });
    };
    w.postMessage({ kod, kontrol: g.kontrol });
  };
  const sira = GOREVLER.findIndex((x) => x.id === g.id);
  return (
    <div className="sf sf-atolye">
      <div className="sf-ust">
        <span className="sf-not">
          {kayit.bitti.length} / {GOREVLER.length} görev tamam
        </span>
        <Rozet tur="webcrypto" />
      </div>
      <ol className="sf-atolye-liste">
        {GOREVLER.map((x, i) => (
          <li key={x.id}>
            <button type="button" className="cip" aria-pressed={x.id === g.id} onClick={() => sec(x.id)}>
              {kayit.bitti.includes(x.id) ? "✓ " : `${i + 1}. `}
              {x.baslik}
            </button>
          </li>
        ))}
      </ol>
      <h4>
        {sira + 1}. {g.baslik}
      </h4>
      <p>{g.aciklama}</p>
      <JsEditor value={kod} onChange={kodDegis} onRun={calistir} />
      <div className="sf-satir">
        <button type="button" className="cip" onClick={calistir} disabled={calisiyor}>
          {calisiyor ? "Çalışıyor…" : "Çalıştır ve denetle (Ctrl+Enter)"}
        </button>
        <button type="button" className="cip" onClick={() => kodDegis(g.baslangic)}>
          Baştan başla
        </button>
        <button type="button" className="cip" onClick={() => kodDegis(g.ornek)}>
          Örnek çözümü yükle
        </button>
        {sonuc?.basarili && sira < GOREVLER.length - 1 && (
          <button type="button" className="cip" onClick={() => sec(GOREVLER[sira + 1]!.id)}>
            Sonraki görev →
          </button>
        )}
      </div>
      {sonuc && <p className={`sf-sonuc ${sonuc.basarili ? "sf-iyi" : "sf-kotu"}`}>{sonuc.mesaj}</p>}
      {sonuc && sonuc.cikti.length > 0 && (
        <pre className="sf-cikti" aria-label="Çıktı">
          {sonuc.cikti.join("\n")}
        </pre>
      )}
      <details>
        <summary>Hazır yardımcılar</summary>
        <ul className="sf-liste">
          {YARDIMCILAR.map(([ad, ne]) => (
            <li key={ad}>
              <code>{ad}</code>: {ne}
            </li>
          ))}
        </ul>
      </details>
      <p className="sf-not">Kod yalnız bu tarayıcıda, sayfadan ayrı bir iş parçacığında çalışır; yazdığın kod ve ilerlemen bu cihazda saklanır.</p>
    </div>
  );
}
