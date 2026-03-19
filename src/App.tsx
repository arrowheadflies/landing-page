import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindYourFly from './pages/FindYourFly'
import ShopPacks from './pages/ShopPacks'
import HatchHub from './pages/HatchHub'
import HatchDetail from './pages/HatchDetail'
import FlyDetail from './pages/FlyDetail'
import Navbar from './components/Navbar'
import NavigationChart from './components/NavigationChart'

function App() {
  const [isNavChartOpen, setIsNavChartOpen] = useState(false)

  return (
    <Router>
      <div className="app-container">
        <Navbar
          onMenuClick={() => setIsNavChartOpen(!isNavChartOpen)}
          isMenuOpen={isNavChartOpen}
        />
        <NavigationChart
          isOpen={isNavChartOpen}
          onClose={() => setIsNavChartOpen(false)}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiver" element={<FindYourFly />} />
            <Route path="/quiver/:location" element={<FindYourFly />} />
            <Route path="/shop-packs" element={<ShopPacks />} />
            <Route path="/hatch-guide" element={<HatchHub />} />
            <Route path="/hatch-guide/:category" element={<HatchDetail />} />
            <Route path="/hatch-guide/:category/:stageId" element={<HatchDetail />} />
            <Route path="/fly/:flyId" element={<FlyDetail />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <img src="/brand/logo-icon.jpg" alt="Arrowhead" style={{ height: '40px', marginBottom: '1rem' }} />
              <span className="brand-title-small">ARROWHEAD FLIES</span>
            </div>
            <div className="footer-links">
              <a href="https://instagram.com/arrowheadflies" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="mailto:hello@arrowheadflies.com">Contact</a>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Arrowhead Flies. All rights reserved.
            </div>
          </div>
        </footer>

        <style>{`
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          main {
            flex: 1;
          }

          .footer {
            background-color: #0A0B0C;
            padding: 4rem 0;
            border-top: 1px solid var(--border-color);
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .footer-content {
              flex-direction: row;
              justify-content: space-between;
            }
          }

          .brand-title-small {
            font-weight: 700;
            letter-spacing: 0.2em;
            font-size: 1rem;
          }

          .footer-links {
            display: flex;
            gap: 2rem;
          }

          .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
          }

          .footer-links a:hover {
            color: var(--text-primary);
          }

          .footer-copyright {
            color: var(--text-secondary);
            font-size: 0.85rem;
            opacity: 0.6;
          }
        `}</style>
      </div>
    </Router>
  )
}

export default App
