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
  Formel 3 ermöglicht Faktorisieren im Zähler:
  (a²−b²)/(a−b)  = a+b
  Weil: a²−b² = (a+b)·(a−b), und (a−b) kürzt weg`,
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
    content: `Erlaubt (gleicher Faktor oben und unten):
  (k·a)/(k·b) = a/b

Anwendung – 3. Binomische Formel:
  Ausgangspunkt: (a²−b²)/(a−b)

  Schritt 1 – Zähler faktorisieren:
    a²−b² = (a+b)·(a−b)

  Schritt 2 – Einsetzen und kürzen:
    (a²−b²)/(a−b) = (a+b)·(a−b)/(a−b) = a+b
    Der Faktor (a−b) steht oben und unten → kürzt weg

Nicht erlaubt – keine gemeinsamen Faktoren:
  (a²+b²)/(a+b) ≠ a+b
    Summe im Zähler ist nicht faktorisierbar

  (1+k²)/(1+k³)   kein gemeinsamer Faktor
  (2a+3b)/(2c+3d)  2 und 3 sind keine Faktoren der Terme

Vorzeichen:
  (a−b)/(b−a) = (a−b)/(−(a−b)) = −1`,
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
  x ∈ A       x ist Element von A
  x ∉ A       x ist kein Element von A
  A ⊆ B       A ist Teilmenge von B
  A = B       A und B haben dieselben Elemente
  |A|         Mächtigkeit (Anzahl Elemente) von A

Besondere Mengen:
  ∅           leere Menge (kein Element)
  ℕ           natürliche Zahlen {0, 1, 2, 3, …}
  ℤ           ganze Zahlen {…, −2, −1, 0, 1, 2, …}
  ℝ           reelle Zahlen`,
  },
  {
    title: 'Mengenoperationen',
    content: `A ∪ B  Vereinigung: alle x ∈ A oder x ∈ B
A ∩ B  Schnittmenge: alle x ∈ A und x ∈ B
A \ B  Differenz: alle x ∈ A mit x ∉ B
Ā      Komplement: alle x ∈ X mit x ∉ A
A × B  Kartesisches Produkt: alle Paare (a,b)
       mit a ∈ A und b ∈ B

Rechenregeln:
  A ∩ B = B ∩ A          (Kommutativität)
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
  {2n : n ∈ ℕ}  = gerade Zahlen
  {kn + r : n ∈ ℕ}  = Rest r bei Division durch k`,
  },
]

