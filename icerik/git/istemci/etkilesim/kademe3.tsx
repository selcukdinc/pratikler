// Kademe 3 (Ü10-11) etkileşimli şekilleri: fetch ile pull'un farkı, merge ile
// rebase'in karşılaştırması ve etkileşimli rebase listesi.
import { useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

type Ozellik = { g: Gorsel };

function Secim<T extends string>({ ad, secenekler, deger, degis }: { ad: string; secenekler: [T, string][]; deger: T; degis: (v: T) => void }) {
  return (
    <div className="ge-secim" role="group" aria-label={ad}>
      {secenekler.map(([v, yazi]) => (
        <button key={v} type="button" className="cip" aria-pressed={deger === v} onClick={() => degis(v)}>
          {yazi}
        </button>
      ))}
    </div>
  );
}

interface C {
  id: string;
  kim: "sen" | "ayse";
  yeni?: boolean;
}

const Seri = ({ l, bos }: { l: C[]; bos?: string }) => (
  <div className="ge-seri">
    {l.length ? l.map((c, i) => <span key={c.id + i} className={`ge-nokta ge-${c.kim}${c.yeni ? " ge-yeni" : ""}`}>{c.id}</span>) : <em>{bos}</em>}
  </div>
);

// ---------------- G-H10-01: fetch ve pull ----------------

interface Durum10 {
  github: C[];
  izleme: C[];
  yerel: C[];
  sayac: number;
  mesaj: string;
}

const A: C = { id: "A", kim: "sen" };
const BASLANGIC10: Durum10 = {
  github: [A],
  izleme: [A],
  yerel: [A],
  sayac: 1,
  mesaj: "Üç kutu da aynı: GitHub'daki main, senin origin/main'in ve senin main'in A'yı gösteriyor.",
};

const icinde = (l: C[], c: C) => l.some((x) => x.id === c.id);

export function FetchPull(_: Ozellik) {
  const [d, setD] = useState<Durum10>(BASLANGIC10);
  const harf = String.fromCharCode(65 + d.sayac);
  const ileride = d.yerel.filter((c) => !icinde(d.izleme, c)).length;
  const geride = d.izleme.filter((c) => !icinde(d.yerel, c)).length;
  const ayse = () =>
    setD({ ...d, github: [...d.github, { id: harf, kim: "ayse" }], sayac: d.sayac + 1, mesaj: `Ayşe ${harf} commit'ini push etti. Senin bilgisayarında hiçbir şey değişmedi: origin/main hâlâ eski yeri gösteriyor.` });
  const commit = () =>
    setD({ ...d, yerel: [...d.yerel, { id: harf, kim: "sen" }], sayac: d.sayac + 1, mesaj: `git commit: ${harf} yalnızca senin main'inde.` });
  const fetch = () => {
    const yeni = d.github.filter((c) => !icinde(d.izleme, c));
    setD({
      ...d,
      izleme: d.github,
      mesaj: yeni.length
        ? `git fetch: ${yeni.map((c) => c.id).join(", ")} indirildi ve yalnızca origin/main ilerledi. Senin main'in ve dosyaların yerinde; ne geldiğine git log main..origin/main ile bakabilirsin.`
        : "git fetch: indirilecek yeni bir şey yok.",
    });
  };
  const birlestir = (izleme: C[], onEk: string) => {
    const benim = d.yerel.filter((c) => !icinde(izleme, c));
    if (!izleme.some((c) => !icinde(d.yerel, c))) return { yerel: d.yerel, mesaj: `${onEk}Already up to date.` };
    if (!benim.length) return { yerel: izleme, mesaj: `${onEk}Fast-forward: main origin/main'in yerine ileri sarıldı.` };
    return { yerel: [...izleme, ...benim, { id: "M", kim: "sen" as const, yeni: true }], mesaj: `${onEk}İki taraf da ilerlemişti; birleştirme commit'i M oluştu. (pull.rebase açık olsaydı ${benim.map((c) => c.id).join(", ")} origin/main'in üstüne taşınırdı.)` };
  };
  const merge = () => {
    const r = birlestir(d.izleme, "git merge origin/main: ");
    setD({ ...d, yerel: r.yerel, mesaj: r.mesaj });
  };
  const pull = () => {
    const r = birlestir(d.github, "git pull = fetch + merge. ");
    setD({ ...d, izleme: d.github, yerel: r.yerel, mesaj: r.mesaj });
  };
  const push = () => {
    if (d.github.some((c) => !icinde(d.yerel, c))) return setD({ ...d, mesaj: "git push reddedildi: GitHub'da sende olmayan commit var. Önce fetch ve merge (ya da pull)." });
    if (!d.yerel.some((c) => !icinde(d.github, c))) return setD({ ...d, mesaj: "git push: Everything up-to-date." });
    setD({ ...d, github: d.yerel, izleme: d.yerel, mesaj: "git push: GitHub'daki main ve senin origin/main'in birlikte ilerledi." });
  };
  return (
    <div className="ge">
      <div className="ge-uckutu">
        <div className="ge-kutu"><strong>GitHub: main</strong><Seri l={d.github} /></div>
        <div className="ge-kutu ge-izleme"><strong>Sende: origin/main</strong><span className="ge-durum">son görülen hâl</span><Seri l={d.izleme} /></div>
        <div className="ge-kutu"><strong>Sende: main</strong><span className="ge-durum">{ileride || geride ? `${ileride} ileride, ${geride} geride` : "origin/main ile aynı"}</span><Seri l={d.yerel} /></div>
      </div>
      <div className="ge-satir">
        <button type="button" className="cip" onClick={ayse}>Ayşe push etsin</button>
        <button type="button" className="cip" onClick={commit}>git commit</button>
        <button type="button" className="cip" onClick={fetch}>git fetch</button>
        <button type="button" className="cip" onClick={merge}>git merge origin/main</button>
        <button type="button" className="cip" onClick={pull}>git pull</button>
        <button type="button" className="cip" onClick={push}>git push</button>
        <button type="button" onClick={() => setD(BASLANGIC10)}>Baştan</button>
      </div>
      <p className="ge-sonuc" aria-live="polite">{d.mesaj}</p>
    </div>
  );
}

// ---------------- G-H11-01: merge mi rebase mi ----------------

export function MergeRebase(_: Ozellik) {
  const [kip, setKip] = useState<"once" | "merge" | "rebase">("once");
  const main: C[] = [{ id: "A", kim: "sen" }, { id: "B", kim: "sen" }, { id: "E", kim: "ayse" }, { id: "F", kim: "ayse" }];
  const ozellik: C[] = [{ id: "C", kim: "sen" }, { id: "D", kim: "sen" }];
  return (
    <div className="ge">
      <Secim ad="Görünüm" secenekler={[["once", "Önce"], ["merge", "git merge main"], ["rebase", "git rebase main"]]} deger={kip} degis={setKip} />
      <div className="ge-dal-izgara" aria-label="Commit grafiği">
        <div className="ge-serit">
          <span className="ge-serit-ad">main</span>
          <Seri l={main} />
        </div>
        <div className="ge-serit">
          <span className="ge-serit-ad">ozellik</span>
          {kip === "once" && <><span className="ge-ayrilma">B'den ayrıldı →</span><Seri l={ozellik} /></>}
          {kip === "merge" && <><span className="ge-ayrilma">B'den ayrıldı →</span><Seri l={[...ozellik, { id: "M", kim: "sen", yeni: true }]} /></>}
          {kip === "rebase" && <><span className="ge-ayrilma">F'nin üstünde →</span><Seri l={[{ id: "C'", kim: "sen", yeni: true }, { id: "D'", kim: "sen", yeni: true }]} /></>}
        </div>
      </div>
      <p className="ge-sonuc" aria-live="polite">
        {kip === "once"
          ? "ozellik dalı B'den ayrıldıktan sonra main'e Ayşe'nin E ve F commit'leri geldi. ozellik'i güncellemenin iki yolu var: yukarıdan birini seç."
          : kip === "merge"
            ? "Merge: C ve D olduğu gibi kaldı, üstüne iki ebeveynli M (D ve F) geldi. Hiçbir hash değişmedi; geçmiş gerçekte olduğu gibi çatallı görünür. Paylaşılmış dallarda güvenlidir."
            : "Rebase: C ve D, F'nin üstüne yeniden yazıldı. İçerik aynı ama ebeveyn değiştiği için hash'ler yeni (C', D'). Geçmiş tek çizgi. Eski C ve D'yi başkası çektiyse onun geçmişi seninkiyle ayrışır: yalnızca kendi dalında yap."}
      </p>
    </div>
  );
}

// ---------------- G-H11-02: etkileşimli rebase listesi ----------------

type Islem = "pick" | "reword" | "squash" | "fixup" | "drop";
interface Satir {
  hash: string;
  mesaj: string;
  islem: Islem;
}

const ILK_LISTE: Satir[] = [
  { hash: "a1f3c20", mesaj: "Giriş formu", islem: "pick" },
  { hash: "7be0d14", mesaj: "yazım hatası", islem: "pick" },
  { hash: "c93a5e1", mesaj: "deneme console.log", islem: "pick" },
  { hash: "e02b7f9", mesaj: "Giris testleri", islem: "pick" },
  { hash: "4d8c6aa", mesaj: "bir yazım hatası daha", islem: "pick" },
];

const ISLEM_ACIKLAMA: Record<Islem, string> = {
  pick: "olduğu gibi al",
  reword: "al, mesajı değiştir",
  squash: "öncekine kat, mesajları birleştir",
  fixup: "öncekine kat, mesajını at",
  drop: "geçmişten çıkar",
};

function sonuc(l: Satir[]): { mesaj: string; parca: number; hata?: string }[] | string {
  const out: { mesaj: string; parca: number }[] = [];
  for (const s of l) {
    if (s.islem === "drop") continue;
    if (s.islem === "squash" || s.islem === "fixup") {
      const onceki = out[out.length - 1];
      if (!onceki) return `error: cannot '${s.islem}' without a previous commit. İlk satır squash ya da fixup olamaz.`;
      onceki.parca++;
      if (s.islem === "squash") onceki.mesaj += ` + ${s.mesaj}`;
      continue;
    }
    out.push({ mesaj: s.islem === "reword" ? (s.mesaj === "Giris testleri" ? "Giriş formu testleri" : `${s.mesaj} (yeni mesaj)`) : s.mesaj, parca: 1 });
  }
  return out;
}

export function RebaseListesi(_: Ozellik) {
  const [liste, setListe] = useState(ILK_LISTE);
  const r = sonuc(liste);
  const degis = (i: number, islem: Islem) => setListe(liste.map((s, j) => (j === i ? { ...s, islem } : s)));
  const tasi = (i: number, y: number) => {
    const j = i + y;
    if (j < 0 || j >= liste.length) return;
    const l = [...liste];
    [l[i], l[j]] = [l[j]!, l[i]!];
    setListe(l);
  };
  const temiz = typeof r !== "string" && r.length === 2 && r.every((c) => !/yazım|console/.test(c.mesaj)) && r.some((c) => c.mesaj.includes("testleri"));
  return (
    <div className="ge">
      <p className="ge-not"><code>git rebase -i main</code> bu listeyi açtı (en eski en üstte). Her satırın komutunu seç, okla yerini değiştir. Hedef: PR'da yalnızca iki temiz commit kalsın, deneme kodu gitsin.</p>
      <ol className="ge-todo">
        {liste.map((s, i) => (
          <li key={s.hash} className={`ge-todo-${s.islem}`}>
            <select aria-label={`${s.hash} için komut`} value={s.islem} onChange={(e) => degis(i, e.target.value as Islem)}>
              {(Object.keys(ISLEM_ACIKLAMA) as Islem[]).map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
            <span className="mono">{s.hash}</span>
            <span className="ge-todo-mesaj">{s.mesaj}</span>
            <span className="ge-todo-ne">{ISLEM_ACIKLAMA[s.islem]}</span>
            <span className="ge-todo-oklar">
              <button type="button" className="cip" aria-label="Yukarı taşı" disabled={i === 0} onClick={() => tasi(i, -1)}>↑</button>
              <button type="button" className="cip" aria-label="Aşağı taşı" disabled={i === liste.length - 1} onClick={() => tasi(i, 1)}>↓</button>
            </span>
          </li>
        ))}
      </ol>
      <div className="ge-kutu">
        <strong>Rebase sonrası geçmiş</strong>
        {typeof r === "string" ? (
          <p className="ge-kotu">{r}</p>
        ) : (
          <ol className="ge-todo-sonuc">
            {r.map((c, i) => <li key={i}>{c.mesaj}{c.parca > 1 ? ` (${c.parca} commit birleşti)` : ""}</li>)}
          </ol>
        )}
      </div>
      <div className="ge-satir">
        <button type="button" onClick={() => setListe(ILK_LISTE)}>Baştan</button>
      </div>
      <p className="ge-sonuc" aria-live="polite">
        {temiz
          ? "Harika: iki anlamlı commit kaldı. Yazım düzeltmeleri fixup ile ilgili commit'e katıldı, deneme kodu drop ile çıktı. Bu commit'lerin hepsinin hash'i yenilendi."
          : "İpucu: \"bir yazım hatası daha\"yı Giriş formunun hemen altına taşıyıp fixup yap; console.log commit'ini drop et."}
      </p>
    </div>
  );
}
