import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { flyRegistry } from '../data/flyRegistry';
import { ArrowLeft, BookOpen, ShoppingBag } from 'lucide-react';

export default function FlyDetail() {
  const { flyId } = useParams<{ flyId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Determine where the user came from so we can show the right back link
  const from = searchParams.get('from'); // 'quiver' | 'hatch' | null
  const fromCat = searchParams.get('cat');   // hatch category slug
  const fromStage = searchParams.get('stage'); // hatch stage slug

  const fly = flyId ? flyRegistry[flyId] : null;

  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(
    fly?.colors?.[0] || null
  );

  const goBack = () => navigate(-1);

  if (!fly) {
    return (
      <div className="fd-page">
        <div className="container fd-not-found">
          <h1>Fly Not Found</h1>
          <p>We don't have a dedicated page for that fly yet — check back as we build out the archive.</p>
          <button onClick={goBack} className="btn-secondary mt-4">← Go Back</button>
        </div>
      </div>
    );
  }

  // Build the primary "back" path based on origin
  let backLabel = '← The Quiver';
  let backPath = '/quiver';
  if (from === 'hatch') {
    if (fromStage && fromCat) {
      backLabel = '← Back to Stage';
      backPath = `/hatch-guide/${fromCat}/${fromStage}`;
    } else if (fromCat) {
      backLabel = '← Back to Hatch Guide';
      backPath = `/hatch-guide/${fromCat}`;
    } else {
      backLabel = '← Hatch Guide';
      backPath = '/hatch-guide';
    }
  }

  return (
    <div className="fd-page">
      <div className="container fd-container">
        {/* Breadcrumb */}
        <nav className="fd-breadcrumb">
          <Link to={backPath} className="fd-back-link">{backLabel}</Link>
          {fly.hatchCategory && from !== 'hatch' && (
            <>
              <span className="fd-sep">/</span>
              <Link to={`/hatch-guide/${fly.hatchCategory}`} className="fd-crumb-link">
                Hatch Guide
              </Link>
              {fly.hatchStage && (
                <>
                  <span className="fd-sep">/</span>
                  <Link
                    to={`/hatch-guide/${fly.hatchCategory}/${fly.hatchStage}`}
                    className="fd-crumb-link"
                  >
                    {fly.hatchStage.charAt(0).toUpperCase() + fly.hatchStage.slice(1)}
                  </Link>
                </>
              )}
            </>
          )}
          <span className="fd-sep">/</span>
          <span className="fd-current">{fly.name}</span>
        </nav>

        <div className="fd-grid">
          {/* Left — placeholder image */}
          <div className="fd-image-col">
            <div className="fd-img-placeholder">🪶</div>
            <div className="fd-type-badge">{fly.type}</div>
            <div className="fd-size-badge">Sizes: {fly.sizes}</div>
          </div>

          {/* Right — fly info */}
          <div className="fd-info-col">
            <h1 className="fd-name">{fly.name}</h1>
            <p className="fd-desc">{fly.description}</p>

            <div className="fd-when-card">
              <h3>When It Works</h3>
              <p>{fly.whenItWorks}</p>
            </div>

            {/* Hatch guide connection */}
            {fly.hatchCategory && (
              <div className="fd-connects">
                <h3>Connected to the Hatch Guide</h3>
                <p>
                  This fly is part of the <strong>{fly.hatchCategory.charAt(0).toUpperCase() + fly.hatchCategory.slice(1)}</strong> section.
                  Dig deeper into lifecycle, tactics, and more patterns.
                </p>
                <Link
                  to={fly.hatchStage
                    ? `/hatch-guide/${fly.hatchCategory}/${fly.hatchStage}?from=fly&flyId=${flyId}`
                    : `/hatch-guide/${fly.hatchCategory}?from=fly&flyId=${flyId}`}
                  className="btn-secondary mt-4 inline-block"
                >
                  <BookOpen size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  View {fly.hatchCategory.charAt(0).toUpperCase() + fly.hatchCategory.slice(1)} Hatch Guide
                </Link>
              </div>
            )}

            {/* Color selection */}
            {fly.colors && (
              <div className="fd-colors-section">
                <h3 className="section-title">Color Options</h3>
                <div className="fd-color-grid">
                  {fly.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`fd-color-btn ${selectedColor?.name === color.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                    >
                      <span
                        className="color-swatch"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="color-name">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="fd-cta-row">
              {from === 'hatch' ? (
                <Link to={backPath} className="btn-primary">
                  <ArrowLeft size={15} style={{ display: 'inline', marginRight: '6px' }} />
                  Back to Hatch Guide
                </Link>
              ) : (
                <Link to="/quiver" className="btn-primary">
                  <ArrowLeft size={15} style={{ display: 'inline', marginRight: '6px' }} />
                  Back to The Quiver
                </Link>
              )}
              <Link to="/shop-packs" className="btn-secondary">
                <ShoppingBag size={14} style={{ display: 'inline', marginRight: '6px' }} />
                Shop Flies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fd-page {
          padding: 8rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .fd-not-found {
          text-align: center;
          padding: 8rem 2rem;
        }

        .fd-container {
          max-width: 960px;
          margin: 0 auto;
        }

        .fd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .fd-back-link {
          color: var(--accent-green);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .fd-back-link:hover { opacity: 0.75; }

        .fd-crumb-link {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .fd-crumb-link:hover { color: var(--accent-green); }

        .fd-sep {
          color: var(--text-secondary);
          opacity: 0.35;
        }

        .fd-current { color: var(--text-secondary); }

        .fd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .fd-grid { grid-template-columns: 260px 1fr; }
        }

        /* Left col */
        .fd-image-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .fd-img-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        .fd-type-badge {
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.25);
          color: var(--accent-green);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
        }

        .fd-size-badge {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Right col */
        .fd-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .fd-name {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.1;
        }

        .fd-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
          margin: 0;
        }

        .fd-when-card {
          background: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.15);
          border-left: 4px solid var(--accent-green);
          padding: 1.25rem 1.5rem;
          border-radius: 0 6px 6px 0;
        }

        .fd-when-card h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent-green);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .fd-when-card p {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .fd-connects {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .fd-connects h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .fd-connects p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        .fd-cta-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        .mt-4 { margin-top: 1rem; }
        .inline-block { display: inline-block; }

        /* Color Swatches */
        .fd-colors-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .section-title {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .fd-color-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .fd-color-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-secondary);
        }

        .fd-color-btn:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
        }

        .fd-color-btn.active {
          background: rgba(74, 222, 128, 0.1);
          border-color: var(--accent-green);
          color: var(--text-primary);
        }

        .color-swatch {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .color-name {
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
