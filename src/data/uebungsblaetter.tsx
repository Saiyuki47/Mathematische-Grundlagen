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
                <li>Nenner einfach addieren: 3/7 + 7/3 ≠ 10/10 (falsch!)</li>
                <li>Zähler und Nenner getrennt addieren: (3+7)/(7+3) = 1 (falsch!)</li>
                <li>Am Ende vergessen zu prüfen, ob der Bruch kürzbar ist</li>
              </ul>,
              <p>Ist das Ergebnis ein einziger Bruch mit einem gemeinsamen Nenner? Ergibt ggT(Zähler, Nenner) = 1 (vollständig gekürzt)?</p>,
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
                <li>Alle vier Brüche auf einmal auf gemeinsamen Nenner bringen (unnötig komplex)</li>
                <li>Querkürzung übersehen: 5·9/(9·8) kürzt sofort auf 5/8</li>
                <li>Klammerinhalt ausmultiplizieren statt erst zu vereinfachen</li>
              </ul>,
              <p>Sind beide Klammern je ein einziger Bruch, bevor multipliziert wird?</p>,
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
                <pre className="hint-code-block">{`1) Innere Division zuerst:
   13/2 ÷ 169/12 = 13/2 · 12/169
   Kürzen: 169 = 13·13, also 13/169 = 1/13
           12/2 = 6
   = 6/13

2) Äußere Division:
   6/13 ÷ 3/26 = 6/13 · 26/3
   Kürzen: 26/13 = 2,  6/3 = 2
   = 2·2 = 4`}</pre>
              </>,
              <>
                <p>Beispiel: (6 ÷ 2/3) ÷ 1/4</p>
                <pre className="hint-code-block">{`6 ÷ 2/3 = 6 · 3/2 = 9
9 ÷ 1/4 = 9 · 4 = 36`}</pre>
              </>,
              <ul>
                <li>Kehrwert des falschen Bruchs nehmen (z. B. von 13/2 statt von 169/12)</li>
                <li>Beide Divisionen auf einmal umschreiben — erst die innere lösen!</li>
                <li>Den Hinweis 169 = 13·13 nicht nutzen → Kürzen mit 13 übersehen</li>
              </ul>,
              <p>Der Hinweis „13 · 13 = 169" deutet auf eine wichtige Kürzung hin. Das Endergebnis ist eine ganze Zahl.</p>,
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
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`2⁻³ · 24 = (1/8) · 24 = 3
10⁻² · 500 = (1/100) · 500 = 5
3⁻² · 18 = (1/9) · 18 = 2`}</pre>
              </>,
              <ul>
                <li>5⁻² = −25 (falsch! negativer Exponent ≠ negative Zahl)</li>
                <li>5⁻² = 1/(−5²) = 1/(−25) (falsch! die Basis bleibt 5, nicht −5)</li>
              </ul>,
              <p>a⁻ⁿ ist immer positiv für a &gt; 0. Das Ergebnis muss also positiv sein.</p>,
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
                <li>(−2)·(−4) = −8 (falsch! Minus·Minus = Plus → +8)</li>
                <li>Den Faktor (−1) auf den gesamten Term x(1+x) anwenden, nicht nur auf (1+x)</li>
                <li>x und x² als gleichartige Terme behandeln (sind verschieden!)</li>
              </ul>,
              <p>Sind alle x²-, x- und konstanten Terme getrennt zusammengefasst? Kein Term übrig?</p>,
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
                <li>(11a²b)² = 11a⁴b² — die 11 nicht quadriert! Muss 121 sein.</li>
                <li>a⁴ · a⁻³ = a⁻¹² (falsch! Exponenten addieren, nicht multiplizieren: a¹)</li>
                <li>Doppeltes Minus übersehen: −(−242ab³) = +242ab³</li>
              </ul>,
              <p>Nach dem Auswerten haben beide Terme die Form C·a·b³ und können addiert werden. Stimmt das?</p>,
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
                <li>−(a+b) = −a + b (falsch! Minus vor Klammer → beide Vorzeichen tauschen: −a − b)</li>
                <li>−(a−b) = −a − b (falsch! −(a−b) = −a + b)</li>
                <li>Nenner mit zusammenfassen statt nur Zähler</li>
              </ul>,
              <p>Probe: Konkrete Werte einsetzen, z. B. a=3, b=1, c=2. Ergibt die vereinfachte Form dasselbe wie der ursprüngliche Ausdruck?</p>,
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
                <p>Einen Faktor f aus einem Ausdruck ausklammern bedeutet: Ausdruck = f · (Ausdruck / f).</p>
                <p>Bei f = −1: Jedes Vorzeichen im Klammerinhalt kehrt sich um, der <span className="hint-em">Wert des Ausdrucks bleibt gleich</span>.</p>
              </>,
              <>
                <pre className="hint-code-block">{`Ziel: −1 · (...) = b(a−b) + b − a
Also: (...) = −[b(a−b) + b − a]
           = −b(a−b) − b + a
           = b(b−a) − b + a

Ergebnis: −1 · (b(b−a) − b + a)`}</pre>
              </>,
              <>
                <p>Beispiel: −1 aus 3x − 2 ausklammern</p>
                <pre className="hint-code-block">{`3x − 2 = −1 · (−3x + 2)
Probe: −1 · (−3x + 2) = 3x − 2 ✓`}</pre>
              </>,
              <ul>
                <li>Nur beim ersten Term das Vorzeichen wechseln</li>
                <li>Vergessen, dass b(a−b) · (−1) = −b(a−b) = b(b−a)</li>
              </ul>,
              <p>Probe: −1 · Klammerinhalt ausmultiplizieren → muss genau b(a−b) + b − a ergeben.</p>,
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
                <li>b−a = a−b ohne Vorzeichen — falsch! b−a = −(a−b)</li>
                <li>Restfaktor falsch bestimmen: nach dem Ausklammern von (a−b) bleibt (b−1), nicht (b+1)</li>
              </ul>,
              <p>Probe: (a−b)·(b−1) ausmultiplizieren und mit b(a−b)+b−a vergleichen.</p>,
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
                <li>a−b ≠ b−a (ohne Vorzeichen) — Umformung ergibt a−b = −(b−a)</li>
                <li>Restfaktor falsch: nach Ausklammern von (b−a) bleibt (1−b) = (−b+1)</li>
              </ul>,
              <p>Probe: (b−a)·(1−b) ausmultiplizieren — muss b(a−b)+b−a ergeben.</p>,
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
              <p>Ein Bruch, dessen Zähler gleich dem Nenner ist, hat den Wert <span className="hint-em">1</span> — vorausgesetzt der Nenner ist ≠ 0 (hier: a ≠ b).</p>,
              <pre className="hint-code-block">{`Zähler = a−b, Nenner = a−b → identisch
(a−b)/(a−b) = 1`}</pre>,
              <>
                <p>Allgemein: f(x)/f(x) = 1, solange f(x) ≠ 0</p>
                <pre className="hint-code-block">{`(x² + 3x) / (x² + 3x) = 1  (für x ≠ 0 und x ≠ −3)`}</pre>
              </>,
              <ul>
                <li>„a/a − b/b = 1 − 1 = 0" — falsch! a−b ist der gemeinsame Faktor als Ganzes, nicht termweise</li>
              </ul>,
              <p>Probe: a=3, b=1 → (3−1)/(3−1) = 2/2 = 1 ✓</p>,
            ),
            solution: <><Frac n="a−b" d="a−b" />{' = 1'}</>,
          },
          {
            letter: 'b',
            text: <Frac n="a − b" d="b − a" />,
            hint: h(
              <p>Der Nenner b−a lässt sich zu <span className="hint-em">−(a−b)</span> umschreiben. Dann kürzt sich (a−b), und es bleibt nur das Vorzeichen.</p>,
              <pre className="hint-code-block">{`b − a = −1 · (a − b)

(a−b) / (b−a)
= (a−b) / (−1 · (a−b))
= 1 / (−1) = −1`}</pre>,
              <>
                <p>Beispiel: (x−5)/(5−x)</p>
                <pre className="hint-code-block">{`5−x = −(x−5)
(x−5) / (−(x−5)) = −1`}</pre>
              </>,
              <ul>
                <li>Ergebnis 1 statt −1 (Vorzeichen übersehen)</li>
                <li>„b−a ist dasselbe wie a−b" — es ist das Negative davon</li>
              </ul>,
              <p>Probe: a=3, b=1 → (3−1)/(1−3) = 2/(−2) = −1 ✓</p>,
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
                <li>„a²/(a) + b²/(b) = a + b" — Summanden einzeln kürzen ist grundsätzlich verboten!</li>
                <li>a²+b² mit a²−b² verwechseln</li>
              </ul>,
              <p>Probe: a=1, b=2 → (1+4)/(1+2) = 5/3. Ist das weiter kürzbar? Nein — 5 und 3 sind teilerfremd.</p>,
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
                <li>a²+b² mit a²−b² verwechseln (Pluszeichen beachten!)</li>
                <li>(a+b)² = a²+2ab+b² ist eine andere Formel</li>
              </ul>,
              <p>Probe: a=3, b=1 → (9−1)/(3−1) = 8/2 = 4 = 3+1 ✓</p>,
            ),
            solution: <><Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)(a−b)" d="a−b" />{' = a+b'}</>,
          },
          {
            letter: 'e',
            text: <Frac n="2a + 3b" d="2c + 3d" />,
            hint: h(
              <>
                <p>Kürzen ist nur möglich, wenn <span className="hint-em">ein Faktor vor dem gesamten Zähler und Nenner</span> steht. Hier haben Zähler und Nenner keine gemeinsamen Gesamtfaktoren.</p>
              </>,
              <pre className="hint-code-block">{`Suche gemeinsamen Faktor k:
  Zähler = 2a + 3b → kein k vor allem
  Nenner = 2c + 3d → kein k vor allem
→ Nicht kürzbar`}</pre>,
              <>
                <p>Gegenbeispiel das kürzt: (2a+4b)/(2c+6d)</p>
                <pre className="hint-code-block">{`= 2(a+2b) / 2(c+3d)    ← 2 steht VOR dem ganzen Ausdruck
= (a+2b) / (c+3d)       ← jetzt kürzen möglich`}</pre>
              </>,
              <ul>
                <li>„Die 2 kürzen": 2a/(2c) und 3b/(3d) getrennt kürzen — das ist nicht erlaubt bei Summen!</li>
                <li>Man darf nur kürzen wenn der Faktor vor der gesamten Summe steht</li>
              </ul>,
              <p>Gibt es eine Zahl k, sodass Zähler = k · f(a,b) und Nenner = k · g(c,d)? Wenn nein → nicht kürzbar.</p>,
            ),
            solution: 'Nicht weiter kürzbar – keine gemeinsamen Faktoren.',
          },
          {
            letter: 'f',
            text: <Frac n="k² + k³" d="k²" />,
            hint: h(
              <p>Zähler faktorisieren: den <span className="hint-em">größten gemeinsamen Faktor</span> ausklammern, dann mit dem Nenner kürzen.</p>,
              <pre className="hint-code-block">{`1) Zähler faktorisieren: k² + k³ = k²·(1 + k)
2) Einsetzen: k²(1+k) / k²
3) k² kürzen: = 1 + k`}</pre>,
              <>
                <p>Beispiel: (x³ + x⁵) / x³</p>
                <pre className="hint-code-block">{`= x³(1 + x²) / x³ = 1 + x²`}</pre>
              </>,
              <ul>
                <li>k³/k² = k² (falsch! k³/k² = k¹ = k, Exponenten subtrahieren)</li>
                <li>k²/k² = 0 (falsch! k²/k² = 1, nicht 0)</li>
              </ul>,
              <p>Probe: k=2 → (4+8)/4 = 12/4 = 3 = 1+2 ✓</p>,
            ),
            solution: <><Frac n="k²+k³" d="k²" />{' = '}<Frac n="k²(1+k)" d="k²" />{' = 1+k'}</>,
          },
          {
            letter: 'g',
            text: <Frac n="2k²" d="4k² + 6k³" />,
            hint: h(
              <p>Nenner faktorisieren, dann gemeinsamen Faktor mit dem Zähler kürzen.</p>,
              <pre className="hint-code-block">{`1) Nenner faktorisieren:
   4k² + 6k³ = 2k²(2 + 3k)
2) Einsetzen: 2k² / [2k²(2 + 3k)]
3) 2k² kürzen: = 1/(2 + 3k)`}</pre>,
              <>
                <p>Beispiel: 3x / (6x + 9x²)</p>
                <pre className="hint-code-block">{`= 3x / [3x(2 + 3x)]
= 1 / (2 + 3x)`}</pre>
              </>,
              <ul>
                <li>Nur die Zahl kürzen (2/4) aber k² übersehen</li>
                <li>Nur k² kürzen aber den Faktor 2 übersehen</li>
              </ul>,
              <p>Probe: k=1 → 2/(4+6) = 2/10 = 1/5 = 1/(2+3·1) ✓</p>,
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
                <p>Vergleich: 1+k² vs. Faktoren von 1+k³ = (1+k)(1−k+k²)</p>
                <pre className="hint-code-block">{`(1+k) ≠ (1+k²)
(1−k+k²) ≠ (1+k²)
→ kein Kürzen möglich`}</pre>
              </>,
              <ul>
                <li>k² aus dem Zähler mit k³ aus dem Nenner kürzen — geht nicht, es handelt sich um Summen, nicht Produkte!</li>
              </ul>,
              <p>Probe: k=2 → (1+4)/(1+8) = 5/9. Ist 5/9 noch kürzbar? ggT(5,9)=1 → nein.</p>,
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
                <li>√2 + √32 ≠ √34 (die Additionsregel gilt nicht für Wurzeln!)</li>
                <li>√(2 + 32) = √34 statt √(2 · 32) = √64 ausrechnen</li>
              </ul>,
              <p>Probe: Ist 8² = 64 = 2 · 32? ✓</p>,
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
                <li>Aus einem Beispiel das zufällig stimmt (z. B. a=0) schließen, dass die Aussage immer gilt</li>
                <li>Man braucht nur ein Gegenbeispiel — mehrere zu suchen ist nicht nötig</li>
              </ul>,
              <p>Reicht ein Gegenbeispiel zum Widerlegen? Ja — ein einziges genügt.</p>,
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
                <li>Bei √3+√5 das falsche Konjugat (√3+√5) wählen → Nenner wird a+2√(ab)+b, keine rationale Zahl</li>
                <li>(√3+√5)·(√3+√5) = 3+2√15+5 ≠ 3−5 (das wäre das Konjugat)</li>
              </ul>,
              <p>Im Nenner des Ergebnisses steht keine Wurzel mehr — nur noch eine rationale Zahl.</p>,
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
                <li>m und b vertauschen (b wäre der Achsenabschnitt, m die Steigung)</li>
                <li>Steigung als Differenz statt Bruch missinterpretieren</li>
              </ul>,
              <p>Probe: Liegt (1,1) auf y=x? Einsetzen: 1 = 1·1+0 ✓. Liegt (−2,−2) drauf? −2 = −2 ✓</p>,
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
                <li>Bei negativer Steigung in die falsche Richtung zeichnen (nach oben statt unten)</li>
                <li>b=1 vergessen und durch den Ursprung zeichnen</li>
              </ul>,
              <p>Probe: Nullstelle berechnen: 0 = −2x+1 → x = 1/2. Schneidet die Skizze die x-Achse bei x = 0,5?</p>,
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
                <li>m=1/2 als „0,5 rechts, 0,5 hoch" interpretieren → falsche Punkte</li>
                <li>y-Achsenabschnitt mit −2 falsch ablesen (y-Wert bei x=0 ist −2, nicht +2)</li>
              </ul>,
              <p>Probe: Nullstelle: 0 = x/2 − 2 → x = 4. Schneidet die Skizze die x-Achse bei x = 4?</p>,
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
              <p>Eine <span className="hint-em">konstante Funktion</span> y = c hat Steigung m = 0. Die Gerade verläuft waagerecht, parallel zur x-Achse, bei der Höhe y = c.</p>,
              <pre className="hint-code-block">{`1) y = 4 für jedes x → zwei beliebige Punkte: (0,4) und (3,4)
2) Waagerechte Linie bei Höhe y = 4 einzeichnen`}</pre>,
              <>
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`y = −2  → waagerechte Linie bei y = −2
y = 0   → die x-Achse selbst`}</pre>
              </>,
              <ul>
                <li>Vertikale Linie zeichnen — das wäre x = 4, nicht y = 4!</li>
                <li>Nur einen Punkt markieren statt eine Gerade</li>
              </ul>,
              <p>Ist die Gerade exakt horizontal (parallel zur x-Achse)? Für jedes x muss y = 4 gelten.</p>,
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
              <p>Am <span className="hint-em">Schnittpunkt</span> haben beide Geraden denselben x- und y-Wert. Daher setzt man die rechten Seiten der beiden Geradengleichungen gleich und löst nach x auf.</p>,
              <pre className="hint-code-block">{`1) Gleichsetzen: −2x + 1 = (1/2)x − 2
2) ×2: −4x + 2 = x − 4
3) +4x: 2 = 5x − 4
4) +4: 6 = 5x  →  x = 6/5
5) y einsetzen (in eine der Geraden):
   y = −2·(6/5) + 1 = −12/5 + 5/5 = −7/5
6) Schnittpunkt: (6/5, −7/5)`}</pre>,
              <>
                <p>Beispiel: y = x und y = −x + 2</p>
                <pre className="hint-code-block">{`x = −x + 2
2x = 2  →  x = 1
y = 1·1 = 1
Schnittpunkt: (1, 1)`}</pre>
              </>,
              <ul>
                <li>Falsches x in die Geradengleichung einsetzen</li>
                <li>Bruch-Arithmetik beim Lösen der Gleichung (×2 auf beiden Seiten hilft)</li>
                <li>Nur in eine Gerade einsetzen und nicht beide prüfen</li>
              </ul>,
              <p>Probe: (6/5, −7/5) in BEIDE Gleichungen einsetzen — beide müssen −7/5 ergeben.</p>,
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
                <li>Steigung falsch herum: m = (x₂−x₁)/(y₂−y₁) statt (y₂−y₁)/(x₂−x₁)</li>
                <li>b nicht aus dem y-Achsenabschnitt (0,2) ablesen</li>
              </ul>,
              <p>Probe: Beide Punkte einsetzen: y(0) = −0+2 = 2 ✓; y(8) = −8/4+2 = −2+2 = 0 ✓</p>,
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
                <li>b nicht auf 0 setzen obwohl die Gerade durch den Ursprung geht</li>
                <li>Steigung als m = x/y berechnen (Bruch falsch herum)</li>
              </ul>,
              <p>Probe: (0,0): y(0) = 0 ✓; (2,−1): y(2) = −(1/2)·2 = −1 ✓</p>,
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
                <pre className="hint-code-block">{`Elemente von M: 1, 2, 3  (das sind Zahlen, keine Mengen)

(i)  1 ∈ M:   Ist die Zahl 1 in M? Ja → korrekt
(ii) {1} ∈ M: Ist die Menge {1} in M? M enthält nur
              Zahlen, keine Mengen → falsch
(iii){1} ⊆ M: Hat {1} nur Elemente aus M? Das einzige
              Element von {1} ist 1, und 1 ∈ M → korrekt`}</pre>
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
                <li>1 und {'{1}'} verwechseln — die geschweiften Klammern machen einen Unterschied!</li>
                <li>∈ und ⊆ verwechseln: ∈ prüft Elemente, ⊆ prüft Teilmengen</li>
                <li>Denken dass {'{1}'} ∈ M gilt, weil 1 ∈ M — das sind verschiedene Objekte</li>
              </ul>,
              <p>Bei ⊆: Prüfe jedes Element der linken Seite einzeln. {'{1}'} ⊆ M bedeutet: Ist 1 ∈ M?</p>,
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
                <pre className="hint-code-block">{`Elemente von L: ∅, {1}, {2}, {1,2}

(i)  2 ∈ L:    Ist die Zahl 2 ein Element von L?
               Elemente sind ∅,{1},{2},{1,2} → kein davon ist die Zahl 2
               → falsch

(ii) {2} ∈ L:  Ist {2} ein Element von L? Ja, direkt! → korrekt

(iii){2} ⊆ L:  Hat {2} nur Elemente aus L? {2} hat Element 2.
               Ist 2 ∈ L? → falsch (aus (i))
               → falsch

(iv) {{2}} ⊆ L: Hat {{2}} nur Elemente aus L?
               {{2}} hat Element {2}. Ist {2} ∈ L? → korrekt (aus (ii))
               → korrekt`}</pre>
              </>,
              <>
                <p>Beispiel: M = {'{{a},{b},{a,b}}'}</p>
                <pre className="hint-code-block">{`{a} ∈ M   → korrekt  ({a} ist direktes Element)
a ∈ M     → falsch   (a selbst ist kein Element)
{a} ⊆ M   → falsch   (wäre wahr wenn a ∈ M, aber a ∉ M)
{{a}} ⊆ M → korrekt  ({a} ∈ M → {{a}} ist Teilmenge)`}</pre>
              </>,
              <ul>
                <li>2 und {'{2}'} verwechseln</li>
                <li>Bei (iii): {'{2}'} ⊆ L prüft ob 2 ∈ L (nicht ob {'{2}'} ∈ L!)</li>
                <li>Schachtelungstiefe falsch zählen: {'{{2}}'} ⊆ L prüft ob {'{2}'} ∈ L</li>
              </ul>,
              <p>Eselsbrücke: Bei A ⊆ B → prüfe ob die Elemente von A auch in B sind. Was sind die Elemente von {'{{2}}'}? Nur {'{2}'}. Ist {'{2}'} ∈ L?</p>,
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
                <pre className="hint-code-block">{`(i)  Z\X: In Z={1,5}, aber nicht in X={1,3,5,7}
          → kein Element von Z fehlt in X → ∅

(ii) X\Z: In X={1,3,5,7}, aber nicht in Z={1,5}
          → 1∈Z ✗, 3∉Z ✓, 5∈Z ✗, 7∉Z ✓ → {3,7}

(iii)X∩Y∩Z: In allen drei Mengen gleichzeitig
          → nur 5 ist in X, Y und Z → {5}

(iv) X∪Y∪Z: Alle Elemente zusammen (ohne Dopplung)
          → {1,3,5,7,8}

(v)  X×Z: Alle Paare (x,z) mit x∈X, z∈Z
          → (1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)`}</pre>
              </>,
              <>
                <p>Beispiel: A = {'{1,2}'}, B = {'{2,3}'}</p>
                <pre className="hint-code-block">{`A\B = {1},  B\A = {3},  A∩B = {2},  A∪B = {1,2,3}
A×B = {(1,2),(1,3),(2,2),(2,3)}`}</pre>
              </>,
              <ul>
                <li>A \ B ≠ B \ A (Differenz ist nicht kommutativ!)</li>
                <li>Beim kartesischen Produkt: Reihenfolge beachten — (x,z) nicht (z,x)</li>
                <li>Elemente beim ∪ doppelt aufführen (jedes Element nur einmal)</li>
              </ul>,
              <p>Kontrolle für ×: |X × Z| = |X| · |Z| = 4 · 2 = 8 Paare. Hast du genau 8?</p>,
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
                <pre className="hint-code-block">{`Schritt 1 – Komplemente berechnen:
  L̄ = G\L = {3,5,6,8,9}
  M̄ = G\M = {1,2,4,7}
  N̄ = G\N = {1,2,3,6,7,8}

Schritt 2 – Ausdrücke auswerten:
(i)  L̄∩N = {3,5,6,8,9}∩{4,5,9} = {5,9}

(ii) N∩N̄ = ∅  (Menge∩Komplement = leer!)
     L∩M̄ = {1,2,4,7}∩{1,2,4,7} = L = {1,2,4,7}
     L ∪ ∅ = {1,2,4,7}

(iii) L∩N̄ = {1,2,4,7}∩{1,2,3,6,7,8} = {1,2,7}
      {1,2,7}∩M̄ = {1,2,7}∩{1,2,4,7} = {1,2,7}`}</pre>
              </>,
              <>
                <p>Beispiel: G = {'{1,2,3,4,5}'}, A = {'{1,2,3}'}</p>
                <pre className="hint-code-block">{`Ā = {4,5}
A ∩ Ā = ∅ ✓
A ∪ Ā = {1,2,3,4,5} = G ✓`}</pre>
              </>,
              <ul>
                <li>Komplement nicht zur Grundmenge G relativieren (nicht „alle natürlichen Zahlen außer...")</li>
                <li>N ∩ N̄ ≠ N — es ist leer! Ein Objekt kann nicht gleichzeitig in N und nicht in N sein</li>
              </ul>,
              <p>Probe: L̄ ∪ L = G? {'{3,5,6,8,9}'} ∪ {'{1,2,4,7}'} = {'{1,...,9}'} = G ✓</p>,
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
                <pre className="hint-code-block">{`(i)  M₄ = [−1,2) enthält alle reellen Zahlen −1 ≤ x < 2
     M₃ = {−1,1,2} → das fehlende Element ist 2
     M₄ ∪ M₃ = [−1,2) ∪ {2} = [−1,2]  (Randpunkt 2 hinzu)

(ii) M₂\M₃ = ℕ\{−1,1,2} = {0,3,4,5,...}  (−1 ist nicht in ℕ!)
     M₄∩{0,3,4,...} = {0}  (nur 0 liegt in [−1,2))

(iii) M₁\M₂ = ℤ\ℕ = {...,−3,−2,−1}
      M₃\{...,−1} = {−1,1,2}\{...,−1} = {1,2}`}</pre>
              </>,
              <>
                <p>Intervall-Beispiele:</p>
                <pre className="hint-code-block">{`[0,3) ∪ {3}    = [0,3]
[−1,2) ∩ {0,1,2,3} = {0,1}   (2 ∉ [−1,2)!)`}</pre>
              </>,
              <ul>
                <li>[−1, 2) enthält die 2 nicht — runde Klammer = Randpunkt ausgeschlossen</li>
                <li>−1 ist nicht in ℕ (ℕ enthält nur 0, 1, 2, ...) → M₂ \ M₃ behält −1 nicht</li>
                <li>Randpunkte bei Intervallen immer gesondert prüfen</li>
              </ul>,
              <p>Probe für (i): Ist −1 in [−1,2]? Ja ✓. Ist 2 in [−1,2]? Ja ✓ (dank M₃). Ist 1,5 drin? Ja ✓.</p>,
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
                <pre className="hint-code-block">{`Systematisch nach Größe aufzählen:
  0-elementig: ∅
  1-elementig: {1}, {2}, {3}
  2-elementig: {1,2}, {1,3}, {2,3}
  3-elementig: {1,2,3}
  → 1 + 3 + 3 + 1 = 8 Teilmengen ✓`}</pre>
              </>,
              <>
                <p>Beispiel: P({'{a,b}'})</p>
                <pre className="hint-code-block">{`P({a,b}) = { ∅, {a}, {b}, {a,b} }
|P({a,b})| = 2² = 4 ✓`}</pre>
              </>,
              <ul>
                <li>∅ (leere Menge) vergessen — sie ist immer eine Teilmenge!</li>
                <li>A selbst vergessen — A ist auch eine Teilmenge von sich</li>
                <li>Elemente doppelt aufführen</li>
              </ul>,
              <p>Zähle deine Antwort: Hast du genau 8 Teilmengen? (= 2³)</p>,
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
                <pre className="hint-code-block">{`(i)  Vielfache von 7: {7n : n ∈ ℕ}
     n=0→0, n=1→7, n=2→14 → {0,7,14,21,...}

(ii) Rest 3 bei Division durch 5: {5n+3 : n ∈ ℕ}
     n=0→3, n=1→8, n=2→13 → {3,8,13,18,...}

(iii)kgV(2,3) = 6: {6n : n ∈ ℕ}
     n=0→0, n=1→6, n=2→12 → {0,6,12,18,...}`}</pre>
              </>,
              <>
                <p>Weitere Beispiele:</p>
                <pre className="hint-code-block">{`Ungerade Zahlen (Rest 1 bei Div. durch 2):
  {2n+1 : n ∈ ℕ} = {1,3,5,7,...}

Vielfache von 4: {4n : n ∈ ℕ} = {0,4,8,12,...}`}</pre>
              </>,
              <ul>
                <li>n bei 1 statt 0 starten lassen (dann fehlt das erste Element)</li>
                <li>Bei (iii): ggT statt kgV verwenden (ggT(2,3)=1, das wäre zu wenig)</li>
              </ul>,
              <p>Probe: Die ersten paar Werte durch Einsetzen von n=0,1,2,3 berechnen und mit der Beschreibung vergleichen.</p>,
            ),
            solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
          },
          {
            letter: 'b',
            text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
            hint: h(
              <p>n = 0, 1, 2, 3, ... nacheinander <span className="hint-em">einsetzen</span> und auswerten. Für (iv) zuerst vereinfachen: 2²ⁿ = (2²)ⁿ = 4ⁿ.</p>,
              <>
                <pre className="hint-code-block">{`Wertetabelle:
n  | (i) 3n−2 | (ii) 3n+2 | (iii) 2ⁿ | (iv) 4ⁿ
0  |   −2     |    2      |   1      |   1
1  |    1     |    5      |   2      |   4
2  |    4     |    8      |   4      |  16
3  |    7     |   11      |   8      |  64
4  |   10     |   14      |  16      | 256`}</pre>
              </>,
              <>
                <p>Vereinfachung für (iv):</p>
                <pre className="hint-code-block">{`2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ
n=0: 4⁰=1,  n=1: 4¹=4,  n=2: 4²=16`}</pre>
              </>,
              <ul>
                <li>n=0 vergessen (ergibt das erste Element der Menge)</li>
                <li>Bei 2²ⁿ: als 2^(2n) nicht als (2^2)·n = 4n (Exponent, kein Faktor!)</li>
              </ul>,
              <p>Für (iv): Stimmt die Menge mit Potenzen von 4 überein? {'{1, 4, 16, 64, ...}'}</p>,
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
                <li>Operatoren von rechts nach links statt innen nach außen auswerten</li>
                <li>Klammern ignorieren und links-nach-rechts ohne Priorität lesen</li>
              </ul>,
              <p>Stimmen die Schattierungen der beiden Paare exakt überein? → Distributivgesetze!</p>,
            ),
            solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
          },
          {
            letter: 'b',
            text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
            hint: h(
              <>
                <p>Klammerung ist bei Mengenoperationen wichtig — <span className="hint-em">die Ausdrücke sind im Allgemeinen verschieden</span>. Der entscheidende Unterschied liegt im A-exklusiven Bereich (A ohne B und C).</p>
              </>,
              <>
                <pre className="hint-code-block">{`A ∪ (B∩C):
  1) B∩C schattieren (Überlappung B und C)
  2) A dazunehmen (alles in A)
  → A-Bereich ist KOMPLETT enthalten

(A∪B) ∩ C:
  1) A∪B schattieren (alles in A oder B)
  2) Schnitt mit C: nur was auch in C liegt
  → A-Bereich ohne C-Überlappung fällt RAUS`}</pre>
              </>,
              <>
                <p>Konkretes Gegenbeispiel:</p>
                <pre className="hint-code-block">{`A={1,2}, B={2,3}, C={3}:
A ∪ (B∩C) = {1,2} ∪ {3} = {1,2,3}
(A∪B) ∩ C = {1,2,3} ∩ {3} = {3}
{1,2,3} ≠ {3} → nicht gleich!`}</pre>
              </>,
              <ul>
                <li>Denken dass ∪ und ∩ beliebig kombinierbar sind ohne Klammern</li>
                <li>Vergessen, den A-exklusiven Bereich zu prüfen (entscheidender Unterschied)</li>
              </ul>,
              <p>Enthält das Ergebnis des ersten Ausdrucks Elemente aus A, die nicht in C liegen? Ja. Und das zweite?</p>,
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
                <pre className="hint-code-block">{`Im Diagramm:
1) A und B als überlappende Kreise in X zeichnen
2) Ā = alles AUSSERHALB A (grau hinterlegen)
   B̄ = alles AUSSERHALB B

Vier Ausdrücke:
  Ā∪B:  alles außerhalb A, plus alles in B
  Ā∪B̄: alles was außerhalb A ODER B liegt
        = Komplement von (A∩B)
  Ā∩B:  Bereich der in B ist, aber nicht in A
  Ā∩B̄: alles was außerhalb A UND außerhalb B
        = Komplement von (A∪B)`}</pre>
              </>,
              <>
                <p>Probe: X={'{1..5}'}, A={'{1,2,3}'}, B={'{3,4}'}</p>
                <pre className="hint-code-block">{`Ā={4,5},  B̄={1,2,5}
Ā∪B  = {3,4,5}    Ā∪B̄ = {1,2,4,5}
Ā∩B  = {4}        Ā∩B̄ = {5}`}</pre>
              </>,
              <ul>
                <li>Komplemente nicht zur Grundmenge X relativieren</li>
                <li>Ā ∪ B̄ ≠ Ā ∪ B verwechseln (B̄ ist das Komplement von B, nicht B selbst)</li>
              </ul>,
              <p>Vergleiche die vier Diagramme: Welche Paare sehen identisch aus? Können die De Morganschen Gesetze als Querprüfung dienen?</p>,
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
                <pre className="hint-code-block">{`(i)  Test A=B=C={1,2,3}:
     A\(B\C) = A\∅ = A = {1,2,3}
     (A\B)\C = ∅\C = ∅
     {1,2,3} ≠ ∅ → NICHT immer gültig

(ii) A\B = {x: x∈A und x∉B}
          = {x: x∈A und x∈B̄}
          = A∩B̄ → immer gültig ✓

(iii)A\(B∩C): x∈A und x∉(B∩C)
             ↔ x∈A und (x∉B oder x∉C)
             ↔ (x∈A\B) oder (x∈A\C)
             ↔ x∈(A\B)∪(A\C) → immer gültig ✓

(iv) Distributivgesetz:
     A∪(Ā∩B) = (A∪Ā)∩(A∪B) = X∩(A∪B) = A∪B ✓`}</pre>
              </>,
              <>
                <p>Elementmethode für (ii) ausführlich:</p>
                <pre className="hint-code-block">{`x ∈ A\B
⟺ (x ∈ A) und (x ∉ B)
⟺ (x ∈ A) und (x ∈ B̄)  [Def. Komplement]
⟺ x ∈ A ∩ B̄  ✓`}</pre>
              </>,
              <ul>
                <li>Nur wenige Beispiele prüfen und daraus schließen, dass die Aussage immer gilt</li>
                <li>Ein Gegenbeispiel widerlegt, aber kein Beispiel kann allgemeine Gültigkeit beweisen</li>
                <li>Bei der Elementmethode: Die Äquivalenz (⟺) muss in beide Richtungen gelten</li>
              </ul>,
              <p>Für jede als gültig eingestufte Gleichheit: Gilt die Elementkette x ∈ LHS ⟺ x ∈ RHS in beide Richtungen?</p>,
            ),
            solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B̅  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A̅ ∩ B) = (A ∪ A̅) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
          },
        ],
      },
    ],
  },
]
