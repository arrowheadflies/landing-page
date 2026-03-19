import React from 'react';
import { Bug, ScrollText, Instagram, Search, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationChartProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationChart: React.FC<NavigationChartProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      title: 'HOME',
      description: 'The landing page & Arrowhead philosophy',
      icon: <ScrollText size={20} />,
      path: '/',
      color: '#f87171' // Red
    },
    {
      title: 'THE QUIVER',
      description: 'Fly Selection Matrix',
      icon: <Search size={20} />,
      path: '/quiver',
      color: '#38bdf8' // Blue
    },
    {
      title: 'SHOP PACKS',
      description: 'Curated Confidence Packs',
      icon: <Package size={20} />,
      path: '/shop-packs',
      color: '#facc15' // Yellow
    },
    {
      title: 'HATCH GUIDE',
      description: 'Tactical fly selection',
      icon: <Bug size={20} />,
      path: '/hatch-guide',
      color: 'var(--accent-green)'
    },
    {
      title: 'INSTAGRAM',
      description: 'Latest patterns',
      icon: <Instagram size={20} />,
      path: 'https://instagram.com/arrowheadflies',
      external: true,
      color: '#e879f9' // Pink/Purple
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`nav-drawer-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="nav-drawer-list">
          {menuItems.map((item, index) => (
            item.external ? (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-drawer-item"
                onClick={onClose}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="item-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="nav-drawer-item"
                onClick={onClose}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="item-icon" style={{ color: item.color }}>{item.icon}</div>
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            )
          ))}
        </div>

        <div className="nav-drawer-footer">
          <p>Tactical gear for the technical angler.</p>
        </div>

        <style>{`
          .nav-drawer-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            z-index: 800;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
          }

          .nav-drawer-backdrop.visible {
            opacity: 1;
            pointer-events: auto;
          }

          .nav-drawer {
            position: fixed;
            top: 80px;
            left: -320px;
            width: 320px;
            height: calc(100% - 80px);
            background: #0A0B0C;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            z-index: 900;
            display: flex;
            flex-direction: column;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 20px 0 50px rgba(0, 0, 0, 0.5);
          }

          .nav-drawer.open {
            transform: translateX(320px);
          }

          .nav-drawer-header {
            padding: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-drawer-brand {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 800;
            letter-spacing: 0.2em;
            color: var(--text-primary);
            font-size: 0.9rem;
          }

          .nav-drawer-logo {
            width: 32px;
            height: 32px;
            object-fit: contain;
            border-radius: 4px;
          }

          .nav-drawer-list {
            flex: 1;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .nav-drawer-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
            opacity: 0;
            transform: translateX(-20px);
          }

          .nav-drawer.open .nav-drawer-item {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) var(--delay);
          }

          .nav-drawer-item:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .item-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .item-content h3 {
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: var(--text-primary);
            margin: 0;
          }

          .item-content p {
            font-size: 0.7rem;
            color: var(--text-secondary);
            margin: 0.1rem 0 0 0;
            opacity: 0.7;
          }

          .nav-drawer-footer {
            padding: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            opacity: 0.4;
          }

          .nav-drawer-footer p {
            font-size: 0.65rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
          }

          @media (max-width: 480px) {
            .nav-drawer {
              width: 280px;
              left: -280px;
              top: 72px;
              height: calc(100% - 72px);
            }
            .nav-drawer.open {
              transform: translateX(280px);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default NavigationChart;
