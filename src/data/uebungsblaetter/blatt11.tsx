import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt11: MatheBlatt = {
  id: 'blatt11',
  nr: '11',
  titel: 'Stetigkeit',
  aufgaben: [
    {
      id: 'b11a1',
      nr: 1,
      title: 'Stetigkeit in ℝ prüfen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'f: ℝ → ℝ,  x ↦ exp('}<Frac n="x" d="(cos x)² + 1" />{')'}
          </>,
          hint: h(
            <>
              <p>Grundregel: exp, sin, cos sind stetig auf ganz ℝ. Die <span className="hint-em">Betragsfunktion</span> ist stetig auf ℝ, die <span className="hint-em">Wurzelfunktion</span> stetig auf [0,∞). Verkettungen, Produkte, Summen und Quotienten stetiger Funktionen sind wieder stetig (beim Quotienten: Nenner ≠ 0 prüfen).</p>
            </>,
            <>
              <pre className="hint-code-block">{`Nenner: (cos x)² + 1 ≥ 0 + 1 = 1 > 0  für alle x ∈ ℝ

→ Kein x muss ausgeschlossen werden.
→ f ist Verkettung/Quotient stetiger Funktionen
ohne Nullstellen im Nenner → f stetig auf ℝ.`}</pre>
            </>,
            <p>Vergleich: (cos x)² ≥ 0 immer, also (cos x)² + 1 ≥ 1 — nie null.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nenner-Prüfung überspringen → <strong>✅ Richtig:</strong> Immer nachweisen, dass der Nenner ≠ 0 für alle x; hier (cos x)² + 1 ≥ 1 &gt; 0</li>
              <li><strong>❌ Falsch:</strong> exp(x) könnte undefiniert sein → <strong>✅ Richtig:</strong> exp ist auf ganz ℝ definiert und stetig; nur im Nenner wäre eine Nullstelle ein Problem</li>
            </ul>,
          ),
          solution: '(cos x)² + 1 ≥ 1 > 0 für alle x ∈ ℝ → kein Ausschluss nötig.\nf ist Verkettung/Quotient stetiger Funktionen → f stetig auf ℝ.',
        },
        {
          letter: 'b',
          text: 'g: ℝ → ℝ,  x ↦ √|sin(x)|',
          hint: h(
            <>
              <p>sin ist stetig auf ℝ. Die Betragsfunktion ist stetig auf ℝ. Die Wurzelfunktion ist stetig auf [0,∞). Verkettungen stetiger Funktionen sind stetig, solange das Argument im Definitionsbereich der äußeren Funktion liegt.</p>
            </>,
            <>
              <pre className="hint-code-block">{`g = √ ∘ |·| ∘ sin

Schritte:
sin: ℝ → ℝ  stetig
|·|: ℝ → ℝ  stetig, Bild = [0,∞)
√:   [0,∞) → ℝ  stetig

Argument von √ ist immer ≥ 0 (Betrag) → keine Einschränkung.
→ g stetig auf ℝ.`}</pre>
            </>,
            <p>|sin x| ≥ 0 immer → √|sin x| ist für alle x ∈ ℝ definiert.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> √|sin x| könnte undefiniert sein (negative Argumente) → <strong>✅ Richtig:</strong> |sin x| ≥ 0 immer, daher ist das Argument der Wurzel stets ≥ 0 und g überall definiert</li>
            </ul>,
          ),
          solution: '|sin x| ≥ 0 für alle x → Argument von √ immer ≥ 0.\ng = √ ∘ |·| ∘ sin ist Verkettung stetiger Funktionen → g stetig auf ℝ.',
        },
      ],
    },
    {
      id: 'b11a2',
      nr: 2,
      title: 'Stetigkeit von f, g, h (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Gegeben: f: ℝ → ℝ, x ↦ x;  g: ℝ → ℝ, x ↦ {4 für x ≥ 0, −4 für x < 0};  h: ℝ → ℝ, x ↦ f(x)·g(x).\n\nWelche der Funktionen f, g und h sind stetig?',
          hint: h(
            <>
              <p>f als Polynom: stetig. Für g in x = 0: links- und rechtsseitigen Grenzwert prüfen. Für h: Produkt explizit ausrechnen und vereinfachen.</p>
            </>,
            <>
              <ol>
                <li><strong>f:</strong> Identifiziere den Funktionstyp und wende Stetigkeitssätze an</li>
                <li><strong>g:</strong> Berechne links- und rechtsseitigen Grenzwert für x → 0 getrennt</li>
                <li><strong>h:</strong> Schreibe h(x) = f(x)·g(x) explizit aus — bestimme die geschlossene Form</li>
                <li>Prüfe die Stetigkeit von h in x = 0 direkt (auch: lim = Funktionswert?)</li>
              </ol>
            </>,
            <p>Merke: Das Produkt einer unstetigen Funktion (g) mit x kann trotzdem stetig sein.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> h ist nicht stetig, weil g nicht stetig ist (Produktregel für Stetigkeit) → <strong>✅ Richtig:</strong> Die Produktregel gilt nur für stetige Faktoren; h direkt analysieren ergibt h(x) = 4|x|, was stetig ist</li>
            </ul>,
          ),
          solution: 'f ist als Polynom stetig.\n\ng ist in 0 nicht stetig (lim(x→0) g(x) existiert nicht: −4 ≠ 4).\n\nh(x) = x·g(x) = 4|x|: Betragsfunktion stetig → h stetig auf ℝ.\n(Probe: lim(x→0) h(x) = 0 = h(0) ✓)',
        },
      ],
    },
    {
      id: 'b11a3',
      nr: 3,
      title: 'Stetige Fortsetzbarkeit — c bestimmen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'f: ℝ → ℝ,  x ↦ '}<Frac n="x²−1" d="x−1" />{' für x ≠ 1,  f(1) = c'}</>,
          hint: h(
            <>
              <p>Stetigkeit in x₀ = 1 erfordert lim(x→1) f(x) = f(1) = c. Zuerst den Grenzwert berechnen — durch Faktorisierung des Zählers.</p>
            </>,
            <>
              <ol>
                <li>Faktorisiere den Zähler (dritte binomische Formel oder ausklammern)</li>
                <li>Kürze den gemeinsamen Faktor für x ≠ 1 und vereinfache</li>
                <li>Bestimme den Grenzwert lim(x→1) der vereinfachten Form</li>
                <li>Setze c gleich dem Grenzwert — das ist die einzige Wahl, die Stetigkeit erzwingt</li>
              </ol>
            </>,
            <p>Für x ≠ 1 ist f(x) = x+1, eine gerade Linie. Der Wert an x = 1 muss = 2 sein.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> x = 1 direkt in (x²−1)/(x−1) einsetzen → <strong>✅ Richtig:</strong> Das ergibt 0/0; erst den Zähler faktorisieren und (x−1) kürzen, dann einsetzen</li>
            </ul>,
          ),
          solution: (
            <>
              {'f(x) = '}<Frac n="(x+1)(x−1)" d="x−1" />{' = x+1 für x ≠ 1\n\nlim(x→1) f(x) = 2\n\n→ c = 2, dann f stetig auf ℝ.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'f: (−1,∞) → ℝ,  x ↦ '}<Frac n="√(1+x) − 1" d="x" />{' für x ≠ 0,  f(0) = c'}</>,
          hint: h(
            <>
              <p>Grenzwert für x → 0 durch <span className="hint-em">Konjugaterweiterung</span>: Zähler und Nenner mit (√(1+x) + 1) erweitern, um die Differenz der Wurzeln aufzulösen.</p>
            </>,
            <>
              <ol>
                <li>Erkenne, dass direktes Einsetzen x = 0 zu 0/0 führt — Konjugaterweiterung nötig</li>
                <li>Erweitere Zähler und Nenner mit dem konjugierten Ausdruck (√(1+x)+1)</li>
                <li>Vereinfache den Zähler mit der 3. binomischen Formel — kürze dann x</li>
                <li>Bestimme lim(x→0) des vereinfachten Ausdrucks und setze c gleich diesem Wert</li>
              </ol>
            </>,
            <p>Alternative: L'Hôpital (falls bekannt): Zähler- und Nenner-Ableitung bei x=0 auswerten.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> x = 0 direkt einsetzen → <strong>✅ Richtig:</strong> Ergibt 0/0; Konjugaterweiterung mit (√(1+x)+1) anwenden, um den Ausdruck umzuformen</li>
              <li><strong>❌ Falsch:</strong> (√(1+x)−1)(√(1+x)+1) = (1+x)−1 vergessen = x → <strong>✅ Richtig:</strong> 3. binomische Formel: Produkt ergibt (1+x)−1 = x, dann x im Nenner kürzen</li>
            </ul>,
          ),
          solution: (
            <>
              <Frac n="√(1+x)−1" d="x" />{' = '}<Frac n="√(1+x)−1" d="x" />{' · '}<Frac n="√(1+x)+1" d="√(1+x)+1" />{' = '}<Frac n="x" d="x(√(1+x)+1)" />{' = '}<Frac n="1" d="√(1+x)+1" />{'\n\nlim(x→0) = '}<Frac n="1" d="√1+1" />{' = '}<Frac n="1" d="2" />{'\n\n→ c = '}<Frac n="1" d="2" />
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'f: ℝ → ℝ,  x ↦ '}<Frac n="3x" d="2|x|" />{' für x ≠ 0,  f(0) = c'}</>,
          hint: h(
            <>
              <p>Betragsfunktion fallweise auswerten: |x| = x für x &gt; 0 und |x| = −x für x &lt; 0. Dann links- und rechtsseitigen Grenzwert vergleichen.</p>
            </>,
            <>
              <ol>
                <li>Werte |x| fallweise aus: für x &gt; 0 und für x &lt; 0 getrennt</li>
                <li>Vereinfache f(x) in jedem Fall und berechne den einseitigen Grenzwert</li>
                <li>Vergleiche links- und rechtsseitigen Grenzwert — existiert ein beidseitiger Grenzwert?</li>
                <li>Schließe daraus, ob ein c existiert, das Stetigkeit erzwingt</li>
              </ol>
            </>,
            <p>Wenn links- und rechtsseitiger Grenzwert verschieden sind, gibt es kein c, das Stetigkeit erzwingt.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> c = 0 wählen, da f(0) = 0 naheliegt → <strong>✅ Richtig:</strong> Stetigkeit erfordert, dass der Grenzwert existiert; da Links ≠ Rechts, gibt es kein c, das Stetigkeit erzwingt</li>
            </ul>,
          ),
          solution: 'x > 0: f(x) = 3/2\nx < 0: f(x) = −3/2\n\nlim(x→0, x<0) f(x) = −3/2 ≠ lim(x→0, x>0) f(x) = 3/2\n→ Grenzwert existiert nicht → kein c möglich.',
        },
        {
          letter: 'd',
          text: 'f: ℝ → ℝ,  x ↦ {|x| für x < 0,  c für x = 0,  √x für x > 0}',
          hint: h(
            <>
              <p>Links- und rechtsseitigen Grenzwert für x → 0 getrennt bestimmen. Stimmen sie überein, ist der Gesamtgrenzwert bekannt — und c muss gleich diesem Grenzwert sein.</p>
            </>,
            <>
              <ol>
                <li>Berechne den linksseitigen Grenzwert (x &lt; 0: f = |x|)</li>
                <li>Berechne den rechtsseitigen Grenzwert (x &gt; 0: f = √x)</li>
                <li>Vergleiche beide Grenzwerte — wenn gleich, existiert der Gesamtgrenzwert</li>
                <li>Setze c gleich dem Gesamtgrenzwert für Stetigkeit in x = 0</li>
              </ol>
            </>,
            <p>Für x ≠ 0 ist f jeweils Betragsfunktion bzw. Wurzelfunktion — beide stetig auf ihren Bereichen.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim |x| für x → 0⁻ ist undefiniert → <strong>✅ Richtig:</strong> Für x &lt; 0 gilt |x| = −x, also lim(−x) = 0 für x → 0⁻; der Grenzwert existiert und ist 0</li>
            </ul>,
          ),
          solution: 'lim(x→0, x<0) f(x) = lim |x| = 0\nlim(x→0, x>0) f(x) = lim √x = 0\n\n→ lim(x→0) f(x) = 0  →  c = 0\n\nMit c = 0 ist f stetig auf ℝ.',
        },
      ],
    },
    {
      id: 'b11a4',
      nr: 4,
      title: 'Zwischenwertsatz und Bisektionsverfahren',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Zeigen Sie mit dem Zwischenwertsatz, dass '}<Frac n="1" d="1+x²" />{' = √x eine Lösung in [0,4] besitzt. Führen Sie das Bisektionsverfahren durch und geben Sie ein Intervall der Länge '}<Frac n="1" d="4" />{' an, in dem die Lösung liegt.'}</>,
          hint: h(
            <>
              <p><span className="hint-em">Zwischenwertsatz (ZWS)</span>: Ist f stetig auf [a,b] und hat f(a) und f(b) verschiedene Vorzeichen, gibt es mindestens ein c ∈ (a,b) mit f(c) = 0.</p>
              <p>Strategie: Hilfsfunktion f(x) = 1/(1+x²) − √x bilden. Nullstellen von f entsprechen Lösungen der Gleichung.</p>
            </>,
            <>
              <ol>
                <li>Bilde die Hilfsfunktion f(x) = 1/(1+x²) − √x, deren Nullstellen den Lösungen entsprechen</li>
                <li><strong>ZWS:</strong> Zeige Stetigkeit von f auf [0,4] und berechne f(0) und f(4) — prüfe auf Vorzeichenwechsel</li>
                <li><strong>Bisektion:</strong> Berechne jeweils den Mittelpunkt mid, werte f(mid) aus und aktualisiere das Intervall so, dass der Vorzeichenwechsel erhalten bleibt</li>
                <li>Fahre fort, bis das Intervall die Länge 1/4 hat</li>
              </ol>
            </>,
            <>
              <p>ZWS erfordert: Stetigkeit auf geschlossenem Intervall + Vorzeichenwechsel an den Rändern.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ZWS anwenden ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> Erst Stetigkeit auf [0,4] zeigen (√x braucht x ≥ 0, erfüllt auf [0,4]), dann ZWS anwenden</li>
              <li><strong>❌ Falsch:</strong> Bei f(mid) &lt; 0 das Intervall falsch aktualisieren → <strong>✅ Richtig:</strong> Neues Intervall enthält den Vorzeichenwechsel; f(mid) &lt; 0 und f(links) &gt; 0 → [links, mid]</li>
            </ul>,
          ),
          solution: (
            <>
              {'f(x) = '}<Frac n="1" d="1+x²" />{' − √x stetig auf [0,4].\n\n'}
              {'f(0) = 1 > 0,  f(4) = '}<Frac n="1" d="17" />{' − 2 < 0\n'}
              {'→ ZWS: Nullstelle in (0,4).\n\n'}
              {'Bisektionsverfahren:\n'}
              {'n=0: mid=2, f(2)='}<Frac n="1" d="5" />{' − √2 < 0  → [0,2]\n'}
              {'n=1: mid=1, f(1)='}<Frac n="1" d="2" />{' − 1 < 0      → [0,1]\n'}
              {'n=2: mid=½, f(½)='}<Frac n="4" d="5" />{' − '}<Frac n="1" d="√2" />{' > 0 → [½,1]\n'}
              {'n=3: mid=¾, f(¾)='}<Frac n="16" d="25" />{' − '}<Frac n="√3" d="2" />{' < 0 → [½,¾]\n\n'}
              {'Nullstelle liegt in [½, ¾],  Länge = '}<Frac n="1" d="4" />{'. ✓'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b11a5',
      nr: 5,
      title: 'Punktweise Konvergenz von fₙ(x) = xⁿ (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Für n ∈ ℕ* sei fₙ: [−1,1] → ℝ, x ↦ xⁿ. Skizzieren Sie f₁, f₂, f₃, f₄.',
          hint: h(
            <>
              <p>fₙ(x) = xⁿ: gerade n → symmetrische Kurve (f(−x) = f(x)), ungerade n → antisymmetrisch. Alle Kurven gehen durch (0,0) und (1,1). Für gerades n auch durch (−1,1), für ungerades n durch (−1,−1).</p>
            </>,
            <>
              <pre className="hint-code-block">{`f₁(x) = x         → Gerade von (−1,−1) bis (1,1)
f₂(x) = x²        → Parabel, Minimum bei x=0
f₃(x) = x³        → S-Kurve, antisymmetrisch
f₄(x) = x⁴        → flachere Parabel (schmalere Öffnung)`}</pre>
            </>,
            <p>Für |x| &lt; 1 gilt: je größer n, desto näher an 0. Für x = 1 immer 1. Für x = −1: +1 oder −1 je nach Parität.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> f₂(−x) = −f₂(x) annehmen (antisymmetrisch) → <strong>✅ Richtig:</strong> f₂ und f₄ sind gerade Funktionen: f(−x) = f(x); ihre Graphen sind symmetrisch zur y-Achse</li>
            </ul>,
          ),
          solution: 'f₁: Gerade y=x\nf₂: Normalparabel y=x²\nf₃: kubische Kurve y=x³ (antisymmetrisch)\nf₄: y=x⁴ (flacher als f₂, ≥0)\n\nAlle durch (0,0) und (1,1). Für |x|<1 gilt: f₄ < f₂ und |f₃| < f₁.',
        },
        {
          letter: 'b',
          text: 'Für welche x ∈ [−1,1] existiert lim(n→∞) fₙ(x)? Geben Sie die Grenzwerte an.',
          hint: h(
            <>
              <p>Die Folge (xⁿ)ₙ ist eine <span className="hint-em">geometrische Folge</span> mit Quotient x. Sie konvergiert genau für |x| ≤ 1, aber bei x = −1 nicht (Vorzeichen alterniert).</p>
            </>,
            <>
              <ol>
                <li>Behandle die drei Fälle getrennt: |x| &lt; 1, x = 1, x = −1</li>
                <li>Nutze für |x| &lt; 1 die geometrische Folge (Quotient |x| &lt; 1 → Konvergenz)</li>
                <li>Prüfe für x = −1 explizit, ob der Grenzwert existiert</li>
                <li>Gib D ⊆ [−1,1] an (die Menge, für die der Grenzwert existiert)</li>
              </ol>
            </>,
            <p>Der Grenzwert existiert für x ∈ (−1,1] — also für alle x ∈ [−1,1] außer x = −1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim(n→∞)(−1)ⁿ = −1 (immer negativ) → <strong>✅ Richtig:</strong> (−1)ⁿ alterniert zwischen +1 und −1; der Grenzwert existiert nicht</li>
            </ul>,
          ),
          solution: 'lim(n→∞) xⁿ existiert für x ∈ (−1,1]:\n\n  0,  |x| < 1\n  1,  x = 1\n\nFür x = −1: (−1)ⁿ alterniert → kein Grenzwert.',
        },
        {
          letter: 'c',
          text: 'Skizzieren Sie die Grenzfunktion f: D → ℝ, x ↦ lim(n→∞) fₙ(x), wobei D = {x ∈ [−1,1] : lim(n→∞) fₙ(x) existiert}.',
          hint: h(
            <>
              <p>D = (−1,1] (aus Teil (b)). Die Grenzfunktion f nimmt den Wert 0 für alle x ∈ (−1,1) an, und den Wert 1 bei x = 1.</p>
            </>,
            <>
              <ol>
                <li>Schreibe D aus (b) auf</li>
                <li>Notiere die Grenzwerte für x ∈ (−1,1) und x = 1 getrennt</li>
                <li>Skizziere: y=0 auf (−1,1) als Linie, dann Verhalten bei x = 1 einzeichnen</li>
              </ol>
            </>,
            <p>Die Grenzfunktion ist nicht stetig in x = 1 (Sprung von 0 auf 1) — obwohl alle fₙ stetig sind.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> D = [−1,1] (auch x = −1 aufnehmen) → <strong>✅ Richtig:</strong> D = (−1,1], da lim(n→∞)(−1)ⁿ nicht existiert; x = −1 liegt außerhalb von D</li>
              <li><strong>❌ Falsch:</strong> f(1) = 0 (weil alle anderen Grenzwerte 0 sind) → <strong>✅ Richtig:</strong> 1ⁿ = 1 für alle n, daher f(1) = lim(n→∞) 1ⁿ = 1</li>
            </ul>,
          ),
          solution: 'D = (−1,1]\n\nf: (−1,1] → ℝ,  x ↦ {0 für x ∈ (−1,1),  1 für x = 1}\n\nSkizze: y=0 auf (−1,1) (offenes Intervall), isolierter Punkt (1,1).\nHinweis: f ist nicht stetig in x=1, obwohl alle fₙ stetig sind.',
        },
      ],
    },
  ],
}
