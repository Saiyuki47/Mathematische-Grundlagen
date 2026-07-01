import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'kombinatorik',
  titel: 'Kombinatorik – Zählen',
  inhalt:
    '**Worum geht es?**\n' +
    'Kombinatorik beantwortet die Frage „Wie viele Möglichkeiten gibt es?“ – ohne dass man alle Fälle einzeln aufschreiben muss. Wie viele Sitzordnungen, Passwörter, Lotto-Tipps oder Anagramme gibt es? Statt zu zählen rechnet man die Anzahl mit wenigen Formeln aus. Damit man die richtige Formel trifft, klärt man immer zwei Fragen: Kommt es auf die **Reihenfolge** an? Darf ein Element **mehrfach** vorkommen?\n' +
    '\n' +
    '**Die zwei Grundprinzipien (Zählregeln)**\n' +
    '**Produktregel:** Wird eine Wahl in mehreren Schritten getroffen und gibt es im ersten Schritt $a$, im zweiten $b$, … Möglichkeiten (unabhängig voneinander), so ist die Gesamtzahl das **Produkt** $a\\cdot b\\cdots$. Für ein kartesisches Produkt heißt das $|M_1\\times\\cdots\\times M_n| = |M_1|\\cdot|M_2|\\cdots|M_n|$.\n' +
    '**Summenregel:** Zerfällt die Menge in Fälle, die sich **gegenseitig ausschließen** (keine Überschneidung), so addiert man ihre Anzahlen. Überschneiden sich die Fälle, zieht man die doppelt gezählten wieder ab (Prinzip von Inklusion/Exklusion).\n' +
    'Merke: „und / nacheinander“ deutet auf Multiplizieren, „oder / getrennte Fälle“ auf Addieren.\n' +
    '\n' +
    '**Permutationen – alles anordnen**\n' +
    'Eine **Permutation** ist eine Anordnung **aller** $n$ verschiedenen Elemente in einer Reihe. Die Anzahl ist die Fakultät\n' +
    '$P(n) = n! = 1\\cdot 2\\cdot 3\\cdots n$\n' +
    'mit der Festlegung $0! = 1$. Begründung mit der Produktregel: für den 1. Platz gibt es $n$ Wahlen, für den 2. nur noch $n-1$, dann $n-2$, … bis $1$.\n' +
    '\n' +
    '**Permutation mit Wiederholung (nicht unterscheidbare Elemente)**\n' +
    'Sind manche Elemente gleich (z. B. doppelte Buchstaben), zählt man jede Anordnung sonst mehrfach. Bei Gruppen der Größen $n_1, n_2, \\ldots, n_r$ (mit $n_1+\\cdots+n_r=n$) ist die Anzahl der **unterscheidbaren** Anordnungen\n' +
    '$\\dfrac{n!}{n_1!\\,n_2!\\cdots n_r!}$\n' +
    'Man teilt also durch die Fakultät jeder Gruppe gleicher Objekte heraus.\n' +
    '\n' +
    '**Variationen – auswählen UND anordnen (Reihenfolge zählt)**\n' +
    'Eine **Variation** wählt aus $n$ Elementen $k$ Stück aus und ordnet sie an – die Reihenfolge ist wichtig.\n' +
    'Ohne Wiederholung (kein Element doppelt): $V(n,k) = \\dfrac{n!}{(n-k)!} = n\\cdot(n-1)\\cdots(n-k+1)$ (genau $k$ Faktoren).\n' +
    'Mit Wiederholung (Elemente dürfen mehrfach auftreten): $V^{*}(n,k) = n^{k}$.\n' +
    'Der Fall $k=n$ der Variation ohne Wiederholung ist gerade die Permutation: $V(n,n)=n!$.\n' +
    '\n' +
    '**Kombinationen – nur auswählen (Reihenfolge egal)**\n' +
    'Eine **Kombination** wählt aus $n$ Elementen $k$ Stück aus, **ohne** auf die Reihenfolge zu achten (eine Teilmenge).\n' +
    'Ohne Wiederholung: $C(n,k) = \\dbinom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ für $0\\le k\\le n$. Idee: Variation durch die $k!$ möglichen Anordnungen jeder Auswahl teilen, also $C(n,k)=\\dfrac{V(n,k)}{k!}$.\n' +
    'Mit Wiederholung: $C^{*}(n,k) = \\dbinom{n-1+k}{k}$.\n' +
    '\n' +
    '**Übersicht: Ziehen aus n Kugeln, k Stück (Urnenmodell)**\n' +
    '| Reihenfolge | ohne Wiederholung | mit Wiederholung |\n' +
    '|---|---|---|\n' +
    '| geordnet (Variation) | $\\dfrac{n!}{(n-k)!}$ | $n^{k}$ |\n' +
    '| ungeordnet (Kombination) | $\\dbinom{n}{k}$ | $\\dbinom{n-1+k}{k}$ |\n' +
    '\n' +
    '**Wie wähle ich die richtige Formel?**\n' +
    'Schritt 1 – Lege $n$ (wie viele Sorten/Plätze stehen zur Verfügung) und $k$ (wie viele werden gezogen) fest.\n' +
    'Schritt 2 – Frage: Spielt die **Reihenfolge** eine Rolle? Ja → Variation (oder Permutation, falls alle genommen werden). Nein → Kombination.\n' +
    'Schritt 3 – Frage: Darf ein Element **mehrfach** vorkommen (Zurücklegen)? Ja → „mit Wiederholung“. Nein → „ohne Wiederholung“.\n' +
    'Schritt 4 – Formel aus der Tabelle ablesen und einsetzen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Reihenfolge mit Wiederholung verwechseln – beides getrennt prüfen.\n' +
    '• Bei doppelten Objekten das Herausteilen durch $n_i!$ vergessen (sonst zu viele Anordnungen).\n' +
    '• Bei „oder“ überlappende Fälle doppelt zählen, statt die Schnittmenge abzuziehen.\n' +
    '• $0!=1$ und $\\binom{n}{0}=1$ nicht beachten.',
  beispiele: [
    {
      szenario: 'Zählprinzipien (Produkt- und Summenregel)',
      beispiele: [
        '**Aufgabe:** Wie viele Autonummern der Form $\\text{FD}-b_1 b_2\\, z_1 z_2 z_3$ gibt es? Dabei sind $b_1,b_2$ Buchstaben von A bis Z, $z_1\\in\\{1,\\ldots,9\\}$ und $z_2,z_3\\in\\{0,\\ldots,9\\}$.\n**Lösung:** Jede Stelle wird unabhängig gewählt, also Produktregel. Es gibt $26$ Buchstaben, für $z_1$ neun Ziffern (ohne 0), für $z_2,z_3$ je zehn: $26\\cdot 26\\cdot 9\\cdot 10\\cdot 10$.\n**Ergebnis:** $26\\cdot 26\\cdot 9\\cdot 10\\cdot 10 = 608400$ Autonummern.',
        '**Aufgabe:** Wie viele 6-stellige Passwörter aus $26$ Buchstaben und $10$ Ziffern gibt es, wenn **mindestens eine** Ziffer vorkommen soll?\n**Lösung:** Bequemer über das Gegenteil (Summenregel als Differenz). Alle Passwörter: jede der 6 Stellen aus $36$ Zeichen, also $36^{6}$. Davon enthalten genau die $26^{6}$ reinen Buchstaben-Passwörter keine Ziffer. „Mindestens eine Ziffer“ = alle minus keine Ziffer.\n**Ergebnis:** $36^{6} - 26^{6}$ Passwörter.',
        '**Aufgabe:** Wie viele fünfstellige Dualzahlen (Stellen aus $\\{0,1\\}$) beginnen mit $11$ **oder** enden mit $00$?\n**Lösung:** „oder“ mit Überlappung → Inklusion/Exklusion. Mit $11$ beginnen: die übrigen 3 Stellen frei, $2^{3}=8$. Mit $00$ enden: ebenfalls $2^{3}=8$. Beides zugleich (beginnt $11$ und endet $00$): nur die mittlere Stelle frei, $2^{1}=2$. Doppelt Gezählte abziehen: $8+8-2$.\n**Ergebnis:** $2^{3}+2^{3}-2 = 14$ Dualzahlen.',
      ],
    },
    {
      szenario: 'Permutationen (alle anordnen, auch mit Wiederholung)',
      beispiele: [
        '**Aufgabe:** Wie viele „Anagramme“ hat das Wort MATHE (5 verschiedene Buchstaben)?\n**Lösung:** Alle 5 verschiedenen Buchstaben werden angeordnet, das ist eine Permutation: $P(5)=5!$.\n**Ergebnis:** $5! = 120$ Anagramme.',
        '**Aufgabe:** Wie viele „Anagramme“ hat das Wort KLAUSUR (7 Buchstaben, das U kommt **zweimal** vor)?\n**Lösung:** Permutation mit Wiederholung: $7$ Buchstaben, davon eine Gruppe aus $2$ gleichen U. Man teilt durch $2!$: $\\dfrac{7!}{2!}=\\dfrac{5040}{2}$. (Alternativ: erst die $\\binom{7}{2}$ Positionen der U wählen, dann die restlichen $5$ Buchstaben auf $5!$ Arten verteilen: $\\binom{7}{2}\\cdot 5! = 21\\cdot 120 = 2520$.)\n**Ergebnis:** $\\dfrac{7!}{2!} = 2520$ Anagramme.',
        '**Aufgabe:** Ein Zug hat $3$ nicht unterscheidbare Wagen 1. Klasse und $5$ nicht unterscheidbare Wagen 2. Klasse. Wie viele unterschiedliche Wagenfolgen gibt es?\n**Lösung:** $8$ Positionen mit zwei Gruppen gleicher Wagen ($3$ und $5$). Permutation mit Wiederholung: $\\dfrac{8!}{3!\\,5!}$. Das ist gerade $\\binom{8}{3}$ – man wählt die $3$ Plätze der 1. Klasse aus.\n**Ergebnis:** $\\dfrac{8!}{3!\\,5!} = \\dbinom{8}{3} = 56$ Wagenfolgen.',
      ],
    },
    {
      szenario: 'Variationen (Reihenfolge zählt)',
      beispiele: [
        '**Aufgabe:** Auf wie viele Arten können sich $20$ unterscheidbare Personen auf $60$ Plätze in einem Bus verteilen?\n**Lösung:** Jede Person „zieht“ einen Platz, ohne Zurücklegen, und die Reihenfolge (welche Person wohin) zählt → Variation ohne Wiederholung mit $n=60$, $k=20$: $V(60,20)=\\dfrac{60!}{(60-20)!}=\\dfrac{60!}{40!}$.\n**Ergebnis:** $\\dfrac{60!}{40!} = 60\\cdot 59\\cdots 41$ Möglichkeiten.',
        '**Aufgabe:** Wie viele 6-stellige Passwörter aus $26$ Buchstaben und $10$ Ziffern gibt es (Zeichen dürfen sich wiederholen)?\n**Lösung:** $36$ mögliche Zeichen pro Stelle, $6$ Stellen, Reihenfolge zählt und Wiederholung erlaubt → Variation mit Wiederholung: $V^{*}(36,6)=36^{6}$.\n**Ergebnis:** $36^{6} = 2{,}18\\cdot 10^{9}$ Passwörter (genau $2176782336$).',
        '**Aufgabe:** Wie viele „Wörter“ aus $3$ **verschiedenen** Buchstaben des Alphabets ($26$ Buchstaben) kann man bilden?\n**Lösung:** Auswahl von $3$ aus $26$ ohne Wiederholung, Reihenfolge zählt (ein Wort ist geordnet) → Variation ohne Wiederholung: $V(26,3)=\\dfrac{26!}{23!}=26\\cdot 25\\cdot 24$.\n**Ergebnis:** $26\\cdot 25\\cdot 24 = 15600$ Wörter.',
      ],
    },
    {
      szenario: 'Kombinationen (Reihenfolge egal)',
      beispiele: [
        '**Aufgabe:** Wie viele mögliche Ausgänge hat die Lottoziehung „6 aus 49“?\n**Lösung:** $6$ aus $49$ ziehen, ohne Zurücklegen, Reihenfolge egal → Kombination ohne Wiederholung: $C(49,6)=\\dbinom{49}{6}=\\dfrac{49!}{6!\\,43!}$.\n**Ergebnis:** $\\dbinom{49}{6} = 13\\,983\\,816$ Tippreihen.',
        '**Aufgabe:** Im Gitter geht man von A nach B in genau $13$ Schritten ($8$ mal nach rechts, $5$ mal nach oben). Wie viele Wege gibt es?\n**Lösung:** Von $13$ Schritten wählt man die $5$ aus, bei denen man nach oben geht – Auswahl ohne Reihenfolge, ohne Wiederholung → $C(13,5)=\\dbinom{13}{5}$.\n**Ergebnis:** $\\dbinom{13}{5} = 1287$ Wege.',
        '**Aufgabe:** Auf wie viele Arten verteilen sich $2$ **nicht unterscheidbare** Spatzen auf $4$ Telegraphenleitungen (eine Leitung darf mehrfach besetzt sein)?\n**Lösung:** $k=2$ aus $n=4$ Leitungen, Reihenfolge egal (Spatzen gleich), mit Wiederholung (Mehrfachbelegung erlaubt) → Kombination mit Wiederholung: $C^{*}(4,2)=\\dbinom{4-1+2}{2}=\\dbinom{5}{2}$.\n**Ergebnis:** $\\dbinom{5}{2} = 10$ Verteilungen.',
      ],
    },
  ],
}
