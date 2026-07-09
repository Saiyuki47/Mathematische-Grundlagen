import type { HilfBox } from './hilfsmittelTypes'

const m = String.raw // KaTeX-Quelle ohne Backslash-Escaping

// Claude-Formelsammlung: zweiseitiges, druckbares Formelblatt (PAGE1 + PAGE2),
// abgeleitet aus allen Uebungsblaettern (0-13) und Madis Formelsammlung.
export const PAGE1: HilfBox[] = [
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
      { l: 'konjugiert', f: m`\sqrt a-\sqrt b=\tfrac{a-b}{\sqrt a+\sqrt b}` },
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
      { f: m`|M_1\times\cdots\times M_n|=|M_1|\cdots|M_n|` },
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
      { l: 'distributiv', f: m`p\wedge(q\vee r)\equiv(p\wedge q)\vee(p\wedge r)` },
      { l: 'Komplement', f: m`p\vee\neg p\equiv w,\;\; p\wedge\neg p\equiv f;\;\; p\wedge w\equiv p,\;\; p\vee f\equiv p` },
      { l: 'Absorption', f: m`p\vee(p\wedge q)\equiv p,\;\; p\vee p\equiv p` },
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
      { l: 'Betrag', f: m`|x-a|\le r\Leftrightarrow x\in[a-r,a+r];\;\;\ge r{:}\text{ zwei Strahlen}` },
      { f: m`|A|\le|B|\Leftrightarrow A^2\le B^2\;(\text{quadrieren})` },
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
    t: 'Teilbarkeit & ggT (Euklid)',
    r: [
      { l: 'Division m. Rest', f: m`a=q\,b+r,\;\;0\le r<|b|` },
      { l: 'Euklid', f: m`\gcd(a,b)=\gcd(b,\,a\bmod b),\;\text{letzter Rest}\ne0` },
      { l: 'erweitert', f: m`s\,a+t\,b=\gcd(a,b)\;(\text{rückwärts einsetzen})` },
      { f: m`d\mid a\Leftrightarrow a=d\,k\;(k\in\mathbb Z)` },
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
      { l: 'Relation', f: m`\text{linkstotal, rechtstotal, links-/rechtseindeutig}` },
      { f: m`\text{Funktion}\Leftrightarrow\text{linkstotal}\wedge\text{rechtseindeutig}` },
    ],
  },
  {
    t: 'Abzählbarkeit',
    r: [
      { f: m`\text{abzählbar}\Leftrightarrow\text{Bijektion mit }\mathbb N` },
      { f: m`\mathbb Z,\,\mathbb Q\text{ abzählbar};\;\;\mathbb R\text{ überabzählbar}` },
      { f: m`\text{abz. Vereinigung abz. Mengen ist abz.}` },
      { l: 'Cantor', f: m`\mathbb N\times\mathbb N\text{ abzählbar (Diagonalabzählung)}` },
      { l: 'Dedekind', f: m`\text{unendlich}\Leftrightarrow\text{Bijektion auf echte Teilmenge}` },
    ],
  },
]

export const PAGE2: HilfBox[] = [
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
      { l: 'rekursiv', f: m`x_{n+1}=f(x_n)\text{ (mon.+beschr.)}:\;\text{GW }x\text{ löst }x=f(x)` },
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
      { l: 'Startindex m', f: m`\sum_{k=m}^\infty q^{k}=\tfrac{q^{m}}{1-q}\;(|q|<1)` },
      { l: 'Teleskop', f: m`\sum_{k=1}^n(b_{k+1}-b_k)=b_{n+1}-b_1` },
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
