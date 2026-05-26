import type { MatheBlatt } from '../types'
import Frac from '../utils/Frac'

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
            text: <><Frac n="3" d="7" />{' + '}<Frac n="7" d="3" /></>,
            hint: <>{'Bestimme den gemeinsamen Nenner: kgV(7, 3) = 21. Erweitere '}<Frac n="3" d="7" />{' auf '}<Frac n="9" d="21" />{' und '}<Frac n="7" d="3" />{' auf '}<Frac n="49" d="21" />{'.'}</>,
            solution: <><Frac n="3" d="7" />{' + '}<Frac n="7" d="3" />{' = '}<Frac n="9" d="21" />{' + '}<Frac n="49" d="21" />{' = '}<Frac n="58" d="21" /></>,
          },
          {
            letter: 'b',
            text: <>{'('}<Frac n="1" d="3" />{' + '}<Frac n="2" d="9" />{') · ('}<Frac n="11" d="8" />{' − '}<Frac n="1" d="4" />{')'}</>,
            hint: 'Berechne zuerst jeden Klammerausdruck separat (gemeinsamer Nenner 9 bzw. 8), dann multipliziere.',
            solution: (
              <>
                {'('}<Frac n="1" d="3" />{' + '}<Frac n="2" d="9" />{') = '}<Frac n="3" d="9" />{' + '}<Frac n="2" d="9" />{' = '}<Frac n="5" d="9" />{'\n'}
                {'('}<Frac n="11" d="8" />{' − '}<Frac n="1" d="4" />{') = '}<Frac n="11" d="8" />{' − '}<Frac n="2" d="8" />{' = '}<Frac n="9" d="8" />{'\n'}
                <Frac n="5" d="9" />{' · '}<Frac n="9" d="8" />{' = '}<Frac n="45" d="72" />{' = '}<Frac n="5" d="8" />
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'('}<Frac n="13" d="2" />{' : '}<Frac n="169" d="12" />{') : '}<Frac n="3" d="26" />{'   (Hinweis: 13 · 13 = 169)'}</>,
            hint: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert. Kürze mit 13 und nutze 169 = 13².',
            solution: (
              <>
                <Frac n="13" d="2" />{' : '}<Frac n="169" d="12" />{' = '}<Frac n="13" d="2" />{' · '}<Frac n="12" d="169" />{' = '}<Frac n="156" d="338" />{' = '}<Frac n="12" d="26" />{'\n'}
                <Frac n="12" d="26" />{' : '}<Frac n="3" d="26" />{' = '}<Frac n="12" d="26" />{' · '}<Frac n="26" d="3" />{' = '}<Frac n="12" d="3" />{' = 4'}
              </>
            ),
          },
          {
            letter: 'd',
            text: '5⁻² · 100',
            hint: <>{'Negative Hochzahl: a⁻ⁿ = '}<Frac n="1" d="aⁿ" />{'. Also 5⁻² = '}<Frac n="1" d="25" />{'.'}</>,
            solution: <>{'5⁻² · 100 = ('}<Frac n="1" d="25" />{') · 100 = '}<Frac n="100" d="25" />{' = 4'}</>,
          },
          {
            letter: 'e',
            text: '−2(2x − 4) + x(1 + x) · (−1)',
            hint: 'Löse die Klammern schrittweise auf: zuerst −2(2x−4), dann x(1+x)·(−1). Sammle gleiche Terme.',
            solution: '−2(2x−4) = −4x + 8\nx(1+x)·(−1) = −x − x²\n−4x + 8 − x − x² = −x² − 5x + 8',
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
            text: <>{'−'}<Frac n="a + b" d="c" />{' − '}<Frac n="a − b" d="c" /></>,
            hint: 'Beide Brüche haben denselben Nenner c – fasse sie direkt zusammen.',
            solution: (
              <>
                {'= '}<Frac n="−(a+b) − (a−b)" d="c" />{'\n'}
                {'= '}<Frac n="−a − b − a + b" d="c" />{'\n'}
                {'= '}<Frac n="−2a" d="c" />
              </>
            ),
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
            text: <Frac n="a − b" d="a − b" />,
            hint: 'Zähler und Nenner sind identisch.',
            solution: <><Frac n="a−b" d="a−b" />{' = 1'}</>,
          },
          {
            letter: 'b',
            text: <Frac n="a − b" d="b − a" />,
            hint: 'Schreibe b−a = −(a−b) und kürze.',
            solution: <><Frac n="a−b" d="b−a" />{' = '}<Frac n="a−b" d="−(a−b)" />{' = −1'}</>,
          },
          {
            letter: 'c',
            text: <Frac n="a² + b²" d="a + b" />,
            hint: 'Prüfe, ob Zähler oder Nenner faktorisiert werden können. a²+b² hat keine reellen Faktoren der Form (a+b).',
            solution: 'Nicht weiter kürzbar – Zähler und Nenner haben keine gemeinsamen Faktoren.',
          },
          {
            letter: 'd',
            text: <Frac n="a² − b²" d="a − b" />,
            hint: 'Wende die 3. binomische Formel an: a²−b² = (a+b)(a−b).',
            solution: <><Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)(a−b)" d="a−b" />{' = a+b'}</>,
          },
          {
            letter: 'e',
            text: <Frac n="2a + 3b" d="2c + 3d" />,
            hint: 'Gibt es einen gemeinsamen Faktor in Zähler und Nenner?',
            solution: 'Nicht weiter kürzbar – keine gemeinsamen Faktoren.',
          },
          {
            letter: 'f',
            text: <Frac n="k² + k³" d="k²" />,
            hint: 'Klammere k² im Zähler aus: k²(1+k).',
            solution: <><Frac n="k²+k³" d="k²" />{' = '}<Frac n="k²(1+k)" d="k²" />{' = 1+k'}</>,
          },
          {
            letter: 'g',
            text: <Frac n="2k²" d="4k² + 6k³" />,
            hint: 'Klammere 2k² im Nenner aus: 2k²(2+3k).',
            solution: <><Frac n="2k²" d="4k²+6k³" />{' = '}<Frac n="2k²" d="2k²(2+3k)" />{' = '}<Frac n="1" d="2+3k" /></>,
          },
          {
            letter: 'h',
            text: <Frac n="1 + k²" d="1 + k³" />,
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
            text: <>{'Mache die Nenner von '}<Frac n="1" d="√5" />{' und '}<Frac n="1" d="√3 + √5" />{' jeweils rational.'}</>,
            hint: (
              <>
                {'Für '}<Frac n="1" d="√5" />{': Erweitere mit '}<Frac n="√5" d="√5" />{'.\nFür '}<Frac n="1" d="√3+√5" />{': Nutze die 3. binomische Formel – erweitere mit '}<Frac n="√3−√5" d="√3−√5" />{'.'} 
              </>
            ),
            solution: (
              <>
                <Frac n="1" d="√5" />{' = '}<Frac n="1·√5" d="√5·√5" />{' = '}<Frac n="√5" d="5" />{'\n\n'}
                <Frac n="1" d="√3+√5" />{'\n= '}
                <Frac n="1" d="√3+√5" />{' · '}<Frac n="√3−√5" d="√3−√5" />{'\n= '}
                <Frac n="√3−√5" d="3−5" />{'\n= '}
                <Frac n="√3−√5" d="−2" />
              </>
            ),
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
            solution: <>{'Gerade fällt steil nach rechts. Nullstelle bei x = '}<Frac n="1" d="2" />{'.'}</>,
            graph: {
              lines: [{ m: -2, b: 1, label: 'y = −2x + 1' }],
              xMin: -1, xMax: 2, yMin: -2, yMax: 4,
            },
          },
          {
            letter: 'c',
            text: <>{'Skizziere y = ('}<Frac n="1" d="2" />{')x − 2.'}</>,
            hint: <>{'Steigung m = '}<Frac n="1" d="2" />{' (steigt flach), y-Achsenabschnitt b = −2. Punkte: (0,−2) und (4,0).'}</>,
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
            hint: <>{'Setze beide Gleichungen gleich: −2x+1 = ('}<Frac n="1" d="2" />{')x−2. Löse nach x auf.'}</>,
            solution: (
              <>
                {'−2x + 1 = ('}<Frac n="1" d="2" />{')x − 2\n3 = ('}<Frac n="5" d="2" />{')x\nx = '}<Frac n="6" d="5" />{'\n'}
                {'y = −2·('}<Frac n="6" d="5" />{') + 1 = −'}<Frac n="12" d="5" />{' + '}<Frac n="5" d="5" />{' = −'}<Frac n="7" d="5" />{'\n'}
                {'Schnittpunkt: ('}<Frac n="6" d="5" />{', −'}<Frac n="7" d="5" />{')'}
              </>
            ),
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
            hint: <>{'Lies zwei Punkte ab: P₁ = (0, 2) und P₂ = (8, 0). Steigung m = '}<Frac n="y₂−y₁" d="x₂−x₁" />{'.'}</>,
            solution: (
              <>
                {'m = '}<Frac n="0−2" d="8−0" />{' = −'}<Frac n="2" d="8" />{' = −'}<Frac n="1" d="4" />{'\n'}
                {'b = 2  (y-Achsenabschnitt)\ny = −('}<Frac n="1" d="4" />{')x + 2'}
              </>
            ),
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
            solution: (
              <>
                {'m = '}<Frac n="−1−0" d="2−0" />{' = −'}<Frac n="1" d="2" />{'\n'}
                {'b = 0  (Ursprungsgerade)\ny = −('}<Frac n="1" d="2" />{')x'}
              </>
            ),
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
  {
    id: 'blatt1',
    nr: '1',
    titel: 'Mengen',
    aufgaben: [
      {
        id: 'b1a1',
        nr: 1,
        title: 'Mengenschreibweisen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei M = {1, 2, 3}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   1 ∈ M\n(ii)  {1} ∈ M\n(iii) {1} ⊆ M',
            hint: '∈ prüft, ob ein Objekt Element einer Menge ist. ⊆ prüft, ob eine Menge Teilmenge einer anderen ist. {1} ist eine Menge – nicht das Element 1.',
            solution: '(i) 1 ∈ M  → korrekt  (1 ist Element von {1,2,3})\n(ii) {1} ∈ M  → falsch  ({1} ist keine Menge in M; 1 ist ein Element, nicht {1})\n(iii) {1} ⊆ M  → korrekt  ({1} ist Teilmenge von {1,2,3})',
          },
          {
            letter: 'b',
            text: 'Sei L = {∅, {1}, {2}, {1,2}}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   2 ∈ L\n(ii)  {2} ∈ L\n(iii) {2} ⊆ L\n(iv)  {{2}} ⊆ L',
            hint: 'Die Elemente von L sind: ∅, {1}, {2} und {1,2}. Die Zahl 2 selbst ist kein Element von L.',
            solution: '(i) 2 ∈ L  → falsch  (2 ist kein direktes Element von L, nur {2} ist es)\n(ii) {2} ∈ L  → korrekt  ({2} ist direktes Element von L)\n(iii) {2} ⊆ L  → falsch  (wäre wahr, wenn 2 ∈ L gilt – das ist aber nicht der Fall)\n(iv) {{2}} ⊆ L  → korrekt  ({2} ∈ L, also ist {{2}} eine Teilmenge von L)',
          },
        ],
      },
      {
        id: 'b1a2',
        nr: 2,
        title: 'Mengenoperationen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Gegeben:\n  X = {1,3,5,7},  Y = {5,7,8},  Z = {1,5}\n\nBestimmen Sie:\n(i)   Z \\ X\n(ii)  X \\ Z\n(iii) X ∩ Y ∩ Z\n(iv)  X ∪ Y ∪ Z\n(v)   X × Z',
            hint: 'A \\ B = alle Elemente aus A, die nicht in B sind.\nX × Z = alle geordneten Paare (x, z) mit x ∈ X und z ∈ Z.',
            solution: '(i) Z \\ X = {1,5} \\ {1,3,5,7} = ∅\n(ii) X \\ Z = {1,3,5,7} \\ {1,5} = {3,7}\n(iii) X ∩ Y ∩ Z = {5}\n(iv) X ∪ Y ∪ Z = {1,3,5,7,8}\n(v) X × Z = {(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)}',
          },
          {
            letter: 'b',
            text: 'Grundmenge G = {1,2,3,4,5,6,7,8,9}\nL = {1,2,4,7},  M = {3,5,6,8,9},  N = {4,5,9}\n(L\u0305 = Komplement von L in G, etc.)\n\nBestimmen Sie:\n(i)   L\u0305 ∩ N\n(ii)  (L ∩ M\u0305) ∪ (N ∩ N\u0305)\n(iii) L ∩ N\u0305 ∩ M\u0305',
            hint: 'L\u0305 = G \\ L = {3,5,6,8,9}\nM\u0305 = G \\ M = {1,2,4,7} = L\nN\u0305 = G \\ N = {1,2,3,6,7,8}\nBeachte: N ∩ N\u0305 = ∅ (Menge und ihr Komplement sind disjunkt).',
            solution: 'Komplemente: L\u0305 = {3,5,6,8,9}  M\u0305 = {1,2,4,7}  N\u0305 = {1,2,3,6,7,8}\n\n(i) L\u0305 ∩ N = {3,5,6,8,9} ∩ {4,5,9} = {5,9}\n(ii) (L ∩ M\u0305) ∪ (N ∩ N\u0305) = ({1,2,4,7} ∩ {1,2,4,7}) ∪ ∅ = {1,2,4,7} = L\n(iii) L ∩ N\u0305 ∩ M\u0305 = {1,2,4,7} ∩ {1,2,3,6,7,8} ∩ {1,2,4,7} = {1,2,7}',
          },
          {
            letter: 'c',
            text: 'Gegeben:\n  M₁ = ℤ,  M₂ = ℕ,  M₃ = {−1, 1, 2},  M₄ = [−1, 2)\n\nBestimmen Sie:\n(i)   M₄ ∪ M₃\n(ii)  M₄ ∩ (M₂ \\ M₃)\n(iii) M₃ \\ (M₁ \\ M₂)',
            hint: 'M₄ = [−1, 2) enthält alle reellen Zahlen von −1 bis 2 (2 nicht enthalten).\nM₁ \\ M₂ = ℤ \\ ℕ = {…, −3, −2, −1} (negative ganze Zahlen).\nM₂ \\ M₃ = ℕ ohne {1, 2} = {0, 3, 4, 5, …}.',
            solution: '(i) M₄ ∪ M₃ = [−1, 2) ∪ {2} = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}\n(ii) M₂ \\ M₃ = {0, 3, 4, 5, …}\n    M₄ ∩ (M₂ \\ M₃) = [−1, 2) ∩ {0, 3, 4, …} = {0}\n(iii) M₁ \\ M₂ = {…, −3, −2, −1}\n    M₃ \\ (M₁ \\ M₂) = {−1, 1, 2} \\ {…, −1} = {1, 2}',
          },
          {
            letter: 'd',
            text: 'Sei A = {1, 2, 3}. Geben Sie die Potenzmenge P(A) an.',
            hint: 'P(A) enthält alle Teilmengen von A, einschließlich ∅ und A selbst. Bei |A| = 3 gilt |P(A)| = 2³ = 8.',
            solution: 'P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}',
          },
        ],
      },
      {
        id: 'b1a3',
        nr: 3,
        title: 'Mengendarstellung',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Stellen Sie folgende Mengen in der Form { Ausdruck : n ∈ ℕ } dar:\n\n(i)   Natürliche Zahlen, die ohne Rest durch 7 teilbar sind\n(ii)  Natürliche Zahlen, die bei Division durch 5 den Rest 3 lassen\n(iii) Natürliche Zahlen, die sowohl durch 2 als auch durch 3 ohne Rest teilbar sind',
            hint: 'Gerade Zahlen: {2n : n ∈ ℕ}. Für Rest r bei Division durch k: {kn + r : n ∈ ℕ}. Für (iii): Welches ist die kleinste Zahl, die durch 2 und 3 teilbar ist?',
            solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
          },
          {
            letter: 'b',
            text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
            hint: 'Setzen Sie n = 0, 1, 2, 3, … ein. Bei (iv): 2²ⁿ = (2²)ⁿ = 4ⁿ.',
            solution: '(i) {3n − 2 : n ∈ ℕ} = {−2, 1, 4, 7, 10, …}\n(ii) {3n + 2 : n ∈ ℕ} = {2, 5, 8, 11, 14, …}\n(iii) {2ⁿ : n ∈ ℕ} = {1, 2, 4, 8, 16, …}\n(iv) {2²ⁿ : n ∈ ℕ} = {4⁰, 4¹, 4², …} = {1, 4, 16, 64, 256, …}',
          },
        ],
      },
      {
        id: 'b1a4',
        nr: 4,
        title: 'Venn-Diagramme',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Seien A, B, C Mengen. Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  (A ∩ B) ∪ C\n  (A ∪ B) ∩ C\n  (A ∪ C) ∩ (B ∪ C)\n  (A ∩ C) ∪ (B ∩ C)\n\nWas fällt auf?',
            hint: 'Färben Sie die entsprechenden Bereiche in einem 3-Kreise-Venn-Diagramm ein. Welche Diagramme sehen gleich aus?',
            solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
          },
          {
            letter: 'b',
            text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
            hint: 'Zeichnen Sie beide Ausdrücke getrennt. Sind die schattierten Bereiche identisch?',
            solution: 'A ∪ (B ∩ C)  ≠  (A ∪ B) ∩ C  im Allgemeinen.\n\nBeispiel: A = {1,2}, B = {2,3}, C = {3,4}\n  A ∪ (B ∩ C) = {1,2} ∪ {3} = {1,2,3}\n  (A ∪ B) ∩ C = {1,2,3} ∩ {3,4} = {3}\n\n→ Klammern können nicht einfach weggelassen werden!',
          },
          {
            letter: 'c',
            text: 'Sei X Grundmenge, A, B ⊆ X. Veranschaulichen Sie und vergleichen Sie:\n\n  Ā ∪ B\n  Ā ∪ B̄\n  Ā ∩ B\n  Ā ∩ B̄\n\n(Ā = Komplement von A in X)',
            hint: 'De Morgan\'sche Gesetze: Das Komplement einer Vereinigung ist der Schnitt der Komplemente – und umgekehrt.',
            solution: 'Es gilt (De Morgan\'sche Gesetze):\n\nA ∪ B\u0305 = A\u0305 ∩ B\u0305   (Komplement der Vereinigung = Schnitt der Komplemente)\nA ∩ B\u0305 = A\u0305 ∪ B\u0305   (Komplement des Schnitts = Vereinigung der Komplemente)\n\n→ A\u0305 ∪ B und A\u0305 ∩ B\u0305 haben identische Venn-Diagramme.\n→ A\u0305 ∩ B und A\u0305 ∪ B\u0305 haben identische Venn-Diagramme.',
          },
        ],
      },
      {
        id: 'b1a5',
        nr: 5,
        title: 'Mengengleichheiten (optional)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Seien A, B, C Teilmengen einer Grundmenge X.\nWelche Gleichheiten sind für jede Wahl immer erfüllt?\n\n(i)   A \\ (B \\ C) = (A \\ B) \\ C\n(ii)  A \\ B = A ∩ B\u0305\n(iii) A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)\n(iv)  A ∪ (A\u0305 ∩ B) = A ∪ B',
            hint: 'Testen Sie (i) mit A = B = C = {1,2,3}. Für die anderen: Zeigen Sie x ∈ linke Seite ⟺ x ∈ rechte Seite.',
            solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B\u0305  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A\u0305 ∩ B) = (A ∪ A\u0305) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
          },
        ],
      },
    ],
  },
]
