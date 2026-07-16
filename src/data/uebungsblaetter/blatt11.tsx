import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'
import FunctionPlot from '../../components/FunctionPlot'

export const blatt11: MatheBlatt = {
  id: 'blatt11',
  nr: '11',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung11 - stetigkeit/11_aufg_stetigkeit.pdf',
  loesungen: [
    { label: 'Lösung (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung11 - stetigkeit/11_lsg_stetigkeit.pdf' },
    { label: 'Lösung – Mitschrift G3/G4 (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung11 - stetigkeit/11_lsg_mitschriften_G3_G4.pdf' },
  ],
  titel: 'Stetigkeit',
  aufgaben: [
    {
      id: 'b11a1',
      nr: 1,
      title: 'Stetigkeit in ℝ prüfen',
      referenz: ['stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Überprüfen Sie, ob folgende Funktionen in ℝ stetig sind:\n\n'}<M>{'f: \\mathbb{R} \\to \\mathbb{R},\\quad x \\mapsto \\exp\\!\\left(\\frac{x}{(\\cos x)^{2} + 1}\\right)'}</M>
          </>,
          hint: h(
            <>
              <p><span className="hint-em">Stetig</span> heißt anschaulich: man kann den Graphen der Funktion in einem Zug zeichnen, ohne den Stift abzusetzen — es gibt keine Sprünge, Lücken oder Polstellen. Mathematisch: für jede Stelle x₀ gilt lim(x→x₀) f(x) = f(x₀), der Funktionswert stimmt also mit dem Grenzwert überein.</p>
              <p>Man muss das aber selten direkt nachrechnen. Es gibt <span className="hint-em">Bausteine, die überall stetig sind</span>, und <span className="hint-em">Kombinationsregeln</span>, mit denen man Stetigkeit zusammensetzt:</p>
              <ul>
                <li>Stetige Grundbausteine: jedes Polynom, sowie <span className="hint-em">exp</span> (Exponentialfunktion eˣ), <span className="hint-em">sin</span>, <span className="hint-em">cos</span> sind auf ganz ℝ stetig. |·| (Betrag) ist auf ℝ stetig, √ (Wurzel) auf [0,∞).</li>
                <li>Kombinationsregeln: Summe, Differenz, Produkt, <span className="hint-em">Verkettung</span> (Funktion in Funktion, z. B. exp(etwas)) und <span className="hint-em">Quotient</span> stetiger Funktionen sind wieder stetig.</li>
                <li><span className="hint-em">Quotienten-Vorbehalt</span>: Beim Bruch u/v muss der Nenner v ≠ 0 sein. An Stellen mit v = 0 ist der Bruch nicht definiert und damit dort nicht stetig. Deshalb ist die einzige echte Prüfarbeit hier: „Wird der Nenner irgendwo 0?"</li>
              </ul>
              <p>Wichtig zum Quadrat: (cos x)² bedeutet „erst cos x, dann das Ergebnis quadrieren". Ein Quadrat einer reellen Zahl ist nie negativ: (cos x)² ≥ 0 für jedes x.</p>
            </>,
            <>
              <p>So zeigt man Stetigkeit von f(x) = exp( x / ((cos x)² + 1) ) auf ganz ℝ:</p>
              <pre className="hint-code-block">{`f ist aus Bausteinen zusammengesetzt:
  innen:  Bruch  x / ((cos x)² + 1)
  außen:  exp(...)

1) Bausteine als stetig erkennen:
   Zähler x         → Polynom        → stetig
   cos x            → Grundbaustein  → stetig
   (cos x)²         → Produkt cos·cos → stetig
   (cos x)² + 1     → Summe stetiger → stetig
   exp(...)         → Grundbaustein  → stetig

2) Einzige Gefahr ist der Nenner = 0. Abschätzen:
   (cos x)² ≥ 0  für alle x  (Quadrat ist nie negativ)
   ⇒ (cos x)² + 1 ≥ 0 + 1 = 1 > 0   für alle x ∈ ℝ
   Der Nenner ist also IMMER mindestens 1, nie 0.

3) Folgerung: Der Bruch ist überall definiert und als
   Quotient stetiger Funktionen (Nenner ≠ 0) stetig.
   exp(...) ist Verkettung mit der stetigen exp-Funktion
   ⇒ stetig. Also ist f auf ganz ℝ stetig.`}</pre>
              <p>Warum reicht die Abschätzung (cos x)² ≥ 0? Weil sie OHNE konkrete x-Werte gilt — egal wie cos x schwankt (zwischen −1 und 1), das Quadrat liegt zwischen 0 und 1, plus 1 also zwischen 1 und 2. Damit ist die Nullstellen-Gefahr für alle x ausgeschlossen.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Typs: g(x) = sin( 1 / (x² + 4) ) auf ℝ.</p>
              <pre className="hint-code-block">{`Nenner: x² + 4 ≥ 0 + 4 = 4 > 0  (x² ≥ 0 immer)
→ Nenner nie 0 → Bruch überall definiert & stetig
→ sin(...) als Verkettung stetiger Funktionen stetig
→ g stetig auf ganz ℝ.`}</pre>
              <p>Gegenbeispiel zum Kontrast: h(x) = 1/(x − 2) ist NICHT auf ganz ℝ stetig, weil der Nenner bei x = 2 null wird — dort ist h nicht definiert. Genau diese Stelle gilt es bei Brüchen zu suchen.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nenner-Prüfung überspringen und „ist ja zusammengesetzt, also stetig" sagen → <strong>✅ Richtig:</strong> Beim Quotienten zwingend nachweisen, dass der Nenner für ALLE x ungleich 0 ist; hier (cos x)² + 1 ≥ 1 &gt; 0.</li>
              <li><strong>❌ Falsch:</strong> (cos x)² könnte negativ werden und den Nenner kleiner als 1 machen → <strong>✅ Richtig:</strong> Ein Quadrat ist nie negativ, (cos x)² ≥ 0, also (cos x)² + 1 ≥ 1.</li>
              <li><strong>❌ Falsch:</strong> befürchten, exp(...) sei für große Argumente „undefiniert" → <strong>✅ Richtig:</strong> exp ist für jede reelle Zahl definiert und stetig; ein Problem könnte nur ein Nenner = 0 sein, der hier nicht auftritt.</li>
            </ul>,
            <p>Selbst-Probe: Setze zwei Extremfälle ein — cos x = 0 (Nenner = 1) und cos x = ±1 (Nenner = 2). In beiden Fällen ist der Nenner ≥ 1, der Bruch also definiert. Frage: Welche untere Schranke hat (cos x)² + 1 für alle x, und warum genügt allein diese Schranke (ohne ein einziges x auszuschließen), um die Stetigkeit des ganzen Bruchs zu sichern?</p>,
          ),
          solution: (
            <>
              {'Laut Vorlesung sind durch Reihen definierte Funktionen wie exp, sin, cos stetig in '}<M>{'\\mathbb{R}'}</M>{'. Außerdem sind laut Vorlesung die Betragsfunktion in '}<M>{'\\mathbb{R}'}</M>{' und die Wurzelfunktion in '}<M>{'[0,\\infty)'}</M>{' stetig. Desweiteren liefern Verkettungen, Multiplikationen und Additionen stetiger Funktionen wieder stetige Funktionen, ebenso die Division stetiger Funktionen, wobei man gegebenenfalls den Definitionsbereich einschränken muss. In Teilaufgabe (a) ist aber '}<M>{'(\\cos(x))^{2}+1 \\ge 1 > 0'}</M>{' für alle '}<M>{'x\\in\\mathbb{R}'}</M>{', so dass es keine Einschränkungen gibt.\n'}
              {'Die Funktionen '}<M>{'f'}</M>{' und '}<M>{'g'}</M>{' setzen sich jeweils aus stetigen Funktionen durch die genannten Operationen zusammen und sind somit stetig.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <M>{'g: \\mathbb{R} \\to \\mathbb{R},\\quad x \\mapsto \\sqrt{|x \\cdot \\sin(x)|}'}</M>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Verkettung</span> (Komposition) ist eine „Funktion in einer Funktion": man steckt das Ergebnis der inneren in die äußere. g(x) = √|sin x| ist dreifach verkettet: <span className="hint-em">zuerst</span> sin x, <span className="hint-em">dann</span> der Betrag |·| davon, <span className="hint-em">zuletzt</span> die Wurzel √. Man schreibt das als g = √ ∘ |·| ∘ sin (von rechts nach links lesen: sin zuerst).</p>
              <p>Begriffe von Null:</p>
              <ul>
                <li><span className="hint-em">Betrag</span> |a| = Abstand von a zur Null, also a ohne Vorzeichen: |3| = 3, |−3| = 3. Folge: |a| ≥ 0 für jede Zahl a.</li>
                <li><span className="hint-em">Quadratwurzel</span> √a ist nur für a ≥ 0 definiert (es gibt keine reelle Wurzel aus einer negativen Zahl). Die Wurzelfunktion ist stetig auf [0,∞).</li>
              </ul>
              <p><span className="hint-em">Verkettungsregel für Stetigkeit</span>: Sind innere und äußere Funktion je auf den passenden Bereichen stetig, ist die Verkettung stetig — ABER nur, wenn das, was herauskommt, auch wirklich im <span className="hint-em">Definitionsbereich</span> der nächsten Funktion landet. Deshalb genügt es nicht, nur die äußerste Funktion anzuschauen: Man muss prüfen, dass das Argument der Wurzel nie negativ wird.</p>
            </>,
            <>
              <p>So zeigt man Stetigkeit von g(x) = √|sin x| auf ganz ℝ:</p>
              <pre className="hint-code-block">{`Zerlege g = √ ∘ |·| ∘ sin und prüfe Schicht für Schicht:

1) sin: ℝ → ℝ ist stetig (Grundbaustein).
   Ergebnisse von sin liegen in [−1, 1].

2) |·|: ℝ → ℝ ist stetig. Auf [−1,1] angewandt
   liefert |sin x| Werte in [0, 1], also ≥ 0.

3) √: [0,∞) → ℝ ist stetig. Sein Argument ist hier
   |sin x| ≥ 0 — liegt also IMMER im erlaubten
   Bereich [0,∞). Kein x muss ausgeschlossen werden.

4) Alle drei Schichten stetig + Argumente passen in den
   jeweils nächsten Definitionsbereich
   ⇒ Verkettung stetig ⇒ g stetig auf ganz ℝ.`}</pre>
              <p>Der Schlüsselschritt ist 3): Ohne den Betrag könnte sin x negativ werden und √(sin x) wäre für diese x undefiniert. Der Betrag „repariert" das Vorzeichen, sodass die Wurzel überall greift.</p>
            </>,
            <>
              <p>Anderes Beispiel: k(x) = √(cos x + 1) auf ℝ.</p>
              <pre className="hint-code-block">{`Argument der Wurzel: cos x + 1.
cos x ≥ −1 für alle x  ⇒ cos x + 1 ≥ −1 + 1 = 0.
→ Argument stets ≥ 0 → Wurzel überall definiert
→ k als Verkettung stetiger Funktionen stetig auf ℝ.`}</pre>
              <p>Gegenbeispiel: √(sin x) OHNE Betrag ist NICHT auf ganz ℝ definiert — z. B. bei x = 3π/2 ist sin x = −1 &lt; 0, die Wurzel existiert dort nicht. Das zeigt, warum man das Argument prüfen muss.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> √|sin x| könnte für manche x undefiniert sein → <strong>✅ Richtig:</strong> |sin x| ≥ 0 immer (Betrag ist nie negativ), das Wurzelargument liegt stets in [0,∞), g ist überall definiert.</li>
              <li><strong>❌ Falsch:</strong> nur „√ ist stetig" sagen und fertig → <strong>✅ Richtig:</strong> Bei Verkettungen jede Schicht prüfen UND dass das Argument im Definitionsbereich der nächsten Funktion liegt; sonst übersieht man Lücken.</li>
            </ul>,
            <p>Selbst-Probe: Setze x = π ein → sin π = 0 → |0| = 0 → √0 = 0, definiert. Und x = π/2 → sin = 1 → √1 = 1. Beide klappen, weil das Argument ≥ 0 ist. Frage: Warum genügt es bei einer Verkettung NICHT, nur die äußerste Funktion (√) auf Stetigkeit zu prüfen — welche Bedingung muss das Argument der Wurzel zusätzlich erfüllen, und welcher Baustein sorgt hier dafür?</p>,
          ),
          solution: (
            <>
              {'Laut Vorlesung sind durch Reihen definierte Funktionen wie exp, sin, cos stetig in '}<M>{'\\mathbb{R}'}</M>{'. Außerdem sind laut Vorlesung die Betragsfunktion in '}<M>{'\\mathbb{R}'}</M>{' und die Wurzelfunktion in '}<M>{'[0,\\infty)'}</M>{' stetig. Desweiteren liefern Verkettungen, Multiplikationen und Additionen stetiger Funktionen wieder stetige Funktionen, ebenso die Division stetiger Funktionen, wobei man gegebenenfalls den Definitionsbereich einschränken muss.\n'}
              {'Die Funktionen '}<M>{'f'}</M>{' und '}<M>{'g'}</M>{' setzen sich jeweils aus stetigen Funktionen durch die genannten Operationen zusammen und sind somit stetig.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b11a2',
      nr: 2,
      title: 'Stetigkeit von f, g, h (Wenn noch Zeit ist)',
      referenz: ['stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Gegeben seien die Funktionen\n\n'}
              <M>{'f: \\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto x'}</M>{',   '}
              <M>{'g: \\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto \\begin{cases} 4, & x \\ge 0\\\\ -4, & x < 0\\end{cases}'}</M>{'   und   '}
              <M>{'h: \\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto f(x)\\cdot g(x)'}</M>{'.\n\nWelche der Funktionen f, g und h sind stetig?'}
            </>
          ),
          hint: h(
            <>
              <p>Drei Stetigkeits-Werkzeuge braucht man hier:</p>
              <ul>
                <li><span className="hint-em">Polynome sind stetig</span>: f(x) = x ist das einfachste Polynom (eine Gerade), überall stetig.</li>
                <li><span className="hint-em">Einseitige Grenzwerte</span> für eine „stückweise" definierte Funktion: lim(x→0⁻) (von links, x &lt; 0) und lim(x→0⁺) (von rechts, x &gt; 0). Eine Funktion ist in 0 nur dann stetig, wenn beide einseitigen Grenzwerte existieren, <span className="hint-em">gleich</span> sind UND mit dem Funktionswert übereinstimmen. Sind sie verschieden, hat die Funktion dort einen <span className="hint-em">Sprung</span> → unstetig.</li>
                <li><span className="hint-em">Vorsicht mit der Produktregel</span>: „Produkt stetiger Funktionen ist stetig" gilt nur, wenn BEIDE Faktoren stetig sind. Ist ein Faktor unstetig, sagt die Regel gar nichts — das Produkt kann trotzdem stetig sein. Dann muss man das Produkt direkt ausrechnen.</li>
              </ul>
              <p>Hilfreich: |x| (Betrag) ist stetig. Und g springt bei 0 von −4 (links) auf +4 (rechts).</p>
            </>,
            <>
              <p>So beantwortet man, welche von f, g, h stetig sind:</p>
              <pre className="hint-code-block">{`f(x) = x:
  Polynom ⇒ stetig auf ganz ℝ.  ✓

g(x) = 4 für x ≥ 0,  −4 für x < 0:
  linksseitig:  lim(x→0⁻) g = −4
  rechtsseitig: lim(x→0⁺) g = +4
  −4 ≠ +4 ⇒ Grenzwert in 0 existiert nicht
  ⇒ g hat einen Sprung in 0 ⇒ g NICHT stetig.

h(x) = f(x)·g(x) = x·g(x). Fallweise ausrechnen:
  x ≥ 0:  h = x·(+4) =  4x
  x < 0:  h = x·(−4) = −4x
  In beiden Fällen ist 4x bzw. −4x = 4·|x|, denn
  |x| = x für x ≥ 0 und |x| = −x für x < 0.
  ⇒ h(x) = 4|x|.
  Betrag ist stetig ⇒ h stetig auf ganz ℝ.
  Probe in 0: lim(x→0) 4|x| = 0 = h(0). ✓`}</pre>
              <p>Pointe: Obwohl g im Punkt 0 springt, „drückt" der Faktor x dort beide Äste auf den Wert 0 zusammen (x → 0), sodass der Sprung verschwindet. Deshalb ist h stetig, g aber nicht.</p>
            </>,
            <>
              <p>Anderes Beispiel: s(x) = {'{'}+1 für x ≥ 0, −1 für x &lt; 0{'}'} (Vorzeichenfunktion), und p(x) = x²·s(x).</p>
              <pre className="hint-code-block">{`s springt in 0 (−1 ↔ +1) → s unstetig.
p(x) = x²·s(x):  x ≥ 0 → x²;  x < 0 → −x²
einseitige Grenzwerte in 0:  +0 und −0 = 0, gleich
⇒ lim(x→0) p = 0 = p(0) ⇒ p stetig,
obwohl der Faktor s unstetig ist.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „h ist unstetig, weil g unstetig ist (Produktregel)" → <strong>✅ Richtig:</strong> Die Produktregel verlangt zwei stetige Faktoren; ist einer unstetig, muss man h direkt untersuchen — hier h(x) = 4|x|, also stetig.</li>
              <li><strong>❌ Falsch:</strong> bei g nur einen Wert (z. B. g(0) = 4) prüfen → <strong>✅ Richtig:</strong> Beide einseitigen Grenzwerte vergleichen; −4 ≠ 4 ⇒ Sprung ⇒ g unstetig.</li>
            </ul>,
            <p>Selbst-Probe: Rechne h für x = 0,5 und x = −0,5: 0,5·4 = 2 und (−0,5)·(−4) = 2 — beide Äste ergeben 4·0,5 = 2, also h = 4|x|. Frage: Warum kann ein Produkt zweier Funktionen stetig sein, obwohl ein Faktor (g) einen Sprung hat — was macht der Faktor x genau an der Sprungstelle x = 0?</p>,
          ),
          solution: (
            <>
              <M>{'f'}</M>{' ist als Polynom stetig.\n\n'}
              <M>{'g'}</M>{' ist in 0 nicht stetig, da '}<M>{'\\lim_{x\\to0} g(x)'}</M>{' nicht existiert.\n\n'}
              {'Die Funktion '}<M>{'h'}</M>{' ist gegeben durch\n'}
              <M>{'h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto \\begin{cases} 4x, & x\\ge 0,\\\\ -4x, & x<0.\\end{cases}'}</M>
              {'\n'}
              {'Somit ist '}<M>{'h(x) = 4\\,|x|'}</M>{'. Da die Betragsfunktion stetig ist, ist auch '}<M>{'h'}</M>{' stetig.\n\n'}
              {'Andere Möglichkeit:\n'}
              <M>{'\\lim_{\\substack{x\\to0\\\\x>0}} h(x) = 0 = \\lim_{\\substack{x\\to0\\\\x<0}} h(x)'}</M>{', also '}<M>{'\\lim_{x\\to0} h(x) = 0'}</M>{' und '}<M>{'h(0) = 0'}</M>{'. Also stimmt der Funktionswert an der Stelle 0 mit dem Grenzwert überein. Somit ist '}<M>{'h'}</M>{' stetig in 0. In '}<M>{'\\mathbb{R}\\setminus\\{0\\}'}</M>{' ist '}<M>{'h'}</M>{' ebenfalls stetig als Polynom. Somit ist '}<M>{'h'}</M>{' stetig in '}<M>{'\\mathbb{R}'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b11a3',
      nr: 3,
      title: 'Stetige Fortsetzbarkeit — c bestimmen',
      referenz: ['stetigkeit', 'funktionsgrenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Untersuchen Sie jeweils, ob es ein c ∈ ℝ gibt, so dass nachfolgende Funktionen in ihrem gesamten Definitionsbereich stetig sind.\n\nf: ℝ → ℝ,  x ↦ '}<Frac n="x²−1" d="x−1" />{' für x ≠ 1,  f(1) = c'}</>,
          hint: h(
            <>
              <p>„<span className="hint-em">Stetig fortsetzen</span>" bedeutet: An der einen problematischen Stelle (hier x = 1, wo der Nenner 0 wird) ist die Funktion zunächst nicht definiert. Man sucht den fehlenden Funktionswert c so, dass kein Sprung und keine Lücke entsteht.</p>
              <p><span className="hint-em">Stetigkeitsbedingung in x₀ = 1</span>: f ist genau dann in 1 stetig, wenn der Grenzwert dort existiert und gleich dem Funktionswert ist: lim(x→1) f(x) = f(1) = c. Also: erst den Grenzwert ausrechnen, dann c = (dieser Grenzwert) setzen. Das ist die einzige Wahl, die Stetigkeit erzeugt.</p>
              <p>Setzt man x = 1 direkt ein, ergibt sich (1²−1)/(1−1) = 0/0 — ein <span className="hint-em">unbestimmter Ausdruck</span> (0/0 hat keinen festen Wert). Das ist KEIN Beweis, dass es keinen Grenzwert gibt; es heißt nur „so nicht". Man muss erst umformen.</p>
              <p>Werkzeug: <span className="hint-em">3. binomische Formel</span> a² − b² = (a+b)(a−b). Damit ist x² − 1 = x² − 1² = (x+1)(x−1). Der Faktor (x−1) steht dann auch im Nenner und lässt sich kürzen (gemeinsamen Faktor wegteilen). Für x ≠ 1 ist (x−1)/(x−1) = 1 — das Kürzen ist erlaubt, weil im Grenzwert x nur NAHE an 1 läuft, aber nie genau 1 ist.</p>
            </>,
            <>
              <p>So bestimmt man c für f(x) = (x²−1)/(x−1), f(1) = c:</p>
              <pre className="hint-code-block">{`1) Zähler mit 3. binom. Formel faktorisieren:
   x² − 1 = (x + 1)(x − 1)

2) In den Bruch einsetzen und (x−1) kürzen
   (erlaubt für x ≠ 1, denn dann ist x−1 ≠ 0):
   (x²−1)/(x−1) = (x+1)(x−1)/(x−1) = x + 1

3) Grenzwert der vereinfachten Form bilden
   (x + 1 ist ein Polynom → einfach einsetzen):
   lim(x→1) (x + 1) = 1 + 1 = 2

4) Stetigkeitsbedingung: c = lim(x→1) f(x) = 2.
   Mit f(1) = 2 ist f auf ganz ℝ stetig.`}</pre>
              <p>Anschaulich: Für x ≠ 1 ist f(x) = x + 1, also eine Gerade mit einem „Loch" bei x = 1. Setzt man c = 2, füllt man das Loch genau auf der Geraden — kein Sprung mehr.</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = (x²−9)/(x−3) für x ≠ 3, g(3) = c.</p>
              <pre className="hint-code-block">{`x² − 9 = x² − 3² = (x+3)(x−3)   (9 = 3²)
(x+3)(x−3)/(x−3) = x + 3   (für x ≠ 3)
lim(x→3) (x + 3) = 6
→ c = 6 macht g stetig.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x = 1 direkt einsetzen und „nicht definiert, also kein c" schließen → <strong>✅ Richtig:</strong> 0/0 ist nur unbestimmt; erst faktorisieren und (x−1) kürzen, dann den Grenzwert 2 ablesen.</li>
              <li><strong>❌ Falsch:</strong> x²−1 = (x−1)² faktorisieren → <strong>✅ Richtig:</strong> (x−1)² = x²−2x+1 ist falsch; die 3. binom. Formel liefert x²−1 = (x+1)(x−1).</li>
              <li><strong>❌ Falsch:</strong> c beliebig wählen (etwa c = 0) → <strong>✅ Richtig:</strong> Nur c = lim(x→1) f(x) = 2 erzeugt Stetigkeit; jeder andere Wert hinterlässt einen Sprung.</li>
            </ul>,
            <p>Selbst-Probe: Setze x = 1,01 in die Originalformel ein: (1,0201−1)/(0,01) = 0,0201/0,01 = 2,01 ≈ 2 — der Funktionswert nähert sich 2. Frage: Warum darf man (x−1) im Grenzwertprozess kürzen, obwohl x−1 = 0 für x = 1 ist (was läuft x beim Grenzwert genau, und erreicht es jemals 1)?</p>,
          ),
          solution: (
            <>
              {'Stetigkeit von '}<M>{'f'}</M>{' in '}<M>{'\\mathbb{R}\\setminus\\{1\\}'}</M>{' klar, da rationale Funktion.\n'}
              {'Für '}<M>{'x\\neq 1'}</M>{' ist\n'}
              <M>{'f(x) = \\frac{x^{2}-1}{x-1} = \\frac{(x+1)\\cdot(x-1)}{x-1} = x+1.'}</M>
              {'\n'}
              {'Somit ergibt sich\n'}
              <M>{'\\lim_{x\\to1} f(x) = 2.'}</M>
              {'\n'}
              {'Ist '}<M>{'c = 2'}</M>{', so ist '}<M>{'f'}</M>{' auch in 1 stetig und damit im gesamten Definitionsbereich.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'f: (−1,∞) → ℝ,  x ↦ '}<Frac n="√(1+x) − 1" d="x" />{' für x ≠ 0,  f(0) = c'}</>,
          hint: h(
            <>
              <p>Auch hier sucht man den Wert c, der die Lücke bei x = 0 stetig schließt. <span className="hint-em">Stetigkeitsbedingung</span>: c = lim(x→0) f(x). Setzt man x = 0 direkt ein: (√(1+0)−1)/0 = (1−1)/0 = 0/0 — wieder der <span className="hint-em">unbestimmte Ausdruck</span> 0/0. Man muss umformen.</p>
              <p>Das Hindernis ist die <span className="hint-em">Wurzel-Differenz</span> √(1+x) − 1 im Zähler: davon kann man x nicht direkt abspalten. Trick: <span className="hint-em">Konjugaterweiterung</span>. Zu einem Ausdruck (A − B) heißt der <span className="hint-em">konjugierte</span> Ausdruck (A + B) — derselbe Term mit umgedrehtem Vorzeichen. Erweitert man den Bruch mit (A + B)/(A + B) (Wert ändert sich nicht, denn das ist eine Multiplikation mit 1), entsteht im Zähler ein Produkt (A−B)(A+B).</p>
              <p>Warum hilft das? Wegen der <span className="hint-em">3. binomischen Formel</span> (A−B)(A+B) = A² − B². Quadrieren beseitigt die Wurzel: (√(1+x))² = 1+x. So wird aus der sperrigen Wurzel-Differenz ein einfaches x, das man gegen das x im Nenner kürzen kann.</p>
            </>,
            <>
              <p>So bestimmt man c für f(x) = (√(1+x) − 1)/x, f(0) = c:</p>
              <pre className="hint-code-block">{`1) Mit dem Konjugierten (√(1+x) + 1) erweitern
   (Zähler UND Nenner — das ist Mal-1, ändert nichts):
   (√(1+x) − 1)/x · (√(1+x) + 1)/(√(1+x) + 1)

2) Zähler mit 3. binom. Formel (A−B)(A+B) = A²−B²,
   A = √(1+x), B = 1:
   (√(1+x))² − 1² = (1 + x) − 1 = x

3) Bruch steht jetzt so:
   x / [ x · (√(1+x) + 1) ]

4) x kürzen (erlaubt für x ≠ 0):
   = 1 / (√(1+x) + 1)

5) Grenzwert x → 0 einsetzen (Nenner ist stetig):
   = 1 / (√(1+0) + 1) = 1 / (1 + 1) = 1/2

6) Also c = 1/2 macht f stetig in 0.`}</pre>
              <p>Der entscheidende Gewinn ist Schritt 2: Die Wurzel quadriert sich weg, im Zähler bleibt nur x — genau der Faktor, der das störende 0/0 verursacht und sich gegen den Nenner kürzt.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→0) (√(4+x) − 2)/x.</p>
              <pre className="hint-code-block">{`Konjugiertes (√(4+x) + 2) erweitern:
Zähler: (√(4+x))² − 2² = (4+x) − 4 = x
→ x / [x·(√(4+x)+2)] = 1/(√(4+x)+2)
lim(x→0) = 1/(√4 + 2) = 1/(2+2) = 1/4`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x = 0 einsetzen und „0/0, also kein Grenzwert" → <strong>✅ Richtig:</strong> 0/0 ist nur unbestimmt; mit (√(1+x)+1) konjugiert erweitern, dann existiert der Grenzwert 1/2.</li>
              <li><strong>❌ Falsch:</strong> (√(1+x)−1)(√(1+x)+1) = √(1+x)·√(1+x) − 1 = (1+x) und das „−1" vergessen → <strong>✅ Richtig:</strong> A²−B² = (1+x) − 1² = x; das −1² (= −1) gehört dazu.</li>
              <li><strong>❌ Falsch:</strong> nur den Zähler erweitern, den Nenner nicht → <strong>✅ Richtig:</strong> Zähler UND Nenner mit demselben Faktor multiplizieren, sonst ändert sich der Wert.</li>
            </ul>,
            <p>Selbst-Probe: Setze x = 0,01: (√1,01 − 1)/0,01 ≈ (1,004988 − 1)/0,01 ≈ 0,4988 ≈ 0,5 — passt zu c = 1/2. Frage: Welche algebraische Identität (welche binomische Formel) sorgt dafür, dass die Wurzel im Zähler verschwindet, und warum darf man danach das x kürzen?</p>,
          ),
          solution: (
            <>
              {'Da Wurzelfunktion und Polynome stetig sind, sind auch die Funktionen '}<M>{'h_1:(-1,\\infty)\\to\\mathbb{R},\\ x\\mapsto \\sqrt{1+x}-1'}</M>{' und '}<M>{'h_2:(-1,\\infty)\\to\\mathbb{R},\\ x\\mapsto x'}</M>{' stetig. Nach Vorlesung ist auch '}<M>{'\\frac{h_1}{h_2}'}</M>{' stetig in '}<M>{'(-1,\\infty)\\setminus\\{x\\in(-1,\\infty) : h_2(x)=0\\} = (-1,\\infty)\\setminus\\{0\\}'}</M>{'.\n'}
              {'Für '}<M>{'x\\neq 0'}</M>{' ist\n'}
              <M>{'f(x) = \\frac{\\sqrt{1+x}-1}{x} = \\frac{\\sqrt{1+x}-1}{x}\\cdot\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1} = \\frac{1+x-1}{x(\\sqrt{1+x}+1)} = \\frac{x}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1}.'}</M>
              {'\n'}
              {'Somit ergibt sich\n'}
              <M>{'\\lim_{x\\to0} f(x) = \\frac{1}{\\sqrt{1+0}+1} = \\frac{1}{2}.'}</M>
              {'\n'}
              {'Ist '}<M>{'c = \\frac{1}{2}'}</M>{', so ist '}<M>{'f'}</M>{' auch in 0 stetig und damit im gesamten Definitionsbereich.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'f: ℝ → ℝ,  x ↦ '}<Frac n="3x" d="2|x|" />{' für x ≠ 0,  f(0) = c'}</>,
          hint: h(
            <>
              <p>Der <span className="hint-em">Betrag</span> |x| ist eine „abschnittsweise" Funktion: |x| = x für x ≥ 0 (positive Zahlen bleiben), |x| = −x für x &lt; 0 (negative werden ins Positive gedreht, z. B. |−3| = −(−3) = 3). Deshalb muss man bei |x| <span className="hint-em">links und rechts von 0 getrennt</span> rechnen.</p>
              <p><span className="hint-em">Einseitige Grenzwerte</span>: lim(x→0⁺) (von rechts, x &gt; 0) und lim(x→0⁻) (von links, x &lt; 0). <span className="hint-em">Kriterium für Existenz des Grenzwerts</span>: Der (beidseitige) Grenzwert lim(x→0) existiert nur, wenn beide einseitigen Grenzwerte existieren UND gleich sind. Sind sie verschieden, gibt es keinen Grenzwert — die Funktion springt.</p>
              <p>Folge für die stetige Fortsetzung: Ein c, das f in 0 stetig macht, müsste c = lim(x→0) f(x) sein. Existiert dieser Grenzwert nicht (Sprung), kann KEIN Wert c die Stetigkeit herstellen — egal welche Zahl man für f(0) wählt, einer der beiden Äste passt nicht.</p>
            </>,
            <>
              <p>So untersucht man f(x) = 3x/(2|x|), f(0) = c:</p>
              <pre className="hint-code-block">{`Fall x > 0:  |x| = x
   f(x) = 3x/(2x) = 3/2   (x kürzt sich)
   rechtsseitiger Grenzwert: lim(x→0⁺) f = 3/2

Fall x < 0:  |x| = −x
   f(x) = 3x/(2·(−x)) = 3x/(−2x) = −3/2
   linksseitiger Grenzwert: lim(x→0⁻) f = −3/2

Vergleich:  −3/2 ≠ 3/2
   ⇒ einseitige Grenzwerte verschieden
   ⇒ lim(x→0) f(x) EXISTIERT NICHT (Sprung um 3)
   ⇒ es gibt KEIN c, das f in 0 stetig macht.`}</pre>
              <p>Anschaulich: Rechts von 0 liegt f konstant bei +3/2, links konstant bei −3/2. Der Graph macht bei 0 einen Sprung von −3/2 auf +3/2; kein einzelner Punkt f(0) = c kann beide Niveaus gleichzeitig stetig verbinden.</p>
            </>,
            <>
              <p>Gegenbeispiel, wo es klappt: g(x) = x²/|x| für x ≠ 0.</p>
              <pre className="hint-code-block">{`x > 0: x²/x = x → Grenzwert 0
x < 0: x²/(−x) = −x → Grenzwert 0
Beide 0 → lim(x→0) g = 0 existiert
→ c = 0 macht g stetig.
(Unterschied zu 3x/(2|x|): hier heben sich die
 Vorzeichen NICHT zu verschiedenen Werten auf.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> c = 0 wählen, weil „f(0) = 0 naheliegt" → <strong>✅ Richtig:</strong> Stetigkeit verlangt, dass der Grenzwert existiert; da links (−3/2) ≠ rechts (+3/2), gibt es gar keinen Grenzwert und damit kein passendes c.</li>
              <li><strong>❌ Falsch:</strong> |x| = x für alle x setzen → <strong>✅ Richtig:</strong> Für x &lt; 0 ist |x| = −x; deshalb wird f links zu −3/2, nicht +3/2.</li>
            </ul>,
            <p>Selbst-Probe: f(0,1) = 0,3/(2·0,1) = 1,5 und f(−0,1) = −0,3/(2·0,1) = −1,5 — verschiedene Niveaus rechts/links. Frage: Warum kann kein c die Stetigkeit in x = 0 herstellen, wenn der links- und der rechtsseitige Grenzwert verschieden sind (was würde mit dem jeweils „anderen" Ast passieren)?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'x>0'}</M>{' ist\n'}
              <M>{'f(x) = \\frac{3x}{2\\,|x|} = \\frac{3x}{2x} = \\frac{3}{2}'}</M>
              {'\n'}
              {'und für '}<M>{'x<0'}</M>{' ist\n'}
              <M>{'f(x) = \\frac{3x}{2\\,|x|} = \\frac{3x}{2\\cdot(-x)} = -\\frac{3}{2}.'}</M>
              {'\n'}
              {'Damit ist '}<M>{'\\lim_{\\substack{x\\to0\\\\x<0}} f(x) = -\\frac{3}{2}'}</M>{' und '}<M>{'\\lim_{\\substack{x\\to0\\\\x>0}} f(x) = \\frac{3}{2}'}</M>{'. Da links- und rechtsseitiger Grenzwert nicht übereinstimmen, existiert '}<M>{'\\lim_{x\\to0} f(x)'}</M>{' nicht. Die Funktion kann somit nicht stetig nach 0 fortgesetzt werden.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <M>{'f: \\mathbb{R} \\to \\mathbb{R},\\quad x \\mapsto \\begin{cases} |x|, & x < 0,\\\\ c, & x = 0,\\\\ \\sqrt{x}, & x > 0.\\end{cases}'}</M>,
          hint: h(
            <>
              <p>f ist <span className="hint-em">stückweise definiert</span>: links von 0 (x &lt; 0) gilt f = |x|, rechts (x &gt; 0) gilt f = √x, und genau im Punkt 0 ist f(0) = c die gesuchte Zahl. Solche Funktionen prüft man an der Nahtstelle 0 mit einseitigen Grenzwerten.</p>
              <p><span className="hint-em">Drei-Punkte-Bedingung für Stetigkeit in x₀ = 0</span> (alle drei müssen erfüllt sein):</p>
              <ul>
                <li>(1) der Funktionswert f(0) = c existiert,</li>
                <li>(2) der Grenzwert lim(x→0) f(x) existiert — das heißt, links- und rechtsseitiger Grenzwert sind GLEICH,</li>
                <li>(3) beide stimmen überein: lim(x→0) f(x) = f(0) = c.</li>
              </ul>
              <p>Bausteine: |x| = −x für x &lt; 0 (also stetig, Grenzwert von links existiert) und √x ist stetig auf [0,∞) mit √0 = 0. Strategie: beide einseitigen Grenzwerte ausrechnen; sind sie gleich, ist c durch (3) zwingend festgelegt.</p>
            </>,
            <>
              <p>So bestimmt man c für f(x) = {'{'}|x| für x &lt; 0, c für x = 0, √x für x &gt; 0{'}'}:</p>
              <pre className="hint-code-block">{`1) Linksseitiger Grenzwert (x < 0, dort f = |x| = −x):
   lim(x→0⁻) |x| = lim(x→0⁻) (−x) = −0 = 0

2) Rechtsseitiger Grenzwert (x > 0, dort f = √x):
   lim(x→0⁺) √x = √0 = 0

3) Vergleich: links 0 = rechts 0
   ⇒ lim(x→0) f(x) = 0 existiert.

4) Stetigkeitsbedingung (3): c = lim(x→0) f(x) = 0.
   Mit c = 0 sind alle drei Punkte erfüllt
   ⇒ f ist in 0 (und damit auf ganz ℝ) stetig.`}</pre>
              <p>Anschaulich: Von links nähert sich |x| dem Wert 0, von rechts nähert sich √x ebenfalls 0 — beide Äste treffen sich im Ursprung. Setzt man c = 0, schließt sich die Kurve lückenlos.</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = {'{'}x+1 für x &lt; 0, c für x = 0, 2x+1 für x &gt; 0{'}'}.</p>
              <pre className="hint-code-block">{`links:  lim(x→0⁻)(x+1) = 0+1 = 1
rechts: lim(x→0⁺)(2x+1) = 0+1 = 1
beide = 1 → lim(x→0) g = 1
→ c = 1 macht g stetig.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „lim |x| für x → 0⁻ ist undefiniert" → <strong>✅ Richtig:</strong> Für x &lt; 0 ist |x| = −x, also lim(x→0⁻)(−x) = 0; der Grenzwert existiert und ist 0.</li>
              <li><strong>❌ Falsch:</strong> c aus dem Funktionswert raten statt aus dem Grenzwert → <strong>✅ Richtig:</strong> c muss = lim(x→0) f(x) sein; nur weil links = rechts = 0, ist c = 0 die einzige stetige Wahl.</li>
            </ul>,
            <p>Selbst-Probe: f(−0,01) = |−0,01| = 0,01 und f(0,01) = √0,01 = 0,1 — beide klein und Richtung 0; nähere x weiter an 0, beide Seiten gehen gegen 0. Frage: Was ist die Stetigkeitsbedingung in x = 0 — welche drei Dinge müssen gelten, und welches davon legt den Wert c eindeutig fest?</p>,
          ),
          solution: (
            <>
              {'Die Betragsfunktion ist in '}<M>{'\\mathbb{R}'}</M>{' stetig und die Wurzelfunktion in '}<M>{'[0,\\infty)'}</M>{'. Somit ist '}<M>{'f'}</M>{' in '}<M>{'\\mathbb{R}\\setminus\\{0\\}'}</M>{' stetig. Desweiteren ist\n'}
              <M>{'\\lim_{\\substack{x\\to0\\\\x<0}} f(x) = \\lim_{\\substack{x\\to0\\\\x<0}} |x| = 0'}</M>
              {'\n'}
              {'und\n'}
              <M>{'\\lim_{\\substack{x\\to0\\\\x>0}} f(x) = \\lim_{\\substack{x\\to0\\\\x>0}} \\sqrt{x} = 0.'}</M>
              {'\n'}
              {'Somit ergibt sich\n'}
              <M>{'\\lim_{x\\to0} f(x) = 0.'}</M>
              {'\n'}
              {'Ist '}<M>{'c = 0'}</M>{', so ist '}<M>{'f'}</M>{' auch in 0 stetig und damit im gesamten Definitionsbereich.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b11a4',
      nr: 4,
      title: 'Zwischenwertsatz und Bisektionsverfahren',
      referenz: ['stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Zeigen Sie mit Hilfe des Zwischenwertsatzes, dass die Gleichung\n\n'}<Frac n="1" d="1 + x²" />{' = √x\n\neine Lösung in dem Intervall [0, 4] besitzt.\nFühren Sie nun das Bisektionsverfahren durch und geben Sie ein Intervall der Länge '}<Frac n="1" d="4" />{' an, in dem sich die Lösung der Gleichung befinden muss.'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Zwischenwertsatz (ZWS)</span>: Ist eine Funktion f auf einem abgeschlossenen Intervall [a,b] <span className="hint-em">stetig</span> und haben die Randwerte f(a) und f(b) <span className="hint-em">verschiedene Vorzeichen</span> (eines positiv, eines negativ), dann gibt es mindestens eine Stelle x* zwischen a und b mit f(x*) = 0. Anschaulich: Eine ohne abzusetzen gezeichnete Kurve, die von unterhalb der x-Achse nach oberhalb wechselt, muss die x-Achse irgendwo kreuzen.</p>
              <p><span className="hint-em">Gleichung in Nullstellen-Form bringen</span>: „Gleichung A = B hat eine Lösung" ist dasselbe wie „die Hilfsfunktion f = A − B hat eine Nullstelle". Denn f(x) = 0 ⟺ A(x) = B(x). Also: alles auf eine Seite bringen.</p>
              <p><span className="hint-em">Bisektionsverfahren (Intervallhalbierung)</span>: Hat man ein Intervall mit Vorzeichenwechsel an den Rändern, berechnet man den Mittelpunkt mid = (links+rechts)/2 und wertet f(mid) aus. Man behält die Hälfte, an deren Rändern WIEDER ein Vorzeichenwechsel steht (dort liegt nach ZWS die Nullstelle). Pro Schritt halbiert sich die Intervalllänge. Regel zum Behalten: hat f(mid) dasselbe Vorzeichen wie f(links), liegt die Nullstelle rechts → nimm [mid, rechts]; sonst [links, mid].</p>
            </>,
            <>
              <p>So löst man: 1/(1+x²) = √x hat eine Lösung in [0,4]; Bisektion bis Länge 1/4:</p>
              <pre className="hint-code-block">{`Hilfsfunktion:  f(x) = 1/(1+x²) − √x
Lösungen der Gleichung = Nullstellen von f.

A) ZWS-Voraussetzungen prüfen:
   Stetigkeit: 1/(1+x²) hat Nenner ≥ 1 > 0 (stetig),
   √x ist stetig auf [0,∞) ⊇ [0,4].
   ⇒ f stetig auf [0,4].  ✓
   Randwerte:
   f(0) = 1/(1+0) − √0 = 1 − 0 = 1 > 0
   f(4) = 1/(1+16) − √4 = 1/17 − 2 ≈ −1,94 < 0
   Vorzeichenwechsel + > 0, − < 0  ⇒ ZWS: Nullstelle in (0,4).

B) Bisektion (immer die Hälfte mit Vorzeichenwechsel behalten):
   Start [0,4], Länge 4.
   mid=2: f(2)=1/5 − √2 ≈ 0,2 − 1,41 < 0
          f(0)>0, f(2)<0 → Wechsel links → [0,2]   (Länge 2)
   mid=1: f(1)=1/2 − 1 = −0,5 < 0
          f(0)>0, f(1)<0 → [0,1]                    (Länge 1)
   mid=½: f(½)=1/(1+¼) − √½ = 4/5 − 1/√2 ≈ 0,8 − 0,707 > 0
          f(½)>0, f(1)<0 → Wechsel rechts → [½,1]   (Länge ½)
   mid=¾: f(¾)=1/(1+9/16) − √¾ = 16/25 − √3/2 ≈ 0,64 − 0,866 < 0
          f(½)>0, f(¾)<0 → [½,¾]                    (Länge ¼)  ← fertig

Ergebnis: Nullstelle liegt in [½, ¾], Intervalllänge = 1/4.`}</pre>
              <p>Warum funktioniert das? In jedem Schritt bleibt ein Vorzeichenwechsel am Rand erhalten, also greift der ZWS erneut: die Nullstelle ist garantiert im behaltenen halben Intervall.</p>
            </>,
            <>
              <p>Anderes Beispiel: zeige x³ = 5 hat Lösung in [1,2], ein Bisektionsschritt.</p>
              <pre className="hint-code-block">{`f(x) = x³ − 5, stetig (Polynom).
f(1) = 1 − 5 = −4 < 0,  f(2) = 8 − 5 = 3 > 0 → ZWS.
mid=1,5: f(1,5)=3,375 − 5 = −1,625 < 0
f(1,5)<0, f(2)>0 → Nullstelle in [1,5; 2].`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ZWS anwenden, ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> Erst Stetigkeit auf dem ganzen [0,4] sichern (√x braucht x ≥ 0, auf [0,4] erfüllt), dann den Vorzeichenwechsel auswerten.</li>
              <li><strong>❌ Falsch:</strong> bei f(mid) &lt; 0 (und f(links) &gt; 0) die rechte Hälfte [mid, rechts] behalten → <strong>✅ Richtig:</strong> Behalte die Hälfte MIT Vorzeichenwechsel: f(links) &gt; 0 und f(mid) &lt; 0 → [links, mid].</li>
              <li><strong>❌ Falsch:</strong> nur die Vorzeichen raten statt f(mid) wirklich auszurechnen → <strong>✅ Richtig:</strong> In jedem Schritt f(mid) numerisch bestimmen und das Vorzeichen ablesen.</li>
            </ul>,
            <p>Selbst-Probe: Zähle die Halbierungen: 4 → 2 → 1 → ½ → ¼, das sind 4 Schritte (4·(1/2)⁴ = 1/4) — passt zur geforderten Länge. Frage: Warum muss das neue Intervall in jedem Schritt einen Vorzeichenwechsel an den Rändern enthalten, und nach welcher Regel entscheidest du zwischen [links, mid] und [mid, rechts]?</p>,
          ),
          solution: (
            <>
              {'Definiere\n'}
              <M>{'f:[0,4]\\to\\mathbb{R},\\ x\\mapsto \\frac{1}{1+x^{2}}-\\sqrt{x}.'}</M>
              {'\n'}
              {'Die Funktion '}<M>{'f'}</M>{' ist stetig und auf einem Intervall definiert. Desweiteren ist '}<M>{'f(0) = \\frac{1}{1+0}-\\sqrt{0} = 1 > 0'}</M>{' und '}<M>{'f(4) = \\frac{1}{1+4^{2}}-\\sqrt{4} = \\frac{1}{17}-2 < 0'}</M>{'. Nach dem Zwischenwertsatz existiert mindestens eine Nullstelle in '}<M>{'[0,4]'}</M>{'.\n\n'}
              {'Das Bisektionsverfahren liefert:\n\n'}
              {'n = 0:  '}<M>{'a_n=0,\\ f(a_n)>0,\\ b_n=4,\\ f(b_n)<0,\\ \\tfrac{a_n+b_n}{2}=2,\\ f\\left(\\tfrac{a_n+b_n}{2}\\right)=\\tfrac{1}{5}-\\sqrt{2}<0'}</M>{'\n'}
              {'n = 1:  '}<M>{'a_n=0,\\ f(a_n)>0,\\ b_n=2,\\ f(b_n)<0,\\ \\tfrac{a_n+b_n}{2}=1,\\ f\\left(\\tfrac{a_n+b_n}{2}\\right)=-\\tfrac{1}{2}<0'}</M>{'\n'}
              {'n = 2:  '}<M>{'a_n=0,\\ f(a_n)>0,\\ b_n=1,\\ f(b_n)<0,\\ \\tfrac{a_n+b_n}{2}=\\tfrac{1}{2},\\ f\\left(\\tfrac{a_n+b_n}{2}\\right)=\\tfrac{4}{5}-\\sqrt{\\tfrac{1}{2}}>0'}</M>{'\n'}
              {'n = 3:  '}<M>{'a_n=\\tfrac{1}{2},\\ f(a_n)>0,\\ b_n=1,\\ f(b_n)<0,\\ \\tfrac{a_n+b_n}{2}=\\tfrac{3}{4},\\ f\\left(\\tfrac{a_n+b_n}{2}\\right)=\\tfrac{16}{25}-\\tfrac{\\sqrt{3}}{2}<0'}</M>{'\n'}
              {'n = 4:  '}<M>{'a_n=\\tfrac{1}{2},\\ f(a_n)>0,\\ b_n=\\tfrac{3}{4},\\ f(b_n)<0,\\ \\tfrac{a_n+b_n}{2}=\\tfrac{5}{8},\\ \\dots'}</M>{'\n\n'}
              {'Somit befindet sich in dem Intervall '}<M>{'\\left[\\tfrac{1}{2},\\tfrac{3}{4}\\right]'}</M>{' eine Nullstelle.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b11a5',
      nr: 5,
      title: 'Punktweise Konvergenz von fₙ(x) = xⁿ (Wenn noch Zeit ist)',
      referenz: ['folgen-konvergenz', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Für n ∈ ℕ* sei die Funktion\n\nfₙ: [−1, 1] → ℝ, x ↦ xⁿ\n\ngegeben.\n\nSkizzieren Sie die Funktionen f₁, f₂, f₃, f₄.',
          hint: h(
            <>
              <p>fₙ(x) = xⁿ heißt „x hoch n", also x n-mal mit sich multipliziert (x² = x·x, x³ = x·x·x). Zum Skizzieren braucht man drei Ideen:</p>
              <ul>
                <li><span className="hint-em">Feste gemeinsame Punkte</span>: Jede Potenz erfüllt 0ⁿ = 0 und 1ⁿ = 1, also gehen ALLE Kurven durch (0,0) und (1,1). Bei x = −1 gilt (−1)ⁿ = +1 für gerades n, = −1 für ungerades n.</li>
                <li><span className="hint-em">Symmetrie über gerade/ungerade Exponenten</span>: Ist n gerade, ist die Funktion <span className="hint-em">gerade</span>: f(−x) = f(x) (Graph spiegelsymmetrisch zur y-Achse), weil ein Minus eine gerade Anzahl Male auftritt und sich weghebt: (−x)² = x². Ist n ungerade, ist sie <span className="hint-em">ungerade</span>: f(−x) = −f(x) (punktsymmetrisch zum Ursprung), z. B. (−x)³ = −x³.</li>
                <li><span className="hint-em">Verhalten auf (−1,1)</span>: Für |x| &lt; 1 wird xⁿ mit wachsendem n KLEINER im Betrag (0,5² = 0,25, 0,5³ = 0,125, …), die Kurven drücken sich also näher an die x-Achse, je größer n.</li>
              </ul>
            </>,
            <>
              <p>So skizziert man f₁, f₂, f₃, f₄ auf [−1,1]:</p>
              <pre className="hint-code-block">{`f₁(x) = x   (n=1 ungerade): Gerade durch (−1,−1),
            (0,0), (1,1) — die Winkelhalbierende.

f₂(x) = x²  (n=2 gerade): Parabel, Minimum (0,0),
            symmetrisch zur y-Achse, durch (−1,1),(1,1).

f₃(x) = x³  (n=3 ungerade): S-Kurve, punktsymmetrisch
            zum Ursprung, durch (−1,−1),(0,0),(1,1).

f₄(x) = x⁴  (n=4 gerade): wie x², aber FLACHER in der
            Mitte (x⁴ < x² für |x|<1), durch (−1,1),(1,1).

Ordnung auf 0<x<1:  x⁴ < x³ < x² < x  (höhere Potenz tiefer).
Treffpunkte aller vier Kurven: (0,0) und (1,1).`}</pre>
              <p>Tipp zur Kontrolle: Wertetabelle bei x = ½: f₁=0,5; f₂=0,25; f₃=0,125; f₄=0,0625 — bestätigt „je höher n, desto näher an 0".</p>
            </>,
            <>
              <p>Anderes Beispiel: Vergleich von x² und x³ bei negativem x (z. B. x = −0,5).</p>
              <pre className="hint-code-block">{`x² = (−0,5)² = +0,25   (gerade Potenz → positiv)
x³ = (−0,5)³ = −0,125  (ungerade Potenz → negativ)
→ x² liegt oben (positiv), x³ unten (negativ):
  zeigt geraden vs. ungeraden Charakter.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> f₂(−x) = −f₂(x) annehmen (antisymmetrisch) → <strong>✅ Richtig:</strong> f₂ und f₄ sind GERADE: f(−x) = f(x), Graph symmetrisch zur y-Achse (z. B. (−x)² = x²).</li>
              <li><strong>❌ Falsch:</strong> x⁴ steiler als x² in der Mitte zeichnen → <strong>✅ Richtig:</strong> Für |x| &lt; 1 ist x⁴ &lt; x², also liegt x⁴ FLACHER (näher an der x-Achse) als x².</li>
            </ul>,
            <p>Selbst-Probe: Setze x = −1 ein: f₁=−1, f₂=1, f₃=−1, f₄=1 — gerade Exponenten ergeben +1, ungerade −1. Frage: Welche Punkte teilen alle vier Kurven, und woran erkennt man am Exponenten n, ob der Graph symmetrisch zur y-Achse (gerade) oder zum Ursprung (ungerade) ist?</p>,
          ),
          solution: 'f₁: Gerade y=x\nf₂: Normalparabel y=x²\nf₃: kubische Kurve y=x³ (antisymmetrisch)\nf₄: y=x⁴ (flacher als f₂, ≥0)\n\nAlle durch (0,0) und (1,1). Für |x|<1 gilt: f₄ < f₂ und |f₃| < f₁.',
          abbildung: (
            <FunctionPlot
              data={{
                xMin: -1.25, xMax: 1.25, yMin: -1.25, yMax: 1.25,
                caption: 'fₙ(x) = xⁿ auf [−1, 1] — alle durch (0,0) und (1,1)',
                series: [
                  { f: x => x, from: -1, to: 1, label: 'f₁ = x', color: '#4d9fff' },
                  { f: x => x * x, from: -1, to: 1, label: 'f₂ = x²', color: '#3ecf8e' },
                  { f: x => x ** 3, from: -1, to: 1, label: 'f₃ = x³', color: '#f5a623' },
                  { f: x => x ** 4, from: -1, to: 1, label: 'f₄ = x⁴', color: '#c77dff' },
                ],
                markers: [
                  { x: 0, y: 0, filled: true, color: '#f16063' },
                  { x: 1, y: 1, filled: true, color: '#f16063' },
                ],
              }}
            />
          ),
        },
        {
          letter: 'b',
          text: <>{'Für welche x ∈ [−1, 1] existiert '}<M>{'\\lim_{n \\to \\infty} f_n(x)'}</M>{'? Geben Sie auch die zugehörigen Grenzwerte an.'}</>,
          hint: h(
            <>
              <p>Hier ist x eine <span className="hint-em">feste</span> Zahl aus [−1,1] und nur n läuft gegen ∞. Die Zahlenfolge (xⁿ) = x¹, x², x³, … ist eine <span className="hint-em">geometrische Folge</span> mit Quotient x (jedes Glied = vorheriges · x).</p>
              <p><span className="hint-em">Konvergenzkriterium für qⁿ</span> (Standardresultat):</p>
              <ul>
                <li>Ist |q| &lt; 1, so geht qⁿ → 0 (jede Multiplikation mit einer Zahl betragskleiner als 1 verkleinert; z. B. 0,5ⁿ → 0).</li>
                <li>Ist q = 1, so ist 1ⁿ = 1 für alle n, also Grenzwert 1.</li>
                <li>Ist q = −1, so ist (−1)ⁿ = +1, −1, +1, −1, … — die Folge <span className="hint-em">alterniert</span> und nähert sich keiner einzigen Zahl: KEIN Grenzwert.</li>
                <li>Ist |q| &gt; 1, wächst |qⁿ| über alle Grenzen (hier irrelevant, da |x| ≤ 1).</li>
              </ul>
              <p>Man muss also die x-Werte in [−1,1] in genau diese Fälle einteilen: |x| &lt; 1, x = 1, x = −1.</p>
            </>,
            <>
              <p>So bestimmt man, für welche x ∈ [−1,1] der Grenzwert lim(n→∞) xⁿ existiert:</p>
              <pre className="hint-code-block">{`Fall |x| < 1  (also −1 < x < 1):
   geometrische Folge mit |Quotient| < 1
   ⇒ lim(n→∞) xⁿ = 0.   (existiert)

Fall x = 1:
   1ⁿ = 1 für alle n  ⇒ lim = 1.   (existiert)

Fall x = −1:
   (−1)ⁿ = +1, −1, +1, −1, …  alterniert
   ⇒ kein Grenzwert.   (existiert NICHT)

Ergebnis: Grenzwert existiert für x ∈ (−1, 1],
also für alle x in [−1,1] AUSSER x = −1.
Werte:  0 für |x|<1,  1 für x=1.`}</pre>
              <p>Begründung x = −1: Eine Folge konvergiert nur, wenn sich ihre Glieder schließlich einer einzigen Zahl beliebig nähern. +1 und −1 wechseln sich aber für immer ab, der Abstand zwischen aufeinanderfolgenden Gliedern bleibt 2 — keine Annäherung an EINEN Wert.</p>
            </>,
            <>
              <p>Anderes Beispiel: konkrete Quotienten q.</p>
              <pre className="hint-code-block">{`q = 0,9:  0,9ⁿ → 0           (|q|<1)
q = 1:    1ⁿ = 1 → 1
q = −0,5: (−0,5)ⁿ → 0        (|q|<1, Vorzeichen wechselt,
                              aber Betrag → 0, also Grenzwert 0)
q = −1:   (−1)ⁿ alterniert → kein Grenzwert`}</pre>
              <p>Wichtig: −0,5 konvergiert (Betrag &lt; 1), −1 nicht (Betrag = 1).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(n→∞)(−1)ⁿ = −1 (oder = +1) → <strong>✅ Richtig:</strong> (−1)ⁿ alterniert dauerhaft zwischen +1 und −1; es gibt KEINEN Grenzwert.</li>
              <li><strong>❌ Falsch:</strong> x = 1 in den Fall „|x| &lt; 1 → 0" einordnen → <strong>✅ Richtig:</strong> x = 1 ist Grenzfall, 1ⁿ = 1, Grenzwert 1 — getrennt behandeln.</li>
            </ul>,
            <p>Selbst-Probe: x = −0,5 → −0,5; 0,25; −0,125; … die Beträge schrumpfen gegen 0, also Grenzwert 0; x = −1 → −1; 1; −1; … kein Trend. Frage: Wie lautet das Konvergenzkriterium für eine geometrische Folge qⁿ, und welche Werte in [−1,1] erfüllen es (warum fällt genau x = −1 heraus)?</p>,
          ),
          solution: (
            <>
              {'Die geometrische Folge '}<M>{'(x^{n})_{n\\in\\mathbb{N}}'}</M>{' konvergiert genau dann, wenn '}<M>{'x\\in(-1,1]'}</M>{'. Es ist\n'}
              <M>{'\\lim_{n\\to\\infty} x^{n} = \\begin{cases} 0, & |x| < 1,\\\\ 1, & x = 1\\end{cases}'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Skizzieren Sie die Funktion\n\nf: D → ℝ, x ↦ '}<M>{'\\lim_{n \\to \\infty} f_n(x)'}</M>{',\n\nwobei D = {x ∈ [−1, 1] : '}<M>{'\\lim_{n \\to \\infty} f_n(x)'}</M>{' existiert}.'}</>,
          hint: h(
            <>
              <p>Die <span className="hint-em">Grenzfunktion</span> f entsteht, indem man für JEDES feste x den Grenzwert der Folge fₙ(x) = xⁿ bildet: f(x) = lim(n→∞) xⁿ. Definiert ist f nur dort, wo dieser Grenzwert existiert — das ist der <span className="hint-em">Definitionsbereich</span> D aus Teil (b): D = (−1, 1] (alle x in [−1,1] außer −1).</p>
              <p>Die Werte hat man in (b) ausgerechnet: f(x) = 0 für −1 &lt; x &lt; 1, und f(1) = 1. Das ist eine <span className="hint-em">Sprungfunktion</span>: fast überall 0, aber ein einzelner „herausgehobener" Punkt bei (1,1).</p>
              <p>Schlüsselbeobachtung (<span className="hint-em">punktweise Konvergenz</span> erhält Stetigkeit NICHT): Jede einzelne fₙ(x) = xⁿ ist stetig. Trotzdem ist die Grenzfunktion in x = 1 <span className="hint-em">unstetig</span> — links von 1 ist sie 0, im Punkt 1 springt sie auf 1. Der Grenzübergang n → ∞ kann also einen Sprung erzeugen, den keine der fₙ hatte.</p>
            </>,
            <>
              <p>So skizziert man die Grenzfunktion f: D → ℝ:</p>
              <pre className="hint-code-block">{`1) Definitionsbereich aus (b): D = (−1, 1].

2) Funktionswerte einsetzen:
   für −1 < x < 1:  f(x) = lim xⁿ = 0
   für x = 1:       f(1) = lim 1ⁿ = 1

3) Skizze:
   • waagerechte Linie y = 0 über dem offenen Intervall
     (−1, 1)  — bei x = −1 OFFEN (gehört nicht zu D),
     bei x = 1 nähert sich die Linie der Höhe 0
   • zusätzlich ein einzelner Punkt bei (1, 1)
     (ausgefüllt, denn f(1) = 1)

   So entsteht ein SPRUNG bei x = 1: die Kurve liegt
   auf 0 und springt im Endpunkt auf 1.`}</pre>
              <p>Merke den scheinbaren Widerspruch: Alle fₙ sind stetig (glatte Kurven xⁿ), die Grenzfunktion ist es nicht. Das zeigt, dass „punktweise" Konvergenz die Stetigkeit nicht automatisch mitnimmt.</p>
            </>,
            <>
              <p>Analoges Bild: gₙ(x) = 1/(1 + nx) auf [0,1].</p>
              <pre className="hint-code-block">{`x = 0:  gₙ(0) = 1 für alle n → Grenzwert 1
x > 0:  Nenner 1+nx → ∞ → gₙ(x) → 0
Grenzfunktion: 1 bei x=0, sonst 0  → Sprung bei 0,
obwohl alle gₙ stetig sind. (gleiches Phänomen)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> D = [−1,1] zeichnen (x = −1 einschließen) → <strong>✅ Richtig:</strong> D = (−1,1], denn (−1)ⁿ hat keinen Grenzwert; x = −1 gehört NICHT zum Definitionsbereich (offener Rand).</li>
              <li><strong>❌ Falsch:</strong> f(1) = 0 setzen (weil sonst überall 0) → <strong>✅ Richtig:</strong> 1ⁿ = 1 für alle n, also f(1) = lim 1ⁿ = 1; der Punkt (1,1) gehört dazu.</li>
            </ul>,
            <p>Selbst-Probe: Für x = 0,99 ist 0,99ⁿ → 0 (sehr langsam, aber gegen 0), für x = 1 bleibt 1ⁿ = 1 — direkt nebeneinander liegen Wert 0 und Wert 1, daher der Sprung. Frage: Alle fₙ sind stetig — warum kann die punktweise gebildete Grenzfunktion trotzdem unstetig sein (was passiert genau zwischen x knapp unter 1 und x = 1)?</p>,
          ),
          solution: (
            <>
              {'Nach Teil (b) ist\n'}
              <M>{'f:(-1,1]\\to\\mathbb{R},\\ x\\mapsto \\begin{cases} 0, & x\\in(-1,1),\\\\ 1, & x=1.\\end{cases}'}</M>
              {'\n'}
              {'Skizze:'}
            </>
          ),
          abbildung: (
            <FunctionPlot
              data={{
                xMin: -1.4, xMax: 1.4, yMin: -0.5, yMax: 1.5,
                caption: 'Grenzfunktion f: 0 auf (−1,1), Sprung auf 1 bei x=1',
                series: [{ f: () => 0, from: -1, to: 1, color: '#4d9fff' }],
                markers: [
                  { x: -1, y: 0, filled: false, color: '#4d9fff' },
                  { x: 1, y: 0, filled: false, color: '#4d9fff' },
                  { x: 1, y: 1, filled: true, color: '#f16063' },
                ],
              }}
            />
          ),
        },
      ],
    },
  ],
}
