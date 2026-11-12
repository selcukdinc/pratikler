// Git ve GitHub pratiğinin istemcide yüklenen içeriği (src/lib/icerik.ts).
// Sandbox'ın görevleri ve sanal Git motoru yalnızca sandbox sayfası açılınca indirilir.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";

const icerik: PratikIstemciIcerigi = {
  gitSandbox: () => import("./gorevler").then((m) => m.GOREVLER),
};

export default icerik;
