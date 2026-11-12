// Ders bölümündeki küçük Git terminali: bölümün kurduğu ortamda gerçek komutlar,
// yanında commit grafiği ve üç alan şeridi. Sunucuya istek atmaz; sayfa
// yenilenince baştan başlar.
import { useMemo, useState, type CSSProperties } from "react";
import { DikeyBolucu, YatayBolucu, useKalici } from "./Bolucu";
import { md, type MiniGit as MiniGitVerisi } from "../dersler/tipler";
import { ekipCalistir, kur, yeniOrtam } from "../gitsim";
import { olaylariIslet, VARSAYILAN_KIMLIK } from "../gitsim/gorev";
import { CommitGrafigi, Editor, editorAc, oturumdaCalistir, oturumdaKaydet, satirIci, Terminal, UcAlan, UzakDepolar, type Oturum } from "./GitParcalari";

const MG_BOY = 300;

function baslangic(v: MiniGitVerisi): Oturum {
  const o = kur(yeniOrtam({ dosyalar: v.dosyalar, globalConfig: v.globalConfig ?? VARSAYILAN_KIMLIK }), v.kurulum ?? []);
  return { ortam: o, satirlar: [{ tur: "bilgi", metin: "Komutu yaz ya da aşağıdaki düğmelere dokun. Bir şey bozulursa Baştan'a bas." }], komutlar: [] };
}

export function MiniGit({ veri }: { veri: MiniGitVerisi }) {
  const ilk = useMemo(() => baslangic(veri), [veri]);
  const [oturum, setOturum] = useState<Oturum>(ilk);
  const [editor, setEditor] = useState<{ yol: string; metin: string } | null>(null);
  const grafik = veri.grafik ?? true;
  const alanlar = veri.alanlar ?? true;
  const hedefler = veri.hedefler ?? [];
  const tutan = hedefler.filter((h) => h.denetle(oturum.ortam)).length;

  const komut = (satir: string) => {
    const r = oturumdaCalistir(oturum, satir, true);
    if (veri.olaylar?.length) {
      const ol = olaylariIslet(veri, r.oturum.ortam);
      if (ol.bildirimler.length) r.oturum = { ...r.oturum, ortam: ol.ortam, satirlar: [...r.oturum.satirlar, ...ol.bildirimler.map((metin) => ({ tur: "olay" as const, metin }))] };
    }
    setOturum({ ...r.oturum, satirlar: r.oturum.satirlar.slice(-120) });
    if (r.editor) setEditor(editorAc(r.oturum.ortam, r.editor));
  };
  const ekipYapsin = (e: NonNullable<MiniGitVerisi["ekip"]>[number]) => {
    let o = oturum.ortam;
    for (const k of e.komutlar) o = ekipCalistir(o, e.kim, k).ortam;
    setOturum({ ...oturum, ortam: o, satirlar: [...oturum.satirlar, { tur: "olay", metin: e.bildirim }] });
  };
  const kaydet = (yol: string, metin: string) => {
    const r = oturumdaKaydet(oturum, yol, metin);
    setOturum(r.oturum);
    setEditor(r.editor ?? null);
  };

  // Terminal/grafik oranı ve yüksekliği bütün derslerde ortaktır, tarayıcıda hatırlanır
  const [oran, setOran] = useKalici("pratik:mg-oran", 0.6);
  const [boy, setBoy] = useKalici("pratik:mg-boy", MG_BOY);

  return (
    <div className="mg" role="group" aria-label="Git terminali">
      {(veri.gorev || hedefler.length > 0) && (
        <div className="mg-gorev">
          {veri.gorev && <p><strong>Dene:</strong> {satirIci(md(veri.gorev))}</p>}
          {hedefler.length > 0 && (
            <ul className="mg-hedefler">
              {hedefler.map((h, i) => {
                const tamam = h.denetle(oturum.ortam);
                return <li key={i} className={tamam ? "tamam" : ""}>{tamam ? "✓" : "○"} {satirIci(md(h.aciklama))}</li>;
              })}
            </ul>
          )}
        </div>
      )}
      <div className={`mg-izgara${grafik ? "" : " mg-tek"}`}
        style={{ "--mg-boy": `${boy}px`, ...(grafik ? { gridTemplateColumns: `minmax(0, ${oran}fr) 8px minmax(0, ${1 - oran}fr)` } : {}) } as CSSProperties}>
        <Terminal oturum={oturum} onKomut={komut} aktif={false} hizliKomutlar={veri.oneriler ?? ["git status", "git log --oneline"]} />
        {grafik && <DikeyBolucu oran={oran} degistir={setOran} etiket="Terminal ve grafiği boyutlandır" />}
        {grafik && (
          <div className="panel gs-grafik">
            <div className="panel-title">Commit grafiği</div>
            <CommitGrafigi ortam={oturum.ortam} />
          </div>
        )}
      </div>
      <YatayBolucu boy={boy} degistir={setBoy} varsayilan={MG_BOY} etiket="Terminalin yüksekliğini değiştir" />
      {alanlar && <UcAlan ortam={oturum.ortam} onAc={(yol) => setEditor({ yol, metin: oturum.ortam.dosyalar[yol] ?? "" })} onYeni={() => {
        const ad = prompt("Dosyanın adı:")?.trim();
        if (ad) setEditor({ yol: ad, metin: oturum.ortam.dosyalar[ad] ?? "" });
      }} />}
      <UzakDepolar ortam={oturum.ortam} />
      <div className="mg-alt">
        {veri.ekip?.map((e) => (
          <button key={e.dugme} className="cip" onClick={() => ekipYapsin(e)}>{e.dugme}</button>
        ))}
        {hedefler.length > 0 && <span aria-live="polite">{tutan === hedefler.length ? "Hepsi tamam!" : `${tutan}/${hedefler.length} hedef`}</span>}
        <span className="gs-bosluk" />
        <button onClick={() => setOturum(baslangic(veri))}>Baştan</button>
      </div>
      {editor && <Editor yol={editor.yol} metin={editor.metin} onKaydet={kaydet} onKapat={() => setEditor(null)} />}
    </div>
  );
}
