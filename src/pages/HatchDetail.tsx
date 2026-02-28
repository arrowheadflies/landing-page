import { useParams, Link } from 'react-router-dom'
import { Bug, Droplets, ArrowUp, Wind, ArrowLeft, ChevronRight } from 'lucide-react'
import { hatchData } from '../data/hatchData'

function HatchDetail() {
  const { category, stageId } = useParams();
  const data = category ? hatchData[category] : null;

  if (!data) {
    return (
      <div className="error-view container">
        <h2>Category Not Found</h2>
        <Link to="/hatch-guide" className="back-link">BACK TO HATCH GUIDE</Link>
      </div>
    );
  }

  // Find the current stage if stageId is present
  const currentStage = stageId ? data.stages.find(s => s.id === stageId) : null;

  return (
    <div className="hatch-detail-container">
      <header className="guide-header">
        <div className="container">
          <div className="header-nav">
            <Link to={stageId ? `/hatch-guide/${category}` : "/hatch-guide"} className="back-link">
              <ArrowLeft size={16} /> {stageId ? `BACK TO ${data.name.toUpperCase()}` : "BACK TO HATCH GUIDE"}
            </Link>
          </div>
          <div className="header-content-main">
            <span className="brand-badge">
              {stageId ? `STAGED INFORMATION: ${currentStage?.name.toUpperCase()}` : `HATCH GUIDE: ${data.id.toUpperCase()}`}
            </span>
            <h1 className="brand-headline">{currentStage ? currentStage.name : data.name}</h1>
            <p className="brand-subheadline">
              {currentStage ? currentStage.description : data.overview}
            </p>
          </div>
        </div>
      </header>

      {!stageId ? (
        <>
          <div className="stages-nav container">
            {data.stages.map((stage, index) => (
              <div key={stage.id} className="nav-group">
                <Link to={`/hatch-guide/${category}/${stage.id}`} className="stage-nav-item">
                  {stage.name.toLowerCase().includes('larva') && <Bug size={20} />}
                  {stage.name.toLowerCase().includes('pupa') && <Droplets size={20} />}
                  {stage.name.toLowerCase().includes('emerger') && <ArrowUp size={20} />}
                  {stage.name.toLowerCase().includes('adult') && <Wind size={20} />}
                  <span>{stage.name}</span>
                </Link>
                {index < data.stages.length - 1 && (
                  <ChevronRight className="nav-arrow" size={20} strokeWidth={3} />
                )}
              </div>
            ))}
          </div>

          <div className="category-overview container">
            <div className="overview-grid">
              <div className="overview-image">
                <div className="tactical-frame">
                  <img src="/brand/logo-icon.jpg" alt="Tactical" className="corner-logo" />
                  <div className="frame-data">CATEGORY: {data.id.toUpperCase()}</div>
                </div>
              </div>
              <div className="overview-text">
                <h3>Strategic Importance</h3>
                <p>{data.overview}</p>
                <div className="stages-preview">
                  <h4>Lifecycle Stages</h4>
                  <p>This insect undergoes {data.stages.length} distinct stages. Click above to view specific patterns and tactical approaches for each.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="stage-detail container">
          <div className="stage-content-layout">
            <div className="stage-tactics">
              <div className="tactics-card">
                <div className="card-header">
                  <div className="icon-badge">
                    {currentStage?.name.toLowerCase().includes('larva') && <Bug size={24} />}
                    {currentStage?.name.toLowerCase().includes('pupa') && <Droplets size={24} />}
                    {currentStage?.name.toLowerCase().includes('emerger') && <ArrowUp size={24} />}
                    {currentStage?.name.toLowerCase().includes('adult') && <Wind size={24} />}
                  </div>
                  <h3>Tactical Approach</h3>
                </div>
                <ul className="tactics-list">
                  {currentStage?.tactics.map((tactic, i) => (
                    <li key={i}>{tactic}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="stage-patterns">
              <div className="patterns-header">
                <h2>INVENTORY: RECOMMENDED PATTERNS</h2>
                <p>Curated flies from our technical selection for the {currentStage?.name.toLowerCase()}.</p>
              </div>

              <div className="patterns-grid">
                {currentStage?.flies.map((fly) => (
                  <div key={fly.id} className="pattern-card">
                    <div className="pattern-id">PATTERN ID: {fly.id.toUpperCase()}</div>
                    <div className="pattern-info">
                      <h3>{fly.name}</h3>
                      <span className="pattern-sizes">SIZES: {fly.sizes}</span>
                      <p>{fly.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hatch-detail-container {
          padding-top: 80px;
          background-color: #0A0B0C;
          min-height: 100vh;
        }

        .guide-header {
          padding: 6rem 0 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: linear-gradient(to bottom, #121415, #0A0B0C);
        }

        .header-nav {
          margin-bottom: 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          transition: all 0.2s;
        }

        .back-link:hover {
          color: var(--accent-green);
          transform: translateX(-4px);
        }

        .header-content-main {
          max-width: 800px;
        }

        .brand-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-green);
          letter-spacing: 0.2em;
          background: rgba(74, 222, 128, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .brand-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          color: #FFF;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .brand-subheadline {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          opacity: 0.8;
        }

        .stages-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 1.5rem 0;
          background: rgba(10, 11, 12, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 80px;
          z-index: 100;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-arrow {
          color: rgba(255, 255, 255, 0.1);
        }

        .stage-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
        }

        .stage-nav-item:hover {
          color: var(--accent-green);
          transform: translateY(-2px);
        }

        .category-overview {
          padding: 5rem 0;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .overview-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .tactical-frame {
          aspect-ratio: 4/3;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corner-logo {
          width: 64px;
          opacity: 0.1;
        }

        .frame-data {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.2);
        }

        .overview-text h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 1.5rem;
        }

        .overview-text p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .stages-preview h4 {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .stages-preview p {
          font-size: 0.9rem;
          opacity: 0.6;
        }

        .stage-detail {
          padding: 5rem 0;
        }

        .stage-content-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 992px) {
          .stage-content-layout {
            grid-template-columns: 350px 1fr;
          }
        }

        .tactics-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          border-radius: 16px;
          position: sticky;
          top: 120px;
        }

        .icon-badge {
          width: 52px;
          height: 52px;
          background: rgba(74, 222, 128, 0.1);
          color: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .tactics-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFF;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
        }

        .tactics-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tactics-list li {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 1.25rem;
          opacity: 0.9;
        }

        .tactics-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: 900;
        }

        .patterns-header {
          margin-bottom: 3rem;
        }

        .patterns-header h2 {
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.5rem;
        }

        .patterns-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .patterns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .pattern-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .pattern-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
        }

        .pattern-id {
          font-size: 0.6rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.2);
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
        }

        .pattern-info h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .pattern-sizes {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--accent-green);
          background: rgba(74, 222, 128, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          margin-bottom: 1.25rem;
        }

        .pattern-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default HatchDetail;
