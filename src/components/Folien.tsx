import { folienGruppen } from '../data/folien'
import type { FolienDatei } from '../data/folien'

// Baut die URL ins public-Verzeichnis. Jedes Pfadsegment wird einzeln
// encodeURIComponent-codiert (wegen Leerzeichen, Umlauten und Klammern in den
// Ordner-/Dateinamen), die '/' bleiben als Trenner erhalten.
function fileUrl(path: string): string {
  return import.meta.env.BASE_URL + path.split('/').map(encodeURIComponent).join('/')
}

const TYP_LABEL: Record<FolienDatei['typ'], string> = {
  pdf: 'PDF',
  video: 'Video',
  bild: 'Bild',
  sonstig: 'Datei',
}

function Datei({ datei }: { datei: FolienDatei }) {
  const url = fileUrl(datei.path)

  if (datei.typ === 'video') {
    return (
      <div className="folien-item folien-item--video">
        <span className="folien-badge folien-badge--video">{TYP_LABEL.video}</span>
        <span className="folien-name">{datei.label}</span>
        {/* eslint-disable-next-line react-doctor/media-has-caption -- aufgezeichnete Vorlesungsvideos ohne verfügbare Untertiteldatei */}
        <video src={url} controls preload="none" aria-label={datei.label} style={{ maxWidth: '100%' }} />
      </div>
    )
  }

  return (
    <div className="folien-item">
      <span className={`folien-badge folien-badge--${datei.typ}`}>{TYP_LABEL[datei.typ]}</span>
      <a href={url} target="_blank" rel="noopener noreferrer" className="folien-link">
        {datei.label}
      </a>
    </div>
  )
}

export default function Folien() {
  return (
    <div>
      <div className="section-header">
        <h2>Folien &amp; Material</h2>
        <p>Vorlesungsfolien, Mitschriften, Videos und weitere Kursmaterialien nach Thema.</p>
      </div>

      {folienGruppen.map(gruppe => (
        <div key={gruppe.thema} className="card">
          <h3 className="folien-gruppe-titel">{gruppe.thema}</h3>
          <div className="folien-liste">
            {gruppe.dateien.map(datei => (
              <Datei key={datei.path} datei={datei} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
