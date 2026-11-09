// /sinavlar/<id>: sınav kağıdı düzenleyici. Solda soru seçimi ve kağıt ayarları,
// sağda kağıdın gerçek boyutunda canlı önizlemesi. Kağıttaki başlık, soru metni ve
// şıklar tıklanınca yerinde düzenlenir; değişiklikler 1,5 sn sonra sunucuya yazılır
// (başka cihazdan aynı yerden devam edilir). "PDF indir" kağıdı tarayıcının yazdırma
// motoruyla basar: önizlemede ne görünüyorsa kağıtta o çıkar.

import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { api } from "../lib/api";
import { useOturum } from "../lib/oturum";
import { PRATIK, uniteYazi } from "../lib/pratik";
import { href, tabanaEkle } from "../lib/router";
import { havuzBaglantisi } from "../lib/havuz";
import { Markdown } from "../components/Markdown";
import { FormHatasi } from "../components/Form";
import { Iskelet } from "../components/Iskelet";
import { sinavYetkisi } from "../lib/yetki";
import {
  BASARI_ESIGI, BOS_SUZGEC, basariOrani, etkinSayisi, rastgeleSec, sekilliMi, sirala, suz, uniteyiDegistir,
  type Basari, type Kullanim, type Secim, type Siralama, type Suzgec, type Var,
} from "../lib/soru-secimi";
import {
  GRUP_ADLARI, SIK_HARFLERI, cevapYazisi, grupKagidi, kagitMm, olcuAnahtari, sayfala, sigdir, SIGDIRMA_DENEME, SINAV_OGE_EN_COK, toplamPuan, varsayilanGruplar,
  type BaslikStili, type GrupAyari, type GrupOgesi, type GrupSorusu, type HavuzOzeti, type SinavAyari, type SinavBelgesi, type SinavOgesi, type SinavSorusu,
} from "../../shared/sinav";

// CSS'te 1 mm = 96 / 25.4 px
const PX_MM = 96 / 25.4;
const SUTUN_ARASI_MM = 8;
const OGE_ARASI_MM = 4;
// Sayfa numarası satırı (yükseklik + üst boşluk), styles.css .kagit-alt ile aynı
const ALT_BILGI_MM = 8;
// Ölçüm ile tarayıcının basarken yaptığı yuvarlama farkına karşı sütunda bırakılan pay
const GUVENLIK_MM = 1;

const TUR_ADI: Record<string, string> = { mcq: "Çoktan seçmeli", tf: "Doğru / Yanlış", fill: "Boşluk doldurma", num: "Sayısal", yaz: "Yazılı" };
const yeniKimlik = () => Math.random().toString(36).slice(2, 10);
const duzMetin = (s: string) => s.replace(/\[\[[^\]]+\]\]/g, "[şekil]").replace(/[$*`_]/g, "").replace(/\s+/g, " ").trim();
const tarihYazi = (t: string) => (t ? new Date(`${t}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "");

// ---- Yerinde düzenlenen metin ----
// Görünürken biçimli (formül, şekil) çizilir; tıklanınca düz metin kutusuna döner.
function Duzenlenir({ deger, onDegis, markdown = true, cok = true, bos = "Yazmak için tıkla", sinif }: {
  deger: string; onDegis?: (s: string) => void; markdown?: boolean; cok?: boolean; bos?: string; sinif?: string;
}) {
  const [acik, setAcik] = useState(false);
  const [taslak, setTaslak] = useState(deger);
  const kutu = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const k = kutu.current;
    if (!k) return;
    k.style.height = "auto";
    k.style.height = `${k.scrollHeight}px`;
  }, [acik, taslak]);
  if (!onDegis) return <div className={sinif}>{markdown ? <Markdown text={deger} /> : deger}</div>;
  if (acik) {
    return (
      <textarea
        ref={kutu}
        className={`kagit-duzenle ${sinif ?? ""}`}
        value={taslak}
        autoFocus
        rows={1}
        onChange={(e) => setTaslak(cok ? e.target.value : e.target.value.replace(/\n/g, " "))}
        onBlur={() => {
          setAcik(false);
          if (taslak !== deger) onDegis(taslak);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setTaslak(deger);
            setAcik(false);
          } else if (e.key === "Enter" && !cok) e.currentTarget.blur();
        }}
      />
    );
  }
  return (
    <div
      className={`kagit-tikla ${sinif ?? ""}${deger ? "" : " kagit-bos"}`}
      role="button"
      tabIndex={0}
      title="Düzenlemek için tıkla"
      onClick={() => {
        setTaslak(deger);
        setAcik(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setTaslak(deger);
          setAcik(true);
        }
      }}
    >
      {deger ? (markdown ? <Markdown text={deger} /> : deger) : <span className="kagit-ipucu">{bos}</span>}
    </div>
  );
}

// ---- Kağıttaki bir soru ----
type Degistir = (id: string, f: (o: SinavOgesi) => SinavOgesi) => void;

function SoruBlogu({ s, no, ayar, degistir, araclar }: {
  s: GrupSorusu; no: number; ayar: SinavAyari; degistir?: Degistir; araclar?: ReactNode;
}) {
  const q = s.soru;
  // Yalnızca kağıttaki (A grubu) soru yerinde düzenlenir
  const d = s.duzenli ? degistir : undefined;
  const metniDegistir = d && ((m: string) => d(s.ogeId, (x) => ({ ...x, metin: m }) as SinavOgesi));
  // Şıklar karışık görünür ama kağıtta asıl sırasıyla saklanır
  const sikDegistir = d && ((i: number, m: string) => d(s.ogeId, (x) => {
    const asil: string[] = [];
    s.sira.forEach((k, j) => (asil[k] = j === i ? m : s.siklar[j]!));
    return { ...x, siklar: asil } as SinavOgesi;
  }));
  return (
    <div className="kagit-soru">
      {araclar}
      <div className="kagit-soru-govde">
        <span className="kagit-no">{no}.</span>
        <div className="kagit-soru-metin">
          {ayar.puanGoster && s.puan ? <span className="kagit-puan">({s.puan} puan)</span> : null}
          {q.type === "tf" && <span className="kagit-dy">(&nbsp;&nbsp;&nbsp;&nbsp;) </span>}
          <Duzenlenir deger={s.metin} onDegis={metniDegistir} />
        </div>
      </div>
      {s.siklar.length > 0 && (
        <ol className="kagit-siklar">
          {s.siklar.map((m, i) => (
            <li key={i}>
              <span className="kagit-harf">{SIK_HARFLERI[i]})</span>
              <Duzenlenir deger={m} onDegis={sikDegistir && ((x) => sikDegistir(i, x))} />
            </li>
          ))}
        </ol>
      )}
      {(q.type === "yaz" || q.type === "num") && <div className={`kagit-cevap-yeri ${q.type === "yaz" ? "uzun" : ""}`} aria-hidden="true" />}
    </div>
  );
}

function MetinBlogu({ o, degistir, araclar }: { o: Extract<GrupOgesi, { tur: "metin" }>; degistir?: Degistir; araclar?: ReactNode }) {
  return (
    <div className="kagit-ortak">
      {araclar}
      <Duzenlenir deger={o.metin} onDegis={degistir && ((s) => degistir(o.ogeId, (x) => ({ ...x, metin: s }) as SinavOgesi))} bos="Ortak metin ya da yönerge" />
    </div>
  );
}

// ---- Kağıt başlığı (ilk sayfa) ----
function Baslik({ ayar, toplam, grup, ayarDegistir }: { ayar: SinavAyari; toplam: number; grup?: string; ayarDegistir?: (a: Partial<SinavAyari>) => void }) {
  const alan = (k: "universite" | "fakulte" | "ders" | "sinavAdi", bos: string) => (
    <Duzenlenir deger={ayar[k]} markdown={false} cok={false} bos={bos} onDegis={ayarDegistir && ((s) => ayarDegistir({ [k]: s }))} />
  );
  const bilgi = [ayar.tarih && `Tarih: ${tarihYazi(ayar.tarih)}`, ayar.sure > 0 && `Süre: ${ayar.sure} dakika`, ayar.puanGoster && toplam > 0 && `Toplam: ${toplam} puan`].filter(Boolean);
  const kimlik = (ayar.adSoyad || ayar.numara || ayar.imza) && (
    <div className="kagit-kimlik">
      {ayar.adSoyad && <span>Adı Soyadı: <i /></span>}
      {ayar.numara && <span>Numarası: <i /></span>}
      {ayar.imza && <span>İmza: <i /></span>}
    </div>
  );
  const yonerge = (ayar.yonerge || ayarDegistir) && (
    <div className="kagit-yonerge">
      <Duzenlenir deger={ayar.yonerge} bos="Yönerge (isteğe bağlı)" onDegis={ayarDegistir && ((s) => ayarDegistir({ yonerge: s }))} />
    </div>
  );
  // Sade: çerçevesiz, üç sıkışık satır. Boş alanlar düzenlerken ipucuyla görünür, basılmaz.
  if (ayar.baslik === "sade") {
    return (
      <header className="kagit-baslik kagit-baslik-sade">
        <div className="sade-satir sade-ust">
          <span className="sade-kurum">{alan("universite", "Üniversite")}<span className="sade-ayrac" aria-hidden="true">{" · "}</span>{alan("fakulte", "Fakülte / bölüm")}</span>
          {bilgi.length > 0 && <span className="sade-bilgi">{bilgi.join("   ·   ")}</span>}
        </div>
        <div className="sade-satir sade-ad">
          <span className="sade-ders">{alan("ders", "Ders adı")}<span className="sade-ayrac" aria-hidden="true">{" — "}</span>{alan("sinavAdi", "Sınav: ör. 2026-2027 Güz Vize")}</span>
          {grup && <span className="sade-grup" aria-label={`${grup} grubu`}>Grup {grup}</span>}
        </div>
        {kimlik}
        {yonerge}
      </header>
    );
  }
  return (
    <header className="kagit-baslik">
      {grup && <div className="kagit-grup" aria-label={`${grup} grubu`}><small>GRUP</small>{grup}</div>}
      <div className="kagit-baslik-ust">{alan("universite", "Üniversite")}{alan("fakulte", "Fakülte / bölüm")}</div>
      <div className="kagit-baslik-ad">{alan("ders", "Ders adı")}{alan("sinavAdi", "Sınav: ör. 2026-2027 Güz Vize")}</div>
      {bilgi.length > 0 && <div className="kagit-bilgi">{bilgi.join("   ·   ")}</div>}
      {kimlik}
      {yonerge}
    </header>
  );
}

// ---- Kağıt: ölçüm, sayfalama, çizim ----

// Kağıdın iç ölçüleri (mm) ve sayfalama ayarları (px)
function geometri(ayar: SinavAyari) {
  const mm = kagitMm(ayar);
  const icEn = mm.en - 2 * ayar.kenar;
  const sutunEn = (icEn - (ayar.sutun - 1) * SUTUN_ARASI_MM) / ayar.sutun;
  const icBoy = mm.boy - 2 * ayar.kenar - (ayar.sayfaNo ? ALT_BILGI_MM : 0) - GUVENLIK_MM;
  return { mm, icEn, sutunEn, sutunYuksekligi: icBoy * PX_MM, aralik: OGE_ARASI_MM * PX_MM };
}

// Ölçülen yükseklikler (px). Başlığın iki hali ölçülür: A grubunun düzenlenebilir hali
// (boş alanlar ipucuyla yer kaplar) ve basılan düz hali.
interface Olcu {
  baslik: { duzenli: number; duz: number };
  ogeler: Map<string, number>;
}
type BaslikTuru = keyof Olcu["baslik"];

// Öğelerin sayfa düzeni; ölçülmemiş öğe varsa null
function duzenHesapla(ogeler: GrupOgesi[], olcu: Olcu, ayar: SinavAyari, baslik: BaslikTuru) {
  const g = geometri(ayar);
  const l: { id: string; yukseklik: number }[] = [];
  for (const o of ogeler) {
    const y = olcu.ogeler.get(olcuAnahtari(o));
    if (y === undefined) return null;
    l.push({ id: o.id, yukseklik: y });
  }
  return sayfala(l, { sutunYuksekligi: g.sutunYuksekligi, ilkSayfaBaslik: olcu.baslik[baslik] + 4 * PX_MM, sutun: ayar.sutun, aralik: g.aralik });
}

const kagitStili = (ayar: SinavAyari) =>
  ({ fontSize: `${ayar.yazi}pt`, "--sutun-arasi": `${SUTUN_ARASI_MM}mm`, "--oge-arasi": `${OGE_ARASI_MM}mm` }) as CSSProperties;

// Görünmeyen ölçüm alanı: her öğe sütun genişliğinde bir kez çizilip yüksekliği okunur.
// Bütün grupların (ve sığdırma denenirken aday soruların) öğeleri burada ölçülür.
function Olcer({ belge, ogeler, grupVar, onOlcum }: { belge: SinavBelgesi; ogeler: GrupOgesi[]; grupVar: boolean; onOlcum: (o: Olcu) => void }) {
  const { ayar } = belge;
  const g = geometri(ayar);
  const kok = useRef<HTMLDivElement>(null);
  const bildir = useRef(onOlcum);
  bildir.current = onOlcum;
  const bos = () => {};
  useLayoutEffect(() => {
    const k = kok.current;
    if (!k) return;
    const olc = () => {
      const m = new Map<string, number>();
      // offsetHeight tam sayıya yuvarlar; birikince son öğe sütundan taşabiliyordu
      k.querySelectorAll<HTMLElement>("[data-olcu]").forEach((e) => m.set(e.dataset.olcu!, e.getBoundingClientRect().height));
      const b = (t: string) => k.querySelector<HTMLElement>(`[data-baslik="${t}"]`)?.getBoundingClientRect().height ?? 0;
      bildir.current({ baslik: { duzenli: b("duzenli"), duz: b("duz") }, ogeler: m });
    };
    olc();
    // Şekiller ve formül yazı tipleri sonradan yüklenince yükseklik değişir
    const ro = new ResizeObserver(olc);
    ro.observe(k);
    return () => ro.disconnect();
  }, [belge, ogeler, grupVar]);
  const toplam = toplamPuan(belge);
  return (
    <div className="kagit kagit-olcum" ref={kok} style={{ ...kagitStili(ayar), width: `${g.icEn}mm` }} aria-hidden="true">
      <div data-baslik="duzenli"><Baslik ayar={ayar} toplam={toplam} grup={grupVar ? "A" : undefined} ayarDegistir={bos} /></div>
      <div data-baslik="duz"><Baslik ayar={ayar} toplam={toplam} grup={grupVar ? "A" : undefined} /></div>
      <div style={{ width: `${g.sutunEn}mm` }}>
        {ogeler.map((o, i) => (
          <div key={olcuAnahtari(o)} data-olcu={olcuAnahtari(o)}>
            {o.tur === "soru" ? <SoruBlogu s={o} no={i + 1} ayar={ayar} /> : <MetinBlogu o={o} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Kagit({ belge, ogeler, olcu, grup, degistir, ayarDegistir, oge }: {
  belge: SinavBelgesi; ogeler: GrupOgesi[]; olcu: Olcu | null; grup?: string; degistir?: Degistir; ayarDegistir?: (a: Partial<SinavAyari>) => void;
  oge?: (o: GrupOgesi) => ReactNode;
}) {
  const { ayar } = belge;
  const g = geometri(ayar);
  const no = new Map<string, number>();
  ogeler.forEach((o) => o.tur === "soru" && no.set(o.id, no.size + 1));
  const toplam = toplamPuan(belge);
  const duzen = olcu ? duzenHesapla(ogeler, olcu, ayar, ayarDegistir ? "duzenli" : "duz") : null;
  const blok = (o: GrupOgesi) => {
    const a = oge?.(o);
    return o.tur === "soru" ? <SoruBlogu s={o} no={no.get(o.id)!} ayar={ayar} degistir={degistir} araclar={a} /> : <MetinBlogu o={o} degistir={degistir} araclar={a} />;
  };
  const kagitStil = kagitStili(ayar);
  const ogeMap = new Map(ogeler.map((o) => [o.id, o]));

  return (
    <div className="kagit-sayfalar">
      {(duzen?.sayfalar ?? [[[]]]).map((sayfa, si) => (
        <section key={si} className="kagit kagit-sayfa" style={{ ...kagitStil, width: `${g.mm.en}mm`, height: `${g.mm.boy}mm`, padding: `${ayar.kenar}mm` }}>
          {si === 0 && <Baslik ayar={ayar} toplam={toplam} grup={grup} ayarDegistir={ayarDegistir} />}
          <div className={`kagit-sutunlar sutun-${ayar.sutun}`}>
            {Array.from({ length: ayar.sutun }, (_, i) => (
              <div key={i} className="kagit-sutun" style={{ width: `${g.sutunEn}mm` }}>
                {(sayfa[i] ?? []).map((id) => {
                  const o = ogeMap.get(id);
                  return o ? <div key={id} className="kagit-oge">{blok(o)}</div> : null;
                })}
              </div>
            ))}
          </div>
          {ayar.sayfaNo && <footer className="kagit-alt">{si + 1}</footer>}
        </section>
      ))}
    </div>
  );
}

// Bütün grupların cevap anahtarı: tek sayfada, grup başına bir sütun
function CevapAnahtari({ belge, gruplar }: { belge: SinavBelgesi; gruplar: GrupOgesi[][] }) {
  const { ayar } = belge;
  const mm = kagitMm({ ...ayar, yon: "dikey" });
  const sorular = gruplar.map((g) => g.filter((o): o is GrupSorusu => o.tur === "soru"));
  const n = Math.max(0, ...sorular.map((l) => l.length));
  return (
    <div className="kagit-sayfalar">
      <section className="kagit kagit-sayfa kagit-anahtar" style={{ width: `${mm.en}mm`, minHeight: `${mm.boy}mm`, padding: `${ayar.kenar}mm`, fontSize: "11pt" }}>
        <h3>Cevap anahtarı</h3>
        <p>{[ayar.ders, ayar.sinavAdi, belge.ad].filter(Boolean).join(" · ")}</p>
        <table>
          <thead>
            <tr><th>Soru</th>{sorular.map((_, g) => <th key={g}>{sorular.length > 1 ? `${GRUP_ADLARI[g]} grubu` : "Cevap"}</th>)}</tr>
          </thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {sorular.map((l, g) => <td key={g}>{l[i] ? cevapYazisi(l[i]!) : ""}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

// Yazdırma çerçevesinin stili. Sayfa sonu yalnızca sayfaların ARASINA konur (sonuncusundan
// sonra konunca tarayıcı boş bir sayfa daha basıyordu); sayfa kutusu kağıttan bir tık kısa
// tutulur, yuvarlamadan doğan taşma yeni sayfa açamaz. Cevap anahtarı kendi boyunda kalır.
export const YAZDIRMA_STILI = (mm: { en: number; boy: number }) => `@page { size: ${mm.en}mm ${mm.boy}mm; margin: 0 }
html, body { margin: 0; padding: 0; background: #fff; height: auto; overflow: visible }
.kagit-sayfalar { zoom: 1 !important; gap: 0 !important; padding: 0 !important; display: block !important; width: auto !important; min-width: 0 !important }
.kagit-sayfa { box-shadow: none !important; margin: 0 !important; break-after: auto; break-inside: avoid; height: calc(${mm.boy}mm - 0.5mm) !important }
.kagit-anahtar { height: auto !important; min-height: 0 !important; max-height: calc(${mm.boy}mm - 0.5mm) }
.kagit-sayfa + .kagit-sayfa { break-before: page }
.kagit-bos { display: none }`;

// Kağıdı ayrı bir çerçevede yazdırır: yalnızca sayfalar ve sitenin stilleri
function yazdir(kok: HTMLElement | null, ayar: SinavAyari, ad: string) {
  if (!kok) return;
  const cerceve = document.createElement("iframe");
  cerceve.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
  document.body.append(cerceve);
  const d = cerceve.contentDocument!;
  const stiller = [...document.querySelectorAll('style, link[rel="stylesheet"]')].map((e) => e.outerHTML).join("\n");
  const kopya = document.createElement("div");
  kopya.className = "kagit-sayfalar";
  kok.querySelectorAll(".kagit-sayfalar .kagit-sayfa").forEach((e) => kopya.append(e.cloneNode(true)));
  kopya.querySelectorAll(".kagit-arac, .kagit-ipucu").forEach((e) => e.remove());
  const mm = kagitMm(ayar);
  d.open();
  d.write(`<!doctype html><html lang="tr" data-theme="light"><head><meta charset="utf-8"><title>${ad.replace(/</g, "")}</title>${stiller}
<style>${YAZDIRMA_STILI(mm)}</style>
</head><body>${kopya.outerHTML}</body></html>`);
  d.close();
  const bas = () => {
    cerceve.contentWindow!.focus();
    cerceve.contentWindow!.print();
    setTimeout(() => cerceve.remove(), 1000);
  };
  // Stil ve yazı tipleri yüklensin
  void Promise.all([...d.querySelectorAll("link")].map((l) => new Promise((r) => { l.addEventListener("load", r); l.addEventListener("error", r); }))).then(() =>
    (d.fonts?.ready ?? Promise.resolve()).then(() => setTimeout(bas, 200)),
  );
}

// ---- Soru seçici ----
// Sorular ünite ünite listelenir; ünite satırındaki kutu ünitenin görünen sorularının hepsini
// ekler ya da çıkarır. Süzgeçler sınav başına bu tarayıcıda hatırlanır.

const buyukHarfle = (s: string) => s.charAt(0).toLocaleUpperCase("tr-TR") + s.slice(1);
const SUZGEC_ANAHTARI = (id: string) => `sinav-suzgec:${id}`;
function suzgecOku(id: string): Suzgec {
  try {
    const v = localStorage.getItem(SUZGEC_ANAHTARI(id));
    return v ? { ...BOS_SUZGEC, ...(JSON.parse(v) as Partial<Suzgec>) } : BOS_SUZGEC;
  } catch {
    return BOS_SUZGEC;
  }
}

const BASARI_ADI: Record<Exclude<Basari, "">, string> = { kolay: "Kolay (%70 ve üstü)", orta: "Orta", zor: "Zor (%40'ın altı)", veriyok: `Veri az (${BASARI_ESIGI} kişiden az)` };
const SIRALAMA_ADI: Record<Siralama, string> = { unite: "Konu sırası", zorluk: "Zorluk", basari: "Öğrenci başarısı (zordan)", uzunluk: "Uzunluk (kısadan)", rastgele: "Rastgele" };

// Üç durumlu onay kutusu: hiçbiri, bir kısmı, hepsi
function UcluKutu({ durum, onDegis, etiket }: { durum: "yok" | "kismen" | "hepsi"; onDegis: (sec: boolean) => void; etiket: string }) {
  const r = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (r.current) r.current.indeterminate = durum === "kismen";
  }, [durum]);
  return <input ref={r} type="checkbox" checked={durum === "hepsi"} aria-label={etiket} title={etiket} onChange={() => onDegis(durum !== "hepsi")} />;
}

function SoruSecici({ sinavId, sorular, ogeler, ekle, cikar, ogeleriDegistir, ortakMetin }: {
  sinavId: string; sorular: SinavSorusu[]; ogeler: SinavOgesi[];
  ekle: (l: SinavSorusu[]) => void; cikar: (soruIdler: string[]) => void;
  ogeleriDegistir: (f: (l: SinavOgesi[]) => SinavOgesi[]) => void; ortakMetin: (metin: string) => void;
}) {
  const [s, setS] = useState<Suzgec>(() => suzgecOku(sinavId));
  const [suzgecAcik, setSuzgecAcik] = useState(false);
  const [acik, setAcik] = useState<Map<number, boolean>>(new Map());
  const [hedef, setHedef] = useState<Record<number, number>>({});
  const [bilgi, setBilgi] = useState<string | null>(null);
  useEffect(() => {
    try {
      localStorage.setItem(SUZGEC_ANAHTARI(sinavId), JSON.stringify(s));
    } catch {
      // depolama kapalı
    }
  }, [s, sinavId]);
  const degis = (ek: Partial<Suzgec>) => setS((x) => ({ ...x, ...ek }));

  const secili = new Set(ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
  const soruMap = useMemo(() => new Map(sorular.map((q) => [q.id, q])), [sorular]);
  const liste = sirala(suz(sorular, s, secili), s.siralama);
  const etkin = etkinSayisi(s);
  const turler = [...new Set(sorular.map((q) => q.type))];
  const konular = [...new Map(sorular.map((q) => [q.topicId, q.konu ?? q.topicId])).entries()];
  const kavramlar = [...new Set(sorular.flatMap((q) => (q.kavram && (!s.uniteler.length || s.uniteler.includes(q.week)) ? [q.kavram] : [])))];
  const kavramAdi = (k: string) => PRATIK.kavramlar[k]?.ad ?? k;
  const uniteler = PRATIK.uniteler.filter((u) => liste.some((q) => q.week === u.no));
  const durum = (l: SinavSorusu[]) => {
    const n = l.filter((q) => secili.has(q.id)).length;
    return n === 0 ? "yok" : n === l.length ? "hepsi" : "kismen";
  };
  const topluSec = (l: SinavSorusu[], sec: boolean) => (sec ? ekle(l.filter((q) => !secili.has(q.id))) : cikar(l.filter((q) => secili.has(q.id)).map((q) => q.id)));
  const rastgeleEkle = (u: number, n: number) => {
    // Ünite süzgeci burada sayılmaz: hangi üniteden seçileceğini kişi zaten yazdı
    const l = rastgeleSec(suz(sorular, { ...s, uniteler: [], secim: "" }, secili).filter((q) => q.week === u && !secili.has(q.id)), n);
    ekle(l);
    return l.length;
  };
  const uniteAcik = (u: number) => acik.get(u) ?? (etkin > 0 || uniteler.length === 1);
  const seciliSayisi = (u: number) => sorular.filter((q) => q.week === u && secili.has(q.id)).length;

  // Etkin süzgeçlerin çipleri
  const cipler: { ad: string; kaldir: () => void }[] = [
    ...s.uniteler.map((u) => ({ ad: uniteYazi(u), kaldir: () => degis({ uniteler: s.uniteler.filter((x) => x !== u) }) })),
    ...(s.konu ? [{ ad: `Konu: ${konular.find(([k]) => k === s.konu)?.[1] ?? s.konu}`, kaldir: () => degis({ konu: "" }) }] : []),
    ...(s.kavram ? [{ ad: `Kavram: ${kavramAdi(s.kavram)}`, kaldir: () => degis({ kavram: "" }) }] : []),
    ...s.turler.map((t) => ({ ad: TUR_ADI[t] ?? t, kaldir: () => degis({ turler: s.turler.filter((x) => x !== t) }) })),
    ...(s.zorMin > 1 || s.zorMax < 5 ? [{ ad: `Zorluk ${s.zorMin}-${s.zorMax}`, kaldir: () => degis({ zorMin: 1, zorMax: 5 }) }] : []),
    ...(s.etiket ? [{ ad: PRATIK.etiketler.find((e) => e.id === s.etiket)?.ad ?? s.etiket, kaldir: () => degis({ etiket: "" }) }] : []),
    ...(s.sekil ? [{ ad: s.sekil === "var" ? "Şekilli" : "Şekilsiz", kaldir: () => degis({ sekil: "" }) }] : []),
    ...(s.formul ? [{ ad: s.formul === "var" ? "Formüllü" : "Formülsüz", kaldir: () => degis({ formul: "" }) }] : []),
    ...(s.secim ? [{ ad: s.secim === "secili" ? "Kağıttakiler" : "Kağıtta olmayanlar", kaldir: () => degis({ secim: "" }) }] : []),
    ...(s.kullanim ? [{ ad: s.kullanim === "kullanilmis" ? "Önceki sınavlarımda var" : "Önceki sınavlarımda yok", kaldir: () => degis({ kullanim: "" }) }] : []),
    ...(s.basari ? [{ ad: BASARI_ADI[s.basari], kaldir: () => degis({ basari: "" }) }] : []),
  ];

  const satir = (q: SinavSorusu) => {
    const var_ = secili.has(q.id);
    const oran = basariOrani(q);
    const baska = (q.kullanim ?? 0) - (var_ ? 1 : 0);
    return (
      <li key={q.id} className={var_ ? "secili" : undefined}>
        <button className="soru-secici-dugme" onClick={() => (var_ ? cikar([q.id]) : ekle([q]))} aria-pressed={var_} title={var_ ? "Kağıttan çıkar" : "Kağıda ekle"}>
          {var_ ? "✓" : "+"}
        </button>
        <div>
          <span className="soru-secici-meta">
            {q.kavram ? kavramAdi(q.kavram) : q.konu} · {TUR_ADI[q.type] ?? q.type} · zorluk {q.difficulty}
            {oran !== null && <> · <span title={`${q.basari!.kisi} kişinin ilk denemesi`}>%{Math.round(oran * 100)} doğru</span></>}
            {sekilliMi(q) && " · şekilli"}
            {baska > 0 && <span className="tag" title="Önceki sınavlarında kullandın">{baska} sınavda</span>}
          </span>
          <span className="soru-secici-metin">{duzMetin(q.prompt).slice(0, 220)}</span>
        </div>
      </li>
    );
  };

  return (
    <div className="soru-secici">
      <div className="soru-secici-filtre">
        <input type="search" value={s.ara} onChange={(e) => degis({ ara: e.target.value })} placeholder='Soruda, şıklarda ara ("tam ifade")' aria-label="Soru ara" />
        <button type="button" onClick={() => setSuzgecAcik(!suzgecAcik)} aria-expanded={suzgecAcik} className={etkin > 0 ? "etkin" : undefined}>
          Süzgeçler{etkin > 0 ? ` (${etkin})` : ""}
        </button>
        <select value={s.siralama} onChange={(e) => degis({ siralama: e.target.value as Siralama })} aria-label="Sıralama">
          {(Object.keys(SIRALAMA_ADI) as Siralama[]).map((k) => <option key={k} value={k}>{SIRALAMA_ADI[k]}</option>)}
        </select>
      </div>
      {suzgecAcik && (
        <div className="soru-secici-suzgec">
          <fieldset className="suzgec-tam">
            <legend>{buyukHarfle(PRATIK.uniteAdi)}</legend>
            <div className="suzgec-cipler">
              {PRATIK.uniteler.map((u) => (
                <label key={u.no} className={s.uniteler.includes(u.no) ? "secik" : undefined} title={u.baslik}>
                  <input type="checkbox" checked={s.uniteler.includes(u.no)}
                    onChange={(e) => degis({ uniteler: e.target.checked ? [...s.uniteler, u.no].sort((a, b) => a - b) : s.uniteler.filter((x) => x !== u.no), kavram: "" })} />
                  {u.no}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="suzgec-tam">
            <legend>Soru türü</legend>
            <div className="suzgec-cipler">
              {turler.map((t) => (
                <label key={t} className={s.turler.includes(t) ? "secik" : undefined}>
                  <input type="checkbox" checked={s.turler.includes(t)} onChange={(e) => degis({ turler: e.target.checked ? [...s.turler, t] : s.turler.filter((x) => x !== t) })} />
                  {TUR_ADI[t] ?? t}
                </label>
              ))}
            </div>
          </fieldset>
          {konular.length > 1 && (
            <label>Konu
              <select value={s.konu} onChange={(e) => degis({ konu: e.target.value })}>
                <option value="">Hepsi</option>
                {konular.map(([k, ad]) => <option key={k} value={k}>{ad}</option>)}
              </select>
            </label>
          )}
          {kavramlar.length > 0 && (
            <label>Kavram
              <select value={s.kavram} onChange={(e) => degis({ kavram: e.target.value })}>
                <option value="">Hepsi</option>
                {kavramlar.map((k) => <option key={k} value={k}>{kavramAdi(k)}</option>)}
              </select>
            </label>
          )}
          <label>Zorluk
            <span className="ayar-satir-ic">
              <select value={s.zorMin} onChange={(e) => degis({ zorMin: Number(e.target.value), zorMax: Math.max(Number(e.target.value), s.zorMax) })} aria-label="En az zorluk">
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              –
              <select value={s.zorMax} onChange={(e) => degis({ zorMax: Number(e.target.value), zorMin: Math.min(Number(e.target.value), s.zorMin) })} aria-label="En çok zorluk">
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </span>
          </label>
          {PRATIK.etiketler.length > 1 && (
            <label>Kaynak
              <select value={s.etiket} onChange={(e) => degis({ etiket: e.target.value })}>
                <option value="">Hepsi</option>
                {PRATIK.etiketler.map((e) => <option key={e.id} value={e.id}>{e.ad}</option>)}
              </select>
            </label>
          )}
          <label>Öğrenci başarısı
            <select value={s.basari} onChange={(e) => degis({ basari: e.target.value as Basari })}>
              <option value="">Hepsi</option>
              {(Object.keys(BASARI_ADI) as Exclude<Basari, "">[]).map((k) => <option key={k} value={k}>{BASARI_ADI[k]}</option>)}
            </select>
          </label>
          <label>Önceki sınavlarım
            <select value={s.kullanim} onChange={(e) => degis({ kullanim: e.target.value as Kullanim })}>
              <option value="">Hepsi</option>
              <option value="kullanilmamis">Hiç kullanmadıklarım</option>
              <option value="kullanilmis">Kullandıklarım</option>
            </select>
          </label>
          <label>Kağıtta
            <select value={s.secim} onChange={(e) => degis({ secim: e.target.value as Secim })}>
              <option value="">Hepsi</option>
              <option value="secilmemis">Olmayanlar</option>
              <option value="secili">Olanlar</option>
            </select>
          </label>
          <label>Şekil
            <select value={s.sekil} onChange={(e) => degis({ sekil: e.target.value as Var })}>
              <option value="">Hepsi</option><option value="var">Şekilli</option><option value="yok">Şekilsiz</option>
            </select>
          </label>
          <label>Formül
            <select value={s.formul} onChange={(e) => degis({ formul: e.target.value as Var })}>
              <option value="">Hepsi</option><option value="var">Formüllü</option><option value="yok">Formülsüz</option>
            </select>
          </label>
          <button type="button" className="suzgec-tam" onClick={() => setS({ ...BOS_SUZGEC, siralama: s.siralama })} disabled={etkin === 0}>Süzgeçleri temizle</button>
        </div>
      )}
      {cipler.length > 0 && (
        <div className="suzgec-etkin">
          {cipler.map((c) => <button key={c.ad} type="button" className="suzgec-cip" onClick={c.kaldir} title="Süzgeci kaldır">{c.ad} ✕</button>)}
        </div>
      )}
      <div className="soru-secici-ozet">
        <span>{liste.length} soru görünüyor · {secili.size} seçili</span>
        <span className="soru-secici-toplu">
          <button type="button" onClick={() => topluSec(liste, true)} disabled={liste.every((q) => secili.has(q.id))}>Görünenlerin tümünü seç</button>
          <button type="button" onClick={() => topluSec(liste, false)} disabled={!liste.some((q) => secili.has(q.id))}>Tümünü kaldır</button>
          <button type="button" onClick={() => confirm("Kağıttaki bütün sorular ve ortak metinler çıkarılsın mı?") && ogeleriDegistir(() => [])} disabled={ogeler.length === 0}>Kağıdı temizle</button>
        </span>
      </div>
      <details className="unite-hedef">
        <summary>{buyukHarfle(PRATIK.uniteAdi)} başına rastgele soru seç</summary>
        <p className="soluk">Her {PRATIK.uniteAdi.toLocaleLowerCase("tr-TR")}den kaç soru istediğini yaz. Kağıtta olmayan ve süzgeçlere (tür, zorluk, kaynak...) uyan sorulardan, kavramlara dağıtılarak seçilir.</p>
        <div className="unite-hedef-liste">
          {PRATIK.uniteler.map((u) => (
            <label key={u.no} title={u.baslik}>
              <span>{uniteYazi(u.no)}</span>
              <input type="number" min={0} max={100} value={hedef[u.no] ?? ""} placeholder="0"
                onChange={(e) => setHedef({ ...hedef, [u.no]: Math.max(0, Math.min(100, Number(e.target.value) || 0)) })} />
            </label>
          ))}
        </div>
        <button type="button" className="primary" disabled={!Object.values(hedef).some((n) => n > 0)} onClick={() => {
          let toplam = 0;
          for (const [u, n] of Object.entries(hedef)) if (n > 0) toplam += rastgeleEkle(Number(u), n);
          setBilgi(toplam ? `${toplam} soru eklendi.` : "Süzgece uyan ve kağıtta olmayan soru kalmadı.");
          setHedef({});
        }}>Seç ve kağıda ekle</button>
      </details>
      {bilgi && <p className="soru-secici-bilgi" role="status" onClick={() => setBilgi(null)}>{bilgi}</p>}
      <ul className="soru-secici-liste">
        {uniteler.map((u) => {
          const ul = liste.filter((q) => q.week === u.no);
          const ac = uniteAcik(u.no);
          // Konu sırasında kavram başlıklarıyla, başka sıralamada düz liste
          const parcalar = s.siralama === "unite"
            ? [...new Map(ul.map((q) => [q.kavram ?? q.konu ?? "", ul.filter((x) => (x.kavram ?? x.konu ?? "") === (q.kavram ?? q.konu ?? ""))])).entries()]
            : [["", ul] as const];
          return (
            <li key={u.no} className="unite-grubu">
              <div className="unite-satiri">
                <button type="button" className="unite-ac" aria-expanded={ac} onClick={() => setAcik(new Map(acik).set(u.no, !ac))} aria-label={ac ? "Kapat" : "Aç"}>{ac ? "▾" : "▸"}</button>
                <UcluKutu durum={durum(ul)} onDegis={(sec) => topluSec(ul, sec)} etiket={`${uniteYazi(u.no)}: görünen soruların hepsini seç ya da kaldır`} />
                <button type="button" className="unite-ad" onClick={() => setAcik(new Map(acik).set(u.no, !ac))}>
                  <strong>{uniteYazi(u.no)}</strong> {u.baslik}
                  <span className="soluk"> {ul.length} soru · {seciliSayisi(u.no)} seçili</span>
                </button>
                <details className="unite-menu">
                  <summary aria-label={`${uniteYazi(u.no)} işlemleri`} title="İşlemler">⋯</summary>
                  <div className="unite-menu-liste" onClick={(e) => { (e.currentTarget.parentElement as HTMLDetailsElement).open = false; }}>
                    <button type="button" onClick={() => topluSec(ul, true)}>Görünen sorularını ekle</button>
                    <button type="button" onClick={() => cikar(sorular.filter((q) => q.week === u.no && secili.has(q.id)).map((q) => q.id))} disabled={seciliSayisi(u.no) === 0}>Bütün sorularını kağıttan çıkar</button>
                    <button type="button" onClick={() => setBilgi(`${uniteYazi(u.no)}: ${rastgeleEkle(u.no, 5)} soru eklendi.`)}>Rastgele 5 soru ekle</button>
                    <button type="button" disabled={seciliSayisi(u.no) === 0} onClick={() => {
                      const r = uniteyiDegistir(ogeler, soruMap, u.no);
                      if (r.degisen) ogeleriDegistir(() => r.ogeler);
                      setBilgi(r.degisen
                        ? `${uniteYazi(u.no)}: ${r.degisen} soru aynı kavramdan başka sorularla değişti.`
                        : `${uniteYazi(u.no)}: yerine konacak başka soru bulunamadı.`);
                    }}>Kağıttaki sorularını değiştir</button>
                    <button type="button" onClick={() => ortakMetin(`**${uniteYazi(u.no)}: ${u.baslik}**`)}>Kağıda başlığını ekle</button>
                  </div>
                </details>
              </div>
              {ac && (
                <ul>
                  {parcalar.map(([k, l]) => (
                    <Fragment key={k}>
                      {k && parcalar.length > 1 && (
                        <li className="kavram-satiri">
                          <UcluKutu durum={durum([...l])} onDegis={(sec) => topluSec([...l], sec)} etiket={`${kavramAdi(k)}: hepsini seç ya da kaldır`} />
                          {kavramAdi(k)}
                        </li>
                      )}
                      {l.map(satir)}
                    </Fragment>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
        {liste.length === 0 && <li className="soluk">Süzgece uyan soru yok.</li>}
      </ul>
    </div>
  );
}

// ---- Kağıt ayarları ----
function KagitAyarlari({ ayar, degistir, puanDagit }: { ayar: SinavAyari; degistir: (a: Partial<SinavAyari>) => void; puanDagit: () => void }) {
  const sayi = (k: "yazi" | "kenar" | "sure", min: number, max: number, etiket: string, birim: string) => (
    <label>
      {etiket}
      <span className="ayar-satir-ic">
        <input type="number" min={min} max={max} value={ayar[k]} onChange={(e) => {
          const v = Math.round(Number(e.target.value));
          if (v >= min && v <= max) degistir({ [k]: v });
        }} /> {birim}
      </span>
    </label>
  );
  const kutu = (k: "adSoyad" | "numara" | "imza" | "puanGoster" | "sayfaNo", etiket: string) => (
    <label className="ayar-kutu"><input type="checkbox" checked={!!ayar[k]} onChange={(e) => degistir({ [k]: e.target.checked })} /> {etiket}</label>
  );
  return (
    <div className="kagit-ayarlari">
      <fieldset>
        <legend>Kağıt</legend>
        <label>Boyut
          <select value={ayar.boyut} onChange={(e) => degistir({ boyut: e.target.value as SinavAyari["boyut"] })}>
            <option value="A4">A4</option><option value="A3">A3</option>
          </select>
        </label>
        <label>Yön
          <select value={ayar.yon} onChange={(e) => degistir({ yon: e.target.value as SinavAyari["yon"] })}>
            <option value="dikey">Dikey</option><option value="yatay">Yatay</option>
          </select>
        </label>
        <label>Düzen
          <select value={ayar.sutun} onChange={(e) => degistir({ sutun: Number(e.target.value) as SinavAyari["sutun"] })}>
            <option value={1}>Tek sütun</option><option value={2}>İki sütun</option><option value={3}>Üç sütun</option>
          </select>
        </label>
        {sayi("yazi", 8, 16, "Yazı boyutu", "punto")}
        {sayi("kenar", 5, 30, "Kenar boşluğu", "mm")}
        <label>Şık sayısı
          <select value={ayar.sikSayisi} onChange={(e) => degistir({ sikSayisi: Number(e.target.value) as 4 | 5 })}>
            <option value={4}>4 şık (A-D)</option><option value={5}>5 şık (A-E)</option>
          </select>
        </label>
        {kutu("sayfaNo", "Sayfa numarası (altta ortada)")}
        <p className="soluk ayar-aciklama">
          Kağıtta yalnızca önizlemede gördüklerin basılır; PDF ve Word aynıdır. PDF'te tarih ya da adres yazıları
          çıkıyorsa yazdırma penceresinde <i>Üstbilgi ve altbilgi</i> kutusunu kapat.
        </p>
      </fieldset>
      <fieldset>
        <legend>Başlık</legend>
        <label>Başlık stili
          <select value={ayar.baslik ?? "kutulu"} onChange={(e) => degistir({ baslik: e.target.value as BaslikStili })}>
            <option value="sade">Sade: çerçevesiz, üç satır</option>
            <option value="kutulu">Kutulu: çerçeveli, ortalanmış</option>
          </select>
        </label>
        {(["universite", "fakulte", "ders", "sinavAdi"] as const).map((k) => (
          <label key={k}>{{ universite: "Üniversite", fakulte: "Fakülte / bölüm", ders: "Ders", sinavAdi: "Sınav" }[k]}
            <input value={ayar[k]} maxLength={200} onChange={(e) => degistir({ [k]: e.target.value })} />
          </label>
        ))}
        <label>Tarih<input type="date" value={ayar.tarih} onChange={(e) => degistir({ tarih: e.target.value })} /></label>
        {sayi("sure", 0, 600, "Süre", "dakika (0: yazma)")}
        {kutu("adSoyad", "Adı Soyadı alanı")}
        {kutu("numara", "Numara alanı")}
        {kutu("imza", "İmza alanı")}
        {kutu("puanGoster", "Puanları göster")}
        <button type="button" onClick={puanDagit}>Puanları eşit dağıt (100)</button>
      </fieldset>
    </div>
  );
}

// ---- Grup ayarları ----
function GrupAyarlari({ ayar, degistir, gruplar }: { ayar: GrupAyari; degistir: (g: Partial<GrupAyari>) => void; gruplar: GrupOgesi[][] }) {
  // Benzer kipte yerine başka soru bulunamayan sorular (B grubuna bakılır)
  const ayni = ayar.kip === "benzer" && gruplar[1] ? gruplar[1].filter((o) => o.tur === "soru" && o.duzenli).length : 0;
  return (
    <>
      <fieldset>
        <legend>Gruplar</legend>
        <label>Grup sayısı
          <select value={ayar.sayi} onChange={(e) => degistir({ sayi: Number(e.target.value) as GrupAyari["sayi"] })}>
            <option value={1}>Tek grup</option>
            <option value={2}>A ve B</option>
            <option value={3}>A, B ve C</option>
            <option value={4}>A, B, C ve D</option>
          </select>
        </label>
        <label className="ayar-kutu"><input type="radio" name="grup-kip" checked={ayar.kip === "karisik"} onChange={() => degistir({ kip: "karisik" })} />
          Aynı sorular, karışık
        </label>
        <p className="soluk ayar-aciklama">Her grupta aynı sorular var; soruların sırası ve şıkların yeri değişir.</p>
        <label className="ayar-kutu"><input type="radio" name="grup-kip" checked={ayar.kip === "benzer"} onChange={() => degistir({ kip: "benzer" })} />
          Benzer ama farklı sorular
        </label>
        <p className="soluk ayar-aciklama">B, C ve D gruplarında her sorunun yerine aynı kavramdan başka bir soru gelir, sonra karıştırılır.</p>
        {ayni > 0 && <p className="ayar-uyari">{ayni} sorunun benzeri yok; bu sorular gruplarda aynı kalıp yalnızca karıştırılıyor.</p>}
        <label className="ayar-kutu"><input type="checkbox" checked={ayar.sikKaristir !== false} onChange={(e) => degistir({ sikKaristir: e.target.checked })} />
          Şıkları A grubunda da karıştır
        </label>
        <p className="soluk ayar-aciklama">Sitedeki sorularda doğru cevap çoğu zaman aynı harflerde toplanır; açık kalması önerilir.</p>
        <p className="soluk ayar-aciklama">A grubu kağıttaki soru sırasıyla basılır. Ortak metinler yerinde kalır, aralarındaki sorular kendi içinde karışır. Başka şıklara atıf yapan sorularda şıklar karışmaz.</p>
        <button type="button" onClick={() => degistir({ tohum: (ayar.tohum % 1_000_000) + 1, denemeler: undefined })} disabled={ayar.sayi === 1 && ayar.sikKaristir === false}>Yeniden karıştır</button>
      </fieldset>
    </>
  );
}

// ---- Öğrencilere soru havuzu ----
function HavuzPaneli({ sinavId, belge, gruplar, sorular }: { sinavId: string; belge: SinavBelgesi; gruplar: GrupOgesi[][]; sorular: SinavSorusu[] }) {
  const [havuz, setHavuz] = useState<HavuzOzeti | null | undefined>(undefined);
  const [ad, setAd] = useState(belge.ayar.sinavAdi || belge.ad);
  const [sonTarih, setSonTarih] = useState(belge.ayar.tarih);
  const [kapsam, setKapsam] = useState<"sinav" | "kavram">("sinav");
  const [mesgul, setMesgul] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [kopyalandi, setKopyalandi] = useState(false);
  useEffect(() => {
    api.havuz.liste().then((l) => {
      const h = l.find((x) => x.sinavId === sinavId) ?? null;
      setHavuz(h);
      if (h) {
        setAd(h.ad);
        setSonTarih(h.sonTarih ?? "");
      }
    }, () => setHavuz(null));
  }, [sinavId]);

  // Sınavdaki bütün gruplardaki sorular; istenirse aynı kavramlardaki bütün sorular
  const sinavdakiler = new Set(gruplar.flat().flatMap((o) => (o.tur === "soru" ? [o.soru.id] : [])));
  const kavramlar = new Set(sorular.filter((q) => sinavdakiler.has(q.id)).map((q) => q.kavram ?? `konu:${q.topicId}`));
  const genis = sorular.filter((q) => sinavdakiler.has(q.id) || kavramlar.has(q.kavram ?? `konu:${q.topicId}`)).map((q) => q.id);
  const secilen = kapsam === "sinav" ? [...sinavdakiler] : genis;

  const ac = async () => {
    setMesgul(true);
    setHata(null);
    const r = await api.havuz.ac({ ad, sonTarih: sonTarih || null, sorular: secilen, sinav: sinavId });
    setMesgul(false);
    if (!r.ok) return setHata(r.hata.error);
    setHavuz(r.data);
  };
  const kaldir = async () => {
    if (!havuz || !confirm("Havuz kaldırılsın mı? Bağlantı artık açılmaz.")) return;
    const r = await api.havuz.sil(havuz.kod);
    if (!r.ok) return setHata(r.hata.error);
    setHavuz(null);
  };
  const baglanti = havuz ? havuzBaglantisi(havuz.kod) : "";
  return (
    <fieldset className="havuz-paneli">
      <legend>Öğrencilere soru havuzu</legend>
      <p className="soluk ayar-aciklama" style={{ marginLeft: 0 }}>
        Öğrencilere "sınav bu sorulardan gelecek" diye bir bağlantı ver. Bağlantıyı açan öğrenci sitede yalnızca bu soruları çözer; cevaplar ve kağıdın kendisi görünmez.
      </p>
      <label>Havuzun adı<input value={ad} maxLength={120} onChange={(e) => setAd(e.target.value)} /></label>
      <label>Sınav tarihi (isteğe bağlı)<input type="date" value={sonTarih} onChange={(e) => setSonTarih(e.target.value)} /></label>
      <label className="ayar-kutu"><input type="radio" name="havuz-kapsam" checked={kapsam === "sinav"} onChange={() => setKapsam("sinav")} />
        Sınavdaki sorular ({sinavdakiler.size})
      </label>
      <label className="ayar-kutu"><input type="radio" name="havuz-kapsam" checked={kapsam === "kavram"} onChange={() => setKapsam("kavram")} />
        Sınavın kavramlarındaki bütün sorular ({genis.length})
      </label>
      <button type="button" className="primary" onClick={ac} disabled={mesgul || !ad.trim() || secilen.length === 0 || havuz === undefined}>
        {havuz ? "Havuzu güncelle" : "Havuzu aç"}
      </button>
      {hata && <p className="ayar-uyari">{hata}</p>}
      {havuz && (
        <>
          <span className="soluk" style={{ fontSize: 12 }}>{havuz.soruSayisi} soru · bağlantı:</span>
          <div className="havuz-baglanti">
            <input readOnly value={baglanti} onFocus={(e) => e.currentTarget.select()} aria-label="Havuz bağlantısı" />
            <button type="button" onClick={() => void navigator.clipboard?.writeText(baglanti).then(() => {
              setKopyalandi(true);
              setTimeout(() => setKopyalandi(false), 1500);
            })}>{kopyalandi ? "Kopyalandı" : "Kopyala"}</button>
          </div>
          <button type="button" onClick={kaldir}>Havuzu kaldır</button>
        </>
      )}
    </fieldset>
  );
}

// ---- Sayfa ----
type KayitDurumu = "kayitli" | "bekliyor" | "kaydediliyor" | "hata";

export function SinavKagidi({ id }: { id: string }) {
  const { me, yuklendi } = useOturum();
  const [belge, setBelge] = useState<SinavBelgesi | null>(null);
  const [sorular, setSorular] = useState<SinavSorusu[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [durum, setDurum] = useState<KayitDurumu>("kayitli");
  const [sekme, setSekme] = useState<"sorular" | "kagit" | "gruplar">("sorular");
  // Önizlemede görünen: grup sırası (0 = A), cevap anahtarı ya da hepsi
  const [gorunum, setGorunum] = useState<number | "anahtar" | "hepsi">(0);
  const [olcek, setOlcek] = useState(0.8);
  const guncellendi = useRef(0);
  const ilk = useRef(true);
  const sayfalar = useRef<HTMLDivElement>(null);
  const yetkili = sinavYetkisi(me);

  useEffect(() => {
    if (!yetkili) return;
    ilk.current = true;
    api.sinav.al(id).then((s) => {
      guncellendi.current = s.guncellendi;
      setBelge(s.belge);
    }, (e) => setHata(String(e).includes("404") ? "Bu sınav bulunamadı." : String(e)));
    api.sinav.sorular().then(setSorular, (e) => setHata(String(e)));
  }, [id, yetkili]);

  // Otomatik kayıt: son değişiklikten 1,5 sn sonra
  useEffect(() => {
    if (!belge) return;
    if (ilk.current) {
      ilk.current = false;
      return;
    }
    setDurum("bekliyor");
    const t = setTimeout(async () => {
      setDurum("kaydediliyor");
      const r = await api.sinav.kaydet(id, belge, guncellendi.current);
      if (r.ok) {
        guncellendi.current = r.data.guncellendi;
        setDurum("kayitli");
      } else {
        setDurum("hata");
        setHata(r.hata.error);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [belge, id]);

  // Kaydedilmemiş değişiklik varken sayfadan çıkarken uyar
  useEffect(() => {
    if (durum === "kayitli") return;
    const uyar = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", uyar);
    return () => window.removeEventListener("beforeunload", uyar);
  }, [durum]);

  const soruMap = useMemo(() => new Map((sorular ?? []).map((q) => [q.id, q])), [sorular]);
  const grupAyari = belge?.gruplar ?? varsayilanGruplar();
  const gruplar = useMemo(
    () => (belge ? Array.from({ length: grupAyari.sayi }, (_, g) => grupKagidi(belge, soruMap, g)) : []),
    [belge, soruMap, grupAyari.sayi],
  );
  const [wordHazirlaniyor, setWordHazirlaniyor] = useState(false);

  // Bütün grupların öğeleri (ve sığdırma için aday sorular) görünmeyen alanda ölçülür;
  // her grubun kaç sayfa tuttuğu açık sekmeden bağımsız bilinir.
  const [olcu, setOlcu] = useState<Olcu | null>(null);
  const [adaylar, setAdaylar] = useState<GrupOgesi[]>([]);
  const olculecek = useMemo(() => {
    const m = new Map<string, GrupOgesi>();
    for (const o of [...gruplar.flat(), ...adaylar]) if (!m.has(olcuAnahtari(o))) m.set(olcuAnahtari(o), o);
    return [...m.values()];
  }, [gruplar, adaylar]);
  const sayfaSayilari = useMemo(
    () => (belge && olcu ? gruplar.map((g, i) => duzenHesapla(g, olcu, belge.ayar, i === 0 ? "duzenli" : "duz")?.sayfalar.length ?? null) : []),
    [belge, olcu, gruplar],
  );

  // Sığdırma: A'dan fazla sayfa tutan grup için başka karıştırmalar denenir, sığan belgeye
  // yazılır. Aday sorular henüz ölçülmediyse önce ölçüme eklenir, ölçülünce yeniden denenir.
  useEffect(() => {
    if (!belge || !olcu || gruplar.length < 2) return;
    const hedef = sayfaSayilari[0];
    if (hedef == null) return;
    const say = (l: GrupOgesi[]) => duzenHesapla(l, olcu, belge.ayar, "duz")?.sayfalar.length ?? null;
    const simdiki = Array.from({ length: gruplar.length }, (_, g) => belge.gruplar?.denemeler?.[g] ?? 0);
    const yeni = [...simdiki];
    const eksik = new Map<string, GrupOgesi>();
    for (let g = 1; g < gruplar.length; g++) {
      if ((sayfaSayilari[g] ?? 0) <= hedef) continue;
      const r = sigdir(belge, soruMap, g, hedef, say);
      if (r) yeni[g] = r.deneme;
      else {
        for (let d = 0; d <= SIGDIRMA_DENEME; d++) {
          for (const o of grupKagidi(belge, soruMap, g, d)) if (!olcu.ogeler.has(olcuAnahtari(o))) eksik.set(olcuAnahtari(o), o);
        }
      }
    }
    if (eksik.size) {
      setAdaylar((a) => {
        const var_ = new Set(a.map(olcuAnahtari));
        const ek = [...eksik.values()].filter((o) => !var_.has(olcuAnahtari(o)));
        return ek.length ? [...a, ...ek] : a;
      });
    }
    if (yeni.some((d, g) => d !== simdiki[g])) {
      setBelge((b) => (b ? { ...b, gruplar: { ...(b.gruplar ?? varsayilanGruplar()), denemeler: yeni } } : b));
    }
  }, [belge, olcu, gruplar, sayfaSayilari, soruMap]);

  if (!yuklendi) return <Iskelet />;
  if (!yetkili) return <p className="empty">Bu sayfa, dersi alanında olan akademisyenler içindir. <a href={tabanaEkle("/sinavlar")}>Ayrıntı</a></p>;
  if (hata && !belge) return <p className="empty">{hata} <a href={href({ page: "sinavlar" })}>Sınavlarım</a></p>;
  if (!belge || !sorular) return <Iskelet satir={6} />;

  const guncelle = (f: (b: SinavBelgesi) => SinavBelgesi) => setBelge((b) => (b ? f(b) : b));
  const ayarDegistir = (a: Partial<SinavAyari>) => guncelle((b) => ({ ...b, ayar: { ...b.ayar, ...a } }));
  const degistir: Degistir = (oid, f) => guncelle((b) => ({ ...b, ogeler: b.ogeler.map((o) => (o.id === oid ? f(o) : o)) }));
  const ekle = (l: SinavSorusu[]) => {
    if (!l.length) return;
    guncelle((b) => {
      const var_ = new Set(b.ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
      const yeni = l.filter((q) => !var_.has(q.id)).slice(0, Math.max(0, SINAV_OGE_EN_COK - b.ogeler.length));
      return { ...b, ogeler: [...b.ogeler, ...yeni.map((q) => ({ tur: "soru" as const, id: yeniKimlik(), soruId: q.id }))] };
    });
  };
  const cikar = (soruIdler: string[]) => {
    const c = new Set(soruIdler);
    if (c.size) guncelle((b) => ({ ...b, ogeler: b.ogeler.filter((o) => o.tur !== "soru" || !c.has(o.soruId)) }));
  };
  const ogeleriDegistir = (f: (l: SinavOgesi[]) => SinavOgesi[]) => guncelle((b) => ({ ...b, ogeler: f(b.ogeler) }));
  const tasi = (oid: string, yon: -1 | 1) => guncelle((b) => {
    const i = b.ogeler.findIndex((o) => o.id === oid);
    const j = i + yon;
    if (i < 0 || j < 0 || j >= b.ogeler.length) return b;
    const l = [...b.ogeler];
    [l[i], l[j]] = [l[j]!, l[i]!];
    return { ...b, ogeler: l };
  });
  const sil = (oid: string) => guncelle((b) => ({ ...b, ogeler: b.ogeler.filter((o) => o.id !== oid) }));
  const ortakMetin = (metin = "") => guncelle((b) => ({ ...b, ogeler: [...b.ogeler, { tur: "metin", id: yeniKimlik(), metin }] }));
  const puanDagit = () => guncelle((b) => {
    const n = b.ogeler.filter((o) => o.tur === "soru").length;
    if (!n) return b;
    const taban = Math.floor(100 / n);
    let artan = 100 - taban * n;
    return { ...b, ogeler: b.ogeler.map((o) => (o.tur === "soru" ? { ...o, puan: taban + (artan-- > 0 ? 1 : 0) } : o)) };
  });

  const gruplariDegistir = (g: Partial<GrupAyari>) => guncelle((b) => ({ ...b, gruplar: { ...(b.gruplar ?? varsayilanGruplar()), ...g } }));
  const ogeBul = new Map(belge.ogeler.map((o) => [o.id, o]));
  const oge = (go: GrupOgesi) => {
    const o = ogeBul.get(go.ogeId);
    if (!o) return null;
    return (
      <span className="kagit-arac">
        {o.tur === "soru" && (
          <label title="Puan">
            <input type="number" min={0} max={100} value={o.puan ?? ""} placeholder="puan"
              onChange={(e) => degistir(o.id, (x) => ({ ...x, puan: e.target.value === "" ? undefined : Math.min(100, Math.max(0, Number(e.target.value))) }) as SinavOgesi)} />
          </label>
        )}
        {o.tur === "soru" && (o.metin !== undefined || o.siklar !== undefined) && (
          <button onClick={() => degistir(o.id, (x) => ({ ...x, metin: undefined, siklar: undefined }) as SinavOgesi)} title="Sorunun sitedeki haline dön">Aslına dön</button>
        )}
        <button onClick={() => tasi(o.id, -1)} title="Yukarı taşı" aria-label="Yukarı taşı">↑</button>
        <button onClick={() => tasi(o.id, 1)} title="Aşağı taşı" aria-label="Aşağı taşı">↓</button>
        <button onClick={() => sil(o.id)} title="Kağıttan çıkar" aria-label="Kağıttan çıkar">✕</button>
      </span>
    );
  };
  const grupAdi = (g: number) => (grupAyari.sayi > 1 ? GRUP_ADLARI[g] : undefined);
  const gorunen = typeof gorunum === "number" && gorunum >= grupAyari.sayi ? 0 : gorunum;
  const wordIndir = async () => {
    setWordHazirlaniyor(true);
    try {
      const { sinaviWordeCevir } = await import("../lib/sinav-word");
      const blob = await sinaviWordeCevir(belge, gruplar);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${(belge.ad || "sinav").replace(/[\\/:*?"<>|]/g, "-")}.docx`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    } catch (e) {
      setHata(`Word dosyası hazırlanamadı: ${String(e)}`);
    } finally {
      setWordHazirlaniyor(false);
    }
  };

  // Sığdırmadan sonra hâlâ A'dan uzun gruplar ve tek başına sütuna sığmayan sorular (A'daki numarasıyla)
  const tasanlar = gruplar.map((_, g) => g).filter((g) => g > 0 && sayfaSayilari[g] != null && sayfaSayilari[0] != null && sayfaSayilari[g]! > sayfaSayilari[0]!);
  const sutunBoyu = geometri(belge.ayar).sutunYuksekligi;
  const uzunlar: number[] = [];
  let sira = 0;
  for (const o of gruplar[0] ?? []) {
    if (o.tur === "soru") sira++;
    if ((olcu?.ogeler.get(olcuAnahtari(o)) ?? 0) > sutunBoyu && o.tur === "soru") uzunlar.push(sira);
  }

  const DURUM_YAZI: Record<KayitDurumu, string> = { kayitli: "Kaydedildi", bekliyor: "Değişiklik var…", kaydediliyor: "Kaydediliyor…", hata: "Kaydedilemedi" };

  return (
    <div className="sinav-duzenleyici">
      <div className="sinav-arac-cubugu">
        <a href={href({ page: "sinavlar" })}>← Sınavlarım</a>
        <input className="sinav-adi" value={belge.ad} maxLength={120} aria-label="Sınavın adı" onChange={(e) => guncelle((b) => ({ ...b, ad: e.target.value }))} />
        <span className={`kayit-durumu kayit-${durum}`} role="status">{DURUM_YAZI[durum]}</span>
        <span className="bosluk" />
        <label className="olcek-secici">Yakınlık
          <input type="range" min={0.4} max={1.2} step={0.05} value={olcek} onChange={(e) => setOlcek(Number(e.target.value))} />
        </label>
        <button onClick={wordIndir} disabled={wordHazirlaniyor || belge.ogeler.length === 0}
          title="Bütün gruplar ve cevap anahtarı tek Word dosyasında">
          {wordHazirlaniyor ? "Hazırlanıyor…" : "Word indir"}
        </button>
        <button className="primary" onClick={() => yazdir(sayfalar.current, belge.ayar, belge.ad)}
          title="Önizlemede görüneni basar. Yazdırma penceresinde hedef olarak 'PDF olarak kaydet'i seç; 'Üstbilgi ve altbilgi' kapalı kalsın">
          PDF indir / yazdır
        </button>
      </div>
      {durum === "hata" && <FormHatasi hata={hata} />}
      <div className="sinav-govde">
        <aside className="sinav-yan">
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={sekme === "sorular"} className={sekme === "sorular" ? "active" : ""} onClick={() => setSekme("sorular")}>Sorular</button>
            <button role="tab" aria-selected={sekme === "kagit"} className={sekme === "kagit" ? "active" : ""} onClick={() => setSekme("kagit")}>Kağıt ve başlık</button>
            <button role="tab" aria-selected={sekme === "gruplar"} className={sekme === "gruplar" ? "active" : ""} onClick={() => setSekme("gruplar")}>Gruplar ve havuz</button>
          </div>
          {sekme === "sorular" ? (
            <>
              <SoruSecici sinavId={id} sorular={sorular} ogeler={belge.ogeler} ekle={ekle} cikar={cikar} ogeleriDegistir={ogeleriDegistir} ortakMetin={ortakMetin} />
              <button className="ortak-metin-dugme" onClick={() => ortakMetin()}>+ Ortak metin ya da yönerge ekle</button>
            </>
          ) : sekme === "kagit" ? (
            <KagitAyarlari ayar={belge.ayar} degistir={ayarDegistir} puanDagit={puanDagit} />
          ) : (
            <div className="kagit-ayarlari">
              <GrupAyarlari ayar={grupAyari} degistir={gruplariDegistir} gruplar={gruplar} />
              <HavuzPaneli sinavId={id} belge={belge} gruplar={gruplar} sorular={sorular} />
            </div>
          )}
        </aside>
        <div className="sinav-onizleme-kap">
          <div className="sinav-gorunum" role="tablist" aria-label="Önizleme">
            {gruplar.map((_, g) => {
              const n = sayfaSayilari[g];
              const tasti = g > 0 && n != null && sayfaSayilari[0] != null && n > sayfaSayilari[0]!;
              return (
                <button key={g} role="tab" aria-selected={gorunen === g} onClick={() => setGorunum(g)} className={tasti ? "grup-tasti" : undefined}>
                  {grupAyari.sayi > 1 ? `${GRUP_ADLARI[g]} grubu` : "Kağıt"}
                  {n != null && belge.ogeler.length > 0 && <span className="grup-sayfa"> · {n} sayfa{tasti ? " ⚠" : ""}</span>}
                </button>
              );
            })}
            <button role="tab" aria-selected={gorunen === "anahtar"} onClick={() => setGorunum("anahtar")}>Cevap anahtarı</button>
            {grupAyari.sayi > 1 && <button role="tab" aria-selected={gorunen === "hepsi"} onClick={() => setGorunum("hepsi")}>Hepsi</button>}
            {typeof gorunen === "number" && gorunen > 0 && <span className="soluk">Bu grup A'dan üretilir; düzenlemeyi A grubunda yap.</span>}
          </div>
          {(tasanlar.length > 0 || uzunlar.length > 0) && (
            <div className="sinav-uyari" role="alert">
              {tasanlar.length > 0 && (
                <p>
                  {tasanlar.map((g) => `${GRUP_ADLARI[g]} grubu ${sayfaSayilari[g]} sayfa`).join(", ")} tutuyor; A grubu {sayfaSayilari[0]} sayfa.
                  Bütün karıştırmalar denendi, sığan çıkmadı. Kağıdı biraz sıkıştır:
                  {belge.ayar.yazi > 8 && <button type="button" onClick={() => ayarDegistir({ yazi: belge.ayar.yazi - 1 })}>Yazıyı 1 punto küçült</button>}
                  {belge.ayar.kenar > 5 && <button type="button" onClick={() => ayarDegistir({ kenar: Math.max(5, belge.ayar.kenar - 5) })}>Kenarı 5 mm daralt</button>}
                  {grupAyari.kip === "benzer" && <span className="soluk"> ya da Gruplar sekmesinde "Aynı sorular, karışık" kipini seç.</span>}
                </p>
              )}
              {uzunlar.length > 0 && (
                <p>{uzunlar.join(", ")}. soru tek başına bir sütuna sığmıyor, kağıtta altı kesilir. Soruyu kısalt, şekli küçült ya da tek sütuna geç.</p>
              )}
            </div>
          )}
          <div className="sinav-onizleme" ref={sayfalar} style={{ "--kagit-olcek": olcek } as CSSProperties}>
            <Olcer belge={belge} ogeler={olculecek} grupVar={grupAyari.sayi > 1} onOlcum={setOlcu} />
            {belge.ogeler.length === 0 && <p className="sinav-ipucu">Soldan soru ekledikçe kağıt burada oluşur. Başlıktaki yazılara tıklayıp düzenleyebilirsin.</p>}
            {gorunen === "anahtar" ? (
              <CevapAnahtari belge={belge} gruplar={gruplar} />
            ) : gorunen === "hepsi" ? (
              <>
                {gruplar.map((g, i) => <Kagit key={i} belge={belge} ogeler={g} olcu={olcu} grup={grupAdi(i)} />)}
                <CevapAnahtari belge={belge} gruplar={gruplar} />
              </>
            ) : gorunen === 0 ? (
              <Kagit belge={belge} ogeler={gruplar[0] ?? []} olcu={olcu} grup={grupAdi(0)} degistir={degistir} ayarDegistir={ayarDegistir} oge={oge} />
            ) : (
              <Kagit key={gorunen} belge={belge} ogeler={gruplar[gorunen] ?? []} olcu={olcu} grup={grupAdi(gorunen)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
