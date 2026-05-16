import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Search, Bug, Package, ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import productsData from '../data/products.json';
import storyImage from '../assets/media/brand/Tools.jpeg';
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
    <div className="bg-charcoal">
      <Hero />

      {/* ── FEATURED PRODUCTS ─────────────────────────── */}
      <section className="section" aria-label="Featured products">
        <div className="container-default">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">Our Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream tracking-tight">Shop the collection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {productsData.map((product) => (
              <Link
                key={product.id}
                to={product.id === 'sticker' ? `/product/${product.id}` : `/product/${product.id}`}
                className="card group overflow-hidden"
              >
                <div className="aspect-[4/3] bg-elevated overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 badge bg-accent text-cream">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-cream font-semibold text-base group-hover:text-warm-white transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-accent font-bold text-base whitespace-nowrap">${product.price}</span>
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed line-clamp-2">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/shop" className="btn btn-secondary group">
              View All Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="section border-t border-border" aria-label="How Arrowhead works">
        <div className="container-default">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream tracking-tight">
              From uncertainty to confidence
            </h2>
            <p className="text-mid-gray text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              We built tools to take the guesswork out of choosing flies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="card p-8 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-border text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="text-cream text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed flex-1">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-6 group-hover:gap-3 transition-all">
                  {item.cta} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY / IMMERSIVE SECTION ─────────────────────────── */}
      <section className="relative h-[80vh] flex items-center overflow-hidden" aria-label="About Arrowhead Flies">
        <div className="absolute inset-0 z-0">
          <img
            src={storyImage}
            alt="Hand-tying flies — the Arrowhead way"
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.35) contrast(1.1)',
              objectPosition: 'center 50%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal/80" />
        </div>

        <div className="container-default relative z-10">
          <div className="max-w-2xl">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in">Our Story</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-cream tracking-tight leading-[1.1] mb-8">
              Built by an angler,<br />
              <span className="text-warm-white/90">for anglers.</span>
            </h2>
            <div className="space-y-6 text-cream/80 text-lg leading-relaxed max-w-xl">
              <p>
                Arrowhead started on the vise — tying patterns for myself and friends
                who kept asking "what are you throwing?" Now those same
                flies are available to anyone who wants to fish with confidence.
              </p>
              <p>
                Every fly is hand-tied with quality materials and fish-tested before
                it goes into a tin. No bulk filler patterns. Just flies that work.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="btn btn-primary group px-8">
                Shop the Tin
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/hatch-guide" className="btn btn-outline border-cream/20 text-cream hover:bg-cream/10">
                View Hatch Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────── */}
      <section className="py-12 border-t border-border" aria-label="Trust signals">
        <div className="container-default">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
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
        </div>
      </section>

      {/* ── EMAIL / COMMUNITY / NEWSLETTER ─────────────────────────── */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border" aria-label="Newsletter signup">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={gearImage}
            alt=""
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal" />
        </div>

        <div className="container-narrow relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase">Stay Connected</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream tracking-tight">
              Don't miss the hatch.
            </h2>
            <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
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
              className="flex-1 bg-surface/60 backdrop-blur-sm border border-border text-cream text-sm px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-colors placeholder:text-mid-gray/50"
            />
            <button type="submit" className="btn btn-primary px-8 py-3 shadow-xl">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-mid-gray/40">
            Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ─────────────────────────── */}
      <section className="section border-t border-border" aria-label="Follow us">
        <div className="container-default">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-cream mb-2">On the Water</h3>
            <p className="text-mid-gray text-sm">Join the community and see the flies in action.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                className="aspect-square rounded-xl overflow-hidden group bg-surface relative"
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
        </div>
      </section>
    </div>
  );
}
