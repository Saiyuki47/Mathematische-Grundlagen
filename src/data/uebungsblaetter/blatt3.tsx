import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt3: MatheBlatt = {
  id: 'blatt3',
  nr: '3',
  titel: 'Summenzeichen, Binomialkoeffizienten, vollständige Induktion',
  aufgaben: [
    {
      id: 'b3a1',
      nr: 1,
      title: 'Summenzeichen',
      referenz: ['summen-produktzeichen'],
      subaufgaben: [
        {
          letter: 'a',
          text: '1² + 2³ + 3⁴ + 4⁵ + 5⁶',
          hint: h(
            <>
              <p>Das <span className="hint-em">Summenzeichen Σ</span> fasst gleichartige Terme kompakt zusammen:</p>
              <p>Σ(k=a bis b) f(k) = f(a) + f(a+1) + … + f(b)</p>
              <p>Gesucht: Formel f(k) für den k-ten Term sowie Anfangs- und Endindex.</p>
            </>,
            <>
              <ol>
                <li>Tabelliere die Terme und den dazugehörigen Laufindex k</li>
                <li>Erkenne den Zusammenhang: Wie hängen Basis und Exponent jeweils von k ab?</li>
                <li>Formuliere f(k) und bestimme Anfangsindex (erstes k) und Endindex (letztes k)</li>
                <li>Überprüfe f(k) für den ersten und letzten Term</li>
              </ol>
            </>,
            <>
              <p>Beispiel: 1 + 4 + 9 + 16 = Σ(k=1 bis 4) k²</p>
              <pre className="hint-code-block">{`k=1: 1² = 1
k=2: 2² = 4
k=3: 3² = 9
k=4: 4² = 16 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k=0 als Startindex → <strong>✅ Richtig:</strong> Bei k=0 wäre der erste Term 0^(0+1)=0, aber der erste Term ist 1²; also k=1</li>
              <li><strong>❌ Falsch:</strong> f(k) = kᵏ (Exponent = k) → <strong>✅ Richtig:</strong> f(k) = k^(k+1) (Exponent = k+1); Probe: k=2 → 2³=8 ✓, kᵏ würde 2²=4 ergeben ✗</li>
            </ul>,
            <p>Worin besteht der Unterschied zwischen einer Summe wie k² (Quadrat des Index) und k^(k+1) (Index als Basis und Exponent)? Was macht diese Summe schwierig zu berechnen, aber einfach zu schreiben?</p>,
          ),
          solution: '5\nΣ k^(k+1) = 1² + 2³ + 3⁴ + 4⁵ + 5⁶\nk=1',
        },
        {
          letter: 'b',
          text: <>{'1 + '}<Frac n="1" d="3" />{' + '}<Frac n="1" d="9" />{' + '}<Frac n="1" d="27" /></>,
          hint: h(
            <>
              <p>Die Terme sind <span className="hint-em">Potenzen von 1/3</span>: (1/3)⁰=1, (1/3)¹=1/3, usw. Mit Startindex k=0 beginnt die Folge beim richtigen ersten Term.</p>
            </>,
            <>
              <ol>
                <li>Erkenne den Typ der Folge: Wächst oder fällt sie geometrisch (konstanter Quotient)?</li>
                <li>Bestimme den Quotienten q = (zweiter Term)/(erster Term)</li>
                <li>Wähle Startindex k=0 so, dass der erste Term q⁰ = 1 ergibt</li>
                <li>Schreibe f(k) = qᵏ und bestimme den Endindex</li>
              </ol>
            </>,
            <>
              <p>Beispiel: 1 + 2 + 4 + 8 = Σ(k=0 bis 3) 2ᵏ</p>
              <pre className="hint-code-block">{`k=0: 2⁰ = 1
k=1: 2¹ = 2
k=2: 2² = 4
k=3: 2³ = 8 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k=1 als Startindex → <strong>✅ Richtig:</strong> (1/3)⁰ = 1 ist der erste Term; k muss bei 0 beginnen</li>
              <li><strong>❌ Falsch:</strong> f(k) = 1/k (1/1, 1/2, 1/3...) → <strong>✅ Richtig:</strong> f(k) = (1/3)ᵏ (geometrische Folge mit q=1/3); f(1)=1/3 ✓, 1/1=1 ≠ 1/3 ✗</li>
            </ul>,
            <p>Warum ist k=0 der natürliche Startindex für geometrische Folgen — und was würde passieren, wenn man k=1 als Start wählt? Welchen Term würde man dann verlieren?</p>,
          ),
          solution: '3\nΣ (1/3)ᵏ = 1 + 1/3 + 1/9 + 1/27\nk=0',
        },
        {
          letter: 'c',
          text: '4 + 7 + 10 + 13 + 16 + 19 + 22',
          hint: h(
            <>
              <p>Eine <span className="hint-em">arithmetische Folge</span> hat konstante Differenz d. Für Startindex k=0 gilt der Term f(k) = a₀ + d·k.</p>
            </>,
            <>
              <ol>
                <li>Prüfe, ob die Differenz zwischen aufeinanderfolgenden Termen konstant ist — das identifiziert eine arithmetische Folge</li>
                <li>Notiere die konstante Differenz d und den ersten Term a₀</li>
                <li>Schreibe f(k) = a₀ + d·k mit k=0 als Startindex</li>
                <li>Bestimme den Endindex: Bei n Termen ist der letzte Index k = n−1</li>
              </ol>
            </>,
            <>
              <p>Beispiel: 1 + 3 + 5 + 7 = Σ(k=0 bis 3) (1+2k)</p>
              <pre className="hint-code-block">{`k=0: 1+0=1,  k=1: 1+2=3,  k=2: 1+4=5,  k=3: 1+6=7 ✓`}</pre>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Endindex k=7 (weil 7 Terme) → <strong>✅ Richtig:</strong> Mit k=0 bis k=6 gibt es 7 Terme (0,1,2,3,4,5,6 = 7 Werte)</li>
              <li><strong>❌ Falsch:</strong> f(k) = 3k (Startterm vergessen) → <strong>✅ Richtig:</strong> Erster Term ist 4 ≠ 0; f(k) = 4+3k; k=0: 4+0=4 ✓</li>
            </ul>,
            <p>Warum hat eine arithmetische Folge mit Startindex k=0 und Endindex k=n genau n+1 Terme — nicht n? Und warum würde f(k) = 3k (ohne den Startterm) diese Summe falsch darstellen?</p>,
          ),
          solution: '6\nΣ (4 + 3k) = 4 + 7 + 10 + 13 + 16 + 19 + 22\nk=0',
        },
      ],
    },
    {
      id: 'b3a2',
      nr: 2,
      title: 'Identitäten mit dem Binomischen Lehrsatz',
      referenz: ['binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie für n ∈ ℕ*:\n  Σ(k=0 bis n) C(n,k) = 2ⁿ',
          hint: h(
            <>
              <p>Der <span className="hint-em">Binomische Lehrsatz</span> lautet:</p>
              <p>(x+y)ⁿ = Σ(k=0 bis n) C(n,k) · x^(n−k) · yᵏ</p>
              <p>Durch geschickte Wahl von x und y kann man direkt auf 2ⁿ kommen.</p>
            </>,
            <>
              <ol>
                <li>Wähle x und y so, dass (x+y)ⁿ den Zielwert 2ⁿ ergibt</li>
                <li>Setze diese Werte in den Binomischen Lehrsatz ein</li>
                <li>Vereinfache die x^(n−k) · yᵏ Terme mit den gewählten Werten</li>
                <li>Lies das Ergebnis ab</li>
              </ol>
            </>,
            <>
              <p>Probe für n=2: C(2,0)+C(2,1)+C(2,2) = 1+2+1 = 4 = 2² ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Binomischen Lehrsatz als Σ C(n,k)·xᵏ·y^(n−k) statt Σ C(n,k)·x^(n−k)·yᵏ → <strong>✅ Richtig:</strong> Das Ergebnis ist das gleiche (da man x=y=1 einsetzt), aber konsistente Notation ist wichtig</li>
              <li><strong>❌ Falsch:</strong> 1^(n−k)·1ᵏ = 1 ohne Begründung → <strong>✅ Richtig:</strong> 1 hoch jede positive Zahl ist 1; 1^m = 1 für alle m ≥ 0</li>
            </ul>,
            <p>Warum ist der Binomische Lehrsatz eine nützliche Brücke für diese Identität? Was ist die Kernidee: Welche algebraische Struktur verbindet 2ⁿ mit Binomialkoeffizienten?</p>,
          ),
          solution: '       n\n2ⁿ = (1+1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·1ᵏ\n                              k=0\n   n\n = Σ C(n,k)  ✓\n   k=0',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie für n ∈ ℕ*:\n  Σ(k=0 bis n) (−1)ᵏ · C(n,k) = 0',
          hint: h(
            <>
              <p>Analog zu (a): wähle im Binomischen Lehrsatz <span className="hint-em">x = 1, y = −1</span>. Dann wird (x+y)ⁿ = 0ⁿ = 0 (für n ≥ 1).</p>
            </>,
            <>
              <ol>
                <li>Wähle x und y so, dass (x+y)ⁿ den Zielwert 0 ergibt (für n ≥ 1)</li>
                <li>Setze diese Werte in den Binomischen Lehrsatz ein</li>
                <li>Vereinfache die Terme — beachte das entstehende Vorzeichen-Muster</li>
                <li>Erkläre, warum die Formel nur für n ≥ 1 gilt</li>
              </ol>
            </>,
            <>
              <p>Probe für n=2: (−1)⁰·1 + (−1)¹·2 + (−1)²·1 = 1 − 2 + 1 = 0 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Behaupten, 0⁰ = 0 und damit die Formel auch für n=0 gilt → <strong>✅ Richtig:</strong> 0⁰ ist konventionell 1 (nicht 0); für n=0 würde die rechte Seite 1 sein, nicht 0 → daher n ≥ 1</li>
              <li><strong>❌ Falsch:</strong> (1+(−1))ⁿ = 1+1 = 2 falsch auswerten → <strong>✅ Richtig:</strong> 1+(−1) = 0, also 0ⁿ = 0 für n ≥ 1</li>
            </ul>,
            <p>Die Summe Σ(−1)ᵏ·C(n,k) hat abwechselnde Vorzeichen. Was sagt die Identität inhaltlich — welche kombinatorische Aussage steckt dahinter? (Hinweis: Teilmengen gerader vs. ungerader Kardinalität)</p>,
          ),
          solution: '         n\n0 = (1−1)ⁿ  binom. Lehrsatz= Σ C(n,k)·1^(n−k)·(−1)ᵏ\n                               k=0\n   n\n = Σ (−1)ᵏ C(n,k)  ✓\n   k=0',
        },
      ],
    },
    {
      id: 'b3a3',
      nr: 3,
      title: 'Vollständige Induktion',
      referenz: ['vollstaendige-induktion'],
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Für jedes n ∈ ℕ* gilt:\n  Σ(k=1 bis n) '}
              <Frac n="1" d="k(k+1)" />
              {' = 1 − '}
              <Frac n="1" d="n+1" />
            </>
          ),
          hint: h(
            <>
              <p>Bei der <span className="hint-em">vollständigen Induktion</span> beweist man A(n) in zwei Schritten:</p>
              <ul>
                <li><strong>IA</strong>: Basisfall A(n₀) direkt nachrechnen</li>
                <li><strong>IS</strong>: Aus IV A(n) folgt A(n+1) – den nächsten Term zur Summe addieren und umformen</li>
              </ul>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Setze n=1 in LHS und RHS ein und prüfe Gleichheit</li>
                <li><strong>IS-Ansatz:</strong> Schreibe Σ(k=1..n+1) als Σ(k=1..n) + letzter Term (n+1)</li>
                <li><strong>IV einsetzen:</strong> Ersetze Σ(k=1..n) durch den Ausdruck der IV</li>
                <li><strong>Umformen:</strong> Bringe die Brüche auf gemeinsamen Nenner und vereinfache bis RHS(n+1) erscheint</li>
              </ol>
            </>,
            <>
              <p>Probe für n=2: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3 = 1 − 1/3 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Im IS die Summe Σ(k=1..n+1) direkt auswerten ohne IV zu nutzen → <strong>✅ Richtig:</strong> Letzten Term abtrennen: Σ(k=1..n+1) = Σ(k=1..n) + (n+1)-ter Term, dann IV einsetzen</li>
              <li><strong>❌ Falsch:</strong> Gemeinsamer Nenner für −1/(n+1) + 1/((n+1)(n+2)) ist (n+1) → <strong>✅ Richtig:</strong> Gemeinsamer Nenner ist (n+1)(n+2); dann: −(n+2)/((n+1)(n+2)) + 1/((n+1)(n+2)) = −(n+1)/((n+1)(n+2)) = −1/(n+2)</li>
            </ul>,
            <p>Warum ist die Teleskopstruktur 1 − 1/(n+1) so nützlich für diesen Induktionsbeweis? Was macht es einfach, den nächsten Term anzuhängen — und wie erkennt man vorher, dass diese Darstellung funktionieren wird?</p>,
          ),
          solution: (
            <>
              {'IA (n=1): '}<Frac n="1" d="1·2" />{' = '}<Frac n="1" d="2" />{' = 1 − '}<Frac n="1" d="2" />{' ✓\n\n'}
              {'IS: Σ_{k=1}^{n+1} = Σ_{k=1}^n + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
              {'  = (1 − '}<Frac n="1" d="n+1" />{') + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
              {'  = 1 − '}<Frac n="n+2" d="(n+1)(n+2)" />{' + '}<Frac n="1" d="(n+1)(n+2)" />{'\n'}
              {'  = 1 − '}<Frac n="n+1" d="(n+1)(n+2)" />{' = 1 − '}<Frac n="1" d="n+2" />{' ✓ □'}
            </>
          ),
        },
        {
          letter: 'b',
          text: 'Für jedes n ∈ ℕ gilt: 2ⁿ ≥ n + 1',
          hint: h(
            <>
              <p>Im IS muss die <span className="hint-em">Induktionsvoraussetzung (IV)</span> 2ⁿ ≥ n+1 genutzt werden. Starte mit 2^(n+1) = 2·2ⁿ und schätze mit der IV ab.</p>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Prüfe den Basisfall n=0 direkt</li>
                <li><strong>IS-Ansatz:</strong> Schreibe 2^(n+1) = 2·2ⁿ, um die IV nutzen zu können</li>
                <li><strong>IV einsetzen:</strong> Ersetze 2ⁿ durch die untere Schranke aus der IV</li>
                <li><strong>Weiterabschätzen:</strong> Zeige, dass das Ergebnis ≥ (n+1)+1 gilt — hierfür n ≥ 0 nutzen</li>
              </ol>
            </>,
            <>
              <p>Warum gilt 2n+2 ≥ n+2? Weil n ≥ 0, also n ≥ 0, d. h. n+2 ≤ 2n+2 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 2^(n+1) direkt ohne Umschreibung lassen → <strong>✅ Richtig:</strong> 2^(n+1) = 2·2ⁿ, dann kann man 2ⁿ ≥ n+1 (IV) einsetzen: 2·2ⁿ ≥ 2(n+1) = 2n+2</li>
              <li><strong>❌ Falsch:</strong> 2n+2 ≥ n+2 ohne Begründung → <strong>✅ Richtig:</strong> 2n+2 ≥ n+2 ⟺ n ≥ 0, was für n ∈ ℕ gilt</li>
            </ul>,
            <p>Warum wächst 2ⁿ schneller als n+1 — obwohl es für n=0 und n=1 gleichauf ist? Was sagt der Induktionsbeweis über exponentielles vs. lineares Wachstum aus?</p>,
          ),
          solution: 'IA (n=0): 2⁰ = 1 ≥ 1 ✓\n\nIS: Sei n ∈ ℕ, angenommen 2ⁿ ≥ n+1 (IV).\n\n2^(n+1) = 2·2ⁿ ≥(IV) 2(n+1) = 2n+2 ≥(n≥0) n+2 ✓\n\nSomit ist A(n+1) wahr. □',
        },
        {
          letter: 'c',
          text: 'Für jedes n ∈ ℕ* ist 3ⁿ − 3 ohne Rest durch 6 teilbar.',
          hint: h(
            <>
              <p>Schreibe 3^(n+1) − 3 so um, dass (3ⁿ − 3) aus der IV erscheint. Nutze dann: wenn 6 | a und 6 | b, dann gilt 6 | (a+b).</p>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Prüfe 3¹ − 3 direkt auf Teilbarkeit durch 6</li>
                <li><strong>IS-Ansatz:</strong> Schreibe 3^(n+1) − 3 um, sodass (3ⁿ − 3) aus der IV sichtbar wird</li>
                <li><strong>Trick:</strong> Füge +c−c = 0 ein, um die IV-Struktur freizulegen</li>
                <li><strong>Schluss:</strong> Nutze: wenn 6 | a und 6 | b, dann 6 | (a+b)</li>
              </ol>
            </>,
            <>
              <p>Schlüsselumformung: 3ⁿ − 1 = (3ⁿ − 3) + 2, damit (3ⁿ − 3) aus der IV sichtbar wird.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 3ⁿ−1 = 3ⁿ−3 (die 1 als 3 geschrieben) → <strong>✅ Richtig:</strong> 3(3ⁿ−1) = 3(3ⁿ−3+2) = 3(3ⁿ−3) + 6; der Trick ist +2−2 = 0 einzufügen</li>
              <li><strong>❌ Falsch:</strong> 3(3ⁿ−3) durch 6 teilbar, ohne Begründung → <strong>✅ Richtig:</strong> IV: 3ⁿ−3 = 6m für ein m ∈ ℤ; also 3(3ⁿ−3) = 18m = 6·3m → durch 6 teilbar</li>
            </ul>,
            <p>Was ist die Kernidee beim Umschreiben von 3^(n+1)−3? Warum funktioniert der Trick 3ⁿ−1 = (3ⁿ−3)+2, und wie taucht die IV-Struktur dadurch auf?</p>,
          ),
          solution: 'IA (n=1): 3¹ − 3 = 0, 6 | 0 ✓\n\nIS: Sei n ∈ ℕ*, angenommen 6 | (3ⁿ−3) (IV).\n\n3^(n+1) − 3 = 3·3ⁿ − 3 = 3(3ⁿ−1)\n            = 3(3ⁿ−3+2) = 3(3ⁿ−3) + 6\n\nNach IV: 6 | (3ⁿ−3), also 6 | 3(3ⁿ−3).\nZusammen mit 6 | 6 folgt: 6 | (3^(n+1)−3). ✓ □',
        },
      ],
    },
    {
      id: 'b3a4',
      nr: 4,
      title: 'Potenzmenge (Knobelaufgabe)',
      referenz: ['vollstaendige-induktion', 'de-morgan-potenzmenge'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie mit vollständiger Induktion: Für jedes n ∈ ℕ* hat die Potenzmenge von {1,…,n} genau 2ⁿ Elemente.',
          hint: h(
            <>
              <p>Die <span className="hint-em">Potenzmenge</span> 𝒫(M) enthält alle Teilmengen von M. Beim IS erklärt man, wie 𝒫({'{1,…,n+1}'}) aus 𝒫({'{1,…,n}'}) entsteht: man teilt nach Teilmengen mit und ohne das Element n+1.</p>
            </>,
            <>
              <ol>
                <li><strong>IA:</strong> Bestimme 𝒫({'{1}'}) explizit und zähle die Elemente</li>
                <li><strong>IS-Ansatz:</strong> Teile 𝒫({'{1,…,n+1}'}) in zwei disjunkte Klassen auf: Teilmengen ohne n+1 und Teilmengen mit n+1</li>
                <li><strong>IV anwenden:</strong> Erkläre, warum jede Klasse genau 2ⁿ Elemente hat (Bijektion!)</li>
                <li><strong>Schluss:</strong> Beide Klassen zusammen: 2ⁿ + 2ⁿ = 2^(n+1)</li>
              </ol>
            </>,
            <>
              <p>Für n=2: 𝒫({'{1,2}'}) = {'{∅,{1},{2},{1,2}}'} → 4 = 2² ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> Disjunktheit der beiden Klassen nicht begründen → <strong>✅ Richtig:</strong> Klasse 1 enthält Teilmengen ohne (n+1); Klasse 2 enthält Teilmengen mit (n+1) — ein Überschneiden ist unmöglich</li>
              <li><strong>❌ Falsch:</strong> Annehmen, die zweite Klasse hat 2ⁿ+1 Elemente → <strong>✅ Richtig:</strong> Die Abbildung M ↦ M∪{'{n+1}'} ist eine Bijektion von Klasse 1 auf Klasse 2 → beide haben gleich viele (= 2ⁿ) Elemente</li>
            </ul>,
            <p>Was ist die Bijektion zwischen „Teilmengen ohne n+1" und „Teilmengen mit n+1", und warum garantiert sie gleiche Kardinalität? Und warum ist dieser Beweis eigentlich keine Überraschung — was sagt er über die binäre Entscheidung für jedes Element aus?</p>,
          ),
          solution: 'IA (n=1): 𝒫({1}) = {∅,{1}}, |𝒫({1})| = 2 = 2¹ ✓\n\nIS: Sei n ∈ ℕ*, angenommen |𝒫({1,…,n})| = 2ⁿ (IV).\n\n𝒫({1,…,n+1}) = 𝒫({1,…,n}) ∪ {M ∪{n+1} : M ∈ 𝒫({1,…,n})}\n\nDiese Vereinigung ist disjunkt, beide Teile haben 2ⁿ Elemente.\n→ |𝒫({1,…,n+1})| = 2ⁿ + 2ⁿ = 2·2ⁿ = 2^(n+1) ✓ □',
        },
      ],
    },
    {
      id: 'b3a5',
      nr: 5,
      title: 'Identitäten der Binomialkoeffizienten',
      referenz: ['binomialkoeffizienten'],
      subaufgaben: [
        {
          letter: 'a',
          text: 'Zeigen Sie: C(n,1) = n = C(n, n−1),  falls n ∈ ℕ*',
          hint: h(
            <>
              <p>Wende die <span className="hint-em">Formel C(n,k) = n! / (k!(n−k)!)</span> direkt für k=1 und k=n−1 an. Die Fakultäten kürzen sich weg.</p>
            </>,
            <>
              <ol>
                <li>Setze k=1 (bzw. k=n−1) in die Formel C(n,k) = n! / (k!(n−k)!) ein</li>
                <li>Vereinfache den Nenner, indem du n! durch die Faktoren im Nenner kürzt</li>
                <li>Nutze (n−(n−1)) = 1, um den zweiten Teil zu vereinfachen</li>
              </ol>
            </>,
            <>
              <p>Probe: C(5,1) = 5, C(5,4) = 5 ✓</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> 0! = 0 → <strong>✅ Richtig:</strong> 0! = 1 (per Definition; leeres Produkt ist 1)</li>
              <li><strong>❌ Falsch:</strong> n−(n−1) = n−n−1 = −1 → <strong>✅ Richtig:</strong> n−(n−1) = n−n+1 = 1 (Klammer richtig auflösen!)</li>
            </ul>,
            <p>Was bedeutet C(n,1) = n kombinatorisch — auf wie viele Arten kann man 1 Element aus n auswählen? Und was bedeutet C(n,n−1) = n: Warum sind „1 wählen" und „n−1 weglassen" äquivalent?</p>,
          ),
          solution: 'C(n,1) = n!/(1!·(n−1)!) = n·(n−1)!/(n−1)! = n\n\nC(n,n−1) = n!/((n−1)!·1!) = n·(n−1)!/(n−1)! = n',
        },
        {
          letter: 'b',
          text: 'Zeigen Sie: C(n,k) = C(n, n−k),  falls n, k ∈ ℕ und k ≤ n.',
          hint: h(
            <>
              <p>Wende die Formel für C(n, n−k) an und vereinfache. Der Ausdruck n−(n−k) vereinfacht sich zu k.</p>
            </>,
            <>
              <ol>
                <li>Setze n−k in die Formel ein: C(n, n−k) = n! / ((n−k)! · (n−(n−k))!)</li>
                <li>Vereinfache n−(n−k) sorgfältig (Klammer beachten!)</li>
                <li>Vergleiche das Ergebnis mit der Definition von C(n,k)</li>
              </ol>
            </>,
            <>
              <p>Anschaulich: k Elemente wählen entspricht (n−k) Elemente weglassen – dieselbe Anzahl an Möglichkeiten.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> n−(n−k) = n−n−k = −k (Klammer falsch aufgelöst) → <strong>✅ Richtig:</strong> n−(n−k) = n−n+k = k (die Klammer hat ein Minus davor, also Vorzeichen innen wechseln)</li>
            </ul>,
            <p>Was sagt C(n,k) = C(n,n−k) kombinatorisch aus — warum ist die Anzahl der Möglichkeiten, k Elemente auszuwählen, dieselbe wie n−k Elemente auszulassen?</p>,
          ),
          solution: 'C(n,n−k) = n! / ((n−k)! · (n−(n−k))!)\n          = n! / ((n−k)! · k!)\n          = C(n,k)  ✓',
        },
        {
          letter: 'c',
          text: 'Zeigen Sie: C(n,k) + C(n,k+1) = C(n+1,k+1),  falls n ∈ ℕ*, k ∈ ℕ, k+1 ≤ n.',
          hint: h(
            <>
              <p>Schreibe beide Koeffizienten mit der Formel aus und bringe sie auf den <span className="hint-em">gemeinsamen Nenner (k+1)!(n−k)!</span>.</p>
            </>,
            <>
              <ol>
                <li>Schreibe C(n,k) und C(n,k+1) als Brüche mit n! im Zähler</li>
                <li>Bestimme den gemeinsamen Nenner: (k+1)! · (n−k)!</li>
                <li>Erweitere beide Brüche auf diesen gemeinsamen Nenner</li>
                <li>Addiere die Zähler und vereinfache — beachte dass k und n−k sich aufheben</li>
                <li>Erkenne das Ergebnis als C(n+1, k+1)</li>
              </ol>
            </>,
            <>
              <p>Das ist das <span className="hint-em">Pascalsche Dreieck</span>: jede Zahl = Summe der zwei Zahlen darüber.</p>
            </>,
            <ul>
              <li><strong>❌ Falsch:</strong> k+1+n−k = n+2k+1 oder n+1−2k → <strong>✅ Richtig:</strong> k+1+n−k = n+1 (die k heben sich auf: +k−k = 0)</li>
              <li><strong>❌ Falsch:</strong> Gemeinsamen Nenner als k!·(n−k−1)! wählen → <strong>✅ Richtig:</strong> (k+1)!·(n−k)! ist der gemeinsame Nenner; dann (n−k)! für ersten Term: ·(k+1)/(k+1); und k! für zweiten Term: ·(n−k)/(n−k)</li>
            </ul>,
            <p>Was bedeutet C(n,k) + C(n,k+1) = C(n+1,k+1) im Pascalschen Dreieck: Welche zwei Einträge erzeugen welchen Eintrag in der nächsten Zeile — und warum ergibt das kombinatorisch Sinn?</p>,
          ),
          solution: 'C(n,k) + C(n,k+1)\n= n!/(k!(n−k)!) + n!/((k+1)!(n−k−1)!)\n\nGem. Nenner (k+1)!(n−k)!:\n= n!(k+1)/((k+1)!(n−k)!) + n!(n−k)/((k+1)!(n−k)!)\n= n!(k+1+n−k) / ((k+1)!(n−k)!)\n= (n+1)! / ((k+1)!(n−k)!)\n= C(n+1,k+1)  ✓',
        },
      ],
    },
  ],
}
