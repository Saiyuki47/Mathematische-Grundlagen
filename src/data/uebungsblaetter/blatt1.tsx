import type { MatheBlatt } from '../../types'
import { h } from './shared'

export const blatt1: MatheBlatt = {
  id: 'blatt1',
  nr: '1',
  titel: 'Mengen',
  aufgaben: [
    {
      id: 'b1a1',
      nr: 1,
      title: 'Mengenschreibweisen',
      referenz: ['mengen-grundbegriffe'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei M = {1, 2, 3}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   1 ∈ M\n(ii)  {1} ∈ M\n(iii) {1} ⊆ M',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Menge</span> ist eine Zusammenfassung von unterscheidbaren Objekten zu einem Ganzen; diese Objekte heißen <span className="hint-em">Elemente</span>. Man schreibt eine Menge durch Aufzählung in geschweiften Klammern: M = {'{1, 2, 3}'} hat die drei Elemente 1, 2 und 3.</p>
              <p>Zwei grundlegende Symbole, die man nicht verwechseln darf:</p>
              <ul>
                <li><span className="hint-em">∈ (ist Element von)</span>: x ∈ M ist wahr, wenn x <em>direkt</em> in der Aufzählung von M steht. Links steht ein <em>Objekt</em>, rechts eine <em>Menge</em>. (1 ∈ M)</li>
                <li><span className="hint-em">⊆ (ist Teilmenge von)</span>: A ⊆ M ist wahr, wenn <em>jedes</em> Element von A auch Element von M ist. Hier stehen <em>links und rechts Mengen</em>.</li>
              </ul>
              <p>Der entscheidende Unterschied: <strong>1</strong> ist eine <em>Zahl</em>, <strong>{'{1}'}</strong> ist eine <em>Menge</em>, die nur die Zahl 1 enthält. Das sind verschiedene Objekte — wie ein Apfel und eine Tüte mit einem Apfel. Daher gilt zwar 1 ∈ {'{1}'}, aber 1 ≠ {'{1}'}.</p>
            </>,
            <>
              <p>So prüft man die drei Aussagen für M = {'{1, 2, 3}'} Schritt für Schritt:</p>
              <pre className="hint-code-block">{`Zuerst klären: Was sind die direkten Elemente von M?
   M = {1, 2, 3}  → die Zahlen 1, 2, 3 (keine Mengen!)

(i) 1 ∈ M  (Element-Frage: steht 1 direkt in M?)
   1 ist in der Aufzählung {1, 2, 3} enthalten
   → KORREKT

(ii) {1} ∈ M  (Element-Frage: steht die MENGE {1} direkt in M?)
   In M stehen nur Zahlen, keine Mengen.
   {1} ist eine Menge → kommt NICHT als Element vor
   → FALSCH

(iii) {1} ⊆ M  (Teilmengen-Frage: ist jedes Element
      von {1} auch Element von M?)
   Einziges Element von {1} ist die Zahl 1.
   Frage also: ist 1 ∈ M?  Ja (siehe i).
   → KORREKT`}</pre>
              <p>Merke die Methode: Bei ∈ vergleicht man das linke Objekt direkt mit den aufgelisteten Elementen. Bei ⊆ geht man eine Ebene tiefer und prüft jedes Element der linken Menge einzeln.</p>
            </>,
            <>
              <p>Anderes Beispiel mit gemischter Menge A = {'{a, b, {c}}'} (enthält zwei Zahlen/Buchstaben und eine Menge):</p>
              <pre className="hint-code-block">{`a ∈ A     → korrekt  (a ist direkt aufgelistet)
{a} ∈ A   → falsch   (die Menge {a} steht nicht in A)
{a} ⊆ A   → korrekt  (einziges Element a ist ∈ A → Teilmenge)
{c} ∈ A   → korrekt  ({c} steht direkt als Element in A)
c ∈ A     → falsch   (nur {c} ist Element, c selbst nicht)`}</pre>
              <p>Beachte den Kontrast bei {'{c}'}: Hier ist {'{c}'} ∈ A korrekt, weil A diese Menge wirklich als Element enthält — anders als bei {'{a}'}.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> {'{1}'} ∈ M, weil 1 ∈ M (Zahl und Menge gleichgesetzt) → <strong>✅ Richtig:</strong> 1 und {'{1}'} sind verschiedene Objekte; M enthält nur die Zahlen 1,2,3, nicht die Menge {'{1}'} → {'{1}'} ∉ M.</li>
              <li><strong>❌ Falsch:</strong> „1 ⊆ M" schreiben → <strong>✅ Richtig:</strong> ⊆ steht nur zwischen Mengen; 1 ist eine Zahl → es muss 1 ∈ M heißen (Element-Beziehung).</li>
              <li><strong>❌ Falsch:</strong> {'{1}'} ⊆ M so prüfen, als wäre es {'{1}'} ∈ M → <strong>✅ Richtig:</strong> {'{1}'} ⊆ M fragt: ist jedes Element von {'{1}'} (also nur die 1) in M? 1 ∈ M ✓ → Teilmenge ✓ (obwohl {'{1}'} ∉ M).</li>
            </ul>,
            <p>Selbstkontrolle: {'{1}'} ∉ M, aber {'{1}'} ⊆ M — beides ist hier richtig. Probe: nenne alle direkten Elemente von M (1, 2, 3) und alle Teilmengen, die nur aus diesen bestehen. Frage: Warum können 1 ∈ M und {'{1}'} ⊆ M beide wahr sein, obwohl {'{1}'} ∉ M gilt — welche Ebene (Element oder Teilmenge) prüft welches Symbol?</p>,
          ),
          solution: '(i) 1 ∈ M  → korrekt  (1 ist Element von {1,2,3})\n(ii) {1} ∈ M  → falsch  ({1} ist keine Menge in M; 1 ist ein Element, nicht {1})\n(iii) {1} ⊆ M  → korrekt  ({1} ist Teilmenge von {1,2,3})',
        },
        {
          letter: 'b',
          text: 'Sei L = {∅, {1}, {2}, {1,2}}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   2 ∈ L\n(ii)  {2} ∈ L\n(iii) {2} ⊆ L\n(iv)  {{2}} ⊆ L',
          hint: h(
            <>
              <p>L = {'{∅, {1}, {2}, {1,2}}'} ist eine <span className="hint-em">Menge von Mengen</span>: ihre <em>direkten Elemente</em> sind selbst wieder Mengen — die leere Menge ∅, {'{1}'}, {'{2}'} und {'{1,2}'}. Die Zahlen 1 und 2 stehen NICHT direkt in L, sondern nur eine Ebene tiefer, <em>innerhalb</em> dieser Elemente.</p>
              <p>Hier sind <span className="hint-em">Schachtelungsebenen</span> entscheidend. Drei Objekte, die ähnlich aussehen, aber verschieden sind:</p>
              <ul>
                <li><strong>2</strong> — eine Zahl (Ebene 0)</li>
                <li><strong>{'{2}'}</strong> — eine Menge, die die Zahl 2 enthält (Ebene 1)</li>
                <li><strong>{'{{2}}'}</strong> — eine Menge, die die Menge {'{2}'} enthält (Ebene 2)</li>
              </ul>
              <p>Wiederholung der Symbole: <span className="hint-em">∈</span> verlangt, dass das linke Objekt <em>direkt</em> aufgelistet ist; <span className="hint-em">A ⊆ B</span> verlangt, dass <em>jedes Element von A</em> auch in B steht. Ein ∈-Test auf der falschen Ebene ist immer falsch.</p>
            </>,
            <>
              <p>So prüft man die vier Aussagen für L = {'{∅, {1}, {2}, {1,2}}'}:</p>
              <pre className="hint-code-block">{`Direkte Elemente von L:  ∅, {1}, {2}, {1,2}  (vier Mengen)

(i) 2 ∈ L   (steht die Zahl 2 direkt in L?)
   In L stehen nur Mengen, keine blanken Zahlen.
   → FALSCH  (nur {2} ist drin, nicht 2)

(ii) {2} ∈ L   (steht die Menge {2} direkt in L?)
   {2} ist eines der vier aufgelisteten Elemente.
   → KORREKT

(iii) {2} ⊆ L   (ist jedes Element von {2} auch in L?)
   Einziges Element von {2} ist die Zahl 2.
   Frage also: ist 2 ∈ L?  Nein (siehe i).
   → FALSCH

(iv) {{2}} ⊆ L   (ist jedes Element von {{2}} auch in L?)
   Einziges Element von {{2}} ist die Menge {2}.
   Frage also: ist {2} ∈ L?  Ja (siehe ii).
   → KORREKT`}</pre>
              <p>Methode bei ⊆: „die äußerste Klammer aufmachen" und prüfen, ob das, was drinsteht, ein Element der rechten Menge ist. Bei {'{2}'} ⊆ L bleibt 2 übrig (Zahl, nicht in L); bei {'{{2}}'} ⊆ L bleibt {'{2}'} übrig (Menge, ∈ L).</p>
            </>,
            <>
              <p>Anderes Beispiel: M = {'{{a},{b},{a,b}}'} (drei Mengen als Elemente):</p>
              <pre className="hint-code-block">{`{a} ∈ M   → korrekt  ({a} ist direkt aufgelistet)
a ∈ M     → falsch   (a selbst steht nicht in M)
{a} ⊆ M   → falsch   (verlangt a ∈ M, aber a ∉ M)
{{a}} ⊆ M → korrekt  (verlangt {a} ∈ M, und {a} ∈ M ✓)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2 ∈ L, weil {'{2}'} ∈ L (Ebenen verwechselt) → <strong>✅ Richtig:</strong> 2 (Zahl) und {'{2}'} (Menge) sind verschieden; L enthält {'{2}'}, aber nicht die blanke 2.</li>
              <li><strong>❌ Falsch:</strong> {'{2}'} ⊆ L als „{'{2}'} ist Element von L" lesen → <strong>✅ Richtig:</strong> ⊆ geht eine Ebene tiefer: prüfe, ob 2 (das Element von {'{2}'}) in L liegt → 2 ∉ L → {'{2}'} ⊄ L.</li>
              <li><strong>❌ Falsch:</strong> {'{{2}}'} ⊆ L prüft, ob 2 ∈ L → <strong>✅ Richtig:</strong> {'{{2}}'} ⊆ L prüft, ob das Element {'{2}'} in L ist → {'{2}'} ∈ L ✓.</li>
            </ul>,
            <p>Selbstkontrolle: (ii) und (iv) sind korrekt, (i) und (iii) falsch — die korrekten unterscheiden sich vom falschen Nachbarn um genau eine Schachtelungsebene. Frage: Warum ist {'{{2}}'} ⊆ L gleichbedeutend mit „{'{2}'} ∈ L?", und was bliebe bei {'{2}'} ⊆ L stattdessen zu prüfen?</p>,
          ),
          solution: '(i) 2 ∈ L  → falsch  (2 ist kein direktes Element von L, nur {2} ist es)\n(ii) {2} ∈ L  → korrekt  ({2} ist direktes Element von L)\n(iii) {2} ⊆ L  → falsch  (wäre wahr, wenn 2 ∈ L gilt – das ist aber nicht der Fall)\n(iv) {{2}} ⊆ L  → korrekt  ({2} ∈ L, also ist {{2}} eine Teilmenge von L)',
        },
      ],
    },
    {
      id: 'b1a2',
      nr: 2,
      title: 'Mengenoperationen',
      referenz: ['mengenoperationen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Gegeben:\n  X = {1,3,5,7},  Y = {5,7,8},  Z = {1,5}\n\nBestimmen Sie:\n(i)   Z \\ X\n(ii)  X \\ Z\n(iii) X ∩ Y ∩ Z\n(iv)  X ∪ Y ∪ Z\n(v)   X × Z',
          hint: h(
            <>
              <p>Vier Grundoperationen verbinden zwei Mengen zu einer neuen. Definition jeweils mit der Bedingung, die ein Element erfüllen muss:</p>
              <ul>
                <li><span className="hint-em">A \ B (Differenz)</span> = {'{x : x ∈ A und x ∉ B}'} — alles aus A, was NICHT in B liegt. B „streicht" seine Elemente aus A heraus.</li>
                <li><span className="hint-em">A ∩ B (Schnitt)</span> = {'{x : x ∈ A und x ∈ B}'} — nur was in <em>beiden</em> liegt.</li>
                <li><span className="hint-em">A ∪ B (Vereinigung)</span> = {'{x : x ∈ A oder x ∈ B}'} — alles aus mindestens einer der Mengen; jedes Element nur EINMAL nennen (Mengen kennen keine Duplikate).</li>
                <li><span className="hint-em">A × B (kartesisches Produkt)</span> = {'{(a,b) : a ∈ A, b ∈ B}'} — alle <em>geordneten Paare</em>, erstes aus A, zweites aus B. Geordnet heißt: (1,3) ≠ (3,1), die Reihenfolge zählt.</li>
              </ul>
              <p>Wichtig: \ ist <em>nicht vertauschbar</em> (A\B ≠ B\A im Allgemeinen), ∩ und ∪ dagegen schon. ∅ ist die <span className="hint-em">leere Menge</span> (Menge ohne Elemente).</p>
            </>,
            <>
              <p>Mit X = {'{1,3,5,7}'}, Y = {'{5,7,8}'}, Z = {'{1,5}'}:</p>
              <pre className="hint-code-block">{`(i) Z \\ X: nimm jedes Element von Z, behalte nur die ∉ X
    1 ∈ X? ja → streichen.  5 ∈ X? ja → streichen.
    → nichts bleibt übrig → Z\\X = ∅

(ii) X \\ Z: jedes Element von X, das ∉ Z ist
    1∈Z? ja→weg. 3∈Z? nein→behalten.
    5∈Z? ja→weg. 7∈Z? nein→behalten.
    → X\\Z = {3, 7}

(iii) X ∩ Y ∩ Z: Element muss in ALLEN dreien sein
    Kandidaten der Reihe nach prüfen:
    1: in X,Z ja, in Y? nein → raus
    5: in X ja, Y ja, Z ja → DRIN
    7: in X,Y ja, in Z? nein → raus
    → X∩Y∩Z = {5}

(iv) X ∪ Y ∪ Z: alle Elemente sammeln, jedes einmal
    aus X: 1,3,5,7 ; aus Y kommt 8 dazu ; Z liefert nichts Neues
    → X∪Y∪Z = {1, 3, 5, 7, 8}

(v) X × Z: alle Paare (x, z), x∈X={1,3,5,7}, z∈Z={1,5}
    Für jedes x beide z-Werte anhängen:
    (1,1)(1,5) (3,1)(3,5) (5,1)(5,5) (7,1)(7,5)
    Kontrolle: |X|·|Z| = 4·2 = 8 Paare ✓`}</pre>
            </>,
            <>
              <p>Kleines Beispiel A = {'{1,2}'}, B = {'{2,3}'}:</p>
              <pre className="hint-code-block">{`A\B = {1}     (1 ∉ B)        B\A = {3}    (3 ∉ A)
A∩B = {2}     (nur 2 in beiden)
A∪B = {1,2,3} (2 nur einmal!)
A×B = {(1,2),(1,3),(2,2),(2,3)}   |A|·|B| = 2·2 = 4 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Z\X = X\Z (Differenz als vertauschbar behandeln) → <strong>✅ Richtig:</strong> Z\X = ∅, aber X\Z = {'{3,7}'} — die Reihenfolge bestimmt, aus welcher Menge gestrichen wird.</li>
              <li><strong>❌ Falsch:</strong> in X×Z (1,5) und (5,1) als dasselbe Paar zählen → <strong>✅ Richtig:</strong> Paare sind geordnet: (1,5) (erst aus X) ≠ (5,1); beide kommen vor.</li>
              <li><strong>❌ Falsch:</strong> X∪Y∪Z = {'{1,3,5,7,5,7,8,1,5}'} (Duplikate) → <strong>✅ Richtig:</strong> jedes Element genau einmal: {'{1,3,5,7,8}'}.</li>
            </ul>,
            <p>Selbstkontrolle: bei (v) müssen es 4·2 = 8 Paare sein — nachzählen. Frage: Warum ist A×B nicht vertauschbar, und was bedeutete es geometrisch, (a,b) und (b,a) gleichzusetzen (Stichwort: ungeordnetes Paar)?</p>,
          ),
          solution: '(i) Z \\ X = {1,5} \\ {1,3,5,7} = ∅\n(ii) X \\ Z = {1,3,5,7} \\ {1,5} = {3,7}\n(iii) X ∩ Y ∩ Z = {5}\n(iv) X ∪ Y ∪ Z = {1,3,5,7,8}\n(v) X × Z = {(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)}',
        },
        {
          letter: 'b',
          text: 'Grundmenge G = {1,2,3,4,5,6,7,8,9}\nL = {1,2,4,7},  M = {3,5,6,8,9},  N = {4,5,9}\n(L̅ = Komplement von L in G, etc.)\n\nBestimmen Sie:\n(i)   L̅ ∩ N\n(ii)  (L ∩ M̅) ∪ (N ∩ N̅)\n(iii) L ∩ N̅ ∩ M̅',
          hint: h(
            <>
              <p>Das <span className="hint-em">Komplement</span> Ā einer Menge A (bezüglich einer festen <span className="hint-em">Grundmenge</span> G) ist Ā = G \ A: alle Elemente von G, die NICHT in A liegen. Das Komplement hängt immer von G ab — es enthält nie etwas außerhalb von G.</p>
              <p>Zwei Rechenregeln, die man oft als Abkürzung nutzt:</p>
              <ul>
                <li><span className="hint-em">A ∩ Ā = ∅</span> — eine Menge und ihr Komplement haben kein gemeinsames Element (kein x ist gleichzeitig „in A" und „nicht in A").</li>
                <li><span className="hint-em">A ∪ Ā = G</span> — zusammen ergeben sie die ganze Grundmenge.</li>
              </ul>
              <p>Außerdem die Operationen ∩ (Schnitt: in beiden) und \ (Differenz: erstes ohne zweites) wie zuvor. Klammern zuerst, dann von innen nach außen.</p>
            </>,
            <>
              <p>G = {'{1,…,9}'}, L = {'{1,2,4,7}'}, M = {'{3,5,6,8,9}'}, N = {'{4,5,9}'}.</p>
              <pre className="hint-code-block">{`Schritt 0 — alle Komplemente (G \\ Menge):
  L̅ = G\\L = {3,5,6,8,9}
  M̅ = G\\M = {1,2,4,7}        (= L! M und L sind komplementär)
  N̅ = G\\N = {1,2,3,6,7,8}
  Probe: |L̅| = 9−4 = 5 ✓, |M̅| = 9−5 = 4 ✓

(i) L̅ ∩ N: gemeinsame Elemente von {3,5,6,8,9} und {4,5,9}
    in beiden: 5 und 9  → L̅ ∩ N = {5, 9}

(ii) (L ∩ M̅) ∪ (N ∩ N̅):
    L ∩ M̅ = {1,2,4,7} ∩ {1,2,4,7} = {1,2,4,7}   (M̅ = L)
    N ∩ N̅ = ∅          (Regel A ∩ Ā = ∅, sofort!)
    {1,2,4,7} ∪ ∅ = {1,2,4,7}   (= L)

(iii) L ∩ N̅ ∩ M̅:  alle drei schneiden
    L ∩ M̅ = {1,2,4,7}   (s.o.)
    davon noch ∩ N̅ = {1,2,3,6,7,8}:
    welche von 1,2,4,7 sind in N̅? → 1,2,7 (4 ∉ N̅)
    → L ∩ N̅ ∩ M̅ = {1, 2, 7}`}</pre>
            </>,
            <>
              <p>Beispiel: G = {'{1,2,3,4,5}'}, A = {'{1,2,3}'}</p>
              <pre className="hint-code-block">{`Ā = G\A = {4,5}
A ∩ Ā = {1,2,3} ∩ {4,5} = ∅          ✓ (Regel)
A ∪ Ā = {1,2,3} ∪ {4,5} = {1,2,3,4,5} = G ✓ (Regel)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> L̅ = „alle Zahlen außer 1,2,4,7" (ohne Bezug auf G) → <strong>✅ Richtig:</strong> L̅ = G\L = {'{1..9}'} \ {'{1,2,4,7}'} = {'{3,5,6,8,9}'}; das Komplement bleibt in G.</li>
              <li><strong>❌ Falsch:</strong> N ∩ N̅ = N (oder irgendetwas außer ∅) → <strong>✅ Richtig:</strong> N ∩ N̅ = ∅ immer — kein Element ist gleichzeitig in N und nicht in N.</li>
              <li><strong>❌ Falsch:</strong> M̅ als etwas anderes als L behandeln → <strong>✅ Richtig:</strong> M̅ = {'{1,2,4,7}'} = L, daher L ∩ M̅ = L ∩ L = L.</li>
            </ul>,
            <p>Selbstkontrolle: prüfe |L̅| = |G| − |L| = 5 und L ∪ L̅ = G. Frage: Warum ist A ∩ Ā = ∅ eine logische Notwendigkeit (kein Zufall dieser Zahlen) — kann ein Objekt zugleich in A und in G\A liegen?</p>,
          ),
          solution: 'Komplemente: L̅ = {3,5,6,8,9}  M̅ = {1,2,4,7}  N̅ = {1,2,3,6,7,8}\n\n(i) L̅ ∩ N = {3,5,6,8,9} ∩ {4,5,9} = {5,9}\n(ii) (L ∩ M̅) ∪ (N ∩ N̅) = ({1,2,4,7} ∩ {1,2,4,7}) ∪ ∅ = {1,2,4,7} = L\n(iii) L ∩ N̅ ∩ M̅ = {1,2,4,7} ∩ {1,2,3,6,7,8} ∩ {1,2,4,7} = {1,2,7}',
        },
        {
          letter: 'c',
          text: 'Gegeben:\n  M₁ = ℤ,  M₂ = ℕ,  M₃ = {−1, 1, 2},  M₄ = [−1, 2)\n\nBestimmen Sie:\n(i)   M₄ ∪ M₃\n(ii)  M₄ ∩ (M₂ \\ M₃)\n(iii) M₃ \\ (M₁ \\ M₂)',
          hint: h(
            <>
              <p>Hier mischen sich <span className="hint-em">diskrete Mengen</span> (einzeln aufgezählte Zahlen) und ein <span className="hint-em">Intervall</span> (durchgehender Bereich auf der Zahlengeraden). Verwendete Zahlenmengen:</p>
              <ul>
                <li><span className="hint-em">ℕ</span> = {'{0, 1, 2, 3, …}'} — natürliche Zahlen (hier <em>mit</em> 0); KEINE negativen Zahlen, keine Brüche.</li>
                <li><span className="hint-em">ℤ</span> = {'{…, −2, −1, 0, 1, 2, …}'} — ganze Zahlen (positiv, negativ, 0).</li>
                <li><span className="hint-em">[a, b)</span> — halboffenes Intervall = alle reellen Zahlen x mit a ≤ x &lt; b. Eckige Klammer [ = Randpunkt <em>gehört dazu</em>; runde Klammer ) = Randpunkt <em>gehört NICHT dazu</em>. [−1, 2) enthält also −1, aber nicht 2.</li>
              </ul>
              <p>Folgerung, die man oft braucht: <span className="hint-em">ℤ \ ℕ</span> = die negativen ganzen Zahlen {'{…, −3, −2, −1}'} (alle ganzen Zahlen, die nicht natürlich sind).</p>
            </>,
            <>
              <p>M₁ = ℤ, M₂ = ℕ, M₃ = {'{−1, 1, 2}'}, M₄ = [−1, 2). Von innen nach außen:</p>
              <pre className="hint-code-block">{`(i) M₄ ∪ M₃ = [−1,2) ∪ {−1,1,2}
    [−1,2) enthält schon −1 und 1.
    Neu ist nur 2 (Randpunkt, der dem Intervall fehlte).
    [−1,2) plus den Punkt 2 = [−1,2]
    → M₄ ∪ M₃ = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}

(ii) M₄ ∩ (M₂ \\ M₃):
    erst Klammer  M₂\\M₃ = ℕ \\ {−1,1,2}:
      −1 ∉ ℕ (egal), aus ℕ streichen wir 1 und 2
      → {0, 3, 4, 5, …}
    dann M₄ ∩ {0,3,4,…} = [−1,2) ∩ {0,3,4,…}:
      welche dieser Zahlen liegen in [−1,2)?  nur 0
      (3,4,… sind ≥ 2, also draußen)
    → M₄ ∩ (M₂\\M₃) = {0}

(iii) M₃ \\ (M₁ \\ M₂):
    erst Klammer  M₁\\M₂ = ℤ \\ ℕ = {…, −3, −2, −1}
    dann M₃ \\ {…,−1} = {−1,1,2} ohne die negativen:
      −1 wird gestrichen (∈ {…,−1}), 1 und 2 bleiben
    → M₃ \\ (M₁\\M₂) = {1, 2}`}</pre>
            </>,
            <>
              <p>Intervall-Übung zum Randpunkt:</p>
              <pre className="hint-code-block">{`[0,3) ∪ {3}        = [0,3]   (fehlenden Rand 3 ergänzt)
[−1,2) ∩ {0,1,2,3} = {0,1}   (2 ∉ [−1,2)!, 3 zu groß)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> [−1,2) enthält 2 → <strong>✅ Richtig:</strong> die runde Klammer ) schließt 2 AUS; nur [−1,2] (eckig) würde 2 enthalten.</li>
              <li><strong>❌ Falsch:</strong> in M₂\M₃ extra über −1 nachdenken → <strong>✅ Richtig:</strong> −1 ∉ ℕ = M₂, also kann −1 ohnehin nicht in M₂\M₃ sein; M₃ entfernt hier nur 1 und 2.</li>
              <li><strong>❌ Falsch:</strong> M₄ ∩ {'{0,3,4,…}'} = {'{0,1}'} (1 fälschlich dabei) → <strong>✅ Richtig:</strong> 1 steht gar nicht in {'{0,3,4,…}'}; und 3 ∉ [−1,2) → nur 0.</li>
            </ul>,
            <p>Selbstkontrolle: zeichne [−1,2) als Strecke mit offenem Punkt bei 2 und markiere die einzelnen Zahlen — so siehst du sofort, wer drin liegt. Frage: Worin unterscheiden sich [−1,2) und [−1,2] genau, und was ergäbe [0,1) ∪ {'{1}'} ∪ [1,2)?</p>,
          ),
          solution: '(i) M₄ ∪ M₃ = [−1, 2) ∪ {2} = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}\n(ii) M₂ \\ M₃ = {0, 3, 4, 5, …}\n    M₄ ∩ (M₂ \\ M₃) = [−1, 2) ∩ {0, 3, 4, …} = {0}\n(iii) M₁ \\ M₂ = {…, −3, −2, −1}\n    M₃ \\ (M₁ \\ M₂) = {−1, 1, 2} \\ {…, −1} = {1, 2}',
        },
        {
          letter: 'd',
          text: 'Sei A = {1, 2, 3}. Geben Sie die Potenzmenge P(A) an.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Teilmenge</span> von A ist eine Menge, deren Elemente alle auch in A liegen (Symbol ⊆). Die <span className="hint-em">Potenzmenge P(A)</span> ist die Menge ALLER Teilmengen von A — eine Menge, deren Elemente selbst Mengen sind. Sie enthält IMMER zwei „Extreme": die <span className="hint-em">leere Menge ∅</span> (ist Teilmenge jeder Menge) und A selbst (A ⊆ A gilt immer).</p>
              <p><span className="hint-em">Anzahlformel</span>: |P(A)| = 2^|A|, wobei |A| die Anzahl der Elemente von A ist. Begründung: Für jedes der |A| Elemente entscheidet man unabhängig „drin oder draußen" (2 Möglichkeiten) → 2·2·…·2 = 2^|A| Teilmengen. Für |A| = 3 also 2³ = 8.</p>
            </>,
            <>
              <p>So bildet man P(A) für A = {'{1, 2, 3}'} vollständig — systematisch nach Größe sortiert, damit man keine vergisst:</p>
              <pre className="hint-code-block">{`Erwartete Anzahl: 2³ = 8 Teilmengen.

0 Elemente:  ∅                          (1 Stück)
1 Element:   {1}, {2}, {3}              (3 Stück)
2 Elemente:  {1,2}, {1,3}, {2,3}        (3 Stück)
3 Elemente:  {1,2,3}  (= A selbst)      (1 Stück)

Summe: 1 + 3 + 3 + 1 = 8 ✓

P(A) = { ∅, {1}, {2}, {3},
         {1,2}, {1,3}, {2,3}, {1,2,3} }`}</pre>
              <p>Trick für die 2-elementigen Teilmengen: jeweils EIN Element weglassen — wer fehlt, bestimmt die Teilmenge: ohne 3 → {'{1,2}'}, ohne 2 → {'{1,3}'}, ohne 1 → {'{2,3}'}.</p>
            </>,
            <>
              <p>Kleineres Beispiel A = {'{a, b}'} (|A| = 2 → 2² = 4 Teilmengen):</p>
              <pre className="hint-code-block">{`P({a,b}) = { ∅, {a}, {b}, {a,b} }
Zählprobe: 1 + 2 + 1 = 4 = 2² ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∅ weglassen → <strong>✅ Richtig:</strong> ∅ ist Teilmenge jeder Menge und gehört immer zu P(A).</li>
              <li><strong>❌ Falsch:</strong> A = {'{1,2,3}'} selbst weglassen → <strong>✅ Richtig:</strong> A ⊆ A gilt immer → A ist ein Element von P(A).</li>
              <li><strong>❌ Falsch:</strong> nur 7 Teilmengen finden (eine vergessen) → <strong>✅ Richtig:</strong> Anzahl muss 2³ = 8 sein; systematisch nach Größe (1+3+3+1) prüfen.</li>
            </ul>,
            <p>Selbstkontrolle: zähle deine Liste — es müssen 2³ = 8 Einträge sein, davon ∅ und A. Frage: Warum hat eine n-elementige Menge genau 2ⁿ Teilmengen — was hat die „drin/draußen"-Entscheidung pro Element damit zu tun?</p>,
          ),
          solution: 'P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}',
        },
      ],
    },
    {
      id: 'b1a3',
      nr: 3,
      title: 'Mengendarstellung',
      referenz: ['mengendarstellung'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Stellen Sie folgende Mengen in der Form { Ausdruck : n ∈ ℕ } dar:\n\n(i)   Natürliche Zahlen, die ohne Rest durch 7 teilbar sind\n(ii)  Natürliche Zahlen, die bei Division durch 5 den Rest 3 lassen\n(iii) Natürliche Zahlen, die sowohl durch 2 als auch durch 3 ohne Rest teilbar sind',
          hint: h(
            <>
              <p>Die <span className="hint-em">Erzeuger-Notation</span> (auch beschreibende Form) {'{f(n) : n ∈ ℕ}'} liest man als „die Menge aller Werte f(n), wobei n alle natürlichen Zahlen durchläuft". Statt die Elemente aufzuzählen, gibt man eine <em>Bildungsvorschrift</em> f(n) an. Hier gilt ℕ = {'{0, 1, 2, 3, …}'}, n startet also bei <strong>0</strong>.</p>
              <p>Drei Standardmuster, die man übersetzen können muss:</p>
              <ul>
                <li><span className="hint-em">Vielfache von k</span> (durch k ohne Rest teilbar): {'{k·n : n ∈ ℕ}'} = {'{0, k, 2k, 3k, …}'}.</li>
                <li><span className="hint-em">Rest r bei Division durch k</span>: {'{k·n + r : n ∈ ℕ}'} — die Zahlen, die nach Abziehen von r durch k teilbar sind.</li>
                <li><span className="hint-em">Gleichzeitig durch a und b teilbar</span>: durch das <span className="hint-em">kgV(a,b)</span> (kleinstes gemeinsames Vielfaches) teilbar. Eine Zahl ist genau dann durch a UND b teilbar, wenn sie durch deren kgV teilbar ist.</li>
              </ul>
            </>,
            <>
              <p>So übersetzt man die drei Beschreibungen in die Form {'{f(n) : n ∈ ℕ}'}:</p>
              <pre className="hint-code-block">{`(i) "durch 7 ohne Rest teilbar" = Vielfache von 7:
    f(n) = 7n
    Probe n=0,1,2,3: 0, 7, 14, 21
    → {7n : n ∈ ℕ} = {0, 7, 14, 21, …}

(ii) "bei Division durch 5 den Rest 3":
    so eine Zahl hat die Form 5·n + 3
    Probe n=0,1,2,3: 3, 8, 13, 18  (jede lässt Rest 3)
    → {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}

(iii) "durch 2 UND durch 3 teilbar":
    teilbar durch kgV(2,3). 2 und 3 teilerfremd
    → kgV = 2·3 = 6. Also Vielfache von 6:
    f(n) = 6n
    Probe n=0,1,2,3: 0, 6, 12, 18
    → {6n : n ∈ ℕ} = {0, 6, 12, 18, …}`}</pre>
              <p>Methode: erst Muster erkennen (Vielfache? Rest? kgV?), dann n = 0,1,2,3 einsetzen und mit dem geforderten Text vergleichen.</p>
            </>,
            <>
              <p>Weitere Übersetzungen zum Vergleich:</p>
              <pre className="hint-code-block">{`Ungerade Zahlen (Rest 1 bei Division durch 2):
   {2n + 1 : n ∈ ℕ} = {1, 3, 5, 7, …}
Vielfache von 4:
   {4n : n ∈ ℕ} = {0, 4, 8, 12, …}`}</pre>
              <p>Warum bei (iii) das kgV und nicht der ggT?</p>
              <pre className="hint-code-block">{`ggT(2,3) = 1 → {1·n} = {0,1,2,3,…} = ℕ   ✗ (alle Zahlen!)
kgV(2,3) = 6 → {6n}   = {0,6,12,18,…}     ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n bei 1 statt 0 starten → <strong>✅ Richtig:</strong> ℕ beginnt bei 0; n=0 liefert das erste Element (bei (i) die 0, bei (ii) die 3).</li>
              <li><strong>❌ Falsch:</strong> bei (iii) ggT(2,3)=1 nehmen → {'{n}'} = ℕ → <strong>✅ Richtig:</strong> kgV(2,3)=6 nehmen, denn die Zahl muss durch beide teilbar sein → {'{6n}'}.</li>
            </ul>,
            <p>Selbstkontrolle: setze in deine Formel n=0,1,2 ein und prüfe, ob die Zahlen die Wortbedingung wirklich erfüllen (z.B. lässt 8 = 5·1+3 wirklich Rest 3?). Frage: Warum beschreibt {'{kgV(2,3)·n}'} genau die durch 2 und 3 teilbaren Zahlen, während {'{ggT(2,3)·n}'} ganz ℕ liefert?</p>,
          ),
          solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
        },
        {
          letter: 'b',
          text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
          hint: h(
            <>
              <p>Umkehrung der vorigen Aufgabe: Hier ist die Bildungsvorschrift f(n) gegeben, und man soll die Menge <span className="hint-em">durch Auflisten</span> der ersten Elemente angeben. Dazu setzt man <em>der Reihe nach</em> n = 0, 1, 2, 3, … in f(n) ein (ℕ beginnt bei 0). In einer Menge spielt Reihenfolge keine Rolle und Duplikate werden weggelassen.</p>
              <p>Bei (iii)/(iv) braucht man die <span className="hint-em">Potenzgesetze</span>. Wichtig: in 2ⁿ ist n der <em>Exponent</em> (2 wird n-mal mit sich multipliziert), KEIN Faktor. Nützlich: <span className="hint-em">(aᵐ)ⁿ = aᵐ·ⁿ</span> (Potenz einer Potenz → Exponenten multiplizieren) und <span className="hint-em">a⁰ = 1</span> (jede Potenz mit Exponent 0 ist 1).</p>
            </>,
            <>
              <p>So listet man die vier Mengen auf (n = 0,1,2,3,4 einsetzen):</p>
              <pre className="hint-code-block">{`(i) f(n) = 3n − 2:
    n=0: −2,  n=1: 1,  n=2: 4,  n=3: 7,  n=4: 10
    → {−2, 1, 4, 7, 10, …}   (springt um +3)

(ii) f(n) = 3n + 2:
    n=0: 2,   n=1: 5,  n=2: 8,  n=3: 11, n=4: 14
    → {2, 5, 8, 11, 14, …}    (springt um +3)

(iii) f(n) = 2ⁿ:
    n=0: 2⁰=1,  n=1: 2,  n=2: 4,  n=3: 8,  n=4: 16
    → {1, 2, 4, 8, 16, …}     (verdoppelt sich)

(iv) f(n) = 2²ⁿ:  zuerst vereinfachen!
    2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ      [(aᵐ)ⁿ = aᵐⁿ]
    n=0: 4⁰=1,  n=1: 4,  n=2: 16,  n=3: 64,  n=4: 256
    → {1, 4, 16, 64, 256, …}  (vervierfacht sich)`}</pre>
            </>,
            <>
              <p>Verschiedene (richtige bzw. falsche) Lesarten von 2²ⁿ:</p>
              <pre className="hint-code-block">{`2²ⁿ  = (2²)ⁿ = 4ⁿ       → {1, 4, 16, 64, …}  ✓ Potenzen von 4
(2ⁿ)² = 4ⁿ               → dasselbe Ergebnis    ✓
2²ⁿ als 4·n missdeuten   → {0, 4, 8, 12, …}    ✗ (n ist Exponent!)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n bei 1 starten: 3·1−2 = 1 als erstes Element → <strong>✅ Richtig:</strong> n=0 zuerst: 3·0−2 = −2 ist das erste Element.</li>
              <li><strong>❌ Falsch:</strong> 2²ⁿ = 4·n rechnen (Potenz mit Multiplikation verwechselt) → <strong>✅ Richtig:</strong> 2²ⁿ = (2²)ⁿ = 4ⁿ; n bleibt Exponent → 1, 4, 16, 64, …</li>
            </ul>,
            <p>Selbstkontrolle: prüfe bei (iv) per (2ⁿ)² — z.B. n=2: (2²)² = 4² = 16, gleiches Ergebnis. Frage: Warum wächst {'{2²ⁿ}'} = {'{4ⁿ}'} schneller als {'{2ⁿ}'}, und ist die eine Menge eine Teilmenge der anderen?</p>,
          ),
          solution: '(i) {3n − 2 : n ∈ ℕ} = {−2, 1, 4, 7, 10, …}\n(ii) {3n + 2 : n ∈ ℕ} = {2, 5, 8, 11, 14, …}\n(iii) {2ⁿ : n ∈ ℕ} = {1, 2, 4, 8, 16, …}\n(iv) {2²ⁿ : n ∈ ℕ} = {4⁰, 4¹, 4², …} = {1, 4, 16, 64, 256, …}',
        },
      ],
    },
    {
      id: 'b1a4',
      nr: 4,
      title: 'Venn-Diagramme',
      referenz: ['mengenoperationen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien A, B, C Mengen. Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  (A ∩ B) ∪ C\n  (A ∪ B) ∩ C\n  (A ∪ C) ∩ (B ∪ C)\n  (A ∩ C) ∪ (B ∩ C)\n\nWas fällt auf?',
          hint: h(
            <>
              <p>Ein <span className="hint-em">Venn-Diagramm</span> stellt Mengen als überlappende Kreise in einem Rechteck (= Grundmenge) dar. Bei 3 Mengen entstehen 8 Teilbereiche. Eine Operation veranschaulicht man durch <span className="hint-em">Schattieren</span>: ∩ = nur der Überlappungsbereich, ∪ = beide Flächen zusammen. Zwei Ausdrücke sind gleich, wenn sie exakt dieselbe Fläche schattieren.</p>
              <p>Worauf die Aufgabe hinausläuft, sind die <span className="hint-em">Distributivgesetze</span> der Mengenlehre:</p>
              <ul>
                <li>(A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C) — „∪ verteilt sich über ∩"</li>
                <li>(A ∪ B) ∩ C = (A ∩ C) ∪ (B ∩ C) — „∩ verteilt sich über ∪"</li>
              </ul>
              <p>Sie funktionieren wie das Ausmultiplizieren in der Algebra (a·(b+c) = a·b + a·c), nur mit ∩ und ∪.</p>
            </>,
            <>
              <p>Vorgehen für jeden der vier Ausdrücke — von innen (Klammer) nach außen schattieren, dann paarweise vergleichen. Zur Sicherheit eine <span className="hint-em">Zahlenprobe</span> mit A = {'{1,2}'}, B = {'{2,3}'}, C = {'{3,4,5}'}:</p>
              <pre className="hint-code-block">{`(A∩B)∪C:
   A∩B = {2};  dann ∪C → {2} ∪ {3,4,5} = {2,3,4,5}

(A∪C)∩(B∪C):
   A∪C = {1,2,3,4,5};  B∪C = {2,3,4,5}
   Schnitt → {2,3,4,5}
   ⇒ gleich wie (A∩B)∪C  ✓  (1. Distributivgesetz)

(A∪B)∩C:
   A∪B = {1,2,3};  ∩C → {1,2,3} ∩ {3,4,5} = {3}

(A∩C)∪(B∩C):
   A∩C = ∅;  B∩C = {3};  Vereinigung → {3}
   ⇒ gleich wie (A∪B)∩C  ✓  (2. Distributivgesetz)`}</pre>
              <p>Ergebnis: Es bilden sich zwei gleiche Paare; die anderen beiden Ausdrücke ({'{2,3,4,5}'} vs. {'{3}'}) sind verschieden.</p>
            </>,
            <>
              <p>Gleiche Idee mit anderen Mengen A = {'{1}'}, B = {'{1,2}'}, C = {'{2}'}:</p>
              <pre className="hint-code-block">{`(A∩B)∪C   = {1} ∪ {2} = {1,2}
(A∪C)∩(B∪C) = {1,2} ∩ {1,2} = {1,2}   ✓ identisch`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (A∩B)∪C ohne Klammern als „A∩B∪C" lesen → <strong>✅ Richtig:</strong> Klammern zuerst — erst A∩B bilden, dann mit C vereinigen.</li>
              <li><strong>❌ Falsch:</strong> alle vier Ausdrücke für identisch halten → <strong>✅ Richtig:</strong> nur zwei Paare sind gleich: (A∩B)∪C = (A∪C)∩(B∪C) und (A∪B)∩C = (A∩C)∪(B∩C).</li>
            </ul>,
            <p>Selbstkontrolle: rechne ein eigenes Zahlenbeispiel und vergleiche die vier Ergebnismengen. Frage: Was bedeutet x ∈ (A∩B)∪C auf Elementebene (in Worten), und warum ist das logisch dasselbe wie x ∈ (A∪C)∩(B∪C)?</p>,
          ),
          solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
        },
        {
          letter: 'b',
          text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
          hint: h(
            <>
              <p>Anders als in (a) (wo zwei Ausdrücke per Distributivgesetz gleich waren) sind hier A ∪ (B∩C) und (A∪B)∩C im Allgemeinen <span className="hint-em">verschieden</span>. Die <span className="hint-em">Klammerung</span> entscheidet über das Ergebnis — man darf ∪ und ∩ NICHT beliebig umstellen.</p>
              <p>Um eine behauptete Mengengleichheit zu <span className="hint-em">widerlegen</span>, genügt ein einziges <span className="hint-em">Gegenbeispiel</span>: konkrete Mengen, für die die beiden Seiten verschiedene Ergebnisse liefern.</p>
              <p>Der Schlüssel: Elemente, die <em>nur in A</em> liegen (nicht in B, nicht in C). In A ∪ (B∩C) sind sie durch das „A ∪ …" immer dabei. In (A∪B)∩C überleben sie das „∩ C" nur, wenn sie auch in C liegen — sonst fallen sie weg. Genau hier entsteht der Unterschied.</p>
            </>,
            <>
              <p>So findet man das Gegenbeispiel und prüft beide Seiten — wähle A so, dass etwas nur in A liegt (hier die 1):</p>
              <pre className="hint-code-block">{`Wähle A = {1,2}, B = {2,3}, C = {3,4}.
(Die 1 liegt nur in A — der kritische Fall.)

linke Seite  A ∪ (B∩C):
   B∩C = {2,3} ∩ {3,4} = {3}
   A ∪ {3} = {1,2} ∪ {3} = {1,2,3}

rechte Seite (A∪B) ∩ C:
   A∪B = {1,2,3}
   {1,2,3} ∩ {3,4} = {3}

{1,2,3} ≠ {3}  → die Gleichheit ist FALSCH.
Grund: die 1 (nur in A) ist links dabei, rechts
fällt sie beim ∩C weg, weil 1 ∉ C.`}</pre>
            </>,
            <>
              <p>Zweites Gegenbeispiel A = {'{1,2}'}, B = {'{2,3}'}, C = {'{3}'}:</p>
              <pre className="hint-code-block">{`A ∪ (B∩C) = {1,2} ∪ {3} = {1,2,3}
(A∪B) ∩ C = {1,2,3} ∩ {3} = {3}
{1,2,3} ≠ {3} → ebenfalls ungleich`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> A∪(B∩C) = (A∪B)∩C als allgemein gültig annehmen → <strong>✅ Richtig:</strong> Gegenbeispiel A={'{1,2}'}, B={'{2,3}'}, C={'{3,4}'} → {'{1,2,3}'} ≠ {'{3}'}.</li>
              <li><strong>❌ Falsch:</strong> nur die Überlappungsbereiche prüfen → <strong>✅ Richtig:</strong> der Unterschied steckt bei Elementen, die NUR in A liegen — die muss man gezielt testen.</li>
            </ul>,
            <p>Selbstkontrolle: dein Gegenbeispiel ist gültig, sobald die beiden Ergebnismengen verschieden sind. Frage: Warum kann A ∪ (B∩C) ein Element aus A enthalten, das nichts mit B oder C zu tun hat, während (A∪B)∩C das nie kann?</p>,
          ),
          solution: 'A ∪ (B ∩ C)  ≠  (A ∪ B) ∩ C  im Allgemeinen.\n\nBeispiel: A = {1,2}, B = {2,3}, C = {3,4}\n  A ∪ (B ∩ C) = {1,2} ∪ {3} = {1,2,3}\n  (A ∪ B) ∩ C = {1,2,3} ∩ {3,4} = {3}\n\n→ Klammern können nicht einfach weggelassen werden!',
        },
        {
          letter: 'c',
          text: 'Sei X Grundmenge, A, B ⊆ X. Veranschaulichen Sie und vergleichen Sie:\n\n  Ā ∪ B\n  Ā ∪ B̄\n  Ā ∩ B\n  Ā ∩ B̄\n\n(Ā = Komplement von A in X)',

          hint: h(
            <>
              <p>Das <span className="hint-em">Komplement</span> Ā = X \ A ist alles in der Grundmenge X, was nicht in A liegt (analog B̄ = X \ B). Hier verbinden die <span className="hint-em">De Morganschen Gesetze</span> Komplement, ∪ und ∩:</p>
              <ul>
                <li><span className="hint-em">(A ∪ B)‾ = Ā ∩ B̄</span> — „Komplement der Vereinigung = Schnitt der Komplemente"</li>
                <li><span className="hint-em">(A ∩ B)‾ = Ā ∪ B̄</span> — „Komplement des Schnitts = Vereinigung der Komplemente"</li>
              </ul>
              <p>Merkregel: Zieht man das Komplement nach innen, <em>kippt</em> jede Operation — aus ∪ wird ∩ und umgekehrt, und jeder Teil wird komplementiert. Die vier Ausdrücke der Aufgabe (Ā∪B, Ā∪B̄, Ā∩B, Ā∩B̄) wertet man per Venn-Diagramm oder Zahlenprobe aus und vergleicht ihre schattierten Flächen.</p>
            </>,
            <>
              <p>Vorgehen: erst die Komplemente bilden, dann jeden Ausdruck einzeln auswerten. Zahlenprobe mit X = {'{1,2,3,4,5}'}, A = {'{1,2,3}'}, B = {'{3,4}'}:</p>
              <pre className="hint-code-block">{`Komplemente:  Ā = X\\A = {4,5}    B̄ = X\\B = {1,2,5}

Ā ∪ B  = {4,5} ∪ {3,4}   = {3,4,5}
Ā ∪ B̄  = {4,5} ∪ {1,2,5} = {1,2,4,5}
Ā ∩ B  = {4,5} ∩ {3,4}   = {4}
Ā ∩ B̄  = {4,5} ∩ {1,2,5} = {5}

De-Morgan-Querprüfung an dieser Probe:
  (A∪B)‾ = {1,2,3,4}‾ = {5}        = Ā ∩ B̄ ✓
  (A∩B)‾ = {3}‾       = {1,2,4,5}  = Ā ∪ B̄ ✓`}</pre>
              <p>So sieht man sofort: Ā∩B̄ ist genau das Komplement von A∪B, und Ā∪B̄ ist das Komplement von A∩B — das ist der Kern der De Morganschen Gesetze.</p>
            </>,
            <>
              <p>Zweite Probe X = {'{1,2,3,4}'}, A = {'{1,2}'}, B = {'{2,3}'} für die Gesetze selbst:</p>
              <pre className="hint-code-block">{`Ā = {3,4}, B̄ = {1,4}
(A∪B)‾ = {1,2,3}‾ = {4};  Ā∩B̄ = {3,4}∩{1,4} = {4}    ✓
(A∩B)‾ = {2}‾ = {1,3,4};  Ā∪B̄ = {3,4}∪{1,4} = {1,3,4} ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Ā = „alle Zahlen außer A" ohne Bezug auf X → <strong>✅ Richtig:</strong> Ā = X \ A, immer relativ zur Grundmenge X.</li>
              <li><strong>❌ Falsch:</strong> Ā ∪ B̄ mit Ā ∪ B verwechseln → <strong>✅ Richtig:</strong> B̄ = X \ B ist das Komplement von B, nicht B selbst.</li>
              <li><strong>❌ Falsch:</strong> De Morgan als (A∪B)‾ = Ā ∪ B̄ → <strong>✅ Richtig:</strong> die Operation kippt: (A∪B)‾ = Ā ∩ B̄ (mit ∩!) und (A∩B)‾ = Ā ∪ B̄.</li>
            </ul>,
            <p>Selbstkontrolle: prüfe an deiner Probe, ob (A∪B)‾ wirklich elementweise gleich Ā∩B̄ ist. Frage: Wie erkennst du mit De Morgan ganz ohne Venn-Diagramm, dass Ā∩B̄ das Komplement von A∪B ist — und wovon ist Ā∪B̄ das Komplement?</p>,
          ),
          solution: 'Es gilt (De Morgan\'sche Gesetze):\n\nA ∪ B̅ = A̅ ∩ B̅   (Komplement der Vereinigung = Schnitt der Komplemente)\nA ∩ B̅ = A̅ ∪ B̅   (Komplement des Schnitts = Vereinigung der Komplemente)\n\n→ A̅ ∪ B und A̅ ∩ B̅ haben identische Venn-Diagramme.\n→ A̅ ∩ B und A̅ ∪ B̅ haben identische Venn-Diagramme.',
        },
      ],
    },
    {
      id: 'b1a5',
      nr: 5,
      title: 'Mengengleichheiten (optional)',
      referenz: ['mengenoperationen', 'de-morgan-potenzmenge'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien A, B, C Teilmengen einer Grundmenge X.\nWelche Gleichheiten sind für jede Wahl immer erfüllt?\n\n(i)   A \\ (B \\ C) = (A \\ B) \\ C\n(ii)  A \\ B = A ∩ B̅\n(iii) A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)\n(iv)  A ∪ (A̅ ∩ B) = A ∪ B',
          hint: h(
            <>
              <p>Hier ist zu entscheiden, ob eine Mengengleichheit für JEDE Wahl von A, B, C gilt. Es gibt eine grundlegende Asymmetrie:</p>
              <ul>
                <li><span className="hint-em">Widerlegen</span> (Aussage ist falsch): ein einziges <span className="hint-em">Gegenbeispiel</span> genügt — konkrete Mengen, für die linke Seite (LHS) ≠ rechte Seite (RHS).</li>
                <li><span className="hint-em">Beweisen</span> (Aussage ist immer wahr): ein Beispiel reicht NICHT; man braucht die <span className="hint-em">Elementmethode</span> — zeige x ∈ LHS ⟺ x ∈ RHS für ein beliebiges x, indem man beide Bedingungen logisch ineinander umformt.</li>
              </ul>
              <p>Werkzeuge: Definition der Differenz A\B = {'{x : x ∈ A und x ∉ B}'}, des Komplements B̄ = {'{x : x ∉ B}'}, De Morgan (¬(P und Q) = ¬P oder ¬Q) und die Distributivgesetze. Strategie: erst Gegenbeispiele suchen, dann beweisen, was übrig bleibt.</p>
            </>,
            <>
              <p>So prüft man die vier Aussagen einzeln:</p>
              <pre className="hint-code-block">{`(i) A\\(B\\C) = (A\\B)\\C ?  → GEGENBEISPIEL suchen
   Wähle A = B = C = {1,2,3}:
     B\\C = ∅  →  A\\(B\\C) = A\\∅ = {1,2,3}
     A\\B = ∅  →  (A\\B)\\C = ∅\\C = ∅
   {1,2,3} ≠ ∅  → NICHT immer erfüllt (widerlegt).

(ii) A\\B = A∩B̄ ?  → BEWEIS (Elementmethode)
   x ∈ A\\B
   ⟺ x ∈ A und x ∉ B          [Def. Differenz]
   ⟺ x ∈ A und x ∈ B̄          [Def. Komplement: x∉B = x∈B̄]
   ⟺ x ∈ A ∩ B̄                [Def. Schnitt]
   → immer erfüllt.

(iii) A\\(B∩C) = (A\\B)∪(A\\C) ?  → BEWEIS
   x ∈ A\\(B∩C)
   ⟺ x ∈ A und x ∉ (B∩C)
   ⟺ x ∈ A und (x ∉ B oder x ∉ C)   [De Morgan]
   ⟺ (x∈A und x∉B) oder (x∈A und x∉C) [Distributiv]
   ⟺ x ∈ (A\\B) ∪ (A\\C)
   → immer erfüllt.

(iv) A ∪ (Ā∩B) = A∪B ?  → BEWEIS (Mengenalgebra)
   A ∪ (Ā∩B)
   = (A∪Ā) ∩ (A∪B)   [Distributivgesetz]
   = X ∩ (A∪B)       [A∪Ā = X, Grundmenge]
   = A ∪ B
   → immer erfüllt.`}</pre>
              <p>Ergebnis: (i) ist falsch, (ii)/(iii)/(iv) sind allgemeingültig.</p>
            </>,
            <>
              <p>Elementmethode an einem einfacheren Beispiel A\(B∪C) = (A\B)∩(A\C):</p>
              <pre className="hint-code-block">{`x ∈ A\(B∪C)
⟺ x∈A und x∉(B∪C)
⟺ x∈A und (x∉B und x∉C)        [De Morgan]
⟺ (x∈A und x∉B) und (x∈A und x∉C)
⟺ x ∈ (A\B) ∩ (A\C)   ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ein passendes Beispiel als „Beweis" der Allgemeingültigkeit nehmen → <strong>✅ Richtig:</strong> ein Beispiel beweist nichts; zum Beweisen Elementmethode, zum Widerlegen ein Gegenbeispiel.</li>
              <li><strong>❌ Falsch:</strong> bei (i) nur einen günstigen Fall testen und „stimmt" schließen → <strong>✅ Richtig:</strong> A=B=C={'{1,2,3}'} liefert {'{1,2,3}'} ≠ ∅ → widerlegt.</li>
              <li><strong>❌ Falsch:</strong> bei ⟺ nur eine Richtung zeigen → <strong>✅ Richtig:</strong> jeder ⟺-Schritt muss in beide Richtungen gelten (hier sind alle Umformungen Äquivalenzen).</li>
            </ul>,
            <p>Selbstkontrolle: teste jede als „gültig" eingestufte Gleichheit zusätzlich an Zahlen (z.B. A={'{1,2}'}, B={'{2}'}, C={'{3}'}) — sie muss aufgehen. Frage: Warum genügt für (i) ein einziges Gegenbeispiel, während (ii)–(iv) eine Äquivalenzkette x ∈ LHS ⟺ x ∈ RHS in beide Richtungen brauchen?</p>,
          ),
          solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B̅  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A̅ ∩ B) = (A ∪ A̅) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
        },
      ],
    },
  ],
}
