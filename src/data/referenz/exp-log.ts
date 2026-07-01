import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'exp-log',
  titel: 'Exponential- & Logarithmusfunktion',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Exponentialfunktion** $\\exp$ beschreibt Wachstums- und Zerfallsprozesse, bei denen die Änderungsrate proportional zum aktuellen Bestand ist (Zinsen, Bakterien, radioaktiver Zerfall). Ihre Umkehrung, der **Logarithmus** $\\ln$, beantwortet die umgekehrte Frage: „Mit welchem Exponenten muss ich $e$ potenzieren, um $x$ zu erhalten?" Zusammen erlauben sie, Produkte in Summen zu verwandeln, Exponentialgleichungen aufzulösen und beliebige Potenzen $a^x$ überhaupt erst sauber zu definieren. Diese Karte fasst Definitionen, Rechenregeln und die wichtigsten Grenzwerte zusammen.\n' +
    '\n' +
    '**Die Exponentialfunktion $\\exp$**\n' +
    'Sie ist über ihre **Potenzreihe** definiert:\n' +
    '$\\exp(x)=e^x=\\sum_{k=0}^{\\infty}\\dfrac{x^k}{k!}=1+x+\\dfrac{x^2}{2}+\\dfrac{x^3}{6}+\\dots$\n' +
    'Dabei ist $e=\\exp(1)\\approx 2{,}718$ die **eulersche Zahl**. Es gilt $\\exp:\\mathbb{R}\\to(0,\\infty)$, und die Funktion ist **bijektiv** (jeder positive Wert wird genau einmal getroffen).\n' +
    '\n' +
    '**Eigenschaften von $\\exp$**\n' +
    '| Eigenschaft | Bedeutung |\n' +
    '|---|---|\n' +
    '| $\\exp(0)=1$ | Funktionswert an der Stelle $0$ |\n' +
    '| $\\exp(x+y)=\\exp(x)\\exp(y)$ | **Funktionalgleichung** (Kernregel) |\n' +
    '| $\\exp(-x)=\\dfrac{1}{\\exp(x)}$ | Kehrwert statt negativem Exponenten |\n' +
    '| $\\exp(x)>0$ | nie null oder negativ |\n' +
    '| streng monoton wachsend | $x<y\\Rightarrow \\exp(x)<\\exp(y)$ |\n' +
    '| stetig | keine Sprünge |\n' +
    'Grenzwerte an den Rändern: $\\lim_{x\\to-\\infty}\\exp(x)=0$ und $\\lim_{x\\to\\infty}\\exp(x)=\\infty$.\n' +
    '\n' +
    '**Der natürliche Logarithmus $\\ln$**\n' +
    'Da $\\exp$ bijektiv ist, besitzt sie eine **Umkehrfunktion** $\\ln:(0,\\infty)\\to\\mathbb{R}$. Definierend ist die Äquivalenz $\\ln(x)=y\\iff x=\\exp(y)$. Umkehrung heißt konkret: $\\ln(e^x)=x$ für alle $x\\in\\mathbb{R}$ und $e^{\\ln x}=x$ für alle $x>0$. Die beiden Funktionen heben sich also gegenseitig auf. Speziell $\\ln(1)=0$ und $\\ln(e)=1$; weiter $\\lim_{x\\to 0}\\ln(x)=-\\infty$ und $\\lim_{x\\to\\infty}\\ln(x)=\\infty$. Auch $\\ln$ ist stetig.\n' +
    '\n' +
    '**Logarithmusgesetze** (für $x,y>0$, $r\\in\\mathbb{R}$)\n' +
    'Sie folgen direkt aus der Funktionalgleichung von $\\exp$:\n' +
    '$\\ln(xy)=\\ln(x)+\\ln(y)$ — Produkt wird zur Summe.\n' +
    '$\\ln\\!\\left(\\dfrac{x}{y}\\right)=\\ln(x)-\\ln(y)$ — Quotient wird zur Differenz.\n' +
    '$\\ln(x^{r})=r\\,\\ln(x)$ — Exponent wandert vor den Logarithmus.\n' +
    'Genau diese Regeln machen $\\ln$ zum Werkzeug, um Exponenten „herunterzuholen".\n' +
    '\n' +
    '**Allgemeine Potenz $a^x$ und Logarithmus zu beliebiger Basis**\n' +
    'Für $a>0$ definiert man die allgemeine Potenz über $\\exp$ und $\\ln$:\n' +
    '$a^{x}:=\\exp(x\\ln a)=e^{x\\ln a}$.\n' +
    'Das passt zum Bekannten: mit $\\ln(e)=1$ ist $e^{x}=\\exp(x\\ln e)=\\exp(x)$. Ist $a>1$, wächst $x\\mapsto a^x$ streng monoton; ist $0<a<1$, fällt sie streng monoton (jeweils bijektiv auf $(0,\\infty)$). Die Umkehrung von $x\\mapsto a^x$ ist $\\log_a$ (für $a>0$, $a\\neq 1$): $\\log_a(x)=y\\iff a^{y}=x$. Man rechnet jeden Logarithmus auf $\\ln$ zurück:\n' +
    '$\\log_a(x)=\\dfrac{\\ln x}{\\ln a}$, allgemeiner $\\log_b(x)=\\dfrac{\\log_a(x)}{\\log_a(b)}$ (**Basiswechsel**).\n' +
    'Die Logarithmusgesetze gelten für $\\log_a$ wortgleich, z. B. $\\log_a(xy)=\\log_a(x)+\\log_a(y)$ und $\\log_a(x^{r})=r\\log_a(x)$.\n' +
    '\n' +
    '**Wichtige Grenzwerte — wer schlägt wen?**\n' +
    'Für jedes feste $n\\in\\mathbb{N}^{*}$ gilt:\n' +
    '| Grenzwert | Merksatz |\n' +
    '|---|---|\n' +
    '| $\\lim_{x\\to\\infty}\\dfrac{x^{n}}{\\exp(x)}=0$ | $\\exp$ schlägt jede Potenz |\n' +
    '| $\\lim_{x\\to\\infty}\\dfrac{\\exp(x)}{x^{n}}=\\infty$ | dasselbe, umgekehrt |\n' +
    '| $\\lim_{x\\to\\infty}\\dfrac{\\ln(x)}{x^{n}}=0$ | jede Potenz schlägt $\\ln$ |\n' +
    '| $\\lim_{x\\to\\infty}\\dfrac{x^{n}}{\\ln(x)}=\\infty$ | dasselbe, umgekehrt |\n' +
    'Kurz: $\\ln$ wächst **langsamer** als jede Potenz, $\\exp$ **schneller** als jede Potenz.\n' +
    '\n' +
    '**Wie rechnet man mit ihnen? (Strategie)**\n' +
    '1. **Exponentialgleichung** $e^{x}=c$ (mit $c>0$): beidseitig $\\ln$ anwenden, denn $\\ln(e^x)=x$, also $x=\\ln c$.\n' +
    '2. **Logarithmusgleichung** $\\ln x=c$: beidseitig $\\exp$ anwenden, $x=e^{c}$.\n' +
    '3. **Allgemeine Basis**: $a^x$ stets als $e^{x\\ln a}$ und $\\log_a x$ stets als $\\dfrac{\\ln x}{\\ln a}$ schreiben — dann reichen die Regeln für $\\exp$ und $\\ln$.\n' +
    '4. **Term vereinfachen**: $\\ln$-Gesetze nutzen, um Produkte/Quotienten/Potenzen zu zerlegen; danach lässt sich oft kürzen oder zusammenfassen.\n' +
    '5. **Grenzwerte**: erkennen, ob $\\exp$, eine Potenz oder $\\ln$ „gewinnt"; bei stetigem Außenterm gilt $\\lim f(g(x))=f(\\lim g(x))$ (z. B. $\\exp$, $\\ln$ stetig).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\ln(x+y)$ ist **nicht** $\\ln x+\\ln y$ — die Summenregel gilt für das **Produkt** $\\ln(xy)$.\n' +
    '• $\\ln$ und $\\log_a$ nur für **positive** Argumente; $\\ln(0)$ und $\\ln$ negativer Zahlen sind nicht definiert.\n' +
    '• Bei $\\exp$ wird ein negativer Exponent zum **Kehrwert** ($e^{-x}=1/e^{x}$), nicht zu einem negativen Wert — $e^{x}$ ist immer positiv.\n' +
    '• $\\dfrac{\\ln x}{x}\\to 0$ verwechseln mit Divergenz: $\\ln$ wächst zwar, aber langsamer als $x$, der Quotient geht gegen $0$.',
  beispiele: [
    {
      szenario: 'Grenzwerte mit $\\exp$ und $\\ln$',
      beispiele: [
        '**Aufgabe:** Bestimme $\\lim_{x\\to-\\infty} x\\exp(x)$.\n**Lösung:** Substituiere $y=-x$, dann $y\\to\\infty$ und $x\\exp(x)=-\\dfrac{y}{\\exp(y)}$. Nach dem Standard-Grenzwert $\\dfrac{x^{n}}{\\exp(x)}\\to 0$ (hier $n=1$) gilt $\\dfrac{y}{\\exp(y)}\\to 0$.\n**Ergebnis:** $\\lim_{x\\to-\\infty} x\\exp(x)=0$.',
        '**Aufgabe:** Bestimme $\\lim_{x\\to 0} x\\exp(x)$.\n**Lösung:** Es gilt $x\\to 0$, und weil $\\exp$ stetig ist, $\\exp(x)\\to\\exp(0)=1$. Mit dem Produkt-Grenzwertsatz folgt $0\\cdot 1$.\n**Ergebnis:** $\\lim_{x\\to 0} x\\exp(x)=0$.',
        '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} n\\ln\\!\\left(1+\\tfrac{1}{n}\\right)$.\n**Lösung:** Mit dem Logarithmusgesetz $\\ln(x^{r})=r\\ln x$ ziehe das $n$ in den Exponenten: $n\\ln\\!\\left(1+\\tfrac{1}{n}\\right)=\\ln\\!\\left(\\left(1+\\tfrac{1}{n}\\right)^{n}\\right)$. Da $\\left(1+\\tfrac{1}{n}\\right)^{n}\\to e$ und $\\ln$ stetig ist, folgt $\\ln(e)=1$.\n**Ergebnis:** $\\lim_{n\\to\\infty} n\\ln\\!\\left(1+\\tfrac{1}{n}\\right)=1$.',
      ],
    },
    {
      szenario: 'Allgemeine Potenz $a^x=e^{x\\ln a}$',
      beispiele: [
        '**Aufgabe:** Zeige $a^{x}a^{y}=a^{x+y}$ für $a>0$.\n**Lösung:** Definition einsetzen und die Funktionalgleichung von $\\exp$ nutzen: $a^{x}a^{y}=\\exp(x\\ln a)\\exp(y\\ln a)=\\exp(x\\ln a+y\\ln a)=\\exp((x+y)\\ln a)$.\n**Ergebnis:** $a^{x}a^{y}=a^{x+y}$.',
        '**Aufgabe:** Zeige $(a^{x})^{y}=a^{xy}$ für $a>0$.\n**Lösung:** Wegen $\\ln(a^{x})=\\ln(\\exp(x\\ln a))=x\\ln a$ folgt $(a^{x})^{y}=\\exp(y\\ln(a^{x}))=\\exp(y\\,x\\ln a)=\\exp(xy\\ln a)$.\n**Ergebnis:** $(a^{x})^{y}=a^{xy}$.',
        '**Aufgabe:** Bestimme $\\lim_{k\\to\\infty}\\sqrt[k]{k}$ (für $k\\ge 2$).\n**Lösung:** Schreibe $\\sqrt[k]{k}=k^{1/k}=\\exp\\!\\left(\\tfrac{1}{k}\\ln k\\right)=\\exp\\!\\left(\\dfrac{\\ln k}{k}\\right)$. Nach dem Standard-Grenzwert ist $\\dfrac{\\ln k}{k}\\to 0$, und da $\\exp$ stetig ist, folgt $\\exp(0)=1$.\n**Ergebnis:** $\\lim_{k\\to\\infty}\\sqrt[k]{k}=1$.',
      ],
    },
    {
      szenario: 'Logarithmen berechnen & Basiswechsel',
      beispiele: [
        '**Aufgabe:** Berechne $\\log_{10}(10000)$ und $\\log_{10}(0{,}01)$.\n**Lösung:** Schreibe die Argumente als Zehnerpotenz: $10000=10^{4}$, also $\\log_{10}(10^{4})=4$. Und $0{,}01=\\dfrac{1}{10^{2}}=10^{-2}$, also $\\log_{10}(10^{-2})=-2$.\n**Ergebnis:** $\\log_{10}(10000)=4$ und $\\log_{10}(0{,}01)=-2$.',
        '**Aufgabe:** Berechne $\\log_{4}\\!\\left(\\tfrac{2}{64}\\right)$.\n**Lösung:** Es ist $\\tfrac{2}{64}=\\tfrac{1}{32}$. Mit der Quotientenregel: $\\log_{4}(2)-\\log_{4}(64)$. Nun $2=4^{1/2}$ und $64=4^{3}$, also $\\log_{4}(2)=\\tfrac{1}{2}$ und $\\log_{4}(64)=3$. Differenz: $\\tfrac{1}{2}-3$.\n**Ergebnis:** $\\log_{4}\\!\\left(\\tfrac{2}{64}\\right)=-\\tfrac{5}{2}$.',
        '**Aufgabe:** Zeige am Beispiel $x=\\tfrac{2}{64}$, $b=64$, $a=2$, dass $\\dfrac{\\log_{2}(x)}{\\log_{2}(64)}=\\log_{64}(x)$.\n**Lösung:** Es ist $\\log_{2}\\!\\left(\\tfrac{2}{64}\\right)=\\log_{2}(2^{-5})=-5$ und $\\log_{2}(64)=6$, also $\\dfrac{-5}{6}=-\\tfrac{5}{6}$. Direkt: $\\log_{64}\\!\\left(\\tfrac{2}{64}\\right)=\\log_{64}(2)-\\log_{64}(64)=\\tfrac{1}{6}-1=-\\tfrac{5}{6}$. Das ist gerade die Basiswechsel-Formel $\\dfrac{\\log_a(x)}{\\log_a(b)}=\\log_b(x)$.\n**Ergebnis:** Beide Wege liefern $-\\tfrac{5}{6}$.',
      ],
    },
  ],
}
