// Backlog derslerinin etkileşimli şekilleri: Gorsel.etkilesim adı -> bileşen.
import type { ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { BacklogBuzdagi, EtkiHaritasi, HiyerarsiAgaci, IyiMiKotuMu, SaglikKontrolu } from "./kartlar";
import { AracCevirmeni, StoryKurucu, StoryMap } from "./ozel";
import "../../../agile/istemci/etkilesim/etkilesim.css";
import "./backlog.css";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {
  buzdagi: BacklogBuzdagi,
  saglik: SaglikKontrolu,
  hiyerarsi: HiyerarsiAgaci,
  aracCevirmeni: AracCevirmeni,
  etkiHaritasi: EtkiHaritasi,
  storyMap: StoryMap,
  storyKurucu: StoryKurucu,
  iyiMiKotuMu: IyiMiKotuMu,
};
