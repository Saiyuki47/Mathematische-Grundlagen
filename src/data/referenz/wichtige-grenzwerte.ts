import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'wichtige-grenzwerte',
  titel: 'Wichtige Standard-Grenzwerte',
  inhalt:
    '**Worum geht es?**\n' +
    'Manche Folgen tauchen in Aufgaben immer wieder auf – etwa $\\frac{1}{n}$, $q^n$ oder $\\left(1+\\frac{1}{n}\\right)^n$. Ihre Grenzwerte rechnet man nicht jedes Mal neu mit der $\\varepsilon$-Definition aus, sondern lernt sie als **Bausteine** auswendig. Zusammen mit den **Grenzwertsätzen** (Summe, Produkt, Quotient von Grenzwerten) und dem **Einschnürungssatz** (Sandwich) zerlegt man damit fast jede vorkommende Folge in bekannte Stücke. Diese Karte ist die Nachschlage-Sammlung dieser Standard-Grenzwerte.\n' +
    '\n' +
    '**Die Sammlung auf einen Blick**\n' +
    '| Folge | Grenzwert | Bedingung |\n' +
    '|---|---|---|\n' +
    '| $\\frac{1}{n^p}$ | $0$ | $p>0$ |\n' +
    '| $n^k$ | $+\\infty$ | $k\\in\\mathbb{N}^*$ |\n' +
    '| $q^n$ | $0$ | $\\lvert q\\rvert<1$ |\n' +
    '| $q^n$ | $1$ | $q=1$ |\n' +
    '| $q^n$ | $+\\infty$ | $q>1$ |\n' +
    '| $\\sqrt[n]{a}$ | $1$ | $a>0$ |\n' +
    '| $\\sqrt[n]{n}$ | $1$ | — |\n' +
    '| $\\left(1+\\frac{x}{n}\\right)^n$ | $e^x$ | $x\\in\\mathbb{R}$ |\n' +
    '| $\\frac{n^k}{a^n}$ | $0$ | $a>1$ |\n' +
    '| $\\frac{a^n}{n!}$ | $0$ | $a\\in\\mathbb{R}$ |\n' +
    '| $\\frac{\\ln n}{n}$ | $0$ | — |\n' +
    '\n' +
    '**Potenzen von $n$ und ihre Kehrwerte**\n' +
    'Für jedes feste $p>0$ gilt $\\frac{1}{n^p}\\to 0$: der Nenner wächst über alle Grenzen, der Bruch wird beliebig klein. Umgekehrt gilt $n^k\\to +\\infty$ für jedes $k\\in\\mathbb{N}^*$. Speziell ist $\\frac{1}{n}\\to 0$ (der wichtigste Baustein überhaupt). Das $p$ darf auch gebrochen sein, z. B. $\\frac{1}{\\sqrt{n}}=\\frac{1}{n^{1/2}}\\to 0$.\n' +
    '\n' +
    '**Die geometrische Folge $q^n$**\n' +
    'Das Verhalten von $q^n$ hängt allein davon ab, wie groß $q$ ist:\n' +
    '| Fall | Verhalten von $q^n$ |\n' +
    '|---|---|\n' +
    '| $q>1$ | $q^n\\to +\\infty$ (bestimmt divergent) |\n' +
    '| $q=1$ | $q^n=1$ für alle $n$, also $\\to 1$ |\n' +
    '| $\\lvert q\\rvert<1$ | $q^n\\to 0$ |\n' +
    '| $q=-1$ | $q^n=(-1)^n$, beschränkt, aber unbestimmt divergent |\n' +
    '| $q<-1$ | unbestimmt divergent (Betrag wächst, Vorzeichen springt) |\n' +
    'Kurz: **Nullfolge genau für** $\\lvert q\\rvert<1$. Bei $q\\le -1$ gibt es keinen Grenzwert, auch nicht $\\pm\\infty$.\n' +
    '\n' +
    '**Die $n$-ten Wurzeln $\\sqrt[n]{a}$ und $\\sqrt[n]{n}$**\n' +
    'Für jedes feste $a>0$ gilt $\\sqrt[n]{a}=a^{1/n}\\to 1$: weil der Exponent $\\frac{1}{n}\\to 0$ geht, nähert sich jede feste positive Zahl der $1$ (denn $a^0=1$). Erstaunlicher: Auch wenn die Basis selbst mitwächst, gilt $\\sqrt[n]{n}\\to 1$. Das Wachstum der $n$-ten Wurzel besiegt also das lineare Wachstum von $n$.\n' +
    '\n' +
    '**Die Eulerfolge $\\left(1+\\frac{1}{n}\\right)^n$**\n' +
    'Diese Folge konvergiert gegen die **Eulersche Zahl** $e\\approx 2{,}718$. Hier hilft kein naives „Einsetzen": die Basis $1+\\frac{1}{n}\\to 1$, der Exponent $\\to\\infty$ – das ist ein unbestimmter Ausdruck der Form $1^\\infty$, der je nach Folge alles ergeben kann. Der Grenzwert ist gerade die Definition von $e$. Allgemeiner gilt $\\left(1+\\frac{x}{n}\\right)^n\\to e^x$ für jedes feste $x\\in\\mathbb{R}$.\n' +
    '\n' +
    '**Die Wachstums-Hierarchie (sehr nützlich)**\n' +
    'Bei Quotienten konkurrierender „schnell wachsender" Ausdrücke gilt eine feste Rangfolge. Von langsam nach schnell: $\\ln n \\ll n^k \\ll a^n \\ll n!$ (für $a>1$, $k\\in\\mathbb{N}^*$). Das Schnellere im Nenner gewinnt, der Bruch geht gegen $0$:\n' +
    '$\\frac{\\ln n}{n}\\to 0$ — der Logarithmus wächst langsamer als jede Potenz.\n' +
    '$\\frac{n^k}{a^n}\\to 0$ für $a>1$ — **„Exponential schlägt Potenz"**: $a^n$ wächst schneller als jede Potenz $n^k$.\n' +
    '$\\frac{a^n}{n!}\\to 0$ — die Fakultät schlägt jede Exponentialfunktion.\n' +
    '\n' +
    '**Wie kombiniert man das? (Schritt für Schritt)**\n' +
    '1. Folge in Summen/Produkte/Quotienten von Standard-Bausteinen zerlegen.\n' +
    '2. Bei Brüchen mit Polynomen die **höchste Potenz** in Zähler und Nenner ausklammern und kürzen; dann gehen Terme wie $\\frac{1}{n^k}$ gegen $0$.\n' +
    '3. Auf jeden Baustein den passenden Standard-Grenzwert anwenden.\n' +
    '4. Mit den **Grenzwertsätzen** zusammensetzen: $\\lim(a_n\\pm b_n)=\\lim a_n\\pm\\lim b_n$, $\\lim(a_n b_n)=\\lim a_n\\cdot\\lim b_n$, $\\lim\\frac{a_n}{b_n}=\\frac{\\lim a_n}{\\lim b_n}$ (falls der Nenner-Grenzwert nicht $0$ ist).\n' +
    '5. Klemmt eine Folge zwischen zwei gleich konvergierende, den **Einschnürungssatz** nutzen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Bei $q^n$ den Fall $q\\le -1$ falsch behandeln: dort ist die Folge unbestimmt divergent, **nicht** $\\pm\\infty$ und **nicht** $0$.\n' +
    '• $\\left(1+\\frac{1}{n}\\right)^n$ mit $1^\\infty=1$ verwechseln – der Grenzwert ist $e$, nicht $1$.\n' +
    '• Die Grenzwertsätze auf $\\infty-\\infty$, $\\frac{\\infty}{\\infty}$ oder $0\\cdot\\infty$ anwenden: das sind unbestimmte Ausdrücke, erst umformen (ausklammern, kürzen).',
  beispiele: [
    {
      szenario: 'Geometrische Folge qⁿ',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(1-\\left(-\\tfrac{1}{5}\\right)^n\\right)$.\n**Lösung:** Der Baustein ist $q^n$ mit $q=-\\tfrac{1}{5}$. Wegen $\\lvert q\\rvert=\\tfrac{1}{5}<1$ ist $\\left(-\\tfrac{1}{5}\\right)^n\\to 0$. Mit dem Summen-Grenzwertsatz: $1-0=1$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(1-\\left(-\\tfrac{1}{5}\\right)^n\\right)=1$.',
        '**Aufgabe:** Konvergiert $q^n$ für $q=\\tfrac{3}{2}$, und wenn ja, wogegen?\n**Lösung:** Hier ist $q=\\tfrac{3}{2}>1$. Nach der Tabelle gilt für $q>1$ stets $q^n\\to+\\infty$ (bestimmte Divergenz).\n**Ergebnis:** $q^n\\to+\\infty$; die Folge konvergiert nicht, sondern divergiert bestimmt gegen $+\\infty$.',
        '**Aufgabe:** Untersuche $q^n$ für $q=-2$.\n**Lösung:** Es ist $\\lvert q\\rvert=2>1$, also $q<-1$. Der Betrag $2^n\\to\\infty$ wächst, aber das Vorzeichen springt: $-2,\\,4,\\,-8,\\,16,\\dots$. Es gibt weder einen endlichen Grenzwert noch $\\pm\\infty$.\n**Ergebnis:** $(-2)^n$ ist unbestimmt divergent (kein Grenzwert).',
      ],
    },
    {
      szenario: 'Eulerfolge (1 + x/n)ⁿ',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(1+\\tfrac{1}{n}\\right)^{2n-1}$.\n**Lösung:** Schreibe den Exponenten als $2n-1=n+n-1$ und zerlege: $\\left(1+\\tfrac{1}{n}\\right)^{2n-1}=\\dfrac{\\left(1+\\tfrac{1}{n}\\right)^{n}\\left(1+\\tfrac{1}{n}\\right)^{n}}{1+\\tfrac{1}{n}}$. Es gilt $\\left(1+\\tfrac{1}{n}\\right)^n\\to e$ und $1+\\tfrac{1}{n}\\to 1$. Mit den Grenzwertsätzen: $\\dfrac{e\\cdot e}{1}=e^2$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(1+\\tfrac{1}{n}\\right)^{2n-1}=e^2$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(1+\\tfrac{3}{n}\\right)^{n}$.\n**Lösung:** Das ist direkt die allgemeine Eulerfolge $\\left(1+\\tfrac{x}{n}\\right)^n\\to e^x$ mit $x=3$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(1+\\tfrac{3}{n}\\right)^{n}=e^3$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(1-\\tfrac{1}{n^2}\\right)^{n}$.\n**Lösung:** Mit der Bernoullischen Ungleichung gilt $\\left(1-\\tfrac{1}{n^2}\\right)^n\\ge 1-n\\cdot\\tfrac{1}{n^2}=1-\\tfrac{1}{n}$. Außerdem ist $\\left(1-\\tfrac{1}{n^2}\\right)^n\\le 1$. Also $1-\\tfrac{1}{n}\\le x_n\\le 1$. Da $1-\\tfrac{1}{n}\\to 1$, folgt mit dem Einschnürungssatz der Grenzwert $1$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(1-\\tfrac{1}{n^2}\\right)^{n}=1$.',
      ],
    },
    {
      szenario: 'Potenzen kombinieren (1/nᵖ, Ausklammern)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\dfrac{n}{2n+1}$.\n**Lösung:** Höchste Potenz $n$ kürzen: $\\dfrac{n}{2n+1}=\\dfrac{1}{2+\\tfrac{1}{n}}$. Wegen $\\tfrac{1}{n}\\to 0$ wird der Nenner zu $2$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\dfrac{n}{2n+1}=\\tfrac{1}{2}$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\dfrac{n^2-2n^4-2}{2n^3+n^2}$.\n**Lösung:** Höchste Potenzen ausklammern: $\\dfrac{n^4\\left(\\tfrac{1}{n^2}-2-\\tfrac{2}{n^4}\\right)}{n^3\\left(2+\\tfrac{1}{n}\\right)}=n\\cdot\\dfrac{\\tfrac{1}{n^2}-2-\\tfrac{2}{n^4}}{2+\\tfrac{1}{n}}$. Alle $\\tfrac{1}{n^k}\\to 0$, also strebt der Bruch gegen $\\dfrac{-2}{2}=-1$, und $n\\to+\\infty$. Produkt aus $+\\infty$ und einer negativen Zahl.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\dfrac{n^2-2n^4-2}{2n^3+n^2}=-\\infty$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\dfrac{2n}{\\sqrt{n}+1}$.\n**Lösung:** Schreibe $\\sqrt{n}=n^{1/2}$ und klammere im Nenner $n^{1/2}$ aus: $\\dfrac{2n}{n^{1/2}\\left(1+\\tfrac{1}{\\sqrt{n}}\\right)}=n^{1/2}\\cdot\\dfrac{2}{1+\\tfrac{1}{\\sqrt{n}}}$. Wegen $\\tfrac{1}{\\sqrt{n}}\\to 0$ geht der Bruch gegen $2$, und $n^{1/2}\\to+\\infty$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\dfrac{2n}{\\sqrt{n}+1}=+\\infty$.',
      ],
    },
    {
      szenario: 'Wurzeln und Einschnürung',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\sqrt[n]{7}$.\n**Lösung:** Standard-Grenzwert $\\sqrt[n]{a}\\to 1$ für jedes feste $a>0$; hier $a=7$. (Begründung: $\\sqrt[n]{7}=7^{1/n}$ und $\\tfrac{1}{n}\\to 0$, also $7^{1/n}\\to 7^0=1$.)\n**Ergebnis:** $\\lim_{n\\to\\infty}\\sqrt[n]{7}=1$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\sqrt[n]{2n}$.\n**Lösung:** Zerlege $\\sqrt[n]{2n}=\\sqrt[n]{2}\\cdot\\sqrt[n]{n}$. Es gilt $\\sqrt[n]{2}\\to 1$ und $\\sqrt[n]{n}\\to 1$. Produkt der Grenzwerte: $1\\cdot 1=1$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\sqrt[n]{2n}=1$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt{n}\\right)$.\n**Lösung:** Mit dem dritten Binom erweitern: $\\sqrt{n+1}-\\sqrt{n}=\\dfrac{(n+1)-n}{\\sqrt{n+1}+\\sqrt{n}}=\\dfrac{1}{\\sqrt{n+1}+\\sqrt{n}}$. Es gilt $0\\le \\dfrac{1}{\\sqrt{n+1}+\\sqrt{n}}\\le \\dfrac{1}{\\sqrt{n}}\\to 0$. Mit dem Einschnürungssatz folgt der Grenzwert $0$.\n**Ergebnis:** $\\lim_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt{n}\\right)=0$.',
      ],
    },
  ],
}
