import Hero from '../components/Hero';
import EmailCapture from '../components/EmailCapture';
import { Link } from 'react-router-dom';
import { Search, Bug, Package } from 'lucide-react'; // Retained Package as it's used, removed MapPin as it's not.
import storyImage from '../assets/media/IMG_1358.jpg'; // Retained storyImage as it's used.

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="home-section how-section">
        <div className="container">
          <span className="home-eyebrow">The System</span>
          <h2 className="home-h2">Three Steps. More Fish.</h2>
          <div className="steps-row">
            <div className="step">
              <Search size={32} className="step-icon" />
              <h3>1. Find Your Fly</h3>
              <p>Tell The Quiver where you're fishing and the month. Get a rig suggestion and the exact flies that'll produce.</p>
              <Link to="/quiver" className="step-link">Open The Quiver →</Link>
            </div>
            <div className="step-divider" />
            <div className="step">
              <Bug size={32} className="step-icon" />
              <h3>2. Understand the Hatch</h3>
              <p>Dig into any insect life stage — tactics, confidence ratings, and which flies match what the fish are seeing.</p>
              <Link to="/hatch-guide" className="step-link">Explore the Hatch Guide →</Link>
            </div>
            <div className="step-divider" />
            <div className="step">
              <Package size={32} className="step-icon" />
              <h3>3. Grab a Pack</h3>
              <p>Every pack is hand-tied and curated for a specific fishery. No generic filler — just what you'll actually use.</p>
              <Link to="/shop-packs" className="step-link">Shop Packs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REMOVE THE GUESSWORK ─────────────────────────── */}
      <section className="home-section story-section">
        <div className="container story-grid">
          <div className="story-image-wrap">
            <img src={storyImage} alt="Fly fishing on the water" className="story-img" />
          </div>
          <div className="story-content">
            <span className="home-eyebrow">The Arrowhead System</span>
            <h2 className="home-h2">Remove the Guesswork.</h2>
            <p className="home-body">
              We built a data-driven workflow that takes you from "what should I throw?" to confident decisions in under a minute. Know your hatch. Know your rig. Fish more.
            </p>
            <Link to="/quiver" className="btn-primary mt-6 inline-block">Open The Quiver</Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ───────────────────────────────── */}
      <EmailCapture />

      <style>{`
        .home-section {
          padding: 6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .home-eyebrow {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1rem;
        }

        .home-h2 {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 3rem;
          line-height: 1.15;
        }

        .home-body {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 480px;
          margin: 0;
        }

        /* Steps */
        .steps-row {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .steps-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 0;
          }
        }

        .step {
          flex: 1;
          padding: 0 2rem;
        }

        .step:first-child { padding-left: 0; }
        .step:last-child { padding-right: 0; }

        @media (max-width: 767px) {
          .step { padding: 0; }
        }

        .step-divider {
          width: 1px;
          background: rgba(255,255,255,0.08);
          align-self: stretch;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .step-divider { width: 100%; height: 1px; }
        }

        .step-icon {
          color: var(--accent-green);
          margin-bottom: 1.25rem;
        }

        .step h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .step p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .step-link {
          color: var(--accent-green);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.03em;
        }

        .step-link:hover { text-decoration: underline; }

        /* Story */
        .story-section { background: rgba(255,255,255,0.01); }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .story-grid { grid-template-columns: 1fr 1fr; }
        }

        .story-image-wrap {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .story-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 4/3;
        }

        .story-content {
          display: flex;
          flex-direction: column;
        }

        .mt-6 { margin-top: 1.5rem; }
        .inline-block { display: inline-block; }
      `}</style>
    </div>
  );
}
