import { aktifHavuz, havuzdanCik } from "../lib/havuz";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { LOGO, PRATIK, PRATIK_YA_DA_KATALOG, SITE_ADI } from "../lib/pratik";
import { DERSLER } from "../dersler";
import { DENEYLER } from "../lab/deneyler";
import { SINAVLAR } from "../cikmis/sinavlar";
import { OZELLIKLER } from "../lib/icerik";
import { href, navigate, type Route } from "../lib/router";
import { api } from "../lib/api";
import { TEMA_ADI, TEMA_SIRASI, useTema, type Tema } from "../lib/tema";
import { uye, useOturum } from "../lib/oturum";
import { Avatar } from "./Avatar";
import { inline } from "./Markdown";
import { KutlamaBildirimi } from "./Kutlama";
import { OlcekDugmeleri } from "./Olcek";
import { gorulmemisSayisi, useSonGorulen } from "../lib/yenilik";
import { GUNLUK_OLAYI, gunlukTekrar } from "../lib/tekrarAyar";

interface Props {
  route: Route;
  currentWeek: number | null;
  title: string;
  status?: string;
  duyuru?: string | null;
  children: ReactNode;
}

// Menüdeki simgeler: 24x24 çizgi çizimler, renk currentColor'dan gelir
const IKONLAR = {
  pratik: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
  lab: "M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 006 21h12a1.7 1.7 0 001.5-2.5L14 9V3M7.5 15h9",
  matstudio: "M7 5l12 7-12 7z",
  simulasyon: "M3 12h3l2-6 4 12 2-6h7",
  cikmis: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5",
  ders: "M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 5v16M8 7h7M8 11h7",
  sorular: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01",
  ilerleme: "M4 20V11M10 20V5M16 20v-6M2 20h20",
  tekrar: "M20 11a8 8 0 00-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0014.3 4.9L20 16M20 20v-4h-4",
  terimler: "M4 5h7M7.5 5v1.5c0 3-1.8 5.5-4 6.5M5 9c1 1.8 3 3.2 5 3.6M13 20l4-9 4 9M14.3 17h5.4",
  tanitim: "M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5z",
  yenilikler: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",
  sss: "M12 21a9 9 0 100-18 9 9 0 000 18zM9.5 9a2.5 2.5 0 114 2c-1 .6-1.5 1.2-1.5 2.2M12 16.5v.5",
  hakkinda: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 11v6M12 7.5v.5",
  gizlilik: "M12 3l8 3v6c0 4.6-3.4 7.8-8 9-4.6-1.2-8-4.4-8-9V6z",
  daralt: "M15 6l-6 6 6 6",
  genislet: "M9 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
} as const;

export function Ikon({ ad, boyut = 16 }: { ad: keyof typeof IKONLAR; boyut?: number }) {
  return (
    <svg className="ikon" width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={IKONLAR[ad]} />
    </svg>
  );
}

// Bir menü öğesi, ilgili alt sayfalarda da etkin görünür (ör. /sorular/<konu>)
const ETKIN: Partial<Record<Route["page"], Route["page"][]>> = {
  sorular: ["sorular"],
  lab: ["lab"],
  matstudio: ["matstudio"],
  simulasyon: ["simulasyon"],
  cikmis: ["cikmis"],
};

function NavLink({ to, current, ikon, children, ek }: {
  to: Route; current: Route; ikon: keyof typeof IKONLAR; children: ReactNode; ek?: ReactNode;
}) {
  const active = (ETKIN[to.page] ?? [to.page]).includes(current.page);
  const ad = typeof children === "string" ? children : undefined;
  return (
    <a className={`nav-link${active ? " active" : ""}`} href={href(to)} aria-current={active ? "page" : undefined} title={ad}>
      <Ikon ad={ikon} />
      <span className="nav-ad">{children}</span>
      {ek}
    </a>
  );
}

const DAR = "pratik:menu-dar";
function darOku(): boolean {
  try {
    return localStorage.getItem(DAR) === "1";
  } catch {
    return false;
  }
}

const TEMA_ISARETI = { sistem: "◐", acik: "☀", koyu: "☾", kahve: "☕" } as const;

// Dört seçenekte döngü düğmesi yorucu olduğu için tema bir açılır listeden seçilir
export function TemaDugmesi() {
  const [tema, sec] = useTema();
  return (
    <select className="tema-secici" value={tema} onChange={(e) => sec(e.target.value as Tema)} aria-label="Tema" title="Tema">
      {TEMA_SIRASI.map((t) => (
        <option key={t} value={t}>{TEMA_ISARETI[t]} {TEMA_ADI[t]}</option>
      ))}
    </select>
  );
}

// Dar ekranda metin boyutu ve tema başlıkta yer kaplamasın diye tek bir
// "Görünüm" menüsüne toplanır; geniş ekranda ikisi başlıkta açık durur.
function GorunumAyarlari({ route }: { route: Route }) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [route]);
  useEffect(() => {
    const kapat = (e: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(e.target as Node)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", kapat);
    return () => document.removeEventListener("pointerdown", kapat);
  }, []);
  return (
    <>
      <span className="gorunum-satir">
        <OlcekDugmeleri />
        <TemaDugmesi />
      </span>
      <details className="gorunum-menu" ref={menu}>
        <summary aria-label="Görünüm: metin boyutu ve tema" title="Görünüm">
          <span aria-hidden="true">Aa</span>
        </summary>
        <div className="gorunum-menu-liste">
          <span className="gorunum-etiket">Metin boyutu</span>
          <OlcekDugmeleri />
          <span className="gorunum-etiket">Tema</span>
          <TemaDugmesi />
        </div>
      </details>
    </>
  );
}

export function HesapAlani({ route }: { route: Route }) {
  const { me, yuklendi, setMe, epostaAcik } = useOturum();
  const menu = useRef<HTMLDetailsElement>(null);
  const [okunmamis, setOkunmamis] = useState({ mesaj: 0, oneri: 0 });
  const giris = uye(me);

  // Sayfa değişince menü kapanır, okunmamış sayısı tazelenir
  useEffect(() => {
    if (menu.current) menu.current.open = false;
    if (giris) api.uye.okunmamis().then(setOkunmamis, () => {});
  }, [route, giris]);

  if (!yuklendi) return <span className="hesap-alani" />;
  if (!uye(me)) {
    const sonra = route.page === "giris" || route.page === "kayit" ? undefined : location.pathname;
    return (
      <span className="hesap-alani">
        <a href={href({ page: "giris", sonra })}>Giriş</a>
        {epostaAcik && <a className="kayit-link" href="/kayit">Kayıt ol</a>}
      </span>
    );
  }

  const cikis = async () => {
    await api.hesap.cikis();
    setMe(null);
    navigate("/");
  };

  const toplam = okunmamis.mesaj + okunmamis.oneri;
  const rozet = (n: number) => (n > 0 ? <span className="sayi-rozeti">{n}</span> : null);

  return (
    <details className="hesap-alani hesap-menu" ref={menu}>
      <summary aria-label={toplam > 0 ? `${me.username}, ${toplam} okunmamış` : undefined}>
        <Avatar id={me.avatar} bg={me.avatarBg} size={22} />
        <span>{me.username}</span>
        {rozet(toplam)}
      </summary>
      <div className="hesap-menu-liste" role="menu">
        {/* Profil ve soru önerisi pratiğe özgü; çatı sitesinde yok */}
        {PRATIK_YA_DA_KATALOG && <a role="menuitem" href={href({ page: "profil", ad: me.username })}>Profilim</a>}
        <a role="menuitem" href="/mesajlar">Mesajlarım {rozet(okunmamis.mesaj)}</a>
        {PRATIK_YA_DA_KATALOG && <a role="menuitem" href="/oner">Soru öner {rozet(okunmamis.oneri)}</a>}
        <a role="menuitem" href="/ayarlar">Ayarlar</a>
        {PRATIK_YA_DA_KATALOG && (me.role === "admin" || me.role === "akademisyen") && <a role="menuitem" href="/sinavlar">Sınav hazırla</a>}
        {me.role === "admin" && <a role="menuitem" href="/yonetim" data-tam-sayfa>Yönetim paneli</a>}
        <button role="menuitem" onClick={cikis}>Çıkış yap</button>
      </div>
    </details>
  );
}

export const TANITIM_GORULDU = "pratik:tanitim-goruldu";

// İlk kez gelenlere tanıtım sayfasını hatırlatan, kapatılabilen şerit
function TanitimSeridi({ route }: { route: Route }) {
  const [gizli, setGizli] = useState(() => {
    try {
      return localStorage.getItem(TANITIM_GORULDU) === "1";
    } catch {
      return true;
    }
  });
  if (gizli || route.page === "tanitim") return null;
  const kapat = () => {
    try {
      localStorage.setItem(TANITIM_GORULDU, "1");
    } catch {
      // gizli pencere
    }
    setGizli(true);
  };
  return (
    <div className="tanitim-seridi">
      <span>Siteye yeni misin? Neler yapabileceğini iki dakikada gör:</span>
      <a href={href({ page: "tanitim" })} onClick={kapat}>Nasıl kullanılır</a>
      <button className="icon" aria-label="Kapat" onClick={kapat}>×</button>
    </div>
  );
}

// Öğrenci bir hocanın soru havuzundaysa her sayfanın üstünde görünür
function HavuzSeridi() {
  const h = aktifHavuz();
  if (!h) return null;
  return (
    <div className="havuz-seridi" role="status">
      <span>Havuz: <a href={href({ page: "havuz", kod: h.kod })}><strong>{h.ad}</strong></a>. Sorular, karma test ve tekrar yalnızca bu havuzdan.</span>
      <button onClick={() => havuzdanCik()}>Havuzdan çık</button>
    </div>
  );
}

export function Shell({ route, currentWeek, title, status, duyuru, children }: Props) {
  const [dar, setDar] = useState(darOku);
  const [menuAcik, setMenuAcik] = useState(false);
  const { me } = useOturum();
  const [tekrarSayisi, setTekrarSayisi] = useState(0);
  const yeniSayisi = gorulmemisSayisi(useSonGorulen());

  // Bugün tekrar edilecek soru sayısı; sayfa değiştikçe tazelenir
  const [gunlukDegisti, setGunlukDegisti] = useState(0);
  useEffect(() => {
    const f = () => setGunlukDegisti((n) => n + 1);
    window.addEventListener(GUNLUK_OLAYI, f);
    return () => window.removeEventListener(GUNLUK_OLAYI, f);
  }, []);
  useEffect(() => {
    if (me) api.tekrarSayisi(gunlukTekrar(me)).then((r) => setTekrarSayisi(r.n), () => {});
  }, [route, me?.id, me?.gunlukTekrar, gunlukDegisti]);

  // Mobilde sayfa değişince menü kapanır
  useEffect(() => setMenuAcik(false), [route]);

  // Açık tutulan sayfalara (soru havuzu, simülasyon alanı) dönüldüğünde kaldığın
  // kaydırma yerine gidilir
  const govde = useRef<HTMLDivElement>(null);
  const kaydirmalar = useRef(new Map<string, number>());
  const anahtar = route.page === "sorular" ? `sorular:${route.topic ?? ""}:${route.hafta ?? ""}` : route.page === "pratik" ? "pratik" : null;
  const anahtarRef = useRef(anahtar);
  useLayoutEffect(() => {
    anahtarRef.current = anahtar;
    const y = anahtar ? kaydirmalar.current.get(anahtar) : undefined;
    if (y !== undefined && govde.current) govde.current.scrollTop = y;
  }, [anahtar]);

  const darDegistir = (d: boolean) => {
    setDar(d);
    try {
      localStorage.setItem(DAR, d ? "1" : "0");
    } catch {
      // kaydedilemezse oturum boyunca geçerli
    }
  };

  return (
    <div className={`shell${dar ? " dar" : ""}${menuAcik ? " menu-acik" : ""}`}>
      <header className="topbar">
        <button className="menu-dugmesi icon" onClick={() => setMenuAcik(!menuAcik)} aria-expanded={menuAcik} aria-controls="ana-menu" aria-label="Menü">
          <Ikon ad="menu" boyut={20} />
        </button>
        <a className="brand" href="/pratik">
          <img src={LOGO} alt="" width={18} height={18} />
          <span className="brand-ad">{SITE_ADI}</span>
        </a>
        <span className="topbar-status">{status}</span>
        {yeniSayisi > 0 && route.page !== "yenilikler" && (
          <a className="yeni-isareti" href="/yenilikler" title="Son ziyaretinden sonra eklenenler">
            Yeni <span className="sayi-rozeti">{yeniSayisi}</span>
          </a>
        )}
        <GorunumAyarlari route={route} />
        <HesapAlani route={route} />
      </header>

      <div className="menu-perde" onClick={() => setMenuAcik(false)} aria-hidden="true" />
      <aside className="flow-nav" id="ana-menu" aria-label="Ana menü">
        <div className="panel-title">
          <span className="nav-ad">FLOW NAVIGATOR</span>
          <button className="icon menu-daralt" onClick={() => darDegistir(!dar)} aria-label={dar ? "Menüyü genişlet" : "Menüyü daralt"} title={dar ? "Menüyü genişlet" : "Menüyü daralt"}>
            <Ikon ad={dar ? "genislet" : "daralt"} />
          </button>
        </div>

        <div className="nav-section">PRATİK</div>
        {DENEYLER.length > 0 && <NavLink to={{ page: "lab" }} current={route} ikon="lab">Sanal Lab</NavLink>}
        {OZELLIKLER.matstudio && <NavLink to={{ page: "matstudio" }} current={route} ikon="matstudio">MatStudio</NavLink>}
        {OZELLIKLER.vhdl && <NavLink to={{ page: "simulasyon" }} current={route} ikon="simulasyon">Simülasyon alanı</NavLink>}
        <NavLink to={{ page: "pratik" }} current={route} ikon="pratik">Karma test</NavLink>

        <div className="nav-section">ÇALIŞ</div>
        <NavLink to={{ page: "ders" }} current={route} ikon="ders"
          ek={DERSLER.length === 0 && <span className="nav-rozet yakinda-rozet" title="Konu anlatımları hazırlanıyor">Yakında</span>}>
          Konu anlatımları
        </NavLink>
        <NavLink to={{ page: "sorular" }} current={route} ikon="sorular"
          ek={currentWeek !== null && <span className="nav-rozet" title={`Sorular ${currentWeek}. ${PRATIK.uniteAdi} dahil açık`}>{PRATIK.uniteKisa}{currentWeek}</span>}>
          Soru havuzu
        </NavLink>
        {SINAVLAR.length > 0 && <NavLink to={{ page: "cikmis" }} current={route} ikon="cikmis">Çıkmış sorular</NavLink>}
        <NavLink to={{ page: "tekrar" }} current={route} ikon="tekrar"
          ek={tekrarSayisi > 0 && <span className="nav-rozet tekrar-rozet" title={`Bugün tekrar edilecek ${tekrarSayisi} soru`}>{tekrarSayisi}</span>}>
          Tekrar
        </NavLink>
        <NavLink to={{ page: "ilerleme" }} current={route} ikon="ilerleme">İlerlemem</NavLink>
        <NavLink to={{ page: "terimler" }} current={route} ikon="terimler">Terimler</NavLink>

        <div className="nav-section">PROJE</div>
        <NavLink to={{ page: "tanitim" }} current={route} ikon="tanitim">Nasıl kullanılır</NavLink>
        <NavLink to={{ page: "sss" }} current={route} ikon="sss">S.S.S.</NavLink>
        <NavLink to={{ page: "yenilikler" }} current={route} ikon="yenilikler"
          ek={yeniSayisi > 0 && <span className="nav-rozet yenilik-rozet" title={`${yeniSayisi} yenilik`}>{yeniSayisi}</span>}>
          Yenilikler
        </NavLink>
        <NavLink to={{ page: "hakkinda" }} current={route} ikon="hakkinda">Hakkında</NavLink>
        <NavLink to={{ page: "gizlilik" }} current={route} ikon="gizlilik">Gizlilik</NavLink>
      </aside>

      <main className="workspace">
        <HavuzSeridi />
        {duyuru && (
          <div className="duyuru" role="status">
            {inline(duyuru)}
          </div>
        )}
        <TanitimSeridi route={route} />
        <div className="section-header">{title}</div>
        <div
          className="workspace-body"
          ref={govde}
          onScroll={(e) => anahtarRef.current && kaydirmalar.current.set(anahtarRef.current, e.currentTarget.scrollTop)}
        >
          {children}
        </div>
      </main>
      <KutlamaBildirimi />
    </div>
  );
}
