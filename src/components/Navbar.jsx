import { NavLink, Link } from 'react-router-dom'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <Link to="/" className="navbar-brand">
            <span className="navbar-prompt">$</span>
            <span className="navbar-name">sennet senadheera</span>
            <span className="navbar-cursor" aria-hidden="true">|</span>
          </Link>
          <div className="navbar-actions">
            <a
              href="https://github.com/sennetsen"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-icon"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/sennet"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <Link to="/contact" className="btn btn-accent navbar-contact-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <nav className="navbar-nav">
        <div className="navbar-nav-inner">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            Resume
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
