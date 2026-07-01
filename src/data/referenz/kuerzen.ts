import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'kuerzen',
  titel: 'Kürzen von Brüchen',
  inhalt:
    '**Worum geht es?**\n' +
    'Kürzen macht einen Bruch einfacher, ohne seinen Wert zu verändern: Aus $\\frac{6}{8}$ wird $\\frac{3}{4}$, aus $\\frac{k^2+k^3}{k^2}$ wird $1+k$. Man braucht das ständig, um Ergebnisse in die einfachste Form zu bringen und um große Terme überschaubar zu machen.\n' +
    '\n' +
    '**Die Regel**\n' +
    'Kürzen heißt: **Zähler und Nenner durch denselben gemeinsamen Faktor k teilen**. Formal\n' +
    '$\\frac{k\\cdot a}{k\\cdot b} = \\frac{a}{b}\\qquad(k\\neq 0,\\ b\\neq 0).$\n' +
    'Der Faktor $k$ muss als **gemeinsamer Faktor** im ganzen Zähler **und** im ganzen Nenner stecken. $k=0$ ist verboten (durch $0$ teilt man nie).\n' +
    '\n' +
    '**Warum ändert das den Wert nicht?**\n' +
    'Ein gemeinsamer Faktor oben und unten ist $\\frac{k}{k}=1$. Man teilt also in Wahrheit durch $1$: $\\frac{k\\cdot a}{k\\cdot b}=\\frac{k}{k}\\cdot\\frac{a}{b}=1\\cdot\\frac{a}{b}=\\frac{a}{b}$. Der Bruch sieht anders aus, ist aber dieselbe Zahl.\n' +
    '\n' +
    '**Merksatz: „Aus Summen kürzen nur die Dummen"**\n' +
    'Gekürzt werden dürfen **nur Faktoren**, **niemals einzelne Summanden**. In $\\frac{a+2}{a+3}$ ist das $a$ kein Faktor, sondern ein Summand – dieser Bruch ist **nicht kürzbar**. Erst wenn Zähler und Nenner als **Produkt** geschrieben sind, darf man streichen.\n' +
    '\n' +
    '**Wie kürzt man? (Vorgehen)**\n' +
    '1. **Zähler faktorisieren** (als Produkt schreiben): gemeinsame Faktoren ausklammern, Potenzgesetze und binomische Formeln nutzen, z. B. $a^2-b^2=(a-b)(a+b)$.\n' +
    '2. **Nenner faktorisieren** – genauso.\n' +
    '3. **Gemeinsame Faktoren streichen** (durch sie teilen).\n' +
    '4. Den **Rest** als gekürzten Bruch hinschreiben. Bleibt kein gemeinsamer Faktor, ist der Bruch schon vollständig gekürzt.\n' +
    '\n' +
    '**Zahlen kürzt man genauso**\n' +
    'Bei reinen Zahlenbrüchen ist der Faktor der **größte gemeinsame Teiler (ggT)**: $\\frac{18}{24}=\\frac{6\\cdot 3}{6\\cdot 4}=\\frac{3}{4}$. Schrittweises Kürzen (erst durch $2$, dann durch $3$) führt zum selben Ergebnis.\n' +
    '\n' +
    '**Kürzbar oder nicht? – Beispiele zum Vergleich**\n' +
    '| Bruch | gekürzt | Grund |\n' +
    '|---|---|---|\n' +
    '| $\\frac{k\\,a}{k\\,b}$ | $\\frac{a}{b}$ | $k$ ist Faktor in beiden |\n' +
    '| $\\frac{a^2-b^2}{a-b}$ | $a+b$ | Zähler $=(a-b)(a+b)$ |\n' +
    '| $\\frac{a+2}{a+3}$ | (gar nicht) | $a$ ist nur Summand |\n' +
    '| $\\frac{a^2+b^2}{a+b}$ | (gar nicht) | Zähler nicht faktorisierbar |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Summanden streichen: $\\frac{a+2}{a+3}\\neq\\frac{2}{3}$ – grob falsch.\n' +
    '• $\\frac{a^2+b^2}{a+b}$: Es gibt **keine** Formel $a^2+b^2=(a+b)(\\dots)$; der Bruch ist nicht kürzbar.\n' +
    '• Nur einen Teil des Zählers/Nenners kürzen, obwohl der Faktor nicht überall steckt.\n' +
    '• Vorzeichen übersehen: $\\frac{a-b}{b-a}=\\frac{a-b}{-(a-b)}=-1$, nicht $+1$.',
  beispiele: [
    {
      szenario: 'Zahlenbrüche kürzen',
      beispiele: [
        '**Aufgabe:** Kürze $\\frac{6}{8}$.\n**Lösung:** Gemeinsamer Faktor von $6$ und $8$ ist $2$: $\\frac{6}{8}=\\frac{2\\cdot 3}{2\\cdot 4}$. Den Faktor $2$ streichen.\n**Ergebnis:** $\\frac{6}{8}=\\frac{3}{4}$.',
        '**Aufgabe:** Kürze $\\frac{18}{24}$ vollständig.\n**Lösung:** Der größte gemeinsame Teiler ist $6$: $\\frac{18}{24}=\\frac{6\\cdot 3}{6\\cdot 4}$. Faktor $6$ streichen; $3$ und $4$ haben keinen gemeinsamen Teiler mehr.\n**Ergebnis:** $\\frac{18}{24}=\\frac{3}{4}$.',
        '**Aufgabe:** Kürze $\\frac{36}{60}$.\n**Lösung:** $36=12\\cdot 3$, $60=12\\cdot 5$, also $\\frac{36}{60}=\\frac{12\\cdot 3}{12\\cdot 5}$. Faktor $12$ streichen.\n**Ergebnis:** $\\frac{36}{60}=\\frac{3}{5}$.',
      ],
    },
    {
      szenario: 'Termbrüche: erst faktorisieren',
      beispiele: [
        '**Aufgabe:** Kürze $\\frac{k^2+k^3}{k^2}$.\n**Lösung:** Im Zähler $k^2$ ausklammern: $k^2+k^3=k^2(1+k)$. Damit $\\frac{k^2(1+k)}{k^2}$, der Faktor $k^2$ steht oben und unten und wird gestrichen.\n**Ergebnis:** $\\frac{k^2+k^3}{k^2}=1+k$.',
        '**Aufgabe:** Kürze $\\frac{a^2-b^2}{a-b}$.\n**Lösung:** 3. binomische Formel im Zähler: $a^2-b^2=(a-b)(a+b)$. Also $\\frac{(a-b)(a+b)}{a-b}$; der Faktor $(a-b)$ wird gestrichen.\n**Ergebnis:** $\\frac{a^2-b^2}{a-b}=a+b$.',
        '**Aufgabe:** Kürze $\\frac{2k^2}{4k^2+6k^3}$.\n**Lösung:** Im Nenner $2k^2$ ausklammern: $4k^2+6k^3=2k^2(2+3k)$. Also $\\frac{2k^2}{2k^2(2+3k)}$; den Faktor $2k^2$ streichen.\n**Ergebnis:** $\\frac{2k^2}{4k^2+6k^3}=\\frac{1}{2+3k}$.',
      ],
    },
    {
      szenario: 'Vorzeichen beim Kürzen',
      beispiele: [
        '**Aufgabe:** Kürze $\\frac{a-b}{a-b}$.\n**Lösung:** Zähler und Nenner sind identisch, also derselbe Faktor; ein Term geteilt durch sich selbst ist $1$ (da $a-b\\neq 0$).\n**Ergebnis:** $\\frac{a-b}{a-b}=1$.',
        '**Aufgabe:** Kürze $\\frac{a-b}{b-a}$.\n**Lösung:** Es ist $b-a=-(a-b)$. Damit $\\frac{a-b}{-(a-b)}$; der Faktor $(a-b)$ wird gestrichen und das Minus bleibt.\n**Ergebnis:** $\\frac{a-b}{b-a}=-1$.',
        '**Aufgabe:** Kürze $\\frac{3a-3b}{b-a}$.\n**Lösung:** Zähler faktorisieren: $3a-3b=3(a-b)$, Nenner $b-a=-(a-b)$. Also $\\frac{3(a-b)}{-(a-b)}$; Faktor $(a-b)$ streichen.\n**Ergebnis:** $\\frac{3a-3b}{b-a}=-3$.',
      ],
    },
    {
      szenario: 'Nicht kürzbar erkennen',
      beispiele: [
        '**Aufgabe:** Lässt sich $\\frac{a+2}{a+3}$ kürzen?\n**Lösung:** Im Zähler und Nenner steht je eine **Summe**. $a$ ist nur ein Summand, kein gemeinsamer Faktor – „aus Summen kürzen nur die Dummen". Faktorisieren bringt nichts.\n**Ergebnis:** $\\frac{a+2}{a+3}$ ist **nicht kürzbar**.',
        '**Aufgabe:** Lässt sich $\\frac{a^2+b^2}{a+b}$ kürzen?\n**Lösung:** Versuch der Faktorisierung: $a^2+b^2$ lässt sich (über den reellen Zahlen) **nicht** als Produkt mit Faktor $(a+b)$ schreiben – Vorsicht, es ist $\\neq(a+b)^2$.\n**Ergebnis:** $\\frac{a^2+b^2}{a+b}$ ist **nicht kürzbar**.',
        '**Aufgabe:** Lässt sich $\\frac{1+k^2}{1+k^3}$ kürzen?\n**Lösung:** Zähler $1+k^2$ hat keinen gemeinsamen Faktor mit dem Nenner $1+k^3=(1+k)(1-k+k^2)$. Kein Faktor des Zählers taucht im Nenner auf.\n**Ergebnis:** $\\frac{1+k^2}{1+k^3}$ ist **nicht kürzbar**.',
      ],
    },
  ],
}
