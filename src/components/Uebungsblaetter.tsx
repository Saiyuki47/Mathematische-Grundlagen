import { useState, useMemo, type CSSProperties } from 'react'
// eslint-disable-next-line react-doctor/no-flush-sync -- offizielles React-Muster: flushSync + scrollIntoView, um nach dem Ansichtswechsel sofort zur Ziel-Aufgabe zu scrollen
import { flushSync } from 'react-dom'
import { useDoneTracker, useTaskDeepLink, getHashDetail, setHashDetail, OffeneAufgaben, type OffenItem } from 'lernseiten-ui'
import { uebungsblaetter } from '../data/uebungsblaetter'
import { referenzTitelById } from '../data/referenz'
import { mathRich } from '../utils/MathRich'
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
  const [view, setView] = useState<'blatt' | 'offen'>('blatt')
  const { done, toggle: toggleDone, ratio } = useDoneTracker()
  const listRef = useTaskDeepLink<HTMLDivElement>(selectedId)

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  // Alle noch nicht als „verstanden" markierten Teilaufgaben (über alle Blätter).
  const offen = useMemo<OffenItem[]>(() => {
    const out: OffenItem[] = []
    for (const b of uebungsblaetter)
      for (const a of b.aufgaben)
        for (const sub of a.subaufgaben) {
          const key = `${b.id}-${a.id}-${sub.letter}`
          if (!done.has(key)) {
            out.push({
              key,
              blattId: b.id,
              blattLabel: `${b.tabLabel ?? `Blatt ${b.nr}`} — ${b.titel}`,
              aufgabeNr: String(a.nr),
              label: `Aufgabe ${a.nr} (${sub.letter})${a.title ? ` — ${a.title}` : ''}`,
            })
          }
        }
    return out
  }, [done])

  // Aus der „Noch offen"-Liste zur Aufgabe zurückspringen: Blatt wählen + Ansicht
  // synchron umschalten (flushSync), dann steht die Karte im DOM → direkt scrollen.
  const goToTask = (blattId: string, aufgabeNr: string) => {
    flushSync(() => {
      setSelectedId(blattId)
      setView('blatt')
    })
    setHashDetail(blattId, aufgabeNr, 'uebung')
    listRef.current?.querySelector(`[data-aufgabe="${aufgabeNr}"]`)?.scrollIntoView({ block: 'start' })
  }

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

      <div className="filter-row" style={{ marginBottom: '0.6rem' }}>
        <button
          type="button"
          className={`filter-btn${view === 'blatt' ? ' on' : ''}`}
          onClick={() => setView('blatt')}
        >
          📚 Nach Blatt
        </button>
        <button
          type="button"
          className={`filter-btn${view === 'offen' ? ' on' : ''}`}
          onClick={() => setView('offen')}
        >
          📌 Noch offen{offen.length ? ` (${offen.length})` : ''}
        </button>
      </div>

      {view === 'offen' ? (
        <OffeneAufgaben items={offen} onGo={goToTask} />
      ) : (
        <>
          {uebungsblaetter.length > 1 && (
        <div className="filter-row">
          {uebungsblaetter.map(b => (
            <button
              key={b.id}
              type="button"
              className={`filter-btn${selectedId === b.id ? ' on' : ''}`}
              onClick={() => setSelectedId(b.id)}
            >
              {b.tabLabel ?? `Blatt ${b.nr}`}
            </button>
          ))}
        </div>
      )}

      {blatt && (
        <>
          <div className="ub-header card">
            <h3 className="ub-title">{blatt.tabLabel ? `${blatt.tabLabel} – ${blatt.titel}` : `Übungsblatt ${blatt.nr} – ${blatt.titel}`}</h3>
            {blatt.beschreibung && (
              <p className="ub-desc">{blatt.beschreibung}</p>
            )}
            {blatt.hinweis && (
              <div className="ub-disclaimer" role="note">
                <span className="ub-disclaimer-icon" aria-hidden="true">⚠️</span>
                <span className="ub-disclaimer-text">{blatt.hinweis}</span>
              </div>
            )}
            {(blatt.pdf || (blatt.loesungen && blatt.loesungen.length > 0)) && (
              <div style={refLinksRow}>
                {blatt.pdf && (
                  <a
                    href={import.meta.env.BASE_URL + encodeURI(blatt.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={refLinkStyle}
                  >
                    📄 {blatt.id.includes('klausur') ? 'Original-Klausur' : 'Original-Übungsblatt'} (PDF) öffnen
                  </a>
                )}
                {blatt.loesungen?.map(l => (
                  <a
                    key={l.pfad}
                    href={import.meta.env.BASE_URL + encodeURI(l.pfad)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={refLinkStyle}
                  >
                    ✅ {l.label}
                  </a>
                ))}
              </div>
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
                        <div className="sub-text">{mathRich(sub.text)}</div>
                        {sub.taskGraph && (
                          <div className="graph-wrap graph-wrap--task">
                            <LineGraph data={sub.taskGraph} />
                          </div>
                        )}
                        <div className="ub-hints-section">
                          <button
                            type="button"
                            className="toggle-btn toggle-btn--hint"
                            onClick={() => toggle(hintKey)}
                          >
                            {hintOpen ? '▼ Tipp verbergen' : '▶ Tipp anzeigen'}
                          </button>
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
                                      <div className="hint-section-body">{mathRich(section.content)}</div>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
                        {sub.solution && (
                          <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => toggle(solKey)}
                          >
                            {solOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                          </button>
                        )}
                        {sub.solution && solOpen && (
                          <div className="solution-wrap">
                            <pre className="solution-block">{mathRich(sub.solution)}</pre>
                            {sub.graph && (
                              <div className="graph-wrap">
                                <LineGraph data={sub.graph} />
                              </div>
                            )}
                            {sub.abbildung && (
                              <div className="abbildung-wrap">{sub.abbildung}</div>
                            )}
                          </div>
                        )}
                        <button
                          type="button"
                          className={`toggle-btn${isDone ? ' done' : ''}`}
                          onClick={() => toggleDone(baseKey)}
                        >
                          {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
                        </button>
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
        </>
      )}
    </div>
  )
}
