import type { QuizQuestion } from '../types'
import Frac from '../utils/Frac'

export const quizData: QuizQuestion[] = [
  {
    q: <>{'Was ergibt '}<Frac n="3" d="7" />{' + '}<Frac n="7" d="3" />{'?'}</>,
    opts: [<Frac n="10" d="10" />, <Frac n="58" d="21" />, <Frac n="21" d="58" />, <Frac n="10" d="21" />],
    ans: 1,
    exp: <>{'Gemeinsamer Nenner ist 21: '}<Frac n="9" d="21" />{' + '}<Frac n="49" d="21" />{' = '}<Frac n="58" d="21" />{'.'}</>,
  },
  {
    q: 'Was ergibt 5⁻² · 100?',
    opts: ['−100', '2500', '4', '25'],
    ans: 2,
    exp: <>{'5⁻² = '}<Frac n="1" d="25" />{', also '}<Frac n="100" d="25" />{' = 4.'}</>,
  },
  {
    q: 'Was ergibt √2 · √32?',
    opts: ['√34', '16', '8', '4√2'],
    ans: 2,
    exp: '√2 · √32 = √(2·32) = √64 = 8.',
  },
  {
    q: 'Welcher Ausdruck kann NICHT weiter gekürzt werden?',
    opts: [<Frac n="a²−b²" d="a−b" />, <Frac n="k²+k³" d="k²" />, <Frac n="a²+b²" d="a+b" />, <Frac n="a−b" d="b−a" />],
    ans: 2,
    exp: <><Frac n="a²+b²" d="a+b" />{' hat keine gemeinsamen Faktoren – nicht kürzbar. Die anderen lassen sich vereinfachen.'}</>,
  },
  {
    q: 'Wie lautet die 3. binomische Formel?',
    opts: ['(a+b)² = a²+2ab+b²', '(a−b)² = a²−2ab+b²', '(a+b)(a−b) = a²−b²', '(a+b)³ = a³+3a²b+3ab²+b³'],
    ans: 2,
    exp: 'Die 3. binomische Formel lautet: (a+b)(a−b) = a²−b².',
  },
  {
    q: 'Was ist die Steigung der Geraden y = −2x + 1?',
    opts: ['1', '2', '−2', '−1'],
    ans: 2,
    exp: 'In der Normalform y = m·x + b ist m = −2 die Steigung.',
  },
  {
    q: <>{'An welcher Stelle schneidet y = ('}<Frac n="1" d="2" />{')x − 2 die y-Achse?'}</>,
    opts: ['0', '−2', '4', '2'],
    ans: 1,
    exp: 'Der y-Achsenabschnitt ist b = −2 (setze x = 0: y = −2).',
  },
  {
    q: <>{'Was ergibt '}<Frac n="k² + k³" d="k²" />{'?'}</>,
    opts: ['k', '1 + k', 'k + k²', <Frac n="1" d="k" />],
    ans: 1,
    exp: <>{'k²'}<Frac n="1+k" d="k²" />{' = 1+k. Man klammert k² im Zähler aus und kürzt.'}</>,
  },
  {
    q: 'Was gilt für √(a+b) = √a + √b?',
    opts: [
      'Immer wahr',
      'Nur für a = b',
      'Nicht allgemein gültig – Gegenbeispiel: a=9, b=16',
      'Gilt nur für a,b > 1',
    ],
    ans: 2,
    exp: 'Für a=9, b=16: √25 = 5, aber √9+√16 = 3+4 = 7. Die Gleichung gilt nicht allgemein.',
  },
  {
    q: <>{'Was ist der Schnittpunkt der Geraden y = −2x+1 und y = ('}<Frac n="1" d="2" />{')x−2?'}</>,
    opts: ['(1, −1)', <>{'('}<Frac n="6" d="5" />{', −'}<Frac n="7" d="5" />{')'}</>, '(0, 1)', '(2, −3)'],
    ans: 1,
    exp: <>{'−2x+1 = ('}<Frac n="1" d="2" />{')x−2 → 3 = ('}<Frac n="5" d="2" />{')x → x = '}<Frac n="6" d="5" />{'; y = −'}<Frac n="12" d="5" />{' + '}<Frac n="5" d="5" />{' = −'}<Frac n="7" d="5" />{'.'}</>,
  },
  {
    q: 'Sei M = {1, 2, 3}. Welche Aussage ist korrekt?',
    opts: ['{1} ∈ M', '1 ⊆ M', '{1} ⊆ M', '{1, 2, 3} ∈ M'],
    ans: 2,
    exp: '{1} ⊆ M ist korrekt: {1} ist eine Teilmenge von M. {1} ∈ M ist falsch (1 ∈ M wäre richtig). 1 ⊆ M ist falsch (1 ist kein Mengensymbol).',
  },
  {
    q: 'Seien X = {1,3,5,7} und Z = {1,5}. Was ergibt X \\ Z?',
    opts: ['{1,5}', '{3,7}', '∅', '{1,3,5,7}'],
    ans: 1,
    exp: 'X \\ Z enthält alle Elemente aus X, die nicht in Z sind: {1,3,5,7} \\ {1,5} = {3,7}.',
  },
  {
    q: 'Wie viele Elemente hat die Potenzmenge P(A) für A = {1, 2, 3}?',
    opts: ['3', '6', '8', '9'],
    ans: 2,
    exp: '|P(A)| = 2^|A| = 2³ = 8. Die 8 Teilmengen sind: ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.',
  },
  {
    q: 'Welche der folgenden Mengendarstellungen liefert {3, 8, 13, 18, …}?',
    opts: ['{3n : n ∈ ℕ}', '{5n + 3 : n ∈ ℕ}', '{3n + 5 : n ∈ ℕ}', '{5n − 2 : n ∈ ℕ}'],
    ans: 1,
    exp: 'Für n = 0,1,2,3: 5·0+3=3, 5·1+3=8, 5·2+3=13, 5·3+3=18. Also {5n+3 : n ∈ ℕ}.',
  },
  {
    q: 'Was besagt das De Morgansche Gesetz A ∪ B̄?',
    opts: ['Ā ∪ B̄', 'Ā ∩ B̄', 'A ∩ B', 'Ā ∪ B'],
    ans: 1,
    exp: 'De Morgan: Das Komplement einer Vereinigung ist der Schnitt der Komplemente. A ∪ B̄ = Ā ∩ B̄.',
  },

  // Blatt 2 – Logik
  {
    q: 'Was ergibt ¬(A ∧ B)?',
    opts: ['¬A ∧ ¬B', '¬A ∨ ¬B', 'A ∨ B', '¬A ∧ B'],
    ans: 1,
    exp: 'De Morgansches Gesetz: ¬(A ∧ B) = ¬A ∨ ¬B.',
  },
  {
    q: 'Welcher Ausdruck ist äquivalent zu P ⇒ Q?',
    opts: ['Q ⇒ P', '¬P ⇒ ¬Q', '¬Q ⇒ ¬P', 'P ∧ ¬Q'],
    ans: 2,
    exp: 'Die Kontraposition ¬Q ⇒ ¬P ist äquivalent zu P ⇒ Q. Q ⇒ P (Umkehrung) und ¬P ⇒ ¬Q (Inverse) sind es nicht.',
  },
  {
    q: 'Was bedeutet "A ist hinreichend für B"?',
    opts: ['B ⇒ A', 'A ⟺ B', 'A ⇒ B', '¬A ⇒ ¬B'],
    ans: 2,
    exp: 'A ist hinreichend für B bedeutet: A ⇒ B. „A notwendig für B" wäre hingegen B ⇒ A.',
  },
  {
    q: 'Welche zwei Spalten der Wahrheitstafel stimmen überein (De Morgan)?',
    opts: ['¬(A∧B) und ¬A∧¬B', '¬(A∨B) und ¬A∨¬B', '¬(A∧B) und ¬A∨¬B', '¬(A∨B) und A∧B'],
    ans: 2,
    exp: 'De Morgan: ¬(A∧B) ≡ ¬A∨¬B und ¬(A∨B) ≡ ¬A∧¬B.',
  },

  // Blatt 3 – Summenzeichen & Binomialkoeffizienten
  {
    q: 'Was ergibt ∑(k=0 bis 3) 2ᵏ?',
    opts: ['8', '12', '15', '16'],
    ans: 2,
    exp: '2⁰ + 2¹ + 2² + 2³ = 1 + 2 + 4 + 8 = 15.',
  },
  {
    q: 'Was ergibt C(6, 2)?',
    opts: ['12', '15', '30', '36'],
    ans: 1,
    exp: 'C(6,2) = 6! / (2! · 4!) = 720 / (2 · 24) = 15.',
  },
  {
    q: 'Was ergibt ∑(k=0 bis n) C(n,k) (Binomischer Lehrsatz mit x=y=1)?',
    opts: ['n²', 'n!', '2ⁿ', 'n·2'],
    ans: 2,
    exp: 'Mit x=y=1 im Binomischen Lehrsatz: (1+1)ⁿ = ∑ C(n,k) = 2ⁿ.',
  },

  // Blatt 3–4 – Vollständige Induktion
  {
    q: 'Was ist beim Induktionsschritt (IS) zu zeigen?',
    opts: ['A(1) gilt', 'A(n) gilt für alle n', 'Aus A(n) folgt A(n+1)', 'A(n) und A(1) gelten'],
    ans: 2,
    exp: 'Im IS nimmt man A(n) als Induktionsvoraussetzung (IV) an und zeigt daraus, dass A(n+1) gilt.',
  },

  // Blatt 4 – Supremum/Infimum & Quantoren
  {
    q: 'Was gilt für die Menge M = (0, 1]?',
    opts: [
      'sup=1=max, inf=0=min',
      'sup=1=max, inf=0, kein min',
      'sup=1, kein max, inf=0',
      'sup=1, kein max, inf=0, kein min',
    ],
    ans: 1,
    exp: '1 ∈ (0,1] → max = sup = 1. Da 0 ∉ (0,1] (strenge Ungleichung), existiert kein min, aber inf = 0.',
  },
  {
    q: 'Welche Aussage ist wahr (für x, y ∈ ℝ)?',
    opts: ['∀x ∀y: y = x²', '∃x ∀y: y = x²', '∀x ∃y: y = x²', '∃y ∀x: y = x²'],
    ans: 2,
    exp: '∀x ∃y: y = x² ist wahr – für jedes x wähle y := x². Die anderen Aussagen sind falsch, weil x² nie negative Werte annimmt.',
  },

  // Blatt 5 – Funktionen
  {
    q: 'Was bedeutet "f: A → B ist injektiv"?',
    opts: [
      'f(A) = B',
      'x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂)',
      'Jedes y hat mindestens ein Urbild',
      'f ist umkehrbar',
    ],
    ans: 1,
    exp: 'Injektiv (eineindeutig) heißt: verschiedene Inputs liefern verschiedene Outputs – x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂).',
  },
  {
    q: 'Sei f: ℝ → ℝ, x ↦ x². Was ist f⁻¹({4})?',
    opts: ['{2}', '{−2}', '{−2, 2}', '{−4, 4}'],
    ans: 2,
    exp: 'Das Urbild f⁻¹({4}) enthält alle x mit x² = 4, also x = 2 und x = −2.',
  },

  // Blatt 7–9 – Folgen & Reihen
  {
    q: <>{'Was ist lim(n→∞) '}<Frac n="n" d="2n+1" />{'?'}</>,
    opts: ['0', <Frac n="1" d="2" />, '1', '∞'],
    ans: 1,
    exp: <><Frac n="n" d="2n+1" />{' = '}<Frac n="1" d={'2+1/n'} />{' → '}<Frac n="1" d="2" />{' für n→∞.'}</>,
  },
  {
    q: 'Für welche q konvergiert die geometrische Reihe ∑(n=0..∞) qⁿ?',
    opts: ['q > 0', 'q < 1', '|q| < 1', 'q ≤ 1'],
    ans: 2,
    exp: <>{'Die geometrische Reihe konvergiert genau für |q| < 1, mit Grenzwert '}<Frac n="1" d="1−q" />{'.'}</>,
  },

  // Blatt 11 – Stetigkeit
  {
    q: 'Was besagt der Zwischenwertsatz für f stetig auf [a, b]?',
    opts: [
      'f ist dort differenzierbar',
      'f nimmt jeden Wert zwischen f(a) und f(b) an',
      'f hat ein globales Maximum',
      'f ist auf [a, b] monoton',
    ],
    ans: 1,
    exp: 'Zwischenwertsatz: Ist f stetig auf [a,b] und y zwischen f(a) und f(b), existiert ein x ∈ [a,b] mit f(x) = y.',
  },

  // Blatt 13 – Differentiation
  {
    q: 'Was ist die Ableitung von f(x) = x⁴?',
    opts: ['x³', '4x⁴', '4x³', <Frac n="x⁵" d="5" />],
    ans: 2,
    exp: 'Potenzregel: (xⁿ)′ = n·xⁿ⁻¹, also (x⁴)′ = 4x³.',
  },
  {
    q: 'Was ist die Ableitung von f(x) = (x² + 1)³?',
    opts: ['3(x² + 1)²', '6x(x² + 1)²', '3x²(x² + 1)²', '6(x² + 1)²'],
    ans: 1,
    exp: 'Kettenregel: [g(h(x))]′ = g′(h(x))·h′(x). Mit g(u)=u³, h(x)=x²+1: 3(x²+1)² · 2x = 6x(x²+1)².',
  },
]
