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
            hint: <>{'Gehe in drei Schritten vor: 1) gemeinsamen Nenner bestimmen (kgV von 7 und 3 ist 21), 2) beide Brueche auf Nenner 21 erweitern, 3) erst dann die Zaehler addieren. Kontrolliere am Ende, ob sich das Ergebnis noch kuerzen laesst.'}</>,
            solution: <><Frac n="3" d="7" />{' + '}<Frac n="7" d="3" />{' = '}<Frac n="9" d="21" />{' + '}<Frac n="49" d="21" />{' = '}<Frac n="58" d="21" /></>,
          },
          {
            letter: 'b',
            text: <>{'('}<Frac n="1" d="3" />{' + '}<Frac n="2" d="9" />{') · ('}<Frac n="11" d="8" />{' − '}<Frac n="1" d="4" />{')'}</>,
            hint: 'Bearbeite die beiden Klammern strikt getrennt: links auf Nenner 9, rechts auf Nenner 8. Notiere beide Zwischenergebnisse als einzelne Brueche und multipliziere erst danach. Beim Multiplizieren darfst du direkt kuerzen.',
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
            hint: 'Jede Division durch einen Bruch sofort in Multiplikation mit dem Kehrwert umwandeln. Danach moeglichst frueh kuerzen (besonders mit 13, da 169 = 13*13). Rechne die zwei Divisionen nacheinander, nicht alles auf einmal.',
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
            hint: <>{'Schreibe zuerst die Regel auf: a⁻ⁿ = '}<Frac n="1" d="aⁿ" />{'. Ersetze dann 5⁻² durch '}<Frac n="1" d="25" />{' und rechne als normalen Bruch-mal-Ganzzahl-Term weiter.'}</>,
            solution: <>{'5⁻² · 100 = ('}<Frac n="1" d="25" />{') · 100 = '}<Frac n="100" d="25" />{' = 4'}</>,
          },
          {
            letter: 'e',
            text: '−2(2x − 4) + x(1 + x) · (−1)',
            hint: 'Arbeite termweise: 1) −2 in die erste Klammer verteilen, 2) x in (1+x) verteilen, 3) den zweiten Block mit (−1) multiplizieren (Vorzeichenwechsel), 4) gleichartige Terme zusammenfassen.',
            solution: '−2(2x−4) = −4x + 8\nx(1+x)·(−1) = −x − x²\n−4x + 8 − x − x² = −x² − 5x + 8',
          },
          {
            letter: 'f',
            text: '−121ab³ − (11a²b)² · (−2a⁻³b)   (Hinweis: 11 · 11 = 121)',
            hint: 'Zuerst nur die Potenz auswerten: (11a²b)². Danach mit (−2a⁻³b) multiplizieren und Potenzgesetze anwenden (Exponenten addieren). Achte am Ende auf das doppelte Minus.',
            solution:
              '(11a²b)² = 121a⁴b²\n121a⁴b² · (−2a⁻³b) = −242a⁴⁻³b²⁺¹ = −242ab³\n−121ab³ − (−242ab³) = −121ab³ + 242ab³ = 121ab³',
          },
          {
            letter: 'g',
            text: <>{'−'}<Frac n="a + b" d="c" />{' − '}<Frac n="a − b" d="c" /></>,
            hint: 'Da beide Brueche denselben Nenner c haben, kannst du die Zaehler direkt zusammenfassen. Wichtig: Das Minus vor dem zweiten Bruch betrifft den ganzen Zaehler (a−b).',
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
            hint: 'Gewollt ist, dass -1 aus b(a − b) + b − a ausgeklammert wird. Das Endergebnis sollte als -1 * (den Ausdruck in der Klammer) dargestellt werden. Ohne dass sich der Term/Ausdruck vom Wert her verändert. Am Ende müsste das Ergebnis also so -1 * (den Ausdruck in der Klammer) aussehen. Wenn man das dann ausmultipliziert, sollte man wieder den ursprünglichen Term b(a − b) + b − a erhalten.',
            solution:
              'b(a−b) + b − a\n= (−1) · (−b(a−b) − b + a)\n= (−1) · (b(b−a) − b + a)',
          },
          {
            letter: 'b',
            text: 'Klammere a − b aus.',
            hint: 'Forme zuerst b−a zu −(a−b) um. Dann steht der Term als b(a−b) − (a−b). Jetzt ist (a−b) der gemeinsame Faktor und kann direkt ausgeklammert werden.',
            solution:
              'b(a−b) + b − a\n= b(a−b) − (a−b)\n= (a−b) · (b − 1)',
          },
          {
            letter: 'c',
            text: 'Klammere b − a aus.',
            hint: 'Wenn (b−a) ausgeklammert werden soll, bringe alle Teile in diese Form: a−b = −(b−a). Dadurch wird b(a−b) zu −b(b−a), und danach kannst du (b−a) aus beiden Summanden ausklammern.',
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
            hint: 'Pruefregel: Sind Zaehler und Nenner identisch (und der Nenner ungleich 0), ist der Bruch gleich 1.',
            solution: <><Frac n="a−b" d="a−b" />{' = 1'}</>,
          },
          {
            letter: 'b',
            text: <Frac n="a − b" d="b − a" />,
            hint: 'Bringe den Nenner in dieselbe Form wie den Zaehler: b−a = −(a−b). Danach kuerzt sich (a−b), es bleibt nur das Vorzeichen.',
            solution: <><Frac n="a−b" d="b−a" />{' = '}<Frac n="a−b" d="−(a−b)" />{' = −1'}</>,
          },
          {
            letter: 'c',
            text: <Frac n="a² + b²" d="a + b" />,
            hint: 'Beim Kuetzen darfst du nur gemeinsame Faktoren kuerzen, nicht einzelne Summanden. Pruefe daher die Faktorisierung: a²+b² hat keinen Faktor (a+b).',
            solution: 'Nicht weiter kürzbar – Zähler und Nenner haben keine gemeinsamen Faktoren.',
          },
          {
            letter: 'd',
            text: <Frac n="a² − b²" d="a − b" />,
            hint: 'Erkenne die Differenz zweier Quadrate: a²−b² = (a+b)(a−b). Danach kuerzt sich (a−b) direkt weg.',
            solution: <><Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)(a−b)" d="a−b" />{' = a+b'}</>,
          },
          {
            letter: 'e',
            text: <Frac n="2a + 3b" d="2c + 3d" />,
            hint: 'Suche einen gemeinsamen Gesamtfaktor von Zaehler und Nenner. Wichtig: Nicht termweise kuerzen, sondern nur dann, wenn ein gemeinsamer Faktor vor der ganzen Summe steht.',
            solution: 'Nicht weiter kürzbar – keine gemeinsamen Faktoren.',
          },
          {
            letter: 'f',
            text: <Frac n="k² + k³" d="k²" />,
            hint: 'Ziehe im Zaehler zuerst den groessten gemeinsamen Faktor k² heraus: k²(1+k). Dann kuerzt sich k² oben und unten.',
            solution: <><Frac n="k²+k³" d="k²" />{' = '}<Frac n="k²(1+k)" d="k²" />{' = 1+k'}</>,
          },
          {
            letter: 'g',
            text: <Frac n="2k²" d="4k² + 6k³" />,
            hint: 'Faktoriere zuerst den Nenner: 4k²+6k³ = 2k²(2+3k). Danach den gemeinsamen Faktor 2k² mit dem Zaehler kuerzen.',
            solution: <><Frac n="2k²" d="4k²+6k³" />{' = '}<Frac n="2k²" d="2k²(2+3k)" />{' = '}<Frac n="1" d="2+3k" /></>,
          },
          {
            letter: 'h',
            text: <Frac n="1 + k²" d="1 + k³" />,
            hint: 'Pruefe, ob Zaehler oder Nenner einen gemeinsamen Faktor enthalten. Da (1+k²) kein Faktor von (1+k³) ist, kann hier nichts gekuerzt werden.',
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
            hint: 'Ziehe zuerst unter eine gemeinsame Wurzel: √2·√32 = √(2·32). Rechne dann das Produkt unter der Wurzel aus und ziehe erst danach die Wurzel.',
            solution: '√2 · √32 = √(2·32) = √64 = 8',
          },
          {
            letter: 'b',
            text: 'Gilt √(a + b) = √a + √b für beliebige a, b ≥ 0?',
            hint: 'Um eine Aussage "fuer alle" zu widerlegen, reicht ein einziges Gegenbeispiel. Nimm Zahlen mit einfachen Wurzeln (z.B. 9 und 16) und vergleiche beide Seiten.',
            solution:
              'Nein – nicht allgemein gültig.\nGegenbeispiel a=9, b=16:\n√(9+16) = √25 = 5\n√9 + √16 = 3 + 4 = 7\n5 ≠ 7',
          },
          {
            letter: 'c',
            text: <>{'Mache die Nenner von '}<Frac n="1" d="√5" />{' und '}<Frac n="1" d="√3 + √5" />{' jeweils rational.'}</>,
            hint: (
              <>
                {'Bearbeite die beiden Brueche getrennt: 1) Bei '}<Frac n="1" d="√5" />{' mit '}<Frac n="√5" d="√5" />{' erweitern. 2) Bei '}<Frac n="1" d="√3+√5" />{' mit dem konjugierten Ausdruck '}<Frac n="√3−√5" d="√3−√5" />{' erweitern und dann (a+b)(a−b)=a²−b² anwenden.'}
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
            hint: 'Lies m und b aus y=mx+b ab: m=1, b=0. Markiere zuerst (0,0), gehe dann 1 nach rechts und 1 nach oben fuer den zweiten Punkt und verbinde die Punkte.',
            solution: 'Gerade durch den Ursprung mit Steigung 1 (45°-Winkel nach rechts oben).',
            graph: {
              lines: [{ m: 1, b: 0, label: 'y = x' }],
              xMin: -3, xMax: 3, yMin: -3, yMax: 3,
            },
          },
          {
            letter: 'b',
            text: 'Skizziere y = −2x + 1.',
            hint: 'Beginne beim Achsenabschnitt (0,1). Nutze dann die Steigung m=−2 als Schritt: 1 nach rechts, 2 nach unten. So bekommst du den zweiten Punkt.',
            solution: <>{'Gerade fällt steil nach rechts. Nullstelle bei x = '}<Frac n="1" d="2" />{'.'}</>,
            graph: {
              lines: [{ m: -2, b: 1, label: 'y = −2x + 1' }],
              xMin: -1, xMax: 2, yMin: -2, yMax: 4,
            },
          },
          {
            letter: 'c',
            text: <>{'Skizziere y = ('}<Frac n="1" d="2" />{')x − 2.'}</>,
            hint: <>{'Markiere zuerst den Achsenabschnitt (0,−2). Bei m='}<Frac n="1" d="2" />{' gehst du am besten 2 nach rechts und 1 nach oben, damit du ganze Gitterpunkte bekommst.'}</>,
            solution: 'Gerade steigt flach nach rechts. Nullstelle bei x = 4.',
            graph: {
              lines: [{ m: 0.5, b: -2, label: 'y = x/2 − 2' }],
              xMin: -1, xMax: 5, yMin: -3, yMax: 1,
            },
          },
          {
            letter: 'd',
            text: 'Skizziere y = 4.',
            hint: 'Konstante Funktion: y bleibt fuer jedes x gleich 4. Setze zwei Punkte mit y=4 und verbinde sie waagerecht.',
            solution: 'Waagerechte Linie bei y = 4, parallel zur x-Achse.',
            graph: {
              lines: [{ m: 0, b: 4, label: 'y = 4' }],
              xMin: -4, xMax: 4, yMin: 0, yMax: 5,
            },
          },
          {
            letter: 'e',
            text: 'Bestimme den Schnittpunkt der Geraden aus (b) und (c).',
            hint: <>{'Am Schnittpunkt haben beide Geraden denselben y-Wert: also Gleichungen gleichsetzen. Bringe x-Terme auf eine Seite, Zahlen auf die andere, bestimme x und setze danach in eine der Geraden ein, um y zu erhalten.'}</>,
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
            hint: <>{'Nutze die Achsenschnittpunkte direkt als zwei Punkte: (0,2) und (8,0). Berechne zuerst die Steigung m mit '}<Frac n="y₂−y₁" d="x₂−x₁" />{'. Danach in y=mx+b einsetzen (b ist hier schon 2).'} </>,
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
            hint: 'Durch den Ursprung bedeutet sofort b=0, also hat die Gerade die Form y=mx. Bestimme nur noch m aus den Punkten (0,0) und (2,−1).',
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
            hint: 'Pruefe jede Aussage einzeln.\n\n1) Bei ∈: Ist das genannte Objekt ein Element der Menge?\n2) Bei ⊆: Ist die linke Seite selbst eine Menge, deren Elemente alle in der rechten Menge liegen?\n\nWichtig: 1 und {1} sind verschiedene Objekte.',
            solution: '(i) 1 ∈ M  → korrekt  (1 ist Element von {1,2,3})\n(ii) {1} ∈ M  → falsch  ({1} ist keine Menge in M; 1 ist ein Element, nicht {1})\n(iii) {1} ⊆ M  → korrekt  ({1} ist Teilmenge von {1,2,3})',
          },
          {
            letter: 'b',
            text: 'Sei L = {∅, {1}, {2}, {1,2}}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   2 ∈ L\n(ii)  {2} ∈ L\n(iii) {2} ⊆ L\n(iv)  {{2}} ⊆ L',
            hint: 'Arbeite in zwei Schritten:\n\n1) Schreibe die Elemente von L einzeln hin: ∅, {1}, {2}, {1,2}.\n2) Pruefe dann jede Zeile getrennt.\n\nAchte auf die Ebenen: 2, {2} und {{2}} sind nicht dasselbe.',
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
            hint: 'Nutze feste Regeln:\n- A\\B: in A, aber nicht in B\n- ∩: in allen Mengen\n- ∪: in mindestens einer Menge\n- ×: geordnete Paare\n\nBei X×Z: zuerst ein x festhalten und mit allen z kombinieren.',
            solution: '(i) Z \\ X = {1,5} \\ {1,3,5,7} = ∅\n(ii) X \\ Z = {1,3,5,7} \\ {1,5} = {3,7}\n(iii) X ∩ Y ∩ Z = {5}\n(iv) X ∪ Y ∪ Z = {1,3,5,7,8}\n(v) X × Z = {(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)}',
          },
          {
            letter: 'b',
            text: 'Grundmenge G = {1,2,3,4,5,6,7,8,9}\nL = {1,2,4,7},  M = {3,5,6,8,9},  N = {4,5,9}\n(L̅ = Komplement von L in G, etc.)\n\nBestimmen Sie:\n(i)   L̅ ∩ N\n(ii)  (L ∩ M̅) ∪ (N ∩ N̅)\n(iii) L ∩ N̅ ∩ M̅',
            hint: 'Vorgehen:\n1) Erst L̅, M̅ und N̅ berechnen und getrennt notieren.\n2) Dann in (i) bis (iii) einsetzen.\n\nSchnellfakt: N∩N̅=∅.\nDamit vereinfacht sich (ii) sofort.',
            solution: 'Komplemente: L̅ = {3,5,6,8,9}  M̅ = {1,2,4,7}  N̅ = {1,2,3,6,7,8}\n\n(i) L̅ ∩ N = {3,5,6,8,9} ∩ {4,5,9} = {5,9}\n(ii) (L ∩ M̅) ∪ (N ∩ N̅) = ({1,2,4,7} ∩ {1,2,4,7}) ∪ ∅ = {1,2,4,7} = L\n(iii) L ∩ N̅ ∩ M̅ = {1,2,4,7} ∩ {1,2,3,6,7,8} ∩ {1,2,4,7} = {1,2,7}',
          },
          {
            letter: 'c',
            text: 'Gegeben:\n  M₁ = ℤ,  M₂ = ℕ,  M₃ = {−1, 1, 2},  M₄ = [−1, 2)\n\nBestimmen Sie:\n(i)   M₄ ∪ M₃\n(ii)  M₄ ∩ (M₂ \\ M₃)\n(iii) M₃ \\ (M₁ \\ M₂)',
            hint: 'Schritt 1: Hilfsmengen bilden\n- M₁\\M₂\n- M₂\\M₃\n\nSchritt 2: Jede Teilaufgabe operatorweise lesen\n- ∪ fuegt Elemente hinzu\n- ∩ nimmt gemeinsame Elemente\n- \\ entfernt Elemente\n\nBeim Intervall [−1,2): Randpunkt 2 ist nicht enthalten.',
            solution: '(i) M₄ ∪ M₃ = [−1, 2) ∪ {2} = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}\n(ii) M₂ \\ M₃ = {0, 3, 4, 5, …}\n    M₄ ∩ (M₂ \\ M₃) = [−1, 2) ∩ {0, 3, 4, …} = {0}\n(iii) M₁ \\ M₂ = {…, −3, −2, −1}\n    M₃ \\ (M₁ \\ M₂) = {−1, 1, 2} \\ {…, −1} = {1, 2}',
          },
          {
            letter: 'd',
            text: 'Sei A = {1, 2, 3}. Geben Sie die Potenzmenge P(A) an.',
            hint: 'Erzeuge P(A) systematisch:\n1) ∅\n2) alle 1-elementigen Teilmengen\n3) alle 2-elementigen Teilmengen\n4) A selbst\n\nKontrolle: |P(A)|=2^|A|=8.',
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
            hint: 'Nutze Standardmuster:\n- "teilbar durch k" -> {kn : n∈ℕ}\n- "Rest r bei Division durch k" -> {kn+r : n∈ℕ}\n\nFuer (iii) zuerst das kgV von 2 und 3 bestimmen.',
            solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
          },
          {
            letter: 'b',
            text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
            hint: 'Lege eine kleine Wertetabelle an:\n n = 0, 1, 2, 3, ...\n\nSetze dann sauber in jeden Term ein.\nBei (iv) vorher umformen: 2²ⁿ=(2²)ⁿ=4ⁿ.',
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
            hint: 'Zeichne den 3-Kreise-Rahmen viermal.\n\nDann pro Ausdruck:\n1) Klammern von innen nach aussen bearbeiten\n2) entsprechende Flaechen schattieren\n\nAm Ende die Ergebnisflaechen paarweise vergleichen.',
            solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
          },
          {
            letter: 'b',
            text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
            hint: 'Zeichne beide Ausdruecke getrennt und vergleiche die schattierten Bereiche direkt.\n\nWenn der Unterschied nicht sofort sichtbar ist:\n- Zahlenbeispiel fuer A, B, C waehlen\n- beide Seiten explizit berechnen',
            solution: 'A ∪ (B ∩ C)  ≠  (A ∪ B) ∩ C  im Allgemeinen.\n\nBeispiel: A = {1,2}, B = {2,3}, C = {3,4}\n  A ∪ (B ∩ C) = {1,2} ∪ {3} = {1,2,3}\n  (A ∪ B) ∩ C = {1,2,3} ∩ {3,4} = {3}\n\n→ Klammern können nicht einfach weggelassen werden!',
          },
          {
            letter: 'c',
            text: 'Sei X Grundmenge, A, B ⊆ X. Veranschaulichen Sie und vergleichen Sie:\n\n  Ā ∪ B\n  Ā ∪ B̄\n  Ā ∩ B\n  Ā ∩ B̄\n\n(Ā = Komplement von A in X)',
            hint: 'Vorgehen im Diagramm:\n1) A und B in X markieren\n2) Komplemente Ā und B̄ kennzeichnen\n3) die vier Ausdruecke einzeln schattieren\n\nZum Kontrollieren De-Morgan verwenden.',
            solution: 'Es gilt (De Morgan\'sche Gesetze):\n\nA ∪ B̅ = A̅ ∩ B̅   (Komplement der Vereinigung = Schnitt der Komplemente)\nA ∩ B̅ = A̅ ∪ B̅   (Komplement des Schnitts = Vereinigung der Komplemente)\n\n→ A̅ ∪ B und A̅ ∩ B̅ haben identische Venn-Diagramme.\n→ A̅ ∩ B und A̅ ∪ B̅ haben identische Venn-Diagramme.',
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
            text: 'Seien A, B, C Teilmengen einer Grundmenge X.\nWelche Gleichheiten sind für jede Wahl immer erfüllt?\n\n(i)   A \\ (B \\ C) = (A \\ B) \\ C\n(ii)  A \\ B = A ∩ B̅\n(iii) A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)\n(iv)  A ∪ (A̅ ∩ B) = A ∪ B',
            hint: 'Kombiniere zwei Methoden:\n\n1) Vermutlich falsche Aussagen mit Gegenbeispiel testen\n2) Vermutlich wahre Aussagen mit Elementmethode zeigen\n   (x∈links genau dann x∈rechts)\n\nSo kannst du jede Gleichheit systematisch einordnen.',
            solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B̅  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A̅ ∩ B) = (A ∪ A̅) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
          },
        ],
      },
    ],
  },
]
