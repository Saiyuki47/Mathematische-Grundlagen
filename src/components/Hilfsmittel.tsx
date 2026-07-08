import { useEffect, useRef, useState } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Hilfsmittel mit drei Formelsammlungen, je in einem eigenen Untertab:
// „Madis Formelsammlung“ als eingebettetes PDF, die „Claude-Formelsammlung“ —
// zweiseitig, druckbar, abgeleitet aus allen Übungsblättern (0–13) und ergänzt
// um die Formeln aus Madis Formelsammlung — sowie die „Lösungsrezepte“:
// eine zweiseitige, druckbare Gebrauchsanleitung mit einem
// Schritt-für-Schritt-Rezept für jede Aufgabenart der Übungsblätter 0–13.

const m = String.raw // KaTeX-Quelle ohne Backslash-Escaping

function K({ tex }: { tex: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (ref.current) katex.render(tex, ref.current, { throwOnError: false, displayMode: false })
  }, [tex])
  return <span ref={ref} />
}

interface Row { l?: string; f: string }
interface Box { t: string; r: Row[] }

const PAGE1: Box[] = [
  {
    t: 'Brüche & Potenzen',
    r: [
      { f: m`\tfrac ab \pm \tfrac cd = \tfrac{ad\pm bc}{bd}` },
      { f: m`\tfrac ab\cdot\tfrac cd=\tfrac{ac}{bd},\quad \tfrac ab:\tfrac cd=\tfrac{ad}{bc}` },
      { f: m`\tfrac{k\cdot a}{k\cdot b}=\tfrac ab` },
      { f: m`a^m a^n=a^{m+n},\;\; \tfrac{a^m}{a^n}=a^{m-n}` },
      { f: m`(a^m)^n=a^{mn},\;\; (ab)^n=a^n b^n` },
      { f: m`a^{-n}=\tfrac1{a^n},\;\; a^0=1,\;\; a^{m/n}=\sqrt[n]{a^m}` },
    ],
  },
  {
    t: 'Wurzeln & binomische Formeln',
    r: [
      { f: m`\sqrt[n]a\,\sqrt[n]b=\sqrt[n]{ab},\;\; \tfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\tfrac ab}` },
      { l: 'rationalisieren', f: m`\tfrac1{\sqrt a\pm\sqrt b}=\tfrac{\sqrt a\mp\sqrt b}{a-b}` },
      { f: m`(a\pm b)^2=a^2\pm2ab+b^2` },
      { f: m`(a+b)(a-b)=a^2-b^2` },
      { f: m`(a\pm b)^3=a^3\pm3a^2b+3ab^2\pm b^3` },
    ],
  },
  {
    t: 'Geraden',
    r: [
      { f: m`y=mx+b,\quad m=\tfrac{y_2-y_1}{x_2-x_1}` },
      { l: 'Punkt-Steigung', f: m`y-y_1=m\,(x-x_1)` },
    ],
  },
  {
    t: 'Quadratische Gleichungen',
    r: [
      { l: 'Mitternacht', f: m`ax^2\!+\!bx\!+\!c=0:\;x_{1,2}=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}` },
      { l: 'p-q', f: m`x^2\!+\!px\!+\!q=0:\;x_{1,2}=-\tfrac p2\pm\sqrt{\big(\tfrac p2\big)^2-q}` },
    ],
  },
  {
    t: 'Mengen',
    r: [
      { f: m`A\cup B,\; A\cap B,\; A\setminus B,\; A^{c}` },
      { l: 'de Morgan', f: m`(A\cup B)^{c}=A^{c}\cap B^{c}` },
      { f: m`(A\cap B)^{c}=A^{c}\cup B^{c}` },
      { l: 'distributiv', f: m`A\cap(B\cup C)=(A\cap B)\cup(A\cap C)` },
      { f: m`|A\cup B|=|A|+|B|-|A\cap B|` },
      { f: m`|\mathcal P(A)|=2^{|A|},\;\; |A\times B|=|A|\,|B|` },
    ],
  },
  {
    t: 'Aussagenlogik',
    r: [
      { l: 'de Morgan', f: m`\neg(p\wedge q)\equiv\neg p\vee\neg q` },
      { f: m`\neg(p\vee q)\equiv\neg p\wedge\neg q` },
      { l: 'Kontraposition', f: m`p\Rightarrow q\;\equiv\;\neg q\Rightarrow\neg p\;\equiv\;\neg p\vee q` },
      { f: m`p\Leftrightarrow q\equiv(p\Rightarrow q)\wedge(q\Rightarrow p)` },
      { l: 'Quantoren', f: m`\neg\forall x\,P\equiv\exists x\,\neg P;\;\; \neg\exists x\,P\equiv\forall x\,\neg P` },
    ],
  },
  {
    t: 'Summen & Produkte',
    r: [
      { f: m`\sum_{k=1}^n c\,a_k=c\sum_{k=1}^n a_k,\;\; \sum(a_k+b_k)=\sum a_k+\sum b_k` },
      { f: m`\sum_{k=1}^n k=\tfrac{n(n+1)}2` },
      { f: m`\sum_{k=1}^n k^2=\tfrac{n(n+1)(2n+1)}6` },
      { f: m`\sum_{k=1}^n k^3=\big(\tfrac{n(n+1)}2\big)^2` },
      { l: 'geometrisch', f: m`\sum_{k=0}^n q^k=\tfrac{1-q^{\,n+1}}{1-q}\;(q\ne1)` },
    ],
  },
  {
    t: 'Binomialkoeffizienten',
    r: [
      { f: m`\binom nk=\tfrac{n!}{k!\,(n-k)!},\;\; \binom n0=\binom nn=1` },
      { f: m`\binom nk=\binom n{n-k}` },
      { l: 'Pascal', f: m`\binom nk+\binom n{k+1}=\binom{n+1}{k+1}` },
      { l: 'binom. Lehrsatz', f: m`(a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^{k}` },
      { f: m`\sum_{k=0}^n\binom nk=2^n` },
    ],
  },
  {
    t: 'Vollständige Induktion & Ungleichungen',
    r: [
      { f: m`\text{IA }n_0\;\Rightarrow\;\text{IV }n\;\Rightarrow\;\text{IS }n\!+\!1` },
      { l: 'Bernoulli', f: m`(1+x)^n\ge 1+nx\quad(x\ge-1)` },
      { l: 'Dreieck', f: m`|a+b|\le|a|+|b|` },
    ],
  },
  {
    t: 'Schranken & Intervalle',
    r: [
      { f: m`[a,b],\,(a,b),\,[a,b),\,(a,b]` },
      { l: 'sup', f: m`\sup M=\text{kleinste obere Schranke}` },
      { l: 'inf', f: m`\inf M=\text{größte untere Schranke}` },
      { f: m`\max\in M\;(\text{falls ex.});\;\; \min\in M` },
    ],
  },
  {
    t: 'Kombinatorik',
    r: [
      { l: 'Permutationen', f: m`n!` },
      { l: 'Variation', f: m`\text{o.W. }\tfrac{n!}{(n-k)!}\;\;|\;\;\text{m.W. }n^{k}` },
      { l: 'Kombination', f: m`\text{o.W. }\binom nk\;\;|\;\;\text{m.W. }\binom{n+k-1}{k}` },
      { l: 'Anagramme', f: m`\tfrac{n!}{n_1!\,n_2!\cdots n_r!}` },
      { l: 'Gitterwege', f: m`\binom{m+n}{m}` },
    ],
  },
  {
    t: 'Funktionen & Relationen',
    r: [
      { l: 'injektiv', f: m`f(x_1)=f(x_2)\Rightarrow x_1=x_2` },
      { l: 'surjektiv', f: m`\forall y\,\exists x:\,f(x)=y` },
      { f: m`\text{bijektiv}=\text{inj.}+\text{surj.}\Rightarrow f^{-1}` },
      { l: 'Verkettung', f: m`(g\circ f)(x)=g(f(x))` },
      { f: m`f(A)=\{f(x):x\in A\},\; f^{-1}(B)=\{x:f(x)\in B\}` },
      { l: 'Äquiv.rel.', f: m`\text{reflexiv}+\text{symm.}+\text{transitiv}` },
    ],
  },
  {
    t: 'Abzählbarkeit',
    r: [
      { f: m`\text{abzählbar}\Leftrightarrow\text{Bijektion mit }\mathbb N` },
      { f: m`\mathbb Z,\,\mathbb Q\text{ abzählbar};\;\;\mathbb R\text{ überabzählbar}` },
      { f: m`\text{abz. Vereinigung abz. Mengen ist abz.}` },
    ],
  },
]

const PAGE2: Box[] = [
  {
    t: 'Folgen — Konvergenz',
    r: [
      { l: 'ε-N', f: m`\lim a_n=a:\;\forall\varepsilon>0\,\exists N\,\forall n\ge N:\,|a_n-a|<\varepsilon` },
      { l: 'Grenzwertsätze', f: m`\lim(a_n\pm b_n)=a\pm b,\;\lim(a_nb_n)=ab` },
      { f: m`\lim\tfrac{a_n}{b_n}=\tfrac ab\;(b\ne0)` },
      { f: m`\text{beschränkt}+\text{monoton}\Rightarrow\text{konvergent}` },
      { l: 'Sandwich', f: m`a_n\le c_n\le b_n,\,\lim a_n=\lim b_n=L\Rightarrow\lim c_n=L` },
      { l: 'best. divergent', f: m`a_n\to\infty\text{ oder }a_n\to-\infty` },
      { l: 'unbest. divergent', f: m`\text{kein fester GW, z.B. }a_n=(-2)^n` },
    ],
  },
  {
    t: 'Wichtige Grenzwerte',
    r: [
      { f: m`\lim\tfrac1{n^p}=0\;(p>0),\;\; \lim q^{n}=0\;(|q|<1)` },
      { f: m`\lim\sqrt[n]{n}=1,\;\; \lim\sqrt[n]{a}=1\;(a>0)` },
      { f: m`\lim\big(1+\tfrac xn\big)^{n}=e^{x}` },
      { f: m`\lim\tfrac{n^k}{a^n}=0\;(a>1),\;\; \lim\tfrac{a^n}{n!}=0` },
    ],
  },
  {
    t: 'Reihen',
    r: [
      { l: 'notwendig', f: m`\textstyle\sum a_k\text{ konv.}\Rightarrow a_k\to0` },
      { l: 'geometrisch', f: m`\sum_{k=0}^\infty q^{k}=\tfrac1{1-q}\;(|q|<1)` },
      { f: m`\textstyle\sum\tfrac1k\text{ divergiert},\;\; \sum\tfrac1{k^2}=\tfrac{\pi^2}6` },
      { f: m`\textstyle\sum\tfrac1{k^{s}}\text{ konv.}\Leftrightarrow s>1` },
    ],
  },
  {
    t: 'Konvergenzkriterien',
    r: [
      { l: 'Majorante', f: m`|a_k|\le b_k,\,\textstyle\sum b_k\text{ konv.}\Rightarrow\sum a_k\text{ konv.}` },
      { l: 'Minorante', f: m`0\le b_k\le a_k,\,\textstyle\sum b_k\text{ div.}\Rightarrow\sum a_k\text{ div.}` },
      { l: 'Quotient', f: m`\lim\big|\tfrac{a_{k+1}}{a_k}\big|=q<1\text{ konv.},\,>1\text{ div.}` },
      { l: 'Wurzel', f: m`\lim\sqrt[k]{|a_k|}=q<1\text{ konv.},\,>1\text{ div.}` },
      { f: m`q=1:\text{ keine Aussage (Quotient \& Wurzel)}` },
      { l: 'Leibniz', f: m`a_k\downarrow0\Rightarrow\textstyle\sum(-1)^k a_k\text{ konv.}` },
    ],
  },
  {
    t: 'Funktionsgrenzwerte & Asymptotik',
    r: [
      { f: m`\lim_{x\to x_0}f(x)=L` },
      { l: 'O-Notation', f: m`f=O(g):\,\exists C,x_0:\,|f(x)|\le C\,|g(x)|` },
      { l: 'Wachstum', f: m`\ln x\ll x^{a}\ll a^{x}\ll x!\quad(x\to\infty)` },
      { l: 'Polynomdiv.', f: m`\tfrac{p(x)}{q(x)}=s(x)+\tfrac{r(x)}{q(x)}` },
    ],
  },
  {
    t: 'Asymptoten (gebrochenrational)',
    r: [
      { l: 'waagerecht', f: m`\text{Zählergrad}\le\text{Nennergrad}` },
      { l: 'schief', f: m`\text{Zählergrad}=\text{Nennergrad}+1\;(\text{Polynomdiv.})` },
      { l: 'kurvenförmig', f: m`\text{Zählergrad}\ge\text{Nennergrad}+1` },
      { l: 'senkrecht', f: m`\text{Nennernullstelle nach vollst. Kürzen}` },
    ],
  },
  {
    t: 'Stetigkeit',
    r: [
      { f: m`f\text{ stetig in }x_0:\;\lim_{x\to x_0}f(x)=f(x_0)` },
      { l: 'Nachweis', f: m`f(x_0)\text{ ex.},\;\lim_{x\to x_0^-}f=\lim_{x\to x_0^+}f=f(x_0)` },
      { f: m`\text{Summe/Produkt/Verkettung stetiger Fkt. stetig}` },
      { l: 'Zwischenwertsatz', f: m`f\text{ stetig auf }[a,b],\,y\text{ zw. }f(a),f(b)\Rightarrow\exists c:\,f(c)=y` },
      { l: 'Bisektion', f: m`\text{Intervall halbieren; Länge nach }n\text{ Schritten: }\tfrac{b-a}{2^n}` },
      { l: 'stetige Forts.', f: m`c\text{ so, dass }\lim_{x\to x_0}f(x)=f(x_0)` },
    ],
  },
  {
    t: 'Exponential & Logarithmus',
    r: [
      { f: m`e^{x+y}=e^x e^y,\;\; e^0=1,\;\; (e^x)'=e^x` },
      { f: m`e^{x}=\sum_{k=0}^\infty\tfrac{x^{k}}{k!}` },
      { f: m`\ln(xy)=\ln x+\ln y,\;\; \ln(x^{r})=r\ln x` },
      { f: m`a^{x}=e^{x\ln a},\;\; \log_a x=\tfrac{\ln x}{\ln a}` },
      { f: m`\lim_{x\to0}\tfrac{e^{x}-1}{x}=1,\;\; \lim_{x\to\infty}\tfrac{\ln x}{x}=0` },
    ],
  },
  {
    t: 'Trigonometrie',
    r: [
      { f: m`\sin^2x+\cos^2x=1,\;\; \tan x=\tfrac{\sin x}{\cos x}` },
      { f: m`\sin x=\sum\tfrac{(-1)^k x^{2k+1}}{(2k+1)!}` },
      { f: m`\cos x=\sum\tfrac{(-1)^k x^{2k}}{(2k)!}` },
      { f: m`\lim_{x\to0}\tfrac{\sin x}{x}=1` },
    ],
  },
  {
    t: 'Differentiation — Regeln',
    r: [
      { f: m`f'(x_0)=\lim_{h\to0}\tfrac{f(x_0+h)-f(x_0)}{h}` },
      { f: m`(cf)'=cf',\;\; (f\pm g)'=f'\pm g'` },
      { l: 'Produkt', f: m`(fg)'=f'g+fg'` },
      { l: 'Quotient', f: m`\big(\tfrac fg\big)'=\tfrac{f'g-fg'}{g^{2}}` },
      { l: 'Kette', f: m`(g\circ f)'=g'(f(x))\,f'(x)` },
      { l: 'Umkehr', f: m`(f^{-1})'(y)=\tfrac1{f'(x)}` },
    ],
  },
  {
    t: 'Standard-Ableitungen',
    r: [
      { f: m`(x^{n})'=n x^{n-1},\;\; (\sqrt x)'=\tfrac1{2\sqrt x}` },
      { f: m`(e^{x})'=e^{x},\;\; (a^{x})'=a^{x}\ln a,\;\; (\ln x)'=\tfrac1x` },
      { f: m`(\sin)'=\cos,\;\; (\cos)'=-\sin` },
      { f: m`(\tan)'=\tfrac1{\cos^2 x}=1+\tan^2x,\;\; (\arctan x)'=\tfrac1{1+x^2}` },
    ],
  },
  {
    t: 'Monotonie (1. Ableitung)',
    r: [
      { f: m`f'>0\Rightarrow\text{streng mon. steigend},\;\;f'\ge0\Rightarrow\text{mon. steigend}` },
      { f: m`f'<0\Rightarrow\text{streng mon. fallend},\;\;f'\le0\Rightarrow\text{mon. fallend}` },
      { l: 'Tabelle', f: m`f'\text{-Nullstellen}\Rightarrow\text{Vorzeichen je Intervall}\Rightarrow\text{deuten}` },
    ],
  },
]

// „Lösungsrezepte“: für jede Aufgabenart der Übungsblätter 0–13 eine kompakte
// Gebrauchsanleitung. Quelle: alle Aufgaben und ihre Vorgehensweise-Hinweise.

interface RezeptRow { l: string; s: string }
interface RezeptBox { t: string; r: RezeptRow[] }

const REZEPTE1: RezeptBox[] = [
  {
    t: 'Brüche & Terme vereinfachen · Bl. 0',
    r: [
      { l: 'Brüche ±', s: '1) kgV der Nenner 2) erweitern (Zähler UND Nenner) 3) nur Zähler verrechnen 4) mit ggT kürzen' },
      { l: 'Klammern', s: 'jede Klammer einzeln zu einem Bruch vereinfachen, erst dann · bzw. : (mit Kehrwert multiplizieren, querkürzen)' },
      { l: 'Potenzterme', s: 'Potenzgesetze anwenden, gleiche Basen sammeln, Vorzeichen Schritt für Schritt mitführen' },
    ],
  },
  {
    t: 'Ausklammern & Kürzen · Bl. 0',
    r: [
      { l: 'ausklammern', s: 'gemeinsamen Faktor vor die Klammer ziehen; Trick: a−b = −(b−a) macht Faktoren sichtbar' },
      { l: 'kürzen', s: 'Zähler und Nenner faktorisieren (binomische Formeln!), dann nur gemeinsame Faktoren streichen' },
      { l: 'Stopp', s: 'nie aus Summen kürzen: (a²+b²)/(a+b) lässt sich nicht vereinfachen' },
    ],
  },
  {
    t: 'Wurzeln · Bl. 0',
    r: [
      { l: 'Produkt', s: '√a·√b = √(a·b) → unter der Wurzel Quadratzahl suchen (√2·√32 = √64 = 8)' },
      { l: 'Achtung', s: '√(a+b) ≠ √a+√b — mit Zahlenbeispiel (a = b = 1) widerlegen' },
      { l: 'rationalisieren', s: 'mit √a bzw. (√a∓√b) erweitern → 3. binomische Formel entfernt die Wurzel aus dem Nenner' },
    ],
  },
  {
    t: 'Geraden · Bl. 0',
    r: [
      { l: 'skizzieren', s: 'b auf der y-Achse markieren, Steigungsdreieck: 1 nach rechts, m nach oben (m < 0: nach unten)' },
      { l: 'Gleichung finden', s: '2 Punkte ablesen → m = (y₂−y₁)/(x₂−x₁) → b durch Einsetzen eines Punktes' },
      { l: 'Schnittpunkt', s: 'Terme gleichsetzen, nach x auflösen, x in eine der Geraden einsetzen' },
    ],
  },
  {
    t: 'Mengen-Schreibweisen · Bl. 1',
    r: [
      { l: '∈ vs. ⊆', s: '∈ „ist Element von“, ⊆ „jedes Element ist auch drin“; Mengen können selbst Elemente sein ({2} ∈ L?)' },
      { l: 'auflisten', s: 'in {f(n) : n ∈ ℕ} nacheinander n = 0, 1, 2, … einsetzen und das Muster angeben' },
      { l: 'Potenzmenge', s: 'systematisch alle Teilmengen: ∅, Einer-, Zweier-, …, A selbst; Kontrolle: 2^|A| Stück' },
    ],
  },
  {
    t: 'Mengenoperationen · Bl. 1',
    r: [
      { l: 'endlich', s: 'Definition elementweise abarbeiten (A∖B = „in A, aber nicht in B“), von innen nach außen' },
      { l: 'Intervalle', s: 'Zahlengerade skizzieren, Bereiche markieren, Ränder (offen/geschlossen) einzeln prüfen' },
      { l: 'A×B', s: 'alle geordneten Paare (a, b) bilden; Kontrolle: |A×B| = |A|·|B|' },
    ],
  },
  {
    t: 'Venn-Diagramme · Bl. 1',
    r: [
      { l: 'Vorgehen', s: 'pro Ausdruck ein Diagramm (3 Kreise), innerste Klammer zuerst schraffieren, dann verknüpfen' },
      { l: 'Vergleich', s: 'gleiche Schraffur ⇒ Gesetz vermuten (z. B. Distributivgesetz) — ein Beweis ist das noch nicht' },
    ],
  },
  {
    t: 'Mengengleichheit beweisen · Bl. 1',
    r: [
      { l: 'Standard', s: 'beide Inklusionen zeigen: x ∈ links ⇒ … ⇒ x ∈ rechts, dann umgekehrt' },
      { l: 'schneller', s: 'mit bekannten Gesetzen umformen (de Morgan, Distributiv-, Komplementgesetz)' },
    ],
  },
  {
    t: 'Wahrheitstafeln · Bl. 2',
    r: [
      { l: 'aufstellen', s: '2ⁿ Zeilen; Spalten für jeden Teilausdruck von innen nach außen füllen' },
      { l: 'auswerten', s: 'äquivalent ⇔ Ergebnisspalten identisch; Tautologie ⇔ überall w' },
    ],
  },
  {
    t: 'Implikationen formulieren · Bl. 2',
    r: [
      { l: 'übersetzen', s: '„A hinreichend für B“: A ⇒ B; „A notwendig für B“: B ⇒ A; „genau dann, wenn“: ⇔' },
      { l: 'äquivalent', s: 'zu A ⇒ B: Kontraposition ¬B ⇒ ¬A und ¬A ∨ B; die Umkehrung B ⇒ A ist es NICHT' },
      { l: 'wahr?', s: 'zum Widerlegen genügt ein Gegenbeispiel — konkrete Zahl einsetzen (z. B. z = −2)' },
    ],
  },
  {
    t: 'Beweistechniken · Bl. 2',
    r: [
      { l: 'direkt', s: 'Voraussetzung umschreiben (ungerade: n = 2k+1) → einsetzen → bis zur Form der Behauptung rechnen' },
      { l: 'Widerspruch', s: 'A und ¬B annehmen → auf einen Widerspruch rechnen → ¬B unmöglich, also gilt B' },
      { l: 'vereinfachen', s: 'logische Terme mit de Morgan, Distributiv- und Komplementgesetz (A ∨ ¬A = w) reduzieren' },
    ],
  },
  {
    t: 'Summenzeichen · Bl. 3/4',
    r: [
      { l: 'schreiben', s: 'Muster suchen: konstanter Abstand d → a + d·k; konstanter Faktor q → a·qᵏ; Grenzen am 1. und letzten Glied prüfen' },
      { l: 'Regeln prüfen', s: 'vermutete Σ/Π-Gleichheit erst an n = 2 testen; Σ ist linear, aber Σ(aₖ·bₖ) ≠ (Σaₖ)·(Σbₖ)' },
    ],
  },
  {
    t: 'Binomialkoeffizienten · Bl. 3',
    r: [
      { l: 'mit Lehrsatz', s: '(a+b)ⁿ = Σ (n über k)·aⁿ⁻ᵏbᵏ mit klugem a, b: a = b = 1 → 2ⁿ; a = 1, b = −1 → 0' },
      { l: 'Identitäten', s: 'Definition n!/(k!(n−k)!) einsetzen und Fakultäten kürzen' },
    ],
  },
  {
    t: 'Vollständige Induktion · Bl. 3/4/9',
    r: [
      { l: 'Schema', s: 'IA: n₀ einsetzen, beide Seiten ausrechnen · IV: Aussage für n annehmen · IS: n+1 so aufspalten, dass die IV einsetzbar ist' },
      { l: 'Summe/Produkt', s: 'Σⁿ⁺¹ = Σⁿ + (n+1)-tes Glied bzw. Πⁿ⁺¹ = Πⁿ · neuer Faktor → IV einsetzen → auf Zielform bringen' },
      { l: 'Teilbarkeit', s: 'Term(n+1) = Vielfaches von Term(n) + offensichtlich teilbarer Rest (3ⁿ⁺¹−3 = 3·(3ⁿ−3) + 6)' },
      { l: 'Ungleichung', s: 'Kette abschätzen: Seite(n+1) ≥ … IV … ≥ Ziel; notieren, wo die Voraussetzung (x ≥ −1) eingeht' },
    ],
  },
  {
    t: 'Beträge & Intervalle · Bl. 4',
    r: [
      { l: 'Abstand', s: '|x−a| ≤ r lesen als „Abstand zu a höchstens r“ → [a−r, a+r]; bei ≥ zwei Strahlen (Vereinigung)' },
      { l: 'Fälle', s: 'sonst an den Nullstellen der Beträge aufteilen, jeden Fall lösen, mit der Fallbedingung schneiden, vereinigen' },
      { l: '|A| vs. |B|', s: '|x−2| ≥ |x+3|: beide Seiten quadrieren (beide ≥ 0) und auflösen' },
    ],
  },
  {
    t: 'Sup / Inf / Max / Min · Bl. 4',
    r: [
      { l: 'Vorarbeit', s: 'Menge greifbar machen: Ungleichung lösen, erste Folgenwerte auflisten, skizzieren' },
      { l: 'entscheiden', s: 'Randwerte sind Kandidaten; wird der Wert angenommen (∈ M) → Max/Min, sonst nur sup/inf' },
      { l: 'begründen', s: 'sup: obere Schranke angeben + zeigen, dass nichts Kleineres Schranke ist (annähernde Folge nennen)' },
    ],
  },
  {
    t: 'Quantoren · Bl. 4',
    r: [
      { l: 'lesen', s: 'von links nach rechts; spätere Variablen dürfen von früheren abhängen — Reihenfolge ändert den Sinn' },
      { l: 'entscheiden', s: '∃-Aussage beweisen: ein Beispiel genügt; ∀-Aussage widerlegen: ein Gegenbeispiel genügt' },
    ],
  },
  {
    t: 'Euklidischer Algorithmus · Bl. 4',
    r: [
      { l: 'ggT', s: 'Vorzeichen weglassen; a = q·b + r; weiter mit (b, r) bis Rest 0 — der letzte Rest ≠ 0 ist der ggT' },
      { l: 'erweitert', s: 's·a + t·b = ggT: die Divisionsgleichungen von unten nach oben rückwärts einsetzen' },
    ],
  },
  {
    t: 'Graph, Bild & Urbild · Bl. 5',
    r: [
      { l: 'Graph', s: 'Graph = {(x, f(x)) : x ∈ D}; Kandidatenmengen daran messen: genau ein Paar pro x aus D?' },
      { l: 'Bild f(A)', s: 'alle x ∈ A einsetzen und die entstehenden Werte sammeln (Skizze hilft)' },
      { l: 'Urbild f⁻¹(B)', s: 'Bedingung f(x) ∈ B als (Un-)Gleichung lösen — die Umkehrfunktion wird NICHT gebraucht' },
    ],
  },
  {
    t: 'Injektiv / surjektiv / bijektiv · Bl. 5',
    r: [
      { l: 'injektiv', s: 'f(x₁) = f(x₂) ansetzen → folgt x₁ = x₂? Gegenbeispiel: zwei x mit demselben Wert' },
      { l: 'surjektiv', s: 'f(x) = y nach x auflösen: für jedes y der Zielmenge lösbar? Ein verfehltes y widerlegt' },
      { l: 'endlich', s: 'Wertetabelle/Pfeilbild: injektiv = kein Wert doppelt; surjektiv = jeder Wert getroffen' },
      { l: 'Skizze', s: 'horizontale Geraden: höchstens 1 Schnitt ⇒ injektiv, mindestens 1 ⇒ surjektiv (Def.-/Zielmenge beachten!)' },
    ],
  },
  {
    t: 'Verkettung · Bl. 5',
    r: [
      { l: 'bilden', s: '(f∘g)(x) = f(g(x)) — g zuerst! Nur definiert, wenn Bild(g) ⊆ Def(f)' },
      { l: 'untersuchen', s: 'f∘g und g∘f getrennt berechnen und prüfen — im Allgemeinen verschieden' },
    ],
  },
  {
    t: 'Relationen · Bl. 5',
    r: [
      { l: 'prüfen', s: 'links-/rechtstotal, links-/rechtseindeutig einzeln per Definition an den Paaren (x, y) testen' },
      { l: 'Funktion?', s: 'Relation ist Funktion ⇔ linkstotal und rechtseindeutig' },
    ],
  },
  {
    t: 'Abzählbarkeit & Unendlichkeit · Bl. 5/6',
    r: [
      { l: 'abzählbar', s: 'Auflistung ohne Auslassung angeben = Bijektion zu ℕ; ℕ×ℕ: Cantor-Diagonalen durchnummerieren' },
      { l: 'Dedekind', s: 'unendlich zeigen: Bijektion auf echte Teilmenge, z. B. ℕ → ℕ*, n ↦ n+1 (injektiv + surjektiv nachweisen)' },
    ],
  },
  {
    t: 'Kombinatorik · Bl. 6',
    r: [
      { l: 'Modell', s: 'zwei Fragen: Reihenfolge wichtig? Wiederholung erlaubt? → Formel aus der Urnenmodell-Tabelle' },
      { l: 'Stufen', s: 'unabhängige Positionen multiplizieren (Autonummern: 26·26·9·10·10)' },
      { l: '„mindestens“', s: 'über das Komplement: alle Möglichkeiten − Möglichkeiten ohne die Eigenschaft' },
      { l: '„oder“', s: '|A∪B| = |A| + |B| − |A∩B| — Doppelte nicht zweimal zählen' },
      { l: 'ununterscheidbar', s: 'Anagramm-Formel n!/(n₁!·n₂!·…) — gleiche Objekte herausteilen (Zugwagen, KLAUSUR)' },
      { l: 'Gitterwege', s: 'Weg = Wort aus m× „rechts“ und n× „hoch“ → Positionen wählen: (m+n über m)' },
    ],
  },
]

const REZEPTE2: RezeptBox[] = [
  {
    t: 'Abbildungsvorschrift finden · Bl. 7',
    r: [
      { l: 'Muster', s: 'Differenzen konstant (d) → x₀ + d·n; Quotient konstant (q) → x₀·qⁿ; Wechselzeichen → Faktor (−1)ⁿ bzw. (−1)ⁿ⁺¹' },
      { l: 'fast-Muster', s: 'Nachbarformeln testen: 1/2, 1/4, 1/8, … → (1/2)ⁿ⁺¹; 1, 1/3, 1/7, 1/15, … → 1/(2ⁿ⁺¹−1)' },
      { l: 'Kontrolle', s: 'n = 0, 1, 2 einsetzen und mit den gegebenen Gliedern vergleichen' },
    ],
  },
  {
    t: 'Beispielfolgen konstruieren · Bl. 7/8',
    r: [
      { l: 'Baukasten', s: 'n (→ ∞), 1/n (→ 0), (−1)ⁿ (beschränkt, divergent), Konstanten — gezielt kombinieren' },
      { l: 'xₙyₙ → c', s: 'xₙ = n, yₙ = c/n; für ±∞: yₙ = ±1/√n; beschränkt & divergent: yₙ = (−1)ⁿ/n' },
      { l: 'Summe konv.', s: 'Divergenz gegenseitig wegheben: xₙ = (−1)ⁿ, yₙ = (−1)ⁿ⁺¹ → xₙ + yₙ = 0' },
    ],
  },
  {
    t: 'Folgengrenzwerte · Bl. 7/8/12',
    r: [
      { l: 'rational', s: 'höchste n-Potenz in Zähler und Nenner ausklammern und kürzen → Grenzwertsätze anwenden' },
      { l: 'beschränkt·→0', s: 'sin, cos, (−1)ⁿ zwischen −1 und 1 einschließen → Sandwich: Produkt mit Nullfolge → 0' },
      { l: '√-Differenz', s: '√(n+1) − √n: konjugiert erweitern → 1/(√(n+1)+√n) → 0' },
      { l: 'e-Typ', s: '(1 + x/n)ⁿ → eˣ; Exponent passend machen: (1+1/n)²ⁿ⁻¹ = ((1+1/n)ⁿ)² / (1+1/n) → e²' },
      { l: '(−1)ⁿ-Test', s: 'Teilfolgen n gerade/ungerade: verschiedene Grenzwerte → divergent (aber evtl. beschränkt)' },
      { l: 'Exponent', s: 'Wurzeln als Potenz schreiben: ²ⁿ√(2¹⁰⁰⁰) = 2^(1000/2n) → 2⁰ = 1' },
    ],
  },
  {
    t: 'ε-N-Beweise & Grenzwertsätze · Bl. 7/8',
    r: [
      { l: 'ε-N', s: '|xₙ − a| < ε vereinfachen, nach n auflösen → N(ε) angeben; großzügig nach oben abschätzen ist erlaubt' },
      { l: 'Satz zeigen', s: 'z. B. beschränkt · Nullfolge: |xₙyₙ| ≤ C·|yₙ| < ε ab dem N der Folge (yₙ)' },
    ],
  },
  {
    t: 'Geometrische Summe & Reihe · Bl. 7/8/9',
    r: [
      { l: 'endlich', s: 'Σₖ₌₀ⁿ qᵏ = (1−qⁿ⁺¹)/(1−q); Start bei k = m: Gesamtsumme minus Anfangsstück (oder qᵐ ausklammern)' },
      { l: 'unendlich', s: 'Σ a·qᵏ = a/(1−q) — gilt NUR für |q| < 1; konstante Vorfaktoren vorher herausziehen' },
      { l: 'welche x?', s: 'q(x) identifizieren und |q(x)| < 1 als Betragsungleichung nach x auflösen' },
    ],
  },
  {
    t: 'Rekursive Folgen · Bl. 8/9',
    r: [
      { l: '1) Induktion', s: 'Monotonie (xₙ₊₁ ≥ xₙ) und Schranke per Induktion — im IS Monotonie von √ bzw. Rechenregeln nutzen' },
      { l: '2) Kriterium', s: 'monoton + beschränkt ⇒ konvergent (Monotoniekriterium)' },
      { l: '3) Fixpunkt', s: 'lim auf die Rekursion anwenden: x = f(x) lösen; unpassende Lösungen per Schranke/Vorzeichen ausschließen' },
    ],
  },
  {
    t: 'Reihen: Kriterien-Fahrplan · Bl. 9/10',
    r: [
      { l: '1) Nulltest', s: 'aₖ ↛ 0 → sofort divergent (notwendige Bedingung); Σ(−1)ᵏ und Σ√k scheitern schon hier' },
      { l: '2) Form', s: 'alternierend + |aₖ| ↓ 0 → Leibniz; k! → Quotientenkriterium; (…)ᵏ → Wurzelkriterium' },
      { l: '3) Vergleich', s: 'Σ1/kˢ konvergiert ⇔ s > 1; kleiner als konvergent → Majorante; größer als divergent → Minorante' },
      { l: 'Teleskop', s: 'Partialsumme ausschreiben — innere Terme kürzen sich (auch bei Produkten: Π(k+1)/k = n+1)' },
    ],
  },
  {
    t: 'Funktionsgrenzwerte · Bl. 10/12',
    r: [
      { l: 'x→±∞', s: 'höchste Potenz ausklammern; Grade vergleichen: Zählergrad < Nennergrad → 0, > → ±∞ (Vorzeichen prüfen!)' },
      { l: '0/0', s: 'faktorisieren und kürzen: Nullstelle x₀ ⇒ Faktor (x−x₀) in Zähler und Nenner (ggf. Polynomdivision); oder konjugiert erweitern' },
      { l: 'Standard', s: 'x·eˣ → 0 (x→−∞); beschränkt · Nullfolge → 0; n·ln(1+1/n) → 1 (über (1+1/n)ⁿ → e)' },
    ],
  },
  {
    t: 'Einseitige GW & stückweise Fkt. · Bl. 10/11',
    r: [
      { l: 'Betrag', s: '|g(x)| auflösen (Fall g ≥ 0 / g < 0) → links- und rechtsseitigen Grenzwert getrennt berechnen' },
      { l: 'Kriterium', s: 'lim existiert ⇔ links = rechts; stetig in x₀ ⇔ zusätzlich = f(x₀)' },
    ],
  },
  {
    t: 'Defbereich, Polynomdivision, Asymptoten · Bl. 9/10',
    r: [
      { l: 'Defbereich', s: 'Nenner faktorisieren, Nullstellen ausschließen: Dᶠ = ℝ ∖ {…}' },
      { l: 'Polynomdiv.', s: 'höchste Terme dividieren → zurückmultiplizieren → abziehen → wiederholen; Ergebnis s(x) + r(x)/q(x)' },
      { l: 'Asymptote', s: 'r(x)/q(x) → 0, also verhält sich f für x → ±∞ wie s(x) (Gerade oder Parabel)' },
    ],
  },
  {
    t: 'O-Notation · Bl. 10',
    r: [
      { l: 'zeigen', s: 'C und n₀ angeben mit |f(n)| ≤ C·|g(n)| für n ≥ n₀; grob abschätzen: n + n² ≤ 2n²' },
      { l: 'widerlegen', s: 'f/g unbeschränkt zeigen (z. B. n²/n = n → ∞)' },
    ],
  },
  {
    t: 'Stetigkeit prüfen · Bl. 11/12',
    r: [
      { l: 'Baukasten', s: 'Polynome, exp, sin, cos, √, |·| sind stetig; Summe/Produkt/Quotient (Nenner ≠ 0)/Verkettung bleiben stetig' },
      { l: 'aˣ', s: 'als exp(x·ln a) schreiben → Verkettung stetiger Funktionen → stetig' },
      { l: 'Sprungstellen', s: 'nur die kritischen x₀ einzeln prüfen: einseitige Grenzwerte gleich f(x₀)?' },
    ],
  },
  {
    t: 'Stetige Fortsetzung · Bl. 11',
    r: [
      { l: 'c bestimmen', s: 'c := lim (x→x₀) f(x) berechnen — durch Kürzen ((x²−1)/(x−1) = x+1) oder konjugiertes Erweitern' },
      { l: 'unmöglich', s: 'links- ≠ rechtsseitiger Grenzwert (z. B. x/|x|) → kein c macht f stetig' },
    ],
  },
  {
    t: 'Zwischenwertsatz & Bisektion · Bl. 11',
    r: [
      { l: 'Ansatz', s: 'Gleichung zu h(x) := linke − rechte Seite umbauen; h stetig und h(a), h(b) mit verschiedenem Vorzeichen → Nullstelle in (a, b)' },
      { l: 'Bisektion', s: 'Mitte m auswerten → Teilintervall mit Vorzeichenwechsel behalten; n Schritte → Länge (b−a)/2ⁿ' },
    ],
  },
  {
    t: 'Punktweise Konvergenz · Bl. 11',
    r: [
      { l: 'Vorgehen', s: 'x festhalten, lim (n→∞) fₙ(x) berechnen — Fallunterscheidung (|x| < 1: xⁿ → 0; x = 1: 1; sonst divergent)' },
      { l: 'Ergebnis', s: 'Grenzfunktion skizzieren; Stetigkeit kann dabei verloren gehen' },
    ],
  },
  {
    t: 'exp, ln & log · Bl. 12',
    r: [
      { l: 'Regeln zeigen', s: 'Definition aˣ := exp(x·ln a) einsetzen und Funktionalgleichung exp(x+y) = exp(x)·exp(y) nutzen' },
      { l: 'ᵏ√k', s: 'als exp(ln k / k) schreiben; ln k/k → 0 → Grenzwert exp(0) = 1' },
      { l: 'log_a(b)', s: 'b als Potenz der Basis schreiben (64 = 2⁶) oder Basiswechsel: log_a b = log₂ b / log₂ a' },
    ],
  },
  {
    t: 'Potenzreihen: sin & cos · Bl. 12',
    r: [
      { l: 'Konvergenz', s: 'Quotientenkriterium auf die Reihenglieder: Quotient → 0 < 1 → konvergent für jedes x' },
      { l: 'Symmetrie', s: '−x in die Reihe einsetzen: gerade Potenzen schlucken das Minus (cos), ungerade behalten es (sin)' },
    ],
  },
  {
    t: 'Ableitungen bestimmen · Bl. 13',
    r: [
      { l: 'Struktur', s: 'äußerste Verknüpfung erkennen: Produkt → Produktregel, Bruch → Quotientenregel, ineinander → Kettenregel' },
      { l: 'Kette', s: 'von außen nach innen ableiten und nachdifferenzieren: (exp(1+2x))′ = exp(1+2x)·2' },
      { l: 'Betrag', s: 'x·|x| stückweise schreiben (x² bzw. −x²) und getrennt ableiten; Nahtstelle extra prüfen' },
    ],
  },
  {
    t: 'Differenzierbarkeit prüfen · Bl. 13',
    r: [
      { l: 'vorab', s: 'skizzieren; unstetig → nicht differenzierbar (Sprung wie bei h mit x³+1 / x²)' },
      { l: 'Kriterium', s: 'Differenzenquotient (f(x₀+h)−f(x₀))/h für h → 0⁺ und h → 0⁻; gleich → differenzierbar, sonst Knick' },
    ],
  },
  {
    t: 'Spezielle Ableitungen · Bl. 13',
    r: [
      { l: 'Umkehrregel', s: '(f⁻¹)′(y) = 1/f′(f⁻¹(y)) — so entstehen (√x)′ = 1/(2√x) und (arctan x)′ = 1/(1+x²)' },
      { l: 'xᵃ, cˣ', s: 'umschreiben: xᵃ = exp(a·ln x), cˣ = exp(x·ln c) → Kettenregel' },
      { l: 'tan', s: 'sin/cos mit der Quotientenregel → 1/cos² = 1 + tan²' },
      { l: 'Potenzreihe', s: 'Σ xᵏ = 1/(1−x) für |x| < 1; im Konvergenzbereich gliedweise ableiten' },
    ],
  },
]

const FS_CSS = `
.hilf-fs-switch{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.9rem}
.hilf-fs-tab{padding:.4rem .85rem;border:1px solid var(--border);border-radius:7px;background:var(--bg2,#1e1e1e);color:var(--text,#eee);cursor:pointer;font-size:.9rem;font-weight:600}
.hilf-fs-tab:hover{border-color:var(--blue,#4d9fff)}
.hilf-fs-tab.active{background:var(--blue,#4d9fff);color:#fff;border-color:var(--blue,#4d9fff)}
@media print{.hilf-fs-switch{display:none!important}}
.hilf-pdf{margin:0 0 1.5rem}
.hilf-pdf-fallback a{color:var(--blue,#4d9fff);font-weight:600;text-decoration:none}
.hilf-pdf-fallback a:hover{text-decoration:underline}
.hilf-pdf-frame{width:100%;height:min(82vh,920px);border:1px solid var(--border);border-radius:8px;background:#fff;display:block}
.hilf-pdf-fallback{margin:.5rem 0 0;font-size:.85rem;opacity:.8}
.fs-print-area{display:flex;flex-direction:column;gap:1.25rem}
.fs-page{background:#fff;color:#111;border:1px solid var(--border);border-radius:8px;padding:7mm;max-width:210mm;width:100%;margin:0 auto;box-sizing:border-box}
.fs-page-head{display:flex;justify-content:space-between;font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#555;border-bottom:1px solid #ccc;padding-bottom:3px;margin-bottom:6px}
.fs-cols{column-count:3;column-gap:5mm}
@media (max-width:760px){.fs-cols{column-count:2}}
@media (max-width:480px){.fs-cols{column-count:1}}
.fs-box{break-inside:avoid;-webkit-column-break-inside:avoid;border:1px solid #ddd;border-radius:5px;padding:4px 7px 5px;margin:0 0 5px}
.fs-box-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:#0a7d3b;margin-bottom:3px}
.fs-row{font-size:10px;line-height:1.45;margin:2px 0;color:#111}
.fs-l{color:#555;font-weight:600;font-size:9px}
.fs-rezepte .fs-row{font-size:9px;line-height:1.32;margin:1.5px 0}
.fs-rezepte .fs-l{font-size:8.5px}
.fs-rezepte .fs-box{padding:3px 6px 4px;margin:0 0 4px}
.fs-rezepte .fs-box-title{margin-bottom:2px}
.fs-page .katex{font-size:1em;color:#111}
@media print{
  @page{size:A4 portrait;margin:8mm}
  body *{visibility:hidden}
  .fs-print-area,.fs-print-area *{visibility:visible}
  .fs-print-area{position:absolute;left:0;top:0;width:100%;gap:0}
  .fs-page{border:none;border-radius:0;margin:0;max-width:none;padding:0}
  .fs-page:first-child{page-break-after:always}
}
`

function injectFsCss() {
  if (typeof document === 'undefined') return
  if (document.getElementById('mathe-fs-css')) return
  const s = document.createElement('style')
  s.id = 'mathe-fs-css'
  s.textContent = FS_CSS
  document.head.appendChild(s)
}

function Page({ boxes, nr }: { boxes: Box[]; nr: number }) {
  return (
    <div className="fs-page">
      <div className="fs-page-head">
        <span>Claude-Formelsammlung — Mathematische Grundlagen</span>
        <span>Seite {nr}/2</span>
      </div>
      <div className="fs-cols">
        {boxes.map(box => (
          <div className="fs-box" key={box.t}>
            <div className="fs-box-title">{box.t}</div>
            {box.r.map(row => (
              <div className="fs-row" key={row.f}>
                {row.l && <span className="fs-l">{row.l}: </span>}
                <K tex={row.f} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function RezeptPage({ boxes, nr }: { boxes: RezeptBox[]; nr: number }) {
  return (
    <div className="fs-page">
      <div className="fs-page-head">
        <span>Lösungsrezepte — Mathematische Grundlagen</span>
        <span>Seite {nr}/2</span>
      </div>
      <div className="fs-cols">
        {boxes.map(box => (
          <div className="fs-box" key={box.t}>
            <div className="fs-box-title">{box.t}</div>
            {box.r.map(row => (
              <div className="fs-row" key={row.l}>
                <span className="fs-l">{row.l}: </span>
                {row.s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const SAMMLUNGEN = [
  { id: 'madis', label: '📄 Madis Formelsammlung' },
  { id: 'claude', label: '✍️ Claude-Formelsammlung' },
  { id: 'rezepte', label: '🧭 Lösungsrezepte' },
] as const

type SammlungId = (typeof SAMMLUNGEN)[number]['id']

export default function Hilfsmittel() {
  useEffect(() => injectFsCss(), [])
  const [active, setActive] = useState<SammlungId>('madis')
  const pdfUrl = `${import.meta.env.BASE_URL}Formelsammlung.pdf`
  return (
    <div>
      <div className="hilf-bar">
        <div className="hilf-bar-text">
          <h2>Hilfsmittel</h2>
          <p>
            Madis Formelsammlung als PDF, die Claude-Formelsammlung (zweiseitig, druckbar)
            und die Lösungsrezepte — eine zweiseitige Gebrauchsanleitung mit einem Rezept für
            jede Aufgabenart der Übungsblätter 0–13.
          </p>
        </div>
        <div className="hilf-bar-actions">
          {active === 'madis' ? (
            <>
              <span className="hilf-bar-hint">PDF · A4</span>
              <a className="hilf-print-btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                ⬇ Öffnen / Download
              </a>
            </>
          ) : (
            <>
              <span className="hilf-bar-hint">2 Seiten · A4</span>
              <button type="button" className="hilf-print-btn" onClick={() => window.print()}>
                🖨 Drucken
              </button>
            </>
          )}
        </div>
      </div>

      <div className="hilf-fs-switch" role="tablist" aria-label="Formelsammlung wählen">
        {SAMMLUNGEN.map(s => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === active}
            className={`hilf-fs-tab${s.id === active ? ' active' : ''}`}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {active === 'claude' && (
        <div className="fs-print-area">
          <Page boxes={PAGE1} nr={1} />
          <Page boxes={PAGE2} nr={2} />
        </div>
      )}
      {active === 'rezepte' && (
        <div className="fs-print-area fs-rezepte">
          <RezeptPage boxes={REZEPTE1} nr={1} />
          <RezeptPage boxes={REZEPTE2} nr={2} />
        </div>
      )}
      {active === 'madis' && (
        <section className="hilf-pdf">
          <iframe
            className="hilf-pdf-frame"
            src={pdfUrl}
            title="Madis Formelsammlung (PDF)"
            sandbox="allow-same-origin allow-popups allow-downloads"
          />
          <p className="hilf-pdf-fallback">
            Vorschau lädt nicht?{' '}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              PDF in neuem Tab öffnen ↗
            </a>
          </p>
        </section>
      )}
    </div>
  )
}
