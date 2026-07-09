// Gemeinsame Datentypen der druckbaren Hilfsmittel-Sammlungen (Formelsammlung,
// Rezepte, Musteraufgaben). Eine Box = ein Themenkasten mit Zeilen; jede Zeile hat
// ein optionales Label `l` und entweder eine KaTeX-Formel `f` ODER Klartext `s`.
export interface HilfRow {
  l?: string
  f?: string
  s?: string
}
export interface HilfBox {
  t: string
  r: HilfRow[]
}
