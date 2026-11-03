// Etkileşimli ders şekilleri: Gorsel.etkilesim alanındaki adla seçilir
import type { ComponentType } from "react";
import type { Gorsel } from "../../gorseller/tip";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {};
