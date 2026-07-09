import M from './M'
import { uniToLatex } from './uniToLatex'

interface FracProps {
  n: string
  d: string
}

// Bruch über KaTeX (statt einer kleinen CSS-Fraktion) – gleiche, gut lesbare
// Optik wie \frac in den Lösungen. Zähler/Nenner werden von Unicode-Mathe
// (x², aₙ, −, · …) nach LaTeX übersetzt.
export default function Frac({ n, d }: FracProps) {
  return <M>{`\\frac{${uniToLatex(n)}}{${uniToLatex(d)}}`}</M>
}
