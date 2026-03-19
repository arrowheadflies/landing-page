import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { midgeData } from '../data/midgeData'

function MidgeGuide() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="midge-guide-container">
      <header className="guide-header">
        <div className="container">
          <div className="header-badge">HATCH GUIDE: THE MIDGE PROGRAM</div>
          <h1 className="guide-title">{midgeData.name}</h1>
          <p className="guide-intro">{midgeData.overview}</p>
        </div>
      </header>

      <div className="stages-container">
        {midgeData.stages.map((stage) => (
          <section id={stage.id} key={stage.id} className="stage-section">
            <div className="container stage-grid">
              <div className="stage-info">
                <h2 className="stage-name">{stage.name}</h2>
                <p className="stage-desc">{stage.description}</p>

                <div className="tactics-box">
                  <h4>Tactical Approach</h4>
                  <ul>
                    {stage.tactics.map((tactic, i) => (
                      <li key={i}>{tactic}</li>
                    ))}
                  </ul>
                </div>

                <div className="flies-grid">
                  <h4>Recommended Flies</h4>
                  {stage.flies.map((fly, i) => (
                    <div key={i} className="fly-item">
                      <span className="fly-name">{fly.name}</span>
                      <span className="fly-sizes">Sized {fly.sizes}</span>
                      <p className="fly-desc">{fly.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stage-visual">
                <div className="stage-image-wrapper">
                  <img src={stage.image} alt={stage.name} className="stage-image" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .midge-guide-container {
          padding-top: 80px;
          background-color: var(--bg-primary);
        }

        .guide-header {
          padding: 8rem 0 6rem;
          text-align: center;
          border-bottom: 1px solid var(--border-default);
        }

        .header-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          color: var(--text-accent);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
          border-radius: 4px;
        }

        .guide-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .guide-intro {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .stage-section {
          padding: 10rem 0;
          border-bottom: 1px solid var(--border-default);
        }

        .stage-section:nth-child(even) .stage-grid {
          direction: rtl;
        }

        .stage-section:nth-child(even) .stage-info {
          direction: ltr;
        }

        .stage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .stage-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }

        .stage-name {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .stage-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .tactics-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          padding: 2.5rem;
          border-radius: 16px;
          margin-bottom: 3rem;
        }

        .tactics-box h4 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          color: var(--text-accent);
        }

        .tactics-box ul {
          list-style: none;
          padding: 0;
        }

        .tactics-box li {
          margin-bottom: 1rem;
          color: var(--text-primary);
          padding-left: 1.5rem;
          position: relative;
        }

        .tactics-box li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--text-accent);
        }

        .flies-grid {
          display: grid;
          gap: 2rem;
        }

        .flies-grid h4 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          color: var(--text-secondary);
          grid-column: 1 / -1;
        }

        .fly-item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-default);
        }

        .fly-name {
          font-weight: 700;
          display: block;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .fly-sizes {
          font-size: 0.8rem;
          color: var(--text-accent);
          font-weight: 600;
          display: block;
          margin-bottom: 0.75rem;
        }

        .fly-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .stage-visual {
          position: relative;
        }

        .stage-image-wrapper {
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4/5;
          position: relative;
        }

        .stage-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.2);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 60%, var(--bg-primary) 100%);
        }
      `}</style>
    </div>
  )
}

export default MidgeGuide
