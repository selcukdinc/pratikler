// Agile ve Scrum derslerinin etkileşimli şekilleri: Gorsel.etkilesim adı -> bileşen.
import type { ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { AgileMi, CynefinSiniflandirici, DegerTerazisi, IlkeEslestir, IsrafAvi, RehberdeVarMi, SutunDedektifi, TerimHaritasi } from "./siniflandir";
import { DarbogazSeridi, DegerEgrisi, LittleHesap, PartiOyunu } from "./akis";
import "./etkilesim.css";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {
  degerEgrisi: DegerEgrisi,
  cynefin: CynefinSiniflandirici,
  degerTerazisi: DegerTerazisi,
  ilkeEslestir: IlkeEslestir,
  agileMi: AgileMi,
  partiOyunu: PartiOyunu,
  littleHesap: LittleHesap,
  darbogaz: DarbogazSeridi,
  israfAvi: IsrafAvi,
  sutunDedektifi: SutunDedektifi,
  rehberdeVarMi: RehberdeVarMi,
  terimHaritasi: TerimHaritasi,
};
