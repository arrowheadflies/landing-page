import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Search, ChevronRight, ChevronDown, ChevronUp, ArrowRight, ArrowLeft, Bug } from 'lucide-react'
import { hatchData } from '../data/hatchData'

export default function HatchDetail() {
  const { category, stageId } = useParams();
  const data = category ? hatchData[category] : null;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      document.title = `${data.name.split(' (')[0]} — Hatch Guide | Arrowhead Flies`;
    }
  }, [data, stageId]);

  const toggleStage = (id: string) => {
    setExpandedStages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!data) {
    return (
      <div className="bg-charcoal min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-cream mb-3">Guide not found</h1>
        <p className="text-mid-gray text-sm mb-6">This hatch category is coming soon.</p>
        <Link to="/hatch-guide" className="btn btn-secondary">
          <ArrowLeft size={16} /> Back to Hatch Guide
        </Link>
      </div>
    );
  }

  const currentStage = stageId ? data.stages.find(s => s.id === stageId) : null;

  // ─── STAGE DETAIL VIEW ──────────────────────────────────────────
  if (stageId && currentStage) {
    return (
      <div className="bg-charcoal min-h-screen">
        <div className="container-wide px-6 pt-24 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-mid-gray mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link to="/hatch-guide" className="hover:text-cream transition-colors">Hatch Guide</Link>
            <span className="text-border">/</span>
            <Link to={`/hatch-guide/${category}`} className="hover:text-cream transition-colors">{data.name.split(' (')[0]}</Link>
            <span className="text-border">/</span>
            <span className="text-cream">{currentStage.name}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="badge bg-sage/10 text-sage border border-sage/20 mb-4">
              <Bug size={12} /> Stage {currentStage.id}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4">
              {currentStage.name}
            </h1>
            <p className="text-mid-gray text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {currentStage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              <div className="card p-6 space-y-4">
                <h3 className="text-xs font-semibold text-mid-gray uppercase tracking-wider">Tactics</h3>
                <ul className="space-y-3">
                  {currentStage.tactics.map((t, i) => (
                    <li key={i} className="text-cream/80 text-sm leading-relaxed flex gap-3">
                      <span className="text-accent font-bold text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-mid-gray uppercase tracking-wider">Confidence</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-sm ${i < currentStage.confidenceRating ? 'bg-accent' : 'bg-border'}`} />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <span className="text-xs font-semibold text-mid-gray uppercase tracking-wider">When It Works</span>
                  <p className="text-cream text-sm leading-relaxed">{currentStage.whenItWorks}</p>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <span className="text-xs font-semibold text-mid-gray uppercase tracking-wider">Rig Suggestion</span>
                  <p className="text-cream text-sm leading-relaxed bg-surface border border-border rounded-lg p-3 border-l-2 border-l-sage">
                    {currentStage.rigSuggestion}
                  </p>
                </div>
              </div>
            </div>

            {/* Patterns Grid */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-semibold text-cream uppercase tracking-wider">Recommended Patterns</h2>
                <span className="text-xs text-mid-gray">{currentStage.flies.length} patterns</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStage.flies.map(fly => (
                  <div key={fly.id} className="card p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-cream font-semibold">{fly.name}</h3>
                      <span className="text-xs text-sage font-mono">#{fly.sizes}</span>
                    </div>
                    <p className="text-mid-gray text-sm leading-relaxed line-clamp-2">{fly.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 card p-8 text-center">
                <h3 className="text-lg font-bold text-cream mb-2">Ready to fish?</h3>
                <p className="text-mid-gray text-sm mb-6">Get the flies you need for this stage.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/shop" className="btn btn-primary">Shop Flies</Link>
                  <Link to={`/hatch-guide/${category}`} className="btn btn-secondary">
                    Back to {data.name.split(' (')[0]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── CATEGORY OVERVIEW ──────────────────────────────────────────
  const allFlies = data.stages.flatMap(s => s.flies);
  const filteredFlies = searchQuery
    ? allFlies.filter(f =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : null;

  return (
    <div className="bg-charcoal min-h-screen">
      <div className="container-wide px-6 pt-24 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-mid-gray mb-8" aria-label="Breadcrumb">
          <Link to="/hatch-guide" className="hover:text-cream transition-colors">Hatch Guide</Link>
          <span className="text-border">/</span>
          <span className="text-cream">{data.name.split(' (')[0]}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="badge bg-accent/10 text-accent border border-accent/20 mb-4">
              <Bug size={12} /> {data.stages.length} lifecycle stages
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-3">
              {data.name.split(' (')[0]}
            </h1>
            <p className="text-mid-gray text-base leading-relaxed max-w-2xl">{data.overview}</p>
          </div>

          {/* Search */}
          <div className="w-full lg:w-80">
            <div className="card flex items-center gap-3 px-4 py-3 focus-within:border-accent transition-colors">
              <Search size={16} className="text-mid-gray" />
              <input
                type="text"
                placeholder="Search patterns..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-cream text-sm flex-1 placeholder:text-mid-gray/40"
              />
              {searchQuery && (
                <button className="text-mid-gray hover:text-cream text-sm" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && filteredFlies && (
          <div className="mb-16">
            <p className="text-xs font-semibold text-sage uppercase tracking-wider mb-4">{filteredFlies.length} results for "{searchQuery}"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFlies.map(fly => (
                <div key={fly.id} className="card p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-cream font-semibold">{fly.name}</h4>
                    <span className="text-xs text-sage font-mono">#{fly.sizes}</span>
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed line-clamp-2">{fly.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stages Accordion */}
        {!searchQuery && (
          <div className="space-y-3">
            {data.stages.map((stage, idx) => {
              const isOpen = expandedStages[stage.id] ?? (idx === 0);
              return (
                <div key={stage.id} className="card overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-elevated/50 transition-colors"
                    onClick={() => toggleStage(stage.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-xl sm:text-2xl font-bold text-border">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-cream">{stage.name}</h2>
                        <span className="text-xs text-mid-gray">{stage.flies.length} patterns</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/hatch-guide/${category}/${stage.id}`}
                        className="hidden sm:flex items-center gap-2 btn btn-secondary text-xs px-4 py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Details <ChevronRight size={12} />
                      </Link>
                      {isOpen ? <ChevronUp size={20} className="text-mid-gray" /> : <ChevronDown size={20} className="text-mid-gray" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 border-t border-border">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                        {stage.flies.map(fly => (
                          <div key={fly.id} className="bg-charcoal border border-border rounded-lg p-4 hover:border-accent/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-cream font-medium text-sm">{fly.name}</h4>
                              <span className="text-xs text-sage font-mono">#{fly.sizes}</span>
                            </div>
                            <p className="text-mid-gray text-xs leading-relaxed line-clamp-2">{fly.description}</p>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/hatch-guide/${category}/${stage.id}`}
                        className="sm:hidden inline-flex items-center gap-2 text-accent text-sm font-medium mt-4"
                      >
                        View full stage details <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 card p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-cream font-bold text-lg mb-1">Found your pattern?</h3>
            <p className="text-mid-gray text-sm">Get the flies that match these hatch stages.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link to="/shop" className="btn btn-primary flex-1 sm:flex-initial">Shop Flies</Link>
            <Link to="/quiver" className="btn btn-secondary flex-1 sm:flex-initial">Find Your Fly</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
