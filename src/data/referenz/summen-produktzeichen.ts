import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'summen-produktzeichen',
  titel: 'Summen- & Produktzeichen',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft muss man viele gleichartige Zahlen addieren oder multiplizieren, etwa $1+2+3+\\dots+100$. Statt jeden Summanden hinzuschreiben, fasst man so eine Summe mit dem **Summenzeichen** $\\sum$ (großes griechisches Sigma) kurz zusammen, ein Produkt mit dem **Produktzeichen** $\\prod$ (großes Pi). Das spart Platz, macht die Struktur sichtbar und lässt sich exakt manipulieren.\n' +
    '\n' +
    '**Wie ist das Summenzeichen aufgebaut?**\n' +
    'Die Schreibweise $\\sum_{k=1}^{n} a_k$ bedeutet: addiere die Werte $a_k$, während der **Laufindex** $k$ alle ganzen Zahlen von der **unteren Grenze** $1$ bis zur **oberen Grenze** $n$ durchläuft.\n' +
    '$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\dots + a_n$\n' +
    '• Der **Laufindex** ($k$) ist nur ein Zählname; man darf ihn beliebig umbenennen: $\\sum_{k=1}^{n} a_k = \\sum_{i=1}^{n} a_i$.\n' +
    '• Die **untere Grenze** sagt, wo gezählt wird, die **obere Grenze**, wo Schluss ist.\n' +
    '• Der **Summand** $a_k$ ist der Rechenausdruck, in den man jeden Indexwert einsetzt.\n' +
    '\n' +
    '**Wie liest man eine konkrete Summe?**\n' +
    'Setze der Reihe nach jeden Indexwert in den Summanden ein und addiere. Beispiel mit $a_k=k^2$: $\\sum_{k=1}^{4} k^2 = 1^2+2^2+3^2+4^2 = 1+4+9+16 = 30$.\n' +
    '\n' +
    '**Das Produktzeichen**\n' +
    'Völlig analog, nur wird multipliziert statt addiert:\n' +
    '$\\prod_{k=1}^{n} a_k = a_1 \\cdot a_2 \\cdot a_3 \\cdots a_n$\n' +
    'Beispiel: $\\prod_{k=1}^{4} k = 1\\cdot 2\\cdot 3\\cdot 4 = 24$.\n' +
    '\n' +
    '**Rechenregeln (für Summen)**\n' +
    'Ein **konstanter Faktor** darf vor das Summenzeichen gezogen werden (Distributivgesetz):\n' +
    '$\\sum_{k=1}^{n} c\\,a_k = c\\sum_{k=1}^{n} a_k$\n' +
    'Eine Summe von Summen darf man **aufspalten**:\n' +
    '$\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$\n' +
    'Eine **Konstante** $c$, die nicht von $k$ abhängt, wird so oft addiert, wie es Summanden gibt:\n' +
    '$\\sum_{k=1}^{n} c = n\\cdot c$\n' +
    'Achtung: Über ein **Produkt** $a_k\\cdot b_k$ darf man die Summe NICHT verteilen — $\\sum a_k b_k \\neq \\left(\\sum a_k\\right)\\left(\\sum b_k\\right)$.\n' +
    '\n' +
    '**Indexverschiebung**\n' +
    'Man darf die Grenzen verschieben, wenn man den Summanden gegengleich anpasst — der Wert der Summe ändert sich dabei nicht. Ersetzt man $k$ durch $j=k-1$ (also $k=j+1$), so wird aus\n' +
    '$\\sum_{k=1}^{n} a_k = \\sum_{j=0}^{n-1} a_{j+1}$.\n' +
    'Merkregel: senkt man die Grenzen um $1$, muss der Index im Summanden um $1$ erhöht werden (und umgekehrt). Das ist nützlich, um zwei Summen auf gleiche Grenzen zu bringen.\n' +
    '\n' +
    '**Sonderfälle: leere Summe & leeres Produkt**\n' +
    'Ist die obere Grenze kleiner als die untere, gibt es keinen Summanden. Per Vereinbarung ist die **leere Summe** $0$ (das neutrale Element der Addition) und das **leere Produkt** $1$ (das neutrale Element der Multiplikation):\n' +
    '| Fall | Wert |\n' +
    '|---|---|\n' +
    '| leere Summe $\\sum_{k=1}^{0} a_k$ | $0$ |\n' +
    '| leeres Produkt $\\prod_{k=1}^{0} a_k$ | $1$ |\n' +
    'Mit dieser Festlegung bleiben die Rechenregeln und z. B. $0! = 1$ widerspruchsfrei.\n' +
    '\n' +
    '**Wichtige Formeln (auswendig)**\n' +
    'Gaußsche Summenformel (Summe der ersten $n$ Zahlen):\n' +
    '$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$\n' +
    'Summe der ersten $n$ Quadratzahlen:\n' +
    '$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$\n' +
    'Geometrische Summe (für $x\\neq 1$):\n' +
    '$\\sum_{k=0}^{n} x^k = \\frac{1-x^{\\,n+1}}{1-x}$\n' +
    '\n' +
    '**Fakultät als Produkt**\n' +
    'Die **Fakultät** $n!$ ist das Produkt aller ganzen Zahlen von $1$ bis $n$:\n' +
    '$n! = \\prod_{k=1}^{n} k = 1\\cdot 2\\cdot 3 \\cdots n$\n' +
    'Als leeres Produkt ist $0! = 1$. Sie zählt z. B. die Anordnungen von $n$ Objekten.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Den konstanten Faktor vergessen mitzunehmen oder einen $k$-abhängigen Term fälschlich herausziehen — nur Faktoren ohne $k$ dürfen vor das Zeichen.\n' +
    '• Die Anzahl der Summanden verzählen: von $k=m$ bis $k=n$ sind es $n-m+1$ Stück (nicht $n-m$).\n' +
    '• Bei der Indexverschiebung nur die Grenzen ändern, aber den Summanden nicht anpassen.',
  beispiele: [
    {
      szenario: 'Ausdruck mit dem Summenzeichen schreiben',
      beispiele: [
        '**Aufgabe:** Schreibe $1\\cdot 2 + 2\\cdot 3 + 3\\cdot 4 + 4\\cdot 5 + 5\\cdot 6$ mit dem Summenzeichen.\n**Lösung:** Jeder Summand hat die Form „Zahl mal nächste Zahl", also $k\\cdot(k+1)$. Der erste Summand entsteht bei $k=1$, der letzte bei $k=5$.\n**Ergebnis:** $\\sum_{k=1}^{5} k(k+1)$.',
        '**Aufgabe:** Schreibe $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}$ mit dem Summenzeichen.\n**Lösung:** Die Nenner sind Potenzen von $3$: $3^0,3^1,3^2,3^3$. Der Summand ist also $\\frac{1}{3^k}$, mit $k$ von $0$ bis $3$.\n**Ergebnis:** $\\sum_{k=0}^{3} \\frac{1}{3^k}$.',
        '**Aufgabe:** Schreibe $4+7+10+13+16+19+22$ mit dem Summenzeichen.\n**Lösung:** Die Werte steigen um je $3$. Beginnt man bei $k=0$ mit $4$, so ist der Summand $4+3k$; bei $k=6$ erhält man $4+18=22$.\n**Ergebnis:** $\\sum_{k=0}^{6} (4+3k)$.',
      ],
    },
    {
      szenario: 'Summe/Produkt ausrechnen',
      beispiele: [
        '**Aufgabe:** Berechne $\\sum_{k=1}^{4} (2k-1)$.\n**Lösung:** Einsetzen: $k=1\\!:1$, $k=2\\!:3$, $k=3\\!:5$, $k=4\\!:7$. Aufaddieren: $1+3+5+7$.\n**Ergebnis:** $16$.',
        '**Aufgabe:** Berechne $\\prod_{k=2}^{5} k$.\n**Lösung:** Index läuft von $2$ bis $5$, also multiplizieren: $2\\cdot 3\\cdot 4\\cdot 5$.\n**Ergebnis:** $120$.',
        '**Aufgabe:** Berechne die leere Summe $\\sum_{k=3}^{2} k^2$ und das leere Produkt $\\prod_{k=3}^{2} k$.\n**Lösung:** Die obere Grenze $2$ ist kleiner als die untere $3$ — es gibt keinen Faktor/Summanden. Per Vereinbarung ist die leere Summe $0$, das leere Produkt $1$.\n**Ergebnis:** $\\sum = 0$ und $\\prod = 1$.',
      ],
    },
    {
      szenario: 'Rechenregeln anwenden',
      beispiele: [
        '**Aufgabe:** Vereinfache $\\sum_{k=1}^{n} 3k$ und werte für $n=4$ aus.\n**Lösung:** Den konstanten Faktor herausziehen: $\\sum_{k=1}^{n} 3k = 3\\sum_{k=1}^{n} k = 3\\cdot\\frac{n(n+1)}{2}$. Für $n=4$: $3\\cdot\\frac{4\\cdot 5}{2}=3\\cdot 10$.\n**Ergebnis:** $\\sum_{k=1}^{4} 3k = 30$.',
        '**Aufgabe:** Schreibe $\\sum_{k=1}^{n} (k^2 + 2k)$ als zwei bekannte Summen.\n**Lösung:** Aufspalten der Summe: $\\sum_{k=1}^{n}(k^2+2k) = \\sum_{k=1}^{n} k^2 + 2\\sum_{k=1}^{n} k = \\frac{n(n+1)(2n+1)}{6} + 2\\cdot\\frac{n(n+1)}{2}$.\n**Ergebnis:** $\\frac{n(n+1)(2n+1)}{6} + n(n+1)$.',
        '**Aufgabe:** Berechne $\\sum_{k=1}^{50} 7$.\n**Lösung:** Der Summand $7$ hängt nicht von $k$ ab, wird also so oft addiert, wie es Indexwerte gibt: von $1$ bis $50$ sind das $50$ Stück. Regel: $\\sum_{k=1}^{n} c = n\\cdot c$, hier $50\\cdot 7$.\n**Ergebnis:** $350$.',
      ],
    },
    {
      szenario: 'Indexverschiebung',
      beispiele: [
        '**Aufgabe:** Schreibe $\\sum_{k=1}^{n} a_k$ so um, dass der Index bei $0$ beginnt.\n**Lösung:** Setze $j=k-1$, also $k=j+1$. Läuft $k$ von $1$ bis $n$, so läuft $j$ von $0$ bis $n-1$; im Summanden wird $a_k$ zu $a_{j+1}$.\n**Ergebnis:** $\\sum_{k=1}^{n} a_k = \\sum_{j=0}^{n-1} a_{j+1}$.',
        '**Aufgabe:** Schreibe $\\sum_{k=0}^{n} x^{k+1}$ mit einem Index, der bei $1$ startet.\n**Lösung:** Setze $j=k+1$, also $k=j-1$. Aus $k=0\\dots n$ wird $j=1\\dots n+1$; der Summand $x^{k+1}$ wird zu $x^{j}$.\n**Ergebnis:** $\\sum_{k=0}^{n} x^{k+1} = \\sum_{j=1}^{n+1} x^{j}$.',
        '**Aufgabe:** Prüfe die Verschiebung an $\\sum_{k=1}^{3} k = \\sum_{j=0}^{2} (j+1)$.\n**Lösung:** Linke Seite: $1+2+3=6$. Rechte Seite mit $a_{j+1}=j+1$: $(0+1)+(1+1)+(2+1)=1+2+3=6$.\n**Ergebnis:** Beide Seiten ergeben $6$ — die Verschiebung ist korrekt.',
      ],
    },
  ],
}
