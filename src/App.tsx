import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Cheatsheet from './components/Cheatsheet'
import Uebungsblaetter from './components/Uebungsblaetter'
import { Quiz, useTheme } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'

export type TabId = 'uebung' | 'cheat' | 'quiz'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <div className="container">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'cheat' && <Cheatsheet />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
      </div>
    </>
  )
}

export default App
