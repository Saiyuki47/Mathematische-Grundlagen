import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'logik-aequivalenzen',
  titel: 'Logische Äquivalenzen',
  inhalt:
    '**Worum geht es?**\n' +
    'Zwei aussagenlogische Formeln heißen **logisch äquivalent**, wenn sie für jede Belegung der Teilaussagen denselben Wahrheitswert haben – also dieselbe Wahrheitstafel besitzen. Man schreibt dann $F \\equiv G$. Äquivalenzen sind die Rechenregeln der Logik: Mit ihnen formt man komplizierte Ausdrücke in einfachere um (z. B. in der Schaltungstechnik) und stellt Beweise auf eine handlichere Form um.\n' +
    '\n' +
    '**Wahrheitswerte und Verknüpfungen**\n' +
    'Eine **Aussage** ist ein Satz, dem genau ein Wahrheitswert wahr ($w$) oder falsch ($f$) zukommt. Aus Aussagen $p, q$ bildet man neue mit $\\neg$ (nicht), $\\wedge$ (und), $\\vee$ (oder), $\\Rightarrow$ (wenn-dann) und $\\Leftrightarrow$ (genau dann, wenn). Wichtig: $\\vee$ ist das **nicht-ausschließende** „oder" ($p\\vee q$ ist auch wahr, wenn beide wahr sind), und $\\neg$ bindet stärker als $\\wedge$ und $\\vee$.\n' +
    '\n' +
    '**Was bedeutet Äquivalenz genau?**\n' +
    '$F \\equiv G$ heißt: In jeder Zeile der gemeinsamen Wahrheitstafel stimmen die Spalten von $F$ und $G$ überein. $\\equiv$ ist also eine Aussage **über** zwei Formeln (Metaebene), während $\\Leftrightarrow$ ein Verknüpfungssymbol **in** einer Formel ist. Es gilt der Zusammenhang: $F \\equiv G$ ist genau dann wahr, wenn $F \\Leftrightarrow G$ eine **Tautologie** ist (immer wahr).\n' +
    '\n' +
    '**Die wichtigsten Äquivalenzen**\n' +
    '| Name | Äquivalenz |\n' +
    '|---|---|\n' +
    '| Implikation als Oder | $p\\Rightarrow q \\equiv \\neg p\\vee q$ |\n' +
    '| Kontraposition | $p\\Rightarrow q \\equiv \\neg q\\Rightarrow\\neg p$ |\n' +
    '| De Morgan (Und) | $\\neg(p\\wedge q)\\equiv \\neg p\\vee\\neg q$ |\n' +
    '| De Morgan (Oder) | $\\neg(p\\vee q)\\equiv \\neg p\\wedge\\neg q$ |\n' +
    '| Doppelte Negation | $\\neg(\\neg p)\\equiv p$ |\n' +
    '| Äquivalenz zerlegt | $p\\Leftrightarrow q \\equiv (p\\Rightarrow q)\\wedge(q\\Rightarrow p)$ |\n' +
    '| Kommutativität | $p\\wedge q\\equiv q\\wedge p$,  $p\\vee q\\equiv q\\vee p$ |\n' +
    '| Assoziativität | $(p\\wedge q)\\wedge r\\equiv p\\wedge(q\\wedge r)$ |\n' +
    '| Distributivität | $p\\wedge(q\\vee r)\\equiv (p\\wedge q)\\vee(p\\wedge r)$ |\n' +
    '\n' +
    '**Wie weist man eine Äquivalenz nach?**\n' +
    'Per **Wahrheitstafel**: Man legt für $p$ (und $q$) alle Kombinationen von $w$ und $f$ an, berechnet schrittweise beide Formeln und prüft, ob die beiden Ergebnis-Spalten Zeile für Zeile identisch sind. Bei einer Variablen gibt es $2$ Zeilen, bei zwei Variablen $4$, bei drei Variablen $8$. Alternativ formt man eine Seite mit bereits bekannten Äquivalenzen schrittweise in die andere um.\n' +
    '\n' +
    '**Abgrenzung: Umkehrung und Inverse (häufige Fehlerquelle)**\n' +
    'Zur Implikation $p\\Rightarrow q$ gehören drei verwandte Aussagen, die man nicht verwechseln darf:\n' +
    '• **Kontraposition** $\\neg q\\Rightarrow\\neg p$ – ist **äquivalent** zu $p\\Rightarrow q$.\n' +
    '• **Umkehrung** $q\\Rightarrow p$ – ist im Allgemeinen **nicht** äquivalent.\n' +
    '• **Inverse** $\\neg p\\Rightarrow\\neg q$ – ebenfalls **nicht** äquivalent (aber zur Umkehrung).\n' +
    'Sprechweise: Bei $p\\Rightarrow q$ ist $p$ **hinreichend** für $q$, und $q$ ist **notwendig** für $p$. Gilt zusätzlich die Umkehrung, also $p\\Leftrightarrow q$, spricht man von „genau dann, wenn".\n' +
    '\n' +
    '**Merkregeln**\n' +
    'Bei De Morgan wandert das $\\neg$ nach innen und **dreht** dabei $\\wedge$ in $\\vee$ um (und umgekehrt). Eine Implikation hat keinen eigenen Wahrheitswert „durch Kausalität": $p\\Rightarrow q$ ist nur dann falsch, wenn $p$ wahr und $q$ falsch ist – sonst stets wahr.',
  beispiele: [
    {
      szenario: 'Äquivalenz per Wahrheitstafel nachweisen',
      beispiele: [
        '**Aufgabe:** Zeige $p\\Rightarrow q \\equiv \\neg p\\vee q$.\n**Lösung:** Wahrheitstafel mit allen vier Belegungen:\n\n| $p$ | $q$ | $p\\Rightarrow q$ | $\\neg p\\vee q$ |\n|---|---|---|---|\n| $w$ | $w$ | $w$ | $w$ |\n| $w$ | $f$ | $f$ | $f$ |\n| $f$ | $w$ | $w$ | $w$ |\n| $f$ | $f$ | $w$ | $w$ |\n\nDie beiden rechten Spalten stimmen in jeder Zeile überein.\n**Ergebnis:** $p\\Rightarrow q \\equiv \\neg p\\vee q$.',
        '**Aufgabe:** Zeige De Morgan: $\\neg(p\\wedge q)\\equiv \\neg p\\vee\\neg q$.\n**Lösung:** Spaltenweise auswerten ($\\neg$ bindet stärker als $\\wedge,\\vee$):\n\n| $p$ | $q$ | $\\neg(p\\wedge q)$ | $\\neg p\\vee\\neg q$ |\n|---|---|---|---|\n| $w$ | $w$ | $f$ | $f$ |\n| $w$ | $f$ | $w$ | $w$ |\n| $f$ | $w$ | $w$ | $w$ |\n| $f$ | $f$ | $w$ | $w$ |\n\nBeide Spalten sind identisch.\n**Ergebnis:** $\\neg(p\\wedge q)\\equiv \\neg p\\vee\\neg q$ (analog $\\neg(p\\vee q)\\equiv \\neg p\\wedge\\neg q$).',
        '**Aufgabe:** Sind $p\\Rightarrow q$ und seine Umkehrung $q\\Rightarrow p$ äquivalent?\n**Lösung:** Vergleich der beiden Spalten:\n\n| $p$ | $q$ | $p\\Rightarrow q$ | $q\\Rightarrow p$ |\n|---|---|---|---|\n| $w$ | $w$ | $w$ | $w$ |\n| $w$ | $f$ | $f$ | $w$ |\n| $f$ | $w$ | $w$ | $f$ |\n| $f$ | $f$ | $w$ | $w$ |\n\nIn Zeile 2 und 3 unterscheiden sie sich.\n**Ergebnis:** Nein, $p\\Rightarrow q \\not\\equiv q\\Rightarrow p$. Äquivalent ist nur die Kontraposition $\\neg q\\Rightarrow\\neg p$.',
      ],
    },
    {
      szenario: 'Ausdrücke umformen / vereinfachen',
      beispiele: [
        '**Aufgabe:** Vereinfache $p\\vee(\\neg p\\wedge q)$.\n**Lösung:** Distributivgesetz: $p\\vee(\\neg p\\wedge q)\\equiv (p\\vee\\neg p)\\wedge(p\\vee q)$. Der Term $p\\vee\\neg p$ ist immer wahr ($w$), und $w\\wedge X\\equiv X$.\n**Ergebnis:** $p\\vee(\\neg p\\wedge q)\\equiv p\\vee q$.',
        '**Aufgabe:** Vereinfache $\\neg(p\\wedge q)\\vee\\neg(\\neg p\\vee q)$.\n**Lösung:** De Morgan auf beide Klammern: $\\equiv(\\neg p\\vee\\neg q)\\vee(p\\wedge\\neg q)$. Ausklammern von $\\neg q$ bzw. Absorption ($p\\wedge\\neg q$ steckt in $\\neg p\\vee\\neg q$ auf): $\\equiv\\neg p\\vee\\neg q$.\n**Ergebnis:** $\\neg(p\\wedge q)\\vee\\neg(\\neg p\\vee q)\\equiv \\neg p\\vee\\neg q \\equiv \\neg(p\\wedge q)$.',
        '**Aufgabe:** Schreibe $p\\Leftrightarrow q$ ohne $\\Leftrightarrow$.\n**Lösung:** Die Bi-Implikation zerlegt man in beide Richtungen: $p\\Leftrightarrow q\\equiv(p\\Rightarrow q)\\wedge(q\\Rightarrow p)$. Jede Implikation per $p\\Rightarrow q\\equiv\\neg p\\vee q$ ersetzen: $\\equiv(\\neg p\\vee q)\\wedge(\\neg q\\vee p)$.\n**Ergebnis:** $p\\Leftrightarrow q\\equiv(\\neg p\\vee q)\\wedge(\\neg q\\vee p)$.',
      ],
    },
    {
      szenario: 'Implikation / Umkehrung / Kontraposition unterscheiden',
      beispiele: [
        '**Aufgabe:** Welche Aussagen sind äquivalent zu „Wenn das Wetter schön ist ($p$), dann kommt Maxi mit dem Fahrrad ($q$)", also zu $p\\Rightarrow q$? (a) $\\neg p\\Rightarrow\\neg q$  (b) $\\neg q\\Rightarrow\\neg p$  (c) $\\neg p\\vee q$.\n**Lösung:** (a) ist die Inverse – nicht äquivalent. (b) ist die Kontraposition – äquivalent. (c) ist $\\neg p\\vee q$ – äquivalent.\n**Ergebnis:** Äquivalent sind (b) und (c); (a) nicht.',
        '**Aufgabe:** „Eine hinreichende Bedingung dafür, dass $z$ durch $2$ teilbar ist, ist die Teilbarkeit durch $4$." Als Implikation schreiben und Wahrheitswert prüfen.\n**Lösung:** Hinreichend bedeutet: aus „durch $4$ teilbar" folgt „durch $2$ teilbar", also $(4\\mid z)\\Rightarrow(2\\mid z)$. Jede durch $4$ teilbare Zahl ist auch durch $2$ teilbar.\n**Ergebnis:** Aussage ist wahr.',
        '**Aufgabe:** „Eine notwendige Bedingung dafür, dass $z$ durch $2$ teilbar ist, ist die Teilbarkeit durch $4$." Als Implikation schreiben und prüfen.\n**Lösung:** Notwendig für $p$ heißt: $p\\Rightarrow(\\text{Bedingung})$, also $(2\\mid z)\\Rightarrow(4\\mid z)$. Gegenbeispiel $z=6$: durch $2$ teilbar, aber nicht durch $4$.\n**Ergebnis:** Aussage ist falsch.',
      ],
    },
  ],
}
