// /tanitim: sitenin ne işe yaradığını, kimler için olduğunu ve nasıl
// kullanılacağını anlatan sayfa. /sss: sık sorulanlar.

import { useEffect } from "react";
import { href } from "../lib/router";
import { Markdown } from "../components/Markdown";
import { SSS } from "../sss";
import { TANITIM_GORULDU } from "../components/Shell";

const KITLELER = [
  {
    baslik: "Girişimcilik dersini alan öğrenciler",
    metin: "Vize ve finalden önce kitabın bölüm sonu sorularını ve çıkmış soruları karışık sırayla çöz, soru kalıplarını tanı. Yanlış yaptıkların aralıklı tekrarla yeniden karşına çıkar.",
  },
  {
    baslik: "KOSGEB girişimcilik eğitimine hazırlananlar",
    metin: "Kitabın ilk yedi ünitesindeki bütün \"Kendimizi Sınayalım\" soruları ve aynı konulardan türetilmiş yüzlerce soru tek yerde.",
  },
  {
    baslik: "Kısa sürede çok soru görmek isteyenler",
    metin: "Karma testte 10, 20, 30 ya da 50 soruluk bir test kur; her soruda şıkların yeri değişir, ezber değil anlayış sınanır.",
  },
];

const ADIMLAR = [
  {
    baslik: "1. Karma test çöz",
    metin: "Üniteleri, kaynağı (GES, Çıkmış, Türetilmiş ya da yalnız gerçek sorular) ve soru sayısını seç. Sorular karışık sırayla, şıklar karışık yerlerde gelir; sonunda puanını ve yanlışlarını görürsün.",
    bag: { page: "pratik" } as const,
    bagMetni: "Karma teste git",
  },
  {
    baslik: "2. Soru havuzunda ünite ünite çalış",
    metin: "Bir ünite seç; soruları kitap sırasıyla ya da karışık gör. Çözmediklerini ya da yanlış yaptıklarını süz. Her cevaptan sonra kitaba dayanan kısa bir açıklama çıkar.",
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
        <h2>Girişimcilik sorularını karışık sırayla çöz</h2>
        <p>
          Girişimcilik Pratik, KOSGEB Girişimcilik El Kitabı'na dayanan ücretsiz ve açık kaynaklı bir soru çalışma sitesi. Kitabın
          bölüm sonu soruları (GES), geçmiş sınavlarda çıkmış sorular ve aynı konulardan türetilmiş sorular etiketli olarak tek
          yerde; sorular ve şıklar her seferinde karışık gelir.
        </p>
        <div className="tanitim-dugmeler">
          <a className="buton primary" href={href({ page: "pratik" })}>Karma teste başla</a>
          <a className="buton" href={href({ page: "sorular" })}>Soru havuzu</a>
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
          <li><strong>Ezber değil kalıp:</strong> sorular ve şıklar her seferinde yer değiştirir.</li>
          <li><strong>Gerçek sorulara odak:</strong> istersen türetilmiş soruları gizleyip yalnız kitap ve çıkmış sorularla çalışırsın.</li>
          <li><strong>Unutmadan pekiştirme:</strong> yanlışların, unutmaya başladığın aralıklarla yeniden karşına çıkar.</li>
          <li><strong>Gizlilik:</strong> reklam ve takip çerezi yok.</li>
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
