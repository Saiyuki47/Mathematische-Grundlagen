import type { MatheBlatt } from '../../types'
import M from '../../utils/M'
import { Venn2 } from '../../components/Venn'
import FunctionPlot from '../../components/FunctionPlot'
import { h } from './shared'

// Probeklausur (KI-generiert) – von Claude erstellte Übungsklausur, die 1:1 dem
// Aufbau der echten Altklausur „Mathematische Grundlagen der Informatik – AI1004"
// folgt: gleiche Aufgabenarten, gleiche Reihenfolge, NUR veränderte Werte.
// KEIN offizielles Prüfungsmaterial – alle Aufgaben, Lösungen und Tipps von einer KI.

export const probeklausurClaude: MatheBlatt = {
  id: 'probeklausur-claude',
  nr: 'PÜ',
  tabLabel: 'Probeklausur (Claude)',
  titel: 'Probeklausur (KI-generiert) – an die Altklausur AI1004 angelehnt',
  beschreibung:
    'Von Claude erstellte Übungs-Probeklausur: exakt derselbe Aufbau wie die Altklausur „Mathematische Grundlagen der Informatik – AI1004" (gleiche Aufgabenarten, gleiche Reihenfolge), nur mit veränderten Werten. Zum Selbsttest mit Tipps und Musterlösungen.',
  hinweis:
    'DIESE KLAUSUR IST KOMPLETT VON CLAUDE (KI) ERSTELLT – kein offizielles Prüfungsmaterial! Sie ist der echten Altklausur (AI1004) im Aufbau nachempfunden, aber sämtliche Aufgabenwerte, Lösungen und Tipps stammen von einer KI und sind NICHT von der Hochschule geprüft. Kann Fehler enthalten – nur zum Üben, immer kritisch nachrechnen.',
  aufgaben: [
    // ── Aufgabe 1 · Mengen, Logik ───────────────────────────────────────────
    {
      id: 'pkc1',
      nr: 1,
      title: 'Mengen, Logik (11P)',
      referenz: ['mengenoperationen', 'mengendarstellung', 'quantoren', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Sei X eine Menge und seien A, B ⊆ X. Veranschaulichen Sie die Mengen\n\n'}
              <M>{'A \\cap \\overline{B}'}</M>{'    und    '}<M>{'\\overline{A} \\cup B'}</M>
              {'\n\njeweils in einem Venn-Diagramm. Hinweis: '}<M>{'\\overline{A}'}</M>{' bezeichnet das Komplement von A in X.'}
            </>
          ),
          hint: h(
            <>
              <p>Ein <span className="hint-em">Venn-Diagramm</span> zeichnet zwei sich überlappende Kreise A und B in ein Rechteck (die Grundmenge X). Die gesuchte Menge wird als <span className="hint-em">schattierte Fläche</span> dargestellt.</p>
              <p>Bei zwei Kreisen gibt es vier Zonen: <span className="hint-em">nur A</span>, <span className="hint-em">nur B</span>, die Überlappung A∩B und der Bereich außerhalb beider.</p>
            </>,
            <>
              <p><M>{'A \\cap \\overline{B}'}</M> = „in A" <span className="hint-em">und</span> „nicht in B" → schattiere die Zone <span className="hint-em">nur A</span> (der Teil von A, der B nicht überlappt).</p>
              <p><M>{'\\overline{A} \\cup B'}</M> = „nicht in A" <span className="hint-em">oder</span> „in B" → schattiere <span className="hint-em">alles außer der Zone „nur A"</span>.</p>
            </>,
            <>
              <p>Die beiden Bilder sind <span className="hint-em">komplementär</span> zueinander (De Morgan): <M>{'\\overline{A \\cap \\overline{B}} = \\overline{A} \\cup B'}</M>. Was im ersten frei bleibt, ist im zweiten geschwärzt und umgekehrt.</p>
            </>,
            <>
              <p>Die Überlappung A∩B gehört bei <M>{'A \\cap \\overline{B}'}</M> <span className="hint-em">nicht</span> dazu (dort ist man ja in B), bei <M>{'\\overline{A} \\cup B'}</M> aber <span className="hint-em">schon</span> (dort ist man in B).</p>
            </>,
            <>
              <p>Welche einzige Zone bleibt bei <M>{'\\overline{A} \\cup B'}</M> unschattiert? (Nur A.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'A \\cap \\overline{B}'}</M>{' = „in A, nicht in B" → die Zone „nur A".\n'}
              <M>{'\\overline{A} \\cup B'}</M>{' = „nicht in A, oder in B" → alles außer der Zone „nur A".\n\n'}
              {'Die beiden Mengen sind komplementär: '}<M>{'\\overline{A \\cap \\overline{B}} = \\overline{A} \\cup B'}</M>{'.'}
            </>
          ),
          abbildung: (
            <div className="venn-grid">
              <Venn2 caption="A ∩ B̄" shade={(a, b) => a && !b} />
              <Venn2 caption="Ā ∪ B" shade={(a, b) => !a || b} />
            </div>
          ),
        },
        {
          letter: 'b',
          text:
            '[3P] Gegeben seien die Mengen\n\nM₁ = [2, 5),   M₂ = (3, 6)   und   M₃ = ℕ,\n\nwobei ℕ = {0, 1, 2, 3, …}. Geben Sie folgende Mengen an:\n(i) (M₁ ∪ M₂) ∩ M₃\n(ii) (M₁ ∩ M₂) ∩ M₃\n(iii) (M₁ \\ M₂) ∩ M₃',
          hint: h(
            <>
              <p><span className="hint-em">Intervallschreibweise</span>: eckige Klammer = Randpunkt <span className="hint-em">enthalten</span>, runde Klammer = <span className="hint-em">nicht</span> enthalten. Also M₁ = [2,5) = alle x mit 2 ≤ x &lt; 5; M₂ = (3,6) = alle x mit 3 &lt; x &lt; 6.</p>
              <p>Der Schnitt mit ℕ = {'{0,1,2,3,…}'} filtert am Ende nur die <span className="hint-em">natürlichen Zahlen</span> heraus.</p>
            </>,
            <>
              <p>Rechne <span className="hint-em">zuerst die Klammer</span> als Intervall aus, dann schneide mit ℕ.</p>
              <p>∪ = in mindestens einem; ∩ = in beiden; \ = in M₁, aber nicht in M₂.</p>
            </>,
            <>
              <p>(i) M₁ ∪ M₂ = [2,6) → natürliche Zahlen darin: 2, 3, 4, 5.</p>
              <p>(ii) M₁ ∩ M₂ = (3,5) → natürliche Zahlen strikt zwischen 3 und 5: nur 4.</p>
              <p>(iii) M₁ \ M₂ = [2,3] → natürliche Zahlen darin: 2, 3.</p>
            </>,
            <>
              <p>Randpunkte genau behandeln: 5 ∈ [2,5)? Nein (offen bei 5). 3 ∈ (3,6)? Nein (offen bei 3) → deshalb bleibt 3 in M₁ \ M₂.</p>
              <p>ℕ enthält hier die 0 und 1 — sie liegen aber in keinem der Intervalle.</p>
            </>,
            <>
              <p>Liegt 3 in (3,6)? (Nein, offen bei 3.) Gehört 3 damit zu M₁ \ M₂? (Ja.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)   '}<M>{'(M_1 \\cup M_2)\\cap\\mathbb{N} = [2,6)\\cap\\mathbb{N} = \\{2,3,4,5\\}'}</M>{'\n'}
              {'(ii)  '}<M>{'(M_1 \\cap M_2)\\cap\\mathbb{N} = (3,5)\\cap\\mathbb{N} = \\{4\\}'}</M>{'\n'}
              {'(iii) '}<M>{'(M_1 \\setminus M_2)\\cap\\mathbb{N} = [2,3]\\cap\\mathbb{N} = \\{2,3\\}'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text:
            '[2P] Entscheiden Sie jeweils, ob die Aussage wahr oder falsch ist.\n(i) ∃x ∈ ℕ : x² > 20\n(ii) ∃x ∈ ℝ ∀y ∈ ℝ : x + y = y',
          hint: h(
            <>
              <p><span className="hint-em">∃x</span> („es gibt ein x") ist wahr, sobald <span className="hint-em">ein einziges</span> passendes x existiert. <span className="hint-em">∀y</span> („für alle y") verlangt, dass die Bedingung für <span className="hint-em">jedes</span> y gilt.</p>
              <p>Bei ∃…∀… suchst du <span className="hint-em">ein</span> festes x, das dann für <span className="hint-em">alle</span> y funktionieren muss.</p>
            </>,
            <>
              <p>(i) Reicht ein x ∈ ℕ mit x² &gt; 20. Probiere: x = 5 → 25 &gt; 20 ✓.</p>
              <p>(ii) Gesucht ein x, sodass x + y = y für <span className="hint-em">jedes</span> y. Welche Zahl ändert beim Addieren nichts?</p>
            </>,
            <>
              <p>(i) x = 5 → 25 &gt; 20 ✓ (auch 6, 7, …). Also wahr.</p>
              <p>(ii) x = 0 → 0 + y = y für alle y ✓. Also wahr.</p>
            </>,
            <>
              <p>Bei ∃ genügt EIN Beispiel — man muss nicht alle x prüfen.</p>
              <p>In (ii) erst x festlegen, dann muss es für alle y klappen — das <span className="hint-em">neutrale Element der Addition</span> x = 0 leistet das.</p>
            </>,
            <>
              <p>Welche reelle Zahl lässt als Summand jedes y unverändert? (Die 0.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)  wahr.  z. B. '}<M>{'x = 5 \\in \\mathbb{N}'}</M>{' mit '}<M>{'x^2 = 25 > 20'}</M>{'.\n'}
              {'(ii) wahr.  Wähle '}<M>{'x = 0'}</M>{': dann '}<M>{'0 + y = y'}</M>{' für alle '}<M>{'y \\in \\mathbb{R}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: '[2P] Verneinen Sie die folgende Aussage:  ∃x ∈ ℝ : x² ≤ 5',
          hint: h(
            <>
              <p><span className="hint-em">Negation von Quantoren</span>: aus ∃ wird ∀, aus ∀ wird ∃, und die innere Aussage wird ebenfalls verneint. Kurz: „¬∃x : P(x)" ⇔ „∀x : ¬P(x)".</p>
            </>,
            <>
              <p>Schritt 1: ∃ → ∀. Schritt 2: die Bedingung x² ≤ 5 verneinen. Das Gegenteil von „≤" ist „&gt;" (nicht „≥", denn = gehört zur ursprünglichen Aussage).</p>
            </>,
            <>
              <p>¬(∃x ∈ ℝ : x² ≤ 5) = ∀x ∈ ℝ : x² &gt; 5.</p>
            </>,
            <>
              <p>Häufiger Fehler: x² ≤ 5 wird zu x² &lt; 5 verneint. Falsch — die <span className="hint-em">Grenze selbst</span> (x² = 5) gehört zur Verneinung dazu, also x² &gt; 5.</p>
              <p>Die Grundmenge (x ∈ ℝ) bleibt beim Negieren <span className="hint-em">unverändert</span>.</p>
            </>,
            <>
              <p>Was ist das Gegenteil von „≤ 5"? (&gt; 5, nicht ≥ 5.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'\\forall x \\in \\mathbb{R} : x^2 > 5'}</M>{'\n\n(∃ → ∀, und „'}<M>{'\\le 5'}</M>{'" wird zu „'}<M>{'> 5'}</M>{'".)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 2 · Vollständige Induktion ───────────────────────────────────
    {
      id: 'pkc2',
      nr: 2,
      title: 'Vollständige Induktion (8P)',
      referenz: ['vollstaendige-induktion', 'summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit Hilfe vollständiger Induktion, dass gilt:\n\n'}
              <M>{'\\sum_{i=1}^{n} i = 1+2+3+\\dots+n = \\frac{n(n+1)}{2} \\qquad \\forall n \\ge 1.'}</M>
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Vollständige Induktion</span> beweist eine Aussage A(n) für alle n ≥ 1 in zwei Schritten: <span className="hint-em">Induktionsanfang</span> (A(1) prüfen) und <span className="hint-em">Induktionsschritt</span> (aus A(n) folgt A(n+1)).</p>
              <p>Behauptet wird die berühmte <span className="hint-em">Gauß-Summe</span>: die Summe der ersten n Zahlen ist n(n+1)/2.</p>
            </>,
            <>
              <p><span className="hint-em">IA (n=1):</span> linke Seite = 1, rechte Seite = 1·2/2 = 1. ✓</p>
              <p><span className="hint-em">IV:</span> Annahme, für ein festes n gelte Σ = n(n+1)/2.</p>
              <p><span className="hint-em">IS (n → n+1):</span> spalte den letzten Summanden ab: Σ_{'{i=1}'}^{'{n+1}'} = Σ_{'{i=1}'}^{'{n}'} + (n+1). Setze die IV ein und forme zu (n+1)(n+2)/2 um.</p>
            </>,
            <>
              <p>Σ_{'{i=1}'}^{'{n+1}'} i = n(n+1)/2 + (n+1) = (n(n+1) + 2(n+1))/2 = (n+1)(n+2)/2. Das ist die Behauptung für n+1. ∎</p>
            </>,
            <>
              <p>Den neuen Summanden (n+1) <span className="hint-em">ausklammern</span>: n(n+1)/2 + (n+1) = (n+1)·(n/2 + 1) = (n+1)(n+2)/2.</p>
              <p>Die IV muss <span className="hint-em">verwendet</span> werden (dort, wo du n(n+1)/2 einsetzt) — sonst ist es kein Induktionsbeweis.</p>
            </>,
            <>
              <p>Was ergibt n(n+1)/2 + (n+1)? ((n+1)(n+2)/2 — genau die Formel für n+1.)</p>
            </>,
          ),
          solution: (
            <>
              {'Behauptung A(n):  '}<M>{'\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'}</M>{'  für alle '}<M>{'n \\ge 1'}</M>{'.\n\n'}
              {'Induktionsanfang (n = 1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{1} i = 1 = \\frac{1\\cdot 2}{2}'}</M>{'   ✓\n\n'}
              {'Induktionsvoraussetzung (IV):\n'}
              {'  Für ein festes '}<M>{'n \\ge 1'}</M>{' gelte  '}<M>{'\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}'}</M>{'.\n\n'}
              {'Induktionsschritt (n → n+1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{n+1} i = \\sum_{i=1}^{n} i + (n+1)'}</M>{'\n'}
              {'  '}<M>{'= \\frac{n(n+1)}{2} + (n+1)'}</M>{'   (IV eingesetzt)\n'}
              {'  '}<M>{'= \\frac{n(n+1) + 2(n+1)}{2} = \\frac{(n+1)(n+2)}{2}'}</M>{'\n\n'}
              {'Damit gilt A(n+1). Nach dem Prinzip der vollständigen Induktion gilt A(n) für alle '}<M>{'n \\ge 1'}</M>{'.  ∎'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 3 · Digitale Logik ───────────────────────────────────────────
    {
      id: 'pkc3',
      nr: 3,
      title: 'Digitale Logik (8P)',
      referenz: ['logik-aequivalenzen', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Vereinfachen Sie und geben Sie stets die zugrundeliegende Regel der Booleschen Algebra an:\n\n'}
              <M>{'\\overline{a \\land \\bar a} \\lor b'}</M>
            </>
          ),
          hint: h(
            <>
              <p>In der <span className="hint-em">Booleschen Algebra</span> rechnet man mit 0 (falsch) und 1 (wahr). ∨ = ODER, ∧ = UND, der Überstrich = Negation (NICHT). ¬ bindet stärker als ∧/∨.</p>
              <p>Gemeint ist <M>{'\\overline{a \\land \\bar a} \\lor b'}</M> — erst die Klammer unter dem Überstrich vereinfachen.</p>
            </>,
            <>
              <p>Schritt 1: <M>{'a \\land \\bar a = 0'}</M> (<span className="hint-em">Komplementgesetz</span>: eine Aussage UND ihr Gegenteil ist immer falsch).</p>
              <p>Schritt 2: <M>{'\\overline{0} = 1'}</M> (Negation von falsch).</p>
              <p>Schritt 3: <M>{'1 \\lor b = 1'}</M> (<span className="hint-em">Dominanzgesetz</span>: ODER mit 1 ergibt immer 1).</p>
            </>,
            <>
              <p><M>{'\\overline{a \\land \\bar a} \\lor b = \\overline{0} \\lor b = 1 \\lor b = 1'}</M>.</p>
            </>,
            <>
              <p>Überstrich-Reichweite beachten: er steht über der <span className="hint-em">ganzen</span> Klammer a ∧ ā, nicht nur über a.</p>
              <p>1 ∨ b ist 1 (nicht b). Verwechslung mit dem Neutralelement 0 ∨ b = b vermeiden.</p>
            </>,
            <>
              <p>Was ergibt a ∧ ā stets? (0.) Und 1 ∨ b? (1.)</p>
            </>,
          ),
          solution: (
            <>
              {'  '}<M>{'\\overline{a \\land \\bar a} \\lor b'}</M>{'\n'}
              {'  '}<M>{'= \\overline{0} \\lor b'}</M>{'    | Komplementgesetz:  '}<M>{'a \\land \\bar a = 0'}</M>{'\n'}
              {'  '}<M>{'= 1 \\lor b'}</M>{'    | Negation:  '}<M>{'\\overline{0} = 1'}</M>{'\n'}
              {'  '}<M>{'= 1'}</M>{'    | Dominanzgesetz:  '}<M>{'1 \\lor b = 1'}</M>{'\n\n'}
              {'Ergebnis:  '}<M>{'1'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[4P] Vereinfachen Sie und geben Sie die Regel an:\n\n'}
              <M>{'(a \\land 0) \\lor b'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Hier tauchen die <span className="hint-em">Konstanten</span> 0 und 1 auf. Für sie gelten feste Rechenregeln, egal was a und b sind.</p>
            </>,
            <>
              <p>Schritt 1: <M>{'a \\land 0 = 0'}</M> (<span className="hint-em">Dominanz-/Nullgesetz</span>: UND mit 0 ergibt immer 0).</p>
              <p>Schritt 2: <M>{'0 \\lor b = b'}</M> (<span className="hint-em">Neutralelement</span> der Disjunktion: ODER mit 0 lässt b unverändert).</p>
            </>,
            <>
              <p><M>{'(a \\land 0) \\lor b = 0 \\lor b = b'}</M>.</p>
            </>,
            <>
              <p>a ∧ 0 = 0 (nicht a!) — 0 „dominiert" das UND. Erst danach kürzt 0 ∨ b zu b.</p>
              <p>Nicht mit a ∨ 0 = a durcheinanderbringen — das ist eine andere Konstellation.</p>
            </>,
            <>
              <p>Was ergibt „irgendetwas ∧ 0"? (Immer 0.) Und 0 ∨ b? (b.)</p>
            </>,
          ),
          solution: (
            <>
              {'  '}<M>{'(a \\land 0) \\lor b'}</M>{'\n'}
              {'  '}<M>{'= 0 \\lor b'}</M>{'    | Dominanz-/Nullgesetz:  '}<M>{'a \\land 0 = 0'}</M>{'\n'}
              {'  '}<M>{'= b'}</M>{'    | Neutralelement:  '}<M>{'0 \\lor b = b'}</M>{'\n\n'}
              {'Ergebnis:  '}<M>{'b'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 4 · Relationen ───────────────────────────────────────────────
    {
      id: 'pkc4',
      nr: 4,
      title: 'Relationen (7P)',
      referenz: ['relationen', 'abbildungen-grundbegriffe', 'funktionen-eigenschaften'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            '[4P] Gegeben sei die binäre Relation\nR ⊆ {1,2,3} × {5,6,7,8} = {(1,5), (2,6), (3,6), (2,8)}.\n\nGeben Sie jeweils ohne Begründung an, ob diese Relation linkstotal, rechtstotal, linkseindeutig und rechtseindeutig ist.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Relation</span> R ⊆ A × B ist eine Menge von Paaren (a,b). Hier ist die Ausgangsmenge A = {'{1,2,3}'}, die Zielmenge B = {'{5,6,7,8}'}.</p>
              <ul>
                <li><span className="hint-em">linkstotal</span>: jedes a ∈ A kommt in mindestens einem Paar vor.</li>
                <li><span className="hint-em">rechtstotal</span>: jedes b ∈ B kommt in mindestens einem Paar vor.</li>
                <li><span className="hint-em">linkseindeutig</span>: jedes b ∈ B kommt in höchstens einem Paar vor.</li>
                <li><span className="hint-em">rechtseindeutig</span>: jedes a ∈ A kommt in höchstens einem Paar vor.</li>
              </ul>
            </>,
            <>
              <p>Zähle für jedes Element, in wie vielen Paaren es links bzw. rechts auftaucht.</p>
              <p>Links (A): 1 einmal, 2 zweimal, 3 einmal. Rechts (B): 5 einmal, 6 zweimal, 7 keinmal, 8 einmal.</p>
            </>,
            <>
              <p><span className="hint-em">linkstotal?</span> 1, 2, 3 alle getroffen → JA.</p>
              <p><span className="hint-em">rechtstotal?</span> 7 fehlt → NEIN.</p>
              <p><span className="hint-em">linkseindeutig?</span> 6 kommt zweimal rechts vor ((2,6),(3,6)) → NEIN.</p>
              <p><span className="hint-em">rechtseindeutig?</span> 2 kommt zweimal links vor ((2,6),(2,8)) → NEIN.</p>
            </>,
            <>
              <p>„total" = mindestens eins, „eindeutig" = höchstens eins. „links…" bezieht sich auf die A-Seite, „rechts…" auf die B-Seite — am sichersten über die Definitionen oben gehen.</p>
            </>,
            <>
              <p>Wird 7 ∈ B von irgendeinem Paar getroffen? (Nein → nicht rechtstotal.) Und ist jedes a ∈ A getroffen? (Ja → linkstotal.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'A = \\{1,2,3\\},\\quad B = \\{5,6,7,8\\}'}</M>{'\n\n'}
              {'linkstotal:      JA    — 1, 2, 3 haben je (mindestens) ein Bild.\n'}
              {'rechtstotal:     NEIN  — '}<M>{'7 \\in B'}</M>{' wird nicht getroffen.\n'}
              {'linkseindeutig:  NEIN  — 6 wird von 2 und 3 getroffen '}<M>{'((2,6),(3,6))'}</M>{'.\n'}
              {'rechtseindeutig: NEIN  — 2 hat zwei Bilder: '}<M>{'(2,6)'}</M>{' und '}<M>{'(2,8)'}</M>{'.'}
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
              <p>Prüfe die beiden nötigen Eigenschaften aus (a): linkstotal? (ja) rechtseindeutig? (nein)</p>
              <p>Schon eine Verletzung genügt, damit R keine Funktion ist.</p>
            </>,
            <>
              <p>R ist zwar linkstotal, aber <span className="hint-em">nicht rechtseindeutig</span> (2 hat zwei Bilder). Also <span className="hint-em">keine Funktion</span>.</p>
            </>,
            <>
              <p>„Genau ein Bild" heißt: mindestens eins (linkstotal ✓) UND höchstens eins (rechtseindeutig ✗). Ein einziges a mit zwei Bildern reicht, um die Funktions-Eigenschaft zu zerstören.</p>
            </>,
            <>
              <p>Hat in einer Funktion jedes a genau ein Bild? Erfüllt R das für a = 2? (Nein, zwei Bilder.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein, R ist keine Funktion.\n\n'}
              {'Eine Funktion '}<M>{'A \\to B'}</M>{' muss linkstotal und rechtseindeutig sein\n'}
              {'(jedes '}<M>{'a \\in A'}</M>{' hat genau ein Bild). R ist zwar linkstotal, aber\n'}
              {'NICHT rechtseindeutig: '}<M>{'2 \\in A'}</M>{' hat zwei Bilder '}<M>{'(2,6)'}</M>{' und '}<M>{'(2,8)'}</M>{'.\n\n'}
              {'Diese eine Verletzung genügt schon.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 5 · Funktionen und ihre Eigenschaften ────────────────────────
    {
      id: 'pkc5',
      nr: 5,
      title: 'Funktionen und ihre Eigenschaften (7P)',
      referenz: ['funktionen-eigenschaften', 'bild-urbild', 'komposition-umkehr'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'In dieser Aufgabe sind keine Begründungen verlangt. Betrachten Sie die Funktion\n\n'}
              <M>{'f:[0,\\infty)\\to[0,\\infty),\\quad x\\mapsto\\begin{cases}2,& x\\in[0,1],\\\\ x^2+1,& x>1.\\end{cases}'}</M>
              {'\n\n[2P] Skizzieren Sie den Funktionsgraphen von f.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">abschnittsweise definierte</span> Funktion hat je nach x-Bereich verschiedene Vorschriften. Zeichne jeden Abschnitt einzeln.</p>
            </>,
            <>
              <p>Abschnitt 1 (0 ≤ x ≤ 1): f(x) = 2, eine <span className="hint-em">waagerechte Strecke</span> auf Höhe 2.</p>
              <p>Abschnitt 2 (x &gt; 1): f(x) = x²+1, ein <span className="hint-em">nach oben verschobener Parabelast</span>, beginnend knapp über (1,2).</p>
            </>,
            <>
              <p>Prüfe den Übergang bei x = 1: linker Ast liefert 2, x²+1 liefert bei x = 1 ebenfalls 2 → der Graph geht <span className="hint-em">lückenlos</span> ineinander über (kein Sprung).</p>
            </>,
            <>
              <p>Nur den Parabelteil für x &gt; 1 zeichnen, um 1 nach oben verschoben (Scheitel läge bei (0,1)). Definitionsbereich [0,∞): links bei x = 0 beginnen.</p>
            </>,
            <>
              <p>Springt der Graph bei x = 1? (Nein, beide Teile treffen sich bei (1,2).)</p>
            </>,
          ),
          solution: (
            <>
              {'Waagerechte Strecke auf Höhe '}<M>{'y = 2'}</M>{' für '}<M>{'0 \\le x \\le 1'}</M>{',\n'}
              {'danach der Parabelast '}<M>{'y = x^2+1'}</M>{' für '}<M>{'x > 1'}</M>{'.\n'}
              {'Bei '}<M>{'(1,2)'}</M>{' gehen beide Teile stetig ineinander über.'}
            </>
          ),
          abbildung: (
            <FunctionPlot
              data={{
                series: [
                  { f: () => 2, from: 0, to: 1, label: 'f auf [0,1]' },
                  { f: (x) => x * x + 1, from: 1, to: 2, color: '#4d9fff' },
                ],
                markers: [{ x: 1, y: 2, filled: true, color: '#4d9fff' }],
                xMin: 0,
                xMax: 2,
                yMin: 0,
                yMax: 6,
                caption: 'f(x) = 2 auf [0,1], danach x²+1',
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
              <p>Suche zwei verschiedene x mit gleichem f-Wert. Auf [0,1] ist f konstant 2 …</p>
            </>,
            <>
              <p>f(0) = f(1) = 2, aber 0 ≠ 1 → nicht injektiv.</p>
            </>,
            <>
              <p>Der konstante Abschnitt zerstört die Injektivität — auf [0,1] wird der Wert 2 unendlich oft angenommen.</p>
            </>,
            <>
              <p>Gibt es zwei verschiedene x mit demselben Bild? (Ja, alle x ∈ [0,1] → 2.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein.  Auf '}<M>{'[0,1]'}</M>{' ist f konstant 2, z. B. '}<M>{'f(0) = f(1) = 2'}</M>{' mit '}<M>{'0 \\ne 1'}</M>{'.\n'}
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
              <p>Auf [0,1]: nur der Wert 2. Für x &gt; 1: x²+1 &gt; 2, also alle Werte in (2,∞).</p>
              <p>Wertebereich = {'{2}'} ∪ (2,∞) = [2,∞).</p>
            </>,
            <>
              <p>Zielmenge ist [0,∞), aber die Werte in [0,2) werden nie erreicht (z. B. 0 oder 1). → nicht surjektiv.</p>
            </>,
            <>
              <p>Surjektivität bezieht sich auf die <span className="hint-em">angegebene</span> Zielmenge [0,∞). Der Wert 0 ∈ [0,∞) hat kein Urbild.</p>
            </>,
            <>
              <p>Wird der Zielwert 0 (oder 1) von einem x getroffen? (Nein — f(x) ≥ 2 überall.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein.  Der Wertebereich ist '}<M>{'[2,\\infty)'}</M>{' (auf '}<M>{'[0,1]'}</M>{' nur der Wert 2, für '}<M>{'x>1'}</M>{' alle Werte '}<M>{'>2'}</M>{').\n'}
              {'Werte in '}<M>{'[0,2)'}</M>{' — etwa 0 oder 1 — liegen in der Zielmenge '}<M>{'[0,\\infty)'}</M>{', werden aber nie angenommen.'}
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
              <p>Teil [0,1]: f ≡ 2 → {'{2}'}. Teil (1,2]: f = x²+1 → (1²+1, 2²+1] = (2, 5].</p>
            </>,
            <>
              <p>{'{2}'} ∪ (2,5] = [2,5]. Also f([0,2]) = [2,5].</p>
            </>,
            <>
              <p>Randpunkt x = 2 gehört dazu → 2²+1 = 5 ist im Bild, daher „5]" (eckig). Die 2 kommt aus dem konstanten Teil und schließt die Lücke bei 2.</p>
            </>,
            <>
              <p>Größter Wert auf [0,2]? (f(2) = 5.) Kleinster? (2.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'f([0,1]) = \\{2\\}'}</M>{'   und   '}<M>{'f((1,2]) = (2, 5]'}</M>{'.\n'}
              <M>{'f([0,2]) = \\{2\\} \\cup (2,5] = [2, 5]'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'e',
          text: <>{'[2P] Geben Sie f⁻¹([2,5]) an, also das Urbild des Intervalls [2,5] unter f.'}</>,
          hint: h(
            <>
              <p>Das <span className="hint-em">Urbild</span> f⁻¹([2,5]) sammelt <span className="hint-em">alle</span> x aus dem Definitionsbereich mit f(x) ∈ [2,5]. (Das setzt keine Umkehrfunktion voraus!)</p>
            </>,
            <>
              <p>Auf [0,1]: f(x) = 2 ∈ [2,5] ✓ → ganz [0,1].</p>
              <p>Für x &gt; 1: f(x) = x²+1. Löse 2 ≤ x²+1 ≤ 5. Untere Grenze ist wegen x &gt; 1 automatisch; x²+1 ≤ 5 ⇔ x² ≤ 4 ⇔ x ≤ 2. → (1, 2].</p>
            </>,
            <>
              <p>Vereinige: [0,1] ∪ (1, 2] = [0, 2]. Also f⁻¹([2,5]) = [0, 2].</p>
            </>,
            <>
              <p>Urbild ≠ Umkehrfunktion: f ist nicht injektiv, trotzdem ist das Urbild wohldefiniert (Lösungsmenge der Ungleichung). Nur x aus [0,∞) zulassen.</p>
            </>,
            <>
              <p>Für welche x &gt; 1 ist x²+1 ≤ 5? (1 &lt; x ≤ 2.) Und der konstante Teil [0,1]? (komplett dabei.)</p>
            </>,
          ),
          solution: (
            <>
              {'Gesucht: alle '}<M>{'x \\ge 0'}</M>{' mit '}<M>{'2 \\le f(x) \\le 5'}</M>{'.\n\n'}
              {'• '}<M>{'x \\in [0,1]'}</M>{':  '}<M>{'f(x) = 2 \\in [2,5]'}</M>{'  →  ganz '}<M>{'[0,1]'}</M>{'.\n'}
              {'• '}<M>{'x > 1'}</M>{':  '}<M>{'f(x) = x^2+1'}</M>{', und '}<M>{'2 \\le x^2+1 \\le 5 \\Leftrightarrow x^2 \\le 4 \\Leftrightarrow x \\le 2'}</M>{'  →  '}<M>{'(1, 2]'}</M>{'.\n\n'}
              <M>{'f^{-1}([2,5]) = [0,1] \\cup (1, 2] = [0, 2]'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 6 · Kombinatorik ─────────────────────────────────────────────
    {
      id: 'pkc6',
      nr: 6,
      title: 'Kombinatorik (6P)',
      referenz: ['kombinatorik', 'binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            '[3P] Führen Sie jede Frage auf ein Urnenmodell zurück und erläutern Sie dies kurz!\n\nAngenommen Sie wollen einen Eisbecher mit 4 Kugeln gestalten, und es stehen 6 Sorten in unbeschränkter Menge zur Verfügung. Auf wie viele verschiedene Arten ist das möglich, wenn die Anordnung der Kugeln egal ist?',
          hint: h(
            <>
              <p>Das <span className="hint-em">Urnenmodell</span> beschreibt Auswahlen über zwei Fragen: (1) Ist die <span className="hint-em">Reihenfolge</span> wichtig? (2) Darf man <span className="hint-em">zurücklegen</span> (Elemente mehrfach)? Daraus ergeben sich vier Formeln.</p>
              <p>Hier: n = 6 Sorten, man zieht k = 4 Kugeln.</p>
            </>,
            <>
              <p>„Anordnung egal" → Reihenfolge <span className="hint-em">unwichtig</span>. „unbeschränkte Menge" → eine Sorte darf mehrfach vorkommen → <span className="hint-em">mit Zurücklegen</span>.</p>
              <p>Modell: <span className="hint-em">Ziehen mit Zurücklegen, ohne Reihenfolge</span> → Kombination mit Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n+k-1}{k}=\\binom{6+4-1}{4}=\\binom{9}{4}'}</M>.</p>
              <p><M>{'\\binom{9}{4}=\\dfrac{9!}{4!\\,5!}=126'}</M>.</p>
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
              {'(Kombination mit Wiederholung) — '}<M>{'n = 6'}</M>{' Sorten, '}<M>{'k = 4'}</M>{' Kugeln.\n\n'}
              {'  '}<M>{'\\binom{n+k-1}{k} = \\binom{9}{4} = \\frac{9!}{4!\\,5!} = 126'}</M>{'\n\n'}
              {'Es gibt 126 verschiedene Eisbecher.'}
            </>
          ),
        },
        {
          letter: 'b',
          text:
            '[3P] Wie viele Möglichkeiten gäbe es, wenn von jeder Sorte nur eine Kugel gewählt werden dürfte? Die Anordnung ist weiterhin egal!',
          hint: h(
            <>
              <p>Wieder Urnenmodell mit n = 6, k = 4. Es ändert sich nur, ob man Sorten mehrfach nehmen darf.</p>
            </>,
            <>
              <p>„von jeder Sorte nur eine Kugel" → <span className="hint-em">ohne Zurücklegen</span>. „Anordnung egal" → ohne Reihenfolge.</p>
              <p>Modell: <span className="hint-em">Ziehen ohne Zurücklegen, ohne Reihenfolge</span> → Kombination ohne Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n}{k}=\\binom{6}{4}=\\dfrac{6!}{4!\\,2!}=15'}</M>.</p>
              <p>(Praktisch: aus 6 Sorten 4 auswählen = 2 weglassen, also <M>{'\\binom{6}{2}=15'}</M>.)</p>
            </>,
            <>
              <p>Jetzt C(n,k), nicht C(n+k−1,k) — ohne Wiederholung fällt der „+k−1"-Zuschlag weg.</p>
              <p>C(6,4) = C(6,2) nutzen (Symmetrie), das rechnet sich leichter.</p>
            </>,
            <>
              <p>Reihenfolge egal + jede Sorte höchstens einmal → welche Formel? (Kombination ohne Wiederholung, C(n,k).)</p>
            </>,
          ),
          solution: (
            <>
              {'Urnenmodell: Ziehen ohne Zurücklegen, ohne Reihenfolge\n'}
              {'(Kombination ohne Wiederholung) — '}<M>{'n = 6'}</M>{', '}<M>{'k = 4'}</M>{'.\n\n'}
              {'  '}<M>{'\\binom{6}{4} = \\frac{6!}{4!\\,2!} = 15 = \\binom{6}{2}'}</M>{'   (Symmetrie)\n\n'}
              {'Es gibt 15 verschiedene Eisbecher.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 7 · Euklid ───────────────────────────────────────────────────
    {
      id: 'pkc7',
      nr: 7,
      title: 'Der Algorithmus des Euklid (5P)',
      referenz: ['zahlenbereiche'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            'Bestimmen Sie den ggT von 180 und 48 mit dem Algorithmus von Euklid, unter Angabe aller Zwischenergebnisse!',
          hint: h(
            <>
              <p>Der <span className="hint-em">euklidische Algorithmus</span> bestimmt den größten gemeinsamen Teiler (ggT) durch wiederholte <span className="hint-em">Division mit Rest</span>: teile die größere Zahl durch die kleinere, dann die kleinere durch den Rest, usw.</p>
              <p>Grundidee: ggT(a,b) = ggT(b, a mod b).</p>
            </>,
            <>
              <p>Schreibe jeden Schritt als a = q·b + r. Ersetze dann (a,b) durch (b,r) und wiederhole, bis der Rest 0 ist. Der <span className="hint-em">letzte Rest ≠ 0</span> ist der ggT.</p>
            </>,
            <>
              <p>180 = 3·48 + 36</p>
              <p>48 = 1·36 + 12</p>
              <p>36 = 3·12 + 0</p>
              <p>Rest 0 erreicht → ggT = letzter Rest ≠ 0 = 12.</p>
            </>,
            <>
              <p>Rest richtig berechnen: 180 − 3·48 = 180 − 144 = 36. 36 = 3·12 geht genau auf (Rest 0).</p>
              <p>Der ggT ist der letzte Rest <span className="hint-em">ungleich</span> 0, also 12 — nicht die 0.</p>
            </>,
            <>
              <p>Teilt 12 sowohl 180 (= 15·12) als auch 48 (= 4·12)? (Ja → 12 ist der größte gemeinsame Teiler.)</p>
            </>,
          ),
          solution: (
            <>
              {'Euklid (Division mit Rest, bis Rest 0):\n\n'}
              {'  '}<M>{'180 = 3 \\cdot 48 + 36'}</M>{'\n'}
              {'  '}<M>{'48 = 1 \\cdot 36 + 12'}</M>{'\n'}
              {'  '}<M>{'36 = 3 \\cdot 12 + 0'}</M>{'\n\n'}
              {'Letzter Rest ≠ 0 ist 12  →  '}<M>{'\\gcd(180,\\,48) = 12'}</M>{'.\n'}
              {'(Probe: '}<M>{'180 = 15\\cdot 12'}</M>{', '}<M>{'48 = 4\\cdot 12'}</M>{'.)'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 8 · Folgen und Konvergenz ────────────────────────────────────
    {
      id: 'pkc8',
      nr: 8,
      title: 'Folgen und Konvergenz (8P)',
      referenz: ['folgen-grundbegriffe', 'folgen-konvergenz', 'sandwich-cauchy', 'wichtige-grenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[3P] In dieser Teilaufgabe sind keine Begründungen verlangt. Geben Sie zu der Folge\n\n'}
              {'(xₙ)_{n∈ℕ} = (1, −2, 3, −4, 5, −6, 7, …)\n\n'}
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
              <p><span className="hint-em">Betrag</span>: 1, 2, 3, 4, 5, … das ist n+1 (da n bei 0 startet).</p>
              <p>Zusammen: xₙ = (−1)ⁿ · (n+1).</p>
            </>,
            <>
              <p>Probe: n=0 → +1 ✓, n=1 → −2 ✓, n=2 → +3 ✓, n=3 → −4 ✓, n=4 → +5 ✓.</p>
            </>,
            <>
              <p>Bei ℕ ab 0 startet der Index bei n = 0 — der Betrag ist daher n+1, nicht n (sonst käme bei n=0 der Wert 0 statt 1 heraus).</p>
              <p>(−1)ⁿ liefert für gerades n „+", für ungerades „−" — genau das gewünschte Wechselmuster.</p>
            </>,
            <>
              <p>Welche Formel liefert 1,2,3,4,… für die Beträge, wenn n bei 0 beginnt? (n+1.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'x_n = (-1)^n \\cdot (n+1), \\quad n \\in \\mathbb{N}'}</M>{'\n\n'}
              {'Vorzeichen +,−,+,−,… = '}<M>{'(-1)^n'}</M>{'  (n=0 → +),\n'}
              {'Beträge 1,2,3,4,5,… = '}<M>{'n+1'}</M>{'.\n\n'}
              {'Probe: '}<M>{'x_0=1,\\ x_1=-2,\\ x_2=3,\\ x_3=-4,\\ x_4=5,\\ x_5=-6, \\dots'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[5P] Bestimmen Sie den folgenden Grenzwert bzw. uneigentlichen Grenzwert:\n\n'}
              <M>{'\\lim_{n\\to\\infty}\\ \\cos(n)\\,\\sin\\!\\left(\\tfrac{1}{n}\\right)'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Das Produkt besteht aus zwei Faktoren mit sehr unterschiedlichem Verhalten. Ein <span className="hint-em">beschränkter</span> Faktor mal einer <span className="hint-em">Nullfolge</span> ergibt wieder eine Nullfolge.</p>
              <p>Nützlich ist das <span className="hint-em">Sandwich-/Einschnürungskriterium</span>: liegt |aₙ| zwischen 0 und einer Nullfolge, so gilt aₙ → 0.</p>
            </>,
            <>
              <p>Faktor 1: cos(n) ist für alle n <span className="hint-em">beschränkt</span>: |cos(n)| ≤ 1 (konvergiert selbst nicht).</p>
              <p>Faktor 2: 1/n → 0, also sin(1/n) → sin(0) = 0. Sogar |sin(1/n)| ≤ 1/n.</p>
            </>,
            <>
              <p>Abschätzung: 0 ≤ |cos(n)·sin(1/n)| ≤ 1·(1/n) = 1/n → 0.</p>
              <p>Mit dem Sandwichsatz folgt cos(n)·sin(1/n) → 0. Der Grenzwert ist <span className="hint-em">0</span>.</p>
            </>,
            <>
              <p>Nicht argumentieren „cos(n) hat keinen Grenzwert, also existiert das Produkt nicht" — der beschränkte Faktor wird durch die Nullfolge „erdrückt".</p>
              <p>|sin t| ≤ |t| verwenden (hier |sin(1/n)| ≤ 1/n), das liefert die saubere obere Schranke.</p>
            </>,
            <>
              <p>Beschränkt · Nullfolge = ? (Nullfolge, Grenzwert 0.)</p>
            </>,
          ),
          solution: (
            <>
              {'Es gilt '}<M>{'|\\cos(n)| \\le 1'}</M>{' (beschränkt) und '}<M>{'\\tfrac{1}{n} \\to 0'}</M>{', also '}<M>{'\\sin\\!\\left(\\tfrac{1}{n}\\right) \\to 0'}</M>{'.\n\n'}
              {'Abschätzung (Sandwichsatz):\n'}
              {'  '}<M>{'0 \\le \\left|\\cos(n)\\,\\sin\\!\\left(\\tfrac{1}{n}\\right)\\right| \\le \\left|\\sin\\!\\left(\\tfrac{1}{n}\\right)\\right| \\le \\tfrac{1}{n} \\to 0'}</M>{'\n\n'}
              {'Da die Beträge gegen 0 gehen, folgt\n'}
              {'  '}<M>{'\\lim_{n\\to\\infty} \\cos(n)\\,\\sin\\!\\left(\\tfrac{1}{n}\\right) = 0'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 9 · Reihen ───────────────────────────────────────────────────
    {
      id: 'pkc9',
      nr: 9,
      title: 'Reihen (10P)',
      referenz: ['reihen-konvergenz', 'geometrische-summenformel'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[5P] Für welche x ∈ ℝ konvergiert die Reihe  '}
              <M>{'\\sum_{k=0}^{\\infty}\\left(\\tfrac{x^2}{9}\\right)^{k}'}</M>{'  ?'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">geometrische Reihe</span> Σ qᵏ konvergiert genau dann, wenn der <span className="hint-em">Quotient</span> |q| &lt; 1 ist (dann mit Summe 1/(1−q)).</p>
              <p>Hier ist der Ausdruck in der Klammer bereits die k-te Potenz — also q = x²/9.</p>
            </>,
            <>
              <p>Bedingung |q| &lt; 1: |x²/9| &lt; 1. Da x² ≥ 0, ist der Betrag überflüssig: x²/9 &lt; 1.</p>
              <p>Nach x auflösen: x² &lt; 9 ⇔ |x| &lt; 3 ⇔ −3 &lt; x &lt; 3.</p>
            </>,
            <>
              <p>Die Reihe konvergiert genau für x ∈ (−3, 3). (Summe dann 1/(1 − x²/9).)</p>
            </>,
            <>
              <p>Randfälle x = ±3 gehören <span className="hint-em">nicht</span> dazu: dort ist q = 1, die Reihe Σ 1ᵏ divergiert.</p>
              <p>Aus x² &lt; 9 folgt |x| &lt; 3, also <span className="hint-em">beide</span> Vorzeichen: −3 &lt; x &lt; 3.</p>
            </>,
            <>
              <p>Für welchen Quotienten q konvergiert Σqᵏ? (|q| &lt; 1.) Was heißt x²/9 &lt; 1 für x? (|x| &lt; 3.)</p>
            </>,
          ),
          solution: (
            <>
              {'Geometrische Reihe mit '}<M>{'q = \\tfrac{x^2}{9}'}</M>{'.\n'}
              {'Konvergenz  '}<M>{'\\Leftrightarrow |q| < 1 \\Leftrightarrow \\tfrac{x^2}{9} < 1 \\Leftrightarrow x^2 < 9 \\Leftrightarrow |x| < 3'}</M>{'.\n\n'}
              {'Die Reihe konvergiert genau für  '}<M>{'x \\in (-3,\\,3)'}</M>{'.\n'}
              {'(Für '}<M>{'x = \\pm 3'}</M>{' ist '}<M>{'q = 1'}</M>{' → Divergenz.)  Summe: '}<M>{'\\dfrac{1}{1 - \\frac{x^2}{9}}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[5P] Untersuchen Sie die Reihe  '}
              <M>{'\\sum_{k=1}^{\\infty}\\frac{k^2}{2^{k}}'}</M>{'  auf Konvergenz.'}
            </>
          ),
          hint: h(
            <>
              <p>Bei Reihen mit Potenzen wie 2ᵏ im Nenner ist das <span className="hint-em">Quotientenkriterium</span> ideal: bilde L = lim |a_{'{k+1}'}/aₖ|. Ist L &lt; 1, konvergiert die Reihe (absolut); L &gt; 1 → Divergenz.</p>
              <p>Hier aₖ = k²/2ᵏ &gt; 0.</p>
            </>,
            <>
              <p>Quotient aufstellen und vereinfachen:</p>
              <p><M>{'\\frac{a_{k+1}}{a_k}=\\frac{(k+1)^2}{2^{k+1}}\\cdot\\frac{2^{k}}{k^2}=\\frac12\\left(\\frac{k+1}{k}\\right)^2.'}</M></p>
              <p>Grenzwert für k → ∞ bestimmen.</p>
            </>,
            <>
              <p><M>{'\\lim_{k\\to\\infty}\\frac12\\left(\\frac{k+1}{k}\\right)^2=\\frac12\\cdot 1=\\frac12<1.'}</M></p>
              <p>Nach dem Quotientenkriterium <span className="hint-em">konvergiert</span> die Reihe (sogar absolut).</p>
            </>,
            <>
              <p>Beim Kürzen 2ᵏ/2^{'{k+1}'} = ½ nicht vergessen — das liefert den Faktor ½.</p>
              <p>((k+1)/k)² → 1, nicht 0; entscheidend ist der Faktor ½, der L = ½ &lt; 1 erzwingt.</p>
            </>,
            <>
              <p>Was ist lim ½·((k+1)/k)²? (½.) Und ½ &lt; 1 bedeutet? (Konvergenz.)</p>
            </>,
          ),
          solution: (
            <>
              {'Quotientenkriterium mit '}<M>{'a_k = \\tfrac{k^2}{2^k} > 0'}</M>{':\n\n'}
              {'  '}<M>{'\\frac{a_{k+1}}{a_k} = \\frac{(k+1)^2}{2^{k+1}} \\cdot \\frac{2^k}{k^2} = \\frac12\\left(\\frac{k+1}{k}\\right)^2 \\;\\xrightarrow[k\\to\\infty]{}\\; \\frac12 < 1'}</M>{'\n\n'}
              {'Da der Grenzwert '}<M>{'\\tfrac{1}{2} < 1'}</M>{' ist, konvergiert die Reihe (absolut).'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 10 · Asymptotik, Stetigkeit ──────────────────────────────────
    {
      id: 'pkc10',
      nr: 10,
      title: 'Asymptotik, Stetigkeit (8P)',
      referenz: ['polynomdivision', 'landau-notation', 'funktionsgrenzwerte', 'stetigkeit', 'betrag-intervalle'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Sei\n\n'}
              <M>{'f:\\mathbb{R}\\setminus\\{2\\}\\to\\mathbb{R},\\quad x\\mapsto\\frac{x^3-2x^2-x+5}{x-2}.'}</M>
              {'\n\n(i) Bestimmen Sie eine asymptotische Parabel zu f.\n(ii) Geben Sie (ohne Begründung) lim_{x→∞} f(x) an.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">asymptotische Parabel</span> ist eine Parabel p(x) = ax²+bx+c, der sich f für x → ±∞ beliebig annähert (der Rest geht gegen 0). Man findet sie durch <span className="hint-em">Polynomdivision</span> des Zählers durch den Nenner.</p>
            </>,
            <>
              <p>Teile x³−2x²−x+5 durch (x−2). Das Ergebnis hat die Form p(x) + Rest/(x−2).</p>
              <p>Praktisch mit Horner (Nullstelle x = 2) auf den Koeffizienten [1, −2, −1, 5]: liefert Quotient [1, 0, −1] und Rest 3.</p>
            </>,
            <>
              <p>Also f(x) = x² − 1 + 3/(x−2).</p>
              <p>(i) Der Bruch 3/(x−2) → 0 für x → ±∞ → asymptotische Parabel p(x) = x² − 1.</p>
              <p>(ii) lim_{'{x→∞}'} f(x): dominant ist x² → +∞. Also lim = +∞ (uneigentlich).</p>
            </>,
            <>
              <p>Der führende Term ist +x³ → Quotient beginnt mit +x². Das ergibt eine <span className="hint-em">nach oben</span> geöffnete Parabel.</p>
              <p>Der Rest 3/(x−2) gehört <span className="hint-em">nicht</span> zur Parabel; er verschwindet nur asymptotisch.</p>
            </>,
            <>
              <p>Was bleibt bei der Division als ganzrationaler Anteil? (x²−1.) Wohin läuft x² für x → ∞? (+∞.)</p>
            </>,
          ),
          solution: (
            <>
              {'Polynomdivision:\n\n'}
              {'  '}<M>{'(x^3 - 2x^2 - x + 5) : (x - 2) = x^2 - 1 \\quad \\text{Rest } 3'}</M>{'\n'}
              {'  '}<M>{'\\Rightarrow\\; f(x) = x^2 - 1 + \\dfrac{3}{x-2}'}</M>{'\n\n'}
              {'(i)  Für '}<M>{'x \\to \\pm\\infty'}</M>{' gilt '}<M>{'\\tfrac{3}{x-2} \\to 0'}</M>{', also ist\n'}
              {'     die asymptotische Parabel  '}<M>{'p(x) = x^2 - 1'}</M>{'.\n\n'}
              {'(ii) '}<M>{'\\lim_{x\\to\\infty} f(x) = +\\infty'}</M>{'   (dominanter Term '}<M>{'x^2'}</M>{').'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[4P] Prüfen Sie, ob die Funktion\n\n'}
              <M>{'f:[1,\\infty)\\to\\mathbb{R},\\quad x\\mapsto|x-1|'}</M>
              {'\n\nstetig in x = 1 ist.'}
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Stetigkeit</span> in x₀ heißt: lim_{'{x→x₀}'} f(x) = f(x₀).</p>
              <p>Beachte den <span className="hint-em">Definitionsbereich [1,∞)</span>: man nähert sich der 1 nur von <span className="hint-em">rechts</span> (x ≥ 1).</p>
            </>,
            <>
              <p>Auf [1,∞) ist x−1 ≥ 0, also |x−1| = x−1. Berechne f(1) und den rechtsseitigen Grenzwert.</p>
              <p>f(1) = |1−1| = 0. lim_{'{x→1⁺}'} |x−1| = lim_{'{x→1⁺}'} (x−1) = 0.</p>
            </>,
            <>
              <p>Beide Werte sind 0, also lim_{'{x→1⁺}'} f(x) = 0 = f(1). → f ist <span className="hint-em">stetig</span> in x = 1.</p>
            </>,
            <>
              <p>Kein linksseitiger Grenzwert nötig — Werte x &lt; 1 liegen nicht im Definitionsbereich. Auf [1,∞) genügt der rechtsseitige Limes.</p>
              <p>Auf [1,∞) ist |x−1| einfach x−1; die „Knick"-Diskussion bei 1 entfällt, weil der linke Ast fehlt.</p>
            </>,
            <>
              <p>Ist lim_{'{x→1⁺}'} (x−1) = f(1)? (Ja, beide 0 → stetig.)</p>
            </>,
          ),
          solution: (
            <>
              {'Auf dem Definitionsbereich '}<M>{'[1,\\infty)'}</M>{' gilt '}<M>{'|x-1| = x-1'}</M>{' (da '}<M>{'x \\ge 1'}</M>{').\n\n'}
              {'  '}<M>{'f(1) = |1-1| = 0'}</M>{'\n'}
              {'  '}<M>{'\\lim_{x\\to 1^+} f(x) = \\lim_{x\\to 1^+} (x-1) = 0'}</M>{'\n\n'}
              {'Rechtsseitiger Grenzwert = Funktionswert = 0\n'}
              {'(Werte x < 1 liegen nicht im Definitionsbereich).\n'}
              {'⇒ f ist stetig in '}<M>{'x = 1'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 11 · Differentiation ─────────────────────────────────────────
    {
      id: 'pkc11',
      nr: 11,
      title: 'Differentiation (6P)',
      referenz: ['ableitungsregeln', 'standardableitungen', 'exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Bestimmen Sie die Ableitung der Funktionen, wobei Sie stets Regel, Zerlegung und Rechnung angeben wie in der VL besprochen!\n\n'}
              {'[3P] h(x) = exp(x³)'}
            </>
          ),
          hint: h(
            <>
              <p>Steht eine Funktion <span className="hint-em">in</span> einer anderen (Verkettung), verwendet man die <span className="hint-em">Kettenregel</span>: (u(v(x)))′ = u′(v(x)) · v′(x) — „äußere Ableitung mal innere Ableitung".</p>
              <p>exp ist die e-Funktion; ihre Besonderheit: exp′ = exp.</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: äußere Funktion u(z) = exp(z), innere Funktion v(x) = x³.</p>
              <p>Ableitungen: u′(z) = exp(z), v′(x) = 3x².</p>
            </>,
            <>
              <p>h′(x) = u′(v(x))·v′(x) = exp(x³)·3x² = 3x²·exp(x³).</p>
            </>,
            <>
              <p>Die innere Ableitung v′(x) = 3x² <span className="hint-em">nicht vergessen</span> (häufigster Fehler: nur exp(x³) hinschreiben).</p>
              <p>Der Exponent x³ bleibt im exp stehen — nur der Vorfaktor 3x² kommt hinzu.</p>
            </>,
            <>
              <p>Was ist die innere Funktion und ihre Ableitung? (x³, Ableitung 3x².) Bleibt exp(x³) erhalten? (Ja, mal 3x².)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:      Kettenregel  '}<M>{"(u\\circ v)' = u'(v(x))\\cdot v'(x)"}</M>{'\n'}
              {'Zerlegung:  äußere '}<M>{'u(z) = \\exp(z)'}</M>{', innere '}<M>{'v(x) = x^3'}</M>{';\n'}
              {'            '}<M>{"u'(z) = \\exp(z)"}</M>{',  '}<M>{"v'(x) = 3x^2"}</M>{'.\n'}
              {'Rechnung:   '}<M>{"h'(x) = \\exp(x^3) \\cdot 3x^2 = 3x^2\\,\\exp(x^3)"}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'[3P] h(x) = exp(x)·x³'}</>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Produkt</span> zweier Funktionen leitet man mit der <span className="hint-em">Produktregel</span> ab: (u·v)′ = u′·v + u·v′.</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: u(x) = exp(x), v(x) = x³.</p>
              <p>Ableitungen: u′(x) = exp(x) (e-Funktion bleibt sich selbst), v′(x) = 3x² (Potenzregel).</p>
            </>,
            <>
              <p>h′(x) = u′v + uv′ = exp(x)·x³ + exp(x)·3x² = exp(x)·(x³ + 3x²) = x²(x+3)·exp(x).</p>
            </>,
            <>
              <p>Nicht die beiden Ableitungen einfach multiplizieren — bei Produkten gilt u′v + uv′, nicht u′·v′.</p>
              <p>Am Ende exp(x) ausklammern; das ist die übliche „schöne" Form.</p>
            </>,
            <>
              <p>Wie lautet u′v + uv′ hier? (exp(x)·x³ + exp(x)·3x².) Ausgeklammert? (exp(x)(x³+3x²).)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:      Produktregel  '}<M>{"(u\\cdot v)' = u'\\cdot v + u\\cdot v'"}</M>{'\n'}
              {'Zerlegung:  '}<M>{'u(x) = \\exp(x)'}</M>{', '}<M>{'v(x) = x^3'}</M>{';\n'}
              {'            '}<M>{"u'(x) = \\exp(x)"}</M>{',  '}<M>{"v'(x) = 3x^2"}</M>{'.\n'}
              {'Rechnung:   '}<M>{"h'(x) = \\exp(x)\\,x^3 + \\exp(x)\\,3x^2"}</M>{'\n'}
              {'                  '}<M>{'= \\exp(x)\\,(x^3 + 3x^2) = x^2(x+3)\\,\\exp(x)'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 12 · Differenzierbarkeit ─────────────────────────────────────
    {
      id: 'pkc12',
      nr: 12,
      title: 'Differenzierbarkeit (6P)',
      referenz: ['differenzierbarkeit', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Begründen Sie, ob die Funktion\n\n'}
              <M>{'h(x)=\\begin{cases}x^2,& x\\le 1,\\\\[2pt] 2x-1,& x>1\\end{cases}'}</M>
              {'\n\nbei x = 1 differenzierbar ist.'}
            </>
          ),
          hint: h(
            <>
              <p>An einer <span className="hint-em">Nahtstelle</span> abschnittsweiser Funktionen prüft man Differenzierbarkeit über die <span className="hint-em">einseitigen Ableitungen</span>: stimmen linke und rechte Steigung überein (und ist die Funktion dort stetig), so ist sie differenzierbar.</p>
              <p>Voraussetzung: differenzierbar ⇒ stetig. Prüfe daher zuerst die Stetigkeit bei x = 1.</p>
            </>,
            <>
              <p><span className="hint-em">Stetigkeit bei 1:</span> linker Ast x² liefert bei x = 1 den Wert 1; rechter Ast 2x−1 liefert 2·1−1 = 1. Beide gleich → stetig bei 1. ✓</p>
              <p><span className="hint-em">Steigungen:</span> linker Ast x² hat Ableitung 2x, bei x=1 also 2; rechter Ast 2x−1 hat Ableitung 2.</p>
            </>,
            <>
              <p>Linke Ableitung = 2, rechte Ableitung = 2. Da beide <span className="hint-em">gleich</span> sind, existiert eine gemeinsame Steigung → h ist bei x = 1 <span className="hint-em">differenzierbar</span> mit h′(1) = 2.</p>
            </>,
            <>
              <p>Stetigkeit allein reicht nicht — man muss die einseitigen Steigungen vergleichen. Hier passt die Gerade 2x−1 genau als Tangente an x² im Punkt (1,1), daher glatter Übergang.</p>
              <p>Die Ableitung von x² ist 2x (bei x=1 also 2), nicht 2.</p>
            </>,
            <>
              <p>Stimmen linke Steigung (2) und rechte Steigung (2) überein? (Ja → differenzierbar.)</p>
            </>,
          ),
          solution: (
            <>
              {'Stetigkeit bei '}<M>{'x = 1'}</M>{':\n'}
              {'  linker Ast:  '}<M>{'1^2 = 1'}</M>{',   rechter Ast:  '}<M>{'2\\cdot 1 - 1 = 1'}</M>{'.\n'}
              {'  Beide Werte '}<M>{'1'}</M>{' ⇒ h ist stetig bei 1.  ✓\n\n'}
              {'Einseitige Ableitungen bei '}<M>{'x = 1'}</M>{':\n'}
              {'  von links   '}<M>{"\\left(x^2\\right)' = 2x \\;\\to\\; 2"}</M>{',\n'}
              {'  von rechts  '}<M>{"\\left(2x-1\\right)' = 2"}</M>{'.\n\n'}
              {'Wegen '}<M>{'2 = 2'}</M>{' stimmen die einseitigen Steigungen überein.\n'}
              {'⇒ h ist bei '}<M>{'x = 1'}</M>{' differenzierbar mit '}<M>{"h'(1) = 2"}</M>{' (glatter Übergang).'}
            </>
          ),
        },
      ],
    },
    // ── Aufgabe 13 · Differentiation und Stetigkeit ──────────────────────────
    {
      id: 'pkc13',
      nr: 13,
      title: 'Differentiation und Stetigkeit (4P)',
      referenz: ['stetigkeit', 'differenzierbarkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Geben Sie ohne Begründung an, ob die unten dargestellten Funktionen im Intervall [−2, 2] überall stetig bzw. differenzierbar sind (alle Kombinationen sind möglich!).\n\n'}
              <div className="venn-grid" style={{ marginTop: '0.6rem' }}>
                <FunctionPlot
                  data={{
                    series: [{ f: (x) => 2 - 0.3 * x * x, from: -2, to: 2, color: '#4d9fff' }],
                    xMin: -2,
                    xMax: 2,
                    yMin: 0,
                    yMax: 4,
                    caption: 'a',
                  }}
                />
                <FunctionPlot
                  data={{
                    series: [
                      { f: () => 1, from: -2, to: 0, color: '#4d9fff' },
                      { f: () => 2.5, from: 0, to: 2, color: '#4d9fff' },
                    ],
                    markers: [
                      { x: 0, y: 2.5, filled: true, color: '#4d9fff' },
                      { x: 0, y: 1, filled: false, color: '#4d9fff' },
                    ],
                    xMin: -2,
                    xMax: 2,
                    yMin: 0,
                    yMax: 4,
                    caption: 'b',
                  }}
                />
                <FunctionPlot
                  data={{
                    series: [
                      { f: (x) => x + 2, from: -2, to: 0, color: '#4d9fff' },
                      { f: (x) => -0.5 * x + 2, from: 0, to: 2, color: '#4d9fff' },
                    ],
                    xMin: -2,
                    xMax: 2,
                    yMin: 0,
                    yMax: 4,
                    caption: 'c',
                  }}
                />
                <FunctionPlot
                  data={{
                    series: [
                      { f: (x) => 1 - x, from: -2, to: 0, color: '#4d9fff' },
                      { f: (x) => 1 + x, from: 0, to: 2, color: '#4d9fff' },
                    ],
                    xMin: -2,
                    xMax: 2,
                    yMin: 0,
                    yMax: 4,
                    caption: 'd',
                  }}
                />
              </div>
            </>
          ),
          hint: h(
            <>
              <p>Zwei Fragen pro Bild: (1) <span className="hint-em">stetig</span>? — der Graph hat <span className="hint-em">keinen Sprung</span>. (2) <span className="hint-em">differenzierbar</span>? — der Graph ist <span className="hint-em">glatt</span>, hat also keinen Knick und keine Spitze.</p>
              <p>Wichtig: differenzierbar ⇒ stetig. „Nicht stetig, aber differenzierbar" kann es nicht geben.</p>
            </>,
            <>
              <p>Merkmale: <span className="hint-em">Sprung</span> → nicht stetig (und nicht diff.); <span className="hint-em">Knick/Ecke/Spitze</span> → stetig, aber nicht diff.; <span className="hint-em">glatte Kurve</span> → stetig und diff.</p>
            </>,
            <>
              <p>a: durchgehend glatte Kuppe (Parabel) → stetig und differenzierbar.</p>
              <p>b: zwei waagerechte Stücke auf verschiedener Höhe → <span className="hint-em">Sprung</span> → nicht stetig, nicht differenzierbar.</p>
              <p>c: steigende Gerade, die bei x = 0 mit einem <span className="hint-em">Knick</span> in eine fallende übergeht → stetig, nicht differenzierbar.</p>
              <p>d: V-Form mit <span className="hint-em">Spitze</span> bei x = 0 → stetig, nicht differenzierbar.</p>
            </>,
            <>
              <p>Ein Knick/eine Spitze ist <span className="hint-em">stetig</span>, aber nicht differenzierbar — nicht gleichsetzen.</p>
              <p>Bei einem Sprung sind <span className="hint-em">beide</span> Eigenschaften verletzt.</p>
            </>,
            <>
              <p>Kann eine Funktion differenzierbar, aber nicht stetig sein? (Nein — Differenzierbarkeit erzwingt Stetigkeit.)</p>
            </>,
          ),
          solution: (
            <>
              {'(Ablesen aus den Skizzen — differenzierbar '}<M>{'\\Rightarrow'}</M>{' stetig.)\n\n'}
              {'a) glatte Kurve:         stetig JA,  differenzierbar JA.\n'}
              {'b) Sprung bei '}<M>{'x = 0'}</M>{':     stetig NEIN, differenzierbar NEIN.\n'}
              {'c) Knick bei '}<M>{'x = 0'}</M>{':      stetig JA,  differenzierbar NEIN.\n'}
              {'d) Spitze bei '}<M>{'x = 0'}</M>{':     stetig JA,  differenzierbar NEIN.\n\n'}
              {'Der unmögliche Fall „differenzierbar, aber nicht stetig" kommt nicht vor.'}
            </>
          ),
        },
      ],
    },
  ],
}
