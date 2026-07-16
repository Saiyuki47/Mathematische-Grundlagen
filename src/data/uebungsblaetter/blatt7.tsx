import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt7: MatheBlatt = {
  id: 'blatt7',
  nr: '7',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung7 - Folgen 1/07_aufg_folgen.pdf',
  loesungen: [
    { label: 'Lösung (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung7 - Folgen 1/07_lsg_folgen.pdf' },
    { label: 'Lösung – Mitschrift G3/G4 (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung7 - Folgen 1/07_lsg_Mitschriften_G3_G4.pdf' },
  ],
  titel: 'Folgen, geometrische Summenformel',
  aufgaben: [
    {
      id: 'b7a1',
      nr: 1,
      title: 'Abbildungsvorschriften und rekursive Folge',
      referenz: ['rekursive-folgen', 'folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Geben Sie zu nachstehenden Folgen jeweils die Abbildungsvorschrift ℕ → ℝ, n ↦ xₙ an:\n\n(i)   (xₙ) = (0, 3, 6, 9, 12, …)\n(ii)  (xₙ) = (−4, −1, 2, 5, 8, …)\n(iii) (xₙ) = (0, −1, 2, −3, 4, …)\n(iv)  (xₙ) = (0, 1, −2, 3, −4, …)\n(v)   (xₙ) = ('}
              <Frac n="1" d="2" />{', '}<Frac n="1" d="4" />{', '}<Frac n="1" d="8" />{', '}<Frac n="1" d="16" />{', '}<Frac n="1" d="32" />{', …)\n(vi)  (xₙ) = (1, '}
              <Frac n="1" d="3" />{', '}<Frac n="1" d="7" />{', '}<Frac n="1" d="15" />{', '}<Frac n="1" d="31" />{', …)'}
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">Folge</span> ist eine durchnummerierte Liste von Zahlen x₀, x₁, x₂, … . Die Nummer heißt <span className="hint-em">Index</span> n; hier beginnt er bei n = 0 (weil ℕ = {'{0, 1, 2, …}'}). Eine <span className="hint-em">Abbildungsvorschrift</span> n ↦ xₙ ist eine Formel, die aus dem Index n direkt das zugehörige Glied xₙ ausrechnet — man setzt n = 0, 1, 2, … ein und muss genau die vorgegebene Liste herausbekommen.</p>
              <p>Es gibt zwei Grund-Muster, nach denen man sucht:</p>
              <ul>
                <li><span className="hint-em">Arithmetische Folge</span> = von Glied zu Glied wird immer dieselbe Zahl d addiert (konstante <span className="hint-em">Differenz</span> d = xₙ₊₁ − xₙ). Formel: xₙ = x₀ + d·n. (Beispiel 0, 3, 6, 9: d = 3, x₀ = 0 → xₙ = 3n.)</li>
                <li><span className="hint-em">Geometrische Folge</span> = von Glied zu Glied wird immer mit derselben Zahl q multipliziert (konstantes <span className="hint-em">Verhältnis</span> q = xₙ₊₁/xₙ). Formel: xₙ = x₀·qⁿ.</li>
              </ul>
              <p><span className="hint-em">Vorzeichenwechsel</span> (+, −, +, −, …) baut man mit der Potenz (−1)ⁿ ein: (−1)ⁿ ist +1 für gerades n und −1 für ungerades n. Bei (−1)ⁿ ist das Glied n = 0 positiv, bei (−1)ⁿ⁺¹ ist n = 0 negativ — der Exponent verschiebt das Muster um eine Stelle.</p>
              <p>Treten im Nenner die Zahlen 1, 3, 7, 15, 31 auf, erkennt man das Muster <span className="hint-em">2ᵐ − 1</span>: 2¹−1=1, 2²−1=3, 2³−1=7, 2⁴−1=15, 2⁵−1=31. Mit Start bei n = 0 ist der Exponent n+1.</p>
            </>,
            <>
              <p>So findet man jede der sechs Vorschriften (immer mit n ab 0 und am Ende Probe n=0, n=1):</p>
              <pre className="hint-code-block">{`(i) 0, 3, 6, 9, 12:  Differenz 3−0 = 6−3 = 3 konstant
    → arithmetisch, x₀ = 0, d = 3 → xₙ = 0 + 3·n = 3n
    Probe: n=0 → 0 ✓, n=1 → 3 ✓

(ii) −4, −1, 2, 5, 8: Differenz −1−(−4)=3, konstant
    → arithmetisch, x₀ = −4, d = 3 → xₙ = −4 + 3n
    Probe: n=0 → −4 ✓, n=1 → −1 ✓

(iii) 0, −1, 2, −3, 4: Beträge 0,1,2,3,4 = n,
    Vorzeichen +,−,+,−,…; bei n=0 positiv → (−1)ⁿ
    → xₙ = (−1)ⁿ·n
    Probe: n=1 → (−1)¹·1 = −1 ✓, n=2 → (+1)·2 = 2 ✓

(iv) 0, 1, −2, 3, −4: Beträge wieder n, aber bei n=1
    positiv, bei n=2 negativ → Muster um 1 verschoben
    → (−1)ⁿ⁺¹·n
    Probe: n=1 → (−1)²·1 = 1 ✓, n=2 → (−1)³·2 = −2 ✓

(v) 1/2, 1/4, 1/8, 1/16: Nenner 2,4,8,16 = 2ᵐ;
    bei n=0 ist Nenner 2 = 2¹ → Exponent n+1
    → xₙ = 1/2ⁿ⁺¹
    Probe: n=0 → 1/2 ✓, n=1 → 1/4 ✓

(vi) 1, 1/3, 1/7, 1/15, 1/31: Nenner 1,3,7,15,31 = 2ᵐ−1;
    bei n=0 ist Nenner 1 = 2¹−1 → Exponent n+1
    → xₙ = 1/(2ⁿ⁺¹ − 1)
    Probe: n=0 → 1/(2−1)=1 ✓, n=1 → 1/(4−1)=1/3 ✓`}</pre>
              <p>Warum die Probe mit zwei Indizes? Weil eine Formel oft schon bei n=0 oder n=1 das Vorzeichen oder den Startwert verrät — gerade da werden die meisten Fehler gemacht.</p>
            </>,
            <>
              <p>Anderes Beispiel: Vorschrift zu (2, 5, 8, 11, 14, …) finden.</p>
              <pre className="hint-code-block">{`Differenz: 5−2 = 3, 8−5 = 3 → konstant → arithmetisch
x₀ = 2, d = 3 → xₙ = 2 + 3n
Probe: n=0 → 2 ✓, n=1 → 5 ✓, n=2 → 8 ✓`}</pre>
              <p>Und ein geometrisches Beispiel (3, 6, 12, 24, …):</p>
              <pre className="hint-code-block">{`Verhältnis: 6/3 = 2, 12/6 = 2 → konstant → geometrisch
x₀ = 3, q = 2 → xₙ = 3·2ⁿ
Probe: n=0 → 3 ✓, n=1 → 6 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> für (iii) xₙ = (−1)ⁿ⁺¹·n → <strong>✅ Richtig:</strong> Probe n=1: (−1)²·1 = +1, gefordert ist aber −1. Bei (iii) ist n=1 negativ → Exponent muss n sein: (−1)ⁿ·n.</li>
              <li><strong>❌ Falsch:</strong> für (v) xₙ = (1/2)ⁿ → <strong>✅ Richtig:</strong> n=0 liefert (1/2)⁰ = 1, gefordert ist x₀ = 1/2. Der Nenner startet bei 2¹, also Exponent n+1: xₙ = 1/2ⁿ⁺¹.</li>
              <li><strong>❌ Falsch:</strong> bei (i) den Index ab 1 zählen → xₙ = 3(n−1) → <strong>✅ Richtig:</strong> hier ist ℕ ab 0; x₀ = 0 muss herauskommen, also xₙ = 3n (n=0 → 0).</li>
            </ul>,
            <p>Selbstkontrolle: Setze in deine gefundene Formel n=0 UND n=1 ein — kommen die ersten beiden Listenglieder heraus (richtige Zahl, richtiges Vorzeichen)? Frage: Wie erkennt man am Vorzeichen des Glieds n=0, ob man (−1)ⁿ oder (−1)ⁿ⁺¹ braucht, und warum verschiebt der Exponent +1 das ganze Vorzeichenmuster?</p>,
          ),
          solution: (
            <>
              {'Wir erhalten folgende Abbildungsvorschriften.\n'}
              {'(i)   '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto 3n'}</M>{'\n'}
              {'(ii)  '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto -4+3n'}</M>{'\n'}
              {'(iii) '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto (-1)^{n}\\,n'}</M>{'\n'}
              {'(iv)  '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto (-1)^{n+1}\\,n'}</M>{'\n'}
              {'(v)   '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto \\dfrac{1}{2^{n+1}}'}</M>{'\n'}
              {'(vi)  '}<M>{'f:\\mathbb{N}\\to\\mathbb{R},\\; n\\mapsto \\dfrac{1}{2^{n+1}-1}'}</M>
            </>
          ),
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
              <p>Eine <span className="hint-em">rekursiv definierte Folge</span> gibt nicht direkt eine Formel für xₙ, sondern einen <span className="hint-em">Startwert</span> (hier a₀ = 2) und eine <span className="hint-em">Rekursionsformel</span>, die jedes neue Glied aus dem unmittelbar vorhergehenden berechnet. Die Formel aₙ₊₁ = 2aₙ/(2+aₙ) heißt: „Das nächste Glied (Index n+1) entsteht, indem man das aktuelle Glied aₙ überall einsetzt." Es gibt keine Abkürzung — man muss a₁, a₂, a₃ der Reihe nach ausrechnen.</p>
              <p>Beim Rechnen braucht man zwei Bruchregeln. <span className="hint-em">Brüche addieren</span> (für den Nenner 2 + aₙ, wenn aₙ schon ein Bruch ist): auf gemeinsamen Nenner bringen, dann nur die Zähler addieren, z. B. 2 = 6/3, also 2 + 2/3 = 6/3 + 2/3 = 8/3. <span className="hint-em">Durch einen Bruch teilen</span> = mit dem <span className="hint-em">Kehrwert</span> multiplizieren (Zähler und Nenner vertauschen): (a/b) : (c/d) = (a/b)·(d/c).</p>
            </>,
            <>
              <p>So berechnet man a₁, a₂, a₃ aus a₀ = 2:</p>
              <pre className="hint-code-block">{`a₁: setze aₙ = a₀ = 2 in 2aₙ/(2+aₙ):
   a₁ = (2·2)/(2+2) = 4/4 = 1

a₂: jetzt aₙ = a₁ = 1 (den Vorgänger, NICHT a₀):
   a₂ = (2·1)/(2+1) = 2/3

a₃: jetzt aₙ = a₂ = 2/3:
   Zähler: 2·(2/3) = 4/3
   Nenner: 2 + 2/3 — gemeinsamer Nenner 3:
           = 6/3 + 2/3 = 8/3
   a₃ = (4/3) : (8/3)
   Durch Bruch teilen = mit Kehrwert mal:
       = (4/3)·(3/8) = 12/24 = 1/2`}</pre>
              <p>Warum den Vorgänger? „aₙ₊₁ aus aₙ" heißt: für a₃ (also n+1 = 3, n = 2) setzt man a₂ ein — nie a₀ oder a₁.</p>
            </>,
            <>
              <p>Anderes Beispiel: b₀ = 3, bₙ₊₁ = bₙ/(1 + bₙ). Berechne b₁, b₂.</p>
              <pre className="hint-code-block">{`b₁ = 3/(1+3) = 3/4
b₂: setze bₙ = b₁ = 3/4 ein:
   Zähler: 3/4
   Nenner: 1 + 3/4 = 4/4 + 3/4 = 7/4
   b₂ = (3/4) : (7/4) = (3/4)·(4/7) = 12/28 = 3/7`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> a₃ = f(a₁) statt f(a₂) (eine Stufe übersprungen) → <strong>✅ Richtig:</strong> Die Rekursion verlangt immer den unmittelbaren Vorgänger: a₃ = 2a₂/(2+a₂) mit a₂ = 2/3.</li>
              <li><strong>❌ Falsch:</strong> (4/3) : (8/3) = (4/3)·(8/3) = 32/9 (Kehrwert vergessen) → <strong>✅ Richtig:</strong> Durch Bruch teilen = mit Kehrwert mal: (4/3)·(3/8) = 1/2.</li>
              <li><strong>❌ Falsch:</strong> 2 + 2/3 = 4/3 (die 2 nicht erweitert) → <strong>✅ Richtig:</strong> 2 = 6/3, also 2 + 2/3 = 6/3 + 2/3 = 8/3.</li>
            </ul>,
            <p>Selbstkontrolle: Setze a₂ = 2/3 zur Probe in die Formel ein und rechne a₃ erneut. Frage: Warum kann man bei einer rekursiven Folge a₃ nicht direkt aus a₀ ausrechnen, ohne a₁ und a₂ vorher zu kennen? (Auffällig: 2, 1, 2/3, 1/2 — die Kehrwerte 1/aₙ sind 1/2, 1, 3/2, 2 und steigen um 1/2.)</p>,
          ),
          solution: (
            <>
              <M>{'a_1 = \\frac{2a_0}{2+a_0} = \\frac{2\\cdot 2}{2+2} = \\frac{4}{4} = 1'}</M>{'\n'}
              <M>{'a_2 = \\frac{2a_1}{2+a_1} = \\frac{2\\cdot 1}{2+1} = \\frac{2}{3}'}</M>{'\n'}
              <M>{'a_3 = \\frac{2a_2}{2+a_2} = \\frac{2\\cdot\\frac{2}{3}}{2+\\frac{2}{3}} = \\frac{\\frac{4}{3}}{\\frac{8}{3}} = \\frac{1}{2}'}</M>
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a2',
      nr: 2,
      title: 'Konvergenz und Divergenz von Folgen',
      referenz: ['folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass nachfolgende Eigenschaften erfüllt sind.\n\nMindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ + yₙ) konvergiert.',
          hint: h(
            <>
              <p>Eine Folge <span className="hint-em">konvergiert</span>, wenn sich ihre Glieder für wachsendes n beliebig nah an eine feste Zahl (den <span className="hint-em">Grenzwert</span>) annähern. <span className="hint-em">Divergiert</span> heißt einfach „konvergiert nicht" — entweder weil die Glieder ins Unendliche laufen (z. B. xₙ = n → ∞) oder weil sie hin- und herspringen ohne sich festzulegen (z. B. (−1)ⁿ springt zwischen +1 und −1).</p>
              <p>Die Aufgabe will ein <span className="hint-em">Gegenbeispiel</span> zu der falschen Vermutung „Summe divergenter Folgen divergiert immer". Man muss also zwei konkrete Folgen angeben (keinen allgemeinen Beweis). Schlüsselidee: Lässt man die beiden Folgen sich <span className="hint-em">gegenseitig aufheben</span>, ist die Summe in jedem Glied 0 — und die konstante Folge 0, 0, 0, … konvergiert (gegen 0), obwohl die Summanden divergieren.</p>
              <p>Trick: Wähle yₙ = −xₙ. Dann ist xₙ + yₙ = xₙ + (−xₙ) = 0 für jedes n.</p>
            </>,
            <>
              <p>So konstruiert man ein Beispiel:</p>
              <pre className="hint-code-block">{`1) Nimm eine divergente Folge, z.B. xₙ = (−1)ⁿ
   (springt −1,+1,−1,+1,… → kein Grenzwert → divergent)

2) Setze yₙ = −xₙ = −(−1)ⁿ = (−1)ⁿ⁺¹
   (springt +1,−1,+1,… → auch divergent)

3) Summe Glied für Glied:
   xₙ + yₙ = (−1)ⁿ + (−1)ⁿ⁺¹ = (−1)ⁿ − (−1)ⁿ = 0
   → die Folge 0,0,0,… konvergiert gegen 0 ✓

Bedingung erfüllt: mindestens eine (sogar beide)
Summanden divergent, Summe konvergent.`}</pre>
              <p>Warum geht das? Konvergenz der Summe sagt nichts über die einzelnen Summanden — das „Chaos" der einen Folge wird vom „Gegen-Chaos" der anderen exakt ausgelöscht.</p>
            </>,
            <>
              <p>Anderes (einfacheres) Beispiel mit ins Unendliche laufenden Folgen:</p>
              <pre className="hint-code-block">{`xₙ = n      → divergiert gegen +∞
yₙ = −n     → divergiert gegen −∞
xₙ + yₙ = n + (−n) = 0 → konvergiert gegen 0 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> beide Folgen konvergent wählen → <strong>✅ Richtig:</strong> Die Aufgabe verlangt, dass MINDESTENS eine divergiert; mit zwei konvergenten Folgen ist nichts gezeigt.</li>
              <li><strong>❌ Falsch:</strong> behaupten „die Summe divergenter Folgen divergiert immer" → <strong>✅ Richtig:</strong> genau das widerlegt die Aufgabe; (−1)ⁿ + (−1)ⁿ⁺¹ = 0 ist konvergent.</li>
            </ul>,
            <p>Selbstkontrolle: Schreibe die ersten vier Summenglieder deines Beispiels hin — sind sie alle gleich (also konvergent), obwohl die Einzelfolgen springen/wachsen? Frage: Warum darf man aus „xₙ + yₙ konvergiert" NICHT schließen, dass xₙ und yₙ einzeln konvergieren?</p>,
          ),
          solution: (
            <>
              {'Zum Beispiel '}<M>{'(x_n) = ((-1)^{n})'}</M>{', '}<M>{'(y_n) = ((-1)^{n+1})'}</M>{' oder '}<M>{'(x_n) = (n)'}</M>{', '}<M>{'(y_n) = (-n)'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass nachfolgende Eigenschaften erfüllt sind.\n\nMindestens eine der Folgen (xₙ) bzw. (yₙ) divergiert, aber die Folge (xₙ · yₙ) konvergiert.',
          hint: h(
            <>
              <p>Gleiche Begriffe wie vorher: <span className="hint-em">konvergiert</span> = nähert sich einer festen Zahl, <span className="hint-em">divergiert</span> = tut das nicht (läuft ins Unendliche oder springt). Jetzt geht es ums <span className="hint-em">Produkt</span> xₙ·yₙ (Glied mal Glied), und wieder soll mindestens ein Faktor divergieren, das Produkt aber konvergieren.</p>
              <p>Zwei zuverlässige Konstruktionen:</p>
              <ul>
                <li><span className="hint-em">Faktor 0</span>: Ist eine Folge konstant 0 (also 0, 0, 0, … — sie konvergiert gegen 0), dann ist jedes Produkt 0·(irgendwas) = 0, egal wie wild die andere Folge ist. Eine Multiplikation mit 0 ergibt immer 0.</li>
                <li><span className="hint-em">Wachstum gegen Schrumpfen</span>: Multipliziert man eine Folge, die gegen ∞ läuft (z. B. n), mit einer, die genau passend gegen 0 geht (z. B. 1/n), kann sich das aufheben: n·(1/n) = 1.</li>
              </ul>
            </>,
            <>
              <p>So konstruiert man ein Beispiel (Variante mit konstanter 0):</p>
              <pre className="hint-code-block">{`1) xₙ = 0 für alle n (konstante Folge → konvergent, →0)
2) yₙ = (−1)ⁿ (springt −1,+1,… → divergent)
3) Produkt: xₙ·yₙ = 0·(−1)ⁿ = 0 für alle n
   → konvergiert gegen 0 ✓
Mindestens ein Faktor (yₙ) divergiert. Bedingung erfüllt.`}</pre>
              <p>Warum reicht das? Eine 0 als Faktor „schluckt" den anderen Faktor vollständig — sein Verhalten ist für das Produkt irrelevant.</p>
            </>,
            <>
              <p>Anderes Beispiel (Wachstum gegen Schrumpfen), bei dem beide Faktoren divergieren bzw. der eine sogar gegen 0 geht:</p>
              <pre className="hint-code-block">{`xₙ = n     → divergiert gegen +∞
yₙ = 1/n   → konvergiert gegen 0
Produkt: xₙ·yₙ = n·(1/n) = 1 für alle n ≥ 1
   → konvergiert gegen 1 ✓
(xₙ divergiert, Produkt konvergent.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur nach zwei divergenten Folgen suchen und aufgeben → <strong>✅ Richtig:</strong> es genügt EINE divergente; xₙ=0 (konvergent) und yₙ=(−1)ⁿ (divergent) → Produkt 0.</li>
              <li><strong>❌ Falsch:</strong> denken „divergent mal divergent ist immer divergent" → <strong>✅ Richtig:</strong> n·(1/n) = 1 zeigt, dass das Produkt konvergieren kann.</li>
            </ul>,
            <p>Selbstkontrolle: Liste die ersten vier Produktglieder deines Beispiels auf — sind sie alle gleich (konvergent)? Frage: Warum macht ein einziger Faktor 0 das ganze Produkt unabhängig vom Verhalten des zweiten Faktors konvergent?</p>,
          ),
          solution: (
            <>
              {'Zum Beispiel '}<M>{'(x_n) = (0,0,0,\\dots)'}</M>{', '}<M>{'(y_n) = ((-1)^{n})'}</M>{' oder '}<M>{'(x_n) = (n)'}</M>{', '}<M>{'(y_n) = \\left(\\frac{1}{n}\\right)'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass nachfolgende Eigenschaften erfüllt sind.\n\nDie Folgen (xₙ) und (yₙ) konvergieren, und es ist xₙ < yₙ für alle n, aber es gilt nicht '}<M>{'\\lim_{n \\to \\infty} x_n < \\lim_{n \\to \\infty} y_n'}</M>{'.'}</>,
          hint: h(
            <>
              <p>Zur Erinnerung: <span className="hint-em">lim xₙ</span> ist die Zahl, gegen die die Folgenglieder streben (der <span className="hint-em">Grenzwert</span>). „xₙ &lt; yₙ für alle n" heißt: in JEDEM einzelnen Glied ist die x-Folge echt kleiner. <span className="hint-em">Strikt</span> (&lt;) bedeutet „echt kleiner, nie gleich", <span className="hint-em">schwach</span> (≤) bedeutet „kleiner oder gleich".</p>
              <p>Die wichtige Tatsache, die diese Aufgabe zeigt: Aus strikt &lt; bei jedem Glied folgt für die Grenzwerte NUR die schwache Ungleichung. Es gilt der Satz: <span className="hint-em">xₙ ≤ yₙ für alle n ⟹ lim xₙ ≤ lim yₙ</span>. Beim Grenzübergang kann aus dem „&lt;" ein „=" werden, weil sich beide Folgen demselben Wert beliebig nah nähern können, ohne ihn je zu erreichen.</p>
              <p>Gesucht ist also ein Paar Folgen mit xₙ &lt; yₙ überall, aber gleichem Grenzwert. Idee: beide gegen 0, eine davon konstant 0 (immer echt unter der anderen positiven Folge).</p>
            </>,
            <>
              <p>So konstruiert man das Gegenbeispiel:</p>
              <pre className="hint-code-block">{`1) xₙ = 0 (konstant) → lim xₙ = 0
2) yₙ = 1/n          → lim yₙ = 0 (1 geteilt durch immer
                       größeres n geht gegen 0)
3) Strikte Ungleichung prüfen:
   xₙ = 0 < 1/n = yₙ für alle n ≥ 1, weil 1/n > 0 ✓
4) Grenzwerte vergleichen:
   lim xₙ = 0 = lim yₙ  → gleich, obwohl xₙ < yₙ überall ✓`}</pre>
              <p>Warum widerspricht das nicht dem Satz? Der Satz garantiert nur lim xₙ ≤ lim yₙ (hier 0 ≤ 0, erfüllt). Die strikte Version lim xₙ &lt; lim yₙ ist eben NICHT garantiert.</p>
            </>,
            <>
              <p>Anderes Beispiel mit demselben Effekt:</p>
              <pre className="hint-code-block">{`xₙ = −1/n, yₙ = +1/n
−1/n < 1/n für alle n ≥ 1 (links negativ, rechts positiv) ✓
lim xₙ = 0 = lim yₙ ✓ (beide gehen gegen 0)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> aus xₙ &lt; yₙ schließen, dass lim xₙ &lt; lim yₙ → <strong>✅ Richtig:</strong> nur lim xₙ ≤ lim yₙ folgt; das „strikt" überträgt sich nicht auf den Grenzwert (Gegenbeispiel: 0 und 1/n).</li>
              <li><strong>❌ Falsch:</strong> ein Paar wählen, bei dem xₙ = yₙ für ein n gilt → <strong>✅ Richtig:</strong> es muss xₙ &lt; yₙ für ALLE n gelten; 0 &lt; 1/n ist für jedes n ≥ 1 echt erfüllt.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe für n = 1, 2, 3, dass 0 &lt; 1/n wirklich gilt, und dass 1/n trotzdem gegen denselben Grenzwert 0 wie die 0-Folge läuft. Frage: Warum kann der echte Abstand yₙ − xₙ = 1/n &gt; 0 für jedes n positiv sein und im Grenzwert trotzdem 0 werden?</p>,
          ),
          solution: (
            <>
              {'Zum Beispiel '}<M>{'(x_n) = (0,0,0,\\dots)'}</M>{', '}<M>{'(y_n) = \\left(\\frac{1}{n}\\right)'}</M>{'. (Es gilt '}<M>{'\\lim_{n\\to\\infty} x_n = 0 = \\lim_{n\\to\\infty} y_n'}</M>{'.)'}
            </>
          ),
        },
        {
          letter: 'd',
          text: 'Finden Sie jeweils Folgen (xₙ) ⊆ ℝ und (yₙ) ⊆ ℝ, so dass nachfolgende Eigenschaften erfüllt sind.\n\nDie Folge (xₙ) divergiert, aber die Folge (|xₙ|) konvergiert.',
          hint: h(
            <>
              <p>Der <span className="hint-em">Betrag</span> |x| ist der Abstand der Zahl x von 0, also die Zahl „ohne Vorzeichen": |−3| = 3, |+3| = 3, |0| = 0. Die Folge (|xₙ|) entsteht, indem man von jedem Glied das Vorzeichen wegnimmt.</p>
              <p>Eine Folge <span className="hint-em">divergiert</span>, wenn sie keinen einzigen Grenzwert hat. Ein typischer Fall: sie <span className="hint-em">oszilliert</span> (springt) zwischen zwei festen Werten hin und her und legt sich nie auf einen fest. Die Aufgabe widerlegt die naive Vermutung „wenn |xₙ| konvergiert, dann auch xₙ".</p>
              <p>Schlüssel: Wenn die Glieder zwar das Vorzeichen wechseln, aber immer denselben Betrag haben, ist (|xₙ|) konstant — und eine konstante Folge konvergiert sofort. Wichtig zum Verständnis: Nur im Sonderfall lim |xₙ| = 0 folgt zwingend xₙ → 0 (Abstand zu 0 geht gegen 0). Bei lim |xₙ| = c &gt; 0 kann xₙ zwischen +c und −c springen und divergieren.</p>
            </>,
            <>
              <p>So findet man ein Beispiel:</p>
              <pre className="hint-code-block">{`1) Folge soll im Vorzeichen springen, im Betrag konstant:
   xₙ = (−1)ⁿ = (1, −1, 1, −1, …)   [n ab 0]

2) Divergenz von (xₙ): die Glieder springen ewig
   zwischen +1 und −1 → kein eindeutiger Grenzwert
   → divergent ✓

3) Beträge bilden: |xₙ| = |(−1)ⁿ| = 1 für alle n
   → (|xₙ|) = (1, 1, 1, …) konstant → konvergiert gegen 1 ✓`}</pre>
              <p>Warum divergiert (xₙ), obwohl (|xₙ|) konvergiert? Beim Betrag verschwindet gerade die Information (das Vorzeichen), die das Springen verursacht. Konvergenz von |xₙ| sagt also i. A. nichts über xₙ.</p>
            </>,
            <>
              <p>Anderes Beispiel mit Betrag 2:</p>
              <pre className="hint-code-block">{`xₙ = (−2)·(−1)ⁿ = (−2, 2, −2, 2, …)
divergent (springt −2 ↔ 2);
|xₙ| = 2 konstant → konvergiert gegen 2 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „lim |xₙ| existiert ⟹ lim xₙ existiert" → <strong>✅ Richtig:</strong> das gilt nur bei lim |xₙ| = 0; bei lim |xₙ| = 1 kann xₙ = (−1)ⁿ trotzdem divergieren.</li>
              <li><strong>❌ Falsch:</strong> (−1)ⁿ konvergiert gegen 1, weil |(−1)ⁿ| = 1 → <strong>✅ Richtig:</strong> (−1)ⁿ selbst springt −1/+1 und hat keinen Grenzwert; nur der Betrag ist konstant 1.</li>
            </ul>,
            <p>Selbstkontrolle: Schreibe die ersten 4 Glieder von xₙ und von |xₙ| untereinander — springt die obere Zeile und steht die untere still? Frage: Warum folgt aus lim |xₙ| = 0 zwingend xₙ → 0, aber aus lim |xₙ| = 1 nicht xₙ → 1?</p>,
          ),
          solution: (
            <>
              {'Zum Beispiel '}<M>{'(x_n) = ((-1)^{n})'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a3',
      nr: 3,
      title: 'Grenzwerte von Folgen',
      referenz: ['folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>
            {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = '}
            <Frac n="3n² + 4n + 20" d="4n³ + 1000" />
            {'.'}
          </>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">rationale Folge</span> ist ein Bruch aus zwei <span className="hint-em">Polynomen</span> (Summen von Potenzen von n wie 3n² + 4n + 20). Der <span className="hint-em">Grad</span> eines Polynoms ist die höchste auftretende Potenz von n (Zähler: Grad 2, weil n² die höchste ist; Nenner: Grad 3, weil n³ die höchste ist).</p>
              <p>Grundtatsache für Grenzwerte: <span className="hint-em">c/nᵏ → 0</span> für jede feste Zahl c und jedes k ≥ 1, denn ein fester Zähler geteilt durch eine immer größere Potenz von n wird beliebig klein. Genauso 1/n → 0, 20/n² → 0 usw.</p>
              <p>Standardmethode: Im Zähler und im Nenner jeweils die <span className="hint-em">höchste Potenz des Nenners</span> (hier n³) ausklammern, dann kürzen. So entstehen lauter Terme c/nᵏ, die gegen 0 gehen. Es bleibt eine Faustregel: ist <span className="hint-em">Grad(Zähler) &lt; Grad(Nenner)</span>, so geht ein Faktor 1/n übrig und der Grenzwert ist 0.</p>
            </>,
            <>
              <p>So bestimmt man lim (3n²+4n+20)/(4n³+1000):</p>
              <pre className="hint-code-block">{`1) Grade vergleichen: Zähler Grad 2, Nenner Grad 3.
   Wegen 2 < 3 erwarten wir Grenzwert 0.

2) Höchste Nennerpotenz n³ in beiden ausklammern:
   Zähler: 3n²+4n+20 = n³·(3/n + 4/n² + 20/n³)
           (denn n³·3/n = 3n², n³·4/n² = 4n usw.)
   Nenner: 4n³+1000 = n³·(4 + 1000/n³)

3) Bruch hinschreiben und n³ kürzen — ABER der Zähler
   hat n² als höchste echte Potenz, sauberer so:
   = (1/n)·(3 + 4/n + 20/n²)/(4 + 1000/n³)

4) Grenzübergang n→∞:
   1/n → 0;  Klammer Zähler → 3;  Klammer Nenner → 4
   → 0 · (3/4) = 0

Grenzwert = 0.`}</pre>
              <p>Warum 0 und nicht 3/4? Der Faktor 1/n vor dem Bruch zieht alles auf 0 — er kommt daher, dass der Nenner einen Grad höher ist als der Zähler.</p>
            </>,
            <>
              <p>Anderes Beispiel (Grad 1 unter Grad 2): lim (5n+2)/(n²+1)</p>
              <pre className="hint-code-block">{`= n²(5/n + 2/n²) / n²(1 + 1/n²)
= (5/n + 2/n²)/(1 + 1/n²)
→ (0 + 0)/(1 + 0) = 0   (Grad 1 < Grad 2 → 0)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 3/4 (nur die führenden Koeffizienten 3 und 4 geteilt) → <strong>✅ Richtig:</strong> 3/4 gilt nur bei GLEICHEM Grad; hier Grad 2 &lt; 3, der übrige Faktor 1/n macht den Grenzwert 0.</li>
              <li><strong>❌ Falsch:</strong> die 1000 für „groß" halten und den Grenzwert beeinflussen lassen → <strong>✅ Richtig:</strong> 1000 ist fest; 1000/n³ → 0, die Konstante spielt im Grenzwert keine Rolle.</li>
            </ul>,
            <p>Selbstkontrolle: Setze ein großes n ein, z. B. n = 1000: Zähler ≈ 3·10⁶, Nenner ≈ 4·10⁹, Quotient ≈ 0,00075 — klein, passt zu Grenzwert 0. Frage: Woran sieht man am Grad von Zähler und Nenner sofort, ob der Grenzwert 0, eine Zahl ≠ 0 oder ∞ ist?</p>,
          ),
          solution: (
            <>
              <M>{'x_n = \\frac{3n^{2}+4n+20}{4n^{3}+1000} = \\frac{n^{2}\\left(3+\\frac{4}{n}+\\frac{20}{n^{2}}\\right)}{n^{3}\\left(4+\\frac{1000}{n^{3}}\\right)} = \\frac{1}{n}\\cdot\\frac{3+\\frac{4}{n}+\\frac{20}{n^{2}}}{4+\\frac{1000}{n^{3}}}'}</M>{'; somit '}<M>{'\\lim_{n\\to\\infty} x_n = 0\\cdot\\frac{3}{4} = 0'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: <>
            {'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = '}
            <Frac n="2n³ + 7n² + 12" d="−5n³ − n + 3" />
            {'.'}
          </>,
          hint: h(
            <>
              <p>Wieder eine <span className="hint-em">rationale Folge</span> (Polynom durch Polynom). Der <span className="hint-em">Grad</span> ist die höchste n-Potenz; hier sind Zähler (2n³+…) und Nenner (−5n³−…) beide vom <span className="hint-em">Grad 3</span>. Der <span className="hint-em">führende Koeffizient</span> ist die Zahl vor der höchsten Potenz: im Zähler +2 (vor n³), im Nenner −5 (vor n³) — das Vorzeichen gehört dazu!</p>
              <p>Grundtatsache: c/nᵏ → 0 für festes c und k ≥ 1. Methode: höchste Potenz n³ ausklammern und kürzen; alle Terme mit 1/n, 1/n² verschwinden. <span className="hint-em">Faustregel bei gleichem Grad</span>: Grenzwert = (führender Koeffizient Zähler)/(führender Koeffizient Nenner). Das Vorzeichen muss man mitnehmen.</p>
            </>,
            <>
              <p>So bestimmt man lim (2n³+7n²+12)/(−5n³−n+3):</p>
              <pre className="hint-code-block">{`1) Grade vergleichen: beide Grad 3 → gleicher Grad
   → Grenzwert = Verhältnis der führenden Koeffizienten.

2) n³ in Zähler und Nenner ausklammern:
   Zähler: 2n³+7n²+12 = n³·(2 + 7/n + 12/n³)
   Nenner: −5n³−n+3   = n³·(−5 − 1/n² + 3/n³)

3) n³ kürzt sich weg:
   = (2 + 7/n + 12/n³)/(−5 − 1/n² + 3/n³)

4) n→∞: alle Terme mit 1/n^k → 0:
   = (2 + 0 + 0)/(−5 − 0 + 0) = 2/(−5) = −2/5

Grenzwert = −2/5.`}</pre>
              <p>Warum −2/5 und nicht 2/5? Der führende Koeffizient des Nenners ist −5 (das Minus vor 5n³ gehört dazu) — also liefert 2 geteilt durch −5 ein negatives Ergebnis.</p>
            </>,
            <>
              <p>Anderes Beispiel (gleicher Grad 2): lim (3n²+1)/(6n²+n)</p>
              <pre className="hint-code-block">{`= n²(3 + 1/n²) / n²(6 + 1/n)
= (3 + 1/n²)/(6 + 1/n)
→ 3/6 = 1/2   (führende Koeffizienten 3 und 6)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Grenzwert = 2/5 (Minus des Nenners übersehen) → <strong>✅ Richtig:</strong> führender Koeffizient des Nenners ist −5, also 2/(−5) = −2/5.</li>
              <li><strong>❌ Falsch:</strong> wegen 7n² im Zähler einen anderen Grad annehmen → <strong>✅ Richtig:</strong> die höchste Potenz im Zähler ist n³ (Grad 3); 7n² ist niedriger und verschwindet beim Grenzübergang.</li>
            </ul>,
            <p>Selbstkontrolle: Setze n = 1000 ein: Zähler ≈ 2·10⁹, Nenner ≈ −5·10⁹, Quotient ≈ −0,4 = −2/5 ✓. Frage: Warum entscheidet bei gleichem Grad allein das Verhältnis der führenden Koeffizienten (mit Vorzeichen) über den Grenzwert?</p>,
          ),
          solution: (
            <>
              <M>{'x_n = \\frac{2n^{3}+7n^{2}+12}{-5n^{3}-n+3} = \\frac{n^{3}\\left(2+\\frac{7}{n}+\\frac{12}{n^{3}}\\right)}{n^{3}\\left(-5-\\frac{1}{n^{2}}+\\frac{3}{n^{3}}\\right)} = \\frac{2+\\frac{7}{n}+\\frac{12}{n^{3}}}{-5-\\frac{1}{n^{2}}+\\frac{3}{n^{3}}}'}</M>{'; somit '}<M>{'\\lim_{n\\to\\infty} x_n = -\\frac{2}{5}'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = (2 + '}<Frac n="3" d="n" />{')⁵.'}</>,
          hint: h(
            <>
              <p>Es gibt <span className="hint-em">Grenzwert-Rechenregeln</span>, mit denen man den Grenzwert „nach innen ziehen" darf, wenn die Einzelteile konvergieren:</p>
              <ul>
                <li><span className="hint-em">Summenregel</span>: lim (aₙ + bₙ) = lim aₙ + lim bₙ.</li>
                <li><span className="hint-em">Potenzregel</span>: lim (aₙ)ᵏ = (lim aₙ)ᵏ für festen Exponenten k. (Anschaulich: wenn aₙ gegen a strebt, strebt aₙ⁵ gegen a⁵.)</li>
              </ul>
              <p>Grundtatsache: <span className="hint-em">c/n → 0</span> für jede feste Zahl c (fester Zähler, immer größerer Nenner). Hier ist der Exponent 5 eine FESTE Zahl (nicht von n abhängig) — deshalb darf man die Potenzregel anwenden. Die innere Folge ist aₙ = 2 + 3/n.</p>
            </>,
            <>
              <p>So bestimmt man lim (2 + 3/n)⁵:</p>
              <pre className="hint-code-block">{`1) Innere Folge zuerst: aₙ = 2 + 3/n
   3/n → 0 (feste 3 durch wachsendes n)
   Summenregel: lim aₙ = 2 + 0 = 2

2) Potenz mit festem Exponenten 5 — Potenzregel:
   lim (aₙ)⁵ = (lim aₙ)⁵ = 2⁵

3) 2⁵ ausrechnen: 2·2·2·2·2 = 32

Grenzwert = 32.`}</pre>
              <p>Warum darf man so vorgehen? Weil der Exponent fest ist und die Basis konvergiert — dann gilt lim (Basisᵏ) = (lim Basis)ᵏ. (Bei einem mit n wachsenden Exponenten wäre das verboten, siehe Aufgabe e.)</p>
            </>,
            <>
              <p>Anderes Beispiel: lim (5 − 1/n)³</p>
              <pre className="hint-code-block">{`1/n → 0 → innere Folge 5 − 1/n → 5
lim (5 − 1/n)³ = 5³ = 125`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 3/n → 3 → <strong>✅ Richtig:</strong> 3/n → 0; eine feste Zahl geteilt durch immer größeres n wird beliebig klein.</li>
              <li><strong>❌ Falsch:</strong> lim (2+3/n)⁵ = 2 (die Potenz ⁵ vergessen) → <strong>✅ Richtig:</strong> erst Basis → 2, DANN hoch 5: 2⁵ = 32.</li>
            </ul>,
            <p>Selbstkontrolle: n = 10 000 → (2 + 0,0003)⁵ ≈ 2,0003⁵ ≈ 32,01, sehr nah an 32 ✓. Frage: Warum darf man hier lim und „hoch 5" vertauschen, und warum wäre dasselbe bei einem Exponenten, der mit n wächst (wie in Aufgabe e), nicht erlaubt?</p>,
          ),
          solution: (
            <>
              <M>{'x_n = \\left(2+\\underbrace{\\tfrac{3}{n}}_{\\to 0,\\, n\\to\\infty}\\right)^{5}'}</M>{'; somit '}<M>{'\\lim_{n\\to\\infty} x_n = 2^{5} = 32'}</M>
            </>
          ),
        },
        {
          letter: 'd',
          text: 'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = ²ⁿ√(2¹⁰⁰⁰).',
          hint: h(
            <>
              <p>Die <span className="hint-em">n-te Wurzel</span> ⁿ√a fragt: „Welche Zahl ergibt, n-mal mit sich selbst multipliziert, a?" Sie lässt sich als <span className="hint-em">Potenz mit Bruch-Exponent</span> schreiben: <span className="hint-em">ⁿ√a = a^(1/n)</span> und allgemein <span className="hint-em">ⁿ√(aᵐ) = a^(m/n)</span>. (Das folgt aus dem Potenzgesetz (a^(1/n))ᵐ = a^(m/n).)</p>
              <p>Achtung beim Index: Bei ²ⁿ√(2¹⁰⁰⁰) ist die 1000 ein <span className="hint-em">fester Exponent unter der Wurzel</span>, und der Wurzelgrad 2n wächst gegen ∞. Damit wird der Exponent 1000/(2n) = 500/n: feste Zahl durch wachsendes n. Grundtatsache: <span className="hint-em">c/n → 0</span> für festes c, also 500/n → 0. Und für jede Basis a &gt; 0 gilt <span className="hint-em">a⁰ = 1</span>.</p>
            </>,
            <>
              <p>So bestimmt man lim ²ⁿ√(2¹⁰⁰⁰):</p>
              <pre className="hint-code-block">{`1) Wurzel in Potenz umschreiben (ᵏ√(aᵐ) = a^(m/k), hier k = 2n):
   ²ⁿ√(2¹⁰⁰⁰) = 2^(1000/(2n)) = 2^(500/n)

2) Grenzwert des Exponenten: 500 ist fest, n → ∞
   → 500/n → 0

3) Potenzregel (Basis 2 fest, Exponent → 0):
   lim 2^(500/n) = 2^(lim 500/n) = 2⁰ = 1

Grenzwert = 1.`}</pre>
              <p>Warum nicht 2? Die 1000 sieht riesig aus, ist aber eine feste Zahl. Geteilt durch ein immer größeres n geht sie gegen 0, und 2⁰ = 1 — nicht 2.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim ⁿ√(7) (entspricht m = 1, a = 7)</p>
              <pre className="hint-code-block">{`ⁿ√7 = 7^(1/n); 1/n → 0; 7^0 = 1
Allgemein: ⁿ√c → 1 für jede feste Zahl c > 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim ²ⁿ√(2¹⁰⁰⁰) = 2 (als spiele die 1000 keine Rolle und blieb nur die 2 übrig) → <strong>✅ Richtig:</strong> 2^(1000/(2n)) = 2^(500/n) und 500/n → 0, also 2⁰ = 1.</li>
              <li><strong>❌ Falsch:</strong> 500/n → ∞ → <strong>✅ Richtig:</strong> 500 ist fest, n wächst; ein fester Zähler durch wachsenden Nenner geht gegen 0, nicht ∞.</li>
            </ul>,
            <p>Selbstkontrolle: n = 1000 → 2^(500/1000) = 2^0,5 = √2 ≈ 1,414; n = 10⁶ → 2^(0,0005) ≈ 1,00035 — die Folge sinkt Richtung 1 ✓. Frage: Warum geht 500/n gegen 0 (nicht ∞), und warum ist a⁰ = 1 für jede Basis a &gt; 0?</p>,
          ),
          solution: (
            <>
              <M>{'x_n = \\sqrt[2n]{2^{1000}} = 2^{\\frac{1000}{2n}} = 2^{\\frac{500}{n}} = \\sqrt[n]{2^{500}}'}</M>{'; somit '}<M>{'\\lim_{n\\to\\infty} x_n = 1'}</M>
            </>
          ),
        },
        {
          letter: 'e',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = ('}<Frac n="n+1" d="n" />{')ⁿ.'}</>,
          hint: h(
            <>
              <p>Die <span className="hint-em">Eulersche Zahl e ≈ 2,718…</span> ist über genau diesen Grenzwert definiert: <span className="hint-em">lim (1 + 1/n)ⁿ = e</span>. Diese Formel muss man als Standardgrenzwert kennen.</p>
              <p>Wichtig ist die Bruchzerlegung: <span className="hint-em">(n+1)/n = n/n + 1/n = 1 + 1/n</span> (man teilt jeden Summanden des Zählers durch n). Damit wird der Ausdruck ((n+1)/n)ⁿ genau zur Standardform (1 + 1/n)ⁿ.</p>
              <p>Achtung, das ist ein <span className="hint-em">unbestimmter Ausdruck vom Typ 1^∞</span>: die Basis 1 + 1/n strebt gegen 1, der Exponent n gegen ∞. Man darf NICHT „1 hoch unendlich = 1" rechnen — Basis und Exponent ändern sich gleichzeitig, und das Ergebnis ist gerade e (nicht 1).</p>
            </>,
            <>
              <p>So bestimmt man lim ((n+1)/n)ⁿ:</p>
              <pre className="hint-code-block">{`1) Basis umschreiben (Zähler aufspalten):
   (n+1)/n = n/n + 1/n = 1 + 1/n

2) Einsetzen:
   ((n+1)/n)ⁿ = (1 + 1/n)ⁿ

3) Standardgrenzwert direkt anwenden:
   lim (1 + 1/n)ⁿ = e

Grenzwert = e ≈ 2,718.`}</pre>
              <p>Warum nicht 1? Obwohl die Basis gegen 1 geht, wächst der Exponent n unbegrenzt. Beides zusammen (Typ 1^∞) ist „unbestimmt": das winzige Extra +1/n wird n-mal potenziert und summiert sich zu einem Effekt, der genau e ergibt.</p>
            </>,
            <>
              <p>Verwandtes Beispiel (zum Wiedererkennen der Form): lim ((n+2)/n)ⁿ</p>
              <pre className="hint-code-block">{`(n+2)/n = 1 + 2/n
Es gilt der erweiterte Standard: lim (1 + a/n)ⁿ = eᵃ
→ lim (1 + 2/n)ⁿ = e²
(für a = 1 ergibt das wieder genau e, wie in der Aufgabe)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> lim (1+1/n)ⁿ = 1 (weil 1+1/n → 1 und „1 hoch alles = 1") → <strong>✅ Richtig:</strong> Typ 1^∞ ist unbestimmt; der korrekte Grenzwert ist e ≈ 2,718, nicht 1.</li>
              <li><strong>❌ Falsch:</strong> (n+1)/n = 1 + n → <strong>✅ Richtig:</strong> nur der Zähler wird durch n geteilt: (n+1)/n = 1 + 1/n.</li>
            </ul>,
            <p>Selbstkontrolle: n = 1000 → (1,001)¹⁰⁰⁰ ≈ 2,7169, schon nah an e ≈ 2,71828 ✓. Frage: Warum ist 1^∞ ein unbestimmter Ausdruck und nicht einfach 1 — was „kämpft" hier gegeneinander?</p>,
          ),
          solution: (
            <>
              {'Erinnerung: '}<M>{'\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n} = e'}</M>{'.\n'}
              {'Es ist '}<M>{'x_n = \\left(\\frac{n+1}{n}\\right)^{n} = \\left(1+\\frac{1}{n}\\right)^{n}'}</M>{' und somit '}<M>{'\\lim_{n\\to\\infty} x_n = e'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'f',
          text: <>{'Bestimmen Sie den Grenzwert der Folge (xₙ) ⊆ ℝ, falls xₙ = (−1)ⁿ '}<Frac n="sin(n)cos(n)" d="3n³" />{'.'}</>,
          hint: h(
            <>
              <p>Eine <span className="hint-em">Nullfolge</span> ist eine Folge mit Grenzwert 0. Der <span className="hint-em">Einschnürungssatz</span> (auch Sandwich- oder Quetschsatz) sagt: Wenn man eine Folge xₙ betragsmäßig zwischen 0 und eine Nullfolge yₙ einsperren kann, also <span className="hint-em">0 ≤ |xₙ| ≤ yₙ mit yₙ → 0</span>, dann muss auch |xₙ| → 0 und damit xₙ → 0. (Anschaulich: wird der Abstand zu 0 von oben durch etwas erdrückt, das selbst gegen 0 geht, bleibt nichts übrig.)</p>
              <p>Schlüssel-Schranken: Sinus und Cosinus liegen immer zwischen −1 und +1, also <span className="hint-em">|sin(n)| ≤ 1</span> und <span className="hint-em">|cos(n)| ≤ 1</span>. Der Faktor (−1)ⁿ hat Betrag <span className="hint-em">|(−1)ⁿ| = 1</span>. Diese Faktoren kann man nach oben durch 1 abschätzen — man muss sin(n), cos(n) für ganzzahlige n NICHT konkret ausrechnen (das ginge auch nicht sinnvoll).</p>
            </>,
            <>
              <p>So bestimmt man lim (−1)ⁿ · sin(n)cos(n)/(3n³):</p>
              <pre className="hint-code-block">{`1) Betrag bilden und die Faktoren abschätzen:
   |xₙ| = |(−1)ⁿ| · |sin(n)| · |cos(n)| / (3n³)
   Mit |(−1)ⁿ|=1, |sin(n)|≤1, |cos(n)|≤1:
   |xₙ| ≤ (1·1·1)/(3n³) = 1/(3n³)

2) Einsperren (untere Schranke 0, da Betrag ≥ 0):
   0 ≤ |xₙ| ≤ 1/(3n³) =: yₙ

3) Obere Schranke ist Nullfolge:
   yₙ = 1/(3n³) → 0  (feste 1/3 durch n³ → ∞)

4) Einschnürungssatz: 0 und yₙ → 0 quetschen |xₙ|
   → lim |xₙ| = 0 → lim xₙ = 0

Grenzwert = 0.`}</pre>
              <p>Warum reicht das? Egal wie sin(n), cos(n) und (−1)ⁿ springen — ihr Betrag ist nie größer als 1, also wird der ganze Ausdruck vom Nenner 3n³ → ∞ auf 0 gedrückt.</p>
            </>,
            <>
              <p>Anderes Beispiel: lim sin(n)/n</p>
              <pre className="hint-code-block">{`0 ≤ |sin(n)/n| = |sin(n)|/n ≤ 1/n → 0
Einschnürungssatz → lim sin(n)/n = 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sin(n), cos(n) für jedes n einzeln ausrechnen wollen → <strong>✅ Richtig:</strong> das ist unnötig und unpraktisch; die Schranke |sin(n)|≤1, |cos(n)|≤1 genügt vollständig.</li>
              <li><strong>❌ Falsch:</strong> den Faktor (−1)ⁿ im Betrag stehen lassen → <strong>✅ Richtig:</strong> |(−1)ⁿ| = 1, fällt weg: |xₙ| = |sin(n)cos(n)|/(3n³) ≤ 1/(3n³).</li>
            </ul>,
            <p>Selbstkontrolle: Da |xₙ| ≤ 1/(3n³), ist z. B. für n = 10 schon |xₙ| ≤ 1/3000 ≈ 0,0003 — winzig, passt zu Grenzwert 0. Frage: Warum darf man im Einschnürungssatz die schwankenden Faktoren einfach durch ihre Maximalschranke 1 ersetzen, ohne den Grenzwert zu verfälschen?</p>,
          ),
          solution: (
            <>
              {'Da '}<M>{'\\sin(n),\\, \\cos(n) \\in [-1,1]'}</M>{' erhalten wir\n'}
              <M>{'0 \\le |x_n| = \\frac{|\\sin(n)\\cos(n)|}{3n^{3}} \\le \\frac{1}{3n^{3}} =: y_n'}</M>{'.\n'}
              {'Verwendung von '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{n^{k}} = 0'}</M>{' liefert mit den Rechenregeln für Folgen, dass '}<M>{'\\lim_{n\\to\\infty} y_n = 0'}</M>{'. Mit dem Einschnürungssatz folgt, dass '}<M>{'\\lim_{n\\to\\infty} |x_n| = 0'}</M>{'. Mit der Bemerkung zu Nullfolgen (Folie 124 der Vorlesung) folgt '}<M>{'\\lim_{n\\to\\infty} x_n = 0'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a4',
      nr: 4,
      title: 'Konvergenz mit ε-N-Definition (Wenn noch Zeit ist …)',
      referenz: ['folgen-konvergenz'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>
            {'Für n ∈ ℕ* sei xₙ = '}<Frac n="1" d="√n" />{'. Geben Sie zu ε = 10, ε = 1, ε = '}<Frac n="1" d="10" />{' und ε = '}<Frac n="1" d="10⁶" />{' jeweils ein N ∈ ℕ an, so dass |xₙ − 0| < ε für alle n ≥ N erfüllt ist.'}
          </>,
          hint: h(
            <>
              <p>Die <span className="hint-em">ε-N-Definition der Konvergenz</span> präzisiert „xₙ kommt der 0 beliebig nah": Zu jeder noch so kleinen Toleranz <span className="hint-em">ε &gt; 0</span> (Epsilon) muss es eine Schwelle <span className="hint-em">N</span> geben, ab der ALLE Glieder näher als ε an 0 liegen, also |xₙ − 0| &lt; ε für alle n ≥ N. Hier ist xₙ = 1/√n, und man soll zu vier konkreten ε jeweils ein passendes N angeben.</p>
              <p>Die Strategie: die Bedingung |1/√n − 0| &lt; ε nach n <span className="hint-em">auflösen</span>. Da 1/√n &gt; 0 ist, ist der Betrag einfach 1/√n. Umformen: 1/√n &lt; ε ⟺ √n &gt; 1/ε (Kehrwert bilden dreht „&lt;" zu „&gt;") ⟺ n &gt; 1/ε² (beide Seiten quadrieren). N muss eine <span className="hint-em">natürliche Zahl</span> mit N &gt; 1/ε² sein — und weil 1/√n mit wachsendem n FÄLLT, gilt die Bedingung dann automatisch für alle größeren n.</p>
            </>,
            <>
              <p>So bestimmt man N für jedes ε (Schwelle: n &gt; 1/ε²):</p>
              <pre className="hint-code-block">{`Umformung allgemein:
 1/√n < ε  ⟺  √n > 1/ε  ⟺  n > 1/ε²

ε = 10:     1/ε² = 1/100 = 0,01
            n > 0,01 gilt schon ab n = 1 → N = 1
ε = 1:      1/ε² = 1
            n > 1 → kleinste nat. Zahl ist N = 2
ε = 1/10:   1/ε² = 1/(1/100) = 100
            n > 100 → N = 101
ε = 1/10⁶:  1/ε² = (10⁶)² = 10¹²
            n > 10¹² → N = 10¹² + 1`}</pre>
              <p>Warum bei ε = 1/10 nicht N = 100? Bei n = 100 ist 1/√100 = 1/10 = ε — das ist NICHT echt kleiner als ε (gefordert ist strikt &lt;). Deshalb das nächste N = 101: 1/√101 ≈ 0,0995 &lt; 0,1 ✓. Man wählt N = ⌊1/ε²⌋ + 1, um echt darüber zu liegen.</p>
            </>,
            <>
              <p>Anderes Beispiel: xₙ = 1/n, ε = 1/100. Bedingung 1/n &lt; ε ⟺ n &gt; 1/ε.</p>
              <pre className="hint-code-block">{`1/n < 1/100 ⟺ n > 100 → N = 101
Probe: n=101 → 1/101 ≈ 0,0099 < 0,01 ✓
       n=100 → 1/100 = 0,01 = ε (nicht <), reicht nicht`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> N = 1/ε² setzen (z. B. 100 bei ε = 1/10) → <strong>✅ Richtig:</strong> bei n = 1/ε² gilt 1/√n = ε (Gleichheit), nicht &lt; ε; ein Schritt weiter: N = 1/ε² + 1.</li>
              <li><strong>❌ Falsch:</strong> beim Quadrieren von √n &gt; 1/ε zu n &gt; 1/ε rechnen → <strong>✅ Richtig:</strong> (1/ε)² = 1/ε², also n &gt; 1/ε² (das ε wird quadriert).</li>
            </ul>,
            <p>Selbstkontrolle: Setze für jedes gefundene N den Wert n = N in 1/√n ein — liegt das Ergebnis echt unter dem zugehörigen ε? Frage: Warum genügt es, EIN N zu finden (statt das kleinstmögliche), und warum sorgt das Fallen von 1/√n dafür, dass mit N auch alle n &gt; N die Bedingung erfüllen?</p>,
          ),
          solution: (
            <>
              {'Es ist '}<M>{'\\left|\\frac{1}{\\sqrt{n}}-0\\right| < \\varepsilon'}</M>{' genau dann, wenn '}<M>{'n > \\frac{1}{\\varepsilon^{2}}'}</M>{' gilt. In der Tabelle finden Sie nun zu gegebenem '}<M>{'\\varepsilon'}</M>{' jeweils ein mögliches '}<M>{'N \\in \\mathbb{N}^{*}'}</M>{', so dass '}<M>{'|x_n - 0| < \\varepsilon'}</M>{' für alle '}<M>{'n \\ge N'}</M>{' erfüllt ist.\n\n'}
              <M>{'\\varepsilon = 10:\\quad \\tfrac{1}{\\varepsilon^{2}} = \\tfrac{1}{100},\\quad N = 1'}</M>{'\n'}
              <M>{'\\varepsilon = 1:\\quad \\tfrac{1}{\\varepsilon^{2}} = 1,\\quad N = 2'}</M>{'\n'}
              <M>{'\\varepsilon = \\tfrac{1}{10}:\\quad \\tfrac{1}{\\varepsilon^{2}} = 100,\\quad N = 101'}</M>{'\n'}
              <M>{'\\varepsilon = \\tfrac{1}{10^{6}}:\\quad \\tfrac{1}{\\varepsilon^{2}} = 10^{12},\\quad N = 10^{12}+1'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: <>
            {'Zeigen Sie direkt mit der Definition von „Konvergenz gegen x", dass\n\n'}<M>{'\\lim_{n \\to \\infty} x_n = 0'}</M>{'\n\ngilt.\n\nHinweis: Sie dürfen ohne Beweis verwenden, dass die Wurzelfunktion monoton ist, das heißt, für x, y ∈ [0, ∞) mit x ≤ y gilt auch √x ≤ √y.'}
          </>,
          hint: h(
            <>
              <p>Ein <span className="hint-em">Konvergenzbeweis mit der Definition</span> bedeutet: man zeigt direkt die ε-N-Bedingung. „lim xₙ = 0" heißt per Definition: <span className="hint-em">Für jedes ε &gt; 0 existiert ein N ∈ ℕ, sodass |xₙ − 0| &lt; ε für alle n ≥ N</span>. Anders als in (a) ist ε nicht konkret gegeben, sondern <span className="hint-em">beliebig</span> — man muss zu einem allgemeinen ε ein N angeben und nachweisen, dass es funktioniert.</p>
              <p>Beweisgerüst: „Sei ε &gt; 0 beliebig. Wähle N ∈ ℕ mit N &gt; 1/ε². Dann gilt für alle n ≥ N: … &lt; ε." Dabei verkettet man <span className="hint-em">Ungleichungen</span>, jede mit kurzer Begründung. Hilfsmittel: die <span className="hint-em">Monotonie der Wurzel</span> (laut Hinweis: x ≤ y ⟹ √x ≤ √y). Daraus: n ≥ N ⟹ √n ≥ √N ⟹ 1/√n ≤ 1/√N (Kehrwert dreht ≤ um).</p>
            </>,
            <>
              <p>So führt man den Beweis (jeder Schritt mit Begründung):</p>
              <pre className="hint-code-block">{`Behauptung: lim 1/√n = 0.

Sei ε > 0 beliebig.
Wähle N ∈ ℕ mit N > 1/ε²    (möglich, da 1/ε² eine
                             feste reelle Zahl ist).

Für alle n ≥ N gilt dann:
 |1/√n − 0| = 1/√n          (da 1/√n > 0)
            ≤ 1/√N          (n ≥ N und Wurzel monoton
                             ⟹ √n ≥ √N ⟹ 1/√n ≤ 1/√N)
            < 1/√(1/ε²)      (N > 1/ε² ⟹ √N > 1/ε
                             ⟹ 1/√N < ε)
            = 1/(1/ε) = ε

Also |1/√n − 0| < ε für alle n ≥ N.
Da ε > 0 beliebig war, folgt lim 1/√n = 0.  □`}</pre>
              <p>Der Kern: aus N &gt; 1/ε² folgt √N &gt; 1/ε (Wurzel ziehen, beide Seiten positiv), und damit 1/√N &lt; ε. Das □ markiert das Beweisende.</p>
            </>,
            <>
              <p>Analoges Beweismuster für lim 1/n = 0:</p>
              <pre className="hint-code-block">{`Sei ε > 0. Wähle N ∈ ℕ mit N > 1/ε.
Für n ≥ N: |1/n − 0| = 1/n ≤ 1/N < ε
(1/N < ε, da N > 1/ε). Also lim 1/n = 0. □`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Ungleichungen ohne Begründung aneinanderreihen → <strong>✅ Richtig:</strong> jeder Schritt braucht ein „weil": „n ≥ N und Wurzel monoton ⟹ 1/√n ≤ 1/√N" und „N &gt; 1/ε² ⟹ 1/√N &lt; ε".</li>
              <li><strong>❌ Falsch:</strong> N := 1/ε² setzen → <strong>✅ Richtig:</strong> N muss eine natürliche Zahl sein und 1/ε² ist meist keine; wähle N := ⌊1/ε²⌋ + 1 oder einfach „ein N ∈ ℕ mit N &gt; 1/ε²".</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe, dass jede &lt;- oder ≤-Stufe in deiner Kette eine Begründung trägt und am Ende wirklich „&lt; ε" steht. Frage: Warum muss ε im Beweis BELIEBIG (nicht konkret) sein, und an welcher Stelle wird die Monotonie der Wurzel gebraucht?</p>,
          ),
          solution: (
            <>
              {'Behauptung: '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{\\sqrt{n}} = 0'}</M>{'.\n\n'}
              {'Beweis:\n'}
              {'Sei '}<M>{'\\varepsilon > 0'}</M>{' beliebig. Sei '}<M>{'N \\in \\mathbb{N}'}</M>{' so, dass '}<M>{'N > \\frac{1}{\\varepsilon^{2}}'}</M>{'. Dann gilt für alle '}<M>{'n \\ge N'}</M>{'\n'}
              <M>{'\\left|\\frac{1}{\\sqrt{n}}-0\\right| = \\frac{1}{\\sqrt{n}} \\overset{\\text{Wurzel monoton}}{\\le} \\frac{1}{\\sqrt{N}} < \\frac{1}{\\sqrt{\\frac{1}{\\varepsilon^{2}}}} = \\varepsilon'}</M>{'.\n\n'}
              {'Somit ist '}<M>{'\\lim_{n\\to\\infty}\\frac{1}{\\sqrt{n}} = 0'}</M>{'. □'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b7a5',
      nr: 5,
      title: 'Geometrische Summenformel (Wenn noch Zeit ist …)',
      referenz: ['geometrische-summenformel'],
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Bestimmen Sie mit Hilfe der geometrischen Summenformel (siehe Kapitel II.1) folgende Summen: '}<br /><M>{'\\sum_{k=0}^{5}'}</M>{' ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Das Zeichen <span className="hint-em">Σ (Sigma)</span> ist eine Kurzschreibweise für eine Summe. <span className="hint-em">Σ(k=0 bis 5) qᵏ</span> heißt: setze für k nacheinander 0, 1, 2, 3, 4, 5 ein und addiere alles: q⁰ + q¹ + q² + q³ + q⁴ + q⁵. Eine solche Summe von Potenzen mit fester Basis q heißt <span className="hint-em">geometrische Summe</span>.</p>
              <p>Statt alle Glieder einzeln zu addieren, gibt es die <span className="hint-em">geometrische Summenformel</span>:</p>
              <pre className="hint-code-block">{`Σ(k=0 bis n) qᵏ = (1 − q^(n+1)) / (1 − q)   für q ≠ 1`}</pre>
              <p>Wichtig: Der Exponent oben ist <span className="hint-em">n+1</span> (eins mehr als die obere Grenze n), weil die Summe n+1 Glieder hat (k = 0 bis n). Hier ist die Basis q = 1/2 und die obere Grenze n = 5. Beim Schluss braucht man: <span className="hint-em">durch einen Bruch teilen = mit dem Kehrwert multiplizieren</span>.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=0 bis 5) (1/2)ᵏ:</p>
              <pre className="hint-code-block">{`1) q und n ablesen: q = 1/2, n = 5.

2) Formel einsetzen (Exponent n+1 = 6!):
   = (1 − (1/2)⁶) / (1 − 1/2)

3) Zähler: (1/2)⁶ = 1/64, also 1 − 1/64 = 63/64
   Nenner: 1 − 1/2 = 1/2

4) Bruch durch Bruch:
   (63/64) / (1/2) = (63/64) · 2   (Kehrwert von 1/2 ist 2)
   = 126/64 = 63/32

Ergebnis = 63/32.`}</pre>
              <p>Warum Exponent 6 und nicht 5? Die Summe hat die Glieder k = 0,1,2,3,4,5 — das sind 6 Stück, und die Formel verlangt q^(n+1) = (1/2)⁶.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren (gemeinsamer Nenner 32):</p>
              <pre className="hint-code-block">{`1 + 1/2 + 1/4 + 1/8 + 1/16 + 1/32
= 32/32 + 16/32 + 8/32 + 4/32 + 2/32 + 1/32
= 63/32 ✓ (stimmt mit der Formel überein)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Exponent n = 5 statt n+1 = 6: (1−(1/2)⁵)/(1−1/2) → <strong>✅ Richtig:</strong> die Formel hat q^(n+1); bei n = 5 ist der Exponent 6.</li>
              <li><strong>❌ Falsch:</strong> (63/64)/(1/2) = 63/128 → <strong>✅ Richtig:</strong> durch 1/2 teilen = mal 2: (63/64)·2 = 63/32.</li>
            </ul>,
            <p>Selbstkontrolle: Vergleiche dein Formel-Ergebnis 63/32 mit der direkten Summe — gleich? Frage: Warum steht in der Summenformel q^(n+1) (und nicht qⁿ), wenn die Summe von k = 0 bis n läuft?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=0}^{5} \\left(\\frac{1}{2}\\right)^{k} = \\frac{1-\\left(\\frac{1}{2}\\right)^{6}}{1-\\frac{1}{2}} = \\frac{1-\\frac{1}{64}}{\\frac{1}{2}} = \\frac{\\frac{63}{64}}{\\frac{1}{2}} = \\frac{63}{32}'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Bestimmen Sie: '}<M>{'\\sum_{k=1}^{5}'}</M>{' ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Diese Summe ist fast wie in (a), beginnt aber bei <span className="hint-em">k = 1</span> statt k = 0 — es fehlt also genau das erste Glied (das mit k = 0). Allgemeines Prinzip: Eine Summe, die später startet, ist die volle Summe <span className="hint-em">minus die weggelassenen Anfangsglieder</span>.</p>
              <p>Konkret: Σ(k=1 bis 5) = Σ(k=0 bis 5) − (Glied bei k = 0). Das k=0-Glied ist <span className="hint-em">(1/2)⁰</span>. Merke: <span className="hint-em">jede Zahl (außer 0) hoch 0 ist 1</span>, also (1/2)⁰ = 1.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=1 bis 5) (1/2)ᵏ:</p>
              <pre className="hint-code-block">{`1) Ergebnis aus (a) übernehmen:
   Σ(k=0 bis 5) (1/2)ᵏ = 63/32

2) Das fehlende k=0-Glied bestimmen:
   (1/2)⁰ = 1

3) Abziehen:
   Σ(k=1 bis 5) = 63/32 − 1 = 63/32 − 32/32 = 31/32

Ergebnis = 31/32.`}</pre>
              <p>Warum abziehen und nicht neu rechnen? (a) ist schon erledigt; nur das eine fehlende Glied k=0 wegzunehmen ist der kürzeste Weg.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren (Nenner 32):</p>
              <pre className="hint-code-block">{`1/2 + 1/4 + 1/8 + 1/16 + 1/32
= 16/32 + 8/32 + 4/32 + 2/32 + 1/32 = 31/32 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (1/2)⁰ = 0 → <strong>✅ Richtig:</strong> alles hoch 0 ist 1 (außer 0⁰); (1/2)⁰ = 1, dieser Wert wird abgezogen.</li>
              <li><strong>❌ Falsch:</strong> (1/2)⁰ = 1/2 → <strong>✅ Richtig:</strong> der Exponent 0 (nicht 1) ergibt 1, nicht die Basis 1/2.</li>
            </ul>,
            <p>Selbstkontrolle: 31/32 + 1 = 63/32 = Ergebnis aus (a)? Ja ✓. Frage: Warum ist (1/2)⁰ = 1 und nicht 0, und wie hängt diese Summe über genau ein Glied mit (a) zusammen?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} = \\sum_{k=0}^{5} \\left(\\frac{1}{2}\\right)^{k} - \\left(\\frac{1}{2}\\right)^{0} = \\frac{63}{32} - 1 = \\frac{31}{32}'}</M>
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'Bestimmen Sie: '}<M>{'\\sum_{k=2}^{5}'}</M>{' ('}<Frac n="1" d="2" />{')ᵏ'}</>,
          hint: h(
            <>
              <p>Wieder dasselbe Prinzip wie in (b), nur startet die Summe jetzt bei <span className="hint-em">k = 2</span>. Es fehlen also ZWEI Anfangsglieder: das bei k = 0 und das bei k = 1. Allgemeine Regel: <span className="hint-em">Σ(k=m bis n) = Σ(k=0 bis n) − Σ(k=0 bis m−1)</span> — die volle Summe minus alle übersprungenen Anfangsglieder.</p>
              <p>Hier sind die zwei fehlenden Glieder (1/2)⁰ = 1 und (1/2)¹ = 1/2.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=2 bis 5) (1/2)ᵏ:</p>
              <pre className="hint-code-block">{`1) Ergebnis aus (a): Σ(k=0 bis 5) (1/2)ᵏ = 63/32

2) Fehlende Anfangsglieder (k=0 und k=1):
   (1/2)⁰ = 1   und   (1/2)¹ = 1/2

3) Beide abziehen (gemeinsamer Nenner 32):
   63/32 − 1 − 1/2
   = 63/32 − 32/32 − 16/32
   = (63 − 32 − 16)/32 = 15/32

Ergebnis = 15/32.`}</pre>
              <p>Warum zwei Glieder? Weil die Summe erst bei k = 2 beginnt, sind k = 0 UND k = 1 nicht dabei — beide müssen weg.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren (Nenner 32):</p>
              <pre className="hint-code-block">{`1/4 + 1/8 + 1/16 + 1/32
= 8/32 + 4/32 + 2/32 + 1/32 = 15/32 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur k=0 abziehen → 31/32 → <strong>✅ Richtig:</strong> bei Start k=2 fehlen k=0 UND k=1; abziehen 1 und 1/2 → 15/32.</li>
              <li><strong>❌ Falsch:</strong> (1/2)¹ = 1 → <strong>✅ Richtig:</strong> (1/2)¹ = 1/2 (Exponent 1 ergibt die Basis selbst).</li>
            </ul>,
            <p>Selbstkontrolle: 15/32 + 1 + 1/2 = 15/32 + 48/32 = 63/32 = Ergebnis aus (a)? Ja ✓. Frage: Wie viele Anfangsglieder muss man abziehen, wenn eine Summe bei k = m statt k = 0 beginnt, und warum genau diese?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=2}^{5} \\left(\\frac{1}{2}\\right)^{k} = \\sum_{k=0}^{5} \\left(\\frac{1}{2}\\right)^{k} - \\left(\\frac{1}{2}\\right)^{0} - \\left(\\frac{1}{2}\\right)^{1} = \\frac{63}{32} - 1 - \\frac{1}{2} = \\frac{15}{32}'}</M>
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'Bestimmen Sie: '}<M>{'\\sum_{k=0}^{10} (-1)^k'}</M></>,
          hint: h(
            <>
              <p>Hier ist die Basis <span className="hint-em">q = −1</span>: Σ(k=0 bis 10)(−1)ᵏ = (−1)⁰ + (−1)¹ + … + (−1)¹⁰ = 1 − 1 + 1 − 1 + … . Es gilt die <span className="hint-em">geometrische Summenformel</span> Σ(k=0 bis n) qᵏ = (1 − q^(n+1))/(1 − q), und sie ist gültig, weil q = −1 ≠ 1 ist.</p>
              <p>Schlüssel ist die Potenz <span className="hint-em">(−1)^Exponent</span>: sie ist <span className="hint-em">+1, wenn der Exponent gerade</span> ist, und <span className="hint-em">−1, wenn er ungerade</span> ist. (Gerade viele Minus heben sich paarweise auf, ungerade viele lassen ein Minus übrig.) Hier ist n = 10, also Exponent n+1 = 11 — ungerade.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=0 bis 10) (−1)ᵏ:</p>
              <pre className="hint-code-block">{`1) q = −1, n = 10. Formel:
   = (1 − (−1)^(10+1)) / (1 − (−1))

2) Exponent n+1 = 11 ist ungerade → (−1)¹¹ = −1
   Nenner: 1 − (−1) = 1 + 1 = 2

3) Einsetzen:
   = (1 − (−1)) / 2 = (1 + 1)/2 = 2/2 = 1

Ergebnis = 1.`}</pre>
              <p>Warum 1? Es gibt 11 Glieder (k = 0…10): 6-mal +1 (gerade k) und 5-mal −1 (ungerade k); 6 − 5 = 1. Der zusätzliche +1-Term bleibt übrig.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren:</p>
              <pre className="hint-code-block">{`1 − 1 + 1 − 1 + 1 − 1 + 1 − 1 + 1 − 1 + 1
Paare (1−1) ergeben 0; es bleiben 5 Paare = 0
plus der erste +1-Term → Summe = 1 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−1)¹¹ = +1 (für gerade gehalten) → <strong>✅ Richtig:</strong> 11 ist ungerade, also (−1)¹¹ = −1; Zähler 1 − (−1) = 2.</li>
              <li><strong>❌ Falsch:</strong> Nenner 1 − (−1) = 0 → <strong>✅ Richtig:</strong> 1 − (−1) = 1 + 1 = 2 (Minus vor Minus = Plus).</li>
            </ul>,
            <p>Selbstkontrolle: Zähle die +1- und −1-Glieder (6 gegen 5) — Differenz 1, passt zum Formel-Ergebnis. Frage: Wann ist (−1)^m gleich +1 und wann −1, und warum entscheidet die Parität (gerade/ungerade) des Exponenten?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=0}^{10} (-1)^{k} = \\frac{1-(-1)^{11}}{1-(-1)} = \\frac{1-(-1)}{1-(-1)} = 1'}</M>
            </>
          ),
        },
        {
          letter: 'e',
          text: <>{'Bestimmen Sie: '}<M>{'\\sum_{k=0}^{11} (-1)^k'}</M></>,
          hint: h(
            <>
              <p>Wie in (d), aber jetzt mit oberer Grenze <span className="hint-em">n = 11</span> statt 10 — also ein Glied mehr. Wieder gilt die geometrische Summenformel Σ(k=0 bis n) qᵏ = (1 − q^(n+1))/(1 − q) mit q = −1 ≠ 1. Entscheidend ist erneut die Parität: <span className="hint-em">(−1)^Exponent = +1 für geraden, −1 für ungeraden Exponenten</span>. Hier ist der Exponent n+1 = 12 — gerade. Schon eine Stelle weiter als (d) kippt das Ergebnis.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=0 bis 11) (−1)ᵏ:</p>
              <pre className="hint-code-block">{`1) q = −1, n = 11. Formel:
   = (1 − (−1)^(11+1)) / (1 − (−1))

2) Exponent n+1 = 12 ist gerade → (−1)¹² = +1
   Nenner: 1 − (−1) = 2

3) Einsetzen:
   = (1 − 1) / 2 = 0/2 = 0

Ergebnis = 0.`}</pre>
              <p>Warum 0 (und nicht 1 wie in d)? Jetzt sind es 12 Glieder: 6-mal +1 und 6-mal −1; sie heben sich vollständig paarweise auf. Bei einer geraden Glieder-Anzahl bleibt nichts übrig.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren:</p>
              <pre className="hint-code-block">{`(1−1) + (1−1) + (1−1) + (1−1) + (1−1) + (1−1)
= 0 + 0 + 0 + 0 + 0 + 0 = 0 ✓ (6 vollständige Paare)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (−1)¹² = −1 (für ungerade gehalten) → <strong>✅ Richtig:</strong> 12 ist gerade, (−1)¹² = +1; Zähler 1 − 1 = 0.</li>
              <li><strong>❌ Falsch:</strong> dasselbe Ergebnis wie (d) erwarten → <strong>✅ Richtig:</strong> ein Glied mehr (gerade Anzahl) macht aus 1 nun 0; die Parität der oberen Grenze entscheidet.</li>
            </ul>,
            <p>Selbstkontrolle: Bei gerader oberer Grenze n=10 → Summe 1, bei ungerader n=11 → Summe 0 — erkennst du das Muster (Summe = 1 falls n gerade, 0 falls n ungerade)? Frage: Warum hebt sich die Summe bei einer geraden Anzahl von ±1-Gliedern komplett auf, bei einer ungeraden aber nicht?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=0}^{11} (-1)^{k} = \\frac{1-(-1)^{12}}{1-(-1)} = \\frac{1-1}{2} = 0'}</M>
            </>
          ),
        },
        {
          letter: 'f',
          text: <>{'Bestimmen Sie: '}<M>{'\\sum_{k=0}^{2} 3^k'}</M></>,
          hint: h(
            <>
              <p>Jetzt ist die Basis <span className="hint-em">q = 3 &gt; 1</span>: Σ(k=0 bis 2) 3ᵏ = 3⁰ + 3¹ + 3². Es gilt dieselbe <span className="hint-em">geometrische Summenformel</span> Σ(k=0 bis n) qᵏ = (1 − q^(n+1))/(1 − q), gültig weil q = 3 ≠ 1.</p>
              <p>Zwei Stolpersteine: (1) Der Exponent oben ist <span className="hint-em">n+1</span> (hier n = 2, also 3), nicht n. (2) Weil q &gt; 1 ist, wird <span className="hint-em">1 − q negativ</span> (1 − 3 = −2) und auch der Zähler negativ — das Ergebnis wird trotzdem positiv, weil <span className="hint-em">negativ geteilt durch negativ = positiv</span> ist. Vorzeichen also sorgfältig führen.</p>
            </>,
            <>
              <p>So berechnet man Σ(k=0 bis 2) 3ᵏ:</p>
              <pre className="hint-code-block">{`1) q = 3, n = 2. Formel:
   = (1 − 3^(2+1)) / (1 − 3)

2) Exponent n+1 = 3: 3³ = 27
   Nenner: 1 − 3 = −2 (negativ!)

3) Einsetzen:
   = (1 − 27) / (−2) = (−26) / (−2) = 13
   (negativ geteilt durch negativ → positiv)

Ergebnis = 13.`}</pre>
              <p>Warum der Exponent 3? Weil q^(n+1) gilt und n = 2 ist; und das Minus im Nenner (1 − 3) gehört dazu, sonst stimmt das Vorzeichen nicht.</p>
            </>,
            <>
              <p>Probe durch direktes Aufaddieren:</p>
              <pre className="hint-code-block">{`3⁰ + 3¹ + 3² = 1 + 3 + 9 = 13 ✓`}</pre>
              <p>Anderes Beispiel: Σ(k=0 bis 3) 2ᵏ = (1 − 2⁴)/(1 − 2) = (1 − 16)/(−1) = 15 (= 1+2+4+8).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1 − 3 = 2 (Vorzeichen vergessen) → <strong>✅ Richtig:</strong> 1 − 3 = −2; dann (1 − 27)/(−2) = (−26)/(−2) = 13.</li>
              <li><strong>❌ Falsch:</strong> Exponent n = 2 statt n+1 = 3: 3² = 9 → <strong>✅ Richtig:</strong> q^(n+1) = 3³ = 27.</li>
            </ul>,
            <p>Selbstkontrolle: Vergleiche Formel-Ergebnis 13 mit der direkten Summe 1+3+9 = 13. Frage: Warum ist das Ergebnis positiv, obwohl Zähler (1−27) und Nenner (1−3) beide negativ sind, und warum ist der Exponent n+1?</p>,
          ),
          solution: (
            <>
              <M>{'\\sum_{k=0}^{2} 3^{k} = \\frac{1-3^{3}}{1-3} = \\frac{1-27}{-2} = \\frac{-26}{-2} = 13'}</M>
            </>
          ),
        },
      ],
    },
  ],
}
