import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt7: MatheBlatt = {
  id: 'blatt7',
  nr: '7',
  titel: 'Folgen, geometrische Summenformel',
  aufgaben: [
    {
      id: 'b7a1',
      nr: 1,
      title: 'Abbildungsvorschriften und rekursive Folge',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Geben Sie zu nachstehenden Folgen jeweils die Abbildungsvorschrift ℕ → ℝ, n ↦ xₙ an:\n\n(i)   (xₙ) = (0, 3, 6, 9, 12, …)\n(ii)  (xₙ) = (−4, −1, 2, 5, 8, …)\n(iii) (xₙ) = (0, −1, 2, −3, 4, …)\n(iv)  (xₙ) = (0, 1, −2, 3, −4, …)\n(v)   (xₙ) = (1/2, 1/4, 1/8, 1/16, 1/32, …)\n(vi)  (xₙ) = (1, 1/3, 1/7, 1/15, 1/31, …)',
          hint: h(
            <>
              <p>Eine Abbildungsvorschrift n ↦ xₙ beschreibt, wie der Index n (beginnend bei 0) den Folgenterm xₙ erzeugt. Suche Muster:</p>
              <ul>
                <li><span className="hint-em">Arithmetische Folge</span>: konstante Differenz → xₙ = a + d·n</li>
                <li><span className="hint-em">Vorzeichenwechsel</span>: Faktor (−1)ⁿ oder (−1)ⁿ⁺¹</li>
                <li><span className="hint-em">Geometrische Folge</span>: konstantes Verhältnis → xₙ = a·rⁿ</li>
                <li><span className="hint-em">Nenner der Form 2ⁿ−1</span>: Potenzen von 2 minus 1 prüfen</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Berechne die Differenz aufeinanderfolgender Glieder — ist sie konstant? → arithmetische Folge xₙ = x₀ + d·n</li>
                <li>Prüfe das Vorzeichen: Wechselt es? → Faktor (−1)ⁿ oder (−1)ⁿ⁺¹, je nach Vorzeichen bei n=0</li>
                <li>Prüfe das Verhältnis aufeinanderfolgender Glieder — ist es konstant? → geometrische Folge xₙ = a·qⁿ</li>
                <li>Schaue auf Nenner: Sind es Potenzen minus 1 (z.B. 1, 3, 7, 15, …)? → 2ⁿ−1-Muster</li>
                <li>Probe: n=0 und n=1 einsetzen und mit den Folgengliedern vergleichen</li>
              </ol>
            </>,
            <>
              <p>Probe für (v): n=0 → 1/2¹=1/2 ✓; n=1 → 1/2²=1/4 ✓</p>
              <p>Probe für (vi): n=0 → 1/(2−1)=1 ✓; n=1 → 1/(4−1)=1/3 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> xₙ = (−1)ⁿ⁺¹n für (iii) → <strong>✅ Richtig:</strong> Probe: n=1: (−1)²·1=1, aber gefordert ist −1; also (−1)ⁿ·n für (iii); für (iv) ist es (−1)ⁿ⁺¹·n</li>
              <li><strong>❌ Falsch:</strong> xₙ = (1/2)ⁿ für (v) → <strong>✅ Richtig:</strong> n=0 liefert (1/2)⁰=1, aber x₀=1/2 gefordert; richtig: xₙ = (1/2)ⁿ⁺¹ (Probe: n=0 → 1/2 ✓)</li>
            </ul>,
            <p>Probe: Index n=0 und n=1 in die gefundene Vorschrift einsetzen und mit den ersten zwei Folgengliedern vergleichen.</p>,
          ),
          solution: '(i)   f: ℕ→ℝ, n ↦ 3n\n(ii)  f: ℕ→ℝ, n ↦ −4 + 3n\n(iii) f: ℕ→ℝ, n ↦ (−1)ⁿ n\n(iv)  f: ℕ→ℝ, n ↦ (−1)ⁿ⁺¹ n\n(v)   f: ℕ→ℝ, n ↦ 1 / 2ⁿ⁺¹\n(vi)  f: ℕ→ℝ, n ↦ 1 / (2ⁿ⁺¹ − 1)',
        },
        {
          letter: 'b',
          text: <>
            {'Die Folge (aₙ) sei rekursiv definiert durch\n\n  a₀ := 2,    aₙ₊₁ := '}
            <Frac n="2aₙ" d="2 + aₙ" />
            {',    n ≥ 0.\n\nBestimmen Sie a₁, a₂ und a₃.'}
          </>,
          hint: h(
            <>
              <p>Bei einer <span className="hint-em">rekursiv definierten Folge</span> berechnet man jeden Term aus dem vorherigen. Schritt für Schritt die Formel anwenden:</p>
              <p>aₙ₊₁ = 2aₙ / (2 + aₙ)</p>
            </>,
            <>
              <ol>
                <li>Setze den Startwert a₀ in die Rekursionsformel ein, um a₁ zu berechnen</li>
                <li>Setze a₁ in die Formel ein, um a₂ zu berechnen — nicht a₀ erneut verwenden</li>
                <li>Setze a₂ ein, um a₃ zu berechnen — bei gebrochenen Termen den Nenner auf gemeinsamen Nenner bringen</li>
                <li>Division durch Bruch = Multiplikation mit Kehrwert</li>
              </ol>
            </>,
            <>
              <p>Tipp für a₃: Gemischten Nenner 2+2/3 zuerst auf gemeinsamen Nenner bringen: 6/3 + 2/3 = 8/3</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a₃ = f(a₁) statt f(a₂) → <strong>✅ Richtig:</strong> Die Rekursion verlangt den unmittelbaren Vorgänger; a₃ = 2a₂/(2+a₂) = 2·(2/3)/(2+2/3)</li>
              <li><strong>❌ Falsch:</strong> (4/3)/(8/3) = 4/3 · 8/3 = 32/9 (Kehrwert vergessen) → <strong>✅ Richtig:</strong> Division durch Bruch = Multiplikation mit Kehrwert: (4/3)/(8/3) = (4/3)·(3/8) = 12/24 = 1/2</li>
            </ul>,
            <p>Probe: Folgt die Folge 2, 1, 2/3, 1/2, … einem Muster? Die Terme 1/a_n: 1/2, 1, 3/2, 2, … steigen um 1/2 — arithmetische Folge.</p>,
          ),
          solution: (
            <>
              {'a₁ = '}<Frac n="2·2" d="2+2" />{' = '}<Frac n="4" d="4" />{' = 1\n'}
              {'a₂ = '}<Frac n="2·1" d="2+1" />{' = '}<Frac n="2" d="3" />{'\n'}
              {'a₃ = '}<Frac n="2·⅔" d="2+⅔" />{' = '}<Frac n="⁴⁄₃" d="⁸⁄₃" />{' = '}<Frac n="1" d="2" />
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a2',
      nr: 2,
      title: 'Konvergenz und Divergenz von Folgen',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass mindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ + yₙ) konvergiert.',
          hint: h(
            <>
              <p>Wenn sich zwei divergente Folgen in gewissem Sinne „gegenseitig aufheben", kann die Summe trotzdem konvergieren. Klassisches Beispiel: alternierende Folge plus ihr Negatives.</p>
            </>,
            <>
              <ol>
                <li>Idee: Zwei divergente Folgen, die sich gegenseitig aufheben → Summe = konvergente Nullfolge</li>
                <li>Wähle eine bekannte divergente Folge als xₙ</li>
                <li>Setze yₙ = −xₙ: dann xₙ + yₙ = 0 für alle n → trivial konvergent</li>
                <li>Alternative: eine konvergente und eine divergente Folge kombinieren, sodass die Summe konvergiert</li>
              </ol>
            </>,
            <>
              <p>Alternatives Beispiel: xₙ = n, yₙ = −n</p>
              <pre className="hint-code-block">{`xₙ + yₙ = 0  →  konvergiert gegen 0
xₙ = n  →  divergiert gegen +∞`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Beide Folgen konvergent wählen → <strong>✅ Richtig:</strong> Die Aufgabe verlangt mindestens eine divergente Folge; z.B. xₙ=(−1)ⁿ divergiert, aber xₙ+yₙ=0 wenn yₙ=−(−1)ⁿ</li>
            </ul>,
            <p>Reicht es, wenn nur eine der zwei Folgen divergiert? Ja — aber beide divergent ist auch erlaubt.</p>,
          ),
          solution: 'Zum Beispiel (xₙ) = ((−1)ⁿ), (yₙ) = ((−1)ⁿ⁺¹):\nxₙ + yₙ = 0 für alle n → konvergiert gegen 0.\n(xₙ) divergiert.\n\nAlternativ: (xₙ) = (n), (yₙ) = (−n).',
        },
        {
          letter: 'b',
          text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass mindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ · yₙ) konvergiert.',
          hint: h(
            <>
              <p>Ein Faktor 0 macht jedes Produkt zu 0, egal wie sich der andere Faktor verhält. Oder: eine divergente Folge mit einer passend gegen 0 gehenden Folge multiplizieren.</p>
            </>,
            <>
              <ol>
                <li>Einfachste Strategie: Setze eine der Folgen konstant auf 0 — dann ist das Produkt immer 0, egal was die andere Folge macht</li>
                <li>Alternative: Kombiniere eine Folge, die gegen ∞ geht, mit einer Folge, die schnell genug gegen 0 geht</li>
                <li>Prüfe: Konvergiert das Produkt? Divergiert mindestens eine der Faktoren-Folgen?</li>
              </ol>
            </>,
            <p>Auch möglich: xₙ = n, yₙ = 1/n — dann xₙ·yₙ = 1 für alle n.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur divergente Beispiele suchen und frustriert aufgeben → <strong>✅ Richtig:</strong> xₙ=0 konstant (konvergent) und yₙ=(−1)ⁿ (divergent) → xₙ·yₙ=0 (konvergent) ✓</li>
            </ul>,
            <p>Einfachste Strategie: eine Folge konstant 0 wählen — dann ist das Produkt immer 0.</p>,
          ),
          solution: 'Zum Beispiel (xₙ) = (0,0,0,…), (yₙ) = ((−1)ⁿ):\nxₙ · yₙ = 0 für alle n → konvergiert gegen 0.\n(yₙ) divergiert.\n\nAlternativ: (xₙ) = (n), (yₙ) = (1/n).',
        },
        {
          letter: 'c',
          text: 'Finden Sie Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, die beide konvergieren, und so dass xₙ < yₙ für alle n ∈ ℕ gilt, aber lim xₙ = lim yₙ.',
          hint: h(
            <>
              <p>Obwohl xₙ &lt; yₙ für alle n gilt, müssen die Grenzwerte nicht verschieden sein. Dieses Phänomen zeigt: aus strikter Ungleichheit zwischen Folgengliedern folgt nur schwache Ungleichheit für die Grenzwerte.</p>
            </>,
            <>
              <ol>
                <li>Wähle xₙ kleiner als yₙ für alle n — z.B. eine konstante Folge und eine gegen 0 fallende Folge</li>
                <li>Stelle sicher, dass beide Folgen denselben Grenzwert haben</li>
                <li>Prüfe, dass die strikte Ungleichheit xₙ &lt; yₙ für alle n gilt (nicht nur fast alle)</li>
              </ol>
            </>,
            <p>Allgemein gilt: xₙ ≤ yₙ für alle n ⟹ lim xₙ ≤ lim yₙ. Die strikte Ungleichung überträgt sich aber nicht strikt auf Grenzwerte!</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Aus xₙ &lt; yₙ folgern, dass lim xₙ &lt; lim yₙ → <strong>✅ Richtig:</strong> Strikte Ungleichung überträgt sich nicht auf Grenzwerte; aus xₙ ≤ yₙ folgt nur lim xₙ ≤ lim yₙ; Gegenbeispiel: xₙ=0, yₙ=1/n, beide → 0</li>
            </ul>,
            <p>Probe: 0 &lt; 1/n für n=1,2,3,… ✓. Beide Folgen konvergieren gegen 0 ✓.</p>,
          ),
          solution: '(xₙ) = (0,0,0,…), (yₙ) = (1/n):\nxₙ = 0 < 1/n = yₙ für alle n ≥ 1 ✓\nlim xₙ = 0 = lim yₙ ✓\n\nAus xₙ < yₙ folgt für Grenzwerte nur lim xₙ ≤ lim yₙ (keine strikte Ungleichung).',
        },
        {
          letter: 'd',
          text: 'Finden Sie eine Folge (xₙ) ⊆ ℝ, die divergiert, aber für die die Folge (|xₙ|) konvergiert.',
          hint: h(
            <>
              <p>Eine Folge kann divergieren, weil sie zwischen zwei Werten hin und her springt (keine eindeutige Annäherung), obwohl die <span className="hint-em">Beträge</span> konstant sind und damit konvergieren.</p>
            </>,
            <>
              <ol>
                <li>Suche eine Folge, die zwischen zwei Werten hin und her oszilliert → kein Grenzwert → divergent</li>
                <li>Prüfe, ob die Beträge dabei konstant bleiben → konstante Folge konvergiert trivial</li>
                <li>Beachte: |xₙ| → 0 würde xₙ → 0 implizieren; für lim |xₙ| = c &gt; 0 kann xₙ trotzdem divergieren</li>
              </ol>
            </>,
            <p>Allgemein: Eine Folge, die nicht konvergiert, aber beschränkt ist, ist ein Kandidat — falls zudem |xₙ| konstant ist, konvergiert (|xₙ|) sofort.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim |xₙ| existiert → lim xₙ existiert auch → <strong>✅ Richtig:</strong> Das gilt nur im Spezialfall lim |xₙ|=0 (dann lim xₙ=0); für lim |xₙ|=1 kann xₙ=(−1)ⁿ trotzdem divergieren</li>
            </ul>,
            <p>Probe: (xₙ) = (−1, 1, −1, 1, …) hat keinen Grenzwert (divergiert). |xₙ| = 1 konstant → Grenzwert 1 ✓.</p>,
          ),
          solution: '(xₙ) = ((−1)ⁿ) = (−1, 1, −1, 1, …)\n\n(xₙ) divergiert (kein Grenzwert).\n|xₙ| = 1 für alle n → (|xₙ|) konvergiert gegen 1.',
        },
      ],
    },
    {
      id: 'b7a3',
      nr: 3,
      title: 'Grenzwerte von Folgen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>
            {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = '}
            <Frac n="3n² + 4n + 20" d="4n³ + 1000" />
            {'.'}
          </>,
          hint: h(
            <>
              <p>Bei rationalen Folgen (Bruch aus Polynomen) die <span className="hint-em">höchste Potenz des Nenners</span> ausklammern und kürzen. Terme mit 1/n → 0.</p>
            </>,
            <>
              <ol>
                <li>Bestimme den Grad von Zähler und Nenner — wenn Grad(Zähler) &lt; Grad(Nenner): Grenzwert ist 0</li>
                <li>Klammere die höchste Potenz des Nenners aus Zähler und Nenner aus</li>
                <li>Kürze und lasse n→∞ gehen — alle Terme der Form c/nᵏ werden 0</li>
              </ol>
            </>,
            <p>Faustregel: Grad(Zähler) &lt; Grad(Nenner) → Grenzwert = 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 3/4 (nur führende Koeffizienten, Grad ignoriert) → <strong>✅ Richtig:</strong> Grad(Zähler)=2 &lt; Grad(Nenner)=3 → nach Ausklammern von n³ bleibt Faktor 1/n → Grenzwert 0</li>
            </ul>,
            <p>Ist der Grad des Zählers kleiner als der des Nenners? Dann ist der Grenzwert immer 0.</p>,
          ),
          solution: (
            <>
              {'xₙ = '}<Frac n="n²·(3 + 4/n + 20/n²)" d="n³·(4 + 1000/n³)" />{' = '}<Frac n="1" d="n" />{' · '}<Frac n="3 + 4/n + 20/n²" d="4 + 1000/n³" />{'\n\nsomit lim xₙ = 0 · '}<Frac n="3" d="4" />{' = 0'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>
            {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = '}
            <Frac n="2n³ + 7n² + 12" d="−5n³ − n + 3" />
            {'.'}
          </>,
          hint: h(
            <>
              <p>Höchste Potenz ausklammern. Bei <span className="hint-em">gleichem Grad</span> in Zähler und Nenner ist der Grenzwert das Verhältnis der führenden Koeffizienten.</p>
            </>,
            <>
              <ol>
                <li>Vergleiche die Grade von Zähler und Nenner — bei gleichem Grad ist der Grenzwert das Verhältnis der führenden Koeffizienten</li>
                <li>Klammere n³ (höchste vorkommende Potenz) aus Zähler und Nenner aus</li>
                <li>Kürze n³ und lasse n→∞ gehen — alle Terme mit 1/n, 1/n² usw. verschwinden</li>
                <li>Achte auf das Vorzeichen der führenden Koeffizienten</li>
              </ol>
            </>,
            <p>Faustregel: Grad(Zähler) = Grad(Nenner) → Grenzwert = (führender Koeffizient Zähler) / (führender Koeffizient Nenner).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 2/5 (Vorzeichen des Nenners vergessen) → <strong>✅ Richtig:</strong> Führender Koeffizient des Nenners ist −5 (nicht 5); lim = 2/(−5) = −2/5</li>
            </ul>,
            <p>Probe: Für sehr großes n dominiert 2n³/(−5n³) = −2/5.</p>,
          ),
          solution: (
            <>
              {'xₙ = '}<Frac n="2 + 7/n + 12/n³" d="−5 − 1/n² + 3/n³" />{';  somit lim xₙ = '}<Frac n="2" d="−5" />{' = −'}<Frac n="2" d="5" />
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = (2 + '}<Frac n="3" d="n" />{')⁵.'}</>,
          hint: h(
            <>
              <p>Die Rechenregeln für Folgengrenzwerte erlauben, den Grenzwert „hineinzuziehen": wenn lim aₙ = a und f stetig, dann lim f(aₙ) = f(a). Hier ist f(x) = x⁵.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere den Term, der für n→∞ verschwindet (Konstante geteilt durch n)</li>
                <li>Wende die Grenzwertregel für Summen an: lim(a + bₙ) = a + lim bₙ</li>
                <li>Wende die Grenzwertregel für Potenzen an: lim (aₙ)⁵ = (lim aₙ)⁵</li>
              </ol>
            </>,
            <p>Direkt: Summenregel und Potenzregel für Grenzwerte anwenden.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 3/n → 3 statt → 0 → <strong>✅ Richtig:</strong> Für n→∞ geht jede Konstante geteilt durch n gegen 0; 3/n → 0</li>
              <li><strong>❌ Falsch:</strong> lim (2+3/n)⁵ = 2 (Potenz vergessen) → <strong>✅ Richtig:</strong> lim (2+0)⁵ = 2⁵ = 32</li>
            </ul>,
            <p>Probe: n=100 → (2 + 0.03)⁵ ≈ 2.03⁵ ≈ 34.5, noch nicht bei 32. n=10 000 → sehr nah an 32.</p>,
          ),
          solution: 'lim (3/n) = 0\nlim xₙ = (2 + 0)⁵ = 2⁵ = 32',
        },
        {
          letter: 'd',
          text: 'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = ⁿ√(2¹⁰⁰⁰).',
          hint: h(
            <>
              <p>n-te Wurzel umschreiben: ⁿ√(aᵐ) = a^(m/n). Für festes m gilt m/n → 0, und a⁰ = 1 für jedes a &gt; 0.</p>
            </>,
            <>
              <ol>
                <li>Schreibe ⁿ√(aᵐ) als Potenz um: = a^(m/n)</li>
                <li>Bestimme den Grenzwert des Exponenten m/n für n→∞ (m ist fest)</li>
                <li>Wende die Potenzregel an: lim a^(m/n) = a^(lim m/n) = a⁰ = 1</li>
              </ol>
            </>,
            <>
              <p>Allgemein: lim ⁿ√(c) = 1 für jedes c &gt; 0 (da lim c^(1/n) = lim e^(ln(c)/n) = e⁰ = 1).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim ⁿ√(2¹⁰⁰⁰) = 2 (als ob 1000 keine Rolle spielt) → <strong>✅ Richtig:</strong> xₙ = 2^(1000/n) und 1000/n → 0, also lim xₙ = 2⁰ = 1</li>
              <li><strong>❌ Falsch:</strong> 1000/n → ∞ denken → <strong>✅ Richtig:</strong> 1000 ist fest; für n→∞ gilt 1000/n → 0 (nicht ∞)</li>
            </ul>,
            <p>Schlüssel: 1000 ist eine feste Zahl. 1000/n → 0 wenn n → ∞.</p>,
          ),
          solution: 'xₙ = ⁿ√(2¹⁰⁰⁰) = 2^(1000/n)\n\nlim 1000/n = 0\n\nlim xₙ = 2⁰ = 1',
        },
        {
          letter: 'e',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = ('}<Frac n="n+1" d="n" />{')ⁿ.'}</>,
          hint: h(
            <>
              <p>Erinnerung: Die Eulersche Zahl ist definiert als lim (1 + 1/n)ⁿ = e. Der Ausdruck hier ist genau diese Form.</p>
            </>,
            <>
              <ol>
                <li>Forme (n+1)/n um: Spalte den Bruch auf und erkenne die Standardform</li>
                <li>Erkenne das Muster (1 + 1/n)ⁿ — das ist die Definition der Eulerschen Zahl e</li>
                <li>Wende den fundamentalen Grenzwert direkt an</li>
              </ol>
            </>,
            <p>Dies ist ein fundamentaler Grenzwert der Analysis — e ≈ 2.718…</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim (1+1/n)ⁿ = 1 (da 1+1/n→1 und 1ⁿ=1) → <strong>✅ Richtig:</strong> Das ist der unbestimmte Ausdruck 1^∞; Basis→1 und Exponent→∞ gleichzeitig ergibt e ≈ 2.718…, nicht 1</li>
            </ul>,
            <p>Merkhilfe: xₙ = (1 + 1/n)ⁿ → e ist eine der wichtigsten Grenzwertformeln der Analysis.</p>,
          ),
          solution: 'xₙ = ((n+1)/n)ⁿ = (1 + 1/n)ⁿ\n\nlim (1 + 1/n)ⁿ = e\n\nDaher: lim xₙ = e',
        },
        {
          letter: 'f',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ für xₙ = (−1)ⁿ · '}<Frac n="sin(n)cos(n)" d="3n³" />{'.'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Einschnürungssatz</span>: Wenn |xₙ| ≤ yₙ und lim yₙ = 0, dann lim xₙ = 0 (und damit auch lim |xₙ| = 0).</p>
              <p>Tipp: sin und cos sind beschränkt: |sin(n)| ≤ 1 und |cos(n)| ≤ 1.</p>
            </>,
            <>
              <ol>
                <li>Bilde eine obere Schranke für |xₙ|: Nutze |sin(n)| ≤ 1 und |cos(n)| ≤ 1 und |(−1)ⁿ| = 1</li>
                <li>Zeige, dass diese Schranke yₙ gegen 0 konvergiert</li>
                <li>Wende den Einschnürungssatz an: 0 ≤ |xₙ| ≤ yₙ → 0 → lim |xₙ| = 0 → lim xₙ = 0</li>
              </ol>
            </>,
            <p>Allgemein: Wenn eine Folge durch eine Nullfolge betragsmäßig beschränkt ist, ist sie selbst eine Nullfolge.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> sin(n) und cos(n) einzeln ausrechnen wollen → <strong>✅ Richtig:</strong> Für ganzzahlige n lassen sich sin(n) und cos(n) nicht vereinfachen; stattdessen die Schranke |sin(n)| ≤ 1 nutzen</li>
              <li><strong>❌ Falsch:</strong> |(−1)ⁿ·sin(n)cos(n)|/(3n³) nicht vereinfachen → <strong>✅ Richtig:</strong> |(−1)ⁿ| = 1; daher |xₙ| = |sin(n)cos(n)|/(3n³) ≤ 1/(3n³)</li>
            </ul>,
            <p>Schlüssel: |sin(n)cos(n)| ≤ 1 immer. Die Abschätzung durch 1/(3n³) reicht für den Einschnürungssatz.</p>,
          ),
          solution: (
            <>
              {'Da sin(n), cos(n) ∈ [−1, 1] gilt:\n\n0 ≤ |xₙ| = '}<Frac n="|sin(n)cos(n)|" d="3n³" />{' ≤ '}<Frac n="1" d="3n³" />{' =: yₙ\n\nlim yₙ = 0\n\nEinschnürungssatz: lim |xₙ| = 0, also lim xₙ = 0'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a4',
      nr: 4,
      title: 'Konvergenz mit ε-N-Definition (Wenn noch Zeit ist …)',
      subaufgaben: [
        {
          letter: 'a',
          text: <>
            {'Für n ∈ ℕ* sei xₙ = '}<Frac n="1" d="√n" />{'. Geben Sie zu ε = 10, ε = 1, ε = '}<Frac n="1" d="10" />{' und ε = '}<Frac n="1" d="10⁶" />{' jeweils ein N ∈ ℕ an, so dass |xₙ − 0| < ε für alle n ≥ N erfüllt ist.'}
          </>,
          hint: h(
            <>
              <p>Die Bedingung |1/√n − 0| &lt; ε ist äquivalent zu 1/√n &lt; ε, also √n &gt; 1/ε, also n &gt; 1/ε². Wähle N als die kleinste natürliche Zahl mit N &gt; 1/ε².</p>
            </>,
            <>
              <ol>
                <li>Löse |1/√n − 0| &lt; ε nach n auf: Umformen ergibt n &gt; 1/ε²</li>
                <li>Für jedes gegebene ε: Berechne 1/ε² und wähle N als die kleinste natürliche Zahl mit N &gt; 1/ε²</li>
                <li>Beachte: Bei N = 1/ε² wäre |1/√N| = ε (nicht strikt kleiner) — also N einen größer wählen</li>
              </ol>
            </>,
            <p>Für jedes N muss gelten: für alle n ≥ N gilt 1/√n &lt; ε. Da 1/√n monoton fällt, reicht es, N &gt; 1/ε² zu wählen.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> N = 1/ε² (nicht strikt) → <strong>✅ Richtig:</strong> Bei n = 1/ε² gilt 1/√n = ε, aber gefordert ist &lt; ε (strikt); wähle N = ⌊1/ε²⌋ + 1 oder N &gt; 1/ε²</li>
            </ul>,
            <p>Probe für ε = 1/10: n = 101 → 1/√101 ≈ 0.0995 &lt; 0.1 ✓; n = 100 → 1/√100 = 0.1 = ε (nicht &lt; ε, also reicht 100 nicht).</p>,
          ),
          solution: (
            <>
              {'|'}<Frac n="1" d="√n" />{' − 0| < ε  ⟺  n > '}<Frac n="1" d="ε²" />{'\n\n'}
              {'ε = 10:     '}<Frac n="1" d="ε²" />{' = '}<Frac n="1" d="100" />{',  N = 1\n'}
              {'ε = 1:      '}<Frac n="1" d="ε²" />{' = 1,          N = 2\n'}
              {'ε = 1/10:   '}<Frac n="1" d="ε²" />{' = 100,        N = 101\n'}
              {'ε = 1/10⁶:  '}<Frac n="1" d="ε²" />{' = 10¹²,      N = 10¹² + 1'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>
            {'Zeigen Sie direkt mit der Definition von „Konvergenz gegen x*", dass lim '}<Frac n="1" d="√n" />{' = 0 gilt.\n\nHinweis: Sie dürfen ohne Beweis verwenden, dass die Wurzelfunktion monoton ist, d.h. für x, y ∈ [0, ∞) mit x ≤ y gilt auch √x ≤ √y.'}
          </>,
          hint: h(
            <>
              <p>Zu zeigen: Für jedes ε &gt; 0 existiert ein N ∈ ℕ, sodass |1/√n − 0| &lt; ε für alle n ≥ N.</p>
              <p>Strategie: N so wählen, dass N &gt; 1/ε². Dann für n ≥ N die Abschätzungskette aufschreiben und den Monotoniehweis der Wurzel nutzen.</p>
            </>,
            <>
              <ol>
                <li>Beweis-Struktur: Sei ε &gt; 0 beliebig. Wähle N ∈ ℕ mit N &gt; [Schranke aus (a)]</li>
                <li>Zeige für alle n ≥ N: |xₙ − 0| ≤ |x_N − 0| (Monotonie der Wurzel nutzen)</li>
                <li>Zeige |x_N − 0| &lt; ε aus der Wahl von N — nutze die Implikation N &gt; 1/ε² ⟹ √N &gt; 1/ε</li>
                <li>Schließe: Die Abschätzungskette ergibt |xₙ − 0| &lt; ε für alle n ≥ N □</li>
              </ol>
            </>,
            <p>Das Schöne: Man muss N nur existieren lassen (nicht eindeutig bestimmen). Jedes N &gt; 1/ε² reicht.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Ungleichungen ohne Begründung hinschreiben → <strong>✅ Richtig:</strong> Jeder Schritt braucht eine kurze Erklärung: „n≥N und Wurzel monoton → 1/√n ≤ 1/√N" und „N&gt;1/ε² → 1/√N &lt; ε"</li>
              <li><strong>❌ Falsch:</strong> N = 1/ε² setzen (nicht natürlich) → <strong>✅ Richtig:</strong> N muss ∈ ℕ sein; wähle N := ⌊1/ε²⌋ + 1 oder beliebiges N &gt; 1/ε²</li>
            </ul>,
            <p>Der Beweis ist fertig, sobald man gezeigt hat: |1/√n − 0| ≤ … &lt; ε für alle n ≥ N.</p>,
          ),
          solution: (
            <>
              {'Behauptung: lim '}<Frac n="1" d="√n" />{' = 0\n\nBeweis:\nSei ε > 0 beliebig. Wähle N ∈ ℕ mit N > '}<Frac n="1" d="ε²" />{'.\n\nDann gilt für alle n ≥ N:\n\n|'}<Frac n="1" d="√n" />{' − 0| = '}<Frac n="1" d="√n" />{' ≤ '}<Frac n="1" d="√N" />{' < '}<Frac n="1" d="√(1/ε²)" />{' = ε\n\n(Wurzel monoton; N > 1/ε² ⟹ √N > 1/ε)\n\nSomit lim '}<Frac n="1" d="√n" />{' = 0. □'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a5',
      nr: 5,
      title: 'Geometrische Summenformel (Wenn noch Zeit ist …)',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Bestimmen Sie mit Hilfe der geometrischen Summenformel: '}<br />{'Σ(k=0 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Geometrische Summenformel</span>: Σ(k=0 bis n) qᵏ = (1 − q^(n+1)) / (1 − q) für q ≠ 1.</p>
              <p>Hier: q = 1/2, n = 5.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere q und n in der geometrischen Summe Σ(k=0..n) qᵏ</li>
                <li>Wende die Formel an: (1 − q^(n+1)) / (1 − q) — Exponent ist n+1, nicht n</li>
                <li>Vereinfache: Division durch einen Bruch = Multiplikation mit dem Kehrwert</li>
              </ol>
            </>,
            <p>Probe: 1 + 1/2 + 1/4 + 1/8 + 1/16 + 1/32 = 32/32 + 16/32 + 8/32 + 4/32 + 2/32 + 1/32 = 63/32 ✓</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Σ(k=0..5)(1/2)ᵏ = (1−(1/2)⁵)/(1−1/2) (Exponent n statt n+1) → <strong>✅ Richtig:</strong> Formel: (1−q^(n+1))/(1−q); hier n=5, also Exponent 6: (1−(1/2)⁶)/(1/2)</li>
              <li><strong>❌ Falsch:</strong> (63/64)/(1/2) = 63/128 → <strong>✅ Richtig:</strong> Division durch 1/2 = Multiplikation mit 2: (63/64)·2 = 63/32</li>
            </ul>,
            <p>Die geometrische Summenformel gilt für q ≠ 1. Hier q = 1/2 ≠ 1 ✓.</p>,
          ),
          solution: (
            <>
              {'Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ = '}<Frac n="1 − (1/2)⁶" d="1 − 1/2" />{' = '}<Frac n="1 − 1/64" d="1/2" />{' = '}<Frac n="63/64" d="1/2" />{' = '}<Frac n="63" d="32" />
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Bestimmen Sie: Σ(k=1 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Die Summe beginnt bei k=1 statt k=0. Einfachste Strategie: Ergebnis aus (a) nehmen und den k=0-Term abziehen.</p>
            </>,
            <>
              <ol>
                <li>Benutze das Ergebnis aus (a): Die neue Summe beginnt bei k=1 statt k=0</li>
                <li>Ziehe den fehlenden k=0-Term vom Gesamtergebnis ab</li>
                <li>Bringe auf gemeinsamen Nenner und vereinfache</li>
              </ol>
            </>,
            <p>Alternativ direkt: (1−(1/2)⁵)/(1−1/2) · (1/2) — aber der Trick über (a) ist kürzer.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (1/2)⁰ = 0 → <strong>✅ Richtig:</strong> Jede Zahl (≠0) hoch 0 ist 1; (1/2)⁰ = 1; dieser Term muss von 63/32 abgezogen werden</li>
            </ul>,
            <p>Probe: 1/2 + 1/4 + 1/8 + 1/16 + 1/32 = 31/32 ✓</p>,
          ),
          solution: (
            <>
              {'Σ(k=1..5) ('}<Frac n="1" d="2" />{')ᵏ = Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ − ('}<Frac n="1" d="2" />{')⁰ = '}<Frac n="63" d="32" />{' − 1 = '}<Frac n="31" d="32" />
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Bestimmen Sie: Σ(k=2 bis 5) ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Analog zu (b): Ergebnis aus (a) nehmen und die Terme für k=0 und k=1 abziehen.</p>
            </>,
            <>
              <ol>
                <li>Nutze das Ergebnis aus (a): Die neue Summe beginnt bei k=2 statt k=0</li>
                <li>Ziehe alle Terme ab, die in der ursprünglichen Summe, aber nicht in der neuen enthalten sind (k=0 und k=1)</li>
                <li>Bringe alle Terme auf gemeinsamen Nenner und vereinfache</li>
              </ol>
            </>,
            <p>Allgemein: Σ(k=m..n) qᵏ = Σ(k=0..n) qᵏ − Σ(k=0..m−1) qᵏ</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur k=0 abziehen → <strong>✅ Richtig:</strong> Die Summe beginnt bei k=2; also k=0 und k=1 abziehen: 63/32 − 1 − 1/2 = 15/32</li>
            </ul>,
            <p>Probe: 1/4 + 1/8 + 1/16 + 1/32 = 8/32 + 4/32 + 2/32 + 1/32 = 15/32 ✓</p>,
          ),
          solution: (
            <>
              {'Σ(k=2..5) ('}<Frac n="1" d="2" />{')ᵏ = Σ(k=0..5) ('}<Frac n="1" d="2" />{')ᵏ − ('}<Frac n="1" d="2" />{')⁰ − ('}<Frac n="1" d="2" />{')¹\n= '}<Frac n="63" d="32" />{' − 1 − '}<Frac n="1" d="2" />{' = '}<Frac n="63" d="32" />{' − '}<Frac n="32" d="32" />{' − '}<Frac n="16" d="32" />{' = '}<Frac n="15" d="32" />
            </>
          ),
        },
        {
          letter: 'd',
          text: 'Bestimmen Sie: Σ(k=0 bis 10) (−1)ᵏ',
          hint: h(
            <>
              <p>Geometrische Summenformel mit q = −1 und n = 10:</p>
              <p>Σ(k=0 bis n) qᵏ = (1 − q^(n+1)) / (1 − q)</p>
            </>,
            <>
              <ol>
                <li>Identifiziere q = −1 und n = 10 in der geometrischen Summenformel</li>
                <li>Berechne q^(n+1) = (−1)¹¹ — ist 11 gerade oder ungerade?</li>
                <li>Setze in die Formel (1 − q^(n+1))/(1 − q) ein und vereinfache</li>
              </ol>
            </>,
            <p>Anschaulich: 1−1+1−1+1−1+1−1+1−1+1 = 1 (11 Terme, der letzte +1 überwiegt).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−1)¹¹ = 1 (gerade Potenz angenommen) → <strong>✅ Richtig:</strong> 11 ist ungerade; (−1)¹¹ = −1; daher 1−(−1) = 2 im Zähler</li>
            </ul>,
            <p>Probe: 11 Terme (k=0,…,10): abwechselnd +1 und −1, aber erster und letzter Term sind +1 → 6 mal +1, 5 mal −1 → Summe = 1 ✓</p>,
          ),
          solution: 'Σ(k=0..10) (−1)ᵏ = (1 − (−1)¹¹) / (1 − (−1))\n= (1 − (−1)) / 2\n= 2/2 = 1',
        },
        {
          letter: 'e',
          text: 'Bestimmen Sie: Σ(k=0 bis 11) (−1)ᵏ',
          hint: h(
            <>
              <p>Geometrische Summenformel mit q = −1 und n = 11:</p>
            </>,
            <>
              <ol>
                <li>Identifiziere q = −1 und n = 11 in der geometrischen Summenformel</li>
                <li>Berechne q^(n+1) = (−1)¹² — ist 12 gerade oder ungerade?</li>
                <li>Setze in die Formel ein und vereinfache — das Ergebnis unterscheidet sich von (d)</li>
              </ol>
            </>,
            <p>Anschaulich: 12 Terme, abwechselnd +1 und −1, paarweise Auslöschung → Summe = 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−1)¹² = −1 (ungerade Potenz angenommen) → <strong>✅ Richtig:</strong> 12 ist gerade; (−1)¹² = +1; daher 1−1 = 0 im Zähler → Summe = 0</li>
            </ul>,
            <p>Probe: 6 mal +1 und 6 mal −1 → Summe = 0 ✓</p>,
          ),
          solution: 'Σ(k=0..11) (−1)ᵏ = (1 − (−1)¹²) / (1 − (−1))\n= (1 − 1) / 2\n= 0',
        },
        {
          letter: 'f',
          text: 'Bestimmen Sie: Σ(k=0 bis 2) 3ᵏ',
          hint: h(
            <>
              <p>Geometrische Summenformel mit q = 3 und n = 2.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere q = 3 und n = 2 in der geometrischen Summenformel</li>
                <li>Beachte: q &gt; 1, daher ist 1−q negativ — Vorzeichen sorgfältig behandeln</li>
                <li>Setze in (1 − q^(n+1))/(1 − q) ein — Exponent ist n+1, nicht n</li>
              </ol>
            </>,
            <p>Probe: 3⁰ + 3¹ + 3² = 1 + 3 + 9 = 13 ✓</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1−3 = 2 (Vorzeichen vergessen) → <strong>✅ Richtig:</strong> 1−3 = −2; (1−27)/(−2) = (−26)/(−2) = 13</li>
              <li><strong>❌ Falsch:</strong> Exponent n=2 statt n+1=3 verwenden → <strong>✅ Richtig:</strong> Formel: (1−q^(n+1))/(1−q); für n=2 und q=3: Exponent ist 3, nicht 2</li>
            </ul>,
            <p>Formel: Σ(k=0..n) qᵏ = (1 − q^(n+1)) / (1 − q). Für n=2, q=3: Exponent ist n+1 = 3.</p>,
          ),
          solution: 'Σ(k=0..2) 3ᵏ = (1 − 3³) / (1 − 3) = (1 − 27) / (−2) = (−26)/(−2) = 13',
        },
      ],
    },
  ],
}
