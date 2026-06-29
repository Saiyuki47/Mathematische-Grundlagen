import { lazy, Suspense } from 'react'
import Tabs from './components/Tabs'
import { Header, GlobalSearch, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { searchIndex } from './data/searchIndex'
import { dateienTree } from './data/dateien'

const Uebungsblaetter = lazy(() => import('./components/Uebungsblaetter'))
const Cheatsheet = lazy(() => import('./components/Cheatsheet'))
const Hilfsmittel = lazy(() => import('./components/Hilfsmittel'))
const Quiz = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Quiz })))
const Flashcards = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Flashcards })))
const Moodle = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Moodle })))

export type TabId = 'uebung' | 'referenz' | 'hilfsmittel' | 'moodle' | 'quiz' | 'karten'

const TABS: readonly TabId[] = ['uebung', 'referenz', 'hilfsmittel', 'moodle', 'quiz', 'karten']

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
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch index={searchIndex} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          {activeTab === 'uebung' && <Uebungsblaetter />}
          {activeTab === 'referenz' && <Cheatsheet />}
          {activeTab === 'hilfsmittel' && <Hilfsmittel />}
          {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
          {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
          {activeTab === 'karten' && <Flashcards cards={karteikarten} />}
        </Suspense>
      </div>
    </>
  )
}

export default App
