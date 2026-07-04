// Begriffe zum Auswendiglernen — kompakte, exakte Definitionen, gesammelt aus
// den Referenz-Karten, Übungsblättern und Vorlesungsfolien. Gerendert mit
// MathText (Markdown-lite + $LaTeX$). Jede Definition soll für sich allein
// „abfragbar" sein: Begriff lesen → Definition aufsagen können.

export interface Begriff {
  begriff: string
  /** Kompakte Definition (MathText-Format: **fett**, $LaTeX$). */
  definition: string
  /** Optionale Eselsbrücke / Kurzform zum Einprägen. */
  merke?: string
}

export interface BegriffGruppe {
  titel: string
  begriffe: Begriff[]
}

export const begriffGruppen: BegriffGruppe[] = [
  {
    titel: 'Logik & Aussagen',
    begriffe: [
      {
        begriff: 'Aussage',
        definition: 'Ein sprachliches Gebilde, das **entweder wahr oder falsch** ist — es hat genau einen Wahrheitswert (w oder f).',
        merke: '„Es regnet" ✓ — „Guten Morgen!" ✗ (kein Wahrheitswert)',
      },
      {
        begriff: 'Negation $\\neg A$',
        definition: '„nicht $A$" — wahr genau dann, wenn $A$ falsch ist.',
      },
      {
        begriff: 'Konjunktion $A \\wedge B$',
        definition: '„$A$ und $B$" — wahr genau dann, wenn **beide** Aussagen wahr sind.',
      },
      {
        begriff: 'Disjunktion $A \\vee B$',
        definition: '„$A$ oder $B$" — das **nicht-ausschließende** Oder: falsch nur, wenn beide falsch sind (eines oder beide dürfen wahr sein).',
      },
      {
        begriff: 'Implikation $A \\Rightarrow B$',
        definition: '„wenn $A$, dann $B$" — **nur falsch, wenn $A$ wahr und $B$ falsch** ist. Aus einer falschen Prämisse folgt alles.',
        merke: '$A$ ist hinreichend für $B$; $B$ ist notwendig für $A$',
      },
      {
        begriff: 'Äquivalenz $A \\Leftrightarrow B$',
        definition: '„$A$ genau dann, wenn $B$" — wahr genau dann, wenn $A$ und $B$ **denselben Wahrheitswert** haben.',
      },
      {
        begriff: 'hinreichende Bedingung',
        definition: '$A$ ist hinreichend für $B$, wenn $A \\Rightarrow B$ gilt: sobald $A$ vorliegt, liegt sicher auch $B$ vor.',
      },
      {
        begriff: 'notwendige Bedingung',
        definition: '$B$ ist notwendig für $A$, wenn $A \\Rightarrow B$ gilt: ohne $B$ kann $A$ nicht gelten.',
        merke: 'notwendig = steht rechts vom Pfeil',
      },
      {
        begriff: 'Kontraposition',
        definition: '$A \\Rightarrow B$ ist **logisch äquivalent** zu $\\neg B \\Rightarrow \\neg A$. Beide dürfen beim Beweisen gegeneinander getauscht werden.',
      },
      {
        begriff: 'Umkehrung',
        definition: 'Die Umkehrung von $A \\Rightarrow B$ ist $B \\Rightarrow A$ — sie ist **nicht** äquivalent zur ursprünglichen Implikation!',
      },
      {
        begriff: 'Tautologie',
        definition: 'Eine Formel, die bei **jeder** Belegung der Wahrheitswerte wahr ist, z. B. $A \\vee \\neg A$.',
      },
      {
        begriff: 'Kontradiktion',
        definition: 'Eine Formel, die bei **jeder** Belegung falsch ist, z. B. $A \\wedge \\neg A$.',
      },
      {
        begriff: 'Allquantor $\\forall$',
        definition: '„für alle" — $\\forall x \\in M: A(x)$ heißt: die Aussage $A(x)$ gilt für **jedes** Element $x$ aus $M$.',
      },
      {
        begriff: 'Existenzquantor $\\exists$',
        definition: '„es gibt" — $\\exists x \\in M: A(x)$ heißt: es gibt **mindestens ein** $x$ aus $M$, für das $A(x)$ gilt.',
      },
      {
        begriff: 'Negation von Quantoren',
        definition: '$\\neg\\,\\forall x: A(x) \\;\\Leftrightarrow\\; \\exists x: \\neg A(x)$ und $\\neg\\,\\exists x: A(x) \\;\\Leftrightarrow\\; \\forall x: \\neg A(x)$.',
        merke: 'Quantor kippt, innere Aussage wird negiert',
      },
      {
        begriff: 'Gegenbeispiel',
        definition: 'Widerlegt eine All-Aussage: **ein einziges** konkretes Beispiel, das die Voraussetzung erfüllt, aber die Behauptung verletzt, genügt.',
      },
    ],
  },
  {
    titel: 'Mengen',
    begriffe: [
      {
        begriff: 'Menge',
        definition: 'Zusammenfassung wohlunterschiedener Objekte (ihrer **Elemente**). Reihenfolge und Wiederholungen spielen keine Rolle: $\\{1,2,2\\} = \\{2,1\\}$.',
      },
      {
        begriff: 'leere Menge $\\emptyset$',
        definition: 'Die Menge ohne Elemente. Sie ist **Teilmenge jeder Menge**.',
      },
      {
        begriff: 'Teilmenge $A \\subseteq B$',
        definition: '**Jedes** Element von $A$ liegt auch in $B$.',
      },
      {
        begriff: 'echte Teilmenge $A \\subsetneq B$',
        definition: '$A \\subseteq B$ und $A \\ne B$ — in $B$ liegt mindestens ein Element, das nicht in $A$ ist.',
      },
      {
        begriff: 'Mengengleichheit',
        definition: '$A = B$ genau dann, wenn $A \\subseteq B$ **und** $B \\subseteq A$ (beide Inklusionen zeigen!).',
      },
      {
        begriff: 'Mächtigkeit / Kardinalität $|A|$',
        definition: 'Die Anzahl der Elemente von $A$ (bei endlichen Mengen).',
      },
      {
        begriff: 'Potenzmenge $\\mathcal{P}(A)$',
        definition: 'Die Menge **aller Teilmengen** von $A$ — inklusive $\\emptyset$ und $A$ selbst. Es gilt $|\\mathcal{P}(A)| = 2^{|A|}$.',
      },
      {
        begriff: 'Vereinigung $A \\cup B$',
        definition: 'Alle Elemente, die in $A$ **oder** in $B$ liegen (oder in beiden).',
      },
      {
        begriff: 'Schnitt $A \\cap B$',
        definition: 'Alle Elemente, die in $A$ **und** in $B$ liegen.',
      },
      {
        begriff: 'disjunkt',
        definition: 'Zwei Mengen heißen disjunkt, wenn sie kein gemeinsames Element haben: $A \\cap B = \\emptyset$.',
      },
      {
        begriff: 'Differenz $A \\setminus B$',
        definition: 'Alle Elemente von $A$, die **nicht** in $B$ liegen.',
      },
      {
        begriff: 'Komplement $A^c$ bzw. $\\overline{A}$',
        definition: 'Alle Elemente der Grundmenge, die **nicht** in $A$ liegen: $A^c = \\Omega \\setminus A$.',
      },
      {
        begriff: 'kartesisches Produkt $A \\times B$',
        definition: 'Die Menge **aller geordneten Paare** $(a,b)$ mit $a \\in A$ und $b \\in B$. Hier zählt die Reihenfolge: $(1,2) \\ne (2,1)$.',
      },
      {
        begriff: 'De-Morgan-Regeln',
        definition: '$(A \\cup B)^c = A^c \\cap B^c$ und $(A \\cap B)^c = A^c \\cup B^c$ — beim Komplement kippt $\\cup$ zu $\\cap$ und umgekehrt.',
      },
      {
        begriff: 'gleichmächtig',
        definition: 'Zwei Mengen sind gleichmächtig, wenn es eine **Bijektion** zwischen ihnen gibt.',
      },
      {
        begriff: 'abzählbar',
        definition: 'Eine Menge ist abzählbar, wenn sie endlich oder **gleichmächtig zu $\\mathbb{N}$** ist (abzählbar unendlich). $\\mathbb{Z}$ und $\\mathbb{Q}$ sind abzählbar.',
      },
      {
        begriff: 'überabzählbar',
        definition: 'Nicht abzählbar — die Elemente lassen sich **nicht** durchnummerieren. Beispiel: $\\mathbb{R}$ (Cantors Diagonalargument).',
      },
    ],
  },
  {
    titel: 'Relationen',
    begriffe: [
      {
        begriff: '(binäre) Relation',
        definition: 'Eine Teilmenge des kartesischen Produkts: $R \\subseteq A \\times B$. Statt $(a,b) \\in R$ schreibt man auch $a\\,R\\,b$.',
      },
      {
        begriff: 'Relation auf $A$',
        definition: 'Eine Relation mit gleicher Start- und Zielmenge: $R \\subseteq A \\times A$. Nur hier sind reflexiv/symmetrisch/… sinnvoll.',
      },
      {
        begriff: 'reflexiv',
        definition: '$a\\,R\\,a$ gilt für **jedes** $a \\in A$ — jedes Element steht zu sich selbst in Beziehung. Beispiel: $\\le$; Gegenbeispiel: $<$.',
      },
      {
        begriff: 'symmetrisch',
        definition: 'Aus $a\\,R\\,b$ folgt $b\\,R\\,a$ — die Beziehung ist gegenseitig. Beispiel: $=$; Gegenbeispiel: $\\le$.',
      },
      {
        begriff: 'antisymmetrisch',
        definition: 'Aus $a\\,R\\,b$ **und** $b\\,R\\,a$ folgt $a = b$. Beispiel: $\\le$. Achtung: nicht das Gegenteil von symmetrisch ($=$ ist beides).',
      },
      {
        begriff: 'transitiv',
        definition: 'Aus $a\\,R\\,b$ und $b\\,R\\,c$ folgt $a\\,R\\,c$ — die Beziehung „springt weiter". Beispiele: $\\le$, Teilbarkeit.',
      },
      {
        begriff: 'Ordnungsrelation',
        definition: 'Eine Relation, die **reflexiv, antisymmetrisch und transitiv** ist. Beispiele: $\\le$ auf $\\mathbb{R}$, $\\subseteq$ auf Mengen.',
      },
      {
        begriff: 'Äquivalenzrelation',
        definition: 'Eine Relation, die **reflexiv, symmetrisch und transitiv** ist. Beispiele: $=$, „gleicher Rest bei Division durch $m$".',
        merke: 'Ordnung: antisymmetrisch — Äquivalenz: symmetrisch; reflexiv + transitiv haben beide',
      },
      {
        begriff: 'Äquivalenzklasse $[a]$',
        definition: 'Die Menge aller Elemente, die zu $a$ äquivalent sind: $[a] = \\{x \\in A : x \\sim a\\}$.',
      },
      {
        begriff: 'Repräsentant',
        definition: 'Ein beliebiges Element einer Äquivalenzklasse — jedes Element vertritt seine ganze Klasse: $[a] = [b]$ genau dann, wenn $a \\sim b$.',
      },
      {
        begriff: 'Partition',
        definition: 'Zerlegung von $A$ in **nichtleere, paarweise disjunkte** Teilmengen, deren Vereinigung ganz $A$ ist. Die Äquivalenzklassen einer Äquivalenzrelation bilden stets eine Partition.',
      },
      {
        begriff: 'Quotientenmenge $A/\\!\\sim$',
        definition: 'Die Menge **aller Äquivalenzklassen** einer Äquivalenzrelation $\\sim$ auf $A$.',
      },
    ],
  },
  {
    titel: 'Die vier Relations-Eigenschaften (total & eindeutig)',
    begriffe: [
      {
        begriff: 'linkstotal',
        definition: 'Zu **jedem** $x \\in A$ existiert **mindestens ein** $y \\in B$ mit $(x,y) \\in R$ — „jedes $x$ wird zugeordnet, keines bleibt übrig".',
      },
      {
        begriff: 'rechtstotal',
        definition: 'Zu **jedem** $y \\in B$ existiert **mindestens ein** $x \\in A$ mit $(x,y) \\in R$ — „jedes $y$ wird getroffen". Bei Funktionen heißt das **surjektiv**.',
      },
      {
        begriff: 'linkseindeutig',
        definition: 'Aus $(x_1,y) \\in R$ und $(x_2,y) \\in R$ folgt $x_1 = x_2$ — kein $y$ hat **zwei verschiedene** Partner auf der linken Seite. Bei Funktionen heißt das **injektiv**.',
      },
      {
        begriff: 'rechtseindeutig',
        definition: 'Aus $(x,y_1) \\in R$ und $(x,y_2) \\in R$ folgt $y_1 = y_2$ — jedes $x$ hat **höchstens einen** Partner auf der rechten Seite.',
      },
      {
        begriff: 'Merkschema: total / eindeutig',
        definition: '**total** = „mindestens ein Partner" (keiner geht leer aus), **eindeutig** = „höchstens ein Partner" (keiner hat zwei). **links/rechts** sagt, für welche Seite der Paare $(x, y)$ die Bedingung gilt.',
        merke: 'Funktion = linkstotal + rechtseindeutig · injektiv = linkseindeutig · surjektiv = rechtstotal',
      },
    ],
  },
  {
    titel: 'Abbildungen & Funktionen',
    begriffe: [
      {
        begriff: 'Abbildung / Funktion $f: A \\to B$',
        definition: 'Eine Zuordnung, die **jedem** $x \\in A$ **genau ein** $f(x) \\in B$ zuordnet. Formal: eine **linkstotale und rechtseindeutige** Relation $R \\subseteq A \\times B$.',
      },
      {
        begriff: 'Definitionsbereich',
        definition: 'Die Startmenge $A$ — die Menge aller zulässigen Eingaben. Gehört fest zur Funktion dazu.',
      },
      {
        begriff: 'Zielbereich (Zielmenge)',
        definition: 'Die Menge $B$, in der die Funktionswerte liegen dürfen. Nicht jeder Wert aus $B$ muss getroffen werden.',
      },
      {
        begriff: 'Wertebereich (Bild von $f$)',
        definition: 'Die Menge der **tatsächlich angenommenen** Werte: $f(A) = \\{f(x) : x \\in A\\} \\subseteq B$.',
      },
      {
        begriff: 'Graph',
        definition: '$G_f = \\{(x, f(x)) : x \\in A\\} \\subseteq A \\times B$ — zu jedem $x$ genau ein Paar (Senkrechten-Test).',
      },
      {
        begriff: 'wohldefiniert',
        definition: 'Die Zuordnung besteht den Existenz- und Eindeutigkeitstest: jedes $x$ bekommt einen Wert (linkstotal) und **nur einen** (rechtseindeutig) — auch bei verschiedenen Darstellungen desselben $x$.',
      },
      {
        begriff: 'Bild einer Menge $f(M)$',
        definition: '$f(M) = \\{f(x) : x \\in M\\}$ — alle Werte, die $f$ auf $M$ annimmt. Eine **Teilmenge des Zielbereichs**.',
      },
      {
        begriff: 'Urbild $f^{-1}(N)$',
        definition: '$f^{-1}(N) = \\{x \\in A : f(x) \\in N\\}$ — alle Eingaben, deren Wert in $N$ landet. Eine **Teilmenge des Definitionsbereichs**; existiert für **jede** Funktion, auch ohne Umkehrfunktion!',
      },
      {
        begriff: 'injektiv',
        definition: 'Aus $f(x_1) = f(x_2)$ folgt stets $x_1 = x_2$ — **kein Wert wird doppelt getroffen**, verschiedene Eingaben liefern verschiedene Ausgaben. (Relation: linkseindeutig.)',
      },
      {
        begriff: 'surjektiv',
        definition: 'Für **alle** $y \\in B$ gibt es ein $x \\in A$ mit $f(x) = y$ — gleichbedeutend: $f(A) = B$, **jeder Zielwert wird getroffen**. (Relation: rechtstotal.)',
      },
      {
        begriff: 'bijektiv',
        definition: '**Injektiv und surjektiv** zugleich — jedes $y \\in B$ wird von **genau einem** $x \\in A$ getroffen. Genau dann existiert die Umkehrabbildung $f^{-1}$.',
      },
      {
        begriff: 'Komposition $g \\circ f$',
        definition: '$(g \\circ f)(x) = g(f(x))$ — **erst $f$, dann $g$** (von innen nach außen lesen). Nicht kommutativ: $g \\circ f \\ne f \\circ g$ im Allgemeinen.',
      },
      {
        begriff: 'Identität $\\mathrm{id}_A$',
        definition: '$\\mathrm{id}_A : A \\to A$, $x \\mapsto x$ — bildet jedes Element auf sich selbst ab. Neutral bei der Komposition.',
      },
      {
        begriff: 'Umkehrabbildung $f^{-1}$',
        definition: 'Existiert **genau dann, wenn $f$ bijektiv** ist; ordnet jedem $y \\in B$ das eindeutige $x$ mit $f(x) = y$ zu. Es gilt $f^{-1}(f(x)) = x$ und $f(f^{-1}(y)) = y$.',
      },
      {
        begriff: 'Gleichheit von Funktionen',
        definition: 'Zwei Funktionen sind gleich, wenn **Definitionsbereich, Zielbereich und alle Werte** übereinstimmen — dieselbe Formel auf verschiedenen Bereichen ergibt verschiedene Funktionen.',
      },
    ],
  },
  {
    titel: 'Zahlen, Betrag & Schranken',
    begriffe: [
      {
        begriff: 'Zahlenbereiche $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R}$',
        definition: '$\\mathbb{N}$ natürliche, $\\mathbb{Z}$ ganze, $\\mathbb{Q}$ rationale Zahlen (Brüche $\\tfrac{p}{q}$, $p \\in \\mathbb{Z}$, $q \\ne 0$), $\\mathbb{R}$ reelle Zahlen. $\\mathbb{N}^*$ bedeutet $\\mathbb{N}$ ohne $0$.',
      },
      {
        begriff: 'irrationale Zahl',
        definition: 'Eine reelle Zahl, die **nicht** als Bruch darstellbar ist — ihre Dezimaldarstellung ist unendlich und **nicht periodisch**. Beispiele: $\\sqrt{2}$, $e$, $\\pi$.',
      },
      {
        begriff: 'Betrag $|a|$',
        definition: '$|a| = a$ falls $a \\ge 0$, und $|a| = -a$ falls $a < 0$. Geometrisch: der **Abstand von $a$ zur Null**; $|x - c|$ ist der Abstand zwischen $x$ und $c$.',
      },
      {
        begriff: 'Dreiecksungleichung',
        definition: '$|a + b| \\le |a| + |b|$ für alle $a, b \\in \\mathbb{R}$.',
      },
      {
        begriff: 'Intervall',
        definition: 'Zusammenhängender Bereich reeller Zahlen. Eckige Klammer = Randpunkt gehört dazu ($[a,b]$), runde = gehört nicht dazu ($(a,b)$); bei $\\pm\\infty$ immer rund.',
      },
      {
        begriff: 'obere Schranke',
        definition: '$s$ ist obere Schranke von $M$, wenn $x \\le s$ für **alle** $x \\in M$. Existiert eine, heißt $M$ **nach oben beschränkt**.',
      },
      {
        begriff: 'untere Schranke',
        definition: '$s$ ist untere Schranke von $M$, wenn $x \\ge s$ für **alle** $x \\in M$. Existiert eine, heißt $M$ **nach unten beschränkt**.',
      },
      {
        begriff: 'beschränkt (Menge)',
        definition: 'Nach oben **und** nach unten beschränkt.',
      },
      {
        begriff: 'Supremum $\\sup M$',
        definition: 'Die **kleinste obere Schranke** von $M$. Muss nicht zu $M$ gehören.',
      },
      {
        begriff: 'Infimum $\\inf M$',
        definition: 'Die **größte untere Schranke** von $M$. Muss nicht zu $M$ gehören.',
      },
      {
        begriff: 'Maximum / Minimum',
        definition: 'Größtes bzw. kleinstes Element, das **selbst in $M$ liegt**. Existiert das Maximum, ist es zugleich das Supremum (analog Minimum/Infimum).',
        merke: 'sup/inf existieren oft, max/min nur wenn der Randwert angenommen wird',
      },
      {
        begriff: 'Vollständigkeit von $\\mathbb{R}$',
        definition: 'Jede nichtleere, nach oben beschränkte Teilmenge von $\\mathbb{R}$ besitzt ein Supremum **in $\\mathbb{R}$**. (Gleichwertig: jede Cauchy-Folge konvergiert in $\\mathbb{R}$.)',
      },
    ],
  },
  {
    titel: 'Folgen',
    begriffe: [
      {
        begriff: 'Folge',
        definition: 'Eine Abbildung $\\mathbb{N} \\to \\mathbb{R}$, $n \\mapsto x_n$ — eine durchnummerierte Liste reeller Zahlen. $x_n$ heißt **Glied**, $n$ heißt **Index**.',
      },
      {
        begriff: 'explizit / rekursiv',
        definition: '**Explizit**: Formel berechnet $x_n$ direkt aus $n$. **Rekursiv**: Startwert plus Vorschrift, wie $x_{n+1}$ aus $x_n$ entsteht.',
      },
      {
        begriff: 'monoton wachsend / fallend',
        definition: 'Wachsend: $x_{n+1} \\ge x_n$ für alle $n$; fallend: $x_{n+1} \\le x_n$. **Streng** monoton bei $>$ bzw. $<$.',
      },
      {
        begriff: 'beschränkt (Folge)',
        definition: 'Es gibt ein $M > 0$ mit $|x_n| \\le M$ für **alle** $n$.',
      },
      {
        begriff: 'konvergent (ε-N-Definition)',
        definition: '$(x_n)$ konvergiert gegen $x$, wenn es zu **jedem** $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt mit $|x_n - x| < \\varepsilon$ für **alle** $n \\ge N$.',
        merke: 'Ab irgendeinem Index liegen ALLE Glieder im ε-Schlauch um x',
      },
      {
        begriff: 'Grenzwert / Limes',
        definition: 'Die Zahl $x$ mit $\\lim_{n \\to \\infty} x_n = x$. Der Grenzwert einer konvergenten Folge ist **eindeutig**.',
      },
      {
        begriff: 'divergent',
        definition: 'Nicht konvergent. **Bestimmt divergent**: $x_n \\to \\infty$ oder $x_n \\to -\\infty$. **Unbestimmt divergent**: weder Grenzwert noch $\\pm\\infty$, z. B. $((-1)^n)$.',
      },
      {
        begriff: 'Nullfolge',
        definition: 'Eine Folge, die gegen $0$ konvergiert, z. B. $\\left(\\tfrac{1}{n}\\right)$.',
      },
      {
        begriff: 'Teilfolge',
        definition: 'Auswahl unendlich vieler Glieder in der ursprünglichen Reihenfolge, z. B. $(x_{2n})$. Konvergiert $(x_n)$ gegen $x$, dann auch jede Teilfolge.',
      },
      {
        begriff: 'Häufungspunkt',
        definition: 'Grenzwert einer konvergenten **Teilfolge**. $((-1)^n)$ hat die Häufungspunkte $1$ und $-1$.',
      },
      {
        begriff: 'Cauchy-Folge',
        definition: 'Zu jedem $\\varepsilon > 0$ gibt es ein $N$ mit $|x_n - x_m| < \\varepsilon$ für **alle** $n, m \\ge N$ — die Glieder rücken untereinander beliebig nah zusammen. In $\\mathbb{R}$: konvergent $\\Leftrightarrow$ Cauchy.',
      },
      {
        begriff: 'Monotoniekriterium',
        definition: 'Jede **monotone und beschränkte** Folge konvergiert — auch ohne den Grenzwert zu kennen.',
      },
      {
        begriff: 'Satz von Bolzano-Weierstraß',
        definition: 'Jede **beschränkte** Folge besitzt eine **konvergente Teilfolge**.',
      },
      {
        begriff: 'Sandwich-Theorem (Einschnürungssatz)',
        definition: 'Gilt $a_n \\le c_n \\le b_n$ (ab einem Index) und $\\lim a_n = \\lim b_n = L$, dann konvergiert auch $(c_n)$ gegen $L$.',
      },
      {
        begriff: 'konvergent ⇒ beschränkt',
        definition: 'Jede konvergente Folge ist beschränkt. Die **Umkehrung gilt nicht**: $((-1)^n)$ ist beschränkt, aber divergent.',
      },
      {
        begriff: 'Eulersche Zahl $e$',
        definition: '$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2{,}718$ — Standardgrenzwert vom unbestimmten Typ $1^\\infty$.',
      },
    ],
  },
  {
    titel: 'Reihen',
    begriffe: [
      {
        begriff: 'Reihe & Partialsumme',
        definition: 'Die $n$-te **Partialsumme** ist $s_n = \\sum_{k=1}^{n} a_k$. Die **Reihe** $\\sum a_k$ ist die Folge dieser Partialsummen; sie **konvergiert**, wenn $(s_n)$ konvergiert — ihr Wert ist der Grenzwert.',
      },
      {
        begriff: 'absolut konvergent',
        definition: '$\\sum |a_k|$ konvergiert. Absolute Konvergenz **impliziert** Konvergenz (nicht umgekehrt: alternierende harmonische Reihe).',
      },
      {
        begriff: 'notwendiges Kriterium',
        definition: 'Konvergiert $\\sum a_k$, dann ist $(a_k)$ eine **Nullfolge**. Ist $(a_k)$ **keine** Nullfolge, divergiert die Reihe. Die Umkehrung gilt nicht!',
        merke: 'notwendig, aber nicht hinreichend — Gegenbeispiel: harmonische Reihe',
      },
      {
        begriff: 'harmonische Reihe',
        definition: '$\\sum_{k=1}^{\\infty} \\frac{1}{k}$ **divergiert**, obwohl $\\tfrac{1}{k} \\to 0$ — das Standard-Gegenbeispiel.',
      },
      {
        begriff: 'geometrische Reihe',
        definition: '$\\sum_{k=0}^{\\infty} q^k$ konvergiert **genau dann, wenn $|q| < 1$**, mit Wert $\\frac{1}{1-q}$.',
      },
      {
        begriff: 'p-Reihe',
        definition: '$\\sum_{k=1}^{\\infty} \\frac{1}{k^p}$ konvergiert **genau dann, wenn $p > 1$** ($p = 1$: harmonische Reihe, divergent).',
      },
      {
        begriff: 'Majorantenkriterium',
        definition: 'Gilt $|a_k| \\le b_k$ (ab einem Index) und konvergiert $\\sum b_k$, dann konvergiert $\\sum a_k$ **absolut**. Die größere Reihe drückt die kleinere „von oben".',
      },
      {
        begriff: 'Minorantenkriterium',
        definition: 'Gilt $a_k \\ge b_k \\ge 0$ und divergiert $\\sum b_k$, dann divergiert auch $\\sum a_k$. Die kleinere divergente Reihe schiebt die größere „von unten" mit.',
      },
      {
        begriff: 'Leibnizkriterium',
        definition: 'Eine **alternierende** Reihe $\\sum (-1)^k a_k$ konvergiert, wenn $(a_k)$ eine **monoton fallende Nullfolge** ist.',
      },
      {
        begriff: 'Quotientenkriterium',
        definition: '$L = \\lim \\left|\\frac{a_{k+1}}{a_k}\\right|$: bei $L < 1$ absolut konvergent, bei $L > 1$ divergent, bei $L = 1$ **keine Aussage**. Stark bei Fakultäten und Potenzen.',
      },
      {
        begriff: 'Wurzelkriterium',
        definition: '$L = \\lim \\sqrt[k]{|a_k|}$: bei $L < 1$ absolut konvergent, bei $L > 1$ divergent, bei $L = 1$ **keine Aussage**. Stark bei $k$-ten Potenzen.',
      },
      {
        begriff: 'Teleskopsumme',
        definition: 'Glieder der Form $a_k = b_{k+1} - b_k$: beim Aufsummieren hebt sich alles Innere auf, es gilt $\\sum_{k=1}^{n} (b_{k+1} - b_k) = b_{n+1} - b_1$.',
      },
    ],
  },
  {
    titel: 'Funktionsgrenzwerte & Stetigkeit',
    begriffe: [
      {
        begriff: 'Grenzwert von $f$ bei $x_0$ (Folgenkriterium)',
        definition: '$\\lim_{x \\to x_0} f(x) = L$, wenn für **jede** Folge $x_n \\to x_0$ (mit $x_n \\ne x_0$) gilt: $f(x_n) \\to L$.',
      },
      {
        begriff: 'einseitige Grenzwerte',
        definition: 'Linksseitig ($x \\to x_0$, $x < x_0$) bzw. rechtsseitig ($x > x_0$). Der Grenzwert existiert **genau dann**, wenn beide existieren und übereinstimmen.',
      },
      {
        begriff: 'stetig in $x_0$',
        definition: '$\\lim_{x \\to x_0} f(x) = f(x_0)$ — der Grenzwert existiert **und** ist gleich dem Funktionswert. **Stetig auf $D$**: stetig in jedem Punkt von $D$.',
      },
      {
        begriff: 'ε-δ-Definition der Stetigkeit',
        definition: 'Zu jedem $\\varepsilon > 0$ gibt es ein $\\delta > 0$, sodass aus $|x - x_0| < \\delta$ folgt: $|f(x) - f(x_0)| < \\varepsilon$.',
      },
      {
        begriff: 'Zwischenwertsatz',
        definition: 'Ist $f$ stetig auf $[a,b]$, dann nimmt $f$ **jeden Wert zwischen $f(a)$ und $f(b)$** an.',
      },
      {
        begriff: 'Nullstellensatz (Bolzano)',
        definition: 'Ist $f$ stetig auf $[a,b]$ und haben $f(a)$ und $f(b)$ **verschiedene Vorzeichen** ($f(a) \\cdot f(b) < 0$), dann hat $f$ eine Nullstelle in $(a,b)$.',
      },
      {
        begriff: 'Extremwertsatz',
        definition: 'Eine stetige Funktion auf einem **abgeschlossenen, beschränkten** Intervall $[a,b]$ nimmt dort Maximum und Minimum an.',
      },
      {
        begriff: 'Polstelle & Asymptote',
        definition: '**Polstelle**: $|f(x)| \\to \\infty$ für $x \\to x_0$ (senkrechte Asymptote). **Waagerechte Asymptote**: $f(x) \\to c$ für $x \\to \\pm\\infty$.',
      },
      {
        begriff: 'stetige Fortsetzung',
        definition: 'Existiert $\\lim_{x \\to x_0} f(x) = L$, obwohl $f$ in $x_0$ nicht definiert ist, kann man $f$ dort durch den Wert $L$ **stetig fortsetzen**.',
      },
    ],
  },
  {
    titel: 'Differenzierbarkeit',
    begriffe: [
      {
        begriff: 'Differenzenquotient',
        definition: '$\\frac{f(x) - f(x_0)}{x - x_0}$ — die Steigung der **Sekante** durch $(x_0, f(x_0))$ und $(x, f(x))$.',
      },
      {
        begriff: 'Ableitung / differenzierbar',
        definition: '$f\'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$, falls dieser Grenzwert existiert — dann heißt $f$ in $x_0$ **differenzierbar**. Anschaulich: Steigung der **Tangente**, momentane Änderungsrate.',
      },
      {
        begriff: 'differenzierbar ⇒ stetig',
        definition: 'Jede in $x_0$ differenzierbare Funktion ist dort stetig. Die **Umkehrung gilt nicht**: $|x|$ ist stetig, aber in $0$ nicht differenzierbar (Knick).',
      },
      {
        begriff: 'Satz von Rolle',
        definition: '$f$ stetig auf $[a,b]$, differenzierbar auf $(a,b)$, $f(a) = f(b)$ $\\Rightarrow$ es gibt ein $\\xi \\in (a,b)$ mit $f\'(\\xi) = 0$.',
      },
      {
        begriff: 'Mittelwertsatz',
        definition: 'Es gibt ein $\\xi \\in (a,b)$ mit $f\'(\\xi) = \\frac{f(b) - f(a)}{b - a}$ — irgendwo ist die **Tangente parallel zur Sekante**.',
      },
      {
        begriff: 'Monotoniekriterium (Ableitung)',
        definition: '$f\' > 0$ auf einem Intervall $\\Rightarrow$ $f$ dort **streng monoton wachsend**; $f\' < 0$ $\\Rightarrow$ streng monoton fallend; $f\' = 0$ überall $\\Rightarrow$ konstant.',
      },
      {
        begriff: 'lokales Extremum',
        definition: '**Notwendig**: $f\'(x_0) = 0$ (innerer Punkt). **Hinreichend**: $f\'$ wechselt in $x_0$ das Vorzeichen ($+$ nach $-$: Maximum, $-$ nach $+$: Minimum).',
      },
    ],
  },
  {
    titel: 'Kombinatorik, Induktion & Notation',
    begriffe: [
      {
        begriff: 'Fakultät $n!$',
        definition: '$n! = 1 \\cdot 2 \\cdots n$ — Anzahl der Anordnungen von $n$ unterscheidbaren Objekten. Per Definition: $0! = 1$.',
      },
      {
        begriff: 'Binomialkoeffizient $\\binom{n}{k}$',
        definition: '$\\binom{n}{k} = \\frac{n!}{k! \\, (n-k)!}$ — die Anzahl der **$k$-elementigen Teilmengen** einer $n$-elementigen Menge („$n$ über $k$"). Symmetrie: $\\binom{n}{k} = \\binom{n}{n-k}$.',
      },
      {
        begriff: 'Permutation',
        definition: '**Alle** $n$ Objekte anordnen: $n!$ Möglichkeiten.',
      },
      {
        begriff: 'Variation',
        definition: '$k$ aus $n$ auswählen **und anordnen** (Reihenfolge zählt, ohne Wiederholung): $\\frac{n!}{(n-k)!}$ Möglichkeiten.',
      },
      {
        begriff: 'Kombination',
        definition: '$k$ aus $n$ **nur auswählen** (Reihenfolge egal, ohne Wiederholung): $\\binom{n}{k}$ Möglichkeiten.',
        merke: 'Reihenfolge zählt → Variation; egal → Kombination',
      },
      {
        begriff: 'Summenzeichen $\\sum$',
        definition: '$\\sum_{k=1}^{n} f(k) = f(1) + f(2) + \\cdots + f(n)$ — mit **Laufindex** $k$, **unterer Grenze** $1$ und **oberer Grenze** $n$.',
      },
      {
        begriff: 'Produktzeichen $\\prod$',
        definition: '$\\prod_{k=1}^{n} f(k) = f(1) \\cdot f(2) \\cdots f(n)$ — das Multiplikations-Gegenstück zum Summenzeichen.',
      },
      {
        begriff: 'leere Summe / leeres Produkt',
        definition: 'Eine Summe ohne Summanden hat den Wert $0$, ein Produkt ohne Faktoren den Wert $1$ (die neutralen Elemente).',
      },
      {
        begriff: 'vollständige Induktion',
        definition: 'Beweist $A(n)$ für alle $n \\ge n_0$ in drei Schritten: **IA** (Induktionsanfang: $A(n_0)$ nachrechnen), **IV** (Induktionsvoraussetzung: $A(n)$ für ein festes $n$ annehmen), **IS** (Induktionsschritt: aus $A(n)$ folgt $A(n+1)$).',
        merke: 'Dominokette: erster Stein fällt + jeder stößt den nächsten um',
      },
      {
        begriff: 'Landau-Notation $O(g)$',
        definition: '$f \\in O(g)$, wenn es $C > 0$ und $N$ gibt mit $|f(n)| \\le C \\cdot |g(n)|$ für alle $n \\ge N$ — $f$ wächst **höchstens so schnell** wie $g$ (bis auf einen konstanten Faktor).',
      },
    ],
  },
]
