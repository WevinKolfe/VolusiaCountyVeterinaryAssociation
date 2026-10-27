import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getNavClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="Volusia Veterinary Medical Association home"
        >
          <span className="logo-main">VVMA</span>

          <span className="logo-subtitle">
            Volusia Veterinary Medical Association
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="nav-toggle-lines" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          <NavLink
            to="/"
            end
            className={getNavClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/events"
            className={getNavClass}
            onClick={closeMenu}
          >
            Events
          </NavLink>

          <NavLink
            to="/directory"
            className={getNavClass}
            onClick={closeMenu}
          >
            Directory
          </NavLink>

          <NavLink
            to="/resources"
            className={getNavClass}
            onClick={closeMenu}
          >
            Resources
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/membership"
            className={({ isActive }) =>
              `nav-join ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Apply to Join
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;