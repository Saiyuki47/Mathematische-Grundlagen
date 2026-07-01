import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'rechenreihenfolge',
  titel: 'Rechenreihenfolge & Klammern',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein Term wie $6:2\\cdot3$ oder $-3^2$ muss für jeden dasselbe bedeuten – sonst käme jede Person zu einem anderen Ergebnis. Deshalb gibt es feste Vorfahrtsregeln, in welcher Reihenfolge man $+,-,\\cdot,:$, Potenzen und Klammern auswertet. Wer sie kennt, rechnet eindeutig und vermeidet die typischen Vorzeichen- und Klammer-Fallen.\n' +
    '\n' +
    '**Die Reihenfolge (von oben nach unten)**\n' +
    '1. **Klammern** zuerst – sie haben immer Vorrang (bei verschachtelten Klammern von innen nach außen).\n' +
    '2. **Potenzen und Wurzeln** ($a^n$, $\\sqrt{a}$).\n' +
    '3. **Punktrechnung**: Multiplikation $\\cdot$ und Division $:$.\n' +
    '4. **Strichrechnung**: Addition $+$ und Subtraktion $-$.\n' +
    'Die beiden Merksätze dazu: **„Klammern vor Potenz vor Punkt vor Strich"** und **„Punktrechnung vor Strichrechnung"**.\n' +
    '\n' +
    '**Gleichrangiges: von links nach rechts**\n' +
    'Stehen mehrere Operationen **derselben** Stufe nebeneinander, wird streng **von links nach rechts** gerechnet. Das ist entscheidend bei gemischtem $\\cdot$ und $:$ sowie bei gemischtem $+$ und $-$: $6:2\\cdot3 = (6:2)\\cdot3 = 9$ (nicht $6:(2\\cdot3)=1$) und $10-4+3 = (10-4)+3 = 9$ (nicht $10-(4+3)=3$).\n' +
    '\n' +
    '**Übersicht der Vorfahrt**\n' +
    '| Stufe | Operationen | Vorrang |\n' +
    '|---|---|---|\n' +
    '| 1 | Klammern $(\\;)$, $[\\;]$ | höchste |\n' +
    '| 2 | Potenz $a^n$, Wurzel $\\sqrt{\\;}$ | hoch |\n' +
    '| 3 | $\\cdot$ und $:$ (Punkt) | mittel |\n' +
    '| 4 | $+$ und $-$ (Strich) | niedrigste |\n' +
    '\n' +
    '**Minus vor der Klammer / Vorzeichenregeln**\n' +
    'Ein Minus (oder ein Faktor) vor einer Klammer wird auf **jeden** Summanden darin verteilt. Beim Auflösen kehren sich die Vorzeichen um: $-(a-b) = -a+b$ und $-(a+b) = -a-b$. Allgemein gilt $c\\cdot(a+b) = c\\cdot a + c\\cdot b$ (Distributivgesetz). Vorzeichen multiplizieren sich nach „gleich $\\Rightarrow +$, ungleich $\\Rightarrow -$": $(-1)\\cdot(-1)=+1$, $(-1)\\cdot(+1)=-1$.\n' +
    '\n' +
    '**Verschachtelte Klammern: innen nach außen**\n' +
    'Bei ineinander liegenden Klammern wertet man zuerst die **innerste** aus und arbeitet sich nach außen vor. Zur besseren Lesbarkeit nimmt man oft abwechselnd $(\\;)$, $[\\;]$, $\\{\\;\\}$. Innerhalb einer Klammer gilt dieselbe Reihenfolge (Potenz vor Punkt vor Strich) erneut.\n' +
    '\n' +
    '**Wie geht man systematisch vor?**\n' +
    'Von der höchsten zur niedrigsten Stufe abarbeiten: erst alle Klammern (innen→außen) auflösen, dann Potenzen/Wurzeln, dann Punktrechnung links→rechts, zuletzt Strichrechnung links→rechts. Im Zweifel **eigene Klammern setzen** – das macht die Reihenfolge sichtbar und schützt vor Fehlern.\n' +
    '\n' +
    '**Typische Fallen**\n' +
    '• $-3^2 = -(3^2) = -9$, aber $(-3)^2 = (-3)\\cdot(-3) = 9$. Die Potenz bindet **stärker** als das Minuszeichen; nur eine Klammer zieht das Minus mit ins Quadrat.\n' +
    '• $6:2\\cdot3 = 9$ (links→rechts), nicht $1$ – Division und Multiplikation sind gleichrangig.\n' +
    '• Ein Bruchstrich wirkt wie eine **unsichtbare Klammer** um Zähler und Nenner: $\\frac{2+4}{3} = \\frac{6}{3} = 2$, nicht $2+\\frac{4}{3}$.\n' +
    '• Bei $-(a-b)$ nicht das Vorzeichen von $b$ vergessen: Ergebnis $-a+b$.',
  beispiele: [
    {
      szenario: 'Punkt vor Strich & von links nach rechts',
      beispiele: [
        '**Aufgabe:** Berechne $6:2\\cdot3$.\n**Lösung:** $\\cdot$ und $:$ sind gleichrangig, also strikt von links nach rechts: zuerst $6:2 = 3$, dann $3\\cdot3 = 9$.\n**Ergebnis:** $9$ (die Lesart $6:(2\\cdot3)=1$ ist falsch).',
        '**Aufgabe:** Berechne $2 + 3\\cdot4 - 5$.\n**Lösung:** Punkt vor Strich: erst $3\\cdot4 = 12$. Dann von links: $2 + 12 - 5 = 14 - 5$.\n**Ergebnis:** $9$.',
        '**Aufgabe:** Berechne $20 - 6 - 4$.\n**Lösung:** Nur Strichrechnung, also von links nach rechts: $20 - 6 = 14$, dann $14 - 4 = 10$.\n**Ergebnis:** $10$ (nicht $20-(6-4)=18$).',
      ],
    },
    {
      szenario: 'Vorzeichen-Fallen bei Potenzen',
      beispiele: [
        '**Aufgabe:** Berechne $-3^2$.\n**Lösung:** Die Potenz bindet stärker als das Minus: $-3^2 = -(3^2) = -(9)$.\n**Ergebnis:** $-9$.',
        '**Aufgabe:** Berechne $(-3)^2$.\n**Lösung:** Die Klammer zieht das Minus mit ins Quadrat: $(-3)\\cdot(-3)$, gleiche Vorzeichen ergeben Plus.\n**Ergebnis:** $9$.',
        '**Aufgabe:** Berechne $-2^4 + (-2)^4$.\n**Lösung:** $-2^4 = -(2^4) = -16$. Dagegen $(-2)^4 = +16$ (gerade Anzahl Minus). Summe: $-16 + 16$.\n**Ergebnis:** $0$.',
      ],
    },
    {
      szenario: 'Minus vor der Klammer',
      beispiele: [
        '**Aufgabe:** Vereinfache $5 - (3 - 8)$.\n**Lösung:** Erst die Klammer: $3 - 8 = -5$. Dann $5 - (-5) = 5 + 5$.\n**Ergebnis:** $10$.',
        '**Aufgabe:** Vereinfache $-2(2x - 4) + x(1 + x)\\cdot(-1)$.\n**Lösung:** Ausmultiplizieren: $-2(2x-4) = -4x + 8$ und $x(1+x)\\cdot(-1) = -(x + x^2) = -x - x^2$. Zusammen: $-4x + 8 - x - x^2 = -x^2 - 5x + 8$.\n**Ergebnis:** $-x^2 - 5x + 8$.',
        '**Aufgabe:** Vereinfache $-\\dfrac{a+b}{c} - \\dfrac{a-b}{c}$.\n**Lösung:** Gleicher Nenner, Zähler zusammenfassen – der zweite Bruchstrich wirkt wie eine Klammer: $\\frac{-(a+b) - (a-b)}{c} = \\frac{-a-b-a+b}{c} = \\frac{-2a}{c}$.\n**Ergebnis:** $-\\dfrac{2a}{c}$.',
      ],
    },
    {
      szenario: 'Verschachtelte Klammern (innen nach außen)',
      beispiele: [
        '**Aufgabe:** Berechne $2\\cdot[3 + (4 - 1)\\cdot2]$.\n**Lösung:** Innerste Klammer: $4 - 1 = 3$. Punkt vor Strich in der eckigen Klammer: $3 + 3\\cdot2 = 3 + 6 = 9$. Zuletzt $2\\cdot9$.\n**Ergebnis:** $18$.',
        '**Aufgabe:** Berechne $\\left(\\dfrac{1}{3}+\\dfrac{2}{9}\\right)\\cdot\\left(\\dfrac{11}{8}-\\dfrac{1}{4}\\right)$.\n**Lösung:** Jede Klammer zuerst: $\\frac{1}{3}+\\frac{2}{9} = \\frac{3}{9}+\\frac{2}{9} = \\frac{5}{9}$ und $\\frac{11}{8}-\\frac{1}{4} = \\frac{11}{8}-\\frac{2}{8} = \\frac{9}{8}$. Dann multiplizieren: $\\frac{5}{9}\\cdot\\frac{9}{8} = \\frac{5}{8}$.\n**Ergebnis:** $\\dfrac{5}{8}$.',
        '**Aufgabe:** Berechne $10 - [2 + (6 - 3^2)]$.\n**Lösung:** Innen zuerst die Potenz: $6 - 3^2 = 6 - 9 = -3$. Eckige Klammer: $2 + (-3) = -1$. Zuletzt $10 - (-1) = 10 + 1$.\n**Ergebnis:** $11$.',
      ],
    },
  ],
}
