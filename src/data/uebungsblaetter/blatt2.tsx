import type { MatheBlatt } from '../../types'
import { h } from './shared'

export const blatt2: MatheBlatt = {
  id: 'blatt2',
  nr: '2',
  titel: 'Logik',
  aufgaben: [
    {
      id: 'b2a1',
      nr: 1,
      title: 'Wahrheitstafel',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien A und B mathematische Aussagen. Füllen Sie nachstehende Wahrheitstafel aus.\nBeachten Sie: „¬" bindet stärker als „∨",\nd.h. „¬A ∧ ¬B" = „(¬A) ∧ (¬B)" und „¬A ∨ ¬B" = „(¬A) ∨ (¬B)".\n\n A | B | ¬(A∧B) | ¬(A∨B) | ¬A∧¬B | ¬A∨¬B\n w | w |        |        |       |\n w | f |        |        |       |\n f | w |        |        |       |\n f | f |        |        |       |',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Wahrheitstafel</span> zeigt für jede Kombination der Wahrheitswerte von A und B den Wert des zusammengesetzten Ausdrucks.</p>
              <ul>
                <li>¬X: wahr genau dann, wenn X falsch</li>
                <li>X ∧ Y: wahr genau dann, wenn beide wahr</li>
                <li>X ∨ Y: wahr wenn mindestens eines wahr</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Werte jeden Ausdruck von innen nach außen aus: zuerst Klammern, dann ¬, dann ∧/∨</li>
                <li>Bearbeite jede der vier Zeilen (w/w, w/f, f/w, f/f) für jede Spalte separat</li>
                <li>¬ zuerst berechnen (bindet stärker): ¬A und ¬B bestimmen, bevor ∧ oder ∨ ausgewertet wird</li>
                <li>Vergleiche am Ende die Spalten paarweise auf Übereinstimmung</li>
              </ol>
            </>,
            <>
              <p>Grundtabellen:</p>
              <pre className="hint-code-block">{`∧: w∧w=w  w∧f=f  f∧w=f  f∧f=f
∨: w∨w=w  w∨f=w  f∨w=w  f∨f=f
¬: ¬w=f   ¬f=w`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ¬A∧¬B = ¬(A∧B) annehmen (Klammern ignoriert) → <strong>✅ Richtig:</strong> De Morgan besagt ¬(A∧B) = ¬A∨¬B (mit ∨!); ¬A∧¬B ist etwas anderes</li>
              <li><strong>❌ Falsch:</strong> ¬A∧¬B als ¬(A∧¬B) oder ¬(¬A∧B) lesen → <strong>✅ Richtig:</strong> ¬ bindet stärker als ∧ und ∨: ¬A∧¬B = (¬A)∧(¬B)</li>
              <li><strong>❌ Falsch:</strong> w∧f = w → <strong>✅ Richtig:</strong> w∧f = f (∧ ist nur wahr wenn BEIDE wahr)</li>
            </ul>,
          ),
          solution: ' A | B | ¬(A∧B) | ¬(A∨B) | ¬A∧¬B | ¬A∨¬B\n w | w |   f    |   f    |   f   |   f\n w | f |   w    |   f    |   f   |   w\n f | w |   w    |   f    |   f   |   w\n f | f |   w    |   w    |   w   |   w\n\nSpalten 1 und 4 stimmen überein → ¬(A∧B) ≡ ¬A∨¬B\nSpalten 2 und 3 stimmen überein → ¬(A∨B) ≡ ¬A∧¬B\n(De Morgansche Gesetze)',
        },
      ],
    },
    {
      id: 'b2a2',
      nr: 2,
      title: 'Aussagen formulieren (⇒, ⟸, ⟺)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEs gilt genau dann z² ≥ 0, wenn z ≥ 0 ist.',
          hint: h(
            <>
              <p><span className="hint-em">⟺ (genau dann … wenn)</span>: A ⟺ B ist wahr, wenn A und B stets denselben Wahrheitswert haben.</p>
              <p>A ⟺ B bedeutet: (A ⇒ B) und (B ⇒ A). Um sie zu widerlegen, genügt es, eine Richtung zu widerlegen.</p>
            </>,
            <>
              <ol>
                <li>Übersetze die verbale Aussage in Symbole: „genau dann ... wenn" = ⟺</li>
                <li>Zerlege die ⟺-Aussage in zwei Richtungen: A ⇒ B und B ⇒ A</li>
                <li>Prüfe jede Richtung: Gibt es ein z, das die Prämisse erfüllt, aber die Konklusion verletzt?</li>
                <li>Wenn ein Gegenbeispiel gefunden: Diese Richtung ist falsch — die ⟺-Aussage ebenfalls</li>
                <li>Wenn kein Gegenbeispiel denkbar: Führe einen formalen Beweis für diese Richtung</li>
              </ol>
            </>,
            <>
              <p>Hinweis: z² ≥ 0 gilt für alle z ∈ ℝ, da Quadrate nie negativ sind. Die Rückrichtung z ≥ 0 ⇒ z² ≥ 0 wäre wahr, die Hinrichtung nicht.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> z ≥ 0 ⇒ z² ≥ 0 ist wahr → also gilt auch ⟺ → <strong>✅ Richtig:</strong> ⟺ erfordert BEIDE Richtungen; die Hinrichtung z² ≥ 0 ⇒ z ≥ 0 scheitert bei z=−1</li>
              <li><strong>❌ Falsch:</strong> Ohne Gegenbeispiel annehmen, die Aussage sei wahr → <strong>✅ Richtig:</strong> z=−1: (−1)²=1≥0, aber −1 &lt; 0 → Hinrichtung falsch → ⟺ falsch</li>
            </ul>,
          ),
          solution: 'In Symbolen: z² ≥ 0 ⟺ z ≥ 0\n→ falsch\n\nGegenbeispiel: z = −1\n  z² = 1 ≥ 0, aber z = −1 < 0\n→ Die Hinrichtung z² ≥ 0 ⇒ z ≥ 0 ist falsch.',
        },
        {
          letter: 'b',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEine hinreichende Bedingung dafür, dass z durch 2 ohne Rest teilbar ist,\nist die Teilbarkeit von z durch 4 ohne Rest.',
          hint: h(
            <>
              <p><span className="hint-em">Hinreichende Bedingung:</span> „A ist hinreichend für B" bedeutet A ⇒ B.</p>
              <p>A reicht aus, um B zu garantieren. B kann aber auch ohne A gelten.</p>
            </>,
            <>
              <ol>
                <li>Übersetze: „A ist hinreichend für B" bedeutet A ⇒ B</li>
                <li>Identifiziere in der Aufgabe, was A und was B ist</li>
                <li>Für den Beweis: Nimm A an (z.B. in der Form z = ... ausdrücken) und leite daraus B her</li>
                <li>Für eine Widerlegung: Suche ein konkretes z, das A erfüllt aber B nicht</li>
              </ol>
            </>,
            <>
              <p>Merkhilfe:</p>
              <pre className="hint-code-block">{`A ist HINREICHEND für B: A ⇒ B
A ist NOTWENDIG für B:   B ⇒ A
Symbol „⟸": zeigt Richtung von rechts nach links`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „hinreichend" = „notwendig" → <strong>✅ Richtig:</strong> Hinreichend: A⇒B (A genügt); Notwendig: B⇒A (ohne A geht B nicht)</li>
              <li><strong>❌ Falsch:</strong> Pfeil falsch: 2|z ⇒ 4|z schreiben (umgekehrt) → <strong>✅ Richtig:</strong> „4|z ist hinreichend für 2|z" = 4|z ⇒ 2|z (der hinreichende Begriff steht links)</li>
            </ul>,
          ),
          solution: 'In Symbolen: z durch 2 teilbar ⟸ z durch 4 teilbar (wahr)\n\nBeweis: Wenn 4 | z, dann z = 4k für k ∈ ℤ.\n  z = 2·(2k) → 2 | z ✓',
        },
        {
          letter: 'c',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr?\nSchreiben Sie die Aussagen mit „⇒", „⟸" oder „⟺".\n\nEine notwendige Bedingung dafür, dass z durch 2 ohne Rest teilbar ist,\nist die Teilbarkeit von z durch 4 ohne Rest.',
          hint: h(
            <>
              <p><span className="hint-em">Notwendige Bedingung:</span> „A ist notwendig für B" bedeutet B ⇒ A.</p>
              <p>Ohne A kann B nicht gelten — A ist eine unverzichtbare Voraussetzung. Das bedeutet aber nicht, dass A allein schon B garantiert.</p>
            </>,
            <>
              <ol>
                <li>Übersetze: „A ist notwendig für B" bedeutet B ⇒ A</li>
                <li>Identifiziere A und B in der Aufgabe und schreibe den Pfeil korrekt auf</li>
                <li>Suche ein Gegenbeispiel: Eine Zahl, die die Prämisse erfüllt, aber die Konklusion verletzt</li>
                <li>Wenn ein Gegenbeispiel gefunden: Die Aussage ist falsch — kein weiterer Beweis nötig</li>
              </ol>
            </>,
            <>
              <p>Weitere Gegenbeispiele: z = 6, z = 10, z = 14, ...</p>
              <pre className="hint-code-block">{`Alle Zahlen ≡ 2 (mod 4) sind durch 2,
aber nicht durch 4 teilbar.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „notwendig" mit „hinreichend" verwechseln und 4|z ⇒ 2|z schreiben → <strong>✅ Richtig:</strong> „4|z notwendig für 2|z" bedeutet: wenn 2|z, dann muss auch 4|z gelten = 2|z ⇒ 4|z</li>
              <li><strong>❌ Falsch:</strong> Ohne Gegenbeispiel behaupten die Aussage sei wahr → <strong>✅ Richtig:</strong> z=2: 2|2 ✓ aber 4∤2 ✗ — Gegenbeispiel widerlegt die Behauptung</li>
            </ul>,
          ),
          solution: 'In Symbolen: z durch 2 teilbar ⇒ z durch 4 teilbar (falsch)\n\nGegenbeispiel: z = 2\n  2 | 2 ✓, aber 4 ∤ 2 ✗\n→ Teilbarkeit durch 2 impliziert nicht Teilbarkeit durch 4.',
        },
      ],
    },
    {
      id: 'b2a3',
      nr: 3,
      title: 'Äquivalente Aussagen zu einer Implikation',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Welche der folgenden Aussagen sind äquivalent zur Aussage:\n„Wenn das Wetter schön ist, dann kommt Maxi Musterfrau mit dem Fahrrad an die Hochschule."\n(Sei P: „Wetter schön", Q: „Maxi mit Fahrrad" → Original: P ⇒ Q)\n\n(a) Wenn das Wetter nicht schön ist, dann kommt Maxi nicht mit dem Fahrrad.',
          hint: h(
            <>
              <p>Aussage (a): ¬P ⇒ ¬Q — das ist die <span className="hint-em">Inverse</span> (Umkehrung der Kontraposition).</p>
              <p>Die Inverse ist im Allgemeinen NICHT äquivalent zur ursprünglichen Implikation.</p>
            </>,
            <>
              <ol>
                <li>Klassifiziere den Ausdruck: Ist es die Umkehrung (Q⇒P), die Inverse (¬P⇒¬Q) oder die Kontraposition (¬Q⇒¬P)?</li>
                <li>Erstelle eine Wahrheitstafel mit 4 Zeilen (w/w, w/f, f/w, f/f)</li>
                <li>Fülle P⇒Q und den neuen Ausdruck aus</li>
                <li>Prüfe: Stimmen alle vier Zeilen überein? → äquivalent; mindestens eine unterscheidet sich → nicht äquivalent</li>
              </ol>
            </>,
            <>
              <p>Verwandtschaftsbeziehungen:</p>
              <pre className="hint-code-block">{`Original:       P ⇒ Q    (wahr ≡ ¬P∨Q)
Kontraposition: ¬Q ⇒ ¬P  (äquivalent ✓)
Umkehrung:      Q ⇒ P    (nicht äquivalent ✗)
Inverse:        ¬P ⇒ ¬Q  (nicht äquivalent ✗)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Inverse ¬P⇒¬Q = Kontraposition ¬Q⇒¬P → <strong>✅ Richtig:</strong> Inverse: Prämisse und Konklusion negiert (nicht vertauscht); Kontraposition: zusätzlich die Richtung umgekehrt</li>
              <li><strong>❌ Falsch:</strong> Alle 4 Varianten (Original, Umkehrung, Inverse, Kontraposition) als äquivalent annehmen → <strong>✅ Richtig:</strong> Nur Original und Kontraposition sind äquivalent; Umkehrung und Inverse sind unabhängig</li>
            </ul>,
          ),
          solution: '(a) In Symbolen: ¬P ⇒ ¬Q\n    → NICHT äquivalent zu P ⇒ Q (das ist die Inverse).',
        },
        {
          letter: 'b',
          text: '(b) Wenn das Wetter nicht schön ist, dann kommt Maxi mit dem Fahrrad an die Hochschule.',
          hint: h(
            <>
              <p>Aussage (b): ¬P ⇒ Q — weder Kontraposition noch Umkehrung von P ⇒ Q.</p>
              <p>Diese Aussage behauptet etwas über den Fall ¬P, über den das Original P ⇒ Q gar nichts aussagt.</p>
            </>,
            <>
              <ol>
                <li>Übersetze die Aussage (b) in Symbolform</li>
                <li>Vergleiche die Symbolform mit P⇒Q: Ist es eine der vier Standardvarianten (Umkehrung, Inverse, Kontraposition, Original)?</li>
                <li>Erstelle eine Wahrheitstafel oder suche ein Gegenbeispiel (eine Zeile, in der P⇒Q ≠ Ausdruck(b))</li>
              </ol>
            </>,
            <>
              <p>P ⇒ Q sagt nichts darüber aus, was bei schlechtem Wetter (P=f) geschieht. Q kann dann wahr oder falsch sein.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Da die Aussage P betrifft und (b) auch P enthält, muss sie äquivalent sein → <strong>✅ Richtig:</strong> Die Formel ist ¬P⇒Q (anderer Inhalt als P⇒Q), Gegenbeispiel P=f, Q=f zeigt die Verschiedenheit</li>
            </ul>,
          ),
          solution: '(b) In Symbolen: ¬P ⇒ Q\n    → NICHT äquivalent zu P ⇒ Q.',
        },
        {
          letter: 'c',
          text: '(c) Das Wetter ist nicht schön oder Maxi ist mit dem Fahrrad an der Hochschule.',
          hint: h(
            <>
              <p><span className="hint-em">Schlüsseltatsache:</span> P ⇒ Q ≡ ¬P ∨ Q</p>
              <p>Eine Implikation ist äquivalent zur Disjunktion aus negierter Prämisse und Konklusion.</p>
            </>,
            <>
              <ol>
                <li>Übersetze die Aussage (c) in Symbolform</li>
                <li>Erkenne, ob die Form ¬P∨Q auftaucht — das ist die bekannte logische Umschreibung einer Implikation</li>
                <li>Vergleiche mit P⇒Q per Wahrheitstafel oder wende die Äquivalenz P⇒Q ≡ ¬P∨Q direkt an</li>
              </ol>
            </>,
            <>
              <p>Aussage (c): ¬P ∨ Q entspricht genau der Umformung P ⇒ Q ≡ ¬P ∨ Q.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> P∨Q statt ¬P∨Q (Negation von P vergessen) → <strong>✅ Richtig:</strong> P⇒Q ≡ ¬P∨Q; wenn P falsch ist, ist die Implikation automatisch wahr (egal was Q ist)</li>
              <li><strong>❌ Falsch:</strong> P⇒Q ≡ P∧Q annehmen → <strong>✅ Richtig:</strong> P⇒Q ≡ ¬P∨Q (die Wahrheitstafel beider Ausdrücke ist identisch)</li>
            </ul>,
          ),
          solution: '(c) In Symbolen: ¬P ∨ Q\n    → ÄQUIVALENT zu P ⇒ Q, denn P ⇒ Q ≡ ¬P ∨ Q ✓',
        },
        {
          letter: 'd',
          text: '(d) Wenn Maxi ohne Fahrrad an der Hochschule ist, dann ist das Wetter nicht schön.',
          hint: h(
            <>
              <p>Aussage (d): ¬Q ⇒ ¬P — das ist die <span className="hint-em">Kontraposition</span> von P ⇒ Q.</p>
              <p>Die Kontraposition ist immer äquivalent zur ursprünglichen Implikation.</p>
            </>,
            <>
              <ol>
                <li>Übersetze die Aussage (d) in Symbolform und identifiziere Prämisse und Konklusion</li>
                <li>Erkenne das Muster: Sind beide Seiten negiert und der Pfeil umgekehrt im Vergleich zu P⇒Q?</li>
                <li>Prüfe entweder per Wahrheitstafel oder algebraisch über ¬Q⇒¬P ≡ ¬(¬Q)∨¬P = Q∨¬P = ¬P∨Q ≡ P⇒Q</li>
              </ol>
            </>,
            <>
              <p>Merksatz:</p>
              <pre className="hint-code-block">{`P ⇒ Q ≡ ¬Q ⇒ ¬P  (Kontraposition, äquivalent ✓)
P ⇒ Q ≇ Q ⇒ P    (Umkehrung, nicht äquivalent ✗)
P ⇒ Q ≇ ¬P ⇒ ¬Q  (Inverse, nicht äquivalent ✗)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Kontraposition ¬Q⇒¬P = Umkehrung Q⇒P → <strong>✅ Richtig:</strong> Kontraposition dreht Pfeil UND negiert; Umkehrung dreht nur den Pfeil ohne Negation</li>
              <li><strong>❌ Falsch:</strong> ¬P⇒¬Q als Kontraposition → <strong>✅ Richtig:</strong> Das ist die Inverse (nur negiert, nicht umgekehrt); Kontraposition ist ¬Q⇒¬P</li>
            </ul>,
          ),
          solution: '(d) In Symbolen: ¬Q ⇒ ¬P\n    → ÄQUIVALENT zu P ⇒ Q (das ist die Kontraposition) ✓\n\nDie Aussage ist nur zu (c) und (d) äquivalent.',
        },
      ],
    },
    {
      id: 'b2a4',
      nr: 4,
      title: 'Direkter Beweis: A(n) ⇒ B(n) ∀n',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Beweisen Sie durch direkten Beweis den Satz A(n) ⇒ B(n) ∀n für die Aussagen:\n  A(n): n ist ungerade\n  B(n): n² ist ungerade\n\nHinweis: Benutzen Sie dafür die Wahrheitstafel des Operators ⇒.',
          hint: h(
            <>
              <p>Beim <span className="hint-em">direkten Beweis</span> von A(n) ⇒ B(n) ∀n genügt es zu zeigen, dass der Fall A(n)=w, B(n)=f nicht vorkommen kann.</p>
              <p>Zeilen mit A(n)=f müssen nicht betrachtet werden, da A⇒B dort automatisch wahr ist.</p>
            </>,
            <>
              <ol>
                <li>Nimm A(n) = w an: Schreibe n in der allgemeinen Form ungerader Zahlen (n = 2k+1 für k ∈ ℕ)</li>
                <li>Berechne n² algebraisch durch Ausmultiplizieren</li>
                <li>Forme das Ergebnis um, bis du zeigen kannst, dass n² die Form 2m+1 hat</li>
                <li>Schließe: n² ist ungerade → B(n) = w; der Fall A=w, B=f tritt nicht auf</li>
              </ol>
            </>,
            <>
              <p>Allgemeines Muster:</p>
              <pre className="hint-code-block">{`n ungerade ⟺ ∃k ∈ ℕ: n = 2k+1
n gerade   ⟺ ∃k ∈ ℕ: n = 2k`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur konkrete Zahlen prüfen (z.B. 1²=1, 3²=9) statt allgemeinen Beweis → <strong>✅ Richtig:</strong> n = 2k+1 für beliebiges k ∈ ℕ verwenden, um alle ungeraden Zahlen abzudecken</li>
              <li><strong>❌ Falsch:</strong> n = 2k (gerade Zahl) für die Annahme verwenden → <strong>✅ Richtig:</strong> Die Voraussetzung ist „n ist ungerade" → n = 2k+1 (mit dem +1!)</li>
            </ul>,
          ),
          solution: 'Direkter Beweis:\n\nEs genügt zu zeigen, dass A(n) = w, B(n) = f nicht auftreten kann.\n\nAnnahme: A(n) = w, d.h. n ist ungerade.\nDann ∃k ∈ ℕ mit n = 2k+1.\n\nn² = (2k+1)² = 4k²+4k+1 = 2(2k²+2k)+1\n\nDie Form 2m+1 zeigt: n² ist ungerade, also B(n) = w.\nDer Fall A(n)=w, B(n)=f kann somit nicht auftreten.\n\nZeilen mit A(n)=f werden nicht betrachtet (A⇒B dort automatisch wahr). □',
        },
      ],
    },
    {
      id: 'b2a5',
      nr: 5,
      title: 'Widerspruchsbeweis',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Beweisen Sie den Satz A(n) ⇒ B(n) ∀n aus Aufgabe 4 durch Widerspruchsbeweis.\n  A(n): n ist ungerade\n  B(n): n² ist ungerade',
          hint: h(
            <>
              <p>Beim <span className="hint-em">Widerspruchsbeweis</span> nimmt man an, die Aussage sei falsch, und leitet einen Widerspruch ab.</p>
              <p>¬(A(n) ⇒ B(n)) = ¬(¬A(n) ∨ B(n)) = A(n) ∧ ¬B(n)</p>
              <p>Annahme: n ist ungerade UND n² ist gerade.</p>
            </>,
            <>
              <ol>
                <li>Negiere die Zielaussage: ¬(A(n)⇒B(n)) = A(n)∧¬B(n) — bilde diese Annahme (A=w und B=f gleichzeitig)</li>
                <li>Leite aus der Annahme eine mathematische Folgerung ab (wie im direkten Beweis)</li>
                <li>Zeige, dass diese Folgerung der Annahme ¬B(n) direkt widerspricht</li>
                <li>Schließe: Da die Annahme zum Widerspruch führt, muss A(n)⇒B(n) wahr sein. □</li>
              </ol>
            </>,
            <>
              <p>Umformung der Negation einer Implikation:</p>
              <pre className="hint-code-block">{`¬(A ⇒ B) = ¬(¬A ∨ B) = A ∧ ¬B
(De Morgan + Doppelnegation)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Zum Widerspruch nur A(n)=f annehmen → <strong>✅ Richtig:</strong> Widerspruchsbeweis für A⇒B nimmt ¬(A⇒B) = A∧¬B an; beide Teile müssen in die Annahme</li>
              <li><strong>❌ Falsch:</strong> ¬(A⇒B) = ¬A⇒¬B → <strong>✅ Richtig:</strong> ¬(A⇒B) = A∧¬B (mit De Morgan: ¬(¬A∨B) = A∧¬B)</li>
            </ul>,
          ),
          solution: 'Widerspruchsbeweis:\n\nWir nehmen an: ¬(A(n) ⇒ B(n)) = A(n) ∧ ¬B(n),\nd.h. n ist ungerade und n² ist gerade.\n\nAus A(n)=w folgt n = 2k+1 für k ∈ ℕ.\n\nn² = (2k+1)² = 4k²+4k+1 = 2(2k²+2k)+1\n→ n² ist ungerade — Widerspruch zu ¬B(n)!\n\nDie Annahme war falsch → A(n) ⇒ B(n) ∀n. □',
        },
      ],
    },
    {
      id: 'b2a6',
      nr: 6,
      title: 'Logische Ausdrücke vereinfachen',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Vereinfachen Sie den folgenden logischen Ausdruck:\n\n  A ∨ (¬A ∧ B)',
          hint: h(
            <>
              <p>Nützliche <span className="hint-em">Boolesche Gesetze</span>:</p>
              <ul>
                <li>Distributivgesetz: A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)</li>
                <li>Komplementgesetz: A ∨ ¬A = t (tautologie)</li>
                <li>Neutrales Element: t ∧ X = X</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Erkenne Muster: Siehst du eine Struktur der Form X ∨ (¬X ∧ Y)? Das ist der Einstieg.</li>
                <li>Wende das Distributivgesetz an: A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)</li>
                <li>Vereinfache mit dem Komplementgesetz: A ∨ ¬A = t</li>
                <li>Kürze mit dem neutralen Element: t ∧ X = X</li>
              </ol>
            </>,
            <>
              <p>Wahrheitstafelprobe:</p>
              <pre className="hint-code-block">{`A | B | A∨(¬A∧B) | A∨B
w | w |     w    |  w
w | f |     w    |  w
f | w |     w    |  w
f | f |     f    |  f  ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> A∨(¬A∧B) = (A∨¬A)∧B direkt (Distributivgesetz falsch) → <strong>✅ Richtig:</strong> Distributivgesetz: A∨(B∧C) = (A∨B)∧(A∨C); hier A∨(¬A∧B) = (A∨¬A)∧(A∨B)</li>
              <li><strong>❌ Falsch:</strong> A∨¬A = f → <strong>✅ Richtig:</strong> A∨¬A = t (Tautologie: immer wahr, unabhängig von A)</li>
            </ul>,
          ),
          solution: 'A ∨ (¬A ∧ B)\n= (A ∨ ¬A) ∧ (A ∨ B)   (Distributivgesetz)\n= t ∧ (A ∨ B)            (A ∨ ¬A = t)\n= A ∨ B                   (t ∧ X = X)',
        },
        {
          letter: 'b',
          text: 'Vereinfachen Sie den folgenden logischen Ausdruck\n(aus der digitalen Schaltungstechnik!):\n\n  ¬(A ∧ B) ∨ ¬(¬A ∨ B)',
          hint: h(
            <>
              <p><span className="hint-em">De Morgansche Gesetze</span> als Einstieg:</p>
              <ul>
                <li>¬(X ∧ Y) = ¬X ∨ ¬Y</li>
                <li>¬(X ∨ Y) = ¬X ∧ ¬Y</li>
              </ul>
              <p>Wende De Morgan auf beide Terme an, dann vereinfache mit Absorption.</p>
            </>,
            <>
              <ol>
                <li>Wende De Morgan auf beide Terme an: ¬(X∧Y) = ¬X∨¬Y und ¬(X∨Y) = ¬X∧¬Y</li>
                <li>Klammere Terme um (Assoziativität), um Kandidaten für das Absorptionsgesetz freizulegen</li>
                <li>Wende Absorption an: X ∨ (Y ∧ X) = X (mit passendem X und Y)</li>
                <li>Wende nochmals De Morgan an, um die Endform zu erhalten</li>
              </ol>
            </>,
            <>
              <p>Absorptionsgesetz:</p>
              <pre className="hint-code-block">{`X ∨ (Y ∧ X) = X
Hier: ¬B ∨ (A ∧ ¬B) = ¬B  (setze X=¬B, Y=A)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ¬(¬A∨B) = ¬A∧B (De Morgan falsch) → <strong>✅ Richtig:</strong> ¬(¬A∨B) = ¬(¬A)∧¬B = A∧¬B (beide Terme werden negiert)</li>
              <li><strong>❌ Falsch:</strong> Absorptionsgesetz nicht erkennen → <strong>✅ Richtig:</strong> X∨(Y∧X) = X; hier mit X=¬B, Y=A: ¬B∨(A∧¬B) = ¬B</li>
            </ul>,
          ),
          solution: '¬(A ∧ B) ∨ ¬(¬A ∨ B)\n= (¬A ∨ ¬B) ∨ (A ∧ ¬B)   (De Morgan)\n= ¬A ∨ (¬B ∨ (A ∧ ¬B))   (Assoziativität)\n= ¬A ∨ ¬B                  (Absorption: X ∨ (Y ∧ X) = X)\n= ¬(A ∧ B)                 (De Morgan)',
        },
      ],
    },
  ],
}
