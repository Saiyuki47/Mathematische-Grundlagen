import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'landau-notation',
  titel: 'Asymptotik & O-Notation',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft interessiert nicht der genaue Wert einer Funktion, sondern nur, wie schnell sie wächst, wenn das Argument immer größer wird ($x\\to\\infty$ bzw. $n\\to\\infty$). Genau das beschreibt die O-Notation (gesprochen „groß O“). In der Informatik vergleicht man damit Laufzeiten von Algorithmen: Eine Funktion $f$ gibt z. B. die Anzahl der Rechenschritte bei Eingabegröße $n$ an, und $f\\in O(g)$ sagt „$f$ wächst höchstens so schnell wie $g$“. Kleine konstante Faktoren und Terme niedriger Ordnung werden dabei bewusst ignoriert.\n' +
    '\n' +
    '**Definition (groß O)**\n' +
    'Seien $f,g$ Funktionen (z. B. auf $\\mathbb{N}$ oder $\\mathbb{R}$). Man nennt $g$ eine asymptotisch obere Schranke für $f$ und schreibt $f\\in O(g)$, falls Konstanten $M>0$ und $K>0$ existieren mit\n' +
    '$\\lvert f(x)\\rvert \\le M\\,\\lvert g(x)\\rvert \\quad\\text{für alle } x\\ge K.$\n' +
    'In Worten: Ab einer Stelle $K$ liegt $\\lvert f\\rvert$ unter einem festen Vielfachen von $\\lvert g\\rvert$. Üblich ist auch die Schreibweise $f=O(g)$; gemeint ist dasselbe (das „$=$“ ist kein echtes Gleichheitszeichen, sondern „gehört zur Klasse“). Anschaulich sagt $f\\in O(g)$ nichts über Vorfaktoren oder kleine $x$ aus, sondern nur über das Wachstum für große $x$.\n' +
    '\n' +
    '**Verwandte Begriffe (klein o, asymptotisch gleich)**\n' +
    '$f\\in o(g)$ (asymptotisch vernachlässigbar) bedeutet, dass $f$ gegenüber $g$ für große $x$ verschwindet: $\\lim\\limits_{x\\to\\infty}\\frac{f(x)}{g(x)}=0$. Das ist stärker als $O$.\n' +
    'Man schreibt $f\\sim g$ (asymptotisch gleich), falls $\\lim\\limits_{x\\to\\infty}\\frac{f(x)}{g(x)}=1$, und $f\\approx g$ (asymptotisch ähnlich), falls dieser Grenzwert eine Zahl $a\\neq 0$ ist.\n' +
    '\n' +
    '**Bezug zu Grenzwerten**\n' +
    'Den Quotienten $\\frac{f}{g}$ zu betrachten ist das schnellste Werkzeug:\n' +
    '• Ist $\\lim\\limits_{x\\to\\infty}\\frac{f(x)}{g(x)}=0$, so gilt $f\\in o(g)$ und erst recht $f\\in O(g)$.\n' +
    '• Ist der Grenzwert eine endliche Zahl (auch $0$) oder allgemeiner $\\frac{f}{g}$ beschränkt, so gilt $f\\in O(g)$.\n' +
    '• Ist $\\lim\\limits_{x\\to\\infty}\\frac{f(x)}{g(x)}=\\infty$, so wächst $f$ echt schneller, also $f\\notin O(g)$ (aber $g\\in O(f)$).\n' +
    '\n' +
    '**Wachstums-Hierarchie**\n' +
    'Für $x\\to\\infty$ und Konstanten $a>1$ gilt (jede Funktion wächst echt langsamer als die nächste, Zeichen $\\ll$ heißt „ist $o$ von“):\n' +
    '$\\ln x \\ll x^a \\ll a^x \\ll x!.$\n' +
    'Also: Logarithmus langsamer als jede Potenz, jede Potenz langsamer als jede echte Exponentialfunktion, diese langsamer als die Fakultät. Zum Vergleich zweier Potenzen gilt $x^a\\ll x^b$ genau dann, wenn $a<b$.\n' +
    '\n' +
    '**Merktabelle der Größenordnungen**\n' +
    '| Klasse | Vertreter | wächst |\n' +
    '|---|---|---|\n' +
    '| konstant | $1$ | gar nicht |\n' +
    '| logarithmisch | $\\ln x$ | sehr langsam |\n' +
    '| linear | $x$ | gleichmäßig |\n' +
    '| quadratisch | $x^2$ | schnell |\n' +
    '| polynomiell | $x^k$ | je nach $k$ |\n' +
    '| exponentiell | $2^x$ | sehr schnell |\n' +
    '| Fakultät | $x!$ | extrem schnell |\n' +
    '\n' +
    '**Rechenregeln und Anschauung**\n' +
    'Nur der dominante (am schnellsten wachsende) Term zählt; alles Langsamere und alle konstanten Faktoren darf man weglassen.\n' +
    '• Konstante Faktoren fallen weg: $c\\cdot f\\in O(f)$ für jede Konstante $c$ (z. B. $1000\\,n^2\\in O(n^2)$).\n' +
    '• Summe: $O(f)+O(g)=O(\\max\\{f,g\\})$, also $n+n^2\\in O(n^2)$.\n' +
    '• Reflexiv: stets $f\\in O(f)$.\n' +
    '• Transitiv: aus $f\\in O(g)$ und $g\\in O(h)$ folgt $f\\in O(h)$.\n' +
    '• Produkt: aus $f_1\\in O(g_1)$ und $f_2\\in O(g_2)$ folgt $f_1 f_2\\in O(g_1 g_2)$.\n' +
    '\n' +
    '**Wie zeigt man eine O-Aussage?**\n' +
    'Weg 1 (Grenzwert): Bilde $\\frac{f(x)}{g(x)}$, klammere im Zähler und Nenner die höchste Potenz aus und kürze; ist der Grenzwert für $x\\to\\infty$ endlich (oder $0$), gilt $f\\in O(g)$.\n' +
    'Weg 2 (Konstanten): Gib konkret $M$ und $K$ an, so dass $\\lvert f(x)\\rvert\\le M\\,\\lvert g(x)\\rvert$ für alle $x\\ge K$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $O$ ist keine Gleichheit: aus $f\\in O(g)$ folgt nicht $g\\in O(f)$ (z. B. $n\\in O(n^2)$, aber $n^2\\notin O(n)$).\n' +
    '• Untere statt obere Schranke: $O$ liefert „höchstens so schnell“, nicht „genau so schnell“.\n' +
    '• Konstanten überbewerten: $5n$ und $n$ liegen in derselben Klasse $O(n)$.',
  beispiele: [
    {
      szenario: 'O-Aussagen prüfen (wahr/falsch)',
      beispiele: [
        '**Aufgabe:** Gilt $n\\in O(n^2)$ für $n\\to\\infty$?\n**Lösung:** Betrachte $\\frac{n}{n^2}=\\frac{1}{n}\\to 0$. Der Grenzwert ist endlich, also ist $g(n)=n^2$ eine obere Schranke. Mit $M=1$, $K=1$ gilt zudem $n\\le 1\\cdot n^2$ für alle $n\\ge 1$.\n**Ergebnis:** Wahr, $n\\in O(n^2)$.',
        '**Aufgabe:** Gilt $n+n^2\\in O(n^2)$ für $n\\to\\infty$?\n**Lösung:** Für $n\\ge 1$ ist $n\\le n^2$, also $n+n^2\\le n^2+n^2=2n^2$. Damit erfüllt $M=2$, $K=1$ die Bedingung $\\lvert n+n^2\\rvert\\le M\\,\\lvert n^2\\rvert$.\n**Ergebnis:** Wahr, $n+n^2\\in O(n^2)$ (der dominante Term ist $n^2$).',
        '**Aufgabe:** Gilt $1000\\,n^2\\in O(n^2)$ für $n\\to\\infty$?\n**Lösung:** Konstante Faktoren ändern die Klasse nicht. Mit $M=1000$ gilt $\\lvert 1000\\,n^2\\rvert\\le 1000\\,\\lvert n^2\\rvert$ für alle $n$ (also $K=1$).\n**Ergebnis:** Wahr, $1000\\,n^2\\in O(n^2)$.',
      ],
    },
    {
      szenario: 'Symmetrie und Transitivität',
      beispiele: [
        '**Aufgabe:** Stimmt es, dass $f\\in O(g)$ stets $g\\in O(f)$ nach sich zieht?\n**Lösung:** Gegenbeispiel $f(n)=n$, $g(n)=n^2$. Es gilt $n\\in O(n^2)$. Aber $\\frac{g}{f}=\\frac{n^2}{n}=n\\to\\infty$ ist unbeschränkt, also gibt es keine Konstante $M$ mit $n^2\\le M\\cdot n$ für große $n$.\n**Ergebnis:** Falsch, $O$ ist nicht symmetrisch ($n^2\\notin O(n)$).',
        '**Aufgabe:** Aus $f\\in O(g)$ und $g\\in O(h)$ — folgt $f\\in O(h)$?\n**Lösung:** Es gibt $M_1,K_1$ mit $\\lvert f\\rvert\\le M_1\\lvert g\\rvert$ ab $K_1$ und $M_2,K_2$ mit $\\lvert g\\rvert\\le M_2\\lvert h\\rvert$ ab $K_2$. Für $x\\ge\\max\\{K_1,K_2\\}$ folgt $\\lvert f\\rvert\\le M_1\\lvert g\\rvert\\le M_1 M_2\\lvert h\\rvert$. Wähle $M=M_1 M_2$.\n**Ergebnis:** Ja, $O$ ist transitiv: $f\\in O(h)$.',
        '**Aufgabe:** Liegt $3n^2+5n+7$ in $O(n^2)$?\n**Lösung:** Für $n\\ge 1$ gilt $5n\\le 5n^2$ und $7\\le 7n^2$, also $3n^2+5n+7\\le (3+5+7)n^2=15\\,n^2$. Mit $M=15$, $K=1$ ist die Definition erfüllt.\n**Ergebnis:** Ja, $3n^2+5n+7\\in O(n^2)$.',
      ],
    },
    {
      szenario: 'Wachstum über den Grenzwert vergleichen',
      beispiele: [
        '**Aufgabe:** Wächst $\\ln x$ langsamer als $x$, d. h. gilt $\\ln x\\in o(x)$?\n**Lösung:** Nach der Hierarchie $\\ln x\\ll x^a$ (hier $a=1$) ist $\\lim\\limits_{x\\to\\infty}\\frac{\\ln x}{x}=0$. Ein Grenzwert $0$ bedeutet genau „klein o“.\n**Ergebnis:** Ja, $\\ln x\\in o(x)$, also auch $\\ln x\\in O(x)$, aber $x\\notin O(\\ln x)$.',
        '**Aufgabe:** Vergleiche $2^x$ und $x^{10}$ für $x\\to\\infty$.\n**Lösung:** Nach der Hierarchie $x^a\\ll a^x$ schlägt jede Exponentialfunktion jede Potenz: $\\lim\\limits_{x\\to\\infty}\\frac{x^{10}}{2^x}=0$. Also ist die Potenz vernachlässigbar gegenüber $2^x$.\n**Ergebnis:** $x^{10}\\in o(2^x)$; umgekehrt ist $2^x\\notin O(x^{10})$.',
        '**Aufgabe:** Bestimme über den Quotienten, ob $f(x)=4x^3+2x$ in $O(x^3)$ liegt.\n**Lösung:** $\\frac{4x^3+2x}{x^3}=4+\\frac{2}{x^2}\\to 4$ für $x\\to\\infty$. Der Grenzwert ist die endliche Zahl $4$, der Quotient also beschränkt.\n**Ergebnis:** Ja, $f\\in O(x^3)$ (genauer sogar $f\\approx x^3$ wegen Grenzwert $\\neq 0$).',
      ],
    },
  ],
}
