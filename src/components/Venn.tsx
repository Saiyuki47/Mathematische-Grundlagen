import { useId } from 'react'

// Venn-Diagramme mit exakt schattierten Flächen.
// Idee: Die 2^n Elementarregionen (jede Kombination „in/außerhalb" der Kreise)
// werden einzeln über geschachtelte clipPaths geschnitten. „außerhalb Kreis X"
// = Grundmengen-Rechteck minus Kreis (evenodd-Pfad). Ein Mengenausdruck wird als
// Prädikat über die Kreis-Zugehörigkeit übergeben; alle Elementarregionen, für die
// es wahr ist, werden eingefärbt. Damit ist jede Boolesche Kombination darstellbar.

const HL = 'rgba(37, 99, 235, 0.42)'

function circleSubpath(cx: number, cy: number, r: number) {
  return `M${cx - r},${cy} a${r},${r} 0 1,0 ${2 * r},0 a${r},${r} 0 1,0 ${-2 * r},0 Z`
}

interface CircleDef { label: string; cx: number; cy: number; r: number; lx: number; ly: number }
interface Geom { vb: string; rect: { x: number; y: number; w: number; h: number }; circles: CircleDef[] }

function VennBase({ geom, shade, caption }: { geom: Geom; shade: (mem: boolean[]) => boolean; caption?: string }) {
  const uid = useId().replace(/:/g, '')
  const { rect, circles } = geom
  const n = circles.length
  const rectPath = `M${rect.x},${rect.y} H${rect.x + rect.w} V${rect.y + rect.h} H${rect.x} Z`

  const combos: boolean[][] = []
  for (let i = 0; i < 1 << n; i++) {
    const t: boolean[] = []
    for (let j = 0; j < n; j++) t.push(Boolean(i & (1 << j)))
    combos.push(t)
  }
  const active = combos.filter(shade)
  const clipId = (j: number, inside: boolean) => `v-${uid}-${j}-${inside ? 'in' : 'out'}`

  return (
    <figure className="venn">
      <svg viewBox={geom.vb} className="venn-svg" role="img" aria-label={caption ? `Venn-Diagramm: ${caption}` : 'Venn-Diagramm'}>
        <defs>
          {circles.map((c, j) => (
            <clipPath key={`in-${c.label}`} id={clipId(j, true)}>
              <circle cx={c.cx} cy={c.cy} r={c.r} />
            </clipPath>
          ))}
          {circles.map((c, j) => (
            <clipPath key={`out-${c.label}`} id={clipId(j, false)} clipRule="evenodd">
              <path d={`${rectPath} ${circleSubpath(c.cx, c.cy, c.r)}`} clipRule="evenodd" />
            </clipPath>
          ))}
        </defs>

        {active.map(mem => {
          let el = (
            <rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} fill={HL} clipPath={`url(#${clipId(0, mem[0])})`} />
          )
          for (let j = 1; j < n; j++) {
            el = <g clipPath={`url(#${clipId(j, mem[j])})`}>{el}</g>
          }
          return <g key={mem.map(b => (b ? '1' : '0')).join('')}>{el}</g>
        })}

        <rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx={8} className="venn-univ" fill="none" />
        {circles.map(c => (
          <circle key={`c-${c.label}`} cx={c.cx} cy={c.cy} r={c.r} className="venn-circle" fill="none" />
        ))}
        {circles.map(c => (
          <text key={`l-${c.label}`} x={c.lx} y={c.ly} className="venn-label">{c.label}</text>
        ))}
      </svg>
      {caption && <figcaption className="venn-cap">{caption}</figcaption>}
    </figure>
  )
}

export function Venn3({ shade, caption, labels = ['A', 'B', 'C'] }: {
  shade: (a: boolean, b: boolean, c: boolean) => boolean
  caption?: string
  labels?: [string, string, string]
}) {
  const geom: Geom = {
    vb: '0 0 260 230',
    rect: { x: 14, y: 12, w: 232, h: 192 },
    circles: [
      { label: labels[0], cx: 102, cy: 90, r: 56, lx: 70, ly: 92 },
      { label: labels[1], cx: 158, cy: 90, r: 56, lx: 190, ly: 92 },
      { label: labels[2], cx: 130, cy: 134, r: 56, lx: 130, ly: 178 },
    ],
  }
  return <VennBase geom={geom} caption={caption} shade={m => shade(m[0], m[1], m[2])} />
}

export function Venn2({ shade, caption, labels = ['A', 'B'] }: {
  shade: (a: boolean, b: boolean) => boolean
  caption?: string
  labels?: [string, string]
}) {
  const geom: Geom = {
    vb: '0 0 240 180',
    rect: { x: 12, y: 10, w: 216, h: 150 },
    circles: [
      { label: labels[0], cx: 90, cy: 86, r: 60, lx: 58, ly: 90 },
      { label: labels[1], cx: 150, cy: 86, r: 60, lx: 182, ly: 90 },
    ],
  }
  return <VennBase geom={geom} caption={caption} shade={m => shade(m[0], m[1])} />
}
