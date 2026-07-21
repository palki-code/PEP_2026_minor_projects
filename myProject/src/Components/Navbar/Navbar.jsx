import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h2>MyProject</h2>
        </Link>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login" className="nav-btn-login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-btn-signup">Sign Up</Link>
            </li>
          </ul>

          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;