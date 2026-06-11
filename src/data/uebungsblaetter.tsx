import type { ReactNode } from 'react'
import type { MatheBlatt, HintSection } from '../types'
import Frac from '../utils/Frac'

const h = (
  konzept: ReactNode,
  vorgehensweise: ReactNode,
  beispiel: ReactNode,
  fehler: ReactNode,
  kontrolle: ReactNode,
): HintSection[] => [
  { icon: '💡', title: 'Konzept verstehen', content: konzept },
  { icon: '🔍', title: 'Vorgehensweise', content: vorgehensweise },
  { icon: '📝', title: 'Syntax / Beispiel', content: beispiel },
  { icon: '⚠️', title: 'Häufige Fehler', content: fehler },
  { icon: '✅', title: 'Kontrollfrage', content: kontrolle },
]

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
            hint: h(
              <>
                <p>Um Brüche zu addieren, müssen ihre Nenner gleich sein. Den gemeinsamen Nenner erhält man durch das <span className="hint-em">kgV</span> (kleinstes gemeinsames Vielfaches) der einzelnen Nenner.</p>
                <p>Formel: a/b + c/d = (a·d + c·b) / (b·d) — besser aber mit kgV kürzen, um den einfachsten Nenner zu bekommen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`1) kgV(7, 3) berechnen → 21
2) Brüche erweitern:
   3/7 = (3·3)/(7·3) = 9/21
   7/3 = (7·7)/(3·7) = 49/21
3) Zähler addieren: 9/21 + 49/21 = 58/21
4) Kürzen prüfen: ggT(58, 21) = ggT(2·29, 3·7) = 1 → fertig`}</pre>
              </>,
              <>
                <p>Beispiel: 1/4 + 1/6</p>
                <pre className="hint-code-block">{`kgV(4, 6) = 12
1/4 = 3/12,  1/6 = 2/12
3/12 + 2/12 = 5/12`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nenner einfach addieren: 3/7 + 7/3 = 10/10 = 1 → <strong>✅ Richtig:</strong> Gemeinsamen Nenner (kgV) finden: 21</li>
                <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt addieren: (3+7)/(7+3) = 10/10 = 1 → <strong>✅ Richtig:</strong> Nur Zähler addieren, wenn Nenner gleich sind</li>
                <li><strong>❌ Falsch:</strong> Ergebnis nicht auf Kürzbarkeit prüfen → <strong>✅ Richtig:</strong> ggT(58,21) = 1, also ist 58/21 bereits vollständig gekürzt</li>
              </ul>,
              <p>Warum kann man Zähler und Nenner nicht einfach getrennt addieren (3+7 = 10, 7+3 = 10 → 10/10)? Was muss vor der Addition von Brüchen gelten, und warum?</p>,
            ),
            solution: <><Frac n="3" d="7" />{' + '}<Frac n="7" d="3" />{' = '}<Frac n="9" d="21" />{' + '}<Frac n="49" d="21" />{' = '}<Frac n="58" d="21" /></>,
          },
          {
            letter: 'b',
            text: <>{'('}<Frac n="1" d="3" />{' + '}<Frac n="2" d="9" />{') · ('}<Frac n="11" d="8" />{' − '}<Frac n="1" d="4" />{')'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Klammern zuerst</span>: Jeden Klammerausdruck separat auf gemeinsamen Nenner bringen und vereinfachen. Erst danach die beiden Ergebnisse multiplizieren.</p>
                <p>Bruchprodukt: (a/b) · (c/d) = (a·c)/(b·d). Vor der Multiplikation darf man bereits quer kürzen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`1) Linke Klammer:  kgV(3, 9) = 9
   1/3 = 3/9  →  3/9 + 2/9 = 5/9
2) Rechte Klammer: kgV(8, 4) = 8
   1/4 = 2/8  →  11/8 − 2/8 = 9/8
3) Multiplizieren: (5/9) · (9/8)
   Quer kürzen: 9 kürzt sich
   = 5/8`}</pre>
              </>,
              <>
                <p>Beispiel: (1/2 + 1/4) · (3/4 − 1/4)</p>
                <pre className="hint-code-block">{`Linke Klammer:  2/4 + 1/4 = 3/4
Rechte Klammer: 3/4 − 1/4 = 2/4 = 1/2
(3/4) · (1/2) = 3/8`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Alle vier Brüche gleichzeitig auf gemeinsamen Nenner bringen → <strong>✅ Richtig:</strong> Jede Klammer separat vereinfachen, dann erst multiplizieren</li>
                <li><strong>❌ Falsch:</strong> 5·9/(9·8) nicht kürzen → <strong>✅ Richtig:</strong> Die 9 im Zähler (aus 5/9·9/8) kürzt mit der 9 im Nenner: ergibt 5/8</li>
                <li><strong>❌ Falsch:</strong> Klammern sofort ausmultiplizieren → <strong>✅ Richtig:</strong> Erst innerhalb der Klammern vereinfachen, deutlich einfacher</li>
              </ul>,
              <p>Was würde passieren, wenn man sofort ausmultipliziert (vier Terme entstehen)? Käme man zum selben Ergebnis — und warum ist der Klammerweg trotzdem vorzuziehen?</p>,
            ),
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
            hint: h(
              <>
                <p><span className="hint-em">Division durch einen Bruch</span> = Multiplikation mit dem Kehrwert:</p>
                <p>a/b ÷ c/d = a/b · d/c</p>
                <p>Hier gibt es zwei verschachtelte Divisionen — von links nach rechts, eine nach der anderen auflösen.</p>
              </>,
              <>
                <ol>
                  <li>Erste Division auflösen: Schreibe den Divisor als Kehrwert-Produkt</li>
                  <li>Vor dem Ausmultiplizieren: Suche Möglichkeiten zum Querkürzen (Hinweis 13·13=169!)</li>
                  <li>Zweite Division auflösen: Ergebnis aus Schritt 1 durch den äußeren Bruch dividieren</li>
                  <li>Wieder querkürzen und vereinfachen — das Endergebnis ist eine ganze Zahl</li>
                </ol>
              </>,
              <>
                <p>Beispiel: (6 ÷ 2/3) ÷ 1/4</p>
                <pre className="hint-code-block">{`6 ÷ 2/3 = 6 · 3/2 = 9
9 ÷ 1/4 = 9 · 4 = 36`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Kehrwert von 13/2 statt von 169/12 nehmen → <strong>✅ Richtig:</strong> Bei a÷b = a·(1/b) nimmt man den Kehrwert des Divisors (169/12), nicht des Dividenden</li>
                <li><strong>❌ Falsch:</strong> Beide Divisionen gleichzeitig umschreiben → <strong>✅ Richtig:</strong> Von links nach rechts: erst innere Division lösen, dann äußere</li>
                <li><strong>❌ Falsch:</strong> Hinweis 169=13·13 ignorieren → <strong>✅ Richtig:</strong> 13/169 = 13/(13·13) = 1/13 — wichtige Kürzung nicht verpassen</li>
              </ul>,
              <p>Warum gilt a/b ÷ c/d = a/b · d/c? Was bedeutet es, durch den Bruch c/d zu dividieren — und wieso dreht man dafür den Divisor um?</p>,
            ),
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
            hint: h(
              <>
                <p><span className="hint-em">Negativer Exponent</span>: a⁻ⁿ = 1/aⁿ (Kehrwert der positiven Potenz)</p>
                <p>Das Minus im Exponenten ist kein Vorzeichen der Zahl selbst! 5⁻² ist positiv.</p>
              </>,
              <>
                <pre className="hint-code-block">{`1) Regel anwenden: 5⁻² = 1/5² = 1/25
2) Einsetzen: (1/25) · 100
3) Vereinfachen: 100/25 = 4`}</pre>
              </>,
              <>
                <p>Richtige Anwendung:</p>
                <pre className="hint-code-block">{`2⁻³ · 24 = (1/8) · 24 = 3
10⁻² · 500 = (1/100) · 500 = 5`}</pre>
                <p>Kontrast: negativer Exponent ≠ negatives Ergebnis:</p>
                <pre className="hint-code-block">{`5⁻² = 1/25      (positiv — negativer Exponent)
−5²  = −25      (negativ — Vorzeichen vor der Zahl)
(−5)² = 25      (positiv — Basis ist −5)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 5⁻² = −25 (negativer Exponent = negative Zahl) → <strong>✅ Richtig:</strong> 5⁻² = 1/25 (positiv! Der Exponent ist negativ, nicht die Zahl)</li>
                <li><strong>❌ Falsch:</strong> 5⁻² = 1/(−5²) = 1/(−25) → <strong>✅ Richtig:</strong> 5⁻² = 1/5² = 1/25 (Basis bleibt 5, das Minus gehört zum Exponenten)</li>
                <li><strong>❌ Falsch:</strong> (1/25)·100 = 100/25 = 5 → <strong>✅ Richtig:</strong> 100/25 = 4 (25×4=100)</li>
              </ul>,
              <p>Was unterscheidet 5⁻² (negativer Exponent) von −5² (negiertes Ergebnis)? Warum ist 5⁻² eine positive Zahl?</p>,
            ),
            solution: <>{'5⁻² · 100 = ('}<Frac n="1" d="25" />{') · 100 = '}<Frac n="100" d="25" />{' = 4'}</>,
          },
          {
            letter: 'e',
            text: '−2(2x − 4) + x(1 + x) · (−1)',
            hint: h(
              <>
                <p><span className="hint-em">Distributivgesetz</span>: a·(b + c) = a·b + a·c. Jeden Term im Klammerinhalt einzeln mit dem Faktor außen multiplizieren.</p>
                <p>Vorzeichen-Regeln: (−)·(+) = (−) und (−)·(−) = (+).</p>
                <p>Am Ende gleichartige Terme zusammenfassen (gleiche Variable, gleicher Exponent).</p>
              </>,
              <>
                <pre className="hint-code-block">{`1) −2·(2x − 4) = −4x + 8
2) x·(1 + x) = x + x²
3) (x + x²)·(−1) = −x − x²
4) Alles addieren: −4x + 8 + (−x − x²)
5) Zusammenfassen: −x² + (−4x − x) + 8
                 = −x² − 5x + 8`}</pre>
              </>,
              <>
                <p>Beispiel: −3(x − 2) + x·(x + 1)·(−1)</p>
                <pre className="hint-code-block">{`−3(x − 2)       = −3x + 6
x·(x + 1)·(−1) = −x² − x
Ergebnis:        −x² + (−3x − x) + 6 = −x² − 4x + 6`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−2)·(−4) = −8 → <strong>✅ Richtig:</strong> (−)·(−) = (+): −2·(−4) = +8</li>
                <li><strong>❌ Falsch:</strong> x(1+x)·(−1) = x(−1+x) = −x+x² → <strong>✅ Richtig:</strong> (−1) gilt für das gesamte Produkt x(1+x): erst x·(1+x) = x+x², dann ·(−1) = −x−x²</li>
                <li><strong>❌ Falsch:</strong> −4x − x² − x = −5x² → <strong>✅ Richtig:</strong> x und x² sind ungleiche Terme (verschiedene Exponenten), nur −4x und −x können zusammengefasst werden: −5x</li>
              </ul>,
              <p>Was macht zwei Terme zu "gleichartigen Termen", die zusammengefasst werden dürfen? Warum darf man x² und x nicht addieren, obwohl beide x enthalten?</p>,
            ),
            solution: '−2(2x−4) = −4x + 8\nx(1+x)·(−1) = −x − x²\n−4x + 8 − x − x² = −x² − 5x + 8',
          },
          {
            letter: 'f',
            text: '−121ab³ − (11a²b)² · (−2a⁻³b)   (Hinweis: 11 · 11 = 121)',
            hint: h(
              <>
                <p>Wichtige <span className="hint-em">Potenzgesetze</span>:</p>
                <ul>
                  <li>(a·b)ⁿ = aⁿ·bⁿ — Potenz eines Produkts</li>
                  <li>(aᵐ)ⁿ = aᵐⁿ — Potenz einer Potenz: Exponenten multiplizieren</li>
                  <li>aᵐ · aⁿ = aᵐ⁺ⁿ — Produkt gleicher Basis: Exponenten addieren</li>
                  <li>a⁻ⁿ = 1/aⁿ — negativer Exponent als Kehrwert</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`1) Potenz auswerten:
   (11a²b)² = 11² · a⁴ · b² = 121a⁴b²

2) Mit (−2a⁻³b) multiplizieren:
   121a⁴b² · (−2a⁻³b)
   = −242 · a⁴⁺(⁻³) · b²⁺¹
   = −242a¹b³

3) In Gesamtterm einsetzen:
   −121ab³ − (−242ab³)
   = −121ab³ + 242ab³ = 121ab³`}</pre>
              </>,
              <>
                <p>Beispiel: (3x²y)² · (−2x⁻¹y)</p>
                <pre className="hint-code-block">{`(3x²y)² = 9x⁴y²
9x⁴y² · (−2x⁻¹y) = −18 · x⁴⁺(⁻¹) · y²⁺¹ = −18x³y³`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (11a²b)² = 11a⁴b² (11 nicht quadriert) → <strong>✅ Richtig:</strong> (11a²b)² = 11²·a⁴·b² = 121a⁴b²</li>
                <li><strong>❌ Falsch:</strong> a⁴ · a⁻³ = a⁻¹² (Exponenten multipliziert) → <strong>✅ Richtig:</strong> a⁴ · a⁻³ = a⁴⁺⁽⁻³⁾ = a¹ (Exponenten addieren!)</li>
                <li><strong>❌ Falsch:</strong> −(−242ab³) = −242ab³ → <strong>✅ Richtig:</strong> −(−242ab³) = +242ab³ (Minus vor Minus = Plus)</li>
              </ul>,
              <p>Bei welcher Potenzregel addiert man Exponenten (aᵐ·aⁿ), und bei welcher multipliziert man sie ((aᵐ)ⁿ)? Warum der Unterschied — was steht bei einer Regel im Exponent, was bei der anderen?</p>,
            ),
            solution:
              '(11a²b)² = 121a⁴b²\n121a⁴b² · (−2a⁻³b) = −242a⁴⁻³b²⁺¹ = −242ab³\n−121ab³ − (−242ab³) = −121ab³ + 242ab³ = 121ab³',
          },
          {
            letter: 'g',
            text: <>{'−'}<Frac n="a + b" d="c" />{' − '}<Frac n="a − b" d="c" /></>,
            hint: h(
              <>
                <p>Gleichnamige Brüche (gleicher Nenner) werden addiert/subtrahiert, indem die <span className="hint-em">Zähler direkt kombiniert</span> werden: a/c ± b/c = (a ± b)/c.</p>
                <p>Achtung: Ein Minuszeichen <em>vor</em> einem Bruch gilt für den <em>gesamten</em> Zähler!</p>
              </>,
              <>
                <pre className="hint-code-block">{`1) Beide Brüche haben Nenner c → Zähler zusammenfassen
2) [−(a+b) − (a−b)] / c
3) Klammern auflösen:
   −(a+b) = −a − b
   −(a−b) = −a + b
4) Addieren: −a − b − a + b = −2a
5) Ergebnis: −2a/c`}</pre>
              </>,
              <>
                <p>Beispiel: −(x+2)/3 − (x−2)/3</p>
                <pre className="hint-code-block">{`= [−(x+2) − (x−2)] / 3
= [−x − 2 − x + 2] / 3
= −2x / 3`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> −(a+b) = −a+b → <strong>✅ Richtig:</strong> −(a+b) = −a−b (Minus vor Klammer: ALLE Vorzeichen wechseln)</li>
                <li><strong>❌ Falsch:</strong> −(a−b) = −a−b → <strong>✅ Richtig:</strong> −(a−b) = −a+b (das Plus-Minus-Tausch gilt für jeden Term)</li>
                <li><strong>❌ Falsch:</strong> Auch den Nenner zusammenfassen: −(a+b)−(a−b) / 2c → <strong>✅ Richtig:</strong> Nenner bleibt unverändert = c, nur Zähler kombinieren</li>
              </ul>,
              <p>Was bedeutet ein Minuszeichen vor einer Klammer? Warum ändert es das Vorzeichen ALLER Terme in der Klammer — und nicht nur des ersten?</p>,
            ),
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
            hint: h(
              <>
                <p><span className="hint-em">Ausklammern von −1</span>: Einen Faktor f aus einem Ausdruck ausklammern bedeutet: Ausdruck = f · (Ausdruck / f). Schreibt man (−1) vor eine Klammer, so kehrt sich <em>jedes Vorzeichen</em> aller Terme innerhalb der Klammer um.</p>
                <p>Formal: −1 · (T₁ + T₂ − T₃) = −T₁ − T₂ + T₃. Der Wert des Gesamtausdrucks bleibt dabei unverändert.</p>
                <p>Zusätzlich: b(a−b) kann umgeschrieben werden als −b(b−a), weil a−b = −(b−a).</p>
              </>,
              <>
                <pre className="hint-code-block">{`Ziel: −1 · (...) = b(a−b) + b − a
Also: (...) = −[b(a−b) + b − a]
           = −b(a−b) − b + a      ← alle Vorzeichen wechseln
           = b(b−a) − b + a       ← a−b = −(b−a) anwenden

Ergebnis: −1 · (b(b−a) − b + a)`}</pre>
              </>,
              <>
                <p>Beispiel: −1 aus 3x − 2 ausklammern</p>
                <pre className="hint-code-block">{`3x − 2 = −1 · (−3x + 2)
Probe: −1 · (−3x + 2) = 3x − 2 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur erstem Term Vorzeichen wechseln: −1·(b(a−b)+b−a) = −b(a−b)+b−a → <strong>✅ Richtig:</strong> ALLE Terme wechseln: −b(a−b)−b+a</li>
                <li><strong>❌ Falsch:</strong> b(a−b)·(−1) = −b·(−a+b) = ab−b² (Klammer falsch ausmultipliziert) → <strong>✅ Richtig:</strong> −b(a−b) = −b·a + b·b = −ab+b² = b(b−a)</li>
              </ul>,
              <p>Warum bleibt der Wert des Ausdrucks gleich, wenn man (−1) ausklammert? Was ist der mathematische Zweck dieser Umformung — in welchen Situationen braucht man sie?</p>,
            ),
            solution:
              'b(a−b) + b − a\n= (−1) · (−b(a−b) − b + a)\n= (−1) · (b(b−a) − b + a)',
          },
          {
            letter: 'b',
            text: 'Klammere a − b aus.',
            hint: h(
              <>
                <p>Um (a−b) auszuklammern, müssen alle Terme des Ausdrucks als Vielfache von (a−b) darstellbar sein.</p>
                <p>Schlüsselumformung: <span className="hint-em">b − a = −1 · (a − b)</span></p>
              </>,
              <>
                <pre className="hint-code-block">{`b(a−b) + b − a
= b(a−b) + (−1)·(a−b)     ← b−a = −(a−b)
= (a−b) · (b − 1)          ← (a−b) ausklammern`}</pre>
              </>,
              <>
                <p>Vergleichsbeispiel: x² − x ausklammern</p>
                <pre className="hint-code-block">{`x² − x = x·x − x·1 = x·(x − 1)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> b−a = a−b (Vorzeichen ignoriert) → <strong>✅ Richtig:</strong> b−a = −(a−b) (Subtraktionsreihenfolge zählt!)</li>
                <li><strong>❌ Falsch:</strong> Restfaktor nach Ausklammern ist (b+1) → <strong>✅ Richtig:</strong> b(a−b) ÷ (a−b) = b und (−(a−b)) ÷ (a−b) = −1 → Restfaktor = (b−1)</li>
              </ul>,
              <p>Ohne vollständig zu rechnen: Welche Terme im Ausdruck b(a−b)+b−a deuten darauf hin, dass (a−b) ein Faktor sein könnte? Was verrät dir der erste Term?</p>,
            ),
            solution:
              'b(a−b) + b − a\n= b(a−b) − (a−b)\n= (a−b) · (b − 1)',
          },
          {
            letter: 'c',
            text: 'Klammere b − a aus.',
            hint: h(
              <>
                <p>Schlüsselumformung: <span className="hint-em">a − b = −1 · (b − a)</span></p>
                <p>So lässt sich b(a−b) zu −b(b−a) umschreiben, und dann ist (b−a) der gemeinsame Faktor.</p>
              </>,
              <>
                <pre className="hint-code-block">{`b(a−b) + b − a
= b · (−(b−a)) + (b−a)    ← a−b = −(b−a)
= −b(b−a) + 1·(b−a)
= (b−a) · (−b + 1)         ← (b−a) ausklammern`}</pre>
              </>,
              <>
                <p>Vergleich mit Teilaufgabe (b): Beide Ergebnisse beschreiben denselben Ausdruck, nur mit anderem ausgeklammertem Faktor.</p>
                <pre className="hint-code-block">{`(a−b)(b−1) = −(b−a)·(b−1) = (b−a)·(−b+1) ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a−b = b−a → <strong>✅ Richtig:</strong> a−b = −(b−a), daher b(a−b) = −b(b−a)</li>
                <li><strong>❌ Falsch:</strong> Restfaktor (1+b) oder (−b+0) → <strong>✅ Richtig:</strong> −b(b−a) ÷ (b−a) = −b und (b−a) ÷ (b−a) = 1 → Restfaktor = (−b+1) = (1−b)</li>
              </ul>,
              <p>Was ist der Unterschied zwischen (a−b) und (b−a) als ausgelämmertem Faktor? In welcher Situation würde man (b−a) gegenüber (a−b) bevorzugen?</p>,
            ),
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
            hint: h(
              <>
                <p><span className="hint-em">Kürzen von Brüchen</span>: Ein Bruch a/b kann gekürzt werden, indem man Zähler und Nenner durch denselben Faktor (≠ 0) dividiert. Ist Zähler = Nenner, so ist das Ergebnis genau <span className="hint-em">1</span>.</p>
                <p>Formel: x/x = 1 für jeden Ausdruck x ≠ 0. Hier ist x = (a−b), daher gilt (a−b)/(a−b) = 1, solange a ≠ b (d. h. Nenner ≠ 0).</p>
                <p>Wichtig: Der Bruch (a−b)/(a−b) ist als <em>Ganzes</em> zu sehen — nicht Zähler und Nenner getrennt vereinfachen!</p>
              </>,
              <pre className="hint-code-block">{`Zähler = a−b, Nenner = a−b → identisch → Quotient = 1
(a−b)/(a−b) = 1  (gültig solange a ≠ b)`}</pre>,
              <>
                <p>Beispiel 1: Numerisch</p>
                <pre className="hint-code-block">{`(5 − 2) / (5 − 2) = 3/3 = 1 ✓`}</pre>
                <p>Beispiel 2: Allgemein mit komplizierterer Funktion</p>
                <pre className="hint-code-block">{`(x² + 3x) / (x² + 3x) = 1  (für x ≠ 0 und x ≠ −3)
(sin x) / (sin x) = 1       (für sin x ≠ 0, d.h. x ≠ kπ)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a/a − b/b = 1 − 1 = 0 → <strong>✅ Richtig:</strong> (a−b) als Ganzes betrachten: (a−b)/(a−b) = 1</li>
                <li><strong>❌ Falsch:</strong> Kürzen ist für alle a, b erlaubt → <strong>✅ Richtig:</strong> Nur wenn der Nenner ≠ 0 ist, hier also a ≠ b</li>
              </ul>,
              <p>Warum gilt x/x = 1 für alle x ≠ 0? Was wäre das Ergebnis, wenn man denselben Bruch in einer Gleichung kürzt — und warum ist die Bedingung x ≠ 0 mathematisch unerlässlich?</p>,
            ),
            solution: <><Frac n="a−b" d="a−b" />{' = 1'}</>,
          },
          {
            letter: 'b',
            text: <Frac n="a − b" d="b − a" />,
            hint: h(
              <>
                <p><span className="hint-em">Vorzeichen beim Kürzen</span>: Die Ausdrücke (a−b) und (b−a) sind nicht gleich, sondern entgegengesetzt:</p>
                <p><code>b − a = −1 · (a − b)</code></p>
                <p>Steht im Nenner das „umgedrehte" Vorzeichen, gibt es nach dem Kürzen ein Vorzeichen-Ergebnis von −1. Dieser Trick ist sehr häufig beim Kürzen nötig!</p>
              </>,
              <pre className="hint-code-block">{`b − a = −1 · (a − b)

(a−b) / (b−a)
= (a−b) / (−1 · (a−b))    ← b−a umschreiben
= 1 / (−1)                  ← (a−b) kürzt sich heraus
= −1`}</pre>,
              <>
                <p>Beispiel 1:</p>
                <pre className="hint-code-block">{`(x−5) / (5−x):
  5−x = −(x−5)
  → (x−5) / (−(x−5)) = −1`}</pre>
                <p>Beispiel 2:</p>
                <pre className="hint-code-block">{`(2k−3) / (3−2k):
  3−2k = −(2k−3)
  → (2k−3) / (−(2k−3)) = −1`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (a−b)/(b−a) = 1 (Vorzeichen ignoriert) → <strong>✅ Richtig:</strong> (a−b)/(b−a) = −1</li>
                <li><strong>❌ Falsch:</strong> b−a = a−b → <strong>✅ Richtig:</strong> b−a = −(a−b) (Reihenfolge der Subtraktion zählt!)</li>
              </ul>,
              <p>Warum ergibt (a−b)/(b−a) = −1 und nicht +1? Was verändert die Umkehrung der Subtraktionsreihenfolge mathematisch — und wie hilft der Schritt b−a = −(a−b)?</p>,
            ),
            solution: <><Frac n="a−b" d="b−a" />{' = '}<Frac n="a−b" d="−(a−b)" />{' = −1'}</>,
          },
          {
            letter: 'c',
            text: <Frac n="a² + b²" d="a + b" />,
            hint: h(
              <>
                <p>Kürzen ist <span className="hint-em">nur mit gemeinsamen Faktoren möglich</span>, nicht mit einzelnen Summanden.</p>
                <p>a² + b² lässt sich über ℝ nicht als Produkt mit (a+b) schreiben — daher ist kein Kürzen möglich.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Versuch Zähler zu faktorisieren:
a² + b² = ?
→ Keine Zerlegung als k · (a+b) möglich
→ Nicht kürzbar`}</pre>
              </>,
              <>
                <p>Vergleich: a²−b² lässt sich faktorisieren (3. binomische Formel), a²+b² nicht.</p>
                <pre className="hint-code-block">{`a² − b² = (a+b)(a−b)  → kürzt mit (a+b)
a² + b² = ?           → kein Faktor (a+b)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a²/a + b²/b = a+b (Summanden einzeln kürzen) → <strong>✅ Richtig:</strong> In einem Bruch darf man nur mit einem Faktor vor der ganzen Summe kürzen</li>
                <li><strong>❌ Falsch:</strong> a²+b² = (a+b)² (mit dem Quadrat der Summe verwechselt) → <strong>✅ Richtig:</strong> (a+b)² = a²+2ab+b² ≠ a²+b²</li>
                <li><strong>❌ Falsch:</strong> a²+b² mit a²−b² verwechseln → <strong>✅ Richtig:</strong> Nur a²−b² = (a+b)(a−b) faktorisierbar (3. binomische Formel); a²+b² hat keine reelle Faktorzerlegung</li>
              </ul>,
              <p>Warum lässt sich a²−b² faktorisieren (3. binomische Formel), aber a²+b² nicht? Was ist der entscheidende Unterschied — und was müsste im Zähler stehen, damit Kürzen mit (a+b) möglich wäre?</p>,
            ),
            solution: 'Nicht weiter kürzbar – Zähler und Nenner haben keine gemeinsamen Faktoren.',
          },
          {
            letter: 'd',
            text: <Frac n="a² − b²" d="a − b" />,
            hint: h(
              <>
                <p><span className="hint-em">3. Binomische Formel</span>: a² − b² = (a+b)·(a−b)</p>
                <p>Zähler faktorisieren, dann den gemeinsamen Faktor (a−b) kürzen.</p>
              </>,
              <pre className="hint-code-block">{`1) Zähler faktorisieren: a²−b² = (a+b)(a−b)
2) Einsetzen: (a+b)(a−b) / (a−b)
3) (a−b) kürzen: = a+b`}</pre>,
              <>
                <p>Beispiel: (x²−9)/(x−3)</p>
                <pre className="hint-code-block">{`x² − 9 = (x+3)(x−3)
(x+3)(x−3) / (x−3) = x+3`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a²+b² = (a+b)(a−b) (Plus statt Minus im Zähler) → <strong>✅ Richtig:</strong> Nur a²−b² = (a+b)(a−b), das Minuszeichen im Zähler ist entscheidend</li>
                <li><strong>❌ Falsch:</strong> a²−b² = (a−b)² = a²−2ab+b² → <strong>✅ Richtig:</strong> a²−b² = (a+b)(a−b), das ist die 3. binomische Formel, nicht die 2.</li>
              </ul>,
              <p>Welche Form muss ein Zählerausdruck haben, damit er sich mit dem Nenner (a−b) kürzen lässt? Und welche bekannte Formel liefert genau diese Faktorisierung für a²−b²?</p>,
            ),
            solution: <><Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)(a−b)" d="a−b" />{' = a+b'}</>,
          },
          {
            letter: 'e',
            text: <Frac n="2a + 3b" d="2c + 3d" />,
            hint: h(
              <>
                <p><span className="hint-em">Kürzen ist nur bei Produkten erlaubt</span>, nicht bei Summen. Das Grundprinzip: (k·u)/(k·v) = u/v — man kann nur dann mit k kürzen, wenn k ein gemeinsamer Faktor des gesamten Zählers und gesamten Nenners ist.</p>
                <p>Bei (2a+3b)/(2c+3d) stehen im Zähler zwei verschiedene Terme (2a und 3b) — die lassen sich nicht als k·u schreiben. Gleiches gilt für den Nenner.</p>
                <p>Merke: Kürzen in Brüchen bedeutet <em>Teilen durch einen Faktor</em>, nie <em>Addieren von Termen</em>.</p>
              </>,
              <pre className="hint-code-block">{`Suche gemeinsamen Faktor k mit: Zähler = k · (etwas), Nenner = k · (etwas)
  Zähler = 2a + 3b → kein k extrahierbar (a und b unabhängig)
  Nenner = 2c + 3d → kein k extrahierbar
→ Kein gemeinsamer Faktor → nicht kürzbar`}</pre>,
              <>
                <p>Beispiel das kürzt (zum Vergleich): (2a+4b)/(2c+6d)</p>
                <pre className="hint-code-block">{`= 2(a+2b) / 2(c+3d)    ← Faktor 2 vor der GANZEN Summe
= (a+2b) / (c+3d)       ← erst dann kürzen möglich`}</pre>
                <p>Beispiel das NICHT kürzt: (2a+3b)/(2c+3d)</p>
                <pre className="hint-code-block">{`Kein gemeinsamer Faktor vorhanden → kann nicht vereinfacht werden`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> „2a/2c kürzen und 3b/3d kürzen" (Terme getrennt kürzen) → <strong>✅ Richtig:</strong> Kürzen nur mit gemeinsamem Faktor vor der gesamten Summe</li>
                <li><strong>❌ Falsch:</strong> (2a+3b)/(2c+3d) = a/c + b/d → <strong>✅ Richtig:</strong> Nicht kürzbar</li>
              </ul>,
              <p>Was ist der Unterschied zwischen Kürzen durch einen gemeinsamen Faktor (erlaubt) und Kürzen einzelner Summanden (verboten)? Formuliere als Merkregel: Wann darf man kürzen?</p>,
            ),
            solution: 'Nicht weiter kürzbar – keine gemeinsamen Faktoren.',
          },
          {
            letter: 'f',
            text: <Frac n="k² + k³" d="k²" />,
            hint: h(
              <>
                <p><span className="hint-em">Ausklammern und Kürzen</span>: Um diesen Bruch zu vereinfachen, klammert man aus dem Zähler den größten gemeinsamen Faktor (ggT) aus. Damit erscheint der Nenner als Faktor im Zähler, der dann gekürzt werden kann.</p>
                <p>Potenzkegel für Kürzen: aᵐ / aⁿ = aᵐ⁻ⁿ — Exponenten werden subtrahiert, nicht dividiert. Insbesondere: aⁿ / aⁿ = a⁰ = 1.</p>
              </>,
              <pre className="hint-code-block">{`1) ggT von k² und k³ bestimmen → k²
2) Zähler faktorisieren: k² + k³ = k²·(1 + k)
3) Einsetzen: k²·(1+k) / k²
4) k² kürzen (k²/k² = 1): = 1 + k`}</pre>,
              <>
                <p>Beispiel 1: (x³ + x⁵) / x³</p>
                <pre className="hint-code-block">{`= x³(1 + x²) / x³
= 1 + x²`}</pre>
                <p>Beispiel 2: (2a³ + 4a⁵) / (2a²)</p>
                <pre className="hint-code-block">{`Zähler: 2a³ + 4a⁵ = 2a³(1 + 2a²)
= 2a³(1+2a²) / (2a²)
= a(1+2a²)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> k³/k² = k² (Exponenten multipliziert) → <strong>✅ Richtig:</strong> k³/k² = k³⁻² = k¹ = k (Exponenten subtrahieren!)</li>
                <li><strong>❌ Falsch:</strong> k²/k² = 0 → <strong>✅ Richtig:</strong> k²/k² = 1 (gleiche Potenzen dividiert geben 1)</li>
                <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt kürzen → <strong>✅ Richtig:</strong> Erst ausklammern, dann Kürzen als Gesamtfaktor</li>
              </ul>,
              <p>Warum darf man k² aus k²+k³ ausklammern, obwohl k² ein Summand ist — und wie ist das mit dem anschließenden Kürzen verbunden? Was ist der Zusammenhang zwischen Ausklammern und Faktorisieren?</p>,
            ),
            solution: <><Frac n="k²+k³" d="k²" />{' = '}<Frac n="k²(1+k)" d="k²" />{' = 1+k'}</>,
          },
          {
            letter: 'g',
            text: <Frac n="2k²" d="4k² + 6k³" />,
            hint: h(
              <>
                <p><span className="hint-em">Ausklammern im Nenner</span>: Man sucht den ggT aller Terme im Nenner und schreibt ihn als gemeinsamen Faktor. Danach erscheint derselbe Faktor im Zähler und kann gekürzt werden.</p>
                <p>Technik: Erst Zahlen (numerischer ggT), dann Potenzen (minimaler Exponent) als gemeinsamen Faktor bestimmen. Hier: ggT(4,6) = 2 und ggT(k², k³) = k².</p>
              </>,
              <pre className="hint-code-block">{`1) Nenner: 4k² + 6k³
   ggT(4,6) = 2, ggT(k²,k³) = k²
   → 4k² + 6k³ = 2k²(2 + 3k)
2) Einsetzen: 2k² / [2k²(2 + 3k)]
3) 2k² kürzen (Zähler = Nennerterm): = 1/(2 + 3k)`}</pre>,
              <>
                <p>Beispiel 1: 3x / (6x + 9x²)</p>
                <pre className="hint-code-block">{`ggT(6,9) = 3, ggT(x,x²) = x
6x + 9x² = 3x(2 + 3x)
3x / [3x(2+3x)] = 1/(2+3x)`}</pre>
                <p>Beispiel 2: 5a² / (10a² + 15a³)</p>
                <pre className="hint-code-block">{`10a² + 15a³ = 5a²(2 + 3a)
5a² / [5a²(2+3a)] = 1/(2+3a)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur Zahl kürzen: 2k²/4k² = 1/2 (ohne den k³-Term zu beachten) → <strong>✅ Richtig:</strong> Zuerst vollständig ausklammern, dann kürzen</li>
                <li><strong>❌ Falsch:</strong> ggT(4,6) = 4 → <strong>✅ Richtig:</strong> ggT(4,6) = 2 (kleinster gemeinsamer Teiler)</li>
                <li><strong>❌ Falsch:</strong> ggT(k², k³) = k³ → <strong>✅ Richtig:</strong> ggT(k², k³) = k² (kleinste Potenz)</li>
              </ul>,
              <p>Warum muss man den Nenner erst ausklammern, bevor man kürzen kann? Was wäre falsch, wenn man bei 2k²/(4k²+6k³) einfach versucht, direkt 2k² zu kürzen, ohne 4k²+6k³ zu faktorisieren?</p>,
            ),
            solution: <><Frac n="2k²" d="4k²+6k³" />{' = '}<Frac n="2k²" d="2k²(2+3k)" />{' = '}<Frac n="1" d="2+3k" /></>,
          },
          {
            letter: 'h',
            text: <Frac n="1 + k²" d="1 + k³" />,
            hint: h(
              <>
                <p>Für das Kürzen muss ein <span className="hint-em">gemeinsamer Faktor</span> existieren. 1+k³ lässt sich zwar faktorisieren, aber der entstehende Faktor ist kein Faktor von 1+k².</p>
              </>,
              <pre className="hint-code-block">{`Zähler: 1 + k² → keine einfache Faktorisierung
Nenner: 1 + k³ = (1+k)(1 − k + k²)
Kein gemeinsamer Faktor mit (1+k²)
→ Nicht kürzbar`}</pre>,
              <>
                <p>Kein gemeinsamer Faktor — kein Kürzen:</p>
                <pre className="hint-code-block">{`1+k³ = (1+k)(1−k+k²)
Faktor (1+k)    ≠  (1+k²)  → kein Match
Faktor (1−k+k²) ≠  (1+k²)  → kein Match`}</pre>
                <p>Kontrast: Wenn der Zähler 1+k wäre, würde es kürzen:</p>
                <pre className="hint-code-block">{`(1+k) / (1+k³) = (1+k) / ((1+k)(1−k+k²)) = 1/(1−k+k²)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> k²/(k³) kürzen im Nenner: 1/k² + 1/k³ = ... → <strong>✅ Richtig:</strong> 1+k³ ist eine Summe, kein Produkt — Terme einer Summe können nicht einzeln aus dem Bruch herausgekürzt werden</li>
                <li><strong>❌ Falsch:</strong> 1+k² faktorisieren als k(1/k+k) → <strong>✅ Richtig:</strong> 1+k² hat keinen einfachen Faktor — überprüfe Probe: k=1: (1+1)/(1+1)=1; k=2: 5/9 — kein ganzzahliges Ergebnis → nicht kürzbar</li>
              </ul>,
              <p>Warum hilft die Faktorisierung 1+k³ = (1+k)(1−k+k²)? Und warum scheitert das Kürzen trotzdem — welchen Faktor müsste der Zähler (1+k²) dafür enthalten?</p>,
            ),
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
            hint: h(
              <>
                <p><span className="hint-em">Produktregel für Wurzeln</span>: √a · √b = √(a·b) für a, b ≥ 0.</p>
                <p>Diese Regel gilt nur für Produkte, nicht für Summen! (√a + √b ≠ √(a+b))</p>
              </>,
              <pre className="hint-code-block">{`1) Unter eine gemeinsame Wurzel bringen:
   √2 · √32 = √(2 · 32) = √64
2) Wurzel ausrechnen: √64 = 8  (da 8² = 64)`}</pre>,
              <>
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`√3 · √12 = √36 = 6
√5 · √20 = √100 = 10
√8 · √2  = √16  = 4`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> √2 · √32 = √(2+32) = √34 (addiert statt multipliziert) → <strong>✅ Richtig:</strong> √2 · √32 = √(2·32) = √64 = 8</li>
                <li><strong>❌ Falsch:</strong> √64 = 32 (halbiert statt Wurzel gezogen) → <strong>✅ Richtig:</strong> √64 = 8, weil 8² = 64</li>
                <li><strong>❌ Falsch:</strong> √a + √b = √(a+b) (Additionsregel) → <strong>✅ Richtig:</strong> Diese Regel gilt NICHT — nur Produktregel gilt: √a · √b = √(ab)</li>
              </ul>,
              <p>Warum gilt √a · √b = √(ab), aber √a + √b ≠ √(a+b)? Was macht die Produktregel "legal" — und was würde man brauchen, damit eine Summenregel auch gelten würde?</p>,
            ),
            solution: '√2 · √32 = √(2·32) = √64 = 8',
          },
          {
            letter: 'b',
            text: 'Gilt √(a + b) = √a + √b für beliebige a, b ≥ 0?',
            hint: h(
              <>
                <p>Um eine <span className="hint-em">allgemeine Aussage zu widerlegen</span>, genügt ein einziges Gegenbeispiel. Es reicht zu zeigen, dass die Gleichung für eine konkrete Wahl von a und b nicht gilt.</p>
                <p>Wähle Zahlen, deren Wurzeln du kennst (perfekte Quadrate wie 1, 4, 9, 16, 25...).</p>
              </>,
              <pre className="hint-code-block">{`Wähle a=9, b=16:
  Linke Seite:  √(9+16) = √25 = 5
  Rechte Seite: √9 + √16 = 3 + 4 = 7
  5 ≠ 7  →  Aussage ist FALSCH`}</pre>,
              <>
                <p>Warum gilt die Regel nicht? Anschaulich:</p>
                <pre className="hint-code-block">{`(√a + √b)² = a + 2·√a·√b + b ≠ a + b
→ √a + √b ≠ √(a+b)  im Allgemeinen`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Ein Beispiel das stimmt (a=0, b=0: √0 = 0+0 ✓) als Beweis nehmen → <strong>✅ Richtig:</strong> Ein Beispiel beweist nicht die Allgemeingültigkeit; man braucht ein Gegenbeispiel zum Widerlegen</li>
                <li><strong>❌ Falsch:</strong> Viele Gegenbeispiele suchen → <strong>✅ Richtig:</strong> Ein einziges Gegenbeispiel reicht zum Widerlegen einer Allaussage</li>
              </ul>,
              <p>Warum reicht zum Widerlegen einer Allaussage ein einziges Gegenbeispiel? Und warum wäre a=0, b=0 als Gegenbeispiel ungeeignet — obwohl 0 = 0 gilt?</p>,
            ),
            solution:
              'Nein – nicht allgemein gültig.\nGegenbeispiel a=9, b=16:\n√(9+16) = √25 = 5\n√9 + √16 = 3 + 4 = 7\n5 ≠ 7',
          },
          {
            letter: 'c',
            text: <>{'Mache die Nenner von '}<Frac n="1" d="√5" />{' und '}<Frac n="1" d="√3 + √5" />{' jeweils rational.'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Rationalmachen</span> bedeutet, Wurzeln aus dem Nenner zu entfernen — durch Erweitern mit einem passenden Ausdruck:</p>
                <ul>
                  <li>Nenner = √k: Erweitern mit √k/√k (dann steht k im Nenner)</li>
                  <li>Nenner = √a + √b: Erweitern mit dem Konjugat (√a − √b)/(√a − √b), dann gilt (√a+√b)(√a−√b) = a − b</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`Für 1/√5:
  · (√5/√5) = √5 / (√5·√5) = √5 / 5

Für 1/(√3+√5):
  · (√3−√5)/(√3−√5)
  = (√3−√5) / ((√3)²−(√5)²)
  = (√3−√5) / (3−5)
  = (√3−√5) / (−2)`}</pre>
              </>,
              <>
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`1/√7 = √7/7

1/(√2+√3):
  · (√2−√3)/(√2−√3) = (√2−√3)/(2−3) = (√2−√3)/(−1) = √3−√2`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Mit (√3+√5) statt (√3−√5) erweitern → <strong>✅ Richtig:</strong> Das Konjugat ist der Ausdruck mit umgekehrtem Vorzeichen: Nenner √3+√5 → Konjugat √3−√5</li>
                <li><strong>❌ Falsch:</strong> (√3+√5)·(√3−√5) = √3·√3 − √5·√5 = 3−5 = −2 falsch berechnet → <strong>✅ Richtig:</strong> (a+b)(a−b) = a²−b², also (√3+√5)(√3−√5) = (√3)²−(√5)² = 3−5 = −2 ✓</li>
                <li><strong>❌ Falsch:</strong> 1/√5 · √5/√5 = 1/(√5·√5) = 1/5 (Fehler: Zähler vergessen) → <strong>✅ Richtig:</strong> 1/√5 · √5/√5 = √5/(√5·√5) = √5/5</li>
              </ul>,
              <p>Warum lässt sich der Nenner √3+√5 durch Multiplizieren mit dem Konjugat √3−√5 "rationalisieren"? Was steckt hinter dem Trick — welche algebraische Formel macht das möglich?</p>,
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
            hint: h(
              <>
                <p>Eine lineare Gleichung hat die Form <span className="hint-em">y = mx + b</span>:</p>
                <ul>
                  <li>m = Steigung (wie steil die Gerade ist)</li>
                  <li>b = y-Achsenabschnitt (wo die Gerade die y-Achse schneidet)</li>
                </ul>
                <p>Für y = x gilt: m = 1, b = 0.</p>
              </>,
              <pre className="hint-code-block">{`1) y-Achsenabschnitt ablesen: b=0 → Punkt (0, 0)
2) Steigung interpretieren: m=1 → 1 rechts, 1 hoch → Punkt (1, 1)
3) Gerade durch beide Punkte zeichnen und verlängern`}</pre>,
              <>
                <p>Beispiel: y = 2x + 1</p>
                <pre className="hint-code-block">{`b=1 → Startpunkt (0, 1)
m=2 → 1 rechts, 2 hoch → (1, 3)
Gerade einzeichnen`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> m=0, b=1 (m und b vertauscht) → <strong>✅ Richtig:</strong> In y = mx + b ist m der Koeffizient vor x (Steigung) und b der konstanteTerm (y-Achsenabschnitt); hier m=1, b=0</li>
                <li><strong>❌ Falsch:</strong> Steigung m=1 als „bei x=0 beginnt die Gerade" missverstehen → <strong>✅ Richtig:</strong> m=1 bedeutet: pro 1 Schritt nach rechts → 1 Schritt nach oben</li>
              </ul>,
              <p>Was bedeutet Steigung m=1 geometrisch? Wie würde die Gerade aussehen, wenn m=2 (steiler) oder m=0,5 (flacher) wäre — und wo genau liegt der Unterschied zur Ursprungsgerade y=x?</p>,
            ),
            solution: 'Gerade durch den Ursprung mit Steigung 1 (45°-Winkel nach rechts oben).',
            graph: {
              lines: [{ m: 1, b: 0, label: 'y = x' }],
              xMin: -3, xMax: 3, yMin: -3, yMax: 3,
            },
          },
          {
            letter: 'b',
            text: 'Skizziere y = −2x + 1.',
            hint: h(
              <>
                <p>Negative Steigung m &lt; 0: die Gerade <span className="hint-em">fällt</span> von links nach rechts. |m| = 2 bedeutet: pro 1 Einheit nach rechts, 2 Einheiten nach unten.</p>
              </>,
              <pre className="hint-code-block">{`1) b=1 → Startpunkt (0, 1)
2) m=−2: 1 rechts, 2 runter → Punkt (1, −1)
3) Gerade durch beide Punkte zeichnen
4) Verlängern: nach links steigt sie (−1, 3), nach rechts fällt sie`}</pre>,
              <>
                <p>Beispiel: y = −x + 3</p>
                <pre className="hint-code-block">{`(0,3) → (1,2) → (2,1) → (3,0)
Nullstelle bei x = 3`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Negative Steigung als aufsteigende Gerade zeichnen → <strong>✅ Richtig:</strong> m=−2 bedeutet: 1 rechts → 2 runter (fallende Gerade)</li>
                <li><strong>❌ Falsch:</strong> b=1 vergessen und Gerade durch Ursprung (0,0) zeichnen → <strong>✅ Richtig:</strong> b=1 ist der y-Achsenabschnitt: Startpunkt ist (0, 1), nicht (0, 0)</li>
              </ul>,
              <p>Was verändert ein negatives m an der Richtung der Gerade? Und wie beeinflusst |m| = 2 die Steilheit im Vergleich zu m=1 oder m=−½?</p>,
            ),
            solution: <>'Gerade fällt steil nach rechts. Nullstelle bei x = '<Frac n="1" d="2" />{'.'}</>,
            graph: {
              lines: [{ m: -2, b: 1, label: 'y = −2x + 1' }],
              xMin: -1, xMax: 2, yMin: -2, yMax: 4,
            },
          },
          {
            letter: 'c',
            text: <>{'Skizziere y = ('}<Frac n="1" d="2" />{')x − 2.'}</>,
            hint: h(
              <>
                <p>Gebrochene Steigung m = 1/2: Praktischer als „halber Schritt" ist die Interpretation <span className="hint-em">2 Einheiten rechts, 1 Einheit hoch</span>. So bekommst du ganze Gitterpunkte.</p>
              </>,
              <pre className="hint-code-block">{`1) b=−2 → Startpunkt (0, −2)
2) m=1/2: 2 rechts, 1 hoch → Punkt (2, −1)
   nochmal: (4, 0)
3) Gerade durch die Punkte zeichnen`}</pre>,
              <>
                <p>Beispiel: y = (1/3)x + 1</p>
                <pre className="hint-code-block">{`b=1 → (0, 1)
3 rechts, 1 hoch → (3, 2) → (6, 3)
Flache, steigende Gerade`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> m=1/2 als 0,5 rechts und 0,5 hoch → <strong>✅ Richtig:</strong> Für ganzzahlige Gitterpunkte: 2 rechts und 1 hoch (Zähler = hoch, Nenner = rechts)</li>
                <li><strong>❌ Falsch:</strong> y-Achsenabschnitt = +2 → <strong>✅ Richtig:</strong> b=−2: bei x=0 gilt y = (1/2)·0 − 2 = −2, also Startpunkt (0, −2)</li>
              </ul>,
              <p>Wie hilft es, die gebrochene Steigung m=½ als "2 rechts, 1 hoch" umzudeuten? Was wäre der Nachteil, wenn man stattdessen "0,5 rechts, 0,5 hoch" zeichnen würde?</p>,
            ),
            solution: 'Gerade steigt flach nach rechts. Nullstelle bei x = 4.',
            graph: {
              lines: [{ m: 0.5, b: -2, label: 'y = x/2 − 2' }],
              xMin: -1, xMax: 5, yMin: -3, yMax: 1,
            },
          },
          {
            letter: 'd',
            text: 'Skizziere y = 4.',
            hint: h(
              <>
                <p>Eine <span className="hint-em">konstante Funktion</span> y = c hat Steigung m = 0. Die Gerade verläuft waagerecht, parallel zur x-Achse, bei der Höhe y = c.</p>
                <p>In der Form y = mx + b steckt für y = 4: m = 0, b = 4. Steigung 0 bedeutet "kein Anstieg", egal welches x man wählt — der y-Wert bleibt immer gleich.</p>
                <p>Wichtig: y = 4 (horizontal) ist etwas anderes als x = 4 (vertikal — keine Funktion!).</p>
              </>,
              <pre className="hint-code-block">{`1) y = 4 für jedes x → zwei beliebige Punkte: (0,4) und (3,4)
2) Waagerechte Linie bei Höhe y = 4 einzeichnen`}</pre>,
              <>
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`y = −2  → waagerechte Linie bei y = −2
y = 0   → die x-Achse selbst`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Vertikale Linie bei x=4 zeichnen → <strong>✅ Richtig:</strong> y=4 ist eine horizontale Linie (parallel zur x-Achse); x=4 wäre eine senkrechte Linie</li>
                <li><strong>❌ Falsch:</strong> Nur den Punkt (0,4) markieren → <strong>✅ Richtig:</strong> Eine Gerade durch alle Punkte mit y=4 zeichnen: (−3,4), (0,4), (2,4), usw.</li>
              </ul>,
              <p>Welche Steigung hat y=4 — und was bedeutet das für die Richtung der Geraden? Warum ist der Graph eine waagerechte Linie und keine fallende oder steigende?</p>,
            ),
            solution: 'Waagerechte Linie bei y = 4, parallel zur x-Achse.',
            graph: {
              lines: [{ m: 0, b: 4, label: 'y = 4' }],
              xMin: -4, xMax: 4, yMin: 0, yMax: 5,
            },
          },
          {
            letter: 'e',
            text: 'Bestimme den Schnittpunkt der Geraden aus (b) und (c).',
            hint: h(
              <>
                <p>Am <span className="hint-em">Schnittpunkt</span> haben beide Geraden denselben x- und y-Wert. Daher setzt man die rechten Seiten der beiden Geradengleichungen gleich und löst nach x auf.</p>
                <p>Wenn zwei Geraden parallel sind (gleiche Steigung), haben sie keinen Schnittpunkt — das Gleichungssystem hat keine Lösung. Wenn sie identisch sind, sind alle Punkte Schnittpunkte (unendlich viele Lösungen).</p>
              </>,
              <>
                <ol>
                  <li>Setze die rechten Seiten der beiden Geradengleichungen gleich</li>
                  <li>Brüche eliminieren: multipliziere die Gleichung mit dem Nenner-kgV</li>
                  <li>x-Terme auf eine Seite, Konstanten auf die andere Seite bringen</li>
                  <li>x berechnen</li>
                  <li>x in eine der beiden Geraden einsetzen, um y zu berechnen</li>
                  <li>Probe: Schnittpunkt (x,y) in BEIDE Gleichungen einsetzen — beide müssen denselben y-Wert ergeben</li>
                </ol>
              </>,
              <>
                <p>Beispiel: y = x und y = −x + 2</p>
                <pre className="hint-code-block">{`x = −x + 2
2x = 2  →  x = 1
y = 1·1 = 1
Schnittpunkt: (1, 1)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Berechnetes x direkt in den ursprünglichen Gleichsetzungsausdruck statt in eine der Geraden einsetzen → <strong>✅ Richtig:</strong> x = 6/5 in y = −2x+1 einsetzen, um y = −7/5 zu berechnen</li>
                <li><strong>❌ Falsch:</strong> −2x+1 = (1/2)x−2 → −2x+(1/2)x = −2−1 → Vorzeichen beim Umformen falsch → <strong>✅ Richtig:</strong> (1/2)x auf linke Seite bringt −(5/2)x; −2 auf rechte Seite bringt −3</li>
                <li><strong>❌ Falsch:</strong> Ergebnis nur in eine Gerade prüfen → <strong>✅ Richtig:</strong> Schnittpunkt (6/5, −7/5) in BEIDE Gleichungen einsetzen zur Probe</li>
              </ul>,
              <p>Warum setzt man die rechten Seiten der Gleichungen gleich, um den Schnittpunkt zu finden? Was bedeutet diese Gleichheit geometrisch — an welchem Punkt hat eine Funktion denselben y-Wert wie die andere?</p>,
            ),
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
            hint: h(
              <>
                <p>Zwei Punkte bestimmen eine Gerade eindeutig. <span className="hint-em">Steigung m</span> = (y₂ − y₁) / (x₂ − x₁). Der y-Achsenabschnitt b kann direkt aus dem Schnittpunkt mit der y-Achse abgelesen werden.</p>
              </>,
              <pre className="hint-code-block">{`Bekannte Punkte: (0, 2) und (8, 0)

1) Steigung berechnen:
   m = (0 − 2) / (8 − 0) = −2/8 = −1/4

2) y-Achsenabschnitt ablesen: b = 2  (Punkt (0,2))

3) Gleichung aufstellen: y = −(1/4)x + 2`}</pre>,
              <>
                <p>Beispiel: y-Achse bei 5, x-Achse bei 10</p>
                <pre className="hint-code-block">{`Punkte: (0,5) und (10,0)
m = (0−5)/(10−0) = −1/2
y = −(1/2)x + 5`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> m = (x₂−x₁)/(y₂−y₁) (Bruch umgekehrt) → <strong>✅ Richtig:</strong> m = (y₂−y₁)/(x₂−x₁) = Δy/Δx (immer y-Differenz durch x-Differenz)</li>
                <li><strong>❌ Falsch:</strong> b aus der Formel berechnen statt direkt abzulesen → <strong>✅ Richtig:</strong> Punkt (0, 2) auf y-Achse → b = 2 direkt, kein Rechnung nötig</li>
              </ul>,
              <p>Welche zwei Informationen bestimmen eine Gerade eindeutig? Warum reicht ein einziger Punkt nicht — und welche der beiden Informationen (m oder b) kann hier direkt abgelesen werden?</p>,
            ),
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
            hint: h(
              <>
                <p>Geht eine Gerade durch den <span className="hint-em">Ursprung (0, 0)</span>, ist der y-Achsenabschnitt automatisch b = 0. Die Gleichung vereinfacht sich zu y = mx.</p>
                <p>Steigung: m = y/x für jeden beliebigen Punkt auf der Ursprungsgeraden (außer (0,0)).</p>
              </>,
              <pre className="hint-code-block">{`1) b = 0  (Ursprungsgerade, kein Achsenabschnitt)
2) Steigung aus Punkt (2, −1):
   m = (−1 − 0) / (2 − 0) = −1/2
3) Gleichung: y = −(1/2)x`}</pre>,
              <>
                <p>Beispiel: Durch (0,0) und (3,6)</p>
                <pre className="hint-code-block">{`m = 6/3 = 2
y = 2x`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> b aus der allgemeinen Formel ermitteln statt direkt aus dem Ursprung → <strong>✅ Richtig:</strong> Durch Ursprung (0,0) geht → b = 0 direkt, kein Rechnung nötig</li>
                <li><strong>❌ Falsch:</strong> m = 2/(−1) = −2 (x/y verwechselt) → <strong>✅ Richtig:</strong> m = Δy/Δx = (−1−0)/(2−0) = −1/2</li>
              </ul>,
              <p>Was ist die Besonderheit einer Ursprungsgeraden? Welche Vereinfachung ergibt sich für y = mx + b — und warum genügt dann ein einziger Punkt (nicht der Ursprung) zur Bestimmung der Gleichung?</p>,
            ),
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
            hint: h(
              <>
                <p>Zwei grundlegende Mengensymbole:</p>
                <ul>
                  <li><span className="hint-em">∈</span> (ist Element von): Prüft, ob ein Objekt direkt in der Menge vorkommt</li>
                  <li><span className="hint-em">⊆</span> (ist Teilmenge von): Prüft, ob eine Menge nur Elemente der anderen enthält</li>
                </ul>
                <p>Wichtig: <strong>1</strong> (eine Zahl) und <strong>{'{1}'}</strong> (eine einelementige Menge) sind verschiedene Objekte!</p>
              </>,
              <>
                <ol>
                  <li>Bestimme, welche Art von Objekten direkte Elemente der Menge sind (Zahlen? Mengen? Gemischt?)</li>
                  <li>Für ∈-Aussagen: Ist das linke Objekt exakt als direktes Element aufgelistet?</li>
                  <li>Für ⊆-Aussagen: Nimm jedes Element der linken Menge und prüfe, ob es direkt in der rechten Menge vorkommt</li>
                  <li>Achte auf Typen: Zahl 1 und Menge {'{1}'} sind verschiedene Objekte — auch wenn 1 ∈ {'{1}'} gilt</li>
                </ol>
              </>,
              <>
                <p>Beispiel mit A = {'{a, b, {c}}'}</p>
                <pre className="hint-code-block">{`a ∈ A     → korrekt  (a ist direktes Element)
{a} ∈ A   → falsch   ({a} ist keine direktes Element)
{a} ⊆ A   → korrekt  (a ∈ A → {a} ist Teilmenge)
{c} ∈ A   → korrekt  ({c} ist direktes Element)
c ∈ A     → falsch   (c selbst ist kein Element)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> {'{1}'} ∈ M, weil 1 ∈ M (verwechselt) → <strong>✅ Richtig:</strong> 1 und {'{1}'} sind verschiedene Objekte; M enthält nur Zahlen, nicht Mengen</li>
                <li><strong>❌ Falsch:</strong> ∈ und ⊆ tauschen: „1 ⊆ M" schreiben → <strong>✅ Richtig:</strong> 1 ist eine Zahl, keine Menge → schreibe 1 ∈ M (Element-Beziehung)</li>
                <li><strong>❌ Falsch:</strong> {'{1}'} ⊆ M bedeutet: Ist {'{1}'} ∈ M? → <strong>✅ Richtig:</strong> {'{1}'} ⊆ M bedeutet: Ist jedes Element von {'{1}'} auch in M? Das einzige Element ist 1 → 1 ∈ M ✓</li>
              </ul>,
              <p>Was genau unterscheidet die Aussagen 1 ∈ M und {'{1}'} ⊆ M? Beide beziehen sich auf die Zahl 1 und die Menge M — warum können beide wahr sein, obwohl {'{1}'} ∉ M gilt?</p>,
            ),
            solution: '(i) 1 ∈ M  → korrekt  (1 ist Element von {1,2,3})\n(ii) {1} ∈ M  → falsch  ({1} ist keine Menge in M; 1 ist ein Element, nicht {1})\n(iii) {1} ⊆ M  → korrekt  ({1} ist Teilmenge von {1,2,3})',
          },
          {
            letter: 'b',
            text: 'Sei L = {∅, {1}, {2}, {1,2}}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   2 ∈ L\n(ii)  {2} ∈ L\n(iii) {2} ⊆ L\n(iv)  {{2}} ⊆ L',
            hint: h(
              <>
                <p>L ist eine <span className="hint-em">Menge von Mengen</span>. Ihre Elemente sind selbst Mengen: ∅, {'{1}'}, {'{2}'}, {'{1,2}'}.</p>
                <p>Schachtelungsebenen beachten: 2 (Zahl) ≠ {'{2}'} (Menge) ≠ {'{{2}}'} (Menge der Menge).</p>
              </>,
              <>
                <ol>
                  <li>Liste die direkten Elemente der Menge auf — alles, was explizit zwischen den äußeren {'{...}'} steht</li>
                  <li>Für ∈-Aussagen: Ist das linke Objekt exakt eines der direkten Elemente? (Schachtelungsebene beachten!)</li>
                  <li>Für ⊆-Aussagen: Nimm jedes Element der linken Menge und frage: Ist dieses Objekt ein direktes Element der rechten Menge?</li>
                  <li>Beachte: 2, {'{2}'}, {'{{2}}'} sind drei verschiedene Objekte auf drei Schachtelungsebenen — ein ∈-Test auf der falschen Ebene liefert stets falsch</li>
                </ol>
              </>,
              <>
                <p>Beispiel: M = {'{{a},{b},{a,b}}'}</p>
                <pre className="hint-code-block">{`{a} ∈ M   → korrekt  ({a} ist direktes Element)
a ∈ M     → falsch   (a selbst ist kein Element)
{a} ⊆ M   → falsch   (wäre wahr wenn a ∈ M, aber a ∉ M)
{{a}} ⊆ M → korrekt  ({a} ∈ M → {{a}} ist Teilmenge)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 2 ∈ L, weil {'{2}'} ∈ L (Ebenen verwechselt) → <strong>✅ Richtig:</strong> 2 (Zahl) und {'{2}'} (Menge) sind verschiedene Objekte; L enthält {'{2}'} als Menge, aber nicht 2 als Zahl</li>
                <li><strong>❌ Falsch:</strong> {'{2}'} ⊆ L bedeutet „{'{2}'} ist Element von L" → <strong>✅ Richtig:</strong> ⊆ ist Teilmengen-Relation: prüfe ob 2 (Element von {'{2}'}) in L ist → 2 ∉ L → {'{2}'} ⊄ L</li>
                <li><strong>❌ Falsch:</strong> {'{{2}}'} ⊆ L prüft ob 2 ∈ L → <strong>✅ Richtig:</strong> {'{{2}}'} ⊆ L prüft ob {'{2}'} ∈ L (eine Ebene tiefer: Element von {'{{2}}'} ist {'{2}'}, nicht 2)</li>
              </ul>,
              <p>Beim Prüfen von A ⊆ B wechselst du von der Mengenebene auf die Elementebene. Warum ist {'{{2}}'} ⊆ L äquivalent zur Frage „Ist {'{2}'} ∈ L?" — und was wäre anders, wenn du stattdessen {'{2}'} ⊆ L prüfen würdest?</p>,
            ),
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
            hint: h(
              <>
                <p>Die vier grundlegenden Mengenoperationen:</p>
                <ul>
                  <li><span className="hint-em">A \ B</span> (Differenz): Elemente in A, die nicht in B sind</li>
                  <li><span className="hint-em">A ∩ B</span> (Schnitt): Elemente, die in beiden Mengen sind</li>
                  <li><span className="hint-em">A ∪ B</span> (Vereinigung): Elemente, die in mindestens einer Menge sind</li>
                  <li><span className="hint-em">A × B</span> (kart. Produkt): Alle geordneten Paare (a, b) mit a∈A, b∈B</li>
                </ul>
              </>,
              <>
                <ol>
                  <li>Für A \ B: Prüfe jedes Element von A, ob es auch in B vorkommt — behalte nur die, die nicht in B sind</li>
                  <li>Für A ∩ B ∩ C: Ein Element muss in allen drei Mengen gleichzeitig sein — teste jedes Kandidat-Element</li>
                  <li>Für A ∪ B ∪ C: Sammle alle Elemente aus allen Mengen, jedes genau einmal</li>
                  <li>Für A × B: Bilde alle geordneten Paare (a, b) mit a aus A und b aus B — Reihenfolge zählt, also (a,b) ≠ (b,a)</li>
                  <li>Kontrolle für ×: Die Anzahl der Paare muss |A| · |B| ergeben</li>
                </ol>
              </>,
              <>
                <p>Beispiel: A = {'{1,2}'}, B = {'{2,3}'}</p>
                <pre className="hint-code-block">{`A\B = {1},  B\A = {3},  A∩B = {2},  A∪B = {1,2,3}
A×B = {(1,2),(1,3),(2,2),(2,3)}`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Z\X = X\Z (kommutativ) → <strong>✅ Richtig:</strong> Z\X ≠ X\Z; Z\X = ∅ aber X\Z = {'{3,7}'}</li>
                <li><strong>❌ Falsch:</strong> Reihenfolge im kartesischen Produkt ignorieren: (1,3) und (3,1) werden als gleich betrachtet → <strong>✅ Richtig:</strong> X×Z enthält geordnete Paare; (1,3) ∈ X×Z bedeutet erstes Element aus X, zweites aus Z</li>
                <li><strong>❌ Falsch:</strong> Bei X∪Y∪Z Duplikate aufführen wie {'{1,3,5,7,5,7,8,1,5}'} → <strong>✅ Richtig:</strong> Jedes Element nur einmal angeben: {'{1,3,5,7,8}'}</li>
              </ul>,
              <p>Warum ist das kartesische Produkt A × B nicht kommutativ? Was würde es bedeuten, wenn man (a, b) und (b, a) als gleich betrachten würde — und welche mathematische Struktur würde man damit beschreiben?</p>,
            ),
            solution: '(i) Z \\ X = {1,5} \\ {1,3,5,7} = ∅\n(ii) X \\ Z = {1,3,5,7} \\ {1,5} = {3,7}\n(iii) X ∩ Y ∩ Z = {5}\n(iv) X ∪ Y ∪ Z = {1,3,5,7,8}\n(v) X × Z = {(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)}',
          },
          {
            letter: 'b',
            text: 'Grundmenge G = {1,2,3,4,5,6,7,8,9}\nL = {1,2,4,7},  M = {3,5,6,8,9},  N = {4,5,9}\n(L̅ = Komplement von L in G, etc.)\n\nBestimmen Sie:\n(i)   L̅ ∩ N\n(ii)  (L ∩ M̅) ∪ (N ∩ N̅)\n(iii) L ∩ N̅ ∩ M̅',
            hint: h(
              <>
                <p><span className="hint-em">Komplement</span> Ā = G \ A: alle Elemente der Grundmenge G, die nicht in A sind.</p>
                <p>Wichtige Eigenschaften: A ∪ Ā = G und A ∩ Ā = ∅ (eine Menge und ihr Komplement sind disjunkt).</p>
              </>,
              <>
                <ol>
                  <li>Berechne zuerst alle benötigten Komplemente: Ā = G \ A für jede vorkommende Menge A</li>
                  <li>Erkenne Kurzschlüsse: A ∩ Ā = ∅ immer — Ausdrücke mit diesem Muster sofort vereinfachen</li>
                  <li>Werte den Gesamtausdruck von innen nach außen aus, Teilschritt für Teilschritt</li>
                  <li>Kontrolle: A ∪ Ā = G und |Ā| = |G| − |A| müssen stimmen</li>
                </ol>
              </>,
              <>
                <p>Beispiel: G = {'{1,2,3,4,5}'}, A = {'{1,2,3}'}</p>
                <pre className="hint-code-block">{`Ā = {4,5}
A ∩ Ā = ∅ ✓
A ∪ Ā = {1,2,3,4,5} = G ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> L̄ = alle ganzen Zahlen außer 1,2,4,7 (zu groß, nicht auf G beschränkt) → <strong>✅ Richtig:</strong> L̄ = G \ L = {'{1..9}'} \ {'{1,2,4,7}'} = {'{3,5,6,8,9}'}</li>
                <li><strong>❌ Falsch:</strong> N ∩ N̄ = N (oder irgendwas außer ∅) → <strong>✅ Richtig:</strong> N ∩ N̄ = ∅ immer (kein Element kann gleichzeitig in N und nicht in N sein)</li>
                <li><strong>❌ Falsch:</strong> L ∩ M̄ = L ∩ M̄ ≠ L → <strong>✅ Richtig:</strong> M̄ = {'{1,2,4,7}'} = L, daher L ∩ M̄ = L ∩ L = L</li>
              </ul>,
              <p>Warum ist A ∩ Ā = ∅ eine logische Notwendigkeit und keine Zufälligkeit dieser Mengen? Gibt es ein Objekt, das gleichzeitig in A und in Ā = G \ A sein kann?</p>,
            ),
            solution: 'Komplemente: L̅ = {3,5,6,8,9}  M̅ = {1,2,4,7}  N̅ = {1,2,3,6,7,8}\n\n(i) L̅ ∩ N = {3,5,6,8,9} ∩ {4,5,9} = {5,9}\n(ii) (L ∩ M̅) ∪ (N ∩ N̅) = ({1,2,4,7} ∩ {1,2,4,7}) ∪ ∅ = {1,2,4,7} = L\n(iii) L ∩ N̅ ∩ M̅ = {1,2,4,7} ∩ {1,2,3,6,7,8} ∩ {1,2,4,7} = {1,2,7}',
          },
          {
            letter: 'c',
            text: 'Gegeben:\n  M₁ = ℤ,  M₂ = ℕ,  M₃ = {−1, 1, 2},  M₄ = [−1, 2)\n\nBestimmen Sie:\n(i)   M₄ ∪ M₃\n(ii)  M₄ ∩ (M₂ \\ M₃)\n(iii) M₃ \\ (M₁ \\ M₂)',
            hint: h(
              <>
                <p>Verwendete Zahlenmengen:</p>
                <ul>
                  <li><span className="hint-em">ℕ</span> = {'{0, 1, 2, 3, ...}'} (natürliche Zahlen, hier mit 0)</li>
                  <li><span className="hint-em">ℤ</span> = {'{..., −2, −1, 0, 1, 2, ...}'} (ganze Zahlen)</li>
                  <li><span className="hint-em">[a, b)</span>: Intervall — enthält a, aber nicht b</li>
                </ul>
                <p>ℤ \ ℕ = negative ganze Zahlen {'{..., −3, −2, −1}'}</p>
              </>,
              <>
                <ol>
                  <li>Identifiziere zunächst, welche Elemente in den beteiligten Mengen liegen — beachte den Unterschied zwischen Intervallen und diskreten Mengen</li>
                  <li>Prüfe bei Intervallen genau, welche Endpunkte enthalten sind: [ = inklusive, ) = exklusive</li>
                  <li>Für A \ B: Welche Elemente von A sind nicht in B? Bei ℕ \ {'{diskrete Elemente}'}: Achte darauf, was ℕ überhaupt enthält (z.B. keine negativen Zahlen)</li>
                  <li>Werte verschachtelte Ausdrücke von innen nach außen aus</li>
                </ol>
              </>,
              <>
                <p>Intervall-Beispiele:</p>
                <pre className="hint-code-block">{`[0,3) ∪ {3}    = [0,3]
[−1,2) ∩ {0,1,2,3} = {0,1}   (2 ∉ [−1,2)!)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> [−1,2) enthält 2 → <strong>✅ Richtig:</strong> Die runde (offene) Klammer ) bedeutet: Endpunkt 2 ist NICHT enthalten; eckige Klammer ] würde 2 einschließen</li>
                <li><strong>❌ Falsch:</strong> M₂\M₃ enthält −1 nicht, weil −1 ∈ M₃ → <strong>✅ Richtig:</strong> −1 ∉ ℕ = M₂, kann also gar nicht in M₂\M₃ sein — M₃ hat keinen Einfluss auf −1</li>
                <li><strong>❌ Falsch:</strong> M₄ ∩ {'{0,3,4,...}'} = {'{0,1}'} (denken 1 ist drin) → <strong>✅ Richtig:</strong> 3 ∉ [−1,2), da 3 ≥ 2; nur 0 liegt in [−1,2)</li>
              </ul>,
              <p>Was unterscheidet [−1, 2) und [−1, 2] grundlegend — und warum kann man ein Intervall mit einer endlichen Menge vereinigen, obwohl es sich um verschiedene Typen handelt? Was wäre das Ergebnis von [0,1) ∪ {'{1}'} ∪ [1,2)?</p>,
            ),
            solution: '(i) M₄ ∪ M₃ = [−1, 2) ∪ {2} = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}\n(ii) M₂ \\ M₃ = {0, 3, 4, 5, …}\n    M₄ ∩ (M₂ \\ M₃) = [−1, 2) ∩ {0, 3, 4, …} = {0}\n(iii) M₁ \\ M₂ = {…, −3, −2, −1}\n    M₃ \\ (M₁ \\ M₂) = {−1, 1, 2} \\ {…, −1} = {1, 2}',
          },
          {
            letter: 'd',
            text: 'Sei A = {1, 2, 3}. Geben Sie die Potenzmenge P(A) an.',
            hint: h(
              <>
                <p>Die <span className="hint-em">Potenzmenge P(A)</span> ist die Menge aller Teilmengen von A — einschließlich der leeren Menge ∅ und A selbst.</p>
                <p>Formel: |P(A)| = 2^|A|. Für |A| = 3: 2³ = 8 Teilmengen.</p>
              </>,
              <>
                <ol>
                  <li>Gehe systematisch nach Größe vor: zuerst 0-elementige Teilmenge (∅), dann 1-elementige, 2-elementige, ..., bis zur Menge selbst</li>
                  <li>Für k-elementige Teilmengen: Es gibt C(n, k) Möglichkeiten</li>
                  <li>Zähle nach: Summe der C(n,k) für k = 0,...,n muss 2ⁿ ergeben</li>
                </ol>
              </>,
              <>
                <p>Beispiel: P({'{a,b}'})</p>
                <pre className="hint-code-block">{`P({a,b}) = { ∅, {a}, {b}, {a,b} }
|P({a,b})| = 2² = 4 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ∅ weglassen → <strong>✅ Richtig:</strong> ∅ ist immer eine Teilmenge jeder Menge (auch von A) und gehört zur Potenzmenge</li>
                <li><strong>❌ Falsch:</strong> A = {'{1,2,3}'} selbst weglassen → <strong>✅ Richtig:</strong> A ⊆ A gilt immer; die Potenzmenge enthält auch die Menge selbst</li>
                <li><strong>❌ Falsch:</strong> Nur 7 statt 8 Teilmengen (eine vergessen) → <strong>✅ Richtig:</strong> Zähle: 1 + C(3,1) + C(3,2) + 1 = 1+3+3+1 = 8 = 2³</li>
              </ul>,
              <p>Warum hat eine n-elementige Menge genau 2ⁿ Teilmengen? Was hat das mit der Entscheidung für jedes Element zu tun — und wie überzeugt man sich, dass das keine Zufälligkeit für kleine n ist?</p>,
            ),
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
            hint: h(
              <>
                <p>Standardmuster für Erzeuger-Notation {'{f(n) : n ∈ ℕ}'}:</p>
                <ul>
                  <li><span className="hint-em">Vielfache von k</span>: {'{k·n : n ∈ ℕ}'} = {'{0, k, 2k, 3k, ...}'}</li>
                  <li><span className="hint-em">Rest r bei Division durch k</span>: {'{k·n + r : n ∈ ℕ}'}</li>
                  <li><span className="hint-em">Durch 2 und 3 teilbar</span>: durch kgV(2,3) = 6 teilbar</li>
                </ul>
                <p>n beginnt bei 0 (ℕ = {'{0,1,2,3,...}'})</p>
              </>,
              <>
                <ol>
                  <li>Identifiziere das Muster: Vielfache (k·n), Rest r bei Division durch k (k·n + r), oder Teilbarkeit durch mehrere Zahlen (→ kgV)</li>
                  <li>Bestimme n=0 als Startpunkt und prüfe: Ergibt sich daraus das erste erwartete Element?</li>
                  <li>Schreibe die Erzeuger-Notation {'{f(n) : n ∈ ℕ}'} auf</li>
                  <li>Überprüfe: Setze n=0,1,2,3 ein und vergleiche mit der textuellen Beschreibung</li>
                </ol>
              </>,
              <>
                <p>Richtige Darstellungen:</p>
                <pre className="hint-code-block">{`Ungerade Zahlen (Rest 1 bei Div. durch 2):
  {2n+1 : n ∈ ℕ} = {1,3,5,7,...}

Vielfache von 4: {4n : n ∈ ℕ} = {0,4,8,12,...}`}</pre>
                <p>Kontrast: kgV vs. ggT bei Bedingung „durch 2 und 3 teilbar":</p>
                <pre className="hint-code-block">{`Falsch: {ggT(2,3)·n} = {1·n} = {0,1,2,3,...} = ℕ  ✗ (alle ℕ!)
Richtig: {kgV(2,3)·n} = {6n} = {0,6,12,18,...}  ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> n bei 1 starten → <strong>✅ Richtig:</strong> n ∈ ℕ beginnt bei 0; n=1 würde erstes Element auslassen (z.B. fehlt 0 bei Vielfachen von 7)</li>
                <li><strong>❌ Falsch:</strong> Für (iii) ggT(2,3)=1 verwenden → {'{1n : n ∈ ℕ}'} = ℕ → <strong>✅ Richtig:</strong> kgV(2,3)=6 verwenden, weil die Zahl durch beide teilbar sein muss</li>
              </ul>,
              <p>Warum verwendet man bei (iii) das kgV statt des ggT? Was würde die Menge {'{ggT(2,3)·n : n ∈ ℕ}'} = {'{n : n ∈ ℕ}'} stattdessen bedeuten — und was fehlt ihr?</p>,
            ),
            solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
          },
          {
            letter: 'b',
            text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
            hint: h(
              <>
                <p>Eine Menge in Erzeuger-Notation {'{f(n) : n ∈ ℕ}'} wird durch Einsetzen von n = 0, 1, 2, 3, ... in die Funktion f(n) aufgelistet.</p>
                <p><span className="hint-em">Tipp für (iv)</span>: Vereinfache zuerst den Ausdruck: 2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ, dann n = 0, 1, 2, ... einsetzen.</p>
              </>,
              <>
                <ol>
                  <li>Vereinfache den Ausdruck f(n) algebraisch, wenn möglich (z.B. Potenzgesetze bei 2²ⁿ)</li>
                  <li>Setze n = 0, 1, 2, 3, 4 nacheinander in den vereinfachten Ausdruck ein</li>
                  <li>Liste die Ergebnisse als Menge auf (kein Index, keine Reihenfolge, keine Duplikate)</li>
                </ol>
              </>,
              <>
                <p>Vereinfachung für (iv):</p>
                <pre className="hint-code-block">{`2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ
n=0: 4⁰=1,  n=1: 4¹=4,  n=2: 4²=16`}</pre>
                <p>Kontrast: verschiedene Lesarten von 2²ⁿ:</p>
                <pre className="hint-code-block">{`2²ⁿ  = (2²)ⁿ = 4ⁿ      → {1, 4, 16, 64, ...}   ✓ Potenzen von 4
(2ⁿ)² = 4ⁿ              → dasselbe Ergebnis ✓
2^(2n) als 4n (Fehler!)  → {0, 4, 8, ...}          ✗ n ist Exponent, kein Faktor`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> n bei 1 starten: 3·1−2=1 als erstes Element → <strong>✅ Richtig:</strong> n bei 0: 3·0−2=−2 ist das erste Element</li>
                <li><strong>❌ Falsch:</strong> 2²ⁿ = 4·n (Multiplikation statt Potenz) → <strong>✅ Richtig:</strong> 2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ; n ist der Exponent, nicht ein Faktor</li>
              </ul>,
              <p>Was ist der konzeptuelle Unterschied zwischen {'{2ⁿ : n ∈ ℕ}'} und {'{2²ⁿ : n ∈ ℕ}'} — beide nutzen Basis 2, aber warum wachsen sie so unterschiedlich? Welche der beiden Mengen ist eine Teilmenge der anderen?</p>,
            ),
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
            hint: h(
              <>
                <p>Ein <span className="hint-em">Venn-Diagramm</span> mit 3 Mengen besteht aus 3 überlappenden Kreisen in einem Rechteck (Grundmenge). Es entstehen 8 disjunkte Bereiche. Jede Mengenoperation wird durch Schattieren visualisiert.</p>
                <p>Ziel: Die vier Ausdrücke paarweise vergleichen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Für jeden Ausdruck: von innen nach außen auswerten
und schrittweise schattieren.

(A∩B)∪C:    erst Überlappung A∩B schattieren,
             dann alles in C hinzufügen
(A∪C)∩(B∪C): erst A∪C, dann B∪C, dann Schnitt

→ Vergleiche die schattierte Fläche paarweise!`}</pre>
              </>,
              <>
                <p>Zahlenprobe: A={'{1,2}'}, B={'{2,3}'}, C={'{3,4,5}'}</p>
                <pre className="hint-code-block">{`(A∩B)∪C = {2}∪{3,4,5} = {2,3,4,5}
(A∪C)∩(B∪C) = {1,2,3,4,5}∩{2,3,4,5} = {2,3,4,5} ✓

(A∪B)∩C = {1,2,3}∩{3,4,5} = {3}
(A∩C)∪(B∩C) = ∅∪{3} = {3} ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (A∩B)∪C ohne Klammern als A∩B∪C lesen → <strong>✅ Richtig:</strong> Klammern zuerst: erst A∩B berechnen, dann ∪C</li>
                <li><strong>❌ Falsch:</strong> Alle 4 Ausdrücke als identisch annehmen → <strong>✅ Richtig:</strong> Es gibt 2 gleiche Paare: {'{(A∩B)∪C = (A∪C)∩(B∪C)} und {(A∪B)∩C = (A∩C)∪(B∩C)}'}</li>
              </ul>,
              <p>Die Distributivgesetze sagen: ∪ verteilt sich über ∩ und umgekehrt. Was passiert auf Elementebene, wenn x ∈ (A∩B)∪C gilt — und warum ist das logisch dasselbe wie x ∈ (A∪C)∩(B∪C)?</p>,
            ),
            solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
          },
          {
            letter: 'b',
            text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
            hint: h(
              <>
                <p>Klammerung ist bei Mengenoperationen entscheidend: A ∪ (B∩C) und (A∪B)∩C sind im Allgemeinen verschieden, weil ∪ und ∩ <span className="hint-em">nicht frei vertauscht werden können</span>.</p>
                <p>Der Schlüssel liegt in den Elementen, die nur in A liegen (nicht in B und nicht in C): Diese sind in A ∪ (B∩C) immer enthalten, in (A∪B)∩C hingegen nur dann, wenn sie auch in C liegen.</p>
                <p>Wann sind die Ausdrücke doch gleich? Genau wenn A ⊆ C gilt — dann fügt das erste Ergebnis nichts hinzu, was das zweite nicht schon hätte.</p>
              </>,
              <>
                <ol>
                  <li>Werte jeden Teilausdruck in Klammern separat aus</li>
                  <li>Visualisiere im Venn-Diagramm: Schattiere jeden Teilausdruck Schritt für Schritt</li>
                  <li>Wende die äußere Operation auf die bereits schattierten Flächen an</li>
                  <li>Vergleiche die Ergebnisse: Gibt es Elemente in einem Ausdruck, die im anderen fehlen?</li>
                  <li>Suche gezielt nach Elementen, die nur in A, aber weder in B noch in C liegen — das ist der entscheidende Unterschied</li>
                </ol>
              </>,
              <>
                <p>Konkretes Gegenbeispiel:</p>
                <pre className="hint-code-block">{`A={1,2}, B={2,3}, C={3}:
A ∪ (B∩C) = {1,2} ∪ {3} = {1,2,3}
(A∪B) ∩ C = {1,2,3} ∩ {3} = {3}
{1,2,3} ≠ {3} → nicht gleich!`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> A∪(B∩C) = (A∪B)∩C annehmen (∪ und ∩ beliebig kombiniert) → <strong>✅ Richtig:</strong> Gegenbeispiel: A={'{1,2}'}, B={'{2,3}'}, C={'{3}'} → A∪(B∩C)={'{1,2,3}'} ≠ (A∪B)∩C={'{3}'}</li>
                <li><strong>❌ Falsch:</strong> Nur die Schnittbereiche von A, B, C prüfen → <strong>✅ Richtig:</strong> Elemente die nur in A (nicht in B,C) liegen sind der Schlüsselunterschied: sie sind in Ausdruck 1 enthalten, in Ausdruck 2 nicht</li>
              </ul>,
              <p>Was ist der konzeptuelle Unterschied zwischen „erst vereinigen, dann schneiden" und „erst schneiden, dann vereinigen"? Warum kann A ∪ (B∩C) Elemente aus A enthalten, die gar nichts mit B oder C zu tun haben — und warum ist das für (A∪B)∩C unmöglich?</p>,
            ),
            solution: 'A ∪ (B ∩ C)  ≠  (A ∪ B) ∩ C  im Allgemeinen.\n\nBeispiel: A = {1,2}, B = {2,3}, C = {3,4}\n  A ∪ (B ∩ C) = {1,2} ∪ {3} = {1,2,3}\n  (A ∪ B) ∩ C = {1,2,3} ∩ {3,4} = {3}\n\n→ Klammern können nicht einfach weggelassen werden!',
          },
          {
            letter: 'c',
            text: 'Sei X Grundmenge, A, B ⊆ X. Veranschaulichen Sie und vergleichen Sie:\n\n  Ā ∪ B\n  Ā ∪ B̄\n  Ā ∩ B\n  Ā ∩ B̄\n\n(Ā = Komplement von A in X)',

            hint: h(
              <>
                <p><span className="hint-em">De Morgansche Gesetze</span>:</p>
                <ul>
                  <li>(A ∪ B)‾ = Ā ∩ B̄</li>
                  <li>(A ∩ B)‾ = Ā ∪ B̄</li>
                </ul>
                <p>Komplement Ā = X \ A: alles in der Grundmenge X, was nicht in A ist.</p>
              </>,
              <>
                <ol>
                  <li>Zeichne A und B als überlappende Kreise in der Grundmenge X</li>
                  <li>Berechne die Komplemente: Ā = X \ A (alles außerhalb A), B̄ = X \ B</li>
                  <li>Werte jeden der vier Ausdrücke (Ā∪B, Ā∪B̄, Ā∩B, Ā∩B̄) separat im Diagramm aus</li>
                  <li>Suche Paare mit identischer Schattierung — das entspricht Mengenäquivalenzen</li>
                  <li>Vergleiche deine Paare mit den De Morganschen Gesetzen als Querprüfung</li>
                </ol>
              </>,
              <>
                <p>Probe: X={'{1..5}'}, A={'{1,2,3}'}, B={'{3,4}'}</p>
                <pre className="hint-code-block">{`Ā={4,5},  B̄={1,2,5}
Ā∪B  = {3,4,5}    Ā∪B̄ = {1,2,4,5}
Ā∩B  = {4}        Ā∩B̄ = {5}`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Ā = alle reellen Zahlen außer A (keine Grundmenge X) → <strong>✅ Richtig:</strong> Ā = X \ A, immer relativ zur Grundmenge X</li>
                <li><strong>❌ Falsch:</strong> Ā ∪ B̄ = Ā ∪ B (B und B̄ verwechselt) → <strong>✅ Richtig:</strong> B̄ = X \ B ist das Komplement von B, nicht B selbst</li>
                <li><strong>❌ Falsch:</strong> De Morgan als Ā ∪ B̄ = A ∪ B → <strong>✅ Richtig:</strong> De Morgan: (A∩B)‾ = Ā ∪ B̄ und (A∪B)‾ = Ā ∩ B̄</li>
              </ul>,
              <p>De Morgan besagt: (A∪B)‾ = Ā∩B̄. Wie kannst du das nutzen, um Äquivalenzen unter den vier Ausdrücken ohne Venn-Diagramm zu identifizieren — und was sagt das über die Beziehung zwischen Ā∪B̄ und (A∩B)‾?</p>,
            ),
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
            hint: h(
              <>
                <p>Zwei Methoden:</p>
                <ul>
                  <li><span className="hint-em">Widerlegung</span>: Einfache Mengen einsetzen (z. B. A=B=C={'{1,2,3}'}). Wenn LHS ≠ RHS → Aussage falsch.</li>
                  <li><span className="hint-em">Elementmethode</span> (Beweis): Zeige x ∈ LHS ⟺ x ∈ RHS durch logische Umformung.</li>
                </ul>
                <p>Tipp: Erst Gegenbeispiele suchen, dann beweisen was übrig bleibt.</p>
              </>,
              <>
                <ol>
                  <li>Suche zunächst ein Gegenbeispiel: Wähle einfache Mengen (z.B. A=B=C={'{1}'} oder A=B=C={'{1,2,3}'}) und prüfe, ob LHS = RHS</li>
                  <li>Wenn LHS ≠ RHS: Die Gleichheit ist nicht allgemeingültig — fertig (kein Beweis nötig)</li>
                  <li>Wenn kein Gegenbeispiel gefunden: Führe einen Beweis per Elementmethode</li>
                  <li>Elementmethode: Zeige x ∈ LHS ⟺ x ∈ RHS — d.h. beide Richtungen (⇒ und ⟸) separat beweisen</li>
                  <li>Nutze logische Umformungen: A\B = {'{x: x∈A und x∉B}'}, De Morgan, Distributivgesetze</li>
                </ol>
              </>,
              <>
                <p>Elementmethode für (ii) ausführlich:</p>
                <pre className="hint-code-block">{`x ∈ A\B
⟺ (x ∈ A) und (x ∉ B)
⟺ (x ∈ A) und (x ∈ B̄)  [Def. Komplement]
⟺ x ∈ A ∩ B̄  ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Ein Beispiel prüfen und daraus Allgemeingültigkeit schließen → <strong>✅ Richtig:</strong> Zum Beweisen: Elementmethode (x ∈ LHS ⟺ x ∈ RHS); zum Widerlegen: ein Gegenbeispiel</li>
                <li><strong>❌ Falsch:</strong> Bei (i) die erste Richtung korrekt prüfen und dann annehmen beide Richtungen stimmen → <strong>✅ Richtig:</strong> A\(B\C) = {'{1,2,3}'} ≠ ∅ = (A\B)\C → widerlegt</li>
                <li><strong>❌ Falsch:</strong> Elementmethode nur in eine Richtung zeigen → <strong>✅ Richtig:</strong> Für ⟺ beide Richtungen (⇒ und ⟸) beweisen</li>
              </ul>,
              <p>Für jede als gültig eingestufte Gleichheit: Gilt die Elementkette x ∈ LHS ⟺ x ∈ RHS in beide Richtungen?</p>,
            ),
            solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B̅  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A̅ ∩ B) = (A ∪ A̅) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt2',
    nr: '2',
    titel: 'Logik',
    aufgaben: [
      {
        id: 'b2a1',
        nr: 1,
        title: 'Wahrheitstafel',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Seien A und B mathematische Aussagen. Füllen Sie nachstehende Wahrheitstafel aus.\nBeachten Sie: „¬" bindet stärker als „∨",\nd.h. „¬A ∧ ¬B" = „(¬A) ∧ (¬B)" und „¬A ∨ ¬B" = „(¬A) ∨ (¬B)".\n\n A | B | ¬(A∧B) | ¬(A∨B) | ¬A∧¬B | ¬A∨¬B\n w | w |        |        |       |\n w | f |        |        |       |\n f | w |        |        |       |\n f | f |        |        |       |',
            hint: h(
              <>
                <p>Eine <span className="hint-em">Wahrheitstafel</span> zeigt für jede Kombination der Wahrheitswerte von A und B den Wert des zusammengesetzten Ausdrucks.</p>
                <ul>
                  <li>¬X: wahr genau dann, wenn X falsch</li>
                  <li>X ∧ Y: wahr genau dann, wenn beide wahr</li>
                  <li>X ∨ Y: wahr wenn mindestens eines wahr</li>
                </ul>
              </>,
              <>
                <ol>
                  <li>Werte jeden Ausdruck von innen nach außen aus: zuerst Klammern, dann ¬, dann ∧/∨</li>
                  <li>Bearbeite jede der vier Zeilen (w/w, w/f, f/w, f/f) für jede Spalte separat</li>
                  <li>¬ zuerst berechnen (bindet stärker): ¬A und ¬B bestimmen, bevor ∧ oder ∨ ausgewertet wird</li>
                  <li>Vergleiche am Ende die Spalten paarweise auf Übereinstimmung</li>
                </ol>
              </>,
              <>
                <p>Grundtabellen:</p>
                <pre className="hint-code-block">{`∧: w∧w=w  w∧f=f  f∧w=f  f∧f=f
∨: w∨w=w  w∨f=w  f∨w=w  f∨f=f
¬: ¬w=f   ¬f=w`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ¬A∧¬B = ¬(A∧B) annehmen (Klammern ignoriert) → <strong>✅ Richtig:</strong> De Morgan besagt ¬(A∧B) = ¬A∨¬B (mit ∨!); ¬A∧¬B ist etwas anderes</li>
                <li><strong>❌ Falsch:</strong> ¬A∧¬B als ¬(A∧¬B) oder ¬(¬A∧B) lesen → <strong>✅ Richtig:</strong> ¬ bindet stärker als ∧ und ∨: ¬A∧¬B = (¬A)∧(¬B)</li>
                <li><strong>❌ Falsch:</strong> w∧f = w → <strong>✅ Richtig:</strong> w∧f = f (∧ ist nur wahr wenn BEIDE wahr)</li>
              </ul>,
              <p>Welche Spaltenpaare stimmen überein — und welches logische Gesetz erklärt genau diese Äquivalenz? Wäre das Ergebnis überraschend, wenn man De Morgan kennt?</p>,
            ),
            solution: ' A | B | ¬(A∧B) | ¬(A∨B) | ¬A∧¬B | ¬A∨¬B\n w | w |   f    |   f    |   f   |   f\n w | f |   w    |   f    |   f   |   w\n f | w |   w    |   f    |   f   |   w\n f | f |   w    |   w    |   w   |   w\n\nSpalten 1 und 4 stimmen überein → ¬(A∧B) ≡ ¬A∨¬B\nSpalten 2 und 3 stimmen überein → ¬(A∨B) ≡ ¬A∧¬B\n(De Morgansche Gesetze)',
          },
        ],
      },
      {
        id: 'b2a2',
        nr: 2,
        title: 'Aussagen formulieren (⇒, ⟸, ⟺)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEs gilt genau dann z² ≥ 0, wenn z ≥ 0 ist.',
            hint: h(
              <>
                <p><span className="hint-em">⟺ (genau dann … wenn)</span>: A ⟺ B ist wahr, wenn A und B stets denselben Wahrheitswert haben.</p>
                <p>A ⟺ B bedeutet: (A ⇒ B) und (B ⇒ A). Um sie zu widerlegen, genügt es, eine Richtung zu widerlegen.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze die verbale Aussage in Symbole: „genau dann ... wenn" = ⟺</li>
                  <li>Zerlege die ⟺-Aussage in zwei Richtungen: A ⇒ B und B ⇒ A</li>
                  <li>Prüfe jede Richtung: Gibt es ein z, das die Prämisse erfüllt, aber die Konklusion verletzt?</li>
                  <li>Wenn ein Gegenbeispiel gefunden: Diese Richtung ist falsch — die ⟺-Aussage ebenfalls</li>
                  <li>Wenn kein Gegenbeispiel denkbar: Führe einen formalen Beweis für diese Richtung</li>
                </ol>
              </>,
              <>
                <p>Hinweis: z² ≥ 0 gilt für alle z ∈ ℝ, da Quadrate nie negativ sind. Die Rückrichtung z ≥ 0 ⇒ z² ≥ 0 wäre wahr, die Hinrichtung nicht.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> z ≥ 0 ⇒ z² ≥ 0 ist wahr → also gilt auch ⟺ → <strong>✅ Richtig:</strong> ⟺ erfordert BEIDE Richtungen; die Hinrichtung z² ≥ 0 ⇒ z ≥ 0 scheitert bei z=−1</li>
                <li><strong>❌ Falsch:</strong> Ohne Gegenbeispiel annehmen, die Aussage sei wahr → <strong>✅ Richtig:</strong> z=−1: (−1)²=1≥0, aber −1 &lt; 0 → Hinrichtung falsch → ⟺ falsch</li>
              </ul>,
              <p>Warum reicht eine einzige Gegenzahl, um eine ⟺-Aussage zu widerlegen? Was sagt das über die Asymmetrie zwischen Widerlegen (ein Gegenbeispiel) und Beweisen (alle Fälle) aus?</p>,
            ),
            solution: 'In Symbolen: z² ≥ 0 ⟺ z ≥ 0\n→ falsch\n\nGegenbeispiel: z = −1\n  z² = 1 ≥ 0, aber z = −1 < 0\n→ Die Hinrichtung z² ≥ 0 ⇒ z ≥ 0 ist falsch.',
          },
          {
            letter: 'b',
            text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEine hinreichende Bedingung dafür, dass z durch 2 ohne Rest teilbar ist,\nist die Teilbarkeit von z durch 4 ohne Rest.',
            hint: h(
              <>
                <p><span className="hint-em">Hinreichende Bedingung:</span> „A ist hinreichend für B" bedeutet A ⇒ B.</p>
                <p>A reicht aus, um B zu garantieren. B kann aber auch ohne A gelten.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze: „A ist hinreichend für B" bedeutet A ⇒ B</li>
                  <li>Identifiziere in der Aufgabe, was A und was B ist</li>
                  <li>Für den Beweis: Nimm A an (z.B. in der Form z = ... ausdrücken) und leite daraus B her</li>
                  <li>Für eine Widerlegung: Suche ein konkretes z, das A erfüllt aber B nicht</li>
                </ol>
              </>,
              <>
                <p>Merkhilfe:</p>
                <pre className="hint-code-block">{`A ist HINREICHEND für B: A ⇒ B
A ist NOTWENDIG für B:   B ⇒ A
Symbol „⟸": zeigt Richtung von rechts nach links`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> „hinreichend" = „notwendig" → <strong>✅ Richtig:</strong> Hinreichend: A⇒B (A genügt); Notwendig: B⇒A (ohne A geht B nicht)</li>
                <li><strong>❌ Falsch:</strong> Pfeil falsch: 2|z ⇒ 4|z schreiben (umgekehrt) → <strong>✅ Richtig:</strong> „4|z ist hinreichend für 2|z" = 4|z ⇒ 2|z (der hinreichende Begriff steht links)</li>
              </ul>,
              <p>Was ist der Unterschied zwischen „A ist hinreichend für B" und „B ist hinreichend für A"? Welchen Pfeil zeichnet jeweils welche Aussage — und welcher Pfeil fehlt, wenn man nur Hinreichendes ohne Notwendiges hat?</p>,
            ),
            solution: 'In Symbolen: z durch 2 teilbar ⟸ z durch 4 teilbar (wahr)\n\nBeweis: Wenn 4 | z, dann z = 4k für k ∈ ℤ.\n  z = 2·(2k) → 2 | z ✓',
          },
          {
            letter: 'c',
            text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEine notwendige Bedingung dafür, dass z durch 2 ohne Rest teilbar ist,\nist die Teilbarkeit von z durch 4 ohne Rest.',
            hint: h(
              <>
                <p><span className="hint-em">Notwendige Bedingung:</span> „A ist notwendig für B" bedeutet B ⇒ A.</p>
                <p>Ohne A kann B nicht gelten — A ist eine unverzichtbare Voraussetzung. Das bedeutet aber nicht, dass A allein schon B garantiert.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze: „A ist notwendig für B" bedeutet B ⇒ A</li>
                  <li>Identifiziere A und B in der Aufgabe und schreibe den Pfeil korrekt auf</li>
                  <li>Suche ein Gegenbeispiel: Eine Zahl, die die Prämisse erfüllt, aber die Konklusion verletzt</li>
                  <li>Wenn ein Gegenbeispiel gefunden: Die Aussage ist falsch — kein weiterer Beweis nötig</li>
                </ol>
              </>,
              <>
                <p>Weitere Gegenbeispiele: z = 6, z = 10, z = 14, ...</p>
                <pre className="hint-code-block">{`Alle Zahlen ≡ 2 (mod 4) sind durch 2,
aber nicht durch 4 teilbar.`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> „notwendig" mit „hinreichend" verwechseln und 4|z ⇒ 2|z schreiben → <strong>✅ Richtig:</strong> „4|z notwendig für 2|z" bedeutet: wenn 2|z, dann muss auch 4|z gelten = 2|z ⇒ 4|z</li>
                <li><strong>❌ Falsch:</strong> Ohne Gegenbeispiel behaupten die Aussage sei wahr → <strong>✅ Richtig:</strong> z=2: 2|2 ✓ aber 4∤2 ✗ — Gegenbeispiel widerlegt die Behauptung</li>
              </ul>,
              <p>Warum ist „notwendige Bedingung" konzeptionell schwächer als „hinreichende Bedingung"? Wenn 4|z notwendig für 2|z wäre, was würde das über die Zahl z=2 aussagen — und warum ist das absurd?</p>,
            ),
            solution: 'In Symbolen: z durch 2 teilbar ⇒ z durch 4 teilbar (falsch)\n\nGegenbeispiel: z = 2\n  2 | 2 ✓, aber 4 ∤ 2 ✗\n→ Teilbarkeit durch 2 impliziert nicht Teilbarkeit durch 4.',
          },
        ],
      },
      {
        id: 'b2a3',
        nr: 3,
        title: 'Äquivalente Aussagen zu einer Implikation',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Welche der folgenden Aussagen sind äquivalent zur Aussage:\n„Wenn das Wetter schön ist, dann kommt Maxi Musterfrau mit dem Fahrrad an die Hochschule."\n(Sei P: „Wetter schön", Q: „Maxi mit Fahrrad" → Original: P ⇒ Q)\n\n(a) Wenn das Wetter nicht schön ist, dann kommt Maxi nicht mit dem Fahrrad.',
            hint: h(
              <>
                <p>Aussage (a): ¬P ⇒ ¬Q — das ist die <span className="hint-em">Inverse</span> (Umkehrung der Kontraposition).</p>
                <p>Die Inverse ist im Allgemeinen NICHT äquivalent zur ursprünglichen Implikation.</p>
              </>,
              <>
                <ol>
                  <li>Klassifiziere den Ausdruck: Ist es die Umkehrung (Q⇒P), die Inverse (¬P⇒¬Q) oder die Kontraposition (¬Q⇒¬P)?</li>
                  <li>Erstelle eine Wahrheitstafel mit 4 Zeilen (w/w, w/f, f/w, f/f)</li>
                  <li>Fülle P⇒Q und den neuen Ausdruck aus</li>
                  <li>Prüfe: Stimmen alle vier Zeilen überein? → äquivalent; mindestens eine unterscheidet sich → nicht äquivalent</li>
                </ol>
              </>,
              <>
                <p>Verwandtschaftsbeziehungen:</p>
                <pre className="hint-code-block">{`Original:       P ⇒ Q    (wahr ≡ ¬P∨Q)
Kontraposition: ¬Q ⇒ ¬P  (äquivalent ✓)
Umkehrung:      Q ⇒ P    (nicht äquivalent ✗)
Inverse:        ¬P ⇒ ¬Q  (nicht äquivalent ✗)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Inverse ¬P⇒¬Q = Kontraposition ¬Q⇒¬P → <strong>✅ Richtig:</strong> Inverse: Prämisse und Konklusion negiert (nicht vertauscht); Kontraposition: zusätzlich die Richtung umgekehrt</li>
                <li><strong>❌ Falsch:</strong> Alle 4 Varianten (Original, Umkehrung, Inverse, Kontraposition) als äquivalent annehmen → <strong>✅ Richtig:</strong> Nur Original und Kontraposition sind äquivalent; Umkehrung und Inverse sind unabhängig</li>
              </ul>,
              <p>Warum ist die Inverse ¬P⇒¬Q nicht äquivalent zu P⇒Q, obwohl sie sich ähnlich anfühlt? Welche zwei Ausdrücke sind stattdessen äquivalent — und was haben sie strukturell gemein?</p>,
            ),
            solution: '(a) In Symbolen: ¬P ⇒ ¬Q\n    → NICHT äquivalent zu P ⇒ Q (das ist die Inverse).',
          },
          {
            letter: 'b',
            text: '(b) Wenn das Wetter nicht schön ist, dann kommt Maxi mit dem Fahrrad an die Hochschule.',
            hint: h(
              <>
                <p>Aussage (b): ¬P ⇒ Q — weder Kontraposition noch Umkehrung von P ⇒ Q.</p>
                <p>Diese Aussage behauptet etwas über den Fall ¬P, über den das Original P ⇒ Q gar nichts aussagt.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze die Aussage (b) in Symbolform</li>
                  <li>Vergleiche die Symbolform mit P⇒Q: Ist es eine der vier Standardvarianten (Umkehrung, Inverse, Kontraposition, Original)?</li>
                  <li>Erstelle eine Wahrheitstafel oder suche ein Gegenbeispiel (eine Zeile, in der P⇒Q ≠ Ausdruck(b))</li>
                </ol>
              </>,
              <>
                <p>P ⇒ Q sagt nichts darüber aus, was bei schlechtem Wetter (P=f) geschieht. Q kann dann wahr oder falsch sein.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Da die Aussage P betrifft und (b) auch P enthält, muss sie äquivalent sein → <strong>✅ Richtig:</strong> Die Formel ist ¬P⇒Q (anderer Inhalt als P⇒Q), Gegenbeispiel P=f, Q=f zeigt die Verschiedenheit</li>
              </ul>,
              <p>P⇒Q macht eine Aussage über den Fall P=w. Was passiert bei P=f — sagt P⇒Q überhaupt etwas über diesen Fall aus? Und was folgt daraus für die Äquivalenz mit ¬P⇒Q?</p>,
            ),
            solution: '(b) In Symbolen: ¬P ⇒ Q\n    → NICHT äquivalent zu P ⇒ Q.',
          },
          {
            letter: 'c',
            text: '(c) Das Wetter ist nicht schön oder Maxi ist mit dem Fahrrad an der Hochschule.',
            hint: h(
              <>
                <p><span className="hint-em">Schlüsseltatsache:</span> P ⇒ Q ≡ ¬P ∨ Q</p>
                <p>Eine Implikation ist äquivalent zur Disjunktion aus negierter Prämisse und Konklusion.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze die Aussage (c) in Symbolform</li>
                  <li>Erkenne, ob die Form ¬P∨Q auftaucht — das ist die bekannte logische Umschreibung einer Implikation</li>
                  <li>Vergleiche mit P⇒Q per Wahrheitstafel oder wende die Äquivalenz P⇒Q ≡ ¬P∨Q direkt an</li>
                </ol>
              </>,
              <>
                <p>Aussage (c): ¬P ∨ Q entspricht genau der Umformung P ⇒ Q ≡ ¬P ∨ Q.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> P∨Q statt ¬P∨Q (Negation von P vergessen) → <strong>✅ Richtig:</strong> P⇒Q ≡ ¬P∨Q; wenn P falsch ist, ist die Implikation automatisch wahr (egal was Q ist)</li>
                <li><strong>❌ Falsch:</strong> P⇒Q ≡ P∧Q annehmen → <strong>✅ Richtig:</strong> P⇒Q ≡ ¬P∨Q (die Wahrheitstafel beider Ausdrücke ist identisch)</li>
              </ul>,
              <p>Warum gilt P⇒Q ≡ ¬P∨Q? Was bedeutet eine Implikation P⇒Q eigentlich — welche der vier Zeilen der Wahrheitstafel macht sie falsch, und wie drückt ¬P∨Q genau dasselbe aus?</p>,
            ),
            solution: '(c) In Symbolen: ¬P ∨ Q\n    → ÄQUIVALENT zu P ⇒ Q, denn P ⇒ Q ≡ ¬P ∨ Q ✓',
          },
          {
            letter: 'd',
            text: '(d) Wenn Maxi ohne Fahrrad an der Hochschule ist, dann ist das Wetter nicht schön.',
            hint: h(
              <>
                <p>Aussage (d): ¬Q ⇒ ¬P — das ist die <span className="hint-em">Kontraposition</span> von P ⇒ Q.</p>
                <p>Die Kontraposition ist immer äquivalent zur ursprünglichen Implikation.</p>
              </>,
              <>
                <ol>
                  <li>Übersetze die Aussage (d) in Symbolform und identifiziere Prämisse und Konklusion</li>
                  <li>Erkenne das Muster: Sind beide Seiten negiert und der Pfeil umgekehrt im Vergleich zu P⇒Q?</li>
                  <li>Prüfe entweder per Wahrheitstafel oder algebraisch über ¬Q⇒¬P ≡ ¬(¬Q)∨¬P = Q∨¬P = ¬P∨Q ≡ P⇒Q</li>
                </ol>
              </>,
              <>
                <p>Merksatz:</p>
                <pre className="hint-code-block">{`P ⇒ Q ≡ ¬Q ⇒ ¬P  (Kontraposition, äquivalent ✓)
P ⇒ Q ≇ Q ⇒ P    (Umkehrung, nicht äquivalent ✗)
P ⇒ Q ≇ ¬P ⇒ ¬Q  (Inverse, nicht äquivalent ✗)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Kontraposition ¬Q⇒¬P = Umkehrung Q⇒P → <strong>✅ Richtig:</strong> Kontraposition dreht Pfeil UND negiert; Umkehrung dreht nur den Pfeil ohne Negation</li>
                <li><strong>❌ Falsch:</strong> ¬P⇒¬Q als Kontraposition → <strong>✅ Richtig:</strong> Das ist die Inverse (nur negiert, nicht umgekehrt); Kontraposition ist ¬Q⇒¬P</li>
              </ul>,
              <p>Warum ist die Kontraposition logisch gleichwertig zur ursprünglichen Implikation, die Umkehrung aber nicht? Was ist der fundamentale Unterschied zwischen „A impliziert B" und „¬B impliziert ¬A"?</p>,
            ),
            solution: '(d) In Symbolen: ¬Q ⇒ ¬P\n    → ÄQUIVALENT zu P ⇒ Q (das ist die Kontraposition) ✓\n\nDie Aussage ist nur zu (c) und (d) äquivalent.',
          },
        ],
      },
      {
        id: 'b2a4',
        nr: 4,
        title: 'Direkter Beweis: A(n) ⇒ B(n) ∀n',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Beweisen Sie durch direkten Beweis den Satz A(n) ⇒ B(n) ∀n für die Aussagen:\n  A(n): n ist ungerade\n  B(n): n² ist ungerade\n\nHinweis: Benutzen Sie dafür die Wahrheitstafel des Operators ⇒.',
            hint: h(
              <>
                <p>Beim <span className="hint-em">direkten Beweis</span> von A(n) ⇒ B(n) ∀n genügt es zu zeigen, dass der Fall A(n)=w, B(n)=f nicht vorkommen kann.</p>
                <p>Zeilen mit A(n)=f müssen nicht betrachtet werden, da A⇒B dort automatisch wahr ist.</p>
              </>,
              <>
                <ol>
                  <li>Nimm A(n) = w an: Schreibe n in der allgemeinen Form ungerader Zahlen (n = 2k+1 für k ∈ ℕ)</li>
                  <li>Berechne n² algebraisch durch Ausmultiplizieren</li>
                  <li>Forme das Ergebnis um, bis du zeigen kannst, dass n² die Form 2m+1 hat</li>
                  <li>Schließe: n² ist ungerade → B(n) = w; der Fall A=w, B=f tritt nicht auf</li>
                </ol>
              </>,
              <>
                <p>Allgemeines Muster:</p>
                <pre className="hint-code-block">{`n ungerade ⟺ ∃k ∈ ℕ: n = 2k+1
n gerade   ⟺ ∃k ∈ ℕ: n = 2k`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur konkrete Zahlen prüfen (z.B. 1²=1, 3²=9) statt allgemeinen Beweis → <strong>✅ Richtig:</strong> n = 2k+1 für beliebiges k ∈ ℕ verwenden, um alle ungeraden Zahlen abzudecken</li>
                <li><strong>❌ Falsch:</strong> n = 2k (gerade Zahl) für die Annahme verwenden → <strong>✅ Richtig:</strong> Die Voraussetzung ist „n ist ungerade" → n = 2k+1 (mit dem +1!)</li>
              </ul>,
              <p>Warum muss man n als 2k+1 schreiben, statt einfach „n ist ungerade" zu sagen? Was ermöglicht diese algebraische Darstellung, die eine verbale Beschreibung nicht kann?</p>,
            ),
            solution: 'Direkter Beweis:\n\nEs genügt zu zeigen, dass A(n) = w, B(n) = f nicht auftreten kann.\n\nAnnahme: A(n) = w, d.h. n ist ungerade.\nDann ∃k ∈ ℕ mit n = 2k+1.\n\nn² = (2k+1)² = 4k²+4k+1 = 2(2k²+2k)+1\n\nDie Form 2m+1 zeigt: n² ist ungerade, also B(n) = w.\nDer Fall A(n)=w, B(n)=f kann somit nicht auftreten.\n\nZeilen mit A(n)=f werden nicht betrachtet (A⇒B dort automatisch wahr). □',
          },
        ],
      },
      {
        id: 'b2a5',
        nr: 5,
        title: 'Widerspruchsbeweis',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Beweisen Sie den Satz A(n) ⇒ B(n) ∀n aus Aufgabe 4 durch Widerspruchsbeweis.\n  A(n): n ist ungerade\n  B(n): n² ist ungerade',
            hint: h(
              <>
                <p>Beim <span className="hint-em">Widerspruchsbeweis</span> nimmt man an, die Aussage sei falsch, und leitet einen Widerspruch ab.</p>
                <p>¬(A(n) ⇒ B(n)) = ¬(¬A(n) ∨ B(n)) = A(n) ∧ ¬B(n)</p>
                <p>Annahme: n ist ungerade UND n² ist gerade.</p>
              </>,
              <>
                <ol>
                  <li>Negiere die Zielaussage: ¬(A(n)⇒B(n)) = A(n)∧¬B(n) — bilde diese Annahme (A=w und B=f gleichzeitig)</li>
                  <li>Leite aus der Annahme eine mathematische Folgerung ab (wie im direkten Beweis)</li>
                  <li>Zeige, dass diese Folgerung der Annahme ¬B(n) direkt widerspricht</li>
                  <li>Schließe: Da die Annahme zum Widerspruch führt, muss A(n)⇒B(n) wahr sein. □</li>
                </ol>
              </>,
              <>
                <p>Umformung der Negation einer Implikation:</p>
                <pre className="hint-code-block">{`¬(A ⇒ B) = ¬(¬A ∨ B) = A ∧ ¬B
(De Morgan + Doppelnegation)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Zum Widerspruch nur A(n)=f annehmen → <strong>✅ Richtig:</strong> Widerspruchsbeweis für A⇒B nimmt ¬(A⇒B) = A∧¬B an; beide Teile müssen in die Annahme</li>
                <li><strong>❌ Falsch:</strong> ¬(A⇒B) = ¬A⇒¬B → <strong>✅ Richtig:</strong> ¬(A⇒B) = A∧¬B (mit De Morgan: ¬(¬A∨B) = A∧¬B)</li>
              </ul>,
              <p>Was ist der fundamentale Unterschied zwischen direktem Beweis und Widerspruchsbeweis — und warum führen beide Methoden hier zum selben Ergebnis? Wann wäre Widerspruchsbeweis die einzige praktikable Option?</p>,
            ),
            solution: 'Widerspruchsbeweis:\n\nWir nehmen an: ¬(A(n) ⇒ B(n)) = A(n) ∧ ¬B(n),\nd.h. n ist ungerade und n² ist gerade.\n\nAus A(n)=w folgt n = 2k+1 für k ∈ ℕ.\n\nn² = (2k+1)² = 4k²+4k+1 = 2(2k²+2k)+1\n→ n² ist ungerade — Widerspruch zu ¬B(n)!\n\nDie Annahme war falsch → A(n) ⇒ B(n) ∀n. □',
          },
        ],
      },
      {
        id: 'b2a6',
        nr: 6,
        title: 'Logische Ausdrücke vereinfachen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Vereinfachen Sie den folgenden logischen Ausdruck:\n\n  A ∨ (¬A ∧ B)',
            hint: h(
              <>
                <p>Nützliche <span className="hint-em">Boolesche Gesetze</span>:</p>
                <ul>
                  <li>Distributivgesetz: A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)</li>
                  <li>Komplementgesetz: A ∨ ¬A = t (tautologie)</li>
                  <li>Neutrales Element: t ∧ X = X</li>
                </ul>
              </>,
              <>
                <ol>
                  <li>Erkenne Muster: Siehst du eine Struktur der Form X ∨ (¬X ∧ Y)? Das ist der Einstieg.</li>
                  <li>Wende das Distributivgesetz an: A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)</li>
                  <li>Vereinfache mit dem Komplementgesetz: A ∨ ¬A = t</li>
                  <li>Kürze mit dem neutralen Element: t ∧ X = X</li>
                </ol>
              </>,
              <>
                <p>Wahrheitstafelprobe:</p>
                <pre className="hint-code-block">{`A | B | A∨(¬A∧B) | A∨B
w | w |     w    |  w
w | f |     w    |  w
f | w |     w    |  w
f | f |     f    |  f  ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> A∨(¬A∧B) = (A∨¬A)∧B direkt (Distributivgesetz falsch) → <strong>✅ Richtig:</strong> Distributivgesetz: A∨(B∧C) = (A∨B)∧(A∨C); hier A∨(¬A∧B) = (A∨¬A)∧(A∨B)</li>
                <li><strong>❌ Falsch:</strong> A∨¬A = f → <strong>✅ Richtig:</strong> A∨¬A = t (Tautologie: immer wahr, unabhängig von A)</li>
              </ul>,
              <p>Was bedeutet es, dass A∨(¬A∧B) = A∨B gilt — welche Rolle spielt der Term ¬A∧B, wenn A schon wahr ist? Und was passiert mit ¬A∧B, wenn A falsch ist?</p>,
            ),
            solution: 'A ∨ (¬A ∧ B)\n= (A ∨ ¬A) ∧ (A ∨ B)   (Distributivgesetz)\n= t ∧ (A ∨ B)            (A ∨ ¬A = t)\n= A ∨ B                   (t ∧ X = X)',
          },
          {
            letter: 'b',
            text: 'Vereinfachen Sie den folgenden logischen Ausdruck\n(aus der digitalen Schaltungstechnik!):\n\n  ¬(A ∧ B) ∨ ¬(¬A ∨ B)',
            hint: h(
              <>
                <p><span className="hint-em">De Morgansche Gesetze</span> als Einstieg:</p>
                <ul>
                  <li>¬(X ∧ Y) = ¬X ∨ ¬Y</li>
                  <li>¬(X ∨ Y) = ¬X ∧ ¬Y</li>
                </ul>
                <p>Wende De Morgan auf beide Terme an, dann vereinfache mit Absorption.</p>
              </>,
              <>
                <ol>
                  <li>Wende De Morgan auf beide Terme an: ¬(X∧Y) = ¬X∨¬Y und ¬(X∨Y) = ¬X∧¬Y</li>
                  <li>Klammere Terme um (Assoziativität), um Kandidaten für das Absorptionsgesetz freizulegen</li>
                  <li>Wende Absorption an: X ∨ (Y ∧ X) = X (mit passendem X und Y)</li>
                  <li>Wende nochmals De Morgan an, um die Endform zu erhalten</li>
                </ol>
              </>,
              <>
                <p>Absorptionsgesetz:</p>
                <pre className="hint-code-block">{`X ∨ (Y ∧ X) = X
Hier: ¬B ∨ (A ∧ ¬B) = ¬B  (setze X=¬B, Y=A)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ¬(¬A∨B) = ¬A∧B (De Morgan falsch) → <strong>✅ Richtig:</strong> ¬(¬A∨B) = ¬(¬A)∧¬B = A∧¬B (beide Terme werden negiert)</li>
                <li><strong>❌ Falsch:</strong> Absorptionsgesetz nicht erkennen → <strong>✅ Richtig:</strong> X∨(Y∧X) = X; hier mit X=¬B, Y=A: ¬B∨(A∧¬B) = ¬B</li>
              </ul>,
              <p>Was sagt das Absorptionsgesetz X ∨ (Y ∧ X) = X intuitiv aus — warum „absorbiert" X den Term (Y ∧ X)? Welche Bedingung muss erfüllt sein, damit X wahr ist, und macht dann (Y ∧ X) noch einen Unterschied?</p>,
            ),
            solution: '¬(A ∧ B) ∨ ¬(¬A ∨ B)\n= (¬A ∨ ¬B) ∨ (A ∧ ¬B)   (De Morgan)\n= ¬A ∨ (¬B ∨ (A ∧ ¬B))   (Assoziativität)\n= ¬A ∨ ¬B                  (Absorption: X ∨ (Y ∧ X) = X)\n= ¬(A ∧ B)                 (De Morgan)',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt3',
    nr: '3',
    titel: 'Summenzeichen, Binomialkoeffizienten, vollständige Induktion',
    aufgaben: [
      {
        id: 'b3a1',
        nr: 1,
        title: 'Summenzeichen',
        subaufgaben: [
          {
            letter: 'a',
            text: '1² + 2³ + 3⁴ + 4⁵ + 5⁶',
            hint: h(
              <>
                <p>Das <span className="hint-em">Summenzeichen Σ</span> fasst gleichartige Terme kompakt zusammen:</p>
                <p>Σ(k=a bis b) f(k) = f(a) + f(a+1) + … + f(b)</p>
                <p>Gesucht: Formel f(k) für den k-ten Term sowie Anfangs- und Endindex.</p>
              </>,
              <>
                <ol>
                  <li>Tabelliere die Terme und den dazugehörigen Laufindex k</li>
                  <li>Erkenne den Zusammenhang: Wie hängen Basis und Exponent jeweils von k ab?</li>
                  <li>Formuliere f(k) und bestimme Anfangsindex (erstes k) und Endindex (letztes k)</li>
                  <li>Überprüfe f(k) für den ersten und letzten Term</li>
                </ol>
              </>,
              <>
                <p>Beispiel: 1 + 4 + 9 + 16 = Σ(k=1 bis 4) k²</p>
                <pre className="hint-code-block">{`k=1: 1² = 1
k=2: 2² = 4
k=3: 3² = 9
k=4: 4² = 16 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> k=0 als Startindex → <strong>✅ Richtig:</strong> Bei k=0 wäre der erste Term 0^(0+1)=0, aber der erste Term ist 1²; also k=1</li>
                <li><strong>❌ Falsch:</strong> f(k) = kᵏ (Exponent = k) → <strong>✅ Richtig:</strong> f(k) = k^(k+1) (Exponent = k+1); Probe: k=2 → 2³=8 ✓, kᵏ würde 2²=4 ergeben ✗</li>
              </ul>,
              <p>Worin besteht der Unterschied zwischen einer Summe wie k² (Quadrat des Index) und k^(k+1) (Index als Basis und Exponent)? Was macht diese Summe schwierig zu berechnen, aber einfach zu schreiben?</p>,
            ),
            solution: '5\nΣ k^(k+1) = 1² + 2³ + 3⁴ + 4⁵ + 5⁶\nk=1',
          },
          {
            letter: 'b',
            text: <>{'1 + '}<Frac n="1" d="3" />{' + '}<Frac n="1" d="9" />{' + '}<Frac n="1" d="27" /></>,
            hint: h(
              <>
                <p>Die Terme sind <span className="hint-em">Potenzen von 1/3</span>: (1/3)⁰=1, (1/3)¹=1/3, usw. Mit Startindex k=0 beginnt die Folge beim richtigen ersten Term.</p>
              </>,
              <>
                <ol>
                  <li>Erkenne den Typ der Folge: Wächst oder fällt sie geometrisch (konstanter Quotient)?</li>
                  <li>Bestimme den Quotienten q = (zweiter Term)/(erster Term)</li>
                  <li>Wähle Startindex k=0 so, dass der erste Term q⁰ = 1 ergibt</li>
                  <li>Schreibe f(k) = qᵏ und bestimme den Endindex</li>
                </ol>
              </>,
              <>
                <p>Beispiel: 1 + 2 + 4 + 8 = Σ(k=0 bis 3) 2ᵏ</p>
                <pre className="hint-code-block">{`k=0: 2⁰ = 1
k=1: 2¹ = 2
k=2: 2² = 4
k=3: 2³ = 8 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> k=1 als Startindex → <strong>✅ Richtig:</strong> (1/3)⁰ = 1 ist der erste Term; k muss bei 0 beginnen</li>
                <li><strong>❌ Falsch:</strong> f(k) = 1/k (1/1, 1/2, 1/3...) → <strong>✅ Richtig:</strong> f(k) = (1/3)ᵏ (geometrische Folge mit q=1/3); f(1)=1/3 ✓, 1/1=1 ≠ 1/3 ✗</li>
              </ul>,
              <p>Warum ist k=0 der natürliche Startindex für geometrische Folgen — und was würde passieren, wenn man k=1 als Start wählt? Welchen Term würde man dann verlieren?</p>,
            ),
            solution: '3\nΣ (1/3)ᵏ = 1 + 1/3 + 1/9 + 1/27\nk=0',
          },
          {
            letter: 'c',
            text: '4 + 7 + 10 + 13 + 16 + 19 + 22',
            hint: h(
              <>
                <p>Eine <span className="hint-em">arithmetische Folge</span> hat konstante Differenz d. Für Startindex k=0 gilt der Term f(k) = a₀ + d·k.</p>
              </>,
              <>
                <ol>
                  <li>Prüfe, ob die Differenz zwischen aufeinanderfolgenden Termen konstant ist — das identifiziert eine arithmetische Folge</li>
                  <li>Notiere die konstante Differenz d und den ersten Term a₀</li>
                  <li>Schreibe f(k) = a₀ + d·k mit k=0 als Startindex</li>
                  <li>Bestimme den Endindex: Bei n Termen ist der letzte Index k = n−1</li>
                </ol>
              </>,
              <>
                <p>Beispiel: 1 + 3 + 5 + 7 = Σ(k=0 bis 3) (1+2k)</p>
                <pre className="hint-code-block">{`k=0: 1+0=1,  k=1: 1+2=3,  k=2: 1+4=5,  k=3: 1+6=7 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Endindex k=7 (weil 7 Terme) → <strong>✅ Richtig:</strong> Mit k=0 bis k=6 gibt es 7 Terme (0,1,2,3,4,5,6 = 7 Werte)</li>
                <li><strong>❌ Falsch:</strong> f(k) = 3k (Startterm vergessen) → <strong>✅ Richtig:</strong> Erster Term ist 4 ≠ 0; f(k) = 4+3k; k=0: 4+0=4 ✓</li>
              </ul>,
              <p>Warum hat eine arithmetische Folge mit Startindex k=0 und Endindex k=n genau n+1 Terme — nicht n? Und warum würde f(k) = 3k (ohne den Startterm) diese Summe falsch darstellen?</p>,
            ),
            solution: '6\nΣ (4 + 3k) = 4 + 7 + 10 + 13 + 16 + 19 + 22\nk=0',
          },
        ],
      },
      {
        id: 'b3a2',
        nr: 2,
        title: 'Identitäten mit dem Binomischen Lehrsatz',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Zeigen Sie für n ∈ ℕ*:\n  Σ(k=0 bis n) C(n,k) = 2ⁿ',
            hint: h(
              <>
                <p>Der <span className="hint-em">Binomische Lehrsatz</span> lautet:</p>
                <p>(x+y)ⁿ = Σ(k=0 bis n) C(n,k) · x^(n−k) · yᵏ</p>
                <p>Durch geschickte Wahl von x und y kann man direkt auf 2ⁿ kommen.</p>
              </>,
              <>
                <ol>
                  <li>Wähle x und y so, dass (x+y)ⁿ den Zielwert 2ⁿ ergibt</li>
                  <li>Setze diese Werte in den Binomischen Lehrsatz ein</li>
                  <li>Vereinfache die x^(n−k) · yᵏ Terme mit den gewählten Werten</li>
                  <li>Lies das Ergebnis ab</li>
                </ol>
              </>,
              <>
                <p>Probe für n=2: C(2,0)+C(2,1)+C(2,2) = 1+2+1 = 4 = 2² ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Binomischen Lehrsatz als Σ C(n,k)·xᵏ·y^(n−k) statt Σ C(n,k)·x^(n−k)·yᵏ → <strong>✅ Richtig:</strong> Das Ergebnis ist das gleiche (da man x=y=1 einsetzt), aber konsistente Notation ist wichtig</li>
                <li><strong>❌ Falsch:</strong> 1^(n−k)·1ᵏ = 1 ohne Begründung → <strong>✅ Richtig:</strong> 1 hoch jede positive Zahl ist 1; 1^m = 1 für alle m ≥ 0</li>
              </ul>,
              <p>Warum ist der Binomische Lehrsatz eine nützliche Brücke für diese Identität? Was ist die Kernidee: Welche algebraische Struktur verbindet 2ⁿ mit Binomialkoeffizienten?</p>,
            ),
            solution: '       n\n2ⁿ = (1+1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·1ᵏ\n                              k=0\n   n\n = Σ C(n,k)  ✓\n   k=0',
          },
          {
            letter: 'b',
            text: 'Zeigen Sie für n ∈ ℕ*:\n  Σ(k=0 bis n) (−1)ᵏ · C(n,k) = 0',
            hint: h(
              <>
                <p>Analog zu (a): wähle im Binomischen Lehrsatz <span className="hint-em">x = 1, y = −1</span>. Dann wird (x+y)ⁿ = 0ⁿ = 0 (für n ≥ 1).</p>
              </>,
              <>
                <ol>
                  <li>Wähle x und y so, dass (x+y)ⁿ den Zielwert 0 ergibt (für n ≥ 1)</li>
                  <li>Setze diese Werte in den Binomischen Lehrsatz ein</li>
                  <li>Vereinfache die Terme — beachte das entstehende Vorzeichen-Muster</li>
                  <li>Erkläre, warum die Formel nur für n ≥ 1 gilt</li>
                </ol>
              </>,
              <>
                <p>Probe für n=2: (−1)⁰·1 + (−1)¹·2 + (−1)²·1 = 1 − 2 + 1 = 0 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Behaupten, 0⁰ = 0 und damit die Formel auch für n=0 gilt → <strong>✅ Richtig:</strong> 0⁰ ist konventionell 1 (nicht 0); für n=0 würde die rechte Seite 1 sein, nicht 0 → daher n ≥ 1</li>
                <li><strong>❌ Falsch:</strong> (1+(−1))ⁿ = 1+1 = 2 falsch auswerten → <strong>✅ Richtig:</strong> 1+(−1) = 0, also 0ⁿ = 0 für n ≥ 1</li>
              </ul>,
              <p>Die Summe Σ(−1)ᵏ·C(n,k) hat abwechselnde Vorzeichen. Was sagt die Identität inhaltlich — welche kombinatorische Aussage steckt dahinter? (Hinweis: Teilmengen gerader vs. ungerader Kardinalität)</p>,
            ),
            solution: '         n\n0 = (1−1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·(−1)ᵏ\n                               k=0\n   n\n = Σ (−1)ᵏ C(n,k)  ✓\n   k=0',
          },
        ],
      },
      {
        id: 'b3a3',
        nr: 3,
        title: 'Vollständige Induktion',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Für jedes n ∈ ℕ* gilt:\n  Σ(k=1 bis n) '}
                <Frac n="1" d="k(k+1)" />
                {' = 1 − '}
                <Frac n="1" d="n+1" />
              </>
            ),
            hint: h(
              <>
                <p>Bei der <span className="hint-em">vollständigen Induktion</span> beweist man A(n) in zwei Schritten:</p>
                <ul>
                  <li><strong>IA</strong>: Basisfall A(n₀) direkt nachrechnen</li>
                  <li><strong>IS</strong>: Aus IV A(n) folgt A(n+1) – den nächsten Term zur Summe addieren und umformen</li>
                </ul>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Setze n=1 in LHS und RHS ein und prüfe Gleichheit</li>
                  <li><strong>IS-Ansatz:</strong> Schreibe Σ(k=1..n+1) als Σ(k=1..n) + letzter Term (n+1)</li>
                  <li><strong>IV einsetzen:</strong> Ersetze Σ(k=1..n) durch den Ausdruck der IV</li>
                  <li><strong>Umformen:</strong> Bringe die Brüche auf gemeinsamen Nenner und vereinfache bis RHS(n+1) erscheint</li>
                </ol>
              </>,
              <>
                <p>Probe für n=2: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3 = 1 − 1/3 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Im IS die Summe Σ(k=1..n+1) direkt auswerten ohne IV zu nutzen → <strong>✅ Richtig:</strong> Letzten Term abtrennen: Σ(k=1..n+1) = Σ(k=1..n) + (n+1)-ter Term, dann IV einsetzen</li>
                <li><strong>❌ Falsch:</strong> Gemeinsamer Nenner für −1/(n+1) + 1/((n+1)(n+2)) ist (n+1) → <strong>✅ Richtig:</strong> Gemeinsamer Nenner ist (n+1)(n+2); dann: −(n+2)/((n+1)(n+2)) + 1/((n+1)(n+2)) = −(n+1)/((n+1)(n+2)) = −1/(n+2)</li>
              </ul>,
              <p>Warum ist die Teleskopstruktur 1 − 1/(n+1) so nützlich für diesen Induktionsbeweis? Was macht es einfach, den nächsten Term anzuhängen — und wie erkennt man vorher, dass diese Darstellung funktionieren wird?</p>,
            ),
            solution: (
              <>
                {'IA (n=1): '}<Frac n="1" d="1·2" />{' = '}<Frac n="1" d="2" />{' = 1 − '}<Frac n="1" d="2" />{' ✓\n\n'}
                {'IS: Σ_{k=1}^{n+1} = Σ_{k=1}^n + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
                {'  = (1 − '}<Frac n="1" d="n+1" />{') + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
                {'  = 1 − '}<Frac n="n+2" d="(n+1)(n+2)" />{' + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
                {'  = 1 − '}<Frac n="n+1" d="(n+1)(n+2)" />{' = 1 − '}<Frac n="1" d="n+2" />{' ✓ □'}
              </>
            ),
          },
          {
            letter: 'b',
            text: 'Für jedes n ∈ ℕ gilt: 2ⁿ ≥ n + 1',
            hint: h(
              <>
                <p>Im IS muss die <span className="hint-em">Induktionsvoraussetzung (IV)</span> 2ⁿ ≥ n+1 genutzt werden. Starte mit 2^(n+1) = 2·2ⁿ und schätze mit der IV ab.</p>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Prüfe den Basisfall n=0 direkt</li>
                  <li><strong>IS-Ansatz:</strong> Schreibe 2^(n+1) = 2·2ⁿ, um die IV nutzen zu können</li>
                  <li><strong>IV einsetzen:</strong> Ersetze 2ⁿ durch die untere Schranke aus der IV</li>
                  <li><strong>Weiterabschätzen:</strong> Zeige, dass das Ergebnis ≥ (n+1)+1 gilt — hierfür n ≥ 0 nutzen</li>
                </ol>
              </>,
              <>
                <p>Warum gilt 2n+2 ≥ n+2? Weil n ≥ 0, also n ≥ 0, d. h. n+2 ≤ 2n+2 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 2^(n+1) direkt ohne Umschreibung lassen → <strong>✅ Richtig:</strong> 2^(n+1) = 2·2ⁿ, dann kann man 2ⁿ ≥ n+1 (IV) einsetzen: 2·2ⁿ ≥ 2(n+1) = 2n+2</li>
                <li><strong>❌ Falsch:</strong> 2n+2 ≥ n+2 ohne Begründung → <strong>✅ Richtig:</strong> 2n+2 ≥ n+2 ⟺ n ≥ 0, was für n ∈ ℕ gilt</li>
              </ul>,
              <p>Warum wächst 2ⁿ schneller als n+1 — obwohl es für n=0 und n=1 gleichauf ist? Was sagt der Induktionsbeweis über exponentielles vs. lineares Wachstum aus?</p>,
            ),
            solution: 'IA (n=0): 2⁰ = 1 ≥ 1 ✓\n\nIS: Sei n ∈ ℕ, angenommen 2ⁿ ≥ n+1 (IV).\n\n2^(n+1) = 2·2ⁿ ≥(IV) 2(n+1) = 2n+2 ≥(n≥0) n+2 ✓\n\nSomit ist A(n+1) wahr. □',
          },
          {
            letter: 'c',
            text: 'Für jedes n ∈ ℕ* ist 3ⁿ − 3 ohne Rest durch 6 teilbar.',
            hint: h(
              <>
                <p>Schreibe 3^(n+1) − 3 so um, dass (3ⁿ − 3) aus der IV erscheint. Nutze dann: wenn 6 | a und 6 | b, dann gilt 6 | (a+b).</p>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Prüfe 3¹ − 3 direkt auf Teilbarkeit durch 6</li>
                  <li><strong>IS-Ansatz:</strong> Schreibe 3^(n+1) − 3 um, sodass (3ⁿ − 3) aus der IV sichtbar wird</li>
                  <li><strong>Trick:</strong> Füge +c−c = 0 ein, um die IV-Struktur freizulegen</li>
                  <li><strong>Schluss:</strong> Nutze: wenn 6 | a und 6 | b, dann 6 | (a+b)</li>
                </ol>
              </>,
              <>
                <p>Schlüsselumformung: 3ⁿ − 1 = (3ⁿ − 3) + 2, damit (3ⁿ − 3) aus der IV sichtbar wird.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 3ⁿ−1 = 3ⁿ−3 (die 1 als 3 geschrieben) → <strong>✅ Richtig:</strong> 3(3ⁿ−1) = 3(3ⁿ−3+2) = 3(3ⁿ−3) + 6; der Trick ist +2−2 = 0 einzufügen</li>
                <li><strong>❌ Falsch:</strong> 3(3ⁿ−3) durch 6 teilbar, ohne Begründung → <strong>✅ Richtig:</strong> IV: 3ⁿ−3 = 6m für ein m ∈ ℤ; also 3(3ⁿ−3) = 18m = 6·3m → durch 6 teilbar</li>
              </ul>,
              <p>Was ist die Kernidee beim Umschreiben von 3^(n+1)−3? Warum funktioniert der Trick 3ⁿ−1 = (3ⁿ−3)+2, und wie taucht die IV-Struktur dadurch auf?</p>,
            ),
            solution: 'IA (n=1): 3¹ − 3 = 0, 6 | 0 ✓\n\nIS: Sei n ∈ ℕ*, angenommen 6 | (3ⁿ−3) (IV).\n\n3^(n+1) − 3 = 3·3ⁿ − 3 = 3(3ⁿ−1)\n            = 3(3ⁿ−3+2) = 3(3ⁿ−3) + 6\n\nNach IV: 6 | (3ⁿ−3), also 6 | 3(3ⁿ−3).\nZusammen mit 6 | 6 folgt: 6 | (3^(n+1)−3). ✓ □',
          },
        ],
      },
      {
        id: 'b3a4',
        nr: 4,
        title: 'Potenzmenge (Knobelaufgabe)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Zeigen Sie mit vollständiger Induktion: Für jedes n ∈ ℕ* hat die Potenzmenge von {1,…,n} genau 2ⁿ Elemente.',
            hint: h(
              <>
                <p>Die <span className="hint-em">Potenzmenge</span> 𝒫(M) enthält alle Teilmengen von M. Beim IS erklärt man, wie 𝒫({'{1,…,n+1}'}) aus 𝒫({'{1,…,n}'}) entsteht: man teilt nach Teilmengen mit und ohne das Element n+1.</p>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Bestimme 𝒫({'{1}'}) explizit und zähle die Elemente</li>
                  <li><strong>IS-Ansatz:</strong> Teile 𝒫({'{1,…,n+1}'}) in zwei disjunkte Klassen auf: Teilmengen ohne n+1 und Teilmengen mit n+1</li>
                  <li><strong>IV anwenden:</strong> Erkläre, warum jede Klasse genau 2ⁿ Elemente hat (Bijektion!)</li>
                  <li><strong>Schluss:</strong> Beide Klassen zusammen: 2ⁿ + 2ⁿ = 2^(n+1)</li>
                </ol>
              </>,
              <>
                <p>Für n=2: 𝒫({'{1,2}'}) = {'{∅,{1},{2},{1,2}}'} → 4 = 2² ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Disjunktheit der beiden Klassen nicht begründen → <strong>✅ Richtig:</strong> Klasse 1 enthält Teilmengen ohne (n+1); Klasse 2 enthält Teilmengen mit (n+1) — ein Überschneiden ist unmöglich</li>
                <li><strong>❌ Falsch:</strong> Annehmen, die zweite Klasse hat 2ⁿ+1 Elemente → <strong>✅ Richtig:</strong> Die Abbildung M ↦ M∪{'{n+1}'} ist eine Bijektion von Klasse 1 auf Klasse 2 → beide haben gleich viele (= 2ⁿ) Elemente</li>
              </ul>,
              <p>Was ist die Bijektion zwischen „Teilmengen ohne n+1" und „Teilmengen mit n+1", und warum garantiert sie gleiche Kardinalität? Und warum ist dieser Beweis eigentlich keine Überraschung — was sagt er über die binäre Entscheidung für jedes Element aus?</p>,
            ),
            solution: 'IA (n=1): 𝒫({1}) = {∅,{1}}, |𝒫({1})| = 2 = 2¹ ✓\n\nIS: Sei n ∈ ℕ*, angenommen |𝒫({1,…,n})| = 2ⁿ (IV).\n\n𝒫({1,…,n+1}) = 𝒫({1,…,n}) ∪ {M ∪{n+1} : M ∈ 𝒫({1,…,n})}\n\nDiese Vereinigung ist disjunkt, beide Teile haben 2ⁿ Elemente.\n→ |𝒫({1,…,n+1})| = 2ⁿ + 2ⁿ = 2·2ⁿ = 2^(n+1) ✓ □',
          },
        ],
      },
      {
        id: 'b3a5',
        nr: 5,
        title: 'Identitäten der Binomialkoeffizienten',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Zeigen Sie: C(n,1) = n = C(n, n−1),  falls n ∈ ℕ*',
            hint: h(
              <>
                <p>Wende die <span className="hint-em">Formel C(n,k) = n! / (k!(n−k)!)</span> direkt für k=1 und k=n−1 an. Die Fakultäten kürzen sich weg.</p>
              </>,
              <>
                <ol>
                  <li>Setze k=1 (bzw. k=n−1) in die Formel C(n,k) = n! / (k!(n−k)!) ein</li>
                  <li>Vereinfache den Nenner, indem du n! durch die Faktoren im Nenner kürzt</li>
                  <li>Nutze (n−(n−1)) = 1, um den zweiten Teil zu vereinfachen</li>
                </ol>
              </>,
              <>
                <p>Probe: C(5,1) = 5, C(5,4) = 5 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 0! = 0 → <strong>✅ Richtig:</strong> 0! = 1 (per Definition; leeres Produkt ist 1)</li>
                <li><strong>❌ Falsch:</strong> n−(n−1) = n−n−1 = −1 → <strong>✅ Richtig:</strong> n−(n−1) = n−n+1 = 1 (Klammer richtig auflösen!)</li>
              </ul>,
              <p>Was bedeutet C(n,1) = n kombinatorisch — auf wie viele Arten kann man 1 Element aus n auswählen? Und was bedeutet C(n,n−1) = n: Warum sind „1 wählen" und „n−1 weglassen" äquivalent?</p>,
            ),
            solution: 'C(n,1) = n!/(1!·(n−1)!) = n·(n−1)!/(n−1)! = n\n\nC(n,n−1) = n!/((n−1)!·1!) = n·(n−1)!/(n−1)! = n',
          },
          {
            letter: 'b',
            text: 'Zeigen Sie: C(n,k) = C(n, n−k),  falls n, k ∈ ℕ und k ≤ n.',
            hint: h(
              <>
                <p>Wende die Formel für C(n, n−k) an und vereinfache. Der Ausdruck n−(n−k) vereinfacht sich zu k.</p>
              </>,
              <>
                <ol>
                  <li>Setze n−k in die Formel ein: C(n, n−k) = n! / ((n−k)! · (n−(n−k))!)</li>
                  <li>Vereinfache n−(n−k) sorgfältig (Klammer beachten!)</li>
                  <li>Vergleiche das Ergebnis mit der Definition von C(n,k)</li>
                </ol>
              </>,
              <>
                <p>Anschaulich: k Elemente wählen entspricht (n−k) Elemente weglassen – dieselbe Anzahl an Möglichkeiten.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> n−(n−k) = n−n−k = −k (Klammer falsch aufgelöst) → <strong>✅ Richtig:</strong> n−(n−k) = n−n+k = k (die Klammer hat ein Minus davor, also Vorzeichen innen wechseln)</li>
              </ul>,
              <p>Was sagt C(n,k) = C(n,n−k) kombinatorisch aus — warum ist die Anzahl der Möglichkeiten, k Elemente auszuwählen, dieselbe wie n−k Elemente auszulassen?</p>,
            ),
            solution: 'C(n,n−k) = n! / ((n−k)! · (n−(n−k))!)\n          = n! / ((n−k)! · k!)\n          = C(n,k)  ✓',
          },
          {
            letter: 'c',
            text: 'Zeigen Sie: C(n,k) + C(n,k+1) = C(n+1,k+1),  falls n ∈ ℕ*, k ∈ ℕ, k+1 ≤ n.',
            hint: h(
              <>
                <p>Schreibe beide Koeffizienten mit der Formel aus und bringe sie auf den <span className="hint-em">gemeinsamen Nenner (k+1)!(n−k)!</span>.</p>
              </>,
              <>
                <ol>
                  <li>Schreibe C(n,k) und C(n,k+1) als Brüche mit n! im Zähler</li>
                  <li>Bestimme den gemeinsamen Nenner: (k+1)! · (n−k)!</li>
                  <li>Erweitere beide Brüche auf diesen gemeinsamen Nenner</li>
                  <li>Addiere die Zähler und vereinfache — beachte dass k und n−k sich aufheben</li>
                  <li>Erkenne das Ergebnis als C(n+1, k+1)</li>
                </ol>
              </>,
              <>
                <p>Das ist das <span className="hint-em">Pascalsche Dreieck</span>: jede Zahl = Summe der zwei Zahlen darüber.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> k+1+n−k = n+2k+1 oder n+1−2k → <strong>✅ Richtig:</strong> k+1+n−k = n+1 (die k heben sich auf: +k−k = 0)</li>
                <li><strong>❌ Falsch:</strong> Gemeinsamen Nenner als k!·(n−k−1)! wählen → <strong>✅ Richtig:</strong> (k+1)!·(n−k)! ist der gemeinsame Nenner; dann (n−k)! für ersten Term: ·(k+1)/(k+1); und k! für zweiten Term: ·(n−k)/(n−k)</li>
              </ul>,
              <p>Was bedeutet C(n,k) + C(n,k+1) = C(n+1,k+1) im Pascalschen Dreieck: Welche zwei Einträge erzeugen welchen Eintrag in der nächsten Zeile — und warum ergibt das kombinatorisch Sinn?</p>,
            ),
            solution: 'C(n,k) + C(n,k+1)\n= n!/(k!(n−k)!) + n!/((k+1)!(n−k−1)!)\n\nGem. Nenner (k+1)!(n−k)!:\n= n!(k+1)/((k+1)!(n−k)!) + n!(n−k)/((k+1)!(n−k)!)\n= n!(k+1+n−k) / ((k+1)!(n−k)!)\n= (n+1)! / ((k+1)!(n−k)!)\n= C(n+1,k+1)  ✓',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt4',
    nr: '4',
    titel: 'vollständige Induktion, Zahlbereiche',
    aufgaben: [
      {
        id: 'b4a1',
        nr: 1,
        title: 'Produktformel per Induktion',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Zeigen Sie mit vollständiger Induktion, dass für jedes n ∈ ℕ* gilt:\n\n'}
                {'∏(k=1 bis n) (1 + 1/k) = n + 1'}
              </>
            ),
            hint: h(
              <>
                <p>Das ist ein <span className="hint-em">Induktionsbeweis über ein Produkt</span>. Im IS schreibt man das Produkt bis n+1 als Produkt bis n (= IV) mal dem neuen Faktor.</p>
                <p>Beachte: Die Induktionsbehauptung A(n) lautet: ∏(k=1..n)(1+1/k) = n+1.</p>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Setze n=1 in LHS und RHS ein und prüfe Gleichheit</li>
                  <li><strong>IS-Ansatz:</strong> Schreibe ∏(k=1..n+1) = ∏(k=1..n) · (letzter Faktor mit k=n+1)</li>
                  <li><strong>IV einsetzen:</strong> Ersetze ∏(k=1..n) durch den Ausdruck der IV</li>
                  <li><strong>Vereinfachen:</strong> Multipliziere aus und zeige, dass das Ergebnis n+2 ergibt</li>
                </ol>
              </>,
              <>
                <p>Analoges Beispiel: ∏(k=1..n) k = n! (Fakultät) per Induktion.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Den Schritt (IV) nicht markieren → <strong>✅ Richtig:</strong> Explizit schreiben „=(IV)" oder „[nach IV]" um zu zeigen, wo die Induktionsvoraussetzung eingesetzt wird</li>
                <li><strong>❌ Falsch:</strong> IA bei n=0 beginnen → <strong>✅ Richtig:</strong> n ∈ ℕ* bedeutet n ≥ 1; der Basisfall ist n=1 (das leere Produkt bei n=0 wäre 1, nicht 1+1=2)</li>
              </ul>,
              <p>Warum lässt sich das Produkt ∏(k=1..n)(1+1/k) so einfach induktiv behandeln — welche Eigenschaft des Produkts macht den IS-Schritt besonders direkt?</p>,
            ),
            solution: 'A(n): ∏(k=1..n)(1+1/k) = n+1\n\nIA (n=1): ∏(k=1..1)(1+1/k) = 1+1 = 2 = 1+1 ✓\n\nIS (n → n+1): Sei n ∈ ℕ*. Angenommen ∏(k=1..n)(1+1/k) = n+1 (IV).\n\n∏(k=1..n+1)(1+1/k)\n= (1+1/(n+1)) · ∏(k=1..n)(1+1/k)\n=(IV) (1+1/(n+1)) · (n+1)\n= n+1+1 = n+2  ✓  □',
          },
        ],
      },
      {
        id: 'b4a2',
        nr: 2,
        title: 'Bernoulli\'sche Ungleichung',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei x ∈ [−1, ∞). Zeigen Sie mit vollständiger Induktion, dass für jedes n ∈ ℕ die Ungleichung\n\n(1 + x)ⁿ ≥ 1 + nx\n\ngilt. An welcher Stelle haben Sie die Voraussetzung x ≥ −1 verwendet?',
            hint: h(
              <>
                <p>Im IS multipliziert man beide Seiten von (IV) mit (1+x). Damit das die Ungleichungsrichtung erhält, muss <span className="hint-em">1+x ≥ 0</span> sein — das ist genau die Voraussetzung x ≥ −1.</p>
              </>,
              <>
                <ol>
                  <li><strong>IA:</strong> Prüfe den Basisfall n=0 direkt</li>
                  <li><strong>IS-Ansatz:</strong> Schreibe (1+x)^(n+1) = (1+x)·(1+x)ⁿ</li>
                  <li><strong>IV einsetzen:</strong> Ersetze (1+x)ⁿ durch (1+nx) — aber nur wenn (1+x) ≥ 0 ist (Voraussetzung!)</li>
                  <li><strong>Ausmultiplizieren:</strong> Forme das Produkt aus und finde den „Überrest" nach dem Subtrahieren von 1+(n+1)x</li>
                  <li><strong>Abschätzen:</strong> Zeige, dass der Überrest ≥ 0 ist</li>
                </ol>
              </>,
              <>
                <p>Warum nx² ≥ 0? Weil n ≥ 0 und x² ≥ 0 für alle reellen x.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Voraussetzung x ≥ −1 nicht erwähnen → <strong>✅ Richtig:</strong> Beim Multiplizieren der IV mit (1+x) muss 1+x ≥ 0 stehen, sonst dreht die Ungleichung — das ist genau x ≥ −1</li>
                <li><strong>❌ Falsch:</strong> nx² als negative Zahl behandeln → <strong>✅ Richtig:</strong> n ≥ 0 und x² ≥ 0 → nx² ≥ 0; daher 1+(n+1)x+nx² ≥ 1+(n+1)x</li>
              </ul>,
              <p>Warum darf man (IV) mit (1+x) multiplizieren ohne die Ungleichung umzukehren?</p>,
            ),
            solution: 'IA (n=0): (1+x)⁰ = 1 ≥ 1+0·x = 1  ✓\n\nIS: Sei n ∈ ℕ. Angenommen (1+x)ⁿ ≥ 1+nx (IV).\n\n(1+x)^(n+1) = (1+x)(1+x)ⁿ\n            ≥ (1+x)(1+nx)   [IV und x ≥ −1 → 1+x ≥ 0, (*) ]\n            = 1 + (n+1)x + nx²\n            ≥ 1 + (n+1)x    [da nx² ≥ 0]  ✓  □\n\nVoraussetzung x ≥ −1 wurde bei (*) verwendet: Wäre 1+x < 0, würde sich die Ungleichungsrichtung umkehren.',
          },
        ],
      },
      {
        id: 'b4a3',
        nr: 3,
        title: 'Mengen als Intervalle',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Schreiben Sie als Intervall oder Vereinigung von Intervallen:\n\n'}
                {'A := { x ∈ ℝ\\{9} : 4/(x−9) ≤ 2 }'}
              </>
            ),
            hint: h(
              <>
                <p>Bei Ungleichungen mit x im Nenner muss man in <span className="hint-em">Fälle</span> aufteilen: x − 9 &gt; 0 und x − 9 &lt; 0, denn beim Multiplizieren mit einem negativen Nenner dreht sich das Ungleichungszeichen um.</p>
              </>,
              <>
                <ol>
                  <li>Identifiziere die Nullstelle des Nenners (hier: x = 9) und schließe sie aus dem Definitionsbereich aus</li>
                  <li>Fall 1 (Nenner &gt; 0): Multipliziere mit dem Nenner ohne Richtungsumkehr und löse nach x</li>
                  <li>Fall 2 (Nenner &lt; 0): Multipliziere mit dem Nenner und kehre dabei die Ungleichungsrichtung um</li>
                  <li>In jedem Fall: Schneide das Ergebnis mit der Fallbedingung (x &gt; 9 bzw. x &lt; 9)</li>
                  <li>Vereinige die Lösungsmengen beider Fälle</li>
                </ol>
              </>,
              <>
                <p>Probe: x=11 → 4/2 = 2 ≤ 2 ✓; x=10 → 4/1 = 4 ≤ 2 ✗ (10 ∉ A, richtig); x=0 → 4/(−9) ≤ 2 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 4/(x−9) ≤ 2 → 4 ≤ 2(x−9) (einfach mit x−9 multipliziert) → <strong>✅ Richtig:</strong> Vorzeichen von (x−9) hängt von x ab; zwei Fälle nötig (x&gt;9 und x&lt;9)</li>
                <li><strong>❌ Falsch:</strong> x=9 in die Lösungsmenge aufnehmen → <strong>✅ Richtig:</strong> x=9 macht den Nenner 0 → undefiniert → ausgeschlossen</li>
              </ul>,
              <p>Warum kann man eine Bruchungleichung nicht einfach durch den Nenner multiplizieren, ohne Fallunterscheidung zu machen — und was würde ein falsches Ergebnis aussehen, wenn man das ignoriert?</p>,
            ),
            solution: 'Fall 1 (x > 9): 4 ≤ 2(x−9) ⟺ 11 ≤ x → [11, ∞)\nFall 2 (x < 9): 4 ≥ 2(x−9) ⟺ 11 ≥ x, zusammen x < 9 → (−∞, 9)\n\nA = [11, ∞) ∪ (−∞, 9)',
          },
          {
            letter: 'b',
            text: 'B := { x ∈ ℝ : |x + 4| ≥ 6 }',
            hint: h(
              <>
                <p>Betrag-Ungleichung |A| ≥ c mit c &gt; 0: aufteilen in <span className="hint-em">A ≥ c oder A ≤ −c</span>.</p>
                <p>Alternativ: Fallunterscheidung je nach Vorzeichen von x+4.</p>
              </>,
              <>
                <ol>
                  <li>Identifiziere die Nullstelle des Ausdrucks im Betrag (hier: x+4 = 0)</li>
                  <li>Fall 1 (x+4 ≥ 0): Ersetze |x+4| = x+4 und löse direkt</li>
                  <li>Fall 2 (x+4 &lt; 0): Ersetze |x+4| = −(x+4) und löse — Vorzeichen beachten!</li>
                  <li>In jedem Fall: Schneide mit der Fallbedingung</li>
                  <li>Vereinige die Lösungsmengen</li>
                </ol>
              </>,
              <>
                <p>Gegenprobe: x=−5 → |−1| = 1 ≥ 6? Nein → −5 ∉ B ✓ (liegt zwischen −10 und 2)</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> |x+4| ≥ 6 als −6 ≤ x+4 ≤ 6 lösen → <strong>✅ Richtig:</strong> −6 ≤ A ≤ 6 entspricht |A| ≤ 6 (kleiner-gleich!); für |A| ≥ 6 gilt A ≥ 6 oder A ≤ −6</li>
                <li><strong>❌ Falsch:</strong> Im Fall 2 beim Auflösen Vorzeichen vergessen: −(x+4) ≥ 6 → x+4 ≥ 6 → <strong>✅ Richtig:</strong> −(x+4) ≥ 6 ⟺ x+4 ≤ −6 ⟺ x ≤ −10</li>
              </ul>,
              <p>|x+4| ≥ 6 bedeutet geometrisch: Der Abstand von x zur Zahl −4 beträgt mindestens 6. Welche zwei Punkte liegen genau im Abstand 6 von −4, und sind das die Randpunkte deiner Lösung?</p>,
            ),
            solution: 'Fall 1 (x ≥ −4): x+4 ≥ 6 ⟺ x ≥ 2 → [2, ∞)\nFall 2 (x < −4): −(x+4) ≥ 6 ⟺ −10 ≥ x → (−∞, −10]\n\nB = (−∞, −10] ∪ [2, ∞)',
          },
          {
            letter: 'c',
            text: 'C := { x ∈ ℝ : |x − 2| ≥ |x + 3| }',
            hint: h(
              <>
                <p>Bei zwei Beträgen hilft eine <span className="hint-em">Fallunterscheidung an den Nullstellen</span> x=2 und x=−3. In jedem Fall fallen die Betragsstriche weg und man erhält eine einfache Ungleichung.</p>
              </>,
              <>
                <ol>
                  <li>Identifiziere die Nullstellen beider Betragsausdrücke (x=2 und x=−3) — das ergibt 3 Bereiche</li>
                  <li>Für jeden Bereich: Ersetze die Betragsstriche ohne (x ≥ 2, −3 ≤ x &lt; 2, x &lt; −3) und löse die Ungleichung</li>
                  <li>Schneide das Ergebnis jedes Falles mit der Fallbedingung</li>
                  <li>Falls eine Ungleichung eine Tautologie ergibt (immer wahr): alle x des Bereichs sind Lösung</li>
                  <li>Vereinige alle drei Fälle</li>
                </ol>
              </>,
              <>
                <p>Geometrisch: |x−2| ist der Abstand von x zur Zahl 2, |x+3| der Abstand zur −3. C sind die Punkte, die 2 mindestens so fern sind wie −3 – das ist die linke Halbgerade bis zur Mitte −1/2.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> −(x−2) = x−2 → <strong>✅ Richtig:</strong> −(x−2) = −x+2 = 2−x (Vorzeichenfehler beim Auflösen des Betrags)</li>
                <li><strong>❌ Falsch:</strong> In Fall 3 nur prüfen ob die Ungleichung gilt, ohne Fallbedingung zu intersektieren → <strong>✅ Richtig:</strong> 2 ≥ −3 ist immer wahr → alle x &lt; −3 liegen in C</li>
              </ul>,
              <p>|x−2| ist der Abstand von x zu 2, |x+3| der Abstand zu −3. Was sagt die Ungleichung |x−2| ≥ |x+3| geometrisch aus — welche Punkte auf der Zahlengeraden sind von 2 mindestens so weit entfernt wie von −3?</p>,
            ),
            solution: (
              <>
                {'Fall 1 (x ≥ 2): x−2 ≥ x+3 ⟺ −2 ≥ 3 → ∅\n'}
                {'Fall 2 (−3 ≤ x < 2): 2−x ≥ x+3 ⟺ −1/2 ≥ x → [−3, −1/2]\n'}
                {'Fall 3 (x < −3): 2−x ≥ −x−3 ⟺ 2 ≥ −3 → immer wahr → (−∞, −3)\n\n'}
                {'C = (−∞, −3) ∪ [−3, −'}<Frac n="1" d="2" />{'] = (−∞, −'}<Frac n="1" d="2" />{']'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b4a4',
        nr: 4,
        title: 'Supremum, Infimum, Maximum, Minimum',
        subaufgaben: [
          {
            letter: 'a',
            text: 'M₁ := { x ∈ ℝ : x > 0 und x² ≤ 4 }',
            hint: h(
              <>
                <p><span className="hint-em">Supremum</span>: kleinste obere Schranke (muss nicht in der Menge liegen). <span className="hint-em">Maximum</span>: größtes Element, das tatsächlich in der Menge liegt. Analoges gilt für Infimum/Minimum.</p>
              </>,
              <>
                <ol>
                  <li>Löse die Ungleichung x² ≤ 4 nach x auf und kombiniere das Ergebnis mit der zweiten Bedingung</li>
                  <li>Identifiziere den größten und kleinsten Wert der Menge</li>
                  <li>Prüfe jeweils: Liegt dieser Extremwert tatsächlich in der Menge (→ Maximum/Minimum) oder nur als Grenzwert (→ nur Supremum/Infimum)?</li>
                </ol>
              </>,
              <>
                <p>Erinnerung: max existiert ⟺ sup wird angenommen (sup ∈ M).</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> inf = 0 = min schreiben → <strong>✅ Richtig:</strong> 0 ∉ M₁ wegen der strikten Ungleichung x &gt; 0; daher existiert kein Minimum, nur inf = 0</li>
                <li><strong>❌ Falsch:</strong> sup = 2 ohne Maximum → <strong>✅ Richtig:</strong> 2 ∈ M₁ (2 &gt; 0 ✓ und 4 ≤ 4 ✓), also ist max = sup = 2</li>
              </ul>,
              <p>Was ist der konzeptuelle Unterschied zwischen sup und max: Warum existiert hier das Maximum, aber kein Minimum — und welches Zeichen (strikt oder nicht-strikt) in den Bedingungen ist dafür entscheidend?</p>,
            ),
            solution: 'M₁ = (0, 2]\n\nsup = 2 = max  (2 ∈ M₁)\ninf = 0,  min existiert nicht  (0 ∉ M₁)',
          },
          {
            letter: 'b',
            text: 'M₂ := { 1/z : z ∈ ℤ\\{0} }',
            hint: h(
              <>
                <p>Betrachte z = 1, −1, 2, −2, 3, −3, … und bestimme die entstehenden Werte. Welche Schranken werden <span className="hint-em">tatsächlich angenommen</span>?</p>
              </>,
              <>
                <ol>
                  <li>Erkunde die Menge: Welche Werte nimmt 1/z für kleine |z| (z=±1, ±2, ±3) an? Und für große |z|?</li>
                  <li>Identifiziere den größten und kleinsten tatsächlich angenommenen Wert</li>
                  <li>Prüfe: Existiert ein Element, das die Schranke annimmt (→ max/min), oder nähert man sich nur an (→ nur sup/inf)?</li>
                </ol>
              </>,
              <>
                <p>Für große |z| kommen die Werte 1/z beliebig nahe an 0, aber 0 wird nie angenommen.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> inf = 0, weil 1/z → 0 für |z| → ∞ → <strong>✅ Richtig:</strong> M₂ enthält auch negative Werte (z=−1 → −1), also ist inf = −1, nicht 0</li>
                <li><strong>❌ Falsch:</strong> min = sup = 1 ohne z=1 zu prüfen → <strong>✅ Richtig:</strong> z=1 ∈ ℤ\{0} und 1/1=1 ∈ M₂ → max = 1 wird angenommen</li>
              </ul>,
              <p>Warum nähert sich 1/z für große |z| dem Wert 0, aber M₂ enthält 0 trotzdem nicht — und was bedeutet das für den Unterschied zwischen inf und min in dieser Menge?</p>,
            ),
            solution: 'M₂ enthält Werte 1, −1, 1/2, −1/2, 1/3, −1/3, …\n\nsup = 1 = max  (bei z=1)\ninf = −1 = min  (bei z=−1)',
          },
          {
            letter: 'c',
            text: 'M₃ := { 1/n + 1/m : n, m ∈ ℕ* }',
            hint: h(
              <>
                <p>Größter Wert: n=m=1 (beide Nenner minimal). Kleinste Werte: n oder m → ∞ lässt 1/n oder 1/m → 0. Kann 0 <span className="hint-em">erreicht</span> werden?</p>
              </>,
              <>
                <ol>
                  <li>Finde den größten Wert: Wähle n und m so, dass 1/n + 1/m maximal wird</li>
                  <li>Prüfe, ob dieser Wert in M₃ liegt (→ max) oder nur Grenzwert ist</li>
                  <li>Finde den kleinsten Wert: Welche Wahl für n, m macht 1/n + 1/m beliebig klein?</li>
                  <li>Prüfe, ob 0 tatsächlich angenommen werden kann für n, m ∈ ℕ*</li>
                </ol>
              </>,
              <>
                <p>Für alle n, m ∈ ℕ* gilt 1/n + 1/m ≥ 1/n + 1/n = 2/n &gt; 0 → 0 nie erreicht.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> sup = 2 ohne max zu nennen → <strong>✅ Richtig:</strong> n=m=1 liefert 1+1=2 ∈ M₃, also ist max = 2 vorhanden</li>
                <li><strong>❌ Falsch:</strong> min = 0, weil 1/n+1/m → 0 → <strong>✅ Richtig:</strong> 0 ∉ M₃ (für alle n,m ∈ ℕ* gilt 1/n+1/m &gt; 0); inf = 0, kein Minimum</li>
              </ul>,
              <p>Warum kann 0 kein Minimum von M₃ sein, obwohl sich die Elemente beliebig nahe an 0 annähern? Was ist der grundlegende Unterschied zwischen „Grenzwert einer Folge in M₃" und „Element von M₃"?</p>,
            ),
            solution: 'Größter Wert: n=m=1 → 1+1=2, also max = sup = 2\nKleinste Werte: 1/n+1/m → 0 für n,m → ∞, aber nie = 0\n\nsup = 2 = max,  inf = 0,  min existiert nicht',
          },
          {
            letter: 'd',
            text: 'M₄ := { 1/n − 1/m : n, m ∈ ℕ* }',
            hint: h(
              <>
                <p>Suche Folgen von n, m, die den Ausdruck beliebig nahe an mögliche Schranken bringen. <span className="hint-em">Werden diese Schranken auch angenommen?</span></p>
              </>,
              <>
                <ol>
                  <li>Finde die obere Schranke: Welche Grenzwerte hat 1/n − 1/m, wenn n oder m gegen ∞ geht?</li>
                  <li>Prüfe für jede Schranke: Kann 1/n − 1/m = Schranke für n,m ∈ ℕ* gelten?</li>
                  <li>Wenn nein: sup/inf ohne max/min; erkläre warum der Extremwert unerreichbar ist</li>
                </ol>
              </>,
              <>
                <p>Vergleich zu M₃: Dort war das Maximum erreichbar (bei n=m=1), hier nicht.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> sup = max = 1, da 1/n−1/m für m→∞ gegen 1 geht → <strong>✅ Richtig:</strong> 1 wird nie angenommen (1/n−1/m=1 erfordert 1/m=0, unmöglich für m∈ℕ*); sup = 1, kein max</li>
                <li><strong>❌ Falsch:</strong> inf = 0, weil 1/n−1/m → 0 für n,m→∞ → <strong>✅ Richtig:</strong> Für n→∞, m=1 geht 1/n−1 → −1; inf = −1, kein min</li>
              </ul>,
              <p>Vergleiche M₃ und M₄: Bei M₃ existiert ein Maximum, bei M₄ nicht — obwohl beide nach oben durch 2 bzw. 1 beschränkt sind. Was unterscheidet die Erreichbarkeit des Supremums in diesen beiden Mengen?</p>,
            ),
            solution: 'n=1, m→∞: 1/n−1/m → 1 (nie genau 1)\nn→∞, m=1: 1/n−1/m → −1 (nie genau −1)\n\nsup = 1,  inf = −1,  max und min existieren nicht',
          },
        ],
      },
      {
        id: 'b4a5',
        nr: 5,
        title: 'Quantoren und y = x²',
        subaufgaben: [
          {
            letter: 'a',
            text: '∀x ∈ ℝ ∃y ∈ ℝ : y = x²',
            hint: h(
              <>
                <p>Für jedes x muss ein passendes y existieren. Da x² für jedes reelle x einen wohldefinierten Wert hat, kann man stets <span className="hint-em">y := x²</span> wählen.</p>
                <p>Beweisschema für ∀x∃y: Für ein beliebiges, aber festes x einen konkreten Zeugen y angeben, der die Bedingung erfüllt.</p>
              </>,
              <pre className="hint-code-block">{`Sei x ∈ ℝ beliebig.
Wähle y := x².
Dann gilt y = x².  ✓`}</pre>,
              <>
                <p>Weitere wahre ∀x∃y-Aussagen (zum Vergleich):</p>
                <pre className="hint-code-block">{`∀x∈ℝ ∃y∈ℝ: y = 2x      → Wähle y := 2x
∀x∈ℝ ∃y∈ℝ: y = x + 1   → Wähle y := x+1
∀n∈ℕ ∃m∈ℕ: m > n       → Wähle m := n+1

Struktur: Das y darf von x abhängen!`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ∀x∃y mit ∃y∀x gleichsetzen → <strong>✅ Richtig:</strong> Reihenfolge ist entscheidend: ∀x∃y erlaubt y=x² (y hängt von x ab); ∃y∀x würde ein festes y für alle x fordern</li>
                <li><strong>❌ Falsch:</strong> y muss eine Konstante sein → <strong>✅ Richtig:</strong> Bei ∀x∃y darf y von x abhängen; die Wahl y:=x² ist vollkommen gültig</li>
              </ul>,
              <p>Was erlaubt die Reihenfolge ∀x∃y, was ∃y∀x nicht erlaubt? Warum darf y von x abhängen — und was bedeutet das für die Universalität des Arguments?</p>,
            ),
            solution: 'Wahr. Für jedes x ∈ ℝ wähle y := x². Dann gilt y = x².',
          },
          {
            letter: 'b',
            text: '∃x ∈ ℝ ∀y ∈ ℝ : y = x²',
            hint: h(
              <>
                <p>Es müsste ein <span className="hint-em">festes x</span> geben, sodass y = x² für alle reellen y gilt. Das hieße, x² nimmt jeden Wert an — unmöglich.</p>
                <p>∃x∀y: Reihenfolge beachten! Das x wird zuerst (fest) gewählt, dann muss die Bedingung für alle y erfüllt sein.</p>
              </>,
              <pre className="hint-code-block">{`Angenommen x₀ existiert mit y = x₀² für alle y.
Wähle y = −1: −1 = x₀²
Aber x₀² ≥ 0 für alle x₀ ∈ ℝ → Widerspruch.  ✗`}</pre>,
              <>
                <p>Vergleich: ∃x∀y- vs. ∀x∃y-Aussagen:</p>
                <pre className="hint-code-block">{`∀x∃y: y=x²   → WAHR  (y darf von x abhängen: y:=x²)
∃x∀y: y=x²   → FALSCH (ein festes x für alle y unmöglich)

x² kann nicht alle reellen Zahlen annehmen — nur [0,∞).`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur y&gt;0 testen und „wahr" schließen → <strong>✅ Richtig:</strong> y=−1 hat kein reelles Urbild unter x², da x²≥0 immer → Aussage falsch</li>
                <li><strong>❌ Falsch:</strong> ∃x∀y wie ∀x∃y behandeln → <strong>✅ Richtig:</strong> Bei ∃x∀y wird x zuerst fest gewählt, dann muss y=x₀² für alle y ∈ ℝ gelten — das ist unmöglich</li>
              </ul>,
              <p>Was genau macht die Reihenfolge ∃x∀y so viel stärker als ∀x∃y — und warum scheitert die Behauptung an dem Wertebereich von x²?</p>,
            ),
            solution: 'Falsch. Für jedes fixe x gilt x² ≥ 0, also kann y = −1 nicht erfüllt werden.',
          },
          {
            letter: 'c',
            text: '∃x ∈ ℝ ∃y ∈ ℝ : y = x²',
            hint: h(
              <p>Es reicht ein <span className="hint-em">konkretes Beispiel</span> zu finden. ∃x∃y heißt: mindestens ein Paar (x, y) mit der Eigenschaft — und davon gibt es viele.</p>,
              <pre className="hint-code-block">{`Wähle x = 1, y = 1.
Dann y = 1 = 1² = x².  ✓`}</pre>,
              <>
                <p>Viele gültige Beispiele existieren:</p>
                <pre className="hint-code-block">{`x=0, y=0:   y = 0 = 0² ✓
x=1, y=1:   y = 1 = 1² ✓
x=−2, y=4:  y = 4 = (−2)² ✓
x=3, y=9:   y = 9 = 3² ✓

→ Für ∃x∃y reicht jedes dieser Paare als Beweis.`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Für ∃x∃y alle Paare prüfen wollen → <strong>✅ Richtig:</strong> Ein einziges konkretes Beispiel (z.B. x=1, y=1) genügt als Beweis für ∃x∃y</li>
                <li><strong>❌ Falsch:</strong> Zu kompliziertes Beispiel suchen → <strong>✅ Richtig:</strong> x=0, y=0 ist das einfachste: y=0=0²=x² ✓</li>
              </ul>,
              <p>Warum ist ∃x∃y die schwächste aller fünf Varianten in dieser Aufgabe — und was wäre ein Existenzaussage, die trotzdem falsch wäre?</p>,
            ),
            solution: 'Wahr. Beispiel: x = 1, y = 1, dann y = 1 = 1².',
          },
          {
            letter: 'd',
            text: '∀y ∈ ℝ ∃x ∈ ℝ : y = x²',
            hint: h(
              <>
                <p>Für jedes y müsste ein reelles x mit x² = y existieren. Betrachte <span className="hint-em">negative y</span>.</p>
                <p>Um ∀y∃x zu widerlegen, reicht ein einziges y, für das kein passendes x existiert.</p>
              </>,
              <pre className="hint-code-block">{`Wähle y = −1.
Gesucht: x mit x² = −1.
x² ≥ 0 für alle x ∈ ℝ → kein solches x.  ✗`}</pre>,
              <>
                <p>Vergleich zwischen ähnlichen Aussagen:</p>
                <pre className="hint-code-block">{`∀y∈[0,∞) ∃x∈ℝ: y=x²  → WAHR  (√y existiert!)
∀y∈ℝ     ∃x∈ℝ: y=x²  → FALSCH (y=−1 hat kein Urbild)

Der Unterschied liegt im Definitionsbereich von y!`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur y≥0 testen und auf „wahr" schließen → <strong>✅ Richtig:</strong> Ein einziges Gegenbeispiel (y=−1) reicht; x²≥0 für alle x ∈ ℝ → kein x mit x²=−1</li>
                <li><strong>❌ Falsch:</strong> √y für negatives y berechnen wollen → <strong>✅ Richtig:</strong> √ ist auf negativen reellen Zahlen nicht definiert; deshalb hat y=−1 kein reelles Urbild</li>
              </ul>,
              <p>∀y∃x wäre wahr, wenn der Wertebereich von x² ganz ℝ wäre. Was ist der tatsächliche Wertebereich von x² für x ∈ ℝ — und für welche y scheitert die Aussage?</p>,
            ),
            solution: 'Falsch. Gegenbeispiel: y = −1. Es gibt kein x ∈ ℝ mit x² = −1.',
          },
          {
            letter: 'e',
            text: '∃y ∈ ℝ ∀x ∈ ℝ : y = x²',
            hint: h(
              <>
                <p>Ein festes y müsste <span className="hint-em">mit allen</span> Quadraten x² übereinstimmen. Da verschiedene x verschiedene Quadrate liefern, ist das unmöglich.</p>
                <p>∃y∀x: Das y wird zuerst (fest) gewählt, dann muss es für alle x gleichzeitig gelten.</p>
              </>,
              <pre className="hint-code-block">{`Angenommen y₀ existiert mit x² = y₀ für alle x.
x=1: y₀ = 1
x=2: y₀ = 4
Aber 1 ≠ 4 → Widerspruch.  ✗`}</pre>,
              <>
                <p>Vergleich: ∃y∀x vs. ∀x∃y:</p>
                <pre className="hint-code-block">{`∃y∀x: y=x²  → FALSCH  (ein festes y kann nicht
                           alle verschiedenen Quadrate sein)

∀x∃y: y=x²  → WAHR    (für jedes x darf y=x² gewählt
                           werden — y hängt von x ab)

Merkhilfe: In ∃y∀x ist y unabhängig von x zu wählen!`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ∃y∀x mit ∀x∃y gleichsetzen → <strong>✅ Richtig:</strong> Reihenfolge ist entscheidend: bei ∃y∀x muss y unabhängig von x gewählt werden; x=1 und x=2 liefern verschiedene Quadrate → kein gemeinsames y möglich</li>
                <li><strong>❌ Falsch:</strong> y=0 als Kandidaten prüfen: 0=1²=1? → <strong>✅ Richtig:</strong> 0 ≠ 1, also funktioniert y=0 bereits für x=1 nicht</li>
              </ul>,
              <p>Warum kann kein festes y gleichzeitig 1² und 2² sein — und was bedeutet das für die Forderung „für alle x"? Wann wäre ∃y∀x: y=x² wahr, und in welchem mathematischen Kontext würde diese Aussage Sinn ergeben?</p>,
            ),
            solution: 'Falsch. x=1 liefert y=1, x=2 liefert y=4. Kein festes y passt zu allen x.',
          },
        ],
      },
      {
        id: 'b4a6',
        nr: 6,
        title: 'Euklidischer Algorithmus (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Bestimmen Sie mit Hilfe des euklidischen Algorithmus:\n(i)  ggT(156, −64)\n(ii) ggT(−296, −96)\n(iii) ggT(34, 21). Was fällt auf?',
            hint: h(
              <>
                <p>Der euklidische Algorithmus arbeitet mit positiven Zahlen: <span className="hint-em">ggT(a, b) = ggT(|a|, |b|)</span>. Wiederhole die Division mit Rest, bis der Rest 0 ist — der letzte nichtnull Rest ist der ggT.</p>
              </>,
              <>
                <ol>
                  <li>Ersetze negative Argumente durch ihre Beträge: ggT(a, b) = ggT(|a|, |b|)</li>
                  <li>Wiederhole: Schreibe den größeren Wert als Quotient · Divisor + Rest</li>
                  <li>Ersetze das Paar durch (Divisor, Rest) und wiederhole</li>
                  <li>Stoppe, wenn der Rest 0 ist — der letzte nichtnull Rest ist der ggT</li>
                  <li>Beobachte bei (iii), welche Zahlenfolge in den Resten erscheint</li>
                </ol>
              </>,
              <>
                <p>Fibonacci-Zahlen sind genau die Zahlen, die dem euklidischen Algorithmus die meisten Schritte kosten.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ggT(156, −64) = −4 (Vorzeichen mitgenommen) → <strong>✅ Richtig:</strong> ggT ist per Definition ≥ 0; ggT(a,b) = ggT(|a|,|b|)</li>
                <li><strong>❌ Falsch:</strong> Rest falsch berechnen, z.B. 156 mod 64 = 92 → <strong>✅ Richtig:</strong> Rest = Dividend − Quotient·Divisor = 156 − 2·64 = 28</li>
              </ul>,
              <p>Warum terminiert der euklidische Algorithmus immer — und warum ist gerade die Fibonacci-Folge ein Extremfall, der besonders viele Schritte benötigt?</p>,
            ),
            solution: '(i) ggT(156,−64) = ggT(156,64) = 4\n  156 = 2·64+28,  64 = 2·28+8,  28 = 3·8+4,  8 = 2·4+0\n\n(ii) ggT(−296,−96) = ggT(296,96) = 8\n  296 = 3·96+8,  96 = 12·8+0\n\n(iii) ggT(34,21) = 1\n  34=1·21+13, 21=1·13+8, 13=1·8+5, 8=1·5+3, 5=1·3+2, 3=1·2+1, 2=2·1+0\n  Die Reste 13,8,5,3,2,1 sind gerade die ersten Fibonacci-Zahlen.',
          },
          {
            letter: 'b',
            text: '(Erweiterter euklidischer Algorithmus) Finden Sie Zahlen s, t ∈ ℤ so, dass\n\nggT(156, −64) = s · 156 + t · (−64).\n\nHinweis: Gehen Sie Ihre Rechenschritte aus Teil (a)(i) in umgekehrter Reihenfolge durch.',
            hint: h(
              <>
                <p>Stelle jeden Rest als Linearkombination von 156 und 64 dar, indem du die Divisionsschritte <span className="hint-em">rückwärts</span> auflöst. Beginne beim letzten nichtNull-Rest (= ggT = 4) und ersetze schrittweise.</p>
              </>,
              <>
                <ol>
                  <li>Schreibe jeden Divisionsschritt als Restformel um: Rest = Dividend − Quotient · Divisor</li>
                  <li>Beginne beim letzten nichtNull-Rest (= ggT) und schreibe ihn als Linearkombination der beiden Vorgänger</li>
                  <li>Ersetze schrittweise rückwärts: Ersetze den kleineren der beiden durch seinen Ausdruck aus dem vorherigen Schritt</li>
                  <li>Führe die Koeffizienten zusammen, bis nur noch die Originalzahlen 156 und 64 auftreten</li>
                  <li>Passe das Vorzeichen von 64 an, um die Darstellung mit −64 zu erhalten</li>
                </ol>
              </>,
              <>
                <p>Einfacheres Beispiel zum Einüben der Technik: ggT(13, 8) = 1</p>
                <pre className="hint-code-block">{`Vorwärts (euklidischer Alg.):
  13 = 1·8 + 5   →  5 = 13 − 1·8
   8 = 1·5 + 3   →  3 = 8 − 1·5
   5 = 1·3 + 2   →  2 = 5 − 1·3
   3 = 1·2 + 1   →  1 = 3 − 1·2
   2 = 2·1 + 0

Rückwärts:
  1 = 3 − 1·2
    = 3 − 1·(5 − 1·3) = 2·3 − 1·5
    = 2·(8 − 1·5) − 1·5 = 2·8 − 3·5
    = 2·8 − 3·(13 − 1·8) = 5·8 − 3·13

→ 1 = 5·8 + (−3)·13  (Probe: 40 − 39 = 1 ✓)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Bei 7·28 − 3·64 stehen bleiben ohne Schritt (1) anzuwenden → <strong>✅ Richtig:</strong> 28 = 156 − 2·64 einsetzen: 7·(156−2·64)−3·64 = 7·156−17·64</li>
                <li><strong>❌ Falsch:</strong> −3·(64−2·28) = −3·64+2·28 (falscher Vorfaktor) → <strong>✅ Richtig:</strong> −3·(64−2·28) = −3·64+6·28; zusammen mit 28: (1+6)·28−3·64 = 7·28−3·64</li>
                <li><strong>❌ Falsch:</strong> Probe vergessen → <strong>✅ Richtig:</strong> 7·156+17·(−64) = 1092−1088 = 4 ✓ — die Probe erkennt Rechenfehler sofort</li>
              </ul>,
              <p>Was sagt der Satz von Bézout: Wenn ggT(a,b) = d, gibt es dann immer s,t mit s·a + t·b = d? Und was bedeutet es, dass d die kleinstmögliche positive Linearkombination von a und b über ℤ ist?</p>,
            ),
            solution: 'Rückwärts durch (a)(i):\n  4 = 28 − 3·8\n    = 28 − 3·(64 − 2·28) = 7·28 − 3·64\n    = 7·(156 − 2·64) − 3·64 = 7·156 − 17·64\n    = 7·156 + 17·(−64)\n\ns = 7,  t = 17\nProbe: 7·156 + 17·(−64) = 1092 − 1088 = 4 ✓',
          },
        ],
      },
      {
        id: 'b4a7',
        nr: 7,
        title: 'Gleichheiten für Summen und Produkte (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei n ∈ ℕ*. Welche der folgenden Gleichheiten gelten für jede Wahl von n und aₖ?\n\n(i)   ∑(k=1..n) k³ = ∑(k=2..n+1) (k+1)³\n(ii)  ∑(k=1..n) k³ = ∑(l=3..n+2) (l−2)³\n(iii) (∑aₖ)·(∑aₖ) = ∑aₖ²\n(iv)  (∏aₖ)·(∏aₖ) = ∏aₖ²\n(v)   4·∑aₖ = ∑4aₖ\n(vi)  4·∏aₖ = ∏(4aₖ)',
            hint: h(
              <>
                <p>Für <span className="hint-em">Indexumbenennungen</span> in Summen/Produkten: Substitution l = k+c verschiebt den Laufbereich. Für (iii) und (vi): konkrete Zahlen einsetzen (z. B. a₁=1, a₂=2) zum Testen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(i)  k → k+1 gibt ∑(k=2..n+1)(k+1)³ ≠ ∑(k=1..n) k³
     denn der neue Summand wäre ((k+1)+1)³ = (k+2)³, nicht k³
     → falsch

(ii) l = k+2, also k = l−2:
     k=1 → l=3, k=n → l=n+2, Summand (l−2)³ = k³  ✓
     → wahr

(iii) Gegenbeispiel: a₁=1, a₂=1 (n=2)
     (1+1)² = 4,  1²+1² = 2  → 4 ≠ 2  → falsch

(iv) (∏aₖ)² = ∏aₖ² weil (a₁·…·aₙ)² = a₁²·…·aₙ²  ✓

(v)  4·∑aₖ = ∑4aₖ wegen Linearität  ✓

(vi) Gegenbeispiel: a₁=1, a₂=1 (n=2)
     4·1·1 = 4,  (4·1)·(4·1) = 16  → 4 ≠ 16  → falsch`}</pre>
              </>,
              <>
                <p>Nur (ii), (iv) und (v) gelten für jede Wahl.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Bei (i) denken: Indexverschiebung ändert nur Grenzen, nicht Summand → <strong>✅ Richtig:</strong> k→k+1 macht aus ∑(k=1..n) k³ die Summe ∑(k=2..n+1) (k+1)³, nicht k³; (i) ist daher falsch</li>
                <li><strong>❌ Falsch:</strong> Bei (vi) 4·∏aₖ = ∏(4aₖ) annehmen → <strong>✅ Richtig:</strong> ∏(4aₖ) = 4ⁿ·∏aₖ weil jeder der n Faktoren mit 4 multipliziert wird; nur für n=1 würde 4=4¹ stimmen</li>
              </ul>,
              <p>Bei (vi): ∏(4aₖ) = 4ⁿ · ∏aₖ ≠ 4 · ∏aₖ für n &gt; 1.</p>,
            ),
            solution: '(i)  falsch: Index­shift ergibt (k+2)³, nicht k³.\n(ii) wahr: Substitution l=k+2 liefert exakt dieselbe Summe.\n(iii) falsch: (∑aₖ)² enthält Kreuzterme. Gegenbeispiel: a₁=a₂=1 → 4 ≠ 2.\n(iv) wahr: (a₁·…·aₙ)² = a₁²·…·aₙ².\n(v)  wahr: Konstante kann aus der Summe gezogen werden.\n(vi) falsch: ∏(4aₖ) = 4ⁿ·∏aₖ. Gegenbeispiel n=2, a₁=a₂=1 → 4 ≠ 16.\n\nNur (ii), (iv), (v) gelten allgemein.',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt5',
    nr: '5',
    titel: 'Relationen, Funktionen, Abzählbarkeit',
    aufgaben: [
      {
        id: 'b5a1',
        nr: 1,
        title: 'Graph einer Funktion',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℤ → ℕ,  z ↦ |z|\n\ngegeben?\n\n(i)   ℤ × ℕ\n(ii)  {(−n, n) : n ∈ ℕ} ∪ {(n, n) : n ∈ ℕ*}\n(iii) {(z, |z|) : z ∈ ℤ}',
            hint: h(
              <>
                <p>Der <span className="hint-em">Graph einer Funktion</span> f : A → B ist die Menge aller Paare (x, f(x)) mit x ∈ A:</p>
                <p>Graph(f) = {'{(x, f(x)) : x ∈ A}'}</p>
                <p>Ein Set beschreibt denselben Graphen, wenn er genau diese Paare enthält — nicht mehr, nicht weniger.</p>
              </>,
              <>
                <ol>
                  <li>Schreibe die Definition: Graph(f) = {'{(x, f(x)) : x ∈ Domain}'}</li>
                  <li>Prüfe jede kandidatische Menge: Enthält sie exakt die Paare (x, f(x)) — weder mehr noch weniger?</li>
                  <li>Für „zu groß": Finde ein Paar (a, b), das in der Kandidatenmenge liegt, aber nicht auf dem Graphen liegt</li>
                  <li>Für Parametersubstitution: Prüfe, ob eine Umbenennung des Laufparameters die Menge in die Standardform {'{(x, f(x)):x∈Domain}'} überführt</li>
                </ol>
              </>,
              <>
                <p>Beispiel: f : ℝ → ℝ, x ↦ x²</p>
                <pre className="hint-code-block">{`Graph(f) = {(x, x²) : x ∈ ℝ}
ℝ × ℝ wäre zu groß (enthält z. B. (1,5))
{(x, x²) : x ≥ 0} wäre zu klein (fehlt z. B. (−1, 1))`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ℤ × ℕ als Graphen angeben → <strong>✅ Richtig:</strong> ℤ × ℕ enthält alle Paare (z,n) mit z∈ℤ, n∈ℕ — z.B. (1,5), aber f(1)=1≠5; der Graph ist viel kleiner</li>
                <li><strong>❌ Falsch:</strong> Bei (ii) z=0 nicht prüfen → <strong>✅ Richtig:</strong> (0,0) liegt in der ersten Teilmenge {'{(−n,n):n∈ℕ}'} mit n=0 ✓</li>
              </ul>,
              <p>Was macht eine Menge A zu einem gültigen Graphen von f — und warum reicht es nicht, dass A alle richtigen Paare enthält, wenn A auch falsche enthält?</p>,
            ),
            solution: '(i)  nein – ℤ × ℕ enthält Paare wie (1, 5), die nicht auf dem Graph liegen.\n(ii) ja   – für z < 0: (−n, n); für z = 0: (0, 0) ∈ erste Menge; für z > 0: (n, n) ∈ zweite Menge.\n(iii) ja  – exakt die mengentheoretische Definition des Graphen von f.',
          },
          {
            letter: 'b',
            text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℝ → ℝ,  x ↦ x − 1\n\ngegeben?\n\n(i)   ℝ × ℝ\n(ii)  {(x + 1, x) : x ∈ ℝ}\n(iii) {(x, x − 1) : x ∈ ℝ}',
            hint: h(
              <>
                <p>Graph(f) = {'{(x, x−1) : x ∈ ℝ}'}. Bei verschobenen Koordinaten prüfen, ob die Menge dieselben Paare beschreibt — eventuell mit einer Umbenennung des Laufparameters.</p>
              </>,
              <>
                <ol>
                  <li>Prüfe ℝ × ℝ: Finde ein Paar (a, b), das in der Menge liegt, aber nicht auf dem Graphen</li>
                  <li>Prüfe die Substitutionsform: Führe eine Umbenennung des Laufparameters durch und prüfe, ob die Menge dann als {'{(x, x−1):x∈ℝ}'} erscheint</li>
                  <li>Prüfe die Direktform: Entspricht sie exakt der Definition des Graphen?</li>
                </ol>
              </>,
              <>
                <p>Umbenennung: Ein Laufparameter in einem Set-Ausdruck ist nur ein Platzhalter. {'{(x+1, x) : x ∈ ℝ}'} und {'{(t, t−1) : t ∈ ℝ}'} beschreiben dieselbe Menge.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (ii) ablehnen weil die Form anders aussieht → <strong>✅ Richtig:</strong> Umsubstitution t=x+1 zeigt, dass {'{(x+1,x):x∈ℝ}'} = {'{(t,t−1):t∈ℝ}'} = Graph(f)</li>
                <li><strong>❌ Falsch:</strong> ℝ×ℝ als Graphen akzeptieren → <strong>✅ Richtig:</strong> ℝ×ℝ enthält z.B. (0,5), aber f(0)=−1≠5; zu groß</li>
              </ul>,
              <p>Warum sind {'{(x+1, x):x∈ℝ}'} und {'{(x, x−1):x∈ℝ}'} dieselbe Menge — obwohl der Laufparameter x in beiden Ausdrücken anderes bedeutet? Was ändert sich beim Umbenennen eines gebundenen Variablennamens?</p>,
            ),
            solution: '(i)  nein – zu groß.\n(ii) ja   – Umsubstitution t = x+1 liefert {(t, t−1) : t ∈ ℝ} = Graph(f).\n(iii) ja  – exakt die Definition.',
          },
          {
            letter: 'c',
            text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℕ → ℕ,  n ↦ 1\n\ngegeben?\n\n(i)   ℕ × {1}\n(ii)  {(n, 1) : n ∈ ℕ}\n(iii) {1} × ℕ',
            hint: h(
              <>
                <p>f ist eine konstante Funktion: Jeder Input n wird auf 1 abgebildet. Der Graph enthält genau die Paare (n, 1) für alle n ∈ ℕ.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Graph(f) = {(n, 1) : n ∈ ℕ} = ℕ × {1}

(i)  ℕ × {1} = {(n, m) : n ∈ ℕ, m ∈ {1}}
              = {(n, 1) : n ∈ ℕ}  → ja

(ii) {(n, 1) : n ∈ ℕ}  → exakt der Graph  → ja

(iii) {1} × ℕ = {(1, n) : n ∈ ℕ}
     Enthält z. B. (1, 5), aber f(1) = 1 ≠ 5
     Außerdem fehlen (0, 1), (2, 1), ...  → nein`}</pre>
              </>,
              <>
                <p>Achtung: {'{1} × ℕ'} und {'ℕ × {1}'} unterscheiden sich durch die Reihenfolge der Komponenten!</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> {'{1} × ℕ'} und {'ℕ × {1}'} gleichsetzen → <strong>✅ Richtig:</strong> {'ℕ × {1}'} = {'{(n,1):n∈ℕ}'} (Input links, Output rechts); {'{1} × ℕ'} = {'{(1,n):n∈ℕ}'} (vertauscht) — völlig verschieden</li>
              </ul>,
              <p>Im Graph steht der Input links, der Output rechts: (Input, Output) = (n, 1).</p>,
            ),
            solution: '(i)  ja   – ℕ × {1} = {(n, 1) : n ∈ ℕ} = Graph(f).\n(ii) ja   – exakt die Definition.\n(iii) nein – {1} × ℕ = {(1, n) : n ∈ ℕ} vertauscht Input und Output.',
          },
        ],
      },
      {
        id: 'b5a2',
        nr: 2,
        title: 'Bilder und Urbilder',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Betrachten Sie die Abbildungen\n\nf : ℝ \\ {2} → ℝ,  x ↦ x²   und   h : ℝ → ℝ,  x ↦ |x|.\n\nBestimmen Sie:\n(i)   f(ℝ \\ {2})\n(ii)  f⁻¹({4, 9})\n(iii) h([0, 5])\n(iv)  h([−5, 5])\n(v)   h⁻¹([0, 5])\n(vi)  h⁻¹([−5, 5])\n(vii) h(ℤ)',
            hint: h(
              <>
                <p>Unterschied <span className="hint-em">Bild vs. Urbild</span>:</p>
                <ul>
                  <li>f(A) = {'{f(x) : x ∈ A}'} – Menge der Funktionswerte für Inputs aus A</li>
                  <li>f⁻¹(B) = {'{x ∈ Domain : f(x) ∈ B}'} – Menge aller Inputs, die in B landen</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`(i)  f(ℝ\{2}): x² nimmt alle Werte ≥ 0 an.
     x=2 fehlt, aber −2 ∈ ℝ\{2} und (−2)²=4.
     Jeder Wert ≥ 0 wird trotzdem erreicht → [0, ∞)

(ii) f⁻¹({4,9}): x²=4 → x∈{−2,2}; x²=9 → x∈{−3,3}
     x=2 liegt nicht im Definitionsbereich → {−2, 3, −3}

(iii) h([0,5]): |x| für x ∈ [0,5] → |x| = x ∈ [0,5]

(iv) h([−5,5]): |x| für x ∈ [−5,5] → Werte in [0,5]

(v)  h⁻¹([0,5]): |x| ∈ [0,5] ⟺ −5 ≤ x ≤ 5

(vi) h⁻¹([−5,5]): |x| ∈ [−5,5]; da |x|≥0, gilt |x|≤5
     → dasselbe wie (v): [−5,5]

(vii) h(ℤ): {|n| : n ∈ ℤ} = {0,1,2,...} = ℕ`}</pre>
              </>,
              <>
                <p>Bei f⁻¹: Es werden alle x gesucht, die auf den gewünschten Wert treffen — im gegebenen Definitionsbereich!</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Bei (i) f(ℝ\{'{2}'}) = [0,∞)\{'{4}'}, weil x=2 fehlt → <strong>✅ Richtig:</strong> 4=(−2)² und −2 ∈ ℝ\{'{2}'}, also wird 4 trotzdem im Bild erreicht; f(ℝ\{'{2}'}) = [0,∞)</li>
                <li><strong>❌ Falsch:</strong> Bei (vi) h⁻¹([−5,5]) = ∅ weil |x| ≥ 0 → <strong>✅ Richtig:</strong> |x| ≥ 0 immer, aber [−5,5] enthält auch [0,5]; also |x| ∈ [0,5] ⟺ x ∈ [−5,5]</li>
                <li><strong>❌ Falsch:</strong> h(ℤ) = ℤ → <strong>✅ Richtig:</strong> |n| ≥ 0 für alle n ∈ ℤ; h(ℤ) = {'{|n| : n ∈ ℤ}'} = {'{0,1,2,...}'} = ℕ</li>
              </ul>,
              <p>Bei Urbild: Nicht f⁻¹ als Umkehrfunktion missverstehen — es geht um die Urbildmenge, auch wenn f nicht injektiv ist.</p>,
            ),
            solution: '(i)   f(ℝ \\ {2}) = [0, ∞)   (4 = (−2)² wird trotz x=2 ∉ Domain erreicht)\n(ii)  f⁻¹({4, 9}) = {−2, 3, −3}   (x=2 ist ausgeschlossen)\n(iii) h([0, 5]) = [0, 5]\n(iv)  h([−5, 5]) = [0, 5]\n(v)   h⁻¹([0, 5]) = [−5, 5]\n(vi)  h⁻¹([−5, 5]) = [−5, 5]   (da |x| ≥ 0, wirkt nur der Teil [0,5])\n(vii) h(ℤ) = ℕ',
          },
        ],
      },
      {
        id: 'b5a3',
        nr: 3,
        title: 'Injektivität, Surjektivität, Bijektivität',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Seien X := {1,2,3,4,5},  Y := {1,2,3}  und  φ : X → Y  durch\n\nφ(1) := 3,  φ(2) := 3,  φ(3) := 2,  φ(4) := 1,  φ(5) := 3\n\ngegeben. Geben Sie jeweils ein Beispiel für eine nichtleere Teilmenge M von X derart an, dass die Abbildung φ : M → Y bijektiv ist.',
            hint: h(
              <>
                <p><span className="hint-em">Bijektiv</span> = injektiv + surjektiv. φ|_M muss jeden Wert in Y genau einmal treffen.</p>
                <p>Y = {'{1, 2, 3}'} hat 3 Elemente — M muss also genau 3 Elemente haben, die alle verschiedene Bilder in Y haben.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Werte von φ auf X:
φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3

Für Bijektivität: 3 Elemente mit Bildern {1,2,3}
→ Wähle M = {1, 3, 4}:
  φ(1)=3, φ(3)=2, φ(4)=1  → alle drei Bilder, keine Wiederholung ✓`}</pre>
              </>,
              <>
                <p>Systematische Suche: Welche Elemente liefern welches Bild?</p>
                <pre className="hint-code-block">{`Bild 1 liefern:  φ(4) = 1
Bild 2 liefern:  φ(3) = 2
Bild 3 liefern:  φ(1) = 3, φ(2) = 3, φ(5) = 3

Für Bijektivität: je genau einen Repräsentanten pro Bild wählen.
→ M = {4, 3, 1} oder {4, 3, 2} oder {4, 3, 5} sind alle gültig!`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> M = {'{1,2,4}'}: φ(1)=3, φ(2)=3 → Kollision → <strong>✅ Richtig:</strong> Aus den drei Elementen mit Bild 3 ({'{1,2,5}'}) nur eines wählen; M = {'{1,3,4}'} oder {'{2,3,4}'} oder {'{5,3,4}'}</li>
                <li><strong>❌ Falsch:</strong> |M| ≠ |Y| erlaubt → <strong>✅ Richtig:</strong> Für Bijektivität muss |M| = |Y| = 3 gelten (je ein Element pro Bild)</li>
              </ul>,
              <p>Kontrolle: Sind alle Bilder verschieden? Decken sie ganz Y ab?</p>,
            ),
            solution: 'M = {1, 3, 4}: φ(1)=3, φ(3)=2, φ(4)=1 – injektiv (alle Bilder verschieden) und surjektiv (trifft 1, 2, 3).',
          },
          {
            letter: 'b',
            text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y surjektiv, aber nicht injektiv ist.',
            hint: h(
              <>
                <p><span className="hint-em">Surjektiv aber nicht injektiv</span>: Alle Werte in Y werden getroffen, aber mindestens ein Wert wird doppelt angenommen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`M muss alle drei Werte 1, 2, 3 abdecken,
aber mindestens ein Wert doppelt vorkommen.

M = X = {1,2,3,4,5}:
  φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3
  → 1, 2, 3 alle getroffen ✓ (surjektiv)
  → 3 dreimal angenommen   ✓ (nicht injektiv)`}</pre>
              </>,
              <>
                <p>Kleinste surjektive aber nicht injektive Teilmenge:</p>
                <pre className="hint-code-block">{`Brauche: Bild 1 ✓, Bild 2 ✓, Bild 3 ✓, aber Kollision.
Bild 1: φ(4)=1   → 4 muss in M sein
Bild 2: φ(3)=2   → 3 muss in M sein
Bild 3: zwei aus {1,2,5} → z.B. 1 und 2

M = {1, 2, 3, 4} ist eine minimale solche Menge.`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> M = {'{3,4}'}: Bilder {'{1,2}'} → Bild 3 fehlt → <strong>✅ Richtig:</strong> Für Surjektivität müssen 1, 2 und 3 alle im Bild liegen; mindestens eines der Elemente {'{1,2,5}'} muss in M</li>
                <li><strong>❌ Falsch:</strong> M bijektiv wählen → <strong>✅ Richtig:</strong> Gefordert ist Surjektivität ohne Injektivität — M muss eine Kollision haben (zwei Elemente mit gleichem Bild)</li>
              </ul>,
              <p>Ist jedes Element von Y mindestens einmal als Bild vorhanden? Gibt es ein Bild, das zweimal auftaucht?</p>,
            ),
            solution: 'M = X = {1,2,3,4,5}: surjektiv (alle Werte 1,2,3 getroffen), nicht injektiv (z. B. φ(1)=φ(2)=φ(5)=3).',
          },
          {
            letter: 'c',
            text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y injektiv, aber nicht surjektiv ist.',
            hint: h(
              <>
                <p><span className="hint-em">Injektiv aber nicht surjektiv</span>: Alle Bilder verschieden, aber nicht alle Werte in Y werden getroffen.</p>
                <p>Kleine M mit höchstens 2 Elementen, die auf verschiedene Werte abgebildet werden.</p>
              </>,
              <>
                <pre className="hint-code-block">{`M = {1}: φ(1) = 3
  → nur ein Element → trivial injektiv ✓
  → trifft nur 3, nicht 1 oder 2 ✓ (nicht surjektiv)`}</pre>
              </>,
              <>
                <p>Weitere injektive, nicht surjektive Teilmengen:</p>
                <pre className="hint-code-block">{`M = {3, 4}:   φ(3)=2, φ(4)=1 → beide verschieden ✓
              Bild = {1, 2},  3 fehlt → nicht surjektiv ✓

M = {1, 3}:   φ(1)=3, φ(3)=2 → beide verschieden ✓
              Bild = {2, 3},  1 fehlt → nicht surjektiv ✓

Merkhilfe: Einelementige M sind immer injektiv.`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} wählen (bijektiv) → <strong>✅ Richtig:</strong> Bijektiv ist zu stark; gefordert ist injektiv-aber-nicht-surjektiv, also darf nicht jeder Wert aus Y getroffen werden</li>
                <li><strong>❌ Falsch:</strong> M = {'{1,2}'} wählen: φ(1)=3=φ(2) → Kollision → nicht injektiv → <strong>✅ Richtig:</strong> Für Injektivität keine zwei Elemente mit gleichem Bild in M; {'{1}'} allein reicht</li>
              </ul>,
              <p>Sind alle Bilder in M verschieden? Fehlt mindestens ein Wert aus Y?</p>,
            ),
            solution: 'M = {1}: φ(1)=3 – injektiv (nur ein Element), nicht surjektiv (1 und 2 nicht getroffen).',
          },
          {
            letter: 'd',
            text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y weder injektiv noch surjektiv ist.',
            hint: h(
              <>
                <p><span className="hint-em">Weder injektiv noch surjektiv</span>: Ein Bild kommt doppelt vor, und gleichzeitig fehlt mindestens ein Wert aus Y.</p>
              </>,
              <>
                <pre className="hint-code-block">{`M = {1, 2}: φ(1)=3, φ(2)=3
  → 3 kommt zweimal → nicht injektiv ✓
  → 1 und 2 fehlen  → nicht surjektiv ✓`}</pre>
              </>,
              <>
                <p>Übersichtstabelle aller 4 möglichen Eigenschaften-Kombinationen:</p>
                <pre className="hint-code-block">{`Eigenschaft         | Anforderung an M
--------------------|----------------------------------
Bijektiv            | |M|=3, alle Bilder verschieden, ganz Y getroffen
Surjektiv ¬injektiv | Alle Y-Werte getroffen, aber Kollision vorhanden
Injektiv ¬surjektiv | Keine Kollision, aber Y nicht vollständig getroffen
Weder noch          | Kollision vorhanden UND Y nicht vollständig

→ M={1,2}: Kollision (3,3) ✓, nur {3} als Bild ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} wählen (bijektiv, alle drei Werte getroffen und verschieden) → <strong>✅ Richtig:</strong> „Weder noch" erfordert gleichzeitig Kollision UND fehlenden Wert; bijektive M erfüllen keine dieser Bedingungen</li>
                <li><strong>❌ Falsch:</strong> Nur eine der beiden Bedingungen prüfen → <strong>✅ Richtig:</strong> M = {'{1,2}'}: φ(1)=3, φ(2)=3 → Kollision (nicht injektiv) ✓ UND {'{1,2}'} ∉ Bild (nicht surjektiv) ✓</li>
              </ul>,
              <p>Gibt es eine Kollision im Bild? Fehlt gleichzeitig ein Wert aus Y?</p>,
            ),
            solution: 'M = {1, 2}: φ(1)=φ(2)=3 – nicht injektiv (Kollision bei 3), nicht surjektiv (1 und 2 nicht getroffen).',
          },
        ],
      },
      {
        id: 'b5a4',
        nr: 4,
        title: 'Verkettung von Funktionen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Gegeben seien die Funktionen\n\nf : ℝ → ℝ,  x ↦ x³ − 1   und   g : [0, ∞) → ℝ,  x ↦ √x + 2,\n\nwobei die Funktion [0,∞) → [0,∞), x ↦ √x die Umkehrfunktion der Funktion [0,∞) → [0,∞), x ↦ x² bezeichnet. Bestimmen Sie f ∘ g und g ∘ f sofern möglich.',
            hint: h(
              <>
                <p>Für die Verkettung (f ∘ g)(x) = f(g(x)) muss das <span className="hint-em">Bild von g</span> im Definitionsbereich von f liegen.</p>
                <p>Für (g ∘ f)(x) = g(f(x)) muss das Bild von f im Definitionsbereich von g liegen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f ∘ g:
  g : [0,∞) → ℝ, Bild ⊆ ℝ
  f : ℝ → ℝ, Definitionsbereich ℝ
  → Bild(g) ⊆ Dom(f)  ✓
  (f ∘ g)(x) = f(g(x)) = (√x + 2)³ − 1
  Domain: [0, ∞)

g ∘ f:
  f : ℝ → ℝ, Bild = ℝ
  g : [0,∞) → ℝ, Definitionsbereich [0,∞)
  → f(ℝ) = ℝ ⊄ [0,∞)
  → g ∘ f nicht möglich`}</pre>
              </>,
              <>
                <p>Beispiel: h : ℝ → ℝ≥0, x ↦ x², und k : ℝ≥0 → ℝ, x ↦ √x. Dann k∘h möglich (Bild h = ℝ≥0 ⊆ Dom k), h∘k möglich (Bild k = ℝ≥0 ⊆ Dom h = ℝ).</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> g∘f definieren ohne den Definitionsbereich zu prüfen → <strong>✅ Richtig:</strong> f(ℝ) = ℝ (da x³−1 alle reellen Werte annimmt), aber Dom(g) = [0,∞); da ℝ ⊄ [0,∞) ist g∘f nicht möglich</li>
                <li><strong>❌ Falsch:</strong> Reihenfolge bei f∘g verwechseln → <strong>✅ Richtig:</strong> (f∘g)(x) = f(g(x)): erst g (Input aus [0,∞)), dann f; nicht andersrum</li>
              </ul>,
              <p>Welche Werte kann f(x) = x³−1 annehmen? Ist das eine Teilmenge von [0,∞)?</p>,
            ),
            solution: 'f ∘ g : [0,∞) → ℝ,  x ↦ (√x + 2)³ − 1\n\ng ∘ f ist nicht möglich, da f(ℝ) = ℝ ⊄ [0,∞) = Dom(g).',
          },
          {
            letter: 'b',
            text: 'Betrachten Sie die Funktionen\n\nf : [0,∞) → [0,∞),  x ↦ x + 1\n\nund\n\ng : [0,∞) → [0,∞),  x ↦ { x−1,  falls x ≥ 1\n                         { 0,     sonst.\n\nUntersuchen Sie f, g, g ∘ f und f ∘ g jeweils auf Injektivität, Surjektivität und Bijektivität. Skizzieren Sie zunächst die jeweiligen Funktionsgraphen.',
            hint: h(
              <>
                <p>Berechne zuerst die Verkettungen, dann analysiere Injektivität (horizontal line test: jeder y-Wert höchstens einmal getroffen) und Surjektivität (jeder y-Wert mindestens einmal getroffen).</p>
              </>,
              <>
                <pre className="hint-code-block">{`g ∘ f: (g∘f)(x) = g(f(x)) = g(x+1)
  x+1 ≥ 1 für alle x ≥ 0
  → g(x+1) = (x+1) − 1 = x
  → (g∘f)(x) = x   [Identität auf [0,∞)]
  → bijektiv

f ∘ g: (f∘g)(x) = f(g(x))
  Falls x ≥ 1: f(x−1) = (x−1)+1 = x
  Falls x < 1: f(0) = 1
  → (f∘g)(x) = { x,  falls x ≥ 1
                { 1,  sonst
  → nicht injektiv (alle x ∈ [0,1) landen auf 1)
  → nicht surjektiv (Wert 0 wird nie angenommen)

f allein: f(x)=x+1 ≥ 1, also 0 nie getroffen → nicht surjektiv
  Verschiedene x → verschiedene x+1 → injektiv

g allein: g(0)=g(0.5)=0 → nicht injektiv
  Bild g = {0} ∪ [0,∞) = [0,∞) → surjektiv`}</pre>
              </>,
              <>
                <p>Zusammenfassung der 4 Eigenschaften für f, g, g∘f, f∘g:</p>
                <pre className="hint-code-block">{`Funktion | injektiv | surjektiv | bijektiv
---------|----------|-----------|----------
f(x)=x+1 | ja       | nein      | nein  (0 ∉ Bild f)
g(x)      | nein     | ja        | nein  (g(0)=g(0.5)=0)
g∘f       | ja       | ja        | ja    (x ↦ x, Identität)
f∘g       | nein     | nein      | nein  ([0,1) → 1)`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> g∘f und f∘g verwechseln → <strong>✅ Richtig:</strong> (g∘f)(x) = g(f(x)): erst f anwenden, dann g; (f∘g)(x) = f(g(x)): erst g, dann f</li>
                <li><strong>❌ Falsch:</strong> Bei f∘g übersehen, dass x ∈ [0,1) alle auf 1 landen → <strong>✅ Richtig:</strong> g(x)=0 für x&lt;1, dann f(0)=1; also f∘g ist für x∈[0,1) konstant 1 → nicht injektiv</li>
                <li><strong>❌ Falsch:</strong> f als surjektiv einordnen → <strong>✅ Richtig:</strong> f(x)=x+1 ≥ 1 für alle x ≥ 0; der Wert 0 ∈ [0,∞) wird nie erreicht → nicht surjektiv</li>
              </ul>,
              <p>Für g∘f: Was ergibt g(f(x)) = g(x+1)? Da x ≥ 0 gilt x+1 ≥ 1, also wird der erste Fall angewendet.</p>,
            ),
            solution: 'f: injektiv, nicht surjektiv, nicht bijektiv  (0 ∉ Bild f)\ng: nicht injektiv, surjektiv, nicht bijektiv  (g(0)=g(0.5)=0)\n\ng∘f: [0,∞)→[0,∞), x↦x  → bijektiv\n\nf∘g: [0,∞)→[0,∞), x↦{ x falls x≥1; 1 sonst }\n  → nicht injektiv, nicht surjektiv, nicht bijektiv',
          },
        ],
      },
      {
        id: 'b5a5',
        nr: 5,
        title: 'Eigenschaften von Relationen (Wenn noch Zeit ist ...)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei R₁ die Relation\n\nR₁ = {(x², x³) : x ∈ ℝ} ⊆ ℝ × ℝ\n\nauf ℝ und R₂ die Relation\n\nR₂ = {(m, n) : m, n ∈ ℤ, m | n} ⊆ ℤ × ℤ\n\nauf ℤ. Welche der Eigenschaften linkstotal, rechtstotal, linkseindeutig und rechtseindeutig besitzen die Relationen jeweils? Ist eine Funktion dabei?',
            hint: h(
              <>
                <p>Definitionen für eine Relation R ⊆ A × A:</p>
                <ul>
                  <li><span className="hint-em">linkstotal</span>: Jedes a ∈ A kommt als linke Komponente vor</li>
                  <li><span className="hint-em">rechtstotal</span>: Jedes a ∈ A kommt als rechte Komponente vor</li>
                  <li><span className="hint-em">linkseindeutig</span>: Rechte Komponente bestimmt linke eindeutig (kein b hat zwei Linksvorgänger)</li>
                  <li><span className="hint-em">rechtseindeutig</span>: Linke Komponente bestimmt rechte eindeutig (Funktionseigenschaft)</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`R₁ = {(x², x³) : x ∈ ℝ}

Linkstotal? Ist jedes a ∈ ℝ als x² darstellbar?
  x² ≥ 0 → negative Zahlen fehlen als linke Komponente
  → nicht linkstotal

Rechtstotal? Ist jedes a ∈ ℝ als x³ darstellbar?
  x³ nimmt alle reellen Werte an (x = a^(1/3) ∈ ℝ)
  → rechtstotal ✓

Linkseindeutig? Gilt (a,b),(c,b)∈R₁ ⟹ a=c?
  (1,1) und (1,-1)... nein, Gegenbeispiel:
  x=1: (1,1); x=-1: (1,-1) → gleiche linke, verschiedene rechte
  Warte — linkseindeutig heißt: gleiche RECHTE → gleiche LINKE.
  Also: x³=y³ ⟹ x²=y²? x³=y³ ⟹ x=y ⟹ x²=y² ✓
  → linkseindeutig ✓

Rechtseindeutig? Gilt (a,b),(a,c)∈R₁ ⟹ b=c?
  x=1: (1,1)∈R₁; x=-1: (1,-1)∈R₁
  Gleiche linke Komponente 1, verschiedene rechte!
  → nicht rechtseindeutig

R₂ = {(m,n) : m|n}
Linkstotal? m|m für alle m ∈ ℤ → ja ✓
Rechtstotal? m|n für m=1: (1,n)∈R₂ für alle n → ja ✓
Linkseindeutig? 2|4 und 4|4 → (2,4) und (4,4) ∈ R₂ → nicht linkseindeutig
Rechtseindeutig? 2|4 und 2|6 → (2,4) und (2,6) ∈ R₂ → nicht rechtseindeutig`}</pre>
              </>,
              <>
                <p>Merkhilfe: Die 4 Eigenschaften und ihre Verbindung zu Funktionen:</p>
                <pre className="hint-code-block">{`Eigenschaft      | Bedeutung
-----------------|------------------------------------------
linkstotal       | Für jedes a ∈ A gibt es (a,b) ∈ R
rechtstotal      | Für jedes b ∈ A gibt es (a,b) ∈ R
linkseindeutig   | Gleiche rechte → gleiche linke Seite
rechtseindeutig  | Gleiche linke → gleiche rechte Seite (= Funktion!)

Eine Funktion R: A→A ist linkstotal + rechtseindeutig.
Eine bijektive Funktion ist zusätzlich linkseindeutig + rechtstotal.

Ergebnis: R₁ (rechtstotal, linkseindeutig) ist keine Funktion
          R₂ (linkstotal, rechtstotal) ist ebenfalls keine Funktion`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Linkseindeutig = linke Seite eindeutig → je ein Paar pro linker Komponente → <strong>✅ Richtig:</strong> Linkseindeutig heißt: gleiche rechte → gleiche linke; x=1 und x=−1 in R₁ geben (1,1) und (1,−1) → gleiche linke Komponente (1), verschiedene rechte → nicht rechtseindeutig</li>
                <li><strong>❌ Falsch:</strong> Bei R₂: m|m für alle m als „linkseindeutig" werten → <strong>✅ Richtig:</strong> m|m zeigt nur linkstotal (jedes m kommt links vor); linkseindeutig wäre: n|k und m|k ⟹ n=m — widerlegt durch 2|4 und 4|4</li>
              </ul>,
              <p>Eine Funktion ist rechtstotal (Def. nach Vorlesung: linkstotal + rechtseindeutig). Welche Relation ist linkstotal und rechtseindeutig?</p>,
            ),
            solution: 'R₁ ist:\n  – nicht linkstotal  (negative Zahlen sind kein Quadrat)\n  – rechtstotal       (x³ : ℝ → ℝ ist surjektiv)\n  – linkseindeutig    (x³ = y³ ⟹ x = y ⟹ x² = y²)\n  – nicht rechtseindeutig  (x=1 und x=−1 liefern (1,1) und (1,−1))\n\nR₂ ist:\n  – linkstotal        (m | m für alle m)\n  – rechtstotal       (1 | n für alle n)\n  – nicht linkseindeutig  (2|4 und 4|4)\n  – nicht rechtseindeutig (2|4 und 2|6)\n\nEine Funktion ist nicht dabei.',
          },
        ],
      },
      {
        id: 'b5a6',
        nr: 6,
        title: 'Abzählbarkeit (Wenn noch Zeit ist ...)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Ist ℕ × ℕ abzählbar?',
            hint: h(
              <>
                <p>Eine Menge ist <span className="hint-em">abzählbar</span>, wenn es eine bijektive Abbildung ℕ → M gibt. Für ℕ × ℕ genügt eine systematische Aufzählung aller Paare.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Diagonalen-Aufzählung:
  (0,0)
  (1,0) (0,1)
  (2,0) (1,1) (0,2)
  (3,0) (2,1) (1,2) (0,3)
  ...

Reihenfolge: (0,0), (1,0), (0,1), (2,0), (1,1), (0,2), ...

Dies definiert eine Bijektion f: ℕ → ℕ×ℕ → abzählbar ✓`}</pre>
              </>,
              <>
                <p>Allgemein: Jedes endliche oder abzählbare kartesische Produkt abzählbarer Mengen ist abzählbar.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ℕ×ℕ ist überabzählbar, weil es „unendlich viele unendliche Zeilen" hat → <strong>✅ Richtig:</strong> Die Diagonalen-Aufzählung zeigt, dass ℕ×ℕ abzählbar ist; überabzählbar ist z.B. ℝ (Cantors Diagonalargument)</li>
              </ul>,
              <p>Kann jedes Paar (m, n) ∈ ℕ×ℕ in der Liste gefunden werden? In welcher Diagonale liegt (m, n)?</p>,
            ),
            solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion f : ℕ → ℕ×ℕ:\n(0,0), (1,0), (0,1), (2,0), (1,1), (0,2), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
          },
          {
            letter: 'b',
            text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
            hint: h(
              <>
                <p>Man braucht eine echte Teilmenge K ⊊ ℕ und eine Bijektion f : K → ℕ. Ein Element aus ℕ weglassen und die restlichen Elemente passend verschieben.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle K := ℕ \ {0} = {1, 2, 3, ...}

K ⊆ ℕ ✓  und  K ≠ ℕ (0 fehlt) ✓

Definiere f : K → ℕ, n ↦ n − 1
  f(1)=0, f(2)=1, f(3)=2, ...

f ist bijektiv:
  injektiv:  n−1 = m−1 ⟹ n = m  ✓
  surjektiv: Für k ∈ ℕ gilt f(k+1) = k  ✓

→ K ⊊ ℕ mit Bijektion K → ℕ → ℕ ist unendlich. □`}</pre>
              </>,
              <>
                <p>Alternative Wahl von K zum Vergleich (ebenfalls gültig):</p>
                <pre className="hint-code-block">{`Wähle K := 2ℕ = {0, 2, 4, 6, ...}  (gerade Zahlen)

K ⊊ ℕ ✓  (ungerade Zahlen fehlen)

Bijektion f : ℕ → K,  n ↦ 2n
  f(0)=0, f(1)=2, f(2)=4, ...

injektiv:  2n=2m ⟹ n=m  ✓
surjektiv: k gerade → k=2(k/2) = f(k/2)  ✓

→ Auch diese Wahl beweist die Dedekind-Unendlichkeit von ℕ.`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss eine echte Teilmenge sein (K ≠ ℕ); K = ℕ\{'{0}'} erfüllt das, weil 0 ∉ K</li>
                <li><strong>❌ Falsch:</strong> Bijektivität ohne Nachweis behaupten → <strong>✅ Richtig:</strong> Beide Eigenschaften explizit zeigen: injektiv (n−1=m−1 ⟹ n=m) und surjektiv (für k∈ℕ wähle n=k+1: f(k+1)=k)</li>
              </ul>,
              <p>Ist K ≠ ℕ? Ist f : K → ℕ wirklich bijektiv (injektiv + surjektiv)?</p>,
            ),
            solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt6',
    nr: '6',
    titel: 'Unendliche Mengen, Kombinatorik',
    aufgaben: [
      {
        id: 'b6a1',
        nr: 1,
        title: 'Unendliche Mengen und Abzählbarkeit (Falls noch nicht in der Vorwoche besprochen …)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
            hint: h(
              <>
                <p>Gesucht ist eine <span className="hint-em">echte Teilmenge K ⊊ ℕ</span> und eine <span className="hint-em">Bijektion f : K → ℕ</span>.</p>
                <p>Idee: Ein Element aus ℕ weglassen und die restlichen Elemente passend verschieben.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle K := ℕ \\ {0} = {1, 2, 3, ...}

K ⊆ ℕ ✓  und  K ≠ ℕ (da 0 ∉ K) ✓  → echte Teilmenge.

Definiere f : K → ℕ,  n ↦ n − 1

f ist bijektiv:
  injektiv:  f(n) = f(m) ⟹ n−1 = m−1 ⟹ n = m  ✓
  surjektiv: für k ∈ ℕ gilt f(k+1) = k  ✓

→ K ⊊ ℕ mit Bijektion K → ℕ  ⟹  ℕ ist unendlich. □`}</pre>
              </>,
              <>
                <p>Analoges Beispiel: Gerade Zahlen ℕ_gerade = {'{0,2,4,…}'} ⊊ ℕ und g : ℕ → ℕ_gerade, n ↦ 2n ist bijektiv.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss eine echte Teilmenge sein (K ≠ ℕ), d.h. mindestens ein Element von ℕ fehlt in K; K = ℕ\{'{0}'} erfüllt das</li>
                <li><strong>❌ Falsch:</strong> „f ist offensichtlich bijektiv" ohne Beweis → <strong>✅ Richtig:</strong> Injektivität und Surjektivität separat zeigen; für Surjektivität: zu jedem k∈ℕ wähle n=k+1 ∈ K mit f(k+1)=(k+1)−1=k ✓</li>
              </ul>,
              <p>Ist K ≠ ℕ? Ist f injektiv (verschiedene Eingaben → verschiedene Ausgaben) und surjektiv (jedes k ∈ ℕ wird getroffen)?</p>,
            ),
            solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
          },
          {
            letter: 'b',
            text: 'Ist ℕ × ℕ abzählbar?',
            hint: h(
              <>
                <p>Eine Menge ist <span className="hint-em">abzählbar</span>, wenn es eine bijektive Abbildung ℕ → M gibt. Für ℕ × ℕ genügt eine systematische Aufzählung aller Paare.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Diagonalen-Schema:
  (0,0)
  (1,0)  (0,1)
  (2,0)  (1,1)  (0,2)
  (3,0)  (2,1)  (1,2)  (0,3)
  ...

Reihenfolge der Aufzählung:
  (0,0), (0,1), (1,0), (0,2), (1,1), (2,0), ...

Dies definiert eine Bijektion f : ℕ → ℕ×ℕ → abzählbar ✓`}</pre>
              </>,
              <p>Allgemein: Jedes endliche kartesische Produkt abzählbarer Mengen ist abzählbar.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ℕ×ℕ ist überabzählbar, weil ℕ „unendlich viele Zeilen" mit „unendlich vielen Einträgen" hat → <strong>✅ Richtig:</strong> Die Diagonalen-Aufzählung ordnet jedem (m,n) eine eindeutige natürliche Zahl zu; überabzählbar ist ℝ (Cantor-Diagonale), nicht ℕ×ℕ</li>
              </ul>,
              <p>Kann jedes Paar (m, n) ∈ ℕ×ℕ in der Liste gefunden werden? (m, n) liegt in Diagonale m+n und ist dort an eindeutiger Stelle.</p>,
            ),
            solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion ℕ → ℕ×ℕ:\n(0,0), (0,1), (1,0), (0,2), (1,1), (2,0), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
          },
        ],
      },
      {
        id: 'b6a2',
        nr: 2,
        title: 'Kartesisches Produkt und Autonummern',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Seien M₁, …, Mₙ endliche nicht-leere Mengen. Geben Sie eine Formel für die Anzahl der Elemente des kartesischen Produkts M₁ × … × Mₙ an (ohne Beweis).',
            hint: h(
              <>
                <p>Das <span className="hint-em">kartesische Produkt</span> A × B enthält alle geordneten Paare (a, b). Pro Wert von a gibt es |B| Möglichkeiten für b → insgesamt |A| · |B| Paare.</p>
                <p>Für n Mengen verallgemeinert sich das durch vollständige Induktion.</p>
              </>,
              <>
                <pre className="hint-code-block">{`|M₁ × M₂| = |M₁| · |M₂|

Beispiel: |{1,2} × {a,b,c}| = 2 · 3 = 6
  Paare: (1,a),(1,b),(1,c),(2,a),(2,b),(2,c)

Allgemein:
|M₁ × … × Mₙ| = |M₁| · |M₂| · … · |Mₙ|`}</pre>
              </>,
              <p>Anschaulich: Für jeden der |M₁| Werte der ersten Komponente gibt es |M₂| Möglichkeiten für die zweite, usw.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> |M₁ × M₂| = |M₁| + |M₂| (addiert) → <strong>✅ Richtig:</strong> Für jedes der |M₁| Elemente der ersten Komponente gibt es |M₂| Möglichkeiten für die zweite → Multiplikation: |M₁| · |M₂|</li>
                <li><strong>❌ Falsch:</strong> (1,a) = (a,1) → <strong>✅ Richtig:</strong> Im kartesischen Produkt ist die Reihenfolge relevant; (1,a) und (a,1) sind verschiedene geordnete Paare</li>
              </ul>,
              <p>Probe: |{'{1,2}'} × {'{a,b,c}'}| = ? Alle Paare aufschreiben und zählen.</p>,
            ),
            solution: '|M₁ × ⋯ × Mₙ| = |M₁| · ⋯ · |Mₙ|\n\n(Formal kann die Formel über vollständige Induktion nach n gezeigt werden.)',
          },
          {
            letter: 'b',
            text: 'Wie viele Autonummern der Form\n\n  FD ‐ b₁b₂  z₁z₂z₃\n\ngibt es, wobei b₁ und b₂ jeweils beliebige Buchstaben zwischen A und Z sein können und z₁ ∈ {1, …, 9}, z₂, z₃ ∈ {0, …, 9} gelten soll?',
            hint: h(
              <>
                <p>Jede unabhängige Zeichenwahl wird <span className="hint-em">multipliziert</span> (Produktregel). Es gibt 5 unabhängige Stellen:</p>
                <ul>
                  <li>b₁, b₂: je 26 Möglichkeiten (A bis Z)</li>
                  <li>z₁: 9 Möglichkeiten (1 bis 9, keine 0)</li>
                  <li>z₂, z₃: je 10 Möglichkeiten (0 bis 9)</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`Menge = {(b₁, b₂, z₁, z₂, z₃) : b₁,b₂ ∈ {A,...,Z},
                                    z₁ ∈ {1,...,9},
                                    z₂,z₃ ∈ {0,...,9}}

= {A,...,Z} × {A,...,Z} × {1,...,9} × {0,...,9} × {0,...,9}

|Menge| = 26 · 26 · 9 · 10 · 10 = 608 400`}</pre>
              </>,
              <p>Analogie: PIN mit 4 Ziffern (0–9): 10⁴ = 10 000 mögliche PINs.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> z₁ hat 10 Möglichkeiten {'{0,…,9}'} → <strong>✅ Richtig:</strong> Die Aufgabe schreibt z₁ ∈ {'{1,…,9}'} vor (keine führende Null); nur 9 Möglichkeiten</li>
                <li><strong>❌ Falsch:</strong> 26+26+9+10+10 = 81 (Summe) → <strong>✅ Richtig:</strong> Unabhängige Stellen werden multipliziert: 26·26·9·10·10 = 608 400</li>
              </ul>,
              <p>Warum startet z₁ bei 1 und nicht 0? Die Aufgabenstellung schreibt z₁ ∈ {'{1,…,9}'} vor.</p>,
            ),
            solution: '|Menge der Autonummern|\n= |{(b₁, b₂, z₁, z₂, z₃) : b₁,b₂ ∈ {A,...,Z}, z₁ ∈ {1,...,9}, z₂,z₃ ∈ {0,...,9}}|\n= |{A,...,Z}| · |{A,...,Z}| · |{1,...,9}| · |{0,...,9}| · |{0,...,9}|\n= 26 · 26 · 9 · 10 · 10\n= 608 400',
          },
        ],
      },
      {
        id: 'b6a3',
        nr: 3,
        title: 'Dualzahlen und Passwörter',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Wie viele fünfstellige Dualzahlen gibt es, die mit 11 beginnen oder mit 00 enden?',
            hint: h(
              <>
                <p><span className="hint-em">Inklusion-Exklusion</span>: |A ∪ B| = |A| + |B| − |A ∩ B|</p>
                <p>A = {'{'}fünfstellige Dualzahlen, die mit 11 beginnen{'}'}, B = {'{'}…, die mit 00 enden{'}'}.</p>
              </>,
              <>
                <pre className="hint-code-block">{`A: 1 1 _ _ _  →  3 freie Stellen  →  |A| = 2³ = 8
B: _ _ _ 0 0  →  3 freie Stellen  →  |B| = 2³ = 8
A∩B: 1 1 _ 0 0  →  1 freie Stelle  →  |A∩B| = 2¹ = 2

|A ∪ B| = 8 + 8 − 2 = 14`}</pre>
              </>,
              <>
                <p>Beispiel: 4-stellige Binärzahlen, die mit 1 beginnen oder mit 0 enden:</p>
                <pre className="hint-code-block">{`A: 1 _ _ _  → 2³ = 8
B: _ _ _ 0  → 2³ = 8
A∩B: 1 _ _ 0  → 2² = 4
|A∪B| = 8+8−4 = 12`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> |A∪B| = |A|+|B| = 16 (ohne Subtraktion) → <strong>✅ Richtig:</strong> Zahlen in A∩B werden doppelt gezählt; Inklusion-Exklusion: 8+8−2=14</li>
                <li><strong>❌ Falsch:</strong> A∩B = ∅ weil „11 anfangen" und „00 enden" sich ausschließen → <strong>✅ Richtig:</strong> Eine Dualzahl kann beides haben; 11?00 mit einer freien Stelle → 2 Elemente</li>
              </ul>,
              <p>Probe: Alle 32 fünfstelligen Dualzahlen (00000–11111) aufschreiben und zählen, wie viele mit 11 beginnen oder mit 00 enden.</p>,
            ),
            solution: 'A = {mit 11 anfangend}: |A| = 2³ = 8\nB = {mit 00 endend}:    |B| = 2³ = 8\nA ∩ B = {11?00}:       |A∩B| = 2¹ = 2\n\n|A ∪ B| = 8 + 8 − 2 = 14',
          },
          {
            letter: 'b',
            text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden?',
            hint: h(
              <p>Jede der 6 Stellen kann unabhängig ein Zeichen aus dem Alphabet der Größe 26 + 10 = 36 sein.</p>,
              <>
                <pre className="hint-code-block">{`Zeichenalphabet: 26 Buchstaben + 10 Ziffern = 36 Zeichen

6 Stellen, je 36 Möglichkeiten:
  36 · 36 · 36 · 36 · 36 · 36 = 36⁶`}</pre>
              </>,
              <p>Analogie: 4-stellige PIN aus 10 Ziffern: 10⁴ = 10 000 PINs.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 36·6 = 216 → <strong>✅ Richtig:</strong> Jede Stelle wird unabhängig gewählt; 6 Stellen mit je 36 Möglichkeiten ergibt 36⁶ (Potenz, nicht Produkt mit 6)</li>
                <li><strong>❌ Falsch:</strong> 26⁶ + 10⁶ (Buchstaben und Ziffern getrennt addiert) → <strong>✅ Richtig:</strong> Pro Stelle kann jedes der 36 Zeichen gewählt werden; Basis des Alphabets ist 36, nicht 26 oder 10</li>
              </ul>,
              <p>Probe: Für 1-stellige Passwörter: 36¹ = 36 Zeichen. Für 2-stellige: 36² = 1296 Paare.</p>,
            ),
            solution: '(26 + 10)⁶ = 36⁶',
          },
          {
            letter: 'c',
            text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden, wenn in jedem Passwort mindestens eine Ziffer vorkommen soll?',
            hint: h(
              <>
                <p><span className="hint-em">Komplementärmethode</span>: Statt direkt zu zählen, wie viele Passwörter mindestens eine Ziffer enthalten, zählt man das Gegenteil — Passwörter ohne Ziffer — und subtrahiert.</p>
                <p>|mindestens eine Ziffer| = |alle| − |keine Ziffer|</p>
              </>,
              <>
                <pre className="hint-code-block">{`Alle 6-stelligen Passwörter:     36⁶
Nur Buchstaben (keine Ziffer):   26⁶

Mindestens eine Ziffer: 36⁶ − 26⁶`}</pre>
              </>,
              <>
                <p>Analogie: Wie viele 4-stellige PINs enthalten mindestens eine gerade Ziffer?</p>
                <pre className="hint-code-block">{`Alle: 10⁴ = 10 000
Nur ungerade Ziffern: 5⁴ = 625
Mindestens eine gerade: 10 000 − 625 = 9 375`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 36⁶ − 10⁶ (nur Passwörter rein aus Ziffern abgezogen) → <strong>✅ Richtig:</strong> Es sollen Passwörter ohne Ziffer abgezogen werden; das sind Passwörter aus nur Buchstaben: 26⁶ (nicht 10⁶)</li>
                <li><strong>❌ Falsch:</strong> Direkt nach genau k Ziffern (k=1,…,6) zählen und addieren → <strong>✅ Richtig:</strong> Komplementärmethode ist einfacher: 36⁶ − 26⁶</li>
              </ul>,
              <p>Passwörter nur aus Buchstaben sind genau die ohne Ziffer. Deren Anzahl ist 26⁶.</p>,
            ),
            solution: 'Komplementärmethode:\nAlle 6-stelligen Passwörter:      36⁶\nPasswörter nur aus Buchstaben:    26⁶\n\nMindestens eine Ziffer: 36⁶ − 26⁶',
          },
        ],
      },
      {
        id: 'b6a4',
        nr: 4,
        title: 'Sitzplatzverteilung im Bus',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Auf wie viele Arten können sich 20 (unterscheidbare) Personen auf 60 Plätze in einem Bus verteilen?',
            hint: h(
              <>
                <p><span className="hint-em">Urnenmodell</span>: 60 Kugeln (Plätze), 20 Ziehungen. Da Personen unterscheidbar sind, spielt die Reihenfolge eine Rolle. Da jeder Platz nur einmal besetzt werden kann, gibt es keine Wiederholung.</p>
                <p>→ k-Variation ohne Wiederholung: V(n, k) = n! / (n−k)!</p>
              </>,
              <>
                <pre className="hint-code-block">{`n = 60  (Plätze ≅ Kugeln)
k = 20  (Personen ≅ Ziehungen)

Ohne Wiederholung, MIT Reihenfolge:

V(60, 20) = 60! / (60−20)! = 60! / 40!
           = 60 · 59 · 58 · … · 41`}</pre>
              </>,
              <p>Vergleich: Für Platz 1 gibt es 60 Möglichkeiten, für Platz 2 danach 59, usw.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> C(60,20) wählen (ohne Reihenfolge) → <strong>✅ Richtig:</strong> Personen sind unterscheidbar → Reihenfolge zählt; wer auf welchem Platz sitzt ist relevant → Variation, nicht Kombination</li>
                <li><strong>❌ Falsch:</strong> 60²⁰ (mit Wiederholung) → <strong>✅ Richtig:</strong> Jeder Platz kann nur von einer Person besetzt werden → ohne Wiederholung; V(60,20) = 60!/40!</li>
              </ul>,
              <p>Ist es ein Unterschied, ob Person A auf Platz 1 und Person B auf Platz 2 sitzt vs. umgekehrt? Ja → Reihenfolge zählt → Variation.</p>,
            ),
            solution: 'Urnenmodell: 60 Kugeln ≅ Plätze im Bus,\n20 Ziehungen ohne Wiederholung mit Reihenfolge.\n\nV(60, 20) = 60! / 40! = 60 · 59 · … · 41',
          },
        ],
      },
      {
        id: 'b6a5',
        nr: 5,
        title: 'Spatzen auf Telegraphenleitungen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Auf wie viele Arten können sich 2 nicht unterscheidbare Spatzen auf 4 unterschiedliche Telegraphenleitungen verteilen?',
            hint: h(
              <>
                <p><span className="hint-em">Urnenmodell</span>: Spatzen sind nicht unterscheidbar → keine Reihenfolge. Eine Leitung darf mehrfach besetzt werden → Wiederholung erlaubt.</p>
                <p>→ Kombination mit Wiederholung: C*(n, k) = C(n+k−1, k)</p>
              </>,
              <>
                <pre className="hint-code-block">{`n = 4  (Leitungen ≅ Kugeln)
k = 2  (Spatzen ≅ Ziehungen)

Mit Wiederholung, OHNE Reihenfolge:

C*(4, 2) = C(4+2−1, 2) = C(5, 2) = 10`}</pre>
              </>,
              <>
                <p>Probe: Alle Möglichkeiten (L₁ ≤ L₂, da Spatzen identisch):</p>
                <pre className="hint-code-block">{`(1,1)(1,2)(1,3)(1,4)(2,2)(2,3)(2,4)(3,3)(3,4)(4,4)
→ 10 ✓`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> C(4,2) = 6 (Kombination ohne Wiederholung) → <strong>✅ Richtig:</strong> Mehrere Spatzen dürfen auf derselben Leitung sitzen → mit Wiederholung; C*(4,2) = C(5,2) = 10</li>
                <li><strong>❌ Falsch:</strong> 4² = 16 (Variation mit Wiederholung) → <strong>✅ Richtig:</strong> Spatzen sind nicht unterscheidbar → Reihenfolge spielt keine Rolle; (L1,L2) = (L2,L1) → Kombination, nicht Variation</li>
              </ul>,
              <p>Sind Spatzen unterscheidbar? (Nein → ohne Reihenfolge.) Darf eine Leitung mehrfach besetzt werden? (Ja → mit Wiederholung.)</p>,
            ),
            solution: 'Urnenmodell: 4 Kugeln ≅ Telegraphenleitungen,\n2 Ziehungen mit Wiederholung ohne Reihenfolge.\n\nC*(4, 2) = C(4+2−1, 2) = C(5, 2) = 10 Möglichkeiten.',
          },
        ],
      },
      {
        id: 'b6a6',
        nr: 6,
        title: 'Wagenfolgen im Zug',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Ein Zug besteht aus 3 Wagen der ersten Klasse und 5 Wagen der zweiten Klasse. Die Wagen der ersten Klasse sind nicht weiter unterscheidbar, ebenso wenig die Wagen der zweiten Klasse. Wie viele unterschiedliche Wagenfolgen sind möglich?',
            hint: h(
              <>
                <p><span className="hint-em">Urnenmodell</span>: 8 Wagenpositionen, davon 3 für die erste Klasse auswählen. Wagen einer Klasse sind identisch → keine Reihenfolge. Jede Position kann nur einmal besetzt werden → keine Wiederholung.</p>
                <p>→ Kombination ohne Wiederholung: C(n, k) = n! / (k! · (n−k)!)</p>
              </>,
              <>
                <pre className="hint-code-block">{`n = 8  (Positionen ≅ Kugeln)
k = 3  (Positionen für 1. Klasse ≅ Ziehungen)

Ohne Wiederholung, OHNE Reihenfolge:

C(8, 3) = 8! / (3! · 5!) = (8·7·6)/(3·2·1) = 56`}</pre>
              </>,
              <p>Alternativ: C(8, 5) = 56 (5 Positionen für 2. Klasse wählen) — ergibt dasselbe wegen C(n,k) = C(n,n−k).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 8! = 40 320 (alle Permutationen) → <strong>✅ Richtig:</strong> Die 3 Erstklasse-Wagen sind identisch und die 5 Zweitklasse-Wagen sind identisch; nur die Positionen zählen → C(8,3) = 56</li>
                <li><strong>❌ Falsch:</strong> C(8,3) = 8!/3! (Nenner vergessen) → <strong>✅ Richtig:</strong> C(8,3) = 8!/(3!·5!) = 56; beide Faktoren im Nenner nötig</li>
              </ul>,
              <p>Probe: C(8,3) = 8!/(3!·5!) = 336/6 = 56. Alternativ: Pascal'sches Dreieck, Zeile 8, Position 3.</p>,
            ),
            solution: 'Urnenmodell: 8 Kugeln ≅ 8 Wagenpositionen,\n3 Ziehungen ohne Wiederholung ohne Reihenfolge.\n\nC(8, 3) = (8 über 3) = 56 mögliche Wagenreihungen.',
          },
        ],
      },
      {
        id: 'b6a7',
        nr: 7,
        title: 'Anagramme',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Wie viele „Anagramme" des Wortes „MATHE" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 5 Buchstaben angeordnet werden?',
            hint: h(
              <>
                <p>Alle 5 Buchstaben von MATHE sind <span className="hint-em">verschieden</span>. Gesucht ist die Anzahl aller Permutationen von 5 verschiedenen Elementen.</p>
                <p>P(n) = n!</p>
              </>,
              <>
                <pre className="hint-code-block">{`MATHE: M, A, T, H, E → 5 verschiedene Buchstaben

P(5) = 5! = 5 · 4 · 3 · 2 · 1 = 120`}</pre>
              </>,
              <>
                <p>Probe: Anagramme von „AB": AB, BA → 2! = 2 ✓</p>
                <p>Anagramme von „ABC": ABC, ACB, BAC, BCA, CAB, CBA → 3! = 6 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> 5² = 25 (mit Wiederholung) → <strong>✅ Richtig:</strong> Jeder Buchstabe kann nur einmal verwendet werden (kein Buchstabe zweimal in MATHE); alle 5 sind verschieden → P(5) = 5! = 120</li>
                <li><strong>❌ Falsch:</strong> C(5,5) = 1 (Kombination) → <strong>✅ Richtig:</strong> Reihenfolge zählt — MATHE ≠ MAHTE; Permutation P(5) = 5! = 120</li>
              </ul>,
              <p>Zählt die Reihenfolge? Ja → Permutation. Gibt es Wiederholungen? Nein → P(n) = n!</p>,
            ),
            solution: 'Alle 5 Buchstaben von MATHE sind verschieden.\nP(5) = 5! = 120 verschiedene Anordnungen.',
          },
          {
            letter: 'b',
            text: 'Wie viele „Anagramme" des Wortes „KLAUSUR" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 7 Buchstaben angeordnet werden?',
            hint: h(
              <>
                <p>KLAUSUR hat 7 Buchstaben, aber <span className="hint-em">U kommt zweimal vor</span>. Die zwei U sind nicht unterscheidbar.</p>
                <p>Vorgehen: Zuerst die 2 Positionen für U wählen (C(7,2)), dann die restlichen 5 verschiedenen Buchstaben permutieren (5!).</p>
              </>,
              <>
                <pre className="hint-code-block">{`KLAUSUR: K, L, A, U, S, U, R → U doppelt!

Schritt 1: Positionen für die beiden U wählen
  n = 7 Positionen, k = 2 U's
  C(7, 2) = 21

Schritt 2: K, L, A, S, R auf restliche 5 Positionen
  P(5) = 5! = 120

Gesamt: C(7,2) · 5! = 21 · 120 = 2520`}</pre>
              </>,
              <p>Alternativformel: 7! / 2! = 5040 / 2 = 2520 (dividiere durch 2!, da U 2-mal vorkommt).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 7! = 5040 → <strong>✅ Richtig:</strong> Die zwei U's sind identisch; tausche sie → gleiche Anordnung, aber doppelt gezählt; daher 7!/2! = 2520</li>
                <li><strong>❌ Falsch:</strong> Nur 5! = 120 (die restlichen Buchstaben) → <strong>✅ Richtig:</strong> Zusätzlich müssen die 2 U-Positionen aus 7 Gesamtpositionen gewählt werden: C(7,2)·5! = 21·120 = 2520</li>
              </ul>,
              <p>Probe: 7! / 2! kürzt die doppelt gezählten U-Tauschungen: 5040 / 2 = 2520 ✓</p>,
            ),
            solution: 'KLAUSUR hat 7 Buchstaben, U kommt zweimal vor.\n\nUrnenmodell für die U-Positionen:\n  n = 7 Positionen, k = 2 U\'s\n  C(7, 2) = (7 über 2) = 21\n\nPermutation der restlichen 5 Buchstaben:\n  5! = 120\n\nGesamt: C(7, 2) · P(5) = 21 · 120 = 2520\n\n(Alternativ: 7! / 2! = 5040 / 2 = 2520)',
          },
        ],
      },
      {
        id: 'b6a8',
        nr: 8,
        title: 'Gitterwege (Wenn noch Zeit ist …)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Betrachten Sie das Gitter in Abbildung 1. Die Punkte markieren die so genannten Knoten des Gitters. Wie viele Wege mit genau 13 Schritten gibt es, um von A (untere linke Ecke) nach B (obere rechte Ecke) zu gelangen? Dabei bedeutet ein Schritt, dass man von einem Knoten zu einem benachbarten Knoten geht (nur nach rechts oder nach oben).',
            hint: h(
              <>
                <p>Um von A nach B zu gelangen, muss man genau <span className="hint-em">8 Schritte nach rechts</span> und <span className="hint-em">5 Schritte nach oben</span> machen — in beliebiger Reihenfolge.</p>
                <p>Ein Weg entspricht einer Wahl, bei welchen der 13 Schritte man nach oben geht.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Gesamtschritte: 13  (= 8 rechts + 5 oben)
Davon 5 nach oben wählen:

Urnenmodell:
  n = 13 Kugeln ≅ 13 Schritte
  k = 5  Ziehungen ≅ Welche Schritte gehen nach oben?
  Ohne Zurücklegen, ohne Reihenfolge:

C(13, 5) = 13! / (5! · 8!) = 1287`}</pre>
              </>,
              <p>Alternativ: C(13, 8) = 1287 (die 8 Rechts-Schritte auswählen) — liefert dasselbe Ergebnis.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 2¹³ (bei jedem Schritt frei wählen rechts/oben) → <strong>✅ Richtig:</strong> Es gibt genau 8 Rechts- und 5 Oben-Schritte (fest); nur die Reihenfolge variiert → C(13,5) = 1287</li>
                <li><strong>❌ Falsch:</strong> 13! (alle Schritt-Permutationen) → <strong>✅ Richtig:</strong> Die 8 Rechts-Schritte sind untereinander identisch, ebenso die 5 Oben-Schritte; durch C(13,5) werden Doppelzählungen vermieden</li>
              </ul>,
              <p>Probe: Einfaches 2×1-Gitter (3 Schritte: 2 rechts, 1 oben): C(3,1) = 3 mögliche Wege. Alle aufschreiben: ROO, ORO, OOR → 3 ✓</p>,
            ),
            solution: 'Um von A nach B zu kommen: genau 8 Schritte rechts + 5 Schritte oben.\n\nUrnenmodell:\n  n = 13 Schritte, k = 5 nach-oben-Schritte auswählen\n  Ohne Zurücklegen, ohne Reihenfolge:\n\nC(13, 5) = (13 über 5) = 1287 unterschiedliche Wege.',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt7',
    nr: '7',
    titel: 'Folgen, geometrische Summenformel',
    aufgaben: [
      {
        id: 'b7a1',
        nr: 1,
        title: 'Abbildungsvorschriften und rekursive Folge',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Geben Sie zu nachstehenden Folgen jeweils die Abbildungsvorschrift ℕ → ℝ, n ↦ xₙ an:\n\n(i)   (xₙ) = (0, 3, 6, 9, 12, …)\n(ii)  (xₙ) = (−4, −1, 2, 5, 8, …)\n(iii) (xₙ) = (0, −1, 2, −3, 4, …)\n(iv)  (xₙ) = (0, 1, −2, 3, −4, …)\n(v)   (xₙ) = (1/2, 1/4, 1/8, 1/16, 1/32, …)\n(vi)  (xₙ) = (1, 1/3, 1/7, 1/15, 1/31, …)',
            hint: h(
              <>
                <p>Eine Abbildungsvorschrift n ↦ xₙ beschreibt, wie der Index n (beginnend bei 0) den Folgenterm xₙ erzeugt. Suche Muster:</p>
                <ul>
                  <li><span className="hint-em">Arithmetische Folge</span>: konstante Differenz → xₙ = a + d·n</li>
                  <li><span className="hint-em">Vorzeichenwechsel</span>: Faktor (−1)ⁿ oder (−1)ⁿ⁺¹</li>
                  <li><span className="hint-em">Geometrische Folge</span>: konstantes Verhältnis → xₙ = a·rⁿ</li>
                  <li><span className="hint-em">Nenner der Form 2ⁿ−1</span>: Potenzen von 2 minus 1 prüfen</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`(i)  0,3,6,9,… Differenz 3, Start 0 → xₙ = 3n
(ii) −4,−1,2,5,… Differenz 3, Start −4 → xₙ = −4+3n
(iii) 0,−1,2,−3,… Betrag = n, Vorzeichen (−1)ⁿ → xₙ = (−1)ⁿn
(iv)  0,1,−2,3,… Betrag = n, Vorzeichen (−1)ⁿ⁺¹ → xₙ = (−1)ⁿ⁺¹n
(v)  1/2,1/4,1/8,… Nenner = 2ⁿ⁺¹ → xₙ = 1/2ⁿ⁺¹
(vi) 1,1/3,1/7,… Nenner = 1,3,7,15,31 = 2¹−1,2²−1,…
     → xₙ = 1/(2ⁿ⁺¹ − 1)`}</pre>
              </>,
              <>
                <p>Probe für (v): n=0 → 1/2¹=1/2 ✓; n=1 → 1/2²=1/4 ✓</p>
                <p>Probe für (vi): n=0 → 1/(2−1)=1 ✓; n=1 → 1/(4−1)=1/3 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> xₙ = (−1)ⁿ⁺¹n für (iii) → <strong>✅ Richtig:</strong> Probe: n=1: (−1)²·1=1, aber gefordert ist −1; also (−1)ⁿ·n für (iii); für (iv) ist es (−1)ⁿ⁺¹·n</li>
                <li><strong>❌ Falsch:</strong> xₙ = (1/2)ⁿ für (v) → <strong>✅ Richtig:</strong> n=0 liefert (1/2)⁰=1, aber x₀=1/2 gefordert; richtig: xₙ = (1/2)ⁿ⁺¹ (Probe: n=0 → 1/2 ✓)</li>
              </ul>,
              <p>Probe: Index n=0 und n=1 in die gefundene Vorschrift einsetzen und mit den ersten zwei Folgengliedern vergleichen.</p>,
            ),
            solution: '(i)   f: ℕ→ℝ, n ↦ 3n\n(ii)  f: ℕ→ℝ, n ↦ −4 + 3n\n(iii) f: ℕ→ℝ, n ↦ (−1)ⁿ n\n(iv)  f: ℕ→ℝ, n ↦ (−1)ⁿ⁺¹ n\n(v)   f: ℕ→ℝ, n ↦ 1 / 2ⁿ⁺¹\n(vi)  f: ℕ→ℝ, n ↦ 1 / (2ⁿ⁺¹ − 1)',
          },
          {
            letter: 'b',
            text: <>
              {'Die Folge (aₙ) sei rekursiv definiert durch\n\n  a₀ := 2,    aₙ₊₁ := '}
              <Frac n="2aₙ" d="2 + aₙ" />
              {',    n ≥ 0.\n\nBestimmen Sie a₁, a₂ und a₃.'}
            </>,
            hint: h(
              <>
                <p>Bei einer <span className="hint-em">rekursiv definierten Folge</span> berechnet man jeden Term aus dem vorherigen. Schritt für Schritt die Formel anwenden:</p>
                <p>aₙ₊₁ = 2aₙ / (2 + aₙ)</p>
              </>,
              <>
                <pre className="hint-code-block">{`a₀ = 2

a₁ = 2·a₀ / (2 + a₀) = 2·2 / (2+2) = 4/4 = 1

a₂ = 2·a₁ / (2 + a₁) = 2·1 / (2+1) = 2/3

a₃ = 2·a₂ / (2 + a₂) = 2·(2/3) / (2 + 2/3)
   = (4/3) / (8/3) = (4/3)·(3/8) = 1/2`}</pre>
              </>,
              <>
                <p>Tipp für a₃: Gemischten Nenner 2+2/3 zuerst auf gemeinsamen Nenner bringen: 6/3 + 2/3 = 8/3</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a₃ = f(a₁) statt f(a₂) → <strong>✅ Richtig:</strong> Die Rekursion verlangt den unmittelbaren Vorgänger; a₃ = 2a₂/(2+a₂) = 2·(2/3)/(2+2/3)</li>
                <li><strong>❌ Falsch:</strong> (4/3)/(8/3) = 4/3 · 8/3 = 32/9 (Kehrwert vergessen) → <strong>✅ Richtig:</strong> Division durch Bruch = Multiplikation mit Kehrwert: (4/3)/(8/3) = (4/3)·(3/8) = 12/24 = 1/2</li>
              </ul>,
              <p>Probe: Folgt die Folge 2, 1, 2/3, 1/2, … einem Muster? Die Terme 1/a_n: 1/2, 1, 3/2, 2, … steigen um 1/2 — arithmetische Folge.</p>,
            ),
            solution: (
              <>
                {'a₁ = '}<Frac n="2·2" d="2+2" />{' = '}<Frac n="4" d="4" />{' = 1\n'}
                {'a₂ = '}<Frac n="2·1" d="2+1" />{' = '}<Frac n="2" d="3" />{'\n'}
                {'a₃ = '}<Frac n="2·⅔" d="2+⅔" />{' = '}<Frac n="⁴⁄₃" d="⁸⁄₃" />{' = '}<Frac n="1" d="2" />
              </>
            ),
          },
        ],
      },
      {
        id: 'b7a2',
        nr: 2,
        title: 'Konvergenz und Divergenz von Folgen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass mindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ + yₙ) konvergiert.',
            hint: h(
              <>
                <p>Wenn sich zwei divergente Folgen in gewissem Sinne „gegenseitig aufheben", kann die Summe trotzdem konvergieren. Klassisches Beispiel: alternierende Folge plus ihr Negatives.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle: xₙ = (−1)ⁿ,  yₙ = (−1)ⁿ⁺¹ = −(−1)ⁿ

Dann: xₙ + yₙ = (−1)ⁿ − (−1)ⁿ = 0 für alle n

(xₙ + yₙ) = (0, 0, 0, …)  →  konvergent (Grenzwert 0)

Aber xₙ = (−1,1,−1,1,…) divergiert.`}</pre>
              </>,
              <>
                <p>Alternatives Beispiel: xₙ = n, yₙ = −n</p>
                <pre className="hint-code-block">{`xₙ + yₙ = 0  →  konvergiert gegen 0
xₙ = n  →  divergiert gegen +∞`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Beide Folgen konvergent wählen → <strong>✅ Richtig:</strong> Die Aufgabe verlangt mindestens eine divergente Folge; z.B. xₙ=(−1)ⁿ divergiert, aber xₙ+yₙ=0 wenn yₙ=−(−1)ⁿ</li>
              </ul>,
              <p>Reicht es, wenn nur eine der zwei Folgen divergiert? Ja — aber beide divergent ist auch erlaubt.</p>,
            ),
            solution: 'Zum Beispiel (xₙ) = ((−1)ⁿ), (yₙ) = ((−1)ⁿ⁺¹):\nxₙ + yₙ = 0 für alle n → konvergiert gegen 0.\n(xₙ) divergiert.\n\nAlternativ: (xₙ) = (n), (yₙ) = (−n).',
          },
          {
            letter: 'b',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass mindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ · yₙ) konvergiert.',
            hint: h(
              <>
                <p>Ein Faktor 0 macht jedes Produkt zu 0, egal wie sich der andere Faktor verhält. Oder: eine divergente Folge mit einer passend gegen 0 gehenden Folge multiplizieren.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wahl 1: xₙ = 0 für alle n,  yₙ = (−1)ⁿ
  xₙ · yₙ = 0  →  konvergiert gegen 0
  yₙ divergiert.

Wahl 2: xₙ = n,  yₙ = 1/n²
  xₙ · yₙ = 1/n  →  konvergiert gegen 0
  xₙ divergiert.`}</pre>
              </>,
              <p>Auch möglich: xₙ = n, yₙ = 1/n — dann xₙ·yₙ = 1 für alle n.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur divergente Beispiele suchen und frustriert aufgeben → <strong>✅ Richtig:</strong> xₙ=0 konstant (konvergent) und yₙ=(−1)ⁿ (divergent) → xₙ·yₙ=0 (konvergent) ✓</li>
              </ul>,
              <p>Einfachste Strategie: eine Folge konstant 0 wählen — dann ist das Produkt immer 0.</p>,
            ),
            solution: 'Zum Beispiel (xₙ) = (0,0,0,…), (yₙ) = ((−1)ⁿ):\nxₙ · yₙ = 0 für alle n → konvergiert gegen 0.\n(yₙ) divergiert.\n\nAlternativ: (xₙ) = (n), (yₙ) = (1/n).',
          },
          {
            letter: 'c',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, die beide konvergieren, und so dass xₙ < yₙ für alle n ∈ ℕ gilt, aber lim xₙ = lim yₙ.',
            hint: h(
              <>
                <p>Obwohl xₙ &lt; yₙ für alle n gilt, müssen die Grenzwerte nicht verschieden sein. Dieses Phänomen zeigt: aus strikter Ungleichheit zwischen Folgengliedern folgt nur schwache Ungleichheit für die Grenzwerte.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle: xₙ = 0,  yₙ = 1/n

Dann: 0 < 1/n für alle n ∈ ℕ* ✓

lim xₙ = 0  und  lim yₙ = lim 1/n = 0

→  lim xₙ = lim yₙ = 0,  aber xₙ < yₙ für alle n ≥ 1`}</pre>
              </>,
              <p>Allgemein gilt: xₙ ≤ yₙ für alle n ⟹ lim xₙ ≤ lim yₙ. Die strikte Ungleichung überträgt sich aber nicht strikt auf Grenzwerte!</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Aus xₙ &lt; yₙ folgern, dass lim xₙ &lt; lim yₙ → <strong>✅ Richtig:</strong> Strikte Ungleichung überträgt sich nicht auf Grenzwerte; aus xₙ ≤ yₙ folgt nur lim xₙ ≤ lim yₙ; Gegenbeispiel: xₙ=0, yₙ=1/n, beide → 0</li>
              </ul>,
              <p>Probe: 0 &lt; 1/n für n=1,2,3,… ✓. Beide Folgen konvergieren gegen 0 ✓.</p>,
            ),
            solution: '(xₙ) = (0,0,0,…), (yₙ) = (1/n):\nxₙ = 0 < 1/n = yₙ für alle n ≥ 1 ✓\nlim xₙ = 0 = lim yₙ ✓\n\nAus xₙ < yₙ folgt für Grenzwerte nur lim xₙ ≤ lim yₙ (keine strikte Ungleichung).',
          },
          {
            letter: 'd',
            text: 'Finden Sie eine Folge (xₙ) ⊆ ℝ, die divergiert, aber für die die Folge (|xₙ|) konvergiert.',
            hint: h(
              <>
                <p>Eine Folge kann divergieren, weil sie zwischen zwei Werten hin und her springt (keine eindeutige Annäherung), obwohl die <span className="hint-em">Beträge</span> konstant sind und damit konvergieren.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle: xₙ = (−1)ⁿ = (−1, 1, −1, 1, …)

(xₙ) divergiert: Glieder wechseln zwischen −1 und 1.

|xₙ| = |(−1)ⁿ| = 1 für alle n
→  (|xₙ|) = (1, 1, 1, …)  konvergiert gegen 1.`}</pre>
              </>,
              <p>Allgemein: Eine Folge, die nicht konvergiert, aber beschränkt ist, ist ein Kandidat — falls zudem |xₙ| konstant ist, konvergiert (|xₙ|) sofort.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim |xₙ| existiert → lim xₙ existiert auch → <strong>✅ Richtig:</strong> Das gilt nur im Spezialfall lim |xₙ|=0 (dann lim xₙ=0); für lim |xₙ|=1 kann xₙ=(−1)ⁿ trotzdem divergieren</li>
              </ul>,
              <p>Probe: (xₙ) = (−1, 1, −1, 1, …) hat keinen Grenzwert (divergiert). |xₙ| = 1 konstant → Grenzwert 1 ✓.</p>,
            ),
            solution: '(xₙ) = ((−1)ⁿ) = (−1, 1, −1, 1, …)\n\n(xₙ) divergiert (kein Grenzwert).\n|xₙ| = 1 für alle n → (|xₙ|) konvergiert gegen 1.',
          },
        ],
      },
      {
        id: 'b7a3',
        nr: 3,
        title: 'Grenzwerte von Folgen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>
              {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = '}
              <Frac n="3n² + 4n + 20" d="4n³ + 1000" />
              {'.'}
            </>,
            hint: h(
              <>
                <p>Bei rationalen Folgen (Bruch aus Polynomen) die <span className="hint-em">höchste Potenz des Nenners</span> ausklammern und kürzen. Terme mit 1/n → 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (3n² + 4n + 20) / (4n³ + 1000)
   = n²·(3 + 4/n + 20/n²) / n³·(4 + 1000/n³)
   = (1/n) · (3 + 4/n + 20/n²) / (4 + 1000/n³)

Für n→∞: (1/n)→0, alle 1/nᵏ→0

lim xₙ = 0 · (3/4) = 0`}</pre>
              </>,
              <p>Faustregel: Grad(Zähler) &lt; Grad(Nenner) → Grenzwert = 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Grenzwert = 3/4 (nur führende Koeffizienten, Grad ignoriert) → <strong>✅ Richtig:</strong> Grad(Zähler)=2 &lt; Grad(Nenner)=3 → nach Ausklammern von n³ bleibt Faktor 1/n → Grenzwert 0</li>
              </ul>,
              <p>Ist der Grad des Zählers kleiner als der des Nenners? Dann ist der Grenzwert immer 0.</p>,
            ),
            solution: (
              <>
                {'xₙ = '}<Frac n="n²·(3 + 4/n + 20/n²)" d="n³·(4 + 1000/n³)" />{' = '}<Frac n="1" d="n" />{' · '}<Frac n="3 + 4/n + 20/n²" d="4 + 1000/n³" />{'\n\nsomit lim xₙ = 0 · '}<Frac n="3" d="4" />{' = 0'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>
              {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = '}
              <Frac n="2n³ + 7n² + 12" d="−5n³ − n + 3" />
              {'.'}
            </>,
            hint: h(
              <>
                <p>Höchste Potenz ausklammern. Bei <span className="hint-em">gleichem Grad</span> in Zähler und Nenner ist der Grenzwert das Verhältnis der führenden Koeffizienten.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = n³·(2 + 7/n + 12/n³) / n³·(−5 − 1/n² + 3/n³)
   = (2 + 7/n + 12/n³) / (−5 − 1/n² + 3/n³)

Für n→∞:

lim xₙ = 2 / (−5) = −2/5`}</pre>
              </>,
              <p>Faustregel: Grad(Zähler) = Grad(Nenner) → Grenzwert = (führender Koeffizient Zähler) / (führender Koeffizient Nenner).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Grenzwert = 2/5 (Vorzeichen des Nenners vergessen) → <strong>✅ Richtig:</strong> Führender Koeffizient des Nenners ist −5 (nicht 5); lim = 2/(−5) = −2/5</li>
              </ul>,
              <p>Probe: Für sehr großes n dominiert 2n³/(−5n³) = −2/5.</p>,
            ),
            solution: (
              <>
                {'xₙ = '}<Frac n="2 + 7/n + 12/n³" d="−5 − 1/n² + 3/n³" />{';  somit lim xₙ = '}<Frac n="2" d="−5" />{' = −'}<Frac n="2" d="5" />
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = (2 + '}<Frac n="3" d="n" />{')⁵.'}</>,
            hint: h(
              <>
                <p>Die Rechenregeln für Folgengrenzwerte erlauben, den Grenzwert „hineinzuziehen": wenn lim aₙ = a und f stetig, dann lim f(aₙ) = f(a). Hier ist f(x) = x⁵.</p>
              </>,
              <>
                <pre className="hint-code-block">{`lim (3/n) = 0

lim xₙ = lim (2 + 3/n)⁵ = (2 + 0)⁵ = 2⁵ = 32`}</pre>
              </>,
              <p>Direkt: Summenregel und Potenzregel für Grenzwerte anwenden.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 3/n → 3 statt → 0 → <strong>✅ Richtig:</strong> Für n→∞ geht jede Konstante geteilt durch n gegen 0; 3/n → 0</li>
                <li><strong>❌ Falsch:</strong> lim (2+3/n)⁵ = 2 (Potenz vergessen) → <strong>✅ Richtig:</strong> lim (2+0)⁵ = 2⁵ = 32</li>
              </ul>,
              <p>Probe: n=100 → (2 + 0.03)⁵ ≈ 2.03⁵ ≈ 34.5, noch nicht bei 32. n=10 000 → sehr nah an 32.</p>,
            ),
            solution: 'lim (3/n) = 0\nlim xₙ = (2 + 0)⁵ = 2⁵ = 32',
          },
          {
            letter: 'd',
            text: 'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = ⁿ√(2¹⁰⁰⁰).',
            hint: h(
              <>
                <p>n-te Wurzel umschreiben: ⁿ√(aᵐ) = a^(m/n). Für festes m gilt m/n → 0, und a⁰ = 1 für jedes a &gt; 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = ⁿ√(2¹⁰⁰⁰) = (2¹⁰⁰⁰)^(1/n) = 2^(1000/n)

Für n→∞: 1000/n → 0

lim xₙ = 2⁰ = 1`}</pre>
              </>,
              <>
                <p>Allgemein: lim ⁿ√(c) = 1 für jedes c &gt; 0 (da lim c^(1/n) = lim e^(ln(c)/n) = e⁰ = 1).</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim ⁿ√(2¹⁰⁰⁰) = 2 (als ob 1000 keine Rolle spielt) → <strong>✅ Richtig:</strong> xₙ = 2^(1000/n) und 1000/n → 0, also lim xₙ = 2⁰ = 1</li>
                <li><strong>❌ Falsch:</strong> 1000/n → ∞ denken → <strong>✅ Richtig:</strong> 1000 ist fest; für n→∞ gilt 1000/n → 0 (nicht ∞)</li>
              </ul>,
              <p>Schlüssel: 1000 ist eine feste Zahl. 1000/n → 0 wenn n → ∞.</p>,
            ),
            solution: 'xₙ = ⁿ√(2¹⁰⁰⁰) = 2^(1000/n)\n\nlim 1000/n = 0\n\nlim xₙ = 2⁰ = 1',
          },
          {
            letter: 'e',
            text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = ('}<Frac n="n+1" d="n" />{')ⁿ.'}</>,
            hint: h(
              <>
                <p>Erinnerung: Die Eulersche Zahl ist definiert als lim (1 + 1/n)ⁿ = e. Der Ausdruck hier ist genau diese Form.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = ((n+1)/n)ⁿ = (1 + 1/n)ⁿ

lim (1 + 1/n)ⁿ = e  (Definition von e)`}</pre>
              </>,
              <p>Dies ist ein fundamentaler Grenzwert der Analysis — e ≈ 2.718…</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim (1+1/n)ⁿ = 1 (da 1+1/n→1 und 1ⁿ=1) → <strong>✅ Richtig:</strong> Das ist der unbestimmte Ausdruck 1^∞; Basis→1 und Exponent→∞ gleichzeitig ergibt e ≈ 2.718…, nicht 1</li>
              </ul>,
              <p>Merkhilfe: xₙ = (1 + 1/n)ⁿ → e ist eine der wichtigsten Grenzwertformeln der Analysis.</p>,
            ),
            solution: 'xₙ = ((n+1)/n)ⁿ = (1 + 1/n)ⁿ\n\nlim (1 + 1/n)ⁿ = e\n\nDaher: lim xₙ = e',
          },
          {
            letter: 'f',
            text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = (−1)ⁿ · '}<Frac n="sin(n)cos(n)" d="3n³" />{'.'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Einschnürungssatz</span>: Wenn |xₙ| ≤ yₙ und lim yₙ = 0, dann lim xₙ = 0 (und damit auch lim |xₙ| = 0).</p>
                <p>Tipp: sin und cos sind beschränkt: |sin(n)| ≤ 1 und |cos(n)| ≤ 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`sin(n), cos(n) ∈ [−1, 1], also:

0 ≤ |xₙ| = |sin(n)cos(n)| / 3n³
          ≤ 1·1 / 3n³
          = 1/(3n³) =: yₙ

lim yₙ = lim 1/(3n³) = 0

Einschnürungssatz: lim |xₙ| = 0

Da lim |xₙ| = 0 ⟺ lim xₙ = 0:

lim xₙ = 0`}</pre>
              </>,
              <p>Allgemein: Wenn eine Folge durch eine Nullfolge betragsmäßig beschränkt ist, ist sie selbst eine Nullfolge.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> sin(n) und cos(n) einzeln ausrechnen wollen → <strong>✅ Richtig:</strong> Für ganzzahlige n lassen sich sin(n) und cos(n) nicht vereinfachen; stattdessen die Schranke |sin(n)| ≤ 1 nutzen</li>
                <li><strong>❌ Falsch:</strong> |(−1)ⁿ·sin(n)cos(n)|/(3n³) nicht vereinfachen → <strong>✅ Richtig:</strong> |(−1)ⁿ| = 1; daher |xₙ| = |sin(n)cos(n)|/(3n³) ≤ 1/(3n³)</li>
              </ul>,
              <p>Schlüssel: |sin(n)cos(n)| ≤ 1 immer. Die Abschätzung durch 1/(3n³) reicht für den Einschnürungssatz.</p>,
            ),
            solution: (
              <>
                {'Da sin(n), cos(n) ∈ [−1, 1] gilt:\n\n0 ≤ |xₙ| = '}<Frac n="|sin(n)cos(n)|" d="3n³" />{' ≤ '}<Frac n="1" d="3n³" />{' =: yₙ\n\nlim yₙ = 0\n\nEinschnürungssatz: lim |xₙ| = 0, also lim xₙ = 0'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b7a4',
        nr: 4,
        title: 'Konvergenz mit ε-N-Definition (Wenn noch Zeit ist …)',
        subaufgaben: [
          {
            letter: 'a',
            text: <>
              {'Für n ∈ ℕ* sei xₙ = '}<Frac n="1" d="√n" />{'. Geben Sie zu ε = 10, ε = 1, ε = '}<Frac n="1" d="10" />{' und ε = '}<Frac n="1" d="10⁶" />{' jeweils ein N ∈ ℕ an, so dass |xₙ − 0| < ε für alle n ≥ N erfüllt ist.'}
            </>,
            hint: h(
              <>
                <p>Die Bedingung |1/√n − 0| &lt; ε ist äquivalent zu 1/√n &lt; ε, also √n &gt; 1/ε, also n &gt; 1/ε². Wähle N als die kleinste natürliche Zahl mit N &gt; 1/ε².</p>
              </>,
              <>
                <pre className="hint-code-block">{`|1/√n| < ε  ⟺  n > 1/ε²

ε = 10:    1/ε² = 1/100 = 0.01  →  N = 1
ε = 1:     1/ε² = 1             →  N = 2
ε = 1/10:  1/ε² = 100           →  N = 101
ε = 1/10⁶: 1/ε² = 10¹²         →  N = 10¹² + 1`}</pre>
              </>,
              <p>Für jedes N muss gelten: für alle n ≥ N gilt 1/√n &lt; ε. Da 1/√n monoton fällt, reicht es, N &gt; 1/ε² zu wählen.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> N = 1/ε² (nicht strikt) → <strong>✅ Richtig:</strong> Bei n = 1/ε² gilt 1/√n = ε, aber gefordert ist &lt; ε (strikt); wähle N = ⌊1/ε²⌋ + 1 oder N &gt; 1/ε²</li>
              </ul>,
              <p>Probe für ε = 1/10: n = 101 → 1/√101 ≈ 0.0995 &lt; 0.1 ✓; n = 100 → 1/√100 = 0.1 = ε (nicht &lt; ε, also reicht 100 nicht).</p>,
            ),
            solution: (
              <>
                {'|'}<Frac n="1" d="√n" />{' − 0| < ε  ⟺  n > '}<Frac n="1" d="ε²" />{'\n\n'}
                {'ε = 10:     '}<Frac n="1" d="ε²" />{' = '}<Frac n="1" d="100" />{',  N = 1\n'}
                {'ε = 1:      '}<Frac n="1" d="ε²" />{' = 1,          N = 2\n'}
                {'ε = 1/10:   '}<Frac n="1" d="ε²" />{' = 100,        N = 101\n'}
                {'ε = 1/10⁶:  '}<Frac n="1" d="ε²" />{' = 10¹²,      N = 10¹² + 1'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>
              {'Zeigen Sie direkt mit der Definition von „Konvergenz gegen x*", dass lim '}<Frac n="1" d="√n" />{' = 0 gilt.\n\nHinweis: Sie dürfen ohne Beweis verwenden, dass die Wurzelfunktion monoton ist, d.h. für x, y ∈ [0, ∞) mit x ≤ y gilt auch √x ≤ √y.'}
            </>,
            hint: h(
              <>
                <p>Zu zeigen: Für jedes ε &gt; 0 existiert ein N ∈ ℕ, sodass |1/√n − 0| &lt; ε für alle n ≥ N.</p>
                <p>Strategie: N so wählen, dass N &gt; 1/ε². Dann für n ≥ N die Abschätzungskette aufschreiben und den Monotoniehweis der Wurzel nutzen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Sei ε > 0 beliebig.
Wähle N ∈ ℕ mit N > 1/ε².

Dann gilt für alle n ≥ N:

|1/√n − 0| = 1/√n
  (Wurzel monoton, n ≥ N)
           ≤ 1/√N
  (N > 1/ε²  →  √N > √(1/ε²) = 1/ε)
           < 1/(1/ε) = ε

Also: |1/√n − 0| < ε für alle n ≥ N. □`}</pre>
              </>,
              <p>Das Schöne: Man muss N nur existieren lassen (nicht eindeutig bestimmen). Jedes N &gt; 1/ε² reicht.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Ungleichungen ohne Begründung hinschreiben → <strong>✅ Richtig:</strong> Jeder Schritt braucht eine kurze Erklärung: „n≥N und Wurzel monoton → 1/√n ≤ 1/√N" und „N&gt;1/ε² → 1/√N &lt; ε"</li>
                <li><strong>❌ Falsch:</strong> N = 1/ε² setzen (nicht natürlich) → <strong>✅ Richtig:</strong> N muss ∈ ℕ sein; wähle N := ⌊1/ε²⌋ + 1 oder beliebiges N &gt; 1/ε²</li>
              </ul>,
              <p>Der Beweis ist fertig, sobald man gezeigt hat: |1/√n − 0| ≤ … &lt; ε für alle n ≥ N.</p>,
            ),
            solution: (
              <>
                {'Behauptung: lim '}<Frac n="1" d="√n" />{' = 0\n\nBeweis:\nSei ε > 0 beliebig. Wähle N ∈ ℕ mit N > '}<Frac n="1" d="ε²" />{'.\n\nDann gilt für alle n ≥ N:\n\n|'}<Frac n="1" d="√n" />{' − 0| = '}<Frac n="1" d="√n" />{' ≤ '}<Frac n="1" d="√N" />{' < '}<Frac n="1" d="√(1/ε²)" />{' = ε\n\n(Wurzel monoton; N > 1/ε² ⟹ √N > 1/ε)\n\nSomit lim '}<Frac n="1" d="√n" />{' = 0. □'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b7a5',
        nr: 5,
        title: 'Geometrische Summenformel (Wenn noch Zeit ist …)',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Bestimmen Sie mit Hilfe der geometrischen Summenformel: '}<br />{'Σ(k=0 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Geometrische Summenformel</span>: Σ(k=0 bis n) qᵏ = (1 − q^(n+1)) / (1 − q) für q ≠ 1.</p>
                <p>Hier: q = 1/2, n = 5.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=0..5) (1/2)ᵏ = (1 − (1/2)⁶) / (1 − 1/2)
                  = (1 − 1/64) / (1/2)
                  = (63/64) · 2
                  = 63/32`}</pre>
              </>,
              <p>Probe: 1 + 1/2 + 1/4 + 1/8 + 1/16 + 1/32 = 32/32 + 16/32 + 8/32 + 4/32 + 2/32 + 1/32 = 63/32 ✓</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Σ(k=0..5)(1/2)ᵏ = (1−(1/2)⁵)/(1−1/2) (Exponent n statt n+1) → <strong>✅ Richtig:</strong> Formel: (1−q^(n+1))/(1−q); hier n=5, also Exponent 6: (1−(1/2)⁶)/(1/2)</li>
                <li><strong>❌ Falsch:</strong> (63/64)/(1/2) = 63/128 → <strong>✅ Richtig:</strong> Division durch 1/2 = Multiplikation mit 2: (63/64)·2 = 63/32</li>
              </ul>,
              <p>Die geometrische Summenformel gilt für q ≠ 1. Hier q = 1/2 ≠ 1 ✓.</p>,
            ),
            solution: (
              <>
                {'Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ = '}<Frac n="1 − (1/2)⁶" d="1 − 1/2" />{' = '}<Frac n="1 − 1/64" d="1/2" />{' = '}<Frac n="63/64" d="1/2" />{' = '}<Frac n="63" d="32" />
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Bestimmen Sie: Σ(k=1 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
            hint: h(
              <>
                <p>Die Summe beginnt bei k=1 statt k=0. Einfachste Strategie: Ergebnis aus (a) nehmen und den k=0-Term abziehen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=1..5) (1/2)ᵏ = Σ(k=0..5) (1/2)ᵏ − (1/2)⁰
                  = 63/32 − 1
                  = 63/32 − 32/32
                  = 31/32`}</pre>
              </>,
              <p>Alternativ direkt: (1−(1/2)⁵)/(1−1/2) · (1/2) — aber der Trick über (a) ist kürzer.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (1/2)⁰ = 0 → <strong>✅ Richtig:</strong> Jede Zahl (≠0) hoch 0 ist 1; (1/2)⁰ = 1; dieser Term muss von 63/32 abgezogen werden</li>
              </ul>,
              <p>Probe: 1/2 + 1/4 + 1/8 + 1/16 + 1/32 = 31/32 ✓</p>,
            ),
            solution: (
              <>
                {'Σ(k=1..5) ('}<Frac n="1" d="2" />{')ᵏ = Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ − ('}<Frac n="1" d="2" />{')⁰ = '}<Frac n="63" d="32" />{' − 1 = '}<Frac n="31" d="32" />
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Bestimmen Sie: Σ(k=2 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
            hint: h(
              <>
                <p>Analog zu (b): Ergebnis aus (a) nehmen und die Terme für k=0 und k=1 abziehen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=2..5) (1/2)ᵏ = Σ(k=0..5) (1/2)ᵏ − (1/2)⁰ − (1/2)¹
                  = 63/32 − 1 − 1/2
                  = 63/32 − 32/32 − 16/32
                  = 15/32`}</pre>
              </>,
              <p>Allgemein: Σ(k=m..n) qᵏ = Σ(k=0..n) qᵏ − Σ(k=0..m−1) qᵏ</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur k=0 abziehen → <strong>✅ Richtig:</strong> Die Summe beginnt bei k=2; also k=0 und k=1 abziehen: 63/32 − 1 − 1/2 = 15/32</li>
              </ul>,
              <p>Probe: 1/4 + 1/8 + 1/16 + 1/32 = 8/32 + 4/32 + 2/32 + 1/32 = 15/32 ✓</p>,
            ),
            solution: (
              <>
                {'Σ(k=2..5) ('}<Frac n="1" d="2" />{')ᵏ = Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ − ('}<Frac n="1" d="2" />{')⁰ − ('}<Frac n="1" d="2" />{')¹\n= '}<Frac n="63" d="32" />{' − 1 − '}<Frac n="1" d="2" />{' = '}<Frac n="63" d="32" />{' − '}<Frac n="32" d="32" />{' − '}<Frac n="16" d="32" />{' = '}<Frac n="15" d="32" />
              </>
            ),
          },
          {
            letter: 'd',
            text: 'Bestimmen Sie: Σ(k=0 bis 10) (−1)ᵏ',
            hint: h(
              <>
                <p>Geometrische Summenformel mit q = −1 und n = 10:</p>
                <p>Σ(k=0 bis n) qᵏ = (1 − q^(n+1)) / (1 − q)</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=0..10) (−1)ᵏ = (1 − (−1)¹¹) / (1 − (−1))
                  = (1 − (−1)) / 2
                  = 2/2 = 1`}</pre>
              </>,
              <p>Anschaulich: 1−1+1−1+1−1+1−1+1−1+1 = 1 (11 Terme, der letzte +1 überwiegt).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−1)¹¹ = 1 (gerade Potenz angenommen) → <strong>✅ Richtig:</strong> 11 ist ungerade; (−1)¹¹ = −1; daher 1−(−1) = 2 im Zähler</li>
              </ul>,
              <p>Probe: 11 Terme (k=0,…,10): abwechselnd +1 und −1, aber erster und letzter Term sind +1 → 6 mal +1, 5 mal −1 → Summe = 1 ✓</p>,
            ),
            solution: 'Σ(k=0..10) (−1)ᵏ = (1 − (−1)¹¹) / (1 − (−1))\n= (1 − (−1)) / 2\n= 2/2 = 1',
          },
          {
            letter: 'e',
            text: 'Bestimmen Sie: Σ(k=0 bis 11) (−1)ᵏ',
            hint: h(
              <>
                <p>Geometrische Summenformel mit q = −1 und n = 11:</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=0..11) (−1)ᵏ = (1 − (−1)¹²) / (1 − (−1))
                  = (1 − 1) / 2
                  = 0/2 = 0`}</pre>
              </>,
              <p>Anschaulich: 12 Terme, abwechselnd +1 und −1, paarweise Auslöschung → Summe = 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−1)¹² = −1 (ungerade Potenz angenommen) → <strong>✅ Richtig:</strong> 12 ist gerade; (−1)¹² = +1; daher 1−1 = 0 im Zähler → Summe = 0</li>
              </ul>,
              <p>Probe: 6 mal +1 und 6 mal −1 → Summe = 0 ✓</p>,
            ),
            solution: 'Σ(k=0..11) (−1)ᵏ = (1 − (−1)¹²) / (1 − (−1))\n= (1 − 1) / 2\n= 0',
          },
          {
            letter: 'f',
            text: 'Bestimmen Sie: Σ(k=0 bis 2) 3ᵏ',
            hint: h(
              <>
                <p>Geometrische Summenformel mit q = 3 und n = 2.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=0..2) 3ᵏ = (1 − 3³) / (1 − 3)
             = (1 − 27) / (−2)
             = (−26) / (−2)
             = 13`}</pre>
              </>,
              <p>Probe: 3⁰ + 3¹ + 3² = 1 + 3 + 9 = 13 ✓</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 1−3 = 2 (Vorzeichen vergessen) → <strong>✅ Richtig:</strong> 1−3 = −2; (1−27)/(−2) = (−26)/(−2) = 13</li>
                <li><strong>❌ Falsch:</strong> Exponent n=2 statt n+1=3 verwenden → <strong>✅ Richtig:</strong> Formel: (1−q^(n+1))/(1−q); für n=2 und q=3: Exponent ist 3, nicht 2</li>
              </ul>,
              <p>Formel: Σ(k=0..n) qᵏ = (1 − q^(n+1)) / (1 − q). Für n=2, q=3: Exponent ist n+1 = 3.</p>,
            ),
            solution: 'Σ(k=0..2) 3ᵏ = (1 − 3³) / (1 − 3) = (1 − 27) / (−2) = (−26)/(−2) = 13',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt8',
    nr: '8',
    titel: 'Folgen, bestimmte Divergenz, geometrische Reihe',
    aufgaben: [
      {
        id: 'b8a1',
        nr: 1,
        title: 'Folgen mit lim xₙ = ∞ und lim yₙ = 0',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit lim xₙ = ∞ und lim yₙ = 0, sodass lim(n→∞) xₙyₙ = ∞.',
            hint: h(
              <>
                <p>Das Produkt zweier Folgen mit lim xₙ = ∞ und lim yₙ = 0 ist <span className="hint-em">unbestimmt</span> — je nach Wahl kann der Grenzwert ∞, −∞, eine Zahl c oder gar nicht existieren.</p>
                <p>Strategie: Wähle xₙ so, dass es schneller gegen ∞ wächst als yₙ gegen 0 geht.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle xₙ := n²,  yₙ := 1/n

xₙyₙ = n² · (1/n) = n → ∞ ✓

Probe:
  lim xₙ = lim n² = ∞ ✓
  lim yₙ = lim 1/n = 0 ✓
  lim xₙyₙ = lim n = ∞ ✓`}</pre>
              </>,
              <>
                <p>Alternative: xₙ = n³, yₙ = 1/n → xₙyₙ = n² → ∞</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> xₙ=n, yₙ=1/n² → xₙyₙ=1/n → 0 (zu schwach) → <strong>✅ Richtig:</strong> xₙ muss schneller wachsen als yₙ fällt; xₙ=n², yₙ=1/n → xₙyₙ=n → ∞</li>
              </ul>,
              <p>Das Produkt xₙyₙ muss selbst gegen ∞ divergieren. Prüfe: lim xₙyₙ = ∞?</p>,
            ),
            solution: 'xₙ := n², yₙ := 1/n\nxₙyₙ = n² · (1/n) = n → ∞',
          },
          {
            letter: 'b',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit lim xₙ = ∞ und lim yₙ = 0, sodass lim(n→∞) xₙyₙ = −∞.',
            hint: h(
              <>
                <p>Um lim xₙyₙ = −∞ zu erhalten, muss das Produkt für große n stark negativ werden. Eine Möglichkeit: yₙ wird negativ und geht gegen 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle xₙ := n²,  yₙ := −1/n

xₙyₙ = n² · (−1/n) = −n → −∞ ✓

Probe:
  lim xₙ = ∞ ✓
  lim yₙ = 0 ✓  (auch negative Nullfolgen!)
  lim xₙyₙ = −∞ ✓`}</pre>
              </>,
              <>
                <p>Beachte: yₙ = −1/n ist eine Nullfolge, da |yₙ| = 1/n → 0.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> yₙ=-1/n ist keine Nullfolge (negativ) → <strong>✅ Richtig:</strong> Nullfolge bedeutet |yₙ| → 0; |−1/n| = 1/n → 0, also ist yₙ=−1/n eine Nullfolge</li>
              </ul>,
              <p>Nullfolge bedeutet |yₙ| → 0, nicht yₙ → 0 mit yₙ ≥ 0.</p>,
            ),
            solution: 'xₙ := n², yₙ := −1/n\nxₙyₙ = n² · (−1/n) = −n → −∞',
          },
          {
            letter: 'c',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit lim xₙ = ∞ und lim yₙ = 0, sodass lim(n→∞) xₙyₙ = c, wobei c eine beliebig vorgegebene reelle Zahl ist.',
            hint: h(
              <>
                <p>Wähle xₙ und yₙ so, dass das Produkt xₙyₙ = c für alle n (oder zumindest im Grenzwert) gilt.</p>
                <p>Der einfachste Ansatz: Mache xₙyₙ konstant gleich c.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle xₙ := n,  yₙ := c/n

xₙyₙ = n · (c/n) = c → c ✓

Probe:
  lim xₙ = ∞ ✓
  lim yₙ = lim c/n = 0 ✓
  lim xₙyₙ = c ✓`}</pre>
              </>,
              <>
                <p>Für c = 0 würde auch die triviale Wahl funktionieren, aber c/n funktioniert für jedes c ∈ ℝ.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Für c=0 die triviale yₙ=0 wählen und xₙ beliebig → <strong>✅ Richtig:</strong> Das wäre erlaubt, aber die allgemeine Formel xₙ=n, yₙ=c/n funktioniert für alle c∈ℝ; für c=0: yₙ=0 (Nullfolge ✓)</li>
              </ul>,
              <p>Das Produkt xₙyₙ = c ist konstant, also ist der Grenzwert trivialerweise c.</p>,
            ),
            solution: 'xₙ := n, yₙ := c/n\nxₙyₙ = n · (c/n) = c → c',
          },
          {
            letter: 'd',
            text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit lim xₙ = ∞ und lim yₙ = 0, sodass die Folge (xₙyₙ) beschränkt, aber nicht konvergent ist.',
            hint: h(
              <>
                <p>Nicht-Konvergenz bei beschränkter Folge: Eine beschränkte Folge, die <span className="hint-em">zwischen mehreren Häufungswerten</span> oszilliert, konvergiert nicht.</p>
                <p>Idee: Das Produkt xₙyₙ soll abwechselnd zwei verschiedene Werte annehmen, z. B. +1 und −1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wähle xₙ := n,  yₙ := (−1)ⁿ · (1/n)

xₙyₙ = n · (−1)ⁿ · (1/n) = (−1)ⁿ

Probe:
  lim xₙ = ∞ ✓
  lim yₙ = 0  (|yₙ| = 1/n → 0) ✓
  (xₙyₙ) = (−1)ⁿ: beschränkt durch 1,
                    aber nicht konvergent ✓`}</pre>
              </>,
              <>
                <p>Die Folge (−1)ⁿ springt zwischen +1 und −1 und hat zwei Häufungswerte → divergiert.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> yₙ=(−1)ⁿ/n ist keine Nullfolge (wegen Vorzeichenwechsel) → <strong>✅ Richtig:</strong> |yₙ| = |(−1)ⁿ/n| = 1/n → 0, also ist es eine Nullfolge; Vorzeichenwechsel spielt keine Rolle</li>
              </ul>,
              <p>Für Nicht-Konvergenz reicht es zu zeigen, dass die Teilfolgen zu geraden und ungeraden Indizes verschiedene Grenzwerte haben.</p>,
            ),
            solution: 'xₙ := n, yₙ := (−1)ⁿ · (1/n)\nxₙyₙ = (−1)ⁿ: beschränkt (|xₙyₙ| = 1), aber nicht konvergent\n(Teilfolge x₂ₙy₂ₙ = +1, x₂ₙ₊₁y₂ₙ₊₁ = −1)',
          },
        ],
      },
      {
        id: 'b8a2',
        nr: 2,
        title: 'Grenzwerte von Folgen bestimmen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'xₙ = 1 − ('}<Frac n="−1" d="5" />{')ⁿ'}</>,
            hint: h(
              <>
                <p>Geometrische Folge: <span className="hint-em">qⁿ → 0</span> für |q| &lt; 1.</p>
                <p>Hier ist q = −1/5, also |q| = 1/5 &lt; 1 → qⁿ → 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`lim (−1/5)ⁿ = 0  (|−1/5| = 1/5 < 1)

lim xₙ = lim [1 − (−1/5)ⁿ]
        = 1 − lim (−1/5)ⁿ
        = 1 − 0 = 1`}</pre>
              </>,
              <>
                <p>Allgemein: lim qⁿ = 0 für |q| &lt; 1, unabhängig vom Vorzeichen von q.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−1/5)ⁿ divergiert wegen des negativen Vorzeichens → <strong>✅ Richtig:</strong> Für qⁿ → 0 zählt nur |q| &lt; 1; |(−1/5)| = 1/5 &lt; 1, daher (−1/5)ⁿ → 0</li>
              </ul>,
              <p>Reicht es zu prüfen: |q| &lt; 1? Dann ist qⁿ → 0.</p>,
            ),
            solution: 'lim (−1/5)ⁿ = 0 (geometrische Folge, |q| = 1/5 < 1)\nlim xₙ = 1 − 0 = 1',
          },
          {
            letter: 'b',
            text: <>{'xₙ = '}<Frac n="(−1)ⁿ" d="n" />{' + '}<Frac n="n" d="2n+1" /></>,
            hint: h(
              <>
                <p>Den Ausdruck als Summe zweier Folgen betrachten. Für jede separat den Grenzwert bestimmen, dann addieren.</p>
                <ul>
                  <li><span className="hint-em">Nullfolge × beschränkte Folge</span>: (−1)ⁿ ist beschränkt, 1/n → 0 → Produkt → 0</li>
                  <li>Für den zweiten Term: Zähler und Nenner durch n dividieren</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`Erster Term: (−1)ⁿ/n
  (−1)ⁿ ist beschränkt (|(−1)ⁿ| = 1)
  1/n → 0 (Nullfolge)
  → (−1)ⁿ/n → 0

Zweiter Term: n/(2n+1)
  = 1/(2 + 1/n) → 1/2  (da 1/n → 0)

lim xₙ = 0 + 1/2 = 1/2`}</pre>
              </>,
              <>
                <p>Folie 136: „Beschränkte Folge mal Nullfolge ist Nullfolge".</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−1)ⁿ/n divergiert wegen des Vorzeichenwechsels → <strong>✅ Richtig:</strong> (−1)ⁿ ist beschränkt und 1/n → 0; Produkt aus Nullfolge und beschränkter Folge → 0</li>
                <li><strong>❌ Falsch:</strong> lim n/(2n+1) = n/(2n) = 1/2 (ohne korrektes Ausklammern) → <strong>✅ Richtig:</strong> Durch n dividieren: n/(2n+1) = 1/(2+1/n) → 1/2</li>
              </ul>,
              <p>Probe: Der zweite Term nähert sich für große n immer mehr 1/2 an (1/n → 0 im Nenner).</p>,
            ),
            solution: (
              <>
                {'(−1)ⁿ/n → 0  (beschränkt · Nullfolge)\n'}
                {'lim '}<Frac n="n" d="2n+1" />{' = lim '}<Frac n="1" d="2 + 1/n" />{' = '}<Frac n="1" d="2" />{'\n'}
                {'lim xₙ = '}<Frac n="1" d="2" />
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'xₙ = (−1)ⁿ · '}<Frac n="n" d="2n+1" /></>,
            hint: h(
              <>
                <p>Prüfe, ob die Folge konvergiert, indem du Teilfolgen zu geraden und ungeraden Indizes betrachtest.</p>
                <p>Falls zwei Teilfolgen verschiedene Grenzwerte haben, ist die Gesamtfolge <span className="hint-em">unbestimmt divergent</span>.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Teilfolge zu geraden Indizes (n=2m):
  x₂ₘ = (−1)²ᵐ · 2m/(4m+1)
       = 1 · 2m/(4m+1)
       → 1/2

Teilfolge zu ungeraden Indizes (n=2m+1):
  x₂ₘ₊₁ = (−1)²ᵐ⁺¹ · (2m+1)/(4m+3)
          = −1 · (2m+1)/(4m+3)
          → −1/2

Zwei verschiedene Häufungswerte: +1/2 und −1/2
→ Folge ist unbestimmt divergent`}</pre>
              </>,
              <>
                <p>Konvergente Folge kann nur einen Grenzwert haben — hier gibt es zwei Häufungswerte.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−1)ⁿ·n/(2n+1) → 1/2, weil n/(2n+1) → 1/2 → <strong>✅ Richtig:</strong> Der Faktor (−1)ⁿ wechselt das Vorzeichen; die Teilfolgen gehen gegen +1/2 und −1/2 → divergent</li>
              </ul>,
              <p>Zwei verschiedene Teilfolgengrenzwerte reichen, um Divergenz zu zeigen.</p>,
            ),
            solution: (
              <>
                {'lim x₂ₙ = lim '}<Frac n="2n" d="4n+1" />{' = '}<Frac n="1" d="2" />{'\n'}
                {'lim x₂ₙ₊₁ = −lim '}<Frac n="2n+1" d="4n+3" />{' = −'}<Frac n="1" d="2" />{'\n'}
                {'Zwei verschiedene Häufungswerte → Folge ist unbestimmt divergent.'}
              </>
            ),
          },
          {
            letter: 'd',
            text: <>{'xₙ = '}<Frac n="n²−2n³−2" d="2n³+n²" /></>,
            hint: h(
              <>
                <p>Bei rationalen Folgen: <span className="hint-em">höchste Potenz ausklammern</span>. Hier dominiert n³ sowohl im Zähler als auch im Nenner.</p>
                <p>Trick: n³ im Zähler und n³ im Nenner ausklammern, dann lim 1/nᵏ = 0 verwenden.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (n²−2n³−2) / (2n³+n²)

Zähler: n³(1/n − 2 − 2/n³)
Nenner: n³(2 + 1/n)

xₙ = (1/n − 2 − 2/n³) / (2 + 1/n)

Für n→∞: 1/n → 0, 2/n³ → 0, 1/n → 0

lim xₙ = (0 − 2 − 0) / (2 + 0) = −2/2 = −1

Aber: Zähler → −2 und Nenner → ∞?
Warte — Zähler ist n³(1/n−2−2/n³) → −2·n³ → −∞
Nenner ist 2n³+n² → ∞

lim = (−2n³) / (2n³) = −1`}</pre>
              </>,
              <>
                <p>Alternativ: Leitterm-Vergleich. Höchste Potenzen: −2n³ im Zähler, 2n³ im Nenner → Quotient → −1.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> n² als dominante Potenz → <strong>✅ Richtig:</strong> Der Zähler n²−2n³−2 hat den Leitterm −2n³; der Nenner 2n³+n² hat Leitterm 2n³; also durch n³ dividieren</li>
                <li><strong>❌ Falsch:</strong> Leitterm im Zähler ist +n² → <strong>✅ Richtig:</strong> −2n³ dominiert für große n; Leitkoeffizient ist −2; lim = −2/2 = −1</li>
              </ul>,
              <p>Leitterm-Regel: Für Polynome gilt lim P(n)/Q(n) = Leitkoeffizient von P / Leitkoeffizient von Q.</p>,
            ),
            solution: (
              <>
                <Frac n="n²−2n³−2" d="2n³+n²" />{' = '}<Frac n="n⁴(1/n − 2 − 2/n³)" d="n³(2 + 1/n)" />
                {'\n= '}<Frac n="1/n − 2 − 2/n³" d="2 + 1/n" />{' → '}<Frac n="0−2−0" d="2+0" />{' = −1'}
              </>
            ),
          },
          {
            letter: 'e',
            text: <>{'xₙ = (1 + '}<Frac n="1" d="n" />{')^(2n−1)'}</>,
            hint: h(
              <>
                <p>Die Grundlage: <span className="hint-em">lim(n→∞) (1 + 1/n)ⁿ = e</span>.</p>
                <p>Den Exponenten 2n−1 geschickt zerlegen: 2n−1 = 2n · (1 − 1/(2n))... oder direkt als (...)ⁿ · (...)ⁿ · (...) umschreiben.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (1 + 1/n)^(2n−1)
   = (1 + 1/n)^(2n) / (1 + 1/n)

   (1+1/n)^(2n) = [(1+1/n)ⁿ]² → e²

   (1+1/n) → 1

lim xₙ = e²/1 = e²`}</pre>
              </>,
              <>
                <p>Rechenregel: Falls lim aₙ = a und lim bₙ = b (mit b ≠ 0), dann lim aₙ/bₙ = a/b.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim (1+1/n)^(2n−1) = (1+0)^∞ = 1 → <strong>✅ Richtig:</strong> Unbestimmter Ausdruck 1^∞; Zerlegung nötig: (1+1/n)^(2n−1) = [(1+1/n)ⁿ]² · (1+1/n)^(−1) → e²·1 = e²</li>
                <li><strong>❌ Falsch:</strong> Exponent −1 beim letzten Faktor vergessen → <strong>✅ Richtig:</strong> 2n−1 = 2n+(−1); (1+1/n)^(−1) → 1^(−1) = 1; gesamter Faktor → 1</li>
              </ul>,
              <p>Probe der Zerlegung: (1+1/n)^(2n−1) = (1+1/n)^(2n) · (1+1/n)^(−1). Für den zweiten Faktor: (1+1/n)^(−1) → 1.</p>,
            ),
            solution: (
              <>
                {'xₙ = (1+'}<Frac n="1" d="n" />{')^(2n−1) = '}<Frac n="(1+1/n)ⁿ · (1+1/n)ⁿ" d="(1+1/n)" />{'\n'}
                {'lim xₙ = '}<Frac n="e · e" d="1" />{' = e²'}
              </>
            ),
          },
          {
            letter: 'f',
            text: <>{'xₙ = (1 − '}<Frac n="1" d="n²" />{')ⁿ   (Hinweis: Bernoullische Ungleichung und Sandwichtheorem)'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Bernoullische Ungleichung</span>: (1 + x)ⁿ ≥ 1 + nx für x ≥ −1 und n ∈ ℕ.</p>
                <p>Mit x = −1/n²: xₙ = (1 − 1/n²)ⁿ ≥ 1 − n · (1/n²) = 1 − 1/n.</p>
                <p>Außerdem gilt xₙ ≤ 1 (da 1 − 1/n² ≤ 1).</p>
              </>,
              <>
                <pre className="hint-code-block">{`Bernoullische Ungleichung mit x = −1/n²:
  xₙ = (1−1/n²)ⁿ ≥ 1 − n·(1/n²) = 1 − 1/n

Außerdem: 1 − 1/n² ≤ 1, also xₙ ≤ 1

→ 1 − 1/n ≤ xₙ ≤ 1

lim (1 − 1/n) = 1
lim 1 = 1

Nach Sandwichtheorem: lim xₙ = 1`}</pre>
              </>,
              <>
                <p>Sandwichtheorem: Falls uₙ ≤ xₙ ≤ vₙ und lim uₙ = lim vₙ = L, dann lim xₙ = L.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim(1−1/n²)ⁿ = (lim(1−1/n²))ⁿ = 1ⁿ = 1 → <strong>✅ Richtig:</strong> Grenzwert nicht in Basis und Exponent trennen; stattdessen Bernoulli + Sandwich: 1−1/n ≤ xₙ ≤ 1, beide → 1</li>
              </ul>,
              <p>Die untere Schranke 1−1/n und obere Schranke 1 haben denselben Grenzwert 1 → Sandwich liefert lim xₙ = 1.</p>,
            ),
            solution: (
              <>
                {'Bernoullische Ungleichung: xₙ = (1−'}<Frac n="1" d="n²" />{')ⁿ ≥ 1 − '}<Frac n="n" d="n²" />{' = 1 − '}<Frac n="1" d="n" />{'\n'}
                {'Außerdem: xₙ ≤ 1\n'}
                {'→ 1 − 1/n ≤ xₙ ≤ 1\n'}
                {'Da lim (1−1/n) = 1, folgt mit dem Sandwichtheorem lim xₙ = 1.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b8a3',
        nr: 3,
        title: 'Geometrische Reihe',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Für n ∈ ℕ sei xₙ = '}
                {'Σ'}
                {'(k=1 bis n) 9 · ('}
                <Frac n="1" d="10" />
                {')ᵏ. Bestimmen Sie lim xₙ.'}
              </>
            ),
            hint: h(
              <>
                <p>Geometrische Summenformel: Σ(k=0..n−1) qᵏ = (1 − qⁿ)/(1 − q) für q ≠ 1.</p>
                <p>Der Laufindex beginnt bei k=1, nicht k=0 — ein <span className="hint-em">Indexshift</span> hilft.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = Σ(k=1..n) 9 · (1/10)ᵏ
   = 9 · Σ(k=1..n) (1/10)ᵏ
   = 9 · (1/10) · Σ(k=0..n−1) (1/10)ᵏ   ← Indexshift
   = (9/10) · (1 − (1/10)ⁿ) / (1 − 1/10)
   = (9/10) · (1 − (1/10)ⁿ) / (9/10)
   = 1 − (1/10)ⁿ

Da |1/10| < 1: lim (1/10)ⁿ = 0
→ lim xₙ = 1 − 0 = 1`}</pre>
              </>,
              <>
                <p>Anschaulich: xₙ = 0.9 + 0.09 + 0.009 + … → 1 (dezimale 0.999… = 1)</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Formel direkt mit k=1 anwenden → <strong>✅ Richtig:</strong> Formel gilt für k=0; Indexshift: Σ(k=1..n)(1/10)ᵏ = (1/10)·Σ(k=0..n−1)(1/10)ᵏ</li>
                <li><strong>❌ Falsch:</strong> (9/10)·(1−(1/10)ⁿ)/(9/10) = (1−(1/10)ⁿ)·(9/10)²/9 → <strong>✅ Richtig:</strong> (9/10)/(9/10) = 1; Ergebnis direkt 1−(1/10)ⁿ</li>
              </ul>,
              <p>Probe: x₁ = 9/10, x₂ = 9/10 + 9/100 = 99/100. Stimmt mit 1 − (1/10)ⁿ überein?</p>,
            ),
            solution: (
              <>
                {'xₙ = 9 · '}<Frac n="1" d="10" />{' · '}<Frac n="1 − (1/10)ⁿ" d="1 − 1/10" />{' = '}<Frac n="9" d="10" />{' · '}<Frac n="1 − (1/10)ⁿ" d="9/10" />{' = 1 − ('}<Frac n="1" d="10" />{')ⁿ\n'}
                {'Da |1/10| < 1: lim (1/10)ⁿ = 0, also lim xₙ = 1.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: (
              <>
                <p>Für welche x ∈ ℝ konvergieren jeweils die Reihen:</p>
                <p>(i) Σ(k=0 bis ∞) ((x−1)/7)ᵏ</p>
                <p>(ii) Σ(k=0 bis ∞) 3·((x−1)/7)ᵏ</p>
                <p>(iii) Σ(k=2 bis ∞) ((x−1)/7)ᵏ</p>
              </>
            ),
            hint: h(
              <>
                <p>Die geometrische Reihe Σ(k=0..∞) qᵏ konvergiert genau dann, wenn <span className="hint-em">|q| &lt; 1</span>.</p>
                <p>Hier ist q = (x−1)/7. Bedingung: |(x−1)/7| &lt; 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`|(x−1)/7| < 1
⟺ |x−1| < 7
⟺ −7 < x−1 < 7
⟺ −6 < x < 8
⟺ x ∈ (−6, 8)

(i)  Konvergiert für x ∈ (−6, 8)

(ii) 3 · Σ qᵏ konvergiert genau dann, wenn Σ qᵏ
     konvergiert → ebenfalls x ∈ (−6, 8)

(iii) Σ(k=2..∞) qᵏ = Σ(k=0..∞) qᵏ − q⁰ − q¹
      Konvergiert genau dann, wenn Σ(k=0..∞) qᵏ
      konvergiert → x ∈ (−6, 8)`}</pre>
              </>,
              <>
                <p>Hinweis: Das Weglassen endlich vieler Anfangsglieder ändert nichts an der Konvergenz einer Reihe.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Bei (iii) anderen Konvergenzbereich vermuten, weil die Summe bei k=2 beginnt → <strong>✅ Richtig:</strong> Endlich viele Anfangsglieder weglassen ändert Konvergenz nicht; alle drei haben x∈(−6,8)</li>
                <li><strong>❌ Falsch:</strong> Bei (ii) Faktor 3 auf Konvergenzbereich anrechnen → <strong>✅ Richtig:</strong> Faktor 3 beeinflusst nur den Wert der Summe, nicht ob sie konvergiert; Konvergenzbereich bleibt (−6,8)</li>
              </ul>,
              <p>Alle drei Reihen haben denselben Konvergenzbereich x ∈ (−6, 8).</p>,
            ),
            solution: (
              <>
                {'|(x−1)/7| < 1  ⟺  |x−1| < 7  ⟺  x ∈ (−6, 8)\n\n'}
                {'(i)  Konvergiert für x ∈ (−6, 8)\n'}
                {'(ii) 3·Σ qᵏ konvergiert genau dann wenn Σ qᵏ konvergiert → x ∈ (−6, 8)\n'}
                {'(iii) Endlich viele Anfangsglieder weglassen ändert Konvergenz nicht → x ∈ (−6, 8)'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b8a4',
        nr: 4,
        title: 'Rekursive Folge: aₙ₊₁ = 2aₙ/(2+aₙ)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Die Folge (aₙ) sei rekursiv definiert durch a₀ := 2, aₙ₊₁ := 2aₙ/(2+aₙ), n ≥ 0. Zeigen Sie mit vollständiger Induktion, dass aₙ > 0 für alle n ∈ ℕ. Überlegen Sie, ob die Folge (aₙ) konvergiert, und bestimmen Sie gegebenenfalls den Grenzwert.',
            hint: h(
              <>
                <p>Vollständige Induktion besteht aus:</p>
                <ul>
                  <li><span className="hint-em">Induktionsanfang (IA)</span>: Aussage für n=0 beweisen</li>
                  <li><span className="hint-em">Induktionsschritt (IS)</span>: Aus A(n) folgt A(n+1)</li>
                </ul>
                <p>Für die Konvergenz: Monotonie und Beschränktheit zeigen (Folie 138), dann den Grenzwert aus der Rekursion berechnen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`IA (n=0): a₀ = 2 > 0 ✓

IS (n → n+1): Sei aₙ > 0 (IV).
  aₙ₊₁ = 2aₙ/(2+aₙ)
  Zähler: 2aₙ > 0 (da aₙ > 0)
  Nenner: 2+aₙ > 0 (da aₙ > 0)
  → aₙ₊₁ > 0 ✓

Monotonie:
  aₙ₊₁ ≤ aₙ ⟺ 2aₙ/(2+aₙ) ≤ aₙ
  ⟺ (2+aₙ > 0) 2aₙ ≤ aₙ(2+aₙ) = 2aₙ + aₙ²
  ⟺ 0 ≤ aₙ² ✓ (immer wahr)
→ (aₙ) ist monoton fallend.

Beschränktheit: a₀ = 2 ist größtes Glied,
  aₙ ∈ [0, 2] für alle n ∈ ℕ.

Grenzwert: Sei a = lim aₙ. Dann:
  a = lim aₙ₊₁ = lim 2aₙ/(2+aₙ) = 2a/(2+a)
  a(2+a) = 2a
  2a + a² = 2a
  a² = 0  →  a = 0`}</pre>
              </>,
              <>
                <p>Folie 138: Jede monotone und beschränkte Folge ist konvergent.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> a = 2a/(2+a) → a(2+a) = 2 (falsches Umformen) → <strong>✅ Richtig:</strong> a(2+a) = 2a → 2a+a² = 2a → a² = 0 → a = 0</li>
                <li><strong>❌ Falsch:</strong> Monotonie mit aₙ₊₁ ≥ aₙ prüfen → <strong>✅ Richtig:</strong> Zuerst Richtung erraten: a₁=1 &lt; a₀=2 → fallend; dann aₙ₊₁ ≤ aₙ nachweisen: 0 ≤ aₙ² immer wahr</li>
              </ul>,
              <p>Grenzwertberechnung: Wenn lim aₙ = a, dann auch lim aₙ₊₁ = a. Rekursionsformel im Grenzwert ergibt eine Gleichung für a.</p>,
            ),
            solution: (
              <>
                {'IA: a₀ = 2 > 0 ✓\n'}
                {'IS: aₙ > 0 → aₙ₊₁ = 2aₙ/(2+aₙ) > 0 (Zähler und Nenner positiv) ✓\n\n'}
                {'Monotonie: aₙ₊₁ ≤ aₙ ⟺ 0 ≤ aₙ² (immer wahr) → (aₙ) monoton fallend.\n'}
                {'Beschränktheit: aₙ ∈ [0, 2] für alle n ∈ ℕ.\n'}
                {'→ (aₙ) konvergiert nach Folie 138.\n\n'}
                {'Grenzwert: a = 2a/(2+a) → a² = 0 → a = 0'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b8a5',
        nr: 5,
        title: 'Weitere Grenzwerte (wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'xₙ = '}<Frac n="2n" d="√(n+1)" /></>,
            hint: h(
              <>
                <p>Zähler und Nenner separat betrachten. Zähler wächst wie n, Nenner wie √n — also wächst xₙ wie n/√n = √n → ∞.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = 2n / √(n+1)
   = 2n / (√n · √(1+1/n))
   = (2n/√n) · 1/√(1+1/n)
   = 2√n · 1/√(1+1/n)
   → ∞  (da √n → ∞ und 1/√(1+1/n) → 1)`}</pre>
              </>,
              <>
                <p>Formal: xₙ ≥ 2n/√(2n) = √(2n) → ∞ für n ≥ 1.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Grenzwert = 2 wegen „lim n/√n = n^(1/2) → ∞, gar kein Limes" → <strong>✅ Richtig:</strong> 2n/√(n+1) ≥ 2n/√(2n) = √(2n) → ∞; bestimmt divergent</li>
              </ul>,
              <p>xₙ → ∞ folgt daraus, dass xₙ ≥ √(2n) → ∞.</p>,
            ),
            solution: (
              <>
                {'xₙ = '}<Frac n="2n" d="√n · √(1+1/n)" />{' = 2√n · '}<Frac n="1" d="√(1+1/n)" />{' → ∞'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'xₙ = Π(k=1 bis n) '}<Frac n="k+1" d="k" /></>,
            hint: h(
              <>
                <p><span className="hint-em">Teleskopprodukt</span>: Bei Produkten, bei denen sich benachbarte Terme kürzen, bleibt nur der erste und letzte Term übrig.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (2/1) · (3/2) · (4/3) · … · ((n+1)/n)

Alles kürzt sich bis auf:
  = (n+1)/1 = n+1

Da xₙ = n+1 ≥ n und lim n = ∞:
  lim xₙ = ∞`}</pre>
              </>,
              <>
                <p>Übungsaufgabe 4.1 zeigt dieses Ergebnis direkt.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Produkt durch direktes Ausrechnen bestimmen wollen → <strong>✅ Richtig:</strong> Teleskopstruktur erkennen: jeder Zähler k+1 kürzt sich mit dem Nenner des nächsten Faktors; Ergebnis (n+1)/1 = n+1</li>
              </ul>,
              <p>Probe: n=3: xₙ = (2/1)(3/2)(4/3) = 4 = 3+1 ✓</p>,
            ),
            solution: 'xₙ = (2/1)·(3/2)·(4/3)·…·((n+1)/n) = n+1 (Teleskopprodukt)\nxₙ = n+1 → ∞',
          },
          {
            letter: 'c',
            text: 'xₙ = √(n+1) − √n',
            hint: h(
              <>
                <p>Erweitern mit dem <span className="hint-em">konjugierten Ausdruck</span> √(n+1) + √n, um die Differenz in einen Bruch umzuwandeln.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (√(n+1) − √n) · (√(n+1) + √n) / (√(n+1) + √n)
   = (n+1−n) / (√(n+1) + √n)
   = 1 / (√(n+1) + √n)
   ≤ 1/√n → 0

Außerdem xₙ ≥ 0. Nach Einschnürungssatz:
  lim xₙ = 0`}</pre>
              </>,
              <>
                <p>Alternativ: 1/(√(n+1)+√n) &lt; 1/(2√n) → 0.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> xₙ = √(n+1) − √n → ∞, weil beide Terme → ∞ → <strong>✅ Richtig:</strong> Unbestimmter Ausdruck ∞−∞; nach Konjugation: xₙ = 1/(√(n+1)+√n) ≤ 1/√n → 0</li>
              </ul>,
              <p>Die Differenz zweier großer Zahlen kann klein sein — hier sogar gegen 0 gehen.</p>,
            ),
            solution: 'xₙ = 1/(√(n+1)+√n) ≤ 1/√n → 0\nMit 0 ≤ xₙ und Einschnürungssatz: lim xₙ = 0',
          },
          {
            letter: 'd',
            text: <>{'xₙ = Σ(k=0 bis n) ((k+1)² − k²)'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Teleskopsumme</span>: Aufeinanderfolgende Terme kürzen sich — es bleibt nur der letzte und der erste.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = (1²−0²) + (2²−1²) + (3²−2²) + … + ((n+1)²−n²)

Teleskopsumme: = (n+1)² − 0² = (n+1)²

Da xₙ = (n+1)² ≥ n und lim n = ∞:
  lim xₙ = ∞`}</pre>
              </>,
              <>
                <p>Alternativ: (k+1)²−k² = 2k+1, also xₙ = Σ(k=0..n)(2k+1) = (n+1)².</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Jeden Term (k+1)²−k²=2k+1 einzeln berechnen und Summe aufstellen → <strong>✅ Richtig:</strong> Teleskopstruktur direkt nutzen: Σ((k+1)²−k²) = (n+1)²−0² = (n+1)²</li>
              </ul>,
              <p>Probe: n=2: (1−0)+(4−1)+(9−4) = 1+3+5 = 9 = (2+1)² ✓</p>,
            ),
            solution: 'xₙ = (1²−0²)+(2²−1²)+…+((n+1)²−n²) = (n+1)² (Teleskopsumme)\n(n+1)² ≥ n → lim xₙ = ∞',
          },
        ],
      },
      {
        id: 'b8a6',
        nr: 6,
        title: 'Grenzwertsätze beweisen (wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Zeigen Sie: Ist (xₙ) ⊆ ℝ eine beschränkte Folge und lim yₙ = 0, dann ist auch (xₙyₙ) eine Nullfolge, d. h. lim(n→∞) xₙyₙ = 0.',
            hint: h(
              <>
                <p>Beweisidee: Da (xₙ) beschränkt ist, gibt es eine Schranke M mit |xₙ| ≤ M für alle n. Für beliebiges ε &gt; 0 muss man ein N finden, ab dem |xₙyₙ − 0| &lt; ε gilt.</p>
                <p>Verwende |xₙyₙ| = |xₙ| · |yₙ| ≤ M · |yₙ|.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Sei ε > 0 beliebig.
Da (xₙ) beschränkt: ∃M > 0 mit |xₙ| ≤ M für alle n.
Da yₙ → 0: ∃N ∈ ℕ mit |yₙ| < ε/M für alle n ≥ N.

Für n ≥ N gilt:
  |xₙyₙ − 0| = |xₙ| · |yₙ| ≤ M · (ε/M) = ε ✓

→ lim xₙyₙ = 0 □`}</pre>
              </>,
              <>
                <p>Achtung: Falls M = 0, ist xₙ = 0 für alle n, und xₙyₙ = 0 trivialerweise → 0. Deshalb kann man M &gt; 0 annehmen.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> M = 0 zulassen und dann ε/M = ε/0 berechnen → <strong>✅ Richtig:</strong> Wähle M &gt; 0 (oder behandle M=0 separat: dann xₙ=0, xₙyₙ=0 trivialerweise)</li>
                <li><strong>❌ Falsch:</strong> |xₙyₙ| ≤ M · |yₙ| ohne Begründung hinschreiben → <strong>✅ Richtig:</strong> |xₙyₙ| = |xₙ|·|yₙ| ≤ M·|yₙ| wegen |xₙ| ≤ M (Beschränktheit)</li>
              </ul>,
              <p>Das Argument ist: |xₙyₙ| ≤ M · |yₙ| &lt; M · ε/M = ε. Der Schlüssel ist |xₙ| ≤ M für alle n.</p>,
            ),
            solution: (
              <>
                {'Sei ε > 0. Da (xₙ) beschränkt: ∃M > 0 mit |xₙ| ≤ M für alle n.\n'}
                {'Da yₙ → 0: ∃N ∈ ℕ mit |yₙ| < ε/M für alle n ≥ N.\n\n'}
                {'Für n ≥ N: |xₙyₙ| = |xₙ|·|yₙ| ≤ M · ε/M = ε\n'}
                {'→ lim xₙyₙ = 0 □'}
              </>
            ),
          },
          {
            letter: 'b',
            text: 'Zeigen Sie: Divergiert die Folge (xₙ) ⊆ ℝ \\ {0} bestimmt gegen ∞, so konvergiert die Folge (1/xₙ) gegen 0.',
            hint: h(
              <>
                <p>Zu zeigen: Für jedes ε &gt; 0 gibt es ein N, sodass |1/xₙ − 0| &lt; ε für alle n ≥ N.</p>
                <p>|1/xₙ| = 1/|xₙ| &lt; ε ⟺ |xₙ| &gt; 1/ε. Das liefert die Verbindung zur bestimmten Divergenz xₙ → ∞.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Sei ε > 0. Setze M := 1/ε.
Da xₙ → ∞: ∃N ∈ ℕ mit xₙ > M = 1/ε für alle n ≥ N.

Für n ≥ N gilt:
  xₙ > 1/ε > 0, also xₙ ≠ 0 ✓
  |1/xₙ − 0| = 1/xₙ < 1/(1/ε) = ε ✓

→ lim 1/xₙ = 0 □`}</pre>
              </>,
              <>
                <p>xₙ → ∞ bedeutet: Für jedes M &gt; 0 gibt es ein N mit xₙ &gt; M für alle n ≥ N.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> xₙ &gt; 0 für alle n voraussetzen → <strong>✅ Richtig:</strong> Voraussetzung ist nur xₙ ∈ ℝ\{'{0}'}; dass xₙ &gt; 0 für n ≥ N folgt automatisch aus xₙ &gt; 1/ε &gt; 0</li>
              </ul>,
              <p>Für n ≥ N ist xₙ &gt; 1/ε &gt; 0, also 1/xₙ &lt; ε und 1/xₙ &gt; 0, damit |1/xₙ| = 1/xₙ &lt; ε.</p>,
            ),
            solution: (
              <>
                {'Sei ε > 0. Setze M := 1/ε.\n'}
                {'Da xₙ → ∞: ∃N ∈ ℕ mit xₙ > 1/ε für alle n ≥ N.\n\n'}
                {'Für n ≥ N: |1/xₙ − 0| = 1/xₙ < ε\n'}
                {'→ lim 1/xₙ = 0 □'}
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'blatt9',
    nr: '9',
    titel: 'Rekursive Folgen, Reihen, Polynomdivision',
    aufgaben: [
      {
        id: 'b9a1',
        nr: 1,
        title: 'Grenzwerte geometrischer Reihen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Σ(k=0 bis ∞) 5·('}<Frac n="1" d="2" />{')ᵏ'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Geometrische Reihe</span>: Σ(k=0..∞) qᵏ = 1/(1−q) für |q| &lt; 1. Der konstante Faktor wird ausgeklammert.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Σ(k=0..∞) 5·(1/2)ᵏ
= 5 · Σ(k=0..∞) (1/2)ᵏ
= 5 · 1/(1 − 1/2)
= 5 · 2 = 10`}</pre>
              </>,
              <>
                <p>Allgemein: Σ(k=0..∞) c·qᵏ = c/(1−q) für |q| &lt; 1.</p>
                <pre className="hint-code-block">{`Beispiel: Σ(k=0..∞) 3·(2/3)ᵏ = 3/(1−2/3) = 9`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Formel anwenden ohne |q| &lt; 1 zu prüfen → <strong>✅ Richtig:</strong> |1/2| = 1/2 &lt; 1 ✓; Formel gilt; Ergebnis 1/(1−1/2) = 2, gesamt 5·2 = 10</li>
                <li><strong>❌ Falsch:</strong> 1/(1+q) statt 1/(1−q) → <strong>✅ Richtig:</strong> Geometrische Reihe: Σqᵏ = 1/(1−q); Nenner ist 1 minus q</li>
              </ul>,
              <p>Ist |1/2| &lt; 1? Ja. Ergibt 1/(1−1/2) = 2 und 5·2 = 10? ✓</p>,
            ),
            solution: (
              <>
                {'Σ(k=0..∞) 5·('}<Frac n="1" d="2" />{')ᵏ = 5 · '}<Frac n="1" d="1−1/2" />{' = 5 · 2 = 10'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Σ(k=2 bis ∞) 2·(−0,4)ᵏ'}</>,
            hint: h(
              <>
                <p>Der Index beginnt bei k=2. Ein <span className="hint-em">Indexshift</span> (j = k−2) überführt die Reihe auf Start k=0.</p>
                <p>Alternativ: Σ(k=2..∞) qᵏ = q²/(1−q) direkt verwenden.</p>
              </>,
              <>
                <pre className="hint-code-block">{`−0,4 = −2/5,  |−2/5| = 2/5 < 1 ✓

Σ(k=2..∞) 2·(−2/5)ᵏ
= 2·(−2/5)² · Σ(j=0..∞) (−2/5)ʲ   [j = k−2]
= 2·(4/25) · 1/(1+2/5)
= (8/25) · (5/7) = 8/35`}</pre>
              </>,
              <>
                <pre className="hint-code-block">{`Direkt: 2·(−2/5)²/(1−(−2/5)) = (8/25)/(7/5) = 8/35`}</pre>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> Σ(k=2..∞)(−2/5)ᵏ = 1/(1−(−2/5)) (Formel ab k=0 ohne Korrektur) → <strong>✅ Richtig:</strong> Σ(k=2..∞)qᵏ = q²·Σ(j=0..∞)qʲ = q²/(1−q); oder Indexshift j=k−2</li>
                <li><strong>❌ Falsch:</strong> 1−(−2/5) = 3/5 → <strong>✅ Richtig:</strong> 1−(−2/5) = 1+2/5 = 7/5; 1/(7/5) = 5/7</li>
              </ul>,
              <p>Ergibt 2·(4/25)·(5/7) = 8/35? ✓</p>,
            ),
            solution: (
              <>
                {'−0,4 = −'}<Frac n="2" d="5" />{', Indexshift j=k−2:\n'}
                {'2·('}<Frac n="−2" d="5" />{')² · '}<Frac n="1" d="1+2/5" />{' = '}<Frac n="8" d="25" />{' · '}<Frac n="5" d="7" />{' = '}<Frac n="8" d="35" />
              </>
            ),
          },
        ],
      },
      {
        id: 'b9a2',
        nr: 2,
        title: 'Reihen auf Konvergenz prüfen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Σ(k=1 bis ∞) √k'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Notwendige Bedingung</span>: Konvergiert Σaₖ, so muss aₖ → 0. Falls aₖ nicht gegen 0 geht, divergiert die Reihe sofort.</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ = √k → ∞  für k → ∞

Die Summanden bilden keine Nullfolge.
→ Reihe divergiert.`}</pre>
              </>,
              <p>Vergleich: Σ 1/k divergiert (harmonisch), Σ 1/k² konvergiert.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Direktes Anwenden von Wurzel- oder Quotientenkriterium → <strong>✅ Richtig:</strong> Zuerst notwendige Bedingung prüfen: aₖ=√k → ∞ ≠ 0 → sofortige Divergenz ohne weitere Kriterien</li>
              </ul>,
              <p>Gilt aₖ → 0? Hier aₖ = √k → ∞. Nullfolgenbedingung verletzt → Divergenz.</p>,
            ),
            solution: 'aₖ = √k → ∞ (keine Nullfolge)\n→ Reihe divergiert.',
          },
          {
            letter: 'b',
            text: <>{'Σ(k=1 bis ∞) '}<Frac n="1" d="√k" /></>,
            hint: h(
              <>
                <p><span className="hint-em">Minorantenkriterium</span>: Ist bₖ ≤ aₖ für alle k und divergiert Σbₖ, so divergiert auch Σaₖ.</p>
                <p>Vergleich mit der harmonischen Reihe: 1/√k ≥ 1/k für k ≥ 1 (da √k ≤ k).</p>
              </>,
              <>
                <pre className="hint-code-block">{`1/√k ≥ 1/k  für alle k ≥ 1  (da k ≥ 1 → √k ≤ k)

Da Σ 1/k divergiert (harmonische Reihe),
divergiert nach dem Minorantenkriterium
auch Σ 1/√k.`}</pre>
              </>,
              <p>Allgemein: Σ 1/kᵖ divergiert für p ≤ 1 (p-Reihe). Hier p = 1/2 ≤ 1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 1/√k → 0 → Reihe konvergiert → <strong>✅ Richtig:</strong> aₖ → 0 ist nur notwendig, nicht hinreichend; hier zeigt 1/√k ≥ 1/k und Minorantenkriterium die Divergenz</li>
              </ul>,
              <p>Gilt 1/√k ≥ 1/k für k ≥ 1? Ja. Σ 1/k divergiert → Minorantenkriterium → Σ 1/√k divergiert.</p>,
            ),
            solution: (
              <>
                <Frac n="1" d="√k" />{' ≥ '}<Frac n="1" d="k" />{' für alle k ≥ 1.\nDa Σ '}<Frac n="1" d="k" />{' divergiert, divergiert nach dem Minorantenkriterium auch Σ '}<Frac n="1" d="√k" />{'.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Σ(k=1 bis ∞) (−1)ᵏ⁺¹ · '}<Frac n="1" d="√k" /></>,
            hint: h(
              <>
                <p><span className="hint-em">Leibnizkriterium</span>: Σ (−1)ᵏ aₖ konvergiert, wenn aₖ monoton fällt und aₖ → 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ := 1/√k für k ∈ ℕ*

(1) aₖ monoton fallend:
    aₖ₊₁ = 1/√(k+1) ≤ 1/√k = aₖ  ✓

(2) lim aₖ = lim 1/√k = 0  ✓

→ Nach dem Leibnizkriterium konvergiert die Reihe.`}</pre>
              </>,
              <p>Achtung: Leibniz liefert nur bedingte Konvergenz. Absolute Konvergenz wäre Σ 1/√k — die divergiert (s. (b)).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur lim aₖ = 0 prüfen und Leibniz anwenden → <strong>✅ Richtig:</strong> Leibniz erfordert ZWEI Bedingungen: aₖ monoton fallend UND aₖ → 0; beide müssen explizit gezeigt werden</li>
              </ul>,
              <p>Sind beide Bedingungen erfüllt: aₖ monoton fallend UND aₖ → 0? Dann Leibnizkriterium anwendbar.</p>,
            ),
            solution: 'aₖ := 1/√k ist monoton fallend und lim aₖ = 0.\nNach dem Leibnizkriterium konvergiert die Reihe.',
          },
          {
            letter: 'd',
            text: <>{'Σ(k=1 bis ∞) ('}<Frac n="1" d="√k" />{')ᵏ'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Wurzelkriterium</span>: Ist L = lim ᵏ√|aₖ| &lt; 1, konvergiert Σaₖ absolut. Eignet sich besonders wenn aₖ eine k-te Potenz ist.</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ = (1/√k)ᵏ

ᵏ√|aₖ| = ᵏ√((1/√k)ᵏ) = 1/√k → 0 < 1

→ Nach dem Wurzelkriterium konvergiert die Reihe.`}</pre>
              </>,
              <p>Allgemein: ᵏ√(bᵏ) = b. Daher hebt sich die k-te Wurzel mit dem Exponenten k auf.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ᵏ√((1/√k)ᵏ) = 1/k (falsche Vereinfachung) → <strong>✅ Richtig:</strong> ᵏ√(xᵏ) = x für x ≥ 0; daher ᵏ√((1/√k)ᵏ) = 1/√k → 0 &lt; 1</li>
              </ul>,
              <p>ᵏ√((1/√k)ᵏ) = 1/√k → 0 &lt; 1 ✓</p>,
            ),
            solution: (
              <>
                {'ᵏ√('}<Frac n="1" d="√k" />{')ᵏ = '}<Frac n="1" d="√k" />{' → 0 < 1\nNach dem Wurzelkriterium konvergiert die Reihe.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b9a3',
        nr: 3,
        title: 'Weitere Reihen auf Konvergenz prüfen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Σ(k=2 bis ∞) '}<Frac n="k" d="3ᵏ" /></>,
            hint: h(
              <>
                <p>Sowohl <span className="hint-em">Wurzel-</span> als auch <span className="hint-em">Quotientenkriterium</span> sind anwendbar. Erinnerung: lim ᵏ√k = 1 und lim ᵏ√a = 1 für a &gt; 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wurzelkriterium: aₖ := k/3ᵏ
  ᵏ√|aₖ| = ᵏ√k / 3 → 1/3 < 1  ✓

Quotientenkriterium:
  |a_{k+1}/aₖ| = (k+1)/(3k) = (1/3)(1+1/k) → 1/3 < 1  ✓

→ Reihe konvergiert.`}</pre>
              </>,
              <p>Beide Kriterien liefern denselben Konvergenzwert 1/3.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim ᵏ√k = ∞ → ᵏ√|aₖ| = ∞/3 → kein Kriterium → <strong>✅ Richtig:</strong> lim ᵏ√k = 1 (Standardgrenzwert!); ᵏ√k/3 → 1/3 &lt; 1 → Wurzelkriterium gibt Konvergenz</li>
              </ul>,
              <p>Ergibt das Quotientenkriterium (k+1)/(3k) → 1/3 &lt; 1? ✓</p>,
            ),
            solution: (
              <>
                {'Wurzelkrit.: ᵏ√('}<Frac n="k" d="3ᵏ" />{') = '}<Frac n="ᵏ√k" d="3" />{' → '}<Frac n="1" d="3" />{' < 1 → konvergiert\n\n'}
                {'Quotientenkrit.: '}<Frac n="a_{k+1}" d="aₖ" />{' = '}<Frac n="k+1" d="3k" />{' → '}<Frac n="1" d="3" />{' < 1 → konvergiert'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Σ(k=2 bis ∞) (−1)ᵏ · (1 − '}<Frac n="1" d="k" />{')' }</>,
            hint: h(
              <>
                <p>Notwendige Bedingung prüfen: Bilden die Summanden eine Nullfolge?</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ = (−1)ᵏ · (1 − 1/k)

|aₖ| = 1 − 1/k → 1 ≠ 0

Keine Nullfolge → Reihe divergiert.`}</pre>
              </>,
              <p>Das Leibnizkriterium ist hier nicht anwendbar, da aₖ = 1−1/k → 1 ≠ 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Leibnizkriterium anwenden wollen → <strong>✅ Richtig:</strong> Leibniz erfordert aₖ → 0; hier aₖ = 1−1/k → 1 ≠ 0 → Leibniz nicht anwendbar; Nullfolgenbedingung verletzt → sofortige Divergenz</li>
              </ul>,
              <p>|aₖ| = 1−1/k → 1 ≠ 0 → Nullfolgenbedingung verletzt → Divergenz.</p>,
            ),
            solution: '|aₖ| = |1 − 1/k| → 1 ≠ 0 (keine Nullfolge)\n→ Reihe divergiert.',
          },
          {
            letter: 'c',
            text: <>{'Σ(k=1 bis ∞) '}<Frac n="2ᵏ⁺²" d="k²·5ᵏ" /></>,
            hint: h(
              <>
                <p>Sowohl Wurzel- als auch Quotientenkriterium sind geeignet. Das Schlüsselverhältnis ist <span className="hint-em">2/5</span>.</p>
                <p>Erinnerung: ᵏ√(k²) = k^(2/k) → 1 und ᵏ√4 = 4^(1/k) → 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Wurzelkriterium: aₖ = 2^{k+2}/(k²·5ᵏ) = 4·2ᵏ/(k²·5ᵏ)
  ᵏ√|aₖ| = (2/5) · ᵏ√4 / k^(2/k) → 2/5 < 1  ✓

Quotientenkriterium:
  |a_{k+1}/aₖ| = 2·k²/(5·(k+1)²)
               = (2/5)·(k/(k+1))² → 2/5 < 1  ✓

→ Reihe konvergiert.`}</pre>
              </>,
              <p>2^(k+2) = 4·2ᵏ — der Faktor 4 wird durch ᵏ√4 → 1 irrelevant.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ᵏ√(k²) = k² → ᵏ√|aₖ| = 4·k²/5 → ∞ → kein Kriterium → <strong>✅ Richtig:</strong> ᵏ√(k²) = k^(2/k) → 1; und ᵏ√4 = 4^(1/k) → 1; daher ᵏ√|aₖ| → 2/5 &lt; 1</li>
              </ul>,
              <p>Ergibt das Quotientenkriterium (2/5)·(k/(k+1))² → 2/5 &lt; 1? ✓</p>,
            ),
            solution: (
              <>
                {'Wurzelkrit.: ᵏ√|aₖ| = '}<Frac n="2" d="5" />{' · ᵏ√4 / k^(2/k) → '}<Frac n="2" d="5" />{' < 1 → konvergiert\n\n'}
                {'Quotientenkrit.: '}<Frac n="a_{k+1}" d="aₖ" />{' = '}<Frac n="2" d="5" />{' · ('}<Frac n="k" d="k+1" />{')² → '}<Frac n="2" d="5" />{' < 1 → konvergiert'}
              </>
            ),
          },
          {
            letter: 'd',
            text: <>{'Σ(k=1 bis ∞) ('}<Frac n="1" d="√(k+1)" />{' − '}<Frac n="1" d="√k" />{')' }</>,
            hint: h(
              <>
                <p>Die Partialsummen sind eine <span className="hint-em">Teleskopsumme</span>: Bei aufeinanderfolgenden Summen kürzen sich alle inneren Terme.</p>
              </>,
              <>
                <pre className="hint-code-block">{`xₙ = Σ(k=1..n) (1/√(k+1) − 1/√k)
   = (1/√2−1/√1) + (1/√3−1/√2) + …
     + (1/√(n+1)−1/√n)
   = 1/√(n+1) − 1

lim xₙ = 0 − 1 = −1

→ Die Reihe konvergiert gegen −1.`}</pre>
              </>,
              <p>Bei Teleskopsummen bricht die Summe auf ersten und letzten Term zusammen.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Wurzel- oder Quotientenkriterium anwenden → <strong>✅ Richtig:</strong> Hier ist die Partialsumme direkt berechenbar (Teleskop); Partialsumme xₙ = 1/√(n+1) − 1 → −1</li>
              </ul>,
              <p>Ergibt xₙ = 1/√(n+1) − 1? Probe n=1: (1/√2−1) ✓. Dann lim xₙ = −1.</p>,
            ),
            solution: (
              <>
                {'xₙ = '}<Frac n="1" d="√(n+1)" />{' − 1  (Teleskopsumme)\n'}
                {'lim xₙ = 0 − 1 = −1\n'}
                {'→ Σ('}<Frac n="1" d="√(k+1)" />{' − '}<Frac n="1" d="√k" />{') = −1'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b9a4',
        nr: 4,
        title: 'Rekursive Folge: x₀=1, xₙ₊₁=√(2+xₙ)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Die Folge (xₙ) sei rekursiv definiert durch x₀ := 1 und xₙ₊₁ := √(2+xₙ), n ∈ ℕ.\n\nZeigen Sie durch vollständige Induktion, dass xₙ₊₁ ≥ xₙ für alle n ∈ ℕ.',
            hint: h(
              <>
                <p>Vollständige Induktion:</p>
                <ul>
                  <li><span className="hint-em">IA (n=0)</span>: x₁ ≥ x₀ direkt ausrechnen</li>
                  <li><span className="hint-em">IS (n → n+1)</span>: Aus xₙ ≤ xₙ₊₁ (IV) folgt xₙ₊₁ ≤ xₙ₊₂</li>
                </ul>
                <p>Schlüssel: √ ist <span className="hint-em">monoton wachsend</span>: a ≤ b ⟹ √a ≤ √b.</p>
              </>,
              <>
                <pre className="hint-code-block">{`IA (n=0): x₀ = 1, x₁ = √(2+1) = √3 ≥ 1 = x₀  ✓

IS (n → n+1):
  Sei xₙ ≤ xₙ₊₁ (IV). Dann:
  xₙ₊₂ = √(2+xₙ₊₁)
        ≥^(IV) √(2+xₙ)  (√ monoton, xₙ₊₁ ≥ xₙ)
        = xₙ₊₁  □`}</pre>
              </>,
              <p>Die Monotonie von √ ist entscheidend: Aus a ≤ b folgt √a ≤ √b für a, b ≥ 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Im IS √(2+xₙ₊₁) ≥ √(2+xₙ) ohne Begründung → <strong>✅ Richtig:</strong> Begründung: xₙ₊₁ ≥ xₙ (IV) und √ monoton → √(2+xₙ₊₁) ≥ √(2+xₙ); beide Schritte explizit nennen</li>
              </ul>,
              <p>Wird im IS die IV klar verwendet, um xₙ₊₁ ≤ xₙ₊₂ zu folgern?</p>,
            ),
            solution: 'IA (n=0): x₀=1, x₁=√3; somit x₁≥x₀ ✓\n\nIS (n→n+1): Sei xₙ ≤ xₙ₊₁ (IV). Dann:\nxₙ₊₂ = √(2+xₙ₊₁) ≥^(IV) √(2+xₙ) = xₙ₊₁  □',
          },
          {
            letter: 'b',
            text: 'Zeigen Sie durch vollständige Induktion, dass xₙ ≤ 2 für alle n ∈ ℕ.',
            hint: h(
              <>
                <p>Vollständige Induktion: Der IS nutzt wieder die Monotonie von √.</p>
                <p>Schlüsselrechnung im IS: √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2.</p>
              </>,
              <>
                <pre className="hint-code-block">{`IA (n=0): x₀ = 1 ≤ 2  ✓

IS (n → n+1):
  Sei xₙ ≤ 2 (IV). Dann:
  xₙ₊₁ = √(2+xₙ)
        ≤^(IV) √(2+2) = √4 = 2  □`}</pre>
              </>,
              <p>Die obere Schranke 2 ist kein Zufall: 2 ist der Grenzwert der Folge (Teil (c)).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> √4 = 4 → <strong>✅ Richtig:</strong> √4 = 2; der Schlüsselschritt ist √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2</li>
                <li><strong>❌ Falsch:</strong> IV (xₙ ≤ 2) nicht einsetzen → <strong>✅ Richtig:</strong> Mit IV: 2+xₙ ≤ 2+2 = 4, dann √ monoton → √(2+xₙ) ≤ √4 = 2</li>
              </ul>,
              <p>Gilt xₙ₊₁ = √(2+xₙ) ≤^(IV) √4 = 2? Ja, da xₙ ≤ 2 und √ monoton. ✓</p>,
            ),
            solution: 'IA (n=0): x₀=1 ≤ 2 ✓\n\nIS (n→n+1): Sei xₙ ≤ 2 (IV). Dann:\nxₙ₊₁ = √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2  □',
          },
          {
            letter: 'c',
            text: 'Schließen Sie auf die Konvergenz der Folge (xₙ) und bestimmen Sie den Grenzwert.\n\nHinweis: Für eine konvergente Folge (yₙ) mit lim yₙ = y gilt auch lim √yₙ = √y. Die Monotonie der Wurzelfunktion darf verwendet werden.',
            hint: h(
              <>
                <p>Aus (a) und (b): monoton wachsend und beschränkt → konvergiert nach dem <span className="hint-em">Satz über monotone beschränkte Folgen</span>.</p>
                <p>Grenzwert: x = lim xₙ = lim xₙ₊₁ = lim √(2+xₙ) = √(2+x) → Gleichung lösen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(xₙ) monoton wachsend (a) und xₙ ≤ 2 (b)
→ konvergiert gegen x ∈ [1, 2]

Sei x = lim xₙ. Dann:
  x = √(2+x)
  x² = 2+x
  x²−x−2 = 0
  (x−2)(x+1) = 0
  → x=2 oder x=−1

Da xₙ ∈ [1,2]: Grenzwert = 2`}</pre>
              </>,
              <p>p-q-Formel: x = (1 ± √(1+8))/2 = (1 ± 3)/2 → x=2 oder x=−1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Beide Lösungen x=2 und x=−1 als Grenzwert angeben → <strong>✅ Richtig:</strong> xₙ ∈ [1,2] für alle n (aus a,b); daher muss der Grenzwert auch in [1,2] liegen; x=−1 ∉ [1,2] → verwerfen</li>
              </ul>,
              <p>Liegt x=−1 in [1,2]? Nein. Liegt x=2 dort? Ja → Grenzwert = 2.</p>,
            ),
            solution: '(xₙ) monoton wachsend (a) und beschränkt durch 2 (b) → konvergiert.\n\nSei x = lim xₙ:\nx = √(2+x)  →  x²−x−2 = 0  →  (x−2)(x+1) = 0\nx=2 oder x=−1. Da xₙ ∈ [1,2]: Grenzwert = 2.',
          },
        ],
      },
      {
        id: 'b9a5',
        nr: 5,
        title: 'Polynomdivisionen (wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: '(−x³ + 4x² − x − 6) : (x − 2)',
            hint: h(
              <>
                <p><span className="hint-em">Polynomdivision</span>: Führenden Term des Dividenden durch führenden Term des Divisors teilen, mit gesamtem Divisor multiplizieren, subtrahieren, wiederholen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(−x³+4x²−x−6) : (x−2)

  −x³ ÷ x = −x²
  −x²·(x−2) = −x³+2x²
  Rest: 2x²−x−6

  2x² ÷ x = 2x
  2x·(x−2) = 2x²−4x
  Rest: 3x−6

  3x ÷ x = 3
  3·(x−2) = 3x−6
  Rest: 0

Ergebnis: −x²+2x+3`}</pre>
              </>,
              <p>Probe: (x−2)·(−x²+2x+3) = −x³+4x²−x−6 ✓</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Vorzeichen beim Subtrahieren vergessen → <strong>✅ Richtig:</strong> Man subtrahiert den Zwischenterm; z.B. −(−x³+2x²) = +x³−2x²; dann zum Restpolynom addieren</li>
              </ul>,
              <p>Rest = 0? Rückmultiplikation als Probe.</p>,
            ),
            solution: '(−x³+4x²−x−6) : (x−2) = −x²+2x+3\n\nProbe: (x−2)·(−x²+2x+3) = −x³+4x²−x−6 ✓',
          },
          {
            letter: 'b',
            text: '(3x³ + 10x² − 7x + 4) : (3x² − 2x + 1)',
            hint: h(
              <>
                <p>Divisor hat Grad 2, Dividend Grad 3 → Ergebnis hat Grad 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(3x³+10x²−7x+4) : (3x²−2x+1)

  3x³ ÷ 3x² = x
  x·(3x²−2x+1) = 3x³−2x²+x
  Rest: 12x²−8x+4

  12x² ÷ 3x² = 4
  4·(3x²−2x+1) = 12x²−8x+4
  Rest: 0

Ergebnis: x+4`}</pre>
              </>,
              <p>Probe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Führenden Term des Rests falsch bestimmen (z.B. 12x² − (−2x²) rechnen) → <strong>✅ Richtig:</strong> Rest = Dividend minus Zwischenterm; 10x² − (−2x²) = 12x²; dann 12x²/3x² = 4 für nächsten Quotiententerm</li>
              </ul>,
              <p>Rest = 0? Probe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓</p>,
            ),
            solution: '(3x³+10x²−7x+4) : (3x²−2x+1) = x+4\n\nProbe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓',
          },
          {
            letter: 'c',
            text: '(x⁵ − 2x³ − x² + 1) : (2x³ − 2)',
            hint: h(
              <>
                <p>Divisor Grad 3, Dividend Grad 5 → Ergebnis Grad 2, ggf. mit Rest.</p>
                <p>Achtung: (2x³−2) hat keine x²- und x-Terme — beim Subtrahieren Platzhalter beachten.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(x⁵−2x³−x²+1) : (2x³−2)

  x⁵ ÷ 2x³ = (1/2)x²
  (1/2)x²·(2x³−2) = x⁵−x²
  Rest: (x⁵−2x³−x²+1)−(x⁵−x²) = −2x³+1

  −2x³ ÷ 2x³ = −1
  (−1)·(2x³−2) = −2x³+2
  Rest: (−2x³+1)−(−2x³+2) = −1

Ergebnis: (1/2)x²−1, Rest = −1`}</pre>
              </>,
              <>
                <p>Division mit Rest: P/Q = Ergebnis + Rest/Q.</p>
                <p>Probe: (2x³−2)·((1/2)x²−1)+(−1) = x⁵−x²−2x³+2−1 = x⁵−2x³−x²+1 ✓</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> x⁵ ÷ 2x³ = x² → <strong>✅ Richtig:</strong> x⁵/2x³ = (1/2)x²; Koeffizient 1/2 nicht vergessen</li>
                <li><strong>❌ Falsch:</strong> −2x³ ÷ 2x³ = −x → <strong>✅ Richtig:</strong> −2x³/2x³ = −1 (Konstante, kein x-Term); Ergebnis des zweiten Schritts ist −1</li>
              </ul>,
              <p>Ergibt die Probe (2x³−2)·((1/2)x²−1)+(−1) = x⁵−2x³−x²+1? ✓</p>,
            ),
            solution: (
              <>
                {'(x⁵−2x³−x²+1) : (2x³−2) = '}<Frac n="1" d="2" />{'x² − 1 + '}<Frac n="−1" d="2x³−2" />{'\n\n'}
                {'Probe: (2x³−2)·('}<Frac n="1" d="2" />{'x²−1)+(−1) = x⁵−2x³−x²+1 ✓'}
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'blatt10',
    nr: '10',
    titel: 'Reihen, Grenzwerte von Funktionen, Asymptotik',
    aufgaben: [
      {
        id: 'b10a1',
        nr: 1,
        title: 'Reihen auf Konvergenz untersuchen',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Σ(k=1 bis ∞) (−1)ᵏ',
            hint: h(
              <p><span className="hint-em">Notwendige Bedingung (Nullfolge)</span>: Konvergiert Σaₖ, so muss aₖ → 0 für k → ∞. Falls nicht, divergiert die Reihe sofort.</p>,
              <>
                <pre className="hint-code-block">{`aₖ = (−1)ᵏ
aₖ pendelt zwischen −1 und +1 → kein Grenzwert
→ aₖ bildet keine Nullfolge → Reihe divergiert.`}</pre>
              </>,
              <p>Vergleich: Σ (−1)ᵏ/k konvergiert nach Leibniz (dort 1/k → 0), aber hier ist aₖ ↛ 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Wechselnde Vorzeichen → Leibnizkriterium → Reihe konvergiert → <strong>✅ Richtig:</strong> Leibniz erfordert zusätzlich aₖ → 0; hier gilt (−1)ᵏ ↛ 0, daher divergiert die Reihe</li>
              </ul>,
              <p>Gilt (−1)ᵏ → 0? Nein, der Wert bleibt ±1 für alle k.</p>,
            ),
            solution: 'aₖ = (−1)ᵏ bildet keine Nullfolge (pendelt zwischen ±1).\n→ Reihe divergiert.',
          },
          {
            letter: 'b',
            text: <>{'Σ(k=1 bis ∞) (−1)ᵏ · '}<Frac n="1" d="k²" /></>,
            hint: h(
              <>
                <p>Zwei Methoden:</p>
                <ul>
                  <li><span className="hint-em">Leibnizkriterium</span>: Für alternierende Reihe Σ(−1)ᵏaₖ mit aₖ ≥ 0: Falls (aₖ) monoton fallend und aₖ → 0, konvergiert die Reihe.</li>
                  <li><span className="hint-em">Majorantenkriterium</span>: Falls |aₖ| ≤ bₖ und Σbₖ konvergiert, konvergiert auch Σaₖ.</li>
                </ul>
              </>,
              <>
                <pre className="hint-code-block">{`Leibniz: aₖ := 1/k²
  aₖ₊₁ = 1/(k+1)² ≤ 1/k² = aₖ  (monoton fallend)
  lim aₖ = 0  ✓
→ Reihe konvergiert nach Leibnizkriterium.

Majorante: bₖ := 1/k², Σbₖ konvergiert (p-Reihe, p=2>1)
  |(−1)ᵏ/k²| = 1/k² = bₖ
→ Reihe konvergiert nach Majorantenkriterium.`}</pre>
              </>,
              <p>p-Reihe: Σ 1/kᵖ konvergiert genau für p &gt; 1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> aₖ → 0 genügt für Leibniz → <strong>✅ Richtig:</strong> Zusätzlich muss aₖ monoton fallend sein; beide Bedingungen prüfen</li>
                <li><strong>❌ Falsch:</strong> Majorante bₖ beliebig wählen → <strong>✅ Richtig:</strong> bₖ muss selbst eine konvergente Reihe ergeben (z.B. p-Reihe mit p &gt; 1)</li>
              </ul>,
              <p>1/(k+1)² ≤ 1/k², da (k+1)² &gt; k². Und 1/k² → 0. Beide Bedingungen erfüllt.</p>,
            ),
            solution: (
              <>
                {'Leibniz: aₖ = '}<Frac n="1" d="k²" />{', aₖ₊₁ = '}<Frac n="1" d="(k+1)²" />{' ≤ aₖ (monoton fallend), lim aₖ = 0 → konvergiert.\n\n'}
                {'Majorante: bₖ = '}<Frac n="1" d="k²" />{', Σbₖ konvergiert (p=2), |(−1)ᵏ/k²| ≤ bₖ → konvergiert.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Σ(k=1 bis ∞) '}<Frac n="k⁵" d="(−4) · k!" /></>,
            hint: h(
              <>
                <p>Bei Faktoriell im Nenner eignen sich <span className="hint-em">Quotienten-</span> oder <span className="hint-em">Wurzelkriterium</span>. Das Quotientenkriterium ist besonders praktisch, da (k+1)!/k! = k+1 leicht vereinfacht werden kann.</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ = k⁵ / ((−4)·k!)

Quotientenkriterium:
|aₖ₊₁/aₖ| = (k+1)⁵·k! / (k⁵·(k+1)!)
           = ((k+1)/k)⁵ · 1/(k+1)
           → 1⁵ · 0 = 0 < 1  ✓

Wurzelkriterium:
ᵏ√|aₖ| = ᵏ√(k⁵) / ᵏ√(4·k!) = k / ᵏ√(4·k!) → 0 < 1
(da lim 1/ᵏ√(k!) = 0, lim ᵏ√a = 1 für a>0, lim ᵏ√k = 1)`}</pre>
              </>,
              <p>Merke: k! wächst schneller als jede Potenz kⁿ, daher k/ᵏ√(k!) → 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (k+1)!/k! = 1 → <strong>✅ Richtig:</strong> (k+1)!/k! = k+1; der Faktor k+1 bleibt im Nenner stehen</li>
                <li><strong>❌ Falsch:</strong> Vorzeichen −4 beeinflusst das Konvergenzergebnis → <strong>✅ Richtig:</strong> Quotientenkriterium verwendet Beträge, daher spielt das Vorzeichen keine Rolle</li>
              </ul>,
              <p>((k+1)/k)⁵ → 1 und 1/(k+1) → 0, also Produkt → 0 &lt; 1 → konvergiert.</p>,
            ),
            solution: (
              <>
                {'Quotientenkriterium: |aₖ₊₁/aₖ| = '}<Frac n="(k+1)⁵ · k!" d="k⁵ · (k+1)!" />{' = ((k+1)/k)⁵ · '}<Frac n="1" d="k+1" />{' → 0 < 1\n\n'}
                {'Wurzelkriterium: ᵏ√|aₖ| = '}<Frac n="k" d="ᵏ√(4·k!)" />{' → 0 < 1\n→ Reihe konvergiert.'}
              </>
            ),
          },
          {
            letter: 'd',
            text: <>{'Σ(k=1 bis ∞) ('}<Frac n="k" d="2k+1" />{')ᵏ'}</>,
            hint: h(
              <>
                <p>Bei Reihen der Form Σ(aₖ)ᵏ ist das <span className="hint-em">Wurzelkriterium</span> ideal, da die k-te Wurzel den Exponenten k aufhebt.</p>
              </>,
              <>
                <pre className="hint-code-block">{`aₖ = (k/(2k+1))ᵏ

ᵏ√|aₖ| = ᵏ√((k/(2k+1))ᵏ) = k/(2k+1)

lim k/(2k+1) = lim 1/(2+1/k) = 1/2 < 1

→ Reihe konvergiert nach Wurzelkriterium.`}</pre>
              </>,
              <p>Grenzwert: Zähler und Nenner durch k dividieren → 1/(2+1/k) → 1/2.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ᵏ√(aᵏ) = a^(1/k) → <strong>✅ Richtig:</strong> ᵏ√(aᵏ) = a für a ≥ 0; die k-te Potenz und die k-te Wurzel heben sich auf</li>
                <li><strong>❌ Falsch:</strong> lim k/(2k+1) = 1 → <strong>✅ Richtig:</strong> Durch k dividieren: 1/(2+1/k) → 1/2; höchste Potenz ausklammern</li>
              </ul>,
              <p>1/2 &lt; 1 → Wurzelkriterium liefert Konvergenz.</p>,
            ),
            solution: (
              <>
                {'ᵏ√|aₖ| = '}<Frac n="k" d="2k+1" />{' → '}<Frac n="1" d="2" />{' < 1\n→ Reihe konvergiert nach Wurzelkriterium.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b10a2',
        nr: 2,
        title: 'Grenzwerte bestimmen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="x − 4x³ + 2" d="x + 4x⁴ + 7x²" /></>,
            hint: h(
              <>
                <p>Bei x → ∞ in rationalen Funktionen: Durch die <span className="hint-em">höchste vorkommende Potenz</span> (hier x⁴, Grad des Nenners) dividieren. Alle Terme mit positiver x-Potenz im Nenner gehen dann → 0.</p>
                <p>Ist Grad(Zähler) &lt; Grad(Nenner), ist der Grenzwert 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Höchste Potenz: x⁴

  x − 4x³ + 2     x³(1/x² − 4 + 2/x³)
  ————————————— = —————————————————————
  x + 4x⁴ + 7x²   x⁴(1/x³ + 4 + 7/x²)

               1   1/x² − 4 + 2/x³
             = — · ————————————————
               x   1/x³ + 4 + 7/x²

  x → ∞:  → 0 · (−4)/(4) = 0`}</pre>
              </>,
              <p>Grad(Z) = 3, Grad(N) = 4 → Grad(N) &gt; Grad(Z) → Grenzwert = 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Durch die höchste Zähler-Potenz (x³) dividieren → <strong>✅ Richtig:</strong> Immer durch die höchste Potenz aller Terme (hier x⁴ aus dem Nenner) dividieren</li>
                <li><strong>❌ Falsch:</strong> Grad(Z) = 7 oder Grad(N) = 1 ablesen → <strong>✅ Richtig:</strong> Grad(Z) = max-Exponent im Zähler = 3, Grad(N) = 4</li>
              </ul>,
              <p>1/x · (−4/4) → 0 für x → ∞. ✓</p>,
            ),
            solution: (
              <>
                {'lim '}<Frac n="x − 4x³ + 2" d="x + 4x⁴ + 7x²" />{' = lim '}<Frac n="1" d="x" />{' · '}<Frac n="1/x² − 4 + 2/x³" d="1/x³ + 4 + 7/x²" />{' = 0 · '}<Frac n="−4" d="4" />{' = 0'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'lim'}<sub>{'x→−∞'}</sub>{' '}<Frac n="x⁷ − x" d="x − 3x²" /></>,
            hint: h(
              <>
                <p>Grad(Z) = 7 &gt; Grad(N) = 2 → Grenzwert ist ±∞. Höchste Nenner-Potenz (x²) ausklammern, um den wachsenden Faktor x⁵ sichtbar zu machen.</p>
                <p>Vorzeichen bei x → −∞ beachten: x⁵ → −∞ (ungerade Potenz!).</p>
              </>,
              <>
                <pre className="hint-code-block">{`  x⁷ − x      x⁷(1 − 1/x⁶)
  ————————— = ————————————————
  x − 3x²     x²(1/x − 3)

            = x⁵ · (1 − 1/x⁶)/(1/x − 3)

x → −∞:
  x⁵ → −∞  (ungerade Potenz)
  (1−1/x⁶)/(1/x−3) → 1/(−3)
  → (−∞) · (−1/3) = +∞`}</pre>
              </>,
              <p>Zwei negative Faktoren (x⁵ → −∞ und 1/(1/x−3) → −1/3) ergeben +∞.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> x⁵ → +∞ für x → −∞ → <strong>✅ Richtig:</strong> Ungerade Potenz: (−∞)⁵ = −∞; das Vorzeichen wechselt</li>
                <li><strong>❌ Falsch:</strong> 1/x − 3 → +3 für x → −∞ → <strong>✅ Richtig:</strong> 1/x → 0, also 1/x − 3 → −3; das Vorzeichen des −3 bleibt</li>
              </ul>,
              <p>(−∞) · (−1/3) = +∞.</p>,
            ),
            solution: (
              <>
                {'lim '}<Frac n="x⁷ − x" d="x − 3x²" />{' = lim x⁵ · '}<Frac n="1 − 1/x⁶" d="1/x − 3" />{'\n'}
                {'x → −∞: x⁵ → −∞, '}<Frac n="1 − 1/x⁶" d="1/x − 3" />{' → '}<Frac n="1" d="−3" />{'\n'}
                {'→ (−∞) · (−'}<Frac n="1" d="3" />{') = +∞'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b10a3',
        nr: 3,
        title: 'Grenzwerte und Stetigkeit der Funktion h',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Sei h: ℝ → ℝ mit h(x) = (x²−1)/(x+1) für x ≠ −1 und h(−1) = −100.\n\nBestimmen Sie lim(x→−1, x<−1) h(x),  lim(x→−1, x>−1) h(x)  und  lim(x→−1) h(x).\nIst h stetig in x = −1?',
            hint: h(
              <>
                <p>Für x ≠ −1 vereinfacht sich h(x): <span className="hint-em">x²−1 = (x+1)(x−1)</span>, also kürzt sich (x+1).</p>
                <p>Stetigkeit in x₀: lim(x→x₀) f(x) muss existieren und gleich f(x₀) sein.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Für x ≠ −1:
  h(x) = (x²−1)/(x+1) = (x+1)(x−1)/(x+1) = x−1

Grenzwerte:
  lim(x→−1, x<−1) h(x) = −1−1 = −2
  lim(x→−1, x>−1) h(x) = −1−1 = −2

Links = Rechts → lim(x→−1) h(x) = −2

Stetigkeit: h(−1) = −100 ≠ −2
→ h ist nicht stetig in x = −1`}</pre>
              </>,
              <p>Würde man h(−1) = −2 setzen, wäre h stetig. Der Defekt liegt nur am Funktionswert.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim(x→−1) h(x) = h(−1) = −100 → <strong>✅ Richtig:</strong> Der Grenzwert ist −2; h(−1) = −100 ist nur der Funktionswert, nicht der Grenzwert</li>
                <li><strong>❌ Falsch:</strong> (x+1) auch bei x = −1 kürzen → <strong>✅ Richtig:</strong> Kürzen nur beim Grenzwertprozess erlaubt; bei x = −1 direkt wäre (x+1) = 0 (Division durch 0)</li>
              </ul>,
              <p>Grenzwert −2 ≠ h(−1) = −100 → nicht stetig.</p>,
            ),
            solution: (
              <>
                {'Für x ≠ −1: h(x) = '}<Frac n="(x+1)(x−1)" d="x+1" />{' = x − 1\n\n'}
                {'lim(x→−1, x<−1) h(x) = −2\n'}
                {'lim(x→−1, x>−1) h(x) = −2\n'}
                {'→ lim(x→−1) h(x) = −2\n\n'}
                {'h(−1) = −100 ≠ −2 → h ist nicht stetig in x = −1.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b10a4',
        nr: 4,
        title: 'Grenzwerte und Stetigkeit von f',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Sei f(x) = |4−2x|/(x−2) für x ≠ 2 und f(2) = 0.\n\nBestimmen Sie:\n(a) lim'}<sub>{'x→2, x>2'}</sub>{' f(x)\n(b) lim'}<sub>{'x→2, x<2'}</sub>{' f(x)\n(c) lim'}<sub>{'x→2'}</sub>{' f(x)\n(d) lim'}<sub>{'x→0'}</sub>{' f(x)\n\nIst f stetig in x = 2?'}</>,
            hint: h(
              <>
                <p>Betragsfunktion fallweise auswerten: |4−2x| = 2|2−x|. Das Vorzeichen von (2−x) hängt davon ab, ob x &gt; 2 oder x &lt; 2.</p>
                <p>Für lim(x→0): f ist bei x = 0 durch die Formel direkt auswertbar (da 0 ≠ 2).</p>
              </>,
              <>
                <pre className="hint-code-block">{`|4−2x|/(x−2) = 2|2−x|/(x−2)

x > 2: (2−x) < 0 → |2−x| = x−2
  → 2(x−2)/(x−2) = 2

x < 2: (2−x) > 0 → |2−x| = 2−x
  → 2(2−x)/(x−2) = −2(x−2)/(x−2) = −2

(a) lim(x→2, x>2) f(x) = 2
(b) lim(x→2, x<2) f(x) = −2
(c) links ≠ rechts → lim(x→2) f(x) existiert nicht
(d) f(0) = |4|/(−2) = 4/(−2) = −2`}</pre>
              </>,
              <p>Da lim(x→2) f(x) nicht existiert, ist f nicht stetig in x = 2.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> |2−x| = x−2 für alle x → <strong>✅ Richtig:</strong> Betrag ist fallweise: für x &lt; 2 ist |2−x| = 2−x, für x &gt; 2 ist |2−x| = x−2</li>
                <li><strong>❌ Falsch:</strong> lim(x→0) f(x) = "nicht definiert" → <strong>✅ Richtig:</strong> f ist bei x = 0 durch die Formel direkt auswertbar; Einsetzen ergibt f(0) = −2</li>
              </ul>,
              <p>Rechtsseitiger Grenzwert 2 ≠ linksseitiger −2 → kein Gesamtgrenzwert.</p>,
            ),
            solution: (
              <>
                {'|4−2x|/(x−2) = 2|2−x|/(x−2)\n\n'}
                {'x > 2: 2(x−2)/(x−2) = 2\nx < 2: −2(x−2)/(x−2) = −2\n\n'}
                {'(a) lim(x→2, x>2) f(x) = 2\n'}
                {'(b) lim(x→2, x<2) f(x) = −2\n'}
                {'(c) lim(x→2) f(x) existiert nicht (2 ≠ −2)\n'}
                {'(d) lim(x→0) f(x) = '}<Frac n="4−0" d="0−2" />{' = '}<Frac n="4" d="−2" />{' = −2\n\n'}
                {'Da lim(x→2) f(x) nicht existiert, ist f nicht stetig in x = 2.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b10a5',
        nr: 5,
        title: 'Definitionsbereich und Asymptotik',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Sei f: Dᶠ → ℝ mit f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{'. Bestimmen Sie den maximalen Definitionsbereich Dᶠ.'}</>,
            hint: h(
              <>
                <p>Maximaler Definitionsbereich: Alle x ∈ ℝ, für die der Ausdruck definiert ist. Hier muss der <span className="hint-em">Nenner ≠ 0</span> sein.</p>
              </>,
              <>
                <pre className="hint-code-block">{`x² − 1 ≠ 0
x² ≠ 1
x ≠ 1  und  x ≠ −1

Dᶠ = ℝ \\ {−1, 1}`}</pre>
              </>,
              <p>Schreibweise: Dᶠ = {'{x ∈ ℝ : x² − 1 ≠ 0}'} = ℝ \ {'{−1, 1}'}.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Zähler x³−x²−x = 0 lösen für den Definitionsbereich → <strong>✅ Richtig:</strong> Nur der Nenner darf nicht 0 sein; Zähler ≠ 0 ist keine Bedingung für den Definitionsbereich</li>
              </ul>,
              <p>Probe: x = 1: 1²−1 = 0 → ausgeschlossen. x = 0: 0−1 = −1 ≠ 0 → erlaubt.</p>,
            ),
            solution: 'x² − 1 ≠ 0  ⟺  x ≠ ±1\nDᶠ = ℝ \\ {−1, 1}',
          },
          {
            letter: 'b',
            text: <>{'Untersuchen Sie das Verhalten von f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{' für x → ±∞.'}</>,
            hint: h(
              <>
                <p>Grad(Zähler) = 3 &gt; Grad(Nenner) = 2 → der Grenzwert ist ±∞. Höchste Nenner-Potenz x² ausklammern.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f(x) = x³(1 − 1/x − 1/x²) / (x²(1 − 1/x²))
     = x · (1 − 1/x − 1/x²) / (1 − 1/x²)

x → ∞:   x · 1/1 → +∞
x → −∞:  x · 1/1 → −∞`}</pre>
              </>,
              <p>Grad(Z) − Grad(N) = 1 → lineares Wachstum (nicht quadratisch).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Grenzwert = 0 weil es ein Bruch ist → <strong>✅ Richtig:</strong> Grenzwert 0 gilt nur wenn Grad(Nenner) &gt; Grad(Zähler); hier Grad(Z) = 3 &gt; Grad(N) = 2, also → ±∞</li>
              </ul>,
              <p>x → ∞ ⟹ f(x) → ∞, x → −∞ ⟹ f(x) → −∞. ✓</p>,
            ),
            solution: (
              <>
                {'f(x) = x · '}<Frac n="1 − 1/x − 1/x²" d="1 − 1/x²" />{'\n\nlim(x→∞) f(x) = ∞,  lim(x→−∞) f(x) = −∞'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Ist f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{' in ±∞ asymptotisch linear oder quadratisch? Bestimmen Sie die asymptotische Gerade bzw. Parabel.'}</>,
            hint: h(
              <>
                <p>Grad(Z) = Grad(N)+1 → <span className="hint-em">asymptotisch lineares Verhalten</span>. Die asymptotische Gerade a(x) bestimmt man durch <span className="hint-em">Polynomdivision</span>: f(x) = a(x) + R/Q, wobei R/Q → 0 für x → ±∞.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(x³ − x² − x) ÷ (x² − 1):

  x³ ÷ x² = x
  x·(x²−1) = x³ − x
  Rest: (x³−x²−x) − (x³−x) = −x²

  −x² ÷ x² = −1
  (−1)·(x²−1) = −x² + 1
  Rest: −x² − (−x²+1) = −1

→ f(x) = x − 1 − 1/(x²−1)

a(x) = x − 1  (asymptotische Gerade)

lim(x→±∞) (f(x) − (x−1)) = lim −1/(x²−1) = 0 ✓`}</pre>
              </>,
              <p>Asymptotische Gerade: a: ℝ → ℝ, x ↦ x − 1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Polynomdivision nach dem ersten Schritt (x) abbrechen → <strong>✅ Richtig:</strong> Weiter dividieren bis Rest-Grad &lt; Divisor-Grad (Grad 0 &lt; 2); zweiter Schritt ergibt −1</li>
                <li><strong>❌ Falsch:</strong> Probe weglassen → <strong>✅ Richtig:</strong> lim(x→±∞) (f(x) − a(x)) = 0 prüfen, um die Asymptote zu bestätigen</li>
              </ul>,
              <p>Rest −1 hat Grad 0 &lt; 2 (Grad des Divisors) → Polynomdivision vollständig.</p>,
            ),
            solution: (
              <>
                {'Polynomdivision: '}<Frac n="x³−x²−x" d="x²−1" />{' = x − 1 − '}<Frac n="1" d="x²−1" />{'\n\n'}
                {'Asymptotische Gerade: a(x) = x − 1\n\n'}
                {'Probe: lim(x→±∞) (f(x) − (x−1)) = lim (−'}<Frac n="1" d="x²−1" />{') = 0 ✓'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b10a6',
        nr: 6,
        title: 'O-Notation (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Welche Aussagen sind wahr?\n(i)   n ∈ O(n²) für n → ∞\n(ii)  n + n² ∈ O(n²) für n → ∞\n(iii) 1000n² ∈ O(n²) für n → ∞\n(iv)  f(n) ∈ O(g(n)) ⟺ g(n) ∈ O(f(n)) für n → ∞',
            hint: h(
              <>
                <p><span className="hint-em">O-Notation</span>: f ∈ O(g) bedeutet ∃C &gt; 0, N: |f(n)| ≤ C·|g(n)| für alle n ≥ N. Informell: f wächst höchstens so schnell wie g (bis auf konstanten Faktor).</p>
              </>,
              <>
                <pre className="hint-code-block">{`(i)  n ≤ 1·n² für n ≥ 1 → n ∈ O(n²)  → wahr

(ii) n+n² ≤ 2n² für n ≥ 1 (da n ≤ n²)
     → n+n² ∈ O(n²)  → wahr

(iii) 1000n² ≤ 1000·n² immer → O(n²)   → wahr

(iv) Gegenbeispiel: f(n)=n, g(n)=n²
     n ∈ O(n²) wahr (C=1)
     n² ∉ O(n): n² ≤ C·n → n ≤ C, für große n unmöglich
     → Aussage falsch`}</pre>
              </>,
              <p>O-Notation ist nicht symmetrisch (das wäre Θ-Notation).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 1000n² ∉ O(n²) wegen großem Koeffizient → <strong>✅ Richtig:</strong> C = 1000 ist eine positive Konstante; O ignoriert konstante Faktoren</li>
                <li><strong>❌ Falsch:</strong> f ∈ O(g) ⟺ g ∈ O(f) (Symmetrie wie Θ) → <strong>✅ Richtig:</strong> O ist nur obere Schranke, nicht symmetrisch; n ∈ O(n²) aber n² ∉ O(n)</li>
              </ul>,
              <p>Für (iv): n ∈ O(n²) ✓, aber n² ∉ O(n) → (iv) ist falsch.</p>,
            ),
            solution: '(i)   wahr: n ≤ 1·n² für n ≥ 1\n(ii)  wahr: n + n² ≤ 2n² für n ≥ 1\n(iii) wahr: 1000n² ≤ 1000·n²\n(iv)  falsch: n ∈ O(n²) aber n² ∉ O(n)',
          },
          {
            letter: 'b',
            text: 'Seien f(n) ∈ O(g(n)) und g(n) ∈ O(h(n)) für n → ∞. Gilt dann f(n) ∈ O(h(n))?',
            hint: h(
              <>
                <p>Dies ist die <span className="hint-em">Transitivität der O-Notation</span>. Die Abschätzungen aus beiden Voraussetzungen lassen sich verketten: aus |f| ≤ C₁|g| und |g| ≤ C₂|h| folgt |f| ≤ C₁C₂|h|.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Voraussetzungen:
  ∃C₁, N₁: |f(n)| ≤ C₁·|g(n)|  für n ≥ N₁
  ∃C₂, N₂: |g(n)| ≤ C₂·|h(n)|  für n ≥ N₂

Für n ≥ max(N₁, N₂):
  |f(n)| ≤ C₁·|g(n)| ≤ C₁·C₂·|h(n)|

Mit C := C₁·C₂ und N := max(N₁, N₂):
  |f(n)| ≤ C·|h(n)|  → f(n) ∈ O(h(n)) ✓`}</pre>
              </>,
              <p>Diese Eigenschaft heißt Transitivität von O und gilt allgemein.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> „Ja offensichtlich" ohne Beweis hinschreiben → <strong>✅ Richtig:</strong> Explizit C := C₁·C₂ und N := max(N₁,N₂) angeben, um die O-Definition zu erfüllen</li>
              </ul>,
              <p>C₁·C₂ ist eine positive Konstante, N := max(N₁,N₂) eine natürliche Zahl → O-Definition erfüllt.</p>,
            ),
            solution: 'Ja.\n∃C₁,N₁: |f(n)| ≤ C₁|g(n)| für n ≥ N₁\n∃C₂,N₂: |g(n)| ≤ C₂|h(n)| für n ≥ N₂\n→ |f(n)| ≤ C₁C₂·|h(n)| für n ≥ max(N₁,N₂)\n→ f(n) ∈ O(h(n)) ✓',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt11',
    nr: '11',
    titel: 'Stetigkeit',
    aufgaben: [
      {
        id: 'b11a1',
        nr: 1,
        title: 'Stetigkeit in ℝ prüfen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'f: ℝ → ℝ,  x ↦ exp('}<Frac n="x" d="(cos x)² + 1" />{')'}
            </>,
            hint: h(
              <>
                <p>Grundregel: exp, sin, cos sind stetig auf ganz ℝ. Die <span className="hint-em">Betragsfunktion</span> ist stetig auf ℝ, die <span className="hint-em">Wurzelfunktion</span> stetig auf [0,∞). Verkettungen, Produkte, Summen und Quotienten stetiger Funktionen sind wieder stetig (beim Quotienten: Nenner ≠ 0 prüfen).</p>
              </>,
              <>
                <pre className="hint-code-block">{`Nenner: (cos x)² + 1 ≥ 0 + 1 = 1 > 0  für alle x ∈ ℝ

→ Kein x muss ausgeschlossen werden.
→ f ist Verkettung/Quotient stetiger Funktionen
  ohne Nullstellen im Nenner → f stetig auf ℝ.`}</pre>
              </>,
              <p>Vergleich: (cos x)² ≥ 0 immer, also (cos x)² + 1 ≥ 1 — nie null.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nenner-Prüfung überspringen → <strong>✅ Richtig:</strong> Immer nachweisen, dass der Nenner ≠ 0 für alle x; hier (cos x)² + 1 ≥ 1 &gt; 0</li>
                <li><strong>❌ Falsch:</strong> exp(x) könnte undefiniert sein → <strong>✅ Richtig:</strong> exp ist auf ganz ℝ definiert und stetig; nur im Nenner wäre eine Nullstelle ein Problem</li>
              </ul>,
              <p>Ist der Nenner für alle x ∈ ℝ positiv? Ja, (cos x)² + 1 ≥ 1 &gt; 0. ✓</p>,
            ),
            solution: '(cos x)² + 1 ≥ 1 > 0 für alle x ∈ ℝ → kein Ausschluss nötig.\nf ist Verkettung/Quotient stetiger Funktionen → f stetig auf ℝ.',
          },
          {
            letter: 'b',
            text: 'g: ℝ → ℝ,  x ↦ √|sin(x)|',
            hint: h(
              <>
                <p>sin ist stetig auf ℝ. Die Betragsfunktion ist stetig auf ℝ. Die Wurzelfunktion ist stetig auf [0,∞). Verkettungen stetiger Funktionen sind stetig, solange das Argument im Definitionsbereich der äußeren Funktion liegt.</p>
              </>,
              <>
                <pre className="hint-code-block">{`g = √ ∘ |·| ∘ sin

Schritte:
  sin: ℝ → ℝ  stetig
  |·|: ℝ → ℝ  stetig, Bild = [0,∞)
  √:   [0,∞) → ℝ  stetig

Argument von √ ist immer ≥ 0 (Betrag) → keine Einschränkung.
→ g stetig auf ℝ.`}</pre>
              </>,
              <p>|sin x| ≥ 0 immer → √|sin x| ist für alle x ∈ ℝ definiert.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> √|sin x| könnte undefiniert sein (negative Argumente) → <strong>✅ Richtig:</strong> |sin x| ≥ 0 immer, daher ist das Argument der Wurzel stets ≥ 0 und g überall definiert</li>
              </ul>,
              <p>Ist |sin x| ≥ 0 für alle x? Ja → Wurzel immer definiert → g stetig auf ℝ.</p>,
            ),
            solution: '|sin x| ≥ 0 für alle x → Argument von √ immer ≥ 0.\ng = √ ∘ |·| ∘ sin ist Verkettung stetiger Funktionen → g stetig auf ℝ.',
          },
        ],
      },
      {
        id: 'b11a2',
        nr: 2,
        title: 'Stetigkeit von f, g, h (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Gegeben: f: ℝ → ℝ, x ↦ x;  g: ℝ → ℝ, x ↦ {4 für x ≥ 0, −4 für x < 0};  h: ℝ → ℝ, x ↦ f(x)·g(x).\n\nWelche der Funktionen f, g und h sind stetig?',
            hint: h(
              <>
                <p>f als Polynom: stetig. Für g in x = 0: links- und rechtsseitigen Grenzwert prüfen. Für h: Produkt explizit ausrechnen und vereinfachen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f ist Polynom → stetig.

g: lim(x→0, x<0) g(x) = −4 ≠ lim(x→0, x>0) g(x) = 4
→ lim(x→0) g(x) existiert nicht → g nicht stetig in 0.

h(x) = x · g(x) = {4x, x≥0; −4x, x<0} = 4|x|

Betragsfunktion stetig → h = 4|x| stetig.

Alternativ:
  lim(x→0, x<0) h(x) = 0
  lim(x→0, x>0) h(x) = 0
  h(0) = 0  → stetig in 0.
  Für x ≠ 0: h ist Polynom → stetig.`}</pre>
              </>,
              <p>Merke: Das Produkt einer unstetigen Funktion (g) mit x kann trotzdem stetig sein.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> h ist nicht stetig, weil g nicht stetig ist (Produktregel für Stetigkeit) → <strong>✅ Richtig:</strong> Die Produktregel gilt nur für stetige Faktoren; h direkt analysieren ergibt h(x) = 4|x|, was stetig ist</li>
              </ul>,
              <p>h(x) = 4|x| ist stetig, obwohl g nicht stetig ist.</p>,
            ),
            solution: 'f ist als Polynom stetig.\n\ng ist in 0 nicht stetig (lim(x→0) g(x) existiert nicht: −4 ≠ 4).\n\nh(x) = x·g(x) = 4|x|: Betragsfunktion stetig → h stetig auf ℝ.\n(Probe: lim(x→0) h(x) = 0 = h(0) ✓)',
          },
        ],
      },
      {
        id: 'b11a3',
        nr: 3,
        title: 'Stetige Fortsetzbarkeit — c bestimmen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'f: ℝ → ℝ,  x ↦ '}<Frac n="x²−1" d="x−1" />{' für x ≠ 1,  f(1) = c'}</>,
            hint: h(
              <>
                <p>Stetigkeit in x₀ = 1 erfordert lim(x→1) f(x) = f(1) = c. Zuerst den Grenzwert berechnen — durch Faktorisierung des Zählers.</p>
              </>,
              <>
                <pre className="hint-code-block">{`x² − 1 = (x+1)(x−1)

Für x ≠ 1:
  f(x) = (x+1)(x−1)/(x−1) = x+1

lim(x→1) f(x) = 1+1 = 2

→ c = 2 macht f stetig auf ganz ℝ.`}</pre>
              </>,
              <p>Für x ≠ 1 ist f(x) = x+1, eine gerade Linie. Der Wert an x = 1 muss = 2 sein.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> x = 1 direkt in (x²−1)/(x−1) einsetzen → <strong>✅ Richtig:</strong> Das ergibt 0/0; erst den Zähler faktorisieren und (x−1) kürzen, dann einsetzen</li>
              </ul>,
              <p>lim(x→1) (x+1) = 2. Mit c = 2 gilt f(1) = c = lim f(x) → stetig.</p>,
            ),
            solution: (
              <>
                {'f(x) = '}<Frac n="(x+1)(x−1)" d="x−1" />{' = x+1 für x ≠ 1\n\nlim(x→1) f(x) = 2\n\n→ c = 2, dann f stetig auf ℝ.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'f: (−1,∞) → ℝ,  x ↦ '}<Frac n="√(1+x) − 1" d="x" />{' für x ≠ 0,  f(0) = c'}</>,
            hint: h(
              <>
                <p>Grenzwert für x → 0 durch <span className="hint-em">Konjugaterweiterung</span>: Zähler und Nenner mit (√(1+x) + 1) erweitern, um die Differenz der Wurzeln aufzulösen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Für x ≠ 0, erweiterter Bruch mit (√(1+x)+1):

  √(1+x)−1     √(1+x)−1   √(1+x)+1
  ————————— = ————————— · —————————
      x            x       √(1+x)+1

           (1+x) − 1           x
         = ——————————————— = ———————————————
           x·(√(1+x)+1)    x·(√(1+x)+1)

         = 1/(√(1+x)+1)

lim(x→0) = 1/(√1+1) = 1/2

→ c = 1/2`}</pre>
              </>,
              <p>Alternative: L'Hôpital (falls bekannt): Zähler- und Nenner-Ableitung bei x=0 auswerten.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> x = 0 direkt einsetzen → <strong>✅ Richtig:</strong> Ergibt 0/0; Konjugaterweiterung mit (√(1+x)+1) anwenden, um den Ausdruck umzuformen</li>
                <li><strong>❌ Falsch:</strong> (√(1+x)−1)(√(1+x)+1) = (1+x)−1 vergessen = x → <strong>✅ Richtig:</strong> 3. binomische Formel: Produkt ergibt (1+x)−1 = x, dann x im Nenner kürzen</li>
              </ul>,
              <p>Nach Konjugaterweiterung: 1/(√(1+x)+1) → 1/2 für x → 0.</p>,
            ),
            solution: (
              <>
                <Frac n="√(1+x)−1" d="x" />{' = '}<Frac n="√(1+x)−1" d="x" />{' · '}<Frac n="√(1+x)+1" d="√(1+x)+1" />{' = '}<Frac n="x" d="x(√(1+x)+1)" />{' = '}<Frac n="1" d="√(1+x)+1" />{'\n\nlim(x→0) = '}<Frac n="1" d="√1+1" />{' = '}<Frac n="1" d="2" />{'\n\n→ c = '}<Frac n="1" d="2" />
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'f: ℝ → ℝ,  x ↦ '}<Frac n="3x" d="2|x|" />{' für x ≠ 0,  f(0) = c'}</>,
            hint: h(
              <>
                <p>Betragsfunktion fallweise auswerten: |x| = x für x &gt; 0 und |x| = −x für x &lt; 0. Dann links- und rechtsseitigen Grenzwert vergleichen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`x > 0: f(x) = 3x/(2x) = 3/2
x < 0: f(x) = 3x/(2·(−x)) = −3/2

lim(x→0, x<0) f(x) = −3/2
lim(x→0, x>0) f(x) = 3/2

−3/2 ≠ 3/2 → lim(x→0) f(x) existiert nicht.

Kein c kann die Funktion in 0 stetig machen.`}</pre>
              </>,
              <p>Wenn links- und rechtsseitiger Grenzwert verschieden sind, gibt es kein c, das Stetigkeit erzwingt.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> c = 0 wählen, da f(0) = 0 naheliegt → <strong>✅ Richtig:</strong> Stetigkeit erfordert, dass der Grenzwert existiert; da Links ≠ Rechts, gibt es kein c, das Stetigkeit erzwingt</li>
              </ul>,
              <p>Linksseitiger Grenzwert −3/2 ≠ rechtsseitiger 3/2 → kein solches c existiert.</p>,
            ),
            solution: 'x > 0: f(x) = 3/2\nx < 0: f(x) = −3/2\n\nlim(x→0, x<0) f(x) = −3/2 ≠ lim(x→0, x>0) f(x) = 3/2\n→ Grenzwert existiert nicht → kein c möglich.',
          },
          {
            letter: 'd',
            text: 'f: ℝ → ℝ,  x ↦ {|x| für x < 0,  c für x = 0,  √x für x > 0}',
            hint: h(
              <>
                <p>Links- und rechtsseitigen Grenzwert für x → 0 getrennt bestimmen. Stimmen sie überein, ist der Gesamtgrenzwert bekannt — und c muss gleich diesem Grenzwert sein.</p>
              </>,
              <>
                <pre className="hint-code-block">{`lim(x→0, x<0) f(x) = lim |x| = 0
lim(x→0, x>0) f(x) = lim √x = 0

Beide Grenzwerte = 0 → lim(x→0) f(x) = 0

Für Stetigkeit: c = f(0) = 0

→ c = 0 macht f stetig auf ℝ.`}</pre>
              </>,
              <p>Für x ≠ 0 ist f jeweils Betragsfunktion bzw. Wurzelfunktion — beide stetig auf ihren Bereichen.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim |x| für x → 0⁻ ist undefiniert → <strong>✅ Richtig:</strong> Für x &lt; 0 gilt |x| = −x, also lim(−x) = 0 für x → 0⁻; der Grenzwert existiert und ist 0</li>
              </ul>,
              <p>lim(x→0) f(x) = 0 = f(0) mit c = 0. ✓</p>,
            ),
            solution: 'lim(x→0, x<0) f(x) = lim |x| = 0\nlim(x→0, x>0) f(x) = lim √x = 0\n\n→ lim(x→0) f(x) = 0  →  c = 0\n\nMit c = 0 ist f stetig auf ℝ.',
          },
        ],
      },
      {
        id: 'b11a4',
        nr: 4,
        title: 'Zwischenwertsatz und Bisektionsverfahren',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Zeigen Sie mit dem Zwischenwertsatz, dass '}<Frac n="1" d="1+x²" />{' = √x eine Lösung in [0,4] besitzt. Führen Sie das Bisektionsverfahren durch und geben Sie ein Intervall der Länge '}<Frac n="1" d="4" />{' an, in dem die Lösung liegt.'}</>,
            hint: h(
              <>
                <p><span className="hint-em">Zwischenwertsatz (ZWS)</span>: Ist f stetig auf [a,b] und hat f(a) und f(b) verschiedene Vorzeichen, gibt es mindestens ein c ∈ (a,b) mit f(c) = 0.</p>
                <p>Strategie: Hilfsfunktion f(x) = 1/(1+x²) − √x bilden. Nullstellen von f entsprechen Lösungen der Gleichung.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f(x) = 1/(1+x²) − √x auf [0,4]

f ist stetig (Summe/Quotient/Wurzel stetiger Fkt.)

f(0) = 1/(1+0) − 0 = 1 > 0
f(4) = 1/(1+16) − 2 = 1/17 − 2 < 0

ZWS: ∃c ∈ (0,4) mit f(c) = 0.

Bisektionsverfahren:
  n=0: [0,4], mid=2, f(2) = 1/5−√2 < 0 → [0,2]
  n=1: [0,2], mid=1, f(1) = 1/2−1 = −1/2 < 0 → [0,1]
  n=2: [0,1], mid=1/2, f(1/2) = 4/5−1/√2 > 0 → [1/2,1]
  n=3: [1/2,1], mid=3/4, f(3/4) = 16/25−√3/2 < 0 → [1/2,3/4]

Länge 3/4 − 1/2 = 1/4 ✓  → Nullstelle in [1/2, 3/4]`}</pre>
              </>,
              <>
                <p>ZWS erfordert: Stetigkeit auf geschlossenem Intervall + Vorzeichenwechsel an den Rändern.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> ZWS anwenden ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> Erst Stetigkeit auf [0,4] zeigen (√x braucht x ≥ 0, erfüllt auf [0,4]), dann ZWS anwenden</li>
                <li><strong>❌ Falsch:</strong> Bei f(mid) &lt; 0 das Intervall falsch aktualisieren → <strong>✅ Richtig:</strong> Neues Intervall enthält den Vorzeichenwechsel; f(mid) &lt; 0 und f(links) &gt; 0 → [links, mid]</li>
              </ul>,
              <p>Nach 4 Schritten: Intervall [1/2, 3/4] mit Länge 1/4 enthält die Nullstelle.</p>,
            ),
            solution: (
              <>
                {'f(x) = '}<Frac n="1" d="1+x²" />{' − √x stetig auf [0,4].\n\n'}
                {'f(0) = 1 > 0,  f(4) = '}<Frac n="1" d="17" />{' − 2 < 0\n'}
                {'→ ZWS: Nullstelle in (0,4).\n\n'}
                {'Bisektionsverfahren:\n'}
                {'n=0: mid=2, f(2)='}<Frac n="1" d="5" />{' − √2 < 0  → [0,2]\n'}
                {'n=1: mid=1, f(1)='}<Frac n="1" d="2" />{' − 1 < 0      → [0,1]\n'}
                {'n=2: mid=½, f(½)='}<Frac n="4" d="5" />{' − '}<Frac n="1" d="√2" />{' > 0 → [½,1]\n'}
                {'n=3: mid=¾, f(¾)='}<Frac n="16" d="25" />{' − '}<Frac n="√3" d="2" />{' < 0 → [½,¾]\n\n'}
                {'Nullstelle liegt in [½, ¾],  Länge = '}<Frac n="1" d="4" />{'. ✓'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b11a5',
        nr: 5,
        title: 'Punktweise Konvergenz von fₙ(x) = xⁿ (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: 'Für n ∈ ℕ* sei fₙ: [−1,1] → ℝ, x ↦ xⁿ. Skizzieren Sie f₁, f₂, f₃, f₄.',
            hint: h(
              <>
                <p>fₙ(x) = xⁿ: gerade n → symmetrische Kurve (f(−x) = f(x)), ungerade n → antisymmetrisch. Alle Kurven gehen durch (0,0) und (1,1). Für gerades n auch durch (−1,1), für ungerades n durch (−1,−1).</p>
              </>,
              <>
                <pre className="hint-code-block">{`f₁(x) = x         → Gerade von (−1,−1) bis (1,1)
f₂(x) = x²        → Parabel, Minimum bei x=0
f₃(x) = x³        → S-Kurve, antisymmetrisch
f₄(x) = x⁴        → flachere Parabel (schmalere Öffnung)`}</pre>
              </>,
              <p>Für |x| &lt; 1 gilt: je größer n, desto näher an 0. Für x = 1 immer 1. Für x = −1: +1 oder −1 je nach Parität.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> f₂(−x) = −f₂(x) annehmen (antisymmetrisch) → <strong>✅ Richtig:</strong> f₂ und f₄ sind gerade Funktionen: f(−x) = f(x); ihre Graphen sind symmetrisch zur y-Achse</li>
              </ul>,
              <p>Gemeinsame Punkte: (0,0), (1,1) für alle n; (−1,1) für gerades n, (−1,−1) für ungerades n.</p>,
            ),
            solution: 'f₁: Gerade y=x\nf₂: Normalparabel y=x²\nf₃: kubische Kurve y=x³ (antisymmetrisch)\nf₄: y=x⁴ (flacher als f₂, ≥0)\n\nAlle durch (0,0) und (1,1). Für |x|<1 gilt: f₄ < f₂ und |f₃| < f₁.',
          },
          {
            letter: 'b',
            text: 'Für welche x ∈ [−1,1] existiert lim(n→∞) fₙ(x)? Geben Sie die Grenzwerte an.',
            hint: h(
              <>
                <p>Die Folge (xⁿ)ₙ ist eine <span className="hint-em">geometrische Folge</span> mit Quotient x. Sie konvergiert genau für |x| ≤ 1, aber bei x = −1 nicht (Vorzeichen alterniert).</p>
              </>,
              <>
                <pre className="hint-code-block">{`|x| < 1:  xⁿ → 0  (geometrische Folge, Quotient |x|<1)
x = 1:    1ⁿ = 1 → 1
x = −1:  (−1)ⁿ alterniert zwischen ±1 → kein Grenzwert

lim(n→∞) xⁿ = { 0,  |x| < 1
              { 1,  x = 1
              { —  (existiert nicht für x = −1)`}</pre>
              </>,
              <p>Der Grenzwert existiert für x ∈ (−1,1] — also für alle x ∈ [−1,1] außer x = −1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim(n→∞)(−1)ⁿ = −1 (immer negativ) → <strong>✅ Richtig:</strong> (−1)ⁿ alterniert zwischen +1 und −1; der Grenzwert existiert nicht</li>
              </ul>,
              <p>Grenzwert existiert für x ∈ (−1,1].</p>,
            ),
            solution: 'lim(n→∞) xⁿ existiert für x ∈ (−1,1]:\n\n  0,  |x| < 1\n  1,  x = 1\n\nFür x = −1: (−1)ⁿ alterniert → kein Grenzwert.',
          },
          {
            letter: 'c',
            text: 'Skizzieren Sie die Grenzfunktion f: D → ℝ, x ↦ lim(n→∞) fₙ(x), wobei D = {x ∈ [−1,1] : lim(n→∞) fₙ(x) existiert}.',
            hint: h(
              <>
                <p>D = (−1,1] (aus Teil (b)). Die Grenzfunktion f nimmt den Wert 0 für alle x ∈ (−1,1) an, und den Wert 1 bei x = 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`D = (−1,1]

f: (−1,1] → ℝ,  x ↦ { 0,  x ∈ (−1,1)
                      { 1,  x = 1

Skizze: durchgezogene Linie y=0 auf (−1,1),
        isolierter Punkt (1,1).`}</pre>
              </>,
              <p>Die Grenzfunktion ist nicht stetig in x = 1 (Sprung von 0 auf 1) — obwohl alle fₙ stetig sind.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> D = [−1,1] (auch x = −1 aufnehmen) → <strong>✅ Richtig:</strong> D = (−1,1], da lim(n→∞)(−1)ⁿ nicht existiert; x = −1 liegt außerhalb von D</li>
                <li><strong>❌ Falsch:</strong> f(1) = 0 (weil alle anderen Grenzwerte 0 sind) → <strong>✅ Richtig:</strong> 1ⁿ = 1 für alle n, daher f(1) = lim(n→∞) 1ⁿ = 1</li>
              </ul>,
              <p>f ist nicht stetig in x = 1: lim(x→1, x&lt;1) f(x) = 0 ≠ f(1) = 1.</p>,
            ),
            solution: 'D = (−1,1]\n\nf: (−1,1] → ℝ,  x ↦ {0 für x ∈ (−1,1),  1 für x = 1}\n\nSkizze: y=0 auf (−1,1) (offenes Intervall), isolierter Punkt (1,1).\nHinweis: f ist nicht stetig in x=1, obwohl alle fₙ stetig sind.',
          },
        ],
      },
    ],
  },
  {
    id: 'blatt12',
    nr: '12',
    titel: 'Spezielle Funktionen',
    aufgaben: [
      {
        id: 'b12a1',
        nr: 1,
        title: 'Funktionsgrenzwerte',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="1" d="x" />{' cos('}<Frac n="1" d="x" />{')'}</>,
            hint: h(
              <>
                <p>Der Ausdruck ist ein Produkt: <span className="hint-em">Nullfolge · stetige Funktion im Grenzpunkt</span>. Wenn f(x) → 0 und g stetig ist, gilt f(x)·g(f(x)) → 0·g(0).</p>
              </>,
              <>
                <pre className="hint-code-block">{`1/x → 0 wenn x → ∞.
Da cos stetig ist:
  lim cos(1/x) = cos(lim 1/x) = cos(0) = 1.
Insgesamt:
  lim (1/x)·cos(1/x) = 0 · 1 = 0.`}</pre>
              </>,
              <>
                <p>Stetige Funktionen dürfen mit dem Grenzwert vertauscht werden: lim g(f(x)) = g(lim f(x)).</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> cos(1/x) für x → ∞ ohne Argument-Grenzwert auswerten → <strong>✅ Richtig:</strong> Zuerst 1/x → 0 erkennen, dann cos(1/x) → cos(0) per Stetigkeit</li>
                <li><strong>❌ Falsch:</strong> cos(0) = 0 → <strong>✅ Richtig:</strong> cos(0) = 1 (der Cosinus hat sein Maximum bei 0)</li>
              </ul>,
              <p>Ergibt sich 0·1 = 0?</p>,
            ),
            solution: (
              <>
                <Frac n="1" d="x" />{' → 0 für x → ∞.\n\n'}
                {'Da cos stetig: lim cos('}<Frac n="1" d="x" />{') = cos(0) = 1.\n\n'}
                {'Insgesamt: lim '}<Frac n="1" d="x" />{' cos('}<Frac n="1" d="x" />{') = 0 · 1 = 0.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="1" d="x" />{' cos(x)'}</>,
            hint: h(
              <>
                <p>cos(x) ist <span className="hint-em">beschränkt</span>: cos(x) ∈ [−1, 1] für alle x ∈ ℝ. Das Produkt einer Nullfolge mit einer beschränkten Funktion ergibt 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`cos(x) ∈ [−1, 1] für alle x ∈ ℝ.
lim 1/x = 0.
„Beschränkte Folge mal Nullfolge ergibt 0":
  lim (1/x)·cos(x) = 0.`}</pre>
              </>,
              <>
                <p>Sandwichsatz: |<Frac n="cos x" d="x" />| ≤ <Frac n="1" d="|x|" /> → 0.</p>
              </>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim cos(x) für x → ∞ ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(x) ist beschränkt ∈ [−1,1], und Nullfolge · Beschränkte = 0</li>
              </ul>,
              <p>Ist cos(x) beschränkt und geht 1/x → 0?</p>,
            ),
            solution: (
              <>
                {'cos(x) ∈ [−1, 1] für alle x ∈ ℝ. Außerdem '}<Frac n="1" d="x" />{' → 0 für x → ∞.\n\n'}
                {'Beschränkte Funktion mal Nullfolge:\n\n'}
                {'lim '}<Frac n="cos(x)" d="x" />{' = 0.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'lim'}<sub>{'x→0'}</sub>{' x · exp(x)'}</>,
            hint: h(
              <>
                <p>exp(x) ist stetig, daher kann der Grenzwert direkt durch Einsetzen bestimmt werden.</p>
              </>,
              <>
                <pre className="hint-code-block">{`x → 0 für x → 0.
exp(x) → exp(0) = 1 für x → 0.
lim x·exp(x) = 0 · 1 = 0.`}</pre>
              </>,
              <p>x·exp(x) ist als Produkt stetiger Funktionen selbst stetig in x = 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> exp(x) als Potenzreihe (1 + x + x²/2 + …) entwickeln → <strong>✅ Richtig:</strong> Stetigkeit von exp reicht; lim x·exp(x) = 0·exp(0) = 0·1 = 0</li>
              </ul>,
              <p>x → 0 und exp(x) → 1 für x → 0?</p>,
            ),
            solution: <>{'x → 0 und exp(x) → exp(0) = 1 für x → 0.\n\nlim x · exp(x) = 0 · 1 = 0.'}</>,
          },
          {
            letter: 'd',
            text: <>{'lim'}<sub>{'x→−∞'}</sub>{' x · exp(x)'}</>,
            hint: h(
              <>
                <p>{'Substitution y = −x: Dann gilt x → −∞ ⟺ y → +∞. Schreibe x·exp(x) = −y·exp(−y) = −y/exp(y) und nutze lim_{y→∞} y/exp(y) = 0.'}</p>
              </>,
              <>
                <pre className="hint-code-block">{`y = −x, also x = −y.
x → −∞  ⟺  y → +∞.

x·exp(x) = (−y)·exp(−y) = −y/exp(y).

Da lim_{y→∞} y/exp(y) = 0 (Vorlesung):
  lim_{x→−∞} x·exp(x) = 0.`}</pre>
              </>,
              <p>exp wächst schneller als jedes Polynom: y/exp(y) → 0 für y → ∞.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> „−∞ · 0 = −∞" direkt schreiben → <strong>✅ Richtig:</strong> Das ist ein unbestimmter Ausdruck; Substitution y = −x umformen, dann y/exp(y) → 0 auswerten</li>
              </ul>,
              <p>Nach Substitution y = −x: Ergibt sich −y/exp(y) → 0?</p>,
            ),
            solution: (
              <>
                {'Substitution y = −x (y → ∞ wenn x → −∞):\n\n'}
                {'x · exp(x) = (−y) · exp(−y) = −'}<Frac n="y" d="exp(y)" />{'\n\n'}
                {'Da lim'}<sub>{'y→∞'}</sub>{' '}<Frac n="y" d="exp(y)" />{' = 0 (aus Vorlesung):\n\n'}
                {'lim'}<sub>{'x→−∞'}</sub>{' x · exp(x) = 0.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b12a2',
        nr: 2,
        title: 'Folgengrenzwerte',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'lim'}<sub>{'n→∞'}</sub>{' '}<Frac n="cos(n)" d="ln(n)" /></>,
            hint: h(
              <>
                <p>cos(n) ∈ [−1,1] ist <span className="hint-em">beschränkt</span>. Da ln(n) → ∞ gilt 1/ln(n) → 0. Wende die Regel „beschränkte Folge mal Nullfolge = Nullfolge" an.</p>
              </>,
              <>
                <pre className="hint-code-block">{`|cos(n)| ≤ 1 für alle n ∈ ℕ.
lim 1/ln(n) = 0 (da ln(n) → ∞).
→ lim cos(n)/ln(n) = 0.`}</pre>
              </>,
              <p>|cos(n)/ln(n)| ≤ 1/ln(n) → 0 (Sandwichsatz).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(n) ist beschränkt ∈ [−1,1], und Nullfolge · Beschränkte = 0</li>
              </ul>,
              <p>cos(n) beschränkt und 1/ln(n) → 0?</p>,
            ),
            solution: (
              <>
                {'cos(n) ∈ [−1,1] für alle n ∈ ℕ. Außerdem lim '}<Frac n="1" d="ln(n)" />{' = 0, da ln(n) → ∞.\n\n'}
                {'Beschränkte Folge mal Nullfolge:\n\n'}
                {'lim '}<Frac n="cos(n)" d="ln(n)" />{' = 0.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'lim'}<sub>{'n→∞'}</sub>{' sin('}<Frac n="1" d="n" />{') · cos(n)'}</>,
            hint: h(
              <>
                <p>cos(n) ist beschränkt. Da sin stetig ist und 1/n → 0, gilt sin(1/n) → sin(0) = 0. Beschränkte Folge mal Nullfolge = 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`cos(n) ∈ [−1,1] für alle n.
1/n → 0, sin stetig → sin(1/n) → sin(0) = 0.
→ lim sin(1/n)·cos(n) = 0.`}</pre>
              </>,
              <p>|sin(1/n)·cos(n)| ≤ |sin(1/n)| → 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ bestimmen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(n) ist beschränkt ∈ [−1,1] und sin(1/n) → 0</li>
              </ul>,
              <p>sin(1/n) → 0 und |cos(n)| ≤ 1?</p>,
            ),
            solution: (
              <>
                {'cos(n) ∈ [−1,1] für alle n ∈ ℕ. Da '}<Frac n="1" d="n" />{' → 0 und sin stetig: sin('}<Frac n="1" d="n" />{') → sin(0) = 0.\n\n'}
                {'Beschränkte Folge mal Nullfolge:\n\n'}
                {'lim sin('}<Frac n="1" d="n" />{') · cos(n) = 0.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'lim'}<sub>{'n→∞'}</sub>{' '}<Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' · exp('}<Frac n="2" d="n³ + 1" />{')'}</>,
            hint: h(
              <>
                <p>Teile Zähler und Nenner des Bruchs durch n⁴. Für den exp-Term: 2/(n³+1) → 0, und da exp stetig ist, gilt exp(0) = 1. Produktregel für Grenzwerte anwenden.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Bruch ÷ n⁴:
  (1 − 3/n²) / (1/n − 3) → (1−0)/(0−3) = −1/3.

exp-Term: 2/(n³+1) → 0.
Da exp stetig: exp(0) = 1.

Insgesamt: (−1/3) · 1 = −1/3.`}</pre>
              </>,
              <p>lim f(n)·g(n) = (lim f(n))·(lim g(n)), falls beide Grenzwerte existieren.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Bruch direkt auswerten ohne durch n⁴ zu dividieren → <strong>✅ Richtig:</strong> Durch die höchste Potenz n⁴ dividieren; ergibt (1−3/n²)/(1/n−3) → (1)/(−3) = −1/3</li>
              </ul>,
              <p>Bruch → −1/3 und exp-Term → 1?</p>,
            ),
            solution: (
              <>
                {'Bruch durch n⁴ dividieren:\n\n'}
                <Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' = '}<Frac n="1 − 3/n²" d="1/n − 3" />{' → '}<Frac n="1" d="−3" />{' = −'}<Frac n="1" d="3" />{' für n → ∞.\n\n'}
                {'Außerdem: '}<Frac n="2" d="n³ + 1" />{' → 0, da exp stetig: exp('}<Frac n="2" d="n³+1" />{') → exp(0) = 1.\n\n'}
                {'Insgesamt: lim '}<Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' · exp('}<Frac n="2" d="n³+1" />{') = −'}<Frac n="1" d="3" />{' · 1 = −'}<Frac n="1" d="3" />{'.'}
              </>
            ),
          },
          {
            letter: 'd',
            text: <>{'lim'}<sub>{'n→∞'}</sub>{' n · ln(1 + '}<Frac n="1" d="n" />{')'}</>,
            hint: h(
              <>
                <p>Schreibe n·ln(1+1/n) = ln((1+1/n)^n). Der Grenzwert (1+1/n)^n = e ist bekannt. Da ln stetig ist: lim ln((1+1/n)^n) = ln(e) = 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`n·ln(1+1/n) = ln((1+1/n)^n)

lim (1+1/n)^n = e  (bekannt aus Vorlesung)

Da ln stetig:
  lim ln((1+1/n)^n) = ln(e) = 1.`}</pre>
              </>,
              <p>Die Umformung nutzt ln(aᵇ) = b·ln(a) rückwärts: n·ln(a) = ln(aⁿ).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> „∞·0 = 0" oder „∞·0 = ∞" direkt schreiben → <strong>✅ Richtig:</strong> Unbestimmter Ausdruck; Umformung n·ln(1+1/n) = ln((1+1/n)ⁿ) → ln(e) = 1 verwenden</li>
              </ul>,
              <p>Nach Umformung zu ln((1+1/n)^n): Grenzwert = ln(e) = 1?</p>,
            ),
            solution: (
              <>
                {'n · ln(1 + '}<Frac n="1" d="n" />{') = ln((1 + '}<Frac n="1" d="n" />{')ⁿ).\n\n'}
                {'Da lim (1 + '}<Frac n="1" d="n" />{')ⁿ = e und ln stetig:\n\n'}
                {'lim n · ln(1 + '}<Frac n="1" d="n" />{') = ln(e) = 1.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b12a3',
        nr: 3,
        title: 'Allgemeine Exponentialfunktion und ᵏ√k',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Sei a > 0. Ist die Abbildung f: ℝ → ℝ,  x ↦ aˣ stetig?'}</>,
            hint: h(
              <>
                <p>Schreibe aˣ = exp(x · ln(a)). Dann ist f eine Verkettung stetiger Funktionen.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f(x) = aˣ = exp(x · ln(a))

Da a > 0: ln(a) ∈ ℝ ist eine Konstante.
x ↦ x·ln(a) ist ein Polynom → stetig.
exp ist stetig auf ℝ.
Verkettung stetiger Funktionen → stetig.`}</pre>
              </>,
              <p>Allgemein: g∘h ist stetig, wenn g und h stetig sind.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> a ≤ 0 zulassen → <strong>✅ Richtig:</strong> Die Bedingung a &gt; 0 ist nötig; ln(a) ist nur für a &gt; 0 definiert, daher ist die Darstellung aˣ = exp(x·ln(a)) nur für a &gt; 0 gültig</li>
              </ul>,
              <p>f(x) = exp(x·ln(a)) — Verkettung stetiger Funktionen?</p>,
            ),
            solution: <>{'f(x) = aˣ = exp(x · ln(a)).\n\nDa a > 0 ist ln(a) ∈ ℝ. Das Argument x·ln(a) ist ein Polynom in x (stetig), und exp ist stetig auf ℝ.\nVerkettung stetiger Funktionen ist stetig → f ist stetig auf ℝ.'}</>,
          },
          {
            letter: 'b',
            text: <>{'Sei k ∈ ℕ, k ≥ 2. Bestimmen Sie lim'}<sub>{'k→∞'}</sub>{' ᵏ√k.\n\nHinweis: ᵏ√k = k'}<sup>{'1/k'}</sup>{'.'}</>,
            hint: h(
              <>
                <p>Schreibe k^(1/k) = exp(<Frac n="ln(k)" d="k" />). Der Grenzwert ln(k)/k → 0 ist aus der Vorlesung bekannt. Da exp stetig ist: lim exp(ln(k)/k) = exp(0) = 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`k^(1/k) = exp((1/k)·ln(k)) = exp(ln(k)/k)

Aus Vorlesung: lim ln(k)/k = 0.

Da exp stetig:
  lim k^(1/k) = exp(0) = 1.`}</pre>
              </>,
              <p>ln wächst langsamer als jedes Polynom: ln(k)/k → 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> k^(1/k) = k^0 = 1 direkt schreiben (Exponent 1/k → 0 einfach einsetzen) → <strong>✅ Richtig:</strong> Der Exponent 1/k hängt von k ab; über exp(ln(k)/k) und lim ln(k)/k = 0 herleiten</li>
              </ul>,
              <p>exp(ln(k)/k) → exp(0) = 1?</p>,
            ),
            solution: (
              <>
                {'ᵏ√k = k'}<sup>{'1/k'}</sup>{' = exp('}<Frac n="ln(k)" d="k" />{').\n\n'}
                {'Nach Vorlesung: lim '}<Frac n="ln(k)" d="k" />{' = 0.\n\n'}
                {'Da exp stetig: lim ᵏ√k = exp(0) = 1.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b12a4',
        nr: 4,
        title: 'Rechenregeln für die allgemeine Exponentialfunktion',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Seien x, y ∈ ℝ, a > 0. Zeigen Sie: aˣ · aʸ = a'}<sup>{'x+y'}</sup>{'.'}</>,
            hint: h(
              <>
                <p>Schreibe aˣ = exp(x·ln a) und aʸ = exp(y·ln a). Nutze dann exp(u)·exp(v) = exp(u+v).</p>
              </>,
              <>
                <pre className="hint-code-block">{`aˣ · aʸ = exp(x ln a) · exp(y ln a)
        = exp(x ln a + y ln a)
        = exp((x+y) ln a)
        = a^(x+y).`}</pre>
              </>,
              <p>Additionstheorem für exp: exp(u)·exp(v) = exp(u+v) für alle u, v ∈ ℝ.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> aˣ·aʸ = a^(x+y) direkt als bekannt voraussetzen → <strong>✅ Richtig:</strong> Über die Definition aˣ = exp(x·ln a) herleiten und das Additionstheorem exp(u+v) = exp(u)·exp(v) anwenden</li>
              </ul>,
              <p>exp(x ln a + y ln a) = exp((x+y) ln a) = a^(x+y)?</p>,
            ),
            solution: (
              <>
                {'aˣ · aʸ = exp(x ln a) · exp(y ln a)\n'}
                {'       = exp(x ln a + y ln a)\n'}
                {'       = exp((x+y) ln a)\n'}
                {'       = a'}<sup>{'x+y'}</sup>{'.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Seien x, y ∈ ℝ, a > 0. Zeigen Sie: (aˣ)'}<sup>{'y'}</sup>{' = a'}<sup>{'xy'}</sup>{'.'}</>,
            hint: h(
              <>
                <p>Schreibe (aˣ)^y = exp(y · ln(aˣ)). Berechne ln(aˣ) = ln(exp(x·ln a)) = x·ln(a) und setze ein.</p>
              </>,
              <>
                <pre className="hint-code-block">{`(aˣ)^y = exp(y · ln(aˣ))
        = exp(y · ln(exp(x ln a)))
        = exp(y · (x ln a))
        = exp(xy ln a)
        = a^(xy).`}</pre>
              </>,
              <p>Schlüsselschritt: ln(exp(u)) = u für alle u ∈ ℝ.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ln(aˣ) = x·ln(a) direkt als bekannt voraussetzen → <strong>✅ Richtig:</strong> Erst aˣ = exp(x·ln a) einsetzen, dann ln(exp(u)) = u verwenden; nur so ist der Beweis vollständig</li>
              </ul>,
              <p>y · ln(exp(x ln a)) = y · (x ln a) = xy ln a?</p>,
            ),
            solution: (
              <>
                {'(aˣ)^y = exp(y ln(aˣ))\n'}
                {'       = exp(y · ln(exp(x ln a)))\n'}
                {'       = exp(y · (x ln a))\n'}
                {'       = exp(xy ln a)\n'}
                {'       = a'}<sup>{'xy'}</sup>{'.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'Seien x ∈ ℝ, a, b > 0. Zeigen Sie: aˣbˣ = (ab)ˣ.'}</>,
            hint: h(
              <>
                <p>Schreibe aˣ = exp(x·ln a) und bˣ = exp(x·ln b). Nutze exp(u)·exp(v) = exp(u+v) und ln a + ln b = ln(ab).</p>
              </>,
              <>
                <pre className="hint-code-block">{`aˣ · bˣ = exp(x ln a) · exp(x ln b)
        = exp(x ln a + x ln b)
        = exp(x(ln a + ln b))
        = exp(x ln(ab))
        = (ab)^x.`}</pre>
              </>,
              <p>{'Logarithmengesetz: ln a + ln b = ln(ab) für a, b > 0.'}</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> ln(a) + ln(b) = ln(a+b) verwenden → <strong>✅ Richtig:</strong> Logarithmengesetz: ln(a) + ln(b) = ln(a·b) für a, b &gt; 0; nicht ln(a+b)</li>
              </ul>,
              <p>ln a + ln b = ln(ab) korrekt eingesetzt?</p>,
            ),
            solution: (
              <>
                {'aˣ · bˣ = exp(x ln a) · exp(x ln b)\n'}
                {'       = exp(x ln a + x ln b)\n'}
                {'       = exp(x(ln a + ln b))\n'}
                {'       = exp(x ln(ab))\n'}
                {'       = (ab)ˣ.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b12a5',
        nr: 5,
        title: 'Logarithmuswerte berechnen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>(i) log₁₀(10),{'  '}(ii) log₁₀(10000),{'  '}(iii) log₁₀(1),{'  '}(iv) log₁₀(0,01)</>,
            hint: h(
              <>
                <p>Nutze log_a(a^k) = k. Schreibe das Argument als Potenz von 10.</p>
              </>,
              <>
                <pre className="hint-code-block">{`log₁₀(10)    = log₁₀(10¹) = 1
log₁₀(10000) = log₁₀(10⁴) = 4
log₁₀(1)     = log₁₀(10⁰) = 0
log₁₀(0,01)  = log₁₀(10⁻²) = −2`}</pre>
              </>,
              <p>0,01 = 1/100 = 10⁻².</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> log₁₀(1) = 1 → <strong>✅ Richtig:</strong> 10⁰ = 1, also log₁₀(1) = 0; der Logarithmus von 1 ist stets 0 (egal zur welcher Basis)</li>
              </ul>,
              <p>Jedes Argument als 10^k dargestellt?</p>,
            ),
            solution: (
              <>
                {'(i)   log₁₀(10)    = 1\n'}
                {'(ii)  log₁₀(10000) = log₁₀(10⁴) = 4\n'}
                {'(iii) log₁₀(1)     = 0\n'}
                {'(iv)  log₁₀(0,01)  = log₁₀(10⁻²) = −2'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>(i) log₂(<Frac n="2" d="64" />),{'  '}(ii) log₄(<Frac n="2" d="64" />),{'  '}(iii) log₃₂(<Frac n="2" d="64" />),{'  '}(iv) log₆₄(<Frac n="2" d="64" />)</>,
            hint: h(
              <>
                <p>Vereinfache zunächst: <Frac n="2" d="64" /> = <Frac n="1" d="32" /> = 2⁻⁵. Schreibe 1/32 dann als Potenz der jeweiligen Basis.</p>
              </>,
              <>
                <pre className="hint-code-block">{`2/64 = 1/32 = 2⁻⁵

(i)  log₂(2⁻⁵) = −5
(ii) 4^(−5/2) = (2²)^(−5/2) = 2⁻⁵ = 1/32
     → log₄(1/32) = −5/2
(iii) 32⁻¹ = 1/32
     → log₃₂(1/32) = −1
(iv) 64^(1/6) = (2⁶)^(1/6) = 2, also 64^(−5/6) = 2⁻⁵ = 1/32
     → log₆₄(1/32) = −5/6`}</pre>
              </>,
              <p>Alternativ: log_b(2/64) = log_b(2) − log_b(64).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 2/64 direkt mit der Basis vergleichen ohne zu vereinfachen → <strong>✅ Richtig:</strong> Erst 2/64 = 1/32 = 2⁻⁵ berechnen, dann 2⁻⁵ als Potenz der jeweiligen Basis darstellen</li>
              </ul>,
              <p>2/64 = 1/32 = 2⁻⁵ — als Potenz der Basis ausgedrückt?</p>,
            ),
            solution: (
              <>
                <Frac n="2" d="64" />{' = '}<Frac n="1" d="32" />{' = 2⁻⁵.\n\n'}
                {'(i)   log₂('}<Frac n="2" d="64" />{') = log₂(2⁻⁵) = −5.\n'}
                {'(ii)  log₄('}<Frac n="2" d="64" />{') = log₄(2) − log₄(64) = '}<Frac n="1" d="2" />{' − 3 = −'}<Frac n="5" d="2" />{'.\n'}
                {'(iii) log₃₂('}<Frac n="2" d="64" />{') = log₃₂(32⁻¹) = −1.\n'}
                {'(iv)  log₆₄('}<Frac n="2" d="64" />{') = log₆₄(2) − log₆₄(64) = '}<Frac n="1" d="6" />{' − 1 = −'}<Frac n="5" d="6" />{'.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>(i) log₂(64),{'  '}(ii) <Frac n="log₂(2/64)" d="log₂(64)" />. Vergleichen Sie das Ergebnis mit log₆₄(<Frac n="2" d="64" />).</>,
            hint: h(
              <>
                <p>Nutze den <span className="hint-em">Basiswechselsatz</span>: log_b(x) = log_a(x) / log_a(b). Damit ist log₂(2/64) / log₂(64) = log₆₄(2/64).</p>
              </>,
              <>
                <pre className="hint-code-block">{`(i) log₂(64) = log₂(2⁶) = 6.

(ii) log₂(2/64) = −5  (aus (b)(i))
     log₂(64)   = 6

     (−5)/6 = −5/6.

log₆₄(2/64) = −5/6  (aus (b)(iv)).
→ Werte stimmen überein ✓

Allgemein: log_a(x)/log_a(b) = log_b(x).`}</pre>
              </>,
              <p>{'Basiswechselsatz: log_b(x) = ln(x)/ln(b) für a, b > 0, a,b ≠ 1.'}</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> log₂(2/64)/log₂(64) als log₂(2/64 − 64) oder log₂((2/64)/64) interpretieren → <strong>✅ Richtig:</strong> Das ist der Basiswechselsatz: log_a(x)/log_a(b) = log_b(x); hier log₂(2/64)/log₂(64) = log₆₄(2/64)</li>
              </ul>,
              <p>Basiswechselsatz korrekt angewandt?</p>,
            ),
            solution: (
              <>
                {'(i) log₂(64) = log₂(2⁶) = 6.\n\n'}
                {'(ii) '}<Frac n="log₂(2/64)" d="log₂(64)" />{' = '}<Frac n="−5" d="6" />{' = −'}<Frac n="5" d="6" />{'.\n\n'}
                {'Aus (b)(iv): log₆₄('}<Frac n="2" d="64" />{') = −'}<Frac n="5" d="6" />{'. Die Werte stimmen überein.\n\n'}
                {'Allgemein gilt (Basiswechselsatz): '}<Frac n="log_a(x)" d="log_a(b)" />{' = log_b(x)  für a, b > 0, a,b ≠ 1.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b12a6',
        nr: 6,
        title: 'Konvergenz der sin- und cos-Reihe (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Zeigen Sie mit dem Quotientenkriterium, dass die Reihen\n\n'}
                {'sin(x) = '}
                {'Σ'}
                <sub>{'k=0'}</sub>
                <sup>{'∞'}</sup>
                {' (−1)ᵏ '}
                <Frac n="x²ᵏ⁺¹" d="(2k+1)!" />
                {'  und  cos(x) = '}
                {'Σ'}
                <sub>{'k=0'}</sub>
                <sup>{'∞'}</sup>
                {' (−1)ᵏ '}
                <Frac n="x²ᵏ" d="(2k)!" />
                {'\n\nfür jedes x ∈ ℝ konvergieren.'}
              </>
            ),
            hint: h(
              <>
                <p>Das <span className="hint-em">Quotientenkriterium</span>: Σaₖ konvergiert absolut, wenn lim |aₖ₊₁/aₖ| {'<'} 1. Bilde das Verhältnis zweier aufeinanderfolgender Glieder und bestimme den Grenzwert für k → ∞.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Sinusreihe: aₖ = (−1)ᵏ x^(2k+1)/(2k+1)!

|aₖ₊₁/aₖ| = x^(2k+3)/(2k+3)! · (2k+1)!/x^(2k+1)
           = x² / ((2k+3)(2k+2))

lim x² / ((2k+3)(2k+2)) = 0 < 1 ✓

Kosinusreihe analog: aₖ = (−1)ᵏ x^(2k)/(2k)!
|aₖ₊₁/aₖ| = x² / ((2k+2)(2k+1)) → 0 < 1 ✓`}</pre>
              </>,
              <p>x ist fest; nur k → ∞. Der Grenzwert ist 0 für jedes x ∈ ℝ.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> x als wachsende Variable im Grenzwert behandeln → <strong>✅ Richtig:</strong> x ist eine feste reelle Zahl; nur k → ∞; der Grenzwert des Quotienten |aₖ₊₁/aₖ| = x²/((2k+3)(2k+2)) → 0</li>
              </ul>,
              <p>|aₖ₊₁/aₖ| → 0 {'<'} 1 für k → ∞ (x fest)?</p>,
            ),
            solution: (
              <>
                {'Sinusreihe: aₖ = (−1)ᵏ '}<Frac n="x²ᵏ⁺¹" d="(2k+1)!" />{'\n\n'}
                {'|'}<Frac n="aₖ₊₁" d="aₖ" />{'| = '}<Frac n="x²" d="(2k+3)(2k+2)" />{' → 0 < 1  (k → ∞, x fest).\n'}
                {'→ Sinusreihe konvergiert für alle x ∈ ℝ.\n\n'}
                {'Kosinusreihe: aₖ = (−1)ᵏ '}<Frac n="x²ᵏ" d="(2k)!" />{'\n\n'}
                {'|'}<Frac n="aₖ₊₁" d="aₖ" />{'| = '}<Frac n="x²" d="(2k+2)(2k+1)" />{' → 0 < 1  (k → ∞, x fest).\n'}
                {'→ Kosinusreihe konvergiert für alle x ∈ ℝ.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Zeigen Sie, dass für jedes x ∈ ℝ gilt:\n\ncos(−x) = cos(x)  und  sin(−x) = −sin(x).'}</>,
            hint: h(
              <>
                <p>Setze −x in die Reihendarstellung ein. Nutze (−x)²ᵏ = x²ᵏ (gerade Potenz bleibt positiv) und (−x)²ᵏ⁺¹ = −x²ᵏ⁺¹ (ungerade Potenz wechselt Vorzeichen).</p>
              </>,
              <>
                <pre className="hint-code-block">{`cos(−x) = Σ (−1)ᵏ (−x)^(2k) / (2k)!
        = Σ (−1)ᵏ x^(2k) / (2k)!   [da (−x)^(2k) = x^(2k)]
        = cos(x). ✓

sin(−x) = Σ (−1)ᵏ (−x)^(2k+1) / (2k+1)!
        = Σ (−1)ᵏ · (−1) · x^(2k+1) / (2k+1)!
        = −Σ (−1)ᵏ x^(2k+1) / (2k+1)!
        = −sin(x). ✓`}</pre>
              </>,
              <p>(−1)^(2k) = 1 (gerade) und (−1)^(2k+1) = −1 (ungerade).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (−x)²ᵏ = −x²ᵏ behaupten → <strong>✅ Richtig:</strong> Gerade Potenzen: (−x)²ᵏ = (−1)²ᵏ · x²ᵏ = 1 · x²ᵏ = x²ᵏ; das Vorzeichen verschwindet</li>
              </ul>,
              <p>(−x)²ᵏ = x²ᵏ und (−x)²ᵏ⁺¹ = −x²ᵏ⁺¹ korrekt angewandt?</p>,
            ),
            solution: (
              <>
                {'Da (−x)²ᵏ = x²ᵏ für jedes k ∈ ℕ:\n\n'}
                {'cos(−x) = Σ (−1)ᵏ '}<Frac n="(−x)²ᵏ" d="(2k)!" />{' = Σ (−1)ᵏ '}<Frac n="x²ᵏ" d="(2k)!" />{' = cos(x). ✓\n\n'}
                {'Da (−x)²ᵏ⁺¹ = −x²ᵏ⁺¹:\n\n'}
                {'sin(−x) = Σ (−1)ᵏ '}<Frac n="(−x)²ᵏ⁺¹" d="(2k+1)!" />{' = −Σ (−1)ᵏ '}<Frac n="x²ᵏ⁺¹" d="(2k+1)!" />{' = −sin(x). ✓'}
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'blatt13',
    nr: '13',
    titel: 'Differentiation',
    aufgaben: [
      {
        id: 'b13a1',
        nr: 1,
        title: 'Ableitungen bestimmen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'f : ℝ → ℝ,  x ↦ x³ · exp(1 + 2x)'}</>,
            hint: h(
              <>
                <p>Wende die <span className="hint-em">Produktregel</span> (uv)' = u'v + uv' an mit u = x³ und v = exp(1+2x). Für v brauchst du außerdem die <span className="hint-em">Kettenregel</span>: v' = exp(1+2x) · 2.</p>
              </>,
              <>
                <pre className="hint-code-block">{`u = x³         → u' = 3x²
v = exp(1+2x)  → v' = exp(1+2x) · 2  (Kettenregel)

f' = u'v + uv'
   = 3x² · exp(1+2x) + x³ · exp(1+2x) · 2
   = (3x² + 2x³) · exp(1+2x)`}</pre>
              </>,
              <p>Produkt- und Kettenregel: (f∘g)' = (f'∘g) · g'.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (exp(1+2x))' = exp(1+2x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> Kettenregel: (exp(1+2x))' = exp(1+2x) · 2; innerer Faktor 2 muss mitgenommen werden</li>
                <li><strong>❌ Falsch:</strong> Nur u'v oder nur uv' hinschreiben → <strong>✅ Richtig:</strong> Produktregel liefert beide Summanden: f' = u'v + uv'</li>
              </ul>,
              <p>u' = 3x² und v' = 2·exp(1+2x) korrekt bestimmt, Produktregel angewandt?</p>,
            ),
            solution: (
              <>
                {'Mit Produkt- und Kettenregel:\n\n'}
                {"f'(x) = 3x² · exp(1 + 2x) + x³ · exp(1 + 2x) · 2\n"}
                {'      = (3x² + 2x³) · exp(1 + 2x).'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'g : ℝ → ℝ,  x ↦ '}<Frac n="2x" d="2x² + 1" /></>,
            hint: h(
              <>
                <p>Wende die <span className="hint-em">Quotientenregel</span> an: (u/v)' = (u'v − uv') / v², mit u = 2x und v = 2x² + 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`u = 2x       → u' = 2
v = 2x² + 1  → v' = 4x

g' = (u'v − uv') / v²
   = (2(2x²+1) − 2x·4x) / (2x²+1)²
   = (4x² + 2 − 8x²) / (2x²+1)²
   = (−4x² + 2) / (2x²+1)²`}</pre>
              </>,
              <p>Quotientenregel: Zähler ist u'v − uv' (nicht u v' − u' v).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt ableiten: (2x)'/(2x²+1)' = 2/(4x) → <strong>✅ Richtig:</strong> Das ist nicht die Quotientenregel; korrekt ist (u'v − uv')/v²</li>
                <li><strong>❌ Falsch:</strong> Vorzeichen vertauschen: uv' − u'v → <strong>✅ Richtig:</strong> Quotientenregel: Zähler immer u'v − uv' (Ableitungsterm kommt zuerst)</li>
              </ul>,
              <p>Zähler: 2(2x²+1) − 2x·4x = −4x²+2?</p>,
            ),
            solution: (
              <>
                {'Mit der Quotientenregel:\n\n'}
                {"g'(x) = "}<Frac n="2(2x²+1) − 2x · 4x" d="(2x²+1)²" />{' = '}<Frac n="4x² + 2 − 8x²" d="(2x²+1)²" />{' = '}<Frac n="−4x² + 2" d="(2x²+1)²" />{'.'}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'h : (0,∞) → ℝ,  x ↦ (x³ + √3) · ln(x² + x)'}</>,
            hint: h(
              <>
                <p>Produktregel mit u = x³ + √3 und v = ln(x²+x). Für v brauchst du die Kettenregel: v' = (2x+1)/(x²+x).</p>
              </>,
              <>
                <pre className="hint-code-block">{`u = x³ + √3       → u' = 3x²
v = ln(x² + x)    → v' = (2x+1)/(x²+x)  (Kettenregel)

h' = u'v + uv'
   = 3x² · ln(x²+x) + (x³+√3) · (2x+1)/(x²+x)`}</pre>
              </>,
              <p>Ableitung von ln(g(x)): g'(x)/g(x) (Kettenregel).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (ln(x²+x))' = 1/(x²+x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> Kettenregel: (ln(g(x)))' = g'(x)/g(x); hier g(x) = x²+x, g'(x) = 2x+1, also v' = (2x+1)/(x²+x)</li>
              </ul>,
              <p>v' = (2x+1)/(x²+x) korrekt mit Kettenregel bestimmt?</p>,
            ),
            solution: (
              <>
                {'Mit Produkt- und Kettenregel:\n\n'}
                {"h'(x) = 3x² · ln(x² + x) + (x³ + √3) · "}<Frac n="1" d="x² + x" />{' · (2x + 1).'}
              </>
            ),
          },
          {
            letter: 'd',
            text: <>{'u : ℝ → ℝ,  x ↦ x|x|'}</>,
            hint: h(
              <>
                <p>Schreibe u als Fallunterscheidung: u(x) = x² für x ≥ 0 und u(x) = −x² für x {'<'} 0. Leite auf ℝ \ {'{0}'} direkt ab. Prüfe Differenzierbarkeit in 0 über den Differenzenquotienten.</p>
              </>,
              <>
                <pre className="hint-code-block">{`u(x) = x|x| = { x²,   x ≥ 0
               { −x²,  x < 0

Auf ℝ \ {0} direkt:
x > 0: u'(x) = 2x
x < 0: u'(x) = −2x

In x = 0 (Differenzenquotient):
u'₊(0) = lim (x²)/x = lim x = 0  (x→0⁺)
u'₋(0) = lim (−x²)/x = lim(−x) = 0  (x→0⁻)
→ u'(0) = 0`}</pre>
              </>,
              <p>Für x {'>'} 0: u(x) = x² → u'(x) = 2x. Für x {'<'} 0: u(x) = −x² → u'(x) = −2x.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Differenzierbarkeit in 0 überspringen und nur die Teilableitungen angeben → <strong>✅ Richtig:</strong> Bei stückweise definierten Funktionen immer separat den Differenzenquotienten in 0 berechnen</li>
              </ul>,
              <p>Einseitige Grenzwerte des Differenzenquotienten in 0 beide = 0?</p>,
            ),
            solution: (
              <>
                {'u(x) = x|x| = { x²,  x ≥ 0\n'}
                {'              { −x², x < 0\n\n'}
                {'Auf ℝ \\ {0}: u\'(x) = 2x (x > 0) bzw. −2x (x < 0).\n\n'}
                {'In x = 0:\n\n'}
                {"u'₊(0) = lim "}<Frac n="x² − 0" d="x − 0" />{' = lim x = 0,\n'}
                {"u'₋(0) = lim "}<Frac n="−x² − 0" d="x − 0" />{' = lim (−x) = 0.\n\n'}
                {"Da u'₊(0) = u'₋(0) = 0, gilt u'(0) = 0.\n\n"}
                {"u' : ℝ → ℝ,  x ↦ { 2x,  x > 0\n"}
                {'                  { 0,   x = 0\n'}
                {'                  { −2x, x < 0'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b13a2',
        nr: 2,
        title: 'Differenzierbarkeit in 0 prüfen',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'f : ℝ → ℝ,  x ↦ { x (x ≥ 0),  x² (x < 0)'}</>,
            hint: h(
              <>
                <p>Berechne die einseitigen Differenzenquotienten in 0: f'₊(0) für x→0⁺ und f'₋(0) für x→0⁻. Nur wenn beide übereinstimmen, ist f in 0 differenzierbar.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f'₊(0) = lim (x − 0)/(x − 0) = lim 1 = 1
         x→0⁺

f'₋(0) = lim (x² − 0)/(x − 0) = lim x = 0
         x→0⁻

Da f'₊(0) = 1 ≠ 0 = f'₋(0):
f ist in 0 nicht differenzierbar.`}</pre>
              </>,
              <p>Skizze: Gerade (x ≥ 0) trifft Parabel (x {'<'} 0) — es gibt einen Knick im Ursprung.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> f ist stetig in 0 → f ist differenzierbar in 0 → <strong>✅ Richtig:</strong> Stetigkeit ist notwendig, aber nicht hinreichend; der Knick (f'₊ = 1 ≠ 0 = f'₋) zeigt Nicht-Differenzierbarkeit</li>
              </ul>,
              <p>f'₊(0) = 1 ≠ 0 = f'₋(0) — kein Grenzwert des Differenzenquotienten?</p>,
            ),
            solution: (
              <>
                {"f'₊(0) = lim "}<Frac n="f(x) − f(0)" d="x − 0" />{' = lim '}<Frac n="x" d="x" />{' = lim 1 = 1,\n'}
                {"f'₋(0) = lim "}<Frac n="f(x) − f(0)" d="x − 0" />{' = lim '}<Frac n="x²" d="x" />{' = lim x = 0.\n\n'}
                {"Da f'₊(0) ≠ f'₋(0), ist f in 0 nicht differenzierbar."}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'g : ℝ → ℝ,  x ↦ { x³ (x ≥ 0),  x² (x < 0)'}</>,
            hint: h(
              <>
                <p>Berechne die einseitigen Differenzenquotienten in 0. Für x→0⁺: x³/x = x² → 0. Für x→0⁻: x²/x = x → 0.</p>
              </>,
              <>
                <pre className="hint-code-block">{`g'₊(0) = lim x³/x = lim x² = 0
         x→0⁺

g'₋(0) = lim x²/x = lim x = 0
         x→0⁻

Da g'₊(0) = g'₋(0) = 0:
g ist in 0 differenzierbar mit g'(0) = 0.`}</pre>
              </>,
              <p>Skizze: x³-Kurve (x ≥ 0) und Parabel (x {'<'} 0) — beide haben Steigung 0 im Ursprung.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Nur Stetigkeit prüfen und daraus Differenzierbarkeit folgern → <strong>✅ Richtig:</strong> Stetigkeit ist notwendig, aber nicht hinreichend; beide einseitigen Differenzenquotienten explizit berechnen</li>
              </ul>,
              <p>g'₊(0) = lim x² = 0 = lim x = g'₋(0)?</p>,
            ),
            solution: (
              <>
                {"g'₊(0) = lim "}<Frac n="g(x) − g(0)" d="x − 0" />{' = lim '}<Frac n="x³" d="x" />{' = lim x² = 0,\n'}
                {"g'₋(0) = lim "}<Frac n="g(x) − g(0)" d="x − 0" />{' = lim '}<Frac n="x²" d="x" />{' = lim x = 0.\n\n'}
                {"Da g'₊(0) = g'₋(0) = 0, ist g in 0 differenzierbar mit g'(0) = 0."}
              </>
            ),
          },
          {
            letter: 'c',
            text: <>{'h : ℝ → ℝ,  x ↦ { x³+1 (x ≥ 0),  x² (x < 0)'}</>,
            hint: h(
              <>
                <p>Prüfe zunächst die <span className="hint-em">Stetigkeit</span> in 0. Da lim h(x) für x→0⁺ und x→0⁻ unterschiedliche Werte liefert, ist h nicht stetig in 0 und damit nicht differenzierbar.</p>
              </>,
              <>
                <pre className="hint-code-block">{`lim h(x) = lim (x³+1) = 1  (x → 0⁺)
lim h(x) = lim x²     = 0  (x → 0⁻)

Da 1 ≠ 0: h ist nicht stetig in 0
→ h ist nicht differenzierbar in 0.

Alternativ (linksseitiger Diff.-quotient):
h'₋(0) = lim (x²−1)/x = lim (x − 1/x) = −∞`}</pre>
              </>,
              <p>Differenzierbarkeit impliziert Stetigkeit — ein Sprung schließt Differenzierbarkeit aus.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Differenzenquotienten berechnen ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> Zuerst Stetigkeit prüfen; ein Sprung schließt Differenzierbarkeit sofort aus (Differenzierbarkeit impliziert Stetigkeit)</li>
              </ul>,
              <p>h(0⁺) = 1 ≠ 0 = h(0⁻) — Sprung → nicht stetig → nicht differenzierbar?</p>,
            ),
            solution: (
              <>
                {'Da lim h(x) = 1 (x→0⁺) und lim h(x) = 0 (x→0⁻), ist h nicht stetig in 0.\n\n'}
                {'Da Differenzierbarkeit Stetigkeit impliziert, ist h in 0 nicht differenzierbar.\n\n'}
                {'Alternativ: h\'₋(0) = lim '}<Frac n="x² − 1" d="x" />{' = lim (x − '}<Frac n="1" d="x" />{') = −∞  (x→0⁻) — existiert nicht.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b13a3',
        nr: 3,
        title: 'Ableitung der Wurzelfunktion (Umkehrfunktionsregel)',
        subaufgaben: [
          {
            letter: '',
            text: (
              <>
                {'Die Funktion f : (0,∞) → (0,∞), x ↦ x² ist bijektiv und differenzierbar mit f\'(x) ≠ 0. Ihre Umkehrfunktion f⁻¹ : (0,∞) → (0,∞), x ↦ √x ist ebenfalls differenzierbar. Berechnen Sie die Ableitung von f⁻¹ mit der Umkehrfunktionsregel.'}
              </>
            ),
            hint: h(
              <>
                <p>Die <span className="hint-em">Umkehrfunktionsregel</span>: (f⁻¹)'(x) = <Frac n="1" d="f'(f⁻¹(x))" />. Hier ist f'(x) = 2x und f⁻¹(x) = √x. Einsetzen liefert die gesuchte Ableitung.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f(x) = x²   →   f'(x) = 2x
f⁻¹(x) = √x

(f⁻¹)'(x) = 1 / f'(f⁻¹(x))
           = 1 / f'(√x)
           = 1 / (2·√x)
           = 1 / (2√x)`}</pre>
              </>,
              <p>Allgemein: (f⁻¹)'(x) = 1 / f'(f⁻¹(x)), sofern f'(f⁻¹(x)) ≠ 0.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (√x)' = (x^(1/2))' = (1/2)x^(−1/2) direkt per Potenzregel ableiten → <strong>✅ Richtig:</strong> Zwar korrekt, aber die Aufgabe verlangt explizit die Umkehrfunktionsregel (f⁻¹)'(x) = 1/f'(f⁻¹(x))</li>
              </ul>,
              <p>f'(f⁻¹(x)) = 2·√x eingesetzt, Kehrwert gebildet?</p>,
            ),
            solution: (
              <>
                {"Es ist f'(x) = 2x. Mit der Umkehrfunktionsregel:\n\n"}
                {"(f⁻¹)'(x) = "}<Frac n="1" d="f'(f⁻¹(x))" />{' = '}<Frac n="1" d="2 f⁻¹(x)" />{' = '}<Frac n="1" d="2√x" />{'.'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b13a4',
        nr: 4,
        title: 'Potenzreihe und geometrische Reihe (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: '',
            text: (
              <>
                {'Leiten Sie f : (−1,1) → ℝ, x ↦ Σ'}
                <sub>{'k=0'}</sub>
                <sup>{'∞'}</sup>
                {' xᵏ und g : (−1,1) → ℝ, x ↦ '}
                <Frac n="1" d="1 − x" />
                {' ab. Was ist der Zusammenhang zwischen f\' und g\'? (Hinweis: Geometrische Reihe)'}
              </>
            ),
            hint: h(
              <>
                <p>Leite die Potenzreihe gliedweise ab: f'(x) = Σ k·x^(k−1). Indexshift k→k+1 liefert Σ(k+1)xᵏ. Für g wende die Kettenregel auf (1−x)⁻¹ an. Da f = g auf (−1,1), gilt auch f' = g'.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f'(x) = Σ k·x^(k−1) = Σ (k+1)xᵏ  (Indexshift k→k+1)
        k=1            k=0

g(x) = (1−x)⁻¹
g'(x) = −(1−x)⁻² · (−1) = 1/(1−x)²

Da Σxᵏ = 1/(1−x) für |x| < 1:
f = g  →  f' = g'.`}</pre>
              </>,
              <p>Geometrische Reihe: Σxᵏ = 1/(1−x) für |x| {'<'} 1.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Indexshift nach der Ableitung weglassen → <strong>✅ Richtig:</strong> Nach gliedweiser Ableitung beginnt die Summe bei k=1; Indexshift k → k+1 liefert Σ(k+1)xᵏ ab k=0</li>
                <li><strong>❌ Falsch:</strong> ((1−x)⁻¹)' = −(1−x)⁻² ohne inneren Faktor → <strong>✅ Richtig:</strong> Kettenregel: innerer Faktor (1−x)' = −1; also ((1−x)⁻¹)' = −(1−x)⁻²·(−1) = 1/(1−x)²</li>
              </ul>,
              <p>f'(x) = Σ(k+1)xᵏ und g'(x) = 1/(1−x)² — stimmen wegen f = g überein?</p>,
            ),
            solution: (
              <>
                {"f'(x) = Σ"}
                <sub>{'k=1'}</sub>
                <sup>{'∞'}</sup>
                {' k·x'}
                <sup>{'k−1'}</sup>
                {' = Σ'}
                <sub>{'k=0'}</sub>
                <sup>{'∞'}</sup>
                {' (k+1)xᵏ  (Indexshift).\n\n'}
                {"g'(x) = −(1 − x)⁻² · (−1) = "}
                <Frac n="1" d="(1 − x)²" />
                {'.\n\n'}
                {'Da Σxᵏ = '}<Frac n="1" d="1−x" />{' für x ∈ (−1,1), gilt f = g und damit f\' = g\'.\n\n'}
                {'Das heißt: Σ'}
                <sub>{'k=0'}</sub>
                <sup>{'∞'}</sup>
                {' (k+1)xᵏ konvergiert gegen '}
                <Frac n="1" d="(1−x)²" />
                {' für x ∈ (−1,1).'}
              </>
            ),
          },
        ],
      },
      {
        id: 'b13a5',
        nr: 5,
        title: 'Allgemeine Potenz und Exponentialfunktion (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: <>{'Sei a ∈ ℝ. Bestimmen Sie die Ableitung von f : (0,∞) → ℝ, x ↦ xᵃ.'}</>,
            hint: h(
              <>
                <p>Schreibe f(x) = xᵃ = exp(a · ln(x)) und wende die Kettenregel an. Vereinfache anschließend: exp(a·ln(x)) = xᵃ.</p>
              </>,
              <>
                <pre className="hint-code-block">{`f(x) = xᵃ = exp(a · ln(x))

f'(x) = exp(a · ln(x)) · a/x
      = xᵃ · a/x
      = a · x^(a−1)`}</pre>
              </>,
              <p>Schlüssel: exp(a·ln(x)) = xᵃ zurückschreiben.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Potenzregel (xᵃ)' = a·xᵃ⁻¹ direkt ohne Herleitung hinschreiben → <strong>✅ Richtig:</strong> Über xᵃ = exp(a·ln(x)) und Kettenregel herleiten; das ist der verlangte Weg</li>
              </ul>,
              <p>f'(x) = a · x^(a−1) — hergeleitet über Kettenregel?</p>,
            ),
            solution: (
              <>
                {'f(x) = xᵃ = exp(a · ln(x)).\n\n'}
                {"f'(x) = exp(a · ln(x)) · "}<Frac n="a" d="x" />{' = '}<Frac n="xᵃ · a" d="x" />{' = a · x'}
                <sup>{'a−1'}</sup>
                {'.'}
              </>
            ),
          },
          {
            letter: 'b',
            text: <>{'Sei c ∈ (0,∞). Bestimmen Sie die Ableitung von g : ℝ → ℝ, x ↦ cˣ.'}</>,
            hint: h(
              <>
                <p>Schreibe g(x) = cˣ = exp(x · ln(c)). Da ln(c) eine Konstante ist, ergibt die Kettenregel: g'(x) = exp(x·ln(c)) · ln(c) = ln(c) · cˣ.</p>
              </>,
              <>
                <pre className="hint-code-block">{`g(x) = cˣ = exp(x · ln(c))

g'(x) = exp(x · ln(c)) · ln(c)
      = ln(c) · cˣ`}</pre>
              </>,
              <p>ln(c) ist für c {'>'} 0 eine feste Konstante — Ableitung von x·ln(c) nach x ist ln(c).</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> Potenzregel (cˣ)' = x·cˣ⁻¹ → <strong>✅ Richtig:</strong> Potenzregel gilt nur wenn die Basis die Variable ist (xⁿ)' = n·xⁿ⁻¹; hier ist die Basis c konstant, daher: cˣ = exp(x·ln c) → (cˣ)' = ln(c)·cˣ</li>
              </ul>,
              <p>g'(x) = ln(c) · cˣ — Faktor ln(c) nicht vergessen?</p>,
            ),
            solution: (
              <>
                {'g(x) = cˣ = exp(x · ln(c)).\n\n'}
                {"g'(x) = exp(x · ln(c)) · ln(c) = ln(c) · cˣ."}
              </>
            ),
          },
        ],
      },
      {
        id: 'b13a6',
        nr: 6,
        title: 'Ableitung von tan und arctan (Wenn noch Zeit ist)',
        subaufgaben: [
          {
            letter: 'a',
            text: (
              <>
                {'Zeigen Sie: tan\'(x) = '}<Frac n="1" d="(cos x)²" />{' = 1 + (tan x)² auf (−π/2, π/2).'}
              </>
            ),
            hint: h(
              <>
                <p>Wende die <span className="hint-em">Quotientenregel</span> auf tan(x) = sin(x)/cos(x) an. Nutze sin' = cos, cos' = −sin sowie den trigonometrischen Pythagoras: (cos x)² + (sin x)² = 1.</p>
              </>,
              <>
                <pre className="hint-code-block">{`u = sin(x)  → u' = cos(x)
v = cos(x)  → v' = −sin(x)

tan'(x) = (cos·cos − sin·(−sin)) / cos²
        = (cos² + sin²) / cos²
        = 1/cos²(x)

Zweite Darstellung:
1/cos²(x) = cos²/cos² + sin²/cos²
           = 1 + (sin/cos)²
           = 1 + tan²(x) ✓`}</pre>
              </>,
              <p>(cos x)² + (sin x)² = 1 — trigonometrischer Pythagoras.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> (cos x)' = sin x (falsches Vorzeichen) → <strong>✅ Richtig:</strong> (cos x)' = −sin x; das Minuszeichen ist entscheidend, um (cos²+sin²)/cos² = 1/cos² zu erhalten</li>
              </ul>,
              <p>1/cos² = 1 + tan² über den Pythagoras bestätigt?</p>,
            ),
            solution: (
              <>
                {'Mit der Quotientenregel (sin\' = cos, cos\' = −sin):\n\n'}
                {"tan'(x) = "}<Frac n="cos·cos − sin·(−sin)" d="(cos x)²" />{' = '}<Frac n="(cos x)² + (sin x)²" d="(cos x)²" />{' = '}<Frac n="1" d="(cos x)²" />{'. ✓\n\n'}
                {'Zweite Darstellung:\n\n'}
                <Frac n="1" d="(cos x)²" />{' = 1 + '}<Frac n="(sin x)²" d="(cos x)²" />{' = 1 + (tan x)². ✓'}
              </>
            ),
          },
          {
            letter: 'b',
            text: (
              <>
                {'Zeigen Sie mit der zweiten Darstellung von tan\' und der Ableitungsregel für Umkehrfunktionen: arctan\'(x) = '}<Frac n="1" d="1 + x²" />{' für alle x ∈ ℝ.'}
              </>
            ),
            hint: h(
              <>
                <p>Umkehrfunktionsregel: arctan'(x) = 1/tan'(arctan(x)). Setze tan' = 1 + tan² ein und nutze tan(arctan(x)) = x.</p>
              </>,
              <>
                <pre className="hint-code-block">{`arctan'(x) = 1 / tan'(arctan(x))
           = 1 / (1 + tan²(arctan(x)))
           = 1 / (1 + x²)   [tan(arctan(x)) = x]`}</pre>
              </>,
              <p>Schlüsselidentität: tan(arctan(x)) = x für alle x ∈ ℝ.</p>,
              <ul>
                <li><strong>❌ Falsch:</strong> 1 + tan²(arctan(x)) stehen lassen ohne zu vereinfachen → <strong>✅ Richtig:</strong> Schlüsselidentität tan(arctan(x)) = x einsetzen; ergibt sofort 1 + x²</li>
              </ul>,
              <p>1 + tan²(arctan(x)) = 1 + x² korrekt vereinfacht?</p>,
            ),
            solution: (
              <>
                {'Mit der Umkehrfunktionsregel und tan\' = 1 + tan²:\n\n'}
                {"arctan'(x) = "}<Frac n="1" d="tan'(arctan(x))" />{' = '}<Frac n="1" d="1 + tan²(arctan(x))" />{' = '}<Frac n="1" d="1 + x²" />{'. ✓'}
              </>
            ),
          },
        ],
      },
    ],
  },
]
