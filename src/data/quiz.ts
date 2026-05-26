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
]
