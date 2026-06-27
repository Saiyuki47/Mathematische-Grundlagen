// Themenübersicht, abgeleitet aus den 14 Übungsblättern (Blatt 0–13).
// Pro Blatt ein Thema mit kurzer Beschreibung und den behandelten Schwerpunkten.
export interface Thema {
  blatt: string
  titel: string
  beschreibung: string
  punkte: string[]
}

export const themen: Thema[] = [
  {
    blatt: '0',
    titel: 'Rechenregeln, Notationen, Geraden',
    beschreibung: 'Grundlegendes Rechnen als Aufwärmtraining: Brüche, Potenzen, Wurzeln und lineare Funktionen.',
    punkte: [
      'Brüche addieren, multiplizieren, dividieren und kürzen',
      'Potenzgesetze und negative Exponenten',
      'Ausklammern und Faktorisieren (binomische Formeln)',
      'Wurzelgesetze und Nenner rational machen',
      'Geraden y = mx + b skizzieren und Geradengleichungen bestimmen',
    ],
  },
  {
    blatt: '1',
    titel: 'Mengen',
    beschreibung: 'Mengenlehre als Sprache der Mathematik: Schreibweisen, Operationen und Darstellungen.',
    punkte: [
      'Mengenschreibweisen (aufzählend und beschreibend)',
      'Mengenoperationen: Vereinigung, Schnitt, Differenz, Komplement',
      'Mengendarstellung und Venn-Diagramme',
      'Mengengleichheiten nachweisen',
    ],
  },
  {
    blatt: '2',
    titel: 'Logik',
    beschreibung: 'Aussagenlogik und Beweistechniken: Wahrheitstafeln, Implikationen und erste Beweise.',
    punkte: [
      'Wahrheitstafeln aufstellen',
      'Aussagen mit ⇒, ⟸, ⟺ formulieren',
      'Äquivalente Aussagen zu einer Implikation',
      'Direkter Beweis und Widerspruchsbeweis',
      'Logische Ausdrücke vereinfachen',
    ],
  },
  {
    blatt: '3',
    titel: 'Summenzeichen, Binomialkoeffizienten, vollständige Induktion',
    beschreibung: 'Umgang mit dem Summenzeichen, Binomialkoeffizienten und erste Induktionsbeweise.',
    punkte: [
      'Rechnen mit dem Summenzeichen',
      'Binomischer Lehrsatz und Identitäten',
      'Vollständige Induktion',
      'Potenzmenge (Knobelaufgabe)',
      'Identitäten der Binomialkoeffizienten',
    ],
  },
  {
    blatt: '4',
    titel: 'Vollständige Induktion, Zahlbereiche',
    beschreibung: 'Vertiefung der Induktion sowie Ordnung und Schranken in den Zahlbereichen.',
    punkte: [
      'Produktformel per Induktion',
      'Bernoulli’sche Ungleichung',
      'Mengen als Intervalle',
      'Supremum, Infimum, Maximum, Minimum',
      'Quantoren am Beispiel y = x²',
      'Euklidischer Algorithmus, Summen- und Produktgleichheiten',
    ],
  },
  {
    blatt: '5',
    titel: 'Relationen, Funktionen, Abzählbarkeit',
    beschreibung: 'Funktionen und ihre Eigenschaften: Graph, Bilder/Urbilder, Verkettung und Abzählbarkeit.',
    punkte: [
      'Graph einer Funktion',
      'Bilder und Urbilder',
      'Injektivität, Surjektivität, Bijektivität',
      'Verkettung von Funktionen',
      'Eigenschaften von Relationen',
      'Abzählbarkeit',
    ],
  },
  {
    blatt: '6',
    titel: 'Unendliche Mengen, Kombinatorik',
    beschreibung: 'Abzählbarkeit unendlicher Mengen und kombinatorisches Zählen in Anwendungen.',
    punkte: [
      'Unendliche Mengen und Abzählbarkeit',
      'Kartesisches Produkt',
      'Dualzahlen, Passwörter, Anagramme',
      'Anordnungs- und Auswahlprobleme (Bus, Zug, Spatzen)',
      'Gitterwege',
    ],
  },
  {
    blatt: '7',
    titel: 'Folgen, geometrische Summenformel',
    beschreibung: 'Einstieg in Folgen: Bildungsvorschriften, Konvergenz und die geometrische Summenformel.',
    punkte: [
      'Abbildungsvorschriften und rekursive Folgen',
      'Konvergenz und Divergenz von Folgen',
      'Grenzwerte von Folgen',
      'Konvergenz mit der ε-N-Definition',
      'Geometrische Summenformel',
    ],
  },
  {
    blatt: '8',
    titel: 'Folgen, bestimmte Divergenz, geometrische Reihe',
    beschreibung: 'Vertiefung der Folgen: bestimmte Divergenz, Grenzwertsätze und die geometrische Reihe.',
    punkte: [
      'Folgen mit lim xₙ = ∞ und lim yₙ = 0',
      'Grenzwerte von Folgen bestimmen',
      'Geometrische Reihe',
      'Rekursive Folgen analysieren',
      'Grenzwertsätze beweisen',
    ],
  },
  {
    blatt: '9',
    titel: 'Rekursive Folgen, Reihen, Polynomdivision',
    beschreibung: 'Reihen auf Konvergenz prüfen, rekursive Folgen untersuchen und Polynomdivision.',
    punkte: [
      'Grenzwerte geometrischer Reihen',
      'Reihen auf Konvergenz prüfen',
      'Rekursive Folge xₙ₊₁ = √(2 + xₙ)',
      'Polynomdivisionen',
    ],
  },
  {
    blatt: '10',
    titel: 'Reihen, Grenzwerte von Funktionen, Asymptotik',
    beschreibung: 'Reihen, Funktionsgrenzwerte, Stetigkeit, Definitionsbereiche und O-Notation.',
    punkte: [
      'Reihen auf Konvergenz untersuchen',
      'Grenzwerte bestimmen',
      'Grenzwerte und Stetigkeit von Funktionen',
      'Definitionsbereich und Asymptotik',
      'O-Notation',
    ],
  },
  {
    blatt: '11',
    titel: 'Stetigkeit',
    beschreibung: 'Stetigkeit von Funktionen, stetige Fortsetzbarkeit und der Zwischenwertsatz.',
    punkte: [
      'Stetigkeit in ℝ prüfen',
      'Stetigkeit von f, g, h',
      'Stetige Fortsetzbarkeit — Parameter c bestimmen',
      'Zwischenwertsatz und Bisektionsverfahren',
      'Punktweise Konvergenz von fₙ(x) = xⁿ',
    ],
  },
  {
    blatt: '12',
    titel: 'Spezielle Funktionen',
    beschreibung: 'Exponential-, Logarithmus- und trigonometrische Funktionen samt ihrer Grenzwerte.',
    punkte: [
      'Funktions- und Folgengrenzwerte',
      'Allgemeine Exponentialfunktion und ᵏ√k',
      'Rechenregeln der Exponentialfunktion',
      'Logarithmuswerte berechnen',
      'Konvergenz der sin- und cos-Reihe',
    ],
  },
  {
    blatt: '13',
    titel: 'Differentiation',
    beschreibung: 'Ableitungen, Differenzierbarkeit und Ableitungsregeln für spezielle Funktionen.',
    punkte: [
      'Ableitungen bestimmen',
      'Differenzierbarkeit in 0 prüfen',
      'Ableitung der Wurzelfunktion (Umkehrfunktionsregel)',
      'Potenzreihe und geometrische Reihe',
      'Allgemeine Potenz und Exponentialfunktion',
      'Ableitung von tan und arctan',
    ],
  },
]
