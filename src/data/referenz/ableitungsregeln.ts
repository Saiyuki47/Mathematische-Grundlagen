import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'ableitungsregeln',
  titel: 'Ableitungsregeln',
  inhalt:
    '**Worum geht es?**\n' +
    'Statt jede Ableitung mühsam über den Grenzwert des Differenzenquotienten auszurechnen, setzt man komplizierte Funktionen aus einfachen Bausteinen zusammen und leitet mit **Regeln** ab. Wer diese fünf Regeln plus die Standard-Ableitungen beherrscht, kann jede „normale" Funktion ableiten.\n' +
    '\n' +
    '**Faktor- und Summenregel**\n' +
    'Ein konstanter Faktor bleibt stehen, Summen leitet man gliedweise ab: $(c\\,f)\' = c\\,f\'$ und $(f \\pm g)\' = f\' \\pm g\'$. Das erlaubt, Polynome Term für Term abzuleiten.\n' +
    '\n' +
    '**Produktregel**\n' +
    'Für ein Produkt zweier Funktionen: $(f\\,g)\' = f\'\\,g + f\\,g\'$ — „erste abgeleitet mal zweite, plus erste mal zweite abgeleitet". Wichtig: $(f\\,g)\' \\neq f\'\\,g\'$!\n' +
    '\n' +
    '**Quotientenregel**\n' +
    'Für einen Bruch: $\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'\\,g - f\\,g\'}{g^2}$ (für $g \\neq 0$). Merkhilfe: „(oben abgeleitet mal unten minus oben mal unten abgeleitet) durch unten zum Quadrat". Die Reihenfolge im Zähler (Minus!) ist entscheidend.\n' +
    '\n' +
    '**Kettenregel**\n' +
    'Für eine Verkettung $f(x) = g(h(x))$ (äußere Funktion $g$, innere $h$): $f\'(x) = g\'(h(x)) \\cdot h\'(x)$ — **äußere Ableitung mal innere Ableitung** („nachdifferenzieren"). Das ist die am häufigsten gebrauchte Regel; man muss zuverlässig erkennen, was innen und was außen ist.\n' +
    '\n' +
    '**Ableitung der Umkehrfunktion**\n' +
    'Ist $f$ umkehrbar und differenzierbar mit $f\'(x) \\neq 0$, dann gilt für $y = f(x)$: $(f^{-1})\'(y) = \\dfrac{1}{f\'(x)} = \\dfrac{1}{f\'(f^{-1}(y))}$. Damit leitet man z. B. $\\ln$ aus $\\exp$ oder $\\sqrt{\\ }$ aus dem Quadrieren her.\n' +
    '\n' +
    '**Überblick**\n' +
    '| Regel | Formel |\n' +
    '|---|---|\n' +
    '| Faktor | $(c f)\' = c f\'$ |\n' +
    '| Summe | $(f \\pm g)\' = f\' \\pm g\'$ |\n' +
    '| Produkt | $(f g)\' = f\' g + f g\'$ |\n' +
    '| Quotient | $\\left(\\frac fg\\right)\' = \\frac{f\' g - f g\'}{g^2}$ |\n' +
    '| Kette | $(g(h(x)))\' = g\'(h(x))\\, h\'(x)$ |\n' +
    '\n' +
    '**Wie geht man vor?**\n' +
    'Erst die **äußerste Struktur** erkennen (Summe? Produkt? Quotient? Verkettung?) und die passende Regel wählen; dann die entstehenden Teil-Ableitungen einzeln bestimmen — oft muss man mehrere Regeln schachteln. Bei Verkettungen die Kettenregel so oft anwenden, wie es Schalen gibt.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Produkt-/Quotientenregel mit $f\'g\'$ „vereinfachen"; das Minus in der Quotientenregel verdrehen; bei der Kettenregel die **innere** Ableitung vergessen (z. B. $(\\sin(2x))\' = 2\\cos(2x)$, nicht $\\cos(2x)$).',
  beispiele: [
    {
      szenario: 'Produkt- & Quotientenregel',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = x^2 \\cdot e^x$ ab.\n**Lösung:** Produktregel mit $f_1=x^2$ ($f_1\'=2x$), $f_2=e^x$ ($f_2\'=e^x$): $2x\\,e^x + x^2 e^x$.\n**Ergebnis:** $f\'(x) = (x^2 + 2x)\\,e^x$.',
        '**Aufgabe:** Leite $f(x) = \\dfrac{x}{x^2+1}$ ab.\n**Lösung:** Quotientenregel: $\\frac{1\\cdot(x^2+1) - x\\cdot 2x}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$.\n**Ergebnis:** $f\'(x) = \\frac{1-x^2}{(x^2+1)^2}$.',
        '**Aufgabe:** Leite $f(x) = x \\ln x$ ab.\n**Lösung:** Produktregel: $1\\cdot\\ln x + x\\cdot\\frac1x = \\ln x + 1$.\n**Ergebnis:** $f\'(x) = \\ln x + 1$.',
      ],
    },
    {
      szenario: 'Kettenregel',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = (3x^2 + 1)^5$ ab.\n**Lösung:** Außen $u^5$ ($\\to 5u^4$), innen $3x^2+1$ ($\\to 6x$): $5(3x^2+1)^4 \\cdot 6x$.\n**Ergebnis:** $f\'(x) = 30x\\,(3x^2+1)^4$.',
        '**Aufgabe:** Leite $f(x) = e^{-x^2}$ ab.\n**Lösung:** Außen $e^u$ ($\\to e^u$), innen $-x^2$ ($\\to -2x$): $e^{-x^2}\\cdot(-2x)$.\n**Ergebnis:** $f\'(x) = -2x\\,e^{-x^2}$.',
        '**Aufgabe:** Leite $f(x) = \\sqrt{1 + x^2}$ ab.\n**Lösung:** Außen $\\sqrt u$ ($\\to \\frac{1}{2\\sqrt u}$), innen $1+x^2$ ($\\to 2x$): $\\frac{2x}{2\\sqrt{1+x^2}}$.\n**Ergebnis:** $f\'(x) = \\frac{x}{\\sqrt{1+x^2}}$.',
      ],
    },
    {
      szenario: 'Regeln kombinieren & Umkehrregel',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = x^2 \\sin(3x)$ ab.\n**Lösung:** Produktregel; Kettenregel für $\\sin(3x)$ (Ableitung $3\\cos(3x)$): $2x\\sin(3x) + x^2\\cdot 3\\cos(3x)$.\n**Ergebnis:** $f\'(x) = 2x\\sin(3x) + 3x^2\\cos(3x)$.',
        '**Aufgabe:** Leite den natürlichen Logarithmus per Umkehrregel her ($f(x)=e^x$, $f^{-1}=\\ln$).\n**Lösung:** $(f^{-1})\'(y) = \\frac{1}{f\'(x)} = \\frac{1}{e^x} = \\frac{1}{y}$ (da $y=e^x$).\n**Ergebnis:** $(\\ln y)\' = \\frac1y$.',
        '**Aufgabe:** Leite $f(x) = \\dfrac{e^x}{x^2}$ ab.\n**Lösung:** Quotientenregel: $\\frac{e^x\\cdot x^2 - e^x\\cdot 2x}{x^4} = \\frac{e^x(x-2)}{x^3}$.\n**Ergebnis:** $f\'(x) = \\frac{e^x(x-2)}{x^3}$.',
      ],
    },
  ],
}
