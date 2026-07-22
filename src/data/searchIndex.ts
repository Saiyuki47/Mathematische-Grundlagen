import type { SearchItem } from 'lernseiten-ui'
import { quizFragen } from './quiz'
import { uebungsblaetter } from './uebungsblaetter'
import { referenzKarten } from './referenz'
import { begriffGruppen } from './begriffe'
import { dateienTree, type DateiFolder } from './dateien'

// Such-Index aus den Inhalten der Seite. Jeder Treffer kennt seinen Ziel-Tab
// (gültige TabId), damit die globale Suche direkt dorthin springen kann.
// Aufgaben-/Lösungstexte sind teils JSX, daher werden nur die reinen Stringfelder
// (Titel, Frage) indiziert. Der Hilfsmittel-Tab wird nicht indiziert, da seine
// Formelboxen als KaTeX-Quelle in der Komponente selbst liegen (keine Datenquelle).

// Alle Dateien (rekursiv) aus dem generierten Moodle-Baum mit ihrer Top-Level-Gruppe.
function moodleDateien(): { name: string; gruppe: string }[] {
  const out: { name: string; gruppe: string }[] = []
  for (const gruppe of dateienTree.folders) {
    const walk = (node: DateiFolder) => {
      node.files.forEach(f => out.push({ name: f.name, gruppe: gruppe.name }))
      node.folders.forEach(walk)
    }
    walk(gruppe)
  }
  return out
}

export const searchIndex: SearchItem[] = [
  // Übungsblätter → Tab "uebung"
  ...uebungsblaetter.flatMap(b =>
    b.aufgaben.map(a => ({
      label: `${b.tabLabel ?? `Blatt ${b.nr}`}, Aufgabe ${a.nr}: ${a.title}`,
      snippet: b.titel,
      tab: 'uebung',
      keywords: b.titel,
    })),
  ),
  // Referenz-Karten → Tab "referenz"
  ...referenzKarten.map(k => ({
    label: k.titel,
    snippet: 'Referenz',
    tab: 'referenz',
    keywords: 'Formelsammlung Referenz',
  })),
  // Begriffs-Glossar → Tab "referenz" (Untertab „Begriffe lernen")
  ...begriffGruppen.flatMap(g =>
    g.begriffe.map(b => ({
      label: `Begriff: ${b.begriff.replace(/\$[^$]*\$/g, '').trim()}`,
      snippet: g.titel,
      tab: 'referenz',
      keywords: 'Begriff Definition auswendig lernen',
    })),
  ),
  // Moodle-Materialien (Folien, Übungsblätter, Lösungen) → Tab "moodle"
  ...moodleDateien().map(d => ({
    label: d.name,
    snippet: d.gruppe,
    tab: 'moodle',
  })),
  // Quizfragen → Tab "quiz"
  ...quizFragen.map(q => ({
    label: q.frage,
    snippet: 'Quizfrage',
    tab: 'quiz',
    keywords: q.quelle ?? '',
  })),
]
