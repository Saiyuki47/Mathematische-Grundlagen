import type { QuizQuestion } from '../types'

export const quizData: QuizQuestion[] = [
  {
    q: 'Was ergibt 3/7 + 7/3?',
    opts: ['10/10', '58/21', '21/58', '10/21'],
    ans: 1,
    exp: 'Gemeinsamer Nenner ist 21: 9/21 + 49/21 = 58/21.',
  },
  {
    q: 'Was ergibt 5⁻² · 100?',
    opts: ['−100', '2500', '4', '25'],
    ans: 2,
    exp: '5⁻² = 1/25, also 100/25 = 4.',
  },
  {
    q: 'Was ergibt √2 · √32?',
    opts: ['√34', '16', '8', '4√2'],
    ans: 2,
    exp: '√2 · √32 = √(2·32) = √64 = 8.',
  },
  {
    q: 'Welcher Ausdruck kann NICHT weiter gekürzt werden?',
    opts: ['(a²−b²)/(a−b)', '(k²+k³)/k²', '(a²+b²)/(a+b)', '(a−b)/(b−a)'],
    ans: 2,
    exp: '(a²+b²)/(a+b) hat keine gemeinsamen Faktoren – nicht kürzbar. Die anderen lassen sich vereinfachen.',
  },
  {
    q: 'Wie lautet die 3. binomische Formel?',
    opts: ['(a+b)² = a²+2ab+b²', '(a−b)² = a²−2ab+b²', '(a+b)(a−b) = a²−b²', '(a+b)³ = a³+3a²b+3ab²+b³'],
    ans: 2,
    exp: 'Die 3. binomische Formel lautet: (a+b)(a−b) = a²−b².',
  },
  {
    q: 'Was ist die Steigung der Geraden y = −2x + 1?',
    opts: ['1', '2', '−2', '−1'],
    ans: 2,
    exp: 'In der Normalform y = m·x + b ist m = −2 die Steigung.',
  },
  {
    q: 'An welcher Stelle schneidet y = (1/2)x − 2 die y-Achse?',
    opts: ['0', '−2', '4', '2'],
    ans: 1,
    exp: 'Der y-Achsenabschnitt ist b = −2 (setze x = 0: y = −2).',
  },
  {
    q: 'Was ergibt (k² + k³) / k²?',
    opts: ['k', '1 + k', 'k + k²', '1/k'],
    ans: 1,
    exp: 'k²(1+k)/k² = 1+k. Man klammert k² im Zähler aus und kürzt.',
  },
  {
    q: 'Was gilt für √(a+b) = √a + √b?',
    opts: [
      'Immer wahr',
      'Nur für a = b',
      'Nicht allgemein gültig – Gegenbeispiel: a=9, b=16',
      'Gilt nur für a,b > 1',
    ],
    ans: 2,
    exp: 'Für a=9, b=16: √25 = 5, aber √9+√16 = 3+4 = 7. Die Gleichung gilt nicht allgemein.',
  },
  {
    q: 'Was ist der Schnittpunkt der Geraden y = −2x+1 und y = (1/2)x−2?',
    opts: ['(1, −1)', '(6/5, −7/5)', '(0, 1)', '(2, −3)'],
    ans: 1,
    exp: '−2x+1 = (1/2)x−2 → 3 = (5/2)x → x = 6/5; y = −12/5+5/5 = −7/5.',
  },
  {
    q: 'Sei M = {1, 2, 3}. Welche Aussage ist korrekt?',
    opts: ['{1} ∈ M', '1 ⊆ M', '{1} ⊆ M', '{1, 2, 3} ∈ M'],
    ans: 2,
    exp: '{1} ⊆ M ist korrekt: {1} ist eine Teilmenge von M. {1} ∈ M ist falsch (1 ∈ M wäre richtig). 1 ⊆ M ist falsch (1 ist kein Mengensymbol).',
  },
  {
    q: 'Seien X = {1,3,5,7} und Z = {1,5}. Was ergibt X \ Z?',
    opts: ['{1,5}', '{3,7}', '∅', '{1,3,5,7}'],
    ans: 1,
    exp: 'X \ Z enthält alle Elemente aus X, die nicht in Z sind: {1,3,5,7} \ {1,5} = {3,7}.',
  },
  {
    q: 'Wie viele Elemente hat die Potenzmenge P(A) für A = {1, 2, 3}?',
    opts: ['3', '6', '8', '9'],
    ans: 2,
    exp: '|P(A)| = 2^|A| = 2³ = 8. Die 8 Teilmengen sind: ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.',
  },
  {
    q: 'Welche der folgenden Mengendarstellungen liefert {3, 8, 13, 18, …}?',
    opts: ['{3n : n ∈ ℕ}', '{5n + 3 : n ∈ ℕ}', '{3n + 5 : n ∈ ℕ}', '{5n − 2 : n ∈ ℕ}'],
    ans: 1,
    exp: 'Für n = 0,1,2,3: 5·0+3=3, 5·1+3=8, 5·2+3=13, 5·3+3=18. Also {5n+3 : n ∈ ℕ}.',
  },
  {
    q: 'Was besagt das De Morgansche Gesetz A ∪ B̄?',
    opts: ['Ā ∪ B̄', 'Ā ∩ B̄', 'A ∩ B', 'Ā ∪ B'],
    ans: 1,
    exp: 'De Morgan: Das Komplement einer Vereinigung ist der Schnitt der Komplemente. A ∪ B̄ = Ā ∩ B̄.',
  },
]
