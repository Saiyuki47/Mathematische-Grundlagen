import type { MatheBlatt } from '../../types'
import { h } from './shared'

export const blatt5: MatheBlatt = {
  id: 'blatt5',
  nr: '5',
  titel: 'Relationen, Funktionen, Abzählbarkeit',
  aufgaben: [
    {
      id: 'b5a1',
      nr: 1,
      title: 'Graph einer Funktion',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℤ → ℕ,  z ↦ |z|\n\ngegeben?\n\n(i)   ℤ × ℕ\n(ii)  {(−n, n) : n ∈ ℕ} ∪ {(n, n) : n ∈ ℕ*}\n(iii) {(z, |z|) : z ∈ ℤ}',
          hint: h(
            <>
              <p>Der <span className="hint-em">Graph einer Funktion</span> f : A → B ist die Menge aller Paare (x, f(x)) mit x ∈ A:</p>
              <p>Graph(f) = {'{(x, f(x)) : x ∈ A}'}</p>
              <p>Ein Set beschreibt denselben Graphen, wenn er genau diese Paare enthält — nicht mehr, nicht weniger.</p>
            </>,
            <>
              <ol>
                <li>Schreibe die Definition: Graph(f) = {'{(x, f(x)) : x ∈ Domain}'}</li>
                <li>Prüfe jede kandidatische Menge: Enthält sie exakt die Paare (x, f(x)) — weder mehr noch weniger?</li>
                <li>Für „zu groß": Finde ein Paar (a, b), das in der Kandidatenmenge liegt, aber nicht auf dem Graphen liegt</li>
                <li>Für Parametersubstitution: Prüfe, ob eine Umbenennung des Laufparameters die Menge in die Standardform {'{(x, f(x)):x∈Domain}'} überführt</li>
              </ol>
            </>,
            <>
              <p>Beispiel: f : ℝ → ℝ, x ↦ x²</p>
              <pre className="hint-code-block">{`Graph(f) = {(x, x²) : x ∈ ℝ}
ℝ × ℝ wäre zu groß (enthält z. B. (1,5))
{(x, x²) : x ≥ 0} wäre zu klein (fehlt z. B. (−1, 1))`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℤ × ℕ als Graphen angeben → <strong>✅ Richtig:</strong> ℤ × ℕ enthält alle Paare (z,n) mit z∈ℤ, n∈ℕ — z.B. (1,5), aber f(1)=1≠5; der Graph ist viel kleiner</li>
              <li><strong>❌ Falsch:</strong> Bei (ii) z=0 nicht prüfen → <strong>✅ Richtig:</strong> (0,0) liegt in der ersten Teilmenge {'{(−n,n):n∈ℕ}'} mit n=0 ✓</li>
            </ul>,
            <p>Was macht eine Menge A zu einem gültigen Graphen von f — und warum reicht es nicht, dass A alle richtigen Paare enthält, wenn A auch falsche enthält?</p>,
          ),
          solution: '(i)  nein – ℤ × ℕ enthält Paare wie (1, 5), die nicht auf dem Graph liegen.\n(ii) ja   – für z < 0: (−n, n); für z = 0: (0, 0) ∈ erste Menge; für z > 0: (n, n) ∈ zweite Menge.\n(iii) ja  – exakt die mengentheoretische Definition des Graphen von f.',
        },
        {
          letter: 'b',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℝ → ℝ,  x ↦ x − 1\n\ngegeben?\n\n(i)   ℝ × ℝ\n(ii)  {(x + 1, x) : x ∈ ℝ}\n(iii) {(x, x − 1) : x ∈ ℝ}',
          hint: h(
            <>
              <p>Graph(f) = {'{(x, x−1) : x ∈ ℝ}'}. Bei verschobenen Koordinaten prüfen, ob die Menge dieselben Paare beschreibt — eventuell mit einer Umbenennung des Laufparameters.</p>
            </>,
            <>
              <ol>
                <li>Prüfe ℝ × ℝ: Finde ein Paar (a, b), das in der Menge liegt, aber nicht auf dem Graphen</li>
                <li>Prüfe die Substitutionsform: Führe eine Umbenennung des Laufparameters durch und prüfe, ob die Menge dann als {'{(x, x−1):x∈ℝ}'} erscheint</li>
                <li>Prüfe die Direktform: Entspricht sie exakt der Definition des Graphen?</li>
              </ol>
            </>,
            <>
              <p>Umbenennung: Ein Laufparameter in einem Set-Ausdruck ist nur ein Platzhalter. {'{(x+1, x) : x ∈ ℝ}'} und {'{(t, t−1) : t ∈ ℝ}'} beschreiben dieselbe Menge.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (ii) ablehnen weil die Form anders aussieht → <strong>✅ Richtig:</strong> Umsubstitution t=x+1 zeigt, dass {'{(x+1,x):x∈ℝ}'} = {'{(t,t−1):t∈ℝ}'} = Graph(f)</li>
              <li><strong>❌ Falsch:</strong> ℝ×ℝ als Graphen akzeptieren → <strong>✅ Richtig:</strong> ℝ×ℝ enthält z.B. (0,5), aber f(0)=−1≠5; zu groß</li>
            </ul>,
            <p>Warum sind {'{(x+1, x):x∈ℝ}'} und {'{(x, x−1):x∈ℝ}'} dieselbe Menge — obwohl der Laufparameter x in beiden Ausdrücken anderes bedeutet? Was ändert sich beim Umbenennen eines gebundenen Variablennamens?</p>,
          ),
          solution: '(i)  nein – zu groß.\n(ii) ja   – Umsubstitution t = x+1 liefert {(t, t−1) : t ∈ ℝ} = Graph(f).\n(iii) ja  – exakt die Definition.',
        },
        {
          letter: 'c',
          text: 'Durch welche der nachfolgenden Mengen ist der Graph der Funktion\n\nf : ℕ → ℕ,  n ↦ 1\n\ngegeben?\n\n(i)   ℕ × {1}\n(ii)  {(n, 1) : n ∈ ℕ}\n(iii) {1} × ℕ',
          hint: h(
            <>
              <p>f ist eine konstante Funktion: Jeder Input n wird auf 1 abgebildet. Der Graph enthält genau die Paare (n, 1) für alle n ∈ ℕ.</p>
            </>,
            <>
              <ol>
                <li>Schreibe Graph(f) explizit auf: Welches Paar (Input, Output) enthält er für jeden n ∈ ℕ?</li>
                <li>Für Kandidaten mit ×-Notation: Forme A × B als Mengenbeschreibung aus und vergleiche direkt mit dem Graphen</li>
                <li>Für Listendarstellungen: Prüfe, ob die Form exakt dem Graphen entspricht</li>
                <li>Für falsche Kandidaten: Finde ein konkretes Paar, das in der Menge liegt, aber nicht im Graphen — oder ein Paar aus dem Graphen, das fehlt</li>
              </ol>
            </>,
            <>
              <p>Achtung: {'{1} × ℕ'} und {'ℕ × {1}'} unterscheiden sich durch die Reihenfolge der Komponenten!</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> {'{1} × ℕ'} und {'ℕ × {1}'} gleichsetzen → <strong>✅ Richtig:</strong> {'ℕ × {1}'} = {'{(n,1):n∈ℕ}'} (Input links, Output rechts); {'{1} × ℕ'} = {'{(1,n):n∈ℕ}'} (vertauscht) — völlig verschieden</li>
            </ul>,
            <p>Warum ist {'ℕ × {1}'} dasselbe wie der Graph von f, aber {'{1} × ℕ'} eine völlig andere Menge — obwohl beide „1" und „alle natürliche Zahlen" kombinieren?</p>,
          ),
          solution: '(i)  ja   – ℕ × {1} = {(n, 1) : n ∈ ℕ} = Graph(f).\n(ii) ja   – exakt die Definition.\n(iii) nein – {1} × ℕ = {(1, n) : n ∈ ℕ} vertauscht Input und Output.',
        },
      ],
    },
    {
      id: 'b5a2',
      nr: 2,
      title: 'Bilder und Urbilder',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Betrachten Sie die Abbildungen\n\nf : ℝ \\ {2} → ℝ,  x ↦ x²   und   h : ℝ → ℝ,  x ↦ |x|.\n\nBestimmen Sie:\n(i)   f(ℝ \\ {2})\n(ii)  f⁻¹({4, 9})\n(iii) h([0, 5])\n(iv)  h([−5, 5])\n(v)   h⁻¹([0, 5])\n(vi)  h⁻¹([−5, 5])\n(vii) h(ℤ)',
          hint: h(
            <>
              <p>Unterschied <span className="hint-em">Bild vs. Urbild</span>:</p>
              <ul>
                <li>f(A) = {'{f(x) : x ∈ A}'} – Menge der Funktionswerte für Inputs aus A</li>
                <li>f⁻¹(B) = {'{x ∈ Domain : f(x) ∈ B}'} – Menge aller Inputs, die in B landen</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Für Bilder f(A): Bestimme, welche y-Werte die Funktion für Inputs aus A annehmen kann — beachte, ob eine Einschränkung des Definitionsbereichs tatsächlich den Wertebereich einschränkt</li>
                <li>Für Urbilder f⁻¹(B): Suche alle x im Definitionsbereich, für die f(x) ∈ B gilt — f⁻¹ ist hier die Urbildmenge, nicht die Umkehrfunktion</li>
                <li>Bei negativen Zielmengen: Prüfe, ob die Funktion überhaupt negative Werte liefern kann</li>
                <li>Beachte Definitionsbereichsausschlüsse: Auch wenn ein x ausgeschlossen ist, kann sein Bildwert durch ein anderes x erreichbar sein</li>
              </ol>
            </>,
            <>
              <p>Bei f⁻¹: Es werden alle x gesucht, die auf den gewünschten Wert treffen — im gegebenen Definitionsbereich!</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Bei (i) f(ℝ\{'{2}'}) = [0,∞)\{'{4}'}, weil x=2 fehlt → <strong>✅ Richtig:</strong> 4=(−2)² und −2 ∈ ℝ\{'{2}'}, also wird 4 trotzdem im Bild erreicht; f(ℝ\{'{2}'}) = [0,∞)</li>
              <li><strong>❌ Falsch:</strong> Bei (vi) h⁻¹([−5,5]) = ∅ weil |x| ≥ 0 → <strong>✅ Richtig:</strong> |x| ≥ 0 immer, aber [−5,5] enthält auch [0,5]; also |x| ∈ [0,5] ⟺ x ∈ [−5,5]</li>
              <li><strong>❌ Falsch:</strong> h(ℤ) = ℤ → <strong>✅ Richtig:</strong> |n| ≥ 0 für alle n ∈ ℤ; h(ℤ) = {'{|n| : n ∈ ℤ}'} = {'{0,1,2,...}'} = ℕ</li>
            </ul>,
            <p>Warum ist h⁻¹([−5, 5]) dasselbe wie h⁻¹([0, 5]), obwohl die Zielmenge verschieden ist — und was sagt das über den Unterschied zwischen Urbildmenge und Umkehrfunktion?</p>,
          ),
          solution: '(i)   f(ℝ \\ {2}) = [0, ∞)   (4 = (−2)² wird trotz x=2 ∉ Domain erreicht)\n(ii)  f⁻¹({4, 9}) = {−2, 3, −3}   (x=2 ist ausgeschlossen)\n(iii) h([0, 5]) = [0, 5]\n(iv)  h([−5, 5]) = [0, 5]\n(v)   h⁻¹([0, 5]) = [−5, 5]\n(vi)  h⁻¹([−5, 5]) = [−5, 5]   (da |x| ≥ 0, wirkt nur der Teil [0,5])\n(vii) h(ℤ) = ℕ',
        },
      ],
    },
    {
      id: 'b5a3',
      nr: 3,
      title: 'Injektivität, Surjektivität, Bijektivität',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien X := {1,2,3,4,5},  Y := {1,2,3}  und  φ : X → Y  durch\n\nφ(1) := 3,  φ(2) := 3,  φ(3) := 2,  φ(4) := 1,  φ(5) := 3\n\ngegeben. Geben Sie jeweils ein Beispiel für eine nichtleere Teilmenge M von X derart an, dass die Abbildung φ : M → Y bijektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">Bijektiv</span> = injektiv + surjektiv. φ|_M muss jeden Wert in Y genau einmal treffen.</p>
              <p>Y = {'{1, 2, 3}'} hat 3 Elemente — M muss also genau 3 Elemente haben, die alle verschiedene Bilder in Y haben.</p>
            </>,
            <>
              <ol>
                <li>Erstelle eine Tabelle: Welches Bild hat jedes Element aus X?</li>
                <li>Gruppiere die Elemente nach ihrem Bildwert (z.B. alle mit Bild 3, alle mit Bild 2, alle mit Bild 1)</li>
                <li>Für Bijektivität: Wähle aus jeder Bildwert-Gruppe genau einen Repräsentanten — so erhält man eine M mit allen Y-Werten genau einmal</li>
                <li>Prüfe: |M| = |Y|, alle Bilder verschieden, Y vollständig abgedeckt</li>
              </ol>
            </>,
            <>
              <p>Systematische Suche: Welche Elemente liefern welches Bild?</p>
              <pre className="hint-code-block">{`Bild 1 liefern:  φ(4) = 1
Bild 2 liefern:  φ(3) = 2
Bild 3 liefern:  φ(1) = 3, φ(2) = 3, φ(5) = 3

Für Bijektivität: je genau einen Repräsentanten pro Bild wählen.
→ M = {4, 3, 1} oder {4, 3, 2} oder {4, 3, 5} sind alle gültig!`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,2,4}'}: φ(1)=3, φ(2)=3 → Kollision → <strong>✅ Richtig:</strong> Aus den drei Elementen mit Bild 3 ({'{1,2,5}'}) nur eines wählen; M = {'{1,3,4}'} oder {'{2,3,4}'} oder {'{5,3,4}'}</li>
              <li><strong>❌ Falsch:</strong> |M| ≠ |Y| erlaubt → <strong>✅ Richtig:</strong> Für Bijektivität muss |M| = |Y| = 3 gelten (je ein Element pro Bild)</li>
            </ul>,
            <p>Kontrolle: Sind alle Bilder verschieden? Decken sie ganz Y ab?</p>,
          ),
          solution: 'M = {1, 3, 4}: φ(1)=3, φ(3)=2, φ(4)=1 – injektiv (alle Bilder verschieden) und surjektiv (trifft 1, 2, 3).',
        },
        {
          letter: 'b',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y surjektiv, aber nicht injektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">Surjektiv aber nicht injektiv</span>: Alle Werte in Y werden getroffen, aber mindestens ein Wert wird doppelt angenommen.</p>
            </>,
            <>
              <ol>
                <li>Stelle sicher, dass alle Werte aus Y im Bild von φ|_M vertreten sind — das garantiert Surjektivität</li>
                <li>Füge zusätzlich ein Element ein, das einen Bildwert hat, der schon vorhanden ist — das erzwingt die Nicht-Injektivität</li>
                <li>Prüfe: Ist jeder Wert von Y getroffen? Gibt es mindestens zwei Elemente in M mit gleichem Bild?</li>
              </ol>
            </>,
            <>
              <p>Kleinste surjektive aber nicht injektive Teilmenge:</p>
              <pre className="hint-code-block">{`Brauche: Bild 1 ✓, Bild 2 ✓, Bild 3 ✓, aber Kollision.
Bild 1: φ(4)=1   → 4 muss in M sein
Bild 2: φ(3)=2   → 3 muss in M sein
Bild 3: zwei aus {1,2,5} → z.B. 1 und 2

M = {1, 2, 3, 4} ist eine minimale solche Menge.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{3,4}'}: Bilder {'{1,2}'} → Bild 3 fehlt → <strong>✅ Richtig:</strong> Für Surjektivität müssen 1, 2 und 3 alle im Bild liegen; mindestens eines der Elemente {'{1,2,5}'} muss in M</li>
              <li><strong>❌ Falsch:</strong> M bijektiv wählen → <strong>✅ Richtig:</strong> Gefordert ist Surjektivität ohne Injektivität — M muss eine Kollision haben (zwei Elemente mit gleichem Bild)</li>
            </ul>,
            <p>Ist jedes Element von Y mindestens einmal als Bild vorhanden? Gibt es ein Bild, das zweimal auftaucht?</p>,
          ),
          solution: 'M = X = {1,2,3,4,5}: surjektiv (alle Werte 1,2,3 getroffen), nicht injektiv (z. B. φ(1)=φ(2)=φ(5)=3).',
        },
        {
          letter: 'c',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y injektiv, aber nicht surjektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">Injektiv aber nicht surjektiv</span>: Alle Bilder verschieden, aber nicht alle Werte in Y werden getroffen.</p>
              <p>Kleine M mit höchstens 2 Elementen, die auf verschiedene Werte abgebildet werden.</p>
            </>,
            <>
              <ol>
                <li>Wähle M so klein, dass keine zwei Elemente dasselbe Bild haben — das garantiert Injektivität ohne aufwändige Prüfung</li>
                <li>Prüfe, dass nicht alle Werte aus Y getroffen werden — das garantiert fehlende Surjektivität</li>
                <li>Merke: Eine einelementige Menge M ist immer injektiv — prüfe, ob das für diese Aufgabe genügt</li>
              </ol>
            </>,
            <>
              <p>Weitere injektive, nicht surjektive Teilmengen:</p>
              <pre className="hint-code-block">{`M = {3, 4}:   φ(3)=2, φ(4)=1 → beide verschieden ✓
            Bild = {1, 2},  3 fehlt → nicht surjektiv ✓

M = {1, 3}:   φ(1)=3, φ(3)=2 → beide verschieden ✓
            Bild = {2, 3},  1 fehlt → nicht surjektiv ✓

Merkhilfe: Einelementige M sind immer injektiv.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} wählen (bijektiv) → <strong>✅ Richtig:</strong> Bijektiv ist zu stark; gefordert ist injektiv-aber-nicht-surjektiv, also darf nicht jeder Wert aus Y getroffen werden</li>
              <li><strong>❌ Falsch:</strong> M = {'{1,2}'} wählen: φ(1)=3=φ(2) → Kollision → nicht injektiv → <strong>✅ Richtig:</strong> Für Injektivität keine zwei Elemente mit gleichem Bild in M; {'{1}'} allein reicht</li>
            </ul>,
            <p>Sind alle Bilder in M verschieden? Fehlt mindestens ein Wert aus Y?</p>,
          ),
          solution: 'M = {1}: φ(1)=3 – injektiv (nur ein Element), nicht surjektiv (1 und 2 nicht getroffen).',
        },
        {
          letter: 'd',
          text: 'Seien X, Y, φ wie in (a). Geben Sie ein Beispiel für eine nichtleere Teilmenge M von X an, so dass φ : M → Y weder injektiv noch surjektiv ist.',
          hint: h(
            <>
              <p><span className="hint-em">Weder injektiv noch surjektiv</span>: Ein Bild kommt doppelt vor, und gleichzeitig fehlt mindestens ein Wert aus Y.</p>
            </>,
            <>
              <ol>
                <li>Wähle zwei Elemente aus X, die denselben Bildwert haben — das verletzt die Injektivität direkt</li>
                <li>Prüfe, ob die gewählten Elemente alle Werte aus Y abdecken — idealerweise fehlen mehrere Y-Werte</li>
                <li>Wenn Kollision vorhanden UND mindestens ein Y-Wert fehlt: beide Bedingungen (nicht injektiv, nicht surjektiv) erfüllt</li>
              </ol>
            </>,
            <>
              <p>Übersichtstabelle aller 4 möglichen Eigenschaften-Kombinationen:</p>
              <pre className="hint-code-block">{`Eigenschaft         | Anforderung an M
--------------------|----------------------------------
Bijektiv            | |M|=3, alle Bilder verschieden, ganz Y getroffen
Surjektiv ¬injektiv | Alle Y-Werte getroffen, aber Kollision vorhanden
Injektiv ¬surjektiv | Keine Kollision, aber Y nicht vollständig getroffen
Weder noch          | Kollision vorhanden UND Y nicht vollständig

→ M={1,2}: Kollision (3,3) ✓, nur {3} als Bild ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> M = {'{1,3,4}'} wählen (bijektiv, alle drei Werte getroffen und verschieden) → <strong>✅ Richtig:</strong> „Weder noch" erfordert gleichzeitig Kollision UND fehlenden Wert; bijektive M erfüllen keine dieser Bedingungen</li>
              <li><strong>❌ Falsch:</strong> Nur eine der beiden Bedingungen prüfen → <strong>✅ Richtig:</strong> M = {'{1,2}'}: φ(1)=3, φ(2)=3 → Kollision (nicht injektiv) ✓ UND {'{1,2}'} ∉ Bild (nicht surjektiv) ✓</li>
            </ul>,
            <p>Gibt es eine Kollision im Bild? Fehlt gleichzeitig ein Wert aus Y?</p>,
          ),
          solution: 'M = {1, 2}: φ(1)=φ(2)=3 – nicht injektiv (Kollision bei 3), nicht surjektiv (1 und 2 nicht getroffen).',
        },
      ],
    },
    {
      id: 'b5a4',
      nr: 4,
      title: 'Verkettung von Funktionen',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Gegeben seien die Funktionen\n\nf : ℝ → ℝ,  x ↦ x³ − 1   und   g : [0, ∞) → ℝ,  x ↦ √x + 2,\n\nwobei die Funktion [0,∞) → [0,∞), x ↦ √x die Umkehrfunktion der Funktion [0,∞) → [0,∞), x ↦ x² bezeichnet. Bestimmen Sie f ∘ g und g ∘ f sofern möglich.',
          hint: h(
            <>
              <p>Für die Verkettung (f ∘ g)(x) = f(g(x)) muss das <span className="hint-em">Bild von g</span> im Definitionsbereich von f liegen.</p>
              <p>Für (g ∘ f)(x) = g(f(x)) muss das Bild von f im Definitionsbereich von g liegen.</p>
            </>,
            <>
              <ol>
                <li>Für f∘g: Prüfe, ob Bild(g) ⊆ Definitionsbereich(f) gilt — wenn ja, ist die Verkettung definierbar</li>
                <li>Für g∘f: Prüfe, ob Bild(f) ⊆ Definitionsbereich(g) gilt — wenn nein, ist die Verkettung nicht möglich</li>
                <li>Bestimme den Definitionsbereich der möglichen Verkettung (Definitionsbereich der ersten angewendeten Funktion)</li>
                <li>Berechne die Formel: Ersetze x in der äußeren Funktion durch den Ausdruck der inneren Funktion</li>
              </ol>
            </>,
            <>
              <p>Beispiel: h : ℝ → ℝ≥0, x ↦ x², und k : ℝ≥0 → ℝ, x ↦ √x. Dann k∘h möglich (Bild h = ℝ≥0 ⊆ Dom k), h∘k möglich (Bild k = ℝ≥0 ⊆ Dom h = ℝ).</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> g∘f definieren ohne den Definitionsbereich zu prüfen → <strong>✅ Richtig:</strong> f(ℝ) = ℝ (da x³−1 alle reellen Werte annimmt), aber Dom(g) = [0,∞); da ℝ ⊄ [0,∞) ist g∘f nicht möglich</li>
              <li><strong>❌ Falsch:</strong> Reihenfolge bei f∘g verwechseln → <strong>✅ Richtig:</strong> (f∘g)(x) = f(g(x)): erst g (Input aus [0,∞)), dann f; nicht andersrum</li>
            </ul>,
            <p>Welche Werte kann f(x) = x³−1 annehmen? Ist das eine Teilmenge von [0,∞)?</p>,
          ),
          solution: 'f ∘ g : [0,∞) → ℝ,  x ↦ (√x + 2)³ − 1\n\ng ∘ f ist nicht möglich, da f(ℝ) = ℝ ⊄ [0,∞) = Dom(g).',
        },
        {
          letter: 'b',
          text: 'Betrachten Sie die Funktionen\n\nf : [0,∞) → [0,∞),  x ↦ x + 1\n\nund\n\ng : [0,∞) → [0,∞),  x ↦ { x−1,  falls x ≥ 1\n                         { 0,     sonst.\n\nUntersuchen Sie f, g, g ∘ f und f ∘ g jeweils auf Injektivität, Surjektivität und Bijektivität. Skizzieren Sie zunächst die jeweiligen Funktionsgraphen.',
          hint: h(
            <>
              <p>Berechne zuerst die Verkettungen, dann analysiere Injektivität (horizontal line test: jeder y-Wert höchstens einmal getroffen) und Surjektivität (jeder y-Wert mindestens einmal getroffen).</p>
            </>,
            <>
              <ol>
                <li>Berechne g∘f und f∘g explizit: Setze f(x) in g ein — nutze die Fallunterscheidung von g</li>
                <li>Prüfe Injektivität: Gibt es verschiedene Inputs mit gleichem Output? (Suche nach Kollisionen oder zeichne den Graphen)</li>
                <li>Prüfe Surjektivität: Welche Werte aus [0,∞) werden angenommen? Fehlt ein Wert?</li>
                <li>Analysiere f und g einzeln mit denselben zwei Tests — achte auf die Grenzwerte</li>
                <li>Fasse alle Ergebnisse in einer Übersichtstabelle zusammen</li>
              </ol>
            </>,
            <>
              <p>Zusammenfassung der 4 Eigenschaften für f, g, g∘f, f∘g:</p>
              <pre className="hint-code-block">{`Funktion | injektiv | surjektiv | bijektiv
---------|----------|-----------|----------
f(x)=x+1 | ja       | nein      | nein  (0 ∉ Bild f)
g(x)      | nein     | ja        | nein  (g(0)=g(0.5)=0)
g∘f       | ja       | ja        | ja    (x ↦ x, Identität)
f∘g       | nein     | nein      | nein  ([0,1) → 1)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> g∘f und f∘g verwechseln → <strong>✅ Richtig:</strong> (g∘f)(x) = g(f(x)): erst f anwenden, dann g; (f∘g)(x) = f(g(x)): erst g, dann f</li>
              <li><strong>❌ Falsch:</strong> Bei f∘g übersehen, dass x ∈ [0,1) alle auf 1 landen → <strong>✅ Richtig:</strong> g(x)=0 für x&lt;1, dann f(0)=1; also f∘g ist für x∈[0,1) konstant 1 → nicht injektiv</li>
              <li><strong>❌ Falsch:</strong> f als surjektiv einordnen → <strong>✅ Richtig:</strong> f(x)=x+1 ≥ 1 für alle x ≥ 0; der Wert 0 ∈ [0,∞) wird nie erreicht → nicht surjektiv</li>
            </ul>,
            <p>Warum ist g∘f bijektiv, obwohl weder f noch g allein bijektiv ist — und was sagt das über die Verkettung von Funktionen mit komplementären Mängeln?</p>,
          ),
          solution: 'f: injektiv, nicht surjektiv, nicht bijektiv  (0 ∉ Bild f)\ng: nicht injektiv, surjektiv, nicht bijektiv  (g(0)=g(0.5)=0)\n\ng∘f: [0,∞)→[0,∞), x↦x  → bijektiv\n\nf∘g: [0,∞)→[0,∞), x↦{ x falls x≥1; 1 sonst }\n  → nicht injektiv, nicht surjektiv, nicht bijektiv',
        },
      ],
    },
    {
      id: 'b5a5',
      nr: 5,
      title: 'Eigenschaften von Relationen (Wenn noch Zeit ist ...)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei R₁ die Relation\n\nR₁ = {(x², x³) : x ∈ ℝ} ⊆ ℝ × ℝ\n\nauf ℝ und R₂ die Relation\n\nR₂ = {(m, n) : m, n ∈ ℤ, m | n} ⊆ ℤ × ℤ\n\nauf ℤ. Welche der Eigenschaften linkstotal, rechtstotal, linkseindeutig und rechtseindeutig besitzen die Relationen jeweils? Ist eine Funktion dabei?',
          hint: h(
            <>
              <p>Definitionen für eine Relation R ⊆ A × A:</p>
              <ul>
                <li><span className="hint-em">linkstotal</span>: Jedes a ∈ A kommt als linke Komponente vor</li>
                <li><span className="hint-em">rechtstotal</span>: Jedes a ∈ A kommt als rechte Komponente vor</li>
                <li><span className="hint-em">linkseindeutig</span>: Rechte Komponente bestimmt linke eindeutig (kein b hat zwei Linksvorgänger)</li>
                <li><span className="hint-em">rechtseindeutig</span>: Linke Komponente bestimmt rechte eindeutig (Funktionseigenschaft)</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Prüfe jede der vier Eigenschaften separat: Schreibe die formale Definition auf, dann suche Nachweis oder Gegenbeispiel</li>
                <li>Linkstotal (∀a∈A ∃b: (a,b)∈R): Kann jedes a als linke Komponente auftreten?</li>
                <li>Rechtstotal (∀b∈A ∃a: (a,b)∈R): Kann jedes b als rechte Komponente auftreten?</li>
                <li>Linkseindeutig ((a,c),(b,c)∈R ⟹ a=b): Gleiche rechte Komponente → gleiche linke?</li>
                <li>Rechtseindeutig ((a,b),(a,c)∈R ⟹ b=c): Gleiche linke Komponente → gleiche rechte? (= Funktionseigenschaft)</li>
                <li>Für R₁: Beachte, dass x und −x denselben x²-Wert aber verschiedene x³-Werte liefern</li>
              </ol>
            </>,
            <>
              <p>Merkhilfe: Die 4 Eigenschaften und ihre Verbindung zu Funktionen:</p>
              <pre className="hint-code-block">{`Eigenschaft      | Bedeutung
-----------------|------------------------------------------
linkstotal       | Für jedes a ∈ A gibt es (a,b) ∈ R
rechtstotal      | Für jedes b ∈ A gibt es (a,b) ∈ R
linkseindeutig   | Gleiche rechte → gleiche linke Seite
rechtseindeutig  | Gleiche linke → gleiche rechte Seite (= Funktion!)

Eine Funktion R: A→A ist linkstotal + rechtseindeutig.
Eine bijektive Funktion ist zusätzlich linkseindeutig + rechtstotal.

Ergebnis: R₁ (rechtstotal, linkseindeutig) ist keine Funktion
        R₂ (linkstotal, rechtstotal) ist ebenfalls keine Funktion`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Linkseindeutig = linke Seite eindeutig → je ein Paar pro linker Komponente → <strong>✅ Richtig:</strong> Linkseindeutig heißt: gleiche rechte → gleiche linke; x=1 und x=−1 in R₁ geben (1,1) und (1,−1) → gleiche linke Komponente (1), verschiedene rechte → nicht rechtseindeutig</li>
              <li><strong>❌ Falsch:</strong> Bei R₂: m|m für alle m als „linkseindeutig" werten → <strong>✅ Richtig:</strong> m|m zeigt nur linkstotal (jedes m kommt links vor); linkseindeutig wäre: n|k und m|k ⟹ n=m — widerlegt durch 2|4 und 4|4</li>
            </ul>,
            <p>Warum reicht Rechtseindeutigkeit allein nicht aus, damit eine Relation eine Funktion ist — und welche der beiden Relationen R₁, R₂ ist näher daran, eine Funktion zu sein?</p>,
          ),
          solution: 'R₁ ist:\n  – nicht linkstotal  (negative Zahlen sind kein Quadrat)\n  – rechtstotal       (x³ : ℝ → ℝ ist surjektiv)\n  – linkseindeutig    (x³ = y³ ⟹ x = y ⟹ x² = y²)\n  – nicht rechtseindeutig  (x=1 und x=−1 liefern (1,1) und (1,−1))\n\nR₂ ist:\n  – linkstotal        (m | m für alle m)\n  – rechtstotal       (1 | n für alle n)\n  – nicht linkseindeutig  (2|4 und 4|4)\n  – nicht rechtseindeutig (2|4 und 2|6)\n\nEine Funktion ist nicht dabei.',
        },
      ],
    },
    {
      id: 'b5a6',
      nr: 6,
      title: 'Abzählbarkeit (Wenn noch Zeit ist ...)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Ist ℕ × ℕ abzählbar?',
          hint: h(
            <>
              <p>Eine Menge ist <span className="hint-em">abzählbar</span>, wenn es eine bijektive Abbildung ℕ → M gibt. Für ℕ × ℕ genügt eine systematische Aufzählung aller Paare.</p>
            </>,
            <>
              <ol>
                <li>Um Abzählbarkeit zu zeigen: Konstruiere eine bijektive Abbildung ℕ → ℕ×ℕ, d.h. eine Aufzählungsreihenfolge aller Paare</li>
                <li>Aufzählung Zeile für Zeile schlägt fehl (jede Zeile ist unendlich) — wähle stattdessen eine diagonale Traversierung</li>
                <li>Gruppiere Paare nach der Summe ihrer Komponenten: Diagonale k enthält alle (m,n) mit m+n = k</li>
                <li>Zeige, dass jedes Paar (m, n) in genau einer Diagonale erscheint — das beweist, dass die Aufzählung jedes Element trifft</li>
              </ol>
            </>,
            <>
              <p>Allgemein: Jedes endliche oder abzählbare kartesische Produkt abzählbarer Mengen ist abzählbar.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℕ×ℕ ist überabzählbar, weil es „unendlich viele unendliche Zeilen" hat → <strong>✅ Richtig:</strong> Die Diagonalen-Aufzählung zeigt, dass ℕ×ℕ abzählbar ist; überabzählbar ist z.B. ℝ (Cantors Diagonalargument)</li>
            </ul>,
            <p>Kann jedes Paar (m, n) ∈ ℕ×ℕ in der Liste gefunden werden? In welcher Diagonale liegt (m, n)?</p>,
          ),
          solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion f : ℕ → ℕ×ℕ:\n(0,0), (1,0), (0,1), (2,0), (1,1), (0,2), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
        },
        {
          letter: 'b',
          text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
          hint: h(
            <>
              <p>Man braucht eine echte Teilmenge K ⊊ ℕ und eine Bijektion f : K → ℕ. Ein Element aus ℕ weglassen und die restlichen Elemente passend verschieben.</p>
            </>,
            <>
              <ol>
                <li>Wähle eine echte Teilmenge K ⊊ ℕ: Lass ein Element weg (z.B. das Kleinste, die 0)</li>
                <li>Konstruiere eine bijektive Abbildung f : K → ℕ: Verschiebe alle verbliebenen Elemente um eins nach unten</li>
                <li>Zeige Injektivität: Wenn f(n) = f(m), folgt dann n = m? — Rechne algebraisch nach</li>
                <li>Zeige Surjektivität: Gib für jedes k ∈ ℕ explizit ein n ∈ K an mit f(n) = k</li>
                <li>Schließe: K ⊊ ℕ (echte Teilmenge) + Bijektion K → ℕ erfüllt Dedekinds Definition von Unendlichkeit</li>
              </ol>
            </>,
            <>
              <p>Alternative Wahl von K zum Vergleich (ebenfalls gültig):</p>
              <pre className="hint-code-block">{`Wähle K := 2ℕ = {0, 2, 4, 6, ...}  (gerade Zahlen)

K ⊊ ℕ ✓  (ungerade Zahlen fehlen)

Bijektion f : ℕ → K,  n ↦ 2n
f(0)=0, f(1)=2, f(2)=4, ...

injektiv:  2n=2m ⟹ n=m  ✓
surjektiv: k gerade → k=2(k/2) = f(k/2)  ✓

→ Auch diese Wahl beweist die Dedekind-Unendlichkeit von ℕ.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss eine echte Teilmenge sein (K ≠ ℕ); K = ℕ\{'{0}'} erfüllt das, weil 0 ∉ K</li>
              <li><strong>❌ Falsch:</strong> Bijektivität ohne Nachweis behaupten → <strong>✅ Richtig:</strong> Beide Eigenschaften explizit zeigen: injektiv (n−1=m−1 ⟹ n=m) und surjektiv (für k∈ℕ wähle n=k+1: f(k+1)=k)</li>
            </ul>,
            <p>Ist K ≠ ℕ? Ist f : K → ℕ wirklich bijektiv (injektiv + surjektiv)?</p>,
          ),
          solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
        },
      ],
    },
  ],
}
