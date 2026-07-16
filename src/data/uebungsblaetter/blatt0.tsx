import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt0: MatheBlatt = {
  id: 'blatt0',
  nr: '0',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung0 - Rechenregeln Grundlagen/00_aufg_rechenregeln.pdf',
  titel: 'Rechenregeln, Notationen, Geraden',
  aufgaben: [
    {
      id: 'a1',
      nr: 1,
      title: 'Vereinfachen',
      referenz: ['bruchrechnen', 'rechenreihenfolge'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Vereinfachen Sie so weit wie möglich.\n\n'}<Frac n="3" d="7" />{' + '}<Frac n="7" d="3" /></>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Bruch</span> a/b besteht aus dem <span className="hint-em">Zähler</span> a (oben) und dem <span className="hint-em">Nenner</span> b (unten). Der Nenner sagt, in wie viele gleiche Teile ein Ganzes zerlegt ist; der Zähler, wie viele dieser Teile gemeint sind. 3/7 heißt also „3 von 7 gleich großen Stücken".</p>
              <p>Man kann zwei Brüche nur dann addieren, wenn sie <span className="hint-em">denselben Nenner</span> haben (gleich große Stücke). Dann addiert man einfach die Zähler: a/c + b/c = (a + b)/c.</p>
              <p>Damit beide Nenner gleich werden, sucht man das <span className="hint-em">kgV</span> = kleinstes gemeinsames Vielfaches der Nenner. Das ist die kleinste Zahl, die durch beide Nenner teilbar ist (z. B. kgV(7,3) = 21, weil 21 = 3·7 die kleinste Zahl ist, die 7 und 3 teilt). Dieses kgV wird der gemeinsame Nenner.</p>
              <p>Anschließend <span className="hint-em">erweitert</span> man jeden Bruch: Zähler und Nenner mit derselben Zahl multiplizieren ändert den Wert des Bruchs nicht (a/b = (a·k)/(b·k)).</p>
            </>,
            <>
              <p>So löst man 3/7 + 7/3 Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) Gemeinsamen Nenner = kgV(7, 3) bestimmen:
   7 und 3 haben keinen gemeinsamen Teiler außer 1,
   also kgV = 7·3 = 21.

2) Beide Brüche auf den Nenner 21 erweitern
   (Zähler UND Nenner mit derselben Zahl mal nehmen):
   3/7 = (3·3)/(7·3) = 9/21    (mal 3, weil 21/7 = 3)
   7/3 = (7·7)/(3·7) = 49/21   (mal 7, weil 21/3 = 7)

3) Jetzt gleiche Nenner → nur die Zähler addieren:
   9/21 + 49/21 = (9+49)/21 = 58/21

4) Kürzen prüfen: gibt es einen gemeinsamen Teiler von
   Zähler und Nenner? 58 = 2·29, 21 = 3·7 → ggT = 1.
   Kein gemeinsamer Teiler → 58/21 ist fertig.`}</pre>
              <p>Warum mal 3 bzw. mal 7? Weil 21/7 = 3 und 21/3 = 7 — man multipliziert mit genau dem Faktor, der den alten Nenner zum neuen Nenner 21 macht.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Typs: 1/4 + 1/6</p>
              <pre className="hint-code-block">{`kgV(4, 6) = 12   (12 ist durch 4 und 6 teilbar)
1/4 = (1·3)/(4·3) = 3/12   (12/4 = 3)
1/6 = (1·2)/(6·2) = 2/12   (12/6 = 2)
3/12 + 2/12 = 5/12
ggT(5,12) = 1 → fertig`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nenner einfach addieren: 3/7 + 7/3 = 10/10 = 1 → <strong>✅ Richtig:</strong> Erst gemeinsamen Nenner (kgV = 21) bilden; Nenner werden beim Addieren nie addiert.</li>
              <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt addieren: (3+7)/(7+3) = 10/10 → <strong>✅ Richtig:</strong> Nur Zähler addieren, und nur wenn die Nenner schon gleich sind.</li>
              <li><strong>❌ Falsch:</strong> Beim Erweitern nur den Zähler malnehmen: 3/7 = 9/7 → <strong>✅ Richtig:</strong> Zähler UND Nenner mit derselben Zahl: 3/7 = 9/21 (sonst ändert sich der Wert).</li>
            </ul>,
            <p>Probe: 3/7 ≈ 0,43 und 7/3 ≈ 2,33, zusammen ≈ 2,76 — passt 58/21 ≈ 2,76 dazu? Frage: Warum muss vor der Addition zwingend der Nenner gleich sein, und warum ändert das Erweitern (mal 3, mal 7) den Wert eines Bruchs nicht?</p>,
          ),
          solution: <M>{'\\frac{3}{7} + \\frac{7}{3} = \\frac{58}{21}'}</M>,
        },
        {
          letter: 'b',
          text: <>{'('}<Frac n="1" d="3" />{' + '}<Frac n="2" d="9" />{') · ('}<Frac n="11" d="8" />{' − '}<Frac n="1" d="4" />{')'}</>,
          hint: h(
            <>
              <p>Es geht um ein <span className="hint-em">Produkt zweier Klammern</span>, in denen jeweils Brüche addiert/subtrahiert werden. Die <span className="hint-em">Rechenreihenfolge</span> ("Klammer vor Punkt vor Strich") sagt: Was in Klammern steht, wird zuerst berechnet. Also vereinfacht man jede Klammer für sich zu einem einzigen Bruch und multipliziert erst danach.</p>
              <p>Innerhalb einer Klammer addiert/subtrahiert man Brüche wie üblich: gemeinsamer Nenner = <span className="hint-em">kgV</span> (kleinste Zahl, die durch beide Nenner teilbar ist), dann erweitern (Zähler und Nenner mit derselben Zahl mal nehmen), dann nur die Zähler verrechnen.</p>
              <p>Brüche multipliziert man so: (a/b)·(c/d) = (a·c)/(b·d) — Zähler mal Zähler, Nenner mal Nenner. <span className="hint-em">Querkürzen</span> heißt: Bevor man ausmultipliziert, einen Zähler gegen einen Nenner kürzen, wenn sie einen gemeinsamen Teiler haben — das spart Rechenarbeit.</p>
            </>,
            <>
              <p>So löst man (1/3 + 2/9)·(11/8 − 1/4):</p>
              <pre className="hint-code-block">{`1) Linke Klammer 1/3 + 2/9:
   kgV(3, 9) = 9      (9 ist durch 3 und 9 teilbar)
   1/3 = (1·3)/(3·3) = 3/9
   3/9 + 2/9 = 5/9

2) Rechte Klammer 11/8 − 1/4:
   kgV(8, 4) = 8
   1/4 = (1·2)/(4·2) = 2/8
   11/8 − 2/8 = 9/8

3) Beide Ergebnisse multiplizieren: (5/9)·(9/8)
   Querkürzen: die 9 im Nenner (aus 5/9) und
   die 9 im Zähler (aus 9/8) kürzen sich zu 1:
   = (5·9)/(9·8) = (5·1)/(1·8) = 5/8`}</pre>
              <p>Statt Querkürzen ginge auch ausmultiplizieren: (5·9)/(9·8) = 45/72, dann kürzen mit ggT(45,72) = 9 → 5/8. Querkürzen führt direkt zum selben Ergebnis.</p>
            </>,
            <>
              <p>Anderes Beispiel: (1/2 + 1/4)·(3/4 − 1/4)</p>
              <pre className="hint-code-block">{`Linke Klammer:  1/2 = 2/4 → 2/4 + 1/4 = 3/4
Rechte Klammer: 3/4 − 1/4 = 2/4 = 1/2
(3/4)·(1/2) = (3·1)/(4·2) = 3/8`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Alle vier Brüche gleichzeitig auf einen Nenner bringen → <strong>✅ Richtig:</strong> Jede Klammer einzeln vereinfachen, dann erst multiplizieren — sonst wird es unnötig kompliziert.</li>
              <li><strong>❌ Falsch:</strong> 5/9 · 9/8 = (5+9)/(9+8) oder Nenner addieren → <strong>✅ Richtig:</strong> Bei der Multiplikation Zähler·Zähler und Nenner·Nenner: (5·9)/(9·8).</li>
              <li><strong>❌ Falsch:</strong> 45/72 als Endergebnis stehen lassen → <strong>✅ Richtig:</strong> Immer auf Kürzbarkeit prüfen: ggT(45,72) = 9 → 5/8.</li>
            </ul>,
            <p>Probe mit Dezimalzahlen: linke Klammer 5/9 ≈ 0,56, rechte 9/8 = 1,125, Produkt ≈ 0,625 — passt 5/8 = 0,625? Frage: Warum darf man querkürzen, bevor man ausmultipliziert (was passiert dabei mit dem Wert des Produkts)?</p>,
          ),
          solution: <M>{'\\left(\\frac{1}{3} + \\frac{2}{9}\\right)\\cdot\\left(\\frac{11}{8} - \\frac{1}{4}\\right) = \\frac{5}{8}'}</M>,
        },
        {
          letter: 'c',
          text: <>{'('}<Frac n="13" d="2" />{' : '}<Frac n="169" d="12" />{') : '}<Frac n="3" d="26" />{'   (Hinweis: 13 · 13 = 169)'}</>,
          hint: h(
            <>
              <p>Der <span className="hint-em">Kehrwert</span> eines Bruchs entsteht durch Vertauschen von Zähler und Nenner: der Kehrwert von c/d ist d/c (z. B. Kehrwert von 169/12 = 12/169). Bei einer ganzen Zahl n ist der Kehrwert 1/n.</p>
              <p><span className="hint-em">Regel "Dividieren = mit Kehrwert multiplizieren"</span>: a/b ÷ c/d = a/b · d/c. Statt durch einen Bruch zu teilen, multipliziert man mit seinem Kehrwert. (Der Bruch hinter dem Teilungszeichen heißt <span className="hint-em">Divisor</span> — nur dieser wird umgedreht.)</p>
              <p>Hier stehen <span className="hint-em">zwei Divisionen</span> in Reihe. Bei gleichrangigen Rechenarten (Punkt-Rechnung) gilt: von <span className="hint-em">links nach rechts</span> auflösen — erst die Klammer (innere Division), dann die äußere.</p>
            </>,
            <>
              <p>So löst man (13/2 : 169/12) : 3/26:</p>
              <pre className="hint-code-block">{`1) Innere Division (Klammer zuerst):
   13/2 : 169/12 = 13/2 · 12/169   (Divisor umdrehen)
   Tipp 169 = 13·13, also 169/13 = 13:
   = (13·12)/(2·169)
   Kürzen 13 gegen 169: 169 = 13·13 → 13/169 = 1/13
   = 12/(2·13) = 12/26 = 6/13

2) Äußere Division mit dem Ergebnis:
   6/13 : 3/26 = 6/13 · 26/3   (Divisor 3/26 umdrehen)
   Kürzen: 26 = 2·13 → 26/13 = 2;  6/3 = 2
   = (6·26)/(13·3) = (2·2)/1 = 4

Endergebnis: 4 (eine ganze Zahl).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel mit zwei Divisionen: (6 : 2/3) : 1/4</p>
              <pre className="hint-code-block">{`6 : 2/3 = 6 · 3/2 = 18/2 = 9   (Kehrwert von 2/3 ist 3/2)
9 : 1/4 = 9 · 4   = 36          (Kehrwert von 1/4 ist 4)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Den Kehrwert vom ersten Bruch (13/2) bilden → <strong>✅ Richtig:</strong> Bei a ÷ b dreht man nur den Divisor b (hier 169/12) um, nicht den Dividenden a.</li>
              <li><strong>❌ Falsch:</strong> Beide Divisionen auf einmal umschreiben → <strong>✅ Richtig:</strong> Streng von links nach rechts: erst die Klammer, dann die äußere Division.</li>
              <li><strong>❌ Falsch:</strong> Hinweis 169 = 13·13 ignorieren und mit großen Zahlen rechnen → <strong>✅ Richtig:</strong> 13/169 = 1/13 ausnutzen, dann bleiben die Zahlen klein.</li>
            </ul>,
            <p>Probe: 4 · (3/26) sollte 13/2 : 169/12 ergeben, also 6/13 — stimmt das mit Schritt 1 überein? Frage: Warum ist Dividieren durch c/d dasselbe wie Multiplizieren mit d/c — was bedeutet "durch 1/2 teilen" anschaulich?</p>,
          ),
          solution: <M>{'\\left(\\frac{13}{2} : \\frac{169}{12}\\right) : \\frac{3}{26} = 4'}</M>,
        },
        {
          letter: 'd',
          text: '5⁻² · 100',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Potenz</span> aⁿ heißt "a hoch n" und bedeutet, a n-mal mit sich selbst zu multiplizieren (5² = 5·5 = 25). a ist die <span className="hint-em">Basis</span>, n der <span className="hint-em">Exponent</span>.</p>
              <p><span className="hint-em">Regel für negativen Exponenten</span>: a⁻ⁿ = 1/aⁿ. Ein negativer Exponent bedeutet "Kehrwert der Potenz" — also 1 geteilt durch die positive Potenz. Das Minus gehört zum Exponenten, NICHT zum Ergebnis: 5⁻² ist eine positive Zahl.</p>
              <p>Begründung der Regel: Wenn man eine Potenz durch sich selbst kürzt, gilt aⁿ/aⁿ = 1; mit der Regel "Potenzen dividieren = Exponenten subtrahieren" wäre das a⁰ = 1. Setzt man das fort, ergibt jeder Schritt nach unten eine Division durch a: a¹ = a, a⁰ = 1, a⁻¹ = 1/a, a⁻² = 1/a². So entsteht a⁻ⁿ = 1/aⁿ.</p>
            </>,
            <>
              <p>So löst man 5⁻² · 100:</p>
              <pre className="hint-code-block">{`1) Negativen Exponenten in Kehrwert umwandeln:
   5⁻² = 1/5² = 1/25     (5² = 5·5 = 25)
2) Einsetzen: (1/25) · 100
3) Eine ganze Zahl · Bruch: 100 mit Zähler malnehmen:
   (1·100)/25 = 100/25
4) Ausrechnen: 100/25 = 4   (denn 25·4 = 100)`}</pre>
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
              <li><strong>❌ Falsch:</strong> 5⁻² = −25 (negativer Exponent → negative Zahl) → <strong>✅ Richtig:</strong> 5⁻² = 1/25 (positiv! Negativ ist der Exponent, nicht das Ergebnis).</li>
              <li><strong>❌ Falsch:</strong> 5⁻² = 1/(−5²) = 1/(−25) → <strong>✅ Richtig:</strong> 5⁻² = 1/5² = 1/25 (die Basis bleibt +5, das Minus gehört nur zum Exponenten).</li>
              <li><strong>❌ Falsch:</strong> 100/25 = 5 → <strong>✅ Richtig:</strong> 100/25 = 4, denn 25·4 = 100 (nicht 25·5 = 125).</li>
            </ul>,
            <p>Selbstkontrolle: 5⁻² · 100 = 100/25 = 4 — multipliziere zur Probe zurück 4·25 = 100. Frage: Was unterscheidet 5⁻² (= 1/25), −5² (= −25) und (−5)² (= 25), und warum ist nur 5⁻² ein Kehrwert?</p>,
          ),
          solution: <M>{'5^{-2}\\cdot 100 = 4'}</M>,
        },
        {
          letter: 'e',
          text: '−2(2x − 4) + x(1 + x) · (−1)',
          hint: h(
            <>
              <p>Ein <span className="hint-em">Term</span> ist ein Rechenausdruck mit Zahlen und Variablen (Buchstaben für unbekannte Zahlen, hier x). Ziel ist, alle Klammern aufzulösen und so weit wie möglich zu vereinfachen.</p>
              <p><span className="hint-em">Distributivgesetz</span> (Ausmultiplizieren): a·(b + c) = a·b + a·c. Den Faktor vor der Klammer mit <span className="hint-em">jedem</span> Summanden in der Klammer einzeln multiplizieren.</p>
              <p><span className="hint-em">Vorzeichenregeln</span> beim Multiplizieren: (+)·(+) = + , (−)·(+) = − , (−)·(−) = +. Steht nur ein Minus vor der Klammer, ist das wie "·(−1)".</p>
              <p>Am Ende werden <span className="hint-em">gleichartige Terme</span> zusammengefasst: Terme mit genau derselben Variablenpotenz (z. B. alle x-Terme, alle x²-Terme). x² und x sind NICHT gleichartig, weil ihre Exponenten verschieden sind.</p>
            </>,
            <>
              <p>So löst man −2(2x − 4) + x(1 + x)·(−1):</p>
              <pre className="hint-code-block">{`1) Erste Klammer ausmultiplizieren (−2 mal jeden Term):
   −2·2x = −4x;  −2·(−4) = +8  [(−)·(−) = +]
   → −2(2x − 4) = −4x + 8

2) x(1 + x) ausmultiplizieren (x mal jeden Term):
   x·1 = x;  x·x = x²
   → x(1 + x) = x + x²

3) Das ganze Produkt mit (−1) malnehmen
   (jedes Vorzeichen dreht sich):
   (x + x²)·(−1) = −x − x²

4) Alles addieren:
   (−4x + 8) + (−x − x²) = −x² − 4x − x + 8

5) Gleichartige Terme zusammenfassen
   (nur −4x und −x sind gleichartig):
   −4x − x = −5x
   → −x² − 5x + 8`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: −3(x − 2) + x·(x + 1)·(−1)</p>
              <pre className="hint-code-block">{`−3(x − 2)      = −3x + 6      [−3·(−2) = +6]
x·(x + 1)      = x² + x
·(−1)          = −x² − x
Summe: (−3x + 6) + (−x² − x)
     = −x² + (−3x − x) + 6 = −x² − 4x + 6`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> −2·(−4) = −8 → <strong>✅ Richtig:</strong> (−)·(−) = (+), also −2·(−4) = +8.</li>
              <li><strong>❌ Falsch:</strong> Das (−1) nur auf einen Teil von x(1+x) anwenden → <strong>✅ Richtig:</strong> (−1) gilt fürs ganze Produkt: erst x(1+x) = x + x², dann ·(−1) = −x − x².</li>
              <li><strong>❌ Falsch:</strong> −4x − x² − x = −5x² → <strong>✅ Richtig:</strong> x² und x sind ungleichartig; nur −4x und −x werden zu −5x zusammengefasst → −x² − 5x.</li>
            </ul>,
            <p>Selbstkontrolle: Setze x = 1 in Aufgabe und Ergebnis ein — beide sollten dieselbe Zahl ergeben (−x²−5x+8 = −1−5+8 = 2). Frage: Was macht zwei Terme "gleichartig", und warum darf man x² und x trotz gemeinsamem x nicht addieren?</p>,
          ),
          solution: <M>{'-2(2x - 4) + x(1 + x)\\cdot(-1) = -x^{2} - 5x + 8'}</M>,
        },
        {
          letter: 'f',
          text: '−121ab³ − (11a²b)² · (−2a⁻³b)   (Hinweis: 11 · 11 = 121)',
          hint: h(
            <>
              <p>Hier braucht man die <span className="hint-em">Potenzgesetze</span> (Regeln zum Rechnen mit Potenzen aⁿ = a n-mal mal sich selbst). Wichtig: aⁿ heißt nur a wird potenziert; (k·a)ⁿ heißt auch die Zahl k wird potenziert.</p>
              <ul>
                <li><span className="hint-em">(a·b)ⁿ = aⁿ·bⁿ</span> — Potenz eines Produkts: jeder Faktor (auch die Zahl davor!) wird einzeln potenziert.</li>
                <li><span className="hint-em">(aᵐ)ⁿ = aᵐ·ⁿ</span> — Potenz einer Potenz: Exponenten <em>multiplizieren</em>.</li>
                <li><span className="hint-em">aᵐ · aⁿ = aᵐ⁺ⁿ</span> — gleiche Basis multiplizieren: Exponenten <em>addieren</em>.</li>
                <li><span className="hint-em">a⁻ⁿ = 1/aⁿ</span> — negativer Exponent = Kehrwert.</li>
              </ul>
              <p>Außerdem: Minus vor Minus = Plus (−(−x) = +x). Der Hinweis 11·11 = 121 hilft beim Quadrieren der 11.</p>
            </>,
            <>
              <p>So löst man −121ab³ − (11a²b)²·(−2a⁻³b):</p>
              <pre className="hint-code-block">{`1) Den Punkt-vor-Strich-Teil zuerst: erst die Potenz
   (11a²b)² mit (a·b)ⁿ = aⁿbⁿ auflösen:
   (11a²b)² = 11² · (a²)² · b²
            = 121 · a^(2·2) · b²     [(aᵐ)ⁿ = aᵐⁿ]
            = 121 a⁴ b²

2) Mit (−2a⁻³b) multiplizieren — Zahlen mal Zahlen,
   gleiche Basen: Exponenten addieren (aᵐ·aⁿ = aᵐ⁺ⁿ):
   121 a⁴ b² · (−2 a⁻³ b)
   Zahl:  121·(−2) = −242
   a:     a⁴ · a⁻³ = a^(4+(−3)) = a¹ = a
   b:     b² · b¹  = b^(2+1)    = b³
   = −242 a b³

3) In den Gesamtterm einsetzen (Strichrechnung):
   −121ab³ − (−242ab³)
   = −121ab³ + 242ab³     [Minus vor Minus = Plus]
   = (−121 + 242) ab³ = 121 ab³`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: (3x²y)² · (−2x⁻¹y)</p>
              <pre className="hint-code-block">{`(3x²y)² = 3²·(x²)²·y² = 9 x⁴ y²
9 x⁴ y² · (−2 x⁻¹ y):
  Zahl: 9·(−2) = −18
  x:    x⁴·x⁻¹ = x^(4−1) = x³
  y:    y²·y¹  = y³
= −18 x³ y³`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (11a²b)² = 11a⁴b² (die 11 nicht quadriert) → <strong>✅ Richtig:</strong> auch die Zahl wird potenziert: 11² = 121 → 121a⁴b².</li>
              <li><strong>❌ Falsch:</strong> a⁴·a⁻³ = a⁻¹² (Exponenten multipliziert) → <strong>✅ Richtig:</strong> gleiche Basis multiplizieren → Exponenten addieren: a⁴·a⁻³ = a⁴⁺⁽⁻³⁾ = a¹.</li>
              <li><strong>❌ Falsch:</strong> −121ab³ − (−242ab³) = −363ab³ → <strong>✅ Richtig:</strong> Minus vor Minus wird Plus: −121ab³ + 242ab³ = 121ab³.</li>
            </ul>,
            <p>Selbstkontrolle: Setze a = b = 1 ein: Aufgabe −121 − 121·(−2) = −121 + 242 = 121, Ergebnis 121·1·1 = 121 ✓. Frage: Bei welcher Regel addiert man Exponenten (aᵐ·aⁿ) und bei welcher multipliziert man sie ((aᵐ)ⁿ)?</p>,
          ),
          solution: <M>{'-121ab^{3} - (11a^{2}b)^{2}\\cdot(-2a^{-3}b) = 121ab^{3}'}</M>,
        },
        {
          letter: 'g',
          text: <>{'−'}<Frac n="a + b" d="c" />{' − '}<Frac n="a − b" d="c" /></>,
          hint: h(
            <>
              <p><span className="hint-em">Gleichnamige Brüche</span> haben denselben Nenner. Sie werden addiert/subtrahiert, indem man nur die <span className="hint-em">Zähler verrechnet</span> und den gemeinsamen Nenner beibehält: a/c ± b/c = (a ± b)/c. Hier haben beide Brüche schon den Nenner c — kein Erweitern nötig.</p>
              <p>Die Zähler sind aber selbst Summen/Differenzen, und vor jedem Bruch steht ein Minus. Ein <span className="hint-em">Minus vor einem Bruch</span> wirkt auf den <em>ganzen</em> Zähler — man muss ihn in eine Klammer setzen und dann das Minus hineinmultiplizieren.</p>
              <p><span className="hint-em">Vorzeichenregel "Minus vor Klammer"</span>: −(x + y) = −x − y und −(x − y) = −x + y. Das Minus dreht jedes Vorzeichen in der Klammer um (denn −(...) bedeutet ·(−1)).</p>
            </>,
            <>
              <p>So löst man −(a+b)/c − (a−b)/c:</p>
              <pre className="hint-code-block">{`1) Gleicher Nenner c → Zähler über einen Bruchstrich,
   jeden Zähler sicher in eine Klammer setzen:
   = [ −(a+b) − (a−b) ] / c

2) Beide Klammern auflösen (Vorzeichen umdrehen):
   −(a+b) = −a − b
   −(a−b) = −a + b

3) Zähler zusammenfassen:
   −a − b − a + b
   = (−a − a) + (−b + b)
   = −2a + 0 = −2a       (+b und −b heben sich auf)

4) Nenner bleibt c → Ergebnis: −2a/c`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: −(x+2)/3 − (x−2)/3</p>
              <pre className="hint-code-block">{`= [ −(x+2) − (x−2) ] / 3
= [ −x − 2 − x + 2 ] / 3
= −2x / 3        (−2 und +2 heben sich auf)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> −(a+b) = −a+b → <strong>✅ Richtig:</strong> −(a+b) = −a−b (Minus vor Klammer dreht ALLE Vorzeichen).</li>
              <li><strong>❌ Falsch:</strong> −(a−b) = −a−b → <strong>✅ Richtig:</strong> −(a−b) = −a+b (auch das innere Minus wird zu Plus).</li>
              <li><strong>❌ Falsch:</strong> auch die Nenner zusammenzählen → 2c → <strong>✅ Richtig:</strong> der gemeinsame Nenner bleibt c, nur die Zähler werden verrechnet.</li>
            </ul>,
            <p>Selbstkontrolle: Setze a = 3, b = 1, c = 2 ein: Aufgabe −4/2 − 2/2 = −3, Ergebnis −2·3/2 = −3 ✓. Frage: Warum dreht das Minus vor der Klammer das Vorzeichen ALLER Terme um (nicht nur des ersten)?</p>,
          ),
          solution: <M>{'-\\frac{a+b}{c} - \\frac{a-b}{c} = -\\frac{2a}{c}'}</M>,
        },
      ],
    },
    {
      id: 'a2',
      nr: 2,
      title: 'Ausklammern aus b(a − b) + b − a',
      referenz: ['ausklammern'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Klammern Sie in dem Ausdruck b(a − b) + b − a\n\n(a) −1\n\naus.',
          hint: h(
            <>
              <p><span className="hint-em">Ausklammern</span> ist die Umkehrung des Ausmultiplizierens: Man zieht einen gemeinsamen Faktor f vor eine Klammer, sodass f · (Rest) wieder den Originalausdruck ergibt. Faktor f ausklammern heißt: jeden Term durch f teilen und das Ergebnis in die Klammer schreiben.</p>
              <p>Hier ist f = −1. Die <span className="hint-em">Regel für −1 ausklammern</span>: A = −1·(−A), d. h. man schreibt −1 vor die Klammer und kehrt <em>jedes Vorzeichen</em> aller Terme um. (−1)·(T₁ + T₂ − T₃) = −T₁ − T₂ + T₃. Der Wert ändert sich nicht, weil −1·(−1) = 1.</p>
              <p>Hilfsregel: a − b = −(b − a), also b(a−b) = b·(−(b−a)) = −b(b−a). Damit lässt sich das Ergebnis übersichtlicher schreiben.</p>
            </>,
            <>
              <p>So klammert man −1 aus b(a−b) + b − a:</p>
              <pre className="hint-code-block">{`1) Ziel: −1·(Klammer) = b(a−b) + b − a.
   Die Klammer ist also der gesamte Ausdruck mal (−1),
   d.h. jedes Vorzeichen umgekehrt:
   Klammer = −[ b(a−b) + b − a ]
           = −b(a−b) − b + a    ← alle 3 Terme gewechselt

2) Optional schöner machen mit a−b = −(b−a):
   −b(a−b) = −b·(−(b−a)) = +b(b−a)
   Klammer = b(b−a) − b + a

3) Ergebnis: b(a−b) + b − a = (−1)·( b(b−a) − b + a )`}</pre>
              <p>Probe: (−1)·(b(b−a) − b + a) = −b(b−a) + b − a = b(a−b) + b − a ✓ (da −b(b−a) = b(a−b)).</p>
            </>,
            <>
              <p>Einfaches Beispiel: −1 aus 3x − 2 ausklammern</p>
              <pre className="hint-code-block">{`3x − 2 = (−1)·(−3x + 2)   ← beide Vorzeichen gedreht
Probe: (−1)·(−3x + 2) = 3x − 2 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur dem ersten Term das Vorzeichen wechseln: −b(a−b) + b − a → <strong>✅ Richtig:</strong> ALLE Terme wechseln: −b(a−b) − b + a.</li>
              <li><strong>❌ Falsch:</strong> −b(a−b) = ab − b² → <strong>✅ Richtig:</strong> −b(a−b) = −b·a − b·(−b) = −ab + b² = b(b−a).</li>
            </ul>,
            <p>Selbstkontrolle: rechne die ausgeklammerte Form wieder mit (−1) aus — kommt der Originalausdruck heraus? Frage: Warum bleibt der Wert gleich, obwohl man (−1) ausklammert, und wozu braucht man diese Umformung (etwa um Brüche vergleichbar zu machen)?</p>,
          ),
          solution: (
            <>
              <M>{'b(a - b) + b - a = (-1)\\cdot((-b)(a - b) - b + a)'}</M>
              {'\n'}
              <M>{'= (-1)\\cdot(b(b - a) - b + a)'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Klammern Sie in dem Ausdruck b(a − b) + b − a\n\n(b) a − b\n\naus.',
          hint: h(
            <>
              <p>Man kann einen Ausdruck wie (a−b) nur dann <span className="hint-em">ausklammern</span>, wenn er in jedem Summanden als Faktor steckt. Ausklammern heißt: jeden Term durch (a−b) teilen, das Ergebnis kommt in die Klammer, (a−b) davor: T₁ + T₂ = (a−b)·(T₁/(a−b) + T₂/(a−b)).</p>
              <p>Der erste Term b(a−b) enthält (a−b) bereits sichtbar. Die letzten beiden Terme b − a sehen anders aus — aber mit der <span className="hint-em">Schlüsselumformung b − a = −(a − b)</span> (Vorzeichen vor der Subtraktion umkehren) werden auch sie zu einem Vielfachen von (a−b).</p>
            </>,
            <>
              <p>So klammert man (a−b) aus b(a−b) + b − a:</p>
              <pre className="hint-code-block">{`1) b − a als Vielfaches von (a−b) schreiben:
   b − a = −(a − b) = (−1)·(a−b)

2) Einsetzen:
   b(a−b) + b − a = b(a−b) + (−1)·(a−b)

3) Jetzt steht (a−b) in BEIDEN Termen → ausklammern.
   Teile jeden Term durch (a−b):
   b(a−b) / (a−b) = b
   (−1)(a−b) / (a−b) = −1
   → Restklammer = (b − 1)

4) Ergebnis: (a−b)·(b − 1)`}</pre>
              <p>Probe (ausmultiplizieren): (a−b)(b−1) = b(a−b) − (a−b) = b(a−b) − a + b = b(a−b) + b − a ✓.</p>
            </>,
            <>
              <p>Einfaches Vergleichsbeispiel: x² − x ausklammern</p>
              <pre className="hint-code-block">{`x² − x = x·x − x·1 = x·(x − 1)   ← x ist gemeinsamer Faktor`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> b−a = a−b (Reihenfolge ignoriert) → <strong>✅ Richtig:</strong> b−a = −(a−b); die Reihenfolge der Subtraktion bestimmt das Vorzeichen.</li>
              <li><strong>❌ Falsch:</strong> Restfaktor (b+1) → <strong>✅ Richtig:</strong> b(a−b)/(a−b) = b und −(a−b)/(a−b) = −1 → Restfaktor (b−1).</li>
            </ul>,
            <p>Selbstkontrolle: multipliziere (a−b)(b−1) wieder aus — kommt der Originalausdruck heraus? Frage: Woran erkennt man am ersten Term b(a−b) schon, dass (a−b) ein gemeinsamer Faktor sein könnte?</p>,
          ),
          solution: <M>{'b(a - b) + b - a = (a - b)\\cdot(b - 1)'}</M>,
        },
        {
          letter: 'c',
          text: 'Klammern Sie in dem Ausdruck b(a − b) + b − a\n\n(c) b − a\n\naus.',
          hint: h(
            <>
              <p>Aufgabe wie (b), nur soll diesmal <span className="hint-em">(b−a)</span> ausgeklammert werden (die andere Reihenfolge der Subtraktion). Ausklammern bedeutet wieder: jeden Term durch den Faktor — hier (b−a) — teilen und das Ergebnis in die Klammer schreiben.</p>
              <p><span className="hint-em">Schlüsselumformung a − b = −(b − a)</span>: Dreht man die Subtraktionsreihenfolge um, ändert sich das Vorzeichen. Damit wird b(a−b) = b·(−(b−a)) = −b(b−a) — jetzt enthält dieser Term (b−a). Und b − a = (b−a) ist ohnehin schon der Faktor mal 1.</p>
            </>,
            <>
              <p>So klammert man (b−a) aus b(a−b) + b − a:</p>
              <pre className="hint-code-block">{`1) Ersten Term umschreiben mit a−b = −(b−a):
   b(a−b) = b·(−(b−a)) = −b(b−a)

2) Den Rest erkennen: b − a = (b−a) = 1·(b−a)

3) Einsetzen:
   = −b(b−a) + 1·(b−a)

4) (b−a) ausklammern — jeden Term durch (b−a) teilen:
   −b(b−a)/(b−a) = −b
   1·(b−a)/(b−a) = 1
   → Restklammer = (−b + 1) = (1 − b)

5) Ergebnis: (b−a)·(−b + 1)   bzw.  (b−a)·(1 − b)`}</pre>
              <p>Probe: (b−a)(1−b) = (b−a) − b(b−a) = b − a − b(b−a) = b(a−b) + b − a ✓.</p>
            </>,
            <>
              <p>Vergleich mit Teilaufgabe (b): beide Formen beschreiben denselben Ausdruck.</p>
              <pre className="hint-code-block">{`(a−b)(b−1) und (b−a)(1−b) sind gleich, denn:
(a−b) = −(b−a) und (b−1) = −(1−b)
→ (−1)·(−1) = +1 → identisch ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a−b = b−a → <strong>✅ Richtig:</strong> a−b = −(b−a), daher b(a−b) = −b(b−a).</li>
              <li><strong>❌ Falsch:</strong> Restfaktor (1+b) → <strong>✅ Richtig:</strong> −b(b−a)/(b−a) = −b und (b−a)/(b−a) = 1 → Restfaktor (1−b).</li>
            </ul>,
            <p>Selbstkontrolle: multipliziere (b−a)(1−b) aus — Originalausdruck? Frage: Worin unterscheiden sich die Ergebnisse aus (b) und (c) nur — und warum sind sie trotzdem gleichwertig?</p>,
          ),
          solution: <M>{'b(a - b) + b - a = (b - a)\\cdot(-b + 1)'}</M>,
        },
      ],
    },
    {
      id: 'a3',
      nr: 3,
      title: 'Kürzen (a, b, c, d, k ≠ 0)',
      referenz: ['kuerzen', 'binomische-formeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Kürzen Sie wo weit wie möglich. Dabei seien die reellen Zahlen a, b, c, d, k jeweils so gewählt, dass nicht durch 0 geteilt wird.\n\n'}<Frac n="a − b" d="a − b" /></>,
          hint: h(
            <>
              <p><span className="hint-em">Kürzen</span> heißt: Zähler und Nenner eines Bruchs durch denselben Faktor (ungleich 0) teilen. Der Wert bleibt gleich, der Bruch wird einfacher: (k·u)/(k·v) = u/v.</p>
              <p>Spezialfall: Ist der <span className="hint-em">Zähler genau gleich dem Nenner</span>, ergibt der Bruch 1 — denn jede (von 0 verschiedene) Zahl geteilt durch sich selbst ist 1: x/x = 1.</p>
              <p>Wichtig: (a−b) ist ein <span className="hint-em">einziger zusammengehöriger Ausdruck</span>. Man muss den Zähler als Ganzes mit dem Nenner als Ganzes vergleichen — nicht a mit a und b mit b einzeln. Bedingung: a ≠ b, damit der Nenner a−b nicht 0 wird (durch 0 darf man nie teilen).</p>
            </>,
            <pre className="hint-code-block">{`Zähler = (a − b),  Nenner = (a − b)
→ Zähler und Nenner sind identisch
→ identischer Ausdruck / sich selbst = 1
(a−b)/(a−b) = 1     (gültig solange a ≠ b, sonst 0/0)`}</pre>,
            <>
              <p>Beispiel numerisch (a=5, b=2):</p>
              <pre className="hint-code-block">{`(5 − 2)/(5 − 2) = 3/3 = 1 ✓`}</pre>
              <p>Beispiel allgemein (Zähler = Nenner, egal wie kompliziert):</p>
              <pre className="hint-code-block">{`(x² + 3x)/(x² + 3x) = 1   (für x² + 3x ≠ 0,
                            also x ≠ 0 und x ≠ −3)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> getrennt kürzen: a/a − b/b = 1 − 1 = 0 → <strong>✅ Richtig:</strong> (a−b) als Ganzes: (a−b)/(a−b) = 1.</li>
              <li><strong>❌ Falsch:</strong> ohne Bedingung "= 1 immer" → <strong>✅ Richtig:</strong> nur für a ≠ b; bei a = b entstünde 0/0 (nicht definiert).</li>
            </ul>,
            <p>Selbstkontrolle: setze a=7, b=4 ein → (7−4)/(7−4) = 1 ✓. Frage: Warum gilt x/x = 1 nur für x ≠ 0, und was wäre 0/0 — definiert oder nicht?</p>,
          ),
          solution: <M>{'\\frac{a - b}{a - b} = 1'}</M>,
        },
        {
          letter: 'b',
          text: <Frac n="a − b" d="b − a" />,
          hint: h(
            <>
              <p>Achtung: (a−b) und (b−a) sehen ähnlich aus, sind aber <span className="hint-em">nicht gleich</span>, sondern <em>entgegengesetzt</em>: dieselben Zahlen in umgekehrter Reihenfolge subtrahiert ergeben das negative Ergebnis (z. B. 5−3 = 2, aber 3−5 = −2).</p>
              <p><span className="hint-em">Schlüsselregel: b − a = −(a − b) = (−1)·(a − b)</span>. Wenn man die Subtraktion umdreht, klammert man −1 aus.</p>
              <p>Damit kann man den Nenner so umschreiben, dass derselbe Ausdruck (a−b) in Zähler und Nenner steht und sich <span className="hint-em">wegkürzt</span> — übrig bleibt nur der Faktor −1. Dieser "Vorzeichen-Trick" ist beim Kürzen sehr häufig.</p>
            </>,
            <pre className="hint-code-block">{`1) Nenner umschreiben: b − a = (−1)·(a − b)

2) Einsetzen:
   (a−b)/(b−a) = (a−b) / ((−1)·(a−b))

3) (a−b) kürzt sich gegen (a−b):
   = 1 / (−1)

4) = −1`}</pre>,
            <>
              <p>Beispiel (x−5)/(5−x):</p>
              <pre className="hint-code-block">{`5 − x = −(x − 5)
(x−5)/(5−x) = (x−5) / (−(x−5)) = −1`}</pre>
              <p>Beispiel (2k−3)/(3−2k):</p>
              <pre className="hint-code-block">{`3 − 2k = −(2k − 3)
(2k−3)/(3−2k) = (2k−3) / (−(2k−3)) = −1`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (a−b)/(b−a) = 1 (Vorzeichen übersehen) → <strong>✅ Richtig:</strong> = −1, weil Zähler und Nenner entgegengesetzt sind.</li>
              <li><strong>❌ Falsch:</strong> b−a = a−b → <strong>✅ Richtig:</strong> b−a = −(a−b); die Reihenfolge der Subtraktion bestimmt das Vorzeichen.</li>
            </ul>,
            <p>Selbstkontrolle: setze a=5, b=2 ein → (5−2)/(2−5) = 3/(−3) = −1 ✓. Frage: Warum ergibt (a−b)/(b−a) genau −1 und nicht +1 — welcher Faktor bleibt nach dem Kürzen übrig?</p>,
          ),
          solution: <M>{'\\frac{a - b}{b - a} = -1'}</M>,
        },
        {
          letter: 'c',
          text: <Frac n="a² + b²" d="a + b" />,
          hint: h(
            <>
              <p>Grundregel: <span className="hint-em">Kürzen geht nur mit gemeinsamen Faktoren</span>, also mit etwas, das als <em>Produkt</em> im ganzen Zähler UND ganzen Nenner steckt — nie mit einzelnen Summanden einer Summe. (k·u)/(k·v) = u/v, aber (a²+b²) ist eine Summe, kein Produkt.</p>
              <p><span className="hint-em">Faktorisieren</span> heißt, eine Summe als Produkt zu schreiben. Damit man hier mit (a+b) kürzen könnte, müsste (a+b) ein Faktor des Zählers a²+b² sein. Über den reellen Zahlen lässt sich a²+b² aber NICHT in ein Produkt mit (a+b) zerlegen.</p>
              <p>Zum Vergleich die <span className="hint-em">binomischen Formeln</span>: (a+b)² = a²+2ab+b², (a−b)² = a²−2ab+b², und die 3.: a²−b² = (a+b)(a−b). Keine davon ergibt a²+b² als Produkt mit (a+b).</p>
            </>,
            <>
              <pre className="hint-code-block">{`Kann man a² + b² als (a+b)·(etwas) schreiben?
Test: (a+b)·(a−b) = a² − b²   → Minus, nicht Plus
      (a+b)·(a+b) = a² + 2ab + b²  → Extra-Term 2ab
→ Es gibt keinen reellen Faktor (a+b) in a²+b².
→ Bruch ist NICHT kürzbar.`}</pre>
            </>,
            <>
              <p>Gegenüberstellung (was kürzt, was nicht):</p>
              <pre className="hint-code-block">{`(a² − b²)/(a + b) = (a+b)(a−b)/(a+b) = a − b   ✓ kürzbar
(a² + b²)/(a + b) → kein Faktor (a+b)          ✗ nicht kürzbar`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a²/a + b²/b = a + b (Summanden einzeln kürzen) → <strong>✅ Richtig:</strong> nur ein Faktor vor der GANZEN Summe darf gekürzt werden.</li>
              <li><strong>❌ Falsch:</strong> a²+b² = (a+b)² → <strong>✅ Richtig:</strong> (a+b)² = a²+2ab+b², also a²+b² ≠ (a+b)² (es fehlt 2ab).</li>
              <li><strong>❌ Falsch:</strong> a²+b² mit a²−b² verwechseln → <strong>✅ Richtig:</strong> nur a²−b² = (a+b)(a−b) (3. binom. Formel); a²+b² hat keine reelle Faktorzerlegung.</li>
            </ul>,
            <p>Selbstkontrolle: setze a=1, b=2 ein → (1+4)/(1+2) = 5/3, keine ganze Zahl, kein Wegkürzen — bestätigt "nicht kürzbar". Frage: Was müsste im Zähler stehen, damit man mit (a+b) kürzen dürfte, und welche binomische Formel liefert genau das?</p>,
          ),
          solution: 'Die Ausdrücke in (c), (e) und (h) sind nicht weiter kürzbar.',
        },
        {
          letter: 'd',
          text: <Frac n="a² − b²" d="a − b" />,
          hint: h(
            <>
              <p>Der Zähler a²−b² ist eine <span className="hint-em">Differenz von zwei Quadraten</span>. Dafür gibt es die <span className="hint-em">3. binomische Formel</span>: a² − b² = (a+b)·(a−b). Sie verwandelt die Summe/Differenz in ein Produkt — und Produkte kann man kürzen.</p>
              <p>Plan: Zähler mit der Formel <span className="hint-em">faktorisieren</span> (als Produkt schreiben), dann den gemeinsamen Faktor (a−b), der im Nenner steht, wegkürzen (gemeinsamer Faktor in Zähler und Nenner verschwindet, weil (a−b)/(a−b) = 1).</p>
            </>,
            <pre className="hint-code-block">{`1) Zähler faktorisieren (3. binom. Formel):
   a² − b² = (a + b)·(a − b)

2) In den Bruch einsetzen:
   (a²−b²)/(a−b) = (a+b)(a−b) / (a−b)

3) Gemeinsamen Faktor (a−b) kürzen:
   = (a+b) · [ (a−b)/(a−b) ] = (a+b) · 1
   = a + b      (gültig für a ≠ b)`}</pre>,
            <>
              <p>Anderes Beispiel: (x²−9)/(x−3)</p>
              <pre className="hint-code-block">{`x² − 9 = x² − 3² = (x+3)(x−3)   (9 = 3²)
(x+3)(x−3)/(x−3) = x + 3`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a²+b² = (a+b)(a−b) → <strong>✅ Richtig:</strong> nur a²−b² = (a+b)(a−b); das Minus im Zähler ist entscheidend.</li>
              <li><strong>❌ Falsch:</strong> a²−b² = (a−b)² = a²−2ab+b² → <strong>✅ Richtig:</strong> das ist die 2. Formel; die 3. Formel ist a²−b² = (a+b)(a−b).</li>
            </ul>,
            <p>Selbstkontrolle: setze a=5, b=2 ein → (25−4)/(5−2) = 21/3 = 7, und a+b = 7 ✓. Frage: Welche Form muss der Zähler haben, damit er sich mit (a−b) kürzen lässt, und welche binomische Formel liefert genau diese Zerlegung?</p>,
          ),
          solution: <M>{'\\frac{a^{2} - b^{2}}{a - b} = a + b'}</M>,
        },
        {
          letter: 'e',
          text: <Frac n="2a + 3b" d="2c + 3d" />,
          hint: h(
            <>
              <p>Erste Frage beim Kürzen immer: Gibt es einen Faktor, der im <span className="hint-em">gesamten Zähler</span> und im <span className="hint-em">gesamten Nenner</span> als Produkt steckt? Nur so etwas darf man kürzen: (k·u)/(k·v) = u/v.</p>
              <p><span className="hint-em">Ausklammern als Test</span>: Hat ein Term wie 2a + 3b einen gemeinsamen Faktor? 2a und 3b haben keinen gemeinsamen Zahlenfaktor (2 und 3 sind teilerfremd) und keine gemeinsame Variable (a ≠ b). Also lässt sich nichts ausklammern — kein gemeinsamer Faktor.</p>
              <p><span className="hint-em">Merke:</span> Kürzen heißt durch einen gemeinsamen Faktor teilen, niemals einzelne Summanden einer Summe streichen.</p>
            </>,
            <pre className="hint-code-block">{`Suche Faktor k mit Zähler = k·(...) UND Nenner = k·(...):
Zähler 2a + 3b: 2 und 3 teilerfremd, a und b verschieden
                → kein gemeinsamer Faktor ausklammerbar
Nenner 2c + 3d: ebenso → kein gemeinsamer Faktor
→ Kein gemeinsamer Faktor in Zähler UND Nenner
→ Bruch NICHT kürzbar`}</pre>,
            <>
              <p>Zum Vergleich ein Bruch der KÜRZT: (2a+4b)/(2c+6d)</p>
              <pre className="hint-code-block">{`Zähler: 2a + 4b = 2·(a + 2b)   ← Faktor 2 ausklammerbar
Nenner: 2c + 6d = 2·(c + 3d)   ← Faktor 2 ausklammerbar
= 2(a+2b) / 2(c+3d) = (a+2b)/(c+3d)   ✓`}</pre>
              <p>Unser Bruch (2a+3b)/(2c+3d): kein solcher Faktor → bleibt stehen.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> "2a/2c und 3b/3d getrennt kürzen" → <strong>✅ Richtig:</strong> nur ein Faktor vor der GANZEN Summe darf gekürzt werden, nicht einzelne Glieder.</li>
              <li><strong>❌ Falsch:</strong> (2a+3b)/(2c+3d) = a/c + b/d → <strong>✅ Richtig:</strong> einen Bruch darf man so nicht aufspalten; er ist schlicht nicht kürzbar.</li>
            </ul>,
            <p>Selbstkontrolle: setze a=1,b=1,c=1,d=1 ein → 5/5 = 1 (Spezialfall), aber a=1,b=2,c=3,d=1 → 8/9 ≠ vereinfachbar — kein einheitliches Wegkürzen möglich. Frage: Formuliere die Merkregel — wann genau darf man einen Bruch kürzen?</p>,
          ),
          solution: 'Die Ausdrücke in (c), (e) und (h) sind nicht weiter kürzbar.',
        },
        {
          letter: 'f',
          text: <Frac n="k² + k³" d="k²" />,
          hint: h(
            <>
              <p>Der Zähler k²+k³ ist eine Summe — man kann nicht direkt kürzen. Trick: Aus dem Zähler den <span className="hint-em">größten gemeinsamen Faktor</span> ausklammern. k² steckt in beiden Summanden (k² = k² und k³ = k²·k), also lässt sich k² ausklammern: k²+k³ = k²·(1+k). Dadurch wird der Zähler zu einem Produkt mit dem Faktor k², genau das, was im Nenner steht.</p>
              <p><span className="hint-em">Potenzregel fürs Kürzen</span>: aᵐ/aⁿ = aᵐ⁻ⁿ — beim Dividieren gleicher Basen werden die Exponenten subtrahiert. Insbesondere aⁿ/aⁿ = a⁰ = 1. Damit kürzt sich k²/k² = 1.</p>
            </>,
            <pre className="hint-code-block">{`1) Gemeinsamen Faktor des Zählers finden:
   k² + k³ = k²·1 + k²·k = k²·(1 + k)
   (denn k³ = k²·k¹, Exponenten 2+1 = 3)

2) In den Bruch einsetzen:
   (k² + k³)/k² = k²·(1 + k) / k²

3) Faktor k² kürzen (k²/k² = 1):
   = (1 + k) · [k²/k²] = (1 + k)·1
   = 1 + k     (gültig für k ≠ 0)`}</pre>,
            <>
              <p>Beispiel: (x³ + x⁵)/x³</p>
              <pre className="hint-code-block">{`x³ + x⁵ = x³·(1 + x²)   (x⁵ = x³·x²)
x³(1 + x²)/x³ = 1 + x²`}</pre>
              <p>Beispiel mit Zahl: (2a³ + 4a⁵)/(2a²)</p>
              <pre className="hint-code-block">{`2a³ + 4a⁵ = 2a²·(a + 2a³)   bzw. = 2a³(1 + 2a²)
2a³(1 + 2a²)/(2a²) = a·(1 + 2a²)   (2/2=1, a³/a²=a)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k³/k² = k² (Exponenten multipliziert) → <strong>✅ Richtig:</strong> beim Dividieren subtrahieren: k³/k² = k³⁻² = k.</li>
              <li><strong>❌ Falsch:</strong> k²/k² = 0 → <strong>✅ Richtig:</strong> k²/k² = 1 (jede Zahl außer 0 durch sich selbst = 1).</li>
              <li><strong>❌ Falsch:</strong> die Summanden einzeln kürzen → <strong>✅ Richtig:</strong> erst k² ausklammern (Faktor herstellen), dann als Ganzes kürzen.</li>
            </ul>,
            <p>Selbstkontrolle: setze k=2 ein → (4+8)/4 = 12/4 = 3, und 1+k = 3 ✓. Frage: Warum darf man k² aus k²+k³ ausklammern, obwohl es ein Summand ist — und wie hängt Ausklammern mit dem anschließenden Kürzen zusammen?</p>,
          ),
          solution: <M>{'\\frac{k^{2} + k^{3}}{k^{2}} = 1 + k'}</M>,
        },
        {
          letter: 'g',
          text: <Frac n="2k²" d="4k² + 6k³" />,
          hint: h(
            <>
              <p>Diesmal steht die Summe im <span className="hint-em">Nenner</span> (4k²+6k³). Man kann nur kürzen, wenn der Nenner als Produkt vorliegt — also erst <span className="hint-em">ausklammern</span>, dann kürzen.</p>
              <p><span className="hint-em">ggT</span> = größter gemeinsamer Teiler: die größte Zahl/Potenz, die in allen Termen steckt. Technik: zuerst den Zahlen-ggT (hier ggT(4,6) = 2, da 2 die größte Zahl ist, die 4 und 6 teilt), dann den Variablen-Faktor mit dem <em>kleinsten</em> Exponenten (k² steckt in k² und in k³ = k²·k, also gemeinsamer Faktor k²). Zusammen: gemeinsamer Faktor 2k².</p>
            </>,
            <pre className="hint-code-block">{`1) Nenner ausklammern:
   ggT(4,6) = 2, gemeinsame Potenz = k²  → Faktor 2k²
   4k² + 6k³ = 2k²·2 + 2k²·3k = 2k²·(2 + 3k)

2) In den Bruch einsetzen:
   2k² / (4k² + 6k³) = 2k² / [ 2k²·(2 + 3k) ]

3) Faktor 2k² kürzen (steht oben allein, unten als Faktor):
   = [2k²/2k²] / (2 + 3k) = 1 / (2 + 3k)
   (gültig für k ≠ 0)`}</pre>,
            <>
              <p>Beispiel: 3x / (6x + 9x²)</p>
              <pre className="hint-code-block">{`ggT(6,9) = 3, gemeinsame Potenz x → Faktor 3x
6x + 9x² = 3x·(2 + 3x)
3x / [3x·(2 + 3x)] = 1/(2 + 3x)`}</pre>
              <p>Beispiel: 5a² / (10a² + 15a³)</p>
              <pre className="hint-code-block">{`10a² + 15a³ = 5a²·(2 + 3a)   (ggT(10,15)=5, Potenz a²)
5a² / [5a²·(2 + 3a)] = 1/(2 + 3a)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sofort 2k²/4k² = 1/2 kürzen (den 6k³-Term ignoriert) → <strong>✅ Richtig:</strong> zuerst den ganzen Nenner ausklammern, dann kürzen.</li>
              <li><strong>❌ Falsch:</strong> ggT(4,6) = 4 → <strong>✅ Richtig:</strong> ggT(4,6) = 2 (4 teilt 6 nicht; 2 ist der größte gemeinsame Teiler).</li>
              <li><strong>❌ Falsch:</strong> gemeinsame Potenz = k³ → <strong>✅ Richtig:</strong> die KLEINSTE vorkommende Potenz, also k² (steckt in beiden Termen).</li>
            </ul>,
            <p>Selbstkontrolle: setze k=1 ein → 2/(4+6) = 2/10 = 1/5, und 1/(2+3) = 1/5 ✓. Frage: Warum darf man bei 2k²/(4k²+6k³) nicht direkt 2k² kürzen, ohne den Nenner vorher zu faktorisieren?</p>,
          ),
          solution: <M>{'\\frac{2k^{2}}{4k^{2} + 6k^{3}} = \\frac{1}{2 + 3k}'}</M>,
        },
        {
          letter: 'h',
          text: <Frac n="1 + k²" d="1 + k³" />,
          hint: h(
            <>
              <p>Auch hier gilt: Kürzen geht nur, wenn ein <span className="hint-em">gemeinsamer Faktor</span> in Zähler und Nenner steckt. Man muss beide faktorisieren (als Produkt schreiben) und vergleichen, ob ein Faktor übereinstimmt.</p>
              <p>Nützlich ist die <span className="hint-em">Summe von Kuben</span> (Spezialformel): 1 + k³ = (1 + k)·(1 − k + k²). Damit ist der Nenner faktorisiert. Der Zähler 1 + k² lässt sich über den reellen Zahlen nicht in einfache Faktoren zerlegen (keine binomische Formel passt; es ist eine Summe von Quadraten).</p>
              <p>Vergleich der Faktoren entscheidet: Stimmt keiner überein, ist nichts kürzbar.</p>
            </>,
            <pre className="hint-code-block">{`Zähler: 1 + k²  → nicht reell faktorisierbar
Nenner: 1 + k³ = (1 + k)·(1 − k + k²)

Faktoren des Nenners mit (1 + k²) vergleichen:
  (1 + k)      ≠  (1 + k²)   → kein Treffer
  (1 − k + k²) ≠  (1 + k²)   → kein Treffer
→ Kein gemeinsamer Faktor → NICHT kürzbar`}</pre>,
            <>
              <p>Kontrast: Stünde im Zähler 1+k (statt 1+k²), würde es kürzen:</p>
              <pre className="hint-code-block">{`(1 + k)/(1 + k³) = (1 + k) / [(1 + k)(1 − k + k²)]
                 = 1/(1 − k + k²)   ← (1+k) kürzt sich`}</pre>
              <p>Das zeigt: nur der passende Faktor im Zähler ermöglicht das Kürzen.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k² gegen k³ im Nenner kürzen → <strong>✅ Richtig:</strong> 1+k² und 1+k³ sind Summen, keine Produkte — einzelne Glieder können nicht herausgekürzt werden.</li>
              <li><strong>❌ Falsch:</strong> 1+k² zu (1+k)(1+k) faktorisieren → <strong>✅ Richtig:</strong> (1+k)² = 1+2k+k² ≠ 1+k²; 1+k² hat keine reelle Faktorzerlegung.</li>
            </ul>,
            <p>Selbstkontrolle: k=2 → (1+4)/(1+8) = 5/9, keine Vereinfachung möglich → "nicht kürzbar" bestätigt. Frage: Die Faktorisierung 1+k³ = (1+k)(1−k+k²) ist korrekt — warum hilft sie trotzdem nicht, und welchen Faktor müsste der Zähler enthalten?</p>,
          ),
          solution: 'Die Ausdrücke in (c), (e) und (h) sind nicht weiter kürzbar.',
        },
      ],
    },
    {
      id: 'a4',
      nr: 4,
      title: 'Wurzeln',
      referenz: ['wurzelregeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Erinnerung: Die Wurzel einer reellen Zahl x ∈ ℝ, x ≥ 0, ist eine reelle Zahl y ≥ 0 mit y · y = x (Notation: y = √x oder y = x'}<sup>1/2</sup>{'). (Bemerkung: Die Wurzel einer reellen Zahl x ≥ 0 ist eindeutig.)\n\nBestimmen Sie √2 · √32.'}
            </>
          ),
          hint: h(
            <>
              <p>Die <span className="hint-em">Quadratwurzel</span> √a ist die (nicht-negative) Zahl, die mit sich selbst multipliziert a ergibt: √64 = 8, weil 8·8 = 64. Sie ist nur für a ≥ 0 definiert.</p>
              <p><span className="hint-em">Produktregel für Wurzeln</span>: √a · √b = √(a·b) für a, b ≥ 0. Zwei Wurzeln, die multipliziert werden, darf man unter eine gemeinsame Wurzel ziehen — und umgekehrt. Das ist nützlich, wenn das Produkt a·b ein "schönes" Quadrat ergibt.</p>
              <p>Achtung: Diese Regel gilt NUR für die Multiplikation, NICHT für die Addition: √a + √b ≠ √(a+b).</p>
            </>,
            <pre className="hint-code-block">{`1) Mit der Produktregel unter eine Wurzel ziehen:
   √2 · √32 = √(2 · 32) = √64
2) Wurzel ausrechnen: welche Zahl mal sich selbst = 64?
   8·8 = 64 → √64 = 8`}</pre>,
            <>
              <p>Weitere Beispiele desselben Typs:</p>
              <pre className="hint-code-block">{`√3 · √12 = √(3·12) = √36  = 6   (6·6=36)
√5 · √20 = √(5·20) = √100 = 10  (10·10=100)
√8 · √2  = √(8·2)  = √16  = 4   (4·4=16)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> √2 · √32 = √(2+32) = √34 (addiert statt multipliziert) → <strong>✅ Richtig:</strong> √(2·32) = √64 = 8.</li>
              <li><strong>❌ Falsch:</strong> √64 = 32 (halbiert) → <strong>✅ Richtig:</strong> √64 = 8, weil 8² = 64 (Wurzel ≠ Hälfte).</li>
              <li><strong>❌ Falsch:</strong> √a + √b = √(a+b) → <strong>✅ Richtig:</strong> diese Summenregel gilt NICHT; nur die Produktregel √a·√b = √(ab).</li>
            </ul>,
            <p>Selbstkontrolle: 8² = 64 zurückrechnen, und √2 ≈ 1,41 · √32 ≈ 5,66 ≈ 8 ✓. Frage: Warum gilt √a·√b = √(ab), aber √a+√b ≠ √(a+b)? (Tipp: rechne (√a+√b)² aus und vergleiche mit a+b.)</p>,
          ),
          solution: <M>{'\\sqrt{2}\\cdot\\sqrt{32} = 8'}</M>,
        },
        {
          letter: 'b',
          text: 'Gilt √(a + b) = √a + √b für beliebige Zahlen a, b ≥ 0?',
          hint: h(
            <>
              <p>Gefragt ist, ob eine <span className="hint-em">Allaussage</span> ("für beliebige a, b ≥ 0") stimmt. Eine Allaussage gilt nur, wenn sie für ALLE Werte stimmt. Um sie zu <span className="hint-em">widerlegen</span>, genügt ein einziges <span className="hint-em">Gegenbeispiel</span>: eine konkrete Wahl von a und b, bei der die Gleichung NICHT aufgeht.</p>
              <p>Strategie: Wähle einfache Zahlen, deren Wurzeln du kennst — <span className="hint-em">perfekte Quadrate</span> (1, 4, 9, 16, 25, …), also Zahlen mit ganzzahliger Wurzel. Rechne dann beide Seiten getrennt aus und vergleiche.</p>
              <p>Tipp: Vermeide a=0 oder b=0 — da würde √(a+b) = √a + √b zufällig stimmen und nichts widerlegen.</p>
            </>,
            <pre className="hint-code-block">{`Wähle a = 9, b = 16 (beide perfekte Quadrate):
Linke Seite:  √(a + b)  = √(9 + 16) = √25 = 5
Rechte Seite: √a + √b   = √9 + √16  = 3 + 4 = 7
5 ≠ 7  →  Gleichung stimmt nicht
→ Aussage ist FALSCH (Gegenbeispiel gefunden)`}</pre>,
            <>
              <p>Warum geht es prinzipiell schief? Quadriere die rechte Seite:</p>
              <pre className="hint-code-block">{`(√a + √b)² = a + 2·√a·√b + b
           = (a + b) + 2√(ab)
Der Extra-Term 2√(ab) ist > 0, sobald a,b > 0
→ √a + √b > √(a + b), also NIE gleich (außer a·b = 0)`}</pre>
              <p>Anderes Gegenbeispiel: a=4, b=9 → √13 ≈ 3,6 vs. 2+3 = 5.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ein passendes Beispiel (a=0,b=0: √0 = 0+0) als "Beweis" nehmen → <strong>✅ Richtig:</strong> Beispiele beweisen Allaussagen nicht; ein Gegenbeispiel widerlegt sie.</li>
              <li><strong>❌ Falsch:</strong> möglichst viele Gegenbeispiele suchen → <strong>✅ Richtig:</strong> ein einziges genügt zum Widerlegen.</li>
            </ul>,
            <p>Selbstkontrolle: prüfe dein Gegenbeispiel, indem du beide Seiten als Dezimalzahl ausrechnest — sie müssen verschieden sein. Frage: Warum reicht ein einziges Gegenbeispiel zum Widerlegen, und warum taugt a=b=0 nicht dafür?</p>,
          ),
          solution: (
            <>
              {'Nein, hier gilt nicht für alle '}<M>{'a, b \\ge 0'}</M>{' Gleichheit; zum Beispiel ist für '}<M>{'a = 9'}</M>{' und '}<M>{'b = 16'}</M>{' die Gleichung nicht erfüllt.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Machen Sie die Nenner von '}<Frac n="1" d="√5" />{' und '}<Frac n="1" d="√3 + √5" />{' jeweils rational (im Nenner darf also keine irrationale Zahl stehen).'}</>,
          hint: h(
            <>
              <p>Eine Zahl heißt <span className="hint-em">rational</span>, wenn sie als Bruch ganzer Zahlen geschrieben werden kann; eine Wurzel wie √5 ist <em>irrational</em>. <span className="hint-em">Den Nenner rational machen</span> heißt: den Bruch so umformen, dass im Nenner keine Wurzel mehr steht. Das Werkzeug ist <span className="hint-em">Erweitern</span> (Zähler und Nenner mit demselben Ausdruck malnehmen — der Wert bleibt gleich).</p>
              <ul>
                <li>Nenner = √k: mit √k/√k erweitern, denn √k·√k = k (Wurzel verschwindet).</li>
                <li>Nenner = √a + √b: mit dem <span className="hint-em">Konjugat</span> (√a − √b)/(√a − √b) erweitern. Konjugat = derselbe Ausdruck mit umgekehrtem Vorzeichen. Grund ist die 3. binomische Formel (x+y)(x−y) = x²−y², womit (√a+√b)(√a−√b) = (√a)²−(√b)² = a − b — wurzelfrei!</li>
              </ul>
            </>,
            <>
              <p>So macht man beide Nenner rational:</p>
              <pre className="hint-code-block">{`Teil 1 — 1/√5:
  mit √5/√5 erweitern:
  1/√5 = (1·√5)/(√5·√5) = √5/5    (√5·√5 = 5)

Teil 2 — 1/(√3 + √5):
  Konjugat = (√3 − √5), damit erweitern:
  = [1·(√3 − √5)] / [(√3 + √5)(√3 − √5)]
  Nenner mit (x+y)(x−y) = x²−y²:
  (√3 + √5)(√3 − √5) = (√3)² − (√5)² = 3 − 5 = −2
  = (√3 − √5) / (−2)`}</pre>
            </>,
            <>
              <p>Weitere Beispiele:</p>
              <pre className="hint-code-block">{`1/√7 = √7/(√7·√7) = √7/7

1/(√2 + √3) · (√2 − √3)/(√2 − √3)
 = (√2 − √3) / ((√2)² − (√3)²)
 = (√2 − √3) / (2 − 3) = (√2 − √3)/(−1) = √3 − √2`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> mit (√3+√5) statt (√3−√5) erweitern → <strong>✅ Richtig:</strong> Konjugat = umgekehrtes Vorzeichen, also √3−√5; nur so fällt die Wurzel weg.</li>
              <li><strong>❌ Falsch:</strong> (√3+√5)(√3−√5) = √3−√5 oder 3+5 → <strong>✅ Richtig:</strong> (x+y)(x−y) = x²−y² → (√3)²−(√5)² = 3−5 = −2.</li>
              <li><strong>❌ Falsch:</strong> 1/√5 · √5/√5 = 1/5 (Zähler-Wurzel vergessen) → <strong>✅ Richtig:</strong> der Zähler wird mitmultipliziert: √5/5.</li>
            </ul>,
            <p>Selbstkontrolle: √5/5 ≈ 2,236/5 ≈ 0,447 — passt zu 1/√5 ≈ 1/2,236 ≈ 0,447 ✓. Frage: Welche algebraische Formel sorgt dafür, dass (√3+√5)(√3−√5) wurzelfrei wird, und warum ist genau das Konjugat der richtige Erweiterungsfaktor?</p>,
          ),
          solution: (
            <>
              {'Wir erweitern mit '}<M>{'\\frac{\\sqrt{5}}{\\sqrt{5}}'}</M>{' und erhalten'}
              {'\n'}
              <M>{'\\frac{1}{\\sqrt{5}} = \\frac{1}{\\sqrt{5}}\\cdot\\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}'}</M>
              {'\n'}
              {'Mit Hilfe der 3. binomischen Formel berechnen wir'}
              {'\n'}
              <M>{'\\frac{1}{\\sqrt{3}+\\sqrt{5}} = \\frac{1}{\\sqrt{3}+\\sqrt{5}}\\cdot\\frac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\frac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\frac{\\sqrt{3}-\\sqrt{5}}{-2}'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'a5',
      nr: 5,
      title: 'Geraden skizzieren',
      referenz: ['geradengleichung'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Skizzieren Sie die Geraden, welche durch folgende Gleichungen gegeben sind:\n\n(a) y = x,',
          hint: h(
            <>
              <p>Im <span className="hint-em">Koordinatensystem</span> beschreibt ein Punkt (x, y) eine Position: x nach rechts, y nach oben. Eine <span className="hint-em">lineare Funktion</span> (Gerade) hat die Form <span className="hint-em">y = m·x + b</span>:</p>
              <ul>
                <li><span className="hint-em">m = Steigung</span>: wie viele Einheiten die Gerade nach oben geht, wenn man 1 nach rechts geht (Verhältnis "hoch pro rechts").</li>
                <li><span className="hint-em">b = y-Achsenabschnitt</span>: der y-Wert bei x = 0, also wo die Gerade die senkrechte y-Achse schneidet.</li>
              </ul>
              <p>Zum Skizzieren genügen zwei Punkte: erst (0, b), dann mit der Steigung einen zweiten Punkt finden. Für y = x ist m = 1 (vor dem x steht unsichtbar eine 1) und b = 0 (kein konstanter Summand).</p>
            </>,
            <pre className="hint-code-block">{`y = x  →  m = 1, b = 0
1) b = 0 → erster Punkt auf der y-Achse: (0, 0)
2) Steigung m = 1 anwenden: 1 nach rechts, 1 nach oben
   → zweiter Punkt: (1, 1)   (noch einer: (2, 2))
3) Gerade durch (0,0) und (1,1) ziehen und verlängern
   → 45°-Gerade durch den Ursprung`}</pre>,
            <>
              <p>Anderes Beispiel: y = 2x + 1</p>
              <pre className="hint-code-block">{`m = 2, b = 1
b=1 → Startpunkt (0, 1)
m=2 → 1 rechts, 2 hoch → (1, 3) → (2, 5)
Gerade durch diese Punkte`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> m und b vertauschen (m=0, b=1) → <strong>✅ Richtig:</strong> m ist die Zahl VOR dem x (hier 1), b der allein stehende Summand (hier 0).</li>
              <li><strong>❌ Falsch:</strong> "m=1 heißt, die Gerade beginnt bei x=1" → <strong>✅ Richtig:</strong> m=1 heißt: pro 1 nach rechts geht es 1 nach oben (Richtung, kein Startpunkt).</li>
            </ul>,
            <p>Selbstkontrolle: setze ein paar x-Werte ein (x=2 → y=2, x=−1 → y=−1) und prüfe, ob diese Punkte auf deiner Geraden liegen. Frage: Was bedeutet m=1 geometrisch, und wie unterscheidet sich die Gerade bei m=2 (steiler) bzw. m=0,5 (flacher)?</p>,
          ),
          solution: 'Gerade durch den Ursprung mit Steigung 1 (45°-Winkel nach rechts oben).',
          graph: {
            lines: [{ m: 1, b: 0, label: 'y = x' }],
            xMin: -3, xMax: 3, yMin: -3, yMax: 3,
          },
        },
        {
          letter: 'b',
          text: '(b) y = −2x + 1,',
          hint: h(
            <>
              <p>Wieder Form <span className="hint-em">y = m·x + b</span>. Hier ist m = −2 (Steigung) und b = 1 (y-Achsenabschnitt). Eine <span className="hint-em">negative Steigung</span> (m &lt; 0) bedeutet: die Gerade <em>fällt</em> von links nach rechts.</p>
              <p>Der <span className="hint-em">Betrag</span> |m| (die Zahl ohne Vorzeichen) gibt die Steilheit an: |m| = 2 heißt, pro 1 Einheit nach rechts geht es 2 Einheiten nach <em>unten</em>. Die <span className="hint-em">Nullstelle</span> (Schnittpunkt mit der x-Achse) findet man, indem man y = 0 setzt und nach x auflöst.</p>
            </>,
            <pre className="hint-code-block">{`y = −2x + 1  →  m = −2, b = 1
1) b = 1 → Startpunkt auf der y-Achse: (0, 1)
2) m = −2 → 1 nach rechts, 2 nach unten → (1, −1)
3) Gerade durch (0,1) und (1,−1) zeichnen, verlängern
   (nach links steigt sie: (−1, 3))
4) Nullstelle: y = 0 setzen:
   0 = −2x + 1 → 2x = 1 → x = 1/2  → Punkt (1/2, 0)`}</pre>,
            <>
              <p>Anderes Beispiel: y = −x + 3</p>
              <pre className="hint-code-block">{`m=−1, b=3:  (0,3) → 1 rechts, 1 runter → (1,2) → (2,1)
Nullstelle: 0 = −x + 3 → x = 3 → (3, 0)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> negative Steigung als steigende Gerade zeichnen → <strong>✅ Richtig:</strong> m=−2 → 1 rechts, 2 runter (fallende Gerade).</li>
              <li><strong>❌ Falsch:</strong> b=1 vergessen und durch (0,0) zeichnen → <strong>✅ Richtig:</strong> Startpunkt ist (0, 1), denn b=1.</li>
            </ul>,
            <p>Selbstkontrolle: setze x=0 (→ y=1) und x=1 (→ y=−1) ein und prüfe die Punkte; die Nullstelle x=1/2 in die Gleichung einsetzen ergibt y=0. Frage: Was bewirkt das negative Vorzeichen von m für die Richtung, und wie ändert |m|=2 die Steilheit gegenüber m=−½?</p>,
          ),
          solution: <>{'Gerade fällt steil nach rechts. Nullstelle bei x = '}<Frac n="1" d="2" />{'.'}</>,
          graph: {
            lines: [{ m: -2, b: 1, label: 'y = −2x + 1' }],
            xMin: -1, xMax: 2, yMin: -2, yMax: 4,
          },
        },
        {
          letter: 'c',
          text: <>{'(c) y = '}<Frac n="1" d="2" />{'x − 2,'}</>,
          hint: h(
            <>
              <p>Form <span className="hint-em">y = m·x + b</span> mit m = 1/2 (Steigung) und b = −2 (y-Achsenabschnitt). Eine <span className="hint-em">gebrochene Steigung</span> m = Zähler/Nenner liest man am besten als "<span className="hint-em">Nenner nach rechts, Zähler nach oben</span>": m = 1/2 → 2 Einheiten rechts, 1 Einheit hoch. So landet man auf ganzen Gitterpunkten (statt mit Halbschritten zu hantieren).</p>
              <p>Weil m positiv ist, steigt die Gerade; weil |m| = 1/2 &lt; 1, steigt sie flach. Die Nullstelle (y = 0) bestimmt man durch Auflösen nach x.</p>
            </>,
            <pre className="hint-code-block">{`y = (1/2)x − 2  →  m = 1/2, b = −2
1) b = −2 → Startpunkt (0, −2)
2) m = 1/2 → 2 rechts, 1 hoch:
   (0,−2) → (2,−1) → (4, 0)
3) Gerade durch die Punkte zeichnen, verlängern
4) Nullstelle: 0 = (1/2)x − 2 → (1/2)x = 2 → x = 4
   → Punkt (4, 0)`}</pre>,
            <>
              <p>Anderes Beispiel: y = (1/3)x + 1</p>
              <pre className="hint-code-block">{`m=1/3, b=1:  Start (0,1)
3 rechts, 1 hoch → (3, 2) → (6, 3)
flache, steigende Gerade`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> m=1/2 als "0,5 rechts, 0,5 hoch" zeichnen → <strong>✅ Richtig:</strong> Nenner rechts, Zähler hoch: 2 rechts, 1 hoch (trifft Gitterpunkte).</li>
              <li><strong>❌ Falsch:</strong> y-Achsenabschnitt = +2 → <strong>✅ Richtig:</strong> b=−2; bei x=0 ist y = (1/2)·0 − 2 = −2, Start (0, −2).</li>
            </ul>,
            <p>Selbstkontrolle: setze x=4 ein → y = (1/2)·4 − 2 = 0 ✓ (Nullstelle). Frage: Warum ist "2 rechts, 1 hoch" praktischer als "0,5 rechts, 0,5 hoch" — was passiert beim Zeichnen mit halben Schritten?</p>,
          ),
          solution: 'Gerade steigt flach nach rechts. Nullstelle bei x = 4.',
          graph: {
            lines: [{ m: 0.5, b: -2, label: 'y = x/2 − 2' }],
            xMin: -1, xMax: 5, yMin: -3, yMax: 1,
          },
        },
        {
          letter: 'd',
          text: '(d) y = 4.',
          hint: h(
            <>
              <p>y = 4 enthält gar kein x. Das ist eine <span className="hint-em">konstante Funktion</span> y = c: egal welches x man einsetzt, y ist immer 4. In der Form y = m·x + b heißt das m = 0 und b = 4 (der x-Term fällt weg, weil 0·x = 0).</p>
              <p><span className="hint-em">Steigung 0</span> bedeutet "kein Anstieg" → die Gerade verläuft <span className="hint-em">waagerecht</span> (horizontal), parallel zur x-Achse, in der Höhe y = 4.</p>
              <p>Wichtige Unterscheidung: y = 4 ist eine waagerechte Linie. x = 4 wäre dagegen eine <em>senkrechte</em> Linie (und keine Funktion, weil zu x=4 unendlich viele y-Werte gehören).</p>
            </>,
            <pre className="hint-code-block">{`y = 4  →  m = 0, b = 4
1) y ist überall 4 → wähle zwei Punkte, z.B. (0, 4) und (3, 4)
2) Beide haben dieselbe Höhe → waagerechte Linie auf Höhe y=4
3) Linie nach links und rechts verlängern`}</pre>,
            <>
              <p>Weitere konstante Funktionen:</p>
              <pre className="hint-code-block">{`y = −2  → waagerechte Linie auf Höhe y = −2
y = 0   → genau die x-Achse selbst`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> senkrechte Linie bei x=4 zeichnen → <strong>✅ Richtig:</strong> y=4 ist waagerecht (parallel zur x-Achse); x=4 wäre senkrecht.</li>
              <li><strong>❌ Falsch:</strong> nur den Punkt (0,4) markieren → <strong>✅ Richtig:</strong> alle Punkte mit y=4 verbinden: (−3,4), (0,4), (2,4) … ergeben eine durchgehende Linie.</li>
            </ul>,
            <p>Selbstkontrolle: setze beliebige x-Werte ein (x=−2, x=5) — der y-Wert bleibt immer 4, alle Punkte liegen auf einer Höhe. Frage: Welche Steigung hat y=4, und warum ergibt das eine waagerechte (statt steigende oder fallende) Gerade?</p>,
          ),
          solution: 'Waagerechte Linie bei y = 4, parallel zur x-Achse.',
          graph: {
            lines: [{ m: 0, b: 4, label: 'y = 4' }],
            xMin: -4, xMax: 4, yMin: 0, yMax: 5,
          },
        },
        {
          letter: 'e',
          text: '(e) Bestimmen Sie den Schnittpunkt der Geraden aus (b) und (c).',
          hint: h(
            <>
              <p>Der <span className="hint-em">Schnittpunkt</span> zweier Geraden ist der eine Punkt (x, y), der auf BEIDEN Geraden liegt — dort haben beide denselben x- und denselben y-Wert. Die beiden Geraden sind hier (b) y = −2x + 1 und (c) y = (1/2)x − 2.</p>
              <p><span className="hint-em">Gleichsetzungsverfahren</span>: Weil am Schnittpunkt beide y gleich sind, setzt man die rechten Seiten gleich (−2x + 1 = (1/2)x − 2) und löst nach x auf. Dann setzt man dieses x in eine der Gleichungen ein, um y zu bekommen.</p>
              <p>Sonderfälle: gleiche Steigung m, aber verschiedenes b → parallel, kein Schnittpunkt. Gleiche m und b → identische Gerade, unendlich viele Schnittpunkte. Hier sind m verschieden (−2 ≠ 1/2) → genau ein Schnittpunkt.</p>
            </>,
            <>
              <pre className="hint-code-block">{`1) Rechte Seiten gleichsetzen:
   −2x + 1 = (1/2)x − 2

2) x-Terme auf eine, Zahlen auf die andere Seite:
   +2 auf beiden Seiten und −(1/2)x auf beiden Seiten:
   1 + 2 = (1/2)x + 2x
   3 = (1/2 + 2)x = (5/2)x

3) Nach x auflösen (mal 2/5 bzw. durch 5/2):
   x = 3 ÷ (5/2) = 3 · (2/5) = 6/5

4) x in eine Gleichung einsetzen, z.B. (b):
   y = −2·(6/5) + 1 = −12/5 + 5/5 = −7/5

5) Schnittpunkt: (6/5, −7/5)`}</pre>
              <p>Probe in (c): y = (1/2)·(6/5) − 2 = 3/5 − 10/5 = −7/5 ✓ (gleicher y-Wert).</p>
            </>,
            <>
              <p>Einfacheres Beispiel: y = x und y = −x + 2</p>
              <pre className="hint-code-block">{`x = −x + 2
2x = 2 → x = 1
y = 1   → Schnittpunkt (1, 1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> beim Umstellen Vorzeichen verlieren: −2x + (1/2)x = +(5/2)x → <strong>✅ Richtig:</strong> −2x + (1/2)x = −(3/2)x; bringt man stattdessen (1/2)x nach links, ergibt sich (5/2)x auf der x-Seite.</li>
              <li><strong>❌ Falsch:</strong> x nur in den Gleichsetzungsausdruck statt in eine Geradengleichung einsetzen → <strong>✅ Richtig:</strong> x = 6/5 in y = −2x+1 einsetzen → y = −7/5.</li>
              <li><strong>❌ Falsch:</strong> nur in eine Gleichung prüfen → <strong>✅ Richtig:</strong> Probe in BEIDE Gleichungen; beide müssen denselben y-Wert liefern.</li>
            </ul>,
            <p>Selbstkontrolle: setze (6/5, −7/5) in beide Gleichungen ein — beide müssen −7/5 ergeben (siehe Probe). Frage: Warum setzt man gerade die rechten Seiten gleich, und was bedeutet diese Gleichheit anschaulich für den gesuchten Punkt?</p>,
          ),
          solution: (
            <>
              {'Die Geraden schneiden sich im Punkt '}<M>{'\\left(\\frac{6}{5}, -\\frac{7}{5}\\right)'}</M>{'.'}
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
      referenz: ['geradengleichung'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Geben Sie jeweils die zugehörige Geradengleichung an.\n\n(a)',
          hint: h(
            <>
              <p>Ziel: aus zwei gegebenen Punkten die Gleichung <span className="hint-em">y = m·x + b</span> aufstellen. Zwei Punkte legen eine Gerade eindeutig fest.</p>
              <p>Die Angaben sind als Punkte zu lesen: "<span className="hint-em">schneidet die y-Achse bei 2</span>" heißt, bei x = 0 ist y = 2 → Punkt (0, 2). "<span className="hint-em">schneidet die x-Achse bei 8</span>" heißt, bei y = 0 ist x = 8 → Punkt (8, 0).</p>
              <p><span className="hint-em">Steigungsformel</span>: m = (y₂ − y₁) / (x₂ − x₁) = Δy/Δx ("Höhenunterschied geteilt durch Rechtsunterschied"). Der <span className="hint-em">y-Achsenabschnitt b</span> lässt sich direkt aus dem Punkt (0, 2) ablesen: b = 2 (denn b ist der y-Wert bei x = 0).</p>
            </>,
            <pre className="hint-code-block">{`Punkte: (x₁,y₁) = (0, 2) und (x₂,y₂) = (8, 0)

1) Steigung mit der Formel:
   m = (y₂ − y₁)/(x₂ − x₁) = (0 − 2)/(8 − 0)
     = −2/8 = −1/4

2) y-Achsenabschnitt direkt ablesen:
   Punkt (0, 2) liegt auf der y-Achse → b = 2

3) Gleichung zusammensetzen:
   y = −(1/4)x + 2`}</pre>,
            <>
              <p>Anderes Beispiel: y-Achse bei 5, x-Achse bei 10</p>
              <pre className="hint-code-block">{`Punkte (0,5) und (10,0)
m = (0 − 5)/(10 − 0) = −5/10 = −1/2
b = 5  (aus (0,5))
y = −(1/2)x + 5`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> m = (x₂−x₁)/(y₂−y₁) (Bruch verkehrt herum) → <strong>✅ Richtig:</strong> m = Δy/Δx = (y₂−y₁)/(x₂−x₁), immer y-Differenz oben.</li>
              <li><strong>❌ Falsch:</strong> b umständlich ausrechnen → <strong>✅ Richtig:</strong> Punkt (0, 2) liegt auf der y-Achse → b = 2 direkt ablesbar.</li>
            </ul>,
            <p>Selbstkontrolle: setze x=8 in y = −(1/4)x + 2 ein → y = −2 + 2 = 0 ✓ (zweiter Punkt liegt drauf). Frage: Welche zwei Informationen legen eine Gerade fest, warum reicht ein Punkt nicht, und welche Größe (m oder b) konnte man hier sofort ablesen?</p>,
          ),
          solution: <M>{'y = -\\frac{1}{4}x + 2'}</M>,
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
          text: '(b)',
          hint: h(
            <>
              <p>Der <span className="hint-em">Ursprung</span> ist der Punkt (0, 0), wo sich die Achsen kreuzen. Geht eine Gerade durch den Ursprung, dann ist bei x = 0 auch y = 0 — also ist der <span className="hint-em">y-Achsenabschnitt b = 0</span>. Die Gleichung y = m·x + b vereinfacht sich zu <span className="hint-em">y = m·x</span> (Ursprungsgerade).</p>
              <p>Es fehlt nur noch m. Mit der <span className="hint-em">Steigungsformel</span> m = (y₂ − y₁)/(x₂ − x₁) und den Punkten (0,0) und (2,−1) erhält man die Steigung. (Bei einer Ursprungsgeraden ist das einfach m = y/x eines beliebigen anderen Punktes.)</p>
            </>,
            <pre className="hint-code-block">{`Punkte: (0, 0) und (2, −1)

1) b = 0   (Gerade geht durch den Ursprung)

2) Steigung mit der Formel:
   m = (y₂ − y₁)/(x₂ − x₁) = (−1 − 0)/(2 − 0)
     = −1/2

3) Gleichung (b=0 weglassen):
   y = −(1/2)x`}</pre>,
            <>
              <p>Anderes Beispiel: durch (0,0) und (3, 6)</p>
              <pre className="hint-code-block">{`b = 0
m = (6 − 0)/(3 − 0) = 6/3 = 2
y = 2x`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> b extra ausrechnen → <strong>✅ Richtig:</strong> durch den Ursprung → b = 0 sofort.</li>
              <li><strong>❌ Falsch:</strong> m = Δx/Δy = 2/(−1) = −2 (x und y vertauscht) → <strong>✅ Richtig:</strong> m = Δy/Δx = (−1−0)/(2−0) = −1/2.</li>
            </ul>,
            <p>Selbstkontrolle: setze x=2 in y = −(1/2)x ein → y = −1 ✓ (gegebener Punkt liegt drauf). Frage: Welche Vereinfachung bringt der Ursprung für y = mx + b, und warum genügt danach ein einziger weiterer Punkt zur Bestimmung der Gleichung?</p>,
          ),
          solution: <M>{'y = -\\frac{1}{2}x'}</M>,
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
