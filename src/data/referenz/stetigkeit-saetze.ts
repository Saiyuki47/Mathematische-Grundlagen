import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'stetigkeit-saetze',
  titel: 'Zwischenwert- & Extremwertsatz',
  inhalt:
    '**Worum geht es?**\n' +
    'Stetige Funktionen auf Intervallen haben zwei sehr nützliche Eigenschaften, die man oft braucht, ohne eine Formel für Lösungen zu kennen: Sie lassen keine Werte aus (Zwischenwertsatz), und auf einem abgeschlossenen Intervall haben sie immer einen höchsten und einen tiefsten Punkt (Extremwertsatz). Damit kann man beweisen, dass eine Gleichung eine Lösung hat, oder dass ein Maximum/Minimum existiert — auch wenn man es nicht ausrechnen kann.\n' +
    '\n' +
    'Zur Erinnerung: $f$ ist **stetig**, wenn der Graph keine Sprünge hat — kleine Änderungen von $x$ führen zu kleinen Änderungen von $f(x)$. Polynome, $\\exp$, $\\sin$, $\\cos$, die Betragsfunktion und die Wurzel (auf ihrem Bereich) sind stetig, ebenso Summen, Produkte, Verkettungen und Quotienten (bei Quotienten Nenner beachten).\n' +
    '\n' +
    '**Zwischenwertsatz (ZWS)**\n' +
    'Sei $I\\subseteq\\mathbb{R}$ ein Intervall und $f:I\\to\\mathbb{R}$ stetig. Seien $a,b\\in I$ mit $a<b$. Dann gibt es zu **jedem** Wert $y$ zwischen $f(a)$ und $f(b)$ ein $x\\in[a,b]$ mit $f(x)=y$.\n' +
    'In Worten: eine stetige Funktion nimmt zwischen zwei Stellen jeden dazwischenliegenden Funktionswert mindestens einmal an. Anschaulich: um vom Wert $f(a)$ zum Wert $f(b)$ zu kommen, muss der Graph jeden Zwischenwert durchlaufen, weil er nicht springen darf. (Folgerung: stetige Bilder von Intervallen sind wieder Intervalle.)\n' +
    '\n' +
    '**Spezialfall: Nullstellensatz (Vorzeichenwechsel)**\n' +
    'Setzt man $y=0$, erhält man den wichtigsten Anwendungsfall: Ist $f$ stetig auf $[a,b]$ und haben $f(a)$ und $f(b)$ **verschiedene Vorzeichen** (also $f(a)<0$ und $f(b)>0$ oder umgekehrt), dann hat $f$ eine **Nullstelle** in $[a,b]$, d. h. ein $x$ mit $f(x)=0$. Denn $0$ liegt dann zwischen $f(a)$ und $f(b)$.\n' +
    'Kurz gesagt: **Vorzeichenwechsel bedeutet Nullstelle** (bei stetigen Funktionen).\n' +
    '\n' +
    '**Intervallhalbierung (Bisektionsverfahren)**\n' +
    'So findet man die Nullstelle näherungsweise. Man startet mit $[a_0,b_0]$, in dem $f$ einen Vorzeichenwechsel hat, und halbiert wiederholt:\n' +
    '1. Berechne die Mitte $m=\\frac{a_n+b_n}{2}$ und das Vorzeichen von $f(m)$.\n' +
    '2. Wähle als nächstes Intervall die Hälfte, an deren Rändern $f$ wieder verschiedene Vorzeichen hat ($[a_n,m]$ oder $[m,b_n]$).\n' +
    '3. Wiederhole. Das Intervall wird jedes Mal halb so lang; die Nullstelle bleibt drin.\n' +
    'Es gilt $\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}b_n$, und dieser Grenzwert ist eine Nullstelle.\n' +
    '\n' +
    '**Extremwertsatz (Satz vom Minimum und Maximum)**\n' +
    'Sei $f:[a,b]\\to\\mathbb{R}$ stetig auf einem **kompakten** (d. h. abgeschlossenen und beschränkten) Intervall. Dann ist $f$ beschränkt, und es gibt Stellen $x_*,x^*\\in[a,b]$, an denen $f$ ihren kleinsten bzw. größten Wert annimmt:\n' +
    '$f(x_*)\\le f(x)\\le f(x^*)$ für alle $x\\in[a,b]$.\n' +
    '$x_*$ heißt (globale) Minimalstelle, $x^*$ (globale) Maximalstelle; sie dürfen auch Randpunkte sein. Zusammen mit dem ZWS folgt $f([a,b])=[f(x_*),f(x^*)]$. Der Satz sagt nur, **dass** Max/Min existieren, nicht **wo** (er ist nicht konstruktiv).\n' +
    '\n' +
    '**Warum „abgeschlossen + beschränkt" nötig ist**\n' +
    'Beide Voraussetzungen an das Intervall sind unverzichtbar — sonst kann das Maximum oder Minimum fehlen:\n' +
    '\n' +
    '| Funktion | Intervall | Problem |\n' +
    '|---|---|---|\n' +
    '| $f(x)=x$ | offen $(0,1)$ | kein Max/Min: kommt $0$ und $1$ beliebig nahe, erreicht sie nie |\n' +
    '| $f(x)=1/x$ | halboffen $(0,1]$ | unbeschränkt, kein Maximum (wächst bei $x\\to 0$ über alle Grenzen) |\n' +
    '| $f(x)=x$ | unbeschränkt $[0,\\infty)$ | kein Maximum (wächst unbegrenzt) |\n' +
    '\n' +
    'Auch **Stetigkeit** ist nötig: eine Funktion mit Sprung auf $[a,b]$ kann ihr Supremum verfehlen. Merke: kompaktes Intervall **und** stetig — beides zusammen garantiert Max und Min.\n' +
    '\n' +
    '**Wie zeigt man, dass eine Gleichung eine Lösung hat?**\n' +
    'Standard-Vorgehen mit dem ZWS:\n' +
    '1. Gleichung auf die Form $f(x)=0$ bringen: alles auf eine Seite, also $f(x)=\\text{linke Seite}-\\text{rechte Seite}$.\n' +
    '2. Begründen, dass $f$ **stetig** ist (zusammengesetzt aus stetigen Bausteinen) und auf einem Intervall $[a,b]$ definiert ist.\n' +
    '3. Zwei Stellen $a,b$ suchen, an denen $f$ **verschiedene Vorzeichen** hat: $f(a)$ und $f(b)$ ausrechnen.\n' +
    '4. Mit dem ZWS (Nullstellensatz) folgern: es gibt $x\\in[a,b]$ mit $f(x)=0$ — also eine Lösung der Gleichung.\n' +
    'Für eine **eingrenzende** Näherung anschließend Bisektion durchführen, bis das Intervall klein genug ist.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Stetigkeit vergessen zu prüfen — ohne sie gilt der ZWS nicht (eine springende Funktion kann eine $0$ überspringen).\n' +
    '• Den ZWS auf $f(a)$, $f(b)$ mit **gleichem** Vorzeichen anwenden: dann ist keine Nullstelle garantiert (es kann eine geben, muss aber nicht).\n' +
    '• Beim Extremwertsatz das Intervall offen oder unbeschränkt lassen — dann muss kein Max/Min existieren.\n' +
    '• ZWS sichert **Existenz**, nicht **Eindeutigkeit**: es kann mehrere Lösungen geben.',
  beispiele: [
    {
      szenario: 'Nullstelle per Vorzeichenwechsel zeigen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $f(x)=x^2-2$ eine Nullstelle in $[0,2]$ hat.\n**Lösung:** $f$ ist ein Polynom, also stetig auf $[0,2]$. Es ist $f(0)=0^2-2=-2<0$ und $f(2)=2^2-2=2>0$ — verschiedene Vorzeichen. Da $0$ zwischen $f(0)$ und $f(2)$ liegt, liefert der ZWS ein $x\\in[0,2]$ mit $f(x)=0$.\n**Ergebnis:** $f$ hat eine Nullstelle in $[0,2]$ (es ist $x=\\sqrt{2}$). Damit ist auch $x^2=2$ lösbar.',
        '**Aufgabe:** Hat $f(x)=\\cos(x)-x$ eine Nullstelle in $[0,1]$?\n**Lösung:** $\\cos$ und $x$ sind stetig, also ist $f$ stetig. Es ist $f(0)=\\cos(0)-0=1>0$ und $f(1)=\\cos(1)-1\\approx 0{,}540-1=-0{,}460<0$. Vorzeichenwechsel auf $[0,1]$.\n**Ergebnis:** Nach dem ZWS gibt es ein $x\\in[0,1]$ mit $\\cos(x)=x$.',
        '**Aufgabe:** Zeige, dass jedes Polynom $p$ von ungeradem Grad mit Leitkoeffizient $a_n>0$ eine reelle Nullstelle hat.\n**Lösung:** $p$ ist als Polynom stetig. Wegen des ungeraden Grades gilt $\\lim_{x\\to\\infty}p(x)=\\infty$ und $\\lim_{x\\to-\\infty}p(x)=-\\infty$. Also gibt es ein $b$ mit $p(b)>0$ und ein $a$ mit $p(a)<0$.\n**Ergebnis:** Auf $[a,b]$ liefert der ZWS eine Nullstelle. Jedes Polynom ungeraden Grades hat also mindestens eine reelle Nullstelle.',
      ],
    },
    {
      szenario: 'Bisektionsverfahren durchführen',
      beispiele: [
        '**Aufgabe:** Für $f(x)=x^2-2$ auf $[0,2]$ ($f(0)<0$, $f(2)>0$): führe zwei Bisektionsschritte durch.\n**Lösung:** Mitte von $[0,2]$ ist $m=1$, $f(1)=-1<0$ — Vorzeichenwechsel auf $[1,2]$, also weiter mit $[1,2]$. Mitte $m=\\frac{3}{2}$, $f(\\frac{3}{2})=\\frac{9}{4}-2=\\frac{1}{4}>0$ — Vorzeichenwechsel auf $[1,\\frac{3}{2}]$.\n**Ergebnis:** Nach zwei Schritten liegt die Nullstelle in $[1{,}25;\\,1{,}5]$ (Mitte $\\frac{5}{4}$, $f(\\frac{5}{4})=\\frac{25}{16}-2<0$).',
        '**Aufgabe:** Zeige mit dem ZWS, dass $\\frac{1}{1+x^2}=\\sqrt{x}$ eine Lösung in $[0,4]$ hat, und grenze sie per Bisektion auf ein Intervall der Länge $\\frac{1}{4}$ ein.\n**Lösung:** Setze $f(x)=\\frac{1}{1+x^2}-\\sqrt{x}$; $f$ ist stetig auf $[0,4]$. Es ist $f(0)=1>0$ und $f(4)=\\frac{1}{17}-2<0$, nach ZWS also eine Nullstelle. Bisektion: $f(2)<0\\Rightarrow[0,2]$; $f(1)<0\\Rightarrow[0,1]$; $f(\\frac{1}{2})>0\\Rightarrow[\\frac{1}{2},1]$; $f(\\frac{3}{4})<0\\Rightarrow[\\frac{1}{2},\\frac{3}{4}]$.\n**Ergebnis:** Die Lösung liegt im Intervall $[\\frac{1}{2},\\frac{3}{4}]$ der Länge $\\frac{1}{4}$.',
        '**Aufgabe:** Warum endet die Bisektion mit einem beliebig kleinen Intervall um die Nullstelle?\n**Lösung:** In jedem Schritt wird das Intervall halbiert, die Länge nach $n$ Schritten ist $\\frac{b_0-a_0}{2^n}$. Wegen $\\frac{1}{2^n}\\to 0$ gilt $\\lim a_n=\\lim b_n$, und da auf jedem $[a_n,b_n]$ ein Vorzeichenwechsel besteht, ist der gemeinsame Grenzwert eine Nullstelle.\n**Ergebnis:** Das Verfahren erreicht jede gewünschte Genauigkeit; um Länge $\\le \\varepsilon$ zu garantieren, genügen $n$ Schritte mit $\\frac{b_0-a_0}{2^n}\\le\\varepsilon$.',
      ],
    },
    {
      szenario: 'Extremwertsatz und seine Voraussetzungen',
      beispiele: [
        '**Aufgabe:** Begründe, dass $f(x)=x^3-3x$ auf $[-2,2]$ ein Maximum und ein Minimum annimmt.\n**Lösung:** $f$ ist als Polynom stetig, und $[-2,2]$ ist abgeschlossen und beschränkt (kompakt). Damit sind alle Voraussetzungen des Extremwertsatzes erfüllt.\n**Ergebnis:** $f$ nimmt auf $[-2,2]$ ein globales Maximum und ein globales Minimum an (existieren garantiert — die Stellen sind hier $x=\\pm 1$ und die Ränder).',
        '**Aufgabe:** Hat $f(x)=x$ auf dem offenen Intervall $(0,1)$ ein Maximum?\n**Lösung:** $f$ ist stetig, aber $(0,1)$ ist nicht abgeschlossen. Die Werte $f(x)$ kommen dem Wert $1$ beliebig nahe, erreichen ihn aber nie, da $1\\notin(0,1)$. Es gibt also keine Stelle $x^*$ mit größtem Wert.\n**Ergebnis:** Kein Maximum (und kein Minimum). Der Extremwertsatz greift nicht — das Intervall ist offen, die Voraussetzung „abgeschlossen" fehlt.',
        '**Aufgabe:** Hat $f(x)=\\frac{1}{x}$ auf $(0,1]$ ein Maximum?\n**Lösung:** $f$ ist auf $(0,1]$ stetig, aber das Intervall ist nicht abgeschlossen (der Randpunkt $0$ fehlt) und $f$ ist dort nicht beschränkt: für $x\\to 0^+$ gilt $\\frac{1}{x}\\to\\infty$.\n**Ergebnis:** Kein Maximum, da $f$ unbeschränkt ist. Das zeigt, warum „beschränkt + abgeschlossen" im Extremwertsatz nötig ist (ein Minimum gibt es hier dagegen, nämlich $f(1)=1$).',
      ],
    },
  ],
}
