import type { CSSProperties } from 'react'
import { MathText } from 'lernseiten-ui'
import { klausurFallen, type Falle } from '../data/klausurfallen'

// Renderer der Klausur-Fallen. Die Formeln in falle/falsch/richtig/beispiel/merke
// werden mit dem KaTeX-Renderer dieses Projekts (MathText) gesetzt – einfaches
// $…$ inline, Block-Beispiele mit Zeilenumbrüchen über <MathText block>.

const grpId = (id: string) => `fallen-grp-${id}`

const card: CSSProperties = {
  border: '1px solid var(--border)',
  borderLeft: '3px solid var(--red, #dc2626)',
  borderRadius: '8px',
  background: 'var(--bg2)',
  padding: '0.6rem 0.85rem',
  margin: '0.7rem 0',
}
const titelStyle: CSSProperties = { fontWeight: 700, color: 'var(--text)', margin: '0 0 0.4rem' }
const falleStyle: CSSProperties = { margin: '0 0 0.45rem', color: 'var(--text2)', lineHeight: 1.55 }
const row: CSSProperties = { display: 'flex', gap: '0.5rem', alignItems: 'baseline', margin: '0.25rem 0', flexWrap: 'wrap' }
const badge = (bg: string): CSSProperties => ({
  flexShrink: 0,
  fontSize: '0.7rem',
  fontWeight: 700,
  color: '#fff',
  background: bg,
  borderRadius: '4px',
  padding: '0.08rem 0.42rem',
  whiteSpace: 'nowrap',
})
const exprStyle: CSSProperties = { color: 'var(--text)', lineHeight: 1.5 }
const beispielBox: CSSProperties = {
  margin: '0.4rem 0',
  padding: '0.45rem 0.7rem',
  background: 'var(--bg3)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  color: 'var(--text)',
  lineHeight: 1.7,
  overflowX: 'auto',
}
const merkeStyle: CSSProperties = {
  margin: '0.45rem 0 0',
  padding: '0.4rem 0.65rem',
  background: 'var(--blue-dim)',
  borderRadius: '6px',
  fontSize: '0.9rem',
  color: 'var(--text)',
  lineHeight: 1.5,
}

function FalleCard({ f }: { f: Falle }) {
  return (
    <div style={card}>
      <p style={titelStyle}>
        ⚠️ <MathText>{f.titel}</MathText>
      </p>
      <p style={falleStyle}>
        <MathText>{f.falle}</MathText>
      </p>
      {f.falsch && (
        <div style={row}>
          <span style={badge('var(--red, #dc2626)')}>✗ so nicht</span>
          <span style={exprStyle}>
            <MathText>{f.falsch}</MathText>
          </span>
        </div>
      )}
      {f.richtig && (
        <div style={row}>
          <span style={badge('var(--green, #16a34a)')}>✓ sondern</span>
          <span style={exprStyle}>
            <MathText>{f.richtig}</MathText>
          </span>
        </div>
      )}
      {f.beispiel && (
        <div style={beispielBox}>
          <MathText block>{f.beispiel}</MathText>
        </div>
      )}
      {f.merke && (
        <p style={merkeStyle}>
          💡 <MathText>{f.merke}</MathText>
        </p>
      )}
    </div>
  )
}

export default function Klausurfallen() {
  const scrollTo = (id: string) => {
    document.getElementById(grpId(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const anzahl = klausurFallen.reduce((n, g) => n + g.fallen.length, 0)

  return (
    <div>
      <div className="section-header">
        <h2>Klausur-Fallen</h2>
        <p>
          {anzahl} nicht-intuitive Stolperfallen der Analysis-Grundlagen – aus den Übungsblättern,
          Musteraufgaben und Referenz-Karten. Sachen, die man extra lernen muss, weil sie sich nicht
          „aus dem Bauch" lösen lassen.
        </p>
      </div>

      {/* Kategorien-Übersicht */}
      <div className="card">
        <p className="quiz-hint">Kategorien</p>
        <div className="filter-row" style={{ flexWrap: 'wrap', marginBottom: 0 }}>
          {klausurFallen.map(g => (
            <button key={g.id} type="button" className="filter-btn" onClick={() => scrollTo(g.id)}>
              {g.icon} {g.titel} ({g.fallen.length})
            </button>
          ))}
        </div>
      </div>

      {/* Fallen je Kategorie */}
      {klausurFallen.map(g => (
        <div key={g.id} id={grpId(g.id)} className="card" style={{ scrollMarginTop: '1rem' }}>
          <h3 className="ub-title">
            {g.icon} {g.titel}
          </h3>
          {g.fallen.map(f => (
            <FalleCard key={f.titel} f={f} />
          ))}
        </div>
      ))}
    </div>
  )
}
