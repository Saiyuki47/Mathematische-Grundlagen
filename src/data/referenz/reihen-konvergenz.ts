import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'reihen-konvergenz',
  titel: 'Reihen & Konvergenzkriterien',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Reihe** ist eine unendliche Summe $a_1+a_2+a_3+\\dots$. Man will wissen: Ergibt das Aufaddieren unendlich vieler Zahlen eine endliche Zahl (die Reihe **konvergiert**) oder wird die Summe beliebig groß bzw. springt umher (sie **divergiert**)? Solche Summen treten überall auf, z. B. bei Medikamentenabbau, Wachstumsprozessen oder den Reihen für $\\exp$, $\\sin$, $\\cos$.\n' +
    '\n' +
    '**Definition: Reihe als Folge der Partialsummen**\n' +
    'Sei $a_k\\in\\mathbb{R}$ für jedes $k$. Die $n$-te **Partialsumme** ist $s_n=\\sum_{k=1}^{n} a_k$ (in der Vorlesung oft ab $k=0$). Die Folge $(s_n)$ dieser Partialsummen heißt **(unendliche) Reihe**. Konvergiert die Folge $(s_n)$, so heißt die Reihe **konvergent**, und man schreibt für den Grenzwert\n' +
    '$\\sum_{k=1}^{\\infty} a_k=\\lim_{n\\to\\infty} s_n=\\lim_{n\\to\\infty}\\sum_{k=1}^{n} a_k$\n' +
    'Dasselbe Symbol $\\sum_{k=1}^{\\infty} a_k$ steht also für die Reihe **und** (im Konvergenzfall) für ihre **Summe**. Konvergiert $(s_n)$ nicht, **divergiert** die Reihe.\n' +
    '\n' +
    '**Absolute Konvergenz**\n' +
    'Die Reihe heißt **absolut konvergent**, falls die Reihe der Beträge $\\sum_{k=1}^{\\infty}\\lvert a_k\\rvert$ konvergiert. Wichtig: **absolut konvergent ist immer auch konvergent** (folgt aus dem Majorantenkriterium). Die meisten Kriterien unten prüfen in Wahrheit absolute Konvergenz.\n' +
    '\n' +
    '**Notwendiges Kriterium (Nullfolge)**\n' +
    'Damit eine Reihe überhaupt konvergieren kann, müssen die Summanden gegen $0$ gehen: Ist $(a_k)$ **keine Nullfolge** (d. h. $a_k\\not\\to 0$), so **divergiert** $\\sum a_k$. Das ist der schnellste Divergenztest: erst $\\lim_{k\\to\\infty} a_k$ ansehen.\n' +
    'Warnung: Die Umkehrung gilt **nicht**. Aus $a_k\\to 0$ folgt **keine** Konvergenz. Gegenbeispiel ist die **harmonische Reihe** $\\sum_{k=1}^{\\infty}\\frac{1}{k}$: hier gilt $\\frac{1}{k}\\to 0$, trotzdem divergiert die Reihe.\n' +
    '\n' +
    '**Die Konvergenzkriterien (je Voraussetzung + Vorgehen)**\n' +
    'Majorantenkriterium: Gilt $\\lvert a_k\\rvert\\le b_k$ (ab einem Index) und konvergiert die **Majorante** $\\sum b_k$, so konvergiert $\\sum a_k$ (sogar absolut). Vorgehen: Summanden nach **oben** durch eine bekannte konvergente Reihe abschätzen.\n' +
    'Minorantenkriterium: Gilt $0\\le c_k\\le a_k$ und **divergiert** die **Minorante** $\\sum c_k$, so divergiert $\\sum a_k$. Vorgehen: nach **unten** gegen eine bekannte divergente Reihe abschätzen.\n' +
    'Quotientenkriterium: Existiert $q=\\lim_{k\\to\\infty}\\left\\lvert\\frac{a_{k+1}}{a_k}\\right\\rvert$, so konvergiert die Reihe absolut für $q<1$ und divergiert für $q>1$. Bei $q=1$ keine Aussage. Vorgehen: $\\frac{a_{k+1}}{a_k}$ bilden, kürzen, Grenzwert bestimmen.\n' +
    'Wurzelkriterium: Existiert $q=\\lim_{k\\to\\infty}\\sqrt[k]{\\lvert a_k\\rvert}$, so konvergiert die Reihe absolut für $q<1$ und divergiert für $q>1$. Bei $q=1$ keine Aussage. Hilfreich: $\\sqrt[k]{k}\\to 1$ und $\\sqrt[k]{a}\\to 1$ für $a>0$.\n' +
    'Leibnizkriterium: Bei einer **alternierenden** Reihe $\\sum (-1)^k a_k$ mit $a_k\\ge 0$, $(a_k)$ **monoton fallend** und $a_k\\to 0$, konvergiert die Reihe. Vorgehen: Vorzeichenwechsel erkennen, dann nur monoton fallende Nullfolge prüfen.\n' +
    '\n' +
    '**Welches Kriterium wann?**\n' +
    '| Reihe / Bauart | Erst prüfen / Kriterium |\n' +
    '|---|---|\n' +
    '| $a_k\\not\\to 0$ | Notwendiges Kriterium: Reihe divergiert sofort |\n' +
    '| Faktor $q^k$, Potenzen, Fakultäten | Quotientenkriterium ($\\frac{a_{k+1}}{a_k}$) |\n' +
    '| $k$-te Potenzen wie $c^k$, $k^k$, $(\\dots)^k$ | Wurzelkriterium ($\\sqrt[k]{\\lvert a_k\\rvert}$) |\n' +
    '| alternierend, Faktor $(-1)^k$ | Leibniz (monoton fallende Nullfolge) |\n' +
    '| harmlos abschätzbar nach oben/unten | Majoranten- bzw. Minorantenkriterium |\n' +
    '| Form $q^k$ exakt | Geometrische Reihe: konvergiert für Betrag von $q$ kleiner $1$ |\n' +
    '\n' +
    '**Systematisches Vorgehen (Strategie)**\n' +
    '1. Ist $(a_k)$ eine Nullfolge? Wenn **nein** → divergiert, fertig.\n' +
    '2. Alternierend (Faktor $(-1)^k$)? → Leibniz versuchen.\n' +
    '3. Tauchen $q^k$, $k!$ oder Potenzen auf? → Quotientenkriterium.\n' +
    '4. Steht der ganze Term in einer $k$-ten Potenz? → Wurzelkriterium.\n' +
    '5. Sonst: nach oben gegen konvergente (Majorante) bzw. nach unten gegen divergente Reihe (Minorante, oft harmonische Reihe) abschätzen.\n' +
    'Häufiger Fehler: aus $a_k\\to 0$ auf Konvergenz schließen (gilt nicht!) und bei Quotienten-/Wurzelkriterium den Fall $q=1$ als Ergebnis werten (dort ist **keine** Aussage möglich).',
  beispiele: [
    {
      szenario: 'Summe einer geometrischen Reihe (Übungsblatt 9, Aufgabe 1)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sum_{k=0}^{\\infty} 5\\left(\\frac{1}{2}\\right)^{k}$.\n**Lösung:** Konstanten Faktor ausklammern: $5\\sum_{k=0}^{\\infty}\\left(\\frac{1}{2}\\right)^{k}$. Geometrische Reihe mit $q=\\frac{1}{2}$, Betrag kleiner $1$, also Summe $\\frac{1}{1-q}=\\frac{1}{1-\\frac{1}{2}}=2$. Damit $5\\cdot 2$.\n**Ergebnis:** $\\sum_{k=0}^{\\infty} 5\\left(\\frac{1}{2}\\right)^{k}=10$.',
        '**Aufgabe:** Bestimme $\\sum_{k=2}^{\\infty} 2\\left(-\\frac{2}{5}\\right)^{k}$ (Start bei $k=2$).\n**Lösung:** Indexshift auf $k=0$: $\\sum_{k=2}^{\\infty} 2\\,q^{k}=\\sum_{k=0}^{\\infty} 2\\,q^{k+2}=2\\,q^{2}\\sum_{k=0}^{\\infty} q^{k}$ mit $q=-\\frac{2}{5}$. Es ist $2q^{2}=2\\cdot\\frac{4}{25}=\\frac{8}{25}$ und $\\sum_{k=0}^{\\infty} q^{k}=\\frac{1}{1-(-\\frac{2}{5})}=\\frac{1}{\\frac{7}{5}}=\\frac{5}{7}$.\n**Ergebnis:** $\\frac{8}{25}\\cdot\\frac{5}{7}=\\frac{8}{35}$.',
        '**Aufgabe:** Konvergiert $\\sum_{k=0}^{\\infty}\\left(\\frac{3}{2}\\right)^{k}$, und wenn ja, gegen welche Summe?\n**Lösung:** Geometrische Reihe mit $q=\\frac{3}{2}$. Der Betrag von $q$ ist größer als $1$, also keine Konvergenz (die Summanden wachsen). Probe mit dem notwendigen Kriterium: $\\left(\\frac{3}{2}\\right)^{k}\\to\\infty$, keine Nullfolge.\n**Ergebnis:** Die Reihe **divergiert**; eine Summe existiert nicht.',
      ],
    },
    {
      szenario: 'Konvergenz prüfen mit Wurzel-, Quotienten- und Minorantenkriterium (Aufgabe 2 & 3)',
      beispiele: [
        '**Aufgabe:** Untersuche $\\sum_{k=1}^{\\infty}\\sqrt{k}$ auf Konvergenz.\n**Lösung:** Zuerst das notwendige Kriterium: $a_k=\\sqrt{k}\\to\\infty$, also keine Nullfolge. Wenn die Summanden nicht gegen $0$ gehen, kann die Reihe nicht konvergieren.\n**Ergebnis:** Die Reihe **divergiert**.',
        '**Aufgabe:** Untersuche $\\sum_{k=1}^{\\infty}\\frac{1}{\\sqrt{k}}$ auf Konvergenz.\n**Lösung:** Hier ist $\\frac{1}{\\sqrt{k}}\\to 0$ (notwendiges Kriterium erfüllt, also keine Entscheidung). Abschätzen nach unten: für $k\\ge 1$ gilt $\\frac{1}{\\sqrt{k}}\\ge\\frac{1}{k}$. Die Minorante $\\sum\\frac{1}{k}$ ist die harmonische Reihe und divergiert.\n**Ergebnis:** Nach dem **Minorantenkriterium divergiert** $\\sum\\frac{1}{\\sqrt{k}}$.',
        '**Aufgabe:** Untersuche $\\sum_{k=2}^{\\infty}\\frac{k}{3^{k}}$ auf Konvergenz.\n**Lösung:** Faktor $3^{k}$ und Potenz $k$ → Quotientenkriterium. $\\left\\lvert\\frac{a_{k+1}}{a_k}\\right\\rvert=\\frac{k+1}{3^{k+1}}\\cdot\\frac{3^{k}}{k}=\\frac{1}{3}\\left(1+\\frac{1}{k}\\right)\\to\\frac{1}{3}$. (Wurzelkriterium liefert dasselbe: $\\sqrt[k]{\\frac{k}{3^{k}}}=\\frac{\\sqrt[k]{k}}{3}\\to\\frac{1}{3}$, da $\\sqrt[k]{k}\\to 1$.)\n**Ergebnis:** $q=\\frac{1}{3}<1$, also **konvergiert** die Reihe (absolut).',
      ],
    },
    {
      szenario: 'Alternierende Reihen und der Leibniz-Test (Aufgabe 2c & 3b)',
      beispiele: [
        '**Aufgabe:** Untersuche $\\sum_{k=1}^{\\infty}(-1)^{k+1}\\frac{1}{\\sqrt{k}}$ auf Konvergenz.\n**Lösung:** Faktor $(-1)^{k+1}$ → alternierend → Leibniz. Setze $a_k=\\frac{1}{\\sqrt{k}}\\ge 0$. Es gilt $a_{k+1}\\le a_k$ (monoton fallend) und $a_k\\to 0$. Beide Leibniz-Voraussetzungen sind erfüllt.\n**Ergebnis:** Nach dem **Leibnizkriterium konvergiert** die Reihe. (Sie konvergiert nicht absolut, da $\\sum\\frac{1}{\\sqrt{k}}$ divergiert.)',
        '**Aufgabe:** Untersuche $\\sum_{k=2}^{\\infty}(-1)^{k}\\left(1-\\frac{1}{k}\\right)$ auf Konvergenz.\n**Lösung:** Trotz $(-1)^{k}$ zuerst das notwendige Kriterium prüfen: $a_k=(-1)^{k}\\left(1-\\frac{1}{k}\\right)$. Der Betrag $1-\\frac{1}{k}\\to 1$, also $a_k\\not\\to 0$ (springt zwischen Werten nahe $+1$ und $-1$). Leibniz ist nicht anwendbar, weil $\\left(1-\\frac{1}{k}\\right)$ keine Nullfolge ist.\n**Ergebnis:** Die Summanden bilden keine Nullfolge, die Reihe **divergiert**.',
        '**Aufgabe:** Untersuche $\\sum_{k=1}^{\\infty}\\left(\\frac{1}{\\sqrt{k}}\\right)^{k}$ auf Konvergenz.\n**Lösung:** Der ganze Term steht in einer $k$-ten Potenz → Wurzelkriterium. $\\sqrt[k]{\\left(\\frac{1}{\\sqrt{k}}\\right)^{k}}=\\frac{1}{\\sqrt{k}}$, und $\\lim_{k\\to\\infty}\\frac{1}{\\sqrt{k}}=0<1$.\n**Ergebnis:** Wegen $q=0<1$ **konvergiert** die Reihe nach dem Wurzelkriterium.',
      ],
    },
  ],
}
