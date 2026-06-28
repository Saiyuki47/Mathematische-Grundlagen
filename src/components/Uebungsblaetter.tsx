import { useState, type CSSProperties } from 'react'
import { useDoneTracker, useTaskDeepLink, getHashDetail } from 'lernseiten-ui'
import { uebungsblaetter } from '../data/uebungsblaetter'
import { referenzTitelById } from '../data/referenz'
import LineGraph from './LineGraph'

const refLinksRow: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '0.5rem 0 0' }
const refLinkStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.8rem',
  padding: '0.2rem 0.6rem',
  border: '1px solid var(--blue, #2563eb)',
  borderRadius: '999px',
  color: 'var(--blue, #2563eb)',
  textDecoration: 'none',
  lineHeight: 1.3,
}

export default function Uebungsblaetter() {
  const [selectedId, setSelectedId] = useState(() => {
    const b = getHashDetail().blatt
    return b && uebungsblaetter.some(x => x.id === b) ? b : (uebungsblaetter[0]?.id ?? '')
  })
  const [open, setOpen] = useState<Set<string>>(new Set())
  const { done, toggle: toggleDone, ratio } = useDoneTracker()
  const listRef = useTaskDeepLink<HTMLDivElement>(selectedId)

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  const toggle = (key: string) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const taskKeys = blatt
    ? blatt.aufgaben.flatMap(a => a.subaufgaben.map(sub => `${blatt.id}-${a.id}-${sub.letter}`))
    : []
  const verstanden = taskKeys.filter(k => done.has(k)).length
  const pct = Math.round(ratio(taskKeys) * 100)

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
            {taskKeys.length > 0 && (
              <>
                <div className="progress-wrap" style={{ marginTop: '0.75rem' }}>
                  <div className="progress-bar" style={{ '--bar-w': `${pct}%` } as CSSProperties} />
                </div>
                <p className="ub-desc" style={{ marginTop: '0.4rem' }}>
                  {verstanden} / {taskKeys.length} Teilaufgaben verstanden ({pct}%)
                </p>
              </>
            )}
          </div>

          <div ref={listRef}>
            {blatt.aufgaben.map(aufgabe => (
            <div key={aufgabe.id} className="card" data-aufgabe={String(aufgabe.nr)}>
              <p className="ub-task-nr">Aufgabe {aufgabe.nr}</p>
              <p className="q-title">{aufgabe.title}</p>
              {aufgabe.referenz && aufgabe.referenz.length > 0 && (
                <div style={refLinksRow}>
                  {aufgabe.referenz.map(rid => (
                    <a key={rid} href={`#referenz/${rid}`} style={refLinkStyle}>
                      📘 {referenzTitelById[rid] ?? rid}
                    </a>
                  ))}
                </div>
              )}

              <div className="sub-aufgaben">
                {aufgabe.subaufgaben.map(sub => {
                  const baseKey = `${blatt.id}-${aufgabe.id}-${sub.letter}`
                  const hintKey = `${baseKey}-hint`
                  const solKey = `${baseKey}-sol`
                  const hintOpen = open.has(hintKey)
                  const solOpen = open.has(solKey)
                  const isDone = done.has(baseKey)

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
                          <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => toggleDone(baseKey)}
                            style={isDone ? { color: 'var(--green, #2ea043)', borderColor: 'var(--green, #2ea043)' } : undefined}
                          >
                            {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
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
          </div>
        </>
      )}
    </div>
  )
}
