import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Inline-KaTeX für Aufgaben-/Lösungstexte. Für gestapelte Notation gedacht, die
// mit Unicode nicht geht: Summen mit Grenzen ober-/unterhalb des Σ,
// Binomialkoeffizienten (n über k), Produkte, Integrale mit Grenzen usw.
// `\displaystyle` erzwingt die großen, gestapelten Grenzen auch inline.
// Rendert per katex.render direkt ins Element (kein HTML-String über
// dangerouslySetInnerHTML) – gleiches Muster wie die K-Komponente im
// Hilfsmittel-Tab.
export default function M({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (ref.current) {
      katex.render(`\\displaystyle ${children}`, ref.current, {
        throwOnError: false,
        output: 'html',
      })
    }
  }, [children])
  return <span className="math-inline" ref={ref} />
}
