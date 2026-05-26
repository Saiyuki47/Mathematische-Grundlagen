interface FracProps {
  n: string
  d: string
}

export default function Frac({ n, d }: FracProps) {
  return (
    <span className="fraction">
      <span className="fraction-num">{n}</span>
      <span className="fraction-bar" />
      <span className="fraction-den">{d}</span>
    </span>
  )
}
