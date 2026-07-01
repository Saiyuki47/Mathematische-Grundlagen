import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'betrag-intervalle',
  titel: 'Betrag & Betragsungleichungen',
  inhalt:
    '**Worum geht es?**\n' +
    'Der Betrag $|x|$ macht aus jeder Zahl ihre nicht-negative „Größe“ – das Vorzeichen wird weggeworfen. Man braucht ihn, um Abstände zu messen ($|x-a|$ ist der Abstand von $x$ zu $a$) und um Bedingungen wie „$x$ liegt höchstens $r$ von $a$ entfernt“ kurz aufzuschreiben. Beim Lösen von Betragsgleichungen und -ungleichungen ist die zentrale Technik die Fallunterscheidung.\n' +
    '\n' +
    '**Definition**\n' +
    'Für $x \\in \\mathbb{R}$ ist der (Absolut-)Betrag definiert durch $|x| = x$ falls $x \\ge 0$ und $|x| = -x$ falls $x < 0$. Das Minus dreht die negative Zahl ins Positive, z. B. $|-5| = -(-5) = 5$. Es gilt also stets $|x| \\ge 0$.\n' +
    '\n' +
    '**Geometrische Bedeutung: Abstand**\n' +
    '$|x|$ ist der Abstand von $x$ zur $0$ auf der Zahlengeraden. Allgemeiner ist $|x - a|$ der Abstand zwischen $x$ und $a$ (z. B. $|7 - 3| = 4$). Diese Lesart ist der Schlüssel: $|x - a| < r$ bedeutet „$x$ ist weniger als $r$ von $a$ entfernt“.\n' +
    '\n' +
    '**Rechenregeln**\n' +
    'Für alle $x, y \\in \\mathbb{R}$ gilt:\n' +
    '| Regel | Bedeutung |\n' +
    '|---|---|\n' +
    '| $\\lvert x\\rvert \\ge 0$, und $\\lvert x\\rvert = 0 \\Leftrightarrow x = 0$ | Betrag ist nie negativ |\n' +
    '| $\\lvert -x\\rvert = \\lvert x\\rvert$ | Vorzeichen egal |\n' +
    '| $\\lvert x \\cdot y\\rvert = \\lvert x\\rvert \\cdot \\lvert y\\rvert$ | Multiplikativität |\n' +
    '| $\\left\\lvert\\frac{x}{y}\\right\\rvert = \\frac{\\lvert x\\rvert}{\\lvert y\\rvert}$ (für $y \\neq 0$) | Quotientenregel |\n' +
    '| $\\lvert x\\rvert^2 = x^2$, also $\\lvert x\\rvert = \\sqrt{x^2}$ | Quadrat löscht das Vorzeichen |\n' +
    '\n' +
    '**Dreiecksungleichung**\n' +
    'Für alle $x, y \\in \\mathbb{R}$ gilt $|x + y| \\le |x| + |y|$. Der Betrag einer Summe ist höchstens so groß wie die Summe der Beträge; Gleichheit nur, wenn $x$ und $y$ dasselbe Vorzeichen haben. Daraus folgt die umgekehrte Dreiecksungleichung $\\big||x| - |y|\\big| \\le |x - y|$.\n' +
    '\n' +
    '**Betrag und Intervalle (Umgebung)**\n' +
    'Sei $C \\ge 0$. Dann gilt $|x| \\le C \\Leftrightarrow -C \\le x \\le C$. Mit Abstand geschrieben: $|x - a| < r \\Leftrightarrow a - r < x < a + r$, also das offene Intervall $(a-r,\\ a+r)$ – die „$r$-Umgebung von $a$“. Umgekehrt beschreibt $|x - a| \\ge r$ alles außerhalb, d. h. $(-\\infty,\\ a-r] \\cup [a+r,\\ \\infty)$.\n' +
    '\n' +
    '**Warum Fallunterscheidung?**\n' +
    'Solange man nicht weiß, ob der Ausdruck im Betrag positiv oder negativ ist, kann man den Betrag nicht auflösen. Man legt deshalb für jeden Betrag eine „Schaltstelle“ fest (die Nullstelle des Inneren) und betrachtet die Bereiche links und rechts davon getrennt. Bei mehreren Beträgen unterteilt man die Zahlengerade an allen Schaltstellen.\n' +
    '\n' +
    '**Wie löst man systematisch?**\n' +
    '1. Schaltstellen bestimmen: jeden Betrag $|\\cdot| = 0$ setzen (z. B. $x - 2 = 0$ und $x + 3 = 0$).\n' +
    '2. Zahlengerade in Bereiche einteilen und in jedem Bereich jeden Betrag vorzeichenrichtig auflösen: $|A| = A$, falls $A \\ge 0$, sonst $|A| = -A$.\n' +
    '3. In jedem Bereich die nun betragsfreie (Un-)Gleichung lösen.\n' +
    '4. Lösungen mit der Bereichsbedingung schneiden (nur was im Bereich liegt, zählt).\n' +
    '5. Teil-Lösungen vereinigen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Beim Multiplizieren einer Ungleichung mit einem Term, dessen Vorzeichen unbekannt ist, muss man auch eine Fallunterscheidung machen – bei negativem Faktor dreht sich das $\\le$ in ein $\\ge$. Außerdem: Bereichsbedingung am Ende nicht vergessen, sonst entstehen Scheinlösungen.',
  beispiele: [
    {
      szenario: 'Betragsgleichung lösen',
      beispiele: [
        '**Aufgabe:** Löse $|x - 3| = 5$.\n**Lösung:** Abstand von $x$ zu $3$ soll $5$ sein. Entweder $x - 3 = 5$ oder $x - 3 = -5$.\nFall 1: $x = 8$. Fall 2: $x = -2$.\n**Ergebnis:** $x \\in \\{-2,\\ 8\\}$.',
        '**Aufgabe:** Löse $|2x + 1| = 7$.\n**Lösung:** $2x + 1 = 7$ oder $2x + 1 = -7$.\nFall 1: $2x = 6 \\Rightarrow x = 3$. Fall 2: $2x = -8 \\Rightarrow x = -4$.\n**Ergebnis:** $x \\in \\{-4,\\ 3\\}$.',
        '**Aufgabe:** Löse $|x + 2| = -3$.\n**Lösung:** Ein Betrag ist nie negativ, $|x+2| \\ge 0$. Die rechte Seite ist negativ.\n**Ergebnis:** keine Lösung, $x \\in \\emptyset$.',
      ],
    },
    {
      szenario: 'Betragsungleichung als Intervall (Umgebung)',
      beispiele: [
        '**Aufgabe:** Schreibe $\\{x \\in \\mathbb{R} : |x - 1| < 3\\}$ als Intervall.\n**Lösung:** $|x - 1| < 3 \\Leftrightarrow -3 < x - 1 < 3$. Überall $+1$: $-2 < x < 4$.\n**Ergebnis:** das offene Intervall $(-2,\\ 4)$.',
        '**Aufgabe:** Schreibe $\\{x \\in \\mathbb{R} : |x + 2| \\le 5\\}$ als Intervall.\n**Lösung:** $|x + 2| \\le 5 \\Leftrightarrow -5 \\le x + 2 \\le 5$. Überall $-2$: $-7 \\le x \\le 3$.\n**Ergebnis:** das abgeschlossene Intervall $[-7,\\ 3]$.',
        '**Aufgabe:** Schreibe $B := \\{x \\in \\mathbb{R} : |x + 4| \\ge 6\\}$ als Vereinigung von Intervallen.\n**Lösung:** $|x + 4| \\ge 6$ heißt $x + 4 \\ge 6$ oder $x + 4 \\le -6$, also $x \\ge 2$ oder $x \\le -10$.\n**Ergebnis:** $B = (-\\infty,\\ -10] \\cup [2,\\ \\infty)$.',
      ],
    },
    {
      szenario: 'Zwei Beträge: Fallunterscheidung an allen Schaltstellen',
      beispiele: [
        '**Aufgabe:** Bestimme $C := \\{x \\in \\mathbb{R} : |x - 2| \\ge |x + 3|\\}$.\n**Lösung:** Schaltstellen $x = 2$ und $x = -3$.\nFall $x \\ge 2$: $x - 2 \\ge x + 3 \\Leftrightarrow -2 \\ge 3$ (falsch) $\\Rightarrow$ nichts.\nFall $-3 \\le x < 2$: $2 - x \\ge x + 3 \\Leftrightarrow -1 \\ge 2x \\Leftrightarrow x \\le -\\frac{1}{2}$, also $-3 \\le x \\le -\\frac{1}{2}$.\nFall $x < -3$: $2 - x \\ge -x - 3 \\Leftrightarrow 2 \\ge -3$ (immer wahr) $\\Rightarrow$ ganzer Bereich $x < -3$.\n**Ergebnis:** $C = \\left(-\\infty,\\ -\\frac{1}{2}\\right]$.',
        '**Aufgabe:** Löse $|x - 1| = |x + 5|$.\n**Lösung:** Gleicher Abstand zu $1$ und zu $-5$ heißt: $x$ liegt in der Mitte. Quadrieren (wegen $|a|=|b| \\Leftrightarrow a^2=b^2$): $(x-1)^2 = (x+5)^2 \\Leftrightarrow -2x + 1 = 10x + 25 \\Leftrightarrow -24 = 12x$.\n**Ergebnis:** $x = -2$ (der Mittelpunkt von $1$ und $-5$).',
        '**Aufgabe:** Bestimme $A := \\left\\{x \\in \\mathbb{R} \\setminus \\{9\\} : \\frac{4}{x - 9} \\le 2\\right\\}$.\n**Lösung:** Multiplizieren mit $x - 9$ erfordert eine Fallunterscheidung (Vorzeichen unbekannt).\nFall $x > 9$ (Nenner positiv): $4 \\le 2(x - 9) \\Leftrightarrow 2 \\le x - 9 \\Leftrightarrow x \\ge 11$.\nFall $x < 9$ (Nenner negativ, $\\le$ dreht sich): $4 \\ge 2(x - 9) \\Leftrightarrow x \\le 11$ – im Bereich also ganz $x < 9$.\n**Ergebnis:** $A = (-\\infty,\\ 9) \\cup [11,\\ \\infty)$.',
      ],
    },
  ],
}
