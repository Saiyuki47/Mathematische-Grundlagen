import type { MatheBlatt } from '../../types'
import { h } from './shared'

export const blatt6: MatheBlatt = {
  id: 'blatt6',
  nr: '6',
  titel: 'Unendliche Mengen, Kombinatorik',
  aufgaben: [
    {
      id: 'b6a1',
      nr: 1,
      title: 'Unendliche Mengen und Abzählbarkeit (Falls noch nicht in der Vorwoche besprochen …)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
          hint: h(
            <>
              <p>Gesucht ist eine <span className="hint-em">echte Teilmenge K ⊊ ℕ</span> und eine <span className="hint-em">Bijektion f : K → ℕ</span>.</p>
              <p>Idee: Ein Element aus ℕ weglassen und die restlichen Elemente passend verschieben.</p>
            </>,
            <>
              <ol>
                <li>Wähle eine echte Teilmenge K ⊊ ℕ: Lass ein Element weg (z.B. das Kleinste)</li>
                <li>Konstruiere eine bijektive Abbildung f : K → ℕ: Verschiebe alle verbliebenen Elemente passend</li>
                <li>Zeige Injektivität: f(n) = f(m) ⟹ n = m — rechne algebraisch nach</li>
                <li>Zeige Surjektivität: Gib für jedes k ∈ ℕ explizit ein n ∈ K an mit f(n) = k</li>
                <li>Schließe: echte Teilmenge + Bijektion auf ganz ℕ → Dedekind-Unendlichkeit</li>
              </ol>
            </>,
            <>
              <p>Analoges Beispiel: Gerade Zahlen ℕ_gerade = {'{0,2,4,…}'} ⊊ ℕ und g : ℕ → ℕ_gerade, n ↦ 2n ist bijektiv.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss eine echte Teilmenge sein (K ≠ ℕ), d.h. mindestens ein Element von ℕ fehlt in K; K = ℕ\{'{0}'} erfüllt das</li>
              <li><strong>❌ Falsch:</strong> „f ist offensichtlich bijektiv" ohne Beweis → <strong>✅ Richtig:</strong> Injektivität und Surjektivität separat zeigen; für Surjektivität: zu jedem k∈ℕ wähle n=k+1 ∈ K mit f(k+1)=(k+1)−1=k ✓</li>
            </ul>,
          ),
          solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
        },
        {
          letter: 'b',
          text: 'Ist ℕ × ℕ abzählbar?',
          hint: h(
            <>
              <p>Eine Menge ist <span className="hint-em">abzählbar</span>, wenn es eine bijektive Abbildung ℕ → M gibt. Für ℕ × ℕ genügt eine systematische Aufzählung aller Paare.</p>
            </>,
            <>
              <ol>
                <li>Um Abzählbarkeit zu zeigen: Gib eine systematische Aufzählung aller Paare (m, n) ∈ ℕ×ℕ an</li>
                <li>Erkläre, warum eine zeilenweise Aufzählung (alle (0,n) dann alle (1,n) …) scheitert</li>
                <li>Gruppiere Paare nach der Summe ihrer Komponenten — jede Diagonalgruppe ist endlich</li>
                <li>Zeige, dass jedes Paar in genau einer Gruppe erscheint und damit eindeutig aufgezählt wird</li>
              </ol>
            </>,
            <p>Allgemein: Jedes endliche kartesische Produkt abzählbarer Mengen ist abzählbar.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℕ×ℕ ist überabzählbar, weil ℕ „unendlich viele Zeilen" mit „unendlich vielen Einträgen" hat → <strong>✅ Richtig:</strong> Die Diagonalen-Aufzählung ordnet jedem (m,n) eine eindeutige natürliche Zahl zu; überabzählbar ist ℝ (Cantor-Diagonale), nicht ℕ×ℕ</li>
            </ul>,
          ),
          solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion ℕ → ℕ×ℕ:\n(0,0), (0,1), (1,0), (0,2), (1,1), (2,0), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
        },
      ],
    },
    {
      id: 'b6a2',
      nr: 2,
      title: 'Kartesisches Produkt und Autonummern',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien M₁, …, Mₙ endliche nicht-leere Mengen. Geben Sie eine Formel für die Anzahl der Elemente des kartesischen Produkts M₁ × … × Mₙ an (ohne Beweis).',
          hint: h(
            <>
              <p>Das <span className="hint-em">kartesische Produkt</span> A × B enthält alle geordneten Paare (a, b). Pro Wert von a gibt es |B| Möglichkeiten für b → insgesamt |A| · |B| Paare.</p>
              <p>Für n Mengen verallgemeinert sich das durch vollständige Induktion.</p>
            </>,
            <>
              <ol>
                <li>Beginne mit dem zweistelligen Fall A × B: Für jedes a ∈ A gibt es |B| mögliche Paare (a, b)</li>
                <li>Da die |A| verschiedenen a-Werte unabhängig voneinander sind, multipliziere: |A × B| = |A| · |B|</li>
                <li>Verallgemeinere durch sukzessive Anwendung desselben Arguments auf drei und mehr Mengen</li>
              </ol>
            </>,
            <p>Anschaulich: Für jeden der |M₁| Werte der ersten Komponente gibt es |M₂| Möglichkeiten für die zweite, usw.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> |M₁ × M₂| = |M₁| + |M₂| (addiert) → <strong>✅ Richtig:</strong> Für jedes der |M₁| Elemente der ersten Komponente gibt es |M₂| Möglichkeiten für die zweite → Multiplikation: |M₁| · |M₂|</li>
              <li><strong>❌ Falsch:</strong> (1,a) = (a,1) → <strong>✅ Richtig:</strong> Im kartesischen Produkt ist die Reihenfolge relevant; (1,a) und (a,1) sind verschiedene geordnete Paare</li>
            </ul>,
          ),
          solution: '|M₁ × ⋯ × Mₙ| = |M₁| · ⋯ · |Mₙ|\n\n(Formal kann die Formel über vollständige Induktion nach n gezeigt werden.)',
        },
        {
          letter: 'b',
          text: 'Wie viele Autonummern der Form\n\n  FD ‐ b₁b₂  z₁z₂z₃\n\ngibt es, wobei b₁ und b₂ jeweils beliebige Buchstaben zwischen A und Z sein können und z₁ ∈ {1, …, 9}, z₂, z₃ ∈ {0, …, 9} gelten soll?',
          hint: h(
            <>
              <p>Jede unabhängige Zeichenwahl wird <span className="hint-em">multipliziert</span> (Produktregel). Es gibt 5 unabhängige Stellen:</p>
              <ul>
                <li>b₁, b₂: je 26 Möglichkeiten (A bis Z)</li>
                <li>z₁: 9 Möglichkeiten (1 bis 9, keine 0)</li>
                <li>z₂, z₃: je 10 Möglichkeiten (0 bis 9)</li>
              </ul>
            </>,
            <>
              <ol>
                <li>Identifiziere jede unabhängige Stelle im Kennzeichen und bestimme ihre Möglichkeiten</li>
                <li>Prüfe für jede Stelle genau, welche Zeichen erlaubt sind — insbesondere ob 0 eingeschlossen ist</li>
                <li>Wende die Produktregel an: Alle Stellenmöglichkeiten werden miteinander multipliziert</li>
              </ol>
            </>,
            <p>Analogie: PIN mit 4 Ziffern (0–9): 10⁴ = 10 000 mögliche PINs.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> z₁ hat 10 Möglichkeiten {'{0,…,9}'} → <strong>✅ Richtig:</strong> Die Aufgabe schreibt z₁ ∈ {'{1,…,9}'} vor (keine führende Null); nur 9 Möglichkeiten</li>
              <li><strong>❌ Falsch:</strong> 26+26+9+10+10 = 81 (Summe) → <strong>✅ Richtig:</strong> Unabhängige Stellen werden multipliziert: 26·26·9·10·10 = 608 400</li>
            </ul>,
          ),
          solution: '|Menge der Autonummern|\n= |{(b₁, b₂, z₁, z₂, z₃) : b₁,b₂ ∈ {A,...,Z}, z₁ ∈ {1,...,9}, z₂,z₃ ∈ {0,...,9}}|\n= |{A,...,Z}| · |{A,...,Z}| · |{1,...,9}| · |{0,...,9}| · |{0,...,9}|\n= 26 · 26 · 9 · 10 · 10\n= 608 400',
        },
      ],
    },
    {
      id: 'b6a3',
      nr: 3,
      title: 'Dualzahlen und Passwörter',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Wie viele fünfstellige Dualzahlen gibt es, die mit 11 beginnen oder mit 00 enden?',
          hint: h(
            <>
              <p><span className="hint-em">Inklusion-Exklusion</span>: |A ∪ B| = |A| + |B| − |A ∩ B|</p>
              <p>A = {'{'}fünfstellige Dualzahlen, die mit 11 beginnen{'}'}, B = {'{'}…, die mit 00 enden{'}'}.</p>
            </>,
            <>
              <ol>
                <li>Definiere Mengen A (mit 11 anfangend) und B (mit 00 endend) und bestimme jeweils die Anzahl freier Stellen</li>
                <li>Berechne |A| und |B| über die Potenzen von 2 (jede freie Stelle hat 2 Möglichkeiten)</li>
                <li>Bestimme A∩B: Welche Stellen sind dann gleichzeitig fest? Wie viele bleiben frei?</li>
                <li>Wende Inklusion-Exklusion an: |A∪B| = |A| + |B| − |A∩B|</li>
              </ol>
            </>,
            <>
              <p>Beispiel: 4-stellige Binärzahlen, die mit 1 beginnen oder mit 0 enden:</p>
              <pre className="hint-code-block">{`A: 1 _ _ _  → 2³ = 8
B: _ _ _ 0  → 2³ = 8
A∩B: 1 _ _ 0  → 2² = 4
|A∪B| = 8+8−4 = 12`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |A∪B| = |A|+|B| = 16 (ohne Subtraktion) → <strong>✅ Richtig:</strong> Zahlen in A∩B werden doppelt gezählt; Inklusion-Exklusion: 8+8−2=14</li>
              <li><strong>❌ Falsch:</strong> A∩B = ∅ weil „11 anfangen" und „00 enden" sich ausschließen → <strong>✅ Richtig:</strong> Eine Dualzahl kann beides haben; 11?00 mit einer freien Stelle → 2 Elemente</li>
            </ul>,
          ),
          solution: 'A = {mit 11 anfangend}: |A| = 2³ = 8\nB = {mit 00 endend}:    |B| = 2³ = 8\nA ∩ B = {11?00}:       |A∩B| = 2¹ = 2\n\n|A ∪ B| = 8 + 8 − 2 = 14',
        },
        {
          letter: 'b',
          text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden?',
          hint: h(
            <p>Jede der 6 Stellen kann unabhängig ein Zeichen aus dem Alphabet der Größe 26 + 10 = 36 sein.</p>,
            <>
              <ol>
                <li>Bestimme das Gesamtalphabet: Wie viele Zeichen stehen insgesamt pro Stelle zur Verfügung?</li>
                <li>Da jede der 6 Stellen unabhängig gewählt wird, wende die Produktregel an</li>
                <li>Das Ergebnis ist eine Potenz: Basis = Alphabetgröße, Exponent = Stellenanzahl</li>
              </ol>
            </>,
            <p>Analogie: 4-stellige PIN aus 10 Ziffern: 10⁴ = 10 000 PINs.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 36·6 = 216 → <strong>✅ Richtig:</strong> Jede Stelle wird unabhängig gewählt; 6 Stellen mit je 36 Möglichkeiten ergibt 36⁶ (Potenz, nicht Produkt mit 6)</li>
              <li><strong>❌ Falsch:</strong> 26⁶ + 10⁶ (Buchstaben und Ziffern getrennt addiert) → <strong>✅ Richtig:</strong> Pro Stelle kann jedes der 36 Zeichen gewählt werden; Basis des Alphabets ist 36, nicht 26 oder 10</li>
            </ul>,
          ),
          solution: '(26 + 10)⁶ = 36⁶',
        },
        {
          letter: 'c',
          text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden, wenn in jedem Passwort mindestens eine Ziffer vorkommen soll?',
          hint: h(
            <>
              <p><span className="hint-em">Komplementärmethode</span>: Statt direkt zu zählen, wie viele Passwörter mindestens eine Ziffer enthalten, zählt man das Gegenteil — Passwörter ohne Ziffer — und subtrahiert.</p>
              <p>|mindestens eine Ziffer| = |alle| − |keine Ziffer|</p>
            </>,
            <>
              <ol>
                <li>Direktes Zählen (nach Anzahl der Ziffern) ist aufwändig — verwende das Komplement</li>
                <li>Bestimme die Gesamtanzahl aller Passwörter (ohne Einschränkung)</li>
                <li>Bestimme die Anzahl der Passwörter, die die Bedingung verletzen (keine Ziffer enthalten)</li>
                <li>Ziehe die unerwünschten Passwörter von der Gesamtmenge ab</li>
              </ol>
            </>,
            <>
              <p>Analogie: Wie viele 4-stellige PINs enthalten mindestens eine gerade Ziffer?</p>
              <pre className="hint-code-block">{`Alle: 10⁴ = 10 000
Nur ungerade Ziffern: 5⁴ = 625
Mindestens eine gerade: 10 000 − 625 = 9 375`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 36⁶ − 10⁶ (nur Passwörter rein aus Ziffern abgezogen) → <strong>✅ Richtig:</strong> Es sollen Passwörter ohne Ziffer abgezogen werden; das sind Passwörter aus nur Buchstaben: 26⁶ (nicht 10⁶)</li>
              <li><strong>❌ Falsch:</strong> Direkt nach genau k Ziffern (k=1,…,6) zählen und addieren → <strong>✅ Richtig:</strong> Komplementärmethode ist einfacher: 36⁶ − 26⁶</li>
            </ul>,
          ),
          solution: 'Komplementärmethode:\nAlle 6-stelligen Passwörter:      36⁶\nPasswörter nur aus Buchstaben:    26⁶\n\nMindestens eine Ziffer: 36⁶ − 26⁶',
        },
      ],
    },
    {
      id: 'b6a4',
      nr: 4,
      title: 'Sitzplatzverteilung im Bus',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Auf wie viele Arten können sich 20 (unterscheidbare) Personen auf 60 Plätze in einem Bus verteilen?',
          hint: h(
            <>
              <p><span className="hint-em">Urnenmodell</span>: 60 Kugeln (Plätze), 20 Ziehungen. Da Personen unterscheidbar sind, spielt die Reihenfolge eine Rolle. Da jeder Platz nur einmal besetzt werden kann, gibt es keine Wiederholung.</p>
              <p>→ k-Variation ohne Wiederholung: V(n, k) = n! / (n−k)!</p>
            </>,
            <>
              <ol>
                <li>Identifiziere n (Gesamtanzahl der Plätze) und k (Anzahl der Personen)</li>
                <li>Beantworte: Sind Personen unterscheidbar? (→ zählt Reihenfolge) Kann ein Platz doppelt besetzt werden? (→ Wiederholung?)</li>
                <li>Wähle das passende Urnenmodell: Variation ohne Wiederholung V(n,k) = n!/(n−k)!</li>
                <li>Setze n und k ein</li>
              </ol>
            </>,
            <p>Vergleich: Für Platz 1 gibt es 60 Möglichkeiten, für Platz 2 danach 59, usw.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> C(60,20) wählen (ohne Reihenfolge) → <strong>✅ Richtig:</strong> Personen sind unterscheidbar → Reihenfolge zählt; wer auf welchem Platz sitzt ist relevant → Variation, nicht Kombination</li>
              <li><strong>❌ Falsch:</strong> 60²⁰ (mit Wiederholung) → <strong>✅ Richtig:</strong> Jeder Platz kann nur von einer Person besetzt werden → ohne Wiederholung; V(60,20) = 60!/40!</li>
            </ul>,
          ),
          solution: 'Urnenmodell: 60 Kugeln ≅ Plätze im Bus,\n20 Ziehungen ohne Wiederholung mit Reihenfolge.\n\nV(60, 20) = 60! / 40! = 60 · 59 · … · 41',
        },
      ],
    },
    {
      id: 'b6a5',
      nr: 5,
      title: 'Spatzen auf Telegraphenleitungen',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Auf wie viele Arten können sich 2 nicht unterscheidbare Spatzen auf 4 unterschiedliche Telegraphenleitungen verteilen?',
          hint: h(
            <>
              <p><span className="hint-em">Urnenmodell</span>: Spatzen sind nicht unterscheidbar → keine Reihenfolge. Eine Leitung darf mehrfach besetzt werden → Wiederholung erlaubt.</p>
              <p>→ Kombination mit Wiederholung: C*(n, k) = C(n+k−1, k)</p>
            </>,
            <>
              <ol>
                <li>Identifiziere n (Leitungen) und k (Spatzen)</li>
                <li>Sind Spatzen unterscheidbar? (→ Reihenfolge?) Darf eine Leitung mehrfach besetzt werden? (→ Wiederholung?)</li>
                <li>Wähle das passende Urnenmodell: Kombination mit Wiederholung C*(n,k) = C(n+k−1, k)</li>
                <li>Setze n und k ein und berechne den Binomialkoeffizienten</li>
              </ol>
            </>,
            <>
              <p>Probe: Alle Möglichkeiten (L₁ ≤ L₂, da Spatzen identisch):</p>
              <pre className="hint-code-block">{`(1,1)(1,2)(1,3)(1,4)(2,2)(2,3)(2,4)(3,3)(3,4)(4,4)
→ 10 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> C(4,2) = 6 (Kombination ohne Wiederholung) → <strong>✅ Richtig:</strong> Mehrere Spatzen dürfen auf derselben Leitung sitzen → mit Wiederholung; C*(4,2) = C(5,2) = 10</li>
              <li><strong>❌ Falsch:</strong> 4² = 16 (Variation mit Wiederholung) → <strong>✅ Richtig:</strong> Spatzen sind nicht unterscheidbar → Reihenfolge spielt keine Rolle; (L1,L2) = (L2,L1) → Kombination, nicht Variation</li>
            </ul>,
          ),
          solution: 'Urnenmodell: 4 Kugeln ≅ Telegraphenleitungen,\n2 Ziehungen mit Wiederholung ohne Reihenfolge.\n\nC*(4, 2) = C(4+2−1, 2) = C(5, 2) = 10 Möglichkeiten.',
        },
      ],
    },
    {
      id: 'b6a6',
      nr: 6,
      title: 'Wagenfolgen im Zug',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Ein Zug besteht aus 3 Wagen der ersten Klasse und 5 Wagen der zweiten Klasse. Die Wagen der ersten Klasse sind nicht weiter unterscheidbar, ebenso wenig die Wagen der zweiten Klasse. Wie viele unterschiedliche Wagenfolgen sind möglich?',
          hint: h(
            <>
              <p><span className="hint-em">Urnenmodell</span>: 8 Wagenpositionen, davon 3 für die erste Klasse auswählen. Wagen einer Klasse sind identisch → keine Reihenfolge. Jede Position kann nur einmal besetzt werden → keine Wiederholung.</p>
              <p>→ Kombination ohne Wiederholung: C(n, k) = n! / (k! · (n−k)!)</p>
            </>,
            <>
              <ol>
                <li>Formuliere das Problem als Auswahl: Welche k von n Positionen werden einer Klasse zugeordnet?</li>
                <li>Sind Wagen einer Klasse unterscheidbar? (→ Reihenfolge?) Kann eine Position doppelt belegt werden? (→ Wiederholung?)</li>
                <li>Wähle das passende Urnenmodell: Kombination ohne Wiederholung C(n,k) = n!/(k!·(n−k)!)</li>
                <li>Beachte: C(n,k) = C(n, n−k) — man kann auch die Positionen der anderen Klasse auswählen</li>
              </ol>
            </>,
            <p>Alternativ: C(8, 5) = 56 (5 Positionen für 2. Klasse wählen) — ergibt dasselbe wegen C(n,k) = C(n,n−k).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 8! = 40 320 (alle Permutationen) → <strong>✅ Richtig:</strong> Die 3 Erstklasse-Wagen sind identisch und die 5 Zweitklasse-Wagen sind identisch; nur die Positionen zählen → C(8,3) = 56</li>
              <li><strong>❌ Falsch:</strong> C(8,3) = 8!/3! (Nenner vergessen) → <strong>✅ Richtig:</strong> C(8,3) = 8!/(3!·5!) = 56; beide Faktoren im Nenner nötig</li>
            </ul>,
          ),
          solution: 'Urnenmodell: 8 Kugeln ≅ 8 Wagenpositionen,\n3 Ziehungen ohne Wiederholung ohne Reihenfolge.\n\nC(8, 3) = (8 über 3) = 56 mögliche Wagenreihungen.',
        },
      ],
    },
    {
      id: 'b6a7',
      nr: 7,
      title: 'Anagramme',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Wie viele „Anagramme" des Wortes „MATHE" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 5 Buchstaben angeordnet werden?',
          hint: h(
            <>
              <p>Alle 5 Buchstaben von MATHE sind <span className="hint-em">verschieden</span>. Gesucht ist die Anzahl aller Permutationen von 5 verschiedenen Elementen.</p>
              <p>P(n) = n!</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, ob alle Buchstaben verschieden sind (kein Buchstabe kommt mehrfach vor)</li>
                <li>Zählt die Reihenfolge? (Ja — MATHE ≠ MAHTE)</li>
                <li>Wende die Permutationsformel an: P(n) = n! für n verschiedene Elemente</li>
              </ol>
            </>,
            <>
              <p>Probe: Anagramme von „AB": AB, BA → 2! = 2 ✓</p>
              <p>Anagramme von „ABC": ABC, ACB, BAC, BCA, CAB, CBA → 3! = 6 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 5² = 25 (mit Wiederholung) → <strong>✅ Richtig:</strong> Jeder Buchstabe kann nur einmal verwendet werden (kein Buchstabe zweimal in MATHE); alle 5 sind verschieden → P(5) = 5! = 120</li>
              <li><strong>❌ Falsch:</strong> C(5,5) = 1 (Kombination) → <strong>✅ Richtig:</strong> Reihenfolge zählt — MATHE ≠ MAHTE; Permutation P(5) = 5! = 120</li>
            </ul>,
          ),
          solution: 'Alle 5 Buchstaben von MATHE sind verschieden.\nP(5) = 5! = 120 verschiedene Anordnungen.',
        },
        {
          letter: 'b',
          text: 'Wie viele „Anagramme" des Wortes „KLAUSUR" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 7 Buchstaben angeordnet werden?',
          hint: h(
            <>
              <p>KLAUSUR hat 7 Buchstaben, aber <span className="hint-em">U kommt zweimal vor</span>. Die zwei U sind nicht unterscheidbar.</p>
              <p>Vorgehen: Zuerst die 2 Positionen für U wählen (C(7,2)), dann die restlichen 5 verschiedenen Buchstaben permutieren (5!).</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, welcher Buchstabe mehrfach vorkommt und wie oft</li>
                <li>Wähle zuerst die Positionen für den wiederholten Buchstaben aus allen n Positionen (Kombination ohne Wiederholung)</li>
                <li>Permutiere die verbleibenden verschiedenen Buchstaben auf den restlichen Positionen</li>
                <li>Multipliziere beide Teilergebnisse (Produktregel)</li>
                <li>Alternativformel: n! dividiert durch k! für jeden k-fach wiederholten Buchstaben</li>
              </ol>
            </>,
            <p>Alternativformel: 7! / 2! = 5040 / 2 = 2520 (dividiere durch 2!, da U 2-mal vorkommt).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 7! = 5040 → <strong>✅ Richtig:</strong> Die zwei U's sind identisch; tausche sie → gleiche Anordnung, aber doppelt gezählt; daher 7!/2! = 2520</li>
              <li><strong>❌ Falsch:</strong> Nur 5! = 120 (die restlichen Buchstaben) → <strong>✅ Richtig:</strong> Zusätzlich müssen die 2 U-Positionen aus 7 Gesamtpositionen gewählt werden: C(7,2)·5! = 21·120 = 2520</li>
            </ul>,
          ),
          solution: 'KLAUSUR hat 7 Buchstaben, U kommt zweimal vor.\n\nUrnenmodell für die U-Positionen:\n  n = 7 Positionen, k = 2 U\'s\n  C(7, 2) = (7 über 2) = 21\n\nPermutation der restlichen 5 Buchstaben:\n  5! = 120\n\nGesamt: C(7, 2) · P(5) = 21 · 120 = 2520\n\n(Alternativ: 7! / 2! = 5040 / 2 = 2520)',
        },
      ],
    },
    {
      id: 'b6a8',
      nr: 8,
      title: 'Gitterwege (Wenn noch Zeit ist …)',
      subaufgaben: [
        {
          letter: 'a',
          text: 'Betrachten Sie das Gitter in Abbildung 1. Die Punkte markieren die so genannten Knoten des Gitters. Wie viele Wege mit genau 13 Schritten gibt es, um von A (untere linke Ecke) nach B (obere rechte Ecke) zu gelangen? Dabei bedeutet ein Schritt, dass man von einem Knoten zu einem benachbarten Knoten geht (nur nach rechts oder nach oben).',
          hint: h(
            <>
              <p>Um von A nach B zu gelangen, muss man genau <span className="hint-em">8 Schritte nach rechts</span> und <span className="hint-em">5 Schritte nach oben</span> machen — in beliebiger Reihenfolge.</p>
              <p>Ein Weg entspricht einer Wahl, bei welchen der 13 Schritte man nach oben geht.</p>
            </>,
            <>
              <ol>
                <li>Stelle fest, wie viele Schritte insgesamt nötig sind und wie viele davon in welche Richtung gehen</li>
                <li>Erkenne: Jeder Weg entspricht einer Auswahl, bei welchen der Gesamtschritte man nach oben geht</li>
                <li>Sind die „Aufwärts-Schritte" unterscheidbar? (Nein → Kombination, nicht Permutation)</li>
                <li>Wende C(n, k) an: n = Gesamtschritte, k = Aufwärtsschritte</li>
              </ol>
            </>,
            <p>Alternativ: C(13, 8) = 1287 (die 8 Rechts-Schritte auswählen) — liefert dasselbe Ergebnis.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2¹³ (bei jedem Schritt frei wählen rechts/oben) → <strong>✅ Richtig:</strong> Es gibt genau 8 Rechts- und 5 Oben-Schritte (fest); nur die Reihenfolge variiert → C(13,5) = 1287</li>
              <li><strong>❌ Falsch:</strong> 13! (alle Schritt-Permutationen) → <strong>✅ Richtig:</strong> Die 8 Rechts-Schritte sind untereinander identisch, ebenso die 5 Oben-Schritte; durch C(13,5) werden Doppelzählungen vermieden</li>
            </ul>,
          ),
          solution: 'Um von A nach B zu kommen: genau 8 Schritte rechts + 5 Schritte oben.\n\nUrnenmodell:\n  n = 13 Schritte, k = 5 nach-oben-Schritte auswählen\n  Ohne Zurücklegen, ohne Reihenfolge:\n\nC(13, 5) = (13 über 5) = 1287 unterschiedliche Wege.',
        },
      ],
    },
  ],
}
