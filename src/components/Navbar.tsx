import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export default function Navbar({ onMenuClick, isMenuOpen }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          onClick={onMenuClick}
          className={`menu-icon-trigger ${isMenuOpen ? 'open' : ''}`}
          aria-label="Open Selection Chart"
        >
          <img src="/brand/logo-black-fish-white-arrow.png" alt="Menu Icon" className="navbar-icon-img" />
        </button>
        <span style={{ width: '1rem' }}></span>
        <Link to="/" className="brand-title">
          ARROWHEAD FLIES
        </Link>
      </div>



      <div className="navbar-right">
        <a
          href="https://instagram.com/arrowheadflies"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-icon"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>

      <style>{`
        .navbar-brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .brand-logo-full {
          height: 32px;
          width: auto;
          filter: brightness(1.2);
        }

        .navbar-left {
          display: flex;
          align-items: center;
        }

        .menu-icon-trigger {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          height: 52px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 1rem;
          overflow: hidden;
        }

        .trigger-visual {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-bars-icon {
          color: #FFFFFF;
          display: block;
          width: 22px;
          height: 22px;
          opacity: 0.8;
          transition: all 0.4s ease;
        }

        .menu-icon-trigger:hover .menu-bars-icon {
          opacity: 1;
          transform: scale(1.1);
        }

        .menu-icon-trigger:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .menu-icon-trigger:hover .menu-bars-icon {
          color: var(--text-primary);
        }

        .menu-icon-trigger.open {
          border-color: var(--accent-green);
          background: rgba(74, 222, 128, 0.1);
        }

        .menu-icon-trigger.open .menu-bars-icon {
          color: var(--accent-green);
        }

        .navbar-icon-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-icon-trigger.open .navbar-icon-img {
          transform: rotate(90deg);
        }

        .social-link-icon {
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }

        .social-link-icon:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .menu-icon-trigger {
            min-width: 60px;
            height: 48px;
            padding: 0 0.5rem;
          }
          .social-link-icon {
            padding: 0.4rem;
          }
          .navbar-icon-img {
            width: 36px;
            height: 36px;
          }
          .brand-logo-full {
            height: 24px;
          }
        }
      `}</style>
    </nav>
  );
}
