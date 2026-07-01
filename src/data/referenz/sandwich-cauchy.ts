import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'sandwich-cauchy',
  titel: 'Einschnürung (Sandwich) & Cauchy-Folgen',
  inhalt:
    '**Worum geht es?**\n' +
    'Manchmal ist eine Folge zu unübersichtlich, um ihren Grenzwert direkt mit den Grenzwertsätzen auszurechnen (z. B. wenn ein $\\sin$ oder $\\cos$ darin vorkommt). Hier helfen zwei Werkzeuge. Das **Sandwich-Theorem** klemmt eine schwierige Folge zwischen zwei einfache Folgen mit gleichem Grenzwert ein und erzwingt so denselben Grenzwert. Das **Cauchy-Kriterium** erlaubt es sogar, Konvergenz nachzuweisen, ohne den Grenzwert überhaupt zu kennen — man prüft nur, ob die Folgenglieder einander beliebig nahe kommen.\n' +
    '\n' +
    '**Sandwich-Theorem (Einschnürungssatz)**\n' +
    'Seien $(x_n)$ und $(y_n)$ konvergente Folgen mit gleichem Grenzwert $\\lim_{n\\to\\infty} x_n = \\lim_{n\\to\\infty} y_n = L$. Ist $(z_n)$ eine Folge mit $x_n \\le z_n \\le y_n$ für alle $n$ (es genügt: ab einem festen Index), dann konvergiert auch $(z_n)$, und es gilt $\\lim_{n\\to\\infty} z_n = L$.\n' +
    'Die untere Schranke $(x_n)$ und die obere Schranke $(y_n)$ sind das „Sandwich-Brot", $(z_n)$ ist der eingeklemmte „Belag". Streben beide Brote gegen denselben Wert, muss der Belag mit.\n' +
    '\n' +
    '**Verwandter Satz: beschränkt mal Nullfolge**\n' +
    'Ist $(x_n)$ beschränkt (also $|x_n| \\le M$ für ein festes $M$) und $(y_n)$ eine Nullfolge, so ist das Produkt $(x_n \\cdot y_n)$ wieder eine Nullfolge. Das ist oft die schnellste Variante, wenn ein beschränkter Faktor wie $\\sin n$ mit einer Nullfolge multipliziert wird.\n' +
    '\n' +
    '**Wie wendet man das Sandwich-Theorem an?**\n' +
    'Ziel ist meist, eine Nullfolge oder einen bekannten Grenzwert nachzuweisen.\n' +
    '1. Vermute den Grenzwert $L$ (oft $L=0$ oder $L=1$).\n' +
    '2. Schätze $z_n$ nach unten und oben ab: finde einfache $x_n \\le z_n \\le y_n$. Bei Nullfolgen geht man meist über den Betrag und schreibt $0 \\le |z_n| \\le y_n$.\n' +
    '3. Wähle $x_n$ und $y_n$ so, dass beide gegen dasselbe $L$ konvergieren (Standard-Nullfolgen wie $\\frac{1}{n}$, $\\frac{1}{n^k}$, $\\frac{1}{\\sqrt{n}}$ nutzen).\n' +
    '4. Schließe: $\\lim z_n = L$. Bei der Betrags-Variante folgt aus $\\lim |z_n| = 0$ auch $\\lim z_n = 0$.\n' +
    '\n' +
    '**Cauchy-Folge**\n' +
    'Eine Folge $(a_n)$ heißt **Cauchy-Folge**, wenn ihre Glieder ab einem gewissen Index beliebig dicht beieinander liegen. Formal:\n' +
    '$\\forall\\,\\varepsilon>0\\ \\exists\\,N\\in\\mathbb N\\ \\forall\\,m,n\\ge N:\\ |a_n-a_m|<\\varepsilon$\n' +
    'Der Unterschied zur Konvergenz-Definition: Hier wird kein Grenzwert $x$ erwähnt. Verglichen werden zwei Folgenglieder $a_n$ und $a_m$ miteinander, nicht ein Glied mit einem Grenzwert.\n' +
    '\n' +
    '**Cauchy-Kriterium (Vollständigkeit von R)**\n' +
    'In den reellen Zahlen gilt: Eine Folge $(a_n)$ konvergiert genau dann, wenn sie eine Cauchy-Folge ist. Diese Eigenschaft heißt **Vollständigkeit** von $\\mathbb R$ — in $\\mathbb R$ gibt es keine „Löcher", gegen die eine Cauchy-Folge streben könnte, ohne dort einen Grenzwert zu treffen.\n' +
    '• Praktischer Nutzen: Man kann Konvergenz beweisen, OHNE den Grenzwert zu kennen oder auszurechnen.\n' +
    '• Vorsicht: In $\\mathbb Q$ gilt das nicht. Die Folge der Dezimalnäherungen von $\\sqrt 2$ ist eine Cauchy-Folge rationaler Zahlen, hat aber in $\\mathbb Q$ keinen Grenzwert.\n' +
    '\n' +
    '**Wie zeigt man, dass eine Folge eine Cauchy-Folge ist?**\n' +
    '1. Gib $\\varepsilon>0$ beliebig vor.\n' +
    '2. Schätze den Abstand $|a_n-a_m|$ für $m,n\\ge N$ nach oben ab (Dreiecksungleichung, Betragsregeln).\n' +
    '3. Bestimme $N$ in Abhängigkeit von $\\varepsilon$ so groß, dass diese obere Schranke $<\\varepsilon$ wird.\n' +
    '4. Damit ist $(a_n)$ Cauchy-Folge, also nach dem Cauchy-Kriterium konvergent.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Beim Sandwich nur EINE Schranke angeben — man braucht eine untere UND eine obere mit demselben Grenzwert.\n' +
    '• Bei $0 \\le |z_n| \\le y_n$ vergessen, dass dann nur $\\lim z_n = 0$ folgt (für andere Grenzwerte taugt die Betrags-Variante nicht).\n' +
    '• Cauchy-Bedingung mit Konvergenz-Bedingung verwechseln: bei Cauchy stehen ZWEI laufende Indizes $m,n$, kein fester Grenzwert.',
  beispiele: [
    {
      szenario: 'Nullfolge per Sandwich (Betrags-Variante)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} (-1)^n \\frac{\\sin(n)\\cos(n)}{3n^3}$.\n**Lösung:** Wegen $\\sin(n),\\cos(n)\\in[-1,1]$ ist der Zähler betragsmäßig höchstens $1$. Also $0 \\le |z_n| = \\frac{|\\sin(n)\\cos(n)|}{3n^3} \\le \\frac{1}{3n^3} =: y_n$. Mit $\\lim \\frac{1}{n^3}=0$ folgt $\\lim y_n=0$, und die untere Schranke ist konstant $0$. Nach dem Einschnürungssatz ist $\\lim |z_n|=0$, also auch $\\lim z_n = 0$.\n**Ergebnis:** $\\lim_{n\\to\\infty} (-1)^n \\frac{\\sin(n)\\cos(n)}{3n^3} = 0$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{\\cos(n)}{n}$.\n**Lösung:** Es gilt $|\\cos(n)|\\le 1$, daher $0 \\le \\left|\\frac{\\cos(n)}{n}\\right| \\le \\frac{1}{n}$. Wegen $\\lim \\frac{1}{n}=0$ liefert der Einschnürungssatz $\\lim \\left|\\frac{\\cos(n)}{n}\\right|=0$ und somit $\\lim \\frac{\\cos(n)}{n}=0$.\n**Ergebnis:** $\\lim_{n\\to\\infty} \\frac{\\cos(n)}{n} = 0$.',
        '**Aufgabe:** Zeige, dass $(x_n)=\\left((-1)^n \\frac{1}{n}\\right)$ eine Nullfolge ist (als Produkt beschränkt mal Nullfolge).\n**Lösung:** $((-1)^n)$ ist beschränkt mit $|(-1)^n|=1\\le 1$, und $\\left(\\frac{1}{n}\\right)$ ist eine Nullfolge. Nach dem Satz „beschränkt mal Nullfolge ist Nullfolge" ist das Produkt eine Nullfolge. (Per Sandwich: $0\\le \\left|\\frac{(-1)^n}{n}\\right|=\\frac{1}{n}\\to 0$.)\n**Ergebnis:** $\\lim_{n\\to\\infty} (-1)^n \\frac{1}{n} = 0$.',
      ],
    },
    {
      szenario: 'Grenzwert einklemmen (zwischen zwei Schranken)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\left(1-\\frac{1}{n^2}\\right)^n$.\n**Lösung:** Mit der Bernoulli-Ungleichung gilt $\\left(1-\\frac{1}{n^2}\\right)^n \\ge 1 - n\\cdot\\frac{1}{n^2} = 1-\\frac{1}{n}$. Außerdem ist $\\left(1-\\frac{1}{n^2}\\right)^n \\le 1$, da der Faktor in $(0,1]$ liegt. Also $1-\\frac{1}{n} \\le x_n \\le 1$. Beide Schranken streben gegen $1$.\n**Lösung (Schluss):** Nach dem Sandwich-Theorem folgt $\\lim x_n = 1$.\n**Ergebnis:** $\\lim_{n\\to\\infty} \\left(1-\\frac{1}{n^2}\\right)^n = 1$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\left(\\sqrt{n+1}-\\sqrt{n}\\right)$.\n**Lösung:** Erweitern mit $\\sqrt{n+1}+\\sqrt{n}$: $\\sqrt{n+1}-\\sqrt{n} = \\frac{(n+1)-n}{\\sqrt{n+1}+\\sqrt{n}} = \\frac{1}{\\sqrt{n+1}+\\sqrt{n}}$. Damit gilt $0 \\le x_n \\le \\frac{1}{\\sqrt{n}}$, denn der Nenner ist mindestens $\\sqrt{n}$.\n**Lösung (Schluss):** Wegen $\\lim \\frac{1}{\\sqrt{n}}=0$ folgt mit dem Einschnürungssatz $\\lim x_n=0$.\n**Ergebnis:** $\\lim_{n\\to\\infty} \\left(\\sqrt{n+1}-\\sqrt{n}\\right) = 0$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{n+\\sin(n)}{n}$.\n**Lösung:** Wegen $-1\\le \\sin(n)\\le 1$ gilt $\\frac{n-1}{n} \\le \\frac{n+\\sin(n)}{n} \\le \\frac{n+1}{n}$, also $1-\\frac{1}{n} \\le z_n \\le 1+\\frac{1}{n}$. Beide Schranken konvergieren gegen $1$.\n**Lösung (Schluss):** Nach dem Sandwich-Theorem ist $\\lim z_n = 1$.\n**Ergebnis:** $\\lim_{n\\to\\infty} \\frac{n+\\sin(n)}{n} = 1$.',
      ],
    },
    {
      szenario: 'Cauchy-Folge nachweisen (ohne Grenzwert)',
      beispiele: [
        '**Aufgabe:** Zeige mit dem Cauchy-Kriterium, dass $(a_n)$ mit $a_n=\\frac{1}{n}$ konvergiert.\n**Lösung:** Sei $\\varepsilon>0$. Für $m,n\\ge N$ gilt $|a_n-a_m| = \\left|\\frac{1}{n}-\\frac{1}{m}\\right| \\le \\frac{1}{n}+\\frac{1}{m} \\le \\frac{2}{N}$. Wähle $N>\\frac{2}{\\varepsilon}$, dann ist $\\frac{2}{N}<\\varepsilon$, also $|a_n-a_m|<\\varepsilon$. Damit ist $(a_n)$ eine Cauchy-Folge.\n**Ergebnis:** Nach dem Cauchy-Kriterium ist $(a_n)$ konvergent (Grenzwert $0$, hier aber nicht benötigt).',
        '**Aufgabe:** Ist die konstante Folge $a_n=c$ eine Cauchy-Folge?\n**Lösung:** Sei $\\varepsilon>0$. Für alle $m,n$ gilt $|a_n-a_m| = |c-c| = 0 < \\varepsilon$. Die Bedingung ist also für jedes $N$ (z. B. $N=1$) erfüllt.\n**Ergebnis:** Ja, jede konstante Folge ist Cauchy-Folge und somit konvergent.',
        '**Aufgabe:** Begründe, warum $a_n=(-1)^n$ KEINE Cauchy-Folge ist.\n**Lösung:** Für aufeinanderfolgende Indizes gilt $|a_{n+1}-a_n| = |(-1)^{n+1}-(-1)^n| = 2$. Zu $\\varepsilon=1$ gibt es also kein $N$, ab dem alle Abstände $<1$ wären — es treten immer wieder Abstände von $2$ auf.\n**Ergebnis:** $(-1)^n$ ist keine Cauchy-Folge, daher (nach dem Cauchy-Kriterium) divergent.',
      ],
    },
  ],
}
