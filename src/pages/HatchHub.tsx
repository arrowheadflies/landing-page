import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import monthlyHatches from '../data/monthlyHatches.json';
import { Bug, ArrowRight, MapPin, Calendar, Droplets, Search, Sparkles, Mountain, Trees, Waves, Landmark, Palmtree, Snowflake, ChevronDown } from 'lucide-react';
import { REGIONS, MONTHS, WATER_TYPES, getRecommendation } from '../data/quiverData';
import type { Recommendation } from '../data/quiverData';

// Custom icons not in Lucide
function SunIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function CornIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M12 2C8 6 6 10 6 14c0 3.3 2.7 6 6 6" />
      <path d="M12 2c4 4 6 8 6 12 0 3.3-2.7 6-6 6" />
      <path d="M8 14h8" />
      <path d="M9 10h6" />
      <path d="M9.5 6h5" />
    </svg>
  );
}

const REGION_ICONS: Record<string, React.ReactNode> = {
  'Pacific Northwest': <Trees size={18} />,
  'Rocky Mountain': <Mountain size={18} />,
  'Southwest': <SunIcon size={18} />,
  'Midwest': <CornIcon size={18} />,
  'Southeast': <Palmtree size={18} />,
  'Northeast': <Landmark size={18} />,
  'Alaska': <Snowflake size={18} />,
  'Other': <Waves size={18} />,
};

const WATER_ICONS: Record<string, React.ReactNode> = {
  'Tailwater': <Droplets size={18} />,
  'Freestone River': <Waves size={18} />,
  'Spring Creek': <Waves size={18} />,
  'Limestone Creek': <Waves size={18} />,
  'Stillwater / Lake': <Waves size={18} />,
  'Reservoir': <Waves size={18} />,
  'Tidal / Brackish': <Waves size={18} />,
  'Small Stream': <Waves size={18} />,
  'Urban Fishery': <Waves size={18} />,
};

const REGION_LABELS: Record<string, string> = {
  'Pacific Northwest': 'PNW',
  'Rocky Mountain': 'Rockies',
  'Other': 'HI / Intl',
};

const WATER_LABELS: Record<string, string> = {
  'Stillwater / Lake': 'Stillwater',
  'Tidal / Brackish': 'Tidal',
  'Small Stream': 'Small Stream',
  'Urban Fishery': 'Urban',
};

function ToggleGrid({ items, selected, onToggle, icons, labels }: {
  items: string[];
  selected: string | null;
  onToggle: (item: string) => void;
  icons: Record<string, React.ReactNode>;
  labels?: Record<string, string>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => {
        const isSelected = selected === item;
        return (
          <button
            key={item}
            onClick={() => onToggle(item)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-200 ${
              isSelected
                ? 'bg-accent/15 border-accent/40 text-cream shadow-sm shadow-accent/10'
                : 'bg-white/[0.03] border-white/10 text-gray-400 hover:bg-white/[0.06] hover:text-cream hover:border-white/20'
            }`}
          >
            <span className={`flex-shrink-0 ${isSelected ? 'text-accent' : 'text-mid-gray'}`}>
              {icons[item]}
            </span>
            <span className="text-xs font-medium leading-tight text-left">
              {labels?.[item] || item}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function HatchHub() {
  const [region, setRegion] = useState<string | null>(REGIONS[3]);
  const [monthParam, setMonthParam] = useState(MONTHS[new Date().getMonth()]);
  const [waterType, setWaterType] = useState<string | null>(WATER_TYPES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<Recommendation | null>(null);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [showMobileResults, setShowMobileResults] = useState(false);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthIndex = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState(monthNames[currentMonthIndex]);

  useEffect(() => {
    document.title = 'Hatch Guide & Fly Selector — Arrowhead Flies';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Find the perfect fly for your trip with our Fly Selector, and explore our month-by-month guide to what\'s hatching on the water.');
    }
  }, []);

  const doSearch = (month: string, r: string | null, w: string | null) => {
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => {
      const rec = getRecommendation(
        r || REGIONS[3],
        month,
        w || WATER_TYPES[0]
      );
      setResults(rec);
      setIsLoading(false);
      setShowMobileResults(true);
    }, 400);
  };

  const handleMonthClick = (month: string) => {
    setActiveMonth(month);
    setMonthParam(month);
    doSearch(month, region, waterType);
  };

  const handleToggleRegion = (r: string) => {
    const next = region === r ? null : r;
    setRegion(next);
    doSearch(monthParam, next, waterType);
  };

  const handleToggleWater = (w: string) => {
    const next = waterType === w ? null : w;
    setWaterType(next);
    doSearch(monthParam, region, next);
  };

  const getInsectLink = (insect: string) => {
    const i = insect.toLowerCase();
    if (i.includes('midge')) return '/hatch-guide/midges';
    if (i.includes('mayfly') || i.includes('bwo') || i.includes('hendrickson') || i.includes('march brown') || i.includes('sulphur') || i.includes('pmd') || i.includes('trico') || i.includes('mahogany')) return '/hatch-guide/mayflies';
    if (i.includes('caddis')) return '/hatch-guide/caddis';
    if (i.includes('stonefly')) return '/hatch-guide/stoneflies';
    if (i.includes('terrestrial') || i.includes('hopper') || i.includes('ant') || i.includes('beetle')) return '/hatch-guide/terrestrials';
    if (i.includes('streamer') || i.includes('leech') || i.includes('baitfish')) return '/hatch-guide/streamers';
    return null;
  };

  const FlyCard = ({ fly, idx }: { fly: Recommendation['flies'][0]; idx: number }) => (
    <div
      className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
      style={{ animationDelay: `${idx * 80}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent border border-accent/20">
            {fly.type}
          </span>
          <span className="text-[11px] text-mid-gray font-mono tracking-tight">#{fly.size}</span>
        </div>
        <h3 className="text-cream font-bold text-base mb-1">{fly.name}</h3>
        <div className="flex items-center gap-1.5 mb-3">
          <span className={`inline-block w-2 h-2 rounded-full ${fly.bead === 'Bead' ? 'bg-amber-400 shadow-sm shadow-amber-400/30' : fly.bead === 'Bare' ? 'bg-white/30' : 'bg-transparent border border-white/20'}`} />
          <span className="text-[11px] text-mid-gray font-mono">{fly.bead === 'Bead' ? 'Beaded' : fly.bead === 'Bare' ? 'Bare' : '—'}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{fly.desc}</p>
      </div>
    </div>
  );

  const seasonGradient: Record<string, string> = {
    'Winter': 'from-blue-500/10 to-blue-500/5',
    'Spring': 'from-emerald-500/10 to-emerald-500/5',
    'Summer': 'from-amber-500/10 to-amber-500/5',
    'Fall': 'from-orange-500/10 to-orange-500/5',
  };

  return (
    <div className="bg-charcoal min-h-screen overflow-x-hidden">
      <div className="container-wide pb-16">
        {/* === Hero === */}
        <section className="relative pt-24 pb-10 text-center overflow-hidden">
          <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-full px-3.5 py-1.5 mb-4">
            <Sparkles size={12} className="text-accent" />
            <span className="text-accent text-[10px] font-semibold tracking-[0.12em] uppercase">Reference & Tools</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-3 animate-fade-in-up">
            The Hatch Guide
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed animate-fade-in-up delay-100">
            Find the perfect fly for your next trip, or explore what's hatching right now on North American trout waters.
          </p>
        </section>
        {/* === Full-width Month Strip === */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {monthNames.map((month) => {
              const isActive = month === activeMonth;
              return (
                <button
                  key={month}
                  onClick={() => handleMonthClick(month)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-accent text-white border-accent shadow-md shadow-accent/20 scale-105'
                      : 'border-white/10 text-gray-400 hover:text-cream hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06]'
                  }`}
                >
                  {month.substring(0, 3)}
                </button>
              );
            })}
          </div>
        </div>

        {/* === Desktop: Two-column layout === */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* === Sidebar: Region + Water Type (sticky) === */}
          <aside className="lg:w-[300px] flex-shrink-0 space-y-5 lg:sticky lg:top-28 lg:self-start">
            {/* Desktop sidebar */}
            <div className="hidden lg:block bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-5">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3.5">
                <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Search size={15} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-cream font-bold text-sm">Refine</h2>
                  <p className="text-gray-500 text-[10px]">Region + Water Type</p>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-semibold text-mid-gray uppercase tracking-[0.1em] mb-2">
                  <MapPin size={13} className="text-accent" /> Region
                  {region && (
                    <button
                      onClick={() => handleToggleRegion(region)}
                      className="ml-auto text-[9px] text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </label>
                <ToggleGrid items={REGIONS} selected={region} onToggle={handleToggleRegion} icons={REGION_ICONS} labels={REGION_LABELS} />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-semibold text-mid-gray uppercase tracking-[0.1em] mb-2">
                  <Droplets size={13} className="text-accent" /> Water Type
                  {waterType && (
                    <button
                      onClick={() => handleToggleWater(waterType)}
                      className="ml-auto text-[9px] text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </label>
                <ToggleGrid items={WATER_TYPES} selected={waterType} onToggle={handleToggleWater} icons={WATER_ICONS} labels={WATER_LABELS} />
              </div>

              {!region && !waterType && (
                <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                  All regions and water types selected. Tap a month above or click a region/water type to filter.
                </p>
              )}
            </div>

            {/* Mobile collapsible sidebar */}
            <div className="lg:hidden">
              <button
                onClick={() => setSelectorOpen(!selectorOpen)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                  selectorOpen 
                    ? 'bg-white/[0.08] border-accent/40 shadow-lg shadow-accent/5' 
                    : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Search size={15} className="text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-cream font-semibold text-sm leading-tight">Refine</p>
                    <p className="text-gray-500 text-[11px]">Region + Water Type</p>
                  </div>
                </div>
                <ChevronDown size={18} className={`text-mid-gray transition-transform duration-300 ${selectorOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-400 ease-out ${selectorOpen ? 'max-h-[700px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-mid-gray uppercase tracking-[0.1em] mb-2">
                      <MapPin size={13} className="text-accent" /> Region
                    </label>
                    <ToggleGrid items={REGIONS} selected={region} onToggle={handleToggleRegion} icons={REGION_ICONS} labels={REGION_LABELS} />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-mid-gray uppercase tracking-[0.1em] mb-2">
                      <Droplets size={13} className="text-accent" /> Water Type
                    </label>
                    <ToggleGrid items={WATER_TYPES} selected={waterType} onToggle={handleToggleWater} icons={WATER_ICONS} labels={WATER_LABELS} />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* === Main Content === */}
          <main className="flex-1 overflow-hidden">
            {/* === Results Section === */}
            <div id="hatch-results">
              {isLoading ? (
                <div className="space-y-3 mb-8 animate-pulse">
                  <div className="h-24 bg-white/[0.04] rounded-2xl border border-white/5" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    <div className="h-44 bg-white/[0.04] rounded-2xl border border-white/5" />
                    <div className="h-44 bg-white/[0.04] rounded-2xl border border-white/5" />
                    <div className="h-44 bg-white/[0.04] rounded-2xl border border-white/5" />
                  </div>
                </div>
              ) : hasSearched && results ? (
                <div className={`mb-8 ${showMobileResults ? 'animate-fade-in-up' : ''}`}>
                  <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 mb-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h2 className="text-xl sm:text-2xl font-bold text-cream tracking-tight">{monthParam}</h2>
                            {region && (
                              <>
                                <span className="text-gray-400 text-sm font-light">in</span>
                                <span className="text-cream font-semibold">{region}</span>
                              </>
                            )}
                          </div>
                          {waterType && (
                            <div className="flex items-center gap-2">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage" />
                              <span className="text-gray-400 text-xs">{waterType}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="bg-charcoal/60 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{results.hatch}</p>
                      </div>
                      {results.rig && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.12em] mb-1.5">Suggested Rig</p>
                          <p className="text-cream/80 text-sm leading-relaxed">{results.rig}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {results.flies.map((fly, idx) => (
                      <FlyCard key={idx} fly={fly} idx={idx} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="hidden sm:block mb-8 bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 bg-white/[0.05] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search size={24} className="text-gray-500/50" />
                  </div>
                  <h3 className="text-lg font-semibold text-cream mb-2">Find Your Fly</h3>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                    Tap a month above, then refine by region or water type on the left.
                  </p>
                </div>
              )}
            </div>

            {/* === Monthly Hatch Data === */}
            <section aria-label="Monthly hatch data">
              {(() => {
                const m = monthlyHatches.find(h => h.month === activeMonth);
                if (!m) return null;
                const season = m.season as keyof typeof seasonGradient;
                return (
                  <div key={m.month} className="animate-fade-in">
                    <div className={`flex items-center gap-3 mb-5 p-4 rounded-2xl bg-gradient-to-r ${seasonGradient[season] || 'from-white/[0.03]'} border border-white/5`}>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                        <Calendar size={18} className="text-accent" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-cream">{m.month}</h2>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{m.season}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="text-[10px] text-gray-500">{m.hatches.length} hatches</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {m.hatches.map((hatch, hIdx) => {
                        const link = getInsectLink(hatch.insect);
                        return (
                          <div
                            key={hIdx}
                            className="group bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-accent/25 transition-all duration-300 flex flex-col"
                            style={{ animationDelay: `${hIdx * 60}ms` }}
                          >
                            <div className="flex items-start justify-between gap-2 mb-3">
                              {link ? (
                                <Link to={link} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent border border-accent/20 hover:bg-accent/25 transition-colors">
                                  <Bug size={10} /> {hatch.insect}
                                </Link>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-white/[0.04] text-gray-400 border border-white/10">
                                  <Bug size={10} /> {hatch.insect}
                                </span>
                              )}
                              <span className="text-[11px] text-gray-500 font-mono whitespace-nowrap">{hatch.sizes}</span>
                            </div>
                            <h3 className="text-cream font-semibold text-sm mb-2.5">{hatch.name}</h3>
                            <div className="mt-auto pt-2.5 border-t border-white/5">
                              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.08em] mb-1">Top Patterns</p>
                              <p className="text-cream/70 text-xs leading-relaxed">{hatch.patterns}</p>
                            </div>
                            {link && (
                              <Link to={link} className="inline-flex items-center gap-1.5 text-accent text-[11px] font-medium mt-3 hover:gap-2.5 transition-all self-start">
                                Learn More <ArrowRight size={10} />
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}