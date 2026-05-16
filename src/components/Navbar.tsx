import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, setIsCartOpen } = useCart();
  const location = useLocation();
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Shop', path: '/shop' },
    { name: 'Hatch Guide', path: '/hatch-guide' },
    { name: 'The Lab', path: '/the-lab' },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
      }`}
    >
      <div className="container-wide mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-24 transition-all duration-300 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group z-20" aria-label="Arrowhead Flies Home">
          <img
            src="/brand/logo-black-fish-white-arrow.png"
            alt="Arrowhead Flies"
            className="h-12 w-12 md:h-16 md:w-16 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
          />
          <span className="text-white font-bold text-2xl md:text-3xl tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] whitespace-nowrap">
            Arrowhead Flies
          </span>
        </Link>

        {/* Desktop Nav - Centered Absolute */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 z-10" aria-label="Main navigation">
          {links.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) =>
                `text-[14px] font-semibold tracking-wide transition-all duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] ${
                  isActive ? 'text-cream underline underline-offset-8 decoration-accent decoration-2' : 'text-white/80 hover:text-cream'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://instagram.com/arrowheadflies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold tracking-wide text-white/80 hover:text-cream transition-all drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          >
            Journal
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 z-20">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-white/80 hover:text-cream transition-colors rounded-lg hover:bg-white/5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            aria-label={`Cart with ${cartCount} items`}
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-cream text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2.5 text-white/80 hover:text-cream transition-colors rounded-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[1001] transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] bg-charcoal border-l border-border flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b border-border">
            <span className="text-xs font-bold text-mid-gray uppercase tracking-widest">Navigation</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-mid-gray hover:text-cream rounded">
              <X size={24} />
            </button>
          </div>

          <nav className="p-6 flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-4 rounded-xl text-[16px] font-bold transition-all ${
                    isActive ? 'text-white bg-accent/20 border border-accent/20' : 'text-white/70 hover:text-white hover:bg-surface'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://instagram.com/arrowheadflies"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl text-[16px] font-bold text-white/70 hover:text-white hover:bg-surface transition-all"
            >
              Journal ↗
            </a>
          </nav>

          <div className="mt-auto p-8 border-t border-border bg-black/20">
            <p className="text-[10px] uppercase font-bold text-mid-gray tracking-widest mb-4">Questions?</p>
            <a href="mailto:arrowheadflies@gmail.com" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              arrowheadflies@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
