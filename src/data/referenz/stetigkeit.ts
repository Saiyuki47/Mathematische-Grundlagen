import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'stetigkeit',
  titel: 'Stetigkeit',
  inhalt:
    '**Worum geht es?**\n' +
    'Anschaulich ist eine Funktion stetig, wenn man ihren Graphen „ohne Absetzen des Stiftes" durchzeichnen kann — keine Sprünge, keine Löcher, keine Pole. Stetigkeit ist die Eigenschaft, die garantiert, dass kleine Änderungen der Eingabe nur kleine Änderungen der Ausgabe bewirken. Sie ist die Grundvoraussetzung für fast alle weiteren Sätze (Zwischenwertsatz, Extremwertsatz, Differenzierbarkeit).\n' +
    '\n' +
    '**Definition (stetig in einem Punkt)**\n' +
    'Seien $D \\subseteq \\mathbb{R}$ und $f : D \\to \\mathbb{R}$. Die Funktion $f$ heißt **stetig in** $x_0$, falls $x_0 \\in D$ und\n' +
    '$\\lim_{x\\to x_0} f(x) = f(x_0)$.\n' +
    'Das sind drei Bedingungen, die alle erfüllt sein müssen:\n' +
    '1. $f(x_0)$ ist definiert (also $x_0 \\in D$),\n' +
    '2. der Grenzwert $\\lim_{x\\to x_0} f(x)$ existiert,\n' +
    '3. beide Werte stimmen überein.\n' +
    'Wichtig: $x_0$ muss im Definitionsbereich liegen — sonst ist $f(x_0)$ gar nicht definiert.\n' +
    '\n' +
    '**Definition (stetig auf $D$)**\n' +
    '$f$ heißt **stetig** (auf $D$), falls $f$ in jedem Punkt $a \\in D$ stetig ist.\n' +
    '\n' +
    '**Gleichwertige Formulierungen**\n' +
    'Über einseitige Grenzwerte: $f$ ist genau dann stetig in $x_0$, wenn der linksseitige und der rechtsseitige Grenzwert existieren, gleich sind und mit $f(x_0)$ übereinstimmen:\n' +
    '$\\lim_{x\\to x_0^-} f(x) = f(x_0) = \\lim_{x\\to x_0^+} f(x)$.\n' +
    'Folgenkriterium: $f$ ist genau dann stetig in $x_0$, wenn für jede Folge $(x_n)$ in $D$ mit $x_n \\to x_0$ gilt $f(x_n) \\to f(x_0)$. Kurz: man darf Grenzwert und Funktion vertauschen, $\\lim_n f(x_n) = f(\\lim_n x_n)$.\n' +
    '\n' +
    '**Die $\\varepsilon$-$\\delta$-Definition (präzise Fassung)**\n' +
    '$f$ ist stetig in $x_0$, wenn es zu jedem (noch so kleinen) $\\varepsilon > 0$ ein $\\delta > 0$ gibt, so dass für alle $x \\in D$ gilt:\n' +
    'aus $|x - x_0| < \\delta$ folgt $|f(x) - f(x_0)| < \\varepsilon$.\n' +
    'Deutung: Gibt man einen beliebig schmalen Zielschlauch der Höhe $\\varepsilon$ um $f(x_0)$ vor, so findet man stets eine Umgebung der Breite $\\delta$ um $x_0$, deren Funktionswerte komplett in diesem Schlauch landen.\n' +
    '\n' +
    '**Rechenregeln (neue stetige Funktionen aus alten)**\n' +
    'Sind $f$ und $g$ auf $D$ stetig, so sind auch stetig:\n' +
    '| Verknüpfung | stetig auf |\n' +
    '|---|---|\n' +
    '| $f+g$, $f-g$, $f\\cdot g$ | ganz $D$ |\n' +
    '| Quotient $f/g$ | allen $x$ mit $g(x)\\neq 0$ |\n' +
    '| Verkettung $g\\circ f$, also $x\\mapsto g(f(x))$ | $D$ (falls $f(D)\\subseteq E$) |\n' +
    'Beim Quotienten muss man also nur die Nullstellen des Nenners ausschließen.\n' +
    '\n' +
    '**Welche Funktionen sind von vornherein stetig?**\n' +
    'Polynome sind auf ganz $\\mathbb{R}$ stetig. Rationale Funktionen $p/q$ sind auf ihrem ganzen Definitionsbereich stetig (also überall außer in den Nullstellen des Nenners). Die durch Reihen definierten Funktionen $\\exp$, $\\sin$, $\\cos$ sind auf $\\mathbb{R}$ stetig. Die Betragsfunktion $|x|$ ist auf $\\mathbb{R}$ stetig, die Wurzelfunktion $\\sqrt{x}$ auf $[0,\\infty)$. Mit den Rechenregeln folgt: praktisch jede „aus diesen Bausteinen zusammengesetzte" Funktion ist stetig.\n' +
    '\n' +
    '**Wie weist man Stetigkeit nach?**\n' +
    'Standardweg (Baukasten): Zerlege $f$ in elementare Bausteine (Polynom, Wurzel, $\\exp$, $\\sin$, Betrag) und begründe mit den Rechenregeln, dass Summe/Produkt/Quotient/Verkettung stetig ist. Beim Quotienten den Nenner prüfen. Das reicht meist.\n' +
    'Punktweise (an kritischer Stelle, z. B. bei abschnittsweiser Definition): zeige $\\lim_{x\\to x_0^-} f(x)$ und $\\lim_{x\\to x_0^+} f(x)$, vergleiche sie miteinander und mit $f(x_0)$. Stimmen alle drei überein, ist $f$ dort stetig.\n' +
    '\n' +
    '**Arten von Unstetigkeit**\n' +
    '| Typ | was passiert | Beispiel |\n' +
    '|---|---|---|\n' +
    '| Sprungstelle | links- und rechtsseitiger Grenzwert existieren, sind aber verschieden | Vorzeichenfunktion bei $0$ |\n' +
    '| hebbare Lücke | Grenzwert existiert, aber $f(x_0)$ fehlt oder ist „falsch" gesetzt | $\\frac{x^2-1}{x-1}$ bei $x=1$ |\n' +
    '| Polstelle | Funktion strebt gegen $\\pm\\infty$, Grenzwert existiert nicht | $\\frac{1}{x}$ bei $0$ |\n' +
    'Nur die hebbare Lücke lässt sich durch passende Wahl eines einzigen Wertes „reparieren".\n' +
    '\n' +
    '**Stetige Fortsetzung**\n' +
    'Ist $f$ in $x_0$ zunächst nicht (oder nur durch einen freien Parameter $c$) definiert, fragt man: Gibt es ein $c$, so dass $f$ überall stetig wird? Rezept: Berechne $\\lim_{x\\to x_0} f(x)$ über den Rest der Funktion. Existiert dieser Grenzwert (linksseitig = rechtsseitig), so wähle $c$ gleich diesem Grenzwert — dann ist $f$ stetig. Existiert der Grenzwert nicht (Sprung oder Pol), gibt es **kein** passendes $c$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    'Stetigkeit an einer Stelle prüfen, die gar nicht im Definitionsbereich liegt (dann ist die Frage sinnlos — $f(x_0)$ existiert nicht). Bei abschnittsweisen Funktionen nur einen der beiden einseitigen Grenzwerte berechnen. Vergessen, $f(x_0)$ mit dem Grenzwert zu vergleichen (Grenzwert allein genügt nicht). Beim Quotienten die Nennernullstellen nicht ausschließen.',
  beispiele: [
    {
      szenario: 'Stetigkeit mit den Rechenregeln nachweisen',
      beispiele: [
        '**Aufgabe:** Ist $f:\\mathbb{R}\\to\\mathbb{R}$, $x\\mapsto \\exp\\!\\left(\\frac{x}{(\\cos x)^2+1}\\right)$ auf $\\mathbb{R}$ stetig?\n**Lösung:** Bausteine: $x$ (Polynom) und $\\cos x$ sind stetig, also auch $(\\cos x)^2 + 1$ (Produkt + Summe). Der Nenner erfüllt $(\\cos x)^2 + 1 \\geq 1 > 0$ für alle $x$, hat also keine Nullstelle — der Quotient $\\frac{x}{(\\cos x)^2+1}$ ist überall stetig. Schließlich ist $\\exp$ stetig, und die Verkettung stetiger Funktionen ist stetig.\n**Ergebnis:** $f$ ist auf ganz $\\mathbb{R}$ stetig.',
        '**Aufgabe:** Ist $g:\\mathbb{R}\\to\\mathbb{R}$, $x\\mapsto \\sqrt{|x\\sin x|}$ auf $\\mathbb{R}$ stetig?\n**Lösung:** $x$ und $\\sin x$ sind stetig, also auch das Produkt $x\\sin x$. Die Betragsfunktion ist stetig, daher ist $|x\\sin x|$ stetig. Der Ausdruck unter der Wurzel ist stets $\\geq 0$, und die Wurzelfunktion ist auf $[0,\\infty)$ stetig. Die Verkettung stetiger Funktionen ist stetig.\n**Ergebnis:** $g$ ist auf ganz $\\mathbb{R}$ stetig.',
        '**Aufgabe:** Gegeben $f(x)=x$ und $g(x)=4$ für $x\\geq 0$, $g(x)=-4$ für $x<0$. Sind $f$, $g$ und $h=f\\cdot g$ stetig?\n**Lösung:** $f$ ist als Polynom stetig. $g$ ist in $0$ unstetig, da $\\lim_{x\\to 0} g(x)$ nicht existiert (links $-4$, rechts $4$). Für $h$ gilt $h(x)=4x$ für $x\\geq 0$ und $h(x)=-4x$ für $x<0$, also $h(x)=4|x|$. Da der Betrag stetig ist, ist $h$ stetig (prüfe $\\lim_{x\\to 0^-} h = 0 = \\lim_{x\\to 0^+} h = h(0)$).\n**Ergebnis:** $f$ stetig, $g$ unstetig in $0$, $h$ stetig auf $\\mathbb{R}$.',
      ],
    },
    {
      szenario: 'Stetige Fortsetzung: passendes c finden',
      beispiele: [
        '**Aufgabe:** Für welches $c$ ist $f(x)=\\frac{x^2-1}{x-1}$ (für $x\\neq 1$) und $f(1)=c$ überall stetig?\n**Lösung:** Für $x\\neq 1$ ist $f$ als rationale Funktion stetig. Kürzen: $\\frac{x^2-1}{x-1}=\\frac{(x+1)(x-1)}{x-1}=x+1$. Also $\\lim_{x\\to 1} f(x)=2$. Wähle $c$ gleich diesem Grenzwert.\n**Ergebnis:** Für $c=2$ ist $f$ auf ganz $\\mathbb{R}$ stetig (hebbare Lücke).',
        '**Aufgabe:** Für welches $c$ ist $f(x)=\\frac{\\sqrt{1+x}-1}{x}$ (für $x\\neq 0$, $x>-1$) und $f(0)=c$ stetig?\n**Lösung:** Für $x\\neq 0$ ist $f$ stetig (Wurzel und Polynome). Mit $\\sqrt{1+x}+1$ erweitern: $\\frac{\\sqrt{1+x}-1}{x}\\cdot\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}=\\frac{(1+x)-1}{x(\\sqrt{1+x}+1)}=\\frac{x}{x(\\sqrt{1+x}+1)}=\\frac{1}{\\sqrt{1+x}+1}$. Also $\\lim_{x\\to 0} f(x)=\\frac{1}{\\sqrt{1}+1}=\\frac{1}{2}$.\n**Ergebnis:** Für $c=\\frac{1}{2}$ ist $f$ stetig.',
        '**Aufgabe:** Für welches $c$ ist $f(x)=\\frac{3x}{2|x|}$ (für $x\\neq 0$) und $f(0)=c$ stetig?\n**Lösung:** Für $x>0$ ist $f(x)=\\frac{3x}{2x}=\\frac{3}{2}$, für $x<0$ ist $f(x)=\\frac{3x}{2(-x)}=-\\frac{3}{2}$. Also $\\lim_{x\\to 0^-} f(x)=-\\frac{3}{2}$ und $\\lim_{x\\to 0^+} f(x)=\\frac{3}{2}$. Die einseitigen Grenzwerte sind verschieden, $\\lim_{x\\to 0} f(x)$ existiert nicht (Sprungstelle).\n**Ergebnis:** Es gibt **kein** $c$, das $f$ stetig macht.',
      ],
    },
    {
      szenario: 'Abschnittsweise Funktion an der Nahtstelle prüfen',
      beispiele: [
        '**Aufgabe:** Für welches $c$ ist $f(x)=|x|$ für $x<0$, $f(0)=c$, $f(x)=\\sqrt{x}$ für $x>0$ überall stetig?\n**Lösung:** Für $x\\neq 0$ ist $f$ stetig (Betrag bzw. Wurzel). Linksseitig: $\\lim_{x\\to 0^-} |x| = 0$. Rechtsseitig: $\\lim_{x\\to 0^+} \\sqrt{x} = 0$. Beide stimmen überein, also $\\lim_{x\\to 0} f(x)=0$. Wähle $c$ gleich diesem Wert.\n**Ergebnis:** Für $c=0$ ist $f$ auf ganz $\\mathbb{R}$ stetig.',
        '**Aufgabe:** Ist die Vorzeichenfunktion $s(x)=1$ für $x>0$, $s(0)=-1$, $s(x)=-1$ für $x<0$ in $0$ stetig?\n**Lösung:** Linksseitig: $\\lim_{x\\to 0^-} s(x)=-1$. Rechtsseitig: $\\lim_{x\\to 0^+} s(x)=1$. Die beiden einseitigen Grenzwerte sind verschieden, also existiert $\\lim_{x\\to 0} s(x)$ nicht.\n**Ergebnis:** $s$ ist in $0$ unstetig (Sprungstelle), unabhängig vom Wert $s(0)$.',
        '**Aufgabe:** Ist $f(x)=1$ für $x\\neq 0$ und $f(0)=2$ in $0$ stetig?\n**Lösung:** Es gilt $\\lim_{x\\to 0} f(x)=1$ (für alle $x\\neq 0$ ist der Wert $1$). Aber $f(0)=2\\neq 1$. Grenzwert und Funktionswert stimmen nicht überein.\n**Ergebnis:** $f$ ist in $0$ unstetig (hebbare Lücke — mit $f(0)=1$ wäre $f$ stetig).',
      ],
    },
  ],
}
