import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-title">
        ARROWHEAD
      </Link>

      <div className="navbar-right">
        <Link to="/hatch-guide" className="nav-link">HATCH GUIDE</Link>
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
    </nav>
  );
}
