import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'logik-operatoren',
  titel: 'Aussagenlogik & Wahrheitstafeln',
  inhalt:
    '**Worum geht es?**\n' +
    'Mathematik arbeitet mit Aussagen, die entweder wahr oder falsch sind. Aus einfachen Aussagen baut man mit festen Verknüpfungen (Junktoren) größere Aussagen zusammen. Damit man bei jeder Verknüpfung exakt weiß, was herauskommt, legt man ihre Bedeutung in einer Wahrheitstafel fest. So lässt sich jeder noch so verschachtelte logische Ausdruck mechanisch auswerten und auf Allgemeingültigkeit prüfen.\n' +
    '\n' +
    '**Was ist eine Aussage?**\n' +
    'Eine **(mathematische) Aussage** beschreibt einen Sachverhalt, dem man genau einen **Wahrheitswert** zuordnen kann: **wahr** (Kürzel $w$) oder **falsch** (Kürzel $f$). Ein drittes dazwischen gibt es nicht.\n' +
    'Beispiel: $A$: „2 ist eine gerade Zahl." ist wahr ($w$); $B$: „2 ist eine ungerade Zahl." ist falsch ($f$). Fragen oder Aufforderungen („Wie spät ist es?") sind keine Aussagen, weil man ihnen kein $w$ oder $f$ geben kann.\n' +
    '\n' +
    '**Die fünf Junktoren**\n' +
    'Aus Aussagen $A$ und $B$ bildet man neue Aussagen mit den **Junktoren** $\\neg$ (nicht), $\\wedge$ (und), $\\vee$ (oder), $\\Rightarrow$ (wenn-dann) und $\\Leftrightarrow$ (genau dann, wenn). Der Wahrheitswert der neuen Aussage hängt nur von den Wahrheitswerten von $A$ und $B$ ab – festgelegt durch die folgenden Wahrheitstafeln.\n' +
    '\n' +
    '**Negation $\\neg A$ (nicht)**\n' +
    'Sprechweise: „A gilt nicht." Die Negation dreht den Wahrheitswert genau um.\n' +
    '| $A$ | $\\neg A$ |\n' +
    '|---|---|\n' +
    '| w | f |\n' +
    '| f | w |\n' +
    '\n' +
    '**Konjunktion $A \\wedge B$ (und)**\n' +
    'Sprechweise: „A und B (gelten)" bzw. „sowohl A als auch B". Nur wahr, wenn **beide** Teilaussagen wahr sind.\n' +
    '| $A$ | $B$ | $A \\wedge B$ |\n' +
    '|---|---|---|\n' +
    '| w | w | w |\n' +
    '| w | f | f |\n' +
    '| f | w | f |\n' +
    '| f | f | f |\n' +
    '\n' +
    '**Disjunktion $A \\vee B$ (oder)**\n' +
    'Sprechweise: „A oder B (gilt)". Wahr, sobald **mindestens eine** Teilaussage wahr ist. Achtung: Das ist ein **nicht ausschließendes** „oder" – auch wenn $A$ und $B$ beide wahr sind, ist $A \\vee B$ wahr.\n' +
    '| $A$ | $B$ | $A \\vee B$ |\n' +
    '|---|---|---|\n' +
    '| w | w | w |\n' +
    '| w | f | w |\n' +
    '| f | w | w |\n' +
    '| f | f | f |\n' +
    '\n' +
    '**Implikation $A \\Rightarrow B$ (wenn-dann)**\n' +
    'Sprechweise: „Wenn A, dann B"; „aus A folgt B"; „A ist hinreichend für B"; „B ist notwendig für A". Sie ist **nur falsch**, wenn $A$ wahr ist, $B$ aber falsch (eine wahre Voraussetzung darf nicht zu einer falschen Folgerung führen). Ist $A$ falsch, so ist $A \\Rightarrow B$ stets wahr (man sagt: aus Falschem folgt Beliebiges).\n' +
    '| $A$ | $B$ | $A \\Rightarrow B$ |\n' +
    '|---|---|---|\n' +
    '| w | w | w |\n' +
    '| w | f | f |\n' +
    '| f | w | w |\n' +
    '| f | f | w |\n' +
    '\n' +
    'Merke: Die mathematische Implikation kümmert sich **nicht um Kausalität** – ein inhaltlicher Zusammenhang zwischen $A$ und $B$ ist nicht nötig.\n' +
    '\n' +
    '**Äquivalenz $A \\Leftrightarrow B$ (genau dann, wenn)**\n' +
    'Sprechweise: „A genau dann, wenn B"; „A dann und nur dann, wenn B"; „A ist notwendig und hinreichend für B". Definiert als $(A \\Rightarrow B) \\wedge (B \\Rightarrow A)$. Wahr, wenn $A$ und $B$ **denselben** Wahrheitswert haben.\n' +
    '| $A$ | $B$ | $A \\Leftrightarrow B$ |\n' +
    '|---|---|---|\n' +
    '| w | w | w |\n' +
    '| w | f | f |\n' +
    '| f | w | f |\n' +
    '| f | f | w |\n' +
    '\n' +
    '**Bindungsstärke (Vorrangregeln)**\n' +
    'Damit man Klammern sparen kann, gilt eine feste Reihenfolge: $\\neg$ bindet am stärksten, dann $\\wedge$, dann $\\vee$, zuletzt $\\Rightarrow$ und $\\Leftrightarrow$. Also bindet **Negation vor Und vor Oder vor Implikation**.\n' +
    'Beispiel: $\\neg A \\wedge B$ bedeutet $(\\neg A) \\wedge B$ (nicht $\\neg(A \\wedge B)$), und $A \\wedge B \\vee C$ bedeutet $(A \\wedge B) \\vee C$. Im Zweifel **immer Klammern setzen** – das ist nie falsch.\n' +
    '\n' +
    '**Wie füllt man eine Wahrheitstafel systematisch aus?**\n' +
    '1. Zähle die vorkommenden **Grundaussagen** (Variablen). Bei $n$ Variablen hat die Tafel $2^n$ Zeilen (1 Variable: 2 Zeilen, 2 Variablen: 4 Zeilen, 3 Variablen: 8 Zeilen).\n' +
    '2. Trage links **alle** Wahrheitswert-Kombinationen ein (Schema: in der ersten Spalte oben die $w$, unten die $f$ halbieren, in der nächsten Spalte schneller wechseln).\n' +
    '3. Lege für jede **Teilformel** eine Hilfsspalte an, von innen nach außen (erst $\\neg A$, dann $A \\wedge B$, …), und beachte dabei die Bindungsstärke.\n' +
    '4. Berechne jede Hilfsspalte Zeile für Zeile aus den vorherigen Spalten, bis die **Gesamtformel** in der letzten Spalte steht.\n' +
    '\n' +
    '**Tautologie und Kontradiktion**\n' +
    'Eine **Tautologie** ist eine Formel, die in **jeder** Zeile der Wahrheitstafel wahr ist (immer $w$), egal welche Werte die Variablen haben – z. B. $A \\vee \\neg A$. Eine **Kontradiktion** ist eine Formel, die in **jeder** Zeile falsch ist (immer $f$) – z. B. $A \\wedge \\neg A$. Alles dazwischen (mal $w$, mal $f$) heißt **erfüllbar**, aber weder Tautologie noch Kontradiktion. Stimmen die letzten Spalten zweier Formeln in **allen** Zeilen überein, nennt man die Formeln **äquivalent**; genau dann ist auch die Äquivalenz der beiden eine Tautologie.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Das „oder" ausschließend deuten: $A \\vee B$ ist auch bei zwei wahren Aussagen wahr.\n' +
    '• Die Implikation: $A \\Rightarrow B$ ist bei falschem $A$ wahr, nicht falsch.\n' +
    '• Bindungsstärke ignorieren: $\\neg A \\wedge B$ ist nicht dasselbe wie $\\neg(A \\wedge B)$.\n' +
    '• Zeilen vergessen: bei $n$ Variablen müssen es genau $2^n$ sein.',
  beispiele: [
    {
      szenario: 'Junktor direkt auswerten',
      beispiele: [
        '**Aufgabe:** $A$: „2 ist gerade" ($w$), $B$: „3 ist gerade" ($f$). Bestimme den Wahrheitswert von $A \\wedge B$.\n**Lösung:** $A \\wedge B$ ist nur wahr, wenn beide wahr sind. Hier ist $A = w$, aber $B = f$, also nicht beide.\n**Ergebnis:** $A \\wedge B = f$.',
        '**Aufgabe:** Mit demselben $A$ ($w$) und $B$ ($f$): Bestimme $A \\vee B$.\n**Lösung:** Die Disjunktion ist wahr, sobald mindestens eine Aussage wahr ist. $A = w$ genügt bereits.\n**Ergebnis:** $A \\vee B = w$.',
        '**Aufgabe:** Bestimme den Wahrheitswert von $\\neg A$ für $A$: „2 ist gerade" ($w$).\n**Lösung:** Die Negation dreht den Wert um: aus $w$ wird $f$.\n**Ergebnis:** $\\neg A = f$, in Worten „Es gilt nicht, dass 2 gerade ist."',
      ],
    },
    {
      szenario: 'Implikation verstehen',
      beispiele: [
        '**Aufgabe:** Ist die Aussage „Wenn $2 + 2 = 4$, dann ist $2 + 3 = 5$" wahr?\n**Lösung:** Voraussetzung $A$ ist wahr ($2+2=4$), Folgerung $B$ ist wahr ($2+3=5$). Zeile $w, w$ der Implikationstafel liefert $w$.\n**Ergebnis:** wahr.',
        '**Aufgabe:** Ist „Wenn $2 + 2 = 4$, dann ist $2 + 3 = 100$" wahr?\n**Lösung:** Hier ist $A = w$, aber $B = f$. Das ist der einzige Fall, in dem die Implikation falsch ist.\n**Ergebnis:** falsch.',
        '**Aufgabe:** Ist „Wenn $2 + 2 = 3$, dann ist $2 + 3 = 100$" wahr?\n**Lösung:** Die Voraussetzung $A$ ist falsch ($2+2 \\neq 3$). Bei falschem $A$ ist die Implikation immer wahr, egal was $B$ sagt.\n**Ergebnis:** wahr (aus Falschem folgt Beliebiges).',
      ],
    },
    {
      szenario: 'Zusammengesetzten Ausdruck mit Wahrheitstafel',
      beispiele: [
        '**Aufgabe:** Stelle die Wahrheitstafel von $\\neg(A \\wedge B)$ auf.\n**Lösung:** Erst die Hilfsspalte $A \\wedge B$, dann negieren. Bei 2 Variablen sind es 4 Zeilen.\n| $A$ | $B$ | $A \\wedge B$ | $\\neg(A \\wedge B)$ |\n|---|---|---|---|\n| w | w | w | f |\n| w | f | f | w |\n| f | w | f | w |\n| f | f | f | w |\n**Ergebnis:** Die letzte Spalte ist $f, w, w, w$.',
        '**Aufgabe:** Stelle die Wahrheitstafel von $\\neg A \\vee \\neg B$ auf (beachte: $\\neg$ bindet vor $\\vee$).\n**Lösung:** Hilfsspalten $\\neg A$ und $\\neg B$, dann mit $\\vee$ verknüpfen.\n| $A$ | $B$ | $\\neg A$ | $\\neg B$ | $\\neg A \\vee \\neg B$ |\n|---|---|---|---|---|\n| w | w | f | f | f |\n| w | f | f | w | w |\n| f | w | w | f | w |\n| f | f | w | w | w |\n**Ergebnis:** Die letzte Spalte $f, w, w, w$ stimmt mit der von $\\neg(A \\wedge B)$ überein – beide Formeln sind also äquivalent (Regel von De Morgan).',
        '**Aufgabe:** Werte $\\neg A \\wedge B$ für $A = w$, $B = w$ aus.\n**Lösung:** Wegen der Bindungsstärke ist das $(\\neg A) \\wedge B$. Erst $\\neg A = f$, dann $f \\wedge w$. Eine Konjunktion mit einem $f$ ist $f$.\n**Ergebnis:** $\\neg A \\wedge B = f$.',
      ],
    },
    {
      szenario: 'Tautologie oder Kontradiktion?',
      beispiele: [
        '**Aufgabe:** Ist $A \\vee \\neg A$ eine Tautologie?\n**Lösung:** Tafel aufstellen und prüfen, ob die Schlussspalte überall $w$ ist.\n| $A$ | $\\neg A$ | $A \\vee \\neg A$ |\n|---|---|---|\n| w | f | w |\n| f | w | w |\n**Ergebnis:** Ja, in jeder Zeile $w$ – eine Tautologie (Satz vom ausgeschlossenen Dritten).',
        '**Aufgabe:** Ist $A \\wedge \\neg A$ eine Kontradiktion?\n**Lösung:** Tafel aufstellen und prüfen, ob die Schlussspalte überall $f$ ist.\n| $A$ | $\\neg A$ | $A \\wedge \\neg A$ |\n|---|---|---|\n| w | f | f |\n| f | w | f |\n**Ergebnis:** Ja, in jeder Zeile $f$ – eine Kontradiktion.',
        '**Aufgabe:** Ist $(A \\Rightarrow B) \\vee A$ eine Tautologie?\n**Lösung:** Spalten $A \\Rightarrow B$ und dann mit $A$ verodern.\n| $A$ | $B$ | $A \\Rightarrow B$ | $(A \\Rightarrow B) \\vee A$ |\n|---|---|---|---|\n| w | w | w | w |\n| w | f | f | w |\n| f | w | w | w |\n| f | f | w | w |\n**Ergebnis:** Die Schlussspalte ist überall $w$ – ja, eine Tautologie.',
      ],
    },
  ],
}
