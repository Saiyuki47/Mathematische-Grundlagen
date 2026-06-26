import { useState } from 'react'
import { uebungsblaetter } from '../data/uebungsblaetter'
import LineGraph from './LineGraph'

export default function Uebungsblaetter() {
  const [selectedId, setSelectedId] = useState(uebungsblaetter[0]?.id ?? '')
  const [open, setOpen] = useState<Set<string>>(new Set())

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  const toggle = (key: string) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div>
      <div className="section-header">
        <h2>Übungsblätter</h2>
        <p>Aufgaben und Musterlösungen nach Übungsblatt geordnet.</p>
      </div>

      {uebungsblaetter.length > 1 && (
        <div className="filter-row">
          {uebungsblaetter.map(b => (
            <button
              key={b.id}
              type="button"
              className={`filter-btn${selectedId === b.id ? ' on' : ''}`}
              onClick={() => setSelectedId(b.id)}
            >
              Blatt {b.nr}
            </button>
          ))}
        </div>
      )}

      {blatt && (
        <>
          <div className="ub-header card">
            <h3 className="ub-title">Übungsblatt {blatt.nr} – {blatt.titel}</h3>
            {blatt.beschreibung && (
              <p className="ub-desc">{blatt.beschreibung}</p>
            )}
          </div>

          {blatt.aufgaben.map(aufgabe => (
            <div key={aufgabe.id} className="card">
              <p className="ub-task-nr">Aufgabe {aufgabe.nr}</p>
              <p className="q-title">{aufgabe.title}</p>

              <div className="sub-aufgaben">
                {aufgabe.subaufgaben.map(sub => {
                  const hintKey = `${blatt.id}-${aufgabe.id}-${sub.letter}-hint`
                  const solKey = `${blatt.id}-${aufgabe.id}-${sub.letter}-sol`
                  const hintOpen = open.has(hintKey)
                  const solOpen = open.has(solKey)

                  return (
                    <div key={sub.letter} className="sub-aufgabe">
                      <p className="sub-letter">({sub.letter})</p>
                      <div className="sub-body">
                        <p className="sub-text">{sub.text}</p>
                        {sub.taskGraph && (
                          <div className="graph-wrap graph-wrap--task">
                            <LineGraph data={sub.taskGraph} />
                          </div>
                        )}
                        <div className="sub-actions">
                          <button
                            type="button"
                            className="toggle-btn toggle-btn--hint"
                            onClick={() => toggle(hintKey)}
                          >
                            {hintOpen ? '▼ Tipp verbergen' : '▶ Tipp anzeigen'}
                          </button>
                          <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => toggle(solKey)}
                          >
                            {solOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                          </button>
                        </div>
                        {hintOpen && (
                          <div className="hint-accordion">
                            {sub.hint.map((section, idx) => {
                              const sKey = `${hintKey}-${idx}`
                              const sOpen = open.has(sKey)
                              return (
                                <div key={section.title} className="hint-section">
                                  <button
                                    type="button"
                                    className="hint-section-btn"
                                    onClick={() => toggle(sKey)}
                                  >
                                    <span className="hint-section-icon">{section.icon}</span>
                                    <span className="hint-section-title">{section.title}</span>
                                    <span className={`hint-section-arrow${sOpen ? ' hint-section-arrow--open' : ''}`}>▶</span>
                                  </button>
                                  {sOpen && (
                                    <div className="hint-section-body">{section.content}</div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )}
                        {solOpen && (
                          <div className="solution-wrap">
                            <pre className="solution-block">{sub.solution}</pre>
                            {sub.graph && (
                              <div className="graph-wrap">
                                <LineGraph data={sub.graph} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
