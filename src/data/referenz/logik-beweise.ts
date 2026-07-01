import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'logik-beweise',
  titel: 'Beweistechniken',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein mathematischer Satz behauptet, dass eine Aussage immer wahr ist. Ein **Beweis** ist eine lückenlose Kette von Schlüssen, die diese Behauptung mit Sicherheit begründet – ausgehend von bekannten Voraussetzungen, Definitionen und bereits bewiesenen Sätzen. Ein Beispiel allein beweist nichts (außer es widerlegt eine All-Aussage); man braucht ein Argument, das jeden zugelassenen Fall abdeckt.\n' +
    '\n' +
    '**Die typische Form eines Satzes**\n' +
    'Sehr viele Sätze haben die Gestalt einer **Implikation** $A\\Rightarrow B$ („wenn $A$, dann $B$"). $A$ heißt **Voraussetzung** (hinreichende Bedingung), $B$ heißt **Behauptung** (notwendige Bedingung). Wichtig ist die Wahrheitstafel von $A\\Rightarrow B$: nur die Zeile $A$ wahr, $B$ falsch macht die Implikation falsch. Steht ein $\\forall n$ davor, muss man $A(n)\\Rightarrow B(n)$ für **jedes** $n$ zeigen.\n' +
    '\n' +
    '| $A$ | $B$ | $A\\Rightarrow B$ |\n' +
    '|---|---|---|\n' +
    '| w | w | w |\n' +
    '| w | f | f |\n' +
    '| f | w | w |\n' +
    '| f | f | w |\n' +
    '\n' +
    '**Warum gibt es verschiedene Techniken?**\n' +
    'Logisch sind die Verfahren gleichwertig, aber unterschiedlich bequem. Die Wahrheitstafel zeigt: Ist $A$ falsch, ist $A\\Rightarrow B$ automatisch wahr. Deshalb muss man nur die Fälle behandeln, in denen $A$ wahr ist. Je nachdem, ob sich $B$ leichter direkt, über die Umkehrung oder über einen Widerspruch greifen lässt, wählt man die Technik, die den kürzesten sauberen Weg liefert.\n' +
    '\n' +
    '**1. Direkter Beweis**\n' +
    'Zeige $A\\Rightarrow B$, indem du $A$ **annimmst** und durch erlaubte Umformungen und Schlüsse $B$ **herleitest**. Es genügt, die Zeilen mit $A$ wahr zu betrachten; die Zeilen mit $A$ falsch sind ohnehin wahr. Geeignet, wenn man aus $A$ direkt etwas rechnen kann (z. B. $n$ ungerade $\\Rightarrow n=2k+1$ einsetzen).\n' +
    '\n' +
    '**2. Beweis durch Kontraposition**\n' +
    'Statt $A\\Rightarrow B$ zeigt man die **logisch gleichwertige** Aussage $\\neg B\\Rightarrow\\neg A$ (die Kontraposition – nicht zu verwechseln mit der Umkehrung $B\\Rightarrow A$). Man nimmt also $\\neg B$ an und folgert $\\neg A$. Sinnvoll, wenn $\\neg B$ einen besseren Ansatzpunkt zum Rechnen bietet als $A$.\n' +
    '\n' +
    '**3. Widerspruchsbeweis**\n' +
    'Nimm an, $A\\wedge\\neg B$ sei wahr (die Behauptung gelte also nicht), und führe das auf einen **Widerspruch** der Form $C\\wedge\\neg C$. Da $C\\wedge\\neg C$ nie wahr sein kann, war die Annahme falsch, also gilt $\\neg(A\\wedge\\neg B)$ – und das ist genau dann wahr, wenn $A\\Rightarrow B$ wahr ist. Stark, wenn die Verneinung $\\neg B$ greifbare Zusatzinformation liefert.\n' +
    '\n' +
    '**4. Fallunterscheidung**\n' +
    'Zerlege alle Möglichkeiten in **endlich viele Fälle**, die zusammen alles abdecken, und beweise die Behauptung in jedem Fall einzeln. Wichtig: Die Fälle müssen **vollständig** sein (z. B. „$n$ gerade" und „$n$ ungerade"). Oft als Baustein innerhalb der anderen Techniken.\n' +
    '\n' +
    '**5. Gegenbeispiel (Widerlegen)**\n' +
    'Eine **All-Aussage** $\\forall x: A(x)$ ist schon dann falsch, wenn es **ein einziges** $x$ mit $\\neg A(x)$ gibt (denn die Negation ist $\\exists x:\\neg A(x)$). Zum **Widerlegen** genügt also ein einziges **Gegenbeispiel**. Achtung: Ein Beispiel kann eine All-Aussage nur widerlegen, niemals beweisen.\n' +
    '\n' +
    '**Wie schreibt man einen Beweis sauber auf?**\n' +
    'Notiere zuerst, **was** zu zeigen ist und **welche Technik** du benutzt. Schreibe die **Annahme** explizit hin („Wir nehmen an, dass …"). Begründe **jeden** Schritt (Definition, Rechnung, bereits bewiesener Satz). Beim Widerspruchsbeweis benenne klar, **welcher** Widerspruch entsteht. Schließe mit der Behauptung und einem Endezeichen $\\square$.\n' +
    '\n' +
    '**Wann welche Technik?**\n' +
    '| Situation | Geeignete Technik |\n' +
    '|---|---|\n' +
    '| Aus $A$ lässt sich $B$ direkt ausrechnen | direkter Beweis |\n' +
    '| $\\neg B$ ist leichter zu fassen als $A$ | Kontraposition |\n' +
    '| $\\neg B$ liefert nützliche Zusatzannahme | Widerspruch |\n' +
    '| Mehrere disjunkte Möglichkeiten | Fallunterscheidung |\n' +
    '| Eine All-Aussage soll widerlegt werden | Gegenbeispiel |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Die **Umkehrung** $B\\Rightarrow A$ mit der **Kontraposition** $\\neg B\\Rightarrow\\neg A$ verwechseln – nur letztere ist gleichwertig zu $A\\Rightarrow B$. Eine All-Aussage durch Beispiele „beweisen" wollen. Beim Widerspruchsbeweis vergessen, wirklich einen Widerspruch $C\\wedge\\neg C$ herzustellen. Bei der Fallunterscheidung **nicht alle** Fälle abdecken.\n' +
    '\n' +
    '**Abgrenzung**\n' +
    'Aussagen über **alle** natürlichen Zahlen $n$ beweist man meist mit **vollständiger Induktion** – eine eigene Technik mit Induktionsanfang und Induktionsschritt (siehe Karte „Vollständige Induktion").',
  beispiele: [
    {
      szenario: 'Direkter Beweis',
      beispiele: [
        '**Aufgabe:** Zeige $A(n)\\Rightarrow B(n)$ für alle $n$ mit $A(n)$: „$n$ ist ungerade" und $B(n)$: „$n^2$ ist ungerade".\n**Lösung:** Es genügt, die Zeile $A$ wahr zu betrachten (ist $A$ falsch, ist die Implikation ohnehin wahr). Annahme: $n$ ist ungerade, also $n=2k+1$ mit $k\\in\\mathbb{N}$. Dann ist $n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1$, eine gerade Zahl plus $1$.\n**Ergebnis:** $n^2$ ist ungerade, also gilt $B(n)$. Der Fall $A$ wahr, $B$ falsch tritt nie ein. $\\square$',
        '**Aufgabe:** Zeige: Wenn $n$ durch $4$ teilbar ist, dann ist $n$ gerade.\n**Lösung:** Annahme: $4\\mid n$, also $n=4k$ mit $k\\in\\mathbb{N}$. Dann ist $n=2\\cdot(2k)$, also ein Vielfaches von $2$.\n**Ergebnis:** $n$ ist gerade. $\\square$',
        '**Aufgabe:** Zeige: Die Summe zweier gerader Zahlen ist gerade.\n**Lösung:** Annahme: $a$ und $b$ sind gerade, also $a=2k$ und $b=2m$ mit $k,m\\in\\mathbb{Z}$. Dann ist $a+b=2k+2m=2(k+m)$.\n**Ergebnis:** $a+b$ ist ein Vielfaches von $2$, also gerade. $\\square$',
      ],
    },
    {
      szenario: 'Widerspruchsbeweis',
      beispiele: [
        '**Aufgabe:** Zeige den Satz aus dem direkten Beweis ($n$ ungerade $\\Rightarrow n^2$ ungerade) per Widerspruch.\n**Lösung:** Zu zeigen ist $\\neg(A\\Rightarrow B)$ ist falsch. Wegen $\\neg(A\\Rightarrow B)=A\\wedge\\neg B$ nehmen wir an: $n$ ist ungerade und $n^2$ ist gerade. Aus $n=2k+1$ folgt aber $n^2=4k^2+4k+1=2(2k^2+2k)+1$, also $n^2$ ungerade – im Widerspruch zur Annahme „$n^2$ gerade".\n**Ergebnis:** Die Annahme $A\\wedge\\neg B$ ist falsch, also gilt $A\\Rightarrow B$. $\\square$',
        '**Aufgabe:** Zeige: Ist $x\\in\\mathbb{Q}$ und $x>0$, dann ist $x^2\\neq 2$ (also: $\\sqrt{2}$ ist nicht rational).\n**Lösung:** Annahme (zum Widerspruch): $x\\in\\mathbb{Q}$, $x>0$ und $x^2=2$. Dann gibt es teilerfremde $p,q$ mit $x=\\frac{p}{q}$, also $\\frac{p^2}{q^2}=2$ und somit $p^2=2q^2$. Damit ist $p^2$ gerade, also auch $p$ gerade: $p=2m$. Einsetzen: $4m^2=2q^2$, d. h. $2m^2=q^2$, also ist auch $q$ gerade.\n**Ergebnis:** $p$ und $q$ haben den gemeinsamen Teiler $2$ – Widerspruch zur Teilerfremdheit. Also ist $x^2\\neq 2$. $\\square$',
        '**Aufgabe:** Zeige: Es gibt keine größte natürliche Zahl.\n**Lösung:** Annahme: Es gibt eine größte natürliche Zahl $N$, d. h. $n\\le N$ für alle $n\\in\\mathbb{N}$. Betrachte $N+1$. Es ist $N+1\\in\\mathbb{N}$ und $N+1>N$.\n**Ergebnis:** $N+1$ ist größer als das angeblich größte $N$ – Widerspruch. Eine größte natürliche Zahl gibt es nicht. $\\square$',
      ],
    },
    {
      szenario: 'Kontraposition',
      beispiele: [
        '**Aufgabe:** Zeige für $n\\in\\mathbb{Z}$: Ist $n^2$ gerade, dann ist $n$ gerade.\n**Lösung:** Direkt ist das umständlich. Die Kontraposition lautet: „Ist $n$ nicht gerade (ungerade), dann ist $n^2$ nicht gerade." Annahme: $n=2k+1$. Dann $n^2=2(2k^2+2k)+1$ ist ungerade.\n**Ergebnis:** Die Kontraposition $\\neg B\\Rightarrow\\neg A$ ist bewiesen, also gilt auch $n^2$ gerade $\\Rightarrow n$ gerade. $\\square$',
        '**Aufgabe:** Zeige: Ist $n^2$ ungerade, dann ist $n$ ungerade.\n**Lösung:** Kontraposition: „Ist $n$ gerade, dann ist $n^2$ gerade." Annahme: $n=2k$. Dann $n^2=4k^2=2\\cdot(2k^2)$, also gerade.\n**Ergebnis:** $\\neg B\\Rightarrow\\neg A$ gilt, damit gilt die ursprüngliche Aussage. $\\square$',
        '**Aufgabe:** Zeige für $z\\in\\mathbb{Z}$: Ist $z+1$ ungerade, dann ist $z$ gerade.\n**Lösung:** Kontraposition: „Ist $z$ nicht gerade (ungerade), dann ist $z+1$ nicht ungerade (gerade)." Annahme: $z=2k+1$. Dann $z+1=2k+2=2(k+1)$, also gerade.\n**Ergebnis:** Die Kontraposition ist wahr, also auch die Behauptung. $\\square$',
      ],
    },
    {
      szenario: 'Gegenbeispiel & Fallunterscheidung',
      beispiele: [
        '**Aufgabe:** Widerlege: „Für alle $z\\in\\mathbb{Z}$ gilt $z^2\\ge 0\\Leftrightarrow z\\ge 0$."\n**Lösung:** Die Äquivalenz behauptet u. a. $z^2\\ge 0\\Rightarrow z\\ge 0$. Wähle das Gegenbeispiel $z=-1$: Es ist $z^2=1\\ge 0$, aber $z=-1<0$.\n**Ergebnis:** Ein einziges Gegenbeispiel genügt – die All-Aussage ist falsch. $\\square$',
        '**Aufgabe:** Widerlege: „Jede Zahl in $M=\\{2,8,10,11\\}$ ist gerade."\n**Lösung:** Negation einer All-Aussage ist eine Existenzaussage: $\\exists m\\in M:\\neg A(m)$. Suche ein ungerades Element: $11\\in M$ ist ungerade.\n**Ergebnis:** $11$ ist ein Gegenbeispiel, also ist die Aussage falsch. $\\square$',
        '**Aufgabe:** Zeige per Fallunterscheidung: Für jedes $n\\in\\mathbb{Z}$ ist $n^2+n$ gerade.\n**Lösung:** Zwei vollständige Fälle. Fall 1, $n=2k$ gerade: $n^2+n=4k^2+2k=2(2k^2+k)$. Fall 2, $n=2k+1$ ungerade: $n^2+n=n(n+1)=(2k+1)(2k+2)=2(2k+1)(k+1)$.\n**Ergebnis:** In beiden Fällen ein Vielfaches von $2$, also ist $n^2+n$ stets gerade. $\\square$',
      ],
    },
  ],
}
