import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'folgen-grundbegriffe',
  titel: 'Folgen – Grundbegriffe',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Folge ist eine unendliche, nummerierte Liste von Zahlen, z. B. $1, \\tfrac{1}{2}, \\tfrac{1}{3}, \\tfrac{1}{4}, \\dots$ Solche Listen tauchen überall auf: bei Verzinsung, Bakterienwachstum oder radioaktivem Zerfall wird in jedem Schritt ein neuer Wert erzeugt. Die spannende Frage ist immer das Langzeitverhalten – was passiert für sehr große $n$? Um das später sauber untersuchen zu können (Stichwort Grenzwert/Konvergenz), braucht man zuerst die Grundbegriffe dieser Karte.\n' +
    '\n' +
    '**Was ist eine Folge?**\n' +
    'Eine **reelle Folge** ist eine Abbildung $f : \\mathbb{N} \\to \\mathbb{R}$, die jedem Index $n$ eine reelle Zahl $a_n$ zuordnet. Statt $f(n)$ schreibt man $a_n$ und nennt $a_n$ das $n$-te **Glied** der Folge. Die ganze Folge kürzt man ab als $(a_n)_{n\\in\\mathbb{N}}$ oder nur $(a_n)$, manchmal auch ausgeschrieben $(a_0, a_1, a_2, \\dots)$. Die Zahl $n$ heißt **Index**.\n' +
    'Wichtig: Eine Folge ist etwas anderes als die Menge ihrer Werte – die **Reihenfolge** und das **Wiederholen** von Werten zählen. So ist $(1, -1, 1, -1, \\dots)$ eine ganz normale Folge.\n' +
    'Manchmal beginnt die Nummerierung nicht bei $0$, sondern bei einem $n_0$; man schreibt dann $(a_n)_{n\\ge n_0}$. Bei $a_n = \\tfrac{1}{n}$ etwa startet man bei $n=1$.\n' +
    '\n' +
    '**Zwei Arten, eine Folge festzulegen**\n' +
    'Eine **explizite Bildungsvorschrift** gibt $a_n$ direkt als Formel in $n$ an, z. B. $a_n = 3n$ oder $a_n = (-1)^n$. Man kann jedes Glied sofort einzeln ausrechnen, ohne die Vorgänger zu kennen.\n' +
    'Eine **rekursive Definition** legt einen oder mehrere Startwerte fest und gibt eine Regel an, wie man aus bekannten Gliedern das nächste berechnet, z. B. $a_0 = 2$ und $a_{n+1} = \\tfrac{2a_n}{2+a_n}$. Hier muss man sich Schritt für Schritt vorarbeiten.\n' +
    '\n' +
    '**Monotonie**\n' +
    'Eine Folge beschreibt ihre Richtung über den Vergleich aufeinanderfolgender Glieder. Sie heißt\n' +
    '| Begriff | Bedingung für alle $n$ |\n' +
    '|---|---|\n' +
    '| monoton wachsend | $a_{n+1} \\ge a_n$ |\n' +
    '| streng monoton wachsend | $a_{n+1} > a_n$ |\n' +
    '| monoton fallend | $a_{n+1} \\le a_n$ |\n' +
    '| streng monoton fallend | $a_{n+1} < a_n$ |\n' +
    'Bei „streng“ ist Gleichheit verboten. Eine konstante Folge ist sowohl (schwach) wachsend als auch fallend, aber nicht streng.\n' +
    '\n' +
    '**Beschränktheit**\n' +
    'Eine Folge $(a_n)$ heißt **nach oben beschränkt**, wenn es eine Zahl $S$ gibt mit $a_n \\le S$ für alle $n$; $S$ heißt dann eine **obere Schranke**. Analog ist sie **nach unten beschränkt**, wenn ein $s$ mit $a_n \\ge s$ für alle $n$ existiert (**untere Schranke**). Ist sie nach oben und unten beschränkt, heißt sie kurz **beschränkt** – dann liegen alle Glieder in einem Streifen $s \\le a_n \\le S$. Schranken sind nicht eindeutig: ist $S$ obere Schranke, so auch jedes größere $S$.\n' +
    '\n' +
    '**Wie zeigt man Monotonie?**\n' +
    'Zwei Standardwege, beide vergleichen $a_{n+1}$ mit $a_n$:\n' +
    '• **Differenz:** Bilde $a_{n+1} - a_n$ und bestimme ihr Vorzeichen. Ist sie stets $\\ge 0$, wächst die Folge; ist sie stets $\\le 0$, fällt sie; bei $>0$ bzw. $<0$ ist es streng.\n' +
    '• **Quotient (nur bei durchweg positiven Gliedern):** Bilde $\\tfrac{a_{n+1}}{a_n}$ und vergleiche mit $1$. Ist der Quotient stets $\\ge 1$, wächst die Folge; ist er stets $\\le 1$, fällt sie.\n' +
    '\n' +
    '**Wie zeigt man Beschränktheit?**\n' +
    'Man rät eine Schranke (oft aus den ersten Gliedern oder dem Grenzwert) und weist die Ungleichung $a_n \\le S$ bzw. $a_n \\ge s$ für alle $n$ nach – durch Umformen oder per Induktion. Hilfreich: Eine monoton wachsende Folge ist automatisch nach unten durch ihr erstes Glied $a_0$ beschränkt; eine monoton fallende nach oben durch $a_0$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Index-Start übersehen: Bei $a_n = \\tfrac{1}{n}$ ist $n=0$ nicht erlaubt.\n' +
    '• „streng“ und „schwach“ verwechseln: $\\ge$ erlaubt Gleichheit, $>$ nicht.\n' +
    '• Aus endlich vielen Gliedern auf Monotonie schließen – die Bedingung muss für **alle** $n$ gelten.\n' +
    '• Den Quotiententest bei Folgen mit negativen Gliedern anwenden (dann dreht sich die Ungleichung um).',
  beispiele: [
    {
      szenario: 'Explizite Bildungsvorschrift finden',
      beispiele: [
        '**Aufgabe:** Gib zur Folge $(0, 3, 6, 9, 12, \\dots)$ die Vorschrift $\\mathbb{N}\\to\\mathbb{R},\\ n\\mapsto a_n$ an.\n**Lösung:** Die Glieder wachsen in Dreierschritten und starten bei $0$ (für $n=0$). Das ist das Dreifache des Index.\n**Ergebnis:** $a_n = 3n$.',
        '**Aufgabe:** Gib zur Folge $(-4, -1, 2, 5, 8, \\dots)$ die Bildungsvorschrift an.\n**Lösung:** Schrittweite $+3$, Startwert bei $n=0$ ist $-4$. Eine arithmetische Folge $a_n = a_0 + 3n$.\n**Ergebnis:** $a_n = -4 + 3n$.',
        '**Aufgabe:** Gib zur Folge $(0, -1, 2, -3, 4, \\dots)$ die Bildungsvorschrift an.\n**Lösung:** Die Beträge sind $0,1,2,3,4,\\dots$, also $n$. Das Vorzeichen wechselt: bei geradem $n$ positiv, bei ungeradem negativ – das leistet $(-1)^n$.\n**Ergebnis:** $a_n = (-1)^n\\, n$.',
      ],
    },
    {
      szenario: 'Rekursive Folge: Glieder berechnen',
      beispiele: [
        '**Aufgabe:** Sei $a_0 = 2$ und $a_{n+1} = \\tfrac{2a_n}{2+a_n}$. Bestimme $a_1$.\n**Lösung:** Setze $n=0$ ein: $a_1 = \\tfrac{2a_0}{2+a_0} = \\tfrac{2\\cdot 2}{2+2} = \\tfrac{4}{4}$.\n**Ergebnis:** $a_1 = 1$.',
        '**Aufgabe:** Bestimme mit derselben Rekursion $a_2$.\n**Lösung:** Jetzt $n=1$ mit $a_1 = 1$: $a_2 = \\tfrac{2a_1}{2+a_1} = \\tfrac{2\\cdot 1}{2+1} = \\tfrac{2}{3}$.\n**Ergebnis:** $a_2 = \\tfrac{2}{3}$.',
        '**Aufgabe:** Bestimme $a_3$.\n**Lösung:** $n=2$ mit $a_2 = \\tfrac{2}{3}$: $a_3 = \\tfrac{2\\cdot \\frac{2}{3}}{2+\\frac{2}{3}} = \\tfrac{\\frac{4}{3}}{\\frac{8}{3}} = \\tfrac{4}{8}$.\n**Ergebnis:** $a_3 = \\tfrac{1}{2}$.',
      ],
    },
    {
      szenario: 'Monotonie nachweisen',
      beispiele: [
        '**Aufgabe:** Ist $a_n = \\tfrac{1}{n}$ (für $n\\ge 1$) monoton? Differenzmethode.\n**Lösung:** $a_{n+1} - a_n = \\tfrac{1}{n+1} - \\tfrac{1}{n} = \\tfrac{n-(n+1)}{n(n+1)} = \\tfrac{-1}{n(n+1)}$. Der Nenner ist positiv, der Zähler $-1$, also ist die Differenz stets $<0$.\n**Ergebnis:** Die Folge ist streng monoton fallend.',
        '**Aufgabe:** Ist $a_n = 2^n$ monoton? Quotientenmethode (alle Glieder positiv).\n**Lösung:** $\\tfrac{a_{n+1}}{a_n} = \\tfrac{2^{n+1}}{2^n} = 2 > 1$ für alle $n$.\n**Ergebnis:** Die Folge ist streng monoton wachsend.',
        '**Aufgabe:** Ist $a_n = (-1)^n$ monoton?\n**Lösung:** Die Glieder sind $1, -1, 1, -1, \\dots$ Es ist $a_1 - a_0 = -1-1 = -2 < 0$, aber $a_2 - a_1 = 1-(-1) = 2 > 0$. Das Vorzeichen der Differenz wechselt.\n**Ergebnis:** Die Folge ist weder monoton wachsend noch fallend (sie alterniert).',
      ],
    },
    {
      szenario: 'Beschränktheit prüfen',
      beispiele: [
        '**Aufgabe:** Ist $a_n = \\tfrac{1}{n}$ (für $n\\ge 1$) beschränkt? Gib Schranken an.\n**Lösung:** Alle Glieder sind positiv, also $a_n > 0$ – $0$ ist untere Schranke. Das größte Glied ist $a_1 = 1$, und für $n\\ge 1$ gilt $\\tfrac{1}{n} \\le 1$ – $1$ ist obere Schranke.\n**Ergebnis:** Beschränkt, mit $0 < a_n \\le 1$.',
        '**Aufgabe:** Ist die Folge $a_n = n$ beschränkt?\n**Lösung:** Nach unten durch $0$ beschränkt ($a_n \\ge 0$). Nach oben aber nicht: zu jeder Zahl $S$ gibt es ein $n$ mit $n > S$, also kann keine obere Schranke existieren.\n**Ergebnis:** Nach unten beschränkt, nach oben unbeschränkt – insgesamt nicht beschränkt.',
        '**Aufgabe:** Ist $a_n = (-1)^n$ beschränkt? Gib Schranken an.\n**Lösung:** Die Folge nimmt nur die Werte $1$ und $-1$ an. Damit gilt $-1 \\le a_n \\le 1$ für alle $n$.\n**Ergebnis:** Beschränkt; $-1$ ist untere, $1$ ist obere Schranke.',
      ],
    },
  ],
}
