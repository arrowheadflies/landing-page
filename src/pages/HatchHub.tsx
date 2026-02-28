import { Link } from 'react-router-dom'
import { hatchData } from '../data/hatchData'

function HatchHub() {
  const categories = Object.values(hatchData);

  return (
    <div className="hatch-hub-container">
      <div className="container">
        <header className="hub-header">
          <span className="brand-badge">THE KNOWLEDGE BASE</span>
          <h1 className="brand-headline">HATCH GUIDE</h1>
          <p className="brand-subheadline">
            Mastering the hatch is the difference between a good day and a great one.
            Explore our in-depth guides designed for every skill level.
          </p>
        </header>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <Link
              to={cat.id === 'midges' ? `/hatch-guide/${cat.id}` : '#'}
              key={cat.id}
              className={`category-card ${cat.id !== 'midges' ? 'upcoming' : ''}`}
            >
              <div className="card-image-bg" style={{
                backgroundImage: `url('${cat.id === 'midges' ? 'https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop'}')`
              }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                {cat.id === 'midges' && <span className="cat-badge">FEATURED</span>}
                {cat.id !== 'midges' && <span className="cat-badge upcoming-badge">COMING SOON</span>}
                <span className="cat-id">0{(index + 1)}</span>
                <h3 className="cat-title">{cat.name.split(' (')[0]}</h3>
                <p className="cat-desc">
                  {cat.id === 'midges' ? cat.overview : `The ${cat.name.split(' (')[0]} program is currently under development.`}
                </p>
                {cat.id === 'midges' && <span className="explore-btn">EXPLORE GUIDE →</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .hatch-hub-container {
          padding: 10rem 0;
          min-height: 100vh;
          background-color: #121415;
        }

        .hub-header {
           margin-bottom: 6rem;
           text-align: left;
           max-width: 800px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .hatch-hub-container {
            padding: 6rem 0;
          }
          .hub-header {
            margin-bottom: 3rem;
          }
          .category-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .category-card {
           position: relative;
           height: 480px;
           border-radius: 12px;
           overflow: hidden;
           text-decoration: none;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           padding: 2.5rem;
           border: 1px solid rgba(255, 255, 255, 0.05);
           transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
          .category-card {
            height: 320px;
            padding: 1.5rem;
          }
        }

        .category-card:hover:not(.upcoming) {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .card-image-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(0.6) brightness(0.3);
          transition: transform 0.6s ease;
          z-index: 1;
        }

        .category-card:hover:not(.upcoming) .card-image-bg {
          transform: scale(1.05);
          filter: grayscale(0.2) brightness(0.4);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #121415 15%, transparent 85%);
          z-index: 2;
        }

        .card-content {
          position: relative;
          z-index: 3;
        }

        .cat-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--color-cream);
          background-color: var(--color-deep-red);
          border: 1px solid #632426;
          padding: 0.3rem 0.6rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .upcoming-badge {
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .cat-id {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.3);
          display: block;
          margin-bottom: 0.5rem;
          letter-spacing: 0.2em;
        }

        .cat-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        @media (max-width: 768px) {
          .cat-title {
            font-size: 1.75rem;
          }
        }

        .cat-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 320px;
        }

        @media (max-width: 768px) {
          .cat-desc {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
        }

        .category-card.upcoming {
           cursor: default;
           opacity: 0.6;
        }

        .explore-btn {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #FFF;
          text-transform: uppercase;
          border-bottom: 1px solid var(--accent-green);
          padding-bottom: 0.3rem;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default HatchHub
