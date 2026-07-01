import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'abbildungen-grundbegriffe',
  titel: 'Abbildungen – Grundbegriffe',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Abbildung** (gleichbedeutend: **Funktion**) beschreibt eine eindeutige Zuordnung zwischen zwei Mengen – das zentrale Werkzeug, um Größen voneinander abhängen zu lassen. Der ganze weitere Funktionen-Stoff (injektiv/surjektiv, Bild/Urbild, Komposition, Stetigkeit, Ableitung) baut auf dieser einen Definition auf. Wichtig ist von Anfang an: Eine Funktion ist nicht nur eine Rechenvorschrift, sondern besteht aus **drei** Daten – Startmenge, Zielmenge und Zuordnung.\n' +
    '\n' +
    '**Was ist eine Abbildung? (informell)**\n' +
    'Seien $A$ und $B$ Mengen. Eine Abbildung von $A$ nach $B$ ist eine Vorschrift $f$, die **jedem** $x \\in A$ **genau ein** Element $f(x) \\in B$ zuordnet. Schreibweise: $f : A \\to B,\\ x \\mapsto f(x)$. Man liest: „$f$ bildet $A$ nach $B$ ab, $x$ wird auf $f(x)$ abgebildet". $f(x)$ heißt der **Funktionswert** (oder das **Bild**) von $x$.\n' +
    '\n' +
    '**Die drei Bestandteile**\n' +
    '| Name | Symbol | Bedeutung |\n' +
    '|---|---|---|\n' +
    '| Definitionsbereich | $A$ | Menge, aus der die Eingaben $x$ kommen |\n' +
    '| Zielmenge | $B$ | Menge, in der die Werte $f(x)$ liegen dürfen |\n' +
    '| Wertemenge / Bild | $f(A)$ | Menge der tatsächlich getroffenen Werte |\n' +
    'Dabei ist $f(A) := \\{\\, f(x) : x \\in A \\,\\}$ das **Bild** von $A$ unter $f$, und es gilt stets $f(A) \\subseteq B$. Die Zielmenge $B$ darf also „zu groß" sein – nicht jeder Wert in $B$ muss vorkommen.\n' +
    '\n' +
    '**Warum gehören Start- und Zielmenge dazu?**\n' +
    'Erst Definitionsbereich und Zielmenge machen aus einer bloßen Formel eine Funktion. Dieselbe Vorschrift $x \\mapsto x^2$ ist als $\\mathbb{R} \\to \\mathbb{R}$ eine andere Funktion als $\\mathbb{R} \\to [0,\\infty)$ oder $[0,\\infty) \\to [0,\\infty)$ – die drei unterscheiden sich darin, ob sie surjektiv bzw. injektiv sind. Wer nur die Formel angibt, hat die Funktion also gar nicht eindeutig festgelegt.\n' +
    '\n' +
    '**Die formale Definition (über Relationen)**\n' +
    'Streng genommen ist eine Abbildung ein Spezialfall einer Relation. Eine Relation $R \\subseteq A \\times B$ ist eine **Abbildung**, falls sie\n' +
    '• **linkstotal** ist: zu jedem $x \\in A$ existiert (mindestens) ein $y \\in B$ mit $(x,y) \\in R$ – „jedes $x$ wird zugeordnet";\n' +
    '• **rechtseindeutig** ist: aus $(x,y_1) \\in R$ und $(x,y_2) \\in R$ folgt $y_1 = y_2$ – „jedes $x$ höchstens ein $y$".\n' +
    'Beide Bedingungen zusammen besagen genau: jedem $x \\in A$ wird **genau ein** $y \\in B$ zugeordnet, das man dann $f(x)$ nennt.\n' +
    '\n' +
    '**Wohldefiniertheit – jedem x genau ein f(x)**\n' +
    'Eine Zuordnung ist erst dann eine Funktion, wenn sie **wohldefiniert** ist. Beim Aufstellen prüft man zwei Dinge:\n' +
    '• **Existenz (linkstotal):** Ist für jedes $x \\in A$ ein Wert $f(x)$ erklärt? (Kein $x$ wird „vergessen" oder führt auf etwas außerhalb von $B$, z. B. Division durch $0$ oder Wurzel aus negativer Zahl.)\n' +
    '• **Eindeutigkeit (rechtseindeutig):** Liefert die Vorschrift für jedes $x$ einen **einzigen** Wert – auch wenn man $x$ verschieden hinschreiben kann? Verschiedene Darstellungen desselben $x$ müssen denselben Wert ergeben.\n' +
    'Schlägt eine der beiden Prüfungen fehl, liegt keine Funktion vor.\n' +
    '\n' +
    '**Der Graph einer Funktion**\n' +
    'Der **Graph** von $f : A \\to B$ ist die Menge aller Eingabe-Ausgabe-Paare:\n' +
    '$G(f) := \\{\\, (x, f(x)) : x \\in A \\,\\} \\subseteq A \\times B$\n' +
    'Eine Teilmenge $G \\subseteq A \\times B$ ist genau dann der Graph einer Funktion auf $A$, wenn in $G$ zu **jedem** $x \\in A$ **genau ein** Paar $(x, y)$ liegt (linkstotal + rechtseindeutig). Anschaulich bei reellen Funktionen: jede senkrechte Gerade schneidet den Graphen in genau einem Punkt (Senkrechten-Test).\n' +
    '\n' +
    '**Gleichheit von Funktionen**\n' +
    'Zwei Funktionen $f$ und $g$ sind **gleich** ($f = g$), wenn beides gilt:\n' +
    '• gleicher **Definitionsbereich** (und i. d. R. gleiche Zielmenge),\n' +
    '• gleiche **Zuordnung**: $f(x) = g(x)$ für **alle** $x$ des gemeinsamen Definitionsbereichs.\n' +
    'Es genügt also nicht, dass „dieselbe Formel" dasteht: $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x$ und $g : [0,\\infty) \\to \\mathbb{R},\\ x \\mapsto x$ sind verschiedene Funktionen, weil ihre Definitionsbereiche verschieden sind.\n' +
    '\n' +
    '**Abschnittsweise (stückweise) definierte Funktionen**\n' +
    'Oft wird $f(x)$ je nach Bereich von $x$ durch unterschiedliche Terme erklärt, z. B. die Betragsfunktion $f : \\mathbb{R} \\to \\mathbb{R}$ mit $f(x) = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$. Damit das eine Funktion ist, müssen die Bereiche den ganzen Definitionsbereich **lückenlos** und **überschneidungsfrei** abdecken (an Nahtstellen darf nur eine Regel greifen) – dann sind Existenz und Eindeutigkeit automatisch erfüllt.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Nur die Formel angeben und Definitions-/Zielbereich weglassen – die Funktion ist dann nicht festgelegt.\n' +
    '• Zielmenge $B$ mit Wertemenge $f(A)$ verwechseln; es gilt nur $f(A) \\subseteq B$, nicht Gleichheit.\n' +
    '• Eine „Zuordnung" akzeptieren, die einem $x$ zwei Werte gibt (nicht rechtseindeutig) oder ein $x$ auslässt (nicht linkstotal) – das ist keine Funktion.\n' +
    '• Bei abschnittsweiser Definition überlappende oder lückenhafte Bereiche wählen.',
  beispiele: [
    {
      szenario: 'Liegt eine Abbildung vor? (Wohldefiniertheit prüfen)',
      beispiele: [
        '**Aufgabe:** Ist $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto \\tfrac{1}{x}$ eine Funktion?\n**Lösung:** Existenz prüfen: für $x = 0$ ist $\\tfrac{1}{x}$ nicht erklärt – nicht jedem $x \\in \\mathbb{R}$ wird ein Wert zugeordnet (nicht linkstotal).\n**Ergebnis:** Keine Funktion auf $\\mathbb{R}$. Mit $\\mathbb{R} \\setminus \\{0\\} \\to \\mathbb{R}$ wäre es dagegen eine.',
        '**Aufgabe:** Ist $g : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto y$ mit $y^2 = x$ eine Funktion?\n**Lösung:** Eindeutigkeit prüfen: für $x = 4$ käme sowohl $y = 2$ als auch $y = -2$ in Frage – einem $x$ würden zwei Werte zugeordnet (nicht rechtseindeutig).\n**Ergebnis:** Keine Funktion (die Zuordnung ist nicht wohldefiniert).',
        '**Aufgabe:** Ist $h : \\mathbb{Z} \\to \\mathbb{N},\\ z \\mapsto |z|$ eine Funktion? ($\\mathbb{N}$ inkl. $0$.)\n**Lösung:** Existenz: $|z|$ ist für jedes $z \\in \\mathbb{Z}$ erklärt. Eindeutigkeit: $|z|$ ist ein eindeutiger Wert. Zielmenge: $|z| \\ge 0$, also stets in $\\mathbb{N}$.\n**Ergebnis:** Ja, $h$ ist eine wohldefinierte Funktion.',
      ],
    },
    {
      szenario: 'Graph als Menge erkennen (Übungsblatt 5, Aufgabe 1)',
      beispiele: [
        '**Aufgabe:** Welche Menge ist der Graph von $f : \\mathbb{Z} \\to \\mathbb{N},\\ z \\mapsto |z|$ – (i) $\\mathbb{Z} \\times \\mathbb{N}$ oder (ii) $\\{(z, |z|) : z \\in \\mathbb{Z}\\}$?\n**Lösung:** Der Graph ist definitionsgemäß $G(f) = \\{(z, f(z)) : z \\in \\mathbb{Z}\\} = \\{(z, |z|) : z \\in \\mathbb{Z}\\}$. $\\mathbb{Z} \\times \\mathbb{N}$ enthält dagegen z. B. auch $(1, 5)$, obwohl $f(1) = 1 \\ne 5$ – es ist nicht rechtseindeutig.\n**Ergebnis:** (ii) ist der Graph, (i) nicht.',
        '**Aufgabe:** Welche Menge ist der Graph von $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x - 1$ – (ii) $\\{(x+1, x) : x \\in \\mathbb{R}\\}$ oder (iii) $\\{(x, x-1) : x \\in \\mathbb{R}\\}$?\n**Lösung:** Direkt nach Definition: $\\{(x, x-1) : x \\in \\mathbb{R}\\}$. Die Menge (ii) ist dieselbe Punktmenge: setzt man $t = x+1$, so ist das Paar $(t, t-1)$, also ebenfalls $\\{(t, t-1) : t \\in \\mathbb{R}\\}$.\n**Ergebnis:** Beide, (ii) und (iii), beschreiben den Graphen von $f$.',
        '**Aufgabe:** Welche Menge ist der Graph der konstanten Funktion $f : \\mathbb{N} \\to \\mathbb{N},\\ n \\mapsto 1$ – (i) $\\mathbb{N} \\times \\{1\\}$, (ii) $\\{(n, 1) : n \\in \\mathbb{N}\\}$ oder (iii) $\\{1\\} \\times \\mathbb{N}$?\n**Lösung:** $G(f) = \\{(n, 1) : n \\in \\mathbb{N}\\}$, und das ist genau $\\mathbb{N} \\times \\{1\\}$. Dagegen ist $\\{1\\} \\times \\mathbb{N} = \\{(1, n) : n \\in \\mathbb{N}\\}$ falsch (linkes statt rechtes Element fest).\n**Ergebnis:** (i) und (ii) sind der Graph, (iii) nicht.',
      ],
    },
    {
      szenario: 'Funktion über eine Wertetabelle; Definitionsbereich zählt (Aufgabe 3)',
      beispiele: [
        '**Aufgabe:** Sei $\\varphi : X \\to Y$ mit $X = \\{1,2,3,4,5\\}$, $Y = \\{1,2,3\\}$ und $\\varphi(1)=3,\\ \\varphi(2)=3,\\ \\varphi(3)=2,\\ \\varphi(4)=1,\\ \\varphi(5)=3$. Ist $\\varphi$ eine Funktion, und was ist die Wertemenge $\\varphi(X)$?\n**Lösung:** Jedem der fünf Elemente von $X$ ist genau ein Wert zugeordnet – also eine Funktion. Bild: $\\varphi(X) = \\{3,3,2,1,3\\} = \\{1,2,3\\}$.\n**Ergebnis:** $\\varphi$ ist eine Funktion mit $\\varphi(X) = Y = \\{1,2,3\\}$.',
        '**Aufgabe:** Schränke $\\varphi$ auf $M = \\{1,3,4\\}$ ein. Welcher Graph und welche Wertemenge ergeben sich für $\\varphi : M \\to Y$?\n**Lösung:** Nur die Paare mit $x \\in M$ behalten: $G = \\{(1,3),(3,2),(4,1)\\}$. Damit $\\varphi(M) = \\{3,2,1\\} = \\{1,2,3\\}$.\n**Ergebnis:** Graph $\\{(1,3),(3,2),(4,1)\\}$, Wertemenge $\\{1,2,3\\}$ – durch Verkleinern des Definitionsbereichs ändert sich die Funktion.',
        '**Aufgabe:** Sind $\\varphi : \\{1,3,4\\} \\to Y$ und $\\varphi : \\{1,2,3,4,5\\} \\to Y$ (gleiche Vorschrift) dieselbe Funktion?\n**Lösung:** Gleichheit verlangt gleichen Definitionsbereich. Hier ist $\\{1,3,4\\} \\ne \\{1,2,3,4,5\\}$, obwohl die Zuordnung „dieselbe Formel" benutzt.\n**Ergebnis:** Nein – verschiedene Definitionsbereiche, also verschiedene Funktionen.',
      ],
    },
    {
      szenario: 'Abschnittsweise definierte Funktionen',
      beispiele: [
        '**Aufgabe:** Werte die Betragsfunktion $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$ an den Stellen $x = 3$ und $x = -3$ aus.\n**Lösung:** Für $x = 3 \\ge 0$ greift die obere Regel: $f(3) = 3$. Für $x = -3 < 0$ greift die untere: $f(-3) = -(-3) = 3$.\n**Ergebnis:** $f(3) = 3$ und $f(-3) = 3$.',
        '**Aufgabe:** Ist $g : [0,\\infty) \\to [0,\\infty)$, $g(x) = \\begin{cases} x - 1, & x \\ge 1 \\\\ 0, & x < 1 \\end{cases}$ wohldefiniert? (Aufgabe 4b)\n**Lösung:** Die Bereiche $\\{x \\ge 1\\}$ und $\\{0 \\le x < 1\\}$ decken $[0,\\infty)$ lückenlos und ohne Überschneidung ab; jeder Term liefert einen Wert in $[0,\\infty)$.\n**Ergebnis:** Ja, $g$ ist eine wohldefinierte Funktion.',
        '**Aufgabe:** Warum ist $f(x) = \\begin{cases} x, & x \\le 2 \\\\ x + 1, & x \\ge 2 \\end{cases}$ auf $\\mathbb{R}$ keine Funktion?\n**Lösung:** Bei $x = 2$ greifen **beide** Regeln und liefern unterschiedliche Werte $f(2) = 2$ bzw. $f(2) = 3$ – die Bereiche überschneiden sich, die Zuordnung ist nicht eindeutig.\n**Ergebnis:** Keine Funktion; man müsste die Nahtstelle eindeutig zuordnen, etwa $x < 2$ statt $x \\le 2$.',
      ],
    },
  ],
}
