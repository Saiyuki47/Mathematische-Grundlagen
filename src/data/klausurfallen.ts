// Klausur-Fallen: nicht-intuitive Stolperfallen der Analysis-Grundlagen, die man
// extra lernen muss und die in der Klausur reihenweise schiefgehen. Abgeleitet aus
// den Uebungsblaettern 0-13, den Musteraufgaben und den Referenz-Karten dieses Kurses.
//
// Formeln stehen als KaTeX-Quelle in $…$ (inline). WICHTIG (Autorenregeln dieses
// Projekts): einfaches $…$, KEINE $$; Backslashes im TS-String verdoppeln (\\frac);
// das Ableitungs-Apostroph in einfachen Anfuehrungszeichen als \' schreiben. Jede
// Falle: warum es eine Falle ist (falle), ein „so nicht / sondern so" (falsch/richtig)
// ODER ein durchgerechnetes Beispiel (beispiel), und ein Merksatz (merke).

export interface Falle {
  titel: string
  /** Warum es eine Falle ist (Fliesstext, darf $…$ enthalten). */
  falle: string
  /** Optionales „So nicht" (mit $…$). */
  falsch?: string
  /** Optionales „Sondern so" (mit $…$). */
  richtig?: string
  /** Optionales durchgerechnetes Beispiel (Block, \n = Zeilenumbruch, $…$). */
  beispiel?: string
  /** Kernbotschaft zum Merken. */
  merke?: string
}

export interface FalleGruppe {
  id: string
  icon: string
  titel: string
  fallen: Falle[]
}

export const klausurFallen: FalleGruppe[] = [
  // ===========================================================================
  {
    id: 'rechnen',
    icon: '🧮',
    titel: 'Terme, Potenzen & Wurzeln',
    fallen: [
      {
        titel: 'Es gibt KEIN Summengesetz für Wurzeln',
        falle: 'Produkt- und Quotientengesetz gelten nur für $\\cdot$ und $:$ unter der Wurzel, niemals für $+$ oder $-$. Die Wurzel „verteilt" sich nicht über eine Summe. Das ist der häufigste Fehler überhaupt.',
        falsch: '$\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$',
        richtig: '$\\sqrt{9+16} = \\sqrt{25} = 5 \\ne 3+4 = \\sqrt{9}+\\sqrt{16}$',
        merke: 'Nur $\\sqrt{a\\,b}=\\sqrt{a}\\,\\sqrt{b}$ und $\\sqrt{a/b}=\\sqrt{a}/\\sqrt{b}$ – nichts mit Plus.',
      },
      {
        titel: '$\\sqrt{a^2} = |a|$, nicht $a$',
        falle: 'Die Quadratwurzel ist per Definition nie negativ. Zieht man die Wurzel aus einem Quadrat, muss der Betrag stehen bleiben – sonst stimmt das Vorzeichen für negatives $a$ nicht.',
        falsch: '$\\sqrt{a^2} = a$',
        richtig: '$\\sqrt{a^2} = |a|$, z. B. $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |{-5}|$',
        merke: 'Die Betragsstriche darf man nur weglassen, wenn $a \\ge 0$ schon bekannt ist.',
      },
      {
        titel: '$-a^2$ ist nicht $(-a)^2$',
        falle: 'Die Hochzahl bindet stärker als das Minuszeichen. Ohne Klammer wird nur die Basis potenziert, das Minus bleibt außen; erst die Klammer quadriert das Vorzeichen mit.',
        falsch: '$-3^2 = 9$',
        richtig: '$-3^2 = -(3^2) = -9$, aber $(-3)^2 = 9$',
        merke: 'Ohne Klammer: erst potenzieren, dann das Vorzeichen davorsetzen.',
      },
      {
        titel: 'Gleiche Basis: Exponenten addieren, nicht multiplizieren',
        falle: 'Bei $a^m \\cdot a^n$ werden die Exponenten addiert. Multipliziert werden sie nur bei einer Potenz von einer Potenz $(a^m)^n = a^{mn}$. Und $a^m + a^n$ lässt sich gar nicht zu einer Potenz zusammenfassen.',
        falsch: '$a^m \\cdot a^n = a^{m\\cdot n}$',
        richtig: '$a^m \\cdot a^n = a^{m+n}$, z. B. $x^2 \\cdot x^3 = x^5$',
        merke: 'Mal $\\to$ addieren, Potenz-von-Potenz $\\to$ multiplizieren, Plus $\\to$ gar nichts.',
      },
      {
        titel: 'Kürzen nur bei Faktoren, nie aus einer Summe',
        falle: 'Kürzen darf man nur einen Faktor, der im GANZEN Zähler und im GANZEN Nenner steckt. Aus einer Summe einzelne Summanden „wegzukürzen" ist verboten – erst faktorisieren.',
        falsch: '$\\dfrac{a+b}{a} = b$',
        richtig: '$\\dfrac{a\\,b}{a} = b$, aber $\\dfrac{a+b}{a} = 1 + \\dfrac{b}{a}$',
        merke: 'Erst faktorisieren, dann kürzen – „Aus Summen kürzen nur die Dummen."',
      },
      {
        titel: 'Definitionsbereich zuerst: Nenner $\\ne 0$, gerade Wurzel $\\ge 0$',
        falle: 'Vor jeder Umformung die Definitionslücken bestimmen. Ein Nenner darf nicht $0$ werden, und unter einer geraden Wurzel muss der Radikand $\\ge 0$ sein – sonst rechnet man an verbotenen Stellen oder erhält Scheinlösungen.',
        beispiel: '$\\sqrt{2x-6}$ nur für $2x-6 \\ge 0$, also $x \\ge 3$.\n$\\dfrac{4}{x-9}$ nur für $x \\ne 9$.\nBei ungerader Wurzel ist Negatives erlaubt: $\\sqrt[3]{-8} = -2$.',
        merke: 'Definitionsbereich klären, bevor man rechnet – nicht erst am Ende.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'ungleichungen',
    icon: '⚖️',
    titel: 'Ungleichungen & Betrag',
    fallen: [
      {
        titel: 'Mal (oder geteilt durch) eine negative Zahl dreht das Zeichen',
        falle: 'Multipliziert oder dividiert man eine Ungleichung mit einer negativen Zahl, kippt $\\le$ zu $\\ge$ (und $<$ zu $>$). Das wird beim Auflösen ständig vergessen.',
        falsch: '$-2x < 6 \\;\\Rightarrow\\; x < -3$',
        richtig: '$-2x < 6 \\;\\Rightarrow\\; x > -3$',
        merke: 'Negativer Faktor $\\Rightarrow$ Ungleichheitszeichen umdrehen.',
      },
      {
        titel: 'Mit einem Term multiplizieren $\\Rightarrow$ Fallunterscheidung',
        falle: 'Steht die Unbekannte im Nenner, darf man nicht einfach durchmultiplizieren: das Vorzeichen des Nenners ist unbekannt, also entscheidet es über die Richtung. Man muss beide Fälle rechnen und die Teillösung mit dem jeweiligen Bereich schneiden.',
        beispiel: 'Löse $\\dfrac{4}{x-9} \\le 2$:\nFall $x > 9$ (Nenner $>0$): $4 \\le 2(x-9) \\Rightarrow x \\ge 11$.\nFall $x < 9$ (Nenner $<0$, $\\le$ dreht): $4 \\ge 2(x-9) \\Rightarrow$ ganzer Bereich $x<9$.\nErgebnis: $(-\\infty,\\,9) \\cup [11,\\,\\infty)$.',
        merke: 'Nie mit einem Term unbekannten Vorzeichens multiplizieren, ohne Fälle zu machen.',
      },
      {
        titel: '$|x| = -c$ hat keine Lösung',
        falle: 'Ein Betrag ist immer $\\ge 0$. Ist die rechte Seite negativ, ist die Lösungsmenge leer – man darf nicht in $x = \\pm(-c)$ „auflösen".',
        falsch: '$|x+2| = -3 \\;\\Rightarrow\\; x+2 = \\pm 3$',
        richtig: '$|x+2| \\ge 0 > -3 \\;\\Rightarrow\\;$ keine Lösung, $x \\in \\emptyset$',
        merke: 'Erst prüfen, ob die rechte Seite $\\ge 0$ ist, dann auflösen.',
      },
      {
        titel: '$|x-a| \\le C$ ist eine Doppel-Ungleichung',
        falle: 'Betrag kleiner-gleich heißt: der Ausdruck liegt zwischen $-C$ und $+C$. Nur „$x-a \\le C$" zu schreiben unterschlägt die untere Grenze.',
        richtig: '$|x-1| < 3 \\iff -3 < x-1 < 3 \\iff x \\in (-2,\\,4)$',
        merke: '$|\\cdot| \\le C$ gibt EIN Intervall (Umgebung); zu jeder Seite $+a$ rechnen.',
      },
      {
        titel: '$|x-a| \\ge r$ ergibt ZWEI Intervalle',
        falle: 'Betrag größer-gleich beschreibt alles AUSSERHALB der Umgebung – also eine Vereinigung, kein einzelnes Intervall. Häufig wird nur eine Hälfte notiert.',
        richtig: '$|x+4| \\ge 6 \\iff x \\le -10 \\;\\text{oder}\\; x \\ge 2$, d. h. $(-\\infty,\\,-10] \\cup [2,\\,\\infty)$',
        merke: '„mindestens $r$ entfernt" heißt nach links UND nach rechts.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'logik',
    icon: '🔣',
    titel: 'Mengen & Logik',
    fallen: [
      {
        titel: 'De Morgan: der Operator kippt mit',
        falle: 'Beim Komplement einer Vereinigung wird aus $\\cup$ ein $\\cap$ (und umgekehrt), und jeder einzelne Teil wird komplementiert. Der Operator bleibt NICHT stehen.',
        falsch: '$(A \\cup B)^c = A^c \\cup B^c$',
        richtig: '$(A \\cup B)^c = A^c \\cap B^c$ und $(A \\cap B)^c = A^c \\cup B^c$',
        merke: 'Strich rein $\\Rightarrow$ jedes Teil quer und $\\cup \\leftrightarrow \\cap$ tauschen.',
      },
      {
        titel: 'Quantoren negieren: kippen UND innen verneinen',
        falle: 'Die Verneinung von $\\forall$ ist $\\exists$ mit negierter Aussage – nicht $\\forall$ mit negierter Aussage. Beides zusammen: Quantor kippt, innere Aussage wird verneint.',
        falsch: '$\\neg\\,(\\forall m : A(m)) \\equiv \\forall m : \\neg A(m)$',
        richtig: '$\\neg\\,(\\forall m : A(m)) \\equiv \\exists m : \\neg A(m)$',
        merke: 'Jeder Quantor kippt ($\\forall \\leftrightarrow \\exists$), die Aussage dahinter wird negiert.',
      },
      {
        titel: '$\\forall\\,\\exists$ und $\\exists\\,\\forall$ sind verschieden',
        falle: 'Die Reihenfolge gemischter Quantoren ändert die Bedeutung. „Zu jedem $x$ ein eigenes $y$" ist schwächer als „ein $y$ für alle $x$ gleichzeitig".',
        beispiel: '$\\forall x\\, \\exists y : y > x$ ist wahr in $\\mathbb{R}$ (nimm $y = x+1$).\n$\\exists y\\, \\forall x : y > x$ (eine größte Zahl) ist falsch.',
        merke: 'Gleiche Quantoren darf man tauschen, gemischte $\\forall/\\exists$ nicht.',
      },
      {
        titel: 'Ein Gegenbeispiel widerlegt – ein Beispiel beweist nicht',
        falle: 'Eine $\\forall$-Aussage ist schon mit EINEM Gegenbeispiel widerlegt. Umgekehrt beweist kein noch so passendes Beispiel eine $\\forall$-Aussage – dafür braucht man ein allgemeines Argument.',
        beispiel: '$\\forall n : n^2 \\ge n$ prüfen: der Test $n=5$ ($25 \\ge 5$) beweist nichts.\nEine $\\exists$-Aussage dagegen zeigt man genau durch Angabe eines Zeugen.',
        merke: '$\\forall$ widerlegen: ein Gegenbeispiel. $\\exists$ beweisen: ein Beispiel. Nie verwechseln.',
      },
      {
        titel: 'Implikation: Kontraposition ja, Umkehrung nein',
        falle: 'Es gilt $p \\Rightarrow q \\equiv \\neg q \\Rightarrow \\neg p$ (Kontraposition), aber NICHT $p \\Rightarrow q \\equiv q \\Rightarrow p$ (Umkehrung). $p$ ist hinreichend, $q$ notwendig – das ist nicht dasselbe.',
        beispiel: '„$4 \\mid n \\Rightarrow 2 \\mid n$" ist wahr.\nUmkehrung „$2 \\mid n \\Rightarrow 4 \\mid n$" ist falsch ($n=6$).\nKontraposition „$2 \\nmid n \\Rightarrow 4 \\nmid n$" ist wieder wahr.',
        merke: '$p \\Rightarrow q \\equiv \\neg p \\vee q$; hinreichend $\\ne$ notwendig.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'induktion',
    icon: '📐',
    titel: 'Induktion & Summen',
    fallen: [
      {
        titel: 'Die Induktionsvoraussetzung MUSS benutzt werden',
        falle: 'Ein Induktionsschritt, der die (IV) nirgends verwendet, ist fast immer falsch – dann hätte man $A(n+1)$ direkt gezeigt. Man formt $A(n+1)$ so um, dass der Ausdruck aus $A(n)$ wörtlich auftaucht, und ersetzt ihn per (IV).',
        beispiel: '$\\displaystyle\\sum_{k=1}^{n+1} k = \\sum_{k=1}^{n} k + (n+1) \\stackrel{(IV)}{=} \\frac{n(n+1)}{2} + (n+1) = \\frac{(n+1)(n+2)}{2}$',
        merke: 'Kein Einsatz der (IV) im Schritt $\\Rightarrow$ der Beweis ist mit hoher Sicherheit falsch.',
      },
      {
        titel: 'Induktionsanfang nicht vergessen – und am richtigen Startwert',
        falle: 'Ohne Induktionsanfang fällt kein Dominostein, egal wie gut der Schritt ist. Und wenn die Behauptung erst ab $n_0$ gilt, muss der IA bei $n_0$ gemacht werden, nicht bei $0$.',
        beispiel: '$2^n \\ge n^2$ gilt erst ab $n_0 = 4$ (bei $n=3$ ist $8 < 9$ falsch).\nAlso IA bei $n=4$: $2^4 = 16 \\ge 16 = 4^2$.',
        merke: 'Startwert der Behauptung = Startwert des Induktionsanfangs.',
      },
      {
        titel: 'Ungleichung im Schritt: Vorzeichen beim Multiplizieren prüfen',
        falle: 'Will man die (IV)-Ungleichung mit einem Term multiplizieren, muss dieser $\\ge 0$ sein, sonst dreht sich das Zeichen. Genau hier braucht die Bernoulli-Ungleichung die Bedingung $x \\ge -1$.',
        beispiel: 'Bernoulli: $(1+x)^{n+1} = (1+x)\\,(1+x)^n \\stackrel{(IV)}{\\ge} (1+x)(1+nx)$\nist nur erlaubt, weil $1+x \\ge 0$ (also $x \\ge -1$).',
        merke: 'Erst Vorzeichen des Faktors sichern, dann die (IV)-Ungleichung multiplizieren.',
      },
      {
        titel: 'Summenzeichen: Anzahl der Summanden und Index sauber halten',
        falle: 'Eine konstante Summe ist $\\sum_{k=1}^{n} c = n\\,c$, nicht $c$. Die Anzahl der Summanden ist obere minus untere Grenze plus eins. Beim Schritt spaltet man den letzten Summanden ab.',
        beispiel: '$\\displaystyle\\sum_{k=1}^{n} 3 = 3n$ (nicht $3$).\n$\\displaystyle\\sum_{k=0}^{n} a_k$ hat $n+1$ Summanden (Start bei $0$!).',
        merke: 'Summandenzahl $=$ obere $-$ untere Grenze $+1$; letzten Term abspalten.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'folgen',
    icon: '🔁',
    titel: 'Folgen & Reihen',
    fallen: [
      {
        titel: '$a_k \\to 0$ ist notwendig, aber NICHT hinreichend',
        falle: 'Damit eine Reihe konvergieren kann, müssen die Summanden gegen $0$ gehen – aber daraus folgt keine Konvergenz. Nur die Gegenrichtung ist ein Test: gehen die Summanden nicht gegen $0$, divergiert die Reihe sofort.',
        beispiel: 'Harmonische Reihe: $\\displaystyle\\sum_{k=1}^{\\infty} \\frac{1}{k}$ divergiert, obwohl $\\frac{1}{k} \\to 0$.',
        merke: 'Nullfolge ist die Eintrittskarte, keine Garantie. $a_k \\not\\to 0 \\Rightarrow$ divergent.',
      },
      {
        titel: 'Geometrische Reihe: nur für $|q| < 1$, und auf den Startindex achten',
        falle: 'Die Summenformel $\\frac{1}{1-q}$ gilt nur bei $|q| < 1$ UND ab $k = 0$. Bei $|q| \\ge 1$ divergiert die Reihe; startet sie woanders, muss man den Index erst verschieben.',
        beispiel: '$\\displaystyle\\sum_{k=0}^{\\infty} q^k = \\frac{1}{1-q}$ für $|q|<1$;\nab $k=1$ dagegen $\\displaystyle\\sum_{k=1}^{\\infty} q^k = \\frac{q}{1-q}$.',
        merke: '$|q| \\ge 1 \\Rightarrow$ divergent; bei anderem Start zuerst $q^{k_0}$ ausklammern.',
      },
      {
        titel: '$q = 1$ beim Quotienten-/Wurzelkriterium: KEINE Aussage',
        falle: 'Liefert das Quotienten- oder Wurzelkriterium den Grenzwert $q = 1$, ist es unentschieden. Man darf daraus weder Konvergenz noch Divergenz schließen und muss ein anderes Kriterium nehmen.',
        beispiel: '$\\sum \\frac{1}{k}$ (divergent) und $\\sum \\frac{1}{k^2}$ (konvergent) haben BEIDE $q=1$.',
        merke: 'Bei $q=1$ auf Majoranten-/Minoranten- oder ein Vergleichskriterium ausweichen.',
      },
      {
        titel: '$\\frac{\\infty}{\\infty}$ bei $n \\to \\infty$: durch die höchste Potenz teilen',
        falle: 'Bei rationalen Ausdrücken entscheidet der Grad, nicht „oben und unten unendlich, also $1$". Zähler und Nenner durch die höchste vorkommende Potenz kürzen, dann gehen alle $\\frac{1}{n^k} \\to 0$.',
        beispiel: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{3n^2+n}{2n^2-1} = \\frac{3}{2}$ (gleicher Grad $\\to$ Leitkoeffizienten).\nNennergrad größer $\\Rightarrow 0$; Zählergrad größer $\\Rightarrow \\pm\\infty$.',
        merke: 'Grad vergleichen: kleiner/gleich/größer entscheidet über $0$ / Quotient / $\\pm\\infty$.',
      },
      {
        titel: 'Rekursive Folge: Fixpunkt erst NACH dem Konvergenznachweis',
        falle: 'Setzt man $x = \\lim x_n$ in die Rekursion ein, bekommt man nur einen Kandidaten für den Grenzwert. Gültig ist er erst, wenn man vorher gezeigt hat, dass die Folge überhaupt konvergiert – typisch über monoton und beschränkt.',
        beispiel: '$x_{n+1} = \\sqrt{2 + x_n}$, $x_0 = 1$:\nzuerst „monoton wachsend und beschränkt" $\\Rightarrow$ konvergent,\ndann $x = \\sqrt{2+x} \\Rightarrow x = 2$.',
        merke: 'Monotonie $+$ Beschränktheit $\\Rightarrow$ Konvergenz; ohne das ist der Fixpunkt wertlos.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'grenzwerte',
    icon: '📈',
    titel: 'Grenzwerte & Stetigkeit',
    fallen: [
      {
        titel: '$\\frac{0}{0}$ ist kein Ergebnis, sondern ein Auftrag zum Umformen',
        falle: 'Setzt man ein und erhält $\\frac{0}{0}$, ist der Wert noch unbestimmt. Bei rationalen Funktionen faktorisiert man Zähler und Nenner und kürzt den gemeinsamen Linearfaktor (behebbare Lücke), erst dann setzt man ein.',
        beispiel: '$\\displaystyle\\lim_{x\\to -1} \\frac{x^2-1}{x+1} = \\lim_{x\\to -1} \\frac{(x-1)(x+1)}{x+1} = \\lim_{x\\to -1}(x-1) = -2$',
        merke: '$\\frac{0}{0}$ oder $\\frac{\\infty}{\\infty}$ nie stehen lassen – faktorisieren und kürzen.',
      },
      {
        titel: 'Beidseitiger Grenzwert nur, wenn beide einseitigen ÜBEREINSTIMMEN',
        falle: 'Der Grenzwert existiert genau dann, wenn links- und rechtsseitiger Grenzwert existieren und gleich sind. Bei Beträgen, Sprüngen und Polen muss man deshalb beide Seiten getrennt betrachten.',
        beispiel: '$\\displaystyle\\lim_{x\\to 0} \\frac{|x|}{x}$: rechts $\\frac{x}{x}=+1$, links $\\frac{-x}{x}=-1$.\nVerschieden $\\Rightarrow$ der Grenzwert existiert nicht (Sprungstelle).',
        merke: 'Betrag / abschnittsweise / Pol $\\Rightarrow$ immer beide einseitigen Grenzwerte prüfen.',
      },
      {
        titel: '$\\lim_{x\\to x_0} f(x)$ ist nicht automatisch $f(x_0)$',
        falle: 'Grenzwert und Funktionswert können verschieden sein. Genau dann ist $f$ in $x_0$ unstetig (behebbare Unstetigkeit). Man darf den Grenzwert also nicht mit „einfach einsetzen" verwechseln, wenn eine Lücke vorliegt.',
        beispiel: '$h(x) = \\frac{x^2-1}{x+1}$ für $x \\ne -1$, aber $h(-1) = -100$:\n$\\lim_{x\\to -1} h(x) = -2 \\ne -100 = h(-1) \\Rightarrow$ unstetig in $-1$.',
        merke: 'Stetig in $x_0$ heißt: Grenzwert existiert UND $\\lim_{x\\to x_0} f(x) = f(x_0)$.',
      },
      {
        titel: 'Nenner $= 0$: Polstelle oder behebbare Lücke? Zähler prüfen!',
        falle: 'Dass der Nenner an einer Stelle $0$ wird, sagt allein noch nichts. Ist der Zähler dort $\\ne 0$, liegt eine Polstelle vor ($\\pm\\infty$). Ist der Zähler auch $0$, kann sich ein Linearfaktor kürzen (behebbare Lücke mit endlichem Grenzwert).',
        beispiel: '$\\frac{x^2-1}{x-1}$ bei $x=1$: Zähler auch $0$ $\\Rightarrow$ Lücke, Grenzwert $2$.\n$\\frac{1}{x-1}$ bei $x=1$: Zähler $1 \\ne 0$ $\\Rightarrow$ Pol, senkrechte Asymptote.',
        merke: 'Immer den Zähler an der Nullstelle des Nenners testen, bevor man urteilt.',
      },
      {
        titel: 'Stetige Fortsetzung: die Lücke mit dem Grenzwert füllen',
        falle: 'Eine behebbare Lücke schließt man, indem man den Funktionswert GLEICH dem Grenzwert setzt, $f(x_0) := \\lim_{x\\to x_0} f(x)$. Pole und Sprünge lassen sich dagegen nicht stetig fortsetzen.',
        beispiel: '$f(x) = \\frac{x^2-1}{x-1}$ für $x \\ne 1$: mit $c := \\lim_{x\\to 1} f(x) = 2$\nwird $f$ in $x=1$ stetig fortgesetzt.',
        merke: 'Nur behebbare Lücken sind stetig fortsetzbar – der Wert ist der Grenzwert.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'ableitung',
    icon: '✏️',
    titel: 'Ableitungen',
    fallen: [
      {
        titel: 'Produktregel ist NICHT $f\'g\'$',
        falle: 'Die Ableitung eines Produkts ist $f\'g + fg\'$, nicht das Produkt der Ableitungen. Dieser „Vereinfachungs"-Reflex ist ein Klassiker.',
        falsch: '$(f\\,g)\' = f\'\\,g\'$',
        richtig: '$(f\\,g)\' = f\'\\,g + f\\,g\'$, z. B. $(x^2 e^x)\' = 2x\\,e^x + x^2 e^x$',
        merke: '„Erste abgeleitet mal zweite plus erste mal zweite abgeleitet."',
      },
      {
        titel: 'Quotientenregel: Reihenfolge im Zähler (das Minus!) beachten',
        falle: 'Der Zähler ist $f\'g - fg\'$, nicht $fg\' - f\'g$, und alles geteilt durch $g^2$. Wer die Reihenfolge vertauscht, bekommt das falsche Vorzeichen.',
        richtig: '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\'\\,g - f\\,g\'}{g^2}$',
        merke: '„Oben abgeleitet mal unten $-$ oben mal unten abgeleitet, durch unten zum Quadrat."',
      },
      {
        titel: 'Kettenregel: die innere Ableitung nicht vergessen',
        falle: 'Bei einer Verkettung $g(h(x))$ muss man mit $h\'(x)$ „nachdifferenzieren". Nur die äußere Ableitung hinzuschreiben ist der häufigste Kettenregel-Fehler.',
        falsch: '$(\\sin(2x))\' = \\cos(2x)$',
        richtig: '$(\\sin(2x))\' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$',
        merke: 'Äußere Ableitung mal innere Ableitung – bei jeder Schale erneut.',
      },
      {
        titel: 'Differenzierbar $\\Rightarrow$ stetig, aber NICHT umgekehrt',
        falle: 'Aus Differenzierbarkeit folgt Stetigkeit, nie umgekehrt. Eine stetige Funktion kann Knicke haben und dort nicht differenzierbar sein.',
        beispiel: '$f(x) = |x|$ ist in $0$ stetig, aber nicht differenzierbar:\nlinksseitige Steigung $-1$, rechtsseitige $+1$ (Knick).',
        merke: 'Knick, Sprung oder senkrechte Tangente $\\Rightarrow$ nicht differenzierbar (trotz Stetigkeit).',
      },
      {
        titel: 'Betrag / abschnittsweise: einseitige Ableitungen getrennt prüfen',
        falle: 'An einer Nahtstelle ist $f$ nur differenzierbar, wenn $f$ dort stetig ist UND links- und rechtsseitige Ableitung existieren und gleich sind. Beides einzeln prüfen.',
        beispiel: '$f(x) = x|x|$ in $0$: $f\'_{-}(0) = 0 = f\'_{+}(0)$\n$\\Rightarrow$ differenzierbar mit $f\'(0) = 0$.',
        merke: 'Erst Stetigkeit an der Nahtstelle, dann beide einseitigen Ableitungen vergleichen.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'funktionen',
    icon: '🔗',
    titel: 'Abbildungen & Kombinatorik',
    fallen: [
      {
        titel: 'Injektiv / surjektiv hängt von Definitions- und Zielmenge ab',
        falle: 'Dieselbe Zuordnungsvorschrift kann je nach Definitions- und Zielmenge injektiv/surjektiv sein oder nicht. „$f$ ist injektiv" ohne Angabe von $D$ und Zielmenge ist unvollständig.',
        beispiel: '$f(x)=x^2$ auf $\\mathbb{R}\\to\\mathbb{R}$: weder injektiv ($f(-2)=f(2)$)\nnoch surjektiv (kein Urbild von $-1$).\nAber $f:[0,\\infty)\\to[0,\\infty)$, $x\\mapsto x^2$ ist bijektiv.',
        merke: 'Injektiv/surjektiv immer mit Definitions- UND Zielmenge beurteilen.',
      },
      {
        titel: 'Urbild braucht keine Umkehrfunktion',
        falle: 'Das Urbild $f^{-1}(\\{y\\})$ ist die Menge aller $x$ mit $f(x)=y$ – auch wenn $f$ nicht umkehrbar ist. Es kann leer sein oder mehrere Elemente enthalten; das Symbol $f^{-1}$ meint hier NICHT die Umkehrfunktion.',
        beispiel: '$f(x)=x^2$: $f^{-1}(\\{4\\}) = \\{-2,\\,2\\}$ (zwei Elemente),\n$f^{-1}(\\{-1\\}) = \\emptyset$ (leer).',
        merke: '$f^{-1}$ als Urbild ist immer definiert; als Umkehrfunktion nur bei Bijektivität.',
      },
      {
        titel: 'Bild von Durchschnitt: nur „$\\subseteq$"',
        falle: 'Es gilt $f(A \\cap B) \\subseteq f(A) \\cap f(B)$, aber im Allgemeinen KEINE Gleichheit (die gibt es erst bei injektivem $f$). Bei der Vereinigung gilt dagegen Gleichheit.',
        beispiel: '$f(x)=x^2$, $A=\\{-1\\}$, $B=\\{1\\}$:\n$f(A\\cap B) = f(\\emptyset) = \\emptyset$, aber $f(A)\\cap f(B) = \\{1\\}$.',
        merke: 'Bei $\\cup$ Gleichheit, bei $\\cap$ nur Inklusion „$\\subseteq$".',
      },
      {
        titel: 'Verkettung $g \\circ f$ heißt „erst $f$, dann $g$"',
        falle: 'Es ist $(g \\circ f)(x) = g(f(x))$ – von innen nach außen gelesen. Die Verkettung ist nicht kommutativ: $g\\circ f \\ne f\\circ g$.',
        beispiel: '$f(x)=x+1$, $g(x)=x^2$:\n$(g\\circ f)(x) = (x+1)^2$, aber $(f\\circ g)(x) = x^2+1$.',
        merke: 'Von innen nach außen; Reihenfolge zählt, $g\\circ f \\ne f\\circ g$.',
      },
      {
        titel: 'Kombinatorik: erst das Modell klären',
        falle: 'Vor der Formel entscheiden: Zählt die Reihenfolge? Ist Wiederholung erlaubt? Erst daraus ergibt sich, ob man mit Potenz, Fakultät oder Binomialkoeffizient rechnet. Sonderbedingungen (etwa „erste Ziffer $\\ne 0$") getrennt einbauen.',
        beispiel: 'Kennzeichen: 2 Buchstaben, dann 3 Ziffern (erste Ziffer $\\ne 0$):\n$26 \\cdot 26 \\cdot 9 \\cdot 10 \\cdot 10 = 608\\,400$.',
        merke: 'Geordnet? Mit Wiederholung? Erst Modell, dann Formel.',
      },
      {
        titel: 'Abzählbar ist nicht gleich überabzählbar',
        falle: '$\\mathbb{Z}$ und $\\mathbb{Q}$ sind abzählbar (es gibt eine Bijektion mit $\\mathbb{N}$), $\\mathbb{R}$ ist überabzählbar. „Unendlich" allein sagt also nichts über die Mächtigkeit.',
        beispiel: '$\\mathbb{Z}$ abzählen: $0, 1, -1, 2, -2, \\dots \\Rightarrow$ Bijektion mit $\\mathbb{N}$.\n$\\mathbb{R}$ (schon $(0,1)$): Cantors Diagonalargument $\\Rightarrow$ überabzählbar.',
        merke: 'Abzählbar $=$ „durchnummerierbar"; $\\mathbb{R}$ ist es nicht.',
      },
    ],
  },
]
