import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'abzaehlbarkeit',
  titel: 'Abzählbarkeit unendlicher Mengen',
  inhalt:
    '**Worum geht es?**\n' +
    'Endliche Mengen kann man vergleichen, indem man ihre Elemente abzählt. Bei unendlichen Mengen versagt das – trotzdem will man unterscheiden, ob eine unendliche Menge „so groß wie $\\mathbb{N}$" ist (man kann sie der Reihe nach durchnummerieren) oder „echt größer". Die zentrale Idee: Größe wird nicht über eine Zahl gemessen, sondern über **Abbildungen** zwischen Mengen. Überraschend dabei – $\\mathbb{N}$, $\\mathbb{Z}$ und $\\mathbb{Q}$ sind „gleich groß", aber $\\mathbb{R}$ ist echt größer.\n' +
    '\n' +
    '**Gleichmächtigkeit (gleiche Kardinalität)**\n' +
    'Zwei Mengen $M$ und $N$ heißen **gleichmächtig**, wenn es eine **bijektive** Abbildung (Bijektion) zwischen ihnen gibt – also eine Zuordnung, die zugleich injektiv (verschiedene Urbilder, verschiedene Bilder) und surjektiv (jeder Wert wird getroffen) ist. Man schreibt dann $|M| = |N|$ und nennt das die gemeinsame **Kardinalität**. Eine Bijektion ist eine perfekte Paarung: jedem Element von $M$ entspricht genau ein Element von $N$ und umgekehrt. Für endliche Mengen heißt das schlicht „gleich viele Elemente"; für unendliche Mengen ist es die einzig sinnvolle Verallgemeinerung von „gleich groß".\n' +
    '\n' +
    '**Abzählbar und überabzählbar (Definition)**\n' +
    'Eine Menge $M$ heißt **abzählbar**, falls $M = \\emptyset$ ist oder falls es eine **surjektive** Abbildung $f : \\mathbb{N} \\to M$ gibt (also $f(\\mathbb{N}) = M$). Anschaulich: man kann alle Elemente von $M$ in einer (evtl. mit Wiederholungen behafteten) Liste $f(0), f(1), f(2), \\dots$ aufzählen. Ansonsten heißt $M$ **überabzählbar**. Mit dieser Definition sind insbesondere alle **endlichen** Mengen abzählbar.\n' +
    '\n' +
    '**Abzählbar unendlich**\n' +
    'Eine Menge heißt **abzählbar unendlich**, wenn sie abzählbar und nicht endlich ist – gleichwertig: wenn es eine **Bijektion** mit $\\mathbb{N}$ gibt, also $|M| = |\\mathbb{N}|$. Eine surjektive Aufzählung mit Doppelungen lässt sich nämlich stets zu einer bijektiven (doppelungsfreien) ausdünnen. „Abzählbar" deckt also zwei Fälle ab: **endlich** oder **abzählbar unendlich**.\n' +
    '\n' +
    '**Wie zeigt man Abzählbarkeit?**\n' +
    'Um zu zeigen, dass $M$ abzählbar ist, gibt man eine der folgenden Konstruktionen an:\n' +
    '• eine **surjektive** Abbildung $\\mathbb{N} \\to M$ (Aufzählung, Doppelungen erlaubt), oder\n' +
    '• eine **Bijektion** $\\mathbb{N} \\to M$ (lückenlose, doppelungsfreie Nummerierung), oder\n' +
    '• ein **Abzählschema**: ein systematischer Weg, jedes Element von $M$ irgendwann zu erreichen (z. B. „diagonal" ein zweidimensionales Schema durchlaufen).\n' +
    'Um **Überabzählbarkeit** zu zeigen, führt man die Annahme „es gäbe eine vollständige Aufzählung" zum Widerspruch (Cantorsches Diagonalargument, siehe unten).\n' +
    '\n' +
    '**Wichtige Beispiele**\n' +
    '| Menge | Status |\n' +
    '|---|---|\n' +
    '| $\\mathbb{N}$ | abzählbar (unendlich) |\n' +
    '| $\\mathbb{Z}$ | abzählbar (unendlich) |\n' +
    '| $\\mathbb{Q}$ | abzählbar (unendlich) |\n' +
    '| $\\mathbb{N} \\times \\mathbb{N}$ | abzählbar (unendlich) |\n' +
    '| $(0,1)$ | überabzählbar |\n' +
    '| $\\mathbb{R}$ | überabzählbar |\n' +
    '| $\\mathcal{P}(\\mathbb{N})$ (Potenzmenge) | überabzählbar |\n' +
    'Es gilt $|\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}|$ sowie $|(0,1)| = |\\mathbb{R}|$, aber $|\\mathbb{N}| \\neq |\\mathbb{R}|$.\n' +
    '\n' +
    '**Warum ist $\\mathbb{Z}$ abzählbar?**\n' +
    'Man zählt abwechselnd ins Positive und Negative: $0, 1, -1, 2, -2, 3, -3, \\dots$ Formal liefert das eine Bijektion $\\mathbb{N} \\to \\mathbb{Z}$, jede ganze Zahl bekommt also genau eine Nummer. Wichtige Einsicht: Eine echte Teilmenge ($\\mathbb{N} \\subseteq \\mathbb{Z}$) kann dieselbe Kardinalität wie die ganze Menge haben – ein typisches Phänomen unendlicher Mengen.\n' +
    '\n' +
    '**Warum ist $\\mathbb{Q}$ abzählbar? (Abzählschema)**\n' +
    'Brüche $\\frac{p}{q}$ ordnet man in einem zweidimensionalen Schema an (Zeile = Zähler, Spalte = Nenner) und läuft es **diagonal** ab; bereits gekürzt vorgekommene Werte überspringt man. So erreicht man jeden Bruch nach endlich vielen Schritten – $\\mathbb{Q}$ ist abzählbar. Dasselbe Diagonalverfahren zeigt allgemeiner, dass $\\mathbb{N} \\times \\mathbb{N}$ abzählbar ist.\n' +
    '\n' +
    '**Abzählbare Vereinigung abzählbarer Mengen**\n' +
    'Sind $M_0, M_1, M_2, \\dots$ allesamt abzählbar, so ist auch ihre Vereinigung $\\bigcup_{n=0}^{\\infty} M_n$ abzählbar. Beweisidee: Man schreibt die Elemente von $M_n$ in die $n$-te Zeile eines Schemas und läuft dieses wieder diagonal ab (Doppelungen werden übersprungen). „Abzählbar viele abzählbare Mengen zusammen" bleiben also abzählbar.\n' +
    '\n' +
    '**$\\mathbb{R}$ ist überabzählbar (Cantorsches Diagonalargument)**\n' +
    'Es genügt zu zeigen, dass schon das Intervall $(0,1)$ überabzählbar ist. Annahme (Widerspruch): $(0,1)$ wäre abzählbar, man hätte also eine vollständige Liste aller Zahlen $x_0, x_1, x_2, \\dots$ als Dezimalbrüche. Nun konstruiert man eine neue Zahl $y = 0{,}y_1 y_2 y_3 \\dots$, indem man die $n$-te Nachkommastelle von $y$ **anders** wählt als die $n$-te Nachkommastelle von $x_n$ (z. B. eine $5$, wenn dort keine $5$ steht, sonst eine $6$ – Ziffern $0$ und $9$ meidet man, um Doppeldarstellungen auszuschließen). Dann unterscheidet sich $y$ von **jedem** $x_n$ an mindestens einer Stelle, kommt also in der Liste nicht vor. Das widerspricht der Vollständigkeit der Liste. Folglich ist $(0,1)$ – und damit $\\mathbb{R}$ – überabzählbar.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• „Unendlich = unendlich" – falsch. Es gibt verschieden große Unendlichkeiten; $|\\mathbb{N}| \\neq |\\mathbb{R}|$.\n' +
    '• Glauben, eine echte Teilmenge sei stets „kleiner". Bei unendlichen Mengen kann $|\\mathbb{N}| = |\\mathbb{Z}|$ gelten.\n' +
    '• Für Abzählbarkeit eine **bijektive** Abbildung verlangen – eine **surjektive** $\\mathbb{N} \\to M$ genügt schon.\n' +
    '• Beim Diagonalargument vergessen, $y$ wirklich an der $n$-ten Stelle von $x_n$ zu ändern (nur dann unterscheidet sich $y$ von allen Listeneinträgen).',
  beispiele: [
    {
      szenario: 'Gleichmächtigkeit über eine Bijektion zeigen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $\\mathbb{N}$ und die geraden Zahlen $G = \\{0, 2, 4, 6, \\dots\\}$ gleichmächtig sind.\n**Lösung:** Definiere $f : \\mathbb{N} \\to G,\\ n \\mapsto 2n$. Sie ist injektiv ($2n_1 = 2n_2 \\Rightarrow n_1 = n_2$) und surjektiv (jede gerade Zahl $2k$ ist Bild von $k$), also bijektiv.\n**Ergebnis:** $|\\mathbb{N}| = |G|$ – die Teilmenge $G$ ist gleichmächtig zur ganzen Menge $\\mathbb{N}$.',
        '**Aufgabe:** Zeige, dass $\\mathbb{Z}$ abzählbar (unendlich) ist.\n**Lösung:** Zähle $\\mathbb{Z}$ alternierend auf: $0, 1, -1, 2, -2, \\dots$ Das liefert die Bijektion $f : \\mathbb{N} \\to \\mathbb{Z}$ mit $f(n) = \\tfrac{n}{2}$ für gerades $n$ und $f(n) = -\\tfrac{n+1}{2}$ für ungerades $n$. Jede ganze Zahl erhält genau eine Nummer.\n**Ergebnis:** $f$ ist bijektiv, also $|\\mathbb{Z}| = |\\mathbb{N}|$ und $\\mathbb{Z}$ ist abzählbar.',
        '**Aufgabe:** Zeige, dass das offene Intervall $(0,1)$ und $\\mathbb{R}$ gleichmächtig sind.\n**Lösung:** Eine Bijektion ist $f : (0,1) \\to \\mathbb{R},\\ x \\mapsto \\tan\\!\\big(\\pi (x - \\tfrac{1}{2})\\big)$: sie bildet $(0,1)$ streng monoton und umkehrbar auf ganz $\\mathbb{R}$ ab.\n**Ergebnis:** $|(0,1)| = |\\mathbb{R}|$ – beide Mengen sind (über)abzählbar von gleicher Kardinalität.',
      ],
    },
    {
      szenario: 'Unendlichkeit nach Dedekind (Übungsblatt 6, Aufgabe 1a)',
      beispiele: [
        '**Aufgabe:** Nach Dedekind heißt $M$ unendlich, wenn es eine echte Teilmenge $K \\subsetneq M$ gibt, die sich bijektiv auf $M$ abbilden lässt. Zeige, dass $\\mathbb{N}$ unendlich ist.\n**Lösung:** Wähle $K = \\mathbb{N} \\setminus \\{0\\}$ (echte Teilmenge) und $f : \\mathbb{N} \\setminus \\{0\\} \\to \\mathbb{N},\\ n \\mapsto n - 1$. Diese Abbildung ist bijektiv (Umkehrung $m \\mapsto m + 1$).\n**Ergebnis:** $\\mathbb{N}$ ist gleichmächtig zu seiner echten Teilmenge $K$, nach Dedekind also unendlich.',
        '**Aufgabe:** Warum funktioniert das Dedekind-Kriterium bei einer endlichen Menge wie $\\{1,2,3\\}$ nicht?\n**Lösung:** Jede echte Teilmenge hat hier weniger Elemente (höchstens $2$). Eine Bijektion zwischen Mengen verschiedener (endlicher) Elementzahl gibt es nicht – es bliebe stets ein Element ohne Partner.\n**Ergebnis:** Keine echte Teilmenge ist gleichmächtig zu $\\{1,2,3\\}$; die Menge ist (korrekterweise) endlich.',
        '**Aufgabe:** Gib eine Bijektion zwischen $\\mathbb{N}$ und $\\mathbb{N} \\setminus \\{0, 1\\}$ an.\n**Lösung:** $f : \\mathbb{N} \\to \\mathbb{N} \\setminus \\{0,1\\},\\ n \\mapsto n + 2$ ist injektiv und surjektiv (Umkehrung $m \\mapsto m - 2$).\n**Ergebnis:** $|\\mathbb{N}| = |\\mathbb{N} \\setminus \\{0,1\\}|$ – auch das Entfernen endlich vieler Elemente ändert die Kardinalität nicht.',
      ],
    },
    {
      szenario: 'Abzählschema / Diagonalaufzählung (Übungsblatt 6, Aufgabe 1b)',
      beispiele: [
        '**Aufgabe:** Ist $\\mathbb{N} \\times \\mathbb{N}$ abzählbar?\n**Lösung:** Ja. Ordne die Paare im Schema mit Zeilen $(i, \\cdot)$ und Spalten $(\\cdot, j)$ an und zähle die **Diagonalen** der Reihe nach ab: $(0,0)$, dann $(0,1),(1,0)$, dann $(0,2),(1,1),(2,0)$ usw. Jede Diagonale ist endlich, daher wird jedes Paar nach endlich vielen Schritten erreicht.\n**Ergebnis:** Die Diagonalaufzählung ist eine Bijektion $\\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$, also ist $\\mathbb{N} \\times \\mathbb{N}$ abzählbar.',
        '**Aufgabe:** Begründe mit demselben Schema, dass $\\mathbb{Q}_{>0}$ (positive Brüche) abzählbar ist.\n**Lösung:** Jeder positive Bruch ist $\\frac{p}{q}$ mit $p, q \\in \\mathbb{N} \\setminus \\{0\\}$, entspricht also einem Paar $(p,q)$. Man läuft das Schema diagonal ab und überspringt Brüche, deren gekürzter Wert schon vorkam (z. B. $\\frac{2}{2} = \\frac{1}{1}$).\n**Ergebnis:** Jeder positive Bruch wird nach endlich vielen Schritten genau einmal erreicht – $\\mathbb{Q}_{>0}$ ist abzählbar (und damit ganz $\\mathbb{Q}$).',
        '**Aufgabe:** An welcher Stelle der Diagonalaufzählung von $\\mathbb{N} \\times \\mathbb{N}$ steht das Paar $(2,0)$?\n**Lösung:** Die Diagonale mit Summe $i + j = k$ enthält $k+1$ Paare. Vor der Diagonale mit Summe $2$ liegen die Diagonalen mit Summe $0$ und $1$, das sind $1 + 2 = 3$ Paare (Indizes $0,1,2$). Innerhalb der Summen-$2$-Diagonale kommt $(2,0)$ nach $(0,2),(1,1)$ an dritter Stelle.\n**Ergebnis:** $(2,0)$ erhält die Nummer $5$ (Zählung ab $0$): $(0,0),(0,1),(1,0),(0,2),(1,1),(2,0)$.',
      ],
    },
    {
      szenario: 'Überabzählbarkeit / Diagonalargument',
      beispiele: [
        '**Aufgabe:** Skizziere, warum $(0,1)$ überabzählbar ist.\n**Lösung:** Annahme: $(0,1)$ wäre abzählbar mit vollständiger Liste $x_0, x_1, \\dots$ als Dezimalbrüche. Bilde $y$, dessen $n$-te Nachkommastelle sich von der $n$-ten Stelle von $x_n$ unterscheidet (z. B. $5$, sonst $6$). Dann ist $y \\in (0,1)$, aber $y \\neq x_n$ für alle $n$ – Widerspruch zur Vollständigkeit.\n**Ergebnis:** Es gibt keine Aufzählung; $(0,1)$ und damit $\\mathbb{R}$ sind überabzählbar.',
        '**Aufgabe:** Konstruiere konkret die ersten drei Stellen der Diagonalzahl $y$, wenn $x_0 = 0{,}\\mathbf{1}23\\dots$, $x_1 = 0{,}4\\mathbf{5}6\\dots$, $x_2 = 0{,}78\\mathbf{9}\\dots$ (fett: die Diagonalstellen). Regel: Stelle $\\to 5$, falls dort keine $5$ steht, sonst $6$.\n**Lösung:** Diagonalstellen sind $1, 5, 9$. Erste Stelle: $1 \\neq 5 \\Rightarrow 5$. Zweite Stelle: dort steht $5 \\Rightarrow 6$. Dritte Stelle: $9 \\neq 5 \\Rightarrow 5$.\n**Ergebnis:** $y = 0{,}565\\dots$ Diese Zahl unterscheidet sich von $x_0$ (1. Stelle), $x_1$ (2. Stelle), $x_2$ (3. Stelle) – und so von jedem Listeneintrag.',
        '**Aufgabe:** Ist $\\mathbb{R} \\setminus \\mathbb{Q}$ (die irrationalen Zahlen) abzählbar oder überabzählbar?\n**Lösung:** Wäre $\\mathbb{R} \\setminus \\mathbb{Q}$ abzählbar, dann wäre $\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R} \\setminus \\mathbb{Q})$ als Vereinigung zweier abzählbarer Mengen ebenfalls abzählbar (Satz über abzählbare Vereinigungen). Das widerspricht aber der Überabzählbarkeit von $\\mathbb{R}$.\n**Ergebnis:** Die irrationalen Zahlen $\\mathbb{R} \\setminus \\mathbb{Q}$ sind überabzählbar.',
      ],
    },
  ],
}
