// Simülatör ekranındaki gerçek değerler: Web Crypto ile X25519 (yoksa P-256), HKDF, HMAC ve
// AES-GCM. Double Ratchet sadeleştirilmiştir (başlık şifreleme, atlanan mesajlar ve X3DH'nin
// ayrıntıları yok), ama zincir ve kök anahtarlarının adım adım nasıl değiştiği gerçektir.
import { hex, metindenBayt } from "../bayt";
import { acikAnahtarBayt, aesAnahtariAl, aesGcmSifrele, degisimAnahtari, hkdf, hmacSha256, ortakSir, rastgeleBayt, type DegisimTuru } from "../webcrypto";
import { turlar, type Koruma, type Mesaj } from "./model";

export interface GercekMesaj {
  // Ağda ya da sunucuda görülen bayt (koruma yoksa açık metnin baytları)
  bayt: string;
  nonce?: string;
  mesajAnahtari?: string;
  zincirAnahtari?: string;
  kokAnahtari?: string;
  // Bu turda gönderenin yeni DH açık anahtarı (cırcırın döndüğü yer)
  dhAcik?: string;
}

export interface GercekOturum {
  tur: DegisimTuru | null;
  mesajlar: GercekMesaj[];
}

const bayt1 = Uint8Array.of(1);
const bayt2 = Uint8Array.of(2);

async function aesGcm(anahtar: Uint8Array, metin: string) {
  const k = await aesAnahtariAl(anahtar, "AES-GCM");
  const nonce = rastgeleBayt(12);
  const { sifreli } = await aesGcmSifrele(k, metindenBayt(metin), nonce);
  return { bayt: hex(sifreli), nonce: hex(nonce) };
}

export async function gercekOturum(koruma: Koruma, mesajlar: Mesaj[]): Promise<GercekOturum> {
  if (koruma === "yok") return { tur: null, mesajlar: mesajlar.map((m) => ({ bayt: hex(metindenBayt(m.metin)) })) };
  if (koruma === "tls") {
    // Ayşe ile sunucu arasındaki TLS oturumunun anahtarı; sunucu çözer
    const anahtar = rastgeleBayt(16);
    return { tur: null, mesajlar: await Promise.all(mesajlar.map(async (m) => ({ ...(await aesGcm(anahtar, m.metin)), mesajAnahtari: hex(anahtar) }))) };
  }
  const ayse = await degisimAnahtari();
  const mert = await degisimAnahtari();
  const ilk = await ortakSir(ayse.tur, ayse.cift.privateKey, mert.cift.publicKey);
  if (koruma === "e2ee-sabit") {
    const anahtar = await hkdf(ilk, new Uint8Array(32), "sabit anahtar");
    return { tur: ayse.tur, mesajlar: await Promise.all(mesajlar.map(async (m) => ({ ...(await aesGcm(anahtar, m.metin)), mesajAnahtari: hex(anahtar) }))) };
  }
  // Double Ratchet: her turda gönderen yeni bir DH çifti üretir; kök anahtar DH çıktısıyla
  // ilerler ve yeni bir gönderme zinciri başlatır. Zincirde her mesaj bir HMAC adımıdır.
  const tur = turlar(mesajlar);
  let kok: Uint8Array = await hkdf(ilk, new Uint8Array(32), "kok");
  const dh = { ayse: ayse.cift, mert: mert.cift };
  let zincir: Uint8Array = new Uint8Array(32);
  const sonuc: GercekMesaj[] = [];
  for (let i = 0; i < mesajlar.length; i++) {
    const m = mesajlar[i]!;
    let dhAcik: string | undefined;
    if (i === 0 || tur[i] !== tur[i - 1]) {
      const yeni = (await degisimAnahtari()).cift;
      const karsi = m.gonderen === "ayse" ? dh.mert : dh.ayse;
      const cikti = await ortakSir(ayse.tur, yeni.privateKey, karsi.publicKey);
      const tureyen = await hkdf(cikti, kok, "circir", 64);
      kok = tureyen.slice(0, 32);
      zincir = tureyen.slice(32);
      dh[m.gonderen] = yeni;
      dhAcik = hex(await acikAnahtarBayt(yeni.publicKey));
    }
    const mesajAnahtari = await hmacSha256(zincir, bayt1);
    const zincirAnahtari = zincir;
    zincir = await hmacSha256(zincir, bayt2);
    sonuc.push({ ...(await aesGcm(mesajAnahtari, m.metin)), mesajAnahtari: hex(mesajAnahtari), zincirAnahtari: hex(zincirAnahtari), kokAnahtari: hex(kok), dhAcik });
  }
  return { tur: ayse.tur, mesajlar: sonuc };
}
