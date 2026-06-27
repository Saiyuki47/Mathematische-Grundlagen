import type { FlashCard } from 'lernseiten-ui'
import { cheatCards } from './cheatsheet'
import { quizFragen } from './quiz'

// Karteikarten werden aus vorhandenen Inhalten abgeleitet, damit nur eine Quelle
// gepflegt werden muss. Primär aus der Formelsammlung (Begriff/Regel → Formel),
// ergänzt um die Quizfragen (Frage → Erklärung). Alle Felder sind reine Strings
// (Unicode-Mathe), wie es die Engine erwartet.
const cheatKarten: FlashCard[] = []
for (const c of cheatCards) {
  if (!c.plain) continue
  cheatKarten.push({
    id: `c-${c.title}`,
    front: c.title,
    back: c.plain,
    tag: 'Formelsammlung',
  })
}

export const karteikarten: FlashCard[] = [
  ...cheatKarten,
  ...quizFragen.map((q, i) => ({
    id: `q-${i}`,
    front: q.frage,
    back: q.erklaerung,
    tag: q.quelle,
  })),
]
