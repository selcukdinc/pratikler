// İlk sırada: eski alan adından yönlendirme ve taşınan tercihler (src/lib/eskiAdres.ts)
import { YONLENIYOR } from "./lib/eskiAdres";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { icerikYukle } from "./lib/icerik";
import { LOGO, PRATIK_YA_DA_KATALOG } from "./lib/pratik";
import "./styles.css";

// Sekme simgesi pratiğin logosu olur
document.querySelector<HTMLLinkElement>('link[rel="icon"]')?.setAttribute("href", LOGO);

// Pratiğin ders, lab ve çıkmış sınav içeriği sayfa çizilmeden önce yüklenir;
// yüklenemezse site bu sayfalar olmadan açılır
// Eski alan adında sayfa çizilmez; tarayıcı yeni adrese gidiyor
if (!YONLENIYOR) {
  const kok = createRoot(document.getElementById("root")!);
  icerikYukle(PRATIK_YA_DA_KATALOG?.id ?? null)
    .catch(() => undefined)
    .then(() =>
      kok.render(
        <StrictMode>
          <App />
        </StrictMode>,
      ),
    );
}
