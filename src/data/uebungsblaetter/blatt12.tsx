import type { MatheBlatt } from '../../types'
import M from '../../utils/M'
import { h } from './shared'

export const blatt12: MatheBlatt = {
  id: 'blatt12',
  nr: '12',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung12 - Spezielle Funktionen/12_aufg_spezielle-funktionen.pdf',
  titel: 'Spezielle Funktionen',
  aufgaben: [
    {
      id: 'b12a1',
      nr: 1,
      title: 'Funktionsgrenzwerte',
      referenz: ['funktionsgrenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Welche der folgenden Funktionsgrenzwerte existieren? Bestimmen Sie gegebenenfalls den Grenzwert.\n\n'}<M>{'\\lim_{x\\to\\infty} \\frac{1}{x}\\,\\cos\\!\\left(\\frac{1}{x}\\right)'}</M></>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Funktionsgrenzwert</span> lim(x→∞) … fragt: Welchem Wert nähert sich der Ausdruck, wenn x immer größer wird? Eine <span className="hint-em">Nullfolge</span> ist ein Ausdruck, der dabei gegen 0 geht — z. B. 1/x → 0, weil „1 geteilt durch etwas sehr Großes" winzig wird.</p>
              <p>Zwei Rechenregeln, die man hier zusammensetzt:</p>
              <ul>
                <li><span className="hint-em">Stetigkeit erlaubt Vertauschen mit dem Grenzwert</span>: Ist g stetig, darf man den Grenzwert „ins Argument ziehen": lim g(u(x)) = g(lim u(x)). cos ist stetig, also lim cos(u) = cos(lim u).</li>
                <li><span className="hint-em">Produktregel für Grenzwerte</span>: Existieren beide Grenzwerte, ist lim (a(x)·b(x)) = (lim a(x))·(lim b(x)).</li>
              </ul>
              <p>Außerdem ein Funktionswert, den man kennen muss: <span className="hint-em">cos(0) = 1</span> (der Kosinus hat bei 0 seinen Höchstwert). Achtung: nicht 0!</p>
            </>,
            <>
              <p>So berechnet man lim(x→∞) (1/x)·cos(1/x):</p>
              <pre className="hint-code-block">{`Zerlege in zwei Faktoren  a(x)·b(x)  mit
   a(x) = 1/x        b(x) = cos(1/x)

1) Grenzwert des ersten Faktors:
   lim(x→∞) 1/x = 0      (Nenner → ∞ ⇒ Bruch → 0)

2) Grenzwert des zweiten Faktors (cos ist stetig,
   Grenzwert ins Argument ziehen):
   das Argument 1/x → 0, also
   lim(x→∞) cos(1/x) = cos(lim 1/x) = cos(0) = 1

3) Produktregel anwenden:
   lim (1/x)·cos(1/x) = (lim 1/x)·(lim cos(1/x))
                      = 0 · 1 = 0`}</pre>
              <p>Der erste Faktor zieht das Produkt auf 0, der zweite ist ein harmloser endlicher Wert (1). 0 mal endlich = 0.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→∞) (1/x)·sin(1/x).</p>
              <pre className="hint-code-block">{`1/x → 0;  sin stetig ⇒ sin(1/x) → sin(0) = 0
Produkt: 0 · 0 = 0.
(Hier gehen sogar beide Faktoren gegen 0.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> cos(1/x) für x → ∞ auswerten, ohne erst das Argument 1/x → 0 zu bestimmen → <strong>✅ Richtig:</strong> Zuerst 1/x → 0 erkennen, dann per Stetigkeit cos(1/x) → cos(0).</li>
              <li><strong>❌ Falsch:</strong> cos(0) = 0 → <strong>✅ Richtig:</strong> cos(0) = 1 (Maximum des Kosinus liegt bei 0); nur sin(0) = 0.</li>
            </ul>,
            <p>Selbst-Probe: Setze x = 1000: 1/1000 = 0,001 und cos(0,001) ≈ 0,9999995 ≈ 1, Produkt ≈ 0,001 → klein, Richtung 0. Frage: Welcher der beiden Faktoren ist die Nullfolge, welcher geht gegen den endlichen Wert 1, und warum ergibt 0 · 1 genau 0?</p>,
          ),
          solution: (
            <>
              {'Es gilt '}<M>{'\\frac{1}{x} \\to 0,\\ x \\to \\infty'}</M>{'.'}
              {'\n'}
              {'Da cos stetig ist, ist '}<M>{'\\lim_{x\\to\\infty} \\cos\\left(\\frac{1}{x}\\right) = \\cos(0) = 1'}</M>{'.'}
              {'\n'}
              {'Insgesamt ergibt sich '}<M>{'\\lim_{x\\to\\infty} \\frac{1}{x}\\cos\\left(\\frac{1}{x}\\right) = 0\\cdot 1 = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <><M>{'\\lim_{x\\to\\infty} \\frac{1}{x}\\,\\cos(x)'}</M></>,
          hint: h(
            <>
              <p>Achtung — anders als bei (a)! Hier steht cos(<span className="hint-em">x</span>), nicht cos(1/x). Für x → ∞ <span className="hint-em">existiert lim cos(x) NICHT</span>: der Kosinus schwingt für immer zwischen −1 und 1 hin und her, er nähert sich keiner einzigen Zahl. Man darf hier also NICHT „cos ins Argument ziehen".</p>
              <p>Rettung ist eine andere Regel. Eine Funktion heißt <span className="hint-em">beschränkt</span>, wenn ihre Werte nie über eine feste Grenze hinausgehen: für den Kosinus gilt −1 ≤ cos(x) ≤ 1, kurz |cos(x)| ≤ 1 für alle x.</p>
              <p><span className="hint-em">Regel „Nullfolge · Beschränkte = Nullfolge"</span>: Geht a(x) → 0 und ist b(x) beschränkt (|b(x)| ≤ M), dann gilt a(x)·b(x) → 0. Begründung über den <span className="hint-em">Sandwichsatz</span> (Einschnürung): 0 ≤ |a·b| ≤ |a|·M, und |a|·M → 0 drückt |a·b| von oben gegen 0.</p>
            </>,
            <>
              <p>So berechnet man lim(x→∞) cos(x)/x:</p>
              <pre className="hint-code-block">{`Schreibe als Produkt:  cos(x)/x = (1/x) · cos(x)
   a(x) = 1/x   → Nullfolge (→ 0)
   b(x) = cos(x) → beschränkt: |cos(x)| ≤ 1

1) Beschränktheit festhalten: −1 ≤ cos(x) ≤ 1.

2) Betrag abschätzen (Sandwich):
   |cos(x)/x| = |cos(x)|/|x| ≤ 1/|x|
   und 1/|x| → 0 für x → ∞.

3) Da 0 ≤ |cos(x)/x| ≤ 1/|x| → 0, wird der
   eingeklemmte Ausdruck ebenfalls 0:
   lim(x→∞) cos(x)/x = 0.`}</pre>
              <p>Der Trick: Man braucht lim cos(x) gar nicht (existiert nicht). Es genügt, dass cos(x) gefangen zwischen −1 und 1 bleibt, während 1/x alles auf 0 zieht.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→∞) sin(x²)/x.</p>
              <pre className="hint-code-block">{`|sin(x²)| ≤ 1 (beschränkt, egal wie wild das Argument);
1/x → 0.
|sin(x²)/x| ≤ 1/x → 0  ⇒  Grenzwert = 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(x→∞) cos(x) ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert NICHT (cos schwingt); man braucht ihn auch nicht — beschränkt (∈[−1,1]) · Nullfolge = 0.</li>
              <li><strong>❌ Falsch:</strong> cos(x) → cos(∞) „ins Argument ziehen" → <strong>✅ Richtig:</strong> Das Hineinziehen gilt nur, wenn das Argument konvergiert; x → ∞ konvergiert nicht. Stattdessen Beschränktheit nutzen.</li>
            </ul>,
            <p>Selbst-Probe: Egal welches x — cos(x)/x liegt zwischen −1/x und +1/x; für x = 100 also zwischen −0,01 und 0,01, beide gegen 0. Frage: Warum braucht man lim cos(x) hier gar nicht, und welche zwei Schranken klemmen cos(x)/x ein, sodass der Sandwichsatz greift?</p>,
          ),
          solution: (
            <>
              {'Es ist '}<M>{'\\cos(x) \\in [-1, 1]'}</M>{' für alle '}<M>{'x \\in \\mathbb{R}'}</M>{'. Außerdem ist '}<M>{'\\lim_{x\\to\\infty} \\frac{1}{x} = 0'}</M>{'. Mit den Rechenregeln für Grenzwerte („beschränkte Folge mal Nullfolge ergibt Nullfolge") ergibt sich'}
              {'\n'}
              <M>{'\\lim_{x\\to\\infty} \\frac{1}{x}\\cos(x) = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <><M>{'\\lim_{x\\to 0} x\\,\\exp(x)'}</M></>,
          hint: h(
            <>
              <p>Die <span className="hint-em">Exponentialfunktion</span> exp(x) = eˣ (mit der Eulerschen Zahl e ≈ 2,718) ist auf ganz ℝ stetig. Ein wichtiger Funktionswert: <span className="hint-em">exp(0) = e⁰ = 1</span> (jede Basis hoch 0 ist 1).</p>
              <p><span className="hint-em">Stetigkeit erlaubt „einfach einsetzen"</span>: Ist eine Funktion in x₀ stetig, gilt lim(x→x₀) f(x) = f(x₀) — man darf den Grenzpunkt direkt einsetzen. Produkte stetiger Funktionen sind wieder stetig, also ist x·exp(x) stetig und man darf x = 0 einsetzen.</p>
              <p>Wichtig: Bei x → 0 (einem ENDLICHEN Punkt) entsteht hier KEIN unbestimmter Ausdruck — beide Faktoren haben endliche Grenzwerte (0 bzw. 1). Man braucht weder Substitution noch Reihen.</p>
            </>,
            <>
              <p>So berechnet man lim(x→0) x·exp(x):</p>
              <pre className="hint-code-block">{`x·exp(x) ist Produkt zweier stetiger Funktionen
⇒ selbst stetig in 0 ⇒ Grenzpunkt direkt einsetzen:

   lim(x→0) x        = 0
   lim(x→0) exp(x)   = exp(0) = 1   (e⁰ = 1)

Produktregel:
   lim(x→0) x·exp(x) = 0 · 1 = 0.`}</pre>
              <p>Kein Trick nötig: 0 (endlich) mal 1 (endlich) = 0.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→0) (x+2)·exp(x).</p>
              <pre className="hint-code-block">{`stetig ⇒ einsetzen:
(0+2)·exp(0) = 2·1 = 2.`}</pre>
              <p>Vergleich/Warnung: lim(x→−∞) x·exp(x) ist NICHT so einfach (siehe (d)) — dort ist −∞·0 unbestimmt. Bei x → 0 hingegen ist alles endlich.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> exp(x) als Potenzreihe 1 + x + x²/2 + … entwickeln → <strong>✅ Richtig:</strong> Stetigkeit reicht völlig; lim x·exp(x) = 0·exp(0) = 0·1 = 0.</li>
              <li><strong>❌ Falsch:</strong> exp(0) = 0 setzen → <strong>✅ Richtig:</strong> exp(0) = e⁰ = 1.</li>
            </ul>,
            <p>Selbst-Probe: x = 0,01 → 0,01·exp(0,01) ≈ 0,01·1,01 ≈ 0,0101 → klein, Richtung 0. Frage: Warum darf man hier x = 0 direkt einsetzen (welche Eigenschaft von x·exp(x) erlaubt das), und wie viel ist exp(0)?</p>,
          ),
          solution: (
            <>
              {'Es gilt '}<M>{'x \\to 0,\\ x \\to 0'}</M>{' und '}<M>{'\\exp(x) \\to 1,\\ x \\to 0'}</M>{' und somit'}
              {'\n'}
              <M>{'\\lim_{x\\to 0} x\\exp(x) = 0\\cdot 1 = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <><M>{'\\lim_{x\\to-\\infty} x\\,\\exp(x)'}</M></>,
          hint: h(
            <>
              <p>Bei x → −∞ schauen wir auf x·exp(x): der Faktor x geht gegen −∞ (unendlich groß negativ), der Faktor exp(x) gegen 0 (denn e hoch sehr negativ ist winzig, exp(−10) ≈ 0,000045). Das Produkt ist also „(−∞)·0" — ein <span className="hint-em">unbestimmter Ausdruck</span>: Man kann das Ergebnis NICHT direkt ablesen, weil zwei gegenläufige Tendenzen kämpfen. Man muss umformen.</p>
              <p>Werkzeug 1 — <span className="hint-em">Substitution</span> (Variablentausch): Setze y = −x. Dann bedeutet x → −∞ gerade y → +∞, und es gilt x = −y, exp(x) = exp(−y) = 1/exp(y) (negativer Exponent = Kehrwert). So verlagert man das Problem ins Positive, wo man Standardresultate kennt.</p>
              <p>Werkzeug 2 — <span className="hint-em">Wachstums-Hierarchie</span>: exp wächst schneller als jedes Polynom. Daraus folgt der Standardgrenzwert (aus der Vorlesung) lim(y→∞) y/exp(y) = 0 — der Nenner exp(y) „gewinnt" gegen den Zähler y.</p>
            </>,
            <>
              <p>So berechnet man lim(x→−∞) x·exp(x):</p>
              <pre className="hint-code-block">{`1) Unbestimmtheit erkennen:  x → −∞, exp(x) → 0
   ⇒ Form (−∞)·0 ⇒ nicht direkt einsetzbar.

2) Substitution y = −x  (x → −∞  ⟺  y → +∞):
   x      = −y
   exp(x) = exp(−y) = 1/exp(y)

3) Einsetzen:
   x·exp(x) = (−y)·(1/exp(y)) = − y/exp(y)

4) Standardgrenzwert benutzen:
   lim(y→∞) y/exp(y) = 0   (exp schlägt Polynom)
   ⇒ lim = −(0) = 0.

Also:  lim(x→−∞) x·exp(x) = 0.`}</pre>
              <p>Anschaulich: exp(x) wird mit x → −∞ so rasend schnell klein, dass es das (negativ) wachsende x überkompensiert — das Produkt geht gegen 0 (von unten, da x &lt; 0).</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→−∞) x²·exp(x).</p>
              <pre className="hint-code-block">{`y = −x:  x²·exp(x) = y²·exp(−y) = y²/exp(y)
Aus der Hierarchie: lim(y→∞) y²/exp(y) = 0
(exp schlägt auch y², jede Polynom-Potenz).
⇒ Grenzwert = 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „(−∞)·0 = −∞" (oder „= 0") direkt hinschreiben → <strong>✅ Richtig:</strong> Das ist unbestimmt; erst per y = −x umformen zu −y/exp(y), dann den Standardgrenzwert 0 nutzen.</li>
              <li><strong>❌ Falsch:</strong> exp(−y) = −exp(y) → <strong>✅ Richtig:</strong> exp(−y) = 1/exp(y) (negativer Exponent = Kehrwert, NICHT Vorzeichenwechsel); exp ist immer positiv.</li>
            </ul>,
            <p>Selbst-Probe: x = −10 → (−10)·exp(−10) ≈ −10·0,0000454 ≈ −0,00045 → sehr klein, Richtung 0. Frage: Warum ist „(−∞)·0" unbestimmt (welche zwei Tendenzen kämpfen), und welcher Standardgrenzwert entscheidet nach der Substitution y = −x den Kampf zugunsten von 0?</p>,
          ),
          solution: (
            <>
              {'Mit '}<M>{'y = -x'}</M>{' berechnet man'}
              {'\n'}
              <M>{'x\\exp(x) = -(-x)\\exp(-(-x)) = -\\frac{-x}{\\exp(-x)} = -\\frac{y}{\\exp(y)}'}</M>{'.'}
              {'\n'}
              {'Es gilt '}<M>{'y \\to \\infty'}</M>{', falls '}<M>{'x \\to -\\infty'}</M>{'. Da nach Vorlesung '}<M>{'\\lim_{y\\to\\infty} \\frac{y}{\\exp(y)} = 0'}</M>{', erhält man'}
              {'\n'}
              <M>{'\\lim_{x\\to-\\infty} x\\exp(x) = \\lim_{y\\to\\infty} -\\frac{y}{\\exp(y)} = 0'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a2',
      nr: 2,
      title: 'Folgengrenzwerte',
      referenz: ['folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Welche der folgenden Folgengrenzwerte existieren? Bestimmen Sie gegebenenfalls den Grenzwert.\n\n'}<M>{'\\lim_{n\\to\\infty} \\frac{\\cos(n)}{\\ln(n)}'}</M></>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Folge</span> ist eine durchnummerierte Liste von Zahlen a₁, a₂, a₃, … (Index n = 1,2,3,…); lim(n→∞) fragt nach dem Wert, dem sie sich nähert. Hier ist aₙ = cos(n)/ln(n).</p>
              <p>Zwei Begriffe:</p>
              <ul>
                <li><span className="hint-em">Beschränkt</span>: cos(n) bleibt für jedes ganze n im Bereich [−1, 1], also |cos(n)| ≤ 1. Der Grenzwert lim cos(n) selbst existiert NICHT (springt herum), wird aber auch nicht gebraucht.</li>
                <li><span className="hint-em">Nullfolge</span>: ln(n) ist der natürliche Logarithmus; mit n → ∞ wächst ln(n) → ∞ (langsam, aber unbeschränkt). Daher 1/ln(n) → 0.</li>
              </ul>
              <p><span className="hint-em">Regel „Beschränkte Folge · Nullfolge = Nullfolge"</span>: |aₙ| = |cos(n)|/ln(n) ≤ 1/ln(n) → 0, also klemmt der <span className="hint-em">Sandwichsatz</span> aₙ gegen 0 ein.</p>
            </>,
            <>
              <p>So berechnet man lim(n→∞) cos(n)/ln(n):</p>
              <pre className="hint-code-block">{`Schreibe als Produkt: cos(n)/ln(n) = cos(n) · (1/ln(n))
   cos(n)   → beschränkt:  |cos(n)| ≤ 1
   1/ln(n)  → Nullfolge:   ln(n) → ∞ ⇒ 1/ln(n) → 0

1) Betrag abschätzen (Sandwich):
   |cos(n)/ln(n)| = |cos(n)|/ln(n) ≤ 1/ln(n)

2) Obere Schranke geht gegen 0:
   1/ln(n) → 0  für n → ∞

3) 0 ≤ |cos(n)/ln(n)| ≤ 1/ln(n) → 0
   ⇒ eingeklemmt ⇒ lim cos(n)/ln(n) = 0.`}</pre>
              <p>ln(n) ist im Nenner und wächst über alle Grenzen, der Zähler bleibt brav zwischen −1 und 1 — der Bruch wird beliebig klein.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(n→∞) sin(n)/n.</p>
              <pre className="hint-code-block">{`|sin(n)| ≤ 1;  1/n → 0.
|sin(n)/n| ≤ 1/n → 0  ⇒  Grenzwert = 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert NICHT, wird aber nicht gebraucht; beschränkt (∈[−1,1]) · Nullfolge (1/ln n) = 0.</li>
              <li><strong>❌ Falsch:</strong> ln(n) bleibt beschränkt → <strong>✅ Richtig:</strong> ln(n) → ∞ (unbeschränkt, nur langsam), daher 1/ln(n) → 0.</li>
            </ul>,
            <p>Selbst-Probe: n = e¹⁰ ≈ 22026 → ln(n) = 10, also |cos(n)/ln(n)| ≤ 1/10 = 0,1; für noch größeres n wird die Schranke noch kleiner. Frage: Welcher Faktor ist beschränkt, welcher die Nullfolge, und welche obere Schranke klemmt cos(n)/ln(n) im Sandwichsatz gegen 0?</p>,
          ),
          solution: (
            <>
              {'Es ist '}<M>{'\\cos(n) \\in [-1, 1]'}</M>{' für jedes '}<M>{'n \\in \\mathbb{N}'}</M>{'. Außerdem ist '}<M>{'\\lim_{n\\to\\infty} \\frac{1}{\\ln(n)} = 0'}</M>{', da '}<M>{'\\lim_{n\\to\\infty} \\ln(n) = \\infty'}</M>{' nach Vorlesung. Mit der Regel „beschränkte Folge mal Nullfolge ergibt Nullfolge" für Grenzwerte erhält man'}
              {'\n'}
              <M>{'\\lim_{n\\to\\infty} \\frac{\\cos(n)}{\\ln(n)} = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <><M>{'\\lim_{n\\to\\infty} \\sin\\!\\left(\\frac{1}{n}\\right)\\cos(n)'}</M></>,
          hint: h(
            <>
              <p>Wieder das Muster „<span className="hint-em">Nullfolge · Beschränkte = Nullfolge</span>" — man muss nur erkennen, welcher Faktor was ist:</p>
              <ul>
                <li><span className="hint-em">cos(n) ist beschränkt</span>: |cos(n)| ≤ 1 für alle n. (lim cos(n) existiert nicht, egal.)</li>
                <li><span className="hint-em">sin(1/n) ist eine Nullfolge</span>: Das Argument 1/n → 0, und weil sin stetig ist, darf man den Grenzwert ins Argument ziehen: sin(1/n) → sin(0) = 0. (Merke sin(0) = 0, im Gegensatz zu cos(0) = 1.)</li>
              </ul>
              <p><span className="hint-em">Stetigkeit + Grenzwert</span>: lim sin(uₙ) = sin(lim uₙ), wenn uₙ konvergiert. Hier uₙ = 1/n → 0.</p>
              <p>Sandwich: |sin(1/n)·cos(n)| ≤ |sin(1/n)|·1 = |sin(1/n)| → 0.</p>
            </>,
            <>
              <p>So berechnet man lim(n→∞) sin(1/n)·cos(n):</p>
              <pre className="hint-code-block">{`Faktoren bestimmen:
   sin(1/n) → Nullfolge:  1/n → 0, sin stetig
              ⇒ sin(1/n) → sin(0) = 0
   cos(n)   → beschränkt: |cos(n)| ≤ 1

1) Betrag abschätzen (Sandwich):
   |sin(1/n)·cos(n)| = |sin(1/n)|·|cos(n)|
                     ≤ |sin(1/n)| · 1 = |sin(1/n)|

2) Obere Schranke geht gegen 0:
   |sin(1/n)| → |sin(0)| = 0

3) 0 ≤ |sin(1/n)·cos(n)| ≤ |sin(1/n)| → 0
   ⇒ eingeklemmt ⇒ lim sin(1/n)·cos(n) = 0.`}</pre>
              <p>Der Faktor sin(1/n) zieht alles auf 0; cos(n) darf dabei beliebig zwischen −1 und 1 zappeln, das ändert nichts.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(n→∞) (1/n)·sin(n).</p>
              <pre className="hint-code-block">{`1/n → 0 (Nullfolge);  |sin(n)| ≤ 1 (beschränkt).
|(1/n)·sin(n)| ≤ 1/n → 0  ⇒  Grenzwert = 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ bestimmen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert NICHT, wird aber nicht gebraucht; cos(n) ist beschränkt und sin(1/n) → 0.</li>
              <li><strong>❌ Falsch:</strong> sin(0) = 1 → <strong>✅ Richtig:</strong> sin(0) = 0 (nur cos(0) = 1); deshalb ist sin(1/n) die Nullfolge.</li>
            </ul>,
            <p>Selbst-Probe: n = 1000 → sin(0,001) ≈ 0,001, mal cos(1000) (irgendwo in [−1,1]) ⇒ Betrag ≤ 0,001 → klein, Richtung 0. Frage: Welcher Faktor ist die Nullfolge und warum (welche Eigenschaft von sin nutzt du), und warum stört cos(n) trotz fehlenden Grenzwerts nicht?</p>,
          ),
          solution: (
            <>
              {'Es ist '}<M>{'\\cos(n) \\in [-1, 1]'}</M>{' für jedes '}<M>{'n \\in \\mathbb{N}'}</M>{'. Außerdem ist '}<M>{'\\lim_{n\\to\\infty} \\frac{1}{n} = 0'}</M>{'. Da sin stetig ist, ist '}<M>{'\\lim_{n\\to\\infty} \\sin\\left(\\frac{1}{n}\\right) = \\sin(0) = 0'}</M>{'. Mit der Regel „beschränkte Folge mal Nullfolge ergibt Nullfolge" für Grenzwerte erhält man'}
              {'\n'}
              <M>{'\\lim_{n\\to\\infty} \\sin\\left(\\frac{1}{n}\\right)\\cos(n) = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <><M>{'\\lim_{n\\to\\infty} \\frac{n^{4}-3n^{2}}{n^{3}-3n^{4}}\\cdot\\exp\\!\\left(\\frac{2}{n^{3}+1}\\right)'}</M></>,
          hint: h(
            <>
              <p>Der Ausdruck ist ein Produkt aus einem <span className="hint-em">rationalen Bruch</span> (Polynom durch Polynom) und einem exp-Term. Man behandelt beide Faktoren getrennt und multipliziert die Grenzwerte (<span className="hint-em">Produktregel</span>: lim(a·b) = lim a · lim b, sofern beide existieren).</p>
              <p><span className="hint-em">Standardtrick für Polynom-Brüche bei n → ∞</span>: Durch die HÖCHSTE auftretende Potenz teilen (hier n⁴, da n⁴ im Zähler und 3n⁴ im Nenner stehen). Begründung: Terme wie 3/n², 1/n gehen dann gegen 0, übrig bleiben nur die Koeffizienten der höchsten Potenzen. Wichtig ist also der GRAD: hier oben und unten Grad 4 ⇒ Grenzwert = Quotient der Leitkoeffizienten.</p>
              <p><span className="hint-em">exp-Term per Stetigkeit</span>: 2/(n³+1) → 0 (Nenner → ∞), und weil exp stetig ist, exp(2/(n³+1)) → exp(0) = 1.</p>
            </>,
            <>
              <p>So berechnet man lim(n→∞) [(n⁴−3n²)/(n³−3n⁴)] · exp(2/(n³+1)):</p>
              <pre className="hint-code-block">{`Faktor 1 — der Bruch (höchste Potenz ist n⁴):
   teile Zähler UND Nenner durch n⁴:

   n⁴ − 3n²     n⁴/n⁴ − 3n²/n⁴     1 − 3/n²
   ────────  =  ──────────────  =  ────────
   n³ − 3n⁴     n³/n⁴ − 3n⁴/n⁴     1/n − 3

   Grenzwert (3/n² → 0, 1/n → 0):
   (1 − 0)/(0 − 3) = 1/(−3) = −1/3.

Faktor 2 — der exp-Term:
   2/(n³+1) → 0   (Nenner → ∞)
   exp stetig ⇒ exp(2/(n³+1)) → exp(0) = 1.

Produktregel:
   (−1/3) · 1 = −1/3.`}</pre>
              <p>Merke: Bei gleichem Grad oben/unten zählt nur das Verhältnis der Vorzahlen der höchsten Potenz: hier +1 (zu n⁴ oben) geteilt durch −3 (zu n⁴ unten) = −1/3.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(n→∞) (2n³+5)/(4n³−n).</p>
              <pre className="hint-code-block">{`durch n³ teilen:
(2 + 5/n³)/(4 − 1/n²) → (2+0)/(4−0) = 2/4 = 1/2.
(Leitkoeffizienten 2 und 4 ⇒ 2/4.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> den Bruch ohne Division auswerten oder „n⁴/n³ = n → ∞" als Ergebnis nehmen → <strong>✅ Richtig:</strong> Durch die höchste Potenz n⁴ teilen; (1−3/n²)/(1/n−3) → 1/(−3) = −1/3.</li>
              <li><strong>❌ Falsch:</strong> exp(2/(n³+1)) → exp(∞) oder „→ 0" → <strong>✅ Richtig:</strong> Das Argument 2/(n³+1) → 0, also exp(0) = 1.</li>
            </ul>,
            <p>Selbst-Probe: n = 10 → Bruch = (10000−300)/(1000−30000) = 9700/(−29000) ≈ −0,334 ≈ −1/3; exp(2/1001) ≈ exp(0,002) ≈ 1. Frage: Warum teilt man durch n⁴ und nicht durch n³, und woran erkennt man am Grad von Zähler und Nenner sofort, dass der Bruchgrenzwert das Verhältnis der Leitkoeffizienten ist?</p>,
          ),
          solution: (
            <>
              {'Es ist mit den Rechenregeln für Grenzwerte (siehe frühere Aufgaben)'}
              {'\n'}
              <M>{'\\lim_{n\\to\\infty} \\frac{n^4 - 3n^2}{n^3 - 3n^4} = -\\frac{1}{3}'}</M>{'.'}
              {'\n'}
              {'Außerdem ist '}<M>{'\\lim_{n\\to\\infty} \\frac{2}{n^3 + 1} = 0'}</M>{'.'}
              {'\n'}
              {'Da exp stetig ist, ist '}<M>{'\\lim_{n\\to\\infty} \\exp\\left(\\frac{2}{n^3+1}\\right) = \\exp(0) = 1'}</M>{'.'}
              {'\n'}
              {'Insgesamt erhält man'}
              {'\n'}
              <M>{'\\lim_{n\\to\\infty} \\frac{n^4 - 3n^2}{n^3 - 3n^4}\\cdot\\exp\\left(\\frac{2}{n^3+1}\\right) = -\\frac{1}{3}\\cdot 1 = -\\frac{1}{3}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <><M>{'\\lim_{n\\to\\infty} n\\,\\ln\\!\\left(1+\\frac{1}{n}\\right)'}</M></>,
          hint: h(
            <>
              <p>Form prüfen: n → ∞, und ln(1+1/n) → ln(1) = 0 (da 1/n → 0 und ln stetig, ln(1) = 0). Also „∞ · 0" — ein <span className="hint-em">unbestimmter Ausdruck</span>, nicht direkt auswertbar. Man muss umformen.</p>
              <p>Werkzeug 1 — <span className="hint-em">Logarithmusgesetz (Potenzregel)</span>: b·ln(a) = ln(aᵇ). Man darf einen Vorfaktor als Exponenten ins Argument ziehen. Rückwärts gelesen: n·ln(1 + 1/n) = ln( (1 + 1/n)ⁿ ). Damit wird aus „∞·0" ein ln von etwas Bekanntem.</p>
              <p>Werkzeug 2 — der <span className="hint-em">berühmte Grenzwert</span> lim(n→∞) (1 + 1/n)ⁿ = e (so ist die Eulersche Zahl e ≈ 2,718 definiert).</p>
              <p>Werkzeug 3 — <span className="hint-em">ln stetig</span> + <span className="hint-em">ln(e) = 1</span> (der natürliche Logarithmus von e ist 1, da ln und exp Umkehrfunktionen sind). Stetigkeit erlaubt lim ln(uₙ) = ln(lim uₙ).</p>
            </>,
            <>
              <p>So berechnet man lim(n→∞) n·ln(1 + 1/n):</p>
              <pre className="hint-code-block">{`1) Unbestimmtheit erkennen:
   n → ∞,  ln(1+1/n) → ln(1) = 0  ⇒ Form ∞·0.

2) Logarithmusgesetz b·ln(a) = ln(aᵇ) rückwärts:
   n·ln(1 + 1/n) = ln( (1 + 1/n)ⁿ )

3) Inneres als bekannten Grenzwert erkennen:
   (1 + 1/n)ⁿ → e   für n → ∞.

4) ln ist stetig ⇒ Grenzwert ins Argument ziehen:
   lim ln( (1+1/n)ⁿ ) = ln( lim (1+1/n)ⁿ ) = ln(e)

5) ln(e) = 1.

Also:  lim(n→∞) n·ln(1 + 1/n) = 1.`}</pre>
              <p>Der Kniff ist Schritt 2: Der Vorfaktor n wird zum Exponenten — genau so entsteht der Ausdruck (1+1/n)ⁿ, dessen Grenzwert e man kennt.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(n→∞) n·ln(1 + 2/n).</p>
              <pre className="hint-code-block">{`n·ln(1 + 2/n) = ln((1 + 2/n)ⁿ)
Bekannt: (1 + a/n)ⁿ → eᵃ, hier a = 2 ⇒ → e²
ln stetig ⇒ ln(e²) = 2.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „∞·0 = 0" (oder „= ∞") direkt schreiben → <strong>✅ Richtig:</strong> Unbestimmt; mit n·ln(a) = ln(aⁿ) umformen zu ln((1+1/n)ⁿ) → ln(e) = 1.</li>
              <li><strong>❌ Falsch:</strong> ln(e) = e oder ln(e) = 0 → <strong>✅ Richtig:</strong> ln(e) = 1 (ln und exp sind Umkehrfunktionen, ln(e¹) = 1).</li>
            </ul>,
            <p>Selbst-Probe: n = 1000 → 1000·ln(1,001) ≈ 1000·0,0009995 ≈ 0,9995 ≈ 1. Frage: Mit welchem Logarithmusgesetz wird aus n·ln(1+1/n) der Ausdruck ln((1+1/n)ⁿ), und welchen bekannten Grenzwert hat das Innere (1+1/n)ⁿ?</p>,
          ),
          solution: (
            <>
              {'Mit den Rechenregeln für den Logarithmus erhält man'}
              {'\n'}
              <M>{'n\\ln\\left(1 + \\frac{1}{n}\\right) = \\ln\\left(\\left(1 + \\frac{1}{n}\\right)^n\\right)'}</M>{'.'}
              {'\n'}
              {'Da '}<M>{'\\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e'}</M>{', und ln stetig, ergibt sich'}
              {'\n'}
              <M>{'\\lim_{n\\to\\infty} n\\ln\\left(1 + \\frac{1}{n}\\right) = \\ln(e) = 1'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a3',
      nr: 3,
      title: 'Allgemeine Exponentialfunktion und ᵏ√k',
      referenz: ['exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei a > 0. Ist die Abbildung f: ℝ → ℝ,  x ↦ aˣ stetig?'}</>,
          hint: h(
            <>
              <p>Die <span className="hint-em">allgemeine Exponentialfunktion</span> aˣ (Basis a beliebig positiv, z. B. 2ˣ, 10ˣ) wird über die natürliche exp <span className="hint-em">definiert</span>: <span className="hint-em">aˣ := exp(x·ln a)</span>. Das ist die Schlüsselformel der ganzen Aufgabe. Sie folgt aus aˣ = (e^{'{'}ln a{'}'})ˣ = e^{'{'}x·ln a{'}'}.</p>
              <p>Warum braucht man a &gt; 0? Der <span className="hint-em">Logarithmus</span> ln(a) ist nur für a &gt; 0 definiert (man kann keinen Logarithmus von 0 oder negativen Zahlen bilden). Nur dann ergibt die Formel exp(x·ln a) Sinn.</p>
              <p>Werkzeuge für den Stetigkeitsnachweis:</p>
              <ul>
                <li>ln(a) ist eine feste reelle <span className="hint-em">Konstante</span> (a ist gegeben, x ist die Variable). Damit ist x ↦ x·ln(a) ein Polynom (lineare Funktion) → stetig.</li>
                <li>exp ist stetig auf ganz ℝ.</li>
                <li><span className="hint-em">Verkettungsregel</span>: g∘h (g von h) ist stetig, wenn h und g stetig sind.</li>
              </ul>
            </>,
            <>
              <p>So zeigt man, dass f(x) = aˣ (a &gt; 0) auf ganz ℝ stetig ist:</p>
              <pre className="hint-code-block">{`1) Definition einsetzen:
   f(x) = aˣ = exp(x · ln a)

2) f als Verkettung g∘h schreiben:
   innere Funktion  h(x) = x · ln a
   äußere Funktion  g(u) = exp(u)
   d.h. f(x) = g(h(x)) = exp(x·ln a).

3) Bausteine prüfen:
   • ln a ist konstant (a > 0 fest) ⇒
     h(x) = x·ln a ist linear ⇒ stetig auf ℝ.
   • g = exp ist stetig auf ℝ.

4) Verkettungsregel: g∘h stetig
   ⇒ f(x) = aˣ ist stetig auf ganz ℝ.   ∎`}</pre>
              <p>Der ganze Trick: Die „neue" Funktion aˣ wird auf die bekannten stetigen Bausteine (lineares Polynom + exp) zurückgeführt.</p>
            </>,
            <>
              <p>Konkret a = 2: f(x) = 2ˣ = exp(x·ln 2).</p>
              <pre className="hint-code-block">{`ln 2 ≈ 0,693 (Konstante)
h(x) = 0,693·x  → lineare Funktion, stetig
exp(...)        → stetig
⇒ 2ˣ = exp(0,693·x) stetig auf ℝ.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a ≤ 0 zulassen → <strong>✅ Richtig:</strong> ln(a) existiert nur für a &gt; 0; ohne a &gt; 0 ist die Darstellung aˣ = exp(x·ln a) gar nicht definiert.</li>
              <li><strong>❌ Falsch:</strong> behaupten, aˣ sei „einfach so" stetig, ohne Begründung → <strong>✅ Richtig:</strong> aˣ über exp(x·ln a) auf bekannte stetige Bausteine zurückführen und die Verkettungsregel zitieren.</li>
            </ul>,
            <p>Selbst-Probe: Prüfe die Formel an einer Stelle, z. B. a = 2, x = 3: exp(3·ln 2) = exp(ln 2³) = exp(ln 8) = 8 = 2³ ✓. Frage: Welche Definitionsformel führt aˣ auf exp zurück, warum ist dafür a &gt; 0 nötig, und aus welchen zwei stetigen Bausteinen setzt sich f zusammen?</p>,
          ),
          solution: (
            <>
              {'Es ist nach Definition der allgemeinen Exponentialfunktion'}
              {'\n'}
              <M>{'f(x) = \\exp(x\\ln(a))'}</M>{'.'}
              {'\n'}
              {'Da exp und Polynome stetig nach Vorlesung und die Verkettung stetiger Funktionen wieder stetig ist, ist f stetig.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Sei '}<M>{'k \\in \\mathbb{N},\\ k \\ge 2'}</M>{'. Bestimmen Sie '}<M>{'\\lim_{k\\to\\infty} \\sqrt[k]{k}'}</M>{'.\n\nHinweis: '}<M>{'\\sqrt[k]{k} = k^{1/k}'}</M>{'.'}</>,
          hint: h(
            <>
              <p>Gesucht ist der Grenzwert der k-ten Wurzel aus k, also ᵏ√k, für k → ∞. Die Schreibweise als Potenz (Hinweis): <span className="hint-em">ᵏ√k = k^(1/k)</span> (n-te Wurzel = Hochzahl 1/n).</p>
              <p>Die Falle: Der Exponent 1/k → 0, das Innere k → ∞ — eine „∞ hoch 0"-Situation, ein <span className="hint-em">unbestimmter Ausdruck</span>. Man darf NICHT einfach 1/k = 0 einsetzen und „k⁰ = 1" sagen, weil der Exponent von k abhängt und beide Tendenzen gleichzeitig laufen.</p>
              <p>Werkzeug 1 — <span className="hint-em">Potenz über exp/ln ausdrücken</span>: Für b &gt; 0 gilt bᶜ = exp(c·ln b). Hier b = k, c = 1/k:</p>
              <pre className="hint-code-block">{`k^(1/k) = exp( (1/k)·ln k ) = exp( ln(k)/k )`}</pre>
              <p>Werkzeug 2 — der <span className="hint-em">Standardgrenzwert</span> lim(k→∞) ln(k)/k = 0 (ln wächst langsamer als jedes Polynom, der Nenner k „gewinnt"). Werkzeug 3 — <span className="hint-em">exp stetig</span> und exp(0) = 1.</p>
            </>,
            <>
              <p>So berechnet man lim(k→∞) ᵏ√k:</p>
              <pre className="hint-code-block">{`1) Wurzel als Potenz, Potenz über exp/ln:
   ᵏ√k = k^(1/k) = exp( ln(k)/k )

2) Standardgrenzwert des Exponenten:
   lim(k→∞) ln(k)/k = 0
   (k im Nenner schlägt ln k im Zähler)

3) exp ist stetig ⇒ Grenzwert ins Argument ziehen:
   lim exp( ln(k)/k ) = exp( lim ln(k)/k )
                      = exp(0) = 1.

Also:  lim(k→∞) ᵏ√k = 1.`}</pre>
              <p>Inhaltlich: Die Wurzel „glättet" das Wachstum von k so stark, dass das Ergebnis trotz wachsendem k gegen 1 strebt.</p>
            </>,
            <>
              <p>Verwandtes Beispiel: lim(k→∞) ᵏ√(k²) = lim k^(2/k).</p>
              <pre className="hint-code-block">{`k^(2/k) = exp( 2·ln(k)/k )
2·ln(k)/k → 2·0 = 0
exp(0) = 1.  (auch hier Grenzwert 1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k^(1/k) = k⁰ = 1 schreiben, indem man 1/k → 0 einfach einsetzt → <strong>✅ Richtig:</strong> Der Exponent 1/k hängt von k ab (Form ∞^0, unbestimmt); über exp(ln(k)/k) und lim ln(k)/k = 0 sauber herleiten.</li>
              <li><strong>❌ Falsch:</strong> lim ln(k)/k = ∞ annehmen (ln wächst ja) → <strong>✅ Richtig:</strong> ln(k)/k → 0, weil der Nenner k schneller wächst als der Zähler ln(k).</li>
            </ul>,
            <p>Selbst-Probe: k = 1000 → ln(1000)/1000 ≈ 6,91/1000 ≈ 0,0069 → exp(0,0069) ≈ 1,0069 ≈ 1; je größer k, desto näher an 1. Frage: Warum ist ᵏ√k = k^(1/k) ein „∞ hoch 0"-Fall (also nicht trivial 1), und über welche Umformung und welchen Standardgrenzwert kommt man dennoch auf exp(0) = 1?</p>,
          ),
          solution: (
            <>
              {'Umformen ergibt'}
              {'\n'}
              <M>{'\\sqrt[k]{k} = k^{\\frac{1}{k}} = \\exp\\left(\\frac{1}{k}\\cdot\\ln(k)\\right)'}</M>{'.'}
              {'\n'}
              {'Nach Vorlesung ist '}<M>{'\\lim_{k\\to\\infty} \\frac{\\ln(k)}{k} = 0'}</M>{'.'}
              {'\n'}
              {'Da exp stetig ist, erhält man'}
              {'\n'}
              <M>{'\\lim_{k\\to\\infty} \\sqrt[k]{k} = \\lim_{k\\to\\infty} \\exp\\left(\\frac{\\ln(k)}{k}\\right) = \\exp(0) = 1'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a4',
      nr: 4,
      title: 'Rechenregeln für die allgemeine Exponentialfunktion',
      referenz: ['exp-log', 'potenzregeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Seien x, y ∈ ℝ und sei a > 0. Zeigen Sie folgende Rechenregeln:\n\naˣaʸ = a'}<sup>{'x+y'}</sup>{'.'}</>,
          hint: h(
            <>
              <p>„<span className="hint-em">Zeigen Sie</span>" heißt beweisen — man darf das Potenzgesetz aˣ·aʸ = a^(x+y) NICHT als bekannt voraussetzen, sondern muss es aus der Definition herleiten. Genau dafür gibt es zwei Bausteine:</p>
              <ul>
                <li><span className="hint-em">Definition der allgemeinen Potenz</span>: aˣ = exp(x·ln a) (für a &gt; 0). Damit übersetzt man alles in die natürliche exp.</li>
                <li><span className="hint-em">Additionstheorem (Funktionalgleichung) von exp</span>: exp(u)·exp(v) = exp(u+v) für alle u, v ∈ ℝ. Das ist DIE Grundeigenschaft der Exponentialfunktion — „aus mal wird plus im Exponenten". Sie darf man benutzen.</li>
              </ul>
              <p>Außerdem nur einfaches Ausklammern: x·ln a + y·ln a = (x+y)·ln a (gemeinsamer Faktor ln a).</p>
            </>,
            <>
              <p>So beweist man aˣ·aʸ = a^(x+y):</p>
              <pre className="hint-code-block">{`1) Beide Seiten über die Definition aˣ = exp(x ln a):
   aˣ · aʸ = exp(x ln a) · exp(y ln a)

2) Additionstheorem exp(u)·exp(v) = exp(u+v),
   hier u = x ln a, v = y ln a:
   = exp(x ln a + y ln a)

3) ln a ausklammern (gemeinsamer Faktor):
   = exp( (x + y) · ln a )

4) Definition rückwärts lesen: exp((x+y) ln a) ist
   genau a hoch (x+y):
   = a^(x+y).                              ∎`}</pre>
              <p>Roter Faden: Über die Definition ins exp übersetzen → dort die „mal→plus"-Regel anwenden → über die Definition zurückübersetzen.</p>
            </>,
            <>
              <p>Analoge Herleitung (Quotient): aˣ/aʸ = a^(x−y).</p>
              <pre className="hint-code-block">{`aˣ/aʸ = exp(x ln a)/exp(y ln a) = exp(x ln a − y ln a)
       = exp((x−y) ln a) = a^(x−y).
(nutzt exp(u)/exp(v) = exp(u−v))`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> aˣ·aʸ = a^(x+y) als bekannt voraussetzen (genau das soll bewiesen werden) → <strong>✅ Richtig:</strong> Über die Definition aˣ = exp(x·ln a) und das Additionstheorem exp(u)·exp(v) = exp(u+v) herleiten.</li>
              <li><strong>❌ Falsch:</strong> exp(u)·exp(v) = exp(u·v) → <strong>✅ Richtig:</strong> exp(u)·exp(v) = exp(u + v); aus MAL der Funktionswerte wird PLUS der Argumente, nicht mal.</li>
            </ul>,
            <p>Selbst-Probe: Zahlenprobe a = 2, x = 3, y = 2: 2³·2² = 8·4 = 32 = 2⁵ = 2^(3+2) ✓. Frage: Welche zwei Tatsachen (Definition + welche exp-Eigenschaft) trägt der Beweis, und an welcher Stelle wird aus „mal" ein „plus"?</p>,
          ),
          solution: (
            <>
              {'Mit der Definition für die allgemeine Exponentialfunktion und den Rechenregeln für exp erhält man:'}
              {'\n'}
              <M>{'a^x \\cdot a^y = \\exp(x\\ln(a)) \\cdot \\exp(y\\ln(a)) = \\exp(x\\ln(a) + y\\ln(a)) = \\exp((x+y)\\ln(a)) = a^{x+y}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'(aˣ)'}<sup>{'y'}</sup>{' = a'}<sup>{'xy'}</sup>{'.'}</>,
          hint: h(
            <>
              <p>Zu beweisen ist das Gesetz „Potenz einer Potenz" (aˣ)ʸ = a^(xy) — Exponenten MULTIPLIZIEREN. Wieder aus der Definition herleiten, nicht voraussetzen. Drei Bausteine:</p>
              <ul>
                <li><span className="hint-em">Definition</span>: für jede positive Basis b gilt bʸ = exp(y·ln b). Hier ist die „Basis" selbst aˣ, also (aˣ)ʸ = exp(y·ln(aˣ)).</li>
                <li><span className="hint-em">aˣ einsetzen</span>: aˣ = exp(x·ln a).</li>
                <li><span className="hint-em">Umkehr-Eigenschaft</span> ln(exp(u)) = u für alle u (ln und exp heben sich auf, da Umkehrfunktionen). Das ist der Schlüsselschritt: ln(exp(x·ln a)) = x·ln a.</li>
              </ul>
              <p>Wichtig: Man darf ln(aˣ) = x·ln a NICHT als bekannt unterstellen — genau das fällt hier aus ln(exp(u)) = u heraus.</p>
            </>,
            <>
              <p>So beweist man (aˣ)ʸ = a^(xy):</p>
              <pre className="hint-code-block">{`1) Definition (Basis ist aˣ):
   (aˣ)ʸ = exp( y · ln(aˣ) )

2) aˣ = exp(x ln a) einsetzen:
   = exp( y · ln( exp(x ln a) ) )

3) Umkehr-Eigenschaft ln(exp(u)) = u  mit u = x ln a:
   ln( exp(x ln a) ) = x ln a
   ⇒ = exp( y · (x ln a) )

4) Faktoren ordnen (y·x = xy):
   = exp( xy · ln a )

5) Definition rückwärts: exp(xy ln a) = a^(xy):
   = a^(xy).                               ∎`}</pre>
              <p>Kernschritt ist 3): ln und exp „kürzen sich weg", dadurch fällt der innere Exponent x·ln a heraus und multipliziert sich mit y.</p>
            </>,
            <>
              <p>Hilfsbaustein isoliert (oft separat gefragt): ln(aˣ) = x·ln a.</p>
              <pre className="hint-code-block">{`ln(aˣ) = ln( exp(x ln a) ) = x ln a   (ln∘exp = id)
Damit z.B. ln(2⁵) = 5·ln 2.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ln(aˣ) = x·ln(a) direkt als bekannt voraussetzen → <strong>✅ Richtig:</strong> Erst aˣ = exp(x ln a) einsetzen, dann ln(exp(u)) = u anwenden — nur so ist der Beweis vollständig.</li>
              <li><strong>❌ Falsch:</strong> (aˣ)ʸ = a^(x+y) (Exponenten addieren) → <strong>✅ Richtig:</strong> Bei Potenz EINER Potenz werden Exponenten MULTIPLIZIERT: (aˣ)ʸ = a^(xy). (Addiert wird nur bei aˣ·aʸ.)</li>
            </ul>,
            <p>Selbst-Probe: a = 2, x = 3, y = 2: (2³)² = 8² = 64 = 2⁶ = 2^(3·2) ✓. Frage: Welche Umkehr-Eigenschaft von ln und exp ist der Schlüsselschritt, und warum werden hier die Exponenten multipliziert statt addiert?</p>,
          ),
          solution: (
            <>
              <M>{'(a^x)^y = \\exp(y\\ln(a^x)) = \\exp(y\\ln(\\exp(x\\ln(a)))) = \\exp(y(x\\ln(a))) = \\exp(xy\\ln(a)) = a^{xy}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'aˣbˣ = (ab)ˣ, falls b > 0.'}</>,
          hint: h(
            <>
              <p>Zu beweisen: aˣ·bˣ = (ab)ˣ — gleiche Hochzahl, verschiedene Basen, dürfen unter EINE Basis ab gezogen werden. Drei Bausteine:</p>
              <ul>
                <li><span className="hint-em">Definition</span>: aˣ = exp(x·ln a), bˣ = exp(x·ln b) (a, b &gt; 0).</li>
                <li><span className="hint-em">Additionstheorem von exp</span>: exp(u)·exp(v) = exp(u+v).</li>
                <li><span className="hint-em">Logarithmengesetz für Produkte</span>: ln a + ln b = ln(a·b) für a, b &gt; 0. (Der Log eines Produkts ist die Summe der Logs — „mal wird plus".) ACHTUNG: ln(a)+ln(b) = ln(ab), NICHT ln(a+b)!</li>
              </ul>
              <p>Außerdem Ausklammern: x·ln a + x·ln b = x·(ln a + ln b).</p>
            </>,
            <>
              <p>So beweist man aˣ·bˣ = (ab)ˣ:</p>
              <pre className="hint-code-block">{`1) Definition für beide Faktoren:
   aˣ · bˣ = exp(x ln a) · exp(x ln b)

2) Additionstheorem exp(u)·exp(v) = exp(u+v):
   = exp( x ln a + x ln b )

3) x ausklammern:
   = exp( x·(ln a + ln b) )

4) Logarithmengesetz ln a + ln b = ln(ab):
   = exp( x · ln(ab) )

5) Definition rückwärts: exp(x ln(ab)) = (ab)ˣ:
   = (ab)ˣ.                                ∎`}</pre>
              <p>Zwei „mal→plus"-Schritte greifen ineinander: das Additionstheorem (Schritt 2) und das Logarithmengesetz (Schritt 4).</p>
            </>,
            <>
              <p>Zahlenprobe als Anschauung: a = 2, b = 3, x = 2.</p>
              <pre className="hint-code-block">{`aˣ·bˣ = 2²·3² = 4·9 = 36
(ab)ˣ = (2·3)² = 6² = 36   ✓ gleich
(Logarithmengesetz dahinter: ln2 + ln3 = ln6.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ln(a) + ln(b) = ln(a+b) verwenden → <strong>✅ Richtig:</strong> ln(a) + ln(b) = ln(a·b) für a, b &gt; 0 (Produkt, nicht Summe!).</li>
              <li><strong>❌ Falsch:</strong> aˣ·bˣ = (a+b)ˣ behaupten → <strong>✅ Richtig:</strong> aˣ·bˣ = (a·b)ˣ; die Basen werden multipliziert, nicht addiert.</li>
            </ul>,
            <p>Selbst-Probe: a = 4, b = 9, x = ½: 4^½·9^½ = 2·3 = 6 und (4·9)^½ = 36^½ = 6 ✓. Frage: Welches Logarithmengesetz verwandelt ln a + ln b in den Ausdruck mit der Basis ab, und warum ist ln(a)+ln(b) ≠ ln(a+b)?</p>,
          ),
          solution: (
            <>
              <M>{'a^x b^x = \\exp(x\\ln(a))\\exp(x\\ln(b)) = \\exp(x\\ln(a) + x\\ln(b)) = \\exp(x(\\ln(a) + \\ln(b))) = \\exp(x\\ln(ab)) = (ab)^x'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a5',
      nr: 5,
      title: 'Logarithmuswerte berechnen',
      referenz: ['exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Berechnen Sie folgende Ausdrücke:\n\n'}{'(i) '}<M>{'\\log_{10}(10)'}</M>{',  (ii) '}<M>{'\\log_{10}(10000)'}</M>{',  (iii) '}<M>{'\\log_{10}(1)'}</M>{',  (iv) '}<M>{'\\log_{10}(0{,}01)'}</M></>,
          hint: h(
            <>
              <p>Der <span className="hint-em">Logarithmus</span> log_a(z) beantwortet die Frage: „Mit welcher Hochzahl muss ich die Basis a potenzieren, um z zu erhalten?" Also log_a(z) = c bedeutet a^c = z. Beispiel: log₁₀(1000) = 3, weil 10³ = 1000.</p>
              <p><span className="hint-em">Grundregel</span>: log_a(a^k) = k. Wenn das Argument schon als Potenz der Basis dasteht, ist der Logarithmus einfach die Hochzahl. Strategie also: jedes Argument als <span className="hint-em">Zehnerpotenz</span> 10^k schreiben, dann k ablesen.</p>
              <p>Nützliche Zehnerpotenzen: 10 = 10¹, 100 = 10², 10000 = 10⁴, 1 = 10⁰ (alles hoch 0 ist 1), und Dezimalbrüche über negative Exponenten: 0,1 = 10⁻¹, 0,01 = 1/100 = 10⁻² (negativer Exponent = Kehrwert).</p>
            </>,
            <>
              <p>So berechnet man die vier Werte (jeweils Argument als 10^k, dann log = k):</p>
              <pre className="hint-code-block">{`(i)   log₁₀(10)    : 10    = 10¹  ⇒ = 1
(ii)  log₁₀(10000) : 10000 = 10⁴  ⇒ = 4
(iii) log₁₀(1)     : 1     = 10⁰  ⇒ = 0
(iv)  log₁₀(0,01)  : 0,01  = 1/100 = 10⁻² ⇒ = −2`}</pre>
              <p>Bei (iv) hilft der Zwischenschritt 0,01 = 1/100 und 100 = 10², also 1/100 = 10⁻² (Kehrwert ⇒ Minus im Exponenten).</p>
            </>,
            <>
              <p>Anderes Beispiel zur Basis 2:</p>
              <pre className="hint-code-block">{`log₂(8)   : 8   = 2³    ⇒ 3
log₂(1)   : 1   = 2⁰    ⇒ 0
log₂(1/4) : 1/4 = 2⁻²   ⇒ −2  (4 = 2², Kehrwert ⇒ −2)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> log₁₀(1) = 1 → <strong>✅ Richtig:</strong> 10⁰ = 1, also log₁₀(1) = 0; der Logarithmus von 1 ist immer 0 (zu jeder Basis).</li>
              <li><strong>❌ Falsch:</strong> log₁₀(0,01) = 2 (Vorzeichen vergessen) → <strong>✅ Richtig:</strong> 0,01 = 10⁻², also log₁₀(0,01) = −2; Zahlen kleiner als 1 haben negative Logarithmen.</li>
            </ul>,
            <p>Selbst-Probe: Rechne rückwärts, jede Antwort muss die Basis-Potenz zurückgeben: 10¹ = 10, 10⁴ = 10000, 10⁰ = 1, 10⁻² = 0,01 ✓. Frage: Was bedeutet log₁₀(z) als Frage formuliert, und warum ist der Logarithmus von 1 zu jeder Basis 0?</p>,
          ),
          solution: (
            <>
              {'(i) '}<M>{'\\log_{10}(10) = 1'}</M>{','}
              {'\n'}
              {'(ii) '}<M>{'\\log_{10}(10000) = \\log_{10}(10^4) = 4'}</M>{','}
              {'\n'}
              {'(iii) '}<M>{'\\log_{10}(1) = \\log_{10}(10^0) = 0'}</M>{','}
              {'\n'}
              {'(iv) '}<M>{'\\log_{10}(0{,}01) = \\log_{10}\\left(\\left(\\frac{1}{10}\\right)^2\\right) = \\log_{10}(10^{-2}) = -2'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'(i) '}<M>{'\\log_{2}\\!\\left(\\tfrac{2}{64}\\right)'}</M>{',  (ii) '}<M>{'\\log_{4}\\!\\left(\\tfrac{2}{64}\\right)'}</M>{',  (iii) '}<M>{'\\log_{32}\\!\\left(\\tfrac{2}{64}\\right)'}</M>{',  (iv) '}<M>{'\\log_{64}\\!\\left(\\tfrac{2}{64}\\right)'}</M></>,
          hint: h(
            <>
              <p>Wieder gilt log_a(z) = c ⟺ a^c = z, und die Grundregel log_a(a^k) = k. Trick: Erst das Argument vereinfachen, dann als Potenz der jeweiligen Basis ausdrücken.</p>
              <p><span className="hint-em">Argument vereinfachen</span>: 2/64 = 1/32 (Zähler und Nenner durch 2 teilen). Und 32 = 2⁵, also 1/32 = 2⁻⁵ (Kehrwert ⇒ negativer Exponent). Das Argument ist also einheitlich 2⁻⁵.</p>
              <p>Zwei Logarithmengesetze als Werkzeug, falls die Basis keine Potenz von 2 ist:</p>
              <ul>
                <li><span className="hint-em">Quotient</span>: log_b(u/v) = log_b(u) − log_b(v).</li>
                <li><span className="hint-em">Potenz</span>: log_b(u^k) = k·log_b(u).</li>
              </ul>
              <p>Und log_b(2): Wenn b = 2^m, dann ist log_b(2) = 1/m, denn b^(1/m) = (2^m)^(1/m) = 2.</p>
            </>,
            <>
              <p>So berechnet man die vier Logarithmen (Argument stets 2/64 = 1/32 = 2⁻⁵):</p>
              <pre className="hint-code-block">{`(i) Basis 2:  log₂(2⁻⁵) = −5.        (direkt, Grundregel)

(ii) Basis 4 = 2²:
   log₄(2/64) = log₄(2) − log₄(64)
   log₄(2)  = 1/2   (4^(1/2) = 2)
   log₄(64) = 3     (4³ = 64)
   = 1/2 − 3 = −5/2.

(iii) Basis 32 = 2⁵:
   1/32 = 32⁻¹  ⇒  log₃₂(32⁻¹) = −1.   (Grundregel)

(iv) Basis 64 = 2⁶:
   log₆₄(2/64) = log₆₄(2) − log₆₄(64)
   log₆₄(2)  = 1/6   (64^(1/6) = 2)
   log₆₄(64) = 1     (64¹ = 64)
   = 1/6 − 1 = −5/6.`}</pre>
              <p>Zwei Wege: Bei Basen, die direkt mit dem Argument zusammenpassen (i, iii), reicht die Grundregel; sonst spaltet man mit log(u/v) = log u − log v auf (ii, iv).</p>
            </>,
            <>
              <p>Anderes Beispiel: log₉(1/3) mit 9 = 3².</p>
              <pre className="hint-code-block">{`1/3 = 3⁻¹.  log₉(3⁻¹) = −1·log₉(3)
log₉(3) = 1/2 (9^(1/2)=3)  ⇒ −1·(1/2) = −1/2.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2/64 unverändert „mit der Basis vergleichen" → <strong>✅ Richtig:</strong> Erst 2/64 = 1/32 = 2⁻⁵ vereinfachen, dann zur jeweiligen Basis umrechnen.</li>
              <li><strong>❌ Falsch:</strong> log₄(64) = 4 (Basis mit Exponent verwechselt) → <strong>✅ Richtig:</strong> log₄(64) = 3, denn 4³ = 64 (Frage: 4 hoch was = 64?).</li>
            </ul>,
            <p>Selbst-Probe: Rückprobe (ii): 4^(−5/2) = (4^(1/2))⁻⁵ = 2⁻⁵ = 1/32 = 2/64 ✓. Frage: Wie schreibt man 2/64 als reine Zweierpotenz, und mit welchem Logarithmengesetz zerlegt man log₄(2/64), wenn die Basis nicht direkt passt?</p>,
          ),
          solution: (
            <>
              {'(i) '}<M>{'\\log_2\\left(\\frac{2}{64}\\right) = \\log_2\\left(\\frac{1}{32}\\right) = \\log_2(2^{-5}) = -5'}</M>{','}
              {'\n'}
              {'(ii) '}<M>{'\\log_4\\left(\\frac{2}{64}\\right) = \\log_4(2) - \\log_4(64) = \\log_4\\left(4^{\\frac{1}{2}}\\right) - \\log_4(4^3) = \\frac{1}{2} - 3 = -\\frac{5}{2}'}</M>{','}
              {'\n'}
              {'(iii) '}<M>{'\\log_{32}\\left(\\frac{2}{64}\\right) = \\log_{32}\\left(\\frac{1}{32}\\right) = \\log_{32}(32^{-1}) = -1'}</M>{','}
              {'\n'}
              {'(iv) '}<M>{'\\log_{64}\\left(\\frac{2}{64}\\right) = \\log_{64}(2) - \\log_{64}(64) = \\log_{64}\\left(64^{\\frac{1}{6}}\\right) - \\log_{64}(64^1) = \\frac{1}{6} - 1 = -\\frac{5}{6}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'(i) '}<M>{'\\log_{2}(64)'}</M>{',  (ii) '}<M>{'\\dfrac{\\log_{2}(2/64)}{\\log_{2}(64)}'}</M>{'. Vergleichen Sie das Ergebnis mit '}<M>{'\\log_{64}\\!\\left(\\tfrac{2}{64}\\right)'}</M>{'.'}</>,
          hint: h(
            <>
              <p>Kern dieser Aufgabe ist der <span className="hint-em">Basiswechselsatz</span>: log_b(x) = log_a(x) / log_a(b). Er erlaubt, einen Logarithmus zur Basis b über eine BELIEBIGE andere Basis a auszudrücken — man teilt einfach log_a(x) durch log_a(b). (Deshalb genügt am Taschenrechner ln oder log₁₀ für jede Basis.)</p>
              <p>Begründung in einem Satz: Setzt man c = log_b(x), also b^c = x, und logarithmiert mit log_a, folgt c·log_a(b) = log_a(x), also c = log_a(x)/log_a(b).</p>
              <p>Hier ist a = 2, b = 64, x = 2/64. Der Bruch log₂(2/64)/log₂(64) ist also <span className="hint-em">genau</span> log₆₄(2/64) — er muss daher mit dem Ergebnis aus (b)(iv) übereinstimmen. Vorab braucht man log₂(64): 64 = 2⁶ ⇒ log₂(64) = 6.</p>
            </>,
            <>
              <p>So löst man (i) und (ii) und vergleicht:</p>
              <pre className="hint-code-block">{`(i) log₂(64):  64 = 2⁶  ⇒ log₂(64) = 6.

(ii) Bruch bilden (Zähler aus (b)(i): log₂(2/64) = −5):
   log₂(2/64)      −5
   ───────────  =  ──  = −5/6.
   log₂(64)         6

Basiswechselsatz lesen (a = 2, b = 64, x = 2/64):
   log₂(2/64) / log₂(64) = log₆₄(2/64)

Aus (b)(iv): log₆₄(2/64) = −5/6.
⇒ Beide Werte stimmen überein: −5/6 = −5/6.  ✓`}</pre>
              <p>Die Aufgabe demonstriert den Satz an konkreten Zahlen: der Bruch zweier log₂-Werte liefert denselben Wert wie der direkte log₆₄ — das ist kein Zufall, sondern der Basiswechselsatz.</p>
            </>,
            <>
              <p>Anderes Beispiel: log₈(2) über Basis 2 berechnen.</p>
              <pre className="hint-code-block">{`log₈(2) = log₂(2)/log₂(8) = 1/3.
Probe: 8^(1/3) = 2 ✓  (8 = 2³)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> log₂(2/64)/log₂(64) als log₂((2/64)/64) oder log₂(2/64 − 64) deuten → <strong>✅ Richtig:</strong> Ein QUOTIENT zweier Logarithmen ist der Basiswechselsatz: log_a(x)/log_a(b) = log_b(x), hier = log₆₄(2/64).</li>
              <li><strong>❌ Falsch:</strong> log_a(x)/log_a(b) mit log_a(x) − log_a(b) verwechseln → <strong>✅ Richtig:</strong> Geteilt gibt den Basiswechsel (= log_b(x)); minus gäbe log_a(x/b) — etwas ganz anderes.</li>
            </ul>,
            <p>Selbst-Probe: −5 geteilt durch 6 ist −5/6, und (b)(iv) lieferte ebenfalls −5/6 — Übereinstimmung bestätigt den Satz. Frage: Wie lautet der Basiswechselsatz, und warum ist ein QUOTIENT zweier Logarithmen (nicht etwa ihre Differenz) gleich log_b(x)?</p>,
          ),
          solution: (
            <>
              {'(i) '}<M>{'\\log_2(64) = 6'}</M>{'.'}
              {'\n'}
              {'(ii) Es ist '}<M>{'\\frac{\\log_2\\left(\\frac{2}{64}\\right)}{\\log_2(64)} = \\frac{-5}{6} = -\\frac{5}{6}'}</M>{' und '}<M>{'\\log_{64}\\left(\\frac{2}{64}\\right) = -\\frac{5}{6}'}</M>{', siehe Teil (b)(iv).'}
              {'\n'}
              {'Es ist also '}<M>{'\\frac{\\log_2\\left(\\frac{2}{64}\\right)}{\\log_2(64)} = \\log_{64}\\left(\\frac{2}{64}\\right)'}</M>{'. Allgemein gilt (siehe Vorlesung): '}<M>{'\\frac{\\log_a(x)}{\\log_a(b)} = \\log_b(x)'}</M>{' für '}<M>{'a, b > 0,\\ a \\neq 1,\\ b \\neq 1'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a6',
      nr: 6,
      title: 'Konvergenz der sin- und cos-Reihe (Wenn noch Zeit ist)',
      referenz: ['reihen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit Hilfe des Quotientenkriteriums, dass die Reihen\n\n'}
              <M>{'\\sin(x) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{x^{2k+1}}{(2k+1)!}'}</M>
              {'  und  '}
              <M>{'\\cos(x) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{x^{2k}}{(2k)!}'}</M>
              {'\n\nfür jedes x ∈ ℝ konvergieren.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">Reihe</span> Σaₖ ist die Summe unendlich vieler Glieder a₀ + a₁ + a₂ + …; „konvergiert" heißt, diese Summe nähert sich einem endlichen Wert. Die <span className="hint-em">Fakultät</span> n! = 1·2·3·…·n (z. B. 5! = 120) wächst extrem schnell.</p>
              <p><span className="hint-em">Quotientenkriterium</span>: Bildet man den Betrag des Verhältnisses aufeinanderfolgender Glieder und gilt L = lim(k→∞) |aₖ₊₁/aₖ| &lt; 1, so konvergiert die Reihe (sogar absolut). Idee: Die Glieder schrumpfen schließlich schneller als eine geometrische Folge mit Quotient &lt; 1.</p>
              <p>Wichtige Vereinfachungsregeln beim Quotienten:</p>
              <ul>
                <li>Potenzen: x^(2k+3)/x^(2k+1) = x² (Exponenten subtrahieren).</li>
                <li>Fakultäten: (2k+1)!/(2k+3)! = 1/((2k+3)(2k+2)), weil (2k+3)! = (2k+3)(2k+2)·(2k+1)! — die gemeinsamen Faktoren kürzen sich.</li>
                <li>Das Vorzeichen (−1)ᵏ verschwindet im Betrag (|−1| = 1).</li>
                <li><span className="hint-em">x ist fest</span>, nur k → ∞ — also ist x² eine Konstante im Zähler.</li>
              </ul>
            </>,
            <>
              <p>So zeigt man Konvergenz beider Reihen für jedes x ∈ ℝ:</p>
              <pre className="hint-code-block">{`SINUSREIHE: aₖ = (−1)ᵏ · x^(2k+1)/(2k+1)!

|aₖ₊₁/aₖ| = |x^(2k+3)/(2k+3)!| · |(2k+1)!/x^(2k+1)|
   Potenzen:   x^(2k+3)/x^(2k+1) = x²
   Fakultäten: (2k+1)!/(2k+3)! = 1/[(2k+3)(2k+2)]
   ⇒ |aₖ₊₁/aₖ| = x² / [(2k+3)(2k+2)]

Grenzwert k → ∞ (x fest, Nenner → ∞):
   x² / [(2k+3)(2k+2)] → 0 < 1
   ⇒ Quotientenkriterium ⇒ Sinusreihe konvergiert. ✓

KOSINUSREIHE: aₖ = (−1)ᵏ · x^(2k)/(2k)!
   analog:
   |aₖ₊₁/aₖ| = x² / [(2k+2)(2k+1)] → 0 < 1
   ⇒ Kosinusreihe konvergiert. ✓

Da für JEDES feste x der Grenzwert 0 (<1) ist,
konvergieren beide Reihen für alle x ∈ ℝ.`}</pre>
              <p>Entscheidend: Egal wie groß x² ist — der Nenner (2k+3)(2k+2) wächst mit k über alle Grenzen, drückt den Quotienten also auf 0. Die schnell wachsende Fakultät schlägt jede feste Potenz von x.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ xᵏ/k! (die exp-Reihe).</p>
              <pre className="hint-code-block">{`aₖ = xᵏ/k!
|aₖ₊₁/aₖ| = |x^(k+1)/(k+1)!| · |k!/xᵏ|
          = |x|/(k+1) → 0 < 1  (x fest, k → ∞)
⇒ konvergiert für alle x. (gleiches Fakultäts-Argument)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x als mit k wachsende Variable behandeln → <strong>✅ Richtig:</strong> x ist eine FESTE reelle Zahl; nur k → ∞; deshalb ist x² konstant und der Quotient x²/((2k+3)(2k+2)) → 0.</li>
              <li><strong>❌ Falsch:</strong> (2k+1)!/(2k+3)! = (2k+1)/(2k+3) → <strong>✅ Richtig:</strong> (2k+3)! = (2k+3)(2k+2)(2k+1)!, also kürzt sich (2k+1)! weg und es bleibt 1/((2k+3)(2k+2)).</li>
            </ul>,
            <p>Selbst-Probe: Setze x = 10 fest, k = 100: Quotient ≈ 100/(203·202) ≈ 0,0024 → schon winzig; für noch größeres k geht er gegen 0. Frage: Warum darf man x als Konstante behandeln, und warum sorgt die Fakultät im Nenner dafür, dass der Quotient für JEDES feste x gegen 0 (und damit unter 1) geht?</p>,
          ),
          solution: (
            <>
              {'Mit Quotientenkriterium:'}
              {'\n'}
              {'Sei '}<M>{'x \\in \\mathbb{R}'}</M>{'. Definiere '}<M>{'a_k := (-1)^k \\frac{x^{2k+1}}{(2k+1)!}'}</M>{'. Wir berechnen'}
              {'\n'}
              <M>{'\\left|\\frac{a_{k+1}}{a_k}\\right| = \\left|\\frac{(-1)^{k+1}\\frac{x^{2(k+1)+1}}{(2(k+1)+1)!}}{(-1)^k\\frac{x^{2k+1}}{(2k+1)!}}\\right| = \\left|\\frac{x^{2k+3}}{x^{2k+1}}\\cdot\\frac{(2k+1)!}{(2k+3)!}\\right| = \\frac{x^2}{(2k+3)(2k+2)}'}</M>{'.'}
              {'\n'}
              {'Es ist '}<M>{'\\lim_{k\\to\\infty} \\frac{x^2}{(2k+3)(2k+2)} = 0 < 1'}</M>{'.'}
              {'\n'}
              {'Nach dem Quotientenkriterium konvergiert die Sinusreihe für jedes '}<M>{'x \\in \\mathbb{R}'}</M>{'.'}
              {'\n'}
              {'Sei '}<M>{'x \\in \\mathbb{R}'}</M>{'. Definiere '}<M>{'a_k := (-1)^k \\frac{x^{2k}}{(2k)!}'}</M>{'. Wir berechnen'}
              {'\n'}
              <M>{'\\left|\\frac{a_{k+1}}{a_k}\\right| = \\left|\\frac{(-1)^{k+1}\\frac{x^{2(k+1)}}{(2(k+1))!}}{(-1)^k\\frac{x^{2k}}{(2k)!}}\\right| = \\left|\\frac{x^{2k+2}}{x^{2k}}\\cdot\\frac{(2k)!}{(2k+2)!}\\right| = \\frac{x^2}{(2k+2)(2k+1)}'}</M>{'.'}
              {'\n'}
              {'Es ist '}<M>{'\\lim_{k\\to\\infty} \\frac{x^2}{(2k+2)(2k+1)} = 0 < 1'}</M>{'.'}
              {'\n'}
              {'Nach dem Quotientenkriterium konvergiert die Cosinusreihe für jedes '}<M>{'x \\in \\mathbb{R}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Zeigen Sie, dass für jedes x ∈ ℝ\n\ncos(x) = cos(−x)  und  sin(−x) = −sin(x)\n\ngilt.'}</>,
          hint: h(
            <>
              <p>Zu zeigen sind die <span className="hint-em">Symmetrien</span> cos(−x) = cos(x) (cos ist eine <span className="hint-em">gerade</span> Funktion) und sin(−x) = −sin(x) (sin ist <span className="hint-em">ungerade</span>). Beweisidee: −x in die Reihendarstellung einsetzen und das Vorzeichen sauber behandeln.</p>
              <p><span className="hint-em">Schlüsselregel über gerade/ungerade Potenzen</span> (denn (−x)ⁿ = (−1)ⁿ·xⁿ):</p>
              <ul>
                <li>Gerade Hochzahl: (−x)^(2k) = (−1)^(2k)·x^(2k) = (+1)·x^(2k) = x^(2k). Ein Minus, gerade oft multipliziert, hebt sich weg → Vorzeichen verschwindet.</li>
                <li>Ungerade Hochzahl: (−x)^(2k+1) = (−1)^(2k+1)·x^(2k+1) = (−1)·x^(2k+1) = −x^(2k+1). Ein Minus, ungerade oft → bleibt.</li>
              </ul>
              <p>Die cos-Reihe enthält nur GERADE Potenzen x^(2k), die sin-Reihe nur UNGERADE Potenzen x^(2k+1) — daher die unterschiedliche Symmetrie. Ein <span className="hint-em">konstanter Faktor</span> (hier das gemeinsame −1) darf aus einer Summe herausgezogen werden: Σ(−1)·bₖ = −Σbₖ.</p>
            </>,
            <>
              <p>So beweist man beide Symmetrien aus den Reihen:</p>
              <pre className="hint-code-block">{`COSINUS (nur gerade Potenzen x^(2k)):
   cos(−x) = Σ (−1)ᵏ · (−x)^(2k) / (2k)!
   da (−x)^(2k) = x^(2k):
           = Σ (−1)ᵏ · x^(2k) / (2k)!
           = cos(x).            ⇒ cos(−x) = cos(x) ✓

SINUS (nur ungerade Potenzen x^(2k+1)):
   sin(−x) = Σ (−1)ᵏ · (−x)^(2k+1) / (2k+1)!
   da (−x)^(2k+1) = −x^(2k+1):
           = Σ (−1)ᵏ · (−1)·x^(2k+1) / (2k+1)!
   konstanten Faktor (−1) vor die Summe ziehen:
           = − Σ (−1)ᵏ · x^(2k+1) / (2k+1)!
           = − sin(x).          ⇒ sin(−x) = −sin(x) ✓`}</pre>
              <p>Alles hängt am Exponenten der x-Potenz: gerade (cos) ⇒ Vorzeichen weg ⇒ unverändert; ungerade (sin) ⇒ ein Minus bleibt ⇒ Gesamt-Vorzeichenwechsel.</p>
            </>,
            <>
              <p>Anschauung an einzelnen Potenzen (ohne Reihe):</p>
              <pre className="hint-code-block">{`gerade:   (−x)² = x²,  (−x)⁴ = x⁴   (wie x²,x⁴)
ungerade: (−x)³ = −x³, (−x)⁵ = −x⁵  (Vorzeichen dreht)
→ Funktion aus geraden Potenzen ist gerade,
  aus ungeraden Potenzen ungerade.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−x)^(2k) = −x^(2k) behaupten → <strong>✅ Richtig:</strong> (−x)^(2k) = (−1)^(2k)·x^(2k) = (+1)·x^(2k) = x^(2k); bei gerader Hochzahl verschwindet das Vorzeichen.</li>
              <li><strong>❌ Falsch:</strong> auch das Vorzeichen (−1)ᵏ der Reihe mit umdrehen → <strong>✅ Richtig:</strong> (−1)ᵏ bleibt unangetastet; nur (−x)ⁿ wird umgeschrieben. Beim sin entsteht GENAU EIN zusätzliches Minus, das man ausklammert.</li>
            </ul>,
            <p>Selbst-Probe: Konkret cos(−x): erstes Glied (k=0): (−x)⁰/0! = 1 (= bei cos(x)); nächstes (k=1): −(−x)²/2! = −x²/2 (= bei cos(x)) — identisch. Bei sin(−x), k=0: (−x)¹/1! = −x = −(x) ⇒ Vorzeichen gedreht. Frage: Warum macht die gerade Potenz x^(2k) den Kosinus symmetrisch, während die ungerade Potenz x^(2k+1) beim Sinus ein Gesamt-Minus erzeugt?</p>,
          ),
          solution: (
            <>
              {'Da '}<M>{'(-x)^{2k} = x^{2k}'}</M>{' für jedes '}<M>{'k \\in \\mathbb{N}'}</M>{', ergibt sich'}
              {'\n'}
              <M>{'\\cos(-x) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{(-x)^{2k}}{(2k)!} = \\sum_{k=0}^{\\infty} (-1)^k \\frac{x^{2k}}{(2k)!} = \\cos(x)'}</M>{'.'}
              {'\n'}
              {'Da '}<M>{'(-x)^{2k+1} = -x^{2k+1}'}</M>{' für jedes '}<M>{'k \\in \\mathbb{N}'}</M>{', ergibt sich'}
              {'\n'}
              <M>{'\\sin(-x) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{(-x)^{2k+1}}{(2k+1)!} = \\sum_{k=0}^{\\infty} (-1)^k \\frac{-x^{2k+1}}{(2k+1)!} = -\\sum_{k=0}^{\\infty} (-1)^k \\frac{x^{2k+1}}{(2k+1)!} = -\\sin(x)'}</M>{'.'}
            </>
          ),
        },
      ],
    },
  ],
}
