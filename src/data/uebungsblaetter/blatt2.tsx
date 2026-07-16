import type { MatheBlatt } from '../../types'
import M from '../../utils/M'
import { h } from './shared'

export const blatt2: MatheBlatt = {
  id: 'blatt2',
  nr: '2',
  pdf: 'material/Ein wenig zum Trainieren Übungen/uebung2 - Logik/02a_aufg_logik.pdf',
  loesungen: [
    { label: 'Lösung (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung2 - Logik/02a_lsg_aufg_logik.pdf' },
    { label: 'Lösung – Mitschrift G3/G4 (PDF) öffnen', pfad: 'material/Ein wenig zum Trainieren Übungen/uebung2 - Logik/02_lsg_Handschrift_G3_G4.pdf' },
  ],
  titel: 'Logik',
  aufgaben: [
    {
      id: 'b2a1',
      nr: 1,
      title: 'Wahrheitstafel',
      referenz: ['logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Seien A und B mathematische Aussagen. Füllen Sie nachstehende Wahrheitstafel aus und überlegen Sie anschließend, welche Spalten übereinstimmen. Beachten Sie, dass „¬" stärker bindet als „∧" bzw. „∨", das heißt, „¬A ∧ ¬B" bedeutet „(¬A) ∧ (¬B)" und „¬A ∨ ¬B" bedeutet „(¬A) ∨ (¬B)".'}
              <table className="aufg-table">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>¬(A ∧ B)</th>
                    <th>¬(A ∨ B)</th>
                    <th>¬A ∧ ¬B</th>
                    <th>¬A ∨ ¬B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="aufg-box">w</td>
                    <td className="aufg-box">w</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                  </tr>
                  <tr>
                    <td className="aufg-box">w</td>
                    <td className="aufg-box">f</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                  </tr>
                  <tr>
                    <td className="aufg-box">f</td>
                    <td className="aufg-box">w</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                  </tr>
                  <tr>
                    <td className="aufg-box">f</td>
                    <td className="aufg-box">f</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                    <td className="aufg-box">☐</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
          hint: h(
            <>
              <p>Eine <span className="hint-em">Aussage</span> ist ein Satz, der entweder wahr (w) oder falsch (f) ist. Aus A und B baut man zusammengesetzte Aussagen mit drei <span className="hint-em">Junktoren</span>:</p>
              <ul>
                <li><span className="hint-em">¬X (Negation, „nicht X")</span>: w genau dann, wenn X falsch ist. Dreht den Wert um.</li>
                <li><span className="hint-em">X ∧ Y (Konjunktion, „X und Y")</span>: w nur, wenn BEIDE wahr sind.</li>
                <li><span className="hint-em">X ∨ Y (Disjunktion, „X oder Y")</span>: w, wenn MINDESTENS eines wahr ist (auch wenn beide wahr sind).</li>
              </ul>
              <p>Eine <span className="hint-em">Wahrheitstafel</span> listet für alle Kombinationen von A, B den Wert jedes Ausdrucks. Wichtig: <span className="hint-em">¬ bindet stärker</span> als ∧ und ∨, daher ist ¬A∧¬B = (¬A)∧(¬B) (erst negieren, dann verknüpfen).</p>
            </>,
            <>
              <p>So füllt man die Tafel Zeile für Zeile aus — jeden Ausdruck von innen (Klammern, ¬) nach außen (∧/∨):</p>
              <pre className="hint-code-block">{` A  B │ A∧B  ¬(A∧B) │ A∨B  ¬(A∨B) │ ¬A ¬B │ ¬A∧¬B │ ¬A∨¬B
 w  w │  w     f    │  w     f    │  f  f │   f   │   f
 w  f │  f     w    │  w     f    │  f  w │   f   │   w
 f  w │  f     w    │  w     f    │  w  f │   f   │   w
 f  f │  f     w    │  f     w    │  w  w │   w   │   w

Beispiel Zeile 2 (A=w, B=f):
  A∧B = w∧f = f → ¬(A∧B) = w
  A∨B = w∨f = w → ¬(A∨B) = f
  ¬A = f, ¬B = w → ¬A∧¬B = f∧w = f ; ¬A∨¬B = f∨w = w`}</pre>
              <p>Vergleich der Endspalten: ¬(A∧B) = (f,w,w,w) = ¬A∨¬B, und ¬(A∨B) = (f,f,f,w) = ¬A∧¬B. Das sind die <span className="hint-em">De Morganschen Gesetze</span>: ¬(A∧B) ≡ ¬A∨¬B und ¬(A∨B) ≡ ¬A∧¬B.</p>
            </>,
            <>
              <p>Die Grundtabellen der Junktoren (auswendig nützlich):</p>
              <pre className="hint-code-block">{`∧: w∧w=w  w∧f=f  f∧w=f  f∧f=f   (nur w wenn beide w)
∨: w∨w=w  w∨f=w  f∨w=w  f∨f=f   (nur f wenn beide f)
¬: ¬w=f   ¬f=w                  (kehrt um)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ¬A∧¬B = ¬(A∧B) annehmen → <strong>✅ Richtig:</strong> De Morgan: ¬(A∧B) = ¬A∨¬B (mit ∨!); ¬A∧¬B ist eine andere Spalte.</li>
              <li><strong>❌ Falsch:</strong> ¬A∧¬B als ¬(A∧¬B) lesen (Bindung ignoriert) → <strong>✅ Richtig:</strong> ¬ bindet am stärksten: ¬A∧¬B = (¬A)∧(¬B).</li>
              <li><strong>❌ Falsch:</strong> w∧f = w → <strong>✅ Richtig:</strong> w∧f = f; ∧ ist nur wahr, wenn beide Teile wahr sind.</li>
            </ul>,
            <p>Selbstkontrolle: kontrolliere Zeile f/f — alle vier Endspalten sollten w sein. Frage: Welche zwei Spaltenpaare stimmen überein, und welches Gesetz (Stichwort De Morgan) sagt das vorher?</p>,
          ),
          solution: (
            <>
              <M>{'\\begin{array}{cc|cccc} A & B & \\neg(A \\wedge B) & \\neg(A \\vee B) & \\neg A \\wedge \\neg B & \\neg A \\vee \\neg B \\\\ w & w & f & f & f & f \\\\ w & f & w & f & f & w \\\\ f & w & w & f & f & w \\\\ f & f & w & w & w & w \\end{array}'}</M>
              {'\n'}
              {'Es fällt auf, dass die erste und vierte sowie die zweite und dritte Spalte übereinstimmen. Es ist also '}<M>{'\\neg(A \\wedge B)'}</M>{' äquivalent zu '}<M>{'\\neg A \\vee \\neg B'}</M>{' und '}<M>{'\\neg(A \\vee B)'}</M>{' zu '}<M>{'\\neg A \\wedge \\neg B'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b2a2',
      nr: 2,
      title: 'Aussagen formulieren (⇒, ⟸, ⟺)',
      referenz: ['logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr? Schreiben Sie die Aussagen zunächst mit Hilfe von „⇒", „⇐" oder „⇔".\n\nEs gilt genau dann z² ≥ 0, wenn z ≥ 0 ist.',
          hint: h(
            <>
              <p>Drei Pfeile verbinden zwei Aussagen A und B:</p>
              <ul>
                <li><span className="hint-em">A ⇒ B („wenn A, dann B")</span>: aus A folgt B (nur die Hinrichtung).</li>
                <li><span className="hint-em">A ⟸ B</span>: aus B folgt A (nur die Rückrichtung, = B ⇒ A).</li>
                <li><span className="hint-em">A ⟺ B („genau dann, wenn")</span>: beide Richtungen zugleich, also (A ⇒ B) UND (B ⇒ A). A und B haben stets denselben Wahrheitswert.</li>
              </ul>
              <p>Zum <span className="hint-em">Widerlegen</span> einer ⟺-Aussage genügt es, EINE der beiden Richtungen durch ein Gegenbeispiel zu kippen — dann ist die Äquivalenz schon falsch.</p>
            </>,
            <>
              <p>So prüft man „z² ≥ 0 ⟺ z ≥ 0" (z ∈ ℤ) Schritt für Schritt:</p>
              <pre className="hint-code-block">{`1) In Symbole: Behauptung ist  z² ≥ 0  ⟺  z ≥ 0.
   ⟺ = beide Richtungen müssen gelten.

2) Rückrichtung  z ≥ 0 ⇒ z² ≥ 0:
   Ein Quadrat ist nie negativ → wahr.
   (Diese Richtung allein reicht NICHT für ⟺.)

3) Hinrichtung  z² ≥ 0 ⇒ z ≥ 0:
   Gegenbeispiel suchen: ein z mit z² ≥ 0, aber z < 0.
   z = −1:  z² = (−1)² = 1 ≥ 0  (Prämisse erfüllt)
            aber z = −1 < 0      (Konklusion verletzt)
   → Hinrichtung ist FALSCH.

4) Da eine Richtung scheitert, ist die ⟺-Aussage FALSCH.`}</pre>
              <p>Hintergrund: z² ≥ 0 gilt für ALLE z (auch negative), z ≥ 0 nur für die nicht-negativen. Die beiden Bedingungen sind also nicht gleichwertig.</p>
            </>,
            <>
              <p>Anderes Beispiel einer falschen Äquivalenz: „z² = 4 ⟺ z = 2"</p>
              <pre className="hint-code-block">{`Rückrichtung z=2 ⇒ z²=4: wahr.
Hinrichtung z²=4 ⇒ z=2: Gegenbeispiel z=−2:
   (−2)² = 4 ✓, aber z = −2 ≠ 2 → falsch.
→ ⟺ falsch (richtig wäre: z² = 4 ⟺ z = 2 oder z = −2).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> aus „z ≥ 0 ⇒ z² ≥ 0 ist wahr" auf ⟺ schließen → <strong>✅ Richtig:</strong> ⟺ braucht BEIDE Richtungen; die Hinrichtung z² ≥ 0 ⇒ z ≥ 0 scheitert bei z = −1.</li>
              <li><strong>❌ Falsch:</strong> ohne Gegenbeispiel behaupten, die Aussage sei wahr → <strong>✅ Richtig:</strong> z = −1 zeigt: (−1)² = 1 ≥ 0, aber −1 &lt; 0 → ⟺ falsch.</li>
            </ul>,
            <p>Selbstkontrolle: ein gültiges Gegenbeispiel erfüllt die Prämisse, verletzt aber die Konklusion (prüfe beides an deinem z). Frage: Warum reicht eine einzige Gegenzahl zum Widerlegen, während ein Beweis ALLE z abdecken müsste?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: '}<M>{'z^{2} \\ge 0 \\Leftrightarrow z \\ge 0'}</M>{' (falsch)'}
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr? Schreiben Sie die Aussagen zunächst mit Hilfe von „⇒", „⇐" oder „⇔".\n\nEine hinreichende Bedingung dafür, dass z durch 2 ohne Rest teilbar ist, ist die Teilbarkeit von z durch 4 ohne Rest.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">hinreichende Bedingung</span>: „A ist hinreichend für B" bedeutet <span className="hint-em">A ⇒ B</span> — A allein <em>genügt</em>, um B zu garantieren. B kann aber durchaus auch ohne A eintreten.</p>
              <p>Die <span className="hint-em">Teilbarkeitsschreibweise</span> „k | z" („k teilt z") heißt: z ist ohne Rest durch k teilbar, d.h. es gibt eine ganze Zahl m mit z = k·m. Beispiel: 4 | 12, weil 12 = 4·3.</p>
              <p>Übersetzungsregel: das, was hinreichend ist, steht <em>links</em> vom Pfeil ⇒. Hier ist „4 | z" hinreichend für „2 | z", also lautet die Aussage 4 | z ⇒ 2 | z.</p>
            </>,
            <>
              <p>So formuliert und beweist man die Aussage:</p>
              <pre className="hint-code-block">{`1) In Symbole: "4|z ist hinreichend für 2|z" = 4|z ⇒ 2|z.
   (das Hinreichende 4|z steht links)

2) Direkter Beweis — A annehmen, B herleiten:
   Annahme 4 | z bedeutet: z = 4k für ein k ∈ ℤ.

3) Umformen, sodass der Faktor 2 sichtbar wird:
   z = 4k = 2·(2k)
   Setze m = 2k (ist eine ganze Zahl).
   → z = 2·m, also 2 | z.

4) Aus 4|z folgt 2|z → die Aussage ist WAHR.`}</pre>
              <p>Anschaulich: jede durch 4 teilbare Zahl ist erst recht durch 2 teilbar (4 enthält den Faktor 2). Umgekehrt gilt das nicht — siehe Teilaufgabe (c).</p>
            </>,
            <>
              <p>Merkschema und ein zweites Beispiel:</p>
              <pre className="hint-code-block">{`A HINREICHEND für B:  A ⇒ B   (A genügt)
A NOTWENDIG  für B:  B ⇒ A   (ohne A kein B)

Beispiel: "durch 6 teilbar" hinreichend für "durch 3 teilbar"?
   6|z ⇒ 3|z :  z = 6k = 3·(2k) → 3|z  ✓ wahr`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „hinreichend" mit „notwendig" gleichsetzen → <strong>✅ Richtig:</strong> hinreichend: A ⇒ B (A genügt); notwendig: B ⇒ A (ohne A kein B) — verschiedene Pfeilrichtungen.</li>
              <li><strong>❌ Falsch:</strong> 2 | z ⇒ 4 | z schreiben (Pfeil verdreht) → <strong>✅ Richtig:</strong> das Hinreichende (4 | z) steht links: 4 | z ⇒ 2 | z.</li>
            </ul>,
            <p>Selbstkontrolle: prüfe die Herleitung an einer Zahl, z.B. z = 12 = 4·3 = 2·6 → durch 4 und durch 2 teilbar. Frage: Worin unterscheiden sich „A hinreichend für B" und „B hinreichend für A" in der Pfeilrichtung — und welcher Pfeil fehlt, wenn A nur hinreichend, aber nicht notwendig ist?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: z durch 2 ohne Rest teilbar '}<M>{'\\Leftarrow'}</M>{' z durch 4 ohne Rest teilbar (wahr)'}
            </>
          ),
        },
        {
          letter: 'c',
          text: 'Sei z ∈ ℤ. Welche der folgenden Aussagen ist/sind wahr? Schreiben Sie die Aussagen zunächst mit Hilfe von „⇒", „⇐" oder „⇔".\n\nEine notwendige Bedingung dafür, dass z durch 2 ohne Rest teilbar ist, ist die Teilbarkeit von z durch 4 ohne Rest.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">notwendige Bedingung</span>: „A ist notwendig für B" bedeutet <span className="hint-em">B ⇒ A</span> — ohne A kann B nicht gelten, A ist eine unverzichtbare Voraussetzung. Das heißt aber NICHT, dass A allein schon B garantiert.</p>
              <p>Die Pfeilrichtung ist gerade umgekehrt zur hinreichenden Bedingung (Teilaufgabe b): dort A ⇒ B, hier B ⇒ A. Erinnerung: „k | z" heißt z = k·m für ein ganzes m; „4 ∤ z" heißt 4 teilt z NICHT.</p>
            </>,
            <>
              <p>So formuliert und prüft man die Aussage:</p>
              <pre className="hint-code-block">{`1) In Symbole: "4|z ist notwendig für 2|z".
   Notwendig → B ⇒ A mit B = "2|z", A = "4|z":
   also 2 | z ⇒ 4 | z.
   (in Worten: jede durch 2 teilbare Zahl müsste
    auch durch 4 teilbar sein)

2) Klingt zweifelhaft → Gegenbeispiel suchen:
   eine Zahl, die durch 2, aber NICHT durch 4 teilbar ist.
   z = 2:  2 | 2  ✓ (2 = 2·1)
           4 | 2 ? Nein, 2/4 ist keine ganze Zahl → 4 ∤ 2 ✗

3) Prämisse 2|z erfüllt, Konklusion 4|z verletzt
   → die Implikation 2|z ⇒ 4|z ist FALSCH.`}</pre>
              <p>Also ist 4 | z NICHT notwendig für 2 | z: es gibt durch 2 teilbare Zahlen (2, 6, 10, …), die nicht durch 4 teilbar sind.</p>
            </>,
            <>
              <p>Weitere Gegenbeispiele (alle lassen bei Division durch 4 den Rest 2):</p>
              <pre className="hint-code-block">{`z = 6:  6 = 2·3 → 2|6 ✓,  6/4 = 1,5 → 4∤6 ✗
z = 10: 10 = 2·5 → 2|10 ✓, 10/4 = 2,5 → 4∤10 ✗
Muster: Zahlen 2, 6, 10, 14, … (Rest 2 bei :4)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „notwendig" mit „hinreichend" verwechseln und 4 | z ⇒ 2 | z schreiben → <strong>✅ Richtig:</strong> „4 | z notwendig für 2 | z" heißt 2 | z ⇒ 4 | z (das Notwendige steht rechts).</li>
              <li><strong>❌ Falsch:</strong> ohne Gegenbeispiel behaupten, die Aussage sei wahr → <strong>✅ Richtig:</strong> z = 2 widerlegt sie: 2 | 2 ✓, aber 4 ∤ 2 ✗.</li>
            </ul>,
            <p>Selbstkontrolle: ein Gegenbeispiel muss durch 2, aber nicht durch 4 teilbar sein — prüfe z/2 (ganz) und z/4 (nicht ganz). Frage: Warum ist „notwendig" schwächer als „hinreichend", und was wäre an „4 | 2" absurd, wenn 4 | z für 2 | z notwendig wäre?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: z durch 2 ohne Rest teilbar '}<M>{'\\Rightarrow'}</M>{' z durch 4 ohne Rest teilbar (falsch)'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b2a3',
      nr: 3,
      title: 'Äquivalente Aussagen zu einer Implikation',
      referenz: ['logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Welche der nachfolgenden Aussagen sind äquivalent zu der Aussage: „Wenn das Wetter schön ist, dann kommt Maxi Musterfrau mit dem Fahrrad an die Hochschule."\n(Hinweis: Schreiben Sie die Aussagen zunächst mit Hilfe von „⇒", „⇐" oder „⇔".)\n\n(a) Wenn das Wetter nicht schön ist, dann kommt Maxi Musterfrau nicht mit dem Fahrrad an die Hochschule.',
          hint: h(
            <>
              <p>Aus einer <span className="hint-em">Implikation</span> P ⇒ Q lassen sich drei verwandte Aussagen bilden — man muss sie unterscheiden können:</p>
              <ul>
                <li><span className="hint-em">Umkehrung</span> Q ⇒ P (Pfeil gedreht).</li>
                <li><span className="hint-em">Inverse</span> ¬P ⇒ ¬Q (beide Teile negiert, Pfeil gleich).</li>
                <li><span className="hint-em">Kontraposition</span> ¬Q ⇒ ¬P (beide negiert UND Pfeil gedreht).</li>
              </ul>
              <p>Grundregel: Nur die <strong>Kontraposition</strong> ist zur Originalimplikation äquivalent. <span className="hint-em">Umkehrung und Inverse sind es NICHT</span>. Aussage (a) „Wenn das Wetter nicht schön ist, kommt Maxi nicht mit dem Fahrrad" = ¬P ⇒ ¬Q ist die Inverse.</p>
            </>,
            <>
              <p>So zeigt man, dass die Inverse ¬P ⇒ ¬Q nicht äquivalent zu P ⇒ Q ist (Wahrheitstafel; eine abweichende Zeile genügt):</p>
              <pre className="hint-code-block">{` P  Q │ P⇒Q │ ¬P ¬Q │ ¬P⇒¬Q
 w  w │  w  │  f  f │   w
 w  f │  f  │  f  w │   w     ← hier verschieden!
 f  w │  w  │  w  f │   f     ← hier verschieden!
 f  f │  w  │  w  w │   w

Spalte P⇒Q = (w,f,w,w),  Spalte ¬P⇒¬Q = (w,w,f,w)
Sie stimmen NICHT überall überein → nicht äquivalent.`}</pre>
              <p>Anschaulich (Zeile 3, P=f, Q=w): Das Wetter ist schlecht, Maxi kommt trotzdem mit dem Rad. Das Original P ⇒ Q bleibt wahr (es sagt nichts über schlechtes Wetter), die Inverse ¬P ⇒ ¬Q wird aber falsch.</p>
            </>,
            <>
              <p>Übersicht der vier Varianten:</p>
              <pre className="hint-code-block">{`Original:       P ⇒ Q     (≡ ¬P ∨ Q)
Kontraposition: ¬Q ⇒ ¬P   → äquivalent zum Original ✓
Umkehrung:      Q ⇒ P      → NICHT äquivalent ✗
Inverse:        ¬P ⇒ ¬Q    → NICHT äquivalent ✗
(Umkehrung und Inverse sind ihrerseits zueinander
 äquivalent — beide sind Kontraposition voneinander.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Inverse ¬P ⇒ ¬Q mit Kontraposition ¬Q ⇒ ¬P gleichsetzen → <strong>✅ Richtig:</strong> Inverse negiert nur; Kontraposition negiert UND dreht den Pfeil.</li>
              <li><strong>❌ Falsch:</strong> alle vier Varianten für äquivalent halten → <strong>✅ Richtig:</strong> nur Original und Kontraposition sind äquivalent; Umkehrung und Inverse sind davon unabhängig.</li>
            </ul>,
            <p>Selbstkontrolle: vergleiche die Spalten P⇒Q und ¬P⇒¬Q Zeile für Zeile — schon eine Abweichung widerlegt die Äquivalenz. Frage: Welche zwei der vier Varianten sind äquivalent, und was haben sie strukturell gemeinsam (Negation + Pfeilrichtung)?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: '}<M>{'\\neg P \\Rightarrow \\neg Q'}</M>{' — nicht äquivalent zu '}<M>{'P \\Rightarrow Q'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: '(b) Wenn das Wetter nicht schön ist, dann kommt Maxi Musterfrau mit dem Fahrrad an die Hochschule.',
          hint: h(
            <>
              <p>Aussage (b) „Wenn das Wetter nicht schön ist, dann kommt Maxi mit dem Fahrrad" = <span className="hint-em">¬P ⇒ Q</span>. Das ist keine der drei Standardvarianten (Umkehrung Q⇒P, Inverse ¬P⇒¬Q, Kontraposition ¬Q⇒¬P) — nur die Prämisse ist negiert, Q nicht.</p>
              <p>Schlüsselidee: P ⇒ Q trifft nur eine Aussage für den Fall P = w (schönes Wetter). Über den Fall P = f (schlechtes Wetter) sagt P ⇒ Q <em>gar nichts</em>. Aussage (b) behauptet aber genau für diesen Fall etwas — daher können sie nicht äquivalent sein.</p>
            </>,
            <>
              <p>So widerlegt man die Äquivalenz mit einer Wahrheitstafel (eine abweichende Zeile reicht):</p>
              <pre className="hint-code-block">{` P  Q │ P⇒Q │ ¬P │ ¬P⇒Q
 w  w │  w  │  f │   w
 w  f │  f  │  f │   w     ← verschieden!
 f  w │  w  │  w │   w
 f  f │  w  │  w │   f     ← verschieden!

Spalte P⇒Q = (w,f,w,w),  Spalte ¬P⇒Q = (w,w,w,f)
Nicht überall gleich → NICHT äquivalent.`}</pre>
              <p>Schnelles Gegenbeispiel (Zeile 4, P = f, Q = f): schlechtes Wetter, Maxi kommt nicht mit dem Rad. Das Original P ⇒ Q ist wahr (Prämisse P falsch → Implikation automatisch wahr), aber ¬P ⇒ Q ist falsch (¬P wahr, Q falsch). Also verschieden.</p>
            </>,
            <>
              <p>Warum ist eine Implikation mit falscher Prämisse immer wahr? Erinnerung an P ⇒ Q ≡ ¬P ∨ Q:</p>
              <pre className="hint-code-block">{`P = f → ¬P = w → ¬P ∨ Q = w  (egal welches Q)
Deshalb: P⇒Q ist nur in Zeile P=w, Q=f falsch,
sonst überall wahr.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> „(b) enthält auch P, also muss es äquivalent sein" → <strong>✅ Richtig:</strong> ¬P ⇒ Q hat anderen Inhalt; das Gegenbeispiel P = f, Q = f zeigt die Verschiedenheit.</li>
              <li><strong>❌ Falsch:</strong> P ⇒ Q so lesen, als sage es etwas über schlechtes Wetter → <strong>✅ Richtig:</strong> bei P = f ist P ⇒ Q immer wahr; es macht keine Aussage über diesen Fall.</li>
            </ul>,
            <p>Selbstkontrolle: prüfe die Zeile P=f, Q=f in beiden Spalten — sie müssen verschieden sein. Frage: Sagt P ⇒ Q überhaupt etwas über den Fall P = f aus, und warum scheitert damit die Äquivalenz mit ¬P ⇒ Q?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: '}<M>{'\\neg P \\Rightarrow Q'}</M>{' — nicht äquivalent zu '}<M>{'P \\Rightarrow Q'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: '(c) Das Wetter ist nicht schön oder Maxi Musterfrau ist mit dem Fahrrad an der Hochschule.',
          hint: h(
            <>
              <p>Die <span className="hint-em">Schlüsseläquivalenz der Implikation</span>: <span className="hint-em">P ⇒ Q ≡ ¬P ∨ Q</span>. In Worten: „Wenn P, dann Q" sagt dasselbe wie „nicht P, oder Q". Eine Implikation ist also nur dann falsch, wenn P wahr und Q falsch ist — in allen anderen Fällen wahr.</p>
              <p>Aussage (c) „Das Wetter ist nicht schön ODER Maxi ist mit dem Fahrrad da" = ¬P ∨ Q. Das ist exakt die rechte Seite dieser Äquivalenz — daher ist (c) äquivalent zu P ⇒ Q.</p>
            </>,
            <>
              <p>So bestätigt man P ⇒ Q ≡ ¬P ∨ Q mit der Wahrheitstafel (Spalten müssen in ALLEN vier Zeilen gleich sein):</p>
              <pre className="hint-code-block">{` P  Q │ P⇒Q │ ¬P │ ¬P∨Q
 w  w │  w  │  f │   w
 w  f │  f  │  f │   f
 f  w │  w  │  w │   w
 f  f │  w  │  w │   w

Spalte P⇒Q = (w,f,w,w) = Spalte ¬P∨Q = (w,f,w,w)
→ identisch in allen Zeilen → ÄQUIVALENT ✓`}</pre>
              <p>Beachte: beide sind nur in Zeile 2 (P=w, Q=f) falsch — genau der Fall „schönes Wetter, aber Maxi kommt nicht mit dem Rad", der die Aussage verletzt.</p>
            </>,
            <>
              <p>Anwendung der Regel auf ein anderes Beispiel:</p>
              <pre className="hint-code-block">{`"Wenn es regnet, nehme ich den Schirm" (P⇒Q)
 ≡ "Es regnet nicht, ODER ich nehme den Schirm" (¬P∨Q)
Verletzt nur, wenn es regnet UND ich keinen Schirm nehme.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> P ∨ Q statt ¬P ∨ Q (Negation von P vergessen) → <strong>✅ Richtig:</strong> P ⇒ Q ≡ ¬P ∨ Q; bei P falsch ist die Implikation automatisch wahr.</li>
              <li><strong>❌ Falsch:</strong> P ⇒ Q ≡ P ∧ Q annehmen → <strong>✅ Richtig:</strong> P ⇒ Q ≡ ¬P ∨ Q; die Wahrheitstafeln von P∧Q und P⇒Q sind verschieden.</li>
            </ul>,
            <p>Selbstkontrolle: vergleiche die Spalten P⇒Q und ¬P∨Q — alle vier Zeilen müssen übereinstimmen. Frage: In welcher einzigen Zeile ist P ⇒ Q falsch, und wie macht ¬P ∨ Q genau dieselbe Zeile falsch?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: '}<M>{'\\neg P \\vee Q'}</M>{' — äquivalent zu '}<M>{'P \\Rightarrow Q'}</M>{'.'}
            </>
          ),
        },
        {
          letter: 'd',
          text: '(d) Wenn Maxi Musterfrau ohne Fahrrad an der Hochschule ist, dann ist das Wetter nicht schön.',
          hint: h(
            <>
              <p>Aussage (d) „Wenn Maxi ohne Fahrrad an der Hochschule ist, dann ist das Wetter nicht schön" = <span className="hint-em">¬Q ⇒ ¬P</span>. Das ist die <span className="hint-em">Kontraposition</span> von P ⇒ Q: beide Teile negiert UND der Pfeil umgedreht.</p>
              <p>Grundregel: Die Kontraposition ist <strong>immer äquivalent</strong> zur ursprünglichen Implikation. „Wenn P, dann Q" und „wenn nicht Q, dann nicht P" sagen dasselbe. (Beispiel: „Regen ⇒ nass" ist gleichwertig zu „nicht nass ⇒ kein Regen".)</p>
            </>,
            <>
              <p>So zeigt man ¬Q ⇒ ¬P ≡ P ⇒ Q — wahlweise algebraisch oder per Tafel:</p>
              <pre className="hint-code-block">{`Algebraisch (mit P⇒Q ≡ ¬P∨Q):
   ¬Q ⇒ ¬P
   ≡ ¬(¬Q) ∨ ¬P      [Implikation auflösen]
   ≡ Q ∨ ¬P          [Doppelnegation ¬(¬Q)=Q]
   ≡ ¬P ∨ Q          [∨ ist vertauschbar]
   ≡ P ⇒ Q           [Implikation zusammensetzen]   ✓

Wahrheitstafel zur Kontrolle:
 P  Q │ P⇒Q │ ¬Q ¬P │ ¬Q⇒¬P
 w  w │  w  │  f  f │   w
 w  f │  f  │  w  f │   f
 f  w │  w  │  f  w │   w
 f  f │  w  │  w  w │   w
 Spalten (w,f,w,w) identisch → äquivalent ✓`}</pre>
            </>,
            <>
              <p>Übersicht (Original gegen die drei Varianten):</p>
              <pre className="hint-code-block">{`P ⇒ Q ≡ ¬Q ⇒ ¬P   (Kontraposition)  → äquivalent ✓
P ⇒ Q ≢ Q ⇒ P     (Umkehrung)       → nicht äquiv. ✗
P ⇒ Q ≢ ¬P ⇒ ¬Q   (Inverse)         → nicht äquiv. ✗`}</pre>
              <p>Insgesamt sind also nur (c) ¬P∨Q und (d) ¬Q⇒¬P äquivalent zum Original P⇒Q.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Kontraposition ¬Q ⇒ ¬P mit Umkehrung Q ⇒ P gleichsetzen → <strong>✅ Richtig:</strong> Kontraposition dreht Pfeil UND negiert; die Umkehrung dreht nur den Pfeil (ohne Negation) und ist nicht äquivalent.</li>
              <li><strong>❌ Falsch:</strong> ¬P ⇒ ¬Q als Kontraposition bezeichnen → <strong>✅ Richtig:</strong> das ist die Inverse (nur negiert); die Kontraposition ist ¬Q ⇒ ¬P.</li>
            </ul>,
            <p>Selbstkontrolle: die algebraische Kette und die Tafel müssen beide „äquivalent" ergeben. Frage: Warum ist „P impliziert Q" gleichwertig zu „nicht-Q impliziert nicht-P", die bloße Umkehrung „Q impliziert P" aber nicht?</p>,
          ),
          solution: (
            <>
              {'In Symbolen: '}<M>{'\\neg Q \\Rightarrow \\neg P'}</M>{' — äquivalent zu '}<M>{'P \\Rightarrow Q'}</M>{'.'}
              {'\n\n'}
              {'Die Aussage ist nur zu (c) und zu (d) äquivalent.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b2a4',
      nr: 4,
      title: 'Direkter Beweis: A(n) ⇒ B(n) ∀n',
      referenz: ['logik-beweise'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Beweisen Sie, durch direkten Beweis, den Satz A(n) ⇒ B(n) ∀n für die Aussagen:\n  • A(n): n ist ungerade\n  • B(n): n² ist ungerade\n\nHinweise: Sie müssen die Wahrheit von A ⇒ B für alle n zeigen so in der letzten Vorlesung besprochen. Benutzen Sie dafür die Wahrheitstabelle des Operators ⇒. Eventuell sind nicht alle Zeilen der Tabelle zu zeigen, begründen Sie dies!',
          hint: h(
            <>
              <p>Ein <span className="hint-em">direkter Beweis</span> von „A(n) ⇒ B(n) für alle n" geht so: Man nimmt A(n) als wahr an (Voraussetzung) und leitet daraus durch gültige Umformungen B(n) her. Aus der Wahrheitstafel von ⇒ weiß man: eine Implikation ist nur im Fall A=w, B=f falsch. Zeigt man, dass dieser Fall NIE eintritt (aus A=w folgt immer B=w), ist die Implikation für alle n wahr. Zeilen mit A=f muss man nicht betrachten — dort ist A ⇒ B automatisch wahr.</p>
              <p>Schlüssel ist die <span className="hint-em">algebraische Darstellung</span> gerader/ungerader Zahlen: n ungerade ⟺ n = 2k+1 für ein k ∈ ℕ; n gerade ⟺ n = 2k. Eine Zahl ist gerade, wenn sie den Faktor 2 enthält (Form 2·m), und ungerade, wenn sie die Form 2·m + 1 hat.</p>
            </>,
            <>
              <p>Direkter Beweis von „n ungerade ⇒ n² ungerade":</p>
              <pre className="hint-code-block">{`1) Annahme A(n) = w: n ist ungerade.
   Algebraisch: es gibt ein k ∈ ℕ mit n = 2k + 1.

2) n² berechnen (binomische Formel (a+b)² = a²+2ab+b²):
   n² = (2k+1)²
      = (2k)² + 2·(2k)·1 + 1²
      = 4k² + 4k + 1

3) Faktor 2 ausklammern, um die Form 2m+1 zu erreichen:
   4k² + 4k + 1 = 2·(2k² + 2k) + 1
   Setze m = 2k² + 2k  (ist eine natürliche Zahl).
   → n² = 2m + 1

4) Die Form 2m+1 bedeutet: n² ist ungerade → B(n) = w.

Damit kann der einzige "schlechte" Fall A=w, B=f nie
auftreten → A(n) ⇒ B(n) gilt für alle n.  □`}</pre>
            </>,
            <>
              <p>Gleiches Muster für „n gerade ⇒ n² gerade":</p>
              <pre className="hint-code-block">{`n gerade → n = 2k
n² = (2k)² = 4k² = 2·(2k²) = 2m  (mit m = 2k²)
→ n² hat die Form 2m → n² ist gerade.  □`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur Einzelfälle prüfen (1²=1, 3²=9, …) und „stimmt" schließen → <strong>✅ Richtig:</strong> n = 2k+1 mit beliebigem k deckt ALLE ungeraden Zahlen auf einmal ab; Beispiele sind kein Beweis.</li>
              <li><strong>❌ Falsch:</strong> n = 2k (gerade) ansetzen → <strong>✅ Richtig:</strong> die Voraussetzung ist „n ungerade" → n = 2k+1 (das +1 nicht vergessen!).</li>
            </ul>,
            <p>Selbstkontrolle: Probe mit k=2 → n=5, n²=25=2·12+1 (ungerade) ✓. Frage: Warum erfasst „n = 2k+1" alle ungeraden Zahlen gleichzeitig, was eine verbale Beschreibung „n ist ungerade" für die Rechnung nicht leisten kann?</p>,
          ),
          solution: (
            <>
              {'Es genügt zu zeigen, dass '}<M>{'A(n)'}</M>{' und '}<M>{'B(n)'}</M>{' stets gleichzeitig wahr sind, und der Fall '}<M>{'A(n) = w'}</M>{', '}<M>{'B(n) = f'}</M>{' nicht vorkommen kann. Dazu setzen wir '}<M>{'n = 2k + 1'}</M>{' mit '}<M>{'k \\in \\mathbb{N}'}</M>{'. Aussage '}<M>{'A(n)'}</M>{' ist somit erfüllt. Daraus berechnen wir '}
              {'\n'}
              <M>{'n^{2} = (2k + 1)^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1,'}</M>
              {'\n'}
              {'woraus folgt dass '}<M>{'n^{2}'}</M>{' ungerade ist. Somit ist '}<M>{'B(n)'}</M>{' auch stets erfüllt wenn '}<M>{'A(n)'}</M>{' erfüllt ist und der Fall '}<M>{'A(n) = w'}</M>{', '}<M>{'B(n) = f'}</M>{' kann nicht vorkommen. Die Zeilen der Wahrheitstabelle, in denen '}<M>{'A'}</M>{' falsch ist müssen nicht betrachtet werden da '}<M>{'A \\Rightarrow B'}</M>{' in diesem Fall sowieso immer wahr ist, unabhängig von '}<M>{'B'}</M>{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b2a5',
      nr: 5,
      title: 'Widerspruchsbeweis',
      referenz: ['logik-beweise'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Beweisen Sie den Satz aus der letzten Aufgabe durch Widerspruchsbeweis!',
          hint: h(
            <>
              <p>Beim <span className="hint-em">Widerspruchsbeweis</span> (indirekter Beweis) nimmt man das GEGENTEIL der zu beweisenden Aussage an und leitet daraus einen <span className="hint-em">Widerspruch</span> her (etwas, das gleichzeitig wahr und falsch sein müsste). Da die Annahme zu Unsinn führt, muss sie falsch sein — also gilt die ursprüngliche Aussage.</p>
              <p>Schlüssel: die <span className="hint-em">Negation einer Implikation</span>. Mit P ⇒ Q ≡ ¬P ∨ Q und De Morgan gilt: ¬(A ⇒ B) = ¬(¬A ∨ B) = A ∧ ¬B. Das Gegenteil von „A ⇒ B" ist also „A UND nicht B" — beide Teile zusammen. Für unsere Aussage: angenommen, n ist ungerade UND n² ist gerade.</p>
            </>,
            <>
              <p>Widerspruchsbeweis von „n ungerade ⇒ n² ungerade":</p>
              <pre className="hint-code-block">{`1) Negation der Behauptung annehmen:
   ¬(A ⇒ B) = A ∧ ¬B, hier:
   "n ist ungerade  UND  n² ist gerade".

2) Aus "n ungerade" folgt n = 2k + 1 (k ∈ ℕ).

3) n² berechnen (wie im direkten Beweis):
   n² = (2k+1)² = 4k² + 4k + 1 = 2·(2k²+2k) + 1
   → n² hat die Form 2m + 1 → n² ist UNGERADE.

4) Widerspruch: Schritt 3 liefert "n² ungerade",
   die Annahme behauptete aber "n² gerade".
   n² kann nicht zugleich gerade und ungerade sein.

5) Die Annahme ist also falsch → A(n) ⇒ B(n)
   gilt für alle n.  □`}</pre>
              <p>Der Rechenkern (Schritt 3) ist derselbe wie beim direkten Beweis; nur die Logik-Verpackung („Annahme → Widerspruch" statt „Voraussetzung → Folgerung") ist anders.</p>
            </>,
            <>
              <p>Negation einer Implikation, allgemein:</p>
              <pre className="hint-code-block">{`¬(A ⇒ B)
 = ¬(¬A ∨ B)      [P⇒Q ≡ ¬P∨Q]
 = ¬(¬A) ∧ ¬B     [De Morgan: ¬(X∨Y)=¬X∧¬Y]
 = A ∧ ¬B         [Doppelnegation]
→ "A gilt, aber B nicht" — beide Teile zusammen.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> zum Widerspruch nur A = f annehmen → <strong>✅ Richtig:</strong> man nimmt ¬(A ⇒ B) = A ∧ ¬B an; beide Teile (A wahr UND B falsch) gehören in die Annahme.</li>
              <li><strong>❌ Falsch:</strong> ¬(A ⇒ B) = ¬A ⇒ ¬B → <strong>✅ Richtig:</strong> ¬(A ⇒ B) = A ∧ ¬B (über De Morgan: ¬(¬A ∨ B) = A ∧ ¬B), keine Implikation.</li>
            </ul>,
            <p>Selbstkontrolle: die hergeleitete Eigenschaft (n² ungerade) muss der Annahme (n² gerade) direkt widersprechen — sonst ist es kein gültiger Widerspruch. Frage: Worin unterscheiden sich direkter und Widerspruchsbeweis hier nur, und warum kommen beide zum selben Ergebnis?</p>,
          ),
          solution: (
            <>
              {'Wir wollen zeigen dass '}<M>{'\\neg(A(n) \\Rightarrow B(n)) = f \\;\\forall n'}</M>{'. Dies kann man umformulieren als '}
              {'\n'}
              <M>{'\\neg(A(n) \\Rightarrow B(n)) = \\neg(\\neg(A \\wedge \\neg B)) = A \\wedge \\neg B.'}</M>
              {'\n'}
              {'Wir müssen also zeigen, dass '}<M>{'(A(n) \\wedge \\neg B(n)) = f \\;\\forall n'}</M>{'. Wiederum ist es nicht nötig, dies für '}<M>{'A(n) = f'}</M>{' zu zeigen da die Aussage dann sowieso falsch ist (Wahrheitstafel erstellen!). Wir nehmen also '}<M>{'A(n) = w'}</M>{' an: '}<M>{'n = 2k + 1,\\; k \\in \\mathbb{N}'}</M>{'. Damit gilt '}<M>{'n^{2} = 4k^{2} + 4k + 1'}</M>{' und somit '}<M>{'n^{2}'}</M>{' ungerade, daher auch '}<M>{'B(n) = w'}</M>{', die Aussage '}<M>{'\\neg(A(n) \\Rightarrow B(n))'}</M>{' ist somit falsch falls '}<M>{'A(n) = w'}</M>{'. Andere Möglichkeiten gibt es nicht, da '}<M>{'A(n) = w'}</M>{' stets bedeutet dass '}<M>{'B(n) = w'}</M>{' und somit ist der Wahrheitswert von '}<M>{'\\neg(A(n) \\Rightarrow B(n))'}</M>{' stets falsch. Damit ist der Satz '}<M>{'A(n) \\to B(n) \\;\\forall n'}</M>{' gezeigt.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b2a6',
      nr: 6,
      title: 'Logische Ausdrücke vereinfachen',
      referenz: ['logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Vereinfachen Sie die folgenden logischen Ausdrücke:\n\n  A ∨ (¬A ∧ B)',
          hint: h(
            <>
              <p>Logische Ausdrücke kann man mit <span className="hint-em">Booleschen Gesetzen</span> umformen (genau wie Zahlenterme mit Rechenregeln). Hier gebraucht:</p>
              <ul>
                <li><span className="hint-em">Distributivgesetz</span>: A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C). Das ∨ wird „in die Klammer hineinmultipliziert" (wie a·(b+c) = ab+ac, nur mit ∨/∧).</li>
                <li><span className="hint-em">Komplementgesetz</span>: A ∨ ¬A = t. „A oder nicht-A" ist immer wahr (Tautologie t). Eines von beiden trifft stets zu.</li>
                <li><span className="hint-em">Neutrales Element</span>: t ∧ X = X. „Wahr und X" hängt nur noch von X ab.</li>
              </ul>
              <p>Das Ziel: A ∨ (¬A ∧ B) auf eine einfachere Form bringen (dies heißt auch „Absorptionsregel").</p>
            </>,
            <>
              <p>Schrittweise Vereinfachung von A ∨ (¬A ∧ B):</p>
              <pre className="hint-code-block">{`A ∨ (¬A ∧ B)
= (A ∨ ¬A) ∧ (A ∨ B)   [Distributivgesetz:
                         A∨(B∧C) = (A∨B)∧(A∨C),
                         hier B=¬A, C=B]
= t ∧ (A ∨ B)          [Komplementgesetz A∨¬A = t]
= A ∨ B                [Neutrales Element t∧X = X]

Ergebnis: A ∨ (¬A ∧ B) = A ∨ B`}</pre>
              <p>Probe mit der Wahrheitstafel (beide Spalten müssen gleich sein):</p>
              <pre className="hint-code-block">{`A  B │ ¬A∧B │ A∨(¬A∧B) │ A∨B
w  w │  f   │    w     │  w
w  f │  f   │    w     │  w
f  w │  w   │    w     │  w
f  f │  f   │    f     │  f   ✓ identisch`}</pre>
            </>,
            <>
              <p>Gleiche Technik bei A ∧ (¬A ∨ B):</p>
              <pre className="hint-code-block">{`A ∧ (¬A ∨ B)
= (A ∧ ¬A) ∨ (A ∧ B)   [Distributivgesetz]
= f ∨ (A ∧ B)          [A ∧ ¬A = f, Widerspruch]
= A ∧ B                [f ∨ X = X]`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> A ∨ (¬A ∧ B) = (A ∨ ¬A) ∧ B (Distributivgesetz halb angewandt) → <strong>✅ Richtig:</strong> A wird auf BEIDE Klammerteile verteilt: (A ∨ ¬A) ∧ (A ∨ B).</li>
              <li><strong>❌ Falsch:</strong> A ∨ ¬A = f → <strong>✅ Richtig:</strong> A ∨ ¬A = t (immer wahr); dagegen ist A ∧ ¬A = f (immer falsch).</li>
            </ul>,
            <p>Selbstkontrolle: die Wahrheitstafeln von A∨(¬A∧B) und A∨B müssen in allen vier Zeilen übereinstimmen. Frage: Wenn A wahr ist, trägt ¬A∧B nichts bei (es ist falsch); und wenn A falsch ist, reduziert sich ¬A∧B auf B — warum ergibt das zusammen genau A∨B?</p>,
          ),
          solution: (
            <>
              <M>{'A \\vee (\\neg A \\wedge B)'}</M>{' =(Distributivgesetz)= '}<M>{'(A \\vee \\neg A) \\wedge (A \\vee B)'}</M>{' =(Komplementgesetz)= '}<M>{'t \\wedge (A \\vee B)'}</M>{' =(neutrales Element)= '}<M>{'A \\vee B'}</M>
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Vereinfachen Sie die folgenden logischen Ausdrücke:\n\n  ¬(A ∧ B) ∨ ¬(¬A ∨ B)   (aus der digitalen Schaltungstechnik!)',
          hint: h(
            <>
              <p>Hier braucht man zwei Gesetzgruppen:</p>
              <ul>
                <li><span className="hint-em">De Morgansche Gesetze</span>: ¬(X ∧ Y) = ¬X ∨ ¬Y und ¬(X ∨ Y) = ¬X ∧ ¬Y. Ein Komplement vor einer Klammer wird „hineingezogen", dabei kippt ∧ ↔ ∨ und jeder Teil wird negiert.</li>
                <li><span className="hint-em">Absorptionsgesetz</span>: X ∨ (Y ∧ X) = X. Steht X selbst und zusätzlich „etwas UND X", so genügt schon X allein.</li>
                <li>Hilfsregeln: <span className="hint-em">Doppelnegation</span> ¬(¬A) = A; <span className="hint-em">Assoziativität</span> (Klammern bei lauter ∨ frei setzbar).</li>
              </ul>
              <p>Plan: zuerst beide ¬(…)-Klammern mit De Morgan auflösen, dann mit Absorption kürzen.</p>
            </>,
            <>
              <p>Schrittweise Vereinfachung von ¬(A ∧ B) ∨ ¬(¬A ∨ B):</p>
              <pre className="hint-code-block">{`1) De Morgan auf beide Terme:
   ¬(A ∧ B)   = ¬A ∨ ¬B
   ¬(¬A ∨ B)  = ¬(¬A) ∧ ¬B = A ∧ ¬B   [Doppelnegation]
   → Ausdruck = (¬A ∨ ¬B) ∨ (A ∧ ¬B)

2) Umklammern (Assoziativität von ∨):
   = ¬A ∨ ( ¬B ∨ (A ∧ ¬B) )

3) Absorption auf den inneren Teil:
   ¬B ∨ (A ∧ ¬B) = ¬B     [X ∨ (Y ∧ X) = X, X=¬B, Y=A]
   → = ¬A ∨ ¬B

4) De Morgan rückwärts (kompakte Endform):
   ¬A ∨ ¬B = ¬(A ∧ B)

Ergebnis: ¬(A ∧ B) ∨ ¬(¬A ∨ B) = ¬(A ∧ B)`}</pre>
              <p>Probe per Wahrheitstafel: ¬(¬A∨B) = A∧¬B ist nur bei A=w,B=f wahr — dort ist ¬(A∧B) ohnehin schon wahr. Der zweite Term fügt also nie etwas Neues hinzu → das Ganze = ¬(A∧B). ✓</p>
            </>,
            <>
              <p>Absorptionsgesetz isoliert (Kern des Schritts 3):</p>
              <pre className="hint-code-block">{`X ∨ (Y ∧ X) = X
Begründung: ist X wahr, ist die ganze ∨-Aussage wahr.
Ist X falsch, ist auch (Y∧X) falsch → alles falsch.
In beiden Fällen entscheidet allein X.
Hier mit X = ¬B, Y = A:  ¬B ∨ (A ∧ ¬B) = ¬B`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ¬(¬A ∨ B) = ¬A ∧ B → <strong>✅ Richtig:</strong> beide Teile werden negiert: ¬(¬A ∨ B) = ¬(¬A) ∧ ¬B = A ∧ ¬B (Doppelnegation beachten).</li>
              <li><strong>❌ Falsch:</strong> das Absorptionsmuster nicht erkennen und weiter ausmultiplizieren → <strong>✅ Richtig:</strong> ¬B ∨ (A ∧ ¬B) = ¬B (Absorption X ∨ (Y∧X) = X).</li>
            </ul>,
            <p>Selbstkontrolle: stelle die Wahrheitstafel von ¬(A∧B) ∨ ¬(¬A∨B) und von ¬(A∧B) auf — sie müssen identisch sein. Frage: Warum „absorbiert" X in X ∨ (Y ∧ X) den Term (Y ∧ X) — macht (Y ∧ X) noch einen Unterschied, wenn X wahr bzw. wenn X falsch ist?</p>,
          ),
          solution: (
            <>
              <M>{'\\neg(A \\wedge B) \\vee \\neg(\\neg A \\vee B)'}</M>{' =(De Morgan)= '}<M>{'(\\neg A \\vee \\neg B) \\vee (A \\wedge \\neg B)'}</M>{' =(Absorption)= '}<M>{'\\neg A \\vee \\neg B'}</M>{' =(De Morgan)= '}<M>{'\\neg(A \\wedge B)'}</M>
            </>
          ),
        },
      ],
    },
  ],
}
