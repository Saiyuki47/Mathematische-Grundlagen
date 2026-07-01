import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'funktionen-eigenschaften',
  titel: 'Injektiv, surjektiv, bijektiv',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Funktion $f : A \\to B$ ordnet jedem $x$ aus dem Definitionsbereich $A$ genau ein $f(x)$ in der Zielmenge $B$ zu. Mit den drei Begriffen injektiv, surjektiv und bijektiv beschreibt man, wie sauber diese Zuordnung ist: Wird kein Zielwert doppelt getroffen? Wird jeder Zielwert überhaupt getroffen? Beides zusammen? Das ist der Schlüssel dazu, ob man die Funktion wieder rückgängig machen (umkehren) kann.\n' +
    '\n' +
    '**Injektiv (kein Wert wird doppelt getroffen)**\n' +
    'Eine Abbildung $f : A \\to B$ heißt **injektiv**, falls für alle $x_1, x_2 \\in A$ aus $f(x_1) = f(x_2)$ stets $x_1 = x_2$ folgt. Anschaulich: verschiedene Eingaben liefern verschiedene Ausgaben — kein $y$ in $B$ hat zwei Urbilder. (In der zugrunde liegenden Relation heißt das **linkseindeutig**.)\n' +
    '\n' +
    '**Surjektiv (jeder Zielwert wird getroffen)**\n' +
    'Eine Abbildung $f : A \\to B$ heißt **surjektiv**, falls es für alle $y \\in B$ ein $x \\in A$ gibt mit $y = f(x)$. Gleichbedeutend: das Bild ist die ganze Zielmenge, $f(A) = B$. Anschaulich: kein $y$ in $B$ geht leer aus. (In der Relation heißt das **rechtstotal**.)\n' +
    '\n' +
    '**Bijektiv (beides zugleich)**\n' +
    'Eine Abbildung heißt **bijektiv**, wenn sie sowohl injektiv als auch surjektiv ist. Dann gibt es zu jedem $y \\in B$ **genau ein** Urbild $x \\in A$ — die Zuordnung ist eine perfekte 1-zu-1-Paarung zwischen $A$ und $B$.\n' +
    '\n' +
    '**Es hängt vom Definitions- und Zielbereich ab!**\n' +
    'Dieselbe Rechenvorschrift kann je nach $A$ und $B$ alle Eigenschaften wechseln. Klassisches Beispiel $x \\mapsto x^2$:\n' +
    '| Funktion | injektiv? | surjektiv? | bijektiv? |\n' +
    '|---|---|---|---|\n' +
    '| $f : \\mathbb{R} \\to \\mathbb{R}$ | nein | nein | nein |\n' +
    '| $f : \\mathbb{R} \\to [0,\\infty)$ | nein | ja | nein |\n' +
    '| $f : [0,\\infty) \\to [0,\\infty)$ | ja | ja | ja |\n' +
    'Bei $\\mathbb{R} \\to \\mathbb{R}$ ist $f$ nicht injektiv, weil $f(-2) = f(2) = 4$, und nicht surjektiv, weil negative $y$ nie getroffen werden. Verkleinert man die Zielmenge auf $[0,\\infty)$, wird $f$ surjektiv; schränkt man zusätzlich den Definitionsbereich auf $[0,\\infty)$ ein, fällt das doppelte Vorzeichen weg und $f$ wird bijektiv.\n' +
    '\n' +
    '**Wie weist man es nach?**\n' +
    'Injektivität (direkter Standardweg): Nimm an, es sei $f(x_1) = f(x_2)$, setze die Vorschrift ein und forme so um, dass am Ende $x_1 = x_2$ herauskommt.\n' +
    'Surjektivität (Urbild konstruieren): Gib dir ein **beliebiges** $y \\in B$ vor und finde explizit ein $x \\in A$ mit $f(x) = y$ — meist, indem man die Gleichung $f(x) = y$ nach $x$ auflöst und prüft, dass dieses $x$ wirklich in $A$ liegt.\n' +
    'Bijektivität: beide Nachweise zusammen (oder: eine Umkehrfunktion angeben).\n' +
    '\n' +
    '**Wie widerlegt man es?**\n' +
    'Ein einziges **Gegenbeispiel** genügt. Nicht injektiv: zwei verschiedene $x_1 \\neq x_2$ mit gleichem Bild $f(x_1) = f(x_2)$ angeben. Nicht surjektiv: ein konkretes $y \\in B$ angeben, das von keinem $x$ getroffen wird (kein Urbild hat).\n' +
    '\n' +
    '**Zusammenhang zur Umkehrbarkeit**\n' +
    'Genau die bijektiven Funktionen sind umkehrbar (invertierbar): Ist $f : A \\to B$ bijektiv, so besitzt $f$ eine **Umkehrfunktion** $f^{-1} : B \\to A$ mit $f^{-1}(y) = x \\iff f(x) = y$, und es gilt $f^{-1} \\circ f = \\operatorname{id}_A$ sowie $f \\circ f^{-1} = \\operatorname{id}_B$. Injektiv allein garantiert nur Umkehrbarkeit auf das Bild $f(A)$; fehlt die Surjektivität, ist $f^{-1}$ nicht auf ganz $B$ definiert.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Eigenschaft prüfen, ohne $A$ und $B$ zu beachten — beide gehören zwingend zur Funktion dazu. Bei Surjektivität ein Urbild nur für einen Spezialwert (z. B. $y = 0$) angeben statt für ein allgemeines $y$. Injektivität mit einem einzelnen passenden Paar „belegen" wollen — das beweist nichts; widerlegen geht per Gegenbeispiel, beweisen nur allgemein.',
  beispiele: [
    {
      szenario: 'Einschränken auf eine Teilmenge (Übungsblatt 5, Aufgabe 3)',
      beispiele: [
        '**Aufgabe:** Gegeben $X = \\{1,2,3,4,5\\}$, $Y = \\{1,2,3\\}$ und $\\varphi : X \\to Y$ mit $\\varphi(1)=3,\\ \\varphi(2)=3,\\ \\varphi(3)=2,\\ \\varphi(4)=1,\\ \\varphi(5)=3$. Finde eine nichtleere Teilmenge $M \\subseteq X$, sodass $\\varphi : M \\to Y$ **bijektiv** ist.\n**Lösung:** $Y$ hat 3 Elemente, also muss $M$ genau 3 Elemente haben, deren Bilder alle verschieden sind und ganz $Y$ ergeben. Die Werte $3, 2, 1$ treten bei $1, 3, 4$ auf. Mit $M = \\{1,3,4\\}$ ist $\\varphi(1)=3,\\ \\varphi(3)=2,\\ \\varphi(4)=1$: jedes $y \\in Y$ genau einmal getroffen.\n**Ergebnis:** $M = \\{1,3,4\\}$ macht $\\varphi$ bijektiv.',
        '**Aufgabe:** Finde $M \\subseteq X$, sodass $\\varphi : M \\to Y$ **surjektiv, aber nicht injektiv** ist.\n**Lösung:** Surjektiv heißt $\\varphi(M) = Y = \\{1,2,3\\}$ — alle drei Zielwerte müssen vorkommen. Nicht injektiv heißt, ein Wert wird doppelt getroffen. Nimm $M = X$: dann ist $\\varphi(X) = \\{1,2,3\\} = Y$ (surjektiv), aber $\\varphi(1)=\\varphi(2)=\\varphi(5)=3$ (nicht injektiv).\n**Ergebnis:** $M = X = \\{1,2,3,4,5\\}$.',
        '**Aufgabe:** Finde $M \\subseteq X$, sodass $\\varphi : M \\to Y$ **injektiv, aber nicht surjektiv** ist, und ein $M$, sodass $\\varphi$ **weder noch** ist.\n**Lösung:** Injektiv, nicht surjektiv: ein einzelnes Element kann nie ganz $Y$ treffen, ist aber trivial injektiv. Mit $M = \\{1\\}$ ist $\\varphi(M) = \\{3\\} \\neq Y$. Weder noch: zwei Elemente mit gleichem Bild, das $Y$ nicht ausschöpft. Mit $M = \\{1,2\\}$ ist $\\varphi(1)=\\varphi(2)=3$ (nicht injektiv) und $\\varphi(M)=\\{3\\}\\neq Y$ (nicht surjektiv).\n**Ergebnis:** injektiv-nicht-surjektiv: $M = \\{1\\}$; weder noch: $M = \\{1,2\\}$.',
      ],
    },
    {
      szenario: 'Nachweis und Widerlegung per Rechnung / Gegenbeispiel',
      beispiele: [
        '**Aufgabe:** Ist $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto 2x - 1$ injektiv und surjektiv?\n**Lösung:** Injektiv: Annahme $f(x_1) = f(x_2)$, also $2x_1 - 1 = 2x_2 - 1$. Addiere $1$, teile durch $2$: $x_1 = x_2$ — injektiv. Surjektiv: sei $y \\in \\mathbb{R}$ beliebig; löse $2x - 1 = y$ nach $x$ auf: $x = \\frac{y+1}{2} \\in \\mathbb{R}$, und es gilt $f(x) = y$ — surjektiv.\n**Ergebnis:** $f$ ist injektiv und surjektiv, also bijektiv (Umkehrfunktion $f^{-1}(y) = \\frac{y+1}{2}$).',
        '**Aufgabe:** Ist $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ injektiv? Ist es surjektiv?\n**Lösung:** Injektiv widerlegen per Gegenbeispiel: $x_1 = -2,\\ x_2 = 2$ sind verschieden, aber $f(-2) = 4 = f(2)$ — also nicht injektiv. Surjektiv widerlegen: wähle $y = -1 \\in \\mathbb{R}$; es gibt kein reelles $x$ mit $x^2 = -1$ (Quadrate sind $\\geq 0$) — kein Urbild.\n**Ergebnis:** $f$ ist weder injektiv noch surjektiv (also auch nicht bijektiv).',
        '**Aufgabe:** Ist $f : \\mathbb{R} \\to [0,\\infty),\\ x \\mapsto x^2$ surjektiv? Und bijektiv?\n**Lösung:** Surjektiv: sei $y \\geq 0$ beliebig; setze $x = \\sqrt{y}$, dann ist $x \\in \\mathbb{R}$ und $f(x) = (\\sqrt{y})^2 = y$ — surjektiv. Injektiv: weiterhin $f(-1) = 1 = f(1)$ bei $-1 \\neq 1$ — nicht injektiv.\n**Ergebnis:** $f$ ist surjektiv, aber nicht injektiv, also nicht bijektiv. (Erst $f : [0,\\infty) \\to [0,\\infty)$ wäre bijektiv.)',
      ],
    },
    {
      szenario: 'Funktionen analysieren (Übungsblatt 5, Aufgabe 4b)',
      beispiele: [
        '**Aufgabe:** Untersuche $f : [0,\\infty) \\to [0,\\infty),\\ x \\mapsto x + 1$ auf Injektivität, Surjektivität, Bijektivität.\n**Lösung:** Injektiv: $f(x_1) = f(x_2)$ bedeutet $x_1 + 1 = x_2 + 1$, also $x_1 = x_2$ — injektiv. Surjektiv: das Bild ist $[1,\\infty)$, die Zielmenge aber $[0,\\infty)$. Der Wert $y = 0$ hat kein Urbild ($x + 1 = 0$ gäbe $x = -1 \\notin [0,\\infty)$) — nicht surjektiv.\n**Ergebnis:** $f$ ist injektiv, nicht surjektiv, nicht bijektiv.',
        '**Aufgabe:** Untersuche $g : [0,\\infty) \\to [0,\\infty)$ mit $g(x) = x - 1$ für $x \\geq 1$ und $g(x) = 0$ sonst.\n**Lösung:** Surjektiv: zu $y \\geq 0$ liefert $x = y + 1 \\geq 1$ den Wert $g(x) = (y+1) - 1 = y$ — surjektiv. Injektiv: für $0 \\le x < 1$ ist überall $g(x) = 0$, z. B. $g(0) = g(0{,}5) = 0$ bei $0 \\neq 0{,}5$ — nicht injektiv.\n**Ergebnis:** $g$ ist nicht injektiv, surjektiv, nicht bijektiv.',
        '**Aufgabe:** Bestimme $g \\circ f$ mit $f, g$ aus den vorigen Beispielen und untersuche die Verkettung.\n**Lösung:** Für $x \\geq 0$ ist $f(x) = x + 1 \\geq 1$, also greift bei $g$ der Fall $\\geq 1$: $(g \\circ f)(x) = g(x+1) = (x+1) - 1 = x$. Damit ist $g \\circ f : [0,\\infty) \\to [0,\\infty),\\ x \\mapsto x$ die Identität: injektiv ($x_1 = x_2$ direkt) und surjektiv (jedes $y$ ist sein eigenes Urbild).\n**Ergebnis:** $g \\circ f = \\operatorname{id}$ ist injektiv, surjektiv und bijektiv.',
      ],
    },
  ],
}
