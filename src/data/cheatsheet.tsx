import type { CheatCard } from '../types'
import Frac from '../utils/Frac'

export const cheatCards: CheatCard[] = [
  {
    title: 'Bruchrechnen',
    content: (
      <>
        {'Addition + Subtraktion:\n  '}
        <Frac n="a" d="b" />{' ± '}<Frac n="c" d="d" />{' = '}<Frac n="a·d ± b·c" d="b·d" />
        {'\n  → gemeinsamen Nenner bilden\n\nMultiplikation:\n  '}
        <Frac n="a" d="b" />{' · '}<Frac n="c" d="d" />{' = '}<Frac n="a·c" d="b·d" />
        {'\n\nDivision:\n  '}
        <Frac n="a" d="b" />{' : '}<Frac n="c" d="d" />{' = '}<Frac n="a" d="b" />{' · '}<Frac n="d" d="c" />
        {'  (Kehrwert)\n\nKürzen:\n  '}
        <Frac n="k·a" d="k·b" />{' = '}<Frac n="a" d="b" />
      </>
    ),
  },
  {
    title: 'Potenzregeln',
    content: (
      <>
        {'aⁿ · aᵐ = aⁿ⁺ᵐ\n'}
        <Frac n="aⁿ" d="aᵐ" />{' = aⁿ⁻ᵐ\n'}
        {'(aⁿ)ᵐ = aⁿ·ᵐ\n(a·b)ⁿ = aⁿ · bⁿ\na⁰ = 1  (a ≠ 0)\na⁻ⁿ = '}
        <Frac n="1" d="aⁿ" />
      </>
    ),
  },
  {
    title: 'Wurzelregeln',
    content: (
      <>
        {'√a · √b = √(a·b)\n'}
        <Frac n="√a" d="√b" />{' = √(a/b)\n'}
        {'(√a)² = a\n√(a²) = |a|\na^½ = √a\na^(1/n) = ⁿ√a\n\nNenner rational machen:\n  '}
        <Frac n="1" d="√a" />{' = '}<Frac n="√a" d="a" />{'\n  '}
        <Frac n="1" d="√a+√b" />{' = '}<Frac n="√a−√b" d="a−b" />
      </>
    ),
  },
  {
    title: 'Binomische Formeln',
    content: (
      <>
        {'1. (a + b)² = a² + 2ab + b²\n2. (a − b)² = a² − 2ab + b²\n3. (a + b)(a − b) = a² − b²\n\nAnwendung beim Kürzen:\n  Formel 3 ermöglicht Faktorisieren im Zähler:\n  '}
        <Frac n="a²−b²" d="a−b" />{' = a+b\n  Weil: a²−b² = (a+b)·(a−b), und (a−b) kürzt weg'}
      </>
    ),
  },
  {
    title: 'Geradengleichung',
    content: (
      <>
        {'Normalform:   y = m·x + b\n  m = Steigung\n  b = y-Achsenabschnitt\n\nSteigung berechnen:\n  m = '}
        <Frac n="y₂ − y₁" d="x₂ − x₁" />
        {'\n\nSchnittpunkt zweier Geraden:\n  y = m₁x + b₁ = m₂x + b₂\n  → nach x auflösen'}
      </>
    ),
  },
  {
    title: 'Ausklammern',
    content: `Faktor ausklammern:
  a·x + a·y = a·(x + y)

Vorzeichen ausklammern:
  −a + b = −(a − b)
  a − b = −(b − a)
  b − a = −(a − b)

Beispiel:
  b(a−b) + b − a
  = b(a−b) − (a−b)
  = (a−b)·(b−1)`,
  },
  {
    title: 'Kürzen von Brüchen',
    content: (
      <>
        {'Erlaubt (gleicher Faktor oben und unten):\n  '}
        <Frac n="k·a" d="k·b" />{' = '}<Frac n="a" d="b" />
        {'\n\nAnwendung – 3. Binomische Formel:\n  Ausgangspunkt: '}
        <Frac n="a²−b²" d="a−b" />
        {'\n  Schritt 1 – Zähler faktorisieren:\n    a²−b² = (a+b)·(a−b)\n  Schritt 2 – Einsetzen und kürzen:\n    '}
        <Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)·(a−b)" d="a−b" />{' = a+b\n    Faktor (a−b) oben und unten → kürzt weg'}
        {'\n\nNicht erlaubt – keine gemeinsamen Faktoren:\n  '}
        <Frac n="a²+b²" d="a+b" />{' ≠ a+b\n    Summe im Zähler ist nicht faktorisierbar\n  '}
        <Frac n="1+k²" d="1+k³" />{' kein gemeinsamer Faktor\n  '}
        <Frac n="2a+3b" d="2c+3d" />{' 2,3 sind keine Faktoren'}
        {'\n\nVorzeichen:\n  '}
        <Frac n="a−b" d="b−a" />{' = −1\n  Nenner umformen: b−a = −(a−b)\n  Also: '}
        <Frac n="a−b" d="−(a−b)" />{' = −1\n  Gilt nur für a ≠ b  (sonst 0/0 undefiniert)\n  Trick: gegengleiche Terme → Ergebnis immer −1'}
      </>
    ),
  },
  {
    title: 'Rechenreihenfolge',
    content: `1. Klammern zuerst auflösen
2. Potenzen und Wurzeln
3. Punktrechnung (· /)
4. Strichrechnung (+ −)

Klammer auflösen:
  −2(2x−4) = −4x + 8
  x(1+x) = x + x²

Merke:
  (−)·(−) = +
  (−)·(+) = −`,
  },
  {
    title: 'Mengen – Grundbegriffe',
    content: `Schreibweisen:
  x ∈ A   x ist Element von A
  x ∉ A   x ist kein Element von A
  A ⊆ B   A ist Teilmenge von B
  A = B   A und B sind gleich
  |A|     Mächtigkeit von A

Besondere Mengen:
  ∅   leere Menge
  ℕ   natürliche Zahlen {0,1,2,3,…}
  ℤ   ganze Zahlen {…,−1,0,1,2,…}
  ℝ   reelle Zahlen`,
  },
  {
    title: 'Mengenoperationen',
    content: `A ∪ B  Vereinigung: x ∈ A oder x ∈ B
A ∩ B  Schnittmenge: x ∈ A und x ∈ B
A \\ B  Differenz: x ∈ A mit x ∉ B
Ā      Komplement: x ∉ A (bzgl. X)
A × B  Kart. Produkt: {(a,b)|a∈A,b∈B}

Rechenregeln:
  A ∩ B = B ∩ A  (Kommutativität)
  A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)`,
  },
  {
    title: 'De Morgan & Potenzmenge',
    content: `De Morgan'sche Gesetze:
  A ∪ B̅ = Ā ∩ B̅
  A ∩ B̅ = Ā ∪ B̅

Potenzmenge P(A):
  P(A) = {M : M ⊆ A}  (Menge aller Teilmengen)
  |P(A)| = 2^|A|

  Beispiel A = {1,2}:
  P(A) = {∅, {1}, {2}, {1,2}}

Mengendarstellung:
  {2n : n ∈ ℕ}    = gerade Zahlen
  {kn+r : n ∈ ℕ}  = Vielfache von k, Rest r`,
  },
]
