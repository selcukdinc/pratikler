// Git sandbox'ı: tarayıcıda çalışan sanal Git (src/gitsim) üstünde gerçek
// komutlar. Serbest alanda istediğini dener, görevlerde bir durumu çözersin.
// Hiçbir şey sunucuya gitmez; durum tarayıcıda (localStorage) saklanır.
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { calistir, kopya, yeniOrtam, GIT_KOMUTLARI, type Ortam } from "../gitsim";
import { aciklama } from "../gitsim/aciklama";
import { grafikKur, type GrafikDugumu } from "../gitsim/grafik";
import { commitAgaci, commitOku, dalAdi, durum, gecerliDal, headCommit, icerik, izlenmeyenOzet, kisa, yokSaymaKurallari, yokSayilir } from "../gitsim/depo";
import { gitKomutuSayisi, gorevOrtami, enAzKomut, tamamMi, yildiz, type Gorev } from "../gitsim/gorev";
import "./GitSandbox.css";

const ANAHTAR = "git-pratik:sandbox";
const SERBEST = "serbest";
const EN_COK_SATIR = 300;
const GERI_ALMA = 40;

type SatirTuru = "komut" | "cikti" | "hata" | "not" | "bilgi";
interface Satir {
  tur: SatirTuru;
  metin: string;
}

interface Oturum {
  ortam: Ortam;
  satirlar: Satir[];
  // Yazılan komut satırları (geçmiş ve yıldız sayımı için)
  komutlar: string[];
}

interface Kayit {
  kip: string;
  oturumlar: Record<string, Oturum>;
  // Biten görevler: kimlik -> yıldız
  biten: Record<string, number>;
  aciklamalar: boolean;
}

const KARSILAMA: Satir[] = [
  { tur: "bilgi", metin: "Sanal Git terminali. Gerçek git komutlarını yaz; her şey tarayıcında olur, hiçbir şey bozulmaz." },
  { tur: "bilgi", metin: "Başlamak için: git init · Yardım: help · Ekranı temizle: clear" },
];

function serbestOturum(): Oturum {
  return {
    ortam: yeniOrtam({ dosyalar: { "README.md": "# Sandbox\n\nBurada istediğin gibi dene.\n" } }),
    satirlar: KARSILAMA,
    komutlar: [],
  };
}

function gorevOturumu(g: Gorev): Oturum {
  return { ortam: gorevOrtami(g), satirlar: [{ tur: "bilgi", metin: `Görev: ${g.baslik}. Durumu görmek için git status ile başla.` }], komutlar: [] };
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

// `kod` parçalarını <code> olarak yazar
function satirIci(metin: string): ReactNode[] {
  return metin.split(/(`[^`]+`)/).map((p, i) => (p.startsWith("`") && p.endsWith("`") && p.length > 1 ? <code key={i}>{p.slice(1, -1)}</code> : p));
}

function istem(o: Ortam): string {
  const yer = "/proje" + (o.cwd ? `/${o.cwd}` : "");
  const d = o.depo;
  if (!d) return `${yer} $`;
  const r = gecerliDal(d);
  let dal = r ? dalAdi(r) : `(${kisa(d.head.tur === "kopuk" ? d.head.hash : "")}...)`;
  const islem = d.islem?.tur;
  if (islem) dal += "|" + { merge: "MERGING", "cherry-pick": "CHERRY-PICKING", revert: "REVERTING", rebase: "REBASE" }[islem];
  return `${yer} (${dal}) $`;
}

const YARDIM = [
  "Kabuk: ls, cd, pwd, cat, echo, printf, touch, mkdir, rm, mv, cp, nano <dosya>, clear",
  `Git: ${GIT_KOMUTLARI.join(", ")}`,
  "İpucu: echo \"satır\" >> dosya ile dosyaya ekleyebilir, nano dosya ile editörde açabilirsin.",
  "Geri al düğmesi son komutu geri alır; Baştan başlat her şeyi sıfırlar.",
].join("\n");

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
      const kip = kayit.kip;
      const temiz = satir.trim();
      const satirlar = [...oturum.satirlar, { tur: "komut" as const, metin: `${istem(oturum.ortam)} ${satir}` }];
      const komutlar = temiz ? [...oturum.komutlar, temiz] : oturum.komutlar;
      if (!temiz) return oturumYaz(kip, { ...oturum, satirlar }, null);
      if (temiz === "help" || temiz === "yardım" || temiz === "yardim") {
        return oturumYaz(kip, { ...oturum, satirlar: [...satirlar, { tur: "bilgi", metin: YARDIM }], komutlar }, null);
      }
      let r: ReturnType<typeof calistir>;
      try {
        r = calistir(oturum.ortam, satir);
      } catch (e) {
        // Motorun beklemediği bir durum: oturumu bozmadan bildir
        return oturumYaz(kip, { ...oturum, satirlar: [...satirlar, { tur: "hata", metin: `Sandbox bu komutu çalıştıramadı: ${(e as Error).message}` }], komutlar }, null);
      }
      const yeniSatirlar: Satir[] = r.sonuc.temizle ? [] : satirlar;
      if (r.sonuc.cikti) yeniSatirlar.push({ tur: r.sonuc.kod === 0 ? "cikti" : "hata", metin: r.sonuc.cikti });
      if (kayit.aciklamalar) {
        const not = aciklama(satir, r.sonuc, oturum.ortam, r.ortam);
        if (not) yeniSatirlar.push({ tur: "not", metin: not });
      }
      oturumYaz(kip, { ortam: r.ortam, satirlar: yeniSatirlar, komutlar }, oturum);
      if (r.sonuc.editor) setEditor({ yol: r.sonuc.editor, metin: r.ortam.dosyalar[r.sonuc.editor] ?? "" });
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
    const o = kopya(oturum.ortam);
    o.dosyalar[yol] = metin;
    oturumYaz(kayit.kip, { ...oturum, ortam: o, satirlar: [...oturum.satirlar, { tur: "bilgi", metin: `${yol} kaydedildi.` }] }, oturum);
    setEditor(null);
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

// ---------------- terminal ----------------

const HIZLI = ["git status", "git add .", 'git commit -m ""', "git log --oneline --graph --all", "ls", "git diff"];

function tamamla(o: Ortam, girdi: string): string | null {
  const parcalar = girdi.split(" ");
  const son = parcalar[parcalar.length - 1] ?? "";
  let adaylar: string[];
  if (parcalar.length === 2 && parcalar[0] === "git") adaylar = GIT_KOMUTLARI;
  else if (parcalar.length === 1) adaylar = ["git", "ls", "cd", "cat", "echo", "touch", "mkdir", "nano", "clear", "help"];
  else {
    const d = o.depo;
    const dallar = d ? Object.keys(d.refs).filter((r) => r.startsWith("refs/heads/") || r.startsWith("refs/tags/")).map(dalAdi) : [];
    const onek = o.cwd ? o.cwd + "/" : "";
    const dosyalar = new Set<string>();
    for (const y of Object.keys(o.dosyalar)) {
      if (!y.startsWith(onek)) continue;
      const kalan = y.slice(onek.length);
      const i = kalan.indexOf("/", son.lastIndexOf("/") + 1);
      dosyalar.add(i < 0 ? kalan : kalan.slice(0, i + 1));
    }
    adaylar = [...dosyalar, ...dallar];
  }
  const uyan = [...new Set(adaylar.filter((a) => a.startsWith(son)))];
  if (!uyan.length) return null;
  // Ortak önek
  let ortak = uyan[0]!;
  for (const a of uyan) while (!a.startsWith(ortak)) ortak = ortak.slice(0, -1);
  if (ortak.length <= son.length && uyan.length > 1) return null;
  parcalar[parcalar.length - 1] = uyan.length === 1 && !ortak.endsWith("/") ? ortak + " " : ortak;
  return parcalar.join(" ");
}

function Terminal({ oturum, onKomut, aktif }: { oturum: Oturum; onKomut: (s: string) => void; aktif: boolean }) {
  const [girdi, setGirdi] = useState("");
  const [gecmisYeri, setGecmisYeri] = useState<number | null>(null);
  const girdiRef = useRef<HTMLInputElement>(null);
  const kaydirRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const k = kaydirRef.current;
    if (k) k.scrollTop = k.scrollHeight;
  }, [oturum.satirlar]);
  useEffect(() => {
    // Sayfa açılınca terminale odaklan (telefonda klavye kendiliğinden açılmasın)
    if (aktif && window.matchMedia("(pointer: fine)").matches) girdiRef.current?.focus({ preventScroll: true });
  }, [aktif]);

  const tus = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onKomut(girdi);
      setGirdi("");
      setGecmisYeri(null);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const g = oturum.komutlar;
      if (!g.length) return;
      e.preventDefault();
      let i = gecmisYeri ?? g.length;
      i = e.key === "ArrowUp" ? Math.max(0, i - 1) : i + 1;
      if (i >= g.length) {
        setGecmisYeri(null);
        setGirdi("");
      } else {
        setGecmisYeri(i);
        setGirdi(g[i]!);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const t = tamamla(oturum.ortam, girdi);
      if (t !== null) setGirdi(t);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      onKomut("clear");
    }
  };

  const hizli = (k: string) => {
    setGirdi(k);
    const el = girdiRef.current;
    if (!el) return;
    el.focus();
    // commit mesajı için imleç tırnakların arasına
    const yer = k.endsWith('""') ? k.length - 1 : k.length;
    requestAnimationFrame(() => el.setSelectionRange(yer, yer));
  };

  return (
    <div className="panel gs-terminal">
      <div className="panel-title">Terminal</div>
      <div className="gs-ekran" ref={kaydirRef} onClick={() => window.getSelection()?.isCollapsed && girdiRef.current?.focus({ preventScroll: true })}>
        {oturum.satirlar.map((s, i) => (
          <div key={i} className={`gs-satir gs-${s.tur}`}>
            {s.tur === "not" ? <><span className="gs-not-etiket">Ne oldu?</span> {satirIci(s.metin)}</> : <Renkli metin={s.metin} tur={s.tur} />}
          </div>
        ))}
        <div className="gs-girdi-satiri">
          <span className="gs-istem">{istem(oturum.ortam)}</span>
          <input
            ref={girdiRef}
            value={girdi}
            onChange={(e) => setGirdi(e.target.value)}
            onKeyDown={tus}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            aria-label="Komut"
          />
        </div>
      </div>
      <div className="gs-hizli" aria-label="Hazır komutlar">
        {HIZLI.map((k) => (
          <button key={k} onClick={() => hizli(k)}>{k}</button>
        ))}
      </div>
    </div>
  );
}

// Git'in renkli çıktısını taklit eder: status'taki dosyalar, diff satırları, commit kimlikleri
function Renkli({ metin, tur }: { metin: string; tur: SatirTuru }) {
  if (tur !== "cikti") return <>{metin}</>;
  const satirlar = metin.split("\n");
  let bolum: "hazir" | "degil" | null = null;
  return (
    <>
      {satirlar.map((s, i) => {
        if (/^Changes to be committed/.test(s)) bolum = "hazir";
        else if (/^(Changes not staged|Untracked files|Unmerged paths)/.test(s)) bolum = "degil";
        let sinif = "";
        if (/^\t/.test(s)) sinif = bolum === "hazir" ? "gs-yesil" : "gs-kirmizi";
        else if (/^\+(?!\+\+)/.test(s)) sinif = "gs-yesil";
        else if (/^-(?!--)/.test(s)) sinif = "gs-kirmizi";
        else if (/^@@/.test(s)) sinif = "gs-mavi";
        else if (/^commit [0-9a-f]{40}/.test(s)) sinif = "gs-sari";
        const kimlik = !sinif && s.match(/^([*|/\\ ]*)([0-9a-f]{7,40})( .*)$/);
        return (
          <span key={i} className={sinif || undefined}>
            {kimlik ? <>{kimlik[1]}<span className="gs-sari">{kimlik[2]}</span>{kimlik[3]}</> : s}
            {i < satirlar.length - 1 ? "\n" : ""}
          </span>
        );
      })}
    </>
  );
}

// ---------------- commit grafiği ----------------

const SATIR = 26;
const SERIT = 16;
const RENKLER = ["#2f81f7", "#d4762c", "#3fa34d", "#b05bd6", "#d6455d", "#1aa3a3"];

function CommitGrafigi({ ortam }: { ortam: Ortam }) {
  const d = ortam.depo;
  const grafik = useMemo(() => (d ? grafikKur(d) : null), [d]);
  if (!d) return <p className="empty">Henüz depo yok. <code>git init</code> yazınca burada commit'ler belirecek.</p>;
  if (!grafik || !grafik.dugumler.length) {
    const r = gecerliDal(d);
    return <p className="empty">Depo hazır, henüz commit yok{r ? ` ('${dalAdi(r)}' dalı ilk commit'i bekliyor)` : ""}.</p>;
  }
  const { dugumler, seritSayisi } = grafik;
  const yer = new Map(dugumler.map((n) => [n.hash, n]));
  const genislik = seritSayisi * SERIT + 8;
  const x = (s: number) => s * SERIT + SERIT / 2 + 4;
  const y = (r: number) => r * SATIR + SATIR / 2;
  const kenarlar: ReactNode[] = [];
  for (const n of dugumler) {
    n.ebeveynler.forEach((p, i) => {
      const e = yer.get(p);
      const x1 = x(n.serit);
      const y1 = y(n.satir);
      // Ebeveyn gösterilmiyorsa (ör. grafiğin dışında) aşağı doğru kısa bir çizgi
      if (!e) return kenarlar.push(<line key={`${n.hash}-${p}`} x1={x1} y1={y1} x2={x1} y2={y1 + SATIR / 2} stroke={RENKLER[n.serit % RENKLER.length]} />);
      const x2 = x(e.serit);
      const y2 = y(e.satir);
      const renk = RENKLER[(i === 0 ? n.serit : e.serit) % RENKLER.length];
      let yol: string;
      if (x1 === x2) yol = `M${x1} ${y1}V${y2}`;
      else if (i > 0) yol = `M${x1} ${y1}C${x1} ${y1 + SATIR * 0.8} ${x2} ${y1 + SATIR * 0.2} ${x2} ${y1 + SATIR}V${y2}`;
      else yol = `M${x1} ${y1}V${y2 - SATIR}C${x1} ${y2 - SATIR * 0.2} ${x2} ${y2 - SATIR * 0.8} ${x2} ${y2}`;
      kenarlar.push(<path key={`${n.hash}-${p}`} d={yol} stroke={renk} fill="none" />);
    });
  }
  const head = headCommit(d);
  return (
    <div className="gs-grafik-kaydir">
      <div className="gs-grafik-ic" style={{ height: dugumler.length * SATIR }}>
        <svg width={genislik} height={dugumler.length * SATIR} className="gs-grafik-svg" aria-hidden="true">
          <g strokeWidth={2}>{kenarlar}</g>
          {dugumler.map((n) => (
            <circle key={n.hash} cx={x(n.serit)} cy={y(n.satir)} r={n.hash === head ? 6 : 4.5}
              fill={n.ebeveynler.length > 1 ? "var(--panel)" : RENKLER[n.serit % RENKLER.length]}
              stroke={RENKLER[n.serit % RENKLER.length]} strokeWidth={2} />
          ))}
        </svg>
        <ol className="gs-commitler" style={{ marginLeft: genislik }}>
          {dugumler.map((n) => <CommitSatiri key={n.hash} n={n} head={n.hash === head} />)}
        </ol>
      </div>
    </div>
  );
}

function CommitSatiri({ n, head }: { n: GrafikDugumu; head: boolean }) {
  return (
    <li style={{ height: SATIR }} className={head ? "head" : undefined} title={`${n.hash}\n${n.yazar}`}>
      <span className="gs-sari mono">{kisa(n.hash)}</span>
      {n.etiketler.map((e) => (
        <span key={e.tur + e.ad} className={`gs-cip gs-cip-${e.tur}${e.etkin ? " etkin" : ""}`}>
          {e.etkin ? "HEAD → " : ""}{e.tur === "etiket" ? "🏷 " : ""}{e.ad}
        </span>
      ))}
      <span className="gs-ozet">{n.ozet}</span>
    </li>
  );
}

// ---------------- üç alan ----------------

const DURUM_SINIFI: Record<string, string> = {
  "değişti": "d-degisti",
  silindi: "d-silindi",
  izlenmiyor: "d-izlenmiyor",
  "çakışma": "d-cakisma",
  "yok sayılıyor": "d-yok",
};

function UcAlan({ ortam, onAc, onYeni }: { ortam: Ortam; onAc: (yol: string) => void; onYeni: () => void }) {
  const d = ortam.depo;
  const s = d ? durum(ortam, d) : null;
  const kurallar = d ? yokSaymaKurallari(ortam) : [];
  const degisen = new Map<string, string>();
  if (s) {
    for (const x of s.hazirDegil) degisen.set(x.yol, x.tur === "modified" ? "değişti" : "silindi");
    for (const x of s.izlenmeyen) degisen.set(x, "izlenmiyor");
    for (const x of s.catisma) degisen.set(x.yol, "çakışma");
  }
  const dosyalar = Object.keys(ortam.dosyalar).sort();
  const silinenler = s ? s.hazirDegil.filter((x) => x.tur === "deleted").map((x) => x.yol) : [];
  const head = d ? headCommit(d) : null;
  const headDosyalari = d ? Object.keys(commitAgaci(d, head)).sort() : [];
  const hazirTur = { "new file": "yeni", modified: "değişti", deleted: "silindi" } as const;
  const izlenmeyenSayisi = s ? izlenmeyenOzet(d!, s.izlenmeyen).length : 0;

  return (
    <div className="gs-alanlar">
      <section className="panel gs-alan">
        <div className="panel-title">
          Çalışma dizini
          <button className="icon" onClick={onYeni} title="Yeni dosya">+ dosya</button>
        </div>
        <ul>
          {dosyalar.map((y) => {
            const durumu = degisen.get(y) ?? (d && yokSayilir(kurallar, y) && !(y in d.index) ? "yok sayılıyor" : null);
            return (
              <li key={y}>
                <button className={`gs-dosya ${durumu ? DURUM_SINIFI[durumu] : ""}`} onClick={() => onAc(y)} title="Editörde aç">
                  {y}
                </button>
                {durumu && <span className="gs-durum">{durumu}</span>}
              </li>
            );
          })}
          {silinenler.map((y) => (
            <li key={"-" + y}>
              <span className="gs-dosya d-silindi">{y}</span>
              <span className="gs-durum">silindi</span>
            </li>
          ))}
          {!dosyalar.length && !silinenler.length && <li className="empty">Boş klasör</li>}
        </ul>
        {!d && <p className="gs-alan-not">Git bu klasörü henüz izlemiyor.</p>}
        {d && izlenmeyenSayisi > 0 && <p className="gs-alan-not">İzlenmeyen dosyalar commit'e girmez; önce <code>git add</code>.</p>}
      </section>
      <div className="gs-ok" aria-hidden="true"><span>git add →</span><span>← git restore --staged</span></div>
      <section className="panel gs-alan">
        <div className="panel-title">Hazırlık alanı (staging)</div>
        {!d ? (
          <p className="empty">Depo yok</p>
        ) : (
          <ul>
            {s!.hazir.map((x) => (
              <li key={x.yol}>
                <span className={`gs-dosya h-${x.tur === "new file" ? "yeni" : x.tur === "deleted" ? "silindi" : "degisti"}`}>{x.yol}</span>
                <span className="gs-durum">{hazirTur[x.tur]}</span>
              </li>
            ))}
            {s!.catisma.map((x) => (
              <li key={"c" + x.yol}>
                <span className="gs-dosya d-cakisma">{x.yol}</span>
                <span className="gs-durum">çözülmedi</span>
              </li>
            ))}
            {!s!.hazir.length && !s!.catisma.length && <li className="empty">Bir sonraki commit'e girecek değişiklik yok.</li>}
          </ul>
        )}
      </section>
      <div className="gs-ok" aria-hidden="true"><span>git commit →</span></div>
      <section className="panel gs-alan">
        <div className="panel-title">Depo (son commit)</div>
        {!d ? (
          <p className="empty">Depo yok</p>
        ) : !head ? (
          <p className="empty">Henüz commit yok</p>
        ) : (
          <>
            <p className="gs-head">
              <span className="gs-sari mono">{kisa(head)}</span> {commitOku(d, head).mesaj.split("\n")[0]}
            </p>
            <ul>
              {headDosyalari.map((y) => (
                <li key={y}>
                  <span className="gs-dosya">{y}</span>
                  <span className="gs-durum mono">{icerik(d, commitAgaci(d, head)[y]!).split("\n").length - 1} satır</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

// ---------------- editör ----------------

function Editor({ yol, metin, onKaydet, onKapat }: { yol: string; metin: string; onKaydet: (yol: string, metin: string) => void; onKapat: () => void }) {
  const [deger, setDeger] = useState(metin);
  const alan = useRef<HTMLTextAreaElement>(null);
  useEffect(() => alan.current?.focus(), []);
  return (
    <div className="gs-editor-arka" onClick={(e) => e.target === e.currentTarget && onKapat()}>
      <div className="panel gs-editor" role="dialog" aria-label={`${yol} düzenleniyor`}>
        <div className="panel-title">
          <span className="mono">{yol}</span>
          <span className="gs-bosluk" />
          <span className="gs-kisayol">Ctrl+S kaydet · Esc kapat</span>
        </div>
        <textarea
          ref={alan}
          value={deger}
          onChange={(e) => setDeger(e.target.value)}
          spellCheck={false}
          onKeyDown={(e) => {
            if (e.key === "Escape") onKapat();
            if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              onKaydet(yol, deger);
            }
          }}
        />
        <div className="gs-editor-alt">
          <span className="gs-kisayol">Kaydedince dosya çalışma dizininde değişir; Git'e girmesi için yine <code>git add</code> gerekir.</span>
          <span className="gs-bosluk" />
          <button onClick={onKapat}>Vazgeç</button>
          <button className="primary" onClick={() => onKaydet(yol, deger)}>Kaydet</button>
        </div>
      </div>
    </div>
  );
}
