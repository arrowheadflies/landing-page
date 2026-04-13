import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';

export default function Shop() {
  useEffect(() => {
    document.title = 'Shop — Arrowhead Flies | Hand-Tied Trout Flies';
  }, []);

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 px-6 text-center">
        <div className="container-narrow">
          <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3 animate-fade-in">Shop</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 animate-fade-in-up">
            Hand-tied. Fish-tested.
          </h1>
          <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-100">
            Every pattern is tied by hand and tested on the water before it ships. What you see is what we fish.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section pt-0" aria-label="Products">
        <div className="container-default">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {productsData.map((product, idx) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className={`card group overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-square bg-elevated overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 badge bg-accent text-cream">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-cream font-semibold text-lg group-hover:text-warm-white transition-colors">
                      {product.name}
                    </h2>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">${product.price}</span>
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <div className="mt-16 card p-8 sm:p-12 text-center max-w-3xl mx-auto border-dashed">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">Coming Soon</p>
            <h3 className="text-2xl font-bold text-cream mb-3">Full Fly Boxes</h3>
            <p className="text-mid-gray text-sm leading-relaxed max-w-md mx-auto mb-6">
              We're building curated 12-pack and 20-pack fly boxes for tailwaters, freestones,
              and everything in between. Sign up to get notified when they drop.
            </p>
            <form
              action="https://formspree.io/f/mqakevve"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-charcoal border border-border text-cream text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-accent transition-colors placeholder:text-mid-gray/50"
              />
              <input type="hidden" name="source" value="coming_soon_flyboxes" />
              <button type="submit" className="btn btn-primary text-sm px-6 py-2.5">
                Notify Me
              </button>
            </form>
          </div>

          {/* Custom Order */}
          <div className="mt-8 card p-8 sm:p-10 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-cream font-semibold text-lg mb-2">Need something specific?</h3>
                <p className="text-mid-gray text-sm leading-relaxed max-w-sm">
                  Want a custom selection for your next trip? Reach out and we'll tie to order.
                </p>
              </div>
              <a
                href="mailto:arrowheadflies@gmail.com"
                className="btn btn-secondary whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-t border-border" aria-label="Trust signals">
        <div className="container-default">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { icon: <Star size={18} />, text: 'Hand-Tied Quality' },
              { icon: <ShieldCheck size={18} />, text: 'Secure Checkout' },
              { icon: <Truck size={18} />, text: 'Ships from the USA' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2.5 text-mid-gray">
                <span className="text-accent">{item.icon}</span>
                <span className="text-xs font-medium uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
