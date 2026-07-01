import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'grenzwertsaetze-folgen',
  titel: 'Grenzwertsätze für Folgen',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Folge $(a_n)$ ordnet jeder natürlichen Zahl $n$ eine reelle Zahl zu, z. B. $a_n=\\frac{1}{n}$. Sie heißt **konvergent gegen** $a$ (geschrieben $\\lim_{n\\to\\infty}a_n=a$ oder $a_n\\to a$), wenn sich die Glieder für große $n$ beliebig nah an die Zahl $a$ herandrücken. Den direkten Konvergenz-Nachweis über die Definition will man nur ungern jedes Mal führen. Die **Grenzwertsätze** (Rechenregeln) erlauben es, den Grenzwert eines zusammengesetzten Ausdrucks aus den bekannten Grenzwerten der Bausteine auszurechnen — so wie man mit Zahlen rechnet.\n' +
    '\n' +
    '**Die Rechenregeln (Grenzwertsätze)**\n' +
    'Seien $(a_n)$ und $(b_n)$ konvergente Folgen mit $a_n\\to a$ und $b_n\\to b$, und sei $c\\in\\mathbb{R}$ fest. Dann gilt:\n' +
    '| Regel | Aussage |\n' +
    '|---|---|\n' +
    '| Summe/Differenz | $\\lim(a_n\\pm b_n)=a\\pm b$ |\n' +
    '| Produkt | $\\lim(a_n\\,b_n)=a\\,b$ |\n' +
    '| Vielfaches | $\\lim(c\\,a_n)=c\\,a$ |\n' +
    '| Quotient | $\\lim\\frac{a_n}{b_n}=\\frac{a}{b}$, falls $b\\ne 0$ |\n' +
    '| Betrag | $\\lim\\lvert a_n\\rvert=\\lvert a\\rvert$ |\n' +
    'Beim Quotienten genügt $b\\ne 0$: dann ist $b_n\\ne 0$ für alle hinreichend großen $n$, und ab dort ist der Bruch definiert.\n' +
    '\n' +
    '**Warum die Regeln gelten (kurz)**\n' +
    'Konvergenz heißt: der Abstand $|a_n-a|$ wird beliebig klein. Bei der Summe ist $|(a_n+b_n)-(a+b)|\\le|a_n-a|+|b_n-b|$ (Dreiecksungleichung) — zwei kleine Größen ergeben eine kleine Größe. Beim Produkt zerlegt man $a_nb_n-ab=a_n(b_n-b)+b(a_n-a)$; da konvergente Folgen **beschränkt** sind, bleibt der Faktor $a_n$ unter Kontrolle, und beide Summanden werden klein. Aus diesen beiden Bausteinen folgen Vielfaches (mit der konstanten Folge $c$) und Quotient.\n' +
    '\n' +
    '**Konvergent ⇒ beschränkt**\n' +
    '**Jede konvergente Folge ist beschränkt**, d. h. es gibt ein $M>0$ mit $|a_n|\\le M$ für alle $n$. Anschaulich: wenn fast alle Glieder nahe bei $a$ liegen, kann keines beliebig weit weglaufen. Die **Umkehrung gilt nicht**: $a_n=(-1)^n$ ist beschränkt (Werte $\\pm 1$), aber divergent. Beschränktheit ist also nötig, aber nicht hinreichend für Konvergenz.\n' +
    '\n' +
    '**Standard-Technik: durch die höchste $n$-Potenz kürzen**\n' +
    'Bei einem rationalen Ausdruck (Bruch aus Polynomen in $n$) streben Zähler und Nenner oft beide gegen $\\infty$ — der Quotientensatz ist dann nicht direkt anwendbar. Vorgehen:\n' +
    '1. Bestimme die höchste vorkommende Potenz von $n$ (im ganzen Bruch).\n' +
    '2. Klammere sie in Zähler und Nenner aus bzw. teile Zähler und Nenner durch sie.\n' +
    '3. Jeder Term der Form $\\frac{1}{n^k}$ (mit $k\\ge 1$) ist eine **Nullfolge**, geht also gegen $0$.\n' +
    '4. Jetzt sind die Grenzwerte endlich — wende die Rechenregeln an.\n' +
    'Nützliche Bausteine: $\\lim_{n\\to\\infty}\\frac{1}{n^k}=0$ für $k\\ge 1$, $\\lim_{n\\to\\infty}\\frac{1}{n!}=0$, $\\lim_{n\\to\\infty}\\sqrt[n]{a}=1$ für $a>0$, konstante Folge $c\\to c$.\n' +
    '\n' +
    '**Grenzwert-Vergleich (Monotonie des Grenzwertes)**\n' +
    'Sind $(a_n)$ und $(b_n)$ konvergent und gilt $a_n\\le b_n$ für alle hinreichend großen $n$, so folgt $\\lim a_n\\le\\lim b_n$. **Achtung:** aus echtem $a_n<b_n$ folgt im Allgemeinen **nur** $\\le$, nicht $<$ — z. B. ist $\\frac{1}{n}>0$ für alle $n$, aber der Grenzwert ist $0$, nicht echt größer.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Quotientensatz bei $b=0$ anwenden — verboten, hier muss man umformen.\n' +
    '• $\\frac{\\infty}{\\infty}$ oder $\\infty-\\infty$ blind als $1$ bzw. $0$ behandeln — erst durch die höchste Potenz kürzen.\n' +
    '• Aus $a_n<b_n$ auf $\\lim a_n<\\lim b_n$ schließen (nur $\\le$ gilt).\n' +
    '• Glauben, beschränkt sei dasselbe wie konvergent.',
  beispiele: [
    {
      szenario: 'Rechenregeln direkt anwenden',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(3+\\frac{5}{n}\\right)$.\n**Lösung:** Die konstante Folge $3$ konvergiert gegen $3$; $\\frac{5}{n}=5\\cdot\\frac{1}{n}\\to 5\\cdot 0=0$ (Vielfaches einer Nullfolge). Nach der Summenregel addieren sich die Grenzwerte.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(3+\\frac{5}{n}\\right)=3+0=3$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(\\frac{1}{n}\\cdot\\frac{2n+1}{n}\\right)$.\n**Lösung:** Zuerst der zweite Faktor: $\\frac{2n+1}{n}=2+\\frac{1}{n}\\to 2$. Der erste Faktor $\\frac{1}{n}\\to 0$. Nach der Produktregel ist der Grenzwert das Produkt der Grenzwerte.\n**Ergebnis:** $0\\cdot 2=0$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\frac{4-\\frac{1}{n}}{2+\\frac{3}{n}}$.\n**Lösung:** Zähler $4-\\frac{1}{n}\\to 4$, Nenner $2+\\frac{3}{n}\\to 2$. Der Grenzwert des Nenners ist $2\\ne 0$, also greift die Quotientenregel.\n**Ergebnis:** $\\frac{4}{2}=2$.',
      ],
    },
    {
      szenario: 'Rationale Ausdrücke (höchste Potenz kürzen)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\frac{3n+2}{5n-1}$.\n**Lösung:** Höchste Potenz ist $n$. Teile Zähler und Nenner durch $n$: $\\frac{3+\\frac{2}{n}}{5-\\frac{1}{n}}$. Wegen $\\frac{2}{n}\\to 0$ und $\\frac{1}{n}\\to 0$ strebt der Bruch gegen $\\frac{3}{5}$.\n**Ergebnis:** $\\frac{3}{5}$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\frac{2n^2-n}{4n^2+3n+1}$.\n**Lösung:** Höchste Potenz ist $n^2$. Teilen durch $n^2$: $\\frac{2-\\frac{1}{n}}{4+\\frac{3}{n}+\\frac{1}{n^2}}$. Alle Terme $\\frac{1}{n}$ und $\\frac{1}{n^2}$ sind Nullfolgen.\n**Ergebnis:** $\\frac{2}{4}=\\frac{1}{2}$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\frac{n+7}{n^2+1}$.\n**Lösung:** Höchste Potenz ist $n^2$. Teilen durch $n^2$: $\\frac{\\frac{1}{n}+\\frac{7}{n^2}}{1+\\frac{1}{n^2}}$. Der Zähler geht gegen $0+0=0$, der Nenner gegen $1$.\n**Ergebnis:** $\\frac{0}{1}=0$.',
      ],
    },
    {
      szenario: 'Beschränktheit und Grenzwert-Vergleich',
      beispiele: [
        '**Aufgabe:** Ist die Folge $a_n=\\frac{(-1)^n}{n}$ beschränkt, und konvergiert sie?\n**Lösung:** Es ist $|a_n|=\\frac{1}{n}\\le 1$ für alle $n\\ge 1$, also beschränkt. Da $\\frac{1}{n}\\to 0$, ist auch $a_n$ eine Nullfolge (Vorzeichen ändert den Abstand zu $0$ nicht).\n**Ergebnis:** beschränkt und konvergent mit $\\lim a_n=0$.',
        '**Aufgabe:** Zeige, dass $a_n=(-1)^n$ zwar beschränkt, aber divergent ist.\n**Lösung:** Die Werte sind nur $+1$ und $-1$, also $|a_n|=1\\le 1$: beschränkt. Die Folge springt aber dauerhaft zwischen $1$ und $-1$ und nähert sich keiner einzigen Zahl.\n**Ergebnis:** beschränkt, aber divergent — die Umkehrung von „konvergent ⇒ beschränkt“ gilt nicht.',
        '**Aufgabe:** Es gelte $0<a_n<\\frac{1}{n}$ für alle $n\\ge 1$. Was folgt für $\\lim a_n$?\n**Lösung:** Mit den Vergleichsfolgen $0\\le a_n\\le\\frac{1}{n}$: beide Schranken konvergieren gegen $0$, also wird $a_n$ eingeschlossen. Aus $a_n>0$ folgt **nicht** $\\lim a_n>0$, sondern nur $\\lim a_n\\ge 0$.\n**Ergebnis:** $\\lim_{n\\to\\infty}a_n=0$.',
      ],
    },
  ],
}
