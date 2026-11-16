// Şifreleme pratiğindeki araçların rozeti: "Oyuncak" eğitim için yazılmış, gerçek
// kullanım için olmayan uygulamaları; "Web Crypto" tarayıcının gerçek kriptografi
// API'siyle yapılan işlemleri gösterir. İkisi hiçbir ekranda karışmaz.
export function Rozet({ tur }: { tur: "oyuncak" | "webcrypto" }) {
  return tur === "oyuncak" ? (
    <span className="kripto-rozet kripto-oyuncak" title="Eğitim için yazılmış basit bir uygulama; gerçek verini korumak için kullanma.">
      Oyuncak · gerçek kullanım için değil
    </span>
  ) : (
    <span className="kripto-rozet kripto-gercek" title="Bu işlem tarayıcının Web Crypto API'siyle yapılıyor; veri bilgisayarından çıkmıyor.">
      Web Crypto · gerçek işlem
    </span>
  );
}
