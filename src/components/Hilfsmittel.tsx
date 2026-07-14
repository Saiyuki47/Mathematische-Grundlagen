import { useEffect, useRef } from 'react'
import { useHashSubTab } from 'lernseiten-ui'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import type { HilfBox } from '../data/hilfsmittelTypes'
import { PAGE1, PAGE2 } from '../data/formelsammlung'
import { REZEPTE1, REZEPTE2 } from '../data/rezepte'
import { BEISPIELE1, BEISPIELE2 } from '../data/musteraufgaben'

// Hilfsmittel mit vier Sammlungen, je in einem eigenen Untertab (siehe SAMMLUNGEN):
// die Claude-Formelsammlung, Madis Formelsammlung (eingebettetes PDF), die
// Loesungsrezepte und die Musteraufgaben. Die Inhalte (Boxen) leben jetzt in
// data/formelsammlung.ts, data/rezepte.ts und data/musteraufgaben.ts; hier bleibt
// nur Darstellung + Druck. Ein generischer BoxPage-Renderer stellt alle drei
// druckbaren Sammlungen dar (Formel `f` als KaTeX, sonst Klartext `s`).

function K({ tex }: { tex: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (ref.current) katex.render(tex, ref.current, { throwOnError: false, displayMode: false })
  }, [tex])
  return <span ref={ref} />
}

const FS_CSS = `
.hilf-pdf{margin:0 0 1.5rem}
.hilf-pdf-fallback a{color:var(--blue,#4d9fff);font-weight:600;text-decoration:none}
.hilf-pdf-fallback a:hover{text-decoration:underline}
.hilf-pdf-frame{width:100%;height:min(82vh,920px);border:1px solid var(--border);border-radius:8px;background:#fff;display:block}
.hilf-pdf-fallback{margin:.5rem 0 0;font-size:.85rem;opacity:.8}
.fs-print-area{display:flex;flex-direction:column;gap:1.25rem}
.fs-page{background:#fff;color:#111;border:1px solid var(--border);border-radius:8px;padding:7mm;max-width:210mm;width:100%;margin:0 auto;box-sizing:border-box}
.fs-page-head{display:flex;justify-content:space-between;font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#555;border-bottom:1px solid #ccc;padding-bottom:3px;margin-bottom:6px}
.fs-cols{column-count:3;column-gap:5mm}
@media (max-width:760px){.fs-cols{column-count:2}}
@media (max-width:480px){.fs-cols{column-count:1}}
.fs-box{break-inside:avoid;-webkit-column-break-inside:avoid;border:1px solid #ddd;border-radius:5px;padding:4px 7px 5px;margin:0 0 5px}
.fs-box-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:#0a7d3b;margin-bottom:3px}
.fs-row{font-size:10px;line-height:1.45;margin:2px 0;color:#111}
.fs-l{color:#555;font-weight:600;font-size:9px}
.fs-rezepte .fs-row{font-size:9px;line-height:1.32;margin:1.5px 0}
.fs-rezepte .fs-l{font-size:8.5px}
.fs-rezepte .fs-box{padding:3px 6px 4px;margin:0 0 4px}
.fs-rezepte .fs-box-title{margin-bottom:2px}
.fs-beispiele .fs-row{font-size:9.5px;line-height:1.5;margin:2px 0}
.fs-beispiele .fs-l{font-size:8.5px}
.fs-beispiele .fs-box{padding:3px 6px 5px;margin:0 0 5px}
.fs-beispiele .fs-box-title{margin-bottom:2px}
.fs-page .katex{font-size:1em;color:#111}
@media print{
  @page{margin:8mm}
  body{background:#fff!important} /* sonst druckt der dunkle Theme-Hintergrund unter dem Blatt schwarz mit */
  body *{visibility:hidden}
  .fs-print-area,.fs-print-area *{visibility:visible}
  .fs-print-area{position:absolute;left:0;top:0;width:100%;gap:0}
  .fs-page{border:none;border-radius:0;margin:0;max-width:none;padding:0}
  .fs-page:first-child{page-break-after:always}
}
`

function injectFsCss() {
  if (typeof document === 'undefined') return
  if (document.getElementById('mathe-fs-css')) return
  const s = document.createElement('style')
  s.id = 'mathe-fs-css'
  s.textContent = FS_CSS
  document.head.appendChild(s)
}

// Generischer Renderer fuer alle drei druckbaren Sammlungen: Box-Raster in
// Spalten; je Zeile optionales Label und entweder KaTeX-Formel (`f`) oder
// Klartext (`s`). `titel` steht im Seitenkopf.
function BoxPage({ boxes, nr, titel }: { boxes: HilfBox[]; nr: number; titel: string }) {
  return (
    <div className="fs-page">
      <div className="fs-page-head">
        <span>{titel} — Mathematische Grundlagen</span>
        <span>Seite {nr}/2</span>
      </div>
      <div className="fs-cols">
        {boxes.map(box => (
          <div className="fs-box" key={box.t}>
            <div className="fs-box-title">{box.t}</div>
            {box.r.map(row => (
              <div className="fs-row" key={row.f ?? row.s}>
                {row.l && <span className="fs-l">{row.l}: </span>}
                {row.f != null ? <K tex={row.f} /> : row.s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const SAMMLUNGEN = [
  { id: 'claude', label: '✍️ Claude-Formelsammlung' },
  { id: 'madis', label: '📄 Madis Formelsammlung' },
  { id: 'rezepte', label: '🧭 Lösungsrezepte' },
  { id: 'beispiele', label: '📝 Musteraufgaben' },
] as const

type SammlungId = (typeof SAMMLUNGEN)[number]['id']
const SAMMLUNG_IDS: SammlungId[] = SAMMLUNGEN.map(s => s.id)

export default function Hilfsmittel() {
  useEffect(() => injectFsCss(), [])
  // Offener Untertab steckt im Hash (#hilfsmittel/<id>) → teilbar; Standard: Claude.
  const [active, setActive] = useHashSubTab(SAMMLUNG_IDS, 'claude')
  const pdfUrl = `${import.meta.env.BASE_URL}Formelsammlung.pdf`
  return (
    <div>
      <div className="hilf-bar">
        <div className="hilf-bar-text">
          <h2>Hilfsmittel</h2>
          <p>
            Die Claude-Formelsammlung (zweiseitig, druckbar), Madis Formelsammlung als PDF,
            die Lösungsrezepte (Schritt-für-Schritt pro Aufgabenart) und die Musteraufgaben —
            je eine durchgerechnete Beispielaufgabe zu jeder Aufgabenart der Übungsblätter 0–13.
          </p>
        </div>
        <div className="hilf-bar-actions">
          {active === 'madis' ? (
            <>
              <span className="hilf-bar-hint">PDF · A4</span>
              <a className="hilf-print-btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                ⬇ Öffnen / Download
              </a>
            </>
          ) : (
            <>
              <span className="hilf-bar-hint">2 Seiten · A4</span>
              <button type="button" className="hilf-print-btn" onClick={() => window.print()}>
                🖨 Drucken
              </button>
            </>
          )}
        </div>
      </div>

      <div className="hilf-fs-switch" role="tablist" aria-label="Formelsammlung wählen">
        {SAMMLUNGEN.map(s => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === active}
            className={`hilf-fs-tab${s.id === active ? ' active' : ''}`}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {active === 'claude' && (
        <div className="fs-print-area">
          <BoxPage boxes={PAGE1} nr={1} titel="Claude-Formelsammlung" />
          <BoxPage boxes={PAGE2} nr={2} titel="Claude-Formelsammlung" />
        </div>
      )}
      {active === 'rezepte' && (
        <div className="fs-print-area fs-rezepte">
          <BoxPage boxes={REZEPTE1} nr={1} titel="Lösungsrezepte" />
          <BoxPage boxes={REZEPTE2} nr={2} titel="Lösungsrezepte" />
        </div>
      )}
      {active === 'beispiele' && (
        <div className="fs-print-area fs-beispiele">
          <BoxPage boxes={BEISPIELE1} nr={1} titel="Musteraufgaben" />
          <BoxPage boxes={BEISPIELE2} nr={2} titel="Musteraufgaben" />
        </div>
      )}
      {active === 'madis' && (
        <section className="hilf-pdf">
          <iframe
            className="hilf-pdf-frame"
            src={pdfUrl}
            title="Madis Formelsammlung (PDF)"
            sandbox="allow-same-origin allow-popups allow-downloads"
          />
          <p className="hilf-pdf-fallback">
            Vorschau lädt nicht?{' '}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              PDF in neuem Tab öffnen ↗
            </a>
          </p>
        </section>
      )}
    </div>
  )
}
