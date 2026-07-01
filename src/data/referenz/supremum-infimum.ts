import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'supremum-infimum',
  titel: 'Supremum, Infimum & Vollständigkeit',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft will man die „Ränder" einer Zahlenmenge erfassen: die kleinste Zahl, die nicht mehr überschritten wird, und die größte, die nicht mehr unterschritten wird. Bei endlichen Mengen ist das einfach das größte bzw. kleinste Element. Bei unendlichen Mengen wie dem offenen Intervall $(0,1)$ gibt es aber gar kein größtes Element — trotzdem ist $1$ erkennbar die „obere Grenze". Supremum und Infimum machen genau diese Grenze präzise, auch wenn sie selbst nicht zur Menge gehört.\n' +
    '\n' +
    '**Obere und untere Schranke**\n' +
    'Sei $M \\subseteq \\mathbb{R}$.\n' +
    '• Eine Zahl $s \\in \\mathbb{R}$ heißt **obere Schranke** von $M$, falls $x \\le s$ für jedes $x \\in M$ gilt. Existiert eine solche $s$, heißt $M$ **nach oben beschränkt**.\n' +
    '• Eine Zahl $u \\in \\mathbb{R}$ heißt **untere Schranke** von $M$, falls $x \\ge u$ für jedes $x \\in M$ gilt. Existiert eine solche $u$, heißt $M$ **nach unten beschränkt**.\n' +
    '• Ist $M$ nach oben und nach unten beschränkt, heißt $M$ **beschränkt**.\n' +
    'Achtung: Schranken sind nie eindeutig. Ist $s$ eine obere Schranke, so ist auch jedes größere $s$ eine obere Schranke.\n' +
    '\n' +
    '**Supremum & Infimum (die beste Schranke)**\n' +
    'Das **Supremum** $\\sup M$ ist die **kleinste obere Schranke**: $s = \\sup M$ heißt, $s$ ist obere Schranke von $M$ und für jede obere Schranke $x$ von $M$ gilt $s \\le x$.\n' +
    'Das **Infimum** $\\inf M$ ist die **größte untere Schranke**: $u = \\inf M$ heißt, $u$ ist untere Schranke von $M$ und für jede untere Schranke $x$ von $M$ gilt $u \\ge x$.\n' +
    '\n' +
    '**Maximum & Minimum (gehört zur Menge)**\n' +
    'Liegt das Supremum **selbst in M**, nennt man es **Maximum** $\\max M$. Liegt das Infimum selbst in $M$, heißt es **Minimum** $\\min M$. Der ganze Witz: sup/inf existieren oft auch dann, wenn es kein max/min gibt — nämlich genau dann, wenn die Grenze nicht erreicht wird.\n' +
    '| Begriff | Bedeutung | muss in $M$ liegen? |\n' +
    '|---|---|---|\n' +
    '| obere Schranke | irgendeine Zahl $\\ge$ allen Elementen | nein |\n' +
    '| Supremum | kleinste obere Schranke | nein |\n' +
    '| Maximum | größtes Element | ja |\n' +
    '| Infimum | größte untere Schranke | nein |\n' +
    '| Minimum | kleinstes Element | ja |\n' +
    '\n' +
    '**Vollständigkeitsaxiom von $\\mathbb{R}$ (Supremumseigenschaft)**\n' +
    'Jede **nicht leere, nach oben beschränkte** Menge $M \\subseteq \\mathbb{R}$ besitzt ein Supremum $\\sup M \\in \\mathbb{R}$. Analog: jede nicht leere, nach unten beschränkte Menge besitzt ein Infimum.\n' +
    'Das ist die zentrale Eigenschaft, die $\\mathbb{R}$ von $\\mathbb{Q}$ unterscheidet: In $\\mathbb{Q}$ ist die Menge $\\{x : x^2 < 2\\}$ beschränkt, hat aber kein Supremum (es wäre $\\sqrt{2}$, und $\\sqrt{2} \\notin \\mathbb{Q}$). Erst in $\\mathbb{R}$ gibt es zu jeder solchen Menge eine Grenze — anschaulich: die Zahlengerade hat „keine Löcher".\n' +
    '\n' +
    '**Charakterisierung des Supremums (ε-Kriterium)**\n' +
    'Eine Zahl $s$ ist genau dann $s = \\sup M$, wenn beide Bedingungen gelten:\n' +
    '(1) $x \\le s$ für alle $x \\in M$ ($s$ ist obere Schranke), und\n' +
    '(2) zu jedem $\\varepsilon > 0$ gibt es ein $x \\in M$ mit $x > s - \\varepsilon$ (nichts Kleineres ist noch obere Schranke).\n' +
    'Bedingung (2) drückt aus, dass $s$ die **kleinste** obere Schranke ist: jede Zahl unter $s$ wird von einem Element der Menge bereits überschritten. Für das Infimum analog mit $x < u + \\varepsilon$.\n' +
    '\n' +
    '**Wie bestimmt man sup/inf?**\n' +
    '1. Menge verstehen: Welche Werte werden angenommen? (Extremfälle der Parameter einsetzen, z. B. $n = 1$ und $n \\to \\infty$.)\n' +
    '2. Kandidaten für die obere/untere Grenze raten.\n' +
    '3. Prüfen, ob die Grenze **angenommen** wird: Gibt es ein Element gleich dem Kandidaten? Falls ja → max bzw. min (und damit auch sup bzw. inf). Falls nein → nur sup bzw. inf, kein max/min.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• sup/inf mit max/min verwechseln: $\\sup(0,1) = 1$, aber $\\max(0,1)$ **existiert nicht**, weil $1 \\notin (0,1)$.\n' +
    '• Vergessen, die Beschränktheit zu prüfen: Ist $M$ nach oben unbeschränkt, schreibt man $\\sup M = +\\infty$ (kein reelles Supremum).\n' +
    '• Glauben, sup/inf seien irgendwie willkürlich — sie sind **eindeutig**, im Gegensatz zu beliebigen Schranken.',
  beispiele: [
    {
      szenario: 'Intervalle (offen/abgeschlossen)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M = [2,\\,5]$.\n**Lösung:** Beide Randpunkte gehören zur Menge. $5$ ist obere Schranke und liegt in $M$, $2$ ist untere Schranke und liegt in $M$.\n**Ergebnis:** $\\sup M = \\max M = 5$ und $\\inf M = \\min M = 2$.',
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M = (0,\\,1)$.\n**Lösung:** $0$ und $1$ sind die Grenzen, gehören aber wegen der offenen Klammern **nicht** zu $M$. $1$ ist kleinste obere Schranke (jede Zahl $< 1$ wird von einem Element aus $M$ überschritten), wird aber nicht angenommen; analog $0$.\n**Ergebnis:** $\\sup M = 1$, $\\inf M = 0$; $\\max M$ und $\\min M$ existieren **nicht**.',
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M = (-\\infty,\\,3]$.\n**Lösung:** Nach unten ist $M$ unbeschränkt, ein Infimum in $\\mathbb{R}$ gibt es nicht. Nach oben ist $3$ obere Schranke und liegt in $M$.\n**Ergebnis:** $\\sup M = \\max M = 3$; $\\inf M = -\\infty$ (kein reelles Infimum, kein Minimum).',
      ],
    },
    {
      szenario: 'Folgen-Mengen wie {1/n}',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M = \\left\\{\\frac{1}{n} : n \\in \\mathbb{N}^{*}\\right\\}$.\n**Lösung:** Die Werte sind $1, \\frac{1}{2}, \\frac{1}{3}, \\dots$ Der größte entsteht bei $n = 1$, nämlich $1$ — wird angenommen, also Maximum. Die Werte fallen gegen $0$, erreichen $0$ aber nie ($\\frac{1}{n} > 0$ für alle $n$); zugleich ist nach dem ε-Kriterium $0$ die größte untere Schranke.\n**Ergebnis:** $\\sup M = \\max M = 1$, $\\inf M = 0$; $\\min M$ existiert **nicht**.',
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M_2 = \\left\\{\\frac{1}{z} : z \\in \\mathbb{Z} \\setminus \\{0\\}\\right\\}$.\n**Lösung:** Für positive $z$ entstehen $1, \\frac{1}{2}, \\frac{1}{3}, \\dots$ (größter Wert $1$ bei $z = 1$), für negative $z$ entstehen $-1, -\\frac{1}{2}, \\dots$ (kleinster Wert $-1$ bei $z = -1$). Beide Extremwerte liegen in $M_2$.\n**Ergebnis:** $\\sup M_2 = \\max M_2 = 1$ und $\\inf M_2 = \\min M_2 = -1$.',
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M_1 = \\{x \\in \\mathbb{R} : x > 0 \\text{ und } x^2 \\le 4\\}$.\n**Lösung:** $x^2 \\le 4$ bedeutet $-2 \\le x \\le 2$; zusammen mit $x > 0$ ergibt sich das halboffene Intervall $(0,\\,2]$. Die obere Grenze $2$ erfüllt $2^2 = 4 \\le 4$ und $2 > 0$, liegt also in $M_1$. Die untere Grenze $0$ ist wegen $x > 0$ ausgeschlossen.\n**Ergebnis:** $\\sup M_1 = \\max M_1 = 2$, $\\inf M_1 = 0$; $\\min M_1$ existiert **nicht**.',
      ],
    },
    {
      szenario: 'Mengen mit zwei Parametern',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M_3 = \\left\\{\\frac{1}{n} + \\frac{1}{m} : n, m \\in \\mathbb{N}^{*}\\right\\}$.\n**Lösung:** Beide Summanden werden am größten für $n = m = 1$: dann ist der Wert $1 + 1 = 2$ — wird angenommen, also Maximum. Lässt man $n, m \\to \\infty$, streben beide Summanden gegen $0$, die Summe also gegen $0$ (ohne $0$ je zu erreichen, da beide Summanden positiv sind).\n**Ergebnis:** $\\sup M_3 = \\max M_3 = 2$, $\\inf M_3 = 0$; $\\min M_3$ existiert **nicht**.',
        '**Aufgabe:** Bestimme $\\sup$, $\\inf$, $\\max$, $\\min$ von $M_4 = \\left\\{\\frac{1}{n} - \\frac{1}{m} : n, m \\in \\mathbb{N}^{*}\\right\\}$.\n**Lösung:** Größtwerte: $\\frac{1}{n}$ groß (also $n = 1$) und $\\frac{1}{m}$ klein (also $m \\to \\infty$) ergeben Werte nahe $1 - 0 = 1$, ohne $1$ zu erreichen. Kleinstwerte: $n \\to \\infty$ und $m = 1$ ergeben Werte nahe $0 - 1 = -1$, ohne $-1$ zu erreichen.\n**Ergebnis:** $\\sup M_4 = 1$, $\\inf M_4 = -1$; weder $\\max M_4$ noch $\\min M_4$ existieren.',
        '**Aufgabe:** Begründe mit dem ε-Kriterium, warum $\\sup M_4 = 1$ gilt (mit $M_4$ wie oben).\n**Lösung:** (1) Obere Schranke: Für alle $n, m \\in \\mathbb{N}^{*}$ ist $\\frac{1}{n} \\le 1$ und $\\frac{1}{m} > 0$, also $\\frac{1}{n} - \\frac{1}{m} < 1$. (2) Kleinste obere Schranke: Zu $\\varepsilon > 0$ wähle $n = 1$ und $m$ so groß, dass $\\frac{1}{m} < \\varepsilon$; dann ist $1 - \\frac{1}{m} > 1 - \\varepsilon$, ein Element von $M_4$ liegt also über $1 - \\varepsilon$.\n**Ergebnis:** Beide Bedingungen erfüllt, daher $\\sup M_4 = 1$ (und da $1 \\notin M_4$, gibt es kein Maximum).',
      ],
    },
  ],
}
