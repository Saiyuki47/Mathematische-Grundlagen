import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Inline-KaTeX für Aufgaben-/Lösungstexte. Für gestapelte Notation gedacht, die
// mit Unicode nicht geht: Summen mit Grenzen ober-/unterhalb des Σ,
// Binomialkoeffizienten (n über k), Produkte, Integrale mit Grenzen usw.
// `\displaystyle` erzwingt die großen, gestapelten Grenzen auch inline.
export default function M({ children }: { children: string }) {
  const html = useMemo(
    () =>
      katex.renderToString(`\\displaystyle ${children}`, {
        throwOnError: false,
        output: 'html',
      }),
    [children],
  )
  return (
    <span
      className="math-inline"
      // eslint-disable-next-line react-doctor/no-danger -- statisches KaTeX-HTML aus eigenen LaTeX-Strings (kein User-Input)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
