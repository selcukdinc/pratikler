// Backlog pratiğinin hesaplı şekilleri: araç çevirmeni (G-S2-02), story map ve sürüm
// dilimi (G-S3-02), story kurucu (G-S4-01). Saf denetimler ayrı işlevlerdedir ve test
// edilir (ozel.test.ts). Hepsi tarayıcıda çalışır, istek atmaz.
import { useState } from "react";

// ---------------- G-S2-02: araç çevirmeni ----------------

export const SEVIYE_ADLARI = ["Theme / girişim", "Epic", "Feature", "Story", "Task"] as const;

// Her aracın varsayılan düzeninde seviyelerin karşılığı; null: varsayılan düzende yok
export const ARACLAR: { ad: string; not: string; seviyeler: (string | null)[] }[] = [
  {
    ad: "SAFe",
    not: "Büyük çözümlerde epic ile feature arasında Capability seviyesi de vardır. Epic portföy düzeyinde bir iş gerekçesiyle onaylanır.",
    seviyeler: ["Strategic theme", "Epic (→ Capability)", "Feature", "Story", "Task"],
  },
  {
    ad: "Azure Boards (Agile)",
    not: "Scrum şablonunda User Story yerine Product Backlog Item, Basic şablonunda Issue geçer.",
    seviyeler: [null, "Epic", "Feature", "User Story", "Task"],
  },
  {
    ad: "Jira",
    not: "Varsayılan düzende story, task ve bug aynı seviyededir; epic'in üstüne seviye eklemek ücretli planlarda ya da özel ayarla mümkündür.",
    seviyeler: [null, "Epic", null, "Story / Task / Bug", "Sub-task"],
  },
  {
    ad: "ClickUp",
    not: "Kendi düzeni Space → Folder → List → Task → Subtask'tır. Epic ve feature genelde özel görev türleri (custom task types) ya da klasör ve listelerle kurulur, ilişkilerle bağlanır.",
    seviyeler: ["Space ya da Folder", "Özel görev türü: Epic", "Özel görev türü: Feature", "Task", "Subtask"],
  },
  {
    ad: "Scrum Rehberi",
    not: "Rehber yalnızca Product Backlog öğesinden söz eder; hiyerarşi takımın seçimidir.",
    seviyeler: [null, null, null, "Product Backlog öğesi", "Sprint Planning'de bir günlük ya da daha kısa iş parçaları"],
  },
];

export function AracCevirmeni() {
  const [secili, setSecili] = useState(1);
  const a = ARACLAR[secili]!;
  return (
    <div className="ag">
      <div className="ag-secim" role="group" aria-label="Araç ya da çerçeve">
        {ARACLAR.map((x, i) => (
          <button key={x.ad} type="button" className="cip" aria-pressed={i === secili} onClick={() => setSecili(i)}>
            {x.ad}
          </button>
        ))}
      </div>
      <ol className="ag-liste">
        {SEVIYE_ADLARI.map((s, i) => (
          <li key={s} className="ag-kutu bl-cevir-satir">
            <span className="ag-not">{s}</span>
            <strong>{a.seviyeler[i] ?? "—"}</strong>
          </li>
        ))}
      </ol>
      <p className="ag-sonuc">{a.not}</p>
    </div>
  );
}

// ---------------- G-S3-02: story map ve sürüm dilimi ----------------

export interface MapKart {
  id: string;
  metin: string;
  puan: number;
}

export const OMURGA: { ad: string; kartlar: MapKart[] }[] = [
  {
    ad: "Menüye bak",
    kartlar: [
      { id: "m1", metin: "Günün menüsünü gör", puan: 2 },
      { id: "m2", metin: "Alerjen bilgisini gör", puan: 3 },
      { id: "m3", metin: "Haftalık menü ve fotoğraflar", puan: 5 },
    ],
  },
  {
    ad: "Yemek seç",
    kartlar: [
      { id: "s1", metin: "Tek bir menüyü seç", puan: 2 },
      { id: "s2", metin: "Ek yemek (tatlı, içecek) ekle", puan: 3 },
      { id: "s3", metin: "Favori menüyü kaydet", puan: 5 },
    ],
  },
  {
    ad: "Öde",
    kartlar: [
      { id: "o1", metin: "Bakiyeden öde", puan: 3 },
      { id: "o2", metin: "Kartla bakiye yükle", puan: 5 },
      { id: "o3", metin: "Kupon ve indirim kullan", puan: 8 },
    ],
  },
  {
    ad: "Teslim al",
    kartlar: [
      { id: "t1", metin: "Sıra numarasını gör", puan: 2 },
      { id: "t2", metin: "Hazır olunca bildirim al", puan: 5 },
      { id: "t3", metin: "Teslim noktasını seç", puan: 5 },
    ],
  },
  {
    ad: "Değerlendir",
    kartlar: [
      { id: "d1", metin: "Yemeği tek dokunuşla puanla", puan: 2 },
      { id: "d2", metin: "Yorum yaz", puan: 3 },
      { id: "d3", metin: "Şikâyeti fotoğrafla bildir", puan: 5 },
    ],
  },
];

// Yolculuğu yürümek için şart adımlar (değerlendirme ilk sürümde olmasa da yolculuk tamamlanır)
export const SART_ADIMLAR = ["Menüye bak", "Yemek seç", "Öde", "Teslim al"];
export const KAPASITE = 16;

export interface DilimSonucu {
  puan: number;
  eksikAdimlar: string[];
  iskelet: boolean;
  kapasiteAsildi: boolean;
  // Bir adımı derinleştirip başka bir şart adımı boş bırakmak
  dikeyDerin: boolean;
}

export function dilimDegerlendir(secili: Iterable<string>): DilimSonucu {
  const s = new Set(secili);
  const puan = OMURGA.flatMap((a) => a.kartlar).filter((k) => s.has(k.id)).reduce((t, k) => t + k.puan, 0);
  const eksikAdimlar = OMURGA.filter((a) => SART_ADIMLAR.includes(a.ad) && !a.kartlar.some((k) => s.has(k.id))).map((a) => a.ad);
  const dikeyDerin = eksikAdimlar.length > 0 && OMURGA.some((a) => a.kartlar.filter((k) => s.has(k.id)).length >= 2);
  return { puan, eksikAdimlar, iskelet: eksikAdimlar.length === 0, kapasiteAsildi: puan > KAPASITE, dikeyDerin };
}

export function StoryMap() {
  const [secili, setSecili] = useState<Set<string>>(new Set());
  const d = dilimDegerlendir(secili);
  const degistir = (id: string) => {
    const y = new Set(secili);
    if (y.has(id)) y.delete(id);
    else y.add(id);
    setSecili(y);
  };
  let sonuc: string;
  let iyi = false;
  if (secili.size === 0) sonuc = "Kartlara dokunarak ilk sürümün dilimine al.";
  else if (d.kapasiteAsildi) sonuc = `Dilim ${d.puan} puan; squad'ın ilk sürüm için ayırdığı ${KAPASITE} puanı aşıyor. Bir adımı inceltmeyi dene.`;
  else if (!d.iskelet)
    sonuc = `Yolculuk yarım kalıyor: ${d.eksikAdimlar.join(", ")} adımında hiç kart yok. ${d.dikeyDerin ? "Bir adımı derinleştirmek yerine her adımdan en ince kartı al." : ""}`;
  else {
    iyi = true;
    sonuc = `Yürüyen iskelet: öğrenci ilk sürümde yemeğini baştan sona alabiliyor (${d.puan} / ${KAPASITE} puan).${secili.size > 4 ? " Kalan puanla en çok öğrenme getirecek kartı seçtin mi?" : ""}`;
  }
  return (
    <div className="ag">
      <p className="ag-not">Üstteki satır omurga: öğrencinin yolculuğu. Kartlar her adımın altında basitten zengine dizili. İlk sürüm {KAPASITE} puana sığmalı.</p>
      <div className="bl-harita">
        {OMURGA.map((a) => (
          <div key={a.ad} className="bl-sutun">
            <h4>{a.ad}</h4>
            {a.kartlar.map((k) => (
              <button key={k.id} type="button" className="cip bl-map-kart" aria-pressed={secili.has(k.id)} onClick={() => degistir(k.id)}>
                {k.metin} <small>{k.puan}</small>
              </button>
            ))}
          </div>
        ))}
      </div>
      <p className={`ag-sonuc ${secili.size === 0 ? "" : iyi ? "ag-iyi" : "ag-kotu"}`}>{sonuc}</p>
      {secili.size > 0 && (
        <div className="ag-satir">
          <button type="button" className="cip" onClick={() => setSecili(new Set())}>
            Baştan başla
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------- G-S4-01: story kurucu ----------------

export const ROLLER = ["bir yurt öğrencisi", "bir akademisyen", "bir yemekhane görevlisi", "bir kullanıcı", "bir geliştirici", "sistem"];
export const ISTEKLER = [
  "akşam yemeğini önceden ayırtmak",
  "siparişimin hazır olduğunu bildirimle öğrenmek",
  "menüyü görmek, yemek ayırtmak ve bakiye yüklemek",
  "uygulamanın hızlı ve kullanışlı olmasını",
  "ödeme tablosuna indeks eklemek",
];
export const FAYDALAR = [
  "derse geç kaldığımda yemeksiz kalmayayım",
  "sırada beklemeyeyim",
  "ertesi gün kaç porsiyon pişireceğimi bileyim",
  "",
];

const GENEL_ROLLER = /^(bir )?(kullanıcı|geliştirici|sistem|admin|yazılımcı)$/i;
// \b Türkçe harfleri (ı, ş, ü...) kelime harfi saymaz; sınırlar \p{L} ile yazılır
const BELIRSIZ = /(?<!\p{L})(hızlı|kolay|kullanışlı|kullanıcı dostu|güzel|modern|esnek|basit)(?!\p{L})/iu;
const TEKNIK = /(?<!\p{L})(tablo|tablosu|tablosuna|indeks|veritabanı|servis|api|sunucu|kod)(?!\p{L})/iu;

export interface StoryDenetimi {
  uyarilar: string[];
  iyi: boolean;
}

export function storyDenetle(rol: string, istek: string, fayda: string): StoryDenetimi {
  const u: string[] = [];
  const r = rol.trim();
  const i = istek.trim();
  const f = fayda.trim();
  if (!r) u.push("Rol boş: kimin ihtiyacı?");
  else if (GENEL_ROLLER.test(r)) u.push(`"${r}" ihtiyacı olan gerçek bir kişiyi anlatmıyor; somut bir kullanıcı rolü yaz.`);
  if (!i) u.push("İstek boş: ne istiyor?");
  else {
    if (/(?<!\p{L})ve(?!\p{L})|,/u.test(i)) u.push("İstek birden çok şey içeriyor; her biri ayrı story olabilir.");
    if (BELIRSIZ.test(i)) u.push("İstekte ölçülemeyen bir kelime var (hızlı, kolay, kullanışlı...); ne kadar ve nasıl anlaşılacak?");
    if (TEKNIK.test(i)) u.push("İstek bir çözüm adımı gibi; kullanıcının ihtiyacını yaz, nasıl yapılacağını takıma bırak.");
  }
  if (!f) u.push("Fayda yok: neden istendiğini bilmeyen takım daha iyi bir çözüm öneremez.");
  return { uyarilar: u, iyi: u.length === 0 };
}

export function StoryKurucu() {
  const [rol, setRol] = useState(ROLLER[0]!);
  const [istek, setIstek] = useState(ISTEKLER[0]!);
  const [fayda, setFayda] = useState(FAYDALAR[0]!);
  const d = storyDenetle(rol, istek, fayda);
  const secim = (baslik: string, liste: string[], deger: string, ayarla: (x: string) => void) => (
    <div className="ag-kutu">
      <h4>{baslik}</h4>
      <div className="ag-secim" role="group" aria-label={baslik}>
        {liste.map((x) => (
          <button key={x || "yok"} type="button" className="cip" aria-pressed={x === deger} onClick={() => ayarla(x)}>
            {x || "(fayda yazma)"}
          </button>
        ))}
      </div>
      <input className="bl-girdi" value={deger} onChange={(e) => ayarla(e.target.value)} aria-label={`${baslik}: kendin yaz`} />
    </div>
  );
  const cumle = `${rol ? rol.charAt(0).toLocaleUpperCase("tr") + rol.slice(1) : "…"} olarak ${istek || "…"} istiyorum${fayda ? `, böylece ${fayda}` : ""}.`;
  return (
    <div className="ag">
      {secim("Kim? (rol)", ROLLER, rol, setRol)}
      {secim("Ne? (istek)", ISTEKLER, istek, setIstek)}
      {secim("Neden? (fayda)", FAYDALAR, fayda, setFayda)}
      <p className="bl-story">{cumle}</p>
      <div className={`ag-sonuc ${d.iyi ? "ag-iyi" : "ag-kotu"}`}>
        {d.iyi ? (
          "✓ Kalıp sağlam: somut rol, tek istek, açık fayda. Şimdi bunu takımla konuşma ve kabul kriteri zamanı."
        ) : (
          <ul className="bl-uyarilar">
            {d.uyarilar.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="ag-not">Bu denetim yalnızca kalıba bakar; bir story'nin gerçekten değerli olup olmadığını ancak kullanıcıyla ve takımla konuşmak gösterir.</p>
    </div>
  );
}
