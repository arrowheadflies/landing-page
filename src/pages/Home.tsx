import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bug, Package, Search, ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import Hero from '../components/Hero';
import productsData from '../data/products.json';
import midgeCloseUp from '../assets/media/flies/Midge Close Up.jpeg';
import foamBeetle from '../assets/media/flies/Foam Beetle.jpeg';
import blueCollarBugger from '../assets/media/flies/Blue Collar Bugger.jpeg';
import midgeCluster from '../assets/media/flies/Midge Cluster Side.jpeg';
import gearImage from '../assets/media/trips/IMG_1358.jpg';

export default function Home() {
  useEffect(() => {
    document.title = 'Arrowhead Flies — Hand-Tied Trout Flies';
  }, []);

  return (
    <div className="bg-charcoal min-h-screen">
      <Hero />

      <div className="container-wide pb-16">
        {/* How It Works */}
        <section className="mb-16" aria-label="How Arrowhead works">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">How It Works</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-cream tracking-tight">From uncertainty to confidence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Bug size={24} />,
                step: '01',
                title: 'Know the Hatch',
                desc: 'Browse our month-by-month hatch guide. Understand what\'s hatching and what to fish.',
                link: '/hatch-guide',
                cta: 'Hatch Guide',
              },
              {
                icon: <Package size={24} />,
                step: '02',
                title: 'Get the Flies',
                desc: 'Shop hand-tied patterns built for the conditions you\'ll actually face on the water.',
                link: '/shop',
                cta: 'Shop Now',
              },
              {
                icon: <Search size={24} />,
                step: '03',
                title: 'The Lab',
                desc: 'Master the art of tying with our interactive step-by-step guides. Build your quiver with confidence.',
                link: '/the-lab',
                cta: 'Enter The Lab',
              },
            ].map((item) => (
              <Link
                key={item.step}
                to={item.link}
                className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-border text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="text-cream text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all mt-auto">
                  {item.cta} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16" aria-label="Featured products">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Products</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-cream tracking-tight">Shop the collection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {productsData.map((product, idx) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className={`group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-square bg-elevated overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-accent text-cream border border-accent/20">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-cream font-bold text-base group-hover:text-warm-white transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-accent font-bold text-base whitespace-nowrap">${product.price}</span>
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop" className="btn btn-secondary group">
              View All Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-16 sm:py-24 overflow-hidden mb-16" aria-label="Newsletter signup">
          <div className="absolute inset-0 z-0">
            <img
              src={gearImage}
              alt=""
              className="w-full h-full object-cover opacity-80 grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/40 to-charcoal/60" />
          </div>

          <div className="container-narrow relative z-10 text-center space-y-6">
            <div className="space-y-3">
              <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase">Stay Connected</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-cream tracking-tight">
                Don't miss the hatch.
              </h2>
              <p className="text-mid-gray text-sm sm:text-base leading-relaxed">
                Get notified about new fly drops, seasonal patterns, and giveaways.
                No spam — just fishing.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mqakevve"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-charcoal/80 border border-white/10 text-cream text-sm px-5 py-3 rounded-xl focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-mid-gray/50"
              />
              <button type="submit" className="btn btn-primary px-8 py-3 shadow-lg shadow-accent/20">
                Subscribe
              </button>
            </form>

            <p className="text-xs text-mid-gray/40">
              Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="mb-16" aria-label="Trust signals">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: <Star size={18} />, text: 'Hand-Tied Quality' },
              { icon: <ShieldCheck size={18} />, text: 'Secure Checkout' },
              { icon: <Truck size={18} />, text: 'Ships from the USA' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-mid-gray">
                <span className="text-accent">{item.icon}</span>
                <span className="text-xs font-medium uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram CTA */}
        <section aria-label="Follow us">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-cream mb-2">On the Water</h3>
            <p className="text-mid-gray text-sm">Join the community and see the flies in action.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { img: midgeCloseUp, alt: "Close up of a midge" },
              { img: foamBeetle, alt: "Foam beetle pattern" },
              { img: blueCollarBugger, alt: "Blue collar bugger streamer" },
              { img: midgeCluster, alt: "Midge cluster on the water" }
            ].map((item, i) => (
              <a
                key={i}
                href="https://instagram.com/arrowheadflies"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-xl overflow-hidden group bg-elevated border border-white/10 relative"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://instagram.com/arrowheadflies"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              Follow @arrowheadflies
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}