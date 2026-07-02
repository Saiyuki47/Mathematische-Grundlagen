import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt13: MatheBlatt = {
  id: 'blatt13',
  nr: '13',
  titel: 'Differentiation',
  aufgaben: [
    {
      id: 'b13a1',
      nr: 1,
      title: 'Ableitungen bestimmen',
      referenz: ['ableitungsregeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Bestimmen Sie die Ableitungen der folgenden Funktionen:\n\nf : ℝ → ℝ,  x ↦ x³ exp(1 + 2x)'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Ableiten</span> heißt, die Steigung einer Funktion zu bestimmen; das Ergebnis f'(x) heißt Ableitung. Hier steht ein <span className="hint-em">Produkt</span> zweier Funktionen: x³ mal exp(1+2x). exp(z) ist die <span className="hint-em">Exponentialfunktion</span> eˢᶻ (e ≈ 2,718); ihre Besonderheit: abgeleitet bleibt sie sich selbst, also (exp(z))' = exp(z), solange z = x ist.</p>
              <p><span className="hint-em">Potenzregel</span>: (xⁿ)' = n·xⁿ⁻¹ — den Exponenten als Faktor nach vorn ziehen und den Exponenten um 1 verkleinern (z. B. (x³)' = 3x²). Das brauchst du für u = x³.</p>
              <p><span className="hint-em">Produktregel</span>: Steht ein Produkt zweier Funktionen u(x)·v(x), so gilt (u·v)' = u'·v + u·v'. Man leitet abwechselnd je einen Faktor ab und lässt den anderen stehen, dann addiert man beide Teile. Grund: beide Faktoren ändern sich gleichzeitig, also tragen beide zur Steigung bei.</p>
              <p><span className="hint-em">Kettenregel</span>: Steht eine Funktion in einer Funktion (eine „äußere" f um eine „innere" g), also f(g(x)), so gilt (f(g(x)))' = f'(g(x))·g'(x) — äußere Ableitung (innere bleibt unverändert eingesetzt) MAL innere Ableitung. Bei exp(1+2x) ist die äußere Funktion exp, die innere g(x) = 1+2x mit g'(x) = 2. Darum ist (exp(1+2x))' = exp(1+2x)·2.</p>
            </>,
            <>
              <p>So leitet man f(x) = x³ · exp(1+2x) Schritt für Schritt ab:</p>
              <pre className="hint-code-block">{`1) Produkt erkennen → Produktregel (u·v)' = u'v + uv'.
   u = x³                v = exp(1+2x)

2) u ableiten (Potenzregel (xⁿ)' = n·xⁿ⁻¹):
   u' = 3x²

3) v ableiten (Kettenregel, denn 1+2x steckt in exp):
   äußere Funktion: exp(...)  → Ableitung exp(...)
   innere Funktion: 1+2x      → Ableitung 2
   v' = exp(1+2x) · 2

4) In die Produktregel einsetzen u'v + uv':
   f'(x) = 3x²·exp(1+2x) + x³·exp(1+2x)·2

5) Gemeinsamen Faktor exp(1+2x) ausklammern:
   f'(x) = (3x² + 2x³)·exp(1+2x)`}</pre>
              <p>Warum kommt bei v' die 2 dazu? Weil die innere Funktion 1+2x abgeleitet 2 ergibt — ohne diesen Faktor wäre die Kettenregel verletzt.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Typs: f(x) = x² · exp(3x)</p>
              <pre className="hint-code-block">{`u = x²        → u' = 2x          (Potenzregel)
v = exp(3x)   → v' = exp(3x)·3    (Kettenregel, innere 3x → 3)
f'(x) = u'v + uv'
      = 2x·exp(3x) + x²·exp(3x)·3
      = (2x + 3x²)·exp(3x)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (exp(1+2x))' = exp(1+2x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> innere Funktion 1+2x ableiten und als Faktor anhängen: (exp(1+2x))' = exp(1+2x)·2.</li>
              <li><strong>❌ Falsch:</strong> Produkt einfach faktorweise ableiten: f' = (x³)'·(exp(1+2x))' = 3x²·2exp(1+2x) → <strong>✅ Richtig:</strong> bei einem Produkt gilt die Produktregel u'v + uv', nicht u'·v'.</li>
              <li><strong>❌ Falsch:</strong> nur einen der beiden Summanden hinschreiben → <strong>✅ Richtig:</strong> die Produktregel liefert immer beide Teile u'v UND uv'.</li>
            </ul>,
            <p>Selbstkontrolle: Klammere am Ende exp(1+2x) aus — bleibt (3x² + 2x³)·exp(1+2x)? Frage: Warum braucht v = exp(1+2x) die Kettenregel, x³ aber nur die Potenzregel — woran erkennt man, ob eine „innere Funktion" vorliegt?</p>,
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
              <p>Hier soll ein <span className="hint-em">Bruch</span> (Quotient) abgeleitet werden: oben (Zähler) steht u = 2x, unten (Nenner) v = 2x²+1. Dafür gibt es eine eigene Regel.</p>
              <p><span className="hint-em">Quotientenregel</span>: (u/v)' = (u'·v − u·v') / v². In Worten: „Ableitung des Zählers mal Nenner MINUS Zähler mal Ableitung des Nenners, alles geteilt durch den Nenner zum Quadrat." Die Reihenfolge im Zähler ist wichtig — der abgeleitete Zähler u' kommt zuerst, sonst stimmt das Vorzeichen nicht.</p>
              <p><span className="hint-em">Potenzregel</span> für die Ableitungen: (xⁿ)' = n·xⁿ⁻¹. Außerdem: ein konstanter Faktor bleibt erhalten ((c·x)' = c) und die Ableitung einer Konstanten ist 0 ((1)' = 0). Damit ist u = 2x → u' = 2 und v = 2x²+1 → v' = 4x (denn (2x²)' = 2·2x = 4x, und (1)' = 0).</p>
              <p>Das v² im Nenner heißt: den ganzen Nenner quadrieren, also (2x²+1)². Es wird NICHT ausmultipliziert, sondern als Klammer stehen gelassen.</p>
            </>,
            <>
              <p>So leitet man g(x) = 2x / (2x²+1) ab:</p>
              <pre className="hint-code-block">{`1) Bruch erkennen → Quotientenregel (u/v)' = (u'v − uv')/v².
   u = 2x          v = 2x² + 1

2) u und v ableiten (Potenzregel):
   u' = 2                 (denn (2x)' = 2)
   v' = 4x                (denn (2x²)' = 4x, (1)' = 0)

3) In (u'v − uv')/v² einsetzen:
   g'(x) = [ 2·(2x²+1) − 2x·4x ] / (2x²+1)²

4) Zähler ausmultiplizieren und zusammenfassen:
   2·(2x²+1) = 4x² + 2
   2x·4x     = 8x²
   Zähler = 4x² + 2 − 8x² = −4x² + 2

5) Ergebnis:
   g'(x) = (−4x² + 2) / (2x²+1)²`}</pre>
              <p>Warum u'v − uv' und nicht andersherum? Das Minuszeichen sorgt dafür, dass eine wachsende Nenner-Funktion die Steigung verkleinert — vertauscht man die Reihenfolge, dreht sich das Vorzeichen falsch herum.</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = x / (x²+1)</p>
              <pre className="hint-code-block">{`u = x       → u' = 1
v = x²+1    → v' = 2x
g'(x) = (u'v − uv')/v²
      = [ 1·(x²+1) − x·2x ] / (x²+1)²
      = (x²+1 − 2x²) / (x²+1)²
      = (1 − x²) / (x²+1)²`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt ableiten: (2x)'/(2x²+1)' = 2/(4x) → <strong>✅ Richtig:</strong> ein Bruch wird mit der Quotientenregel (u'v − uv')/v² abgeleitet, nicht stockwerkweise.</li>
              <li><strong>❌ Falsch:</strong> Reihenfolge vertauschen: (uv' − u'v)/v² → <strong>✅ Richtig:</strong> der abgeleitete Zähler steht vorn: (u'v − uv')/v² (sonst falsches Vorzeichen).</li>
              <li><strong>❌ Falsch:</strong> v² als 2x²+1 (nicht quadriert) → <strong>✅ Richtig:</strong> der ganze Nenner wird quadriert: (2x²+1)².</li>
            </ul>,
            <p>Selbstkontrolle: Ergibt der Zähler 4x²+2−8x² wirklich −4x²+2? Frage: Warum steht bei der Quotientenregel u'v − uv' im Zähler und nicht u·v' − u'·v — was würde sich am Vorzeichen ändern?</p>,
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
              <p>Wieder ein <span className="hint-em">Produkt</span> zweier Funktionen: u = x³ + √3 und v = ln(x²+x). ln ist der <span className="hint-em">natürliche Logarithmus</span> (Umkehrung von exp); seine Grundableitung ist (ln(x))' = 1/x.</p>
              <p><span className="hint-em">Produktregel</span>: (u·v)' = u'·v + u·v' — jeden Faktor einmal ableiten, den anderen stehen lassen, addieren.</p>
              <p>Für u brauchst du die <span className="hint-em">Potenzregel</span> (xⁿ)' = n·xⁿ⁻¹ und die Tatsache, dass √3 eine feste Zahl (Konstante ≈ 1,732) ist; die Ableitung jeder Konstanten ist 0. Also u' = 3x² + 0 = 3x². Der Wurzelausdruck √3 ist hier nur eine Zahl, kein √x — er fällt beim Ableiten weg.</p>
              <p>Für v brauchst du die <span className="hint-em">Kettenregel</span> für den Logarithmus: (ln(g(x)))' = g'(x)/g(x). Begründung: äußere Funktion ln hat Ableitung 1/(…), die innere g(x) wird unverändert eingesetzt und mit g'(x) multipliziert — zusammen 1/g(x) · g'(x) = g'(x)/g(x). Hier ist g(x) = x²+x mit g'(x) = 2x+1, also v' = (2x+1)/(x²+x).</p>
            </>,
            <>
              <p>So leitet man h(x) = (x³+√3) · ln(x²+x) ab:</p>
              <pre className="hint-code-block">{`1) Produkt erkennen → Produktregel (u·v)' = u'v + uv'.
   u = x³ + √3            v = ln(x²+x)

2) u ableiten (Potenzregel + Konstante √3 fällt weg):
   u' = 3x² + 0 = 3x²

3) v ableiten (Kettenregel für ln):
   innere Funktion g(x) = x²+x  → g'(x) = 2x+1
   v' = g'(x)/g(x) = (2x+1)/(x²+x)

4) In die Produktregel u'v + uv' einsetzen:
   h'(x) = 3x²·ln(x²+x)
         + (x³+√3)· (1/(x²+x)) ·(2x+1)`}</pre>
              <p>Warum verschwindet √3? Es ist eine feste Zahl ohne x; Konstanten haben Steigung 0. Warum bei ln der Bruch g'/g? Weil die innere Funktion x²+x abgeleitet 2x+1 ergibt und durch die ln-Ableitung 1/(x²+x) geteilt erscheint.</p>
            </>,
            <>
              <p>Anderes Beispiel: h(x) = (x² + 5) · ln(3x)</p>
              <pre className="hint-code-block">{`u = x²+5    → u' = 2x        (5 ist Konstante → 0)
v = ln(3x)  → g=3x, g'=3 → v' = 3/(3x) = 1/x
h'(x) = u'v + uv'
      = 2x·ln(3x) + (x²+5)·(1/x)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (ln(x²+x))' = 1/(x²+x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> innere Ableitung 2x+1 anhängen: (ln(x²+x))' = (2x+1)/(x²+x).</li>
              <li><strong>❌ Falsch:</strong> √3 wie √x behandeln und mit ableiten → <strong>✅ Richtig:</strong> √3 ist eine feste Zahl (Konstante), ihre Ableitung ist 0, also u' = 3x².</li>
              <li><strong>❌ Falsch:</strong> Produkt faktorweise ableiten u'·v' → <strong>✅ Richtig:</strong> Produktregel u'v + uv' mit beiden Summanden.</li>
            </ul>,
            <p>Selbstkontrolle: Ist u' = 3x² (fällt √3 weg?) und v' = (2x+1)/(x²+x)? Frage: Warum liefert ln(g(x)) die Ableitung g'(x)/g(x), und warum trägt die Konstante √3 nichts zur Steigung bei?</p>,
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
              <p>|x| ist der <span className="hint-em">Betrag</span> von x: er macht jede Zahl positiv. Genauer: |x| = x, wenn x ≥ 0, und |x| = −x, wenn x {'<'} 0 (für negatives x dreht das Minus das Vorzeichen ins Positive, z. B. |−3| = −(−3) = 3). Weil |x| zwei „Gesichter" hat, schreibt man u(x) = x·|x| als <span className="hint-em">Fallunterscheidung</span>: für x ≥ 0 ist u(x) = x·x = x²; für x {'<'} 0 ist u(x) = x·(−x) = −x².</p>
              <p>Auf jedem Stück (ohne die Nahtstelle x = 0) leitet man normal mit der <span className="hint-em">Potenzregel</span> (xⁿ)' = n·xⁿ⁻¹ ab: x² → 2x und −x² → −2x.</p>
              <p>An der Nahtstelle x = 0 darf man die Ableitung NICHT einfach aus einer Formel ablesen, weil dort zwei verschiedene Formeln aufeinandertreffen. Stattdessen nutzt man die <span className="hint-em">Definition der Ableitung</span> über den <span className="hint-em">Differenzenquotienten</span>: f'(0) = lim_(x→0) (f(x) − f(0))/(x − 0). Das ist die Steigung der Sekante, die immer näher an 0 heranrückt. Man prüft ihn <span className="hint-em">einseitig</span>: von rechts (x→0⁺, dort gilt x²) und von links (x→0⁻, dort gilt −x²). Nur wenn beide einseitigen Grenzwerte gleich sind, existiert u'(0).</p>
            </>,
            <>
              <p>So bestimmt man die Ableitung von u(x) = x|x|:</p>
              <pre className="hint-code-block">{`1) Betrag auflösen → Fallunterscheidung:
   x ≥ 0:  u(x) = x·x   = x²
   x < 0:  u(x) = x·(−x)= −x²

2) Auf ℝ\\{0} mit Potenzregel ableiten:
   x > 0:  u'(x) = 2x
   x < 0:  u'(x) = −2x

3) Nahtstelle x = 0 über den Differenzenquotienten,
   mit f(0) = 0:
   von rechts: lim (x²−0)/(x−0) = lim x²/x = lim x = 0
   von links:  lim (−x²−0)/(x−0)= lim −x²/x= lim(−x)=0

4) Beide einseitigen Grenzwerte = 0 → u'(0) = 0.

Ergebnis (zusammengesetzt):
   u'(x) = 2x  (x>0),  0  (x=0),  −2x  (x<0).`}</pre>
              <p>Warum der Differenzenquotient in 0? Weil bei der Nahtstelle keine der beiden Formeln allein gilt — nur die Grenzwert-Definition entscheidet, ob die Steigungen von links und rechts zusammenpassen.</p>
            </>,
            <>
              <p>Anderes Beispiel: f(x) = |x| selbst (Betragsfunktion)</p>
              <pre className="hint-code-block">{`x ≥ 0: f(x)=x  → f'(x)=1
x < 0: f(x)=−x → f'(x)=−1
Nahtstelle 0:
  rechts: lim (x−0)/x = 1
  links:  lim (−x−0)/x = −1
1 ≠ −1 → f NICHT differenzierbar in 0 (Knick!).
Im Gegensatz dazu passt bei x|x| beides zu 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> die Nahtstelle x = 0 überspringen und nur 2x bzw. −2x angeben → <strong>✅ Richtig:</strong> bei stückweise definierten Funktionen in 0 immer den Differenzenquotienten einseitig berechnen.</li>
              <li><strong>❌ Falsch:</strong> für x {'<'} 0 schreiben u(x) = x² → <strong>✅ Richtig:</strong> dort ist |x| = −x, also u(x) = x·(−x) = −x².</li>
            </ul>,
            <p>Selbstkontrolle: Sind beide einseitigen Grenzwerte in 0 wirklich 0 (also u differenzierbar)? Frage: Warum reicht es an einer Nahtstelle nicht, eine Formel einzusetzen — und woran erkennt man am Vergleich der einseitigen Grenzwerte einen „Knick" wie bei |x|?</p>,
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
      referenz: ['ableitungsregeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Skizzieren Sie zunächst folgende Funktionen und überprüfen Sie dann, ob sie in 0 differenzierbar sind.\n\nf : ℝ → ℝ,  x ↦ { x, x ≥ 0;  x², x < 0 }'}</>,
          hint: h(
            <>
              <p>Die Funktion ist <span className="hint-em">stückweise definiert</span>: für x ≥ 0 gilt f(x) = x (eine Gerade), für x {'<'} 0 gilt f(x) = x² (eine Parabel). An der Nahtstelle x = 0 treffen beide Teile aufeinander; beide ergeben dort f(0) = 0, die Funktion ist also lückenlos (stetig). Die Frage ist, ob sie dort auch eine eindeutige Steigung hat — ob sie <span className="hint-em">differenzierbar</span> ist.</p>
              <p><span className="hint-em">Definition der Ableitung über den Differenzenquotienten</span>: f'(0) = lim_(x→0) (f(x) − f(0))/(x − 0). Das ist die Steigung der Verbindungsgeraden (Sekante) zwischen dem Punkt bei 0 und einem Nachbarpunkt, wenn der Nachbar gegen 0 wandert. Existiert dieser Grenzwert, ist das die Ableitung.</p>
              <p>An einer Nahtstelle prüft man ihn <span className="hint-em">einseitig</span>: f'₊(0) von rechts (x→0⁺, dort gilt f(x)=x) und f'₋(0) von links (x→0⁻, dort gilt f(x)=x²). f ist genau dann in 0 differenzierbar, wenn beide einseitigen Grenzwerte EXISTIEREN und GLEICH sind. Wichtig: <span className="hint-em">Stetigkeit allein genügt nicht</span> — eine lückenlose Kurve kann trotzdem einen Knick haben (verschiedene Steigungen von links/rechts).</p>
            </>,
            <>
              <p>So prüft man f in 0 (f(0) = 0):</p>
              <pre className="hint-code-block">{`1) Rechtsseitig (x→0⁺, dort f(x)=x):
   f'₊(0) = lim (f(x)−f(0))/(x−0)
          = lim (x − 0)/x = lim 1 = 1

2) Linksseitig (x→0⁻, dort f(x)=x²):
   f'₋(0) = lim (x² − 0)/x = lim x = 0

3) Vergleich: f'₊(0) = 1,  f'₋(0) = 0.
   1 ≠ 0 → die Grenzwerte stimmen NICHT überein.

Ergebnis: f ist in 0 NICHT differenzierbar
(die Gerade kommt mit Steigung 1 an, die Parabel
mit Steigung 0 → Knick im Ursprung).`}</pre>
              <p>Warum einseitig? Weil rechts und links verschiedene Formeln gelten; nur der getrennte Vergleich deckt einen Knick auf.</p>
            </>,
            <>
              <p>Anderes Beispiel (passt zusammen, also differenzierbar): f(x) = x² (x≥0), f(x) = x³ (x{'<'}0)</p>
              <pre className="hint-code-block">{`rechts: lim (x²−0)/x = lim x  = 0
links:  lim (x³−0)/x = lim x² = 0
0 = 0 → differenzierbar in 0 mit f'(0)=0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „f ist stetig in 0, also differenzierbar" → <strong>✅ Richtig:</strong> Stetigkeit ist nötig, aber nicht hinreichend; hier f'₊ = 1 ≠ 0 = f'₋ → Knick, nicht differenzierbar.</li>
              <li><strong>❌ Falsch:</strong> nur eine Seite berechnen → <strong>✅ Richtig:</strong> immer beide einseitigen Differenzenquotienten und dann vergleichen.</li>
            </ul>,
            <p>Selbstkontrolle: Steigung der Geraden x ist überall 1, die der Parabel x² ist in 0 gerade 0 — passen 1 und 0 zusammen? Frage: Was besagt die Ableitungsdefinition in x = 0, und warum reicht Stetigkeit allein nicht für Differenzierbarkeit?</p>,
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
          text: <>{'g : ℝ → ℝ,  x ↦ { x³, x ≥ 0;  x², x < 0 }'}</>,
          hint: h(
            <>
              <p>Wieder eine <span className="hint-em">stückweise definierte</span> Funktion: für x ≥ 0 gilt g(x) = x³, für x {'<'} 0 gilt g(x) = x². Beide ergeben in 0 den Wert g(0) = 0 (lückenlos). Wir prüfen die <span className="hint-em">Differenzierbarkeit</span> in der Nahtstelle x = 0.</p>
              <p><span className="hint-em">Differenzenquotient (Ableitungsdefinition)</span>: g'(0) = lim_(x→0) (g(x) − g(0))/(x − 0) — die Steigung der Sekante, wenn der Nachbarpunkt gegen 0 rückt.</p>
              <p>An der Nahtstelle <span className="hint-em">einseitig</span> rechnen: von rechts (x→0⁺, dort gilt x³) und von links (x→0⁻, dort gilt x²). Differenzierbar ist g in 0 genau dann, wenn beide einseitigen Grenzwerte existieren und übereinstimmen. <span className="hint-em">Stetigkeit allein genügt nicht</span> — man muss die Steigungen wirklich ausrechnen, nicht nur die Lückenlosigkeit feststellen.</p>
            </>,
            <>
              <p>So prüft man g in 0 (g(0) = 0):</p>
              <pre className="hint-code-block">{`1) Rechtsseitig (x→0⁺, dort g(x)=x³):
   g'₊(0) = lim (x³ − 0)/x = lim x² = 0

2) Linksseitig (x→0⁻, dort g(x)=x²):
   g'₋(0) = lim (x² − 0)/x = lim x = 0

3) Vergleich: g'₊(0) = 0 = g'₋(0).
   Beide gleich → Grenzwert existiert.

Ergebnis: g ist in 0 differenzierbar mit g'(0) = 0.`}</pre>
              <p>Beim Kürzen x³/x = x² und x²/x = x verschwindet jeweils ein x, danach geht der Rest für x→0 gegen 0. Beide Teile kommen also mit Steigung 0 an — kein Knick.</p>
            </>,
            <>
              <p>Gegenbeispiel zum Kontrast (Knick!): g(x) = x (x≥0), g(x) = x² (x{'<'}0)</p>
              <pre className="hint-code-block">{`rechts: lim (x−0)/x  = 1
links:  lim (x²−0)/x = 0
1 ≠ 0 → NICHT differenzierbar.
Bei x³/x² dagegen kommt 0 = 0 heraus → differenzierbar.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur Stetigkeit prüfen und daraus Differenzierbarkeit folgern → <strong>✅ Richtig:</strong> beide einseitigen Differenzenquotienten explizit berechnen; Stetigkeit ist notwendig, aber nicht hinreichend.</li>
              <li><strong>❌ Falsch:</strong> x³/x = x³ stehen lassen → <strong>✅ Richtig:</strong> ein x kürzen: x³/x = x², dann x→0 ergibt 0.</li>
            </ul>,
            <p>Selbstkontrolle: Liefern beide Seiten nach dem Kürzen wirklich 0? Frage: Warum müssen beide einseitigen Differenzenquotienten berechnet werden — reicht es, dass die Funktion stetig (lückenlos) ist?</p>,
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
          text: <>{'h : ℝ → ℝ,  x ↦ { x³ + 1, x ≥ 0;  x², x < 0 }'}</>,
          hint: h(
            <>
              <p>Wieder stückweise: für x ≥ 0 gilt h(x) = x³ + 1, für x {'<'} 0 gilt h(x) = x². Achtung — diesmal steht im oberen Teil ein „+1". Bevor man überhaupt über die Steigung nachdenkt, prüft man die <span className="hint-em">Stetigkeit</span>: Passt der Funktionswert an der Nahtstelle zusammen?</p>
              <p><span className="hint-em">Stetigkeit in 0</span> bedeutet: der rechtsseitige Grenzwert (x→0⁺), der linksseitige Grenzwert (x→0⁻) und der Funktionswert h(0) sind alle gleich — die Kurve hat dort keinen Sprung. Hier: von rechts h(x) = x³+1 → 0+1 = 1; von links h(x) = x² → 0. Die Werte 1 und 0 sind verschieden ⇒ ein <span className="hint-em">Sprung</span> ⇒ NICHT stetig.</p>
              <p><span className="hint-em">Schlüsselsatz</span>: „Differenzierbarkeit impliziert Stetigkeit." Eine Funktion mit eindeutiger Steigung kann keinen Sprung haben. Logische Umkehrung (Kontraposition): ist eine Funktion NICHT stetig, kann sie auch NICHT differenzierbar sein. Darum erübrigt sich hier der Differenzenquotient — die fehlende Stetigkeit beendet die Prüfung sofort.</p>
            </>,
            <>
              <p>So argumentiert man bei h:</p>
              <pre className="hint-code-block">{`1) Stetigkeit in 0 prüfen (Grenzwerte vergleichen):
   von rechts (x→0⁺): x³ + 1 → 0 + 1 = 1
   von links  (x→0⁻): x²     → 0
   1 ≠ 0  →  Sprung  →  h NICHT stetig in 0.

2) Schluss über den Satz:
   Differenzierbar ⇒ stetig.
   Kontraposition: nicht stetig ⇒ nicht differenzierbar.
   → h ist in 0 NICHT differenzierbar.

(Kontrolle per Differenzenquotient von links:
 lim (x² − 1)/x = lim (x − 1/x) = −∞ — existiert
 nicht, weil h(0)=1, aber x²→0 ≠ 1.)`}</pre>
              <p>Warum reicht der Sprung als Begründung? Weil Differenzierbarkeit das stärkere Verhalten ist: Wo schon die Lückenlosigkeit fehlt, kann es erst recht keine eindeutige Steigung geben.</p>
            </>,
            <>
              <p>Anderes Beispiel mit Sprung: f(x) = x+2 (x≥0), f(x) = x (x{'<'}0)</p>
              <pre className="hint-code-block">{`rechts: x+2 → 2     links: x → 0
2 ≠ 0 → Sprung → nicht stetig → nicht differenzierbar.
(Kein Differenzenquotient nötig.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sofort Differenzenquotienten rechnen, ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> zuerst Stetigkeit; ein Sprung schließt Differenzierbarkeit direkt aus.</li>
              <li><strong>❌ Falsch:</strong> die „+1" beim Grenzwert übersehen (x³+1 → 0) → <strong>✅ Richtig:</strong> x³ → 0, aber +1 bleibt, also Grenzwert 1.</li>
            </ul>,
            <p>Selbstkontrolle: Sind rechter Grenzwert (1) und linker Grenzwert (0) wirklich verschieden? Frage: Wie lautet die logische Kette „nicht stetig ⇒ …", und welches allgemeine Prinzip (welche Implikationsrichtung) steckt dahinter?</p>,
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
      referenz: ['ableitungsregeln'],
      subaufgaben: [
        {
          letter: '',
          text: (
            <>
              {'Die Funktion f : (0,∞) → (0,∞), x ↦ x² ist bijektiv, differenzierbar und f\'(x) ≠ 0 für alle x ∈ (0,∞). Ihre Umkehrfunktion\n\nf⁻¹ : (0,∞) → (0,∞), x ↦ √x\n\nist somit ebenfalls differenzierbar. Berechnen Sie die Ableitung der Wurzelfunktion f⁻¹ mit der Regel zur Berechnung der Ableitung der Umkehrfunktion.'}
            </>
          ),
          hint: h(
            <>
              <p>Die <span className="hint-em">Umkehrfunktion</span> f⁻¹ macht das, was f tut, wieder rückgängig: weil f(x) = x² aus einer Zahl ihr Quadrat macht, zieht die Umkehrung f⁻¹(x) = √x die Wurzel. Es gilt f(f⁻¹(x)) = x und f⁻¹(f(x)) = x. (Die Schreibweise f⁻¹ meint NICHT 1/f, sondern „Umkehrfunktion".)</p>
              <p><span className="hint-em">Umkehrfunktionsregel</span>: Die Ableitung der Umkehrfunktion ist (f⁻¹)'(x) = 1 / f'(f⁻¹(x)). In Worten: Kehrwert der Ableitung von f, aber an der Stelle f⁻¹(x) ausgewertet. Anschaulich: an zueinander gehörenden Punkten sind die Steigungen von f und f⁻¹ Kehrwerte voneinander (weil das Spiegeln an der Geraden y = x Steigung m in 1/m verwandelt). Voraussetzung: f'(f⁻¹(x)) ≠ 0, sonst dürfte man nicht durch 0 teilen.</p>
              <p>Bausteine: f'(x) berechnet man mit der <span className="hint-em">Potenzregel</span> (xⁿ)' = n·xⁿ⁻¹, also f'(x) = (x²)' = 2x. Und f⁻¹(x) = √x ist gegeben. „f'(f⁻¹(x))" heißt: in f'(x) = 2x überall x durch f⁻¹(x) = √x ersetzen → 2·√x.</p>
            </>,
            <>
              <p>So bestimmt man (f⁻¹)'(x) für f⁻¹(x) = √x:</p>
              <pre className="hint-code-block">{`1) Regel hinschreiben:
   (f⁻¹)'(x) = 1 / f'(f⁻¹(x))

2) f'(x) aus f(x) = x² (Potenzregel):
   f'(x) = 2x

3) f⁻¹(x) = √x in f' einsetzen
   (x in 2x durch √x ersetzen):
   f'(f⁻¹(x)) = 2·√x

4) Kehrwert bilden:
   (f⁻¹)'(x) = 1 / (2√x)`}</pre>
              <p>Warum f'(f⁻¹(x)) und nicht einfach f'(x)? Weil die Steigung von f⁻¹ an der Stelle x dem Kehrwert der Steigung von f an der zugehörigen Stelle f⁻¹(x) entspricht — der Einsetzpunkt muss „zurückübersetzt" werden. Probe per Potenzregel: (√x)' = (x^(1/2))' = (1/2)x^(−1/2) = 1/(2√x) — dasselbe Ergebnis.</p>
            </>,
            <>
              <p>Anderes Beispiel: f(x) = x³ auf (0,∞), Umkehrung f⁻¹(x) = ∛x</p>
              <pre className="hint-code-block">{`f'(x) = 3x²
f'(f⁻¹(x)) = 3·(∛x)² = 3·x^(2/3)
(f⁻¹)'(x) = 1 / (3 x^(2/3))
Probe Potenzregel: (x^(1/3))' = (1/3)x^(−2/3) ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> direkt (√x)' per Potenzregel rechnen, obwohl die Aufgabe die Umkehrfunktionsregel verlangt → <strong>✅ Richtig:</strong> den geforderten Weg gehen: (f⁻¹)'(x) = 1/f'(f⁻¹(x)) (Ergebnis ist dasselbe, dient zur Probe).</li>
              <li><strong>❌ Falsch:</strong> f' an der Stelle x statt an f⁻¹(x) einsetzen: 1/(2x) → <strong>✅ Richtig:</strong> an f⁻¹(x) = √x auswerten: 1/(2√x).</li>
            </ul>,
            <p>Selbstkontrolle: Ergibt der Kehrwert von 2√x genau 1/(2√x)? Frage: Warum muss man in f' die Stelle f⁻¹(x) (nicht x) einsetzen, und wieso sind die Steigungen von f und f⁻¹ Kehrwerte?</p>,
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
      referenz: ['ableitungsregeln', 'reihen-konvergenz'],
      subaufgaben: [
        {
          letter: '',
          text: (
            <>
              {'Leiten Sie die Funktionen\n\nf : (−1,1) → ℝ, x ↦ '}
              <M>{'\\sum_{k=0}^{\\infty} x^k'}</M>
              {'   und   g : (−1,1) → ℝ, x ↦ '}
              <Frac n="1" d="1 − x" />
              {'\n\nab. Was ist der Zusammenhang zwischen f\' und g\'?\nHinweis: Denken Sie an die geometrische Reihe.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">Potenzreihe</span> Σ_(k=0)^∞ xᵏ ist eine unendliche Summe von Potenzen: 1 + x + x² + x³ + … Die <span className="hint-em">geometrische Reihe</span> sagt, dass diese Summe für |x| {'<'} 1 einen festen Wert hat: Σ_(k=0)^∞ xᵏ = 1/(1−x). Hier sind f (die Reihe) und g (der Bruch) also dieselbe Funktion auf (−1,1).</p>
              <p><span className="hint-em">Gliedweises Ableiten</span>: Innerhalb des Konvergenzbereichs darf man eine Potenzreihe Term für Term ableiten (das ist ein Satz, der nur dort gilt — nicht für beliebige Funktionenreihen). Jeden Summanden mit der <span className="hint-em">Potenzregel</span> (xᵏ)' = k·xᵏ⁻¹ ableiten. Der erste Term (k=0) ist x⁰ = 1, eine Konstante mit Ableitung 0, fällt also weg — darum startet die abgeleitete Summe bei k=1.</p>
              <p><span className="hint-em">Indexshift</span>: Um die Summe wieder bei k=0 beginnen zu lassen, ersetzt man den Laufindex. Schreibt man überall k+1 statt k (was bedeutet: der neue k=0 entspricht dem alten k=1), wird aus Σ_(k=1) k·xᵏ⁻¹ die Summe Σ_(k=0) (k+1)·xᵏ. Der Wert ändert sich nicht, nur die Schreibweise.</p>
              <p>Für g(x) = 1/(1−x) = (1−x)⁻¹ braucht man die <span className="hint-em">Kettenregel</span> (f(g))' = f'(g)·g': äußere Funktion ()⁻¹ mit Ableitung −()⁻², innere Funktion (1−x) mit Ableitung −1. Beide Faktoren multiplizieren.</p>
            </>,
            <>
              <p>So leitet man f und g ab und vergleicht:</p>
              <pre className="hint-code-block">{`1) Reihe f gliedweise ableiten (Potenzregel):
   f(x) = Σ_(k=0)^∞ xᵏ
   f'(x) = Σ_(k=1)^∞ k·xᵏ⁻¹   (k=0-Term =1 → 0, fällt weg)

2) Indexshift k → k+1 (Start wieder bei 0):
   f'(x) = Σ_(k=0)^∞ (k+1)·xᵏ

3) g(x) = (1−x)⁻¹ mit Kettenregel:
   äußere Ableitung: −(1−x)⁻²
   innere Ableitung: (1−x)' = −1
   g'(x) = −(1−x)⁻² · (−1) = (1−x)⁻² = 1/(1−x)²

4) Zusammenhang: Da Σxᵏ = 1/(1−x) (geom. Reihe),
   ist f = g auf (−1,1), also auch f' = g'.
   ⇒ Σ_(k=0)^∞ (k+1)xᵏ = 1/(1−x)² für |x|<1.`}</pre>
              <p>Warum der innere Faktor −1? Weil (1−x) abgeleitet −1 ergibt; ohne ihn wäre das Vorzeichen falsch. Warum darf man f = g zu f' = g' machen? Gleiche Funktionen haben dieselbe Steigung — Ableiten ist eindeutig.</p>
            </>,
            <>
              <p>Anderes Beispiel (gleiche Technik, andere innere Funktion): h(x) = (1−2x)⁻¹</p>
              <pre className="hint-code-block">{`äußere Ableitung: −(1−2x)⁻²
innere Ableitung: (1−2x)' = −2
h'(x) = −(1−2x)⁻² · (−2) = 2/(1−2x)²`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Indexshift weglassen und Σ_(k=1) k·xᵏ⁻¹ stehen lassen → <strong>✅ Richtig:</strong> mit k→k+1 als Σ_(k=0) (k+1)xᵏ schreiben, dann startet die Summe wieder bei 0.</li>
              <li><strong>❌ Falsch:</strong> ((1−x)⁻¹)' = −(1−x)⁻² ohne inneren Faktor → <strong>✅ Richtig:</strong> Kettenregel: innere Ableitung −1 anhängen → −(1−x)⁻²·(−1) = 1/(1−x)².</li>
              <li><strong>❌ Falsch:</strong> den k=0-Term (=1) nach dem Ableiten mitzählen → <strong>✅ Richtig:</strong> die Konstante 1 hat Ableitung 0, die abgeleitete Summe beginnt bei k=1.</li>
            </ul>,
            <p>Selbstkontrolle: Setze die geometrische Reihe Σxᵏ = 1/(1−x) ein — stimmt f' = g' = 1/(1−x)²? Frage: Warum darf man eine Potenzreihe gliedweise ableiten, und gilt das immer oder nur im Konvergenzbereich?</p>,
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
      referenz: ['ableitungsregeln', 'exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei a ∈ ℝ. Bestimmen Sie die Ableitung der Funktion f : (0,∞) → ℝ, x ↦ xᵃ.'}</>,
          hint: h(
            <>
              <p>Hier ist der Exponent a eine beliebige reelle Zahl (auch z. B. √2 oder −0,7), nicht nur eine natürliche Zahl. Für solche <span className="hint-em">allgemeinen Potenzen</span> ist xᵃ überhaupt erst DEFINIERT über exp und ln: xᵃ := exp(a·ln(x)) für x {'>'} 0. Darum soll man die Ableitung über diese Darstellung herleiten (nicht die Potenzregel als bekannt voraussetzen).</p>
              <p>Grundlagen: exp ist die <span className="hint-em">Exponentialfunktion</span> mit (exp(z))' = exp(z); ln ist ihre Umkehrung mit (ln(x))' = 1/x; und es gilt exp(ln(x)) = x. Die Umformung xᵃ = exp(a·ln(x)) folgt aus dem Logarithmusgesetz ln(xᵃ) = a·ln(x) und anschließendem „exp davon".</p>
              <p><span className="hint-em">Kettenregel</span> (f(g))' = f'(g)·g': äußere Funktion exp(…) → Ableitung exp(…); innere Funktion a·ln(x) → Ableitung a·(1/x) = a/x (a ist konstanter Faktor, bleibt erhalten). Am Ende schreibt man exp(a·ln(x)) wieder als xᵃ zurück.</p>
            </>,
            <>
              <p>So leitet man f(x) = xᵃ her:</p>
              <pre className="hint-code-block">{`1) Allgemeine Potenz als exp/ln schreiben:
   f(x) = xᵃ = exp(a·ln(x))

2) Kettenregel anwenden:
   äußere Ableitung: exp(a·ln(x))
   innere Funktion:  a·ln(x)
   innere Ableitung: a·(1/x) = a/x
   f'(x) = exp(a·ln(x)) · (a/x)

3) exp(a·ln(x)) = xᵃ zurücksetzen:
   f'(x) = xᵃ · (a/x) = a · xᵃ / x

4) Potenzgesetz xᵃ/x = xᵃ⁻¹ (gleiche Basis,
   Exponenten subtrahieren):
   f'(x) = a · xᵃ⁻¹`}</pre>
              <p>So entsteht die vertraute Potenzregel (xᵃ)' = a·xᵃ⁻¹ — jetzt aber auch für beliebige reelle a sauber begründet, weil die innere Ableitung a/x den Faktor a liefert.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Prinzips: f(x) = x^√2</p>
              <pre className="hint-code-block">{`x^√2 = exp(√2·ln x)
f'(x) = exp(√2·ln x)·(√2/x) = x^√2·(√2/x)
      = √2·x^(√2−1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (xᵃ)' = a·xᵃ⁻¹ ohne Herleitung hinschreiben → <strong>✅ Richtig:</strong> über xᵃ = exp(a·ln x) und Kettenregel herleiten; das ist der verlangte Weg (für reelle a ist das die Definition).</li>
              <li><strong>❌ Falsch:</strong> innere Ableitung von a·ln(x) als a vergessen → <strong>✅ Richtig:</strong> (a·ln x)' = a/x; dieser Faktor liefert das a im Ergebnis.</li>
            </ul>,
            <p>Selbstkontrolle: Ergibt xᵃ·(a/x) mit dem Potenzgesetz xᵃ/x = xᵃ⁻¹ wirklich a·xᵃ⁻¹? Frage: Warum muss man xᵃ für reelles a erst als exp(a·ln x) schreiben — woher kommt im Ergebnis der Faktor a?</p>,
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
          text: <>{'Sei c ∈ (0,∞). Bestimmen Sie die Ableitung der Funktion g : ℝ → ℝ, x ↦ cˣ.'}</>,
          hint: h(
            <>
              <p>Achtung auf den Unterschied zu Teil (a): Bei xᵃ ist die <span className="hint-em">Basis</span> die Variable x und der Exponent fest. Bei cˣ ist es umgekehrt — die <span className="hint-em">Basis c ist fest</span> (eine feste Zahl {'>'} 0) und der <span className="hint-em">Exponent x ist die Variable</span>. Das ist eine <span className="hint-em">Exponentialfunktion zur Basis c</span>, und sie wird ganz anders abgeleitet als eine Potenz.</p>
              <p>Definition über exp/ln: cˣ = exp(x·ln(c)), weil ln(cˣ) = x·ln(c) und „exp davon" wieder cˣ ergibt. Wichtig: ln(c) ist eine <span className="hint-em">feste Zahl</span> (Konstante), da c fest ist — z. B. ln(2) ≈ 0,693.</p>
              <p><span className="hint-em">Kettenregel</span> (f(g))' = f'(g)·g': äußere Funktion exp(…) → Ableitung exp(…); innere Funktion x·ln(c) → Ableitung ln(c) (denn ln(c) ist ein konstanter Faktor vor x, und (konstante·x)' = konstante). Danach exp(x·ln(c)) wieder als cˣ zurückschreiben.</p>
            </>,
            <>
              <p>So leitet man g(x) = cˣ her:</p>
              <pre className="hint-code-block">{`1) Als exp/ln schreiben (Basis c fest):
   g(x) = cˣ = exp(x·ln(c))

2) Kettenregel:
   äußere Ableitung: exp(x·ln(c))
   innere Funktion:  x·ln(c)
   innere Ableitung: ln(c)   (ln(c) ist konstant)
   g'(x) = exp(x·ln(c)) · ln(c)

3) exp(x·ln(c)) = cˣ zurücksetzen:
   g'(x) = ln(c) · cˣ`}</pre>
              <p>Schöne Kontrolle: Für c = e ist ln(e) = 1, also (eˣ)' = 1·eˣ = eˣ — die bekannte Eigenschaft, dass eˣ sich selbst ableitet. Der Faktor ln(c) kommt aus der inneren Ableitung von x·ln(c).</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = 2ˣ</p>
              <pre className="hint-code-block">{`2ˣ = exp(x·ln 2)
g'(x) = exp(x·ln 2)·ln 2 = ln(2)·2ˣ ≈ 0,693·2ˣ`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Potenzregel (cˣ)' = x·cˣ⁻¹ → <strong>✅ Richtig:</strong> die Potenzregel gilt nur, wenn die Basis die Variable ist (xⁿ)' = n·xⁿ⁻¹; hier ist die Basis c konstant → (cˣ)' = ln(c)·cˣ.</li>
              <li><strong>❌ Falsch:</strong> (cˣ)' = cˣ (Faktor ln(c) vergessen) → <strong>✅ Richtig:</strong> nur für Basis e ist der Faktor 1; allgemein liefert die innere Ableitung ln(c).</li>
            </ul>,
            <p>Selbstkontrolle: Liefert deine Formel für c = e wieder (eˣ)' = eˣ? Frage: Warum liefert die Potenzregel (cˣ)' = x·cˣ⁻¹ hier ein falsches Ergebnis — welche Voraussetzung (Basis = Variable?) ist verletzt?</p>,
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
      referenz: ['ableitungsregeln'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie, dass die Ableitung von tan : (−π/2, π/2) → ℝ, x ↦ '}<Frac n="sin(x)" d="cos(x)" />{' gegeben ist sowohl durch\n\ntan\' : (−π/2, π/2) → ℝ, x ↦ '}<Frac n="1" d="(cos(x))²" />{'\n\nals auch durch\n\ntan\' : (−π/2, π/2) → ℝ, x ↦ 1 + (tan(x))².'}
            </>
          ),
          hint: h(
            <>
              <p>Der <span className="hint-em">Tangens</span> ist definiert als Quotient von Sinus und Kosinus: tan(x) = sin(x)/cos(x). Weil das ein Bruch ist, leitet man ihn mit der <span className="hint-em">Quotientenregel</span> ab.</p>
              <p>Bausteine (Grundableitungen, die man kennen muss): (sin x)' = cos x und (cos x)' = −sin x. Das <span className="hint-em">Minuszeichen</span> bei der Kosinus-Ableitung ist hier entscheidend.</p>
              <p><span className="hint-em">Quotientenregel</span>: (u/v)' = (u'·v − u·v')/v², mit u = sin x, v = cos x. Also u' = cos x, v' = −sin x.</p>
              <p><span className="hint-em">Trigonometrischer Pythagoras</span>: (sin x)² + (cos x)² = 1 (gilt für jedes x). Damit lässt sich der Zähler zu 1 vereinfachen. Für die zweite Darstellung nutzt man, dass man einen Bruch aufteilen kann: (cos²+sin²)/cos² = cos²/cos² + sin²/cos² = 1 + (sin/cos)² = 1 + tan².</p>
            </>,
            <>
              <p>So zeigt man tan'(x) = 1/(cos x)² = 1 + (tan x)²:</p>
              <pre className="hint-code-block">{`1) tan als Bruch + Quotientenregel:
   u = sin x  → u' = cos x
   v = cos x  → v' = −sin x
   tan'(x) = (u'v − uv')/v²
           = [ cos·cos − sin·(−sin) ] / (cos x)²
           = [ cos² + sin² ] / (cos x)²

2) Zähler mit Pythagoras (sin²+cos² = 1):
   = 1 / (cos x)²            ← erste Darstellung ✓

3) Zweite Darstellung: Zähler aufteilen
   (cos²+sin²)/cos² = cos²/cos² + sin²/cos²
                    = 1 + (sin/cos)²
                    = 1 + (tan x)²    ✓`}</pre>
              <p>Warum wird aus −uv' ein Plus? Weil v' = −sin x, also −u·v' = −sin·(−sin) = +sin². Genau dieses Plus liefert cos²+sin² = 1 im Zähler.</p>
            </>,
            <>
              <p>Analog (gleiche Technik): Ableitung von cot(x) = cos(x)/sin(x)</p>
              <pre className="hint-code-block">{`u = cos x → u' = −sin x;  v = sin x → v' = cos x
cot'(x) = [ −sin·sin − cos·cos ] / sin²
        = −(sin²+cos²)/sin² = −1/(sin x)²`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (cos x)' = sin x (Minus vergessen) → <strong>✅ Richtig:</strong> (cos x)' = −sin x; nur so wird der Zähler cos²+sin² = 1.</li>
              <li><strong>❌ Falsch:</strong> Quotientenregel-Reihenfolge vertauschen (uv' − u'v) → <strong>✅ Richtig:</strong> (u'v − uv')/v², abgeleiteter Zähler zuerst.</li>
            </ul>,
            <p>Selbstkontrolle: Ergibt cos·cos − sin·(−sin) wirklich cos²+sin² (=1)? Frage: Warum ist 1/cos² dasselbe wie 1 + tan² — welche Umformung des Bruchs steckt dahinter?</p>,
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
              {'Zeigen Sie dann mit der zweiten Darstellung für die Ableitung und mit Hilfe der Ableitungsregel für Umkehrfunktionen, dass für alle x ∈ ℝ gilt\n\narctan\'(x) = '}<Frac n="1" d="1 + x²" />{'.'}
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">arctan</span> (Arkustangens) ist die <span className="hint-em">Umkehrfunktion</span> von tan: sie macht den Tangens rückgängig, es gilt tan(arctan(x)) = x für alle x ∈ ℝ. Wir leiten arctan ab, indem wir die schon bekannte Ableitung von tan „umdrehen".</p>
              <p><span className="hint-em">Umkehrfunktionsregel</span>: (f⁻¹)'(x) = 1 / f'(f⁻¹(x)) — Kehrwert der Ableitung der Originalfunktion, ausgewertet an der Stelle der Umkehrfunktion. Hier ist f = tan, f⁻¹ = arctan, also arctan'(x) = 1 / tan'(arctan(x)).</p>
              <p>Aus Teil (a) kennen wir die praktische <span className="hint-em">zweite Darstellung</span> tan'(z) = 1 + (tan z)². Setzt man z = arctan(x), dann steht im Nenner 1 + (tan(arctan(x)))². Die <span className="hint-em">Schlüsselidentität</span> tan(arctan(x)) = x macht daraus 1 + x² — das ist der entscheidende Vereinfachungsschritt.</p>
            </>,
            <>
              <p>So zeigt man arctan'(x) = 1/(1+x²):</p>
              <pre className="hint-code-block">{`1) Umkehrfunktionsregel (f = tan, f⁻¹ = arctan):
   arctan'(x) = 1 / tan'(arctan(x))

2) Zweite Darstellung tan'(z) = 1 + tan²(z)
   mit z = arctan(x) einsetzen:
   = 1 / ( 1 + tan²(arctan(x)) )

3) Schlüsselidentität tan(arctan(x)) = x:
   tan²(arctan(x)) = x²
   = 1 / (1 + x²)`}</pre>
              <p>Warum tan'(arctan(x)) und nicht tan'(x)? Die Umkehrfunktionsregel verlangt, die Stelle „zurückzuübersetzen": die Steigung von arctan an der Stelle x ist der Kehrwert der Steigung von tan an der zugehörigen Stelle arctan(x). Die Identität tan(arctan(x)) = x räumt den verschachtelten Ausdruck dann komplett auf.</p>
            </>,
            <>
              <p>Analog (gleiche Technik): arcsin'(x) mit sin'(z) = cos(z) und sin(arcsin x) = x</p>
              <pre className="hint-code-block">{`arcsin'(x) = 1 / cos(arcsin(x))
cos(arcsin x) = √(1 − sin²(arcsin x)) = √(1−x²)
→ arcsin'(x) = 1/√(1−x²)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1 + tan²(arctan(x)) stehen lassen → <strong>✅ Richtig:</strong> tan(arctan(x)) = x einsetzen → 1 + x².</li>
              <li><strong>❌ Falsch:</strong> tan' an der Stelle x statt an arctan(x) auswerten → <strong>✅ Richtig:</strong> die Umkehrfunktionsregel verlangt die Stelle arctan(x).</li>
            </ul>,
            <p>Selbstkontrolle: Wird aus 1 + tan²(arctan(x)) durch tan(arctan(x)) = x wirklich 1 + x²? Frage: Warum darf man tan(arctan(x)) zu x vereinfachen, und warum steht im Nenner die Stelle arctan(x)?</p>,
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
}
