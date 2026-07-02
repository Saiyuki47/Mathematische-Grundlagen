import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import M from '../../utils/M'
import { h } from './shared'

export const blatt4: MatheBlatt = {
  id: 'blatt4',
  nr: '4',
  titel: 'vollständige Induktion, Zahlbereiche',
  aufgaben: [
    {
      id: 'b4a1',
      nr: 1,
      title: 'Produktformel per Induktion',
      referenz: ['vollstaendige-induktion', 'summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie mit Hilfe vollständiger Induktion, dass für jedes n ∈ ℕ* gilt:\n\n'}
              <M>{'\\prod_{k=1}^{n} \\left(1 + \\frac{1}{k}\\right) = n + 1'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Das <span className="hint-em">Produktzeichen ∏</span> (großes griechisches Pi) ist das Multiplikations-Gegenstück zum Summenzeichen: ∏(k=1 bis n) f(k) = f(1)·f(2)·…·f(n). Hier ist f(k) = 1 + 1/k, also ∏ = (1+1/1)·(1+1/2)·…·(1+1/n).</p>
              <p>Beweis per <span className="hint-em">vollständiger Induktion</span>. Sie hat drei Teile, jeder hat seinen Grund:</p>
              <ul>
                <li><span className="hint-em">Induktionsanfang (IA)</span>: kleinsten Fall (n=1) direkt nachrechnen — der "erste Dominostein".</li>
                <li><span className="hint-em">Induktionsvoraussetzung (IV)</span>: A(n) für ein festes n als wahr annehmen — die Zutat, die man im Schritt benutzen darf.</li>
                <li><span className="hint-em">Induktionsschritt (IS)</span>: aus A(n) folgt A(n+1) — reicht die Wahrheit Stein für Stein weiter.</li>
              </ul>
              <p>A(n): ∏(k=1 bis n)(1 + 1/k) = n + 1. Trick im IS für Produkte: <span className="hint-em">den letzten Faktor abspalten</span> — ∏(k=1 bis n+1) = ∏(k=1 bis n) · (Faktor bei k=n+1) — damit das Produkt bis n erscheint, auf das die IV passt. Der neue Faktor bei k=n+1 ist 1 + 1/(n+1).</p>
              <p>Bruchrechnung dabei: 1 + 1/(n+1) = (n+1)/(n+1) + 1/(n+1) = (n+2)/(n+1) (auf gemeinsamen Nenner bringen).</p>
            </>,
            <>
              <p>So führt man den Induktionsbeweis komplett:</p>
              <pre className="hint-code-block">{`A(n): ∏(k=1..n)(1 + 1/k) = n + 1

── IA (n=1): ──
LHS = ∏(k=1..1)(1+1/k) = 1 + 1/1 = 2
RHS = 1 + 1 = 2
LHS = RHS ✓ → A(1) wahr.

── IV: Angenommen für festes n ≥ 1 gilt ──
∏(k=1..n)(1 + 1/k) = n + 1

── IS: zu zeigen A(n+1), also ──
∏(k=1..n+1)(1 + 1/k) = (n+1) + 1 = n + 2

1) Letzten Faktor abspalten (k = n+1):
   ∏(k=1..n+1)(1+1/k)
   = [∏(k=1..n)(1+1/k)] · (1 + 1/(n+1))

2) IV einsetzen (Kern des Beweises):
   = (n+1) · (1 + 1/(n+1))

3) Neuen Faktor zusammenfassen:
   1 + 1/(n+1) = (n+1)/(n+1) + 1/(n+1)
              = (n+2)/(n+1)

4) Ausrechnen, (n+1) kürzt sich:
   = (n+1) · (n+2)/(n+1) = n+2   ✓ = RHS(n+1)

Mit IA + IS gilt A(n) für alle n ≥ 1. □`}</pre>
              <p>Alternativ ohne Bruch in Schritt 3/4: (n+1)·(1 + 1/(n+1)) = (n+1)·1 + (n+1)·1/(n+1) = (n+1) + 1 = n+2.</p>
            </>,
            <>
              <p>Analoges Produkt-Induktionsbeispiel: ∏(k=1 bis n) 2 = 2ⁿ.</p>
              <pre className="hint-code-block">{`IA (n=1): ∏(k=1..1) 2 = 2 = 2¹ ✓
IV: ∏(k=1..n) 2 = 2ⁿ
IS: ∏(k=1..n+1) 2 = [∏(k=1..n) 2]·2
   =(IV) 2ⁿ·2 = 2^(n+1) ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> die Stelle (IV) nicht markieren → <strong>✅ Richtig:</strong> ausdrücklich "=(IV)" schreiben, wo man ∏(k=1..n) durch n+1 ersetzt; sonst ist nicht erkennbar, dass die Induktion genutzt wurde.</li>
              <li><strong>❌ Falsch:</strong> IA bei n=0 beginnen → <strong>✅ Richtig:</strong> n ∈ ℕ* heißt n ≥ 1, Basisfall ist n=1. (Das leere Produkt bei n=0 wäre 1, die RHS 0+1=1 — das wäre zwar wahr, aber die Aufgabe verlangt ℕ*.)</li>
              <li><strong>❌ Falsch:</strong> (n+1)·(1+1/(n+1)) = n+1+1/(n+1) (nur den ersten Summanden mal (n+1)) → <strong>✅ Richtig:</strong> (n+1) auf BEIDE Summanden verteilen: (n+1) + 1 = n+2.</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe n=2 direkt: (1+1/1)(1+1/2) = 2·(3/2) = 3 = 2+1 ✓. Frage: Warum ist der IS bei diesem Produkt so direkt — welche Eigenschaft (das ∏ bis n+1 ist ∏ bis n mal genau einem neuen Faktor) macht das Einsetzen der IV so glatt?</p>,
          ),
          solution: 'A(n): ∏(k=1..n)(1+1/k) = n+1\n\nIA (n=1): ∏(k=1..1)(1+1/k) = 1+1 = 2 = 1+1 ✓\n\nIS (n → n+1): Sei n ∈ ℕ*. Angenommen ∏(k=1..n)(1+1/k) = n+1 (IV).\n\n∏(k=1..n+1)(1+1/k)\n= (1+1/(n+1)) · ∏(k=1..n)(1+1/k)\n=(IV) (1+1/(n+1)) · (n+1)\n= n+1+1 = n+2  ✓  □',
        },
      ],
    },
    {
      id: 'b4a2',
      nr: 2,
      title: 'Bernoulli\'sche Ungleichung',
      referenz: ['vollstaendige-induktion'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Sei x ∈ [−1, ∞). Zeigen Sie mit Hilfe vollständiger Induktion, dass für jedes n ∈ ℕ die Ungleichung\n\n(1 + x)ⁿ ≥ 1 + nx\n\ngilt. An welcher Stelle haben Sie die Voraussetzung x ≥ −1 verwendet?',
          hint: h(
            <>
              <p>Die <span className="hint-em">Bernoulli-Ungleichung</span> (1+x)ⁿ ≥ 1 + nx wird per <span className="hint-em">vollständiger Induktion</span> über n bewiesen (IA: Basisfall direkt; IV: für festes n angenommen; IS: A(n) ⇒ A(n+1)). A(n): (1+x)ⁿ ≥ 1 + nx.</p>
              <p>Das Intervall <span className="hint-em">[−1, ∞)</span> bedeutet "alle x mit x ≥ −1" (eckige Klammer = Randpunkt −1 gehört dazu; ∞ ist nie eingeschlossen). Diese Voraussetzung ist der Schlüssel.</p>
              <p>Zwei Rechenregeln für Ungleichungen, die man hier braucht:</p>
              <ul>
                <li><span className="hint-em">Multiplizieren mit einer nicht-negativen Zahl erhält die Richtung</span>: Aus a ≥ b und c ≥ 0 folgt a·c ≥ b·c. (Mit c &lt; 0 würde sich ≥ zu ≤ umdrehen!) Da man die IV mit (1+x) multipliziert, muss <span className="hint-em">1+x ≥ 0</span> gelten — und das ist genau x ≥ −1.</li>
                <li><span className="hint-em">Ein Quadrat ist nie negativ</span>: x² ≥ 0 für jedes reelle x; mit n ≥ 0 also nx² ≥ 0. Ein Term ≥ 0 weglassen verkleinert nie unter die rechte Seite: A + (≥0) ≥ A.</li>
              </ul>
              <p>Idee: (1+x)^(n+1) = (1+x)·(1+x)ⁿ schreiben (Potenzgesetz aⁿ⁺¹ = a·aⁿ), die IV einsetzen, ausmultiplizieren, den überschüssigen Term nx² ≥ 0 weglassen.</p>
            </>,
            <>
              <p>So führt man den Bernoulli-Beweis (für x ≥ −1, n ∈ ℕ):</p>
              <pre className="hint-code-block">{`A(n): (1+x)ⁿ ≥ 1 + nx

── IA (n=0): ──
(1+x)⁰ = 1,  1 + 0·x = 1
1 ≥ 1 ✓ → A(0) wahr.

── IV: Angenommen für festes n ≥ 0 gilt ──
(1+x)ⁿ ≥ 1 + nx

── IS: zu zeigen (1+x)^(n+1) ≥ 1 + (n+1)x ──

1) Potenz zerlegen:
   (1+x)^(n+1) = (1+x)·(1+x)ⁿ

2) IV einsetzen — HIER wird x ≥ −1 gebraucht:
   weil 1+x ≥ 0, darf man (IV) mit (1+x)
   multiplizieren, ohne ≥ umzudrehen:
   (1+x)·(1+x)ⁿ ≥ (1+x)·(1+nx)        (*)

3) Rechte Seite ausmultiplizieren:
   (1+x)(1+nx) = 1 + nx + x + nx²
              = 1 + (n+1)x + nx²

4) Überschuss nx² weglassen (nx² ≥ 0):
   1 + (n+1)x + nx² ≥ 1 + (n+1)x

5) Kette zusammensetzen:
   (1+x)^(n+1) ≥ 1 + (n+1)x   ✓ = A(n+1)

Mit IA + IS gilt A(n) für alle n ≥ 0. □

Die Voraussetzung x ≥ −1 wurde bei (*) benutzt:
Wäre 1+x < 0, kehrte sich in Schritt 2 das ≥ um
und der Beweis bräche zusammen.`}</pre>
            </>,
            <>
              <p>Zur Veranschaulichung, warum die Richtung kippt, wenn 1+x &lt; 0:</p>
              <pre className="hint-code-block">{`Beispiel: 3 ≥ 2 ist wahr.
Mal +2 (positiv):  6 ≥ 4   ✓ Richtung bleibt
Mal −2 (negativ): −6 ≥ −4? FALSCH, richtig: −6 ≤ −4
→ darum muss der Faktor (1+x) ≥ 0 sein.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> die Voraussetzung x ≥ −1 nicht erwähnen → <strong>✅ Richtig:</strong> beim Multiplizieren der IV mit (1+x) in Schritt 2 muss 1+x ≥ 0 begründet werden; das ist genau x ≥ −1. Ohne das dreht sich das ≥.</li>
              <li><strong>❌ Falsch:</strong> nx² als möglicherweise negativ behandeln → <strong>✅ Richtig:</strong> n ≥ 0 und x² ≥ 0, also nx² ≥ 0; deshalb darf man es in Schritt 4 weglassen (verkleinert die Seite nur, bleibt also ≥).</li>
              <li><strong>❌ Falsch:</strong> (1+x)(1+nx) = 1 + nx² ausmultiplizieren → <strong>✅ Richtig:</strong> sorgfältig alle vier Produkte: 1·1 + 1·nx + x·1 + x·nx = 1 + (n+1)x + nx².</li>
            </ul>,
            <p>Selbstkontrolle: Prüfe x=0,5, n=2: (1,5)² = 2,25 ≥ 1 + 2·0,5 = 2 ✓. Frage: Warum darf man die IV mit (1+x) multiplizieren, ohne das Ungleichungszeichen umzukehren — und an welcher Stelle genau scheitert das Argument, wenn x &lt; −1 wäre?</p>,
          ),
          solution: 'IA (n=0): (1+x)⁰ = 1 ≥ 1+0·x = 1  ✓\n\nIS: Sei n ∈ ℕ. Angenommen (1+x)ⁿ ≥ 1+nx (IV).\n\n(1+x)^(n+1) = (1+x)(1+x)ⁿ\n            ≥ (1+x)(1+nx)   [IV und x ≥ −1 → 1+x ≥ 0, (*) ]\n            = 1 + (n+1)x + nx²\n            ≥ 1 + (n+1)x    [da nx² ≥ 0]  ✓  □\n\nVoraussetzung x ≥ −1 wurde bei (*) verwendet: Wäre 1+x < 0, würde sich die Ungleichungsrichtung umkehren.',
        },
      ],
    },
    {
      id: 'b4a3',
      nr: 3,
      title: 'Mengen als Intervalle',
      referenz: ['betrag-intervalle'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Schreiben Sie folgende Mengen als Intervalle oder Vereinigung von Intervallen.\n\n'}
              {'A := { x ∈ ℝ \\ {9} : 4/(x−9) ≤ 2 }'}
            </>
          ),
          hint: h(
            <>
              <p>Gesucht ist die <span className="hint-em">Lösungsmenge</span> einer Ungleichung — alle x, die sie erfüllen — geschrieben als <span className="hint-em">Intervall</span>. Schreibweisen: [a, b] schließt die Ränder ein (eckig), (a, b) schließt sie aus (rund), ∞ ist immer ausgeschlossen. <span className="hint-em">ℝ\{'\\'}{'{9}'}</span> heißt "alle reellen Zahlen außer 9".</p>
              <p>Kernregel beim Umformen von Ungleichungen: <span className="hint-em">Multipliziert man mit einer positiven Zahl, bleibt das Ungleichungszeichen; mit einer negativen Zahl dreht es sich um</span> (aus ≤ wird ≥). Beispiel: 3 ≤ 5, mal (−1) → −3 ≥ −5.</p>
              <p>Hier steht x im <span className="hint-em">Nenner</span> (x−9). Ob x−9 positiv oder negativ ist, hängt von x ab — deshalb muss man eine <span className="hint-em">Fallunterscheidung</span> machen: Fall 1 mit x−9 &gt; 0 (also x &gt; 9), Fall 2 mit x−9 &lt; 0 (also x &lt; 9). Die <span className="hint-em">Nullstelle</span> x=9 (Nenner = 0) ist verboten und gehört nie zur Lösung. Am Ende jedes Falls schneidet man das Ergebnis mit der Fallbedingung (nur x, die beides erfüllen), dann <span className="hint-em">vereinigt</span> (∪) man beide Teillösungen.</p>
            </>,
            <>
              <p>So löst man A = {'{ x ∈ ℝ\\{9} : 4/(x−9) ≤ 2 }'}:</p>
              <pre className="hint-code-block">{`Verboten: x = 9 (Nenner 0).

── Fall 1: x − 9 > 0, also x > 9 (positiv) ──
Mal (x−9), Zeichen bleibt:
  4 ≤ 2·(x−9)
  4 ≤ 2x − 18
  22 ≤ 2x        | +18
  11 ≤ x         | :2
Schnitt mit Fallbedingung x > 9:
  x ≥ 11 erfüllt automatisch x > 9
  → Teillösung [11, ∞)

── Fall 2: x − 9 < 0, also x < 9 (negativ) ──
Mal (x−9), Zeichen DREHT sich (≤ → ≥):
  4 ≥ 2·(x−9)
  4 ≥ 2x − 18
  22 ≥ 2x        | +18
  11 ≥ x         | :2   d.h. x ≤ 11
Schnitt mit Fallbedingung x < 9:
  x < 9 ist strenger als x ≤ 11
  → Teillösung (−∞, 9)

── Vereinigen ──
A = (−∞, 9) ∪ [11, ∞)`}</pre>
            </>,
            <>
              <p>Proben mit Testpunkten (immer sinnvoll):</p>
              <pre className="hint-code-block">{`x=0:  4/(0−9) = −4/9 ≈ −0,44 ≤ 2 ✓ (0 ∈ A, in (−∞,9))
x=10: 4/(10−9) = 4 ≤ 2 ? NEIN ✗ (10 ∉ A, Lücke korrekt)
x=11: 4/(11−9) = 4/2 = 2 ≤ 2 ✓ (Randpunkt, gehört dazu)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 4/(x−9) ≤ 2 ⟹ 4 ≤ 2(x−9) ohne Fallunterscheidung → <strong>✅ Richtig:</strong> das Vorzeichen von (x−9) ist unbekannt; man braucht zwei Fälle (x&gt;9: Zeichen bleibt; x&lt;9: Zeichen dreht).</li>
              <li><strong>❌ Falsch:</strong> x=9 in die Lösung aufnehmen → <strong>✅ Richtig:</strong> x=9 macht den Nenner 0 (undefiniert), ist immer ausgeschlossen.</li>
              <li><strong>❌ Falsch:</strong> in Fall 2 das Ergebnis x ≤ 11 als Teillösung nehmen → <strong>✅ Richtig:</strong> mit der Fallbedingung x &lt; 9 schneiden; da x &lt; 9 strenger ist als x ≤ 11, bleibt nur (−∞, 9).</li>
            </ul>,
            <p>Selbstkontrolle: Setze einen Punkt aus jedem Intervall und einen aus der Lücke ein (z. B. x=0 ✓, x=12 ✓, x=10 ✗). Frage: Warum darf man eine Bruchungleichung nicht ohne Fallunterscheidung mit dem Nenner durchmultiplizieren, und welches Zeichen-Verhalten (drehen/bleiben) entscheidet über die beiden Fälle?</p>,
          ),
          solution: 'Fall 1 (x > 9): 4 ≤ 2(x−9) ⟺ 11 ≤ x → [11, ∞)\nFall 2 (x < 9): 4 ≥ 2(x−9) ⟺ 11 ≥ x, zusammen x < 9 → (−∞, 9)\n\nA = [11, ∞) ∪ (−∞, 9)',
        },
        {
          letter: 'b',
          text: 'Schreiben Sie folgende Mengen als Intervalle oder Vereinigung von Intervallen.\n\nB := { x ∈ ℝ : |x + 4| ≥ 6 }',
          hint: h(
            <>
              <p>Der <span className="hint-em">Betrag</span> |a| ist der "Abstand von a zur Null", immer ≥ 0: |5| = 5, |−5| = 5. Definition mit Fällen: |a| = a, falls a ≥ 0; und |a| = −a, falls a &lt; 0 (das Minus macht aus der negativen Zahl eine positive). Geometrisch ist |x − c| der <span className="hint-em">Abstand zwischen x und c</span> auf der Zahlengeraden.</p>
              <p>Für Betrags-Ungleichungen gibt es zwei Standardwege:</p>
              <ul>
                <li><span className="hint-em">Merkregel für |A| ≥ c</span> (mit c &gt; 0): das ist erfüllt, wenn A weit genug nach oben ODER weit genug nach unten geht, also <span className="hint-em">A ≥ c ODER A ≤ −c</span>. (Vorsicht: |A| ≤ c heißt dagegen −c ≤ A ≤ c, das ist die "Zwischen"-Version.)</li>
                <li><span className="hint-em">Fallunterscheidung</span> am Vorzeichen von A = x+4: Fall 1 (x+4 ≥ 0) ersetzt |x+4| durch x+4; Fall 2 (x+4 &lt; 0) ersetzt |x+4| durch −(x+4). Danach mit der Fallbedingung schneiden und vereinigen.</li>
              </ul>
              <p>Nullstelle des Betrags hier: x+4 = 0 ⟺ x = −4 (Trennpunkt der Fälle).</p>
            </>,
            <>
              <p>So löst man B = {'{ x ∈ ℝ : |x + 4| ≥ 6 }'} (per Fallunterscheidung):</p>
              <pre className="hint-code-block">{`Trennpunkt: x + 4 = 0 → x = −4

── Fall 1: x + 4 ≥ 0, also x ≥ −4 ──
|x+4| = x+4, einsetzen:
  x + 4 ≥ 6
  x ≥ 2            | −4
Schnitt mit x ≥ −4: x ≥ 2 ist strenger
  → Teillösung [2, ∞)

── Fall 2: x + 4 < 0, also x < −4 ──
|x+4| = −(x+4), einsetzen:
  −(x+4) ≥ 6
  −x − 4 ≥ 6
  −x ≥ 10          | +4
  x ≤ −10          | ·(−1), Zeichen DREHT
Schnitt mit x < −4: x ≤ −10 ist strenger
  → Teillösung (−∞, −10]

── Vereinigen ──
B = (−∞, −10] ∪ [2, ∞)`}</pre>
              <p>Gegenprobe mit der Merkregel: |x+4| ≥ 6 ⟺ x+4 ≥ 6 (→ x ≥ 2) oder x+4 ≤ −6 (→ x ≤ −10) — dasselbe Ergebnis.</p>
            </>,
            <>
              <p>Anderes Beispiel: |x − 1| ≥ 3.</p>
              <pre className="hint-code-block">{`Merkregel: x−1 ≥ 3 oder x−1 ≤ −3
→ x ≥ 4 oder x ≤ −2
→ Lösung (−∞, −2] ∪ [4, ∞)
Geometrisch: alle x mit Abstand ≥ 3 von der Zahl 1.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |x+4| ≥ 6 als −6 ≤ x+4 ≤ 6 lösen → <strong>✅ Richtig:</strong> −6 ≤ A ≤ 6 gehört zu |A| ≤ 6 (kleiner-gleich!). Für |A| ≥ 6 gilt "A ≥ 6 ODER A ≤ −6" (zwei nach außen gerichtete Strahlen).</li>
              <li><strong>❌ Falsch:</strong> in Fall 2 −(x+4) ≥ 6 ⟹ x+4 ≥ 6 (Vorzeichen verschluckt) → <strong>✅ Richtig:</strong> −(x+4) ≥ 6 ⟺ x+4 ≤ −6 ⟺ x ≤ −10 (beim Mal-(−1) dreht das ≥).</li>
              <li><strong>❌ Falsch:</strong> |x+4| = x+4 immer setzen → <strong>✅ Richtig:</strong> nur für x+4 ≥ 0; für x+4 &lt; 0 ist |x+4| = −(x+4).</li>
            </ul>,
            <p>Selbstkontrolle: x=−5 liegt zwischen −10 und 2: |−5+4| = |−1| = 1 ≥ 6? Nein → −5 ∉ B ✓. Frage: |x+4| ≥ 6 ist der Abstand von x zur Zahl −4; welche zwei Punkte haben genau Abstand 6 von −4 (nämlich −10 und 2), und warum sind das die Ränder der Lösung?</p>,
          ),
          solution: 'Fall 1 (x ≥ −4): x+4 ≥ 6 ⟺ x ≥ 2 → [2, ∞)\nFall 2 (x < −4): −(x+4) ≥ 6 ⟺ −10 ≥ x → (−∞, −10]\n\nB = (−∞, −10] ∪ [2, ∞)',
        },
        {
          letter: 'c',
          text: 'Schreiben Sie folgende Mengen als Intervalle oder Vereinigung von Intervallen.\n\nC := { x ∈ ℝ : |x − 2| ≥ |x + 3| }',
          hint: h(
            <>
              <p>Wieder Beträge: |a| = a falls a ≥ 0, sonst |a| = −a (das Minus dreht das Vorzeichen, sodass das Ergebnis ≥ 0 ist). Geometrisch ist |x−c| der Abstand von x zu c.</p>
              <p>Hier stehen <span className="hint-em">zwei Beträge</span> in einer Ungleichung. Jeder Betrag hat eine eigene <span className="hint-em">Nullstelle</span> (die Stelle, wo sein Inneres 0 wird): x−2 = 0 bei x = 2, und x+3 = 0 bei x = −3. Diese zwei Punkte zerlegen die Zahlengerade in <span className="hint-em">drei Bereiche</span>: x &lt; −3, dann −3 ≤ x &lt; 2, dann x ≥ 2. In jedem Bereich kennt man die Vorzeichen beider Innereien und kann <span className="hint-em">beide Betragsstriche gleichzeitig auflösen</span>.</p>
              <p>Pro Bereich: Beträge ersetzen, Ungleichung lösen, mit dem Bereich schneiden. Zwei Sonderausgänge können auftreten: eine <span className="hint-em">unerfüllbare</span> Ungleichung wie −2 ≥ 3 (nie wahr → Teillösung ∅) oder eine <span className="hint-em">immer wahre</span> Ungleichung (Tautologie) wie 2 ≥ −3 (→ der ganze Bereich ist Lösung). Am Ende alle drei Teillösungen vereinigen.</p>
              <p>Wichtig beim Auflösen: −(x−2) = −x+2 = 2−x und −(x+3) = −x−3 (Minus vor Klammer dreht jedes innere Vorzeichen).</p>
            </>,
            <>
              <p>So löst man C = {'{ x ∈ ℝ : |x − 2| ≥ |x + 3| }'}:</p>
              <pre className="hint-code-block">{`Nullstellen: x=2 (für x−2), x=−3 (für x+3)
→ drei Bereiche.

── Fall 1: x ≥ 2 (beide Innereien ≥ 0) ──
|x−2| = x−2,  |x+3| = x+3:
  x − 2 ≥ x + 3
  −2 ≥ 3          (x fällt weg!) → FALSCH
  → Teillösung ∅ (nie erfüllt)

── Fall 2: −3 ≤ x < 2 (x−2<0, x+3≥0) ──
|x−2| = −(x−2) = 2−x,  |x+3| = x+3:
  2 − x ≥ x + 3
  2 − 3 ≥ x + x
  −1 ≥ 2x
  x ≤ −1/2        | :2
Schnitt mit −3 ≤ x < 2:
  → Teillösung [−3, −1/2]

── Fall 3: x < −3 (beide Innereien < 0) ──
|x−2| = 2−x,  |x+3| = −(x+3) = −x−3:
  2 − x ≥ −x − 3
  2 ≥ −3          (−x fällt weg!) → IMMER WAHR
Schnitt mit x < −3:
  → Teillösung (−∞, −3)

── Vereinigen ──
C = (−∞, −3) ∪ [−3, −1/2] = (−∞, −1/2]`}</pre>
              <p>Die beiden linken Teile schließen lückenlos aneinander an (−3 gehört zu Teil 2), daher fasst man sie zu (−∞, −1/2] zusammen.</p>
            </>,
            <>
              <p>Schnelle Geometrie-Probe: |x−2| ≥ |x+3| heißt "x ist von 2 mindestens so weit weg wie von −3". Der Punkt mit gleichem Abstand ist die Mitte (2 + (−3))/2 = −1/2.</p>
              <pre className="hint-code-block">{`x=−1/2: |−1/2−2| = 2,5,  |−1/2+3| = 2,5 → gleich (Rand)
x=−1:   |−3| = 3 ≥ |2| = 2 ✓ (näher an −3 → in C)
x=0:    |−2| = 2 ≥ |3| = 3 ? NEIN ✗ (näher an 2 → nicht in C)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> −(x−2) = x−2 → <strong>✅ Richtig:</strong> −(x−2) = −x+2 = 2−x; das Minus vor der Klammer dreht beide inneren Vorzeichen.</li>
              <li><strong>❌ Falsch:</strong> in Fall 3 "2 ≥ −3 ist wahr → ganz ℝ" schließen → <strong>✅ Richtig:</strong> die Tautologie gilt nur unter der Fallbedingung x &lt; −3; Teillösung ist (−∞, −3), nicht ganz ℝ.</li>
              <li><strong>❌ Falsch:</strong> in Fall 1 "−2 ≥ 3 → irgendeine Lösung" suchen → <strong>✅ Richtig:</strong> −2 ≥ 3 ist nie wahr, Teillösung ist die leere Menge ∅.</li>
            </ul>,
            <p>Selbstkontrolle: Teste je einen Punkt links und rechts von −1/2 (x=−1 ✓, x=0 ✗) und den Rand x=−1/2 (Gleichheit). Frage: Was sagt |x−2| ≥ |x+3| geometrisch (welche Punkte sind von 2 mindestens so weit wie von −3 entfernt), und warum ist die Mitte −1/2 genau der Randpunkt der Lösung?</p>,
          ),
          solution: (
            <>
              {'Fall 1 (x ≥ 2): x−2 ≥ x+3 ⟺ −2 ≥ 3 → ∅\n'}
              {'Fall 2 (−3 ≤ x < 2): 2−x ≥ x+3 ⟺ −1/2 ≥ x → [−3, −1/2]\n'}
              {'Fall 3 (x < −3): 2−x ≥ −x−3 ⟺ 2 ≥ −3 → immer wahr → (−∞, −3)\n\n'}
              {'C = (−∞, −3) ∪ [−3, −'}<Frac n="1" d="2" />{'] = (−∞, −'}<Frac n="1" d="2" />{']'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b4a4',
      nr: 4,
      title: 'Supremum, Infimum, Maximum, Minimum',
      referenz: ['supremum-infimum'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Geben Sie für folgende Teilmengen von ℝ jeweils — falls vorhanden — das Supremum, das Infimum, das Maximum sowie das Minimum an:\n\nM₁ := { x ∈ ℝ : x > 0 und x² ≤ 4 }',
          hint: h(
            <>
              <p>Vier eng verwandte Begriffe für eine Zahlenmenge M:</p>
              <ul>
                <li><span className="hint-em">obere Schranke</span>: eine Zahl S mit x ≤ S für alle x ∈ M (liegt rechts von der ganzen Menge). <span className="hint-em">Supremum (sup)</span> = die <em>kleinste</em> obere Schranke. Sie muss NICHT selbst in M liegen.</li>
                <li><span className="hint-em">Maximum (max)</span> = das größte Element, das <em>tatsächlich in M liegt</em>. Es existiert genau dann, wenn das Supremum selbst zu M gehört: dann ist max = sup.</li>
                <li>Spiegelbildlich unten: <span className="hint-em">untere Schranke</span>, <span className="hint-em">Infimum (inf)</span> = größte untere Schranke, <span className="hint-em">Minimum (min)</span> = kleinstes Element in M (existiert, wenn inf ∈ M).</li>
              </ul>
              <p>Entscheidend ist das <span className="hint-em">Ungleichheitszeichen</span> in der Mengendefinition: ein <span className="hint-em">striktes</span> &lt; oder &gt; schließt den Randpunkt aus (er ist dann nur sup/inf, kein max/min); ein <span className="hint-em">nicht-striktes</span> ≤ oder ≥ schließt ihn ein (dann max/min).</p>
              <p>Werkzeug für die Bedingung x² ≤ 4: <span className="hint-em">Wurzel ziehen bei Quadrat-Ungleichungen</span> ergibt zwei Schranken: x² ≤ 4 ⟺ −2 ≤ x ≤ 2 (alle x, deren Abstand zur 0 höchstens 2 ist). Dann mit der zweiten Bedingung x &gt; 0 schneiden.</p>
            </>,
            <>
              <p>So bestimmt man sup, inf, max, min von M₁ = {'{ x ∈ ℝ : x > 0 und x² ≤ 4 }'}:</p>
              <pre className="hint-code-block">{`1) Bedingungen auflösen:
   x² ≤ 4  ⟺  −2 ≤ x ≤ 2
   zusammen mit x > 0:
   M₁ = (0, 2]
   (0 ausgeschlossen wegen x > 0 strikt;
    2 eingeschlossen wegen x² ≤ 4 nicht-strikt:
    2² = 4 ≤ 4 ✓)

2) Oberes Ende: größter Wert ist 2.
   Liegt 2 in M₁? 2 > 0 ✓ und 2² = 4 ≤ 4 ✓ → ja.
   → sup = 2 UND max = 2 (Supremum wird angenommen)

3) Unteres Ende: kleinster "Randwert" ist 0.
   Liegt 0 in M₁? 0 > 0 ist FALSCH → 0 ∉ M₁.
   → inf = 0 (größte untere Schranke),
     aber KEIN Minimum (0 wird nicht angenommen)

Ergebnis: sup = max = 2,  inf = 0,  min existiert nicht.`}</pre>
              <p>Warum kein Minimum, obwohl inf = 0? Zu jedem noch so kleinen positiven x ∈ M₁ gibt es ein kleineres (z. B. x/2 &gt; 0, ebenfalls in M₁) — es gibt kein kleinstes Element, aber 0 ist die Grenze von unten.</p>
            </>,
            <>
              <p>Kontrast-Beispiel, das den Unterschied zeigt: N = {'{ x ∈ ℝ : 0 ≤ x < 1 }'} = [0, 1).</p>
              <pre className="hint-code-block">{`inf = 0, und 0 ∈ N (wegen ≤) → min = 0 existiert.
sup = 1, aber 1 ∉ N (wegen <)  → kein Maximum.
→ Genau das strikte/nicht-strikte Zeichen entscheidet.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> inf = 0 = min schreiben → <strong>✅ Richtig:</strong> 0 ∉ M₁ wegen der strikten Bedingung x &gt; 0; deshalb gibt es nur inf = 0, aber kein Minimum.</li>
              <li><strong>❌ Falsch:</strong> sup = 2 nennen, aber kein Maximum angeben → <strong>✅ Richtig:</strong> 2 ∈ M₁ (2 &gt; 0 und 2² = 4 ≤ 4), also wird das Supremum angenommen: max = sup = 2.</li>
              <li><strong>❌ Falsch:</strong> x² ≤ 4 ⟹ x ≤ 2 (nur eine Schranke) → <strong>✅ Richtig:</strong> x² ≤ 4 ⟺ −2 ≤ x ≤ 2 (zwei Schranken); erst die zweite Bedingung x &gt; 0 schneidet das untere Stück weg.</li>
            </ul>,
            <p>Selbstkontrolle: Ist 1,9 ∈ M₁? (1,9 &gt; 0 ✓, 1,9² = 3,61 ≤ 4 ✓ → ja). Gibt es ein kleinstes Element? Frage: Worin unterscheiden sich sup und max begrifflich, und welches Zeichen (strikt x &gt; 0 vs. nicht-strikt x² ≤ 4) sorgt dafür, dass hier ein Maximum, aber kein Minimum existiert?</p>,
          ),
          solution: 'M₁ = (0, 2]\n\nsup = 2 = max  (2 ∈ M₁)\ninf = 0,  min existiert nicht  (0 ∉ M₁)',
        },
        {
          letter: 'b',
          text: 'Geben Sie für folgende Teilmengen von ℝ jeweils — falls vorhanden — das Supremum, das Infimum, das Maximum sowie das Minimum an:\n\nM₂ := { 1/z : z ∈ ℤ \\ {0} }',
          hint: h(
            <>
              <p>Erinnerung an die Begriffe: <span className="hint-em">sup</span> = kleinste obere Schranke, <span className="hint-em">max</span> = größtes Element, das WIRKLICH in M liegt (max = sup, falls sup ∈ M); spiegelbildlich <span className="hint-em">inf</span> = größte untere Schranke und <span className="hint-em">min</span> = kleinstes Element in M.</p>
              <p><span className="hint-em">ℤ\{'\\'}{'{0}'}</span> = alle ganzen Zahlen außer 0, also …,−3,−2,−1,1,2,3,… M₂ = {'{1/z}'} sammelt die Kehrwerte all dieser Zahlen. Bei solchen <span className="hint-em">durch eine Formel erzeugten Mengen</span> ist die Strategie: erst die Werte für kleine |z| auflisten (das liefert die Extreme), dann das Verhalten für große |z| betrachten (das liefert Grenzwerte, die evtl. nicht angenommen werden).</p>
              <p>Zwei Fallen, auf die man achten muss: (1) Die Menge enthält <span className="hint-em">positive UND negative</span> Werte (z kann beide Vorzeichen haben) — das untere Ende ist also nicht 0. (2) Ein <span className="hint-em">Grenzwert</span> (Wert, dem man beliebig nahe kommt) ist nur dann max/min, wenn ihn ein konkretes Element tatsächlich trifft.</p>
            </>,
            <>
              <p>So bestimmt man sup, inf, max, min von M₂ = {'{ 1/z : z ∈ ℤ\\{0} }'}:</p>
              <pre className="hint-code-block">{`1) Werte für kleine |z| auflisten:
   z= 1 → 1/1 =  1      z=−1 → 1/(−1) = −1
   z= 2 → 1/2 =  0,5    z=−2 → −0,5
   z= 3 → 1/3 ≈ 0,33    z=−3 → −0,33
   ...

2) Größter Wert: je kleiner z>0, desto größer 1/z.
   Kleinstes positives z ist 1 → 1/1 = 1.
   Größer als 1 geht nicht (z≥1 ⇒ 1/z ≤ 1).
   1 wird bei z=1 angenommen, und 1 ∈ M₂.
   → sup = 1 UND max = 1

3) Kleinster Wert: spiegelbildlich für z<0.
   Größtes negatives z ist −1 → 1/(−1) = −1.
   Kleiner als −1 geht nicht (z≤−1 ⇒ 1/z ≥ −1).
   −1 wird bei z=−1 angenommen, und −1 ∈ M₂.
   → inf = −1 UND min = −1

4) Was ist mit 0? Für |z| → ∞ kommt 1/z beliebig
   nahe an 0 (von oben UND unten), aber 1/z = 0
   ist unmöglich (kein z mit 1/z = 0). 0 liegt
   aber MITTEN in der Menge, ist also keine Schranke.

Ergebnis: sup = max = 1,  inf = min = −1.`}</pre>
            </>,
            <>
              <p>Vergleich, damit der 0-Trugschluss klar wird: N = {'{ 1/z : z ∈ ℕ* }'} (nur positive z).</p>
              <pre className="hint-code-block">{`N = {1, 1/2, 1/3, ...} – nur positiv.
sup = max = 1 (z=1).
Hier ist 0 das untere Ende: inf = 0, aber 0 ∉ N
→ kein Minimum. (Bei M₂ war 0 KEINE Schranke!)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> inf = 0, weil 1/z → 0 für |z| → ∞ → <strong>✅ Richtig:</strong> M₂ enthält negative Werte bis −1 (z=−1), also liegt 0 mitten drin und ist keine untere Schranke; inf = −1 (und sogar min, weil −1 ∈ M₂).</li>
              <li><strong>❌ Falsch:</strong> sup = 1 nennen, ohne max zu prüfen → <strong>✅ Richtig:</strong> z=1 ∈ ℤ\{'\\'}{'{0}'} liefert 1/1 = 1 ∈ M₂, das Supremum wird angenommen → max = 1.</li>
              <li><strong>❌ Falsch:</strong> denken, größere z geben größere Werte → <strong>✅ Richtig:</strong> beim Kehrwert ist es umgekehrt: je größer z &gt; 0, desto KLEINER 1/z; der größte Wert kommt vom kleinsten positiven z (=1).</li>
            </ul>,
            <p>Selbstkontrolle: Gibt es ein Element von M₂ größer als 1 oder kleiner als −1? (Nein, da |z| ≥ 1 ⇒ |1/z| ≤ 1.) Frage: Warum kommt 1/z für große |z| zwar beliebig nahe an 0, aber 0 ist hier weder Schranke noch Element — und warum existiert dennoch sowohl ein Maximum als auch ein Minimum?</p>,
          ),
          solution: 'M₂ enthält Werte 1, −1, 1/2, −1/2, 1/3, −1/3, …\n\nsup = 1 = max  (bei z=1)\ninf = −1 = min  (bei z=−1)',
        },
        {
          letter: 'c',
          text: 'Geben Sie für folgende Teilmengen von ℝ jeweils — falls vorhanden — das Supremum, das Infimum, das Maximum sowie das Minimum an:\n\nM₃ := { 1/n + 1/m : n, m ∈ ℕ* }',
          hint: h(
            <>
              <p>Begriffe wie gehabt: <span className="hint-em">sup</span> = kleinste obere Schranke, <span className="hint-em">max</span> = größtes tatsächlich vorhandenes Element (= sup, falls sup ∈ M); <span className="hint-em">inf</span> = größte untere Schranke, <span className="hint-em">min</span> = kleinstes vorhandenes Element. <span className="hint-em">ℕ*</span> = {'{1, 2, 3, …}'} (natürliche Zahlen ab 1).</p>
              <p>M₃ entsteht aus <span className="hint-em">zwei unabhängigen Variablen</span> n und m. Strategie: Jeder Summand 1/n ist am größten, wenn der Nenner am kleinsten ist (n=1 → 1/n=1), und wird beliebig klein, wenn der Nenner wächst (n→∞ → 1/n→0, aber nie =0). Da beide Variablen gleich aufgebaut sind, behandelt man sie symmetrisch.</p>
              <p>Schlüsselargument für das untere Ende: Eine <span className="hint-em">Summe positiver Zahlen ist positiv</span>. Für alle n, m ∈ ℕ* ist 1/n &gt; 0 und 1/m &gt; 0, also 1/n + 1/m &gt; 0. 0 kann daher nie erreicht werden — es ist nur ein <span className="hint-em">Grenzwert</span> (man kommt beliebig nahe heran), aber kein Element der Menge.</p>
            </>,
            <>
              <p>So bestimmt man sup, inf, max, min von M₃ = {'{ 1/n + 1/m : n, m ∈ ℕ* }'}:</p>
              <pre className="hint-code-block">{`1) Größter Wert: beide Summanden maximal,
   also kleinste Nenner n = m = 1:
   1/1 + 1/1 = 2
   Größer geht nicht: n,m ≥ 1 ⇒ 1/n,1/m ≤ 1
   ⇒ 1/n+1/m ≤ 2.
   2 wird bei n=m=1 angenommen, 2 ∈ M₃.
   → sup = 2 UND max = 2

2) Kleinster Wert: beide Summanden gegen 0,
   also n → ∞ und m → ∞:
   1/n + 1/m  →  0 + 0 = 0
   ABER: für alle n,m ∈ ℕ* gilt
   1/n + 1/m > 0  (Summe zweier positiver Zahlen).
   ⇒ 0 ist untere Schranke, wird aber NIE erreicht.
   → inf = 0,  KEIN Minimum

Ergebnis: sup = max = 2,  inf = 0,  min existiert nicht.`}</pre>
              <p>Warum ist 0 die GRÖSSTE untere Schranke (also wirklich das inf)? Weil man 0 beliebig nahe kommt: zu jeder Schranke s &gt; 0 gibt es n,m groß genug mit 1/n+1/m &lt; s; daher kann keine Zahl &gt; 0 untere Schranke sein.</p>
            </>,
            <>
              <p>Konkrete Annäherung an 0 zum Nachvollziehen:</p>
              <pre className="hint-code-block">{`n=m=10:    1/10+1/10 = 0,2
n=m=100:   0,01+0,01 = 0,02
n=m=1000:  0,001+0,001 = 0,002   → immer > 0, aber → 0`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sup = 2 nennen, ohne max anzugeben → <strong>✅ Richtig:</strong> n=m=1 liefert 1+1 = 2 ∈ M₃; das Supremum wird angenommen, also max = 2.</li>
              <li><strong>❌ Falsch:</strong> min = 0, weil 1/n+1/m → 0 → <strong>✅ Richtig:</strong> 0 ∉ M₃, denn 1/n+1/m &gt; 0 für alle n,m ∈ ℕ*; also inf = 0, aber kein Minimum.</li>
              <li><strong>❌ Falsch:</strong> "n→∞ gibt 1/n = 0" → <strong>✅ Richtig:</strong> 1/n wird nur beliebig klein, ist aber für jedes endliche n echt positiv; den Wert 0 nimmt 1/n nie an.</li>
            </ul>,
            <p>Selbstkontrolle: Nenne ein Element von M₃ kleiner als 0,01 (z. B. n=m=1000 → 0,002) und ein Element gleich 0 (gibt es nicht!). Frage: Warum kann 0 kein Minimum sein, obwohl die Elemente beliebig nahe an 0 herankommen — was ist der Unterschied zwischen "Grenzwert von Elementen" und "Element der Menge"?</p>,
          ),
          solution: 'Größter Wert: n=m=1 → 1+1=2, also max = sup = 2\nKleinste Werte: 1/n+1/m → 0 für n,m → ∞, aber nie = 0\n\nsup = 2 = max,  inf = 0,  min existiert nicht',
        },
        {
          letter: 'd',
          text: 'Geben Sie für folgende Teilmengen von ℝ jeweils — falls vorhanden — das Supremum, das Infimum, das Maximum sowie das Minimum an:\n\nM₄ := { 1/n − 1/m : n, m ∈ ℕ* }',
          hint: h(
            <>
              <p>Gleiche Begriffe (<span className="hint-em">sup</span>/<span className="hint-em">max</span>, <span className="hint-em">inf</span>/<span className="hint-em">min</span>), aber jetzt eine <span className="hint-em">Differenz</span> 1/n − 1/m statt einer Summe. Der Unterschied ist entscheidend: Bei einer Summe (M₃) treffen sich beide Extreme bei kleinen Nennern; bei einer Differenz <span className="hint-em">zieht der eine Summand nach oben, der andere nach unten</span>. Die Extreme entstehen daher, wenn der eine Term groß und der andere klein wird — und das geschieht oft nur im Grenzwert (n oder m → ∞), nicht bei konkreten Werten.</p>
              <p>Strategie: Für das <span className="hint-em">obere Ende</span> macht man den positiven Teil 1/n groß (n klein, n=1 → 1) und den negativen Teil 1/m klein (m groß → 1/m → 0). Für das <span className="hint-em">untere Ende</span> umgekehrt. Dann prüft man, ob der Grenzwert von einem echten Paar (n,m) <span className="hint-em">angenommen</span> wird.</p>
              <p>Schlüssel: 1/m = 0 ist für kein m ∈ ℕ* möglich (1/m &gt; 0 immer). Der Grenzwert 1 (=1 − 0) wird also nie genau erreicht — er ist sup, aber kein max. Analog unten −1 = (0 − 1): inf, aber kein min.</p>
            </>,
            <>
              <p>So bestimmt man sup, inf, max, min von M₄ = {'{ 1/n − 1/m : n, m ∈ ℕ* }'}:</p>
              <pre className="hint-code-block">{`1) Oberes Ende: 1/n groß, 1/m klein.
   Bestes n: n=1 → 1/n = 1.
   m so groß wie möglich: m → ∞ → 1/m → 0.
   1/n − 1/m → 1 − 0 = 1.
   Wird 1 erreicht? Dazu müsste 1/m = 0 sein —
   unmöglich für m ∈ ℕ*. Außerdem 1/n−1/m < 1 immer
   (man zieht etwas Positives ab).
   → sup = 1,  KEIN Maximum

2) Unteres Ende: 1/n klein, 1/m groß.
   n → ∞ → 1/n → 0,  m=1 → 1/m = 1.
   1/n − 1/m → 0 − 1 = −1.
   Wird −1 erreicht? Dazu müsste 1/n = 0 sein —
   unmöglich. Außerdem 1/n−1/m > −1 immer.
   → inf = −1,  KEIN Minimum

Ergebnis: sup = 1, inf = −1,
          max und min existieren NICHT.`}</pre>
              <p>Beispielwerte, die sup/inf umkreisen: n=1, m=1000 → 1 − 0,001 = 0,999 (knapp unter 1); n=1000, m=1 → 0,001 − 1 = −0,999 (knapp über −1).</p>
            </>,
            <>
              <p>Direkter Vergleich M₃ (Summe) gegen M₄ (Differenz):</p>
              <pre className="hint-code-block">{`M₃ = {1/n + 1/m}: oberes Extrem 2 bei n=m=1
   → 2 ist ein echtes Element → max = 2 EXISTIERT.
M₄ = {1/n − 1/m}: oberes Extrem 1 nur als Grenzwert
   (braucht 1/m = 0) → kein Element → KEIN max.
Gleicher Begriff, anderes Verhalten – wegen + vs −.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> sup = max = 1 (weil 1/n−1/m → 1) → <strong>✅ Richtig:</strong> 1 wird nie angenommen, denn 1/n−1/m = 1 verlangt 1/m = 0 (unmöglich für m ∈ ℕ*); also sup = 1, aber kein max.</li>
              <li><strong>❌ Falsch:</strong> inf = 0, weil 1/n−1/m → 0 für n,m → ∞ → <strong>✅ Richtig:</strong> 0 ist nicht das Minimum der Werte; mit n → ∞ und m=1 geht es bis −1 herunter, also inf = −1.</li>
              <li><strong>❌ Falsch:</strong> annehmen, eine beschränkte Menge habe immer max/min → <strong>✅ Richtig:</strong> Beschränktheit garantiert nur sup/inf; max/min existieren nur, wenn diese Schranke ein echtes Element ist.</li>
            </ul>,
            <p>Selbstkontrolle: Finde ein Element von M₄ größer als 0,99 (n=1, m=1000) und überlege, ob je ein Element genau 1 sein kann (nein). Frage: M₃ und M₄ sind beide beschränkt (durch 2 bzw. 1), aber nur M₃ hat ein Maximum — woran liegt das (wann ist die obere Schranke ein erreichbares Element)?</p>,
          ),
          solution: 'n=1, m→∞: 1/n−1/m → 1 (nie genau 1)\nn→∞, m=1: 1/n−1/m → −1 (nie genau −1)\n\nsup = 1,  inf = −1,  max und min existieren nicht',
        },
      ],
    },
    {
      id: 'b4a5',
      nr: 5,
      title: 'Quantoren und y = x²',
      referenz: ['logik-operatoren'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Welche Aussagen sind wahr?\n\n∀x ∈ ℝ ∃y ∈ ℝ : y = x²',
          hint: h(
            <>
              <p><span className="hint-em">Quantoren</span> sind Symbole für "für alle" und "es gibt": <span className="hint-em">∀</span> (Allquantor) heißt "für alle", <span className="hint-em">∃</span> (Existenzquantor) heißt "es existiert (mindestens) ein". Die Aussage ∀x ∈ ℝ ∃y ∈ ℝ : y = x² liest man: "Für jede reelle Zahl x gibt es (mindestens) eine reelle Zahl y mit y = x²."</p>
              <p>Die <span className="hint-em">Reihenfolge der Quantoren ist entscheidend</span>: Bei ∀x ∃y darf das y, das man findet, von x <em>abhängen</em> — für jedes x sucht man sich passend ein eigenes y. (Bei ∃y ∀x müsste dagegen EIN festes y für alle x gleichzeitig passen — viel stärker.)</p>
              <p><span className="hint-em">Beweisschema für ∀x ∃y</span>: Nimm ein <em>beliebiges, festes</em> x (Formulierung "Sei x ∈ ℝ beliebig"). Gib dann konkret ein y an, das die Bedingung erfüllt — dieses y heißt <span className="hint-em">Zeuge</span>. Da x beliebig war, gilt das Argument für alle x. Hier ist der natürliche Zeuge y := x², denn x² ist für jedes reelle x eine wohldefinierte reelle Zahl.</p>
            </>,
            <>
              <p>So beweist man ∀x ∈ ℝ ∃y ∈ ℝ : y = x² (Aussage ist WAHR):</p>
              <pre className="hint-code-block">{`1) Beliebiges, festes x annehmen:
   Sei x ∈ ℝ beliebig.

2) Einen Zeugen y angeben (darf von x abhängen):
   Wähle y := x².

3) Bedingung nachprüfen:
   Ist y eine reelle Zahl? Ja, x² ∈ ℝ für jedes x ∈ ℝ.
   Gilt y = x²? Ja, per Wahl von y. ✓

4) Da x beliebig war, gilt die Aussage für ALLE x.
   → Aussage ist wahr.`}</pre>
              <p>Warum reicht ein einziger Zeuge pro x? Weil ∃y nur "mindestens ein y" verlangt — y := x² ist ein solches.</p>
            </>,
            <>
              <p>Weitere wahre ∀x ∃y-Aussagen (gleiches Schema):</p>
              <pre className="hint-code-block">{`∀x∈ℝ ∃y∈ℝ: y = 2x      → Zeuge y := 2x
∀x∈ℝ ∃y∈ℝ: y = x + 1   → Zeuge y := x+1
∀n∈ℕ ∃m∈ℕ: m > n       → Zeuge m := n+1
Gemeinsam: y (bzw. m) hängt vom vorher gewählten
x (bzw. n) ab — das ist bei ∀…∃ erlaubt.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∀x∃y mit ∃y∀x gleichsetzen → <strong>✅ Richtig:</strong> die Reihenfolge zählt. ∀x∃y erlaubt y = x² (für jedes x ein eigenes y); ∃y∀x verlangt ein festes y für alle x — das wäre hier falsch.</li>
              <li><strong>❌ Falsch:</strong> y müsse eine Konstante (von x unabhängig) sein → <strong>✅ Richtig:</strong> bei ∀x∃y darf y von x abhängen; y := x² ist völlig zulässig.</li>
              <li><strong>❌ Falsch:</strong> behaupten, man müsse für jedes x rechnen → <strong>✅ Richtig:</strong> ein x beliebig wählen genügt; die Beliebigkeit überträgt das Argument auf alle x.</li>
            </ul>,
            <p>Selbstkontrolle: Setze x = −3: y := (−3)² = 9 ∈ ℝ und 9 = (−3)² ✓. Frage: Was erlaubt die Reihenfolge ∀x∃y, das ∃y∀x nicht erlaubt — und warum macht gerade die Abhängigkeit von y von x die Aussage wahr?</p>,
          ),
          solution: 'Wahr. Für jedes x ∈ ℝ wähle y := x². Dann gilt y = x².',
        },
        {
          letter: 'b',
          text: 'Welche Aussagen sind wahr?\n\n∃x ∈ ℝ ∀y ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>∃x ∈ ℝ ∀y ∈ ℝ : y = x² liest man: "Es gibt (mindestens) eine feste reelle Zahl x, sodass für ALLE reellen y gilt y = x²." Hier kommt <span className="hint-em">∃ vor ∀</span> — das x wird also <em>zuerst und ein für alle Mal festgelegt</em> und muss danach mit jedem beliebigen y zusammenpassen.</p>
              <p>Das ist eine sehr starke Behauptung: ein einziges x² müsste gleichzeitig 0, 1, 5, −7, … sein, also jeden reellen Wert y treffen. Eine feste Zahl kann aber nur EINEN Wert haben.</p>
              <p><span className="hint-em">Eine Existenzaussage widerlegen</span>: Man führt einen <span className="hint-em">Widerspruchsbeweis</span> — angenommen, ein passendes x₀ existiert; dann leitet man durch Einsetzen eines konkreten y eine unmögliche Gleichung her. Praktisch nutzt man, dass <span className="hint-em">x² ≥ 0 für alle reellen x</span> (ein Quadrat ist nie negativ). Wählt man ein negatives y, kann x₀² es nicht erreichen.</p>
            </>,
            <>
              <p>So zeigt man, dass ∃x ∈ ℝ ∀y ∈ ℝ : y = x² FALSCH ist:</p>
              <pre className="hint-code-block">{`Widerspruchsbeweis:
1) Angenommen, es gäbe ein festes x₀ ∈ ℝ mit
   y = x₀² für ALLE y ∈ ℝ.

2) Diese Allaussage muss dann für jedes konkrete y
   stimmen. Setze zwei verschiedene y ein:
   y = 0:  0 = x₀²
   y = 1:  1 = x₀²

3) Aus 0 = x₀² und 1 = x₀² folgt 0 = 1 — Widerspruch.
   (Alternativ direkt y = −1: −1 = x₀², aber x₀² ≥ 0,
    also nie −1 → Widerspruch.)

4) Die Annahme war falsch → es gibt kein solches x₀.
   → Aussage ist FALSCH.`}</pre>
            </>,
            <>
              <p>Direkter Vergleich der zwei Reihenfolgen:</p>
              <pre className="hint-code-block">{`∀x∃y: y=x²  → WAHR  (für jedes x ein eigenes y:=x²)
∃x∀y: y=x²  → FALSCH (ein festes x² kann nicht
                       jeden Wert y sein)
Der Wertebereich von x² ist [0,∞), nicht ganz ℝ.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur ein y testen (z. B. y &gt; 0) und auf "wahr" schließen → <strong>✅ Richtig:</strong> ∀y verlangt ALLE y; schon zwei verschiedene y (oder ein negatives) erzeugen den Widerspruch → Aussage falsch.</li>
              <li><strong>❌ Falsch:</strong> ∃x∀y wie ∀x∃y behandeln → <strong>✅ Richtig:</strong> hier wird x ZUERST fest gewählt, dann muss y = x₀² für jedes y gelten; ein festes x₀² kann nicht alle y sein.</li>
              <li><strong>❌ Falsch:</strong> meinen, irgendein cleveres x₀ rette die Aussage → <strong>✅ Richtig:</strong> egal welches x₀, x₀² ist genau eine Zahl und trifft daher nicht alle y.</li>
            </ul>,
            <p>Selbstkontrolle: Gibt es ein x mit x² = 0 UND x² = 1 gleichzeitig? (Nein.) Frage: Warum ist ∃x∀y so viel stärker als ∀x∃y, und an welcher Eigenschaft von x² (Wertebereich [0,∞), nur ein Wert pro x) scheitert die Behauptung?</p>,
          ),
          solution: 'Falsch. Für jedes fixe x gilt x² ≥ 0, also kann y = −1 nicht erfüllt werden.',
        },
        {
          letter: 'c',
          text: 'Welche Aussagen sind wahr?\n\n∃x ∈ ℝ ∃y ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>∃x ∈ ℝ ∃y ∈ ℝ : y = x² liest man: "Es gibt (mindestens) eine reelle Zahl x UND eine reelle Zahl y mit y = x²." Beide Quantoren sind <span className="hint-em">∃ (es existiert)</span> — das ist die schwächste, am leichtesten erfüllbare Form.</p>
              <p><span className="hint-em">Eine Existenzaussage beweist man durch ein einziges konkretes Beispiel</span> (einen Zeugen). Man muss nicht alle Möglichkeiten prüfen — ein passendes Paar (x, y) genügt, denn ∃ verlangt nur "mindestens eines". Am einfachsten wählt man Zahlen, die die Gleichung offensichtlich erfüllen.</p>
              <p>Zur Einordnung: ∀ ("für alle") ist schwer zu erfüllen (muss immer gelten), ∃ ("es gibt") ist leicht (ein Treffer reicht). Bei zwei ∃ darf man sich beide Zahlen frei aussuchen.</p>
            </>,
            <>
              <p>So beweist man ∃x ∈ ℝ ∃y ∈ ℝ : y = x² (Aussage ist WAHR):</p>
              <pre className="hint-code-block">{`1) Ein konkretes Paar wählen (Zeugen angeben):
   Wähle x = 1 und y = 1.

2) Bedingung prüfen:
   x, y ∈ ℝ? Ja, 1 ∈ ℝ.
   y = x²?  1 = 1² = 1 ✓

3) Ein Beispiel genügt für ∃x∃y.
   → Aussage ist wahr.`}</pre>
              <p>Warum reicht das? ∃x∃y fragt nur, OB es ein Paar gibt — wir haben eines vorgezeigt.</p>
            </>,
            <>
              <p>Viele weitere gültige Zeugen (jeder allein beweist die Aussage):</p>
              <pre className="hint-code-block">{`x=0,  y=0:   0 = 0²    ✓
x=−2, y=4:   4 = (−2)² ✓
x=3,  y=9:   9 = 3²    ✓
Das einfachste ist x=0, y=0.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> für ∃x∃y alle Paare prüfen wollen → <strong>✅ Richtig:</strong> ein einziges konkretes Paar (z. B. x=1, y=1) genügt als vollständiger Beweis.</li>
              <li><strong>❌ Falsch:</strong> ein Paar wählen, das die Gleichung NICHT erfüllt (z. B. x=1, y=2) → <strong>✅ Richtig:</strong> der Zeuge muss y = x² tatsächlich erfüllen; x=1, y=2 scheitert (2 ≠ 1), x=1, y=1 passt.</li>
            </ul>,
            <p>Selbstkontrolle: Erfüllt dein Paar wirklich y = x²? (Setze ein und vergleiche.) Frage: Warum ist ∃x∃y die schwächste der fünf Quantor-Varianten, und wie sähe eine Existenzaussage aus, die trotzdem falsch wäre (z. B. ∃x ∈ ℝ : x² = −1)?</p>,
          ),
          solution: 'Wahr. Beispiel: x = 1, y = 1, dann y = 1 = 1².',
        },
        {
          letter: 'd',
          text: 'Welche Aussagen sind wahr?\n\n∀y ∈ ℝ ∃x ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>∀y ∈ ℝ ∃x ∈ ℝ : y = x² liest man: "Für JEDE reelle Zahl y gibt es eine reelle Zahl x mit y = x²." Anders gesagt: Jedes y soll als Quadrat einer reellen Zahl darstellbar sein (ein "<span className="hint-em">Urbild</span>" x unter dem Quadrieren haben).</p>
              <p><span className="hint-em">Eine ∀-Aussage widerlegen</span>: Es genügt ein einziges <span className="hint-em">Gegenbeispiel</span> — ein konkretes y, für das KEIN passendes x existiert. (Eine Allaussage muss für alle gelten; ein einziger Ausreißer kippt sie.)</p>
              <p>Schlüsselfakt: <span className="hint-em">x² ≥ 0 für alle reellen x</span> (ein Quadrat ist nie negativ). Der <span className="hint-em">Wertebereich</span> (die Menge aller möglichen Ergebnisse) von x² ist also [0, ∞), nicht ganz ℝ. Negative y liegen außerhalb — für sie gibt es kein x. Die <span className="hint-em">Wurzel</span> √y ist für negative y über den reellen Zahlen gar nicht definiert.</p>
            </>,
            <>
              <p>So zeigt man, dass ∀y ∈ ℝ ∃x ∈ ℝ : y = x² FALSCH ist:</p>
              <pre className="hint-code-block">{`Gegenbeispiel angeben:
1) Wähle ein konkretes y, das scheitert: y = −1.

2) Gibt es ein x ∈ ℝ mit x² = −1?
   Für jedes reelle x gilt x² ≥ 0.
   Also x² = −1 ist unmöglich.

3) Für y = −1 existiert kein passendes x.
   → die Allaussage "für JEDES y" ist verletzt.
   → Aussage ist FALSCH.`}</pre>
              <p>Ein einziges solches y reicht; man muss nicht alle negativen y aufzählen.</p>
            </>,
            <>
              <p>Vergleich, der zeigt, dass es am Bereich von y liegt:</p>
              <pre className="hint-code-block">{`∀y∈[0,∞) ∃x∈ℝ: y=x²  → WAHR
   (für y ≥ 0 ist x := √y reell und x² = y)
∀y∈ℝ     ∃x∈ℝ: y=x²  → FALSCH
   (y = −1 hat kein reelles Urbild)
Unterschied: nur der erlaubte Bereich von y.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> nur y ≥ 0 testen und "wahr" schließen → <strong>✅ Richtig:</strong> ∀y meint ALLE reellen y, auch negative; ein Gegenbeispiel y = −1 (mit x² ≥ 0 unerreichbar) widerlegt die Aussage.</li>
              <li><strong>❌ Falsch:</strong> x := √(−1) "berechnen" → <strong>✅ Richtig:</strong> √ ist auf negativen reellen Zahlen nicht definiert; y = −1 hat schlicht kein reelles Urbild.</li>
              <li><strong>❌ Falsch:</strong> viele Gegenbeispiele suchen → <strong>✅ Richtig:</strong> ein einziges (y = −1) genügt zum Widerlegen einer Allaussage.</li>
            </ul>,
            <p>Selbstkontrolle: Gibt es ein reelles x mit x² = −4? (Nein.) Frage: Der Wertebereich von x² ist [0, ∞) — für welche y scheitert "y = x²" deshalb, und warum reicht ein einziges solches y, um die ∀-Aussage zu kippen?</p>,
          ),
          solution: 'Falsch. Gegenbeispiel: y = −1. Es gibt kein x ∈ ℝ mit x² = −1.',
        },
        {
          letter: 'e',
          text: 'Welche Aussagen sind wahr?\n\n∃y ∈ ℝ ∀x ∈ ℝ : y = x²',
          hint: h(
            <>
              <p>∃y ∈ ℝ ∀x ∈ ℝ : y = x² liest man: "Es gibt EIN festes reelles y, sodass für ALLE reellen x gilt y = x²." Hier kommt <span className="hint-em">∃ vor ∀</span>: das y wird zuerst ein für alle Mal festgelegt und muss dann mit JEDEM x zusammenpassen — also mit allen Quadraten x² gleichzeitig übereinstimmen.</p>
              <p>Das kann nicht klappen, weil <span className="hint-em">verschiedene x verschiedene Quadrate liefern</span> (1² = 1, 2² = 4, …), eine feste Zahl y aber nur einen einzigen Wert hat.</p>
              <p><span className="hint-em">Eine ∃-Aussage mit innerem ∀ widerlegen</span>: Man nimmt an, ein festes y₀ existiere, und setzt zwei <em>verschiedene</em> x ein, die zwei verschiedene Werte erzwingen — das ergibt einen Widerspruch (y₀ müsste beide Werte sein). Wichtig: Da y zuerst fest ist, darf es NICHT von x abhängen (anders als bei ∀x∃y).</p>
            </>,
            <>
              <p>So zeigt man, dass ∃y ∈ ℝ ∀x ∈ ℝ : y = x² FALSCH ist:</p>
              <pre className="hint-code-block">{`Widerspruchsbeweis:
1) Angenommen, es gäbe ein festes y₀ ∈ ℝ mit
   y₀ = x² für ALLE x ∈ ℝ.

2) Zwei verschiedene x einsetzen (y₀ ist fest!):
   x = 1:  y₀ = 1² = 1
   x = 2:  y₀ = 2² = 4

3) Dann wäre y₀ = 1 UND y₀ = 4, also 1 = 4.
   Das ist falsch → Widerspruch.

4) Die Annahme war falsch → kein solches y₀.
   → Aussage ist FALSCH.`}</pre>
            </>,
            <>
              <p>Vergleich der Reihenfolgen (gleicher Term, anderes Ergebnis):</p>
              <pre className="hint-code-block">{`∃y∀x: y=x²  → FALSCH (ein festes y kann nicht
                       alle Quadrate gleichzeitig sein)
∀x∃y: y=x²  → WAHR   (für jedes x ein eigenes y:=x²;
                       y darf von x abhängen)
Merksatz: bei ∃y∀x ist y UNABHÄNGIG von x zu wählen.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ∃y∀x mit ∀x∃y gleichsetzen → <strong>✅ Richtig:</strong> die Reihenfolge zählt; bei ∃y∀x muss y unabhängig von x sein, und x=1, x=2 liefern verschiedene Quadrate → kein gemeinsames y.</li>
              <li><strong>❌ Falsch:</strong> y = 0 als Rettung prüfen: 0 = 1²? → <strong>✅ Richtig:</strong> 0 ≠ 1, also versagt y=0 schon bei x=1; kein festes y funktioniert.</li>
              <li><strong>❌ Falsch:</strong> nur ein x einsetzen und y darauf anpassen → <strong>✅ Richtig:</strong> man braucht zwei verschiedene x, um zu zeigen, dass ein FESTES y nicht beide treffen kann.</li>
            </ul>,
            <p>Selbstkontrolle: Kann eine einzige Zahl y₀ gleichzeitig 1 und 4 sein? (Nein.) Frage: Warum kann kein festes y zugleich 1² und 2² sein, und wann wäre ∃y∀x : y = x² ausnahmsweise wahr (etwa wenn der x-Bereich nur aus einem einzigen Wert bestünde)?</p>,
          ),
          solution: 'Falsch. x=1 liefert y=1, x=2 liefert y=4. Kein festes y passt zu allen x.',
        },
      ],
    },
    {
      id: 'b4a6',
      nr: 6,
      title: 'Euklidischer Algorithmus (Wenn noch Zeit ist)',
      referenz: ['rekursive-folgen'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Bestimmen Sie mit Hilfe des euklidischen Algorithmus\n(i)  ggT(156, −64),\n(ii) ggT(−296, −96),\n(iii) ggT(34, 21). Was fällt auf?',
          hint: h(
            <>
              <p>Der <span className="hint-em">größte gemeinsame Teiler ggT(a, b)</span> ist die größte Zahl, die a UND b ohne Rest teilt (z. B. ggT(12, 8) = 4). Er ist per Definition ≥ 0, deshalb gilt für negative Eingaben <span className="hint-em">ggT(a, b) = ggT(|a|, |b|)</span> — man rechnet mit den Beträgen weiter (|a| = a ohne Vorzeichen).</p>
              <p><span className="hint-em">Division mit Rest</span>: Jede Zahl a lässt sich als a = q·b + r schreiben mit dem <span className="hint-em">Quotienten</span> q (wie oft b ganz hineinpasst) und dem <span className="hint-em">Rest</span> r mit 0 ≤ r &lt; b. Der Rest ist r = a − q·b.</p>
              <p>Der <span className="hint-em">euklidische Algorithmus</span> nutzt die Grundidee ggT(a, b) = ggT(b, r): man darf das Paar (a, b) durch das kleinere Paar (b, r) ersetzen, ohne den ggT zu ändern. Man wiederholt das, bis der Rest 0 ist — der <span className="hint-em">letzte Rest ungleich 0</span> ist der gesuchte ggT. (Warum es endet: die Reste werden bei jedem Schritt echt kleiner und bleiben ≥ 0, müssen also irgendwann 0 erreichen.)</p>
            </>,
            <>
              <p>So rechnet man die drei ggT (jeweils Beträge, dann Division mit Rest):</p>
              <pre className="hint-code-block">{`(i) ggT(156, −64) = ggT(156, 64):
   156 = 2·64 + 28   (Rest 156 − 2·64 = 28)
    64 = 2·28 +  8   (Rest 64 − 2·28 = 8)
    28 = 3·8  +  4   (Rest 28 − 3·8  = 4)
     8 = 2·4  +  0   ← Rest 0, stop
   letzter Rest ≠ 0 ist 4 → ggT = 4

(ii) ggT(−296, −96) = ggT(296, 96):
   296 = 3·96 + 8    (296 − 3·96 = 8)
    96 = 12·8 + 0    ← Rest 0
   → ggT = 8

(iii) ggT(34, 21):
   34 = 1·21 + 13
   21 = 1·13 +  8
   13 = 1·8  +  5
    8 = 1·5  +  3
    5 = 1·3  +  2
    3 = 1·2  +  1
    2 = 2·1  +  0    ← Rest 0
   → ggT = 1
   Auffällig: die Reste 13, 8, 5, 3, 2, 1 sind
   Fibonacci-Zahlen (jede = Summe der zwei vorigen).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel zum Einüben: ggT(48, 18).</p>
              <pre className="hint-code-block">{`48 = 2·18 + 12   (Rest 12)
18 = 1·12 +  6   (Rest 6)
12 = 2·6  +  0   ← Rest 0
→ ggT(48, 18) = 6  (Probe: 48/6=8, 18/6=3 ✓)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ggT(156, −64) = −4 (Vorzeichen übernommen) → <strong>✅ Richtig:</strong> der ggT ist ≥ 0; rechne mit Beträgen: ggT(156, 64) = 4.</li>
              <li><strong>❌ Falsch:</strong> Rest 156 − 64 = 92 als "156 mod 64" → <strong>✅ Richtig:</strong> 64 passt ZWEImal in 156 (2·64 = 128); Rest = 156 − 2·64 = 28 (der Rest muss kleiner als der Divisor 64 sein).</li>
              <li><strong>❌ Falsch:</strong> beim Rest 0 die 0 als ggT nehmen → <strong>✅ Richtig:</strong> der ggT ist der LETZTE Rest ungleich 0 (hier 4), nicht die abschließende 0.</li>
            </ul>,
            <p>Selbstkontrolle: Teilt der gefundene ggT wirklich beide Zahlen? (z. B. 156/4 = 39, 64/4 = 16 ✓.) Frage: Warum endet der Algorithmus immer (was passiert mit den Resten in jedem Schritt), und warum kosten ausgerechnet Fibonacci-Zahlen wie 34 und 21 die meisten Schritte (Quotient immer 1)?</p>,
          ),
          solution: '(i) ggT(156,−64) = ggT(156,64) = 4\n  156 = 2·64+28,  64 = 2·28+8,  28 = 3·8+4,  8 = 2·4+0\n\n(ii) ggT(−296,−96) = ggT(296,96) = 8\n  296 = 3·96+8,  96 = 12·8+0\n\n(iii) ggT(34,21) = 1\n  34=1·21+13, 21=1·13+8, 13=1·8+5, 8=1·5+3, 5=1·3+2, 3=1·2+1, 2=2·1+0\n  Die Reste 13,8,5,3,2,1 sind gerade die ersten Fibonacci-Zahlen.',
        },
        {
          letter: 'b',
          text: '(Erweiterter euklidischer Algorithmus) Finden Sie Zahlen s, t ∈ ℤ so, dass\n\nggT(156, −64) = s · 156 + t · (−64).\n\nHinweis: Gehen Sie Ihre Rechenschritte aus Teil (a)(i) in umgekehrter Reihenfolge durch.',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Linearkombination</span> von 156 und 64 ist ein Ausdruck der Form s·156 + t·64 mit ganzen Zahlen s, t. Der <span className="hint-em">Satz von Bézout</span> sagt: Den ggT(a, b) kann man immer so schreiben — es gibt s, t ∈ ℤ mit s·a + t·b = ggT(a, b). Der <span className="hint-em">erweiterte euklidische Algorithmus</span> findet diese s, t.</p>
              <p>Methode: Man nimmt die Divisionsschritte aus Teil (a)(i) und liest jeden als <span className="hint-em">Restformel</span>: aus a = q·b + r wird r = a − q·b. Dann <span className="hint-em">rückwärts einsetzen</span> — beginnend beim ggT (=4) ersetzt man Schritt für Schritt jeden Rest durch seine Restformel, bis nur noch die Originalzahlen 156 und 64 dastehen.</p>
              <p>Wichtige Rechenregel beim Einsetzen: Beim Ausmultiplizieren eines Minus vor einer Klammer drehen sich die Vorzeichen: −3·(64 − 2·28) = −3·64 + 6·28. Und gleiche Terme fasst man zusammen: 28 + 6·28 = 7·28. Zum Schluss macht man aus +17·64 die geforderte Form +17·(−64), indem man 64 = −(−64) nutzt: −17·64 = +17·(−64).</p>
            </>,
            <>
              <p>So findet man s, t mit ggT(156, −64) = s·156 + t·(−64):</p>
              <pre className="hint-code-block">{`Schritte aus (a)(i) als Restformeln (r = a − q·b):
   28 = 156 − 2·64      (A)
    8 = 64  − 2·28      (B)
    4 = 28  − 3·8       (C)   ← hier steht der ggT 4

Rückwärts einsetzen, beim ggT beginnen:
1) Mit (C) starten:
   4 = 28 − 3·8

2) 8 aus (B) einsetzen (8 = 64 − 2·28):
   4 = 28 − 3·(64 − 2·28)
     = 28 − 3·64 + 6·28        [−3·(−2·28)=+6·28]
     = 7·28 − 3·64             [28 + 6·28 = 7·28]

3) 28 aus (A) einsetzen (28 = 156 − 2·64):
   4 = 7·(156 − 2·64) − 3·64
     = 7·156 − 14·64 − 3·64    [7·(−2·64)=−14·64]
     = 7·156 − 17·64           [−14·64 − 3·64 = −17·64]

4) In die geforderte Form mit (−64) bringen:
   −17·64 = +17·(−64)
   → 4 = 7·156 + 17·(−64)

Ergebnis: s = 7,  t = 17.
Probe: 7·156 + 17·(−64) = 1092 − 1088 = 4 ✓`}</pre>
            </>,
            <>
              <p>Einfacheres Übungsbeispiel: ggT(13, 8) = 1 als Linearkombination.</p>
              <pre className="hint-code-block">{`Restformeln:  5 = 13 − 1·8
              3 = 8 − 1·5
              2 = 5 − 1·3
              1 = 3 − 1·2   ← ggT
Rückwärts:
1 = 3 − 1·2
  = 3 − 1·(5 − 1·3) = 2·3 − 1·5
  = 2·(8 − 1·5) − 1·5 = 2·8 − 3·5
  = 2·8 − 3·(13 − 1·8) = 5·8 − 3·13
→ 1 = (−3)·13 + 5·8   (Probe: −39 + 40 = 1 ✓)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> bei 7·28 − 3·64 aufhören → <strong>✅ Richtig:</strong> 28 ist keine Originalzahl; mit (A) ersetzen: 28 = 156 − 2·64, dann 4 = 7·156 − 17·64.</li>
              <li><strong>❌ Falsch:</strong> −3·(64 − 2·28) = −3·64 + 2·28 (Vorfaktor falsch) → <strong>✅ Richtig:</strong> −3·(−2·28) = +6·28, also −3·(64 − 2·28) = −3·64 + 6·28; zusammen mit dem +28 ergibt das 7·28.</li>
              <li><strong>❌ Falsch:</strong> die Probe weglassen → <strong>✅ Richtig:</strong> immer 7·156 + 17·(−64) = 1092 − 1088 = 4 nachrechnen; die Probe deckt Vorzeichen-/Rechenfehler sofort auf.</li>
            </ul>,
            <p>Selbstkontrolle: Rechne die Probe selbst: 7·156 = 1092, 17·64 = 1088, Differenz = 4 ✓. Frage: Was garantiert der Satz von Bézout (gibt es immer solche s, t für d = ggT(a,b)?), und warum ist d die kleinste positive Zahl, die sich als s·a + t·b schreiben lässt?</p>,
          ),
          solution: 'Rückwärts durch (a)(i):\n  4 = 28 − 3·8\n    = 28 − 3·(64 − 2·28) = 7·28 − 3·64\n    = 7·(156 − 2·64) − 3·64 = 7·156 − 17·64\n    = 7·156 + 17·(−64)\n\ns = 7,  t = 17\nProbe: 7·156 + 17·(−64) = 1092 − 1088 = 4 ✓',
        },
      ],
    },
    {
      id: 'b4a7',
      nr: 7,
      title: 'Gleichheiten für Summen und Produkte (Wenn noch Zeit ist)',
      referenz: ['summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Sei n ∈ ℕ*. Desweiteren sei aₖ für jedes k ∈ ℕ* eine reelle Zahl. Welche Gleichheiten gelten für jede Wahl von n und aₖ?\n\n(i)   '}
              <M>{'\\sum_{k=1}^{n} k^3 = \\sum_{k=2}^{n+1} (k+1)^3'}</M>
              {'\n(ii)  '}
              <M>{'\\sum_{k=1}^{n} k^3 = \\sum_{l=3}^{n+2} (l-2)^3'}</M>
              {'\n(iii) '}
              <M>{'\\left(\\sum_{k=1}^{n} a_k\\right) \\cdot \\left(\\sum_{k=1}^{n} a_k\\right) = \\sum_{k=1}^{n} a_k^2'}</M>
              {'\n(iv)  '}
              <M>{'\\left(\\prod_{k=1}^{n} a_k\\right) \\cdot \\left(\\prod_{k=1}^{n} a_k\\right) = \\prod_{k=1}^{n} a_k^2'}</M>
              {'\n(v)   '}
              <M>{'4 \\cdot \\sum_{k=1}^{n} a_k = \\sum_{k=1}^{n} 4 a_k'}</M>
              {'\n(vi)  '}
              <M>{'4 \\cdot \\prod_{k=1}^{n} a_k = \\prod_{k=1}^{n} (4 a_k)'}</M>
            </>
          ),
          hint: h(
            <>
              <p>Zur Erinnerung: <span className="hint-em">Σ(k=1..n) f(k)</span> ist die Summe f(1)+…+f(n), <span className="hint-em">∏(k=1..n) f(k)</span> das Produkt f(1)·…·f(n). Gefragt ist, welche Gleichheiten für JEDES n und JEDE Wahl der aₖ gelten ("allgemeingültig").</p>
              <p>Zwei Beweistechniken braucht man hier:</p>
              <ul>
                <li><span className="hint-em">Indexverschiebung (Substitution)</span>: Man darf den Laufindex umbenennen, etwa l = k + c. Dann muss man BEIDES anpassen: die Grenzen (jede um c verschieben) UND den Summanden (k durch l − c ersetzen). Eine Verschiebung ist nur dann korrekt, wenn die aufgelisteten Summanden danach dieselben sind.</li>
                <li><span className="hint-em">Widerlegung durch Gegenbeispiel</span>: Eine "für jede Wahl"-Behauptung ist falsch, sobald EINE konkrete Wahl (z. B. n=2, a₁=a₂=1) sie verletzt. Ein einziges Gegenbeispiel genügt.</li>
              </ul>
              <p>Schlüssel-Fakten: <span className="hint-em">(Summe)² ≠ Summe der Quadrate</span>, denn (a₁+a₂)² = a₁²+2a₁a₂+a₂² enthält Kreuzterme. Aber <span className="hint-em">(Produkt)² = Produkt der Quadrate</span>: (a₁·…·aₙ)² = a₁²·…·aₙ². Konstante aus Summe ziehen ist erlaubt (4·Σaₖ = Σ4aₖ, "Linearität"), aus Produkt aber NICHT in derselben Weise: ∏(4aₖ) multipliziert die 4 n-mal, ergibt 4ⁿ·∏aₖ.</p>
            </>,
            <>
              <p>So prüft man alle sechs Gleichheiten einzeln:</p>
              <pre className="hint-code-block">{`(i) ∑(k=1..n) k³ =? ∑(k=2..n+1) (k+1)³
   Rechte Seite ausschreiben (k=2,3,…,n+1):
   (2+1)³ + (3+1)³ + … = 3³ + 4³ + … + (n+2)³
   Linke Seite: 1³ + 2³ + … + n³ — andere Summanden!
   → FALSCH

(ii) ∑(k=1..n) k³ =? ∑(l=3..n+2) (l−2)³
   Substitution l = k+2 (also k = l−2):
   k=1 → l=3, k=n → l=n+2 (Grenzen passen),
   Summand k³ = (l−2)³ (passt).
   Beide Seiten listen 1³,2³,…,n³ → WAHR

(iii) (∑aₖ)·(∑aₖ) =? ∑aₖ²
   Gegenbeispiel n=2, a₁=a₂=1:
   (1+1)·(1+1) = 4,  aber 1²+1² = 2.  4 ≠ 2
   → FALSCH (es fehlen die Kreuzterme 2a₁a₂)

(iv) (∏aₖ)·(∏aₖ) =? ∏aₖ²
   (a₁·…·aₙ)² = a₁²·…·aₙ²  (jeder Faktor quadriert)
   → WAHR

(v) 4·∑aₖ =? ∑4aₖ
   4(a₁+…+aₙ) = 4a₁+…+4aₙ  (Distributivgesetz)
   → WAHR

(vi) 4·∏aₖ =? ∏(4aₖ)
   ∏(4aₖ) = (4a₁)(4a₂)…(4aₙ) = 4ⁿ·(a₁…aₙ) = 4ⁿ·∏aₖ
   Gegenbeispiel n=2, a₁=a₂=1:
   4·(1·1) = 4,  aber (4·1)(4·1) = 16.  4 ≠ 16
   → FALSCH

Allgemeingültig sind nur (ii), (iv), (v).`}</pre>
            </>,
            <>
              <p>Warum (iii) scheitert — die Kreuzterme sichtbar gemacht:</p>
              <pre className="hint-code-block">{`(a₁+a₂)² = a₁² + 2a₁a₂ + a₂²
∑aₖ²     = a₁² +          a₂²
Differenz: 2a₁a₂ (die "Kreuzterme") fehlt rechts.
Nur wenn a₁a₂ = 0 wären beide gleich — nicht "für jede Wahl".`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> bei (i) denken, Indexverschiebung ändere nur die Grenzen, nicht den Summanden → <strong>✅ Richtig:</strong> verschiebt man k → k+1, wird aus dem Summanden k³ der Summand (k+1)³; rechts steht (k+1)³ bei k=2..n+1, also 3³,…,(n+2)³ — nicht 1³,…,n³. (i) ist falsch.</li>
              <li><strong>❌ Falsch:</strong> bei (vi) 4·∏aₖ = ∏(4aₖ) annehmen (wie bei der Summe) → <strong>✅ Richtig:</strong> im Produkt wird die 4 mit JEDEM der n Faktoren multipliziert: ∏(4aₖ) = 4ⁿ·∏aₖ; nur für n=1 wäre 4 = 4¹.</li>
              <li><strong>❌ Falsch:</strong> (∑aₖ)² = ∑aₖ² setzen → <strong>✅ Richtig:</strong> beim Quadrieren einer Summe entstehen Kreuzterme (2a₁a₂ + …), die in ∑aₖ² fehlen.</li>
            </ul>,
            <p>Selbstkontrolle: Teste (iv) und (v) auch mit n=2, a₁=2, a₂=3: (iv) (2·3)² = 36 = 2²·3² ✓; (v) 4·(2+3) = 20 = 4·2 + 4·3 ✓. Frage: Welche Operation (Summe oder Produkt) "verträgt sich" mit dem Quadrieren bzw. mit dem Herausziehen einer Konstanten, und warum macht der Unterschied (Kreuzterme bzw. Faktor 4ⁿ) genau (iii) und (vi) falsch?</p>,
          ),
          solution: '(i)  falsch: Index­shift ergibt (k+2)³, nicht k³.\n(ii) wahr: Substitution l=k+2 liefert exakt dieselbe Summe.\n(iii) falsch: (∑aₖ)² enthält Kreuzterme. Gegenbeispiel: a₁=a₂=1 → 4 ≠ 2.\n(iv) wahr: (a₁·…·aₙ)² = a₁²·…·aₙ².\n(v)  wahr: Konstante kann aus der Summe gezogen werden.\n(vi) falsch: ∏(4aₖ) = 4ⁿ·∏aₖ. Gegenbeispiel n=2, a₁=a₂=1 → 4 ≠ 16.\n\nNur (ii), (iv), (v) gelten allgemein.',
        },
      ],
    },
  ],
}
