import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt10: MatheBlatt = {
  id: 'blatt10',
  nr: '10',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung10 - grenzwerte/10_aufg_grenzwerte-asymptotik.pdf',
  titel: 'Reihen, Grenzwerte von Funktionen, Asymptotik',
  aufgaben: [
    {
      id: 'b10a1',
      nr: 1,
      title: 'Reihen auf Konvergenz untersuchen',
      referenz: ['reihen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <M>{'\\sum_{k=1}^{\\infty} (-1)^k'}</M>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Reihe</span> Σaₖ ist eine unendliche Summe; sie <span className="hint-em">konvergiert</span>, wenn ihre Partialsummen (abgebrochenen Summen) gegen eine feste Zahl streben, sonst <span className="hint-em">divergiert</span> sie.</p>
              <p><span className="hint-em">Notwendige Bedingung (Nullfolgenkriterium)</span>: Konvergiert Σaₖ, so MUSS aₖ → 0 für k → ∞ gelten. Anschaulich: Addiert man unendlich viele Zahlen, die nicht beliebig klein werden, kann sich die Summe nie einpendeln.</p>
              <p>Als <span className="hint-em">Divergenztest</span> (Kontraposition): Geht aₖ NICHT gegen 0, divergiert die Reihe sofort. Eine Folge bildet keine <span className="hint-em">Nullfolge</span>, wenn sie keinen Grenzwert 0 hat — auch dann, wenn sie gar keinen Grenzwert besitzt (z.B. weil sie pendelt).</p>
              <p>Hier ist aₖ = (−1)ᵏ: für gerades k ist (−1)ᵏ = +1, für ungerades k ist (−1)ᵏ = −1. Die Folge <span className="hint-em">pendelt</span> ewig zwischen −1 und +1 und besitzt keinen Grenzwert — insbesondere geht sie nicht gegen 0.</p>
            </>,
            <>
              <p>So zeigt man die Divergenz von Σ(k=1..∞) (−1)ᵏ:</p>
              <pre className="hint-code-block">{`1) Glied: aₖ = (−1)ᵏ.
   k=1: −1,  k=2: +1,  k=3: −1,  k=4: +1, …

2) Grenzwert der Glieder?
   Die Werte springen zwischen −1 und +1 hin und her
   → kein Grenzwert, insbesondere lim aₖ ≠ 0.

3) Nullfolgenkriterium:
   aₖ ↛ 0  → notwendige Bedingung verletzt.

4) Schluss: Σ (−1)ᵏ divergiert.
   (Auch sichtbar an den Partialsummen:
    −1, 0, −1, 0, −1, … pendeln, kein Grenzwert.)`}</pre>
            </>,
            <>
              <p>Kontrast: Σ(k=1..∞) (−1)ᵏ/k</p>
              <pre className="hint-code-block">{`Hier aₖ = 1/k → 0 (Glieder schrumpfen)
+ alternierend + monoton fallend
→ konvergiert nach Leibniz.
Unterschied zu (−1)ᵏ: dort schrumpfen die Glieder
NICHT, hier (1/k) schon.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Wechselnde Vorzeichen → Leibniz → konvergiert → <strong>✅ Richtig:</strong> Leibniz verlangt zusätzlich aₖ → 0; hier (−1)ᵏ ↛ 0 → die Reihe divergiert.</li>
              <li><strong>❌ Falsch:</strong> „pendelt zwischen ±1, also Grenzwert 0 im Mittel" → <strong>✅ Richtig:</strong> Ein Mittelwert ist kein Grenzwert; die Folge selbst geht nicht gegen 0.</li>
            </ul>,
            <p>Selbstkontrolle: Die Partialsummen sind −1, 0, −1, 0, … — sie nähern sich keiner einzigen Zahl. Frage: Welche zusätzliche Bedingung neben dem Vorzeichenwechsel braucht das Leibnizkriterium, und warum bildet (−1)ᵏ keine Nullfolge?</p>,
          ),
          solution: 'Die Summanden bilden keine Nullfolge. Also konvergiert die Reihe nicht.',
        },
        {
          letter: 'b',
          text: <><M>{'\\sum_{k=1}^{\\infty} (-1)^k \\cdot'}</M>{' '}<Frac n="1" d="k²" /></>,
          hint: h(
            <>
              <p>Die Reihe ist <span className="hint-em">alternierend</span> (Faktor (−1)ᵏ → abwechselnd + und −). Der Teil ohne Vorzeichen ist aₖ = 1/k² ≥ 0. Zwei Wege führen zum Ziel:</p>
              <ul>
                <li><span className="hint-em">Leibnizkriterium</span>: Σ(−1)ᵏ aₖ konvergiert, wenn (1) aₖ monoton fällt (aₖ₊₁ ≤ aₖ) UND (2) aₖ → 0. Beide Bedingungen sind nötig.</li>
                <li><span className="hint-em">Majorantenkriterium</span> (Vergleich nach oben): Findet man eine „größere" konvergente Reihe Σbₖ mit |aₖ| ≤ bₖ, so konvergiert Σaₖ <em>absolut</em> (und damit erst recht). Eine solche obere Vergleichsreihe heißt Majorante.</li>
              </ul>
              <p><span className="hint-em">p-Reihe</span> (Standardwissen): Σ 1/kᵖ konvergiert genau dann, wenn p &gt; 1, und divergiert für p ≤ 1. Hier ist 1/k² die p-Reihe mit p = 2 &gt; 1 → konvergent. Das ist der Schlüssel für beide Methoden.</p>
              <p><span className="hint-em">Monoton fallend</span>: 1/(k+1)² &lt; 1/k², weil (k+1)² &gt; k² (größerer Nenner → kleinerer Bruch).</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) (−1)ᵏ·(1/k²) — beide Wege:</p>
              <pre className="hint-code-block">{`aₖ = 1/k²

LEIBNIZ:
(1) monoton fallend: (k+1)² > k² ⟹ 1/(k+1)² < 1/k²
    also aₖ₊₁ < aₖ ✓
(2) Nullfolge: k² → ∞ ⟹ 1/k² → 0 ✓
⟹ Reihe konvergiert (bedingt).

MAJORANTE:
Setze bₖ = 1/k². Dann |(−1)ᵏ/k²| = 1/k² ≤ bₖ.
Σ bₖ = Σ 1/k² ist p-Reihe mit p = 2 > 1 → konvergent.
⟹ Reihe konvergiert sogar absolut.`}</pre>
              <p>Hier ist die Majorante besonders stark: Sie zeigt sogar absolute Konvergenz (auch die Betragsreihe Σ 1/k² konvergiert), während Leibniz „nur" bedingte Konvergenz liefert.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) (−1)ᵏ·(1/k³)</p>
              <pre className="hint-code-block">{`Leibniz: 1/(k+1)³ < 1/k³ (fallend), 1/k³ → 0 → konv.
Majorante: 1/k³ ist p-Reihe mit p=3>1 → absolut konv.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> aₖ → 0 genügt für Leibniz → <strong>✅ Richtig:</strong> Zusätzlich muss aₖ monoton fallend sein; beide Bedingungen explizit prüfen.</li>
              <li><strong>❌ Falsch:</strong> Eine Majorante bₖ wählen, deren Reihe divergiert (z.B. 1/k) → <strong>✅ Richtig:</strong> Die Majorante Σbₖ muss selbst konvergieren (p-Reihe mit p &gt; 1, hier 1/k²).</li>
            </ul>,
            <p>Selbstkontrolle: p = 2 &gt; 1 → Σ 1/k² konvergiert (Wert π²/6 ≈ 1,645); die alternierende Version liegt betragsmäßig darunter. Frage: Warum liefert die Majorante hier absolute Konvergenz, Leibniz aber nur bedingte — und welche Schwelle für p entscheidet bei der p-Reihe?</p>,
          ),
          solution: (
            <>
              {'Mit Leibnizkriterium:\n'}
              {'Definiere '}<M>{'a_k := \\frac{1}{k^{2}}'}</M>{' für '}<M>{'k\\in\\mathbb{N}^{*}'}</M>{'. Es ist '}<M>{'\\lim_{k\\to\\infty} a_k = 0'}</M>{', also '}<M>{'(a_k)'}</M>{' eine Nullfolge. Desweiteren ist '}<M>{'a_{k+1} = \\frac{1}{(k+1)^{2}} \\le \\frac{1}{k^{2}} = a_k'}</M>{', also '}<M>{'(a_k)'}</M>{' monoton fallend. Somit konvergiert die Reihe '}<M>{'\\sum_{k=1}^{\\infty} (-1)^{k}\\frac{1}{k^{2}}'}</M>{' nach dem Leibnizkriterium.\n\n'}
              {'Mit Majorantenkriterium:\n'}
              {'Definiere '}<M>{'a_k := \\frac{(-1)^{k}}{k^{2}}'}</M>{' und '}<M>{'b_k := \\frac{1}{k^{2}}'}</M>{'. Nach Vorlesung konvergiert die Reihe '}<M>{'\\sum_{k=1}^{\\infty} b_k'}</M>{'. Da '}<M>{'|a_k| \\le b_k'}</M>{' für alle '}<M>{'k\\in\\mathbb{N}^{*}'}</M>{' konvergiert nach dem Majorantenkriterium auch die Reihe '}<M>{'\\sum_{k=1}^{\\infty} a_k'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <><M>{'\\sum_{k=1}^{\\infty}'}</M>{' '}<Frac n="k⁵" d="(−4) · k!" /></>,
          hint: h(
            <>
              <p>Die <span className="hint-em">Fakultät</span> k! ist das Produkt aller Zahlen von 1 bis k: k! = 1·2·3·…·k (z.B. 4! = 24). Wichtigste Rechenregel: <span className="hint-em">(k+1)! = (k+1)·k!</span> — die nächste Fakultät ist die alte mal (k+1). Daraus folgt (k+1)!/k! = k+1.</p>
              <p>Steht eine Fakultät im Nenner, ist das <span className="hint-em">Quotientenkriterium</span> die beste Wahl: Bilde L = lim |aₖ₊₁/aₖ|. Ist L &lt; 1, konvergiert die Reihe (absolut); L &gt; 1 → divergent; L = 1 → keine Aussage. Beim Quotienten kürzen sich die Fakultäten elegant heraus.</p>
              <p>Da das Kriterium <span className="hint-em">Beträge</span> verwendet (|aₖ₊₁/aₖ|), spielt das konstante Vorzeichen (hier der Faktor −4) keine Rolle für Konvergenz — |−4| = 4 bleibt als positiver Faktor im Nenner.</p>
              <p>Grundtatsache: k! wächst schneller als jede Potenz kⁿ, daher „gewinnt" die Fakultät im Nenner und drückt den Quotienten gegen 0.</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) k⁵/((−4)·k!):</p>
              <pre className="hint-code-block">{`aₖ = k⁵ / ((−4)·k!),  also |aₖ| = k⁵ / (4·k!)

Quotient |aₖ₊₁/aₖ| aufstellen:
= [ (k+1)⁵/(4·(k+1)!) ] · [ (4·k!)/k⁵ ]
= (k+1)⁵/k⁵ · k!/(k+1)!        (die 4 kürzt sich)
= ((k+1)/k)⁵ · 1/(k+1)         ((k+1)!/k! = k+1)

Grenzwert k → ∞:
  ((k+1)/k)⁵ → 1⁵ = 1   (denn (k+1)/k → 1)
  1/(k+1)    → 0
⟹ L = 1 · 0 = 0 < 1

⟹ die Reihe konvergiert.`}</pre>
              <p>Der entscheidende Faktor ist 1/(k+1) → 0: er kommt von der Fakultät und zwingt den Grenzwert auf 0.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) 2ᵏ/k!</p>
              <pre className="hint-code-block">{`|aₖ₊₁/aₖ| = [2^(k+1)/(k+1)!]·[k!/2ᵏ]
          = 2 · k!/(k+1)! = 2/(k+1) → 0 < 1
→ konvergiert (k! schlägt 2ᵏ).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (k+1)!/k! = 1 → <strong>✅ Richtig:</strong> (k+1)! = (k+1)·k!, also (k+1)!/k! = k+1; im Quotienten steht k!/(k+1)! = 1/(k+1).</li>
              <li><strong>❌ Falsch:</strong> Das Vorzeichen −4 beeinflusst die Konvergenz → <strong>✅ Richtig:</strong> Das Quotientenkriterium nutzt Beträge; |−4| = 4 ist nur ein konstanter Faktor, der sich beim Quotienten ohnehin wegkürzt.</li>
            </ul>,
            <p>Selbstkontrolle: Glieder (Betrag) 1/4; 32/(4·2)=4; 243/(4·6)≈10; 1024/(4·24)≈11; 3125/(4·120)≈6,5; dann fallend → k! gewinnt. Frage: Warum erscheint im Quotienten der Faktor 1/(k+1), und warum garantiert dieser den Grenzwert 0 (und damit Konvergenz)?</p>,
          ),
          solution: (
            <>
              {'Definiere '}<M>{'a_k := \\frac{k^{5}}{(-4)\\cdot k!}'}</M>{' für '}<M>{'k\\in\\mathbb{N}^{*}'}</M>{'.\n'}
              {'Mit Quotientenkriterium:\n'}
              <M>{'\\left|\\frac{a_{k+1}}{a_k}\\right| = \\left|\\frac{\\frac{(k+1)^{5}}{(-4)\\cdot(k+1)!}}{\\frac{k^{5}}{(-4)\\cdot k!}}\\right| = \\frac{4\\cdot(k+1)^{5}\\cdot k!}{4\\cdot k^{5}\\cdot(k+1)!} = \\left(\\frac{k+1}{k}\\right)^{5}\\cdot\\frac{1}{k+1} \\to 0 < 1'}</M>{', für '}<M>{'k\\to\\infty'}</M>{'.\n'}
              {'Nach Quotientenkriterium konvergiert die Reihe.\n\n'}
              {'Mit Wurzelkriterium:\n'}
              <M>{'\\sqrt[k]{|a_k|} = \\frac{\\sqrt[k]{k^{5}}}{\\sqrt[k]{4}\\,\\sqrt[k]{k!}} = \\frac{(\\sqrt[k]{k})^{5}}{\\sqrt[k]{4}\\,\\sqrt[k]{k!}} \\to 0 < 1'}</M>{', für '}<M>{'k\\to\\infty'}</M>{', wobei wir verwendet haben, dass '}<M>{'\\lim_{k\\to\\infty}\\frac{1}{\\sqrt[k]{k!}} = 0'}</M>{', '}<M>{'\\lim_{k\\to\\infty}\\sqrt[k]{a} = 1'}</M>{' für '}<M>{'a > 0'}</M>{' und '}<M>{'\\lim_{k\\to\\infty}\\sqrt[k]{k} = 1'}</M>{'.\n'}
              {'Nach Wurzelkriterium konvergiert die Reihe.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <><M>{'\\sum_{k=1}^{\\infty}'}</M>{' ('}<Frac n="k" d="2k+1" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Das Glied hat die Form aₖ = (etwas)ᵏ, nämlich (k/(2k+1))ᵏ — eine <span className="hint-em">k-te Potenz</span>. Genau dafür ist das <span className="hint-em">Wurzelkriterium</span> gemacht.</p>
              <p><span className="hint-em">Wurzelkriterium</span>: Bilde L = lim(k→∞) ᵏ√|aₖ|. Dann L &lt; 1 → konvergiert, L &gt; 1 → divergiert, L = 1 → keine Aussage. Schlüsselregel: <span className="hint-em">ᵏ√(xᵏ) = x</span> für x ≥ 0 — die k-te Wurzel hebt die k-te Potenz exakt auf, der Exponent k verschwindet vollständig.</p>
              <p><span className="hint-em">Grenzwert rationaler Ausdrücke</span> für k → ∞: Zähler und Nenner durch die höchste k-Potenz (hier k¹) teilen. k/(2k+1) = 1/(2 + 1/k), und weil 1/k → 0, geht das gegen 1/2. (Faustregel: bei gleichem Grad → Verhältnis der führenden Koeffizienten, hier 1/2.)</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) (k/(2k+1))ᵏ:</p>
              <pre className="hint-code-block">{`1) aₖ = (k/(2k+1))ᵏ ist k-te Potenz
   → Wurzelkriterium.

2) k-te Wurzel ziehen (ᵏ√(xᵏ) = x):
   ᵏ√|aₖ| = ᵏ√( (k/(2k+1))ᵏ ) = k/(2k+1)

3) Grenzwert (durch k teilen):
   k/(2k+1) = 1/(2 + 1/k)
   1/k → 0  ⟹  → 1/(2+0) = 1/2

4) Mit 1 vergleichen:
   L = 1/2 < 1  ⟹  die Reihe konvergiert.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) ((3k+2)/(k))ᵏ  — Vorsicht, hier L &gt; 1</p>
              <pre className="hint-code-block">{`ᵏ√|aₖ| = (3k+2)/k = 3 + 2/k → 3
L = 3 > 1 → die Reihe DIVERGIERT.
(Zeigt: das Wurzelkriterium kann auch Divergenz liefern.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√(aᵏ) = a^(1/k) → <strong>✅ Richtig:</strong> ᵏ√(aᵏ) = a für a ≥ 0; der Exponent k wird vollständig aufgehoben, nicht nochmals gewurzelt.</li>
              <li><strong>❌ Falsch:</strong> lim k/(2k+1) = 1 → <strong>✅ Richtig:</strong> Durch k teilen: 1/(2 + 1/k) → 1/2 (der Nenner hat den führenden Koeffizienten 2).</li>
            </ul>,
            <p>Selbstkontrolle: Für großes k ist k/(2k+1) ≈ 1/2, und (1/2)ᵏ → 0 schnell → Konvergenz plausibel. Frage: Warum hebt die k-te Wurzel die k-te Potenz vollständig auf, und warum ergibt k/(2k+1) den Grenzwert 1/2 statt 1?</p>,
          ),
          solution: (
            <>
              {'Definiere '}<M>{'a_k := \\left(\\frac{k}{2k+1}\\right)^{k}'}</M>{'.\n'}
              {'Mit Wurzelkriterium:\n'}
              <M>{'\\sqrt[k]{|a_k|} = \\frac{k}{2k+1} \\to \\frac{1}{2} < 1'}</M>{' für '}<M>{'k\\to\\infty'}</M>{'.\n'}
              {'Nach Wurzelkriterium konvergiert die Reihe.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a2',
      nr: 2,
      title: 'Grenzwerte bestimmen',
      referenz: ['funktionsgrenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: <><M>{'\\lim_{x \\to \\infty}'}</M>{' '}<Frac n="x − 4x³ + 2" d="x + 4x⁴ + 7x²" /></>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Grenzwert</span> lim(x→∞) f(x) fragt: Welchem Wert nähert sich f(x), wenn x über alle Grenzen wächst? Bei einer <span className="hint-em">rationalen Funktion</span> (Bruch zweier Polynome) entscheidet der Vergleich der <span className="hint-em">Grade</span> (höchste Exponenten) von Zähler und Nenner.</p>
              <p><span className="hint-em">Standardtechnik</span>: Durch die <em>höchste insgesamt vorkommende x-Potenz</em> kürzen (hier x⁴, der Grad des Nenners). Dann verwandeln sich alle Terme der Form (Zahl)/xⁿ mit n &gt; 0 in 0, weil <span className="hint-em">1/xⁿ → 0</span> für x → ∞ (großer Nenner → kleiner Bruch).</p>
              <p><span className="hint-em">Grad-Regel</span> als Merkhilfe: Grad(Z) &lt; Grad(N) → Grenzwert 0; Grad(Z) = Grad(N) → Verhältnis der führenden Koeffizienten; Grad(Z) &gt; Grad(N) → ±∞. Hier: Grad(Z) = 3 (höchster Term −4x³), Grad(N) = 4 (höchster Term 4x⁴), also 3 &lt; 4 → Grenzwert 0.</p>
              <p>Den Grad liest man am höchsten Exponenten ab, NICHT an der Reihenfolge der Summanden (die Terme stehen hier ungeordnet).</p>
            </>,
            <>
              <p>So bestimmt man lim(x→∞) (x − 4x³ + 2)/(x + 4x⁴ + 7x²):</p>
              <pre className="hint-code-block">{`1) Grade bestimmen (höchste Exponenten):
   Zähler x − 4x³ + 2 → Grad 3
   Nenner x + 4x⁴ + 7x² → Grad 4
   3 < 4 → Erwartung: Grenzwert 0.

2) Durch x⁴ (höchste Potenz, Nennergrad) teilen:
   Zähler/x⁴ = 1/x³ − 4/x + 2/x⁴
   Nenner/x⁴ = 1/x³ + 4 + 7/x²

3) Grenzwert x → ∞ (alle 1/xⁿ → 0):
   Zähler → 0 − 0 + 0 = 0
   Nenner → 0 + 4 + 0 = 4

4) Bruch: 0/4 = 0.

⟹ lim = 0.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→∞) (2x² + 1)/(x³ − x)</p>
              <pre className="hint-code-block">{`Grad(Z)=2 < Grad(N)=3 → Grenzwert 0
durch x³ teilen: (2/x + 1/x³)/(1 − 1/x²) → 0/1 = 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Durch die höchste Zähler-Potenz (x³) teilen → <strong>✅ Richtig:</strong> Immer durch die höchste Potenz <em>aller</em> Terme teilen — hier x⁴ aus dem Nenner.</li>
              <li><strong>❌ Falsch:</strong> Grad(Z) = 7 oder Grad(N) = 1 (erste/letzte Zahl abgelesen) → <strong>✅ Richtig:</strong> Grad = höchster Exponent: Grad(Z) = 3, Grad(N) = 4.</li>
            </ul>,
            <p>Selbstkontrolle: Setze x = 100: Zähler ≈ −4·10⁶, Nenner ≈ 4·10⁸ → ≈ −0,01, geht gegen 0. Frage: Warum geht ein Bruch mit kleinerem Zählergrad gegen 0, und welche Potenz wählt man zum Kürzen?</p>,
          ),
          solution: (
            <>
              {'Mit den Rechenregeln für (uneigentliche) Grenzwerte erhalten wir:\n'}
              <M>{'\\lim_{x\\to\\infty}\\frac{x-4x^{3}+2}{x+4x^{4}+7x^{2}} = \\lim_{x\\to\\infty}\\frac{x^{3}}{x^{4}}\\cdot\\frac{\\frac{1}{x^{2}}-4+\\frac{2}{x^{3}}}{\\frac{1}{x^{3}}+4+\\frac{7}{x^{2}}} = \\lim_{x\\to\\infty}\\frac{1}{x}\\cdot\\frac{\\frac{1}{x^{2}}-4+\\frac{2}{x^{3}}}{\\frac{1}{x^{3}}+4+\\frac{7}{x^{2}}} = 0'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: <><M>{'\\lim_{x \\to -\\infty}'}</M>{' '}<Frac n="x⁷ − x" d="x − 3x²" /></>,
          hint: h(
            <>
              <p>Wieder eine rationale Funktion, aber jetzt mit Grad(Z) = 7 &gt; Grad(N) = 2 (Differenz 5). Nach der Grad-Regel ist der Grenzwert <span className="hint-em">±∞</span> (uneigentlich) — der Zähler wächst schneller als der Nenner. Zusätzlich läuft x gegen <span className="hint-em">−∞</span>, deshalb muss man penibel auf <span className="hint-em">Vorzeichen</span> achten.</p>
              <p>Technik: Aus Zähler und Nenner die <em>höchste Nenner-Potenz</em> x² ausklammern und kürzen. Übrig bleibt ein Faktor x^(7−2) = x⁵ (der gegen ±∞ treibt) mal einem Bruch, der gegen eine endliche Zahl strebt.</p>
              <p><span className="hint-em">Vorzeichenregel für Potenzen</span> bei x → −∞: Bei <em>ungeradem</em> Exponenten bleibt das Minus erhalten ((−∞)⁵ = −∞), bei <em>geradem</em> wird es positiv ((−∞)² = +∞). Hier ist x⁵ ungerade → x⁵ → −∞.</p>
              <p>Außerdem: 1/x → 0 auch für x → −∞ (egal ob von oben oder unten). Und das <span className="hint-em">Produkt von Grenzwerten</span> folgt den Vorzeichenregeln: (−)·(−) = (+).</p>
            </>,
            <>
              <p>So bestimmt man lim(x→−∞) (x⁷ − x)/(x − 3x²):</p>
              <pre className="hint-code-block">{`1) x² aus Zähler und Nenner ziehen:
   Zähler: x⁷ − x = x²·(x⁵ − 1/x) = x²·x⁵·(1 − 1/x⁶)
   Nenner: x − 3x² = x²·(1/x − 3)
   Bruch: = x⁵ · (1 − 1/x⁶)/(1/x − 3)

2) Grenzwert des Restbruchs (x → −∞):
   1/x⁶ → 0, 1/x → 0, also
   (1 − 1/x⁶)/(1/x − 3) → (1 − 0)/(0 − 3) = 1/(−3) = −1/3

3) Vorzeichen des Faktors x⁵ (ungerade Potenz):
   x → −∞ ⟹ x⁵ → −∞

4) Produkt bilden (Vorzeichenregel (−)·(−) = +):
   (−∞) · (−1/3) = +∞

⟹ lim(x→−∞) = +∞.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: lim(x→−∞) (x³ + 1)/(x + 1)</p>
              <pre className="hint-code-block">{`x ausklammern: = x²·(1 + 1/x³)/(1 + 1/x)
x² → +∞ (gerade!), Restbruch → 1/1 = 1
⟹ (+∞)·1 = +∞.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x⁵ → +∞ für x → −∞ → <strong>✅ Richtig:</strong> ungerade Potenz: (−∞)⁵ = −∞, das Minus bleibt.</li>
              <li><strong>❌ Falsch:</strong> 1/x − 3 → +3 → <strong>✅ Richtig:</strong> 1/x → 0, also 1/x − 3 → −3 (das −3 bleibt negativ).</li>
            </ul>,
            <p>Selbstkontrolle: Setze x = −10: Zähler −10⁷ ≈ −10⁷, Nenner −310 → ≈ +32000 &gt; 0, also positiv groß → +∞. Frage: Warum wird (−∞)⁵ negativ aber (−∞)² positiv, und wie ergibt das Produkt zweier negativer Grenzwerte hier +∞?</p>,
          ),
          solution: (
            <>
              <M>{'\\lim_{x\\to-\\infty}\\frac{x^{7}-x}{x-3x^{2}} = \\lim_{x\\to-\\infty}\\frac{x^{7}}{x^{2}}\\cdot\\frac{1-\\frac{1}{x^{6}}}{\\frac{1}{x}-3} = \\lim_{x\\to-\\infty}\\underbrace{x^{5}}_{\\to-\\infty,\\,x\\to-\\infty}\\cdot\\underbrace{\\frac{1-\\frac{1}{x^{6}}}{\\frac{1}{x}-3}}_{\\to-\\frac{1}{3},\\,x\\to-\\infty} = \\infty'}</M>
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a3',
      nr: 3,
      title: 'Grenzwerte und Stetigkeit der Funktion h',
      referenz: ['funktionsgrenzwerte', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Gegeben sei die Funktion\n\n'}
              <M>{'h : \\mathbb{R} \\to \\mathbb{R},\\quad x \\mapsto \\begin{cases} \\dfrac{x^{2}-1}{x+1}, & x \\neq -1,\\\\[4pt] -100, & x = -1.\\end{cases}'}</M>
              {'\n\nBestimmen Sie\n\n'}
              <M>{'\\lim_{\\substack{x\\to-1\\\\x<-1}} h(x)'}</M>{',   '}
              <M>{'\\lim_{\\substack{x\\to-1\\\\x>-1}} h(x)'}</M>{'   und   '}
              <M>{'\\lim_{x\\to-1} h(x)'}</M>{',\n\nsofern die Grenzwerte existieren. Ist '}<M>{'h'}</M>{' stetig in '}<M>{'x = -1'}</M>{'?'}
            </>
          ),
          hint: h(
            <>
              <p>Eine Funktion f ist in einer Stelle x₀ <span className="hint-em">stetig</span>, wenn man sie dort „ohne Absetzen des Stifts" zeichnen kann. Präzise: f ist in x₀ stetig, wenn DREI Dinge gelten: (1) f(x₀) ist definiert, (2) der Grenzwert lim(x→x₀) f(x) existiert, und (3) beide stimmen überein: lim(x→x₀) f(x) = f(x₀).</p>
              <p><span className="hint-em">Einseitige Grenzwerte</span>: lim(x→x₀, x&lt;x₀) f(x) ist der <span className="hint-em">linksseitige</span> (Annäherung von links/kleineren Werten), lim(x→x₀, x&gt;x₀) f(x) der <span className="hint-em">rechtsseitige</span>. Der (beidseitige) Grenzwert existiert genau dann, wenn beide einseitigen existieren UND gleich sind.</p>
              <p><span className="hint-em">3. binomische Formel</span>: x² − 1 = x² − 1² = (x+1)(x−1). Damit lässt sich h(x) für x ≠ −1 kürzen: (x+1)(x−1)/(x+1) = x − 1. Wichtig: Kürzen ist erlaubt, weil im Grenzwertprozess x ≠ −1 ist (x kommt −1 nur beliebig nahe, ist aber nie genau −1).</p>
              <p>Hier ist der Funktionswert h(−1) = −100 künstlich „falsch" gesetzt — das prüft, ob man Grenzwert und Funktionswert auseinanderhält.</p>
            </>,
            <>
              <p>So untersucht man h in x = −1:</p>
              <pre className="hint-code-block">{`1) Für x ≠ −1 vereinfachen (Zähler faktorisieren):
   h(x) = (x²−1)/(x+1) = (x+1)(x−1)/(x+1) = x − 1

2) Einseitige Grenzwerte mit der einfachen Form x−1:
   linksseitig  lim(x→−1, x<−1) (x−1) = −1−1 = −2
   rechtsseitig lim(x→−1, x>−1) (x−1) = −1−1 = −2

3) Beidseitiger Grenzwert:
   links = rechts = −2  ⟹  lim(x→−1) h(x) = −2  (existiert)

4) Stetigkeit prüfen (Grenzwert = Funktionswert?):
   lim(x→−1) h(x) = −2,  aber  h(−1) = −100
   −2 ≠ −100  ⟹  h ist in x = −1 NICHT stetig.`}</pre>
              <p>(Es ist eine „behebbare" Unstetigkeit: Würde man h(−1) = −2 setzen, wäre h stetig — der Defekt steckt nur im Funktionswert, nicht im Grenzwert.)</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = (x²−4)/(x−2) für x ≠ 2, g(2) = 5</p>
              <pre className="hint-code-block">{`x²−4 = (x+2)(x−2) → g(x) = x+2 für x ≠ 2
lim(x→2) g(x) = 2+2 = 4, aber g(2) = 5
4 ≠ 5 → nicht stetig in x = 2.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(x→−1) h(x) = h(−1) = −100 → <strong>✅ Richtig:</strong> Der Grenzwert ist −2 (aus x−1); h(−1) = −100 ist nur der separat gesetzte Funktionswert.</li>
              <li><strong>❌ Falsch:</strong> (x+1) auch bei x = −1 direkt kürzen → <strong>✅ Richtig:</strong> Kürzen gilt nur im Grenzwertprozess (x ≠ −1); bei x = −1 wäre x+1 = 0, also 0/0 undefiniert.</li>
            </ul>,
            <p>Selbstkontrolle: h(−0,9) = (0,81−1)/0,1 = −1,9 und h(−1,1) = (1,21−1)/(−0,1) = −2,1 — nähern sich −2, nicht −100. Frage: Welche drei Bedingungen muss Stetigkeit erfüllen, und welche ist hier verletzt?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'x\\neq -1'}</M>{' ist\n'}
              <M>{'h(x) = \\frac{x^{2}-1}{x+1} = \\frac{(x+1)(x-1)}{x+1} = x-1.'}</M>
              {'\n'}
              {'Es ist also\n'}
              <M>{'h(x) = \\begin{cases} x-1, & x\\neq -1,\\\\ -100, & x=-1.\\end{cases}'}</M>
              {'\n'}
              {'Damit ergibt sich\n'}
              <M>{'\\lim_{\\substack{x\\to-1\\\\x<-1}} h(x) = -2,\\quad \\lim_{\\substack{x\\to-1\\\\x>-1}} h(x) = -2.'}</M>
              {'\n'}
              {'Da links- und rechtsseitige Grenzwerte existieren und übereinstimmen, ist auch '}<M>{'\\lim_{x\\to-1} h(x) = -2'}</M>{'. Da '}<M>{'h(-1) = -100 \\neq \\lim_{x\\to-1} h(x)'}</M>{', ist '}<M>{'h'}</M>{' nicht stetig in '}<M>{'x=-1'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a4',
      nr: 4,
      title: 'Grenzwerte und Stetigkeit von f',
      referenz: ['funktionsgrenzwerte', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Betrachten Sie die Funktion\n\n'}
              <M>{'f : \\mathbb{R} \\to \\mathbb{R},\\quad f(x) = \\begin{cases} \\dfrac{|4-2x|}{x-2}, & x \\neq 2,\\\\[4pt] 0, & x = 2.\\end{cases}'}</M>
              {'\n\nÜberlegen Sie, welche der folgenden Grenzwerte existieren und bestimmen Sie gegebenenfalls den Grenzwert. Ist '}<M>{'f'}</M>{' stetig in '}<M>{'x = 2'}</M>{'?\n\n'}
              {'(a) '}<M>{'\\lim_{\\substack{x\\to2\\\\x>2}} f(x)'}</M>{'   (b) '}<M>{'\\lim_{\\substack{x\\to2\\\\x<2}} f(x)'}</M>{'   (c) '}<M>{'\\lim_{x\\to2} f(x)'}</M>{'   (d) '}<M>{'\\lim_{x\\to0} f(x)'}</M>{'.'}
            </>
          ),
          hint: h(
            <>
              <p>Der <span className="hint-em">Betrag</span> |a| ist der Abstand von a zur 0, also immer ≥ 0: |a| = a, falls a ≥ 0, und |a| = −a, falls a &lt; 0. Wegen dieser Fallunterscheidung muss man bei Betragsfunktionen <span className="hint-em">getrennt nach links und rechts</span> rechnen.</p>
              <p>Zuerst ausklammern: |4 − 2x| = |2·(2 − x)| = 2·|2 − x| (der Faktor 2 &gt; 0 darf aus dem Betrag heraus). Der Vorzeichenwechsel sitzt in (2 − x): für x &lt; 2 ist 2 − x &gt; 0 (also |2−x| = 2−x), für x &gt; 2 ist 2 − x &lt; 0 (also |2−x| = −(2−x) = x−2).</p>
              <p><span className="hint-em">Einseitige Grenzwerte</span>: lim(x→2, x&gt;2) = rechtsseitig, lim(x→2, x&lt;2) = linksseitig. Der beidseitige Grenzwert lim(x→2) existiert NUR, wenn beide gleich sind. Sind sie verschieden, hat die Funktion dort einen <span className="hint-em">Sprung</span> → kein Grenzwert → unstetig.</p>
              <p>Für lim(x→0) gibt es kein Problem: 0 ≠ 2, dort ist f durch die Formel direkt auswertbar (einsetzen).</p>
            </>,
            <>
              <p>So bestimmt man die Grenzwerte von f(x) = |4−2x|/(x−2):</p>
              <pre className="hint-code-block">{`Umschreiben: |4−2x| = 2|2−x|

Fall x > 2:  |2−x| = x−2
  f(x) = 2(x−2)/(x−2) = 2
  ⟹ (a) lim(x→2, x>2) f(x) = 2

Fall x < 2:  |2−x| = 2−x = −(x−2)
  f(x) = 2·(−(x−2))/(x−2) = −2
  ⟹ (b) lim(x→2, x<2) f(x) = −2

(c) beidseitig: rechts = 2 ≠ −2 = links
    ⟹ lim(x→2) f(x) EXISTIERT NICHT.

(d) lim(x→0): 0 ≠ 2 → direkt einsetzen:
    |4−2·0|/(0−2) = |4|/(−2) = 4/(−2) = −2

Stetigkeit in x = 2: da lim(x→2) f(x) nicht existiert,
ist f dort NICHT stetig (Sprung von −2 auf 2).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = |x|/x für x ≠ 0</p>
              <pre className="hint-code-block">{`x > 0: |x| = x → x/x = 1
x < 0: |x| = −x → −x/x = −1
lim(x→0,x>0)=1, lim(x→0,x<0)=−1 → verschieden
→ Grenzwert existiert nicht, Sprung bei 0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |2−x| = x−2 für alle x → <strong>✅ Richtig:</strong> fallweise: für x &lt; 2 gilt |2−x| = 2−x, für x &gt; 2 gilt |2−x| = x−2.</li>
              <li><strong>❌ Falsch:</strong> lim(x→0) f(x) = „nicht definiert" → <strong>✅ Richtig:</strong> Bei x = 0 (≠ 2) einfach einsetzen: |4|/(0−2) = −2.</li>
            </ul>,
            <p>Selbstkontrolle: f(2,1) = |4−4,2|/0,1 = 0,2/0,1 = 2 (rechts) und f(1,9) = |4−3,8|/(−0,1) = 0,2/(−0,1) = −2 (links) — bestätigt den Sprung. Frage: Wann existiert ein beidseitiger Grenzwert, und warum macht ein Betrag im Zähler eine Fallunterscheidung nötig?</p>,
          ),
          solution: (
            <>
              {'Es ist\n'}
              <M>{'\\frac{|4-2x|}{x-2} = \\frac{2\\,|2-x|}{x-2}.'}</M>
              {'\n'}
              {'Für '}<M>{'x>2'}</M>{' ergibt sich\n'}
              <M>{'\\frac{|4-2x|}{x-2} = \\frac{2\\cdot(-(2-x))}{x-2} = \\frac{2\\cdot(x-2)}{x-2} = 2'}</M>
              {'\n'}
              {'und für '}<M>{'x<2'}</M>{' ergibt sich\n'}
              <M>{'\\frac{|4-2x|}{x-2} = \\frac{2\\cdot(2-x)}{x-2} = \\frac{-2(x-2)}{x-2} = -2.'}</M>
              {'\n'}
              {'Damit ist\n'}
              <M>{'f(x) = \\begin{cases} 2, & x>2\\\\ 0, & x=2\\\\ -2, & x<2.\\end{cases}'}</M>
              {'\n'}
              {'Man erhält nun\n'}
              {'(a) '}<M>{'\\lim_{\\substack{x\\to2\\\\x>2}} f(x) = 2.'}</M>{'\n'}
              {'(b) '}<M>{'\\lim_{\\substack{x\\to2\\\\x<2}} f(x) = -2.'}</M>{'\n'}
              {'(c) Da links- und rechtsseitiger Grenzwert nicht übereinstimmen, existiert der Grenzwert '}<M>{'\\lim_{x\\to2} f(x)'}</M>{' nicht.\n'}
              {'(d) '}<M>{'\\lim_{x\\to0} f(x) = \\frac{4-2\\cdot0}{0-2} = \\frac{4}{-2} = -2.'}</M>{'\n'}
              {'Da '}<M>{'\\lim_{x\\to2} f(x)'}</M>{' nicht existiert, ist '}<M>{'f'}</M>{' nicht stetig in '}<M>{'x=2'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a5',
      nr: 5,
      title: 'Definitionsbereich und Asymptotik',
      referenz: ['funktionsgrenzwerte', 'polynomdivision'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Betrachten Sie die Funktion f : Dᶠ → ℝ mit\n\nf(x) := '}<Frac n="x³ − x² − x" d="x² − 1" />{'.\n\nBestimmen Sie den maximalen Definitionsbereich Dᶠ von f, also die größtmögliche Teilmenge von ℝ, auf der Sie die Funktion f definieren können.'}</>,
          hint: h(
            <>
              <p>Der <span className="hint-em">maximale Definitionsbereich</span> Dᶠ ist die Menge aller x ∈ ℝ, für die der Funktionsterm einen sinnvollen Wert liefert. Man startet bei „ganz ℝ" und schließt nur die Stellen aus, an denen etwas Verbotenes passiert.</p>
              <p><span className="hint-em">Verbotene Operation</span> bei einem Bruch: <span className="hint-em">Division durch 0</span>. Also muss der Nenner ≠ 0 sein. (Andere Verbote wären z.B. Wurzeln aus Negativem oder Logarithmen von ≤ 0 — die treten hier nicht auf.) Der <em>Zähler</em> darf dagegen ruhig 0 werden (0/5 = 0 ist erlaubt) — Nullstellen des Zählers schränken Dᶠ NICHT ein.</p>
              <p>Man löst also die Gleichung „Nenner = 0" und entfernt diese x. Hier: x² − 1 = 0. Mit der 3. binomischen Formel x² − 1 = (x+1)(x−1), oder direkt x² = 1 ⟹ x = ±1 (Quadratwurzel hat zwei Vorzeichen).</p>
              <p>Schreibweise: ℝ \ {'{−1, 1}'} heißt „alle reellen Zahlen außer −1 und 1" (\ = „ohne").</p>
            </>,
            <>
              <p>So bestimmt man Dᶠ für f(x) = (x³ − x² − x)/(x² − 1):</p>
              <pre className="hint-code-block">{`1) Verbot finden: Nenner darf nicht 0 sein.
   Bedingung: x² − 1 ≠ 0

2) Nenner-Nullstellen ausrechnen (x² − 1 = 0):
   x² = 1  ⟹  x = +1  oder  x = −1
   (denn 1² = 1 UND (−1)² = 1)

3) Diese Stellen aus ℝ entfernen:
   Dᶠ = ℝ \\ {−1, 1}
      = {x ∈ ℝ : x ≠ 1 und x ≠ −1}

Der Zähler x³−x²−x wird NICHT betrachtet — seine
Nullstellen sind erlaubt (dort ist f einfach = 0).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = (x+5)/(x² − 4)</p>
              <pre className="hint-code-block">{`Nenner = 0: x² − 4 = 0 → x² = 4 → x = ±2
Dᵍ = ℝ \\ {−2, 2}
(x = −5 wäre Zähler-Nullstelle → erlaubt, g(−5)=0.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Zähler x³−x²−x = 0 lösen für den Definitionsbereich → <strong>✅ Richtig:</strong> Nur der Nenner darf nicht 0 sein; Zähler-Nullstellen schränken Dᶠ nicht ein.</li>
              <li><strong>❌ Falsch:</strong> x² = 1 ⟹ nur x = 1 → <strong>✅ Richtig:</strong> x² = 1 hat zwei Lösungen x = +1 UND x = −1 (Vorzeichen nicht vergessen).</li>
            </ul>,
            <p>Selbstkontrolle: Setze x = 1: Nenner 1−1 = 0 → verboten ✓; x = 0: Nenner −1 ≠ 0 → erlaubt (Zähler auch 0, f(0)=0). Frage: Warum verbietet nur die Nullstelle des Nenners (und nicht die des Zählers) eine Stelle, und warum liefert x² = 1 zwei ausgeschlossene Werte?</p>,
          ),
          solution: (
            <>
              <M>{'D_f = \\{x\\in\\mathbb{R} : x^{2}-1 \\neq 0\\} = \\{x\\in\\mathbb{R} : x\\neq 1,\\, x\\neq -1\\} = \\mathbb{R}\\setminus\\{-1,1\\}'}</M>{' (Nenner darf nicht 0 sein.)'}
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Untersuchen Sie das Verhalten der Funktion für x → ±∞.',
          hint: h(
            <>
              <p>Gefragt ist das <span className="hint-em">Verhalten im Unendlichen</span>: Wohin läuft f(x), wenn x → +∞ bzw. x → −∞? Wieder entscheidet der Gradvergleich der rationalen Funktion.</p>
              <p>Hier Grad(Zähler) = 3 &gt; Grad(Nenner) = 2 → die Funktion ist <em>unbeschränkt</em>, der Grenzwert ist ±∞ (nicht 0!). Die <span className="hint-em">Grad-Regel</span> gilt: Grad(Z) &gt; Grad(N) → ±∞; Grad(Z) = Grad(N) → endlicher Wert; Grad(Z) &lt; Grad(N) → 0.</p>
              <p>Technik: Höchste Nenner-Potenz x² aus Zähler und Nenner ausklammern und kürzen. Es bleibt ein Faktor x^(3−2) = x¹ übrig (treibt gegen ±∞) mal einem Bruch, dessen 1/xⁿ-Terme alle gegen 0 gehen → Restbruch → 1.</p>
              <p><span className="hint-em">Vorzeichen des Faktors x</span> (ungerade Potenz): x → +∞ ⟹ x → +∞; x → −∞ ⟹ x → −∞. Der Faktor x „erbt" das Vorzeichen direkt.</p>
            </>,
            <>
              <p>So untersucht man f(x) = (x³ − x² − x)/(x² − 1) für x → ±∞:</p>
              <pre className="hint-code-block">{`1) x² ausklammern (höchste Nenner-Potenz):
   Zähler: x³−x²−x = x³(1 − 1/x − 1/x²)
   Nenner: x²−1   = x²(1 − 1/x²)
   Bruch: = x³/x² · (1−1/x−1/x²)/(1−1/x²)
        = x · (1 − 1/x − 1/x²)/(1 − 1/x²)

2) Restbruch im Grenzwert (1/x, 1/x² → 0):
   (1 − 0 − 0)/(1 − 0) = 1/1 = 1

3) Faktor x bestimmt das Verhalten:
   x → +∞:  x·1 → +∞
   x → −∞:  x·1 → −∞`}</pre>
              <p>Der Grad-Unterschied 3 − 2 = 1 bedeutet <span className="hint-em">lineares</span> Wachstum (wie x¹), nicht quadratisch.</p>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = (x⁴ + 1)/(x² + 1) für x → ±∞</p>
              <pre className="hint-code-block">{`x² ausklammern: = x²·(1+1/x⁴)/(1+1/x²) → x²·1
x → +∞: x² → +∞;  x → −∞: x² → +∞ (gerade!)
→ in beiden Fällen +∞ (quadratisches Wachstum).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 0, „weil es ein Bruch ist" → <strong>✅ Richtig:</strong> 0 gilt nur bei Grad(N) &gt; Grad(Z); hier Grad(Z)=3 &gt; Grad(N)=2 → ±∞.</li>
              <li><strong>❌ Falsch:</strong> Bei x → −∞ ebenfalls +∞ angeben → <strong>✅ Richtig:</strong> Der Faktor x (ungerade) wechselt das Vorzeichen: x → −∞ ⟹ f → −∞.</li>
            </ul>,
            <p>Selbstkontrolle: f(100) = (10⁶−10⁴−100)/(10⁴−1) ≈ 99 (groß positiv); f(−100) ≈ −99 (groß negativ). Frage: Warum bestimmt der Grad-Unterschied (statt der Koeffizienten) das Wachstum, und warum unterscheiden sich die Grenzwerte für +∞ und −∞ im Vorzeichen?</p>,
          ),
          solution: (
            <>
              {'Es ist\n'}
              <M>{'f(x) = \\frac{x^{3}-x^{2}-x}{x^{2}-1} = \\frac{x^{3}}{x^{2}}\\cdot\\frac{1-\\frac{1}{x}-\\frac{1}{x^{2}}}{1-\\frac{1}{x^{2}}} = x\\cdot\\frac{1-\\frac{1}{x}-\\frac{1}{x^{2}}}{1-\\frac{1}{x^{2}}}.'}</M>
              {'\n'}
              {'Damit ergibt sich\n'}
              <M>{'\\lim_{x\\to\\infty} f(x) = \\infty'}</M>{' und '}<M>{'\\lim_{x\\to-\\infty} f(x) = -\\infty.'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text: 'Ist f in ±∞ asymptotisch linear oder quadratisch? Bestimmen Sie die zugehörige asymptotische Gerade bzw. Parabel.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Asymptote</span> ist eine einfache Kurve (Gerade oder Parabel), an die sich der Funktionsgraph für x → ±∞ immer enger anschmiegt. <span className="hint-em">Asymptotisch linear</span> = der Graph nähert sich einer Geraden a(x) = mx + b; <span className="hint-em">asymptotisch quadratisch</span> = einer Parabel.</p>
              <p><span className="hint-em">Welcher Typ?</span> Es entscheidet Grad(Z) − Grad(N): Differenz 1 → linear (Gerade), Differenz 2 → quadratisch (Parabel). Hier 3 − 2 = 1 → <span className="hint-em">asymptotisch linear</span>.</p>
              <p><span className="hint-em">Werkzeug Polynomdivision</span>: Teile Zähler durch Nenner bis Grad(Rest) &lt; Grad(Nenner). Das ergibt f(x) = a(x) + R(x)/Q(x). Der ganzzahlige Teil a(x) ist die Asymptote; der Restbruch R/Q geht für x → ±∞ gegen 0 (Grad(R) &lt; Grad(Q)) und „verschwindet" — deshalb liefert NUR der Quotient die Asymptote, nicht der Rest.</p>
              <p>Wichtig: Bis zum Schluss dividieren! Nach dem ersten Schritt hat der Rest noch Grad 2 (= Divisorgrad), also nicht abbrechen.</p>
            </>,
            <>
              <p>So bestimmt man die Asymptote von f(x) = (x³ − x² − x)/(x² − 1):</p>
              <pre className="hint-code-block">{`Polynomdivision (x³−x²−x) : (x²−1):
  Schritt 1: x³/x² = x
    x·(x²−1) = x³ − x
    (x³−x²−x) − (x³−x) = −x²   (Rest Grad 2 → weiter!)
  Schritt 2: −x²/x² = −1
    −1·(x²−1) = −x²+1
    (−x²) − (−x²+1) = −1       (Rest Grad 0 < 2 → fertig)

⟹ f(x) = x − 1 + (−1)/(x²−1) = x − 1 − 1/(x²−1)

Asymptote = Quotient = x − 1  (linear!)
⟹ a: ℝ → ℝ,  x ↦ x − 1

Probe (Rest verschwindet im Unendlichen):
  lim(x→±∞) (f(x) − (x−1)) = lim ( −1/(x²−1) ) = 0 ✓`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: g(x) = (x² + 1)/(x − 1)  (Differenz 2−1=1 → linear)</p>
              <pre className="hint-code-block">{`(x²+1):(x−1): x²/x=x; x(x−1)=x²−x; Rest x+1
  x/x=1; 1·(x−1)=x−1; Rest 2
g(x) = x + 1 + 2/(x−1)
Asymptote a(x) = x + 1; Rest 2/(x−1) → 0 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Polynomdivision nach dem ersten Schritt (x) abbrechen → <strong>✅ Richtig:</strong> Weiter bis Grad(Rest) &lt; Grad(Divisor) = 2; der zweite Schritt liefert −1, also a(x) = x − 1.</li>
              <li><strong>❌ Falsch:</strong> Den Rest −1/(x²−1) zur Asymptote dazunehmen → <strong>✅ Richtig:</strong> Nur der Quotient x−1 ist die Asymptote; der Rest geht gegen 0 und gehört nicht dazu.</li>
            </ul>,
            <p>Selbstkontrolle: f(100) ≈ 99,0001 und a(100) = 99 — Differenz ≈ −1/9999 ≈ 0, der Graph liegt fast auf der Geraden. Frage: Warum liefert nur der Quotient (und nicht der Rest) der Polynomdivision die Asymptote, und woran erkennt man „linear" vs. „quadratisch"?</p>,
          ),
          solution: (
            <>
              {'Da der Grad des Polynoms im Zähler (nämlich 3) um eins größer ist als der Grad des Polynoms im Nenner (nämlich 2), liegt asymptotisch lineares Verhalten vor.\n'}
              {'Polynomdivision liefert\n'}
              <M>{'f(x) = \\frac{x^{3}-x^{2}-x}{x^{2}-1} = \\underbrace{x-1}_{=:a(x)} - \\frac{1}{x^{2}-1}.'}</M>
              {'\n'}
              {'Die Gerade '}<M>{'a:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto x-1'}</M>{' ist eine asymptotische Gerade der Funktion, da '}<M>{'\\lim_{x\\to\\pm\\infty}(f(x)-a(x)) = 0.'}</M>
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a6',
      nr: 6,
      title: 'O-Notation (Wenn noch Zeit ist)',
      referenz: ['landau-notation'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Nachfolgende Funktionen seien alle auf ℕ definiert.\n\nWelche Aussagen sind wahr?\n(i)   n ∈ O(n²) für n → ∞.\n(ii)  n + n² ∈ O(n²) für n → ∞.\n(iii) 1000n² ∈ O(n²) für n → ∞.\n(iv)  f(n) ∈ O(g(n)) für n → ∞ ⇔ g(n) ∈ O(f(n)) für n → ∞.',
          hint: h(
            <>
              <p>Die <span className="hint-em">Landau-/O-Notation</span> beschreibt, wie schnell eine Funktion für große n wächst — Konstanten und kleinere Terme werden ignoriert. Definition: <span className="hint-em">f ∈ O(g)</span> bedeutet, es gibt eine Konstante C &gt; 0 und eine Schwelle N, sodass |f(n)| ≤ C·|g(n)| für alle n ≥ N. Informell: „f wächst höchstens so schnell wie g (bis auf einen konstanten Faktor)".</p>
              <p>Eine Aussage „f ∈ O(g)" beweist man, indem man <em>konkret</em> ein C und ein N angibt, die die Ungleichung erfüllen. Eine Aussage widerlegt man durch ein <span className="hint-em">Gegenbeispiel</span> bzw. den Nachweis, dass kein solches C existieren kann.</p>
              <p>Schlüsseleinsicht: O ignoriert <span className="hint-em">konstante Faktoren</span> (1000n² ist „so schnell wie" n²) und <span className="hint-em">kleinere Summanden</span> (n + n² verhält sich wie n²). Aber O ist <span className="hint-em">nicht symmetrisch</span>: „f wächst höchstens wie g" heißt NICHT „g wächst höchstens wie f". (Symmetrie hätte erst die Θ-Notation, die gleich schnelles Wachstum bedeutet.)</p>
            </>,
            <>
              <p>So prüft man die vier Aussagen:</p>
              <pre className="hint-code-block">{`(i) n ∈ O(n²)?  WAHR.
   Suche C,N mit n ≤ C·n². Für n ≥ 1 gilt n ≤ 1·n²
   (denn n² = n·n ≥ n). C = 1, N = 1. ✓

(ii) n + n² ∈ O(n²)?  WAHR.
   Für n ≥ 1: n ≤ n², also n + n² ≤ n² + n² = 2n².
   C = 2, N = 1. ✓ (kleinerer Term n „verschwindet")

(iii) 1000n² ∈ O(n²)?  WAHR.
   1000n² ≤ 1000·n² gilt trivial. C = 1000, N = 1. ✓
   (konstanter Faktor 1000 ist erlaubt!)

(iv) f ∈ O(g) ⟺ g ∈ O(f)?  FALSCH.
   Gegenbeispiel f=n, g=n²: n ∈ O(n²) (s. (i)),
   aber n² ∉ O(n): n² ≤ C·n hieße n ≤ C für alle
   großen n — unmöglich, da n unbeschränkt wächst.
   → Rückrichtung scheitert → keine Äquivalenz.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Ist 5n + 7 ∈ O(n)?</p>
              <pre className="hint-code-block">{`Für n ≥ 7: 7 ≤ n, also 5n+7 ≤ 5n+n = 6n.
C = 6, N = 7 → 5n+7 ∈ O(n). ✓ (linear bleibt linear)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1000n² ∉ O(n²) wegen des großen Koeffizienten → <strong>✅ Richtig:</strong> C = 1000 ist eine erlaubte positive Konstante; O ignoriert konstante Faktoren.</li>
              <li><strong>❌ Falsch:</strong> f ∈ O(g) ⟺ g ∈ O(f) (Symmetrie wie bei Θ) → <strong>✅ Richtig:</strong> O ist nur eine obere Schranke, nicht symmetrisch: n ∈ O(n²), aber n² ∉ O(n).</li>
            </ul>,
            <p>Selbstkontrolle: Für (iv) teste n = C+1: dann n² = (C+1)·n &gt; C·n, die Ungleichung n² ≤ C·n bricht — kein C reicht. Frage: Was unterscheidet O (obere Schranke) von Θ (gleiche Größenordnung), und warum darf O konstante Faktoren wie 1000 ignorieren?</p>,
          ),
          solution: '(i)   wahr\n(ii)  wahr\n(iii) wahr\n(iv)  falsch',
        },
        {
          letter: 'b',
          text: 'Seien f(n) ∈ O(g(n)) und g(n) ∈ O(h(n)) für n → ∞. Gilt dann f(n) ∈ O(h(n)) für n → ∞?',
          hint: h(
            <>
              <p>Gefragt ist eine allgemeine Eigenschaft der O-Notation, die <span className="hint-em">Transitivität</span>: „Wenn f höchstens so schnell wie g wächst und g höchstens so schnell wie h, dann wächst f höchstens so schnell wie h." Das ist plausibel — und man beweist es sauber, indem man die beiden Definitions-Ungleichungen <span className="hint-em">verkettet</span>.</p>
              <p>Erinnerung an die Definition: <span className="hint-em">f ∈ O(g)</span> heißt: ∃ Konstante C &gt; 0 und Schwelle N mit |f(n)| ≤ C·|g(n)| für alle n ≥ N. Jede Voraussetzung liefert also ihr eigenes Paar (C, N).</p>
              <p>Beweisidee: Aus |f| ≤ C₁|g| und |g| ≤ C₂|h| setzt man die zweite in die erste ein: |f| ≤ C₁·(C₂|h|) = (C₁C₂)|h|. Man muss nur darauf achten, dass BEIDE Ausgangsungleichungen gelten — das ist garantiert, sobald n ≥ beide Schwellen, also n ≥ max(N₁, N₂).</p>
              <p>Die neuen „Zeugen" sind damit <span className="hint-em">C := C₁·C₂</span> (Produkt der Konstanten) und <span className="hint-em">N := max(N₁, N₂)</span> (die größere Schwelle, damit beide Ungleichungen sicher greifen).</p>
            </>,
            <>
              <p>So beweist man: f ∈ O(g), g ∈ O(h) ⟹ f ∈ O(h):</p>
              <pre className="hint-code-block">{`1) Voraussetzungen ausschreiben:
   f ∈ O(g): ∃ C₁>0, N₁ mit |f(n)| ≤ C₁|g(n)|  (n ≥ N₁)
   g ∈ O(h): ∃ C₂>0, N₂ mit |g(n)| ≤ C₂|h(n)|  (n ≥ N₂)

2) Gemeinsame Schwelle wählen: N := max(N₁, N₂).
   Für n ≥ N gelten BEIDE Ungleichungen gleichzeitig.

3) Verketten (zweite in erste einsetzen):
   |f(n)| ≤ C₁|g(n)|              (1. Ungleichung)
          ≤ C₁·(C₂|h(n)|)         (2. Ungleichung einsetzen)
          = (C₁·C₂)·|h(n)|

4) Neue Konstante C := C₁·C₂ > 0 benennen:
   |f(n)| ≤ C·|h(n)|  für alle n ≥ N
   ⟹ f ∈ O(h)  per Definition.  ✓`}</pre>
            </>,
            <>
              <p>Konkretes Zahlenbeispiel: f = 3n, g = n², h = n³</p>
              <pre className="hint-code-block">{`3n ≤ 3·n² (C₁=3, ab N₁=1) → f ∈ O(g)
n² ≤ 1·n³ (C₂=1, ab N₂=1) → g ∈ O(h)
Verkettet: 3n ≤ 3·n³ (C=3·1=3, N=1) → f ∈ O(h) ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „Ja, offensichtlich" ohne Beweis → <strong>✅ Richtig:</strong> Die O-Definition erfüllen, indem man explizit C := C₁·C₂ und N := max(N₁,N₂) angibt.</li>
              <li><strong>❌ Falsch:</strong> N := min(N₁,N₂) wählen → <strong>✅ Richtig:</strong> Es muss N := max(N₁,N₂) sein, damit ab N BEIDE Ungleichungen gelten (bei min könnte eine noch verletzt sein).</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe, dass bei n ≥ max(N₁,N₂) wirklich beide Ausgangsungleichungen greifen — sonst bricht die Kette. Frage: Warum ist N = max(N₁,N₂) (nicht min) nötig, und woher kommt die neue Konstante C = C₁·C₂?</p>,
          ),
          solution: 'Ja, das gilt.',
        },
      ],
    },
  ],
}
