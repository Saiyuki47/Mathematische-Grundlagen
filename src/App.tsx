import { lazy, Suspense } from 'react'
import { Header, GlobalSearch, Tabs, tabDefs, STANDARD_TAB_REIHENFOLGE, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { dateienTree } from './data/dateien'

const Uebungsblaetter = lazy(() => import('./components/Uebungsblaetter'))
const Referenz = lazy(() => import('./components/Referenz'))
const Hilfsmittel = lazy(() => import('./components/Hilfsmittel'))
const Quiz = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Quiz })))
const Flashcards = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Flashcards })))
const Moodle = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Moodle })))

// Reihenfolge der Moodle-Kacheln: Themen in der Reihenfolge, wie sie im Kurs
// drankamen (abgeleitet aus der Nummerierung der Übungssammlung), dann Übungen,
// zuletzt Organisatorisches.
const moodleOrder = [
  'material/Mengen und Logik',
  'material/Zahlenbereiche',
  'material/Relationen und Abbildungen',
  'material/Letzte Vorlesung Relationen, injektiv, surjektiv',
  'material/Kombinatorik',
  'material/Folgen und Reihen',
  'material/Grenzwerte, Stetigkeit',
  'material/Spezielle Funktionen',
  'material/Differentialrechnung',
  'material/Ein wenig zum Trainieren Übungen',
  'material/ExtraÜbungslbatt',
  'material/Orga',
]

const moodleGroupTitles = { material: 'Vorlesung & Themen', sonstiges: 'Organisation' }

// Tab-IDs, -Reihenfolge und -Icons sind über alle Lernseiten vereinheitlicht;
// die Tab-Leiste kommt zentral aus lernseiten-ui (tabDefs).
const TABS = STANDARD_TAB_REIHENFOLGE
export type TabId = (typeof TABS)[number]
const tabs = tabDefs(TABS)

function App() {
  const [activeTab, setActiveTab] = useHashTab(TABS, 'uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header
        logo={<>Mathe<span>.</span>Grundlagen</>}
        subtitle="Mathematische Grundlagen"
        current="mathe"
        theme={theme}
        onToggleTheme={toggle}
      />
      <div className="container">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch loadIndex={() => import('./data/searchIndex').then(m => m.searchIndex)} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          {activeTab === 'uebung' && <Uebungsblaetter />}
          {activeTab === 'referenz' && <Referenz />}
          {activeTab === 'hilfsmittel' && <Hilfsmittel />}
          {activeTab === 'moodle' && (
            <Moodle
              tree={dateienTree}
              baseUrl={import.meta.env.BASE_URL}
              order={moodleOrder}
              groupTitles={moodleGroupTitles}
            />
          )}
          {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
          {activeTab === 'karten' && <Flashcards cards={karteikarten} />}
        </Suspense>
      </div>
    </>
  )
}

export default App
