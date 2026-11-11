// Cevap anahtarının hafif perdesi. Sorular cevaplarıyla birlikte tarayıcıya gider
// (cevap tarayıcıda değerlendirilir, sunucuya her cevap için istek atılmaz); perde
// yalnızca cevabın ağ sekmesinde düz yazıyla görünmesini önler. Güvenlik önlemi
// değildir: sunucu toplu gelen cevapları kendi anahtarıyla yeniden puanlar.

const TUZ = "pratikler-perde";

function anahtar(kimlik: string): Uint8Array {
  return new TextEncoder().encode(`${TUZ}:${kimlik}`);
}

function cevir(veri: Uint8Array, k: Uint8Array): Uint8Array {
  const cikti = new Uint8Array(veri.length);
  for (let i = 0; i < veri.length; i++) cikti[i] = veri[i]! ^ k[i % k.length]! ^ (i * 31 & 0xff);
  return cikti;
}

export function perdele(kimlik: string, metin: string): string {
  const b = cevir(new TextEncoder().encode(metin), anahtar(kimlik));
  let s = "";
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode(...b.subarray(i, i + 0x8000));
  return btoa(s);
}

export function perdeAc(kimlik: string, perdeli: string): string {
  const s = atob(perdeli);
  const b = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
  return new TextDecoder().decode(cevir(b, anahtar(kimlik)));
}
