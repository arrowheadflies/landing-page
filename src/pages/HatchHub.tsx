import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import monthlyHatches from '../data/monthlyHatches.json';
import { Bug, ArrowRight } from 'lucide-react';

export default function HatchHub() {
  useEffect(() => {
    document.title = 'Hatch Guide — Arrowhead Flies | Month-by-Month Fly Fishing Hatches';
  }, []);

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

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 px-6 text-center">
        <div className="container-narrow">
          <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3 animate-fade-in">Reference</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 animate-fade-in-up">
            Hatch Guide
          </h1>
          <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-100">
            Month-by-month guide to what's hatching on North American trout waters. Know what to throw before you get to the river.
          </p>
        </div>
      </section>

      {/* Monthly Sections */}
      <section className="section pt-0" aria-label="Monthly hatch data">
        <div className="container-wide">
          <div className="space-y-16">
            {monthlyHatches.map((m) => (
              <div key={m.month} className="scroll-mt-24" id={m.month.toLowerCase()}>
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
                      <div key={hIdx} className="card p-5 flex flex-col">
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
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 card p-8 sm:p-10 text-center">
            <h3 className="text-xl font-bold text-cream mb-3">Not sure what to fish?</h3>
            <p className="text-mid-gray text-sm leading-relaxed max-w-md mx-auto mb-6">
              Use our fly selector to get a personalized recommendation based on your trip details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/quiver" className="btn btn-primary">
                Find Your Fly
              </Link>
              <Link to="/shop" className="btn btn-secondary">
                Shop Flies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
