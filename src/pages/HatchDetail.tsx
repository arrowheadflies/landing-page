import { useEffect, useRef } from 'react'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { Bug, Droplets, ArrowUp, Wind, ArrowLeft, ChevronRight } from 'lucide-react'
import { hatchData } from '../data/hatchData'

function HatchDetail() {
  const { category, flyId } = useParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const data = category ? hatchData[category] : null;
  const flyRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!data) {
      navigate('/hatch-guide');
      return;
    }

    // Handle scroll to flyId or Hash
    const targetId = flyId || (hash ? hash.substring(1) : null);
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId) || flyRefs.current[targetId];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [category, flyId, hash, data, navigate]);

  if (!data) return null;

  return (
    <div className="hatch-detail-container">
      <header className="guide-header">
        <div className="container">
          <div className="header-nav">
            <Link to="/hatch-guide" className="back-link">
              <ArrowLeft size={16} /> BACK TO HATCH GUIDE
            </Link>
          </div>
          <div className="header-content-main">
            <span className="brand-badge">HATCH GUIDE: {data.id.toUpperCase()}</span>
            <h1 className="brand-headline">{data.name}</h1>
            <p className="brand-subheadline">{data.overview}</p>
          </div>
        </div>
      </header>

      <div className="stages-nav container">
        {data.stages.map((stage, index) => (
          <div key={stage.id} className="nav-group">
            <a href={`#${stage.id}`} className="stage-nav-item">
              {stage.name.toLowerCase().includes('larva') && <Bug size={20} />}
              {stage.name.toLowerCase().includes('pupa') && <Droplets size={20} />}
              {stage.name.toLowerCase().includes('emerger') && <ArrowUp size={20} />}
              {stage.name.toLowerCase().includes('adult') && <Wind size={20} />}
              <span>{stage.name}</span>
            </a>
            {index < data.stages.length - 1 && (
              <ChevronRight className="nav-arrow" size={20} strokeWidth={3} />
            )}
          </div>
        ))}
      </div>

      <div className="stages-container">
        {data.stages.map((stage) => (
          <section id={stage.id} key={stage.id} className="stage-section">
            <div className="container tight-stage">
              <div className="stage-info">
                <div className="stage-header-with-icon">
                  {stage.name.toLowerCase().includes('larva') && <Bug className="stage-icon" size={32} />}
                  {stage.name.toLowerCase().includes('pupa') && <Droplets className="stage-icon" size={32} />}
                  {stage.name.toLowerCase().includes('emerger') && <ArrowUp className="stage-icon" size={32} />}
                  {stage.name.toLowerCase().includes('adult') && <Wind className="stage-icon" size={32} />}
                  <h2 className="stage-name">{stage.name}</h2>
                </div>
                <p className="stage-desc">{stage.description}</p>

                <div className="tactics-content">
                  <div className="tactics-box">
                    <h4>Tactical Approach</h4>
                    <ul>
                      {stage.tactics.map((tactic, i) => (
                        <li key={i}>{tactic}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flies-list">
                    <h4>Recommended Patterns</h4>
                    <div className="flies-grid-compact">
                      {stage.flies.map((fly) => (
                        <div
                          id={fly.id}
                          key={fly.id}
                          ref={el => { flyRefs.current[fly.id] = el; }}
                          className={`fly-item ${flyId === fly.id ? 'focused-fly' : ''}`}
                        >
                          <span className="fly-name">{fly.name}</span>
                          <span className="fly-sizes">Typical Sizes: {fly.sizes}</span>
                          <p className="fly-desc">{fly.description}</p>
                          {flyId === fly.id && <div className="focus-indicator">Currently Viewing</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .hatch-detail-container {
          padding-top: 80px;
          background-color: #121415;
        }

        .guide-header {
          padding: 8rem 0 4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .header-nav {
          margin-bottom: 3rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          transition: all 0.2s;
          padding: 0.5rem 0;
        }

        .back-link:hover {
          color: var(--accent-green);
          transform: translateX(-4px);
        }

        .header-content-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stages-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 80px;
          background: rgba(18, 20, 21, 0.95);
          backdrop-filter: blur(12px);
          z-index: 100;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .stages-nav::-webkit-scrollbar {
          display: none;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-arrow {
          color: rgba(255, 255, 255, 0.1);
        }

        .stage-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .stage-nav-item:hover {
          color: var(--accent-green);
        }

        .stage-section {
          padding: 4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tight-stage {
          max-width: 900px;
        }

        .stage-header-with-icon {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stage-icon {
           color: var(--accent-green);
           opacity: 0.8;
        }

        .stage-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #FFF;
          margin: 0;
        }

        .stage-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .tactics-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .tactics-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .tactics-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
        }

        .tactics-box h4 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          margin-bottom: 1.25rem;
          color: var(--accent-green);
        }

        .tactics-box ul {
          list-style: none;
          padding: 0;
        }

        .tactics-box li {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.95rem;
        }

        .tactics-box li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-green);
        }

        .flies-list h4 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 1.25rem;
        }

        .flies-grid-compact {
          display: grid;
          gap: 1rem;
        }

        .fly-item {
          padding: 1.25rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.01);
          transition: all 0.3s ease;
          position: relative;
        }

        .fly-name {
          font-weight: 700;
          display: block;
          font-size: 1rem;
          margin-bottom: 0.2rem;
          color: #FFF;
        }

        .fly-sizes {
          font-size: 0.75rem;
          color: var(--accent-green);
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .fly-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .focused-fly {
          border-color: var(--accent-green);
          background: rgba(74, 222, 128, 0.05);
        }

        .focus-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.2rem 0.5rem;
          background: var(--accent-green);
          color: #000;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}

export default HatchDetail
