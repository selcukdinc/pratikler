// Scrum etkinlikleri ve artefaktlarıyla ilgili hesaplı şekiller: time-box hesaplayıcı
// (G-S6-01) ve DoD kurucu (G-S8-01). Saf hesaplar ayrı işlevlerdedir ve test edilir.
import { useState } from "react";

// ---------------- G-S6-01: time-box hesaplayıcı ----------------

export interface TimeboxSonucu {
  planning: number;
  review: number;
  retro: number;
  daily: number;
  toplam: number;
  sprintSaat: number;
  oran: number;
}

// Rehber'in bir aylık Sprint (4 hafta) için verdiği üst sınırlar, Sprint uzunluğuyla
// orantılı küçültülür (sahadaki yaygın kural). Daily her iş günü 15 dakika; iş günü 8 saat.
export function timebox(hafta: number): TimeboxSonucu {
  const k = hafta / 4;
  const gun = hafta * 5;
  const planning = 8 * k;
  const review = 4 * k;
  const retro = 3 * k;
  const daily = gun * 0.25;
  const toplam = planning + review + retro + daily;
  const sprintSaat = gun * 8;
  return {
    planning,
    review,
    retro,
    daily,
    toplam,
    sprintSaat,
    oran: toplam / sprintSaat,
  };
}

const saat = (x: number) =>
  Number.isInteger(x) ? String(x) : x.toFixed(1).replace(".", ",");

export function TimeboxHesap() {
  const [hafta, setHafta] = useState(2);
  const t = timebox(hafta);
  const satirlar: [string, number][] = [
    ["Sprint Planning", t.planning],
    ["Daily Scrum'lar (toplam)", t.daily],
    ["Sprint Review", t.review],
    ["Sprint Retrospective", t.retro],
  ];
  return (
    <div className="ag">
      <div className="ag-satir">
        <span>Sprint uzunluğu</span>
        <div className="ag-secim" role="group" aria-label="Sprint uzunluğu">
          {[1, 2, 3, 4].map((h) => (
            <button
              key={h}
              type="button"
              className="cip"
              aria-pressed={hafta === h}
              onClick={() => setHafta(h)}
            >
              {h} hafta
            </button>
          ))}
        </div>
      </div>
      <div className="ag-izgara">
        {satirlar.map(([ad, s]) => (
          <div key={ad} className="ag-kutu">
            <h4>{ad}</h4>
            <span className="ag-olcu">
              {saat(s)} <small>saat</small>
            </span>
            <div className="ag-cubuk" aria-hidden="true">
              <span style={{ width: `${(s / 8) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="ag-sonuc">
        {hafta} haftalık Sprint {t.sprintSaat} çalışma saati. Etkinlikler en
        fazla {saat(t.toplam)} saat tutar: Sprint'in %{saat(t.oran * 100)}'i.
      </p>
      <p className="ag-not">
        Rehber yalnızca bir aylık Sprint için üst sınırları verir (8, 4, 3 saat
        ve günde 15 dakika); kısa Sprint'lerde orantılı küçültmek sahadaki
        yaygın kuraldır. Bu yüzden pay her uzunlukta aynıdır: kısa Sprint daha
        az toplantı değil, daha sık ve daha kısa toplantı demektir. Time-box bir
        üst sınırdır; amacına ulaşan etkinlik erken biter.
      </p>
    </div>
  );
}

// ---------------- G-S8-01: DoD kurucu ----------------

export type MaddeTuru = "dod" | "kabul" | "baska";

export interface Madde {
  id: string;
  metin: string;
  tur: MaddeTuru;
  // "Alerjen filtresi" öğesi bu maddeyi karşılıyor mu (yalnızca DoD maddeleri için)
  karsiliyor?: boolean;
  // Organizasyon standardı: her takımın DoD'unda en az olarak bulunur
  standart?: true;
  neden: string;
}

export const MADDELER: Madde[] = [
  {
    id: "guvenlik",
    metin: "Güvenlik taramasından temiz geçti",
    tur: "dod",
    karsiliyor: true,
    standart: true,
    neden: "Organizasyonun standardı: bütün takımlar en az olarak izler.",
  },
  {
    id: "inceleme",
    metin: "Kod incelemesinden geçti",
    tur: "dod",
    karsiliyor: true,
    neden: "Her öğe için geçerli kalite koşulu.",
  },
  {
    id: "test",
    metin: "Otomatik testler yazıldı ve hepsi geçiyor",
    tur: "dod",
    karsiliyor: true,
    neden: "Her öğe için geçerli kalite koşulu.",
  },
  {
    id: "ortam",
    metin:
      "Test ortamına kuruldu ve öteki işlerle birlikte çalıştığı doğrulandı",
    tur: "dod",
    karsiliyor: false,
    neden: "Increment'in öncekilerle birlikte çalıştığı doğrulanmalı.",
  },
  {
    id: "erisilebilirlik",
    metin: "Ekran okuyucuyla denendi",
    tur: "dod",
    karsiliyor: false,
    neden: "Squad bunu bir Retro'dan sonra DoD'a ekledi.",
  },
  {
    id: "belge",
    metin: "Kullanıcı yardım sayfası güncellendi",
    tur: "dod",
    karsiliyor: true,
    neden: "Belgeleme de her öğe için ortak bir koşul olabilir.",
  },
  {
    id: "fistik",
    metin: "Fıstık seçilince fıstıklı yemekler listeden çıkar",
    tur: "kabul",
    neden: 'Bu bir kabul ölçütü: yalnızca "alerjen filtresi" öğesine özel.',
  },
  {
    id: "sira",
    metin: "Product Owner öğeyi ilk sıraya koydu",
    tur: "baska",
    neden: "Sıralama PO'nun kararıdır; kaliteyle ilgisi yok.",
  },
  {
    id: "puan",
    metin: "Öğe 5 puan olarak tahmin edildi",
    tur: "baska",
    neden: "Tahmin bir planlama bilgisidir, bitmişliğin ölçüsü değil.",
  },
];

export interface DodSonucu {
  done: boolean;
  eksik: Madde[];
  yanlis: Madde[];
  standartEksik: boolean;
}

// Seçilen maddelerle kurulan DoD'a göre "alerjen filtresi" öğesi Done mı?
export function dodSonucu(secili: string[]): DodSonucu {
  const m = MADDELER.filter((x) => secili.includes(x.id));
  const dod = m.filter((x) => x.tur === "dod");
  const eksik = dod.filter((x) => !x.karsiliyor);
  const yanlis = m.filter((x) => x.tur !== "dod");
  const standartEksik = MADDELER.some(
    (x) => x.standart && !secili.includes(x.id),
  );
  return {
    done: dod.length > 0 && eksik.length === 0 && !standartEksik,
    eksik,
    yanlis,
    standartEksik,
  };
}

export function DodKurucu() {
  const [secili, setSecili] = useState<string[]>(["guvenlik"]);
  const s = dodSonucu(secili);
  const degistir = (id: string) =>
    setSecili(
      secili.includes(id) ? secili.filter((x) => x !== id) : [...secili, id],
    );
  return (
    <div className="ag">
      <p className="ag-not">
        1. Squad'ın Definition of Done'ına girecek maddeleri seç.
      </p>
      <ol className="ag-liste">
        {MADDELER.map((x) => {
          const on = secili.includes(x.id);
          return (
            <li key={x.id} className="ag-kutu">
              <label>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => degistir(x.id)}
                />
                <span>
                  {x.metin}
                  {x.standart && (
                    <em className="ag-not"> (organizasyon standardı)</em>
                  )}
                </span>
              </label>
              {on && x.tur !== "dod" && (
                <span className="ag-sonuc ag-kotu">
                  DoD maddesi değil. {x.neden}
                </span>
              )}
              {!on && x.standart && (
                <span className="ag-sonuc ag-kotu">
                  Organizasyonun standardı her takımın DoD'unda en az olarak
                  bulunur.
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <p className="ag-not">
        2. "Alerjen filtresi" öğesi Sprint sonunda şu durumda: kod incelendi,
        testler geçiyor, güvenlik taraması temiz, yardım sayfası güncel; ama
        test ortamına kurulmadı ve ekran okuyucuyla denenmedi.
      </p>
      {secili.length < 2 ? (
        <p className="ag-sonuc">
          DoD'a en az bir madde daha seç; öğenin Done olup olmadığı burada
          görünecek.
        </p>
      ) : (
        <p className={`ag-sonuc ${s.done ? "ag-iyi" : "ag-kotu"}`}>
          {s.standartEksik
            ? "DoD organizasyon standardını içermiyor; önce onu ekle."
            : s.done
              ? s.yanlis.length
                ? "Senin DoD'una göre Done; ama listede DoD olmayan maddeler var, onları çıkar."
                : "Senin DoD'una göre Done: Increment'in parçası olur ve Review'da gösterilebilir. Ama eksik bir DoD, \"bitti\" sözcüğünü ucuzlatır; kurulmamış ve denenmemiş bir özellik gerçekten kullanılabilir mi?"
              : `Done değil. Karşılanmayan: ${s.eksik.map((x) => x.metin.toLocaleLowerCase("tr")).join("; ")}. Öğe Increment'e girmez, Review'da gösterilmez ve Product Backlog'a döner.`}
        </p>
      )}
    </div>
  );
}
