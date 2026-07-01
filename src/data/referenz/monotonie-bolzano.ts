import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'monotonie-bolzano',
  titel: 'Monotonie, Beschränktheit & Bolzano-Weierstraß',
  inhalt:
    '**Worum geht es?**\n' +
    'Um zu zeigen, dass eine Folge konvergiert, müsste man eigentlich erst ihren Grenzwert kennen — und dann mit der ε-Definition nachrechnen. Das ist mühsam, gerade bei rekursiv definierten Folgen, deren Grenzwert man gar nicht sieht. Das Monotoniekriterium liefert einen Ausweg: Steigt (oder fällt) eine Folge stetig und stößt dabei an eine feste Grenze, dann **muss** sie sich irgendwo einpendeln — auch wenn man nicht weiß, wo. Der Satz von Bolzano-Weierstraß sichert zusätzlich, dass selbst wild springende, aber beschränkte Folgen wenigstens einen konvergenten „Teil" enthalten.\n' +
    '\n' +
    '**Monotone Folgen**\n' +
    'Eine Zahlenfolge $(x_n)_{n\\in\\mathbb{N}}$ heißt\n' +
    '• **monoton wachsend**, falls $x_{n+1} \\ge x_n$ für alle $n \\in \\mathbb{N}$ gilt (**streng** monoton wachsend bei $x_{n+1} > x_n$);\n' +
    '• **monoton fallend**, falls $x_{n+1} \\le x_n$ für alle $n \\in \\mathbb{N}$ gilt (**streng** monoton fallend bei $x_{n+1} < x_n$).\n' +
    'Es kommt nur auf den Vergleich aufeinanderfolgender Glieder an: Eine wachsende Folge darf gleich bleiben, eine streng wachsende muss echt zunehmen.\n' +
    '\n' +
    '**Beschränktheit**\n' +
    'Eine Folge $(x_n) \\subseteq \\mathbb{R}$ heißt\n' +
    '• **nach oben beschränkt**, falls es ein $M \\in \\mathbb{R}$ gibt mit $x_n \\le M$ für alle $n \\in \\mathbb{N}$;\n' +
    '• **nach unten beschränkt**, falls es ein $M \\in \\mathbb{R}$ gibt mit $x_n \\ge M$ für alle $n \\in \\mathbb{N}$;\n' +
    '• **beschränkt**, falls es ein $M > 0$ gibt mit $|x_n| \\le M$ für alle $n \\in \\mathbb{N}$ (gleichbedeutend: nach oben **und** nach unten beschränkt).\n' +
    '\n' +
    '**Monotoniekriterium (der Hauptsatz)**\n' +
    'Jede **monotone und beschränkte** Folge ist konvergent. Genauer:\n' +
    '• Ist $(x_n)$ monoton wachsend und nach oben beschränkt, so konvergiert sie, und ihr Grenzwert ist das Supremum (die kleinste obere Schranke) der Folgenglieder: $\\lim_{n\\to\\infty} x_n = \\sup\\{x_n : n \\in \\mathbb{N}\\}$.\n' +
    '• Ist $(x_n)$ monoton fallend und nach unten beschränkt, so konvergiert sie gegen das Infimum: $\\lim_{n\\to\\infty} x_n = \\inf\\{x_n : n \\in \\mathbb{N}\\}$.\n' +
    'Für ein wachsendes Glied reicht **eine** Schranke nach oben; nach unten ist es durch $x_0$ ohnehin beschränkt. Bei fallenden Folgen ist es spiegelbildlich.\n' +
    '\n' +
    '**Warum reicht Monotonie + Beschränktheit?**\n' +
    'Der Clou: Man muss den Grenzwert **nicht kennen**. Eine wachsende Folge mit oberer Schranke kann nicht über die Schranke hinaus, also stauen sich die Glieder von unten an die kleinste obere Schranke heran — dieses Supremum ist nach dem Vollständigkeitsaxiom von $\\mathbb{R}$ stets vorhanden und ist genau der Grenzwert. Anschaulich: eine Folge, die immer weiter steigt, aber eine Decke hat, hat keine andere Wahl, als sich der Decke (genauer: ihrer tiefsten Stelle, dem sup) beliebig zu nähern.\n' +
    'Achtung — die Umkehrung gilt nicht: **Nicht jede konvergente Folge ist monoton.** Beispiel: $x_n = \\frac{(-1)^n}{n}$ konvergiert gegen $0$, springt aber ständig zwischen positiv und negativ.\n' +
    '\n' +
    '**Teilfolgen**\n' +
    'Wählt man aus $(x_n)$ unendlich viele Glieder aus und behält ihre Reihenfolge bei, entsteht eine **Teilfolge**. Formal: Sind $n_1 < n_2 < n_3 < \\cdots$ streng aufsteigende Indizes, so heißt $(x_{n_k})_{k\\in\\mathbb{N}}$ Teilfolge von $(x_n)$. Beispiel: aus $(x_n)$ die geraden Indizes $(x_{2k})$ oder die ungeraden $(x_{2k+1})$.\n' +
    'Wichtig: Konvergiert $(x_n)$ gegen $x$, so konvergiert **jede** Teilfolge ebenfalls gegen $x$. Umgekehrt zeigt man Divergenz oft, indem man zwei Teilfolgen mit **verschiedenen** Grenzwerten findet (z. B. bei $x_n = (-1)^n$: gerade Indizes geben $1$, ungerade $-1$).\n' +
    '\n' +
    '**Satz von Bolzano-Weierstraß**\n' +
    'Jede **beschränkte** reelle Folge besitzt (mindestens) eine **konvergente Teilfolge**.\n' +
    'Das ist bemerkenswert: Beschränktheit allein erzwingt keine Konvergenz der ganzen Folge (siehe $(-1)^n$), aber sie garantiert immer wenigstens einen konvergenten Ausschnitt. Bei $x_n = (-1)^n$ etwa ist die Teilfolge der geraden Indizes konstant $1$, also konvergent.\n' +
    '\n' +
    '**Häufungspunkt**\n' +
    'Eine Zahl $h$ heißt **Häufungspunkt** der Folge $(x_n)$, wenn es eine Teilfolge gibt, die gegen $h$ konvergiert (gleichwertig: in jeder noch so kleinen Umgebung von $h$ liegen unendlich viele Folgenglieder). Mit dieser Sprechweise lautet Bolzano-Weierstraß kurz: **Jede beschränkte reelle Folge hat mindestens einen Häufungspunkt.** Ein Grenzwert ist der Spezialfall, dass es nur einen einzigen Häufungspunkt gibt und ihm die ganze Folge zustrebt; $(-1)^n$ dagegen hat die zwei Häufungspunkte $+1$ und $-1$.\n' +
    '\n' +
    '**Wie nutzt man das Monotoniekriterium im Beweis?**\n' +
    '1. **Monotonie zeigen.** Untersuche $x_{n+1} - x_n$ (Vorzeichen) oder bei positiven Gliedern den Quotienten $\\frac{x_{n+1}}{x_n}$ (Vergleich mit $1$). Bei rekursiven Folgen oft per vollständiger Induktion.\n' +
    '2. **Beschränktheit zeigen.** Gib eine passende Schranke an (bei wachsenden Folgen nach oben, bei fallenden nach unten) und belege sie, häufig wieder per Induktion.\n' +
    '3. **Konvergenz folgern.** Aus 1. und 2. liefert das Monotoniekriterium sofort: $(x_n)$ konvergiert. Ein Grenzwert $x$ existiert.\n' +
    '4. **Grenzwert bestimmen** (bei Rekursion $x_{n+1} = f(x_n)$): Da auch $(x_{n+1})$ gegen $x$ strebt, geht man in der Rekursion zum Limes über und löst die entstehende Gleichung $x = f(x)$ nach $x$ auf.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Nur eines von beidem prüfen: monoton **ohne** Schranke (z. B. $x_n = n$) divergiert; beschränkt **ohne** Monotonie (z. B. $(-1)^n$) muss nicht konvergieren. Beide Bedingungen sind nötig.\n' +
    '• Beim Grenzwert-Schritt vergessen, dass $x$ erst existieren muss: Erst Konvergenz sichern, dann $x = f(x)$ lösen — sonst „berechnet" man den Grenzwert einer divergenten Folge.\n' +
    '• Bolzano-Weierstraß auf unbeschränkte Folgen anwenden: Ohne Beschränktheit gilt er nicht (z. B. hat $x_n = n$ keine konvergente Teilfolge).',
  beispiele: [
    {
      szenario: 'Monotonie & Beschränktheit nachweisen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $x_n = \\frac{n}{n+1}$ monoton wachsend und beschränkt ist, und folgere die Konvergenz.\n**Lösung:** Differenz: $x_{n+1} - x_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)} = \\frac{1}{(n+2)(n+1)} > 0$, also streng wachsend. Schranke: stets $0 \\le x_n < 1$, da $n < n+1$. Damit ist $(x_n)$ monoton wachsend und nach oben durch $1$ beschränkt.\n**Ergebnis:** Nach dem Monotoniekriterium konvergiert $(x_n)$; der Grenzwert ist $\\sup\\{x_n\\} = 1$.',
        '**Aufgabe:** Ist $x_n = \\frac{1}{2^n}$ monoton und beschränkt?\n**Lösung:** Quotient bei positiven Gliedern: $\\frac{x_{n+1}}{x_n} = \\frac{1/2^{n+1}}{1/2^n} = \\frac{1}{2} < 1$, also $x_{n+1} < x_n$ — streng monoton fallend. Außerdem $0 < x_n \\le \\frac{1}{2}$, somit nach unten (durch $0$) beschränkt.\n**Ergebnis:** Monoton fallend und nach unten beschränkt, also konvergent mit $\\lim_{n\\to\\infty} x_n = \\inf\\{x_n\\} = 0$.',
        '**Aufgabe:** Begründe, warum $x_n = (-1)^n \\cdot \\frac{1}{n}$ trotz Konvergenz **nicht** monoton ist.\n**Lösung:** Die Glieder sind $-1, \\tfrac{1}{2}, -\\tfrac{1}{3}, \\tfrac{1}{4}, \\dots$ — sie wechseln das Vorzeichen, also gilt weder $x_{n+1} \\ge x_n$ noch $x_{n+1} \\le x_n$ durchgehend. Konvergenz folgt hier nicht aus dem Monotoniekriterium, sondern weil $|x_n| = \\frac{1}{n} \\to 0$.\n**Ergebnis:** $(x_n)$ ist nicht monoton, konvergiert aber gegen $0$ — die Umkehrung des Kriteriums gilt eben nicht.',
      ],
    },
    {
      szenario: 'Rekursive Folge: Konvergenz + Grenzwert',
      beispiele: [
        '**Aufgabe:** Sei $a_0 = 2$ und $a_{n+1} = \\frac{2a_n}{2+a_n}$. Zeige, dass $(a_n)$ konvergiert, und bestimme den Grenzwert.\n**Lösung:** Positivität (Induktion): $a_0 = 2 > 0$; ist $a_n > 0$, so sind $2a_n > 0$ und $2 + a_n > 0$, also $a_{n+1} > 0$. Monotonie: $a_{n+1} \\le a_n \\Leftrightarrow \\frac{2a_n}{2+a_n} \\le a_n \\Leftrightarrow 2a_n \\le a_n(2+a_n) \\Leftrightarrow 0 \\le a_n^2$ — stets wahr, also fällt $(a_n)$ monoton. Beschränktheit: fallend ab $a_0 = 2$ und $a_n \\ge 0$, somit $a_n \\in [0,2]$. Nach dem Monotoniekriterium existiert $a = \\lim a_n$. Grenzübergang: $a = \\frac{2a}{2+a} \\Rightarrow (2+a)a = 2a \\Rightarrow a^2 = 0$.\n**Ergebnis:** $(a_n)$ konvergiert, und $\\lim_{n\\to\\infty} a_n = 0$.',
        '**Aufgabe:** Wurzelfolge: $x_0 = 1$, $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)$. Zeige Konvergenz und finde den Grenzwert.\n**Lösung:** Es ist $x_n > 0$ für alle $n$. Schranke: $x_{n+1} = \\frac{x_n + 2/x_n}{2} \\ge \\sqrt{2}$ (folgt mit vollständiger Induktion bzw. der Ungleichung vom arithmetischen/geometrischen Mittel), also nach unten durch $\\sqrt{2}$ beschränkt. Monotonie: $x_{n+1} - x_n = \\frac{1}{2x_n}(2 - x_n^2) \\le 0$ für $n \\ge 1$, da dort $x_n^2 \\ge 2$ — also monoton fallend. Damit existiert $x = \\lim x_n \\ge \\sqrt{2}$. Grenzübergang: $x = \\frac{1}{2}\\left(x + \\frac{2}{x}\\right) \\Rightarrow 2x = x + \\frac{2}{x} \\Rightarrow x^2 = 2$.\n**Ergebnis:** $\\lim_{n\\to\\infty} x_n = \\sqrt{2}$.',
        '**Aufgabe:** Eulerfolge: $x_n = \\left(1 + \\frac{1}{n}\\right)^n$. Wie begründet man mit dem Monotoniekriterium die Existenz von $e$?\n**Lösung:** Man zeigt (hier ohne Rechnung übernommen): $(x_n)$ ist monoton wachsend und beschränkt mit $x_n \\ge x_1 = 2$ und $x_n \\le 3$. Eine monoton wachsende, nach oben beschränkte Folge konvergiert nach dem Monotoniekriterium; ihr Grenzwert heißt eulersche Zahl $e$. Nach dem Satz über die Monotonie des Grenzwertes liegt er im abgeschlossenen Intervall $[2,3]$.\n**Ergebnis:** $e := \\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n \\in [2,3]$, mit $e \\approx 2{,}71828$.',
      ],
    },
    {
      szenario: 'Teilfolgen, Bolzano-Weierstraß & Häufungspunkte',
      beispiele: [
        '**Aufgabe:** Bestimme alle Häufungspunkte von $x_n = (-1)^n$ und gib eine konvergente Teilfolge an.\n**Lösung:** $(x_n)$ ist beschränkt ($|x_n| = 1$), also liefert Bolzano-Weierstraß eine konvergente Teilfolge. Die geraden Indizes ergeben $x_{2k} = (-1)^{2k} = 1$ (konstant, konvergiert gegen $1$), die ungeraden $x_{2k+1} = -1$ (konvergiert gegen $-1$).\n**Ergebnis:** Häufungspunkte sind $+1$ und $-1$; eine konvergente Teilfolge ist $(x_{2k}) = (1,1,1,\\dots) \\to 1$. Da es zwei verschiedene Häufungspunkte gibt, divergiert $(x_n)$.',
        '**Aufgabe:** Zeige mit Teilfolgen, dass $x_n = (-1)^n \\cdot \\frac{n}{2n+1}$ divergiert.\n**Lösung:** Gerade Indizes: $x_{2k} = \\frac{2k}{4k+1} \\to \\frac{1}{2}$. Ungerade Indizes: $x_{2k+1} = -\\frac{2k+1}{4k+3} \\to -\\frac{1}{2}$. Konvergierte $(x_n)$, müssten alle Teilfolgen denselben Grenzwert haben; hier kommen aber $\\frac{1}{2}$ und $-\\frac{1}{2}$ heraus.\n**Ergebnis:** Zwei Teilfolgen mit verschiedenen Grenzwerten $\\Rightarrow$ $(x_n)$ ist (unbestimmt) divergent; ihre Häufungspunkte sind $\\frac{1}{2}$ und $-\\frac{1}{2}$.',
        '**Aufgabe:** Garantiert Bolzano-Weierstraß für $x_n = n$ eine konvergente Teilfolge? Und für $x_n = \\sin(n)$ (Werte in $[-1,1]$)?\n**Lösung:** Für $x_n = n$ ist die Folge **nicht beschränkt**, die Voraussetzung von Bolzano-Weierstraß ist verletzt; tatsächlich wächst jede Teilfolge über alle Grenzen, es gibt keine konvergente. Für $x_n = \\sin(n)$ gilt $|x_n| \\le 1$, die Folge ist beschränkt, also liefert Bolzano-Weierstraß mindestens eine konvergente Teilfolge (mindestens einen Häufungspunkt).\n**Ergebnis:** $x_n = n$: nein (unbeschränkt). $x_n = \\sin(n)$: ja, eine konvergente Teilfolge existiert.',
      ],
    },
  ],
}
