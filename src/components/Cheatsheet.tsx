import { useState } from 'react'
import { Referenz, MathText, getHashDetail, setHashDetail, type ReferenzKarte } from 'lernseiten-ui'
import { referenzKarten } from '../data/referenz'
import Begriffe from './Begriffe'

// Slug aus dem Titel (LaTeX entfernt) – Fallback, falls eine Karte kein
// explizites `id` hat. Stabil genug für das Inhaltsverzeichnis + Deep-Links.
const slug = (s: string, i: number) =>
  s
    .toLowerCase()
    .replace(/\$[^$]*\$/g, '')
    .replace(/[^a-z0-9äöü]+/g, '-')
    .replace(/^-+|-+$/g, '') || `thema-${i}`

// App-Renderer: Markdown-lite + LaTeX über MathText (Block bzw. inline für Titel).
const renderBlock = (t: string) => <MathText block>{t}</MathText>
const renderTitle = (t: string) => <MathText>{t}</MathText>

const karten: ReferenzKarte[] = referenzKarten.map((k, i) => ({
  id: k.id ?? slug(k.titel, i),
  titel: k.titel,
  inhalt: k.inhalt,
  beispiele: k.beispiele,
}))

const ANSICHTEN = [
  { id: 'themen', label: '📚 Themen' },
  { id: 'begriffe', label: '🧠 Begriffe lernen' },
] as const

type AnsichtId = (typeof ANSICHTEN)[number]['id']

export default function Cheatsheet() {
  // Deep-Link #referenz/begriffe öffnet direkt das Begriffs-Glossar; jedes
  // andere Detail (Karten-Id) gehört der Themen-Ansicht.
  const [ansicht, setAnsicht] = useState<AnsichtId>(() =>
    getHashDetail().blatt === 'begriffe' ? 'begriffe' : 'themen',
  )

  const wechsle = (id: AnsichtId) => {
    setAnsicht(id)
    setHashDetail(id === 'begriffe' ? 'begriffe' : undefined, undefined, 'referenz')
  }

  return (
    <div>
      <div className="ref-switch" role="tablist" aria-label="Referenz-Ansicht wählen">
        {ANSICHTEN.map(a => (
          <button
            key={a.id}
            type="button"
            role="tab"
            aria-selected={a.id === ansicht}
            className={`ref-switch-tab${a.id === ansicht ? ' active' : ''}`}
            onClick={() => wechsle(a.id)}
          >
            {a.label}
          </button>
        ))}
      </div>
      {ansicht === 'themen' && <Referenz karten={karten} render={renderBlock} renderInline={renderTitle} />}
      {ansicht === 'begriffe' && <Begriffe />}
    </div>
  )
}
