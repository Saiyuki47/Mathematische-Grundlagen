import type { LineGraphData } from '../types'

interface Props {
  data: LineGraphData
}

const W = 300
const H = 240
const PL = 38  // padding left (for y-axis labels)
const PR = 16  // padding right
const PT = 16  // padding top
const PB = 28  // padding bottom

const LINE_COLORS = ['#4d9fff', '#3ecf8e', '#f5a623']

function toSvg(
  mx: number, my: number,
  xMin: number, xMax: number,
  yMin: number, yMax: number,
): [number, number] {
  const iw = W - PL - PR
  const ih = H - PT - PB
  return [
    PL + ((mx - xMin) / (xMax - xMin)) * iw,
    PT + ((yMax - my) / (yMax - yMin)) * ih,
  ]
}

function clipLine(
  m: number, b: number,
  xMin: number, xMax: number,
  yMin: number, yMax: number,
): [[number, number], [number, number]] | null {
  const eps = 1e-9
  const pts: [number, number][] = []

  const tryPt = (x: number, y: number) => {
    if (x >= xMin - eps && x <= xMax + eps && y >= yMin - eps && y <= yMax + eps) {
      pts.push([
        Math.max(xMin, Math.min(xMax, x)),
        Math.max(yMin, Math.min(yMax, y)),
      ])
    }
  }

  // Intersect with left/right edges
  tryPt(xMin, m * xMin + b)
  tryPt(xMax, m * xMax + b)

  // Intersect with top/bottom edges (non-horizontal lines only)
  if (Math.abs(m) > eps) {
    tryPt((yMin - b) / m, yMin)
    tryPt((yMax - b) / m, yMax)
  }

  if (pts.length < 2) return null
  pts.sort((a, c) => a[0] - c[0])
  return [pts[0], pts[pts.length - 1]]
}

function rangeTicks(min: number, max: number): number[] {
  const ticks: number[] = []
  for (let v = Math.ceil(min); v <= Math.floor(max); v++) ticks.push(v)
  return ticks
}

export default function LineGraph({ data }: Props) {
  const { lines, points, xMin, xMax, yMin, yMax } = data

  const xTicks = rangeTicks(xMin, xMax)
  const yTicks = rangeTicks(yMin, yMax)

  // Axis positions in SVG space (clamped to drawing area)
  const [axisYX] = toSvg(0, 0, xMin, xMax, yMin, yMax)   // SVG x of y-axis
  const [, axisXY] = toSvg(0, 0, xMin, xMax, yMin, yMax) // SVG y of x-axis
  const yAxisX = Math.max(PL, Math.min(W - PR, axisYX))
  const xAxisY = Math.max(PT, Math.min(H - PB, axisXY))

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="line-graph-svg"
    >
      {/* Grid lines */}
      {xTicks.map(x => {
        const [sx] = toSvg(x, 0, xMin, xMax, yMin, yMax)
        return <line key={`gx${x}`} x1={sx} y1={PT} x2={sx} y2={H - PB} stroke="rgba(128,134,160,0.18)" strokeWidth="1" />
      })}
      {yTicks.map(y => {
        const [, sy] = toSvg(0, y, xMin, xMax, yMin, yMax)
        return <line key={`gy${y}`} x1={PL} y1={sy} x2={W - PR} y2={sy} stroke="rgba(128,134,160,0.18)" strokeWidth="1" />
      })}

      {/* Axes */}
      <line x1={PL} y1={xAxisY} x2={W - PR - 6} y2={xAxisY} stroke="#555a72" strokeWidth="1" />
      <line x1={yAxisX} y1={H - PB} x2={yAxisX} y2={PT + 6} stroke="#555a72" strokeWidth="1" />

      {/* Axis arrows */}
      <polygon
        points={`${W - PR},${xAxisY} ${W - PR - 8},${xAxisY - 3} ${W - PR - 8},${xAxisY + 3}`}
        fill="#555a72"
      />
      <polygon
        points={`${yAxisX},${PT} ${yAxisX - 3},${PT + 8} ${yAxisX + 3},${PT + 8}`}
        fill="#555a72"
      />

      {/* Axis labels */}
      <text x={W - PR + 2} y={xAxisY + 4} fontSize="11" fill="#8b90a8" fontFamily="monospace">x</text>
      <text x={yAxisX + 4} y={PT - 2} fontSize="11" fill="#8b90a8" fontFamily="monospace">y</text>

      {/* Tick marks + numbers */}
      {xTicks.flatMap(x => {
        if (x === 0) return []
        const [sx] = toSvg(x, 0, xMin, xMax, yMin, yMax)
        return [
          <g key={`tx${x}`}>
            <line x1={sx} y1={xAxisY - 3} x2={sx} y2={xAxisY + 3} stroke="#555a72" strokeWidth="1" />
            <text x={sx} y={xAxisY + 14} textAnchor="middle" fontSize="10" fill="#8b90a8" fontFamily="monospace">{x}</text>
          </g>
        ]
      })}
      {yTicks.flatMap(y => {
        if (y === 0) return []
        const [, sy] = toSvg(0, y, xMin, xMax, yMin, yMax)
        return [
          <g key={`ty${y}`}>
            <line x1={yAxisX - 3} y1={sy} x2={yAxisX + 3} y2={sy} stroke="#555a72" strokeWidth="1" />
            <text x={yAxisX - 6} y={sy + 4} textAnchor="end" fontSize="10" fill="#8b90a8" fontFamily="monospace">{y}</text>
          </g>
        ]
      })}

      {/* Lines */}
      {lines.map((line, li) => {
        const color = line.color ?? LINE_COLORS[li % LINE_COLORS.length]
        const seg = clipLine(line.m, line.b, xMin, xMax, yMin, yMax)
        if (!seg) return null
        const [p1, p2] = seg
        const [x1, y1] = toSvg(p1[0], p1[1], xMin, xMax, yMin, yMax)
        const [x2, y2] = toSvg(p2[0], p2[1], xMin, xMax, yMin, yMax)

        // Place label at 80% along the segment from left to right
        const lx = x1 + (x2 - x1) * 0.78
        const ly = y1 + (y2 - y1) * 0.78
        // Offset label perpendicular slightly
        const dx = x2 - x1
        const dy = y2 - y1
        const len = Math.sqrt(dx * dx + dy * dy) || 1
        const nx = -dy / len  // normal vector
        const ny = dx / len
        const labelX = lx + nx * 12
        const labelY = ly + ny * 12

        return (
          <g key={li}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fill={color}
              fontFamily="monospace"
              fontWeight="600"
            >
              {line.label}
            </text>
          </g>
        )
      })}

      {/* Intersection / special points */}
      {points?.map((pt, i) => {
        const [sx, sy] = toSvg(pt.x, pt.y, xMin, xMax, yMin, yMax)
        return (
          <g key={i}>
            <circle cx={sx} cy={sy} r={4.5} fill="#f16063" />
            <text x={sx + 8} y={sy - 7} fontSize="10" fill="#f16063" fontFamily="monospace">{pt.label}</text>
          </g>
        )
      })}
    </svg>
  )
}
