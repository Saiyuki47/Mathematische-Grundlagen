import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'mengenoperationen',
  titel: 'Mengenoperationen',
  inhalt:
    '**Worum geht es?**\n' +
    'Aus gegebenen Mengen baut man mit festen Operationen neue Mengen: Man fasst sie zusammen, schneidet sie, zieht eine von der anderen ab oder bildet das Außenherum bezüglich einer Grundmenge. Das braucht man überall dort, wo Objekte nach Eigenschaften sortiert und kombiniert werden – etwa „alle Kunden, die A und B gekauft haben" (Schnitt) oder „alle bis auf die gesperrten" (Differenz). Aus zwei Mengen lassen sich außerdem geordnete Paare bilden (kartesisches Produkt), die Grundlage für Koordinaten, Tabellen und Relationen.\n' +
    '\n' +
    '**Vereinbarung**\n' +
    'Im Folgenden seien $A$ und $B$ stets Mengen. Bei der Mengenschreibweise $\\{x : \\dots\\}$ liest man den Doppelpunkt als „mit der Eigenschaft" – also „die Menge aller $x$, für die … gilt". $|A|$ bezeichnet die Anzahl der Elemente von $A$.\n' +
    '\n' +
    '**Vereinigung $A\\cup B$ (oder)**\n' +
    'Alle Elemente, die in $A$ oder in $B$ liegen (oder in beiden):\n' +
    '$A\\cup B = \\{x : x\\in A \\text{ oder } x\\in B\\}$\n' +
    'Das „oder" ist nicht ausschließend – ein Element, das in beiden Mengen liegt, gehört trotzdem dazu (und wird nur einmal gezählt). Im Venn-Diagramm sind beide Kreise vollständig gefüllt. Es gilt $A\\cup A = A$ und $A\\cup\\emptyset = A$.\n' +
    '\n' +
    '**Schnitt $A\\cap B$ (und)**\n' +
    'Genau die Elemente, die in $A$ und gleichzeitig in $B$ liegen:\n' +
    '$A\\cap B = \\{x : x\\in A \\text{ und } x\\in B\\}$\n' +
    'Im Venn-Diagramm ist nur die Überlappung der beiden Kreise gefüllt. Es gilt $A\\cap A = A$ und $A\\cap\\emptyset = \\emptyset$; ist $A\\subseteq B$, so ist $A\\cap B = A$.\n' +
    '\n' +
    '**Disjunkt**\n' +
    'Zwei Mengen heißen disjunkt, wenn sie kein gemeinsames Element haben, also $A\\cap B = \\emptyset$. Im Bild berühren sich die Kreise nicht.\n' +
    '\n' +
    '**Differenz $A\\setminus B$ (ohne)**\n' +
    'Alle Elemente von $A$, die nicht in $B$ liegen – man „zieht $B$ von $A$ ab":\n' +
    '$A\\setminus B = \\{x : x\\in A \\text{ und } x\\notin B\\}$\n' +
    'Hier kommt es auf die Reihenfolge an: $A\\setminus B$ und $B\\setminus A$ sind im Allgemeinen verschieden. Im Venn-Diagramm bleibt von $A$ nur der Teil außerhalb von $B$ gefüllt. Elemente von $B$, die gar nicht in $A$ sind, spielen keine Rolle.\n' +
    '\n' +
    '**Komplement $A^c$ bzw. $\\overline{A}$**\n' +
    'Das Komplement braucht eine feste Grundmenge (Universum) $X$ mit $A\\subseteq X$. Es enthält alles aus $X$, was nicht in $A$ liegt:\n' +
    '$\\overline{A} = A^c = X\\setminus A = \\{x\\in X : x\\notin A\\}$\n' +
    'Das Komplement ist also die Differenz $X\\setminus A$ mit dem Universum als Minuend. Im Venn-Diagramm ist alles außerhalb von $A$ innerhalb des Rahmens $X$ gefüllt. Ohne Angabe der Grundmenge ist das Komplement nicht definiert.\n' +
    '\n' +
    '**Kartesisches Produkt $A\\times B$ (geordnete Paare)**\n' +
    'Die Menge aller geordneten Paare mit erster Komponente aus $A$ und zweiter aus $B$:\n' +
    '$A\\times B = \\{(x,y) : x\\in A,\\ y\\in B\\}$\n' +
    'Geordnet heißt: $(x,y)$ und $(y,x)$ sind verschieden, solange $x\\neq y$. Für endliche Mengen gilt die Anzahlformel $|A\\times B| = |A|\\cdot|B|$. Ist eine der Mengen leer, so ist $A\\times B = \\emptyset$. Eine Teilmenge $R\\subseteq A\\times B$ nennt man eine (binäre) Relation.\n' +
    '\n' +
    '**Übersicht in Mengenschreibweise**\n' +
    '| Operation | Definition | Bedingung an $x$ |\n' +
    '|---|---|---|\n' +
    '| $A\\cup B$ | $\\{x : x\\in A \\text{ oder } x\\in B\\}$ | in mindestens einer |\n' +
    '| $A\\cap B$ | $\\{x : x\\in A \\text{ und } x\\in B\\}$ | in beiden |\n' +
    '| $A\\setminus B$ | $\\{x : x\\in A \\text{ und } x\\notin B\\}$ | in $A$, nicht in $B$ |\n' +
    '| $\\overline{A}$ | $\\{x\\in X : x\\notin A\\}$ | in $X$, nicht in $A$ |\n' +
    '| $A\\times B$ | $\\{(x,y) : x\\in A,\\ y\\in B\\}$ | Paare |\n' +
    '\n' +
    '**Wie rechnet man das konkret aus?**\n' +
    'Bei endlichen, aufgelisteten Mengen geht man Element für Element vor.\n' +
    '• Vereinigung: alle Elemente beider Mengen aufschreiben, Doppelte nur einmal.\n' +
    '• Schnitt: jedes Element von $A$ prüfen, ob es auch in $B$ steht – nur diese behalten.\n' +
    '• Differenz $A\\setminus B$: von $A$ ausgehen und jedes Element streichen, das in $B$ vorkommt.\n' +
    '• Komplement: erst die Grundmenge $X$ hinschreiben, dann alle Elemente von $A$ streichen.\n' +
    '• Produkt: systematisch jedes $x\\in A$ mit jedem $y\\in B$ zum Paar $(x,y)$ kombinieren (am besten der Reihe nach), damit kein Paar vergessen wird.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Bei $A\\setminus B$ die Reihenfolge vertauschen – $A\\setminus B \\neq B\\setminus A$.\n' +
    '• Beim Komplement die Grundmenge vergessen; ohne $X$ ist $\\overline{A}$ sinnlos.\n' +
    '• Beim kartesischen Produkt Paare auslassen oder $(x,y)$ mit $(y,x)$ verwechseln.\n' +
    '• In der Vereinigung gleiche Elemente doppelt zählen.',
  beispiele: [
    {
      szenario: 'Schnitt, Vereinigung, Differenz (Zahlenmengen)',
      beispiele: [
        '**Aufgabe:** Sei $X = \\{1,3,5,7\\}$ und $Z = \\{1,5\\}$. Bestimme $X\\setminus Z$ und $Z\\setminus X$.\n**Lösung:** Für $X\\setminus Z$ gehe von $X$ aus und streiche alles, was in $Z$ steht: $1$ und $5$ fallen weg, übrig bleiben $3$ und $7$. Für $Z\\setminus X$ gehe von $Z$ aus: beide Elemente $1,5$ stecken in $X$, also bleibt nichts.\n**Ergebnis:** $X\\setminus Z = \\{3,7\\}$ und $Z\\setminus X = \\emptyset$. Die Reihenfolge ist entscheidend.',
        '**Aufgabe:** Mit $X = \\{1,3,5,7\\}$, $Y = \\{5,7,8\\}$, $Z = \\{1,5\\}$ bestimme $X\\cap Y\\cap Z$ und $X\\cup Y\\cup Z$.\n**Lösung:** Schnitt: gesucht sind Elemente, die in allen drei Mengen liegen. $5$ steckt in $X$, $Y$ und $Z$; $7$ fehlt in $Z$, $1$ fehlt in $Y$. Vereinigung: alle vorkommenden Elemente einmal sammeln: $1,3,5,7$ (aus $X$ und $Z$) plus $8$ (aus $Y$).\n**Ergebnis:** $X\\cap Y\\cap Z = \\{5\\}$ und $X\\cup Y\\cup Z = \\{1,3,5,7,8\\}$.',
        '**Aufgabe:** Sei $A = \\{1,2,5\\}$ und $B = \\{1,5,12\\}$. Bestimme $A\\cap B$, $A\\cup B$ und $A\\setminus B$.\n**Lösung:** Schnitt: gemeinsam sind $1$ und $5$. Vereinigung: alle Elemente einmal, also $1,2,5,12$. Differenz $A\\setminus B$: von $A$ die in $B$ enthaltenen $1,5$ streichen, übrig bleibt $2$.\n**Ergebnis:** $A\\cap B = \\{1,5\\}$, $A\\cup B = \\{1,2,5,12\\}$, $A\\setminus B = \\{2\\}$.',
      ],
    },
    {
      szenario: 'Komplement bezüglich einer Grundmenge',
      beispiele: [
        '**Aufgabe:** In der Grundmenge $G = \\{1,2,3,4,5,6,7,8,9\\}$ sei $L = \\{1,2,4,7\\}$. Bestimme $\\overline{L}$.\n**Lösung:** Das Komplement enthält alle Elemente von $G$, die nicht in $L$ liegen. Aus $G$ streiche $1,2,4,7$.\n**Ergebnis:** $\\overline{L} = G\\setminus L = \\{3,5,6,8,9\\}$.',
        '**Aufgabe:** Sei $X = \\mathbb{N}$ und $A = \\{2n : n\\in\\mathbb{N}\\}$ (die geraden Zahlen). Bestimme $\\overline{A}$.\n**Lösung:** Das Komplement in $\\mathbb{N}$ besteht aus allen natürlichen Zahlen, die nicht gerade sind – das sind genau die ungeraden Zahlen $1,3,5,\\dots$, in der Form $2n+1$.\n**Ergebnis:** $\\overline{A} = \\{2n+1 : n\\in\\mathbb{N}\\}$.',
        '**Aufgabe:** In $G = \\{1,2,3,4,5,6,7,8,9\\}$ seien $L = \\{1,2,4,7\\}$ und $N = \\{4,5,9\\}$. Bestimme $\\overline{L}\\cap N$.\n**Lösung:** Erst das Komplement: $\\overline{L} = \\{3,5,6,8,9\\}$. Dann der Schnitt mit $N = \\{4,5,9\\}$: gemeinsame Elemente sind $5$ und $9$ (die $4$ liegt nicht in $\\overline{L}$).\n**Ergebnis:** $\\overline{L}\\cap N = \\{5,9\\}$.',
      ],
    },
    {
      szenario: 'Kartesisches Produkt und Anzahlformel',
      beispiele: [
        '**Aufgabe:** Sei $A = \\{2,5\\}$ und $B = \\{1,2,3\\}$. Bestimme $A\\times B$.\n**Lösung:** Kombiniere jedes Element von $A$ mit jedem von $B$ zum geordneten Paar (erst $x=2$ mit allen $y$, dann $x=5$): $(2,1),(2,2),(2,3)$, danach $(5,1),(5,2),(5,3)$.\n**Ergebnis:** $A\\times B = \\{(2,1),(2,2),(2,3),(5,1),(5,2),(5,3)\\}$, also $|A\\times B| = 2\\cdot 3 = 6$ Paare.',
        '**Aufgabe:** Sei $X = \\{1,3,5,7\\}$ und $Z = \\{1,5\\}$. Bestimme $X\\times Z$.\n**Lösung:** Jedes $x\\in X$ mit jedem $z\\in Z$ paaren: zu $1$ die Paare $(1,1),(1,5)$; zu $3$ die Paare $(3,1),(3,5)$; zu $5$ die Paare $(5,1),(5,5)$; zu $7$ die Paare $(7,1),(7,5)$.\n**Ergebnis:** $X\\times Z = \\{(1,1),(1,5),(3,1),(3,5),(5,1),(5,5),(7,1),(7,5)\\}$ mit $|X\\times Z| = 4\\cdot 2 = 8$.',
        '**Aufgabe:** Sei $A = \\{a,b\\}$ und $B = \\emptyset$. Wie viele Elemente hat $A\\times B$, und welche?\n**Lösung:** Für ein Paar bräuchte man eine zweite Komponente aus $B$ – aber $B$ ist leer, es gibt keine. Also lässt sich kein einziges Paar bilden. Die Anzahlformel bestätigt das: $|A\\times B| = |A|\\cdot|B| = 2\\cdot 0 = 0$.\n**Ergebnis:** $A\\times B = \\emptyset$.',
      ],
    },
  ],
}
