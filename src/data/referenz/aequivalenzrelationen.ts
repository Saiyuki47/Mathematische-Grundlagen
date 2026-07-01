import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'aequivalenzrelationen',
  titel: 'Äquivalenzrelationen & Klassen',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft will man Dinge, die in einer bestimmten Hinsicht „gleichwertig" sind, zu einem Topf zusammenwerfen — z. B. alle ganzen Zahlen mit demselben Rest beim Teilen durch $3$. Eine **Äquivalenzrelation** ist genau die Art von Relation, die ein solches „Gleichwertig-Sein" beschreibt. Ihr großer Nutzen: Sie zerlegt eine Menge automatisch und überschneidungsfrei in Schubladen (Klassen). Das ist die Grundlage für Restklassen, Bruchzahlen und vieles in der Informatik.\n' +
    '\n' +
    '**Was ist eine Relation auf einer Menge?**\n' +
    'Sei $A$ eine Menge. Eine (binäre) **Relation** auf $A$ ist eine Teilmenge $R \\subseteq A \\times A$ — kurz: eine Sammlung von Paaren aus $A$. Statt $(a,b) \\in R$ schreibt man kurz $a \\sim b$ („$a$ ist verwandt mit $b$"). Beispiel: Auf $\\mathbb{Z}$ ist $m \\mid n$ („$m$ teilt $n$") eine Relation.\n' +
    '\n' +
    '**Die drei Eigenschaften**\n' +
    'Eine Relation $\\sim$ auf $A$ heißt **Äquivalenzrelation**, wenn sie alle drei der folgenden Eigenschaften hat:\n' +
    '| Eigenschaft | Bedingung | in Worten |\n' +
    '|---|---|---|\n' +
    '| reflexiv | $a \\sim a$ für alle $a \\in A$ | jedes Element ist zu sich selbst verwandt |\n' +
    '| symmetrisch | $a \\sim b \\Rightarrow b \\sim a$ | Verwandtschaft gilt in beide Richtungen |\n' +
    '| transitiv | $a \\sim b$ und $b \\sim c \\Rightarrow a \\sim c$ | Verwandtschaft ist „durchreichbar" |\n' +
    'Fehlt auch nur eine der drei, ist es **keine** Äquivalenzrelation.\n' +
    '\n' +
    '**Äquivalenzklasse & Repräsentant**\n' +
    'Ist $\\sim$ eine Äquivalenzrelation auf $A$ und $a \\in A$, so heißt\n' +
    '$[a] := \\{\\, x \\in A : x \\sim a \\,\\}$\n' +
    'die **Äquivalenzklasse** von $a$. Sie enthält alle Elemente, die zu $a$ verwandt sind. Jedes Element $b \\in [a]$ darf die Klasse benennen; man nennt es einen **Repräsentanten** (Vertreter) der Klasse. Wegen Reflexivität gilt immer $a \\in [a]$, jede Klasse ist also nicht leer.\n' +
    '\n' +
    '**Klassen bilden eine Partition**\n' +
    'Eine **Partition** von $A$ ist eine Zerlegung in nicht leere Teilmengen, die sich paarweise nicht überschneiden und zusammen ganz $A$ ergeben. Es gilt der zentrale Satz: Die Äquivalenzklassen einer Äquivalenzrelation bilden stets eine Partition von $A$. Genauer gilt für alle $a,b \\in A$:\n' +
    '• $a \\sim b \\;\\Leftrightarrow\\; [a] = [b]$ (verwandte Elemente haben dieselbe Klasse),\n' +
    '• $a \\not\\sim b \\;\\Leftrightarrow\\; [a] \\cap [b] = \\varnothing$ (sonst sind die Klassen disjunkt),\n' +
    '• $\\bigcup_{a \\in A} [a] = A$ (die Klassen überdecken ganz $A$).\n' +
    '\n' +
    '**Warum ergeben die Klassen eine Partition?**\n' +
    'Überdeckung: Jedes $a$ liegt wegen $a \\sim a$ in seiner eigenen Klasse $[a]$ — kein Element fällt durch. Disjunktheit: Hätten zwei Klassen $[a]$ und $[b]$ ein gemeinsames Element $x$, so gilt $x \\sim a$ und $x \\sim b$; mit Symmetrie und Transitivität folgt $a \\sim b$ und damit $[a] = [b]$. Zwei verschiedene Klassen können sich also nie nur teilweise überlappen — sie sind entweder gleich oder komplett getrennt.\n' +
    '\n' +
    '**Quotientenmenge**\n' +
    'Die Menge aller Äquivalenzklassen heißt **Quotientenmenge**:\n' +
    '$A/\\!\\sim \\;:=\\; \\{\\, [a] : a \\in A \\,\\}.$\n' +
    'Ihre Elemente sind selbst Mengen (die Klassen). Man fasst also „gleichwertige" Objekte zu je einem neuen Objekt zusammen.\n' +
    '\n' +
    '**Standardbeispiel: Kongruenz modulo m**\n' +
    'Sei $m \\in \\mathbb{N}$, $m \\geq 1$. Auf $\\mathbb{Z}$ definiert man: $a \\equiv b \\pmod{m}$ genau dann, wenn $m \\mid (a-b)$, d. h. $a$ und $b$ lassen beim Teilen durch $m$ **denselben Rest**. Das ist eine Äquivalenzrelation. Ihre Klassen sind die **Restklassen**; es gibt genau $m$ Stück, nämlich die zu den Resten $0,1,\\dots,m-1$. Die Quotientenmenge schreibt man $\\mathbb{Z}/m\\mathbb{Z}$.\n' +
    '\n' +
    '**Wie bestimmt man die Klassen? (Vorgehen)**\n' +
    '1. Prüfe, dass $\\sim$ wirklich reflexiv, symmetrisch und transitiv ist.\n' +
    '2. Wähle ein noch nicht eingeordnetes Element $a$ und sammle alle $x$ mit $x \\sim a$ — das ist $[a]$.\n' +
    '3. Wiederhole mit einem Element, das in keiner bisherigen Klasse liegt, bis ganz $A$ aufgeteilt ist.\n' +
    '4. Die so gefundenen (disjunkten) Klassen sind die Elemente von $A/\\!\\sim$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Reflexivität vergessen: Schon ein einziges $a$ mit $a \\not\\sim a$ macht $\\sim$ zu keiner Äquivalenzrelation. So ist „$<$" wegen $a < a$ falsch nicht reflexiv.\n' +
    '• Symmetrie und Antisymmetrie verwechseln: „$\\leq$" und „$\\mid$" auf $\\mathbb{N}$ sind transitiv und reflexiv, aber nicht symmetrisch ($2 \\mid 4$, aber $4 \\nmid 2$) — also Ordnungen, keine Äquivalenzrelationen.\n' +
    '• Glauben, Klassen könnten sich teilweise überlappen: Zwei Klassen sind immer entweder identisch oder elementfremd.',
  beispiele: [
    {
      szenario: 'Eigenschaften nachweisen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $\\sim$ auf $\\mathbb{Z}$ mit $a \\sim b :\\Leftrightarrow a \\equiv b \\pmod{3}$ (also $3 \\mid (a-b)$) eine Äquivalenzrelation ist.\n**Lösung:** Reflexiv: $a-a = 0 = 3\\cdot 0$, also $3 \\mid (a-a)$, somit $a \\sim a$. Symmetrisch: aus $3 \\mid (a-b)$ folgt $a-b = 3k$, dann $b-a = 3(-k)$, also $3 \\mid (b-a)$. Transitiv: aus $a-b = 3k$ und $b-c = 3\\ell$ folgt $a-c = (a-b)+(b-c) = 3(k+\\ell)$, also $3 \\mid (a-c)$.\n**Ergebnis:** Alle drei Eigenschaften gelten, $\\sim$ ist eine Äquivalenzrelation.',
        '**Aufgabe:** Ist „$\\leq$" auf $\\mathbb{R}$ (also $a \\sim b :\\Leftrightarrow a \\leq b$) eine Äquivalenzrelation?\n**Lösung:** Reflexiv: $a \\leq a$ stimmt. Transitiv: aus $a \\leq b$ und $b \\leq c$ folgt $a \\leq c$, stimmt. Symmetrisch: aus $a \\leq b$ müsste $b \\leq a$ folgen — das ist falsch, z. B. $2 \\leq 5$, aber nicht $5 \\leq 2$.\n**Ergebnis:** Nein, „$\\leq$" ist nicht symmetrisch, also keine Äquivalenzrelation (sondern eine Ordnung).',
        '**Aufgabe:** Auf $A = \\{1,2,3\\}$ sei $R = \\{(1,1),(2,2),(3,3),(1,2),(2,1)\\}$. Ist $R$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv: $(1,1),(2,2),(3,3) \\in R$ — ja. Symmetrisch: das einzige „gemischte" Paar $(1,2)$ hat sein Gegenstück $(2,1) \\in R$ — ja. Transitiv: aus $(1,2)$ und $(2,1)$ folgt $(1,1) \\in R$; aus $(2,1)$ und $(1,2)$ folgt $(2,2) \\in R$ — keine Lücke.\n**Ergebnis:** Ja, $R$ ist eine Äquivalenzrelation.',
      ],
    },
    {
      szenario: 'Klassen, Repräsentanten & Quotientenmenge',
      beispiele: [
        '**Aufgabe:** Bestimme für $\\equiv \\pmod{3}$ auf $\\mathbb{Z}$ die Klasse $[0]$ und gib zwei Repräsentanten an.\n**Lösung:** $[0] = \\{\\, x \\in \\mathbb{Z} : x \\equiv 0 \\pmod 3 \\,\\} = \\{\\, x : 3 \\mid x \\,\\}$, also alle durch $3$ teilbaren Zahlen: $\\dots,-6,-3,0,3,6,\\dots$. Jeder dieser Werte vertritt die Klasse.\n**Ergebnis:** $[0] = \\{\\, 3k : k \\in \\mathbb{Z} \\,\\}$; z. B. sind $0$ und $6$ Repräsentanten, und es gilt $[0] = [6]$.',
        '**Aufgabe:** Gib für $\\equiv \\pmod{3}$ alle Klassen und die Quotientenmenge an.\n**Lösung:** Beim Teilen durch $3$ gibt es nur die Reste $0,1,2$. Das liefert $[0] = \\{\\dots,-3,0,3,\\dots\\}$, $[1] = \\{\\dots,-2,1,4,\\dots\\}$, $[2] = \\{\\dots,-1,2,5,\\dots\\}$. Diese drei Klassen sind disjunkt und überdecken ganz $\\mathbb{Z}$.\n**Ergebnis:** $\\mathbb{Z}/\\!\\equiv \\;=\\; \\{[0],[1],[2]\\} = \\mathbb{Z}/3\\mathbb{Z}$, also genau $3$ Klassen.',
        '**Aufgabe:** Auf $A = \\{1,2,3,4\\}$ sei $a \\sim b$, falls $a$ und $b$ dieselbe Parität haben (beide gerade oder beide ungerade). Bestimme die Klassen und $A/\\!\\sim$.\n**Lösung:** Die ungeraden Elemente $1,3$ sind untereinander verwandt: $[1] = \\{1,3\\}$. Die geraden Elemente $2,4$ ebenso: $[2] = \\{2,4\\}$. Es gilt $[1] = [3]$ und $[2] = [4]$, die beiden Klassen sind disjunkt und ergeben zusammen $A$.\n**Ergebnis:** $A/\\!\\sim \\;=\\; \\{\\{1,3\\},\\{2,4\\}\\}$, also $2$ Klassen.',
      ],
    },
    {
      szenario: 'Partition erkennen & zuordnen',
      beispiele: [
        '**Aufgabe:** Bilden die Klassen aus $\\equiv \\pmod{3}$ eine Partition von $\\mathbb{Z}$? Begründe mit den drei Bedingungen.\n**Lösung:** Nicht leer: jede Klasse enthält ihren Repräsentanten, z. B. $0 \\in [0]$. Überdeckung: jede Zahl hat einen Rest in $\\{0,1,2\\}$, liegt also in einer der Klassen — $[0]\\cup[1]\\cup[2] = \\mathbb{Z}$. Disjunkt: verschiedene Reste schließen sich aus, $[i]\\cap[j] = \\varnothing$ für $i \\neq j$.\n**Ergebnis:** Ja, $\\{[0],[1],[2]\\}$ ist eine Partition von $\\mathbb{Z}$.',
        '**Aufgabe:** Ist $\\{\\{1,2\\},\\{2,3\\},\\{4\\}\\}$ eine Partition von $A = \\{1,2,3,4\\}$ (und damit von einer Äquivalenzrelation erzeugbar)?\n**Lösung:** Vereinigung: $\\{1,2\\}\\cup\\{2,3\\}\\cup\\{4\\} = \\{1,2,3,4\\} = A$ — Überdeckung passt. Disjunktheit: aber $\\{1,2\\}\\cap\\{2,3\\} = \\{2\\} \\neq \\varnothing$, die Teile überlappen sich.\n**Ergebnis:** Nein, wegen der Überlappung keine Partition; sie kann nicht von einer Äquivalenzrelation stammen.',
        '**Aufgabe:** Welche Restklasse modulo $4$ vertritt die Zahl $-5$, und welche Standard-Repräsentanten haben die Klassen?\n**Lösung:** Teilen mit Rest: $-5 = 4\\cdot(-2) + 3$, denn $-8 + 3 = -5$ und $0 \\le 3 < 4$. Also ist der Rest $3$, somit $-5 \\in [3]$. Modulo $4$ gibt es die Reste $0,1,2,3$.\n**Ergebnis:** $-5$ liegt in $[3]$; die vier Klassen sind $[0],[1],[2],[3]$, also $\\mathbb{Z}/4\\mathbb{Z}$ mit $4$ Elementen.',
      ],
    },
  ],
}
