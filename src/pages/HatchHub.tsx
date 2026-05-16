import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import monthlyHatches from '../data/monthlyHatches.json';
import { Bug, ArrowRight, MapPin, Calendar, Droplets, ChevronDown } from 'lucide-react';
import { REGIONS, MONTHS, WATER_TYPES, getRecommendation } from '../data/quiverData';
import type { Recommendation } from '../data/quiverData';

export default function HatchHub() {
  const [region, setRegion] = useState(REGIONS[3]);
  const [monthParam, setMonthParam] = useState(MONTHS[new Date().getMonth()]);
  const [waterType, setWaterType] = useState(WATER_TYPES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<Recommendation | null>(null);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => {
      const rec = getRecommendation(region, monthParam, waterType);
      setResults(rec);
      setIsLoading(false);
    }, 600);
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

  const SelectField = ({
    label, icon, value, onChange, options
  }: {
    label: string; icon: React.ReactNode; value: string;
    onChange: (v: string) => void; options: string[];
  }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs font-semibold text-mid-gray uppercase tracking-wider">
        {icon} {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-surface border border-border text-cream text-sm px-4 py-3 pr-10 rounded-lg focus:border-accent transition-colors appearance-none cursor-pointer outline-none"
        >
          {options.map(o => <option key={o} value={o} className="bg-charcoal">{o}</option>)}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-mid-gray pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-8 px-6 text-center">
        <div className="container-narrow">
          <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3 animate-fade-in">Reference & Tools</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 animate-fade-in-up">
            Hatch Guide
          </h1>
          <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-100">
            Find the perfect fly for your trip, or explore our month-by-month guide to what's hatching right now on North American trout waters.
          </p>
        </div>
      </section>

      {/* Fly Selector Form (Integrated Find Your Fly) */}
      <section className="px-6 pb-12">
        <div className="container-narrow">
          <form onSubmit={handleSearch} className="card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <h2 className="text-xl font-bold text-cream">Fly Selector</h2>
              <span className="text-xs text-mid-gray uppercase tracking-wider">Find your fly</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <SelectField
                label="Region"
                icon={<MapPin size={14} className="text-accent" />}
                value={region}
                onChange={setRegion}
                options={REGIONS}
              />
              <SelectField
                label="Month"
                icon={<Calendar size={14} className="text-accent" />}
                value={monthParam}
                onChange={setMonthParam}
                options={MONTHS}
              />
              <SelectField
                label="Water Type"
                icon={<Droplets size={14} className="text-accent" />}
                value={waterType}
                onChange={setWaterType}
                options={WATER_TYPES}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin" />
              ) : (
                'Get Recommendations'
              )}
            </button>
          </form>

          {/* Results Area */}
          {isLoading ? (
            <div className="space-y-4 max-w-3xl mx-auto mt-8 animate-pulse">
              <div className="h-20 bg-surface rounded-lg" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-48 bg-surface rounded-lg" />
                <div className="h-48 bg-surface rounded-lg" />
                <div className="h-48 bg-surface rounded-lg" />
              </div>
            </div>
          ) : hasSearched && results ? (
            <div className="max-w-4xl mx-auto mt-8 animate-fade-in-up">
              {/* Summary */}
              <div className="card p-6 sm:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-cream">
                    {monthParam} — {region}
                  </h2>
                  <span className="badge bg-sage/10 text-sage border border-sage/20">{waterType}</span>
                </div>
                <p className="text-mid-gray text-base leading-relaxed">{results.hatch}</p>
                {results.rig && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-2">Suggested Rig</p>
                    <p className="text-cream text-sm leading-relaxed">{results.rig}</p>
                  </div>
                )}
              </div>

              {/* Fly Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {results.flies.map((fly, idx) => (
                  <div key={idx} className="card p-6 flex flex-col">
                    <span className="badge bg-accent/10 text-accent border border-accent/20 self-start mb-4">{fly.type}</span>
                    <h3 className="text-cream font-bold text-lg mb-1">{fly.name}</h3>
                    <p className="text-mid-gray text-xs font-mono mb-3">#{fly.size} · {fly.bead}</p>
                    <p className="text-mid-gray text-sm leading-relaxed flex-1">{fly.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Month Tabs Nav */}
      <section className="sticky top-20 md:top-24 z-40 bg-charcoal/95 backdrop-blur-xl border-y border-border py-3 mb-12">
        <div className="container-wide px-6">
          <div className="flex overflow-x-auto custom-scrollbar gap-2 pb-2 -mb-2">
            {monthNames.map((month) => (
              <button
                key={month}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMonth(month);
                }}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                  month === activeMonth 
                    ? 'bg-accent text-white border-accent shadow-md' 
                    : 'border-border text-mid-gray hover:text-cream hover:border-accent/50 bg-surface'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Month Section */}
      <section className="section pt-0" aria-label="Monthly hatch data">
        <div className="container-wide animate-fade-in">
          {(() => {
            const m = monthlyHatches.find(h => h.month === activeMonth);
            if (!m) return null;
            return (
              <div key={m.month}>
                {/* Month Header */}
                <div className="flex items-baseline gap-4 mb-6 border-b border-border pb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-cream">{m.month}</h2>
                  <span className="badge bg-sage/10 text-sage border border-sage/20">{m.season}</span>
                </div>

                {/* Hatch Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {m.hatches.map((hatch, hIdx) => {
                    const link = getInsectLink(hatch.insect);
                    return (
                      <div key={hIdx} className="card p-5 flex flex-col hover:border-accent/30 transition-colors">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          {link ? (
                            <Link
                              to={link}
                              className="badge bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                            >
                              <Bug size={12} /> {hatch.insect}
                            </Link>
                          ) : (
                            <span className="badge bg-surface text-mid-gray border border-border">
                              <Bug size={12} /> {hatch.insect}
                            </span>
                          )}
                          <span className="text-xs text-mid-gray font-mono">{hatch.sizes}</span>
                        </div>

                        <h3 className="text-cream font-semibold text-base mb-3">{hatch.name}</h3>

                        <div className="mt-auto pt-3 border-t border-border">
                          <p className="text-xs font-semibold text-mid-gray/60 uppercase tracking-wider mb-1">Top Patterns</p>
                          <p className="text-cream/80 text-sm leading-relaxed">{hatch.patterns}</p>
                        </div>

                        {link && (
                          <Link
                            to={link}
                            className="inline-flex items-center gap-2 text-accent text-xs font-medium mt-4 hover:gap-3 transition-all"
                          >
                            Learn More <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
}
