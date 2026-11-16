// Web Crypto kod atölyesi (19. ünite): öğrenci crypto.subtle çağrılarını kendisi yazar.
// Kod tarayıcıda bir Web Worker içinde çalışır (atolye.worker.ts), sunucuya gitmez.
// Her görevin denetimi öğrencinin yazdığı fonksiyonları çağırır ve sonucu beklenenle
// karşılaştırır; atolye.test.ts her görevin örnek çözümünü ve boş başlangıcını sınar.

export interface Gorev {
  id: string;
  baslik: string;
  aciklama: string;
  baslangic: string;
  ornek: string;
  kontrol: string;
}

export interface Sonuc {
  basarili: boolean;
  mesaj: string;
  cikti: string[];
}

// Öğrenci kodunda hazır gelen yardımcılar
export const YARDIMCILAR: [string, string][] = [
  ["utf8(metin)", "Metni UTF-8 baytlarına çevirir (Uint8Array)."],
  ["metne(bayt)", "UTF-8 baytlarını metne çevirir."],
  ["hex(bayt)", "Baytları onaltılık yazıya çevirir."],
  ["hexten(yazi)", "Onaltılık yazıyı baytlara çevirir."],
  ["b64(bayt)", "Baytları Base64'e çevirir."],
  ["b64ten(yazi)", "Base64'ü baytlara çevirir."],
  ["birlestir(a, b)", "İki bayt dizisini uç uca ekler."],
  ["console.log(...)", "Çıktı alanına yazar."],
];

const YARDIMCI_KOD = `
const utf8 = (s) => new TextEncoder().encode(s);
const metne = (b) => new TextDecoder().decode(b);
const hex = (b) => Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, "0")).join("");
const hexten = (s) => new Uint8Array((s.match(/../g) || []).map((x) => parseInt(x, 16)));
const b64 = (b) => btoa(String.fromCharCode(...new Uint8Array(b)));
const b64ten = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const birlestir = (a, b) => { const c = new Uint8Array(a.length + b.length); c.set(a); c.set(b, a.length); return c; };
const beklenen = (kosul, mesaj) => { if (!kosul) throw new Denetim(mesaj); };
`;

class Denetim extends Error {}

const yazi = (x: unknown): string => {
  if (typeof x === "string") return x;
  if (x instanceof Uint8Array) return `Uint8Array(${x.length}) ${Array.from(x.slice(0, 32), (b) => b.toString(16).padStart(2, "0")).join("")}${x.length > 32 ? "…" : ""}`;
  if (x instanceof ArrayBuffer) return `ArrayBuffer(${x.byteLength})`;
  try {
    return JSON.stringify(x) ?? String(x);
  } catch {
    return String(x);
  }
};

// Öğrenci kodunu ve denetimi aynı kapsamda çalıştırır. Worker'da ve testte aynı fonksiyon kullanılır.
export async function calistir(kod: string, kontrol: string): Promise<Sonuc> {
  const cikti: string[] = [];
  const konsol = {
    log: (...a: unknown[]) => cikti.length < 200 && cikti.push(a.map(yazi).join(" ")),
    error: (...a: unknown[]) => cikti.length < 200 && cikti.push(a.map(yazi).join(" ")),
  };
  const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor as new (...a: string[]) => (...b: unknown[]) => Promise<unknown>;
  let fn: (...b: unknown[]) => Promise<unknown>;
  try {
    fn = new AsyncFunction("console", "Denetim", `${YARDIMCI_KOD}\n${kod}\n;{\n${kontrol}\n}`);
  } catch (e) {
    return { basarili: false, mesaj: `Sözdizimi hatası: ${(e as Error).message}`, cikti };
  }
  try {
    await fn(konsol, Denetim);
    return { basarili: true, mesaj: "Bütün denetimler geçti.", cikti };
  } catch (e) {
    if (e instanceof Denetim) return { basarili: false, mesaj: e.message, cikti };
    const h = e as Error;
    return { basarili: false, mesaj: `Çalışırken hata: ${h?.name ?? "Error"}: ${h?.message ?? String(e)}`, cikti };
  }
}

const tanimli = (ad: string) => `beklenen(typeof ${ad} === "function", "${ad} adında bir fonksiyon bulunamadı.");`;

export const GOREVLER: Gorev[] = [
  {
    id: "ozet",
    baslik: "SHA-256 özeti",
    aciklama: "Verilen metnin SHA-256 özetini onaltılık yazı olarak döndür. crypto.subtle.digest bir ArrayBuffer döndürür.",
    baslangic: `async function ozet(metin) {\n  // crypto.subtle.digest("SHA-256", ...)\n}\n\nconsole.log(await ozet("abc"));\n`,
    ornek: `async function ozet(metin) {\n  const b = await crypto.subtle.digest("SHA-256", utf8(metin));\n  return hex(b);\n}\n`,
    kontrol: `${tanimli("ozet")}
const a = await ozet("abc");
beklenen(typeof a === "string", "ozet bir yazı döndürmeli (hex kullan).");
beklenen(a === "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "\\"abc\\" için özet yanlış: " + a);
beklenen((await ozet("")) === "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "Boş metnin özeti yanlış.");`,
  },
  {
    id: "anahtar",
    baslik: "Rastgele anahtar",
    aciklama: "32 baytlık rastgele bir anahtar üret. Math.random değil, kriptografik üreteç kullan (2. ünite).",
    baslangic: `function anahtarUret() {\n  // crypto.getRandomValues(...)\n}\n\nconsole.log(anahtarUret());\n`,
    ornek: `function anahtarUret() {\n  return crypto.getRandomValues(new Uint8Array(32));\n}\n`,
    kontrol: `${tanimli("anahtarUret")}
const a = anahtarUret(), b = anahtarUret();
beklenen(a instanceof Uint8Array, "Bir Uint8Array döndürmelisin.");
beklenen(a.length === 32, "Anahtar 32 bayt olmalı, " + a.length + " bayt geldi.");
beklenen(hex(a) !== hex(b), "İki çağrı aynı anahtarı verdi: üreteç rastgele değil.");
beklenen(a.some((x) => x !== 0), "Anahtarın bütün baytları sıfır.");`,
  },
  {
    id: "hmac",
    baslik: "HMAC hesapla",
    aciklama: "Onaltılık yazıyla verilen anahtarla mesajın HMAC-SHA256 etiketini hex olarak döndür. Önce importKey ile \"raw\" anahtarı HMAC anahtarına çevir.",
    baslangic: `async function hmac(anahtarHex, mesaj) {\n  // const k = await crypto.subtle.importKey("raw", ..., { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);\n}\n`,
    ornek: `async function hmac(anahtarHex, mesaj) {\n  const k = await crypto.subtle.importKey("raw", hexten(anahtarHex), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);\n  return hex(await crypto.subtle.sign("HMAC", k, utf8(mesaj)));\n}\n`,
    kontrol: `${tanimli("hmac")}
const e = await hmac("4a656665", "what do ya want for nothing?");
beklenen(e === "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843", "RFC 4231 test vektörü tutmadı: " + e);`,
  },
  {
    id: "hmac-dogrula",
    baslik: "HMAC doğrula",
    aciklama: "Etiketi kendin hesaplayıp === ile karşılaştırma: crypto.subtle.verify sabit zamanlı karşılaştırır (17. ünite). Doğruysa true, değilse false döndür.",
    baslangic: `async function dogrula(anahtarHex, mesaj, etiketHex) {\n  // crypto.subtle.verify("HMAC", ...)\n}\n`,
    ornek: `async function dogrula(anahtarHex, mesaj, etiketHex) {\n  const k = await crypto.subtle.importKey("raw", hexten(anahtarHex), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);\n  return crypto.subtle.verify("HMAC", k, hexten(etiketHex), utf8(mesaj));\n}\n`,
    kontrol: `${tanimli("dogrula")}
const et = "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843";
beklenen((await dogrula("4a656665", "what do ya want for nothing?", et)) === true, "Doğru etiket reddedildi.");
beklenen((await dogrula("4a656665", "what do ya want for nothing!", et)) === false, "Değiştirilmiş mesaj kabul edildi.");
beklenen((await dogrula("4a656665", "what do ya want for nothing?", "00" + et.slice(2))) === false, "Değiştirilmiş etiket kabul edildi.");`,
  },
  {
    id: "gcm-sifrele",
    baslik: "AES-GCM ile şifrele",
    aciklama: "Verilen AES-GCM anahtarıyla metni şifrele. Her seferinde 12 baytlık yeni bir nonce üret ve şifreli metnin başına ekle: sonuç nonce || şifreli metin (Uint8Array).",
    baslangic: `async function sifrele(anahtar, metin) {\n  // const nonce = crypto.getRandomValues(new Uint8Array(12));\n  // crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, anahtar, ...)\n}\n`,
    ornek: `async function sifrele(anahtar, metin) {\n  const nonce = crypto.getRandomValues(new Uint8Array(12));\n  const c = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, anahtar, utf8(metin)));\n  return birlestir(nonce, c);\n}\n`,
    kontrol: `${tanimli("sifrele")}
const k = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
const p1 = await sifrele(k, "Merhaba Mert"), p2 = await sifrele(k, "Merhaba Mert");
beklenen(p1 instanceof Uint8Array, "Bir Uint8Array döndürmelisin.");
beklenen(p1.length === 12 + 12 + 16, "Boy beklenen gibi değil: 12 bayt nonce + 12 bayt metin + 16 bayt etiket = 40 olmalı, " + p1.length + " geldi.");
beklenen(hex(p1.slice(0, 12)) !== hex(p2.slice(0, 12)), "İki şifrelemede aynı nonce kullanıldı. GCM'de nonce tekrarı felakettir (17. ünite).");
const acik = metne(await crypto.subtle.decrypt({ name: "AES-GCM", iv: p1.slice(0, 12) }, k, p1.slice(12)));
beklenen(acik === "Merhaba Mert", "Çözülen metin tutmadı.");`,
  },
  {
    id: "gcm-coz",
    baslik: "AES-GCM ile çöz",
    aciklama: "nonce || şifreli metin paketini çöz ve metni döndür. Paket değiştirilmişse decrypt hata fırlatır; bu durumda null döndür.",
    baslangic: `async function coz(anahtar, paket) {\n  // try { ... } catch { return null; }\n}\n`,
    ornek: `async function coz(anahtar, paket) {\n  try {\n    const b = await crypto.subtle.decrypt({ name: "AES-GCM", iv: paket.slice(0, 12) }, anahtar, paket.slice(12));\n    return metne(b);\n  } catch {\n    return null;\n  }\n}\n`,
    kontrol: `${tanimli("coz")}
const k = await crypto.subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt", "decrypt"]);
const n = crypto.getRandomValues(new Uint8Array(12));
const p = birlestir(n, new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: n }, k, utf8("Saat 20.00, kafe"))));
beklenen((await coz(k, p)) === "Saat 20.00, kafe", "Doğru paket çözülemedi.");
const bozuk = p.slice(); bozuk[15] ^= 1;
beklenen((await coz(k, bozuk)) === null, "Değiştirilmiş paket için null bekleniyordu.");`,
  },
  {
    id: "base64",
    baslik: "Paketi Base64 ile taşı",
    aciklama: "JSON'a ya da URL'ye bayt yazılamaz. Bir önceki görevdeki gibi şifrele, ama sonucu Base64 yazısı olarak döndür. Aynı anahtarla açan da b64ten ile geri çevirecek.",
    baslangic: `async function paketle(anahtar, metin) {\n  // ... return b64(...)\n}\n`,
    ornek: `async function paketle(anahtar, metin) {\n  const nonce = crypto.getRandomValues(new Uint8Array(12));\n  const c = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, anahtar, utf8(metin)));\n  return b64(birlestir(nonce, c));\n}\n`,
    kontrol: `${tanimli("paketle")}
const k = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
const s = await paketle(k, "Notlar klasörde");
beklenen(typeof s === "string" && /^[A-Za-z0-9+/]+=*$/.test(s), "Base64 bir yazı bekleniyordu.");
const p = b64ten(s);
const acik = metne(await crypto.subtle.decrypt({ name: "AES-GCM", iv: p.slice(0, 12) }, k, p.slice(12)));
beklenen(acik === "Notlar klasörde", "Base64'ten geri çevrilen paket çözülmedi.");`,
  },
  {
    id: "pbkdf2",
    baslik: "Paroladan anahtar",
    aciklama: "Parolayı PBKDF2-SHA256 ile 100 000 tekrar ve verilen tuzla 32 baytlık bir anahtara çevir; hex döndür. Önce parolayı importKey ile \"PBKDF2\" anahtarı yap, sonra deriveBits kullan (9. ünite).",
    baslangic: `async function turet(parola, tuzHex) {\n  // importKey("raw", utf8(parola), "PBKDF2", false, ["deriveBits"])\n  // deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: ..., iterations: 100000 }, ..., 256)\n}\n`,
    ornek: `async function turet(parola, tuzHex) {\n  const k = await crypto.subtle.importKey("raw", utf8(parola), "PBKDF2", false, ["deriveBits"]);\n  return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: hexten(tuzHex), iterations: 100000 }, k, 256));\n}\n`,
    kontrol: `${tanimli("turet")}
const ref = async (p, t) => hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: hexten(t), iterations: 100000 }, await crypto.subtle.importKey("raw", utf8(p), "PBKDF2", false, ["deriveBits"]), 256));
const t = "a1b2c3d4e5f60718293a4b5c6d7e8f90";
const a = await turet("deniz-fener-1907", t);
beklenen(typeof a === "string" && a.length === 64, "64 hane (32 bayt) hex bekleniyordu.");
beklenen(a === await ref("deniz-fener-1907", t), "Türetilen anahtar tutmadı: tekrar sayısını, tuzu ve hash'i kontrol et.");
beklenen(a !== await turet("deniz-fener-1907", "00" + t.slice(2)), "Farklı tuz aynı anahtarı verdi.");`,
  },
  {
    id: "hkdf",
    baslik: "Tek anahtardan iki anahtar",
    aciklama: "Bir ana anahtardan HKDF-SHA256 ile iki ayrı 32 baytlık anahtar türet: info \"sifreleme\" ve \"mac\", tuz boş. { sifreleme, mac } nesnesini hex değerlerle döndür (9. ünite).",
    baslangic: `async function altAnahtarlar(anaHex) {\n  // importKey("raw", ..., "HKDF", false, ["deriveBits"])\n  // deriveBits({ name: "HKDF", hash: "SHA-256", salt: new Uint8Array(), info: utf8("sifreleme") }, ..., 256)\n}\n`,
    ornek: `async function altAnahtarlar(anaHex) {\n  const k = await crypto.subtle.importKey("raw", hexten(anaHex), "HKDF", false, ["deriveBits"]);\n  const t = async (info) => hex(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt: new Uint8Array(), info: utf8(info) }, k, 256));\n  return { sifreleme: await t("sifreleme"), mac: await t("mac") };\n}\n`,
    kontrol: `${tanimli("altAnahtarlar")}
const ana = "000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f";
const k = await crypto.subtle.importKey("raw", hexten(ana), "HKDF", false, ["deriveBits"]);
const ref = async (info) => hex(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt: new Uint8Array(), info: utf8(info) }, k, 256));
const s = await altAnahtarlar(ana);
beklenen(s && typeof s.sifreleme === "string" && typeof s.mac === "string", "{ sifreleme, mac } nesnesi bekleniyordu.");
beklenen(s.sifreleme !== s.mac, "İki anahtar aynı çıktı: info değerleri farklı olmalı.");
beklenen(s.sifreleme === await ref("sifreleme") && s.mac === await ref("mac"), "Türetilen anahtarlar tutmadı.");`,
  },
  {
    id: "ecdh",
    baslik: "Ortak sır (ECDH)",
    aciklama: "Kendi P-256 özel anahtarın ve karşı tarafın açık anahtarıyla 32 baytlık ortak sırrı hesapla, hex döndür. İki taraf aynı değeri bulmalı (11. ünite).",
    baslangic: `async function ortakSir(benimOzel, onunAcik) {\n  // crypto.subtle.deriveBits({ name: "ECDH", public: ... }, ..., 256)\n}\n`,
    ornek: `async function ortakSir(benimOzel, onunAcik) {\n  return hex(await crypto.subtle.deriveBits({ name: "ECDH", public: onunAcik }, benimOzel, 256));\n}\n`,
    kontrol: `${tanimli("ortakSir")}
const al = { name: "ECDH", namedCurve: "P-256" };
const a = await crypto.subtle.generateKey(al, false, ["deriveBits"]);
const m = await crypto.subtle.generateKey(al, false, ["deriveBits"]);
const s1 = await ortakSir(a.privateKey, m.publicKey), s2 = await ortakSir(m.privateKey, a.publicKey);
beklenen(typeof s1 === "string" && s1.length === 64, "64 hane (32 bayt) hex bekleniyordu.");
beklenen(s1 === s2, "Ayşe ile Mert farklı sır buldu.");`,
  },
  {
    id: "imza",
    baslik: "İmzala ve doğrula",
    aciklama: "ECDSA P-256 ve SHA-256 ile mesajı imzala (imza Uint8Array) ve imzayı doğrula (true/false). İki fonksiyon yaz.",
    baslangic: `async function imzala(ozel, mesaj) {\n  // crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, ...)\n}\n\nasync function dogrula(acik, mesaj, imza) {\n}\n`,
    ornek: `const AL = { name: "ECDSA", hash: "SHA-256" };\nasync function imzala(ozel, mesaj) {\n  return new Uint8Array(await crypto.subtle.sign(AL, ozel, utf8(mesaj)));\n}\nasync function dogrula(acik, mesaj, imza) {\n  return crypto.subtle.verify(AL, acik, imza, utf8(mesaj));\n}\n`,
    kontrol: `${tanimli("imzala")}
${tanimli("dogrula")}
const c = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, false, ["sign", "verify"]);
const i = await imzala(c.privateKey, "Ödeme: 100 TL");
beklenen(i instanceof Uint8Array && i.length === 64, "P-256 imzası 64 baytlık bir Uint8Array olmalı.");
beklenen((await dogrula(c.publicKey, "Ödeme: 100 TL", i)) === true, "Geçerli imza reddedildi.");
beklenen((await dogrula(c.publicKey, "Ödeme: 900 TL", i)) === false, "Değiştirilmiş mesaj kabul edildi.");`,
  },
  {
    id: "nonce-tekrari",
    baslik: "Saldırı: nonce tekrarı",
    aciklama: "İki mesaj aynı anahtar ve aynı sayaçla AES-CTR'de şifrelenmiş. Birinci mesajın açık metnini biliyorsun. Anahtarı bilmeden ikinci mesajı çöz: c1 XOR c2 = m1 XOR m2 (17. ünite).",
    baslangic: `function kurtar(c1, c2, m1) {\n  // c1, c2: Uint8Array, m1: bilinen metin\n}\n`,
    ornek: `function kurtar(c1, c2, m1) {\n  const p = utf8(m1);\n  return metne(c2.map((b, i) => b ^ c1[i] ^ p[i]));\n}\n`,
    kontrol: `${tanimli("kurtar")}
const k = await crypto.subtle.generateKey({ name: "AES-CTR", length: 128 }, false, ["encrypt"]);
const sayac = crypto.getRandomValues(new Uint8Array(16));
const sif = async (m) => new Uint8Array(await crypto.subtle.encrypt({ name: "AES-CTR", counter: sayac, length: 64 }, k, utf8(m)));
const m1 = "Toplanti cumartesi saat 14.00", m2 = "Sifre: kutuphane-arka-kapi-77";
const sonuc = kurtar(await sif(m1), await sif(m2), m1);
beklenen(sonuc === m2, "İkinci mesaj kurtarılamadı: " + sonuc);`,
  },
];
