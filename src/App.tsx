import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Story from './components/Story'
import EmailCapture from './components/EmailCapture'
import HatchHub from './pages/HatchHub'
import HatchDetail from './pages/HatchDetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Story />
                <EmailCapture />
              </>
            } />
            <Route path="/hatch-guide" element={<HatchHub />} />
            <Route path="/hatch-guide/:category" element={<HatchDetail />} />
            <Route path="/hatch-guide/:category/:flyId" element={<HatchDetail />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
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
