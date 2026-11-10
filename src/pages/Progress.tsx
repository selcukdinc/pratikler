import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { href, tabanaEkle } from "../lib/router";
import { uye, useOturum } from "../lib/oturum";
import { basamak } from "../lib/ilerleme";
import { ALEV, KIVILCIM, PARILTI, gunSusu, rozetler } from "../../shared/motivasyon";
import type { IlerlemeAyrintisi, TopicProgress } from "../../shared/api";
import { IlerlemeIskeleti } from "../components/Iskelet";
import { PRATIK, uniteBul, uniteYazi } from "../lib/pratik";

type Gun = IlerlemeAyrintisi["takvim"][number];

const AYLAR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
const GUN_ADLARI = ["", "Pzt", "", "Çar", "", "Cum", "", ""];

function tarihYaz(gun: string) {
  const [y, a, g] = gun.split("-").map(Number);
  return `${g} ${AYLAR[a! - 1]} ${y}`;
}

function Takvim({ takvim }: { takvim: Gun[] }) {
  if (!takvim.length) return null;
  const enCok = Math.max(1, ...takvim.map((g) => g.deneme));
  // Sütunlar haftalar, satırlar Pazartesi-Pazar; ilk günün haftadaki yeri kadar boşluk bırakılır
  const ilk = (new Date(`${takvim[0]!.gun}T12:00:00Z`).getUTCDay() + 6) % 7;
  const hucreler: (Gun | null)[] = [...Array(ilk).fill(null), ...takvim];
  const sutunlar: (Gun | null)[][] = [];
  for (let i = 0; i < hucreler.length; i += 7) sutunlar.push(hucreler.slice(i, i + 7));
  const ayEtiketi = (s: (Gun | null)[], i: number) => {
    const g = s.find((x) => x);
    if (!g) return "";
    const ay = Number(g.gun.slice(5, 7));
    const onceki = i > 0 ? sutunlar[i - 1]!.find((x) => x) : null;
    return !onceki || Number(onceki.gun.slice(5, 7)) !== ay ? AYLAR[ay - 1] : "";
  };

  return (
    <figure className="takvim">
      <div className="takvim-izgara" role="img" aria-label="Son 12 haftanın günlük deneme sayıları; ayrıntılar aşağıdaki tabloda">
        <div className="takvim-gunler" aria-hidden="true">
          {GUN_ADLARI.map((g, i) => <span key={i}>{g}</span>)}
        </div>
        {sutunlar.map((s, i) => (
          <div className="takvim-sutun" key={i}>
            <span className="takvim-ay" aria-hidden="true">{ayEtiketi(s, i)}</span>
            {s.map((g, j) =>
              g ? (
                <span
                  key={j}
                  className={`takvim-hucre b${basamak(g.deneme, enCok)} ${gunSusu(g.dogru) ?? ""}`}
                  title={`${tarihYaz(g.gun)}: ${g.deneme ? `${g.deneme} deneme, ${g.dogru} doğru` : "deneme yok"}${SUS_ADI[gunSusu(g.dogru) ?? ""] ?? ""}`}
                />
              ) : (
                <span key={j} className="takvim-hucre bos" />
              ),
            )}
          </div>
        ))}
      </div>
      <figcaption className="takvim-lejant">
        Az
        {[0, 1, 2, 3, 4].map((b) => <span key={b} className={`takvim-hucre b${b}`} aria-hidden="true" />)}
        Çok
        <span className="hint"> (en yoğun gün: {enCok} deneme)</span>
        <span className="takvim-suslar">
          <span className="takvim-hucre b2 kivilcim" aria-hidden="true" /> {KIVILCIM}+ doğru
          <span className="takvim-hucre b3 parilti" aria-hidden="true" /> {PARILTI}+
          <span className="takvim-hucre b4 alev" aria-hidden="true" /> {ALEV}+ alev
        </span>
      </figcaption>
      <details className="takvim-tablo">
        <summary>Tablo olarak göster</summary>
        <table>
          <thead><tr><th>Gün</th><th>Deneme</th><th>Doğru</th></tr></thead>
          <tbody>
            {takvim.filter((g) => g.deneme).reverse().map((g) => (
              <tr key={g.gun}><td>{tarihYaz(g.gun)}</td><td>{g.deneme}</td><td>{g.dogru}</td></tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

const SUS_ADI: Record<string, string> = { kivilcim: " · kıvılcım", parilti: " · parıltı", alev: " · alev günü 🔥" };

const oran = (r: TopicProgress) => (r.total ? r.correct / r.total : 0);
const yuzde = (x: number) => `%${Math.round(x * 100)}`;
// "Ünitelere", "Haftalara": çoğul eki son ünlüye uyar
const EK = /[aıou][^aeıioöuü]*$/.test(PRATIK.uniteAdi) ? "lara" : "lere";
const UNITE = PRATIK.uniteAdi.charAt(0).toLocaleUpperCase("tr") + PRATIK.uniteAdi.slice(1);

function Cubuk({ deger, toplam, etiket }: { deger: number; toplam: number; etiket: string }) {
  const y = toplam ? Math.min(100, Math.round((deger / toplam) * 100)) : 0;
  return (
    <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={toplam} aria-valuenow={Math.min(deger, toplam)} aria-label={etiket}>
      <div style={{ width: `${y}%` }} />
    </div>
  );
}

// Sayfanın başı: bugün ne durumdasın ve şimdi ne yapmalısın. Tek bir birincil düğme vardır:
// yanlışın varsa onları tekrar çöz, yoksa karma test.
function Bugun({ dogru, hedef, seri, yanlis, hicYok, uyeMi }: { dogru: number; hedef: number; seri: number; yanlis: number; hicYok: boolean; uyeMi: boolean }) {
  const tamam = hedef > 0 && dogru >= hedef;
  const baslik = hicYok
    ? "İlk sorunu çöz, ilerlemen burada birikir"
    : !hedef
      ? `Bugün ${dogru} doğru`
      : tamam
        ? "Bugünkü hedef tamam"
        : `Bugünkü hedefe ${hedef - dogru} doğru kaldı`;
  return (
    <section className={`il-bugun${tamam ? " tamam" : ""}`} aria-labelledby="il-bugun-baslik">
      <div className="il-bugun-metin">
        <h2 id="il-bugun-baslik">{baslik}</h2>
        {hedef > 0 ? (
          <>
            <Cubuk deger={dogru} toplam={hedef} etiket="Günlük hedef" />
            <p className="hint">
              {Math.min(dogru, hedef)} / {hedef} doğru{tamam && dogru > hedef ? ` (bugün toplam ${dogru})` : ""}
              {seri > 0 && <>, {seri} gündür üst üste çalışıyorsun{seri >= 3 ? " 🔥" : ""}</>}.{" "}
              {uyeMi ? <a href={tabanaEkle("/ayarlar")}>Hedefi değiştir</a> : <><a href={tabanaEkle("/kayit")}>Hesap açarsan</a> hedefini değiştirebilirsin.</>}
            </p>
          </>
        ) : (
          <p className="hint">Günlük hedefin kapalı; <a href={tabanaEkle("/ayarlar")}>Ayarlar</a>'dan açabilirsin.</p>
        )}
      </div>
      <div className="il-bugun-dugmeler">
        {yanlis > 0 ? (
          <>
            <a className="il-dugme birincil" href={tabanaEkle("/sorular?durum=yanlis")}>Yanlışlarını tekrar çöz ({yanlis})</a>
            <a className="il-dugme" href={href({ page: "pratik" })}>Karma test</a>
          </>
        ) : (
          <>
            <a className="il-dugme birincil" href={href({ page: "pratik" })}>{hicYok ? "Karma teste başla" : "Karma test çöz"}</a>
            <a className="il-dugme" href={href({ page: "tekrar" })}>Tekrar</a>
          </>
        )}
      </div>
    </section>
  );
}

// Sayfada ilk anda gösterilen yanlış sayısı; gerisi "Hepsini göster" ile açılır
const YANLIS_ILK = 6;

export function Progress() {
  const { me } = useOturum();
  const [rows, setRows] = useState<TopicProgress[] | null>(null);
  const [ayrinti, setAyrinti] = useState<IlerlemeAyrintisi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tumYanlislar, setTumYanlislar] = useState(false);

  useEffect(() => {
    api.progress().then(setRows, (e) => setError(String(e)));
    api.ilerlemeAyrintisi().then(setAyrinti, () => setAyrinti({ takvim: [], yanlislar: [], hedef: 0, seri: { simdi: 0, enUzun: 0 }, alevGunleri: 0, hedefGunleri: 0 }));
  }, []);

  if (error) return <p className="empty">İlerleme yüklenemedi: {error}</p>;
  if (!rows || !ayrinti) return <IlerlemeIskeleti />;

  const toplam = rows.reduce((s, r) => s + r.total, 0);
  const dogru = rows.reduce((s, r) => s + r.correct, 0);
  const denenen = rows.reduce((s, r) => s + r.attempted, 0);
  const deneme = ayrinti.takvim.reduce((s, g) => s + g.deneme, 0);
  const dogruDeneme = ayrinti.takvim.reduce((s, g) => s + g.dogru, 0);
  const aktifGun = ayrinti.takvim.filter((g) => g.deneme).length;
  const hicYok = denenen === 0 && deneme === 0;

  // Zayıf konular: denenmiş ve henüz bitmemiş konular, oranı en düşük olanlar
  const zayif = rows
    .filter((r) => r.attempted > 0 && r.correct < r.total)
    .sort((a, b) => oran(a) - oran(b) || b.total - a.total)
    .slice(0, 3);

  const uniteler = [...new Set(rows.map((r) => r.week))].sort((a, b) => a - b).map((w) => {
    const konular = rows.filter((r) => r.week === w);
    return { w, konular, total: konular.reduce((s, r) => s + r.total, 0), correct: konular.reduce((s, r) => s + r.correct, 0) };
  });
  const yanlislar = tumYanlislar ? ayrinti.yanlislar : ayrinti.yanlislar.slice(0, YANLIS_ILK);

  return (
    <div className="progress">
      <Bugun
        dogru={ayrinti.takvim[ayrinti.takvim.length - 1]?.dogru ?? 0} hedef={ayrinti.hedef} seri={ayrinti.seri.simdi}
        yanlis={ayrinti.yanlislar.length} hicYok={hicYok} uyeMi={uye(me)}
      />

      {!uye(me) && (
        <p className="hint il-misafir">
          İlerlemen bu tarayıcıda misafir olarak saklanıyor. <a href={tabanaEkle("/kayit")}>Hesap açarsan</a> hesabına taşınır ve her cihazda görürsün.
        </p>
      )}

      <dl className="il-ozet">
        <div><dt>Çözülen soru</dt><dd>{dogru}<span> / {toplam}</span></dd></div>
        <div><dt>İsabet (12 hafta)</dt><dd>{deneme ? yuzde(dogruDeneme / deneme) : "–"}</dd></div>
        <div><dt>Aktif gün (12 hafta)</dt><dd>{aktifGun}</dd></div>
        <div><dt>Günlük seri</dt><dd>{ayrinti.seri.simdi}<span> gün, en uzun {ayrinti.seri.enUzun}</span></dd></div>
      </dl>

      {!hicYok && (
        <div className="il-iki">
          <section className="il-bolum" aria-labelledby="il-zayif">
            <h3 id="il-zayif">Tekrar etmen gereken konular</h3>
            {zayif.length === 0 ? (
              <p className="hint">Denediğin konuların hepsini bitirmişsin.</p>
            ) : (
              <ul className="il-liste">
                {zayif.map((r) => (
                  <li key={r.topicId} className="il-konu">
                    <a className="il-ad" href={`${href({ page: "sorular", topic: r.topicId })}?durum=cozulmemis`}>{r.title}</a>
                    <span className="il-sayi">{r.correct} / {r.total}</span>
                    <Cubuk deger={r.correct} toplam={r.total} etiket={`${r.title}: ${yuzde(oran(r))}`} />
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="il-bolum" aria-labelledby="il-yanlis">
            <h3 id="il-yanlis">Yanlış yaptıkların</h3>
            {ayrinti.yanlislar.length === 0 ? (
              <p className="hint">Denediğin halde doğru çözemediğin soru yok.</p>
            ) : (
              <>
                <ul className="il-liste">
                  {yanlislar.map((y) => (
                    <li key={y.id} className="il-yanlis">
                      <a className="il-ad" href={`${href({ page: "sorular", topic: y.topicId })}?durum=yanlis#soru-${encodeURIComponent(y.id)}`}>{y.ozet}</a>
                      <span className="hint">{y.topicTitle}, {y.deneme} deneme</span>
                    </li>
                  ))}
                </ul>
                {ayrinti.yanlislar.length > YANLIS_ILK && !tumYanlislar && (
                  <button type="button" className="il-daha" onClick={() => setTumYanlislar(true)}>
                    Hepsini göster ({ayrinti.yanlislar.length})
                  </button>
                )}
              </>
            )}
          </section>
        </div>
      )}

      <section className="il-bolum" aria-labelledby="il-unite">
        <h3 id="il-unite">{UNITE}{EK} göre ilerleme</h3>
        <p className="hint">Her konuda en az bir kez doğru çözdüğün soruların oranı.</p>
        <ul className="il-liste">
          {uniteler.map((u) => {
            const tek = u.konular.length === 1;
            return (
              <li key={u.w} className="il-unite">
                <div className="il-konu">
                  <a className="il-ad" href={href(tek ? { page: "sorular", topic: u.konular[0]!.topicId } : { page: "sorular", hafta: u.w })}>
                    <span className="il-no">{uniteYazi(u.w)}</span> {tek ? u.konular[0]!.title : uniteBul(u.w)?.baslik}
                  </a>
                  <span className="il-sayi">{u.correct} / {u.total}</span>
                  <Cubuk deger={u.correct} toplam={u.total} etiket={`${uniteYazi(u.w)}: ${yuzde(u.total ? u.correct / u.total : 0)}`} />
                </div>
                {!tek && (
                  <ul className="il-alt">
                    {u.konular.map((r) => (
                      <li key={r.topicId} className="il-konu">
                        <a className="il-ad" href={href({ page: "sorular", topic: r.topicId })}>{r.title}</a>
                        <span className="il-sayi">{r.correct} / {r.total}</span>
                        <Cubuk deger={r.correct} toplam={r.total} etiket={`${r.title}: ${yuzde(oran(r))}`} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="il-bolum" aria-labelledby="il-etkinlik">
        <h3 id="il-etkinlik">Son 12 hafta</h3>
        <Takvim takvim={ayrinti.takvim} />
      </section>

      <section className="il-bolum" aria-labelledby="il-rozet">
        <h3 id="il-rozet">Rozetler</h3>
        <p className="hint">Yalnızca sen görürsün; kimseyle karşılaştırılmaz.</p>
        <ul className="rozetler">
          {rozetler({ enUzunSeri: ayrinti.seri.enUzun, alevGunleri: ayrinti.alevGunleri, hedefGunleri: ayrinti.hedefGunleri, cozulen: dogru, toplam }).map((r) => {
            const kazanildi = r.ilerleme >= r.esik;
            return (
              <li key={r.id} className={kazanildi ? "kazanildi" : undefined}>
                <span className="rozet-ikon" aria-hidden="true">{r.ikon}</span>
                <span>
                  <strong>{r.ad}</strong>
                  <span className="hint">{r.aciklama}</span>
                  <span className="hint">{kazanildi ? "Kazanıldı" : `${Math.min(r.ilerleme, r.esik)} / ${r.esik}`}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
