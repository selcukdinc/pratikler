// Git sandbox'ı: tarayıcıda çalışan sanal Git (src/gitsim) üstünde gerçek
// komutlar. Serbest alanda istediğini dener, görevlerde bir durumu çözersin.
// Hiçbir şey sunucuya gitmez; durum tarayıcıda (localStorage) saklanır.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { yeniOrtam, type Ortam } from "../gitsim";
import { gitKomutuSayisi, gorevOrtami, enAzKomut, olaylariIslet, tamamMi, yildiz, type Gorev } from "../gitsim/gorev";
import { uzakOlustur } from "../gitsim/uzak";
import { CommitGrafigi, Editor, editorAc, UzakDepolar, oturumdaCalistir, oturumdaKaydet, satirIci, Terminal, UcAlan, type Oturum, type Satir } from "../components/GitParcalari";

const ANAHTAR = "git-pratik:sandbox";
const SERBEST = "serbest";
const EN_COK_SATIR = 300;
const GERI_ALMA = 40;

interface Kayit {
  kip: string;
  oturumlar: Record<string, Oturum>;
  // Biten görevler: kimlik -> yıldız
  biten: Record<string, number>;
  aciklamalar: boolean;
}

// Serbest alanda boş bir GitHub deposu hazırdır: remote add, push ve clone denenebilir
const SERBEST_UZAK = "https://github.com/deniz/sandbox.git";

const KARSILAMA: Satir[] = [
  { tur: "bilgi", metin: "Sanal Git terminali. Gerçek git komutlarını yaz; her şey tarayıcında olur, hiçbir şey bozulmaz." },
  { tur: "bilgi", metin: "Başlamak için: git init · Yardım: help · Ekranı temizle: clear" },
  { tur: "bilgi", metin: `GitHub'da boş bir depon da hazır: ${SERBEST_UZAK} (git remote add origin ... ile bağla, git push ile gönder).` },
];

function serbestOrtam(): Ortam {
  const o = yeniOrtam({ dosyalar: { "README.md": "# Sandbox\n\nBurada istediğin gibi dene.\n" } });
  uzakOlustur(o, SERBEST_UZAK);
  return o;
}

function serbestOturum(): Oturum {
  return {
    ortam: serbestOrtam(),
    satirlar: KARSILAMA,
    komutlar: [],
  };
}

function gorevOturumu(g: Gorev): Oturum {
  return { ortam: gorevOrtami(g), satirlar: [{ tur: "bilgi", metin: `Görev: ${g.baslik}${/[.?!]$/.test(g.baslik) ? "" : "."} Durumu görmek için git status ile başla.` }], komutlar: [] };
}

function kayitOku(): Kayit {
  const bos: Kayit = { kip: SERBEST, oturumlar: {}, biten: {}, aciklamalar: true };
  try {
    const ham = localStorage.getItem(ANAHTAR);
    if (!ham) return bos;
    const k = JSON.parse(ham) as Partial<Kayit>;
    return { ...bos, ...k, oturumlar: k.oturumlar ?? {}, biten: k.biten ?? {} };
  } catch {
    return bos;
  }
}

function kayitYaz(k: Kayit) {
  try {
    // Yalnızca serbest alan ve açık görev saklanır
    const oturumlar = Object.fromEntries(Object.entries(k.oturumlar).filter(([id]) => id === SERBEST || id === k.kip));
    localStorage.setItem(ANAHTAR, JSON.stringify({ ...k, oturumlar }));
  } catch {
    // gizli pencere ya da dolu depolama: oturum yalnızca bellekte kalır
  }
}

export function GitSandbox({ gorevleriYukle, aktif }: { gorevleriYukle: () => Promise<Gorev[]>; aktif: boolean }) {
  const [gorevler, setGorevler] = useState<Gorev[]>([]);
  useEffect(() => {
    gorevleriYukle().then(setGorevler, () => setGorevler([]));
  }, [gorevleriYukle]);

  const [kayit, setKayit] = useState<Kayit>(kayitOku);
  useEffect(() => kayitYaz(kayit), [kayit]);
  // Geri alma: oturumun önceki hâlleri (kipe göre, yalnızca bellekte)
  const geriAlma = useRef<Record<string, Oturum[]>>({});

  const gorev = kayit.kip === SERBEST ? null : gorevler.find((g) => g.id === kayit.kip) ?? null;
  const varsayilan = useMemo(
    () => (kayit.kip === SERBEST ? serbestOturum() : gorev ? gorevOturumu(gorev) : null),
    [kayit.kip, gorev],
  );
  const oturum: Oturum | null = kayit.oturumlar[kayit.kip] ?? varsayilan;

  // onceki verilirse geri alma yığınına girer
  const oturumYaz = useCallback((kip: string, yeni: Oturum, onceki: Oturum | null) => {
    if (onceki) geriAlma.current[kip] = [...(geriAlma.current[kip] ?? []), onceki].slice(-GERI_ALMA);
    setKayit((k) => ({ ...k, oturumlar: { ...k.oturumlar, [kip]: { ...yeni, satirlar: yeni.satirlar.slice(-EN_COK_SATIR) } } }));
  }, []);

  const [editor, setEditor] = useState<{ yol: string; metin: string } | null>(null);

  const komutGir = useCallback(
    (satir: string) => {
      if (!oturum) return;
      const r = oturumdaCalistir(oturum, satir, kayit.aciklamalar);
      // Ekip arkadaşlarının olayları (push, yeni dal...) komuttan sonra işler
      if (gorev?.olaylar && r.degisti) {
        const ol = olaylariIslet(gorev, r.oturum.ortam);
        if (ol.bildirimler.length) r.oturum = { ...r.oturum, ortam: ol.ortam, satirlar: [...r.oturum.satirlar, ...ol.bildirimler.map((metin) => ({ tur: "olay" as const, metin }))] };
      }
      oturumYaz(kayit.kip, r.oturum, r.degisti ? oturum : null);
      if (r.editor) setEditor(editorAc(r.oturum.ortam, r.editor));
    },
    [oturum, kayit.kip, kayit.aciklamalar, oturumYaz],
  );

  // Görev bitince yıldızı kaydet (bir kez; daha iyi sonuç eskisini geçer)
  const bitti = !!(gorev && oturum && tamamMi(gorev, oturum.ortam));
  const kazanilan = gorev && oturum && bitti ? yildiz(gorev, gitKomutuSayisi(oturum.komutlar)) : 0;
  useEffect(() => {
    if (!gorev || !kazanilan) return;
    setKayit((k) => ((k.biten[gorev.id] ?? 0) >= kazanilan ? k : { ...k, biten: { ...k.biten, [gorev.id]: kazanilan } }));
  }, [gorev, kazanilan]);

  const kipSec = (kip: string) => setKayit((k) => ({ ...k, kip }));
  const geriAl = () => {
    const yigin = geriAlma.current[kayit.kip];
    const onceki = yigin?.pop();
    if (onceki) setKayit((k) => ({ ...k, oturumlar: { ...k.oturumlar, [k.kip]: { ...onceki, satirlar: [...onceki.satirlar, { tur: "bilgi", metin: "Son adım geri alındı." }] } } }));
  };
  const bastan = () => {
    if (!confirm(gorev ? "Görev baştan başlasın mı?" : "Serbest alan sıfırlansın mı? Bütün dosyalar ve commit'ler silinir.")) return;
    geriAlma.current[kayit.kip] = [];
    setKayit((k) => {
      const oturumlar = { ...k.oturumlar };
      delete oturumlar[k.kip];
      return { ...k, oturumlar };
    });
  };

  const dosyaKaydet = (yol: string, metin: string) => {
    if (!oturum) return;
    const r = oturumdaKaydet(oturum, yol, metin);
    oturumYaz(kayit.kip, r.oturum, oturum);
    setEditor(r.editor ?? null);
  };
  const dosyaAc = (yol: string) => oturum && setEditor({ yol, metin: oturum.ortam.dosyalar[yol] ?? "" });
  const yeniDosya = () => {
    const ad = prompt("Dosyanın adı (ör. notlar.txt ya da src/app.js):")?.trim();
    if (!ad || !oturum) return;
    const yol = (oturum.ortam.cwd ? oturum.ortam.cwd + "/" : "") + ad.replace(/^\/+/, "");
    setEditor({ yol, metin: oturum.ortam.dosyalar[yol] ?? "" });
  };

  const bitenSayi = gorevler.filter((g) => kayit.biten[g.id]).length;
  const geriAlinabilir = (geriAlma.current[kayit.kip]?.length ?? 0) > 0;

  return (
    <div className="gs">
      <div className="gs-ust">
        <div className="gs-kip" role="tablist" aria-label="Sandbox kipi">
          <button role="tab" aria-selected={kayit.kip === SERBEST} className={kayit.kip === SERBEST ? "secili" : ""} onClick={() => kipSec(SERBEST)}>
            Serbest alan
          </button>
          <button
            role="tab"
            aria-selected={kayit.kip !== SERBEST}
            className={kayit.kip !== SERBEST ? "secili" : ""}
            onClick={() => kipSec(gorevler.find((g) => !kayit.biten[g.id])?.id ?? gorevler[0]?.id ?? SERBEST)}
            disabled={!gorevler.length}
          >
            Görevler <span className="gs-sayac">{bitenSayi}/{gorevler.length}</span>
          </button>
        </div>
        {kayit.kip !== SERBEST && (
          <select value={kayit.kip} onChange={(e) => kipSec(e.target.value)} aria-label="Görev seç" className="gs-gorev-sec">
            {gorevler.map((g, i) => (
              <option key={g.id} value={g.id}>
                {i + 1}. {g.baslik} {kayit.biten[g.id] ? "★".repeat(kayit.biten[g.id]!) : ""}
              </option>
            ))}
          </select>
        )}
        <span className="gs-bosluk" />
        <label className="gs-secenek" title="Her komuttan sonra ne olduğunu Türkçe açıklar">
          <input type="checkbox" checked={kayit.aciklamalar} onChange={(e) => setKayit((k) => ({ ...k, aciklamalar: e.target.checked }))} /> Türkçe açıklamalar
        </label>
        <button onClick={geriAl} disabled={!geriAlinabilir} title="Son komutu geri al">Geri al</button>
        <button onClick={bastan}>Baştan başlat</button>
      </div>

      {gorev && oturum && (
        <GorevKarti
          gorev={gorev}
          ortam={oturum.ortam}
          komutSayisi={gitKomutuSayisi(oturum.komutlar)}
          kazanilan={kazanilan}
          sonraki={gorevler[gorevler.indexOf(gorev) + 1] ?? null}
          onSonraki={(g) => kipSec(g.id)}
        />
      )}

      {oturum ? (
        <div className="gs-izgara">
          <Terminal oturum={oturum} onKomut={komutGir} aktif={aktif && !editor} />
          <div className="panel gs-grafik">
            <div className="panel-title">Commit grafiği</div>
            <CommitGrafigi ortam={oturum.ortam} />
          </div>
          <UcAlan ortam={oturum.ortam} onAc={dosyaAc} onYeni={yeniDosya} />
          <UzakDepolar ortam={oturum.ortam} />
        </div>
      ) : (
        <p className="empty">Görevler yükleniyor…</p>
      )}

      {editor && <Editor yol={editor.yol} metin={editor.metin} onKaydet={dosyaKaydet} onKapat={() => setEditor(null)} />}
    </div>
  );
}

// ---------------- görev kartı ----------------

function GorevKarti({ gorev, ortam, komutSayisi, kazanilan, sonraki, onSonraki }: {
  gorev: Gorev; ortam: Ortam; komutSayisi: number; kazanilan: number; sonraki: Gorev | null; onSonraki: (g: Gorev) => void;
}) {
  const [acikIpucu, setAcikIpucu] = useState(0);
  const [cozumAcik, setCozumAcik] = useState(false);
  useEffect(() => {
    setAcikIpucu(0);
    setCozumAcik(false);
  }, [gorev.id]);
  return (
    <section className={`panel gs-gorev${kazanilan ? " bitti" : ""}`} aria-label="Görev">
      <div className="gs-gorev-govde">
        <div className="gs-gorev-metin">
          <h2>{gorev.baslik} <span className="gs-unite">Ünite {gorev.unite}</span></h2>
          <p>{satirIci(gorev.hikaye)}</p>
          {kazanilan > 0 ? (
            <div className="gs-tebrik" role="status">
              <span className="gs-yildiz" aria-label={`${kazanilan} yıldız`}>{"★".repeat(kazanilan)}{"☆".repeat(3 - kazanilan)}</span>
              <strong>Görev tamam!</strong> Durumu {komutSayisi} git komutuyla değiştirdin{kazanilan < 3 ? `; ${enAzKomut(gorev)} komutla da olur` : ""}.
              {gorev.sonNot && <p>{satirIci(gorev.sonNot)}</p>}
              {sonraki && <button className="primary" onClick={() => onSonraki(sonraki)}>Sonraki görev: {sonraki.baslik}</button>}
            </div>
          ) : (
            <div className="gs-ipuclari">
              {gorev.ipuclari.slice(0, acikIpucu).map((p, i) => <p key={i} className="gs-ipucu">İpucu {i + 1}: {satirIci(p)}</p>)}
              {cozumAcik && <pre className="gs-cozum">{gorev.cozum.join("\n")}</pre>}
              {acikIpucu < gorev.ipuclari.length ? (
                <button onClick={() => setAcikIpucu(acikIpucu + 1)}>İpucu {acikIpucu ? "daha" : "al"}</button>
              ) : (
                !cozumAcik && <button onClick={() => setCozumAcik(true)}>Örnek çözümü göster</button>
              )}
            </div>
          )}
        </div>
        <ul className="gs-hedefler" aria-label="Hedefler">
          {gorev.hedefler.map((h, i) => {
            const tamam = h.denetle(ortam);
            return (
              <li key={i} className={tamam ? "tamam" : ""}>
                <span aria-hidden="true">{tamam ? "✓" : "○"}</span> {satirIci(h.aciklama)}
              </li>
            );
          })}
          <li className="gs-komut-sayisi" title="status, log, diff gibi yalnızca bakan komutlar sayılmaz">
            Değiştiren git komutu: {komutSayisi} · üç yıldız için en fazla {enAzKomut(gorev)}
          </li>
        </ul>
      </div>
    </section>
  );
}
