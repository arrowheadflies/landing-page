import { ArrowRight } from 'lucide-react';
import heroBgImage from '../assets/media/IMG_3091.jpg';

export default function Hero() {
  const scrollToEmail = () => {
    document.getElementById('giveaway')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container animate-fade-in">
        <div className="hero-main delay-100">
          <div className="hero-brand-mark">
            <span className="brand-badge">EST. 2025</span>
          </div>
          <h2 className="brand-headline">Handcrafted Precision.</h2>
          <p className="brand-subheadline">
            Premium flies for the modern angler. Built to last, designed to make a point.
          </p>
          <div className="hero-cta delay-300">
            <button className="btn-primary" onClick={scrollToEmail}>
              Enter the Founders Giveaway <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-image: url('${heroBgImage}'); /* Local misty river photo */
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(18, 20, 21, 0.4) 0%, rgba(18, 20, 21, 0.9) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding-top: 5rem;
          padding-bottom: 4rem;
          justify-content: center;
        }

        .hero-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 800px;
        }

        .hero-brand-mark {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--color-cream);
          text-transform: uppercase;
        }

        .brand-headline {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .brand-subheadline {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          font-weight: 300;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
