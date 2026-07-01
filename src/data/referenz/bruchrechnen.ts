import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'bruchrechnen',
  titel: 'Bruchrechnen',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein Bruch beschreibt einen Teil eines Ganzen oder das Ergebnis einer Division, die nicht glatt aufgeht. Statt „$3$ geteilt durch $7$" schreibt man einfach $\\frac{3}{7}$ und rechnet exakt weiter – ohne Rundungsfehler. Bruchrechnen ist die Grundlage für fast alles Weitere: Gleichungen lösen, Termumformungen, Wahrscheinlichkeiten.\n' +
    '\n' +
    '**Was ist ein Bruch?**\n' +
    'Ein Bruch hat die Form $\\frac{a}{b}$ mit dem **Zähler** $a$ (oben, „wie viele Teile") und dem **Nenner** $b$ (unten, „in wie viele Teile das Ganze zerlegt ist"). Der Bruchstrich bedeutet „geteilt durch": $\\frac{a}{b} = a : b$. Wichtigste Bedingung: der **Nenner darf nie 0 sein** ($b \\neq 0$), denn Teilen durch $0$ ist nicht definiert. Ist $a$ ein Vielfaches von $b$, ergibt der Bruch eine ganze Zahl (z. B. $\\frac{6}{3} = 2$).\n' +
    '\n' +
    '**Erweitern und Kürzen**\n' +
    'Multipliziert man Zähler **und** Nenner mit derselben Zahl $k \\neq 0$, ändert sich der Wert nicht: $\\frac{a}{b} = \\frac{a \\cdot k}{b \\cdot k}$. Das nennt man **Erweitern** (Brüche größer/teilbarer machen) bzw. rückwärts **Kürzen** (gemeinsame Faktoren wegteilen). Kürzen ist ein eigenes Thema (siehe Karte „Kürzen"); hier brauchen wir das Erweitern vor allem, um zwei Brüche auf denselben Nenner zu bringen.\n' +
    '\n' +
    '**Addition und Subtraktion – warum ein gemeinsamer Nenner?**\n' +
    'Addieren darf man nur, was gleich groß zerteilt ist: $\\frac{2}{5}$ und $\\frac{1}{5}$ sind beide „Fünftel", also ist $\\frac{2}{5}+\\frac{1}{5} = \\frac{3}{5}$. Sind die Nenner verschieden, sind die Stücke unterschiedlich groß und nicht direkt zählbar – man muss sie erst auf eine gemeinsame Stückgröße bringen, den **gemeinsamen Nenner**. Allgemein:\n' +
    '$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot d \\pm c \\cdot b}{b \\cdot d}$\n' +
    'Bei **gleichem** Nenner zählt man einfach die Zähler zusammen: $\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}$.\n' +
    '\n' +
    '**Wie rechnet man Schritt für Schritt (Addition)?**\n' +
    '1. Gemeinsamen Nenner finden – am bequemsten den **Hauptnenner** (kleinstes gemeinsames Vielfaches der Nenner).\n' +
    '2. Jeden Bruch durch Erweitern auf diesen Nenner bringen.\n' +
    '3. Zähler addieren bzw. subtrahieren, Nenner beibehalten.\n' +
    '4. Ergebnis so weit wie möglich kürzen.\n' +
    'Notfalls geht immer das **Produkt der Nenner** $b \\cdot d$ als gemeinsamer Nenner – dann muss man am Ende oft mehr kürzen.\n' +
    '\n' +
    '**Multiplikation**\n' +
    'Brüche werden multipliziert, indem man **Zähler mal Zähler** und **Nenner mal Nenner** rechnet:\n' +
    '$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$.\n' +
    'Ein gemeinsamer Nenner ist hier **nicht** nötig. Tipp: vor dem Ausmultiplizieren über Kreuz kürzen spart Arbeit.\n' +
    '\n' +
    '**Division – mit dem Kehrwert**\n' +
    'Der **Kehrwert** von $\\frac{c}{d}$ ist $\\frac{d}{c}$ (Zähler und Nenner vertauscht). Durch einen Bruch teilen heißt: mit seinem Kehrwert multiplizieren:\n' +
    '$\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$.\n' +
    'Merksatz: „Durch einen Bruch teilt man, indem man mit dem Kehrbruch malnimmt." (Dabei muss $c \\neq 0$ sein, sonst gäbe es keinen Kehrwert.)\n' +
    '\n' +
    '**Doppelbrüche**\n' +
    'Ein Doppelbruch ist ein Bruch, dessen Zähler und/oder Nenner selbst ein Bruch ist – nichts anderes als eine Division zweier Brüche:\n' +
    '$\\dfrac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$.\n' +
    'Faustregel: Der **äußere** Bruchstrich trennt „oben geteilt durch unten"; man dreht den unteren Bruch um und multipliziert.\n' +
    '\n' +
    '**Überblick (alle vier Grundrechenarten)**\n' +
    '| Rechenart | Regel | Gemeinsamer Nenner nötig? |\n' +
    '|---|---|---|\n' +
    '| Addition / Subtraktion | $\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm cb}{bd}$ | ja |\n' +
    '| Multiplikation | $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$ | nein |\n' +
    '| Division | $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$ | nein (Kehrwert) |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Zähler **und** Nenner einfach addieren ($\\frac{a}{b}+\\frac{c}{d} \\neq \\frac{a+c}{b+d}$) – das ist falsch.\n' +
    '• Beim Multiplizieren unnötig einen gemeinsamen Nenner suchen – nicht nötig.\n' +
    '• Beim Dividieren den **falschen** Bruch umdrehen: gekehrt wird immer der Bruch **hinter** dem Geteiltzeichen.\n' +
    '• Am Ende das Kürzen vergessen.',
  beispiele: [
    {
      szenario: 'Addition / Subtraktion (gemeinsamer Nenner)',
      beispiele: [
        '**Aufgabe:** Berechne $\\frac{3}{7} + \\frac{7}{3}$.\n**Lösung:** Verschiedene Nenner $7$ und $3$. Hauptnenner $21$. Erweitern: $\\frac{3}{7} = \\frac{3 \\cdot 3}{21} = \\frac{9}{21}$ und $\\frac{7}{3} = \\frac{7 \\cdot 7}{21} = \\frac{49}{21}$. Zähler addieren: $\\frac{9 + 49}{21} = \\frac{58}{21}$.\n**Ergebnis:** $\\frac{58}{21}$ (nicht weiter kürzbar).',
        '**Aufgabe:** Berechne $\\frac{5}{6} - \\frac{1}{4}$.\n**Lösung:** Hauptnenner von $6$ und $4$ ist $12$ (kgV, nicht $24$). Erweitern: $\\frac{5}{6} = \\frac{10}{12}$, $\\frac{1}{4} = \\frac{3}{12}$. Subtrahieren: $\\frac{10 - 3}{12} = \\frac{7}{12}$.\n**Ergebnis:** $\\frac{7}{12}$.',
        '**Aufgabe:** Vereinfache $-\\frac{a+b}{c} - \\frac{a-b}{c}$.\n**Lösung:** Gleicher Nenner $c$, also nur die Zähler verrechnen: $-(a+b) - (a-b) = -a - b - a + b = -2a$. Über dem Nenner $c$: $\\frac{-2a}{c}$.\n**Ergebnis:** $-\\frac{2a}{c}$.',
      ],
    },
    {
      szenario: 'Multiplikation (auch gemischt mit +/−)',
      beispiele: [
        '**Aufgabe:** Berechne $\\frac{2}{3} \\cdot \\frac{9}{10}$.\n**Lösung:** Zähler mal Zähler, Nenner mal Nenner: $\\frac{2 \\cdot 9}{3 \\cdot 10} = \\frac{18}{30}$. Kürzen mit $6$: $\\frac{18}{30} = \\frac{3}{5}$. (Schneller: vorher $\\frac{9}{3}=3$ und $\\frac{2}{10}=\\frac{1}{5}$ kürzen.)\n**Ergebnis:** $\\frac{3}{5}$.',
        '**Aufgabe:** Berechne $\\left(\\frac{1}{3} + \\frac{2}{9}\\right) \\cdot \\left(\\frac{11}{8} - \\frac{1}{4}\\right)$.\n**Lösung:** Erst die Klammern (Punkt vor Strich gilt auch hier): $\\frac{1}{3} + \\frac{2}{9} = \\frac{3}{9} + \\frac{2}{9} = \\frac{5}{9}$ und $\\frac{11}{8} - \\frac{1}{4} = \\frac{11}{8} - \\frac{2}{8} = \\frac{9}{8}$. Dann multiplizieren: $\\frac{5}{9} \\cdot \\frac{9}{8} = \\frac{5 \\cdot 9}{9 \\cdot 8}$, die $9$ kürzt sich.\n**Ergebnis:** $\\frac{5}{8}$.',
        '**Aufgabe:** Berechne $\\frac{3}{4} \\cdot 8$.\n**Lösung:** Die ganze Zahl als Bruch schreiben: $8 = \\frac{8}{1}$. Dann $\\frac{3}{4} \\cdot \\frac{8}{1} = \\frac{3 \\cdot 8}{4 \\cdot 1} = \\frac{24}{4}$, kürzen mit $4$.\n**Ergebnis:** $6$.',
      ],
    },
    {
      szenario: 'Division mit Kehrwert',
      beispiele: [
        '**Aufgabe:** Berechne $\\frac{4}{5} : \\frac{2}{3}$.\n**Lösung:** Mit dem Kehrwert des zweiten Bruchs multiplizieren: Kehrwert von $\\frac{2}{3}$ ist $\\frac{3}{2}$. Also $\\frac{4}{5} \\cdot \\frac{3}{2} = \\frac{4 \\cdot 3}{5 \\cdot 2} = \\frac{12}{10}$, kürzen mit $2$.\n**Ergebnis:** $\\frac{6}{5}$.',
        '**Aufgabe:** Berechne $\\left(\\frac{13}{2} : \\frac{169}{12}\\right) : \\frac{3}{26}$ (Hinweis: $13 \\cdot 13 = 169$).\n**Lösung:** Innere Klammer: $\\frac{13}{2} \\cdot \\frac{12}{169} = \\frac{13 \\cdot 12}{2 \\cdot 169}$. Mit $13$ kürzen ($169 = 13 \\cdot 13$): $= \\frac{12}{2 \\cdot 13} = \\frac{6}{13}$. Dann $\\frac{6}{13} : \\frac{3}{26} = \\frac{6}{13} \\cdot \\frac{26}{3} = \\frac{6 \\cdot 26}{13 \\cdot 3}$; $\\frac{26}{13}=2$ und $\\frac{6}{3}=2$.\n**Ergebnis:** $4$.',
        '**Aufgabe:** Berechne $\\frac{3}{4} : 6$.\n**Lösung:** Die $6$ als Bruch: $6 = \\frac{6}{1}$, Kehrwert $\\frac{1}{6}$. Also $\\frac{3}{4} \\cdot \\frac{1}{6} = \\frac{3}{24}$, kürzen mit $3$.\n**Ergebnis:** $\\frac{1}{8}$.',
      ],
    },
    {
      szenario: 'Doppelbrüche',
      beispiele: [
        '**Aufgabe:** Vereinfache $\\dfrac{\\frac{3}{4}}{\\frac{2}{5}}$.\n**Lösung:** Der äußere Bruchstrich heißt „oben geteilt durch unten": $\\frac{3}{4} : \\frac{2}{5} = \\frac{3}{4} \\cdot \\frac{5}{2} = \\frac{15}{8}$.\n**Ergebnis:** $\\frac{15}{8}$.',
        '**Aufgabe:** Vereinfache $\\dfrac{\\frac{5}{6}}{10}$.\n**Lösung:** Unten steht die ganze Zahl $10 = \\frac{10}{1}$. Also $\\frac{5}{6} : \\frac{10}{1} = \\frac{5}{6} \\cdot \\frac{1}{10} = \\frac{5}{60}$, kürzen mit $5$.\n**Ergebnis:** $\\frac{1}{12}$.',
        '**Aufgabe:** Vereinfache $\\dfrac{2}{\\frac{4}{7}}$.\n**Lösung:** Oben die ganze Zahl $2 = \\frac{2}{1}$, unten $\\frac{4}{7}$. Also $\\frac{2}{1} : \\frac{4}{7} = \\frac{2}{1} \\cdot \\frac{7}{4} = \\frac{14}{4}$, kürzen mit $2$.\n**Ergebnis:** $\\frac{7}{2}$.',
      ],
    },
  ],
}
