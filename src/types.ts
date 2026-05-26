export type Difficulty = 'easy' | 'med' | 'hard'

export interface QuizQuestion {
  q: string
  opts: string[]
  ans: number
  exp: string
}

export interface CheatCard {
  title: string
  content: string
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

export interface MatheSubaufgabe {
  letter: string
  text: string
  hint: string
  solution: string
  graph?: LineGraphData      // shown in solution reveal
  taskGraph?: LineGraphData  // shown directly in task (always visible)
}

export interface MatheAufgabe {
  id: string
  nr: number
  title: string
  subaufgaben: MatheSubaufgabe[]
}

export interface MatheBlatt {
  id: string
  nr: string
  titel: string
  beschreibung?: string
  aufgaben: MatheAufgabe[]
}
