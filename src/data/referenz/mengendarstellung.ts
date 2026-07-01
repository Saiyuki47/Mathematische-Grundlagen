import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'mengendarstellung',
  titel: 'Mengendarstellung & Intervalle',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein und dieselbe Menge kann man auf mehrere Arten aufschreiben. Bei wenigen, konkreten Elementen zählt man sie einfach auf. Bei unendlich vielen oder bei Elementen, die einer Regel folgen, beschreibt man stattdessen die Eigenschaft, die alle Elemente erfüllen. Für zusammenhängende Bereiche reeller Zahlen gibt es eine eigene Kurzschreibweise: das Intervall. Wer alle Formen beherrscht, kann jede Menge so notieren, wie es am kürzesten und klarsten ist.\n' +
    '\n' +
    '**Aufzählende Form (extensional)**\n' +
    'Man listet alle Elemente in geschweiften Klammern auf, getrennt durch Kommas: $\\{1, 2, 3, 5\\}$. Dabei gilt: die **Reihenfolge spielt keine Rolle** und **Wiederholungen zählen nicht**, also $\\{1, 2\\} = \\{2, 1\\}$ und $\\{1, 2, 2\\} = \\{1, 2\\}$. Bei klaren Mustern darf man mit $\\dots$ andeuten, z. B. $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$. Die leere Menge ist $\\emptyset = \\{\\}$.\n' +
    '\n' +
    '**Beschreibende Form (intensional)**\n' +
    'Statt der Elemente nennt man die **Bedingung**, die genau sie erfüllen:\n' +
    '$\\{x \\mid E(x)\\}$ — „alle $x$, für die die Aussage $E(x)$ wahr ist“.\n' +
    'Oft schränkt man $x$ zuerst auf eine Grundmenge ein und schreibt die Eigenschaft dahinter, getrennt durch $\\mid$ oder $:$ (beides bedeutet „mit der Eigenschaft“). Beispiel aus der Vorlesung: $\\{m \\in \\mathbb{N} : m \\text{ gerade}\\}$ ist die Menge aller geraden natürlichen Zahlen.\n' +
    '\n' +
    '**Erzeuger-/Bildform**\n' +
    'Hier baut man jedes Element mit einem **Term** aus einem Laufindex. Form: $\\{f(n) : n \\in \\mathbb{N}\\}$ — „setze für $n$ der Reihe nach $0, 1, 2, \\dots$ ein und sammle alle Ergebnisse“. So beschreibt man Vielfache und Restklassen sehr knapp:\n' +
    '• Gerade Zahlen: $\\{2n : n \\in \\mathbb{N}\\}$, ungerade: $\\{2n + 1 : n \\in \\mathbb{N}\\}$.\n' +
    '• Vielfache von $k$ (Rest $0$ bei Teilung durch $k$): $\\{kn : n \\in \\mathbb{N}\\}$.\n' +
    '• Rest $r$ bei Teilung durch $k$: $\\{kn + r : n \\in \\mathbb{N}\\}$.\n' +
    'Hinweis: In diesem Kurs beginnt $\\mathbb{N}$ bei $0$, also liefert $n = 0$ schon das erste Element.\n' +
    '\n' +
    '**Intervalle (Bereiche der reellen Zahlen)**\n' +
    'Ein Intervall fasst alle reellen Zahlen zwischen zwei Grenzen $a$ und $b$ (mit $a \\le b$) zusammen. Die **Klammer entscheidet, ob der Randpunkt dazugehört**: eckige Klammer = Rand **drin**, runde Klammer = Rand **draußen**.\n' +
    '| Schreibweise | Bedeutung | als Menge |\n' +
    '|---|---|---|\n' +
    '| $[a, b]$ | abgeschlossen (beide Ränder drin) | $\\{x \\in \\mathbb{R} : a \\le x \\le b\\}$ |\n' +
    '| $(a, b)$ | offen (beide Ränder draußen) | $\\{x \\in \\mathbb{R} : a < x < b\\}$ |\n' +
    '| $[a, b)$ | halboffen (links drin, rechts draußen) | $\\{x \\in \\mathbb{R} : a \\le x < b\\}$ |\n' +
    '| $(a, b]$ | halboffen (links draußen, rechts drin) | $\\{x \\in \\mathbb{R} : a < x \\le b\\}$ |\n' +
    '\n' +
    'Eine **eckige** Klammer heißt also $\\le$ bzw. $\\ge$ (Rand zählt mit), eine **runde** Klammer heißt $<$ bzw. $>$ (Rand zählt nicht mit). Statt runder Klammern sieht man manchmal nach außen gedrehte eckige: $[a, b) = [a, b[$.\n' +
    '\n' +
    '**Unendliche Intervalle**\n' +
    'Mit $\\pm\\infty$ beschreibt man unbeschränkte Bereiche. Da $\\infty$ keine Zahl ist, steht an einer $\\infty$-Grenze **immer eine runde Klammer**: $[a, \\infty) = \\{x \\in \\mathbb{R} : x \\ge a\\}$, $(-\\infty, b] = \\{x \\in \\mathbb{R} : x \\le b\\}$, und $(-\\infty, \\infty) = \\mathbb{R}$.\n' +
    '\n' +
    '**Warum verschiedene Darstellungen?**\n' +
    'Aufzählen ist am anschaulichsten, geht aber nur bei wenigen, konkreten Elementen. Die beschreibende und die Erzeugerform fassen auch unendliche oder regelhafte Mengen exakt in einer Zeile. Das Intervall ist die kürzeste Form für einen lückenlosen Zahlenbereich. Man wählt die Form, die am klarsten ist – oder rechnet von einer in die andere um.\n' +
    '\n' +
    '**Wie wechselt man zwischen den Formen?**\n' +
    '1. **Beschreibend → aufzählend:** Bedingung der Reihe nach prüfen und passende Elemente sammeln, z. B. $\\{n \\in \\mathbb{N} : n < 4\\} = \\{0, 1, 2, 3\\}$.\n' +
    '2. **Erzeugerform → aufzählend:** $n = 0, 1, 2, \\dots$ einsetzen und die Ergebnisse hinschreiben.\n' +
    '3. **Aufzählend/verbal → Erzeugerform:** Muster erkennen (gemeinsamer Faktor ist der Teiler, fester Abstand ergibt den Rest) und als Term $kn + r$ schreiben.\n' +
    '4. **Intervall ↔ Ungleichung:** Klammertyp in $\\le$ bzw. $<$ übersetzen (und zurück).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Eckige und runde Klammer verwechseln – damit ist genau der Randpunkt falsch dabei oder fehlt.\n' +
    '• Bei $\\infty$ eine eckige Klammer setzen: $[a, \\infty]$ ist falsch, denn $\\infty$ ist kein Element.\n' +
    '• Glauben, $\\{x \\in \\mathbb{N}\\}$ und $[a, b]$ seien dasselbe: ein Intervall enthält **alle** reellen Zwischenwerte, nicht nur ganze Zahlen.\n' +
    '• Bei der Erzeugerform den Startwert von $n$ übersehen (hier $n = 0$).',
  beispiele: [
    {
      szenario: 'Erzeugerform aufstellen (Übungsblatt 1, Aufgabe 3a)',
      beispiele: [
        '**Aufgabe:** Schreibe die Menge der natürlichen Zahlen, die ohne Rest durch $7$ teilbar sind, in Erzeugerform.\n**Lösung:** „Ohne Rest durch $7$ teilbar“ heißt „Vielfaches von $7$“, also $7 \\cdot n$ für $n \\in \\mathbb{N}$. Nach dem Vorbild $\\{2n : n \\in \\mathbb{N}\\}$ (gerade Zahlen) setzt man den Faktor $7$ ein.\n**Ergebnis:** $\\{7n : n \\in \\mathbb{N}\\}$.',
        '**Aufgabe:** Schreibe die Menge der natürlichen Zahlen, die bei Division durch $5$ den Rest $3$ lassen, in Erzeugerform.\n**Lösung:** Solche Zahlen haben die Bauform „Vielfaches von $5$ plus $3$“, also $5n + 3$. Für $n = 0, 1, 2, \\dots$ entsteht $3, 8, 13, \\dots$ – jede lässt beim Teilen durch $5$ den Rest $3$.\n**Ergebnis:** $\\{5n + 3 : n \\in \\mathbb{N}\\}$.',
        '**Aufgabe:** Schreibe die Menge der natürlichen Zahlen, die sowohl durch $2$ als auch durch $3$ ohne Rest teilbar sind, in Erzeugerform.\n**Lösung:** Eine Zahl ist genau dann durch $2$ **und** durch $3$ teilbar, wenn sie durch das kleinste gemeinsame Vielfache $\\mathrm{kgV}(2,3) = 6$ teilbar ist. Also sind es die Vielfachen von $6$.\n**Ergebnis:** $\\{6n : n \\in \\mathbb{N}\\}$.',
      ],
    },
    {
      szenario: 'Erzeugerform aufzählen (Übungsblatt 1, Aufgabe 3b)',
      beispiele: [
        '**Aufgabe:** Gib $\\{3n - 2 : n \\in \\mathbb{N}\\}$ durch Auflistung der ersten Elemente an.\n**Lösung:** Setze $n = 0, 1, 2, 3, \\dots$ ein: $3\\cdot 0 - 2 = -2$, $3\\cdot 1 - 2 = 1$, $3\\cdot 2 - 2 = 4$, $3\\cdot 3 - 2 = 7$.\n**Ergebnis:** $\\{-2, 1, 4, 7, \\dots\\}$.',
        '**Aufgabe:** Gib $\\{3n + 2 : n \\in \\mathbb{N}\\}$ durch Auflistung der ersten Elemente an.\n**Lösung:** Einsetzen von $n = 0, 1, 2, 3, \\dots$: $2, 5, 8, 11, \\dots$ (jeder Schritt erhöht um $3$).\n**Ergebnis:** $\\{2, 5, 8, 11, \\dots\\}$.',
        '**Aufgabe:** Gib $\\{2^{n} : n \\in \\mathbb{N}\\}$ durch Auflistung der ersten Elemente an.\n**Lösung:** Hier steht $n$ im Exponenten: $2^{0} = 1$, $2^{1} = 2$, $2^{2} = 4$, $2^{3} = 8$. Es entstehen die Zweierpotenzen.\n**Ergebnis:** $\\{1, 2, 4, 8, \\dots\\}$.',
      ],
    },
    {
      szenario: 'Intervalle und ihre Klammern',
      beispiele: [
        '**Aufgabe:** Schreibe $[-1, 2)$ als Menge mit Bedingung und nenne, welche Ränder dazugehören.\n**Lösung:** Links eckige Klammer $\\Rightarrow$ $-1$ gehört dazu ($x \\ge -1$); rechts runde Klammer $\\Rightarrow$ $2$ gehört **nicht** dazu ($x < 2$).\n**Ergebnis:** $[-1, 2) = \\{x \\in \\mathbb{R} : -1 \\le x < 2\\}$; der linke Rand $-1$ ist enthalten, der rechte Rand $2$ nicht.',
        '**Aufgabe:** Bilde $[-1, 2) \\cup \\{-1, 1, 2\\}$ (vgl. Übungsblatt 1, Aufgabe 2c).\n**Lösung:** Das Intervall $[-1, 2)$ enthält bereits alle reellen Zahlen mit $-1 \\le x < 2$. Aus der hinzugefügten Menge ist $-1$ und $1$ schon drin; neu kommt nur der Punkt $2$ dazu, der die rechte Lücke schließt.\n**Ergebnis:** $\\{x \\in \\mathbb{R} : -1 \\le x \\le 2\\} = [-1, 2]$.',
        '**Aufgabe:** Schreibe „alle reellen Zahlen, die mindestens $3$ sind“ als Intervall.\n**Lösung:** „Mindestens $3$“ heißt $x \\ge 3$, also gehört $3$ dazu (eckige Klammer) und nach oben gibt es keine Schranke (an der $\\infty$-Seite immer runde Klammer).\n**Ergebnis:** $[3, \\infty) = \\{x \\in \\mathbb{R} : x \\ge 3\\}$.',
      ],
    },
    {
      szenario: 'Form wechseln (beschreibend ↔ aufzählend)',
      beispiele: [
        '**Aufgabe:** Schreibe $\\{n \\in \\mathbb{N} : n \\le 4\\}$ in aufzählender Form.\n**Lösung:** Prüfe der Reihe nach, welche natürlichen Zahlen die Bedingung $n \\le 4$ erfüllen: $0, 1, 2, 3, 4$ (in diesem Kurs zählt $0$ zu $\\mathbb{N}$).\n**Ergebnis:** $\\{0, 1, 2, 3, 4\\}$.',
        '**Aufgabe:** Schreibe die Menge $\\{4, 8, 12, 16, \\dots\\}$ in Erzeugerform.\n**Lösung:** Der feste Abstand $4$ und Start bei $4$ deuten auf Vielfache von $4$. Mit $\\mathbb{N}$ ab $0$ liefert $4n$ jedoch $0, 4, 8, \\dots$ – die $0$ ist hier nicht gewollt. Wähle daher $4(n+1)$ bzw. äquivalent $4n + 4$, das ergibt $4, 8, 12, \\dots$.\n**Ergebnis:** $\\{4n + 4 : n \\in \\mathbb{N}\\}$ (gleichbedeutend mit „positive Vielfache von $4$“).',
        '**Aufgabe:** Schreibe $\\{x \\in \\mathbb{R} : -2 < x \\le 5\\}$ als Intervall.\n**Lösung:** Links steht $<$ (Rand $-2$ draußen) $\\Rightarrow$ runde Klammer; rechts steht $\\le$ (Rand $5$ drin) $\\Rightarrow$ eckige Klammer.\n**Ergebnis:** $(-2, 5]$.',
      ],
    },
  ],
}
