// /cikmis: önceki yılların vize ve final sınavlarında çıkmış sorular.
// /cikmis/<sınav>: sınav, kâğıttaki sırasıyla deneme sınavı olarak çözülür.
// Cevaplar "Sınavı bitir"e kadar sunucuya gönderilmez; bitirince her cevap
// sırayla kontrol edilir, puan ve ünite bazlı döküm gösterilir. İstenirse
// "Soru soru" düzeninde her soru hemen kontrol edilir.

import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import { href, tabanaEkle } from "../lib/router";
import { inline, Markdown } from "../components/Markdown";
import { QuestionCard, SoruMetni } from "./Questions";
import { SINAVLAR, sinavBul, type CikmisSinav } from "../cikmis/sinavlar";
import { dersBul } from "../dersler";
import { DONEM_ADI, DONEMLER } from "../dersler/tipler";
import { uniteBul, uniteYazi } from "../lib/pratik";
import type { AnswerResult, Question, SoruDurumlari } from "../../shared/api";


function SinavListesi() {
  return (
    <div className="ders-sayfa">
      <p className="ders-giris">
        Önceki yılların sınavlarında çıkmış sorular, kâğıttaki sırasıyla. Bir sınavı deneme sınavı olarak baştan sona
        çöz; bitirince puanını ve hangi ünitelerde eksiğin olduğunu gör. Aynı konulardan türetilen yeni sorular{" "}
        <a href={href({ page: "sorular" })}>soru havuzunda</a>.
      </p>
      {DONEMLER.map((donem) => {
        const liste = SINAVLAR.filter((s) => s.donem === donem);
        return (
          <section key={donem} aria-labelledby={`cikmis-${donem}`}>
            <h3 className="donem-baslik" id={`cikmis-${donem}`}>{DONEM_ADI[donem]}</h3>
            {liste.length === 0 ? (
              <p className="empty">{DONEM_ADI[donem]} sınavlarından henüz çıkmış soru eklenmedi.</p>
            ) : (
              <ol className="ders-listesi">
                {liste.map((s) => (
                  <li key={s.id}>
                    <a href={href({ page: "cikmis", sinav: s.id })}>
                      <strong>{s.ad}</strong>
                      <span className="hint">{s.aciklama}</span>
                      <span className="ders-etiketler"><span className="tag">{s.sorular.length} soru</span></span>
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </section>
        );
      })}
    </div>
  );
}

type Sonuclar = Record<string, AnswerResult>;

// Deneme sınavında bir soru: şıklar kâğıttaki sırada, cevap bitene kadar yalnızca işaretlenir
function DenemeSorusu({ q, n, secim, sec, sonuc }: {
  q: Question; n: number; secim: number | undefined; sec: (i: number) => void; sonuc?: AnswerResult;
}) {
  const bitti = sonuc !== undefined || false;
  const durum = sonuc ? (sonuc.correct ? " correct" : " wrong") : "";
  return (
    <article className={`question${durum}`} id={`soru-${q.id}`}>
      <header>
        <strong>{n}.</strong>
        <span className="tag">{uniteYazi(q.week)}</span>
        {sonuc && <span className={sonuc.correct ? "ok" : "bad"}>{sonuc.correct ? "✓ doğru" : "✗ yanlış"}</span>}
      </header>
      <SoruMetni metin={q.prompt} />
      <div className="choices">
        {(q.payload.choices ?? []).map((c, i) => (
          <label key={i}>
            <input type="radio" name={`deneme-${q.id}`} checked={secim === i} onChange={() => sec(i)} disabled={bitti} />
            <span className="choice-letter">{String.fromCharCode(65 + i)})</span> <span>{inline(c, true)}</span>
          </label>
        ))}
      </div>
      {sonuc?.explanation && (
        <footer>
          <Markdown text={sonuc.explanation} terim />
        </footer>
      )}
    </article>
  );
}

function Ozet({ sinav, sorular, secimler, sonuclar }: {
  sinav: CikmisSinav; sorular: Question[]; secimler: Record<string, number>; sonuclar: Sonuclar;
}) {
  const dogru = sorular.filter((q) => sonuclar[q.id]?.correct).length;
  const bos = sorular.filter((q) => secimler[q.id] === undefined).length;
  const yanlis = sorular.length - dogru - bos;
  // Ünite bazlı döküm: en çok kaybedilen ünite önce
  const uniteler = [...new Set(sorular.map((q) => q.week))].map((w) => {
    const u = sorular.filter((q) => q.week === w);
    return { w, toplam: u.length, dogru: u.filter((q) => sonuclar[q.id]?.correct).length };
  }).sort((a, b) => a.dogru / a.toplam - b.dogru / b.toplam || a.w - b.w);
  return (
    <section className="deneme-ozet" aria-live="polite">
      <h3>Sonuç: {dogru} / {sorular.length} doğru</h3>
      <p className="hint">{yanlis} yanlış, {bos} boş. Yanlış yaptığın sorular yarından itibaren Tekrar sayfasında karşına çıkar.</p>
      <table className="deneme-dokum">
        <thead><tr><th>Ünite (en zayıfı önce)</th><th>Doğru</th></tr></thead>
        <tbody>
          {uniteler.map((u) => (
            <tr key={u.w}>
              <td><a href={href({ page: "ders", hafta: u.w })}>{uniteYazi(u.w)}: {dersBul(u.w)?.baslik ?? uniteBul(u.w)?.baslik}</a></td>
              <td>{u.dogru} / {u.toplam}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="hint">Ayrıntılar ve açıklamalar her sorunun altında. {DONEM_ADI[sinav.donem]} ünitelerini tekrar etmek için <a href={tabanaEkle("/ders")}>konu anlatımlarına</a> dön.</p>
    </section>
  );
}

function SinavSayfasi({ sinav }: { sinav: CikmisSinav }) {
  const [hepsi, setHepsi] = useState<Map<string, Question> | "hata" | null>(null);
  const [durumlar, setDurumlar] = useState<SoruDurumlari>({});
  const [duzen, setDuzen] = useState<"deneme" | "tek">("deneme");
  const [secimler, setSecimler] = useState<Record<string, number>>({});
  const [sonuclar, setSonuclar] = useState<Sonuclar | null>(null);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    api.questions().then((l) => setHepsi(new Map(l.map((q) => [q.id, q]))), () => setHepsi("hata"));
    api.soruDurumlari().then(setDurumlar, () => setDurumlar({}));
  }, []);

  const sorular = useMemo(
    () => (hepsi instanceof Map ? sinav.sorular.map((id) => hepsi.get(id)).filter((q): q is Question => !!q) : []),
    [hepsi, sinav],
  );

  if (hepsi === "hata") return <p className="bad">Sorular yüklenemedi.</p>;
  if (!hepsi) return <p className="empty">Yükleniyor…</p>;
  if (sorular.length === 0) return <p className="empty">Bu sınavın soruları henüz açılmadı.</p>;

  const isaretli = Object.keys(secimler).length;
  const bitir = async () => {
    if (isaretli < sorular.length && !confirm(`${sorular.length - isaretli} soru boş. Yine de bitirilsin mi?`)) return;
    setGonderiliyor(true);
    setHata(null);
    const s: Sonuclar = {};
    try {
      for (const q of sorular) {
        const i = secimler[q.id];
        if (i === undefined) continue;
        s[q.id] = await api.answer(q, { index: i });
      }
      setSonuclar(s);
      document.querySelector(".workspace-body")?.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setHata(`Cevaplar gönderilemedi: ${String(e)}`);
    } finally {
      setGonderiliyor(false);
    }
  };
  const yenidenBasla = () => {
    setSecimler({});
    setSonuclar(null);
  };

  return (
    <div className="ders-sayfa">
      <header className="ders-ust">
        <span className="ders-hafta">Çıkmış sorular · {DONEM_ADI[sinav.donem]}</span>
        <h2>{sinav.ad}</h2>
        <p className="hint">{sinav.aciklama}</p>
        <div className="secici-satir" role="group" aria-label="Çözme düzeni">
          <span className="secici-etiket">Düzen</span>
          <button className="cip" aria-pressed={duzen === "deneme"} onClick={() => setDuzen("deneme")}>Deneme sınavı</button>
          <button className="cip" aria-pressed={duzen === "tek"} onClick={() => setDuzen("tek")}>Soru soru</button>
        </div>
        <p className="hint">
          {duzen === "deneme"
            ? "Şıkları işaretle, en sonda Sınavı bitir'e bas. Cevaplar o zaman kontrol edilir."
            : "Her soruyu ayrı kontrol et; şıklar her açılışta karışır."}
        </p>
      </header>

      {duzen === "deneme" && sonuclar && <Ozet sinav={sinav} sorular={sorular} secimler={secimler} sonuclar={sonuclar} />}

      {duzen === "deneme"
        ? sorular.map((q, i) => (
            <DenemeSorusu key={q.id} q={q} n={i + 1} secim={secimler[q.id]} sonuc={sonuclar?.[q.id]}
              sec={(c) => setSecimler((s) => ({ ...s, [q.id]: c }))} />
          ))
        : sorular.map((q, i) => <QuestionCard key={q.id} q={q} n={i + 1} durum={durumlar[q.id]} />)}

      {duzen === "deneme" && (
        <div className="deneme-alt">
          {hata && <p className="bad">{hata}</p>}
          {sonuclar ? (
            <button onClick={yenidenBasla}>Yeniden çöz</button>
          ) : (
            <>
              <span className="hint">{isaretli} / {sorular.length} soru işaretlendi</span>
              <button className="primary" onClick={bitir} disabled={gonderiliyor || isaretli === 0}>
                {gonderiliyor ? "Kontrol ediliyor…" : "Sınavı bitir"}
              </button>
            </>
          )}
        </div>
      )}

      <nav className="ders-gezinti" aria-label="Çıkmış sınavlar">
        <a href={href({ page: "cikmis" })}>← Tüm çıkmış sınavlar</a>
      </nav>
    </div>
  );
}

export function Cikmis({ sinav }: { sinav?: string }) {
  if (!sinav) return <SinavListesi />;
  const s = sinavBul(sinav);
  if (!s) return <p className="empty">Böyle bir sınav yok. <a href={tabanaEkle("/cikmis")}>Tüm çıkmış sınavlar</a></p>;
  return <SinavSayfasi key={s.id} sinav={s} />;
}
