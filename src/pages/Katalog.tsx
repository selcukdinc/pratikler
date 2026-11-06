// Çatı sitesi (pratikler.selcukdinc.dev): yayındaki pratiklerin kataloğu ve
// giriş yapmış kişinin her pratikteki ilerlemesi. Hesap bütün pratiklerde ortaktır.

import { useEffect, useState } from "react";
import type { KatalogPratik, PratikIlerlemesi } from "../../shared/api";
import { PRATIKLER } from "../../icerik/index";
import { api } from "../lib/api";
import { pratikBaglantisi } from "../lib/pratik";
import { useOturum } from "../lib/oturum";
import { KartIskeleti } from "../components/Iskelet";

// Pratiğin logosu; logosu yoksa adın baş harfi
function KartLogosu({ id }: { id: string }) {
  const p = PRATIKLER.find((x) => x.id === id)!;
  return p.logo
    ? <img className="katalog-logo" src={p.logo} alt="" width={48} height={48} loading="lazy" />
    : <span className="katalog-logo katalog-harf" aria-hidden="true">{p.ad.charAt(0)}</span>;
}

const tarih = (ms: number) => new Date(ms).toLocaleDateString("tr-TR", { day: "numeric", month: "long" });

export function Katalog() {
  const { me } = useOturum();
  const [liste, setListe] = useState<KatalogPratik[] | null>(null);
  const [ilerleme, setIlerleme] = useState<PratikIlerlemesi[]>([]);

  useEffect(() => {
    api.katalog().then(setListe, () =>
      // API yoksa (statik önizleme) meta bilgisinden çizilir, soru sayısı bilinmez
      setListe(PRATIKLER.filter((p) => p.yayinda).map((p) => ({ id: p.id, alt: p.alt, ad: p.ad, alan: p.alan, aciklama: p.aciklama, unite: p.uniteler.length, soru: 0 }))),
    );
  }, []);
  useEffect(() => {
    if (me) api.katalogIlerleme().then(setIlerleme, () => setIlerleme([]));
    else setIlerleme([]);
  }, [me?.id]);

  const meta = (id: string) => PRATIKLER.find((p) => p.id === id)!;
  const alanlar = [...new Set((liste ?? []).map((p) => p.alan))];

  return (
    <div className="katalog">
      <section className="katalog-giris">
        <h1 className="katalog-baslik">
          <img src="/logolar/pratikler.svg" alt="" width={44} height={44} />
          Pratikler
        </h1>
        <p>
          Ders ve kitaplar için ücretsiz, açık kaynaklı soru çalışma siteleri. Tek hesapla hepsinde ilerlemen kaydedilir;
          hesap açmadan da misafir olarak çözebilirsin.
        </p>
      </section>

      {ilerleme.length > 0 && (
        <section aria-labelledby="devam">
          <h2 id="devam">Kaldığın yerden devam et</h2>
          <div className="katalog-izgara">
            {ilerleme.map((r) => {
              const p = meta(r.id);
              return (
                <a key={r.id} className="katalog-kart" href={pratikBaglantisi(p)}>
                  <KartLogosu id={r.id} />
                  <span className="katalog-govde">
                    <strong>{p.ad}</strong>
                    <span className="katalog-sayilar">
                      {r.denenen} soru denendi · %{r.denenen ? Math.round((100 * r.dogru) / r.denenen) : 0} doğru
                    </span>
                    {r.bekleyen > 0 && <span className="nav-rozet tekrar-rozet">Bugün {r.bekleyen} tekrar</span>}
                    <span className="katalog-son">Son çalışma: {tarih(r.son)}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {liste === null ? (
        <KartIskeleti />
      ) : (
        alanlar.map((alan) => (
          <section key={alan} aria-labelledby={`alan-${alan}`}>
            <h2 id={`alan-${alan}`}>{alan}</h2>
            <div className="katalog-izgara">
              {liste.filter((p) => p.alan === alan).map((k) => (
                <a key={k.id} className="katalog-kart" href={pratikBaglantisi(meta(k.id))}>
                  <KartLogosu id={k.id} />
                  <span className="katalog-govde">
                    <strong>{k.ad}</strong>
                    <span>{k.aciklama}</span>
                    <span className="katalog-sayilar">
                      {k.unite} {meta(k.id).uniteAdi}{k.soru ? ` · ${k.soru} soru` : ""}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
