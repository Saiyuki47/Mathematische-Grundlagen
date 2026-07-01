import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'bild-urbild',
  titel: 'Bild & Urbild',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Funktion $f:A\\to B$ ordnet jedem einzelnen Element ein Bild zu. Oft will man aber wissen, was mit einer ganzen Menge passiert: Welche Werte kommen heraus, wenn ich alle $x$ aus einer Menge $M$ einsetze (das ist das Bild)? Und umgekehrt: Welche Eingaben $x$ landen in einem vorgegebenen Bereich $N$ (das ist das Urbild)? Das braucht man, um Wertebereiche zu bestimmen, Gleichungen wie $f(x)\\in N$ zu lösen und Eigenschaften wie Injektivität/Surjektivität zu prüfen.\n' +
    '\n' +
    '**Definition: Bild einer Menge**\n' +
    'Seien $A,B$ Mengen und $f:A\\to B$ eine Abbildung. Für eine Teilmenge $M\\subseteq A$ heißt\n' +
    '$f(M):=\\{\\,f(x):x\\in M\\,\\}\\subseteq B$\n' +
    'das **Bild** von $M$ unter $f$. Es sammelt alle Funktionswerte, die entstehen, wenn man jedes Element von $M$ einsetzt. Das Bild ist immer eine **Teilmenge der Zielmenge** $B$.\n' +
    '\n' +
    '**Definition: Urbild einer Menge**\n' +
    'Für eine Teilmenge $N\\subseteq B$ heißt\n' +
    '$f^{-1}(N):=\\{\\,x\\in A:f(x)\\in N\\,\\}\\subseteq A$\n' +
    'das **Urbild** von $N$ unter $f$. Es sammelt alle Eingaben aus $A$, deren Funktionswert in $N$ liegt. Das Urbild ist immer eine **Teilmenge des Definitionsbereichs** $A$.\n' +
    '\n' +
    '**Achtung: Urbild ist NICHT die Umkehrfunktion!**\n' +
    'Das Symbol $f^{-1}(N)$ ist für **jede** Abbildung definiert — $f$ muss dafür **weder injektiv noch surjektiv** sein, eine Umkehrfunktion ist nicht nötig. $f^{-1}(N)$ ist stets eine **Menge** (sie darf leer sein oder mehrere Elemente enthalten). Erst wenn $f$ bijektiv ist, gibt es zusätzlich die Umkehrfunktion $f^{-1}:B\\to A$, die einzelnen Elementen einzelne Elemente zuordnet. Verwechsle also $f^{-1}(N)$ (Urbildmenge, immer da) nicht mit $f^{-1}(y)$ als Funktionswert (nur bei Bijektivität).\n' +
    '\n' +
    '**Bild der ganzen Definitionsmenge = Wertebereich**\n' +
    'Setzt man $M=A$ (also den gesamten Definitionsbereich), so ist $f(A)$ die Menge **aller** tatsächlich angenommenen Werte — der **Wertebereich** (das Bild von $f$). $f$ ist genau dann **surjektiv**, wenn $f(A)=B$ gilt, der Wertebereich also die ganze Zielmenge ausfüllt.\n' +
    '\n' +
    '**Wie berechnet man ein Bild?**\n' +
    'Setze (gedanklich) jedes $x\\in M$ ein und sammle alle herauskommenden Werte zu einer Menge. Bei endlichem $M$ einfach alle Werte auflisten (Doppelte nur einmal). Bei einem Intervall $M=[a,b]$ überlege, welche Werte $f$ darauf annimmt (Monotonie, Hoch-/Tiefpunkte, kleinster und größter Wert).\n' +
    '\n' +
    '**Wie berechnet man ein Urbild?**\n' +
    'Löse die Bedingung $f(x)\\in N$ nach $x$ auf und behalte **nur** die Lösungen, die wirklich im Definitionsbereich $A$ liegen. Bei $N=\\{c\\}$ heißt das: alle Lösungen der Gleichung $f(x)=c$ bestimmen. Es können keine, eine oder mehrere Lösungen sein.\n' +
    '\n' +
    '**Rechenregeln mit Vereinigung und Schnitt**\n' +
    'Für $M_1,M_2\\subseteq A$ und $N_1,N_2\\subseteq B$ gilt:\n' +
    '| Operation | Bild (Vorsicht beim Schnitt) | Urbild (immer Gleichheit) |\n' +
    '|---|---|---|\n' +
    '| Vereinigung | $f(M_1\\cup M_2)=f(M_1)\\cup f(M_2)$ | $f^{-1}(N_1\\cup N_2)=f^{-1}(N_1)\\cup f^{-1}(N_2)$ |\n' +
    '| Schnitt | $f(M_1\\cap M_2)\\subseteq f(M_1)\\cap f(M_2)$ | $f^{-1}(N_1\\cap N_2)=f^{-1}(N_1)\\cap f^{-1}(N_2)$ |\n' +
    '\n' +
    'Merke: Das **Urbild** verträgt sich mit Vereinigung **und** Schnitt (immer Gleichheit). Das **Bild** verträgt sich nur mit der Vereinigung; beim Schnitt gilt im Allgemeinen **nur** $\\subseteq$ (Gleichheit erst bei injektivem $f$).\n' +
    '\n' +
    '**Warum beim Bild-Schnitt nur Teilmenge?**\n' +
    'Ein Wert $y$ kann im Schnitt $f(M_1)\\cap f(M_2)$ liegen, weil ihn ein $x_1\\in M_1$ und ein **anderes** $x_2\\in M_2$ erzeugen. Dann gibt es aber vielleicht kein gemeinsames $x\\in M_1\\cap M_2$ mit $f(x)=y$. Beispiel $f(x)=x^2$: $f(\\{1\\})\\cap f(\\{-1\\})=\\{1\\}$, aber $f(\\{1\\}\\cap\\{-1\\})=f(\\varnothing)=\\varnothing$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $f^{-1}(N)$ mit der Umkehrfunktion verwechseln und meinen, $f$ müsse bijektiv sein — das Urbild ist **immer** definiert.\n' +
    '• Beim Urbild Lösungen mitnehmen, die **nicht** im Definitionsbereich liegen (z. B. bei $A=\\mathbb{R}\\setminus\\{2\\}$ darf $x=2$ nicht ins Ergebnis).\n' +
    '• Beim Bild eines Intervalls einfach die Randwerte einsetzen — bei nicht-monotonen Funktionen (z. B. Betrag, Parabel) muss man Tiefst-/Höchstwert dazwischen beachten.\n' +
    '• Annehmen, $f(M_1\\cap M_2)=f(M_1)\\cap f(M_2)$ gelte immer — hier gilt nur $\\subseteq$.',
  beispiele: [
    {
      szenario: 'Bild bestimmen',
      beispiele: [
        '**Aufgabe:** Sei $f:\\mathbb{R}\\setminus\\{2\\}\\to\\mathbb{R},\\ x\\mapsto x^2$. Bestimme das Bild des gesamten Definitionsbereichs $f(\\mathbb{R}\\setminus\\{2\\})$.\n**Lösung:** Quadrate sind nie negativ, also kommen nur Werte $\\ge 0$ heraus. Jeder Wert $y\\ge 0$ wird erreicht (z. B. durch $x=\\sqrt{y}$); dass $x=2$ fehlt, ändert nichts, denn der Wert $4=2^2$ kommt auch von $x=-2$.\n**Ergebnis:** $f(\\mathbb{R}\\setminus\\{2\\})=[0,\\infty)$.',
        '**Aufgabe:** Sei $h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto |x|$. Bestimme $h([0,5])$ und $h([-5,5])$.\n**Lösung:** Auf $[0,5]$ ist $|x|=x$, das durchläuft genau $[0,5]$. Auf $[-5,5]$ nimmt $|x|$ den kleinsten Wert $0$ (bei $x=0$) und den größten Wert $5$ (bei $x=\\pm 5$) an, alles dazwischen wird getroffen.\n**Ergebnis:** $h([0,5])=[0,5]$ und $h([-5,5])=[0,5]$.',
        '**Aufgabe:** Sei $h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto |x|$. Bestimme das Bild der ganzen Zahlen $h(\\mathbb{Z})$.\n**Lösung:** Für jede ganze Zahl ist $|z|$ eine nichtnegative ganze Zahl; umgekehrt entsteht jedes $n\\in\\mathbb{N}$ als $|n|$. Hier wird $\\mathbb{N}$ einschließlich $0$ verwendet.\n**Ergebnis:** $h(\\mathbb{Z})=\\mathbb{N}$.',
      ],
    },
    {
      szenario: 'Urbild bestimmen (ohne Umkehrfunktion!)',
      beispiele: [
        '**Aufgabe:** Sei $f:\\mathbb{R}\\setminus\\{2\\}\\to\\mathbb{R},\\ x\\mapsto x^2$. Bestimme das Urbild $f^{-1}(\\{4,9\\})$. (Beachte: $f$ ist nicht bijektiv, trotzdem ist das Urbild definiert.)\n**Lösung:** Gesucht sind alle erlaubten $x$ mit $x^2=4$ oder $x^2=9$. Aus $x^2=4$ folgt $x=2$ oder $x=-2$, aber $x=2$ ist **nicht** im Definitionsbereich, fällt also weg. Aus $x^2=9$ folgt $x=3$ oder $x=-3$.\n**Ergebnis:** $f^{-1}(\\{4,9\\})=\\{-2,3,-3\\}$.',
        '**Aufgabe:** Sei $h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto |x|$. Bestimme $h^{-1}([0,5])$.\n**Lösung:** Gesucht sind alle $x$ mit $|x|\\in[0,5]$, also $0\\le |x|\\le 5$. Das bedeutet $-5\\le x\\le 5$.\n**Ergebnis:** $h^{-1}([0,5])=[-5,5]$.',
        '**Aufgabe:** Sei $h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto |x|$. Bestimme $h^{-1}([-5,5])$.\n**Lösung:** Gesucht sind alle $x$ mit $|x|\\in[-5,5]$. Da $|x|\\ge 0$ stets gilt, ist die Bedingung gleichwertig zu $0\\le |x|\\le 5$, also $-5\\le x\\le 5$. Der negative Teil des Intervalls bringt keine zusätzliche Einschränkung.\n**Ergebnis:** $h^{-1}([-5,5])=[-5,5]$.',
      ],
    },
    {
      szenario: 'Rechenregeln mit Vereinigung & Schnitt',
      beispiele: [
        '**Aufgabe:** Sei $f:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto x^2$ mit $M_1=[0,2]$ und $M_2=[1,3]$. Prüfe $f(M_1\\cup M_2)=f(M_1)\\cup f(M_2)$.\n**Lösung:** $M_1\\cup M_2=[0,3]$, also $f(M_1\\cup M_2)=[0,9]$. Andererseits $f(M_1)=[0,4]$, $f(M_2)=[1,9]$, und $[0,4]\\cup[1,9]=[0,9]$.\n**Ergebnis:** Beide Seiten sind $[0,9]$ — die Vereinigungsregel gilt.',
        '**Aufgabe:** Sei $f:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto x^2$ mit $M_1=\\{1\\}$ und $M_2=\\{-1\\}$. Zeige, dass beim Schnitt nur $\\subseteq$ gilt.\n**Lösung:** $f(M_1)=\\{1\\}$ und $f(M_2)=\\{1\\}$, also $f(M_1)\\cap f(M_2)=\\{1\\}$. Aber $M_1\\cap M_2=\\varnothing$, somit $f(M_1\\cap M_2)=f(\\varnothing)=\\varnothing$.\n**Ergebnis:** $\\varnothing\\subsetneq\\{1\\}$ — beim Bild-Schnitt gilt im Allgemeinen nur $f(M_1\\cap M_2)\\subseteq f(M_1)\\cap f(M_2)$.',
        '**Aufgabe:** Sei $h:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto |x|$ mit $N_1=[0,2]$ und $N_2=[1,5]$. Bestätige die Urbild-Schnittregel $h^{-1}(N_1\\cap N_2)=h^{-1}(N_1)\\cap h^{-1}(N_2)$.\n**Lösung:** Links: $N_1\\cap N_2=[1,2]$, also $h^{-1}([1,2])=[-2,-1]\\cup[1,2]$. Rechts: $h^{-1}(N_1)=[-2,2]$ und $h^{-1}(N_2)=[-5,-1]\\cup[1,5]$; ihr Schnitt ist $[-2,-1]\\cup[1,2]$.\n**Ergebnis:** Beide Seiten sind $[-2,-1]\\cup[1,2]$ — beim Urbild gilt auch für den Schnitt Gleichheit.',
      ],
    },
  ],
}
