// Daktilo efekti: bir metni harf harf yazar, istenirse geri silip sıradakine geçer.
// Hareket azaltma açıksa metin bir anda görünür. Yazılan metin ekran okuyucuya
// harf harf okunmasın diye çağıran taraf onu aria-hidden yapıp ayrı bir düz metin verir.

import { useEffect, useState } from "react";

export const hareketAzaltilmis = () =>
  typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tek bir metni yazar; metin değişince önce eskisini siler, sonra yenisini yazar
export function useDaktilo(hedef: string, { hiz = 38, silmeHizi = 16, gecikme = 0 } = {}): { metin: string; bitti: boolean } {
  const [metin, setMetin] = useState(() => (hareketAzaltilmis() ? hedef : ""));
  const [basladi, setBasladi] = useState(gecikme === 0);

  useEffect(() => {
    if (gecikme === 0) return;
    const t = setTimeout(() => setBasladi(true), gecikme);
    return () => clearTimeout(t);
  }, [gecikme]);

  useEffect(() => {
    if (!basladi) return;
    if (hareketAzaltilmis()) {
      setMetin(hedef);
      return;
    }
    if (metin === hedef) return;
    // Hedefle ortak başlangıç bitene kadar sil, sonra harf harf yaz
    const ortak = hedef.startsWith(metin);
    const t = setTimeout(
      () => setMetin(ortak ? hedef.slice(0, metin.length + 1) : metin.slice(0, -1)),
      ortak ? hiz + (metin.endsWith(" ") ? hiz : 0) : silmeHizi,
    );
    return () => clearTimeout(t);
  }, [hedef, metin, basladi, hiz, silmeHizi]);

  return { metin, bitti: metin === hedef };
}

// Görünür daktilo metni ve yanıp sönen imleç
export function Daktilo({ metin, imlec = true, className }: { metin: string; imlec?: boolean; className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {metin}
      {imlec && <span className="daktilo-imlec" />}
    </span>
  );
}
