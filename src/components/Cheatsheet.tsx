import { Referenz, MathText, type ReferenzKarte } from 'lernseiten-ui'
import { referenzKarten } from '../data/referenz'

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

export default function Cheatsheet() {
  return <Referenz karten={karten} render={renderBlock} renderInline={renderTitle} />
}
