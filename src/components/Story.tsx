import storyImage from '../assets/media/IMG_3572.jpg';

export default function Story() {
  return (
    <section className="story-section">
      <div className="container story-grid">
        <div className="story-image-placeholder">
          {/* In the future, this will be an image of tying flies or a river context */}
          <div className="image-texture"></div>
        </div>

        <div className="story-content">
          <h3 className="section-title">At the Vise</h3>
          <h4 className="story-headline">Quality isn't accidental. It's tied one thread wrap at a time.</h4>
          <p className="story-text">
            Arrowhead Flies was born from a simple desire to create a better fly fishing experience. We believe that if you're putting the effort into finding the right water and making the perfect cast, you shouldn't be second-guessing what's on the end of your tippet.
          </p>
          <p className="story-text">
            Every pattern we produce is tied with premium materials, secure whip finishes, and a dedication to the proportions that actually trigger strikes.
          </p>
          <a href="https://instagram.com/arrowheadflies" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-8">
            Follow Our Progress
          </a>
        </div>
      </div>

      <style>{`
        .story-section {
          padding: 6rem 0;
          background-color: #16191A; /* Slightly different from bg-dark to break up sections */
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
        }

        .story-image-placeholder {
          aspect-ratio: 4/5;
          background-color: var(--bg-panel);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          background-image: url('${storyImage}'); /* Beautiful river landscape shot */
          background-size: cover;
          background-position: center;
        }

        .image-texture {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top right, rgba(18, 20, 21, 0.4), transparent);
        }

        .section-title {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-green);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .story-headline {
          font-size: 2rem;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .story-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .mt-8 {
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
}
