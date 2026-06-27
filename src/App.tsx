import Header from './components/Header'
import Tabs from './components/Tabs'
import Cheatsheet from './components/Cheatsheet'
import Uebungsblaetter from './components/Uebungsblaetter'
import { Quiz, Flashcards, GlobalSearch, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { searchIndex } from './data/searchIndex'

export type TabId = 'uebung' | 'cheat' | 'quiz' | 'karten'

const TABS: readonly TabId[] = ['uebung', 'cheat', 'quiz', 'karten']

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
        {activeTab === 'cheat' && <Cheatsheet />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
        {activeTab === 'karten' && <Flashcards cards={karteikarten} />}
      </div>
    </>
  )
}

export default App
