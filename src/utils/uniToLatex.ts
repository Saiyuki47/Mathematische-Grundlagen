// Wandelt Klartext-Mathe (Unicode) in LaTeX um, damit Zähler/Nenner der
// Frac-Komponente über KaTeX gerendert werden können – gleiche Optik wie die
// mit <M> geschriebenen Lösungen (z. B. x² → x^{2}, aₙ → a_{n}, − → -, · → \cdot).
// Bewusst schlank gehalten: deckt genau die Zeichen ab, die in den Aufgaben-
// Brüchen vorkommen, plus gängige Symbole. Unbekannte Zeichen bleiben stehen
// (KaTeX rendert sie mit throwOnError:false notfalls unverändert).

const SUP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7',
  '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-', '⁽': '(', '⁾': ')', 'ⁿ': 'n', 'ᵏ': 'k',
  'ᵐ': 'm', 'ʲ': 'j', 'ⁱ': 'i',
}
const SUB: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7',
  '₈': '8', '₉': '9', '₊': '+', '₋': '-', 'ₙ': 'n', 'ₖ': 'k', 'ₘ': 'm',
}
const SYM: Record<string, string> = {
  '−': '-', '–': '-', '·': ' \\cdot ', '⋅': ' \\cdot ', '×': ' \\times ',
  '÷': ' \\div ', '∞': '\\infty ', '≤': ' \\le ', '≥': ' \\ge ', '≠': ' \\ne ',
  '≈': ' \\approx ', '≡': ' \\equiv ', '±': ' \\pm ', '∓': ' \\mp ',
  '→': ' \\to ', '↦': ' \\mapsto ', '⇒': ' \\Rightarrow ', '⇔': ' \\Leftrightarrow ',
  '∈': ' \\in ', '∉': ' \\notin ', '⊆': ' \\subseteq ', '⊂': ' \\subset ',
  '⊇': ' \\supseteq ', '∪': ' \\cup ', '∩': ' \\cap ', '∅': '\\emptyset ',
  '∖': ' \\setminus ', '∑': '\\sum ', 'Σ': '\\sum ', '∏': '\\prod ',
  'Π': '\\prod ', '∫': '\\int ', '…': '\\dots ', '∘': ' \\circ ',
  'π': '\\pi ', 'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'δ': '\\delta ',
  'ε': '\\varepsilon ', 'λ': '\\lambda ', 'μ': '\\mu ', 'θ': '\\theta ',
  'φ': '\\varphi ', 'ω': '\\omega ', 'Ω': '\\Omega ',
  'ℝ': '\\mathbb{R}', 'ℕ': '\\mathbb{N}', 'ℤ': '\\mathbb{Z}', 'ℚ': '\\mathbb{Q}',
  'ℂ': '\\mathbb{C}',
}

const FUNCS = /(?<![A-Za-z\\])(arcsin|arccos|arctan|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|log|ln|exp|lim|max|min|deg|det|gcd)/g

/** Schließende Klammer zu s[start]==='(' vorwärts suchen; -1 wenn unbalanciert. */
function matchParenFwd(s: string, start: number): number {
  let depth = 0
  for (let i = start; i < s.length; i++) {
    if (s[i] === '(') depth++
    else if (s[i] === ')') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

export function uniToLatex(input: string): string {
  let out = ''
  let i = 0
  while (i < input.length) {
    const ch = input[i]
    if (ch === '√') {
      // Wurzel mit Argument: √(…) → \sqrt{…}, √atom → \sqrt{atom} (sonst würde
      // \sqrt nur das erste Zeichen überdecken).
      i++
      if (input[i] === '(') {
        const close = matchParenFwd(input, i)
        if (close > i) {
          out += `\\sqrt{${uniToLatex(input.slice(i + 1, close))}}`
          i = close + 1
          continue
        }
      }
      let arg = ''
      while (i < input.length && (/[0-9A-Za-z]/.test(input[i]) || SUP[input[i]] || SUB[input[i]])) {
        arg += input[i]; i++
      }
      out += arg ? `\\sqrt{${uniToLatex(arg)}}` : '\\sqrt{}'
      continue
    }
    if (SUP[ch]) {
      let run = ''
      while (i < input.length && SUP[input[i]]) { run += SUP[input[i]]; i++ }
      out += `^{${run}}`
      continue
    }
    if (SUB[ch]) {
      let run = ''
      while (i < input.length && SUB[input[i]]) { run += SUB[input[i]]; i++ }
      out += `_{${run}}`
      continue
    }
    out += SYM[ch] ?? ch
    i++
  }
  // Funktionsnamen als Operatoren setzen (aufrecht statt kursiv): sin → \sin usw.
  return out.replace(FUNCS, '\\$1')
}
