import { useEffect, useState } from "react";
import { PRATIK_YA_DA_KATALOG, SITE_ADI } from "./lib/pratik";
import { HesapAlani, Shell, TemaDugmesi } from "./components/Shell";
import { Katalog } from "./pages/Katalog";
import { OlcekliSayfa } from "./components/Olcek";
import { useRoute, type Route } from "./lib/router";
import { api } from "./lib/api";
import { OturumSaglayici } from "./lib/oturum";
import { Karma } from "./pages/Karma";
import { Ders } from "./pages/Ders";
import { Terimler } from "./pages/Terimler";
import { Yenilikler } from "./pages/Yenilikler";
import { Sss, Tanitim } from "./pages/Tanitim";
import { Questions } from "./pages/Questions";
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
    case "sorular": return `SORU HAVUZU - ${topicTitle ?? (route.hafta ? `${route.hafta}. ünite` : "Tüm sorular")}`;
    case "ders": return route.hafta ? `KONU ANLATIMI - ${route.hafta}. ünite` : "KONU ANLATIMLARI";
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
    <Katalog />;
  useEffect(() => {
    document.title = SITE_ADI;
  }, []);
  return (
    <OturumSaglayici>
      <div className="cati">
        <header className="topbar katalog-ust">
          <a className="brand" href="/">
            <img src="/favicon.svg" alt="" width={18} height={18} />
            {SITE_ADI}
          </a>
          <span className="bosluk" />
          <TemaDugmesi />
          <HesapAlani route={route} />
        </header>
        <main>{sayfa}</main>
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

  // Soru havuzu başka bir sayfaya geçilince kapanmaz, gizlenir:
  // soruların cevapları ve kaydırma yeri korunur
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
      <Shell route={route} currentWeek={currentWeek} title={title} status="Hazır" duyuru={duyuru}>
        <OlcekliSayfa gizli={false}>
          {route.page === "pratik" && <Karma topics={topics} />}
          {sorularProps && (
            <div className="sayfa-tut" hidden={route.page !== "sorular"}>
              <Questions topic={sorularProps.topic} hafta={sorularProps.hafta} topics={topics} />
            </div>
          )}
          {route.page === "ders" && <Ders hafta={route.hafta} />}
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
          {route.page === "bulunamadi" && (
            <p className="empty">
              Bu adreste bir sayfa yok. <a href="/sorular">Sorulara git</a>
            </p>
          )}
        </OlcekliSayfa>
      </Shell>
    </OturumSaglayici>
  );
}
