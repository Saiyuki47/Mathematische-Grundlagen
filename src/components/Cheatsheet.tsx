import { cheatCards } from '../data/cheatsheet'

export default function Cheatsheet() {
  return (
    <div>
      <div className="section-header">
        <h2>Formelsammlung</h2>
        <p>Die wichtigsten Rechenregeln und Formeln auf einen Blick.</p>
      </div>
      <div className="cheat-grid">
        {cheatCards.map(card => (
          <div key={card.title} className="cheat-card">
            <h3>{card.title}</h3>
            <pre className="cheat-code">{card.content}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
