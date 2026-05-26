import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Cheatsheet from './components/Cheatsheet'
import Quiz from './components/Quiz'
import Uebungsblaetter from './components/Uebungsblaetter'

export type TabId = 'uebung' | 'cheat' | 'quiz'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('uebung')

  return (
    <>
      <Header />
      <div className="container">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'cheat' && <Cheatsheet />}
        {activeTab === 'quiz' && <Quiz />}
      </div>
    </>
  )
}

export default App
