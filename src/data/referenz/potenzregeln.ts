import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'potenzregeln',
  titel: 'Potenzgesetze',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Potenz ist eine abkürzende Schreibweise für wiederholtes Multiplizieren: Statt $a\\cdot a\\cdot a$ schreibt man $a^3$. Die Potenzgesetze sind feste Regeln, mit denen man solche Ausdrücke zusammenfasst, vereinfacht und umformt – das spart Rechenarbeit und macht große oder verschachtelte Terme überhaupt erst handhabbar.\n' +
    '\n' +
    '**Grundbegriffe: Basis und Exponent**\n' +
    'In $a^n$ heißt $a$ die **Basis** (die Zahl, die multipliziert wird) und $n$ der **Exponent** (wie oft). Für eine natürliche Zahl $n$ bedeutet $a^n = \\underbrace{a\\cdot a\\cdots a}_{n\\text{ Faktoren}}$. Man spricht „$a$ hoch $n$".\n' +
    '\n' +
    '**Die fünf Rechengesetze**\n' +
    'Für alle Basen $a, b$ und Exponenten $m, n$ gilt (bei $\\tfrac{}{}$ braucht es $a\\neq 0$ bzw. $b\\neq 0$):\n' +
    '| Regel | Formel |\n' +
    '|---|---|\n' +
    '| Gleiche Basis mal | $a^m\\cdot a^n = a^{m+n}$ |\n' +
    '| Gleiche Basis geteilt | $\\dfrac{a^m}{a^n} = a^{m-n}$ |\n' +
    '| Potenz einer Potenz | $(a^m)^n = a^{m\\cdot n}$ |\n' +
    '| Produkt hoch $n$ | $(a\\cdot b)^n = a^n\\cdot b^n$ |\n' +
    '| Bruch hoch $n$ | $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$ |\n' +
    '\n' +
    '**Warum gelten sie? (Faktoren zählen)**\n' +
    'Alle Regeln sind nur „Faktoren abzählen". Beispiel $a^2\\cdot a^3 = (a\\cdot a)\\cdot(a\\cdot a\\cdot a) = a^5$ – die Anzahlen $2$ und $3$ werden addiert, daher $a^{m+n}$. Beim Teilen kürzen sich gemeinsame Faktoren weg: $\\frac{a^5}{a^2} = \\frac{a\\cdot a\\cdot a\\cdot a\\cdot a}{a\\cdot a} = a^3$, also $a^{m-n}$. Und $(a^2)^3 = a^2\\cdot a^2\\cdot a^2 = a^6$: man hat $3$ Blöcke zu je $2$ Faktoren, zusammen $m\\cdot n$.\n' +
    '\n' +
    '**Sonderfälle: Exponent $0$, negativ, gebrochen**\n' +
    '$a^0 = 1$ für jedes $a\\neq 0$ (folgt aus $\\frac{a^n}{a^n}=a^{n-n}=a^0$, und $\\frac{a^n}{a^n}=1$).\n' +
    '$a^{-n} = \\dfrac{1}{a^n}$ – ein negativer Exponent bedeutet Kehrwert (z. B. $5^{-2}=\\frac{1}{25}$).\n' +
    '$a^{1/n} = \\sqrt[n]{a}$ und allgemein $a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$ – ein Bruch im Exponenten ist eine Wurzel (für $a\\ge 0$). So ist $a^{1/2}=\\sqrt{a}$.\n' +
    'Schön daran: Mit diesen Festlegungen gelten die fünf Gesetze oben **unverändert** auch für negative und gebrochene Exponenten weiter.\n' +
    '\n' +
    '**Wie wendet man die Regeln an?**\n' +
    '1. Alles als Potenz schreiben (Wurzeln $\\to$ Hochzahl $\\tfrac1n$, Brüche $\\to$ negativer Exponent).\n' +
    '2. Gleiche Basen suchen und nach den Regeln zusammenfassen (Exponenten addieren/subtrahieren).\n' +
    '3. Klammer-Exponenten nach innen ziehen, $(a^m)^n$ ausmultiplizieren.\n' +
    '4. Am Ende: negative Exponenten als Bruch, gebrochene als Wurzel zurückschreiben, falls gewünscht.\n' +
    '\n' +
    '**Achtung: Vorzeichen und Klammern**\n' +
    'Eine Hochzahl bindet **stärker** als ein Minuszeichen. Deshalb ist $-a^2 = -(a^2)$, also nur das $a$ wird quadriert – das Ergebnis ist negativ (für $a\\neq 0$). Dagegen quadriert $(-a)^2 = (-a)\\cdot(-a) = a^2$ auch das Vorzeichen mit, das Ergebnis ist positiv. Konkret: $-3^2 = -9$, aber $(-3)^2 = 9$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $a^m\\cdot a^n \\neq a^{m\\cdot n}$ – bei gleicher Basis werden Exponenten **addiert**, nicht multipliziert.\n' +
    '• $a^m + a^n$ lässt sich **nicht** zu einer Potenz zusammenfassen (nur Produkte/Quotienten).\n' +
    '• $(a+b)^n \\neq a^n + b^n$ – die Produktregel gilt nur für Mal/Geteilt, nicht für Plus (siehe binomische Formeln).\n' +
    '• $-a^2$ mit $(-a)^2$ verwechseln.',
  beispiele: [
    {
      szenario: 'Gleiche Basis: $a^m a^n$ und $\\frac{a^m}{a^n}$',
      beispiele: [
        '**Aufgabe:** Vereinfache $x^3\\cdot x^4\\cdot x$.\n**Lösung:** Gleiche Basis $x$, also Exponenten addieren ($x = x^1$): $3+4+1 = 8$.\n**Ergebnis:** $x^8$.',
        '**Aufgabe:** Vereinfache $\\dfrac{a^7}{a^2}$.\n**Lösung:** Gleiche Basis, Exponenten subtrahieren: $a^{7-2}$.\n**Ergebnis:** $a^5$.',
        '**Aufgabe:** Vereinfache $\\dfrac{x^2\\cdot x^5}{x^4}$.\n**Lösung:** Zähler zusammenfassen: $x^{2+5} = x^7$. Dann teilen: $x^{7-4}$.\n**Ergebnis:** $x^3$.',
      ],
    },
    {
      szenario: 'Klammern: $(a^m)^n$, $(ab)^n$, $\\left(\\frac ab\\right)^n$',
      beispiele: [
        '**Aufgabe:** Vereinfache $(x^3)^4$.\n**Lösung:** Potenz einer Potenz – Exponenten multiplizieren: $3\\cdot 4$.\n**Ergebnis:** $x^{12}$.',
        '**Aufgabe:** Vereinfache $(2x)^3$.\n**Lösung:** Produkt hoch $n$: jeder Faktor wird potenziert. $2^3\\cdot x^3 = 8\\cdot x^3$.\n**Ergebnis:** $8x^3$.',
        '**Aufgabe:** Vereinfache $\\left(\\dfrac{a^2}{3}\\right)^3$.\n**Lösung:** Zähler und Nenner einzeln hoch $3$: $\\dfrac{(a^2)^3}{3^3} = \\dfrac{a^{6}}{27}$.\n**Ergebnis:** $\\dfrac{a^6}{27}$.',
      ],
    },
    {
      szenario: 'Exponent $0$, negativ, Wurzel',
      beispiele: [
        '**Aufgabe:** Berechne $5^{-2}\\cdot 100$.\n**Lösung:** Negativer Exponent = Kehrwert: $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. Dann $\\frac{1}{25}\\cdot 100 = \\frac{100}{25}$.\n**Ergebnis:** $4$.',
        '**Aufgabe:** Schreibe $\\sqrt{2}\\cdot\\sqrt{32}$ ohne Wurzel.\n**Lösung:** Als Potenzen: $2^{1/2}\\cdot 32^{1/2} = (2\\cdot 32)^{1/2} = 64^{1/2} = \\sqrt{64}$.\n**Ergebnis:** $8$.',
        '**Aufgabe:** Vereinfache $\\dfrac{x^3}{x^3}$ und $\\dfrac{x^2}{x^5}$.\n**Lösung:** $\\frac{x^3}{x^3} = x^{3-3} = x^0 = 1$. Und $\\frac{x^2}{x^5} = x^{2-5} = x^{-3} = \\frac{1}{x^3}$.\n**Ergebnis:** $1$ bzw. $\\dfrac{1}{x^3}$.',
      ],
    },
    {
      szenario: 'Vorzeichen, Klammern & gemischte Terme',
      beispiele: [
        '**Aufgabe:** Berechne $-3^2$ und $(-3)^2$.\n**Lösung:** Bei $-3^2$ bindet die Hochzahl stärker: $-(3^2) = -9$. Bei $(-3)^2$ wird das Vorzeichen mitquadriert: $(-3)(-3) = 9$.\n**Ergebnis:** $-3^2 = -9$, $(-3)^2 = 9$.',
        '**Aufgabe:** Vereinfache $(11a^2 b)^2\\cdot(-2a^{-3}b)$.\n**Lösung:** Erst quadrieren: $(11a^2b)^2 = 11^2\\,a^{4}\\,b^{2} = 121a^4b^2$. Dann multiplizieren: $121a^4b^2\\cdot(-2a^{-3}b) = -242\\,a^{4-3}\\,b^{2+1}$.\n**Ergebnis:** $-242\\,a\\,b^3$.',
        '**Aufgabe:** Vereinfache $\\dfrac{(2x^2)^3}{4x^5}$.\n**Lösung:** Zähler: $(2x^2)^3 = 2^3 x^{6} = 8x^6$. Dann $\\dfrac{8x^6}{4x^5} = \\dfrac{8}{4}\\,x^{6-5} = 2x^{1}$.\n**Ergebnis:** $2x$.',
      ],
    },
  ],
}
