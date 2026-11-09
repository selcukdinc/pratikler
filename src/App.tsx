import { Suspense, lazy, useEffect, useState } from "react";
import { PRATIK_YA_DA_KATALOG, SITE_ADI, uniteYazi } from "./lib/pratik";
import { HesapAlani, RolCipi, Shell, TemaDugmesi } from "./components/Shell";
import { KademeSayfasi, Katalog } from "./pages/Katalog";
import { OlcekliSayfa } from "./components/Olcek";
import { useRoute, type Route, tabanaEkle } from "./lib/router";
import { api } from "./lib/api";
import { OturumSaglayici } from "./lib/oturum";
import { Karma } from "./pages/Karma";
import { Ders } from "./pages/Ders";
import { Lab } from "./pages/Lab";
import { Cikmis } from "./pages/Cikmis";
import { deneyBul } from "./lab/deneyler";
import { sinavBul } from "./cikmis/sinavlar";
import { Terimler } from "./pages/Terimler";
import { Yenilikler } from "./pages/Yenilikler";
import { Sss, Tanitim } from "./pages/Tanitim";
import { Questions } from "./pages/Questions";
import { OZELLIKLER } from "./lib/icerik";
import { dersBul } from "./dersler";

// MatStudio yalnızca açan pratikte ayrı parça olarak indirilir (editör ve yorumlayıcı)
const MatStudio = lazy(() => import("./pages/MatStudio").then((m) => ({ default: m.Sandbox })));
// VHDL simülasyon alanı (FPGA) da öyle: editör ve NVC yalnızca açılınca indirilir
const Simulasyon = lazy(() => import("./pages/Simulasyon").then((m) => ({ default: m.Sandbox })));
// Sınav hazırlama yalnızca akademisyen ve yöneticiye açılır; ayrı parça olarak yüklenir
const Sinavlar = lazy(() => import("./pages/Sinavlar").then((m) => ({ default: m.Sinavlar })));
const HavuzGiris = lazy(() => import("./pages/HavuzGiris").then((m) => ({ default: m.HavuzGiris })));
const SinavKagidi = lazy(() => import("./pages/SinavKagidi").then((m) => ({ default: m.SinavKagidi })));
import { Progress } from "./pages/Progress";
import { Tekrar } from "./pages/Tekrar";
import { About } from "./pages/About";
import { Gizlilik } from "./pages/Gizlilik";
import { Giris } from "./pages/Giris";
import { Kayit } from "./pages/Kayit";
import { SifreSifirla } from "./pages/SifreSifirla";
import { Profil } from "./pages/Profil";
import { Ayarlar } from "./pages/Ayarlar";
import { Yonetim } from "./pages/Yonetim";
import { Oner } from "./pages/Oner";
import { Mesajlar } from "./pages/Mesajlar";
import type { Topic } from "../shared/api";

function baslik(route: Route, topicTitle?: string): string {
  switch (route.page) {
    case "pratik": return "KARMA TEST - Karışık sorular, karışık şıklar";
    case "matstudio": return "MatStudio";
    case "simulasyon": return "SİMÜLASYON ALANI - VHDL yaz, benzetimini çalıştır";
    case "lab": return route.deney ? `SANAL LAB - ${deneyBul(route.deney)?.ad ?? "Deney"}` : "SANAL LAB";
    case "cikmis": return route.sinav ? `ÇIKMIŞ SORULAR - ${sinavBul(route.sinav)?.ad ?? "Sınav"}` : "ÇIKMIŞ SORULAR";
    case "sorular": return `SORU HAVUZU - ${topicTitle ?? (route.hafta ? uniteYazi(route.hafta) : "Tüm sorular")}`;
    case "ders": return route.hafta ? `KONU ANLATIMI - ${dersBul(route.hafta)?.proje ? "Proje" : uniteYazi(route.hafta)}` : "KONU ANLATIMLARI";
    case "ilerleme": return "İLERLEME - Konu bazlı durum";
    case "tekrar": return "TEKRAR - Aralıklı tekrar";
    case "hakkinda": return "HAKKINDA";
    case "tanitim": return "NASIL KULLANILIR";
    case "sss": return "SIK SORULAN SORULAR";
    case "yenilikler": return "YENİLİKLER";
    case "terimler": return "TERİMLER - Kavramlar sözlüğü";
    case "gizlilik": return "GİZLİLİK";
    case "giris": return "HESAP - Giriş";
    case "kayit": return "HESAP - Kayıt";
    case "sifre-sifirla": return "HESAP - Parola sıfırlama";
    case "profil": return `PROFİL - ${route.ad}`;
    case "ayarlar": return "HESAP - Ayarlar";
    case "oner": return "SORU ÖNER";
    case "mesajlar": return "MESAJLAR - Yöneticiyle yazışmalar";
    case "yonetim": return "YÖNETİM";
    case "sinavlar": return route.id ? "SINAV HAZIRLA - Kağıt" : "SINAV HAZIRLA - Sınavlarım";
    case "havuz": return "SORU HAVUZU - Hocanın seçtiği sorular";
    case "kademe": return "SINIF";
    case "bulunamadi": return "SAYFA BULUNAMADI";
  }
}

// Çatı sitesi: katalog, giriş/kayıt ve gizlilik; pratik sayfaları pratiklerin kendi adreslerinde
function CatiApp() {
  const route = useRoute();
  const sayfa =
    route.page === "giris" ? <Giris sonra={route.sonra ?? "/"} /> :
    route.page === "kayit" ? <Kayit /> :
    route.page === "sifre-sifirla" ? <SifreSifirla /> :
    route.page === "gizlilik" ? <Gizlilik /> :
    route.page === "ayarlar" ? <Ayarlar sekme={route.sekme} /> :
    route.page === "mesajlar" ? <Mesajlar id={route.id} /> :
    route.page === "yonetim" ? <Yonetim bolum={route.bolum} soru={route.soru} alt={route.alt} /> :
    route.page === "kademe" ? <KademeSayfasi id={route.id} /> :
    <Katalog />;
  useEffect(() => {
    document.title = SITE_ADI;
  }, []);
  return (
    <OturumSaglayici>
      <div className="cati">
        <header className="topbar katalog-ust">
          <a className="brand" href={tabanaEkle("/")}>
            <img src="/logolar/pratikler.svg" alt="" width={18} height={18} />
            <span className="brand-ad">{SITE_ADI}</span>
          </a>
          <span className="bosluk" />
          <TemaDugmesi />
          <RolCipi />
          <HesapAlani route={route} />
        </header>
        <main>{sayfa.type === Katalog || sayfa.type === KademeSayfasi ? sayfa : <div className="cati-sayfa">{sayfa}</div>}</main>
      </div>
    </OturumSaglayici>
  );
}

export function App() {
  return PRATIK_YA_DA_KATALOG ? <PratikApp /> : <CatiApp />;
}

function PratikApp() {
  const route = useRoute();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentWeek, setCurrentWeek] = useState<number | null>(null);
  const [duyuru, setDuyuru] = useState<string | null>(null);

  useEffect(() => {
    api.topics().then(
      (r) => {
        setTopics(r.topics);
        setCurrentWeek(r.currentWeek);
        setDuyuru(r.announcement);
      },
      // API yoksa (ör. yalnızca statik önizleme) sayfalar boş açılır
      () => setTopics([]),
    );
  }, []);

  // Soru havuzu ve MatStudio başka bir sayfaya geçilince kapanmaz, gizlenir:
  // soruların cevapları, yazılan kod ve kaydırma yeri korunur
  const [status, setStatus] = useState("Hazır");
  const matstudioVar = OZELLIKLER.matstudio;
  const [matstudioAcildi, setMatstudioAcildi] = useState(route.page === "matstudio");
  useEffect(() => {
    if (route.page === "matstudio") setMatstudioAcildi(true);
  }, [route]);
  const vhdlVar = OZELLIKLER.vhdl;
  const [simAcildi, setSimAcildi] = useState(route.page === "simulasyon");
  useEffect(() => {
    if (route.page === "simulasyon") setSimAcildi(true);
  }, [route]);
  const [sonSorular, setSonSorular] = useState<{ topic?: string; hafta?: number } | null>(null);
  useEffect(() => {
    if (route.page === "sorular") setSonSorular({ topic: route.topic, hafta: route.hafta });
  }, [route]);
  const sorularProps = route.page === "sorular" ? { topic: route.topic, hafta: route.hafta } : sonSorular;

  const topicTitle = route.page === "sorular" && route.topic ? topics.find((t) => t.id === route.topic)?.title : undefined;
  const title = baslik(route, topicTitle);

  useEffect(() => {
    document.title = `${title} · ${SITE_ADI}`;
  }, [title]);

  return (
    <OturumSaglayici>
      <Shell route={route} currentWeek={currentWeek} title={title} status={status} duyuru={duyuru}>
        {matstudioVar && matstudioAcildi && (
          <div className="sayfa-tut" hidden={route.page !== "matstudio"}>
            <Suspense fallback={<p className="empty">MatStudio yükleniyor…</p>}>
              <MatStudio onStatus={setStatus} aktif={route.page === "matstudio"} />
            </Suspense>
          </div>
        )}
        {vhdlVar && simAcildi && (
          <div className="sayfa-tut" hidden={route.page !== "simulasyon"}>
            <Suspense fallback={<p className="empty">Simülasyon alanı yükleniyor…</p>}>
              <Simulasyon onStatus={setStatus} aktif={route.page === "simulasyon"} />
            </Suspense>
          </div>
        )}
        <OlcekliSayfa gizli={route.page === "matstudio" || route.page === "simulasyon"}>
          {route.page === "pratik" && <Karma topics={topics} />}
          {sorularProps && (
            <div className="sayfa-tut" hidden={route.page !== "sorular"}>
              <Questions topic={sorularProps.topic} hafta={sorularProps.hafta} topics={topics} />
            </div>
          )}
          {route.page === "ders" && <Ders hafta={route.hafta} />}
          {route.page === "lab" && <Lab deney={route.deney} />}
          {route.page === "cikmis" && <Cikmis sinav={route.sinav} />}
          {route.page === "ilerleme" && <Progress />}
          {route.page === "tekrar" && <Tekrar />}
          {route.page === "hakkinda" && <About />}
          {route.page === "tanitim" && <Tanitim />}
          {route.page === "sss" && <Sss />}
          {route.page === "yenilikler" && <Yenilikler />}
          {route.page === "terimler" && <Terimler />}
          {route.page === "gizlilik" && <Gizlilik />}
          {route.page === "giris" && <Giris sonra={route.sonra} />}
          {route.page === "kayit" && <Kayit />}
          {route.page === "sifre-sifirla" && <SifreSifirla />}
          {route.page === "profil" && <Profil ad={route.ad} />}
          {route.page === "ayarlar" && <Ayarlar sekme={route.sekme} />}
          {route.page === "oner" && <Oner />}
          {route.page === "mesajlar" && <Mesajlar id={route.id} />}
          {route.page === "yonetim" && <Yonetim bolum={route.bolum} soru={route.soru} alt={route.alt} />}
          {route.page === "sinavlar" && (
            <Suspense fallback={<p className="empty">Yükleniyor…</p>}>
              {route.id ? <SinavKagidi id={route.id} /> : <Sinavlar />}
            </Suspense>
          )}
          {route.page === "havuz" && (
            <Suspense fallback={<p className="empty">Yükleniyor…</p>}>
              <HavuzGiris kod={route.kod} />
            </Suspense>
          )}
          {route.page === "bulunamadi" && (
            <p className="empty">
              Bu adreste bir sayfa yok. <a href={tabanaEkle("/sorular")}>Sorulara git</a>
            </p>
          )}
        </OlcekliSayfa>
      </Shell>
    </OturumSaglayici>
  );
}
