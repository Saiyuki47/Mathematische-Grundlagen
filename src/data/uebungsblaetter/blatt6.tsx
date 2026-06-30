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
      referenz: ['abzaehlbarkeit'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Nach R. Dedekind (1831–1916) ist eine Menge M unendlich, wenn es eine echte Teilmenge K von M gibt (also K ⊆ M und K ≠ M), die sich bijektiv auf M abbilden lässt. Zeigen Sie, dass ℕ nach dieser Definition eine unendliche Menge ist.',
          hint: h(
            <>
              <p>Dedekinds Definition: M ist <span className="hint-em">unendlich</span>, wenn es eine <span className="hint-em">echte Teilmenge</span> K ⊊ M gibt, die sich bijektiv auf ganz M abbilden lässt. „Echt" (K ⊊ M, also K ⊆ M und K ≠ M) heißt: K liegt in M, ist aber NICHT ganz M — mindestens ein Element von M fehlt in K.</p>
              <p>Das Verblüffende: Bei ENDLICHEN Mengen geht das nie (eine echte Teilmenge hat immer weniger Elemente). Bei unendlichen Mengen schon — genau das macht sie unendlich. „Bijektiv" = injektiv (verschiedene Inputs → verschiedene Outputs) UND surjektiv (jedes Ziel wird getroffen).</p>
              <p>Plan: Lasse EIN Element aus ℕ weg (z.B. die 0), nimm K = ℕ\{'{0}'} = {'{1,2,3,…}'}, und „verschiebe" die übrigen Zahlen um 1 nach unten mit f(n) = n−1. Das bildet K bijektiv auf ganz ℕ ab.</p>
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
              <p>Andere gültige Wahl (gerade Zahlen): K := {'{0,2,4,6,…}'} (die geraden Zahlen) ⊊ ℕ, denn die ungeraden fehlen.</p>
              <pre className="hint-code-block">{`Bijektion g : ℕ → K,  n ↦ 2n   (Richtung ℕ → K).
   g(0)=0, g(1)=2, g(2)=4, …
injektiv:  2n = 2m ⟹ n = m ✓
surjektiv: zu geradem k∈K wähle n = k/2, dann g(k/2) = k ✓
→ Bijektion zwischen ℕ und echter Teilmenge K beweist
  ebenfalls die Dedekind-Unendlichkeit von ℕ.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> K = ℕ wählen → <strong>✅ Richtig:</strong> K muss ECHT sein (K ≠ ℕ), also mindestens ein Element von ℕ auslassen. K = ℕ\{'{0}'} lässt die 0 weg und erfüllt das.</li>
              <li><strong>❌ Falsch:</strong> „f ist offensichtlich bijektiv" ohne Nachweis → <strong>✅ Richtig:</strong> Beide Teile zeigen: injektiv (n−1=m−1 ⟹ n=m) UND surjektiv (zu jedem k∈ℕ leistet n=k+1 ∈ K gerade f(k+1)=k).</li>
              <li><strong>❌ Falsch:</strong> denken, eine echte Teilmenge habe „immer weniger Elemente" als M → <strong>✅ Richtig:</strong> Das gilt nur endlich; bei unendlichem M kann eine echte Teilmenge „gleich groß" (gleichmächtig) sein — genau das ist Dedekinds Kriterium.</li>
            </ul>,
            <p>Selbstkontrolle: Ist K=ℕ\{'{0}'} echt? Ja, 0∈ℕ aber 0∉K. Triff k=5: n=6∈K, f(6)=5 ✓. Werden zwei verschiedene n,m je gleich abgebildet? Nein (n−1=m−1 ⟹ n=m). Frage: Warum funktioniert dieser „Verschiebe-Trick" bei ℕ, aber niemals bei einer endlichen Menge wie {'{1,2,3}'} — was unterscheidet endlich von unendlich?</p>,
          ),
          solution: 'Wähle K := ℕ \\ {0} und f : K → ℕ, n ↦ n − 1.\n\nK ⊆ ℕ und K ≠ ℕ (da 0 ∉ K).\n\nf ist bijektiv:\n  – injektiv:  n−1 = m−1 ⟹ n = m\n  – surjektiv: für k ∈ ℕ gilt f(k+1) = k\n\nDamit existiert eine Bijektion von einer echten Teilmenge K auf ℕ → ℕ ist nach Dedekind unendlich. □',
        },
        {
          letter: 'b',
          text: 'Ist ℕ × ℕ abzählbar?',
          hint: h(
            <>
              <p>Eine Menge M heißt <span className="hint-em">abzählbar (unendlich)</span>, wenn man ihre Elemente lückenlos und doppelfrei durchnummerieren kann — formal: wenn es eine <span className="hint-em">Bijektion ℕ → M</span> gibt (eine Nummerierung 0,1,2,…). Anschaulich: „jedes Element wird irgendwann erreicht, wenn man lange genug zählt".</p>
              <p>Gegenstück: <span className="hint-em">überabzählbar</span> = es gibt KEINE solche vollständige Liste (z.B. ℝ — Cantors Diagonalargument). Achtung: „unendlich" heißt NICHT automatisch „überabzählbar". ℕ×ℕ ist unendlich, aber abzählbar.</p>
              <p>ℕ×ℕ = alle Paare (m,n) natürlicher Zahlen. Eine naive Aufzählung „erst alle (0,n), dann alle (1,n), …" scheitert: schon die erste Zeile (0,0),(0,1),(0,2),… ist unendlich, man käme nie zu (1,0). Lösung: <span className="hint-em">Diagonalverfahren (Cantor)</span> — Paare nach der Summe m+n gruppieren.</p>
            </>,
            <>
              <p>So zeigt man, dass ℕ×ℕ abzählbar ist:</p>
              <pre className="hint-code-block">{`1) „Diagonale Nr. k" = alle Paare (m,n) mit m+n = k.
   Diagonale 0: (0,0)                         → 1 Paar
   Diagonale 1: (0,1), (1,0)                  → 2 Paare
   Diagonale 2: (0,2), (1,1), (2,0)           → 3 Paare
   Diagonale 3: (0,3), (1,2), (2,1), (3,0)    → 4 Paare
   …  JEDE Diagonale ist ENDLICH (genau k+1 Paare).

2) Diagonale für Diagonale aufzählen (feste innere
   Reihenfolge):
   (0,0), (0,1), (1,0), (0,2), (1,1), (2,0), (3,0), …
   Das definiert eine Bijektion ℕ → ℕ×ℕ.

3) Wird jedes Paar erreicht? Ein beliebiges (m,n) hat die
   feste Summe s = m+n, liegt also in Diagonale s. Diese wird
   nach endlich vielen Schritten abgearbeitet → (m,n) bekommt
   eine endliche Nummer → genau einmal getroffen.
   → Bijektion existiert → ℕ×ℕ abzählbar. □`}</pre>
              <p>Der Kniff: endliche Diagonalen statt unendlicher Zeilen — so erwischt man jedes Paar nach endlich vielen Schritten.</p>
            </>,
            <>
              <p>Analoges Beispiel: ℤ (ganze Zahlen) ist abzählbar — abwechselnd auflisten:</p>
              <pre className="hint-code-block">{`0, 1, −1, 2, −2, 3, −3, …
Jede ganze Zahl bekommt eine endliche Nummer.
Genauso ist ℚ (Brüche) abzählbar (Brüche p/q in ein Gitter
   schreiben und diagonal durchzählen).
Allgemein: jedes endliche Produkt abzählbarer Mengen ist abzählbar.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> ℕ×ℕ sei überabzählbar, weil es „unendlich viele Zeilen mit unendlich vielen Einträgen" hat → <strong>✅ Richtig:</strong> Das Diagonalverfahren liefert eine echte Bijektion ℕ→ℕ×ℕ; ℕ×ℕ ist abzählbar. Überabzählbar ist ℝ, nicht ℕ×ℕ.</li>
              <li><strong>❌ Falsch:</strong> zeilenweise aufzählen (ganze Zeile m=0, dann m=1) → <strong>✅ Richtig:</strong> Eine Zeile ist schon unendlich → man erreicht nie die nächste. Diagonalen sind ENDLICH und werden daher alle erreicht.</li>
              <li><strong>❌ Falsch:</strong> „unendlich ⟹ überabzählbar" → <strong>✅ Richtig:</strong> abzählbar-unendlich (ℕ, ℤ, ℚ, ℕ×ℕ) und überabzählbar (ℝ) sind verschiedene Stufen der Unendlichkeit.</li>
            </ul>,
            <p>Selbstkontrolle: In welcher Diagonale liegt (2,3)? Summe 2+3=5 → Diagonale 5 (6 Paare). Sie wird nach endlich vielen Schritten erreicht. Frage: Warum garantiert das Sortieren nach m+n, dass jedes Paar eine endliche Nummer bekommt — und warum scheitert genau daran die zeilenweise Aufzählung?</p>,
          ),
          solution: 'Ja, ℕ × ℕ ist abzählbar.\n\nDie Diagonalen-Aufzählung liefert eine Bijektion ℕ → ℕ×ℕ:\n(0,0), (0,1), (1,0), (0,2), (1,1), (2,0), (3,0), ...\n\nPaar (m,n) liegt in Diagonale m+n und ist eindeutig aufzählbar.',
        },
      ],
    },
    {
      id: 'b6a2',
      nr: 2,
      title: 'Kartesisches Produkt und Autonummern',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Seien M₁, …, Mₙ endliche nicht-leere Mengen. Geben Sie eine Formel für die Anzahl der Elemente des kartesischen Produkts M₁ × … × Mₙ an (ohne Beweis).',
          hint: h(
            <>
              <p>Das <span className="hint-em">kartesische Produkt</span> A × B ist die Menge ALLER geordneten Paare (a, b) mit a ∈ A und b ∈ B. <span className="hint-em">|A|</span> bezeichnet die <span className="hint-em">Mächtigkeit</span> (Anzahl der Elemente) einer endlichen Menge A.</p>
              <p><span className="hint-em">Produktregel des Zählens</span>: Wird etwas in mehreren unabhängigen Schritten gewählt, multipliziert man die Möglichkeiten je Schritt. Für ein Paar (a,b): die erste Komponente hat |A| Möglichkeiten, und zu JEDER davon gibt es |B| Möglichkeiten für die zweite → |A × B| = |A| · |B|. (Addieren wäre falsch — Addition zählt „entweder/oder", nicht „beides hintereinander".)</p>
              <p>Verallgemeinert auf n Mengen: <span className="hint-em">|M₁ × M₂ × … × Mₙ| = |M₁| · |M₂| · … · |Mₙ|</span>. Sauber begründbar per vollständiger Induktion über n. „geordnet" heißt: (a,b) ≠ (b,a) im Allgemeinen — die Reihenfolge zählt.</p>
            </>,
            <>
              <p>So begründet man die Formel:</p>
              <pre className="hint-code-block">{`Zweistelliger Fall M₁ × M₂:
  Baue ein Paar (a, b):
    Schritt 1: a aus M₁ wählen → |M₁| Möglichkeiten.
    Schritt 2: b aus M₂ wählen → |M₂| Möglichkeiten,
               und zwar UNABHÄNGIG von a.
  Produktregel → |M₁ × M₂| = |M₁| · |M₂|.

n-stelliger Fall (Tupel (x₁, x₂, …, xₙ)):
  Jede Komponente xᵢ wird unabhängig aus Mᵢ gewählt,
  mit |Mᵢ| Möglichkeiten. Alle n Wahlen multiplizieren:
  |M₁ × … × Mₙ| = |M₁| · |M₂| · … · |Mₙ|.

Formaler Beweis: Induktion über n (Anker n=1: |M₁|=|M₁| ✓;
  Schritt: |M₁×…×Mₙ₊₁| = |M₁×…×Mₙ| · |Mₙ₊₁|).`}</pre>
            </>,
            <>
              <p>Zahlenbeispiel: |{'{1,2}'} × {'{a,b,c}'}| = 2 · 3 = 6. Alle Paare:</p>
              <pre className="hint-code-block">{`(1,a) (1,b) (1,c) (2,a) (2,b) (2,c)   → 6 Stück ✓
Drei Mengen: |{1,2} × {a,b} × {x,y,z}| = 2·2·3 = 12.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |M₁ × M₂| = |M₁| + |M₂| (addieren) → <strong>✅ Richtig:</strong> Zu jedem der |M₁| ersten Elemente gibt es |M₂| zweite → multiplizieren: |M₁|·|M₂|. (Bei {'{1,2}'}×{'{a,b,c}'}: 2·3=6, nicht 2+3=5.)</li>
              <li><strong>❌ Falsch:</strong> (1,a) = (a,1) für gleich halten → <strong>✅ Richtig:</strong> Paare sind GEORDNET; (1,a) und (a,1) sind verschieden (sofern 1≠a). Reihenfolge der Komponenten zählt.</li>
              <li><strong>❌ Falsch:</strong> |M₁ × … × Mₙ| = |M₁|ⁿ annehmen → <strong>✅ Richtig:</strong> Das gilt nur, wenn ALLE Mᵢ gleich groß sind; allgemein ist es das Produkt der einzelnen |Mᵢ|.</li>
            </ul>,
            <p>Selbstkontrolle: Schreibe alle Paare von {'{1,2}'} × {'{a,b,c}'} auf und zähle — kommen 2·3=6 heraus? Frage: Warum MULTIPLIZIERT man die Anzahlen (statt zu addieren), wenn man ein Tupel aus mehreren unabhängigen Komponenten baut?</p>,
          ),
          solution: '|M₁ × ⋯ × Mₙ| = |M₁| · ⋯ · |Mₙ|\n\n(Formal kann die Formel über vollständige Induktion nach n gezeigt werden.)',
        },
        {
          letter: 'b',
          text: 'Wie viele Autonummern der Form\n\n  FD ‐ b₁b₂  z₁z₂z₃\n\ngibt es, wobei b₁ und b₂ jeweils beliebige Buchstaben zwischen A und Z sein können und z₁ ∈ {1, …, 9}, z₂, z₃ ∈ {0, …, 9} gelten soll?',
          hint: h(
            <>
              <p>Diese Aufgabe ist ein direktes kartesisches Produkt: Eine Autonummer ist ein <span className="hint-em">Tupel</span> (b₁, b₂, z₁, z₂, z₃) aus 5 unabhängig wählbaren Stellen. „FD-" ist fest und zählt nicht mit.</p>
              <p><span className="hint-em">Produktregel</span>: Die Gesamtzahl ist das PRODUKT der Möglichkeiten je Stelle, weil jede Stelle frei und unabhängig kombiniert wird (zu jeder Wahl von b₁ passt jede Wahl von b₂ usw.). Entscheidend ist, für jede Stelle exakt die Anzahl erlaubter Zeichen abzuzählen — vor allem, ob die 0 dabei ist.</p>
              <ul>
                <li>b₁, b₂: Buchstaben A bis Z → je 26 Möglichkeiten (das Alphabet hat 26 Buchstaben).</li>
                <li>z₁ ∈ {'{1,…,9}'}: KEINE 0 erlaubt → nur 9 Möglichkeiten.</li>
                <li>z₂, z₃ ∈ {'{0,…,9}'}: 0 erlaubt → je 10 Möglichkeiten.</li>
              </ul>
            </>,
            <>
              <p>So zählt man die Autonummern:</p>
              <pre className="hint-code-block">{`1) Stellen und Möglichkeiten auflisten:
   b₁: 26   b₂: 26   z₁: 9   z₂: 10   z₃: 10

2) Produktregel anwenden (alle Stellen multiplizieren):
   26 · 26 · 9 · 10 · 10

3) Schrittweise ausrechnen:
   26 · 26 = 676
   676 · 9 = 6 084
   6 084 · 10 = 60 840
   60 840 · 10 = 608 400

→ Es gibt 608 400 mögliche Autonummern.`}</pre>
            </>,
            <>
              <p>Analoges Beispiel: Kennzeichen aus 1 Buchstaben und 3 Ziffern, erste Ziffer ohne 0.</p>
              <pre className="hint-code-block">{`Buchstabe: 26;  z₁ ∈ {1..9}: 9;  z₂,z₃ ∈ {0..9}: 10 je.
26 · 9 · 10 · 10 = 23 400 Kennzeichen.
(Vergleich PIN, alle Stellen 0–9: 4-stellig → 10⁴ = 10 000.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> z₁ mit 10 Möglichkeiten {'{0,…,9}'} rechnen → <strong>✅ Richtig:</strong> Die Aufgabe schreibt z₁ ∈ {'{1,…,9}'} (keine führende 0) → nur 9 Möglichkeiten.</li>
              <li><strong>❌ Falsch:</strong> 26+26+9+10+10 = 81 (addieren) → <strong>✅ Richtig:</strong> Unabhängige Stellen werden MULTIPLIZIERT: 26·26·9·10·10 = 608 400. (Addieren würde „nur eine Stelle wählen" zählen.)</li>
              <li><strong>❌ Falsch:</strong> 26·26 zu 52 zusammenfassen → <strong>✅ Richtig:</strong> 26·26 = 676 (zwei unabhängige Buchstabenstellen, nicht 26+26).</li>
            </ul>,
            <p>Selbstkontrolle: 26·26·9·10·10 — rechne in anderer Reihenfolge nach (9·100=900; 676·900=608 400) und prüfe, ob dasselbe herauskommt. Frage: Warum startet z₁ bei 1 (9 Möglichkeiten) und nicht bei 0, und warum werden die Stellen multipliziert statt addiert?</p>,
          ),
          solution: '|Menge der Autonummern|\n= |{(b₁, b₂, z₁, z₂, z₃) : b₁,b₂ ∈ {A,...,Z}, z₁ ∈ {1,...,9}, z₂,z₃ ∈ {0,...,9}}|\n= |{A,...,Z}| · |{A,...,Z}| · |{1,...,9}| · |{0,...,9}| · |{0,...,9}|\n= 26 · 26 · 9 · 10 · 10\n= 608 400',
        },
      ],
    },
    {
      id: 'b6a3',
      nr: 3,
      title: 'Dualzahlen und Passwörter',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Wie viele fünfstellige Dualzahlen gibt es, die mit 11 beginnen oder mit 00 enden?',
          hint: h(
            <>
              <p>Eine <span className="hint-em">Dualzahl (Binärzahl)</span> besteht nur aus den Ziffern 0 und 1. „Fünfstellig" heißt hier: 5 Stellen, jede ist 0 oder 1 (führende Nullen erlaubt, z.B. 00000 bis 11111) → insgesamt 2⁵ = 32 Stück. Pro <span className="hint-em">freier Stelle</span> gibt es 2 Möglichkeiten; sind k Stellen frei, gibt es 2ᵏ Zahlen.</p>
              <p>Das Wörtchen „<span className="hint-em">oder</span>" bedeutet hier „in mindestens einer der beiden Mengen". Würde man |A|+|B| rechnen, zählt man die Zahlen, die in BEIDEN liegen, doppelt. Korrektur durch das <span className="hint-em">Prinzip von Inklusion und Exklusion</span>:</p>
              <pre className="hint-code-block">{`|A ∪ B| = |A| + |B| − |A ∩ B|`}</pre>
              <p>A = {'{'}fünfstellige Dualzahlen, die mit 11 beginnen{'}'}, B = {'{'}…, die mit 00 enden{'}'}. A ∩ B = beides gleichzeitig. (∪ = Vereinigung „oder", ∩ = Schnitt „und".)</p>
            </>,
            <>
              <p>So zählt man (Stellen: s₁ s₂ s₃ s₄ s₅):</p>
              <pre className="hint-code-block">{`|A|: beginnt mit 11 → s₁=1, s₂=1 fest; s₃,s₄,s₅ frei.
   3 freie Stellen → |A| = 2³ = 8.

|B|: endet mit 00 → s₄=0, s₅=0 fest; s₁,s₂,s₃ frei.
   3 freie Stellen → |B| = 2³ = 8.

|A∩B|: beginnt mit 11 UND endet mit 00 →
   s₁=1, s₂=1, s₄=0, s₅=0 fest; nur s₃ frei (Muster 11?00).
   1 freie Stelle → |A∩B| = 2¹ = 2.

Inklusion-Exklusion:
   |A ∪ B| = |A| + |B| − |A∩B| = 8 + 8 − 2 = 14.`}</pre>
              <p>Warum minus 2? Die zwei Zahlen 11000 und 11100 (Muster 11?00) liegen in A UND in B; ohne Abzug würden sie doppelt gezählt.</p>
            </>,
            <>
              <p>Anderes Beispiel: 4-stellige Dualzahlen, die mit 1 beginnen ODER mit 0 enden.</p>
              <pre className="hint-code-block">{`A: 1 _ _ _   → 3 frei → 2³ = 8
B: _ _ _ 0   → 3 frei → 2³ = 8
A∩B: 1 _ _ 0 → 2 frei → 2² = 4
|A∪B| = 8 + 8 − 4 = 12`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> |A∪B| = |A| + |B| = 16 (ohne Abzug) → <strong>✅ Richtig:</strong> Die Zahlen in A∩B (hier 11000, 11100) werden sonst doppelt gezählt; Inklusion-Exklusion: 8 + 8 − 2 = 14.</li>
              <li><strong>❌ Falsch:</strong> A∩B = ∅, weil „mit 11 beginnen" und „mit 00 enden" sich ausschließen → <strong>✅ Richtig:</strong> Eine 5-stellige Zahl kann beides: Muster 11?00 erfüllt beide Bedingungen → |A∩B| = 2 (die mittlere Stelle ist frei).</li>
              <li><strong>❌ Falsch:</strong> beim Festlegen von „mit 11 beginnen" 4 statt 3 freie Stellen zählen → <strong>✅ Richtig:</strong> Zwei Stellen (s₁,s₂) sind fest auf 1 → nur 3 der 5 Stellen sind frei → 2³ = 8.</li>
            </ul>,
            <p>Selbstkontrolle: A∩B-Zahlen explizit hinschreiben: 11000 und 11100 → genau 2 ✓. Zur Not alle 32 fünfstelligen Dualzahlen durchgehen und „beginnt 11 oder endet 00" zählen — es sind 14. Frage: Warum muss man |A∩B| genau EINMAL abziehen (nicht zweimal, nicht gar nicht), und welche Zahlen wären sonst doppelt gezählt?</p>,
          ),
          solution: 'A = {mit 11 anfangend}: |A| = 2³ = 8\nB = {mit 00 endend}:    |B| = 2³ = 8\nA ∩ B = {11?00}:       |A∩B| = 2¹ = 2\n\n|A ∪ B| = 8 + 8 − 2 = 14',
        },
        {
          letter: 'b',
          text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden?',
          hint: h(
            <>
              <p>Ein Passwort ist eine Folge von 6 Zeichen, wobei jede Stelle UNABHÄNGIG aus demselben Vorrat gewählt wird und Zeichen sich <span className="hint-em">wiederholen</span> dürfen (z.B. „AAA111" ist erlaubt).</p>
              <p>Erster Schritt: das <span className="hint-em">Gesamtalphabet</span> bestimmen. Es gibt 26 Buchstaben und 10 Ziffern, die zusammen verwendet werden → 26 + 10 = 36 mögliche Zeichen pro Stelle.</p>
              <p><span className="hint-em">Produktregel mit gleichen Faktoren = Potenz</span>: Werden k Stellen unabhängig aus a Zeichen gewählt, gibt es a · a · … · a (k-mal) = <span className="hint-em">aᵏ</span> Möglichkeiten. Hier a = 36 (Alphabetgröße = Basis), k = 6 (Stellenzahl = Exponent).</p>
            </>,
            <>
              <p>So zählt man die Passwörter:</p>
              <pre className="hint-code-block">{`1) Alphabetgröße pro Stelle:
   26 Buchstaben + 10 Ziffern = 36 Zeichen.

2) 6 unabhängige Stellen, je 36 Möglichkeiten, mit
   Wiederholung → Produktregel:
   36 · 36 · 36 · 36 · 36 · 36 = 36⁶.

3) Ergebnis: (26 + 10)⁶ = 36⁶
   (= 2 176 782 336, falls man es ausrechnen will).`}</pre>
            </>,
            <>
              <p>Analoges Beispiel: 4-stellige PIN aus 10 Ziffern (0–9), Wiederholung erlaubt.</p>
              <pre className="hint-code-block">{`Alphabet = 10, Stellen = 4 → 10⁴ = 10 000 PINs.
3-stelliges Passwort aus 26 Buchstaben → 26³ = 17 576.`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 36 · 6 = 216 → <strong>✅ Richtig:</strong> Jede der 6 Stellen hat 36 Möglichkeiten, die multipliziert werden: 36·36·36·36·36·36 = 36⁶ (Potenz mit Exponent 6, nicht „36 mal 6").</li>
              <li><strong>❌ Falsch:</strong> 26⁶ + 10⁶ (Buchstaben- und Ziffernpasswörter getrennt addiert) → <strong>✅ Richtig:</strong> Pro Stelle ist JEDES der 36 Zeichen wählbar (gemischt). Die Basis ist 36, nicht getrennt 26 und 10. (26⁶+10⁶ würde z.B. „A1AAAA" gar nicht zählen.)</li>
              <li><strong>❌ Falsch:</strong> 36! oder eine „ohne Wiederholung"-Formel nehmen → <strong>✅ Richtig:</strong> Zeichen dürfen sich wiederholen → schlicht 36⁶; nichts wird „verbraucht".</li>
            </ul>,
            <p>Selbstkontrolle: Für 1 Stelle 36¹ = 36, für 2 Stellen 36² = 1296 (jedes der 36 ersten mit jedem der 36 zweiten Zeichen). Passt die Verallgemeinerung auf 36⁶? Frage: Warum ist das Ergebnis eine POTENZ 36⁶ und nicht ein Produkt 36·6 — und warum ist die Basis 36 und nicht 26 oder 10?</p>,
          ),
          solution: '(26 + 10)⁶ = 36⁶',
        },
        {
          letter: 'c',
          text: 'Wie viele 6-stellige Passwörter können Sie aus 26 Buchstaben und 10 Ziffern bilden, wenn in jedem Passwort mindestens eine Ziffer vorkommen soll?',
          hint: h(
            <>
              <p>„<span className="hint-em">Mindestens eine Ziffer</span>" direkt zu zählen ist mühsam (es könnten 1, 2, …, bis 6 Ziffern sein). Viel einfacher ist die <span className="hint-em">Komplementärmethode (Gegenereignis)</span>: Statt das Gewünschte zu zählen, zählt man das GEGENTEIL und zieht es von allem ab.</p>
              <p><span className="hint-em">Grundidee</span>: „mindestens eine Ziffer" und „gar keine Ziffer" sind die einzigen zwei Fälle, die sich gegenseitig ausschließen und zusammen ALLE Passwörter abdecken. Daher:</p>
              <pre className="hint-code-block">{`|mindestens 1 Ziffer| = |alle| − |gar keine Ziffer|`}</pre>
              <p>„Gar keine Ziffer" bedeutet: jede Stelle ist ein BUCHSTABE (Alphabet nur 26 Zeichen). „Alle" sind die 36⁶ aus Teil (b).</p>
            </>,
            <>
              <p>So zählt man mit der Komplementärmethode:</p>
              <pre className="hint-code-block">{`1) Alle 6-stelligen Passwörter (Teil b):
   Alphabet 36 (26 Buchstaben + 10 Ziffern) → 36⁶.

2) Komplement „keine einzige Ziffer" = nur Buchstaben:
   pro Stelle nur 26 Buchstaben → 26⁶.

3) Subtrahieren:
   |mindestens eine Ziffer| = 36⁶ − 26⁶.

(Zahlenwert: 36⁶ = 2 176 782 336, 26⁶ = 308 915 776
 → 36⁶ − 26⁶ = 1 867 866 560.)`}</pre>
              <p>Warum klappt das? Jedes Passwort hat ENTWEDER mindestens eine Ziffer ODER keine — niemals beides, niemals keins. Also: gesuchte Menge = alle minus die ziffernfreien.</p>
            </>,
            <>
              <p>Analoges Beispiel: Wie viele 4-stellige PINs (Ziffern 0–9) enthalten mindestens eine gerade Ziffer?</p>
              <pre className="hint-code-block">{`Alle PINs:               10⁴ = 10 000
Komplement „nur ungerade" (1,3,5,7,9): 5⁴ = 625
Mindestens eine gerade:  10 000 − 625 = 9 375`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 36⁶ − 10⁶ (Passwörter „nur aus Ziffern" abziehen) → <strong>✅ Richtig:</strong> Abzuziehen ist das KOMPLEMENT der Bedingung, also „keine Ziffer" = nur Buchstaben = 26⁶. Ergebnis: 36⁶ − 26⁶.</li>
              <li><strong>❌ Falsch:</strong> direkt „genau k Ziffern" für k=1..6 einzeln zählen und addieren → <strong>✅ Richtig:</strong> Das ist korrekt, aber sehr aufwändig (Binomialkoeffizienten); die Komplementärmethode 36⁶ − 26⁶ ist viel kürzer.</li>
              <li><strong>❌ Falsch:</strong> 36⁶ − 26⁶ noch durch irgendetwas teilen → <strong>✅ Richtig:</strong> Es wird nur subtrahiert; die Differenz IST schon die gesuchte Anzahl.</li>
            </ul>,
            <p>Selbstkontrolle (kleiner Fall, 1-stellig): „mindestens eine Ziffer" = genau die 10 Ziffern. Formel: 36¹ − 26¹ = 36 − 26 = 10 ✓. Frage: Warum ist „keine Ziffer" (26⁶) das richtige Komplement — und welchen Fehler macht man, wenn man stattdessen „nur Ziffern" (10⁶) abzieht?</p>,
          ),
          solution: 'Komplementärmethode:\nAlle 6-stelligen Passwörter:      36⁶\nPasswörter nur aus Buchstaben:    26⁶\n\nMindestens eine Ziffer: 36⁶ − 26⁶',
        },
      ],
    },
    {
      id: 'b6a4',
      nr: 4,
      title: 'Sitzplatzverteilung im Bus',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Auf wie viele Arten können sich 20 (unterscheidbare) Personen auf 60 Plätze in einem Bus verteilen?',
          hint: h(
            <>
              <p>Kombinatorik-Aufgaben löst man mit dem <span className="hint-em">Urnenmodell</span>: n Kugeln in einer Urne, k werden gezogen. Zwei Fragen entscheiden die Formel:</p>
              <ul>
                <li><span className="hint-em">Zählt die Reihenfolge?</span> Ja → „Variation/Permutation"; Nein → „Kombination".</li>
                <li><span className="hint-em">Mit oder ohne Wiederholung?</span> Darf dieselbe Kugel mehrfach? Ja → mit Wiederholung; Nein → ohne.</li>
              </ul>
              <p>Hier: 60 Plätze = Kugeln (n=60), 20 Personen = Ziehungen (k=20). Personen sind <span className="hint-em">unterscheidbar</span> → wer auf welchem Platz sitzt zählt → Reihenfolge JA. Ein Platz fasst nur eine Person → keine Wiederholung. Das ist die <span className="hint-em">Variation ohne Wiederholung</span>:</p>
              <pre className="hint-code-block">{`V(n, k) = n! / (n−k)! = n·(n−1)·…·(n−k+1)`}</pre>
              <p>(n! = „n Fakultät" = n·(n−1)·…·2·1, z.B. 4! = 24.)</p>
            </>,
            <>
              <p>So zählt man die Sitzverteilungen:</p>
              <pre className="hint-code-block">{`1) Modell festlegen: Reihenfolge zählt (Personen
   unterscheidbar), keine Wiederholung (Platz einmal besetzt)
   → Variation ohne Wiederholung, n=60, k=20.

2) Anschaulich (sukzessives Besetzen):
   1. Person: 60 freie Plätze
   2. Person: 59 freie Plätze
   3. Person: 58 …
   …
   20. Person: 60−19 = 41 freie Plätze
   → 60 · 59 · 58 · … · 41   (genau 20 Faktoren)

3) Als Formel: V(60, 20) = 60! / (60−20)! = 60! / 40!
   = 60 · 59 · … · 41.`}</pre>
            </>,
            <>
              <p>Kleines Beispiel zum Nachvollziehen: 3 unterscheidbare Personen auf 4 Plätze.</p>
              <pre className="hint-code-block">{`V(4,3) = 4!/(4−3)! = 4!/1! = 24
   anschaulich: 4 · 3 · 2 = 24 (Platz für 1., 2., 3. Person).`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> C(60,20) = 60!/(20!·40!) (Kombination, ohne Reihenfolge) → <strong>✅ Richtig:</strong> Personen sind unterscheidbar, also ist „A auf Platz 1, B auf Platz 2" ≠ „B auf Platz 1, A auf Platz 2" → Reihenfolge zählt → Variation V(60,20)=60!/40!.</li>
              <li><strong>❌ Falsch:</strong> 60²⁰ (mit Wiederholung) → <strong>✅ Richtig:</strong> Ein Platz kann nur einmal besetzt werden → ohne Wiederholung; die Faktoren sinken 60·59·…·41, nicht 60·60·…</li>
              <li><strong>❌ Falsch:</strong> 60! (alle Plätze permutieren) → <strong>✅ Richtig:</strong> Nur 20 Personen werden gesetzt, nicht 60; man bricht nach 20 Faktoren ab → 60!/40!.</li>
            </ul>,
            <p>Selbstkontrolle: Zähle die Faktoren von 60 bis 41: 60−41+1 = 20 Faktoren = 20 Personen ✓. Frage: Warum zählt hier die Reihenfolge (→ Variation), obwohl die Plätze „nur" besetzt werden — und warum sinkt die Faktorenzahl 60, 59, 58, … statt konstant 60 zu bleiben?</p>,
          ),
          solution: 'Urnenmodell: 60 Kugeln ≅ Plätze im Bus,\n20 Ziehungen ohne Wiederholung mit Reihenfolge.\n\nV(60, 20) = 60! / 40! = 60 · 59 · … · 41',
        },
      ],
    },
    {
      id: 'b6a5',
      nr: 5,
      title: 'Spatzen auf Telegraphenleitungen',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Auf wie viele Arten können sich 2 nicht unterscheidbare Spatzen auf 4 unterschiedliche Telegraphenleitungen verteilen?',
          hint: h(
            <>
              <p>Wieder das <span className="hint-em">Urnenmodell</span> mit den zwei Leitfragen. Hier: 4 Leitungen = Kugeln (n=4), 2 Spatzen = Ziehungen (k=2).</p>
              <ul>
                <li>Reihenfolge? Spatzen sind <span className="hint-em">nicht unterscheidbar</span> → „Spatz auf Leitung 1 und Spatz auf Leitung 2" ist dasselbe egal welcher Spatz wo → Reihenfolge NEIN.</li>
                <li>Wiederholung? Eine Leitung darf mehrere Spatzen tragen → Wiederholung JA.</li>
              </ul>
              <p>Das ist die <span className="hint-em">Kombination mit Wiederholung</span>:</p>
              <pre className="hint-code-block">{`C*(n, k) = C(n+k−1, k) = (n+k−1)! / (k! · (n−1)!)`}</pre>
              <p>Der <span className="hint-em">Binomialkoeffizient</span> C(m, k) = „m über k" = m! / (k!·(m−k)!) zählt, auf wie viele Arten man k aus m ohne Reihenfolge auswählt.</p>
            </>,
            <>
              <p>So zählt man die Verteilungen:</p>
              <pre className="hint-code-block">{`1) Modell: ohne Reihenfolge (Spatzen gleich), mit
   Wiederholung (Leitung mehrfach) → Kombination mit
   Wiederholung, n=4, k=2.

2) Formel einsetzen:
   C*(4, 2) = C(4+2−1, 2) = C(5, 2).

3) Binomialkoeffizient ausrechnen:
   C(5, 2) = 5! / (2!·3!) = (5·4)/(2·1) = 20/2 = 10.

→ 10 Möglichkeiten.`}</pre>
              <p>Gegenprobe durch Auflisten (notiere als Paar von Leitungen, ohne Reihenfolge, also L₁ ≤ L₂):</p>
              <pre className="hint-code-block">{`(1,1)(1,2)(1,3)(1,4)(2,2)(2,3)(2,4)(3,3)(3,4)(4,4)
→ genau 10 ✓`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: 3 nicht unterscheidbare Kugeln auf 2 Schubladen verteilen.</p>
              <pre className="hint-code-block">{`n=2 Schubladen, k=3 Kugeln, ohne Reihenfolge, mit Wiederhol.
C*(2,3) = C(2+3−1, 3) = C(4,3) = 4.
Auflistung (Anzahl in Schublade1, Schublade2):
(3,0)(2,1)(1,2)(0,3) → 4 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> C(4,2) = 6 (Kombination OHNE Wiederholung) → <strong>✅ Richtig:</strong> Beide Spatzen dürfen auf dieselbe Leitung → mit Wiederholung; C*(4,2) = C(5,2) = 10. (Ohne Wiederholung fehlten die Fälle (1,1),(2,2),(3,3),(4,4).)</li>
              <li><strong>❌ Falsch:</strong> 4² = 16 (Variation mit Wiederholung) → <strong>✅ Richtig:</strong> Spatzen sind ununterscheidbar → (Leitung A, Leitung B) = (Leitung B, Leitung A) → keine Reihenfolge → Kombination, nicht Variation. (16 zählt (1,2) und (2,1) doppelt.)</li>
              <li><strong>❌ Falsch:</strong> in C*(n,k)=C(n+k−1,k) unten n statt k einsetzen, z.B. C(5,4) → <strong>✅ Richtig:</strong> Unten steht k=2 (Anzahl der Ziehungen/Spatzen): C(5,2)=10. (C(5,4)=5 wäre falsch.)</li>
            </ul>,
            <p>Selbstkontrolle: Zähle die aufgelisteten Paare oben — es sind 10, passend zu C(5,2)=10. Frage: Warum „mit Wiederholung" (mehrere Spatzen pro Leitung erlaubt) UND „ohne Reihenfolge" (Spatzen gleich) — und woran erkennt man das jeweils in der Aufgabenstellung?</p>,
          ),
          solution: 'Urnenmodell: 4 Kugeln ≅ Telegraphenleitungen,\n2 Ziehungen mit Wiederholung ohne Reihenfolge.\n\nC*(4, 2) = C(4+2−1, 2) = C(5, 2) = 10 Möglichkeiten.',
        },
      ],
    },
    {
      id: 'b6a6',
      nr: 6,
      title: 'Wagenfolgen im Zug',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Ein Zug besteht aus 3 Wagen der ersten Klasse und 5 Wagen der zweiten Klasse. Die Wagen der ersten Klasse sind nicht weiter unterscheidbar, ebenso wenig die Wagen der zweiten Klasse. Wie viele unterschiedliche Wagenfolgen sind möglich?',
          hint: h(
            <>
              <p>Trick: Die Wagenfolge ist festgelegt, sobald man weiß, WELCHE der 8 Positionen die Erste-Klasse-Wagen einnehmen — der Rest ist automatisch zweite Klasse. Es geht also um eine <span className="hint-em">Auswahl von 3 aus 8 Positionen</span>.</p>
              <p>Urnenmodell, zwei Leitfragen: Wagen einer Klasse sind <span className="hint-em">identisch (nicht unterscheidbar)</span> → welcher der drei Erstklassewagen wo steht, ist egal → Reihenfolge NEIN. Eine Position wird genau einmal vergeben → Wiederholung NEIN. Das ist die <span className="hint-em">Kombination ohne Wiederholung</span>:</p>
              <pre className="hint-code-block">{`C(n, k) = (n über k) = n! / ( k! · (n−k)! )`}</pre>
              <p>Hier n=8 Positionen, k=3 für die erste Klasse. <span className="hint-em">Symmetrie</span>: C(n,k) = C(n, n−k) — 3 Positionen für 1. Klasse auswählen ist gleichbedeutend mit 5 Positionen für 2. Klasse auswählen.</p>
            </>,
            <>
              <p>So zählt man die Wagenfolgen:</p>
              <pre className="hint-code-block">{`1) Modell: 3 von 8 Positionen für 1. Klasse wählen,
   ohne Reihenfolge (Wagen identisch), ohne Wiederholung
   (Position einmal vergeben) → C(8, 3).

2) Formel einsetzen:
   C(8,3) = 8! / (3! · (8−3)!) = 8! / (3! · 5!).

3) Geschickt kürzen (8!/5! = 8·7·6):
   = (8 · 7 · 6) / (3 · 2 · 1) = 336 / 6 = 56.

→ 56 unterschiedliche Wagenfolgen.

Kontrolle über die Symmetrie:
   C(8,5) = 8!/(5!·3!) = 56  (gleiches Ergebnis ✓).`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: Zug aus 2 identischen Speisewagen und 4 identischen Sitzwagen (6 Positionen).</p>
              <pre className="hint-code-block">{`C(6,2) = 6!/(2!·4!) = (6·5)/(2·1) = 30/2 = 15 Wagenfolgen.
   (= C(6,4) = 15 — Speisewagen- oder Sitzwagen-Plätze wählen.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 8! = 40 320 (alle Wagen permutieren) → <strong>✅ Richtig:</strong> Die 3 Erstklasse-Wagen sind untereinander identisch (ebenso die 5 Zweitklasse-Wagen). Es zählt nur die Positionsauswahl → C(8,3) = 56.</li>
              <li><strong>❌ Falsch:</strong> C(8,3) = 8!/3! = 6720 (Nenner-Faktor (8−3)! vergessen) → <strong>✅ Richtig:</strong> Beide Nennerfaktoren nötig: 8!/(3!·5!) = 56.</li>
              <li><strong>❌ Falsch:</strong> 8·7·6 = 336 als Endergebnis stehen lassen → <strong>✅ Richtig:</strong> Noch durch 3! = 6 teilen (Reihenfolge der 3 gewählten Positionen ist egal): 336/6 = 56.</li>
            </ul>,
            <p>Selbstkontrolle: Rechne C(8,5) = 8·7·6·5·4/(5·4·3·2·1) und prüfe, ob ebenfalls 56 herauskommt (Symmetrie). Frage: Warum liefern C(8,3) und C(8,5) dasselbe Ergebnis — was bedeutet das intuitiv (1.-Klasse-Plätze wählen ↔ 2.-Klasse-Plätze wählen)?</p>,
          ),
          solution: 'Urnenmodell: 8 Kugeln ≅ 8 Wagenpositionen,\n3 Ziehungen ohne Wiederholung ohne Reihenfolge.\n\nC(8, 3) = (8 über 3) = 56 mögliche Wagenreihungen.',
        },
      ],
    },
    {
      id: 'b6a7',
      nr: 7,
      title: 'Anagramme',
      referenz: ['kombinatorik'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Wie viele „Anagramme" des Wortes „MATHE" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 5 Buchstaben angeordnet werden?',
          hint: h(
            <>
              <p>Ein <span className="hint-em">Anagramm</span> ist eine Umordnung aller Buchstaben eines Wortes. Eine <span className="hint-em">Permutation</span> ist eine Anordnung aller Elemente in einer Reihenfolge — und genau das wird hier gezählt.</p>
              <p>MATHE hat 5 Buchstaben, die ALLE <span className="hint-em">verschieden</span> sind (M, A, T, H, E — keiner doppelt). Die Reihenfolge zählt (MATHE ist ein anderes Wort als MAHTE), jeder Buchstabe wird genau einmal verwendet (keine Wiederholung).</p>
              <p><span className="hint-em">Formel für Permutationen verschiedener Elemente</span>: P(n) = n! (n Fakultät). Begründung: für die 1. Position gibt es n Wahlmöglichkeiten, dann bleiben n−1 für die 2., n−2 für die 3., …, 1 für die letzte → n·(n−1)·…·1 = n!.</p>
            </>,
            <>
              <p>So zählt man die Anagramme von MATHE:</p>
              <pre className="hint-code-block">{`1) Prüfen: alle 5 Buchstaben verschieden? M,A,T,H,E → ja.
   Reihenfolge zählt? ja. Wiederholung? nein.
   → Permutation von 5 verschiedenen Elementen: P(5) = 5!.

2) Anschaulich (Positionen nacheinander besetzen):
   1. Position: 5 Buchstaben zur Wahl
   2. Position: 4 übrig
   3. Position: 3 übrig
   4. Position: 2 übrig
   5. Position: 1 übrig
   → 5 · 4 · 3 · 2 · 1 = 120.

3) Ergebnis: P(5) = 5! = 120 verschiedene Anordnungen.`}</pre>
            </>,
            <>
              <p>Probe an kürzeren Wörtern (alle Anordnungen ausschreiben):</p>
              <pre className="hint-code-block">{`"AB":  AB, BA                         → 2! = 2 ✓
"ABC": ABC, ACB, BAC, BCA, CAB, CBA   → 3! = 6 ✓
"ABCD": 4! = 24 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 5² = 25 oder 5⁵ (als ob jede Position frei aus 5 Buchstaben wählbar wäre) → <strong>✅ Richtig:</strong> Jeder Buchstabe wird GENAU einmal verbraucht; nach jeder Wahl gibt es einen weniger → 5·4·3·2·1 = 5! = 120.</li>
              <li><strong>❌ Falsch:</strong> C(5,5) = 1 (Kombination) → <strong>✅ Richtig:</strong> Bei Anagrammen zählt die Reihenfolge (MATHE ≠ MAHTE); das ist eine Permutation P(5)=120, keine Auswahl.</li>
              <li><strong>❌ Falsch:</strong> durch irgendein k! teilen → <strong>✅ Richtig:</strong> Geteilt wird nur, wenn Buchstaben WIEDERHOLT vorkommen (siehe Teil b). In MATHE ist alles verschieden → reines 5! = 120.</li>
            </ul>,
            <p>Selbstkontrolle: 5! = 5·4·3·2·1 — Schritt für Schritt: 5·4=20, ·3=60, ·2=120, ·1=120. Frage: Warum 5·4·3·2·1 (jeder Faktor um 1 kleiner) statt 5·5·5·5·5 — was passiert nach jeder gesetzten Position mit dem Vorrat?</p>,
          ),
          solution: 'Alle 5 Buchstaben von MATHE sind verschieden.\nP(5) = 5! = 120 verschiedene Anordnungen.',
        },
        {
          letter: 'b',
          text: 'Wie viele „Anagramme" des Wortes „KLAUSUR" gibt es, das heißt, auf wie viele unterschiedliche Weisen können die 7 Buchstaben angeordnet werden?',
          hint: h(
            <>
              <p>KLAUSUR hat 7 Buchstaben, aber das <span className="hint-em">U kommt ZWEIMAL vor</span> (K, L, A, U, S, U, R). Die zwei U sind nicht unterscheidbar — vertauscht man sie, sieht das Wort gleich aus. Deshalb darf man NICHT einfach 7! rechnen, denn das würde jede Anordnung doppelt zählen.</p>
              <p><span className="hint-em">Permutation mit Wiederholung</span> — zwei gleichwertige Wege:</p>
              <ul>
                <li><span className="hint-em">Auswahlweg</span>: Zuerst aus den 7 Positionen die 2 für die U auswählen — C(7,2), Reihenfolge egal, weil U=U. Dann die 5 restlichen, alle verschiedenen Buchstaben (K,L,A,S,R) auf die übrigen 5 Plätze permutieren — 5!. Produkt: C(7,2)·5!.</li>
                <li><span className="hint-em">Korrekturweg (Formel)</span>: n! / (Wiederholungen!) = 7! / 2!. Man teilt durch 2! = 2, weil die 2 U auf 2! Arten untereinander vertauschbar sind, ohne ein neues Wort zu erzeugen.</li>
              </ul>
              <p>(C(n,k) = n!/(k!(n−k)!); n! = n·(n−1)·…·1.)</p>
            </>,
            <>
              <p>So zählt man die Anagramme von KLAUSUR (beide Wege führen zu 2520):</p>
              <pre className="hint-code-block">{`Auswahlweg:
1) 2 Positionen für die U aus 7 wählen (ohne Reihenfolge):
   C(7,2) = 7!/(2!·5!) = (7·6)/(2·1) = 42/2 = 21.
2) Die 5 verschiedenen Buchstaben K,L,A,S,R auf die 5
   restlichen Plätze: 5! = 120.
3) Produktregel: 21 · 120 = 2520.

Korrekturweg (Formel):
   alle 7 als verschieden gedacht: 7! = 5040.
   Doppelzählung der 2 U herausteilen: ÷ 2! = ÷ 2.
   7! / 2! = 5040 / 2 = 2520.

→ 2520 verschiedene Anagramme.`}</pre>
            </>,
            <>
              <p>Anderes Beispiel: „OTTO" (O 2×, T 2×, insgesamt 4 Buchstaben).</p>
              <pre className="hint-code-block">{`Formel: 4! / (2! · 2!) = 24 / (2·2) = 24/4 = 6.
Auflistung: OOTT, OTOT, OTTO, TOOT, TOTO, TTOO → 6 ✓
(durch JEDES mehrfache Vorkommen wird separat geteilt.)`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 7! = 5040 → <strong>✅ Richtig:</strong> Die zwei U sind identisch; vertauscht ergeben sie dasselbe Wort. 7! zählt jede Anordnung doppelt → durch 2! teilen → 2520.</li>
              <li><strong>❌ Falsch:</strong> nur 5! = 120 (die übrigen Buchstaben) → <strong>✅ Richtig:</strong> Man muss zusätzlich die 2 U-Positionen aus 7 wählen: C(7,2)·5! = 21·120 = 2520.</li>
              <li><strong>❌ Falsch:</strong> durch 2 statt durch 2! teilen — hier zufällig gleich, aber bei 3 gleichen Buchstaben fatal → <strong>✅ Richtig:</strong> Immer durch (Anzahl!) teilen: bei 2 gleichen ÷2!=÷2, bei 3 gleichen ÷3!=÷6 (nicht ÷3).</li>
            </ul>,
            <p>Selbstkontrolle: Beide Wege müssen übereinstimmen: C(7,2)·5! = 21·120 = 2520 und 7!/2! = 5040/2 = 2520 ✓. Frage: Warum teilt man durch 2! (=2) und nicht durch 2 „zufällig" — was würde man bei einem Wort mit DREI gleichen Buchstaben teilen müssen?</p>,
          ),
          solution: 'KLAUSUR hat 7 Buchstaben, U kommt zweimal vor.\n\nUrnenmodell für die U-Positionen:\n  n = 7 Positionen, k = 2 U\'s\n  C(7, 2) = (7 über 2) = 21\n\nPermutation der restlichen 5 Buchstaben:\n  5! = 120\n\nGesamt: C(7, 2) · P(5) = 21 · 120 = 2520\n\n(Alternativ: 7! / 2! = 5040 / 2 = 2520)',
        },
      ],
    },
    {
      id: 'b6a8',
      nr: 8,
      title: 'Gitterwege (Wenn noch Zeit ist …)',
      referenz: ['kombinatorik', 'binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Betrachten Sie das Gitter in Abbildung 1. Die Punkte markieren die so genannten Knoten des Gitters. Wie viele Wege mit genau 13 Schritten gibt es, um von A nach B zu gelangen? Dabei bedeutet ein Schritt, dass man von einem Knoten zu einem benachbarten Knoten geht. Ein Beispiel für einen Weg mit 13 Schritten ist in Abbildung 2 zu sehen.',
          hint: h(
            <>
              <p>Idee: Ein Weg von A (unten links) nach B (oben rechts) besteht aus lauter kleinen Schritten, jeder entweder <span className="hint-em">R</span> (nach rechts) oder <span className="hint-em">O</span> (nach oben). Da B genau 8 Felder rechts und 5 Felder über A liegt, braucht JEDER Weg genau 8 R-Schritte und 5 O-Schritte — zusammen 8+5 = 13 Schritte. Die Wege unterscheiden sich nur in der REIHENFOLGE dieser Schritte.</p>
              <p>Damit ist ein Weg dasselbe wie eine Anordnung des Wortes „RRRRRRRROOOOO" (8×R, 5×O). Gleichwertig: man wählt aus den 13 Schritt-Positionen aus, welche 5 die O-Schritte sind (der Rest ist automatisch R).</p>
              <p>Die R sind untereinander gleich, die O ebenfalls → keine Reihenfolge innerhalb gleicher Schritte, jede Position einmal vergeben → <span className="hint-em">Kombination ohne Wiederholung</span>: C(n, k) = n!/(k!(n−k)!), mit n=13 (alle Schritte), k=5 (die O-Schritte).</p>
            </>,
            <>
              <p>So zählt man die Gitterwege:</p>
              <pre className="hint-code-block">{`1) Schritte bestimmen: 8 nach rechts (R), 5 nach oben (O),
   insgesamt n = 13 Schritte.

2) Modell: Wähle, welche k = 5 der 13 Positionen O-Schritte
   sind (Rest R). Reihenfolge unter gleichen Schritten egal,
   keine Wiederholung → C(13, 5).

3) Ausrechnen:
   C(13,5) = 13! / (5! · 8!)
           = (13·12·11·10·9) / (5·4·3·2·1)
           = 154440 / 120
           = 1287.

→ 1287 unterschiedliche Wege.

Kontrolle über Symmetrie (die 8 R-Schritte wählen):
   C(13,8) = 13!/(8!·5!) = 1287  (gleiches Ergebnis ✓).`}</pre>
            </>,
            <>
              <p>Kleines Beispiel zum Nachvollziehen: Gitter 2 rechts, 1 oben (3 Schritte).</p>
              <pre className="hint-code-block">{`C(3,1) = 3!/(1!·2!) = 3 Wege.
Alle aufschreiben (Position des O-Schritts):
   ORR, ROR, RRO → 3 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2¹³ (bei jedem der 13 Schritte frei R oder O) → <strong>✅ Richtig:</strong> Die Anzahlen sind FEST: genau 8 R und 5 O; nur die Reihenfolge variiert → C(13,5) = 1287. (2¹³ erlaubt z.B. 13×R, was nicht nach B führt.)</li>
              <li><strong>❌ Falsch:</strong> 13! (alle 13 Schritte permutieren) → <strong>✅ Richtig:</strong> Die 8 R sind untereinander identisch (÷8!) und die 5 O ebenso (÷5!): 13!/(8!·5!) = 1287. 13! zählt jede Reihenfolge der gleichen Schritte unnötig mit.</li>
              <li><strong>❌ Falsch:</strong> C(13,5) = 13·12·11·10·9 = 154440 (Nenner 5! vergessen) → <strong>✅ Richtig:</strong> Durch 5! = 120 teilen: 154440/120 = 1287.</li>
            </ul>,
            <p>Selbstkontrolle: Im 2-rechts-1-oben-Beispiel passen die 3 ausgeschriebenen Wege zu C(3,1)=3. Prüfe für die Aufgabe: C(13,5) und C(13,8) sollten beide 1287 sein (Symmetrie). Frage: Warum ist es eine Kombination (Auswahl der O-Positionen) und keine freie Wahl 2¹³ — was liegt an den Schrittzahlen 8 und 5 fest?</p>,
          ),
          solution: 'Um von A nach B zu kommen: genau 8 Schritte rechts + 5 Schritte oben.\n\nUrnenmodell:\n  n = 13 Schritte, k = 5 nach-oben-Schritte auswählen\n  Ohne Zurücklegen, ohne Reihenfolge:\n\nC(13, 5) = (13 über 5) = 1287 unterschiedliche Wege.',
        },
      ],
    },
  ],
}
