import type { SearchItem } from 'lernseiten-ui'
import { cheatCards } from './cheatsheet'
import { quizFragen } from './quiz'
import { uebungsblaetter } from './uebungsblaetter'

// Such-Index aus den Inhalten der Seite. Jeder Treffer kennt seinen Ziel-Tab,
// damit die globale Suche direkt dorthin springen kann. tab MUSS eine gültige
// TabId sein ('uebung' | 'cheat' | 'quiz'). Aufgaben-/Lösungstexte sind teils
// JSX, daher werden nur die reinen Stringfelder (Titel, Frage, Formel) indiziert.
export const searchIndex: SearchItem[] = [
  ...uebungsblaetter.flatMap(b =>
    b.aufgaben.map(a => ({
      label: `Blatt ${b.nr}, Aufgabe ${a.nr}: ${a.title}`,
      snippet: b.titel,
      tab: 'uebung',
      keywords: b.titel,
    })),
  ),
  ...cheatCards.map(c => ({
    label: c.title,
    snippet: c.plain,
    tab: 'cheat',
    keywords: 'Formelsammlung',
  })),
  ...quizFragen.map(q => ({
    label: q.frage,
    snippet: 'Quizfrage',
    tab: 'quiz',
    keywords: q.quelle ?? '',
  })),
]
