import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'standardableitungen',
  titel: 'Standard-Ableitungen',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Ableitungsregeln** bauen jede Ableitung aus Bausteinen zusammen — die Bausteine selbst sind die Ableitungen der elementaren Funktionen. Diese sollte man auswendig kennen; dann geht Ableiten fast automatisch.\n' +
    '\n' +
    '**Tabelle der wichtigsten Ableitungen**\n' +
    '| $f(x)$ | $f\'(x)$ | Bemerkung |\n' +
    '|---|---|---|\n' +
    '| $c$ (konstant) | $0$ | keine Änderung |\n' +
    '| $x^n$ | $n\\,x^{n-1}$ | für jedes $n$ (auch negativ/rational) |\n' +
    '| $\\sqrt{x}$ | $\\frac{1}{2\\sqrt{x}}$ | $= x^{1/2}$, also $\\frac12 x^{-1/2}$ |\n' +
    '| $\\frac{1}{x}$ | $-\\frac{1}{x^2}$ | $= x^{-1}$ |\n' +
    '| $e^x$ | $e^x$ | bleibt sich selbst gleich |\n' +
    '| $a^x$ | $a^x \\ln a$ | Basis $a>0$ |\n' +
    '| $\\ln x$ | $\\frac{1}{x}$ | für $x>0$ |\n' +
    '| $\\log_a x$ | $\\frac{1}{x \\ln a}$ | $= \\frac{\\ln x}{\\ln a}$ |\n' +
    '| $\\sin x$ | $\\cos x$ | |\n' +
    '| $\\cos x$ | $-\\sin x$ | Minus beachten |\n' +
    '| $\\tan x$ | $\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$ | |\n' +
    '| $\\arctan x$ | $\\frac{1}{1+x^2}$ | |\n' +
    '\n' +
    '**Die Potenzregel ist der Kern**\n' +
    'Die wichtigste Zeile ist $(x^n)\' = n\\,x^{n-1}$: „Exponent nach vorne, Exponent um $1$ verkleinern". Sie gilt für jeden Exponenten — so leitet man auch Wurzeln ($\\sqrt x = x^{1/2}$) und Kehrwerte ($\\frac1{x^k} = x^{-k}$) ab, indem man sie zuerst als Potenz schreibt.\n' +
    '\n' +
    '**Kurzbegründungen (zum Verständnis)**\n' +
    '$e^x$ ist die einzige Funktion, die gleich ihrer eigenen Ableitung ist ($(e^x)\' = e^x$); daraus folgt mit der Kettenregel $(a^x)\' = (e^{x\\ln a})\' = a^x \\ln a$. Der Logarithmus $(\\ln x)\' = \\frac1x$ ergibt sich aus der Umkehrregel zu $e^x$. $(\\sin x)\' = \\cos x$ folgt aus dem Grenzwert $\\frac{\\sin h}{h}\\to 1$.\n' +
    '\n' +
    '**Zusammenspiel mit den Regeln**\n' +
    'Diese Ableitungen sind die „Endpunkte": Sobald man beim Ableiten auf eine elementare Funktion trifft, setzt man ihren Tabellenwert ein. Bei Verkettungen (z. B. $\\sin(3x)$, $e^{-x^2}$) kommt zusätzlich die **innere Ableitung** aus der Kettenregel dazu.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Bei $\\cos x$ das Minus vergessen; $(\\ln x)\'$ mit $\\frac{1}{\\ln x}$ verwechseln (richtig ist $\\frac1x$); $(e^x)\'$ als $x\\,e^{x-1}$ „nach Potenzregel" behandeln (die gilt nur für $x^n$, nicht für $a^x$).',
  beispiele: [
    {
      szenario: 'Potenzen, Wurzeln, Kehrwerte',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = x^7$ ab.\n**Lösung:** Potenzregel: $7 x^{6}$.\n**Ergebnis:** $f\'(x) = 7x^6$.',
        '**Aufgabe:** Leite $f(x) = \\sqrt[3]{x}$ ab.\n**Lösung:** $= x^{1/3}$, Potenzregel: $\\frac13 x^{-2/3} = \\frac{1}{3\\sqrt[3]{x^2}}$.\n**Ergebnis:** $f\'(x) = \\frac{1}{3\\sqrt[3]{x^2}}$.',
        '**Aufgabe:** Leite $f(x) = \\frac{1}{x^4}$ ab.\n**Lösung:** $= x^{-4}$, Potenzregel: $-4 x^{-5} = -\\frac{4}{x^5}$.\n**Ergebnis:** $f\'(x) = -\\frac{4}{x^5}$.',
      ],
    },
    {
      szenario: 'Exponential & Logarithmus',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = 2^x$ ab.\n**Lösung:** $(a^x)\' = a^x\\ln a$ mit $a=2$.\n**Ergebnis:** $f\'(x) = 2^x \\ln 2$.',
        '**Aufgabe:** Leite $f(x) = 5 e^x - \\ln x$ ab.\n**Lösung:** Gliedweise: $5 e^x - \\frac1x$.\n**Ergebnis:** $f\'(x) = 5 e^x - \\frac1x$.',
        '**Aufgabe:** Leite $f(x) = \\log_{10} x$ ab.\n**Lösung:** $(\\log_a x)\' = \\frac{1}{x\\ln a}$ mit $a=10$.\n**Ergebnis:** $f\'(x) = \\frac{1}{x\\ln 10}$.',
      ],
    },
    {
      szenario: 'Trigonometrisch',
      beispiele: [
        '**Aufgabe:** Leite $f(x) = 3\\sin x + \\cos x$ ab.\n**Lösung:** $3\\cos x + (-\\sin x)$.\n**Ergebnis:** $f\'(x) = 3\\cos x - \\sin x$.',
        '**Aufgabe:** Leite $f(x) = \\tan x$ ab und werte in $x=0$ aus.\n**Lösung:** $(\\tan x)\' = \\frac{1}{\\cos^2 x}$; bei $x=0$: $\\frac{1}{1} = 1$.\n**Ergebnis:** $f\'(x)=\\frac{1}{\\cos^2 x}$, $f\'(0)=1$.',
        '**Aufgabe:** Leite $f(x) = \\arctan x$ ab.\n**Lösung:** Tabellenwert.\n**Ergebnis:** $f\'(x) = \\frac{1}{1+x^2}$.',
      ],
    },
  ],
}
