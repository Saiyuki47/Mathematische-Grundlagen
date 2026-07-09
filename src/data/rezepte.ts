import type { HilfBox } from './hilfsmittelTypes'

// Loesungsrezepte: fuer jede Aufgabenart der Uebungsblaetter 0-13 eine kompakte
// Schritt-fuer-Schritt-Gebrauchsanleitung.
export const REZEPTE1: HilfBox[] = [
  {
    t: 'Brüche & Terme vereinfachen · Bl. 0',
    r: [
      { l: 'Brüche ±', s: '1) kgV der Nenner 2) erweitern (Zähler UND Nenner) 3) nur Zähler verrechnen 4) mit ggT kürzen' },
      { l: 'Klammern', s: 'jede Klammer einzeln zu einem Bruch vereinfachen, erst dann · bzw. : (mit Kehrwert multiplizieren, querkürzen)' },
      { l: 'Potenzterme', s: 'Potenzgesetze anwenden, gleiche Basen sammeln, Vorzeichen Schritt für Schritt mitführen' },
    ],
  },
  {
    t: 'Ausklammern & Kürzen · Bl. 0',
    r: [
      { l: 'ausklammern', s: 'gemeinsamen Faktor vor die Klammer ziehen; Trick: a−b = −(b−a) macht Faktoren sichtbar' },
      { l: 'kürzen', s: 'Zähler und Nenner faktorisieren (binomische Formeln!), dann nur gemeinsame Faktoren streichen' },
      { l: 'Stopp', s: 'nie aus Summen kürzen: (a²+b²)/(a+b) lässt sich nicht vereinfachen' },
    ],
  },
  {
    t: 'Wurzeln · Bl. 0',
    r: [
      { l: 'Produkt', s: '√a·√b = √(a·b) → unter der Wurzel Quadratzahl suchen (√2·√32 = √64 = 8)' },
      { l: 'Achtung', s: '√(a+b) ≠ √a+√b — mit Zahlenbeispiel (a = b = 1) widerlegen' },
      { l: 'rationalisieren', s: 'mit √a bzw. (√a∓√b) erweitern → 3. binomische Formel entfernt die Wurzel aus dem Nenner' },
    ],
  },
  {
    t: 'Geraden · Bl. 0',
    r: [
      { l: 'skizzieren', s: 'b auf der y-Achse markieren, Steigungsdreieck: 1 nach rechts, m nach oben (m < 0: nach unten)' },
      { l: 'Gleichung finden', s: '2 Punkte ablesen → m = (y₂−y₁)/(x₂−x₁) → b durch Einsetzen eines Punktes' },
      { l: 'Schnittpunkt', s: 'Terme gleichsetzen, nach x auflösen, x in eine der Geraden einsetzen' },
    ],
  },
  {
    t: 'Mengen-Schreibweisen · Bl. 1',
    r: [
      { l: '∈ vs. ⊆', s: '∈ „ist Element von“, ⊆ „jedes Element ist auch drin“; Mengen können selbst Elemente sein ({2} ∈ L?)' },
      { l: 'auflisten', s: 'in {f(n) : n ∈ ℕ} nacheinander n = 0, 1, 2, … einsetzen und das Muster angeben' },
      { l: 'Potenzmenge', s: 'systematisch alle Teilmengen: ∅, Einer-, Zweier-, …, A selbst; Kontrolle: 2^|A| Stück' },
    ],
  },
  {
    t: 'Mengenoperationen · Bl. 1',
    r: [
      { l: 'endlich', s: 'Definition elementweise abarbeiten (A∖B = „in A, aber nicht in B“), von innen nach außen' },
      { l: 'Intervalle', s: 'Zahlengerade skizzieren, Bereiche markieren, Ränder (offen/geschlossen) einzeln prüfen' },
      { l: 'A×B', s: 'alle geordneten Paare (a, b) bilden; Kontrolle: |A×B| = |A|·|B|' },
    ],
  },
  {
    t: 'Venn-Diagramme · Bl. 1',
    r: [
      { l: 'Vorgehen', s: 'pro Ausdruck ein Diagramm (3 Kreise), innerste Klammer zuerst schraffieren, dann verknüpfen' },
      { l: 'Vergleich', s: 'gleiche Schraffur ⇒ Gesetz vermuten (z. B. Distributivgesetz) — ein Beweis ist das noch nicht' },
    ],
  },
  {
    t: 'Mengengleichheit beweisen · Bl. 1',
    r: [
      { l: 'Standard', s: 'beide Inklusionen zeigen: x ∈ links ⇒ … ⇒ x ∈ rechts, dann umgekehrt' },
      { l: 'schneller', s: 'mit bekannten Gesetzen umformen (de Morgan, Distributiv-, Komplementgesetz)' },
    ],
  },
  {
    t: 'Wahrheitstafeln · Bl. 2',
    r: [
      { l: 'aufstellen', s: '2ⁿ Zeilen; Spalten für jeden Teilausdruck von innen nach außen füllen' },
      { l: 'auswerten', s: 'äquivalent ⇔ Ergebnisspalten identisch; Tautologie ⇔ überall w' },
    ],
  },
  {
    t: 'Implikationen formulieren · Bl. 2',
    r: [
      { l: 'übersetzen', s: '„A hinreichend für B“: A ⇒ B; „A notwendig für B“: B ⇒ A; „genau dann, wenn“: ⇔' },
      { l: 'äquivalent', s: 'zu A ⇒ B: Kontraposition ¬B ⇒ ¬A und ¬A ∨ B; die Umkehrung B ⇒ A ist es NICHT' },
      { l: 'wahr?', s: 'zum Widerlegen genügt ein Gegenbeispiel — konkrete Zahl einsetzen (z. B. z = −2)' },
    ],
  },
  {
    t: 'Beweistechniken · Bl. 2',
    r: [
      { l: 'direkt', s: 'Voraussetzung umschreiben (ungerade: n = 2k+1) → einsetzen → bis zur Form der Behauptung rechnen' },
      { l: 'Widerspruch', s: 'A und ¬B annehmen → auf einen Widerspruch rechnen → ¬B unmöglich, also gilt B' },
      { l: 'vereinfachen', s: 'logische Terme mit de Morgan, Distributiv- und Komplementgesetz (A ∨ ¬A = w) reduzieren' },
    ],
  },
  {
    t: 'Summenzeichen · Bl. 3/4',
    r: [
      { l: 'schreiben', s: 'Muster suchen: konstanter Abstand d → a + d·k; konstanter Faktor q → a·qᵏ; Grenzen am 1. und letzten Glied prüfen' },
      { l: 'Regeln prüfen', s: 'vermutete Σ/Π-Gleichheit erst an n = 2 testen; Σ ist linear, aber Σ(aₖ·bₖ) ≠ (Σaₖ)·(Σbₖ)' },
    ],
  },
  {
    t: 'Binomialkoeffizienten · Bl. 3',
    r: [
      { l: 'mit Lehrsatz', s: '(a+b)ⁿ = Σ (n über k)·aⁿ⁻ᵏbᵏ mit klugem a, b: a = b = 1 → 2ⁿ; a = 1, b = −1 → 0' },
      { l: 'Identitäten', s: 'Definition n!/(k!(n−k)!) einsetzen und Fakultäten kürzen' },
    ],
  },
  {
    t: 'Vollständige Induktion · Bl. 3/4/9',
    r: [
      { l: 'Schema', s: 'IA: n₀ einsetzen, beide Seiten ausrechnen · IV: Aussage für n annehmen · IS: n+1 so aufspalten, dass die IV einsetzbar ist' },
      { l: 'Summe/Produkt', s: 'Σⁿ⁺¹ = Σⁿ + (n+1)-tes Glied bzw. Πⁿ⁺¹ = Πⁿ · neuer Faktor → IV einsetzen → auf Zielform bringen' },
      { l: 'Teilbarkeit', s: 'Term(n+1) = Vielfaches von Term(n) + offensichtlich teilbarer Rest (3ⁿ⁺¹−3 = 3·(3ⁿ−3) + 6)' },
      { l: 'Ungleichung', s: 'Kette abschätzen: Seite(n+1) ≥ … IV … ≥ Ziel; notieren, wo die Voraussetzung (x ≥ −1) eingeht' },
    ],
  },
  {
    t: 'Beträge & Intervalle · Bl. 4',
    r: [
      { l: 'Abstand', s: '|x−a| ≤ r lesen als „Abstand zu a höchstens r“ → [a−r, a+r]; bei ≥ zwei Strahlen (Vereinigung)' },
      { l: 'Fälle', s: 'sonst an den Nullstellen der Beträge aufteilen, jeden Fall lösen, mit der Fallbedingung schneiden, vereinigen' },
      { l: '|A| vs. |B|', s: '|x−2| ≥ |x+3|: beide Seiten quadrieren (beide ≥ 0) und auflösen' },
    ],
  },
  {
    t: 'Sup / Inf / Max / Min · Bl. 4',
    r: [
      { l: 'Vorarbeit', s: 'Menge greifbar machen: Ungleichung lösen, erste Folgenwerte auflisten, skizzieren' },
      { l: 'entscheiden', s: 'Randwerte sind Kandidaten; wird der Wert angenommen (∈ M) → Max/Min, sonst nur sup/inf' },
      { l: 'begründen', s: 'sup: obere Schranke angeben + zeigen, dass nichts Kleineres Schranke ist (annähernde Folge nennen)' },
    ],
  },
  {
    t: 'Quantoren · Bl. 4',
    r: [
      { l: 'lesen', s: 'von links nach rechts; spätere Variablen dürfen von früheren abhängen — Reihenfolge ändert den Sinn' },
      { l: 'entscheiden', s: '∃-Aussage beweisen: ein Beispiel genügt; ∀-Aussage widerlegen: ein Gegenbeispiel genügt' },
    ],
  },
  {
    t: 'Euklidischer Algorithmus · Bl. 4',
    r: [
      { l: 'ggT', s: 'Vorzeichen weglassen; a = q·b + r; weiter mit (b, r) bis Rest 0 — der letzte Rest ≠ 0 ist der ggT' },
      { l: 'erweitert', s: 's·a + t·b = ggT: die Divisionsgleichungen von unten nach oben rückwärts einsetzen' },
    ],
  },
  {
    t: 'Graph, Bild & Urbild · Bl. 5',
    r: [
      { l: 'Graph', s: 'Graph = {(x, f(x)) : x ∈ D}; Kandidatenmengen daran messen: genau ein Paar pro x aus D?' },
      { l: 'Bild f(A)', s: 'alle x ∈ A einsetzen und die entstehenden Werte sammeln (Skizze hilft)' },
      { l: 'Urbild f⁻¹(B)', s: 'Bedingung f(x) ∈ B als (Un-)Gleichung lösen — die Umkehrfunktion wird NICHT gebraucht' },
    ],
  },
  {
    t: 'Injektiv / surjektiv / bijektiv · Bl. 5',
    r: [
      { l: 'injektiv', s: 'f(x₁) = f(x₂) ansetzen → folgt x₁ = x₂? Gegenbeispiel: zwei x mit demselben Wert' },
      { l: 'surjektiv', s: 'f(x) = y nach x auflösen: für jedes y der Zielmenge lösbar? Ein verfehltes y widerlegt' },
      { l: 'endlich', s: 'Wertetabelle/Pfeilbild: injektiv = kein Wert doppelt; surjektiv = jeder Wert getroffen' },
      { l: 'Skizze', s: 'horizontale Geraden: höchstens 1 Schnitt ⇒ injektiv, mindestens 1 ⇒ surjektiv (Def.-/Zielmenge beachten!)' },
    ],
  },
  {
    t: 'Verkettung · Bl. 5',
    r: [
      { l: 'bilden', s: '(f∘g)(x) = f(g(x)) — g zuerst! Nur definiert, wenn Bild(g) ⊆ Def(f)' },
      { l: 'untersuchen', s: 'f∘g und g∘f getrennt berechnen und prüfen — im Allgemeinen verschieden' },
    ],
  },
  {
    t: 'Relationen · Bl. 5',
    r: [
      { l: 'prüfen', s: 'links-/rechtstotal, links-/rechtseindeutig einzeln per Definition an den Paaren (x, y) testen' },
      { l: 'Funktion?', s: 'Relation ist Funktion ⇔ linkstotal und rechtseindeutig' },
    ],
  },
  {
    t: 'Abzählbarkeit & Unendlichkeit · Bl. 5/6',
    r: [
      { l: 'abzählbar', s: 'Auflistung ohne Auslassung angeben = Bijektion zu ℕ; ℕ×ℕ: Cantor-Diagonalen durchnummerieren' },
      { l: 'Dedekind', s: 'unendlich zeigen: Bijektion auf echte Teilmenge, z. B. ℕ → ℕ*, n ↦ n+1 (injektiv + surjektiv nachweisen)' },
    ],
  },
  {
    t: 'Kombinatorik · Bl. 6',
    r: [
      { l: 'Modell', s: 'zwei Fragen: Reihenfolge wichtig? Wiederholung erlaubt? → Formel aus der Urnenmodell-Tabelle' },
      { l: 'Stufen', s: 'unabhängige Positionen multiplizieren (Autonummern: 26·26·9·10·10)' },
      { l: '„mindestens“', s: 'über das Komplement: alle Möglichkeiten − Möglichkeiten ohne die Eigenschaft' },
      { l: '„oder“', s: '|A∪B| = |A| + |B| − |A∩B| — Doppelte nicht zweimal zählen' },
      { l: 'ununterscheidbar', s: 'Anagramm-Formel n!/(n₁!·n₂!·…) — gleiche Objekte herausteilen (Zugwagen, KLAUSUR)' },
      { l: 'Gitterwege', s: 'Weg = Wort aus m× „rechts“ und n× „hoch“ → Positionen wählen: (m+n über m)' },
    ],
  },
]

export const REZEPTE2: HilfBox[] = [
  {
    t: 'Abbildungsvorschrift finden · Bl. 7',
    r: [
      { l: 'Muster', s: 'Differenzen konstant (d) → x₀ + d·n; Quotient konstant (q) → x₀·qⁿ; Wechselzeichen → Faktor (−1)ⁿ bzw. (−1)ⁿ⁺¹' },
      { l: 'fast-Muster', s: 'Nachbarformeln testen: 1/2, 1/4, 1/8, … → (1/2)ⁿ⁺¹; 1, 1/3, 1/7, 1/15, … → 1/(2ⁿ⁺¹−1)' },
      { l: 'Kontrolle', s: 'n = 0, 1, 2 einsetzen und mit den gegebenen Gliedern vergleichen' },
    ],
  },
  {
    t: 'Beispielfolgen konstruieren · Bl. 7/8',
    r: [
      { l: 'Baukasten', s: 'n (→ ∞), 1/n (→ 0), (−1)ⁿ (beschränkt, divergent), Konstanten — gezielt kombinieren' },
      { l: 'xₙyₙ → c', s: 'xₙ = n, yₙ = c/n; für ±∞: yₙ = ±1/√n; beschränkt & divergent: yₙ = (−1)ⁿ/n' },
      { l: 'Summe konv.', s: 'Divergenz gegenseitig wegheben: xₙ = (−1)ⁿ, yₙ = (−1)ⁿ⁺¹ → xₙ + yₙ = 0' },
    ],
  },
  {
    t: 'Folgengrenzwerte · Bl. 7/8/12',
    r: [
      { l: 'rational', s: 'höchste n-Potenz in Zähler und Nenner ausklammern und kürzen → Grenzwertsätze anwenden' },
      { l: 'beschränkt·→0', s: 'sin, cos, (−1)ⁿ zwischen −1 und 1 einschließen → Sandwich: Produkt mit Nullfolge → 0' },
      { l: '√-Differenz', s: '√(n+1) − √n: konjugiert erweitern → 1/(√(n+1)+√n) → 0' },
      { l: 'e-Typ', s: '(1 + x/n)ⁿ → eˣ; Exponent passend machen: (1+1/n)²ⁿ⁻¹ = ((1+1/n)ⁿ)² / (1+1/n) → e²' },
      { l: '(−1)ⁿ-Test', s: 'Teilfolgen n gerade/ungerade: verschiedene Grenzwerte → divergent (aber evtl. beschränkt)' },
      { l: 'Exponent', s: 'Wurzeln als Potenz schreiben: ²ⁿ√(2¹⁰⁰⁰) = 2^(1000/2n) → 2⁰ = 1' },
    ],
  },
  {
    t: 'ε-N-Beweise & Grenzwertsätze · Bl. 7/8',
    r: [
      { l: 'ε-N', s: '|xₙ − a| < ε vereinfachen, nach n auflösen → N(ε) angeben; großzügig nach oben abschätzen ist erlaubt' },
      { l: 'Satz zeigen', s: 'z. B. beschränkt · Nullfolge: |xₙyₙ| ≤ C·|yₙ| < ε ab dem N der Folge (yₙ)' },
    ],
  },
  {
    t: 'Geometrische Summe & Reihe · Bl. 7/8/9',
    r: [
      { l: 'endlich', s: 'Σₖ₌₀ⁿ qᵏ = (1−qⁿ⁺¹)/(1−q); Start bei k = m: Gesamtsumme minus Anfangsstück (oder qᵐ ausklammern)' },
      { l: 'unendlich', s: 'Σ a·qᵏ = a/(1−q) — gilt NUR für |q| < 1; konstante Vorfaktoren vorher herausziehen' },
      { l: 'welche x?', s: 'q(x) identifizieren und |q(x)| < 1 als Betragsungleichung nach x auflösen' },
    ],
  },
  {
    t: 'Rekursive Folgen · Bl. 8/9',
    r: [
      { l: '1) Induktion', s: 'Monotonie (xₙ₊₁ ≥ xₙ) und Schranke per Induktion — im IS Monotonie von √ bzw. Rechenregeln nutzen' },
      { l: '2) Kriterium', s: 'monoton + beschränkt ⇒ konvergent (Monotoniekriterium)' },
      { l: '3) Fixpunkt', s: 'lim auf die Rekursion anwenden: x = f(x) lösen; unpassende Lösungen per Schranke/Vorzeichen ausschließen' },
    ],
  },
  {
    t: 'Reihen: Kriterien-Fahrplan · Bl. 9/10',
    r: [
      { l: '1) Nulltest', s: 'aₖ ↛ 0 → sofort divergent (notwendige Bedingung); Σ(−1)ᵏ und Σ√k scheitern schon hier' },
      { l: '2) Form', s: 'alternierend + |aₖ| ↓ 0 → Leibniz; k! → Quotientenkriterium; (…)ᵏ → Wurzelkriterium' },
      { l: '3) Vergleich', s: 'Σ1/kˢ konvergiert ⇔ s > 1; kleiner als konvergent → Majorante; größer als divergent → Minorante' },
      { l: 'Teleskop', s: 'Partialsumme ausschreiben — innere Terme kürzen sich (auch bei Produkten: Π(k+1)/k = n+1)' },
    ],
  },
  {
    t: 'Funktionsgrenzwerte · Bl. 10/12',
    r: [
      { l: 'x→±∞', s: 'höchste Potenz ausklammern; Grade vergleichen: Zählergrad < Nennergrad → 0, > → ±∞ (Vorzeichen prüfen!)' },
      { l: '0/0', s: 'faktorisieren und kürzen: Nullstelle x₀ ⇒ Faktor (x−x₀) in Zähler und Nenner (ggf. Polynomdivision); oder konjugiert erweitern' },
      { l: 'Standard', s: 'x·eˣ → 0 (x→−∞); beschränkt · Nullfolge → 0; n·ln(1+1/n) → 1 (über (1+1/n)ⁿ → e)' },
    ],
  },
  {
    t: 'Einseitige GW & stückweise Fkt. · Bl. 10/11',
    r: [
      { l: 'Betrag', s: '|g(x)| auflösen (Fall g ≥ 0 / g < 0) → links- und rechtsseitigen Grenzwert getrennt berechnen' },
      { l: 'Kriterium', s: 'lim existiert ⇔ links = rechts; stetig in x₀ ⇔ zusätzlich = f(x₀)' },
    ],
  },
  {
    t: 'Defbereich, Polynomdivision, Asymptoten · Bl. 9/10',
    r: [
      { l: 'Defbereich', s: 'Nenner faktorisieren, Nullstellen ausschließen: Dᶠ = ℝ ∖ {…}' },
      { l: 'Polynomdiv.', s: 'höchste Terme dividieren → zurückmultiplizieren → abziehen → wiederholen; Ergebnis s(x) + r(x)/q(x)' },
      { l: 'Asymptote', s: 'r(x)/q(x) → 0, also verhält sich f für x → ±∞ wie s(x) (Gerade oder Parabel)' },
    ],
  },
  {
    t: 'O-Notation · Bl. 10',
    r: [
      { l: 'zeigen', s: 'C und n₀ angeben mit |f(n)| ≤ C·|g(n)| für n ≥ n₀; grob abschätzen: n + n² ≤ 2n²' },
      { l: 'widerlegen', s: 'f/g unbeschränkt zeigen (z. B. n²/n = n → ∞)' },
    ],
  },
  {
    t: 'Stetigkeit prüfen · Bl. 11/12',
    r: [
      { l: 'Baukasten', s: 'Polynome, exp, sin, cos, √, |·| sind stetig; Summe/Produkt/Quotient (Nenner ≠ 0)/Verkettung bleiben stetig' },
      { l: 'aˣ', s: 'als exp(x·ln a) schreiben → Verkettung stetiger Funktionen → stetig' },
      { l: 'Sprungstellen', s: 'nur die kritischen x₀ einzeln prüfen: einseitige Grenzwerte gleich f(x₀)?' },
    ],
  },
  {
    t: 'Stetige Fortsetzung · Bl. 11',
    r: [
      { l: 'c bestimmen', s: 'c := lim (x→x₀) f(x) berechnen — durch Kürzen ((x²−1)/(x−1) = x+1) oder konjugiertes Erweitern' },
      { l: 'unmöglich', s: 'links- ≠ rechtsseitiger Grenzwert (z. B. x/|x|) → kein c macht f stetig' },
    ],
  },
  {
    t: 'Zwischenwertsatz & Bisektion · Bl. 11',
    r: [
      { l: 'Ansatz', s: 'Gleichung zu h(x) := linke − rechte Seite umbauen; h stetig und h(a), h(b) mit verschiedenem Vorzeichen → Nullstelle in (a, b)' },
      { l: 'Bisektion', s: 'Mitte m auswerten → Teilintervall mit Vorzeichenwechsel behalten; n Schritte → Länge (b−a)/2ⁿ' },
    ],
  },
  {
    t: 'Punktweise Konvergenz · Bl. 11',
    r: [
      { l: 'Vorgehen', s: 'x festhalten, lim (n→∞) fₙ(x) berechnen — Fallunterscheidung (|x| < 1: xⁿ → 0; x = 1: 1; sonst divergent)' },
      { l: 'Ergebnis', s: 'Grenzfunktion skizzieren; Stetigkeit kann dabei verloren gehen' },
    ],
  },
  {
    t: 'exp, ln & log · Bl. 12',
    r: [
      { l: 'Regeln zeigen', s: 'Definition aˣ := exp(x·ln a) einsetzen und Funktionalgleichung exp(x+y) = exp(x)·exp(y) nutzen' },
      { l: 'ᵏ√k', s: 'als exp(ln k / k) schreiben; ln k/k → 0 → Grenzwert exp(0) = 1' },
      { l: 'log_a(b)', s: 'b als Potenz der Basis schreiben (64 = 2⁶) oder Basiswechsel: log_a b = log₂ b / log₂ a' },
    ],
  },
  {
    t: 'Potenzreihen: sin & cos · Bl. 12',
    r: [
      { l: 'Konvergenz', s: 'Quotientenkriterium auf die Reihenglieder: Quotient → 0 < 1 → konvergent für jedes x' },
      { l: 'Symmetrie', s: '−x in die Reihe einsetzen: gerade Potenzen schlucken das Minus (cos), ungerade behalten es (sin)' },
    ],
  },
  {
    t: 'Ableitungen bestimmen · Bl. 13',
    r: [
      { l: 'Struktur', s: 'äußerste Verknüpfung erkennen: Produkt → Produktregel, Bruch → Quotientenregel, ineinander → Kettenregel' },
      { l: 'Kette', s: 'von außen nach innen ableiten und nachdifferenzieren: (exp(1+2x))′ = exp(1+2x)·2' },
      { l: 'Betrag', s: 'x·|x| stückweise schreiben (x² bzw. −x²) und getrennt ableiten; Nahtstelle extra prüfen' },
    ],
  },
  {
    t: 'Differenzierbarkeit prüfen · Bl. 13',
    r: [
      { l: 'vorab', s: 'skizzieren; unstetig → nicht differenzierbar (Sprung wie bei h mit x³+1 / x²)' },
      { l: 'Kriterium', s: 'Differenzenquotient (f(x₀+h)−f(x₀))/h für h → 0⁺ und h → 0⁻; gleich → differenzierbar, sonst Knick' },
    ],
  },
  {
    t: 'Spezielle Ableitungen · Bl. 13',
    r: [
      { l: 'Umkehrregel', s: '(f⁻¹)′(y) = 1/f′(f⁻¹(y)) — so entstehen (√x)′ = 1/(2√x) und (arctan x)′ = 1/(1+x²)' },
      { l: 'xᵃ, cˣ', s: 'umschreiben: xᵃ = exp(a·ln x), cˣ = exp(x·ln c) → Kettenregel' },
      { l: 'tan', s: 'sin/cos mit der Quotientenregel → 1/cos² = 1 + tan²' },
      { l: 'Potenzreihe', s: 'Σ xᵏ = 1/(1−x) für |x| < 1; im Konvergenzbereich gliedweise ableiten' },
    ],
  },
]
