// /pratik: MatStudio. Betik editörü, şekil penceresi, komut penceresi ve
// çalışma alanı; paneller sürüklenip boyutlandırılabilir. Kod tarayıcıda
// çalışır, betikler bu tarayıcıda saklanır.

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent as RKeyboardEvent, type ReactNode } from "react";
import { MatlabEditor, type EditorMark } from "../components/MatlabEditor";
import { SekilKutusu } from "../components/MatlabSekil";
import { DuzenAlani, type PanelTanimi } from "../components/DuzenAlani";
import { DuzenMenusu, useDuzen } from "../components/DuzenMenusu";
import { GELEN_KOD, GELEN_OLAY } from "../components/KayitKodu";
import { BaglamMenusu, type MenuOgesi } from "../components/BaglamMenusu";
import type { PanelId } from "../../shared/duzen";
import { Yorumlayici } from "../matlab/yorumla";
import { boyutYazisi, sinifAdi } from "../matlab/deger";
import { kisaDeger } from "../matlab/gosterim";
import { ORNEKLER } from "../matlab/ornekler";
import { yeniCizim, type Cizim } from "../matlab/cizim";

const ANAHTAR = "dsp-pratik:matlab-betikler";

interface Betik {
  ad: string;
  kod: string;
}

interface Calisma {
  betikler: Betik[];
  aktif: string;
}

const ILK: Calisma = { betikler: [{ ad: ORNEKLER[0]!.ad, kod: ORNEKLER[0]!.kod }], aktif: ORNEKLER[0]!.ad };

function yukle(): Calisma {
  try {
    const k = localStorage.getItem(ANAHTAR);
    if (k) {
      const c = JSON.parse(k) as Calisma;
      if (Array.isArray(c.betikler) && c.betikler.length) return c;
    }
  } catch {
    // gizli pencere vb.: örnekle başla
  }
  return ILK;
}

// "ad.m" geçerli bir MatStudio dosya adı mı
const adHatasi = (ad: string, dolu: string[]) => {
  if (!/^[A-Za-z][A-Za-z0-9_]*\.m$/.test(ad)) return "Ad bir harfle başlamalı; yalnızca harf, rakam ve _ içermeli ve .m ile bitmeli.";
  if (dolu.includes(ad)) return "Bu adda bir betik zaten var.";
  return null;
};

function bosAd(dolu: string[], kok = "betik"): string {
  for (let k = 1; ; k++) {
    const ad = `${kok}${k === 1 && kok !== "betik" ? "" : k}.m`;
    if (!dolu.includes(ad)) return ad;
  }
}

function indir(ad: string, veri: string) {
  const url = URL.createObjectURL(new Blob([veri], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = ad;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

interface Satir {
  tur: "girdi" | "cikti" | "hata" | "bilgi";
  metin: string;
}

function Pencere({ baslik, kapat, children }: { baslik: string; kapat: () => void; children: ReactNode }) {
  useEffect(() => {
    const tus = (e: KeyboardEvent) => e.key === "Escape" && kapat();
    window.addEventListener("keydown", tus);
    return () => window.removeEventListener("keydown", tus);
  }, [kapat]);
  return (
    <div className="pencere-arka" onMouseDown={(e) => e.target === e.currentTarget && kapat()}>
      <div className="pencere" role="dialog" aria-modal="true" aria-label={baslik}>
        <div className="panel-title">{baslik}</div>
        <div className="pencere-govde">{children}</div>
      </div>
    </div>
  );
}

function AdPenceresi({ baslik, ilk, dolu, kapat, kaydet }: { baslik: string; ilk: string; dolu: string[]; kapat: () => void; kaydet: (ad: string) => void }) {
  const [ad, setAd] = useState(ilk);
  const tam = ad.endsWith(".m") ? ad : `${ad}.m`;
  const h = adHatasi(tam, dolu);
  const gonder = (e: FormEvent) => {
    e.preventDefault();
    if (!h) kaydet(tam);
  };
  return (
    <Pencere baslik={baslik} kapat={kapat}>
      <form className="pencere-form" onSubmit={gonder}>
        <label>
          Betik adı
          <input autoFocus value={ad} onChange={(e) => setAd(e.target.value.trim())} spellCheck={false} />
        </label>
        {h && ad && <p className="bad">{h}</p>}
        <div className="pencere-dugmeler">
          <button type="button" onClick={kapat}>Vazgeç</button>
          <button className="primary" disabled={!!h}>Tamam</button>
        </div>
      </form>
    </Pencere>
  );
}

interface Props {
  onStatus: (s: string) => void;
  // Başka bir sayfaya geçilince MatStudio kapanmaz, gizlenir; gizliyken
  // klavye kısayolları çalışmaz
  aktif?: boolean;
}

export function Sandbox({ onStatus, aktif = true }: Props) {
  const [cal, setCal] = useState<Calisma>(yukle);
  const yorum = useRef<Yorumlayici>(new Yorumlayici());
  const [cizim, setCizim] = useState<Cizim>(() => yorum.current.cizim);
  const [degiskenSurumu, setDegiskenSurumu] = useState(0);
  const [satirlar, setSatirlar] = useState<Satir[]>([{ tur: "bilgi", metin: "Betiği çalıştırmak için ▶ Çalıştır'a ya da Ctrl+Enter'a bas. Komutları aşağıya da yazabilirsin." }]);
  const [girdi, setGirdi] = useState("");
  const gecmis = useRef<string[]>([]);
  const gecmisKonum = useRef(-1);
  const [hataSatiri, setHataSatiri] = useState<{ betik: string; satir: number } | null>(null);
  const [gotoLine, setGotoLine] = useState<{ line: number; nonce: number }>();
  const [sekilSekme, setSekilSekme] = useState(0);
  const [menu, setMenu] = useState<{ x: number; y: number; ogeler: MenuOgesi[] } | null>(null);
  const [diyalog, setDiyalog] = useState<null | { tur: "yeni" } | { tur: "adlandir"; ad: string }>(null);
  const [duzen, setDuzen] = useDuzen();
  const [parla, setParla] = useState(0);
  const dosyaGirdisi = useRef<HTMLInputElement>(null);
  const komutSonu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(ANAHTAR, JSON.stringify(cal));
    } catch {
      // kaydedilemezse oturum boyunca bellekte kalır
    }
  }, [cal]);

  useEffect(() => {
    komutSonu.current?.scrollIntoView({ block: "end" });
  }, [satirlar]);

  const betik = cal.betikler.find((b) => b.ad === cal.aktif) ?? cal.betikler[0]!;
  const adlar = cal.betikler.map((b) => b.ad);

  const betikEkle = useCallback((ad: string, kod: string) => {
    setCal((c) => {
      const dolu = c.betikler.map((b) => b.ad);
      const ad2 = dolu.includes(ad) ? bosAd(dolu, ad.replace(/\.m$/, "")) : ad;
      return { betikler: [...c.betikler, { ad: ad2, kod }], aktif: ad2 };
    });
  }, []);

  // Laboratuvar kaydından ya da dersten gelen kod yeni bir betik olarak açılır
  useEffect(() => {
    const al = () => {
      try {
        const kod = localStorage.getItem(GELEN_KOD);
        if (kod === null) return;
        localStorage.removeItem(GELEN_KOD);
        betikEkle("aktarilan.m", kod);
        onStatus("Kod yeni bir betik olarak açıldı");
      } catch {
        // depolama kapalı
      }
    };
    al();
    window.addEventListener(GELEN_OLAY, al);
    return () => window.removeEventListener(GELEN_OLAY, al);
  }, [betikEkle, onStatus]);

  const yazdir = (yeni: Satir[]) => setSatirlar((s) => [...s, ...yeni].slice(-500));

  const sonucuIsle = (r: ReturnType<Yorumlayici["calistir"]>, betikAdi: string | null) => {
    const y = yorum.current;
    const yeni: Satir[] = [];
    if (y.clc) {
      y.clc = false;
      setSatirlar([]);
    }
    if (y.cikti) yeni.push({ tur: "cikti", metin: y.cikti.replace(/\n$/, "") });
    y.cikti = "";
    if (r.hata) {
      const yer = r.hata.satir && betikAdi ? ` (${betikAdi}, satır ${r.hata.satir})` : r.hata.satir && !betikAdi ? "" : "";
      yeni.push({ tur: "hata", metin: `Hata${yer}: ${r.hata.mesaj}` });
      if (betikAdi && r.hata.satir) {
        setHataSatiri({ betik: betikAdi, satir: r.hata.satir });
        setGotoLine({ line: r.hata.satir, nonce: Date.now() });
      }
    } else if (betikAdi) setHataSatiri(null);
    yazdir(yeni);
    setCizim(structuredClone(y.cizim));
    if (y.cizim.sekiller.length) setSekilSekme(Math.max(0, y.cizim.aktif));
    setDegiskenSurumu((v) => v + 1);
    if (!r.hata && y.cizim.sekiller.length) setParla((p) => p + 1);
  };

  const calistir = () => {
    const y = yorum.current;
    yazdir([{ tur: "girdi", metin: `>> run ${betik.ad.replace(/\.m$/, "")}` }]);
    // Her betik temiz şekillerle başlar; önceki subplot'lar yeni çizimi bozmasın
    y.cizim = yeniCizim();
    const bas = performance.now();
    const r = y.calistir(betik.kod);
    sonucuIsle(r, betik.ad);
    onStatus(r.hata ? "Hata ile durdu" : `${betik.ad} çalıştı (${Math.round(performance.now() - bas)} ms)`);
  };

  const komutGonder = (e: FormEvent) => {
    e.preventDefault();
    const k = girdi.trim();
    if (!k) return;
    gecmis.current = [...gecmis.current.filter((g) => g !== k), k].slice(-100);
    gecmisKonum.current = -1;
    setGirdi("");
    yazdir([{ tur: "girdi", metin: `>> ${k}` }]);
    sonucuIsle(yorum.current.calistir(k), null);
  };

  const gecmisTus = (e: RKeyboardEvent<HTMLInputElement>) => {
    const g = gecmis.current;
    if (!g.length || (e.key !== "ArrowUp" && e.key !== "ArrowDown")) return;
    e.preventDefault();
    let k = gecmisKonum.current < 0 ? g.length : gecmisKonum.current;
    k = e.key === "ArrowUp" ? Math.max(0, k - 1) : k + 1;
    if (k >= g.length) {
      gecmisKonum.current = -1;
      setGirdi("");
    } else {
      gecmisKonum.current = k;
      setGirdi(g[k]!);
    }
  };

  // Gizliyken kısayollar çalışmaz
  useEffect(() => {
    if (!aktif) return;
    const tus = (e: KeyboardEvent) => {
      if (e.key === "F5" && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        calistir();
      }
    };
    window.addEventListener("keydown", tus);
    return () => window.removeEventListener("keydown", tus);
  });

  const kodDegistir = (kod: string) => setCal((c) => ({ ...c, betikler: c.betikler.map((b) => (b.ad === c.aktif ? { ...b, kod } : b)) }));

  const sil = (ad: string) => {
    const b = cal.betikler.find((x) => x.ad === ad);
    if (!b || !confirm(`${ad} silinsin mi? Bu işlem geri alınamaz.`)) return;
    setCal((c) => {
      const kalan = c.betikler.filter((x) => x.ad !== ad);
      if (!kalan.length) return { betikler: [{ ad: "betik1.m", kod: "" }], aktif: "betik1.m" };
      return { betikler: kalan, aktif: c.aktif === ad ? kalan[0]!.ad : c.aktif };
    });
  };

  const yukleDosya = async (dosyalar: FileList | null) => {
    if (!dosyalar) return;
    for (const f of Array.from(dosyalar)) {
      if (f.size > 200_000) {
        onStatus(`${f.name} çok büyük (en fazla 200 KB)`);
        continue;
      }
      const ad = /^[A-Za-z][A-Za-z0-9_]*\.m$/.test(f.name) ? f.name : `${f.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_]/g, "_").replace(/^[^A-Za-z]+/, "") || "betik"}.m`;
      betikEkle(ad, await f.text());
    }
  };

  const calismaAlaniniTemizle = () => {
    yorum.current.degiskenler.clear();
    setDegiskenSurumu((v) => v + 1);
    yazdir([{ tur: "girdi", metin: ">> clear" }]);
  };
  const sekilleriKapat = () => {
    yorum.current.calistir("close all");
    setCizim(structuredClone(yorum.current.cizim));
  };

  const betikMenusu = (ad: string): MenuOgesi[] => [
    { etiket: "Yeniden adlandır…", yap: () => setDiyalog({ tur: "adlandir", ad }) },
    { etiket: ".m olarak indir", yap: () => indir(ad, cal.betikler.find((b) => b.ad === ad)?.kod ?? "") },
    { etiket: "", ayrac: true },
    { etiket: "Sil", yap: () => sil(ad) },
  ];

  const dosyaMenusu: MenuOgesi[] = [
    { etiket: "＋ Yeni betik…", yap: () => setDiyalog({ tur: "yeni" }) },
    { etiket: "Dosyadan yükle (.m)…", yap: () => dosyaGirdisi.current?.click() },
    { etiket: `${betik.ad} dosyasını indir`, yap: () => indir(betik.ad, betik.kod) },
    { etiket: "", ayrac: true },
    { etiket: "Çalışma alanını temizle (clear)", yap: calismaAlaniniTemizle },
    { etiket: "Şekilleri kapat (close all)", yap: sekilleriKapat },
    { etiket: "Komut penceresini temizle (clc)", yap: () => setSatirlar([]) },
  ];

  const ornekMenusu: MenuOgesi[] = ORNEKLER.map((o) => ({
    etiket: `${o.baslik}: ${o.aciklama}`,
    yap: () => {
      betikEkle(o.ad, o.kod);
      onStatus(`${o.baslik} örneği açıldı`);
    },
  }));

  const marks = useMemo<EditorMark[]>(
    () => (hataSatiri && hataSatiri.betik === betik.ad ? [{ line: hataSatiri.satir, severity: "error" }] : []),
    [hataSatiri, betik.ad],
  );

  const degiskenler = useMemo(
    () => [...yorum.current.degiskenler.entries()].sort(([a], [b]) => a.localeCompare(b)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [degiskenSurumu],
  );

  const sekiller = cizim.sekiller;
  const gosterilen = sekiller[Math.min(sekilSekme, sekiller.length - 1)];

  const paneller: Record<PanelId, PanelTanimi> = {
    editor: {
      ad: "Editör",
      sinif: "editor",
      baslik: (
        <div className="tabs betik-sekmeleri" role="tablist" aria-label="Betikler">
          {cal.betikler.map((b) => (
            <button
              key={b.ad}
              role="tab"
              aria-selected={b.ad === betik.ad}
              onClick={() => setCal((c) => ({ ...c, aktif: b.ad }))}
              onContextMenu={(e) => {
                e.preventDefault();
                setMenu({ x: e.clientX, y: e.clientY, ogeler: betikMenusu(b.ad) });
              }}
              title="Sağ tıkla: yeniden adlandır, indir, sil"
            >
              {b.ad}
            </button>
          ))}
          <button className="icon" onClick={() => setDiyalog({ tur: "yeni" })} title="Yeni betik" aria-label="Yeni betik">＋</button>
        </div>
      ),
      govde: <MatlabEditor key={betik.ad} value={betik.kod} onChange={kodDegistir} marks={marks} gotoLine={gotoLine} onRun={calistir} etiket={`${betik.ad} betiği`} />,
    },
    figure: {
      ad: "Şekil",
      sinif: "figure",
      baslik: sekiller.length > 1 ? (
        <div className="tabs" role="tablist" aria-label="Şekiller">
          {sekiller.map((s, i) => (
            <button key={s.no} role="tab" aria-selected={s === gosterilen} onClick={() => setSekilSekme(i)}>Figure {s.no}</button>
          ))}
        </div>
      ) : (
        <span className="panel-ad">{gosterilen ? `Figure ${gosterilen.no}` : "Şekil"}</span>
      ),
      govde: gosterilen && gosterilen.eksenler.length ? (
        <div className="sekil-alani">
          <SekilKutusu sekil={gosterilen} />
          {parla > 0 && <span className="parla-katman" key={parla} aria-hidden="true" />}
        </div>
      ) : (
        <p className="empty">plot, stem, histogram ya da bar ile çizdiğin grafikler burada görünür.</p>
      ),
    },
    command: {
      ad: "Komut penceresi",
      sinif: "command",
      baslik: <span className="panel-ad">Komut penceresi</span>,
      govde: (
        <div className="komut-penceresi" onClick={(e) => (e.target as HTMLElement).tagName !== "INPUT" && window.getSelection()?.isCollapsed && e.currentTarget.querySelector("input")?.focus()}>
          <div className="komut-gecmisi" role="log" aria-live="polite">
            {satirlar.map((s, i) => (
              <pre key={i} className={`komut-${s.tur}`}>{s.metin}</pre>
            ))}
            <div ref={komutSonu} />
          </div>
          <form className="komut-satiri" onSubmit={komutGonder}>
            <span aria-hidden="true">&gt;&gt;</span>
            <input
              value={girdi}
              onChange={(e) => setGirdi(e.target.value)}
              onKeyDown={gecmisTus}
              aria-label="Komut"
              spellCheck={false}
              autoComplete="off"
              placeholder="ör. x = 0:0.1:1"
            />
          </form>
        </div>
      ),
    },
    workspace: {
      ad: "Çalışma alanı",
      sinif: "calisma-paneli",
      baslik: <span className="panel-ad">Çalışma alanı</span>,
      govde: degiskenler.length ? (
        <table className="calisma-alani">
          <thead>
            <tr><th>Ad</th><th>Değer</th><th>Boyut</th><th>Sınıf</th></tr>
          </thead>
          <tbody>
            {degiskenler.map(([ad, d]) => (
              <tr key={ad}>
                <td className="mono">{ad}</td>
                <td className="mono">{kisaDeger(d)}</td>
                <td>{boyutYazisi(d)}</td>
                <td>{sinifAdi(d)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty">Değişkenler çalıştırdıktan sonra burada listelenir.</p>
      ),
    },
  };

  return (
    <div className="sandbox">
      <div className="toolbar">
        <button className="primary" onClick={calistir} title="Ctrl+Enter ya da F5">▶ Çalıştır</button>
        <button
          aria-haspopup="menu"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setMenu({ x: r.left, y: r.bottom + 2, ogeler: dosyaMenusu });
          }}
        >
          Dosya ▾
        </button>
        <button
          aria-haspopup="menu"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setMenu({ x: r.left, y: r.bottom + 2, ogeler: ornekMenusu });
          }}
        >
          Örnekler ▾
        </button>
        <span className="hint toolbar-ipucu">Tarayıcıda çalışan MatStudio alt kümesi; betiklerin bu tarayıcıda saklanır.</span>
        <span className="toolbar-bosluk" />
        <DuzenMenusu duzen={duzen} uygula={setDuzen} durum={onStatus} />
        <input ref={dosyaGirdisi} type="file" accept=".m,.txt" multiple hidden onChange={(e) => (yukleDosya(e.target.files), (e.target.value = ""))} />
      </div>

      <DuzenAlani duzen={duzen} degistir={setDuzen} paneller={paneller} menuAc={(x, y, ogeler) => setMenu({ x, y, ogeler })} />

      {menu && <BaglamMenusu x={menu.x} y={menu.y} ogeler={menu.ogeler} kapat={() => setMenu(null)} />}
      {diyalog?.tur === "yeni" && (
        <AdPenceresi
          baslik="Yeni betik"
          ilk={bosAd(adlar)}
          dolu={adlar}
          kapat={() => setDiyalog(null)}
          kaydet={(ad) => {
            betikEkle(ad, "");
            setDiyalog(null);
          }}
        />
      )}
      {diyalog?.tur === "adlandir" && (
        <AdPenceresi
          baslik="Yeniden adlandır"
          ilk={diyalog.ad}
          dolu={adlar.filter((a) => a !== diyalog.ad)}
          kapat={() => setDiyalog(null)}
          kaydet={(ad) => {
            setCal((c) => ({ betikler: c.betikler.map((b) => (b.ad === diyalog.ad ? { ...b, ad } : b)), aktif: c.aktif === diyalog.ad ? ad : c.aktif }));
            setDiyalog(null);
          }}
        />
      )}
    </div>
  );
}
