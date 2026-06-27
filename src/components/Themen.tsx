import { useState } from 'react'
import { themen } from '../data/themen'

export default function Themen() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())

  const toggle = (idx: number) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <div>
      <div className="section-header">
        <h2>Themen</h2>
        <p>Übersicht aller Themen und Schwerpunkte, abgeleitet aus den 14 Übungsblättern.</p>
      </div>

      {themen.map((thema, idx) => {
        const isOpen = openIds.has(idx)
        return (
          <div key={thema.blatt} className="card">
            <button type="button" className="schema-data-toggle" onClick={() => toggle(idx)}>
              <span className="schema-data-arrow">{isOpen ? '▼' : '▶'}</span>
              <span className="schema-data-name">
                <span className="thema-blatt">Blatt {thema.blatt}</span>
                {thema.titel}
              </span>
            </button>
            {isOpen && (
              <div className="thema-detail">
                <p className="q-text">{thema.beschreibung}</p>
                {thema.punkte.length > 0 && (
                  <ul className="thema-punkte">
                    {thema.punkte.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
