// Yükleme iskeleti: içerik gelene kadar sayfanın kabaca biçimini gösterir.
// 150 ms'den kısa yüklemelerde hiç görünmez, böylece hızlı cevaplarda titreme olmaz.
// Ekran okuyucu için gizli bir "Yükleniyor" metni taşır; hareket azaltma açıksa parlamaz.

import { useEffect, useState, type ReactNode } from "react";

const GECIKME_MS = 150;

function Gecikmeli({ children }: { children: ReactNode }) {
  const [goster, setGoster] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGoster(true), GECIKME_MS);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="iskelet-kap" aria-busy="true" role="status">
      <span className="sr-only">Yükleniyor…</span>
      {goster && <div aria-hidden="true">{children}</div>}
    </div>
  );
}

const Cizgi = ({ en = "100%", boy }: { en?: string; boy?: string }) => (
  <span className="iskelet" style={{ width: en, ...(boy ? { height: boy } : {}) }} />
);

// Düz metin satırları
export function Iskelet({ satir = 3 }: { satir?: number }) {
  return (
    <Gecikmeli>
      <div className="iskelet-blok">
        {Array.from({ length: satir }, (_, i) => <Cizgi key={i} en={i === satir - 1 ? "60%" : "100%"} />)}
      </div>
    </Gecikmeli>
  );
}

// Soru kartları (Soru havuzu, Karma, Tekrar)
export function SoruIskeleti({ adet = 3 }: { adet?: number }) {
  return (
    <Gecikmeli>
      <div className="iskelet-sayfa">
        {Array.from({ length: adet }, (_, i) => (
          <div key={i} className="question iskelet-soru">
            <Cizgi en="30%" />
            <Cizgi />
            <Cizgi en="85%" />
            <div className="iskelet-siklar">
              <Cizgi en="45%" /><Cizgi en="55%" /><Cizgi en="40%" /><Cizgi en="50%" />
            </div>
          </div>
        ))}
      </div>
    </Gecikmeli>
  );
}

// Katalog kartları: logo, ad ve iki satır açıklama
export function KartIskeleti({ adet = 4 }: { adet?: number }) {
  return (
    <Gecikmeli>
      <div className="iskelet-sayfa">
        <Cizgi en="160px" boy="1.3em" />
        <div className="katalog-izgara">
          {Array.from({ length: adet }, (_, i) => (
            <div key={i} className="katalog-kart iskelet-kart">
              <span className="iskelet katalog-logo" />
              <div className="katalog-govde">
                <Cizgi en="55%" />
                <Cizgi />
                <Cizgi en="70%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gecikmeli>
  );
}

// İlerleme: özet kutuları ve tablo
export function TabloIskeleti({ satir = 6 }: { satir?: number }) {
  return (
    <Gecikmeli>
      <div className="iskelet-sayfa">
        <div className="iskelet-kutular">
          <Cizgi boy="64px" /><Cizgi boy="64px" /><Cizgi boy="64px" />
        </div>
        <div className="iskelet-blok">
          {Array.from({ length: satir }, (_, i) => <Cizgi key={i} boy="1.6em" />)}
        </div>
      </div>
    </Gecikmeli>
  );
}
