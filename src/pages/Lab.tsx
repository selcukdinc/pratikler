// /lab: Sanal Lab. Deney kataloğu ve seçilen deneyin düzeneği.

import { Suspense } from "react";
import { href, tabanaEkle } from "../lib/router";
import { DENEYLER, deneyBul } from "../lab/deneyler";
import { dersBul } from "../dersler";
import { DONEM_ADI } from "../dersler/tipler";
import { uniteYazi } from "../lib/pratik";

function Katalog() {
  return (
    <div className="ders-sayfa">
      <p className="ders-giris">
        Sanal Lab'daki deneyler tarayıcında çalışır; hiçbir şey kurman gerekmez. Her deney bir üniteye bağlıdır.
        Düzenekle oynadıktan sonra o ünitenin sorularıyla kendini dene.
      </p>
      <ol className="ders-listesi">
        {DENEYLER.map((d) => {
          const ders = dersBul(d.unite);
          const icerik = (
            <>
              <span className="ders-hafta">
                {uniteYazi(d.unite)}{ders?.donem ? ` · ${DONEM_ADI[ders.donem]}` : ""}
              </span>
              <strong>{d.ad}</strong>
              <span className="hint">{d.ozet}</span>
              <span className="ders-etiketler">
                {d.bilesen ? <span className="tag">Hazır</span> : <span className="tag">Yakında</span>}
              </span>
            </>
          );
          return <li key={d.id}>{d.bilesen ? <a href={href({ page: "lab", deney: d.id })}>{icerik}</a> : <div className="ders-kart-pasif">{icerik}</div>}</li>;
        })}
      </ol>
    </div>
  );
}

export function Lab({ deney }: { deney?: string }) {
  if (!deney) return <Katalog />;
  const d = deneyBul(deney);
  if (!d) return <p className="empty">Böyle bir deney yok. <a href={tabanaEkle("/lab")}>Tüm deneyler</a></p>;
  const Bilesen = d.bilesen;
  return (
    <div className="ders-sayfa">
      <header className="ders-ust">
        <span className="ders-hafta">{uniteYazi(d.unite)}</span>
        <h2>{d.ad}</h2>
        <p className="hint">{d.ozet}</p>
      </header>
      {Bilesen ? (
        <Suspense fallback={<p className="hint">Deney yükleniyor…</p>}>
          <Bilesen />
        </Suspense>
      ) : (
        <p className="empty">Bu deney hazırlanıyor.</p>
      )}
      <nav className="ders-gezinti" aria-label="Deneyler">
        <a href={tabanaEkle("/lab")}>← Tüm deneyler</a>
        <a href={href({ page: "ders", hafta: d.unite })}>Üniteyi oku →</a>
      </nav>
    </div>
  );
}
