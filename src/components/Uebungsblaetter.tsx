import { useState } from 'react'
import { uebungsblaetter } from '../data/uebungsblaetter'
import LineGraph from './LineGraph'
import { renderFractions } from '../utils/fractionRender'

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
        <p>Aufgaben mit Tipps und Musterlösungen.</p>
      </div>

      {uebungsblaetter.length > 1 && (
        <div className="filter-row">
          {uebungsblaetter.map(b => (
            <button
              key={b.id}
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
                        <p className="sub-text">{renderFractions(sub.text)}</p>
                        {sub.taskGraph && (
                          <div className="graph-wrap graph-wrap--task">
                            <LineGraph data={sub.taskGraph} />
                          </div>
                        )}
                        <div className="sub-actions">
                          <button
                            className="toggle-btn toggle-btn--hint"
                            onClick={() => toggle(hintKey)}
                          >
                            {hintOpen ? '▼ Tipp verbergen' : '▶ Tipp anzeigen'}
                          </button>
                          <button
                            className="toggle-btn"
                            onClick={() => toggle(solKey)}
                          >
                            {solOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                          </button>
                        </div>
                        {hintOpen && (
                          <div className="hint-block">
                            <span className="hint-icon">💡</span>
                            {renderFractions(sub.hint)}
                          </div>
                        )}
                        {solOpen && (
                          <div className="solution-wrap">
                            <pre className="solution-block">{renderFractions(sub.solution)}</pre>
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
