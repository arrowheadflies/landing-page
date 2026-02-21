import { Instagram } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="brand-title">ARROWHEAD</h1>
      <div className="navbar-right">
        <a
          href="https://instagram.com/arrowheadflies"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram size={20} />
          <span>@arrowheadflies</span>
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(10, 11, 12, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }


        @media (max-width: 480px) {
          .navbar {
            padding: 0.9rem 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
}
