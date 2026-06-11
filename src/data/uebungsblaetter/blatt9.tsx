import type { ReactNode } from 'react'
import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt9: MatheBlatt = {
  id: 'blatt9',
  nr: '9',
  titel: 'Rekursive Folgen, Reihen, Polynomdivision',
  aufgaben: [
    {
      id: 'b9a1',
      nr: 1,
      title: 'Grenzwerte geometrischer Reihen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Σ(k=0 bis ∞) 5·('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Geometrische Reihe</span>: Σ(k=0..∞) qᵏ = 1/(1−q) für |q| &lt; 1. Der konstante Faktor wird ausgeklammert.</p>
            </>,
            <>
              <ol>
                <li>Prüfe |q| &lt; 1 — nur dann konvergiert die geometrische Reihe</li>
                <li>Klammere den konstanten Faktor aus der Summe</li>
                <li>Wende die Formel Σqᵏ = 1/(1−q) an und vereinfache</li>
              </ol>
            </>,
            <>
              <p>Allgemein: Σ(k=0..∞) c·qᵏ = c/(1−q) für |q| &lt; 1.</p>
              <pre className="hint-code-block">{`Beispiel: Σ(k=0..∞) 3·(2/3)ᵏ = 3/(1−2/3) = 9`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Formel anwenden ohne |q| &lt; 1 zu prüfen → <strong>✅ Richtig:</strong> |1/2| = 1/2 &lt; 1 ✓; Formel gilt; Ergebnis 1/(1−1/2) = 2, gesamt 5·2 = 10</li>
              <li><strong>❌ Falsch:</strong> 1/(1+q) statt 1/(1−q) → <strong>✅ Richtig:</strong> Geometrische Reihe: Σqᵏ = 1/(1−q); Nenner ist 1 minus q</li>
            </ul>,
            <p>Ist |1/2| &lt; 1? Ja. Ergibt 1/(1−1/2) = 2 und 5·2 = 10? ✓</p>,
          ),
          solution: (
            <>
              {'Σ(k=0..∞) 5·('}<Frac n="1" d="2" />{')ᵏ = 5 · '}<Frac n="1" d="1−1/2" />{' = 5 · 2 = 10'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Σ(k=2 bis ∞) 2·(−0,4)ᵏ'}</>,
          hint: h(
            <>
              <p>Der Index beginnt bei k=2. Ein <span className="hint-em">Indexshift</span> (j = k−2) überführt die Reihe auf Start k=0.</p>
              <p>Alternativ: Σ(k=2..∞) qᵏ = q²/(1−q) direkt verwenden.</p>
            </>,
            <>
              <ol>
                <li>Prüfe |q| &lt; 1 und stelle sicher, dass q als Bruch vorliegt</li>
                <li>Führe einen Indexshift j = k−2 durch, um die Summe auf j=0 zu starten</li>
                <li>Klammere qᵏ₀ (hier q²) als Faktor aus und wende Σqʲ = 1/(1−q) an</li>
                <li>Simplify sorgfältig (Achtung: 1 − (−q) = 1 + q)</li>
              </ol>
            </>,
            <>
              <pre className="hint-code-block">{`Direkt: 2·(−2/5)²/(1−(−2/5)) = (8/25)/(7/5) = 8/35`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Σ(k=2..∞)(−2/5)ᵏ = 1/(1−(−2/5)) (Formel ab k=0 ohne Korrektur) → <strong>✅ Richtig:</strong> Σ(k=2..∞)qᵏ = q²·Σ(j=0..∞)qʲ = q²/(1−q); oder Indexshift j=k−2</li>
              <li><strong>❌ Falsch:</strong> 1−(−2/5) = 3/5 → <strong>✅ Richtig:</strong> 1−(−2/5) = 1+2/5 = 7/5; 1/(7/5) = 5/7</li>
            </ul>,
            <p>Ergibt 2·(4/25)·(5/7) = 8/35? ✓</p>,
          ),
          solution: (
            <>
              {'−0,4 = −'}<Frac n="2" d="5" />{', Indexshift j=k−2:\n'}
              {'2·('}<Frac n="−2" d="5" />{')² · '}<Frac n="1" d="1+2/5" />{' = '}<Frac n="8" d="25" />{' · '}<Frac n="5" d="7" />{' = '}<Frac n="8" d="35" />
            </>
          ),
        },
      ],
    },
    {
      id: 'b9a2',
      nr: 2,
      title: 'Reihen auf Konvergenz prüfen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Σ(k=1 bis ∞) √k'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Notwendige Bedingung</span>: Konvergiert Σaₖ, so muss aₖ → 0. Falls aₖ nicht gegen 0 geht, divergiert die Reihe sofort.</p>
            </>,
            <>
              <ol>
                <li>Prüfe die notwendige Bedingung: Konvergiert Σaₖ, muss aₖ → 0</li>
                <li>Bestimme das Verhalten von aₖ für k → ∞</li>
                <li>Schließe aus dem Ergebnis auf Konvergenz oder sofortige Divergenz</li>
              </ol>
            </>,
            <p>Vergleich: Σ 1/k divergiert (harmonisch), Σ 1/k² konvergiert.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Direktes Anwenden von Wurzel- oder Quotientenkriterium → <strong>✅ Richtig:</strong> Zuerst notwendige Bedingung prüfen: aₖ=√k → ∞ ≠ 0 → sofortige Divergenz ohne weitere Kriterien</li>
            </ul>,
            <p>Gilt aₖ → 0? Hier aₖ = √k → ∞. Nullfolgenbedingung verletzt → Divergenz.</p>,
          ),
          solution: 'aₖ = √k → ∞ (keine Nullfolge)\n→ Reihe divergiert.',
        },
        {
          letter: 'b',
          text: <>{'Σ(k=1 bis ∞) '}<Frac n="1" d="√k" /></>,
          hint: h(
            <>
              <p><span className="hint-em">Minorantenkriterium</span>: Ist bₖ ≤ aₖ für alle k und divergiert Σbₖ, so divergiert auch Σaₖ.</p>
              <p>Vergleich mit der harmonischen Reihe: 1/√k ≥ 1/k für k ≥ 1 (da √k ≤ k).</p>
            </>,
            <>
              <ol>
                <li>Suche eine Minorante bₖ ≤ 1/√k, deren Reihe bekanntermaßen divergiert</li>
                <li>Begründe die Ungleichung bₖ ≤ 1/√k für alle k ≥ 1</li>
                <li>Wende das Minorantenkriterium an: Σbₖ divergiert → Σ1/√k divergiert</li>
              </ol>
            </>,
            <p>Allgemein: Σ 1/kᵖ divergiert für p ≤ 1 (p-Reihe). Hier p = 1/2 ≤ 1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1/√k → 0 → Reihe konvergiert → <strong>✅ Richtig:</strong> aₖ → 0 ist nur notwendig, nicht hinreichend; hier zeigt 1/√k ≥ 1/k und Minorantenkriterium die Divergenz</li>
            </ul>,
            <p>Gilt 1/√k ≥ 1/k für k ≥ 1? Ja. Σ 1/k divergiert → Minorantenkriterium → Σ 1/√k divergiert.</p>,
          ),
          solution: (
            <>
              <Frac n="1" d="√k" />{' ≥ '}<Frac n="1" d="k" />{' für alle k ≥ 1.\nDa Σ '}<Frac n="1" d="k" />{' divergiert, divergiert nach dem Minorantenkriterium auch Σ '}<Frac n="1" d="√k" />{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Σ(k=1 bis ∞) (−1)ᵏ⁺¹ · '}<Frac n="1" d="√k" /></>,
          hint: h(
            <>
              <p><span className="hint-em">Leibnizkriterium</span>: Σ (−1)ᵏ aₖ konvergiert, wenn aₖ monoton fällt und aₖ → 0.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere aₖ (ohne das Vorzeichen (−1)ᵏ)</li>
                <li>Prüfe Bedingung 1: Ist aₖ monoton fallend? (z.B. via aₖ₊₁ ≤ aₖ)</li>
                <li>Prüfe Bedingung 2: Gilt aₖ → 0?</li>
                <li>Wende das Leibnizkriterium an, wenn beide Bedingungen erfüllt sind</li>
              </ol>
            </>,
            <p>Achtung: Leibniz liefert nur bedingte Konvergenz. Absolute Konvergenz wäre Σ 1/√k — die divergiert (s. (b)).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur lim aₖ = 0 prüfen und Leibniz anwenden → <strong>✅ Richtig:</strong> Leibniz erfordert ZWEI Bedingungen: aₖ monoton fallend UND aₖ → 0; beide müssen explizit gezeigt werden</li>
            </ul>,
            <p>Sind beide Bedingungen erfüllt: aₖ monoton fallend UND aₖ → 0? Dann Leibnizkriterium anwendbar.</p>,
          ),
          solution: 'aₖ := 1/√k ist monoton fallend und lim aₖ = 0.\nNach dem Leibnizkriterium konvergiert die Reihe.',
        },
        {
          letter: 'd',
          text: <>{'Σ(k=1 bis ∞) ('}<Frac n="1" d="√k" />{')ᵏ'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Wurzelkriterium</span>: Ist L = lim ᵏ√|aₖ| &lt; 1, konvergiert Σaₖ absolut. Eignet sich besonders wenn aₖ eine k-te Potenz ist.</p>
            </>,
            <>
              <ol>
                <li>Erkenne, dass aₖ eine k-te Potenz ist — ideal für das Wurzelkriterium</li>
                <li>Berechne ᵏ√|aₖ| — nutze ᵏ√(xᵏ) = x für x ≥ 0</li>
                <li>Bestimme den Grenzwert von ᵏ√|aₖ| und prüfe ob er &lt; 1 ist</li>
              </ol>
            </>,
            <p>Allgemein: ᵏ√(bᵏ) = b. Daher hebt sich die k-te Wurzel mit dem Exponenten k auf.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√((1/√k)ᵏ) = 1/k (falsche Vereinfachung) → <strong>✅ Richtig:</strong> ᵏ√(xᵏ) = x für x ≥ 0; daher ᵏ√((1/√k)ᵏ) = 1/√k → 0 &lt; 1</li>
            </ul>,
            <p>Warum vereinfacht sich ᵏ√((1/√k)ᵏ) zu 1/√k — und was passiert mit diesem Ausdruck für k → ∞?</p>,
          ),
          solution: (
            <>
              {'ᵏ√('}<Frac n="1" d="√k" />{')ᵏ = '}<Frac n="1" d="√k" />{' → 0 < 1\nNach dem Wurzelkriterium konvergiert die Reihe.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b9a3',
      nr: 3,
      title: 'Weitere Reihen auf Konvergenz prüfen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Σ(k=2 bis ∞) '}<Frac n="k" d="3ᵏ" /></>,
          hint: h(
            <>
              <p>Sowohl <span className="hint-em">Wurzel-</span> als auch <span className="hint-em">Quotientenkriterium</span> sind anwendbar. Erinnerung: lim ᵏ√k = 1 und lim ᵏ√a = 1 für a &gt; 0.</p>
            </>,
            <>
              <ol>
                <li>Wähle Wurzel- oder Quotientenkriterium (beide funktionieren hier)</li>
                <li>Berechne den Grenzwert — nutze dabei lim ᵏ√k = 1</li>
                <li>Vergleiche den Grenzwert mit 1 und ziehe das Konvergenzfazit</li>
              </ol>
            </>,
            <p>Beide Kriterien liefern denselben Konvergenzwert 1/3.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim ᵏ√k = ∞ → ᵏ√|aₖ| = ∞/3 → kein Kriterium → <strong>✅ Richtig:</strong> lim ᵏ√k = 1 (Standardgrenzwert!); ᵏ√k/3 → 1/3 &lt; 1 → Wurzelkriterium gibt Konvergenz</li>
            </ul>,
            <p>Ergibt das Quotientenkriterium (k+1)/(3k) → 1/3 &lt; 1? ✓</p>,
          ),
          solution: (
            <>
              {'Wurzelkrit.: ᵏ√('}<Frac n="k" d="3ᵏ" />{') = '}<Frac n="ᵏ√k" d="3" />{' → '}<Frac n="1" d="3" />{' < 1 → konvergiert\n\n'}
              {'Quotientenkrit.: '}<Frac n="a_{k+1}" d="aₖ" />{' = '}<Frac n="k+1" d="3k" />{' → '}<Frac n="1" d="3" />{' < 1 → konvergiert'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Σ(k=2 bis ∞) (−1)ᵏ · (1 − '}<Frac n="1" d="k" />{')' }</>,
          hint: h(
            <>
              <p>Notwendige Bedingung prüfen: Bilden die Summanden eine Nullfolge?</p>
            </>,
            <>
              <ol>
                <li>Prüfe die notwendige Konvergenzbedingung: muss aₖ → 0?</li>
                <li>Berechne |aₖ| und bestimme den Grenzwert für k → ∞</li>
                <li>Schließe aus dem Ergebnis auf Konvergenz oder Divergenz</li>
              </ol>
            </>,
            <p>Das Leibnizkriterium ist hier nicht anwendbar, da aₖ = 1−1/k → 1 ≠ 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Leibnizkriterium anwenden wollen → <strong>✅ Richtig:</strong> Leibniz erfordert aₖ → 0; hier aₖ = 1−1/k → 1 ≠ 0 → Leibniz nicht anwendbar; Nullfolgenbedingung verletzt → sofortige Divergenz</li>
            </ul>,
            <p>Was ist der Grenzwert von |aₖ| für k → ∞ — und was folgt daraus für die Reihe?</p>,
          ),
          solution: '|aₖ| = |1 − 1/k| → 1 ≠ 0 (keine Nullfolge)\n→ Reihe divergiert.',
        },
        {
          letter: 'c',
          text: <>{'Σ(k=1 bis ∞) '}<Frac n="2ᵏ⁺²" d="k²·5ᵏ" /></>,
          hint: h(
            <>
              <p>Sowohl Wurzel- als auch Quotientenkriterium sind geeignet. Das Schlüsselverhältnis ist <span className="hint-em">2/5</span>.</p>
              <p>Erinnerung: ᵏ√(k²) = k^(2/k) → 1 und ᵏ√4 = 4^(1/k) → 1.</p>
            </>,
            <>
              <ol>
                <li>Wähle Wurzel- oder Quotientenkriterium (beide funktionieren)</li>
                <li>Schreibe 2^(k+2) als 4·2ᵏ um (erleichtert die Vereinfachung)</li>
                <li>Berechne den Grenzwert — nutze ᵏ√(konst) → 1 und k^(1/k) → 1</li>
                <li>Vergleiche mit 1 und folgere Konvergenz oder Divergenz</li>
              </ol>
            </>,
            <p>2^(k+2) = 4·2ᵏ — der Faktor 4 wird durch ᵏ√4 → 1 irrelevant.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√(k²) = k² → ᵏ√|aₖ| = 4·k²/5 → ∞ → kein Kriterium → <strong>✅ Richtig:</strong> ᵏ√(k²) = k^(2/k) → 1; und ᵏ√4 = 4^(1/k) → 1; daher ᵏ√|aₖ| → 2/5 &lt; 1</li>
            </ul>,
            <p>Ergibt das Quotientenkriterium (2/5)·(k/(k+1))² → 2/5 &lt; 1? ✓</p>,
          ),
          solution: (
            <>
              {'Wurzelkrit.: ᵏ√|aₖ| = '}<Frac n="2" d="5" />{' · ᵏ√4 / k^(2/k) → '}<Frac n="2" d="5" />{' < 1 → konvergiert\n\n'}
              {'Quotientenkrit.: '}<Frac n="a_{k+1}" d="aₖ" />{' = '}<Frac n="2" d="5" />{' · ('}<Frac n="k" d="k+1" />{')² → '}<Frac n="2" d="5" />{' < 1 → konvergiert'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'Σ(k=1 bis ∞) ('}<Frac n="1" d="√(k+1)" />{' − '}<Frac n="1" d="√k" />{')' }</>,
          hint: h(
            <>
              <p>Die Partialsummen sind eine <span className="hint-em">Teleskopsumme</span>: Bei aufeinanderfolgenden Summen kürzen sich alle inneren Terme.</p>
            </>,
            <>
              <ol>
                <li>Schreibe die Partialsumme xₙ = Σ(k=1..n) (1/√(k+1) − 1/√k) explizit aus</li>
                <li>Beobachte, welche Terme sich gegenseitig aufheben (Teleskop-Prinzip)</li>
                <li>Bestimme den verbleibenden geschlossenen Ausdruck für xₙ</li>
                <li>Berechne lim xₙ und schließe auf den Reihenwert</li>
              </ol>
            </>,
            <p>Bei Teleskopsummen bricht die Summe auf ersten und letzten Term zusammen.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Wurzel- oder Quotientenkriterium anwenden → <strong>✅ Richtig:</strong> Hier ist die Partialsumme direkt berechenbar (Teleskop); Partialsumme xₙ = 1/√(n+1) − 1 → −1</li>
            </ul>,
            <p>Warum nennt man diese Summe eine Teleskopsumme — und wie erkennt man, welche Terme stehen bleiben?</p>,
          ),
          solution: (
            <>
              {'xₙ = '}<Frac n="1" d="√(n+1)" />{' − 1  (Teleskopsumme)\n'}
              {'lim xₙ = 0 − 1 = −1\n'}
              {'→ Σ('}<Frac n="1" d="√(k+1)" />{' − '}<Frac n="1" d="√k" />{') = −1'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b9a4',
      nr: 4,
      title: 'Rekursive Folge: x₀=1, xₙ₊₁=√(2+xₙ)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Die Folge (xₙ) sei rekursiv definiert durch x₀ := 1 und xₙ₊₁ := √(2+xₙ), n ∈ ℕ.\n\nZeigen Sie durch vollständige Induktion, dass xₙ₊₁ ≥ xₙ für alle n ∈ ℕ.',
          hint: h(
            <>
              <p>Vollständige Induktion:</p>
              <ul>
                <li><span className="hint-em">IA (n=0)</span>: x₁ ≥ x₀ direkt ausrechnen</li>
                <li><span className="hint-em">IS (n → n+1)</span>: Aus xₙ ≤ xₙ₊₁ (IV) folgt xₙ₊₁ ≤ xₙ₊₂</li>
              </ul>
              <p>Schlüssel: √ ist <span className="hint-em">monoton wachsend</span>: a ≤ b ⟹ √a ≤ √b.</p>
            </>,
            <>
              <ol>
                <li><strong>IA (n=0):</strong> Berechne x₀ und x₁ direkt und vergleiche</li>
                <li><strong>IS:</strong> Setze xₙ ≤ xₙ₊₁ als Induktionsvoraussetzung voraus</li>
                <li>Schreibe xₙ₊₂ = √(2+xₙ₊₁) und benutze IV + Monotonie von √</li>
                <li>Schließe auf xₙ₊₂ ≥ xₙ₊₁</li>
              </ol>
            </>,
            <p>Die Monotonie von √ ist entscheidend: Aus a ≤ b folgt √a ≤ √b für a, b ≥ 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Im IS √(2+xₙ₊₁) ≥ √(2+xₙ) ohne Begründung → <strong>✅ Richtig:</strong> Begründung: xₙ₊₁ ≥ xₙ (IV) und √ monoton → √(2+xₙ₊₁) ≥ √(2+xₙ); beide Schritte explizit nennen</li>
            </ul>,
            <p>Wird im IS die IV klar verwendet, um xₙ₊₁ ≤ xₙ₊₂ zu folgern?</p>,
          ),
          solution: 'IA (n=0): x₀=1, x₁=√3; somit x₁≥x₀ ✓\n\nIS (n→n+1): Sei xₙ ≤ xₙ₊₁ (IV). Dann:\nxₙ₊₂ = √(2+xₙ₊₁) ≥^(IV) √(2+xₙ) = xₙ₊₁  □',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie durch vollständige Induktion, dass xₙ ≤ 2 für alle n ∈ ℕ.',
          hint: h(
            <>
              <p>Vollständige Induktion: Der IS nutzt wieder die Monotonie von √.</p>
              <p>Schlüsselrechnung im IS: √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2.</p>
            </>,
            <>
              <ol>
                <li><strong>IA (n=0):</strong> Überprüfe x₀ ≤ 2 direkt</li>
                <li><strong>IS:</strong> Setze xₙ ≤ 2 als IV an und forme xₙ₊₁ = √(2+xₙ) um</li>
                <li>Schätze 2+xₙ nach oben ab (mit IV) und wende Monotonie von √ an</li>
              </ol>
            </>,
            <p>Die obere Schranke 2 ist kein Zufall: 2 ist der Grenzwert der Folge (Teil (c)).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> √4 = 4 → <strong>✅ Richtig:</strong> √4 = 2; der Schlüsselschritt ist √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2</li>
              <li><strong>❌ Falsch:</strong> IV (xₙ ≤ 2) nicht einsetzen → <strong>✅ Richtig:</strong> Mit IV: 2+xₙ ≤ 2+2 = 4, dann √ monoton → √(2+xₙ) ≤ √4 = 2</li>
            </ul>,
            <p>Warum darf man im Induktionsschritt 2+xₙ durch 4 nach oben abschätzen — welche Voraussetzung ermöglicht das?</p>,
          ),
          solution: 'IA (n=0): x₀=1 ≤ 2 ✓\n\nIS (n→n+1): Sei xₙ ≤ 2 (IV). Dann:\nxₙ₊₁ = √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2  □',
        },
        {
          letter: 'c',
          text: 'Schließen Sie auf die Konvergenz der Folge (xₙ) und bestimmen Sie den Grenzwert.\n\nHinweis: Für eine konvergente Folge (yₙ) mit lim yₙ = y gilt auch lim √yₙ = √y. Die Monotonie der Wurzelfunktion darf verwendet werden.',
          hint: h(
            <>
              <p>Aus (a) und (b): monoton wachsend und beschränkt → konvergiert nach dem <span className="hint-em">Satz über monotone beschränkte Folgen</span>.</p>
              <p>Grenzwert: x = lim xₙ = lim xₙ₊₁ = lim √(2+xₙ) = √(2+x) → Gleichung lösen.</p>
            </>,
            <>
              <ol>
                <li>Begründe Konvergenz: Nutze (a) und (b) und das Monotoniekriterium</li>
                <li>Sei x = lim xₙ. Da auch xₙ₊₁ → x, setze in die Rekursionsformel ein</li>
                <li>Löse die entstehende Gleichung (Quadratische Gleichung)</li>
                <li>Prüfe, welche Lösung im zulässigen Wertebereich der Folge liegt</li>
              </ol>
            </>,
            <p>p-q-Formel: x = (1 ± √(1+8))/2 = (1 ± 3)/2 → x=2 oder x=−1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Beide Lösungen x=2 und x=−1 als Grenzwert angeben → <strong>✅ Richtig:</strong> xₙ ∈ [1,2] für alle n (aus a,b); daher muss der Grenzwert auch in [1,2] liegen; x=−1 ∉ [1,2] → verwerfen</li>
            </ul>,
            <p>Wenn die Gleichung mehrere Lösungen liefert — nach welchem Kriterium wählt man die korrekte aus?</p>,
          ),
          solution: '(xₙ) monoton wachsend (a) und beschränkt durch 2 (b) → konvergiert.\n\nSei x = lim xₙ:\nx = √(2+x)  →  x²−x−2 = 0  →  (x−2)(x+1) = 0\nx=2 oder x=−1. Da xₙ ∈ [1,2]: Grenzwert = 2.',
        },
      ],
    },
    {
      id: 'b9a5',
      nr: 5,
      title: 'Polynomdivisionen (wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: '(−x³ + 4x² − x − 6) : (x − 2)',
          hint: h(
            <>
              <p><span className="hint-em">Polynomdivision</span>: Führenden Term des Dividenden durch führenden Term des Divisors teilen, mit gesamtem Divisor multiplizieren, subtrahieren, wiederholen.</p>
            </>,
            <>
              <ol>
                <li>Teile den führenden Term des Dividenden durch den führenden Term des Divisors</li>
                <li>Multipliziere diesen Quotienten mit dem gesamten Divisor</li>
                <li>Subtrahiere das Ergebnis vom Dividenden — das ergibt das neue Restpolynom</li>
                <li>Wiederhole mit dem Restpolynom, bis der Grad des Rests kleiner als der Grad des Divisors ist</li>
                <li>Probe: Multipliziere Ergebnis mit Divisor und vergleiche mit Dividenden</li>
              </ol>
            </>,
            <p>Probe: (x−2)·(−x²+2x+3) = −x³+4x²−x−6 ✓</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Vorzeichen beim Subtrahieren vergessen → <strong>✅ Richtig:</strong> Man subtrahiert den Zwischenterm; z.B. −(−x³+2x²) = +x³−2x²; dann zum Restpolynom addieren</li>
            </ul>,
            <p>Rest = 0? Rückmultiplikation als Probe.</p>,
          ),
          solution: '(−x³+4x²−x−6) : (x−2) = −x²+2x+3\n\nProbe: (x−2)·(−x²+2x+3) = −x³+4x²−x−6 ✓',
        },
        {
          letter: 'b',
          text: '(3x³ + 10x² − 7x + 4) : (3x² − 2x + 1)',
          hint: h(
            <>
              <p>Divisor hat Grad 2, Dividend Grad 3 → Ergebnis hat Grad 1.</p>
            </>,
            <>
              <ol>
                <li>Teile den führenden Term des Dividenden durch den führenden Term des Divisors</li>
                <li>Multipliziere und subtrahiere, um das Restpolynom zu erhalten</li>
                <li>Wiederhole, bis der Grad des Rests kleiner als der des Divisors ist</li>
                <li>Probe: Ergebnis × Divisor muss den ursprünglichen Dividenden ergeben</li>
              </ol>
            </>,
            <p>Probe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Führenden Term des Rests falsch bestimmen (z.B. 12x² − (−2x²) rechnen) → <strong>✅ Richtig:</strong> Rest = Dividend minus Zwischenterm; 10x² − (−2x²) = 12x²; dann 12x²/3x² = 4 für nächsten Quotiententerm</li>
            </ul>,
            <p>Rest = 0? Probe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓</p>,
          ),
          solution: '(3x³+10x²−7x+4) : (3x²−2x+1) = x+4\n\nProbe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓',
        },
        {
          letter: 'c',
          text: '(x⁵ − 2x³ − x² + 1) : (2x³ − 2)',
          hint: h(
            <>
              <p>Divisor Grad 3, Dividend Grad 5 → Ergebnis Grad 2, ggf. mit Rest.</p>
              <p>Achtung: (2x³−2) hat keine x²- und x-Terme — beim Subtrahieren Platzhalter beachten.</p>
            </>,
            <>
              <ol>
                <li>Teile den führenden Term durch den führenden Term des Divisors — achte auf Bruchkoeffizienten</li>
                <li>Multipliziere und subtrahiere sorgfältig (der Divisor hat Lücken ohne x²- und x-Terme)</li>
                <li>Wiederhole bis der Grad des Rests &lt; 3 (Grad des Divisors)</li>
                <li>Schreibe das Ergebnis mit Rest als P(x)/Q(x) = Quotient + Rest/Divisor</li>
              </ol>
            </>,
            <>
              <p>Division mit Rest: P/Q = Ergebnis + Rest/Q.</p>
              <p>Probe: (2x³−2)·((1/2)x²−1)+(−1) = x⁵−x²−2x³+2−1 = x⁵−2x³−x²+1 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x⁵ ÷ 2x³ = x² → <strong>✅ Richtig:</strong> x⁵/2x³ = (1/2)x²; Koeffizient 1/2 nicht vergessen</li>
              <li><strong>❌ Falsch:</strong> −2x³ ÷ 2x³ = −x → <strong>✅ Richtig:</strong> −2x³/2x³ = −1 (Konstante, kein x-Term); Ergebnis des zweiten Schritts ist −1</li>
            </ul>,
            <p>Ergibt die Probe (2x³−2)·((1/2)x²−1)+(−1) = x⁵−2x³−x²+1? ✓</p>,
          ),
          solution: (
            <>
              {'(x⁵−2x³−x²+1) : (2x³−2) = '}<Frac n="1" d="2" />{'x² − 1 + '}<Frac n="−1" d="2x³−2" />{'\n\n'}
              {'Probe: (2x³−2)·('}<Frac n="1" d="2" />{'x²−1)+(−1) = x⁵−2x³−x²+1 ✓'}
            </>
          ),
        },
      ],
    },
  ],
}
