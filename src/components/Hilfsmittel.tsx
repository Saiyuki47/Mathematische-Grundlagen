import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Zweiseitige, druckbare Formelsammlung für Mathematische Grundlagen (Blatt 0–13).
// Abgeleitet aus allen Übungsblättern: Grundrechnen, Mengen/Logik, Summen/Induktion/
// Kombinatorik, Funktionen/Relationen, Folgen/Reihen, Grenzwerte/Stetigkeit,
// spezielle Funktionen und Differentiation. Ziel: jede Aufgabe damit lösbar.

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
      { l: 'Quotient', f: m`\lim\big|\tfrac{a_{k+1}}{a_k}\big|=q<1\text{ konv.},\,>1\text{ div.}` },
      { l: 'Wurzel', f: m`\lim\sqrt[k]{|a_k|}=q<1\text{ konv.},\,>1\text{ div.}` },
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
    t: 'Stetigkeit',
    r: [
      { f: m`f\text{ stetig in }x_0:\;\lim_{x\to x_0}f(x)=f(x_0)` },
      { f: m`\text{Summe/Produkt/Verkettung stetiger Fkt. stetig}` },
      { l: 'Zwischenwertsatz', f: m`f\text{ stetig auf }[a,b],\,y\text{ zw. }f(a),f(b)\Rightarrow\exists c:\,f(c)=y` },
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
]

const FS_CSS = `
.hilf-pdf{margin:0 0 1.5rem}
.hilf-pdf-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;flex-wrap:wrap;margin-bottom:.6rem}
.hilf-pdf-head h3{margin:0;font-size:1.05rem}
.hilf-pdf-open,.hilf-pdf-fallback a{color:var(--blue,#4d9fff);font-weight:600;text-decoration:none}
.hilf-pdf-open:hover,.hilf-pdf-fallback a:hover{text-decoration:underline}
.hilf-pdf-frame{width:100%;height:min(82vh,920px);border:1px solid var(--border);border-radius:8px;background:#fff;display:block}
.hilf-pdf-fallback{margin:.5rem 0 0;font-size:.85rem;opacity:.8}
.hilf-sub{margin:0 0 .75rem;font-size:1.05rem}
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
        <span>Formelsammlung — Mathematische Grundlagen</span>
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

export default function Hilfsmittel() {
  useEffect(() => injectFsCss(), [])
  const pdfUrl = `${import.meta.env.BASE_URL}Formelsammlung.pdf`
  return (
    <div>
      <div className="hilf-bar">
        <div className="hilf-bar-text">
          <h2>Hilfsmittel</h2>
          <p>
            Offizielle Formelsammlung als PDF sowie eine zweiseitige, druckbare Kurzfassung —
            deckt alle Übungsblätter (0–13) ab.
          </p>
        </div>
        <div className="hilf-bar-actions">
          <span className="hilf-bar-hint">2 Seiten · A4</span>
          <button type="button" className="hilf-print-btn" onClick={() => window.print()}>
            🖨 Kurzfassung drucken
          </button>
        </div>
      </div>

      <section className="hilf-pdf">
        <div className="hilf-pdf-head">
          <h3>📄 Offizielle Formelsammlung</h3>
          <a className="hilf-pdf-open" href={pdfUrl} target="_blank" rel="noopener noreferrer">
            In neuem Tab öffnen ↗
          </a>
        </div>
        <iframe
          className="hilf-pdf-frame"
          src={pdfUrl}
          title="Formelsammlung (PDF)"
          sandbox="allow-same-origin allow-popups allow-downloads"
        />
        <p className="hilf-pdf-fallback">
          Vorschau lädt nicht?{' '}
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            PDF in neuem Tab öffnen ↗
          </a>
        </p>
      </section>

      <h3 className="hilf-sub">✍️ Kompakt-Formelsammlung (2 Seiten, druckbar)</h3>
      <div className="fs-print-area">
        <Page boxes={PAGE1} nr={1} />
        <Page boxes={PAGE2} nr={2} />
      </div>
    </div>
  )
}
