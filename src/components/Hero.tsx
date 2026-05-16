import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBgImage from '../assets/media/trips/IMG_3091.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBgImage}
          alt="Misty river morning on the water"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-32 max-w-3xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-block bg-accent/30 backdrop-blur-md border border-accent/30 text-white text-xs font-bold tracking-[0.2em] uppercase px-6 py-2.5 rounded-full shadow-lg">
            Hand-Tied · Fish-Tested · Est. 2025
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream tracking-tight leading-[1.05]">
            Flies that
            <br />
            <span className="text-warm-white">catch fish.</span>
          </h1>

          <p className="text-light-gray text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Curated fly selections hand-tied for any water.
            No filler patterns — just what works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/shop" className="btn btn-primary btn-lg group w-full sm:w-auto">
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/the-lab" className="btn btn-secondary btn-lg w-full sm:w-auto">
              The Lab
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
