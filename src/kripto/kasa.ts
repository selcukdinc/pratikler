// 15. ünitenin sıfır bilgili kasası: parola yöneticilerinin yaygın anahtar zincirinin sade
// bir Web Crypto uygulaması. Gerçek ürünlerin ayrıntıları (yineleme sayıları, Argon2, MAC
// anahtarı, kurtarma) farklıdır; zincirin biçimi aynıdır:
//
//   parola + e-posta (tuz) --PBKDF2--> ana anahtar
//   ana anahtar --HKDF "giris"--> giriş özeti (sunucuya gider, kimlik doğrulama için)
//   ana anahtar --HKDF "sifreleme"--> anahtar şifreleme anahtarı (cihazdan çıkmaz)
//   rastgele kasa anahtarı, anahtar şifreleme anahtarıyla AES-GCM ile sarılır
//   her öğenin rastgele anahtarı kasa anahtarıyla sarılır; öğe kendi anahtarıyla şifrelenir
//
// Sunucu yalnız tuzu, yineleme sayısını, giriş özetinin hash'ini ve sarılı/şifreli baytları saklar.
import { bayttanMetin, hex, hextenBayt, metindenBayt } from "./bayt";
import { aesAnahtariAl, aesGcmCoz, aesGcmSifrele, hkdf, pbkdf2, rastgeleBayt, sha256 } from "./webcrypto";

export interface Sarili {
  nonce: string;
  sifreli: string;
}

export interface SunucudakiOge {
  sariliAnahtar: Sarili;
  icerik: Sarili;
}

// Sunucunun veritabanındaki satır: hepsi hex
export interface SunucudakiKasa {
  eposta: string;
  yineleme: number;
  // Giriş özetinin SHA-256'sı: sunucu özeti de düz saklamaz
  girisDogrulayici: string;
  sariliKasaAnahtari: Sarili;
  ogeler: SunucudakiOge[];
}

// Yalnız cihazda (bellekte) duran ara değerler; ekranda göstermek için
export interface CihazdakiAnahtarlar {
  anaAnahtar: string;
  girisOzeti: string;
  sifrelemeAnahtari: string;
  kasaAnahtari: string;
  ogeAnahtarlari: string[];
}

const BOS = new Uint8Array(32);

async function sar(anahtar: Uint8Array, veri: Uint8Array): Promise<Sarili> {
  const k = await aesAnahtariAl(anahtar, "AES-GCM");
  const { nonce, sifreli } = await aesGcmSifrele(k, veri);
  return { nonce: hex(nonce), sifreli: hex(sifreli) };
}

async function ac(anahtar: Uint8Array, s: Sarili): Promise<Uint8Array> {
  const k = await aesAnahtariAl(anahtar, "AES-GCM");
  return aesGcmCoz(k, hextenBayt(s.nonce), hextenBayt(s.sifreli));
}

export async function parolaAnahtarlari(parola: string, eposta: string, yineleme: number) {
  const anaAnahtar = await pbkdf2(parola, metindenBayt(eposta.trim().toLowerCase()), yineleme);
  const girisOzeti = await hkdf(anaAnahtar, BOS, "giris");
  const sifrelemeAnahtari = await hkdf(anaAnahtar, BOS, "sifreleme");
  return { anaAnahtar, girisOzeti, sifrelemeAnahtari };
}

export async function kasaKur(parola: string, eposta: string, yineleme: number, ogeler: string[]): Promise<{ sunucu: SunucudakiKasa; cihaz: CihazdakiAnahtarlar }> {
  const { anaAnahtar, girisOzeti, sifrelemeAnahtari } = await parolaAnahtarlari(parola, eposta, yineleme);
  const kasaAnahtari = rastgeleBayt(32);
  const ogeAnahtarlari = ogeler.map(() => rastgeleBayt(32));
  const sunucu: SunucudakiKasa = {
    eposta,
    yineleme,
    girisDogrulayici: hex(await sha256(girisOzeti)),
    sariliKasaAnahtari: await sar(sifrelemeAnahtari, kasaAnahtari),
    ogeler: await Promise.all(ogeler.map(async (m, i) => ({ sariliAnahtar: await sar(kasaAnahtari, ogeAnahtarlari[i]!), icerik: await sar(ogeAnahtarlari[i]!, metindenBayt(m)) }))),
  };
  return {
    sunucu,
    cihaz: { anaAnahtar: hex(anaAnahtar), girisOzeti: hex(girisOzeti), sifrelemeAnahtari: hex(sifrelemeAnahtari), kasaAnahtari: hex(kasaAnahtari), ogeAnahtarlari: ogeAnahtarlari.map(hex) },
  };
}

export type AcmaSonucu = { tamam: true; ogeler: string[]; kasaAnahtari: Uint8Array } | { tamam: false; neden: string };

// Önce sunucu girişi doğrular (yanlış parolada kasa hiç gönderilmez), sonra cihaz açar
export async function kasaAc(s: SunucudakiKasa, parola: string): Promise<AcmaSonucu> {
  const { girisOzeti, sifrelemeAnahtari } = await parolaAnahtarlari(parola, s.eposta, s.yineleme);
  if (hex(await sha256(girisOzeti)) !== s.girisDogrulayici) return { tamam: false, neden: "Sunucu girişi reddetti: giriş özeti tutmuyor." };
  try {
    const kasaAnahtari = await ac(sifrelemeAnahtari, s.sariliKasaAnahtari);
    const ogeler = await Promise.all(s.ogeler.map(async (o) => bayttanMetin(await ac(await ac(kasaAnahtari, o.sariliAnahtar), o.icerik))));
    return { tamam: true, ogeler, kasaAnahtari };
  } catch {
    return { tamam: false, neden: "Kasa anahtarı çözülemedi: AES-GCM etiketi tutmuyor." };
  }
}

// Parola değişince yalnız kasa anahtarının sargısı ve giriş doğrulayıcısı değişir; öğeler aynı kalır
export async function parolaDegistir(s: SunucudakiKasa, eski: string, yeni: string): Promise<SunucudakiKasa | null> {
  const a = await kasaAc(s, eski);
  if (!a.tamam) return null;
  const { girisOzeti, sifrelemeAnahtari } = await parolaAnahtarlari(yeni, s.eposta, s.yineleme);
  return { ...s, girisDogrulayici: hex(await sha256(girisOzeti)), sariliKasaAnahtari: await sar(sifrelemeAnahtari, a.kasaAnahtari) };
}

// Kurtarma kodu: kasa anahtarının ikinci bir sargısı (rastgele, yüksek entropili koddan)
export async function kurtarmaSargisi(kasaAnahtari: Uint8Array): Promise<{ kod: string; sargi: Sarili }> {
  const ham = rastgeleBayt(20);
  const kod = hex(ham).toUpperCase().match(/.{4}/g)!.join("-");
  return { kod, sargi: await sar(await hkdf(ham, BOS, "kurtarma"), kasaAnahtari) };
}

export async function kurtarmaylaAc(kod: string, sargi: Sarili): Promise<Uint8Array | null> {
  try {
    const ham = hextenBayt(kod.replace(/[^0-9a-f]/gi, "").toLowerCase());
    return await ac(await hkdf(ham, BOS, "kurtarma"), sargi);
  } catch {
    return null;
  }
}
