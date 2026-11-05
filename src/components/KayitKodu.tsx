// Laboratuvar kayıtlarındaki MatStudio kodu: gösterme, yazma ve MatStudio'ya aktarma.

import { navigate } from "../lib/router";
import { BoyutluEditor } from "./BoyutluEditor";
import { MatlabEditor } from "./MatlabEditor";

// MatStudio bu anahtardaki kodu yeni bir betik olarak alır
export const GELEN_KOD = "dsp-pratik:matlab-gelen";
export const GELEN_OLAY = "dsp-pratik:matlab-gelen";

export function matlabdaAc(kod: string) {
  try {
    localStorage.setItem(GELEN_KOD, kod);
  } catch {
    // depolama kapalıysa MatStudio açılır ama kod aktarılamaz
  }
  navigate({ page: "matstudio" });
  window.dispatchEvent(new Event(GELEN_OLAY));
}

export function KodGoster({ kod }: { kod: string }) {
  return (
    <BoyutluEditor sinif="kayit-kodu">
      <MatlabEditor value={kod} readOnly etiket="Kaydın MatStudio kodu" />
    </BoyutluEditor>
  );
}

export function KodYaz({ kod, onChange }: { kod: string; onChange: (k: string) => void }) {
  return (
    <div className="etiketli tam">
      <span className="etiket">MatStudio kodu</span>
      <BoyutluEditor>
        <MatlabEditor value={kod} onChange={onChange} etiket="MatStudio kodu" />
      </BoyutluEditor>
    </div>
  );
}
