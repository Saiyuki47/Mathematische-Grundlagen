import { lazy, Suspense } from 'react'
import { useHashSubTab } from 'lernseiten-ui'
import Cheatsheet from './Cheatsheet'

// Untertab-Umschalter für den Referenz-Tab. Das ZWEITE Hash-Segment
// (#referenz/<sub>) steuert die Ansicht. „themen" ist der Fallback – dadurch
// fallen alle Themen-/Karten-Deep-Links (#referenz/<themaId>) und auch
// #referenz/begriffe weiter in die bestehende <Cheatsheet/> durch und scrollen
// dort zur Karte bzw. öffnen das Begriffs-Glossar. „themen" ist bewusst KEINE
// existierende Karten-ID, damit dieser Durchfall funktioniert.
const Klausurfallen = lazy(() => import('./Klausurfallen'))
const SUBS = ['themen', 'fallen'] as const

const TABS: { id: (typeof SUBS)[number]; label: string }[] = [
  { id: 'themen', label: '📖 Referenz' },
  { id: 'fallen', label: '⚠️ Klausur-Fallen' },
]

export default function Referenz() {
  const [sub, setSub] = useHashSubTab(SUBS, 'themen')
  return (
    <div>
      <div className="hilf-fs-switch" role="tablist" aria-label="Referenz-Ansicht wählen">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={sub === t.id}
            className={`hilf-fs-tab${sub === t.id ? ' active' : ''}`}
            onClick={() => setSub(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {sub === 'fallen' ? (
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          <Klausurfallen />
        </Suspense>
      ) : (
        <Cheatsheet />
      )}
    </div>
  )
}
