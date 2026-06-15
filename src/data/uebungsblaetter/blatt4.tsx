import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt4: MatheBlatt = {
  id: 'blatt4',
  nr: '4',
  titel: 'vollständige Induktion, Zahlbereiche',
  aufgaben: [
    {
      id: 'b4a1',
      nr: 1,
      title: 'Produktformel per Induktion',
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit vollständiger Induktion, dass für jedes n ∈ ℕ* gilt:\n\n'}
              {'∏(k=1 bis n) (1 + 1/k) = n + 1'}
            </>
          ),
          hint: h(
            <>
              <p>Das ist ein <span className="hint-em">Induktionsbeweis über ein Produkt</span>. Im IS schreibt man das Produkt bis n+1 als Produkt bis n (= IV) mal dem neuen Faktor.</p>
              <p>Beachte: Die Induktionsbehauptung A(n) lautet: ∏(k=1..n)(1+1/k) = n+1.</p>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Setze n=1 in LHS und RHS ein und prüfe Gleichheit</li>
                <li><strong>IS-Ansatz:</strong> Schreibe ∏(k=1..n+1) = ∏(k=1..n) · (letzter Faktor mit k=n+1)</li>
                <li><strong>IV einsetzen:</strong> Ersetze ∏(k=1..n) durch den Ausdruck der IV</li>
                <li><strong>Vereinfachen:</strong> Multipliziere aus und zeige, dass das Ergebnis n+2 ergibt</li>
              </ol>
            </>,
            <>
              <p>Analoges Beispiel: ∏(k=1..n) k = n! (Fakultät) per Induktion.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Den Schritt (IV) nicht markieren → <strong>✅ Richtig:</strong> Explizit schreiben „=(IV)" oder „[nach IV]" um zu zeigen, wo die Induktionsvoraussetzung eingesetzt wird</li>
              <li><strong>❌ Falsch:</strong> IA bei n=0 beginnen → <strong>✅ Richtig:</strong> n ∈ ℕ* bedeutet n ≥ 1; der Basisfall ist n=1 (das leere Produkt bei n=0 wäre 1, nicht 1+1=2)</li>
            </ul>,
            <p>Warum lässt sich das Produkt ∏(k=1..n)(1+1/k) so einfach induktiv behandeln — welche Eigenschaft des Produkts macht den IS-Schritt besonders direkt?</p>,
          ),
          solution: 'A(n): ∏(k=1..n)(1+1/k) = n+1\n\nIA (n=1): ∏(k=1..1)(1+1/k) = 1+1 = 2 = 1+1 ✓\n\nIS (n → n+1): Sei n ∈ ℕ*. Angenommen ∏(k=1..n)(1+1/k) = n+1 (IV).\n\n∏(k=1..n+1)(1+1/k)\n= (1+1/(n+1)) · ∏(k=1..n)(1+1/k)\n=(IV) (1+1/(n+1)) · (n+1)\n= n+1+1 = n+2  ✓  □',
        },
      ],
    },
    {
      id: 'b4a2',
      nr: 2,
      title: 'Bernoulli\'sche Ungleichung',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei x ∈ [−1, ∞). Zeigen Sie mit vollständiger Induktion, dass für jedes n ∈ ℕ die Ungleichung\n\n(1 + x)ⁿ ≥ 1 + nx\n\ngilt. An welcher Stelle haben Sie die Voraussetzung x ≥ −1 verwendet?',
          hint: h(
            <>
              <p>Im IS multipliziert man beide Seiten von (IV) mit (1+x). Damit das die Ungleichungsrichtung erhält, muss <span className="hint-em">1+x ≥ 0</span> sein — das ist genau die Voraussetzung x ≥ −1.</p>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Prüfe den Basisfall n=0 direkt</li>
                <li><strong>IS-Ansatz:</strong> Schreibe (1+x)^(n+1) = (1+x)·(1+x)ⁿ</li>
                <li><strong>IV einsetzen:</strong> Ersetze (1+x)ⁿ durch (1+nx) — aber nur wenn (1+x) ≥ 0 ist (Voraussetzung!)</li>
                <li><strong>Ausmultiplizieren:</strong> Forme das Produkt aus und finde den „Überrest" nach dem Subtrahieren von 1+(n+1)x</li>
                <li><strong>Abschätzen:</strong> Zeige, dass der Überrest ≥ 0 ist</li>
              </ol>
            </>,
            <>
              <p>Warum nx² ≥ 0? Weil n ≥ 0 und x² ≥ 0 für alle reellen x.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Voraussetzung x ≥ −1 nicht erwähnen → <strong>✅ Richtig:</strong> Beim Multiplizieren der IV mit (1+x) muss 1+x ≥ 0 stehen, sonst dreht die Ungleichung — das ist genau x ≥ −1</li>
              <li><strong>❌ Falsch:</strong> nx² als negative Zahl behandeln → <strong>✅ Richtig:</strong> n ≥ 0 und x² ≥ 0 → nx² ≥ 0; daher 1+(n+1)x+nx² ≥ 1+(n+1)x</li>
            </ul>,
            <p>Warum darf man (IV) mit (1+x) multiplizieren ohne die Ungleichung umzukehren?</p>,
          ),
          solution: 'IA (n=0): (1+x)⁰ = 1 ≥ 1+0·x = 1  ✓\n\nIS: Sei n ∈ ℕ. Angenommen (1+x)ⁿ ≥ 1+nx (IV).\n\n(1+x)^(n+1) = (1+x)(1+x)ⁿ\n            ≥ (1+x)(1+nx)   [IV und x ≥ −1 → 1+x ≥ 0, (*) ]\n            = 1 + (n+1)x + nx²\n            ≥ 1 + (n+1)x    [da nx² ≥ 0]  ✓  □\n\nVoraussetzung x ≥ −1 wurde bei (*) verwendet: Wäre 1+x < 0, würde sich die Ungleichungsrichtung umkehren.',
        },
      ],
    },
    {
      id: 'b4a3',
      nr: 3,
      title: 'Mengen als Intervalle',
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Schreiben Sie als Intervall oder Vereinigung von Intervallen:\n\n'}
              {'A := { x ∈ ℝ\\{9} : 4/(x−9) ≤ 2 }'}
            </>
          ),
          hint: h(
            <>
              <p>Bei Ungleichungen mit x im Nenner muss man in <span className="hint-em">Fälle</span> aufteilen: x − 9 &gt; 0 und x − 9 &lt; 0, denn beim Multiplizieren mit einem negativen Nenner dreht sich das Ungleichungszeichen um.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere die Nullstelle des Nenners (hier: x = 9) und schließe sie aus dem Definitionsbereich aus</li>
                <li>Fall 1 (Nenner &gt; 0): Multipliziere mit dem Nenner ohne Richtungsumkehr und löse nach x</li>
                <li>Fall 2 (Nenner &lt; 0): Multipliziere mit dem Nenner und kehre dabei die Ungleichungsrichtung um</li>
                <li>In jedem Fall: Schneide das Ergebnis mit der Fallbedingung (x &gt; 9 bzw. x &lt; 9)</li>
                <li>Vereinige die Lösungsmengen beider Fälle</li>
              </ol>
            </>,
            <>
              <p>Probe: x=11 → 4/2 = 2 ≤ 2 ✓; x=10 → 4/1 = 4 ≤ 2 ✗ (10 ∉ A, richtig); x=0 → 4/(−9) ≤ 2 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 4/(x−9) ≤ 2 → 4 ≤ 2(x−9) (einfach mit x−9 multipliziert) → <strong>✅ Richtig:</strong> Vorzeichen von (x−9) hängt von x ab; zwei Fälle nötig (x&gt;9 und x&lt;9)</li>
              <li><strong>❌ Falsch:</strong> x=9 in die Lösungsmenge aufnehmen → <strong>✅ Richtig:</strong> x=9 macht den Nenner 0 → undefiniert → ausgeschlossen</li>
            </ul>,
            <p>Warum kann man eine Bruchungleichung nicht einfach durch den Nenner multiplizieren, ohne Fallunterscheidung zu machen — und was würde ein falsches Ergebnis aussehen, wenn man das ignoriert?</p>,
          ),
          solution: 'Fall 1 (x > 9): 4 ≤ 2(x−9) ⟺ 11 ≤ x → [11, ∞)\nFall 2 (x < 9): 4 ≥ 2(x−9) ⟺ 11 ≥ x, zusammen x < 9 → (−∞, 9)\n\nA = [11, ∞) ∪ (−∞, 9)',
        },
        {
          letter: 'b',
          text: 'B := { x ∈ ℝ : |x + 4| ≥ 6 }',
          hint: h(
            <>
              <p>Betrag-Ungleichung |A| ≥ c mit c &gt; 0: aufteilen in <span className="hint-em">A ≥ c oder A ≤ −c</span>.</p>
              <p>Alternativ: Fallunterscheidung je nach Vorzeichen von x+4.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere die Nullstelle des Ausdrucks im Betrag (hier: x+4 = 0)</li>
                <li>Fall 1 (x+4 ≥ 0): Ersetze |x+4| = x+4 und löse direkt</li>
                <li>Fall 2 (x+4 &lt; 0): Ersetze |x+4| = −(x+4) und löse — Vorzeichen beachten!</li>
                <li>In jedem Fall: Schneide mit der Fallbedingung</li>
                <li>Vereinige die Lösungsmengen</li>
              </ol>
            </>,
            <>
              <p>Gegenprobe: x=−5 → |−1| = 1 ≥ 6? Nein → −5 ∉ B ✓ (liegt zwischen −10 und 2)</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |x+4| ≥ 6 als −6 ≤ x+4 ≤ 6 lösen → <strong>✅ Richtig:</strong> −6 ≤ A ≤ 6 entspricht |A| ≤ 6 (kleiner-gleich!); für |A| ≥ 6 gilt A ≥ 6 oder A ≤ −6</li>
              <li><strong>❌ Falsch:</strong> Im Fall 2 beim Auflösen Vorzeichen vergessen: −(x+4) ≥ 6 → x+4 ≥ 6 → <strong>✅ Richtig:</strong> −(x+4) ≥ 6 ⟺ x+4 ≤ −6 ⟺ x ≤ −10</li>
            </ul>,
            <p>|x+4| ≥ 6 bedeutet geometrisch: Der Abstand von x zur Zahl −4 beträgt mindestens 6. Welche zwei Punkte liegen genau im Abstand 6 von −4, und sind das die Randpunkte deiner Lösung?</p>,
          ),
          solution: 'Fall 1 (x ≥ −4): x+4 ≥ 6 ⟺ x ≥ 2 → [2, ∞)\nFall 2 (x < −4): −(x+4) ≥ 6 ⟺ −10 ≥ x → (−∞, −10]\n\nB = (−∞, −10] ∪ [2, ∞)',
        },
        {
          letter: 'c',
          text: 'C := { x ∈ ℝ : |x − 2| ≥ |x + 3| }',
          hint: h(
            <>
              <p>Bei zwei Beträgen hilft eine <span className="hint-em">Fallunterscheidung an den Nullstellen</span> x=2 und x=−3. In jedem Fall fallen die Betragsstriche weg und man erhält eine einfache Ungleichung.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere die Nullstellen beider Betragsausdrücke (x=2 und x=−3) — das ergibt 3 Bereiche</li>
                <li>Für jeden Bereich: Ersetze die Betragsstriche ohne (x ≥ 2, −3 ≤ x &lt; 2, x &lt; −3) und löse die Ungleichung</li>
                <li>Schneide das Ergebnis jedes Falles mit der Fallbedingung</li>
                <li>Falls eine Ungleichung eine Tautologie ergibt (immer wahr): alle x des Bereichs sind Lösung</li>
                <li>Vereinige alle drei Fälle</li>
              </ol>
            </>,
            <>
              <p>Geometrisch: |x−2| ist der Abstand von x zur Zahl 2, |x+3| der Abstand zur −3. C sind die Punkte, die 2 mindestens so fern sind wie −3 – das ist die linke Halbgerade bis zur Mitte −1/2.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> −(x−2) = x−2 → <strong>✅ Richtig:</strong> −(x−2) = −x+2 = 2−x (Vorzeichenfehler beim Auflösen des Betrags)</li>
              <li><strong>❌ Falsch:</strong> In Fall 3 nur prüfen ob die Ungleichung gilt, ohne Fallbedingung zu intersektieren → <strong>✅ Richtig:</strong> 2 ≥ −3 ist immer wahr → alle x &lt; −3 liegen in C</li>
            </ul>,
            <p>|x−2| ist der Abstand von x zu 2, |x+3| der Abstand zu −3. Was sagt die Ungleichung |x−2| ≥ |x+3| geometrisch aus — welche Punkte auf der Zahlengeraden sind von 2 mindestens so weit entfernt wie von −3?</p>,
          ),
          solution: (
            <>
              {'Fall 1 (x ≥ 2): x−2 ≥ x+3 ⟺ −2 ≥ 3 → ∅\n'}
              {'Fall 2 (−3 ≤ x < 2): 2−x ≥ x+3 ⟺ −1/2 ≥ x → [−3, −1/2]\n'}
              {'Fall 3 (x < −3): 2−x ≥ −x−3 ⟺ 2 ≥ −3 → immer wahr → (−∞, −3)\n\n'}
              {'C = (−∞, −3) ∪ [−3, −'}<Frac n="1" d="2" />{'] = (−∞, −'}<Frac n="1" d="2" />{']'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b4a4',
      nr: 4,
      title: 'Supremum, Infimum, Maximum, Minimum',
      subaufgaben: [
        {
          letter: 'a',
          text: 'M₁ := { x ∈ ℝ : x > 0 und x² ≤ 4 }',
          hint: h(
            <>
              <p><span className="hint-em">Supremum</span>: kleinste obere Schranke (muss nicht in der Menge liegen). <span className="hint-em">Maximum</span>: größtes Element, das tatsächlich in der Menge liegt. Analoges gilt für Infimum/Minimum.</p>
            </>,
            <>
              <ol>
                <li>Löse die Ungleichung x² ≤ 4 nach x auf und kombiniere das Ergebnis mit der zweiten Bedingung</li>
                <li>Identifiziere den größten und kleinsten Wert der Menge</li>
                <li>Prüfe jeweils: Liegt dieser Extremwert tatsächlich in der Menge (→ Maximum/Minimum) oder nur als Grenzwert (→ nur Supremum/Infimum)?</li>
              </ol>
            </>,
            <>
              <p>Erinnerung: max existiert ⟺ sup wird angenommen (sup ∈ M).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> inf = 0 = min schreiben → <strong>✅ Richtig:</strong> 0 ∉ M₁ wegen der strikten Ungleichung x &gt; 0; daher existiert kein Minimum, nur inf = 0</li>
              <li><strong>❌ Falsch:</strong> sup = 2 ohne Maximum → <strong>✅ Richtig:</strong> 2 ∈ M₁ (2 &gt; 0 ✓ und 4 ≤ 4 ✓), also ist max = sup = 2</li>
            </ul>,
            <p>Was ist der konzeptuelle Unterschied zwischen sup und max: Warum existiert hier das Maximum, aber kein Minimum — und welches Zeichen (strikt oder nicht-strikt) in den Bedingungen ist dafür entscheidend?</p>,
          ),
          solution: 'M₁ = (0, 2]\n\nsup = 2 = max  (2 ∈ M₁)\ninf = 0,  min existiert nicht  (0 ∉ M₁)',
        },
        {
          letter: 'b',
          text: 'M₂ := { 1/z : z ∈ ℤ\\{0} }',
          hint: h(
            <>
              <p>Betrachte z = 1, −1, 2, −2, 3, −3, … und bestimme die entstehenden Werte. Welche Schranken werden <span className="hint-em">tatsächlich angenommen</span>?</p>
            </>,
            <>
              <ol>
                <li>Erkunde die Menge: Welche Werte nimmt 1/z für kleine |z| (z=±1, ±2, ±3) an? Und für große |z|?</li>
                <li>Identifiziere den größten und kleinsten tatsächlich angenommenen Wert</li>
                <li>Prüfe: Existiert ein Element, das die Schranke annimmt (→ max/min), oder nähert man sich nur an (→ nur sup/inf)?</li>
              </ol>
            </>,
            <>
              <p>Für große |z| kommen die Werte 1/z beliebig nahe an 0, aber 0 wird nie angenommen.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> inf = 0, weil 1/z → 0 für |z| → ∞ → <strong>✅ Richtig:</strong> M₂ enthält auch negative Werte (z=−1 → −1), also ist inf = −1, nicht 0</li>
              <li><strong>❌ Falsch:</strong> min = sup = 1 ohne z=1 zu prüfen → <strong>✅ Richtig:</strong> z=1 ∈ ℤ\{0} und 1/1=1 ∈ M₂ → max = 1 wird angenommen</li>
            </ul>,
            <p>Warum nähert sich 1/z für große |z| dem Wert 0, aber M₂ enthält 0 trotzdem nicht — und was bedeutet das für den Unterschied zwischen inf und min in dieser Menge?</p>,
          ),
          solution: 'M₂ enthält Werte 1, −1, 1/2, −1/2, 1/3, −1/3, …\n\nsup = 1 = max  (bei z=1)\ninf = −1 = min  (bei z=−1)',
        },
        {
          letter: 'c',
          text: 'M₃ := { 1/n + 1/m : n, m ∈ ℕ* }',
          hint: h(
            <>
              <p>Größter Wert: n=m=1 (beide Nenner minimal). Kleinste Werte: n oder m → ∞ lässt 1/n oder 1/m → 0. Kann 0 <span className="hint-em">erreicht</span> werden?</p>
            </>,
            <>
              <ol>
                <li>Finde den größten Wert: Wähle n und m so, dass 1/n + 1/m maximal wird</li>
                <li>Prüfe, ob dieser Wert in M₃ liegt (→ max) oder nur Grenzwert ist</li>
                <li>Finde den kleinsten Wert: Welche Wahl für n, m macht 1/n + 1/m beliebig klein?</li>
                <li>Prüfe, ob 0 tatsächlich angenommen werden kann für n, m ∈ ℕ*</li>
              </ol>
            </>,
            <>
              <p>Für alle n, m ∈ ℕ* gilt 1/n + 1/m ≥ 1/n + 1/n = 2/n &gt; 0 → 0 nie erreicht.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sup = 2 ohne max zu nennen → <strong>✅ Richtig:</strong> n=m=1 liefert 1+1=2 ∈ M₃, also ist max = 2 vorhanden</li>
              <li><strong>❌ Falsch:</strong> min = 0, weil 1/n+1/m → 0 → <strong>✅ Richtig:</strong> 0 ∉ M₃ (für alle n,m ∈ ℕ* gilt 1/n+1/m &gt; 0); inf = 0, kein Minimum</li>
            </ul>,
            <p>Warum kann 0 kein Minimum von M₃ sein, obwohl sich die Elemente beliebig nahe an 0 annähern? Was ist der grundlegende Unterschied zwischen „Grenzwert einer Folge in M₃" und „Element von M₃"?</p>,
          ),
          solution: 'Größter Wert: n=m=1 → 1+1=2, also max = sup = 2\nKleinste Werte: 1/n+1/m → 0 für n,m → ∞, aber nie = 0\n\nsup = 2 = max,  inf = 0,  min existiert nicht',
        },
        {
          letter: 'd',
          text: 'M₄ := { 1/n − 1/m : n, m ∈ ℕ* }',
          hint: h(
            <>
              <p>Suche Folgen von n, m, die den Ausdruck beliebig nahe an mögliche Schranken bringen. <span className="hint-em">Werden diese Schranken auch angenommen?</span></p>
            </>,
            <>
              <ol>
                <li>Finde die obere Schranke: Welche Grenzwerte hat 1/n − 1/m, wenn n oder m gegen ∞ geht?</li>
                <li>Prüfe für jede Schranke: Kann 1/n − 1/m = Schranke für n,m ∈ ℕ* gelten?</li>
                <li>Wenn nein: sup/inf ohne max/min; erkläre warum der Extremwert unerreichbar ist</li>
              </ol>
            </>,
            <>
              <p>Vergleich zu M₃: Dort war das Maximum erreichbar (bei n=m=1), hier nicht.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sup = max = 1, da 1/n−1/m für m→∞ gegen 1 geht → <strong>✅ Richtig:</strong> 1 wird nie angenommen (1/n−1/m=1 erfordert 1/m=0, unmöglich für m∈ℕ*); sup = 1, kein max</li>
              <li><strong>❌ Falsch:</strong> inf = 0, weil 1/n−1/m → 0 für n,m→∞ → <strong>✅ Richtig:</strong> Für n→∞, m=1 geht 1/n−1 → −1; inf = −1, kein min</li>
            </ul>,
            <p>Vergleiche M₃ und M₄: Bei M₃ existiert ein Maximum, bei M₄ nicht — obwohl beide nach oben durch 2 bzw. 1 beschränkt sind. Was unterscheidet die Erreichbarkeit des Supremums in diesen beiden Mengen?</p>,
          ),
          solution: 'n=1, m→∞: 1/n−1/m → 1 (nie genau 1)\nn→∞, m=1: 1/n−1/m → −1 (nie genau −1)\n\nsup = 1,  inf = −1,  max und min existieren nicht',
        },
      ],
    },
    {
      id: 'b4a5',
      nr: 5,
      title: 'Quantoren und y = x²',
      subaufgaben: [
        {
          letter: 'a',
          text: '∀x ∈ ℝ ∃y ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>Für jedes x muss ein passendes y existieren. Da x² für jedes reelle x einen wohldefinierten Wert hat, kann man stets <span className="hint-em">y := x²</span> wählen.</p>
              <p>Beweisschema für ∀x∃y: Für ein beliebiges, aber festes x einen konkreten Zeugen y angeben, der die Bedingung erfüllt.</p>
            </>,
            <pre className="hint-code-block">{`Sei x ∈ ℝ beliebig.
Wähle y := x².
Dann gilt y = x².  ✓`}</pre>,
            <>
              <p>Weitere wahre ∀x∃y-Aussagen (zum Vergleich):</p>
              <pre className="hint-code-block">{`∀x∈ℝ ∃y∈ℝ: y = 2x      → Wähle y := 2x
∀x∈ℝ ∃y∈ℝ: y = x + 1   → Wähle y := x+1
∀n∈ℕ ∃m∈ℕ: m > n       → Wähle m := n+1

Struktur: Das y darf von x abhängen!`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∀x∃y mit ∃y∀x gleichsetzen → <strong>✅ Richtig:</strong> Reihenfolge ist entscheidend: ∀x∃y erlaubt y=x² (y hängt von x ab); ∃y∀x würde ein festes y für alle x fordern</li>
              <li><strong>❌ Falsch:</strong> y muss eine Konstante sein → <strong>✅ Richtig:</strong> Bei ∀x∃y darf y von x abhängen; die Wahl y:=x² ist vollkommen gültig</li>
            </ul>,
            <p>Was erlaubt die Reihenfolge ∀x∃y, was ∃y∀x nicht erlaubt? Warum darf y von x abhängen — und was bedeutet das für die Universalität des Arguments?</p>,
          ),
          solution: 'Wahr. Für jedes x ∈ ℝ wähle y := x². Dann gilt y = x².',
        },
        {
          letter: 'b',
          text: '∃x ∈ ℝ ∀y ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>Es müsste ein <span className="hint-em">festes x</span> geben, sodass y = x² für alle reellen y gilt. Das hieße, x² nimmt jeden Wert an — unmöglich.</p>
              <p>∃x∀y: Reihenfolge beachten! Das x wird zuerst (fest) gewählt, dann muss die Bedingung für alle y erfüllt sein.</p>
            </>,
            <pre className="hint-code-block">{`Angenommen x₀ existiert mit y = x₀² für alle y.
Wähle y = −1: −1 = x₀²
Aber x₀² ≥ 0 für alle x₀ ∈ ℝ → Widerspruch.  ✗`}</pre>,
            <>
              <p>Vergleich: ∃x∀y- vs. ∀x∃y-Aussagen:</p>
              <pre className="hint-code-block">{`∀x∃y: y=x²   → WAHR  (y darf von x abhängen: y:=x²)
∃x∀y: y=x²   → FALSCH (ein festes x für alle y unmöglich)

x² kann nicht alle reellen Zahlen annehmen — nur [0,∞).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur y&gt;0 testen und „wahr" schließen → <strong>✅ Richtig:</strong> y=−1 hat kein reelles Urbild unter x², da x²≥0 immer → Aussage falsch</li>
              <li><strong>❌ Falsch:</strong> ∃x∀y wie ∀x∃y behandeln → <strong>✅ Richtig:</strong> Bei ∃x∀y wird x zuerst fest gewählt, dann muss y=x₀² für alle y ∈ ℝ gelten — das ist unmöglich</li>
            </ul>,
            <p>Was genau macht die Reihenfolge ∃x∀y so viel stärker als ∀x∃y — und warum scheitert die Behauptung an dem Wertebereich von x²?</p>,
          ),
          solution: 'Falsch. Für jedes fixe x gilt x² ≥ 0, also kann y = −1 nicht erfüllt werden.',
        },
        {
          letter: 'c',
          text: '∃x ∈ ℝ ∃y ∈ ℝ : y = x²',
          hint: h(
            <p>Es reicht ein <span className="hint-em">konkretes Beispiel</span> zu finden. ∃x∃y heißt: mindestens ein Paar (x, y) mit der Eigenschaft — und davon gibt es viele.</p>,
            <pre className="hint-code-block">{`Wähle x = 1, y = 1.
Dann y = 1 = 1² = x².  ✓`}</pre>,
            <>
              <p>Viele gültige Beispiele existieren:</p>
              <pre className="hint-code-block">{`x=0, y=0:   y = 0 = 0² ✓
x=1, y=1:   y = 1 = 1² ✓
x=−2, y=4:  y = 4 = (−2)² ✓
x=3, y=9:   y = 9 = 3² ✓

→ Für ∃x∃y reicht jedes dieser Paare als Beweis.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Für ∃x∃y alle Paare prüfen wollen → <strong>✅ Richtig:</strong> Ein einziges konkretes Beispiel (z.B. x=1, y=1) genügt als Beweis für ∃x∃y</li>
              <li><strong>❌ Falsch:</strong> Zu kompliziertes Beispiel suchen → <strong>✅ Richtig:</strong> x=0, y=0 ist das einfachste: y=0=0²=x² ✓</li>
            </ul>,
            <p>Warum ist ∃x∃y die schwächste aller fünf Varianten in dieser Aufgabe — und was wäre ein Existenzaussage, die trotzdem falsch wäre?</p>,
          ),
          solution: 'Wahr. Beispiel: x = 1, y = 1, dann y = 1 = 1².',
        },
        {
          letter: 'd',
          text: '∀y ∈ ℝ ∃x ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>Für jedes y müsste ein reelles x mit x² = y existieren. Betrachte <span className="hint-em">negative y</span>.</p>
              <p>Um ∀y∃x zu widerlegen, reicht ein einziges y, für das kein passendes x existiert.</p>
            </>,
            <pre className="hint-code-block">{`Wähle y = −1.
Gesucht: x mit x² = −1.
x² ≥ 0 für alle x ∈ ℝ → kein solches x.  ✗`}</pre>,
            <>
              <p>Vergleich zwischen ähnlichen Aussagen:</p>
              <pre className="hint-code-block">{`∀y∈[0,∞) ∃x∈ℝ: y=x²  → WAHR  (√y existiert!)
∀y∈ℝ     ∃x∈ℝ: y=x²  → FALSCH (y=−1 hat kein Urbild)

Der Unterschied liegt im Definitionsbereich von y!`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur y≥0 testen und auf „wahr" schließen → <strong>✅ Richtig:</strong> Ein einziges Gegenbeispiel (y=−1) reicht; x²≥0 für alle x ∈ ℝ → kein x mit x²=−1</li>
              <li><strong>❌ Falsch:</strong> √y für negatives y berechnen wollen → <strong>✅ Richtig:</strong> √ ist auf negativen reellen Zahlen nicht definiert; deshalb hat y=−1 kein reelles Urbild</li>
            </ul>,
            <p>∀y∃x wäre wahr, wenn der Wertebereich von x² ganz ℝ wäre. Was ist der tatsächliche Wertebereich von x² für x ∈ ℝ — und für welche y scheitert die Aussage?</p>,
          ),
          solution: 'Falsch. Gegenbeispiel: y = −1. Es gibt kein x ∈ ℝ mit x² = −1.',
        },
        {
          letter: 'e',
          text: '∃y ∈ ℝ ∀x ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>Ein festes y müsste <span className="hint-em">mit allen</span> Quadraten x² übereinstimmen. Da verschiedene x verschiedene Quadrate liefern, ist das unmöglich.</p>
              <p>∃y∀x: Das y wird zuerst (fest) gewählt, dann muss es für alle x gleichzeitig gelten.</p>
            </>,
            <pre className="hint-code-block">{`Angenommen y₀ existiert mit x² = y₀ für alle x.
x=1: y₀ = 1
x=2: y₀ = 4
Aber 1 ≠ 4 → Widerspruch.  ✗`}</pre>,
            <>
              <p>Vergleich: ∃y∀x vs. ∀x∃y:</p>
              <pre className="hint-code-block">{`∃y∀x: y=x²  → FALSCH  (ein festes y kann nicht
                         alle verschiedenen Quadrate sein)

∀x∃y: y=x²  → WAHR    (für jedes x darf y=x² gewählt
                         werden — y hängt von x ab)

Merkhilfe: In ∃y∀x ist y unabhängig von x zu wählen!`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∃y∀x mit ∀x∃y gleichsetzen → <strong>✅ Richtig:</strong> Reihenfolge ist entscheidend: bei ∃y∀x muss y unabhängig von x gewählt werden; x=1 und x=2 liefern verschiedene Quadrate → kein gemeinsames y möglich</li>
              <li><strong>❌ Falsch:</strong> y=0 als Kandidaten prüfen: 0=1²=1? → <strong>✅ Richtig:</strong> 0 ≠ 1, also funktioniert y=0 bereits für x=1 nicht</li>
            </ul>,
            <p>Warum kann kein festes y gleichzeitig 1² und 2² sein — und was bedeutet das für die Forderung „für alle x"? Wann wäre ∃y∀x: y=x² wahr, und in welchem mathematischen Kontext würde diese Aussage Sinn ergeben?</p>,
          ),
          solution: 'Falsch. x=1 liefert y=1, x=2 liefert y=4. Kein festes y passt zu allen x.',
        },
      ],
    },
    {
      id: 'b4a6',
      nr: 6,
      title: 'Euklidischer Algorithmus (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Bestimmen Sie mit Hilfe des euklidischen Algorithmus:\n(i)  ggT(156, −64)\n(ii) ggT(−296, −96)\n(iii) ggT(34, 21). Was fällt auf?',
          hint: h(
            <>
              <p>Der euklidische Algorithmus arbeitet mit positiven Zahlen: <span className="hint-em">ggT(a, b) = ggT(|a|, |b|)</span>. Wiederhole die Division mit Rest, bis der Rest 0 ist — der letzte nichtnull Rest ist der ggT.</p>
            </>,
            <>
              <ol>
                <li>Ersetze negative Argumente durch ihre Beträge: ggT(a, b) = ggT(|a|, |b|)</li>
                <li>Wiederhole: Schreibe den größeren Wert als Quotient · Divisor + Rest</li>
                <li>Ersetze das Paar durch (Divisor, Rest) und wiederhole</li>
                <li>Stoppe, wenn der Rest 0 ist — der letzte nichtnull Rest ist der ggT</li>
                <li>Beobachte bei (iii), welche Zahlenfolge in den Resten erscheint</li>
              </ol>
            </>,
            <>
              <p>Fibonacci-Zahlen sind genau die Zahlen, die dem euklidischen Algorithmus die meisten Schritte kosten.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ggT(156, −64) = −4 (Vorzeichen mitgenommen) → <strong>✅ Richtig:</strong> ggT ist per Definition ≥ 0; ggT(a,b) = ggT(|a|,|b|)</li>
              <li><strong>❌ Falsch:</strong> Rest falsch berechnen, z.B. 156 mod 64 = 92 → <strong>✅ Richtig:</strong> Rest = Dividend − Quotient·Divisor = 156 − 2·64 = 28</li>
            </ul>,
            <p>Warum terminiert der euklidische Algorithmus immer — und warum ist gerade die Fibonacci-Folge ein Extremfall, der besonders viele Schritte benötigt?</p>,
          ),
          solution: '(i) ggT(156,−64) = ggT(156,64) = 4\n  156 = 2·64+28,  64 = 2·28+8,  28 = 3·8+4,  8 = 2·4+0\n\n(ii) ggT(−296,−96) = ggT(296,96) = 8\n  296 = 3·96+8,  96 = 12·8+0\n\n(iii) ggT(34,21) = 1\n  34=1·21+13, 21=1·13+8, 13=1·8+5, 8=1·5+3, 5=1·3+2, 3=1·2+1, 2=2·1+0\n  Die Reste 13,8,5,3,2,1 sind gerade die ersten Fibonacci-Zahlen.',
        },
        {
          letter: 'b',
          text: '(Erweiterter euklidischer Algorithmus) Finden Sie Zahlen s, t ∈ ℤ so, dass\n\nggT(156, −64) = s · 156 + t · (−64).\n\nHinweis: Gehen Sie Ihre Rechenschritte aus Teil (a)(i) in umgekehrter Reihenfolge durch.',
          hint: h(
            <>
              <p>Stelle jeden Rest als Linearkombination von 156 und 64 dar, indem du die Divisionsschritte <span className="hint-em">rückwärts</span> auflöst. Beginne beim letzten nichtNull-Rest (= ggT = 4) und ersetze schrittweise.</p>
            </>,
            <>
              <ol>
                <li>Schreibe jeden Divisionsschritt als Restformel um: Rest = Dividend − Quotient · Divisor</li>
                <li>Beginne beim letzten nichtNull-Rest (= ggT) und schreibe ihn als Linearkombination der beiden Vorgänger</li>
                <li>Ersetze schrittweise rückwärts: Ersetze den kleineren der beiden durch seinen Ausdruck aus dem vorherigen Schritt</li>
                <li>Führe die Koeffizienten zusammen, bis nur noch die Originalzahlen 156 und 64 auftreten</li>
                <li>Passe das Vorzeichen von 64 an, um die Darstellung mit −64 zu erhalten</li>
              </ol>
            </>,
            <>
              <p>Einfacheres Beispiel zum Einüben der Technik: ggT(13, 8) = 1</p>
              <pre className="hint-code-block">{`Vorwärts (euklidischer Alg.):
13 = 1·8 + 5   →  5 = 13 − 1·8
 8 = 1·5 + 3   →  3 = 8 − 1·5
 5 = 1·3 + 2   →  2 = 5 − 1·3
 3 = 1·2 + 1   →  1 = 3 − 1·2
 2 = 2·1 + 0

Rückwärts:
1 = 3 − 1·2
  = 3 − 1·(5 − 1·3) = 2·3 − 1·5
  = 2·(8 − 1·5) − 1·5 = 2·8 − 3·5
  = 2·8 − 3·(13 − 1·8) = 5·8 − 3·13

→ 1 = 5·8 + (−3)·13  (Probe: 40 − 39 = 1 ✓)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Bei 7·28 − 3·64 stehen bleiben ohne Schritt (1) anzuwenden → <strong>✅ Richtig:</strong> 28 = 156 − 2·64 einsetzen: 7·(156−2·64)−3·64 = 7·156−17·64</li>
              <li><strong>❌ Falsch:</strong> −3·(64−2·28) = −3·64+2·28 (falscher Vorfaktor) → <strong>✅ Richtig:</strong> −3·(64−2·28) = −3·64+6·28; zusammen mit 28: (1+6)·28−3·64 = 7·28−3·64</li>
              <li><strong>❌ Falsch:</strong> Probe vergessen → <strong>✅ Richtig:</strong> 7·156+17·(−64) = 1092−1088 = 4 ✓ — die Probe erkennt Rechenfehler sofort</li>
            </ul>,
            <p>Was sagt der Satz von Bézout: Wenn ggT(a,b) = d, gibt es dann immer s,t mit s·a + t·b = d? Und was bedeutet es, dass d die kleinstmögliche positive Linearkombination von a und b über ℤ ist?</p>,
          ),
          solution: 'Rückwärts durch (a)(i):\n  4 = 28 − 3·8\n    = 28 − 3·(64 − 2·28) = 7·28 − 3·64\n    = 7·(156 − 2·64) − 3·64 = 7·156 − 17·64\n    = 7·156 + 17·(−64)\n\ns = 7,  t = 17\nProbe: 7·156 + 17·(−64) = 1092 − 1088 = 4 ✓',
        },
      ],
    },
    {
      id: 'b4a7',
      nr: 7,
      title: 'Gleichheiten für Summen und Produkte (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei n ∈ ℕ*. Welche der folgenden Gleichheiten gelten für jede Wahl von n und aₖ?\n\n(i)   ∑(k=1..n) k³ = ∑(k=2..n+1) (k+1)³\n(ii)  ∑(k=1..n) k³ = ∑(l=3..n+2) (l−2)³\n(iii) (∑aₖ)·(∑aₖ) = ∑aₖ²\n(iv)  (∏aₖ)·(∏aₖ) = ∏aₖ²\n(v)   4·∑aₖ = ∑4aₖ\n(vi)  4·∏aₖ = ∏(4aₖ)',
          hint: h(
            <>
              <p>Für <span className="hint-em">Indexumbenennungen</span> in Summen/Produkten: Substitution l = k+c verschiebt den Laufbereich. Für (iii) und (vi): konkrete Zahlen einsetzen (z. B. a₁=1, a₂=2) zum Testen.</p>
            </>,
            <>
              <pre className="hint-code-block">{`(i)  k → k+1 gibt ∑(k=2..n+1)(k+1)³ ≠ ∑(k=1..n) k³
   denn der neue Summand wäre ((k+1)+1)³ = (k+2)³, nicht k³
   → falsch

(ii) l = k+2, also k = l−2:
   k=1 → l=3, k=n → l=n+2, Summand (l−2)³ = k³  ✓
   → wahr

(iii) Gegenbeispiel: a₁=1, a₂=1 (n=2)
   (1+1)² = 4,  1²+1² = 2  → 4 ≠ 2  → falsch

(iv) (∏aₖ)² = ∏aₖ² weil (a₁·…·aₙ)² = a₁²·…·aₙ²  ✓

(v)  4·∑aₖ = ∑4aₖ wegen Linearität  ✓

(vi) Gegenbeispiel: a₁=1, a₂=1 (n=2)
   4·1·1 = 4,  (4·1)·(4·1) = 16  → 4 ≠ 16  → falsch`}</pre>
            </>,
            <>
              <p>Nur (ii), (iv) und (v) gelten für jede Wahl.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Bei (i) denken: Indexverschiebung ändert nur Grenzen, nicht Summand → <strong>✅ Richtig:</strong> k→k+1 macht aus ∑(k=1..n) k³ die Summe ∑(k=2..n+1) (k+1)³, nicht k³; (i) ist daher falsch</li>
              <li><strong>❌ Falsch:</strong> Bei (vi) 4·∏aₖ = ∏(4aₖ) annehmen → <strong>✅ Richtig:</strong> ∏(4aₖ) = 4ⁿ·∏aₖ weil jeder der n Faktoren mit 4 multipliziert wird; nur für n=1 würde 4=4¹ stimmen</li>
            </ul>,
            <p>Bei (vi): ∏(4aₖ) = 4ⁿ · ∏aₖ ≠ 4 · ∏aₖ für n &gt; 1.</p>,
          ),
          solution: '(i)  falsch: Index­shift ergibt (k+2)³, nicht k³.\n(ii) wahr: Substitution l=k+2 liefert exakt dieselbe Summe.\n(iii) falsch: (∑aₖ)² enthält Kreuzterme. Gegenbeispiel: a₁=a₂=1 → 4 ≠ 2.\n(iv) wahr: (a₁·…·aₙ)² = a₁²·…·aₙ².\n(v)  wahr: Konstante kann aus der Summe gezogen werden.\n(vi) falsch: ∏(4aₖ) = 4ⁿ·∏aₖ. Gegenbeispiel n=2, a₁=a₂=1 → 4 ≠ 16.\n\nNur (ii), (iv), (v) gelten allgemein.',
        },
      ],
    },
  ],
}
