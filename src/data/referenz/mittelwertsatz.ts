import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'mittelwertsatz',
  titel: 'Mittelwertsatz & Monotonie',
  inhalt:
    '**Worum geht es?**\n' +
    'Der Mittelwertsatz verbindet die **Ableitung** $f\'$ mit dem **Verhalten** von $f$ (Steigen, Fallen, Extrema). Er ist das Werkzeug, mit dem man aus dem Vorzeichen von $f\'$ auf Monotonie schließt — die Grundlage jeder Kurvendiskussion.\n' +
    '\n' +
    '**Satz von Rolle (Spezialfall)**\n' +
    'Ist $f$ auf $[a,b]$ stetig, auf $(a,b)$ differenzierbar und $f(a) = f(b)$, dann gibt es (mindestens) eine Stelle $\\xi \\in (a,b)$ mit $f\'(\\xi) = 0$. Anschaulich: Beginnt und endet eine glatte Kurve auf gleicher Höhe, gibt es dazwischen eine waagerechte Tangente (ein Hoch- oder Tiefpunkt).\n' +
    '\n' +
    '**Mittelwertsatz der Differentialrechnung**\n' +
    'Ist $f$ auf $[a,b]$ stetig und auf $(a,b)$ differenzierbar, dann gibt es ein $\\xi \\in (a,b)$ mit\n' +
    '$f\'(\\xi) = \\dfrac{f(b) - f(a)}{b - a}.$\n' +
    'Anschaulich: Irgendwo im Intervall ist die **Tangente parallel zur Sekante** durch die Endpunkte — die Momentangeschwindigkeit erreicht einmal die Durchschnittsgeschwindigkeit.\n' +
    '\n' +
    '**Monotoniekriterium (die wichtigste Folgerung)**\n' +
    'Auf einem Intervall gilt: ist $f\'(x) > 0$ überall, so ist $f$ **streng monoton wachsend**; ist $f\'(x) < 0$, so **streng monoton fallend**; ist $f\'(x) = 0$ überall, so ist $f$ **konstant**. Damit liest man das Steigungsverhalten direkt am Vorzeichen von $f\'$ ab.\n' +
    '\n' +
    '**Lokale Extrema**\n' +
    '**Notwendig:** an einer inneren lokalen Extremstelle $x_0$ gilt $f\'(x_0) = 0$ (waagerechte Tangente, „kritische Stelle"). Das reicht aber nicht ($f(x)=x^3$ hat $f\'(0)=0$, aber keinen Extrempunkt — Sattelpunkt). **Hinreichend** ist einer der beiden Tests: (1) **Vorzeichenwechsel** von $f\'$ bei $x_0$ — von $+$ nach $-$ ergibt ein **Maximum**, von $-$ nach $+$ ein **Minimum**; (2) $f\'(x_0)=0$ und $f\'\'(x_0) < 0$ → Maximum, $f\'\'(x_0) > 0$ → Minimum.\n' +
    '\n' +
    '**Krümmung**\n' +
    'Die zweite Ableitung beschreibt die Krümmung: $f\'\'(x) > 0$ bedeutet **konvex** (Linkskurve), $f\'\'(x) < 0$ **konkav** (Rechtskurve). Ein Vorzeichenwechsel von $f\'\'$ markiert einen **Wendepunkt**.\n' +
    '\n' +
    '**Kurzablauf Kurvendiskussion**\n' +
    '1. $f\'$ bestimmen, $f\'(x)=0$ lösen → kritische Stellen.\n' +
    '2. Art per Vorzeichenwechsel oder $f\'\'$ prüfen → Hoch-/Tief-/Sattelpunkte.\n' +
    '3. Monotonie-Intervalle aus dem Vorzeichen von $f\'$ ablesen.\n' +
    '4. $f\'\'(x)=0$ mit Vorzeichenwechsel → Wendepunkte.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '$f\'(x_0)=0$ ohne weiteren Test schon als Extremum werten (Sattelpunkt übersehen); die Voraussetzungen (Stetigkeit auf $[a,b]$, Differenzierbarkeit auf $(a,b)$) ignorieren; Maximum/Minimum-Zuordnung beim Vorzeichenwechsel vertauschen.',
  beispiele: [
    {
      szenario: 'Mittelwertsatz anwenden',
      beispiele: [
        '**Aufgabe:** Bestimme $\\xi$ aus dem Mittelwertsatz für $f(x)=x^2$ auf $[0,2]$.\n**Lösung:** $\\frac{f(2)-f(0)}{2-0} = \\frac{4-0}{2} = 2$; $f\'(\\xi)=2\\xi = 2 \\Rightarrow \\xi=1$.\n**Ergebnis:** $\\xi = 1$.',
        '**Aufgabe:** Zeige mit Rolle: $f(x)=x^2-4x+3$ hat auf $[1,3]$ eine Stelle mit waagerechter Tangente.\n**Lösung:** $f(1)=0=f(3)$, $f$ ist glatt; also existiert $\\xi$ mit $f\'(\\xi)=0$. $f\'(x)=2x-4=0 \\Rightarrow \\xi=2$.\n**Ergebnis:** $\\xi = 2$.',
        '**Aufgabe:** Ein Auto legt in $2$ h $180$ km zurück. Begründe, dass es einmal genau $90$ km/h fuhr.\n**Lösung:** Weg $s(t)$ stetig/differenzierbar; Mittelwertsatz: $\\exists\\,t$ mit $s\'(t)=\\frac{180-0}{2-0}=90$.\n**Ergebnis:** ja, bei einem Zeitpunkt $t\\in(0,2)$.',
      ],
    },
    {
      szenario: 'Monotonie bestimmen',
      beispiele: [
        '**Aufgabe:** Wo ist $f(x)=x^3-3x$ steigend/fallend?\n**Lösung:** $f\'(x)=3x^2-3=3(x-1)(x+1)$; $f\'>0$ für $|x|>1$, $f\'<0$ für $-1<x<1$.\n**Ergebnis:** wachsend auf $(-\\infty,-1)$ und $(1,\\infty)$, fallend auf $(-1,1)$.',
        '**Aufgabe:** Ist $f(x)=e^x - x$ auf $(0,\\infty)$ monoton?\n**Lösung:** $f\'(x)=e^x-1>0$ für $x>0$.\n**Ergebnis:** streng monoton wachsend.',
        '**Aufgabe:** Zeige, dass $f(x)=\\ln x - x$ auf $(1,\\infty)$ fällt.\n**Lösung:** $f\'(x)=\\frac1x-1<0$ für $x>1$.\n**Ergebnis:** streng monoton fallend.',
      ],
    },
    {
      szenario: 'Extrema finden',
      beispiele: [
        '**Aufgabe:** Extrema von $f(x)=x^3-3x$.\n**Lösung:** $f\'(x)=3x^2-3=0 \\Rightarrow x=\\pm1$; $f\'\'(x)=6x$: $f\'\'(-1)=-6<0$ (Max), $f\'\'(1)=6>0$ (Min).\n**Ergebnis:** Hochpunkt $(-1,2)$, Tiefpunkt $(1,-2)$.',
        '**Aufgabe:** Extrema von $f(x)=x^2-4x+7$.\n**Lösung:** $f\'(x)=2x-4=0 \\Rightarrow x=2$; $f\'\'(x)=2>0$ (Minimum); $f(2)=3$.\n**Ergebnis:** Tiefpunkt $(2,3)$.',
        '**Aufgabe:** Hat $f(x)=x^3$ in $0$ ein Extremum?\n**Lösung:** $f\'(0)=0$, aber $f\'(x)=3x^2\\ge0$ hat KEINEN Vorzeichenwechsel.\n**Ergebnis:** kein Extremum (Sattelpunkt).',
      ],
    },
  ],
}
