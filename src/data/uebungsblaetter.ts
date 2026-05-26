import type { MatheBlatt } from '../types'

export const uebungsblaetter: MatheBlatt[] = [
  {
    id: 'blatt0',
    nr: '0',
    titel: 'Rechenregeln, Notationen, Geraden',
    aufgaben: [
      {
        id: 'a1',
        nr: 1,
        title: 'Vereinfachen',
        subaufgaben: [
          {
            letter: 'a',
            text: '3/7 + 7/3',
            hint: 'Bestimme den gemeinsamen Nenner: kgV(7, 3) = 21. Erweitere 3/7 auf 9/21 und 7/3 auf 49/21.',
            solution: '3/7 + 7/3 = 9/21 + 49/21 = 58/21',
          },
          {
            letter: 'b',
            text: '(1/3 + 2/9) · (11/8 − 1/4)',
            hint: 'Berechne zuerst jeden Klammerausdruck separat (gemeinsamer Nenner 9 bzw. 8), dann multipliziere.',
            solution:
              '(1/3 + 2/9) = 3/9 + 2/9 = 5/9\n(11/8 − 1/4) = 11/8 − 2/8 = 9/8\n5/9 · 9/8 = 45/72 = 5/8',
          },
          {
            letter: 'c',
            text: '(13/2 : 169/12) : 3/26   (Hinweis: 13 · 13 = 169)',
            hint: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert. Kürze mit 13 und nutze 169 = 13².',
            solution:
              '13/2 : 169/12 = 13/2 · 12/169 = 156/338 = 12/26\n12/26 : 3/26 = 12/26 · 26/3 = 12/3 = 4',
          },
          {
            letter: 'd',
            text: '5⁻² · 100',
            hint: 'Negative Hochzahl: a⁻ⁿ = 1/aⁿ. Also 5⁻² = 1/25.',
            solution: '5⁻² · 100 = (1/25) · 100 = 100/25 = 4',
          },
          {
            letter: 'e',
            text: '−2(2x − 4) + x(1 + x) · (−1)',
            hint: 'Löse die Klammern schrittweise auf: zuerst −2(2x−4), dann x(1+x)·(−1). Sammle gleiche Terme.',
            solution:
              '−2(2x−4) = −4x + 8\nx(1+x)·(−1) = −x − x²\n−4x + 8 − x − x² = −x² − 5x + 8',
          },
          {
            letter: 'f',
            text: '−121ab³ − (11a²b)² · (−2a⁻³b)   (Hinweis: 11 · 11 = 121)',
            hint: 'Berechne zuerst (11a²b)² = 121a⁴b². Dann multipliziere mit (−2a⁻³b) und addiere die Potenzen.',
            solution:
              '(11a²b)² = 121a⁴b²\n121a⁴b² · (−2a⁻³b) = −242a⁴⁻³b²⁺¹ = −242ab³\n−121ab³ − (−242ab³) = −121ab³ + 242ab³ = 121ab³',
          },
          {
            letter: 'g',
            text: '−(a + b)/c − (a − b)/c',
            hint: 'Beide Brüche haben denselben Nenner c – fasse sie direkt zusammen.',
            solution:
              '= (−(a+b) − (a−b)) / c\n= (−a − b − a + b) / c\n= −2a/c',
          },
        ],
      },
      {
        id: 'a2',
        nr: 2,
        title: 'Ausklammern aus b(a − b) + b − a',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Klammere −1 aus.',
            hint: 'Multipliziere den gesamten Ausdruck mit (−1)·(−1) = 1. Was steht dann in der Klammer?',
            solution:
              'b(a−b) + b − a\n= (−1) · (−b(a−b) − b + a)\n= (−1) · (b(b−a) − b + a)',
          },
          {
            letter: 'b',
            text: 'Klammere a − b aus.',
            hint: 'Schreibe b−a = −(a−b). Erkenne, dass b(a−b) und −(a−b) beide den Faktor (a−b) enthalten.',
            solution:
              'b(a−b) + b − a\n= b(a−b) − (a−b)\n= (a−b) · (b − 1)',
          },
          {
            letter: 'c',
            text: 'Klammere b − a aus.',
            hint: 'Schreibe b(a−b) = −b(b−a). Erkenne (b−a) als gemeinsamen Faktor.',
            solution:
              'b(a−b) + b − a\n= −b(b−a) + (b−a)\n= (b−a) · (−b + 1)',
          },
        ],
      },
      {
        id: 'a3',
        nr: 3,
        title: 'Kürzen (a, b, c, d, k ≠ 0)',
        subaufgaben: [
          {
            letter: 'a',
            text: '(a − b) / (a − b)',
            hint: 'Zähler und Nenner sind identisch.',
            solution: '(a−b)/(a−b) = 1',
          },
          {
            letter: 'b',
            text: '(a − b) / (b − a)',
            hint: 'Schreibe b−a = −(a−b) und kürze.',
            solution: '(a−b)/(b−a) = (a−b)/(−(a−b)) = −1',
          },
          {
            letter: 'c',
            text: '(a² + b²) / (a + b)',
            hint: 'Prüfe, ob Zähler oder Nenner faktorisiert werden können. a²+b² hat keine reellen Faktoren der Form (a+b).',
            solution: 'Nicht weiter kürzbar – Zähler und Nenner haben keine gemeinsamen Faktoren.',
          },
          {
            letter: 'd',
            text: '(a² − b²) / (a − b)',
            hint: 'Wende die 3. binomische Formel an: a²−b² = (a+b)(a−b).',
            solution: '(a²−b²)/(a−b) = (a+b)(a−b)/(a−b) = a+b',
          },
          {
            letter: 'e',
            text: '(2a + 3b) / (2c + 3d)',
            hint: 'Gibt es einen gemeinsamen Faktor in Zähler und Nenner?',
            solution: 'Nicht weiter kürzbar – keine gemeinsamen Faktoren.',
          },
          {
            letter: 'f',
            text: '(k² + k³) / k²',
            hint: 'Klammere k² im Zähler aus: k²(1+k).',
            solution: '(k²+k³)/k² = k²(1+k)/k² = 1+k',
          },
          {
            letter: 'g',
            text: '2k² / (4k² + 6k³)',
            hint: 'Klammere 2k² im Nenner aus: 2k²(2+3k).',
            solution: '2k²/(4k²+6k³) = 2k²/(2k²(2+3k)) = 1/(2+3k)',
          },
          {
            letter: 'h',
            text: '(1 + k²) / (1 + k³)',
            hint: 'Lässt sich k³ = k·k² nutzen? Prüfe, ob (1+k²) ein Faktor von (1+k³) ist.',
            solution: 'Nicht weiter kürzbar.',
          },
        ],
      },
      {
        id: 'a4',
        nr: 4,
        title: 'Wurzeln',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Bestimme √2 · √32.',
            hint: 'Nutze √a · √b = √(a·b). Berechne das Produkt unter der Wurzel.',
            solution: '√2 · √32 = √(2·32) = √64 = 8',
          },
          {
            letter: 'b',
            text: 'Gilt √(a + b) = √a + √b für beliebige a, b ≥ 0?',
            hint: 'Probiere ein konkretes Gegenbeispiel, z.B. a = 9 und b = 16.',
            solution:
              'Nein – nicht allgemein gültig.\nGegenbeispiel a=9, b=16:\n√(9+16) = √25 = 5\n√9 + √16 = 3 + 4 = 7\n5 ≠ 7',
          },
          {
            letter: 'c',
            text: 'Mache die Nenner von 1/√5 und 1/(√3 + √5) jeweils rational.',
            hint:
              'Für 1/√5: Erweitere mit √5/√5.\nFür 1/(√3+√5): Nutze die 3. binomische Formel – erweitere mit (√3−√5)/(√3−√5).',
            solution:
              '1/√5 = (1·√5)/(√5·√5) = √5/5\n\n1/(√3+√5)\n= 1/(√3+√5) · (√3−√5)/(√3−√5)\n= (√3−√5)/(3−5)\n= (√3−√5)/(−2)',
          },
        ],
      },
      {
        id: 'a5',
        nr: 5,
        title: 'Geraden skizzieren',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Skizziere y = x.',
            hint: 'Steigung m = 1, y-Achsenabschnitt b = 0. Punkte: (0,0), (1,1), (−1,−1).',
            solution: 'Gerade durch den Ursprung mit Steigung 1 (45°-Winkel nach rechts oben).',
            graph: {
              lines: [{ m: 1, b: 0, label: 'y = x' }],
              xMin: -3, xMax: 3, yMin: -3, yMax: 3,
            },
          },
          {
            letter: 'b',
            text: 'Skizziere y = −2x + 1.',
            hint: 'Steigung m = −2 (fällt steil), y-Achsenabschnitt b = 1. Punkte: (0,1) und (1,−1).',
            solution: 'Gerade fällt steil nach rechts. Nullstelle bei x = 1/2.',
            graph: {
              lines: [{ m: -2, b: 1, label: 'y = −2x + 1' }],
              xMin: -1, xMax: 2, yMin: -2, yMax: 4,
            },
          },
          {
            letter: 'c',
            text: 'Skizziere y = (1/2)x − 2.',
            hint: 'Steigung m = 1/2 (steigt flach), y-Achsenabschnitt b = −2. Punkte: (0,−2) und (4,0).',
            solution: 'Gerade steigt flach nach rechts. Nullstelle bei x = 4.',
            graph: {
              lines: [{ m: 0.5, b: -2, label: 'y = x/2 − 2' }],
              xMin: -1, xMax: 5, yMin: -3, yMax: 1,
            },
          },
          {
            letter: 'd',
            text: 'Skizziere y = 4.',
            hint: 'Konstante Funktion – die Steigung ist 0.',
            solution: 'Waagerechte Linie bei y = 4, parallel zur x-Achse.',
            graph: {
              lines: [{ m: 0, b: 4, label: 'y = 4' }],
              xMin: -4, xMax: 4, yMin: 0, yMax: 5,
            },
          },
          {
            letter: 'e',
            text: 'Bestimme den Schnittpunkt der Geraden aus (b) und (c).',
            hint: 'Setze beide Gleichungen gleich: −2x+1 = (1/2)x−2. Löse nach x auf.',
            solution:
              '−2x + 1 = (1/2)x − 2\n3 = (5/2)x\nx = 6/5\ny = −2·(6/5) + 1 = −12/5 + 5/5 = −7/5\nSchnittpunkt: (6/5, −7/5)',
            graph: {
              lines: [
                { m: -2, b: 1, label: 'y = −2x + 1' },
                { m: 0.5, b: -2, label: 'y = x/2 − 2' },
              ],
              points: [{ x: 6 / 5, y: -7 / 5, label: '(6/5, −7/5)' }],
              xMin: -1, xMax: 3, yMin: -3, yMax: 4,
            },
          },
        ],
      },
      {
        id: 'a6',
        nr: 6,
        title: 'Geradengleichungen bestimmen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Die Gerade schneidet die y-Achse bei 2 und die x-Achse bei 8. Gib die Geradengleichung an.',
            hint: 'Lies zwei Punkte ab: P₁ = (0, 2) und P₂ = (8, 0). Steigung m = (y₂−y₁)/(x₂−x₁).',
            solution:
              'm = (0−2)/(8−0) = −2/8 = −1/4\nb = 2  (y-Achsenabschnitt)\ny = −(1/4)x + 2',
            taskGraph: {
              lines: [{ m: -0.25, b: 2, label: 'y = ?' }],
              points: [
                { x: 0, y: 2, label: '(0, 2)' },
                { x: 8, y: 0, label: '(8, 0)' },
              ],
              xMin: -1, xMax: 9, yMin: -1, yMax: 3,
            },
          },
          {
            letter: 'b',
            text: 'Die Gerade geht durch den Ursprung und durch den Punkt (2, −1). Gib die Geradengleichung an.',
            hint: 'Durch den Ursprung → b = 0. Berechne m aus P₁ = (0,0) und P₂ = (2,−1).',
            solution:
              'm = (−1−0)/(2−0) = −1/2\nb = 0  (Ursprungsgerade)\ny = −(1/2)x',
            taskGraph: {
              lines: [{ m: -0.5, b: 0, label: 'y = ?' }],
              points: [
                { x: 0, y: 0, label: '(0, 0)' },
                { x: 2, y: -1, label: '(2, −1)' },
              ],
              xMin: -1, xMax: 4, yMin: -2, yMax: 2,
            },
          },
        ],
      },
    ],
  },
]

