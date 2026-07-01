import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'binomialkoeffizienten',
  titel: 'Binomialkoeffizienten & Binomischer Lehrsatz',
  inhalt:
    '**Worum geht es?**\n' +
    'Der Binomialkoeffizient $\\binom{n}{k}$ („$n$ über $k$") zählt, auf wie viele Arten man aus einer $n$-elementigen Menge eine $k$-elementige Teilmenge auswählen kann – **ohne** auf die Reihenfolge zu achten (eine Kombination ohne Wiederholung). Genau dieselben Zahlen tauchen beim Ausmultiplizieren von $(a+b)^n$ als Koeffizienten auf; das ist der **Binomische Lehrsatz**. Mit einem einzigen Werkzeug erschlägt man so Zähl-Aufgaben (Lotto, Skat, Gitterwege) und algebraische Entwicklungen.\n' +
    '\n' +
    '**Definition**\n' +
    'Für $n, k \\in \\mathbb{N}$ mit $0 \\leq k \\leq n$ ist\n' +
    '$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$\n' +
    'Dabei ist $n! = 1 \\cdot 2 \\cdots n$ die Fakultät und $0! = 1$. Bedeutung: $\\binom{n}{k}$ ist die Anzahl der $k$-elementigen Teilmengen einer $n$-elementigen Menge, also $C(n,k) = \\binom{n}{k}$. Herleitung aus der Variation: Jede $k$-Teilmenge lässt sich auf $k!$ Arten anordnen, daher $\\binom{n}{k} = \\frac{V(n,k)}{k!} = \\frac{n!/(n-k)!}{k!} = \\frac{n!}{k!\\,(n-k)!}$.\n' +
    '\n' +
    '**Wie rechnet man das praktisch? (kürzen!)**\n' +
    'Niemals erst alle Fakultäten ausrechnen – das sind riesige Zahlen. Stattdessen $n!$ gegen $(n-k)!$ kürzen: Im Zähler bleiben nur die obersten $k$ Faktoren stehen.\n' +
    '$\\binom{n}{k} = \\frac{n \\cdot (n-1) \\cdots (n-k+1)}{k!}$ — oben $k$ Faktoren ab $n$ abwärts, unten $k!$.\n' +
    'Beispiel: $\\binom{49}{6} = \\frac{49 \\cdot 48 \\cdot 47 \\cdot 46 \\cdot 45 \\cdot 44}{6!}$. Tipp: Wegen der Symmetrie immer das **kleinere** $k$ verwenden, etwa $\\binom{60}{58} = \\binom{60}{2}$.\n' +
    '\n' +
    '**Spezialwerte und Symmetrie**\n' +
    'Aus der Definition liest man sofort ab:\n' +
    '$\\binom{n}{0} = \\binom{n}{n} = 1$ (es gibt genau eine leere bzw. eine volle Auswahl),\n' +
    '$\\binom{n}{1} = \\binom{n}{n-1} = n$,\n' +
    'und die **Symmetrie** $\\binom{n}{k} = \\binom{n}{n-k}$. Anschaulich: $k$ Elemente auszuwählen ist dasselbe, wie die übrigen $n-k$ Elemente zum Weglassen auszuwählen.\n' +
    '\n' +
    '**Pascal-Regel & Pascalsches Dreieck**\n' +
    'Für $k+1 \\leq n$ gilt die **Additionsformel**\n' +
    '$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$\n' +
    'Jeder Eintrag ist also die Summe der beiden direkt darüber. Schreibt man die $\\binom{n}{k}$ zeilenweise (Zeile $n$, Position $k$) untereinander, entsteht das **Pascalsche Dreieck**; an den Rändern stehen wegen $\\binom{n}{0} = \\binom{n}{n} = 1$ überall Einsen:\n' +
    '| $n$ | Zeile |\n' +
    '|---|---|\n' +
    '| 0 | 1 |\n' +
    '| 1 | 1  1 |\n' +
    '| 2 | 1  2  1 |\n' +
    '| 3 | 1  3  3  1 |\n' +
    '| 4 | 1  4  6  4  1 |\n' +
    '| 5 | 1  5  10  10  5  1 |\n' +
    'Damit lassen sich kleine Binomialkoeffizienten bequem ohne Bruchrechnen ablesen.\n' +
    '\n' +
    '**Binomischer Lehrsatz**\n' +
    'Für alle $a, b \\in \\mathbb{R}$ und jedes $n \\in \\mathbb{N}$ gilt\n' +
    '$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^{k}$\n' +
    'Warum? Beim Ausmultiplizieren von $(a+b)^n = (a+b)(a+b)\\cdots(a+b)$ wählt man aus jeder der $n$ Klammern entweder $a$ oder $b$. Nimmt man aus genau $k$ Klammern das $b$ (und aus den übrigen $n-k$ das $a$), entsteht $a^{n-k}b^{k}$. Es gibt $\\binom{n}{k}$ Möglichkeiten, diese $k$ Klammern auszuwählen – das ist der Koeffizient. Der Term in der Summe ist symmetrisch nutzbar: $\\binom{n}{k} a^{n-k} b^{k} = \\binom{n}{k} a^{k} b^{n-k}$ ergibt dieselbe Summe, nur rückwärts durchlaufen.\n' +
    '\n' +
    '**Wichtige Folgerung: Zeilensumme**\n' +
    'Setzt man $a = b = 1$ in den Lehrsatz, folgt\n' +
    '$\\sum_{k=0}^{n} \\binom{n}{k} = 2^{n}$\n' +
    'Das ist zugleich die Anzahl **aller** Teilmengen einer $n$-elementigen Menge: $|\\mathcal{P}(M)| = 2^{n}$, denn man summiert über alle Teilmengengrößen $k = 0, \\dots, n$. Setzt man dagegen $a = 1, b = -1$, erhält man $\\sum_{k=0}^{n} (-1)^{k} \\binom{n}{k} = 0$ (für $n \\geq 1$): die alternierende Summe einer Pascal-Zeile verschwindet.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Reihenfolge verwechseln: $\\binom{n}{k}$ zählt **ungeordnete** Auswahlen; soll die Reihenfolge zählen, braucht man die Variation $V(n,k) = \\frac{n!}{(n-k)!} = k! \\binom{n}{k}$. Außerdem: $\\binom{n}{k}$ ist nur für $0 \\leq k \\leq n$ als Auswahl definiert (außerhalb $0$); $0! = 1$ nicht vergessen; und beim Lehrsatz die Exponenten richtig zuordnen ($a$ trägt $n-k$, $b$ trägt $k$).',
  beispiele: [
    {
      szenario: 'Binomialkoeffizienten berechnen (kürzen)',
      beispiele: [
        '**Aufgabe:** Berechne $\\binom{8}{3}$.\n**Lösung:** Oben $3$ Faktoren ab $8$ abwärts, unten $3!$: $\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{3!} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 8 \\cdot 7 = 56$.\n**Ergebnis:** $\\binom{8}{3} = 56$ (entspricht z. B. den $56$ Wagenfolgen bei $3$ Wagen 1. Klasse unter $8$ Positionen, Übungsblatt 6).',
        '**Aufgabe:** Berechne $\\binom{13}{5}$ (Gitterwege: $13$ Schritte, davon $5$ nach oben).\n**Lösung:** $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{5!} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120}$. Schrittweise kürzen: $\\frac{12}{120 \\cdot \\ldots}$ – einfacher: Zähler $= 154440$, geteilt durch $120$ ergibt $1287$.\n**Ergebnis:** $\\binom{13}{5} = 1287$ (Anzahl der Wege von $A$ nach $B$, Übungsblatt 6, Aufgabe 8).',
        '**Aufgabe:** Berechne $\\binom{60}{58}$ geschickt.\n**Lösung:** Symmetrie nutzen, kleineres $k$: $\\binom{60}{58} = \\binom{60}{60-58} = \\binom{60}{2} = \\frac{60 \\cdot 59}{2!} = \\frac{3540}{2} = 1770$.\n**Ergebnis:** $\\binom{60}{58} = \\binom{60}{2} = 1770$.',
      ],
    },
    {
      szenario: 'Identitäten beweisen (Symmetrie, Pascal)',
      beispiele: [
        '**Aufgabe:** Zeige $\\binom{n}{1} = \\binom{n}{n-1} = n$ für $n \\in \\mathbb{N}$, $n \\geq 1$ (Übungsblatt 3, Aufgabe 5a).\n**Lösung:** $\\binom{n}{1} = \\frac{n!}{1!\\,(n-1)!} = \\frac{n \\cdot (n-1)!}{(n-1)!} = n$. Ebenso $\\binom{n}{n-1} = \\frac{n!}{(n-1)!\\,(n-(n-1))!} = \\frac{n!}{(n-1)!\\,1!} = n$.\n**Ergebnis:** Beide Werte sind $n$; das bestätigt zugleich die Symmetrie für $k=1$.',
        '**Aufgabe:** Zeige die Symmetrie $\\binom{n}{k} = \\binom{n}{n-k}$ für $n, k \\in \\mathbb{N}$, $k \\leq n$ (Übungsblatt 3, Aufgabe 5b).\n**Lösung:** Setze in der Definition $k$ durch $n-k$: $\\binom{n}{n-k} = \\frac{n!}{(n-k)!\\,(n-(n-k))!} = \\frac{n!}{(n-k)!\\,k!}$. Das ist (bis auf die Reihenfolge der Faktoren im Nenner) genau $\\frac{n!}{k!\\,(n-k)!} = \\binom{n}{k}$.\n**Ergebnis:** $\\binom{n}{k} = \\binom{n}{n-k}$. $\\square$',
        '**Aufgabe:** Zeige die Pascal-Regel $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$ für $k+1 \\leq n$ (Übungsblatt 3, Aufgabe 5c).\n**Lösung:** $\\binom{n}{k} + \\binom{n}{k+1} = \\frac{n!}{k!\\,(n-k)!} + \\frac{n!}{(k+1)!\\,(n-k-1)!}$. Beide auf den Nenner $(k+1)!\\,(n-k)!$ bringen: ersten Bruch mit $\\frac{k+1}{k+1}$, zweiten mit $\\frac{n-k}{n-k}$ erweitern: $= \\frac{n!\\,(k+1)}{(k+1)!\\,(n-k)!} + \\frac{n!\\,(n-k)}{(k+1)!\\,(n-k)!} = \\frac{n!\\,(k+1 + n-k)}{(k+1)!\\,(n-k)!} = \\frac{n!\\,(n+1)}{(k+1)!\\,(n-k)!} = \\frac{(n+1)!}{(k+1)!\\,(n+1-(k+1))!}$.\n**Ergebnis:** Das ist $\\binom{n+1}{k+1}$. $\\square$',
      ],
    },
    {
      szenario: 'Binomischer Lehrsatz anwenden',
      beispiele: [
        '**Aufgabe:** Entwickle $(a+b)^4$ mit dem Binomischen Lehrsatz.\n**Lösung:** $(a+b)^4 = \\sum_{k=0}^{4} \\binom{4}{k} a^{4-k} b^{k}$. Die Koeffizienten sind Zeile $4$ des Pascalschen Dreiecks: $1, 4, 6, 4, 1$. Also $\\binom{4}{0}a^4 + \\binom{4}{1}a^3 b + \\binom{4}{2}a^2 b^2 + \\binom{4}{3}a b^3 + \\binom{4}{4}b^4$.\n**Ergebnis:** $(a+b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4a b^3 + b^4$.',
        '**Aufgabe:** Zeige $\\sum_{k=0}^{n} \\binom{n}{k} = 2^{n}$ mit dem Binomischen Lehrsatz (Übungsblatt 3, Aufgabe 2a).\n**Lösung:** Setze $a = 1$ und $b = 1$ in den Lehrsatz: $2^{n} = (1+1)^{n} = \\sum_{k=0}^{n} \\binom{n}{k} 1^{n-k} 1^{k} = \\sum_{k=0}^{n} \\binom{n}{k}$, da alle Potenzen von $1$ gleich $1$ sind.\n**Ergebnis:** $\\sum_{k=0}^{n} \\binom{n}{k} = 2^{n}$ – zugleich die Anzahl aller Teilmengen einer $n$-elementigen Menge. $\\square$',
        '**Aufgabe:** Zeige $\\sum_{k=0}^{n} (-1)^{k} \\binom{n}{k} = 0$ für $n \\geq 1$ (Übungsblatt 3, Aufgabe 2b).\n**Lösung:** Setze $a = 1$ und $b = -1$ in den Lehrsatz: $(1 + (-1))^{n} = \\sum_{k=0}^{n} \\binom{n}{k} 1^{n-k} (-1)^{k} = \\sum_{k=0}^{n} (-1)^{k} \\binom{n}{k}$. Die linke Seite ist $0^{n} = 0$ (für $n \\geq 1$).\n**Ergebnis:** $\\sum_{k=0}^{n} (-1)^{k} \\binom{n}{k} = 0$; die alternierende Pascal-Zeilensumme verschwindet. $\\square$',
      ],
    },
  ],
}
