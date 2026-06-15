import type { MatheBlatt } from '../../types'
import Frac from '../../utils/Frac'
import { h } from './shared'

export const blatt13: MatheBlatt = {
  id: 'blatt13',
  nr: '13',
  titel: 'Differentiation',
  aufgaben: [
    {
      id: 'b13a1',
      nr: 1,
      title: 'Ableitungen bestimmen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'f : ℝ → ℝ,  x ↦ x³ · exp(1 + 2x)'}</>,
          hint: h(
            <>
              <p>Wende die <span className="hint-em">Produktregel</span> (uv)' = u'v + uv' an mit u = x³ und v = exp(1+2x). Für v brauchst du außerdem die <span className="hint-em">Kettenregel</span>: v' = exp(1+2x) · 2.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere u und v für die Produktregel</li>
                <li>Leite u und v ab — für v brauchst du die Kettenregel (äußere × innere Ableitung)</li>
                <li>Setze in u'v + uv' ein und klammere gemeinsame Faktoren aus</li>
              </ol>
            </>,
            <p>Produkt- und Kettenregel: (f∘g)' = (f'∘g) · g'.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (exp(1+2x))' = exp(1+2x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> Kettenregel: (exp(1+2x))' = exp(1+2x) · 2; innerer Faktor 2 muss mitgenommen werden</li>
              <li><strong>❌ Falsch:</strong> Nur u'v oder nur uv' hinschreiben → <strong>✅ Richtig:</strong> Produktregel liefert beide Summanden: f' = u'v + uv'</li>
            </ul>,
          ),
          solution: (
            <>
              {'Mit Produkt- und Kettenregel:\n\n'}
              {"f'(x) = 3x² · exp(1 + 2x) + x³ · exp(1 + 2x) · 2\n"}
              {'      = (3x² + 2x³) · exp(1 + 2x).'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'g : ℝ → ℝ,  x ↦ '}<Frac n="2x" d="2x² + 1" /></>,
          hint: h(
            <>
              <p>Wende die <span className="hint-em">Quotientenregel</span> an: (u/v)' = (u'v − uv') / v², mit u = 2x und v = 2x² + 1.</p>
            </>,
            <>
              <ol>
                <li>Identifiziere u (Zähler) und v (Nenner) für die Quotientenregel</li>
                <li>Leite u und v ab</li>
                <li>Setze in (u'v − uv')/v² ein und vereinfache den Zähler</li>
              </ol>
            </>,
            <p>Quotientenregel: Zähler ist u'v − uv' (nicht u v' − u' v).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Zähler und Nenner getrennt ableiten: (2x)'/(2x²+1)' = 2/(4x) → <strong>✅ Richtig:</strong> Das ist nicht die Quotientenregel; korrekt ist (u'v − uv')/v²</li>
              <li><strong>❌ Falsch:</strong> Vorzeichen vertauschen: uv' − u'v → <strong>✅ Richtig:</strong> Quotientenregel: Zähler immer u'v − uv' (Ableitungsterm kommt zuerst)</li>
            </ul>,
          ),
          solution: (
            <>
              {'Mit der Quotientenregel:\n\n'}
              {"g'(x) = "}<Frac n="2(2x²+1) − 2x · 4x" d="(2x²+1)²" />{' = '}<Frac n="4x² + 2 − 8x²" d="(2x²+1)²" />{' = '}<Frac n="−4x² + 2" d="(2x²+1)²" />{'.'}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'h : (0,∞) → ℝ,  x ↦ (x³ + √3) · ln(x² + x)'}</>,
          hint: h(
            <>
              <p>Produktregel mit u = x³ + √3 und v = ln(x²+x). Für v brauchst du die Kettenregel: v' = (2x+1)/(x²+x).</p>
            </>,
            <>
              <ol>
                <li>Identifiziere u und v für die Produktregel</li>
                <li>Leite u ab (Ableitung von x³ + √3)</li>
                <li>Leite v = ln(x²+x) ab — nutze die Kettenregel für (ln(g(x)))' = g'(x)/g(x)</li>
                <li>Setze in u'v + uv' ein</li>
              </ol>
            </>,
            <p>Ableitung von ln(g(x)): g'(x)/g(x) (Kettenregel).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (ln(x²+x))' = 1/(x²+x) (Kettenregel vergessen) → <strong>✅ Richtig:</strong> Kettenregel: (ln(g(x)))' = g'(x)/g(x); hier g(x) = x²+x, g'(x) = 2x+1, also v' = (2x+1)/(x²+x)</li>
            </ul>,
          ),
          solution: (
            <>
              {'Mit Produkt- und Kettenregel:\n\n'}
              {"h'(x) = 3x² · ln(x² + x) + (x³ + √3) · "}<Frac n="1" d="x² + x" />{' · (2x + 1).'}
            </>
          ),
        },
        {
          letter: 'd',
          text: <>{'u : ℝ → ℝ,  x ↦ x|x|'}</>,
          hint: h(
            <>
              <p>Schreibe u als Fallunterscheidung: u(x) = x² für x ≥ 0 und u(x) = −x² für x {'<'} 0. Leite auf ℝ \ {'{0}'} direkt ab. Prüfe Differenzierbarkeit in 0 über den Differenzenquotienten.</p>
            </>,
            <>
              <ol>
                <li>Schreibe u(x) als Fallunterscheidung (|x| auflösen)</li>
                <li>Leite auf ℝ \ {'{0}'} direkt ab — je eine Formel für x &gt; 0 und x &lt; 0</li>
                <li>Prüfe Differenzierbarkeit in x = 0 über den Differenzenquotienten (einseitig)</li>
                <li>Vergleiche die beiden einseitigen Grenzwerte</li>
              </ol>
            </>,
            <p>Für x {'>'} 0: u(x) = x² → u'(x) = 2x. Für x {'<'} 0: u(x) = −x² → u'(x) = −2x.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Differenzierbarkeit in 0 überspringen und nur die Teilableitungen angeben → <strong>✅ Richtig:</strong> Bei stückweise definierten Funktionen immer separat den Differenzenquotienten in 0 berechnen</li>
            </ul>,
          ),
          solution: (
            <>
              {'u(x) = x|x| = { x²,  x ≥ 0\n'}
              {'              { −x², x < 0\n\n'}
              {'Auf ℝ \\ {0}: u\'(x) = 2x (x > 0) bzw. −2x (x < 0).\n\n'}
              {'In x = 0:\n\n'}
              {"u'₊(0) = lim "}<Frac n="x² − 0" d="x − 0" />{' = lim x = 0,\n'}
              {"u'₋(0) = lim "}<Frac n="−x² − 0" d="x − 0" />{' = lim (−x) = 0.\n\n'}
              {"Da u'₊(0) = u'₋(0) = 0, gilt u'(0) = 0.\n\n"}
              {"u' : ℝ → ℝ,  x ↦ { 2x,  x > 0\n"}
              {'                  { 0,   x = 0\n'}
              {'                  { −2x, x < 0'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b13a2',
      nr: 2,
      title: 'Differenzierbarkeit in 0 prüfen',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'f : ℝ → ℝ,  x ↦ { x (x ≥ 0),  x² (x < 0)'}</>,
          hint: h(
            <>
              <p>Berechne die einseitigen Differenzenquotienten in 0: f'₊(0) für x→0⁺ und f'₋(0) für x→0⁻. Nur wenn beide übereinstimmen, ist f in 0 differenzierbar.</p>
            </>,
            <>
              <ol>
                <li>Berechne den rechtsseitigen Differenzenquotienten: lim(x→0⁺) (f(x)−f(0))/x</li>
                <li>Berechne den linksseitigen Differenzenquotienten: lim(x→0⁻) (f(x)−f(0))/x</li>
                <li>Vergleiche die beiden Grenzwerte — stimmen sie überein?</li>
              </ol>
            </>,
            <p>Skizze: Gerade (x ≥ 0) trifft Parabel (x {'<'} 0) — es gibt einen Knick im Ursprung.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> f ist stetig in 0 → f ist differenzierbar in 0 → <strong>✅ Richtig:</strong> Stetigkeit ist notwendig, aber nicht hinreichend; der Knick (f'₊ = 1 ≠ 0 = f'₋) zeigt Nicht-Differenzierbarkeit</li>
            </ul>,
          ),
          solution: (
            <>
              {"f'₊(0) = lim "}<Frac n="f(x) − f(0)" d="x − 0" />{' = lim '}<Frac n="x" d="x" />{' = lim 1 = 1,\n'}
              {"f'₋(0) = lim "}<Frac n="f(x) − f(0)" d="x − 0" />{' = lim '}<Frac n="x²" d="x" />{' = lim x = 0.\n\n'}
              {"Da f'₊(0) ≠ f'₋(0), ist f in 0 nicht differenzierbar."}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'g : ℝ → ℝ,  x ↦ { x³ (x ≥ 0),  x² (x < 0)'}</>,
          hint: h(
            <>
              <p>Berechne die einseitigen Differenzenquotienten in 0. Für x→0⁺: x³/x = x² → 0. Für x→0⁻: x²/x = x → 0.</p>
            </>,
            <>
              <ol>
                <li>Berechne den rechtsseitigen Differenzenquotienten: lim(x→0⁺) (g(x)−g(0))/x</li>
                <li>Berechne den linksseitigen Differenzenquotienten: lim(x→0⁻) (g(x)−g(0))/x</li>
                <li>Vergleiche die Grenzwerte und formuliere das Ergebnis</li>
              </ol>
            </>,
            <p>Skizze: x³-Kurve (x ≥ 0) und Parabel (x {'<'} 0) — beide haben Steigung 0 im Ursprung.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Nur Stetigkeit prüfen und daraus Differenzierbarkeit folgern → <strong>✅ Richtig:</strong> Stetigkeit ist notwendig, aber nicht hinreichend; beide einseitigen Differenzenquotienten explizit berechnen</li>
            </ul>,
          ),
          solution: (
            <>
              {"g'₊(0) = lim "}<Frac n="g(x) − g(0)" d="x − 0" />{' = lim '}<Frac n="x³" d="x" />{' = lim x² = 0,\n'}
              {"g'₋(0) = lim "}<Frac n="g(x) − g(0)" d="x − 0" />{' = lim '}<Frac n="x²" d="x" />{' = lim x = 0.\n\n'}
              {"Da g'₊(0) = g'₋(0) = 0, ist g in 0 differenzierbar mit g'(0) = 0."}
            </>
          ),
        },
        {
          letter: 'c',
          text: <>{'h : ℝ → ℝ,  x ↦ { x³+1 (x ≥ 0),  x² (x < 0)'}</>,
          hint: h(
            <>
              <p>Prüfe zunächst die <span className="hint-em">Stetigkeit</span> in 0. Da lim h(x) für x→0⁺ und x→0⁻ unterschiedliche Werte liefert, ist h nicht stetig in 0 und damit nicht differenzierbar.</p>
            </>,
            <>
              <ol>
                <li>Prüfe zuerst die Stetigkeit in x = 0 (links- und rechtsseitiger Grenzwert)</li>
                <li>Wenn die Funktion nicht stetig ist, folgt sofort die Nicht-Differenzierbarkeit</li>
                <li>Begründe den Schluss: Differenzierbarkeit impliziert Stetigkeit (Umkehrung gilt nicht)</li>
              </ol>
            </>,
            <p>Differenzierbarkeit impliziert Stetigkeit — ein Sprung schließt Differenzierbarkeit aus.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Differenzenquotienten berechnen ohne Stetigkeit zu prüfen → <strong>✅ Richtig:</strong> Zuerst Stetigkeit prüfen; ein Sprung schließt Differenzierbarkeit sofort aus (Differenzierbarkeit impliziert Stetigkeit)</li>
            </ul>,
          ),
          solution: (
            <>
              {'Da lim h(x) = 1 (x→0⁺) und lim h(x) = 0 (x→0⁻), ist h nicht stetig in 0.\n\n'}
              {'Da Differenzierbarkeit Stetigkeit impliziert, ist h in 0 nicht differenzierbar.\n\n'}
              {'Alternativ: h\'₋(0) = lim '}<Frac n="x² − 1" d="x" />{' = lim (x − '}<Frac n="1" d="x" />{') = −∞  (x→0⁻) — existiert nicht.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b13a3',
      nr: 3,
      title: 'Ableitung der Wurzelfunktion (Umkehrfunktionsregel)',
      subaufgaben: [
        {
          letter: '',
          text: (
            <>
              {'Die Funktion f : (0,∞) → (0,∞), x ↦ x² ist bijektiv und differenzierbar mit f\'(x) ≠ 0. Ihre Umkehrfunktion f⁻¹ : (0,∞) → (0,∞), x ↦ √x ist ebenfalls differenzierbar. Berechnen Sie die Ableitung von f⁻¹ mit der Umkehrfunktionsregel.'}
            </>
          ),
          hint: h(
            <>
              <p>Die <span className="hint-em">Umkehrfunktionsregel</span>: (f⁻¹)'(x) = <Frac n="1" d="f'(f⁻¹(x))" />. Hier ist f'(x) = 2x und f⁻¹(x) = √x. Einsetzen liefert die gesuchte Ableitung.</p>
            </>,
            <>
              <ol>
                <li>Schreibe die Umkehrfunktionsregel auf: (f⁻¹)'(x) = 1 / f'(f⁻¹(x))</li>
                <li>Berechne f'(x) aus der Formel f(x) = x²</li>
                <li>Setze f⁻¹(x) = √x in f' ein und vereinfache</li>
              </ol>
            </>,
            <p>Allgemein: (f⁻¹)'(x) = 1 / f'(f⁻¹(x)), sofern f'(f⁻¹(x)) ≠ 0.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (√x)' = (x^(1/2))' = (1/2)x^(−1/2) direkt per Potenzregel ableiten → <strong>✅ Richtig:</strong> Zwar korrekt, aber die Aufgabe verlangt explizit die Umkehrfunktionsregel (f⁻¹)'(x) = 1/f'(f⁻¹(x))</li>
            </ul>,
          ),
          solution: (
            <>
              {"Es ist f'(x) = 2x. Mit der Umkehrfunktionsregel:\n\n"}
              {"(f⁻¹)'(x) = "}<Frac n="1" d="f'(f⁻¹(x))" />{' = '}<Frac n="1" d="2 f⁻¹(x)" />{' = '}<Frac n="1" d="2√x" />{'.'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b13a4',
      nr: 4,
      title: 'Potenzreihe und geometrische Reihe (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: '',
          text: (
            <>
              {'Leiten Sie f : (−1,1) → ℝ, x ↦ Σ'}
              <sub>{'k=0'}</sub>
              <sup>{'∞'}</sup>
              {' xᵏ und g : (−1,1) → ℝ, x ↦ '}
              <Frac n="1" d="1 − x" />
              {' ab. Was ist der Zusammenhang zwischen f\' und g\'? (Hinweis: Geometrische Reihe)'}
            </>
          ),
          hint: h(
            <>
              <p>Leite die Potenzreihe gliedweise ab: f'(x) = Σ k·x^(k−1). Indexshift k→k+1 liefert Σ(k+1)xᵏ. Für g wende die Kettenregel auf (1−x)⁻¹ an. Da f = g auf (−1,1), gilt auch f' = g'.</p>
            </>,
            <>
              <ol>
                <li>Leite die Potenzreihe gliedweise ab: (xᵏ)' = k·xᵏ⁻¹</li>
                <li>Führe einen Indexshift durch, um die Summe wieder bei k=0 starten zu lassen</li>
                <li>Leite g(x) = (1−x)⁻¹ über die Kettenregel ab</li>
                <li>Nutze die geometrische Reihe f = g, um f' = g' zu folgern</li>
              </ol>
            </>,
            <p>Geometrische Reihe: Σxᵏ = 1/(1−x) für |x| {'<'} 1.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Indexshift nach der Ableitung weglassen → <strong>✅ Richtig:</strong> Nach gliedweiser Ableitung beginnt die Summe bei k=1; Indexshift k → k+1 liefert Σ(k+1)xᵏ ab k=0</li>
              <li><strong>❌ Falsch:</strong> ((1−x)⁻¹)' = −(1−x)⁻² ohne inneren Faktor → <strong>✅ Richtig:</strong> Kettenregel: innerer Faktor (1−x)' = −1; also ((1−x)⁻¹)' = −(1−x)⁻²·(−1) = 1/(1−x)²</li>
            </ul>,
          ),
          solution: (
            <>
              {"f'(x) = Σ"}
              <sub>{'k=1'}</sub>
              <sup>{'∞'}</sup>
              {' k·x'}
              <sup>{'k−1'}</sup>
              {' = Σ'}
              <sub>{'k=0'}</sub>
              <sup>{'∞'}</sup>
              {' (k+1)xᵏ  (Indexshift).\n\n'}
              {"g'(x) = −(1 − x)⁻² · (−1) = "}
              <Frac n="1" d="(1 − x)²" />
              {'.\n\n'}
              {'Da Σxᵏ = '}<Frac n="1" d="1−x" />{' für x ∈ (−1,1), gilt f = g und damit f\' = g\'.\n\n'}
              {'Das heißt: Σ'}
              <sub>{'k=0'}</sub>
              <sup>{'∞'}</sup>
              {' (k+1)xᵏ konvergiert gegen '}
              <Frac n="1" d="(1−x)²" />
              {' für x ∈ (−1,1).'}
            </>
          ),
        },
      ],
    },
    {
      id: 'b13a5',
      nr: 5,
      title: 'Allgemeine Potenz und Exponentialfunktion (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: <>{'Sei a ∈ ℝ. Bestimmen Sie die Ableitung von f : (0,∞) → ℝ, x ↦ xᵃ.'}</>,
          hint: h(
            <>
              <p>Schreibe f(x) = xᵃ = exp(a · ln(x)) und wende die Kettenregel an. Vereinfache anschließend: exp(a·ln(x)) = xᵃ.</p>
            </>,
            <>
              <ol>
                <li>Schreibe xᵃ = exp(a · ln(x)) um (Definition der allgemeinen Potenz)</li>
                <li>Leite mit der Kettenregel ab — innere Ableitung von a·ln(x) bestimmen</li>
                <li>Schreibe exp(a·ln(x)) als xᵃ zurück und vereinfache</li>
              </ol>
            </>,
            <p>Schlüssel: exp(a·ln(x)) = xᵃ zurückschreiben.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Potenzregel (xᵃ)' = a·xᵃ⁻¹ direkt ohne Herleitung hinschreiben → <strong>✅ Richtig:</strong> Über xᵃ = exp(a·ln(x)) und Kettenregel herleiten; das ist der verlangte Weg</li>
            </ul>,
          ),
          solution: (
            <>
              {'f(x) = xᵃ = exp(a · ln(x)).\n\n'}
              {"f'(x) = exp(a · ln(x)) · "}<Frac n="a" d="x" />{' = '}<Frac n="xᵃ · a" d="x" />{' = a · x'}
              <sup>{'a−1'}</sup>
              {'.'}
            </>
          ),
        },
        {
          letter: 'b',
          text: <>{'Sei c ∈ (0,∞). Bestimmen Sie die Ableitung von g : ℝ → ℝ, x ↦ cˣ.'}</>,
          hint: h(
            <>
              <p>Schreibe g(x) = cˣ = exp(x · ln(c)). Da ln(c) eine Konstante ist, ergibt die Kettenregel: g'(x) = exp(x·ln(c)) · ln(c) = ln(c) · cˣ.</p>
            </>,
            <>
              <ol>
                <li>Schreibe cˣ = exp(x · ln(c)) um (ln(c) ist eine feste Konstante)</li>
                <li>Leite mit der Kettenregel ab — innere Ableitung von x·ln(c) bestimmen</li>
                <li>Schreibe exp(x·ln(c)) als cˣ zurück</li>
              </ol>
            </>,
            <p>ln(c) ist für c {'>'} 0 eine feste Konstante — Ableitung von x·ln(c) nach x ist ln(c).</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> Potenzregel (cˣ)' = x·cˣ⁻¹ → <strong>✅ Richtig:</strong> Potenzregel gilt nur wenn die Basis die Variable ist (xⁿ)' = n·xⁿ⁻¹; hier ist die Basis c konstant, daher: cˣ = exp(x·ln c) → (cˣ)' = ln(c)·cˣ</li>
            </ul>,
          ),
          solution: (
            <>
              {'g(x) = cˣ = exp(x · ln(c)).\n\n'}
              {"g'(x) = exp(x · ln(c)) · ln(c) = ln(c) · cˣ."}
            </>
          ),
        },
      ],
    },
    {
      id: 'b13a6',
      nr: 6,
      title: 'Ableitung von tan und arctan (Wenn noch Zeit ist)',
      subaufgaben: [
        {
          letter: 'a',
          text: (
            <>
              {'Zeigen Sie: tan\'(x) = '}<Frac n="1" d="(cos x)²" />{' = 1 + (tan x)² auf (−π/2, π/2).'}
            </>
          ),
          hint: h(
            <>
              <p>Wende die <span className="hint-em">Quotientenregel</span> auf tan(x) = sin(x)/cos(x) an. Nutze sin' = cos, cos' = −sin sowie den trigonometrischen Pythagoras: (cos x)² + (sin x)² = 1.</p>
            </>,
            <>
              <ol>
                <li>Schreibe tan(x) = sin(x)/cos(x) und wende die Quotientenregel an</li>
                <li>Vereinfache den Zähler mit dem trigonometrischen Pythagoras (cos²+sin²=1)</li>
                <li>Schreibe 1/cos² als 1 + sin²/cos² um und erkenne tan²</li>
              </ol>
            </>,
            <p>(cos x)² + (sin x)² = 1 — trigonometrischer Pythagoras.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> (cos x)' = sin x (falsches Vorzeichen) → <strong>✅ Richtig:</strong> (cos x)' = −sin x; das Minuszeichen ist entscheidend, um (cos²+sin²)/cos² = 1/cos² zu erhalten</li>
            </ul>,
          ),
          solution: (
            <>
              {'Mit der Quotientenregel (sin\' = cos, cos\' = −sin):\n\n'}
              {"tan'(x) = "}<Frac n="cos·cos − sin·(−sin)" d="(cos x)²" />{' = '}<Frac n="(cos x)² + (sin x)²" d="(cos x)²" />{' = '}<Frac n="1" d="(cos x)²" />{'. ✓\n\n'}
              {'Zweite Darstellung:\n\n'}
              <Frac n="1" d="(cos x)²" />{' = 1 + '}<Frac n="(sin x)²" d="(cos x)²" />{' = 1 + (tan x)². ✓'}
            </>
          ),
        },
        {
          letter: 'b',
          text: (
            <>
              {'Zeigen Sie mit der zweiten Darstellung von tan\' und der Ableitungsregel für Umkehrfunktionen: arctan\'(x) = '}<Frac n="1" d="1 + x²" />{' für alle x ∈ ℝ.'}
            </>
          ),
          hint: h(
            <>
              <p>Umkehrfunktionsregel: arctan'(x) = 1/tan'(arctan(x)). Setze tan' = 1 + tan² ein und nutze tan(arctan(x)) = x.</p>
            </>,
            <>
              <ol>
                <li>Wende die Umkehrfunktionsregel an: arctan'(x) = 1 / tan'(arctan(x))</li>
                <li>Setze die zweite Darstellung tan' = 1 + tan² ein</li>
                <li>Vereinfache mit der Identität tan(arctan(x)) = x</li>
              </ol>
            </>,
            <p>Schlüsselidentität: tan(arctan(x)) = x für alle x ∈ ℝ.</p>,
            <ul>
              <li><strong>❌ Falsch:</strong> 1 + tan²(arctan(x)) stehen lassen ohne zu vereinfachen → <strong>✅ Richtig:</strong> Schlüsselidentität tan(arctan(x)) = x einsetzen; ergibt sofort 1 + x²</li>
            </ul>,
          ),
          solution: (
            <>
              {'Mit der Umkehrfunktionsregel und tan\' = 1 + tan²:\n\n'}
              {"arctan'(x) = "}<Frac n="1" d="tan'(arctan(x))" />{' = '}<Frac n="1" d="1 + tan²(arctan(x))" />{' = '}<Frac n="1" d="1 + x²" />{'. ✓'}
            </>
          ),
        },
      ],
    },
  ],
}
