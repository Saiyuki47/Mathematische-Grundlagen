import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'binomische-formeln',
  titel: 'Binomische Formeln',
  inhalt:
    '**Worum geht es?**\n' +
    'Die binomischen Formeln sind drei feste Muster, mit denen man Klammern mit zwei Summanden ausmultipliziert – und, rückwärts gelesen, Summen wieder in ein Produkt zerlegt (faktorisiert). Sie sparen Rechenarbeit beim Ausmultiplizieren, helfen beim Kürzen von Brüchen und beim Wurzel-loswerden im Nenner. Ein **Binom** ist dabei einfach ein Ausdruck aus zwei Gliedern, z. B. $a+b$.\n' +
    '\n' +
    '**Die drei Formeln**\n' +
    '$(a+b)^2 = a^2 + 2ab + b^2$  (1. binomische Formel)\n' +
    '$(a-b)^2 = a^2 - 2ab + b^2$  (2. binomische Formel)\n' +
    '$(a+b)(a-b) = a^2 - b^2$  (3. binomische Formel)\n' +
    'Dabei stehen $a$ und $b$ für beliebige Zahlen oder Terme (auch Wurzeln, Brüche, $x$ usw.).\n' +
    '\n' +
    '**Warum stimmt das? (Distributivgesetz)**\n' +
    'Jede Formel folgt aus dem **Distributivgesetz** „jeder mal jeder". Für die erste:\n' +
    '$(a+b)^2 = (a+b)(a+b) = a\\cdot a + a\\cdot b + b\\cdot a + b\\cdot b = a^2 + 2ab + b^2$.\n' +
    'Die beiden gemischten Glieder $a\\cdot b$ und $b\\cdot a$ ergeben zusammen $2ab$. Bei $(a-b)^2$ wird das mittlere Glied negativ ($-2ab$); das letzte Glied $(-b)(-b)=+b^2$ bleibt **positiv** (Minus mal Minus). Bei der dritten heben sich die gemischten Glieder weg: $a\\cdot a - a\\cdot b + b\\cdot a - b\\cdot b = a^2 - b^2$.\n' +
    '\n' +
    '**Die zwei Leserichtungen**\n' +
    '• **Ausmultiplizieren** (Produkt → Summe): links steht eine Klammer, rechts der ausgerechnete Term. Beispiel $(x+3)^2 = x^2+6x+9$.\n' +
    '• **Faktorisieren** (Summe → Produkt): dieselbe Formel von rechts nach links. Beispiel $x^2-16 = (x+4)(x-4)$. Das ist eng verwandt mit dem **Ausklammern**: Beim Ausklammern zieht man einen gemeinsamen Faktor heraus ($6x+9 = 3(2x+3)$); bei der binomischen Formel erkennt man ein vollständiges Quadrat oder eine Differenz von Quadraten und schreibt es als Produkt.\n' +
    '\n' +
    '**Wie erkennt man eine binomische Formel?**\n' +
    '| Was du siehst | Welche Formel (rückwärts) | Ergebnis |\n' +
    '|---|---|---|\n' +
    '| zwei Quadrate $+$ passendes Mittelglied $+2ab$ | 1. Formel | $(a+b)^2$ |\n' +
    '| zwei Quadrate $-$ passendes Mittelglied $-2ab$ | 2. Formel | $(a-b)^2$ |\n' +
    '| Differenz zweier Quadrate $a^2-b^2$ (kein Mittelglied) | 3. Formel | $(a+b)(a-b)$ |\n' +
    'Vorgehen beim Faktorisieren: (1) Sind das äußere und das letzte Glied **Quadrate**? Dann $a=\\sqrt{\\text{erstes}}$, $b=\\sqrt{\\text{letztes}}$ ablesen. (2) **Probe** mit dem Mittelglied: passt $2ab$ (bzw. $-2ab$)? Wenn ja, ist es ein Quadrat. (3) Fehlt das Mittelglied und steht ein Minus, ist es die 3. Formel.\n' +
    '\n' +
    '**Die dritte Formel zum Faktorisieren**\n' +
    'Die 3. Formel ist der wichtigste Spezialfall: Jede **Differenz von Quadraten** zerfällt in ein Produkt, $a^2-b^2=(a+b)(a-b)$. Anwendungen:\n' +
    '• Brüche kürzen, z. B. $\\dfrac{a^2-b^2}{a-b} = \\dfrac{(a+b)(a-b)}{a-b} = a+b$.\n' +
    '• Wurzeln im Nenner beseitigen (Nenner rational machen): mit dem **konjugierten** Ausdruck erweitern (gleiche Glieder, umgedrehtes Vorzeichen), denn $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a-b$ ist wurzelfrei.\n' +
    '\n' +
    '**Die dritten Potenzen (Kurzform)**\n' +
    'Für die dritte Potenz gilt:\n' +
    '$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$\n' +
    '$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$\n' +
    'Merke: Koeffizienten $1,3,3,1$; bei $(a-b)^3$ wechseln die Vorzeichen ab ($+,-,+,-$). Die $a$-Potenz fällt von $a^3$ auf $a^0$, die $b$-Potenz steigt von $b^0$ auf $b^3$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $(a+b)^2 \\neq a^2+b^2$ — das **Mittelglied 2ab fehlt** dann (zweithäufigster Klausurfehler).\n' +
    '• Bei $(a-b)^2$ ist der letzte Term $+b^2$, **nicht** $-b^2$.\n' +
    '• Es gibt **keine** Zerlegung von $a^2+b^2$ (Summe von Quadraten) in reelle Faktoren – nur die **Differenz** $a^2-b^2$ lässt sich faktorisieren.',
  beispiele: [
    {
      szenario: 'Ausmultiplizieren mit (a+b)² und (a-b)²',
      beispiele: [
        '**Aufgabe:** Multipliziere $(x+3)^2$ aus.\n**Lösung:** 1. Formel mit $a=x$, $b=3$: $a^2 + 2ab + b^2 = x^2 + 2\\cdot x\\cdot 3 + 3^2$.\n**Ergebnis:** $x^2 + 6x + 9$.',
        '**Aufgabe:** Multipliziere $(2x-5)^2$ aus.\n**Lösung:** 2. Formel mit $a=2x$, $b=5$: $(2x)^2 - 2\\cdot 2x\\cdot 5 + 5^2 = 4x^2 - 20x + 25$. Achtung: $(2x)^2 = 4x^2$, und das letzte Glied $+25$ ist positiv.\n**Ergebnis:** $4x^2 - 20x + 25$.',
        '**Aufgabe:** Berechne $103^2$ im Kopf.\n**Lösung:** $103 = 100+3$, also 1. Formel mit $a=100$, $b=3$: $100^2 + 2\\cdot 100\\cdot 3 + 3^2 = 10000 + 600 + 9$.\n**Ergebnis:** $10609$.',
      ],
    },
    {
      szenario: 'Faktorisieren / Erkennen (rückwärts)',
      beispiele: [
        '**Aufgabe:** Faktorisiere $x^2 - 10x + 25$.\n**Lösung:** Erstes Glied $x^2 \\Rightarrow a=x$, letztes Glied $25 = 5^2 \\Rightarrow b=5$. Probe des Mittelglieds: $-2ab = -2\\cdot x\\cdot 5 = -10x$ – passt. Also 2. Formel rückwärts.\n**Ergebnis:** $(x-5)^2$.',
        '**Aufgabe:** Faktorisiere $9x^2 - 25$.\n**Lösung:** Differenz zweier Quadrate, kein Mittelglied: $9x^2 = (3x)^2$, $25 = 5^2$, also $a=3x$, $b=5$. 3. Formel rückwärts $a^2-b^2=(a+b)(a-b)$.\n**Ergebnis:** $(3x+5)(3x-5)$.',
        '**Aufgabe:** Faktorisiere $x^2 + 12x + 36$.\n**Lösung:** $x^2 \\Rightarrow a=x$, $36 = 6^2 \\Rightarrow b=6$. Probe: $2ab = 2\\cdot x\\cdot 6 = 12x$ – passt, Vorzeichen $+$.\n**Ergebnis:** $(x+6)^2$.',
      ],
    },
    {
      szenario: 'Dritte Formel: Kürzen & Nenner rational machen',
      beispiele: [
        '**Aufgabe:** Kürze $\\dfrac{a^2 - b^2}{a-b}$ (Übungsblatt 0, Aufg. 3d).\n**Lösung:** Zähler mit der 3. Formel faktorisieren: $a^2-b^2 = (a+b)(a-b)$. Dann kürzt sich $(a-b)$ weg: $\\dfrac{(a+b)(a-b)}{a-b}$.\n**Ergebnis:** $a+b$.',
        '**Aufgabe:** Mache $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}}$ rational (Übungsblatt 0, Aufg. 4c).\n**Lösung:** Mit dem Konjugierten $\\sqrt{3}-\\sqrt{5}$ erweitern. Nenner nach 3. Formel: $(\\sqrt{3}+\\sqrt{5})(\\sqrt{3}-\\sqrt{5}) = (\\sqrt{3})^2-(\\sqrt{5})^2 = 3-5 = -2$.\n**Ergebnis:** $\\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$ (gleichwertig $\\dfrac{\\sqrt{5}-\\sqrt{3}}{2}$).',
        '**Aufgabe:** Berechne $97\\cdot 103$ ohne schriftliche Multiplikation.\n**Lösung:** $97 = 100-3$, $103 = 100+3$, also 3. Formel: $(100-3)(100+3) = 100^2 - 3^2 = 10000 - 9$.\n**Ergebnis:** $9991$.',
      ],
    },
    {
      szenario: 'Verbindung zum Ausklammern & dritte Potenz',
      beispiele: [
        '**Aufgabe:** Klammere zuerst aus und faktorisiere dann $2x^2 - 18$.\n**Lösung:** Gemeinsamen Faktor $2$ ausklammern: $2(x^2 - 9)$. Die Klammer ist eine Differenz von Quadraten ($9=3^2$), 3. Formel: $x^2-9=(x+3)(x-3)$.\n**Ergebnis:** $2(x+3)(x-3)$.',
        '**Aufgabe:** Multipliziere $(x+2)^3$ aus.\n**Lösung:** Kurzform $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ mit $a=x$, $b=2$: $x^3 + 3x^2\\cdot 2 + 3x\\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.\n**Ergebnis:** $x^3 + 6x^2 + 12x + 8$.',
        '**Aufgabe:** Multipliziere $(a-1)^3$ aus.\n**Lösung:** Kurzform $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ mit $b=1$: $a^3 - 3a^2\\cdot 1 + 3a\\cdot 1 - 1$. Vorzeichen wechseln ab.\n**Ergebnis:** $a^3 - 3a^2 + 3a - 1$.',
      ],
    },
  ],
}
