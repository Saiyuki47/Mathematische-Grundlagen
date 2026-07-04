// Zerlegt Klartext-Mathe (wie in den Tipp-Boxen) in Text-, Bruch- und
// Operator-Tokens, damit die Anzeige dieselbe gestapelte Notation nutzt wie
// die Lösungen: a/b → Frac, Σ(k=1..n) bzw. ∏(k=1 bis n) → KaTeX mit Grenzen
// oben/unten. Exponenten in Caret-Schreibweise (q^(n+1)) bleiben unangetastet,
// ebenso Wortpaare wie „und/oder".
export type MathToken =
  | { kind: 'text'; value: string }
  | { kind: 'frac'; num: string; den: string }
  | { kind: 'op'; latex: string }

const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁽⁾ⁿᵏᵐʲⁱ'
const SUB = '₀₁₂₃₄₅₆₇₈₉₊₋ₙₖₘ'
// Private-Use-Bereich als Platzhalter für maskierte ^(…)-Exponenten
const MASK_BASE = 0xe100

const isAtomChar = (ch: string): boolean =>
  /[0-9a-zA-Zεδ!√%,]/.test(ch) ||
  SUP.includes(ch) ||
  SUB.includes(ch) ||
  (ch.charCodeAt(0) >= MASK_BASE && ch.charCodeAt(0) < MASK_BASE + 0x100)

const PURE_WORD = /^[A-Za-zÄÖÜäöüß]{2,}$/
// „Schritt 3/4", „Fall 1/2" … sind Verweise, keine Brüche
const REF_WORD_BEFORE = /(Schritte?|Fälle?|Fall|Aufgaben?|Teile?|Punkte?|Zeilen?|Kapitel|Abschnitte?|Blatt|Bild|Fragen?|Nr\.)\s*$/
// „(iii)/(iv)" sind Teilaufgaben-Verweise
const ROMAN = /^(?:i{1,3}|iv|v|vi{1,3})$/

/** Öffnende Klammer zu s[end-1]===')' rückwärts suchen; -1 wenn unbalanciert. */
function matchParenBack(s: string, end: number): number {
  let depth = 0
  for (let i = end - 1; i >= 0; i--) {
    if (s[i] === ')') depth++
    else if (s[i] === '(') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

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

/** Zähler: von der Position des „/" nach links einsammeln (Atome + ()-Gruppen). */
function scanNumerator(s: string, slash: number): number {
  let i = slash
  for (;;) {
    if (i > 0 && s[i - 1] === ')') {
      const open = matchParenBack(s, i)
      if (open < 0) break
      i = open
    } else if (i > 0 && (isAtomChar(s[i - 1]) || s[i - 1] === '√')) {
      i--
    } else {
      break
    }
  }
  return i
}

/** Nenner: von der Position hinter dem „/" nach rechts einsammeln. */
function scanDenominator(s: string, start: number): number {
  let i = start
  for (;;) {
    if (i < s.length && s[i] === '(') {
      const close = matchParenFwd(s, i)
      if (close < 0) break
      i = close + 1
    } else if (i < s.length && (isAtomChar(s[i]) || s[i] === '√' || (s[i] === '−' && i === start))) {
      i++
    } else {
      break
    }
  }
  return i
}

/** Außenklammern entfernen, wenn die Seite genau eine balancierte Gruppe ist. */
function stripOuterParens(side: string): string {
  if (side.length >= 2 && side[0] === '(' && matchParenFwd(side, 0) === side.length - 1) {
    return side.slice(1, -1)
  }
  return side
}

const trimSide = (side: string): string => side.replace(/^[,\s]+|[,\s]+$/g, '')

function latexBound(b: string): string {
  return b.trim().replace(/−/g, '-').replace(/∞/g, '\\infty')
}

/**
 * Operatoren mit Grenzen, in allen vorkommenden Schreibweisen:
 * Σ(k=1..n), Σ(k=1 bis n), ∑(k=1..n), ∏/Π(k=1 bis n) sowie Σ_(k=0)^∞ bzw.
 * Σ_(k=1) ohne obere Grenze. Σ/∑ → \sum, Π/∏ → \prod.
 */
const OP_RE =
  /([ΣΠ∏∑])(?:\s?\(\s*([a-zA-Z])\s*=\s*([^()]+?)(?:\s+bis\s+|\.\.)([^()]+?)\s*\)|_\(\s*([a-zA-Z])\s*=\s*([^()]+?)\s*\)(?:\^([^\s()]+))?)/g

export function tokenize(input: string): MathToken[] {
  // 1) Caret-Exponenten ^(…) maskieren — deren Inhalt (z. B. 1/n) bleibt Text.
  const masks: string[] = []
  const masked = input.replace(/\^\((?:[^()]|\([^()]*\))*\)/g, (m) => {
    masks.push(m)
    return String.fromCharCode(MASK_BASE + masks.length - 1)
  })
  const unmask = (t: string): string =>
    t.replace(/[\uE100-\uE1FF]/g, (ch) => masks[ch.charCodeAt(0) - MASK_BASE] ?? ch)

  const tokens: MathToken[] = []
  const pushText = (t: string) => {
    if (t) tokens.push({ kind: 'text', value: unmask(t) })
  }

  // 2) Operatoren mit Grenzen herausziehen, 3) Restsegmente auf Brüche scannen.
  let last = 0
  OP_RE.lastIndex = 0
  let opMatch: RegExpExecArray | null
  const segments: Array<{ text: string } | { op: string }> = []
  while ((opMatch = OP_RE.exec(masked)) !== null) {
    segments.push({ text: masked.slice(last, opMatch.index) })
    const cmd = 'Σ∑'.includes(opMatch[1]) ? '\\sum' : '\\prod'
    const [idx, lo, hi] = opMatch[2] !== undefined
      ? [opMatch[2], opMatch[3], opMatch[4]]
      : [opMatch[5], opMatch[6], opMatch[7]]
    const upper = hi !== undefined ? `^{${latexBound(hi)}}` : ''
    segments.push({ op: `${cmd}_{${idx}=${latexBound(lo)}}${upper}` })
    last = opMatch.index + opMatch[0].length
  }
  segments.push({ text: masked.slice(last) })

  for (const seg of segments) {
    if ('op' in seg) {
      tokens.push({ kind: 'op', latex: seg.op })
      continue
    }
    const s = seg.text
    let cursor = 0
    let i = 0
    while (i < s.length) {
      if (s[i] !== '/') {
        i++
        continue
      }
      // optional je ein Leerzeichen um den Schrägstrich (n! / (k!…))
      const spaceL = i > 0 && s[i - 1] === ' ' ? 1 : 0
      const spaceR = i + 1 < s.length && s[i + 1] === ' ' ? 1 : 0
      const numEnd = i - spaceL
      const numStart = scanNumerator(s, numEnd)
      const denStart = i + 1 + spaceR
      const denEnd = scanDenominator(s, denStart)
      let num = trimSide(s.slice(numStart, numEnd))
      let den = trimSide(s.slice(denStart, denEnd))
      if (!num || !den || (PURE_WORD.test(num) && PURE_WORD.test(den))) {
        i++
        continue
      }
      num = stripOuterParens(num)
      den = stripOuterParens(den)
      const bothSmallInts = /^\d{1,2}$/.test(num) && /^\d{1,2}$/.test(den)
      if ((bothSmallInts && REF_WORD_BEFORE.test(s.slice(0, numStart))) || (ROMAN.test(num) && ROMAN.test(den))) {
        i++
        continue
      }
      pushText(s.slice(cursor, numStart))
      tokens.push({ kind: 'frac', num: unmask(num), den: unmask(den) })
      cursor = denEnd
      i = denEnd
    }
    pushText(s.slice(cursor))
  }
  return tokens
}
