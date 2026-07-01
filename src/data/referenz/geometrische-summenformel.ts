import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'geometrische-summenformel',
  titel: 'Geometrische & harmonische Reihe',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **geometrische Folge** entsteht, indem man immer wieder mit demselben Faktor $q$ multipliziert: $1, q, q^2, q^3, \\dots$. Summiert man diese Glieder, erhält man eine **geometrische Summe** (endlich) bzw. **geometrische Reihe** (unendlich). Sie steckt überall dort, wo etwas prozentual wächst oder zerfällt — Zinsen, Ratenkredite, radioaktiver Zerfall, periodische Dezimalzahlen.\n' +
    '\n' +
    '**Die endliche geometrische Summe**\n' +
    'Für $q \\neq 1$ gilt die zentrale Formel:\n' +
    '$\\sum_{k=0}^{n} q^k = 1 + q + q^2 + \\dots + q^n = \\dfrac{1 - q^{\\,n+1}}{1 - q}$\n' +
    'Herleitung (merken!): Man setzt $S = 1 + q + \\dots + q^n$, bildet $qS = q + q^2 + \\dots + q^{n+1}$ und subtrahiert: $S - qS = 1 - q^{n+1}$, also $S(1-q) = 1 - q^{n+1}$. Für $q = 1$ sind alle Summanden gleich $1$, also $\\sum_{k=0}^n 1 = n+1$.\n' +
    '\n' +
    '**Die unendliche geometrische Reihe**\n' +
    'Lässt man $n \\to \\infty$ laufen, entscheidet der Betrag von $q$:\n' +
    '$\\sum_{k=0}^{\\infty} q^k = \\dfrac{1}{1 - q} \\quad$ falls $\\lvert q\\rvert < 1$.\n' +
    'Denn für $\\lvert q\\rvert < 1$ ist $q^{\\,n+1} \\to 0$, und in der endlichen Formel bleibt $\\frac{1}{1-q}$ übrig. Für $\\lvert q\\rvert \\ge 1$ gehen die Glieder nicht gegen $0$, die Reihe **divergiert**. Beginnt die Summe erst bei $k=1$, zieht man das Glied $k=0$ ($=1$) ab: $\\sum_{k=1}^\\infty q^k = \\frac{q}{1-q}$.\n' +
    '\n' +
    '**Konvergenzübersicht**\n' +
    '| Bereich von $q$ | endliche Summe | unendliche Reihe |\n' +
    '|---|---|---|\n' +
    '| $\\lvert q\\rvert < 1$ | $\\frac{1-q^{n+1}}{1-q}$ | konvergiert gegen $\\frac{1}{1-q}$ |\n' +
    '| $q = 1$ | $n+1$ | divergiert ($\\to \\infty$) |\n' +
    '| $\\lvert q\\rvert \\ge 1,\\ q\\neq 1$ | $\\frac{1-q^{n+1}}{1-q}$ | divergiert |\n' +
    '\n' +
    '**Die harmonische Reihe**\n' +
    'Ein wichtiges Warnbeispiel: $\\sum_{k=1}^{\\infty} \\dfrac{1}{k} = 1 + \\tfrac12 + \\tfrac13 + \\dots$ **divergiert**, obwohl die Glieder gegen $0$ gehen. Beweisidee (Bündelung): $\\tfrac13+\\tfrac14 > \\tfrac14+\\tfrac14 = \\tfrac12$, dann $\\tfrac15+\\dots+\\tfrac18 > \\tfrac12$ usw. — man kann unendlich oft $\\tfrac12$ dazupacken. Das zeigt: „Glieder $\\to 0$" ist **notwendig, aber nicht hinreichend** für Konvergenz.\n' +
    '\n' +
    '**Allgemeine p-Reihe**\n' +
    'Die harmonische Reihe ist der Grenzfall der **p-Reihe** $\\sum_{k=1}^\\infty \\frac{1}{k^p}$: sie **konvergiert genau dann, wenn p > 1**. Für $p \\le 1$ (insbesondere $p=1$) divergiert sie. Berühmter Wert: $\\sum_{k=1}^\\infty \\frac{1}{k^2} = \\frac{\\pi^2}{6}$ (Basler Problem).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Die Formel $\\frac{1}{1-q}$ ohne die Bedingung $\\lvert q\\rvert<1$ anwenden; den Startindex verwechseln (bei $k=1$ statt $k=0$ das erste Glied vergessen); glauben, die harmonische Reihe konvergiere, weil $\\frac1k \\to 0$.',
  beispiele: [
    {
      szenario: 'Endliche geometrische Summe',
      beispiele: [
        '**Aufgabe:** Berechne $\\sum_{k=0}^{5} 2^k = 1+2+4+8+16+32$.\n**Lösung:** Formel mit $q=2$, $n=5$: $\\frac{1-2^{6}}{1-2} = \\frac{1-64}{-1} = 63$.\n**Ergebnis:** $63$.',
        '**Aufgabe:** Berechne $\\sum_{k=0}^{4} \\left(\\tfrac12\\right)^k$.\n**Lösung:** $q=\\tfrac12$, $n=4$: $\\frac{1-(1/2)^{5}}{1-1/2} = \\frac{1 - 1/32}{1/2} = 2\\cdot\\frac{31}{32} = \\frac{31}{16}$.\n**Ergebnis:** $\\frac{31}{16} = 1{,}9375$.',
        '**Aufgabe:** Ein Guthaben wächst jährlich um $5\\%$ (Faktor $q=1{,}05$). Welchen Gesamtwert haben drei Einzahlungen von je $1000$€ zu Jahresbeginn nach $3$ Jahren?\n**Lösung:** $1000\\,(1{,}05 + 1{,}05^2 + 1{,}05^3) = 1000\\cdot 1{,}05\\cdot\\frac{1-1{,}05^{3}}{1-1{,}05}$.\n**Ergebnis:** $\\approx 3310{,}13$€.',
      ],
    },
    {
      szenario: 'Unendliche geometrische Reihe',
      beispiele: [
        '**Aufgabe:** Berechne $\\sum_{k=0}^{\\infty} \\left(\\tfrac13\\right)^k$.\n**Lösung:** $\\lvert q\\rvert = \\tfrac13 < 1$, also $\\frac{1}{1-1/3} = \\frac{1}{2/3} = \\frac32$.\n**Ergebnis:** $\\frac32$.',
        '**Aufgabe:** Berechne $\\sum_{k=1}^{\\infty} \\left(\\tfrac12\\right)^k$ (Start bei $k=1$).\n**Lösung:** $\\frac{q}{1-q}$ mit $q=\\tfrac12$: $\\frac{1/2}{1/2} = 1$. (Kontrolle: $\\tfrac12+\\tfrac14+\\tfrac18+\\dots = 1$.)\n**Ergebnis:** $1$.',
        '**Aufgabe:** Schreibe $0{,}\\overline{3} = 0{,}333\\dots$ als Bruch.\n**Lösung:** $0{,}\\overline3 = \\sum_{k=1}^\\infty 3\\cdot(0{,}1)^k = 3\\cdot\\frac{0{,}1}{1-0{,}1} = 3\\cdot\\frac{1}{9}$.\n**Ergebnis:** $\\frac13$.',
      ],
    },
    {
      szenario: 'Harmonische Reihe & p-Reihe',
      beispiele: [
        '**Aufgabe:** Konvergiert $\\sum_{k=1}^{\\infty} \\frac{1}{k}$?\n**Lösung:** Nein — die harmonische Reihe divergiert (Bündelungsargument), obwohl $\\frac1k \\to 0$.\n**Ergebnis:** divergent.',
        '**Aufgabe:** Konvergiert $\\sum_{k=1}^{\\infty} \\frac{1}{k^2}$?\n**Lösung:** p-Reihe mit $p=2>1$, also konvergent (Wert $\\frac{\\pi^2}{6}$).\n**Ergebnis:** konvergent.',
        '**Aufgabe:** Konvergiert $\\sum_{k=1}^{\\infty} \\frac{1}{\\sqrt{k}}$?\n**Lösung:** Das ist $\\sum \\frac{1}{k^{1/2}}$, also $p=\\tfrac12 \\le 1$.\n**Ergebnis:** divergent.',
      ],
    },
  ],
}
