import type { HilfBox } from './hilfsmittelTypes'

const m = String.raw // KaTeX-Quelle ohne Backslash-Escaping

// Klausur-Formelsammlung: zweiseitiges, druckbares Formelblatt, gezielt auf die
// Aufgabenarten der Probeklausur „Mathematische Grundlagen der Informatik –
// AI1004" (WS 2025/26) zugeschnitten. Nur das Wichtige je Aufgabenart.
//   Seite 1 (KLAUSUR1): Diskrete Mathematik & Logik  — Aufgaben 1–7
//   Seite 2 (KLAUSUR2): Analysis                      — Aufgaben 8–13
// Inhalte belegt aus den Referenz-Themen und Übungsblättern des Projekts.

export const KLAUSUR1: HilfBox[] = [
  {
    t: 'A1 · Mengen',
    r: [
      { f: m`A\cup B,\; A\cap B,\; A\setminus B,\; A^{c}=X\setminus A` },
      { l: 'Venn (A,B⊆X)', f: m`A^{c}\cap B=\text{„nur }B\text{"},\;\; A\setminus B=\text{„nur }A\text{"}` },
      { l: 'de Morgan', f: m`(A\cup B)^{c}=A^{c}\cap B^{c},\;\;(A\cap B)^{c}=A^{c}\cup B^{c}` },
      { l: 'distributiv', f: m`A\cap(B\cup C)=(A\cap B)\cup(A\cap C)` },
      { l: 'Anzahlen', f: m`|A\cup B|=|A|+|B|-|A\cap B|` },
      { f: m`|\mathcal P(A)|=2^{|A|},\;\; |A\times B|=|A|\,|B|` },
      { l: 'Intervall ∩ ℕ', f: m`(1,3)\cap\mathbb N=\{2\},\;\;(2,3]\cap\mathbb N=\{3\}` },
    ],
  },
  {
    t: 'A1 · Aussagenlogik',
    r: [
      { l: 'Implikation', f: m`p\Rightarrow q\;\text{nur falsch bei}\;p=w,\,q=f` },
      { f: m`p\wedge q\;\text{nur }w\text{ bei }w,w;\;\;p\vee q\;\text{nur }f\text{ bei }f,f` },
      { l: 'de Morgan', f: m`\neg(p\wedge q)\equiv\neg p\vee\neg q,\;\;\neg(p\vee q)\equiv\neg p\wedge\neg q` },
      { l: 'Kontraposition', f: m`p\Rightarrow q\;\equiv\;\neg q\Rightarrow\neg p\;\equiv\;\neg p\vee q` },
      { f: m`p\Leftrightarrow q\equiv(p\Rightarrow q)\wedge(q\Rightarrow p)` },
      { l: 'hinr./notw.', f: m`A\Rightarrow B:\;A\;\text{hinreichend},\;B\;\text{notwendig}` },
    ],
  },
  {
    t: 'A1 · Quantoren',
    r: [
      { l: 'Verneinung', f: m`\neg\,\forall x\,P\equiv\exists x\,\neg P,\;\;\neg\,\exists x\,P\equiv\forall x\,\neg P` },
      { l: 'Beispiel', f: m`\neg(\exists x\!\in\!\mathbb R:\,x^2<9)\equiv\forall x\!\in\!\mathbb R:\,x^2\ge 9` },
      { l: 'Reihenfolge', f: m`\forall x\,\exists y\;\not\equiv\;\exists y\,\forall x` },
    ],
  },
  {
    t: 'A3 · Boolesche Algebra',
    r: [
      { l: 'Komplement', f: m`a\vee\bar a=1,\;\; a\wedge\bar a=0` },
      { l: 'Neutral', f: m`a\wedge 1=a,\;\; a\vee 0=a` },
      { l: 'Dominanz', f: m`a\vee 1=1,\;\; a\wedge 0=0` },
      { l: 'Idempotenz', f: m`a\vee a=a,\;\; a\wedge a=a` },
      { l: 'Doppelnegation', f: m`\overline{\bar a}=a` },
      { l: 'Absorption', f: m`a\vee(a\wedge b)=a,\;\; a\wedge(a\vee b)=a` },
      { l: 'de Morgan', f: m`\overline{a\wedge b}=\bar a\vee\bar b,\;\;\overline{a\vee b}=\bar a\wedge\bar b` },
    ],
  },
  {
    t: 'A2 · Vollständige Induktion',
    r: [
      { l: 'Schema', s: 'IA: n=n₀ prüfen. IV: Aussage gelte für n. IS: daraus n→n+1 zeigen.' },
      { f: m`\textstyle\sum_{i=1}^{n}(2i-1)=n^{2}` },
      { f: m`\textstyle\sum_{i=1}^{n} i=\tfrac{n(n+1)}2` },
      { f: m`\textstyle\sum_{i=1}^{n} i^{2}=\tfrac{n(n+1)(2n+1)}6` },
      { f: m`\textstyle\sum_{i=1}^{n} i^{3}=\big(\tfrac{n(n+1)}2\big)^{2}` },
    ],
  },
  {
    t: 'A2 · Summen- & Produktzeichen',
    r: [
      { l: 'linear', f: m`\textstyle\sum(c\,a_i)=c\sum a_i,\;\;\sum(a_i+b_i)=\sum a_i+\sum b_i` },
      { l: 'Konstante', f: m`\textstyle\sum_{i=1}^{n} c=n\,c` },
      { l: 'Indexverschieb.', f: m`\textstyle\sum_{i=1}^{n} a_i=\sum_{j=0}^{n-1} a_{j+1}` },
      { l: 'leer', f: m`\textstyle\sum_{\varnothing}=0,\;\;\prod_{\varnothing}=1` },
    ],
  },
  {
    t: 'A4 · Relationen R⊆A×B',
    r: [
      { l: 'linkstotal', f: m`\forall a\!\in\!A\,\exists b:\,(a,b)\in R` },
      { l: 'rechtstotal', f: m`\forall b\!\in\!B\,\exists a:\,(a,b)\in R` },
      { l: 'linkseindeutig', f: m`\text{jedes }b\!\in\!B\text{ in }\le 1\text{ Paar}` },
      { l: 'rechtseindeutig', f: m`\text{jedes }a\!\in\!A\text{ in }\le 1\text{ Paar}` },
      { l: 'Merke', s: 'total = mindestens eins, eindeutig = höchstens eins.' },
    ],
  },
  {
    t: 'A4 · Relation auf A',
    r: [
      { l: 'reflexiv', f: m`\forall a:\,(a,a)\in R` },
      { l: 'symmetrisch', f: m`(a,b)\in R\Rightarrow(b,a)\in R` },
      { l: 'antisymm.', f: m`(a,b),(b,a)\in R\Rightarrow a=b` },
      { l: 'transitiv', f: m`(a,b),(b,c)\in R\Rightarrow(a,c)\in R` },
      { l: 'widerlegen', s: 'ein einziges Gegenbeispiel genügt.' },
    ],
  },
  {
    t: 'A5 · Injektiv / Surjektiv / Bijektiv',
    r: [
      { l: 'injektiv', f: m`f(x_1)=f(x_2)\Rightarrow x_1=x_2\;\;(\text{linkseindeutig})` },
      { l: 'surjektiv', f: m`\forall y\!\in\!B\,\exists x:\,f(x)=y,\;\;f(A)=B\;(\text{rechtstotal})` },
      { l: 'bijektiv', f: m`\text{injektiv}\;\wedge\;\text{surjektiv}\Rightarrow\text{genau ein Urbild}` },
      { l: 'umkehrbar', f: m`\Leftrightarrow\text{bijektiv};\;\;f^{-1}\!\circ f=\mathrm{id}_A` },
      { l: 'widerlegen', s: 'inj: x₁≠x₂ mit f gleich · surj: ein y ohne Urbild.' },
    ],
  },
  {
    t: 'A5 · Bild, Urbild, Komposition',
    r: [
      { l: 'Bild', f: m`f(M)=\{f(x):x\in M\},\;\;f(A)=\text{Wertebereich}` },
      { l: 'Urbild', f: m`f^{-1}(N)=\{x\in A:\,f(x)\in N\}` },
      { s: 'Urbild ≠ Umkehrfunktion — für jede Funktion definiert.' },
      { l: 'Komposition', f: m`(g\circ f)(x)=g(f(x))\;\;\text{(nicht kommutativ)}` },
      { l: 'Umkehr best.', s: 'y=f(x) nach x auflösen, dann x und y tauschen.' },
    ],
  },
  {
    t: 'A6 · Kombinatorik (n Objekte, k Auswahl)',
    r: [
      { l: 'Produktregel', f: m`|M_1\times\cdots\times M_r|=|M_1|\cdots|M_r|` },
      { l: 'Permutation', f: m`n!\;\;\text{(alle anordnen)}` },
      { l: 'Perm. m. Wdh.', f: m`\tfrac{n!}{n_1!\,n_2!\cdots n_r!}` },
      { l: 'geordnet o. Wdh.', f: m`\tfrac{n!}{(n-k)!}` },
      { l: 'geordnet m. Wdh.', f: m`n^{k}` },
      { l: 'ungeordnet o. Wdh.', f: m`\binom nk` },
      { l: 'ungeordnet m. Wdh.', f: m`\binom{n+k-1}{k}` },
    ],
  },
  {
    t: 'A6 · Binomialkoeffizient',
    r: [
      { f: m`\binom nk=\tfrac{n!}{k!\,(n-k)!}` },
      { l: 'Symmetrie', f: m`\binom nk=\binom n{n-k}` },
      { l: 'Rand', f: m`\binom n0=\binom nn=1,\;\;\binom n1=n` },
      { l: 'Pascal', f: m`\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}` },
      { l: 'Lehrsatz', f: m`(a+b)^n=\textstyle\sum_{k=0}^{n}\binom nk a^{n-k}b^{k}` },
      { f: m`\textstyle\sum_{k=0}^{n}\binom nk=2^{n}` },
    ],
  },
  {
    t: 'A7 · Euklidischer Algorithmus (ggT)',
    r: [
      { f: m`\gcd(a,b)=\gcd(b,\;a\bmod b),\;\;\gcd(a,0)=|a|` },
      { s: 'a = q·b + r bilden, dann (a,b)→(b,r) wiederholen bis r=0.' },
      { s: 'Der letzte Rest ≠ 0 ist der ggT.' },
      { l: 'teilerfremd', f: m`\gcd(a,b)=1` },
    ],
  },
]

export const KLAUSUR2: HilfBox[] = [
  {
    t: 'A8 · Folgen — Konvergenz',
    r: [
      { l: 'ε-N-Definition', f: m`a_n\to a:\;\forall\varepsilon>0\,\exists N\,\forall n\ge N:\,|a_n-a|<\varepsilon` },
      { l: 'Nullfolge', f: m`a_n\to 0` },
      { s: 'Grenzwert ist eindeutig; endlich viele Anfangsglieder egal.' },
      { s: 'konvergent ⇒ beschränkt (Umkehrung gilt nicht).' },
    ],
  },
  {
    t: 'A8 · Grenzwertsätze & Kriterien',
    r: [
      { f: m`\lim(a_n\pm b_n)=\lim a_n\pm\lim b_n` },
      { f: m`\lim(a_n b_n)=\lim a_n\cdot\lim b_n,\;\;\lim\tfrac{a_n}{b_n}=\tfrac{\lim a_n}{\lim b_n}` },
      { l: 'monoton', f: m`\text{monoton}\;\wedge\;\text{beschränkt}\Rightarrow\text{konvergent}` },
      { l: 'Sandwich', f: m`a_n\le b_n\le c_n,\;a_n,c_n\to L\;\Rightarrow\;b_n\to L` },
      { l: 'Cauchy', f: m`\forall\varepsilon\,\exists N\,\forall m,n\ge N:\,|a_n-a_m|<\varepsilon` },
    ],
  },
  {
    t: 'A8 · Wichtige Grenzwerte',
    r: [
      { f: m`q^{n}\to 0\;(|q|<1),\;\; q^{n}\to\infty\;(q>1)` },
      { f: m`\sqrt[n]{n}\to 1,\;\; \sqrt[n]{a}\to 1\;(a>0)` },
      { f: m`\big(1+\tfrac1n\big)^{n}\to e,\;\;\big(1+\tfrac xn\big)^{n}\to e^{x}` },
      { f: m`\tfrac{n^{k}}{a^{n}}\to 0\;(a>1),\;\; \tfrac{a^{n}}{n!}\to 0,\;\; \tfrac{\ln n}{n}\to 0` },
    ],
  },
  {
    t: 'A9 · Reihen',
    r: [
      { l: 'Definition', f: m`\textstyle\sum_{k=1}^{\infty} a_k=\lim_{n\to\infty} s_n,\;\; s_n=\sum_{k=1}^{n} a_k` },
      { l: 'notwendig', f: m`\text{konvergent}\Rightarrow a_n\to 0` },
      { s: 'a_n → 0 ist NICHT hinreichend (Gegenbsp. harmonische Reihe).' },
      { l: 'absolut', f: m`\textstyle\sum|a_k|\;\text{konv.}\Rightarrow\sum a_k\;\text{konv.}` },
    ],
  },
  {
    t: 'A9 · Konvergenzkriterien',
    r: [
      { l: 'Quotient', f: m`\lim\big|\tfrac{a_{n+1}}{a_n}\big|=q:\;q<1\;\text{konv.},\,q>1\;\text{div.}` },
      { l: 'Wurzel', f: m`\lim\sqrt[n]{|a_n|}=q:\;q<1\;\text{konv.},\,q>1\;\text{div.}` },
      { l: 'Majorante', f: m`|a_n|\le b_n,\;\textstyle\sum b_n\;\text{konv.}\Rightarrow\sum a_n\;\text{konv.}` },
      { l: 'Leibniz', s: 'alternierend mit monoton fallender Nullfolge ⇒ konvergent.' },
    ],
  },
  {
    t: 'A9 · Geometrische & p-Reihe',
    r: [
      { l: 'endlich', f: m`\textstyle\sum_{k=0}^{n} q^{k}=\tfrac{1-q^{\,n+1}}{1-q}\;(q\ne 1)` },
      { l: 'unendlich', f: m`\textstyle\sum_{k=0}^{\infty} q^{k}=\tfrac{1}{1-q}\;(|q|<1)` },
      { l: 'harmonisch', f: m`\textstyle\sum\tfrac1n\;\text{divergiert}` },
      { l: 'p-Reihe', f: m`\textstyle\sum\tfrac1{n^{p}}\;\text{konv.}\;\Leftrightarrow\;p>1` },
    ],
  },
  {
    t: 'A10 · Asymptotik / Landau',
    r: [
      { l: 'groß O', f: m`f=O(g):\;\exists C,n_0\,\forall n\ge n_0:\,|f(n)|\le C\,|g(n)|` },
      { l: 'klein o', f: m`f=o(g):\;\tfrac{f(n)}{g(n)}\to 0` },
      { l: 'asympt. gleich', f: m`f\sim g:\;\tfrac{f(n)}{g(n)}\to 1` },
      { l: 'Hierarchie', f: m`1\prec\log n\prec n^{a}\prec a^{n}\prec n!\prec n^{n}` },
      { s: 'Polynom: nur der Term höchsten Grades bestimmt die Ordnung.' },
    ],
  },
  {
    t: 'A10 · Polynomdivision & Grenzwerte',
    r: [
      { l: 'Division', f: m`\tfrac{p(x)}{q(x)}=s(x)+\tfrac{r(x)}{q(x)},\;\deg r<\deg q` },
      { l: 'Nullstelle', f: m`p(a)=0\;\Rightarrow\;(x-a)\mid p(x)` },
      { l: 'x→±∞', s: 'höchste Potenz ausklammern; Grad Zähler vs. Nenner vergleichen.' },
      { f: m`\lim_{x\to\infty}\tfrac{a_m x^{m}+\dots}{b_k x^{k}+\dots}=\begin{cases}0&m<k\\ \tfrac{a_m}{b_k}&m=k\\ \pm\infty&m>k\end{cases}` },
    ],
  },
  {
    t: 'A10/12/13 · Stetigkeit',
    r: [
      { l: 'in x₀', f: m`\lim_{x\to x_0} f(x)=f(x_0)` },
      { l: 'folgenstetig', f: m`x_n\to x_0\;\Rightarrow\;f(x_n)\to f(x_0)` },
      { l: 'ε-δ', f: m`\forall\varepsilon>0\,\exists\delta>0:\,|x-x_0|<\delta\Rightarrow|f(x)-f(x_0)|<\varepsilon` },
      { s: 'Summe, Produkt, Quotient, Komposition stetiger Funktionen sind stetig.' },
      { l: 'stückweise', s: 'an der Nahtstelle: linker GW = rechter GW = f(x₀).' },
    ],
  },
  {
    t: 'A11 · Differentiation — Regeln',
    r: [
      { f: m`f'(x_0)=\lim_{h\to 0}\tfrac{f(x_0+h)-f(x_0)}{h}` },
      { f: m`(c f)'=c f',\;\;(f\pm g)'=f'\pm g'` },
      { l: 'Produkt', f: m`(fg)'=f'g+fg'` },
      { l: 'Quotient', f: m`\big(\tfrac fg\big)'=\tfrac{f'g-fg'}{g^{2}}` },
      { l: 'Kette', f: m`(g\circ f)'=g'(f(x))\,f'(x)` },
      { l: 'Umkehr', f: m`(f^{-1})'(y)=\tfrac1{f'(x)},\;\;x=f^{-1}(y)` },
    ],
  },
  {
    t: 'A11 · Standard-Ableitungen',
    r: [
      { f: m`(x^{n})'=n x^{n-1},\;\;(\sqrt x)'=\tfrac1{2\sqrt x}` },
      { f: m`(e^{x})'=e^{x},\;\;(a^{x})'=a^{x}\ln a,\;\;(\ln x)'=\tfrac1x` },
      { f: m`(\sin)'=\cos,\;\;(\cos)'=-\sin,\;\;(\tan)'=\tfrac1{\cos^2 x}` },
      { l: 'exp/log', f: m`e^{x+y}=e^{x}e^{y},\;\;\ln(xy)=\ln x+\ln y,\;\;a^{x}=e^{x\ln a}` },
    ],
  },
  {
    t: 'A12/13 · Differenzierbarkeit',
    r: [
      { l: 'diff ⇒ stetig', f: m`\text{diff'bar in }x_0\Rightarrow\text{stetig in }x_0` },
      { s: 'Umkehrung falsch: |x| ist in 0 stetig, aber nicht differenzierbar.' },
      { l: 'stückweise', f: m`\text{stetig}\;\wedge\;\lim_{h\to 0^-}\tfrac{\Delta f}{h}=\lim_{h\to 0^+}\tfrac{\Delta f}{h}` },
      { s: 'An der Nahtstelle: erst Stetigkeit prüfen, dann links = rechts der Ableitung.' },
    ],
  },
]
