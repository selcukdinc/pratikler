// Çatı sayfasının açılış gösterimi: her kitle için sitenin ne yaptığını kısa bir
// sahneyle canlandırır. Öğrenci soru çözer ve yanlışı tekrara düşer; akademisyen
// sınavın B grubunu ve cevap anahtarını alır; öğretmen soru havuzu bağlantısı paylaşır.
// Sahneler sırayla döner; bir sekmeye basılınca dönme durur. Hareket azaltma açıksa
// her sahne son hâliyle görünür.

import { useEffect, useState } from "react";
import { Daktilo, hareketAzaltilmis, useDaktilo } from "./Daktilo";

export const KITLELER = [
  { ad: "Öğrenci", kim: "sınava çalışan öğrenciler", sure: 9500 },
  { ad: "Akademisyen", kim: "sınav kağıdı hazırlayan akademisyenler", sure: 8500 },
  { ad: "Öğretmen", kim: "ödev ve tekrar veren öğretmenler", sure: 8500 },
] as const;

// Sahne başladığından beri geçen süre (ms); hareket azaltılmışsa hep "bitti"
function useSahneZamani(): number {
  const [t, setT] = useState(() => (hareketAzaltilmis() ? Infinity : 0));
  useEffect(() => {
    if (hareketAzaltilmis()) return;
    const bas = performance.now();
    const i = setInterval(() => setT(performance.now() - bas), 100);
    return () => clearInterval(i);
  }, []);
  return t;
}

const HARF = "ABCDE";

// Tıp Elektroniği, 2. ünite: te-u2-qrs
const SORU = "QRS kompleksi neyi temsil eder ve yaklaşık ne kadar sürer?";
const SIKLAR = [
  "Ventriküllerin depolarizasyonu, yaklaşık 0,08 s",
  "Atriyumların depolarizasyonu, yaklaşık 0,1 s",
  "His demetindeki iletim, yaklaşık 0,16 s",
  "Ventriküllerin depolarizasyonu, yaklaşık 0,4 s",
];

function OgrenciSahnesi() {
  const t = useSahneZamani();
  const soru = useDaktilo(SORU, { hiz: 32, gecikme: 300 });
  const isaret = t >= 4200;
  const denetim = t >= 4700 && t < 5600;
  const sonuc = t >= 5600;
  return (
    <div className="vitrin-sahne">
      <p className="vitrin-ust">Tıp Elektroniği, 2. ünite, ders notundan</p>
      <p className="vitrin-soru">
        <span className="sr-only">{SORU}</span>
        <Daktilo metin={soru.metin} imlec={!soru.bitti} />
      </p>
      <ol className={`vitrin-siklar${soru.bitti ? " acik" : ""}`} aria-hidden={!soru.bitti}>
        {SIKLAR.map((s, i) => (
          <li key={s} className={sonuc && i === 0 ? "dogru" : sonuc && i === 3 ? "yanlis" : undefined} style={{ transitionDelay: `${i * 70}ms` }}>
            <span className={`kabarcik${isaret && i === 3 ? " dolu" : ""}`} aria-hidden="true">{HARF[i]}</span>
            <span><span className="sik-metin">{s}</span></span>
          </li>
        ))}
      </ol>
      <p className="vitrin-durum" aria-live="polite">
        {denetim && <span className="parilti">Cevap denetleniyor</span>}
        {sonuc && (
          <>
            <strong>Yanlış.</strong> QRS ventriküllerin depolarizasyonudur ve yaklaşık 0,08 s sürer; 0,4 s QRST'nin süresidir.
            <span className="vitrin-not">Bu soru yarın Tekrar sayfanda yeniden karşına çıkacak.</span>
          </>
        )}
      </p>
    </div>
  );
}

const SINAV = [
  "QRS kompleksi neyi temsil eder?",
  "EEG'de alfa dalgasının frekans aralığı",
  "Wheatstone köprüsünün çıkış gerilimi",
  "Basınç sensörünün hassasiyeti (mV/mmHg)",
];
const A_CEVAP = ["A", "C", "B", "D"];
// B grubunda soruların yeni sırası ve şıkların karışmasıyla değişen cevaplar
const B_SIRA = [2, 0, 3, 1];
const B_CEVAP = ["D", "A", "B", "E"];

function AkademisyenSahnesi() {
  const t = useSahneZamani();
  const b = t >= 3000;
  const grup = useDaktilo(b ? "B grubu" : "A grubu", { hiz: 60 });
  const anahtar = t >= 5000;
  return (
    <div className="vitrin-sahne">
      <p className="vitrin-ust">Tıp Elektroniği vize sınavı</p>
      <p className="vitrin-grup">
        <span className="sr-only">{b ? "B grubu" : "A grubu"}</span>
        <Daktilo metin={grup.metin} imlec={!grup.bitti} />
      </p>
      <ol className="vitrin-kagit" style={{ height: `${SINAV.length * 2.4}em` }}>
        {SINAV.map((s, i) => {
          const sira = b ? B_SIRA.indexOf(i) : i;
          return (
            <li key={s} style={{ transform: `translateY(${sira * 2.4}em)` }}>
              <span className="vitrin-no">{sira + 1}.</span> {s}
            </li>
          );
        })}
      </ol>
      <div className={`vitrin-anahtar${anahtar ? " acik" : ""}`} aria-hidden={!anahtar}>
        <span>Cevap anahtarı</span>
        <span className="vitrin-cevaplar">
          {(b ? B_CEVAP : A_CEVAP).map((c, i) => <span key={i}>{i + 1}-{c}</span>)}
        </span>
        <span className="vitrin-dosyalar"><span>Word</span><span>PDF</span></span>
      </div>
    </div>
  );
}

const BAGLANTI = "pratikler.selcukdinc.dev/tipelektronigi/havuz/vize24";

function OgretmenSahnesi() {
  const t = useSahneZamani();
  const bag = useDaktilo(BAGLANTI, { hiz: 30, gecikme: 300 });
  const kopya = t >= 2900;
  const ogrenci = t >= 3700;
  const dogru = Number.isFinite(t) ? Math.max(0, Math.min(14, Math.floor((t - 4600) / 160))) : 14;
  return (
    <div className="vitrin-sahne">
      <p className="vitrin-ust">Sınav bu sorulardan gelecek</p>
      <p className="vitrin-baglanti">
        <span className="sr-only">{BAGLANTI}</span>
        <Daktilo metin={bag.metin} imlec={!bag.bitti} />
        <span className={`vitrin-kopya${kopya ? " acik" : ""}`}>Kopyalandı</span>
      </p>
      <div className={`vitrin-havuz${ogrenci ? " acik" : ""}`} aria-hidden={!ogrenci}>
        <p><strong>Hocanın seçtiği 24 soruyla çalışıyorsun.</strong> Soru havuzu, karma test ve tekrar yalnızca bu sorulardan gelir.</p>
        <div className="vitrin-cubuk" role="presentation"><span style={{ width: `${(dogru / 24) * 100}%` }} /></div>
        <p className="vitrin-not">{dogru} / 24 soru doğru çözüldü</p>
      </div>
    </div>
  );
}

const SAHNELER = [OgrenciSahnesi, AkademisyenSahnesi, OgretmenSahnesi];

// sec verilmezse sekmeler çizilmez; sahneyi çağıran taraf seçer (çatı sayfası)
export function Vitrin({ sahne, sec, donuyor = false }: { sahne: number; sec?: (i: number) => void; donuyor?: boolean }) {
  const Sahne = SAHNELER[sahne]!;
  return (
    <figure className="vitrin" aria-label={`Kısa gösterim: ${KITLELER[sahne]!.ad}`}>
      <div className="vitrin-kart">
        <Sahne key={sahne} />
      </div>
      {sec && (
        <figcaption>
          <div className="vitrin-sekmeler" role="tablist" aria-label="Kime göre göster">
            {KITLELER.map((k, i) => (
              <button key={k.ad} type="button" role="tab" aria-selected={i === sahne} onClick={() => sec(i)}>
                {k.ad}
                {i === sahne && donuyor && <span key={sahne} className="vitrin-sure" style={{ animationDuration: `${k.sure}ms` }} />}
              </button>
            ))}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
