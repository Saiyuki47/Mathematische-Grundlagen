import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
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
      referenz: ['reihen-konvergenz', 'geometrische-summenformel'],
      subaufgaben: [
        {
          letter: 'a',
          text: <M>{'\\sum_{k=0}^{\\infty} 5\\cdot\\left(\\frac{1}{2}\\right)^k'}</M>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Reihe</span> ist eine unendliche Summe Σ(k=0..∞) aₖ = a₀ + a₁ + a₂ + … Sie hat genau dann einen Wert (man sagt: sie <span className="hint-em">konvergiert</span>), wenn die <span className="hint-em">Partialsummen</span> sₙ = a₀ + … + aₙ (die abgebrochenen Summen) für n → ∞ gegen eine feste Zahl streben.</p>
              <p>Eine <span className="hint-em">geometrische Reihe</span> ist eine Reihe, bei der jeder Summand aus dem vorigen durch Multiplikation mit demselben festen Faktor q (dem <span className="hint-em">Quotienten</span>) entsteht: aₖ = qᵏ, also 1 + q + q² + q³ + … Hier ist aₖ = 5·(1/2)ᵏ, der Quotient ist also q = 1/2.</p>
              <p><span className="hint-em">Grenzwertformel der geometrischen Reihe</span>: Σ(k=0..∞) qᵏ = 1/(1−q), aber NUR wenn |q| &lt; 1 (|q| = Betrag, also q ohne Vorzeichen). Begründung: Für |q| &lt; 1 werden die Potenzen qᵏ immer kleiner und gehen gegen 0 — nur dann „bremst" sich die Summe ein und erreicht einen festen Wert. Bei |q| ≥ 1 wachsen die Summanden nicht gegen 0, die Reihe divergiert.</p>
              <p><span className="hint-em">Konstanter Faktor</span>: Steht vor qᵏ noch eine feste Zahl c (hier c = 5), darf man sie vor die Summe ziehen (Distributivgesetz für Reihen): Σ c·qᵏ = c·Σ qᵏ = c/(1−q).</p>
            </>,
            <>
              <p>So löst man Σ(k=0..∞) 5·(1/2)ᵏ Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) Quotient q ablesen: aₖ = 5·(1/2)ᵏ → q = 1/2,
   konstanter Faktor c = 5.

2) Konvergenz prüfen: |q| < 1 ?
   |1/2| = 1/2 < 1 ✓  → Formel anwendbar.
   (Ohne diese Prüfung darf man die Formel NICHT
    verwenden — sonst evtl. sinnloses Ergebnis.)

3) Faktor 5 vor die Summe ziehen:
   Σ 5·(1/2)ᵏ = 5 · Σ (1/2)ᵏ

4) Formel Σ qᵏ = 1/(1−q) einsetzen (q = 1/2):
   Σ (1/2)ᵏ = 1/(1 − 1/2) = 1/(1/2) = 2
   (denn 1 − 1/2 = 1/2, und 1 geteilt durch 1/2 = 2)

5) Mit dem Faktor 5 multiplizieren:
   5 · 2 = 10`}</pre>
              <p>Warum 1/(1/2) = 2? Durch einen Bruch teilen heißt mit dem Kehrwert malnehmen: 1 : (1/2) = 1 · (2/1) = 2.</p>
            </>,
            <>
              <p>Anderes Beispiel desselben Typs: Σ(k=0..∞) 3·(2/3)ᵏ</p>
              <pre className="hint-code-block">{`q = 2/3, c = 3
|2/3| = 2/3 < 1 ✓
Σ (2/3)ᵏ = 1/(1 − 2/3) = 1/(1/3) = 3
Ergebnis: 3 · 3 = 9`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Formel anwenden ohne |q| &lt; 1 zu prüfen → <strong>✅ Richtig:</strong> Erst |1/2| = 1/2 &lt; 1 bestätigen; die Formel 1/(1−q) gilt nur für |q| &lt; 1.</li>
              <li><strong>❌ Falsch:</strong> 1/(1+q) statt 1/(1−q) verwenden → <strong>✅ Richtig:</strong> Der Nenner ist 1 <em>minus</em> q: Σqᵏ = 1/(1−q), hier 1/(1−1/2) = 2.</li>
              <li><strong>❌ Falsch:</strong> Den Faktor 5 vergessen und nur 2 angeben → <strong>✅ Richtig:</strong> c = 5 bleibt erhalten: 5 · 2 = 10.</li>
            </ul>,
            <p>Selbstkontrolle: Rechne die ersten Glieder von Hand: 5 + 2,5 + 1,25 + 0,625 + … ≈ 9,375 und nähert sich 10. Frage: Warum konvergiert die Reihe nur für |q| &lt; 1, und was passiert anschaulich mit den Summanden 5·(1/2)ᵏ, wenn k immer größer wird?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=0}^{\\infty} 5 \\cdot \\left(\\frac{1}{2}\\right)^{k}'}</M>{' = 5 · '}<Frac n="1" d="1−1/2" />{' = 5 · 2 = 10'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <M>{'\\sum_{k=2}^{\\infty} 2\\cdot(-0.4)^k'}</M>,
          hint: h(
            <>
              <p>Wieder eine <span className="hint-em">geometrische Reihe</span> (jeder Summand = voriger mal festem Quotienten q), aber mit zwei Besonderheiten: (1) der Quotient ist <em>negativ</em>, q = −0,4 = −2/5, und (2) der Index startet nicht bei k = 0, sondern bei <span className="hint-em">k = 2</span>.</p>
              <p>Die Grundformel Σ(k=0..∞) qᵏ = 1/(1−q) (gültig für |q| &lt; 1) gilt nur, wenn man <em>bei k = 0 anfängt</em>. Startet die Summe später, muss man korrigieren. Zwei gleichwertige Wege:</p>
              <ul>
                <li><span className="hint-em">Indexshift</span>: Man führt einen neuen Laufindex j = k − 2 ein. Wenn k bei 2 startet, startet j bei 0. Wegen k = j + 2 wird qᵏ = q^(j+2) = q²·qʲ. Den festen Faktor q² zieht man vor die Summe: Σ(j=0..∞) q²·qʲ = q²·Σ(j=0..∞) qʲ = q²/(1−q).</li>
                <li><span className="hint-em">Direkte Startindex-Formel</span>: Σ(k=m..∞) qᵏ = qᵐ/(1−q). Hier m = 2, also q²/(1−q) — dasselbe Ergebnis.</li>
              </ul>
              <p>Wichtig bei negativem q: Im Nenner steht 1 − q. Setzt man q = −2/5 ein, wird daraus 1 − (−2/5) = 1 + 2/5 (Minus vor Minus = Plus!).</p>
            </>,
            <>
              <p>So löst man Σ(k=2..∞) 2·(−0,4)ᵏ Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) Dezimalzahl in Bruch: −0,4 = −4/10 = −2/5.
   Also q = −2/5, konstanter Faktor c = 2.

2) Konvergenz: |q| = |−2/5| = 2/5 < 1 ✓ → Formel gilt.

3) Startindex k=2 → Formel Σ(k=2..∞) qᵏ = q²/(1−q):
   q² = (−2/5)² = 4/25  (Quadrat macht das Minus weg)

4) Nenner ausrechnen — Minus vor Minus = Plus:
   1 − q = 1 − (−2/5) = 1 + 2/5 = 5/5 + 2/5 = 7/5

5) Bruch durch Bruch = mal Kehrwert:
   q²/(1−q) = (4/25)/(7/5) = (4/25)·(5/7) = 20/175 = 4/35

6) Konstanten Faktor c = 2 dazu:
   2 · 4/35 = 8/35`}</pre>
              <p>Kürzen in Schritt 5: (4/25)·(5/7) = (4·5)/(25·7); die 5 kürzt gegen 25 (25 = 5·5), bleibt 4/(5·7) = 4/35.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=3..∞) (1/2)ᵏ  (Start bei 3)</p>
              <pre className="hint-code-block">{`q = 1/2, |1/2| < 1 ✓, Startindex m = 3
qᵐ/(1−q) = (1/2)³/(1 − 1/2)
         = (1/8)/(1/2) = (1/8)·2 = 1/4`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Σ(k=2..∞)qᵏ = 1/(1−q) (Formel ab k=0 ohne Korrektur) → <strong>✅ Richtig:</strong> Startindex 2 verlangt den Faktor q²: Σ(k=2..∞)qᵏ = q²/(1−q).</li>
              <li><strong>❌ Falsch:</strong> 1 − (−2/5) = 3/5 → <strong>✅ Richtig:</strong> Minus vor Minus = Plus: 1 + 2/5 = 7/5; und 1/(7/5) = 5/7.</li>
              <li><strong>❌ Falsch:</strong> (−2/5)² = −4/25 → <strong>✅ Richtig:</strong> Quadrat einer negativen Zahl ist positiv: (−2/5)² = +4/25.</li>
            </ul>,
            <p>Selbstkontrolle: Addiere die ersten Glieder ab k=2: 2·(0,16) + 2·(−0,064) + 2·(0,0256) ≈ 0,32 − 0,128 + 0,051 ≈ 0,24 ≈ 8/35. Frage: Warum liefert der Indexshift j = k−2 genau den Vorfaktor q², und warum wird der Nenner bei negativem q größer (1 + 2/5) statt kleiner?</p>,
          ),
          solution: (
            <>
              {'−0.4 = −'}<Frac n="2" d="5" />{', Indexshift j=k−2:\n'}
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
      referenz: ['reihen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <M>{'\\sum_{k=1}^{\\infty} \\sqrt{k}'}</M>,
          hint: h(
            <>
              <p>Eine Reihe Σaₖ <span className="hint-em">konvergiert</span>, wenn ihre Partialsummen (abgebrochene Summen) gegen eine feste Zahl streben; sonst <span className="hint-em">divergiert</span> sie. Die Summanden aₖ heißen <span className="hint-em">Glieder</span> der Reihe.</p>
              <p><span className="hint-em">Notwendige Bedingung (Nullfolgenkriterium)</span>: Wenn Σaₖ konvergiert, dann MUSS aₖ → 0 für k → ∞ gelten (die Glieder müssen gegen 0 schrumpfen). Anschaulich: Addiert man unendlich oft etwas, das nicht beliebig klein wird, wächst die Summe unbeschränkt.</p>
              <p>Das nutzt man als <span className="hint-em">Divergenztest</span> in <em>Kontraposition</em>: Geht aₖ NICHT gegen 0, kann die Reihe nicht konvergieren → sie divergiert sofort. (Achtung: aₖ → 0 allein garantiert KEINE Konvergenz — es ist notwendig, aber nicht hinreichend. Siehe Teil (b).)</p>
              <p>Hier ist aₖ = √k. Die <span className="hint-em">Wurzel</span> √k wächst mit k unbeschränkt (√1=1, √100=10, √10000=100), also √k → ∞, keinesfalls → 0.</p>
            </>,
            <>
              <p>So zeigt man die Divergenz von Σ(k=1..∞) √k:</p>
              <pre className="hint-code-block">{`1) Glied bestimmen: aₖ = √k.

2) Grenzwert der Glieder für k → ∞ untersuchen:
   √1 = 1, √4 = 2, √9 = 3, √100 = 10, …
   → √k wächst über alle Grenzen → lim √k = ∞

3) Nullfolgenkriterium prüfen:
   Damit Σaₖ konvergieren KÖNNTE, müsste aₖ → 0.
   Hier aₖ = √k → ∞ ≠ 0  → Bedingung verletzt.

4) Schluss (Kontraposition):
   aₖ ↛ 0  ⟹  Σ √k divergiert.
   (Kein weiteres Kriterium nötig.)`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) k/(k+1)</p>
              <pre className="hint-code-block">{`aₖ = k/(k+1) → 1 für k → ∞  (Zähler ≈ Nenner)
1 ≠ 0 → Nullfolgenkriterium verletzt → divergiert.
Gegenbeispiel-Warnung: Σ 1/k hat aₖ = 1/k → 0,
trotzdem divergiert sie (harmonische Reihe)!
→ aₖ → 0 reicht NICHT für Konvergenz.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Sofort Wurzel- oder Quotientenkriterium ansetzen → <strong>✅ Richtig:</strong> Zuerst das einfache Nullfolgenkriterium: aₖ = √k → ∞ ≠ 0 → Divergenz in einem Schritt.</li>
              <li><strong>❌ Falsch:</strong> „√k wird ja immer kleiner relativ" → konvergiert → <strong>✅ Richtig:</strong> √k wird größer, nicht kleiner; lim √k = ∞.</li>
            </ul>,
            <p>Selbstkontrolle: Schon die Partialsumme √1+√2+√3+√4 ≈ 1+1,41+1,73+2 = 6,14 wächst schnell und unbegrenzt. Frage: Warum ist aₖ → 0 nur notwendig und nicht hinreichend — und welches berühmte Beispiel (aus dem 📝-Kasten) zeigt das?</p>,
          ),
          solution: 'aₖ = √k → ∞ (keine Nullfolge)\n→ Reihe divergiert.',
        },
        {
          letter: 'b',
          text: <M>{'\\sum_{k=1}^{\\infty} \\frac{1}{\\sqrt{k}}'}</M>,
          hint: h(
            <>
              <p>Achtung-Falle: Hier gilt aₖ = 1/√k → 0 (die Glieder schrumpfen). Das Nullfolgenkriterium aus (a) ist erfüllt — aber das beweist NICHTS, denn aₖ → 0 ist nur notwendig, nicht hinreichend für Konvergenz. Man braucht ein echtes Konvergenz-/Divergenzkriterium.</p>
              <p><span className="hint-em">Harmonische Reihe</span>: Σ(k=1..∞) 1/k ist das Standardbeispiel einer Reihe mit aₖ → 0, die trotzdem <em>divergiert</em>. Das muss man als bekannte Tatsache parat haben.</p>
              <p><span className="hint-em">Minorantenkriterium</span> (Vergleich nach unten): Findet man eine „kleinere" Reihe Σbₖ mit 0 ≤ bₖ ≤ aₖ für alle (großen) k, und <em>divergiert</em> diese Minorante Σbₖ, dann divergiert auch die größere Reihe Σaₖ. Logik: Ist die kleinere Summe schon unendlich, muss die größere erst recht unendlich sein.</p>
              <p>Schlüssel-Ungleichung hier: Für k ≥ 1 gilt √k ≤ k (die Wurzel ist kleiner-gleich der Zahl selbst). Kehrt man eine Ungleichung positiver Zahlen um (Kehrwert), dreht sich das Zeichen: aus √k ≤ k folgt 1/√k ≥ 1/k.</p>
            </>,
            <>
              <p>So zeigt man die Divergenz von Σ(k=1..∞) 1/√k:</p>
              <pre className="hint-code-block">{`1) Vergleichsreihe (Minorante) wählen: bₖ = 1/k,
   denn Σ 1/k ist die harmonische Reihe → DIVERGIERT.

2) Ungleichung bₖ ≤ aₖ begründen, d.h. 1/k ≤ 1/√k:
   Für k ≥ 1 gilt √k ≤ k   (z.B. √4=2 ≤ 4, √9=3 ≤ 9).
   Kehrwert bilden (dreht ≤ in ≥, da alles positiv):
   1/√k ≥ 1/k     ✓ also bₖ = 1/k ≤ 1/√k = aₖ.

3) Minorantenkriterium anwenden:
   Σ bₖ = Σ 1/k divergiert  UND  bₖ ≤ aₖ
   ⟹ Σ aₖ = Σ 1/√k divergiert ebenfalls.`}</pre>
              <p>Hintergrund (p-Reihe): Σ 1/kᵖ konvergiert genau für p &gt; 1 und divergiert für p ≤ 1. Hier ist 1/√k = 1/k^(1/2), also p = 1/2 ≤ 1 → divergiert. Das ist die schnelle Merkregel; das Minorantenkriterium liefert den sauberen Beweis.</p>
            </>,
            <>
              <p>Anderes Beispiel mit Minorante: Σ(k=2..∞) 1/ln(k)</p>
              <pre className="hint-code-block">{`Für k ≥ 2 gilt ln(k) ≤ k → 1/ln(k) ≥ 1/k
Σ 1/k divergiert (harmonisch) und ist Minorante
→ Σ 1/ln(k) divergiert nach Minorantenkriterium.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1/√k → 0, also konvergiert die Reihe → <strong>✅ Richtig:</strong> aₖ → 0 ist nur notwendig; hier zeigen 1/√k ≥ 1/k + Minorantenkriterium die Divergenz.</li>
              <li><strong>❌ Falsch:</strong> Beim Kehrwert das Ungleichungszeichen stehen lassen: √k ≤ k ⟹ 1/√k ≤ 1/k → <strong>✅ Richtig:</strong> Der Kehrwert positiver Zahlen dreht das Zeichen um: 1/√k ≥ 1/k.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe k=4: 1/√4 = 1/2 und 1/4; ist 1/2 ≥ 1/4? Ja. Frage: Warum darf man aus „die kleinere Reihe ist unendlich" auf „die größere ist auch unendlich" schließen — und warum dreht sich beim Kehrwert das Ungleichungszeichen?</p>,
          ),
          solution: (
            <>
              <Frac n="1" d="√k" />{' ≥ '}<Frac n="1" d="k" />{' für alle k ≥ 1.\nDa Σ '}<Frac n="1" d="k" />{' divergiert, divergiert nach dem Minorantenkriterium auch Σ '}<Frac n="1" d="√k" />{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <M>{'\\sum_{k=1}^{\\infty} (-1)^{k+1} \\cdot \\frac{1}{\\sqrt{k}}'}</M>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">alternierende Reihe</span> ist eine Reihe, deren Glieder abwechselnd positiv und negativ sind. Erkennungszeichen ist ein Faktor (−1)ᵏ oder (−1)ᵏ⁺¹. Hier: (−1)ᵏ⁺¹·(1/√k) ergibt +1/√1, −1/√2, +1/√3, … (für k=1,2,3,…). Den Teil <em>ohne</em> Vorzeichen nennt man aₖ; hier aₖ = 1/√k (immer ≥ 0).</p>
              <p><span className="hint-em">Leibnizkriterium</span> (für alternierende Reihen): Σ (−1)ᵏ⁺¹ aₖ <em>konvergiert</em>, wenn ZWEI Bedingungen gelten:</p>
              <ul>
                <li><span className="hint-em">(1) Monoton fallend</span>: aₖ₊₁ ≤ aₖ für alle k, d.h. die Beträge der Glieder werden nie wieder größer.</li>
                <li><span className="hint-em">(2) Nullfolge</span>: aₖ → 0 für k → ∞.</li>
              </ul>
              <p>Beide Bedingungen müssen explizit gezeigt werden. Anschaulich: Die Partialsummen springen abwechselnd nach oben und unten, mit immer kleineren Sprüngen — sie pendeln sich auf einen Grenzwert ein.</p>
              <p>Begriff <span className="hint-em">monoton fallend</span>: Eine Folge fällt monoton, wenn jedes Glied ≤ dem vorigen ist. Bei aₖ = 1/√k: Wird k größer, wird √k größer, also 1/√k kleiner → fällt monoton.</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) (−1)ᵏ⁺¹·(1/√k):</p>
              <pre className="hint-code-block">{`1) aₖ (ohne Vorzeichen) ablesen: aₖ = 1/√k ≥ 0.
   Die (−1)ᵏ⁺¹ machen die Reihe alternierend.

2) Bedingung 1 — monoton fallend (aₖ₊₁ ≤ aₖ)?
   k+1 > k ⟹ √(k+1) > √k ⟹ 1/√(k+1) < 1/√k
   Also aₖ₊₁ < aₖ ✓  (jedes Glied kleiner als das vorige)

3) Bedingung 2 — Nullfolge (aₖ → 0)?
   √k → ∞ ⟹ 1/√k → 0 ✓

4) Beide Leibniz-Bedingungen erfüllt
   ⟹ die Reihe konvergiert.`}</pre>
              <p>Feinheit: Leibniz liefert nur <span className="hint-em">bedingte</span> Konvergenz. Würde man die Beträge nehmen, stünde Σ 1/√k — und die divergiert (Teil (b)!). Die Reihe konvergiert also nur dank des Vorzeichenwechsels.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) (−1)ᵏ⁺¹·(1/k)  (alternierende harmonische Reihe)</p>
              <pre className="hint-code-block">{`aₖ = 1/k
(1) 1/(k+1) < 1/k → monoton fallend ✓
(2) 1/k → 0 → Nullfolge ✓
→ konvergiert nach Leibniz (Wert übrigens ln 2).
Ohne Vorzeichen wäre Σ 1/k divergent → nur bedingt.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur aₖ → 0 prüfen und Leibniz anwenden → <strong>✅ Richtig:</strong> Leibniz braucht BEIDE Bedingungen: aₖ monoton fallend UND aₖ → 0.</li>
              <li><strong>❌ Falsch:</strong> Aus „Σ 1/√k divergiert (b)" schließen, dass auch diese Reihe divergiert → <strong>✅ Richtig:</strong> Der Vorzeichenwechsel ändert alles; die alternierende Version konvergiert (bedingt).</li>
            </ul>,
            <p>Selbstkontrolle: Partialsummen 1; 1−0,707=0,293; +0,577=0,870; −0,5=0,370 … pendeln mit kleiner werdenden Sprüngen. Frage: Welche zwei Bedingungen verlangt Leibniz, und warum konvergiert diese Reihe, obwohl die Betragsreihe Σ 1/√k aus (b) divergiert?</p>,
          ),
          solution: (
            <>
              {'aₖ := '}<Frac n="1" d="√k" />{' ist monoton fallend und lim aₖ = 0.\nNach dem Leibnizkriterium konvergiert die Reihe.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <M>{'\\sum_{k=1}^{\\infty} \\left(\\frac{1}{\\sqrt{k}}\\right)^k'}</M>,
          hint: h(
            <>
              <p>Die <span className="hint-em">k-te Wurzel</span> ᵏ√x ist die Zahl, die k-mal mit sich selbst multipliziert x ergibt (z.B. ³√8 = 2, weil 2³ = 8). Wichtigste Rechenregel hier: <span className="hint-em">ᵏ√(xᵏ) = x</span> für x ≥ 0 — Wurzel und gleichhohe Potenz heben sich auf.</p>
              <p><span className="hint-em">Wurzelkriterium</span>: Bilde L = lim(k→∞) ᵏ√|aₖ|. Dann gilt:</p>
              <ul>
                <li>L &lt; 1 → die Reihe Σaₖ <span className="hint-em">konvergiert</span> (sogar absolut),</li>
                <li>L &gt; 1 → die Reihe divergiert,</li>
                <li>L = 1 → keine Aussage (anderes Kriterium nötig).</li>
              </ul>
              <p>Das Wurzelkriterium ist <em>ideal</em>, wenn aₖ selbst eine <em>k-te Potenz</em> ist (Form (etwas)ᵏ), weil die k-te Wurzel den Exponenten k genau wegfrisst. Hier ist aₖ = (1/√k)ᵏ — ein Paradefall.</p>
              <p>Hilfsgrenzwert: 1/√k → 0 für k → ∞, weil √k unbeschränkt wächst.</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) (1/√k)ᵏ:</p>
              <pre className="hint-code-block">{`1) aₖ erkennen: aₖ = (1/√k)ᵏ ist eine k-te Potenz
   → Wurzelkriterium ist die natürliche Wahl.

2) ᵏ√|aₖ| bilden und mit ᵏ√(xᵏ) = x vereinfachen
   (x = 1/√k ≥ 0):
   ᵏ√( (1/√k)ᵏ ) = 1/√k
   (die k-te Wurzel hebt die k-te Potenz exakt auf)

3) Grenzwert L bestimmen:
   L = lim(k→∞) 1/√k = 0
   (√k → ∞, also 1/√k → 0)

4) Mit 1 vergleichen:
   L = 0 < 1  ⟹  die Reihe konvergiert.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) (k/(2k+1))ᵏ</p>
              <pre className="hint-code-block">{`aₖ = (k/(2k+1))ᵏ  → k-te Potenz
ᵏ√|aₖ| = k/(2k+1)
Grenzwert: durch k kürzen → 1/(2+1/k) → 1/2
L = 1/2 < 1 → konvergiert.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√((1/√k)ᵏ) = 1/k → <strong>✅ Richtig:</strong> ᵏ√(xᵏ) = x, nicht x²; daher ᵏ√((1/√k)ᵏ) = 1/√k (Exponent k wird voll aufgehoben).</li>
              <li><strong>❌ Falsch:</strong> L = 0 als „kein Ergebnis" deuten → <strong>✅ Richtig:</strong> L = 0 &lt; 1 ist der bestmögliche Fall: klare Konvergenz.</li>
            </ul>,
            <p>Selbstkontrolle: Schon a₂ = (1/√2)² = 1/2, a₃ = (1/√3)³ ≈ 0,19, a₄ = (1/√4)⁴ = 1/16 — die Glieder fallen rasant. Frage: Warum hebt die k-te Wurzel den Exponenten k vollständig auf, und welcher Wert von L garantiert hier Konvergenz?</p>,
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
      referenz: ['reihen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <M>{'\\sum_{k=2}^{\\infty} \\frac{k}{3^k}'}</M>,
          hint: h(
            <>
              <p>Hier ist aₖ = k/3ᵏ: ein Polynomteil (k) geteilt durch einen Exponentialteil (3ᵏ). Solche Reihen prüft man mit dem <span className="hint-em">Wurzel-</span> oder dem <span className="hint-em">Quotientenkriterium</span> — beide funktionieren, das Ergebnis ist dasselbe.</p>
              <p><span className="hint-em">Quotientenkriterium</span>: Bilde L = lim |aₖ₊₁/aₖ| (Verhältnis aufeinanderfolgender Glieder). L &lt; 1 → konvergiert, L &gt; 1 → divergiert, L = 1 → keine Aussage. Gut bei Brüchen mit Potenzen/Fakultäten, weil sich vieles wegkürzt.</p>
              <p><span className="hint-em">Wurzelkriterium</span>: Bilde L = lim ᵏ√|aₖ|; gleiche Schwellen wie oben.</p>
              <p>Zwei <span className="hint-em">Standardgrenzwerte</span>, die man kennen muss: <span className="hint-em">lim(k→∞) ᵏ√k = 1</span> (die k-te Wurzel von k geht gegen 1, nicht gegen ∞!) und lim ᵏ√a = 1 für jede feste Zahl a &gt; 0. Grund: Die k-te Wurzel „drückt" jedes polynomiale/konstante Wachstum auf 1.</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=2..∞) k/3ᵏ — beide Wege:</p>
              <pre className="hint-code-block">{`WURZELKRITERIUM:
ᵏ√|aₖ| = ᵏ√(k/3ᵏ) = ᵏ√k / ᵏ√(3ᵏ) = ᵏ√k / 3
Grenzwert: ᵏ√k → 1 (Standardgrenzwert!), also
L = 1/3 < 1  ⟹ konvergiert.

QUOTIENTENKRITERIUM:
aₖ₊₁/aₖ = [(k+1)/3^(k+1)] · [3ᵏ/k]
        = (k+1)/k · 3ᵏ/3^(k+1)
        = (k+1)/k · 1/3        (3ᵏ/3^(k+1) = 1/3)
Grenzwert: (k+1)/k → 1, also
L = 1·(1/3) = 1/3 < 1  ⟹ konvergiert.`}</pre>
              <p>Warum 3ᵏ/3^(k+1) = 1/3? Gleiche Basis dividieren = Exponenten subtrahieren: 3^(k−(k+1)) = 3^(−1) = 1/3.</p>
            </>,
            <>
              <p>Anderes Beispiel: Σ k²/2ᵏ</p>
              <pre className="hint-code-block">{`Quotient: aₖ₊₁/aₖ = ((k+1)/k)² · (1/2) → 1·(1/2) = 1/2
L = 1/2 < 1 → konvergiert.
(Merke: jede Potenz kⁿ über cᵏ mit c>1 konvergiert,
 weil Exponential schneller wächst als Polynom.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim ᵏ√k = ∞ → ᵏ√|aₖ| = ∞/3 → <strong>✅ Richtig:</strong> lim ᵏ√k = 1 (Standardgrenzwert!), also ᵏ√k/3 → 1/3 &lt; 1.</li>
              <li><strong>❌ Falsch:</strong> 3ᵏ/3^(k+1) = 3 → <strong>✅ Richtig:</strong> Exponenten subtrahieren: 3^(k−k−1) = 3⁻¹ = 1/3.</li>
            </ul>,
            <p>Selbstkontrolle: Glieder 2/9 ≈ 0,22; 3/27 ≈ 0,11; 4/81 ≈ 0,05 — fallen wie ≈ 1/3 pro Schritt. Frage: Warum geht ᵏ√k gegen 1 und nicht gegen ∞, und warum liefern Wurzel- und Quotientenkriterium hier denselben Wert 1/3?</p>,
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
          text: <M>{'\\sum_{k=2}^{\\infty} (-1)^k \\cdot \\left(1 - \\frac{1}{k}\\right)'}</M>,
          hint: h(
            <>
              <p>Die Glieder enthalten (−1)ᵏ → die Reihe sieht <span className="hint-em">alternierend</span> aus, also denkt man zuerst an Leibniz. ABER: Bevor man irgendein Kriterium ansetzt, prüft man immer zuerst das einfachste — das <span className="hint-em">Nullfolgenkriterium</span> (notwendige Bedingung): Wenn Σaₖ konvergiert, muss aₖ → 0. Geht aₖ nicht gegen 0, divergiert die Reihe sofort.</p>
              <p>Bei alternierenden Reihen schaut man auf den Betrag der Glieder, also auf den Teil ohne (−1)ᵏ. Hier ist das |aₖ| = 1 − 1/k (für k ≥ 2 positiv).</p>
              <p><span className="hint-em">Grenzwert von 1 − 1/k</span>: Wird k groß, geht 1/k → 0, also 1 − 1/k → 1 − 0 = 1. Die Glieder schrumpfen also NICHT auf 0, sondern nähern sich (im Betrag) der 1.</p>
              <p>Folge: Das <span className="hint-em">Leibnizkriterium ist nicht anwendbar</span>, denn Leibniz verlangt aₖ → 0 — das ist verletzt. Und weil das Nullfolgenkriterium verletzt ist, divergiert die Reihe direkt.</p>
            </>,
            <>
              <p>So zeigt man die Divergenz von Σ(k=2..∞) (−1)ᵏ·(1 − 1/k):</p>
              <pre className="hint-code-block">{`1) Betrag der Glieder (ohne Vorzeichen):
   |aₖ| = |(−1)ᵏ·(1 − 1/k)| = 1 − 1/k   (k ≥ 2 → positiv)

2) Grenzwert für k → ∞:
   1/k → 0  ⟹  1 − 1/k → 1 − 0 = 1

3) Nullfolgenkriterium prüfen:
   |aₖ| → 1 ≠ 0  → die Glieder gehen NICHT gegen 0.
   (Die einzelnen Summanden pendeln betragsmäßig
    gegen ±1, werden nie vernachlässigbar.)

4) Schluss:
   aₖ ↛ 0  ⟹  Σ divergiert.
   Leibniz ist NICHT anwendbar (verlangt aₖ → 0).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Σ(k=1..∞) (−1)ᵏ·(k/(k+1))</p>
              <pre className="hint-code-block">{`|aₖ| = k/(k+1) → 1 ≠ 0  (Zähler ≈ Nenner)
Nullfolgenkriterium verletzt → divergiert.
Leibniz greift nicht, obwohl Vorzeichen wechseln.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Vorzeichen wechseln → Leibniz → konvergiert → <strong>✅ Richtig:</strong> Leibniz erfordert aₖ → 0; hier 1 − 1/k → 1 ≠ 0 → Leibniz unzulässig, Reihe divergiert.</li>
              <li><strong>❌ Falsch:</strong> 1 − 1/k → 0 (1/k mit 1 verwechselt) → <strong>✅ Richtig:</strong> 1/k → 0, also 1 − 1/k → 1.</li>
            </ul>,
            <p>Selbstkontrolle: Glieder (k=2..) +0,5; −0,667; +0,75; −0,8 … wachsen betragsmäßig gegen 1, schrumpfen nicht. Frage: Warum scheitert hier das Leibnizkriterium trotz wechselnder Vorzeichen, und welcher Grenzwert von 1 − 1/k entscheidet das?</p>,
          ),
          solution: (
            <>
              {'|aₖ| = |1 − '}<Frac n="1" d="k" />{'| → 1 ≠ 0 (keine Nullfolge)\n→ Reihe divergiert.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <M>{'\\sum_{k=1}^{\\infty} \\frac{2^{k+2}}{k^2 \\cdot 5^k}'}</M>,
          hint: h(
            <>
              <p>Das Glied aₖ = 2^(k+2)/(k²·5ᵏ) mischt Exponentialterme (2^(k+2), 5ᵏ) mit einem Polynomterm (k²). Wieder eignen sich <span className="hint-em">Wurzel-</span> und <span className="hint-em">Quotientenkriterium</span>; das entscheidende Verhältnis der Exponentialbasen ist 2/5.</p>
              <p><span className="hint-em">Potenzgesetz</span> zum Aufspalten: a^(m+n) = aᵐ·aⁿ. Damit wird 2^(k+2) = 2ᵏ·2² = 4·2ᵏ. Der feste Faktor 4 stört am Ende nicht.</p>
              <p><span className="hint-em">Standardgrenzwerte</span> fürs Wurzelkriterium: ᵏ√(k²) = k^(2/k) → 1 und ᵏ√(konstante) → 1 (jede feste positive Zahl unter der k-ten Wurzel geht gegen 1). Diese Faktoren werden also „neutralisiert" und nur das Verhältnis der Exponentialbasen bleibt übrig.</p>
              <p>Quotientengesetz: aᵏ⁺¹/aᵏ = a (gleiche Basis, Exponenten subtrahieren), z.B. 2^(k+1)/2ᵏ = 2 und 5^(k+1)/5ᵏ = 5.</p>
            </>,
            <>
              <p>So zeigt man Konvergenz von Σ(k=1..∞) 2^(k+2)/(k²·5ᵏ) — beide Wege:</p>
              <pre className="hint-code-block">{`Erst umschreiben: 2^(k+2) = 4·2ᵏ, also
aₖ = 4·2ᵏ / (k²·5ᵏ) = 4/k² · (2/5)ᵏ

WURZELKRITERIUM:
ᵏ√|aₖ| = ᵏ√4 / ᵏ√(k²) · (2/5)
       = ᵏ√4 / k^(2/k) · (2/5)
Grenzwerte: ᵏ√4 → 1, k^(2/k) → 1, also
L = 1/1 · 2/5 = 2/5 < 1  ⟹ konvergiert.

QUOTIENTENKRITERIUM:
aₖ₊₁/aₖ = [2^(k+3)/((k+1)²5^(k+1))] · [k²5ᵏ/2^(k+2)]
        = (2^(k+3)/2^(k+2)) · (5ᵏ/5^(k+1)) · (k/(k+1))²
        = 2 · (1/5) · (k/(k+1))²
        = (2/5)·(k/(k+1))²
Grenzwert: (k/(k+1))² → 1, also
L = 2/5 < 1  ⟹ konvergiert.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Σ 3ᵏ/(k·4ᵏ) = Σ (1/k)(3/4)ᵏ</p>
              <pre className="hint-code-block">{`ᵏ√|aₖ| = (3/4) / ᵏ√k → (3/4)/1 = 3/4 < 1
→ konvergiert (Verhältnis der Basen 3/4 < 1).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ᵏ√(k²) = k² → ᵏ√|aₖ| = 4k²/5 → ∞ → <strong>✅ Richtig:</strong> ᵏ√(k²) = k^(2/k) → 1; ebenso ᵏ√4 → 1; übrig bleibt 2/5 &lt; 1.</li>
              <li><strong>❌ Falsch:</strong> 2^(k+2) = 2·2ᵏ → <strong>✅ Richtig:</strong> 2^(k+2) = 2²·2ᵏ = 4·2ᵏ (der Exponent +2 gibt 2² = 4).</li>
            </ul>,
            <p>Selbstkontrolle: Das Verhältnis der Basen 2/5 = 0,4 &lt; 1 entscheidet — Exponential 5ᵏ im Nenner schlägt 2ᵏ im Zähler. Frage: Warum verschwinden die Faktoren ᵏ√4 und k^(2/k) im Grenzwert, sodass nur 2/5 übrig bleibt?</p>,
          ),
          solution: (
            <>
              {'Wurzelkrit.: ᵏ√|aₖ| = '}<Frac n="2" d="5" />{' · '}<Frac n="ᵏ√4" d="k^(2/k)" />{' → '}<Frac n="2" d="5" />{' < 1 → konvergiert\n\n'}
              {'Quotientenkrit.: '}<Frac n="aₖ₊₁" d="aₖ" />{' = '}<Frac n="2" d="5" />{' · ('}<Frac n="k" d="k+1" />{')² → '}<Frac n="2" d="5" />{' < 1 → konvergiert'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <M>{'\\sum_{k=1}^{\\infty} \\left(\\frac{1}{\\sqrt{k+1}} - \\frac{1}{\\sqrt{k}}\\right)'}</M>,
          hint: h(
            <>
              <p>Die <span className="hint-em">Partialsumme</span> xₙ ist die abgebrochene Summe der ersten n Glieder: xₙ = Σ(k=1..n) aₖ. Der Reihenwert ist lim(n→∞) xₙ — falls dieser existiert.</p>
              <p>Eine <span className="hint-em">Teleskopsumme</span> liegt vor, wenn jedes Glied die Differenz zweier „benachbarter" Ausdrücke ist, aₖ = b(k+1) − b(k) (oder umgekehrt). Beim Aufsummieren hebt das Ende eines Gliedes den Anfang des nächsten auf — wie ein zusammenschiebbares Fernrohr (daher der Name). Übrig bleiben nur der allererste und der allerletzte Term.</p>
              <p>Allgemein: Σ(k=1..n) (b(k+1) − b(k)) = b(n+1) − b(1). Hier ist aₖ = 1/√(k+1) − 1/√k, also b(k) = 1/√k, und das Glied hat die Form b(k+1) − b(k).</p>
              <p>Hilfsgrenzwert: 1/√(n+1) → 0 für n → ∞ (Nenner wächst unbeschränkt).</p>
            </>,
            <>
              <p>So berechnet man Σ(k=1..∞) (1/√(k+1) − 1/√k):</p>
              <pre className="hint-code-block">{`1) Partialsumme ausschreiben (n Glieder):
   xₙ = (1/√2 − 1/√1)
      + (1/√3 − 1/√2)
      + (1/√4 − 1/√3)
      + … + (1/√(n+1) − 1/√n)

2) Teleskop-Aufhebung: −1/√2 (im 1. Glied) und
   +1/√2 (im 2. Glied) heben sich auf; ebenso 1/√3,
   1/√4, …  Alle inneren Terme verschwinden.

3) Übrig bleiben nur erster und letzter Term:
   xₙ = 1/√(n+1) − 1/√1 = 1/√(n+1) − 1

4) Grenzwert n → ∞:
   1/√(n+1) → 0, also
   lim xₙ = 0 − 1 = −1

→ Σ(k=1..∞) (1/√(k+1) − 1/√k) = −1`}</pre>
            </>,
            <>
              <p>Anderes klassisches Beispiel: Σ(k=1..∞) (1/k − 1/(k+1))</p>
              <pre className="hint-code-block">{`xₙ = (1 − 1/2)+(1/2 − 1/3)+…+(1/n − 1/(n+1))
   = 1 − 1/(n+1)        (innere Terme heben sich)
lim xₙ = 1 − 0 = 1`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Wurzel- oder Quotientenkriterium ansetzen → <strong>✅ Richtig:</strong> Bei Teleskopform ist die Partialsumme direkt berechenbar: xₙ = 1/√(n+1) − 1 → −1 (liefert sogar den Wert, nicht nur „konvergiert").</li>
              <li><strong>❌ Falsch:</strong> xₙ = 1/√(n+1) (den −1-Term vergessen) → <strong>✅ Richtig:</strong> der erste Term −1/√1 = −1 bleibt stehen: xₙ = 1/√(n+1) − 1.</li>
            </ul>,
            <p>Selbstkontrolle: x₃ = 1/√4 − 1 = 0,5 − 1 = −0,5; direkt nachsummiert: (1/√2−1)+(1/√3−1/√2)+(1/√4−1/√3) = 1/√4 − 1 = −0,5 ✓. Frage: Welche Form müssen die Glieder haben, damit eine Teleskopsumme entsteht, und welche zwei Terme bleiben am Ende übrig?</p>,
          ),
          solution: (
            <>
              {'xₙ = '}<Frac n="1" d="√(n+1)" />{' − 1  (Teleskopsumme)\n'}
              {'lim xₙ = 0 − 1 = −1\n'}
              {'→ '}<M>{'\\sum_{k=1}^{\\infty} \\left(\\frac{1}{\\sqrt{k+1}} - \\frac{1}{\\sqrt{k}}\\right)'}</M>{' = −1'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b9a4',
      nr: 4,
      title: 'Rekursive Folge: x₀=1, xₙ₊₁=√(2+xₙ)',
      referenz: ['rekursive-folgen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Betrachten Sie die rekursiv definierte Folge (xₙ)ₙ∈ℕ mit\n\nx₀ := 1 und xₙ₊₁ := √(2 + xₙ), n ∈ ℕ.\n\nZeigen Sie durch vollständige Induktion, dass für alle n ∈ ℕ die Ungleichung\n\nxₙ₊₁ ≥ xₙ\n\ngilt.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">rekursiv definierte Folge</span> gibt das erste Glied (x₀ = 1) und eine Vorschrift an, wie man aus xₙ das nächste Glied xₙ₊₁ berechnet (hier xₙ₊₁ = √(2+xₙ)). So entsteht 1, √3, √(2+√3), …</p>
              <p><span className="hint-em">Monoton wachsend</span> heißt: jedes Glied ist ≥ dem vorigen, also xₙ₊₁ ≥ xₙ für alle n. Genau das sollen wir beweisen.</p>
              <p><span className="hint-em">Vollständige Induktion</span> ist die Standardmethode für Aussagen „für alle n ∈ ℕ". Zwei Teile:</p>
              <ul>
                <li><span className="hint-em">Induktionsanfang (IA)</span>: Aussage für den kleinsten Fall (n=0) direkt nachrechnen.</li>
                <li><span className="hint-em">Induktionsschritt (IS)</span>: Annehmen, die Aussage gilt für n (das ist die <span className="hint-em">Induktionsvoraussetzung, IV</span>), und daraus folgern, dass sie auch für n+1 gilt. Dann gilt sie wie bei Dominosteinen für alle n.</li>
              </ul>
              <p><span className="hint-em">Monotonie der Wurzel</span> (Schlüsselwerkzeug): Aus a ≤ b folgt √a ≤ √b (für a,b ≥ 0). Die Wurzelfunktion erhält die Reihenfolge: größerer Radikand → größere Wurzel.</p>
            </>,
            <>
              <p>So beweist man xₙ₊₁ ≥ xₙ für alle n per Induktion:</p>
              <pre className="hint-code-block">{`Behauptung A(n):  xₙ₊₁ ≥ xₙ

INDUKTIONSANFANG (n = 0):
  x₀ = 1
  x₁ = √(2 + x₀) = √(2 + 1) = √3 ≈ 1,73
  √3 ≥ 1, also x₁ ≥ x₀  ✓

INDUKTIONSSCHRITT (n → n+1):
  IV (annehmen): xₙ₊₁ ≥ xₙ.
  Zu zeigen: xₙ₊₂ ≥ xₙ₊₁.

  xₙ₊₂ = √(2 + xₙ₊₁)        (Rekursion für n+1)
  Wegen IV: xₙ₊₁ ≥ xₙ
  ⟹ 2 + xₙ₊₁ ≥ 2 + xₙ      (auf beiden Seiten +2)
  ⟹ √(2+xₙ₊₁) ≥ √(2+xₙ)    (√ ist monoton wachsend)
  Die rechte Seite ist √(2+xₙ) = xₙ₊₁.
  ⟹ xₙ₊₂ ≥ xₙ₊₁            ✓

Damit gilt A(n) für alle n ∈ ℕ.  □`}</pre>
            </>,
            <>
              <p>Anderes Beispiel (Induktion mit Monotonie): yₙ₊₁ = √(6+yₙ), y₀ = 0</p>
              <pre className="hint-code-block">{`IA: y₁ = √6 ≥ 0 = y₀ ✓
IS: yₙ₊₁ ≥ yₙ (IV) ⟹ 6+yₙ₊₁ ≥ 6+yₙ
    ⟹ √(6+yₙ₊₁) ≥ √(6+yₙ), also yₙ₊₂ ≥ yₙ₊₁ ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Im IS √(2+xₙ₊₁) ≥ √(2+xₙ) ohne Begründung behaupten → <strong>✅ Richtig:</strong> Zwei Schritte nennen: (1) IV liefert xₙ₊₁ ≥ xₙ, (2) √ monoton überträgt das auf die Wurzeln.</li>
              <li><strong>❌ Falsch:</strong> Die IV gar nicht benutzen → <strong>✅ Richtig:</strong> Ein Induktionsschritt OHNE Verwendung der IV ist kein gültiger Beweis; die IV ist der Hebel.</li>
            </ul>,
            <p>Selbstkontrolle: x₀=1, x₁=√3≈1,73, x₂=√(2+√3)≈1,93 — tatsächlich steigend. Frage: Wozu dient die Induktionsvoraussetzung im Schritt, und an welcher Stelle der Rechnung geht die Monotonie der Wurzel ein?</p>,
          ),
          solution: 'IA (n=0): x₀=1, x₁=√3; somit x₁≥x₀ ✓\n\nIS (n→n+1): Sei xₙ ≤ xₙ₊₁ (IV). Dann:\nxₙ₊₂ = √(2+xₙ₊₁) ≥^(IV) √(2+xₙ) = xₙ₊₁  □',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie durch vollständige Induktion, dass für alle n ∈ ℕ\n\nxₙ ≤ 2\n\ngilt.',
          hint: h(
            <>
              <p>Eine Folge heißt <span className="hint-em">nach oben beschränkt</span>, wenn es eine feste Zahl S (eine <span className="hint-em">obere Schranke</span>) gibt, die kein Glied übersteigt: xₙ ≤ S für alle n. Hier ist S = 2; zu zeigen ist xₙ ≤ 2 für alle n ∈ ℕ.</p>
              <p>Methode wieder <span className="hint-em">vollständige Induktion</span> (IA für n=0; IS: aus „gilt für n" folgt „gilt für n+1"). Werkzeug ist erneut die <span className="hint-em">Monotonie der Wurzel</span> (a ≤ b ⟹ √a ≤ √b) und der Wert <span className="hint-em">√4 = 2</span>.</p>
              <p>Idee des Schritts: Eine Ungleichung (Abschätzung „nach oben") schiebt man durch die Rekursion. Wenn xₙ ≤ 2, dann ist der Radikand 2 + xₙ höchstens 2 + 2 = 4, und die Wurzel davon höchstens √4 = 2. So „vererbt" sich die Schranke 2 von xₙ auf xₙ₊₁.</p>
              <p>Warum gerade 2? Weil 2 der spätere Grenzwert der Folge ist (Teil (c)); eine Schranke unterhalb von 2 könnte man nicht beweisen.</p>
            </>,
            <>
              <p>So beweist man xₙ ≤ 2 für alle n per Induktion:</p>
              <pre className="hint-code-block">{`Behauptung B(n):  xₙ ≤ 2

INDUKTIONSANFANG (n = 0):
  x₀ = 1 ≤ 2  ✓

INDUKTIONSSCHRITT (n → n+1):
  IV (annehmen): xₙ ≤ 2.
  Zu zeigen: xₙ₊₁ ≤ 2.

  xₙ₊₁ = √(2 + xₙ)              (Rekursion)
  Wegen IV: xₙ ≤ 2
  ⟹ 2 + xₙ ≤ 2 + 2 = 4         (auf beiden Seiten +2)
  ⟹ √(2 + xₙ) ≤ √4             (√ monoton wachsend)
  ⟹ xₙ₊₁ ≤ √4 = 2             (√4 = 2, nicht 4!)

Damit gilt B(n) für alle n ∈ ℕ.  □`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: yₙ₊₁ = √(6+yₙ), y₀ = 0, Schranke 3</p>
              <pre className="hint-code-block">{`IA: y₀ = 0 ≤ 3 ✓
IS: yₙ ≤ 3 (IV) ⟹ 6+yₙ ≤ 6+3 = 9
    ⟹ √(6+yₙ) ≤ √9 = 3, also yₙ₊₁ ≤ 3 ✓
(Schranke 3, weil 3 = √(6+3) der Fixpunkt ist.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> √4 = 4 → <strong>✅ Richtig:</strong> √4 = 2 (denn 2² = 4); der ganze Beweis steht und fällt mit diesem Wert.</li>
              <li><strong>❌ Falsch:</strong> Die IV (xₙ ≤ 2) nicht einsetzen → <strong>✅ Richtig:</strong> Erst mit der IV darf man 2 + xₙ ≤ 4 abschätzen; ohne sie geht der Schritt nicht.</li>
            </ul>,
            <p>Selbstkontrolle: x₀=1, x₁≈1,73, x₂≈1,93, x₃≈1,98 — alle Glieder bleiben unter 2 und nähern sich an. Frage: Warum erlaubt die IV den Schritt 2 + xₙ ≤ 4, und welche Eigenschaft der Wurzel überträgt diese Schranke auf xₙ₊₁?</p>,
          ),
          solution: 'IA (n=0): x₀=1 ≤ 2 ✓\n\nIS (n→n+1): Sei xₙ ≤ 2 (IV). Dann:\nxₙ₊₁ = √(2+xₙ) ≤^(IV) √(2+2) = √4 = 2  □',
        },
        {
          letter: 'c',
          text: 'Schließen Sie nun auf die Konvergenz der Folge (xₙ)ₙ∈ℕ und bestimmen Sie ihren Grenzwert.\n\nHinweis: Sie dürfen ohne Beweis verwenden, dass für eine konvergente Folge (yₙ) mit limₙ→∞ yₙ = y auch limₙ→∞ √yₙ = √y gilt. Ebenso können Sie die Monotonie der Wurzelfunktion verwenden, d. h., für a, b ∈ [0, ∞) mit a ≤ b gilt auch √a ≤ √b.',
          hint: h(
            <>
              <p><span className="hint-em">Monotoniekriterium (Satz über monotone beschränkte Folgen)</span>: Eine Folge, die monoton wachsend UND nach oben beschränkt ist, konvergiert (besitzt einen Grenzwert). Anschaulich: Sie steigt, kann aber die Schranke nie überschreiten, also „läuft sie gegen eine Decke". Genau diese beiden Eigenschaften haben wir in (a) [wachsend] und (b) [≤ 2] bewiesen — also konvergiert (xₙ).</p>
              <p><span className="hint-em">Grenzwert per Fixpunktgleichung</span>: Sei x = lim xₙ. Verschiebt man den Index um 1, ändert sich der Grenzwert nicht: lim xₙ₊₁ = x ebenfalls. Setzt man das in die Rekursion xₙ₊₁ = √(2+xₙ) ein und nutzt lim √(2+xₙ) = √(2+x) (Wurzel ist stetig, laut Hinweis erlaubt), entsteht die Gleichung x = √(2+x), die man nach x auflöst.</p>
              <p><span className="hint-em">Quadratische Gleichung</span>: x = √(2+x) quadrieren ⟹ x² = 2 + x ⟹ x² − x − 2 = 0. Lösen mit p-q-Formel x = (1 ± √(1+8))/2 oder durch Faktorisieren (x−2)(x+1) = 0.</p>
              <p>Wichtig: Quadrieren kann <span className="hint-em">Scheinlösungen</span> erzeugen — am Ende prüfen, welche Lösung wirklich passt (zum Wertebereich der Folge).</p>
            </>,
            <>
              <p>So bestimmt man Konvergenz und Grenzwert:</p>
              <pre className="hint-code-block">{`1) Konvergenz begründen:
   (a) (xₙ) monoton wachsend, (b) durch 2 beschränkt
   ⟹ nach dem Monotoniekriterium konvergiert (xₙ).
   Es existiert also x = lim xₙ.

2) Fixpunktgleichung aufstellen:
   x = lim xₙ₊₁ = lim √(2+xₙ) = √(2 + x)

3) Auflösen (quadrieren):
   x = √(2+x)  | (·)²
   x² = 2 + x
   x² − x − 2 = 0

4) Lösungen (Faktorisieren oder p-q-Formel):
   (x − 2)(x + 1) = 0  →  x = 2  oder  x = −1
   p-q-Formel: x = (1 ± √(1+8))/2 = (1 ± 3)/2

5) Richtige Lösung auswählen:
   Aus (a),(b): xₙ ∈ [1, 2] für alle n
   ⟹ der Grenzwert liegt auch in [1, 2].
   x = −1 ∉ [1,2]  → verwerfen.
   Grenzwert = 2.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: yₙ₊₁ = √(6+yₙ), y₀=0 (monoton wachsend, ≤ 3)</p>
              <pre className="hint-code-block">{`y = √(6+y) → y² = 6+y → y²−y−6 = 0
(y−3)(y+2) = 0 → y = 3 oder y = −2
yₙ ∈ [0,3] → y = −2 verwerfen → Grenzwert = 3.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Beide Lösungen x=2 und x=−1 als Grenzwert angeben → <strong>✅ Richtig:</strong> Da xₙ ∈ [1,2] (aus a,b), muss der Grenzwert in [1,2] liegen; x=−1 ist eine Scheinlösung vom Quadrieren → verwerfen.</li>
              <li><strong>❌ Falsch:</strong> Konvergenz unbewiesen voraussetzen und sofort einsetzen → <strong>✅ Richtig:</strong> Erst Konvergenz mit dem Monotoniekriterium (a)+(b) sichern; nur dann existiert lim xₙ und das Einsetzen ist erlaubt.</li>
            </ul>,
            <p>Selbstkontrolle: Setze x=2 in die Fixpunktgleichung ein: √(2+2) = √4 = 2 = x ✓ (x=−1 ergäbe √1 = 1 ≠ −1). Frage: Warum darf man lim xₙ₊₁ durch lim xₙ ersetzen, und nach welchem Kriterium scheidet x = −1 als Grenzwert aus?</p>,
          ),
          solution: '(xₙ) monoton wachsend (a) und beschränkt durch 2 (b) → konvergiert.\n\nSei x = lim xₙ:\nx = √(2+x)  →  x²−x−2 = 0  →  (x−2)(x+1) = 0\nx=2 oder x=−1. Da xₙ ∈ [1,2]: Grenzwert = 2.',
        },
      ],
    },
    {
      id: 'b9a5',
      nr: 5,
      title: 'Polynomdivisionen (wenn noch Zeit ist)',
      referenz: ['polynomdivision'],
      subaufgaben: [
        {
          letter: 'a',
          text: '(−x³ + 4x² − x − 6) : (x − 2)',
          hint: h(
            <>
              <p>Ein <span className="hint-em">Polynom</span> ist eine Summe von Potenzen von x mit Zahlen davor, z.B. −x³ + 4x² − x − 6. Der <span className="hint-em">Grad</span> ist der höchste Exponent (hier 3), der <span className="hint-em">führende Term</span> der Term mit diesem höchsten Exponenten (hier −x³). Der zu teilende Ausdruck heißt <span className="hint-em">Dividend</span>, der Teiler <span className="hint-em">Divisor</span> (hier x − 2).</p>
              <p><span className="hint-em">Polynomdivision</span> funktioniert wie schriftliches Teilen mit Zahlen, nur mit x-Potenzen. Wiederhole:</p>
              <ul>
                <li><span className="hint-em">(1) Teilen</span>: führenden Term des (aktuellen) Dividenden durch führenden Term des Divisors → ein Term des Ergebnisses.</li>
                <li><span className="hint-em">(2) Multiplizieren</span>: diesen Term mit dem GANZEN Divisor.</li>
                <li><span className="hint-em">(3) Subtrahieren</span>: das Produkt vom Dividenden abziehen → neues, kleineres Restpolynom.</li>
              </ul>
              <p>Wiederholen, bis der Grad des Rests &lt; Grad des Divisors ist. Schlüsselregel beim Teilen der Potenzen: xᵐ/xⁿ = xᵐ⁻ⁿ (Exponenten subtrahieren). Heikelste Stelle ist das Subtrahieren: −(Klammer) dreht JEDES Vorzeichen um.</p>
            </>,
            <>
              <p>So rechnet man (−x³ + 4x² − x − 6) : (x − 2):</p>
              <pre className="hint-code-block">{`Schritt 1: führende Terme teilen: −x³ / x = −x²
  −x² · (x−2) = −x³ + 2x²
  Subtrahieren: (−x³+4x²) − (−x³+2x²)
              = −x³+4x² + x³−2x² = 2x²
  Rest herunterziehen: 2x² − x − 6

Schritt 2: 2x² / x = +2x
  2x · (x−2) = 2x² − 4x
  Subtrahieren: (2x²−x) − (2x²−4x)
              = 2x²−x −2x²+4x = 3x
  Rest: 3x − 6

Schritt 3: 3x / x = +3
  3 · (x−2) = 3x − 6
  Subtrahieren: (3x−6) − (3x−6) = 0   → Rest 0

Ergebnis: −x² + 2x + 3   (Rest 0).`}</pre>
              <p>Achte in jedem Schritt auf das Minus vor der Klammer: z.B. (−x³+4x²) − (−x³+2x²) = +x³ − 2x² zum Rest addiert.</p>
            </>,
            <>
              <p>Anderes Beispiel: (x² + x − 6) : (x − 2)</p>
              <pre className="hint-code-block">{`x²/x = x;  x·(x−2)=x²−2x;  (x²+x)−(x²−2x)=3x
3x/x = 3;  3·(x−2)=3x−6;   (3x−6)−(3x−6)=0
Ergebnis: x + 3  (Rest 0).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Vorzeichen beim Subtrahieren vergessen, z.B. −x³+4x² − (−x³+2x²) = 6x² → <strong>✅ Richtig:</strong> −(−x³+2x²) = +x³−2x², also Ergebnis 2x² (jedes Vorzeichen drehen).</li>
              <li><strong>❌ Falsch:</strong> Nur −x² mit x statt mit ganzem (x−2) multiplizieren → <strong>✅ Richtig:</strong> Immer mit dem GANZEN Divisor multiplizieren: −x²·(x−2) = −x³+2x².</li>
            </ul>,
            <p>Selbstkontrolle (Probe durch Rückmultiplikation): (x−2)·(−x²+2x+3) = −x³+2x²+3x +2x²−4x−6 = −x³+4x²−x−6 ✓. Frage: Warum muss der Grad des Rests am Ende kleiner als der des Divisors sein, und warum dreht das Subtrahieren alle Vorzeichen des Zwischenterms?</p>,
          ),
          solution: '(−x³+4x²−x−6) : (x−2) = −x²+2x+3\n\nProbe: (x−2)·(−x²+2x+3) = −x³+4x²−x−6 ✓',
        },
        {
          letter: 'b',
          text: '(3x³ + 10x² − 7x + 4) : (3x² − 2x + 1)',
          hint: h(
            <>
              <p>Gleiche <span className="hint-em">Polynomdivision</span> wie in (a), aber der <span className="hint-em">Divisor</span> hat jetzt Grad 2 (3x² − 2x + 1). <span className="hint-em">Grad-Regel</span>: Grad(Ergebnis) = Grad(Dividend) − Grad(Divisor) = 3 − 2 = 1; das Ergebnis ist also ein Polynom 1. Grades (Form ax + b).</p>
              <p>Ablauf unverändert: (1) führenden Term des Dividenden durch führenden Term des Divisors teilen, (2) den so erhaltenen Term mit dem GANZEN Divisor (allen drei Gliedern!) multiplizieren, (3) subtrahieren. Wiederholen, bis Grad(Rest) &lt; Grad(Divisor) = 2.</p>
              <p>Teilen der Potenzen mit Koeffizienten: (3x³)/(3x²) = (3/3)·x³⁻² = x. Heikel: Beim Multiplizieren mit dem Divisor entstehen drei Terme, die alle korrekt subtrahiert werden müssen (Minus vor der Klammer dreht jedes Vorzeichen).</p>
            </>,
            <>
              <p>So rechnet man (3x³ + 10x² − 7x + 4) : (3x² − 2x + 1):</p>
              <pre className="hint-code-block">{`Schritt 1: 3x³ / 3x² = x
  x · (3x²−2x+1) = 3x³ − 2x² + x
  Subtrahieren (alle Terme!):
  (3x³+10x²−7x) − (3x³−2x²+x)
   = 3x³+10x²−7x −3x³+2x²−x
   = 12x² − 8x
  Rest mit +4: 12x² − 8x + 4

Schritt 2: 12x² / 3x² = 4
  4 · (3x²−2x+1) = 12x² − 8x + 4
  Subtrahieren:
  (12x²−8x+4) − (12x²−8x+4) = 0   → Rest 0

Ergebnis: x + 4   (Rest 0).`}</pre>
              <p>Beachte in Schritt 1: 10x² − (−2x²) = 10x² + 2x² = 12x², und −7x − (+x) = −8x. Das −(...) dreht die Vorzeichen.</p>
            </>,
            <>
              <p>Anderes Beispiel: (2x³ + 3x² + 3x + 2) : (x² + x + 1)</p>
              <pre className="hint-code-block">{`2x³/x² = 2x;  2x·(x²+x+1)=2x³+2x²+2x
  (2x³+3x²+3x)−(2x³+2x²+2x)=x²+x; +2 → x²+x+2
x²/x² = 1;    1·(x²+x+1)=x²+x+1
  (x²+x+2)−(x²+x+1)=1   → Rest 1
Ergebnis: 2x + 1, Rest 1 → 2x+1 + 1/(x²+x+1).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 10x² − (−2x²) = 8x² → <strong>✅ Richtig:</strong> Minus vor Minus = Plus: 10x² + 2x² = 12x²; daraus 12x²/3x² = 4 für den nächsten Term.</li>
              <li><strong>❌ Falsch:</strong> Beim Multiplizieren nur 3x² statt (3x²−2x+1) verwenden → <strong>✅ Richtig:</strong> x·(3x²−2x+1) = 3x³−2x²+x, der ganze Divisor wird multipliziert.</li>
            </ul>,
            <p>Selbstkontrolle (Probe): (3x²−2x+1)·(x+4) = 3x³−2x²+x +12x²−8x+4 = 3x³+10x²−7x+4 ✓. Frage: Warum ist das Ergebnis hier vom Grad 1, und an welcher Stelle muss man besonders auf das Vorzeichen beim Subtrahieren achten?</p>,
          ),
          solution: '(3x³+10x²−7x+4) : (3x²−2x+1) = x+4\n\nProbe: (3x²−2x+1)·(x+4) = 3x³+10x²−7x+4 ✓',
        },
        {
          letter: 'c',
          text: '(x⁵ − 2x³ − x² + 1) : (2x³ − 2)',
          hint: h(
            <>
              <p>Wieder <span className="hint-em">Polynomdivision</span>, hier mit zwei Stolpersteinen: (1) Es bleibt ein <span className="hint-em">Rest</span> übrig, und (2) es treten <span className="hint-em">Bruchkoeffizienten</span> und <span className="hint-em">Lücken</span> im Divisor auf. Grad(Dividend)=5, Grad(Divisor)=3 → Grad(Ergebnis)=5−3=2.</p>
              <p><span className="hint-em">Division mit Rest</span>: Wenn am Ende ein Rest R bleibt, dessen Grad &lt; Grad(Divisor Q) ist, schreibt man P/Q = Quotient + R/Q. Der Bruchteil R/Q lässt sich nicht weiter teilen (analog zu 7:2 = 3 Rest 1, also 3 + 1/2).</p>
              <p><span className="hint-em">Lücken/Platzhalter</span>: Der Divisor 2x³ − 2 hat keine x²- und x-Glieder. Beim Subtrahieren muss man die fehlenden Potenzen als 0·x², 0·x mitdenken, damit nichts verrutscht. Ebenso fehlt im Dividenden x⁴ und x¹ (als 0 behandeln).</p>
              <p>Teilen mit Bruchergebnis: x⁵/(2x³) = (1/2)·x⁵⁻³ = (1/2)x²; den Koeffizienten 1/2 nicht vergessen!</p>
            </>,
            <>
              <p>So rechnet man (x⁵ − 2x³ − x² + 1) : (2x³ − 2):</p>
              <pre className="hint-code-block">{`Dividend mit Lücken: x⁵ +0x⁴ −2x³ −x² +0x +1

Schritt 1: x⁵ / 2x³ = (1/2)x²
  (1/2)x² · (2x³−2) = x⁵ − x²
  Subtrahieren:
  (x⁵ −2x³ −x²) − (x⁵ − x²)
   = x⁵−2x³−x² − x⁵+x²
   = −2x³            (das −x² hebt sich mit +x²)
  Rest mit +1: −2x³ + 1

Schritt 2: −2x³ / 2x³ = −1   (Konstante, kein x!)
  −1 · (2x³−2) = −2x³ + 2
  Subtrahieren:
  (−2x³ + 1) − (−2x³ + 2)
   = −2x³+1 +2x³−2 = −1
  Rest: −1   (Grad 0 < 3 = Grad Divisor → fertig)

Ergebnis: (1/2)x² − 1  +  (−1)/(2x³−2)`}</pre>
            </>,
            <>
              <p>Anderes Beispiel mit Rest: (x³ + 1) : (x² + 1)</p>
              <pre className="hint-code-block">{`Lücken: x³ +0x² +0x +1
x³/x² = x;  x·(x²+1)=x³+x;  (x³+0x²+0x)−(x³+x)=−x
+1 → −x+1   (Grad 1 < 2 → Rest)
Ergebnis: x + (−x+1)/(x²+1).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> x⁵ / 2x³ = x² (Faktor 2 ignoriert) → <strong>✅ Richtig:</strong> x⁵/(2x³) = (1/2)x²; der Koeffizient 1/2 gehört dazu.</li>
              <li><strong>❌ Falsch:</strong> −2x³ / 2x³ = −x → <strong>✅ Richtig:</strong> −2x³/2x³ = −1 (gleicher Grad oben/unten ⟹ x verschwindet, eine Konstante bleibt).</li>
            </ul>,
            <p>Selbstkontrolle (Probe: Ergebnis·Divisor + Rest): (2x³−2)·((1/2)x²−1) + (−1) = (x⁵−x²) + (−2x³+2) − 1 = x⁵−2x³−x²+1 ✓. Frage: Woran erkennt man, dass die Division „fertig" ist (wann hört man auf), und warum schreibt man den Rest als R/Divisor dazu?</p>,
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
