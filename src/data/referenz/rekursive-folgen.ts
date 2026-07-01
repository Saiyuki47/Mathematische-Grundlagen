import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'rekursive-folgen',
  titel: 'Rekursive Folgen',
  inhalt:
    '**Worum geht es?**\n' +
    'Bei einer rekursiv definierten Folge ist nicht eine fertige Formel für $a_n$ gegeben, sondern eine Startvorschrift und eine Bauanleitung: Aus dem aktuellen Glied wird das nächste berechnet. So entstehen viele Folgen aus Anwendungen ganz natürlich (z. B. ein Iterationsverfahren, das einen Wert schrittweise verbessert). Die zentrale Frage ist dann: Pendelt sich die Folge auf einen festen Wert ein, und wenn ja, auf welchen?\n' +
    '\n' +
    '**Rekursive Definition**\n' +
    'Man gibt ein Startglied vor (z. B. $a_0$ oder $a_1$) und eine Funktion $f$, mit der das nächste Glied gebildet wird:\n' +
    '$a_0$ gegeben, $a_{n+1}=f(a_n)$ für alle $n$.\n' +
    'Beispiel aus dem Übungsblatt: $a_0:=2$ und $a_{n+1}:=\\frac{2a_n}{2+a_n}$. Jedes Glied hängt also nur vom direkten Vorgänger ab. Hier ist $f(x)=\\frac{2x}{2+x}$.\n' +
    '\n' +
    '**Die Standard-Strategie zur Konvergenz (4 Schritte)**\n' +
    'Bei einer rekursiven Folge kennt man den Grenzwert nicht von vornherein. Man sichert die Existenz des Grenzwerts mit dem Monotoniekriterium und berechnet ihn erst danach:\n' +
    '$1)$ **Beschränktheit** per vollständiger Induktion zeigen (z. B. $a_n>0$ bzw. $a_n\\le S$ für alle $n$).\n' +
    '$2)$ **Monotonie** zeigen, also $a_{n+1}\\le a_n$ (fallend) oder $a_{n+1}\\ge a_n$ (wachsend) für alle $n$.\n' +
    '$3)$ **Monotoniekriterium** anwenden: Eine monotone und beschränkte Folge ist konvergent. Damit existiert der Grenzwert $g=\\lim_{n\\to\\infty}a_n$.\n' +
    '$4)$ **Grenzwert über die Fixpunktgleichung** bestimmen. Weil die Folge konvergiert, haben $(a_n)$ und $(a_{n+1})$ denselben Grenzwert $g$. Man wendet auf beide Seiten von $a_{n+1}=f(a_n)$ den Limes an: $g=f(g)$, und löst diese Gleichung nach $g$ auf.\n' +
    '\n' +
    '**Warum Existenz VOR der Fixpunktrechnung?**\n' +
    'Schritt $4$ liefert nur Kandidaten: Die Gleichung $g=f(g)$ kann man immer hinschreiben, sie hat aber auch dann (Schein-)Lösungen, wenn die Folge gar keinen Grenzwert besitzt. Der Schritt $g=\\lim a_{n+1}=\\lim f(a_n)=f(\\lim a_n)=f(g)$ benutzt stillschweigend, dass $\\lim a_n$ überhaupt existiert. Setzt man das nicht voraus, erhält man eine **Scheinlösung** — eine Zahl, die zwar die Fixpunktgleichung erfüllt, aber gar nicht Grenzwert der Folge ist (die Folge kann z. B. bestimmt divergieren). Erst die Schritte $1$ bis $3$ garantieren, dass es einen Grenzwert gibt; dann ist der in Schritt $4$ gefundene Wert auch wirklich dieser Grenzwert.\n' +
    '\n' +
    '**Schritt-für-Schritt-Schema**\n' +
    '| Schritt | Was man tut | Womit |\n' +
    '|---|---|---|\n' +
    '| 1 | Beschränktheit nachweisen | vollständige Induktion |\n' +
    '| 2 | Monotonie nachweisen | $a_{n+1}-a_n$ bzw. $\\frac{a_{n+1}}{a_n}$ untersuchen |\n' +
    '| 3 | Konvergenz folgern | Monotoniekriterium |\n' +
    '| 4 | Grenzwert berechnen | $\\lim$ auf $a_{n+1}=f(a_n)$, dann $g=f(g)$ lösen |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Direkt mit $g=f(g)$ starten und das Ergebnis als Grenzwert verkaufen, ohne die Existenz zu sichern (Scheinlösung).\n' +
    '• Bei mehreren Lösungen von $g=f(g)$ die falsche nehmen: Nur ein Kandidat im richtigen Wertebereich der Folge kommt in Frage (z. B. nur $g\\ge 0$, wenn alle $a_n>0$ sind).\n' +
    '• Induktion und Monotonie verwechseln: Beschränktheit zeigt man fast immer per Induktion, Monotonie meist durch direkten Vergleich von $a_{n+1}$ und $a_n$.',
  beispiele: [
    {
      szenario: 'Fallende Folge (Übungsblatt: a₀=2, aₙ₊₁=2aₙ/(2+aₙ))',
      beispiele: [
        '**Aufgabe:** Schritt 1 — Zeige per vollständiger Induktion, dass $a_n>0$ für alle $n$, mit $a_0=2$, $a_{n+1}=\\frac{2a_n}{2+a_n}$.\n**Lösung:** Induktionsanfang $n=0$: $a_0=2>0$. Induktionsschritt: Gelte $a_n>0$. Dann ist $2a_n>0$ und $2+a_n>0$, also ist der Bruch $a_{n+1}=\\frac{2a_n}{2+a_n}>0$ (positiv durch positiv).\n**Ergebnis:** $a_n>0$ für alle $n$ — die Folge ist nach unten durch $0$ beschränkt.',
        '**Aufgabe:** Schritt 2 — Zeige, dass $(a_n)$ monoton fallend ist, und folgere mit Schritt 1 die Konvergenz.\n**Lösung:** Wegen $2+a_n>0$ darf man umformen: $a_{n+1}\\le a_n \\Leftrightarrow \\frac{2a_n}{2+a_n}\\le a_n \\Leftrightarrow 2a_n\\le a_n(2+a_n) \\Leftrightarrow 2a_n\\le 2a_n+a_n^2 \\Leftrightarrow 0\\le a_n^2$. Das ist immer wahr, also fällt $(a_n)$ monoton. Da $(a_n)$ fallend ist, ist $a_0=2$ das größte Glied; mit $a_n\\ge 0$ aus Schritt 1 gilt $a_n\\in[0,2]$, die Folge ist beschränkt.\n**Ergebnis:** $(a_n)$ ist monoton fallend und beschränkt, nach dem Monotoniekriterium also konvergent.',
        '**Aufgabe:** Schritt 4 — Bestimme den Grenzwert $g=\\lim_{n\\to\\infty}a_n$.\n**Lösung:** Da die Folge konvergiert, ist $g=\\lim a_n=\\lim a_{n+1}$. Limes auf beide Seiten der Rekursion: $g=\\lim\\frac{2a_n}{2+a_n}=\\frac{2g}{2+g}$. Auflösen: $(2+g)\\,g=2g \\Leftrightarrow 2g+g^2=2g \\Leftrightarrow g^2=0 \\Leftrightarrow g=0$.\n**Ergebnis:** $\\lim_{n\\to\\infty}a_n=0$. (Erst durch Schritt 3 wissen wir, dass dieser Fixpunkt wirklich der Grenzwert ist.)',
      ],
    },
    {
      szenario: 'Wachsende Folge mit oberer Schranke (xₙ₊₁≥xₙ, xₙ≤2)',
      beispiele: [
        '**Aufgabe:** Sei $x_1:=\\sqrt{2}$ und $x_{n+1}:=\\sqrt{2+x_n}$. Zeige per Induktion die Schranke $x_n\\le 2$ für alle $n$.\n**Lösung:** Anfang $n=1$: $x_1=\\sqrt{2}\\approx 1{,}41\\le 2$. Schritt: Gelte $x_n\\le 2$. Dann $x_{n+1}=\\sqrt{2+x_n}\\le\\sqrt{2+2}=\\sqrt{4}=2$.\n**Ergebnis:** $x_n\\le 2$ für alle $n$ — die Folge ist nach oben durch $2$ beschränkt (und wegen der Wurzel ist $x_n>0$).',
        '**Aufgabe:** Zeige, dass $(x_n)$ monoton wächst, also $x_{n+1}\\ge x_n$, und folgere die Konvergenz.\n**Lösung:** Da alle Glieder $\\ge 0$ sind, gilt $x_{n+1}\\ge x_n \\Leftrightarrow x_{n+1}^2\\ge x_n^2 \\Leftrightarrow 2+x_n\\ge x_n^2 \\Leftrightarrow 0\\ge x_n^2-x_n-2=(x_n-2)(x_n+1)$. Für $x_n\\in[0,2]$ ist $(x_n-2)\\le 0$ und $(x_n+1)>0$, das Produkt also $\\le 0$ — die Ungleichung stimmt. Somit wächst $(x_n)$ monoton und ist durch $2$ beschränkt.\n**Ergebnis:** Nach dem Monotoniekriterium ist $(x_n)$ konvergent.',
        '**Aufgabe:** Bestimme den Grenzwert $g$.\n**Lösung:** Limes auf $x_{n+1}=\\sqrt{2+x_n}$ anwenden: $g=\\sqrt{2+g}$, also $g^2=2+g$, d. h. $g^2-g-2=0$, somit $(g-2)(g+1)=0$ und $g\\in\\{2,-1\\}$. Da alle $x_n>0$ sind, ist $g\\ge 0$; der Kandidat $g=-1$ scheidet aus.\n**Ergebnis:** $\\lim_{n\\to\\infty}x_n=2$.',
      ],
    },
    {
      szenario: 'Warnung: Scheinlösung bei fehlender Existenz',
      beispiele: [
        '**Aufgabe:** Warum darf man bei $a_0:=1$, $a_{n+1}:=2a_n$ nicht einfach die Fixpunktgleichung lösen?\n**Lösung:** Die Glieder sind $1,2,4,8,16,\\dots$, also $a_n=2^n\\to\\infty$ — die Folge divergiert bestimmt. Schreibt man trotzdem $g=2g$, folgt $g=0$. Diese $0$ erfüllt zwar die Fixpunktgleichung, ist aber kein Grenzwert (die Folge wächst über alle Grenzen).\n**Ergebnis:** $g=0$ ist eine **Scheinlösung**; die Folge hat keinen Grenzwert. Die Rechnung $g=f(g)$ war unzulässig, weil $\\lim a_n$ nicht existiert.',
        '**Aufgabe:** Was liefert die Fixpunktgleichung bei $a_0:=2$, $a_{n+1}:=a_n^2$, und stimmt sie mit dem Verhalten überein?\n**Lösung:** Glieder: $2,4,16,256,\\dots\\to\\infty$. Fixpunktgleichung $g=g^2$ gibt $g^2-g=0$, also $g\\in\\{0,1\\}$. Keiner dieser Werte passt: Die Folge divergiert bestimmt gegen $\\infty$ und nähert sich weder $0$ noch $1$.\n**Ergebnis:** Beide Lösungen sind Scheinlösungen. Ohne vorherige Existenzsicherung (Schritte 1–3) ist das Fixpunkt-Ergebnis wertlos.',
        '**Aufgabe:** Welcher Schritt rettet die Fixpunktrechnung, und warum ist die Reihenfolge entscheidend?\n**Lösung:** Erst Beschränktheit (Induktion) und Monotonie zeigen, daraus mit dem Monotoniekriterium die Existenz von $g=\\lim a_n$ folgern. Nur wenn $\\lim a_n$ existiert, gilt $g=\\lim a_{n+1}=\\lim f(a_n)=f(g)$, denn dann darf man den Limes in die Rekursion hineinziehen.\n**Ergebnis:** Reihenfolge: zuerst Existenz sichern, dann $g=f(g)$ lösen und unter den Lösungen den im Wertebereich der Folge passenden Kandidaten wählen.',
      ],
    },
  ],
}
