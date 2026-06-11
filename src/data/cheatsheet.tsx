import type { CheatCard } from '../types'
import Frac from '../utils/Frac'

export const cheatCards: CheatCard[] = [
  {
    title: 'Bruchrechnen',
    content: (
      <>
        {'Addition + Subtraktion:\n  '}
        <Frac n="a" d="b" />{' ± '}<Frac n="c" d="d" />{' = '}<Frac n="a·d ± b·c" d="b·d" />
        {'\n  → gemeinsamen Nenner bilden\n\nMultiplikation:\n  '}
        <Frac n="a" d="b" />{' · '}<Frac n="c" d="d" />{' = '}<Frac n="a·c" d="b·d" />
        {'\n\nDivision:\n  '}
        <Frac n="a" d="b" />{' : '}<Frac n="c" d="d" />{' = '}<Frac n="a" d="b" />{' · '}<Frac n="d" d="c" />
        {'  (Kehrwert)\n\nKürzen:\n  '}
        <Frac n="k·a" d="k·b" />{' = '}<Frac n="a" d="b" />
      </>
    ),
  },
  {
    title: 'Potenzregeln',
    content: (
      <>
        {'aⁿ · aᵐ = aⁿ⁺ᵐ\n'}
        <Frac n="aⁿ" d="aᵐ" />{' = aⁿ⁻ᵐ\n'}
        {'(aⁿ)ᵐ = aⁿ·ᵐ\n(a·b)ⁿ = aⁿ · bⁿ\na⁰ = 1  (a ≠ 0)\na⁻ⁿ = '}
        <Frac n="1" d="aⁿ" />
      </>
    ),
  },
  {
    title: 'Wurzelregeln',
    content: (
      <>
        {'√a · √b = √(a·b)\n'}
        <Frac n="√a" d="√b" />{' = √(a/b)\n'}
        {'(√a)² = a\n√(a²) = |a|\na^½ = √a\na^(1/n) = ⁿ√a\n\nNenner rational machen:\n  '}
        <Frac n="1" d="√a" />{' = '}<Frac n="√a" d="a" />{'\n  '}
        <Frac n="1" d="√a+√b" />{' = '}<Frac n="√a−√b" d="a−b" />
      </>
    ),
  },
  {
    title: 'Binomische Formeln',
    content: (
      <>
        {'1. (a + b)² = a² + 2ab + b²\n2. (a − b)² = a² − 2ab + b²\n3. (a + b)(a − b) = a² − b²\n\nAnwendung beim Kürzen:\n  Formel 3 ermöglicht Faktorisieren im Zähler:\n  '}
        <Frac n="a²−b²" d="a−b" />{' = a+b\n  Weil: a²−b² = (a+b)·(a−b), und (a−b) kürzt weg'}
      </>
    ),
  },
  {
    title: 'Geradengleichung',
    content: (
      <>
        {'Normalform:   y = m·x + b\n  m = Steigung\n  b = y-Achsenabschnitt\n\nSteigung berechnen:\n  m = '}
        <Frac n="y₂ − y₁" d="x₂ − x₁" />
        {'\n\nSchnittpunkt zweier Geraden:\n  y = m₁x + b₁ = m₂x + b₂\n  → nach x auflösen'}
      </>
    ),
  },
  {
    title: 'Ausklammern',
    content: `Faktor ausklammern:
  a·x + a·y = a·(x + y)

Vorzeichen ausklammern:
  −a + b = −(a − b)
  a − b = −(b − a)
  b − a = −(a − b)

Beispiel:
  b(a−b) + b − a
  = b(a−b) − (a−b)
  = (a−b)·(b−1)`,
  },
  {
    title: 'Kürzen von Brüchen',
    content: (
      <>
        {'Erlaubt (gleicher Faktor oben und unten):\n  '}
        <Frac n="k·a" d="k·b" />{' = '}<Frac n="a" d="b" />
        {'\n\nAnwendung – 3. Binomische Formel:\n  Ausgangspunkt: '}
        <Frac n="a²−b²" d="a−b" />
        {'\n  Schritt 1 – Zähler faktorisieren:\n    a²−b² = (a+b)·(a−b)\n  Schritt 2 – Einsetzen und kürzen:\n    '}
        <Frac n="a²−b²" d="a−b" />{' = '}<Frac n="(a+b)·(a−b)" d="a−b" />{' = a+b\n    Faktor (a−b) oben und unten → kürzt weg'}
        {'\n\nNicht erlaubt – keine gemeinsamen Faktoren:\n  '}
        <Frac n="a²+b²" d="a+b" />{' ≠ a+b\n    Summe im Zähler ist nicht faktorisierbar\n  '}
        <Frac n="1+k²" d="1+k³" />{' kein gemeinsamer Faktor\n  '}
        <Frac n="2a+3b" d="2c+3d" />{' 2,3 sind keine Faktoren'}
        {'\n\nVorzeichen:\n  '}
        <Frac n="a−b" d="b−a" />{' = −1\n  Nenner umformen: b−a = −(a−b)\n  Also: '}
        <Frac n="a−b" d="−(a−b)" />{' = −1\n  Gilt nur für a ≠ b  (sonst 0/0 undefiniert)\n  Trick: gegengleiche Terme → Ergebnis immer −1'}
      </>
    ),
  },
  {
    title: 'Rechenreihenfolge',
    content: `1. Klammern zuerst auflösen
2. Potenzen und Wurzeln
3. Punktrechnung (· /)
4. Strichrechnung (+ −)

Klammer auflösen:
  −2(2x−4) = −4x + 8
  x(1+x) = x + x²

Merke:
  (−)·(−) = +
  (−)·(+) = −`,
  },
  {
    title: 'Mengen – Grundbegriffe',
    content: `Schreibweisen:
  x ∈ A   x ist Element von A
  x ∉ A   x ist kein Element von A
  A ⊆ B   A ist Teilmenge von B
  A = B   A und B sind gleich
  |A|     Mächtigkeit von A

Besondere Mengen:
  ∅   leere Menge
  ℕ   natürliche Zahlen {0,1,2,3,…}
  ℤ   ganze Zahlen {…,−1,0,1,2,…}
  ℝ   reelle Zahlen`,
  },
  {
    title: 'Mengenoperationen',
    content: `A ∪ B  Vereinigung: x ∈ A oder x ∈ B
A ∩ B  Schnittmenge: x ∈ A und x ∈ B
A \\ B  Differenz: x ∈ A mit x ∉ B
Ā      Komplement: x ∉ A (bzgl. X)
A × B  Kart. Produkt: {(a,b)|a∈A,b∈B}

Rechenregeln:
  A ∩ B = B ∩ A  (Kommutativität)
  A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)`,
  },
  {
    title: 'De Morgan & Potenzmenge',
    content: `De Morgan'sche Gesetze:
  A ∪ B̅ = Ā ∩ B̅
  A ∩ B̅ = Ā ∪ B̅

Potenzmenge P(A):
  P(A) = {M : M ⊆ A}  (Menge aller Teilmengen)
  |P(A)| = 2^|A|

  Beispiel A = {1,2}:
  P(A) = {∅, {1}, {2}, {1,2}}

Mengendarstellung:
  {2n : n ∈ ℕ}    = gerade Zahlen
  {kn+r : n ∈ ℕ}  = Vielfache von k, Rest r`,
  },

  // Blatt 2 – Logik
  {
    title: 'Logik – Operatoren',
    content: `Wahrheitswerte:
  ¬A      wahr ⟺ A falsch
  A ∧ B   wahr ⟺ beide wahr
  A ∨ B   wahr ⟺ mind. eines wahr
  A ⇒ B   falsch nur wenn A=w und B=f
  A ⟺ B  wahr ⟺ gleicher Wahrheitswert

Implikation umformen:
  P ⇒ Q  ≡  ¬P ∨ Q  ≡  ¬Q ⇒ ¬P

Kontraposition (äquivalent):
  P ⇒ Q  ≡  ¬Q ⇒ ¬P  ✓
Nicht äquivalent:
  Umkehrung:  Q ⇒ P    ✗
  Inverse:    ¬P ⇒ ¬Q  ✗

Hinreichend / notwendig:
  A hinreichend für B: A ⇒ B
  A notwendig für B:   B ⇒ A`,
  },
  {
    title: 'Logik – De Morgan & Beweise',
    content: `De Morgan (logisch):
  ¬(A ∧ B) = ¬A ∨ ¬B
  ¬(A ∨ B) = ¬A ∧ ¬B

Negation von Implikation:
  ¬(A ⇒ B) = A ∧ ¬B

Beweismethoden:
  Direkt:       A(n)=w → zeige B(n)=w
  Widerspruch:  Nehme A(n)∧¬B(n) an, leite ⊥ ab
  Gegenbeispiel: Ein Beispiel widerlegt ∀-Aussage

Quantoren – Negation:
  ¬(∀x: P(x)) = ∃x: ¬P(x)
  ¬(∃x: P(x)) = ∀x: ¬P(x)
  ∀x ∃y ≠ ∃y ∀x  (Reihenfolge wesentlich!)`,
  },

  // Blatt 3 – Summen, Binomialkoeffizient
  {
    title: 'Summen- & Produktzeichen',
    content: `Σ(k=a bis b) f(k) = f(a) + f(a+1) + … + f(b)
∏(k=a bis b) f(k) = f(a) · f(a+1) · … · f(b)

Rechenregeln:
  Σ c·f(k) = c · Σf(k)
  Σ(f+g)(k) = Σf(k) + Σg(k)
  (Σf(k))² ≠ Σ(f(k))²  (Kreuzterme!)
  (∏f(k))² = ∏(f(k))²  ✓

Indexverschiebung:
  Σ(k=1..n) k² = Σ(l=3..n+2) (l−2)²
  (l = k+2, gleiche Werte, anderer Index)

Geom. Summenformel (endlich):
  Σ(k=0..n) qᵏ = (1−qⁿ⁺¹)/(1−q)  (q ≠ 1)`,
  },
  {
    title: 'Binomialkoeffizienten',
    content: (
      <>
        {'C(n,k) = '}<Frac n="n!" d="k! · (n−k)!" />
        {'\n\nEigenschaften:\n  C(n,0) = C(n,n) = 1\n  C(n,1) = n = C(n,n−1)\n  C(n,k) = C(n,n−k)     (Symmetrie)\n  C(n,k)+C(n,k+1) = C(n+1,k+1)  (Pascal)\n\nBinomischer Lehrsatz:\n  (x+y)ⁿ = Σ(k=0..n) C(n,k)·xⁿ⁻ᵏ·yᵏ\n\nSpezialfälle:\n  x=y=1:   Σ C(n,k) = 2ⁿ\n  x=1,y=−1: Σ (−1)ᵏC(n,k) = 0'}
      </>
    ),
  },

  // Blatt 3–4 – Vollständige Induktion
  {
    title: 'Vollständige Induktion',
    content: `Beweisschema für A(n) ∀n ≥ n₀:

IA (Induktionsanfang):
  Prüfe A(n₀) direkt durch Einsetzen.

IS (Induktionsschritt n → n+1):
  Sei n ≥ n₀ beliebig.
  Annahme (IV): A(n) gilt.
  Zu zeigen: A(n+1).
  → A(n+1)-Term mit A(n)-Term verknüpfen
  → IV einsetzen
  → A(n+1) folgern  ✓  □

Typische Muster:
  Summenformel: Sₙ₊₁ = Sₙ + (n+1)-ter Term
  Ungleichung:  an+1 mit aⁿ ≥ (IV) abschätzen
  Teilbarkeit:  aⁿ⁺¹ − c = (aⁿ − c)·a + c(a−1)`,
  },

  // Blatt 4 – Zahlbereiche
  {
    title: 'Supremum & Infimum',
    content: `M ⊆ ℝ nach oben beschränkt:
  obere Schranke s: x ≤ s  ∀x ∈ M
  sup(M): kleinste obere Schranke
  max(M): größtes Element (= sup falls sup ∈ M)

M nach unten beschränkt:
  inf(M): größte untere Schranke
  min(M): kleinstes Element (= inf falls inf ∈ M)

Merke:
  sup/inf existieren immer (falls beschränkt)
  max/min nur wenn Schranke angenommen wird

Beispiele:
  (0,1]: sup=1=max, inf=0, kein min
  (0,1):  sup=1, kein max, inf=0, kein min
  {1/n : n∈ℕ*}: sup=1=max, inf=0, kein min`,
  },
  {
    title: 'Betragsungleichungen & Intervalle',
    content: `Betragseigenschaften:
  |x| ≥ 0,  |x| = 0 ⟺ x = 0
  |x·y| = |x|·|y|
  |x+y| ≤ |x|+|y|  (Dreiecksungleichung)

Betrag-Ungleichungen lösen:
  |A| ≤ c (c>0): −c ≤ A ≤ c
  |A| ≥ c (c>0): A ≥ c  oder  A ≤ −c

Bruch-Ungleichungen (Fallunterscheidung!):
  Ungleichung: f(x)/g(x) ≤ 0
  Fall 1: g(x)>0 → f(x) ≤ 0
  Fall 2: g(x)<0 → f(x) ≥ 0  (Richtung dreht sich!)

Intervallnotation:
  [a,b]: a ≤ x ≤ b  (Randpunkte ∈)
  (a,b): a < x < b  (Randpunkte ∉)`,
  },

  // Blatt 5 – Funktionen
  {
    title: 'Funktionen – Eigenschaften',
    content: `f : A → B  heißt
  injektiv:   x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂)
  surjektiv:  f(A) = B  (jedes y hat ein Urbild)
  bijektiv:   injektiv + surjektiv

Bild und Urbild:
  f(M) = {f(x) : x ∈ M}         (Bild von M)
  f⁻¹(N) = {x ∈ A : f(x) ∈ N}  (Urbild von N)

Achtung: f⁻¹(N) ist die Urbildmenge,
  nicht notwendigerweise eine Umkehrfunktion!

Komposition: (g∘f)(x) = g(f(x))
  g∘f injektiv ⟸ f und g injektiv
  g∘f surjektiv ⟸ f und g surjektiv`,
  },

  // Blatt 7–9 – Folgen & Reihen
  {
    title: 'Folgen & Konvergenz',
    content: (
      <>
        {'(aₙ) konvergiert gegen a (lim aₙ = a), wenn:\n  ∀ε>0 ∃N∈ℕ ∀n≥N: |aₙ−a| < ε\n\nGrenzwertregeln (aₙ→a, bₙ→b):\n  aₙ+bₙ → a+b\n  aₙ·bₙ → a·b\n  '}
        <Frac n="aₙ" d="bₙ" />{' → '}<Frac n="a" d="b" />{'   (b ≠ 0)\n\nWichtige Grenzwerte:\n  '}
        <Frac n="1" d="n" />{' → 0\n  '}
        <Frac n="n" d="n+c" />{' → 1\n  qⁿ → 0  (|q| < 1)\n  (1 + '}
        <Frac n="1" d="n" />{')ⁿ → e\n\nDivergenzarten:\n  bestimmt divergent: lim = ±∞\n  unbestimmt: kein Grenzwert (z. B. (−1)ⁿ)'}
      </>
    ),
  },
  {
    title: 'Reihen & Konvergenzkriterien',
    content: (
      <>
        {'Reihe: Sₙ = Σ(k=0..n) aₖ;  S = lim Sₙ\n\nGeometrische Reihe:\n  Σ(k=0..∞) qᵏ = '}
        <Frac n="1" d="1−q" />{'   für |q| < 1\n\nNotwendige Bedingung: aₙ → 0\n  (Umkehrung gilt NICHT!)\n\nKriterien (aₙ ≥ 0):\n  Quotientenkriterium: '}
        <Frac n="|aₙ₊₁|" d="|aₙ|" />{' → L\n    L < 1: konvergent;  L > 1: divergent\n  Majorante: |aₙ| ≤ bₙ,  Σbₙ konv. → Σaₙ konv.\n  Leibniz (alternierend): (−1)ⁿbₙ konv.\n    falls bₙ≥0, bₙ+₁≤bₙ, bₙ→0'}
      </>
    ),
  },

  // Blatt 11 – Stetigkeit
  {
    title: 'Stetigkeit',
    content: `f stetig in x₀:
  lim(x→x₀) f(x) = f(x₀)

Folgenkriterium: f stetig in x₀
  ⟺ für jede Folge xₙ→x₀ gilt f(xₙ)→f(x₀)

Stetige Fortsetzbarkeit:
  f in x₀ stetig fortsetzbar ⟺
  lim(x→x₀) f(x) existiert (endlich)

Wichtige Sätze:
  Zwischenwertsatz: f stetig auf [a,b] ⟹
    ∀y zwischen f(a) und f(b) ∃x ∈ [a,b]: f(x)=y
  Extremwertsatz: f stetig auf [a,b] ⟹
    f nimmt Maximum und Minimum an

Summe, Produkt, Komposition stetiger Funktionen
sind wieder stetig.`,
  },

  // Blatt 12 – Spezielle Funktionen
  {
    title: 'Exponential- & Logarithmusfunktion',
    content: (
      <>
        {'exp(x) = eˣ,  Umkehrfunktion: ln(x)\n\nRechenregeln:\n  eˣ⁺ʸ = eˣ · eʸ\n  (eˣ)ʸ = eˣ·ʸ\n  e⁰ = 1\n\nAllgemeine Potenz (a > 0):\n  aˣ = eˣ·ln a\n  (aˣ)′ = aˣ · ln a\n\nLogarithmus:\n  ln(x·y) = ln x + ln y\n  ln(xⁿ) = n · ln x\n  logₐ(x) = '}
        <Frac n="ln x" d="ln a" />
        {'\n\nAbleitungen:\n  (eˣ)′ = eˣ\n  (ln x)′ = '}<Frac n="1" d="x" />
        {'\n  (sin x)′ = cos x,  (cos x)′ = −sin x'}
      </>
    ),
  },

  // Blatt 13 – Differentiation
  {
    title: 'Ableitungsregeln',
    content: (
      <>
        {'Differenzenquotient:\n  f′(x₀) = lim(h→0) '}
        <Frac n="f(x₀+h)−f(x₀)" d="h" />
        {'\n\nGrundfunktionen:\n  (xⁿ)′ = n·xⁿ⁻¹\n  (eˣ)′ = eˣ\n  (ln x)′ = '}<Frac n="1" d="x" />
        {'\n\nKombinationsregeln:\n  (f+g)′ = f′+g′\n  (c·f)′ = c·f′\n  (f·g)′ = f′·g + f·g′      (Produktregel)\n  ('}
        <Frac n="f" d="g" />{')′ = '}
        <Frac n="f′·g − f·g′" d="g²" />
        {'   (Quotientenregel)\n  (g∘f)′(x) = g′(f(x))·f′(x)   (Kettenregel)'}
      </>
    ),
  },
]
