import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (email) {
      setIsSubmitting(true);
      try {
        // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
        const response = await fetch('https://formspree.io/f/xlgwwbad', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            setError(data["errors"].map((error: any) => error["message"]).join(", "));
          } else {
            setError("Oops! There was a problem submitting your form");
          }
        }
      } catch (error) {
        setError("Oops! There was a problem submitting your form");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="giveaway" className="giveaway-section">
      <div className="container">
        <div className="giveaway-card">
          <div className="giveaway-content">
            <span className="giveaway-badge">Limited Time</span>
            <h3 className="giveaway-title">The Early Season Box Giveaway</h3>
            <p className="giveaway-desc">
              We're giving away a custom-curated fly box loaded with 50 premium handcrafted flies specifically tied for early season hatches. Enter your email below to win, and to get exclusive updates before we officially launch the shop.
            </p>

            {submitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" size={24} />
                <p>You're entered! Check your inbox soon for updates on the launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="giveaway-form">
                <div className="input-group">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    className="input-dark pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm-auto" disabled={isSubmitting}>
                  {isSubmitting ? 'Entering...' : 'Enter Giveaway'}
                </button>
              </form>
            )}
            {error && <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>}
            <p className="disclaimer">No purchase necessary. We hate spam as much as you do.</p>
          </div>
        </div>
      </div>

      <style>{`
        .giveaway-section {
          padding: 6rem 0;
          background-color: var(--bg-dark);
        }

        .giveaway-card {
          background-color: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .giveaway-badge {
          display: inline-block;
          background-color: rgba(74, 222, 128, 0.1);
          color: var(--accent-green);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          margin-bottom: 1.5rem;
        }

        .giveaway-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .giveaway-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
        }

        .giveaway-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 450px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .giveaway-form {
            flex-direction: row;
            max-width: 550px;
          }
        }

        .input-group {
          position: relative;
          flex: 1;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }

        .pl-10 {
          padding-left: 2.75rem !important;
        }

        .w-full {
          width: 100%;
        }

        @media (min-width: 640px) {
          .sm-auto {
            width: auto;
          }
        }

        .disclaimer {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .success-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background-color: rgba(74, 222, 128, 0.05);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 4px;
          color: var(--accent-green);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
