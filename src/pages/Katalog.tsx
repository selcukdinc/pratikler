// Çatı sitesi (pratikler.selcukdinc.dev): sitenin ne olduğunu ve kime ne
// kazandırdığını anlatan açılış, kitlelere göre faydalar, yayındaki pratiklerin
// kataloğu ve giriş yapmış kişinin her pratikteki ilerlemesi. Hesap bütün pratiklerde ortaktır.

import { useEffect, useState } from "react";
import type { KatalogPratik, PratikIlerlemesi } from "../../shared/api";
import { KADEMELER, PRATIKLER, kademeBul, kademeninPratikleri } from "../../icerik/index";
import { api } from "../lib/api";
import { pratikBaglantisi } from "../lib/pratik";
import { href, tabanaEkle } from "../lib/router";
import { useOturum } from "../lib/oturum";
import { KartIskeleti } from "../components/Iskelet";
import { Daktilo, hareketAzaltilmis, useDaktilo } from "../components/Daktilo";
import { KITLELER, Vitrin } from "../components/Vitrin";
import "@fontsource-variable/literata";
import "../cati.css";
import { BAGIMSIZLIK_BASLIK, BAGIMSIZLIK_KISA, BAGIMSIZLIK_METNI } from "../lib/bagimsizlik";

// Pratiğin logosu; logosu yoksa adın baş harfi
function KartLogosu({ id }: { id: string }) {
  const p = PRATIKLER.find((x) => x.id === id)!;
  return p.logo
    ? <img className="raf-logo" src={p.logo} alt="" width={44} height={44} loading="lazy" />
    : <span className="raf-logo raf-harf" aria-hidden="true">{p.ad.charAt(0)}</span>;
}

const tarih = (ms: number) => new Date(ms).toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
const sayi = (n: number) => n.toLocaleString("tr-TR");

// Açılış: başlık, kime hitap ettiğini yazan daktilo satırı ve sahneler. Sahne ile
// daktilodaki kitle birlikte döner; ziyaretçi bir sekmeye basınca ikisi de durur.
function Acilis({ liste }: { liste: KatalogPratik[] | null }) {
  const [sahne, setSahne] = useState(0);
  const [donuyor, setDonuyor] = useState(() => !hareketAzaltilmis());
  useEffect(() => {
    if (!donuyor) return;
    const t = setTimeout(() => setSahne((s) => (s + 1) % KITLELER.length), KITLELER[sahne]!.sure);
    return () => clearTimeout(t);
  }, [sahne, donuyor]);
  const kim = useDaktilo(KITLELER[sahne]!.kim, { hiz: 42, silmeHizi: 14 });
  const soru = liste?.reduce((a, p) => a + p.soru, 0) ?? 0;

  return (
    <section className="acilis" aria-labelledby="acilis-baslik">
      <div className="acilis-metin">
        <h1 id="acilis-baslik">Dersin sorularını çöz, unuttuğunu tekrar et, sınavını hazırla.</h1>
        <p className="acilis-kim">
          <span className="sr-only">Pratikler; sınava çalışan öğrenciler, sınav kağıdı hazırlayan akademisyenler ve ödev veren öğretmenler için.</span>
          <span aria-hidden="true">Pratikler, </span>
          <Daktilo className="acilis-daktilo" metin={kim.metin} />
          <span aria-hidden="true"> için.</span>
        </p>
        <p className="acilis-giris">
          Üniversite derslerinin notlarından ve kaynak kitaplarından hazırlanmış soru çalışma siteleri. Ücretsiz ve
          reklamsız; hesap açmadan da çözebilirsin.
          {liste && soru > 0 && <> Şu an {liste.length} derste {sayi(soru)} soru var.</>}
        </p>
        <div className="acilis-dugmeler">
          <a className="cati-dugme birincil" href="#pratikler">Pratik seç</a>
          <a className="cati-dugme" href="#akademisyen">Sınav hazırlamak istiyorum</a>
        </div>
        <p className="bagimsizlik">
          <strong>{BAGIMSIZLIK_BASLIK}</strong> {BAGIMSIZLIK_METNI}
        </p>
      </div>
      <Vitrin sahne={sahne} donuyor={donuyor} sec={(i) => { setDonuyor(false); setSahne(i); }} />
    </section>
  );
}

const FAYDALAR = [
  {
    id: "ogrenci",
    kim: "Öğrenciysen",
    oz: "Sınavdan önce ezber değil, soru kalıplarını öğrenirsin.",
    maddeler: [
      "Karma testte üniteleri ve kaynağı seçersin; sorular da şıklar da her seferinde yer değiştirir.",
      "Her cevaptan sonra ders notuna ya da kitaba dayanan kısa bir açıklama görürsün.",
      "Yanlış yaptığın soru ertesi gün Tekrar sayfana düşer, doğru bildikçe 3, 7, 14 ve 30 gün arayla geri gelir.",
      "İlerlemem sayfası hangi kavramda zayıf olduğunu gösterir.",
    ],
    bag: { metin: "Bir pratik seç", adres: "#pratikler" },
  },
  {
    id: "akademisyen",
    kim: "Akademisyensen",
    oz: "Sınav kağıdını sitedeki sorulardan seçerek hazırlarsın.",
    maddeler: [
      "Soruları ünite, kavram ve kaynağa göre seçersin; kağıdı canlı önizlemede yerinde düzenlersin.",
      "A, B, C ve D grupları kurarsın: aynı sorular karışık sırada ya da aynı kavramdan farklı sorular.",
      "Cevap anahtarı kendiliğinden çıkar. Kağıdı Word dosyası olarak indirir ya da PDF basarsın.",
      "Öğrencilerine \"sınav bu sorulardan gelecek\" bağlantısı verirsin; yalnızca o sorularla çalışırlar.",
      "Bağlantı vermediğin sürece öğrencilere sınavın buradan geleceği söylenmez; site dersin hocalarından bağımsızdır.",
    ],
    bag: { metin: "Akademisyen erişimi iste", adres: "/mesajlar" },
    not: "Hesap açtıktan sonra Mesajlarım'dan hangi derslerin sorumlusu olduğunu yazman yeterli; hesabın o dersler için akademisyen olarak işaretlenir.",
  },
  {
    id: "ogretmen",
    kim: "Öğretmen ya da eğitmensen",
    oz: "Derste ve dersler arasında tekrar yaptırırsın.",
    maddeler: [
      "Seçtiğin sorulardan bir soru havuzu bağlantısı açar, ödev ya da tekrar listesi olarak paylaşırsın.",
      "Konu anlatımlarını, Sanal Lab'ı ve tarayıcıda çalışan MatStudio ile VHDL simülatörünü derste yansıtırsın.",
      "Soru önerirsin; incelenen öneri pratiğin soru havuzuna girer.",
      "Kendi dersin için yeni bir pratik istersin: ders notlarını gönder, sorular birlikte hazırlanır.",
    ],
    bag: { metin: "Yöneticiye yaz", adres: "/mesajlar" },
  },
] as const;

function Faydalar() {
  return (
    <section className="faydalar" aria-labelledby="faydalar-baslik">
      <h2 id="faydalar-baslik">Kime ne kazandırır?</h2>
      {FAYDALAR.map((f) => (
        <article key={f.id} id={f.id} className="fayda" aria-labelledby={`${f.id}-baslik`}>
          <header>
            <h3 id={`${f.id}-baslik`}>{f.kim}</h3>
            <p>{f.oz}</p>
          </header>
          <div className="fayda-govde">
            <ul>
              {f.maddeler.map((m) => <li key={m}>{m}</li>)}
            </ul>
            <p className="fayda-bag">
              <a href={f.bag.adres}>{f.bag.metin}</a>
              {"not" in f && <span>{f.not}</span>}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

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
  // Kademe dersleri (6. sınıf Türkçe) rafta tek tek değil, kademe kartıyla görünür
  const raf = (liste ?? []).filter((p) => !meta(p.id).yol);
  const alanlar = [...new Set(raf.map((p) => p.alan))];
  const kademeler = KADEMELER.filter((k) => (liste ?? []).some((p) => meta(p.id).yol?.split("/")[0] === k.id));

  return (
    <div className="katalog">
      {ilerleme.length > 0 && (
        <section className="devam" aria-labelledby="devam">
          <h2 id="devam">Kaldığın yerden devam et</h2>
          <ul className="devam-liste">
            {ilerleme.map((r) => {
              const p = meta(r.id);
              const oran = r.denenen ? Math.round((100 * r.dogru) / r.denenen) : 0;
              return (
                <li key={r.id}>
                  <a href={pratikBaglantisi(p)}>
                    <KartLogosu id={r.id} />
                    <span className="raf-govde">
                      <strong>{p.ad}</strong>
                      <span className="raf-sayilar">{r.denenen} soru denedin, %{oran} doğru. Son çalışma {tarih(r.son)}.</span>
                      {r.bekleyen > 0 && <span className="devam-tekrar">Bugün {r.bekleyen} soru tekrarını bekliyor</span>}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <Acilis liste={liste} />
      <Faydalar />

      <section id="pratikler" className="raf" aria-labelledby="raf-baslik">
        <div className="raf-ust">
          <h2 id="raf-baslik">Pratikler</h2>
          <p>Her pratik kendi adresinde açılır; bir hesap hepsinde geçer ve ilerlemen her birinde ayrı tutulur.</p>
        </div>
        {liste === null ? (
          <KartIskeleti />
        ) : (
          alanlar.map((alan) => (
            <section key={alan} className="raf-alan" aria-labelledby={`alan-${alan}`}>
              <h3 id={`alan-${alan}`}>{alan}</h3>
              <ul className="raf-liste">
                {raf.filter((p) => p.alan === alan).map((k) => (
                  <li key={k.id}>
                    <a href={pratikBaglantisi(meta(k.id))}>
                      <KartLogosu id={k.id} />
                      <span className="raf-govde">
                        <strong>
                          {k.ad}
                          {me?.role === "akademisyen" && me.alanlar?.includes(k.id) && (
                            <span className="alan-etiketi" title="Bu ders senin alanında: sınav hazırlayabilirsin">Alanın</span>
                          )}
                        </strong>
                        <span className="raf-aciklama">{k.aciklama}</span>
                        <span className="raf-sayilar">
                          {k.unite} {meta(k.id).uniteAdi}{k.soru ? `, ${sayi(k.soru)} soru` : ""}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
        {kademeler.length > 0 && (
          <section className="raf-alan" aria-labelledby="alan-okul">
            <h3 id="alan-okul">Okul</h3>
            <ul className="raf-liste">
              {kademeler.map((k) => {
                const dersler = (liste ?? []).filter((p) => meta(p.id).yol?.split("/")[0] === k.id);
                return (
                  <li key={k.id}>
                    <a href={href({ page: "kademe", id: k.id })}>
                      <span className="raf-logo raf-harf" aria-hidden="true">{k.ad.charAt(0)}</span>
                      <span className="raf-govde">
                        <strong>{k.ad}</strong>
                        <span className="raf-aciklama">{k.aciklama}</span>
                        <span className="raf-sayilar">{dersler.map((d) => d.ad.replace(`${k.ad} `, "")).join(", ")}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </section>

      <footer className="cati-alt">
        <p>
          Pratikler açık kaynaklıdır ve ücretsizdir. Reklam ve takip çerezi kullanılmaz; kaynak kodu GPL lisansıyla
          GitHub'da yayımlanır. {BAGIMSIZLIK_KISA}
        </p>
        <nav aria-label="Alt bağlantılar">
          <a href={href({ page: "gizlilik" })}>Gizlilik</a>
          <a href="https://github.com/selcukdinc/pratikler" target="_blank" rel="noreferrer">Kaynak kodu</a>
          <a href={tabanaEkle("/mesajlar")}>Yöneticiye yaz</a>
        </nav>
      </footer>
    </div>
  );
}

// Bir kademenin (6. sınıf) sayfası: /sinif6. Dersler pratiklerin yolunda açılır.
export function KademeSayfasi({ id }: { id: string }) {
  const k = kademeBul(id)!;
  const [liste, setListe] = useState<KatalogPratik[] | null>(null);
  useEffect(() => {
    const yolda = new Set(kademeninPratikleri(id).map((p) => p.id));
    api.katalog().then(
      (l) => setListe(l.filter((p) => yolda.has(p.id))),
      () => setListe(kademeninPratikleri(id).filter((p) => p.yayinda).map((p) => ({ id: p.id, alt: p.alt, ad: p.ad, alan: p.alan, aciklama: p.aciklama, unite: p.uniteler.length, soru: 0 }))),
    );
  }, [id]);
  const meta = (pid: string) => PRATIKLER.find((p) => p.id === pid)!;
  return (
    <div className="katalog">
      <section className="raf" aria-labelledby="kademe-baslik">
        <div className="raf-ust">
          <h2 id="kademe-baslik">{k.ad}</h2>
          <p>{k.aciklama}</p>
        </div>
        {liste === null ? (
          <KartIskeleti />
        ) : liste.length === 0 ? (
          <p className="empty">Bu sınıfın dersleri hazırlanıyor.</p>
        ) : (
          <ul className="raf-liste">
            {liste.map((d) => (
              <li key={d.id}>
                <a href={pratikBaglantisi(meta(d.id))}>
                  <KartLogosu id={d.id} />
                  <span className="raf-govde">
                    <strong>{d.ad}</strong>
                    <span className="raf-aciklama">{d.aciklama}</span>
                    <span className="raf-sayilar">
                      {d.unite} {meta(d.id).uniteAdi}{d.soru ? `, ${sayi(d.soru)} soru` : ""}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
