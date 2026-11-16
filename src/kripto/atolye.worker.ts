// Kod atölyesinin Web Worker'ı: öğrenci kodunu sayfadan ayrı çalıştırır; sonsuz döngüde
// sayfa donmaz, ana iş parçacığı worker'ı sonlandırır (src/kripto/atolye.ts).
import { calistir } from "./atolye";

self.onmessage = async (e: MessageEvent<{ kod: string; kontrol: string }>) => {
  const sonuc = await calistir(e.data.kod, e.data.kontrol);
  (self as unknown as Worker).postMessage(sonuc);
};
