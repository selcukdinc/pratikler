// Etkileşimli ders şekilleri: Gorsel.etkilesim alanındaki adla seçilir. Bileşenler
// pratiğin istemci içeriğiyle yüklenir (src/lib/icerik.ts, ör. icerik/dsp/istemci).
import type { ComponentType } from "react";
import type { Gorsel } from "../../gorseller/tip";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {};
