import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'wurzelregeln',
  titel: 'Wurzeln & rationale Exponenten',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Wurzel macht das Potenzieren rückgängig. Genauso wie das Subtrahieren das Addieren umkehrt, beantwortet das Wurzelziehen die Frage: „Welche Zahl muss ich potenzieren, um $x$ zu erhalten?" Man braucht Wurzeln überall dort, wo aus einer Fläche eine Seitenlänge, aus einem Volumen eine Kante oder aus $x^2 = a$ das $x$ werden soll.\n' +
    '\n' +
    '**Definition: Quadratwurzel**\n' +
    'Für eine reelle Zahl $x \\ge 0$ ist die Quadratwurzel $\\sqrt{x}$ diejenige **eindeutige** reelle Zahl $y \\ge 0$ mit $y \\cdot y = x$. Wichtig: Auch das Ergebnis ist nie negativ. Schreibweise als Potenz: $\\sqrt{x} = x^{1/2}$.\n' +
    'Beispiel: $\\sqrt{9} = 3$, denn $3 \\cdot 3 = 9$ (nicht $-3$, obwohl auch $(-3)^2 = 9$ gilt).\n' +
    '\n' +
    '**Definition: $n$-te Wurzel**\n' +
    'Allgemein ist die $n$-te Wurzel die Umkehrung des Potenzierens mit $n$: Für $a \\ge 0$ und $n \\in \\mathbb{N}$ ist $\\sqrt[n]{a}$ die eindeutige Zahl $y \\ge 0$ mit $y^n = a$. Hier heißt $n$ **Wurzelexponent** und $a$ **Radikand**. Der Kern ist die Umrechnung in einen rationalen Exponenten:\n' +
    '$\\sqrt[n]{a} = a^{1/n} \\qquad\\text{und}\\qquad \\sqrt[n]{a^m} = a^{m/n}.$\n' +
    'Damit gehorcht jede Wurzel automatisch denselben Regeln wie Potenzen — man muss sich also keine getrennten Gesetze merken.\n' +
    '\n' +
    '**Die Wurzelgesetze (für $a, b \\ge 0$)**\n' +
    '| Regel | Formel | als Potenz |\n' +
    '|---|---|---|\n' +
    '| Produkt | $\\sqrt[n]{a}\\cdot\\sqrt[n]{b} = \\sqrt[n]{a\\,b}$ | $a^{1/n} b^{1/n} = (ab)^{1/n}$ |\n' +
    '| Quotient | $\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\dfrac{a}{b}}$ | $\\dfrac{a^{1/n}}{b^{1/n}} = \\left(\\dfrac{a}{b}\\right)^{1/n}$ |\n' +
    '| Potenz | $\\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m = a^{m/n}$ | $(a^m)^{1/n} = a^{m/n}$ |\n' +
    '| Wurzel aus Wurzel | $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m\\,n]{a}$ | $\\left(a^{1/n}\\right)^{1/m} = a^{1/(mn)}$ |\n' +
    '\n' +
    '**⚠️ Es gibt KEIN Summengesetz**\n' +
    'Für eine Summe oder Differenz unter der Wurzel gibt es keine Vereinfachung. Im Allgemeinen ist $\\sqrt{a+b} \\ne \\sqrt{a} + \\sqrt{b}$. Gegenbeispiel: $\\sqrt{9+16} = \\sqrt{25} = 5$, aber $\\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Dieser Fehler ist der häufigste überhaupt.\n' +
    '\n' +
    '**Definitionsbereich: Wann ist eine Wurzel erlaubt?**\n' +
    'Bei **geradem** Wurzelexponenten (also $\\sqrt{\\;}$, $\\sqrt[4]{\\;}$, …) muss der Radikand $\\ge 0$ sein, denn ein Quadrat (allgemein eine gerade Potenz) ist nie negativ — $\\sqrt{-4}$ existiert in $\\mathbb{R}$ nicht. Bei **ungeradem** Exponenten ($\\sqrt[3]{\\;}$, …) ist auch ein negativer Radikand erlaubt, z. B. $\\sqrt[3]{-8} = -2$. Daher muss man bei Termen wie $\\sqrt{x-3}$ stets die Bedingung $x-3 \\ge 0$, also $x \\ge 3$, mitführen.\n' +
    '\n' +
    '**Vorsicht: $\\sqrt{a^2} = |a|$**\n' +
    'Weil $\\sqrt{\\;}$ per Definition nie negativ ist, gilt nicht $\\sqrt{a^2} = a$, sondern\n' +
    '$\\sqrt{a^2} = |a|.$\n' +
    'Nur wenn man bereits weiß, dass $a \\ge 0$ ist, darf man die Betragsstriche weglassen. Beispiel: $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |{-5}|$.\n' +
    '\n' +
    '**Teilweises Wurzelziehen**\n' +
    'Man zerlegt den Radikanden in einen Faktor, aus dem die Wurzel glatt aufgeht (eine Quadratzahl bei $\\sqrt{\\;}$), und einen Rest. Mit dem Produktgesetz wird der erste Teil herausgezogen: $\\sqrt{a\\,b} = \\sqrt{a}\\cdot\\sqrt{b}$. So entsteht die übersichtliche „Wurzel-Normalform" $c\\sqrt{d}$ mit möglichst kleinem $d$. Beispiel: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.\n' +
    '\n' +
    '**Nenner rational machen (Rationalisieren)**\n' +
    'Eine Wurzel im Nenner gilt als unschön; man beseitigt sie durch geschicktes Erweitern (Multiplizieren mit $1$ in passender Form).\n' +
    '• Einzelne Wurzel im Nenner: mit genau dieser Wurzel erweitern — $\\dfrac{1}{\\sqrt{a}} = \\dfrac{1}{\\sqrt{a}}\\cdot\\dfrac{\\sqrt{a}}{\\sqrt{a}} = \\dfrac{\\sqrt{a}}{a}$.\n' +
    '• Summe/Differenz mit Wurzeln im Nenner: mit dem **konjugierten** Term erweitern und die 3. binomische Formel $(x+y)(x-y) = x^2 - y^2$ nutzen — so verschwinden die Wurzeln im Nenner. Zu $\\sqrt{a}+\\sqrt{b}$ ist $\\sqrt{a}-\\sqrt{b}$ konjugiert.\n' +
    '\n' +
    '**Wie geht man Schritt für Schritt vor?**\n' +
    '1. Bei geraden Wurzeln zuerst den Definitionsbereich klären (Radikand $\\ge 0$).\n' +
    '2. Wurzeln in rationale Exponenten umschreiben ($\\sqrt[n]{a} = a^{1/n}$) — dann gelten die normalen Potenzregeln.\n' +
    '3. Produkt-/Quotientengesetz anwenden, um Wurzeln zusammenzufassen oder Quadratzahlen herauszuziehen.\n' +
    '4. Steht eine Wurzel im Nenner, rationalisieren (einzeln: gleiche Wurzel; Summe: Konjugierte).\n' +
    '5. Ergebnis in Normalform $c\\sqrt{d}$ bzw. als gekürzter Bruch angeben; bei $\\sqrt{a^2}$ an den Betrag denken.',
  beispiele: [
    {
      szenario: 'Wurzelgesetze anwenden',
      beispiele: [
        '**Aufgabe:** Berechne $\\sqrt{2}\\cdot\\sqrt{32}$.\n**Lösung:** Produktgesetz $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{a\\,b}$ rückwärts zusammenfassen: $\\sqrt{2}\\cdot\\sqrt{32} = \\sqrt{2\\cdot 32} = \\sqrt{64}$. Und $\\sqrt{64} = 8$, denn $8\\cdot 8 = 64$.\n**Ergebnis:** $\\sqrt{2}\\cdot\\sqrt{32} = 8$.',
        '**Aufgabe:** Vereinfache $\\dfrac{\\sqrt{48}}{\\sqrt{3}}$.\n**Lösung:** Quotientengesetz $\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$: $\\dfrac{\\sqrt{48}}{\\sqrt{3}} = \\sqrt{\\dfrac{48}{3}} = \\sqrt{16}$. Und $\\sqrt{16} = 4$.\n**Ergebnis:** $\\dfrac{\\sqrt{48}}{\\sqrt{3}} = 4$.',
        '**Aufgabe:** Schreibe $\\sqrt[3]{\\sqrt{a}}$ als eine einzige Wurzel ($a \\ge 0$).\n**Lösung:** Wurzel-aus-Wurzel-Gesetz $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m\\,n]{a}$ mit $m=3$, $n=2$. Also $\\sqrt[3]{\\sqrt{a}} = \\sqrt[3\\cdot 2]{a} = \\sqrt[6]{a}$. Kontrolle mit Exponenten: $\\left(a^{1/2}\\right)^{1/3} = a^{1/6}$.\n**Ergebnis:** $\\sqrt[3]{\\sqrt{a}} = \\sqrt[6]{a} = a^{1/6}$.',
      ],
    },
    {
      szenario: 'Wurzeln & rationale Exponenten umrechnen',
      beispiele: [
        '**Aufgabe:** Schreibe $\\sqrt[4]{a^6}$ als Potenz mit rationalem Exponenten und kürze ($a \\ge 0$).\n**Lösung:** Regel $\\sqrt[n]{a^m} = a^{m/n}$ mit $m=6$, $n=4$: $\\sqrt[4]{a^6} = a^{6/4}$. Den Exponenten kürzen: $\\dfrac{6}{4} = \\dfrac{3}{2}$.\n**Ergebnis:** $\\sqrt[4]{a^6} = a^{3/2} = \\sqrt{a^3}$.',
        '**Aufgabe:** Berechne $8^{2/3}$.\n**Lösung:** Rationaler Exponent als Wurzel: $8^{2/3} = \\sqrt[3]{8^2} = \\left(\\sqrt[3]{8}\\right)^2$. Geschickter ist erst die Wurzel: $\\sqrt[3]{8} = 2$ (da $2^3 = 8$), dann $2^2 = 4$.\n**Ergebnis:** $8^{2/3} = 4$.',
        '**Aufgabe:** Vereinfache $\\sqrt{a}\\cdot\\sqrt[3]{a}$ zu einer Potenz ($a \\ge 0$).\n**Lösung:** In Exponenten umschreiben und Potenzgesetz $a^p\\cdot a^q = a^{p+q}$ nutzen: $a^{1/2}\\cdot a^{1/3} = a^{1/2+1/3}$. Gemeinsamer Nenner: $\\dfrac{1}{2}+\\dfrac{1}{3} = \\dfrac{3}{6}+\\dfrac{2}{6} = \\dfrac{5}{6}$.\n**Ergebnis:** $\\sqrt{a}\\cdot\\sqrt[3]{a} = a^{5/6} = \\sqrt[6]{a^5}$.',
      ],
    },
    {
      szenario: 'Nenner rational machen',
      beispiele: [
        '**Aufgabe:** Mache den Nenner von $\\dfrac{1}{\\sqrt{5}}$ rational.\n**Lösung:** Mit $\\dfrac{\\sqrt{5}}{\\sqrt{5}}$ erweitern (das ist eine getarnte $1$): $\\dfrac{1}{\\sqrt{5}} = \\dfrac{1}{\\sqrt{5}}\\cdot\\dfrac{\\sqrt{5}}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{\\sqrt{5}\\cdot\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$, denn $\\sqrt{5}\\cdot\\sqrt{5} = 5$.\n**Ergebnis:** $\\dfrac{1}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$.',
        '**Aufgabe:** Mache den Nenner von $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}}$ rational.\n**Lösung:** Mit dem konjugierten Term $\\sqrt{3}-\\sqrt{5}$ erweitern. Im Nenner wirkt die 3. binomische Formel: $(\\sqrt{3}+\\sqrt{5})(\\sqrt{3}-\\sqrt{5}) = (\\sqrt{3})^2-(\\sqrt{5})^2 = 3-5 = -2$. Also $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}}\\cdot\\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$.\n**Ergebnis:** $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2} = \\dfrac{\\sqrt{5}-\\sqrt{3}}{2}$.',
        '**Aufgabe:** Mache den Nenner von $\\dfrac{6}{\\sqrt{12}}$ rational und vereinfache.\n**Lösung:** Mit $\\sqrt{12}$ erweitern: $\\dfrac{6}{\\sqrt{12}} = \\dfrac{6\\sqrt{12}}{12} = \\dfrac{\\sqrt{12}}{2}$. Teilweise Wurzel ziehen: $\\sqrt{12} = \\sqrt{4\\cdot 3} = 2\\sqrt{3}$, also $\\dfrac{2\\sqrt{3}}{2} = \\sqrt{3}$.\n**Ergebnis:** $\\dfrac{6}{\\sqrt{12}} = \\sqrt{3}$.',
      ],
    },
    {
      szenario: 'Sonderfälle: Betrag, Summe, Definitionsbereich',
      beispiele: [
        '**Aufgabe:** Vereinfache $\\sqrt{(-7)^2}$ und allgemein $\\sqrt{a^2}$.\n**Lösung:** Erst innen rechnen: $(-7)^2 = 49$, also $\\sqrt{49} = 7$. Da $\\sqrt{\\;}$ nie negativ ist, gilt allgemein $\\sqrt{a^2} = |a|$, nicht $a$. Hier $|{-7}| = 7$.\n**Ergebnis:** $\\sqrt{(-7)^2} = 7$, allgemein $\\sqrt{a^2} = |a|$.',
        '**Aufgabe:** Gilt $\\sqrt{a+b} = \\sqrt{a}+\\sqrt{b}$ für alle $a,b \\ge 0$? Prüfe mit $a=9$, $b=16$.\n**Lösung:** Linke Seite: $\\sqrt{9+16} = \\sqrt{25} = 5$. Rechte Seite: $\\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Wegen $5 \\ne 7$ ist die Gleichung falsch — ein Summengesetz für Wurzeln existiert nicht.\n**Ergebnis:** Nein, im Allgemeinen $\\sqrt{a+b} \\ne \\sqrt{a}+\\sqrt{b}$ (hier $5 \\ne 7$).',
        '**Aufgabe:** Bestimme den Definitionsbereich von $f(x) = \\sqrt{2x-6}$.\n**Lösung:** Gerade Wurzel verlangt Radikand $\\ge 0$: $2x-6 \\ge 0$. Auflösen: $2x \\ge 6$, also $x \\ge 3$.\n**Ergebnis:** $D = \\{x \\in \\mathbb{R} : x \\ge 3\\} = [3,\\infty)$.',
      ],
    },
  ],
}
