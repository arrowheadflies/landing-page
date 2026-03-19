import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Search, ChevronRight, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react'
import { hatchData } from '../data/hatchData'
import { slugify } from '../data/flyRegistry'

function HatchDetail() {
  const { category, stageId } = useParams();
  const data = category ? hatchData[category] : null;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({});

  const toggleStage = (id: string) => {
    setExpandedStages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!data) {
    return (
      <div className="hd-error container">
        <h2>Category Not Found</h2>
        <Link to="/hatch-guide" className="btn-secondary mt-4 inline-block">← Back to Hatch Guide</Link>
      </div>
    );
  }

  const currentStage = stageId ? data.stages.find(s => s.id === stageId) : null;

  // ─── STAGE DETAIL VIEW ─────────────────────────────────────────────────────
  if (stageId && currentStage) {
    return (
      <div className="hd-page">
        {/* Sticky nav */}
        <div className="hd-sticky-nav">
          <div className="container hd-sticky-inner">
            <nav className="hd-breadcrumb hd-breadcrumb-sticky">
              <Link to="/hatch-guide">Hatch Guide</Link>
              <ChevronRight size={12} />
              <Link to={`/hatch-guide/${category}`}>{data.name.split(' (')[0]}</Link>
              <ChevronRight size={12} />
              <span>{currentStage.name}</span>
            </nav>
            <div className="hd-sticky-actions">
              <Link to={`/hatch-guide/${category}`} className="hd-sticky-back">
                ← All Stages
              </Link>
              <Link to="/hatch-guide" className="hd-sticky-back">
                Hatch Guide
              </Link>
              <Link to="/quiver" className="hd-sticky-back hd-sticky-quiver">
                The Quiver
              </Link>
            </div>
          </div>
        </div>
        <div className="hd-header hd-header-pushed">
          <div className="container">
            <nav className="hd-breadcrumb">
              <Link to="/hatch-guide">Hatch Guide</Link>
              <ChevronRight size={12} />
              <Link to={`/hatch-guide/${category}`}>{data.name.split(' (')[0]}</Link>
              <ChevronRight size={12} />
              <span>{currentStage.name}</span>
            </nav>
            <span className="hd-eyebrow">{data.name.split(' (')[0]} — Life Stage</span>
            <h1 className="hd-title">{currentStage.name}</h1>
            <p className="hd-desc">{currentStage.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="container hd-stage-grid">
          {/* Left col — tactics + actionable */}
          <div className="hd-left">
            <div className="hd-card">
              <h3 className="hd-card-label">Tactical Approach</h3>
              <ul className="hd-tactics-list">
                {currentStage.tactics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="hd-card">
              <div className="hd-actionable-row">
                <h3 className="hd-card-label">Confidence Rating</h3>
                <div className="hd-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < currentStage.confidenceRating ? 'star-on' : 'star-off'}>★</span>
                  ))}
                </div>
              </div>

              <h3 className="hd-card-label mt-6">When It Works</h3>
              <p className="hd-body-text">{currentStage.whenItWorks}</p>

              <h3 className="hd-card-label mt-6">Rig Suggestion</h3>
              <p className="hd-rig-text">{currentStage.rigSuggestion}</p>
            </div>

            <div className="hd-cta-stack">
              <div className="hd-cta-block">
                <p className="hd-cta-label">Not sure what to throw today?</p>
                <Link to="/find-your-fly" className="btn-primary w-full text-center">Open The Quiver</Link>
              </div>
              <div className="hd-cta-block">
                <p className="hd-cta-label">Need these flies in your box?</p>
                <Link to="/shop-packs" className="btn-secondary w-full text-center">Shop Confidence Packs</Link>
              </div>
            </div>
          </div>

          {/* Right col — fly patterns */}
          <div className="hd-right">
            <h2 className="hd-patterns-heading">Recommended Patterns</h2>
            <p className="hd-patterns-sub">Tap any fly for the full breakdown and shop link.</p>
            <div className="hd-patterns-list">
              {currentStage.flies.map(fly => (
                <Link key={fly.id} to={`/fly/${slugify(fly.name)}?from=hatch&cat=${category}&stage=${stageId}`} className="hd-fly-row">
                  <div className="hd-fly-main">
                    <span className="hd-fly-name">{fly.name}</span>
                    <span className="hd-fly-desc">{fly.description}</span>
                  </div>
                  <div className="hd-fly-right">
                    <span className="hd-fly-sizes">#{fly.sizes}</span>
                    <ChevronRight size={14} className="hd-fly-arrow" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="hd-back-link">
              <Link to={`/hatch-guide/${category}`}>
                <ArrowLeft size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Back to {data.name.split(' (')[0]} overview
              </Link>
            </div>
          </div>
        </div>

        <style>{hatchDetailStyles}</style>
      </div>
    );
  }

  // ─── CATEGORY OVERVIEW (directory) ─────────────────────────────────────────
  const allFlies = data.stages.flatMap(s => s.flies);
  const filteredFlies = searchQuery
    ? allFlies.filter(f =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : null;

  return (
    <div className="hd-page">
      {/* Sticky nav */}
      <div className="hd-sticky-nav">
        <div className="container hd-sticky-inner">
          <nav className="hd-breadcrumb hd-breadcrumb-sticky">
            <Link to="/hatch-guide">Hatch Guide</Link>
            <ChevronRight size={12} />
            <span>{data.name.split(' (')[0]}</span>
          </nav>
          <div className="hd-sticky-actions">
            <Link to="/hatch-guide" className="hd-sticky-back">
              ← All Categories
            </Link>
            <Link to="/quiver" className="hd-sticky-back hd-sticky-quiver">
              The Quiver
            </Link>
          </div>
        </div>
      </div>
      <div className="hd-header hd-header-pushed">
        <div className="container">
          <nav className="hd-breadcrumb">
            <Link to="/hatch-guide">Hatch Guide</Link>
            <ChevronRight size={12} />
            <span>{data.name.split(' (')[0]}</span>
          </nav>
          <span className="hd-eyebrow">Hatch Guide</span>
          <h1 className="hd-title">{data.name.split(' (')[0]}</h1>
          <p className="hd-desc hd-desc-wide">{data.overview}</p>
        </div>
      </div>

      <div className="container hd-overview-body">
        {/* Search bar */}
        <div className="hd-search-bar">
          <Search size={16} className="hd-search-icon" />
          <input
            type="text"
            placeholder={`Search ${data.name.split(' (')[0].toLowerCase()} patterns...`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="hd-search-input"
          />
          {searchQuery && (
            <button className="hd-search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* Search results */}
        {searchQuery && filteredFlies && (
          <div className="hd-search-results">
            <p className="hd-search-count">{filteredFlies.length} pattern{filteredFlies.length !== 1 ? 's' : ''} found</p>
            <div className="hd-patterns-list">
              {filteredFlies.map(fly => (
                <Link key={fly.id} to={`/fly/${slugify(fly.name)}?from=hatch&cat=${category}`} className="hd-fly-row">
                  <div className="hd-fly-main">
                    <span className="hd-fly-name">{fly.name}</span>
                    <span className="hd-fly-desc">{fly.description}</span>
                  </div>
                  <div className="hd-fly-right">
                    <span className="hd-fly-sizes">#{fly.sizes}</span>
                    <ChevronRight size={14} className="hd-fly-arrow" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Stage sections */}
        {!searchQuery && (
          <div className="hd-stages">
            {data.stages.map((stage, idx) => {
              const isOpen = expandedStages[stage.id] ?? true;
              return (
                <div key={stage.id} className="hd-stage-block">
                  {/* Stage header row */}
                  <div className="hd-stage-header">
                    <button
                      className="hd-stage-toggle"
                      onClick={() => toggleStage(stage.id)}
                    >
                      <span className="hd-stage-num">0{idx + 1}</span>
                      <span className="hd-stage-name">{stage.name}</span>
                      <span className="hd-stage-count">{stage.flies.length} patterns</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <Link
                      to={`/hatch-guide/${category}/${stage.id}`}
                      className="hd-stage-tactics-link"
                    >
                      Tactics & Timing <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Stage meta strip */}
                  {isOpen && (
                    <div className="hd-stage-body">
                      <div className="hd-stage-meta">
                        <div className="hd-meta-pill">
                          <span className="hd-meta-label">Confidence</span>
                          <span className="hd-meta-stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className={i < stage.confidenceRating ? 'star-on' : 'star-off'}>★</span>
                            ))}
                          </span>
                        </div>
                        <div className="hd-meta-pill">
                          <span className="hd-meta-label">When</span>
                          <span className="hd-meta-text">{stage.whenItWorks}</span>
                        </div>
                      </div>

                      {/* Fly list */}
                      <div className="hd-patterns-list">
                        {stage.flies.map(fly => (
                          <Link key={fly.id} to={`/fly/${slugify(fly.name)}?from=hatch&cat=${category}&stage=${stage.id}`} className="hd-fly-row">
                            <div className="hd-fly-main">
                              <span className="hd-fly-name">{fly.name}</span>
                              <span className="hd-fly-desc">{fly.description}</span>
                            </div>
                            <div className="hd-fly-right">
                              <span className="hd-fly-sizes">#{fly.sizes}</span>
                              <ChevronRight size={14} className="hd-fly-arrow" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="hd-bottom-cta">
          <div className="hd-bottom-cta-inner">
            <ShoppingBag size={20} className="hd-cta-icon" />
            <div>
              <h3>Need these flies?</h3>
              <p>Get a pack curated for exactly these situations, or order individual patterns hand-tied to order.</p>
            </div>
            <div className="hd-bottom-cta-btns">
              <Link to="/shop-packs" className="btn-primary">Shop Packs</Link>
              <Link to="/find-your-fly" className="btn-secondary">The Quiver</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{hatchDetailStyles}</style>
    </div>
  );
}

const hatchDetailStyles = `
  .hd-page {
    padding-top: 80px;
    background: var(--bg-primary);
    min-height: 100vh;
  }

  /* Sticky nav */
  .hd-sticky-nav {
    position: sticky;
    top: 60px; /* sits just below the global navbar */
    z-index: 90;
    background: rgba(10, 11, 12, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .hd-sticky-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.65rem;
    padding-bottom: 0.65rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hd-breadcrumb-sticky {
    margin-bottom: 0 !important;
  }

  .hd-sticky-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .hd-sticky-back {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    transition: all 0.15s;
    white-space: nowrap;
  }

  .hd-sticky-back:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.25); }

  .hd-sticky-quiver {
    color: var(--accent-green);
    border-color: rgba(74, 222, 128, 0.25);
  }

  .hd-sticky-quiver:hover {
    color: var(--accent-green);
    background: rgba(74, 222, 128, 0.08);
    border-color: rgba(74, 222, 128, 0.4);
  }

  /* Push header down below sticky nav */
  .hd-header-pushed {
    padding-top: 2.5rem !important;
  }

  .hd-error {
    padding: 8rem 2rem;
    text-align: center;
  }

  /* Header */
  .hd-header {
    padding: 4rem 0 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .hd-breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .hd-breadcrumb a {
    color: var(--accent-green);
    text-decoration: none;
  }

  .hd-breadcrumb a:hover { text-decoration: underline; }

  .hd-breadcrumb svg { color: var(--text-secondary); opacity: 0.4; flex-shrink: 0; }

  .hd-eyebrow {
    display: block;
    font-size: 0.73rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent-green);
    margin-bottom: 0.75rem;
  }

  .hd-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hd-desc {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 680px;
    margin: 0;
  }

  /* Overview layout */
  .hd-overview-body {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  /* Search */
  .hd-search-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 0.875rem 1.25rem;
    max-width: 560px;
    margin-bottom: 2.5rem;
    transition: border-color 0.2s;
  }

  .hd-search-bar:focus-within { border-color: var(--accent-green); }

  .hd-search-icon { color: var(--text-secondary); flex-shrink: 0; }

  .hd-search-input {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 1rem;
    outline: none;
    flex: 1;
    font-family: inherit;
  }

  .hd-search-input::placeholder { color: var(--text-secondary); opacity: 0.5; }

  .hd-search-clear {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }

  .hd-search-results { margin-bottom: 3rem; }

  .hd-search-count {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  /* Stages */
  .hd-stages {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .hd-stage-block {
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    overflow: hidden;
  }

  .hd-stage-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    background: rgba(255,255,255,0.02);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    flex-wrap: wrap;
  }

  .hd-stage-toggle {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: inherit;
    cursor: pointer;
    text-align: left;
    flex: 1;
    min-width: 0;
    transition: background 0.15s;
  }

  .hd-stage-toggle:hover { background: rgba(255,255,255,0.03); }

  .hd-stage-num {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--text-secondary);
    letter-spacing: 0.12em;
    flex-shrink: 0;
  }

  .hd-stage-name {
    font-size: 1rem;
    font-weight: 700;
    flex: 1;
    min-width: 0;
  }

  .hd-stage-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .hd-stage-tactics-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--accent-green);
    text-decoration: none;
    border-left: 1px solid rgba(255,255,255,0.07);
    white-space: nowrap;
    transition: opacity 0.15s;
    flex-shrink: 0;
  }

  .hd-stage-tactics-link:hover { opacity: 0.75; }

  .hd-stage-body { padding: 1.5rem; }

  .hd-stage-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .hd-meta-pill {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .hd-meta-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    font-weight: 600;
    padding-top: 2px;
    flex-shrink: 0;
  }

  .hd-meta-stars { display: flex; gap: 2px; }

  .hd-meta-text {
    font-size: 0.85rem;
    color: var(--text-primary);
    line-height: 1.4;
    max-width: 400px;
  }

  /* Fly rows — used in both views */
  .hd-patterns-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hd-fly-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.875rem 1rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.15s;
  }

  .hd-fly-row:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.12);
    transform: translateX(3px);
  }

  .hd-fly-main {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
  }

  .hd-fly-name {
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .hd-fly-desc {
    color: var(--text-secondary);
    font-size: 0.8rem;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hd-fly-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .hd-fly-sizes {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-green);
    white-space: nowrap;
  }

  .hd-fly-arrow { color: var(--text-secondary); opacity: 0.5; }

  .hd-fly-row:hover .hd-fly-arrow { color: var(--accent-green); opacity: 1; }

  /* Bottom CTA */
  .hd-bottom-cta {
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 3rem;
  }

  .hd-bottom-cta-inner {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 2rem;
  }

  .hd-cta-icon { color: var(--accent-green); flex-shrink: 0; }

  .hd-bottom-cta-inner h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .hd-bottom-cta-inner p {
    color: var(--text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
    margin: 0;
    max-width: 400px;
  }

  .hd-bottom-cta-btns {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;
    margin-left: auto;
    flex-wrap: wrap;
  }

  /* Stage detail layout */
  .hd-stage-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 900px) {
    .hd-stage-grid { grid-template-columns: 340px 1fr; }
  }

  .hd-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hd-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 1.5rem;
  }

  .hd-card-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text-secondary);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .hd-actionable-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .hd-actionable-row .hd-card-label { margin-bottom: 0; }

  .mt-6 { margin-top: 1.5rem; }

  .hd-stars { display: flex; gap: 2px; font-size: 1.1rem; }

  .star-on { color: var(--accent-green); }
  .star-off { color: rgba(255,255,255,0.1); }

  .hd-body-text {
    color: var(--text-primary);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
  }

  .hd-rig-text {
    color: var(--text-primary);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
    padding: 0.75rem 1rem;
    background: rgba(74, 222, 128, 0.05);
    border-left: 3px solid rgba(74, 222, 128, 0.3);
    border-radius: 0 4px 4px 0;
  }

  .hd-tactics-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .hd-tactics-list li {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    padding-left: 1rem;
    position: relative;
  }

  .hd-tactics-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--accent-green);
    font-size: 0.75rem;
  }

  .hd-cta-stack { display: flex; flex-direction: column; gap: 0.75rem; }

  .hd-cta-block {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 1.25rem;
    text-align: center;
  }

  .hd-cta-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .hd-right h2, .hd-patterns-heading {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  .hd-patterns-sub {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .hd-back-link {
    margin-top: 2rem;
    font-size: 0.85rem;
  }

  .hd-back-link a {
    color: var(--accent-green);
    text-decoration: none;
  }

  .w-full { width: 100%; }
  .text-center { text-align: center; }
  .mt-4 { margin-top: 1rem; }
  .inline-block { display: inline-block; }
`;

export default HatchDetail
