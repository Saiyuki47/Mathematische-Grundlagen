import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'folgen-konvergenz',
  titel: 'Konvergenz & Grenzwert',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Folge $(a_n)$ ist eine unendliche Liste von Zahlen $a_0, a_1, a_2, \\dots$ (formal eine Abbildung $f:\\mathbb{N}\\to\\mathbb{R}$, $n\\mapsto a_n$). Die zentrale Frage ist das Langzeitverhalten: Was passiert mit den Gliedern, wenn $n$ immer größer wird, also „für $n\\to\\infty$"? Oft steuern die Glieder auf eine feste Zahl zu — z. B. nähert sich $\\frac{1}{n} = 1, \\tfrac12, \\tfrac13, \\dots$ immer mehr der $0$. Diese Zahl heißt Grenzwert, und die Folge heißt konvergent.\n' +
    '\n' +
    '**Anschauliche Idee**\n' +
    'Eine Folge $(a_n)$ konvergiert gegen $a$, wenn ihre Glieder dem Wert $a$ schließlich beliebig nahe kommen und auch nahe bleiben. „Beliebig nahe" heißt: egal wie kleine Toleranz man vorgibt — ab irgendeinem Index liegen alle weiteren Glieder innerhalb dieser Toleranz um $a$.\n' +
    '\n' +
    '**Warum reicht „nähert sich an" nicht?**\n' +
    'Der Satz „die Glieder kommen $a$ immer näher" ist zu unscharf: Auch $a_n = 1 + \\frac{1}{n}$ kommt der $0$ „näher" (von $2$ auf Werte knapp über $1$), landet aber bei $1$, nicht bei $0$. Man braucht eine Formulierung, die garantiert, dass die Glieder $a$ wirklich beliebig nahe kommen — und genau das leistet die $\\varepsilon$-$N$-Definition.\n' +
    '\n' +
    '**Präzise Definition (ε-N)**\n' +
    'Eine reelle Folge $(a_n)$ heißt **konvergent gegen** $a\\in\\mathbb{R}$, falls gilt:\n' +
    '$\\forall\\,\\varepsilon>0\\ \\ \\exists\\,N\\in\\mathbb{N}\\ \\ \\forall\\,n\\ge N:\\ |a_n-a|<\\varepsilon$\n' +
    'In Worten: Zu jedem (noch so kleinen) $\\varepsilon>0$ gibt es einen Index $N$, ab dem alle Glieder $a_n$ weniger als $\\varepsilon$ von $a$ entfernt sind. Die Bedingung $|a_n-a|<\\varepsilon$ bedeutet geometrisch $a_n\\in(a-\\varepsilon,\\,a+\\varepsilon)$, also: ab $N$ liegen alle Glieder im $\\varepsilon$-Streifen um $a$.\n' +
    '\n' +
    '**Schreibweisen & Begriffe**\n' +
    '$\\lim_{n\\to\\infty} a_n = a$ oder $a_n\\to a$ (für $n\\to\\infty$). Die Zahl $a$ heißt **Grenzwert** oder **Limes** der Folge.\n' +
    '• **konvergent**: es gibt ein $a\\in\\mathbb{R}$, gegen das die Folge konvergiert.\n' +
    '• **divergent**: die Folge ist nicht konvergent (z. B. $a_n=(-1)^n$ oder $a_n=n$).\n' +
    '• **Nullfolge**: eine Folge mit $\\lim_{n\\to\\infty} a_n = 0$, also $a_n\\to 0$.\n' +
    '\n' +
    '**Zwei wichtige Sätze**\n' +
    '• **Eindeutigkeit:** Eine Folge kann keine zwei verschiedenen Grenzwerte haben — der Limes ist eindeutig.\n' +
    '• **Anfang egal:** Das Konvergenzverhalten hängt nicht von endlich vielen Anfangsgliedern ab. $(a_n)$ konvergiert genau dann, wenn $(a_n)_{n\\ge N}$ für ein $N$ konvergiert.\n' +
    '\n' +
    '**Wie führt man einen ε-Beweis? (Schritt für Schritt)**\n' +
    'Ziel: zeigen, dass $a_n\\to a$. Man muss zu **jedem** $\\varepsilon>0$ ein passendes $N$ angeben.\n' +
    '1. **Start:** „Sei $\\varepsilon>0$ beliebig." ($\\varepsilon$ ist vorgegeben, $N$ darf davon abhängen.)\n' +
    '2. **Abstand aufstellen:** Schreibe $|a_n-a|$ als möglichst einfachen Ausdruck in $n$.\n' +
    '3. **Nach dem Index auflösen:** Bestimme, ab welchem $n$ die Ungleichung $|a_n-a|<\\varepsilon$ gilt (Ungleichung nach $n$ umstellen).\n' +
    '4. **Schranke wählen:** Wähle $N$ so groß, dass die Schranke erfüllt ist (notfalls aufrunden; dass es zu jeder reellen Schranke ein größeres $N\\in\\mathbb{N}$ gibt, ist das Archimedische Prinzip).\n' +
    '5. **Nachrechnen:** Zeige für alle $n\\ge N$ durch eine Ungleichungskette, dass $|a_n-a|<\\varepsilon$. Fertig ($\\square$).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $N$ darf von $\\varepsilon$ abhängen (kleineres $\\varepsilon$ braucht meist größeres $N$) — aber **nicht** von $n$.\n' +
    '• Die Reihenfolge der Quantoren ist entscheidend: erst $\\varepsilon$, dann $N$, dann alle $n\\ge N$.\n' +
    '• „$a_n$ wird kleiner" beweist keine Konvergenz; nur eine Abschätzung $|a_n-a|<\\varepsilon$ tut es.\n' +
    '• $\\varepsilon=0$ ist nicht erlaubt; verlangt wird die Schranke für **jedes** $\\varepsilon>0$.',
  beispiele: [
    {
      szenario: 'Zu gegebenem ε ein N finden',
      beispiele: [
        '**Aufgabe:** Sei $a_n=\\frac{1}{\\sqrt{n}}$ (für $n\\ge 1$). Gib zu $\\varepsilon=10$ ein $N$ an mit $|a_n-0|<\\varepsilon$ für alle $n\\ge N$.\n**Lösung:** $\\left|\\frac{1}{\\sqrt{n}}-0\\right|<\\varepsilon \\iff \\frac{1}{\\sqrt{n}}<\\varepsilon \\iff n>\\frac{1}{\\varepsilon^2}$. Hier $\\frac{1}{\\varepsilon^2}=\\frac{1}{100}$, also reicht jedes $n\\ge 1$.\n**Ergebnis:** $N=1$ funktioniert.',
        '**Aufgabe:** Gleiche Folge $a_n=\\frac{1}{\\sqrt{n}}$, jetzt $\\varepsilon=\\frac{1}{10}$.\n**Lösung:** Bedingung $n>\\frac{1}{\\varepsilon^2}=\\frac{1}{(1/10)^2}=100$. Das kleinste passende $N$ ist also $101$.\n**Ergebnis:** $N=101$ (alle $n\\ge 101$ erfüllen $\\frac{1}{\\sqrt{n}}<\\frac{1}{10}$).',
        '**Aufgabe:** Gleiche Folge, $\\varepsilon=\\frac{1}{10^6}$.\n**Lösung:** $n>\\frac{1}{\\varepsilon^2}=\\frac{1}{(10^{-6})^2}=10^{12}$. Also $N=10^{12}+1$.\n**Ergebnis:** $N=10^{12}+1$. (Je kleiner $\\varepsilon$, desto größer das nötige $N$.)',
      ],
    },
    {
      szenario: 'Vollständiger ε-Beweis',
      beispiele: [
        '**Aufgabe:** Zeige direkt mit der Definition: $\\lim_{n\\to\\infty}\\frac{1}{\\sqrt{n}}=0$.\n**Lösung:** Sei $\\varepsilon>0$ beliebig. Wähle $N\\in\\mathbb{N}$ mit $N>\\frac{1}{\\varepsilon^2}$. Für alle $n\\ge N$ gilt dann (Wurzel ist monoton): $\\left|\\frac{1}{\\sqrt{n}}-0\\right|=\\frac{1}{\\sqrt{n}}\\le\\frac{1}{\\sqrt{N}}<\\frac{1}{\\sqrt{1/\\varepsilon^2}}=\\varepsilon$.\n**Ergebnis:** Zu jedem $\\varepsilon>0$ existiert $N$ mit $|a_n-0|<\\varepsilon$ für alle $n\\ge N$, also $\\frac{1}{\\sqrt{n}}\\to 0$. $\\square$',
        '**Aufgabe:** Zeige mit der Definition: $\\lim_{n\\to\\infty}\\frac{1}{n}=0$.\n**Lösung:** Sei $\\varepsilon>0$. $\\left|\\frac{1}{n}-0\\right|=\\frac{1}{n}<\\varepsilon \\iff n>\\frac{1}{\\varepsilon}$. Wähle $N\\in\\mathbb{N}$ mit $N>\\frac{1}{\\varepsilon}$. Für alle $n\\ge N$ gilt $\\frac{1}{n}\\le\\frac{1}{N}<\\varepsilon$.\n**Ergebnis:** $\\frac{1}{n}$ ist eine Nullfolge: $\\lim_{n\\to\\infty}\\frac{1}{n}=0$. $\\square$',
        '**Aufgabe:** Zeige mit der Definition, dass die konstante Folge $a_n=c$ gegen $c$ konvergiert.\n**Lösung:** Sei $\\varepsilon>0$ beliebig. Es ist $|a_n-c|=|c-c|=0<\\varepsilon$ für **alle** $n$. Also leistet bereits $N=0$ das Verlangte.\n**Ergebnis:** $\\lim_{n\\to\\infty} c = c$. $\\square$',
      ],
    },
    {
      szenario: 'Konvergent oder divergent?',
      beispiele: [
        '**Aufgabe:** Konvergiert $a_n=(-1)^n$?\n**Lösung:** Die Glieder springen $1,-1,1,-1,\\dots$. Für $\\varepsilon=1$ kann kein $a$ alle Glieder ab einem $N$ im Streifen $(a-1,a+1)$ einfangen, denn aufeinanderfolgende Glieder haben Abstand $2$.\n**Ergebnis:** divergent (kein Grenzwert).',
        '**Aufgabe:** Konvergiert $a_n=n$?\n**Lösung:** Die Glieder $0,1,2,3,\\dots$ wachsen unbeschränkt; sie bleiben keinem festen $a$ nahe. (Jede konvergente Folge ist beschränkt — diese ist es nicht.)\n**Ergebnis:** divergent.',
        '**Aufgabe:** Ist $a_n=\\frac{1}{2^n}$ eine Nullfolge?\n**Lösung:** Die Glieder $1,\\tfrac12,\\tfrac14,\\tfrac18,\\dots$ halbieren sich und werden beliebig klein. Zu $\\varepsilon>0$ findet man $N$ mit $\\frac{1}{2^N}<\\varepsilon$ (da $2^N$ unbeschränkt wächst); für $n\\ge N$ folgt $\\left|\\frac{1}{2^n}-0\\right|=\\frac{1}{2^n}\\le\\frac{1}{2^N}<\\varepsilon$.\n**Ergebnis:** Ja, $\\lim_{n\\to\\infty}\\frac{1}{2^n}=0$ — eine Nullfolge.',
      ],
    },
  ],
}
