// Git sandbox'ının ve derslerdeki mini terminalin ortak parçaları: terminal,
// commit grafiği, üç alan şeridi ve editör. Komut çalıştırma saf bir işlevdir
// (oturumdaCalistir); bileşenler yalnızca çizer.
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { calistir, COMMIT_MESAJI, editorIcerigi, editorKaydet, GIT_KOMUTLARI, REBASE_TODO, type Ortam } from "../gitsim";
import { aciklama } from "../gitsim/aciklama";
import { grafikKur, type GrafikDugumu } from "../gitsim/grafik";
import { commitAgaci, commitOku, dalAdi, durum, gecerliDal, headCommit, icerik, izlenmeyenOzet, kisa, yokSaymaKurallari, yokSayilir } from "../gitsim/depo";
import { engeller, prCi } from "../gitsim/platform";
import type { DalKorumasi } from "../gitsim/tipler";
import "./GitParcalari.css";

export type SatirTuru = "komut" | "cikti" | "hata" | "not" | "bilgi" | "olay";
export interface Satir {
  tur: SatirTuru;
  metin: string;
}

export interface Oturum {
  ortam: Ortam;
  satirlar: Satir[];
  // Yazılan komut satırları (geçmiş ve yıldız sayımı için)
  komutlar: string[];
}


// `kod` parçalarını <code> olarak yazar
export function satirIci(metin: string): ReactNode[] {
  return metin.split(/(`[^`]+`)/).map((p, i) => (p.startsWith("`") && p.endsWith("`") && p.length > 1 ? <code key={i}>{p.slice(1, -1)}</code> : p));
}

export function istem(o: Ortam): string {
  const yer = "/" + (o.kokAd ?? "proje") + (o.cwd ? `/${o.cwd}` : "");
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
  "GitHub CLI: gh pr create, list, view, checks, review, merge, close (gh help)",
  "İpucu: echo \"satır\" >> dosya ile dosyaya ekleyebilir, nano dosya ile editörde açabilirsin.",
  "Geri al düğmesi son komutu geri alır; Baştan başlat her şeyi sıfırlar.",
].join("\n");


// Bir komut satırını oturumda çalıştırır; yeni oturumu ve açılacak dosyayı döner
export function oturumdaCalistir(oturum: Oturum, satir: string, aciklamalar: boolean): { oturum: Oturum; editor?: string; degisti: boolean } {
  const temiz = satir.trim();
  const satirlar: Satir[] = [...oturum.satirlar, { tur: "komut", metin: `${istem(oturum.ortam)} ${satir}` }];
  const komutlar = temiz ? [...oturum.komutlar, temiz] : oturum.komutlar;
  if (!temiz) return { oturum: { ...oturum, satirlar }, degisti: false };
  if (temiz === "help" || temiz === "yardım" || temiz === "yardim") {
    return { oturum: { ...oturum, satirlar: [...satirlar, { tur: "bilgi", metin: YARDIM }], komutlar }, degisti: false };
  }
  let r: ReturnType<typeof calistir>;
  try {
    r = calistir(oturum.ortam, satir);
  } catch (e) {
    // Motorun beklemediği bir durum: oturumu bozmadan bildir
    return { oturum: { ...oturum, satirlar: [...satirlar, { tur: "hata", metin: `Sandbox bu komutu çalıştıramadı: ${(e as Error).message}` }], komutlar }, degisti: false };
  }
  const yeni: Satir[] = r.sonuc.temizle ? [] : satirlar;
  if (r.sonuc.cikti) yeni.push({ tur: r.sonuc.kod === 0 ? "cikti" : "hata", metin: r.sonuc.cikti });
  if (aciklamalar) {
    const not = aciklama(satir, r.sonuc, oturum.ortam, r.ortam);
    if (not) yeni.push({ tur: "not", metin: not });
  }
  return { oturum: { ortam: r.ortam, satirlar: yeni, komutlar }, editor: r.sonuc.editor, degisti: true };
}

// Editör kaydedildi: çalışma dizinindeki dosya yazılır ya da (rebase listesi, commit
// mesajı) Git kaldığı yerden sürer ve çıktısı terminale düşer
export function oturumdaKaydet(oturum: Oturum, yol: string, metin: string): { oturum: Oturum; editor?: { yol: string; metin: string } } {
  const r = editorKaydet(oturum.ortam, yol, metin);
  const ozel = gitDosyasi(yol);
  const satirlar: Satir[] = [...oturum.satirlar];
  if (ozel) {
    if (r.sonuc.cikti) satirlar.push({ tur: r.sonuc.kod === 0 ? "cikti" : "hata", metin: r.sonuc.cikti });
  } else satirlar.push({ tur: "bilgi", metin: `${yol} kaydedildi.` });
  const editor = r.sonuc.editor ? { yol: r.sonuc.editor, metin: editorIcerigi(r.ortam, r.sonuc.editor) } : undefined;
  return { oturum: { ...oturum, ortam: r.ortam, satirlar }, editor };
}

export const gitDosyasi = (yol: string) => yol === REBASE_TODO || yol === COMMIT_MESAJI;
export const editorAc = (o: Ortam, yol: string) => ({ yol, metin: editorIcerigi(o, yol) });

// ---------------- terminal ----------------

export const HIZLI = ["git status", "git add .", 'git commit -m ""', "git log --oneline --graph --all", "ls", "git diff"];

function tamamla(o: Ortam, girdi: string): string | null {
  const parcalar = girdi.split(" ");
  const son = parcalar[parcalar.length - 1] ?? "";
  let adaylar: string[];
  if (parcalar.length === 2 && parcalar[0] === "git") adaylar = GIT_KOMUTLARI;
  else if (parcalar.length === 2 && parcalar[0] === "gh") adaylar = ["pr"];
  else if (parcalar.length === 3 && parcalar[0] === "gh" && parcalar[1] === "pr") adaylar = ["create", "list", "view", "checks", "review", "merge", "close"];
  else if (parcalar.length === 1) adaylar = ["git", "gh", "ls", "cd", "cat", "echo", "touch", "mkdir", "nano", "clear", "help"];
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

export function Terminal({ oturum, onKomut, aktif, hizliKomutlar = HIZLI }: { oturum: Oturum; onKomut: (s: string) => void; aktif: boolean; hizliKomutlar?: string[] }) {
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
          <div key={i} className={`gs-satir gs-${s.tur}`} {...(s.tur === "olay" ? { role: "status" } : {})}>
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
        {hizliKomutlar.map((k, i) => (
          <button key={i} onClick={() => hizli(k)}>{k}</button>
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

export function CommitGrafigi({ ortam }: { ortam: Ortam }) {
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

export function UcAlan({ ortam, onAc, onYeni }: { ortam: Ortam; onAc: (yol: string) => void; onYeni: () => void }) {
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

export function Editor({ yol, metin, onKaydet, onKapat }: { yol: string; metin: string; onKaydet: (yol: string, metin: string) => void; onKapat: () => void }) {
  const [deger, setDeger] = useState(metin);
  const alan = useRef<HTMLTextAreaElement>(null);
  useEffect(() => alan.current?.focus(), []);
  return (
    <div className="gs-editor-arka" onClick={(e) => e.target === e.currentTarget && (gitDosyasi(yol) ? onKaydet(yol, deger) : onKapat())}>
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
            if (e.key === "Escape") (gitDosyasi(yol) ? onKaydet(yol, deger) : onKapat());
            if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              onKaydet(yol, deger);
            }
          }}
        />
        <div className="gs-editor-alt">
          <span className="gs-kisayol">
            {yol === REBASE_TODO
              ? "Satırların başındaki komutu değiştir (pick, reword, squash, fixup, drop, edit), satırları yer değiştir ya da sil. Kaydedince rebase başlar."
              : yol === COMMIT_MESAJI
                ? "# ile başlayan satırlar mesaja girmez. Kaydedince commit yazılır ve rebase sürer."
                : <>Kaydedince dosya çalışma dizininde değişir; Git'e girmesi için yine <code>git add</code> gerekir.</>}
          </span>
          <span className="gs-bosluk" />
          {!gitDosyasi(yol) && <button onClick={onKapat}>Vazgeç</button>}
          <button className="primary" onClick={() => onKaydet(yol, deger)}>Kaydet</button>
        </div>
      </div>
    </div>
  );
}

// ---------------- uzak depolar ----------------

// Sanal GitHub'daki depoların dalları: push ve ekip arkadaşlarının push'u burada görünür
function korumaOzeti(k: DalKorumasi): string {
  const p = [k.prZorunlu ? "doğrudan push yok, PR zorunlu" : null, k.onay ? `${k.onay} onay` : null, k.ci ? "CI geçmeli" : null, k.zorlaSerbest ? null : "force push kapalı"];
  return p.filter(Boolean).join(", ");
}

export function UzakDepolar({ ortam }: { ortam: Ortam }) {
  const uzaklar = Object.entries(ortam.uzaklar ?? {});
  if (!uzaklar.length) return null;
  return (
    <div className="gs-uzaklar">
      {uzaklar.map(([adres, d]) => {
        const dallar = Object.keys(d.refs).filter((r) => r.startsWith("refs/heads/")).sort();
        const varsayilan = d.head.tur === "ref" ? d.head.ref : null;
        return (
          <div key={adres} className="panel gs-uzak">
            <div className="panel-title">Uzak depo (GitHub)</div>
            <div className="gs-uzak-adres">{adres}</div>
            {dallar.length ? (
              <ul>
                {dallar.map((r) => {
                  const h = d.refs[r]!;
                  return (
                    <li key={r}>
                      <strong>{dalAdi(r)}</strong>
                      {d.platform?.korumalar[dalAdi(r)] && <span className="gs-kilit" title={korumaOzeti(d.platform.korumalar[dalAdi(r)]!)} aria-label={`korumalı: ${korumaOzeti(d.platform.korumalar[dalAdi(r)]!)}`}>🔒</span>}
                      {r === varsayilan && <span className="gs-kisayol">varsayılan</span>}
                      <span className="mono">{kisa(h)}</span>
                      <span className="gs-uzak-mesaj">{commitOku(d, h).mesaj.split("\n")[0]}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="gs-uzak-bos">Depo boş: henüz hiçbir şey push edilmedi.</p>
            )}
            {!!d.platform?.prler.length && (
              <ul className="gs-prler" aria-label="Pull request'ler">
                {[...d.platform.prler].reverse().map((pr) => {
                  const ci = pr.durum === "acik" ? prCi(d, pr) : [];
                  const e = pr.durum === "acik" ? engeller(d, pr) : [];
                  return (
                    <li key={pr.no} className={`gs-pr gs-pr-${pr.durum}`}>
                      <span className="gs-pr-durum">{{ acik: "Açık", birlesti: "Birleşti", kapali: "Kapandı" }[pr.durum]}</span>
                      <strong>#{pr.no}</strong> {pr.baslik}
                      <span className="mono gs-pr-dal">{pr.kaynak} → {pr.hedef}</span>
                      {ci.length > 0 && <span className={ci.every((c) => c.gecti) ? "gs-pr-iyi" : "gs-pr-kotu"}>{ci.every((c) => c.gecti) ? "✓ CI" : "✗ CI"}</span>}
                      {pr.onaylar.length > 0 && <span className="gs-pr-iyi">✓ {pr.onaylar.join(", ")}</span>}
                      {pr.durum === "acik" && <span className={e.length ? "gs-pr-kotu" : "gs-pr-iyi"}>{e.length ? "birleştirilemez" : "birleştirilebilir"}</span>}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
