import type { CheatCard } from '../types'

export const cheatCards: CheatCard[] = [
  {
    title: 'Bruchrechnen',
    content: `Addition/Subtraktion:
  a/b ± c/d = (a·d ± b·c) / (b·d)
  → gemeinsamen Nenner bilden

Multiplikation:
  a/b · c/d = (a·c) / (b·d)

Division:
  a/b : c/d = a/b · d/c  (Kehrwert)

Kürzen:
  (k·a) / (k·b) = a/b`,
  },
  {
    title: 'Potenzregeln',
    content: `aⁿ · aᵐ = aⁿ⁺ᵐ
aⁿ / aᵐ = aⁿ⁻ᵐ
(aⁿ)ᵐ = aⁿ·ᵐ
(a·b)ⁿ = aⁿ · bⁿ
a⁰ = 1  (a ≠ 0)
a⁻ⁿ = 1/aⁿ`,
  },
  {
    title: 'Wurzelregeln',
    content: `√a · √b = √(a·b)
√a / √b = √(a/b)
(√a)² = a
√(a²) = |a|
a^(1/2) = √a
a^(1/n) = ⁿ√a

Nenner rational machen:
  1/√a = √a/a
  1/(√a+√b) = (√a−√b)/(a−b)`,
  },
  {
    title: 'Binomische Formeln',
    content: `1. (a + b)² = a² + 2ab + b²

2. (a − b)² = a² − 2ab + b²

3. (a + b)(a − b) = a² − b²

Anwendung beim Kürzen:
  (a²−b²)/(a−b)
  = (a+b)(a−b)/(a−b) = a+b`,
  },
  {
    title: 'Geradengleichung',
    content: `Normalform:   y = m·x + b

  m = Steigung
  b = y-Achsenabschnitt

Steigung berechnen:
  m = (y₂ − y₁) / (x₂ − x₁)

Schnittpunkt zweier Geraden:
  y = m₁x + b₁ = m₂x + b₂
  → nach x auflösen`,
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
    content: `Erlaubt (gleicher Faktor):
  (k·a)/(k·b) = a/b
  (a²−b²)/(a−b) = a+b

Nicht erlaubt (Summen):
  (a²+b²)/(a+b) ≠ a+b
  (1+k²)/(1+k³) nicht kürzbar
  (2a+3b)/(2c+3d) nicht kürzbar

Vorzeichen:
  (a−b)/(b−a) = −1`,
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
]

