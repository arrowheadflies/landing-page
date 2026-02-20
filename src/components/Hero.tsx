import { ArrowRight, Instagram } from 'lucide-react';
import heroBgImage from '../assets/media/IMG_3091.jpg';

export default function Hero() {
  const scrollToEmail = () => {
    document.getElementById('giveaway')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container animate-fade-in">
        <header className="hero-header">
          <h1 className="brand-title">ARROWHEAD</h1>
          <a
            href="https://instagram.com/arrowheadflies"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Instagram size={24} />
            <span>@arrowheadflies</span>
          </a>
        </header>

        <div className="hero-main delay-100">
          <h2 className="hero-headline">Handcrafted Precision.</h2>
          <p className="hero-subheadline">
            Premium flies for the modern angler. Built to last, designed to make a point.
          </p>
          <div className="hero-cta delay-300">
            <button className="btn-primary" onClick={scrollToEmail}>
              Enter Early Season Giveaway <ArrowRight size={18} />
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
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .hero-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .brand-title {
          font-size: 1.5rem;
          letter-spacing: 0.2em;
          font-weight: 700;
          margin: 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .social-link:hover {
          opacity: 0.7;
        }

        .hero-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 800px;
        }

        .hero-headline {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero-subheadline {
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
