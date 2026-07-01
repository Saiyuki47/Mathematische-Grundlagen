import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'mengen-grundbegriffe',
  titel: 'Mengen – Grundbegriffe',
  inhalt:
    '**Worum geht es?**\n' +
    'Mengen sind die Grundbausteine der gesamten Mathematik – Zahlbereiche, Relationen und Funktionen werden alle aus Mengen aufgebaut. Wer sicher mit Mengen umgehen will, muss vor allem zwei Dinge sauber unterscheiden: ob ein Objekt ein **Element** einer Menge ist oder eine **Teilmenge**. Diese Karte erklärt die Grundbegriffe von Grund auf.\n' +
    '\n' +
    '**Was ist eine Menge?**\n' +
    'Nach Georg Cantor (1895) ist eine **Menge** eine „Zusammenfassung von bestimmten wohlunterschiedenen Objekten unserer Anschauung oder unseres Denkens zu einem Ganzen". Die einzelnen Objekte heißen die **Elemente** der Menge. Wichtig: Eine Menge ist ungeordnet und enthält jedes Element nur einmal. Deshalb gilt $\\{1,2,2\\} = \\{1,2\\}$ (Wiederholungen zählen nicht) und $\\{1,2\\} = \\{2,1\\}$ (Reihenfolge egal).\n' +
    '\n' +
    '**Element-Notation: ∈ und ∉**\n' +
    'Man schreibt $m \\in M$ (oder $M \\ni m$), falls $m$ ein Element der Menge $M$ ist, und $m \\notin M$ (oder $M \\not\\ni m$), falls $m$ kein Element von $M$ ist. Beispiel: für $M = \\{1,2,3,5\\}$ gilt $5 \\in M$ und $4 \\notin M$.\n' +
    '\n' +
    '**Zwei Schreibweisen für Mengen**\n' +
    'Eine Menge kann man auf zwei Arten angeben:\n' +
    '• **Aufzählende Form** – alle Elemente werden in geschweiften Klammern aufgelistet, z. B. $M = \\{1,2,3,5\\}$ oder $\\mathbb{N} = \\{0,1,2,\\dots\\}$.\n' +
    '• **Beschreibende Form** – man gibt eine Eigenschaft an, z. B. $\\{m \\in \\mathbb{N} : m \\text{ gerade}\\}$ („alle natürlichen Zahlen $m$, für die gilt: $m$ ist gerade"). Der Doppelpunkt liest sich als „mit der Eigenschaft".\n' +
    '\n' +
    '**Die leere Menge ∅**\n' +
    'Die **leere Menge** $\\emptyset$ (auch $\\{\\}$ geschrieben) ist die Menge, die kein Element enthält. Achtung: $\\emptyset$ ist nicht dasselbe wie $\\{\\emptyset\\}$ – Letzteres ist eine Menge mit genau einem Element, nämlich der leeren Menge.\n' +
    '\n' +
    '**Teilmenge ⊆ und echte Teilmenge ⊊**\n' +
    'Seien $A$ und $B$ Mengen. Man sagt $A \\subseteq B$ („$A$ ist Teilmenge von $B$", $B$ ist **Obermenge** von $A$), falls für alle $x \\in A$ auch $x \\in B$ gilt – jedes Element von $A$ liegt also auch in $B$. Gilt zusätzlich $A \\neq B$ (in $B$ liegt mindestens ein Element, das nicht in $A$ ist), so heißt $A$ **echte Teilmenge**: $A \\subsetneq B$. Für jede Menge $A$ gilt $\\emptyset \\subseteq A$ und $A \\subseteq A$. Beispiel: $\\mathbb{N}^* \\subsetneq \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}$.\n' +
    '\n' +
    '**Mengengleichheit**\n' +
    'Zwei Mengen sind genau dann gleich, wenn sie dieselben Elemente haben. Als Beweisprinzip:\n' +
    '$A = B \\Leftrightarrow A \\subseteq B \\wedge B \\subseteq A$\n' +
    'Um $A = B$ zu zeigen, weist man also beide Inklusionen nach: jedes Element von $A$ liegt in $B$ und umgekehrt.\n' +
    '\n' +
    '**Mächtigkeit |A|**\n' +
    'Die **Mächtigkeit** (Kardinalität) $|A|$ ist die Anzahl der Elemente von $A$. Eine Menge ist **endlich**, wenn $A = \\emptyset$ oder ihre Elemente bis zu einer Zahl $n$ durchnummeriert werden können; sonst ist sie unendlich ($|A| = \\infty$). Wiederholungen zählen nicht mit: $|\\{1,7,11\\}| = 3$, aber $|\\{1,2,2\\}| = 2$, $|\\emptyset| = 0$ und $|\\mathbb{N}| = \\infty$.\n' +
    '\n' +
    '**Schachtelung: Mengen als Elemente**\n' +
    'Mengen dürfen selbst Elemente von Mengen sein, z. B. $M = \\{\\{1\\},\\{2\\},\\{3\\}\\}$. Dann gilt $\\{1\\} \\in M$ (die Menge $\\{1\\}$ ist ein Element von $M$), aber $1 \\notin M$ (die Zahl $1$ selbst kommt in $M$ nicht vor). Hier lauert die häufigste Fehlerquelle: $\\{1\\} \\in L$ („$\\{1\\}$ ist ein Element von $L$") ist etwas völlig anderes als $\\{1\\} \\subseteq L$ („$1$ ist ein Element von $L$").\n' +
    '\n' +
    '**∈ oder ⊆? – so prüft man richtig**\n' +
    '| Frage | Symbol | Was muss gelten? |\n' +
    '|---|---|---|\n' +
    '| Ist $x$ ein Element von $A$? | $x \\in A$ | $x$ steht direkt in der Liste von $A$ |\n' +
    '| Ist $B$ eine Teilmenge von $A$? | $B \\subseteq A$ | jedes Element von $B$ steht in $A$ |\n' +
    'Faustregel: Bei $\\in$ vergleicht man **ein Objekt** mit den Listeneinträgen von $A$. Bei $\\subseteq$ muss links eine **Menge** stehen, und jedes ihrer Elemente muss in $A$ vorkommen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\in$ und $\\subseteq$ verwechseln (siehe Beispiele unten) – der mit Abstand häufigste Fehler.\n' +
    '• $\\emptyset$ und $\\{\\emptyset\\}$ gleichsetzen: $|\\emptyset| = 0$, aber $|\\{\\emptyset\\}| = 1$.\n' +
    '• Wiederholungen oder Reihenfolge mitzählen: $\\{1,2,2\\}$ und $\\{2,1\\}$ sind dieselbe Menge wie $\\{1,2\\}$.\n' +
    '• Vergessen, dass $\\emptyset \\subseteq A$ und $A \\subseteq A$ für jede Menge $A$ gelten.',
  beispiele: [
    {
      szenario: 'Element oder Teilmenge? ($\\in$ vs. $\\subseteq$)',
      beispiele: [
        '**Aufgabe:** Sei $M = \\{1,2,3\\}$. Ist $1 \\in M$ korrekt?\n**Lösung:** Gefragt ist, ob die Zahl $1$ direkt als Element in $M$ steht. Die Liste von $M$ ist $1,2,3$ – die $1$ kommt darin vor.\n**Ergebnis:** korrekt.',
        '**Aufgabe:** Sei $M = \\{1,2,3\\}$. Ist $\\{1\\} \\in M$ korrekt?\n**Lösung:** Hier wird gefragt, ob die Menge $\\{1\\}$ ein Element von $M$ ist. Die Elemente von $M$ sind die Zahlen $1,2,3$ – die Menge $\\{1\\}$ ist keines davon.\n**Ergebnis:** falsch (richtig wäre $\\{1\\} \\subseteq M$).',
        '**Aufgabe:** Sei $M = \\{1,2,3\\}$. Ist $\\{1\\} \\subseteq M$ korrekt?\n**Lösung:** Zu prüfen ist, ob jedes Element von $\\{1\\}$ auch in $M$ liegt. Das einzige Element ist $1$, und $1 \\in M$.\n**Ergebnis:** korrekt.',
      ],
    },
    {
      szenario: 'Geschachtelte Menge $L = \\{\\emptyset,\\{1\\},\\{2\\},\\{1,2\\}\\}$',
      beispiele: [
        '**Aufgabe:** Ist $2 \\in L$ korrekt?\n**Lösung:** Die Elemente von $L$ sind $\\emptyset$, $\\{1\\}$, $\\{2\\}$ und $\\{1,2\\}$ – allesamt Mengen. Die nackte Zahl $2$ ist keines dieser Elemente.\n**Ergebnis:** falsch.',
        '**Aufgabe:** Ist $\\{2\\} \\in L$ korrekt? Und ist $\\{2\\} \\subseteq L$ korrekt?\n**Lösung:** $\\{2\\} \\in L$: die Menge $\\{2\\}$ steht tatsächlich in der Element-Liste von $L$, also korrekt. $\\{2\\} \\subseteq L$: dafür müsste das Element $2$ von $\\{2\\}$ in $L$ liegen – aber $2 \\notin L$, also falsch.\n**Ergebnis:** $\\{2\\} \\in L$ korrekt, $\\{2\\} \\subseteq L$ falsch.',
        '**Aufgabe:** Ist $\\{\\{2\\}\\} \\subseteq L$ korrekt?\n**Lösung:** $\\{\\{2\\}\\}$ ist eine Menge mit dem einen Element $\\{2\\}$. Für $\\subseteq$ muss dieses Element in $L$ liegen. Wegen $\\{2\\} \\in L$ ist das erfüllt.\n**Ergebnis:** korrekt.',
      ],
    },
    {
      szenario: 'Mächtigkeit $|A|$ bestimmen',
      beispiele: [
        '**Aufgabe:** Bestimme $|\\{1,7,11\\}|$.\n**Lösung:** Alle drei Einträge sind verschieden, es wird nichts doppelt gezählt.\n**Ergebnis:** $|\\{1,7,11\\}| = 3$.',
        '**Aufgabe:** Bestimme $|\\{1,2,2\\}|$.\n**Lösung:** Wiederholungen zählen in einer Menge nicht: $\\{1,2,2\\} = \\{1,2\\}$, also bleiben zwei verschiedene Elemente.\n**Ergebnis:** $|\\{1,2,2\\}| = 2$.',
        '**Aufgabe:** Bestimme $|\\emptyset|$ und $|\\{\\emptyset\\}|$.\n**Lösung:** $\\emptyset$ enthält kein Element, also $|\\emptyset| = 0$. Dagegen ist $\\{\\emptyset\\}$ eine Menge mit genau einem Element (der leeren Menge).\n**Ergebnis:** $|\\emptyset| = 0$, aber $|\\{\\emptyset\\}| = 1$.',
      ],
    },
    {
      szenario: 'Mengengleichheit über beide Inklusionen',
      beispiele: [
        '**Aufgabe:** Zeige $\\{1,2,2\\} = \\{2,1\\}$.\n**Lösung:** $\\subseteq$: jedes Element links ($1$ und $2$) liegt rechts. $\\supseteq$: jedes Element rechts ($2$ und $1$) liegt links. Reihenfolge und Wiederholung spielen keine Rolle.\n**Ergebnis:** Beide Inklusionen gelten, also $\\{1,2,2\\} = \\{2,1\\}$.',
        '**Aufgabe:** Gilt $\\{1\\} = \\{1,2\\}$?\n**Lösung:** Prüfe $\\{1,2\\} \\subseteq \\{1\\}$: das Element $2$ liegt nicht in $\\{1\\}$. Eine der beiden Inklusionen scheitert.\n**Ergebnis:** Nein, $\\{1\\} \\neq \\{1,2\\}$ (es gilt nur $\\{1\\} \\subsetneq \\{1,2\\}$).',
        '**Aufgabe:** Begründe $\\emptyset \\subseteq A$ für jede Menge $A$.\n**Lösung:** Zu zeigen: für alle $x \\in \\emptyset$ gilt $x \\in A$. Da $\\emptyset$ kein Element besitzt, gibt es kein $x$, das die Bedingung verletzen könnte – die Aussage ist „leer" wahr.\n**Ergebnis:** $\\emptyset \\subseteq A$ gilt immer.',
      ],
    },
  ],
}
