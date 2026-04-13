import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Droplets, ArrowRight, ChevronDown } from 'lucide-react';
import { REGIONS, MONTHS, WATER_TYPES, getRecommendation } from '../data/quiverData';
import type { Recommendation } from '../data/quiverData';

export default function FindYourFly() {
  const [region, setRegion] = useState(REGIONS[3]);
  const [month, setMonth] = useState(MONTHS[new Date().getMonth()]);
  const [waterType, setWaterType] = useState(WATER_TYPES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<Recommendation | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Find Your Fly — Arrowhead Flies';
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => {
      const rec = getRecommendation(region, month, waterType);
      setResults(rec);
      setIsLoading(false);
    }, 600);
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
      <section className="pt-28 pb-12 px-6 text-center">
        <div className="container-narrow">
          <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3 animate-fade-in">Fly Selector</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 animate-fade-in-up">
            Find your fly.
          </h1>
          <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-100">
            Tell us where you're fishing and when. We'll recommend the right patterns for your trip.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-8">
        <div className="container-narrow">
          <form onSubmit={handleSearch} className="card p-6 sm:p-8 space-y-6">
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
                value={month}
                onChange={setMonth}
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
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-20">
        <div className="container-default">
          {isLoading ? (
            <div className="space-y-4 max-w-3xl mx-auto animate-pulse">
              <div className="h-20 bg-surface rounded-lg" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-48 bg-surface rounded-lg" />
                <div className="h-48 bg-surface rounded-lg" />
                <div className="h-48 bg-surface rounded-lg" />
              </div>
            </div>
          ) : hasSearched && results ? (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              {/* Summary */}
              <div className="card p-6 sm:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-cream">
                    {month} — {region}
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {results.flies.map((fly, idx) => (
                  <div key={idx} className="card p-6 flex flex-col">
                    <span className="badge bg-accent/10 text-accent border border-accent/20 self-start mb-4">{fly.type}</span>
                    <h3 className="text-cream font-bold text-lg mb-1">{fly.name}</h3>
                    <p className="text-mid-gray text-xs font-mono mb-3">#{fly.size} · {fly.bead}</p>
                    <p className="text-mid-gray text-sm leading-relaxed flex-1">{fly.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/shop" className="card p-6 group flex items-center justify-between hover:border-accent/30">
                  <div>
                    <h4 className="text-cream font-semibold mb-1">Shop These Patterns</h4>
                    <p className="text-mid-gray text-sm">Get the flies for this trip.</p>
                  </div>
                  <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/hatch-guide" className="card p-6 group flex items-center justify-between hover:border-sage/30">
                  <div>
                    <h4 className="text-cream font-semibold mb-1">Hatch Guide</h4>
                    <p className="text-mid-gray text-sm">Learn what's hatching and why.</p>
                  </div>
                  <ArrowRight size={18} className="text-sage group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ) : !hasSearched ? (
            <div className="text-center py-20 max-w-sm mx-auto">
              <p className="text-mid-gray/40 text-lg">
                Select your trip details above and hit "Get Recommendations" to see what to throw.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
