import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'de-morgan-potenzmenge',
  titel: 'Rechengesetze, De Morgan & Potenzmenge',
  inhalt:
    '**Worum geht es?**\n' +
    'Mengen verknüpft man mit Vereinigung $\\cup$, Durchschnitt $\\cap$ und Komplement $\\overline{A}$. Damit man solche Ausdrücke umformen, vereinfachen und Klammern auflösen kann, braucht man feste Rechengesetze – ganz ähnlich wie das Rechnen mit Zahlen. Die wichtigsten sind die **Kommutativ-, Assoziativ- und Distributivgesetze** sowie die **de Morganschen Regeln**. Am Ende kommt die **Potenzmenge** $\\mathcal{P}(A)$ – die Menge aller Teilmengen von $A$.\n' +
    '\n' +
    '**Kurze Erinnerung an die Operationen**\n' +
    'Für eine Grundmenge $X$ und $A,B\\subseteq X$ gilt: $A\\cup B=\\{x:x\\in A \\text{ oder } x\\in B\\}$, $A\\cap B=\\{x:x\\in A \\text{ und } x\\in B\\}$ und das Komplement $\\overline{A}=X\\setminus A=\\{x\\in X:x\\notin A\\}$.\n' +
    '\n' +
    '**Kommutativ- und Assoziativgesetze**\n' +
    'Die Reihenfolge der Mengen ist egal (kommutativ), und bei gleicher Operation darf man die Klammern beliebig setzen (assoziativ):\n' +
    '$A\\cup B=B\\cup A$ und $A\\cap B=B\\cap A$\n' +
    '$(A\\cup B)\\cup C=A\\cup(B\\cup C)$\n' +
    '$(A\\cap B)\\cap C=A\\cap(B\\cap C)$\n' +
    '\n' +
    '**Distributivgesetze**\n' +
    'Sie regeln, wie sich $\\cup$ und $\\cap$ miteinander vertragen – man darf eine Operation in die Klammer hineinziehen (wie Ausmultiplizieren):\n' +
    '$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$\n' +
    '$A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)$\n' +
    'Achtung: Eine Klammer mit **gemischten** Operationen darf man nicht einfach weglassen, denn $A\\cup(B\\cap C)$ und $(A\\cup B)\\cap C$ sind im Allgemeinen verschieden.\n' +
    '\n' +
    '**De Morgansche Regeln**\n' +
    'Sie sagen, wie sich das Komplement auf $\\cup$ und $\\cap$ verteilt. Dabei wird aus „oder" ein „und" (und umgekehrt) – die Operation kippt:\n' +
    '$\\overline{A\\cup B}=\\overline{A}\\cap\\overline{B}$\n' +
    '$\\overline{A\\cap B}=\\overline{A}\\cup\\overline{B}$\n' +
    'In Worten: Das Komplement der Vereinigung ist der Durchschnitt der Komplemente; das Komplement des Durchschnitts ist die Vereinigung der Komplemente.\n' +
    '\n' +
    '**Warum gelten diese Regeln? (Elementmethode)**\n' +
    'Eine Mengengleichheit $L=R$ zeigt man, indem man nachweist, dass beide Seiten **dieselben Elemente** haben, also $x\\in L\\Leftrightarrow x\\in R$. Man nimmt ein beliebiges $x$ und übersetzt „$x$ liegt in der linken Menge" Schritt für Schritt in eine Aussage über „und/oder/nicht". Beispiel de Morgan: $x\\in\\overline{A\\cup B}$ heißt $x\\notin A\\cup B$, also $x$ ist **nicht** (in $A$ oder in $B$), das heißt $x\\notin A$ **und** $x\\notin B$, also $x\\in\\overline{A}$ und $x\\in\\overline{B}$, also $x\\in\\overline{A}\\cap\\overline{B}$. Da jeder Schritt eine Äquivalenz ist, sind beide Mengen gleich.\n' +
    '\n' +
    '**Potenzmenge**\n' +
    'Die **Potenzmenge** von $A$ ist die Menge aller Teilmengen von $A$: $\\mathcal{P}(A)=\\{M:M\\subseteq A\\}$. Ihre Elemente sind also selbst **Mengen**. Stets gilt $\\emptyset\\in\\mathcal{P}(A)$ und $A\\in\\mathcal{P}(A)$, denn $\\emptyset\\subseteq A$ und $A\\subseteq A$.\n' +
    '\n' +
    '**Größe der Potenzmenge**\n' +
    'Ist $A$ endlich mit $|A|=n$ Elementen, so hat die Potenzmenge $|\\mathcal{P}(A)|=2^{n}$ Elemente. Begründung: Beim Bilden einer Teilmenge entscheidet man für **jedes** der $n$ Elemente unabhängig „drin oder draußen" – das sind $2$ Möglichkeiten pro Element, also $2\\cdot 2\\cdots 2=2^{n}$ Teilmengen insgesamt.\n' +
    '\n' +
    '**So zählt man die Potenzmenge systematisch auf**\n' +
    'Nach Größe der Teilmengen sortieren: erst $\\emptyset$, dann alle einelementigen, dann alle zweielementigen, … bis $A$ selbst. So vergisst man keine und schreibt keine doppelt.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\in$ und $\\subseteq$ verwechseln: $\\{1\\}\\subseteq\\{1,2,3\\}$ ist richtig, $\\{1\\}\\in\\{1,2,3\\}$ ist falsch (das Element ist $1$, nicht $\\{1\\}$).\n' +
    '• Beim Komplement das Komplementieren vergessen: bei de Morgan kippt zusätzlich die Operation, $\\overline{A\\cup B}\\ne\\overline{A}\\cup\\overline{B}$.\n' +
    '• Bei der Potenzmenge $\\emptyset$ oder $A$ selbst vergessen – beide gehören immer dazu.',
  beispiele: [
    {
      szenario: 'Distributiv- & Assoziativgesetz anwenden',
      beispiele: [
        '**Aufgabe:** Berechne $A\\cap(B\\cup C)$ und $(A\\cap B)\\cup(A\\cap C)$ für $A=\\{1,2,3\\}$, $B=\\{2,4\\}$, $C=\\{3,5\\}$ und vergleiche.\n**Lösung:** Links: $B\\cup C=\\{2,3,4,5\\}$, also $A\\cap(B\\cup C)=\\{2,3\\}$. Rechts: $A\\cap B=\\{2\\}$ und $A\\cap C=\\{3\\}$, also $(A\\cap B)\\cup(A\\cap C)=\\{2,3\\}$.\n**Ergebnis:** Beide Seiten ergeben $\\{2,3\\}$ – das Distributivgesetz $A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$ bestätigt sich.',
        '**Aufgabe:** Zeige an $A=\\{1\\}$, $B=\\{2\\}$, $C=\\{1,2\\}$, dass man die Klammern bei gemischten Operationen nicht weglassen darf: vergleiche $A\\cup(B\\cap C)$ mit $(A\\cup B)\\cap C$.\n**Lösung:** $B\\cap C=\\{2\\}$, also $A\\cup(B\\cap C)=\\{1,2\\}$. Andererseits $A\\cup B=\\{1,2\\}$ und $(A\\cup B)\\cap C=\\{1,2\\}$. Hier sind sie zufällig gleich; nimm $C=\\{2\\}$: dann $A\\cup(B\\cap C)=\\{1,2\\}$, aber $(A\\cup B)\\cap C=\\{1,2\\}\\cap\\{2\\}=\\{2\\}$.\n**Ergebnis:** $\\{1,2\\}\\ne\\{2\\}$ – ohne Klammern ist der Ausdruck nicht eindeutig.',
        '**Aufgabe:** Vereinfache $(A\\cap B)\\cap C$ für $A=\\{1,2,3,4\\}$, $B=\\{2,3,5\\}$, $C=\\{3,4,5\\}$ mit dem Assoziativgesetz.\n**Lösung:** Wegen Assoziativität ist die Klammerung egal: $A\\cap B=\\{2,3\\}$, dann $\\cap C=\\{3\\}$. Probe über $A\\cap(B\\cap C)$: $B\\cap C=\\{3,5\\}$, dann $A\\cap\\{3,5\\}=\\{3\\}$.\n**Ergebnis:** $(A\\cap B)\\cap C=A\\cap(B\\cap C)=\\{3\\}$.',
      ],
    },
    {
      szenario: 'De Morgan konkret nachrechnen',
      beispiele: [
        '**Aufgabe:** Grundmenge $X=\\{1,2,3,4,5,6\\}$, $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. Prüfe $\\overline{A\\cup B}=\\overline{A}\\cap\\overline{B}$.\n**Lösung:** Links: $A\\cup B=\\{1,2,3,4\\}$, also $\\overline{A\\cup B}=\\{5,6\\}$. Rechts: $\\overline{A}=\\{4,5,6\\}$, $\\overline{B}=\\{1,2,5,6\\}$, also $\\overline{A}\\cap\\overline{B}=\\{5,6\\}$.\n**Ergebnis:** Beide Seiten sind $\\{5,6\\}$ – die erste de Morgansche Regel stimmt.',
        '**Aufgabe:** Mit $X=\\{1,2,3,4,5,6\\}$, $A=\\{1,2,3\\}$, $B=\\{3,4\\}$: Prüfe $\\overline{A\\cap B}=\\overline{A}\\cup\\overline{B}$.\n**Lösung:** Links: $A\\cap B=\\{3\\}$, also $\\overline{A\\cap B}=\\{1,2,4,5,6\\}$. Rechts: $\\overline{A}=\\{4,5,6\\}$, $\\overline{B}=\\{1,2,5,6\\}$, also $\\overline{A}\\cup\\overline{B}=\\{1,2,4,5,6\\}$.\n**Ergebnis:** Beide Seiten sind $\\{1,2,4,5,6\\}$ – die zweite de Morgansche Regel stimmt.',
        '**Aufgabe:** Vereinfache $\\overline{A}\\cup\\overline{B}$, wenn $A=\\{1,2,4,7\\}$ und $B=\\{4,5,9\\}$ in $X=\\{1,2,\\dots,9\\}$ gegeben sind.\n**Lösung:** Statt zwei Komplemente einzeln zu bilden, nutze de Morgan rückwärts: $\\overline{A}\\cup\\overline{B}=\\overline{A\\cap B}$. Es ist $A\\cap B=\\{4\\}$, also $\\overline{A\\cap B}=X\\setminus\\{4\\}=\\{1,2,3,5,6,7,8,9\\}$.\n**Ergebnis:** $\\overline{A}\\cup\\overline{B}=\\{1,2,3,5,6,7,8,9\\}$.',
      ],
    },
    {
      szenario: 'Potenzmenge bestimmen & abzählen',
      beispiele: [
        '**Aufgabe:** Sei $A=\\{1,2,3\\}$. Gib die Potenzmenge $\\mathcal{P}(A)$ durch Auflisten aller Elemente an.\n**Lösung:** Systematisch nach Größe: leere Menge, dann ein-, zwei-, dreielementige Teilmengen.\n**Ergebnis:** $\\mathcal{P}(A)=\\{\\emptyset,\\{1\\},\\{2\\},\\{3\\},\\{1,2\\},\\{1,3\\},\\{2,3\\},\\{1,2,3\\}\\}$, also $|\\mathcal{P}(A)|=2^{3}=8$ Elemente.',
        '**Aufgabe:** Bestimme $\\mathcal{P}(A)$ für $A=\\{2,5\\}$ und überprüfe die Anzahl.\n**Lösung:** $|A|=2$, also erwartet man $2^{2}=4$ Teilmengen: die leere Menge, die beiden einelementigen und $A$ selbst.\n**Ergebnis:** $\\mathcal{P}(A)=\\{\\emptyset,\\{2\\},\\{5\\},\\{2,5\\}\\}$, das sind $4$ Elemente.',
        '**Aufgabe:** Was ist $\\mathcal{P}(\\emptyset)$, und wie viele Elemente hat es?\n**Lösung:** Die einzige Teilmenge der leeren Menge ist die leere Menge selbst. Mit der Formel: $|\\emptyset|=0$, also $2^{0}=1$ Element.\n**Ergebnis:** $\\mathcal{P}(\\emptyset)=\\{\\emptyset\\}$ – Achtung: das ist **nicht** $\\emptyset$, sondern eine Menge mit einem Element.',
      ],
    },
    {
      szenario: 'Mengengleichheit prüfen (gilt sie immer?)',
      beispiele: [
        '**Aufgabe:** Gilt $A\\setminus B=A\\cap\\overline{B}$ für alle $A,B\\subseteq X$ immer?\n**Lösung:** Elementmethode: $x\\in A\\setminus B$ heißt $x\\in A$ und $x\\notin B$. Genau das bedeutet $x\\in A$ und $x\\in\\overline{B}$, also $x\\in A\\cap\\overline{B}$. Jeder Schritt ist eine Äquivalenz.\n**Ergebnis:** Ja, $A\\setminus B=A\\cap\\overline{B}$ gilt immer.',
        '**Aufgabe:** Gilt $A\\setminus(B\\cap C)=(A\\setminus B)\\cup(A\\setminus C)$ immer?\n**Lösung:** Das ist die de-Morgan-Variante für die Differenz. Test mit $A=\\{1,2\\}$, $B=\\{1\\}$, $C=\\{2\\}$: $B\\cap C=\\emptyset$, also links $A\\setminus\\emptyset=\\{1,2\\}$. Rechts: $A\\setminus B=\\{2\\}$, $A\\setminus C=\\{1\\}$, Vereinigung $\\{1,2\\}$.\n**Ergebnis:** Ja, die Gleichheit gilt immer (beide Seiten $\\{1,2\\}$).',
        '**Aufgabe:** Gilt $A\\setminus(B\\setminus C)=(A\\setminus B)\\setminus C$ immer? Falls nein, gib ein Gegenbeispiel.\n**Lösung:** Test mit $A=B=C=\\{1,2,3\\}$: links $B\\setminus C=\\emptyset$, also $A\\setminus\\emptyset=A=\\{1,2,3\\}$. Rechts: $A\\setminus B=\\emptyset$, also $\\emptyset\\setminus C=\\emptyset$.\n**Ergebnis:** Nein: $\\{1,2,3\\}\\ne\\emptyset$. Bei der Differenz darf man Klammern nicht verschieben.',
      ],
    },
  ],
}
