import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border mt-auto" role="contentinfo">
      <div className="container-wide mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src="/brand/logo-black-fish-white-arrow.png"
                alt="Arrowhead Flies"
                className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              />
              <span className="text-white font-bold text-xl tracking-tight">Arrowhead Flies</span>
            </Link>
            <p className="text-mid-gray text-sm leading-relaxed max-w-sm">
              Hand-tied trout flies built for results on the water.
              Based in the Midwest.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/arrowheadflies"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-mid-gray hover:text-cream border border-border rounded-lg hover:border-mid-gray transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:arrowheadflies@gmail.com"
                className="p-2.5 text-mid-gray hover:text-cream border border-border rounded-lg hover:border-mid-gray transition-all"
                aria-label="Email us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-mid-gray hover:text-cream transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-sm text-mid-gray hover:text-cream transition-colors">Shop</Link></li>
              <li><Link to="/quiver" className="text-sm text-mid-gray hover:text-cream transition-colors">Find Your Fly</Link></li>
              <li><Link to="/hatch-guide" className="text-sm text-mid-gray hover:text-cream transition-colors">Hatch Guide</Link></li>
              <li>
                <a
                  href="https://instagram.com/arrowheadflies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mid-gray hover:text-cream transition-colors"
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-4">Stay in the loop</h4>
            <p className="text-sm text-mid-gray mb-4 leading-relaxed">
              Get notified about new fly drops, seasonal patterns, and hatch reports.
            </p>
            <form action="https://formspree.io/f/mqakevve" method="POST" className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 bg-surface border border-border text-cream text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-accent transition-colors placeholder:text-mid-gray/50"
              />
              <button
                type="submit"
                className="btn btn-primary text-sm px-5 py-2.5"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mid-gray/60">
            &copy; {new Date().getFullYear()} Arrowhead Flies. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-mid-gray/40">
            <span>Handmade in the Ozarks</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
