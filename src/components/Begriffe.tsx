import { useMemo, useState, type KeyboardEvent } from 'react'
import { MathText } from 'lernseiten-ui'
import { begriffGruppen } from '../data/begriffe'

// Begriffs-Glossar zum Auswendiglernen. Lernmodus: Definitionen sind verdeckt
// und werden pro Begriff durch Antippen aufgedeckt — Selbstabfrage wie mit
// abgedecktem Karteikarten-Stapel.
export default function Begriffe() {
  const [filter, setFilter] = useState('')
  const [lernmodus, setLernmodus] = useState(false)
  const [aufgedeckt, setAufgedeckt] = useState<Set<string>>(new Set())

  const gruppen = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return begriffGruppen
    // Ein Durchlauf: Gruppen filtern und leere direkt verwerfen.
    const treffer: typeof begriffGruppen = []
    for (const g of begriffGruppen) {
      const begriffe = g.begriffe.filter(
        b => b.begriff.toLowerCase().includes(q) || b.definition.toLowerCase().includes(q),
      )
      if (begriffe.length > 0) treffer.push({ ...g, begriffe })
    }
    return treffer
  }, [filter])

  const anzahl = begriffGruppen.reduce((a, g) => a + g.begriffe.length, 0)

  const toggleLernmodus = () => {
    setLernmodus(m => !m)
    setAufgedeckt(new Set())
  }

  const aufdecken = (key: string) => {
    if (!lernmodus) return
    setAufgedeckt(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="card">
      <h2>Begriffe lernen</h2>
      <p className="beg-intro">
        Alle {anzahl} Definitionen aus Vorlesung und Übungsblättern zum Auswendiglernen — von{' '}
        <em>injektiv</em> bis <em>linkstotal</em>. Im Lernmodus sind die Definitionen verdeckt:
        Begriff lesen, Definition aufsagen, zum Prüfen antippen.
      </p>
      <div className="beg-toolbar">
        <input
          type="search"
          className="beg-filter"
          placeholder="Begriff suchen …"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          aria-label="Begriffe filtern"
        />
        <button
          type="button"
          className={`beg-lern-btn${lernmodus ? ' active' : ''}`}
          onClick={toggleLernmodus}
        >
          {lernmodus ? '👀 Definitionen zeigen' : '🙈 Definitionen verdecken'}
        </button>
      </div>
      {gruppen.length === 0 && <p className="beg-leer">Kein Begriff passt zu „{filter}".</p>}
      {gruppen.map(g => (
        <section key={g.titel} className="beg-gruppe">
          <h3 className="beg-gruppe-titel">{g.titel}</h3>
          <dl className="beg-liste">
            {g.begriffe.map(b => {
              const key = `${g.titel}|${b.begriff}`
              const verdeckt = lernmodus && !aufgedeckt.has(key)
              // Interaktiv nur im Lernmodus – dann aber vollständig (Klick,
              // Rolle, Fokus, Tastatur); sonst eine rein statische Liste.
              const interaktiv = lernmodus
                ? {
                    onClick: () => aufdecken(key),
                    role: 'button' as const,
                    tabIndex: 0,
                    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        aufdecken(key)
                      }
                    },
                  }
                : undefined
              return (
                <div
                  {...interaktiv}
                  key={b.begriff}
                  className={`beg-item${verdeckt ? ' beg-item--verdeckt' : ''}`}
                >
                  <dt className="beg-begriff">
                    <MathText>{b.begriff}</MathText>
                  </dt>
                  <dd className="beg-definition">
                    <div className="beg-definition-inhalt">
                      <MathText block>{b.definition}</MathText>
                      {b.merke && (
                        <p className="beg-merke">
                          <span className="beg-merke-label">Merke:</span> <MathText>{b.merke}</MathText>
                        </p>
                      )}
                    </div>
                    {verdeckt && <span className="beg-aufdecken-hinweis">Antippen zum Aufdecken</span>}
                  </dd>
                </div>
              )
            })}
          </dl>
        </section>
      ))}
    </div>
  )
}
