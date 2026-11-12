// Gizli bilgi taraması ve sanal ödeme hizmeti (KafePay). GitHub'ın push protection'ı ve
// public depoları tarayan botlar bu tarayıcıyı kullanır. Anahtar biçimleri gerçek
// sağlayıcılarınkine benzer ama depoda gerçek biçimli değer durmaz: KafePay hayalidir,
// öteki biçimlerin örnek değerleri içerikte parçalardan birleştirilir.
import { commitAgaci, commitOku, gecmis, icerik, soy } from "./depo";
import { sha1, baytlar } from "./sha1";
import type { BulutAnahtari, Depo, Ortam } from "./tipler";
import { ayir } from "./yardim";

export const GIZLI_TURLER: { ad: string; desen: RegExp }[] = [
  { ad: "KafePay Live Secret Key", desen: /kp_live_[A-Za-z0-9]{24}/g },
  { ad: "GitHub Personal Access Token", desen: /ghp_[A-Za-z0-9]{36}/g },
  { ad: "Amazon AWS Access Key ID", desen: /AKIA[0-9A-Z]{16}/g },
  { ad: "Private Key", desen: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
];

export interface GizliBulgu {
  tur: string;
  deger: string;
  yol: string;
  satir: number;
  commit: string;
}

export function metindeGizli(metin: string): { tur: string; deger: string; satir: number }[] {
  const sonuc: { tur: string; deger: string; satir: number }[] = [];
  metin.split("\n").forEach((s, i) => {
    for (const t of GIZLI_TURLER) for (const m of s.matchAll(t.desen)) sonuc.push({ tur: t.ad, deger: m[0], satir: i + 1 });
  });
  return sonuc;
}

// "yeni" commit'lerin her birinde değişen ya da eklenen dosyalardaki gizli bilgiler
// (bilinen commit'lerden ulaşılanlar taranmaz; push'ta bilinen = uzaktaki dallar)
export function commitlerdekiGizliler(d: Depo, baslar: string[], bilinen: string[] = []): GizliBulgu[] {
  const bulgular: GizliBulgu[] = [];
  const gorulen = new Set<string>();
  for (const c of gecmis(d, baslar, bilinen.filter((h) => d.nesneler[h]))) {
    const n = commitOku(d, c);
    const agac = commitAgaci(d, c);
    const ebeveyn = n.ebeveynler[0] ? commitAgaci(d, n.ebeveynler[0]) : {};
    for (const [yol, h] of Object.entries(agac)) {
      if (ebeveyn[yol] === h) continue;
      for (const b of metindeGizli(icerik(d, h))) {
        const anahtar = `${b.tur}:${b.deger}:${yol}`;
        if (gorulen.has(anahtar)) continue;
        gorulen.add(anahtar);
        bulgular.push({ ...b, yol, commit: c });
      }
    }
  }
  return bulgular;
}

// Uzak deponun herhangi bir dalından ya da etiketinden ulaşılan geçmişte bu değer var mı
export function gecmisteVar(d: Depo, deger: string): boolean {
  const uclar = Object.entries(d.refs).filter(([r]) => r.startsWith("refs/")).map(([, h]) => soy(d, h));
  for (const c of gecmis(d, uclar)) {
    for (const h of Object.values(commitAgaci(d, c))) if (icerik(d, h).includes(deger)) return true;
  }
  return false;
}

// GitHub'ın push protection reddi (sadeleştirilmiş)
export function pushKorumasiSatirlari(ref: string, bulgular: GizliBulgu[]): string[] {
  const s = [
    `remote: error: GH013: Repository rule violations found for ${ref}.`,
    "remote: ",
    "remote: - GITHUB PUSH PROTECTION",
    "remote:   ——————————————————————————",
    "remote:     Resolve the following violations before pushing again",
    "remote: ",
    "remote:     - Push cannot contain secrets",
    "remote: ",
  ];
  const turler = [...new Set(bulgular.map((b) => b.tur))];
  for (const t of turler) {
    s.push(`remote:       —— ${t} ——`, "remote:        locations:");
    for (const b of bulgular.filter((x) => x.tur === t)) s.push(`remote:          - commit: ${b.commit}`, `remote:            path: ${b.yol}:${b.satir}`);
    s.push("remote: ");
  }
  return s;
}

// ---- Sanal ödeme hizmeti: kafepay keys list/roll/revoke/create, kafepay logs ----

const ALFABE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function yeniDeger(o: Ortam, ad: string): string {
  const n = o.bulut?.anahtarlar.length ?? 0;
  const h = sha1(baytlar(`kafepay:${ad}:${o.saat}:${n}`));
  let s = "";
  for (let i = 0; i < 24; i++) s += ALFABE[parseInt(h.slice(i, i + 2), 16) % ALFABE.length];
  return `kp_live_${s}`;
}

export const maskele = (deger: string) => `${deger.slice(0, 8)}••••${deger.slice(-4)}`;

function bulut(o: Ortam) {
  return (o.bulut ??= { anahtarlar: [], kayitlar: [] });
}

const aktif = (o: Ortam, ad: string) => o.bulut?.anahtarlar.find((a) => a.ad === ad && a.durum === "aktif") ?? null;

// kur() için: "@anahtar <ad> <değer>" hesapta etkin bir anahtar açar
export function anahtarEkle(o: Ortam, ad: string, deger: string) {
  bulut(o).anahtarlar.push({ ad, deger, durum: "aktif", olusturma: o.saat });
}

function saatYazisi(o: Ortam, t: number): string {
  return new Date(t * 1000).toISOString().slice(0, 16).replace("T", " ");
}

// Public depoyu tarayan botlar: yeni push'taki etkin anahtarları bulup kullanır
export function botTaramasi(o: Ortam, uzak: Depo, yeni: string[], bilinen: string[]) {
  if (!uzak.platform?.herkeseAcik || !o.bulut) return;
  const bulgular = commitlerdekiGizliler(uzak, yeni, bilinen);
  for (const a of o.bulut.anahtarlar) {
    if (a.durum !== "aktif" || a.sizdi !== undefined || !bulgular.some((b) => b.deger === a.deger)) continue;
    a.sizdi = o.saat;
    const t = (s: number) => saatYazisi(o, o.saat + s).slice(11);
    const k = maskele(a.deger).slice(-8);
    o.bulut.kayitlar.push(
      `${t(90)}  ${k}  198.51.100.23  GET  /v1/balance  200`,
      `${t(180)}  ${k}  198.51.100.23  POST /v1/payouts  200  -2400 TRY`,
      `${t(240)}  ${k}  203.0.113.77   POST /v1/payouts  200  -2400 TRY`,
    );
  }
}

export function kafepay(o: Ortam, args: string[]): { cikti: string; kod: number } {
  const a = ayir(args);
  const [konu, eylem, adArg] = a.kalan;
  const ad = adArg ?? "live";
  const b = bulut(o);
  if (konu === "logs") {
    if (!b.kayitlar.length) return { cikti: "No API requests yet.", kod: 0 };
    return { cikti: ["TIME   KEY       IP             REQUEST           STATUS", ...b.kayitlar].join("\n"), kod: 0 };
  }
  if (konu !== "keys") return { cikti: "usage: kafepay keys [list|create|roll|revoke] [name]\n       kafepay logs", kod: konu ? 1 : 0 };
  if (!eylem || eylem === "list") {
    if (!b.anahtarlar.length) return { cikti: "No API keys. Create one with: kafepay keys create", kod: 0 };
    const satirlar = b.anahtarlar.map(
      (x) => `${x.ad.padEnd(6)}${maskele(x.deger).padEnd(18)}${(x.durum === "aktif" ? "active" : "revoked").padEnd(9)}${saatYazisi(o, x.olusturma)}`,
    );
    return { cikti: ["NAME  KEY               STATUS   CREATED", ...satirlar].join("\n"), kod: 0 };
  }
  const yaz = (x: BulutAnahtari) => `KAFEPAY_KEY=${x.deger}`;
  if (eylem === "create") {
    if (aktif(o, ad)) return { cikti: `error: key '${ad}' already exists; use 'kafepay keys roll ${ad}' to replace it`, kod: 1 };
    const x: BulutAnahtari = { ad, deger: yeniDeger(o, ad), durum: "aktif", olusturma: o.saat };
    b.anahtarlar.push(x);
    return { cikti: yaz(x), kod: 0 };
  }
  const eski = aktif(o, ad);
  if (!eski) return { cikti: `error: no active key named '${ad}'`, kod: 1 };
  if (eylem === "revoke") {
    eski.durum = "iptal";
    return { cikti: `✓ Revoked ${maskele(eski.deger)}. Requests using it are refused from now on.`, kod: 0 };
  }
  if (eylem === "roll") {
    eski.durum = "iptal";
    const x: BulutAnahtari = { ad, deger: yeniDeger(o, ad), durum: "aktif", olusturma: o.saat };
    b.anahtarlar.push(x);
    return { cikti: yaz(x), kod: 0 };
  }
  return { cikti: `error: unknown command 'keys ${eylem}'`, kod: 1 };
}
