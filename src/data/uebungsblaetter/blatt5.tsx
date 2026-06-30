import type { MatheBlatt } from '../../types'
import { h } from './shared'
import FunctionPlot from '../../components/FunctionPlot'

export const blatt5: MatheBlatt = {
  id: 'blatt5',
  nr: '5',
  titel: 'Relationen, Funktionen, Abzählbarkeit',
  aufgaben: [
    {
      id: 'b5a1',
      nr: 1,
      title: 'Graph einer Funktion',
      referenz: ['funktionen-eigenschaften', 'relationen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℤ → ℕ,  z ↦ |z|\n\ngegeben?\n\n(i)   ℤ × ℕ\n(ii)  {(−n, n) : n ∈ ℕ} ∪ {(n, n) : n ∈ ℕ*}\n(iii) {(z, |z|) : z ∈ ℤ}',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Funktion</span> f : A → B ordnet jedem Element x der <span className="hint-em">Definitionsmenge</span> A (links vom Pfeil) genau ein Element f(x) der <span className="hint-em">Zielmenge</span> B (rechts vom Pfeil) zu. Die Schreibweise „z ↦ |z|" (gelesen „z wird abgebildet auf |z|") nennt die <span className="hint-em">Abbildungsvorschrift</span>: was mit dem Input passiert.</p>
              <p>Symbole: ℤ = ganze Zahlen {'{…,−2,−1,0,1,2,…}'}, ℕ = natürliche Zahlen {'{0,1,2,…}'} (hier mit 0), ℕ* = ℕ ohne 0 = {'{1,2,3,…}'}. Der <span className="hint-em">Betrag</span> |z| macht eine Zahl „positiv": |−3| = 3, |3| = 3, |0| = 0.</p>
              <p>Der <span className="hint-em">Graph</span> von f ist die Menge ALLER Paare (Input, Output): Graph(f) = {'{(x, f(x)) : x ∈ A}'}. Lies das als „die Menge aller (x, f(x)), wobei x die ganze Definitionsmenge A durchläuft". Für f : ℤ → ℕ, z ↦ |z| ist also Graph(f) = {'{(z, |z|) : z ∈ ℤ}'}.</p>
              <p><span className="hint-em">A × B</span> (kartesisches Produkt) ist die Menge ALLER möglichen Paare (a, b) mit a ∈ A und b ∈ B — ohne jede Bedingung, die a und b verknüpft. Eine Kandidatenmenge ist genau dann der Graph, wenn sie dieselben Paare enthält wie Graph(f): kein Paar zu viel, kein Paar zu wenig.</p>
            </>,
            <>
              <p>So prüft man die drei Kandidaten für f : ℤ → ℕ, z ↦ |z| (Graph = {'{(z, |z|) : z ∈ ℤ}'}):</p>
              <pre className="hint-code-block">{`(i) ℤ × ℕ = alle Paare (z, n) mit z∈ℤ, n∈ℕ.
    Test „enthält ein falsches Paar?":
    (1, 5) ∈ ℤ × ℕ, aber f(1) = |1| = 1 ≠ 5.
    → (1,5) liegt NICHT auf dem Graphen → zu groß → NEIN.

(ii) {(−n, n) : n∈ℕ} ∪ {(n, n) : n∈ℕ*}
    Idee: jeden Input z∈ℤ einmal abdecken, mit Output |z|.
    z < 0: schreibe z = −n mit n∈ℕ* → Paar (−n, n) = (z, |z|) ✓
    z = 0: n=0 in erster Menge → (−0, 0) = (0, 0) = (0, |0|) ✓
    z > 0: schreibe z = n mit n∈ℕ* → Paar (n, n) = (z, |z|) ✓
    Jeder Output ist |z| (immer ≥ 0) → kein falsches Paar.
    → genau alle Graph-Paare → JA.

(iii) {(z, |z|) : z∈ℤ}
    Das ist Wort für Wort die Definition von Graph(f).
    → JA.`}</pre>
              <p>Warum reicht „enthält alle richtigen Paare" nicht? Eine Menge muss AUCH alle falschen weglassen. ℤ × ℕ enthält zwar (1,1) (richtig), aber auch (1,5) (falsch) — deshalb ist sie nicht der Graph.</p>
            </>,
            <>
              <p>Anderes Beispiel: f : ℕ → ℕ, n ↦ 2n (Verdopplung). Graph(f) = {'{(n, 2n) : n∈ℕ}'} = {'{(0,0),(1,2),(2,4),…}'}.</p>
              <pre className="hint-code-block">{`Kandidat ℕ × ℕ?  (1, 7) ∈ ℕ×ℕ, aber f(1)=2≠7 → zu groß → NEIN
Kandidat {(k/2, k) : k gerade}?
   k=4 → (2, 4); k=6 → (3,6) … das ist {(n,2n)} mit n=k/2
   → Umbenennung n=k/2 liefert genau Graph(f) → JA
Kandidat {(n, 2n) : n≥1}?  fehlt (0,0) → zu klein → NEIN`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℤ × ℕ als Graph angeben, weil „alle Inputs ℤ und alle Outputs ℕ vorkommen" → <strong>✅ Richtig:</strong> ℤ × ℕ enthält JEDE Kombination, z.B. (1,5); aber f(1)=|1|=1≠5. Der Graph koppelt Output an Input (zweite Komponente = |erste|), das Produkt tut das nicht.</li>
              <li><strong>❌ Falsch:</strong> Bei (ii) den Fall z=0 vergessen → <strong>✅ Richtig:</strong> z=0 muss als Paar (0,0) vorkommen; mit n=0 in {'{(−n,n):n∈ℕ}'} ist (−0,0)=(0,0) enthalten ✓ (deshalb ist links ℕ inkl. 0 wichtig, rechts ℕ* ohne 0, sonst gäbe es (0,0) doppelt — schadet aber als Menge nicht).</li>
              <li><strong>❌ Falsch:</strong> (ii) ablehnen, weil es „komisch in zwei Teilen" geschrieben ist → <strong>✅ Richtig:</strong> Eine Menge in zwei Hälften zu zerlegen (∪ = Vereinigung) ist erlaubt; entscheidend ist nur, welche Paare am Ende drin sind.</li>
            </ul>,
            <p>Selbstkontrolle: Setze z=−3 ein. Liegt (−3, 3) in jedem „Ja"-Kandidaten? In (ii): −3=−n mit n=3 → (−3,3) ✓; in (iii): (−3,|−3|)=(−3,3) ✓; in ℤ×ℕ liegt es auch, aber ℤ×ℕ enthält zusätzlich falsche Paare. Frage: Warum reicht es nicht, dass eine Menge alle RICHTIGEN Paare enthält — welche zweite Bedingung (über falsche Paare) muss zusätzlich gelten?</p>,
          ),
          solution: '(i)  nein – ℤ × ℕ enthält Paare wie (1, 5), die nicht auf dem Graph liegen.\n(ii) ja   – für z < 0: (−n, n); für z = 0: (0, 0) ∈ erste Menge; für z > 0: (n, n) ∈ zweite Menge.\n(iii) ja  – exakt die mengentheoretische Definition des Graphen von f.',
        },
        {
          letter: 'b',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℝ → ℝ,  x ↦ x − 1\n\ngegeben?\n\n(i)   ℝ × ℝ\n(ii)  {(x + 1, x) : x ∈ ℝ}\n(iii) {(x, x − 1) : x ∈ ℝ}',
          hint: h(
            <>
              <p>Wie in (a): Der <span className="hint-em">Graph</span> einer Funktion f : A → B ist Graph(f) = {'{(x, f(x)) : x ∈ A}'} — die Menge aller Paare (Input, Output). Hier ist f : ℝ → ℝ, x ↦ x−1, also Graph(f) = {'{(x, x−1) : x ∈ ℝ}'}. ℝ = reelle Zahlen (alle Zahlen der Zahlengerade, auch Kommazahlen).</p>
              <p>Wichtig: Der Buchstabe im Mengenausdruck ist eine <span className="hint-em">gebundene (stumme) Variable</span> — ein reiner Platzhalter. Man darf ihn umbenennen, ohne die Menge zu ändern: {'{(x, x−1) : x∈ℝ}'} ist dieselbe Menge wie {'{(t, t−1) : t∈ℝ}'}. Genau wie „die Menge aller Quadrate n²" dasselbe ist wie „die Menge aller Quadrate m²".</p>
              <p><span className="hint-em">Substitution (Umbenennung des Laufparameters)</span>: Sieht eine Kandidatenmenge anders aus, kann man eine neue Variable einführen und damit prüfen, ob sich dieselbe Standardform {'{(t, t−1)}'} ergibt. Das ist die wichtigste Technik bei „verschoben aussehenden" Mengen.</p>
            </>,
            <>
              <p>So prüft man die drei Kandidaten für Graph(f) = {'{(x, x−1) : x∈ℝ}'}:</p>
              <pre className="hint-code-block">{`(i) ℝ × ℝ = alle Paare reeller Zahlen, ohne Bindung.
    (0, 5) ∈ ℝ×ℝ, aber f(0) = 0−1 = −1 ≠ 5.
    → falsches Paar enthalten → zu groß → NEIN.

(ii) {(x+1, x) : x∈ℝ}
    Substitution: nenne die erste Komponente t, also t = x+1.
    Dann ist x = t−1, und das Paar (x+1, x) = (t, t−1).
    Läuft x durch ganz ℝ, läuft t = x+1 ebenfalls durch ganz ℝ.
    → {(x+1, x) : x∈ℝ} = {(t, t−1) : t∈ℝ} = Graph(f) → JA.

(iii) {(x, x−1) : x∈ℝ}
    Das ist exakt die Definition von Graph(f). → JA.`}</pre>
              <p>Kern von (ii): Die Paare (x+1, x) haben die Form (zweite Komponente = erste − 1) — denn x = (x+1) − 1. Genau das verlangt die Funktionsvorschrift y = x − 1.</p>
            </>,
            <>
              <p>Anderes Beispiel: f : ℝ → ℝ, x ↦ 2x. Graph(f) = {'{(x, 2x) : x∈ℝ}'}.</p>
              <pre className="hint-code-block">{`Kandidat {(x/2, x) : x∈ℝ}?
   Setze t = x/2 → x = 2t → Paar (x/2, x) = (t, 2t).
   x läuft durch ℝ ⟺ t = x/2 läuft durch ℝ.
   → {(x/2, x)} = {(t, 2t)} = Graph(f) → JA
Kandidat ℝ × ℝ?  (0, 9): f(0)=0≠9 → zu groß → NEIN`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (ii) ablehnen, weil „(x+1, x)" nicht wie „(x, x−1)" aussieht → <strong>✅ Richtig:</strong> Substituiere t=x+1; dann wird (x+1, x) zu (t, t−1) = Graph(f). Das Aussehen täuscht, die Paare sind dieselben.</li>
              <li><strong>❌ Falsch:</strong> ℝ×ℝ akzeptieren, weil „alle reellen Inputs und Outputs vorkommen" → <strong>✅ Richtig:</strong> ℝ×ℝ enthält JEDE Kombination, z.B. (0,5); der Graph fordert aber Output = Input − 1, also bei Input 0 nur Output −1.</li>
              <li><strong>❌ Falsch:</strong> Bei der Substitution den Wertebereich von t vergessen → <strong>✅ Richtig:</strong> Immer prüfen, ob t auch ganz ℝ durchläuft (hier ja: x↦x+1 trifft jede reelle Zahl). Sonst wäre die Menge zu klein.</li>
            </ul>,
            <p>Selbstkontrolle: Liegt (2, 1) in (ii)? Setze x=1 in (x+1, x) → (2, 1) ✓, und f(2)=2−1=1 ✓. Frage: Warum beschreiben {'{(x+1, x):x∈ℝ}'} und {'{(x, x−1):x∈ℝ}'} dieselbe Menge, obwohl „x" in beiden Ausdrücken eine andere Rolle spielt — was genau ändert die Umbenennung der gebundenen Variable?</p>,
          ),
          solution: '(i)  nein – zu groß.\n(ii) ja   – Umsubstitution t = x+1 liefert {(t, t−1) : t ∈ ℝ} = Graph(f).\n(iii) ja  – exakt die Definition.',
        },
        {
          letter: 'c',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℕ → ℕ,  n ↦ 1\n\ngegeben?\n\n(i)   ℕ × {1}\n(ii)  {(n, 1) : n ∈ ℕ}\n(iii) {1} × ℕ',
          hint: h(
            <>
              <p>f : ℕ → ℕ, n ↦ 1 ist eine <span className="hint-em">konstante Funktion</span>: ganz egal, welchen Input n man wählt, der Output ist immer 1. Also f(0)=1, f(1)=1, f(2)=1, … Der <span className="hint-em">Graph</span> ist Graph(f) = {'{(n, f(n)) : n∈ℕ}'} = {'{(n, 1) : n∈ℕ}'} = {'{(0,1),(1,1),(2,1),…}'}.</p>
              <p>Das <span className="hint-em">kartesische Produkt A × B</span> ist die Menge aller Paare (a, b) mit a aus A und b aus B. <span className="hint-em">Reihenfolge ist entscheidend</span>: in (a, b) steht a IMMER links (erste Komponente), b rechts (zweite Komponente). Deshalb gilt: A × B ist im Allgemeinen NICHT dasselbe wie B × A.</p>
              <p>Konkret: {'ℕ × {1}'} = {'{(n, 1) : n∈ℕ}'} (Input n links, feste 1 rechts) — das passt zum Graphen. Aber {'{1} × ℕ'} = {'{(1, n) : n∈ℕ}'} (feste 1 links, n rechts) — hier wäre der Input immer 1 und der Output beliebig, das ist eine ganz andere Menge.</p>
            </>,
            <>
              <p>So prüft man die drei Kandidaten für Graph(f) = {'{(n, 1) : n∈ℕ}'}:</p>
              <pre className="hint-code-block">{`(i) ℕ × {1}: erste Komponente aus ℕ, zweite aus {1}.
    Ausgeschrieben: {(n, 1) : n∈ℕ}.
    → Wort für Wort der Graph → JA.

(ii) {(n, 1) : n∈ℕ}: exakt die Definition des Graphen.
    → JA.

(iii) {1} × ℕ: erste Komponente aus {1}, zweite aus ℕ.
    Ausgeschrieben: {(1, n) : n∈ℕ} = {(1,0),(1,1),(1,2),…}.
    Test: (1, 0) ∈ {1}×ℕ, aber f(1) = 1 ≠ 0 → falsches Paar.
    Außerdem fehlt z.B. (0, 1) (denn erste Komponente ist
    immer 1). → weder richtig drin noch vollständig → NEIN.`}</pre>
              <p>Der ganze Trick steckt in der Reihenfolge: Beim Graphen ist der Input (variabel, alle n∈ℕ) links und der Output (fest 1) rechts. {'{1} × ℕ'} dreht das genau um.</p>
            </>,
            <>
              <p>Anderes Beispiel: g : ℕ → ℕ, n ↦ 0 (konstant 0). Graph(g) = {'{(n, 0) : n∈ℕ}'} = {'ℕ × {0}'}.</p>
              <pre className="hint-code-block">{`ℕ × {0} = {(n, 0) : n∈ℕ}  → richtig (Input links, 0 rechts)
{0} × ℕ = {(0, n) : n∈ℕ}  → falsch! Input wäre fest 0,
          z.B. (0, 7) drin, aber g(0)=0≠7; und (5,0) fehlt.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> {'{1} × ℕ'} und {'ℕ × {1}'} für gleich halten, weil beide „1 und alle ℕ" kombinieren → <strong>✅ Richtig:</strong> {'ℕ × {1}'} = {'{(n,1)}'} (Input links variabel, Output rechts fest 1) ist der Graph; {'{1} × ℕ'} = {'{(1,n)}'} hat Input fest 1 und Output variabel — komplett andere Menge.</li>
              <li><strong>❌ Falsch:</strong> A × B als „Menge {'{A, B}'}" auffassen → <strong>✅ Richtig:</strong> A × B ist eine Menge von PAAREN (a,b), nicht von A und B selbst; bei {'ℕ × {1}'} ist jedes Element ein Paar (n, 1).</li>
              <li><strong>❌ Falsch:</strong> (iii) akzeptieren, weil „die 1 ja vorkommt" → <strong>✅ Richtig:</strong> Die 1 muss an der RICHTIGEN Stelle stehen (zweite Komponente = Output). In {'{1}×ℕ'} steht die 1 als Input — falsche Position.</li>
            </ul>,
            <p>Selbstkontrolle: Liegt (3, 1) im Graphen? Ja, f(3)=1 → (3,1). Liegt (3,1) in {'{1}×ℕ'}? Nein, dort ist die erste Komponente immer 1, nie 3. Frage: Warum ist {'ℕ × {1}'} der Graph, aber {'{1} × ℕ'} nicht — obwohl beide aus „1" und „allen natürlichen Zahlen" gebaut sind? Worauf kommt es bei der Reihenfolge der Komponenten an?</p>,
          ),
          solution: '(i)  ja   – ℕ × {1} = {(n, 1) : n ∈ ℕ} = Graph(f).\n(ii) ja   – exakt die Definition.\n(iii) nein – {1} × ℕ = {(1, n) : n ∈ ℕ} vertauscht Input und Output.',
        },
      ],
    },
    {
      id: 'b5a2',
      nr: 2,
      title: 'Bilder und Urbilder',
      referenz: ['bild-urbild'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Betrachten Sie die Abbildungen\n\nf : ℝ \\ {2} → ℝ,  x ↦ x²   und   h : ℝ → ℝ,  x ↦ |x|.\n\nBestimmen Sie:\n(i)   f(ℝ \\ {2})\n(ii)  f⁻¹({4, 9})\n(iii) h([0, 5])\n(iv)  h([−5, 5])\n(v)   h⁻¹([0, 5])\n(vi)  h⁻¹([−5, 5])\n(vii) h(ℤ)',
          hint: h(
            <>
              <p>Zwei zentrale Begriffe — bitte sauber auseinanderhalten:</p>
              <ul>
                <li><span className="hint-em">Bild einer Menge A</span>: f(A) = {'{f(x) : x ∈ A}'}. Man steckt JEDEN Input aus A in f und sammelt alle herauskommenden Werte. Das Bild ist eine TEILMENGE der Zielmenge (lauter Outputs).</li>
                <li><span className="hint-em">Urbild einer Menge B</span>: f⁻¹(B) = {'{x ∈ Definitionsbereich : f(x) ∈ B}'}. Man sammelt alle Inputs, deren Output in B landet. Das Urbild ist eine TEILMENGE des Definitionsbereichs (lauter Inputs).</li>
              </ul>
              <p>Achtung: f⁻¹ bedeutet hier <span className="hint-em">Urbildmenge</span>, NICHT die Umkehrfunktion. Es muss keine Umkehrfunktion geben. f⁻¹(B) ist immer definiert, auch wenn f nicht umkehrbar ist.</p>
              <p>Bausteine: <span className="hint-em">Intervall</span> [a, b] = alle reellen Zahlen x mit a ≤ x ≤ b (eckige Klammer = Randpunkt gehört dazu). [0, ∞) = alle x ≥ 0. <span className="hint-em">Betrag</span> |x| = Abstand zu 0: |−3|=3, |3|=3, immer ≥ 0. <span className="hint-em">ℝ \ {'{2}'}</span> = alle reellen Zahlen außer der 2 (\ = „ohne"). Quadrat x² ist nie negativ.</p>
              <p>Schlüssel-Einsicht für x²: Wenn ein einzelner Input ausgeschlossen ist (hier x=2), kann sein Output trotzdem von einem ANDEREN Input erzeugt werden. Denn (−2)² = 4 = 2², und −2 ist erlaubt.</p>
            </>,
            <>
              <p>Lösung aller sieben Teile für f : ℝ\{'{2}'} → ℝ, x↦x² und h : ℝ → ℝ, x↦|x|:</p>
              <pre className="hint-code-block">{`(i) f(ℝ\\{2}) = Bild: alle x² für x ≠ 2.
    x² nimmt jeden Wert ≥ 0 an. Verliert das Verbot x=2
    den Wert 4? Nein: 4 = (−2)², und −2 ist erlaubt.
    → f(ℝ\\{2}) = [0, ∞).

(ii) f⁻¹({4, 9}) = alle x≠2 mit x² ∈ {4, 9}.
    x² = 4 → x = 2 oder x = −2; aber 2 ist verboten → nur −2.
    x² = 9 → x = 3 oder x = −3; beide erlaubt.
    → f⁻¹({4, 9}) = {−2, 3, −3}.

(iii) h([0,5]) = Bild: {|x| : 0 ≤ x ≤ 5}.
    Für x in [0,5] ist |x| = x, läuft durch [0,5].
    → h([0, 5]) = [0, 5].

(iv) h([−5,5]) = {|x| : −5 ≤ x ≤ 5}.
    |x| reicht von 0 (bei x=0) bis 5 (bei x=±5).
    → h([−5, 5]) = [0, 5]   (negative Inputs liefern dieselben
      Beträge wie positive).

(v) h⁻¹([0,5]) = alle x mit |x| ∈ [0,5], also 0 ≤ |x| ≤ 5.
    |x| ≤ 5 bedeutet −5 ≤ x ≤ 5.
    → h⁻¹([0, 5]) = [−5, 5].

(vi) h⁻¹([−5,5]) = alle x mit |x| ∈ [−5,5].
    Da |x| immer ≥ 0 ist, zählt nur der Teil [0,5] der Zielmenge.
    |x| ≤ 5 ⟺ −5 ≤ x ≤ 5.
    → h⁻¹([−5, 5]) = [−5, 5]   (gleich wie (v)!).

(vii) h(ℤ) = {|n| : n ∈ ℤ} = {0,1,2,3,…} = ℕ.
    Jede ganze Zahl wird durch |·| auf ihren Betrag ≥ 0
    geschickt; alle 0,1,2,… kommen vor, negative nie.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: g : ℝ → ℝ, x ↦ x². Bild und Urbild durchrechnen.</p>
              <pre className="hint-code-block">{`g([−3, 2]) = Bild: {x² : −3 ≤ x ≤ 2}.
   Kleinster Wert: 0 (bei x=0). Größter: (−3)²=9 (Rand −3).
   → g([−3, 2]) = [0, 9]   (NICHT [(−3)², 2²]=[9,4]! Min ist 0)
g⁻¹([1, 4]) = {x : 1 ≤ x² ≤ 4}
   x² ∈ [1,4] ⟺ |x| ∈ [1,2] ⟺ x ∈ [−2,−1] ∪ [1,2].`}</pre>
              <p>Merke: Beim Bild eines Intervalls unter x² ist das Minimum oft 0 (falls 0 im Intervall liegt), nicht der Wert am linken Rand.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (i) f(ℝ\{'{2}'}) = [0,∞)\{'{4}'}, weil x=2 fehlt → <strong>✅ Richtig:</strong> Der Wert 4 kommt trotzdem vor, denn 4 = (−2)² und −2 ∈ ℝ\{'{2}'} ist erlaubt. Ein ausgeschlossener Input löscht seinen Output NUR, wenn kein anderer Input denselben Output liefert.</li>
              <li><strong>❌ Falsch:</strong> (ii) f⁻¹({'{4,9}'}) = {'{2,−2,3,−3}'} → <strong>✅ Richtig:</strong> x=2 ist nicht im Definitionsbereich ℝ\{'{2}'}, fällt also weg: {'{−2, 3, −3}'}.</li>
              <li><strong>❌ Falsch:</strong> (vi) h⁻¹([−5,5]) = ∅, weil |x| nie negativ ist → <strong>✅ Richtig:</strong> Gesucht sind x mit |x| IN [−5,5]; da [−5,5] auch [0,5] enthält und |x| dort liegen kann, ist h⁻¹([−5,5]) = [−5,5]. Der negative Teil der Zielmenge wird einfach nie getroffen, macht das Urbild aber nicht leer.</li>
              <li><strong>❌ Falsch:</strong> (vii) h(ℤ) = ℤ → <strong>✅ Richtig:</strong> |n| ≥ 0 immer, negative Outputs gibt es nie; h(ℤ) = {'{0,1,2,…}'} = ℕ.</li>
            </ul>,
            <p>Selbstkontrolle (v) vs. (vi): Beide ergeben [−5,5]. Probe x=−4: |−4|=4 ∈ [0,5] ✓ und ∈ [−5,5] ✓ → −4 in beiden Urbildern. Probe x=6: |6|=6 ∉ [0,5] und ∉ [−5,5] → 6 in keinem. Frage: Warum ist h⁻¹([−5,5]) genau dasselbe wie h⁻¹([0,5]), obwohl die Zielmengen verschieden sind — was sagt das darüber, welcher Teil einer Zielmenge beim Urbild von |x| überhaupt „wirkt"?</p>,
          ),
          solution: '(i)   f(ℝ \\ {2}) = [0, ∞)   (4 = (−2)² wird trotz x=2 ∉ Domain erreicht)\n(ii)  f⁻¹({4, 9}) = {−2, 3, −3}   (x=2 ist ausgeschlossen)\n(iii) h([0, 5]) = [0, 5]\n(iv)  h([−5, 5]) = [0, 5]\n(v)   h⁻¹([0, 5]) = [−5, 5]\n(vi)  h⁻¹([−5, 5]) = [−5, 5]   (da |x| ≥ 0, wirkt nur der Teil [0,5])\n(vii) h(ℤ) = ℕ',
        },
      ],
    },
    {
      id: 'b5a3',
      nr: 3,
      title: 'Injektivität, Surjektivität, Bijektivität',
      referenz: ['funktionen-eigenschaften'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien X := {1,2,3,4,5},  Y := {1,2,3}  und  φ : X → Y  durch\n\nφ(1) := 3,  φ(2) := 3,  φ(3) := 2,  φ(4) := 1,  φ(5) := 3\n\ngegeben. Geben Sie jeweils ein Beispiel für eine nichtleere Teilmenge M von X derart an, dass die Abbildung φ : M → Y bijektiv ist.',
          hint: h(
            <>
              <p>Drei Eigenschaften einer Abbildung φ : M → Y (alle vergleichen Inputs aus M mit Outputs in Y):</p>
              <ul>
                <li><span className="hint-em">injektiv</span> (linkseindeutig): verschiedene Inputs haben verschiedene Outputs — kein Wert wird doppelt getroffen. Formal: φ(a)=φ(b) ⟹ a=b. „Keine zwei Pfeile zeigen auf dasselbe Ziel."</li>
                <li><span className="hint-em">surjektiv</span> (auf Y): JEDES Element von Y wird mindestens einmal getroffen. „Kein Ziel in Y bleibt leer."</li>
                <li><span className="hint-em">bijektiv</span> = injektiv UND surjektiv: jeder Y-Wert wird GENAU einmal getroffen (mindestens einmal von surjektiv, höchstens einmal von injektiv).</li>
              </ul>
              <p>Folgerung: Ist φ : M → Y bijektiv und endlich, müssen M und Y gleich viele Elemente haben: |M| = |Y|. Hier ist Y = {'{1,2,3}'}, also |Y| = 3 → M braucht genau 3 Elemente, mit drei verschiedenen Bildern, die zusammen ganz Y abdecken.</p>
              <p>φ|_M bedeutet „φ eingeschränkt auf M": dieselbe Vorschrift, aber nur Inputs aus der Teilmenge M zugelassen.</p>
            </>,
            <>
              <p>So findet man ein passendes M (gegeben φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3):</p>
              <pre className="hint-code-block">{`1) Tabelle Input → Output aufstellen:
   1↦3, 2↦3, 3↦2, 4↦1, 5↦3

2) Nach Output gruppieren (wer trifft welches Ziel?):
   Ziel 1: nur 4
   Ziel 2: nur 3
   Ziel 3: 1, 2 oder 5 (drei Möglichkeiten)

3) Für Bijektivität pro Ziel GENAU einen Vertreter wählen,
   damit jedes Ziel genau einmal getroffen wird:
   Ziel 1 → 4 (zwingend)
   Ziel 2 → 3 (zwingend)
   Ziel 3 → eines aus {1,2,5}, z.B. 1
   → M = {4, 3, 1}

4) Kontrolle: φ(4)=1, φ(3)=2, φ(1)=3.
   Alle Bilder verschieden (injektiv) ✓
   Alle Y = {1,2,3} getroffen (surjektiv) ✓
   → bijektiv ✓   (auch {4,3,2} oder {4,3,5} gehen)`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: ψ : {'{a,b,c,d}'} → {'{1,2}'} mit ψ(a)=1, ψ(b)=2, ψ(c)=1, ψ(d)=2. Bijektive Teilmenge M finden?</p>
              <pre className="hint-code-block">{`|Y| = 2 → M braucht genau 2 Elemente, beide Ziele je 1×.
Ziel 1: a oder c.   Ziel 2: b oder d.
→ je einen wählen: M = {a, b} (ψ(a)=1, ψ(b)=2) → bijektiv ✓
   M = {a, c} wäre falsch: beide ↦1 → Ziel 2 fehlt, Kollision.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,2,4}'} wählen: φ(1)=3 und φ(2)=3 → zwei Inputs, ein Ziel (3) → Kollision, nicht injektiv → <strong>✅ Richtig:</strong> Aus den drei Elementen mit Bild 3 ({'{1,2,5}'}) genau eines nehmen; M = {'{1,3,4}'} oder {'{2,3,4}'} oder {'{5,3,4}'}.</li>
              <li><strong>❌ Falsch:</strong> M mit 4 oder 2 Elementen für eine Bijektion nach Y zulassen → <strong>✅ Richtig:</strong> Bei endlichen Mengen erzwingt Bijektivität |M| = |Y| = 3 — sonst bleibt ein Ziel leer (nicht surjektiv) oder ein Ziel wird doppelt getroffen (nicht injektiv).</li>
              <li><strong>❌ Falsch:</strong> Element 4 weglassen → <strong>✅ Richtig:</strong> Nur φ(4)=1 trifft Ziel 1; ohne 4 kann Y nie ganz abgedeckt werden → 4 ist für Surjektivität Pflicht.</li>
            </ul>,
            <p>Selbstkontrolle für M={'{1,3,4}'}: Sind die drei Bilder φ(1)=3, φ(3)=2, φ(4)=1 alle verschieden (injektiv)? Decken sie {'{1,2,3}'} vollständig ab (surjektiv)? Beides ja → bijektiv. Frage: Warum muss bei endlichem M und Y für eine Bijektion zwingend |M|=|Y| gelten, und was geht schief, wenn M ein Element zu viel oder zu wenig hat?</p>,
          ),
          solution: 'M = {1, 3, 4}: φ(1)=3, φ(3)=2, φ(4)=1 – injektiv (alle Bilder verschieden) und surjektiv (trifft 1, 2, 3).',
        },
        {
          letter: 'b',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y surjektiv, aber nicht injektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">surjektiv</span> heißt: jedes Element der Zielmenge Y = {'{1,2,3}'} wird mindestens einmal getroffen (kein Ziel bleibt leer). <span className="hint-em">injektiv</span> heißt: verschiedene Inputs → verschiedene Outputs (kein Ziel doppelt). <span className="hint-em">Nicht injektiv</span> bedeutet also: mindestens ein Ziel wird von ZWEI verschiedenen Inputs getroffen (eine „Kollision").</p>
              <p>Gesucht: M, sodass φ|_M „surjektiv UND nicht injektiv" ist. Das heißt zwei Dinge gleichzeitig: (1) alle drei Ziele 1, 2, 3 müssen vorkommen (Surjektivität), (2) irgendein Ziel wird doppelt getroffen (Verletzung der Injektivität).</p>
              <p>Strategie: zuerst Surjektivität sichern (je einen Treffer für 1, 2, 3), dann ein ZUSÄTZLICHES Element aufnehmen, dessen Bild schon vorhanden ist — das erzeugt die Kollision. Mehr als 3 Elemente sind hier sogar nötig, denn |M|=3 mit allen drei Zielen wäre automatisch injektiv (= bijektiv).</p>
            </>,
            <>
              <p>So baut man M (gegeben φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3):</p>
              <pre className="hint-code-block">{`1) Surjektivität: für jedes Ziel einen Treffer aufnehmen.
   Ziel 1 → 4   (nur φ(4)=1)
   Ziel 2 → 3   (nur φ(3)=2)
   Ziel 3 → z.B. 1   (φ(1)=3)
   Zwischenstand M = {4, 3, 1}: surjektiv, aber injektiv
   (alle Bilder verschieden) → bijektiv → noch NICHT erlaubt.

2) Kollision erzwingen: ein weiteres Element mit schon
   vorhandenem Bild dazunehmen. φ(2)=3 = φ(1) → 2 dazu.
   M = {1, 2, 3, 4}.

3) Kontrolle:
   Bilder: φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1.
   Surjektiv? Ziele 1,2,3 alle dabei ✓
   Injektiv? φ(1)=φ(2)=3 → Kollision → NICHT injektiv ✓
   → surjektiv und nicht injektiv ✓

Auch M = X = {1,2,3,4,5} funktioniert (drei Inputs ↦ 3).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: ψ : {'{a,b,c}'} → {'{1,2}'} mit ψ(a)=1, ψ(b)=2, ψ(c)=2. Surjektiv-aber-nicht-injektiv M?</p>
              <pre className="hint-code-block">{`Ziel 1: nur a → a muss rein.   Ziel 2: b oder c.
Für Kollision beide Treffer von Ziel 2 nehmen:
M = {a, b, c}: ψ(a)=1, ψ(b)=2, ψ(c)=2.
surjektiv (1,2 da) ✓; nicht injektiv (b,c↦2) ✓.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{3,4}'}: Bilder nur {'{1,2}'}, Ziel 3 fehlt → nicht surjektiv → <strong>✅ Richtig:</strong> Für Surjektivität müssen 1, 2 UND 3 im Bild liegen; also muss mindestens eines aus {'{1,2,5}'} (die Treffer von Ziel 3) in M sein.</li>
              <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} (bijektiv) angeben → <strong>✅ Richtig:</strong> Bijektiv ist injektiv — verboten. Es muss eine Kollision geben, also mindestens zwei Inputs mit gleichem Bild; dafür braucht M hier ≥ 4 Elemente.</li>
              <li><strong>❌ Falsch:</strong> nur die Kollision herstellen (z.B. M={'{1,2}'}) und Surjektivität vergessen → <strong>✅ Richtig:</strong> Beide Bedingungen müssen gelten; M={'{1,2}'} trifft nur Ziel 3 → nicht surjektiv.</li>
            </ul>,
            <p>Selbstkontrolle für M={'{1,2,3,4}'}: Kommen 1, 2, 3 alle als Bild vor (surjektiv)? Ja. Gibt es zwei Inputs mit gleichem Bild (nicht injektiv)? Ja: φ(1)=φ(2)=3. Frage: Warum kann eine surjektive, aber nicht injektive Abbildung φ : M → Y mit |Y|=3 niemals nur 3 Elemente in M haben — wie viele braucht sie mindestens?</p>,
          ),
          solution: 'M = X = {1,2,3,4,5}: surjektiv (alle Werte 1,2,3 getroffen), nicht injektiv (z. B. φ(1)=φ(2)=φ(5)=3).',
        },
        {
          letter: 'c',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y injektiv, aber nicht surjektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">injektiv</span> = verschiedene Inputs liefern verschiedene Outputs (keine zwei Elemente von M haben dasselbe Bild). <span className="hint-em">nicht surjektiv</span> = mindestens ein Element von Y = {'{1,2,3}'} wird gar nicht getroffen.</p>
              <p>Gesucht: M mit (1) lauter verschiedenen Bildern (injektiv) und (2) mindestens einem fehlenden Y-Wert (nicht surjektiv).</p>
              <p>Trick: Wähle M sehr KLEIN. Mit höchstens 2 Elementen kann man niemals alle 3 Ziele treffen → Surjektivität ist automatisch verletzt. Sorgt man zusätzlich dafür, dass die wenigen Elemente verschiedene Bilder haben, ist φ|_M injektiv. Eine <span className="hint-em">einelementige Menge ist IMMER injektiv</span> (es gibt gar keine zwei Inputs, die kollidieren könnten) und trifft höchstens 1 von 3 Zielen → nie surjektiv.</p>
            </>,
            <>
              <p>So findet man M (gegeben φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3):</p>
              <pre className="hint-code-block">{`Einfachste Lösung — ein einziges Element:
1) M = {1}.   φ(1) = 3.
2) Injektiv? Nur ein Element → keine Kollision möglich ✓
3) Surjektiv? Bild = {3}; die Ziele 1 und 2 fehlen → NEIN ✓
   → injektiv und nicht surjektiv ✓

Auch mit zwei Elementen möglich (solange Bilder verschieden):
M = {3, 4}: φ(3)=2, φ(4)=1 → verschieden (injektiv) ✓
            Bild = {1,2}, Ziel 3 fehlt → nicht surjektiv ✓`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: ψ : {'{a,b,c}'} → {'{1,2,3}'} mit ψ(a)=1, ψ(b)=1, ψ(c)=2. Injektiv-aber-nicht-surjektiv M?</p>
              <pre className="hint-code-block">{`M = {a}: ψ(a)=1 → injektiv (1 Element), Bild {1}, 2 und 3
   fehlen → nicht surjektiv ✓
M = {a, c}: ψ(a)=1, ψ(c)=2 → verschieden ✓, Ziel 3 fehlt ✓
M = {a, b} wäre falsch: ψ(a)=ψ(b)=1 → Kollision → nicht injektiv`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} (bijektiv) → <strong>✅ Richtig:</strong> Bijektiv trifft ALLE Y-Werte — verboten, denn gefordert ist „nicht surjektiv". M muss mindestens ein Ziel auslassen.</li>
              <li><strong>❌ Falsch:</strong> M = {'{1,2}'}: φ(1)=3 und φ(2)=3 → gleiches Bild → Kollision → nicht injektiv → <strong>✅ Richtig:</strong> Für Injektivität keine zwei Elemente mit gleichem Bild; {'{1}'} allein (oder {'{3,4}'} mit verschiedenen Bildern) genügt.</li>
              <li><strong>❌ Falsch:</strong> denken, eine 1-elementige Menge sei „zu trivial / nicht erlaubt" → <strong>✅ Richtig:</strong> Verlangt ist nur eine nichtleere Teilmenge; {'{1}'} ist nichtleer, immer injektiv und hier nicht surjektiv — eine vollkommen korrekte Lösung.</li>
            </ul>,
            <p>Selbstkontrolle für M={'{1}'}: Gibt es zwei Inputs mit gleichem Bild (Kollision)? Nein (nur ein Element) → injektiv. Werden alle Ziele 1,2,3 getroffen? Nein, nur 3 → nicht surjektiv. Frage: Warum ist jede einelementige Teilmenge automatisch injektiv, und warum kann sie (bei |Y|≥2) niemals surjektiv sein?</p>,
          ),
          solution: 'M = {1}: φ(1)=3 – injektiv (nur ein Element), nicht surjektiv (1 und 2 nicht getroffen).',
        },
        {
          letter: 'd',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y weder injektiv noch surjektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">weder injektiv noch surjektiv</span> heißt: BEIDE Eigenschaften sind verletzt. Also gleichzeitig (1) eine <span className="hint-em">Kollision</span> (zwei verschiedene Inputs mit gleichem Bild → nicht injektiv) UND (2) ein <span className="hint-em">fehlendes Ziel</span> (mindestens ein Y-Wert wird nie getroffen → nicht surjektiv).</p>
              <p>Strategie: Wähle gezielt zwei Elemente, die DENSELBEN Output haben — das liefert sofort die Kollision (nicht injektiv) und trifft zugleich nur EIN Ziel, sodass die anderen zwei fehlen (nicht surjektiv). Beide Bedingungen mit einem Schlag.</p>
              <p>Die drei vorigen Teilaufgaben (a)-(d) decken die vier möglichen Fälle ab: bijektiv / nur surjektiv / nur injektiv / keins von beidem. Hier ist „keins von beidem" gefragt.</p>
            </>,
            <>
              <p>So baut man M (gegeben φ(1)=3, φ(2)=3, φ(3)=2, φ(4)=1, φ(5)=3):</p>
              <pre className="hint-code-block">{`1) Zwei Inputs mit gleichem Bild suchen (für Kollision):
   φ(1)=3 und φ(2)=3 → 1 und 2 haben beide Bild 3.

2) M = {1, 2} wählen.
   Bilder: φ(1)=3, φ(2)=3 → Bild von M = {3}.

3) Kontrolle:
   Injektiv? φ(1)=φ(2)=3, aber 1≠2 → Kollision → NICHT injektiv ✓
   Surjektiv? Bild = {3}; Ziele 1 und 2 fehlen → NICHT surjektiv ✓
   → weder injektiv noch surjektiv ✓

Andere gültige Wahl: M = {1,5} (φ(1)=φ(5)=3) oder {2,5}.`}</pre>
              <p>Übersicht der vier Fälle (Teilaufgaben a–d) auf einen Blick:</p>
              <pre className="hint-code-block">{`Fall                 | Bedingung an φ|_M
---------------------|------------------------------------
bijektiv (a)         | alle Bilder verschieden UND ganz Y getroffen
surjektiv, ¬inj. (b) | ganz Y getroffen, aber eine Kollision
injektiv, ¬surj. (c) | keine Kollision, aber ein Ziel fehlt
weder noch (d)       | Kollision UND ein Ziel fehlt`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: ψ : {'{a,b,c}'} → {'{1,2,3}'} mit ψ(a)=2, ψ(b)=2, ψ(c)=3. „Weder noch"?</p>
              <pre className="hint-code-block">{`M = {a, b}: ψ(a)=ψ(b)=2 → Kollision (nicht injektiv) ✓
            Bild = {2}; Ziele 1 und 3 fehlen → nicht surjektiv ✓
            → weder noch ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} (bijektiv) → <strong>✅ Richtig:</strong> Bijektiv erfüllt BEIDE Eigenschaften — das ist das Gegenteil von „weder noch". Gebraucht wird gleichzeitig Kollision UND fehlendes Ziel.</li>
              <li><strong>❌ Falsch:</strong> nur eine Bedingung sicherstellen (z.B. nur Kollision, aber zufällig alle Ziele getroffen) → <strong>✅ Richtig:</strong> Beide müssen verletzt sein. M={'{1,2}'} prüfen: Kollision bei 3 (nicht injektiv) ✓ und Ziele 1,2 fehlen (nicht surjektiv) ✓.</li>
              <li><strong>❌ Falsch:</strong> M={'{1,2,4}'} nehmen und denken, es sei „weder noch" → <strong>✅ Richtig:</strong> Hier sind zwar 1,2 eine Kollision (nicht injektiv), aber Ziele getroffen sind {'{3,1}'} — Ziel 2 fehlt → nicht surjektiv; das funktioniert AUCH, ist nur ein Element größer als nötig. {'{1,2}'} ist die kompakteste Lösung.</li>
            </ul>,
            <p>Selbstkontrolle für M={'{1,2}'}: Gibt es eine Kollision (nicht injektiv)? Ja, φ(1)=φ(2)=3. Fehlt ein Y-Wert (nicht surjektiv)? Ja, 1 und 2 werden nie getroffen. Frage: Warum genügt es, zwei Inputs mit gleichem Bild zu wählen, um „weder injektiv noch surjektiv" auf einen Schlag zu erreichen — welche beiden Defekte erzeugt diese eine Wahl gleichzeitig?</p>,
          ),
          solution: 'M = {1, 2}: φ(1)=φ(2)=3 – nicht injektiv (Kollision bei 3), nicht surjektiv (1 und 2 nicht getroffen).',
        },
      ],
    },
    {
      id: 'b5a4',
      nr: 4,
      title: 'Verkettung von Funktionen',
      referenz: ['funktionen-eigenschaften'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Gegeben seien die Funktionen\n\nf : ℝ → ℝ,  x ↦ x³ − 1   und   g : [0, ∞) → ℝ,  x ↦ √x + 2,\n\nwobei die Funktion [0,∞) → [0,∞), x ↦ √x die Umkehrfunktion der Funktion [0,∞) → [0,∞), x ↦ x² bezeichnet. Bestimmen Sie f ∘ g und g ∘ f sofern möglich.',
          hint: h(
            <>
              <p>Die <span className="hint-em">Verkettung (Komposition)</span> zweier Funktionen bedeutet „erst die eine, dann die andere anwenden". Lies f ∘ g als „f nach g":</p>
              <pre className="hint-code-block">{`(f ∘ g)(x) = f( g(x) )   ← erst g, dann f (g steht innen)`}</pre>
              <p><span className="hint-em">Verkettbarkeitsbedingung</span>: Damit f(g(x)) sinnvoll ist, muss das, was g ausspuckt, ein erlaubter Input für f sein. Formal: das <span className="hint-em">Bild von g</span> muss im <span className="hint-em">Definitionsbereich von f</span> liegen, also Bild(g) ⊆ Dom(f). Andernfalls ist die Verkettung NICHT definiert.</p>
              <p>Begriffe: <span className="hint-em">Definitionsbereich Dom(f)</span> = erlaubte Inputs (links vom Pfeil). <span className="hint-em">Bild(f)</span> = Menge aller tatsächlich erreichten Outputs. ⊆ heißt „ist Teilmenge von". Hier: f : ℝ → ℝ, x↦x³−1 und g : [0,∞) → ℝ, x↦√x + 2. (√x ist die nichtnegative Wurzel, nur für x ≥ 0 definiert.)</p>
            </>,
            <>
              <p>So prüft und berechnet man beide Verkettungen:</p>
              <pre className="hint-code-block">{`f ∘ g (= f nach g):
1) Bedingung Bild(g) ⊆ Dom(f) prüfen.
   g(x) = √x + 2; für x ≥ 0 ist √x ≥ 0 → g(x) ≥ 2.
   Dom(f) = ℝ. Da [2,∞) ⊆ ℝ → Bedingung erfüllt ✓
2) Definitionsbereich der Verkettung = Dom(g) = [0,∞).
3) Formel: x in f durch g(x) ersetzen:
   (f∘g)(x) = f(g(x)) = (g(x))³ − 1 = (√x + 2)³ − 1
   → f∘g : [0,∞) → ℝ,  x ↦ (√x + 2)³ − 1.

g ∘ f (= g nach f):
1) Bedingung Bild(f) ⊆ Dom(g) prüfen.
   f(x) = x³ − 1 nimmt ALLE reellen Werte an → Bild(f) = ℝ.
   Dom(g) = [0,∞).  Ist ℝ ⊆ [0,∞)? NEIN
   (z.B. f(0) = −1 < 0, aber −1 ∉ Dom(g)).
2) Bedingung verletzt → g ∘ f ist NICHT definierbar.`}</pre>
              <p>Warum nimmt x³−1 alle reellen Werte an? x³ durchläuft ganz ℝ (auch negativ: (−2)³=−8), also auch x³−1. Damit liefert f auch negative Outputs, die g (Wurzel!) nicht verarbeiten kann.</p>
            </>,
            <>
              <p>Anderes Beispiel: p : ℝ → [0,∞), x↦x² und q : [0,∞) → ℝ, x↦√x.</p>
              <pre className="hint-code-block">{`q ∘ p: Bild(p) = [0,∞) ⊆ Dom(q) = [0,∞) ✓ → definierbar.
   (q∘p)(x) = √(x²) = |x|   (Dom = ℝ)
p ∘ q: Bild(q) = [0,∞) ⊆ Dom(p) = ℝ ✓ → definierbar.
   (p∘q)(x) = (√x)² = x   (Dom = [0,∞))`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> g∘f hinschreiben als g(f(x)) = √(x³−1) + 2, ohne den Definitionsbereich zu prüfen → <strong>✅ Richtig:</strong> Bild(f) = ℝ enthält negative Zahlen (z.B. f(0)=−1), die nicht in Dom(g)=[0,∞) liegen → g∘f ist gar nicht definiert.</li>
              <li><strong>❌ Falsch:</strong> Reihenfolge verwechseln: (f∘g)(x) = g(f(x)) → <strong>✅ Richtig:</strong> f∘g heißt „f NACH g", also erst g innen: f(g(x)). Die innere Funktion steht rechts/innen.</li>
              <li><strong>❌ Falsch:</strong> bei f∘g den Definitionsbereich als ℝ angeben → <strong>✅ Richtig:</strong> Der Input geht zuerst in g, also ist Dom(f∘g) = Dom(g) = [0,∞).</li>
            </ul>,
            <p>Selbstkontrolle: Berechne (f∘g)(0) = (√0+2)³−1 = 2³−1 = 7. Und g∘f bei x=0 bräuchte g(f(0)) = g(−1) = √(−1)+2 — die Wurzel aus −1 existiert in ℝ nicht → bestätigt: g∘f undefinierbar. Frage: Welche Werte nimmt f(x)=x³−1 an, und warum scheitert g∘f genau daran, dass g eine Wurzel enthält?</p>,
          ),
          solution: 'f ∘ g : [0,∞) → ℝ,  x ↦ (√x + 2)³ − 1\n\ng ∘ f ist nicht möglich, da f(ℝ) = ℝ ⊄ [0,∞) = Dom(g).',
        },
        {
          letter: 'b',
          text: 'Betrachten Sie die Funktionen\n\nf : [0,∞) → [0,∞),  x ↦ x + 1\n\nund\n\ng : [0,∞) → [0,∞),  x ↦ { x−1,  falls x ≥ 1\n                         { 0,     sonst.\n\nUntersuchen Sie f, g, g ∘ f und f ∘ g jeweils auf Injektivität, Surjektivität und Bijektivität. Skizzieren Sie zunächst die jeweiligen Funktionsgraphen.',
          hint: h(
            <>
              <p>Drei Eigenschaften (jeweils auf dem angegebenen Definitions- und Zielbereich [0,∞)):</p>
              <ul>
                <li><span className="hint-em">injektiv</span>: verschiedene Inputs → verschiedene Outputs (kein y-Wert wird zweimal getroffen).</li>
                <li><span className="hint-em">surjektiv</span>: jeder Wert der Zielmenge [0,∞) wird mindestens einmal erreicht.</li>
                <li><span className="hint-em">bijektiv</span> = injektiv und surjektiv (jeder Zielwert genau einmal).</li>
              </ul>
              <p><span className="hint-em">Verkettung</span>: (g∘f)(x)=g(f(x)) — erst f, dann g. (f∘g)(x)=f(g(x)) — erst g, dann f. g ist <span className="hint-em">abschnittsweise (mit Fallunterscheidung)</span> definiert: g(x)=x−1 falls x≥1, sonst g(x)=0. Beim Einsetzen muss man also je nach Wert den passenden Fall wählen.</p>
              <p>Gegeben: f : [0,∞)→[0,∞), x↦x+1 und g : [0,∞)→[0,∞), g(x)=x−1 (x≥1) bzw. 0 (x&lt;1).</p>
            </>,
            <>
              <p>Schritt 1 — Verkettungen ausrechnen:</p>
              <pre className="hint-code-block">{`g ∘ f: f(x)=x+1. Für x≥0 ist x+1 ≥ 1, also IMMER der
   Fall „≥1" von g → g(x+1) = (x+1) − 1 = x.
   → (g∘f)(x) = x   (Identität auf [0,∞)).

f ∘ g: zuerst g, Fallunterscheidung:
   x ≥ 1: g(x)=x−1 → f(x−1) = (x−1)+1 = x.
   x < 1: g(x)=0   → f(0) = 0+1 = 1.
   → (f∘g)(x) = x falls x≥1; = 1 falls x<1.`}</pre>
              <p>Schritt 2 — jede Funktion auf injektiv/surjektiv/bijektiv prüfen:</p>
              <pre className="hint-code-block">{`f(x)=x+1:
   injektiv? x+1 = y+1 ⟹ x=y → JA.
   surjektiv? Outputs sind ≥1; der Zielwert 0 wird nie
      erreicht (x+1=0 hätte x=−1 ∉ Dom) → NEIN.
   → nicht bijektiv.

g:
   injektiv? g(0)=0 und g(0.5)=0 → zwei Inputs, ein Output
      → NEIN.
   surjektiv? jedes y≥0 erreichbar: y = g(y+1) da y+1≥1
      → (y+1)−1 = y → JA.
   → nicht bijektiv.

g∘f (= x):
   injektiv ✓, surjektiv ✓ (jedes y≥0 ist Bild von sich)
   → BIJEKTIV.

f∘g (= x für x≥1, =1 für x<1):
   injektiv? für x<1 ist der Wert konstant 1, z.B.
      (f∘g)(0)=1=(f∘g)(0.5) → NEIN.
   surjektiv? Werte sind: 1 (aus [0,1)) und alle x≥1.
      Also Bild = [1,∞); der Wert 0 fehlt → NEIN.
   → nicht bijektiv.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel zum Kontrast: f₂ : [0,∞)→[0,∞), x↦x+2 und g₂ : [0,∞)→[0,∞), g₂(x)=x−2 (x≥2) bzw. 0 (x&lt;2).</p>
              <pre className="hint-code-block">{`(g₂∘f₂)(x) = g₂(x+2) = (x+2)−2 = x  (x+2≥2 immer)
   → Identität → bijektiv.
(f₂∘g₂)(x): x≥2 → (x−2)+2 = x; x<2 → f₂(0)=2.
   → für x<2 konstant 2 → nicht injektiv; Bild=[2,∞), 0..2
   fehlt → nicht surjektiv.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> g∘f und f∘g verwechseln → <strong>✅ Richtig:</strong> (g∘f)(x)=g(f(x)) — innerste Funktion ist f; (f∘g)(x)=f(g(x)) — innerste ist g. Die rechte/innere Funktion wird zuerst angewendet.</li>
              <li><strong>❌ Falsch:</strong> bei f∘g übersehen, dass alle x∈[0,1) auf 1 fallen → <strong>✅ Richtig:</strong> für x&lt;1 ist g(x)=0, dann f(0)=1; f∘g ist auf [0,1) konstant 1 → mehrere Inputs, ein Output → nicht injektiv.</li>
              <li><strong>❌ Falsch:</strong> f als surjektiv einstufen → <strong>✅ Richtig:</strong> f(x)=x+1 ≥ 1 für alle x≥0; der Zielwert 0 ∈ [0,∞) wird nie getroffen → nicht surjektiv.</li>
              <li><strong>❌ Falsch:</strong> bei g die Fallunterscheidung ignorieren und g als injektiv ansehen → <strong>✅ Richtig:</strong> alle x&lt;1 werden auf 0 geschickt (g(0)=g(0.5)=0) → Kollision → nicht injektiv.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe (g∘f)(3)=g(4)=3 und (f∘g)(0.5)=f(0)=1=(f∘g)(0) (gleicher Output → f∘g nicht injektiv). Frage: Warum ist g∘f bijektiv, obwohl weder f (nicht surjektiv) noch g (nicht injektiv) für sich bijektiv ist — wie ergänzen sich ihre Defekte beim Verketten?</p>,
          ),
          solution: 'f: injektiv, nicht surjektiv, nicht bijektiv  (0 ∉ Bild f)\ng: nicht injektiv, surjektiv, nicht bijektiv  (g(0)=g(0.5)=0)\n\ng∘f: [0,∞)→[0,∞), x↦x  → bijektiv\n\nf∘g: [0,∞)→[0,∞), x↦{ x falls x≥1; 1 sonst }\n  → nicht injektiv, nicht surjektiv, nicht bijektiv',
          abbildung: (
            <div className="venn-grid">
              <FunctionPlot
                data={{
                  xMin: -0.4, xMax: 5, yMin: -0.4, yMax: 6,
                  caption: 'f(x) = x + 1',
                  series: [{ f: x => x + 1, from: 0, to: 5, color: '#4d9fff' }],
                  markers: [{ x: 0, y: 1, filled: true, color: '#4d9fff' }],
                }}
              />
              <FunctionPlot
                data={{
                  xMin: -0.4, xMax: 5, yMin: -0.4, yMax: 6,
                  caption: 'g(x) = x−1 (x≥1), sonst 0',
                  series: [{ f: x => (x >= 1 ? x - 1 : 0), from: 0, to: 5, color: '#3ecf8e' }],
                  markers: [{ x: 0, y: 0, filled: true, color: '#3ecf8e' }],
                }}
              />
              <FunctionPlot
                data={{
                  xMin: -0.4, xMax: 5, yMin: -0.4, yMax: 6,
                  caption: 'g∘f (x) = x  → bijektiv',
                  series: [{ f: x => x, from: 0, to: 5, color: '#f5a623' }],
                  markers: [{ x: 0, y: 0, filled: true, color: '#f5a623' }],
                }}
              />
              <FunctionPlot
                data={{
                  xMin: -0.4, xMax: 5, yMin: -0.4, yMax: 6,
                  caption: 'f∘g (x) = 1 (x<1), x (x≥1)',
                  series: [{ f: x => (x >= 1 ? x : 1), from: 0, to: 5, color: '#c77dff' }],
                  markers: [{ x: 0, y: 1, filled: true, color: '#c77dff' }],
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'b5a5',
      nr: 5,
      title: 'Eigenschaften von Relationen (Wenn noch Zeit ist ...)',
      referenz: ['relationen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei R₁ die Relation\n\nR₁ = {(x², x³) : x ∈ ℝ} ⊆ ℝ × ℝ\n\nauf ℝ und R₂ die Relation\n\nR₂ = {(m, n) : m, n ∈ ℤ, m | n} ⊆ ℤ × ℤ\n\nauf ℤ. Welche der Eigenschaften linkstotal, rechtstotal, linkseindeutig und rechtseindeutig besitzen die Relationen jeweils? Ist eine Funktion dabei?',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Relation</span> R auf A ist eine Menge von Paaren, R ⊆ A × A. „(a,b) ∈ R" heißt „a steht in Relation zu b". Vier Eigenschaften beschreiben, wie sich linke und rechte Komponenten verteilen:</p>
              <ul>
                <li><span className="hint-em">linkstotal</span>: JEDES a ∈ A kommt mindestens einmal als linke Komponente vor. Formal: ∀a ∃b: (a,b)∈R.</li>
                <li><span className="hint-em">rechtstotal (surjektiv)</span>: JEDES b ∈ A kommt mindestens einmal als rechte Komponente vor. Formal: ∀b ∃a: (a,b)∈R.</li>
                <li><span className="hint-em">linkseindeutig (injektiv)</span>: gleiche rechte → gleiche linke. Formal: (a,c)∈R und (b,c)∈R ⟹ a=b. (Kein rechtes Element hat zwei verschiedene Partner links.)</li>
                <li><span className="hint-em">rechtseindeutig</span>: gleiche linke → gleiche rechte. Formal: (a,b)∈R und (a,c)∈R ⟹ b=c. (Jedes linke Element hat höchstens einen Partner rechts.)</li>
              </ul>
              <p><span className="hint-em">Funktion</span> = linkstotal UND rechtseindeutig (jedes a hat genau einen Partner b). Merke: Rechtseindeutigkeit allein genügt NICHT — ohne Linkstotalität fehlt manchen a überhaupt ein Wert.</p>
              <p>Notation: m | n heißt „m teilt n" (es gibt k∈ℤ mit n = m·k); z.B. 2|6 (denn 6=2·3), aber 2∤5. Symbole: x² (Quadrat), x³ (Kubik). R₁ = {'{(x², x³) : x∈ℝ}'} ⊆ ℝ×ℝ; R₂ = {'{(m,n) : m,n∈ℤ, m|n}'} ⊆ ℤ×ℤ.</p>
            </>,
            <>
              <p>Lösung für R₁ = {'{(x², x³) : x∈ℝ}'} (Schlüssel: linke Komponente ist x², rechte x³, gekoppelt durch dasselbe x):</p>
              <pre className="hint-code-block">{`linkstotal? Linke Komponenten sind x² ≥ 0. Eine negative
   Zahl wie −1 kommt nie links vor (kein x² = −1).
   → NICHT linkstotal.
rechtstotal? Rechte Komponenten sind x³; x³ durchläuft ganz ℝ
   (auch negativ: (−2)³=−8). Jedes y∈ℝ ist ein x³.
   → rechtstotal ✓.
linkseindeutig? Gleiche rechte (x³=z³) ⟹ x=z (Kubik ist
   eindeutig umkehrbar) ⟹ x²=z² → gleiche linke.
   → linkseindeutig ✓.
rechtseindeutig? Gleiche linke (x²=z²) erlaubt x=z ODER x=−z.
   Bsp x=1, z=−1: (1, 1) und (1, −1) ∈ R₁ → gleiche linke (1),
   verschiedene rechte (1 ≠ −1).  → NICHT rechtseindeutig.
→ R₁ ist KEINE Funktion (nicht rechtseindeutig).`}</pre>
              <p>Lösung für R₂ = {'{(m,n) : m|n}'}:</p>
              <pre className="hint-code-block">{`linkstotal? Für jedes m gilt m|m (m = m·1) → (m,m)∈R₂.
   Jedes m kommt links vor. → linkstotal ✓.
rechtstotal? Für jedes n gilt 1|n (n = 1·n) → (1,n)∈R₂.
   Jedes n kommt rechts vor. → rechtstotal ✓.
linkseindeutig? Gleiche rechte (Teiler von 4): 2|4 und 4|4
   → (2,4) und (4,4) → gleiche rechte (4), verschiedene
   linke (2≠4). → NICHT linkseindeutig.
rechtseindeutig? Gleiche linke: 2|4 und 2|6 → (2,4) und (2,6)
   → gleiche linke (2), verschiedene rechte. → NICHT
   rechtseindeutig.
→ R₂ ist KEINE Funktion (nicht rechtseindeutig).`}</pre>
              <p>Antwort: Keine der beiden Relationen ist eine Funktion (beide nicht rechtseindeutig).</p>
            </>,
            <>
              <p>Anderes Beispiel: S = {'{(n, n+1) : n∈ℤ}'} ⊆ ℤ×ℤ (jede Zahl mit ihrem Nachfolger).</p>
              <pre className="hint-code-block">{`linkstotal? jedes n kommt links vor ((n,n+1)) → JA
rechtstotal? jedes m kommt rechts vor: m = (m−1)+1 → JA
rechtseindeutig? n bestimmt n+1 eindeutig → JA
linkseindeutig? n+1 = k+1 ⟹ n=k → JA
→ S ist linkstotal + rechtseindeutig → FUNKTION (sogar bijektiv).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „linkseindeutig" als „jede linke Komponente kommt nur einmal vor" deuten → <strong>✅ Richtig:</strong> linkseindeutig heißt „gleiche RECHTE → gleiche linke". Bei R₁ liefern x=1,−1 die Paare (1,1) und (1,−1): gleiche linke, verschiedene rechte → das verletzt RECHTSeindeutigkeit, nicht Linkseindeutigkeit.</li>
              <li><strong>❌ Falsch:</strong> bei R₂ aus m|m schließen, R₂ sei eindeutig → <strong>✅ Richtig:</strong> m|m zeigt nur Linkstotalität (jedes m kommt links vor). Eindeutigkeit verlangt mehr; 2|4 und 2|6 widerlegen Rechtseindeutigkeit.</li>
              <li><strong>❌ Falsch:</strong> R₁ für eine Funktion halten, weil es „aus x gebildet" ist → <strong>✅ Richtig:</strong> Maßgeblich sind die Paare (x²,x³); zwei verschiedene Paare mit gleicher linker Seite (1,1)/(1,−1) zeigen: keine Funktion.</li>
            </ul>,
            <p>Selbstkontrolle: Für R₁ ist (1, −1) ein Element (x=−1: ((−1)², (−1)³)=(1,−1)) und (1, 1) auch (x=1). Gleiche linke 1, zwei rechte → nicht rechtseindeutig → keine Funktion. Frage: Warum reicht Rechtseindeutigkeit allein nicht für eine Funktion, und welche zweite Eigenschaft muss zusätzlich gelten?</p>,
          ),
          solution: 'R₁ ist:\n  – nicht linkstotal  (negative Zahlen sind kein Quadrat)\n  – rechtstotal       (x³ : ℝ → ℝ ist surjektiv)\n  – linkseindeutig    (x³ = y³ ⟹ x = y ⟹ x² = y²)\n  – nicht rechtseindeutig  (x=1 und x=−1 liefern (1,1) und (1,−1))\n\nR₂ ist:\n  – linkstotal        (m | m für alle m)\n  – rechtstotal       (1 | n für alle n)\n  – nicht linkseindeutig  (2|4 und 4|4)\n  – nicht rechtseindeutig (2|4 und 2|6)\n\nEine Funktion ist nicht dabei.',
        },
      ],
    },
    {
      id: 'b5a6',
      nr: 6,
      title: 'Abzählbarkeit (Wenn noch Zeit ist ...)',
      referenz: ['abzaehlbarkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Ist ℕ × ℕ abzählbar?',
          hint: h(
            <>
              <p>Eine Menge M heißt <span className="hint-em">abzählbar (unendlich)</span>, wenn man ihre Elemente in einer unendlichen Liste der Reihe nach durchnummerieren kann — formal: wenn es eine <span className="hint-em">Bijektion ℕ → M</span> gibt (eine eindeutige Nummerierung 0,1,2,… ohne Lücke und ohne Dopplung). Anschaulich: „man kann alle Elemente irgendwann erreichen, wenn man nur lange genug zählt".</p>
              <p>Gegenstück: <span className="hint-em">überabzählbar</span> = es gibt KEINE solche vollständige Liste (z.B. ℝ — Cantors Diagonalargument). Wichtig: „unendlich" heißt NICHT automatisch „überabzählbar". ℕ×ℕ ist unendlich, aber abzählbar.</p>
              <p>ℕ×ℕ = alle Paare (m,n) natürlicher Zahlen. Eine naive Aufzählung „erst alle (0,n), dann alle (1,n), …" scheitert: schon die erste Zeile (0,0),(0,1),(0,2),… ist unendlich, man käme nie zu (1,0). Lösung: <span className="hint-em">Diagonalverfahren (Cantor)</span> — die Paare nach der Summe m+n gruppieren.</p>
            </>,
            <>
              <p>So zeigt man, dass ℕ×ℕ abzählbar ist:</p>
              <pre className="hint-code-block">{`1) Die „Diagonale Nr. k" = alle Paare (m,n) mit m+n = k.
   Diagonale 0: (0,0)                         → 1 Paar
   Diagonale 1: (1,0), (0,1)                  → 2 Paare
   Diagonale 2: (2,0), (1,1), (0,2)           → 3 Paare
   Diagonale 3: (3,0), (2,1), (1,2), (0,3)    → 4 Paare
   …  JEDE Diagonale ist ENDLICH (genau k+1 Paare).

2) Aufzählen, Diagonale für Diagonale (innerhalb fester
   Reihenfolge, z.B. erst kleineres m):
   (0,0), (1,0), (0,1), (2,0), (1,1), (0,2), (3,0), …
   Das definiert eine Bijektion f : ℕ → ℕ×ℕ.

3) Wird jedes Paar erreicht? Ein beliebiges (m,n) hat die
   feste Summe s = m+n, liegt also in Diagonale s. Diese wird
   nach endlich vielen Schritten abgearbeitet → (m,n) bekommt
   eine endliche Nummer. → jedes Paar wird genau einmal
   getroffen → Bijektion → ℕ×ℕ abzählbar. □`}</pre>
              <p>Der Kniff: Statt unendlicher Zeilen nimmt man endliche Diagonalen — so erwischt man jedes Paar nach endlich vielen Schritten.</p>
            </>,
            <>
              <p>Analoges Beispiel: ℤ ist abzählbar. Man kann ℤ nicht „von −∞ nach +∞" auflisten, aber abwechselnd:</p>
              <pre className="hint-code-block">{`0, 1, −1, 2, −2, 3, −3, …
Bijektion g : ℕ → ℤ,  g(0)=0, g(ungerade 2k−1)=k,
   g(gerade 2k)=−k.
Jede ganze Zahl bekommt eine endliche Nummer → ℤ abzählbar.
Allgemein: jedes endliche Produkt abzählbarer Mengen ist abzählbar.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℕ×ℕ sei überabzählbar, weil es „unendlich viele unendliche Zeilen" hat → <strong>✅ Richtig:</strong> Das Diagonalverfahren liefert eine echte Bijektion ℕ→ℕ×ℕ; ℕ×ℕ ist abzählbar. Überabzählbar ist ℝ, nicht ℕ×ℕ.</li>
              <li><strong>❌ Falsch:</strong> zeilenweise aufzählen (erst ganze Zeile m=0, dann m=1) → <strong>✅ Richtig:</strong> Eine Zeile ist schon unendlich → man erreicht nie die nächste. Diagonalen sind ENDLICH und werden daher alle erreicht.</li>
              <li><strong>❌ Falsch:</strong> „unendlich ⟹ überabzählbar" → <strong>✅ Richtig:</strong> Abzählbar-unendlich (ℕ, ℤ, ℚ, ℕ×ℕ) und überabzählbar (ℝ) sind verschiedene Stufen von Unendlichkeit.</li>
            </ul>,
            <p>Selbstkontrolle: In welcher Diagonale liegt (3,2)? Summe 3+2=5 → Diagonale 5 (die 6 Paare (5,0),(4,1),(3,2),(2,3),(1,4),(0,5)). Sie wird nach endlich vielen Schritten erreicht. Frage: Warum garantiert das Sortieren nach der Summe m+n, dass jedes Paar eine endliche Nummer bekommt — und warum scheitert das zeilenweise Aufzählen genau daran?</p>,
          ),
          solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion f : ℕ → ℕ×ℕ:\n(0,0), (1,0), (0,1), (2,0), (1,1), (0,2), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
        },
        {
          letter: 'b',
          text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
          hint: h(
            <>
              <p>Dedekinds Definition: M ist <span className="hint-em">unendlich</span>, wenn es eine <span className="hint-em">echte Teilmenge</span> K ⊊ M gibt, die sich bijektiv auf ganz M abbilden lässt. „Echt" (K ⊊ M, gesprochen K ⊆ M und K ≠ M) heißt: K liegt in M, ist aber NICHT ganz M — mindestens ein Element von M fehlt in K.</p>
              <p>Das Verblüffende: Bei endlichen Mengen geht das nie (eine echte Teilmenge hat immer weniger Elemente). Bei unendlichen Mengen schon — gerade das macht sie unendlich. „Bijektiv" = injektiv (verschiedene Inputs → verschiedene Outputs) und surjektiv (jedes Ziel wird getroffen).</p>
              <p>Plan: Lasse EIN Element aus ℕ weg (z.B. die 0), nimm K = ℕ\{'{0}'} = {'{1,2,3,…}'}, und „verschiebe" die übrigen Zahlen um 1 nach unten: f(n) = n−1. Das soll K bijektiv auf ganz ℕ abbilden.</p>
            </>,
            <>
              <p>So führt man den Beweis Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) Echte Teilmenge wählen:
   K := ℕ \\ {0} = {1, 2, 3, …}.
   K ⊆ ℕ ✓ und K ≠ ℕ (denn 0 ∉ K) → K ⊊ ℕ echt ✓

2) Abbildung definieren:
   f : K → ℕ,  n ↦ n − 1.
   (f(1)=0, f(2)=1, f(3)=2, …; Werte landen in ℕ, da n≥1.)

3) Injektivität zeigen:
   Annahme f(n) = f(m), also n−1 = m−1.
   Addiere 1 auf beiden Seiten → n = m. ✓

4) Surjektivität zeigen:
   Sei k ∈ ℕ beliebig. Wähle n := k+1. Dann ist n ≥ 1,
   also n ∈ K, und f(n) = (k+1) − 1 = k. ✓
   → jedes k∈ℕ wird getroffen.

5) Schluss: f ist bijektiv (3+4) und K ⊊ ℕ echt (1).
   → ℕ erfüllt Dedekinds Bedingung → ℕ ist unendlich. □`}</pre>
            </>,
            <>
              <p>Andere gültige Wahl (gerade Zahlen): K := {'{0,2,4,6,…}'} ⊊ ℕ (ungerade fehlen).</p>
              <pre className="hint-code-block">{`Bijektion f : K → ℕ,  n ↦ n/2  (n ist gerade → n/2 ∈ ℕ).
   f(0)=0, f(2)=1, f(4)=2, …
injektiv:  n/2 = m/2 ⟹ n = m ✓
surjektiv: zu k∈ℕ wähle n = 2k ∈ K, dann f(2k) = k ✓
→ auch das beweist die Dedekind-Unendlichkeit von ℕ.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss ECHT sein (K ≠ ℕ), also mindestens ein Element auslassen. K = ℕ\{'{0}'} lässt die 0 weg und erfüllt das.</li>
              <li><strong>❌ Falsch:</strong> „f ist offensichtlich bijektiv" ohne Beweis → <strong>✅ Richtig:</strong> Beide Teile zeigen: injektiv (n−1=m−1 ⟹ n=m) UND surjektiv (zu k∈ℕ leistet n=k+1 ∈ K gerade f(k+1)=k).</li>
              <li><strong>❌ Falsch:</strong> f : ℕ → K statt f : K → ℕ definieren und Richtung verwechseln → <strong>✅ Richtig:</strong> Gefordert ist eine Bijektion von der echten Teilmenge K AUF ganz M=ℕ; Definitionsbereich ist K, Zielmenge ist ℕ.</li>
            </ul>,
            <p>Selbstkontrolle: Ist K=ℕ\{'{0}'} wirklich echt? Ja, 0∈ℕ aber 0∉K. Triff k=5: n=6∈K, f(6)=5 ✓. Sind zwei verschiedene n,m je auf dasselbe abgebildet? Nein (n−1=m−1 ⟹ n=m). Frage: Warum funktioniert dieser „Verschiebe-Trick" bei ℕ, aber niemals bei einer endlichen Menge wie {'{1,2,3}'} — was unterscheidet endlich von unendlich?</p>,
          ),
          solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
        },
      ],
    },
  ],
}
