// Çatı sitesi (pratikler.selcukdinc.dev): önce iş, sonra anlatım. Açılışta ders araması,
// hemen altında giriş yapmış kişinin kaldığı dersler ve alanlara göre süzülen ders rafı;
// sitenin kime ne kazandırdığı en altta sekmeli olarak anlatılır. Hesap bütün pratiklerde ortaktır.

import { useEffect, useRef, useState } from "react";
import type { KatalogPratik, PratikIlerlemesi } from "../../shared/api";
import { KADEMELER, PRATIKLER, kademeBul, kademeninPratikleri, pratiginKademesi } from "../../icerik/index";
import { api } from "../lib/api";
import { pratikBaglantisi } from "../lib/pratik";
import { href, tabanaEkle } from "../lib/router";
import { useOturum } from "../lib/oturum";
import { KartIskeleti } from "../components/Iskelet";
import { KITLELER, Vitrin } from "../components/Vitrin";
import { dersAra, vurguParcalari } from "../lib/ders-arama";
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

// Sorguyla eşleşen harfleri fosforlu kalemle işaretler
function Vurgulu({ metin, sorgu }: { metin: string; sorgu: string }) {
  return <>{vurguParcalari(metin, sorgu).map((p, i) => (p.vurgu ? <mark key={i}>{p.metin}</mark> : p.metin))}</>;
}

const FAYDALAR = [
  {
    id: "ogrenci",
    oz: "Sınavdan önce ezber değil, soru kalıplarını öğrenirsin.",
    maddeler: [
      "Karma testte üniteleri ve kaynağı seçersin; sorular da şıklar da her seferinde yer değiştirir.",
      "Her cevaptan sonra ders notuna ya da kitaba dayanan kısa bir açıklama görürsün.",
      "Yanlış yaptığın soru ertesi gün Tekrar sayfana düşer; doğru bildikçe 3, 7, 14 ve 30 gün arayla geri gelir.",
      "İlerlemem sayfası hangi kavramda zayıf olduğunu gösterir.",
    ],
    bag: { metin: "Bir ders seç", adres: "#pratikler" },
  },
  {
    id: "akademisyen",
    oz: "Sınav kağıdını sitedeki sorulardan seçerek hazırlarsın.",
    maddeler: [
      "Soruları ünite, kavram ve kaynağa göre seçersin; kağıdı canlı önizlemede yerinde düzenlersin.",
      "A, B, C ve D grupları kurarsın; cevap anahtarı kendiliğinden çıkar.",
      "Kağıdı Word dosyası olarak indirir ya da PDF basarsın.",
      "Öğrencilerine \"sınav bu sorulardan gelecek\" bağlantısı verirsin. Vermediğin sürece öğrencilere sınavın buradan geleceği söylenmez.",
    ],
    bag: { metin: "Akademisyen erişimi iste", adres: "/mesajlar" },
    not: "Hesap açtıktan sonra Mesajlarım'dan hangi derslerin sorumlusu olduğunu yazman yeterli.",
  },
  {
    id: "ogretmen",
    oz: "Derste ve dersler arasında tekrar yaptırırsın.",
    maddeler: [
      "Seçtiğin sorulardan bir soru havuzu bağlantısı açar, ödev ya da tekrar listesi olarak paylaşırsın.",
      "Konu anlatımlarını, Sanal Lab'ı ve tarayıcıda çalışan MatStudio ile VHDL simülatörünü derste yansıtırsın.",
      "Kendi dersin için yeni bir pratik istersin: ders notlarını gönder, sorular birlikte hazırlanır.",
    ],
    bag: { metin: "Yöneticiye yaz", adres: "/mesajlar" },
  },
] as const;

// Nasıl çalışır: kitleye göre sekmeler. Solda o kitlenin kısa gösterimi, sağda kazandırdıkları.
// Sekme yalnızca ziyaretçi seçince değişir; okurken metin kendiliğinden kaymaz.
function NasilCalisir() {
  const [secili, setSecili] = useState(0);
  const f = FAYDALAR[secili]!;
  const okla = (e: React.KeyboardEvent) => {
    const yon = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!yon) return;
    e.preventDefault();
    const yeni = (secili + yon + KITLELER.length) % KITLELER.length;
    setSecili(yeni);
    document.getElementById(`kitle-sekme-${yeni}`)?.focus();
  };
  return (
    <section className="nasil" aria-labelledby="nasil-baslik">
      <h2 id="nasil-baslik">Nasıl çalışır?</h2>
      <div className="nasil-sekmeler" role="tablist" aria-label="Kime göre anlat" onKeyDown={okla}>
        {KITLELER.map((k, i) => (
          <button
            key={k.ad} id={`kitle-sekme-${i}`} type="button" role="tab"
            aria-selected={i === secili} aria-controls="kitle-pano" tabIndex={i === secili ? 0 : -1}
            onClick={() => setSecili(i)}
          >
            {k.ad}
          </button>
        ))}
      </div>
      <div className="nasil-pano" id="kitle-pano" role="tabpanel" aria-labelledby={`kitle-sekme-${secili}`}>
        <Vitrin sahne={secili} />
        <div className="nasil-metin">
          <p className="nasil-oz">{f.oz}</p>
          <ul>
            {f.maddeler.map((m) => <li key={m}>{m}</li>)}
          </ul>
          <p className="nasil-bag">
            <a href={f.bag.adres.startsWith("#") ? f.bag.adres : tabanaEkle(f.bag.adres)}>{f.bag.metin}</a>
            {"not" in f && <span>{f.not}</span>}
          </p>
        </div>
      </div>
    </section>
  );
}

const TUMU = "Tümü";
const OKUL = "Okul";

export function Katalog() {
  const { me } = useOturum();
  const [liste, setListe] = useState<KatalogPratik[] | null>(null);
  const [ilerleme, setIlerleme] = useState<PratikIlerlemesi[]>([]);
  const [sorgu, setSorgu] = useState("");
  const [suzgec, setSuzgec] = useState(TUMU);
  const kutu = useRef<HTMLInputElement>(null);

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
  const hepsi = liste ?? [];
  // Kademe dersleri (6. sınıf Türkçe) rafta tek tek değil, kademe kartıyla görünür;
  // aramada ise her ders kendi adıyla bulunur
  const raf = hepsi.filter((p) => !pratiginKademesi(meta(p.id)));
  const alanlar = [...new Set(raf.map((p) => p.alan))];
  const kademeler = KADEMELER.filter((k) => hepsi.some((p) => pratiginKademesi(meta(p.id))?.id === k.id));
  const suzgecler = [TUMU, ...alanlar, ...(kademeler.length > 0 ? [OKUL] : [])];
  const toplamSoru = hepsi.reduce((a, p) => a + p.soru, 0);

  const araniyor = sorgu.trim() !== "";
  const bulunan = araniyor
    ? dersAra(hepsi.map((p) => ({ ...p, uniteler: meta(p.id).uniteler.map((u) => u.baslik) })), sorgu)
    : [];

  const dersKarti = (k: KatalogPratik, unite?: string) => (
    <li key={k.id}>
      <a href={pratikBaglantisi(meta(k.id))}>
        <KartLogosu id={k.id} />
        <span className="raf-govde">
          <strong>
            <Vurgulu metin={k.ad} sorgu={sorgu} />
            {me?.role === "akademisyen" && me.alanlar?.includes(k.id) && (
              <span className="alan-etiketi" title="Bu ders senin alanında: sınav hazırlayabilirsin">Alanın</span>
            )}
          </strong>
          <span className="raf-aciklama"><Vurgulu metin={k.aciklama} sorgu={sorgu} /></span>
          {unite && <span className="raf-unite">Konu: <Vurgulu metin={unite} sorgu={sorgu} /></span>}
          <span className="raf-sayilar">
            {k.unite} {meta(k.id).uniteAdi}{k.soru ? `, ${sayi(k.soru)} soru` : ""}
          </span>
        </span>
      </a>
    </li>
  );
  const kademeKartlari = (
    <ul className="raf-liste">
      {kademeler.map((k) => {
        const dersler = hepsi.filter((p) => pratiginKademesi(meta(p.id))?.id === k.id);
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
  );
  const dersIste = (
    <p className="raf-iste">
      <strong>Dersin burada yok mu?</strong> Ders notunu ya da kitabını gönder, soruları birlikte hazırlayalım.{" "}
      <a href={tabanaEkle("/mesajlar")}>Ders iste</a>
    </p>
  );

  return (
    <div className="katalog">
      <section className="acilis" aria-labelledby="acilis-baslik">
        <h1 id="acilis-baslik">Bugün hangi dersi çalışacaksın?</h1>
        <form
          className="ara" role="search"
          onSubmit={(e) => {
            e.preventDefault();
            // Enter ilk sonucu açar
            const ilk = bulunan[0];
            if (ilk) location.href = pratikBaglantisi(meta(ilk.ders.id));
          }}
        >
          <label className="sr-only" htmlFor="ders-ara">Ders ara</label>
          <svg className="ara-simge" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            id="ders-ara" ref={kutu} type="search" value={sorgu} autoComplete="off" spellCheck={false} enterKeyHint="search"
            placeholder="Dersin ya da konunun adını yaz"
            onChange={(e) => { setSorgu(e.target.value); setSuzgec(TUMU); }}
            onKeyDown={(e) => { if (e.key === "Escape" && sorgu) { e.preventDefault(); setSorgu(""); } }}
          />
          {sorgu && (
            <button type="button" className="ara-sil" onClick={() => { setSorgu(""); kutu.current?.focus(); }}>
              Temizle
            </button>
          )}
        </form>
        <p className="acilis-giris">
          {liste && toplamSoru > 0 && <>{liste.length} derste {sayi(toplamSoru)} soru. </>}
          Ücretsiz ve reklamsız; hesap açmadan hemen çözmeye başlayabilirsin.
        </p>
      </section>

      {ilerleme.length > 0 && !araniyor && (
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

      <section id="pratikler" className="raf" aria-labelledby="raf-baslik">
        <div className="raf-ust">
          <h2 id="raf-baslik">{araniyor ? "Arama sonuçları" : "Dersler"}</h2>
          {!araniyor && suzgecler.length > 2 && (
            <div className="raf-suzgec" role="group" aria-label="Alana göre göster">
              {suzgecler.map((s) => (
                <button key={s} type="button" aria-pressed={s === suzgec} onClick={() => setSuzgec(s)}>{s}</button>
              ))}
            </div>
          )}
        </div>
        <p className="sr-only" role="status">
          {araniyor && liste ? (bulunan.length > 0 ? `${bulunan.length} ders bulundu` : "Ders bulunamadı") : ""}
        </p>
        {liste === null ? (
          <KartIskeleti />
        ) : araniyor ? (
          bulunan.length > 0 ? (
            <ul className="raf-liste">{bulunan.map((b) => dersKarti(b.ders, b.unite))}</ul>
          ) : (
            <div className="raf-bos">
              <p><strong>"{sorgu.trim()}" için bir ders bulunamadı.</strong> Yazımı kontrol et ya da bütün derslere göz at.</p>
              <button type="button" className="cati-dugme" onClick={() => { setSorgu(""); kutu.current?.focus(); }}>Bütün dersleri göster</button>
            </div>
          )
        ) : (
          <>
            {(suzgec === TUMU ? alanlar : alanlar.filter((a) => a === suzgec)).map((alan) => (
              <section key={alan} className="raf-alan" aria-labelledby={`alan-${alan}`}>
                <h3 id={`alan-${alan}`}>{alan}</h3>
                <ul className="raf-liste">{raf.filter((p) => p.alan === alan).map((k) => dersKarti(k))}</ul>
              </section>
            ))}
            {kademeler.length > 0 && (suzgec === TUMU || suzgec === OKUL) && (
              <section className="raf-alan" aria-labelledby="alan-okul">
                <h3 id="alan-okul">{OKUL}</h3>
                {kademeKartlari}
              </section>
            )}
          </>
        )}
        {liste !== null && dersIste}
      </section>

      <NasilCalisir />

      <div className="bagimsizlik-kap">
        <p className="bagimsizlik">
          <strong>{BAGIMSIZLIK_BASLIK}</strong> {BAGIMSIZLIK_METNI}
        </p>
      </div>

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
