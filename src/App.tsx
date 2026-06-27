import Header from './components/Header'
import Tabs from './components/Tabs'
import Cheatsheet from './components/Cheatsheet'
import Themen from './components/Themen'
import Hilfsmittel from './components/Hilfsmittel'
import Uebungsblaetter from './components/Uebungsblaetter'
import { Quiz, Flashcards, GlobalSearch, Moodle, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { searchIndex } from './data/searchIndex'
import { dateienTree } from './data/dateien'

export type TabId = 'uebung' | 'themen' | 'referenz' | 'hilfsmittel' | 'moodle' | 'quiz' | 'karten'

const TABS: readonly TabId[] = ['uebung', 'themen', 'referenz', 'hilfsmittel', 'moodle', 'quiz', 'karten']

function App() {
  const [activeTab, setActiveTab] = useHashTab(TABS, 'uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <div className="container">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch index={searchIndex} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'themen' && <Themen />}
        {activeTab === 'referenz' && <Cheatsheet />}
        {activeTab === 'hilfsmittel' && <Hilfsmittel />}
        {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
        {activeTab === 'karten' && <Flashcards cards={karteikarten} />}
      </div>
    </>
  )
}

export default App
