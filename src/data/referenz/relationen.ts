import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'relationen',
  titel: 'Relationen & Eigenschaften',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Relation ist eine präzise Art zu sagen, *welche* Elemente in einer bestimmten Beziehung zueinander stehen — sie verallgemeinert jede Form von „Vergleich" oder „Zuordnung". Aussagen wie „$3$ ist kleiner als $5$", „$2$ teilt $6$" oder „$x$ ist gleich $y$" sind alle vom selben Typ: zwei Dinge, dazwischen ein Zusammenhang, der entweder gilt oder nicht. Statt für jeden Fall eine neue Schreibweise zu erfinden, fasst man solche Zusammenhänge einheitlich als Menge von Paaren auf. Das erlaubt es, ihre Struktur (z. B. „ist eine Ordnung", „ist eine Gleichheit") allgemein zu untersuchen.\n' +
    '\n' +
    '**Was ist eine (binäre) Relation?**\n' +
    'Sind $A$ und $B$ Mengen, so ist eine **binäre** (zweistellige) **Relation** zwischen $A$ und $B$ einfach eine Teilmenge des kartesischen Produkts: $R \\subseteq A \\times B$. Das kartesische Produkt $A \\times B$ ist die Menge *aller* geordneten Paare $(a,b)$ mit $a \\in A$ und $b \\in B$. Aus all diesen möglichen Paaren wählt $R$ genau jene aus, die „in Beziehung stehen".\n' +
    'Gilt $(a,b) \\in R$, so schreibt man auch $a \\, R \\, b$ und sagt „$a$ steht in Relation $R$ zu $b$". Beides bedeutet dasselbe.\n' +
    'Ist $A = B$, spricht man von einer **Relation auf A**, also $R \\subseteq A \\times A$. Nur für solche Relationen sind die folgenden vier Eigenschaften sinnvoll, denn dann darf man jedes Element mit jedem anderen — und mit sich selbst — vergleichen.\n' +
    '\n' +
    '**Beispiele für Relationen**\n' +
    'Die Kleiner-gleich-Relation $\\le$ auf $\\mathbb{R}$ ist $\\{(a,b) : a \\le b\\}$. Die Teilbarkeit auf $\\mathbb{Z}$ ist $\\{(m,n) : m \\mid n\\}$, wobei $m \\mid n$ heißt „$m$ teilt $n$", es also ein $k \\in \\mathbb{Z}$ gibt mit $n = m \\cdot k$. Die Gleichheit $=$ auf einer beliebigen Menge $A$ ist $\\{(a,a) : a \\in A\\}$.\n' +
    '\n' +
    '**Die vier Eigenschaften einer Relation auf A**\n' +
    '| Eigenschaft | Definition (für alle Elemente) |\n' +
    '|---|---|\n' +
    '| reflexiv | $a \\, R \\, a$ gilt für jedes $a \\in A$ |\n' +
    '| symmetrisch | aus $a \\, R \\, b$ folgt $b \\, R \\, a$ |\n' +
    '| antisymmetrisch | aus $a \\, R \\, b$ und $b \\, R \\, a$ folgt $a = b$ |\n' +
    '| transitiv | aus $a \\, R \\, b$ und $b \\, R \\, c$ folgt $a \\, R \\, c$ |\n' +
    '\n' +
    '**reflexiv** bedeutet: jedes Element steht zu sich selbst in Beziehung ($a \\, R \\, a$). Beispiel: bei $\\le$ gilt $a \\le a$ stets. Gegenbeispiel: bei $<$ gilt $a < a$ nie, also ist $<$ nicht reflexiv.\n' +
    '\n' +
    '**symmetrisch** bedeutet: die Beziehung ist gegenseitig — steht $a$ zu $b$, dann auch $b$ zu $a$. Beispiel: Gleichheit ($a = b \\Rightarrow b = a$). Gegenbeispiel: $\\le$ ist nicht symmetrisch, denn $2 \\le 3$, aber nicht $3 \\le 2$.\n' +
    '\n' +
    '**antisymmetrisch** bedeutet: gilt die Beziehung in *beide* Richtungen, müssen die Elemente gleich sein. Beispiel: $\\le$, denn aus $a \\le b$ und $b \\le a$ folgt $a = b$. Vorsicht: antisymmetrisch ist nicht das Gegenteil von symmetrisch — die Gleichheit ist beides zugleich.\n' +
    '\n' +
    '**transitiv** bedeutet: die Beziehung „springt weiter" — von $a$ nach $b$ und von $b$ nach $c$ ergibt $a$ nach $c$. Beispiel: $\\le$, denn aus $a \\le b$ und $b \\le c$ folgt $a \\le c$. Auch die Teilbarkeit ist transitiv.\n' +
    '\n' +
    '**Wie weist man eine Eigenschaft nach oder widerlegt sie?**\n' +
    'Eine Eigenschaft ist eine **Allaussage** („für alle …"). Daraus ergeben sich zwei Vorgehensweisen:\n' +
    '• **Nachweisen (gilt):** Nimm *beliebige* Elemente, die die Voraussetzung erfüllen (z. B. „seien $a,b$ beliebig mit $a \\, R \\, b$"), und leite allein daraus die Behauptung her. Es muss für *alle* Fälle gelten, nie an einem einzelnen Beispiel „bestätigt" werden.\n' +
    '• **Widerlegen (gilt nicht):** Es genügt **ein einziges Gegenbeispiel** — konkrete Elemente, bei denen die Voraussetzung erfüllt, die Folgerung aber verletzt ist. Etwa für „nicht symmetrisch": gib ein Paar $(a,b) \\in R$ mit $(b,a) \\notin R$ an.\n' +
    '\n' +
    '**Ordnungs- vs. Äquivalenzrelation (Überblick)**\n' +
    'Aus den vier Eigenschaften baut man zwei besonders wichtige Typen von Relationen auf $A$:\n' +
    '| Typ | benötigt | typisches Beispiel |\n' +
    '|---|---|---|\n' +
    '| Ordnungsrelation | reflexiv, antisymmetrisch, transitiv | $\\le$ auf $\\mathbb{R}$, $\\subseteq$ auf Mengen |\n' +
    '| Äquivalenzrelation | reflexiv, symmetrisch, transitiv | $=$, „gleicher Rest bei Division" |\n' +
    'Eine **Ordnungsrelation** modelliert ein „Vergleichen/Anordnen": Sie kann antisymmetrisch sein, weil bei $a \\le b$ und $b \\le a$ wirklich $a = b$ vorliegt. Eine **Äquivalenzrelation** modelliert ein „als-gleich-behandeln": Sie ist symmetrisch und teilt $A$ in disjunkte Klassen gleichwertiger Elemente auf. Beide teilen sich reflexiv und transitiv; der Unterschied liegt allein in symmetrisch (Äquivalenz) gegenüber antisymmetrisch (Ordnung). Die Details zu Äquivalenzrelationen und ihren Klassen stehen auf der eigenen Karte „Äquivalenzrelationen & Klassen".\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• „symmetrisch" mit „antisymmetrisch" verwechseln — es sind verschiedene, sich nicht ausschließende Eigenschaften (die Gleichheit erfüllt beide).\n' +
    '• Reflexivität an einem Beispiel „prüfen": sie muss für *jedes* $a \\in A$ gelten, nicht nur für eines.\n' +
    '• Beim Widerlegen ein „Beispiel, das passt" angeben statt eines Gegenbeispiels, das die Eigenschaft *verletzt*.',
  beispiele: [
    {
      szenario: 'Relation als Paarmenge aufschreiben',
      beispiele: [
        '**Aufgabe:** Schreibe die Relation $R$ auf $A = \\{1,2,3\\}$, definiert durch $a \\, R \\, b :\\Leftrightarrow a < b$, als Menge von Paaren.\n**Lösung:** Wir gehen alle Paare $(a,b)$ mit $a < b$ durch: $1<2$, $1<3$, $2<3$. Paare wie $(1,1)$ oder $(2,1)$ gehören nicht dazu.\n**Ergebnis:** $R = \\{(1,2),\\,(1,3),\\,(2,3)\\}$.',
        '**Aufgabe:** Gegeben $A = \\{1,2,3,4\\}$ und die Teilbarkeit $m \\mid n$. Bestimme alle Paare $(m,n) \\in R$ mit $m \\, R \\, n$.\n**Lösung:** $m \\mid n$ heißt, $n$ ist Vielfaches von $m$. Jede Zahl teilt sich selbst; zusätzlich teilt $1$ alles, $2$ teilt $4$.\n**Ergebnis:** $R = \\{(1,1),(2,2),(3,3),(4,4),(1,2),(1,3),(1,4),(2,4)\\}$.',
        '**Aufgabe:** Schreibe die Gleichheit $=$ auf $A = \\{a,b,c\\}$ als Paarmenge.\n**Lösung:** Genau die Paare, bei denen beide Einträge übereinstimmen, also $(a,a)$, $(b,b)$, $(c,c)$.\n**Ergebnis:** $R = \\{(a,a),\\,(b,b),\\,(c,c)\\}$ (die „Diagonale").',
      ],
    },
    {
      szenario: 'Eigenschaften nachweisen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $\\le$ auf $\\mathbb{R}$ reflexiv ist.\n**Lösung:** Sei $a \\in \\mathbb{R}$ beliebig. Für jede reelle Zahl gilt $a \\le a$ (jede Zahl ist kleiner-gleich sich selbst). Da $a$ beliebig war, gilt es für alle.\n**Ergebnis:** $\\le$ ist reflexiv.',
        '**Aufgabe:** Zeige, dass $\\le$ auf $\\mathbb{R}$ transitiv ist.\n**Lösung:** Seien $a,b,c \\in \\mathbb{R}$ beliebig mit $a \\le b$ und $b \\le c$. Aus den Rechenregeln folgt unmittelbar $a \\le c$. Die Voraussetzung war beliebig erfüllt.\n**Ergebnis:** $\\le$ ist transitiv.',
        '**Aufgabe:** Zeige, dass die Teilbarkeit $\\mid$ auf $\\mathbb{N}$ transitiv ist.\n**Lösung:** Seien $a \\mid b$ und $b \\mid c$, d. h. $b = a k$ und $c = b l$ mit $k,l \\in \\mathbb{N}$. Einsetzen: $c = (a k) l = a (k l)$. Wegen $k l \\in \\mathbb{N}$ ist $c$ Vielfaches von $a$.\n**Ergebnis:** $a \\mid c$, also ist $\\mid$ transitiv.',
      ],
    },
    {
      szenario: 'Eigenschaften widerlegen (Gegenbeispiel)',
      beispiele: [
        '**Aufgabe:** Ist $\\le$ auf $\\mathbb{R}$ symmetrisch?\n**Lösung:** Wir suchen ein Gegenbeispiel: ein Paar mit $a \\le b$, aber nicht $b \\le a$. Nimm $a=2$, $b=3$: $2 \\le 3$ gilt, aber $3 \\le 2$ gilt nicht.\n**Ergebnis:** Nein, $\\le$ ist nicht symmetrisch (Gegenbeispiel $(2,3)$).',
        '**Aufgabe:** Ist die Relation $<$ auf $\\mathbb{R}$ reflexiv?\n**Lösung:** Reflexiv hieße $a < a$ für alle $a$. Schon für $a = 0$ ist $0 < 0$ falsch. Ein einziges Gegenbeispiel reicht.\n**Ergebnis:** Nein, $<$ ist nicht reflexiv.',
        '**Aufgabe:** Ist die Teilbarkeit $\\mid$ auf $\\mathbb{N}$ symmetrisch?\n**Lösung:** Gegenbeispiel gesucht: $a \\mid b$, aber nicht $b \\mid a$. Nimm $a=2$, $b=6$: $2 \\mid 6$ gilt, aber $6 \\mid 2$ gilt nicht.\n**Ergebnis:** Nein, $\\mid$ ist nicht symmetrisch (Gegenbeispiel $2 \\mid 6$).',
      ],
    },
    {
      szenario: 'Relationstyp bestimmen',
      beispiele: [
        '**Aufgabe:** Ist $\\le$ auf $\\mathbb{R}$ eine Ordnungs- oder eine Äquivalenzrelation?\n**Lösung:** Prüfe die Eigenschaften: $\\le$ ist reflexiv ($a \\le a$), antisymmetrisch (aus $a \\le b$ und $b \\le a$ folgt $a=b$) und transitiv. Symmetrisch ist es nicht.\n**Ergebnis:** reflexiv + antisymmetrisch + transitiv $\\Rightarrow$ $\\le$ ist eine Ordnungsrelation.',
        '**Aufgabe:** Ist die Gleichheit $=$ auf einer Menge $A$ eine Äquivalenzrelation?\n**Lösung:** $a = a$ (reflexiv); aus $a=b$ folgt $b=a$ (symmetrisch); aus $a=b$ und $b=c$ folgt $a=c$ (transitiv). Alle drei sind erfüllt.\n**Ergebnis:** Ja, $=$ ist eine Äquivalenzrelation (sogar die „feinste").',
        '**Aufgabe:** Ist die Teilbarkeit $\\mid$ auf $\\mathbb{N}$ eine Ordnungsrelation?\n**Lösung:** Reflexiv: $a \\mid a$. Transitiv: gezeigt oben. Antisymmetrisch: aus $a \\mid b$ und $b \\mid a$ folgt in $\\mathbb{N}$ tatsächlich $a=b$. Symmetrisch ist sie nicht.\n**Ergebnis:** Ja, $\\mid$ ist auf $\\mathbb{N}$ eine Ordnungsrelation.',
      ],
    },
  ],
}
