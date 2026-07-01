import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'funktionsgrenzwerte',
  titel: 'Grenzwerte von Funktionen',
  inhalt:
    '**Worum geht es?**\n' +
    'Bei einer Funktion $f$ fragt man: Welchem Wert nähert sich $f(x)$, wenn $x$ sich einer Stelle $x_0$ nähert — ohne $x_0$ selbst einzusetzen? Diese „Zielhöhe" heißt Grenzwert $\\lim_{x\\to x_0} f(x)$. Das ist gerade dort nützlich, wo man $x_0$ nicht direkt einsetzen darf (etwa bei einer Lücke wie $\\frac{x^2-1}{x+1}$ an $x_0=-1$) oder wo man das Verhalten für sehr große $x$ verstehen will. Der Grenzwert ist außerdem die Grundlage von Stetigkeit und Ableitung.\n' +
    '\n' +
    '**Definition (über Folgen)**\n' +
    'Sei $D\\subseteq\\mathbb{R}$, $f:D\\to\\mathbb{R}$ und $x_0\\in\\mathbb{R}$ so, dass es eine Folge in $D\\setminus\\{x_0\\}$ gibt, die gegen $x_0$ konvergiert. Dann besitzt $f$ in $x_0$ den Grenzwert $L$, falls für **jede** Folge $(x_n)$ in $D\\setminus\\{x_0\\}$ mit $x_n\\to x_0$ gilt: $f(x_n)\\to L$.\n' +
    'Schreibweise: $\\lim_{x\\to x_0} f(x)=L$ oder $f(x)\\to L$ für $x\\to x_0$.\n' +
    'Wichtig: $x_0$ muss **nicht** in $D$ liegen — man nähert sich nur an, setzt aber nie $x=x_0$ ein.\n' +
    '\n' +
    '**Gleichwertig: das ε-δ-Kriterium**\n' +
    'Dieselbe Aussage ohne Folgen: $\\lim_{x\\to x_0} f(x)=L$ bedeutet, zu jedem $\\varepsilon>0$ gibt es ein $\\delta>0$, sodass für alle $x\\in D$ mit $0<\\lvert x-x_0\\rvert<\\delta$ gilt $\\lvert f(x)-L\\rvert<\\varepsilon$. In Worten: Erzwingt man $x$ nahe genug an $x_0$ (Abstand $<\\delta$), liegt $f(x)$ beliebig nahe an $L$ (Abstand $<\\varepsilon$). Folgen- und $\\varepsilon$-$\\delta$-Kriterium liefern denselben Grenzwertbegriff.\n' +
    '\n' +
    '**Einseitige Grenzwerte**\n' +
    'Manchmal nähert man sich nur von einer Seite. Lässt man oben nur Folgen mit $x_n<x_0$ zu, erhält man den **linksseitigen** Grenzwert $\\lim_{x\\to x_0^-} f(x)$; mit $x_n>x_0$ den **rechtsseitigen** $\\lim_{x\\to x_0^+} f(x)$. Es gilt der zentrale Zusammenhang:\n' +
    '$\\lim_{x\\to x_0} f(x)=L \\iff \\lim_{x\\to x_0^-} f(x)=L$ und $\\lim_{x\\to x_0^+} f(x)=L$.\n' +
    'Der beidseitige Grenzwert existiert also genau dann, wenn beide einseitigen existieren und **gleich** sind. Beispiel: $\\frac{1}{x}$ an $x_0=0$ hat $\\lim_{x\\to 0^+}=+\\infty$, $\\lim_{x\\to 0^-}=-\\infty$ — verschieden, also existiert $\\lim_{x\\to 0}\\frac{1}{x}$ nicht.\n' +
    '\n' +
    '**Grenzwertsätze (Rechenregeln)**\n' +
    'Existieren $\\lim_{x\\to x_0} f(x)=y$ und $\\lim_{x\\to x_0} g(x)=z$ (beide endlich), so darf man den Grenzwert in die Rechnung hineinziehen:\n' +
    '| Operation | Regel |\n' +
    '|---|---|\n' +
    '| Summe / Differenz | $\\lim (f\\pm g)=y\\pm z$ |\n' +
    '| Produkt | $\\lim (f\\cdot g)=y\\cdot z$ |\n' +
    '| Vielfaches | $\\lim (c\\cdot f)=c\\cdot y$ |\n' +
    '| Quotient | $\\lim \\frac{f}{g}=\\frac{y}{z}$, falls $z\\neq 0$ |\n' +
    'Zwei Sonderregeln für Unendlich: ist $\\lim_{x\\to x_0} f(x)=\\infty$, so $\\lim_{x\\to x_0}\\frac{1}{f(x)}=0$; ist $f$ beschränkt und $\\lim_{x\\to x_0} g(x)=0$, so $\\lim_{x\\to x_0}(f\\cdot g)=0$. (Beschränkt heißt: es gibt $M>0$ mit $\\lvert f(x)\\rvert\\le M$ für alle $x$.)\n' +
    '\n' +
    '**Grenzwert im Unendlichen**\n' +
    'Entsprechend definiert man $\\lim_{x\\to+\\infty} f(x)$ und $\\lim_{x\\to-\\infty} f(x)$ (man lässt $x_n\\to\\pm\\infty$ laufen). Das beschreibt das Fernverhalten. Konvergiert $f(x)$ dabei gegen eine Zahl $c$, so ist die Gerade $y=c$ eine **waagerechte Asymptote**.\n' +
    '\n' +
    '**Uneigentliche Grenzwerte & Polstellen**\n' +
    'Wächst $f(x)$ über alle Grenzen, schreibt man $\\lim f(x)=+\\infty$ bzw. $-\\infty$ (uneigentlicher Grenzwert; ein echter Grenzwert existiert dann nicht). Typisch bei einer **Polstelle** $x_0$ einer rationalen Funktion: dort ist der Nenner $0$, der Zähler aber nicht, und mindestens ein einseitiger Grenzwert ist $\\pm\\infty$. Die Gerade $x=x_0$ heißt dann **senkrechte Asymptote**.\n' +
    '\n' +
    '**Unbestimmte Ausdrücke & Standardtricks**\n' +
    'Setzt man naiv ein und erhält $\\frac{0}{0}$ oder $\\frac{\\infty}{\\infty}$, ist der Wert noch unbestimmt — man muss umformen:\n' +
    '• **Typ 0/0 bei rationalen Funktionen:** Zähler und Nenner faktorisieren und den gemeinsamen Linearfaktor **kürzen** (behebbare Lücke). Beispiel: $\\frac{x^2-1}{x+1}=\\frac{(x-1)(x+1)}{x+1}=x-1$.\n' +
    '• **Typ ∞/∞ bei x → ±∞:** mit der höchsten $x$-Potenz **erweitern/kürzen** (Zähler und Nenner durch die größte Potenz teilen). Es entscheiden die Grade: ist der Nennergrad größer, ist der Grenzwert $0$; bei gleichem Grad das Verhältnis der Leitkoeffizienten; ist der Zählergrad größer, divergiert es gegen $\\pm\\infty$.\n' +
    '• **Betrag:** in Fälle $x<x_0$ und $x>x_0$ auflösen und beide einseitigen Grenzwerte getrennt bestimmen.\n' +
    '\n' +
    '**Wie berechnet man einen Grenzwert? (Schritt für Schritt)**\n' +
    '1. **Einsetzen versuchen:** Ist $f$ an $x_0$ definiert und „brav" (z. B. Polynom), liefert $f(x_0)$ direkt den Grenzwert.\n' +
    '2. **Form prüfen:** Kommt $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, ein Betrag oder ein Pol heraus? Dann nicht abbrechen, sondern umformen.\n' +
    '3. **Passenden Trick anwenden:** kürzen (bei $\\frac{0}{0}$), durch höchste Potenz teilen (bei $x\\to\\pm\\infty$), Betrag in Fälle aufspalten.\n' +
    '4. **Bei Bedarf einseitig rechnen:** linken und rechten Grenzwert bestimmen und vergleichen; nur bei Gleichheit existiert der beidseitige.\n' +
    '5. **Grenzübergang ausführen:** Terme wie $\\frac{1}{x},\\frac{1}{x^2},\\dots$ gehen für $x\\to\\pm\\infty$ gegen $0$; danach Grenzwertsätze anwenden und Ergebnis ablesen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\frac{0}{0}$ oder $\\frac{\\infty}{\\infty}$ als fertiges Ergebnis hinschreiben — das ist **kein** Wert, sondern ein Auftrag zum Umformen.\n' +
    '• Den Quotientensatz mit $z=0$ anwenden (nur erlaubt, wenn der Nennergrenzwert $\\neq 0$ ist).\n' +
    '• Bei einem Betrag die einseitigen Grenzwerte vergessen und so eine nicht existente Polstelle/Sprungstelle übersehen.\n' +
    '• $\\lim_{x\\to x_0} f(x)$ mit dem Funktionswert $f(x_0)$ verwechseln — beide können verschieden sein (dann ist $f$ in $x_0$ unstetig).',
  beispiele: [
    {
      szenario: 'Behebbare Lücke (0/0 kürzen)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{x\\to -1}\\frac{x^2-1}{x+1}$.\n**Lösung:** Einsetzen ergibt $\\frac{0}{0}$ (unbestimmt). Zähler faktorisieren: $x^2-1=(x-1)(x+1)$, dann kürzen: $\\frac{(x-1)(x+1)}{x+1}=x-1$ für $x\\neq -1$. Nun $x\\to -1$ einsetzen: $-1-1=-2$.\n**Ergebnis:** $\\lim_{x\\to -1}\\frac{x^2-1}{x+1}=-2$.',
        '**Aufgabe:** Bestimme $\\lim_{x\\to 3}\\frac{x^2-9}{x-3}$.\n**Lösung:** Einsetzen liefert $\\frac{0}{0}$. Mit $x^2-9=(x-3)(x+3)$ kürzen: $\\frac{(x-3)(x+3)}{x-3}=x+3$ für $x\\neq 3$. Grenzübergang: $3+3=6$.\n**Ergebnis:** $\\lim_{x\\to 3}\\frac{x^2-9}{x-3}=6$.',
        '**Aufgabe:** Untersuche $h(x)=\\frac{x^2-1}{x+1}$ für $x\\neq -1$, $h(-1)=-100$ an der Stelle $x_0=-1$ (links-, rechtsseitig, beidseitig). Ist $h$ stetig in $-1$?\n**Lösung:** Für $x\\neq -1$ ist $h(x)=x-1$. Damit $\\lim_{x\\to -1^-} h(x)=-2$ und $\\lim_{x\\to -1^+} h(x)=-2$; beide gleich, also $\\lim_{x\\to -1} h(x)=-2$. Aber $h(-1)=-100\\neq -2$.\n**Ergebnis:** $\\lim_{x\\to -1} h(x)=-2$; wegen $h(-1)\\neq\\lim_{x\\to -1} h(x)$ ist $h$ in $-1$ **nicht** stetig.',
      ],
    },
    {
      szenario: 'Grenzwert im Unendlichen (∞/∞)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{x\\to\\infty}\\frac{x-4x^3+2}{x+4x^4+7x^2}$.\n**Lösung:** Höchste Potenz ist $x^4$ (Nenner). Zähler durch $x^3$, Nenner durch $x^4$ ausklammern: $\\frac{x^3}{x^4}\\cdot\\frac{\\frac{1}{x^2}-4+\\frac{2}{x^3}}{\\frac{1}{x^3}+4+\\frac{7}{x^2}}=\\frac{1}{x}\\cdot\\frac{\\frac{1}{x^2}-4+\\frac{2}{x^3}}{\\frac{1}{x^3}+4+\\frac{7}{x^2}}$. Für $x\\to\\infty$ gehen alle $\\frac{1}{x^k}\\to 0$: der Bruch strebt gegen $\\frac{-4}{4}=-1$, und $\\frac{1}{x}\\to 0$.\n**Ergebnis:** $\\lim_{x\\to\\infty}\\frac{x-4x^3+2}{x+4x^4+7x^2}=0$ (Nennergrad größer als Zählergrad).',
        '**Aufgabe:** Bestimme $\\lim_{x\\to -\\infty}\\frac{x^7-x}{x-3x^2}$.\n**Lösung:** Zähler durch $x^7$, Nenner durch $x^2$ ausklammern: $\\frac{x^7}{x^2}\\cdot\\frac{1-\\frac{1}{x^6}}{\\frac{1}{x}-3}=x^5\\cdot\\frac{1-\\frac{1}{x^6}}{\\frac{1}{x}-3}$. Für $x\\to -\\infty$ gilt $x^5\\to -\\infty$ und der Bruch $\\to\\frac{1}{-3}=-\\frac{1}{3}$. Produkt: $(-\\infty)\\cdot(-\\frac{1}{3})=+\\infty$.\n**Ergebnis:** $\\lim_{x\\to -\\infty}\\frac{x^7-x}{x-3x^2}=+\\infty$ (uneigentlich; Zählergrad größer).',
        '**Aufgabe:** Bestimme $\\lim_{x\\to\\infty}\\frac{3x-1}{x+2}$.\n**Lösung:** Gleicher Grad oben und unten. Durch $x$ teilen: $\\frac{3-\\frac{1}{x}}{1+\\frac{2}{x}}$. Für $x\\to\\infty$ gehen $\\frac{1}{x},\\frac{2}{x}\\to 0$, also $\\frac{3-0}{1+0}=3$.\n**Ergebnis:** $\\lim_{x\\to\\infty}\\frac{3x-1}{x+2}=3$ (waagerechte Asymptote $y=3$; Verhältnis der Leitkoeffizienten).',
      ],
    },
    {
      szenario: 'Betrag in Fälle aufspalten',
      beispiele: [
        '**Aufgabe:** Für $f(x)=\\frac{\\lvert 4-2x\\rvert}{x-2}$ ($x\\neq 2$): bestimme $\\lim_{x\\to 2^+} f$, $\\lim_{x\\to 2^-} f$ und $\\lim_{x\\to 2} f$.\n**Lösung:** Es ist $\\lvert 4-2x\\rvert=2\\lvert 2-x\\rvert$. Für $x>2$: $\\lvert 2-x\\rvert=x-2$, also $f(x)=\\frac{2(x-2)}{x-2}=2$. Für $x<2$: $\\lvert 2-x\\rvert=2-x$, also $f(x)=\\frac{2(2-x)}{x-2}=\\frac{-2(x-2)}{x-2}=-2$.\n**Ergebnis:** $\\lim_{x\\to 2^+} f=2$, $\\lim_{x\\to 2^-} f=-2$. Da verschieden, existiert $\\lim_{x\\to 2} f$ **nicht** (Sprungstelle).',
        '**Aufgabe:** Bestimme für dasselbe $f$ den Grenzwert $\\lim_{x\\to 0} f(x)$.\n**Lösung:** Bei $x_0=0$ ist $f$ stetig (kein Problem im Nenner, da $0-2\\neq 0$); einfach einsetzen: $f(0)=\\frac{\\lvert 4-0\\rvert}{0-2}=\\frac{4}{-2}=-2$.\n**Ergebnis:** $\\lim_{x\\to 0} f(x)=-2$.',
        '**Aufgabe:** Bestimme $\\lim_{x\\to 0}\\frac{\\lvert x\\rvert}{x}$.\n**Lösung:** Für $x>0$ ist $\\frac{\\lvert x\\rvert}{x}=\\frac{x}{x}=1$, für $x<0$ ist $\\frac{\\lvert x\\rvert}{x}=\\frac{-x}{x}=-1$. Also $\\lim_{x\\to 0^+}=1$ und $\\lim_{x\\to 0^-}=-1$.\n**Ergebnis:** Die einseitigen Grenzwerte sind verschieden, daher existiert $\\lim_{x\\to 0}\\frac{\\lvert x\\rvert}{x}$ **nicht**.',
      ],
    },
    {
      szenario: 'Polstelle (uneigentlich) & Asymptoten',
      beispiele: [
        '**Aufgabe:** Untersuche das Verhalten von $\\frac{1}{x}$ an der Polstelle $x_0=0$.\n**Lösung:** Für $x>0$ ist $\\frac{1}{x}>0$ und wächst unbeschränkt, für $x<0$ ist $\\frac{1}{x}<0$ und fällt unbeschränkt: $\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty$, $\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty$.\n**Ergebnis:** Die einseitigen Grenzwerte sind $\\pm\\infty$ (verschieden), $\\lim_{x\\to 0}\\frac{1}{x}$ existiert nicht; $x=0$ ist eine senkrechte Asymptote.',
        '**Aufgabe:** Bestimme den maximalen Definitionsbereich von $f(x)=\\frac{x^3-x^2-x}{x^2-1}$ und das Verhalten für $x\\to\\pm\\infty$.\n**Lösung:** Nenner $x^2-1=0 \\iff x=\\pm 1$, also $D_f=\\mathbb{R}\\setminus\\{-1,1\\}$ (Nenner darf nicht 0 sein). Fernverhalten: $f(x)=x\\cdot\\frac{1-\\frac{1}{x}-\\frac{1}{x^2}}{1-\\frac{1}{x^2}}$; der Bruch $\\to 1$, und $x\\to+\\infty$ bzw. $x\\to-\\infty$.\n**Ergebnis:** $D_f=\\mathbb{R}\\setminus\\{-1,1\\}$; $\\lim_{x\\to\\infty} f=+\\infty$ und $\\lim_{x\\to -\\infty} f=-\\infty$.',
        '**Aufgabe:** Ist $f(x)=\\frac{x^3-x^2-x}{x^2-1}$ asymptotisch linear, und wie lautet die asymptotische Gerade?\n**Lösung:** Zählergrad ($3$) ist um eins größer als Nennergrad ($2$), also liegt lineares Verhalten vor. Polynomdivision: $\\frac{x^3-x^2-x}{x^2-1}=x-1-\\frac{1}{x^2-1}$. Der Restterm $\\frac{1}{x^2-1}\\to 0$ für $x\\to\\pm\\infty$, daher $\\lim_{x\\to\\pm\\infty}\\big(f(x)-(x-1)\\big)=0$.\n**Ergebnis:** Asymptotische Gerade $a(x)=x-1$ (schräge Asymptote).',
      ],
    },
  ],
}
