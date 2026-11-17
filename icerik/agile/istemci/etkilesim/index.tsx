// Agile ve Scrum derslerinin etkileşimli şekilleri: Gorsel.etkilesim adı -> bileşen.
import type { ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import {
  AgileMi,
  ArtefaktTaahhut,
  CynefinSiniflandirici,
  DailyMi,
  DegerTerazisi,
  IlkeEslestir,
  IsrafAvi,
  KimKararVerir,
  RehberdeVarMi,
  RetroTahtasi,
  SutunDedektifi,
  TerimHaritasi,
} from "./siniflandir";
import { DodKurucu, TimeboxHesap } from "./scrum";
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
  kimKarar: KimKararVerir,
  timebox: TimeboxHesap,
  dailyMi: DailyMi,
  retroTahtasi: RetroTahtasi,
  dodKurucu: DodKurucu,
  artefaktTaahhut: ArtefaktTaahhut,
};
