import type { ReactNode } from 'react'

export type Difficulty = 'easy' | 'med' | 'hard'

export interface CheatCard {
  title: string
  content: ReactNode
  /** Plain-Text-Fassung des Inhalts (Unicode-Mathe) für Karteikarten und Suche. */
  plain?: string
}

/** Eine aufklappbare Beispielgruppe (ein Szenario, mehrere durchgerechnete Beispiele). */
export interface ReferenzBeispielGruppe {
  szenario: string
  beispiele: string[]
}

/** Eine Referenz-Karte = ein Thema, von Grund auf erklärt (Markdown-lite + LaTeX). */
export interface ReferenzKarte {
  /** Stabiler kebab-Slug für Inhaltsverzeichnis + Deep-Link (#referenz/<id>). */
  id?: string
  titel: string
  inhalt: string
  /** Pro Szenario aufklappbare Beispiele (je 3 durchgerechnete). */
  beispiele?: ReferenzBeispielGruppe[]
}

export interface GraphLine {
  m: number       // slope
  b: number       // y-intercept
  label: string
  color?: string
}

export interface GraphPoint {
  x: number
  y: number
  label: string
}

export interface LineGraphData {
  lines: GraphLine[]
  points?: GraphPoint[]
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}

export interface HintSection {
  icon: string
  title: string
  content: ReactNode
}

export interface MatheSubaufgabe {
  letter: string
  text: ReactNode
  hint: HintSection[]
  solution?: ReactNode
  graph?: LineGraphData
  taskGraph?: LineGraphData
  /** Frei gerenderte Abbildung (z. B. Venn-Diagramm, Funktionsskizze) unter der Lösung. */
  abbildung?: ReactNode
}

export interface MatheAufgabe {
  id: string
  nr: number
  title: string
  subaufgaben: MatheSubaufgabe[]
  /** IDs der passenden Referenz-Themen → Deep-Links „📘 Referenz" (#referenz/<id>). */
  referenz?: string[]
}

export interface MatheBlatt {
  id: string
  nr: string
  titel: string
  beschreibung?: string
  aufgaben: MatheAufgabe[]
}
