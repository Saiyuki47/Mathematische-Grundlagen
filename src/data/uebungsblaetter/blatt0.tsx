import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt0: MatheBlatt = {
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
}
