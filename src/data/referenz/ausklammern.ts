import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'ausklammern',
  titel: 'Ausklammern & Faktorisieren',
  inhalt:
    '**Worum geht es?**\n' +
    'Faktorisieren heißt, eine Summe als **Produkt** zu schreiben — also $ab+ac$ in die Form $a\\cdot(b+c)$ umzuformen. Das ist das **Distributivgesetz rückwärts** gelesen. Man braucht das aus zwei Gründen: Erstens werden Terme dadurch oft kürzer und übersichtlicher. Zweitens — und das ist der eigentliche Sinn — kann man in einem **Bruch** nur dann etwas wegkürzen, wenn Zähler und Nenner als Produkt vorliegen. Aus einer Summe darf man **nichts** kürzen. Faktorisieren ist also die Voraussetzung fürs Kürzen.\n' +
    '\n' +
    '**Gemeinsamen Faktor ausklammern**\n' +
    'Das Distributivgesetz lautet $a(b+c)=ab+ac$. Liest man es von rechts nach links, so „klammert man den gemeinsamen Faktor $a$ aus":\n' +
    '$ab+ac=a\\,(b+c)$\n' +
    'Bedingung: Der Faktor muss in **jedem** Summanden stecken. Man teilt dann jeden Summanden durch ihn und schreibt ihn vor die Klammer. **Probe:** Klammer wieder ausmultiplizieren — es muss der Ausgangsterm herauskommen.\n' +
    '\n' +
    '**Den größten gemeinsamen Faktor (GGF) bestimmen**\n' +
    'Man nimmt so viel wie möglich heraus, damit in der Klammer kein gemeinsamer Faktor mehr übrig bleibt. Der GGF besteht aus zwei Teilen:\n' +
    '• **Zahlanteil:** der größte gemeinsame Teiler (ggT) der Koeffizienten.\n' +
    '• **Variablenanteil:** jede Variable mit der **kleinsten** vorkommenden Hochzahl (bei Potenzen gilt $x^m:x^n=x^{m-n}$).\n' +
    'Beispiel: In $6x^3+9x^2$ ist der ggT der Zahlen $3$, die kleinste $x$-Potenz ist $x^2$, also GGF $=3x^2$ und $6x^3+9x^2=3x^2(2x+3)$.\n' +
    '\n' +
    '**Faktorisieren mit den binomischen Formeln**\n' +
    'Erkennt man eines dieser Muster, faktorisiert man in einem Schritt:\n' +
    '| Form (ausmultipliziert) | faktorisiert |\n' +
    '|---|---|\n' +
    '| $a^2+2ab+b^2$ | $(a+b)^2$ |\n' +
    '| $a^2-2ab+b^2$ | $(a-b)^2$ |\n' +
    '| $a^2-b^2$ | $(a+b)(a-b)$ |\n' +
    'Besonders nützlich ist die **3. Formel** $a^2-b^2=(a+b)(a-b)$ (Differenz zweier Quadrate), z. B. $x^2-9=(x+3)(x-3)$.\n' +
    '\n' +
    '**Quadratische Terme faktorisieren (Nullstellen / Vieta)**\n' +
    'Ein quadratischer Term $x^2+px+q$ lässt sich über seine **Nullstellen** $x_1,x_2$ zerlegen:\n' +
    '$x^2+px+q=(x-x_1)(x-x_2)$\n' +
    'Die Nullstellen findet man mit der $pq$-Formel $x_{1,2}=-\\frac{p}{2}\\pm\\sqrt{\\left(\\frac{p}{2}\\right)^2-q}$. Nach dem **Satz von Vieta** gilt außerdem $x_1+x_2=-p$ und $x_1\\cdot x_2=q$ — bei ganzzahligen Lösungen rät man so das Faktorenpaar oft direkt. Hat der Term einen Vorfaktor $a\\neq1$ ($ax^2+bx+c$), klammert man ihn zuerst aus: $a\\,(x-x_1)(x-x_2)$.\n' +
    '\n' +
    '**Wie geht man vor? (Reihenfolge)**\n' +
    '1. **Immer zuerst** den gemeinsamen Faktor (GGF) ausklammern.\n' +
    '2. Auf eine **binomische Formel** prüfen (Quadrate, Differenz zweier Quadrate).\n' +
    '3. Bei einem quadratischen Term die **Nullstellen** bestimmen und $(x-x_1)(x-x_2)$ schreiben.\n' +
    '4. **Probe:** ausmultiplizieren — kommt der Ausgangsterm heraus?\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Aus einer **Summe** kürzen: $\\frac{a+b}{a}\\neq b$. Erst faktorisieren, dann kürzen.\n' +
    '• Beim Ausklammern einen Summanden vergessen oder ein **Vorzeichen** verlieren. Merke: $-a-b=-(a+b)$, und $b-a=-(a-b)$.\n' +
    '• Nicht vollständig ausklammern (in der Klammer steckt noch ein gemeinsamer Faktor).',
  beispiele: [
    {
      szenario: 'Gemeinsamen Faktor / GGF ausklammern',
      beispiele: [
        '**Aufgabe:** Klammere aus: $6x^3+9x^2$.\n**Lösung:** ggT der Zahlen $6$ und $9$ ist $3$, kleinste $x$-Potenz ist $x^2$, also GGF $=3x^2$. Teilen: $6x^3:3x^2=2x$ und $9x^2:3x^2=3$.\n**Ergebnis:** $6x^3+9x^2=3x^2\\,(2x+3)$.',
        '**Aufgabe:** Klammere aus: $-121ab^3-(11a^2b)^2\\cdot(-2a^{-3}b)$. (Hinweis: $11\\cdot11=121$.)\n**Lösung:** Erst den 2. Term vereinfachen: $(11a^2b)^2=121a^4b^2$, mal $(-2a^{-3}b)$ ergibt $-242a^{1}b^{3}=-242ab^3$. Der Term lautet also $-121ab^3-(-242ab^3)=-121ab^3+242ab^3$. Gemeinsamer Faktor $ab^3$ ausklammern: $ab^3(-121+242)$.\n**Ergebnis:** $ab^3\\cdot121=121\\,ab^3$.',
        '**Aufgabe:** Klammere in $b(a-b)+b-a$ den Faktor $(a-b)$ aus.\n**Lösung:** Der hintere Teil ist $b-a=-(a-b)$. Also $b(a-b)+b-a=b(a-b)-(a-b)$. Beide Summanden enthalten $(a-b)$; ausklammern: $(a-b)\\,(b-1)$.\n**Ergebnis:** $b(a-b)+b-a=(a-b)(b-1)$.',
      ],
    },
    {
      szenario: 'Mit binomischen Formeln faktorisieren',
      beispiele: [
        '**Aufgabe:** Faktorisiere $x^2-9$.\n**Lösung:** Differenz zweier Quadrate: $9=3^2$, also $x^2-9=x^2-3^2$. 3. binomische Formel $a^2-b^2=(a+b)(a-b)$ mit $a=x$, $b=3$.\n**Ergebnis:** $x^2-9=(x+3)(x-3)$.',
        '**Aufgabe:** Faktorisiere $x^2+6x+9$.\n**Lösung:** Verdacht auf $(a+b)^2=a^2+2ab+b^2$. Hier $a=x$; wegen $9=3^2$ ist $b=3$, und das mittlere Glied passt: $2\\cdot x\\cdot 3=6x$. ✓\n**Ergebnis:** $x^2+6x+9=(x+3)^2$.',
        '**Aufgabe:** Kürze $\\dfrac{a^2-b^2}{a-b}$.\n**Lösung:** Aus der Summe im Zähler darf man nicht kürzen — erst faktorisieren: $a^2-b^2=(a+b)(a-b)$. Dann $\\dfrac{(a+b)(a-b)}{a-b}$, der Faktor $(a-b)$ kürzt sich.\n**Ergebnis:** $\\dfrac{a^2-b^2}{a-b}=a+b$.',
      ],
    },
    {
      szenario: 'Quadratische Terme über Nullstellen (Vieta)',
      beispiele: [
        '**Aufgabe:** Faktorisiere $x^2-5x+6$.\n**Lösung:** Vieta: gesucht $x_1,x_2$ mit $x_1+x_2=5$ und $x_1\\cdot x_2=6$. Das Paar $2$ und $3$ passt. Also $x_1=2$, $x_2=3$.\n**Ergebnis:** $x^2-5x+6=(x-2)(x-3)$.',
        '**Aufgabe:** Faktorisiere $x^2-x-6$.\n**Lösung:** Vieta: $x_1+x_2=1$ und $x_1\\cdot x_2=-6$. Das Produkt ist negativ, also verschiedene Vorzeichen; $3$ und $-2$ passen ($3+(-2)=1$, $3\\cdot(-2)=-6$).\n**Ergebnis:** $x^2-x-6=(x-3)(x+2)$.',
        '**Aufgabe:** Faktorisiere $2x^2-8x+6$.\n**Lösung:** Zuerst den Vorfaktor $2$ ausklammern: $2(x^2-4x+3)$. Für $x^2-4x+3$ liefert Vieta $x_1+x_2=4$, $x_1\\cdot x_2=3$, also $1$ und $3$.\n**Ergebnis:** $2x^2-8x+6=2(x-1)(x-3)$.',
      ],
    },
    {
      szenario: 'Faktorisieren als Voraussetzung fürs Kürzen',
      beispiele: [
        '**Aufgabe:** Kürze $\\dfrac{k^2+k^3}{k^2}$.\n**Lösung:** Zähler faktorisieren: kleinste Potenz $k^2$ ausklammern, $k^2+k^3=k^2(1+k)$. Dann $\\dfrac{k^2(1+k)}{k^2}$, der Faktor $k^2$ kürzt sich.\n**Ergebnis:** $\\dfrac{k^2+k^3}{k^2}=1+k$.',
        '**Aufgabe:** Kürze $\\dfrac{2k^2}{4k^2+6k^3}$.\n**Lösung:** Nenner faktorisieren: GGF $=2k^2$, also $4k^2+6k^3=2k^2(2+3k)$. Dann $\\dfrac{2k^2}{2k^2(2+3k)}$, der Faktor $2k^2$ kürzt sich.\n**Ergebnis:** $\\dfrac{2k^2}{4k^2+6k^3}=\\dfrac{1}{2+3k}$.',
        '**Aufgabe:** Warum lässt sich $\\dfrac{a^2+b^2}{a+b}$ nicht kürzen?\n**Lösung:** Der Zähler $a^2+b^2$ ist eine **Summe** und passt zu keiner binomischen Formel (nur $a^2-b^2$ ist faktorisierbar). Er lässt sich nicht als Produkt mit Faktor $(a+b)$ schreiben, also gibt es nichts zu kürzen.\n**Ergebnis:** $\\dfrac{a^2+b^2}{a+b}$ ist nicht weiter kürzbar.',
      ],
    },
  ],
}
