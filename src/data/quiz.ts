import type { QuizFrage } from '../types'

// Quizfragen für "Mathematische Grundlagen".
// Inhalte aus den Übungsblättern 0–13 (Probeklausuren/Klausuren sind nicht
// enthalten). Mathematik ist als Unicode in reinen Strings notiert – die
// Engine-Typen erwarten Strings, kein JSX.
export const quizFragen: QuizFrage[] = [
  // ===================================================================
  // Blatt 0 – Rechenregeln, Notationen, Geraden
  // ===================================================================
  {
    art: 'single',
    frage: 'Was ergibt ³⁄₇ + ⁷⁄₃ ?',
    optionen: [
      { text: '⁵⁸⁄₂₁' },
      { text: '1', warumFalsch: 'Das entstünde nur, wenn man fälschlich Zähler und Nenner getrennt addiert: (3+7)/(7+3) = 10/10.' },
      { text: '²¹⁄₅₈', warumFalsch: 'Zähler und Nenner sind vertauscht – der Kehrwert des richtigen Ergebnisses.' },
      { text: '¹⁰⁄₂₁', warumFalsch: 'Hier wurden nur die Zähler addiert und ein falscher Nenner gewählt.' },
    ],
    richtige: 0,
    erklaerung: 'Gemeinsamer Nenner ist kgV(7,3) = 21: ³⁄₇ = ⁹⁄₂₁ und ⁷⁄₃ = ⁴⁹⁄₂₁, also ⁹⁄₂₁ + ⁴⁹⁄₂₁ = ⁵⁸⁄₂₁. Wegen ggT(58,21)=1 ist es schon vollständig gekürzt.',
    quelle: 'Übungsblatt 0, Aufgabe 1a',
  },
  {
    art: 'single',
    frage: 'Was ergibt 5⁻² · 100 ?',
    optionen: [
      { text: '4' },
      { text: '−25', warumFalsch: 'Ein negativer Exponent macht die Zahl nicht negativ: 5⁻² = 1/25, nicht −25.' },
      { text: '2500', warumFalsch: 'Hier wurde 5² statt 5⁻² gerechnet (25·100).' },
      { text: '25', warumFalsch: 'Das wäre 5⁻² · 625 oder ein Rechenfehler; 100/25 = 4.' },
    ],
    richtige: 0,
    erklaerung: '5⁻² = 1/5² = 1/25 (positiv!). Also 5⁻² · 100 = 100/25 = 4.',
    quelle: 'Übungsblatt 0, Aufgabe 1d',
  },
  {
    art: 'eingabe',
    frage: 'Berechne √2 · √32. (Ergebnis als Zahl)',
    loesungen: ['8'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: 'Produktregel für Wurzeln: √a · √b = √(a·b). Also √2 · √32 = √(2·32) = √64 = 8.',
    quelle: 'Übungsblatt 0, Aufgabe 4a',
  },
  {
    art: 'wahrfalsch',
    frage: 'Gelten diese Wurzel- und Potenzregeln für alle a, b ≥ 0 allgemein?',
    aussagen: [
      { text: '√a · √b = √(a·b)', wahr: true, warum: 'Die Produktregel für Wurzeln gilt für a, b ≥ 0.' },
      { text: '√(a + b) = √a + √b', wahr: false, warum: 'Gegenbeispiel a=9, b=16: √25 = 5, aber √9 + √16 = 3 + 4 = 7.' },
      { text: '(a + b)² = a² + b²', wahr: false, warum: 'Es fehlt der gemischte Term: (a+b)² = a² + 2ab + b².' },
      { text: '(a · b)² = a² · b²', wahr: true, warum: 'Die Potenz eines Produkts ist das Produkt der Potenzen.' },
    ],
    erklaerung: 'Produkt-/Potenzregeln verteilen sich über Produkte, NICHT über Summen. Die Wurzel (bzw. das Quadrat) einer Summe ist nicht die Summe der Wurzeln (Quadrate).',
    quelle: 'Übungsblatt 0, Aufgabe 4b',
  },
  {
    art: 'single',
    frage: 'Welcher Bruch kann NICHT weiter gekürzt werden?',
    optionen: [
      { text: '(a² + b²)/(a + b)' },
      { text: '(a² − b²)/(a − b)', warumFalsch: 'Mit der 3. binomischen Formel: (a+b)(a−b)/(a−b) = a+b.' },
      { text: '(k² + k³)/k²', warumFalsch: 'k² ausklammern: k²(1+k)/k² = 1+k.' },
      { text: '(a − b)/(b − a)', warumFalsch: 'b−a = −(a−b), also kürzt sich der Bruch zu −1.' },
    ],
    richtige: 0,
    erklaerung: 'a² + b² hat über ℝ keine Faktorzerlegung mit (a+b) – kein gemeinsamer Faktor, also nicht kürzbar. Achtung: a²+b² ≠ (a+b)².',
    quelle: 'Übungsblatt 0, Aufgabe 3c',
  },
  {
    art: 'single',
    frage: 'Wie lautet die Steigung der Geraden y = −2x + 1 ?',
    optionen: [
      { text: '−2' },
      { text: '1', warumFalsch: 'Das ist der y-Achsenabschnitt b, nicht die Steigung m.' },
      { text: '2', warumFalsch: 'Das Vorzeichen fehlt – die Gerade fällt, m ist negativ.' },
      { text: '−1', warumFalsch: 'In y = m·x + b ist m der Koeffizient vor x, hier −2.' },
    ],
    richtige: 0,
    erklaerung: 'In der Normalform y = m·x + b ist m die Steigung. Hier ist m = −2 (Gerade fällt um 2 pro Schritt nach rechts), b = 1 der y-Achsenabschnitt.',
    quelle: 'Übungsblatt 0, Aufgabe 5b',
  },

  // ===================================================================
  // Blatt 1 – Mengen
  // ===================================================================
  {
    art: 'single',
    frage: 'Sei M = {1, 2, 3}. Welche Aussage ist korrekt?',
    optionen: [
      { text: '{1} ⊆ M' },
      { text: '{1} ∈ M', warumFalsch: 'M enthält nur die Zahlen 1, 2, 3 – nicht die Menge {1}. Korrekt wäre 1 ∈ M.' },
      { text: '1 ⊆ M', warumFalsch: '1 ist eine Zahl, keine Menge; ⊆ verbindet zwei Mengen.' },
      { text: '{1, 2, 3} ∈ M', warumFalsch: 'M ist nicht Element von sich selbst; {1,2,3} = M, aber M ∉ M.' },
    ],
    richtige: 0,
    erklaerung: '{1} ⊆ M bedeutet: jedes Element von {1} (nur die 1) liegt in M – das stimmt. Element (∈) und Teilmenge (⊆) nicht verwechseln.',
    quelle: 'Übungsblatt 1, Aufgabe 1a',
  },
  {
    art: 'wahrfalsch',
    frage: 'Sei L = {∅, {1}, {2}, {1,2}}. Welche Aussagen sind wahr?',
    aussagen: [
      { text: '{2} ∈ L', wahr: true, warum: '{2} ist direkt als Element in L aufgelistet.' },
      { text: '2 ∈ L', wahr: false, warum: 'Die Zahl 2 ist kein direktes Element von L; nur die Menge {2} ist es.' },
      { text: '{2} ⊆ L', wahr: false, warum: 'Das wäre nur wahr, wenn 2 ∈ L gälte – tut es aber nicht.' },
      { text: '{{2}} ⊆ L', wahr: true, warum: 'Wegen {2} ∈ L ist die Menge {{2}} eine Teilmenge von L.' },
    ],
    erklaerung: 'L ist eine Menge von Mengen. Schachtelungsebenen beachten: 2 (Zahl) ≠ {2} (Menge) ≠ {{2}} (Menge von Mengen).',
    quelle: 'Übungsblatt 1, Aufgabe 1b',
  },
  {
    art: 'single',
    frage: 'Seien X = {1,3,5,7} und Z = {1,5}. Was ergibt X \\ Z ?',
    optionen: [
      { text: '{3, 7}' },
      { text: '{1, 5}', warumFalsch: 'Das ist Z bzw. X ∩ Z – die Differenz entfernt aber gerade diese Elemente.' },
      { text: '∅', warumFalsch: 'X enthält Elemente (3, 7), die nicht in Z liegen.' },
      { text: '{1, 3, 5, 7}', warumFalsch: 'Bei X \\ Z werden die Elemente von Z entfernt, X bleibt nicht unverändert.' },
    ],
    richtige: 0,
    erklaerung: 'X \\ Z enthält alle Elemente von X, die nicht in Z liegen: {1,3,5,7} \\ {1,5} = {3,7}.',
    quelle: 'Übungsblatt 1, Aufgabe 2a',
  },
  {
    art: 'eingabe',
    frage: 'Wie viele Elemente hat die Potenzmenge P(A) von A = {1, 2, 3} ?',
    loesungen: ['8'],
    toleranz: 0,
    platzhalter: 'Anzahl',
    erklaerung: '|P(A)| = 2^|A| = 2³ = 8. Die Teilmengen sind ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.',
    quelle: 'Übungsblatt 1, Aufgabe 2e',
  },
  {
    art: 'single',
    frage: 'Welche Darstellung liefert die Menge {3, 8, 13, 18, …} (n ∈ ℕ, ab 0)?',
    optionen: [
      { text: '{5n + 3 : n ∈ ℕ}' },
      { text: '{3n : n ∈ ℕ}', warumFalsch: 'Das ergäbe {0, 3, 6, 9, …}, nicht den gesuchten 5er-Abstand.' },
      { text: '{3n + 5 : n ∈ ℕ}', warumFalsch: 'Das ergäbe {5, 8, 11, 14, …} – falscher Startwert und Schrittweite.' },
      { text: '{5n − 2 : n ∈ ℕ}', warumFalsch: 'Das ergäbe {−2, 3, 8, 13, …} – der erste Wert −2 gehört nicht zur Menge.' },
    ],
    richtige: 0,
    erklaerung: 'Für n = 0,1,2,3: 5·0+3 = 3, 5·1+3 = 8, 5·2+3 = 13, 5·3+3 = 18. Schrittweite 5, Start 3.',
    quelle: 'Übungsblatt 1, Aufgabe 4',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jedes Mengensymbol seiner Bedeutung zu.',
    paare: [
      { begriff: '∈', ziel: 'ist Element von' },
      { begriff: '⊆', ziel: 'ist Teilmenge von' },
      { begriff: '∪', ziel: 'Vereinigung' },
      { begriff: '∩', ziel: 'Schnitt' },
      { begriff: '\\', ziel: 'Differenz' },
    ],
    erklaerung: '∈ verbindet Element und Menge; ⊆ zwei Mengen. ∪ fasst zusammen, ∩ behält Gemeinsames, A\\B entfernt aus A die Elemente von B.',
    quelle: 'Übungsblatt 1, Aufgabe 2',
  },
  {
    art: 'single',
    frage: 'Welches Distributivgesetz für Mengen ist korrekt?',
    optionen: [
      { text: '(A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C)' },
      { text: 'A ∪ (B ∩ C) = (A ∪ B) ∩ C', warumFalsch: 'Im Allgemeinen falsch; ein Gegenbeispiel mit A={1,2}, B={2,3}, C={3,4} widerlegt es.' },
      { text: '(A ∪ B) ∩ C = (A ∪ C) ∩ (B ∪ C)', warumFalsch: 'Die rechte Seite gehört zu (A∩B)∪C, nicht zu (A∪B)∩C.' },
      { text: 'A \\ (B \\ C) = (A \\ B) \\ C', warumFalsch: 'Diese Gleichheit gilt nicht allgemein – Differenz ist nicht assoziativ.' },
    ],
    richtige: 0,
    erklaerung: '∪ verteilt sich über ∩: (A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C). Analog verteilt sich ∩ über ∪.',
    quelle: 'Übungsblatt 1, Aufgabe 5',
  },
  {
    art: 'multi',
    frage: 'Sei A = {1, 2}. Welche Aussagen über A und ihre Potenzmenge sind wahr? (mehrere richtig)',
    optionen: [
      { text: '∅ ⊆ A' },
      { text: '∅ ∈ P(A)' },
      { text: '∅ ∈ A', warumFalsch: 'A enthält nur die Zahlen 1 und 2, nicht die leere Menge als Element.' },
      { text: 'A ∈ A', warumFalsch: 'A ist keine eigenes Element von sich selbst; A ∈ P(A) wäre richtig.' },
    ],
    richtige: [0, 1],
    erklaerung: 'Die leere Menge ist Teilmenge jeder Menge (∅ ⊆ A) und stets Element der Potenzmenge (∅ ∈ P(A)). Aber ∅ ist kein Element von A, und A ist nicht Element von A.',
    quelle: 'Übungsblatt 1, Aufgaben 1–2',
  },

  // ===================================================================
  // Blatt 2 – Logik
  // ===================================================================
  {
    art: 'single',
    frage: 'Was ergibt ¬(A ∧ B) nach dem Gesetz von De Morgan?',
    optionen: [
      { text: '¬A ∨ ¬B' },
      { text: '¬A ∧ ¬B', warumFalsch: 'Das ist ¬(A ∨ B), nicht ¬(A ∧ B). Bei De Morgan dreht sich auch der Verknüpfer um.' },
      { text: 'A ∨ B', warumFalsch: 'Die Negation wurde komplett weggelassen.' },
      { text: '¬A ∧ B', warumFalsch: 'Nur ein Teil wurde negiert; De Morgan negiert beide und tauscht ∧ ↔ ∨.' },
    ],
    richtige: 0,
    erklaerung: 'De Morgan: ¬(A ∧ B) = ¬A ∨ ¬B. Die Negation einer Konjunktion ist die Disjunktion der Negationen.',
    quelle: 'Übungsblatt 2, Aufgabe 1',
  },
  {
    art: 'single',
    frage: 'Welcher Ausdruck ist äquivalent zur Implikation P ⇒ Q?',
    optionen: [
      { text: '¬Q ⇒ ¬P' },
      { text: 'Q ⇒ P', warumFalsch: 'Das ist die Umkehrung, nicht äquivalent zu P ⇒ Q.' },
      { text: '¬P ⇒ ¬Q', warumFalsch: 'Das ist die Inverse, ebenfalls nicht äquivalent.' },
      { text: 'P ∧ ¬Q', warumFalsch: 'Das ist gerade die Negation von P ⇒ Q.' },
    ],
    richtige: 0,
    erklaerung: 'Die Kontraposition ¬Q ⇒ ¬P ist äquivalent zu P ⇒ Q. Ebenso gilt P ⇒ Q ≡ ¬P ∨ Q.',
    quelle: 'Übungsblatt 2, Aufgabe 3',
  },
  {
    art: 'multi',
    frage: 'Welche Aussagen sind äquivalent zu P ⇒ Q? (mehrere richtig)',
    optionen: [
      { text: '¬Q ⇒ ¬P (Kontraposition)' },
      { text: '¬P ∨ Q' },
      { text: 'Q ⇒ P (Umkehrung)', warumFalsch: 'Die Umkehrung ist nicht äquivalent zur Implikation.' },
      { text: '¬P ⇒ ¬Q (Inverse)', warumFalsch: 'Die Inverse ist nicht äquivalent; nur die Kontraposition ist es.' },
    ],
    richtige: [0, 1],
    erklaerung: 'P ⇒ Q ist äquivalent zur Kontraposition ¬Q ⇒ ¬P und zu ¬P ∨ Q. Umkehrung und Inverse sind dagegen NICHT äquivalent.',
    quelle: 'Übungsblatt 2, Aufgabe 3',
  },
  {
    art: 'wahrfalsch',
    frage: 'Entscheide für ganze Zahlen z: wahr oder falsch?',
    aussagen: [
      { text: 'z durch 4 teilbar ⇒ z durch 2 teilbar', wahr: true, warum: 'Aus z = 4k folgt z = 2·(2k), also 2 | z.' },
      { text: 'z durch 2 teilbar ⇒ z durch 4 teilbar', wahr: false, warum: 'Gegenbeispiel z = 2: 2 | 2, aber 4 ∤ 2.' },
      { text: 'z² ≥ 0 für alle z ∈ ℤ', wahr: true, warum: 'Quadrate sind nie negativ.' },
      { text: 'z² ≥ 0 ⇒ z ≥ 0', wahr: false, warum: 'Gegenbeispiel z = −1: z² = 1 ≥ 0, aber z = −1 < 0.' },
    ],
    erklaerung: 'Teilbarkeit durch 4 ist stärker als durch 2 (Implikation nur in eine Richtung). Aus z² ≥ 0 folgt nichts über das Vorzeichen von z.',
    quelle: 'Übungsblatt 2, Aufgabe 2',
  },
  {
    art: 'reihenfolge',
    frage: 'Bringe die Schritte des Widerspruchsbeweises für „n ungerade ⇒ n² ungerade" in die richtige Reihenfolge.',
    schritte: [
      'Annahme: n ist ungerade und n² ist gerade (Negation der Behauptung).',
      'Schreibe n = 2k + 1 für ein k ∈ ℕ.',
      'Berechne n² = (2k+1)² = 4k² + 4k + 1 = 2(2k²+2k) + 1.',
      'Stelle fest: n² hat die Form 2m + 1, ist also ungerade.',
      'Das widerspricht der Annahme „n² gerade" – die Annahme war falsch. □',
    ],
    erklaerung: 'Beim Widerspruchsbeweis nimmt man das Gegenteil der Behauptung an und leitet einen Widerspruch her. Hier zeigt die Rechnung, dass n² zwingend ungerade ist.',
    quelle: 'Übungsblatt 2, Aufgabe 5',
  },
  {
    art: 'reihenfolge',
    frage: 'Vereinfache A ∨ (¬A ∧ B) – ordne die Umformungsschritte.',
    schritte: [
      'A ∨ (¬A ∧ B)',
      '(A ∨ ¬A) ∧ (A ∨ B)   [Distributivgesetz]',
      't ∧ (A ∨ B)   [A ∨ ¬A = t]',
      'A ∨ B   [t ∧ X = X]',
    ],
    erklaerung: 'Über das Distributivgesetz, den Satz vom ausgeschlossenen Dritten (A ∨ ¬A = wahr) und die Identität t ∧ X = X vereinfacht sich der Ausdruck zu A ∨ B.',
    quelle: 'Übungsblatt 2, Aufgabe 6',
  },

  // ===================================================================
  // Blatt 3 – Summenzeichen, Binomialkoeffizienten, Induktion
  // ===================================================================
  {
    art: 'eingabe',
    frage: 'Berechne ∑(k=0 bis 3) 2ᵏ. (Ergebnis als Zahl)',
    loesungen: ['15'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: '2⁰ + 2¹ + 2² + 2³ = 1 + 2 + 4 + 8 = 15.',
    quelle: 'Übungsblatt 3, Aufgabe 1',
  },
  {
    art: 'single',
    frage: 'Was ergibt ∑(k=0 bis n) C(n,k) (Binomialkoeffizienten)?',
    optionen: [
      { text: '2ⁿ' },
      { text: 'n²', warumFalsch: 'Die Summe aller Binomialkoeffizienten wächst exponentiell, nicht quadratisch.' },
      { text: 'n!', warumFalsch: 'Die Fakultät ist ein einzelner Koeffizient-Bestandteil, nicht die Gesamtsumme.' },
      { text: 'n · 2', warumFalsch: 'Das wäre nur linear; richtig ist 2ⁿ.' },
    ],
    richtige: 0,
    erklaerung: 'Mit dem Binomischen Lehrsatz und x = y = 1: (1+1)ⁿ = ∑ C(n,k)·1ⁿ⁻ᵏ·1ᵏ = ∑ C(n,k) = 2ⁿ.',
    quelle: 'Übungsblatt 3, Aufgabe 2',
  },
  {
    art: 'eingabe',
    frage: 'Berechne den Binomialkoeffizienten C(6, 2). (Ergebnis als Zahl)',
    loesungen: ['15'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: 'C(6,2) = 6! / (2!·4!) = 720 / (2·24) = 720/48 = 15.',
    quelle: 'Übungsblatt 3, Aufgabe 4',
  },
  {
    art: 'reihenfolge',
    frage: 'Bringe die Bestandteile eines Beweises durch vollständige Induktion in die übliche Reihenfolge.',
    schritte: [
      'Induktionsanfang (IA): Behauptung A(n₀) für den Startwert prüfen.',
      'Induktionsvoraussetzung (IV): A(n) für ein beliebiges, festes n annehmen.',
      'Induktionsschritt (IS): Aus A(n) die Aussage A(n+1) herleiten.',
      'Schluss: A(n) gilt für alle n ≥ n₀. □',
    ],
    erklaerung: 'Vollständige Induktion: zuerst Verankerung (IA), dann unter Annahme der IV den Schritt n → n+1 zeigen (IS). Damit gilt die Aussage für alle n ab dem Startwert.',
    quelle: 'Übungsblatt 3, Aufgabe 3',
  },
  {
    art: 'wahrfalsch',
    frage: 'Identitäten der Binomialkoeffizienten – wahr oder falsch?',
    aussagen: [
      { text: 'C(n, n−k) = C(n, k)  (Symmetrie)', wahr: true, warum: 'Beide Seiten ergeben n!/(k!(n−k)!).' },
      { text: 'C(n, 1) = n', wahr: true, warum: 'C(n,1) = n!/(1!(n−1)!) = n.' },
      { text: 'C(n, k) + C(n, k+1) = C(n+1, k+1)  (Pascal)', wahr: true, warum: 'Das ist die Regel des Pascalschen Dreiecks.' },
      { text: 'C(n, 0) = 0', wahr: false, warum: 'Es gibt genau eine 0-elementige Teilmenge (die leere Menge), also C(n,0) = 1.' },
    ],
    erklaerung: 'Symmetrie, C(n,1)=n und die Pascal-Regel gelten. C(n,0) = 1, weil die leere Menge die einzige 0-elementige Auswahl ist.',
    quelle: 'Übungsblatt 3, Aufgabe 6',
  },

  // ===================================================================
  // Blatt 4 – vollständige Induktion, Zahlbereiche, Supremum/Infimum
  // ===================================================================
  {
    art: 'single',
    frage: 'Was gilt für die Menge M = (0, 1] ?',
    optionen: [
      { text: 'sup = 1 = max, inf = 0, kein min' },
      { text: 'sup = 1 = max, inf = 0 = min', warumFalsch: '0 ∉ (0,1], deshalb gibt es kein Minimum, nur das Infimum 0.' },
      { text: 'sup = 1, kein max, inf = 0', warumFalsch: '1 ∈ (0,1], also ist 1 sehr wohl ein Maximum.' },
      { text: 'sup = 1, kein max, inf = 0, kein min', warumFalsch: 'Da 1 zur Menge gehört, ist sup = 1 zugleich Maximum.' },
    ],
    richtige: 0,
    erklaerung: '1 ∈ (0,1] ⇒ max = sup = 1. 0 ∉ (0,1] (offene Grenze) ⇒ inf = 0, aber kein Minimum.',
    quelle: 'Übungsblatt 4, Aufgabe 4',
  },
  {
    art: 'kategorien',
    frage: 'Ordne jede Menge zu: Hat sie ein Maximum oder kein Maximum?',
    kategorien: ['hat Maximum', 'kein Maximum'],
    items: [
      { text: '(0, 2]', kategorie: 'hat Maximum' },
      { text: '[−1, 2]', kategorie: 'hat Maximum' },
      { text: '(0, 2)', kategorie: 'kein Maximum' },
      { text: '(−∞, 9)', kategorie: 'kein Maximum' },
    ],
    erklaerung: 'Ein Maximum existiert nur, wenn die obere Grenze zur Menge gehört (geschlossenes Intervallende). Bei offener oberer Grenze gibt es nur ein Supremum, kein Maximum.',
    quelle: 'Übungsblatt 4, Aufgabe 4',
  },
  {
    art: 'single',
    frage: 'Welche Quantorenaussage ist für x, y ∈ ℝ wahr?',
    optionen: [
      { text: '∀x ∃y: y = x²' },
      { text: '∃y ∀x: y = x²', warumFalsch: 'Ein festes y kann nicht zu allen x passen (x=1 gibt 1, x=2 gibt 4).' },
      { text: '∀x ∀y: y = x²', warumFalsch: 'Das verlangt, dass jedes y gleich x² ist – offensichtlich falsch.' },
      { text: '∃x ∀y: y = x²', warumFalsch: 'Ein festes x liefert nur einen Wert x², nicht jedes y.' },
    ],
    richtige: 0,
    erklaerung: '∀x ∃y: y = x² ist wahr – wähle zu jedem x einfach y := x². Die Reihenfolge der Quantoren ist entscheidend.',
    quelle: 'Übungsblatt 4, Aufgabe 5',
  },
  {
    art: 'eingabe',
    frage: 'Bestimme mit dem euklidischen Algorithmus ggT(34, 21). (Ergebnis als Zahl)',
    loesungen: ['1'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: '34 = 1·21 + 13, 21 = 1·13 + 8, 13 = 1·8 + 5, 8 = 1·5 + 3, 5 = 1·3 + 2, 3 = 1·2 + 1, 2 = 2·1 + 0 ⇒ ggT = 1. (Die Reste sind Fibonacci-Zahlen.)',
    quelle: 'Übungsblatt 4, Aufgabe 6',
  },
  {
    art: 'reihenfolge',
    frage: 'Bernoulli-Ungleichung (1+x)ⁿ ≥ 1+nx für x ≥ −1: ordne den Induktionsschritt.',
    schritte: [
      '(1+x)ⁿ⁺¹ = (1+x)·(1+x)ⁿ',
      '≥ (1+x)·(1+nx)   [IV und 1+x ≥ 0]',
      '= 1 + (n+1)x + nx²',
      '≥ 1 + (n+1)x   [da nx² ≥ 0]',
    ],
    erklaerung: 'Man spaltet einen Faktor (1+x) ab, nutzt die Induktionsvoraussetzung (die Multiplikation ist erlaubt, weil 1+x ≥ 0), multipliziert aus und lässt den nichtnegativen Term nx² weg.',
    quelle: 'Übungsblatt 4, Aufgabe 2',
  },

  // ===================================================================
  // Blatt 5 – Relationen, Funktionen, Abzählbarkeit
  // ===================================================================
  {
    art: 'single',
    frage: 'Was bedeutet „f: A → B ist injektiv"?',
    optionen: [
      { text: 'x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂)' },
      { text: 'Jedes y ∈ B hat mindestens ein Urbild', warumFalsch: 'Das ist die Definition von surjektiv, nicht injektiv.' },
      { text: 'f(A) = B', warumFalsch: 'Das beschreibt Surjektivität (Bild = Zielmenge).' },
      { text: 'f ist stetig', warumFalsch: 'Stetigkeit hat mit Injektivität nichts zu tun.' },
    ],
    richtige: 0,
    erklaerung: 'Injektiv (eineindeutig): verschiedene Inputs liefern verschiedene Outputs, x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂). Äquivalent: f(x₁) = f(x₂) ⇒ x₁ = x₂.',
    quelle: 'Übungsblatt 5, Aufgabe 3',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jede Funktionseigenschaft ihrer Definition zu.',
    paare: [
      { begriff: 'injektiv', ziel: 'verschiedene x → verschiedene f(x)' },
      { begriff: 'surjektiv', ziel: 'jedes y wird getroffen' },
      { begriff: 'bijektiv', ziel: 'injektiv und surjektiv' },
      { begriff: 'Urbild f⁻¹({y})', ziel: 'alle x mit f(x) = y' },
    ],
    erklaerung: 'Injektiv = eindeutig in der Hinrichtung, surjektiv = jedes Element der Zielmenge wird erreicht, bijektiv = beides (umkehrbar). Das Urbild einer Menge sammelt alle passenden x.',
    quelle: 'Übungsblatt 5, Aufgabe 3',
  },
  {
    art: 'single',
    frage: 'Sei f: ℝ → ℝ, x ↦ x². Was ist das Urbild f⁻¹({4})?',
    optionen: [
      { text: '{−2, 2}' },
      { text: '{2}', warumFalsch: 'Auch (−2)² = 4, also fehlt −2.' },
      { text: '{−2}', warumFalsch: 'Auch 2² = 4, also fehlt 2.' },
      { text: '{16}', warumFalsch: 'Das wäre f(4), also das Bild von 4, nicht das Urbild von 4.' },
    ],
    richtige: 0,
    erklaerung: 'Das Urbild f⁻¹({4}) sind alle x mit x² = 4, also x = 2 und x = −2.',
    quelle: 'Übungsblatt 5, Aufgabe 2',
  },
  {
    art: 'wahrfalsch',
    frage: 'Abzählbarkeit und Verkettung – wahr oder falsch?',
    aussagen: [
      { text: 'ℕ × ℕ ist abzählbar.', wahr: true, warum: 'Die Diagonalen-Aufzählung (Cantor) liefert eine Bijektion ℕ → ℕ×ℕ.' },
      { text: 'ℕ besitzt eine Bijektion auf eine echte Teilmenge.', wahr: true, warum: 'z.B. n ↦ n−1 von ℕ\\{0} auf ℕ – Kennzeichen unendlicher Mengen (Dedekind).' },
      { text: 'Die Verkettung zweier injektiver Funktionen ist injektiv.', wahr: true, warum: 'Bleibt die Eindeutigkeit in jedem Schritt erhalten, so auch insgesamt.' },
      { text: 'Jede surjektive Funktion ist auch injektiv.', wahr: false, warum: 'Gegenbeispiel: φ trifft alle Werte, bildet aber z.B. φ(1)=φ(2) – surjektiv, nicht injektiv.' },
    ],
    erklaerung: 'ℕ×ℕ ist abzählbar (Cantors Diagonalverfahren). Unendliche Mengen lassen sich bijektiv auf echte Teilmengen abbilden. Surjektivität impliziert nicht Injektivität.',
    quelle: 'Übungsblatt 5, Aufgabe 6',
  },

  // ===================================================================
  // Blatt 6 – Unendliche Mengen, Kombinatorik
  // ===================================================================
  {
    art: 'single',
    frage: 'Wie viele dreistellige Wagenreihungen gibt es, wenn aus 8 Wagenpositionen 3 ohne Wiederholung und ohne Reihenfolge gewählt werden?',
    optionen: [
      { text: 'C(8, 3) = 56' },
      { text: '8³ = 512', warumFalsch: 'Das wäre Ziehen mit Wiederholung und mit Reihenfolge.' },
      { text: '8! / 5! = 336', warumFalsch: 'Das ist die Variation V(8,3) – mit Reihenfolge, hier aber ohne.' },
      { text: '3! = 6', warumFalsch: 'Das zählt nur Anordnungen von 3 Elementen, nicht die Auswahl aus 8.' },
    ],
    richtige: 0,
    erklaerung: 'Ohne Wiederholung, ohne Reihenfolge: C(8,3) = 8!/(3!·5!) = 56.',
    quelle: 'Übungsblatt 6, Aufgabe 5',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jedes Urnenmodell der passenden Anzahlformel zu.',
    paare: [
      { begriff: 'mit Wdh., mit Reihenfolge', ziel: 'nᵏ' },
      { begriff: 'ohne Wdh., mit Reihenfolge', ziel: 'n! / (n−k)!' },
      { begriff: 'ohne Wdh., ohne Reihenfolge', ziel: 'C(n, k)' },
      { begriff: 'mit Wdh., ohne Reihenfolge', ziel: 'C(n+k−1, k)' },
    ],
    erklaerung: 'Die vier Grundmodelle der Kombinatorik: Variation mit/ohne Wiederholung (mit Reihenfolge) und Kombination mit/ohne Wiederholung (ohne Reihenfolge).',
    quelle: 'Übungsblatt 6, Aufgaben 4–6',
  },
  {
    art: 'eingabe',
    frage: 'Wie viele verschiedene Anordnungen hat das Wort MATHE (alle Buchstaben verschieden)? (Zahl)',
    loesungen: ['120'],
    toleranz: 0,
    platzhalter: 'Anzahl',
    erklaerung: 'Alle 5 Buchstaben sind verschieden: P(5) = 5! = 120.',
    quelle: 'Übungsblatt 6, Aufgabe 6',
  },
  {
    art: 'eingabe',
    frage: 'Wie viele verschiedene Anordnungen hat das Wort KLAUSUR (7 Buchstaben, U doppelt)? (Zahl)',
    loesungen: ['2520'],
    toleranz: 0,
    platzhalter: 'Anzahl',
    erklaerung: 'Bei einem doppelten Buchstaben: 7! / 2! = 5040 / 2 = 2520.',
    quelle: 'Übungsblatt 6, Aufgabe 6',
  },
  {
    art: 'single',
    frage: 'Wie viele 6-stellige Passwörter aus Buchstaben (26) und Ziffern (10) enthalten MINDESTENS eine Ziffer?',
    optionen: [
      { text: '36⁶ − 26⁶' },
      { text: '36⁶', warumFalsch: 'Das zählt alle Passwörter, auch die ganz ohne Ziffer.' },
      { text: '26⁶', warumFalsch: 'Das zählt gerade die Passwörter NUR aus Buchstaben.' },
      { text: '10 · 36⁵', warumFalsch: 'Hier würden Passwörter mit mehreren Ziffern mehrfach gezählt.' },
    ],
    richtige: 0,
    erklaerung: 'Komplementärmethode: alle Passwörter (36⁶) minus die ganz ohne Ziffer (26⁶) ergibt „mindestens eine Ziffer": 36⁶ − 26⁶.',
    quelle: 'Übungsblatt 6, Aufgabe 3',
  },
  {
    art: 'eingabe',
    frage: 'Wie viele Autonummern (b₁,b₂,z₁,z₂,z₃) gibt es mit b₁,b₂ ∈ {A..Z}, z₁ ∈ {1..9}, z₂,z₃ ∈ {0..9}? (Zahl)',
    loesungen: ['608400'],
    toleranz: 0,
    platzhalter: 'Anzahl',
    erklaerung: 'Produktregel: 26 · 26 · 9 · 10 · 10 = 608 400.',
    quelle: 'Übungsblatt 6, Aufgabe 2',
  },
  {
    art: 'multi',
    frage: 'Welche Aussagen über Binomialkoeffizienten / Kombinationen sind wahr? (mehrere richtig)',
    optionen: [
      { text: 'C(n, k) zählt die k-elementigen Teilmengen einer n-Menge.' },
      { text: 'C(n, 0) = 1 für jedes n ≥ 0.' },
      { text: 'C(n, k) = C(n, n−k) (Symmetrie).' },
      { text: 'C(n, k) zählt Auswahlen MIT Beachtung der Reihenfolge.', warumFalsch: 'C(n,k) ist „ohne Reihenfolge". Mit Reihenfolge ist es die Variation n!/(n−k)!.' },
    ],
    richtige: [0, 1, 2],
    erklaerung: 'C(n,k) zählt ungeordnete Auswahlen ohne Wiederholung (Teilmengen). Es gilt C(n,0)=1 und die Symmetrie C(n,k)=C(n,n−k). Mit Reihenfolge wäre es die Variation.',
    quelle: 'Übungsblatt 6, Aufgaben 5–6',
  },

  // ===================================================================
  // Blatt 7 – Folgen, geometrische Summenformel
  // ===================================================================
  {
    art: 'eingabe',
    frage: 'Berechne mit der geometrischen Summenformel ∑(k=0 bis 2) 3ᵏ. (Zahl)',
    loesungen: ['13'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: '∑(k=0..2) 3ᵏ = (1 − 3³)/(1 − 3) = (1 − 27)/(−2) = (−26)/(−2) = 13. Probe: 1 + 3 + 9 = 13.',
    quelle: 'Übungsblatt 7, Aufgabe 5',
  },
  {
    art: 'single',
    frage: 'Was ist lim(n→∞) (1 + 1/n)ⁿ ?',
    optionen: [
      { text: 'e' },
      { text: '1', warumFalsch: 'Zwar geht 1/n → 0, aber der wachsende Exponent verhindert den Grenzwert 1.' },
      { text: '0', warumFalsch: 'Die Basis ist stets > 1, die Folge fällt nicht gegen 0.' },
      { text: '∞', warumFalsch: 'Die Folge ist beschränkt und konvergiert gegen e ≈ 2,718.' },
    ],
    richtige: 0,
    erklaerung: 'Die Folge ((n+1)/n)ⁿ = (1 + 1/n)ⁿ ist die berühmte Definition der eulerschen Zahl e ≈ 2,718.',
    quelle: 'Übungsblatt 7, Aufgabe 3',
  },
  {
    art: 'wahrfalsch',
    frage: 'Aussagen über konvergente und divergente Folgen – wahr oder falsch?',
    aussagen: [
      { text: 'Es gibt divergente (xₙ), (yₙ) mit konvergenter Summe (xₙ+yₙ).', wahr: true, warum: 'z.B. xₙ = (−1)ⁿ, yₙ = (−1)ⁿ⁺¹: Summe = 0.' },
      { text: 'Konvergiert (xₙ), so konvergiert auch (|xₙ|).', wahr: true, warum: 'Die Betragsfunktion ist stetig, also bleibt Konvergenz erhalten.' },
      { text: 'Konvergiert (|xₙ|), so konvergiert auch (xₙ).', wahr: false, warum: 'Gegenbeispiel xₙ = (−1)ⁿ: |xₙ| = 1 konvergiert, (xₙ) aber nicht.' },
      { text: 'Aus xₙ < yₙ für alle n folgt lim xₙ < lim yₙ.', wahr: false, warum: 'Es folgt nur ≤. Beispiel xₙ = 0, yₙ = 1/n: beide → 0.' },
    ],
    erklaerung: 'Konvergenz überträgt sich auf den Betrag, aber nicht umgekehrt. Strikte Ungleichungen werden im Grenzwert nur zu ≤.',
    quelle: 'Übungsblatt 7, Aufgabe 2',
  },
  {
    art: 'eingabe',
    frage: 'Berechne lim(n→∞) ⁿ√(2¹⁰⁰⁰). (Zahl)',
    loesungen: ['1'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: 'ⁿ√(2¹⁰⁰⁰) = 2^(1000/n). Da 1000/n → 0, folgt 2⁰ = 1.',
    quelle: 'Übungsblatt 7, Aufgabe 3',
  },

  // ===================================================================
  // Blatt 8 – Folgen, bestimmte Divergenz, geometrische Reihe
  // ===================================================================
  {
    art: 'single',
    frage: 'Für welche q konvergiert die geometrische Reihe ∑(n=0 bis ∞) qⁿ ?',
    optionen: [
      { text: '|q| < 1' },
      { text: 'q < 1', warumFalsch: 'Für q ≤ −1 (z.B. q = −2) divergiert die Reihe trotz q < 1.' },
      { text: 'q > 0', warumFalsch: 'Für q ≥ 1 divergiert sie; positive q allein genügen nicht.' },
      { text: 'q ≤ 1', warumFalsch: 'Bei q = 1 ist die Summe 1+1+1+… divergent.' },
    ],
    richtige: 0,
    erklaerung: 'Die geometrische Reihe konvergiert genau für |q| < 1, mit Grenzwert 1/(1−q).',
    quelle: 'Übungsblatt 8, Aufgabe 3',
  },
  {
    art: 'kategorien',
    frage: 'Konvergiert die Folge (xₙ) oder divergiert sie?',
    kategorien: ['konvergiert', 'divergiert'],
    items: [
      { text: 'xₙ = (−1/5)ⁿ', kategorie: 'konvergiert' },
      { text: 'xₙ = 1/n', kategorie: 'konvergiert' },
      { text: 'xₙ = (−1)ⁿ', kategorie: 'divergiert' },
      { text: 'xₙ = n²', kategorie: 'divergiert' },
    ],
    erklaerung: 'Geometrische Folgen mit |q| < 1 und Nullfolgen wie 1/n konvergieren. Alternierende Folgen (−1)ⁿ und unbeschränkt wachsende n² divergieren.',
    quelle: 'Übungsblatt 8, Aufgabe 2',
  },
  {
    art: 'eingabe',
    frage: 'Berechne den Grenzwert der geometrischen Reihe ∑(n=0 bis ∞) (1/2)ⁿ. (Zahl)',
    loesungen: ['2'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: 'Mit |q| = 1/2 < 1: Summe = 1/(1−q) = 1/(1 − 1/2) = 1/(1/2) = 2.',
    quelle: 'Übungsblatt 8, Aufgabe 3',
  },
  {
    art: 'single',
    frage: 'Seien xₙ → ∞ und yₙ → 0. Welche Aussage über das Produkt xₙ·yₙ ist korrekt?',
    optionen: [
      { text: '„∞ · 0" ist unbestimmt – der Grenzwert kann jeden Wert annehmen.' },
      { text: 'xₙ·yₙ → 0 immer', warumFalsch: 'Gegenbeispiel xₙ = n², yₙ = 1/n: xₙyₙ = n → ∞.' },
      { text: 'xₙ·yₙ → ∞ immer', warumFalsch: 'Gegenbeispiel xₙ = n, yₙ = c/n: xₙyₙ = c (endlich).' },
      { text: 'xₙ·yₙ konvergiert immer', warumFalsch: 'Gegenbeispiel xₙ = n, yₙ = (−1)ⁿ/n: xₙyₙ = (−1)ⁿ pendelt.' },
    ],
    richtige: 0,
    erklaerung: '„∞ · 0" ist ein unbestimmter Ausdruck. Je nach Folgen kann das Produkt gegen 0, einen endlichen Wert c, ±∞ oder gar nicht konvergieren.',
    quelle: 'Übungsblatt 8, Aufgabe 1',
  },

  // ===================================================================
  // Blatt 9 – Rekursive Folgen, Reihen, Polynomdivision
  // ===================================================================
  {
    art: 'single',
    frage: 'Warum divergiert die Reihe ∑ √k ?',
    optionen: [
      { text: 'Weil aₖ = √k keine Nullfolge ist (√k → ∞).' },
      { text: 'Weil √k alterniert', warumFalsch: '√k ist monoton wachsend und positiv, es alterniert nicht.' },
      { text: 'Weil das Leibnizkriterium scheitert', warumFalsch: 'Leibniz gilt nur für alternierende Reihen; hier greift schon das Nullfolgenkriterium.' },
      { text: 'Weil √k < 1/k', warumFalsch: 'Im Gegenteil, √k → ∞, ist also nicht klein.' },
    ],
    richtige: 0,
    erklaerung: 'Notwendiges Kriterium: Konvergiert eine Reihe ∑aₖ, dann gilt aₖ → 0. Da √k → ∞ keine Nullfolge ist, divergiert die Reihe.',
    quelle: 'Übungsblatt 9, Aufgabe 2',
  },
  {
    art: 'reihenfolge',
    frage: 'Rekursive Folge x₀=1, xₙ₊₁=√(2+xₙ): ordne die Beweisschritte für die Konvergenz.',
    schritte: [
      'Zeige per Induktion: (xₙ) ist monoton wachsend (xₙ ≤ xₙ₊₁).',
      'Zeige per Induktion: (xₙ) ist nach oben beschränkt (xₙ ≤ 2).',
      'Folgere mit dem Monotoniekriterium: (xₙ) konvergiert.',
      'Löse die Grenzwertgleichung x = √(2+x) ⇒ x² − x − 2 = 0 ⇒ x = 2.',
    ],
    erklaerung: 'Monoton wachsend + nach oben beschränkt ⇒ konvergent (Monotoniekriterium). Den Grenzwert findet man, indem man x = √(2+x) löst; aus [1,2] kommt nur x = 2 in Frage.',
    quelle: 'Übungsblatt 9, Aufgabe 4',
  },
  {
    art: 'single',
    frage: 'Was ergibt die Polynomdivision (3x³ + 10x² − 7x + 4) : (3x² − 2x + 1) ?',
    optionen: [
      { text: 'x + 4' },
      { text: 'x − 4', warumFalsch: 'Probe (3x²−2x+1)(x−4) liefert nicht den Dividenden; das Vorzeichen stimmt nicht.' },
      { text: '3x + 4', warumFalsch: 'Der führende Term ist 3x³ : 3x² = x, nicht 3x.' },
      { text: 'x² + 4', warumFalsch: 'Der Grad des Quotienten ist 3 − 2 = 1, nicht 2.' },
    ],
    richtige: 0,
    erklaerung: '3x³ : 3x² = x. Nach Subtraktion bleibt 12x² − 8x + 4 = 4·(3x² − 2x + 1), also +4. Probe: (3x²−2x+1)(x+4) = 3x³+10x²−7x+4. ✓',
    quelle: 'Übungsblatt 9, Aufgabe 6',
  },
  {
    art: 'wahrfalsch',
    frage: 'Konvergenzkriterien für Reihen – wahr oder falsch?',
    aussagen: [
      { text: 'Ist (aₖ) keine Nullfolge, so divergiert ∑ aₖ.', wahr: true, warum: 'Notwendiges Konvergenzkriterium (Umkehrung).' },
      { text: 'Eine alternierende Reihe mit monoton fallender Nullfolge konvergiert (Leibniz).', wahr: true, warum: 'Genau das besagt das Leibnizkriterium.' },
      { text: 'Wenn aₖ → 0, dann konvergiert ∑ aₖ immer.', wahr: false, warum: 'Gegenbeispiel: harmonische Reihe ∑ 1/k divergiert, obwohl 1/k → 0.' },
      { text: '∑ (−1)ᵏ konvergiert.', wahr: false, warum: '(−1)ᵏ ist keine Nullfolge (pendelt zwischen ±1) ⇒ Reihe divergiert.' },
    ],
    erklaerung: 'aₖ → 0 ist notwendig, aber nicht hinreichend für Konvergenz. Das Leibnizkriterium liefert Konvergenz für alternierende Reihen mit monoton fallender Nullfolge.',
    quelle: 'Übungsblatt 9, Aufgaben 2–3',
  },

  // ===================================================================
  // Blatt 10 – Reihen, Grenzwerte von Funktionen, Asymptotik (O-Notation)
  // ===================================================================
  {
    art: 'single',
    frage: 'Bestimme den maximalen Definitionsbereich von f(x) = 1/(x² − 1).',
    optionen: [
      { text: 'ℝ \\ {−1, 1}' },
      { text: 'ℝ \\ {1}', warumFalsch: 'Auch x = −1 macht den Nenner 0, muss also ausgeschlossen werden.' },
      { text: 'ℝ \\ {0}', warumFalsch: 'Bei x = 0 ist der Nenner −1 ≠ 0; 0 ist erlaubt.' },
      { text: 'ℝ', warumFalsch: 'Die Nullstellen des Nenners (±1) müssen ausgeschlossen werden.' },
    ],
    richtige: 0,
    erklaerung: 'Der Nenner x² − 1 = 0 ⇔ x = ±1. Diese Stellen sind verboten: Dᶠ = ℝ \\ {−1, 1}.',
    quelle: 'Übungsblatt 10, Aufgabe 5',
  },
  {
    art: 'wahrfalsch',
    frage: 'O-Notation (Asymptotik) – wahr oder falsch?',
    aussagen: [
      { text: 'n ∈ O(n²)', wahr: true, warum: 'n ≤ 1·n² für n ≥ 1.' },
      { text: 'n + n² ∈ O(n²)', wahr: true, warum: 'n + n² ≤ 2n² für n ≥ 1.' },
      { text: 'n² ∈ O(n)', wahr: false, warum: 'n² wächst schneller als jede Konstante mal n.' },
      { text: 'O ist transitiv: f ∈ O(g) und g ∈ O(h) ⇒ f ∈ O(h).', wahr: true, warum: 'Konstanten multiplizieren sich: C₁·C₂ liefert die Schranke.' },
    ],
    erklaerung: 'O(g) beschreibt obere Schranken bis auf konstante Faktoren. Kleinere Wachstumsordnungen liegen in größeren, nicht umgekehrt; O ist transitiv.',
    quelle: 'Übungsblatt 10, Aufgabe 6',
  },
  {
    art: 'single',
    frage: 'Warum divergiert die Reihe ∑(k≥0) (−1)ᵏ ?',
    optionen: [
      { text: 'Weil (−1)ᵏ keine Nullfolge ist (pendelt zwischen +1 und −1).' },
      { text: 'Weil die Partialsummen gegen ∞ gehen', warumFalsch: 'Die Partialsummen pendeln zwischen 1 und 0, sie wachsen nicht unbeschränkt.' },
      { text: 'Weil (−1)ᵏ → 0', warumFalsch: '(−1)ᵏ geht gerade NICHT gegen 0; es alterniert.' },
      { text: 'Weil das Leibnizkriterium erfüllt ist', warumFalsch: 'Leibniz verlangt eine monoton fallende Nullfolge – die liegt hier nicht vor.' },
    ],
    richtige: 0,
    erklaerung: 'aₖ = (−1)ᵏ ist keine Nullfolge. Da das notwendige Konvergenzkriterium verletzt ist, divergiert die Reihe.',
    quelle: 'Übungsblatt 10, Aufgabe 1',
  },

  // ===================================================================
  // Blatt 11 – Stetigkeit
  // ===================================================================
  {
    art: 'single',
    frage: 'Was besagt der Zwischenwertsatz für eine auf [a, b] stetige Funktion f?',
    optionen: [
      { text: 'f nimmt jeden Wert zwischen f(a) und f(b) an.' },
      { text: 'f ist auf [a, b] differenzierbar', warumFalsch: 'Stetigkeit impliziert keine Differenzierbarkeit (z.B. |x|).' },
      { text: 'f hat ein globales Maximum', warumFalsch: 'Das ist der Satz vom Maximum/Minimum, nicht der Zwischenwertsatz.' },
      { text: 'f ist auf [a, b] monoton', warumFalsch: 'Stetigkeit erzwingt keine Monotonie.' },
    ],
    richtige: 0,
    erklaerung: 'Zwischenwertsatz: Ist f stetig auf [a,b] und y zwischen f(a) und f(b), dann existiert ein x ∈ [a,b] mit f(x) = y. Basis des Bisektionsverfahrens.',
    quelle: 'Übungsblatt 11, Aufgabe 3',
  },
  {
    art: 'single',
    frage: 'Für welches c ist f mit f(x) = |x| (x<0), f(0) = c, f(x) = √x (x>0) bei 0 stetig?',
    optionen: [
      { text: 'c = 0' },
      { text: 'c = 1', warumFalsch: 'Beide einseitigen Grenzwerte sind 0, nicht 1.' },
      { text: 'Kein c möglich', warumFalsch: 'Die einseitigen Grenzwerte stimmen überein (beide 0), also gibt es ein passendes c.' },
      { text: 'c = −1', warumFalsch: 'Die Grenzwerte sind 0; c muss diesen gemeinsamen Wert haben.' },
    ],
    richtige: 0,
    erklaerung: 'lim(x→0⁻) |x| = 0 und lim(x→0⁺) √x = 0. Da beide übereinstimmen, ist f stetig, wenn c = 0 = f(0).',
    quelle: 'Übungsblatt 11, Aufgabe 3',
  },
  {
    art: 'wahrfalsch',
    frage: 'Stetigkeit – wahr oder falsch?',
    aussagen: [
      { text: 'Polynome sind auf ganz ℝ stetig.', wahr: true, warum: 'Polynome sind überall stetig (und sogar differenzierbar).' },
      { text: 'Verkettungen stetiger Funktionen sind stetig.', wahr: true, warum: 'z.B. √∘|·|∘sin ist als Verkettung stetiger Funktionen stetig.' },
      { text: 'f(x) = 1/((cos x)² + 1) ist auf ℝ stetig.', wahr: true, warum: '(cos x)² + 1 ≥ 1 > 0, also nie 0 im Nenner – Quotient stetiger Funktionen.' },
      { text: 'Der punktweise Grenzwert stetiger Funktionen ist stets stetig.', wahr: false, warum: 'Gegenbeispiel fₙ(x) = xⁿ auf (−1,1]: der Grenzwert springt bei x=1.' },
    ],
    erklaerung: 'Polynome, Quotienten ohne Nullstellen im Nenner und Verkettungen stetiger Funktionen sind stetig. Punktweise Grenzwerte können die Stetigkeit jedoch verlieren.',
    quelle: 'Übungsblatt 11, Aufgaben 1 & 5',
  },

  // ===================================================================
  // Blatt 12 – Spezielle Funktionen (Exponential, Logarithmus)
  // ===================================================================
  {
    art: 'eingabe',
    frage: 'Berechne log₁₀(10000). (Ergebnis als Zahl)',
    loesungen: ['4'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: '10000 = 10⁴, also log₁₀(10⁴) = 4 (denn log_a(aᵏ) = k).',
    quelle: 'Übungsblatt 12, Aufgabe 6a',
  },
  {
    art: 'eingabe',
    frage: 'Berechne log₂(2/64). (Ergebnis als Zahl, z.B. −5)',
    loesungen: ['-5', '−5'],
    toleranz: 0,
    platzhalter: 'Zahl',
    erklaerung: '2/64 = 1/32 = 2⁻⁵, also log₂(2⁻⁵) = −5.',
    quelle: 'Übungsblatt 12, Aufgabe 6b',
  },
  {
    art: 'single',
    frage: 'Wie lautet der Basiswechselsatz für Logarithmen?',
    optionen: [
      { text: 'log_b(x) = log_a(x) / log_a(b)' },
      { text: 'log_b(x) = log_a(x) · log_a(b)', warumFalsch: 'Es wird durch log_a(b) geteilt, nicht multipliziert.' },
      { text: 'log_b(x) = log_a(b) / log_a(x)', warumFalsch: 'Zähler und Nenner sind vertauscht.' },
      { text: 'log_b(x) = log_a(x) − log_a(b)', warumFalsch: 'Die Differenz gehört zur Quotientenregel log(x/b), nicht zum Basiswechsel.' },
    ],
    richtige: 0,
    erklaerung: 'Basiswechselsatz: log_b(x) = log_a(x)/log_a(b) für a, b > 0 und a, b ≠ 1. Damit lässt sich jeder Logarithmus auf eine beliebige Basis (z.B. ln) zurückführen.',
    quelle: 'Übungsblatt 12, Aufgabe 6c',
  },
  {
    art: 'kategorien',
    frage: 'Sortiere die Zahlen: rational oder irrational?',
    kategorien: ['rational', 'irrational'],
    items: [
      { text: '3/7', kategorie: 'rational' },
      { text: 'log₁₀(1000)', kategorie: 'rational' },
      { text: '√2', kategorie: 'irrational' },
      { text: 'e', kategorie: 'irrational' },
    ],
    erklaerung: 'Brüche und Logarithmen mit ganzzahligem Ergebnis (log₁₀(1000)=3) sind rational. √2 und die eulersche Zahl e sind irrational (nicht als Bruch darstellbar).',
    quelle: 'Übungsblätter 0 & 12',
  },

  // ===================================================================
  // Blatt 13 – Differentiation
  // ===================================================================
  {
    art: 'single',
    frage: 'Was ist die Ableitung von f(x) = x⁴ ?',
    optionen: [
      { text: '4x³' },
      { text: 'x³', warumFalsch: 'Der Faktor 4 (der alte Exponent) fehlt.' },
      { text: '4x⁴', warumFalsch: 'Der Exponent muss um 1 sinken: x⁴ → x³.' },
      { text: 'x⁵/5', warumFalsch: 'Das ist die Stammfunktion (Integral), nicht die Ableitung.' },
    ],
    richtige: 0,
    erklaerung: 'Potenzregel: (xⁿ)′ = n·xⁿ⁻¹, also (x⁴)′ = 4x³.',
    quelle: 'Übungsblatt 13, Aufgabe 1',
  },
  {
    art: 'single',
    frage: 'Was ist die Ableitung von f(x) = (x² + 1)³ ?',
    optionen: [
      { text: '6x(x² + 1)²' },
      { text: '3(x² + 1)²', warumFalsch: 'Die innere Ableitung (2x) fehlt – Kettenregel nicht vollständig.' },
      { text: '3x²(x² + 1)²', warumFalsch: 'Die innere Ableitung von x²+1 ist 2x, nicht 3x².' },
      { text: '6(x² + 1)²', warumFalsch: 'Der Faktor x aus der inneren Ableitung 2x fehlt.' },
    ],
    richtige: 0,
    erklaerung: 'Kettenregel [g(h(x))]′ = g′(h(x))·h′(x). Mit g(u)=u³, h(x)=x²+1: 3(x²+1)²·2x = 6x(x²+1)².',
    quelle: 'Übungsblatt 13, Aufgabe 1',
  },
  {
    art: 'zuordnung',
    frage: 'Ordne jeder Ableitungsregel ihre Formel zu.',
    paare: [
      { begriff: 'Produktregel', ziel: '(u·v)′ = u′v + uv′' },
      { begriff: 'Quotientenregel', ziel: '(u/v)′ = (u′v − uv′)/v²' },
      { begriff: 'Kettenregel', ziel: '(f∘g)′ = f′(g)·g′' },
      { begriff: 'Potenzregel', ziel: '(xⁿ)′ = n·xⁿ⁻¹' },
    ],
    erklaerung: 'Die vier Grundregeln der Differentiation: Produkt-, Quotienten-, Ketten- und Potenzregel. Beim Quotienten steht der Ableitungsterm u′v zuerst.',
    quelle: 'Übungsblatt 13, Aufgabe 1',
  },
  {
    art: 'single',
    frage: 'Was ist die Ableitung von g(x) = 2x / (2x² + 1) ?',
    optionen: [
      { text: '(−4x² + 2) / (2x² + 1)²' },
      { text: '2 / (4x)', warumFalsch: 'Zähler und Nenner darf man nicht getrennt ableiten – das ist nicht die Quotientenregel.' },
      { text: '(8x² − 2) / (2x² + 1)²', warumFalsch: 'Das Vorzeichen im Zähler ist falsch; korrekt ist u′v − uv′ = 2(2x²+1) − 2x·4x.' },
      { text: '(4x² + 2) / (2x² + 1)²', warumFalsch: 'Der gemischte Term −8x² fehlt; richtig ist 2 + 4x² − 8x² = −4x² + 2.' },
    ],
    richtige: 0,
    erklaerung: 'Quotientenregel mit u=2x, v=2x²+1: g′ = (2·(2x²+1) − 2x·4x)/(2x²+1)² = (4x²+2−8x²)/(2x²+1)² = (−4x²+2)/(2x²+1)².',
    quelle: 'Übungsblatt 13, Aufgabe 1b',
  },
  {
    art: 'wahrfalsch',
    frage: 'Differenzierbarkeit der Funktion u(x) = x·|x| – wahr oder falsch?',
    aussagen: [
      { text: 'Für x > 0 gilt u(x) = x², also u′(x) = 2x.', wahr: true, warum: '|x| = x für x > 0, somit u(x) = x².' },
      { text: 'Für x < 0 gilt u(x) = −x², also u′(x) = −2x.', wahr: true, warum: '|x| = −x für x < 0, somit u(x) = −x².' },
      { text: 'u ist in x = 0 differenzierbar mit u′(0) = 0.', wahr: true, warum: 'Beide einseitigen Differenzenquotienten sind 0, also u′(0) = 0.' },
      { text: 'u ist in x = 0 nicht differenzierbar.', wahr: false, warum: 'Im Gegenteil: die einseitigen Ableitungen stimmen überein (beide 0).' },
    ],
    erklaerung: 'u(x) = x·|x| ist stückweise x² bzw. −x². In x = 0 liefern beide einseitigen Differenzenquotienten 0, also ist u dort differenzierbar mit u′(0) = 0.',
    quelle: 'Übungsblatt 13, Aufgabe 1d',
  },
]
