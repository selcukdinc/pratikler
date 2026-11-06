// Mantık ve küme sembollerini klavyesi olmayanlar için tek tıkla yazdırır.
// Basılan sembol, en son odaklanan metin kutusunda imlecin olduğu yere girer.
export const SEMBOLLER = ["¬", "∧", "∨", "⊕", "→", "↔", "≡", "∀", "∃", "∈", "∉", "⊆", "⊂", "∪", "∩", "∅", "×", "≤", "≥", "≠"];

type Kutu = HTMLInputElement | HTMLTextAreaElement;

export function sembolEkle(kutu: Kutu | null, sembol: string, yaz: (deger: string) => void) {
  if (!kutu) return;
  const bas = kutu.selectionStart ?? kutu.value.length;
  const son = kutu.selectionEnd ?? bas;
  const yeni = kutu.value.slice(0, bas) + sembol + kutu.value.slice(son);
  yaz(yeni);
  requestAnimationFrame(() => {
    kutu.focus();
    kutu.setSelectionRange(bas + sembol.length, bas + sembol.length);
  });
}

export function SembolKlavyesi({ onSembol, disabled }: { onSembol: (s: string) => void; disabled?: boolean }) {
  return (
    <div className="sembol-klavyesi" role="group" aria-label="Sembol ekle">
      {SEMBOLLER.map((s) => (
        <button
          key={s}
          type="button"
          className="sembol"
          disabled={disabled}
          // Odak metin kutusundan çıkmasın, imleç yerinde kalsın
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onSembol(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
