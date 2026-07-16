import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt8: MatheBlatt = {
  id: 'blatt8',
  nr: '8',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung8 - Folgen 2/08_aufg_folgen-divergenz.pdf',
  loesungen: [
    { label: 'Lösung (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung8 - Folgen 2/08_lsg_folgen-divergenz.pdf' },
    { label: 'Lösung – Mitschrift G3/G4 (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung8 - Folgen 2/08_lsg_Mitschriften_G3_G4.pdf' },
  ],
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
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit limₙ→∞ xₙ = ∞ und limₙ→∞ yₙ = 0, so dass nachfolgende Eigenschaften erfüllt sind:\n\nlimₙ→∞(xₙyₙ) = ∞.',
          hint: h(
            <>
              <p>„<span className="hint-em">lim xₙ = ∞</span>" (bestimmte Divergenz gegen Unendlich) heißt: die Glieder wachsen über jede Schranke hinaus, z. B. xₙ = n = 1, 2, 3, … . „<span className="hint-em">lim yₙ = 0</span>" (Nullfolge) heißt: die Glieder werden beliebig klein, z. B. yₙ = 1/n.</p>
              <p>Das Produkt einer Folge mit Grenzwert ∞ und einer Nullfolge ist ein <span className="hint-em">unbestimmter Ausdruck vom Typ „∞·0"</span>: das Ergebnis hängt davon ab, wer „schneller" ist — es kann ∞, −∞, eine endliche Zahl c oder gar nichts herauskommen. Genau das zeigen die Teilaufgaben (a)–(d).</p>
              <p>Für (a) — Produkt soll ∞ werden — muss xₙ <span className="hint-em">schneller gegen ∞ wachsen, als yₙ gegen 0 fällt</span>. Praktischer Ansatz mit Potenzen: xₙ = nᵃ und yₙ = 1/nᵇ. Dann ist xₙyₙ = nᵃ/nᵇ = nᵃ⁻ᵇ (Potenzgesetz: gleiche Basis dividieren ⟹ Exponenten subtrahieren). Wählt man a &gt; b, so ist a−b &gt; 0 und nᵃ⁻ᵇ → ∞.</p>
            </>,
            <>
              <p>So konstruiert man ein Beispiel:</p>
              <pre className="hint-code-block">{`1) Ansatz xₙ = nᵃ, yₙ = 1/nᵇ mit a > b.
   Wähle a = 2, b = 1:
   xₙ = n²  (→ ∞)   und   yₙ = 1/n  (→ 0)

2) Beide Voraussetzungen prüfen:
   lim xₙ = lim n² = ∞ ✓
   lim yₙ = lim 1/n = 0 ✓

3) Produkt berechnen:
   xₙ·yₙ = n²·(1/n) = n²/n = n^(2−1) = n

4) Grenzwert des Produkts:
   lim n = ∞  ✓ (gewünscht)`}</pre>
              <p>Warum funktioniert das? n² wächst „quadratisch", 1/n fällt nur „linear" — das Wachstum überwiegt, das Produkt n läuft selbst gegen ∞.</p>
            </>,
            <>
              <p>Alternatives Beispiel (noch stärkeres Wachstum):</p>
              <pre className="hint-code-block">{`xₙ = n³ (→ ∞), yₙ = 1/n (→ 0)
xₙyₙ = n³/n = n² → ∞ ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> xₙ = n, yₙ = 1/n² → xₙyₙ = n/n² = 1/n → 0 (yₙ fällt schneller als xₙ wächst) → <strong>✅ Richtig:</strong> xₙ muss schneller wachsen als yₙ fällt: a &gt; b, z. B. n² und 1/n → Produkt n → ∞.</li>
              <li><strong>❌ Falsch:</strong> denken „∞·0 = 0 immer" → <strong>✅ Richtig:</strong> „∞·0" ist unbestimmt; je nach Folgen kommt ∞ heraus (hier n → ∞).</li>
            </ul>,
            <p>Selbstkontrolle: Setze n = 100 ein: xₙyₙ = 100²·(1/100) = 100 — wird das mit wachsendem n immer größer? Frage: Warum ist „∞·0" kein fester Wert, und welche Bedingung an die Exponenten a, b sorgt dafür, dass das Produkt nᵃ⁻ᵇ gegen ∞ geht?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'n \\in \\mathbb{N}^{*}'}</M>{' definiere '}<M>{'x_n := n^{2}, \\quad y_n := \\frac{1}{n}'}</M>{'.\n'}
              {'Die Folgen '}<M>{'(x_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' und '}<M>{'(y_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' leisten jeweils das Gewünschte.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit limₙ→∞ xₙ = ∞ und limₙ→∞ yₙ = 0, so dass nachfolgende Eigenschaften erfüllt sind:\n\nlimₙ→∞(xₙyₙ) = −∞.',
          hint: h(
            <>
              <p>Wie in (a) geht es um den unbestimmten Typ <span className="hint-em">„∞·0"</span> (lim xₙ = ∞, lim yₙ = 0), nur soll das Produkt jetzt <span className="hint-em">−∞</span> werden (stark negativ, unbegrenzt fallend). Idee: das Beispiel aus (a) nehmen und das <span className="hint-em">Vorzeichen umdrehen</span>, indem yₙ negativ wird.</p>
              <p>Wichtig ist die korrekte Definition von <span className="hint-em">Nullfolge</span>: yₙ → 0 bedeutet <span className="hint-em">|yₙ| → 0</span> (der Abstand zu 0 wird beliebig klein) — das Vorzeichen spielt keine Rolle. Also ist auch yₙ = −1/n eine Nullfolge, denn |−1/n| = 1/n → 0. Eine Nullfolge muss NICHT positiv sein.</p>
            </>,
            <>
              <p>So konstruiert man ein Beispiel:</p>
              <pre className="hint-code-block">{`1) Aus (a) übernehmen: xₙ = n²  (→ ∞)
   yₙ negativ machen: yₙ = −1/n

2) Voraussetzungen prüfen:
   lim xₙ = lim n² = ∞ ✓
   lim yₙ: |−1/n| = 1/n → 0, also yₙ → 0 ✓ (Nullfolge)

3) Produkt:
   xₙ·yₙ = n²·(−1/n) = −n²/n = −n

4) Grenzwert:
   lim (−n) = −∞  ✓ (gewünscht)`}</pre>
              <p>Warum −∞? Der Betrag wächst wie in (a) (n → ∞), aber das Minus dreht jedes Glied ins Negative, also läuft die Folge gegen −∞.</p>
            </>,
            <>
              <p>Alternatives Beispiel:</p>
              <pre className="hint-code-block">{`xₙ = n³ (→ ∞), yₙ = −1/n (→ 0)
xₙyₙ = −n³/n = −n² → −∞ ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „yₙ = −1/n ist keine Nullfolge, weil alle Glieder negativ sind" → <strong>✅ Richtig:</strong> Nullfolge heißt |yₙ| → 0; |−1/n| = 1/n → 0, also IST −1/n eine Nullfolge.</li>
              <li><strong>❌ Falsch:</strong> xₙ = n, yₙ = −1/n² → xₙyₙ = −1/n → 0 (nicht −∞) → <strong>✅ Richtig:</strong> xₙ muss schneller wachsen als yₙ fällt: n² und −1/n → −n → −∞.</li>
            </ul>,
            <p>Selbstkontrolle: n = 100 → xₙyₙ = 100²·(−1/100) = −100 — wird das mit wachsendem n immer negativer? Frage: Warum ist −1/n trotz durchweg negativer Glieder eine Nullfolge, und wie lautet die genaue Definition „yₙ → 0"?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'n \\in \\mathbb{N}^{*}'}</M>{' definiere '}<M>{'x_n := n^{2}, \\quad y_n := -\\frac{1}{n}'}</M>{'.\n'}
              {'Die Folgen '}<M>{'(x_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' und '}<M>{'(y_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' leisten jeweils das Gewünschte.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit limₙ→∞ xₙ = ∞ und limₙ→∞ yₙ = 0, so dass nachfolgende Eigenschaften erfüllt sind:\n\nlimₙ→∞(xₙyₙ) = c, wobei c eine beliebig vorgegebene reelle Zahl ist.',
          hint: h(
            <>
              <p>Wieder Typ <span className="hint-em">„∞·0"</span> (lim xₙ = ∞, lim yₙ = 0), jetzt soll das Produkt gegen eine <span className="hint-em">beliebig vorgegebene reelle Zahl c</span> konvergieren (z. B. c = 7 oder c = −3). Das unterstreicht: „∞·0" kann JEDEN Wert liefern — man muss die Folgen passend zusammenbauen.</p>
              <p>Trickreich, aber einfach: Wähle xₙ und yₙ so, dass das Produkt <span className="hint-em">konstant gleich c</span> ist. Dann ist der Grenzwert trivial c. Dazu nimmt man eine divergente Folge xₙ = n und setzt <span className="hint-em">yₙ = c/xₙ = c/n</span>. Das Produkt ist dann xₙ·yₙ = n·(c/n) = c. Und yₙ = c/n ist eine Nullfolge (fester Zähler c durch wachsendes n → 0).</p>
            </>,
            <>
              <p>So konstruiert man ein Beispiel (für beliebiges festes c):</p>
              <pre className="hint-code-block">{`1) Wähle xₙ = n  → lim xₙ = ∞ ✓
2) Setze yₙ = c/xₙ = c/n
   lim yₙ = 0, da c fest und n → ∞ (|c/n| = |c|/n → 0) ✓
3) Produkt:
   xₙ·yₙ = n·(c/n) = c  für alle n
4) Grenzwert: lim c = c ✓ (konstante Folge)

Beispiel c = 7: xₙ = n, yₙ = 7/n → Produkt = 7.`}</pre>
              <p>Warum klappt das für jedes c? Egal welche Zahl c ist — yₙ = c/n bleibt eine Nullfolge, und n·(c/n) kürzt sich exakt zu c.</p>
            </>,
            <>
              <p>Sonderfall c = 0:</p>
              <pre className="hint-code-block">{`xₙ = n, yₙ = 0/n = 0 (konstante Nullfolge)
Produkt = n·0 = 0 → 0 ✓
(die allgemeine Formel funktioniert also auch für c = 0)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> yₙ = c (konstant) wählen → Produkt n·c → ±∞ statt c → <strong>✅ Richtig:</strong> yₙ muss eine Nullfolge sein; yₙ = c/n (durch n geteilt) ergibt Produkt c.</li>
              <li><strong>❌ Falsch:</strong> behaupten, „∞·0" sei stets 0 oder stets ∞ → <strong>✅ Richtig:</strong> es ist unbestimmt; mit yₙ = c/n erreicht man JEDE Zahl c.</li>
            </ul>,
            <p>Selbstkontrolle: Nimm c = −5: xₙ = n, yₙ = −5/n → Produkt jedes Glied = −5? Frage: Warum ergibt n·(c/n) für jedes n exakt c, und warum bleibt c/n trotz beliebigem c eine Nullfolge?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'n \\in \\mathbb{N}^{*}'}</M>{' definiere '}<M>{'x_n := n, \\quad y_n := \\frac{c}{n}'}</M>{'.\n'}
              {'Die Folgen '}<M>{'(x_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' und '}<M>{'(y_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' leisten jeweils das Gewünschte.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ mit limₙ→∞ xₙ = ∞ und limₙ→∞ yₙ = 0, so dass nachfolgende Eigenschaften erfüllt sind:\n\nDie Folge (xₙyₙ) ist beschränkt, aber nicht konvergent.',
          hint: h(
            <>
              <p>Wieder Typ <span className="hint-em">„∞·0"</span>, jetzt soll das Produkt <span className="hint-em">beschränkt, aber nicht konvergent</span> sein. <span className="hint-em">Beschränkt</span> heißt: alle Glieder bleiben zwischen zwei festen Schranken (z. B. immer zwischen −1 und +1). <span className="hint-em">Nicht konvergent</span> heißt: es gibt keinen einzigen Grenzwert.</p>
              <p>Eine <span className="hint-em">Teilfolge</span> entsteht, wenn man nur bestimmte Indizes auswählt, z. B. nur die geraden n (Index 0, 2, 4, …) oder nur die ungeraden. Ein <span className="hint-em">Häufungswert</span> ist eine Zahl, gegen die eine Teilfolge strebt. <span className="hint-em">Schlüsselsatz</span>: Eine konvergente Folge hat genau EINEN Häufungswert. Findet man also zwei Teilfolgen mit VERSCHIEDENEN Grenzwerten, kann die Gesamtfolge nicht konvergieren.</p>
              <p>Idee: das Produkt soll zwischen +1 und −1 springen, also xₙyₙ = (−1)ⁿ. Dazu xₙ = n → ∞ und yₙ = (−1)ⁿ/n. Letzteres ist eine Nullfolge, da |yₙ| = |(−1)ⁿ|/n = 1/n → 0 (Vorzeichenwechsel egal).</p>
            </>,
            <>
              <p>So konstruiert man ein Beispiel:</p>
              <pre className="hint-code-block">{`1) Gewünschtes Produkt: (−1)ⁿ (springt +1,−1,…, beschränkt).
2) Wähle xₙ = n  → ∞ ✓
   Setze yₙ = (−1)ⁿ/n  → 0 (|yₙ| = 1/n → 0) ✓ Nullfolge
3) Produkt:
   xₙ·yₙ = n·(−1)ⁿ/n = (−1)ⁿ
4) Eigenschaften des Produkts (−1)ⁿ:
   beschränkt: |(−1)ⁿ| = 1 ≤ 1 ✓
   nicht konvergent: Teilfolge gerader Indizes
     x₂ₘy₂ₘ = (−1)²ᵐ = +1 → +1
   Teilfolge ungerader Indizes
     x₂ₘ₊₁y₂ₘ₊₁ = (−1)²ᵐ⁺¹ = −1 → −1
   +1 ≠ −1 → zwei Häufungswerte → divergent ✓`}</pre>
              <p>Warum reicht das? Eine konvergente Folge dürfte nur einen Grenzwert haben; zwei verschiedene Teilfolgen-Grenzwerte (+1 und −1) schließen Konvergenz aus.</p>
            </>,
            <>
              <p>Anderes Beispiel (Produkt springt zwischen 2 und −2):</p>
              <pre className="hint-code-block">{`xₙ = n, yₙ = 2·(−1)ⁿ/n
xₙyₙ = 2·(−1)ⁿ: beschränkt (|·| = 2),
Teilfolgen → +2 und −2 → divergent ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „yₙ = (−1)ⁿ/n ist keine Nullfolge wegen des Vorzeichenwechsels" → <strong>✅ Richtig:</strong> |yₙ| = 1/n → 0, also Nullfolge; der Vorzeichenwechsel ist irrelevant.</li>
              <li><strong>❌ Falsch:</strong> ein Produkt wählen, das gegen einen Wert konvergiert (z. B. konstant 1) → <strong>✅ Richtig:</strong> es muss OSZILLIEREN (z. B. (−1)ⁿ), damit es beschränkt, aber nicht konvergent ist.</li>
            </ul>,
            <p>Selbstkontrolle: Schreibe x₀y₀, x₁y₁, x₂y₂, x₃y₃ auf — springt es +1, −1, +1, −1 (beschränkt) und legt sich nie fest? Frage: Warum genügen zwei Teilfolgen mit verschiedenen Grenzwerten, um Nicht-Konvergenz zu beweisen?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'n \\in \\mathbb{N}^{*}'}</M>{' definiere '}<M>{'x_n := n, \\quad y_n := (-1)^{n}\\cdot\\frac{1}{n}'}</M>{'.\n'}
              {'Die Folgen '}<M>{'(x_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' und '}<M>{'(y_n)_{n\\in\\mathbb{N}^{*}}'}</M>{' leisten jeweils das Gewünschte.'}
            </>
          ),
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
          text: <>{'Berechnen Sie die (eventuell uneigentlichen) Grenzwerte der Folgen (xₙ)ₙ∈ℕ* ⊆ ℝ sofern vorhanden, falls\n\nxₙ = 1 − ('}<Frac n="−1" d="5" />{')ⁿ'}</>,
          hint: h(
            <>
              <p>Ein Ausdruck der Form <span className="hint-em">qⁿ</span> (feste Basis q, wachsender Exponent n) ist eine <span className="hint-em">geometrische Folge</span>. Ihr Verhalten hängt nur vom <span className="hint-em">Betrag |q|</span> ab:</p>
              <ul>
                <li><span className="hint-em">|q| &lt; 1</span> ⟹ qⁿ → 0 (jede Multiplikation verkleinert den Betrag).</li>
                <li>|q| = 1 oder |q| &gt; 1 ⟹ qⁿ konvergiert nicht gegen 0.</li>
              </ul>
              <p>Wichtig: Für „qⁿ → 0" zählt nur der Betrag, NICHT das Vorzeichen. Hier ist q = −1/5, also |q| = 1/5 &lt; 1 ⟹ (−1/5)ⁿ → 0 (die Glieder springen zwar im Vorzeichen, aber ihr Betrag (1/5)ⁿ schrumpft gegen 0). Zudem braucht man die <span className="hint-em">Differenzregel</span>: lim (a − bₙ) = a − lim bₙ.</p>
            </>,
            <>
              <p>So bestimmt man lim (1 − (−1/5)ⁿ):</p>
              <pre className="hint-code-block">{`1) Geometrischen Teil prüfen: q = −1/5
   |q| = 1/5 < 1  →  (−1/5)ⁿ → 0

2) Differenzregel anwenden:
   lim (1 − (−1/5)ⁿ) = 1 − lim (−1/5)ⁿ
                     = 1 − 0 = 1

Grenzwert = 1.`}</pre>
              <p>Warum geht (−1/5)ⁿ trotz Minus gegen 0? Die Beträge sind 1/5, 1/25, 1/125, … → 0; das wechselnde Vorzeichen ändert nichts daran, dass der Abstand zu 0 verschwindet.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim (3 + (1/2)ⁿ)</p>
              <pre className="hint-code-block">{`|1/2| < 1 → (1/2)ⁿ → 0
lim (3 + (1/2)ⁿ) = 3 + 0 = 3`}</pre>
              <p>Gegenfall: lim 2ⁿ → ∞ (|2| &gt; 1, geht NICHT gegen 0).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „(−1/5)ⁿ divergiert wegen des Minus" → <strong>✅ Richtig:</strong> für qⁿ → 0 zählt nur |q| &lt; 1; |−1/5| = 1/5 &lt; 1, also (−1/5)ⁿ → 0.</li>
              <li><strong>❌ Falsch:</strong> lim (1 − (−1/5)ⁿ) = 1 − (−1/5) = 6/5 → <strong>✅ Richtig:</strong> nicht die Basis einsetzen; (−1/5)ⁿ → 0, also 1 − 0 = 1.</li>
            </ul>,
            <p>Selbstkontrolle: n = 3 → 1 − (−1/5)³ = 1 − (−1/125) = 1,008; n = 4 → 1 − 1/625 ≈ 0,9984 — nähert sich 1 von beiden Seiten ✓. Frage: Warum entscheidet bei qⁿ allein |q| über die Konvergenz gegen 0, und warum stört ein negatives q dabei nicht?</p>,
          ),
          solution: (
            <>
              <M>{'\\lim_{n\\to\\infty}\\left(\\frac{-1}{5}\\right)^{n} = 0'}</M>{' (geometrische Folge mit '}<M>{'|q| < 1'}</M>{'); somit '}<M>{'\\lim_{n\\to\\infty} x_n = 1'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'xₙ = '}<Frac n="(−1)ⁿ" d="n" />{' + '}<Frac n="n" d="2n+1" /></>,
          hint: h(
            <>
              <p>Die Folge ist eine <span className="hint-em">Summe</span> zweier Teile: (−1)ⁿ/n und n/(2n+1). Die <span className="hint-em">Summenregel</span> erlaubt, jeden Grenzwert einzeln zu bestimmen und dann zu addieren — solange beide existieren.</p>
              <p>Erster Teil: Schreibe (−1)ⁿ/n = (−1)ⁿ · (1/n). Hier gilt der Satz <span className="hint-em">„beschränkte Folge mal Nullfolge ist Nullfolge"</span>: (−1)ⁿ ist <span className="hint-em">beschränkt</span> (bleibt zwischen −1 und +1) und 1/n ist eine <span className="hint-em">Nullfolge</span>; das Produkt geht also gegen 0. Das wilde Springen von (−1)ⁿ wird vom Schrumpfen von 1/n erstickt.</p>
              <p>Zweiter Teil n/(2n+1): rationale Folge gleichen Grades (Zähler und Nenner Grad 1). Trick: <span className="hint-em">Zähler und Nenner durch n teilen</span>, dann 1/n → 0 nutzen.</p>
            </>,
            <>
              <p>So bestimmt man lim ((−1)ⁿ/n + n/(2n+1)):</p>
              <pre className="hint-code-block">{`1) Erster Summand (−1)ⁿ/n = (−1)ⁿ · (1/n):
   (−1)ⁿ beschränkt (|·| ≤ 1), 1/n → 0
   → beschränkt · Nullfolge → 0

2) Zweiter Summand n/(2n+1):
   Zähler & Nenner durch n teilen:
   n/(2n+1) = (n/n)/((2n+1)/n) = 1/(2 + 1/n)
   n→∞: 1/n → 0 → 1/(2+0) = 1/2

3) Summenregel:
   lim xₙ = 0 + 1/2 = 1/2

Grenzwert = 1/2.`}</pre>
              <p>Warum erst zerlegen? Jeder Teil ist für sich leicht; die Summenregel fügt die Grenzwerte 0 und 1/2 zusammen.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim (cos(n)/n + (3n)/(n+2))</p>
              <pre className="hint-code-block">{`cos(n)/n: |cos(n)| ≤ 1 (beschränkt) · 1/n (→0) → 0
3n/(n+2) = 3/(1 + 2/n) → 3/(1+0) = 3
Summe → 0 + 3 = 3`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „(−1)ⁿ/n divergiert wegen des Vorzeichenwechsels" → <strong>✅ Richtig:</strong> (−1)ⁿ beschränkt, 1/n → 0 ⟹ Produkt → 0 (beschränkt · Nullfolge).</li>
              <li><strong>❌ Falsch:</strong> n/(2n+1) = 1/2 durch bloßes „n gegen 2n streichen" begründen → <strong>✅ Richtig:</strong> sauber durch n teilen: 1/(2 + 1/n) → 1/2.</li>
            </ul>,
            <p>Selbstkontrolle: n = 100 → (−1)¹⁰⁰/100 + 100/201 = 0,01 + 0,4975 ≈ 0,5075, nahe 1/2 ✓. Frage: Warum ist das Produkt aus einer beschränkten Folge und einer Nullfolge stets eine Nullfolge, obwohl (−1)ⁿ allein gar keinen Grenzwert hat?</p>,
          ),
          solution: (
            <>
              {'Es ist '}<M>{'((-1)^{n})'}</M>{' eine beschränkte Folge und '}<M>{'\\left(\\frac{1}{n}\\right)'}</M>{' eine Nullfolge. Nach Folie 136 der Vorlesung („beschränkte Folge mal Nullfolge ist Nullfolge") ist '}<M>{'\\lim\\frac{(-1)^{n}}{n} = 0'}</M>{'. Außerdem folgt mit den Rechenregeln für konvergente Folgen, dass '}<M>{'\\lim_{n\\to\\infty}\\frac{n}{2n+1} = \\lim_{n\\to\\infty}\\frac{1}{2+\\frac{1}{n}} = \\frac{1}{2}'}</M>{'. Insgesamt ergibt sich '}<M>{'\\lim_{n\\to\\infty} x_n = \\frac{1}{2}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'xₙ = (−1)ⁿ · '}<Frac n="n" d="2n+1" /></>,
          hint: h(
            <>
              <p>Fast wie (b), aber jetzt steht (−1)ⁿ als <span className="hint-em">Faktor vor dem ganzen Bruch</span>: xₙ = (−1)ⁿ · n/(2n+1). Der Unterschied ist entscheidend — hier kann man (−1)ⁿ NICHT „wegschätzen", weil der Bruch n/(2n+1) gegen 1/2 (nicht 0) geht. Der Vorzeichenwechsel bleibt also wirksam.</p>
              <p>Methode: <span className="hint-em">Teilfolgen</span> betrachten. Bei <span className="hint-em">geradem n = 2m</span> ist (−1)²ᵐ = +1; bei <span className="hint-em">ungeradem n = 2m+1</span> ist (−1)²ᵐ⁺¹ = −1. <span className="hint-em">Schlüsselsatz</span>: Eine konvergente Folge hat nur EINEN Häufungswert. Liefern die gerade und die ungerade Teilfolge verschiedene Grenzwerte, ist die Folge <span className="hint-em">unbestimmt divergent</span> (springt zwischen zwei Werten).</p>
            </>,
            <>
              <p>So zeigt man die Divergenz von (−1)ⁿ · n/(2n+1):</p>
              <pre className="hint-code-block">{`Vorbemerkung: n/(2n+1) → 1/2 (durch n teilen:
   1/(2+1/n) → 1/2), aber (−1)ⁿ dreht das Vorzeichen.

1) Gerade Indizes n = 2m: (−1)²ᵐ = +1
   x₂ₘ = +1 · 2m/(4m+1)
   2m/(4m+1) = 2/(4+1/m) → 2/4 = 1/2
   → Teilfolge → +1/2

2) Ungerade Indizes n = 2m+1: (−1)²ᵐ⁺¹ = −1
   x₂ₘ₊₁ = −1 · (2m+1)/(4m+3)
   (2m+1)/(4m+3) → 2/4 = 1/2
   → Teilfolge → −1/2

3) +1/2 ≠ −1/2 → zwei verschiedene Häufungswerte
   → Folge konvergiert NICHT (unbestimmt divergent).`}</pre>
              <p>Warum divergent? Eine konvergente Folge dürfte nur einen Grenzwert haben. Hier strebt ein Teil gegen +1/2, der andere gegen −1/2 — unvereinbar.</p>
            </>,
            <>
              <p>Anderes Beispiel: xₙ = (−1)ⁿ · (1 + 1/n)</p>
              <pre className="hint-code-block">{`gerade n: +1·(1+1/n) → +1
ungerade n: −1·(1+1/n) → −1
+1 ≠ −1 → divergent`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> xₙ → 1/2, weil n/(2n+1) → 1/2 → <strong>✅ Richtig:</strong> der Faktor (−1)ⁿ verhindert Konvergenz; die Teilfolgen gehen gegen +1/2 und −1/2.</li>
              <li><strong>❌ Falsch:</strong> hier wie in (b) „beschränkt · Nullfolge → 0" anwenden → <strong>✅ Richtig:</strong> n/(2n+1) ist KEINE Nullfolge (→ 1/2), also greift dieser Satz nicht.</li>
            </ul>,
            <p>Selbstkontrolle: Rechne x₂ und x₃ aus: x₂ = +2/5 = 0,4; x₃ = −3/7 ≈ −0,43 — springt das Richtung +1/2 und −1/2? Frage: Warum kann eine Folge mit zwei verschiedenen Teilfolgen-Grenzwerten nicht konvergieren, und warum konvergierte (b) trotz (−1)ⁿ doch?</p>,
          ),
          solution: (
            <>
              {'Die Folge ist unbestimmt divergent. Begründung: Betrachtet man die Folge '}<M>{'(x_{2n})'}</M>{', so ist\n'}
              <M>{'\\lim_{n\\to\\infty} x_{2n} = \\underbrace{(-1)^{2n}}_{=1}\\,\\frac{2n}{4n+1} = \\frac{1}{2}'}</M>{'.\n'}
              {'Wenn '}<M>{'(x_n)'}</M>{' konvergieren würde, müsste also '}<M>{'\\frac{1}{2}'}</M>{' der Grenzwert sein. Betrachtet man andererseits die Folge '}<M>{'(x_{2n+1})'}</M>{', so ist\n'}
              <M>{'\\lim_{n\\to\\infty} x_{2n+1} = \\underbrace{(-1)^{2n+1}}_{=-1}\\,\\frac{2n+1}{4n+3} = -\\frac{1}{2}'}</M>{',\n'}
              {'das heißt, auch '}<M>{'-\\frac{1}{2}'}</M>{' müsste der Grenzwert sein. Eine Folge kann aber keine zwei Grenzwerte haben.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'xₙ = '}<Frac n="n²−2n⁴−2" d="2n³+n²" /></>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">rationale Folge</span> (Polynom durch Polynom). Der <span className="hint-em">Leitterm</span> ist der Summand mit der höchsten Potenz von n; sein Grad und Vorzeichen bestimmen das Verhalten für große n. Vorsicht beim Ablesen: Im Zähler n² − 2n⁴ − 2 steht n² zwar vorne, aber die höchste Potenz ist <span className="hint-em">−2n⁴</span> (Grad 4) — die Reihenfolge der Summanden täuscht!</p>
              <p>Der Zähler hat Grad 4 (Leitterm −2n⁴), der Nenner nur Grad 3 (Leitterm +2n³). Ist der <span className="hint-em">Zählergrad größer als der Nennergrad</span>, divergiert die Folge bestimmt — der Betrag wächst über jede Schranke. Methode: höchste Potenz ausklammern (<span className="hint-em">n⁴ im Zähler, n³ im Nenner</span>) und kürzen; es bleibt ein Faktor n übrig. Das Leitkoeffizienten-Verhältnis −2/2 = −1 ist negativ, also läuft die Folge gegen <span className="hint-em">−∞</span>.</p>
            </>,
            <>
              <p>So bestimmt man lim (n² − 2n⁴ − 2)/(2n³ + n²):</p>
              <pre className="hint-code-block">{`1) Leitterme finden (höchste Potenz, nicht erster Summand):
   Zähler: −2n⁴ (Grad 4)   Nenner: 2n³ (Grad 3)
   → Zählergrad > Nennergrad → die Folge divergiert.

2) höchste Potenz ausklammern (n⁴ oben, n³ unten):
   Zähler: n² − 2n⁴ − 2 = n⁴·(1/n² − 2 − 2/n⁴)
   Nenner: 2n³ + n²       = n³·(2 + 1/n)

3) n⁴/n³ = n abspalten:
   = n · (1/n² − 2 − 2/n⁴)/(2 + 1/n)

4) n→∞: alle 1/nᵏ → 0, der Bruch → (0 − 2 − 0)/(2 + 0) = −1:
   = n · (−1) → −∞

Grenzwert = −∞.`}</pre>
              <p>Warum −∞? Der Bruchteil strebt gegen −1, aber der abgespaltene Faktor n wächst unbegrenzt — das Produkt n·(−1) läuft gegen −∞.</p>
            </>,
            <>
              <p>Anderes Beispiel (Zählergrad &gt; Nennergrad): lim (−n³ + n)/(4n² + 1)</p>
              <pre className="hint-code-block">{`Leitterme: −n³ (Grad 3) über 4n² (Grad 2)
= n³(−1 + 1/n²) / n²(4 + 1/n²)
= n · (−1 + 1/n²)/(4 + 1/n²) → n · (−1/4) → −∞`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n² für die dominante Potenz halten (weil es im Zähler vorne steht) → <strong>✅ Richtig:</strong> die höchste Potenz ist n⁴; Leitterm des Zählers ist −2n⁴, also durch n⁴ teilen.</li>
              <li><strong>❌ Falsch:</strong> Zähler- und Nennergrad für gleich halten und −2/2 = −1 als Grenzwert angeben → <strong>✅ Richtig:</strong> Zählergrad 4 &gt; Nennergrad 3 → die Folge divergiert; −1 ist nur der Faktor, der mit dem übrigen n multipliziert wird: n·(−1) → −∞.</li>
            </ul>,
            <p>Selbstkontrolle: n = 1000 → Zähler ≈ −2·10¹², Nenner ≈ 2·10⁹, Quotient ≈ −10³ = −1000 (groß und negativ, wächst weiter) ✓. Frage: Woran erkennst du am Grad von Zähler und Nenner, ob eine rationale Folge konvergiert oder gegen ±∞ divergiert — und was bestimmt das Vorzeichen?</p>,
          ),
          solution: (
            <>
              {'Ausklammern von '}<M>{'n^{4}'}</M>{' im Zähler und '}<M>{'n^{3}'}</M>{' im Nenner und Verwendung von '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{n^{k}} = 0,\\; k\\in\\mathbb{N}'}</M>{', liefert mit den Rechenregeln für den Limes und bestimmte Divergenz\n'}
              <M>{'\\lim_{n\\to\\infty}\\frac{n^{2}-2n^{4}-2}{2n^{3}+n^{2}} = \\lim_{n\\to\\infty}\\frac{n^{4}\\left(\\frac{1}{n^{2}}-2-\\frac{2}{n^{4}}\\right)}{n^{3}\\left(2+\\frac{1}{n}\\right)} = \\lim_{n\\to\\infty}\\underbrace{n}_{\\to\\infty}\\cdot\\underbrace{\\frac{\\frac{1}{n^{2}}-2-\\frac{2}{n^{4}}}{2+\\frac{1}{n}}}_{\\to -1} = -\\infty'}</M>
            </>
          ),
        },
        {
          letter: 'e',
          text: <>{'xₙ = (1 + '}<Frac n="1" d="n" />{')^(2n−1)'}</>,
          hint: h(
            <>
              <p>Der Standardgrenzwert: <span className="hint-em">lim (1 + 1/n)ⁿ = e</span> (e ≈ 2,718, Eulersche Zahl). Hier ist die Basis dieselbe (1 + 1/n → 1), aber der Exponent ist <span className="hint-em">2n − 1</span> statt n — wieder ein unbestimmter Ausdruck vom <span className="hint-em">Typ 1^∞</span>, den man NICHT als „1 hoch unendlich = 1" abkürzen darf.</p>
              <p>Werkzeuge sind die <span className="hint-em">Potenzgesetze</span>: a^(m+k) = aᵐ·aᵏ (Exponent additiv zerlegen) und (aᵐ)ᵏ = a^(m·k). Damit zerlegt man den Exponenten 2n − 1 = 2n + (−1) und macht aus (1+1/n)^(2n) ein Quadrat von (1+1/n)ⁿ:</p>
              <pre className="hint-code-block">{`(1+1/n)^(2n−1) = (1+1/n)^(2n) · (1+1/n)^(−1)
              = [(1+1/n)ⁿ]² · (1+1/n)^(−1)`}</pre>
              <p>Der erste Teil strebt gegen e² (Quadrat des Standardgrenzwerts), der zweite Teil (1+1/n)^(−1) gegen 1^(−1) = 1.</p>
            </>,
            <>
              <p>So bestimmt man lim (1 + 1/n)^(2n−1):</p>
              <pre className="hint-code-block">{`1) Exponent additiv zerlegen: 2n − 1 = 2n + (−1)
   (1+1/n)^(2n−1) = (1+1/n)^(2n) · (1+1/n)^(−1)

2) Ersten Faktor als Quadrat schreiben ((aᵐ)ᵏ = a^(mk)):
   (1+1/n)^(2n) = [(1+1/n)ⁿ]²
   Standardgrenzwert: (1+1/n)ⁿ → e
   → [(1+1/n)ⁿ]² → e²

3) Zweiten Faktor:
   (1+1/n)^(−1) = 1/(1+1/n) → 1/(1+0) = 1

4) Produktregel der Grenzwerte:
   lim xₙ = e² · 1 = e²

Grenzwert = e² ≈ 7,389.`}</pre>
              <p>Warum e² und nicht e? Der Exponent ist ungefähr 2n (das „−1" fällt im Grenzwert als Faktor 1 weg), und (1+1/n)^(2n) = [(1+1/n)ⁿ]² → e².</p>
            </>,
            <>
              <p>Anderes Beispiel: lim (1 + 1/n)^(3n+5)</p>
              <pre className="hint-code-block">{`3n+5 zerlegen: (1+1/n)^(3n) · (1+1/n)^5
(1+1/n)^(3n) = [(1+1/n)ⁿ]³ → e³
(1+1/n)^5 → 1^5 = 1
→ e³ · 1 = e³`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim (1+1/n)^(2n−1) = (1+0)^∞ = 1 → <strong>✅ Richtig:</strong> Typ 1^∞ ist unbestimmt; mit Zerlegung [(1+1/n)ⁿ]²·(1+1/n)^(−1) → e²·1 = e².</li>
              <li><strong>❌ Falsch:</strong> [(1+1/n)ⁿ]² = e (Quadrat vergessen) → <strong>✅ Richtig:</strong> der Exponent 2n macht das Quadrat: → e².</li>
            </ul>,
            <p>Selbstkontrolle: n = 1000 → (1,001)^1999 ≈ 7,38, nahe e² ≈ 7,389 ✓. Frage: Warum wird aus dem Exponenten 2n der Faktor e² (statt e), und warum verschwindet das „−1" im Grenzwert (Faktor 1)?</p>,
          ),
          solution: (
            <>
              {'Erinnerung: '}<M>{'\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n} = e'}</M>{'.\n'}
              {'Es ist '}<M>{'x_n = \\left(1+\\frac{1}{n}\\right)^{2n-1} = \\frac{\\left(1+\\frac{1}{n}\\right)^{n}\\left(1+\\frac{1}{n}\\right)^{n}}{1+\\frac{1}{n}}'}</M>{' und somit mit den Rechenregeln für Folgen '}<M>{'\\lim_{n\\to\\infty} x_n = \\frac{e\\cdot e}{1+0} = e^{2}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'f',
          text: <>{'xₙ = (1 − '}<Frac n="1" d="n²" />{')ⁿ   (Hinweis: Bernoullische Ungleichung und Sandwichtheorem)'}</>,
          hint: h(
            <>
              <p>Auch (1 − 1/n²)ⁿ ist vom <span className="hint-em">unbestimmten Typ 1^∞</span>: Basis 1 − 1/n² → 1, Exponent n → ∞. Man darf NICHT „1ⁿ = 1" rechnen. Zwei Hilfsmittel (im Aufgaben-Hinweis genannt):</p>
              <ul>
                <li><span className="hint-em">Bernoullische Ungleichung</span>: (1 + x)ⁿ ≥ 1 + n·x für x ≥ −1 und n ∈ ℕ. Sie liefert eine UNTERE Schranke für eine Potenz.</li>
                <li><span className="hint-em">Sandwich-/Einschnürungssatz</span>: gilt uₙ ≤ xₙ ≤ vₙ und lim uₙ = lim vₙ = L, dann auch lim xₙ = L. (Wird xₙ von oben und unten gegen denselben Wert gequetscht, muss xₙ dorthin.)</li>
              </ul>
              <p>Idee: Schreibe 1 − 1/n² = 1 + x mit x = −1/n² (erlaubt, da −1/n² ≥ −1). Bernoulli gibt die untere Schranke; 1 ist die offensichtliche obere Schranke. Beide gehen gegen 1.</p>
            </>,
            <>
              <p>So bestimmt man lim (1 − 1/n²)ⁿ:</p>
              <pre className="hint-code-block">{`1) Bernoulli mit x = −1/n² (untere Schranke):
   (1 − 1/n²)ⁿ ≥ 1 + n·(−1/n²)
                = 1 − n/n² = 1 − 1/n

2) Obere Schranke: 1 − 1/n² ≤ 1, also (kleiner als 1
   und positiv, n-te Potenz bleibt ≤ 1):
   (1 − 1/n²)ⁿ ≤ 1

3) Einschnürung:
   1 − 1/n  ≤  xₙ  ≤  1

4) Beide Schranken → 1:
   lim (1 − 1/n) = 1 − 0 = 1,   lim 1 = 1

5) Sandwichsatz: lim xₙ = 1.

Grenzwert = 1.`}</pre>
              <p>Warum hier 1 (und nicht e-artig)? Anders als (1+1/n)ⁿ wirkt hier 1/n² — der „Störterm" geht so schnell gegen 0, dass nach n-facher Potenzierung nur 1 übrig bleibt (untere Schranke 1−1/n → 1).</p>
            </>,
            <>
              <p>Analoges Beispiel: lim (1 − 1/n³)ⁿ</p>
              <pre className="hint-code-block">{`Bernoulli: (1−1/n³)ⁿ ≥ 1 − n/n³ = 1 − 1/n²
Oben: ≤ 1
1 − 1/n² ≤ xₙ ≤ 1, beide → 1 → lim = 1`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim (1−1/n²)ⁿ = (lim(1−1/n²))ⁿ = 1ⁿ = 1 (Grenzwert in Basis gezogen) → <strong>✅ Richtig:</strong> bei 1^∞ verboten; korrekt per Bernoulli + Sandwich: 1−1/n ≤ xₙ ≤ 1 → 1.</li>
              <li><strong>❌ Falsch:</strong> Bernoulli mit x = 1/n² (falsches Vorzeichen) → <strong>✅ Richtig:</strong> 1 − 1/n² = 1 + (−1/n²), also x = −1/n²; damit 1 + n·(−1/n²) = 1 − 1/n.</li>
            </ul>,
            <p>Selbstkontrolle: n = 1000 → (1 − 0,000001)¹⁰⁰⁰ ≈ 0,999, und die untere Schranke 1 − 1/1000 = 0,999 — beide nahe 1 ✓. Frage: Warum ergibt (1 − 1/n²)ⁿ den Grenzwert 1, obwohl (1 + 1/n)ⁿ gegen e geht — was ist der Unterschied im „Störterm"?</p>,
          ),
          solution: (
            <>
              {'Mit der Bernoullischen Ungleichung ergibt sich\n'}
              <M>{'x_n = \\left(1-\\frac{1}{n^{2}}\\right)^{n} \\ge 1 - n\\cdot\\frac{1}{n^{2}} = 1 - \\frac{1}{n}'}</M>{'.\n'}
              {'Desweiteren ist '}<M>{'x_n \\le 1'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}^{*}'}</M>{'. Insgesamt also\n'}
              <M>{'1 - \\frac{1}{n} \\le x_n \\le 1'}</M>{'.\n'}
              {'Mit dem Sandwichttheorem folgt '}<M>{'\\lim_{n\\to\\infty} x_n = 1'}</M>{'.'}
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
              {'Für n ∈ ℕ sei '}
              <M>{'x_n = \\sum_{k=1}^{n} 9 \\cdot \\left(\\frac{1}{10}\\right)^k'}</M>
              {'. Bestimmen Sie limₙ→∞ xₙ.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">(unendliche) Reihe</span> ist der Grenzwert der <span className="hint-em">Partialsummen</span>: man addiert mehr und mehr Glieder und schaut, wohin diese Summe strebt. Hier ist xₙ = Σ(k=1 bis n) 9·(1/10)ᵏ die n-te Partialsumme; gesucht ist lim xₙ.</p>
              <p>Bausteine: (1) <span className="hint-em">Konstanten Faktor ausklammern</span>: Σ c·aₖ = c·Σ aₖ — die 9 darf vor die Summe. (2) <span className="hint-em">Geometrische Summenformel</span>, hier in der Form Σ(k=0 bis m) qᵏ = (1 − q^(m+1))/(1 − q) für q ≠ 1. (3) Da die Summe bei <span className="hint-em">k = 1</span> beginnt (nicht 0), hilft ein <span className="hint-em">Indexshift</span>: Σ(k=1 bis n) qᵏ = q·Σ(j=0 bis n−1) qʲ (eine Potenz q vorklammern). (4) Für den Grenzwert: <span className="hint-em">qⁿ → 0 falls |q| &lt; 1</span>; hier q = 1/10.</p>
            </>,
            <>
              <p>So bestimmt man lim Σ(k=1 bis n) 9·(1/10)ᵏ:</p>
              <pre className="hint-code-block">{`1) Faktor 9 ausklammern:
   xₙ = 9 · Σ(k=1 bis n) (1/10)ᵏ

2) Indexshift (Summe startet bei 1):
   Σ(k=1..n)(1/10)ᵏ = (1/10)·Σ(j=0..n−1)(1/10)ʲ

3) Geom. Summenformel (m = n−1, also Exponent m+1 = n):
   Σ(j=0..n−1)(1/10)ʲ = (1 − (1/10)ⁿ)/(1 − 1/10)
                      = (1 − (1/10)ⁿ)/(9/10)

4) Zusammensetzen:
   xₙ = 9 · (1/10) · (1 − (1/10)ⁿ)/(9/10)
   9·(1/10) = 9/10; geteilt durch 9/10 → kürzt sich:
   xₙ = (9/10)/(9/10) · (1 − (1/10)ⁿ) = 1 − (1/10)ⁿ

5) Grenzwert n→∞: |1/10| < 1 → (1/10)ⁿ → 0
   lim xₙ = 1 − 0 = 1`}</pre>
              <p>Anschaulich: xₙ = 0,9 + 0,09 + 0,009 + … = 0,999…9 → 1 (das ist genau die Tatsache 0,999… = 1).</p>
            </>,
            <>
              <p>Probe mit kleinen n:</p>
              <pre className="hint-code-block">{`x₁ = 9·(1/10) = 9/10 = 0,9
   Formel: 1 − (1/10)¹ = 1 − 0,1 = 0,9 ✓
x₂ = 0,9 + 9·(1/100) = 0,9 + 0,09 = 0,99
   Formel: 1 − (1/10)² = 1 − 0,01 = 0,99 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> die Formel direkt mit Startindex k = 1 anwenden → <strong>✅ Richtig:</strong> die Formel gilt ab k = 0; entweder Indexshift oder das k=0-Glied gesondert behandeln.</li>
              <li><strong>❌ Falsch:</strong> (1/10)ⁿ für „groß" halten → <strong>✅ Richtig:</strong> |1/10| &lt; 1, also (1/10)ⁿ → 0; deshalb lim xₙ = 1.</li>
            </ul>,
            <p>Selbstkontrolle: Vergleiche deine Partialsummen x₁, x₂ mit der Formel 1 − (1/10)ⁿ und prüfe, dass sie sich 1 nähern. Frage: Warum geht (1/10)ⁿ gegen 0, und wieso ergibt die unendliche Summe genau 1 (= 0,999…)?</p>,
          ),
          solution: (
            <>
              {'Mit einem Indexshift und der geometrischen Summenformel erhalten wir\n'}
              <M>{'x_n = \\sum_{k=1}^{n} 9\\cdot\\frac{1}{10^{k}} = 9\\sum_{k=1}^{n}\\frac{1}{10^{k}} = 9\\sum_{k=0}^{n-1}\\frac{1}{10^{k+1}} = 9\\sum_{k=0}^{n-1}\\frac{1}{10}\\cdot\\frac{1}{10^{k}} = \\frac{9}{10}\\sum_{k=0}^{n-1}\\frac{1}{10^{k}}'}</M>{'\n'}
              <M>{'= \\frac{9}{10}\\cdot\\frac{1-\\frac{1}{10^{n}}}{1-\\frac{1}{10}} = \\frac{9}{10}\\cdot\\frac{1-\\frac{1}{10^{n}}}{\\frac{9}{10}} = 1 - \\frac{1}{10^{n}}'}</M>{'\n'}
              {'Da '}<M>{'\\left|\\frac{1}{10}\\right| < 1'}</M>{', ist '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{10^{n}} = 0'}</M>{' und somit nach den Rechenregeln für Folgen '}<M>{'\\lim_{n\\to\\infty} x_n = 1'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              <p>Für welche x ∈ ℝ konvergieren jeweils die Reihen:</p>
              <p>(i) <M>{'\\sum_{k=0}^{\\infty} \\left(\\frac{x-1}{7}\\right)^k'}</M></p>
              <p>(ii) <M>{'\\sum_{k=0}^{\\infty} 3 \\cdot \\left(\\frac{x-1}{7}\\right)^k'}</M></p>
              <p>(iii) <M>{'\\sum_{k=2}^{\\infty} \\left(\\frac{x-1}{7}\\right)^k'}</M></p>
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">unendliche geometrische Reihe</span> Σ(k=0 bis ∞) qᵏ <span className="hint-em">konvergiert</span> (hat eine endliche Summe) <span className="hint-em">genau dann, wenn |q| &lt; 1</span>. Ist |q| ≥ 1, divergiert sie. Hier ist die „Basis" q = (x−1)/7 — sie hängt von x ab; gesucht sind alle x, für die |q| &lt; 1 gilt.</p>
              <p>Man braucht <span className="hint-em">Betragsungleichungen</span>: |A| &lt; B (mit B &gt; 0) bedeutet −B &lt; A &lt; B. Außerdem |A/7| = |A|/7. Und zwei Reihensätze: (1) Ein <span className="hint-em">konstanter Vorfaktor c ≠ 0</span> ändert NICHT, OB eine Reihe konvergiert (Σ c·aₖ konvergiert genau dann, wenn Σ aₖ konvergiert) — nur den Summenwert. (2) Das <span className="hint-em">Weglassen endlich vieler Anfangsglieder</span> ändert die Konvergenz nicht (ein anderer Startindex spielt für das „ob" keine Rolle).</p>
            </>,
            <>
              <p>So bestimmt man die Konvergenzbereiche:</p>
              <pre className="hint-code-block">{`Grundbedingung (für alle drei): |q| < 1 mit q = (x−1)/7

|(x−1)/7| < 1
⟺ |x−1|/7 < 1
⟺ |x−1| < 7              (·7 auf beiden Seiten)
⟺ −7 < x−1 < 7           (Betrag auflösen)
⟺ −6 < x < 8             (+1 überall)
⟺ x ∈ (−6, 8)

(i)   Σ ((x−1)/7)ᵏ:    konvergiert ⟺ x ∈ (−6, 8)

(ii)  Σ 3·((x−1)/7)ᵏ:  Faktor 3 ändert die Konvergenz
      nicht (nur den Wert) → x ∈ (−6, 8)

(iii) Σ(k=2..∞) ((x−1)/7)ᵏ: Start bei k=2 lässt nur
      2 Anfangsglieder weg → Konvergenz unverändert
      → x ∈ (−6, 8)`}</pre>
              <p>Alle drei haben denselben Bereich, weil weder ein Vorfaktor noch ein paar fehlende Anfangsglieder das Konvergenzverhalten beeinflussen — nur |q| &lt; 1 zählt.</p>
            </>,
            <>
              <p>Anderes Beispiel: Für welche x konvergiert Σ ((x+2)/3)ᵏ?</p>
              <pre className="hint-code-block">{`|(x+2)/3| < 1 ⟺ |x+2| < 3 ⟺ −3 < x+2 < 3
⟺ −5 < x < 1 ⟺ x ∈ (−5, 1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> bei (iii) einen anderen Bereich vermuten, weil die Summe bei k=2 startet → <strong>✅ Richtig:</strong> endlich viele Glieder weglassen ändert Konvergenz nicht; weiterhin x ∈ (−6, 8).</li>
              <li><strong>❌ Falsch:</strong> bei (ii) den Faktor 3 in die Bedingung |3q| &lt; 1 stecken → <strong>✅ Richtig:</strong> der Vorfaktor zählt nicht für die Konvergenz; Bedingung bleibt |q| &lt; 1 → x ∈ (−6, 8).</li>
            </ul>,
            <p>Selbstkontrolle: Teste x = 0 (innen): q = −1/7, |q| = 1/7 &lt; 1 → konvergiert ✓; x = 8 (Rand): q = 1, |q| = 1, nicht &lt; 1 → divergiert (deshalb offenes Intervall). Frage: Warum ändern weder ein konstanter Vorfaktor noch endlich viele weggelassene Anfangsglieder den Konvergenzbereich?</p>,
          ),
          solution: (
            <>
              {'(i) Laut Vorlesung konvergiert die geometrische Reihe '}<M>{'\\sum_{k=0}^{\\infty} q^{k}'}</M>{' genau dann, wenn '}<M>{'|q| < 1'}</M>{' gilt. Das heißt, wir müssen uns überlegen, für welche '}<M>{'x \\in \\mathbb{R}'}</M>{' die Ungleichung '}<M>{'\\left|\\frac{x-1}{7}\\right| < 1'}</M>{' erfüllt ist. Es ist\n'}
              <M>{'\\left|\\frac{x-1}{7}\\right| < 1 \\;\\Leftrightarrow\\; |x-1| < 7 \\;\\Leftrightarrow\\; -7 < x-1 < 7 \\;\\Leftrightarrow\\; x \\in (-6,8)'}</M>{'.\n'}
              {'Somit konvergiert die Reihe für alle '}<M>{'x \\in (-6,8)'}</M>{'.\n\n'}
              {'(ii) Sei '}<M>{'x_n = \\sum_{k=0}^{n}\\left(\\frac{x-1}{7}\\right)^{k}'}</M>{'. Es ist '}<M>{'\\sum_{k=0}^{n} 3\\left(\\frac{x-1}{7}\\right)^{k} = 3\\sum_{k=0}^{n}\\left(\\frac{x-1}{7}\\right)^{k} = 3x_n'}</M>{'. Die Folge '}<M>{'(3x_n)'}</M>{' konvergiert genau dann, wenn die Folge '}<M>{'(x_n)'}</M>{' konvergiert. Nach Teil (a) wissen wir, dass die Folge '}<M>{'(x_n)'}</M>{' für jedes '}<M>{'x \\in (-6,8)'}</M>{' konvergiert. Also konvergiert Folge '}<M>{'(3x_n)'}</M>{' bzw. die Reihe '}<M>{'\\sum_{k=0}^{\\infty} 3\\left(\\frac{x-1}{7}\\right)^{k}'}</M>{' ebenfalls für jedes '}<M>{'x \\in (-6,8)'}</M>{'.\n\n'}
              {'(iii) Sei '}<M>{'y_n = \\sum_{k=0}^{n} 3\\left(\\frac{x-1}{7}\\right)^{k}'}</M>{'. Die Folge '}<M>{'(y_n)_{n\\in\\mathbb{N}}'}</M>{' konvergiert genau dann, wenn die Folge '}<M>{'(y_n)_{n\\ge 2}'}</M>{' konvergiert. (Auf den Anfang einer Folge kommt es für die Konvergenz nicht an.) Nach Teil (b) wissen wir, dass die Folge '}<M>{'(y_n)'}</M>{' für jedes '}<M>{'x \\in (-6,8)'}</M>{' konvergiert. Also konvergiert die Folge '}<M>{'(y_n)_{n\\ge 2}'}</M>{' bzw. die Reihe '}<M>{'\\sum_{k=2}^{\\infty} 3\\left(\\frac{x-1}{7}\\right)^{k}'}</M>{' ebenfalls für jedes '}<M>{'x \\in (-6,8)'}</M>{'.'}
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
          text: (
            <>
              {'Die Folge (aₙ) sei rekursiv definiert durch\n\na₀ := 2, aₙ₊₁ := '}<Frac n="2aₙ" d="2+aₙ" />{', n ≥ 0.\n\nZeigen Sie zunächst mit vollständiger Induktion, dass aₙ > 0 für alle n ∈ ℕ. Überlegen Sie dann, ob die Folge (aₙ) konvergiert und bestimmen Sie gegebenenfalls den Grenzwert.'}
            </>
          ),
          hint: h(
            <>
              <p>Die <span className="hint-em">vollständige Induktion</span> beweist eine Aussage A(n) für ALLE n ∈ ℕ in zwei Schritten:</p>
              <ul>
                <li><span className="hint-em">Induktionsanfang (IA)</span>: A(0) direkt zeigen (kleinster Fall).</li>
                <li><span className="hint-em">Induktionsschritt (IS)</span>: Annehmen, A(n) gelte (das ist die <span className="hint-em">Induktionsvoraussetzung, IV</span>), und daraus A(n+1) folgern. Dann gilt A(n) wie eine Kette von Dominosteinen für alle n.</li>
              </ul>
              <p>Für die Konvergenz nutzt man den <span className="hint-em">Monotoniesatz</span>: Eine Folge, die <span className="hint-em">monoton</span> ist (fällt oder steigt durchgehend) UND <span className="hint-em">beschränkt</span> (bleibt zwischen festen Schranken), konvergiert. Den Grenzwert a findet man über den <span className="hint-em">Fixpunkt-Trick</span>: Wenn aₙ → a, dann auch aₙ₊₁ → a (es ist dieselbe Folge, nur um eins verschoben); setzt man beides in die Rekursion ein, entsteht eine Gleichung für a.</p>
            </>,
            <>
              <p>So beweist man aₙ &gt; 0 und bestimmt den Grenzwert:</p>
              <pre className="hint-code-block">{`Teil 1 — Positivität per Induktion (A(n): aₙ > 0):
 IA: a₀ = 2 > 0 ✓
 IS: Sei aₙ > 0 (IV). Dann in aₙ₊₁ = 2aₙ/(2+aₙ):
     Zähler 2aₙ > 0 (da aₙ > 0)
     Nenner 2+aₙ > 0 (da aₙ > 0)
     positiv/positiv → aₙ₊₁ > 0 ✓
 → aₙ > 0 für alle n.

Teil 2 — Monotonie (Richtung raten: a₁ = 2·2/(2+2)=1 < 2=a₀
 → vermutlich fallend, also aₙ₊₁ ≤ aₙ zeigen):
   aₙ₊₁ ≤ aₙ
   ⟺ 2aₙ/(2+aₙ) ≤ aₙ
   ⟺ 2aₙ ≤ aₙ(2+aₙ)      (·(2+aₙ)>0, dreht nicht)
   ⟺ 2aₙ ≤ 2aₙ + aₙ²
   ⟺ 0 ≤ aₙ²              (immer wahr!) ✓
 → (aₙ) monoton fallend.

Teil 3 — Beschränktheit: aₙ > 0 (Teil 1) und fallend
 → 0 < aₙ ≤ a₀ = 2, also beschränkt.

Teil 4 — Monoton + beschränkt → konvergent. Grenzwert a:
   a = 2a/(2+a)
   a(2+a) = 2a        (·(2+a))
   2a + a² = 2a
   a² = 0  →  a = 0

Grenzwert lim aₙ = 0.`}</pre>
              <p>Warum a = 0 (obwohl alle aₙ &gt; 0)? Die Glieder sind positiv, werden aber immer kleiner und nähern sich 0, ohne es zu erreichen — genau wie 1/n &gt; 0, aber 1/n → 0.</p>
            </>,
            <>
              <p>Analoges Beispiel (Grenzwert per Fixpunkt): b₀ = 1, bₙ₊₁ = bₙ/(1+bₙ).</p>
              <pre className="hint-code-block">{`Grenzwertgleichung: a = a/(1+a)
a(1+a) = a → a + a² = a → a² = 0 → a = 0
(auch hier streben positive Glieder gegen 0)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a = 2a/(2+a) ⟹ a(2+a) = 2 → <strong>✅ Richtig:</strong> rechte Seite ist 2a (nicht 2): a(2+a) = 2a ⟹ 2a + a² = 2a ⟹ a² = 0 ⟹ a = 0.</li>
              <li><strong>❌ Falsch:</strong> Monotonie als aₙ₊₁ ≥ aₙ (steigend) annehmen → <strong>✅ Richtig:</strong> erst Richtung prüfen: a₁ = 1 &lt; a₀ = 2 → fallend; dann aₙ₊₁ ≤ aₙ ⟺ 0 ≤ aₙ² (wahr).</li>
            </ul>,
            <p>Selbstkontrolle: Die Glieder 2, 1, 2/3, 1/2, … sind alle &gt; 0 (Induktion) und fallen Richtung 0 (Grenzwert). Frage: Warum darf man im Grenzwert aₙ und aₙ₊₁ beide durch a ersetzen, und warum widerspricht a = 0 nicht der Tatsache aₙ &gt; 0 für jedes n?</p>,
          ),
          solution: (
            <>
              {'Behauptung: '}<M>{'a_n > 0'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{'.\n\n'}
              {'Beweis durch vollständige Induktion:\n'}
              {'I.A.: '}<M>{'n=0'}</M>{': Da '}<M>{'a_0 = 2 > 0'}</M>{' ist, ist '}<M>{'A(0)'}</M>{' erfüllt.\n'}
              {'I.S. '}<M>{'(n \\to n+1)'}</M>{': Sei '}<M>{'A(n)'}</M>{', also '}<M>{'a_n > 0'}</M>{', für ein '}<M>{'n \\in \\mathbb{N}'}</M>{' erfüllt. (IV) Dann ist '}<M>{'2a_n > 0'}</M>{' und '}<M>{'2+a_n > 0'}</M>{' und damit auch\n'}
              <M>{'a_{n+1} = \\frac{2a_n}{2+a_n} > 0'}</M>{'.\n'}
              {'Also ist '}<M>{'A(n+1)'}</M>{' erfüllt. □\n\n'}
              {'Zur Konvergenz:\n'}
              {'Monotonie: Es gilt für '}<M>{'n \\in \\mathbb{N}'}</M>{'\n'}
              <M>{'a_{n+1} \\le a_n \\;\\Leftrightarrow\\; \\frac{2a_n}{2+a_n} \\le a_n \\;\\overset{2+a_n>0}{\\Leftrightarrow}\\; 2a_n \\le a_n(2+a_n) \\;\\Leftrightarrow\\; 2a_n \\le 2a_n + a_n^{2} \\;\\Leftrightarrow\\; 0 \\le a_n^{2}'}</M>{'.\n'}
              {'Somit ist '}<M>{'(a_n)'}</M>{' eine monoton fallende Folge.\n'}
              {'Beschränktheit: Da '}<M>{'(a_n)'}</M>{' monoton fallend ist, ist '}<M>{'a_0 = 2'}</M>{' das größte Folgenglied. Nach Teil (a) ist '}<M>{'a_n \\ge 0'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{'. Damit ist '}<M>{'a_n \\in [0,2]'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{'.\n'}
              {'Nach Folie 138 der Vorlesung sind monotone und beschränkte Folgen konvergent.\n'}
              {'Grenzwert:\n'}
              {'Sei '}<M>{'a = \\lim_{n\\to\\infty} a_n'}</M>{'. Nun gilt\n'}
              <M>{'a = \\lim_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} a_{n+1} = \\lim_{n\\to\\infty}\\frac{2a_n}{2+a_n} = \\frac{2\\lim_{n\\to\\infty} a_n}{2 + \\lim_{n\\to\\infty} a_n} = \\frac{2a}{2+a}'}</M>{'.\n'}
              {'Damit erfüllt '}<M>{'a'}</M>{' die Gleichung '}<M>{'a = \\frac{2a}{2+a}'}</M>{' bzw. '}<M>{'(2+a)a = 2a'}</M>{' bzw. '}<M>{'a^{2} = 0'}</M>{'. Also ist der Grenzwert '}<M>{'a = 0'}</M>{'.'}
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
          text: <>{'Betrachten Sie die Folgen (xₙ)ₙ∈ℕ* ⊆ ℝ. Bestimmen Sie die (eventuell uneigentlichen) Grenzwerte der Folgen (xₙ), sofern vorhanden.\n\n'}<M>{'x_n = \\frac{2n}{\\sqrt{n}+1}'}</M></>,
          hint: h(
            <>
              <p>Gesucht ist das Verhalten von 2n/(√n+1) für n → ∞. Idee: vergleichen, wie schnell Zähler und Nenner wachsen. Der Zähler wächst wie n (linear), der Nenner wie √n (Wurzel, langsamer). Quotient also etwa n/√n = √n → ∞ — die Folge <span className="hint-em">divergiert bestimmt gegen ∞</span>.</p>
              <p>Hilfsmittel 1 — <span className="hint-em">√n ausklammern</span>: √n+1 = √n·(1+1/√n). Hilfsmittel 2 — <span className="hint-em">untere Abschätzung</span>: Findet man eine Folge yₙ mit xₙ ≥ yₙ und yₙ → ∞, dann muss auch xₙ → ∞ (was über eine ins Unendliche laufende Schranke liegt, läuft selbst ins Unendliche). Nützlich: für n ≥ 1 ist 1 ≤ √n, also √n+1 ≤ 2√n.</p>
            </>,
            <>
              <p>So zeigt man lim 2n/√(n+1) = ∞ (zwei Wege):</p>
              <pre className="hint-code-block">{`Weg A — Faktorisieren:
 √n + 1 = √n · (1 + 1/√n)
 xₙ = 2n/(√n·(1+1/√n))
    = 2·(n/√n)·1/(1+1/√n)
    = 2√n · 1/(1+1/√n)     (denn n/√n = √n)
 Für n→∞: 1/(1+1/√n) → 1, also der zweite Faktor → 1
 und 2√n → ∞  →  xₙ → ∞.

Weg B — untere Schranke:
 Für n ≥ 1: 1 ≤ √n ⟹ √n+1 ≤ 2√n
 ⟹ xₙ = 2n/(√n+1) ≥ 2n/(2√n)
 2n/(2√n) = n/√n = √n
 √n → ∞  ⟹  xₙ → ∞.`}</pre>
              <p>Warum reicht Weg B? xₙ ist mindestens so groß wie √n, und √n wächst unbegrenzt — also kann xₙ nicht beschränkt bleiben.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim n/√n</p>
              <pre className="hint-code-block">{`n/√n = √n·√n/√n = √n → ∞ (Zähler dominiert Wurzel-Nenner)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 2 (nur die 2 vorm Bruch betrachtet) → <strong>✅ Richtig:</strong> der n-Anteil wächst: xₙ ≥ √n → ∞, also bestimmt divergent.</li>
              <li><strong>❌ Falsch:</strong> Zähler n und Nenner √n „gleich schnell" annehmen → <strong>✅ Richtig:</strong> n wächst schneller als √n; n/√n = √n → ∞.</li>
            </ul>,
            <p>Selbstkontrolle: n = 100 → 200/(√100+1) = 200/11 ≈ 18,2; n = 10 000 → 20 000/(√10 000+1) = 20 000/101 ≈ 198 — wird immer größer ✓. Frage: Warum genügt eine untere Schranke yₙ → ∞, um xₙ → ∞ zu beweisen, und welche Eigenschaft der Ungleichung ≥ wird dabei benutzt?</p>,
          ),
          solution: (
            <>
              {'Mit den Rechenregeln für bestimmte Divergenz ergibt sich\n'}
              <M>{'x_n = \\frac{n\\cdot 2}{n^{\\frac{1}{2}}\\left(1+\\frac{1}{\\sqrt{n}}\\right)} = \\underbrace{n^{\\frac{1}{2}}}_{\\to\\infty,\\, n\\to\\infty}\\cdot\\underbrace{\\frac{2}{1+\\frac{1}{\\sqrt{n}}}}_{\\to 2,\\, n\\to\\infty} \\to \\infty,\\; n\\to\\infty'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'xₙ = '}<M>{'\\prod_{k=1}^{n} \\frac{k+1}{k}'}</M></>,
          hint: h(
            <>
              <p>Das Zeichen <span className="hint-em">Π (großes Pi)</span> bedeutet ein Produkt: <span className="hint-em">Π(k=1 bis n) aₖ</span> = a₁·a₂·…·aₙ (alle Faktoren multipliziert). Hier ist jeder Faktor (k+1)/k, also (2/1)·(3/2)·(4/3)·…·((n+1)/n).</p>
              <p>Das ist ein <span className="hint-em">Teleskopprodukt</span>: Der Zähler eines Faktors ist genau der Nenner des nächsten und kürzt sich weg — wie ein zusammengeschobenes Teleskop bleiben nur der allererste Nenner und der allerletzte Zähler übrig. Methode: ein paar Faktoren hinschreiben, die Kürzungen sehen, dann den Grenzwert ablesen.</p>
            </>,
            <>
              <p>So bestimmt man lim Π(k=1 bis n) (k+1)/k:</p>
              <pre className="hint-code-block">{`1) Faktoren ausschreiben:
   (2/1)·(3/2)·(4/3)·(5/4)·…·(n+1)/n

2) Kürzen (jeder Zähler gegen den nächsten Nenner):
   2/1 · 3/2 · 4/3 · … · (n+1)/n
   die 2 kürzt sich, die 3 kürzt sich, die 4 …
   Übrig bleibt: erster Nenner 1, letzter Zähler n+1

3) Ergebnis der Partialprodukts:
   Π = (n+1)/1 = n+1

4) Grenzwert: lim (n+1) = ∞ (wächst unbegrenzt)

xₙ = n+1 → ∞.`}</pre>
              <p>Warum bleibt n+1? Alle „inneren" Zahlen (2, 3, …, n) tauchen einmal im Zähler und einmal im Nenner auf und heben sich auf; nur die 1 ganz links unten und das n+1 ganz rechts oben überleben.</p>
            </>,
            <>
              <p>Anderes Teleskopprodukt: Π(k=2 bis n) (1 − 1/k) = Π (k−1)/k</p>
              <pre className="hint-code-block">{`(1/2)·(2/3)·(3/4)·…·((n−1)/n)
inneres kürzt sich → erster Zähler 1, letzter Nenner n
= 1/n → 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> das Produkt Faktor für Faktor ausmultiplizieren wollen → <strong>✅ Richtig:</strong> Teleskopstruktur nutzen; das Partialprodukt ist (n+1)/1 = n+1.</li>
              <li><strong>❌ Falsch:</strong> jeder Faktor (k+1)/k &gt; 1, also „Grenzwert &gt; 1, aber endlich" → <strong>✅ Richtig:</strong> es sind n Faktoren &gt; 1; ihr Produkt n+1 wächst über jede Schranke → ∞.</li>
            </ul>,
            <p>Selbstkontrolle: n = 3 → (2/1)(3/2)(4/3) = 4 = 3+1 ✓; n = 4 → ·(5/4) = 5 = 4+1 ✓. Frage: Warum überleben beim Teleskopprodukt nur der erste Nenner und der letzte Zähler, und warum divergiert das Produkt hier gegen ∞?</p>,
          ),
          solution: (
            <>
              {'Mit Übungsaufgabe 4.1 erhält man '}<M>{'x_n = n+1'}</M>{'. Da '}<M>{'x_n \\ge n'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{' und '}<M>{'\\lim_{n\\to\\infty} n = \\infty'}</M>{', ergibt sich mit den Rechenregeln für bestimmte Divergenz '}<M>{'\\lim_{n\\to\\infty} x_n = \\infty'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: 'xₙ = √(n+1) − √n',
          hint: h(
            <>
              <p>√(n+1) und √n laufen beide gegen ∞; ihre Differenz ist ein <span className="hint-em">unbestimmter Ausdruck „∞ − ∞"</span> — man darf NICHT „∞ − ∞ = 0 oder ∞" sagen. Trick: mit dem <span className="hint-em">konjugierten Ausdruck</span> erweitern. Zu einer Differenz a − b ist a + b der „konjugierte" Partner; multipliziert man beides, greift die <span className="hint-em">3. binomische Formel (a − b)(a + b) = a² − b²</span> — und Wurzeln werden quadriert, also verschwinden sie.</p>
              <p>„Erweitern" heißt: mit (a+b)/(a+b) = 1 multiplizieren (ändert den Wert nicht). Danach steht im Zähler etwas Einfaches und im Nenner eine Summe, die gegen ∞ geht — der Bruch wird eine <span className="hint-em">Nullfolge</span>. Zur Sicherung dient der <span className="hint-em">Einschnürungssatz</span>: 0 ≤ xₙ ≤ etwas, das gegen 0 geht.</p>
            </>,
            <>
              <p>So bestimmt man lim (√(n+1) − √n):</p>
              <pre className="hint-code-block">{`1) Mit dem Konjugierten √(n+1)+√n erweitern:
   xₙ = (√(n+1) − √n) · [√(n+1)+√n]/[√(n+1)+√n]

2) Zähler mit 3. binom. Formel (a−b)(a+b)=a²−b²:
   (√(n+1))² − (√n)² = (n+1) − n = 1

3) Also:
   xₙ = 1 / (√(n+1) + √n)

4) Nullfolge zeigen (Einschnürung):
   0 ≤ xₙ = 1/(√(n+1)+√n) ≤ 1/√n
   (Nenner ≥ √n, also Bruch ≤ 1/√n)
   1/√n → 0  ⟹  xₙ → 0

Grenzwert = 0.`}</pre>
              <p>Warum 0? Die Erweiterung verwandelt „∞ − ∞" in 1/(großer Nenner). Der Nenner √(n+1)+√n wächst gegen ∞, also geht 1 durch ihn gegen 0 — die beiden fast gleich großen Wurzeln unterscheiden sich nur winzig.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim (√(n+5) − √n)</p>
              <pre className="hint-code-block">{`Konjugiert erweitern: Zähler (n+5)−n = 5
= 5/(√(n+5)+√n) ≤ 5/√n → 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> √(n+1) − √n → ∞ (beide → ∞, also Differenz → ∞) → <strong>✅ Richtig:</strong> Typ ∞−∞ ist unbestimmt; nach Konjugation 1/(√(n+1)+√n) → 0.</li>
              <li><strong>❌ Falsch:</strong> √(n+1) − √n = √((n+1) − n) = √1 = 1 → <strong>✅ Richtig:</strong> Wurzeln darf man nicht „auseinanderziehen": √(a)−√(b) ≠ √(a−b); korrekt ist die Konjugation.</li>
            </ul>,
            <p>Selbstkontrolle: n = 100 → √101 − √100 ≈ 10,0499 − 10 = 0,0499; n = 10 000 → ≈ 0,005 — geht gegen 0 ✓. Frage: Warum ist „∞ − ∞" unbestimmt, und wieso macht die Multiplikation mit dem konjugierten Ausdruck die Wurzeln im Zähler weg?</p>,
          ),
          solution: (
            <>
              {'Für '}<M>{'n \\ge 1'}</M>{' ergibt sich\n'}
              <M>{'0 \\le x_n = (\\sqrt{n+1}-\\sqrt{n})\\frac{\\sqrt{n+1}+\\sqrt{n}}{\\sqrt{n+1}+\\sqrt{n}} = \\frac{n+1-n}{\\sqrt{n+1}+\\sqrt{n}} = \\frac{1}{\\sqrt{n+1}+\\sqrt{n}} \\le \\frac{1}{\\sqrt{n}} \\to 0,\\; n\\to\\infty'}</M>{'.\n'}
              {'Nach Einschnürungssatz ist '}<M>{'\\lim_{n\\to\\infty} x_n = 0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'xₙ = '}<M>{'\\sum_{k=0}^{n} \\left((k+1)^2 - k^2\\right)'}</M></>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Teleskopsumme</span> ist das Gegenstück zum Teleskopprodukt: Jeder Summand ist eine Differenz f(k+1) − f(k), und beim Aufaddieren heben sich aufeinanderfolgende Terme auf — übrig bleibt nur der letzte minus der erste. Hier ist f(k) = k², jeder Summand also (k+1)² − k².</p>
              <p>Allgemeine Regel: <span className="hint-em">Σ(k=0 bis n) [f(k+1) − f(k)] = f(n+1) − f(0)</span>. Man muss nur die beiden Randwerte einsetzen. (Alternativ kann man (k+1)² − k² = 2k+1 ausrechnen und einzeln summieren — aber Teleskopieren ist viel schneller.)</p>
            </>,
            <>
              <p>So bestimmt man Σ(k=0 bis n) ((k+1)² − k²):</p>
              <pre className="hint-code-block">{`1) Summanden ausschreiben (f(k) = k²):
   (1²−0²) + (2²−1²) + (3²−2²) + … + ((n+1)²−n²)

2) Kürzen (jedes +k² hebt das −k² des Nachbarn auf):
   −0² … +1²−1² … +2²−2² … +n²−n² … +(n+1)²
   Übrig: letzter Zähler (n+1)² und erster −0²

3) Teleskop-Ergebnis:
   = (n+1)² − 0² = (n+1)²

4) Grenzwert: lim (n+1)² = ∞ (wächst unbegrenzt)

xₙ = (n+1)² → ∞.`}</pre>
              <p>Warum (n+1)²? Alle inneren Quadrate 1², 2², …, n² kommen je einmal mit + und einmal mit − vor und löschen sich; nur −0² (= 0) und +(n+1)² überleben.</p>
            </>,
            <>
              <p>Gegenprobe über (k+1)² − k² = 2k+1:</p>
              <pre className="hint-code-block">{`Σ(k=0..n)(2k+1) = 1 + 3 + 5 + … + (2n+1)
Summe der ersten (n+1) ungeraden Zahlen = (n+1)²
→ gleiches Ergebnis ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> jeden Summanden zu 2k+1 ausrechnen und mühsam aufaddieren → <strong>✅ Richtig:</strong> Teleskopstruktur direkt: Σ = (n+1)² − 0² = (n+1)².</li>
              <li><strong>❌ Falsch:</strong> Endwert n² statt (n+1)² → <strong>✅ Richtig:</strong> der letzte Summand ist (n+1)² − n², sein +(n+1)² bleibt stehen; Endwert (n+1)².</li>
            </ul>,
            <p>Selbstkontrolle: n = 2 → (1−0)+(4−1)+(9−4) = 1+3+5 = 9 = (2+1)² ✓. Frage: Warum bleibt bei einer Teleskopsumme nur f(n+1) − f(0) übrig, und warum divergiert (n+1)² gegen ∞?</p>,
          ),
          solution: (
            <>
              {'Es ist\n'}
              <M>{'x_n = \\sum_{k=0}^{n}\\left((k+1)^{2}-k^{2}\\right) = (1^{2}-0^{2}) + (2^{2}-1^{2}) + (3^{2}-2^{2}) + \\dots + ((n+1)^{2}-n^{2}) = (n+1)^{2} - 0^{2} = (n+1)^{2}'}</M>{'.\n'}
              {'Da '}<M>{'x_n \\ge n'}</M>{' und '}<M>{'\\lim_{n\\to\\infty} n = \\infty'}</M>{', gilt mit den Regeln für bestimmte Divergenz, dass '}<M>{'\\lim_{n\\to\\infty} x_n = \\infty'}</M>{'.'}
            </>
          ),
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
          text: 'Zeigen Sie: Ist (xₙ) ⊆ ℝ eine beschränkte Folge und (yₙ) ⊆ ℝ eine Nullfolge, das heißt, limₙ→∞ yₙ = 0, dann ist die Folge (xₙyₙ) ⊆ ℝ ebenfalls eine Nullfolge.',
          hint: h(
            <>
              <p>Zu beweisen ist der Satz „<span className="hint-em">beschränkt mal Nullfolge ist Nullfolge</span>" mit der <span className="hint-em">ε-N-Definition</span>. Begriffe: (xₙ) <span className="hint-em">beschränkt</span> heißt, es gibt eine feste Schranke M mit |xₙ| ≤ M für ALLE n. (yₙ) <span className="hint-em">Nullfolge</span> heißt, zu jedem ε &gt; 0 gibt es ein N mit |yₙ| &lt; ε für n ≥ N. Zu zeigen: zu jedem ε &gt; 0 gibt es ein N mit |xₙyₙ − 0| &lt; ε für n ≥ N.</p>
              <p>Kernwerkzeug: <span className="hint-em">|xₙyₙ| = |xₙ|·|yₙ| ≤ M·|yₙ|</span> (Betrag eines Produkts ist Produkt der Beträge; |xₙ| ≤ M). Der <span className="hint-em">ε/M-Trick</span>: weil yₙ Nullfolge ist, kann man |yₙ| nicht nur unter ε, sondern unter <span className="hint-em">ε/M</span> drücken — dann liefert M·(ε/M) = ε genau die gewünschte Schranke.</p>
            </>,
            <>
              <p>So führt man den Beweis:</p>
              <pre className="hint-code-block">{`Behauptung: (xₙ) beschränkt, yₙ → 0 ⟹ xₙyₙ → 0.

Sei ε > 0 beliebig.

1) Beschränktheit: ∃ M > 0 mit |xₙ| ≤ M für alle n.
   (Falls M = 0, ist xₙ = 0, also xₙyₙ = 0 → 0 trivial;
    sonst M > 0, damit ε/M definiert ist.)

2) yₙ → 0 ausnutzen, aber mit Schranke ε/M:
   ∃ N ∈ ℕ mit |yₙ| < ε/M für alle n ≥ N.

3) Für n ≥ N abschätzen (Schlüsselschritt):
   |xₙyₙ − 0| = |xₙyₙ| = |xₙ|·|yₙ|
              ≤ M · |yₙ|        (da |xₙ| ≤ M)
              < M · (ε/M) = ε   (da |yₙ| < ε/M)

4) Also |xₙyₙ − 0| < ε für alle n ≥ N.
   Da ε > 0 beliebig: lim xₙyₙ = 0.  □`}</pre>
              <p>Warum die Schranke ε/M statt ε? Weil hinterher noch mit M multipliziert wird: M·(ε/M) = ε. Hätte man |yₙ| &lt; ε gewählt, käme nur |xₙyₙ| &lt; M·ε heraus (zu groß).</p>
            </>,
            <>
              <p>Konkrete Illustration des Satzes: xₙ = (−1)ⁿ (beschränkt, M = 1), yₙ = 1/n (Nullfolge).</p>
              <pre className="hint-code-block">{`|xₙyₙ| = |(−1)ⁿ/n| = 1/n
Zu ε wähle N > 1/ε: für n ≥ N gilt 1/n < ε ✓
→ xₙyₙ → 0 (passt zum allgemeinen Satz)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = 0 zulassen und ε/M = ε/0 bilden → <strong>✅ Richtig:</strong> M = 0 separat behandeln (dann xₙ = 0, Produkt 0); sonst M &gt; 0 sicherstellen.</li>
              <li><strong>❌ Falsch:</strong> |xₙyₙ| ≤ M·|yₙ| ohne Begründung → <strong>✅ Richtig:</strong> |xₙyₙ| = |xₙ|·|yₙ| und |xₙ| ≤ M (Beschränktheit) liefern die Ungleichung.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe, dass in Schritt 3 wirklich „&lt; ε" am Ende steht und jede Stufe eine Begründung trägt. Frage: Warum wählt man |yₙ| &lt; ε/M (statt &lt; ε), und welche Rolle spielt M dabei in der Schlussabschätzung?</p>,
          ),
          solution: (
            <>
              {'Behauptung: '}<M>{'\\lim_{n\\to\\infty} x_n y_n = 0'}</M>{', falls '}<M>{'(x_n)'}</M>{' eine beschränkte Folge ist und '}<M>{'(y_n)'}</M>{' eine Nullfolge.\n\n'}
              {'Beweis:\n'}
              {'Sei '}<M>{'(x_n)'}</M>{' eine beschränkte Folge und '}<M>{'(y_n)'}</M>{' eine Nullfolge. Da '}<M>{'(x_n)'}</M>{' beschränkt ist, existiert ein '}<M>{'M > 0'}</M>{', sodass '}<M>{'|x_n| \\le M'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{'. Da '}<M>{'(y_n)'}</M>{' gegen 0 konvergiert, existiert zu jedem '}<M>{'\\varepsilon > 0'}</M>{' ein '}<M>{'N \\in \\mathbb{N}'}</M>{', so dass für alle '}<M>{'n \\ge N'}</M>{' gilt\n'}
              <M>{'|y_n| = |y_n - 0| < \\frac{\\varepsilon}{M}'}</M>{'.\n'}
              {'Für '}<M>{'n \\ge N'}</M>{' gilt nun\n'}
              <M>{'|x_n y_n - 0| = |x_n y_n| = \\underbrace{|x_n|}_{\\le M}\\,\\underbrace{|y_n|}_{< \\frac{\\varepsilon}{M}} < \\varepsilon'}</M>{'.\n'}
              {'Somit konvergiert die Folge '}<M>{'(x_n y_n)'}</M>{' gegen 0. □'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'Zeigen Sie: Divergiert die Folge (xₙ) ⊆ ℝ \\ {0} bestimmt gegen ∞, so konvergiert die Folge ('}<Frac n="1" d="xₙ" />{') gegen 0.'}
            </>
          ),
          hint: h(
            <>
              <p>Zu beweisen: aus <span className="hint-em">bestimmter Divergenz</span> xₙ → ∞ folgt 1/xₙ → 0. Die beiden Definitionen, die man verbindet:</p>
              <ul>
                <li><span className="hint-em">xₙ → ∞</span> bedeutet: zu JEDER Schranke M &gt; 0 gibt es ein N, sodass xₙ &gt; M für alle n ≥ N (die Glieder übertreffen schließlich jede Zahl).</li>
                <li><span className="hint-em">1/xₙ → 0</span> bedeutet (ε-N): zu jedem ε &gt; 0 gibt es ein N mit |1/xₙ − 0| &lt; ε für alle n ≥ N.</li>
              </ul>
              <p>Brücke: |1/xₙ| &lt; ε ⟺ <span className="hint-em">|xₙ| &gt; 1/ε</span> (Kehrwert bilden dreht die Ungleichung). Setzt man also die Schranke M = 1/ε in der Definition von xₙ → ∞ ein, bekommt man genau xₙ &gt; 1/ε — und daraus die Behauptung. (xₙ &gt; 1/ε &gt; 0 erzwingt automatisch xₙ &gt; 0, der Betrag fällt weg.)</p>
            </>,
            <>
              <p>So führt man den Beweis:</p>
              <pre className="hint-code-block">{`Behauptung: xₙ → ∞ ⟹ 1/xₙ → 0.

Sei ε > 0 beliebig.

1) Setze die Schranke M := 1/ε  (> 0, da ε > 0).

2) Da xₙ → ∞: ∃ N ∈ ℕ mit xₙ > M = 1/ε
   für alle n ≥ N. (Definition von xₙ → ∞ mit
   genau dieser Schranke M angewendet.)

3) Für n ≥ N gilt dann:
   xₙ > 1/ε > 0   ⟹   xₙ ist positiv,
   also |1/xₙ − 0| = |1/xₙ| = 1/xₙ
                  < 1/(1/ε) = ε
   (xₙ > 1/ε ⟹ 1/xₙ < ε, Kehrwert dreht >).

4) Also |1/xₙ − 0| < ε für alle n ≥ N.
   Da ε > 0 beliebig: lim 1/xₙ = 0.  □`}</pre>
              <p>Der Trick ist die richtige Wahl M = 1/ε: sie übersetzt die ε-Bedingung an 1/xₙ in eine M-Bedingung an xₙ, die die Voraussetzung direkt liefert.</p>
            </>,
            <>
              <p>Konkrete Illustration: xₙ = n → ∞.</p>
              <pre className="hint-code-block">{`Zu ε wähle N > 1/ε. Für n ≥ N: n > 1/ε
⟹ 1/n < ε ⟹ |1/n − 0| < ε → 1/n → 0 ✓
(Gegenbeispiel-Hinweis: xₙ = (−1)ⁿ·n divergiert NICHT
 bestimmt gegen ∞ — der Satz gilt dafür nicht.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> zusätzlich xₙ &gt; 0 für alle n voraussetzen → <strong>✅ Richtig:</strong> Voraussetzung ist nur xₙ ∈ ℝ\{'{0}'}; xₙ &gt; 0 ab n ≥ N folgt von selbst aus xₙ &gt; 1/ε &gt; 0.</li>
              <li><strong>❌ Falsch:</strong> M = ε wählen → <strong>✅ Richtig:</strong> M = 1/ε, denn die Bedingung |1/xₙ| &lt; ε ist äquivalent zu xₙ &gt; 1/ε.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe, dass M = 1/ε wirklich die Kette xₙ &gt; 1/ε ⟹ 1/xₙ &lt; ε ergibt. Frage: Warum folgt aus xₙ → ∞ zwingend 1/xₙ → 0, und warum gilt das NICHT, wenn xₙ nur „unbeschränkt" ist, aber das Vorzeichen wechselt (z. B. (−1)ⁿ·n)?</p>,
          ),
          solution: (
            <>
              {'Behauptung: '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{x_n} = 0'}</M>{', falls '}<M>{'\\lim_{n\\to\\infty} x_n = \\infty'}</M>{', wobei '}<M>{'x_n \\neq 0'}</M>{' für alle '}<M>{'n \\in \\mathbb{N}'}</M>{'.\n\n'}
              {'Beweis:\n'}
              {'Sei '}<M>{'(x_n) \\subseteq \\mathbb{R}\\setminus\\{0\\}'}</M>{' eine Folge, die bestimmt gegen '}<M>{'\\infty'}</M>{' divergiert. Sei '}<M>{'\\varepsilon > 0'}</M>{'. Da '}<M>{'\\lim_{n\\to\\infty} x_n = \\infty'}</M>{', gibt es zu '}<M>{'M := \\frac{1}{\\varepsilon}'}</M>{' ein '}<M>{'N \\in \\mathbb{N}'}</M>{', so dass für alle '}<M>{'n \\ge N'}</M>{' gilt:\n'}
              <M>{'x_n > M'}</M>{'.\n'}
              {'Für '}<M>{'n \\ge N'}</M>{' gilt nun\n'}
              <M>{'\\left|\\frac{1}{x_n}-0\\right| \\overset{x_n>0}{=} \\frac{1}{x_n} \\overset{x_n>M}{<} \\frac{1}{M} = \\varepsilon'}</M>{'.\n'}
              {'Somit konvergiert die Folge '}<M>{'\\left(\\frac{1}{x_n}\\right)'}</M>{' gegen 0. □'}
            </>
          ),
        },
      ],
    },
  ],
}
