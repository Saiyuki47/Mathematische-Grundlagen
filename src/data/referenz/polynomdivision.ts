import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'polynomdivision',
  titel: 'Polynomdivision',
  inhalt:
    '**Worum geht es?**\n' +
    'Polynomdivision ist das schriftliche Teilen zweier Polynome — genau wie die schriftliche Division von Zahlen, nur mit $x$-Termen. Man braucht sie, um **rationale Funktionen** (Bruch aus zwei Polynomen) zu vereinfachen, **Asymptoten** zu finden, **Grenzwerte** vom Typ $\\frac00$ oder $\\frac\\infty\\infty$ aufzulösen und aus einer bekannten **Nullstelle** einen Linearfaktor abzuspalten.\n' +
    '\n' +
    '**Das Ergebnis hat immer diese Form**\n' +
    'Teilt man ein Polynom $p(x)$ durch $q(x)$ (mit $q \\neq 0$), so gibt es eindeutig ein **Quotientenpolynom** $s(x)$ und ein **Restpolynom** $r(x)$ mit\n' +
    '$\\dfrac{p(x)}{q(x)} = s(x) + \\dfrac{r(x)}{q(x)}, \\qquad \\deg r < \\deg q.$\n' +
    'Die Division „geht auf" (Rest $r = 0$) genau dann, wenn $q$ ein Teiler von $p$ ist.\n' +
    '\n' +
    '**Das Verfahren Schritt für Schritt**\n' +
    '1. Beide Polynome nach **fallenden** Potenzen ordnen; fehlende Potenzen mit $0$ auffüllen (Platzhalter).\n' +
    '2. **Höchsten** Term von $p$ durch den höchsten Term von $q$ teilen → erstes Glied von $s(x)$.\n' +
    '3. Dieses Glied mit dem **ganzen** $q(x)$ multiplizieren und von $p(x)$ **subtrahieren**.\n' +
    '4. Mit dem entstandenen Rest genauso weitermachen, bis dessen Grad kleiner als $\\deg q$ ist.\n' +
    '5. Was übrig bleibt, ist der Rest $r(x)$; als $\\frac{r(x)}{q(x)}$ anhängen.\n' +
    '\n' +
    '**Linearfaktor abspalten**\n' +
    'Ist $x_0$ eine **Nullstelle** von $p$ (also $p(x_0)=0$), dann ist $(x - x_0)$ ein Teiler, und die Polynomdivision liefert $p(x) = (x - x_0)\\cdot s(x)$ mit einem um einen Grad kleineren $s(x)$. So knackt man Polynome höheren Grades: eine Nullstelle raten, abspalten, mit dem Rest weitermachen.\n' +
    '\n' +
    '**Anwendung: Asymptoten & Grenzwerte**\n' +
    'Ist $\\deg p \\ge \\deg q$, zerlegt die Polynomdivision die rationale Funktion in ein Polynom $s(x)$ plus einen **echt gebrochenen** Rest $\\frac{r(x)}{q(x)} \\to 0$ für $x\\to\\pm\\infty$. Dann ist $s(x)$ die **Asymptote** (Gerade, Parabel …). Bei einem Grenzwert vom Typ $\\frac00$ an einer Stelle $x_0$ steckt in Zähler und Nenner der Faktor $(x-x_0)$ — abspalten und **kürzen** löst den Ausdruck auf.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Fehlende Potenzen nicht als $0$ mitschreiben (verrutschte Spalten); beim Subtrahieren das Vorzeichen des ganzen Produkts vergessen; den Rest $\\frac{r}{q}$ am Ende weglassen.',
  beispiele: [
    {
      szenario: 'Division mit Rest',
      beispiele: [
        '**Aufgabe:** Berechne $(x^2 + 3x + 5) : (x + 1)$.\n**Lösung:** $x^2 : x = x$; $x\\cdot(x+1) = x^2+x$; Rest $2x+5$. Dann $2x : x = 2$; $2\\cdot(x+1)=2x+2$; Rest $3$.\n**Ergebnis:** $x + 2 + \\dfrac{3}{x+1}$.',
        '**Aufgabe:** Berechne $(2x^3 - 3x + 1) : (x - 2)$.\n**Lösung:** Fehlendes $x^2$ als $0$: $2x^3 : x = 2x^2$, Rest $4x^2 - 3x$; $4x^2 : x = 4x$, Rest $5x + 1$; $5x : x = 5$, Rest $11$.\n**Ergebnis:** $2x^2 + 4x + 5 + \\dfrac{11}{x-2}$.',
        '**Aufgabe:** Bestimme die schräge Asymptote von $f(x) = \\dfrac{x^2 + 1}{x - 1}$.\n**Lösung:** $(x^2+1):(x-1) = x + 1 + \\frac{2}{x-1}$; der Rest $\\frac{2}{x-1}\\to 0$.\n**Ergebnis:** Asymptote $y = x + 1$.',
      ],
    },
    {
      szenario: 'Nullstelle abspalten',
      beispiele: [
        '**Aufgabe:** $x_0 = 2$ ist Nullstelle von $p(x) = x^3 - 3x^2 + 4$. Faktorisiere.\n**Lösung:** $(x^3-3x^2+0x+4):(x-2) = x^2 - x - 2$. Weiter: $x^2-x-2 = (x-2)(x+1)$.\n**Ergebnis:** $p(x) = (x-2)^2 (x+1)$.',
        '**Aufgabe:** Zerlege $p(x) = x^3 - 7x + 6$ (eine Nullstelle ist $x_0 = 1$).\n**Lösung:** $(x^3+0x^2-7x+6):(x-1) = x^2 + x - 6 = (x+3)(x-2)$.\n**Ergebnis:** $p(x) = (x-1)(x-2)(x+3)$.',
        '**Aufgabe:** Ist $(x+2)$ ein Teiler von $p(x)=x^3+2x^2-x-2$?\n**Lösung:** $p(-2) = -8+8+2-2 = 0$, also ja. $(x^3+2x^2-x-2):(x+2) = x^2 - 1$.\n**Ergebnis:** $p(x) = (x+2)(x-1)(x+1)$.',
      ],
    },
    {
      szenario: 'Grenzwert vom Typ 0/0',
      beispiele: [
        '**Aufgabe:** $\\lim_{x\\to 1} \\dfrac{x^2 - 1}{x - 1}$.\n**Lösung:** Typ $\\frac00$; $x^2-1 = (x-1)(x+1)$, kürzen: $\\lim_{x\\to1}(x+1)$.\n**Ergebnis:** $2$.',
        '**Aufgabe:** $\\lim_{x\\to 2} \\dfrac{x^3 - 8}{x - 2}$.\n**Lösung:** $(x^3-8):(x-2) = x^2 + 2x + 4$; einsetzen $x=2$: $4+4+4$.\n**Ergebnis:** $12$.',
        '**Aufgabe:** $\\lim_{x\\to -1} \\dfrac{x^2 + 3x + 2}{x + 1}$.\n**Lösung:** $x^2+3x+2 = (x+1)(x+2)$, kürzen: $\\lim_{x\\to-1}(x+2)$.\n**Ergebnis:** $1$.',
      ],
    },
  ],
}
