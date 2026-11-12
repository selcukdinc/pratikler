// /tanitim: sitenin ne işe yaradığını, kimler için olduğunu ve nasıl
// kullanılacağını anlatan sayfa. /sss: sık sorulanlar.

import { useEffect } from "react";
import { PRATIK } from "../lib/pratik";
import { href } from "../lib/router";
import { Markdown } from "../components/Markdown";
import { SSS } from "../sss";
import { TANITIM_GORULDU } from "../components/Shell";
import { BAGIMSIZLIK_BASLIK, BAGIMSIZLIK_METNI } from "../lib/bagimsizlik";

const KITLELER = PRATIK.tanitim.kitleler;

const GENEL_ADIMLAR = [
  {
    baslik: "1. Karma test çöz",
    metin: `Üniteleri, kaynağı (${PRATIK.etiketler.map((e) => e.ad).join(", ")}) ve soru sayısını seç. Sorular karışık sırayla, şıklar karışık yerlerde gelir; sonunda puanını ve yanlışlarını görürsün.`,
    bag: { page: "pratik" } as const,
    bagMetni: "Karma teste git",
  },
  {
    baslik: "2. Soru havuzunda ünite ünite çalış",
    metin: "Bir ünite seç; soruları kaynak sırasıyla ya da karışık gör. Çözmediklerini ya da yanlış yaptıklarını süz. Her cevaptan sonra kaynağa dayanan kısa bir açıklama çıkar.",
    bag: { page: "sorular" } as const,
    bagMetni: "Soru havuzunu aç",
  },
  {
    baslik: "3. Yanlışlarını aralıklı tekrarla pekiştir",
    metin: "Yanlış yaptığın soru ertesi gün Tekrar sayfasına düşer; doğru bildikçe 3, 7, 14 ve 30 gün arayla yeniden gelir. Aynı kavramdan henüz görmediğin sorular da eklenir.",
    bag: { page: "tekrar" } as const,
    bagMetni: "Tekrar sayfasını aç",
  },
  {
    baslik: "4. İlerlemeni izle",
    metin: "Hangi ünitede ne kadar soru çözdüğünü, doğru oranını ve zayıf kavramlarını İlerlemem sayfasında görürsün. Günlük hedefini Ayarlar'dan seç.",
    bag: { page: "ilerleme" } as const,
    bagMetni: "İlerlemene bak",
  },
];

// Pratik kendi adımlarını verdiyse onlar (ör. Git: dersler, terminal, sandbox)
const ADIMLAR = PRATIK.tanitim.adimlar
  ? PRATIK.tanitim.adimlar.map((a) => ({ baslik: a.baslik, metin: a.metin, bag: { page: a.sayfa } as const, bagMetni: a.bagMetni }))
  : GENEL_ADIMLAR;

const ARTILAR = PRATIK.tanitim.artilar ?? [
  { baslik: "Ezber değil kalıp:", metin: "sorular ve şıklar her seferinde yer değiştirir." },
  { baslik: "Gerçek sorulara odak:", metin: "istersen türetilmiş soruları gizleyip yalnız kitap ve çıkmış sorularla çalışırsın." },
  { baslik: "Unutmadan pekiştirme:", metin: "yanlışların, unutmaya başladığın aralıklarla yeniden karşına çıkar." },
  { baslik: "Gizlilik:", metin: "reklam ve takip çerezi yok." },
];

export function Tanitim() {
  useEffect(() => {
    try {
      localStorage.setItem(TANITIM_GORULDU, "1");
    } catch {
      // gizli pencere
    }
  }, []);
  return (
    <div className="tanitim">
      <header className="tanitim-ust">
        <h2>{PRATIK.tanitim.baslik}</h2>
        <p>{PRATIK.tanitim.giris}</p>
        <p className="tanitim-bagimsizlik">
          <strong>{BAGIMSIZLIK_BASLIK}</strong> {BAGIMSIZLIK_METNI}
        </p>
        <div className="tanitim-dugmeler">
          {PRATIK.tanitim.adimlar ? (
            <>
              <a className="buton primary" href={href({ page: "ders" })}>Konu anlatımlarına başla</a>
              {PRATIK.tanitim.adimlar.some((a) => a.sayfa === "sandbox") && <a className="buton" href={href({ page: "sandbox" })}>Sandbox'ı aç</a>}
            </>
          ) : (
            <>
              <a className="buton primary" href={href({ page: "pratik" })}>Karma teste başla</a>
              <a className="buton" href={href({ page: "sorular" })}>Soru havuzu</a>
            </>
          )}
        </div>
      </header>

      <section>
        <h3>Kimler için?</h3>
        <div className="kitleler">
          {KITLELER.map((k) => (
            <div key={k.baslik} className="kitle">
              <strong>{k.baslik}</strong>
              <p>{k.metin}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Nasıl kullanılır?</h3>
        <ol className="adimlar adimlar-metin">
          {ADIMLAR.map((a) => (
            <li key={a.baslik}>
              <div>
                <h4>{a.baslik}</h4>
                <p>{a.metin}</p>
                <a href={href(a.bag)}>{a.bagMetni} →</a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="tanitim-alt">
        <h3>Senin için ne değişir?</h3>
        <ul>
          {ARTILAR.map((a) => <li key={a.baslik}><strong>{a.baslik}</strong> {a.metin}</li>)}
        </ul>
        <p>
          Aklına takılan bir şey mi var? <a href={href({ page: "sss" })}>Sık sorulan sorulara</a> göz at.
        </p>
      </section>
    </div>
  );
}

export function Sss() {
  return (
    <div className="sss">
      <p className="hint">Sorunun cevabı burada yoksa giriş yapıp Mesajlarım'dan yöneticiye yazabilirsin.</p>
      {SSS.map((b) => (
        <section key={b.baslik}>
          <h3>{b.baslik}</h3>
          {b.sorular.map((s) => (
            <details key={s.soru} className="sss-soru">
              <summary>{s.soru}</summary>
              <Markdown text={s.cevap} />
            </details>
          ))}
        </section>
      ))}
    </div>
  );
}
