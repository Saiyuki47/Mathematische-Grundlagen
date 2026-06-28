import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt8: MatheBlatt = {
  id: 'blatt8',
  nr: '8',
  titel: 'Folgen, bestimmte Divergenz, geometrische Reihe',
  aufgaben: [
    {
      id: 'b8a1',
      nr: 1,
      title: 'Folgen mit lim xₙ = ∞ und lim yₙ = 0',
      referenz: ['folgen-konvergenz'],
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
              <ol>
                <li>Wähle xₙ, das schneller gegen ∞ wächst, als yₙ gegen 0 geht</li>
                <li>Stelle sicher: lim xₙ = ∞, lim yₙ = 0, und lim xₙyₙ = ∞</li>
                <li>Tipp: xₙ = nᵃ und yₙ = 1/nᵇ, wähle a &gt; b so, dass xₙyₙ = nᵃ⁻ᵇ → ∞</li>
              </ol>
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
              <ol>
                <li>Orientiere dich an (a), aber mache das Produkt negativ</li>
                <li>Eine negative Nullfolge yₙ → 0⁻ mit lim xₙyₙ = −∞ ergibt sich, wenn yₙ negativ ist</li>
                <li>Beachte: Nullfolge bedeutet |yₙ| → 0, nicht yₙ ≥ 0</li>
              </ol>
            </>,
            <>
              <p>Beachte: yₙ = −1/n ist eine Nullfolge, da |yₙ| = 1/n → 0.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> yₙ=-1/n ist keine Nullfolge (negativ) → <strong>✅ Richtig:</strong> Nullfolge bedeutet |yₙ| → 0; |−1/n| = 1/n → 0, also ist yₙ=−1/n eine Nullfolge</li>
            </ul>,
            <p>Warum ist yₙ = −1/n eine Nullfolge, obwohl alle Glieder negativ sind — und was ist die korrekte Definition von „Nullfolge"?</p>,
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
              <ol>
                <li>Konstruiere das Produkt so, dass xₙyₙ = c für alle n (konstant) — dann ist der Grenzwert trivialerweise c</li>
                <li>Wähle xₙ eine einfache divergente Folge und setze yₙ = c / xₙ</li>
                <li>Prüfe: Ist lim yₙ = 0? (da xₙ → ∞)</li>
              </ol>
            </>,
            <>
              <p>Für c = 0 würde auch die triviale Wahl funktionieren, aber c/n funktioniert für jedes c ∈ ℝ.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Für c=0 die triviale yₙ=0 wählen und xₙ beliebig → <strong>✅ Richtig:</strong> Das wäre erlaubt, aber die allgemeine Formel xₙ=n, yₙ=c/n funktioniert für alle c∈ℝ; für c=0: yₙ=0 (Nullfolge ✓)</li>
            </ul>,
            <p>Warum funktioniert yₙ = c/xₙ für jedes c ∈ ℝ — und was passiert bei c = 0 mit der Wahl von xₙ?</p>,
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
              <ol>
                <li>Konstruiere das Produkt xₙyₙ so, dass es beschränkt, aber oszillierend ist (z.B. (−1)ⁿ)</li>
                <li>Wähle xₙ → ∞ und setze yₙ = (gewünschtes Produkt) / xₙ — so ist |yₙ| → 0</li>
                <li>Zeige Nicht-Konvergenz: Teilfolgen zu geraden und ungeraden Indizes haben verschiedene Grenzwerte</li>
              </ol>
            </>,
            <>
              <p>Die Folge (−1)ⁿ springt zwischen +1 und −1 und hat zwei Häufungswerte → divergiert.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> yₙ=(−1)ⁿ/n ist keine Nullfolge (wegen Vorzeichenwechsel) → <strong>✅ Richtig:</strong> |yₙ| = |(−1)ⁿ/n| = 1/n → 0, also ist es eine Nullfolge; Vorzeichenwechsel spielt keine Rolle</li>
            </ul>,
            <p>Warum reicht es, zwei Teilfolgen mit verschiedenen Grenzwerten zu finden, um die Nicht-Konvergenz der Gesamtfolge zu beweisen?</p>,
          ),
          solution: 'xₙ := n, yₙ := (−1)ⁿ · (1/n)\nxₙyₙ = (−1)ⁿ: beschränkt (|xₙyₙ| = 1), aber nicht konvergent\n(Teilfolge x₂ₙy₂ₙ = +1, x₂ₙ₊₁y₂ₙ₊₁ = −1)',
        },
      ],
    },
    {
      id: 'b8a2',
      nr: 2,
      title: 'Grenzwerte von Folgen bestimmen',
      referenz: ['folgen-konvergenz'],
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
              <ol>
                <li>Erkenne den geometrischen Term: |q| = |(−1/5)| = 1/5 &lt; 1 → qⁿ → 0</li>
                <li>Wende die Differenzregel für Grenzwerte an: lim(1 − qⁿ) = 1 − lim qⁿ</li>
              </ol>
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
              <ol>
                <li>Zerlege xₙ in zwei Summanden und bestimme jeden Grenzwert separat</li>
                <li>Für den ersten Term: Nutze „beschränkte Folge mal Nullfolge ist Nullfolge"</li>
                <li>Für den zweiten Term: Dividiere Zähler und Nenner durch n und lasse n→∞</li>
                <li>Addiere die Grenzwerte (Summenregel)</li>
              </ol>
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
              <ol>
                <li>Betrachte die Teilfolge der geraden Indizes: Was ist (−1)²ᵐ? Was konvergiert 2m/(4m+1) gegen?</li>
                <li>Betrachte die Teilfolge der ungeraden Indizes: Was ist (−1)²ᵐ⁺¹? Was konvergiert (2m+1)/(4m+3) gegen?</li>
                <li>Wenn die zwei Teilfolgengrenzwerte verschieden sind: Gesamtfolge ist unbestimmt divergent</li>
              </ol>
            </>,
            <>
              <p>Konvergente Folge kann nur einen Grenzwert haben — hier gibt es zwei Häufungswerte.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−1)ⁿ·n/(2n+1) → 1/2, weil n/(2n+1) → 1/2 → <strong>✅ Richtig:</strong> Der Faktor (−1)ⁿ wechselt das Vorzeichen; die Teilfolgen gehen gegen +1/2 und −1/2 → divergent</li>
            </ul>,
            <p>Warum kann eine konvergente Folge nicht zwei verschiedene Häufungswerte haben — und was folgt daraus für diese Folge?</p>,
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
              <ol>
                <li>Bestimme den Leitterm im Zähler (Term mit höchster Potenz) — Vorzeichen beachten</li>
                <li>Bestimme den Leitterm im Nenner</li>
                <li>Klammere n³ (höchste Potenz) aus Zähler und Nenner aus</li>
                <li>Kürze n³ und lasse n→∞ — alle Terme mit 1/n verschwinden; der Leitterm bleibt</li>
              </ol>
            </>,
            <>
              <p>Alternativ: Leitterm-Vergleich. Höchste Potenzen: −2n³ im Zähler, 2n³ im Nenner → Quotient → −1.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n² als dominante Potenz → <strong>✅ Richtig:</strong> Der Zähler n²−2n³−2 hat den Leitterm −2n³; der Nenner 2n³+n² hat Leitterm 2n³; also durch n³ dividieren</li>
              <li><strong>❌ Falsch:</strong> Leitterm im Zähler ist +n² → <strong>✅ Richtig:</strong> −2n³ dominiert für große n; Leitkoeffizient ist −2; lim = −2/2 = −1</li>
            </ul>,
            <p>Warum entscheidet bei rationalen Folgen nur der Leitterm über den Grenzwert — und wann gilt die Formel „Leitkoeffizient Zähler / Leitkoeffizient Nenner" nicht?</p>,
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
              <ol>
                <li>Forme den Exponenten 2n−1 um, sodass der Standardgrenzwert (1+1/n)ⁿ → e erscheint</li>
                <li>Schreibe: (1+1/n)^(2n−1) = (1+1/n)^(2n) · (1+1/n)^(−1)</li>
                <li>Bestimme den Grenzwert jedes Faktors separat und multipliziere</li>
              </ol>
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
              <ol>
                <li>Wende Bernoulli mit passendem x an: xₙ = (1 + x)ⁿ — welches x passt hier?</li>
                <li>Bestimme die untere Schranke aus Bernoulli: (1+x)ⁿ ≥ 1 + nx</li>
                <li>Bestimme eine offensichtliche obere Schranke</li>
                <li>Zeige, dass obere und untere Schranke denselben Grenzwert haben → Sandwichtheorem</li>
              </ol>
            </>,
            <>
              <p>Sandwichtheorem: Falls uₙ ≤ xₙ ≤ vₙ und lim uₙ = lim vₙ = L, dann lim xₙ = L.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(1−1/n²)ⁿ = (lim(1−1/n²))ⁿ = 1ⁿ = 1 → <strong>✅ Richtig:</strong> Grenzwert nicht in Basis und Exponent trennen; stattdessen Bernoulli + Sandwich: 1−1/n ≤ xₙ ≤ 1, beide → 1</li>
            </ul>,
            <p>Warum darf man den Grenzwert nicht direkt als (1−0)ⁿ = 1 berechnen — und was macht diesen Ausdruck zu einem unbestimmten Typ 1^∞?</p>,
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
      referenz: ['reihen-konvergenz', 'geometrische-summenformel'],
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
              <ol>
                <li>Klammere den Konstantfaktor aus der Summe</li>
                <li>Führe einen Indexshift durch: Σ(k=1..n)qᵏ = q · Σ(k=0..n−1)qᵏ, um auf die Standardform zu kommen</li>
                <li>Wende die endliche geometrische Summenformel an</li>
                <li>Vereinfache und bestimme lim für n→∞ (beachte |q| &lt; 1 → qⁿ → 0)</li>
              </ol>
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
              <ol>
                <li>Identifiziere q in Σqᵏ und stelle die Konvergenzbedingung |q| &lt; 1 auf</li>
                <li>Löse |q| &lt; 1 nach x auf — das ergibt das Konvergenzintervall für x</li>
                <li>Für (ii): Prüfe, ob ein konstanter Vorfaktor den Konvergenzbereich verändert</li>
                <li>Für (iii): Prüfe, ob der Startindex die Konvergenz beeinflusst (endlich viele Terme weglassen ändert Konvergenz nicht)</li>
              </ol>
            </>,
            <>
              <p>Hinweis: Das Weglassen endlich vieler Anfangsglieder ändert nichts an der Konvergenz einer Reihe.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Bei (iii) anderen Konvergenzbereich vermuten, weil die Summe bei k=2 beginnt → <strong>✅ Richtig:</strong> Endlich viele Anfangsglieder weglassen ändert Konvergenz nicht; alle drei haben x∈(−6,8)</li>
              <li><strong>❌ Falsch:</strong> Bei (ii) Faktor 3 auf Konvergenzbereich anrechnen → <strong>✅ Richtig:</strong> Faktor 3 beeinflusst nur den Wert der Summe, nicht ob sie konvergiert; Konvergenzbereich bleibt (−6,8)</li>
            </ul>,
            <p>Warum haben alle drei Reihen denselben Konvergenzbereich — obwohl (ii) einen Vorfaktor und (iii) einen anderen Startindex hat?</p>,
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
      referenz: ['rekursive-folgen'],
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
              <ol>
                <li><strong>IA:</strong> Prüfe aₙ &gt; 0 für n=0 direkt</li>
                <li><strong>IS:</strong> Sei aₙ &gt; 0 (IV) — zeige, dass Zähler und Nenner von aₙ₊₁ = 2aₙ/(2+aₙ) beide positiv sind</li>
                <li><strong>Monotonie:</strong> Berechne aₙ₊₁ − aₙ (oder überprüfe aₙ₊₁ ≤ aₙ) — nutze aₙ &gt; 0 aus dem Induktionsbeweis</li>
                <li><strong>Beschränktheit:</strong> Zeige, dass aₙ ≤ a₀ für alle n gilt (folgt aus Monotonie)</li>
                <li><strong>Grenzwert:</strong> Sei a = lim aₙ. Dann auch a = lim aₙ₊₁. Setze in die Rekursion ein und löse nach a</li>
              </ol>
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
      referenz: ['folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'xₙ = '}<Frac n="2n" d="√(n+1)" /></>,
          hint: h(
            <>
              <p>Zähler und Nenner separat betrachten. Zähler wächst wie n, Nenner wie √n — also wächst xₙ wie n/√n = √n → ∞.</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, ob Zähler oder Nenner schneller wächst — oder schätze nach unten ab</li>
                <li>Klammere √n aus √(n+1) = √n · √(1+1/n) aus</li>
                <li>Zeige, dass der verbleibende Ausdruck 2√n · [beschränkter Term] → ∞</li>
              </ol>
            </>,
            <>
              <p>Formal: xₙ ≥ 2n/√(2n) = √(2n) → ∞ für n ≥ 1.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 2 wegen „lim n/√n = n^(1/2) → ∞, gar kein Limes" → <strong>✅ Richtig:</strong> 2n/√(n+1) ≥ 2n/√(2n) = √(2n) → ∞; bestimmt divergent</li>
            </ul>,
            <p>Warum reicht es für xₙ → ∞, eine untere Schranke yₙ → ∞ zu finden — und welche Eigenschaft von ≤ wird hier genutzt?</p>,
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
              <ol>
                <li>Schreibe die ersten paar Faktoren explizit aus</li>
                <li>Erkenne die Teleskopstruktur: Jeder Zähler kürzt sich mit dem Nenner des nächsten Faktors</li>
                <li>Bestimme was nach dem Kürzen übrig bleibt und bestimme den Grenzwert</li>
              </ol>
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
              <ol>
                <li>Multipliziere Zähler und Nenner mit dem konjugierten Ausdruck √(n+1) + √n</li>
                <li>Vereinfache den Zähler mit der 3. Binomischen Formel (a−b)(a+b) = a²−b²</li>
                <li>Zeige, dass der resultierende Bruch eine Nullfolge ist und wende den Einschnürungssatz an</li>
              </ol>
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
              <ol>
                <li>Schreibe die Summe als Differenz aufeinanderfolgender Quadrate aus</li>
                <li>Erkenne die Teleskopstruktur: Die mittleren Terme kürzen sich</li>
                <li>Bestimme, was nach dem Kürzen übrig bleibt und leite den Grenzwert ab</li>
              </ol>
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
      referenz: ['folgen-konvergenz'],
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
              <ol>
                <li>Beschränktheit nutzen: ∃M &gt; 0 mit |xₙ| ≤ M für alle n</li>
                <li>Verwende yₙ → 0: Zu ε &gt; 0 wähle N so, dass |yₙ| &lt; ε/M für alle n ≥ N</li>
                <li>Schätze ab: |xₙyₙ| = |xₙ| · |yₙ| ≤ M · (ε/M) = ε — der Schlüsselschritt</li>
                <li>Schließe: lim xₙyₙ = 0 □</li>
              </ol>
            </>,
            <>
              <p>Achtung: Falls M = 0, ist xₙ = 0 für alle n, und xₙyₙ = 0 trivialerweise → 0. Deshalb kann man M &gt; 0 annehmen.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = 0 zulassen und dann ε/M = ε/0 berechnen → <strong>✅ Richtig:</strong> Wähle M &gt; 0 (oder behandle M=0 separat: dann xₙ=0, xₙyₙ=0 trivialerweise)</li>
              <li><strong>❌ Falsch:</strong> |xₙyₙ| ≤ M · |yₙ| ohne Begründung hinschreiben → <strong>✅ Richtig:</strong> |xₙyₙ| = |xₙ|·|yₙ| ≤ M·|yₙ| wegen |xₙ| ≤ M (Beschränktheit)</li>
            </ul>,
            <p>Warum wählt man im Beweis N so, dass |yₙ| &lt; ε/M (nicht einfach &lt; ε) — welche Rolle spielt M in der Abschätzung?</p>,
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
              <ol>
                <li>Ziel: |1/xₙ| &lt; ε ⟺ xₙ &gt; 1/ε — das verbindet den zu zeigenden Grenzwert mit der Voraussetzung xₙ → ∞</li>
                <li>Sei ε &gt; 0. Setze M = 1/ε und wähle N mit xₙ &gt; M für alle n ≥ N (Definition von xₙ → ∞)</li>
                <li>Schließe: xₙ &gt; 1/ε &gt; 0 → |1/xₙ| = 1/xₙ &lt; ε □</li>
              </ol>
            </>,
            <>
              <p>xₙ → ∞ bedeutet: Für jedes M &gt; 0 gibt es ein N mit xₙ &gt; M für alle n ≥ N.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> xₙ &gt; 0 für alle n voraussetzen → <strong>✅ Richtig:</strong> Voraussetzung ist nur xₙ ∈ ℝ\{'{0}'}; dass xₙ &gt; 0 für n ≥ N folgt automatisch aus xₙ &gt; 1/ε &gt; 0</li>
            </ul>,
            <p>Warum folgt aus xₙ → ∞, dass 1/xₙ → 0 — und für welche anderen Divergenztypen gilt das nicht?</p>,
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
}
