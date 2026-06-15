import type { ReactNode } from 'react'
import type { HintSection } from '../../types'

export const h = (
  konzept: ReactNode,
  vorgehensweise: ReactNode,
  beispiel: ReactNode,
  fehler: ReactNode,
): HintSection[] => [
  { icon: '💡', title: 'Konzept verstehen', content: konzept },
  { icon: '🔍', title: 'Vorgehensweise', content: vorgehensweise },
  { icon: '📝', title: 'Syntax / Beispiel', content: beispiel },
  { icon: '⚠️', title: 'Häufige Fehler', content: fehler },
]
