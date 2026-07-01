import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'vollstaendige-induktion',
  titel: 'Vollständige Induktion',
  inhalt:
    '**Worum geht es?**\n' +
    'Manche Aussagen sollen für **unendlich viele** natürliche Zahlen gelten, z. B. „$2^n \\geq n+1$ für jedes $n \\in \\mathbb{N}$". Man kann das nicht für jedes $n$ einzeln nachrechnen. Die **vollständige Induktion** ist ein Beweisverfahren, das eine Aussage $A(n)$ für alle $n \\in \\mathbb{N}$ (oder ab einem Startwert) mit nur zwei Bausteinen sichert.\n' +
    '\n' +
    '**Das Prinzip (Dominokette)**\n' +
    'Stell dir unendlich viele Dominosteine vor, einen für jedes $n$. Du willst, dass **alle** umfallen. Dafür reichen zwei Dinge: (1) der **erste** Stein fällt, und (2) **jeder** fallende Stein stößt seinen Nachfolger um. Dann fällt Stein $0$, der stößt Stein $1$, der stößt Stein $2$, und so weiter – alle fallen. Genau das macht die Induktion mit Aussagen statt Steinen.\n' +
    '\n' +
    '**Die drei Schritte**\n' +
    'Sei $A(n)$ für jedes $n \\in \\mathbb{N}$ eine Aussage. Um „$A(n)$ gilt für alle $n$" zu zeigen, beweist man:\n' +
    '1. **Induktionsanfang (IA):** Zeige, dass $A(0)$ wahr ist (der erste Dominostein fällt).\n' +
    '2. **Induktionsvoraussetzung (IV):** Nimm an, dass $A(n)$ für ein beliebiges, festes $n$ wahr ist. Das ist eine **Annahme**, kein zu Beweisendes.\n' +
    '3. **Induktionsschritt (IS)** $n \\to n+1$: Zeige unter der Annahme (IV), dass dann auch $A(n+1)$ wahr ist (jeder Stein stößt den nächsten).\n' +
    'Sind IA und IS bewiesen, gilt $A(n)$ für **alle** $n \\in \\mathbb{N}$.\n' +
    '\n' +
    '**Warum funktioniert das?**\n' +
    'Der IA liefert $A(0)$. Der IS ist eine „Wenn-dann-Maschine": aus $A(0)$ macht er $A(1)$, aus $A(1)$ macht er $A(2)$, usw. Jede einzelne Zahl wird so nach endlich vielen Schritten erreicht. Formal steckt das im 5. Peano-Axiom: $\\mathbb{N}$ ist die einzige Teilmenge, die die $0$ enthält und mit jedem $n$ auch dessen Nachfolger – also ist die Menge der $n$ mit $A(n)$ schon ganz $\\mathbb{N}$.\n' +
    '\n' +
    '**Sauberes Aufschreib-Schema**\n' +
    'Genau dieses Gerüst (so auch in den Übungslösungen) immer hinschreiben:\n' +
    '1. **Aussage benennen:** „$A(n):$ <die Formel/Behauptung>". Dann: „Behauptung: Für alle $n \\geq n_0$ gilt $A(n)$."\n' +
    '2. **IA:** Startwert einsetzen. Bei Gleichungen getrennt **Linke Seite** und **Rechte Seite** ausrechnen und vergleichen; stimmen sie überein, ist $A(n_0)$ wahr.\n' +
    '3. **IS:** Erst klar notieren, **was** zu zeigen ist (also $A(n+1)$), dann „Sei $n$ beliebig. Angenommen, $A(n)$ gilt. (IV)". Nun $A(n+1)$ herleiten und an der Stelle, wo du die Annahme benutzt, $\\stackrel{(IV)}{=}$ bzw. $\\stackrel{(IV)}{\\geq}$ schreiben.\n' +
    '4. **Abschluss:** „Somit ist $A(n+1)$ wahr. $\\square$"\n' +
    '\n' +
    '**Varianten**\n' +
    'Start bei $n_0 \\neq 0$: Soll $A(n)$ nur für alle $n \\geq n_0$ gelten (etwa $n \\geq 1$, geschrieben $n \\in \\mathbb{N}^{*}$), macht man den **Induktionsanfang** bei $n_0$ statt bei $0$; der IS bleibt gleich. Die Dominokette beginnt dann eben bei $n_0$.\n' +
    'Starke Induktion: Im IS darf man als Voraussetzung nicht nur $A(n)$, sondern $A(n_0), A(n_0+1), \\dots, A(n)$ **gleichzeitig** annehmen, um $A(n+1)$ zu zeigen. Nützlich, wenn der Schritt auf mehrere kleinere Fälle zurückgreift (z. B. bei Rekursionen). Die Beweiskraft ist dieselbe.\n' +
    '\n' +
    '**Anwendungstypen**\n' +
    '| Typ | Was wird gezeigt | Typischer IS-Trick |\n' +
    '|---|---|---|\n' +
    '| Summen-/Produktformel | $\\sum_{k=1}^{n} \\dots = \\text{Formel}(n)$ | letzten Summanden/Faktor abspalten, dann (IV) |\n' +
    '| Teilbarkeit | $m \\mid \\text{Term}(n)$ | $\\text{Term}(n+1)$ als $\\text{Term}(n)$ plus Vielfaches schreiben |\n' +
    '| Ungleichung | $\\text{Term}(n) \\geq \\text{Schranke}(n)$ | mit (IV) abschätzen, Restterm $\\geq 0$ weglassen |\n' +
    '\n' +
    '**Worauf man im IS achten muss**\n' +
    'Der IS lebt davon, dass die **(IV) gezielt eingesetzt** wird – ein Beweis ohne Verwendung der Annahme ist fast sicher falsch. Praktisch heißt das: Forme $A(n+1)$ so um, dass der Ausdruck aus $A(n)$ wörtlich auftaucht, ersetze ihn per (IV) und rechne weiter. Bei Summen den **letzten Summanden abspalten** ($\\sum_{k=1}^{n+1} = \\sum_{k=1}^{n} + (n+1)\\text{-ter Term}$). Bei Ungleichungen vorsichtig abschätzen: Multiplizieren mit einer **negativen** Größe dreht das Zeichen um (genau hier braucht Bernoulli die Bedingung $x \\geq -1$). Häufige Fehler: IA vergessen oder am falschen Startwert; (IV) gar nicht benutzen; im IS schon das behaupten, was man erst zeigen will.',
  beispiele: [
    {
      szenario: 'Summen- und Produktformeln',
      beispiele: [
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}, n \\geq 1$, die Gaußsche Summenformel $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$.\n**Lösung:** $A(n): \\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$.\nIA $(n=1)$: Linke Seite $\\sum_{k=1}^{1} k = 1$. Rechte Seite $\\frac{1 \\cdot 2}{2} = 1$. Stimmt, also $A(1)$ wahr.\nIS $(n \\to n+1)$: Angenommen $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$ (IV). Dann $\\sum_{k=1}^{n+1} k = \\sum_{k=1}^{n} k + (n+1) \\stackrel{(IV)}{=} \\frac{n(n+1)}{2} + (n+1) = \\frac{n(n+1) + 2(n+1)}{2} = \\frac{(n+1)(n+2)}{2}$.\n**Ergebnis:** Das ist die Formel für $n+1$, also gilt $A(n)$ für alle $n \\geq 1$. $\\square$',
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}^{*}$, dass $\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$ (Übungsblatt 3).\n**Lösung:** $A(n): \\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$.\nIA $(n=1)$: Links $\\frac{1}{1 \\cdot 2} = \\frac{1}{2}$. Rechts $1 - \\frac{1}{2} = \\frac{1}{2}$. Stimmt, $A(1)$ wahr.\nIS: Angenommen (IV) gilt. Dann $\\sum_{k=1}^{n+1} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\frac{1}{k(k+1)} + \\frac{1}{(n+1)(n+2)} \\stackrel{(IV)}{=} 1 - \\frac{1}{n+1} + \\frac{1}{(n+1)(n+2)} = 1 + \\frac{-(n+2) + 1}{(n+1)(n+2)} = 1 + \\frac{-(n+1)}{(n+1)(n+2)} = 1 - \\frac{1}{n+2}$.\n**Ergebnis:** Formel für $n+1$ bestätigt, also gilt sie für alle $n \\geq 1$. $\\square$',
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}^{*}$, dass $\\prod_{k=1}^{n} \\left(1 + \\frac{1}{k}\\right) = n+1$ (Übungsblatt 4).\n**Lösung:** $A(n): \\prod_{k=1}^{n} \\left(1 + \\frac{1}{k}\\right) = n+1$.\nIA $(n=1)$: Links $1 + \\frac{1}{1} = 2$. Rechts $1+1 = 2$. Stimmt, $A(1)$ wahr.\nIS: Angenommen $\\prod_{k=1}^{n}\\left(1+\\frac{1}{k}\\right) = n+1$ (IV). Den letzten Faktor abspalten: $\\prod_{k=1}^{n+1}\\left(1+\\frac{1}{k}\\right) = \\left(1 + \\frac{1}{n+1}\\right) \\prod_{k=1}^{n}\\left(1+\\frac{1}{k}\\right) \\stackrel{(IV)}{=} \\left(1 + \\frac{1}{n+1}\\right)(n+1) = (n+1) + 1 = n+2$.\n**Ergebnis:** Formel für $n+1$ gilt, also für alle $n \\geq 1$. $\\square$',
      ],
    },
    {
      szenario: 'Teilbarkeit',
      beispiele: [
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}^{*}$, dass $3^n - 3$ ohne Rest durch $6$ teilbar ist (Übungsblatt 3).\n**Lösung:** $A(n):$ „$3^n - 3$ ist durch $6$ teilbar".\nIA $(n=1)$: $3^1 - 3 = 0$, und $0$ ist durch $6$ teilbar. Also $A(1)$ wahr.\nIS: Angenommen, $3^n - 3$ ist durch $6$ teilbar (IV). Schreibe $3^{n+1} - 3 = 3 \\cdot 3^n - 3 = 3(3^n - 1) = 3(3^n - 3 + 2) = 3(3^n - 3) + 6$. Der erste Summand ist nach (IV) durch $6$ teilbar (Vielfaches einer durch $6$ teilbaren Zahl), $6$ selbst auch.\n**Ergebnis:** Die Summe $3(3^n-3) + 6$, also $3^{n+1} - 3$, ist durch $6$ teilbar. $\\square$',
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}$, dass $n^3 - n$ durch $3$ teilbar ist.\n**Lösung:** $A(n):$ „$3 \\mid n^3 - n$".\nIA $(n=0)$: $0^3 - 0 = 0$ ist durch $3$ teilbar. Also $A(0)$ wahr.\nIS: Angenommen $3 \\mid n^3 - n$ (IV). Es ist $(n+1)^3 - (n+1) = n^3 + 3n^2 + 3n + 1 - n - 1 = (n^3 - n) + 3(n^2 + n)$. Der erste Klammerterm ist nach (IV) durch $3$ teilbar, der zweite Summand $3(n^2+n)$ offensichtlich.\n**Ergebnis:** $(n+1)^3 - (n+1)$ ist durch $3$ teilbar, also gilt $A(n)$ für alle $n$. $\\square$',
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}$, dass $7^n - 1$ durch $6$ teilbar ist.\n**Lösung:** $A(n):$ „$6 \\mid 7^n - 1$".\nIA $(n=0)$: $7^0 - 1 = 0$ ist durch $6$ teilbar. Also $A(0)$ wahr.\nIS: Angenommen $6 \\mid 7^n - 1$ (IV). Es ist $7^{n+1} - 1 = 7 \\cdot 7^n - 1 = 7(7^n - 1) + 6$. Der erste Summand ist nach (IV) durch $6$ teilbar, $6$ ebenfalls.\n**Ergebnis:** $7^{n+1} - 1$ ist durch $6$ teilbar, also gilt $A(n)$ für alle $n$. $\\square$',
      ],
    },
    {
      szenario: 'Ungleichungen (inkl. Bernoulli)',
      beispiele: [
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}$, dass $2^n \\geq n+1$ (Übungsblatt 3).\n**Lösung:** $A(n): 2^n \\geq n+1$.\nIA $(n=0)$: Links $2^0 = 1$, rechts $0+1 = 1$. Wegen $1 \\geq 1$ ist $A(0)$ wahr.\nIS: Angenommen $2^n \\geq n+1$ (IV). Dann $2^{n+1} = 2 \\cdot 2^n \\stackrel{(IV)}{\\geq} 2(n+1) = n + n + 2 \\geq n + 2$ (da $n \\geq 0$).\n**Ergebnis:** $2^{n+1} \\geq (n+1)+1$, also gilt $A(n)$ für alle $n$. $\\square$',
        '**Aufgabe:** (Bernoulli) Sei $x \\in [-1, \\infty)$. Zeige für jedes $n \\in \\mathbb{N}$, dass $(1+x)^n \\geq 1 + nx$ (Übungsblatt 4).\n**Lösung:** $A(n): (1+x)^n \\geq 1 + nx$.\nIA $(n=0)$: Links $(1+x)^0 = 1$, rechts $1 + 0 \\cdot x = 1$. Wegen $1 \\geq 1$ ist $A(0)$ wahr.\nIS: Angenommen $(1+x)^n \\geq 1 + nx$ (IV). Da $1 + x \\geq 0$ (hier wird $x \\geq -1$ gebraucht!), darf man mit $1+x$ multiplizieren, ohne das Zeichen zu drehen: $(1+x)^{n+1} = (1+x)(1+x)^n \\stackrel{(IV)}{\\geq} (1+x)(1+nx) = 1 + (n+1)x + nx^2 \\geq 1 + (n+1)x$, weil $nx^2 \\geq 0$.\n**Ergebnis:** $(1+x)^{n+1} \\geq 1 + (n+1)x$. Die Bedingung $x \\geq -1$ sichert das Vorzeichen beim Multiplizieren. $\\square$',
        '**Aufgabe:** Zeige für jedes $n \\in \\mathbb{N}, n \\geq 4$, dass $2^n \\geq n^2$ (Start bei $n_0 = 4$).\n**Lösung:** $A(n): 2^n \\geq n^2$.\nIA $(n=4)$: Links $2^4 = 16$, rechts $4^2 = 16$. Wegen $16 \\geq 16$ ist $A(4)$ wahr.\nIS: Sei $n \\geq 4$, angenommen $2^n \\geq n^2$ (IV). Dann $2^{n+1} = 2 \\cdot 2^n \\stackrel{(IV)}{\\geq} 2n^2 = n^2 + n^2$. Für $n \\geq 4$ gilt $n^2 \\geq 2n+1$, also $n^2 + n^2 \\geq n^2 + 2n + 1 = (n+1)^2$.\n**Ergebnis:** $2^{n+1} \\geq (n+1)^2$, also gilt $A(n)$ für alle $n \\geq 4$. $\\square$',
      ],
    },
  ],
}
