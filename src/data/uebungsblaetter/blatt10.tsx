import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt10: MatheBlatt = {
  id: 'blatt10',
  nr: '10',
  titel: 'Reihen, Grenzwerte von Funktionen, Asymptotik',
  aufgaben: [
    {
      id: 'b10a1',
      nr: 1,
      title: 'Reihen auf Konvergenz untersuchen',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Σ(k=1 bis ∞) (−1)ᵏ',
          hint: h(
            <p><span className="hint-em">Notwendige Bedingung (Nullfolge)</span>: Konvergiert Σaₖ, so muss aₖ → 0 für k → ∞. Falls nicht, divergiert die Reihe sofort.</p>,
            <>
              <pre className="hint-code-block">{`aₖ = (−1)ᵏ
aₖ pendelt zwischen −1 und +1 → kein Grenzwert
→ aₖ bildet keine Nullfolge → Reihe divergiert.`}</pre>
            </>,
            <p>Vergleich: Σ (−1)ᵏ/k konvergiert nach Leibniz (dort 1/k → 0), aber hier ist aₖ ↛ 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Wechselnde Vorzeichen → Leibnizkriterium → Reihe konvergiert → <strong>✅ Richtig:</strong> Leibniz erfordert zusätzlich aₖ → 0; hier gilt (−1)ᵏ ↛ 0, daher divergiert die Reihe</li>
            </ul>,
            <p>Warum reicht es nicht aus, dass die Vorzeichen alternieren — welche zusätzliche Bedingung braucht das Leibnizkriterium?</p>,
          ),
          solution: 'aₖ = (−1)ᵏ bildet keine Nullfolge (pendelt zwischen ±1).\n→ Reihe divergiert.',
        },
        {
          letter: 'b',
          text: <>{'Σ(k=1 bis ∞) (−1)ᵏ · '}<Frac n="1" d="k²" /></>,
          hint: h(
            <>
              <p>Zwei Methoden:</p>
              <ul>
                <li><span className="hint-em">Leibnizkriterium</span>: Für alternierende Reihe Σ(−1)ᵏaₖ mit aₖ ≥ 0: Falls (aₖ) monoton fallend und aₖ → 0, konvergiert die Reihe.</li>
                <li><span className="hint-em">Majorantenkriterium</span>: Falls |aₖ| ≤ bₖ und Σbₖ konvergiert, konvergiert auch Σaₖ.</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Wähle Leibniz oder Majorantenkriterium</li>
                <li><em>Leibniz:</em> Zeige, dass aₖ = 1/k² monoton fällt und gegen 0 geht</li>
                <li><em>Majorante:</em> Finde bₖ ≥ |aₖ| sodass Σbₖ als bekannte konvergente Reihe identifiziert werden kann</li>
                <li>Schließe auf Konvergenz mithilfe des gewählten Kriteriums</li>
              </ol>
            </>,
            <p>p-Reihe: Σ 1/kᵖ konvergiert genau für p &gt; 1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> aₖ → 0 genügt für Leibniz → <strong>✅ Richtig:</strong> Zusätzlich muss aₖ monoton fallend sein; beide Bedingungen prüfen</li>
              <li><strong>❌ Falsch:</strong> Majorante bₖ beliebig wählen → <strong>✅ Richtig:</strong> bₖ muss selbst eine konvergente Reihe ergeben (z.B. p-Reihe mit p &gt; 1)</li>
            </ul>,
            <p>Welche zwei Bedingungen braucht Leibniz — und wie überzeugst du dich, dass beide hier tatsächlich gelten?</p>,
          ),
          solution: (
            <>
              {'Leibniz: aₖ = '}<Frac n="1" d="k²" />{', aₖ₊₁ = '}<Frac n="1" d="(k+1)²" />{' ≤ aₖ (monoton fallend), lim aₖ = 0 → konvergiert.\n\n'}
              {'Majorante: bₖ = '}<Frac n="1" d="k²" />{', Σbₖ konvergiert (p=2), |(−1)ᵏ/k²| ≤ bₖ → konvergiert.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Σ(k=1 bis ∞) '}<Frac n="k⁵" d="(−4) · k!" /></>,
          hint: h(
            <>
              <p>Bei Faktoriell im Nenner eignen sich <span className="hint-em">Quotienten-</span> oder <span className="hint-em">Wurzelkriterium</span>. Das Quotientenkriterium ist besonders praktisch, da (k+1)!/k! = k+1 leicht vereinfacht werden kann.</p>
            </>,
            <>
              <ol>
                <li>Wähle das Quotientenkriterium (Faktoriell im Nenner macht es einfach)</li>
                <li>Berechne |aₖ₊₁/aₖ| und vereinfache (nutze (k+1)!/k! = k+1)</li>
                <li>Bestimme den Grenzwert — beachte, dass einer der Faktoren → 0 geht</li>
              </ol>
            </>,
            <p>Merke: k! wächst schneller als jede Potenz kⁿ, daher k/ᵏ√(k!) → 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (k+1)!/k! = 1 → <strong>✅ Richtig:</strong> (k+1)!/k! = k+1; der Faktor k+1 bleibt im Nenner stehen</li>
              <li><strong>❌ Falsch:</strong> Vorzeichen −4 beeinflusst das Konvergenzergebnis → <strong>✅ Richtig:</strong> Quotientenkriterium verwendet Beträge, daher spielt das Vorzeichen keine Rolle</li>
            </ul>,
            <p>Warum vereinfacht sich (k+1)!/k! zu k+1 — und wie wirkt sich dieser Term auf den Grenzwert des Quotienten aus?</p>,
          ),
          solution: (
            <>
              {'Quotientenkriterium: |aₖ₊₁/aₖ| = '}<Frac n="(k+1)⁵ · k!" d="k⁵ · (k+1)!" />{' = ((k+1)/k)⁵ · '}<Frac n="1" d="k+1" />{' → 0 < 1\n\n'}
              {'Wurzelkriterium: ᵏ√|aₖ| = '}<Frac n="k" d="ᵏ√(4·k!)" />{' → 0 < 1\n→ Reihe konvergiert.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'Σ(k=1 bis ∞) ('}<Frac n="k" d="2k+1" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Bei Reihen der Form Σ(aₖ)ᵏ ist das <span className="hint-em">Wurzelkriterium</span> ideal, da die k-te Wurzel den Exponenten k aufhebt.</p>
            </>,
            <>
              <ol>
                <li>Erkenne, dass aₖ eine k-te Potenz ist — ideal für das Wurzelkriterium</li>
                <li>Berechne ᵏ√|aₖ| — die k-te Potenz und die k-te Wurzel heben sich auf</li>
                <li>Bestimme den Grenzwert des resultierenden Ausdrucks (kürze führende Terme)</li>
              </ol>
            </>,
            <p>Grenzwert: Zähler und Nenner durch k dividieren → 1/(2+1/k) → 1/2.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√(aᵏ) = a^(1/k) → <strong>✅ Richtig:</strong> ᵏ√(aᵏ) = a für a ≥ 0; die k-te Potenz und die k-te Wurzel heben sich auf</li>
              <li><strong>❌ Falsch:</strong> lim k/(2k+1) = 1 → <strong>✅ Richtig:</strong> Durch k dividieren: 1/(2+1/k) → 1/2; höchste Potenz ausklammern</li>
            </ul>,
            <p>Warum hebt sich beim Wurzelkriterium die k-te Potenz auf — und was ist der nächste Schritt nach der Vereinfachung?</p>,
          ),
          solution: (
            <>
              {'ᵏ√|aₖ| = '}<Frac n="k" d="2k+1" />{' → '}<Frac n="1" d="2" />{' < 1\n→ Reihe konvergiert nach Wurzelkriterium.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a2',
      nr: 2,
      title: 'Grenzwerte bestimmen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="x − 4x³ + 2" d="x + 4x⁴ + 7x²" /></>,
          hint: h(
            <>
              <p>Bei x → ∞ in rationalen Funktionen: Durch die <span className="hint-em">höchste vorkommende Potenz</span> (hier x⁴, Grad des Nenners) dividieren. Alle Terme mit positiver x-Potenz im Nenner gehen dann → 0.</p>
              <p>Ist Grad(Zähler) &lt; Grad(Nenner), ist der Grenzwert 0.</p>
            </>,
            <>
              <ol>
                <li>Bestimme die höchste vorkommende Potenz (hier: im Nenner)</li>
                <li>Dividiere Zähler und Nenner durch diese Potenz</li>
                <li>Bestimme den Grenzwert — alle Terme x⁻ⁿ mit n &gt; 0 gehen → 0</li>
              </ol>
            </>,
            <p>Grad(Z) = 3, Grad(N) = 4 → Grad(N) &gt; Grad(Z) → Grenzwert = 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Durch die höchste Zähler-Potenz (x³) dividieren → <strong>✅ Richtig:</strong> Immer durch die höchste Potenz aller Terme (hier x⁴ aus dem Nenner) dividieren</li>
              <li><strong>❌ Falsch:</strong> Grad(Z) = 7 oder Grad(N) = 1 ablesen → <strong>✅ Richtig:</strong> Grad(Z) = max-Exponent im Zähler = 3, Grad(N) = 4</li>
            </ul>,
            <p>Was passiert mit einem Bruch, dessen Zählergrad kleiner ist als der Nennergrad — und warum?</p>,
          ),
          solution: (
            <>
              {'lim '}<Frac n="x − 4x³ + 2" d="x + 4x⁴ + 7x²" />{' = lim '}<Frac n="1" d="x" />{' · '}<Frac n="1/x² − 4 + 2/x³" d="1/x³ + 4 + 7/x²" />{' = 0 · '}<Frac n="−4" d="4" />{' = 0'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'lim'}<sub>{'x→−∞'}</sub>{' '}<Frac n="x⁷ − x" d="x − 3x²" /></>,
          hint: h(
            <>
              <p>Grad(Z) = 7 &gt; Grad(N) = 2 → Grenzwert ist ±∞. Höchste Nenner-Potenz (x²) ausklammern, um den wachsenden Faktor x⁵ sichtbar zu machen.</p>
              <p>Vorzeichen bei x → −∞ beachten: x⁵ → −∞ (ungerade Potenz!).</p>
            </>,
            <>
              <ol>
                <li>Klammere die höchste Potenz aus Zähler und Nenner aus</li>
                <li>Bestimme den verbleibenden Faktor und dessen Grenzwert</li>
                <li>Beachte das Vorzeichen bei x → −∞ (ungerade Potenzen werden negativ)</li>
                <li>Multipliziere die beiden Faktoren — beachte das Vorzeichen des Gesamtprodukts</li>
              </ol>
            </>,
            <p>Zwei negative Faktoren (x⁵ → −∞ und 1/(1/x−3) → −1/3) ergeben +∞.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> x⁵ → +∞ für x → −∞ → <strong>✅ Richtig:</strong> Ungerade Potenz: (−∞)⁵ = −∞; das Vorzeichen wechselt</li>
              <li><strong>❌ Falsch:</strong> 1/x − 3 → +3 für x → −∞ → <strong>✅ Richtig:</strong> 1/x → 0, also 1/x − 3 → −3; das Vorzeichen des −3 bleibt</li>
            </ul>,
            <p>Warum ergibt xⁿ für x → −∞ einen negativen Wert — und für welche Exponenten wechselt sich das Vorzeichen?</p>,
          ),
          solution: (
            <>
              {'lim '}<Frac n="x⁷ − x" d="x − 3x²" />{' = lim x⁵ · '}<Frac n="1 − 1/x⁶" d="1/x − 3" />{'\n'}
              {'x → −∞: x⁵ → −∞, '}<Frac n="1 − 1/x⁶" d="1/x − 3" />{' → '}<Frac n="1" d="−3" />{'\n'}
              {'→ (−∞) · (−'}<Frac n="1" d="3" />{') = +∞'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a3',
      nr: 3,
      title: 'Grenzwerte und Stetigkeit der Funktion h',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei h: ℝ → ℝ mit h(x) = (x²−1)/(x+1) für x ≠ −1 und h(−1) = −100.\n\nBestimmen Sie lim(x→−1, x<−1) h(x),  lim(x→−1, x>−1) h(x)  und  lim(x→−1) h(x).\nIst h stetig in x = −1?',
          hint: h(
            <>
              <p>Für x ≠ −1 vereinfacht sich h(x): <span className="hint-em">x²−1 = (x+1)(x−1)</span>, also kürzt sich (x+1).</p>
              <p>Stetigkeit in x₀: lim(x→x₀) f(x) muss existieren und gleich f(x₀) sein.</p>
            </>,
            <>
              <ol>
                <li>Vereinfache h(x) für x ≠ −1 durch Faktorisierung des Zählers</li>
                <li>Berechne den links- und rechtsseitigen Grenzwert mithilfe der vereinfachten Form</li>
                <li>Entscheide, ob der beidseitige Grenzwert existiert (Links = Rechts?)</li>
                <li>Vergleiche den Grenzwert mit h(−1) und urteile über Stetigkeit</li>
              </ol>
            </>,
            <p>Würde man h(−1) = −2 setzen, wäre h stetig. Der Defekt liegt nur am Funktionswert.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(x→−1) h(x) = h(−1) = −100 → <strong>✅ Richtig:</strong> Der Grenzwert ist −2; h(−1) = −100 ist nur der Funktionswert, nicht der Grenzwert</li>
              <li><strong>❌ Falsch:</strong> (x+1) auch bei x = −1 kürzen → <strong>✅ Richtig:</strong> Kürzen nur beim Grenzwertprozess erlaubt; bei x = −1 direkt wäre (x+1) = 0 (Division durch 0)</li>
            </ul>,
            <p>Was bedeutet es für die Stetigkeit, wenn der Grenzwert zwar existiert, aber nicht mit dem Funktionswert übereinstimmt?</p>,
          ),
          solution: (
            <>
              {'Für x ≠ −1: h(x) = '}<Frac n="(x+1)(x−1)" d="x+1" />{' = x − 1\n\n'}
              {'lim(x→−1, x<−1) h(x) = −2\n'}
              {'lim(x→−1, x>−1) h(x) = −2\n'}
              {'→ lim(x→−1) h(x) = −2\n\n'}
              {'h(−1) = −100 ≠ −2 → h ist nicht stetig in x = −1.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a4',
      nr: 4,
      title: 'Grenzwerte und Stetigkeit von f',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei f(x) = |4−2x|/(x−2) für x ≠ 2 und f(2) = 0.\n\nBestimmen Sie:\n(a) lim'}<sub>{'x→2, x>2'}</sub>{' f(x)\n(b) lim'}<sub>{'x→2, x<2'}</sub>{' f(x)\n(c) lim'}<sub>{'x→2'}</sub>{' f(x)\n(d) lim'}<sub>{'x→0'}</sub>{' f(x)\n\nIst f stetig in x = 2?'}</>,
          hint: h(
            <>
              <p>Betragsfunktion fallweise auswerten: |4−2x| = 2|2−x|. Das Vorzeichen von (2−x) hängt davon ab, ob x &gt; 2 oder x &lt; 2.</p>
              <p>Für lim(x→0): f ist bei x = 0 durch die Formel direkt auswertbar (da 0 ≠ 2).</p>
            </>,
            <>
              <ol>
                <li>Schreibe |4−2x| = 2|2−x| um</li>
                <li>Werte |2−x| fallweise aus: für x &gt; 2 und für x &lt; 2 getrennt</li>
                <li>Kürze (x−2) und bestimme den rechtsseitigen und linksseitigen Grenzwert</li>
                <li>Vergleiche beide einseitigen Grenzwerte — existiert der Gesamtgrenzwert?</li>
                <li>Für lim(x→0): Setze x=0 direkt in die Formel ein (kein Stetigkeitsproblem)</li>
              </ol>
            </>,
            <p>Da lim(x→2) f(x) nicht existiert, ist f nicht stetig in x = 2.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> |2−x| = x−2 für alle x → <strong>✅ Richtig:</strong> Betrag ist fallweise: für x &lt; 2 ist |2−x| = 2−x, für x &gt; 2 ist |2−x| = x−2</li>
              <li><strong>❌ Falsch:</strong> lim(x→0) f(x) = "nicht definiert" → <strong>✅ Richtig:</strong> f ist bei x = 0 durch die Formel direkt auswertbar; Einsetzen ergibt f(0) = −2</li>
            </ul>,
            <p>Wann existiert ein beidseitiger Grenzwert — und was passiert, wenn links- und rechtsseitiger Grenzwert verschieden sind?</p>,
          ),
          solution: (
            <>
              {'|4−2x|/(x−2) = 2|2−x|/(x−2)\n\n'}
              {'x > 2: 2(x−2)/(x−2) = 2\nx < 2: −2(x−2)/(x−2) = −2\n\n'}
              {'(a) lim(x→2, x>2) f(x) = 2\n'}
              {'(b) lim(x→2, x<2) f(x) = −2\n'}
              {'(c) lim(x→2) f(x) existiert nicht (2 ≠ −2)\n'}
              {'(d) lim(x→0) f(x) = '}<Frac n="4−0" d="0−2" />{' = '}<Frac n="4" d="−2" />{' = −2\n\n'}
              {'Da lim(x→2) f(x) nicht existiert, ist f nicht stetig in x = 2.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a5',
      nr: 5,
      title: 'Definitionsbereich und Asymptotik',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei f: Dᶠ → ℝ mit f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{'. Bestimmen Sie den maximalen Definitionsbereich Dᶠ.'}</>,
          hint: h(
            <>
              <p>Maximaler Definitionsbereich: Alle x ∈ ℝ, für die der Ausdruck definiert ist. Hier muss der <span className="hint-em">Nenner ≠ 0</span> sein.</p>
            </>,
            <>
              <pre className="hint-code-block">{`x² − 1 ≠ 0
x² ≠ 1
x ≠ 1  und  x ≠ −1

Dᶠ = ℝ \\ {−1, 1}`}</pre>
            </>,
            <p>Schreibweise: Dᶠ = {'{x ∈ ℝ : x² − 1 ≠ 0}'} = ℝ \ {'{−1, 1}'}.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Zähler x³−x²−x = 0 lösen für den Definitionsbereich → <strong>✅ Richtig:</strong> Nur der Nenner darf nicht 0 sein; Zähler ≠ 0 ist keine Bedingung für den Definitionsbereich</li>
            </ul>,
            <p>Warum spielen die Nullstellen des Zählers keine Rolle für den Definitionsbereich — was verbietet wirklich den Definitionsbereich einzuschränken?</p>,
          ),
          solution: 'x² − 1 ≠ 0  ⟺  x ≠ ±1\nDᶠ = ℝ \\ {−1, 1}',
        },
        {
          letter: 'b',
          text: <>{'Untersuchen Sie das Verhalten von f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{' für x → ±∞.'}</>,
          hint: h(
            <>
              <p>Grad(Zähler) = 3 &gt; Grad(Nenner) = 2 → der Grenzwert ist ±∞. Höchste Nenner-Potenz x² ausklammern.</p>
            </>,
            <>
              <ol>
                <li>Klammere x² (höchste Nenner-Potenz) aus Zähler und Nenner aus</li>
                <li>Bestimme den Grenzwert des Bruchs (alle 1/xⁿ-Terme → 0)</li>
                <li>Beachte den Faktor x — bestimme sein Vorzeichen für x → ∞ vs. x → −∞</li>
              </ol>
            </>,
            <p>Grad(Z) − Grad(N) = 1 → lineares Wachstum (nicht quadratisch).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 0 weil es ein Bruch ist → <strong>✅ Richtig:</strong> Grenzwert 0 gilt nur wenn Grad(Nenner) &gt; Grad(Zähler); hier Grad(Z) = 3 &gt; Grad(N) = 2, also → ±∞</li>
            </ul>,
            <p>Warum bestimmt hier der Grad-Unterschied zwischen Zähler und Nenner das Wachstumsverhalten — und nicht der Quotient der Koeffizienten?</p>,
          ),
          solution: (
            <>
              {'f(x) = x · '}<Frac n="1 − 1/x − 1/x²" d="1 − 1/x²" />{'\n\nlim(x→∞) f(x) = ∞,  lim(x→−∞) f(x) = −∞'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Ist f(x) = '}<Frac n="x³ − x² − x" d="x² − 1" />{' in ±∞ asymptotisch linear oder quadratisch? Bestimmen Sie die asymptotische Gerade bzw. Parabel.'}</>,
          hint: h(
            <>
              <p>Grad(Z) = Grad(N)+1 → <span className="hint-em">asymptotisch lineares Verhalten</span>. Die asymptotische Gerade a(x) bestimmt man durch <span className="hint-em">Polynomdivision</span>: f(x) = a(x) + R/Q, wobei R/Q → 0 für x → ±∞.</p>
            </>,
            <>
              <ol>
                <li>Führe Polynomdivision durch bis der Rest-Grad &lt; Nenner-Grad (= 2) ist</li>
                <li>Schreibe f(x) = Quotient + Rest/(x²−1)</li>
                <li>Identifiziere den Quotienten als asymptotische Gerade a(x)</li>
                <li>Probe: Prüfe, dass lim(x→±∞) (f(x) − a(x)) = 0</li>
              </ol>
            </>,
            <p>Asymptotische Gerade: a: ℝ → ℝ, x ↦ x − 1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Polynomdivision nach dem ersten Schritt (x) abbrechen → <strong>✅ Richtig:</strong> Weiter dividieren bis Rest-Grad &lt; Divisor-Grad (Grad 0 &lt; 2); zweiter Schritt ergibt −1</li>
              <li><strong>❌ Falsch:</strong> Probe weglassen → <strong>✅ Richtig:</strong> lim(x→±∞) (f(x) − a(x)) = 0 prüfen, um die Asymptote zu bestätigen</li>
            </ul>,
            <p>Warum liefert nur der Quotient der Polynomdivision (und nicht der Rest) die Asymptote?</p>,
          ),
          solution: (
            <>
              {'Polynomdivision: '}<Frac n="x³−x²−x" d="x²−1" />{' = x − 1 − '}<Frac n="1" d="x²−1" />{'\n\n'}
              {'Asymptotische Gerade: a(x) = x − 1\n\n'}
              {'Probe: lim(x→±∞) (f(x) − (x−1)) = lim (−'}<Frac n="1" d="x²−1" />{') = 0 ✓'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b10a6',
      nr: 6,
      title: 'O-Notation (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Welche Aussagen sind wahr?\n(i)   n ∈ O(n²) für n → ∞\n(ii)  n + n² ∈ O(n²) für n → ∞\n(iii) 1000n² ∈ O(n²) für n → ∞\n(iv)  f(n) ∈ O(g(n)) ⟺ g(n) ∈ O(f(n)) für n → ∞',
          hint: h(
            <>
              <p><span className="hint-em">O-Notation</span>: f ∈ O(g) bedeutet ∃C &gt; 0, N: |f(n)| ≤ C·|g(n)| für alle n ≥ N. Informell: f wächst höchstens so schnell wie g (bis auf konstanten Faktor).</p>
            </>,
            <>
              <ol>
                <li>Für jede wahre Aussage: Gib C und N explizit an, sodass |f(n)| ≤ C·|g(n)| für alle n ≥ N</li>
                <li>Für (iv): Überlege, ob O-Notation symmetrisch ist — oder finde ein Gegenbeispiel</li>
                <li>Bei Gegenbeispielen: Zeige, dass die Rückrichtung scheitert, indem die O-Bedingung für große n verletzt wird</li>
              </ol>
            </>,
            <p>O-Notation ist nicht symmetrisch (das wäre Θ-Notation).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1000n² ∉ O(n²) wegen großem Koeffizient → <strong>✅ Richtig:</strong> C = 1000 ist eine positive Konstante; O ignoriert konstante Faktoren</li>
              <li><strong>❌ Falsch:</strong> f ∈ O(g) ⟺ g ∈ O(f) (Symmetrie wie Θ) → <strong>✅ Richtig:</strong> O ist nur obere Schranke, nicht symmetrisch; n ∈ O(n²) aber n² ∉ O(n)</li>
            </ul>,
            <p>Was unterscheidet O-Notation von Θ-Notation — und warum ist O nicht symmetrisch?</p>,
          ),
          solution: '(i)   wahr: n ≤ 1·n² für n ≥ 1\n(ii)  wahr: n + n² ≤ 2n² für n ≥ 1\n(iii) wahr: 1000n² ≤ 1000·n²\n(iv)  falsch: n ∈ O(n²) aber n² ∉ O(n)',
        },
        {
          letter: 'b',
          text: 'Seien f(n) ∈ O(g(n)) und g(n) ∈ O(h(n)) für n → ∞. Gilt dann f(n) ∈ O(h(n))?',
          hint: h(
            <>
              <p>Dies ist die <span className="hint-em">Transitivität der O-Notation</span>. Die Abschätzungen aus beiden Voraussetzungen lassen sich verketten: aus |f| ≤ C₁|g| und |g| ≤ C₂|h| folgt |f| ≤ C₁C₂|h|.</p>
            </>,
            <>
              <ol>
                <li>Schreibe die zwei O-Definitionen explizit auf (mit C₁, N₁ und C₂, N₂)</li>
                <li>Verkette die Ungleichungen: |f| ≤ C₁|g| ≤ C₁C₂|h|</li>
                <li>Benenne die neue Konstante C und die neue Schwelle N — damit ist die O-Definition erfüllt</li>
              </ol>
            </>,
            <p>Diese Eigenschaft heißt Transitivität von O und gilt allgemein.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> „Ja offensichtlich" ohne Beweis hinschreiben → <strong>✅ Richtig:</strong> Explizit C := C₁·C₂ und N := max(N₁,N₂) angeben, um die O-Definition zu erfüllen</li>
            </ul>,
            <p>Warum genügt es, C := C₁·C₂ und N := max(N₁,N₂) zu wählen — welche Eigenschaft dieser Werte macht die O-Definition erfüllt?</p>,
          ),
          solution: 'Ja.\n∃C₁,N₁: |f(n)| ≤ C₁|g(n)| für n ≥ N₁\n∃C₂,N₂: |g(n)| ≤ C₂|h(n)| für n ≥ N₂\n→ |f(n)| ≤ C₁C₂·|h(n)| für n ≥ max(N₁,N₂)\n→ f(n) ∈ O(h(n)) ✓',
        },
      ],
    },
  ],
}
