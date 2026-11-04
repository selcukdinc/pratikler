import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { icerikYukle } from "./lib/icerik";
import { PRATIK_YA_DA_KATALOG } from "./lib/pratik";
import "./styles.css";

// Pratiğin ders, lab ve çıkmış sınav içeriği sayfa çizilmeden önce yüklenir;
// yüklenemezse site bu sayfalar olmadan açılır
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
