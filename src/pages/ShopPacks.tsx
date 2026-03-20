import { useEffect } from 'react';
import { CONFIG } from '../config';
import { ShoppingBag, Star, ShieldCheck, Truck, MousePointer2 } from 'lucide-react';

export default function ShopPacks() {
  // Add Stripe script to the page
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="shop-page">
      <div className="container shop-container">
        
        {/* SECTION 1: HEADER HERO */}
        <header className="shop-header text-center">
          <span className="shop-badge">ARROWHEAD STORE</span>
          <h1 className="shop-title">EQUIP YOUR RIG</h1>
          <p className="shop-subtitle">
            Hand-tied to order. weighted for depth. technically precise.
            Build your own selection or grab a curated fishery pack.
          </p>
        </header>

        {/* SECTION 2: BREAD & BUTTER PACKS */}
        <div className="section-divider">
          <span>CURATED FISHERY PACKS</span>
        </div>

        <div className="product-grid">
          {CONFIG.PACKS.map((pack) => (
            <div key={pack.id} className={`product-card ${pack.featured ? 'featured' : ''}`}>
              {pack.featured && <div className="featured-tag">BEST SELLER</div>}
              
              <div className="product-info">
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
              </div>

              {/* Stripe Buy Button Embed (handles cart & checkout) */}
              <div className="buy-button-wrap">
                <style dangerouslySetInnerHTML={{ __html: `
                  stripe-buy-button {
                    --stripe-color-primary: var(--color-deep-red);
                    --stripe-color-background: transparent;
                    --stripe-color-text: #f5f0e8;
                    width: 100%;
                  }
                `}} />
                {/* @ts-ignore */}
                <stripe-buy-button
                  buy-button-id={pack.buyButtonId}
                  publishable-key={CONFIG.STRIPE_PUBLISHABLE_KEY}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 3: THE INDIVIDUAL SHOP (NO MAINTENANCE ZONE) */}
        <div className="master-fly-section">
          <div className="master-fly-card">
            <div className="master-fly-content">
              <span className="master-eyebrow">BUILD A CUSTOM BOX</span>
              <h2>THE INDIVIDUAL FLY REGISTRY</h2>
              <p>
                Need specific patterns, sizes, or colors? Access our full catalog 
                of 50+ hand-tied flies. Build a custom selection and checkout 
                in one simple step on our secure Stripe list.
              </p>
              <div className="master-features">
                <div className="feat"><ShieldCheck size={16} /> Adjustable Quantities</div>
                <div className="feat"><Truck size={16} /> Combined Shipping</div>
                <div className="feat"><ShoppingBag size={16} /> Bulk Discounts Applied</div>
              </div>

              {/* LIVE MASTER BUY BUTTON (All 50 flies) */}
              <div className="master-buy-wrap">
                <style dangerouslySetInnerHTML={{ __html: `
                  /* Global Stripe Buy Button Styling to Match Arrowhead Theme */
                  stripe-buy-button {
                    --stripe-color-primary: #7b2226; /* Deep Arrowhead Red */
                    --stripe-color-background: transparent;
                    --stripe-color-text: #f5f0e8;
                    --stripe-font-family: "Outfit", "Inter", sans-serif;
                    display: block;
                    width: 100%;
                  }

                  .master-buy-wrap stripe-buy-button {
                    width: 320px;
                    margin: 0 auto;
                  }
                `}} />
                {/* @ts-ignore */}
                <stripe-buy-button
                  buy-button-id={CONFIG.MASTER_FLIES_BUY_BUTTON_ID}
                  publishable-key={CONFIG.STRIPE_PUBLISHABLE_KEY}
                />
              </div>
            </div>
            <div className="master-fly-visual">
               <MousePointer2 className="floating-cursor" size={48} />
               <div className="visual-grid">
                 {[...Array(9)].map((_, i) => <div key={i} className="v-dot" />)}
               </div>
            </div>
          </div>
        </div>

        {/* Help / Trust Section */}
        <footer className="shop-footer">
          <div className="benefits-bar">
            <div className="benefit">
              <ShieldCheck size={18} />
              <span>Bank-Level Security</span>
            </div>
            <div className="benefit">
              <Truck size={18} />
              <span>Fast Shipping (USA)</span>
            </div>
            <div className="benefit">
              <Star size={18} />
              <span>100% Satisfaction</span>
            </div>
          </div>
          <div className="help-card mt-12">
            <h4>Need a specialized rig suggestion?</h4>
            <p>Our team ties to order for fisheries from the Ozarks to the Rockies.</p>
            <a href={`mailto:${CONFIG.CONTACT_EMAIL}`} className="footer-link">Contact our head tyer →</a>
          </div>
        </footer>
      </div>

      <style>{`
        .shop-page {
          padding: 8rem 0 6rem;
          background: #090b0c;
          min-height: 100vh;
        }

        .shop-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .shop-header {
          margin-bottom: 5rem;
          text-align: center;
        }

        .shop-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: var(--color-deep-red);
          margin-bottom: 1rem;
          background: rgba(123, 34, 38, 0.1);
          padding: 0.25rem 0.85rem;
          border-radius: 4px;
        }

        .shop-title {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .shop-subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Divider */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .section-divider::after {
          content: '';
          height: 1px;
          flex: 1;
          background: rgba(255,255,255,0.06);
        }

        .section-divider span {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }

        /* Product Grid (Packs) */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .product-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.12);
        }

        .product-card.featured {
          border-color: var(--color-deep-red);
          background: rgba(123, 34, 38, 0.04);
        }

        .featured-tag {
          position: absolute;
          top: 0;
          right: 2rem;
          background: var(--color-deep-red);
          color: white;
          font-size: 0.65rem;
          font-weight: 900;
          padding: 0.4rem 0.8rem;
          border-radius: 0 0 4px 4px;
          letter-spacing: 0.1em;
        }

        .pack-price {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-green);
          margin-bottom: 0.5rem;
        }

        .product-info {
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .product-info h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .product-info p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Master Fly Card */
        .master-fly-section {
          margin-bottom: 6rem;
        }

        .master-fly-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
          position: relative;
        }

        @media (min-width: 900px) {
          .master-fly-card { grid-template-columns: 1.4fr 1fr; }
        }

        .master-fly-content {
          padding: 4rem;
          position: relative;
          z-index: 2;
        }

        .master-eyebrow {
          color: var(--color-deep-red);
          font-weight: 800;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
          display: block;
        }

        .master-fly-content h2 {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .master-fly-content p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 480px;
        }

        .master-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .feat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .feat svg { color: var(--accent-green); }

        .master-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
        }

        .master-fly-visual {
          background: rgba(123, 34, 38, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 250px;
        }

        .floating-cursor {
          color: var(--color-deep-red);
          opacity: 0.4;
          animation: float 4s infinite ease-in-out;
        }

        .visual-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          padding: 4rem;
          opacity: 0.1;
        }

        .v-dot { border: 1px solid white; border-radius: 50%; width: 6px; height: 6px; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }

        /* Footer Benefits */
        .shop-footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 4rem;
          text-align: center;
        }

        .benefits-bar {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .benefit svg { color: var(--accent-green); }

        .mt-12 { margin-top: 3rem; }
        .help-card h4 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .help-card p { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem; }
        .footer-link { color: var(--accent-green); font-weight: 700; text-decoration: none; }
        .footer-link:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .master-fly-content { padding: 2.5rem; }
          .benefits-bar { gap: 1.5rem; flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
