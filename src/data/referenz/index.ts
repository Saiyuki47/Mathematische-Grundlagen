import type { ReferenzKarte } from '../../types'
import { karte as c_bruchrechnen } from './bruchrechnen'
import { karte as c_potenzregeln } from './potenzregeln'
import { karte as c_wurzelregeln } from './wurzelregeln'
import { karte as c_binomische_formeln } from './binomische-formeln'
import { karte as c_ausklammern } from './ausklammern'
import { karte as c_kuerzen } from './kuerzen'
import { karte as c_rechenreihenfolge } from './rechenreihenfolge'
import { karte as c_geradengleichung } from './geradengleichung'
import { karte as c_mengen_grundbegriffe } from './mengen-grundbegriffe'
import { karte as c_mengenoperationen } from './mengenoperationen'
import { karte as c_de_morgan_potenzmenge } from './de-morgan-potenzmenge'
import { karte as c_mengendarstellung } from './mengendarstellung'
import { karte as c_logik_operatoren } from './logik-operatoren'
import { karte as c_logik_aequivalenzen } from './logik-aequivalenzen'
import { karte as c_quantoren } from './quantoren'
import { karte as c_logik_beweise } from './logik-beweise'
import { karte as c_zahlenbereiche } from './zahlenbereiche'
import { karte as c_summen_produktzeichen } from './summen-produktzeichen'
import { karte as c_vollstaendige_induktion } from './vollstaendige-induktion'
import { karte as c_betrag_intervalle } from './betrag-intervalle'
import { karte as c_supremum_infimum } from './supremum-infimum'
import { karte as c_relationen } from './relationen'
import { karte as c_aequivalenzrelationen } from './aequivalenzrelationen'
import { karte as c_abbildungen_grundbegriffe } from './abbildungen-grundbegriffe'
import { karte as c_funktionen_eigenschaften } from './funktionen-eigenschaften'
import { karte as c_komposition_umkehr } from './komposition-umkehr'
import { karte as c_bild_urbild } from './bild-urbild'
import { karte as c_kombinatorik } from './kombinatorik'
import { karte as c_binomialkoeffizienten } from './binomialkoeffizienten'
import { karte as c_abzaehlbarkeit } from './abzaehlbarkeit'
import { karte as c_folgen_grundbegriffe } from './folgen-grundbegriffe'
import { karte as c_folgen_konvergenz } from './folgen-konvergenz'
import { karte as c_grenzwertsaetze_folgen } from './grenzwertsaetze-folgen'
import { karte as c_wichtige_grenzwerte } from './wichtige-grenzwerte'
import { karte as c_monotonie_bolzano } from './monotonie-bolzano'
import { karte as c_sandwich_cauchy } from './sandwich-cauchy'
import { karte as c_rekursive_folgen } from './rekursive-folgen'
import { karte as c_reihen_konvergenz } from './reihen-konvergenz'
import { karte as c_geometrische_summenformel } from './geometrische-summenformel'
import { karte as c_funktionsgrenzwerte } from './funktionsgrenzwerte'
import { karte as c_polynomdivision } from './polynomdivision'
import { karte as c_landau_notation } from './landau-notation'
import { karte as c_stetigkeit } from './stetigkeit'
import { karte as c_stetigkeit_saetze } from './stetigkeit-saetze'
import { karte as c_exp_log } from './exp-log'
import { karte as c_trigonometrie } from './trigonometrie'
import { karte as c_differenzierbarkeit } from './differenzierbarkeit'
import { karte as c_ableitungsregeln } from './ableitungsregeln'
import { karte as c_standardableitungen } from './standardableitungen'
import { karte as c_mittelwertsatz } from './mittelwertsatz'

// Alle Referenz-Karten in Stoff-Reihenfolge. Pro Thema eine Datei in diesem Ordner.
export const referenzKarten: ReferenzKarte[] = [
  c_bruchrechnen,
  c_potenzregeln,
  c_wurzelregeln,
  c_binomische_formeln,
  c_ausklammern,
  c_kuerzen,
  c_rechenreihenfolge,
  c_geradengleichung,
  c_mengen_grundbegriffe,
  c_mengenoperationen,
  c_de_morgan_potenzmenge,
  c_mengendarstellung,
  c_logik_operatoren,
  c_logik_aequivalenzen,
  c_quantoren,
  c_logik_beweise,
  c_zahlenbereiche,
  c_summen_produktzeichen,
  c_vollstaendige_induktion,
  c_betrag_intervalle,
  c_supremum_infimum,
  c_relationen,
  c_aequivalenzrelationen,
  c_abbildungen_grundbegriffe,
  c_funktionen_eigenschaften,
  c_komposition_umkehr,
  c_bild_urbild,
  c_kombinatorik,
  c_binomialkoeffizienten,
  c_abzaehlbarkeit,
  c_folgen_grundbegriffe,
  c_folgen_konvergenz,
  c_grenzwertsaetze_folgen,
  c_wichtige_grenzwerte,
  c_monotonie_bolzano,
  c_sandwich_cauchy,
  c_rekursive_folgen,
  c_reihen_konvergenz,
  c_geometrische_summenformel,
  c_funktionsgrenzwerte,
  c_polynomdivision,
  c_landau_notation,
  c_stetigkeit,
  c_stetigkeit_saetze,
  c_exp_log,
  c_trigonometrie,
  c_differenzierbarkeit,
  c_ableitungsregeln,
  c_standardableitungen,
  c_mittelwertsatz,
]

export const referenzTitelById: Record<string, string> = Object.fromEntries(
  referenzKarten.map(k => [k.id, k.titel]),
)
