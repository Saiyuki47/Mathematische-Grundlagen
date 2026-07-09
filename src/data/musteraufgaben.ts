import type { HilfBox } from './hilfsmittelTypes'

const m = String.raw // KaTeX-Quelle ohne Backslash-Escaping

// Musteraufgaben: zu jeder Aufgabenart der Uebungsblaetter 0-13 genau eine
// durchgerechnete Beispielaufgabe (Aufgabe -> Loesung).
export const BEISPIELE1: HilfBox[] = [
  {
    t: 'Brüche & Terme · Bl. 0',
    r: [
      { l: 'Aufg', f: m`\tfrac37+\tfrac73` },
      { l: 'Lös', f: m`\tfrac9{21}+\tfrac{49}{21}=\tfrac{58}{21}` },
    ],
  },
  {
    t: 'Ausklammern & Kürzen · Bl. 0',
    r: [
      { l: 'Aufg', f: m`\tfrac{a^2-b^2}{a-b}` },
      { l: 'Lös', f: m`\tfrac{(a+b)(a-b)}{a-b}=a+b` },
    ],
  },
  {
    t: 'Wurzeln · Bl. 0',
    r: [
      { l: 'Aufg', f: m`\sqrt2\cdot\sqrt{32}` },
      { l: 'Lös', f: m`\sqrt{2\cdot32}=\sqrt{64}=8` },
    ],
  },
  {
    t: 'Geraden · Bl. 0',
    r: [
      { l: 'Aufg', f: m`\text{Gerade durch }(1,1),(3,7)` },
      { l: 'Lös', f: m`m=\tfrac{7-1}{3-1}=3,\ y=3x-2` },
    ],
  },
  {
    t: 'Mengen-Schreibweisen · Bl. 1',
    r: [
      { l: 'Aufg', f: m`A=\{2n:n\in\mathbb N,\,1\le n\le4\}` },
      { l: 'Lös', f: m`A=\{2,4,6,8\}` },
    ],
  },
  {
    t: 'Mengenoperationen · Bl. 1',
    r: [
      { l: 'geg', f: m`A=\{1,2,3\},\ B=\{2,3,4\}` },
      { l: 'Lös', f: m`A\cap B=\{2,3\},\ A\setminus B=\{1\}` },
    ],
  },
  {
    t: 'Venn-Diagramme · Bl. 1',
    r: [
      { l: 'Aufg', s: 'Schraffiere A ∩ (B ∪ C)' },
      { l: 'Lös', s: 'B∪C zuerst, dann Schnitt mit A → = (A∩B) ∪ (A∩C)' },
    ],
  },
  {
    t: 'Mengengleichheit · Bl. 1',
    r: [
      { l: 'Aufg', s: 'Zeige (A∪B)ᶜ = Aᶜ ∩ Bᶜ' },
      { l: 'Lös', s: 'x∈links ⇔ x∉A und x∉B ⇔ x∈rechts (beide Inklusionen)' },
    ],
  },
  {
    t: 'Wahrheitstafel · Bl. 2',
    r: [
      { l: 'Aufg', s: 'Ist p⇒q ≡ ¬p∨q?' },
      { l: 'Lös', s: 'pq = ww,wf,fw,ff → beide Spalten w,f,w,w ⇒ äquivalent' },
    ],
  },
  {
    t: 'Implikationen · Bl. 2',
    r: [
      { l: 'Aufg', s: '„4|n" hinreichend/notwendig für „n gerade"?' },
      { l: 'Lös', s: 'hinreichend (4|n ⇒ 2|n), nicht notwendig (6 gerade, 4∤6)' },
    ],
  },
  {
    t: 'Beweistechniken · Bl. 2',
    r: [
      { l: 'Aufg', f: m`n\text{ ungerade}\Rightarrow n^2\text{ ungerade}` },
      { l: 'Lös', f: m`n{=}2k{+}1:\ n^2{=}2(2k^2{+}2k){+}1` },
    ],
  },
  {
    t: 'Summenzeichen · Bl. 3/4',
    r: [
      { l: 'Aufg', f: m`\sum_{k=1}^{n}k` },
      { l: 'Lös', f: m`=\tfrac{n(n+1)}2\quad(n{=}4:\,10)` },
    ],
  },
  {
    t: 'Binomialkoeffizienten · Bl. 3',
    r: [
      { l: 'Aufg', f: m`\sum_{k=0}^n\binom nk` },
      { l: 'Lös', f: m`(1{+}1)^n=\sum_{k=0}^n\binom nk=2^n` },
    ],
  },
  {
    t: 'Vollständige Induktion · Bl. 3/4/9',
    r: [
      { l: 'Aufg', f: m`\sum_{k=1}^n k=\tfrac{n(n+1)}2` },
      { l: 'IS', f: m`\tfrac{n(n+1)}2+(n{+}1)=\tfrac{(n+1)(n+2)}2` },
    ],
  },
  {
    t: 'Beträge & Intervalle · Bl. 4',
    r: [
      { l: 'Aufg', f: m`|x-2|\le 3` },
      { l: 'Lös', f: m`-3\le x-2\le 3\Rightarrow x\in[-1,5]` },
    ],
  },
  {
    t: 'Sup/Inf/Max/Min · Bl. 4',
    r: [
      { l: 'Aufg', f: m`M=\{1-\tfrac1n:n\ge1\}` },
      { l: 'Lös', f: m`\min{=}\inf{=}0,\ \sup{=}1\notin M` },
    ],
  },
  {
    t: 'Quantoren · Bl. 4',
    r: [
      { l: 'Aufg', f: m`\forall x\,\exists y:\,y=x^2\ \text{wahr?}` },
      { l: 'Lös', f: m`\text{wahr};\ \neg:\ \exists x\,\forall y:\,y\ne x^2` },
    ],
  },
  {
    t: 'Euklidischer Alg. · Bl. 4',
    r: [
      { l: 'Aufg', f: m`\gcd(48,18)` },
      { l: 'Lös', f: m`48{=}2\!\cdot\!18{+}12,\ 18{=}12{+}6` },
      { f: m`12{=}2\!\cdot\!6{+}0\Rightarrow\gcd=6` },
    ],
  },
  {
    t: 'Graph, Bild & Urbild · Bl. 5',
    r: [
      { l: 'Aufg', f: m`f(x){=}x^2:\ f([-1,2]),\ f^{-1}(\{4\})` },
      { l: 'Lös', f: m`f([-1,2]){=}[0,4],\ f^{-1}(\{4\}){=}\{-2,2\}` },
    ],
  },
  {
    t: 'Inj./Surj./Bij. · Bl. 5',
    r: [
      { l: 'Aufg', f: m`f:\mathbb R\to\mathbb R,\ f(x)=2x+1` },
      { l: 'inj', f: m`f(x_1){=}f(x_2)\Rightarrow x_1{=}x_2` },
      { l: 'surj', f: m`y{=}2x{+}1\Rightarrow x{=}\tfrac{y-1}2\Rightarrow\text{bij}` },
    ],
  },
  {
    t: 'Verkettung · Bl. 5',
    r: [
      { l: 'Aufg', f: m`f(x){=}x{+}1,\ g(x){=}x^2:\ g\circ f` },
      { l: 'Lös', f: m`g(f(x))=(x+1)^2=x^2+2x+1` },
    ],
  },
  {
    t: 'Relationen · Bl. 5',
    r: [
      { l: 'Aufg', s: 'R auf ℤ: xRy ⇔ x−y gerade. Äquivalenzrel.?' },
      { l: 'Lös', s: 'reflexiv, symmetrisch, transitiv ⇒ ja' },
    ],
  },
  {
    t: 'Abzählbarkeit · Bl. 5/6',
    r: [
      { l: 'Aufg', s: 'Ist ℤ abzählbar?' },
      { l: 'Lös', f: m`0,1,-1,2,-2,\dots\Rightarrow\text{Bij. mit }\mathbb N` },
    ],
  },
  {
    t: 'Kombinatorik · Bl. 6',
    r: [
      { l: 'Aufg', s: 'Kennzeichen: 2 Buchstaben, 3 Ziffern (1. ≠ 0)' },
      { l: 'Lös', f: m`26\cdot26\cdot9\cdot10\cdot10=608\,400` },
    ],
  },
]

export const BEISPIELE2: HilfBox[] = [
  {
    t: 'Abbildungsvorschrift · Bl. 7',
    r: [
      { l: 'Aufg', f: m`2,4,8,16,\dots` },
      { l: 'Lös', f: m`a_n=2^n\quad(n\ge1)` },
    ],
  },
  {
    t: 'Beispielfolgen · Bl. 7/8',
    r: [
      { l: 'Aufg', f: m`x_n\to\infty,\ y_n\to0,\ x_ny_n\to5` },
      { l: 'Lös', f: m`x_n=n,\ y_n=\tfrac5n\Rightarrow x_ny_n=5` },
    ],
  },
  {
    t: 'Folgengrenzwerte · Bl. 7/8/12',
    r: [
      { l: 'Aufg', f: m`\lim_{n\to\infty}\tfrac{3n^2+n}{2n^2-1}` },
      { l: 'Lös', f: m`=\lim\tfrac{3+1/n}{2-1/n^2}=\tfrac32` },
    ],
  },
  {
    t: 'ε-N-Beweis · Bl. 7/8',
    r: [
      { l: 'Aufg', f: m`\text{Zeige }\lim\tfrac1n=0` },
      { l: 'Lös', f: m`\tfrac1n<\varepsilon\Leftrightarrow n>\tfrac1\varepsilon,\ N{=}\lceil\tfrac1\varepsilon\rceil` },
    ],
  },
  {
    t: 'Geometrische Reihe · Bl. 7/8/9',
    r: [
      { l: 'Aufg', f: m`\sum_{k=0}^\infty\left(\tfrac12\right)^k` },
      { l: 'Lös', f: m`=\tfrac1{1-\frac12}=2\quad(|q|<1)` },
    ],
  },
  {
    t: 'Rekursive Folgen · Bl. 8/9',
    r: [
      { l: 'Aufg', f: m`x_0{=}1,\ x_{n+1}=\sqrt{2+x_n}` },
      { l: 'Lös', f: m`\text{mon.}\uparrow,\text{ beschr.}\Rightarrow\text{konv.}` },
      { f: m`x=\sqrt{2+x}\Rightarrow x=2` },
    ],
  },
  {
    t: 'Reihen-Kriterien · Bl. 9/10',
    r: [
      { l: 'Aufg', f: m`\textstyle\sum\tfrac{2^k}{k!}\ \text{konv.?}` },
      { l: 'Lös', f: m`\tfrac{a_{k+1}}{a_k}=\tfrac2{k+1}\to0<1\Rightarrow\text{konv.}` },
    ],
  },
  {
    t: 'Funktionsgrenzwerte · Bl. 10/12',
    r: [
      { l: 'Aufg', f: m`\lim_{x\to2}\tfrac{x^2-4}{x-2}` },
      { l: 'Lös', f: m`=\lim_{x\to2}(x+2)=4` },
    ],
  },
  {
    t: 'Einseitige GW · Bl. 10/11',
    r: [
      { l: 'Aufg', f: m`\lim_{x\to0^{\pm}}\tfrac{|x|}{x}` },
      { l: 'Lös', f: m`0^{+}{:}\,1,\ 0^{-}{:}\,{-1}\Rightarrow\text{kein GW}` },
    ],
  },
  {
    t: 'Polynomdiv. & Asymptote · Bl. 9/10',
    r: [
      { l: 'Aufg', f: m`f(x)=\tfrac{x^2}{x-1}` },
      { l: 'Lös', f: m`=x+1+\tfrac1{x-1}\Rightarrow y{=}x{+}1` },
    ],
  },
  {
    t: 'O-Notation · Bl. 10',
    r: [
      { l: 'Aufg', f: m`3n^2+5n=O(n^2)\text{?}` },
      { l: 'Lös', f: m`\le8n^2\ (n\ge1)\Rightarrow C{=}8,\,n_0{=}1` },
    ],
  },
  {
    t: 'Stetigkeit prüfen · Bl. 11/12',
    r: [
      { l: 'Aufg', f: m`f=\begin{cases}x^2&x\le1\\2x-1&x>1\end{cases}` },
      { l: 'Lös', f: m`\lim_{1^-}{=}\lim_{1^+}{=}f(1){=}1\Rightarrow\text{stetig}` },
    ],
  },
  {
    t: 'Stetige Fortsetzung · Bl. 11',
    r: [
      { l: 'Aufg', f: m`f(x)=\tfrac{x^2-1}{x-1},\ x\ne1` },
      { l: 'Lös', f: m`=x+1\to2\Rightarrow c=2` },
    ],
  },
  {
    t: 'Zwischenwertsatz · Bl. 11',
    r: [
      { l: 'Aufg', f: m`x^3+x-1\ \text{in }[0,1]` },
      { l: 'Lös', f: m`h(0){=}{-1}<0,\ h(1){=}1>0\Rightarrow\exists c` },
    ],
  },
  {
    t: 'Punktweise Konvergenz · Bl. 11',
    r: [
      { l: 'Aufg', f: m`f_n(x)=x^n\ \text{auf }[0,1]` },
      { l: 'Lös', f: m`f(x)=\begin{cases}0&x<1\\1&x=1\end{cases}` },
    ],
  },
  {
    t: 'exp, ln & log · Bl. 12',
    r: [
      { l: 'Aufg', f: m`\log_2 64` },
      { l: 'Lös', f: m`64=2^6\Rightarrow\log_2 64=6` },
    ],
  },
  {
    t: 'Potenzreihe sin/cos · Bl. 12',
    r: [
      { l: 'Aufg', f: m`\textstyle\sum\tfrac{(-1)^k x^{2k+1}}{(2k+1)!}` },
      { l: 'Lös', f: m`\left|\tfrac{a_{k+1}}{a_k}\right|\to0\ \forall x\Rightarrow\mathbb R` },
    ],
  },
  {
    t: 'Ableitungen · Bl. 13',
    r: [
      { l: 'Aufg', f: m`f(x)=e^{1+2x}` },
      { l: 'Lös', f: m`f'(x)=e^{1+2x}\cdot2=2e^{1+2x}` },
    ],
  },
  {
    t: 'Differenzierbarkeit · Bl. 13',
    r: [
      { l: 'Aufg', f: m`f(x)=x|x|\ \text{in }0` },
      { l: 'Lös', f: m`f'_{\pm}(0)=0\Rightarrow\text{diffb.},\ f'(0){=}0` },
    ],
  },
  {
    t: 'Spezielle Ableitungen · Bl. 13',
    r: [
      { l: 'Aufg', f: m`(\sqrt x)'\ \text{(Umkehrregel)}` },
      { l: 'Lös', f: m`=\tfrac1{2\sqrt x}\quad(\text{Umkehr von }x^2)` },
    ],
  },
]
