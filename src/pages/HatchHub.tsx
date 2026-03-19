import { Link } from 'react-router-dom'
import { hatchData } from '../data/hatchData'

const CATEGORY_IMAGES: Record<string, string> = {
  midges: 'https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop',
  mayflies: 'https://images.unsplash.com/photo-1571630435-7e5c7b0a6ecd?q=80&w=2070&auto=format&fit=crop',
  caddis: 'https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop',
  stoneflies: '',
  terrestrials: 'https://images.unsplash.com/photo-1626548307434-9e91e8aa8b44?q=80&w=2070&auto=format&fit=crop',
  streamers: 'https://images.unsplash.com/photo-1567092736706-3d49f0f3e9a8?q=80&w=2070&auto=format&fit=crop',
};

const CATEGORY_SUBTITLES: Record<string, string> = {
  midges: 'Year-round & indispensable',
  mayflies: 'The iconic hatch',
  caddis: 'Most widespread insect',
  stoneflies: 'Giants of the aquatic world',
  terrestrials: 'Land-based summer season',
  streamers: 'Trophy fish & big water',
};

function HatchHub() {
  const categories = Object.values(hatchData);

  return (
    <div className="hatch-hub-container">
      <div className="container">
        <header className="hub-header">
          <span className="brand-badge">THE KNOWLEDGE BASE</span>
          <h1 className="brand-headline">HATCH GUIDE</h1>
          <p className="brand-subheadline">
            Every hatch from midges to salmonflies — broken down by life stage, confidence rating, and exactly what to tie on.
            Tap any category to get tactical.
          </p>
        </header>

        <div className="hub-top-cta">
          <div>
            <strong>Not sure what to throw?</strong>
            <span> The Quiver matches your location and month to the exact right patterns.</span>
          </div>
          <Link to="/quiver" className="btn-primary hub-cta-btn">Open The Quiver</Link>
        </div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <Link
              to={`/hatch-guide/${cat.id}`}
              key={cat.id}
              className="category-card"
            >
              <div
                className="card-image-bg"
                style={{ backgroundImage: `url('${CATEGORY_IMAGES[cat.id] || CATEGORY_IMAGES.midges}')` }}
              />
              <div className="card-overlay" />
              <div className="card-content">
                <div className="card-top-row">
                  <span className="cat-badge">GUIDE</span>
                  <span className="cat-stage-count">{cat.stages.length} stages</span>
                </div>
                <span className="cat-id">0{index + 1}</span>
                <h3 className="cat-title">{cat.name.split(' (')[0]}</h3>
                <p className="cat-subtitle">{CATEGORY_SUBTITLES[cat.id]}</p>
                <p className="cat-desc">{cat.overview.slice(0, 100)}…</p>
                <span className="explore-btn">EXPLORE GUIDE →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="hub-footer-cta" style={{ display: 'none' }}>
          <h3>Don't know where to start?</h3>
          <p>Let The Quiver match your location and month to the right insects — then come back here to go deeper.</p>
          <Link to="/quiver" className="btn-primary">Open The Quiver</Link>
        </div>
      </div>

      <style>{`
        .hatch-hub-container {
          padding: 10rem 0 8rem;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .hub-header {
          margin-bottom: 2rem;
          text-align: left;
          max-width: 720px;
        }

        .hub-top-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 1.25rem 1.75rem;
          margin-bottom: 3rem;
        }

        .hub-top-cta strong { color: var(--text-primary); }
        .hub-top-cta span { color: var(--text-secondary); font-size: 0.92rem; }

        .hub-cta-btn { flex-shrink: 0; white-space: nowrap; }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        @media (max-width: 768px) {
          .hatch-hub-container { padding: 6rem 0; }
          .hub-header { margin-bottom: 3rem; }
          .category-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }

        .category-card {
          position: relative;
          height: 440px;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          border: 1px solid var(--border-default);
          transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
          .category-card { height: 300px; padding: 1.5rem; }
        }

        .category-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.2);
        }

        .card-image-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(0.5) brightness(0.3);
          transition: transform 0.5s ease, filter 0.4s ease;
          z-index: 1;
        }

        .category-card:hover .card-image-bg {
          transform: scale(1.04);
          filter: grayscale(0.1) brightness(0.4);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg-primary) 15%, rgba(0,0,0,0.2) 85%);
          z-index: 2;
        }

        .card-content {
          position: relative;
          z-index: 3;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .cat-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: var(--color-cream);
          background-color: var(--color-deep-red);
          padding: 0.25rem 0.6rem;
          border-radius: 3px;
        }

        .cat-stage-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
          letter-spacing: 0.08em;
        }

        .cat-id {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.4rem;
          letter-spacing: 0.2em;
        }

        .cat-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .cat-title { font-size: 1.6rem; }
        }

        .cat-subtitle {
          font-size: 0.78rem;
          color: var(--accent-green);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .cat-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.55;
          margin-bottom: 1.25rem;
          max-width: 320px;
        }

        @media (max-width: 768px) {
          .cat-desc { display: none; }
        }

        .explore-btn {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 0.2rem;
          display: inline-block;
          transition: border-color 0.2s;
        }

        .category-card:hover .explore-btn {
          border-color: var(--accent-green);
          color: var(--accent-green);
        }

        .hub-footer-cta {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .hub-footer-cta h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .hub-footer-cta p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default HatchHub
