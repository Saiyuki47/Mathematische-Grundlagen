import type { MatheBlatt } from '../../types'
import M from '../../utils/M'
import { Venn2 } from '../../components/Venn'
import FunctionPlot from '../../components/FunctionPlot'
import { h, Ol } from './shared'

// Probeklausur „Mathematische Grundlagen der Informatik — AI1004"
// Hochschule Fulda, Prof. Dr. A. Gepperth, WS 2025/26 (27.02.2026).
// Als Übungsblatt aufbereitet: jede Teilaufgabe mit Tipp-Akkordeon und
// aufklappbarer Musterlösung, verlinkt auf die passenden Referenz-Themen.

export const probeklausur: MatheBlatt = {
  id: 'probeklausur',
  nr: 'PK',
  tabLabel: 'Altklausur 2025/2026',
  titel: 'Mathematische Grundlagen der Informatik – AI1004 (Wintersemester 2025/2026)',
  pdf: 'material/Ein wenig zum Trainieren Übungen/Altklausur WS2025-26/Altklausur_WS2025-26_AI1004.pdf',
  beschreibung:
    'Altklausur „Mathematische Grundlagen der Informatik – AI1004" (Hochschule Fulda, Prof. Dr. A. Gepperth, Wintersemester 2025/2026, Klausurtermin 27.02.2026). Aufgabe 1–13 mit Tipps und Lösungen zum Selbstkontrollieren.',
  hinweis:
    'KEINE offiziellen Musterlösungen! Alle Lösungen und Tipps wurden von Claude (KI) erstellt, sind NICHT von der Hochschule geprüft und können Fehler enthalten. Nur zur Selbstkontrolle – immer kritisch nachrechnen.',
  aufgaben: [
    {
      id: 'pk1',
      nr: 1,
      title: 'Mengen, Logik (11P)',
      referenz: ['mengenoperationen', 'mengendarstellung', 'quantoren', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Sei X eine Menge und seien A, B ⊆ X. Veranschaulichen Sie die Mengen\n\n'}
              <Ol>A</Ol>{' ∩ B    und    A \\ B\n\njeweils in einem Venn-Diagramm. Hinweis: '}
              <Ol>A</Ol>{' bezeichnet das Komplement von A in X.'}
            </>
          ),
          hint: h(
            <>
              <p>Ein <span className="hint-em">Venn-Diagramm</span> zeichnet zwei sich überlappende Kreise A und B in ein Rechteck (die Grundmenge X). Die gesuchte Menge wird als <span className="hint-em">schattierte Fläche</span> dargestellt.</p>
              <p><span className="hint-em">Komplement</span> <Ol>A</Ol>: alles in X, das <span className="hint-em">nicht</span> in A liegt (also außerhalb des A-Kreises). <span className="hint-em">Differenz</span> A \ B: alles, das in A, aber nicht in B liegt.</p>
            </>,
            <>
              <p>Gehe Bereich für Bereich vor. Bei zwei Kreisen gibt es vier Zonen: nur A, nur B, A∩B (Überlappung) und außerhalb beider.</p>
              <p><Ol>A</Ol> ∩ B = „nicht in A" <span className="hint-em">und</span> „in B" → schattiere die Zone <span className="hint-em">nur B</span> (der Teil von B, der A nicht überlappt).</p>
              <p>A \ B = „in A" und „nicht in B" → schattiere die Zone <span className="hint-em">nur A</span>.</p>
            </>,
            <>
              <p><Ol>A</Ol> ∩ B ist die Sichelform von B links des Überlappungsbereichs; A \ B die Sichelform von A rechts davon. Sie sind spiegelbildlich zueinander.</p>
            </>,
            <>
              <p><span className="hint-em">Verwechslung</span> von <Ol>A</Ol> ∩ B mit A \ B — beide meinen dasselbe, wenn A,B ⊆ X: <Ol>A</Ol> ∩ B ≠ A \ B! Das erste ist „nur B", das zweite „nur A".</p>
              <p>Die Überlappung A∩B gehört bei <span className="hint-em">keiner</span> der beiden Mengen dazu.</p>
            </>,
            <>
              <p>Welche der vier Zonen ist bei <Ol>A</Ol> ∩ B schattiert? (Antwort: nur B, ohne die Überlappung.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'A \\setminus B'}</M>{' = „in A, nicht in B" → die Zone „nur A".\n'}
              <M>{'\\overline{A} \\cap B'}</M>{' = „nicht in A, in B" → die Zone „nur B".\n\n'}
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
            '[3P] Gegeben seien die Mengen\n\nM₁ = (1, 3),   M₂ = (2, 3]   und   M₃ = ℕ,\n\nwobei ℕ = {0, 1, 2, 3, …}. Geben Sie folgende Mengen an:\n(i) (M₁ ∪ M₂) ∩ M₃\n(ii) (M₁ ∩ M₂) ∩ M₃\n(iii) (M₁ \\ M₂) ∩ M₃',
          hint: h(
            <>
              <p><span className="hint-em">Intervallschreibweise</span>: runde Klammer = Randpunkt <span className="hint-em">nicht</span> enthalten (offen), eckige Klammer = enthalten (abgeschlossen). Also M₁ = (1,3) = alle reellen x mit 1 &lt; x &lt; 3; M₂ = (2,3] = alle x mit 2 &lt; x ≤ 3.</p>
              <p>Der Schnitt mit ℕ = {'{0,1,2,3,…}'} filtert am Ende nur die <span className="hint-em">natürlichen Zahlen</span> aus dem Intervall heraus.</p>
            </>,
            <>
              <p>Rechne <span className="hint-em">zuerst die Klammer</span> (∪, ∩ oder \) als Intervall aus, dann schneide mit ℕ.</p>
              <p>∪ = alles, was in mindestens einem liegt; ∩ = was in beiden liegt; \ = in M₁, aber nicht in M₂.</p>
            </>,
            <>
              <p>(i) M₁ ∪ M₂ = (1,3] → natürliche Zahlen darin: 2, 3.</p>
              <p>(ii) M₁ ∩ M₂ = (2,3) → natürliche Zahlen strikt zwischen 2 und 3: keine.</p>
              <p>(iii) M₁ \ M₂ = (1,2] → natürliche Zahlen darin: 2.</p>
            </>,
            <>
              <p>Randpunkte falsch behandeln: 3 ∈ (1,3]? Ja (eckig). 3 ∈ (1,3)? Nein (rund). 2 ∈ (2,3)? Nein (offen bei 2).</p>
              <p>ℕ enthält hier die 0 — sie liegt aber in keinem der Intervalle, spielt also keine Rolle.</p>
            </>,
            <>
              <p>Liegt 2 in (2,3]? (Nein, offen bei 2.) Liegt 3 in (1,3)? (Nein, offen bei 3.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)   '}<M>{'(M_1 \\cup M_2)\\cap\\mathbb{N} = (1,3]\\cap\\mathbb{N} = \\{2, 3\\}'}</M>{'\n'}
              {'(ii)  '}<M>{'(M_1 \\cap M_2)\\cap\\mathbb{N} = (2,3)\\cap\\mathbb{N} = \\emptyset'}</M>{'  (keine ganze Zahl zwischen 2 und 3)\n'}
              {'(iii) '}<M>{'(M_1 \\setminus M_2)\\cap\\mathbb{N} = (1,2]\\cap\\mathbb{N} = \\{2\\}'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text:
            '[2P] Entscheiden Sie jeweils, ob die Aussage wahr oder falsch ist.\n(i) ∃x ∈ ℕ : x² < 9\n(ii) ∃x ∈ ℝ ∀y ∈ ℝ : xy = y',
          hint: h(
            <>
              <p><span className="hint-em">∃x</span> („es gibt ein x") ist wahr, sobald <span className="hint-em">ein einziges</span> passendes x existiert. <span className="hint-em">∀y</span> („für alle y") verlangt, dass die Bedingung für <span className="hint-em">jedes</span> y gilt.</p>
              <p>Bei ∃…∀… suchst du <span className="hint-em">ein</span> festes x, das dann für <span className="hint-em">alle</span> y funktionieren muss.</p>
            </>,
            <>
              <p>(i) Reicht ein x ∈ ℕ mit x² &lt; 9. Probiere kleine Werte: x = 0 → 0 &lt; 9 ✓.</p>
              <p>(ii) Gesucht ein x, sodass x·y = y für <span className="hint-em">jedes</span> y. Welche Zahl ändert beim Multiplizieren nichts?</p>
            </>,
            <>
              <p>(i) x = 2 → 4 &lt; 9 ✓ (auch 0 oder 1). Also wahr.</p>
              <p>(ii) x = 1 → 1·y = y für alle y ✓. Also wahr.</p>
            </>,
            <>
              <p>Bei ∃ genügt EIN Beispiel — man muss nicht alle x prüfen. Bei ∀ genügt EIN Gegenbeispiel zum Widerlegen.</p>
              <p>In (ii) die Reihenfolge beachten: erst x festlegen, dann muss es für alle y klappen — x = 1 leistet das.</p>
            </>,
            <>
              <p>Gibt es eine reelle Zahl, die als Faktor jedes y unverändert lässt? (Ja, die 1.)</p>
            </>,
          ),
          solution: (
            <>
              {'(i)  wahr.  z. B. '}<M>{'x = 0,\\,1,\\,2 \\in \\mathbb{N}'}</M>{' mit '}<M>{'x^2 = 0,\\,1,\\,4 < 9'}</M>{'.\n'}
              {'(ii) wahr.  Wähle '}<M>{'x = 1'}</M>{': dann '}<M>{'1\\cdot y = y'}</M>{' für alle '}<M>{'y \\in \\mathbb{R}'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: '[2P] Verneinen Sie die folgende Aussage:  ∃x ∈ ℝ : x² < 9',
          hint: h(
            <>
              <p><span className="hint-em">Negation von Quantoren</span>: aus ∃ wird ∀, aus ∀ wird ∃, und die innere Aussage wird ebenfalls verneint. Kurz: „¬∃x : P(x)" ⇔ „∀x : ¬P(x)".</p>
            </>,
            <>
              <p>Schritt 1: ∃ → ∀. Schritt 2: die Bedingung x² &lt; 9 verneinen. Das Gegenteil von „&lt;" ist „≥" (nicht „&gt;", denn = gehört zum Gegenteil dazu).</p>
            </>,
            <>
              <p>¬(∃x ∈ ℝ : x² &lt; 9) = ∀x ∈ ℝ : x² ≥ 9.</p>
            </>,
            <>
              <p>Häufiger Fehler: x² &lt; 9 wird zu x² &gt; 9 verneint. Falsch — die <span className="hint-em">Grenze selbst</span> (x² = 9) gehört zur Verneinung, also x² ≥ 9.</p>
              <p>Auch die Grundmenge (x ∈ ℝ) bleibt beim Negieren <span className="hint-em">unverändert</span>.</p>
            </>,
            <>
              <p>Was ist das Gegenteil von „&lt; 9"? (≥ 9, nicht &gt; 9.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'\\forall x \\in \\mathbb{R} : x^2 \\ge 9'}</M>{'\n\n(∃ → ∀, und „'}<M>{'< 9'}</M>{'" wird zu „'}<M>{'\\ge 9'}</M>{'".)'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk2',
      nr: 2,
      title: 'Vollständige Induktion (8P)',
      referenz: ['vollstaendige-induktion', 'summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit Hilfe vollständiger Induktion, dass gilt:\n\n'}
              <M>{'\\sum_{i=1}^{n}(2i-1) = 1+3+5+\\dots+(2n-1) = n^2 \\qquad \\forall n \\ge 1.'}</M>
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Vollständige Induktion</span> beweist eine Aussage A(n) für alle n ≥ 1 in zwei Schritten: <span className="hint-em">Induktionsanfang</span> (A(1) prüfen) und <span className="hint-em">Induktionsschritt</span> (aus A(n) folgt A(n+1)). Wie beim Dominoeffekt fällt dann jeder Stein.</p>
              <p>Die Summe 1+3+5+… zählt die ersten n <span className="hint-em">ungeraden Zahlen</span>; behauptet wird, ihr Wert sei genau n².</p>
            </>,
            <>
              <p><span className="hint-em">IA (n=1):</span> linke Seite = 2·1−1 = 1, rechte Seite = 1² = 1. ✓</p>
              <p><span className="hint-em">IV:</span> Annahme, für ein festes n gelte Σ = n².</p>
              <p><span className="hint-em">IS (n → n+1):</span> spalte den letzten Summanden ab: Σ_{'{i=1}'}^{'{n+1}'} = Σ_{'{i=1}'}^{'{n}'} + (2(n+1)−1). Setze die IV ein und forme zu (n+1)² um.</p>
            </>,
            <>
              <p>Σ_{'{i=1}'}^{'{n+1}'}(2i−1) = n² + (2n+2−1) = n² + 2n + 1 = (n+1)². Das ist genau die Behauptung für n+1. ∎</p>
            </>,
            <>
              <p>Der neue Summand ist 2(n+1)−1 = 2n+1, <span className="hint-em">nicht</span> 2n−1.</p>
              <p>Die IV muss <span className="hint-em">verwendet</span> werden (die Stelle, an der du n² einsetzt) — sonst ist es kein Induktionsbeweis.</p>
              <p>n²+2n+1 als (n+1)² erkennen (1. binomische Formel).</p>
            </>,
            <>
              <p>Wie lautet der (n+1)-te ungerade Summand? (2(n+1)−1 = 2n+1.) Und n²+2n+1 = ? ((n+1)².)</p>
            </>,
          ),
          solution: (
            <>
              {'Behauptung A(n):  '}<M>{'\\sum_{i=1}^{n}(2i-1) = n^2'}</M>{'  für alle '}<M>{'n \\ge 1'}</M>{'.\n\n'}
              {'Induktionsanfang (n = 1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{1}(2i-1) = 2\\cdot 1 - 1 = 1 = 1^2'}</M>{'   ✓\n\n'}
              {'Induktionsvoraussetzung (IV):\n'}
              {'  Für ein festes '}<M>{'n \\ge 1'}</M>{' gelte  '}<M>{'\\sum_{i=1}^{n}(2i-1) = n^2'}</M>{'.\n\n'}
              {'Induktionsschritt (n → n+1):\n'}
              {'  '}<M>{'\\sum_{i=1}^{n+1}(2i-1) = \\sum_{i=1}^{n}(2i-1) + \\bigl(2(n+1)-1\\bigr)'}</M>{'\n'}
              {'  '}<M>{'= n^2 + (2n + 1)'}</M>{'   (IV eingesetzt)\n'}
              {'  '}<M>{'= n^2 + 2n + 1 = (n+1)^2'}</M>{'   (1. binom. Formel)\n\n'}
              {'Damit gilt A(n+1). Nach dem Prinzip der vollständigen Induktion gilt A(n) für alle '}<M>{'n \\ge 1'}</M>{'.  ∎'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk3',
      nr: 3,
      title: 'Digitale Logik (8P)',
      referenz: ['logik-aequivalenzen', 'logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Vereinfachen Sie und geben Sie stets die zugrundeliegende Regel der Booleschen Algebra an:\n\n'}
              <M>{'\\overline{a \\lor \\bar a} \\land a'}</M>
            </>
          ),
          hint: h(
            <>
              <p>In der <span className="hint-em">Booleschen Algebra</span> rechnet man mit 0 (falsch) und 1 (wahr). ∨ = ODER, ∧ = UND, der Überstrich = Negation (NICHT). ¬ bindet stärker als ∧/∨.</p>
              <p>Gemeint ist <M>{'\\overline{a \\lor \\bar a} \\land a'}</M> — erst die Klammer unter dem Überstrich vereinfachen.</p>
            </>,
            <>
              <p>Schritt 1: <M>{'a \\lor \\bar a = 1'}</M> (<span className="hint-em">Komplementgesetz</span>: eine Aussage oder ihr Gegenteil ist immer wahr).</p>
              <p>Schritt 2: <M>{'\\overline{1} = 0'}</M> (Negation von wahr).</p>
              <p>Schritt 3: 0 ∧ a = 0 (<span className="hint-em">Dominanz-/Nullgesetz</span>: UND mit 0 ergibt immer 0).</p>
            </>,
            <>
              <p><M>{'\\overline{a \\lor \\bar a} \\land a = \\overline{1} \\land a = 0 \\land a = 0'}</M>.</p>
            </>,
            <>
              <p>Überstrich-Reichweite beachten: hier steht er über der <span className="hint-em">ganzen</span> Klammer a ∨ ā, nicht nur über a.</p>
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
              {'(a ∨ 1) ∧ b'}
            </>
          ),
          hint: h(
            <>
              <p>Hier tauchen die <span className="hint-em">Konstanten</span> 0 und 1 auf. Für sie gelten feste Rechenregeln, egal was a und b sind.</p>
            </>,
            <>
              <p>Schritt 1: a ∨ 1 = 1 (<span className="hint-em">Dominanzgesetz</span>: ODER mit 1 ergibt immer 1 — es ist schon wahr, egal ob a).</p>
              <p>Schritt 2: 1 ∧ b = b (<span className="hint-em">Neutralelement</span> der Konjunktion: UND mit 1 lässt b unverändert).</p>
            </>,
            <>
              <p>(a ∨ 1) ∧ b = 1 ∧ b = b.</p>
            </>,
            <>
              <p>a ∨ 1 = 1 (nicht a!) — 1 „dominiert" das ODER. Erst danach kürzt 1 ∧ b zu b.</p>
              <p>Nicht mit a ∧ 1 = a (Neutralelement des UND) durcheinanderbringen.</p>
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
    {
      id: 'pk4',
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
              <p>Die vier Eigenschaften beschreiben, wie oft jedes Element „getroffen" wird:</p>
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
              <p><span className="hint-em">linkstotal?</span> 4 fehlt → nein.</p>
              <p><span className="hint-em">rechtstotal?</span> 9 fehlt → nein.</p>
              <p><span className="hint-em">linkseindeutig?</span> 7 kommt zweimal rechts vor → nein.</p>
              <p><span className="hint-em">rechtseindeutig?</span> 1 kommt zweimal links vor ((1,7) und (1,8)) → nein.</p>
            </>,
            <>
              <p>links/rechts nicht vertauschen: „total" = mindestens eins, „eindeutig" = höchstens eins.</p>
              <p>„links…" bezieht sich auf die A-Seite, „rechts…" auf die B-Seite — Vorsicht, das ist bei „linkseindeutig" (B-Seite!) gegenläufig zur Sprechweise; am sichersten über die Definition oben gehen.</p>
            </>,
            <>
              <p>Wird 9 ∈ B von irgendeinem Paar getroffen? (Nein → nicht rechtstotal.)</p>
            </>,
          ),
          solution: (
            <>
              <M>{'A = \\{1,2,3,4\\},\\quad B = \\{7,8,9\\}'}</M>{'\n\n'}
              {'linkstotal:      NEIN  — '}<M>{'4 \\in A'}</M>{' hat kein Bild.\n'}
              {'rechtstotal:     NEIN  — '}<M>{'9 \\in B'}</M>{' wird nicht getroffen.\n'}
              {'linkseindeutig:  NEIN  — 7 wird von 1 und 2 getroffen (auch 8 von 3 und 1).\n'}
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
              <p>Prüfe die beiden nötigen Eigenschaften aus (a): linkstotal? rechtseindeutig?</p>
              <p>Schon eine Verletzung genügt, damit R keine Funktion ist.</p>
            </>,
            <>
              <p>R ist weder linkstotal (4 hat kein Bild) noch rechtseindeutig (1 hat zwei Bilder). Also <span className="hint-em">keine Funktion</span> — es reicht sogar jede der beiden Verletzungen einzeln.</p>
            </>,
            <>
              <p>„Genau ein Bild" heißt: mindestens eins (linkstotal) UND höchstens eins (rechtseindeutig). Beide Teile gehören dazu.</p>
              <p>Die Zielelemente (rechts) spielen für die Funktions-Eigenschaft keine Rolle — nur wie die Ausgangselemente abgebildet werden.</p>
            </>,
            <>
              <p>Hat in einer Funktion jedes a genau ein Bild? Erfüllt R das für a = 1 bzw. a = 4? (Nein bzw. nein.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein, R ist keine Funktion.\n\n'}
              {'Eine Funktion '}<M>{'A \\to B'}</M>{' muss linkstotal und rechtseindeutig sein\n'}
              {'(jedes '}<M>{'a \\in A'}</M>{' hat genau ein Bild). R verletzt beides:\n'}
              {'  • nicht linkstotal:      '}<M>{'4 \\in A'}</M>{' hat gar kein Bild;\n'}
              {'  • nicht rechtseindeutig: '}<M>{'1 \\in A'}</M>{' hat zwei Bilder '}<M>{'(1,7)'}</M>{' und '}<M>{'(1,8)'}</M>{'.\n\n'}
              {'Jede dieser Verletzungen allein genügt schon.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk5',
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
              <p>Abschnitt 2 (x &gt; 1): f(x) = x², der rechte Ast einer <span className="hint-em">Normalparabel</span>, beginnend knapp über (1,1).</p>
            </>,
            <>
              <p>Prüfe den Übergang bei x = 1: linker Ast liefert 1, x² liefert bei x = 1 ebenfalls 1 → der Graph geht <span className="hint-em">lückenlos</span> ineinander über (kein Sprung).</p>
            </>,
            <>
              <p>Nicht die ganze Parabel zeichnen — nur den Teil für x &gt; 1. Für x &lt; 1 ist f konstant 1, nicht x².</p>
              <p>Definitionsbereich ist [0,∞): links bei x = 0 beginnen, nicht bei negativen x.</p>
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
                  { f: (x) => x * x, from: 1, to: 2, color: '#4d9fff' },
                ],
                markers: [{ x: 1, y: 1, filled: true, color: '#4d9fff' }],
                xMin: 0,
                xMax: 2,
                yMin: 0,
                yMax: 4,
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
              <p><span className="hint-em">Injektiv</span> heißt: verschiedene x haben verschiedene f-Werte — kein y-Wert wird doppelt getroffen. Anschaulich: jede waagerechte Linie schneidet den Graphen höchstens einmal.</p>
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
              {'Also werden verschiedene x auf denselben Wert abgebildet — nicht injektiv.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: '[1P] Ist f surjektiv?',
          hint: h(
            <>
              <p><span className="hint-em">Surjektiv</span> (bzgl. der Zielmenge [0,∞)) heißt: <span className="hint-em">jeder</span> Wert der Zielmenge wird von mindestens einem x getroffen. Bestimme dazu den <span className="hint-em">Wertebereich</span> (die tatsächlich angenommenen Werte).</p>
            </>,
            <>
              <p>Welche Werte nimmt f an? Auf [0,1]: nur den Wert 1. Für x &gt; 1: x² &gt; 1, also alle Werte in (1,∞).</p>
              <p>Wertebereich = {'{1}'} ∪ (1,∞) = [1,∞).</p>
            </>,
            <>
              <p>Zielmenge ist [0,∞), aber die Werte in [0,1) werden nie erreicht (z. B. 0 oder ½). → nicht surjektiv.</p>
            </>,
            <>
              <p>Surjektivität bezieht sich auf die <span className="hint-em">angegebene</span> Zielmenge [0,∞), nicht auf den Wertebereich. Der Wert 0 ∈ [0,∞) hat kein Urbild.</p>
            </>,
            <>
              <p>Wird der Zielwert 0 (oder ½) von einem x getroffen? (Nein — f(x) ≥ 1 überall.)</p>
            </>,
          ),
          solution: (
            <>
              {'Nein.  Der Wertebereich ist '}<M>{'[1,\\infty)'}</M>{' (auf '}<M>{'[0,1]'}</M>{' nur der Wert 1, für '}<M>{'x>1'}</M>{' alle Werte '}<M>{'>1'}</M>{').\n'}
              {'Werte in '}<M>{'[0,1)'}</M>{' — etwa 0 oder '}<M>{'\\tfrac{1}{2}'}</M>{' — liegen in der Zielmenge '}<M>{'[0,\\infty)'}</M>{', werden aber nie angenommen.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: (
            <>{'[1P] Geben Sie f([0,2]) an, also das Bild des Intervalls [0,2] unter f.'}</>
          ),
          hint: h(
            <>
              <p>Das <span className="hint-em">Bild</span> f([0,2]) ist die Menge <span className="hint-em">aller</span> f-Werte, während x das Intervall [0,2] durchläuft: f([0,2]) = {'{ f(x) : x ∈ [0,2] }'}.</p>
            </>,
            <>
              <p>Zerlege [0,2] entlang der Fallunterscheidung bei x = 1:</p>
              <p>Teil [0,1]: f ≡ 1 → liefert {'{1}'}. Teil (1,2]: f = x² → liefert (1², 2²] = (1,4].</p>
              <p>Vereinige beide Bildmengen.</p>
            </>,
            <>
              <p>{'{1}'} ∪ (1,4] = [1,4]. Also f([0,2]) = [1,4].</p>
            </>,
            <>
              <p>Randpunkt x = 2 gehört dazu (abgeschlossen) → 2² = 4 ist im Bild, daher „4]" (eckig).</p>
              <p>Die 1 kommt sowohl aus dem konstanten Teil als auch als Grenzwert des Parabelteils — das schließt die Lücke bei 1.</p>
            </>,
            <>
              <p>Welcher größte Wert wird auf [0,2] erreicht? (f(2) = 4.) Kleinster? (1.)</p>
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
          text: (
            <>{'[2P] Geben Sie f⁻¹([1,2]) an, also das Urbild des Intervalls [1,2] unter f.'}</>
          ),
          hint: h(
            <>
              <p>Das <span className="hint-em">Urbild</span> f⁻¹([1,2]) sammelt <span className="hint-em">alle</span> x aus dem Definitionsbereich, deren Bild f(x) im Intervall [1,2] liegt: f⁻¹([1,2]) = {'{ x : 1 ≤ f(x) ≤ 2 }'}. (Das setzt keine Umkehrfunktion voraus!)</p>
            </>,
            <>
              <p>Prüfe beide Abschnitte:</p>
              <p>Auf [0,1]: f(x) = 1 ∈ [1,2] ✓ → ganz [0,1] gehört dazu.</p>
              <p>Für x &gt; 1: f(x) = x². Löse 1 ≤ x² ≤ 2. Da x &gt; 1 ist x² &gt; 1 automatisch; x² ≤ 2 ⇔ x ≤ √2. → (1, √2].</p>
            </>,
            <>
              <p>Vereinige: [0,1] ∪ (1, √2] = [0, √2]. Also f⁻¹([1,2]) = [0, √2].</p>
            </>,
            <>
              <p>Urbild ≠ Umkehrfunktion: f ist nicht injektiv, trotzdem ist das Urbild wohldefiniert (einfach die Lösungsmenge der Ungleichung).</p>
              <p>Nur x aus dem <span className="hint-em">Definitionsbereich [0,∞)</span> zulassen; negative Lösungen von x² ≤ 2 entfallen.</p>
            </>,
            <>
              <p>Für welche x &gt; 1 ist x² ≤ 2? (1 &lt; x ≤ √2.) Und der konstante Teil [0,1]? (komplett dabei.)</p>
            </>,
          ),
          solution: (
            <>
              {'Gesucht: alle '}<M>{'x \\ge 0'}</M>{' mit '}<M>{'1 \\le f(x) \\le 2'}</M>{'.\n\n'}
              {'• '}<M>{'x \\in [0,1]'}</M>{':  '}<M>{'f(x) = 1 \\in [1,2]'}</M>{'  →  ganz '}<M>{'[0,1]'}</M>{'.\n'}
              {'• '}<M>{'x > 1'}</M>{':  '}<M>{'f(x) = x^2'}</M>{', und '}<M>{'1 \\le x^2 \\le 2 \\Leftrightarrow x \\le \\sqrt{2}'}</M>{'  →  '}<M>{'(1, \\sqrt{2}]'}</M>{'.\n\n'}
              <M>{'f^{-1}([1,2]) = [0,1] \\cup (1, \\sqrt{2}] = [0, \\sqrt{2}]'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk6',
      nr: 6,
      title: 'Kombinatorik (6P)',
      referenz: ['kombinatorik', 'binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            '[3P] Führen Sie jede Frage auf ein Urnenmodell zurück und erläutern Sie dies kurz!\n\nAngenommen Sie wollen einen Eisteller mit 5 Sorten (Kugeln) gestalten, und es stehen 7 Sorten in unbeschränkter Menge zur Verfügung. Auf wie viele verschiedene Arten ist das möglich, wenn die Anordnung der Kugeln auf dem Teller egal ist?',
          hint: h(
            <>
              <p>Das <span className="hint-em">Urnenmodell</span> beschreibt Auswahlen über zwei Fragen: (1) Ist die <span className="hint-em">Reihenfolge</span> wichtig? (2) Darf man <span className="hint-em">zurücklegen</span> (Elemente mehrfach)? Daraus ergeben sich vier Formeln.</p>
              <p>Hier: n = 7 Sorten, man zieht k = 5 Kugeln.</p>
            </>,
            <>
              <p>„Anordnung egal" → Reihenfolge <span className="hint-em">unwichtig</span>. „unbeschränkte Menge" → eine Sorte darf mehrfach vorkommen → <span className="hint-em">mit Zurücklegen</span>.</p>
              <p>Modell: <span className="hint-em">Ziehen mit Zurücklegen, ohne Reihenfolge</span> → Kombination mit Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n+k-1}{k}=\\binom{7+5-1}{5}=\\binom{11}{5}'}</M>.</p>
              <p><M>{'\\binom{11}{5}=\\dfrac{11!}{5!\\,6!}=462'}</M>.</p>
            </>,
            <>
              <p>Nicht n^k (= mit Reihenfolge) verwenden — die Anordnung ist ja egal.</p>
              <p>Im „mit Wiederholung, ohne Reihenfolge"-Fall lautet die obere Zahl n+k−1, nicht n.</p>
            </>,
            <>
              <p>Reihenfolge egal + Sorten wiederholbar → welche der vier Urnenformeln? (Kombination mit Wiederholung, C(n+k−1,k).)</p>
            </>,
          ),
          solution: (
            <>
              {'Urnenmodell: Ziehen mit Zurücklegen, ohne Beachtung der Reihenfolge\n'}
              {'(Kombination mit Wiederholung) — '}<M>{'n = 7'}</M>{' Sorten, '}<M>{'k = 5'}</M>{' Kugeln.\n\n'}
              {'  '}<M>{'\\binom{n+k-1}{k} = \\binom{11}{5} = \\frac{11!}{5!\\,6!} = 462'}</M>{'\n\n'}
              {'Es gibt 462 verschiedene Eisteller.'}
            </>
          ),
        },
        {
          letter: 'b',
          text:
            '[3P] Wie viele Möglichkeiten gäbe es, wenn von jeder Sorte nur eine Kugel gewählt werden dürfte? Die Anordnung ist weiterhin egal!',
          hint: h(
            <>
              <p>Wieder Urnenmodell mit n = 7, k = 5. Es ändert sich nur, ob man Sorten mehrfach nehmen darf.</p>
            </>,
            <>
              <p>„von jeder Sorte nur eine Kugel" → <span className="hint-em">ohne Zurücklegen</span> (keine Sorte doppelt). „Anordnung egal" → ohne Reihenfolge.</p>
              <p>Modell: <span className="hint-em">Ziehen ohne Zurücklegen, ohne Reihenfolge</span> → Kombination ohne Wiederholung.</p>
            </>,
            <>
              <p>Formel: <M>{'\\binom{n}{k}=\\binom{7}{5}=\\dfrac{7!}{5!\\,2!}=21'}</M>.</p>
              <p>(Praktisch: aus 7 Sorten 5 auswählen = 2 weglassen, also <M>{'\\binom{7}{2}=21'}</M>.)</p>
            </>,
            <>
              <p>Jetzt einfach C(n,k), nicht C(n+k−1,k) — ohne Wiederholung fällt der „+k−1"-Zuschlag weg.</p>
              <p>C(7,5) = C(7,2) nutzen (Symmetrie), das rechnet sich leichter.</p>
            </>,
            <>
              <p>Reihenfolge egal + jede Sorte höchstens einmal → welche Formel? (Kombination ohne Wiederholung, C(n,k).)</p>
            </>,
          ),
          solution: (
            <>
              {'Urnenmodell: Ziehen ohne Zurücklegen, ohne Reihenfolge\n'}
              {'(Kombination ohne Wiederholung) — '}<M>{'n = 7'}</M>{', '}<M>{'k = 5'}</M>{'.\n\n'}
              {'  '}<M>{'\\binom{7}{5} = \\frac{7!}{5!\\,2!} = 21 = \\binom{7}{2}'}</M>{'   (Symmetrie)\n\n'}
              {'Es gibt 21 verschiedene Eisteller.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk7',
      nr: 7,
      title: 'Der Algorithmus des Euklid (5P)',
      referenz: ['zahlenbereiche'],
      subaufgaben: [
        {
          letter: 'a',
          text:
            'Bestimmen Sie den ggT von 128 und 112 mit dem Algorithmus von Euklid, unter Angabe aller Zwischenergebnisse!',
          hint: h(
            <>
              <p>Der <span className="hint-em">euklidische Algorithmus</span> bestimmt den größten gemeinsamen Teiler (ggT) durch wiederholte <span className="hint-em">Division mit Rest</span>: teile die größere Zahl durch die kleinere, dann die kleinere durch den Rest, usw.</p>
              <p>Grundidee: ggT(a,b) = ggT(b, a mod b) — der ggT ändert sich nicht, wenn man das Vielfache abzieht.</p>
            </>,
            <>
              <p>Schreibe jeden Schritt als a = q·b + r (Quotient q, Rest r). Ersetze dann (a,b) durch (b,r) und wiederhole, bis der Rest 0 ist. Der <span className="hint-em">letzte Divisor</span> (bzw. letzte Rest ≠ 0) ist der ggT.</p>
            </>,
            <>
              <p>128 = 1·112 + 16</p>
              <p>112 = 7·16 + 0</p>
              <p>Rest 0 erreicht → ggT = letzter Divisor = 16.</p>
            </>,
            <>
              <p>Rest richtig berechnen: 128 − 112 = 16 (nicht weiterrechnen mit falschem q). 112 = 7·16 geht genau auf (Rest 0).</p>
              <p>Der ggT ist der letzte Rest <span className="hint-em">ungleich</span> 0, also 16 — nicht die 0.</p>
            </>,
            <>
              <p>Teilt 16 sowohl 128 (= 8·16) als auch 112 (= 7·16)? (Ja → 16 ist gemeinsamer Teiler, und der größte.)</p>
            </>,
          ),
          solution: (
            <>
              {'Euklid (Division mit Rest, bis Rest 0):\n\n'}
              {'  '}<M>{'128 = 1 \\cdot 112 + 16'}</M>{'\n'}
              {'  '}<M>{'112 = 7 \\cdot 16 + 0'}</M>{'\n\n'}
              {'Letzter Rest ≠ 0 ist 16  →  '}<M>{'\\gcd(128,\\,112) = 16'}</M>{'.\n'}
              {'(Probe: '}<M>{'128 = 8\\cdot 16'}</M>{', '}<M>{'112 = 7\\cdot 16'}</M>{'.)'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk8',
      nr: 8,
      title: 'Folgen und Konvergenz (8P)',
      referenz: ['folgen-grundbegriffe', 'folgen-konvergenz', 'sandwich-cauchy', 'wichtige-grenzwerte'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[3P] In dieser Teilaufgabe sind keine Begründungen verlangt. Geben Sie zu der Folge\n\n'}
              {'(xₙ)_{n∈ℕ} = (0, −2, 4, −8, 10, −12, 14, …)\n\n'}
              {'die Abbildungsvorschrift ℕ → ℝ, n ↦ xₙ an.  Erinnerung: ℕ = {0, 1, 2, 3, …}.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine Folge ist eine Abbildung ℕ → ℝ. Gesucht ist eine <span className="hint-em">Formel</span> xₙ, die aus dem Index n (beginnend bei 0) den Wert liefert.</p>
              <p>Zerlege das Muster in <span className="hint-em">Vorzeichen</span> und <span className="hint-em">Betrag</span> und behandle beide getrennt.</p>
            </>,
            <>
              <p><span className="hint-em">Vorzeichen</span>: +, −, +, −, … je nach n gerade/ungerade → Faktor (−1)ⁿ (für n = 0 ist (−1)⁰ = +1).</p>
              <p><span className="hint-em">Beträge</span>: 0, 2, 4, dann 8, 10, 12, 14, … — bis n = 2 sind es 2n; ab n = 3 aber 2n+2 (die Beträge springen bei n = 3 von 4 auf 8, die „6" wird ausgelassen).</p>
            </>,
            <>
              <p>Das ergibt eine <span className="hint-em">abschnittsweise</span> Vorschrift: xₙ = (−1)ⁿ·2n für n ≤ 2 und xₙ = (−1)ⁿ·(2n+2) für n ≥ 3.</p>
              <p>Probe: x₀=0, x₁=−2, x₂=4, x₃=−8, x₄=10, x₅=−12, x₆=14 — alle Glieder stimmen.</p>
            </>,
            <>
              <p>Der „glatte" Ansatz (−1)ⁿ·2n ist verlockend, trifft aber nur die ersten drei Glieder (0, −2, 4, −6, …) und passt ab dem 4. Glied nicht mehr — die Klausurfolge braucht die Fallunterscheidung.</p>
              <p>Bei ℕ ab 0 startet der Index bei n = 0, nicht 1.</p>
            </>,
            <>
              <p>Was liefert die Vorschrift bei n = 3? ((−1)³·(2·3+2) = −8 ✓.) Und bei n = 6? (+14 ✓.)</p>
            </>,
          ),
          solution: (
            <>
              {'Die gedruckte Folge lässt sich exakt durch diese abschnittsweise Abbildungsvorschrift beschreiben:\n\n'}
              {'  '}<M>{'x_n = \\begin{cases}(-1)^n\\,2n, & 0 \\le n \\le 2,\\\\[2pt] (-1)^n\\,(2n+2), & n \\ge 3.\\end{cases}'}</M>{'\n\n'}
              {'Vorzeichen +,−,+,−,… = '}<M>{'(-1)^n'}</M>{'  (n=0 → +).\n'}
              {'Beträge  0, 2, 4  |  8, 10, 12, 14, …  — ab dem 4. Glied ('}<M>{'n \\ge 3'}</M>{') um 2 erhöht.\n\n'}
              {'Probe: '}<M>{'x_0=0,\\ x_1=-2,\\ x_2=4,\\ x_3=-8,\\ x_4=10,\\ x_5=-12,\\ x_6=14'}</M>{'   ✓ (alle Glieder stimmen)\n\n'}
              {'Hinweis: Ein einzelner „glatter" Term wie '}<M>{'(-1)^n\\cdot 2n'}</M>{' träfe nur die ersten drei\n'}
              {'Glieder (0, −2, 4, −6, …); ab dem 4. Glied weichen die Beträge der Klausurfolge um 2 ab\n'}
              {'(die „6" wird ausgelassen). Genau deshalb die Fallunterscheidung.'}
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
              <p>Faktor 1: sin(n) ist für alle n <span className="hint-em">beschränkt</span>: |sin(n)| ≤ 1 (konvergiert selbst nicht, ist aber gefangen zwischen −1 und 1).</p>
              <p>Faktor 2: 1/n² → 0, also sin(1/n²) → sin(0) = 0 (Stetigkeit von sin). Sogar |sin(1/n²)| ≤ 1/n².</p>
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
    {
      id: 'pk9',
      nr: 9,
      title: 'Reihen (10P)',
      referenz: ['reihen-konvergenz', 'geometrische-summenformel'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[5P] Für welche x ∈ ℝ konvergiert die Reihe  '}
              <M>{'\\sum_{k=0}^{\\infty}\\bigl(0{,}25\\,x^2\\bigr)^{k}'}</M>{'  ?'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">geometrische Reihe</span> Σ qᵏ konvergiert genau dann, wenn der <span className="hint-em">Quotient</span> |q| &lt; 1 ist (dann mit Summe 1/(1−q)).</p>
              <p>Hier ist der Ausdruck in der Klammer bereits die k-te Potenz — also q = 0,25·x² = x²/4.</p>
            </>,
            <>
              <p>Bedingung |q| &lt; 1 aufstellen: |x²/4| &lt; 1. Da x² ≥ 0, ist der Betrag überflüssig: x²/4 &lt; 1.</p>
              <p>Nach x auflösen: x² &lt; 4 ⇔ |x| &lt; 2 ⇔ −2 &lt; x &lt; 2.</p>
            </>,
            <>
              <p>Die Reihe konvergiert genau für x ∈ (−2, 2). (Summe dann 1/(1 − x²/4).)</p>
            </>,
            <>
              <p>Randfälle x = ±2 gehören <span className="hint-em">nicht</span> dazu: dort ist q = 1, die Reihe Σ 1ᵏ divergiert.</p>
              <p>Aus x² &lt; 4 folgt |x| &lt; 2, also <span className="hint-em">beide</span> Vorzeichen: −2 &lt; x &lt; 2 (nicht nur x &lt; 2).</p>
            </>,
            <>
              <p>Für welchen Quotienten q konvergiert Σqᵏ? (|q| &lt; 1.) Was heißt x²/4 &lt; 1 für x? (|x| &lt; 2.)</p>
            </>,
          ),
          solution: (
            <>
              {'Geometrische Reihe mit '}<M>{'q = 0{,}25\\,x^2 = \\tfrac{x^2}{4}'}</M>{'.\n'}
              {'Konvergenz  '}<M>{'\\Leftrightarrow |q| < 1 \\Leftrightarrow \\tfrac{x^2}{4} < 1 \\Leftrightarrow x^2 < 4 \\Leftrightarrow |x| < 2'}</M>{'.\n\n'}
              {'Die Reihe konvergiert genau für  '}<M>{'x \\in (-2,\\,2)'}</M>{'.\n'}
              {'(Für '}<M>{'x = \\pm 2'}</M>{' ist '}<M>{'q = 1'}</M>{' → Divergenz.)  Summe: '}<M>{'\\dfrac{1}{1 - \\frac{x^2}{4}}'}</M>{'.'}
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
              <p>Bei Reihen mit Potenzen wie 3ᵏ im Nenner ist das <span className="hint-em">Quotientenkriterium</span> ideal: bilde den Grenzwert L = lim |a_{'{k+1}'}/aₖ|. Ist L &lt; 1, konvergiert die Reihe (absolut); L &gt; 1 → Divergenz.</p>
              <p>Hier aₖ = k/3ᵏ &gt; 0.</p>
            </>,
            <>
              <p>Quotient aufstellen und vereinfachen:</p>
              <p><M>{'\\frac{a_{k+1}}{a_k}=\\frac{k+1}{3^{k+1}}\\cdot\\frac{3^{k}}{k}=\\frac{k+1}{3k}.'}</M></p>
              <p>Grenzwert für k → ∞ bestimmen.</p>
            </>,
            <>
              <p><M>{'\\lim_{k\\to\\infty}\\frac{k+1}{3k}=\\frac{1}{3}<1.'}</M></p>
              <p>Nach dem Quotientenkriterium <span className="hint-em">konvergiert</span> die Reihe (sogar absolut).</p>
            </>,
            <>
              <p>Beim Kürzen 3ᵏ/3^{'{k+1}'} = 1/3 nicht vergessen — das liefert am Ende den Faktor 1/3.</p>
              <p>(k+1)/k → 1, nicht 0; entscheidend ist der Faktor 1/3, der L = 1/3 &lt; 1 erzwingt.</p>
            </>,
            <>
              <p>Was ist lim (k+1)/(3k)? (1/3.) Und 1/3 &lt; 1 bedeutet? (Konvergenz.)</p>
            </>,
          ),
          solution: (
            <>
              {'Quotientenkriterium mit '}<M>{'a_k = \\tfrac{k}{3^k} > 0'}</M>{':\n\n'}
              {'  '}<M>{'\\frac{a_{k+1}}{a_k} = \\frac{k+1}{3^{k+1}} \\cdot \\frac{3^k}{k} = \\frac{k+1}{3k} \\;\\xrightarrow[k\\to\\infty]{}\\; \\frac{1}{3} < 1'}</M>{'\n\n'}
              {'Da der Grenzwert '}<M>{'\\tfrac{1}{3} < 1'}</M>{' ist, konvergiert die Reihe (absolut).\n'}
              {'(Zusatz: der Wert ist '}<M>{'\\tfrac{3}{4}'}</M>{', hier nicht gefragt.)'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk10',
      nr: 10,
      title: 'Asymptotik, Stetigkeit (8P)',
      referenz: ['polynomdivision', 'landau-notation', 'funktionsgrenzwerte', 'stetigkeit', 'betrag-intervalle'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'[4P] Sei\n\n'}
              <M>{'f:\\mathbb{R}\\setminus\\{1\\}\\to\\mathbb{R},\\quad x\\mapsto\\frac{-x^3+x^2+x-2}{x-1}.'}</M>
              {'\n\n(i) Bestimmen Sie eine asymptotische Parabel zu f.\n(ii) Geben Sie (ohne Begründung) lim_{x→∞} f(x) an.'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">asymptotische Parabel</span> ist eine Parabel p(x) = ax²+bx+c, der sich f für x → ±∞ beliebig annähert (der Rest geht gegen 0). Man findet sie durch <span className="hint-em">Polynomdivision</span> des Zählers durch den Nenner.</p>
            </>,
            <>
              <p>Teile −x³+x²+x−2 durch (x−1). Das Ergebnis hat die Form p(x) + Rest/(x−1).</p>
              <p>Praktisch mit Horner/Synthetik (Nullstelle x = 1) auf den Koeffizienten [−1, 1, 1, −2]: liefert Quotient [−1, 0, 1] und Rest −1.</p>
            </>,
            <>
              <p>Also f(x) = −x² + 1 − 1/(x−1).</p>
              <p>(i) Der Bruch −1/(x−1) → 0 für x → ±∞ → asymptotische Parabel p(x) = −x² + 1.</p>
              <p>(ii) lim_{'{x→∞}'} f(x): dominant ist −x² → −∞. Also lim = −∞ (uneigentlich).</p>
            </>,
            <>
              <p>Vorzeichen mitführen: der führende Term ist −x³ → Quotient beginnt mit −x². Das ergibt eine <span className="hint-em">nach unten</span> geöffnete Parabel.</p>
              <p>Der Rest −1/(x−1) gehört <span className="hint-em">nicht</span> zur Parabel; er verschwindet nur asymptotisch.</p>
            </>,
            <>
              <p>Was bleibt bei der Division als ganzrationaler Anteil? (−x²+1.) Wohin läuft −x² für x → ∞? (−∞.)</p>
            </>,
          ),
          solution: (
            <>
              {'Polynomdivision:\n\n'}
              {'  '}<M>{'(-x^3 + x^2 + x - 2) : (x - 1) = -x^2 + 1 \\quad \\text{Rest } -1'}</M>{'\n'}
              {'  '}<M>{'\\Rightarrow\\; f(x) = -x^2 + 1 - \\dfrac{1}{x-1}'}</M>{'\n\n'}
              {'(i)  Für '}<M>{'x \\to \\pm\\infty'}</M>{' gilt '}<M>{'-\\tfrac{1}{x-1} \\to 0'}</M>{', also ist\n'}
              {'     die asymptotische Parabel  '}<M>{'p(x) = -x^2 + 1'}</M>{'.\n\n'}
              {'(ii) '}<M>{'\\lim_{x\\to\\infty} f(x) = -\\infty'}</M>{'   (dominanter Term '}<M>{'-x^2'}</M>{').'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'[4P] Prüfen Sie, ob die Funktion\n\n'}
              <M>{'f:[0,\\infty)\\to\\mathbb{R},\\quad x\\mapsto|x|'}</M>
              {'\n\nstetig in x = 0 ist.'}
            </>
          ),
          hint: h(
            <>
              <p><span className="hint-em">Stetigkeit</span> in x₀ heißt: der Grenzwert der Funktionswerte, wenn x gegen x₀ läuft, stimmt mit f(x₀) überein: lim_{'{x→x₀}'} f(x) = f(x₀).</p>
              <p>Beachte den <span className="hint-em">Definitionsbereich [0,∞)</span>: man nähert sich der 0 nur von <span className="hint-em">rechts</span> (x ≥ 0).</p>
            </>,
            <>
              <p>Auf [0,∞) ist |x| = x (der Betrag ändert nichts, da x ≥ 0). Berechne f(0) und den rechtsseitigen Grenzwert.</p>
              <p>f(0) = |0| = 0. lim_{'{x→0⁺}'} |x| = lim_{'{x→0⁺}'} x = 0.</p>
            </>,
            <>
              <p>Beide Werte sind 0, also lim_{'{x→0⁺}'} f(x) = 0 = f(0). → f ist <span className="hint-em">stetig</span> in x = 0.</p>
            </>,
            <>
              <p>Kein linksseitiger Grenzwert nötig — negative x liegen gar nicht im Definitionsbereich. Auf [0,∞) genügt der rechtsseitige Limes.</p>
              <p>Auf [0,∞) ist |x| einfach x; die „Knick"-Diskussion bei 0 entfällt hier, weil der linke Ast fehlt.</p>
            </>,
            <>
              <p>Ist lim_{'{x→0⁺}'} x = f(0)? (Ja, beide 0 → stetig.)</p>
            </>,
          ),
          solution: (
            <>
              {'Auf dem Definitionsbereich '}<M>{'[0,\\infty)'}</M>{' gilt '}<M>{'|x| = x'}</M>{' (da '}<M>{'x \\ge 0'}</M>{').\n\n'}
              {'  '}<M>{'f(0) = |0| = 0'}</M>{'\n'}
              {'  '}<M>{'\\lim_{x\\to 0^+} f(x) = \\lim_{x\\to 0^+} x = 0'}</M>{'\n\n'}
              {'Rechtsseitiger Grenzwert = Funktionswert = 0\n'}
              {'(negative x liegen nicht im Definitionsbereich).\n'}
              {'⇒ f ist stetig in '}<M>{'x = 0'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk11',
      nr: 11,
      title: 'Differentiation (6P)',
      referenz: ['ableitungsregeln', 'standardableitungen', 'exp-log'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Bestimmen Sie die Ableitung der Funktionen, wobei Sie stets Regel, Zerlegung und Rechnung angeben wie in der VL besprochen!\n\n'}
              {'[3P] h(x) = exp(x²)'}
            </>
          ),
          hint: h(
            <>
              <p>Steht eine Funktion <span className="hint-em">in</span> einer anderen (Verkettung), verwendet man die <span className="hint-em">Kettenregel</span>: (u(v(x)))′ = u′(v(x)) · v′(x) — „äußere Ableitung mal innere Ableitung".</p>
              <p>exp ist die e-Funktion; ihre Besonderheit: exp′ = exp.</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: äußere Funktion u(z) = exp(z), innere Funktion v(x) = x².</p>
              <p>Ableitungen: u′(z) = exp(z), v′(x) = 2x.</p>
            </>,
            <>
              <p>h′(x) = u′(v(x))·v′(x) = exp(x²)·2x = 2x·exp(x²).</p>
            </>,
            <>
              <p>Die innere Ableitung v′(x) = 2x <span className="hint-em">nicht vergessen</span> (häufigster Fehler: nur exp(x²) hinschreiben).</p>
              <p>Der Exponent x² bleibt im exp stehen — nur der Vorfaktor 2x kommt hinzu.</p>
            </>,
            <>
              <p>Was ist die innere Funktion und ihre Ableitung? (x², Ableitung 2x.) Bleibt exp(x²) erhalten? (Ja, mal 2x.)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:      Kettenregel  '}<M>{"(u\\circ v)' = u'(v(x))\\cdot v'(x)"}</M>{'\n'}
              {'Zerlegung:  äußere '}<M>{'u(z) = \\exp(z)'}</M>{', innere '}<M>{'v(x) = x^2'}</M>{';\n'}
              {'            '}<M>{"u'(z) = \\exp(z)"}</M>{',  '}<M>{"v'(x) = 2x"}</M>{'.\n'}
              {'Rechnung:   '}<M>{"h'(x) = \\exp(x^2) \\cdot 2x = 2x\\,\\exp(x^2)"}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'[3P] h(x) = exp(x)·x²'}</>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Produkt</span> zweier Funktionen leitet man mit der <span className="hint-em">Produktregel</span> ab: (u·v)′ = u′·v + u·v′ — „ersten ableiten mal zweiten, plus ersten mal zweiten abgeleitet".</p>
            </>,
            <>
              <p><span className="hint-em">Zerlegung</span>: u(x) = exp(x), v(x) = x².</p>
              <p>Ableitungen: u′(x) = exp(x) (e-Funktion bleibt sich selbst), v′(x) = 2x (Potenzregel).</p>
            </>,
            <>
              <p>h′(x) = u′v + uv′ = exp(x)·x² + exp(x)·2x = exp(x)·(x² + 2x) = x(x+2)·exp(x).</p>
            </>,
            <>
              <p>Nicht die beiden Ableitungen einfach multiplizieren — bei Produkten gilt die Summenform u′v + uv′, nicht u′·v′.</p>
              <p>Am Ende exp(x) ausklammern; das ist die übliche „schöne" Form.</p>
            </>,
            <>
              <p>Wie lautet u′v + uv′ hier? (exp(x)·x² + exp(x)·2x.) Ausgeklammert? (exp(x)(x²+2x).)</p>
            </>,
          ),
          solution: (
            <>
              {'Regel:      Produktregel  '}<M>{"(u\\cdot v)' = u'\\cdot v + u\\cdot v'"}</M>{'\n'}
              {'Zerlegung:  '}<M>{'u(x) = \\exp(x)'}</M>{', '}<M>{'v(x) = x^2'}</M>{';\n'}
              {'            '}<M>{"u'(x) = \\exp(x)"}</M>{',  '}<M>{"v'(x) = 2x"}</M>{'.\n'}
              {'Rechnung:   '}<M>{"h'(x) = \\exp(x)\\,x^2 + \\exp(x)\\,2x"}</M>{'\n'}
              {'                  '}<M>{'= \\exp(x)\\,(x^2 + 2x) = x(x+2)\\,\\exp(x)'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk12',
      nr: 12,
      title: 'Differenzierbarkeit (6P)',
      referenz: ['differenzierbarkeit', 'stetigkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Begründen Sie, ob die Funktion\n\n'}
              <M>{'h(x)=\\begin{cases}\\tfrac{1}{2}x,& x\\le 1,\\\\[2pt] \\tfrac{1}{2},& \\text{sonst}\\end{cases}'}</M>
              {'\n\nbei x = 1 differenzierbar ist.'}
            </>
          ),
          hint: h(
            <>
              <p>An einer <span className="hint-em">Nahtstelle</span> abschnittsweiser Funktionen prüft man Differenzierbarkeit über die <span className="hint-em">einseitigen Ableitungen</span>: stimmen linke und rechte Steigung überein (und ist die Funktion dort stetig), so ist sie differenzierbar.</p>
              <p>Voraussetzung: differenzierbar ⇒ stetig. Prüfe daher zuerst die Stetigkeit bei x = 1.</p>
            </>,
            <>
              <p><span className="hint-em">Stetigkeit bei 1:</span> linker Ast ½x liefert bei x = 1 den Wert ½; rechter Ast (konstant ½) liefert ½. Beide gleich → stetig bei 1. ✓</p>
              <p><span className="hint-em">Steigungen:</span> linker Ast ½x hat Ableitung ½; rechter Ast (konstant ½) hat Ableitung 0.</p>
            </>,
            <>
              <p>Linke Ableitung = ½, rechte Ableitung = 0. Da ½ ≠ 0, existiert <span className="hint-em">keine</span> gemeinsame Steigung → h ist bei x = 1 <span className="hint-em">nicht differenzierbar</span> (Knick), obwohl stetig.</p>
            </>,
            <>
              <p>Stetigkeit allein reicht nicht — ein Knick ist stetig, aber nicht differenzierbar. Beide einseitigen Steigungen vergleichen.</p>
              <p>Die Ableitung einer <span className="hint-em">Konstanten</span> ist 0 (nicht ½).</p>
            </>,
            <>
              <p>Stimmen linke Steigung (½) und rechte Steigung (0) überein? (Nein → nicht differenzierbar.)</p>
            </>,
          ),
          solution: (
            <>
              {'Stetigkeit bei '}<M>{'x = 1'}</M>{':\n'}
              {'  linker Ast:  '}<M>{'\\tfrac{1}{2}\\cdot 1 = \\tfrac{1}{2}'}</M>{',   rechter Ast (sonst):  '}<M>{'\\tfrac{1}{2}'}</M>{'.\n'}
              {'  Beide Werte '}<M>{'\\tfrac{1}{2}'}</M>{' ⇒ h ist stetig bei 1.  ✓\n\n'}
              {'Einseitige Ableitungen bei '}<M>{'x = 1'}</M>{':\n'}
              {'  von links   '}<M>{"\\left(\\tfrac{1}{2}x\\right)' = \\tfrac{1}{2}"}</M>{',\n'}
              {'  von rechts  '}<M>{"\\left(\\tfrac{1}{2}\\right)' = 0"}</M>{'.\n\n'}
              {'Wegen '}<M>{'\\tfrac{1}{2} \\ne 0'}</M>{' stimmen die einseitigen Steigungen nicht überein.\n'}
              {'⇒ h ist bei '}<M>{'x = 1'}</M>{' NICHT differenzierbar (stetiger Knick).'}
            </>
          ),
        },
      ],
    },
    {
      id: 'pk13',
      nr: 13,
      title: 'Differentiation und Stetigkeit (4P)',
      referenz: ['stetigkeit', 'differenzierbarkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Geben Sie ohne Begründung an, ob die unten dargestellten Funktionen im Intervall [−2, 2] überall stetig bzw. differenzierbar sind (alle Kombinationen sind möglich!).\n\n'}
              {'(Nachbildung der vier Klausur-Skizzen a–d:)'}
              <div className="venn-grid" style={{ marginTop: '0.6rem' }}>
                <FunctionPlot
                  data={{
                    series: [
                      { f: (x) => 0.25 * x * x, from: -2, to: 0, color: '#4d9fff' },
                      { f: (x) => 2 * x, from: 0, to: 2, color: '#4d9fff' },
                    ],
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
                      { f: () => 1.7, from: 0, to: 2, color: '#4d9fff' },
                    ],
                    markers: [
                      { x: 0, y: 1, filled: true, color: '#4d9fff' },
                      { x: 0, y: 1.7, filled: false, color: '#4d9fff' },
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
                      { f: (x) => -1.1667 * (x - 1), from: -2, to: 1, color: '#4d9fff' },
                      { f: (x) => x - 1, from: 1, to: 2, color: '#4d9fff' },
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
                    series: [{ f: (x) => 2.5 - 0.5 * x * x, from: -2, to: 2, color: '#4d9fff' }],
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
              <p>Zwei Fragen pro Bild: (1) <span className="hint-em">stetig</span>? — der Graph hat <span className="hint-em">keinen Sprung</span> (man kann ihn ohne Absetzen zeichnen). (2) <span className="hint-em">differenzierbar</span>? — der Graph ist <span className="hint-em">glatt</span>, hat also keinen Knick und keine senkrechte Tangente.</p>
              <p>Wichtig: differenzierbar ⇒ stetig. „Nicht stetig, aber differenzierbar" kann es also nicht geben.</p>
            </>,
            <>
              <p>Achte auf drei Merkmale: <span className="hint-em">Sprung</span> → nicht stetig (und nicht diff.); <span className="hint-em">Knick/Ecke</span> → stetig, aber nicht diff.; <span className="hint-em">glatte Kurve</span> → stetig und diff.</p>
            </>,
            <>
              <p>a: Kurve, die bei x = 0 in eine Gerade übergeht → <span className="hint-em">Knick</span> → stetig, nicht differenzierbar.</p>
              <p>b: zwei waagerechte Stücke auf verschiedener Höhe → <span className="hint-em">Sprung</span> → nicht stetig, nicht differenzierbar.</p>
              <p>c: fallende Gerade, die in einer <span className="hint-em">Spitze</span> in eine steigende übergeht → stetig, nicht differenzierbar.</p>
              <p>d: durchgehend glatte Kuppe → stetig und differenzierbar.</p>
            </>,
            <>
              <p>Ein Knick ist <span className="hint-em">stetig</span>, aber nicht differenzierbar — nicht beides gleichsetzen.</p>
              <p>Bei einem Sprung sind <span className="hint-em">beide</span> Eigenschaften verletzt.</p>
              <p>(Antworten hängen an der Skizze — vergleiche mit dem Original-Klausurbild, falls dein Ausdruck anders aussieht.)</p>
            </>,
            <>
              <p>Kann eine Funktion differenzierbar, aber nicht stetig sein? (Nein — Differenzierbarkeit erzwingt Stetigkeit.)</p>
            </>,
          ),
          solution: (
            <>
              {'(Ablesen aus den Skizzen — differenzierbar '}<M>{'\\Rightarrow'}</M>{' stetig.)\n\n'}
              {'a) Knick bei '}<M>{'x = 0'}</M>{':      stetig JA,  differenzierbar NEIN.\n'}
              {'b) Sprung bei '}<M>{'x = 0'}</M>{':     stetig NEIN, differenzierbar NEIN.\n'}
              {'c) Spitze (Ecke):        stetig JA,  differenzierbar NEIN.\n'}
              {'d) glatte Kurve:         stetig JA,  differenzierbar JA.\n\n'}
              {'Der unmögliche Fall „differenzierbar, aber nicht stetig" kommt\n'}
              {'nicht vor. Prüfe die Zuordnung gegen das Original-Klausurbild.'}
            </>
          ),
        },
      ],
    },
  ],
}
