import type { ReferenzKarte } from '../types'

// Jede Karte erklärt ihr Thema komplett von vorne – ohne Vorwissen.
// inhalt = Markdown-lite + LaTeX ($...$); je Thema mit **Zwischenüberschriften**.
// beispiele = pro Szenario GENAU 3 vollständig durchgerechnete Beispiele.
// Die id-Slugs sind stabil (kebab-case) für Inhaltsverzeichnis + Deep-Links.
export const referenzKarten: ReferenzKarte[] = [
  // ===== Blatt 0 – Rechenregeln, Notationen, Geraden =====
  {
    id: 'bruchrechnen',
    titel: 'Bruchrechnen',
    inhalt:
      '**Worum geht es?**\n' +
      'Ein Bruch $\\frac{a}{b}$ beschreibt eine Teilung: $a$ Teile von $b$ gleich großen Stücken. Die obere Zahl heißt Zähler, die untere Nenner. Der Nenner darf nie $0$ sein. Hier lernst du, wie man Brüche addiert, subtrahiert, multipliziert, dividiert und kürzt.\n' +
      '\n' +
      '**Addition & Subtraktion**\n' +
      'Brüche kann man nur zusammenzählen, wenn sie denselben Nenner haben. Sonst bringt man sie zuerst auf einen gemeinsamen Nenner. Allgemein:\n' +
      '$\\dfrac{a}{b} \\pm \\dfrac{c}{d} = \\dfrac{a\\cdot d \\pm b\\cdot c}{b\\cdot d}$\n' +
      'Man erweitert also den ersten Bruch mit $d$ und den zweiten mit $b$; dann haben beide den Nenner $b\\cdot d$.\n' +
      '\n' +
      '**Multiplikation**\n' +
      'Brüche multipliziert man, indem man Zähler mal Zähler und Nenner mal Nenner rechnet:\n' +
      '$\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{a\\cdot c}{b\\cdot d}$\n' +
      'Ein gemeinsamer Nenner ist hier nicht nötig.\n' +
      '\n' +
      '**Division**\n' +
      'Durch einen Bruch teilt man, indem man mit seinem Kehrwert multipliziert (Zähler und Nenner vertauschen):\n' +
      '$\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} = \\dfrac{a\\cdot d}{b\\cdot c}$\n' +
      '\n' +
      '**Kürzen**\n' +
      'Steht im Zähler und im Nenner derselbe Faktor, darf man ihn streichen – der Bruchwert bleibt gleich:\n' +
      '$\\dfrac{k\\cdot a}{k\\cdot b} = \\dfrac{a}{b}$ (für $k \\neq 0$).\n' +
      'Wichtig: Gekürzt wird nur über gemeinsame **Faktoren**, niemals über einzelne Summanden.',
    beispiele: [
      {
        szenario: 'Addition & Subtraktion',
        beispiele: [
          '**Aufgabe:** Berechne $\\frac{1}{2} + \\frac{1}{3}$.\n**Lösung:** Gemeinsamer Nenner $2\\cdot 3 = 6$. Erweitern: $\\frac{1}{2} = \\frac{3}{6}$, $\\frac{1}{3} = \\frac{2}{6}$. Zähler addieren: $3 + 2 = 5$.\n**Ergebnis:** $\\frac{5}{6}$.',
          '**Aufgabe:** Berechne $\\frac{3}{4} - \\frac{1}{6}$.\n**Lösung:** Gemeinsamer Nenner $12$. $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{1}{6} = \\frac{2}{12}$. Zähler: $9 - 2 = 7$.\n**Ergebnis:** $\\frac{7}{12}$.',
          '**Aufgabe:** Berechne $\\frac{2}{3} + \\frac{1}{6}$.\n**Lösung:** Hier reicht der Nenner $6$: $\\frac{2}{3} = \\frac{4}{6}$. Dann $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.\n**Ergebnis:** $\\frac{5}{6}$.',
        ],
      },
      {
        szenario: 'Multiplikation',
        beispiele: [
          '**Aufgabe:** Berechne $\\frac{2}{3} \\cdot \\frac{4}{5}$.\n**Lösung:** Zähler mal Zähler: $2\\cdot 4 = 8$, Nenner mal Nenner: $3\\cdot 5 = 15$.\n**Ergebnis:** $\\frac{8}{15}$.',
          '**Aufgabe:** Berechne $\\frac{3}{8} \\cdot \\frac{2}{9}$.\n**Lösung:** Zähler $3\\cdot 2 = 6$, Nenner $8\\cdot 9 = 72$, also $\\frac{6}{72}$. Kürzen mit $6$: $\\frac{6}{72} = \\frac{1}{12}$.\n**Ergebnis:** $\\frac{1}{12}$.',
          '**Aufgabe:** Berechne $\\frac{5}{6} \\cdot 3$.\n**Lösung:** Die ganze Zahl als $\\frac{3}{1}$ schreiben: $\\frac{5}{6}\\cdot\\frac{3}{1} = \\frac{15}{6}$. Kürzen mit $3$: $\\frac{15}{6} = \\frac{5}{2}$.\n**Ergebnis:** $\\frac{5}{2} = 2{,}5$.',
        ],
      },
      {
        szenario: 'Division',
        beispiele: [
          '**Aufgabe:** Berechne $\\frac{2}{3} : \\frac{4}{5}$.\n**Lösung:** Mit dem Kehrwert multiplizieren: $\\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{10}{12}$. Kürzen mit $2$: $\\frac{10}{12} = \\frac{5}{6}$.\n**Ergebnis:** $\\frac{5}{6}$.',
          '**Aufgabe:** Berechne $\\frac{3}{4} : \\frac{9}{8}$.\n**Lösung:** $\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36}$. Kürzen mit $12$: $\\frac{24}{36} = \\frac{2}{3}$.\n**Ergebnis:** $\\frac{2}{3}$.',
          '**Aufgabe:** Berechne $\\frac{5}{6} : 2$.\n**Lösung:** $2 = \\frac{2}{1}$, Kehrwert $\\frac{1}{2}$: $\\frac{5}{6} \\cdot \\frac{1}{2} = \\frac{5}{12}$.\n**Ergebnis:** $\\frac{5}{12}$.',
        ],
      },
      {
        szenario: 'Kürzen',
        beispiele: [
          '**Aufgabe:** Kürze $\\frac{12}{18}$.\n**Lösung:** Größter gemeinsamer Teiler von $12$ und $18$ ist $6$: $\\frac{12}{18} = \\frac{2\\cdot 6}{3\\cdot 6} = \\frac{2}{3}$.\n**Ergebnis:** $\\frac{2}{3}$.',
          '**Aufgabe:** Kürze $\\frac{k\\cdot a}{k\\cdot b}$ mit $k \\neq 0$.\n**Lösung:** Der Faktor $k$ steht oben und unten und darf gestrichen werden.\n**Ergebnis:** $\\frac{a}{b}$.',
          '**Aufgabe:** Warum ist $\\frac{a+2}{a+3}$ nicht zu $\\frac{2}{3}$ kürzbar?\n**Lösung:** $+2$ und $+3$ sind Summanden, keine Faktoren. Gekürzt wird nur über gemeinsame Faktoren.\n**Ergebnis:** $\\frac{a+2}{a+3}$ bleibt unverändert.',
        ],
      },
    ],
  },
  {
    id: 'potenzregeln',
    titel: 'Potenzregeln',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Potenz $a^n$ ist eine Kurzschreibweise für wiederholtes Multiplizieren: $a^n = a\\cdot a\\cdots a$ ($n$ Faktoren). Die Zahl $a$ heißt Basis, $n$ Exponent. Die Potenzregeln sagen, wie man mit solchen Ausdrücken rechnet.\n' +
      '\n' +
      '**Multiplizieren bei gleicher Basis**\n' +
      'Gleiche Basis, Exponenten addieren: $a^n \\cdot a^m = a^{n+m}$. Anschaulich hängt man die Faktoren einfach aneinander.\n' +
      '\n' +
      '**Dividieren bei gleicher Basis**\n' +
      'Gleiche Basis, Exponenten subtrahieren: $\\dfrac{a^n}{a^m} = a^{n-m}$ (für $a \\neq 0$).\n' +
      '\n' +
      '**Potenz einer Potenz**\n' +
      'Exponenten multiplizieren: $(a^n)^m = a^{n\\cdot m}$.\n' +
      '\n' +
      '**Produkt und Quotient hoch n**\n' +
      '$(a\\cdot b)^n = a^n \\cdot b^n$ und $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$.\n' +
      '\n' +
      '**Null und negative Exponenten**\n' +
      '$a^0 = 1$ (für $a \\neq 0$), und ein negativer Exponent bedeutet Kehrwert: $a^{-n} = \\dfrac{1}{a^n}$.\n' +
      '\n' +
      '**Merke**\n' +
      'Bei Multiplikation/Division gleicher Basen rechnet man mit den Exponenten (addieren/subtrahieren); beim Potenzieren multipliziert man sie. Verschiedene Basen kann man nicht so zusammenfassen.',
    beispiele: [
      {
        szenario: 'Multiplizieren & Dividieren',
        beispiele: [
          '**Aufgabe:** Vereinfache $2^3 \\cdot 2^4$.\n**Lösung:** Gleiche Basis, Exponenten addieren: $2^{3+4} = 2^7$.\n**Ergebnis:** $2^7 = 128$.',
          '**Aufgabe:** Vereinfache $\\frac{x^7}{x^2}$.\n**Lösung:** Gleiche Basis, Exponenten subtrahieren: $x^{7-2} = x^5$.\n**Ergebnis:** $x^5$.',
          '**Aufgabe:** Vereinfache $\\frac{5^6}{5^6}$.\n**Lösung:** $5^{6-6} = 5^0$, und jede Basis $\\neq 0$ hoch $0$ ist $1$.\n**Ergebnis:** $1$.',
        ],
      },
      {
        szenario: 'Potenz einer Potenz / Produkte',
        beispiele: [
          '**Aufgabe:** Vereinfache $(x^2)^3$.\n**Lösung:** Exponenten multiplizieren: $x^{2\\cdot 3} = x^6$.\n**Ergebnis:** $x^6$.',
          '**Aufgabe:** Vereinfache $(2x)^3$.\n**Lösung:** $(a\\cdot b)^n = a^n b^n$: $2^3 \\cdot x^3 = 8x^3$.\n**Ergebnis:** $8x^3$.',
          '**Aufgabe:** Vereinfache $\\left(\\frac{a}{2}\\right)^4$.\n**Lösung:** Zähler und Nenner einzeln potenzieren: $\\frac{a^4}{2^4} = \\frac{a^4}{16}$.\n**Ergebnis:** $\\frac{a^4}{16}$.',
        ],
      },
      {
        szenario: 'Negative & null Exponenten',
        beispiele: [
          '**Aufgabe:** Schreibe $3^{-2}$ ohne negativen Exponenten.\n**Lösung:** $a^{-n} = \\frac{1}{a^n}$, also $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.\n**Ergebnis:** $\\frac{1}{9}$.',
          '**Aufgabe:** Vereinfache $x^5 \\cdot x^{-3}$.\n**Lösung:** Exponenten addieren: $x^{5+(-3)} = x^2$.\n**Ergebnis:** $x^2$.',
          '**Aufgabe:** Vereinfache $\\frac{a^2}{a^5}$ mit positivem Exponenten.\n**Lösung:** $a^{2-5} = a^{-3} = \\frac{1}{a^3}$.\n**Ergebnis:** $\\frac{1}{a^3}$.',
        ],
      },
    ],
  },
  {
    id: 'wurzelregeln',
    titel: 'Wurzelregeln',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Quadratwurzel $\\sqrt{a}$ ist die nichtnegative Zahl, deren Quadrat $a$ ergibt ($a \\geq 0$). Allgemeiner ist die $n$-te Wurzel $\\sqrt[n]{a}$ die Zahl, die hoch $n$ wieder $a$ gibt. Wurzeln sind Potenzen mit gebrochenem Exponenten – daher gelten ähnliche Regeln.\n' +
      '\n' +
      '**Produkt und Quotient**\n' +
      '$\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{a\\cdot b}$ und $\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$ (mit $a,b \\geq 0$, $b \\neq 0$).\n' +
      '\n' +
      '**Wurzel und Quadrat**\n' +
      '$(\\sqrt{a})^2 = a$, aber $\\sqrt{a^2} = |a|$ (der Betrag, weil das Ergebnis nie negativ ist).\n' +
      '\n' +
      '**Wurzel als Potenz**\n' +
      '$a^{1/2} = \\sqrt{a}$ und allgemein $a^{1/n} = \\sqrt[n]{a}$. Damit lassen sich Wurzeln mit den Potenzregeln behandeln, z. B. $\\sqrt[n]{a^m} = a^{m/n}$.\n' +
      '\n' +
      '**Nenner rational machen**\n' +
      'Eine Wurzel im Nenner beseitigt man durch Erweitern:\n' +
      '$\\dfrac{1}{\\sqrt{a}} = \\dfrac{\\sqrt{a}}{a}$ (mit $\\sqrt{a}$ erweitern),\n' +
      '$\\dfrac{1}{\\sqrt{a}+\\sqrt{b}} = \\dfrac{\\sqrt{a}-\\sqrt{b}}{a-b}$ (mit dem konjugierten Ausdruck erweitern, 3. binomische Formel).\n' +
      '\n' +
      '**Teilweises Wurzelziehen**\n' +
      'Steckt in der Wurzel ein Quadratfaktor, zieht man ihn heraus: $\\sqrt{a^2\\cdot b} = a\\sqrt{b}$ (für $a \\geq 0$).',
    beispiele: [
      {
        szenario: 'Produkt- & Quotientenregel',
        beispiele: [
          '**Aufgabe:** Vereinfache $\\sqrt{2}\\cdot\\sqrt{8}$.\n**Lösung:** $\\sqrt{2}\\cdot\\sqrt{8} = \\sqrt{2\\cdot 8} = \\sqrt{16}$.\n**Ergebnis:** $4$.',
          '**Aufgabe:** Vereinfache $\\frac{\\sqrt{50}}{\\sqrt{2}}$.\n**Lösung:** $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25}$.\n**Ergebnis:** $5$.',
          '**Aufgabe:** Vereinfache $\\sqrt{12}$ durch teilweises Wurzelziehen.\n**Lösung:** $12 = 4\\cdot 3$, also $\\sqrt{12} = \\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$.\n**Ergebnis:** $2\\sqrt{3}$.',
        ],
      },
      {
        szenario: 'Wurzel & Quadrat / Potenzschreibweise',
        beispiele: [
          '**Aufgabe:** Berechne $(\\sqrt{7})^2$.\n**Lösung:** Quadrat hebt die Wurzel auf: $(\\sqrt{7})^2 = 7$.\n**Ergebnis:** $7$.',
          '**Aufgabe:** Vereinfache $\\sqrt{(-5)^2}$.\n**Lösung:** $\\sqrt{a^2} = |a|$, also $\\sqrt{(-5)^2} = |-5| = 5$.\n**Ergebnis:** $5$.',
          '**Aufgabe:** Schreibe $\\sqrt[3]{x^2}$ als Potenz.\n**Lösung:** $\\sqrt[n]{a^m} = a^{m/n}$, also $\\sqrt[3]{x^2} = x^{2/3}$.\n**Ergebnis:** $x^{2/3}$.',
        ],
      },
      {
        szenario: 'Nenner rational machen',
        beispiele: [
          '**Aufgabe:** Mache $\\frac{1}{\\sqrt{3}}$ rational.\n**Lösung:** Mit $\\sqrt{3}$ erweitern: $\\frac{1}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.\n**Ergebnis:** $\\frac{\\sqrt{3}}{3}$.',
          '**Aufgabe:** Mache $\\frac{2}{\\sqrt{5}}$ rational.\n**Lösung:** Mit $\\sqrt{5}$ erweitern: $\\frac{2\\sqrt{5}}{5}$.\n**Ergebnis:** $\\frac{2\\sqrt{5}}{5}$.',
          '**Aufgabe:** Mache $\\frac{1}{\\sqrt{5}-\\sqrt{2}}$ rational.\n**Lösung:** Mit dem Konjugierten $\\sqrt{5}+\\sqrt{2}$ erweitern. Nenner: $(\\sqrt{5})^2-(\\sqrt{2})^2 = 5-2 = 3$.\n**Ergebnis:** $\\frac{\\sqrt{5}+\\sqrt{2}}{3}$.',
        ],
      },
    ],
  },
  {
    id: 'binomische-formeln',
    titel: 'Binomische Formeln',
    inhalt:
      '**Worum geht es?**\n' +
      'Die binomischen Formeln sind drei feste Muster, mit denen man Klammern mit zwei Gliedern blitzschnell ausmultipliziert oder umgekehrt einen Term faktorisiert.\n' +
      '\n' +
      '**Die drei Formeln**\n' +
      '$(a+b)^2 = a^2 + 2ab + b^2$\n' +
      '$(a-b)^2 = a^2 - 2ab + b^2$\n' +
      '$(a+b)(a-b) = a^2 - b^2$\n' +
      'Dabei stehen $a$ und $b$ für beliebige Zahlen oder Terme.\n' +
      '\n' +
      '**Warum stimmt das?**\n' +
      'Multipliziert man $(a+b)^2 = (a+b)(a+b)$ Glied für Glied aus, erhält man $a\\cdot a + a\\cdot b + b\\cdot a + b\\cdot b = a^2 + 2ab + b^2$. Die beiden gemischten Glieder $ab$ ergeben zusammen $2ab$. Bei der dritten Formel heben sich $+ab$ und $-ab$ weg, übrig bleibt $a^2 - b^2$.\n' +
      '\n' +
      '**Rückwärts: Faktorisieren**\n' +
      'Erkennt man rechts eines der Muster, kann man es in die kompakte Klammerform zurückverwandeln. Besonders nützlich ist die dritte Formel beim Kürzen: $\\dfrac{a^2-b^2}{a-b} = \\dfrac{(a+b)(a-b)}{a-b} = a+b$.\n' +
      '\n' +
      '**Anwendung: Nenner rational machen**\n' +
      'Mit der dritten Formel verschwinden Wurzeln im Nenner, weil $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a-b$.',
    beispiele: [
      {
        szenario: 'Ausmultiplizieren mit (a ± b)²',
        beispiele: [
          '**Aufgabe:** Multipliziere $(x+3)^2$ aus.\n**Lösung:** 1. Formel mit $a=x$, $b=3$: $x^2 + 2\\cdot x\\cdot 3 + 3^2$.\n**Ergebnis:** $x^2 + 6x + 9$.',
          '**Aufgabe:** Multipliziere $(2x-5)^2$ aus.\n**Lösung:** 2. Formel mit $a=2x$, $b=5$: $(2x)^2 - 2\\cdot 2x\\cdot 5 + 5^2 = 4x^2 - 20x + 25$.\n**Ergebnis:** $4x^2 - 20x + 25$.',
          '**Aufgabe:** Berechne $51^2$ im Kopf.\n**Lösung:** $51 = 50+1$, also $(50+1)^2 = 50^2 + 2\\cdot 50\\cdot 1 + 1^2 = 2500 + 100 + 1$.\n**Ergebnis:** $2601$.',
        ],
      },
      {
        szenario: 'Dritte Formel & Faktorisieren',
        beispiele: [
          '**Aufgabe:** Multipliziere $(x+4)(x-4)$ aus.\n**Lösung:** 3. Formel mit $a=x$, $b=4$: $x^2 - 16$.\n**Ergebnis:** $x^2 - 16$.',
          '**Aufgabe:** Faktorisiere $9x^2 - 25$.\n**Lösung:** $9x^2 = (3x)^2$, $25 = 5^2$, also $a=3x$, $b=5$: $a^2-b^2 = (a+b)(a-b)$.\n**Ergebnis:** $(3x+5)(3x-5)$.',
          '**Aufgabe:** Kürze $\\frac{x^2-9}{x-3}$.\n**Lösung:** Zähler faktorisieren: $x^2-9 = (x+3)(x-3)$. Faktor $(x-3)$ kürzen.\n**Ergebnis:** $x+3$ (für $x \\neq 3$).',
        ],
      },
      {
        szenario: 'Nenner rational machen',
        beispiele: [
          '**Aufgabe:** Mache $\\frac{1}{\\sqrt{3}+1}$ rational.\n**Lösung:** Mit $\\sqrt{3}-1$ erweitern. Nenner: $(\\sqrt{3})^2 - 1^2 = 3-1 = 2$.\n**Ergebnis:** $\\frac{\\sqrt{3}-1}{2}$.',
          '**Aufgabe:** Mache $\\frac{2}{\\sqrt{5}-\\sqrt{3}}$ rational.\n**Lösung:** Mit $\\sqrt{5}+\\sqrt{3}$ erweitern. Nenner: $5-3 = 2$. Zähler: $2(\\sqrt{5}+\\sqrt{3})$.\n**Ergebnis:** $\\sqrt{5}+\\sqrt{3}$.',
          '**Aufgabe:** Berechne $103\\cdot 97$ mit der 3. Formel.\n**Lösung:** $(100+3)(100-3) = 100^2 - 3^2 = 10000 - 9$.\n**Ergebnis:** $9991$.',
        ],
      },
    ],
  },
  {
    id: 'ausklammern',
    titel: 'Ausklammern',
    inhalt:
      '**Worum geht es?**\n' +
      'Ausklammern heißt, einen gemeinsamen Faktor aus einer Summe herauszuziehen. Es ist die Umkehrung des Ausmultiplizierens und das wichtigste Werkzeug, um Terme zu vereinfachen oder kürzbar zu machen.\n' +
      '\n' +
      '**Faktor ausklammern**\n' +
      'Steht in jedem Summanden derselbe Faktor, zieht man ihn vor die Klammer:\n' +
      '$a\\cdot x + a\\cdot y = a\\cdot(x+y)$.\n' +
      'Probe: Multipliziert man die Klammer wieder aus, muss der Ausgangsterm herauskommen.\n' +
      '\n' +
      '**Vorzeichen ausklammern**\n' +
      'Manchmal ist der gemeinsame Faktor ein Minuszeichen. Dann drehen sich in der Klammer alle Vorzeichen um:\n' +
      '$-a + b = -(a-b)$,  $\\;a - b = -(b-a)$,  $\\;b - a = -(a-b)$.\n' +
      'Das ist nützlich, um zwei fast gleiche Klammern angleichbar zu machen.\n' +
      '\n' +
      '**Mehrgliedrige Faktoren**\n' +
      'Der gemeinsame Faktor kann auch eine ganze Klammer sein. Tritt z. B. $(a-b)$ mehrfach auf, klammert man $(a-b)$ aus.\n' +
      '\n' +
      '**Warum lohnt sich das?**\n' +
      'Ausgeklammerte Faktoren lassen sich oft gegen den Nenner kürzen oder zeigen die Nullstellen eines Terms (ein Produkt ist $0$, sobald ein Faktor $0$ ist).',
    beispiele: [
      {
        szenario: 'Einfacher gemeinsamer Faktor',
        beispiele: [
          '**Aufgabe:** Klammere aus: $6x + 9$.\n**Lösung:** Gemeinsamer Faktor $3$: $6x + 9 = 3\\cdot 2x + 3\\cdot 3 = 3(2x+3)$.\n**Ergebnis:** $3(2x+3)$.',
          '**Aufgabe:** Klammere aus: $x^2 + x$.\n**Lösung:** Gemeinsamer Faktor $x$: $x\\cdot x + x\\cdot 1 = x(x+1)$.\n**Ergebnis:** $x(x+1)$.',
          '**Aufgabe:** Klammere aus: $4a^2b - 6ab^2$.\n**Lösung:** Gemeinsamer Faktor $2ab$: $2ab\\cdot 2a - 2ab\\cdot 3b = 2ab(2a-3b)$.\n**Ergebnis:** $2ab(2a-3b)$.',
        ],
      },
      {
        szenario: 'Vorzeichen ausklammern',
        beispiele: [
          '**Aufgabe:** Schreibe $-x + 5$ mit ausgeklammertem Minus.\n**Lösung:** $-x+5 = -(x-5)$. Probe: $-(x-5) = -x+5$.\n**Ergebnis:** $-(x-5)$.',
          '**Aufgabe:** Zeige, dass $b-a = -(a-b)$.\n**Lösung:** Minus ausklammern: $b-a = -(-b+a) = -(a-b)$.\n**Ergebnis:** $-(a-b)$.',
          '**Aufgabe:** Vereinfache $\\frac{a-b}{b-a}$.\n**Lösung:** Nenner umformen: $b-a = -(a-b)$, also $\\frac{a-b}{-(a-b)} = -1$ (für $a \\neq b$).\n**Ergebnis:** $-1$.',
        ],
      },
      {
        szenario: 'Klammer als gemeinsamer Faktor',
        beispiele: [
          '**Aufgabe:** Klammere $(a-b)$ aus $b(a-b) + b - a$.\n**Lösung:** $b-a = -(a-b)$, also $b(a-b) - (a-b)$. Jetzt $(a-b)$ ausklammern: $(a-b)(b-1)$.\n**Ergebnis:** $(a-b)(b-1)$.',
          '**Aufgabe:** Klammere aus: $x(x+2) + 3(x+2)$.\n**Lösung:** Gemeinsamer Faktor $(x+2)$: $(x+2)(x+3)$.\n**Ergebnis:** $(x+2)(x+3)$.',
          '**Aufgabe:** Klammere aus: $2(t-1) - t(t-1)$.\n**Lösung:** Gemeinsamer Faktor $(t-1)$: $(t-1)(2-t)$.\n**Ergebnis:** $(t-1)(2-t)$.',
        ],
      },
    ],
  },
  {
    id: 'kuerzen',
    titel: 'Kürzen von Brüchen',
    inhalt:
      '**Worum geht es?**\n' +
      'Kürzen heißt, Zähler und Nenner durch denselben Faktor zu teilen. Der Bruchwert ändert sich dabei nicht. Entscheidend ist: Es muss ein gemeinsamer **Faktor** sein, kein Summand.\n' +
      '\n' +
      '**Die Grundregel**\n' +
      '$\\dfrac{k\\cdot a}{k\\cdot b} = \\dfrac{a}{b}$ für $k \\neq 0$. Der Faktor $k$ wird oben und unten gestrichen.\n' +
      '\n' +
      '**Erst faktorisieren, dann kürzen**\n' +
      'Oft sieht man den gemeinsamen Faktor erst, wenn man Zähler und Nenner als Produkt schreibt. Beispiel mit der 3. binomischen Formel:\n' +
      '$\\dfrac{a^2-b^2}{a-b} = \\dfrac{(a+b)(a-b)}{a-b} = a+b$.\n' +
      'Der Faktor $(a-b)$ steht oben und unten und kürzt sich weg.\n' +
      '\n' +
      '**Was NICHT erlaubt ist**\n' +
      'Über Summanden darf man nicht kürzen:\n' +
      '$\\dfrac{a^2+b^2}{a+b} \\neq a+b$ — eine Summe im Zähler ist nicht faktorisierbar.\n' +
      '$\\dfrac{2a+3b}{2c+3d}$ — die $2$ und $3$ sind keine gemeinsamen Faktoren des ganzen Zählers/Nenners.\n' +
      '\n' +
      '**Vorzeichen-Trick**\n' +
      '$\\dfrac{a-b}{b-a} = -1$, weil $b-a = -(a-b)$ (gilt nur für $a \\neq b$, sonst $\\frac{0}{0}$). Gegengleiche Terme oben und unten ergeben immer $-1$.',
    beispiele: [
      {
        szenario: 'Zahlen & Faktoren kürzen',
        beispiele: [
          '**Aufgabe:** Kürze $\\frac{15}{20}$.\n**Lösung:** Gemeinsamer Teiler $5$: $\\frac{3\\cdot 5}{4\\cdot 5} = \\frac{3}{4}$.\n**Ergebnis:** $\\frac{3}{4}$.',
          '**Aufgabe:** Kürze $\\frac{6ab}{9a}$.\n**Lösung:** Gemeinsamer Faktor $3a$: $\\frac{3a\\cdot 2b}{3a\\cdot 3} = \\frac{2b}{3}$.\n**Ergebnis:** $\\frac{2b}{3}$.',
          '**Aufgabe:** Kürze $\\frac{x(x+1)}{x}$.\n**Lösung:** Faktor $x$ oben und unten: $\\frac{x(x+1)}{x} = x+1$ (für $x \\neq 0$).\n**Ergebnis:** $x+1$.',
        ],
      },
      {
        szenario: 'Erst faktorisieren, dann kürzen',
        beispiele: [
          '**Aufgabe:** Kürze $\\frac{a^2-b^2}{a-b}$.\n**Lösung:** Zähler mit 3. Formel: $(a+b)(a-b)$. Faktor $(a-b)$ kürzen.\n**Ergebnis:** $a+b$ (für $a \\neq b$).',
          '**Aufgabe:** Kürze $\\frac{x^2+5x+6}{x+2}$.\n**Lösung:** Zähler faktorisieren: $x^2+5x+6 = (x+2)(x+3)$. Faktor $(x+2)$ kürzen.\n**Ergebnis:** $x+3$ (für $x \\neq -2$).',
          '**Aufgabe:** Kürze $\\frac{2x^2-2}{x-1}$.\n**Lösung:** Zähler: $2(x^2-1) = 2(x+1)(x-1)$. Faktor $(x-1)$ kürzen.\n**Ergebnis:** $2(x+1)$ (für $x \\neq 1$).',
        ],
      },
      {
        szenario: 'Vorzeichen & verbotenes Kürzen',
        beispiele: [
          '**Aufgabe:** Vereinfache $\\frac{a-b}{b-a}$.\n**Lösung:** $b-a = -(a-b)$, also $\\frac{a-b}{-(a-b)} = -1$ (für $a \\neq b$).\n**Ergebnis:** $-1$.',
          '**Aufgabe:** Darf man $\\frac{a^2+b^2}{a+b}$ zu $a+b$ kürzen?\n**Lösung:** Nein – der Zähler ist eine Summe und nicht faktorisierbar; es gibt keinen gemeinsamen Faktor.\n**Ergebnis:** Nicht kürzbar.',
          '**Aufgabe:** Vereinfache $\\frac{3-x}{x-3}$.\n**Lösung:** $3-x = -(x-3)$, also $\\frac{-(x-3)}{x-3} = -1$ (für $x \\neq 3$).\n**Ergebnis:** $-1$.',
        ],
      },
    ],
  },
  {
    id: 'rechenreihenfolge',
    titel: 'Rechenreihenfolge & Klammern',
    inhalt:
      '**Worum geht es?**\n' +
      'Wenn ein Term mehrere Operationen enthält, muss klar sein, was zuerst gerechnet wird. Die Rechenreihenfolge legt das fest, damit jeder zum selben Ergebnis kommt.\n' +
      '\n' +
      '**Die Reihenfolge**\n' +
      '1. Klammern zuerst auflösen.\n' +
      '2. Potenzen und Wurzeln.\n' +
      '3. Punktrechnung (Mal $\\cdot$ und Geteilt $:$).\n' +
      '4. Strichrechnung (Plus $+$ und Minus $-$).\n' +
      'Kurz: „Punkt vor Strich", und Klammern stechen alles.\n' +
      '\n' +
      '**Klammern auflösen**\n' +
      'Ein Faktor vor der Klammer wird mit jedem Glied einzeln multipliziert (Distributivgesetz):\n' +
      '$x(1+x) = x + x^2$,  $\\;-2(2x-4) = -4x + 8$.\n' +
      'Achte besonders auf das Vorzeichen vor der Klammer.\n' +
      '\n' +
      '**Vorzeichenregeln beim Multiplizieren**\n' +
      '$(-)\\cdot(-) = +$,  $\\;(-)\\cdot(+) = -$,  $\\;(+)\\cdot(+) = +$.\n' +
      'Ein Minus vor einer Klammer dreht beim Auflösen alle Vorzeichen um: $-(a-b) = -a+b$.\n' +
      '\n' +
      '**Merke**\n' +
      'Erst schauen, was in Klammern steht, dann Potenzen/Wurzeln, dann Punkt vor Strich. Bei einem Minus vor der Klammer kippen alle inneren Vorzeichen.',
    beispiele: [
      {
        szenario: 'Punkt vor Strich',
        beispiele: [
          '**Aufgabe:** Berechne $2 + 3\\cdot 4$.\n**Lösung:** Erst Punktrechnung: $3\\cdot 4 = 12$, dann $2 + 12$.\n**Ergebnis:** $14$.',
          '**Aufgabe:** Berechne $20 - 6 : 2$.\n**Lösung:** Erst Division: $6:2 = 3$, dann $20 - 3$.\n**Ergebnis:** $17$.',
          '**Aufgabe:** Berechne $2 + 3^2$.\n**Lösung:** Potenz vor Strich: $3^2 = 9$, dann $2 + 9$.\n**Ergebnis:** $11$.',
        ],
      },
      {
        szenario: 'Klammern auflösen',
        beispiele: [
          '**Aufgabe:** Löse auf: $x(1+x)$.\n**Lösung:** Faktor $x$ in jedes Glied: $x\\cdot 1 + x\\cdot x = x + x^2$.\n**Ergebnis:** $x + x^2$.',
          '**Aufgabe:** Löse auf: $-2(2x-4)$.\n**Lösung:** $-2\\cdot 2x = -4x$, $-2\\cdot(-4) = +8$.\n**Ergebnis:** $-4x + 8$.',
          '**Aufgabe:** Berechne $3\\cdot(2+5)$.\n**Lösung:** Erst Klammer: $2+5 = 7$, dann $3\\cdot 7$.\n**Ergebnis:** $21$.',
        ],
      },
      {
        szenario: 'Vorzeichen vor Klammern',
        beispiele: [
          '**Aufgabe:** Löse auf: $5 - (x-3)$.\n**Lösung:** Minus vor Klammer dreht Vorzeichen: $5 - x + 3 = 8 - x$.\n**Ergebnis:** $8 - x$.',
          '**Aufgabe:** Berechne $-(-4)\\cdot(-2)$.\n**Lösung:** $-(-4) = 4$, dann $4\\cdot(-2) = -8$.\n**Ergebnis:** $-8$.',
          '**Aufgabe:** Löse auf: $a - (b - c)$.\n**Lösung:** Minus vor Klammer: $a - b + c$.\n**Ergebnis:** $a - b + c$.',
        ],
      },
    ],
  },
  {
    id: 'geradengleichung',
    titel: 'Geradengleichung',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Gerade in der Ebene wird durch eine lineare Gleichung beschrieben. Mit ihr kann man Punkte einer Geraden berechnen, ihre Steigung bestimmen oder den Schnittpunkt zweier Geraden finden.\n' +
      '\n' +
      '**Die Normalform**\n' +
      '$y = m\\cdot x + b$ mit der Steigung $m$ und dem $y$-Achsenabschnitt $b$.\n' +
      '• $m$ sagt, um wie viel $y$ steigt, wenn $x$ um $1$ wächst. Positiv = steigend, negativ = fallend.\n' +
      '• $b$ ist der $y$-Wert an der Stelle $x=0$ (Schnittpunkt mit der $y$-Achse).\n' +
      '\n' +
      '**Steigung aus zwei Punkten**\n' +
      'Sind zwei Punkte $(x_1,y_1)$ und $(x_2,y_2)$ gegeben, ist die Steigung\n' +
      '$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ (Höhenunterschied geteilt durch Breitenunterschied).\n' +
      '\n' +
      '**Geradengleichung aufstellen**\n' +
      'Hat man $m$ und einen Punkt $(x_1,y_1)$, setzt man in $y = m x + b$ ein und löst nach $b$ auf: $b = y_1 - m x_1$.\n' +
      '\n' +
      '**Schnittpunkt zweier Geraden**\n' +
      'Setze beide Gleichungen gleich: $m_1 x + b_1 = m_2 x + b_2$, löse nach $x$ auf und setze $x$ in eine der Gleichungen ein, um $y$ zu erhalten.',
    beispiele: [
      {
        szenario: 'Steigung & Achsenabschnitt ablesen',
        beispiele: [
          '**Aufgabe:** Nenne Steigung und $y$-Achsenabschnitt von $y = 2x + 3$.\n**Lösung:** Vergleich mit $y = mx + b$: $m = 2$, $b = 3$.\n**Ergebnis:** Steigung $2$, Achsenabschnitt $3$.',
          '**Aufgabe:** Wo schneidet $y = -\\frac{1}{2}x + 4$ die $y$-Achse?\n**Lösung:** Der $y$-Achsenabschnitt ist $b = 4$ (Wert bei $x=0$).\n**Ergebnis:** Im Punkt $(0, 4)$.',
          '**Aufgabe:** Steigt oder fällt $y = -3x + 1$?\n**Lösung:** $m = -3 < 0$, die Gerade fällt.\n**Ergebnis:** Fallend.',
        ],
      },
      {
        szenario: 'Steigung & Gleichung aus Punkten',
        beispiele: [
          '**Aufgabe:** Steigung der Geraden durch $(1,2)$ und $(3,8)$.\n**Lösung:** $m = \\frac{8-2}{3-1} = \\frac{6}{2}$.\n**Ergebnis:** $m = 3$.',
          '**Aufgabe:** Gleichung der Geraden mit $m=2$ durch $(1,5)$.\n**Lösung:** $b = y_1 - m x_1 = 5 - 2\\cdot 1 = 3$.\n**Ergebnis:** $y = 2x + 3$.',
          '**Aufgabe:** Gleichung durch $(0,1)$ und $(2,5)$.\n**Lösung:** $m = \\frac{5-1}{2-0} = 2$, und $b = 1$ (Punkt auf der $y$-Achse).\n**Ergebnis:** $y = 2x + 1$.',
        ],
      },
      {
        szenario: 'Schnittpunkt zweier Geraden',
        beispiele: [
          '**Aufgabe:** Schnittpunkt von $y = 2x+1$ und $y = -x+4$.\n**Lösung:** Gleichsetzen: $2x+1 = -x+4 \\Rightarrow 3x = 3 \\Rightarrow x=1$. Einsetzen: $y = 2\\cdot 1+1 = 3$.\n**Ergebnis:** $(1, 3)$.',
          '**Aufgabe:** Schnittpunkt von $y = x$ und $y = -x+2$.\n**Lösung:** $x = -x+2 \\Rightarrow 2x = 2 \\Rightarrow x=1$, dann $y = 1$.\n**Ergebnis:** $(1, 1)$.',
          '**Aufgabe:** Schnittpunkt von $y = \\frac{1}{2}x+2$ und $y = 3x-3$.\n**Lösung:** $\\frac{1}{2}x+2 = 3x-3 \\Rightarrow 5 = \\frac{5}{2}x \\Rightarrow x=2$, dann $y = 3$.\n**Ergebnis:** $(2, 3)$.',
        ],
      },
    ],
  },

  // ===== Blatt 1 – Mengen =====
  {
    id: 'mengen-grundbegriffe',
    titel: 'Mengen – Grundbegriffe',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Menge ist eine Zusammenfassung von unterscheidbaren Objekten zu einem Ganzen. Die Objekte heißen Elemente. Mengen sind das Fundament fast der gesamten Mathematik.\n' +
      '\n' +
      '**Schreibweisen für Mengen**\n' +
      'Aufzählend: $A = \\{1, 2, 3\\}$ (Elemente direkt auflisten, Reihenfolge egal, keine Wiederholung).\n' +
      'Beschreibend: $A = \\{x : x \\text{ ist gerade}\\}$ (alle $x$ mit einer Eigenschaft).\n' +
      '\n' +
      '**Element-Zeichen**\n' +
      '$x \\in A$ bedeutet „$x$ ist Element von $A$", $x \\notin A$ heißt „$x$ ist kein Element von $A$".\n' +
      '\n' +
      '**Teilmenge und Gleichheit**\n' +
      '$A \\subseteq B$ heißt: jedes Element von $A$ liegt auch in $B$ ($A$ ist Teilmenge von $B$). Zwei Mengen sind gleich, $A = B$, genau dann, wenn $A \\subseteq B$ und $B \\subseteq A$ gelten (beide enthalten dieselben Elemente).\n' +
      '\n' +
      '**Mächtigkeit**\n' +
      '$|A|$ ist die Anzahl der Elemente von $A$ (bei endlichen Mengen). Z. B. $|\\{1,2,3\\}| = 3$.\n' +
      '\n' +
      '**Wichtige Zahlmengen**\n' +
      '$\\emptyset$ = leere Menge (kein Element), $\\mathbb{N} = \\{0,1,2,3,\\ldots\\}$ natürliche Zahlen, $\\mathbb{Z} = \\{\\ldots,-1,0,1,2,\\ldots\\}$ ganze Zahlen, $\\mathbb{Q}$ rationale Zahlen (Brüche), $\\mathbb{R}$ reelle Zahlen (ganze Zahlengerade).',
    beispiele: [
      {
        szenario: 'Element & Teilmenge prüfen',
        beispiele: [
          '**Aufgabe:** Gilt $3 \\in \\{1,2,3,4\\}$?\n**Lösung:** $3$ kommt in der Aufzählung vor.\n**Ergebnis:** Ja, $3 \\in \\{1,2,3,4\\}$.',
          '**Aufgabe:** Ist $\\{1,2\\} \\subseteq \\{1,2,3\\}$?\n**Lösung:** Beide Elemente $1$ und $2$ liegen auch in der rechten Menge.\n**Ergebnis:** Ja, $\\{1,2\\}$ ist Teilmenge.',
          '**Aufgabe:** Gilt $0 \\in \\mathbb{N}$ (mit $\\mathbb{N}$ ab $0$)?\n**Lösung:** In der hier verwendeten Konvention $\\mathbb{N} = \\{0,1,2,\\ldots\\}$ ist $0$ enthalten.\n**Ergebnis:** Ja.',
        ],
      },
      {
        szenario: 'Mächtigkeit bestimmen',
        beispiele: [
          '**Aufgabe:** Bestimme $|\\{a, b, c\\}|$.\n**Lösung:** Drei verschiedene Elemente.\n**Ergebnis:** $3$.',
          '**Aufgabe:** Bestimme $|\\{1, 1, 2\\}|$.\n**Lösung:** Doppelte Elemente zählen nur einmal: die Menge ist $\\{1,2\\}$.\n**Ergebnis:** $2$.',
          '**Aufgabe:** Bestimme $|\\emptyset|$.\n**Lösung:** Die leere Menge hat keine Elemente.\n**Ergebnis:** $0$.',
        ],
      },
      {
        szenario: 'Mengengleichheit',
        beispiele: [
          '**Aufgabe:** Sind $\\{1,2,3\\}$ und $\\{3,1,2\\}$ gleich?\n**Lösung:** Die Reihenfolge spielt keine Rolle; beide enthalten dieselben Elemente.\n**Ergebnis:** Ja, sie sind gleich.',
          '**Aufgabe:** Sind $\\{1,2\\}$ und $\\{1,2,3\\}$ gleich?\n**Lösung:** $3$ liegt nur in der zweiten Menge, also nicht $B \\subseteq A$.\n**Ergebnis:** Nein.',
          '**Aufgabe:** Zeige $A = B$ für $A = \\{x \\in \\mathbb{Z} : 0 < x < 4\\}$ und $B = \\{1,2,3\\}$.\n**Lösung:** Die ganzen Zahlen echt zwischen $0$ und $4$ sind genau $1, 2, 3$.\n**Ergebnis:** $A = B$.',
        ],
      },
    ],
  },
  {
    id: 'mengenoperationen',
    titel: 'Mengenoperationen',
    inhalt:
      '**Worum geht es?**\n' +
      'Aus gegebenen Mengen baut man neue: durch Vereinigen, Schneiden, Abziehen, Komplementbilden oder Paaren. Diese Operationen sind die Grundrechenarten der Mengenlehre.\n' +
      '\n' +
      '**Die Operationen**\n' +
      '$A \\cup B$ (Vereinigung): alle $x$, die in $A$ **oder** $B$ liegen.\n' +
      '$A \\cap B$ (Schnittmenge): alle $x$, die in $A$ **und** $B$ liegen.\n' +
      '$A \\setminus B$ (Differenz): alle $x$ aus $A$, die **nicht** in $B$ liegen.\n' +
      '$\\overline{A}$ (Komplement): alle $x$ der Grundmenge $X$, die nicht in $A$ liegen.\n' +
      '$A \\times B$ (kartesisches Produkt): alle geordneten Paare $(a,b)$ mit $a \\in A$, $b \\in B$.\n' +
      '\n' +
      '**Rechenregeln**\n' +
      'Kommutativität: $A \\cap B = B \\cap A$, $A \\cup B = B \\cup A$.\n' +
      'Distributivität:\n' +
      '$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$\n' +
      '$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$\n' +
      '\n' +
      '**Mächtigkeit von Vereinigung**\n' +
      '$|A \\cup B| = |A| + |B| - |A \\cap B|$ (das Doppelte des Schnitts wird einmal abgezogen). Beim kartesischen Produkt gilt $|A \\times B| = |A|\\cdot|B|$.',
    beispiele: [
      {
        szenario: 'Vereinigung, Schnitt, Differenz',
        beispiele: [
          '**Aufgabe:** $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$. Bestimme $A \\cup B$.\n**Lösung:** Alle Elemente aus beiden, jedes nur einmal.\n**Ergebnis:** $\\{1,2,3,4\\}$.',
          '**Aufgabe:** Dieselben Mengen. Bestimme $A \\cap B$.\n**Lösung:** Gemeinsame Elemente: $2$ und $3$.\n**Ergebnis:** $\\{2,3\\}$.',
          '**Aufgabe:** Dieselben Mengen. Bestimme $A \\setminus B$.\n**Lösung:** Elemente aus $A$, die nicht in $B$ sind: nur $1$.\n**Ergebnis:** $\\{1\\}$.',
        ],
      },
      {
        szenario: 'Komplement & kartesisches Produkt',
        beispiele: [
          '**Aufgabe:** Grundmenge $X = \\{1,2,3,4,5\\}$, $A = \\{1,3,5\\}$. Bestimme $\\overline{A}$.\n**Lösung:** Alle Elemente von $X$, die nicht in $A$ sind.\n**Ergebnis:** $\\{2,4\\}$.',
          '**Aufgabe:** $A = \\{1,2\\}$, $B = \\{x,y\\}$. Bestimme $A \\times B$.\n**Lösung:** Alle Paare $(a,b)$: $(1,x),(1,y),(2,x),(2,y)$.\n**Ergebnis:** $\\{(1,x),(1,y),(2,x),(2,y)\\}$.',
          '**Aufgabe:** Bestimme $|A \\times B|$ für $|A| = 3$, $|B| = 4$.\n**Lösung:** $|A \\times B| = |A|\\cdot|B| = 3\\cdot 4$.\n**Ergebnis:** $12$.',
        ],
      },
      {
        szenario: 'Mächtigkeit & Distributivität',
        beispiele: [
          '**Aufgabe:** $|A| = 5$, $|B| = 4$, $|A \\cap B| = 2$. Bestimme $|A \\cup B|$.\n**Lösung:** $|A\\cup B| = 5 + 4 - 2$.\n**Ergebnis:** $7$.',
          '**Aufgabe:** Prüfe $A \\cap (B \\cup C)$ für $A=\\{1,2\\}$, $B=\\{2\\}$, $C=\\{3\\}$.\n**Lösung:** $B \\cup C = \\{2,3\\}$, Schnitt mit $A$: $\\{2\\}$. Gegenprobe $(A\\cap B)\\cup(A\\cap C) = \\{2\\}\\cup\\emptyset = \\{2\\}$.\n**Ergebnis:** $\\{2\\}$ (Distributivgesetz bestätigt).',
          '**Aufgabe:** $A = \\{1,2,3\\}$, $B = \\{3,4\\}$. Stimmt $A \\cup B = B \\cup A$?\n**Lösung:** $A\\cup B = \\{1,2,3,4\\}$, $B\\cup A = \\{1,2,3,4\\}$.\n**Ergebnis:** Ja, Vereinigung ist kommutativ.',
        ],
      },
    ],
  },
  {
    id: 'de-morgan-potenzmenge',
    titel: 'De Morgan & Potenzmenge',
    inhalt:
      '**Worum geht es?**\n' +
      'Zwei wichtige Bausteine der Mengenlehre: die De-Morgan-Regeln (wie sich Komplemente mit $\\cup$ und $\\cap$ vertragen) und die Potenzmenge (die Menge aller Teilmengen).\n' +
      '\n' +
      '**De-Morgan-Gesetze**\n' +
      'Das Komplement einer Vereinigung ist der Schnitt der Komplemente, und umgekehrt:\n' +
      '$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$\n' +
      '$\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$\n' +
      'Merksatz: Beim Negieren kippt $\\cup$ zu $\\cap$ (und umgekehrt), und jeder Teil wird komplementiert.\n' +
      '\n' +
      '**Potenzmenge**\n' +
      'Die Potenzmenge $\\mathcal{P}(A)$ ist die Menge aller Teilmengen von $A$, also $\\mathcal{P}(A) = \\{M : M \\subseteq A\\}$. Sie enthält immer $\\emptyset$ und $A$ selbst.\n' +
      '\n' +
      '**Anzahl der Teilmengen**\n' +
      'Eine Menge mit $n$ Elementen hat genau $2^n$ Teilmengen, also $|\\mathcal{P}(A)| = 2^{|A|}$. Grund: Für jedes Element entscheidet man unabhängig „drin oder nicht drin" – das sind $2$ Möglichkeiten pro Element.\n' +
      '\n' +
      '**Beispiel**\n' +
      'Für $A = \\{1,2\\}$ ist $\\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$, also $2^2 = 4$ Teilmengen.',
    beispiele: [
      {
        szenario: 'De-Morgan anwenden',
        beispiele: [
          '**Aufgabe:** Negiere die Bedingung „$x \\in A \\cup B$".\n**Lösung:** $\\overline{A\\cup B} = \\overline{A}\\cap\\overline{B}$: $x \\notin A$ und $x \\notin B$.\n**Ergebnis:** $x \\in \\overline{A}\\cap\\overline{B}$.',
          '**Aufgabe:** $X=\\{1,\\ldots,5\\}$, $A=\\{1,2\\}$, $B=\\{2,3\\}$. Bestimme $\\overline{A\\cap B}$.\n**Lösung:** $A\\cap B = \\{2\\}$, Komplement bzgl. $X$: alles außer $2$.\n**Ergebnis:** $\\{1,3,4,5\\}$.',
          '**Aufgabe:** Prüfe $\\overline{A\\cup B} = \\overline{A}\\cap\\overline{B}$ für $X=\\{1,2,3,4\\}$, $A=\\{1\\}$, $B=\\{2\\}$.\n**Lösung:** Links: $\\overline{\\{1,2\\}} = \\{3,4\\}$. Rechts: $\\{2,3,4\\}\\cap\\{1,3,4\\} = \\{3,4\\}$.\n**Ergebnis:** Beide $\\{3,4\\}$ – Gesetz bestätigt.',
        ],
      },
      {
        szenario: 'Potenzmenge aufstellen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\mathcal{P}(\\{a\\})$.\n**Lösung:** Teilmengen: die leere Menge und $\\{a\\}$.\n**Ergebnis:** $\\{\\emptyset, \\{a\\}\\}$.',
          '**Aufgabe:** Bestimme $\\mathcal{P}(\\{1,2\\})$.\n**Lösung:** Alle Teilmengen: $\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}$.\n**Ergebnis:** $\\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$.',
          '**Aufgabe:** Bestimme $\\mathcal{P}(\\emptyset)$.\n**Lösung:** Die einzige Teilmenge der leeren Menge ist sie selbst.\n**Ergebnis:** $\\{\\emptyset\\}$ (eine Menge mit einem Element!).',
        ],
      },
      {
        szenario: 'Anzahl der Teilmengen',
        beispiele: [
          '**Aufgabe:** Wie viele Teilmengen hat $\\{1,2,3\\}$?\n**Lösung:** $2^{|A|} = 2^3$.\n**Ergebnis:** $8$.',
          '**Aufgabe:** Eine Menge hat $32$ Teilmengen. Wie viele Elemente?\n**Lösung:** $2^n = 32 = 2^5$, also $n = 5$.\n**Ergebnis:** $5$ Elemente.',
          '**Aufgabe:** Wie viele Teilmengen hat die leere Menge?\n**Lösung:** $2^0 = 1$ (nur $\\emptyset$ selbst).\n**Ergebnis:** $1$.',
        ],
      },
    ],
  },
  {
    id: 'mengendarstellung',
    titel: 'Mengendarstellung & Intervalle',
    inhalt:
      '**Worum geht es?**\n' +
      'Mengen kann man auf verschiedene Arten hinschreiben. Besonders bei Zahlenmengen sind die beschreibende Schreibweise und die Intervallnotation wichtig.\n' +
      '\n' +
      '**Beschreibende Schreibweise**\n' +
      '$\\{x : E(x)\\}$ liest man „die Menge aller $x$ mit der Eigenschaft $E(x)$". Beispiele:\n' +
      '$\\{2n : n \\in \\mathbb{N}\\}$ = alle geraden Zahlen $0, 2, 4, 6, \\ldots$\n' +
      '$\\{2n+1 : n \\in \\mathbb{N}\\}$ = alle ungeraden Zahlen $1, 3, 5, \\ldots$\n' +
      '$\\{kn : n \\in \\mathbb{N}\\}$ = die Vielfachen von $k$.\n' +
      '\n' +
      '**Intervalle reeller Zahlen**\n' +
      'Ein Intervall fasst alle reellen Zahlen zwischen zwei Grenzen zusammen. Eckige Klammer = Rand gehört dazu, runde Klammer = Rand gehört nicht dazu:\n' +
      '$[a,b] = \\{x : a \\leq x \\leq b\\}$ (abgeschlossen, beide Ränder dabei)\n' +
      '$(a,b) = \\{x : a < x < b\\}$ (offen, kein Rand)\n' +
      '$[a,b) = \\{x : a \\leq x < b\\}$ und $(a,b] = \\{x : a < x \\leq b\\}$ (halboffen)\n' +
      '\n' +
      '**Unendliche Grenzen**\n' +
      '$[a,\\infty) = \\{x : x \\geq a\\}$ und $(-\\infty, b] = \\{x : x \\leq b\\}$. An $\\pm\\infty$ steht immer eine runde Klammer, denn $\\infty$ ist keine Zahl.\n' +
      '\n' +
      '**Merke**\n' +
      'Beschreibende Form für „nach Bauplan" erzeugte Mengen; Intervalle für zusammenhängende Bereiche der Zahlengeraden.',
    beispiele: [
      {
        szenario: 'Beschreibende Schreibweise lesen',
        beispiele: [
          '**Aufgabe:** Welche Zahlen sind $\\{2n : n \\in \\mathbb{N}\\}$?\n**Lösung:** $n = 0,1,2,3,\\ldots$ einsetzen: $0, 2, 4, 6, \\ldots$\n**Ergebnis:** Alle geraden natürlichen Zahlen.',
          '**Aufgabe:** Welche Zahlen sind $\\{3n : n \\in \\mathbb{N}, n \\geq 1\\}$?\n**Lösung:** $n = 1,2,3,\\ldots$: $3, 6, 9, \\ldots$\n**Ergebnis:** Die positiven Vielfachen von $3$.',
          '**Aufgabe:** Schreibe „alle ungeraden Zahlen" beschreibend.\n**Lösung:** Ungerade = gerade plus $1$.\n**Ergebnis:** $\\{2n+1 : n \\in \\mathbb{N}\\}$.',
        ],
      },
      {
        szenario: 'Intervall ↔ Bedingung',
        beispiele: [
          '**Aufgabe:** Schreibe $\\{x : -1 \\leq x \\leq 3\\}$ als Intervall.\n**Lösung:** Beide Ränder eingeschlossen → eckige Klammern.\n**Ergebnis:** $[-1, 3]$.',
          '**Aufgabe:** Schreibe $(0, 5]$ als Bedingung.\n**Lösung:** Runde Klammer links (offen), eckige rechts (geschlossen).\n**Ergebnis:** $\\{x : 0 < x \\leq 5\\}$.',
          '**Aufgabe:** Schreibe „alle $x$ mit $x > 2$" als Intervall.\n**Lösung:** Untere Grenze $2$ offen, nach oben unbeschränkt.\n**Ergebnis:** $(2, \\infty)$.',
        ],
      },
      {
        szenario: 'Rand: dabei oder nicht?',
        beispiele: [
          '**Aufgabe:** Liegt $3$ in $[1,3)$?\n**Lösung:** Rechte Grenze ist offen (runde Klammer), $3$ gehört nicht dazu.\n**Ergebnis:** Nein.',
          '**Aufgabe:** Liegt $0$ in $[0, 4]$?\n**Lösung:** Linke Grenze geschlossen, $0$ gehört dazu.\n**Ergebnis:** Ja.',
          '**Aufgabe:** Bestimme $[1,4] \\cap (2,5)$.\n**Lösung:** Gemeinsamer Bereich: ab $2$ (offen, aus dem zweiten) bis $4$ (geschlossen, aus dem ersten).\n**Ergebnis:** $(2, 4]$.',
        ],
      },
    ],
  },

  // ===== Blatt 2 – Logik =====
  {
    id: 'logik-operatoren',
    titel: 'Logik – Operatoren & Wahrheitstafeln',
    inhalt:
      '**Worum geht es?**\n' +
      'In der Aussagenlogik untersucht man Aussagen, die entweder wahr (w) oder falsch (f) sind, und verknüpft sie mit logischen Operatoren. Eine Wahrheitstafel listet alle Kombinationen auf.\n' +
      '\n' +
      '**Die Operatoren**\n' +
      '$\\neg A$ (Negation): wahr genau dann, wenn $A$ falsch ist.\n' +
      '$A \\wedge B$ (Und): wahr genau dann, wenn beide wahr sind.\n' +
      '$A \\vee B$ (Oder): wahr, wenn mindestens eines wahr ist (einschließendes Oder).\n' +
      '$A \\Rightarrow B$ (Implikation): falsch nur im Fall $A$ wahr und $B$ falsch, sonst wahr.\n' +
      '$A \\Leftrightarrow B$ (Äquivalenz): wahr genau dann, wenn beide denselben Wahrheitswert haben.\n' +
      '\n' +
      '**Implikation umformen**\n' +
      'Eine Implikation lässt sich umschreiben: $A \\Rightarrow B \\equiv \\neg A \\vee B$. Außerdem ist sie zur Kontraposition äquivalent: $A \\Rightarrow B \\equiv \\neg B \\Rightarrow \\neg A$.\n' +
      '\n' +
      '**Nicht äquivalent**\n' +
      'Die Umkehrung $B \\Rightarrow A$ und die Inverse $\\neg A \\Rightarrow \\neg B$ sind **nicht** dasselbe wie $A \\Rightarrow B$.\n' +
      '\n' +
      '**Hinreichend & notwendig**\n' +
      'Gilt $A \\Rightarrow B$, so ist $A$ hinreichend für $B$ (A genügt) und $B$ notwendig für $A$ (ohne B kein A).',
    beispiele: [
      {
        szenario: 'Wahrheitswert bestimmen',
        beispiele: [
          '**Aufgabe:** $A$ wahr, $B$ falsch. Wert von $A \\wedge B$?\n**Lösung:** „Und" braucht beide wahr; $B$ ist falsch.\n**Ergebnis:** falsch.',
          '**Aufgabe:** $A$ wahr, $B$ falsch. Wert von $A \\Rightarrow B$?\n**Lösung:** Implikation ist genau im Fall w$\\Rightarrow$f falsch.\n**Ergebnis:** falsch.',
          '**Aufgabe:** $A$ falsch, $B$ falsch. Wert von $A \\Rightarrow B$?\n**Lösung:** Aus Falschem folgt alles; nur w$\\Rightarrow$f ist falsch.\n**Ergebnis:** wahr.',
        ],
      },
      {
        szenario: 'Implikation & Kontraposition',
        beispiele: [
          '**Aufgabe:** Schreibe $A \\Rightarrow B$ mit $\\vee$ und $\\neg$.\n**Lösung:** Standardumformung $A \\Rightarrow B \\equiv \\neg A \\vee B$.\n**Ergebnis:** $\\neg A \\vee B$.',
          '**Aufgabe:** Kontraposition von „Wenn es regnet, ist die Straße nass".\n**Lösung:** $A \\Rightarrow B$ wird zu $\\neg B \\Rightarrow \\neg A$.\n**Ergebnis:** „Wenn die Straße nicht nass ist, regnet es nicht."',
          '**Aufgabe:** Ist die Umkehrung „Wenn die Straße nass ist, regnet es" äquivalent zur Aussage?\n**Lösung:** Die Umkehrung $B \\Rightarrow A$ ist nicht äquivalent zu $A \\Rightarrow B$ (die Straße könnte anders nass sein).\n**Ergebnis:** Nein.',
        ],
      },
      {
        szenario: 'Hinreichend vs. notwendig',
        beispiele: [
          '**Aufgabe:** Aus „$x$ durch $4$ teilbar $\\Rightarrow$ $x$ durch $2$ teilbar": Was ist hinreichend, was notwendig?\n**Lösung:** Die Voraussetzung (durch $4$) ist hinreichend, die Folgerung (durch $2$) ist notwendig.\n**Ergebnis:** Durch $4$ teilbar ist hinreichend für „durch $2$ teilbar".',
          '**Aufgabe:** Ist „$x > 0$" notwendig für „$x > 5$"?\n**Lösung:** $x > 5 \\Rightarrow x > 0$, also ist $x>0$ notwendig (ohne kann $x>5$ nicht gelten).\n**Ergebnis:** Ja, notwendig.',
          '**Aufgabe:** Ist „$x > 0$" hinreichend für „$x > 5$"?\n**Lösung:** $x = 3$ ist $>0$, aber nicht $>5$. Die Implikation gilt nicht.\n**Ergebnis:** Nein, nicht hinreichend.',
        ],
      },
    ],
  },
  {
    id: 'logik-beweise',
    titel: 'Logik – Negation, Quantoren & Beweise',
    inhalt:
      '**Worum geht es?**\n' +
      'Hier geht es um das Verneinen zusammengesetzter Aussagen, um Quantoren (für alle / es gibt) und um die wichtigsten Beweismethoden.\n' +
      '\n' +
      '**De Morgan (logisch)**\n' +
      '$\\neg(A \\wedge B) = \\neg A \\vee \\neg B$\n' +
      '$\\neg(A \\vee B) = \\neg A \\wedge \\neg B$\n' +
      'Beim Verneinen kippt „und" zu „oder" (und umgekehrt), jeder Teil wird verneint.\n' +
      '\n' +
      '**Negation der Implikation**\n' +
      '$\\neg(A \\Rightarrow B) = A \\wedge \\neg B$. Eine Implikation ist genau dann falsch, wenn die Voraussetzung gilt, die Folgerung aber nicht.\n' +
      '\n' +
      '**Quantoren**\n' +
      '$\\forall x : P(x)$ heißt „für alle $x$ gilt $P(x)$", $\\exists x : P(x)$ heißt „es gibt ein $x$ mit $P(x)$".\n' +
      'Negation: $\\neg(\\forall x : P(x)) = \\exists x : \\neg P(x)$ und $\\neg(\\exists x : P(x)) = \\forall x : \\neg P(x)$.\n' +
      'Reihenfolge zählt: $\\forall x\\,\\exists y$ ist im Allgemeinen nicht dasselbe wie $\\exists y\\,\\forall x$.\n' +
      '\n' +
      '**Beweismethoden**\n' +
      'Direkter Beweis: aus der Voraussetzung Schritt für Schritt die Behauptung folgern.\n' +
      'Widerspruchsbeweis: das Gegenteil annehmen und einen Widerspruch herleiten.\n' +
      'Gegenbeispiel: eine $\\forall$-Aussage widerlegt man durch ein einziges Beispiel, das sie verletzt.',
    beispiele: [
      {
        szenario: 'Aussagen negieren',
        beispiele: [
          '**Aufgabe:** Negiere $A \\wedge B$.\n**Lösung:** De Morgan: $\\neg(A\\wedge B) = \\neg A \\vee \\neg B$.\n**Ergebnis:** $\\neg A \\vee \\neg B$.',
          '**Aufgabe:** Negiere „Es regnet und es ist kalt".\n**Lösung:** „und" wird zu „oder", jeder Teil verneint.\n**Ergebnis:** „Es regnet nicht oder es ist nicht kalt."',
          '**Aufgabe:** Negiere $A \\Rightarrow B$.\n**Lösung:** $\\neg(A \\Rightarrow B) = A \\wedge \\neg B$.\n**Ergebnis:** $A \\wedge \\neg B$.',
        ],
      },
      {
        szenario: 'Quantoren negieren',
        beispiele: [
          '**Aufgabe:** Negiere $\\forall x : x^2 \\geq 0$.\n**Lösung:** $\\forall$ wird zu $\\exists$, Bedingung verneinen.\n**Ergebnis:** $\\exists x : x^2 < 0$ (eine falsche Aussage, denn die Originalaussage ist wahr).',
          '**Aufgabe:** Negiere „Es gibt eine größte natürliche Zahl".\n**Lösung:** $\\neg(\\exists \\ldots) = \\forall : \\neg(\\ldots)$.\n**Ergebnis:** „Für jede natürliche Zahl gibt es eine größere" (keine ist die größte).',
          '**Aufgabe:** Negiere $\\forall x\\,\\exists y : y > x$.\n**Lösung:** $\\exists x\\,\\forall y : \\neg(y > x)$, also $\\exists x\\,\\forall y : y \\leq x$.\n**Ergebnis:** $\\exists x\\,\\forall y : y \\leq x$.',
        ],
      },
      {
        szenario: 'Beweismethoden anwenden',
        beispiele: [
          '**Aufgabe:** Widerlege „Alle Primzahlen sind ungerade" durch Gegenbeispiel.\n**Lösung:** $2$ ist prim und gerade.\n**Ergebnis:** Gegenbeispiel $2$ widerlegt die Aussage.',
          '**Aufgabe:** Zeige direkt: Ist $n$ gerade, so ist $n^2$ gerade.\n**Lösung:** $n = 2k$, also $n^2 = 4k^2 = 2(2k^2)$ – durch $2$ teilbar.\n**Ergebnis:** $n^2$ ist gerade.',
          '**Aufgabe:** Idee des Widerspruchsbeweises für „$\\sqrt{2}$ ist irrational".\n**Lösung:** Annahme $\\sqrt{2} = \\frac{p}{q}$ vollständig gekürzt; Quadrieren führt darauf, dass $p$ und $q$ beide gerade sind – Widerspruch zur Kürzung.\n**Ergebnis:** $\\sqrt{2}$ ist irrational.',
        ],
      },
    ],
  },

  // ===== Blatt 3 – Summen, Binomialkoeffizienten =====
  {
    id: 'summen-produktzeichen',
    titel: 'Summen- & Produktzeichen',
    inhalt:
      '**Worum geht es?**\n' +
      'Das Summenzeichen $\\sum$ und das Produktzeichen $\\prod$ sind Kurzschreibweisen für lange Summen bzw. Produkte mit regelmäßigem Bauplan.\n' +
      '\n' +
      '**Summenzeichen**\n' +
      '$\\sum_{k=a}^{b} f(k) = f(a) + f(a+1) + \\cdots + f(b)$. Dabei ist $k$ der Laufindex, $a$ die untere und $b$ die obere Grenze. Für jeden Wert von $k$ wird $f(k)$ gebildet und alles addiert.\n' +
      '\n' +
      '**Produktzeichen**\n' +
      '$\\prod_{k=a}^{b} f(k) = f(a) \\cdot f(a+1) \\cdots f(b)$ – genau wie die Summe, nur multipliziert.\n' +
      '\n' +
      '**Rechenregeln**\n' +
      'Konstante herausziehen: $\\sum c\\cdot f(k) = c \\cdot \\sum f(k)$.\n' +
      'Summe aufteilen: $\\sum (f(k)+g(k)) = \\sum f(k) + \\sum g(k)$.\n' +
      'Achtung: $\\left(\\sum f(k)\\right)^2 \\neq \\sum f(k)^2$ (beim Quadrieren entstehen gemischte Terme).\n' +
      '\n' +
      '**Indexverschiebung**\n' +
      'Man darf den Laufindex umbenennen/verschieben, solange dieselben Werte summiert werden, z. B. $\\sum_{k=1}^{n} k^2 = \\sum_{l=3}^{n+2} (l-2)^2$ (Substitution $l = k+2$).\n' +
      '\n' +
      '**Wichtige Summenformeln**\n' +
      '$\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}$ (Gauß),  $\\;\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}$,  $\\;\\sum_{k=0}^{n} q^k = \\dfrac{1-q^{n+1}}{1-q}$ (für $q \\neq 1$).',
    beispiele: [
      {
        szenario: 'Summe ausschreiben & berechnen',
        beispiele: [
          '**Aufgabe:** Berechne $\\sum_{k=1}^{4} k$.\n**Lösung:** $1 + 2 + 3 + 4$.\n**Ergebnis:** $10$.',
          '**Aufgabe:** Berechne $\\sum_{k=1}^{3} k^2$.\n**Lösung:** $1^2 + 2^2 + 3^2 = 1 + 4 + 9$.\n**Ergebnis:** $14$.',
          '**Aufgabe:** Berechne $\\prod_{k=1}^{4} k$.\n**Lösung:** $1\\cdot 2\\cdot 3\\cdot 4$ (das ist $4!$).\n**Ergebnis:** $24$.',
        ],
      },
      {
        szenario: 'Mit Summenformeln',
        beispiele: [
          '**Aufgabe:** Berechne $\\sum_{k=1}^{100} k$ mit der Gauß-Formel.\n**Lösung:** $\\frac{n(n+1)}{2} = \\frac{100\\cdot 101}{2} = \\frac{10100}{2}$.\n**Ergebnis:** $5050$.',
          '**Aufgabe:** Berechne $\\sum_{k=1}^{5} k^2$ per Formel.\n**Lösung:** $\\frac{n(n+1)(2n+1)}{6} = \\frac{5\\cdot 6\\cdot 11}{6} = \\frac{330}{6}$.\n**Ergebnis:** $55$.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{3} 2^k$ (geometrisch).\n**Lösung:** $\\frac{1-2^{4}}{1-2} = \\frac{1-16}{-1} = 15$. Probe: $1+2+4+8 = 15$.\n**Ergebnis:** $15$.',
        ],
      },
      {
        szenario: 'Rechenregeln & Indexverschiebung',
        beispiele: [
          '**Aufgabe:** Vereinfache $\\sum_{k=1}^{n} 3k$.\n**Lösung:** Konstante herausziehen: $3\\sum_{k=1}^{n} k = 3\\cdot\\frac{n(n+1)}{2}$.\n**Ergebnis:** $\\frac{3n(n+1)}{2}$.',
          '**Aufgabe:** Schreibe $\\sum_{k=1}^{n} (k+5)$ als Summe zweier Summen.\n**Lösung:** Aufteilen: $\\sum k + \\sum 5 = \\frac{n(n+1)}{2} + 5n$.\n**Ergebnis:** $\\frac{n(n+1)}{2} + 5n$.',
          '**Aufgabe:** Verschiebe $\\sum_{k=2}^{5} k$ auf Startindex $0$.\n**Lösung:** Substituiere $l = k-2$ (also $k = l+2$), Grenzen $0$ bis $3$.\n**Ergebnis:** $\\sum_{l=0}^{3} (l+2)$.',
        ],
      },
    ],
  },
  {
    id: 'binomialkoeffizienten',
    titel: 'Binomialkoeffizienten & Binomischer Lehrsatz',
    inhalt:
      '**Worum geht es?**\n' +
      'Der Binomialkoeffizient $\\binom{n}{k}$ („n über k") gibt an, auf wie viele Arten man $k$ Dinge aus $n$ auswählen kann (ohne Reihenfolge). Er steckt auch hinter dem Ausmultiplizieren von $(x+y)^n$.\n' +
      '\n' +
      '**Definition über Fakultäten**\n' +
      '$\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$, wobei $n! = 1\\cdot 2\\cdots n$ (und $0! = 1$).\n' +
      '\n' +
      '**Eigenschaften**\n' +
      '$\\binom{n}{0} = \\binom{n}{n} = 1$,  $\\;\\binom{n}{1} = n$,\n' +
      '$\\binom{n}{k} = \\binom{n}{n-k}$ (Symmetrie),\n' +
      '$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$ (Pascalsche Regel – das Bildungsgesetz des Pascalschen Dreiecks).\n' +
      '\n' +
      '**Binomischer Lehrsatz**\n' +
      '$(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$. Die Koeffizienten sind genau die Binomialkoeffizienten.\n' +
      '\n' +
      '**Nützliche Spezialfälle**\n' +
      'Setzt man $x = y = 1$: $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$ (Summe aller Zeilenelemente im Pascalschen Dreieck).\n' +
      'Setzt man $x = 1$, $y = -1$: $\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0$ (für $n \\geq 1$).',
    beispiele: [
      {
        szenario: 'Binomialkoeffizient berechnen',
        beispiele: [
          '**Aufgabe:** Berechne $\\binom{5}{2}$.\n**Lösung:** $\\frac{5!}{2!\\,3!} = \\frac{120}{2\\cdot 6} = \\frac{120}{12}$.\n**Ergebnis:** $10$.',
          '**Aufgabe:** Berechne $\\binom{6}{0}$.\n**Lösung:** $\\binom{n}{0} = 1$ für jedes $n$.\n**Ergebnis:** $1$.',
          '**Aufgabe:** Berechne $\\binom{7}{5}$ mit Symmetrie.\n**Lösung:** $\\binom{7}{5} = \\binom{7}{2} = \\frac{7\\cdot 6}{2} = 21$.\n**Ergebnis:** $21$.',
        ],
      },
      {
        szenario: 'Binomischer Lehrsatz',
        beispiele: [
          '**Aufgabe:** Entwickle $(x+y)^3$.\n**Lösung:** Koeffizienten $\\binom{3}{0},\\binom{3}{1},\\binom{3}{2},\\binom{3}{3} = 1,3,3,1$: $x^3 + 3x^2y + 3xy^2 + y^3$.\n**Ergebnis:** $x^3 + 3x^2y + 3xy^2 + y^3$.',
          '**Aufgabe:** Entwickle $(a+2)^2$ mit dem Lehrsatz.\n**Lösung:** $\\binom{2}{0}a^2 + \\binom{2}{1}a\\cdot 2 + \\binom{2}{2}2^2 = a^2 + 4a + 4$.\n**Ergebnis:** $a^2 + 4a + 4$.',
          '**Aufgabe:** Welcher Koeffizient steht vor $x^2$ in $(x+1)^5$?\n**Lösung:** Term $\\binom{5}{3}x^{2}\\cdot 1^{3}$, denn $n-k=2 \\Rightarrow k=3$; $\\binom{5}{3} = 10$.\n**Ergebnis:** $10$.',
        ],
      },
      {
        szenario: 'Spezialfälle & Pascal',
        beispiele: [
          '**Aufgabe:** Berechne $\\sum_{k=0}^{4} \\binom{4}{k}$.\n**Lösung:** $= 2^4$ (Spezialfall $x=y=1$). Probe: $1+4+6+4+1 = 16$.\n**Ergebnis:** $16$.',
          '**Aufgabe:** Prüfe die Pascal-Regel: $\\binom{4}{1} + \\binom{4}{2} = \\binom{5}{2}$.\n**Lösung:** $4 + 6 = 10$ und $\\binom{5}{2} = 10$.\n**Ergebnis:** Stimmt, $10 = 10$.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{3} (-1)^k \\binom{3}{k}$.\n**Lösung:** $1 - 3 + 3 - 1$.\n**Ergebnis:** $0$.',
        ],
      },
    ],
  },
  {
    id: 'vollstaendige-induktion',
    titel: 'Vollständige Induktion',
    inhalt:
      '**Worum geht es?**\n' +
      'Die vollständige Induktion ist eine Beweismethode für Aussagen $A(n)$, die für alle natürlichen Zahlen ab einem Startwert $n_0$ gelten sollen. Die Idee: Wenn der erste Fall stimmt und jeder Fall den nächsten nach sich zieht, gilt die Aussage für alle.\n' +
      '\n' +
      '**Das Schema (zwei Schritte)**\n' +
      '**Induktionsanfang (IA):** Zeige, dass $A(n_0)$ direkt stimmt (meist einsetzen und nachrechnen).\n' +
      '**Induktionsschritt (IS), $n \\to n+1$:** Nimm an, $A(n)$ gelte (das ist die Induktionsvoraussetzung, IV). Zeige damit, dass dann auch $A(n+1)$ gilt.\n' +
      '\n' +
      '**Wie der Schritt funktioniert**\n' +
      'Man startet beim Ausdruck für $n+1$, spaltet den „neuen" Teil ab, setzt die Induktionsvoraussetzung für den Rest ein und formt um, bis die Behauptung für $n+1$ dasteht.\n' +
      '\n' +
      '**Typische Muster**\n' +
      'Summenformel: $S_{n+1} = S_n + (\\text{neuer Summand})$, dann IV für $S_n$ einsetzen.\n' +
      'Ungleichung: den $(n+1)$-Term mit Hilfe der IV nach unten/oben abschätzen.\n' +
      'Teilbarkeit: $a^{n+1} - c$ geschickt so umschreiben, dass der durch die IV teilbare Teil sichtbar wird.\n' +
      '\n' +
      '**Warum stimmt das?**\n' +
      'IA liefert den ersten Dominostein, IS sorgt dafür, dass jeder Stein den nächsten umwirft – damit fallen alle.',
    beispiele: [
      {
        szenario: 'Summenformel beweisen',
        beispiele: [
          '**Aufgabe:** Beweise $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$, IA für $n=1$.\n**Lösung:** Links $\\sum_{k=1}^{1} k = 1$. Rechts $\\frac{1\\cdot 2}{2} = 1$.\n**Ergebnis:** IA gilt ($1 = 1$).',
          '**Aufgabe:** Induktionsschritt derselben Formel.\n**Lösung:** $\\sum_{k=1}^{n+1} k = \\underbrace{\\sum_{k=1}^{n} k}_{\\text{IV}} + (n+1) = \\frac{n(n+1)}{2} + (n+1) = \\frac{n(n+1)+2(n+1)}{2} = \\frac{(n+1)(n+2)}{2}$.\n**Ergebnis:** Genau die Formel für $n+1$ – Schritt gezeigt.',
          '**Aufgabe:** IA für $\\sum_{k=1}^{n} (2k-1) = n^2$ bei $n=1$.\n**Lösung:** Links $2\\cdot 1 - 1 = 1$, rechts $1^2 = 1$.\n**Ergebnis:** IA gilt.',
        ],
      },
      {
        szenario: 'Ungleichung beweisen',
        beispiele: [
          '**Aufgabe:** Bernoulli: zeige $(1+x)^n \\geq 1 + nx$ für $x \\geq -1$, IA $n=1$.\n**Lösung:** $(1+x)^1 = 1+x$ und $1 + 1\\cdot x = 1+x$.\n**Ergebnis:** IA gilt mit Gleichheit.',
          '**Aufgabe:** Bernoulli-Schritt $n \\to n+1$.\n**Lösung:** $(1+x)^{n+1} = (1+x)^n(1+x) \\geq (1+nx)(1+x)$ (IV, $1+x \\geq 0$) $= 1 + (n+1)x + nx^2 \\geq 1+(n+1)x$.\n**Ergebnis:** $(1+x)^{n+1} \\geq 1+(n+1)x$ – Schritt gezeigt.',
          '**Aufgabe:** IA für $2^n \\geq n+1$ bei $n=1$.\n**Lösung:** $2^1 = 2$ und $1+1 = 2$.\n**Ergebnis:** IA gilt ($2 \\geq 2$).',
        ],
      },
      {
        szenario: 'Teilbarkeit beweisen',
        beispiele: [
          '**Aufgabe:** Zeige: $3$ teilt $n^3 - n$, IA $n=1$.\n**Lösung:** $1^3 - 1 = 0$, und $3$ teilt $0$.\n**Ergebnis:** IA gilt.',
          '**Aufgabe:** Schritt für „$3 \\mid n^3-n$".\n**Lösung:** $(n+1)^3-(n+1) = n^3+3n^2+3n+1-n-1 = (n^3-n) + 3(n^2+n)$. Erster Teil durch IV teilbar, zweiter offensichtlich durch $3$.\n**Ergebnis:** Summe durch $3$ teilbar – Schritt gezeigt.',
          '**Aufgabe:** Zeige IA für „$2$ teilt $n^2+n$" bei $n=1$.\n**Lösung:** $1+1 = 2$, durch $2$ teilbar.\n**Ergebnis:** IA gilt.',
        ],
      },
    ],
  },

  // ===== Blatt 4 – Zahlbereiche =====
  {
    id: 'supremum-infimum',
    titel: 'Supremum & Infimum',
    inhalt:
      '**Worum geht es?**\n' +
      'Für eine Menge $M$ reeller Zahlen beschreiben Supremum/Infimum und Maximum/Minimum, wie die Menge nach oben bzw. unten „abschließt". Der feine Unterschied: Ob die Schranke selbst zur Menge gehört oder nur beliebig nah erreicht wird.\n' +
      '\n' +
      '**Schranken**\n' +
      'Eine Zahl $s$ heißt obere Schranke von $M$, wenn $x \\leq s$ für alle $x \\in M$ gilt. Entsprechend ist $u$ untere Schranke, wenn $x \\geq u$ für alle $x \\in M$.\n' +
      '\n' +
      '**Supremum & Infimum**\n' +
      '$\\sup(M)$ ist die **kleinste** obere Schranke, $\\inf(M)$ die **größte** untere Schranke. Sie existieren immer, sobald $M$ nichtleer und beschränkt ist (Vollständigkeit von $\\mathbb{R}$).\n' +
      '\n' +
      '**Maximum & Minimum**\n' +
      '$\\max(M)$ ist das größte Element von $M$ – es existiert nur, wenn das Supremum selbst zu $M$ gehört. Entsprechend ist $\\min(M)$ das kleinste Element und gleich $\\inf(M)$, falls dieses in $M$ liegt.\n' +
      '\n' +
      '**Der entscheidende Unterschied**\n' +
      '$\\sup$ und $\\inf$ gibt es immer (bei Beschränktheit), aber $\\max$/$\\min$ nur, wenn die Schranke tatsächlich angenommen wird.\n' +
      '\n' +
      '**Typische Beispiele**\n' +
      '$(0,1]$: $\\sup = 1 = \\max$, $\\inf = 0$, kein Minimum.\n' +
      '$(0,1)$: $\\sup = 1$ (kein Max), $\\inf = 0$ (kein Min).\n' +
      '$\\{\\frac{1}{n} : n \\in \\mathbb{N}, n\\geq 1\\}$: $\\sup = 1 = \\max$, $\\inf = 0$, kein Minimum.',
    beispiele: [
      {
        szenario: 'Intervalle',
        beispiele: [
          '**Aufgabe:** Bestimme $\\sup, \\inf, \\max, \\min$ von $[2, 5]$.\n**Lösung:** Beide Ränder gehören dazu.\n**Ergebnis:** $\\sup = \\max = 5$, $\\inf = \\min = 2$.',
          '**Aufgabe:** Bestimme dieselben für $(2, 5)$.\n**Lösung:** Ränder nicht enthalten, werden aber beliebig nah erreicht.\n**Ergebnis:** $\\sup = 5$, $\\inf = 2$, kein Max, kein Min.',
          '**Aufgabe:** Bestimme dieselben für $(2, 5]$.\n**Lösung:** Oben Rand dabei, unten nicht.\n**Ergebnis:** $\\sup = \\max = 5$, $\\inf = 2$, kein Min.',
        ],
      },
      {
        szenario: 'Diskrete Mengen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\sup/\\inf$ von $M = \\{1, 2, 3\\}$.\n**Lösung:** Endliche Menge: größtes/kleinstes Element existiert.\n**Ergebnis:** $\\sup = \\max = 3$, $\\inf = \\min = 1$.',
          '**Aufgabe:** Bestimme $\\sup/\\inf$ von $\\{\\frac{1}{n} : n \\geq 1\\}$.\n**Lösung:** Größter Wert bei $n=1$ ist $1$; die Werte streben gegen $0$, ohne es zu erreichen.\n**Ergebnis:** $\\sup = \\max = 1$, $\\inf = 0$, kein Min.',
          '**Aufgabe:** Bestimme $\\sup/\\inf$ von $\\{n : n \\in \\mathbb{N}\\}$.\n**Lösung:** Nach unten durch $0$ beschränkt (und angenommen), nach oben unbeschränkt.\n**Ergebnis:** $\\inf = \\min = 0$, $\\sup$ existiert nicht.',
        ],
      },
      {
        szenario: 'Begründen, warum kein Max/Min',
        beispiele: [
          '**Aufgabe:** Warum hat $(0,1)$ kein Maximum?\n**Lösung:** Zu jedem $x < 1$ liegt $\\frac{x+1}{2}$ noch näher an $1$ und ist auch in $(0,1)$.\n**Ergebnis:** Es gibt kein größtes Element; nur $\\sup = 1$.',
          '**Aufgabe:** Warum ist $\\inf\\{\\frac{1}{n}\\} = 0$, obwohl $0$ nicht in der Menge ist?\n**Lösung:** $0$ ist untere Schranke, und keine größere Zahl ist es (die Werte unterschreiten jedes $\\varepsilon > 0$).\n**Ergebnis:** $\\inf = 0$, kein Minimum.',
          '**Aufgabe:** Hat $[0, \\infty)$ ein Supremum?\n**Lösung:** Nach oben unbeschränkt – keine obere Schranke existiert.\n**Ergebnis:** Kein Supremum; $\\inf = \\min = 0$.',
        ],
      },
    ],
  },
  {
    id: 'betrag-intervalle',
    titel: 'Betrag & Ungleichungen',
    inhalt:
      '**Worum geht es?**\n' +
      'Der Betrag $|x|$ misst den Abstand einer Zahl von $0$. Betrags-Ungleichungen lösen heißt, alle $x$ in einem bestimmten Abstand zu beschreiben – das führt auf Intervalle.\n' +
      '\n' +
      '**Definition & Eigenschaften**\n' +
      '$|x| = x$ falls $x \\geq 0$, und $|x| = -x$ falls $x < 0$. Es gilt:\n' +
      '$|x| \\geq 0$ und $|x| = 0 \\Leftrightarrow x = 0$,  $\\;|x\\cdot y| = |x|\\cdot|y|$,\n' +
      '$|x+y| \\leq |x| + |y|$ (Dreiecksungleichung).\n' +
      '\n' +
      '**Betrags-Ungleichungen**\n' +
      'Für $c > 0$ gilt:\n' +
      '$|A| \\leq c \\;\\Leftrightarrow\\; -c \\leq A \\leq c$ (ein Intervall um $0$).\n' +
      '$|A| \\geq c \\;\\Leftrightarrow\\; A \\geq c \\;\\text{oder}\\; A \\leq -c$ (zwei Bereiche außen).\n' +
      '\n' +
      '**Bruch-Ungleichungen (Fallunterscheidung!)**\n' +
      'Bei $\\dfrac{f(x)}{g(x)} \\leq 0$ darf man nicht einfach mit $g(x)$ multiplizieren, weil das Vorzeichen unbekannt ist:\n' +
      'Fall $g(x) > 0$: dann $f(x) \\leq 0$.\n' +
      'Fall $g(x) < 0$: dann $f(x) \\geq 0$ (das Ungleichheitszeichen dreht sich um!).\n' +
      '\n' +
      '**Merke**\n' +
      '„$\\leq c$" gibt einen zusammenhängenden Streifen, „$\\geq c$" zwei getrennte Außenbereiche. Beim Multiplizieren mit negativen Termen kippt das Ungleichheitszeichen.',
    beispiele: [
      {
        szenario: 'Betrag berechnen & abschätzen',
        beispiele: [
          '**Aufgabe:** Berechne $|-7|$ und $|3-8|$.\n**Lösung:** $|-7| = 7$; $|3-8| = |-5| = 5$.\n**Ergebnis:** $7$ und $5$.',
          '**Aufgabe:** Prüfe die Dreiecksungleichung für $x=3$, $y=-5$.\n**Lösung:** Links $|3+(-5)| = |-2| = 2$; rechts $|3|+|-5| = 8$.\n**Ergebnis:** $2 \\leq 8$ – erfüllt.',
          '**Aufgabe:** Berechne $|2\\cdot(-4)|$ und vergleiche mit $|2|\\cdot|-4|$.\n**Lösung:** $|2\\cdot(-4)| = |-8| = 8$; $|2|\\cdot|-4| = 2\\cdot 4 = 8$.\n**Ergebnis:** Gleich, $8 = 8$.',
        ],
      },
      {
        szenario: 'Betrags-Ungleichung lösen',
        beispiele: [
          '**Aufgabe:** Löse $|x| \\leq 3$.\n**Lösung:** $-3 \\leq x \\leq 3$.\n**Ergebnis:** $x \\in [-3, 3]$.',
          '**Aufgabe:** Löse $|x-2| < 1$.\n**Lösung:** $-1 < x-2 < 1$, überall $+2$: $1 < x < 3$.\n**Ergebnis:** $x \\in (1, 3)$.',
          '**Aufgabe:** Löse $|x| \\geq 4$.\n**Lösung:** $x \\geq 4$ oder $x \\leq -4$.\n**Ergebnis:** $x \\in (-\\infty,-4] \\cup [4,\\infty)$.',
        ],
      },
      {
        szenario: 'Bruch-Ungleichung mit Fallunterscheidung',
        beispiele: [
          '**Aufgabe:** Löse $\\frac{1}{x} > 0$.\n**Lösung:** Ein Bruch mit Zähler $1 > 0$ ist positiv genau dann, wenn der Nenner positiv ist.\n**Ergebnis:** $x > 0$.',
          '**Aufgabe:** Löse $\\frac{x-1}{x} \\geq 0$.\n**Lösung:** Fall $x>0$: $x-1 \\geq 0 \\Rightarrow x \\geq 1$. Fall $x<0$: $x-1 \\geq 0$ unmöglich, aber Bruch ist dort $\\frac{(-)}{(-)} > 0$, also alle $x<0$.\n**Ergebnis:** $x < 0$ oder $x \\geq 1$.',
          '**Aufgabe:** Warum darf man $\\frac{2}{x} < 1$ nicht direkt mit $x$ multiplizieren?\n**Lösung:** Das Vorzeichen von $x$ ist unbekannt; bei $x<0$ würde sich „$<$" zu „$>$" drehen.\n**Ergebnis:** Man braucht eine Fallunterscheidung nach dem Vorzeichen von $x$.',
        ],
      },
    ],
  },

  // ===== Blatt 5/6 – Relationen, Funktionen, Kombinatorik =====
  {
    id: 'relationen',
    titel: 'Relationen',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Relation beschreibt, welche Elemente zueinander in Beziehung stehen – z. B. „$\\leq$", „ist Teiler von", „ist gleich". Formal ist eine Relation eine Teilmenge eines kartesischen Produkts.\n' +
      '\n' +
      '**Definition**\n' +
      'Eine Relation $R$ auf einer Menge $A$ ist eine Teilmenge $R \\subseteq A \\times A$. Statt $(a,b) \\in R$ schreibt man oft $a\\,R\\,b$ („$a$ steht in Relation zu $b$").\n' +
      '\n' +
      '**Die drei wichtigen Eigenschaften**\n' +
      'Reflexiv: $a\\,R\\,a$ für alle $a$ (jedes Element steht zu sich selbst in Relation).\n' +
      'Symmetrisch: aus $a\\,R\\,b$ folgt $b\\,R\\,a$ (Beziehung gilt in beide Richtungen).\n' +
      'Transitiv: aus $a\\,R\\,b$ und $b\\,R\\,c$ folgt $a\\,R\\,c$ (Ketten dürfen abgekürzt werden).\n' +
      '\n' +
      '**Äquivalenzrelation**\n' +
      'Ist eine Relation reflexiv, symmetrisch und transitiv, heißt sie Äquivalenzrelation. Sie teilt $A$ in disjunkte Klassen gleichwertiger Elemente (z. B. „hat denselben Rest bei Division durch $3$").\n' +
      '\n' +
      '**Ordnungsrelation**\n' +
      'Reflexiv, transitiv und antisymmetrisch (aus $a\\,R\\,b$ und $b\\,R\\,a$ folgt $a=b$) ergibt eine Ordnungsrelation, z. B. „$\\leq$".',
    beispiele: [
      {
        szenario: 'Eigenschaften prüfen',
        beispiele: [
          '**Aufgabe:** Ist „$\\leq$" auf $\\mathbb{R}$ reflexiv?\n**Lösung:** $a \\leq a$ gilt für jede Zahl.\n**Ergebnis:** Ja, reflexiv.',
          '**Aufgabe:** Ist „$<$" auf $\\mathbb{R}$ reflexiv?\n**Lösung:** $a < a$ ist nie erfüllt.\n**Ergebnis:** Nein, nicht reflexiv.',
          '**Aufgabe:** Ist „$=$" symmetrisch?\n**Lösung:** Aus $a=b$ folgt $b=a$.\n**Ergebnis:** Ja, symmetrisch.',
        ],
      },
      {
        szenario: 'Äquivalenzrelation erkennen',
        beispiele: [
          '**Aufgabe:** Ist „gleicher Rest bei Division durch $3$" eine Äquivalenzrelation?\n**Lösung:** Reflexiv (jede Zahl hat ihren eigenen Rest), symmetrisch, transitiv.\n**Ergebnis:** Ja, eine Äquivalenzrelation.',
          '**Aufgabe:** Nenne die Klassen von „Rest bei Division durch $2$".\n**Lösung:** Rest $0$ = gerade Zahlen, Rest $1$ = ungerade Zahlen.\n**Ergebnis:** Zwei Klassen: gerade und ungerade.',
          '**Aufgabe:** Ist „ist befreundet mit" (gegenseitig) transitiv?\n**Lösung:** A befreundet mit B, B mit C heißt nicht, dass A mit C befreundet ist.\n**Ergebnis:** Im Allgemeinen nicht transitiv – keine Äquivalenzrelation.',
        ],
      },
      {
        szenario: 'Transitivität & Antisymmetrie',
        beispiele: [
          '**Aufgabe:** Ist „ist Teiler von" auf $\\mathbb{N}$ transitiv?\n**Lösung:** Teilt $a$ die Zahl $b$ und $b$ die Zahl $c$, dann teilt $a$ auch $c$.\n**Ergebnis:** Ja, transitiv.',
          '**Aufgabe:** Ist „$\\leq$" antisymmetrisch?\n**Lösung:** Aus $a \\leq b$ und $b \\leq a$ folgt $a = b$.\n**Ergebnis:** Ja, antisymmetrisch (daher Ordnungsrelation).',
          '**Aufgabe:** Prüfe Transitivität von „$<$": $2<3$ und $3<5$.\n**Lösung:** Dann auch $2<5$.\n**Ergebnis:** Transitiv erfüllt.',
        ],
      },
    ],
  },
  {
    id: 'funktionen-eigenschaften',
    titel: 'Funktionen – Eigenschaften',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Funktion $f : A \\to B$ ordnet jedem Element der Definitionsmenge $A$ genau ein Element der Zielmenge $B$ zu. Injektiv, surjektiv und bijektiv beschreiben, wie diese Zuordnung verläuft.\n' +
      '\n' +
      '**Injektiv (eindeutig)**\n' +
      'Verschiedene Eingaben liefern verschiedene Ausgaben: aus $x_1 \\neq x_2$ folgt $f(x_1) \\neq f(x_2)$. Gleichwertig: $f(x_1) = f(x_2) \\Rightarrow x_1 = x_2$. Kein $y$ wird doppelt getroffen.\n' +
      '\n' +
      '**Surjektiv (treffend)**\n' +
      'Jedes Element der Zielmenge wird erreicht: $f(A) = B$, d. h. zu jedem $y \\in B$ gibt es ein $x$ mit $f(x) = y$.\n' +
      '\n' +
      '**Bijektiv (umkehrbar)**\n' +
      'Injektiv und surjektiv zugleich. Dann gibt es eine eindeutige Umkehrfunktion $f^{-1}$.\n' +
      '\n' +
      '**Komposition**\n' +
      'Die Verkettung $(g \\circ f)(x) = g(f(x))$ wendet erst $f$, dann $g$ an. Sind $f$ und $g$ beide injektiv, ist auch $g\\circ f$ injektiv; sind beide surjektiv, ist $g\\circ f$ surjektiv.\n' +
      '\n' +
      '**Merke**\n' +
      'Injektiv = „nicht zwei Eingaben auf dasselbe", surjektiv = „nichts in $B$ bleibt unbenutzt", bijektiv = „perfekte 1-zu-1-Zuordnung".',
    beispiele: [
      {
        szenario: 'Injektivität prüfen',
        beispiele: [
          '**Aufgabe:** Ist $f(x) = 2x+1$ auf $\\mathbb{R}$ injektiv?\n**Lösung:** $2x_1+1 = 2x_2+1 \\Rightarrow x_1 = x_2$.\n**Ergebnis:** Ja, injektiv.',
          '**Aufgabe:** Ist $f(x) = x^2$ auf $\\mathbb{R}$ injektiv?\n**Lösung:** $f(2) = 4 = f(-2)$, aber $2 \\neq -2$.\n**Ergebnis:** Nein, nicht injektiv.',
          '**Aufgabe:** Ist $f(x) = x^2$ auf $[0,\\infty)$ injektiv?\n**Lösung:** Auf den nichtnegativen Zahlen liefern verschiedene $x$ verschiedene Quadrate.\n**Ergebnis:** Ja, dort injektiv.',
        ],
      },
      {
        szenario: 'Surjektivität prüfen',
        beispiele: [
          '**Aufgabe:** Ist $f : \\mathbb{R}\\to\\mathbb{R}$, $f(x)=x^3$ surjektiv?\n**Lösung:** Jedes $y$ hat die dritte Wurzel $x = \\sqrt[3]{y}$ als Urbild.\n**Ergebnis:** Ja, surjektiv.',
          '**Aufgabe:** Ist $f : \\mathbb{R}\\to\\mathbb{R}$, $f(x)=x^2$ surjektiv?\n**Lösung:** Negative $y$ werden nie erreicht ($x^2 \\geq 0$).\n**Ergebnis:** Nein, nicht surjektiv.',
          '**Aufgabe:** Ist $f : \\mathbb{R}\\to[0,\\infty)$, $f(x)=x^2$ surjektiv?\n**Lösung:** Jedes $y \\geq 0$ hat $x = \\sqrt{y}$ als Urbild.\n**Ergebnis:** Ja, mit dieser Zielmenge surjektiv.',
        ],
      },
      {
        szenario: 'Bijektivität & Komposition',
        beispiele: [
          '**Aufgabe:** Ist $f(x)=2x+1$ auf $\\mathbb{R}$ bijektiv? Umkehrfunktion?\n**Lösung:** Injektiv und surjektiv (lineare Funktion mit Steigung $\\neq 0$). Umkehren: $y=2x+1 \\Rightarrow x = \\frac{y-1}{2}$.\n**Ergebnis:** Bijektiv, $f^{-1}(y) = \\frac{y-1}{2}$.',
          '**Aufgabe:** $f(x)=x+1$, $g(x)=x^2$. Bestimme $(g\\circ f)(x)$.\n**Lösung:** Erst $f$, dann $g$: $g(f(x)) = (x+1)^2$.\n**Ergebnis:** $(x+1)^2$.',
          '**Aufgabe:** $f(x)=x+1$, $g(x)=x^2$. Bestimme $(f\\circ g)(2)$.\n**Lösung:** Erst $g(2)=4$, dann $f(4)=5$.\n**Ergebnis:** $5$.',
        ],
      },
    ],
  },
  {
    id: 'bild-urbild',
    titel: 'Bild & Urbild',
    inhalt:
      '**Worum geht es?**\n' +
      'Das Bild und das Urbild beschreiben, wohin eine Funktion eine ganze Menge schickt bzw. woher ein Ergebnis kommt. Beide sind Mengen, nicht einzelne Werte.\n' +
      '\n' +
      '**Bild einer Menge**\n' +
      'Für $f : A \\to B$ und $M \\subseteq A$ ist das Bild $f(M) = \\{f(x) : x \\in M\\}$ – alle Funktionswerte, die aus $M$ entstehen. Das Bild der ganzen Definitionsmenge $f(A)$ heißt Bildmenge.\n' +
      '\n' +
      '**Urbild einer Menge**\n' +
      'Für $N \\subseteq B$ ist das Urbild $f^{-1}(N) = \\{x \\in A : f(x) \\in N\\}$ – alle Eingaben, deren Ergebnis in $N$ landet.\n' +
      '\n' +
      '**Wichtig: Urbild ist keine Umkehrfunktion!**\n' +
      'Das Symbol $f^{-1}(N)$ bezeichnet die Urbildmenge und existiert für jede Funktion – auch wenn $f$ gar nicht umkehrbar ist. Das Urbild kann mehrere Elemente oder gar keines enthalten.\n' +
      '\n' +
      '**Nützliche Regeln**\n' +
      '$f(M_1 \\cup M_2) = f(M_1) \\cup f(M_2)$, aber beim Schnitt gilt nur $f(M_1 \\cap M_2) \\subseteq f(M_1) \\cap f(M_2)$.\n' +
      'Beim Urbild dagegen gelten beide Mengenoperationen sauber: $f^{-1}(N_1 \\cup N_2) = f^{-1}(N_1) \\cup f^{-1}(N_2)$ und ebenso für $\\cap$.',
    beispiele: [
      {
        szenario: 'Bild berechnen',
        beispiele: [
          '**Aufgabe:** $f(x)=x^2$. Bestimme $f(\\{-2,-1,0,1,2\\})$.\n**Lösung:** Quadrate: $4,1,0,1,4$, doppelte einmal.\n**Ergebnis:** $\\{0,1,4\\}$.',
          '**Aufgabe:** $f(x)=2x$. Bestimme $f([0,3])$.\n**Lösung:** Verdoppeln streckt das Intervall auf $[0,6]$.\n**Ergebnis:** $[0, 6]$.',
          '**Aufgabe:** $f(x)=x^2$. Bestimme die Bildmenge $f(\\mathbb{R})$.\n**Lösung:** Quadrate sind genau die nichtnegativen Zahlen.\n**Ergebnis:** $[0, \\infty)$.',
        ],
      },
      {
        szenario: 'Urbild berechnen',
        beispiele: [
          '**Aufgabe:** $f(x)=x^2$. Bestimme $f^{-1}(\\{4\\})$.\n**Lösung:** $x^2 = 4 \\Rightarrow x = 2$ oder $x = -2$.\n**Ergebnis:** $\\{-2, 2\\}$.',
          '**Aufgabe:** $f(x)=x^2$. Bestimme $f^{-1}(\\{-1\\})$.\n**Lösung:** $x^2 = -1$ hat keine reelle Lösung.\n**Ergebnis:** $\\emptyset$.',
          '**Aufgabe:** $f(x)=2x$. Bestimme $f^{-1}([0,6])$.\n**Lösung:** $0 \\leq 2x \\leq 6 \\Rightarrow 0 \\leq x \\leq 3$.\n**Ergebnis:** $[0, 3]$.',
        ],
      },
      {
        szenario: 'Bild vs. Urbild unterscheiden',
        beispiele: [
          '**Aufgabe:** Warum hat $f(x)=x^2$ trotzdem ein Urbild $f^{-1}(\\{4\\})$, obwohl $f$ nicht injektiv ist?\n**Lösung:** Das Urbild ist eine Menge und braucht keine Umkehrfunktion; es sammelt einfach alle passenden $x$.\n**Ergebnis:** $f^{-1}(\\{4\\}) = \\{-2, 2\\}$ (zwei Elemente).',
          '**Aufgabe:** $f(x)=x^2$. Vergleiche $f(\\{-1\\}\\cap\\{1\\})$ mit $f(\\{-1\\})\\cap f(\\{1\\})$.\n**Lösung:** Links: $f(\\emptyset) = \\emptyset$. Rechts: $\\{1\\}\\cap\\{1\\} = \\{1\\}$.\n**Ergebnis:** Nur $\\subseteq$ gilt: $\\emptyset \\subseteq \\{1\\}$.',
          '**Aufgabe:** $f(x)=2x$. Bestimme $f^{-1}(\\{0\\})$.\n**Lösung:** $2x = 0 \\Rightarrow x = 0$.\n**Ergebnis:** $\\{0\\}$.',
        ],
      },
    ],
  },
  {
    id: 'kombinatorik',
    titel: 'Kombinatorik – Zählen',
    inhalt:
      '**Worum geht es?**\n' +
      'Kombinatorik beantwortet die Frage „Auf wie viele Arten geht das?". Je nachdem, ob die Reihenfolge zählt und ob Wiederholungen erlaubt sind, gelten verschiedene Formeln.\n' +
      '\n' +
      '**Produktregel**\n' +
      'Trifft man nacheinander Entscheidungen mit $n_1, n_2, \\ldots, n_k$ Möglichkeiten, gibt es insgesamt $n_1 \\cdot n_2 \\cdots n_k$ Kombinationen.\n' +
      '\n' +
      '**Variationen mit Wiederholung (Reihenfolge zählt, Wiederholung erlaubt)**\n' +
      '$k$ Plätze, jeder aus $n$ Möglichkeiten: $n^k$. Beispiel: Passwörter, Dualzahlen.\n' +
      '\n' +
      '**Permutationen (alle anordnen, ohne Wiederholung)**\n' +
      '$n$ verschiedene Dinge in eine Reihe: $n! = 1\\cdot 2\\cdots n$.\n' +
      '\n' +
      '**Variationen ohne Wiederholung (Reihenfolge zählt, $k$ aus $n$)**\n' +
      '$\\dfrac{n!}{(n-k)!} = n\\cdot(n-1)\\cdots(n-k+1)$.\n' +
      '\n' +
      '**Kombinationen ohne Wiederholung (Reihenfolge egal, $k$ aus $n$)**\n' +
      '$\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$. Beispiel: Lotto, Auswahl von Teilmengen.\n' +
      '\n' +
      '**Entscheidungsbaum**\n' +
      'Frage 1: Zählt die Reihenfolge? Frage 2: Sind Wiederholungen erlaubt? Danach die passende Formel wählen.',
    beispiele: [
      {
        szenario: 'Produktregel & Variationen mit Wiederholung',
        beispiele: [
          '**Aufgabe:** Wie viele $3$-stellige Dualzahlen gibt es (jede Stelle $0$ oder $1$)?\n**Lösung:** $3$ Plätze, je $2$ Möglichkeiten: $2^3$.\n**Ergebnis:** $8$.',
          '**Aufgabe:** Wie viele Passwörter aus $4$ Kleinbuchstaben (a–z)?\n**Lösung:** $4$ Plätze, je $26$: $26^4$.\n**Ergebnis:** $456\\,976$.',
          '**Aufgabe:** Ein Menü mit $3$ Vorspeisen, $4$ Hauptgängen, $2$ Desserts – wie viele Kombinationen?\n**Lösung:** Produktregel: $3\\cdot 4\\cdot 2$.\n**Ergebnis:** $24$.',
        ],
      },
      {
        szenario: 'Permutationen & Variationen ohne Wiederholung',
        beispiele: [
          '**Aufgabe:** Auf wie viele Arten kann man $5$ Bücher in eine Reihe stellen?\n**Lösung:** $5! = 1\\cdot 2\\cdot 3\\cdot 4\\cdot 5$.\n**Ergebnis:** $120$.',
          '**Aufgabe:** Wie viele Möglichkeiten, aus $10$ Läufern Gold/Silber/Bronze zu vergeben?\n**Lösung:** Reihenfolge zählt, ohne Wiederholung: $10\\cdot 9\\cdot 8$.\n**Ergebnis:** $720$.',
          '**Aufgabe:** Wie viele Anagramme hat das Wort „ROT" (alle Buchstaben verschieden)?\n**Lösung:** $3! = 6$.\n**Ergebnis:** $6$.',
        ],
      },
      {
        szenario: 'Kombinationen ohne Wiederholung',
        beispiele: [
          '**Aufgabe:** Wie viele $2$-er-Teams aus $5$ Personen?\n**Lösung:** Reihenfolge egal: $\\binom{5}{2} = \\frac{5\\cdot 4}{2}$.\n**Ergebnis:** $10$.',
          '**Aufgabe:** Wie viele Möglichkeiten beim Lotto „$6$ aus $49$"?\n**Lösung:** $\\binom{49}{6} = \\frac{49!}{6!\\,43!}$.\n**Ergebnis:** $13\\,983\\,816$.',
          '**Aufgabe:** Wie viele Diagonalen hat ein Sechseck?\n**Lösung:** Verbindungen von je $2$ der $6$ Ecken: $\\binom{6}{2} = 15$, davon $6$ Seiten abziehen.\n**Ergebnis:** $9$.',
        ],
      },
    ],
  },
  {
    id: 'abzaehlbarkeit',
    titel: 'Abzählbarkeit unendlicher Mengen',
    inhalt:
      '**Worum geht es?**\n' +
      'Auch unendliche Mengen kann man der Größe nach vergleichen. Eine Menge heißt abzählbar, wenn man ihre Elemente in einer Liste durchnummerieren kann – sonst überabzählbar.\n' +
      '\n' +
      '**Gleichmächtigkeit**\n' +
      'Zwei Mengen sind gleichmächtig, wenn es eine bijektive Abbildung zwischen ihnen gibt (eine perfekte 1-zu-1-Zuordnung). Bei unendlichen Mengen kann eine Menge so „gleich groß" wie eine echte Teilmenge sein.\n' +
      '\n' +
      '**Abzählbar unendlich**\n' +
      'Eine Menge heißt abzählbar unendlich, wenn sie gleichmächtig zu $\\mathbb{N}$ ist – man kann sie als Folge $a_0, a_1, a_2, \\ldots$ auflisten. $\\mathbb{Z}$ und $\\mathbb{Q}$ sind abzählbar.\n' +
      '\n' +
      '**Beispiele für Abzählbarkeit**\n' +
      '$\\mathbb{Z}$: abwechselnd $0, 1, -1, 2, -2, \\ldots$ aufzählen.\n' +
      '$\\mathbb{Q}$: mit dem Cantorschen Diagonalverfahren in einer Tabelle aller Brüche durchlaufen.\n' +
      'Vereinigung und kartesisches Produkt abzählbarer Mengen sind wieder abzählbar.\n' +
      '\n' +
      '**Überabzählbar**\n' +
      '$\\mathbb{R}$ (und schon das Intervall $(0,1)$) ist überabzählbar. Cantors Diagonalargument zeigt: Jede Liste reeller Zahlen lässt sich um eine fehlende Zahl ergänzen – keine Aufzählung erfasst alle.\n' +
      '\n' +
      '**Merke**\n' +
      'Abzählbar = „in eine Liste bringen". $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$ sind abzählbar, $\\mathbb{R}$ nicht.',
    beispiele: [
      {
        szenario: 'Bijektion zwischen unendlichen Mengen',
        beispiele: [
          '**Aufgabe:** Gib eine Bijektion zwischen $\\mathbb{N}$ und den geraden Zahlen an.\n**Lösung:** $f(n) = 2n$ ordnet $0\\to 0$, $1\\to 2$, $2\\to 4, \\ldots$ eindeutig zu.\n**Ergebnis:** $f(n)=2n$ ist bijektiv – beide gleichmächtig.',
          '**Aufgabe:** Sind $\\mathbb{N}$ und $\\mathbb{N}\\setminus\\{0\\}$ gleichmächtig?\n**Lösung:** $f(n) = n+1$ ist eine Bijektion.\n**Ergebnis:** Ja, gleichmächtig (Teilmenge, aber gleich groß).',
          '**Aufgabe:** Bijektion zwischen $\\mathbb{N}$ und $\\mathbb{Z}$ (Idee).\n**Lösung:** Aufzählen $0,1,-1,2,-2,3,-3,\\ldots$ – jede ganze Zahl bekommt genau eine Nummer.\n**Ergebnis:** $\\mathbb{Z}$ ist abzählbar.',
        ],
      },
      {
        szenario: 'Abzählbar begründen',
        beispiele: [
          '**Aufgabe:** Ist $\\mathbb{Q}$ abzählbar?\n**Lösung:** Cantors Diagonalverfahren listet alle Brüche $\\frac{p}{q}$ systematisch auf.\n**Ergebnis:** Ja, $\\mathbb{Q}$ ist abzählbar.',
          '**Aufgabe:** Ist die Menge aller Paare $\\mathbb{N}\\times\\mathbb{N}$ abzählbar?\n**Lösung:** Diagonal durchlaufen: $(0,0),(0,1),(1,0),(0,2),\\ldots$\n**Ergebnis:** Ja, abzählbar.',
          '**Aufgabe:** Ist die Vereinigung abzählbar vieler abzählbarer Mengen abzählbar?\n**Lösung:** Ja – man ordnet sie in einer Tabelle an und läuft diagonal.\n**Ergebnis:** Abzählbar.',
        ],
      },
      {
        szenario: 'Überabzählbarkeit',
        beispiele: [
          '**Aufgabe:** Ist $\\mathbb{R}$ abzählbar?\n**Lösung:** Cantors Diagonalargument konstruiert zu jeder Liste eine fehlende reelle Zahl.\n**Ergebnis:** Nein, $\\mathbb{R}$ ist überabzählbar.',
          '**Aufgabe:** Ist $(0,1)$ abzählbar?\n**Lösung:** Schon dieses Intervall ist gleichmächtig zu $\\mathbb{R}$ und überabzählbar.\n**Ergebnis:** Nein, überabzählbar.',
          '**Aufgabe:** Idee des Diagonalarguments.\n**Lösung:** Aus der Dezimaldarstellung der $n$-ten Zahl die $n$-te Stelle ändern – die so gebaute Zahl steht in keiner Zeile.\n**Ergebnis:** Keine Aufzählung erfasst alle reellen Zahlen.',
        ],
      },
    ],
  },

  // ===== Blatt 7–9 – Folgen & Reihen =====
  {
    id: 'folgen-konvergenz',
    titel: 'Folgen & Konvergenz',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Folge $(a_n)$ ist eine durchnummerierte Liste von Zahlen $a_0, a_1, a_2, \\ldots$ Konvergenz bedeutet, dass sich die Glieder einer festen Zahl, dem Grenzwert, immer weiter annähern.\n' +
      '\n' +
      '**Konvergenz – die Idee**\n' +
      'Die Folge $(a_n)$ konvergiert gegen $a$ (geschrieben $\\lim_{n\\to\\infty} a_n = a$), wenn die Glieder ab irgendwann beliebig nah an $a$ liegen. Formal: zu jedem $\\varepsilon > 0$ gibt es ein $N$, sodass $|a_n - a| < \\varepsilon$ für alle $n \\geq N$.\n' +
      '\n' +
      '**Grenzwertregeln**\n' +
      'Konvergieren $a_n \\to a$ und $b_n \\to b$, dann:\n' +
      '$a_n + b_n \\to a+b$,  $\\;a_n\\cdot b_n \\to a\\cdot b$,  $\\;\\dfrac{a_n}{b_n} \\to \\dfrac{a}{b}$ (für $b \\neq 0$).\n' +
      '\n' +
      '**Wichtige Standard-Grenzwerte**\n' +
      '$\\dfrac{1}{n} \\to 0$,  $\\;\\dfrac{n}{n+c} \\to 1$,  $\\;q^n \\to 0$ für $|q| < 1$,  $\\;\\left(1+\\dfrac{1}{n}\\right)^n \\to e$.\n' +
      '\n' +
      '**Technik bei Brüchen**\n' +
      'Bei Quotienten von Polynomen kürzt man durch die höchste $n$-Potenz, dann verschwinden alle $\\frac{1}{n^k}$-Terme.\n' +
      '\n' +
      '**Divergenz**\n' +
      'Bestimmt divergent: $\\lim = +\\infty$ oder $-\\infty$. Unbestimmt divergent: kein Grenzwert, z. B. $(-1)^n$ springt zwischen $1$ und $-1$.',
    beispiele: [
      {
        szenario: 'Grenzwert von Brüchen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{1}{n}$.\n**Lösung:** Mit wachsendem $n$ wird der Bruch beliebig klein.\n**Ergebnis:** $0$.',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{2n+1}{n}$.\n**Lösung:** Durch $n$ kürzen: $2 + \\frac{1}{n} \\to 2 + 0$.\n**Ergebnis:** $2$.',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{3n^2+n}{n^2+5}$.\n**Lösung:** Durch $n^2$ kürzen: $\\frac{3 + 1/n}{1 + 5/n^2} \\to \\frac{3}{1}$.\n**Ergebnis:** $3$.',
        ],
      },
      {
        szenario: 'Standard-Grenzwerte',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\left(\\frac{1}{2}\\right)^n$.\n**Lösung:** $q^n \\to 0$ für $|q| < 1$; hier $q = \\frac{1}{2}$.\n**Ergebnis:** $0$.',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{n}{n+3}$.\n**Lösung:** Durch $n$ kürzen: $\\frac{1}{1 + 3/n} \\to \\frac{1}{1}$.\n**Ergebnis:** $1$.',
          '**Aufgabe:** Wogegen strebt $\\left(1+\\frac{1}{n}\\right)^n$?\n**Lösung:** Das ist die berühmte Definition der eulerschen Zahl.\n**Ergebnis:** $e \\approx 2{,}71828$.',
        ],
      },
      {
        szenario: 'Divergenz erkennen',
        beispiele: [
          '**Aufgabe:** Konvergiert $a_n = (-1)^n$?\n**Lösung:** Die Folge springt $1, -1, 1, -1, \\ldots$ und nähert sich keiner Zahl.\n**Ergebnis:** Unbestimmt divergent (kein Grenzwert).',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} n^2$.\n**Lösung:** Die Glieder wachsen unbegrenzt.\n**Ergebnis:** Bestimmt divergent, $+\\infty$.',
          '**Aufgabe:** Konvergiert $a_n = \\frac{(-1)^n}{n}$?\n**Lösung:** Der Betrag $\\frac{1}{n} \\to 0$, also nähern sich die Glieder $0$ trotz Vorzeichenwechsel.\n**Ergebnis:** Konvergiert gegen $0$.',
        ],
      },
    ],
  },
  {
    id: 'geometrische-summenformel',
    titel: 'Geometrische Summenformel',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine geometrische Folge entsteht durch fortlaufendes Multiplizieren mit demselben Faktor $q$ (dem Quotienten). Ihre Teilsummen lassen sich mit einer geschlossenen Formel berechnen.\n' +
      '\n' +
      '**Endliche geometrische Summe**\n' +
      '$\\sum_{k=0}^{n} q^k = 1 + q + q^2 + \\cdots + q^n = \\dfrac{1 - q^{n+1}}{1 - q}$ (für $q \\neq 1$).\n' +
      'Für $q = 1$ ist die Summe einfach $n+1$ (lauter Einsen).\n' +
      '\n' +
      '**Warum stimmt das?**\n' +
      'Multipliziert man die Summe $S = 1+q+\\cdots+q^n$ mit $q$, erhält man $qS = q+q^2+\\cdots+q^{n+1}$. Die Differenz $S - qS = 1 - q^{n+1}$, also $S(1-q) = 1-q^{n+1}$, woraus die Formel folgt.\n' +
      '\n' +
      '**Allgemeiner Startwert**\n' +
      'Beginnt die Summe mit $a$ statt $1$: $\\sum_{k=0}^{n} a\\,q^k = a\\cdot\\dfrac{1-q^{n+1}}{1-q}$.\n' +
      '\n' +
      '**Unendliche geometrische Reihe**\n' +
      'Für $|q| < 1$ strebt $q^{n+1} \\to 0$, daher $\\sum_{k=0}^{\\infty} q^k = \\dfrac{1}{1-q}$. Für $|q| \\geq 1$ divergiert die Reihe.',
    beispiele: [
      {
        szenario: 'Endliche Summe berechnen',
        beispiele: [
          '**Aufgabe:** Berechne $\\sum_{k=0}^{4} 2^k$.\n**Lösung:** $\\frac{1-2^{5}}{1-2} = \\frac{1-32}{-1} = 31$. Probe: $1+2+4+8+16 = 31$.\n**Ergebnis:** $31$.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{3} \\left(\\frac{1}{2}\\right)^k$.\n**Lösung:** $\\frac{1-(1/2)^{4}}{1-1/2} = \\frac{1-1/16}{1/2} = \\frac{15/16}{1/2} = \\frac{15}{8}$.\n**Ergebnis:** $\\frac{15}{8} = 1{,}875$.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{3} 3\\cdot 2^k$.\n**Lösung:** $3\\cdot\\frac{1-2^4}{1-2} = 3\\cdot 15 = 45$. Probe: $3+6+12+24 = 45$.\n**Ergebnis:** $45$.',
        ],
      },
      {
        szenario: 'Unendliche Reihe',
        beispiele: [
          '**Aufgabe:** Berechne $\\sum_{k=0}^{\\infty} \\left(\\frac{1}{2}\\right)^k$.\n**Lösung:** $|q| = \\frac{1}{2} < 1$: $\\frac{1}{1-1/2} = \\frac{1}{1/2}$.\n**Ergebnis:** $2$.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{\\infty} \\left(\\frac{1}{3}\\right)^k$.\n**Lösung:** $\\frac{1}{1-1/3} = \\frac{1}{2/3} = \\frac{3}{2}$.\n**Ergebnis:** $\\frac{3}{2}$.',
          '**Aufgabe:** Berechne $\\sum_{k=1}^{\\infty} \\left(\\frac{1}{2}\\right)^k$ (Start bei $k=1$).\n**Lösung:** Gesamtsumme ab $k=0$ ist $2$, abzüglich des Glieds $k=0$ ($=1$): $2 - 1$.\n**Ergebnis:** $1$.',
        ],
      },
      {
        szenario: 'Divergenz & Sonderfälle',
        beispiele: [
          '**Aufgabe:** Konvergiert $\\sum_{k=0}^{\\infty} 2^k$?\n**Lösung:** $|q| = 2 \\geq 1$, die Glieder werden immer größer.\n**Ergebnis:** Divergiert ($+\\infty$).',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{n} 1^k$.\n**Lösung:** Sonderfall $q=1$: lauter Einsen, also $n+1$ Stück.\n**Ergebnis:** $n+1$.',
          '**Aufgabe:** $0{,}\\overline{3} = \\sum_{k=1}^{\\infty} 3\\cdot 10^{-k}$. Welcher Bruch?\n**Lösung:** $3\\cdot\\frac{10^{-1}}{1-10^{-1}} = 3\\cdot\\frac{1/10}{9/10} = 3\\cdot\\frac{1}{9} = \\frac{1}{3}$.\n**Ergebnis:** $\\frac{1}{3}$.',
        ],
      },
    ],
  },
  {
    id: 'reihen-konvergenz',
    titel: 'Reihen & Konvergenzkriterien',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Reihe ist die fortlaufende Summe einer Folge: $S = \\sum_{k=0}^{\\infty} a_k$. Konvergenzkriterien helfen zu entscheiden, ob diese unendliche Summe einen endlichen Wert hat.\n' +
      '\n' +
      '**Reihe als Folge der Teilsummen**\n' +
      'Die Teilsumme ist $S_n = \\sum_{k=0}^{n} a_k$. Die Reihe konvergiert, wenn die Folge $(S_n)$ einen Grenzwert hat: $S = \\lim_{n\\to\\infty} S_n$.\n' +
      '\n' +
      '**Notwendige Bedingung**\n' +
      'Konvergiert $\\sum a_k$, dann muss $a_k \\to 0$ gelten. Vorsicht: Die Umkehrung gilt NICHT – $\\sum \\frac{1}{k}$ (harmonische Reihe) divergiert, obwohl $\\frac{1}{k} \\to 0$.\n' +
      '\n' +
      '**Geometrische Reihe**\n' +
      '$\\sum_{k=0}^{\\infty} q^k = \\dfrac{1}{1-q}$ für $|q| < 1$, sonst divergent.\n' +
      '\n' +
      '**Quotientenkriterium**\n' +
      'Bildet man $L = \\lim \\left|\\dfrac{a_{k+1}}{a_k}\\right|$, so gilt: $L < 1 \\Rightarrow$ konvergent, $L > 1 \\Rightarrow$ divergent, $L = 1 \\Rightarrow$ keine Aussage.\n' +
      '\n' +
      '**Weitere Kriterien**\n' +
      'Majorantenkriterium: gilt $|a_k| \\leq b_k$ und $\\sum b_k$ konvergiert, so konvergiert auch $\\sum a_k$.\n' +
      'Leibniz-Kriterium (alternierend): $\\sum (-1)^k b_k$ konvergiert, falls $b_k \\geq 0$, monoton fallend und $b_k \\to 0$.',
    beispiele: [
      {
        szenario: 'Notwendige Bedingung & geometrische Reihe',
        beispiele: [
          '**Aufgabe:** Kann $\\sum_{k=0}^{\\infty} \\frac{k}{k+1}$ konvergieren?\n**Lösung:** $\\frac{k}{k+1} \\to 1 \\neq 0$; die notwendige Bedingung ist verletzt.\n**Ergebnis:** Divergiert.',
          '**Aufgabe:** Berechne $\\sum_{k=0}^{\\infty} \\left(\\frac{2}{3}\\right)^k$.\n**Lösung:** $|q| = \\frac{2}{3} < 1$: $\\frac{1}{1-2/3} = 3$.\n**Ergebnis:** $3$.',
          '**Aufgabe:** Konvergiert die harmonische Reihe $\\sum \\frac{1}{k}$?\n**Lösung:** Obwohl $\\frac{1}{k}\\to 0$, divergiert sie (bekanntes Gegenbeispiel zur Umkehrung).\n**Ergebnis:** Divergiert.',
        ],
      },
      {
        szenario: 'Quotientenkriterium',
        beispiele: [
          '**Aufgabe:** Prüfe $\\sum \\frac{1}{k!}$ mit dem Quotientenkriterium.\n**Lösung:** $\\frac{a_{k+1}}{a_k} = \\frac{k!}{(k+1)!} = \\frac{1}{k+1} \\to 0 = L < 1$.\n**Ergebnis:** Konvergent (es ist übrigens $e$).',
          '**Aufgabe:** Prüfe $\\sum \\frac{2^k}{k!}$.\n**Lösung:** $\\frac{2^{k+1}/(k+1)!}{2^k/k!} = \\frac{2}{k+1} \\to 0 < 1$.\n**Ergebnis:** Konvergent.',
          '**Aufgabe:** Prüfe $\\sum k!$ mit dem Quotientenkriterium.\n**Lösung:** $\\frac{(k+1)!}{k!} = k+1 \\to \\infty > 1$.\n**Ergebnis:** Divergent.',
        ],
      },
      {
        szenario: 'Majorante & Leibniz',
        beispiele: [
          '**Aufgabe:** Zeige Konvergenz von $\\sum \\frac{1}{k^2+1}$ per Majorante.\n**Lösung:** $\\frac{1}{k^2+1} \\leq \\frac{1}{k^2}$, und $\\sum \\frac{1}{k^2}$ konvergiert.\n**Ergebnis:** Konvergent.',
          '**Aufgabe:** Konvergiert $\\sum_{k=1}^{\\infty} \\frac{(-1)^k}{k}$?\n**Lösung:** Leibniz: $b_k = \\frac{1}{k} \\geq 0$, monoton fallend, $\\to 0$.\n**Ergebnis:** Konvergent (alternierende harmonische Reihe).',
          '**Aufgabe:** Konvergiert $\\sum_{k=1}^{\\infty} \\frac{(-1)^k}{\\sqrt{k}}$?\n**Lösung:** Leibniz: $\\frac{1}{\\sqrt{k}}$ fällt monoton gegen $0$.\n**Ergebnis:** Konvergent.',
        ],
      },
    ],
  },
  {
    id: 'rekursive-folgen',
    titel: 'Rekursive Folgen',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine rekursive Folge ist nicht durch eine Formel für $a_n$ gegeben, sondern durch eine Vorschrift, die jedes Glied aus dem/den vorigen berechnet, plus einen Startwert.\n' +
      '\n' +
      '**Aufbau**\n' +
      'Ein Startwert (z. B. $a_0 = 1$) und eine Rekursionsvorschrift (z. B. $a_{n+1} = \\sqrt{2 + a_n}$) legen die ganze Folge fest. Glied für Glied kann man Werte berechnen.\n' +
      '\n' +
      '**Grenzwert bei Konvergenz – der Fixpunkt-Trick**\n' +
      'Konvergiert die Folge gegen $a$, so erfüllt der Grenzwert dieselbe Gleichung wie die Rekursion, weil $a_{n+1}$ und $a_n$ beide gegen $a$ streben. Man setzt also in $a_{n+1} = f(a_n)$ einfach $a$ für beide ein und löst $a = f(a)$.\n' +
      '\n' +
      '**Vorgehen**\n' +
      '1. Fixpunktgleichung $a = f(a)$ aufstellen und nach $a$ lösen (Kandidaten finden).\n' +
      '2. Unsinnige Lösungen aussortieren (z. B. negative Werte bei einer positiven Folge).\n' +
      '3. Konvergenz sichern (oft mit Monotonie und Beschränktheit per Induktion).\n' +
      '\n' +
      '**Wichtiger Satz**\n' +
      'Eine monoton wachsende, nach oben beschränkte Folge konvergiert (Monotoniekriterium) – ebenso eine monoton fallende, nach unten beschränkte.',
    beispiele: [
      {
        szenario: 'Glieder berechnen',
        beispiele: [
          '**Aufgabe:** $a_0 = 1$, $a_{n+1} = \\sqrt{2 + a_n}$. Berechne $a_1, a_2$.\n**Lösung:** $a_1 = \\sqrt{2+1} = \\sqrt{3} \\approx 1{,}732$; $a_2 = \\sqrt{2+\\sqrt{3}} \\approx 1{,}932$.\n**Ergebnis:** $a_1 = \\sqrt{3}$, $a_2 \\approx 1{,}932$.',
          '**Aufgabe:** $a_0 = 0$, $a_{n+1} = \\frac{1}{2}a_n + 1$. Berechne $a_1, a_2$.\n**Lösung:** $a_1 = \\frac{1}{2}\\cdot 0 + 1 = 1$; $a_2 = \\frac{1}{2}\\cdot 1 + 1 = 1{,}5$.\n**Ergebnis:** $a_1 = 1$, $a_2 = 1{,}5$.',
          '**Aufgabe:** $a_0 = 2$, $a_{n+1} = \\frac{2a_n}{2+a_n}$. Berechne $a_1$.\n**Lösung:** $a_1 = \\frac{2\\cdot 2}{2+2} = \\frac{4}{4} = 1$.\n**Ergebnis:** $a_1 = 1$.',
        ],
      },
      {
        szenario: 'Grenzwert per Fixpunkt',
        beispiele: [
          '**Aufgabe:** Grenzwert von $a_{n+1} = \\sqrt{2+a_n}$ (positiv, konvergent).\n**Lösung:** Fixpunkt $a = \\sqrt{2+a} \\Rightarrow a^2 = 2+a \\Rightarrow a^2-a-2 = 0 \\Rightarrow (a-2)(a+1)=0$. Positiv: $a=2$.\n**Ergebnis:** $\\lim a_n = 2$.',
          '**Aufgabe:** Grenzwert von $a_{n+1} = \\frac{1}{2}a_n + 1$.\n**Lösung:** Fixpunkt $a = \\frac{1}{2}a + 1 \\Rightarrow \\frac{1}{2}a = 1 \\Rightarrow a = 2$.\n**Ergebnis:** $\\lim a_n = 2$.',
          '**Aufgabe:** Grenzwert von $a_{n+1} = \\frac{2a_n}{2+a_n}$ (positiv).\n**Lösung:** $a = \\frac{2a}{2+a} \\Rightarrow a(2+a) = 2a \\Rightarrow a^2 = 0 \\Rightarrow a = 0$.\n**Ergebnis:** $\\lim a_n = 0$.',
        ],
      },
      {
        szenario: 'Konvergenz begründen',
        beispiele: [
          '**Aufgabe:** Warum konvergiert $a_{n+1} = \\sqrt{2+a_n}$ mit $a_0 = 1$?\n**Lösung:** Sie ist monoton wachsend und durch $2$ nach oben beschränkt (per Induktion), also gilt das Monotoniekriterium.\n**Ergebnis:** Konvergent (gegen $2$).',
          '**Aufgabe:** Ist $a_{n+1} = \\frac{2a_n}{2+a_n}$ mit $a_0 = 2$ fallend?\n**Lösung:** $a_1 = 1 < 2$; allgemein wird der Faktor $\\frac{2}{2+a_n} < 1$ für $a_n > 0$.\n**Ergebnis:** Monoton fallend, nach unten durch $0$ beschränkt – konvergent.',
          '**Aufgabe:** Warum reicht der Fixpunkt allein nicht als Beweis?\n**Lösung:** Der Fixpunkt liefert nur Kandidaten; Konvergenz muss separat (Monotonie + Beschränktheit) gesichert werden.\n**Ergebnis:** Erst Konvergenz zeigen, dann Fixpunkt einsetzen.',
        ],
      },
    ],
  },
  {
    id: 'polynomdivision',
    titel: 'Polynomdivision',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Polynomdivision teilt ein Polynom durch ein anderes – ganz analog zum schriftlichen Dividieren von Zahlen. Sie hilft beim Kürzen von Bruchtermen, beim Finden von Nullstellen und bei Grenzwerten.\n' +
      '\n' +
      '**Das Verfahren (Schritt für Schritt)**\n' +
      '1. Höchstes Glied des Dividenden durch das höchste Glied des Divisors teilen – das ist das erste Glied des Ergebnisses.\n' +
      '2. Das Ergebnisglied mit dem ganzen Divisor multiplizieren und vom Dividenden abziehen.\n' +
      '3. Mit dem Rest genauso weitermachen, bis der Grad des Rests kleiner als der des Divisors ist.\n' +
      '\n' +
      '**Ergebnisform**\n' +
      'Allgemein gilt $\\dfrac{P(x)}{Q(x)} = T(x) + \\dfrac{R(x)}{Q(x)}$ mit dem ganzen Anteil $T(x)$ und dem Rest $R(x)$ (Grad von $R$ kleiner als Grad von $Q$).\n' +
      '\n' +
      '**Wenn der Rest $0$ ist**\n' +
      'Geht die Division glatt auf, ist $Q(x)$ ein Faktor von $P(x)$: $P(x) = T(x)\\cdot Q(x)$. So zerlegt man Polynome in Faktoren.\n' +
      '\n' +
      '**Nullstellen abspalten**\n' +
      'Ist $x = a$ eine Nullstelle von $P$, so lässt sich $(x - a)$ ohne Rest abdividieren. Eine Nullstelle errät man meist durch Probieren ganzzahliger Teiler.',
    beispiele: [
      {
        szenario: 'Division ohne Rest',
        beispiele: [
          '**Aufgabe:** Teile $(x^2 - 1) : (x - 1)$.\n**Lösung:** $x^2 : x = x$; $x(x-1) = x^2 - x$; Rest $x - 1$. Dann $x : x = 1$; $1(x-1) = x-1$; Rest $0$.\n**Ergebnis:** $x + 1$.',
          '**Aufgabe:** Teile $(x^2 + 5x + 6) : (x + 2)$.\n**Lösung:** $x^2 : x = x$; abziehen lässt $3x + 6$; $3x : x = 3$; abziehen lässt $0$.\n**Ergebnis:** $x + 3$.',
          '**Aufgabe:** Teile $(x^3 - 8) : (x - 2)$.\n**Lösung:** $x^3 : x = x^2$; Rest $2x^2 - 8$; $2x^2 : x = 2x$; Rest $4x - 8$; $4x : x = 4$; Rest $0$.\n**Ergebnis:** $x^2 + 2x + 4$.',
        ],
      },
      {
        szenario: 'Division mit Rest',
        beispiele: [
          '**Aufgabe:** Teile $(x^2 + 1) : (x - 1)$.\n**Lösung:** $x^2 : x = x$; Rest $x + 1$; $x : x = 1$; Rest $2$.\n**Ergebnis:** $x + 1 + \\frac{2}{x-1}$.',
          '**Aufgabe:** Teile $(2x^2 + 3x + 1) : (x + 1)$.\n**Lösung:** $2x^2 : x = 2x$; Rest $x + 1$; $x : x = 1$; Rest $0$.\n**Ergebnis:** $2x + 1$ (Rest $0$).',
          '**Aufgabe:** Teile $(x^2) : (x + 2)$.\n**Lösung:** $x^2 : x = x$; Rest $-2x$; $-2x : x = -2$; Rest $4$.\n**Ergebnis:** $x - 2 + \\frac{4}{x+2}$.',
        ],
      },
      {
        szenario: 'Nullstelle abspalten & faktorisieren',
        beispiele: [
          '**Aufgabe:** $P(x) = x^3 - 6x^2 + 11x - 6$ hat die Nullstelle $x=1$. Spalte $(x-1)$ ab.\n**Lösung:** $(x^3-6x^2+11x-6):(x-1) = x^2 - 5x + 6$.\n**Ergebnis:** $P(x) = (x-1)(x^2-5x+6)$.',
          '**Aufgabe:** Faktorisiere $x^2 - 5x + 6$ weiter.\n**Lösung:** Nullstellen $2$ und $3$ (Summe $5$, Produkt $6$).\n**Ergebnis:** $(x-2)(x-3)$, also insgesamt $(x-1)(x-2)(x-3)$.',
          '**Aufgabe:** Prüfe, ob $x=2$ Nullstelle von $x^3-8$ ist, und kürze $\\frac{x^3-8}{x-2}$.\n**Lösung:** $2^3-8 = 0$, also Nullstelle. Polynomdivision: $x^2+2x+4$.\n**Ergebnis:** $\\frac{x^3-8}{x-2} = x^2+2x+4$.',
        ],
      },
    ],
  },

  // ===== Blatt 10–11 – Grenzwerte, Stetigkeit, Asymptotik =====
  {
    id: 'funktionsgrenzwerte',
    titel: 'Grenzwerte von Funktionen',
    inhalt:
      '**Worum geht es?**\n' +
      'Der Grenzwert einer Funktion beschreibt, welchem Wert $f(x)$ zustrebt, wenn $x$ sich einer Stelle (oder $\\pm\\infty$) annähert – auch dort, wo $f$ vielleicht gar nicht definiert ist.\n' +
      '\n' +
      '**Schreibweise**\n' +
      '$\\lim_{x \\to x_0} f(x) = L$ bedeutet: für $x$ nahe $x_0$ liegt $f(x)$ nahe $L$. Man darf $x = x_0$ ausdrücklich auslassen.\n' +
      '\n' +
      '**Einsetzen, wenn stetig**\n' +
      'Bei „braven" Funktionen (Polynome, Wurzeln, $e^x$, ...) darf man einfach $x_0$ einsetzen: $\\lim_{x\\to x_0} f(x) = f(x_0)$.\n' +
      '\n' +
      '**Unbestimmte Form $\\frac{0}{0}$**\n' +
      'Ergibt das Einsetzen $\\frac{0}{0}$, faktorisiert man Zähler und Nenner und kürzt den störenden Faktor weg, bevor man einsetzt.\n' +
      '\n' +
      '**Grenzwerte im Unendlichen**\n' +
      'Bei $x \\to \\infty$ entscheidet das Wachstum: bei Polynomquotienten kürzt man durch die höchste $x$-Potenz; $\\frac{1}{x} \\to 0$.\n' +
      '\n' +
      '**Einseitige Grenzwerte**\n' +
      'Man unterscheidet die Annäherung von rechts ($x \\to x_0^+$) und von links ($x \\to x_0^-$). Der Grenzwert existiert nur, wenn beide gleich sind.',
    beispiele: [
      {
        szenario: 'Direktes Einsetzen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{x\\to 2} (x^2 + 1)$.\n**Lösung:** Polynom, einfach einsetzen: $2^2 + 1$.\n**Ergebnis:** $5$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to 0} e^x$.\n**Lösung:** $e^x$ ist stetig: $e^0 = 1$.\n**Ergebnis:** $1$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to 4} \\sqrt{x}$.\n**Lösung:** Wurzel ist stetig: $\\sqrt{4}$.\n**Ergebnis:** $2$.',
        ],
      },
      {
        szenario: 'Unbestimmte Form 0/0',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{x\\to 2} \\frac{x^2-4}{x-2}$.\n**Lösung:** $\\frac{0}{0}$; Zähler faktorisieren: $\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 2+2$.\n**Ergebnis:** $4$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to 1} \\frac{x^2-1}{x-1}$.\n**Lösung:** $\\frac{(x+1)(x-1)}{x-1} = x+1 \\to 2$.\n**Ergebnis:** $2$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to 3} \\frac{x^2-9}{x^2-x-6}$.\n**Lösung:** Zähler $(x-3)(x+3)$, Nenner $(x-3)(x+2)$; kürzen: $\\frac{x+3}{x+2} \\to \\frac{6}{5}$.\n**Ergebnis:** $\\frac{6}{5}$.',
        ],
      },
      {
        szenario: 'Grenzwert im Unendlichen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{x\\to\\infty} \\frac{1}{x}$.\n**Lösung:** Mit wachsendem $x$ geht der Bruch gegen $0$.\n**Ergebnis:** $0$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to\\infty} \\frac{3x^2+1}{x^2+x}$.\n**Lösung:** Durch $x^2$ kürzen: $\\frac{3 + 1/x^2}{1 + 1/x} \\to \\frac{3}{1}$.\n**Ergebnis:** $3$.',
          '**Aufgabe:** Bestimme $\\lim_{x\\to\\infty} \\frac{2x+1}{x^2}$.\n**Lösung:** $\\frac{2}{x} + \\frac{1}{x^2} \\to 0 + 0$.\n**Ergebnis:** $0$.',
        ],
      },
    ],
  },
  {
    id: 'stetigkeit',
    titel: 'Stetigkeit',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Funktion ist stetig, wenn ihr Graph keine Sprünge oder Lücken hat – man kann ihn „ohne Absetzen zeichnen". Präzise wird das über Grenzwerte gefasst.\n' +
      '\n' +
      '**Definition**\n' +
      '$f$ ist stetig in $x_0$, wenn $\\lim_{x \\to x_0} f(x) = f(x_0)$ gilt: der Grenzwert existiert UND stimmt mit dem Funktionswert überein.\n' +
      '\n' +
      '**Folgenkriterium**\n' +
      '$f$ ist stetig in $x_0$ genau dann, wenn für jede Folge $x_n \\to x_0$ auch $f(x_n) \\to f(x_0)$ gilt. Damit zeigt man Unstetigkeit, indem man eine Folge findet, bei der das schiefgeht.\n' +
      '\n' +
      '**Stetige Fortsetzbarkeit**\n' +
      'Ist $f$ in $x_0$ nicht definiert, existiert aber $\\lim_{x\\to x_0} f(x) = L$ (endlich), so kann man $f$ durch $f(x_0) := L$ stetig fortsetzen (die Lücke „stopfen").\n' +
      '\n' +
      '**Bausteine**\n' +
      'Summe, Produkt, Quotient (Nenner $\\neq 0$) und Komposition stetiger Funktionen sind wieder stetig. Polynome, Wurzeln, $e^x$, $\\sin$, $\\cos$ sind überall stetig.\n' +
      '\n' +
      '**Wichtige Sätze**\n' +
      'Zwischenwertsatz: Ist $f$ stetig auf $[a,b]$, so nimmt $f$ jeden Wert zwischen $f(a)$ und $f(b)$ an. Extremwertsatz: Auf $[a,b]$ nimmt eine stetige Funktion Maximum und Minimum an.',
    beispiele: [
      {
        szenario: 'Stetigkeit prüfen',
        beispiele: [
          '**Aufgabe:** Ist $f(x) = x^2$ in $x_0 = 3$ stetig?\n**Lösung:** $\\lim_{x\\to 3} x^2 = 9 = f(3)$.\n**Ergebnis:** Ja, stetig.',
          '**Aufgabe:** Ist $f(x) = \\begin{cases} x & x < 0 \\\\ x+1 & x \\geq 0 \\end{cases}$ in $0$ stetig?\n**Lösung:** Links: $\\lim_{x\\to 0^-} x = 0$; rechts: $f(0) = 1$. Sprung!\n**Ergebnis:** Nein, unstetig (Sprungstelle).',
          '**Aufgabe:** Ist $f(x) = \\frac{1}{x}$ in $x_0 = 2$ stetig?\n**Lösung:** $\\lim_{x\\to 2}\\frac{1}{x} = \\frac{1}{2} = f(2)$ (Nenner $\\neq 0$).\n**Ergebnis:** Ja, stetig (Unstetigkeit nur bei $x=0$, wo $f$ undefiniert ist).',
        ],
      },
      {
        szenario: 'Stetige Fortsetzung',
        beispiele: [
          '**Aufgabe:** Kann $f(x) = \\frac{x^2-1}{x-1}$ in $x_0 = 1$ stetig fortgesetzt werden?\n**Lösung:** Kürzen: $f(x) = x+1$ für $x\\neq 1$; Grenzwert $2$.\n**Ergebnis:** Ja, mit $f(1) := 2$.',
          '**Aufgabe:** Welcher Wert stopft die Lücke von $\\frac{x^2-4}{x-2}$ in $x_0=2$?\n**Lösung:** $\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$.\n**Ergebnis:** $f(2) := 4$.',
          '**Aufgabe:** Bestimme $c$, sodass $f(x)=\\begin{cases}\\frac{x^2-9}{x-3} & x\\neq 3\\\\ c & x=3\\end{cases}$ stetig ist.\n**Lösung:** $\\frac{(x-3)(x+3)}{x-3} = x+3 \\to 6$.\n**Ergebnis:** $c = 6$.',
        ],
      },
      {
        szenario: 'Zwischenwertsatz',
        beispiele: [
          '**Aufgabe:** Hat $f(x) = x^3 - x - 1$ eine Nullstelle in $[1,2]$?\n**Lösung:** $f(1) = -1 < 0$, $f(2) = 5 > 0$; stetig, also wird $0$ dazwischen angenommen.\n**Ergebnis:** Ja, mindestens eine Nullstelle.',
          '**Aufgabe:** Begründe, dass $\\cos x = x$ eine Lösung hat.\n**Lösung:** $g(x) = \\cos x - x$ ist stetig, $g(0) = 1 > 0$, $g(1) = \\cos 1 - 1 < 0$.\n**Ergebnis:** Eine Lösung in $(0,1)$.',
          '**Aufgabe:** Nimmt $f(x)=x^2$ auf $[0,3]$ den Wert $5$ an?\n**Lösung:** $f(0)=0$, $f(3)=9$; $5$ liegt dazwischen, $f$ stetig.\n**Ergebnis:** Ja, bei $x=\\sqrt{5}$.',
        ],
      },
    ],
  },
  {
    id: 'landau-notation',
    titel: 'Asymptotik & O-Notation',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Landau- oder O-Notation vergleicht das Wachstum von Funktionen/Folgen für große Argumente. Sie ignoriert konstante Faktoren und kleinere Terme und zeigt nur, „wie schnell" etwas wächst.\n' +
      '\n' +
      '**Groß-O**\n' +
      '$f(n) \\in \\mathcal{O}(g(n))$ bedeutet: $f$ wächst höchstens so schnell wie $g$. Formal gibt es eine Konstante $C > 0$ und ein $n_0$ mit $|f(n)| \\leq C\\,|g(n)|$ für alle $n \\geq n_0$. $g$ ist eine obere Schranke des Wachstums.\n' +
      '\n' +
      '**Faustregel**\n' +
      'Bei Summen zählt nur der am schnellsten wachsende Term, und konstante Vorfaktoren fallen weg: $3n^2 + 5n + 7 \\in \\mathcal{O}(n^2)$.\n' +
      '\n' +
      '**Die Wachstumshierarchie**\n' +
      '$\\mathcal{O}(1) \\subset \\mathcal{O}(\\log n) \\subset \\mathcal{O}(n) \\subset \\mathcal{O}(n\\log n) \\subset \\mathcal{O}(n^2) \\subset \\mathcal{O}(n^3) \\subset \\mathcal{O}(2^n) \\subset \\mathcal{O}(n!)$.\n' +
      'Links steht das langsamere, rechts das schnellere Wachstum.\n' +
      '\n' +
      '**Praktischer Test über den Grenzwert**\n' +
      'Strebt $\\dfrac{f(n)}{g(n)}$ gegen eine endliche Zahl (auch $0$), so ist $f \\in \\mathcal{O}(g)$. Strebt der Quotient gegen $\\infty$, ist $f$ nicht in $\\mathcal{O}(g)$.\n' +
      '\n' +
      '**Wozu?**\n' +
      'In der Informatik beschreibt die O-Notation die Laufzeit von Algorithmen unabhängig von Hardware und kleinen Eingaben.',
    beispiele: [
      {
        szenario: 'Dominanten Term bestimmen',
        beispiele: [
          '**Aufgabe:** Vereinfache $4n^3 + 100n^2 + 7$ in O-Notation.\n**Lösung:** Schnellster Term $n^3$, Vorfaktor weg.\n**Ergebnis:** $\\mathcal{O}(n^3)$.',
          '**Aufgabe:** Vereinfache $5n + \\log n$.\n**Lösung:** $n$ wächst schneller als $\\log n$.\n**Ergebnis:** $\\mathcal{O}(n)$.',
          '**Aufgabe:** Vereinfache $2^n + n^{10}$.\n**Lösung:** Exponentiell schlägt jedes Polynom.\n**Ergebnis:** $\\mathcal{O}(2^n)$.',
        ],
      },
      {
        szenario: 'O-Beziehung nachweisen',
        beispiele: [
          '**Aufgabe:** Zeige $3n + 5 \\in \\mathcal{O}(n)$.\n**Lösung:** Für $n \\geq 5$ ist $3n+5 \\leq 3n + n = 4n$, also $C = 4$.\n**Ergebnis:** Mit $C=4$, $n_0=5$ erfüllt – $3n+5 \\in \\mathcal{O}(n)$.',
          '**Aufgabe:** Gilt $n^2 \\in \\mathcal{O}(n)$?\n**Lösung:** $\\frac{n^2}{n} = n \\to \\infty$; keine Konstante hält $n^2 \\leq Cn$.\n**Ergebnis:** Nein.',
          '**Aufgabe:** Gilt $100n \\in \\mathcal{O}(n^2)$?\n**Lösung:** $\\frac{100n}{n^2} = \\frac{100}{n} \\to 0$ (endlich).\n**Ergebnis:** Ja, $100n \\in \\mathcal{O}(n^2)$.',
        ],
      },
      {
        szenario: 'Wachstum vergleichen',
        beispiele: [
          '**Aufgabe:** Was wächst schneller: $n^2$ oder $n\\log n$?\n**Lösung:** $\\frac{n^2}{n\\log n} = \\frac{n}{\\log n} \\to \\infty$.\n**Ergebnis:** $n^2$ wächst schneller.',
          '**Aufgabe:** Was wächst schneller: $2^n$ oder $n^2$?\n**Lösung:** Exponentielles Wachstum überholt jedes Polynom.\n**Ergebnis:** $2^n$ wächst schneller.',
          '**Aufgabe:** Ordne $n!,\\ n^2,\\ \\log n,\\ n$ nach Wachstum.\n**Lösung:** Hierarchie anwenden.\n**Ergebnis:** $\\log n < n < n^2 < n!$.',
        ],
      },
    ],
  },

  // ===== Blatt 12 – Spezielle Funktionen =====
  {
    id: 'exp-log',
    titel: 'Exponential- & Logarithmusfunktion',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Exponentialfunktion beschreibt Wachstums- und Zerfallsprozesse; der Logarithmus ist ihre Umkehrung. Beide gehören zu den wichtigsten Funktionen der Analysis.\n' +
      '\n' +
      '**Exponentialfunktion**\n' +
      '$\\exp(x) = e^x$ mit der eulerschen Zahl $e \\approx 2{,}71828$. Sie ist überall positiv und wächst schneller als jedes Polynom.\n' +
      '\n' +
      '**Rechenregeln (Exponenten)**\n' +
      '$e^{x+y} = e^x \\cdot e^y$,  $\\;(e^x)^y = e^{x\\cdot y}$,  $\\;e^0 = 1$,  $\\;e^{-x} = \\dfrac{1}{e^x}$.\n' +
      '\n' +
      '**Logarithmus**\n' +
      'Der natürliche Logarithmus $\\ln(x)$ ist die Umkehrung von $e^x$: $\\ln(e^x) = x$ und $e^{\\ln x} = x$ (für $x > 0$). Rechenregeln:\n' +
      '$\\ln(x\\cdot y) = \\ln x + \\ln y$,  $\\;\\ln\\!\\left(\\dfrac{x}{y}\\right) = \\ln x - \\ln y$,  $\\;\\ln(x^n) = n\\,\\ln x$.\n' +
      '\n' +
      '**Allgemeine Potenz und Basiswechsel**\n' +
      'Für $a > 0$ definiert man $a^x = e^{x\\,\\ln a}$. Der Logarithmus zur Basis $a$ ist $\\log_a(x) = \\dfrac{\\ln x}{\\ln a}$.\n' +
      '\n' +
      '**Ableitungen (Vorschau)**\n' +
      '$(e^x)\' = e^x$ (die einzige Funktion, die ihre eigene Ableitung ist) und $(\\ln x)\' = \\dfrac{1}{x}$.',
    beispiele: [
      {
        szenario: 'Exponentialregeln',
        beispiele: [
          '**Aufgabe:** Vereinfache $e^2 \\cdot e^3$.\n**Lösung:** Exponenten addieren: $e^{2+3}$.\n**Ergebnis:** $e^5$.',
          '**Aufgabe:** Vereinfache $\\frac{e^5}{e^2}$.\n**Lösung:** Exponenten subtrahieren: $e^{5-2}$.\n**Ergebnis:** $e^3$.',
          '**Aufgabe:** Vereinfache $(e^x)^3$.\n**Lösung:** Exponenten multiplizieren: $e^{3x}$.\n**Ergebnis:** $e^{3x}$.',
        ],
      },
      {
        szenario: 'Logarithmusregeln',
        beispiele: [
          '**Aufgabe:** Vereinfache $\\ln(e^4)$.\n**Lösung:** $\\ln$ und $\\exp$ heben sich auf.\n**Ergebnis:** $4$.',
          '**Aufgabe:** Schreibe $\\ln(8)$ als Vielfaches von $\\ln 2$.\n**Lösung:** $8 = 2^3$, also $\\ln(2^3) = 3\\ln 2$.\n**Ergebnis:** $3\\ln 2$.',
          '**Aufgabe:** Vereinfache $\\ln 6 - \\ln 2$.\n**Lösung:** $\\ln\\frac{6}{2} = \\ln 3$.\n**Ergebnis:** $\\ln 3$.',
        ],
      },
      {
        szenario: 'Gleichungen & Basiswechsel',
        beispiele: [
          '**Aufgabe:** Löse $e^x = 5$ nach $x$.\n**Lösung:** Logarithmieren: $x = \\ln 5$.\n**Ergebnis:** $x = \\ln 5 \\approx 1{,}609$.',
          '**Aufgabe:** Berechne $\\log_2 8$.\n**Lösung:** Welche Potenz von $2$ ergibt $8$? $2^3 = 8$.\n**Ergebnis:** $3$.',
          '**Aufgabe:** Schreibe $2^x$ mit der Basis $e$.\n**Lösung:** Allgemeine Potenz: $2^x = e^{x\\ln 2}$.\n**Ergebnis:** $e^{x\\ln 2}$.',
        ],
      },
    ],
  },

  // ===== Blatt 13 – Differentiation =====
  {
    id: 'ableitungsregeln',
    titel: 'Ableitungsregeln',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Ableitung $f\'(x)$ misst die momentane Änderungsrate von $f$ – anschaulich die Steigung der Tangente an den Graphen. Die Ableitungsregeln liefern sie ohne Grenzwertrechnung.\n' +
      '\n' +
      '**Der Differenzenquotient (Grundlage)**\n' +
      '$f\'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h}$. Der Bruch ist die Steigung der Sekante; im Grenzwert $h \\to 0$ wird daraus die Tangentensteigung.\n' +
      '\n' +
      '**Grundableitungen**\n' +
      '$(x^n)\' = n\\,x^{n-1}$,  $\\;(e^x)\' = e^x$,  $\\;(\\ln x)\' = \\dfrac{1}{x}$,  $\\;(\\sin x)\' = \\cos x$,  $\\;(\\cos x)\' = -\\sin x$. Konstanten fallen weg: $(c)\' = 0$.\n' +
      '\n' +
      '**Summen- & Faktorregel**\n' +
      '$(f + g)\' = f\' + g\'$ und $(c\\cdot f)\' = c\\cdot f\'$.\n' +
      '\n' +
      '**Produktregel**\n' +
      '$(f\\cdot g)\' = f\'\\cdot g + f\\cdot g\'$.\n' +
      '\n' +
      '**Quotientenregel**\n' +
      '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'\\cdot g - f\\cdot g\'}{g^2}$.\n' +
      '\n' +
      '**Kettenregel**\n' +
      '$(g \\circ f)\'(x) = g\'(f(x))\\cdot f\'(x)$ – „äußere mal innere Ableitung". Sie ist der Schlüssel bei verschachtelten Funktionen.',
    beispiele: [
      {
        szenario: 'Grundableitungen & Summenregel',
        beispiele: [
          '**Aufgabe:** Leite $f(x) = x^4$ ab.\n**Lösung:** $(x^n)\' = nx^{n-1}$: $4x^3$.\n**Ergebnis:** $f\'(x) = 4x^3$.',
          '**Aufgabe:** Leite $f(x) = 3x^2 + 5x - 7$ ab.\n**Lösung:** Gliedweise: $6x + 5 - 0$.\n**Ergebnis:** $f\'(x) = 6x + 5$.',
          '**Aufgabe:** Leite $f(x) = \\sqrt{x}$ ab.\n**Lösung:** $\\sqrt{x} = x^{1/2}$, also $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.\n**Ergebnis:** $f\'(x) = \\frac{1}{2\\sqrt{x}}$.',
        ],
      },
      {
        szenario: 'Produkt- & Quotientenregel',
        beispiele: [
          '**Aufgabe:** Leite $f(x) = x^2\\cdot e^x$ ab.\n**Lösung:** Produktregel: $2x\\cdot e^x + x^2\\cdot e^x = e^x(2x + x^2)$.\n**Ergebnis:** $f\'(x) = e^x(x^2 + 2x)$.',
          '**Aufgabe:** Leite $f(x) = \\frac{x}{x+1}$ ab.\n**Lösung:** Quotientenregel: $\\frac{1\\cdot(x+1) - x\\cdot 1}{(x+1)^2} = \\frac{1}{(x+1)^2}$.\n**Ergebnis:** $f\'(x) = \\frac{1}{(x+1)^2}$.',
          '**Aufgabe:** Leite $f(x) = x\\ln x$ ab.\n**Lösung:** Produktregel: $1\\cdot\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$.\n**Ergebnis:** $f\'(x) = \\ln x + 1$.',
        ],
      },
      {
        szenario: 'Kettenregel',
        beispiele: [
          '**Aufgabe:** Leite $f(x) = (2x+1)^3$ ab.\n**Lösung:** Äußere: $3(\\,\\cdot\\,)^2$, innere $2$: $3(2x+1)^2\\cdot 2$.\n**Ergebnis:** $f\'(x) = 6(2x+1)^2$.',
          '**Aufgabe:** Leite $f(x) = e^{x^2}$ ab.\n**Lösung:** Äußere $e^{(\\cdot)}$, innere $2x$: $e^{x^2}\\cdot 2x$.\n**Ergebnis:** $f\'(x) = 2x\\,e^{x^2}$.',
          '**Aufgabe:** Leite $f(x) = \\sqrt{x^2+1}$ ab.\n**Lösung:** Äußere $\\frac{1}{2\\sqrt{\\cdot}}$, innere $2x$: $\\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}}$.\n**Ergebnis:** $f\'(x) = \\frac{x}{\\sqrt{x^2+1}}$.',
        ],
      },
    ],
  },
]
