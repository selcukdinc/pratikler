// /sinavlar: akademisyenin bu pratikteki sınavları. Yeni sınav, kopyalama ve silme.
// Sınavlar sunucuda saklanır; başka cihazdan girince aynı liste görünür.

import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { href, navigate } from "../lib/router";
import { useOturum } from "../lib/oturum";
import { PRATIK } from "../lib/pratik";
import { FormHatasi } from "../components/Form";
import { Iskelet } from "../components/Iskelet";
import { havuzBaglantisi } from "../lib/havuz";
import type { HavuzOzeti, SinavOzeti } from "../../shared/sinav";

const tarih = (ms: number) => new Date(ms).toLocaleString("tr-TR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });

export const sinavYetkisi = (role?: string | null) => role === "admin" || role === "akademisyen";

export function Sinavlar() {
  const { me, yuklendi } = useOturum();
  const [liste, setListe] = useState<SinavOzeti[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [mesgul, setMesgul] = useState(false);
  const [havuzlar, setHavuzlar] = useState<HavuzOzeti[]>([]);
  const yetkili = sinavYetkisi(me?.role);

  const yukle = () => {
    api.havuz.liste().then(setHavuzlar, () => setHavuzlar([]));
    return api.sinav.liste().then(setListe, (e) => setHata(String(e)));
  };
  useEffect(() => {
    if (yetkili) void yukle();
  }, [yetkili]);

  if (!yuklendi) return <Iskelet />;
  if (!yetkili) {
    return (
      <div className="sinavlar">
        <h2>Sınav hazırla</h2>
        <p>
          Bu bölüm öğretim üyeleri içindir: sitedeki sorulardan seçip kendi sınav kağıdını hazırlar, PDF olarak indirirsin.
          Akademisyen hesabı için <a href="/mesajlar">yöneticiye yaz</a>.
        </p>
      </div>
    );
  }

  const yeni = async (kopya?: string) => {
    setMesgul(true);
    const r = await api.sinav.yeni(kopya);
    setMesgul(false);
    if (!r.ok) return setHata(r.hata.error);
    navigate({ page: "sinavlar", id: r.data.id });
  };
  const sil = async (s: SinavOzeti) => {
    if (!confirm(`"${s.ad}" silinsin mi? Bu geri alınamaz.`)) return;
    const r = await api.sinav.sil(s.id);
    if (!r.ok) return setHata(r.hata.error);
    void yukle();
  };

  return (
    <div className="sinavlar">
      <div className="sinavlar-ust">
        <div>
          <h2>Sınavlarım · {PRATIK.ad}</h2>
          <p className="soluk">Sorulardan seç, kağıdın üzerinde düzenle, PDF olarak indir. Değişiklikler kendiliğinden kaydedilir.</p>
        </div>
        <button className="primary" onClick={() => yeni()} disabled={mesgul}>Yeni sınav</button>
      </div>
      <FormHatasi hata={hata} />
      {!liste ? <Iskelet satir={4} /> : liste.length === 0 ? (
        <p className="empty">Henüz sınavın yok. <strong>Yeni sınav</strong> ile başla.</p>
      ) : (
        <ul className="sinav-listesi">
          {liste.map((s) => (
            <li key={s.id}>
              <a href={href({ page: "sinavlar", id: s.id })}>
                <strong>{s.ad || "Adsız sınav"}</strong>
                <span className="soluk">{s.soruSayisi} soru · son değişiklik {tarih(s.guncellendi)}</span>
              </a>
              <span className="sinav-listesi-dugmeler">
                <button onClick={() => yeni(s.id)} disabled={mesgul}>Kopyala</button>
                <button onClick={() => sil(s)}>Sil</button>
              </span>
            </li>
          ))}
        </ul>
      )}
      {havuzlar.length > 0 && (
        <section className="havuz-listesi">
          <h3>Öğrencilere açtığın soru havuzları</h3>
          <ul className="sinav-listesi">
            {havuzlar.map((h) => (
              <li key={h.kod}>
                <a href={href({ page: "havuz", kod: h.kod })}>
                  <strong>{h.ad}</strong>
                  <span className="soluk">{h.soruSayisi} soru · {havuzBaglantisi(h.kod)}</span>
                </a>
                <span className="sinav-listesi-dugmeler">
                  <button onClick={() => void navigator.clipboard?.writeText(havuzBaglantisi(h.kod))}>Bağlantıyı kopyala</button>
                  <button onClick={async () => {
                    if (!confirm(`"${h.ad}" havuzu kaldırılsın mı? Bağlantı artık açılmaz.`)) return;
                    const r = await api.havuz.sil(h.kod);
                    if (!r.ok) return setHata(r.hata.error);
                    void yukle();
                  }}>Kaldır</button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
