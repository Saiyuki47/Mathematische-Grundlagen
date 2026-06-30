import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt3: MatheBlatt = {
  id: 'blatt3',
  nr: '3',
  titel: 'Summenzeichen, Binomialkoeffizienten, vollständige Induktion',
  aufgaben: [
    {
      id: 'b3a1',
      nr: 1,
      title: 'Summenzeichen',
      referenz: ['summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Schreiben Sie folgende Ausdrücke mit Hilfe des Summenzeichens:\n\n1² + 2³ + 3⁴ + 4⁵ + 5⁶',
          hint: h(
            <>
              <p>Das <span className="hint-em">Summenzeichen Σ</span> (großes griechisches Sigma) ist eine Kurzschreibweise für eine Summe vieler gleichartiger Terme. Die Definition lautet:</p>
              <pre className="hint-code-block">{`Σ(k=a bis b) f(k) = f(a) + f(a+1) + f(a+2) + … + f(b)`}</pre>
              <p>Dabei heißt <span className="hint-em">k</span> der <span className="hint-em">Laufindex</span> (eine Zählvariable, die nacheinander alle ganzen Zahlen von a bis b annimmt), <span className="hint-em">a</span> der <span className="hint-em">Startindex</span> (untere Grenze) und <span className="hint-em">b</span> der <span className="hint-em">Endindex</span> (obere Grenze). <span className="hint-em">f(k)</span> ist der <span className="hint-em">Summand</span> — eine Formel, die für jedes k ausgerechnet wird.</p>
              <p>Eine Summe in das Σ-Zeichen "übersetzen" heißt also drei Dinge bestimmen: (1) die Formel f(k) für den k-ten Term, (2) den Startindex a, (3) den Endindex b. Werkzeug dafür: Term und Index nebeneinander schreiben (tabellieren) und schauen, wie Basis und Exponent von k abhängen.</p>
              <p>Eine <span className="hint-em">Potenz</span> aⁿ bedeutet "a mal sich selbst, n-mal" (z. B. 2³ = 2·2·2 = 8). a ist die <span className="hint-em">Basis</span>, n der <span className="hint-em">Exponent</span>. Achte genau darauf, was hier von k abhängt: die Basis, der Exponent oder beide.</p>
            </>,
            <>
              <p>So findet man die Σ-Form von 1² + 2³ + 3⁴ + 4⁵ + 5⁶ Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) Terme und Index k nebeneinander schreiben.
   Wir probieren k=1 für den ersten Term:
   Term 1:  1²   → Basis 1, Exponent 2   → k=1
   Term 2:  2³   → Basis 2, Exponent 3   → k=2
   Term 3:  3⁴   → Basis 3, Exponent 4   → k=3
   Term 4:  4⁵   → Basis 4, Exponent 5   → k=4
   Term 5:  5⁶   → Basis 5, Exponent 6   → k=5

2) Zusammenhang Basis ↔ k erkennen:
   Basis = 1,2,3,4,5 = k          → Basis ist k

3) Zusammenhang Exponent ↔ k erkennen:
   Exponent = 2,3,4,5,6 = k+1     → Exponent ist k+1
   (jeder Exponent ist um 1 größer als die Basis)

4) Summandenformel zusammensetzen:
   f(k) = k^(k+1)   (Basis k, Exponent k+1)

5) Grenzen: erster Term bei k=1, letzter bei k=5
   → Σ(k=1 bis 5) k^(k+1)

6) Kontrolle (warum?): einsetzen am Anfang und Ende:
   k=1: 1^(1+1) = 1² ✓     k=5: 5^(5+1) = 5⁶ ✓`}</pre>
              <p>Warum k+1 als Exponent und nicht k? Weil bei k=1 der Exponent 2 sein muss; 1+1 = 2 passt, k allein (=1) wäre falsch.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Typs: 1 + 4 + 9 + 16 in Σ-Form bringen.</p>
              <pre className="hint-code-block">{`Term 1: 1 = 1²   → k=1
Term 2: 4 = 2²   → k=2
Term 3: 9 = 3²   → k=3
Term 4: 16 = 4²  → k=4
Basis = k, Exponent = 2 (konstant) → f(k) = k²
Grenzen: k=1 bis 4
→ 1 + 4 + 9 + 16 = Σ(k=1 bis 4) k²
Kontrolle: k=1 → 1²=1 ✓, k=4 → 4²=16 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k=0 als Startindex → <strong>✅ Richtig:</strong> Bei k=0 wäre der erste Term 0^(0+1) = 0, der erste Term ist aber 1²=1. Der Startindex ist k=1, weil dort f(1) = 1² den ersten Term trifft.</li>
              <li><strong>❌ Falsch:</strong> f(k) = kᵏ (Exponent = k) → <strong>✅ Richtig:</strong> f(k) = k^(k+1) (Exponent = k+1). Begründung/Probe bei k=2: k^(k+1) = 2³ = 8 ✓ (zweiter Term), aber kᵏ = 2² = 4 ✗ (falsch).</li>
              <li><strong>❌ Falsch:</strong> Endindex k=6 wählen (weil größter Exponent 6) → <strong>✅ Richtig:</strong> der Index zählt die Terme, es gibt 5 Terme → Endindex k=5; der Exponent 6 = k+1 entsteht automatisch aus f(k).</li>
            </ul>,
            <p>Selbstkontrolle: Setze in Σ(k=1 bis 5) k^(k+1) nacheinander k=1,2,3,4,5 ein — kommen genau 1², 2³, 3⁴, 4⁵, 5⁶ heraus? Frage: Worin unterscheidet sich k² (Index nur als Basis, fester Exponent) von k^(k+1) (Index in Basis UND Exponent), und warum ist k^(k+1) zwar leicht zu schreiben, aber mühsam auszurechnen?</p>,
          ),
          solution: '5\nΣ k^(k+1) = 1² + 2³ + 3⁴ + 4⁵ + 5⁶\nk=1',
        },
        {
          letter: 'b',
          text: <>{'Schreiben Sie folgende Ausdrücke mit Hilfe des Summenzeichens:\n\n1 + '}<Frac n="1" d="3" />{' + '}<Frac n="1" d="9" />{' + '}<Frac n="1" d="27" /></>,
          hint: h(
            <>
              <p>Wieder soll eine Summe ins <span className="hint-em">Summenzeichen Σ</span> übersetzt werden: Σ(k=a bis b) f(k) = f(a) + … + f(b). Gesucht sind Summandenformel f(k), Startindex und Endindex.</p>
              <p>Eine <span className="hint-em">geometrische Folge</span> ist eine Zahlenfolge, bei der man von einem Term zum nächsten immer mit derselben Zahl <span className="hint-em">multipliziert</span>. Diese feste Zahl heißt <span className="hint-em">Quotient q</span> und man findet sie, indem man einen Term durch seinen Vorgänger teilt: q = (zweiter Term)/(erster Term). Den k-ten Term schreibt man als f(k) = a₀·qᵏ, wobei a₀ der erste Term ist.</p>
              <p>Wichtig ist die <span className="hint-em">Potenzregel q⁰ = 1</span>: jede Zahl (außer 0) hoch 0 ergibt 1. Deshalb startet man bei geometrischen Folgen meist mit <span className="hint-em">k=0</span>, denn dann ist der erste Term a₀·q⁰ = a₀·1 = a₀ — genau der sichtbare erste Term, ohne zusätzlichen Faktor.</p>
              <p>Hier ist der erste Term 1, also a₀ = 1, und f(k) = 1·qᵏ = qᵏ.</p>
            </>,
            <>
              <p>So findet man die Σ-Form von 1 + 1/3 + 1/9 + 1/27:</p>
              <pre className="hint-code-block">{`1) Ist es eine geometrische Folge? Quotient testen:
   (1/3) / 1   = 1/3
   (1/9) / (1/3) = (1/9)·(3/1) = 3/9 = 1/3
   (1/27)/(1/9)  = (1/27)·(9/1) = 9/27 = 1/3
   → immer derselbe Quotient q = 1/3 ✓ geometrisch

2) Erster Term a₀ = 1, also f(k) = 1·(1/3)ᵏ = (1/3)ᵏ

3) Startindex so wählen, dass der erste Term passt:
   (1/3)⁰ = 1 (jede Zahl hoch 0 = 1) → k=0 trifft die 1
   → Startindex k=0

4) Endindex: es gibt 4 Terme (k=0,1,2,3)
   → Endindex k=3

5) Ergebnis: Σ(k=0 bis 3) (1/3)ᵏ

6) Kontrolle (warum?): jeden Index einsetzen:
   k=0: (1/3)⁰ = 1
   k=1: (1/3)¹ = 1/3
   k=2: (1/3)² = 1/9
   k=3: (1/3)³ = 1/27  ✓`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: 1 + 2 + 4 + 8 in Σ-Form.</p>
              <pre className="hint-code-block">{`Quotient: 2/1 = 2, 4/2 = 2, 8/4 = 2 → q=2, geometrisch
Erster Term 1 → f(k) = 2ᵏ
k=0: 2⁰=1, k=1: 2¹=2, k=2: 2²=4, k=3: 2³=8 ✓
→ 1 + 2 + 4 + 8 = Σ(k=0 bis 3) 2ᵏ`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k=1 als Startindex → <strong>✅ Richtig:</strong> k=0, denn (1/3)⁰ = 1 ist der erste Term. Mit k=1 würde man bei (1/3)¹ = 1/3 starten und die führende 1 verlieren.</li>
              <li><strong>❌ Falsch:</strong> f(k) = 1/k (Idee: 1/1, 1/2, 1/3, …) → <strong>✅ Richtig:</strong> f(k) = (1/3)ᵏ. Probe: 1/k gäbe 1, 1/2, 1/3, 1/4 (falsch); (1/3)ᵏ gibt 1, 1/3, 1/9, 1/27 (richtig). Die Nenner verdreifachen sich, sie zählen nicht 1,2,3,4 hoch.</li>
              <li><strong>❌ Falsch:</strong> Quotient q = 3 (weil Nenner 1,3,9,27 wachsen) → <strong>✅ Richtig:</strong> die Werte werden kleiner, also q = 1/3 &lt; 1; q ist Term-durch-Vorgänger, nicht Nenner-durch-Nenner.</li>
            </ul>,
            <p>Selbstkontrolle: Setze in Σ(k=0 bis 3) (1/3)ᵏ die Indizes 0,1,2,3 ein — kommt 1, 1/3, 1/9, 1/27 heraus? Frage: Warum ist k=0 der natürliche Start für geometrische Folgen (was macht q⁰ = 1 so praktisch), und welchen Term verliert man, wenn man fälschlich bei k=1 beginnt?</p>,
          ),
          solution: '3\nΣ (1/3)ᵏ = 1 + 1/3 + 1/9 + 1/27\nk=0',
        },
        {
          letter: 'c',
          text: 'Schreiben Sie folgende Ausdrücke mit Hilfe des Summenzeichens:\n\n4 + 7 + 10 + 13 + 16 + 19 + 22',
          hint: h(
            <>
              <p>Erneut: eine Summe ins <span className="hint-em">Summenzeichen Σ</span> übersetzen, also f(k), Startindex und Endindex finden. Σ(k=a bis b) f(k) = f(a) + … + f(b).</p>
              <p>Eine <span className="hint-em">arithmetische Folge</span> ist eine Zahlenfolge, bei der man von einem Term zum nächsten immer dieselbe Zahl <span className="hint-em">addiert</span> (im Gegensatz zur geometrischen Folge, wo man multipliziert). Diese feste Zahl heißt <span className="hint-em">Differenz d</span> und man findet sie als d = (Term) − (Vorgänger).</p>
              <p>Den k-ten Term schreibt man mit Startindex k=0 als <span className="hint-em">f(k) = a₀ + d·k</span>, wobei a₀ der erste Term ist. Idee: bei k=0 ist f(0) = a₀ + d·0 = a₀ (erster Term), bei jedem Schritt kommt genau d dazu — das modelliert das ständige Addieren von d.</p>
              <p><span className="hint-em">Anzahl der Terme zählen</span>: Läuft k von 0 bis b, so gibt es b+1 Terme (die Werte 0,1,2,…,b — also einer mehr als b, weil die 0 mitzählt). Bei n Termen ist der Endindex daher b = n−1.</p>
            </>,
            <>
              <p>So findet man die Σ-Form von 4 + 7 + 10 + 13 + 16 + 19 + 22:</p>
              <pre className="hint-code-block">{`1) Ist die Differenz konstant? d = Term − Vorgänger:
   7−4=3,  10−7=3,  13−10=3,  16−13=3,
   19−16=3,  22−19=3
   → immer d = 3 ✓ arithmetische Folge

2) Erster Term a₀ = 4, Differenz d = 3:
   f(k) = a₀ + d·k = 4 + 3k

3) Startindex k=0 (damit f(0) = 4 den ersten Term trifft)

4) Endindex: 7 Terme zählen → Endindex = 7−1 = 6
   (k läuft 0,1,2,3,4,5,6 = 7 Werte)

5) Ergebnis: Σ(k=0 bis 6) (4 + 3k)

6) Kontrolle (warum?): einsetzen am Anfang/Ende:
   k=0: 4+3·0 = 4  ✓ (erster Term)
   k=6: 4+3·6 = 4+18 = 22  ✓ (letzter Term)`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: 1 + 3 + 5 + 7 (ungerade Zahlen) in Σ-Form.</p>
              <pre className="hint-code-block">{`Differenz: 3−1=2, 5−3=2, 7−5=2 → d=2, a₀=1
f(k) = 1 + 2k
k=0: 1+0=1, k=1: 1+2=3, k=2: 1+4=5, k=3: 1+6=7 ✓
4 Terme → Endindex 3
→ 1 + 3 + 5 + 7 = Σ(k=0 bis 3) (1 + 2k)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Endindex k=7 (weil 7 Terme) → <strong>✅ Richtig:</strong> Endindex k=6. Bei Start k=0 ergeben die Indizes 0,1,2,3,4,5,6 genau 7 Terme; der größte Index ist 7−1=6, nicht 7.</li>
              <li><strong>❌ Falsch:</strong> f(k) = 3k (Startterm vergessen) → <strong>✅ Richtig:</strong> f(k) = 4 + 3k. Probe: 3k gäbe bei k=0 den Wert 0, der erste Term ist aber 4. Man darf a₀ = 4 nicht weglassen.</li>
              <li><strong>❌ Falsch:</strong> f(k) = 4 + 3k erst ab k=1 nehmen → <strong>✅ Richtig:</strong> mit Start k=0; sonst beginnt die Summe bei 4+3 = 7 und der erste Term 4 fehlt.</li>
            </ul>,
            <p>Selbstkontrolle: Setze in Σ(k=0 bis 6) (4 + 3k) die Indizes 0 bis 6 ein — kommt 4,7,10,13,16,19,22 heraus? Frage: Warum hat eine Folge mit Indizes k=0 bis k=n genau n+1 Terme (nicht n), und warum stellt f(k) = 3k ohne den Startterm 4 diese Summe falsch dar?</p>,
          ),
          solution: '6\nΣ (4 + 3k) = 4 + 7 + 10 + 13 + 16 + 19 + 22\nk=0',
        },
      ],
    },
    {
      id: 'b3a2',
      nr: 2,
      title: 'Identitäten mit dem Binomischen Lehrsatz',
      referenz: ['binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie für n ∈ ℕ* folgende Identitäten mit Hilfe des Binomischen Lehrsatzes:\n\nΣ(k=0 bis n) C(n,k) = 2ⁿ',
          hint: h(
            <>
              <p>Ein <span className="hint-em">Binomialkoeffizient</span> C(n,k) (gesprochen "n über k") zählt, auf wie viele Arten man k Dinge aus n Dingen auswählen kann. Formel: C(n,k) = n!/(k!·(n−k)!), wobei n! ("n Fakultät") = 1·2·3·…·n das Produkt aller Zahlen bis n ist (und 0! = 1).</p>
              <p>Das Zeichen <span className="hint-em">Σ(k=0 bis n) C(n,k)</span> bedeutet "addiere alle Binomialkoeffizienten einer Zeile zusammen": C(n,0) + C(n,1) + … + C(n,n).</p>
              <p>Werkzeug ist der <span className="hint-em">Binomische Lehrsatz</span> — die Formel, mit der man (x+y)ⁿ ausmultipliziert:</p>
              <pre className="hint-code-block">{`(x+y)ⁿ = Σ(k=0 bis n) C(n,k) · x^(n−k) · yᵏ`}</pre>
              <p>Idee des Beweises: Die rechte Seite enthält bereits die Binomialkoeffizienten C(n,k). Wenn man x und y so wählt, dass die Potenzen x^(n−k)·yᵏ alle gleich 1 werden, bleibt genau Σ C(n,k) übrig. Die linke Seite (x+y)ⁿ rechnet man dann direkt aus. Hilfsregel: <span className="hint-em">1 hoch irgendetwas = 1</span>, also 1^m = 1 für jedes m ≥ 0.</p>
              <p>Eine "<span className="hint-em">Identität zeigen</span>" heißt: beweisen, dass linke und rechte Seite für jedes n ∈ ℕ* (alle natürlichen Zahlen ab 1) denselben Wert haben.</p>
            </>,
            <>
              <p>So zeigt man Σ(k=0 bis n) C(n,k) = 2ⁿ:</p>
              <pre className="hint-code-block">{`1) Welche x,y machen (x+y)ⁿ zum Zielwert 2ⁿ?
   2 = 1 + 1, also wähle x = 1 und y = 1.

2) Einsetzen in den Binomischen Lehrsatz:
   (1+1)ⁿ = Σ(k=0 bis n) C(n,k) · 1^(n−k) · 1ᵏ

3) Potenzen vereinfachen (1 hoch alles = 1):
   1^(n−k) = 1  und  1ᵏ = 1
   → jeder Summand = C(n,k) · 1 · 1 = C(n,k)
   Rechte Seite wird zu: Σ(k=0 bis n) C(n,k)

4) Linke Seite ausrechnen:
   (1+1)ⁿ = 2ⁿ

5) Beide Seiten gleichsetzen:
   2ⁿ = Σ(k=0 bis n) C(n,k)   ✓ (das war zu zeigen)`}</pre>
              <p>Warum funktioniert das? Weil das Einsetzen x=y=1 erlaubt ist (der Lehrsatz gilt für alle x,y) und genau die störenden Potenzen wegfallen lässt.</p>
            </>,
            <>
              <p>Konkrete Probe für n=3 (zum Mitrechnen):</p>
              <pre className="hint-code-block">{`C(3,0)+C(3,1)+C(3,2)+C(3,3) = 1+3+3+1 = 8
2³ = 8  ✓
Für n=2: C(2,0)+C(2,1)+C(2,2) = 1+2+1 = 4 = 2² ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x=2, y=0 wählen, um 2ⁿ zu erzwingen → <strong>✅ Richtig:</strong> x=y=1. Mit y=0 würde 0ᵏ auftreten (für k≥1 ist 0ᵏ=0), die meisten Summanden fielen weg und man bekäme nicht Σ C(n,k). Genau x=y=1 macht alle Potenzen zu 1.</li>
              <li><strong>❌ Falsch:</strong> 1^(n−k)·1ᵏ einfach weglassen ohne Begründung → <strong>✅ Richtig:</strong> ausdrücklich 1^m = 1 für alle m ≥ 0 nutzen; deshalb wird jeder Faktor neben C(n,k) zu 1.</li>
              <li><strong>❌ Falsch:</strong> (1+1)ⁿ = 1ⁿ + 1ⁿ = 1 + 1 = 2 rechnen → <strong>✅ Richtig:</strong> (1+1)ⁿ = 2ⁿ; man darf den Exponenten nicht auf die Summanden verteilen (Potenz einer Summe ≠ Summe der Potenzen).</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe für n=1: Σ = C(1,0)+C(1,1) = 1+1 = 2 = 2¹ ✓. Frage: Warum ist die Wahl x=y=1 der Schlüsseltrick — welche kombinatorische Aussage steckt dahinter (jedes der n Elemente ist entweder in einer Teilmenge oder nicht, das sind 2·2·…·2 = 2ⁿ Möglichkeiten)?</p>,
          ),
          solution: '       n\n2ⁿ = (1+1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·1ᵏ\n                              k=0\n   n\n = Σ C(n,k)  ✓\n   k=0',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie für n ∈ ℕ* folgende Identitäten mit Hilfe des Binomischen Lehrsatzes:\n\nΣ(k=0 bis n) (−1)ᵏ · C(n,k) = 0',
          hint: h(
            <>
              <p>Wieder ist eine <span className="hint-em">Identität</span> mit dem <span className="hint-em">Binomischen Lehrsatz</span> (x+y)ⁿ = Σ(k=0 bis n) C(n,k)·x^(n−k)·yᵏ zu zeigen. Die <span className="hint-em">Binomialkoeffizienten</span> C(n,k) = n!/(k!(n−k)!) zählen die Auswahlmöglichkeiten von k aus n.</p>
              <p>Neu ist der Faktor <span className="hint-em">(−1)ᵏ</span>: das ist ein <span className="hint-em">Vorzeichen-Wechsel</span> je nach k. Denn (−1)ᵏ = +1, wenn k gerade ist (z. B. (−1)⁰=1, (−1)²=1), und (−1)ᵏ = −1, wenn k ungerade ist ((−1)¹=−1, (−1)³=−1). Die Summe addiert also abwechselnd + und −.</p>
              <p>Idee: Wählt man im Lehrsatz y = −1, so entsteht (−1)ᵏ automatisch aus dem yᵏ-Term. Setzt man zusätzlich x = 1, wird (x+y)ⁿ = (1 + (−1))ⁿ = 0ⁿ. Hilfsregeln: <span className="hint-em">1 hoch alles = 1</span> und <span className="hint-em">0ⁿ = 0 für n ≥ 1</span> (0·0·…·0 = 0). Achtung beim Sonderfall n=0: per Konvention ist 0⁰ = 1 — deshalb gilt die Aussage nur für n ≥ 1 (das ist gemeint mit n ∈ ℕ*).</p>
            </>,
            <>
              <p>So zeigt man Σ(k=0 bis n) (−1)ᵏ·C(n,k) = 0 (für n ≥ 1):</p>
              <pre className="hint-code-block">{`1) Welche x,y machen (x+y)ⁿ = 0 und erzeugen (−1)ᵏ?
   Damit der Faktor (−1)ᵏ entsteht: y = −1.
   Damit x^(n−k) verschwindet (=1): x = 1.
   Dann x+y = 1 + (−1) = 0.

2) Einsetzen in den Binomischen Lehrsatz:
   (1+(−1))ⁿ = Σ(k=0 bis n) C(n,k)·1^(n−k)·(−1)ᵏ

3) Rechte Seite vereinfachen (1^(n−k) = 1):
   = Σ(k=0 bis n) (−1)ᵏ · C(n,k)

4) Linke Seite ausrechnen:
   (1+(−1))ⁿ = 0ⁿ = 0     (für n ≥ 1, da 0ⁿ = 0)

5) Gleichsetzen:
   0 = Σ(k=0 bis n) (−1)ᵏ·C(n,k)   ✓ (zu zeigen)`}</pre>
              <p>Warum nur n ≥ 1? Bei n=0 wäre 0⁰ = 1 ≠ 0, die Aussage stimmte nicht — die Aufgabe schließt n=0 mit "ℕ*" bewusst aus.</p>
            </>,
            <>
              <p>Konkrete Probe für n=3 (Vorzeichen mitschreiben):</p>
              <pre className="hint-code-block">{`(−1)⁰C(3,0) + (−1)¹C(3,1) + (−1)²C(3,2) + (−1)³C(3,3)
= (+1)·1 + (−1)·3 + (+1)·3 + (−1)·1
= 1 − 3 + 3 − 1 = 0  ✓
Für n=2: 1 − 2 + 1 = 0 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> behaupten, die Identität gelte auch für n=0 (mit 0⁰ = 0) → <strong>✅ Richtig:</strong> 0⁰ = 1 per Konvention; für n=0 wäre die Summe = C(0,0) = 1 ≠ 0. Deshalb nur n ≥ 1.</li>
              <li><strong>❌ Falsch:</strong> (1+(−1))ⁿ = 1ⁿ + (−1)ⁿ = 1 ± 1 → <strong>✅ Richtig:</strong> erst die Klammer ausrechnen: 1+(−1) = 0, dann 0ⁿ = 0. Den Exponenten nie auf die Summanden verteilen.</li>
              <li><strong>❌ Falsch:</strong> (−1)ᵏ als konstant −1 behandeln → <strong>✅ Richtig:</strong> (−1)ᵏ wechselt: +1 bei geradem k, −1 bei ungeradem k.</li>
            </ul>,
            <p>Selbstkontrolle: Rechne n=4 nach: 1 − 4 + 6 − 4 + 1 = 0 ✓. Frage: Die Summe Σ(−1)ᵏC(n,k) zählt Teilmengen mit geradem k mit + und mit ungeradem k mit −; was sagt das Ergebnis 0 darüber, wie viele Teilmengen gerader bzw. ungerader Größe es gibt (nämlich gleich viele)?</p>,
          ),
          solution: '         n\n0 = (1−1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·(−1)ᵏ\n                               k=0\n   n\n = Σ (−1)ᵏ C(n,k)  ✓\n   k=0',
        },
      ],
    },
    {
      id: 'b3a3',
      nr: 3,
      title: 'Vollständige Induktion',
      referenz: ['vollstaendige-induktion'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie nachfolgende Behauptungen jeweils mit vollständiger Induktion.\n\nFür jedes n ∈ ℕ* gilt:\n\nΣ(k=1 bis n) '}
              <Frac n="1" d="k(k+1)" />
              {' = 1 − '}
              <Frac n="1" d="n+1" />
            </>
          ),
          hint: h(
            <>
              <p>Die <span className="hint-em">vollständige Induktion</span> ist ein Beweisverfahren für Aussagen A(n), die für alle natürlichen Zahlen ab einem Startwert n₀ gelten sollen. Bild: eine unendliche Reihe Dominosteine — man zeigt (1) der erste fällt und (2) jeder umfallende stößt den nächsten um; dann fallen alle. Genauer drei Bausteine:</p>
              <ul>
                <li><span className="hint-em">Induktionsanfang (IA)</span>: Man rechnet A(n₀) für den kleinsten Wert (hier n₀=1) direkt nach. Nötig, weil ohne ersten fallenden Stein gar nichts startet.</li>
                <li><span className="hint-em">Induktionsvoraussetzung (IV)</span>: Man <em>nimmt an</em>, A(n) sei für ein beliebiges, festes n schon wahr. Das ist keine Behauptung über alle n, sondern ein "Angenommen, für dieses eine n stimmt es".</li>
                <li><span className="hint-em">Induktionsschritt (IS)</span>: Man zeigt: aus A(n) folgt A(n+1). Nötig, damit die Wahrheit von Stein zu Stein weitergereicht wird; nur so deckt man alle n ab.</li>
              </ul>
              <p>Hier ist A(n): Σ(k=1 bis n) 1/(k(k+1)) = 1 − 1/(n+1). Die linke Seite (LHS) ist eine Summe, die rechte Seite (RHS) eine geschlossene Formel. Trick im IS für Summen: <span className="hint-em">den letzten Summanden abspalten</span> — Σ(k=1 bis n+1) = Σ(k=1 bis n) + (Term bei k=n+1) — damit die Summe bis n erscheint, auf die man die IV anwenden darf.</p>
              <p>Zum Bruchrechnen braucht man: <span className="hint-em">gemeinsamer Nenner</span> = kgV der Nenner; Brüche erweitern (Zähler und Nenner mit derselben Zahl), dann Zähler verrechnen.</p>
            </>,
            <>
              <p>So führt man den Induktionsbeweis komplett:</p>
              <pre className="hint-code-block">{`A(n): Σ(k=1..n) 1/(k(k+1)) = 1 − 1/(n+1)

── IA (n=1): kleinsten Fall direkt prüfen ──
LHS = 1/(1·2) = 1/2
RHS = 1 − 1/(1+1) = 1 − 1/2 = 1/2
LHS = RHS ✓ → A(1) ist wahr.

── IV: Angenommen, für ein festes n ≥ 1 gilt ──
Σ(k=1..n) 1/(k(k+1)) = 1 − 1/(n+1)

── IS: zu zeigen A(n+1), also ──
Σ(k=1..n+1) 1/(k(k+1)) = 1 − 1/(n+2)

1) Letzten Term abspalten (k=n+1):
   Σ(k=1..n+1) = Σ(k=1..n) + 1/((n+1)(n+2))

2) IV einsetzen (das ist der Kern!):
   = (1 − 1/(n+1)) + 1/((n+1)(n+2))

3) Die beiden hinteren Brüche zusammenfassen.
   Gem. Nenner von (n+1) und (n+1)(n+2) ist (n+1)(n+2):
   −1/(n+1) = −(n+2)/((n+1)(n+2))   [mit (n+2) erweitert]
   → −(n+2)/((n+1)(n+2)) + 1/((n+1)(n+2))
   = (−(n+2)+1)/((n+1)(n+2))
   = −(n+1)/((n+1)(n+2))

4) (n+1) kürzen:
   = −1/(n+2)

5) Alles zusammen:
   = 1 − 1/(n+2)   ✓  = RHS(n+1)

Damit folgt A(n+1) aus A(n). Mit IA + IS gilt A(n)
für alle n ≥ 1. □`}</pre>
            </>,
            <>
              <p>Anderes Induktionsbeispiel (Gauß-Summe): Σ(k=1 bis n) k = n(n+1)/2.</p>
              <pre className="hint-code-block">{`IA (n=1): LHS = 1, RHS = 1·2/2 = 1 ✓
IV: Σ(k=1..n) k = n(n+1)/2 (angenommen)
IS: Σ(k=1..n+1) k = Σ(k=1..n) k + (n+1)
   =(IV) n(n+1)/2 + (n+1)
   = n(n+1)/2 + 2(n+1)/2
   = (n+1)(n+2)/2   ✓ = RHS(n+1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> im IS die Summe Σ(k=1..n+1) direkt ausrechnen wollen → <strong>✅ Richtig:</strong> letzten Term abspalten: Σ(k=1..n+1) = Σ(k=1..n) + 1/((n+1)(n+2)), DANN die IV einsetzen. Ohne IV-Nutzung ist es kein Induktionsbeweis.</li>
              <li><strong>❌ Falsch:</strong> gemeinsamer Nenner von −1/(n+1) und 1/((n+1)(n+2)) sei (n+1) → <strong>✅ Richtig:</strong> der gemeinsame Nenner ist (n+1)(n+2); −1/(n+1) muss mit (n+2) erweitert werden → −(n+2)/((n+1)(n+2)).</li>
              <li><strong>❌ Falsch:</strong> IA weglassen ("der Schritt reicht doch") → <strong>✅ Richtig:</strong> ohne IA fehlt der erste fallende Dominostein; der IS allein beweist nichts, weil er nur weiterreicht, was er nirgends startet.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe n=2 direkt: 1/(1·2)+1/(2·3) = 1/2+1/6 = 3/6+1/6 = 4/6 = 2/3, und 1 − 1/3 = 2/3 ✓. Frage: Wozu dient die IV genau (was darf man dadurch im IS einsetzen), und warum ist der Beweis ohne den Induktionsanfang lückenhaft?</p>,
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
          text: 'Zeigen Sie nachfolgende Behauptungen jeweils mit vollständiger Induktion.\n\nFür jedes n ∈ ℕ gilt:\n\n2ⁿ ≥ n + 1',
          hint: h(
            <>
              <p>Zu zeigen ist eine <span className="hint-em">Ungleichung</span> für alle n ∈ ℕ (natürliche Zahlen ab 0) per <span className="hint-em">vollständiger Induktion</span> (IA: Basisfall direkt; IV: für ein festes n angenommen; IS: A(n) ⇒ A(n+1)). A(n) lautet: 2ⁿ ≥ n+1.</p>
              <p>Anders als bei einer Gleichung muss man hier <span className="hint-em">abschätzen</span> (mit ≥ rechnen) statt umzuformen (mit =). Eine Kette wie a ≥ b ≥ c bedeutet a ≥ c. Werkzeuge:</p>
              <ul>
                <li><span className="hint-em">Potenzgesetz</span> aᵐ⁺¹ = a·aᵐ — eine Potenz mit Exponent n+1 zerlegt man in "Basis mal Potenz mit Exponent n": 2^(n+1) = 2·2ⁿ. Das ist der Schlüssel, um 2ⁿ (aus der IV) freizulegen.</li>
                <li>Eine wahre Ungleichung darf man mit einer <span className="hint-em">positiven Zahl multiplizieren</span>, ohne dass sich das ≥ dreht: aus 2ⁿ ≥ n+1 folgt 2·2ⁿ ≥ 2·(n+1).</li>
                <li>Eine Ungleichung nach x umstellen: 2n+2 ≥ n+2 ⟺ (beide Seiten −n−2) n ≥ 0.</li>
              </ul>
              <p>Idee: 2^(n+1) = 2·2ⁿ schreiben, die IV (2ⁿ ≥ n+1) einsetzen, ausmultiplizieren und dann zeigen, dass das Ergebnis noch ≥ (n+1)+1 ist.</p>
            </>,
            <>
              <p>So führt man den Beweis von 2ⁿ ≥ n+1 (für n ∈ ℕ):</p>
              <pre className="hint-code-block">{`A(n): 2ⁿ ≥ n+1

── IA (n=0): kleinsten Fall direkt ──
2⁰ = 1,  n+1 = 0+1 = 1
1 ≥ 1 ✓ → A(0) wahr.

── IV: Angenommen für ein festes n ≥ 0 gilt ──
2ⁿ ≥ n+1

── IS: zu zeigen A(n+1), also 2^(n+1) ≥ (n+1)+1 = n+2 ──

1) Potenz zerlegen, um die IV nutzen zu können:
   2^(n+1) = 2·2ⁿ            [Potenzgesetz aⁿ⁺¹ = a·aⁿ]

2) IV einsetzen (2ⁿ ≥ n+1), mit 2 > 0 multiplizieren:
   2·2ⁿ ≥ 2·(n+1) = 2n+2

3) Weiter abschätzen bis n+2:
   2n+2 ≥ n+2   ⟺   n ≥ 0   (gilt, da n ∈ ℕ)
   also  2n+2 ≥ n+2

4) Kette zusammensetzen:
   2^(n+1) = 2·2ⁿ ≥ 2n+2 ≥ n+2
   → 2^(n+1) ≥ n+2 = (n+1)+1   ✓ = A(n+1)

Mit IA + IS gilt A(n) für alle n ≥ 0. □`}</pre>
              <p>Warum Schritt 3 erlaubt ist: 2n+2 − (n+2) = n ≥ 0, also ist die linke Seite mindestens so groß wie die rechte.</p>
            </>,
            <>
              <p>Anderes Ungleichungs-Induktionsbeispiel: 2ⁿ ≥ 2n für n ≥ 1.</p>
              <pre className="hint-code-block">{`IA (n=1): 2¹ = 2 ≥ 2·1 = 2 ✓
IV: 2ⁿ ≥ 2n (für festes n ≥ 1)
IS: 2^(n+1) = 2·2ⁿ ≥(IV) 2·2n = 4n
   und 4n ≥ 2n+2 ⟺ 2n ≥ 2 ⟺ n ≥ 1 ✓
   → 2^(n+1) ≥ 2n+2 = 2(n+1) ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2^(n+1) unverändert lassen → <strong>✅ Richtig:</strong> 2^(n+1) = 2·2ⁿ zerlegen; nur so taucht 2ⁿ auf, das man per IV durch n+1 abschätzen darf.</li>
              <li><strong>❌ Falsch:</strong> 2n+2 ≥ n+2 ohne Begründung behaupten → <strong>✅ Richtig:</strong> 2n+2 ≥ n+2 ist äquivalent zu n ≥ 0 (beide Seiten −n−2), und n ≥ 0 gilt für jedes n ∈ ℕ.</li>
              <li><strong>❌ Falsch:</strong> beim Einsetzen der IV das ≥ zum &gt; oder = machen → <strong>✅ Richtig:</strong> die IV liefert ≥; multipliziert man mit der positiven Zahl 2, bleibt es ≥ (Richtung unverändert).</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe n=3: 2³ = 8 ≥ 3+1 = 4 ✓. Frage: An welcher Stelle wird die IV benutzt und warum dreht sich das Ungleichungszeichen beim Multiplizieren mit 2 nicht — und was bedeutet die Aussage über exponentielles (2ⁿ) gegenüber linearem (n+1) Wachstum?</p>,
          ),
          solution: 'IA (n=0): 2⁰ = 1 ≥ 1 ✓\n\nIS: Sei n ∈ ℕ, angenommen 2ⁿ ≥ n+1 (IV).\n\n2^(n+1) = 2·2ⁿ ≥(IV) 2(n+1) = 2n+2 ≥(n≥0) n+2 ✓\n\nSomit ist A(n+1) wahr. □',
        },
        {
          letter: 'c',
          text: 'Zeigen Sie nachfolgende Behauptungen jeweils mit vollständiger Induktion.\n\nFür jedes n ∈ ℕ* ist die Zahl 3ⁿ − 3 ohne Rest durch 6 teilbar.',
          hint: h(
            <>
              <p>Zu beweisen ist eine <span className="hint-em">Teilbarkeitsaussage</span> per <span className="hint-em">vollständiger Induktion</span> (IA: Basisfall direkt; IV: für festes n angenommen; IS: A(n) ⇒ A(n+1)). A(n): 3ⁿ − 3 ist durch 6 teilbar.</p>
              <p>"<span className="hint-em">6 teilt a</span>" (Schreibweise 6 | a) heißt: a = 6·m für eine ganze Zahl m, d. h. a ist ein Vielfaches von 6, ohne Rest. Diese Schreibweise mit m ist der Schlüssel: die IV besagt also 3ⁿ − 3 = 6m für ein m ∈ ℤ.</p>
              <p>Rechenregeln für Teilbarkeit:</p>
              <ul>
                <li>Wenn 6 | a, dann auch 6 | (c·a) für jede ganze Zahl c (ein Vielfaches mit etwas multipliziert bleibt ein Vielfaches).</li>
                <li>Wenn 6 | a und 6 | b, dann 6 | (a+b) (Summe zweier Vielfacher ist wieder Vielfaches).</li>
              </ul>
              <p>Idee im IS: 3^(n+1) − 3 so umformen, dass der Ausdruck (3ⁿ − 3) aus der IV sichtbar wird. Trick: 3^(n+1) = 3·3ⁿ und dann mit dem <span className="hint-em">"+0"-Trick</span> (eine 0 als +c−c einschieben) den Term 3ⁿ−3 künstlich erzeugen. Hilfsgesetz: aⁿ⁺¹ = a·aⁿ.</p>
            </>,
            <>
              <p>So führt man den Beweis von "6 | (3ⁿ − 3)" (für n ≥ 1):</p>
              <pre className="hint-code-block">{`A(n): 6 | (3ⁿ − 3)

── IA (n=1): ──
3¹ − 3 = 3 − 3 = 0,  und 6 | 0 (denn 0 = 6·0) ✓

── IV: Angenommen für festes n ≥ 1 gilt ──
6 | (3ⁿ − 3),  d.h. 3ⁿ − 3 = 6m für ein m ∈ ℤ.

── IS: zu zeigen 6 | (3^(n+1) − 3) ──

1) Potenz zerlegen:
   3^(n+1) − 3 = 3·3ⁿ − 3 = 3·(3ⁿ − 1)

2) "+0"-Trick: 3ⁿ − 1 = (3ⁿ − 3) + 2
   (denn −1 = −3 + 2; so erscheint 3ⁿ−3 aus der IV)
   → 3·(3ⁿ − 1) = 3·((3ⁿ − 3) + 2)

3) Ausmultiplizieren:
   = 3·(3ⁿ − 3) + 3·2
   = 3·(3ⁿ − 3) + 6

4) IV einsetzen (3ⁿ − 3 = 6m):
   = 3·6m + 6 = 18m + 6 = 6·(3m + 1)

5) 6·(3m+1) ist 6 mal eine ganze Zahl → durch 6 teilbar.
   → 6 | (3^(n+1) − 3)  ✓ = A(n+1)

Mit IA + IS gilt A(n) für alle n ≥ 1. □`}</pre>
            </>,
            <>
              <p>Anderes Teilbarkeits-Induktionsbeispiel: 3 | (n³ − n).</p>
              <pre className="hint-code-block">{`IA (n=0): 0³−0 = 0, 3|0 ✓
IV: n³ − n = 3m für ein m ∈ ℤ
IS: (n+1)³ − (n+1)
  = n³+3n²+3n+1 − n − 1
  = (n³ − n) + 3n² + 3n
  = 3m + 3(n²+n) = 3·(m + n² + n)  → durch 3 teilbar ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 3ⁿ − 1 = 3ⁿ − 3 setzen → <strong>✅ Richtig:</strong> 3ⁿ − 1 = (3ⁿ − 3) + 2; die Differenz zwischen −1 und −3 ist +2, dieses +2 liefert nach ·3 gerade die +6 (selbst durch 6 teilbar).</li>
              <li><strong>❌ Falsch:</strong> behaupten "3·(3ⁿ−3) ist durch 6 teilbar" ohne Begründung → <strong>✅ Richtig:</strong> IV gibt 3ⁿ−3 = 6m, also 3·(3ⁿ−3) = 18m = 6·3m — explizit ein Vielfaches von 6.</li>
              <li><strong>❌ Falsch:</strong> die +6 am Ende ignorieren → <strong>✅ Richtig:</strong> 6 selbst ist durch 6 teilbar; Summe zweier Vielfacher von 6 (18m und 6) ist wieder durch 6 teilbar.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe n=2: 3² − 3 = 9 − 3 = 6, 6 | 6 ✓; n=3: 27 − 3 = 24 = 6·4 ✓. Frage: Warum ist der "+0"-Trick (3ⁿ−1 = (3ⁿ−3)+2) erlaubt (was hat man dem Term wirklich hinzugefügt), und wie macht er die IV-Struktur 3ⁿ−3 sichtbar?</p>,
          ),
          solution: 'IA (n=1): 3¹ − 3 = 0, 6 | 0 ✓\n\nIS: Sei n ∈ ℕ*, angenommen 6 | (3ⁿ−3) (IV).\n\n3^(n+1) − 3 = 3·3ⁿ − 3 = 3(3ⁿ−1)\n            = 3(3ⁿ−3+2) = 3(3ⁿ−3) + 6\n\nNach IV: 6 | (3ⁿ−3), also 6 | 3(3ⁿ−3).\nZusammen mit 6 | 6 folgt: 6 | (3^(n+1)−3). ✓ □',
        },
      ],
    },
    {
      id: 'b3a4',
      nr: 4,
      title: 'Potenzmenge (Knobelaufgabe)',
      referenz: ['vollstaendige-induktion', 'de-morgan-potenzmenge'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie mit vollständiger Induktion, dass für jedes n ∈ ℕ* die Potenzmenge von {1, …, n} genau 2ⁿ Elemente enthält.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Teilmenge</span> von M ist eine Menge, deren Elemente alle auch in M liegen (auch die leere Menge ∅ und M selbst zählen dazu). Die <span className="hint-em">Potenzmenge</span> 𝒫(M) ist die Menge ALLER Teilmengen von M. Die <span className="hint-em">Kardinalität</span> |X| ist die Anzahl der Elemente einer Menge. Behauptung: |𝒫({'{1,…,n}'})| = 2ⁿ.</p>
              <p>Beweis per <span className="hint-em">vollständiger Induktion</span> über n (IA: Basisfall; IV: für festes n angenommen; IS: A(n) ⇒ A(n+1)).</p>
              <p>Zwei Begriffe für den IS:</p>
              <ul>
                <li><span className="hint-em">disjunkt</span>: zwei Mengen heißen disjunkt, wenn sie kein gemeinsames Element haben. Für disjunkte A, B gilt |A ∪ B| = |A| + |B| (man darf die Anzahlen einfach addieren, ohne doppelt zu zählen).</li>
                <li><span className="hint-em">Bijektion</span>: eine Zuordnung, die jedem Element der einen Menge genau ein Element der anderen zuordnet, ohne Auslassung oder Doppelung. Existiert eine Bijektion zwischen zwei Mengen, so haben sie gleich viele Elemente.</li>
              </ul>
              <p>Idee im IS: Teile alle Teilmengen von {'{1,…,n+1}'} danach auf, ob sie das neue Element n+1 enthalten oder nicht. So zerfällt 𝒫({'{1,…,n+1}'}) in zwei disjunkte Klassen, die beide (per IV) 2ⁿ Elemente haben.</p>
            </>,
            <>
              <p>So führt man den Beweis von |𝒫({'{1,…,n}'})| = 2ⁿ (für n ≥ 1):</p>
              <pre className="hint-code-block">{`A(n): |𝒫({1,…,n})| = 2ⁿ

── IA (n=1): ──
𝒫({1}) = { ∅, {1} }   → 2 Elemente
2 = 2¹ ✓

── IV: Angenommen für festes n ≥ 1 gilt ──
|𝒫({1,…,n})| = 2ⁿ

── IS: zu zeigen |𝒫({1,…,n+1})| = 2^(n+1) ──

1) Jede Teilmenge von {1,…,n+1} ist von genau einem
   der beiden Typen:
   Klasse A: enthält n+1 NICHT
   Klasse B: enthält n+1
   A und B sind disjunkt (eine Menge enthält n+1
   entweder oder nicht – nie beides).

2) Klasse A = genau die Teilmengen von {1,…,n}
   → |A| = |𝒫({1,…,n})| =(IV) 2ⁿ

3) Klasse B: jede solche Menge ist M ∪ {n+1} mit
   M ⊆ {1,…,n}. Die Zuordnung M ↦ M ∪ {n+1} ist eine
   Bijektion von Klasse A auf Klasse B (umkehrbar:
   n+1 wieder wegnehmen). → |B| = |A| = 2ⁿ

4) Disjunkte Vereinigung → Anzahlen addieren:
   |𝒫({1,…,n+1})| = |A| + |B| = 2ⁿ + 2ⁿ
                   = 2·2ⁿ = 2^(n+1)  ✓ = A(n+1)

Mit IA + IS gilt A(n) für alle n ≥ 1. □`}</pre>
            </>,
            <>
              <p>Konkret nachgezählt für n=2:</p>
              <pre className="hint-code-block">{`𝒫({1,2}) = { ∅, {1}, {2}, {1,2} } → 4 = 2² ✓
Klasse A (ohne 2): ∅, {1}           → 2 = 2¹
Klasse B (mit 2):  {2}, {1,2}       → 2 = 2¹
zusammen 2+2 = 4 = 2² ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> die Disjunktheit der beiden Klassen nicht begründen → <strong>✅ Richtig:</strong> Klasse A enthält n+1 nie, Klasse B immer; keine Menge kann in beiden liegen → disjunkt, also Anzahlen addierbar.</li>
              <li><strong>❌ Falsch:</strong> annehmen, Klasse B habe 2ⁿ+1 oder 2ⁿ⁻¹ Elemente → <strong>✅ Richtig:</strong> die Abbildung M ↦ M ∪ {'{n+1}'} ist eine Bijektion A → B, daher |B| = |A| = 2ⁿ (gleich viele).</li>
              <li><strong>❌ Falsch:</strong> 2ⁿ + 2ⁿ = 2^(2n) oder 4ⁿ rechnen → <strong>✅ Richtig:</strong> 2ⁿ + 2ⁿ = 2·2ⁿ = 2^(n+1) (gleiche Summanden addieren, nicht Exponenten verdoppeln).</li>
            </ul>,
            <p>Selbstkontrolle: Zähle 𝒫({'{1,2,3}'}) — es sind ∅,{'{1}'},{'{2}'},{'{3}'},{'{1,2}'},{'{1,3}'},{'{2,3}'},{'{1,2,3}'} = 8 = 2³ ✓. Frage: Welche Bijektion verbindet "Teilmengen ohne n+1" mit "Teilmengen mit n+1", und warum ist 2ⁿ nicht überraschend (für jedes der n Elemente trifft man die binäre Entscheidung drin/draußen → 2·2·…·2)?</p>,
          ),
          solution: 'IA (n=1): 𝒫({1}) = {∅,{1}}, |𝒫({1})| = 2 = 2¹ ✓\n\nIS: Sei n ∈ ℕ*, angenommen |𝒫({1,…,n})| = 2ⁿ (IV).\n\n𝒫({1,…,n+1}) = 𝒫({1,…,n}) ∪ {M ∪{n+1} : M ∈ 𝒫({1,…,n})}\n\nDiese Vereinigung ist disjunkt, beide Teile haben 2ⁿ Elemente.\n→ |𝒫({1,…,n+1})| = 2ⁿ + 2ⁿ = 2·2ⁿ = 2^(n+1) ✓ □',
        },
      ],
    },
    {
      id: 'b3a5',
      nr: 5,
      title: 'Identitäten der Binomialkoeffizienten',
      referenz: ['binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie folgende Identitäten für die Binomialkoeffizienten:\n\nC(n,1) = n = C(n, n−1),  falls n ∈ ℕ*',
          hint: h(
            <>
              <p>Die <span className="hint-em">Fakultät</span> n! ("n Fakultät") ist das Produkt aller ganzen Zahlen von 1 bis n: n! = 1·2·3·…·n. Beispiele: 5! = 1·2·3·4·5 = 120, 1! = 1, und per Definition <span className="hint-em">0! = 1</span> (das leere Produkt ist 1 — eine Konvention, die viele Formeln glatt macht).</p>
              <p>Der <span className="hint-em">Binomialkoeffizient</span> C(n,k) ("n über k") zählt, auf wie viele Arten man k aus n Dingen auswählt. Formel: <span className="hint-em">C(n,k) = n! / (k!·(n−k)!)</span>.</p>
              <p>Schlüsseltechnik beim Vereinfachen: <span className="hint-em">Fakultäten teilweise kürzen</span>. Es gilt n! = n·(n−1)! (n! ist n mal "alles darunter"). Damit lässt sich z. B. n!/(n−1)! = n schreiben — die langen Produkte kürzen sich gegenseitig weg.</p>
              <p>Beim zweiten Teil braucht man <span className="hint-em">Klammer-Subtraktion</span>: n − (n−1) = n − n + 1 = 1 (das Minus vor der Klammer dreht das innere Vorzeichen).</p>
            </>,
            <>
              <p>So zeigt man C(n,1) = n = C(n, n−1):</p>
              <pre className="hint-code-block">{`── Teil 1: C(n,1) ──
1) Formel mit k=1 einsetzen:
   C(n,1) = n! / (1!·(n−1)!)
2) 1! = 1, also Nenner = (n−1)!:
   = n! / (n−1)!
3) n! = n·(n−1)! einsetzen und kürzen:
   = n·(n−1)! / (n−1)! = n   ✓

── Teil 2: C(n, n−1) ──
1) Formel mit k = n−1 einsetzen:
   C(n,n−1) = n! / ((n−1)!·(n−(n−1))!)
2) Exponent/Klammer im Nenner: n−(n−1) = 1,
   also (n−(n−1))! = 1! = 1:
   = n! / ((n−1)!·1)
   = n! / (n−1)!
3) n! = n·(n−1)! kürzen:
   = n·(n−1)!/(n−1)! = n   ✓

→ C(n,1) = n = C(n,n−1)`}</pre>
            </>,
            <>
              <p>Konkrete Probe mit n=5:</p>
              <pre className="hint-code-block">{`C(5,1) = 5!/(1!·4!) = 120/(1·24) = 5 ✓
C(5,4) = 5!/(4!·1!) = 120/(24·1) = 5 ✓
(4 = n−1, weil n=5)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 0! = 0 → <strong>✅ Richtig:</strong> 0! = 1 (leeres Produkt = 1, Definition). Würde man hier 1! statt 0! brauchen, beides ist 1; der Fehler 0!=0 macht ganze Brüche kaputt.</li>
              <li><strong>❌ Falsch:</strong> n − (n−1) = n − n − 1 = −1 → <strong>✅ Richtig:</strong> n − (n−1) = n − n + 1 = 1 (Minus vor Klammer dreht das innere −1 zu +1).</li>
              <li><strong>❌ Falsch:</strong> n!/(n−1)! = n! − (n−1)! oder = 1 → <strong>✅ Richtig:</strong> n!/(n−1)! = n, weil n! = n·(n−1)! und das (n−1)! sich wegkürzt.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe n=7: C(7,1) = 7 und C(7,6) = 7 ✓. Frage: Was bedeutet C(n,1) = n kombinatorisch (auf wie viele Arten wählt man 1 aus n?), und warum ist "1 auswählen" gleichwertig zu "n−1 weglassen", sodass auch C(n,n−1) = n gilt?</p>,
          ),
          solution: 'C(n,1) = n!/(1!·(n−1)!) = n·(n−1)!/(n−1)! = n\n\nC(n,n−1) = n!/((n−1)!·1!) = n·(n−1)!/(n−1)! = n',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie folgende Identitäten für die Binomialkoeffizienten:\n\nC(n,k) = C(n, n−k),  falls n, k ∈ ℕ und k ≤ n.',
          hint: h(
            <>
              <p>Der <span className="hint-em">Binomialkoeffizient</span> C(n,k) = n! / (k!·(n−k)!) zählt die Auswahlmöglichkeiten von k aus n (mit der <span className="hint-em">Fakultät</span> m! = 1·2·…·m, 0! = 1). Zu zeigen ist die <span className="hint-em">Symmetrieregel</span> C(n,k) = C(n, n−k) für k ≤ n.</p>
              <p>Eine <span className="hint-em">Identität durch Einsetzen</span> beweist man so: Man schreibt eine Seite (hier C(n, n−k)) mit der Formel aus, vereinfacht und zeigt, dass exakt die Formel der anderen Seite (C(n,k)) herauskommt.</p>
              <p>Der einzige rechnerische Stolperstein ist die <span className="hint-em">Klammer-Subtraktion</span> n − (n−k): Das Minus vor der Klammer dreht beide inneren Vorzeichen um, also n − (n−k) = n − n + k = k. Außerdem darf man im Produkt die Reihenfolge tauschen: k!·(n−k)! = (n−k)!·k! (Multiplikation ist kommutativ).</p>
            </>,
            <>
              <p>So zeigt man C(n,k) = C(n, n−k):</p>
              <pre className="hint-code-block">{`Ziel: rechte Seite C(n, n−k) ausrechnen und mit
      C(n,k) = n!/(k!(n−k)!) vergleichen.

1) Formel mit "k" ersetzt durch "n−k" anwenden.
   In C(n,j) = n!/(j!(n−j)!) setze j = n−k:
   C(n, n−k) = n! / ((n−k)! · (n−(n−k))!)

2) Klammer im hinteren Faktor vereinfachen:
   n − (n−k) = n − n + k = k
   → C(n, n−k) = n! / ((n−k)! · k!)

3) Reihenfolge im Nenner tauschen (kommutativ):
   (n−k)!·k! = k!·(n−k)!
   → C(n, n−k) = n! / (k!·(n−k)!)

4) Das ist genau die Definition von C(n,k):
   = C(n,k)   ✓ (zu zeigen)`}</pre>
            </>,
            <>
              <p>Konkrete Probe mit n=5, k=2:</p>
              <pre className="hint-code-block">{`C(5,2)   = 5!/(2!·3!) = 120/(2·6)  = 10
C(5,5−2) = C(5,3) = 5!/(3!·2!) = 120/(6·2) = 10
→ gleich ✓  (2 wählen = 3 weglassen)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n − (n−k) = n − n − k = −k → <strong>✅ Richtig:</strong> n − (n−k) = n − n + k = k. Das Minus vor der Klammer kehrt das innere −k zu +k um.</li>
              <li><strong>❌ Falsch:</strong> behaupten, man müsse beide Seiten ausschreiben und Zahlen vergleichen → <strong>✅ Richtig:</strong> es genügt, eine Seite umzuformen, bis die Definition der anderen dasteht; das gilt dann für ALLE n,k (nicht nur Beispielzahlen).</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe C(6,2) = 15 und C(6,4) = 15 ✓. Frage: Was sagt C(n,k) = C(n,n−k) kombinatorisch — warum gibt es genauso viele Arten, k Elemente AUSzuwählen, wie n−k Elemente WEGzulassen (jede Auswahl bestimmt eindeutig ihre Reste)?</p>,
          ),
          solution: 'C(n,n−k) = n! / ((n−k)! · (n−(n−k))!)\n          = n! / ((n−k)! · k!)\n          = C(n,k)  ✓',
        },
        {
          letter: 'c',
          text: 'Zeigen Sie folgende Identitäten für die Binomialkoeffizienten:\n\nC(n,k) + C(n,k+1) = C(n+1,k+1),  falls n ∈ ℕ*, k ∈ ℕ und k+1 ≤ n.',
          hint: h(
            <>
              <p>Das ist die <span className="hint-em">Pascal-Regel</span> (Additionsformel) für <span className="hint-em">Binomialkoeffizienten</span> C(n,k) = n!/(k!(n−k)!). Sie sagt: zwei benachbarte Koeffizienten einer Zeile addieren sich zum Koeffizienten direkt darunter — das ist das Bauprinzip des <span className="hint-em">Pascalschen Dreiecks</span> (jede Zahl = Summe der zwei darüber).</p>
              <p>Beweistechnik: beide Koeffizienten links mit der Formel ausschreiben (beide haben n! im Zähler) und als <span className="hint-em">Brüche addieren</span> — dazu auf einen <span className="hint-em">gemeinsamen Nenner</span> erweitern, Zähler verrechnen, dann als C(n+1,k+1) wiedererkennen.</p>
              <p>Nützliche Fakultäts-Bausteine (m! = 1·2·…·m): aus (k+1)! = (k+1)·k! folgt, dass man k! mit (k+1) zu (k+1)! ergänzen kann; aus (n−k)! = (n−k)·(n−k−1)! folgt, dass man (n−k−1)! mit (n−k) zu (n−k)! ergänzt. Das liefert den gemeinsamen Nenner <span className="hint-em">(k+1)!·(n−k)!</span>. Außerdem: (k+1) + (n−k) = n+1 (die k heben sich auf), und n!·(n+1) = (n+1)!.</p>
            </>,
            <>
              <p>So zeigt man C(n,k) + C(n,k+1) = C(n+1, k+1):</p>
              <pre className="hint-code-block">{`1) Beide ausschreiben:
   C(n,k)   = n! / (k!·(n−k)!)
   C(n,k+1) = n! / ((k+1)!·(n−k−1)!)

2) Gemeinsamen Nenner (k+1)!·(n−k)! herstellen:
   1. Bruch: k!→(k+1)! (mal (k+1)),
             (n−k)! bleibt
     → mit (k+1) erweitern:
       C(n,k) = n!·(k+1) / ((k+1)!·(n−k)!)
   2. Bruch: (k+1)! bleibt,
             (n−k−1)!→(n−k)! (mal (n−k))
     → mit (n−k) erweitern:
       C(n,k+1) = n!·(n−k) / ((k+1)!·(n−k)!)

3) Zähler addieren (gleicher Nenner):
   = n!·(k+1) + n!·(n−k)
   = n!·((k+1)+(n−k))     [n! ausklammern]
   = n!·(n+1)             [(k+1)+(n−k) = n+1]
   = (n+1)!               [n!·(n+1) = (n+1)!]
   alles über (k+1)!·(n−k)!:
   = (n+1)! / ((k+1)!·(n−k)!)

4) Als C(n+1, k+1) erkennen.
   Test: C(n+1,k+1) = (n+1)!/((k+1)!·((n+1)−(k+1))!)
   und (n+1)−(k+1) = n−k → Nenner stimmt überein.
   → = C(n+1, k+1)   ✓ (zu zeigen)`}</pre>
            </>,
            <>
              <p>Konkrete Probe mit n=4, k=1:</p>
              <pre className="hint-code-block">{`C(4,1) + C(4,2) = 4 + 6 = 10
C(5,2) = 10  ✓
Im Pascal-Dreieck: 4 und 6 stehen nebeneinander,
darunter steht 10.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (k+1) + (n−k) = n + 2k + 1 → <strong>✅ Richtig:</strong> (k+1) + (n−k) = n + 1; die beiden k heben sich auf (+k − k = 0).</li>
              <li><strong>❌ Falsch:</strong> als gemeinsamen Nenner k!·(n−k−1)! nehmen → <strong>✅ Richtig:</strong> (k+1)!·(n−k)! ist der "größere" gemeinsame Nenner; den ersten Bruch mit (k+1), den zweiten mit (n−k) erweitern.</li>
              <li><strong>❌ Falsch:</strong> n!·(n+1) = n!·n + 1 oder stehen lassen → <strong>✅ Richtig:</strong> n!·(n+1) = (n+1)! per Definition der Fakultät (eins mehr im Produkt).</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe C(5,2) + C(5,3) = 10 + 10 = 20 = C(6,3) ✓. Frage: Welche zwei Einträge erzeugen im Pascal-Dreieck welchen Eintrag darunter, und warum ergibt das kombinatorisch Sinn (eine (k+1)-Auswahl aus n+1 enthält das neue Element oder nicht)?</p>,
          ),
          solution: 'C(n,k) + C(n,k+1)\n= n!/(k!(n−k)!) + n!/((k+1)!(n−k−1)!)\n\nGem. Nenner (k+1)!(n−k)!:\n= n!(k+1)/((k+1)!(n−k)!) + n!(n−k)/((k+1)!(n−k)!)\n= n!(k+1+n−k) / ((k+1)!(n−k)!)\n= (n+1)! / ((k+1)!(n−k)!)\n= C(n+1,k+1)  ✓',
        },
      ],
    },
  ],
}
