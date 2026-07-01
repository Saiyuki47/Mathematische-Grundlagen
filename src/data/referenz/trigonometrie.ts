import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'trigonometrie',
  titel: 'Trigonometrische Funktionen',
  inhalt:
    '**Worum geht es?**\n' +
    '$\\sin$, $\\cos$ und $\\tan$ ordnen einem Winkel eine Zahl zu. Sie beschreiben alles Periodische — Schwingungen, Kreisbewegung, Wellen — und liefern die Seitenverhältnisse im rechtwinkligen Dreieck. Grundlage ist der **Einheitskreis** (Radius $1$ um den Ursprung).\n' +
    '\n' +
    '**Definition am Einheitskreis**\n' +
    'Trägt man einen Winkel $\\varphi$ von der positiven $x$-Achse gegen den Uhrzeigersinn ab, trifft der Winkelstrahl den Einheitskreis im Punkt $(\\cos\\varphi,\\ \\sin\\varphi)$. Also: $\\cos\\varphi$ ist die $x$-Koordinate (waagerecht), $\\sin\\varphi$ die $y$-Koordinate (senkrecht). Beide liegen zwischen $-1$ und $1$. Der Tangens ist $\\tan\\varphi = \\dfrac{\\sin\\varphi}{\\cos\\varphi}$.\n' +
    '\n' +
    '**Bogenmaß**\n' +
    'Winkel misst man hier im **Bogenmaß**: die Länge des Kreisbogens auf dem Einheitskreis. Ein voller Umlauf ist $2\\pi$, also $360^\\circ = 2\\pi$, $180^\\circ = \\pi$, $90^\\circ = \\frac{\\pi}{2}$, $60^\\circ = \\frac{\\pi}{3}$, $45^\\circ = \\frac{\\pi}{4}$, $30^\\circ = \\frac{\\pi}{6}$.\n' +
    '\n' +
    '**Standardwerte**\n' +
    '| $\\varphi$ | $\\sin\\varphi$ | $\\cos\\varphi$ | $\\tan\\varphi$ |\n' +
    '|---|---|---|---|\n' +
    '| $0$ | $0$ | $1$ | $0$ |\n' +
    '| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt3}{2}$ | $\\frac{1}{\\sqrt3}$ |\n' +
    '| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt2}{2}$ | $1$ |\n' +
    '| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt3}{2}$ | $\\frac{1}{2}$ | $\\sqrt3$ |\n' +
    '| $\\frac{\\pi}{2}$ | $1$ | $0$ | — |\n' +
    '\n' +
    '**Wichtige Eigenschaften & Identitäten**\n' +
    'Grundidentität (Satz des Pythagoras am Einheitskreis): $\\sin^2\\varphi + \\cos^2\\varphi = 1$. Symmetrie: $\\cos$ ist **gerade** ($\\cos(-x)=\\cos x$), $\\sin$ und $\\tan$ sind **ungerade** ($\\sin(-x)=-\\sin x$). Periodizität: $\\sin$ und $\\cos$ haben Periode $2\\pi$, $\\tan$ hat Periode $\\pi$. Additionstheoreme: $\\sin(x\\pm y) = \\sin x\\cos y \\pm \\cos x\\sin y$ und $\\cos(x\\pm y) = \\cos x\\cos y \\mp \\sin x\\sin y$.\n' +
    '\n' +
    '**Tangens und Polstellen**\n' +
    'Weil $\\tan = \\frac{\\sin}{\\cos}$ ist, hat der Tangens **Polstellen** genau dort, wo $\\cos\\varphi = 0$, also bei $\\varphi = \\frac{\\pi}{2} + k\\pi$. Dort ist $\\tan$ nicht definiert.\n' +
    '\n' +
    '**Reihen & wichtiger Grenzwert**\n' +
    'Als Potenzreihen: $\\sin x = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k+1}}{(2k+1)!}$ und $\\cos x = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k}}{(2k)!}$. Für kleine Winkel gilt $\\sin x \\approx x$, präzise der Grenzwert $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ (Grundlage der Ableitung $(\\sin x)^{\\prime} = \\cos x$).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Grad und Bogenmaß vermischen; $\\sin^2 x$ als $\\sin(x^2)$ lesen (gemeint ist $(\\sin x)^2$); Vorzeichen in den Quadranten falsch (z. B. $\\cos\\frac{2\\pi}{3} = -\\frac12$); $\\tan\\frac{\\pi}{2}$ als Zahl behandeln.',
  beispiele: [
    {
      szenario: 'Standardwerte ablesen',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{6}$ und $\\cos\\frac{\\pi}{6}$.\n**Lösung:** $\\frac{\\pi}{6}$ entspricht $30^\\circ$; aus der Tabelle: Höhe klein, Breite groß.\n**Ergebnis:** $\\sin\\frac{\\pi}{6}=\\frac12$, $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt3}{2}$.',
        '**Aufgabe:** Bestimme $\\tan\\frac{\\pi}{4}$.\n**Lösung:** $\\tan = \\frac{\\sin}{\\cos} = \\frac{\\sqrt2/2}{\\sqrt2/2}$.\n**Ergebnis:** $1$.',
        '**Aufgabe:** Bestimme $\\cos\\frac{2\\pi}{3}$.\n**Lösung:** $\\frac{2\\pi}{3}=120^\\circ$ liegt im 2. Quadranten, $\\cos$ dort negativ; Bezugswinkel $\\pi-\\frac{2\\pi}{3}=\\frac{\\pi}{3}$, also $-\\cos\\frac{\\pi}{3}$.\n**Ergebnis:** $-\\frac12$.',
      ],
    },
    {
      szenario: 'Identitäten anwenden',
      beispiele: [
        '**Aufgabe:** Gegeben $\\sin x = \\frac35$ mit $x$ im 1. Quadranten. Bestimme $\\cos x$.\n**Lösung:** $\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$; im 1. Quadranten positiv.\n**Ergebnis:** $\\cos x = \\frac45$.',
        '**Aufgabe:** Zeige $\\sin(2x) = 2\\sin x\\cos x$.\n**Lösung:** Additionstheorem mit $y=x$: $\\sin(x+x) = \\sin x\\cos x + \\cos x\\sin x$.\n**Ergebnis:** $\\sin(2x) = 2\\sin x\\cos x$.',
        '**Aufgabe:** Vereinfache $\\cos^2 x - \\sin^2 x$.\n**Lösung:** Additionstheorem: $\\cos(x+x) = \\cos x\\cos x - \\sin x\\sin x$.\n**Ergebnis:** $\\cos(2x)$.',
      ],
    },
    {
      szenario: 'Grenzwerte & Näherung',
      beispiele: [
        '**Aufgabe:** $\\lim_{x\\to 0}\\frac{\\sin x}{x}$.\n**Lösung:** Standardgrenzwert (kleine Winkel: $\\sin x\\approx x$).\n**Ergebnis:** $1$.',
        '**Aufgabe:** $\\lim_{x\\to 0}\\frac{\\sin(3x)}{x}$.\n**Lösung:** $\\frac{\\sin(3x)}{x} = 3\\cdot\\frac{\\sin(3x)}{3x}$, und $\\frac{\\sin(3x)}{3x}\\to 1$.\n**Ergebnis:** $3$.',
        '**Aufgabe:** $\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$.\n**Lösung:** Mit $1-\\cos x = 2\\sin^2\\frac x2$: $\\frac{2\\sin^2(x/2)}{x^2} = \\frac12\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2 \\to \\frac12$.\n**Ergebnis:** $\\frac12$.',
      ],
    },
  ],
}
