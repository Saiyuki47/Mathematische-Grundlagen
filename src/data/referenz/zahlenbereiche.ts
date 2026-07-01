import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'zahlenbereiche',
  titel: 'Zahlenbereiche ℕ, ℤ, ℚ, ℝ',
  inhalt:
    '**Worum geht es?**\n' +
    'Die Mathematik arbeitet mit verschiedenen Zahlbereichen, die aufeinander aufbauen. Man fängt mit den natürlichen Zahlen zum Zählen an und erweitert sie schrittweise immer dann, wenn eine Rechenart aus dem alten Bereich hinausführt. So entsteht die Kette $\\mathbb N \\subset \\mathbb Z \\subset \\mathbb Q \\subset \\mathbb R$. Jeder neue Bereich enthält den alten vollständig und kann zusätzlich etwas, das vorher nicht ging.\n' +
    '\n' +
    '**Die vier Bereiche im Überblick**\n' +
    '| Symbol | Name | Beispiele |\n' +
    '|---|---|---|\n' +
    '| $\\mathbb N$ | natürliche Zahlen | $0, 1, 2, 3, \\dots$ |\n' +
    '| $\\mathbb Z$ | ganze Zahlen | $\\dots, -2, -1, 0, 1, 2, \\dots$ |\n' +
    '| $\\mathbb Q$ | rationale Zahlen | $\\tfrac12,\\ -\\tfrac34,\\ 5,\\ 0{,}25$ |\n' +
    '| $\\mathbb R$ | reelle Zahlen | $\\sqrt2,\\ \\pi,\\ -1{,}5,\\ \\tfrac13$ |\n' +
    '\n' +
    '**Warum erweitert man überhaupt?**\n' +
    'Jede Erweiterung repariert eine Rechnung, die im kleineren Bereich nicht immer aufgeht:\n' +
    '• In $\\mathbb N$ kann man nicht uneingeschränkt **subtrahieren**: $3-5$ hat keine natürliche Lösung. Man fügt die negativen Zahlen hinzu und erhält $\\mathbb Z$.\n' +
    '• In $\\mathbb Z$ kann man nicht uneingeschränkt **dividieren**: $1:3$ ist keine ganze Zahl. Man fügt die Brüche hinzu und erhält $\\mathbb Q$.\n' +
    '• In $\\mathbb Q$ fehlen **Wurzeln, Grenzwerte und die Vollständigkeit**: $\\sqrt2$ ist keine rationale Zahl, und Lücken auf der Zahlengeraden bleiben offen. Man füllt sie und erhält $\\mathbb R$.\n' +
    '\n' +
    '**ℕ — die natürlichen Zahlen**\n' +
    'Die Zahlen zum Zählen. **Achtung Konvention:** ob die $0$ dazugehört, ist nicht einheitlich geregelt. In dieser Vorlesung gehört $0$ zu $\\mathbb N$, und für die positiven natürlichen Zahlen schreibt man $\\mathbb N^* = \\mathbb N \\setminus \\{0\\} = \\{1,2,3,\\dots\\}$. Addieren und Multiplizieren bleibt in $\\mathbb N$, Subtrahieren nicht.\n' +
    '\n' +
    '**ℤ — die ganzen Zahlen**\n' +
    'Die natürlichen Zahlen zusammen mit ihren negativen Gegenstücken: $\\mathbb Z = \\{0, 1, -1, 2, -2, 3, -3, \\dots\\}$. Jetzt ist die Differenz $x-y$ immer definiert. Multiplizieren bleibt in $\\mathbb Z$, Dividieren noch nicht.\n' +
    '\n' +
    '**ℚ — die rationalen Zahlen**\n' +
    'Alle Brüche aus ganzen Zahlen: $\\mathbb Q = \\left\\{\\tfrac{m}{n} : m,n \\in \\mathbb Z,\\ n \\neq 0\\right\\}$. Eine **rationale Zahl** ist also genau eine Zahl, die sich als Bruch $\\tfrac{m}{n}$ mit ganzem Zähler und ganzem, von $0$ verschiedenem Nenner schreiben lässt. In $\\mathbb Q$ sind alle vier Grundrechenarten uneingeschränkt möglich (außer Division durch $0$).\n' +
    '\n' +
    '**ℝ — die reellen Zahlen**\n' +
    'Die Menge aller Dezimalzahlen, also alle Punkte der Zahlengeraden ohne Lücken. $\\mathbb R$ enthält zusätzlich die **irrationalen** Zahlen, die sich nicht als Bruch schreiben lassen, z. B. $\\sqrt2$, $\\pi$ oder $\\sqrt3$. Es gilt $\\sqrt2 \\in \\mathbb R \\setminus \\mathbb Q$. Erst in $\\mathbb R$ funktionieren Grenzwerte sauber: jede reelle Zahl kann beliebig genau durch rationale Zahlen angenähert (approximiert) werden, und $\\mathbb R$ ist **vollständig** (Intervallschachtelungs- bzw. Supremumseigenschaft) — es gibt keine Löcher mehr.\n' +
    '\n' +
    '**Dezimaldarstellung: rational oder irrational?**\n' +
    'An der Kommazahl erkennt man, in welchem Bereich eine Zahl liegt:\n' +
    '• **abbrechend** (endet nach endlich vielen Ziffern), z. B. $0{,}25$ → rational.\n' +
    '• **periodisch** (eine Ziffernfolge wiederholt sich endlos), z. B. $0{,}333\\dots = \\tfrac13$ → rational.\n' +
    '• **unendlich und nicht periodisch**, z. B. $\\sqrt2 = 1{,}41421\\dots$ → irrational.\n' +
    'Merksatz: Eine Zahl ist **genau dann rational, wenn ihre Dezimaldarstellung abbricht oder periodisch ist**. Umgekehrt ist jede abbrechende und jede periodische Dezimalzahl eine rationale Zahl.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\sqrt2$ für rational halten: Die Kommazahl bricht nie ab und wird nie periodisch.\n' +
    '• Glauben, $\\tfrac13$ sei keine „richtige" Zahl: $0{,}333\\dots$ ist periodisch, also rational.\n' +
    '• Die Inklusionen verwechseln: Es gilt $\\mathbb N \\subset \\mathbb Z \\subset \\mathbb Q \\subset \\mathbb R$, nicht umgekehrt. Jede ganze Zahl ist rational ($5 = \\tfrac51$), aber nicht jede rationale Zahl ist ganz.\n' +
    '• Die $0$-Frage bei $\\mathbb N$ falsch annehmen: Immer die Konvention der jeweiligen Vorlesung prüfen — hier gehört $0$ dazu.',
  beispiele: [
    {
      szenario: 'Zahl im kleinsten passenden Bereich einordnen',
      beispiele: [
        '**Aufgabe:** In welche Bereiche $\\mathbb N, \\mathbb Z, \\mathbb Q, \\mathbb R$ gehört die Zahl $-7$?\n**Lösung:** $-7$ ist negativ, also nicht in $\\mathbb N$. Sie ist ganz, also in $\\mathbb Z$. Jede ganze Zahl ist auch rational ($-7 = \\tfrac{-7}{1}$) und reell.\n**Ergebnis:** $-7 \\in \\mathbb Z,\\ \\mathbb Q,\\ \\mathbb R$, aber $-7 \\notin \\mathbb N$.',
        '**Aufgabe:** Wohin gehört $\\tfrac{3}{4}$?\n**Lösung:** $\\tfrac34$ ist kein ganzzahliger Wert, also weder in $\\mathbb N$ noch in $\\mathbb Z$. Als Bruch aus ganzen Zahlen ist sie rational, und jede rationale Zahl ist reell.\n**Ergebnis:** $\\tfrac34 \\in \\mathbb Q$ und $\\tfrac34 \\in \\mathbb R$; kleinster passender Bereich ist $\\mathbb Q$.',
        '**Aufgabe:** Wohin gehört $\\sqrt2$?\n**Lösung:** $\\sqrt2 = 1{,}41421\\dots$ hat eine unendliche, nicht periodische Dezimaldarstellung, lässt sich also nicht als Bruch schreiben. Sie ist irrational, aber eine reelle Zahl.\n**Ergebnis:** $\\sqrt2 \\in \\mathbb R \\setminus \\mathbb Q$; sie liegt nur in $\\mathbb R$.',
      ],
    },
    {
      szenario: 'Dezimaldarstellung ⟺ rational',
      beispiele: [
        '**Aufgabe:** Ist $0{,}125$ rational? Wenn ja, gib einen Bruch an.\n**Lösung:** Die Dezimaldarstellung bricht ab, also ist die Zahl rational. Es ist $0{,}125 = \\tfrac{125}{1000} = \\tfrac18$.\n**Ergebnis:** Ja, $0{,}125 = \\tfrac18 \\in \\mathbb Q$.',
        '**Aufgabe:** Ist $0{,}666\\dots = 0{,}\\overline{6}$ rational?\n**Lösung:** Die Ziffer $6$ wiederholt sich endlos, die Darstellung ist also periodisch und damit rational. Tatsächlich ist $0{,}\\overline{6} = \\tfrac23$.\n**Ergebnis:** Ja, $0{,}\\overline{6} = \\tfrac23 \\in \\mathbb Q$.',
        '**Aufgabe:** Ist $0{,}1010010001\\dots$ (nach jeder $1$ eine Null mehr) rational?\n**Lösung:** Die Ziffernfolge bricht nicht ab und hat keine sich wiederholende Periode. Damit ist sie nicht rational.\n**Ergebnis:** Nein, die Zahl ist irrational, liegt also in $\\mathbb R \\setminus \\mathbb Q$.',
      ],
    },
    {
      szenario: 'Erweiterung: warum reicht der kleinere Bereich nicht?',
      beispiele: [
        '**Aufgabe:** Hat $3 - 5$ eine Lösung in $\\mathbb N$? Wo schon?\n**Lösung:** In $\\mathbb N$ (mit $0$) gibt es keine Zahl kleiner als $0$, also keine Lösung. In $\\mathbb Z$ existiert die negative Zahl $-2$.\n**Ergebnis:** $3 - 5 = -2 \\notin \\mathbb N$, aber $-2 \\in \\mathbb Z$. Genau dafür erweitert man $\\mathbb N$ zu $\\mathbb Z$.',
        '**Aufgabe:** Hat $1 : 3$ eine Lösung in $\\mathbb Z$? Wo schon?\n**Lösung:** Es gibt keine ganze Zahl $z$ mit $3z = 1$. In $\\mathbb Q$ existiert der Bruch $\\tfrac13$.\n**Ergebnis:** $\\tfrac13 \\notin \\mathbb Z$, aber $\\tfrac13 \\in \\mathbb Q$. Dafür erweitert man $\\mathbb Z$ zu $\\mathbb Q$.',
        '**Aufgabe:** Welche Menge ist $M = \\left\\{\\tfrac1z : z \\in \\mathbb Z \\setminus \\{0\\}\\right\\}$, und welche Bereiche braucht man dafür?\n**Lösung:** Einsetzen von $z = 1, -1, 2, -2, 3, \\dots$ liefert $1, -1, \\tfrac12, -\\tfrac12, \\tfrac13, \\dots$. Alle Werte sind Brüche aus ganzen Zahlen, also rational; der größte Wert ist $1$ (bei $z=1$), der kleinste $-1$ (bei $z=-1$).\n**Ergebnis:** $M \\subset \\mathbb Q$ mit $\\max M = 1$ und $\\min M = -1$. Schon zur bloßen Bildung von $\\tfrac1z$ genügt $\\mathbb Z$ nicht — man braucht $\\mathbb Q$.',
      ],
    },
  ],
}
