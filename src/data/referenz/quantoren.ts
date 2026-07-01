import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'quantoren',
  titel: 'Quantoren & Negation',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein **Quantor** sagt, für *wie viele* Elemente einer Menge eine Aussage gelten soll. Statt umständlich „für jedes Element …“ oder „es gibt ein Element …“ auszuschreiben, fasst man das in ein einziges Symbol. So werden mathematische Behauptungen kurz, eindeutig und überprüfbar — und man kann sie nach festen Regeln verneinen.\n' +
    '\n' +
    '**Die zwei Quantoren**\n' +
    'Sei $M$ eine Menge und $A(m)$ eine Aussage über ein Element $m$ (z. B. „$m$ ist gerade“).\n' +
    '• **Allquantor** $\\forall$ („für alle“): $\\forall m \\in M : A(m)$ bedeutet „Für alle Elemente $m$ der Menge $M$ gilt $A(m)$.“\n' +
    '• **Existenzquantor** $\\exists$ („es gibt“): $\\exists m \\in M : A(m)$ bedeutet „Es gibt (mindestens) ein Element $m$ in $M$, für das $A(m)$ gilt.“\n' +
    'Der Doppelpunkt wird manchmal weggelassen. Zusätzlich gibt es $\\exists!$ („es gibt **genau ein**“): $\\exists! m \\in M : A(m)$ heißt, $A(m)$ gilt für *genau ein* $m$ (Existenz **und** Eindeutigkeit).\n' +
    '\n' +
    '**Gebundene und freie Variablen**\n' +
    'Eine Variable, an der ein Quantor hängt, ist **gebunden** — ihr Name ist beliebig: $\\forall m \\in M : A(m)$ und $\\forall k \\in M : A(k)$ bedeuten dasselbe. Eine Variable ohne Quantor ist **frei**; sie muss von außen festgelegt sein, sonst ist die Aussage weder wahr noch falsch. In $\\forall x \\in M : x < y$ ist $x$ gebunden und $y$ frei.\n' +
    '\n' +
    '**Verschachtelte Quantoren — Reihenfolge zählt!**\n' +
    'Stehen mehrere Quantoren hintereinander, liest man sie **von links nach rechts**. Bei gemischten Quantoren ändert ein Vertauschen die Bedeutung:\n' +
    '$\\forall x\\, \\exists y : P(x,y)$ — zu jedem $x$ darf man ein *eigenes*, passendes $y$ wählen.\n' +
    '$\\exists y\\, \\forall x : P(x,y)$ — *ein einziges* $y$ muss für *alle* $x$ gleichzeitig passen.\n' +
    'Die zweite Aussage ist die stärkere: aus $\\exists y\\, \\forall x : P(x,y)$ folgt stets $\\forall x\\, \\exists y : P(x,y)$, aber nicht umgekehrt. Zwei Quantoren **gleicher** Art dürfen dagegen vertauscht werden ($\\forall x\\,\\forall y$ ist gleich $\\forall y\\,\\forall x$).\n' +
    '\n' +
    '**Negation von Quantoren**\n' +
    'Verneinen heißt: „Es gilt nicht, dass …“ voranstellen und auflösen. Es gilt:\n' +
    '$\\neg\\, (\\forall m \\in M : A(m)) \\;\\equiv\\; \\exists m \\in M : \\neg A(m)$\n' +
    '$\\neg\\, (\\exists m \\in M : A(m)) \\;\\equiv\\; \\forall m \\in M : \\neg A(m)$\n' +
    'Merksatz: **Quantor kippt** (aus $\\forall$ wird $\\exists$ und umgekehrt), und die **innere Aussage wird negiert**. Der Wahrheitswert dreht sich dabei um.\n' +
    '\n' +
    '**Negation durchziehen (mehrere Quantoren)**\n' +
    'Stehen mehrere Quantoren nebeneinander, werden sie **der Reihe nach** gekippt und die übrig bleibende Aussage am Schluss negiert. Beispiel:\n' +
    '$\\neg\\, (\\forall x\\, \\exists y : y < x) \\;\\equiv\\; \\exists x\\, \\forall y : \\neg(y < x) \\;\\equiv\\; \\exists x\\, \\forall y : y \\geq x$\n' +
    '\n' +
    '**Wie prüft man eine quantifizierte Aussage?**\n' +
    '1. **Form erkennen:** Womit fängt sie an, $\\forall$ oder $\\exists$?\n' +
    '2. $\\forall$ **(All-Aussage):** wahr, wenn $A(m)$ für *jedes* $m$ gilt; **falsch** schon bei *einem einzigen* Gegenbeispiel.\n' +
    '3. $\\exists$ **(Existenz-Aussage):** wahr, wenn man *ein* passendes $m$ findet (angeben!); falsch, wenn *kein* $m$ passt.\n' +
    '4. **Negieren:** Quantoren der Reihe nach kippen, innere Aussage verneinen — fertig.\n' +
    '\n' +
    '**Übersicht**\n' +
    '| Aussage | Sprechweise | Negation |\n' +
    '|---|---|---|\n' +
    '| $\\forall m : A(m)$ | für alle $m$ | $\\exists m : \\neg A(m)$ |\n' +
    '| $\\exists m : A(m)$ | es gibt ein $m$ | $\\forall m : \\neg A(m)$ |\n' +
    '| $\\forall x\\, \\exists y : P$ | zu jedem $x$ ein $y$ | $\\exists x\\, \\forall y : \\neg P$ |\n' +
    '| $\\exists x\\, \\forall y : P$ | ein $x$ für alle $y$ | $\\forall x\\, \\exists y : \\neg P$ |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• **Quantor nicht gekippt:** Die Negation von $\\forall m : A(m)$ ist *nicht* $\\forall m : \\neg A(m)$, sondern $\\exists m : \\neg A(m)$.\n' +
    '• **Reihenfolge verwechselt:** $\\forall x\\, \\exists y$ und $\\exists y\\, \\forall x$ sind verschiedene Aussagen.\n' +
    '• **Eine All-Aussage widerlegen heißt nicht „alle prüfen“:** ein einziges Gegenbeispiel genügt.\n' +
    '• Eine Aussage mit **freier** Variable hat ohne Festlegung dieser Variablen keinen Wahrheitswert.',
  beispiele: [
    {
      szenario: 'Quantor-Aussage auf Wahrheit prüfen',
      beispiele: [
        '**Aufgabe:** Sei $M = \\{2, 8, 10, 11\\}$ und $A(m)$: „$m$ ist gerade“. Ist $\\forall m \\in M : A(m)$ wahr?\n**Lösung:** Eine $\\forall$-Aussage ist falsch, sobald ein Gegenbeispiel existiert. Prüfe die Elemente: $2, 8, 10$ sind gerade, aber $11$ ist ungerade — also ein Gegenbeispiel.\n**Ergebnis:** Die Aussage ist **falsch**.',
        '**Aufgabe:** Gleiche Menge $M = \\{2, 8, 10, 11\\}$, $A(m)$: „$m$ ist gerade“. Ist $\\exists m \\in M : A(m)$ wahr?\n**Lösung:** Eine $\\exists$-Aussage ist wahr, sobald man *ein* passendes Element angeben kann. Hier ist z. B. $m = 2$ gerade.\n**Ergebnis:** Die Aussage ist **wahr** (Zeuge $m = 2$).',
        '**Aufgabe:** Sei $\\tilde{M} = \\{2, 8, 10\\}$, $A(m)$: „$m$ ist gerade“. Ist $\\forall m \\in \\tilde{M} : A(m)$ wahr?\n**Lösung:** Jetzt müssen *alle* Elemente gerade sein. $2, 8, 10$ sind alle gerade, ein Gegenbeispiel gibt es nicht.\n**Ergebnis:** Die Aussage ist **wahr**.',
      ],
    },
    {
      szenario: 'Eine Quantor-Aussage negieren',
      beispiele: [
        '**Aufgabe:** Negiere $\\forall m \\in M : A(m)$ („Jedes $m \\in M$ ist gerade“) und gib die Sprechweise an.\n**Lösung:** Bei der Negation kippt der Quantor ($\\forall \\to \\exists$) und die innere Aussage wird verneint: $\\neg A(m)$ heißt „$m$ ist nicht gerade“.\n**Ergebnis:** $\\exists m \\in M : \\neg A(m)$ — „Es gibt ein $m \\in M$, das nicht gerade ist.“',
        '**Aufgabe:** Negiere $\\exists m \\in M : A(m)$ („Es gibt ein gerades $m \\in M$“).\n**Lösung:** Der Quantor kippt ($\\exists \\to \\forall$), die innere Aussage wird negiert.\n**Ergebnis:** $\\forall m \\in M : \\neg A(m)$ — „Für jedes $m \\in M$ gilt, dass es nicht gerade ist.“',
        '**Aufgabe:** Negiere die Aussage „$\\forall x \\in \\mathbb{R} : x^2 \\geq 0$“.\n**Lösung:** $\\forall$ wird zu $\\exists$; die Verneinung von $x^2 \\geq 0$ ist $x^2 < 0$.\n**Ergebnis:** $\\exists x \\in \\mathbb{R} : x^2 < 0$ — „Es gibt ein reelles $x$ mit $x^2 < 0$.“ (Diese Negation ist falsch, die Originalaussage also wahr.)',
      ],
    },
    {
      szenario: 'Verschachtelte Quantoren negieren',
      beispiele: [
        '**Aufgabe:** Negiere $\\forall x \\in \\mathbb{N}\\; \\exists y \\in \\mathbb{N} : y < x$.\n**Lösung:** Quantoren der Reihe nach kippen: $\\forall \\to \\exists$, dann $\\exists \\to \\forall$. Übrige Aussage negieren: $\\neg(y < x)$ ist $y \\geq x$.\n**Ergebnis:** $\\exists x \\in \\mathbb{N}\\; \\forall y \\in \\mathbb{N} : y \\geq x$ — „Es gibt ein $x \\in \\mathbb{N}$, sodass für alle $y \\in \\mathbb{N}$ gilt $y \\geq x$.“ (Diese Negation ist wahr für $x = 0$, das Original also falsch.)',
        '**Aufgabe:** Negiere $\\exists y \\in \\mathbb{R}\\; \\forall x \\in \\mathbb{R} : x \\leq y$ („es gibt eine größte reelle Zahl“).\n**Lösung:** Erst $\\exists \\to \\forall$, dann $\\forall \\to \\exists$. Negiere $x \\leq y$ zu $x > y$.\n**Ergebnis:** $\\forall y \\in \\mathbb{R}\\; \\exists x \\in \\mathbb{R} : x > y$ — „Zu jeder Zahl $y$ gibt es eine größere Zahl $x$.“ (Das ist wahr, das Original also falsch.)',
        '**Aufgabe:** Negiere $\\forall \\varepsilon > 0\\; \\exists n \\in \\mathbb{N} : \\tfrac{1}{n} < \\varepsilon$.\n**Lösung:** $\\forall \\to \\exists$, $\\exists \\to \\forall$, und $\\neg(\\tfrac{1}{n} < \\varepsilon)$ ist $\\tfrac{1}{n} \\geq \\varepsilon$.\n**Ergebnis:** $\\exists \\varepsilon > 0\\; \\forall n \\in \\mathbb{N} : \\tfrac{1}{n} \\geq \\varepsilon$ — „Es gibt ein $\\varepsilon > 0$, sodass $\\tfrac{1}{n}$ für alle $n$ mindestens $\\varepsilon$ bleibt.“',
      ],
    },
    {
      szenario: 'Aussagen in Quantoren-Schreibweise übersetzen',
      beispiele: [
        '**Aufgabe:** Schreibe „Jede natürliche Zahl hat einen Nachfolger“ mit Quantoren.\n**Lösung:** Für *jedes* $n$ soll *ein* $m$ existieren mit $m = n + 1$. Das ist ein $\\forall$ gefolgt von einem $\\exists$.\n**Ergebnis:** $\\forall n \\in \\mathbb{N}\\; \\exists m \\in \\mathbb{N} : m = n + 1$.',
        '**Aufgabe:** Schreibe „Es gibt eine kleinste natürliche Zahl“ mit Quantoren.\n**Lösung:** *Ein* $n$ soll existieren, das $\\leq$ *jedem* $k$ ist — also $\\exists$ gefolgt von $\\forall$ (Reihenfolge wichtig!).\n**Ergebnis:** $\\exists n \\in \\mathbb{N}\\; \\forall k \\in \\mathbb{N} : n \\leq k$ (wahr, mit $n = 0$).',
        '**Aufgabe:** Schreibe „Jede positive reelle Zahl besitzt genau eine positive Quadratwurzel“ mit Quantoren.\n**Lösung:** Für *jedes* $x > 0$ gibt es *genau ein* $y > 0$ mit $y^2 = x$ — das „genau ein“ ist $\\exists!$.\n**Ergebnis:** $\\forall x \\in \\mathbb{R}, x > 0\\; \\exists! y \\in \\mathbb{R}, y > 0 : y^2 = x$.',
      ],
    },
  ],
}
