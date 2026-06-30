import { useId } from 'react'

// Allgemeiner Funktionsplotter im gleichen Stil wie LineGraph (dunkle Leinwand,
// Achsen mit Pfeilen, Gitter). Plottet beliebige y = f(x) durch Sampling, dazu
// optionale offene/gefüllte Endpunkte (für Intervallränder, Sprungstellen) und
// eine Legende bei mehreren benannten Kurven.

const W = 300
const H = 240
const PL = 38
const PR = 16
const PT = 16
const PB = 28

const CURVE_COLORS = ['#4d9fff', '#3ecf8e', '#f5a623', '#c77dff', '#f16063']
const CANVAS = '#0f1117'

export interface PlotSeries {
  f: (x: number) => number
  from: number
  to: number
  color?: string
  label?: string
  dashed?: boolean
}
export interface PlotMarker {
  x: number
  y: number
  /** true = ausgefüllt (Wert gehört dazu), false = offen (Wert ausgeschlossen). */
  filled: boolean
  color?: string
}
export interface PlotData {
  series: PlotSeries[]
  markers?: PlotMarker[]
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  caption?: string
}

function rangeTicks(min: number, max: number): number[] {
  const ticks: number[] = []
  for (let v = Math.ceil(min); v <= Math.floor(max); v++) ticks.push(v)
  return ticks
}

export default function FunctionPlot({ data }: { data: PlotData }) {
  const uid = useId().replace(/:/g, '')
  const { xMin, xMax, yMin, yMax } = data
  const iw = W - PL - PR
  const ih = H - PT - PB
  const sx = (x: number) => PL + ((x - xMin) / (xMax - xMin)) * iw
  const sy = (y: number) => PT + ((yMax - y) / (yMax - yMin)) * ih

  const xTicks = rangeTicks(xMin, xMax)
  const yTicks = rangeTicks(yMin, yMax)
  const yAxisX = Math.max(PL, Math.min(W - PR, sx(0)))
  const xAxisY = Math.max(PT, Math.min(H - PB, sy(0)))

  const series = data.series.map((s, i) => ({ ...s, col: s.color ?? CURVE_COLORS[i % CURVE_COLORS.length] }))
  const labeled = series.filter(s => s.label)

  const samplePts = (s: PlotSeries) => {
    const N = 180
    const pts: string[] = []
    for (let i = 0; i <= N; i++) {
      const x = s.from + ((s.to - s.from) * i) / N
      const y = s.f(x)
      if (!Number.isFinite(y)) continue
      pts.push(`${sx(x).toFixed(1)},${sy(y).toFixed(1)}`)
    }
    return pts.join(' ')
  }

  return (
    <figure className="fnplot">
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="line-graph-svg"
        role="img"
        aria-label={data.caption ? `Funktionsgraph: ${data.caption}` : 'Funktionsgraph'}
      >
        <defs>
          <clipPath id={`fp-${uid}`}>
            <rect x={PL} y={PT} width={iw} height={ih} />
          </clipPath>
        </defs>

        {/* Gitter */}
        {xTicks.map(x => (
          <line key={`gx${x}`} x1={sx(x)} y1={PT} x2={sx(x)} y2={H - PB} stroke="rgba(128,134,160,0.18)" strokeWidth="1" />
        ))}
        {yTicks.map(y => (
          <line key={`gy${y}`} x1={PL} y1={sy(y)} x2={W - PR} y2={sy(y)} stroke="rgba(128,134,160,0.18)" strokeWidth="1" />
        ))}

        {/* Achsen + Pfeile */}
        <line x1={PL} y1={xAxisY} x2={W - PR - 6} y2={xAxisY} stroke="#555a72" strokeWidth="1" />
        <line x1={yAxisX} y1={H - PB} x2={yAxisX} y2={PT + 6} stroke="#555a72" strokeWidth="1" />
        <polygon points={`${W - PR},${xAxisY} ${W - PR - 8},${xAxisY - 3} ${W - PR - 8},${xAxisY + 3}`} fill="#555a72" />
        <polygon points={`${yAxisX},${PT} ${yAxisX - 3},${PT + 8} ${yAxisX + 3},${PT + 8}`} fill="#555a72" />
        <text x={W - PR + 2} y={xAxisY + 4} fontSize="11" fill="#8b90a8" fontFamily="monospace">x</text>
        <text x={yAxisX + 4} y={PT - 2} fontSize="11" fill="#8b90a8" fontFamily="monospace">y</text>

        {/* Tick-Beschriftung */}
        {xTicks.flatMap(x => (x === 0 ? [] : [
          <text key={`tx${x}`} x={sx(x)} y={xAxisY + 14} textAnchor="middle" fontSize="10" fill="#8b90a8" fontFamily="monospace">{x}</text>,
        ]))}
        {yTicks.flatMap(y => (y === 0 ? [] : [
          <text key={`ty${y}`} x={yAxisX - 6} y={sy(y) + 4} textAnchor="end" fontSize="10" fill="#8b90a8" fontFamily="monospace">{y}</text>,
        ]))}

        {/* Kurven */}
        <g clipPath={`url(#fp-${uid})`}>
          {series.map(s => (
            <polyline
              key={s.label ?? `${s.from}_${s.to}_${s.col}`}
              points={samplePts(s)}
              fill="none"
              stroke={s.col}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? '5 4' : undefined}
            />
          ))}
        </g>

        {/* Endpunkt-Marker (offen / gefüllt) */}
        {(data.markers ?? []).map(m => {
          const col = m.color ?? '#f16063'
          return (
            <circle
              key={`m${m.x}_${m.y}_${m.filled ? 1 : 0}`}
              cx={sx(m.x)}
              cy={sy(m.y)}
              r={4.5}
              fill={m.filled ? col : CANVAS}
              stroke={col}
              strokeWidth="2"
            />
          )
        })}

        {/* Legende */}
        {labeled.length > 1 &&
          labeled.map((s, i) => (
            <g key={`lg-${s.label}`}>
              <line x1={PL + 6} y1={PT + 10 + i * 14} x2={PL + 24} y2={PT + 10 + i * 14} stroke={s.col} strokeWidth="3" strokeLinecap="round" />
              <text x={PL + 29} y={PT + 14 + i * 14} fontSize="11" fill={s.col} fontFamily="monospace" fontWeight="600">{s.label}</text>
            </g>
          ))}
      </svg>
      {data.caption && <figcaption className="fnplot-cap">{data.caption}</figcaption>}
    </figure>
  )
}
