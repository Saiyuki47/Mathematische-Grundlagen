import type { MatheBlatt } from '../../types'
import M from '../../utils/M'
import { Venn2 } from '../../components/Venn'
import FunctionPlot from '../../components/FunctionPlot'
import { h } from './shared'
import { Ol } from './Ol'

// Altklausur „Mathematische Grundlagen der Informatik — AI1004"
// Hochschule Fulda, Prof. Dr. A. Gepperth, Sommersemester 2026 (23.07.2026).
// Als Übungsblatt aufbereitet: jede Teilaufgabe mit Tipp-Akkordeon und
// aufklappbarer Musterlösung, verlinkt auf die passenden Referenz-Themen.
// KEINE offiziellen Musterlösungen — alle Lösungen/Tipps von Claude (KI).

export const klausurSS2026: MatheBlatt = {
  id: 'klausur-ss2026',
  nr: 'SK',
  tabLabel: 'Altklausur SS2026',
  titel: 'Mathematische Grundlagen der Informatik – AI1004 (Sommersemester 2026)',
  pdf: 'material/Ein wenig zum Trainieren Übungen/Altklausur SS2026/Altklausur_SS2026_AI1004.pdf',
  beschreibung:
    'Altklausur „Mathematische Grundlagen der Informatik – AI1004" (Hochschule Fulda, Prof. Dr. A. Gepperth, Sommersemester 2026, Klausurtermin 23.07.2026). Aufgabe 1–13 mit Tipps und Lösungen zum Selbstkontrollieren.',
  hinweis:
    'KEINE offiziellen Musterlösungen! Alle Lösungen und Tipps wurden von Claude (KI) erstellt, sind NICHT von der Hochschule geprüft und können Fehler enthalten. Nur zur Selbstkontrolle – immer kritisch nachrechnen.',
  aufgaben: [
    // ── Aufgabe 1 · Mengen, Logik ───────────────────────────────────────────
    {
      id: 'sk1',
      nr: 1,
      title: 'Mengen, Logik (11P)',
      referenz: ['mengenoperationen', 'mengendarstellung', 'quantoren', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'In dieser Aufgabe sind keine Begründungen verlangt.\n\n'}
              {'[4P] Sei X eine Menge und seien A, B ⊆ X. Veranschaulichen Sie die Mengen\n\n'}
              <Ol>A</Ol>{' ∩ B    und    A \\ B\n\njeweils in einem Venn-Diagramm. Hinweis: '}
              <Ol>A</Ol>{' bezeichnet das Komplement von A in X.'}
            </>
          ),
          hint: h(
            <>
              <p>Ein <span className="hint-em">Venn-Diagramm</span> zeichnet zwei sich überlappende Kreise A und B in ein Rechteck (die Grundmenge X). Die gesuchte Menge wird als <span className="hint-em">schattierte Fläche</span> dargestellt.</p>
              <p><span className="hint-em">Komplement</span> <Ol>A</Ol>: alles in X, das <span className="hint-em">nicht</span> in A liegt. <span className="hint-em">Differenz</span> A \ B: alles, das in A, aber nicht in B liegt.</p>
            </>,
            <>
              <p>Bei zwei Kreisen gibt es vier Zonen: <span className="hint-em">nur A</span>, <span className="hint-em">nur B</span>, die Überlappung A∩B und der Bereich außerhalb beider.</p>
              <p><Ol>A</Ol> ∩ B = „nicht in A" <span className="hint-em">und</span> „in B" → schattiere die Zone <span className="hint-em">nur B</span>.</p>
              <p>A \ B = „in A" und „nicht in B" → schattiere die Zone <span className="hint-em">nur A</span>.</p>
            </>,
            <>
              <p><Ol>A</Ol> ∩ B ist die Sichelform von B links der Überlappung; A \ B die Sichelform von A rechts davon. Sie sind spiegelbildlich zueinander.</p>
            </>,
            <>
              <p><span className="hint-em">Verwechslung</span> vermeiden: <Ol>A</Ol> ∩ B ≠ A \ B! Das erste ist „nur B", das zweite „nur A".</p>
              <p>Die Überlappung A∩B gehört bei <span className="hint-em">keiner</span> der beiden Mengen dazu.</p>
            </>,
            <>
              <p>Welche der vier Zonen ist bei <Ol>A</Ol> ∩ B schattiert? (Nur B, ohne die Überlappung.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'\\overline{A} \\cap B'}</M>{' = „nicht in A, in B" → die Zone „nur B".\n'}
              <M>{'A \\setminus B'}</M>{' = „in A, nicht in B" → die Zone „nur A".\n\n'}
              {'Die Überlappung '}<M>{'A \\cap B'}</M>{' bleibt in beiden Fällen unschattiert.'}
            </>
          ),
          abbildung: (
            <div className="venn-grid">
              <Venn2 caption="Ā ∩ B" shade={(a, b) => !a && b} />
              <Venn2 caption="A \ B" shade={(a, b) => a && !b} />
            </div>
          ),
        },
        {
          letter: 'b',
          text:
            '[3P] Gegeben seien die Mengen\n\nM₁ = (1, 2],   M₂ = [2, 3]   und   M₃ = ℕ,\n\nwobei ℕ die Menge der natürlichen Zahlen bezeichnet, also ℕ = {0, 1, 2, 3, …}. Geben Sie folgende Mengen an:\n(i) (M₁ ∪ M₂) ∩ M₃\n(ii) (M₁ ∩ M₂) ∩ M₃\n(iii) (M₁ \\ M₂) ∩ M₃',
          hint: h(
            <>
              <p><span className="hint-em">Intervallschreibweise</span>: eckige Klammer = Randpunkt <span className="hint-em">enthalten</span>, runde Klammer = <span className="hint-em">nicht</span> enthalten. Also M₁ = (1,2] = alle x mit 1 &lt; x ≤ 2; M₂ = [2,3] = alle x mit 2 ≤ x ≤ 3.</p>
              <p>Der Schnitt mit ℕ = {'{0,1,2,3,…}'} filtert am Ende nur die <span className="hint-em">natürlichen Zahlen</span> heraus.</p>
            </>,
            <>
              <p>Rechne <span className="hint-em">zuerst die Klammer</span> als Intervall aus, dann schneide mit ℕ.</p>
              <p>∪ = in mindestens einem; ∩ = in beiden; \ = in M₁, aber nicht in M₂.</p>
            </>,
            <>
              <p>(i) M₁ ∪ M₂ = (1,3] → natürliche Zahlen darin: 2, 3.</p>
              <p>(ii) M₁ ∩ M₂ = {'{2}'} (nur x = 2 liegt in beiden) → natürliche Zahlen: 2.</p>
              <p>(iii) M₁ \ M₂ = (1,2) → natürliche Zahlen strikt zwischen 1 und 2: keine → ∅.</p>
            </>,
            <>
              <p>Randpunkte genau behandeln: 2 ∈ (1,2]? Ja. 2 ∈ [2,3]? Ja → 2 bleibt im Schnitt, fällt aber bei M₁ \ M₂ weg.</p>
              <p>Zwischen 1 und 2 liegt <span className="hint-em">keine</span> natürliche Zahl → (M₁ \ M₂) ∩ ℕ = ∅.</p>
            </>,
            <>
              <p>Gibt es eine natürliche Zahl mit 1 &lt; n &lt; 2? (Nein → leere Menge.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)   '}<M>{'(M_1 \\cup M_2)\\cap\\mathbb{N} = (1,3]\\cap\\mathbb{N} = \\{2,3\\}'}</M>{'\n'}
              {'(ii)  '}<M>{'(M_1 \\cap M_2)\\cap\\mathbb{N} = \\{2\\}\\cap\\mathbb{N} = \\{2\\}'}</M>{'\n'}
              {'(iii) '}<M>{'(M_1 \\setminus M_2)\\cap\\mathbb{N} = (1,2)\\cap\\mathbb{N} = \\varnothing'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text:
            '[2P] Entscheiden Sie jeweils, ob die Aussage wahr oder falsch ist.\n(i) ∃x ∈ ℕ : x² > 9\n(ii) ∃x ∈ ℝ ∀y ∈ ℝ : xy = 0',
          hint: h(
            <>
              <p><span className="hint-em">∃x</span> („es gibt ein x") ist wahr, sobald <span className="hint-em">ein einziges</span> passendes x existiert. <span className="hint-em">∀y</span> („für alle y") verlangt, dass die Bedingung für <span className="hint-em">jedes</span> y gilt.</p>
              <p>Bei ∃…∀… suchst du <span className="hint-em">ein</span> festes x, das dann für <span className="hint-em">alle</span> y funktionieren muss.</p>
            </>,
            <>
              <p>(i) Reicht ein x ∈ ℕ mit x² &gt; 9. Probiere: x = 4 → 16 &gt; 9 ✓.</p>
              <p>(ii) Gesucht ein x, sodass x·y = 0 für <span className="hint-em">jedes</span> y. Welche Zahl macht jedes Produkt zu 0?</p>
            </>,
            <>
              <p>(i) x = 4 → 16 &gt; 9 ✓ (auch 5, 6, …). Also wahr.</p>
              <p>(ii) x = 0 → 0·y = 0 für alle y ✓. Also wahr.</p>
            </>,
            <>
              <p>Bei ∃ genügt EIN Beispiel — man muss nicht alle x prüfen.</p>
              <p>In (ii) erst x festlegen, dann muss es für alle y klappen — das <span className="hint-em">absorbierende Element der Multiplikation</span> x = 0 leistet das.</p>
            </>,
            <>
              <p>Welche reelle Zahl liefert als Faktor immer 0? (Die 0.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)  wahr.  z. B. '}<M>{'x = 4 \\in \\mathbb{N}'}</M>{' mit '}<M>{'x^2 = 16 > 9'}</M>{'.\n'}
              {'(ii) wahr.  Wähle '}<M>{'x = 0'}</M>{': dann '}<M>{'0 \\cdot y = 0'}</M>{' für alle '}<M>{'y \\in \\mathbb{R}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: '[2P] Verneinen Sie die folgende Aussage:  ∃x ∈ ℝ : x² < 4',
          hint: h(
            <>
              <p><span className="hint-em">Negation von Quantoren</span>: aus ∃ wird ∀, aus ∀ wird ∃, und die innere Aussage wird ebenfalls verneint. Kurz: „¬∃x : P(x)" ⇔ „∀x : ¬P(x)".</p>
            </>,
            <>
              <p>Schritt 1: ∃ → ∀. Schritt 2: die Bedingung x² &lt; 4 verneinen. Das Gegenteil von „&lt;" ist „≥" (nicht „&gt;", denn = gehört zur Verneinung dazu).</p>
            </>,
            <>
              <p>¬(∃x ∈ ℝ : x² &lt; 4) = ∀x ∈ ℝ : x² ≥ 4.</p>
            </>,
            <>
              <p>Häufiger Fehler: x² &lt; 4 wird zu x² &gt; 4 verneint. Falsch — die <span className="hint-em">Grenze selbst</span> (x² = 4) gehört zur Verneinung, also x² ≥ 4.</p>
              <p>Die Grundmenge (x ∈ ℝ) bleibt beim Negieren <span className="hint-em">unverändert</span>.</p>
            </>,
            <>
              <p>Was ist das Gegenteil von „&lt; 4"? (≥ 4, nicht &gt; 4.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'\\forall x \\in \\mathbb{R} : x^2 \\ge 4'}</M>{'\n\n(∃ → ∀, und „'}<M>{'< 4'}</M>{'" wird zu „'}<M>{'\\ge 4'}</M>{'".)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 2 · Vollständige Induktion ───────────────────────────────────
    {
      id: 'sk2',
      nr: 2,
      title: 'Vollständige Induktion (8P)',
      referenz: ['vollstaendige-induktion', 'summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit Hilfe vollständiger Induktion, dass gilt:\n\n'}
              <M>{'\\sum_{i=1}^{n} (2i-1) = 1+3+5+\\dots+(2n-1) = n^2 \\qquad \\forall n \\ge 1.'}</M>
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Vollständige Induktion</span> beweist eine Aussage A(n) für alle n ≥ 1 in zwei Schritten: <span className="hint-em">Induktionsanfang</span> (A(1) prüfen) und <span className="hint-em">Induktionsschritt</span> (aus A(n) folgt A(n+1)).</p>
              <p>Behauptet wird: die Summe der ersten n <span className="hint-em">ungeraden</span> Zahlen ist n².</p>
            </>,
            <>
              <p><span className="hint-em">IA (n=1):</span> linke Seite = 2·1−1 = 1, rechte Seite = 1² = 1. ✓</p>
              <p><span className="hint-em">IV:</span> Annahme, für ein festes n gelte Σ = n².</p>
              <p><span className="hint-em">IS (n → n+1):</span> spalte den letzten Summanden ab: Σ_{'{i=1}'}^{'{n+1}'} = Σ_{'{i=1}'}^{'{n}'} + (2(n+1)−1). Setze die IV ein.</p>
            </>,
            <>
              <p>Σ_{'{i=1}'}^{'{n+1}'}(2i−1) = n² + (2(n+1)−1) = n² + (2n+1) = n² + 2n + 1 = (n+1)². Das ist die Behauptung für n+1. ∎</p>
            </>,
            <>
              <p>Der neue Summand ist 2(n+1)−1 = 2n+1 (nicht 2n−1!). Erst dann ergibt n² + 2n + 1 die binomische Formel (n+1)².</p>
              <p>Die IV muss <span className="hint-em">verwendet</span> werden (dort, wo du n² einsetzt) — sonst ist es kein Induktionsbeweis.</p>
            </>,
            <>
              <p>Was ergibt n² + (2n+1)? ((n+1)² — genau die Formel für n+1.)</p>
            </>,
          ),
          solution: (
            <>
              {'Behauptung A(n):  '}<M>{'\\sum_{i=1}^{n} (2i-1) = n^2'}</M>{'  für alle '}<M>{'n \\ge 1'}</M>{'.\n\n'}
              {'Induktionsanfang (n = 1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{1} (2i-1) = 2\\cdot 1 - 1 = 1 = 1^2'}</M>{'   ✓\n\n'}
              {'Induktionsvoraussetzung (IV):\n'}
              {'  Für ein festes '}<M>{'n \\ge 1'}</M>{' gelte  '}<M>{'\\sum_{i=1}^{n} (2i-1) = n^2'}</M>{'.\n\n'}
              {'Induktionsschritt (n → n+1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{n+1} (2i-1) = \\sum_{i=1}^{n} (2i-1) + \\bigl(2(n+1)-1\\bigr)'}</M>{'\n'}
              {'  '}<M>{'= n^2 + (2n+1)'}</M>{'   (IV eingesetzt)\n'}
              {'  '}<M>{'= n^2 + 2n + 1 = (n+1)^2'}</M>{'\n\n'}
              {'Damit gilt A(n+1). Nach dem Prinzip der vollständigen Induktion gilt A(n) für alle '}<M>{'n \\ge 1'}</M>{'.  ∎'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 3 · Digitale Logik ───────────────────────────────────────────
    {
      id: 'sk3',
      nr: 3,
      title: 'Digitale Logik (8P)',
      referenz: ['logik-aequivalenzen', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Vereinfachen Sie folgende Ausdrücke und geben Sie stets die Regel der Booleschen Algebra an, die der Umformung zugrunde liegt:\n\n'}
              {'[4P]  '}<M>{'\\overline{a \\lor \\bar a} \\land a'}</M>
            </>
          ),
          hint: h(
            <>
              <p>In der <span className="hint-em">Booleschen Algebra</span> rechnet man mit 0 (falsch) und 1 (wahr). ∨ = ODER, ∧ = UND, der Überstrich = Negation (NICHT). ¬ bindet stärker als ∧/∨.</p>
              <p>Gemeint ist <M>{'\\overline{a \\lor \\bar a} \\land a'}</M> — erst die Klammer unter dem Überstrich vereinfachen.</p>
            </>,
            <>
              <p>Schritt 1: <M>{'a \\lor \\bar a = 1'}</M> (<span className="hint-em">Komplementgesetz</span>: eine Aussage ODER ihr Gegenteil ist immer wahr).</p>
              <p>Schritt 2: <M>{'\\overline{1} = 0'}</M> (Negation von wahr).</p>
              <p>Schritt 3: <M>{'0 \\land a = 0'}</M> (<span className="hint-em">Dominanz-/Nullgesetz</span>: UND mit 0 ergibt immer 0).</p>
            </>,
            <>
              <p><M>{'\\overline{a \\lor \\bar a} \\land a = \\overline{1} \\land a = 0 \\land a = 0'}</M>.</p>
            </>,
            <>
              <p>Überstrich-Reichweite beachten: er steht über der <span className="hint-em">ganzen</span> Klammer a ∨ ā, nicht nur über a.</p>
              <p>0 ∧ a ist 0 (nicht a). Verwechslung mit dem Neutralelement 1 ∧ a = a vermeiden.</p>
            </>,
            <>
              <p>Was ergibt a ∨ ā stets? (1.) Und 0 ∧ a? (0.)</p>
            </>,
          ),
          solution: (
            <>
              {'  '}<M>{'\\overline{a \\lor \\bar a} \\land a'}</M>{'\n'}
              {'  '}<M>{'= \\overline{1} \\land a'}</M>{'    | Komplementgesetz:  '}<M>{'a \\lor \\bar a = 1'}</M>{'\n'}
              {'  '}<M>{'= 0 \\land a'}</M>{'    | Negation:  '}<M>{'\\overline{1} = 0'}</M>{'\n'}
              {'  '}<M>{'= 0'}</M>{'    | Dominanz-/Nullgesetz:  '}<M>{'0 \\land a = 0'}</M>{'\n\n'}
              {'Ergebnis:  '}<M>{'0'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[4P] Vereinfachen Sie und geben Sie die Regel an:\n\n'}
              <M>{'(a \\lor 1) \\land b'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Hier tauchen die <span className="hint-em">Konstanten</span> 0 und 1 auf. Für sie gelten feste Rechenregeln, egal was a und b sind.</p>
            </>,
            <>
              <p>Schritt 1: <M>{'a \\lor 1 = 1'}</M> (<span className="hint-em">Dominanzgesetz</span>: ODER mit 1 ergibt immer 1).</p>
              <p>Schritt 2: <M>{'1 \\land b = b'}</M> (<span className="hint-em">Neutralelement</span> der Konjunktion: UND mit 1 lässt b unverändert).</p>
            </>,
            <>
              <p><M>{'(a \\lor 1) \\land b = 1 \\land b = b'}</M>.</p>
            </>,
            <>
              <p>a ∨ 1 = 1 (nicht a!) — 1 „dominiert" das ODER. Erst danach kürzt 1 ∧ b zu b.</p>
              <p>Nicht mit a ∧ 1 = a durcheinanderbringen — das ist eine andere Konstellation.</p>
            </>,
            <>
              <p>Was ergibt „irgendetwas ∨ 1"? (Immer 1.) Und 1 ∧ b? (b.)</p>
            </>,
          ),
          solution: (
            <>
              {'  '}<M>{'(a \\lor 1) \\land b'}</M>{'\n'}
              {'  '}<M>{'= 1 \\land b'}</M>{'    | Dominanzgesetz:  '}<M>{'a \\lor 1 = 1'}</M>{'\n'}
              {'  '}<M>{'= b'}</M>{'    | Neutralelement:  '}<M>{'1 \\land b = b'}</M>{'\n\n'}
              {'Ergebnis:  '}<M>{'b'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 4 · Relationen ───────────────────────────────────────────────
    {
      id: 'sk4',
      nr: 4,
      title: 'Relationen (7P)',
      referenz: ['relationen', 'abbildungen-grundbegriffe', 'funktionen-eigenschaften'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            '[4P] Gegeben sei die binäre Relation\nR ⊆ {1,2,3,4} × {7,8,9} = {(1,7), (2,7), (3,8), (1,8)}.\n\nGeben Sie jeweils ohne Begründung an, ob diese Relation linkstotal, rechtstotal, linkseindeutig und rechtseindeutig ist.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Relation</span> R ⊆ A × B ist eine Menge von Paaren (a,b). Hier ist die Ausgangsmenge A = {'{1,2,3,4}'}, die Zielmenge B = {'{7,8,9}'}.</p>
              <ul>
                <li><span className="hint-em">linkstotal</span>: jedes a ∈ A kommt in mindestens einem Paar vor.</li>
                <li><span className="hint-em">rechtstotal</span>: jedes b ∈ B kommt in mindestens einem Paar vor.</li>
                <li><span className="hint-em">linkseindeutig</span>: jedes b ∈ B kommt in höchstens einem Paar vor.</li>
                <li><span className="hint-em">rechtseindeutig</span>: jedes a ∈ A kommt in höchstens einem Paar vor.</li>
              </ul>
            </>,
            <>
              <p>Zähle für jedes Element, in wie vielen Paaren es links bzw. rechts auftaucht.</p>
              <p>Links (A): 1 zweimal, 2 einmal, 3 einmal, 4 keinmal. Rechts (B): 7 zweimal, 8 zweimal, 9 keinmal.</p>
            </>,
            <>
              <p><span className="hint-em">linkstotal?</span> 4 fehlt → NEIN.</p>
              <p><span className="hint-em">rechtstotal?</span> 9 fehlt → NEIN.</p>
              <p><span className="hint-em">linkseindeutig?</span> 7 kommt zweimal rechts vor ((1,7),(2,7)) → NEIN.</p>
              <p><span className="hint-em">rechtseindeutig?</span> 1 kommt zweimal links vor ((1,7),(1,8)) → NEIN.</p>
            </>,
            <>
              <p>„total" = mindestens eins, „eindeutig" = höchstens eins. „links…" bezieht sich auf die A-Seite, „rechts…" auf die B-Seite — am sichersten über die Definitionen oben gehen.</p>
            </>,
            <>
              <p>Wird 4 ∈ A von irgendeinem Paar getroffen? (Nein → nicht linkstotal.) Und wird 9 ∈ B getroffen? (Nein → nicht rechtstotal.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'A = \\{1,2,3,4\\},\\quad B = \\{7,8,9\\}'}</M>{'\n\n'}
              {'linkstotal:      NEIN  — '}<M>{'4 \\in A'}</M>{' hat kein Bild.\n'}
              {'rechtstotal:     NEIN  — '}<M>{'9 \\in B'}</M>{' wird nicht getroffen.\n'}
              {'linkseindeutig:  NEIN  — 7 wird von 1 und 2 getroffen '}<M>{'((1,7),(2,7))'}</M>{'.\n'}
              {'rechtseindeutig: NEIN  — 1 hat zwei Bilder: '}<M>{'(1,7)'}</M>{' und '}<M>{'(1,8)'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: '[3P] Begründen Sie weiterhin, ob diese Relation eine Funktion darstellt oder nicht.',
          hint: h(
            <>
              <p>Eine Relation R ⊆ A × B ist genau dann eine <span className="hint-em">Funktion</span> (Abbildung) A → B, wenn sie <span className="hint-em">linkstotal</span> UND <span className="hint-em">rechtseindeutig</span> ist: jedes a ∈ A hat <span className="hint-em">genau ein</span> Bild.</p>
            </>,
            <>
              <p>Prüfe die beiden nötigen Eigenschaften aus (a): linkstotal? (nein — 4 fehlt) rechtseindeutig? (nein — 1 hat zwei Bilder)</p>
              <p>Schon eine Verletzung genügt, damit R keine Funktion ist — hier sind es sogar zwei.</p>
            </>,
            <>
              <p>R ist weder linkstotal (4 hat kein Bild) noch rechtseindeutig (1 hat zwei Bilder). Also <span className="hint-em">keine Funktion</span>.</p>
            </>,
            <>
              <p>„Genau ein Bild" heißt: mindestens eins (linkstotal ✗) UND höchstens eins (rechtseindeutig ✗). Beide Eigenschaften sind hier verletzt.</p>
            </>,
            <>
              <p>Hat in einer Funktion jedes a genau ein Bild? Erfüllt R das für a = 4 (kein Bild) und a = 1 (zwei Bilder)? (Nein.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein, R ist keine Funktion.\n\n'}
              {'Eine Funktion '}<M>{'A \\to B'}</M>{' muss linkstotal und rechtseindeutig sein\n'}
              {'(jedes '}<M>{'a \\in A'}</M>{' hat genau ein Bild). R verletzt beides:\n'}
              {'• nicht linkstotal:   '}<M>{'4 \\in A'}</M>{' hat gar kein Bild,\n'}
              {'• nicht rechtseindeutig: '}<M>{'1 \\in A'}</M>{' hat zwei Bilder '}<M>{'(1,7)'}</M>{' und '}<M>{'(1,8)'}</M>{'.\n\n'}
              {'Jede dieser Verletzungen allein genügt schon.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 5 · Funktionen und ihre Eigenschaften ────────────────────────
    {
      id: 'sk5',
      nr: 5,
      title: 'Funktionen und ihre Eigenschaften (7P)',
      referenz: ['funktionen-eigenschaften', 'bild-urbild', 'komposition-umkehr'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'In dieser Aufgabe sind keine Begründungen verlangt. Betrachten Sie die Funktion\n\n'}
              <M>{'f:[0,\\infty)\\to[0,\\infty),\\quad x\\mapsto\\begin{cases}1,& x\\in[0,1],\\\\ x^2,& x>1.\\end{cases}'}</M>
              {'\n\n[2P] Skizzieren Sie den Funktionsgraphen von f.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">abschnittsweise definierte</span> Funktion hat je nach x-Bereich verschiedene Vorschriften. Zeichne jeden Abschnitt einzeln.</p>
            </>,
            <>
              <p>Abschnitt 1 (0 ≤ x ≤ 1): f(x) = 1, eine <span className="hint-em">waagerechte Strecke</span> auf Höhe 1.</p>
              <p>Abschnitt 2 (x &gt; 1): f(x) = x², ein <span className="hint-em">Parabelast</span>, beginnend knapp über (1,1).</p>
            </>,
            <>
              <p>Prüfe den Übergang bei x = 1: linker Ast liefert 1, x² liefert bei x = 1 ebenfalls 1 → der Graph geht <span className="hint-em">lückenlos</span> ineinander über (kein Sprung).</p>
            </>,
            <>
              <p>Nur den Parabelteil für x &gt; 1 zeichnen (Scheitel läge bei (0,0), wird aber erst ab x &gt; 1 genutzt). Definitionsbereich [0,∞): links bei x = 0 beginnen.</p>
            </>,
            <>
              <p>Springt der Graph bei x = 1? (Nein, beide Teile treffen sich bei (1,1).)</p>
            </>,
          ),
          solution: (
            <>
              {'Waagerechte Strecke auf Höhe '}<M>{'y = 1'}</M>{' für '}<M>{'0 \\le x \\le 1'}</M>{',\n'}
              {'danach der Parabelast '}<M>{'y = x^2'}</M>{' für '}<M>{'x > 1'}</M>{'.\n'}
              {'Bei '}<M>{'(1,1)'}</M>{' gehen beide Teile stetig ineinander über.'}
            </>
          ),
          abbildung: (
            <FunctionPlot
              data={{
                series: [
                  { f: () => 1, from: 0, to: 1, label: 'f auf [0,1]' },
                  { f: (x) => x * x, from: 1, to: 2.2, color: '#4d9fff' },
                ],
                markers: [{ x: 1, y: 1, filled: true, color: '#4d9fff' }],
                xMin: 0,
                xMax: 2.4,
                yMin: 0,
                yMax: 6,
                caption: 'f(x) = 1 auf [0,1], danach x²',
              }}
            />
          ),
        },
        {
          letter: 'b',
          text: '[1P] Ist f injektiv?',
          hint: h(
            <>
              <p><span className="hint-em">Injektiv</span> heißt: verschiedene x haben verschiedene f-Werte — kein y-Wert wird doppelt getroffen.</p>
            </>,
            <>
              <p>Suche zwei verschiedene x mit gleichem f-Wert. Auf [0,1] ist f konstant 1 …</p>
            </>,
            <>
              <p>f(0) = f(1) = 1, aber 0 ≠ 1 → nicht injektiv.</p>
            </>,
            <>
              <p>Der konstante Abschnitt zerstört die Injektivität — auf [0,1] wird der Wert 1 unendlich oft angenommen.</p>
            </>,
            <>
              <p>Gibt es zwei verschiedene x mit demselben Bild? (Ja, alle x ∈ [0,1] → 1.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein.  Auf '}<M>{'[0,1]'}</M>{' ist f konstant 1, z. B. '}<M>{'f(0) = f(1) = 1'}</M>{' mit '}<M>{'0 \\ne 1'}</M>{'.\n'}
              {'Verschiedene x werden auf denselben Wert abgebildet — nicht injektiv.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: '[1P] Ist f surjektiv?',
          hint: h(
            <>
              <p><span className="hint-em">Surjektiv</span> (bzgl. der Zielmenge [0,∞)) heißt: <span className="hint-em">jeder</span> Wert der Zielmenge wird getroffen. Bestimme dazu den <span className="hint-em">Wertebereich</span>.</p>
            </>,
            <>
              <p>Auf [0,1]: nur der Wert 1. Für x &gt; 1: x² &gt; 1, also alle Werte in (1,∞).</p>
              <p>Wertebereich = {'{1}'} ∪ (1,∞) = [1,∞).</p>
            </>,
            <>
              <p>Zielmenge ist [0,∞), aber die Werte in [0,1) werden nie erreicht (z. B. 0 oder ½). → nicht surjektiv.</p>
            </>,
            <>
              <p>Surjektivität bezieht sich auf die <span className="hint-em">angegebene</span> Zielmenge [0,∞). Der Wert 0 ∈ [0,∞) hat kein Urbild.</p>
            </>,
            <>
              <p>Wird der Zielwert 0 (oder ½) von einem x getroffen? (Nein — f(x) ≥ 1 überall.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein.  Der Wertebereich ist '}<M>{'[1,\\infty)'}</M>{' (auf '}<M>{'[0,1]'}</M>{' nur der Wert 1, für '}<M>{'x>1'}</M>{' alle Werte '}<M>{'>1'}</M>{').\n'}
              {'Werte in '}<M>{'[0,1)'}</M>{' — etwa 0 oder ½ — liegen in der Zielmenge '}<M>{'[0,\\infty)'}</M>{', werden aber nie angenommen.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'[1P] Geben Sie f([0,2]) an, also das Bild des Intervalls [0,2] unter f.'}</>,
          hint: h(
            <>
              <p>Das <span className="hint-em">Bild</span> f([0,2]) ist die Menge <span className="hint-em">aller</span> f-Werte, während x das Intervall [0,2] durchläuft.</p>
            </>,
            <>
              <p>Zerlege [0,2] bei x = 1:</p>
              <p>Teil [0,1]: f ≡ 1 → {'{1}'}. Teil (1,2]: f = x² → (1², 2²] = (1, 4].</p>
            </>,
            <>
              <p>{'{1}'} ∪ (1,4] = [1,4]. Also f([0,2]) = [1,4].</p>
            </>,
            <>
              <p>Randpunkt x = 2 gehört dazu → 2² = 4 ist im Bild, daher „4]" (eckig). Die 1 kommt aus dem konstanten Teil und schließt die Lücke bei 1.</p>
            </>,
            <>
              <p>Größter Wert auf [0,2]? (f(2) = 4.) Kleinster? (1.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'f([0,1]) = \\{1\\}'}</M>{'   und   '}<M>{'f((1,2]) = (1, 4]'}</M>{'.\n'}
              <M>{'f([0,2]) = \\{1\\} \\cup (1,4] = [1, 4]'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'e',
          text: <>{'[2P] Geben Sie f⁻¹((1,2)) an, also das Urbild des Intervalls (1,2) unter f.'}</>,
          hint: h(
            <>
              <p>Das <span className="hint-em">Urbild</span> f⁻¹((1,2)) sammelt <span className="hint-em">alle</span> x aus dem Definitionsbereich mit f(x) ∈ (1,2). (Das setzt keine Umkehrfunktion voraus!)</p>
            </>,
            <>
              <p>Auf [0,1]: f(x) = 1. Ist 1 ∈ (1,2)? Nein (offenes Intervall, 1 nicht enthalten) → kein x aus [0,1].</p>
              <p>Für x &gt; 1: f(x) = x². Löse 1 &lt; x² &lt; 2. Wegen x &gt; 1 ist x² &gt; 1 automatisch; x² &lt; 2 ⇔ x &lt; √2. → (1, √2).</p>
            </>,
            <>
              <p>Ergebnis: f⁻¹((1,2)) = (1, √2).</p>
            </>,
            <>
              <p>Achtung offenes Intervall: der konstante Teil liefert genau den Wert 1, der <span className="hint-em">nicht</span> zu (1,2) gehört → [0,1] fällt komplett weg.</p>
              <p>Urbild ≠ Umkehrfunktion: f ist nicht injektiv, trotzdem ist das Urbild als Lösungsmenge wohldefiniert.</p>
            </>,
            <>
              <p>Für welche x &gt; 1 ist x² &lt; 2? (1 &lt; x &lt; √2.) Und der konstante Teil? (Wert 1 ∉ (1,2) → nichts.)</p>
            </>,
          ),
          solution: (
            <>
              {'Gesucht: alle '}<M>{'x \\ge 0'}</M>{' mit '}<M>{'1 < f(x) < 2'}</M>{'.\n\n'}
              {'• '}<M>{'x \\in [0,1]'}</M>{':  '}<M>{'f(x) = 1 \\notin (1,2)'}</M>{'  →  kein x.\n'}
              {'• '}<M>{'x > 1'}</M>{':  '}<M>{'f(x) = x^2'}</M>{', und '}<M>{'1 < x^2 < 2 \\Leftrightarrow 1 < x < \\sqrt{2}'}</M>{'.\n\n'}
              <M>{'f^{-1}((1,2)) = (1, \\sqrt{2})'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 6 · Kombinatorik ─────────────────────────────────────────────
    {
      id: 'sk6',
      nr: 6,
      title: 'Kombinatorik (6P)',
      referenz: ['kombinatorik', 'binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            '[3P] Führen Sie jede Frage auf ein Urnenmodell zurück und erläutern Sie dies kurz!\n\nAngenommen Sie wollen einen Eisteller mit 5 Kugeln gestalten, und es stehen 8 Sorten in unbeschränkter Menge zur Verfügung. Auf wie viele verschiedene Arten ist das möglich, wenn die Anordnung der Kugeln auf dem Teller egal ist?',
          hint: h(
            <>
              <p>Das <span className="hint-em">Urnenmodell</span> beschreibt Auswahlen über zwei Fragen: (1) Ist die <span className="hint-em">Reihenfolge</span> wichtig? (2) Darf man <span className="hint-em">zurücklegen</span> (Elemente mehrfach)? Daraus ergeben sich vier Formeln.</p>
              <p>Hier: n = 8 Sorten, man zieht k = 5 Kugeln.</p>
            </>,
            <>
              <p>„Anordnung egal" → Reihenfolge <span className="hint-em">unwichtig</span>. „unbeschränkte Menge" → eine Sorte darf mehrfach vorkommen → <span className="hint-em">mit Zurücklegen</span>.</p>
              <p>Modell: <span className="hint-em">Ziehen mit Zurücklegen, ohne Reihenfolge</span> → Kombination mit Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n+k-1}{k}=\\binom{8+5-1}{5}=\\binom{12}{5}'}</M>.</p>
              <p><M>{'\\binom{12}{5}=\\dfrac{12!}{5!\\,7!}=792'}</M>.</p>
            </>,
            <>
              <p>Nicht n^k (= mit Reihenfolge) verwenden — die Anordnung ist egal.</p>
              <p>Im „mit Wiederholung, ohne Reihenfolge"-Fall lautet die obere Zahl n+k−1, nicht n.</p>
            </>,
            <>
              <p>Reihenfolge egal + Sorten wiederholbar → welche Formel? (Kombination mit Wiederholung, C(n+k−1,k).)</p>
            </>,
          ),
          solution: (
            <>
              {'Urnenmodell: Ziehen mit Zurücklegen, ohne Beachtung der Reihenfolge\n'}
              {'(Kombination mit Wiederholung) — '}<M>{'n = 8'}</M>{' Sorten, '}<M>{'k = 5'}</M>{' Kugeln.\n\n'}
              {'  '}<M>{'\\binom{n+k-1}{k} = \\binom{12}{5} = \\frac{12!}{5!\\,7!} = 792'}</M>{'\n\n'}
              {'Es gibt 792 verschiedene Eisteller.'}
            </>
          ),
        },
        {
          letter: 'b',
          text:
            '[3P] Wie viele Möglichkeiten gäbe es, wenn von jeder Sorte nur eine Kugel gewählt werden dürfte? Die Anordnung ist weiterhin egal!',
          hint: h(
            <>
              <p>Wieder Urnenmodell mit n = 8, k = 5. Es ändert sich nur, ob man Sorten mehrfach nehmen darf.</p>
            </>,
            <>
              <p>„von jeder Sorte nur eine Kugel" → <span className="hint-em">ohne Zurücklegen</span>. „Anordnung egal" → ohne Reihenfolge.</p>
              <p>Modell: <span className="hint-em">Ziehen ohne Zurücklegen, ohne Reihenfolge</span> → Kombination ohne Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n}{k}=\\binom{8}{5}=\\dfrac{8!}{5!\\,3!}=56'}</M>.</p>
              <p>(Praktisch: aus 8 Sorten 5 auswählen = 3 weglassen, also <M>{'\\binom{8}{3}=56'}</M>.)</p>
            </>,
            <>
              <p>Jetzt C(n,k), nicht C(n+k−1,k) — ohne Wiederholung fällt der „+k−1"-Zuschlag weg.</p>
              <p>C(8,5) = C(8,3) nutzen (Symmetrie), das rechnet sich leichter.</p>
            </>,
            <>
              <p>Reihenfolge egal + jede Sorte höchstens einmal → welche Formel? (Kombination ohne Wiederholung, C(n,k).)</p>
            </>,
          ),
          solution: (
            <>
              {'Urnenmodell: Ziehen ohne Zurücklegen, ohne Reihenfolge\n'}
              {'(Kombination ohne Wiederholung) — '}<M>{'n = 8'}</M>{', '}<M>{'k = 5'}</M>{'.\n\n'}
              {'  '}<M>{'\\binom{8}{5} = \\frac{8!}{5!\\,3!} = 56 = \\binom{8}{3}'}</M>{'   (Symmetrie)\n\n'}
              {'Es gibt 56 verschiedene Eisteller.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 7 · Euklid ───────────────────────────────────────────────────
    {
      id: 'sk7',
      nr: 7,
      title: 'Der Algorithmus des Euklid (5P)',
      referenz: ['zahlenbereiche'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            'Bestimmen Sie den ggT von 128 und 116 mit dem Algorithmus von Euklid, unter Angabe aller Zwischenergebnisse!',
          hint: h(
            <>
              <p>Der <span className="hint-em">euklidische Algorithmus</span> bestimmt den größten gemeinsamen Teiler (ggT) durch wiederholte <span className="hint-em">Division mit Rest</span>: teile die größere Zahl durch die kleinere, dann die kleinere durch den Rest, usw.</p>
              <p>Grundidee: ggT(a,b) = ggT(b, a mod b).</p>
            </>,
            <>
              <p>Schreibe jeden Schritt als a = q·b + r. Ersetze dann (a,b) durch (b,r) und wiederhole, bis der Rest 0 ist. Der <span className="hint-em">letzte Rest ≠ 0</span> ist der ggT.</p>
            </>,
            <>
              <p>128 = 1·116 + 12</p>
              <p>116 = 9·12 + 8</p>
              <p>12 = 1·8 + 4</p>
              <p>8 = 2·4 + 0</p>
              <p>Rest 0 erreicht → ggT = letzter Rest ≠ 0 = 4.</p>
            </>,
            <>
              <p>Rest richtig berechnen: 116 − 9·12 = 116 − 108 = 8. 8 = 2·4 geht genau auf (Rest 0).</p>
              <p>Der ggT ist der letzte Rest <span className="hint-em">ungleich</span> 0, also 4 — nicht die 0.</p>
            </>,
            <>
              <p>Teilt 4 sowohl 128 (= 32·4) als auch 116 (= 29·4)? (Ja → 4 ist der größte gemeinsame Teiler.)</p>
            </>,
          ),
          solution: (
            <>
              {'Euklid (Division mit Rest, bis Rest 0):\n\n'}
              {'  '}<M>{'128 = 1 \\cdot 116 + 12'}</M>{'\n'}
              {'  '}<M>{'116 = 9 \\cdot 12 + 8'}</M>{'\n'}
              {'  '}<M>{'12 = 1 \\cdot 8 + 4'}</M>{'\n'}
              {'  '}<M>{'8 = 2 \\cdot 4 + 0'}</M>{'\n\n'}
              {'Letzter Rest ≠ 0 ist 4  →  '}<M>{'\\gcd(128,\\,116) = 4'}</M>{'.\n'}
              {'(Probe: '}<M>{'128 = 32\\cdot 4'}</M>{', '}<M>{'116 = 29\\cdot 4'}</M>{'.)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 8 · Folgen und Konvergenz ────────────────────────────────────
    {
      id: 'sk8',
      nr: 8,
      title: 'Folgen und Konvergenz (8P)',
      referenz: ['folgen-grundbegriffe', 'folgen-konvergenz', 'sandwich-cauchy', 'wichtige-grenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[3P] In dieser Teilaufgabe sind keine Begründungen verlangt. Geben Sie zu der Folge\n\n'}
              {'(xₙ)_{n∈ℕ} = (0, −2, 4, −6, 8, −10, 12, …)\n\n'}
              {'die Abbildungsvorschrift ℕ → ℝ, n ↦ xₙ an.  Erinnerung: ℕ = {0, 1, 2, 3, …}.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine Folge ist eine Abbildung ℕ → ℝ. Gesucht ist eine <span className="hint-em">Formel</span> xₙ, die aus dem Index n (beginnend bei 0) den Wert liefert.</p>
              <p>Zerlege das Muster in <span className="hint-em">Vorzeichen</span> und <span className="hint-em">Betrag</span>.</p>
            </>,
            <>
              <p><span className="hint-em">Vorzeichen</span>: +, −, +, −, … je nach n gerade/ungerade → Faktor (−1)ⁿ (für n = 0 ist (−1)⁰ = +1).</p>
              <p><span className="hint-em">Betrag</span>: 0, 2, 4, 6, 8, 10, … das ist 2n (da n bei 0 startet).</p>
              <p>Zusammen: xₙ = (−1)ⁿ · 2n.</p>
            </>,
            <>
              <p>Probe: n=0 → +0 = 0 ✓, n=1 → −2 ✓, n=2 → +4 ✓, n=3 → −6 ✓, n=4 → +8 ✓.</p>
            </>,
            <>
              <p>Bei ℕ ab 0 startet der Index bei n = 0 — der Betrag ist daher 2n, nicht 2n−2 o. Ä. (bei n=0 kommt so korrekt 0 heraus).</p>
              <p>(−1)ⁿ liefert für gerades n „+", für ungerades „−" — genau das gewünschte Wechselmuster. Bei n=0 ist der Wert 0, das Vorzeichen spielt dort keine Rolle.</p>
            </>,
            <>
              <p>Welche Formel liefert 0,2,4,6,… für die Beträge, wenn n bei 0 beginnt? (2n.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'x_n = (-1)^n \\cdot 2n, \\quad n \\in \\mathbb{N}'}</M>{'\n\n'}
              {'Vorzeichen +,−,+,−,… = '}<M>{'(-1)^n'}</M>{'  (n=0 → +),\n'}
              {'Beträge 0,2,4,6,8,… = '}<M>{'2n'}</M>{'.\n\n'}
              {'Probe: '}<M>{'x_0=0,\\ x_1=-2,\\ x_2=4,\\ x_3=-6,\\ x_4=8,\\ x_5=-10, \\dots'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[5P] Bestimmen Sie den folgenden Grenzwert bzw. uneigentlichen Grenzwert:\n\n'}
              <M>{'\\lim_{n\\to\\infty}\\ \\sin(n)\\,\\sin\\!\\left(\\tfrac{1}{n^2}\\right)'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Das Produkt besteht aus zwei Faktoren mit sehr unterschiedlichem Verhalten. Ein <span className="hint-em">beschränkter</span> Faktor mal einer <span className="hint-em">Nullfolge</span> ergibt wieder eine Nullfolge.</p>
              <p>Nützlich ist das <span className="hint-em">Sandwich-/Einschnürungskriterium</span>: liegt |aₙ| zwischen 0 und einer Nullfolge, so gilt aₙ → 0.</p>
            </>,
            <>
              <p>Faktor 1: sin(n) ist für alle n <span className="hint-em">beschränkt</span>: |sin(n)| ≤ 1 (konvergiert selbst nicht).</p>
              <p>Faktor 2: 1/n² → 0, also sin(1/n²) → sin(0) = 0. Sogar |sin(1/n²)| ≤ 1/n².</p>
            </>,
            <>
              <p>Abschätzung: 0 ≤ |sin(n)·sin(1/n²)| ≤ 1·(1/n²) = 1/n² → 0.</p>
              <p>Mit dem Sandwichsatz folgt sin(n)·sin(1/n²) → 0. Der Grenzwert ist <span className="hint-em">0</span>.</p>
            </>,
            <>
              <p>Nicht argumentieren „sin(n) hat keinen Grenzwert, also existiert das Produkt nicht" — der beschränkte Faktor wird durch die Nullfolge „erdrückt".</p>
              <p>|sin t| ≤ |t| verwenden (hier |sin(1/n²)| ≤ 1/n²), das liefert die saubere obere Schranke.</p>
            </>,
            <>
              <p>Beschränkt · Nullfolge = ? (Nullfolge, Grenzwert 0.)</p>
            </>,
          ),
          solution: (
            <>
              {'Es gilt '}<M>{'|\\sin(n)| \\le 1'}</M>{' (beschränkt) und '}<M>{'\\tfrac{1}{n^2} \\to 0'}</M>{', also '}<M>{'\\sin\\!\\left(\\tfrac{1}{n^2}\\right) \\to 0'}</M>{'.\n\n'}
              {'Abschätzung (Sandwichsatz):\n'}
              {'  '}<M>{'0 \\le \\left|\\sin(n)\\,\\sin\\!\\left(\\tfrac{1}{n^2}\\right)\\right| \\le \\left|\\sin\\!\\left(\\tfrac{1}{n^2}\\right)\\right| \\le \\tfrac{1}{n^2} \\to 0'}</M>{'\n\n'}
              {'Da die Beträge gegen 0 gehen, folgt\n'}
              {'  '}<M>{'\\lim_{n\\to\\infty} \\sin(n)\\,\\sin\\!\\left(\\tfrac{1}{n^2}\\right) = 0'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 9 · Reihen ───────────────────────────────────────────────────
    {
      id: 'sk9',
      nr: 9,
      title: 'Reihen (10P)',
      referenz: ['reihen-konvergenz', 'geometrische-summenformel'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[5P] Für welche x ∈ ℝ konvergiert die Reihe  '}
              <M>{'\\sum_{k=0}^{\\infty}\\left(\\tfrac{1}{2}x^2\\right)^{k}'}</M>{'  ?'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">geometrische Reihe</span> Σ qᵏ konvergiert genau dann, wenn der <span className="hint-em">Quotient</span> |q| &lt; 1 ist (dann mit Summe 1/(1−q)).</p>
              <p>Hier ist der Ausdruck in der Klammer bereits die k-te Potenz — also q = ½x².</p>
            </>,
            <>
              <p>Bedingung |q| &lt; 1: |½x²| &lt; 1. Da x² ≥ 0, ist der Betrag überflüssig: ½x² &lt; 1.</p>
              <p>Nach x auflösen: x² &lt; 2 ⇔ |x| &lt; √2 ⇔ −√2 &lt; x &lt; √2.</p>
            </>,
            <>
              <p>Die Reihe konvergiert genau für x ∈ (−√2, √2). (Summe dann 1/(1 − ½x²).)</p>
            </>,
            <>
              <p>Randfälle x = ±√2 gehören <span className="hint-em">nicht</span> dazu: dort ist q = 1, die Reihe Σ 1ᵏ divergiert.</p>
              <p>Aus x² &lt; 2 folgt |x| &lt; √2, also <span className="hint-em">beide</span> Vorzeichen: −√2 &lt; x &lt; √2.</p>
            </>,
            <>
              <p>Für welchen Quotienten q konvergiert Σqᵏ? (|q| &lt; 1.) Was heißt ½x² &lt; 1 für x? (|x| &lt; √2.)</p>
            </>,
          ),
          solution: (
            <>
              {'Geometrische Reihe mit '}<M>{'q = \\tfrac{1}{2}x^2'}</M>{'.\n'}
              {'Konvergenz  '}<M>{'\\Leftrightarrow |q| < 1 \\Leftrightarrow \\tfrac{1}{2}x^2 < 1 \\Leftrightarrow x^2 < 2 \\Leftrightarrow |x| < \\sqrt{2}'}</M>{'.\n\n'}
              {'Die Reihe konvergiert genau für  '}<M>{'x \\in (-\\sqrt{2},\\,\\sqrt{2})'}</M>{'.\n'}
              {'(Für '}<M>{'x = \\pm\\sqrt{2}'}</M>{' ist '}<M>{'q = 1'}</M>{' → Divergenz.)  Summe: '}<M>{'\\dfrac{1}{1 - \\frac{1}{2}x^2}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[5P] Untersuchen Sie die Reihe  '}
              <M>{'\\sum_{k=1}^{\\infty}\\frac{k}{3^{k}}'}</M>{'  auf Konvergenz.'}
            </>
          ),
          hint: h(
            <>
              <p>Für Reihen mit Potenzen im Nenner ist das <span className="hint-em">Quotientenkriterium</span> ideal: Konvergenz, falls <M>{'\\lim_{k\\to\\infty}\\left|\\tfrac{a_{k+1}}{a_k}\\right| < 1'}</M>.</p>
              <p>Hier ist <M>{'a_k = \\tfrac{k}{3^k}'}</M> — der Faktor 3ᵏ wächst viel schneller als das lineare k.</p>
            </>,
            <>
              <p>Bilde den Quotienten: <M>{'\\dfrac{a_{k+1}}{a_k} = \\dfrac{k+1}{3^{k+1}}\\cdot\\dfrac{3^k}{k} = \\dfrac{1}{3}\\cdot\\dfrac{k+1}{k}'}</M>.</p>
              <p><M>{'\\dfrac{k+1}{k} = 1 + \\tfrac{1}{k} \\to 1'}</M>, also strebt der Quotient gegen ⅓.</p>
            </>,
            <>
              <p><M>{'\\lim_{k\\to\\infty}\\dfrac{a_{k+1}}{a_k} = \\dfrac{1}{3} < 1'}</M> → die Reihe <span className="hint-em">konvergiert</span> (sogar absolut).</p>
            </>,
            <>
              <p>Beim Quotienten die 3-er-Potenzen sauber kürzen: 3ᵏ / 3ᵏ⁺¹ = 1/3. Nicht vergessen, auch k+1 durch k zu teilen.</p>
              <p>Der Grenzwert ⅓ &lt; 1 ist entscheidend — das Kriterium sagt dann sichere Konvergenz.</p>
            </>,
            <>
              <p>Gegen welchen Wert strebt (k+1)/(3k)? (⅓.) Ist ⅓ &lt; 1? (Ja → konvergent.)</p>
            </>,
          ),
          solution: (
            <>
              {'Quotientenkriterium mit  '}<M>{'a_k = \\dfrac{k}{3^k}'}</M>{':\n\n'}
              {'  '}<M>{'\\left|\\frac{a_{k+1}}{a_k}\\right| = \\frac{k+1}{3^{k+1}}\\cdot\\frac{3^k}{k} = \\frac{1}{3}\\cdot\\frac{k+1}{k} \\xrightarrow{k\\to\\infty} \\frac{1}{3}'}</M>{'\n\n'}
              {'Da  '}<M>{'\\frac{1}{3} < 1'}</M>{', konvergiert die Reihe (absolut).\n'}
              {'(Zur Info: der Reihenwert ist '}<M>{'\\sum_{k=1}^{\\infty}\\frac{k}{3^k} = \\frac{1/3}{(1-1/3)^2} = \\frac{3}{4}'}</M>{'.)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 10 · Asymptotik, Stetigkeit ──────────────────────────────────
    {
      id: 'sk10',
      nr: 10,
      title: 'Asymptotik, Stetigkeit (8P)',
      referenz: ['polynomdivision', 'funktionsgrenzwerte', 'landau-notation', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Sei\n\n'}
              <M>{'f:\\mathbb{R}\\setminus\\{1\\}\\to\\mathbb{R},\\quad x\\mapsto\\frac{-x^3+x^2+x-2}{x-1}.'}</M>
              {'\n\n(i) Bestimmen Sie eine asymptotische Parabel zu f.\n(ii) Geben Sie (ohne Begründung) '}
              <M>{'\\lim_{x\\to\\infty} f(x)'}</M>{' an.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">asymptotische Parabel</span> erhält man durch <span className="hint-em">Polynomdivision</span> von Zähler durch Nenner: der ganzrationale Anteil (Grad 2) ist die Parabel, der Rest-Bruch strebt gegen 0.</p>
              <p>Teile also <M>{'-x^3+x^2+x-2'}</M> durch <M>{'x-1'}</M>.</p>
            </>,
            <>
              <p>Polynomdivision Schritt für Schritt:</p>
              <p><M>{'-x^3 \\div x = -x^2'}</M>; <M>{'-x^2(x-1) = -x^3+x^2'}</M>; Rest <M>{'x-2'}</M>.</p>
              <p><M>{'x \\div x = 1'}</M>; <M>{'1\\cdot(x-1) = x-1'}</M>; Rest <M>{'-1'}</M>.</p>
              <p>Also <M>{'f(x) = -x^2 + 1 - \\dfrac{1}{x-1}'}</M>.</p>
            </>,
            <>
              <p>(i) Der Term <M>{'-\\tfrac{1}{x-1}\\to 0'}</M> für x → ±∞ → asymptotische Parabel <M>{'p(x) = -x^2 + 1'}</M>.</p>
              <p>(ii) <M>{'f(x)\\approx -x^2+1\\to -\\infty'}</M>, also <M>{'\\lim_{x\\to\\infty} f(x) = -\\infty'}</M>.</p>
            </>,
            <>
              <p>Vorzeichen beim führenden Term beachten: der Zähler beginnt mit −x³, geteilt durch x ergibt −x² (nicht +x²).</p>
              <p>Für den Grenzwert zählt nur der höchste Term −x² → −∞ (nicht etwa 0 oder +∞).</p>
            </>,
            <>
              <p>Probe der Division: <M>{'(x-1)(-x^2+1) - 1 = -x^3+x^2+x-2'}</M>? (Ja.) Und −x² → ? für x→∞ (−∞).</p>
            </>,
          ),
          solution: (
            <>
              {'(i) Polynomdivision:\n'}
              {'  '}<M>{'\\frac{-x^3+x^2+x-2}{x-1} = -x^2 + 1 - \\frac{1}{x-1}'}</M>{'\n'}
              {'  (Probe: '}<M>{'(x-1)(-x^2+1) - 1 = -x^3+x^2+x-2'}</M>{' ✓)\n\n'}
              {'  Der Rest-Term '}<M>{'-\\tfrac{1}{x-1}\\to 0'}</M>{' für '}<M>{'x\\to\\pm\\infty'}</M>{', also ist\n'}
              {'  die asymptotische Parabel  '}<M>{'p(x) = -x^2 + 1'}</M>{'.\n\n'}
              {'(ii)  '}<M>{'\\lim_{x\\to\\infty} f(x) = \\lim_{x\\to\\infty}\\bigl(-x^2+1\\bigr) = -\\infty'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[4P] Prüfen Sie, ob die Funktion\n\n'}
              <M>{'f:[0,\\infty)\\to\\mathbb{R},\\quad x\\mapsto |x|'}</M>
              {'\n\nstetig in x = 0 ist.'}
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Stetig in x₀</span> bedeutet: der Grenzwert der Funktion für x → x₀ existiert und stimmt mit dem Funktionswert überein, also <M>{'\\lim_{x\\to x_0} f(x) = f(x_0)'}</M>.</p>
              <p>Beachte den <span className="hint-em">Definitionsbereich</span>: [0,∞) — links von 0 gibt es keine Punkte, also nur der <span className="hint-em">rechtsseitige</span> Grenzwert ist relevant.</p>
            </>,
            <>
              <p>Auf [0,∞) ist x ≥ 0, also |x| = x. Damit ist f(x) = x auf dem ganzen Definitionsbereich.</p>
              <p>Funktionswert: f(0) = |0| = 0. Rechtsseitiger Grenzwert: <M>{'\\lim_{x\\to 0^+} x = 0'}</M>.</p>
            </>,
            <>
              <p>Grenzwert (0) = Funktionswert (0) → f ist <span className="hint-em">stetig</span> in x = 0.</p>
            </>,
            <>
              <p>Nicht durch den Betrag verunsichern lassen: der „Knick" der Betragsfunktion läge bei x = 0, aber auf [0,∞) ist f einfach die Identität x — glatt und stetig.</p>
              <p>Da 0 der linke Randpunkt ist, genügt der einseitige (rechte) Grenzwert.</p>
            </>,
            <>
              <p>Gilt <M>{'\\lim_{x\\to 0^+} |x| = |0|'}</M>? (Ja, 0 = 0 → stetig.)</p>
            </>,
          ),
          solution: (
            <>
              {'Auf dem Definitionsbereich '}<M>{'[0,\\infty)'}</M>{' gilt '}<M>{'x \\ge 0'}</M>{', also '}<M>{'|x| = x'}</M>{'.\n'}
              {'Damit ist '}<M>{'f(x) = x'}</M>{'.\n\n'}
              {'  Funktionswert:  '}<M>{'f(0) = |0| = 0'}</M>{'\n'}
              {'  rechtsseitiger Grenzwert:  '}<M>{'\\lim_{x\\to 0^+} f(x) = \\lim_{x\\to 0^+} x = 0'}</M>{'\n\n'}
              {'Grenzwert = Funktionswert = 0  →  f ist stetig in '}<M>{'x = 0'}</M>{'.\n'}
              {'(Da 0 der linke Rand von '}<M>{'[0,\\infty)'}</M>{' ist, reicht der rechtsseitige Grenzwert.)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 11 · Differentiation ─────────────────────────────────────────
    {
      id: 'sk11',
      nr: 11,
      title: 'Differentiation (6P)',
      referenz: ['ableitungsregeln', 'standardableitungen', 'exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Bestimmen Sie die Ableitung der Funktionen, wobei Sie stets Regel, Zerlegung und Rechnung angeben wie in der VL besprochen!\n\n'}
              {'[3P]  '}<M>{'h(x) = \\ln(x^2)'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Bei einer <span className="hint-em">verketteten</span> Funktion (Funktion in Funktion) hilft die <span className="hint-em">Kettenregel</span>: <M>{'(g\\circ k)\'(x) = g\'(k(x))\\cdot k\'(x)'}</M> („äußere mal innere Ableitung").</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: äußere Funktion <M>{'g(u)=\\ln(u)'}</M>, innere Funktion <M>{'k(x)=x^2'}</M>.</p>
              <p>Ableitungen: <M>{'g\'(u)=\\tfrac{1}{u}'}</M>, <M>{'k\'(x)=2x'}</M>.</p>
            </>,
            <>
              <p><M>{'h\'(x) = g\'(k(x))\\cdot k\'(x) = \\dfrac{1}{x^2}\\cdot 2x = \\dfrac{2x}{x^2} = \\dfrac{2}{x}'}</M>.</p>
            </>,
            <>
              <p>Am Ende kürzen: 2x/x² = 2/x (für x ≠ 0). Nicht das innere k'(x) = 2x vergessen — sonst käme fälschlich 1/x² heraus.</p>
              <p>Alternativ: ln(x²) = 2·ln|x|, dann direkt (2·ln|x|)' = 2/x — gleiches Ergebnis.</p>
            </>,
            <>
              <p>Was ist innere Ableitung von x²? (2x.) Und 1/x² · 2x gekürzt? (2/x.)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:  Kettenregel  '}<M>{'h\'(x) = g\'(k(x))\\cdot k\'(x)'}</M>{'.\n\n'}
              {'Zerlegung:  '}<M>{'g(u)=\\ln(u),\\ k(x)=x^2'}</M>{'  mit  '}<M>{'g\'(u)=\\tfrac{1}{u},\\ k\'(x)=2x'}</M>{'.\n\n'}
              {'Rechnung:\n'}
              {'  '}<M>{'h\'(x) = \\frac{1}{x^2}\\cdot 2x = \\frac{2x}{x^2} = \\frac{2}{x}'}</M>{'   (für '}<M>{'x \\ne 0'}</M>{').'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[3P]  '}<M>{'h(x) = \\ln(x)\\cdot x^2'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Hier wird ein <span className="hint-em">Produkt</span> zweier Funktionen abgeleitet → <span className="hint-em">Produktregel</span>: <M>{'(u\\cdot v)\' = u\'v + uv\''}</M>.</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: <M>{'u(x)=\\ln(x)'}</M>, <M>{'v(x)=x^2'}</M>.</p>
              <p>Ableitungen: <M>{'u\'(x)=\\tfrac{1}{x}'}</M>, <M>{'v\'(x)=2x'}</M>.</p>
            </>,
            <>
              <p><M>{'h\'(x) = u\'v + uv\' = \\tfrac{1}{x}\\cdot x^2 + \\ln(x)\\cdot 2x = x + 2x\\ln(x)'}</M>.</p>
              <p>Faktor x ausklammern: <M>{'= x\\,(1 + 2\\ln x)'}</M>.</p>
            </>,
            <>
              <p>Nicht die beiden Ableitungen einfach multiplizieren — die Produktregel hat <span className="hint-em">zwei</span> Summanden.</p>
              <p>Ersten Term kürzen: (1/x)·x² = x (nicht x²).</p>
            </>,
            <>
              <p>Was ergibt u'v + uv' hier? (x + 2x·ln x = x(1+2 ln x).)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:  Produktregel  '}<M>{'(u\\cdot v)\' = u\'v + uv\''}</M>{'.\n\n'}
              {'Zerlegung:  '}<M>{'u(x)=\\ln(x),\\ v(x)=x^2'}</M>{'  mit  '}<M>{'u\'(x)=\\tfrac{1}{x},\\ v\'(x)=2x'}</M>{'.\n\n'}
              {'Rechnung:\n'}
              {'  '}<M>{'h\'(x) = \\frac{1}{x}\\cdot x^2 + \\ln(x)\\cdot 2x = x + 2x\\ln(x) = x\\,(1 + 2\\ln x)'}</M>{'   (für '}<M>{'x > 0'}</M>{').'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 12 · Differenzierbarkeit ─────────────────────────────────────
    {
      id: 'sk12',
      nr: 12,
      title: 'Differenzierbarkeit (6P)',
      referenz: ['differenzierbarkeit', 'ableitungsregeln', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Begründen Sie, ob die Funktion\n\n'}
              <M>{'h(x) = \\begin{cases}\\tfrac{1}{2}x,& \\text{für } x \\le 1,\\\\[2pt] \\tfrac{1}{2},& \\text{sonst}\\end{cases}'}</M>
              {'\n\nbei x = 1 differenzierbar ist.'}
            </>
          ),
          hint: h(
            <>
              <p>Bei einer <span className="hint-em">abschnittsweise</span> definierten Funktion prüft man an der Nahtstelle zwei Dinge: erst <span className="hint-em">Stetigkeit</span> (notwendig!), dann ob die <span className="hint-em">einseitigen Ableitungen</span> übereinstimmen.</p>
              <p>Differenzierbarkeit ⇒ Stetigkeit, aber Stetigkeit allein reicht nicht.</p>
            </>,
            <>
              <p><span className="hint-em">Stetigkeit bei x=1</span>: linker Ast <M>{'\\tfrac{1}{2}x'}</M> liefert <M>{'\\tfrac{1}{2}\\cdot 1 = \\tfrac{1}{2}'}</M>; rechter Ast (x&gt;1) liefert <M>{'\\tfrac{1}{2}'}</M>. Beide gleich → stetig. ✓</p>
              <p><span className="hint-em">Einseitige Ableitungen</span>: links <M>{'(\\tfrac{1}{2}x)\' = \\tfrac{1}{2}'}</M>; rechts <M>{'(\\tfrac{1}{2})\' = 0'}</M>.</p>
            </>,
            <>
              <p>Linke Steigung <M>{'\\tfrac{1}{2}'}</M> ≠ rechte Steigung <M>{'0'}</M> → die einseitigen Ableitungen stimmen <span className="hint-em">nicht</span> überein.</p>
              <p>Also ist h bei x = 1 <span className="hint-em">nicht differenzierbar</span> (Knick).</p>
            </>,
            <>
              <p>Zuerst Stetigkeit prüfen — wäre h dort schon unstetig, wäre es automatisch nicht differenzierbar. Hier ist es stetig, scheitert aber an den unterschiedlichen Steigungen.</p>
              <p>Formal über den Differenzenquotienten: linksseitig → ½, rechtsseitig → 0.</p>
            </>,
            <>
              <p>Stimmen linke (½) und rechte (0) Steigung überein? (Nein → nicht differenzierbar.)</p>
            </>,
          ),
          solution: (
            <>
              {'Schritt 1 — Stetigkeit bei x = 1 (notwendig):\n'}
              {'  linker Ast:  '}<M>{'\\tfrac{1}{2}\\cdot 1 = \\tfrac{1}{2}'}</M>{',   rechter Ast:  '}<M>{'\\tfrac{1}{2}'}</M>{'\n'}
              {'  → beide Werte gleich, h ist stetig bei x = 1. ✓\n\n'}
              {'Schritt 2 — einseitige Ableitungen:\n'}
              {'  '}<M>{'\\lim_{x\\to 1^-}\\frac{h(x)-h(1)}{x-1} = \\left(\\tfrac{1}{2}x\\right)\' = \\tfrac{1}{2}'}</M>{'\n'}
              {'  '}<M>{'\\lim_{x\\to 1^+}\\frac{h(x)-h(1)}{x-1} = \\left(\\tfrac{1}{2}\\right)\' = 0'}</M>{'\n\n'}
              {'Linke Steigung '}<M>{'\\tfrac{1}{2}'}</M>{' ≠ rechte Steigung '}<M>{'0'}</M>{'.\n'}
              {'→ h ist bei x = 1 NICHT differenzierbar (Knick).'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 13 · Differentiation und Stetigkeit ──────────────────────────
    {
      id: 'sk13',
      nr: 13,
      title: 'Differentiation und Stetigkeit (4P)',
      referenz: ['stetigkeit', 'differenzierbarkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            'Geben Sie ohne Begründung an, ob die unten dargestellten Funktionen im Intervall [−2, 2] überall stetig bzw. differenzierbar sind (alle Kombinationen sind möglich!).\n\n' +
            '• Graph a: ein glatter, nach unten gehender Bogen von (−2, 1) bis (0, 0), danach eine gerade Linie von (0, 0) steil hinauf bis (2, 4).\n' +
            '• Graph b: zwei waagerechte Segmente mit Sprung — links auf Höhe 1 (von −2 bis 0), rechts auf Höhe 2 (von 0 bis 2).\n' +
            '• Graph c: eine fallende Gerade von (−2, 3) bis zum Tiefpunkt (1, 0), danach wieder aufsteigend bis (2, 1) (V-Form).\n' +
            '• Graph d: ein glatter „Buckel" (bogenförmig) von (−2, ≈1,3) über einen runden Hochpunkt bei ≈2 bis (2, ≈0,3).',
          hint: h(
            <>
              <p><span className="hint-em">Stetig</span> = der Graph lässt sich „ohne Absetzen" zeichnen (kein Sprung, keine Lücke). <span className="hint-em">Differenzierbar</span> = zusätzlich <span className="hint-em">glatt</span>, also ohne Knick/Ecke und ohne senkrechte Tangente.</p>
              <p>Merke: differenzierbar ⇒ stetig. Ein Knick ist stetig, aber nicht differenzierbar; ein Sprung ist beides nicht.</p>
            </>,
            <>
              <p>Gehe jeden Graphen einzeln durch und suche nach (1) Sprüngen → unstetig, (2) Ecken/Knicken → stetig, aber nicht differenzierbar.</p>
            </>,
            <>
              <p><span className="hint-em">a:</span> durchgehend gezeichnet (Bogen trifft Gerade bei (0,0)) → stetig; aber dort ein <span className="hint-em">Knick</span> → nicht differenzierbar bei x = 0.</p>
              <p><span className="hint-em">b:</span> <span className="hint-em">Sprung</span> bei x = 0 → nicht stetig (und damit auch nicht differenzierbar).</p>
              <p><span className="hint-em">c:</span> durchgehende V-Form → stetig; Spitze bei x = 1 → nicht differenzierbar.</p>
              <p><span className="hint-em">d:</span> glatter Bogen, kein Sprung, keine Ecke → stetig <span className="hint-em">und</span> differenzierbar.</p>
            </>,
            <>
              <p>Häufiger Fehler: eine Ecke (wie bei a und c) für differenzierbar halten. Stetig ja, differenzierbar nein — an der Ecke gibt es keine eindeutige Tangente.</p>
              <p>Beim Sprung (b) beides verneinen: unstetig ⇒ automatisch nicht differenzierbar.</p>
            </>,
            <>
              <p>Welcher Graph ist der einzige, der überall glatt (also differenzierbar) ist? (d.) Welcher ist als einziger schon nicht stetig? (b.)</p>
            </>,
          ),
          solution: (
            <>
              {'Ergebnisse im Intervall [−2, 2]:\n\n'}
              {'a)  stetig: JA,   differenzierbar: NEIN  — Knick bei x = 0 (Bogen trifft Gerade).\n'}
              {'b)  stetig: NEIN, differenzierbar: NEIN  — Sprung bei x = 0.\n'}
              {'c)  stetig: JA,   differenzierbar: NEIN  — Spitze (V) bei x = 1.\n'}
              {'d)  stetig: JA,   differenzierbar: JA    — glatter Bogen, kein Knick, kein Sprung.\n\n'}
              {'Merksatz: differenzierbar ⇒ stetig; Knick = stetig, aber nicht differenzierbar; Sprung = weder noch.'}
            </>
          ),
        },
      ],
    },
  ],
}
