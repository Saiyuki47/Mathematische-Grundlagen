import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt12: MatheBlatt = {
  id: 'blatt12',
  nr: '12',
  titel: 'Spezielle Funktionen',
  aufgaben: [
    {
      id: 'b12a1',
      nr: 1,
      title: 'Funktionsgrenzwerte',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="1" d="x" />{' cos('}<Frac n="1" d="x" />{')'}</>,
          hint: h(
            <>
              <p>Der Ausdruck ist ein Produkt: <span className="hint-em">Nullfolge · stetige Funktion im Grenzpunkt</span>. Wenn f(x) → 0 und g stetig ist, gilt f(x)·g(f(x)) → 0·g(0).</p>
            </>,
            <>
              <ol>
                <li>Bestimme lim(x→∞) 1/x</li>
                <li>Nutze die Stetigkeit von cos: lim cos(f(x)) = cos(lim f(x))</li>
                <li>Multipliziere die beiden Grenzwerte</li>
              </ol>
            </>,
            <>
              <p>Stetige Funktionen dürfen mit dem Grenzwert vertauscht werden: lim g(f(x)) = g(lim f(x)).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> cos(1/x) für x → ∞ ohne Argument-Grenzwert auswerten → <strong>✅ Richtig:</strong> Zuerst 1/x → 0 erkennen, dann cos(1/x) → cos(0) per Stetigkeit</li>
              <li><strong>❌ Falsch:</strong> cos(0) = 0 → <strong>✅ Richtig:</strong> cos(0) = 1 (der Cosinus hat sein Maximum bei 0)</li>
            </ul>,
          ),
          solution: (
            <>
              <Frac n="1" d="x" />{' → 0 für x → ∞.\n\n'}
              {'Da cos stetig: lim cos('}<Frac n="1" d="x" />{') = cos(0) = 1.\n\n'}
              {'Insgesamt: lim '}<Frac n="1" d="x" />{' cos('}<Frac n="1" d="x" />{') = 0 · 1 = 0.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'lim'}<sub>{'x→∞'}</sub>{' '}<Frac n="1" d="x" />{' cos(x)'}</>,
          hint: h(
            <>
              <p>cos(x) ist <span className="hint-em">beschränkt</span>: cos(x) ∈ [−1, 1] für alle x ∈ ℝ. Das Produkt einer Nullfolge mit einer beschränkten Funktion ergibt 0.</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, dass cos(x) beschränkt ist (Schranke angeben)</li>
                <li>Bestimme lim(x→∞) 1/x</li>
                <li>Wende die Regel: beschränkte Funktion × Nullfolge = 0 an</li>
              </ol>
            </>,
            <>
              <p>Sandwichsatz: |<Frac n="cos x" d="x" />| ≤ <Frac n="1" d="|x|" /> → 0.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim cos(x) für x → ∞ ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(x) ist beschränkt ∈ [−1,1], und Nullfolge · Beschränkte = 0</li>
            </ul>,
          ),
          solution: (
            <>
              {'cos(x) ∈ [−1, 1] für alle x ∈ ℝ. Außerdem '}<Frac n="1" d="x" />{' → 0 für x → ∞.\n\n'}
              {'Beschränkte Funktion mal Nullfolge:\n\n'}
              {'lim '}<Frac n="cos(x)" d="x" />{' = 0.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'lim'}<sub>{'x→0'}</sub>{' x · exp(x)'}</>,
          hint: h(
            <>
              <p>exp(x) ist stetig, daher kann der Grenzwert direkt durch Einsetzen bestimmt werden.</p>
            </>,
            <>
              <ol>
                <li>Erkenne, dass x·exp(x) ein Produkt stetiger Funktionen ist</li>
                <li>Setze x = 0 direkt ein (Stetigkeit erlaubt das)</li>
              </ol>
            </>,
            <p>x·exp(x) ist als Produkt stetiger Funktionen selbst stetig in x = 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> exp(x) als Potenzreihe (1 + x + x²/2 + …) entwickeln → <strong>✅ Richtig:</strong> Stetigkeit von exp reicht; lim x·exp(x) = 0·exp(0) = 0·1 = 0</li>
            </ul>,
          ),
          solution: <>{'x → 0 und exp(x) → exp(0) = 1 für x → 0.\n\nlim x · exp(x) = 0 · 1 = 0.'}</>,
        },
        {
          letter: 'd',
          text: <>{'lim'}<sub>{'x→−∞'}</sub>{' x · exp(x)'}</>,
          hint: h(
            <>
              <p>{'Substitution y = −x: Dann gilt x → −∞ ⟺ y → +∞. Schreibe x·exp(x) = −y·exp(−y) = −y/exp(y) und nutze lim_{y→∞} y/exp(y) = 0.'}</p>
            </>,
            <>
              <ol>
                <li>Führe die Substitution y = −x ein (x → −∞ ⟺ y → +∞)</li>
                <li>Schreibe x·exp(x) mithilfe von y um</li>
                <li>Nutze den bekannten Standardgrenzwert lim(y→∞) y/exp(y)</li>
              </ol>
            </>,
            <p>exp wächst schneller als jedes Polynom: y/exp(y) → 0 für y → ∞.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> „−∞ · 0 = −∞" direkt schreiben → <strong>✅ Richtig:</strong> Das ist ein unbestimmter Ausdruck; Substitution y = −x umformen, dann y/exp(y) → 0 auswerten</li>
            </ul>,
          ),
          solution: (
            <>
              {'Substitution y = −x (y → ∞ wenn x → −∞):\n\n'}
              {'x · exp(x) = (−y) · exp(−y) = −'}<Frac n="y" d="exp(y)" />{'\n\n'}
              {'Da lim'}<sub>{'y→∞'}</sub>{' '}<Frac n="y" d="exp(y)" />{' = 0 (aus Vorlesung):\n\n'}
              {'lim'}<sub>{'x→−∞'}</sub>{' x · exp(x) = 0.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a2',
      nr: 2,
      title: 'Folgengrenzwerte',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'lim'}<sub>{'n→∞'}</sub>{' '}<Frac n="cos(n)" d="ln(n)" /></>,
          hint: h(
            <>
              <p>cos(n) ∈ [−1,1] ist <span className="hint-em">beschränkt</span>. Da ln(n) → ∞ gilt 1/ln(n) → 0. Wende die Regel „beschränkte Folge mal Nullfolge = Nullfolge" an.</p>
            </>,
            <>
              <pre className="hint-code-block">{`|cos(n)| ≤ 1 für alle n ∈ ℕ.
lim 1/ln(n) = 0 (da ln(n) → ∞).
→ lim cos(n)/ln(n) = 0.`}</pre>
            </>,
            <p>|cos(n)/ln(n)| ≤ 1/ln(n) → 0 (Sandwichsatz).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ ausrechnen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(n) ist beschränkt ∈ [−1,1], und Nullfolge · Beschränkte = 0</li>
            </ul>,
          ),
          solution: (
            <>
              {'cos(n) ∈ [−1,1] für alle n ∈ ℕ. Außerdem lim '}<Frac n="1" d="ln(n)" />{' = 0, da ln(n) → ∞.\n\n'}
              {'Beschränkte Folge mal Nullfolge:\n\n'}
              {'lim '}<Frac n="cos(n)" d="ln(n)" />{' = 0.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'lim'}<sub>{'n→∞'}</sub>{' sin('}<Frac n="1" d="n" />{') · cos(n)'}</>,
          hint: h(
            <>
              <p>cos(n) ist beschränkt. Da sin stetig ist und 1/n → 0, gilt sin(1/n) → sin(0) = 0. Beschränkte Folge mal Nullfolge = 0.</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, welche der beiden Funktionen beschränkt ist</li>
                <li>Bestimme, welche der beiden Funktionen eine Nullfolge bildet (Stetigkeit nutzen)</li>
                <li>Wende die Regel: Nullfolge × beschränkt = 0 an</li>
              </ol>
            </>,
            <p>|sin(1/n)·cos(n)| ≤ |sin(1/n)| → 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim cos(n) für n → ∞ bestimmen wollen → <strong>✅ Richtig:</strong> Dieser Grenzwert existiert nicht, ist aber unnötig; cos(n) ist beschränkt ∈ [−1,1] und sin(1/n) → 0</li>
            </ul>,
          ),
          solution: (
            <>
              {'cos(n) ∈ [−1,1] für alle n ∈ ℕ. Da '}<Frac n="1" d="n" />{' → 0 und sin stetig: sin('}<Frac n="1" d="n" />{') → sin(0) = 0.\n\n'}
              {'Beschränkte Folge mal Nullfolge:\n\n'}
              {'lim sin('}<Frac n="1" d="n" />{') · cos(n) = 0.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'lim'}<sub>{'n→∞'}</sub>{' '}<Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' · exp('}<Frac n="2" d="n³ + 1" />{')'}</>,
          hint: h(
            <>
              <p>Teile Zähler und Nenner des Bruchs durch n⁴. Für den exp-Term: 2/(n³+1) → 0, und da exp stetig ist, gilt exp(0) = 1. Produktregel für Grenzwerte anwenden.</p>
            </>,
            <>
              <ol>
                <li>Dividiere Zähler und Nenner des Bruchs durch die höchste Potenz</li>
                <li>Bestimme den Grenzwert des Bruchs</li>
                <li>Bestimme lim 2/(n³+1) und wende Stetigkeit von exp an</li>
                <li>Multipliziere die beiden Teilgrenzwerte</li>
              </ol>
            </>,
            <p>lim f(n)·g(n) = (lim f(n))·(lim g(n)), falls beide Grenzwerte existieren.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Bruch direkt auswerten ohne durch n⁴ zu dividieren → <strong>✅ Richtig:</strong> Durch die höchste Potenz n⁴ dividieren; ergibt (1−3/n²)/(1/n−3) → (1)/(−3) = −1/3</li>
            </ul>,
          ),
          solution: (
            <>
              {'Bruch durch n⁴ dividieren:\n\n'}
              <Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' = '}<Frac n="1 − 3/n²" d="1/n − 3" />{' → '}<Frac n="1" d="−3" />{' = −'}<Frac n="1" d="3" />{' für n → ∞.\n\n'}
              {'Außerdem: '}<Frac n="2" d="n³ + 1" />{' → 0, da exp stetig: exp('}<Frac n="2" d="n³+1" />{') → exp(0) = 1.\n\n'}
              {'Insgesamt: lim '}<Frac n="n⁴ − 3n²" d="n³ − 3n⁴" />{' · exp('}<Frac n="2" d="n³+1" />{') = −'}<Frac n="1" d="3" />{' · 1 = −'}<Frac n="1" d="3" />{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'lim'}<sub>{'n→∞'}</sub>{' n · ln(1 + '}<Frac n="1" d="n" />{')'}</>,
          hint: h(
            <>
              <p>Schreibe n·ln(1+1/n) = ln((1+1/n)^n). Der Grenzwert (1+1/n)^n = e ist bekannt. Da ln stetig ist: lim ln((1+1/n)^n) = ln(e) = 1.</p>
            </>,
            <>
              <ol>
                <li>Schreibe n·ln(1+1/n) als ln von etwas um (Logarithmusregel: b·ln(a) = ln(aᵇ))</li>
                <li>Erkenne das entstehende Argument als bekannte Folge</li>
                <li>Nutze die Stetigkeit von ln, um den Grenzwert ins Argument zu ziehen</li>
              </ol>
            </>,
            <p>Die Umformung nutzt ln(aᵇ) = b·ln(a) rückwärts: n·ln(a) = ln(aⁿ).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> „∞·0 = 0" oder „∞·0 = ∞" direkt schreiben → <strong>✅ Richtig:</strong> Unbestimmter Ausdruck; Umformung n·ln(1+1/n) = ln((1+1/n)ⁿ) → ln(e) = 1 verwenden</li>
            </ul>,
          ),
          solution: (
            <>
              {'n · ln(1 + '}<Frac n="1" d="n" />{') = ln((1 + '}<Frac n="1" d="n" />{')ⁿ).\n\n'}
              {'Da lim (1 + '}<Frac n="1" d="n" />{')ⁿ = e und ln stetig:\n\n'}
              {'lim n · ln(1 + '}<Frac n="1" d="n" />{') = ln(e) = 1.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a3',
      nr: 3,
      title: 'Allgemeine Exponentialfunktion und ᵏ√k',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei a > 0. Ist die Abbildung f: ℝ → ℝ,  x ↦ aˣ stetig?'}</>,
          hint: h(
            <>
              <p>Schreibe aˣ = exp(x · ln(a)). Dann ist f eine Verkettung stetiger Funktionen.</p>
            </>,
            <>
              <pre className="hint-code-block">{`f(x) = aˣ = exp(x · ln(a))

Da a > 0: ln(a) ∈ ℝ ist eine Konstante.
x ↦ x·ln(a) ist ein Polynom → stetig.
exp ist stetig auf ℝ.
Verkettung stetiger Funktionen → stetig.`}</pre>
            </>,
            <p>Allgemein: g∘h ist stetig, wenn g und h stetig sind.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> a ≤ 0 zulassen → <strong>✅ Richtig:</strong> Die Bedingung a &gt; 0 ist nötig; ln(a) ist nur für a &gt; 0 definiert, daher ist die Darstellung aˣ = exp(x·ln(a)) nur für a &gt; 0 gültig</li>
            </ul>,
          ),
          solution: <>{'f(x) = aˣ = exp(x · ln(a)).\n\nDa a > 0 ist ln(a) ∈ ℝ. Das Argument x·ln(a) ist ein Polynom in x (stetig), und exp ist stetig auf ℝ.\nVerkettung stetiger Funktionen ist stetig → f ist stetig auf ℝ.'}</>,
        },
        {
          letter: 'b',
          text: <>{'Sei k ∈ ℕ, k ≥ 2. Bestimmen Sie lim'}<sub>{'k→∞'}</sub>{' ᵏ√k.\n\nHinweis: ᵏ√k = k'}<sup>{'1/k'}</sup>{'.'}</>,
          hint: h(
            <>
              <p>Schreibe k^(1/k) = exp(<Frac n="ln(k)" d="k" />). Der Grenzwert ln(k)/k → 0 ist aus der Vorlesung bekannt. Da exp stetig ist: lim exp(ln(k)/k) = exp(0) = 1.</p>
            </>,
            <>
              <pre className="hint-code-block">{`k^(1/k) = exp((1/k)·ln(k)) = exp(ln(k)/k)

Aus Vorlesung: lim ln(k)/k = 0.

Da exp stetig:
lim k^(1/k) = exp(0) = 1.`}</pre>
            </>,
            <p>ln wächst langsamer als jedes Polynom: ln(k)/k → 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> k^(1/k) = k^0 = 1 direkt schreiben (Exponent 1/k → 0 einfach einsetzen) → <strong>✅ Richtig:</strong> Der Exponent 1/k hängt von k ab; über exp(ln(k)/k) und lim ln(k)/k = 0 herleiten</li>
            </ul>,
          ),
          solution: (
            <>
              {'ᵏ√k = k'}<sup>{'1/k'}</sup>{' = exp('}<Frac n="ln(k)" d="k" />{').\n\n'}
              {'Nach Vorlesung: lim '}<Frac n="ln(k)" d="k" />{' = 0.\n\n'}
              {'Da exp stetig: lim ᵏ√k = exp(0) = 1.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a4',
      nr: 4,
      title: 'Rechenregeln für die allgemeine Exponentialfunktion',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Seien x, y ∈ ℝ, a > 0. Zeigen Sie: aˣ · aʸ = a'}<sup>{'x+y'}</sup>{'.'}</>,
          hint: h(
            <>
              <p>Schreibe aˣ = exp(x·ln a) und aʸ = exp(y·ln a). Nutze dann exp(u)·exp(v) = exp(u+v).</p>
            </>,
            <>
              <ol>
                <li>Schreibe aˣ und aʸ über die Definition aˣ = exp(x ln a) um</li>
                <li>Wende das Additionstheorem von exp an: exp(u)·exp(v) = exp(u+v)</li>
                <li>Klammere ln a aus und erkenne exp((x+y) ln a) als a^(x+y)</li>
              </ol>
            </>,
            <p>Additionstheorem für exp: exp(u)·exp(v) = exp(u+v) für alle u, v ∈ ℝ.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> aˣ·aʸ = a^(x+y) direkt als bekannt voraussetzen → <strong>✅ Richtig:</strong> Über die Definition aˣ = exp(x·ln a) herleiten und das Additionstheorem exp(u+v) = exp(u)·exp(v) anwenden</li>
            </ul>,
          ),
          solution: (
            <>
              {'aˣ · aʸ = exp(x ln a) · exp(y ln a)\n'}
              {'       = exp(x ln a + y ln a)\n'}
              {'       = exp((x+y) ln a)\n'}
              {'       = a'}<sup>{'x+y'}</sup>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Seien x, y ∈ ℝ, a > 0. Zeigen Sie: (aˣ)'}<sup>{'y'}</sup>{' = a'}<sup>{'xy'}</sup>{'.'}</>,
          hint: h(
            <>
              <p>Schreibe (aˣ)^y = exp(y · ln(aˣ)). Berechne ln(aˣ) = ln(exp(x·ln a)) = x·ln(a) und setze ein.</p>
            </>,
            <>
              <ol>
                <li>Schreibe (aˣ)^y = exp(y · ln(aˣ)) über die Definition</li>
                <li>Ersetze aˣ durch exp(x ln a) und vereinfache ln(exp(…)) = …</li>
                <li>Klammere aus und erkenne exp(xy ln a) als a^(xy)</li>
              </ol>
            </>,
            <p>Schlüsselschritt: ln(exp(u)) = u für alle u ∈ ℝ.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ln(aˣ) = x·ln(a) direkt als bekannt voraussetzen → <strong>✅ Richtig:</strong> Erst aˣ = exp(x·ln a) einsetzen, dann ln(exp(u)) = u verwenden; nur so ist der Beweis vollständig</li>
            </ul>,
          ),
          solution: (
            <>
              {'(aˣ)^y = exp(y ln(aˣ))\n'}
              {'       = exp(y · ln(exp(x ln a)))\n'}
              {'       = exp(y · (x ln a))\n'}
              {'       = exp(xy ln a)\n'}
              {'       = a'}<sup>{'xy'}</sup>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Seien x ∈ ℝ, a, b > 0. Zeigen Sie: aˣbˣ = (ab)ˣ.'}</>,
          hint: h(
            <>
              <p>Schreibe aˣ = exp(x·ln a) und bˣ = exp(x·ln b). Nutze exp(u)·exp(v) = exp(u+v) und ln a + ln b = ln(ab).</p>
            </>,
            <>
              <ol>
                <li>Schreibe aˣ und bˣ über die Definition exp(… ln …) um</li>
                <li>Wende das Additionstheorem von exp an</li>
                <li>Nutze das Logarithmengesetz ln a + ln b = ln(ab)</li>
                <li>Erkenne exp(x ln(ab)) als (ab)^x</li>
              </ol>
            </>,
            <p>{'Logarithmengesetz: ln a + ln b = ln(ab) für a, b > 0.'}</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ln(a) + ln(b) = ln(a+b) verwenden → <strong>✅ Richtig:</strong> Logarithmengesetz: ln(a) + ln(b) = ln(a·b) für a, b &gt; 0; nicht ln(a+b)</li>
            </ul>,
          ),
          solution: (
            <>
              {'aˣ · bˣ = exp(x ln a) · exp(x ln b)\n'}
              {'       = exp(x ln a + x ln b)\n'}
              {'       = exp(x(ln a + ln b))\n'}
              {'       = exp(x ln(ab))\n'}
              {'       = (ab)ˣ.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a5',
      nr: 5,
      title: 'Logarithmuswerte berechnen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>(i) log₁₀(10),{'  '}(ii) log₁₀(10000),{'  '}(iii) log₁₀(1),{'  '}(iv) log₁₀(0,01)</>,
          hint: h(
            <>
              <p>Nutze log_a(a^k) = k. Schreibe das Argument als Potenz von 10.</p>
            </>,
            <>
              <ol>
                <li>Schreibe jedes Argument als Potenz von 10</li>
                <li>Nutze log₁₀(10ᵏ) = k</li>
              </ol>
            </>,
            <p>0,01 = 1/100 = 10⁻².</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> log₁₀(1) = 1 → <strong>✅ Richtig:</strong> 10⁰ = 1, also log₁₀(1) = 0; der Logarithmus von 1 ist stets 0 (egal zur welcher Basis)</li>
            </ul>,
          ),
          solution: (
            <>
              {'(i)   log₁₀(10)    = 1\n'}
              {'(ii)  log₁₀(10000) = log₁₀(10⁴) = 4\n'}
              {'(iii) log₁₀(1)     = 0\n'}
              {'(iv)  log₁₀(0,01)  = log₁₀(10⁻²) = −2'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>(i) log₂(<Frac n="2" d="64" />),{'  '}(ii) log₄(<Frac n="2" d="64" />),{'  '}(iii) log₃₂(<Frac n="2" d="64" />),{'  '}(iv) log₆₄(<Frac n="2" d="64" />)</>,
          hint: h(
            <>
              <p>Vereinfache zunächst: <Frac n="2" d="64" /> = <Frac n="1" d="32" /> = 2⁻⁵. Schreibe 1/32 dann als Potenz der jeweiligen Basis.</p>
            </>,
            <>
              <ol>
                <li>Vereinfache 2/64 zu einer einfacheren Form als Potenz von 2</li>
                <li>Drücke die vereinfachte Form für jede Basis als deren Potenz aus</li>
                <li>Wende log_b(b^k) = k an</li>
              </ol>
            </>,
            <p>Alternativ: log_b(2/64) = log_b(2) − log_b(64).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2/64 direkt mit der Basis vergleichen ohne zu vereinfachen → <strong>✅ Richtig:</strong> Erst 2/64 = 1/32 = 2⁻⁵ berechnen, dann 2⁻⁵ als Potenz der jeweiligen Basis darstellen</li>
            </ul>,
          ),
          solution: (
            <>
              <Frac n="2" d="64" />{' = '}<Frac n="1" d="32" />{' = 2⁻⁵.\n\n'}
              {'(i)   log₂('}<Frac n="2" d="64" />{') = log₂(2⁻⁵) = −5.\n'}
              {'(ii)  log₄('}<Frac n="2" d="64" />{') = log₄(2) − log₄(64) = '}<Frac n="1" d="2" />{' − 3 = −'}<Frac n="5" d="2" />{'.\n'}
              {'(iii) log₃₂('}<Frac n="2" d="64" />{') = log₃₂(32⁻¹) = −1.\n'}
              {'(iv)  log₆₄('}<Frac n="2" d="64" />{') = log₆₄(2) − log₆₄(64) = '}<Frac n="1" d="6" />{' − 1 = −'}<Frac n="5" d="6" />{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>(i) log₂(64),{'  '}(ii) <Frac n="log₂(2/64)" d="log₂(64)" />. Vergleichen Sie das Ergebnis mit log₆₄(<Frac n="2" d="64" />).</>,
          hint: h(
            <>
              <p>Nutze den <span className="hint-em">Basiswechselsatz</span>: log_b(x) = log_a(x) / log_a(b). Damit ist log₂(2/64) / log₂(64) = log₆₄(2/64).</p>
            </>,
            <>
              <ol>
                <li>Berechne log₂(64) durch Ausdrücken von 64 als Potenz von 2</li>
                <li>Bilde den Bruch log₂(2/64)/log₂(64) mit dem Ergebnis aus (b)(i)</li>
                <li>Identifiziere das Ergebnis als Basiswechselsatz: log_a(x)/log_a(b) = log_b(x)</li>
                <li>Vergleiche mit dem entsprechenden Wert aus Teilaufgabe (b)(iv)</li>
              </ol>
            </>,
            <p>{'Basiswechselsatz: log_b(x) = ln(x)/ln(b) für a, b > 0, a,b ≠ 1.'}</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> log₂(2/64)/log₂(64) als log₂(2/64 − 64) oder log₂((2/64)/64) interpretieren → <strong>✅ Richtig:</strong> Das ist der Basiswechselsatz: log_a(x)/log_a(b) = log_b(x); hier log₂(2/64)/log₂(64) = log₆₄(2/64)</li>
            </ul>,
          ),
          solution: (
            <>
              {'(i) log₂(64) = log₂(2⁶) = 6.\n\n'}
              {'(ii) '}<Frac n="log₂(2/64)" d="log₂(64)" />{' = '}<Frac n="−5" d="6" />{' = −'}<Frac n="5" d="6" />{'.\n\n'}
              {'Aus (b)(iv): log₆₄('}<Frac n="2" d="64" />{') = −'}<Frac n="5" d="6" />{'. Die Werte stimmen überein.\n\n'}
              {'Allgemein gilt (Basiswechselsatz): '}<Frac n="log_a(x)" d="log_a(b)" />{' = log_b(x)  für a, b > 0, a,b ≠ 1.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b12a6',
      nr: 6,
      title: 'Konvergenz der sin- und cos-Reihe (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit dem Quotientenkriterium, dass die Reihen\n\n'}
              {'sin(x) = '}
              {'Σ'}
              <sub>{'k=0'}</sub>
              <sup>{'∞'}</sup>
              {' (−1)ᵏ '}
              <Frac n="x²ᵏ⁺¹" d="(2k+1)!" />
              {'  und  cos(x) = '}
              {'Σ'}
              <sub>{'k=0'}</sub>
              <sup>{'∞'}</sup>
              {' (−1)ᵏ '}
              <Frac n="x²ᵏ" d="(2k)!" />
              {'\n\nfür jedes x ∈ ℝ konvergieren.'}
            </>
          ),
          hint: h(
            <>
              <p>Das <span className="hint-em">Quotientenkriterium</span>: Σaₖ konvergiert absolut, wenn lim |aₖ₊₁/aₖ| {'<'} 1. Bilde das Verhältnis zweier aufeinanderfolgender Glieder und bestimme den Grenzwert für k → ∞.</p>
            </>,
            <>
              <ol>
                <li>Schreibe aₖ für die Sinusreihe auf (Vorzeichen und Betrag getrennt)</li>
                <li>Bilde |aₖ₊₁/aₖ| — vereinfache Zähler und Nenner durch Kürzen der Potenzen und Fakultäten</li>
                <li>Bestimme den Grenzwert für k → ∞ (x ist dabei eine feste Konstante)</li>
                <li>Wiederhole analog für die Kosinusreihe</li>
              </ol>
            </>,
            <p>x ist fest; nur k → ∞. Der Grenzwert ist 0 für jedes x ∈ ℝ.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> x als wachsende Variable im Grenzwert behandeln → <strong>✅ Richtig:</strong> x ist eine feste reelle Zahl; nur k → ∞; der Grenzwert des Quotienten |aₖ₊₁/aₖ| = x²/((2k+3)(2k+2)) → 0</li>
            </ul>,
          ),
          solution: (
            <>
              {'Sinusreihe: aₖ = (−1)ᵏ '}<Frac n="x²ᵏ⁺¹" d="(2k+1)!" />{'\n\n'}
              {'|'}<Frac n="aₖ₊₁" d="aₖ" />{'| = '}<Frac n="x²" d="(2k+3)(2k+2)" />{' → 0 < 1  (k → ∞, x fest).\n'}
              {'→ Sinusreihe konvergiert für alle x ∈ ℝ.\n\n'}
              {'Kosinusreihe: aₖ = (−1)ᵏ '}<Frac n="x²ᵏ" d="(2k)!" />{'\n\n'}
              {'|'}<Frac n="aₖ₊₁" d="aₖ" />{'| = '}<Frac n="x²" d="(2k+2)(2k+1)" />{' → 0 < 1  (k → ∞, x fest).\n'}
              {'→ Kosinusreihe konvergiert für alle x ∈ ℝ.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Zeigen Sie, dass für jedes x ∈ ℝ gilt:\n\ncos(−x) = cos(x)  und  sin(−x) = −sin(x).'}</>,
          hint: h(
            <>
              <p>Setze −x in die Reihendarstellung ein. Nutze (−x)²ᵏ = x²ᵏ (gerade Potenz bleibt positiv) und (−x)²ᵏ⁺¹ = −x²ᵏ⁺¹ (ungerade Potenz wechselt Vorzeichen).</p>
            </>,
            <>
              <ol>
                <li>Setze −x in die Reihendarstellung von cos(x) und sin(x) ein</li>
                <li>Vereinfache (−x)^(2k) und (−x)^(2k+1) — beachte gerade vs. ungerade Potenzen</li>
                <li>Ziehe konstante Faktoren aus der Summe heraus und erkenne die ursprüngliche Reihe</li>
              </ol>
            </>,
            <p>(−1)^(2k) = 1 (gerade) und (−1)^(2k+1) = −1 (ungerade).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−x)²ᵏ = −x²ᵏ behaupten → <strong>✅ Richtig:</strong> Gerade Potenzen: (−x)²ᵏ = (−1)²ᵏ · x²ᵏ = 1 · x²ᵏ = x²ᵏ; das Vorzeichen verschwindet</li>
            </ul>,
          ),
          solution: (
            <>
              {'Da (−x)²ᵏ = x²ᵏ für jedes k ∈ ℕ:\n\n'}
              {'cos(−x) = Σ (−1)ᵏ '}<Frac n="(−x)²ᵏ" d="(2k)!" />{' = Σ (−1)ᵏ '}<Frac n="x²ᵏ" d="(2k)!" />{' = cos(x). ✓\n\n'}
              {'Da (−x)²ᵏ⁺¹ = −x²ᵏ⁺¹:\n\n'}
              {'sin(−x) = Σ (−1)ᵏ '}<Frac n="(−x)²ᵏ⁺¹" d="(2k+1)!" />{' = −Σ (−1)ᵏ '}<Frac n="x²ᵏ⁺¹" d="(2k+1)!" />{' = −sin(x). ✓'}
            </>
          ),
        },
      ],
    },
  ],
}
