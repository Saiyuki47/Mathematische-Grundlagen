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
              <p>Zwei grundlegende Mengensymbole:</p>
              <ul>
                <li><span className="hint-em">∈</span> (ist Element von): Prüft, ob ein Objekt direkt in der Menge vorkommt</li>
                <li><span className="hint-em">⊆</span> (ist Teilmenge von): Prüft, ob eine Menge nur Elemente der anderen enthält</li>
              </ul>
              <p>Wichtig: <strong>1</strong> (eine Zahl) und <strong>{'{1}'}</strong> (eine einelementige Menge) sind verschiedene Objekte!</p>
            </>,
            <>
              <ol>
                <li>Bestimme, welche Art von Objekten direkte Elemente der Menge sind (Zahlen? Mengen? Gemischt?)</li>
                <li>Für ∈-Aussagen: Ist das linke Objekt exakt als direktes Element aufgelistet?</li>
                <li>Für ⊆-Aussagen: Nimm jedes Element der linken Menge und prüfe, ob es direkt in der rechten Menge vorkommt</li>
                <li>Achte auf Typen: Zahl 1 und Menge {'{1}'} sind verschiedene Objekte — auch wenn 1 ∈ {'{1}'} gilt</li>
              </ol>
            </>,
            <>
              <p>Beispiel mit A = {'{a, b, {c}}'}</p>
              <pre className="hint-code-block">{`a ∈ A     → korrekt  (a ist direktes Element)
{a} ∈ A   → falsch   ({a} ist keine direktes Element)
{a} ⊆ A   → korrekt  (a ∈ A → {a} ist Teilmenge)
{c} ∈ A   → korrekt  ({c} ist direktes Element)
c ∈ A     → falsch   (c selbst ist kein Element)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> {'{1}'} ∈ M, weil 1 ∈ M (verwechselt) → <strong>✅ Richtig:</strong> 1 und {'{1}'} sind verschiedene Objekte; M enthält nur Zahlen, nicht Mengen</li>
              <li><strong>❌ Falsch:</strong> ∈ und ⊆ tauschen: „1 ⊆ M" schreiben → <strong>✅ Richtig:</strong> 1 ist eine Zahl, keine Menge → schreibe 1 ∈ M (Element-Beziehung)</li>
              <li><strong>❌ Falsch:</strong> {'{1}'} ⊆ M bedeutet: Ist {'{1}'} ∈ M? → <strong>✅ Richtig:</strong> {'{1}'} ⊆ M bedeutet: Ist jedes Element von {'{1}'} auch in M? Das einzige Element ist 1 → 1 ∈ M ✓</li>
            </ul>,
            <p>Was genau unterscheidet die Aussagen 1 ∈ M und {'{1}'} ⊆ M? Beide beziehen sich auf die Zahl 1 und die Menge M — warum können beide wahr sein, obwohl {'{1}'} ∉ M gilt?</p>,
          ),
          solution: '(i) 1 ∈ M  → korrekt  (1 ist Element von {1,2,3})\n(ii) {1} ∈ M  → falsch  ({1} ist keine Menge in M; 1 ist ein Element, nicht {1})\n(iii) {1} ⊆ M  → korrekt  ({1} ist Teilmenge von {1,2,3})',
        },
        {
          letter: 'b',
          text: 'Sei L = {∅, {1}, {2}, {1,2}}. Entscheiden Sie jeweils, ob die Schreibweise korrekt ist:\n\n(i)   2 ∈ L\n(ii)  {2} ∈ L\n(iii) {2} ⊆ L\n(iv)  {{2}} ⊆ L',
          hint: h(
            <>
              <p>L ist eine <span className="hint-em">Menge von Mengen</span>. Ihre Elemente sind selbst Mengen: ∅, {'{1}'}, {'{2}'}, {'{1,2}'}.</p>
              <p>Schachtelungsebenen beachten: 2 (Zahl) ≠ {'{2}'} (Menge) ≠ {'{{2}}'} (Menge der Menge).</p>
            </>,
            <>
              <ol>
                <li>Liste die direkten Elemente der Menge auf — alles, was explizit zwischen den äußeren {'{...}'} steht</li>
                <li>Für ∈-Aussagen: Ist das linke Objekt exakt eines der direkten Elemente? (Schachtelungsebene beachten!)</li>
                <li>Für ⊆-Aussagen: Nimm jedes Element der linken Menge und frage: Ist dieses Objekt ein direktes Element der rechten Menge?</li>
                <li>Beachte: 2, {'{2}'}, {'{{2}}'} sind drei verschiedene Objekte auf drei Schachtelungsebenen — ein ∈-Test auf der falschen Ebene liefert stets falsch</li>
              </ol>
            </>,
            <>
              <p>Beispiel: M = {'{{a},{b},{a,b}}'}</p>
              <pre className="hint-code-block">{`{a} ∈ M   → korrekt  ({a} ist direktes Element)
a ∈ M     → falsch   (a selbst ist kein Element)
{a} ⊆ M   → falsch   (wäre wahr wenn a ∈ M, aber a ∉ M)
{{a}} ⊆ M → korrekt  ({a} ∈ M → {{a}} ist Teilmenge)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2 ∈ L, weil {'{2}'} ∈ L (Ebenen verwechselt) → <strong>✅ Richtig:</strong> 2 (Zahl) und {'{2}'} (Menge) sind verschiedene Objekte; L enthält {'{2}'} als Menge, aber nicht 2 als Zahl</li>
              <li><strong>❌ Falsch:</strong> {'{2}'} ⊆ L bedeutet „{'{2}'} ist Element von L" → <strong>✅ Richtig:</strong> ⊆ ist Teilmengen-Relation: prüfe ob 2 (Element von {'{2}'}) in L ist → 2 ∉ L → {'{2}'} ⊄ L</li>
              <li><strong>❌ Falsch:</strong> {'{{2}}'} ⊆ L prüft ob 2 ∈ L → <strong>✅ Richtig:</strong> {'{{2}}'} ⊆ L prüft ob {'{2}'} ∈ L (eine Ebene tiefer: Element von {'{{2}}'} ist {'{2}'}, nicht 2)</li>
            </ul>,
            <p>Beim Prüfen von A ⊆ B wechselst du von der Mengenebene auf die Elementebene. Warum ist {'{{2}}'} ⊆ L äquivalent zur Frage „Ist {'{2}'} ∈ L?" — und was wäre anders, wenn du stattdessen {'{2}'} ⊆ L prüfen würdest?</p>,
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
              <p>Die vier grundlegenden Mengenoperationen:</p>
              <ul>
                <li><span className="hint-em">A \ B</span> (Differenz): Elemente in A, die nicht in B sind</li>
                <li><span className="hint-em">A ∩ B</span> (Schnitt): Elemente, die in beiden Mengen sind</li>
                <li><span className="hint-em">A ∪ B</span> (Vereinigung): Elemente, die in mindestens einer Menge sind</li>
                <li><span className="hint-em">A × B</span> (kart. Produkt): Alle geordneten Paare (a, b) mit a∈A, b∈B</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Für A \ B: Prüfe jedes Element von A, ob es auch in B vorkommt — behalte nur die, die nicht in B sind</li>
                <li>Für A ∩ B ∩ C: Ein Element muss in allen drei Mengen gleichzeitig sein — teste jedes Kandidat-Element</li>
                <li>Für A ∪ B ∪ C: Sammle alle Elemente aus allen Mengen, jedes genau einmal</li>
                <li>Für A × B: Bilde alle geordneten Paare (a, b) mit a aus A und b aus B — Reihenfolge zählt, also (a,b) ≠ (b,a)</li>
                <li>Kontrolle für ×: Die Anzahl der Paare muss |A| · |B| ergeben</li>
              </ol>
            </>,
            <>
              <p>Beispiel: A = {'{1,2}'}, B = {'{2,3}'}</p>
              <pre className="hint-code-block">{`A\B = {1},  B\A = {3},  A∩B = {2},  A∪B = {1,2,3}
A×B = {(1,2),(1,3),(2,2),(2,3)}`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Z\X = X\Z (kommutativ) → <strong>✅ Richtig:</strong> Z\X ≠ X\Z; Z\X = ∅ aber X\Z = {'{3,7}'}</li>
              <li><strong>❌ Falsch:</strong> Reihenfolge im kartesischen Produkt ignorieren: (1,3) und (3,1) werden als gleich betrachtet → <strong>✅ Richtig:</strong> X×Z enthält geordnete Paare; (1,3) ∈ X×Z bedeutet erstes Element aus X, zweites aus Z</li>
              <li><strong>❌ Falsch:</strong> Bei X∪Y∪Z Duplikate aufführen wie {'{1,3,5,7,5,7,8,1,5}'} → <strong>✅ Richtig:</strong> Jedes Element nur einmal angeben: {'{1,3,5,7,8}'}</li>
            </ul>,
            <p>Warum ist das kartesische Produkt A × B nicht kommutativ? Was würde es bedeuten, wenn man (a, b) und (b, a) als gleich betrachten würde — und welche mathematische Struktur würde man damit beschreiben?</p>,
          ),
          solution: '(i) Z \\ X = {1,5} \\ {1,3,5,7} = ∅\n(ii) X \\ Z = {1,3,5,7} \\ {1,5} = {3,7}\n(iii) X ∩ Y ∩ Z = {5}\n(iv) X ∪ Y ∪ Z = {1,3,5,7,8}\n(v) X × Z = {(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)}',
        },
        {
          letter: 'b',
          text: 'Grundmenge G = {1,2,3,4,5,6,7,8,9}\nL = {1,2,4,7},  M = {3,5,6,8,9},  N = {4,5,9}\n(L̅ = Komplement von L in G, etc.)\n\nBestimmen Sie:\n(i)   L̅ ∩ N\n(ii)  (L ∩ M̅) ∪ (N ∩ N̅)\n(iii) L ∩ N̅ ∩ M̅',
          hint: h(
            <>
              <p><span className="hint-em">Komplement</span> Ā = G \ A: alle Elemente der Grundmenge G, die nicht in A sind.</p>
              <p>Wichtige Eigenschaften: A ∪ Ā = G und A ∩ Ā = ∅ (eine Menge und ihr Komplement sind disjunkt).</p>
            </>,
            <>
              <ol>
                <li>Berechne zuerst alle benötigten Komplemente: Ā = G \ A für jede vorkommende Menge A</li>
                <li>Erkenne Kurzschlüsse: A ∩ Ā = ∅ immer — Ausdrücke mit diesem Muster sofort vereinfachen</li>
                <li>Werte den Gesamtausdruck von innen nach außen aus, Teilschritt für Teilschritt</li>
                <li>Kontrolle: A ∪ Ā = G und |Ā| = |G| − |A| müssen stimmen</li>
              </ol>
            </>,
            <>
              <p>Beispiel: G = {'{1,2,3,4,5}'}, A = {'{1,2,3}'}</p>
              <pre className="hint-code-block">{`Ā = {4,5}
A ∩ Ā = ∅ ✓
A ∪ Ā = {1,2,3,4,5} = G ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> L̄ = alle ganzen Zahlen außer 1,2,4,7 (zu groß, nicht auf G beschränkt) → <strong>✅ Richtig:</strong> L̄ = G \ L = {'{1..9}'} \ {'{1,2,4,7}'} = {'{3,5,6,8,9}'}</li>
              <li><strong>❌ Falsch:</strong> N ∩ N̄ = N (oder irgendwas außer ∅) → <strong>✅ Richtig:</strong> N ∩ N̄ = ∅ immer (kein Element kann gleichzeitig in N und nicht in N sein)</li>
              <li><strong>❌ Falsch:</strong> L ∩ M̄ = L ∩ M̄ ≠ L → <strong>✅ Richtig:</strong> M̄ = {'{1,2,4,7}'} = L, daher L ∩ M̄ = L ∩ L = L</li>
            </ul>,
            <p>Warum ist A ∩ Ā = ∅ eine logische Notwendigkeit und keine Zufälligkeit dieser Mengen? Gibt es ein Objekt, das gleichzeitig in A und in Ā = G \ A sein kann?</p>,
          ),
          solution: 'Komplemente: L̅ = {3,5,6,8,9}  M̅ = {1,2,4,7}  N̅ = {1,2,3,6,7,8}\n\n(i) L̅ ∩ N = {3,5,6,8,9} ∩ {4,5,9} = {5,9}\n(ii) (L ∩ M̅) ∪ (N ∩ N̅) = ({1,2,4,7} ∩ {1,2,4,7}) ∪ ∅ = {1,2,4,7} = L\n(iii) L ∩ N̅ ∩ M̅ = {1,2,4,7} ∩ {1,2,3,6,7,8} ∩ {1,2,4,7} = {1,2,7}',
        },
        {
          letter: 'c',
          text: 'Gegeben:\n  M₁ = ℤ,  M₂ = ℕ,  M₃ = {−1, 1, 2},  M₄ = [−1, 2)\n\nBestimmen Sie:\n(i)   M₄ ∪ M₃\n(ii)  M₄ ∩ (M₂ \\ M₃)\n(iii) M₃ \\ (M₁ \\ M₂)',
          hint: h(
            <>
              <p>Verwendete Zahlenmengen:</p>
              <ul>
                <li><span className="hint-em">ℕ</span> = {'{0, 1, 2, 3, ...}'} (natürliche Zahlen, hier mit 0)</li>
                <li><span className="hint-em">ℤ</span> = {'{..., −2, −1, 0, 1, 2, ...}'} (ganze Zahlen)</li>
                <li><span className="hint-em">[a, b)</span>: Intervall — enthält a, aber nicht b</li>
              </ul>
              <p>ℤ \ ℕ = negative ganze Zahlen {'{..., −3, −2, −1}'}</p>
            </>,
            <>
              <ol>
                <li>Identifiziere zunächst, welche Elemente in den beteiligten Mengen liegen — beachte den Unterschied zwischen Intervallen und diskreten Mengen</li>
                <li>Prüfe bei Intervallen genau, welche Endpunkte enthalten sind: [ = inklusive, ) = exklusive</li>
                <li>Für A \ B: Welche Elemente von A sind nicht in B? Bei ℕ \ {'{diskrete Elemente}'}: Achte darauf, was ℕ überhaupt enthält (z.B. keine negativen Zahlen)</li>
                <li>Werte verschachtelte Ausdrücke von innen nach außen aus</li>
              </ol>
            </>,
            <>
              <p>Intervall-Beispiele:</p>
              <pre className="hint-code-block">{`[0,3) ∪ {3}    = [0,3]
[−1,2) ∩ {0,1,2,3} = {0,1}   (2 ∉ [−1,2)!)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> [−1,2) enthält 2 → <strong>✅ Richtig:</strong> Die runde (offene) Klammer ) bedeutet: Endpunkt 2 ist NICHT enthalten; eckige Klammer ] würde 2 einschließen</li>
              <li><strong>❌ Falsch:</strong> M₂\M₃ enthält −1 nicht, weil −1 ∈ M₃ → <strong>✅ Richtig:</strong> −1 ∉ ℕ = M₂, kann also gar nicht in M₂\M₃ sein — M₃ hat keinen Einfluss auf −1</li>
              <li><strong>❌ Falsch:</strong> M₄ ∩ {'{0,3,4,...}'} = {'{0,1}'} (denken 1 ist drin) → <strong>✅ Richtig:</strong> 3 ∉ [−1,2), da 3 ≥ 2; nur 0 liegt in [−1,2)</li>
            </ul>,
            <p>Was unterscheidet [−1, 2) und [−1, 2] grundlegend — und warum kann man ein Intervall mit einer endlichen Menge vereinigen, obwohl es sich um verschiedene Typen handelt? Was wäre das Ergebnis von [0,1) ∪ {'{1}'} ∪ [1,2)?</p>,
          ),
          solution: '(i) M₄ ∪ M₃ = [−1, 2) ∪ {2} = [−1, 2] = {x ∈ ℝ : −1 ≤ x ≤ 2}\n(ii) M₂ \\ M₃ = {0, 3, 4, 5, …}\n    M₄ ∩ (M₂ \\ M₃) = [−1, 2) ∩ {0, 3, 4, …} = {0}\n(iii) M₁ \\ M₂ = {…, −3, −2, −1}\n    M₃ \\ (M₁ \\ M₂) = {−1, 1, 2} \\ {…, −1} = {1, 2}',
        },
        {
          letter: 'd',
          text: 'Sei A = {1, 2, 3}. Geben Sie die Potenzmenge P(A) an.',
          hint: h(
            <>
              <p>Die <span className="hint-em">Potenzmenge P(A)</span> ist die Menge aller Teilmengen von A — einschließlich der leeren Menge ∅ und A selbst.</p>
              <p>Formel: |P(A)| = 2^|A|. Für |A| = 3: 2³ = 8 Teilmengen.</p>
            </>,
            <>
              <ol>
                <li>Gehe systematisch nach Größe vor: zuerst 0-elementige Teilmenge (∅), dann 1-elementige, 2-elementige, ..., bis zur Menge selbst</li>
                <li>Für k-elementige Teilmengen: Es gibt C(n, k) Möglichkeiten</li>
                <li>Zähle nach: Summe der C(n,k) für k = 0,...,n muss 2ⁿ ergeben</li>
              </ol>
            </>,
            <>
              <p>Beispiel: P({'{a,b}'})</p>
              <pre className="hint-code-block">{`P({a,b}) = { ∅, {a}, {b}, {a,b} }
|P({a,b})| = 2² = 4 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∅ weglassen → <strong>✅ Richtig:</strong> ∅ ist immer eine Teilmenge jeder Menge (auch von A) und gehört zur Potenzmenge</li>
              <li><strong>❌ Falsch:</strong> A = {'{1,2,3}'} selbst weglassen → <strong>✅ Richtig:</strong> A ⊆ A gilt immer; die Potenzmenge enthält auch die Menge selbst</li>
              <li><strong>❌ Falsch:</strong> Nur 7 statt 8 Teilmengen (eine vergessen) → <strong>✅ Richtig:</strong> Zähle: 1 + C(3,1) + C(3,2) + 1 = 1+3+3+1 = 8 = 2³</li>
            </ul>,
            <p>Warum hat eine n-elementige Menge genau 2ⁿ Teilmengen? Was hat das mit der Entscheidung für jedes Element zu tun — und wie überzeugt man sich, dass das keine Zufälligkeit für kleine n ist?</p>,
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
              <p>Standardmuster für Erzeuger-Notation {'{f(n) : n ∈ ℕ}'}:</p>
              <ul>
                <li><span className="hint-em">Vielfache von k</span>: {'{k·n : n ∈ ℕ}'} = {'{0, k, 2k, 3k, ...}'}</li>
                <li><span className="hint-em">Rest r bei Division durch k</span>: {'{k·n + r : n ∈ ℕ}'}</li>
                <li><span className="hint-em">Durch 2 und 3 teilbar</span>: durch kgV(2,3) = 6 teilbar</li>
              </ul>
              <p>n beginnt bei 0 (ℕ = {'{0,1,2,3,...}'})</p>
            </>,
            <>
              <ol>
                <li>Identifiziere das Muster: Vielfache (k·n), Rest r bei Division durch k (k·n + r), oder Teilbarkeit durch mehrere Zahlen (→ kgV)</li>
                <li>Bestimme n=0 als Startpunkt und prüfe: Ergibt sich daraus das erste erwartete Element?</li>
                <li>Schreibe die Erzeuger-Notation {'{f(n) : n ∈ ℕ}'} auf</li>
                <li>Überprüfe: Setze n=0,1,2,3 ein und vergleiche mit der textuellen Beschreibung</li>
              </ol>
            </>,
            <>
              <p>Richtige Darstellungen:</p>
              <pre className="hint-code-block">{`Ungerade Zahlen (Rest 1 bei Div. durch 2):
{2n+1 : n ∈ ℕ} = {1,3,5,7,...}

Vielfache von 4: {4n : n ∈ ℕ} = {0,4,8,12,...}`}</pre>
              <p>Kontrast: kgV vs. ggT bei Bedingung „durch 2 und 3 teilbar":</p>
              <pre className="hint-code-block">{`Falsch: {ggT(2,3)·n} = {1·n} = {0,1,2,3,...} = ℕ  ✗ (alle ℕ!)
Richtig: {kgV(2,3)·n} = {6n} = {0,6,12,18,...}  ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n bei 1 starten → <strong>✅ Richtig:</strong> n ∈ ℕ beginnt bei 0; n=1 würde erstes Element auslassen (z.B. fehlt 0 bei Vielfachen von 7)</li>
              <li><strong>❌ Falsch:</strong> Für (iii) ggT(2,3)=1 verwenden → {'{1n : n ∈ ℕ}'} = ℕ → <strong>✅ Richtig:</strong> kgV(2,3)=6 verwenden, weil die Zahl durch beide teilbar sein muss</li>
            </ul>,
            <p>Warum verwendet man bei (iii) das kgV statt des ggT? Was würde die Menge {'{ggT(2,3)·n : n ∈ ℕ}'} = {'{n : n ∈ ℕ}'} stattdessen bedeuten — und was fehlt ihr?</p>,
          ),
          solution: '(i) {7n : n ∈ ℕ} = {0, 7, 14, 21, …}\n(ii) {5n + 3 : n ∈ ℕ} = {3, 8, 13, 18, …}\n(iii) kgV(2, 3) = 6  →  {6n : n ∈ ℕ} = {0, 6, 12, 18, …}',
        },
        {
          letter: 'b',
          text: 'Geben Sie folgende Mengen durch Auflistung der ersten Elemente an\n(n ∈ ℕ, d. h. n beginnt bei 0):\n\n(i)   {3n − 2 : n ∈ ℕ}\n(ii)  {3n + 2 : n ∈ ℕ}\n(iii) {2ⁿ : n ∈ ℕ}\n(iv)  {2²ⁿ : n ∈ ℕ}',
          hint: h(
            <>
              <p>Eine Menge in Erzeuger-Notation {'{f(n) : n ∈ ℕ}'} wird durch Einsetzen von n = 0, 1, 2, 3, ... in die Funktion f(n) aufgelistet.</p>
              <p><span className="hint-em">Tipp für (iv)</span>: Vereinfache zuerst den Ausdruck: 2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ, dann n = 0, 1, 2, ... einsetzen.</p>
            </>,
            <>
              <ol>
                <li>Vereinfache den Ausdruck f(n) algebraisch, wenn möglich (z.B. Potenzgesetze bei 2²ⁿ)</li>
                <li>Setze n = 0, 1, 2, 3, 4 nacheinander in den vereinfachten Ausdruck ein</li>
                <li>Liste die Ergebnisse als Menge auf (kein Index, keine Reihenfolge, keine Duplikate)</li>
              </ol>
            </>,
            <>
              <p>Vereinfachung für (iv):</p>
              <pre className="hint-code-block">{`2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ
n=0: 4⁰=1,  n=1: 4¹=4,  n=2: 4²=16`}</pre>
              <p>Kontrast: verschiedene Lesarten von 2²ⁿ:</p>
              <pre className="hint-code-block">{`2²ⁿ  = (2²)ⁿ = 4ⁿ      → {1, 4, 16, 64, ...}   ✓ Potenzen von 4
(2ⁿ)² = 4ⁿ              → dasselbe Ergebnis ✓
2^(2n) als 4n (Fehler!)  → {0, 4, 8, ...}          ✗ n ist Exponent, kein Faktor`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n bei 1 starten: 3·1−2=1 als erstes Element → <strong>✅ Richtig:</strong> n bei 0: 3·0−2=−2 ist das erste Element</li>
              <li><strong>❌ Falsch:</strong> 2²ⁿ = 4·n (Multiplikation statt Potenz) → <strong>✅ Richtig:</strong> 2²ⁿ = 2^(2n) = (2²)ⁿ = 4ⁿ; n ist der Exponent, nicht ein Faktor</li>
            </ul>,
            <p>Was ist der konzeptuelle Unterschied zwischen {'{2ⁿ : n ∈ ℕ}'} und {'{2²ⁿ : n ∈ ℕ}'} — beide nutzen Basis 2, aber warum wachsen sie so unterschiedlich? Welche der beiden Mengen ist eine Teilmenge der anderen?</p>,
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
              <p>Ein <span className="hint-em">Venn-Diagramm</span> mit 3 Mengen besteht aus 3 überlappenden Kreisen in einem Rechteck (Grundmenge). Es entstehen 8 disjunkte Bereiche. Jede Mengenoperation wird durch Schattieren visualisiert.</p>
              <p>Ziel: Die vier Ausdrücke paarweise vergleichen.</p>
            </>,
            <>
              <pre className="hint-code-block">{`Für jeden Ausdruck: von innen nach außen auswerten
und schrittweise schattieren.

(A∩B)∪C:    erst Überlappung A∩B schattieren,
           dann alles in C hinzufügen
(A∪C)∩(B∪C): erst A∪C, dann B∪C, dann Schnitt

→ Vergleiche die schattierte Fläche paarweise!`}</pre>
            </>,
            <>
              <p>Zahlenprobe: A={'{1,2}'}, B={'{2,3}'}, C={'{3,4,5}'}</p>
              <pre className="hint-code-block">{`(A∩B)∪C = {2}∪{3,4,5} = {2,3,4,5}
(A∪C)∩(B∪C) = {1,2,3,4,5}∩{2,3,4,5} = {2,3,4,5} ✓

(A∪B)∩C = {1,2,3}∩{3,4,5} = {3}
(A∩C)∪(B∩C) = ∅∪{3} = {3} ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> (A∩B)∪C ohne Klammern als A∩B∪C lesen → <strong>✅ Richtig:</strong> Klammern zuerst: erst A∩B berechnen, dann ∪C</li>
              <li><strong>❌ Falsch:</strong> Alle 4 Ausdrücke als identisch annehmen → <strong>✅ Richtig:</strong> Es gibt 2 gleiche Paare: {'{(A∩B)∪C = (A∪C)∩(B∪C)} und {(A∪B)∩C = (A∩C)∪(B∩C)}'}</li>
            </ul>,
            <p>Die Distributivgesetze sagen: ∪ verteilt sich über ∩ und umgekehrt. Was passiert auf Elementebene, wenn x ∈ (A∩B)∪C gilt — und warum ist das logisch dasselbe wie x ∈ (A∪C)∩(B∪C)?</p>,
          ),
          solution: '(A ∩ B) ∪ C  =  (A ∪ C) ∩ (B ∪ C)\n→ Distributivgesetz: ∪ verteilt sich über ∩\n\n(A ∪ B) ∩ C  =  (A ∩ C) ∪ (B ∩ C)\n→ Distributivgesetz: ∩ verteilt sich über ∪\n\nDie Mengenoperationen ∪ und ∩ sind wechselseitig distributiv.',
        },
        {
          letter: 'b',
          text: 'Veranschaulichen Sie durch Venn-Diagramme und vergleichen Sie:\n\n  A ∪ (B ∩ C)\n  (A ∪ B) ∩ C\n\nWas fällt auf?',
          hint: h(
            <>
              <p>Klammerung ist bei Mengenoperationen entscheidend: A ∪ (B∩C) und (A∪B)∩C sind im Allgemeinen verschieden, weil ∪ und ∩ <span className="hint-em">nicht frei vertauscht werden können</span>.</p>
              <p>Der Schlüssel liegt in den Elementen, die nur in A liegen (nicht in B und nicht in C): Diese sind in A ∪ (B∩C) immer enthalten, in (A∪B)∩C hingegen nur dann, wenn sie auch in C liegen.</p>
              <p>Wann sind die Ausdrücke doch gleich? Genau wenn A ⊆ C gilt — dann fügt das erste Ergebnis nichts hinzu, was das zweite nicht schon hätte.</p>
            </>,
            <>
              <ol>
                <li>Werte jeden Teilausdruck in Klammern separat aus</li>
                <li>Visualisiere im Venn-Diagramm: Schattiere jeden Teilausdruck Schritt für Schritt</li>
                <li>Wende die äußere Operation auf die bereits schattierten Flächen an</li>
                <li>Vergleiche die Ergebnisse: Gibt es Elemente in einem Ausdruck, die im anderen fehlen?</li>
                <li>Suche gezielt nach Elementen, die nur in A, aber weder in B noch in C liegen — das ist der entscheidende Unterschied</li>
              </ol>
            </>,
            <>
              <p>Konkretes Gegenbeispiel:</p>
              <pre className="hint-code-block">{`A={1,2}, B={2,3}, C={3}:
A ∪ (B∩C) = {1,2} ∪ {3} = {1,2,3}
(A∪B) ∩ C = {1,2,3} ∩ {3} = {3}
{1,2,3} ≠ {3} → nicht gleich!`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> A∪(B∩C) = (A∪B)∩C annehmen (∪ und ∩ beliebig kombiniert) → <strong>✅ Richtig:</strong> Gegenbeispiel: A={'{1,2}'}, B={'{2,3}'}, C={'{3}'} → A∪(B∩C)={'{1,2,3}'} ≠ (A∪B)∩C={'{3}'}</li>
              <li><strong>❌ Falsch:</strong> Nur die Schnittbereiche von A, B, C prüfen → <strong>✅ Richtig:</strong> Elemente die nur in A (nicht in B,C) liegen sind der Schlüsselunterschied: sie sind in Ausdruck 1 enthalten, in Ausdruck 2 nicht</li>
            </ul>,
            <p>Was ist der konzeptuelle Unterschied zwischen „erst vereinigen, dann schneiden" und „erst schneiden, dann vereinigen"? Warum kann A ∪ (B∩C) Elemente aus A enthalten, die gar nichts mit B oder C zu tun haben — und warum ist das für (A∪B)∩C unmöglich?</p>,
          ),
          solution: 'A ∪ (B ∩ C)  ≠  (A ∪ B) ∩ C  im Allgemeinen.\n\nBeispiel: A = {1,2}, B = {2,3}, C = {3,4}\n  A ∪ (B ∩ C) = {1,2} ∪ {3} = {1,2,3}\n  (A ∪ B) ∩ C = {1,2,3} ∩ {3,4} = {3}\n\n→ Klammern können nicht einfach weggelassen werden!',
        },
        {
          letter: 'c',
          text: 'Sei X Grundmenge, A, B ⊆ X. Veranschaulichen Sie und vergleichen Sie:\n\n  Ā ∪ B\n  Ā ∪ B̄\n  Ā ∩ B\n  Ā ∩ B̄\n\n(Ā = Komplement von A in X)',

          hint: h(
            <>
              <p><span className="hint-em">De Morgansche Gesetze</span>:</p>
              <ul>
                <li>(A ∪ B)‾ = Ā ∩ B̄</li>
                <li>(A ∩ B)‾ = Ā ∪ B̄</li>
              </ul>
              <p>Komplement Ā = X \ A: alles in der Grundmenge X, was nicht in A ist.</p>
            </>,
            <>
              <ol>
                <li>Zeichne A und B als überlappende Kreise in der Grundmenge X</li>
                <li>Berechne die Komplemente: Ā = X \ A (alles außerhalb A), B̄ = X \ B</li>
                <li>Werte jeden der vier Ausdrücke (Ā∪B, Ā∪B̄, Ā∩B, Ā∩B̄) separat im Diagramm aus</li>
                <li>Suche Paare mit identischer Schattierung — das entspricht Mengenäquivalenzen</li>
                <li>Vergleiche deine Paare mit den De Morganschen Gesetzen als Querprüfung</li>
              </ol>
            </>,
            <>
              <p>Probe: X={'{1..5}'}, A={'{1,2,3}'}, B={'{3,4}'}</p>
              <pre className="hint-code-block">{`Ā={4,5},  B̄={1,2,5}
Ā∪B  = {3,4,5}    Ā∪B̄ = {1,2,4,5}
Ā∩B  = {4}        Ā∩B̄ = {5}`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Ā = alle reellen Zahlen außer A (keine Grundmenge X) → <strong>✅ Richtig:</strong> Ā = X \ A, immer relativ zur Grundmenge X</li>
              <li><strong>❌ Falsch:</strong> Ā ∪ B̄ = Ā ∪ B (B und B̄ verwechselt) → <strong>✅ Richtig:</strong> B̄ = X \ B ist das Komplement von B, nicht B selbst</li>
              <li><strong>❌ Falsch:</strong> De Morgan als Ā ∪ B̄ = A ∪ B → <strong>✅ Richtig:</strong> De Morgan: (A∩B)‾ = Ā ∪ B̄ und (A∪B)‾ = Ā ∩ B̄</li>
            </ul>,
            <p>De Morgan besagt: (A∪B)‾ = Ā∩B̄. Wie kannst du das nutzen, um Äquivalenzen unter den vier Ausdrücken ohne Venn-Diagramm zu identifizieren — und was sagt das über die Beziehung zwischen Ā∪B̄ und (A∩B)‾?</p>,
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
              <p>Zwei Methoden:</p>
              <ul>
                <li><span className="hint-em">Widerlegung</span>: Einfache Mengen einsetzen (z. B. A=B=C={'{1,2,3}'}). Wenn LHS ≠ RHS → Aussage falsch.</li>
                <li><span className="hint-em">Elementmethode</span> (Beweis): Zeige x ∈ LHS ⟺ x ∈ RHS durch logische Umformung.</li>
              </ul>
              <p>Tipp: Erst Gegenbeispiele suchen, dann beweisen was übrig bleibt.</p>
            </>,
            <>
              <ol>
                <li>Suche zunächst ein Gegenbeispiel: Wähle einfache Mengen (z.B. A=B=C={'{1}'} oder A=B=C={'{1,2,3}'}) und prüfe, ob LHS = RHS</li>
                <li>Wenn LHS ≠ RHS: Die Gleichheit ist nicht allgemeingültig — fertig (kein Beweis nötig)</li>
                <li>Wenn kein Gegenbeispiel gefunden: Führe einen Beweis per Elementmethode</li>
                <li>Elementmethode: Zeige x ∈ LHS ⟺ x ∈ RHS — d.h. beide Richtungen (⇒ und ⟸) separat beweisen</li>
                <li>Nutze logische Umformungen: A\B = {'{x: x∈A und x∉B}'}, De Morgan, Distributivgesetze</li>
              </ol>
            </>,
            <>
              <p>Elementmethode für (ii) ausführlich:</p>
              <pre className="hint-code-block">{`x ∈ A\B
⟺ (x ∈ A) und (x ∉ B)
⟺ (x ∈ A) und (x ∈ B̄)  [Def. Komplement]
⟺ x ∈ A ∩ B̄  ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Ein Beispiel prüfen und daraus Allgemeingültigkeit schließen → <strong>✅ Richtig:</strong> Zum Beweisen: Elementmethode (x ∈ LHS ⟺ x ∈ RHS); zum Widerlegen: ein Gegenbeispiel</li>
              <li><strong>❌ Falsch:</strong> Bei (i) die erste Richtung korrekt prüfen und dann annehmen beide Richtungen stimmen → <strong>✅ Richtig:</strong> A\(B\C) = {'{1,2,3}'} ≠ ∅ = (A\B)\C → widerlegt</li>
              <li><strong>❌ Falsch:</strong> Elementmethode nur in eine Richtung zeigen → <strong>✅ Richtig:</strong> Für ⟺ beide Richtungen (⇒ und ⟸) beweisen</li>
            </ul>,
            <p>Für jede als gültig eingestufte Gleichheit: Gilt die Elementkette x ∈ LHS ⟺ x ∈ RHS in beide Richtungen?</p>,
          ),
          solution: '(i) NICHT immer erfüllt.\n    Gegenbeispiel A = B = C = {1,2,3}:\n      A \\ (B \\ C) = A \\ ∅ = A = {1,2,3}\n      (A \\ B) \\ C = ∅ \\ C = ∅\n      → A ≠ ∅\n\n(ii) Immer erfüllt.\n    A \\ B = {x : x ∈ A und x ∉ B} = A ∩ B̅  ✓\n\n(iii) Immer erfüllt.\n    A \\ (B ∩ C) = {x ∈ A : x ∉ B∩C}\n             = {x ∈ A : x ∉ B oder x ∉ C}\n             = (A \\ B) ∪ (A \\ C)  ✓\n\n(iv) Immer erfüllt.\n    A ∪ (A̅ ∩ B) = (A ∪ A̅) ∩ (A ∪ B)\n                = X ∩ (A ∪ B) = A ∪ B  ✓',
        },
      ],
    },
  ],
}
