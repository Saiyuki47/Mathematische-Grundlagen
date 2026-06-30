import type { ReactNode } from 'react'
import type { HintSection } from '../../types'

/** Überstrich (Komplement) über einen beliebigen Ausdruck, z. B. <Ol>A ∪ B</Ol> = (A∪B)‾. */
export const Ol = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: 'overline' }}>{children}</span>
)

export const h = (
  konzept: ReactNode,
  vorgehensweise: ReactNode,
  beispiel: ReactNode,
  fehler: ReactNode,
  kontrolle: ReactNode,
): HintSection[] => [
  { icon: '💡', title: 'Konzept verstehen', content: konzept },
  { icon: '🔍', title: 'Vorgehensweise', content: vorgehensweise },
  { icon: '📝', title: 'Syntax / Beispiel', content: beispiel },
  { icon: '⚠️', title: 'Häufige Fehler', content: fehler },
  { icon: '✅', title: 'Kontrollfrage', content: kontrolle },
]
