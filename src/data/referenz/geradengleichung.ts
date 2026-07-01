import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'geradengleichung',
  titel: 'Geraden & lineare Funktionen',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Gerade ist der Graph einer linearen Funktion – die einfachste Art, wie zwei Größen voneinander abhängen können: gleichmäßig, ohne Krümmung. Sehr viele Sachverhalte (Kosten pro Stück, Weg bei konstanter Geschwindigkeit, Umrechnungen) lassen sich so beschreiben. In dieser Karte lernst du, eine Geradengleichung aufzustellen, zu zeichnen und zwischen Geraden zu vergleichen.\n' +
    '\n' +
    '**Die Normalform $y = mx + b$**\n' +
    'Jede nicht-senkrechte Gerade lässt sich schreiben als $y = mx + b$ mit zwei festen Zahlen $m$ und $b$:\n' +
    '• $b$ ist der **y-Achsenabschnitt**: der $y$-Wert an der Stelle $x = 0$, also der Punkt $(0,\\ b)$, an dem die Gerade die senkrechte Achse trifft. $b$ verschiebt die Gerade nach oben oder unten.\n' +
    '• $m$ ist die **Steigung**: Erhöht man $x$ um $1$, ändert sich $y$ um $m$. Bei $m > 0$ steigt die Gerade, bei $m < 0$ fällt sie, bei $m = 0$ verläuft sie waagerecht. Je größer $|m|$, desto steiler.\n' +
    'Zusammen legen $m$ (Richtung) und $b$ (Höhe) die Lage der Geraden eindeutig fest.\n' +
    '\n' +
    '**Steigung aus zwei Punkten**\n' +
    'Kennt man zwei Punkte $(x_1, y_1)$ und $(x_2, y_2)$ der Geraden, ist die Steigung der Höhenunterschied geteilt durch den Rechtsunterschied:\n' +
    '$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$  (mit $x_1 \\neq x_2$).\n' +
    'Anschaulich: „wie viel hoch pro wie viel rechts". Die Reihenfolge der Punkte ist egal, solange man oben und unten gleich herum subtrahiert.\n' +
    '\n' +
    '**Gerade durch zwei Punkte aufstellen**\n' +
    '1. Steigung $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ berechnen.\n' +
    '2. Einen der Punkte in $y = mx + b$ einsetzen und nach $b$ auflösen.\n' +
    '3. $m$ und $b$ in $y = mx + b$ einsetzen – fertig.\n' +
    '\n' +
    '**Punkt-Steigungs-Form**\n' +
    'Kennt man die Steigung $m$ und nur **einen** Punkt $(x_1, y_1)$, geht es ohne $b$ direkt über\n' +
    '$y - y_1 = m\\,(x - x_1)$.\n' +
    'Ausmultiplizieren und nach $y$ auflösen liefert wieder die Normalform.\n' +
    '\n' +
    '**Nullstelle (Schnittpunkt mit der $x$-Achse)**\n' +
    'Die Nullstelle ist die Stelle $x$, an der $y = 0$ ist. Man setzt $0 = mx + b$ und löst auf: $x = -\\dfrac{b}{m}$ (für $m \\neq 0$). Der Schnittpunkt mit der $x$-Achse ist dann $\\left(-\\frac{b}{m},\\ 0\\right)$.\n' +
    '\n' +
    '**Skizzieren in zwei Schritten**\n' +
    '1. **Startpunkt** $(0,\\ b)$ auf der $y$-Achse einzeichnen.\n' +
    '2. **Steigungsdreieck** anlegen: von dort $1$ nach rechts und $m$ nach oben (bei $m < 0$ nach unten); schreibt man $m = \\frac{p}{q}$ als Bruch, geht man $q$ nach rechts und $p$ nach oben. Den so erreichten zweiten Punkt mit dem Startpunkt verbinden und durchziehen.\n' +
    '\n' +
    '**Lagebeziehungen zweier Geraden**\n' +
    '| Beziehung | Bedingung |\n' +
    '|---|---|\n' +
    '| parallel | $m_1 = m_2$ (gleiche Steigung) |\n' +
    '| senkrecht (orthogonal) | $m_1 \\cdot m_2 = -1$ |\n' +
    '| schneiden sich | $m_1 \\neq m_2$ |\n' +
    'Bei Senkrechtigkeit ist die eine Steigung der **negative Kehrwert** der anderen: $m_2 = -\\dfrac{1}{m_1}$.\n' +
    '\n' +
    '**Sonderfälle**\n' +
    '• **Waagerechte Gerade** $y = c$: Steigung $m = 0$, jeder Punkt hat denselben $y$-Wert $c$. Sie ist eine Funktion.\n' +
    '• **Senkrechte Gerade** $x = c$: alle Punkte haben dasselbe $x$. Hier ist die Steigung **nicht definiert** (man teilte durch $x_2 - x_1 = 0$), und es ist **keine Funktion** $y = f(x)$, weil über einer Stelle unendlich viele $y$-Werte lägen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Steigung verkehrt herum als $\\frac{x_2 - x_1}{y_2 - y_1}$ bilden; bei der Punkt-Steigungs-Form das Minus-Vorzeichen $-y_1$ bzw. $-x_1$ vergessen; das Vorzeichen von $b$ beim Ablesen verwechseln; einen senkrechten „Strich" $x = c$ als $y = \\ldots$ schreiben wollen.',
  beispiele: [
    {
      szenario: 'Steigung & Achsenabschnitt ablesen',
      beispiele: [
        '**Aufgabe:** Bestimme Steigung und $y$-Achsenabschnitt von $y = -2x + 1$.\n**Lösung:** Vergleich mit $y = mx + b$: der Faktor vor $x$ ist $m$, das alleinstehende Glied ist $b$.\n**Ergebnis:** $m = -2$ (fallend, steil), $b = 1$ (schneidet die $y$-Achse bei $(0,1)$).',
        '**Aufgabe:** Bestimme $m$ und $b$ von $y = \\frac{1}{2}x - 2$.\n**Lösung:** Faktor vor $x$: $m = \\frac{1}{2}$. Konstantes Glied: $b = -2$.\n**Ergebnis:** $m = \\frac{1}{2}$ (flach steigend), $b = -2$ (Achsenpunkt $(0,-2)$).',
        '**Aufgabe:** Bringe $2y - 4x = 6$ in die Form $y = mx + b$ und lies $m, b$ ab.\n**Lösung:** $2y = 4x + 6$, dann durch $2$ teilen: $y = 2x + 3$.\n**Ergebnis:** $m = 2$, $b = 3$.',
      ],
    },
    {
      szenario: 'Gerade durch zwei Punkte',
      beispiele: [
        '**Aufgabe:** Gerade durch $A(1, 3)$ und $B(3, 7)$.\n**Lösung:** $m = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$. Einsetzen von $A$: $3 = 2 \\cdot 1 + b \\Rightarrow b = 1$.\n**Ergebnis:** $y = 2x + 1$.',
        '**Aufgabe:** Gerade durch $A(-1, 4)$ und $B(2, -2)$.\n**Lösung:** $m = \\frac{-2 - 4}{2 - (-1)} = \\frac{-6}{3} = -2$. Einsetzen von $B$: $-2 = -2 \\cdot 2 + b \\Rightarrow -2 = -4 + b \\Rightarrow b = 2$.\n**Ergebnis:** $y = -2x + 2$.',
        '**Aufgabe:** Lies die Geradengleichung aus dem Graphen ab: die Gerade geht durch $(0, 2)$ und $(8, 0)$.\n**Lösung:** $y$-Achsenabschnitt direkt: $b = 2$. Steigung $m = \\frac{0 - 2}{8 - 0} = -\\frac{2}{8} = -\\frac{1}{4}$.\n**Ergebnis:** $y = -\\frac{1}{4}x + 2$.',
      ],
    },
    {
      szenario: 'Punkt-Steigungs-Form & Nullstelle',
      beispiele: [
        '**Aufgabe:** Gerade mit Steigung $m = 3$ durch $P(2, 1)$.\n**Lösung:** Punkt-Steigungs-Form $y - y_1 = m(x - x_1)$: $y - 1 = 3(x - 2) = 3x - 6$. Auflösen: $y = 3x - 5$.\n**Ergebnis:** $y = 3x - 5$.',
        '**Aufgabe:** Bestimme die Nullstelle von $y = 2x - 6$.\n**Lösung:** $y = 0$ setzen: $0 = 2x - 6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.\n**Ergebnis:** Nullstelle bei $x = 3$, Schnittpunkt $(3, 0)$.',
        '**Aufgabe:** Bestimme die Nullstelle von $y = -\\frac{1}{4}x + 2$.\n**Lösung:** $0 = -\\frac{1}{4}x + 2 \\Rightarrow \\frac{1}{4}x = 2 \\Rightarrow x = 8$.\n**Ergebnis:** Nullstelle bei $x = 8$, Schnittpunkt $(8, 0)$.',
      ],
    },
    {
      szenario: 'Parallel & senkrecht',
      beispiele: [
        '**Aufgabe:** Gerade durch $P(0, 5)$, die parallel zu $y = 3x - 1$ ist.\n**Lösung:** Parallel heißt gleiche Steigung, also $m = 3$. Durch $P(0,5)$ ist $b = 5$.\n**Ergebnis:** $y = 3x + 5$.',
        '**Aufgabe:** Gerade durch $P(0, 1)$, die senkrecht zu $y = 2x + 4$ steht.\n**Lösung:** Senkrecht: $m_1 m_2 = -1$, also $m_2 = -\\frac{1}{2}$ (negativer Kehrwert von $2$). Durch $P(0,1)$ ist $b = 1$.\n**Ergebnis:** $y = -\\frac{1}{2}x + 1$.',
        '**Aufgabe:** Stehen $y = -2x + 1$ und $y = \\frac{1}{2}x - 2$ senkrecht aufeinander?\n**Lösung:** Produkt der Steigungen: $(-2) \\cdot \\frac{1}{2} = -1$.\n**Ergebnis:** Ja, das Produkt ist $-1$ – die Geraden sind orthogonal.',
      ],
    },
    {
      szenario: 'Schnittpunkt & Sonderfälle',
      beispiele: [
        '**Aufgabe:** Schnittpunkt von $y = -2x + 1$ und $y = \\frac{1}{2}x - 2$.\n**Lösung:** Gleichsetzen: $-2x + 1 = \\frac{1}{2}x - 2 \\Rightarrow 3 = \\frac{5}{2}x \\Rightarrow x = \\frac{6}{5}$. Einsetzen: $y = -2 \\cdot \\frac{6}{5} + 1 = -\\frac{12}{5} + \\frac{5}{5} = -\\frac{7}{5}$.\n**Ergebnis:** Schnittpunkt $\\left(\\frac{6}{5},\\ -\\frac{7}{5}\\right)$.',
        '**Aufgabe:** Beschreibe die Gerade $y = 4$ und skizziere sie.\n**Lösung:** Steigung $m = 0$, also waagerecht; jeder Punkt hat $y = 4$, z. B. $(-3,4), (0,4), (2,4)$. Man zeichnet eine waagerechte Linie auf Höhe $4$.\n**Ergebnis:** Waagerechte Gerade durch alle Punkte mit $y = 4$ (eine Funktion mit konstantem Wert).',
        '**Aufgabe:** Warum ist $x = 3$ keine Funktion und welche Steigung hat sie?\n**Lösung:** Alle Punkte haben $x = 3$, aber jedes beliebige $y$, z. B. $(3,0), (3,1), (3,5)$. Über der Stelle $x = 3$ lägen unendlich viele $y$-Werte, das verletzt die Funktionsregel „ein $x$ → ein $y$". Die Steigung verlangte $x_2 - x_1 = 0$ im Nenner.\n**Ergebnis:** Senkrechte Gerade, Steigung **nicht definiert**, **keine** Funktion $y = f(x)$.',
      ],
    },
  ],
}
