import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'differenzierbarkeit',
  titel: 'Differenzierbarkeit & Ableitungsbegriff',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Ableitung** misst, wie schnell sich eine Funktion an einer Stelle ändert — die **momentane Änderungsrate**. Geometrisch ist sie die **Steigung der Tangente** an den Graphen, physikalisch z. B. die Momentangeschwindigkeit (Ableitung des Weges nach der Zeit).\n' +
    '\n' +
    '**Vom Differenzenquotienten zur Ableitung**\n' +
    'Die Steigung zwischen zwei Punkten (Sekante) ist der **Differenzenquotient** $\\dfrac{f(x) - f(x_0)}{x - x_0}$. Lässt man den zweiten Punkt gegen $x_0$ wandern, wird aus der Sekante die Tangente. Die **Ableitung** ist dieser Grenzwert:\n' +
    '$f\'(x_0) = \\lim_{x \\to x_0} \\dfrac{f(x) - f(x_0)}{x - x_0} = \\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h}.$\n' +
    'Existiert dieser Grenzwert (als endliche Zahl), heißt $f$ in $x_0$ **differenzierbar**. Schreibweisen: $f\'(x)$, $\\frac{df}{dx}$, $\\dot f$ (nach der Zeit).\n' +
    '\n' +
    '**Tangentengleichung**\n' +
    'Die Tangente an $f$ im Punkt $(x_0, f(x_0))$ ist die Gerade $y = f(x_0) + f\'(x_0)\\,(x - x_0)$. Sie schmiegt sich dem Graphen dort am besten an (lineare Näherung).\n' +
    '\n' +
    '**Differenzierbar ⇒ stetig (nicht umgekehrt!)**\n' +
    'Ist $f$ in $x_0$ differenzierbar, dann ist $f$ dort auch **stetig**. Die Umkehrung gilt NICHT: Eine stetige Funktion kann Knicke haben. Standardbeispiel: $f(x) = |x|$ ist in $0$ stetig, aber **nicht differenzierbar** — der linksseitige Grenzwert des Differenzenquotienten ist $-1$, der rechtsseitige $+1$, sie stimmen nicht überein (Knick). Nicht differenzierbar ist eine Funktion typisch an **Knicken**, **Sprüngen** und **senkrechten Tangenten**.\n' +
    '\n' +
    '**Einseitige & höhere Ableitungen**\n' +
    'Man kann links- und rechtsseitige Ableitungen getrennt betrachten; $f$ ist differenzierbar, wenn beide existieren und gleich sind. Leitet man $f\'$ erneut ab, entsteht die **zweite Ableitung** $f\'\'$ (Änderung der Steigung → Krümmung), allgemein die $n$-te Ableitung $f^{(n)}$.\n' +
    '\n' +
    '**Wie leitet man mit der Definition ab?**\n' +
    '1. Differenzenquotienten $\\frac{f(x_0+h)-f(x_0)}{h}$ hinschreiben.\n' +
    '2. Zähler ausmultiplizieren/vereinfachen, sodass sich ein Faktor $h$ herauskürzen lässt.\n' +
    '3. Nach dem Kürzen $h \\to 0$ einsetzen.\n' +
    '(In der Praxis nutzt man danach die Ableitungsregeln — siehe eigene Karten.)\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Stetigkeit mit Differenzierbarkeit gleichsetzen; im Differenzenquotienten $h$ zu früh $=0$ setzen (ergibt $\\frac00$); bei Betrags-/abschnittsweisen Funktionen die einseitigen Ableitungen nicht getrennt prüfen.',
  beispiele: [
    {
      szenario: 'Ableitung über die Definition',
      beispiele: [
        '**Aufgabe:** Bestimme $f\'(x)$ für $f(x) = x^2$ mit der Definition.\n**Lösung:** $\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x$.\n**Ergebnis:** $f\'(x) = 2x$.',
        '**Aufgabe:** Bestimme $f\'(x)$ für $f(x) = \\frac1x$ ($x\\neq 0$).\n**Lösung:** $\\frac{1}{h}\\left(\\frac{1}{x+h} - \\frac1x\\right) = \\frac{1}{h}\\cdot\\frac{x-(x+h)}{x(x+h)} = \\frac{-1}{x(x+h)} \\to -\\frac{1}{x^2}$.\n**Ergebnis:** $f\'(x) = -\\frac{1}{x^2}$.',
        '**Aufgabe:** Bestimme $f\'(x)$ für $f(x) = \\sqrt{x}$ ($x>0$).\n**Lösung:** $\\frac{\\sqrt{x+h}-\\sqrt x}{h}$ mit $(\\sqrt{x+h}+\\sqrt x)$ erweitern: $\\frac{h}{h(\\sqrt{x+h}+\\sqrt x)} \\to \\frac{1}{2\\sqrt x}$.\n**Ergebnis:** $f\'(x) = \\frac{1}{2\\sqrt x}$.',
      ],
    },
    {
      szenario: 'Tangente & Näherung',
      beispiele: [
        '**Aufgabe:** Tangente an $f(x) = x^2$ in $x_0 = 3$.\n**Lösung:** $f(3)=9$, $f\'(x)=2x$, $f\'(3)=6$. Gerade $y = 9 + 6(x-3)$.\n**Ergebnis:** $y = 6x - 9$.',
        '**Aufgabe:** Näherungswert für $f(x)=\\sqrt x$ bei $x=4{,}1$ über die Tangente in $x_0=4$.\n**Lösung:** $f(4)=2$, $f\'(4)=\\frac{1}{2\\cdot2}=\\frac14$; $y = 2 + \\frac14(x-4)$, bei $x=4{,}1$: $2 + 0{,}025$.\n**Ergebnis:** $\\approx 2{,}025$.',
        '**Aufgabe:** Wo hat $f(x)=x^2$ eine waagerechte Tangente?\n**Lösung:** $f\'(x)=2x=0 \\Rightarrow x=0$.\n**Ergebnis:** in $x=0$ (Scheitel).',
      ],
    },
    {
      szenario: 'Nicht differenzierbar erkennen',
      beispiele: [
        '**Aufgabe:** Ist $f(x)=|x|$ in $0$ differenzierbar?\n**Lösung:** Rechtsseitig $\\frac{|h|}{h}=+1$, linksseitig $-1$ — verschieden.\n**Ergebnis:** Nein (Knick), aber stetig.',
        '**Aufgabe:** Ist $f$ mit $f(x)=x^2$ für $x\\ge0$ und $f(x)=-x$ für $x<0$ in $0$ differenzierbar?\n**Lösung:** Rechtsseitige Ableitung $0$ (von $x^2$), linksseitige $-1$ (von $-x$) — verschieden.\n**Ergebnis:** Nein.',
        '**Aufgabe:** Ist $f(x)=\\sqrt{|x|}$ in $0$ differenzierbar?\n**Lösung:** Der Differenzenquotient $\\frac{\\sqrt{|h|}}{h}$ geht dem Betrag nach gegen $\\pm\\infty$ (senkrechte Tangente).\n**Ergebnis:** Nein.',
      ],
    },
  ],
}
