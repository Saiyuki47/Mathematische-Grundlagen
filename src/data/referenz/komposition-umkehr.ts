import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'komposition-umkehr',
  titel: 'Komposition & Umkehrabbildung',
  inhalt:
    '**Worum geht es?**\n' +
    'Zwei Funktionen kann man hintereinander ausführen: erst die eine, dann steckt man das Ergebnis in die andere. Das nennt man **Komposition** (Verkettung). Umgekehrt fragt man manchmal: Welche Eingabe gehörte zu einem bestimmten Ergebnis? Diese Rückwärts-Zuordnung ist die **Umkehrabbildung** $f^{-1}$. Sie macht eine Funktion rückgängig – funktioniert aber nur, wenn die Funktion bijektiv ist.\n' +
    '\n' +
    '**Komposition (Verkettung)**\n' +
    'Sind $f : A \\to B$ und $g : C \\to D$ Funktionen mit $f(A) \\subseteq C$, so ist\n' +
    '$g \\circ f : A \\to D, \\quad x \\mapsto g(f(x))$\n' +
    'die **Komposition** von $g$ und $f$. Man liest $g \\circ f$ als „g nach f" – die rechte Funktion $f$ wirkt zuerst, ihr Ergebnis geht in $g$. Die **Verträglichkeit** $f(A) \\subseteq C$ ist Pflicht: was $f$ ausspuckt, muss $g$ auch verarbeiten können (es muss im Definitionsbereich von $g$ liegen).\n' +
    '\n' +
    '**Reihenfolge ist nicht egal**\n' +
    'Im Allgemeinen ist $g \\circ f \\neq f \\circ g$ – Komposition ist **nicht kommutativ**. Schon die Definitionsbereiche können verschieden sein, und selbst wenn beides geht, kommt meist etwas anderes heraus. Mit $f(x)=x^2$ und $g(x)=x+1$ ist $(g \\circ f)(x)=x^2+1$, aber $(f \\circ g)(x)=(x+1)^2$.\n' +
    '\n' +
    '**Die Identität**\n' +
    'Die **Identität** auf einer Menge $X$ ist die Abbildung $\\mathrm{id}_X : X \\to X, \\; x \\mapsto x$, die jedes Element auf sich selbst schickt. Sie ist das „neutrale Element" der Verkettung: $f \\circ \\mathrm{id} = f$ und $\\mathrm{id} \\circ f = f$.\n' +
    '\n' +
    '**Umkehrabbildung (Inverse)**\n' +
    'Ist $f : A \\to B$ **bijektiv**, so besitzt $f$ eine **Umkehrabbildung** (Inverse)\n' +
    '$f^{-1} : B \\to A, \\quad \\text{wobei } f^{-1}(y) = x \\iff f(x) = y.$\n' +
    'Sie kehrt jeden Pfeil um. Es gilt $f^{-1} \\circ f = \\mathrm{id}_A$ und $f \\circ f^{-1} = \\mathrm{id}_B$: nacheinander angewendet heben sich $f$ und $f^{-1}$ gegenseitig auf.\n' +
    '\n' +
    '**Warum muss f bijektiv sein?**\n' +
    'Damit die Rück-Zuordnung selbst wieder eine Funktion ist, braucht jedes $y \\in B$ **genau ein** Urbild.\n' +
    '• **Injektiv** sorgt dafür, dass es höchstens ein $x$ mit $f(x)=y$ gibt (sonst wäre $f^{-1}(y)$ mehrdeutig).\n' +
    '• **Surjektiv** sorgt dafür, dass es mindestens ein solches $x$ gibt (sonst hätte $f^{-1}(y)$ gar keinen Wert).\n' +
    'Beides zusammen heißt **bijektiv** – nur dann existiert $f^{-1}$.\n' +
    '\n' +
    '**Umkehrfunktion bestimmen (Rezept)**\n' +
    '1. Funktion als Gleichung schreiben: $y = f(x)$.\n' +
    '2. Diese Gleichung nach $x$ **auflösen**, sodass $x = (\\text{Term in } y)$ dasteht.\n' +
    '3. **Variablen tauschen** ($x \\leftrightarrow y$), um die übliche Schreibweise $y = f^{-1}(x)$ zu erhalten.\n' +
    '4. Definitions- und Zielbereich angeben: Definitionsbereich und Wertebereich vertauschen sich gegenüber $f$.\n' +
    'Zeichnerisch erhält man den Graphen von $f^{-1}$ durch **Spiegelung an der Geraden** $y = x$ (der 1. Winkelhalbierenden) – man spiegelt den Graphen von $f$ an dieser Diagonalen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '| Fehler | Richtig |\n' +
    '|---|---|\n' +
    '| Reihenfolge verwechseln | In $g \\circ f$ wirkt zuerst $f$, dann $g$ |\n' +
    '| $f(A) \\subseteq C$ ignorieren | Ohne Verträglichkeit ist $g \\circ f$ gar nicht definiert |\n' +
    '| $f^{-1}$ mit $\\tfrac{1}{f}$ verwechseln | $f^{-1}$ ist die Umkehrung, nicht der Kehrwert |\n' +
    '| Inverse ohne Bijektivität bilden | $f^{-1}$ existiert nur, wenn $f$ bijektiv ist |',
  beispiele: [
    {
      szenario: 'Verketten und ausrechnen',
      beispiele: [
        '**Aufgabe:** Sei $f : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto x^2$ und $g : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto x^3$. Bestimme $g \\circ f$.\n**Lösung:** Erst $f$, dann $g$: $(g \\circ f)(x) = g(f(x)) = (f(x))^3 = (x^2)^3$.\n**Ergebnis:** $(g \\circ f)(x) = x^6$.',
        '**Aufgabe:** Mit $f(x)=x^2$ und $g(x)=x+1$ (beide auf $\\mathbb{R}$): zeige $g \\circ f \\neq f \\circ g$.\n**Lösung:** $(g \\circ f)(x) = g(x^2) = x^2 + 1$. Andersherum: $(f \\circ g)(x) = f(x+1) = (x+1)^2 = x^2 + 2x + 1$.\n**Ergebnis:** Die Terme sind verschieden, also ist die Komposition nicht kommutativ.',
        '**Aufgabe:** Gegeben $f : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto x^3 - 1$ und $g : [0,\\infty) \\to \\mathbb{R}, \\, x \\mapsto \\sqrt{x} + 2$. Bestimme $f \\circ g$ und $g \\circ f$, sofern möglich.\n**Lösung:** Für $f \\circ g$: $(f \\circ g)(x) = f(g(x)) = (\\sqrt{x}+2)^3 - 1$ auf $[0,\\infty)$ (alles passt). Für $g \\circ f$ müsste $f(\\mathbb{R}) \\subseteq [0,\\infty)$ gelten, aber $f(\\mathbb{R}) = \\mathbb{R}$ enthält negative Werte.\n**Ergebnis:** $(f \\circ g)(x) = (\\sqrt{x}+2)^3 - 1$; $g \\circ f$ ist **nicht möglich**, da $f(\\mathbb{R}) = \\mathbb{R} \\not\\subseteq [0,\\infty)$.',
      ],
    },
    {
      szenario: 'Umkehrfunktion bestimmen',
      beispiele: [
        '**Aufgabe:** Bestimme die Umkehrfunktion von $f : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto 2x + 6$.\n**Lösung:** Ansatz $y = 2x + 6$. Nach $x$ auflösen: $y - 6 = 2x$, also $x = \\tfrac{y-6}{2}$. Variablen tauschen: $y = \\tfrac{x-6}{2}$.\n**Ergebnis:** $f^{-1} : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto \\tfrac{x-6}{2} = \\tfrac{x}{2} - 3$.',
        '**Aufgabe:** Bestimme die Umkehrfunktion von $f : [0,\\infty) \\to [0,\\infty), \\, x \\mapsto x^2$.\n**Lösung:** Ansatz $y = x^2$ mit $x \\geq 0$. Auflösen: $x = \\sqrt{y}$ (das $+$, da $x \\geq 0$). Variablen tauschen: $y = \\sqrt{x}$. Definitions- und Zielbereich tauschen, bleiben hier aber beide $[0,\\infty)$.\n**Ergebnis:** $f^{-1} : [0,\\infty) \\to [0,\\infty), \\, x \\mapsto \\sqrt{x}$ – die Wurzel ist die Umkehrung des Quadrats (auf $[0,\\infty)$).',
        '**Aufgabe:** Bestimme die Umkehrfunktion von $f : \\mathbb{R} \\to (0,\\infty), \\, x \\mapsto e^x$ und prüfe mit der Komposition.\n**Lösung:** Ansatz $y = e^x$. Auflösen durch Logarithmieren: $x = \\ln y$. Variablen tauschen: $y = \\ln x$. Probe: $(f^{-1} \\circ f)(x) = \\ln(e^x) = x = \\mathrm{id}$.\n**Ergebnis:** $f^{-1} : (0,\\infty) \\to \\mathbb{R}, \\, x \\mapsto \\ln x$.',
      ],
    },
    {
      szenario: 'Warum Bijektivität nötig ist',
      beispiele: [
        '**Aufgabe:** Warum besitzt $f : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto x^2$ keine Umkehrfunktion?\n**Lösung:** $f$ ist nicht injektiv: $f(2) = 4 = f(-2)$. Eine Inverse müsste $f^{-1}(4)$ eindeutig festlegen, aber sowohl $2$ als auch $-2$ kommen infrage.\n**Ergebnis:** Keine Umkehrfunktion auf ganz $\\mathbb{R}$. Schränkt man auf $[0,\\infty)$ ein, wird $f$ bijektiv und $f^{-1}(x)=\\sqrt{x}$ existiert.',
        '**Aufgabe:** Sei $f : \\mathbb{R} \\to \\mathbb{R}, \\, x \\mapsto e^x$. Existiert die Umkehrfunktion mit diesem Zielbereich?\n**Lösung:** $f$ ist injektiv, aber nicht surjektiv auf $\\mathbb{R}$: kein $x$ liefert $e^x = -1$, da $e^x > 0$ ist. Für $y \\leq 0$ gäbe es kein Urbild, $f^{-1}(y)$ wäre undefiniert.\n**Ergebnis:** Erst mit dem korrekten Zielbereich $(0,\\infty)$ wird $f$ bijektiv; dann ist $f^{-1} = \\ln$.',
        '**Aufgabe:** Mit $f : [0,\\infty) \\to [0,\\infty), \\, x \\mapsto x+1$ und stückweisem $g : [0,\\infty) \\to [0,\\infty)$, $g(x)=x-1$ für $x \\geq 1$ und $g(x)=0$ sonst: bestimme $g \\circ f$.\n**Lösung:** Für jedes $x \\geq 0$ ist $f(x)=x+1 \\geq 1$, also greift bei $g$ stets der Fall $\\geq 1$: $(g \\circ f)(x) = (x+1) - 1 = x$.\n**Ergebnis:** $(g \\circ f)(x) = x = \\mathrm{id}$, also ist $g \\circ f$ bijektiv (hier ist $g$ ein Linksinverses von $f$).',
      ],
    },
  ],
}
